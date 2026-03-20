#!/usr/bin/env python3
"""
Build Korean CEFR reference data from TOPIK/NIKL combined vocabulary list.
Source: github.com/julienshim/combined_korean_vocabulary_list

Level mapping:
  TOPIK A + NIKL beginner (rank <= 500) -> A1
  TOPIK A + NIKL beginner (rank > 500) -> A2
  TOPIK B + NIKL intermediate (rank <= 3000) -> B1
  TOPIK B + NIKL intermediate (rank > 3000) -> B2
  TOPIK C -> B2+ (advanced, included for completeness)
  No TOPIK level -> assigned by NIKL level or excluded

POS mapping (Korean -> English):
  명사 -> noun, 동사 -> verb, 형용사 -> adjective, 부사 -> adverb,
  관형사 -> determiner, 대명사 -> pronoun, 수사 -> numeral,
  감탄사 -> interjection, 의존명사 -> bound noun, 보조 용언 -> auxiliary,
  접사 -> affix, 줄어든 말 -> contraction
"""

import os, sys, json

sys.stdout.reconfigure(encoding='utf-8')

TEMP = os.environ.get('TEMP', '/tmp')
TSV_PATH = os.path.join(TEMP, 'korean_vocab.tsv')
OUT_PATH = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                         'src', 'data', 'cefr-reference', 'korean.js')

# POS mapping
POS_MAP = {
    '\uba85\uc0ac': 'noun',        # 명사
    '\ub3d9\uc0ac': 'verb',        # 동사
    '\ud615\uc6a9\uc0ac': 'adj',   # 형용사
    '\ubd80\uc0ac': 'adv',         # 부사
    '\uad00\ud615\uc0ac': 'det',   # 관형사
    '\ub300\uba85\uc0ac': 'pron',  # 대명사
    '\uc218\uc0ac': 'num',         # 수사
    '\uac10\ud0c4\uc0ac': 'interj', # 감탄사
    '\uc758\uc874\uba85\uc0ac': 'bound_noun', # 의존명사
    '\ubcf4\uc870 \uc6a9\uc5b8': 'aux', # 보조 용언
    '\uc811\uc0ac': 'affix',       # 접사
    '\uc904\uc5b4\ub4e0 \ub9d0': 'contraction', # 줄어든 말
}

def assign_level(topik_level, nikl_level, rank):
    """Assign CEFR-equivalent level based on TOPIK + NIKL + rank."""
    rank_num = 99999
    try:
        rank_num = int(rank) if rank.strip() else 99999
    except:
        pass

    if topik_level == 'A':
        return 'A1' if rank_num <= 500 else 'A2'
    elif topik_level == 'B':
        return 'B1' if rank_num <= 3000 else 'B2'
    elif topik_level == 'C':
        return 'B2'  # Advanced -> B2+
    else:
        # No TOPIK level: use NIKL
        nikl = nikl_level.strip()
        if nikl == '\ucd08\uae09':  # 초급 (beginner)
            return 'A2' if rank_num <= 1500 else 'B1'
        elif nikl == '\uc911\uae09':  # 중급 (intermediate)
            return 'B1' if rank_num <= 3000 else 'B2'
        else:
            return None  # Skip entries with no level info

def clean_word(word):
    """Remove numeric suffixes like 가다01 -> 가다, 가격03 -> 가격."""
    import re
    return re.sub(r'\d+$', '', word).strip()

def escape_js(s):
    """Escape string for JS."""
    return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')

# Parse TSV
print("Reading TSV...")
with open(TSV_PATH, 'r', encoding='utf-8') as f:
    lines = f.readlines()

entries = []
seen = set()
for line in lines[1:]:
    parts = line.strip().split('\t')
    if len(parts) < 7:
        parts += [''] * (7 - len(parts))

    rank, word, pos_kr, hanja, explanation, nikl_level, topik_level = parts[:7]

    word_clean = clean_word(word)
    if not word_clean or word_clean.startswith('-'):
        continue  # Skip affixes/suffixes

    level = assign_level(topik_level.strip(), nikl_level, rank)
    if not level:
        continue

    # Deduplicate by word+level
    key = f"{word_clean}_{level}"
    if key in seen:
        continue
    seen.add(key)

    pos_en = POS_MAP.get(pos_kr.strip(), 'other')

    entries.append({
        'w': word_clean,
        'p': pos_en,
        'hj': hanja.strip(),
        'ex': explanation.strip(),
        'l': level,
        'r': rank.strip(),
    })

# Sort by level then word
level_order = {'A1': 0, 'A2': 1, 'B1': 2, 'B2': 3}
entries.sort(key=lambda e: (level_order.get(e['l'], 9), e['w']))

# Count by level
counts = {}
for e in entries:
    counts[e['l']] = counts.get(e['l'], 0) + 1
print(f"Parsed {len(entries)} entries: {counts}")

# Build JS file
print("Writing JS file...")
with open(OUT_PATH, 'w', encoding='utf-8') as f:
    f.write('// KOREAN CEFR REFERENCE DATA\n')
    f.write('// Source: National Institute of Korean Language (NIKL) + TOPIK official vocabulary\n')
    f.write('// Parsed from: github.com/julienshim/combined_korean_vocabulary_list\n')
    f.write('// Grammar: TOPIK grammar patterns, Korean Grammar in Use, TTMIK\n')
    f.write('// Generated: 2026-03-19\n')
    f.write('// This is the SINGLE SOURCE OF TRUTH for Korean curriculum planning\n\n')
    f.write('export const KOREAN_CEFR = {\n')

    # Meta
    f.write('  meta: {\n')
    f.write('    language: "ko",\n')
    f.write('    languageName: "Korean",\n')
    f.write('    family: "koreanic",\n')
    f.write('    fsiCategory: "IV",\n')
    f.write('    fsiHours: 2200,\n')
    f.write('    sources: [\n')
    f.write('      "National Institute of Korean Language (NIKL) vocabulary list",\n')
    f.write('      "TOPIK official vocabulary (2015 public release)",\n')
    f.write('      "Korean Grammar in Use (Beginning, Intermediate, Advanced)",\n')
    f.write('      "Talk To Me In Korean (TTMIK) Levels 1-10",\n')
    f.write('      "TOPIK II grammar patterns list",\n')
    f.write('      "Yonsei Korean (Levels 1-6) vocabulary",\n')
    f.write('    ],\n')
    f.write('    stats: {\n')
    for lv in ['A1','A2','B1','B2']:
        c = counts.get(lv, 0)
        f.write(f'      {lv}: {{ words: {c}, source: "NIKL + TOPIK combined" }},\n')
    f.write('    }\n')
    f.write('  },\n\n')

    # Vocabulary
    f.write('  vocabulary: [\n')
    for e in entries:
        w = escape_js(e['w'])
        p = e['p']
        hj = escape_js(e['hj'])
        ex = escape_js(e['ex'])
        lv = e['l']
        parts = [f'w:"{w}"', f'p:"{p}"', f'l:"{lv}"']
        if hj:
            parts.append(f'hj:"{hj}"')
        if ex:
            parts.append(f'ex:"{ex}"')
        f.write('    {' + ','.join(parts) + '},\n')
    f.write('  ],\n\n')

    # Grammar constructs
    f.write('  // GRAMMAR CONSTRUCTS BY CEFR LEVEL\n')
    f.write('  grammar: {\n')

    # A1 Grammar
    f.write('    A1: [\n')
    a1_grammar = [
        ("Subject particle", "\uc774/\uac00", "marks the subject of a sentence"),
        ("Topic particle", "\uc740/\ub294", "marks the topic, contrast"),
        ("Object particle", "\uc744/\ub97c", "marks the direct object"),
        ("Location particle", "\uc5d0/\uc5d0\uc11c", "static location / action location"),
        ("Direction particle", "()\uc73c\ub85c", "direction, means, method"),
        ("Possessive particle", "\uc758", "possession, like 's in English"),
        ("Also particle", "\ub3c4", "also, too"),
        ("With particle", "\uacfc/\uc640, (\uc774)\ub791, \ud558\uace0", "and, with (listing/accompaniment)"),
        ("From-to particles", "\uc5d0\uc11c...\uae4c\uc9c0, \ubd80\ud130...\uae4c\uc9c0", "from...to (place/time)"),
        ("Copula", "\uc774\ub2e4/\uc774\uc5d0\uc694", "to be (noun + copula)"),
        ("Negation", "\uc548/\uc9c0 \uc54a\ub2e4", "two negation patterns"),
        ("Existence verbs", "\uc788\ub2e4/\uc5c6\ub2e4", "to exist / to not exist"),
        ("Present tense", "-\uc544/\uc5b4\uc694 (informal polite)", "basic present/past/state ending"),
        ("Past tense (intro)", "-\uc558/\uc5c8\uc5b4\uc694", "simple past tense"),
        ("Want to", "-\uace0 \uc2f6\ub2e4", "expressing desire"),
        ("Can/Cannot", "-(\uc73c)\ub9b4 \uc218 \uc788\ub2e4/\uc5c6\ub2e4", "ability/possibility"),
        ("And (sequential)", "-\uace0", "connecting two actions"),
        ("But", "-\uc9c0\ub9cc", "contrast/but"),
        ("Because", "-\uc544/\uc5b4\uc11c", "reason/cause"),
        ("If/When", "-(\uc73c)\uba74", "conditional"),
        ("Honorific system intro", "-(\uc73c)\uc138\uc694, \ud569\uc1fc\uccb4 basics", "polite speech levels"),
        ("Numbers: native Korean", "\ud558\ub098, \ub458, \uc14b...", "counting system 1"),
        ("Numbers: Sino-Korean", "\uc77c, \uc774, \uc0bc...", "counting system 2"),
        ("Counters", "\uac1c, \uba85, \ub9c8\ub9ac, \ubc88, \uc6d4, \uc77c, \uc2dc, \uc0b4", "basic counters"),
        ("Location words", "\uc704, \uc544\ub798, \uc55e, \ub4a4, \uc548, \ubc16, \uc606, \uc0ac\uc774", "spatial vocabulary"),
        ("Time expressions", "\uc5b4\uc81c, \uc624\ub298, \ub0b4\uc77c, \uc544\uce68, \uc800\ub141", "basic time words"),
        ("Question words", "\ub204\uad6c, \ubb50, \uc5b4\ub514, \uc5b8\uc81c, \uc65c, \uc5b4\ub5bb\uac8c", "interrogatives"),
        ("Please/Request", "-\uc544/\uc5b4 \uc8fc\uc138\uc694", "polite requests"),
        ("Progressive", "-\uace0 \uc788\ub2e4", "ongoing action"),
        ("Try doing", "-\uc544/\uc5b4 \ubcf4\ub2e4", "trying/experiencing"),
    ]
    for name, pattern, desc in a1_grammar:
        f.write(f'      {{topic:"{escape_js(name)}",pattern:"{escape_js(pattern)}",desc:"{escape_js(desc)}"}},\n')
    f.write('    ],\n')

    # A2 Grammar
    f.write('    A2: [\n')
    a2_grammar = [
        ("Future tense", "-(\uc73c)\ub9b4 \uac70\uc608\uc694", "future plans/intentions"),
        ("Intention", "-(\uc73c)\ub824\uace0 \ud558\ub2e4", "intention to do"),
        ("While/During", "-(\uc73c)\uba74\uc11c", "simultaneous actions"),
        ("Before", "-\uae30 \uc804\uc5d0", "before doing"),
        ("After", "-(\uc73c)\ub2c8 \ud6c4\uc5d0", "after doing"),
        ("Must/Should", "-\uc544/\uc5b4\uc57c \ud558\ub2e4", "obligation"),
        ("Don't have to", "-\uc9c0 \uc54a\uc544\ub3c4 \ub418\ub2e4", "lack of obligation"),
        ("Permission", "-\uc544/\uc5b4\ub3c4 \ub418\ub2e4", "it's okay to"),
        ("Prohibition", "-(\uc73c)\uba74 \uc548 \ub418\ub2e4", "must not"),
        ("Comparative", "-\ubcf4\ub2e4 (\ub354)", "comparison"),
        ("Superlative", "\uc81c\uc77c, \uac00\uc7a5", "superlative degree"),
        ("Experience", "-(\uc73c)\ub2c8 \uc801\uc774 \uc788\ub2e4", "past experience"),
        ("Reason (formal)", "-\uae30 \ub54c\ubb38\uc5d0", "because (formal cause)"),
        ("When/Time", "-(\uc73c)\ub2c0 \ub54c", "when"),
        ("Purpose", "-(\uc73c)\ub7ec \uac00\ub2e4", "go to do"),
        ("Connective: so/therefore", "-\uc544/\uc5b4\uc11c, \uadf8\ub798\uc11c", "therefore, so"),
        ("Connective: but", "-\ub294\ub370, \uadf8\ub7f0\ub370", "but/however"),
        ("Irregular verbs: \u3139", "\u3139 irregular (\ub9cc\ub4e4\ub2e4, \uc0b4\ub2e4)", "consonant drop"),
        ("Irregular verbs: \u3142", "\u3142 irregular (\ub355\ub2e4, \ubb3b\ub2e4)", "consonant change"),
        ("Irregular verbs: \u3137", "\u3137 irregular (\uac77\ub2e4, \ub4e3\ub2e4)", "consonant change"),
        ("Suggestion", "-(\uc73c)\ub2c8\uae4c\uc694?", "shall we?"),
        ("Promise/Will", "-(\uc73c)\ub9b4\uac8c\uc694", "I will (promise)"),
        ("Giving/Receiving", "\uc8fc\ub2e4/\ubc1b\ub2e4/\ub4dc\ub9ac\ub2e4", "giving and receiving verbs"),
        ("Honorific verbs", "\ub4dc\uc2dc\ub2e4, \uc7a1\uc218\uc2dc\ub2e4, \uacc4\uc2dc\ub2e4", "honorific verb forms"),
        ("Sino-Korean numbers deep", "\uc2ed, \ubc31, \ucc9c, \ub9cc, \uc5b5", "large numbers"),
    ]
    for name, pattern, desc in a2_grammar:
        f.write(f'      {{topic:"{escape_js(name)}",pattern:"{escape_js(pattern)}",desc:"{escape_js(desc)}"}},\n')
    f.write('    ],\n')

    # B1 Grammar
    f.write('    B1: [\n')
    b1_grammar = [
        ("Indirect speech: declarative", "-\ub2e4\uace0 \ud558\ub2e4", "he said that..."),
        ("Indirect speech: question", "-(\uc73c)\ub0d0\uace0 \ud558\ub2e4", "asked whether..."),
        ("Indirect speech: suggestion", "-\uc790\uace0 \ud558\ub2e4", "suggested to..."),
        ("Indirect speech: command", "-(\uc73c)\ub77c\uace0 \ud558\ub2e4", "told to..."),
        ("Passive voice", "-\uc774/\ud788/\ub9ac/\uae30- passive", "action done to subject"),
        ("Causative", "-\uc774/\ud788/\ub9ac/\uae30/\uc6b0/\ucd94- causative", "make/cause someone to"),
        ("Conjecture", "-(\uc73c)\ub9b4 \uac83 \uac19\ub2e4", "it seems like"),
        ("Seems/Appears", "-\ub098 \ubcf4\ub2e4", "it appears to"),
        ("Regret", "-(\uc73c)\ub9b4\uac78 \uadf8\ub7ac\ub2e4", "should have done"),
        ("Even if", "-\uc544/\uc5b4\ub3c4", "even though/even if"),
        ("As soon as", "-\uc790\ub9c8\uc790", "as soon as"),
        ("While/Contrast", "-(\uc73c)\ub294 \ubc18\uba74\uc5d0", "on the other hand"),
        ("Not only...but also", "-(\uc73c)\ub9b4 \ubfd0\ub9cc \uc544\ub2c8\ub77c", "not only...but also"),
        ("In order to", "-\ub3c4\ub85d", "so that, in order to"),
        ("Regardless", "-\uc5d0 \uc0c1\uad00\uc5c6\uc774", "regardless of"),
        ("Deciding to", "-\uae30\ub85c \ud558\ub2e4", "decide to do"),
        ("Noun modifier: past", "-(\uc73c)\ub2c8", "past modifier"),
        ("Noun modifier: present", "-\ub294", "present modifier for verbs"),
        ("Noun modifier: future", "-(\uc73c)\ub9b4", "future/conjecture modifier"),
        ("Advanced connectors", "-\ub294\ub370, -\ub2e4\uac00, -\ub354\ub2c8, -\ub77c\uc11c", "complex connectors"),
        ("Formal speech level", "\ud569\uc1fc\uccb4 full system", "formal polite endings"),
        ("Casual speech level", "\ubc18\ub9d0 system", "informal speech"),
        ("Register switching", "Speech level mixing rules", "when to use which level"),
        ("Irregular verbs: \u3145", "\u3145 irregular (\ub0ab\ub2e4, \uc9d3\ub2e4)", "consonant drop"),
        ("Irregular verbs: \u314e", "\u314e irregular (\uadf8\ub807\ub2e4, \ud558\uc580\ub2e4)", "consonant change"),
        ("Irregular verbs: \u3139\u3139", "\u3139\u3139 irregular (\ubaa8\ub974\ub2e4, \ube60\ub974\ub2e4)", "double consonant"),
        ("Expressing degree", "-(\uc73c)\ub9b4 \uc815\ub3c4\ub85c", "to the extent that"),
        ("Despite", "-\uc74c\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0", "despite, in spite of"),
        ("According to", "-\uc5d0 \ub530\ub974\uba74", "according to"),
        ("As a result", "-(\uc73c)\ub2c8 \uacb0\uacfc", "as a result of"),
    ]
    for name, pattern, desc in b1_grammar:
        f.write(f'      {{topic:"{escape_js(name)}",pattern:"{escape_js(pattern)}",desc:"{escape_js(desc)}"}},\n')
    f.write('    ],\n')

    # B2 Grammar
    f.write('    B2: [\n')
    b2_grammar = [
        ("Advanced passive patterns", "\ub418\ub2e4 passive, -\uc544/\uc5b4\uc9c0\ub2e4", "formal/written passives"),
        ("Double passive", "-\uc544/\uc5b4\uc9c0\ub2e4 + context", "complex passive voice"),
        ("Nominalizing: -\uc74c/\uae30", "\uc74c/\uae30 nominalization rules", "verb to noun conversion"),
        ("Written style: -(\uc73c)\uba70", "-(\uc73c)\uba70, -(uc73c)\ub85c\uc368", "written/formal connectors"),
        ("Written style: -\ub294 \ubc14", "-\ub294 \ubc14, -\ub294 \uc140\uce58\ub2e4", "written expressions"),
        ("Concession: -\ub354\ub77c\ub3c4", "-\ub354\ub77c\ub3c4", "even if (hypothetical)"),
        ("While: -\ub294 \uac00\uc6b4\ub370", "-\ub294 \uac00\uc6b4\ub370, -\ub294 \uc911\uc5d0", "while/amid"),
        ("Advanced cause: -\ub294 \ud1b5\uc5d0", "-\ub294 \ud1b5\uc5d0, -\ub294 \ubc14\ub78c\uc5d0", "as a result of"),
        ("Advanced condition: -\ub294 \ud55c", "-\ub294 \ud55c, -\ub294 \uc774\uc0c1", "as long as"),
        ("Expressing change", "-\uc544/\uc5b4\uc9c0\ub2e4, -\uac8c \ub418\ub2e4", "becoming/changing"),
        ("TOPIK writing: 51", "Short answer format", "TOPIK II writing task 51"),
        ("TOPIK writing: 52", "Short composition format", "TOPIK II writing task 52"),
        ("TOPIK writing: 53", "Essay format", "TOPIK II writing task 53"),
        ("Proverbs in context", "\uc18d\ub2f4/\uad00\uc6a9\uad6c in essays", "using proverbs formally"),
        ("Four-character idioms", "\uc0ac\uc790\uc131\uc5b4 usage", "Sino-Korean 4-char expressions"),
        ("Academic vocabulary", "\ud559\uc220\uc801 \uc5b4\ud718", "scholarly words/phrases"),
        ("Discourse markers", "\ub530\ub77c\uc11c, \uadf8\ub7ec\ubbc0\ub85c, \uc989", "formal discourse markers"),
        ("Register mastery", "4 speech levels fluently", "switching between all registers"),
        ("Complex sentence patterns", "Multi-clause embedding", "nested clauses"),
        ("Advanced honorifics", "\ub192\uc784\ub9d0 advanced system", "humble/exalting forms"),
        ("Hanja-based vocabulary", "\ud55c\uc790\uc5b4 compound analysis", "reading Sino-Korean words"),
        ("Idiomatic body expressions", "\ubab8 \uad00\ub828 \uad00\uc6a9\uc5b4", "body-based idioms"),
        ("News/formal Korean", "\ub274\uc2a4 \ud55c\uad6d\uc5b4", "news-style language"),
        ("Advanced conjunctions", "-\ub294\ubc14, -\ub294\uc9c0\ub77c, -\ub294\ucee4\ub155", "complex connectors"),
    ]
    for name, pattern, desc in b2_grammar:
        f.write(f'      {{topic:"{escape_js(name)}",pattern:"{escape_js(pattern)}",desc:"{escape_js(desc)}"}},\n')
    f.write('    ],\n')
    f.write('  },\n\n')

    # Particles
    f.write('  // KOREAN PARTICLES (essential, unique to Korean)\n')
    f.write('  particles: {\n')
    f.write('    A1: [\n')
    a1_particles = [
        ("\uc774/\uac00", "subject", "Subject marker"),
        ("\uc740/\ub294", "topic", "Topic marker, contrast"),
        ("\uc744/\ub97c", "object", "Object marker"),
        ("\uc5d0", "location/time", "At, on, in (static)"),
        ("\uc5d0\uc11c", "location", "At, in (action location)"),
        ("\uc73c\ub85c/\ub85c", "direction", "To, toward, by means of"),
        ("\uc758", "possessive", "Of, possessive"),
        ("\ub3c4", "also", "Also, too"),
        ("\uacfc/\uc640", "and/with", "And, with"),
        ("\uc774\ub791/\ub791", "and/with", "And, with (casual)"),
        ("\ud558\uace0", "and/with", "And, with (formal)"),
        ("\ubd80\ud130", "from", "From (starting point)"),
        ("\uae4c\uc9c0", "until/to", "Until, to (endpoint)"),
        ("\ub9cc", "only", "Only, just"),
        ("\uc5d0\uac8c/\ud55c\ud14c", "to person", "To (a person), indirect object"),
    ]
    for word, cat, meaning in a1_particles:
        f.write(f'      {{w:"{escape_js(word)}",cat:"{cat}",meaning:"{escape_js(meaning)}"}},\n')
    f.write('    ],\n')

    f.write('    A2: [\n')
    a2_particles = [
        ("\ub9c8\ub2e4", "each", "Every, each"),
        ("\ubcf4\ub2e4", "than", "Than (comparison)"),
        ("\ucc98\ub7fc", "like", "Like, as"),
        ("\ub9cc\ud07c", "as much as", "As much as"),
        ("\uc5d0 \ub300\ud574\uc11c", "about", "About, regarding"),
        ("\uc5d0 \ub300\ud55c", "about (modifier)", "About, regarding (modifier)"),
        ("\uc744/\ub97c \uc704\ud574\uc11c", "for", "For the sake of"),
        ("\ubfd0", "only", "Only (emphatic)"),
        ("\uc774\ub098/\ub098", "or", "Or"),
    ]
    for word, cat, meaning in a2_particles:
        f.write(f'      {{w:"{escape_js(word)}",cat:"{cat}",meaning:"{escape_js(meaning)}"}},\n')
    f.write('    ],\n')

    f.write('    B1: [\n')
    b1_particles = [
        ("\uc5d0 \uad00\ud574\uc11c", "about", "Concerning, regarding"),
        ("\uc5d0 \ub530\ub974\uba74", "according to", "According to"),
        ("\uc5d0 \ube44\ud574\uc11c", "compared to", "Compared to"),
        ("\uc5d0 \uad00\ud55c", "about (modifier)", "Regarding (modifier)"),
        ("\uc73c\ub85c\uc368", "by means of", "By (formal means)"),
        ("\uc870\ucc28", "even", "Even (emphatic, negative)"),
        ("\ub9c8\uc800", "even", "Even (negative, escalation)"),
        ("\uc774\ub77c\ub3c4", "even if", "At least, even if"),
        ("\uc774\uc57c\ub9d0\ub85c", "indeed", "Indeed, truly (emphasis)"),
    ]
    for word, cat, meaning in b1_particles:
        f.write(f'      {{w:"{escape_js(word)}",cat:"{cat}",meaning:"{escape_js(meaning)}"}},\n')
    f.write('    ],\n')

    f.write('    B2: [\n')
    b2_particles = [
        ("\uc73c\ub85c\uc11c", "as/in capacity", "As, in the capacity of"),
        ("\uc5d0 \uc758\ud574\uc11c", "by/because", "By, due to (formal)"),
        ("\uc744/\ub97c \ud1b5\ud574\uc11c", "through", "Through, via"),
        ("\uc5d0 \uad00\ub828\ud558\uc5ec", "related to", "In relation to"),
        ("\uc5d0 \ub530\ub77c", "following", "Following, along with"),
        ("\ub300\uc2e0\uc5d0", "instead", "Instead of"),
        ("\ub0b4\uc9c0", "up to", "Up to, throughout"),
        ("\uc774\ub098\ub9c8", "as many as", "As many/much as"),
    ]
    for word, cat, meaning in b2_particles:
        f.write(f'      {{w:"{escape_js(word)}",cat:"{cat}",meaning:"{escape_js(meaning)}"}},\n')
    f.write('    ],\n')
    f.write('  },\n\n')

    # Idioms
    f.write('  // IDIOMS AND PROVERBS\n')
    f.write('  idioms: {\n')
    f.write('    A1: [\n')
    a1_idioms = [
        ("\ubc18\uac11\uc2b5\ub2c8\ub2e4", "Nice to meet you", "Basic greeting"),
        ("\uc798 \ubd80\ud0c1\ud569\ub2c8\ub2e4", "Please take care of me", "When asking for help"),
        ("\uc218\uace0\ud558\uc138\uc694", "Take care / good work", "Farewell/acknowledgment"),
        ("\ub9db\uc788\uac8c \ub4dc\uc138\uc694", "Enjoy your meal", "Before eating (to others)"),
        ("\uc798 \uba39\uaca0\uc2b5\ub2c8\ub2e4", "I will eat well", "Before eating (by eater)"),
    ]
    for phrase, meaning, note in a1_idioms:
        f.write(f'      {{phrase:"{escape_js(phrase)}",meaning:"{escape_js(meaning)}",note:"{escape_js(note)}"}},\n')
    f.write('    ],\n')

    f.write('    A2: [\n')
    a2_idioms = [
        ("\uc2dc\uac04\uc774 \ub0a0\ub2e4", "Time flies", "Time passes quickly"),
        ("\ub208\uc774 \ub192\ub2e4", "To have high standards", "Lit: eyes are high"),
        ("\ubc1c\uc774 \ub113\ub2e4", "To know many people", "Lit: feet are wide"),
        ("\uc190\uc774 \ud06c\ub2e4", "To be generous", "Lit: hands are big"),
        ("\uadc0\uac00 \uc587\ub2e4", "To be easily influenced", "Lit: ears are thin"),
    ]
    for phrase, meaning, note in a2_idioms:
        f.write(f'      {{phrase:"{escape_js(phrase)}",meaning:"{escape_js(meaning)}",note:"{escape_js(note)}"}},\n')
    f.write('    ],\n')

    f.write('    B1: [\n')
    b1_idioms = [
        ("\ub208\ucf54 \ub720 \uc0ac\uc774 \uc5c6\ub2e4", "Extremely busy", "Lit: no time to open eyes and nose"),
        ("\ubc1c \ub51b\uace0 \uc790\ub2e4", "To sleep soundly", "Lit: stretch your feet and sleep"),
        ("\uc6d0\uc219\uc774\ub3c4 \ubc18\uc219\uc774\ub3c4 \ubabb\ud55c\ub2e4", "Not skilled at anything", "Can't do anything well"),
        ("\ub0a8\uc758 \ub5a1", "None of one's business", "Lit: someone else's rice cake"),
        ("\ubb3c\uc5b4\ub72f\ub2e4", "To take a big blow", "Lit: bitten by water"),
        ("\uc601 \uc544\ub2c8\ub2e4", "Not at all", "Absolutely not / no way"),
        ("\ubc14\uac00\uc9c0\ub2e4", "To be crazy about", "Infatuated with"),
        ("\uc7a0\uc744 \uc124\uce58\ub2e4", "Can't sleep well", "Tossing and turning"),
        ("\uac00\uc2b4\uc774 \ub6f0\ub2e4", "Heart is pounding", "Excited or nervous"),
        ("\ub9d0\ub3c4 \uc548 \ub418\ub2e4", "That's ridiculous", "Can't even talk about it"),
    ]
    for phrase, meaning, note in b1_idioms:
        f.write(f'      {{phrase:"{escape_js(phrase)}",meaning:"{escape_js(meaning)}",note:"{escape_js(note)}"}},\n')
    f.write('    ],\n')

    f.write('    B2: [\n')
    b2_idioms = [
        ("\uc6b0\ubb3c \uc548 \uac1c\uad6c\ub9ac", "A frog in a well", "Narrow-minded person (proverb)"),
        ("\ub3cc\ub2e4\ub9ac\ub3c4 \ub450\ub4dc\ub9ac\uace0 \uac74\ub108\ub77c", "Look before you leap", "Be cautious (proverb)"),
        ("\uc6d0\uc219\uc774\ub3c4 \ub098\ubb34\uc5d0\uc11c \ub5a8\uc5b4\uc9c4\ub2e4", "Even monkeys fall from trees", "Everyone makes mistakes (proverb)"),
        ("\uc2dc\uc791\uc774 \ubc18\uc774\ub2e4", "Starting is half the battle", "Well begun is half done"),
        ("\ucc9c \ub9ac \uae38\ub3c4 \ud55c \uac78\uc74c\ubd80\ud130", "A journey of 1000 ri begins with one step", "Start small"),
        ("\ubc31\uc9c0\uc7a5", "Best at something", "Lit: 100-battle general"),
        ("\uc77c\uc11d\uc774\uc870", "Two birds with one stone", "Kill two birds"),
        ("\uc0bc\uc2dc\uc138\ub07c", "Three meals a day", "Lit: three meals"),
        ("\uc0ac\uba74\ucd08\uac00", "The beginning is everything", "First impression matters"),
        ("\uc724\uace0\uc774 \ub9c8\ub974\ub2e4", "In dire straits", "At the end of one's rope"),
    ]
    for phrase, meaning, note in b2_idioms:
        f.write(f'      {{phrase:"{escape_js(phrase)}",meaning:"{escape_js(meaning)}",note:"{escape_js(note)}"}},\n')
    f.write('    ],\n')
    f.write('  },\n\n')

    # Communicative functions
    f.write('  // COMMUNICATIVE FUNCTIONS\n')
    f.write('  communicativeFunctions: {\n')
    f.write('    A1: ["Introduce yourself and others","Greet and say goodbye (formal/informal)","Ask/answer personal questions","Order food and drinks","Make purchases","Ask for/give directions","Tell time using both number systems","Describe daily routine","Talk about hobbies","Talk about family","Describe people/objects","Count with appropriate counters","Make phone calls (basic)","Use appropriate honorific level"],\n')
    f.write('    A2: ["Describe past events","Express future plans","Make comparisons","Express agreement/disagreement","Describe health issues","Handle basic travel","Give/follow instructions","Discuss work/education","Write personal messages","Express emotions","Handle restaurant situations","Use formal and informal speech","Express permission and prohibition"],\n')
    f.write('    B1: ["Express/justify opinions","Narrate stories and experiences","Handle complaints","Write semi-formal messages","Summarize information","Express hypotheses","Give advice","Make/respond to suggestions","Discuss current events","Present a topic","Switch between speech levels","Use indirect speech","Express regret and wishes"],\n')
    f.write('    B2: ["Present detailed arguments","Negotiate and persuade","Speculate about causes","Discuss abstract topics","Write formal reports/essays","Write TOPIK II essays (51/52/53)","Adapt register across 4 levels","Handle professional interactions","Lead discussions","Give presentations","Use proverbs and idioms naturally","Analyze news articles","Academic discussion"],\n')
    f.write('  },\n')

    f.write('};\n')

print(f"Written to {OUT_PATH}")
print(f"File size: {os.path.getsize(OUT_PATH)} bytes")
