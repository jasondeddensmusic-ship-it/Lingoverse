#!/usr/bin/env python3
"""
Build Dutch CEFR reference data from NT2Lex.
Source: github.com/anaistack/NT2Lex (Creative Commons BY-NC-SA 4.0)

Level assignment: word's CEFR level = first level where it appears (has frequency > 0)
POS mapping: CGN tagset -> English
"""

import os, sys, re

sys.stdout.reconfigure(encoding='utf-8')

TEMP = os.environ.get('TEMP', '/tmp')
TSV_PATH = os.path.join(TEMP, 'nt2lex.tsv')
OUT_PATH = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                         'src', 'data', 'cefr-reference', 'dutch.js')

# CGN POS tag mapping
POS_MAP = {
    'N(soort)': 'noun', 'N(eigen)': 'proper_noun',
    'WW(': 'verb', 'ADJ(': 'adj', 'BW(': 'adv',
    'VZ(': 'prep', 'VG(': 'conj', 'VNW(': 'pron',
    'LID(': 'det', 'TW(': 'num', 'TSW(': 'interj',
    'LET(': 'punct', 'SPEC(': 'special',
}

def map_pos(tag):
    tag = tag.strip()
    for prefix, pos in POS_MAP.items():
        if prefix in tag:
            return pos
    return 'other'

def escape_js(s):
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')

# Parse TSV
print("Reading NT2Lex TSV...")
with open(TSV_PATH, 'r', encoding='utf-8') as f:
    lines = f.readlines()

header = lines[0].strip().split('\t')
# Find column indices for frequency at each level
# Format: F@A1, F@A2, F@B1, F@B2, F@C1
freq_cols = {}
for i, h in enumerate(header):
    for lv in ['A1','A2','B1','B2','C1']:
        if h == f'F@{lv}':
            freq_cols[lv] = i

print(f"Frequency columns: {freq_cols}")

entries = []
seen = set()
for line in lines[1:]:
    parts = line.strip().split('\t')
    if len(parts) < max(freq_cols.values()) + 1:
        continue

    word = parts[0].strip()
    tag = parts[1].strip()

    if not word or word.startswith("'") and len(word) < 3:
        continue

    pos = map_pos(tag)
    if pos in ('punct', 'special'):
        continue

    # Determine CEFR level: first level where frequency > 0
    level = None
    for lv in ['A1','A2','B1','B2']:
        idx = freq_cols.get(lv)
        if idx and idx < len(parts):
            val = parts[idx].strip()
            if val != '-' and val != '':
                try:
                    freq = float(val)
                    if freq > 0:
                        level = lv
                        break
                except:
                    pass

    if not level:
        continue

    # Deduplicate
    key = f"{word}_{level}"
    if key in seen:
        continue
    seen.add(key)

    entries.append({
        'w': word,
        'p': pos,
        'l': level,
    })

# Sort
level_order = {'A1': 0, 'A2': 1, 'B1': 2, 'B2': 3}
entries.sort(key=lambda e: (level_order.get(e['l'], 9), e['w']))

counts = {}
for e in entries:
    counts[e['l']] = counts.get(e['l'], 0) + 1
print(f"Parsed {len(entries)} entries: {counts}")

# Write JS
print("Writing JS file...")
with open(OUT_PATH, 'w', encoding='utf-8') as f:
    f.write('// DUTCH CEFR REFERENCE DATA\n')
    f.write('// Source: NT2Lex (github.com/anaistack/NT2Lex)\n')
    f.write('// A CEFR-Graded Lexical Resource for Dutch as a Foreign Language\n')
    f.write('// License: CC BY-NC-SA 4.0\n')
    f.write('// Grammar: NT2 exam framework, Basisgrammatica, Dutch: An Essential Grammar\n')
    f.write('// Generated: 2026-03-19\n')
    f.write('// This is the SINGLE SOURCE OF TRUTH for Dutch curriculum planning\n\n')
    f.write('export const DUTCH_CEFR = {\n')

    # Meta
    f.write('  meta: {\n')
    f.write('    language: "nl",\n')
    f.write('    languageName: "Dutch",\n')
    f.write('    family: "germanic",\n')
    f.write('    fsiCategory: "I",\n')
    f.write('    fsiHours: 600,\n')
    f.write('    sources: [\n')
    f.write('      "NT2Lex: CEFR-Graded Lexical Resource for Dutch (Anai stack, CC BY-NC-SA 4.0)",\n')
    f.write('      "NT2 Basiswoordenlijst",\n')
    f.write('      "Inburgeringsexamen vocabulary requirements",\n')
    f.write('      "Basisgrammatica Nederlands (Stumpel)",\n')
    f.write('      "Dutch: An Essential Grammar (Shetter & Ham)",\n')
    f.write('    ],\n')
    f.write('    stats: {\n')
    for lv in ['A1','A2','B1','B2']:
        c = counts.get(lv, 0)
        f.write(f'      {lv}: {{ words: {c}, source: "NT2Lex frequency analysis" }},\n')
    f.write('    }\n')
    f.write('  },\n\n')

    # Vocabulary
    f.write('  vocabulary: [\n')
    for e in entries:
        w = escape_js(e['w'])
        p = e['p']
        lv = e['l']
        f.write(f'    {{w:"{w}",p:"{p}",l:"{lv}"}},\n')
    f.write('  ],\n\n')

    # Grammar constructs
    f.write('  // GRAMMAR CONSTRUCTS BY CEFR LEVEL\n')
    f.write('  grammar: {\n')

    # A1 Grammar
    f.write('    A1: [\n')
    a1_grammar = [
        ("Present tense", "Regular verb conjugation: ik werk, jij werkt, hij/zij werkt", "tense"),
        ("Zijn and hebben", "Core irregular verbs in present", "verb"),
        ("Word order: SVO", "Subject-Verb-Object: Ik eet een appel", "syntax"),
        ("V2 word order", "Verb always in second position", "syntax"),
        ("Yes/No questions", "Verb-first: Werk jij hier?", "syntax"),
        ("W-questions", "wie, wat, waar, wanneer, waarom, hoe", "syntax"),
        ("Negation: niet/geen", "Position rules for negation", "syntax"),
        ("De/het articles", "Common vs neuter gender: de man, het huis", "noun"),
        ("Plural formation", "Patterns: -en, -s, umlaut", "noun"),
        ("Personal pronouns", "ik, jij/je, hij/zij, wij/we, jullie, zij/ze", "pronoun"),
        ("Possessive pronouns", "mijn, jouw, zijn, haar, ons/onze, hun", "pronoun"),
        ("Demonstratives", "deze/die, dit/dat", "pronoun"),
        ("Separable verbs", "opbellen, meekomen, uitleggen", "verb"),
        ("Modal verbs", "kunnen, moeten, willen, mogen, zullen", "verb"),
        ("Er + location", "Er staat een tafel / Er is een probleem", "syntax"),
        ("Prepositions: place", "in, op, aan, bij, naar, uit, van", "prep"),
        ("Prepositions: time", "om, op, in, van...tot", "prep"),
        ("Coordinating conjunctions", "en, of, maar, want, dus", "conj"),
        ("Numbers and time", "Cardinal numbers, telling time", "vocab"),
        ("Adjective: predicative", "De auto is groot (no inflection)", "adj"),
    ]
    for topic, desc, cat in a1_grammar:
        f.write(f'      {{topic:"{escape_js(topic)}",desc:"{escape_js(desc)}",cat:"{cat}"}},\n')
    f.write('    ],\n')

    # A2 Grammar
    f.write('    A2: [\n')
    a2_grammar = [
        ("Perfekt (voltooid tegenwoordige tijd)", "Ik heb gewerkt / Ik ben gegaan", "tense"),
        ("Hebben vs zijn in perfekt", "Motion/state change verbs use zijn", "tense"),
        ("Past participle formation", "ge- + stem + -t/-d/-en", "verb"),
        ("Imperfekt (onvoltooid verleden)", "Ik werkte / Ik ging", "tense"),
        ("Future with gaan/zullen", "Ik ga werken / Ik zal het doen", "tense"),
        ("Adjective declension", "De grote man / Het grote huis / Een groot huis", "adj"),
        ("Comparative and superlative", "groter, grootst, meer, meest", "adj"),
        ("Reflexive verbs", "zich wassen, zich voelen", "verb"),
        ("Subordinating conjunctions", "dat, omdat, als, wanneer, toen, terwijl", "conj"),
        ("Subordinate clause word order", "...dat ik het weet (verb-final)", "syntax"),
        ("Relative pronouns: die/dat", "De man die... Het boek dat...", "pronoun"),
        ("Indirect object pronouns", "me/mij, je/jou, hem, haar, ons, hun", "pronoun"),
        ("Om...te + infinitive", "Om Nederlands te leren", "syntax"),
        ("Diminutives", "-je, -tje, -pje, -etje, -kje rules", "noun"),
        ("Er as pronoun", "Er + preposition: eraan, erbij, ervoor", "pronoun"),
    ]
    for topic, desc, cat in a2_grammar:
        f.write(f'      {{topic:"{escape_js(topic)}",desc:"{escape_js(desc)}",cat:"{cat}"}},\n')
    f.write('    ],\n')

    # B1 Grammar
    f.write('    B1: [\n')
    b1_grammar = [
        ("Passive voice", "Het wordt gedaan / Het is gedaan", "verb"),
        ("Conditional: zou + infinitive", "Ik zou willen... / Als ik kon...", "tense"),
        ("Indirect speech", "Hij zei dat... / Ze vroeg of...", "syntax"),
        ("Advanced conjunctions", "doordat, zodat, mits, tenzij, hoewel", "conj"),
        ("Relative clauses: wie/wat", "wie, wat, waar, waarover", "pronoun"),
        ("Double infinitive", "Ik heb het kunnen doen", "verb"),
        ("Pluperfect", "Ik had gewerkt / Ik was gegaan", "tense"),
        ("Imperative forms", "Ga! Gaat u zitten! Laten we gaan!", "verb"),
        ("Prepositional phrases", "met betrekking tot, in verband met", "prep"),
        ("Word order: adverb placement", "Time-Manner-Place and inversions", "syntax"),
        ("Naarmate...hoe", "Naarmate je ouder wordt, hoe...", "conj"),
        ("Hoe...hoe / hoe...des te", "Hoe meer, hoe beter", "conj"),
        ("Er: subject-less sentences", "Er wordt gedanst (impersonal passive)", "syntax"),
        ("Advanced diminutives", "Usage in register and tone", "noun"),
        ("Participial constructions", "De lopende man / Het geschreven boek", "verb"),
    ]
    for topic, desc, cat in b1_grammar:
        f.write(f'      {{topic:"{escape_js(topic)}",desc:"{escape_js(desc)}",cat:"{cat}"}},\n')
    f.write('    ],\n')

    # B2 Grammar
    f.write('    B2: [\n')
    b2_grammar = [
        ("Subjunctive (aanvoegende wijs)", "Het zij zo / Leve de koning!", "verb"),
        ("Advanced passive constructions", "Er wordt beweerd dat... / Het laat zich zien", "verb"),
        ("Conditional types 1-3", "Als + present/imperfekt/pluperfect", "tense"),
        ("Cleft sentences", "Het is Jan die... / Wat ik bedoel is...", "syntax"),
        ("Advanced word order", "Topicalization, right dislocation", "syntax"),
        ("Discourse markers", "overigens, niettemin, desalniettemin, kortom", "discourse"),
        ("Advanced conjunctions B2", "te meer daar, in zoverre dat, voor zover", "conj"),
        ("Formal register", "dienen te, gaarne, betreffen", "register"),
        ("Academic Dutch", "Schrijftaal patterns for NT2 exam", "register"),
        ("Complex relative clauses", "hetgeen, hetwelk, wiens/wier", "pronoun"),
        ("Participial adjectives", "de verontrustende situatie", "adj"),
        ("Free indirect speech", "Narrative technique in Dutch literature", "syntax"),
    ]
    for topic, desc, cat in b2_grammar:
        f.write(f'      {{topic:"{escape_js(topic)}",desc:"{escape_js(desc)}",cat:"{cat}"}},\n')
    f.write('    ],\n')
    f.write('  },\n\n')

    # Idioms
    f.write('  // DUTCH IDIOMS AND EXPRESSIONS\n')
    f.write('  idioms: {\n')
    f.write('    A1: [\n')
    a1_idioms = [
        ("Hoe gaat het?", "How are you?", "Basic greeting"),
        ("Tot ziens", "Goodbye", "Formal farewell"),
        ("Alsjeblieft / Alstublieft", "Please / Here you go", "Politeness"),
        ("Dank je wel / Dank u wel", "Thank you", "Gratitude"),
        ("Geen probleem", "No problem", "Informal response"),
    ]
    for phrase, meaning, note in a1_idioms:
        f.write(f'      {{phrase:"{escape_js(phrase)}",meaning:"{escape_js(meaning)}",note:"{escape_js(note)}"}},\n')
    f.write('    ],\n')

    f.write('    A2: [\n')
    a2_idioms = [
        ("Met de deur in huis vallen", "To get straight to the point", "Lit: to fall into the house with the door"),
        ("Een appeltje voor de dorst", "Savings for a rainy day", "Lit: an apple for thirst"),
        ("Het regent pijpenstelen", "It's raining cats and dogs", "Lit: it's raining pipe stems"),
        ("De koek is op", "It's all gone / game over", "Lit: the cookie is finished"),
        ("Iets onder de knie krijgen", "To master something", "Lit: to get something under the knee"),
    ]
    for phrase, meaning, note in a2_idioms:
        f.write(f'      {{phrase:"{escape_js(phrase)}",meaning:"{escape_js(meaning)}",note:"{escape_js(note)}"}},\n')
    f.write('    ],\n')

    f.write('    B1: [\n')
    b1_idioms = [
        ("De spijker op de kop slaan", "To hit the nail on the head", "Exactly right"),
        ("Van het kastje naar de muur", "From pillar to post", "Being sent around"),
        ("De kat uit de boom kijken", "To wait and see", "Lit: watching the cat from the tree"),
        ("Op de hoogte zijn", "To be informed", "To know about something"),
        ("Een oogje in het zeil houden", "To keep an eye on things", "Monitoring"),
        ("Door de zure appel heen bijten", "To bite the bullet", "Endure something unpleasant"),
        ("Niet over een nacht ijs gaan", "Don't rush into things", "Lit: not walking on overnight ice"),
        ("In de wolken zijn", "To be over the moon", "Very happy"),
    ]
    for phrase, meaning, note in b1_idioms:
        f.write(f'      {{phrase:"{escape_js(phrase)}",meaning:"{escape_js(meaning)}",note:"{escape_js(note)}"}},\n')
    f.write('    ],\n')

    f.write('    B2: [\n')
    b2_idioms = [
        ("De kogel is door de kerk", "The die is cast", "Decision is made"),
        ("Het onderste uit de kan willen", "To want the very best", "Being demanding"),
        ("Met de mantel der liefde bedekken", "To cover with the cloak of charity", "To overlook faults"),
        ("Op twee gedachten hinken", "To be in two minds", "Being indecisive"),
        ("De hand in eigen boezem steken", "To look at one's own faults", "Self-reflection"),
        ("Boter bij de vis", "Cash on the barrel", "Pay immediately"),
        ("Van de regen in de drup", "Out of the frying pan into the fire", "Bad to worse"),
        ("Wie de schoen past, trekke hem aan", "If the shoe fits, wear it", "Apply it to yourself"),
    ]
    for phrase, meaning, note in b2_idioms:
        f.write(f'      {{phrase:"{escape_js(phrase)}",meaning:"{escape_js(meaning)}",note:"{escape_js(note)}"}},\n')
    f.write('    ],\n')
    f.write('  },\n\n')

    # Communicative functions
    f.write('  // COMMUNICATIVE FUNCTIONS\n')
    f.write('  communicativeFunctions: {\n')
    f.write('    A1: ["Introduce yourself and others","Greet and say goodbye (formal/informal jij/u)","Ask/answer personal questions","Order food and drinks","Make purchases","Ask for/give directions","Tell time","Describe daily routine","Talk about hobbies and interests","Talk about family","Describe people/objects","Fill in forms","Write simple messages","Make appointments","Describe the weather","Express simple needs and wants"],\n')
    f.write('    A2: ["Describe past events (perfekt)","Express future plans (gaan + infinitief)","Make comparisons","Express agreement/disagreement","Describe health issues","Handle basic travel situations","Give/follow instructions","Discuss work/education","Write personal letters","Express emotions","Handle shopping situations","Make suggestions","Handle phone conversations"],\n')
    f.write('    B1: ["Express and justify opinions","Narrate stories and experiences","Handle complaints","Write semi-formal emails","Summarize information","Express hypotheses (zou + infinitief)","Give advice","Discuss current events","Present a topic","Participate in discussions","Express conditions and results","Describe processes","Handle inburgeringsexamen speaking tasks"],\n')
    f.write('    B2: ["Present detailed arguments","Negotiate and persuade","Speculate about causes/consequences","Discuss abstract topics","Write formal reports/essays","Write formal correspondence","Adapt register (formal/informal/academic)","Handle professional interactions","Lead discussions","Give presentations","Analyze Dutch news/media","Academic writing in Dutch","NT2 Staatsexamen II preparation"],\n')
    f.write('  },\n')

    f.write('};\n')

print(f"Written to {OUT_PATH}")
print(f"File size: {os.path.getsize(OUT_PATH)} bytes")
