#!/usr/bin/env python3
"""
Build Spanish CEFR reference data from ELELex.
Source: CEFRLex project (cental.uclouvain.be/cefrlex)
ELELex: CEFR-graded Spanish Lexical Resource
License: CC BY-NC-SA 4.0

Level assignment: word's CEFR level = first level where frequency > 0
POS mapping: FreeLing Spanish tagset -> English
"""

import os, sys

sys.stdout.reconfigure(encoding='utf-8')

TEMP = os.environ.get('TEMP', '/tmp')
TSV_PATH = os.path.join(TEMP, 'elelex.tsv')
OUT_PATH = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                         'src', 'data', 'cefr-reference', 'spanish.js')

# FreeLing/EAGLES Spanish POS mapping
POS_MAP = {
    'NC': 'noun', 'NP': 'proper_noun', 'NCF': 'noun', 'NCM': 'noun', 'NCS': 'noun',
    'VM': 'verb', 'VA': 'verb', 'VS': 'verb',
    'AQ': 'adj', 'AO': 'adj',
    'RG': 'adv', 'RN': 'adv',
    'SP': 'prep',
    'CC': 'conj', 'CS': 'conj',
    'PP': 'pron', 'PD': 'pron', 'PI': 'pron', 'PR': 'pron', 'PT': 'pron', 'PX': 'pron', 'PE': 'pron',
    'DA': 'det', 'DD': 'det', 'DI': 'det', 'DP': 'det', 'DT': 'det', 'DE': 'det',
    'Z': 'num', 'Zu': 'num', 'Zd': 'num', 'Zm': 'num', 'Zp': 'num',
    'I': 'interj',
    'W': 'date', 'Fd': 'punct', 'Fc': 'punct', 'Fp': 'punct', 'Fs': 'punct',
    'Fe': 'punct', 'Faa': 'punct', 'Fat': 'punct', 'Fg': 'punct', 'Fh': 'punct',
    'Fia': 'punct', 'Fit': 'punct', 'Fla': 'punct', 'Flt': 'punct', 'Fpa': 'punct',
    'Fpt': 'punct', 'Fra': 'punct', 'Frc': 'punct', 'Fx': 'punct', 'Fz': 'punct',
}

def map_pos(tag):
    tag = tag.strip().strip('"')
    # Try exact match first
    if tag in POS_MAP:
        return POS_MAP[tag]
    # Try first 2 chars
    if len(tag) >= 2 and tag[:2] in POS_MAP:
        return POS_MAP[tag[:2]]
    # Try first char
    if len(tag) >= 1 and tag[0] in POS_MAP:
        return POS_MAP[tag[0]]
    return 'other'

def escape_js(s):
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')

# Parse TSV
print("Reading ELELex TSV...")
with open(TSV_PATH, 'r', encoding='utf-8') as f:
    lines = f.readlines()

header = lines[0].strip().split('\t')
print(f"Header: {[h.strip(chr(34)) for h in header]}")

# Columns (quoted): "word", "tag", "level_freq@a1", "level_freq@a2", "level_freq@b1", "level_freq@b2", "level_freq@c1", ...
entries = []
seen = set()
for line in lines[1:]:
    parts = line.strip().split('\t')
    if len(parts) < 6:
        continue

    word = parts[0].strip().strip('"')
    tag = parts[1].strip().strip('"')

    if not word or len(word) < 2:
        continue

    pos = map_pos(tag)
    if pos in ('punct', 'date'):
        continue

    # Determine CEFR level: first level where frequency > 0
    # level_freq@a1=idx2, level_freq@a2=idx3, level_freq@b1=idx4, level_freq@b2=idx5
    level = None
    level_indices = [('A1', 2), ('A2', 3), ('B1', 4), ('B2', 5)]
    for lv, idx in level_indices:
        if idx < len(parts):
            val = parts[idx].strip().strip('"')
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
    f.write('// SPANISH CEFR REFERENCE DATA\n')
    f.write('// Source: ELELex (CEFRLex project, cental.uclouvain.be/cefrlex)\n')
    f.write('// A CEFR-Graded Lexical Resource for Spanish as a Foreign Language\n')
    f.write('// License: CC BY-NC-SA 4.0\n')
    f.write('// Grammar: PCIC (Plan Curricular del Instituto Cervantes), DELE framework\n')
    f.write('// Generated: 2026-03-19\n')
    f.write('// This is the SINGLE SOURCE OF TRUTH for Spanish curriculum planning\n\n')
    f.write('export const SPANISH_CEFR = {\n')

    # Meta
    f.write('  meta: {\n')
    f.write('    language: "es",\n')
    f.write('    languageName: "Spanish",\n')
    f.write('    family: "romance",\n')
    f.write('    fsiCategory: "I",\n')
    f.write('    fsiHours: 600,\n')
    f.write('    sources: [\n')
    f.write('      "ELELex: CEFR-Graded Lexical Resource for Spanish (CEFRLex, CC BY-NC-SA 4.0)",\n')
    f.write('      "Plan Curricular del Instituto Cervantes (PCIC) vocabulary inventory",\n')
    f.write('      "DELE vocabulary and grammar requirements by level",\n')
    f.write('      "Nueva gramatica de la lengua espanola (RAE)",\n')
    f.write('      "Aula Internacional textbook series",\n')
    f.write('    ],\n')
    f.write('    stats: {\n')
    for lv in ['A1','A2','B1','B2']:
        c = counts.get(lv, 0)
        f.write(f'      {lv}: {{ words: {c}, source: "ELELex frequency analysis" }},\n')
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
        ("Presente de indicativo (regular)", "-ar/-er/-ir conjugation: hablo, como, vivo", "tense"),
        ("Ser and estar", "Ser (identity/origin) vs estar (state/location)", "verb"),
        ("Hay vs estar", "Hay un gato (existence) vs El gato esta aqui (location)", "verb"),
        ("Articles: el/la/los/las/un/una/unos/unas", "Definite and indefinite articles with gender", "noun"),
        ("Gender and number", "Masculine/feminine, singular/plural: -o/-a, -s/-es", "noun"),
        ("Adjective agreement", "Position and agreement: alto/alta/altos/altas", "adj"),
        ("Negation: no", "No hablo espanol", "syntax"),
        ("Questions", "Inversion and intonation: Hablas espanol?", "syntax"),
        ("W-questions", "que, quien, donde, cuando, por que, como, cuanto, cual", "syntax"),
        ("Personal pronouns: subject", "yo, tu, el/ella/usted, nosotros, vosotros, ellos/ustedes", "pronoun"),
        ("Possessive adjectives", "mi/mis, tu/tus, su/sus, nuestro/a/os/as", "pronoun"),
        ("Demonstrative adjectives", "este/ese/aquel with gender/number", "pronoun"),
        ("Prepositions: a, de, en", "Voy a Madrid / Soy de Espana / Estoy en casa", "prep"),
        ("Prepositions: place", "en, sobre, debajo de, al lado de, entre", "prep"),
        ("Ir + a + infinitive", "Voy a comer (near future)", "tense"),
        ("Gustar and similar verbs", "Me gusta / Me encantan", "verb"),
        ("Tener que + infinitive", "Tengo que estudiar (obligation)", "verb"),
        ("Coordinating conjunctions", "y/e, o/u, pero, porque, sino", "conj"),
        ("Numbers and time", "Cardinal numbers, telling time", "vocab"),
        ("Present irregular verbs", "ir, tener, venir, querer, poder, hacer, decir, salir", "verb"),
    ]
    for topic, desc, cat in a1_grammar:
        f.write(f'      {{topic:"{escape_js(topic)}",desc:"{escape_js(desc)}",cat:"{cat}"}},\n')
    f.write('    ],\n')

    # A2 Grammar
    f.write('    A2: [\n')
    a2_grammar = [
        ("Preterito indefinido (regular)", "hable, comi, vivi", "tense"),
        ("Preterito indefinido (irregular)", "fui, tuve, hice, dije, puse, estuve", "tense"),
        ("Preterito imperfecto", "hablaba, comia, vivia", "tense"),
        ("Indefinido vs imperfecto", "Completed vs habitual/background", "tense"),
        ("Direct object pronouns", "lo, la, los, las, me, te, nos", "pronoun"),
        ("Indirect object pronouns", "le, les, me, te, nos", "pronoun"),
        ("Double object pronouns", "Se lo doy (se replaces le/les before lo/la)", "pronoun"),
        ("Reflexive verbs", "levantarse, ducharse, vestirse", "verb"),
        ("Comparative", "mas...que, menos...que, tan...como, mejor, peor", "adj"),
        ("Superlative", "el mas alto, el menos caro, -isimo", "adj"),
        ("Future simple", "hablare, comere, vivire + irregulars", "tense"),
        ("Conditional", "hablaria, comeria, viviria + irregulars", "tense"),
        ("Imperative: affirmative tu", "habla, come, vive + irregulars", "verb"),
        ("Imperative: affirmative usted/ustedes", "hable, coma, viva", "verb"),
        ("Relative pronoun: que", "El libro que lei / La chica que vino", "pronoun"),
        ("Subordinating conjunctions", "que, cuando, si, porque, aunque, mientras", "conj"),
    ]
    for topic, desc, cat in a2_grammar:
        f.write(f'      {{topic:"{escape_js(topic)}",desc:"{escape_js(desc)}",cat:"{cat}"}},\n')
    f.write('    ],\n')

    # B1 Grammar
    f.write('    B1: [\n')
    b1_grammar = [
        ("Presente de subjuntivo (regular)", "hable, coma, viva", "tense"),
        ("Presente de subjuntivo (irregular)", "sea, haya, vaya, sepa, pueda, tenga", "tense"),
        ("Subjunctive triggers", "querer que, es necesario que, para que, antes de que", "tense"),
        ("Subjunctive vs indicative", "Creo que + ind / No creo que + subj", "tense"),
        ("Preterito pluscuamperfecto", "habia hablado / habia comido", "tense"),
        ("Reported speech", "Dijo que... (tense concordance)", "syntax"),
        ("Relative pronouns: quien/donde/como", "La persona con quien hable", "pronoun"),
        ("Relative clauses: el que/la que", "Los que vinieron / Las que compraron", "pronoun"),
        ("Passive voice: ser + participle", "La casa fue construida", "verb"),
        ("Passive se", "Se venden pisos / Se habla espanol", "verb"),
        ("Gerundio and progressive", "estar + gerundio, ir/seguir/llevar + gerundio", "verb"),
        ("Advanced connectors", "sin embargo, no obstante, en cambio, por lo tanto", "conj"),
        ("Cause connectors", "puesto que, ya que, dado que, como", "conj"),
        ("Purpose connectors", "para que + subj, a fin de que, con el objetivo de", "conj"),
        ("Si clauses (types 1-2)", "Si + presente / Si + imperfecto de subjuntivo", "syntax"),
        ("Negative imperative", "No hables, No comas (subjunctive forms)", "verb"),
    ]
    for topic, desc, cat in b1_grammar:
        f.write(f'      {{topic:"{escape_js(topic)}",desc:"{escape_js(desc)}",cat:"{cat}"}},\n')
    f.write('    ],\n')

    # B2 Grammar
    f.write('    B2: [\n')
    b2_grammar = [
        ("Imperfecto de subjuntivo", "hablara/hablase, comiera/comiese", "tense"),
        ("Pluscuamperfecto de subjuntivo", "hubiera/hubiese hablado", "tense"),
        ("Condicional compuesto", "habria hablado", "tense"),
        ("Si clauses (type 3)", "Si hubiera sabido, habria ido", "syntax"),
        ("Futuro perfecto", "habra terminado (speculation about past)", "tense"),
        ("Nominalization", "decidir -> la decision, desarrollar -> el desarrollo", "noun"),
        ("Discourse markers", "en cuanto a, por un lado...por otro, de hecho, en efecto", "discourse"),
        ("Advanced relative clauses", "lo que, lo cual, cuyo/a/os/as", "pronoun"),
        ("Ser vs estar (advanced)", "Subtle distinctions, ser + past participle vs estar + adj", "verb"),
        ("Por vs para (advanced)", "Nuanced uses beyond basic rules", "prep"),
        ("Perifrasis verbales", "acabar de, dejar de, ponerse a, volver a, llegar a", "verb"),
        ("Advanced passive and impersonal", "se impersonal, se pasiva refleja", "verb"),
        ("Formal register", "Academic/professional writing structures", "register"),
        ("Complex sentence structure", "Embedded clauses, parenthetical, apposition", "syntax"),
        ("Subjunctive in relative clauses", "Busco alguien que hable... (unknown antecedent)", "tense"),
    ]
    for topic, desc, cat in b2_grammar:
        f.write(f'      {{topic:"{escape_js(topic)}",desc:"{escape_js(desc)}",cat:"{cat}"}},\n')
    f.write('    ],\n')
    f.write('  },\n\n')

    # Idioms
    f.write('  // SPANISH IDIOMS AND EXPRESSIONS\n')
    f.write('  idioms: {\n')
    f.write('    A1: [\n')
    a1_idioms = [
        ("Hola / Buenos dias", "Hello / Good morning", "Basic greeting"),
        ("Mucho gusto / Encantado/a", "Nice to meet you", "Introduction"),
        ("Por favor", "Please", "Politeness"),
        ("Muchas gracias", "Thank you very much", "Gratitude"),
        ("De nada / No hay de que", "You're welcome", "Response to thanks"),
        ("Lo siento / Perdona", "I'm sorry / Excuse me", "Apology"),
    ]
    for phrase, meaning, note in a1_idioms:
        f.write(f'      {{phrase:"{escape_js(phrase)}",meaning:"{escape_js(meaning)}",note:"{escape_js(note)}"}},\n')
    f.write('    ],\n')

    f.write('    A2: [\n')
    a2_idioms = [
        ("Estar como una cabra", "To be crazy", "Lit: to be like a goat"),
        ("Costar un ojo de la cara", "To cost an arm and a leg", "Lit: to cost an eye from the face"),
        ("Tener mala leche", "To be in a bad mood", "Lit: to have bad milk"),
        ("Meter la pata", "To put your foot in it", "Lit: to put in the paw"),
        ("Estar en las nubes", "To be daydreaming", "Lit: to be in the clouds"),
        ("No tener pelos en la lengua", "To speak one's mind bluntly", "Lit: to have no hairs on the tongue"),
    ]
    for phrase, meaning, note in a2_idioms:
        f.write(f'      {{phrase:"{escape_js(phrase)}",meaning:"{escape_js(meaning)}",note:"{escape_js(note)}"}},\n')
    f.write('    ],\n')

    f.write('    B1: [\n')
    b1_idioms = [
        ("Dar en el clavo", "To hit the nail on the head", "Getting it exactly right"),
        ("Tomar el pelo", "To pull someone's leg", "Lit: to take the hair"),
        ("Estar hecho polvo", "To be exhausted/devastated", "Lit: to be made dust"),
        ("Ir al grano", "To get to the point", "Lit: to go to the grain"),
        ("Ponerse las pilas", "To get one's act together", "Lit: to put in batteries"),
        ("Echar una mano", "To lend a hand", "Help someone"),
        ("Ser pan comido", "To be a piece of cake", "Lit: to be eaten bread"),
        ("No dar pie con bola", "To not get anything right", "Lit: to not hit the ball with the foot"),
    ]
    for phrase, meaning, note in b1_idioms:
        f.write(f'      {{phrase:"{escape_js(phrase)}",meaning:"{escape_js(meaning)}",note:"{escape_js(note)}"}},\n')
    f.write('    ],\n')

    f.write('    B2: [\n')
    b2_idioms = [
        ("Tirar la casa por la ventana", "To spare no expense", "Lit: throw the house out the window"),
        ("Estar entre la espada y la pared", "To be between a rock and a hard place", "Lit: between sword and wall"),
        ("No hay mal que por bien no venga", "Every cloud has a silver lining", "Proverb"),
        ("El que mucho abarca poco aprieta", "Jack of all trades, master of none", "Lit: who grabs too much squeezes little"),
        ("A buen entendedor pocas palabras bastan", "A word to the wise is sufficient", "Proverb"),
        ("Mas vale prevenir que curar", "Better safe than sorry", "Lit: better to prevent than to cure"),
        ("En boca cerrada no entran moscas", "Silence is golden", "Lit: flies don't enter a closed mouth"),
        ("Quien a buen arbol se arrima buena sombra le cobija", "You are known by the company you keep", "Proverb"),
    ]
    for phrase, meaning, note in b2_idioms:
        f.write(f'      {{phrase:"{escape_js(phrase)}",meaning:"{escape_js(meaning)}",note:"{escape_js(note)}"}},\n')
    f.write('    ],\n')
    f.write('  },\n\n')

    # Communicative functions
    f.write('  // COMMUNICATIVE FUNCTIONS\n')
    f.write('  communicativeFunctions: {\n')
    f.write('    A1: ["Introduce yourself and others","Greet and say goodbye (tu/usted register)","Ask/answer personal questions","Order food and drinks","Make purchases","Ask for/give directions","Tell time","Describe daily routine","Talk about hobbies (gustar)","Talk about family","Describe people/objects","Fill in forms","Write simple messages","Make appointments","Describe the weather","Express likes/dislikes and preferences","Express basic needs (tener que, necesitar)"],\n')
    f.write('    A2: ["Describe past events (indefinido/imperfecto)","Express future plans (ir a + inf)","Make comparisons","Express agreement/disagreement","Describe health issues","Handle travel situations","Give/follow instructions (imperative)","Write personal emails","Express emotions","Make suggestions","Handle phone conversations","Describe experiences","Express obligation (deber/tener que/hay que)"],\n')
    f.write('    B1: ["Express and justify opinions","Narrate stories and experiences","Handle complaints","Write formal/informal emails","Summarize articles/stories","Express hypotheses (condicional)","Give advice (subjuntivo)","Discuss current events","Present a topic orally","Participate in debates","Express conditions (si clauses)","Describe processes","Express wishes/doubts (subjuntivo)","Handle DELE B1 tasks"],\n')
    f.write('    B2: ["Present detailed arguments","Negotiate and persuade","Speculate about causes/consequences","Discuss abstract topics","Write essays/reports","Write formal correspondence","Adapt register (tu/usted/academic)","Handle professional interactions","Lead discussions","Give presentations","Analyze Spanish media","Express nuanced opinions","Handle DELE B2/SIELE tasks","Academic writing in Spanish"],\n')
    f.write('  },\n')

    f.write('};\n')

print(f"Written to {OUT_PATH}")
print(f"File size: {os.path.getsize(OUT_PATH)} bytes")
