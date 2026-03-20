#!/usr/bin/env python3
"""
Build French CEFR reference data from FLELex.
Source: CEFRLex project (cental.uclouvain.be/cefrlex)
FLELex: CEFR-graded French Lexical Resource
License: CC BY-NC-SA 4.0

Level assignment: word's CEFR level = first level where frequency > 0
POS mapping: TreeTagger French tagset -> English
"""

import os, sys

sys.stdout.reconfigure(encoding='utf-8')

TEMP = os.environ.get('TEMP', '/tmp')
TSV_PATH = os.path.join(TEMP, 'flelex.csv')
OUT_PATH = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                         'src', 'data', 'cefr-reference', 'french.js')

# TreeTagger French POS mapping
POS_MAP = {
    'NOM': 'noun', 'NAM': 'proper_noun',
    'VER': 'verb', 'ADJ': 'adj', 'ADV': 'adv',
    'PRP': 'prep', 'KON': 'conj', 'PRO': 'pron',
    'DET': 'det', 'NUM': 'num', 'INT': 'interj',
    'ABR': 'abbr', 'SEN': 'punct', 'PUN': 'punct',
    'N': 'noun', 'V': 'verb', 'A': 'adj',
}

def map_pos(tag):
    tag = tag.strip()
    # Try exact match first
    if tag in POS_MAP:
        return POS_MAP[tag]
    # Try prefix match
    for prefix, pos in POS_MAP.items():
        if tag.startswith(prefix):
            return pos
    return 'other'

def escape_js(s):
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')

# Parse TSV
print("Reading FLELex TSV...")
with open(TSV_PATH, 'r', encoding='utf-8') as f:
    lines = f.readlines()

header = lines[0].strip().split('\t')
print(f"Header: {header}")

# Columns: word, tag, freq_a1, freq_a2, freq_b1, freq_b2, freq_c1, freq_c2, freq_total
entries = []
seen = set()
for line in lines[1:]:
    parts = line.strip().split('\t')
    if len(parts) < 7:
        continue

    word = parts[0].strip()
    tag = parts[1].strip()

    if not word or len(word) < 2:
        continue

    pos = map_pos(tag)
    if pos in ('punct', 'abbr'):
        continue

    # Determine CEFR level: first level where frequency > 0
    level = None
    # freq_a1=idx2, freq_a2=idx3, freq_b1=idx4, freq_b2=idx5
    level_indices = [('A1', 2), ('A2', 3), ('B1', 4), ('B2', 5)]
    for lv, idx in level_indices:
        if idx < len(parts):
            val = parts[idx].strip()
            if val and val != '-' and val != '0' and val != '0.0':
                try:
                    freq = float(val)
                    if freq > 0:
                        level = lv
                        break
                except:
                    pass

    if not level:
        continue

    # Deduplicate by word+level
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
    f.write('// FRENCH CEFR REFERENCE DATA\n')
    f.write('// Source: FLELex (CEFRLex project, cental.uclouvain.be/cefrlex)\n')
    f.write('// A CEFR-Graded Lexical Resource for French as a Foreign Language\n')
    f.write('// License: CC BY-NC-SA 4.0\n')
    f.write('// Grammar: DELF/DALF framework, Grammaire progressive du francais\n')
    f.write('// Generated: 2026-03-19\n')
    f.write('// This is the SINGLE SOURCE OF TRUTH for French curriculum planning\n\n')
    f.write('export const FRENCH_CEFR = {\n')

    # Meta
    f.write('  meta: {\n')
    f.write('    language: "fr",\n')
    f.write('    languageName: "French",\n')
    f.write('    family: "romance",\n')
    f.write('    fsiCategory: "I",\n')
    f.write('    fsiHours: 600,\n')
    f.write('    sources: [\n')
    f.write('      "FLELex: CEFR-Graded Lexical Resource for French (CEFRLex, CC BY-NC-SA 4.0)",\n')
    f.write('      "DELF/DALF vocabulary requirements by level",\n')
    f.write('      "Referentiel de l\'Alliance Francaise",\n')
    f.write('      "Grammaire progressive du francais (CLE International)",\n')
    f.write('      "Alter Ego+ textbook series vocabulary",\n')
    f.write('    ],\n')
    f.write('    stats: {\n')
    for lv in ['A1','A2','B1','B2']:
        c = counts.get(lv, 0)
        f.write(f'      {lv}: {{ words: {c}, source: "FLELex frequency analysis" }},\n')
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
        ("Present tense (indicatif present)", "Regular -er/-ir/-re conjugation", "tense"),
        ("Etre and avoir", "Core irregular verbs in present", "verb"),
        ("Articles: le/la/les/un/une/des", "Definite and indefinite articles with gender", "noun"),
        ("Gender and number", "Masculine/feminine, singular/plural agreement", "noun"),
        ("Adjective agreement", "Position and agreement: grand/grande/grands/grandes", "adj"),
        ("Adjective position", "Most after noun, BANGS before noun", "adj"),
        ("Negation: ne...pas", "Je ne parle pas francais", "syntax"),
        ("Questions: est-ce que / inversion", "Three question forms: intonation, est-ce que, inversion", "syntax"),
        ("W-questions", "qui, que, ou, quand, pourquoi, comment, combien", "syntax"),
        ("Personal pronouns: subject", "je, tu, il/elle/on, nous, vous, ils/elles", "pronoun"),
        ("Possessive adjectives", "mon/ma/mes, ton/ta/tes, son/sa/ses, notre, votre, leur", "pronoun"),
        ("Demonstrative adjectives", "ce/cet/cette/ces", "pronoun"),
        ("Prepositions: place", "a, en, au, aux, dans, sur, sous, devant, derriere", "prep"),
        ("Prepositions: time", "a, en, au, de...a, pendant", "prep"),
        ("Il y a", "Existential: Il y a un chat", "syntax"),
        ("Aller + infinitive (futur proche)", "Je vais manger", "tense"),
        ("Imperative", "Mange! Mangeons! Mangez!", "verb"),
        ("Coordinating conjunctions", "et, ou, mais, donc, car, ni, or", "conj"),
        ("Numbers and time", "Cardinal numbers, telling time", "vocab"),
        ("C'est / Il est", "C'est un livre / Il est grand", "syntax"),
    ]
    for topic, desc, cat in a1_grammar:
        f.write(f'      {{topic:"{escape_js(topic)}",desc:"{escape_js(desc)}",cat:"{cat}"}},\n')
    f.write('    ],\n')

    # A2 Grammar
    f.write('    A2: [\n')
    a2_grammar = [
        ("Passe compose (avoir)", "J'ai mange, tu as parle", "tense"),
        ("Passe compose (etre)", "Je suis alle(e), movement/state verbs + reflexives", "tense"),
        ("Agreement with etre", "Elle est allee, Ils sont partis", "tense"),
        ("Imparfait", "Je mangeais, formation and usage", "tense"),
        ("PC vs Imparfait", "Completed vs habitual/background actions", "tense"),
        ("Direct object pronouns", "le, la, les, me, te, nous, vous", "pronoun"),
        ("Indirect object pronouns", "lui, leur, me, te, nous, vous", "pronoun"),
        ("Y and en", "J'y vais / J'en veux", "pronoun"),
        ("Pronoun order", "Il me le donne / Je le lui ai donne", "pronoun"),
        ("Comparative", "plus...que, moins...que, aussi...que", "adj"),
        ("Superlative", "le plus grand, le moins cher", "adj"),
        ("Reflexive verbs", "se lever, se laver, se coucher", "verb"),
        ("Future simple", "Je mangerai, irregular stems", "tense"),
        ("Conditional present", "Je voudrais, je mangerais", "tense"),
        ("Relative pronouns: qui/que", "L'homme qui parle / Le livre que je lis", "pronoun"),
        ("Subordinating conjunctions", "que, quand, si, parce que, comme", "conj"),
    ]
    for topic, desc, cat in a2_grammar:
        f.write(f'      {{topic:"{escape_js(topic)}",desc:"{escape_js(desc)}",cat:"{cat}"}},\n')
    f.write('    ],\n')

    # B1 Grammar
    f.write('    B1: [\n')
    b1_grammar = [
        ("Subjonctif present (regular)", "Il faut que je parle, que tu finisses", "tense"),
        ("Subjonctif present (irregular)", "aille, fasse, puisse, sache, soit, ait", "tense"),
        ("Subjonctif triggers", "After: il faut que, vouloir que, pour que, bien que", "tense"),
        ("Plus-que-parfait", "J'avais mange / J'etais parti(e)", "tense"),
        ("Relative pronouns: dont/ou", "Le livre dont je parle / La ville ou j'habite", "pronoun"),
        ("Relative pronouns: lequel/auquel", "La raison pour laquelle...", "pronoun"),
        ("Passive voice", "La maison est construite / a ete construite", "verb"),
        ("Gerondif", "En mangeant, en parlant", "verb"),
        ("Participe present", "parlant, sachant (as adjective or clause)", "verb"),
        ("Advanced connectors", "pourtant, cependant, neanmoins, en revanche", "conj"),
        ("Cause connectors", "puisque, etant donne que, vu que, du fait que", "conj"),
        ("Consequence connectors", "donc, alors, par consequent, si bien que", "conj"),
        ("Concession", "bien que + subjonctif, malgre, quoique", "conj"),
        ("Reported speech", "Il a dit que... (tense concordance)", "syntax"),
        ("Si clauses (types 1-2)", "Si + present / Si + imparfait", "syntax"),
    ]
    for topic, desc, cat in b1_grammar:
        f.write(f'      {{topic:"{escape_js(topic)}",desc:"{escape_js(desc)}",cat:"{cat}"}},\n')
    f.write('    ],\n')

    # B2 Grammar
    f.write('    B2: [\n')
    b2_grammar = [
        ("Subjonctif passe", "Il est possible qu'il ait mange", "tense"),
        ("Conditionnel passe", "J'aurais voulu / Si j'avais su, j'aurais...", "tense"),
        ("Si clauses (type 3)", "Si + plus-que-parfait, conditionnel passe", "syntax"),
        ("Passe simple", "Recognition in literary texts: il mangea, ils allerent", "tense"),
        ("Nominalization", "decider -> la decision, developper -> le developpement", "noun"),
        ("Double pronouns advanced", "Il le lui a donne / Ne me le dites pas", "pronoun"),
        ("Discourse markers", "d'ailleurs, en effet, en fait, a vrai dire, quant a", "discourse"),
        ("Mise en relief", "C'est...qui/que, ce qui/ce que...c'est", "syntax"),
        ("Ne...que (restriction)", "Je ne mange que des legumes", "syntax"),
        ("Ne expletif", "Je crains qu'il ne vienne (formal)", "syntax"),
        ("Advanced passive", "Se faire + infinitif, se voir + infinitif", "verb"),
        ("Participial clauses", "La reunion terminee, nous sommes partis", "syntax"),
        ("Formal register", "Academic/professional writing structures", "register"),
        ("Complex relative clauses", "ce dont, ce a quoi, duquel", "pronoun"),
        ("Subjunctive vs indicative nuances", "After penser que (neg/interrog), apres que (ind)", "tense"),
    ]
    for topic, desc, cat in b2_grammar:
        f.write(f'      {{topic:"{escape_js(topic)}",desc:"{escape_js(desc)}",cat:"{cat}"}},\n')
    f.write('    ],\n')
    f.write('  },\n\n')

    # Idioms
    f.write('  // FRENCH IDIOMS AND EXPRESSIONS\n')
    f.write('  idioms: {\n')
    f.write('    A1: [\n')
    a1_idioms = [
        ("Bonjour / Bonsoir", "Good morning / Good evening", "Basic greeting"),
        ("Comment allez-vous?", "How are you? (formal)", "Formal greeting"),
        ("S'il vous plait / S'il te plait", "Please (formal/informal)", "Politeness"),
        ("Merci beaucoup", "Thank you very much", "Gratitude"),
        ("De rien / Je vous en prie", "You're welcome", "Response to thanks"),
        ("Excusez-moi / Pardon", "Excuse me / Sorry", "Politeness"),
    ]
    for phrase, meaning, note in a1_idioms:
        f.write(f'      {{phrase:"{escape_js(phrase)}",meaning:"{escape_js(meaning)}",note:"{escape_js(note)}"}},\n')
    f.write('    ],\n')

    f.write('    A2: [\n')
    a2_idioms = [
        ("Avoir le cafard", "To feel down / depressed", "Lit: to have the cockroach"),
        ("Couter les yeux de la tete", "To cost an arm and a leg", "Lit: to cost the eyes from the head"),
        ("Avoir la peche", "To feel great / energetic", "Lit: to have the peach"),
        ("Tomber dans les pommes", "To faint", "Lit: to fall in the apples"),
        ("Poser un lapin", "To stand someone up", "Lit: to place a rabbit"),
        ("Ce n'est pas la mer a boire", "It's not that hard", "Lit: it's not the sea to drink"),
    ]
    for phrase, meaning, note in a2_idioms:
        f.write(f'      {{phrase:"{escape_js(phrase)}",meaning:"{escape_js(meaning)}",note:"{escape_js(note)}"}},\n')
    f.write('    ],\n')

    f.write('    B1: [\n')
    b1_idioms = [
        ("Mettre la charrue avant les boeufs", "To put the cart before the horse", "Rushing things"),
        ("Avoir le beurre et l'argent du beurre", "To have your cake and eat it too", "Wanting everything"),
        ("Couper les cheveux en quatre", "To split hairs", "Overanalyzing"),
        ("Tourner autour du pot", "To beat around the bush", "Avoiding the topic"),
        ("Avoir d'autres chats a fouetter", "To have bigger fish to fry", "Lit: to have other cats to whip"),
        ("Mettre son grain de sel", "To put in one's two cents", "Giving unsolicited opinion"),
        ("Prendre la mouche", "To take offense easily", "Lit: to catch the fly"),
        ("En faire tout un fromage", "To make a big deal of nothing", "Lit: to make a whole cheese of it"),
    ]
    for phrase, meaning, note in b1_idioms:
        f.write(f'      {{phrase:"{escape_js(phrase)}",meaning:"{escape_js(meaning)}",note:"{escape_js(note)}"}},\n')
    f.write('    ],\n')

    f.write('    B2: [\n')
    b2_idioms = [
        ("Avoir voix au chapitre", "To have a say in the matter", "Formal expression"),
        ("Battre le fer tant qu'il est chaud", "Strike while the iron is hot", "Seize the moment"),
        ("Donner sa langue au chat", "To give up guessing", "Lit: to give your tongue to the cat"),
        ("Etre au bout du rouleau", "To be at the end of one's rope", "Exhaustion"),
        ("L'habit ne fait pas le moine", "Don't judge a book by its cover", "Lit: the habit doesn't make the monk"),
        ("Pierre qui roule n'amasse pas mousse", "A rolling stone gathers no moss", "Stability"),
        ("Revenons a nos moutons", "Let's get back to the subject", "Lit: let's return to our sheep"),
        ("Qui vivra verra", "Time will tell", "Lit: who lives will see"),
    ]
    for phrase, meaning, note in b2_idioms:
        f.write(f'      {{phrase:"{escape_js(phrase)}",meaning:"{escape_js(meaning)}",note:"{escape_js(note)}"}},\n')
    f.write('    ],\n')
    f.write('  },\n\n')

    # Communicative functions
    f.write('  // COMMUNICATIVE FUNCTIONS\n')
    f.write('  communicativeFunctions: {\n')
    f.write('    A1: ["Introduce yourself and others","Greet and say goodbye (tu/vous register)","Ask/answer personal questions","Order food and drinks","Make purchases","Ask for/give directions","Tell time","Describe daily routine","Talk about hobbies and interests","Talk about family","Describe people/objects","Fill in forms","Write simple messages/postcards","Make appointments","Describe the weather","Express likes/dislikes (aimer/adorer/detester)"],\n')
    f.write('    A2: ["Describe past events (passe compose/imparfait)","Express future plans","Make comparisons","Express agreement/disagreement","Describe health issues","Handle travel situations","Give/follow instructions","Write personal letters/emails","Express emotions","Make suggestions","Handle phone conversations","Describe experiences","Express obligation (devoir/il faut)"],\n')
    f.write('    B1: ["Express and justify opinions","Narrate stories and experiences","Handle complaints","Write formal/informal emails","Summarize articles/stories","Express hypotheses (conditionnel)","Give advice","Discuss current events","Present a topic orally","Participate in debates","Express conditions (si clauses)","Describe processes","Express wishes/regrets (subjonctif)","Handle DELF B1 tasks"],\n')
    f.write('    B2: ["Present detailed arguments","Negotiate and persuade","Speculate about causes/consequences","Discuss abstract topics","Write essays/reports","Write formal correspondence","Adapt register (tu/vous/academic)","Handle professional interactions","Lead discussions","Give presentations","Analyze French media","Express nuanced opinions","Handle DELF B2/TCF tasks","Academic French writing"],\n')
    f.write('  },\n')

    f.write('};\n')

print(f"Written to {OUT_PATH}")
print(f"File size: {os.path.getsize(OUT_PATH)} bytes")
