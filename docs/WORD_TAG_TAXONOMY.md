# VerumLingua Universal Word Tag Taxonomy (v2)

> Approved by owner 2026-03-20. This is the AUTHORITATIVE spec for word-level tagging.
> Every word in every sentence across all languages uses this system.
> Nothing hardcoded for one language. Future languages plug in via Layer 3 sub-tags.

---

## Overview: Three Layers

Every word in a tagged sentence carries three layers of information:

```
Layer 1: POS     — what the word IS (noun, verb, article...)
Layer 2: Function — what the word DOES in THIS sentence (subject, object, predicate...)
Layer 3: Sub-cat  — language-specific detail (gender, case, tense, particle type...)
```

These three layers power:
- **Color system**: POS + sub determines word color. Articles use gender color.
- **Clickable words**: lemma field links to WORD_DB popup.
- **Grammar toggles**: POS maps to settings panel categories.
- **Understripe**: Function or sub determines understripe style.
- **Search/filter**: "show all dative sentences" = filter sub for "dat".
- **Grammar construct index**: grammarTags on step level (not per-word).

---

## Data Shape: Tagged Word

```javascript
{
  w: "gibt",                          // surface form as displayed
  pos: "verb",                        // Layer 1: what it IS
  fn: "pred",                         // Layer 2: what it DOES here
  sub: ["strong", "pres", "3sg"],     // Layer 3: fine detail array
  lemma: "geben",                     // base form for dictionary lookup (optional if same as w)
  // Optional fields (only when relevant):
  compound: ["Kranken", "Haus"],      // compound word parts (German/Dutch)
  root: null,                         // Semitic root consonants (Arabic/Hebrew: "k-t-b")
  tone: null,                         // tonal number (Chinese: 1-5, Vietnamese: 1-6)
}
```

### Field Rules
- `w`: REQUIRED. The exact surface form as it appears in the sentence.
- `pos`: REQUIRED. One of the Layer 1 POS tags.
- `fn`: REQUIRED. One of the Layer 2 Function tags.
- `sub`: REQUIRED. Array of Layer 3 sub-category strings. May be empty `[]` for simple cases.
- `lemma`: OPTIONAL. Only needed when surface form differs from base form (conjugated verbs, declined nouns, etc.). Omit when `w` IS the lemma.
- `compound`: OPTIONAL. Only for compound words. Array of constituent parts.
- `root`: OPTIONAL. Only for Semitic languages (Arabic, Hebrew).
- `tone`: OPTIONAL. Only for tonal languages (Chinese, Vietnamese).

---

## Layer 1: POS Tags (Universal)

| Tag | Description | Color | Languages |
|-----|------------|-------|-----------|
| `noun` | Any noun (common, proper, mass, count) | #2979FF (electric blue) | ALL |
| `verb` | Any verb (main, light) | #00C853 (acid green) | ALL |
| `adj` | Adjective (attributive, predicative) | #FF6D00 (hot orange) | ALL |
| `adv` | Adverb | #FF1744 (hot pink) | ALL |
| `art` | Article/Determiner | *uses gender color from sub* | Germanic, Romance |
| `prep` | Preposition | #C6A700 (vivid yellow) | Germanic, Romance, Slavic |
| `postp` | Postposition | #C6A700 | Korean, Japanese, Turkish, Hindi |
| `conj` | Conjunction (coordinating, subordinating) | #C6A700 | ALL |
| `pron` | Pronoun (all types) | #FF1744 (hot pink) | ALL |
| `part` | Particle (grammatical) | #C6A700 | Korean, Japanese, German, Chinese |
| `num` | Number/Numeral | #C6A700 | ALL |
| `counter` | Classifier/Counter word | #C6A700 | Korean, Japanese, Chinese, Thai |
| `intj` | Interjection | #C6A700 | ALL |
| `cop` | Copula (be-verbs, linking verbs) | #00C853 (acid green) | Korean, Spanish, Arabic |
| `hon` | Honorific marker (standalone) | #C6A700 | Korean, Japanese |
| `neg` | Negation word (standalone) | #C6A700 | ALL |
| `aux` | Auxiliary/Modal verb | #00C853 (acid green) | ALL |

### Color Resolution Rules
1. Articles (`art`): ALWAYS use gender color from `sub` tags, never POS color.
   - `m` = #0091FF (vivid sky blue / masculine)
   - `f` = #D50000 (deep crimson / feminine)
   - `n` = #00796B (emerald green / neuter)
   - `pl` = #00BFA5 (deep teal / plural)
   - `common` = #0091FF (Dutch de-words)
   - `indef` = #8D6E63 (warm bronze / indefinite)
2. Verbs (`verb`, `aux`, `cop`): ALWAYS #00C853 (acid green).
3. Pronouns (`pron`) and Adverbs (`adv`): ALWAYS #FF1744 (hot pink / modifier).
4. Structure words (`prep`, `postp`, `conj`, `part`, `num`, `counter`, `intj`, `hon`, `neg`): ALWAYS #C6A700 (vivid yellow).
5. Purple (#7B5EE8) is NEVER a word color. Purple = UI chrome only.

---

## Layer 2: Function Tags (Universal)

### Core Sentence Functions

| Tag | Description | Example |
|-----|------------|---------|
| `subj` | Subject | **Der Mann** geht |
| `obj_acc` | Accusative/Direct object | Ich sehe **den Mann** |
| `obj_dat` | Dative/Indirect object | Ich gebe **dem Mann** ein Buch |
| `obj_gen` | Genitive object/complement | trotz **des Wetters** |
| `obj_prep` | Prepositional object | Ich denke **an dich** |
| `pred` | Main predicate (finite verb) | Er **geht** |
| `pred_nom` | Predicate nominative | Er ist **Lehrer** |
| `pred_adj` | Predicate adjective | Er ist **gross** |

### Modifier Functions

| Tag | Description | Example |
|-----|------------|---------|
| `attr` | Attributive modifier (adj before noun) | der **grosse** Mann |
| `adverbial` | Adverbial modifier | Er lauft **schnell** |
| `temp` | Temporal expression | **Morgen** gehe ich |
| `loc` | Locative expression | **Im Park** spiele ich |
| `dir` | Directional expression | Ich gehe **nach Hause** |
| `manner` | Manner expression | Er spricht **leise** |
| `cause` | Causal expression | **Deshalb** bin ich hier |
| `degree` | Degree modifier | **sehr** gross |

### Determiner & Pronoun Functions

| Tag | Description | Example |
|-----|------------|---------|
| `det` | Determiner function | **der** Mann |
| `poss` | Possessive function | **mein** Buch |
| `refl` | Reflexive function | Er wascht **sich** |
| `explet` | Expletive/Dummy subject | **Es** regnet |
| `voc` | Vocative (direct address) | **Herr Muller**, kommen Sie |

### Verb-Related Functions

| Tag | Description | Example |
|-----|------------|---------|
| `aux_fn` | Auxiliary function | Ich **habe** gegessen |
| `modal_fn` | Modal function | Ich **kann** schwimmen |
| `inf` | Infinitive complement | Ich will **schwimmen** |
| `pp` | Past participle in compound tense | Ich habe **gegessen** |
| `sep` | Separated verb prefix | Er steht **auf** |

### Connector Functions

| Tag | Description | Example |
|-----|------------|---------|
| `conn` | Subordinating connector | ..., **weil** er mude ist |
| `coord` | Coordinating connector | Brot **und** Butter |
| `comp` | Comparison element | grosser **als** ich |
| `quot` | Quotative frame | Er sagte, **dass**... |
| `appos` | Appositive | Berlin, **die Hauptstadt** |

### Discourse & Pragmatic Functions

| Tag | Description | Example |
|-----|------------|---------|
| `topic` | Topic marker | Korean: 나**는** |
| `focus` | Focus/emphasis marker | Korean: 나**도**, German: **sogar** |
| `neg_fn` | Negation function | Er geht **nicht** |
| `disc` | Discourse particle/filler | German: **doch**, **mal**, **ja** |

---

## Layer 3: Sub-Category Tags (Language-Specific)

### Gender (Germanic, Romance, Arabic, Russian)
```
m        — masculine
f        — feminine
n        — neuter (German das, Russian средний)
pl       — plural
dual     — dual number (Arabic)
common   — common gender (Dutch de-words, Swedish en-words)
```

### Case (German, Russian, Turkish, Korean, Japanese, Arabic)
```
nom      — nominative
acc      — accusative
dat      — dative
gen      — genitive
inst     — instrumental (Russian)
prep_case — prepositional case (Russian)
abl      — ablative (Turkish, Latin)
loc_case — locative case (Turkish, Korean 에/에서)
voc_case — vocative case (e.g., Arabic, some Slavic)
```

### Definiteness
```
def      — definite (der, the, le)
indef    — indefinite (ein, a, un)
neg_art  — negative article (kein)
partitive — partitive (French du, de la)
```

### Verb Tense
```
pres     — present
past     — simple past
prat     — Prateritum (German)
perf     — perfect/Perfekt
pluperf  — pluperfect/Plusquamperfekt
fut      — future
fut2     — future perfect
```

### Verb Aspect (Russian, Chinese, Korean)
```
ipfv     — imperfective
pfv      — perfective
prog     — progressive (-고 있다, -ing)
hab      — habitual
inch     — inchoative (beginning of action)
```

### Verb Mood
```
ind      — indicative
subj     — subjunctive (French, Spanish)
konj1    — Konjunktiv I (German reported speech)
konj2    — Konjunktiv II (German hypothetical)
imp      — imperative
cond     — conditional
opt      — optative (wish mood)
juss     — jussive (Arabic command)
```

### Verb Voice
```
act      — active
pass     — passive
caus     — causative (Korean, Japanese, Turkish)
mid      — middle voice
recip    — reciprocal
```

### Person/Number
```
1sg, 2sg, 3sg, 1pl, 2pl, 3pl
formal   — formal you (Sie, vous, usted, 합쇼체)
```

### Register/Politeness (Korean, Japanese)
```
formal   — formal register (합쇼체, keigo)
polite   — polite register (해요체, desu/masu)
casual   — casual register (반말, plain form)
written  — written/literary style
humble   — humble form (Japanese kenjougo)
exalted  — exalted/respect form (Japanese sonkeigo)
```

### Verb Type
```
# Universal
strong   — strong/irregular verb (Germanic Ablaut)
weak     — weak/regular verb
mixed    — mixed verb (German: weak endings, vowel change)
modal    — modal verb
aux_type — auxiliary verb type
refl_type — reflexive verb

# German-specific
sep      — separable prefix verb
insep    — inseparable prefix verb

# Korean-specific
irreg_b  — ㅂ-irregular
irreg_d  — ㄷ-irregular
irreg_h  — ㅎ-irregular
irreg_s  — ㅅ-irregular
irreg_r  — ㄹ-irregular
irreg_eu — ㅡ-irregular
irreg_reu — 르-irregular
hada     — 하다-verb

# Japanese-specific
ru_verb  — Group 2 (ichidan)
u_verb   — Group 1 (godan)
irr_suru — する-verb
irr_kuru — 来る-verb

# Spanish-specific
stem_eie — stem-changing e>ie
stem_oue — stem-changing o>ue
stem_ei  — stem-changing e>i
ser_type — ser (identity/permanent)
estar_type — estar (state/location)

# Arabic-specific
root_pattern — root+pattern system (Form I-X)
```

### Particle Type (Korean, Japanese)
```
topic    — topic marker (은/는, は)
subj_p   — subject marker (이/가, が)
obj_p    — object marker (을/를, を)
loc_p    — location (에, に)
dir_p    — direction (으로, へ)
poss_p   — possessive (의, の)
also_p   — also/too (도, も)
only_p   — only (만, だけ)
from_p   — from (부터, から)
until_p  — until/to (까지, まで)
comit    — comitative/with (과/와, と)
instr    — instrumental (으로)
quotat   — quotative (고, と)
nomz     — nominalizer (기, 음, こと)
```

### Adjective Declension (German)
```
strong_decl  — strong declension (no article)
weak_decl    — weak declension (after definite article)
mixed_decl   — mixed declension (after indefinite article)
```

### Compound Analysis (German, Dutch)
```
compound_head — head/main element (Haus in Krankenhaus)
compound_mod  — modifier element (Kranken in Krankenhaus)
```

### Script (Japanese, multi-script languages)
```
kanji, hiragana, katakana, hangul, latin, arabic_script, cyrillic
```

### Tone (Chinese, Vietnamese)
```
tone1, tone2, tone3, tone4, tone5
```

### Semitic Root System (Arabic, Hebrew)
```
root     — 3/4-letter root (stored in root field, not sub)
pattern  — morphological pattern (fa3ala, maf3uul, etc.)
```

### Animacy (Russian, Polish)
```
anim     — animate
inanim   — inanimate
```

### Clitic (Romance)
```
proclitic  — before verb (French: je **le** vois)
enclitic   — after verb (Spanish: dim**elo**)
```

### Miscellaneous
```
proper     — proper noun (names, places)
contraction — contracted form (am = an + dem)
greeting   — greeting formula
sep_prefix — separated prefix particle
```

---

## Grammar Construct Tags (Step-Level)

On the STEP object (not per-word), the `grammarTags` array identifies which grammar constructs this sentence demonstrates. This powers the searchable grammar index.

```javascript
{ type: "teach", ...,
  grammarTags: ["perfekt_haben", "sep_verb", "dat_obj"]
}
```

### German Grammar Construct Tags
```
# Cases & Objects
nom_subj, acc_obj, dat_obj, gen_poss, gen_obj
dat_acc_double (double object: Ich gebe ihm das Buch)
prep_acc, prep_dat, wechsel_prep (two-way prepositions)

# Verb Constructs
sep_verb, insep_verb, refl_verb, modal_verb
perfekt_haben, perfekt_sein, prateritum
konj2_wurde, konj2_strong
passiv_werden, passiv_sein (Zustandspassiv)
zu_infinitiv, lassen_infinitiv

# Word Order
v2_word_order, verb_final (Nebensatz)
inversion (question/time-first)
te_ka_mo_lo (temporal-kausal-modal-lokal adverbial order)

# Clause Types
nebensatz, rel_clause, indir_speech
weil_clause, dass_clause, wenn_clause, ob_clause

# Noun/Adj
n_deklination, adj_declension
comparative, superlative
compound_noun

# Pragmatics
yes_no_question, w_question
greeting_formula, polite_request
```

### Korean Grammar Construct Tags
```
# Particles
topic_contrast, subj_marker, obj_marker
loc_marker, dir_marker, poss_marker
also_marker, only_marker

# Tense & Aspect
present_tense, past_tense, future_tense
progressive, habitual

# Speech Levels
haeyo_che, hapsyo_che, banmal

# Connectors
conn_and, conn_but, conn_because, conn_if
conn_so, conn_while, conn_after

# Verb Patterns
honorific_si, causative, passive
indirect_speech, nominalizer_gi, nominalizer_m
ability_can, inability_cannot
want_go_sipda, negation_an, negation_ji

# Sentence Types
yes_no_question, wh_question
polite_request, suggestion
```

### Dutch Grammar Construct Tags
```
de_het, sep_verb, insep_verb
perfectum_hebben, perfectum_zijn
er_construction, passive_worden
diminutive, compound_noun
```

### French Grammar Construct Tags
```
passe_compose_avoir, passe_compose_etre
imparfait, subjonctif, conditionnel
neg_ne_pas, pronoun_y, pronoun_en
cod_placement, coi_placement
liaison, elision
```

### Spanish Grammar Construct Tags
```
ser_estar, preterito, imperfecto
subjuntivo_presente, subjuntivo_imperfecto
por_para, pronoun_placement
reflexive_se, gustar_construction
```

---

## New Teach Card Shape (trg/src format)

```javascript
{
  type: "teach",
  trg: "das Buch",                    // target language word
  src: "the book",                    // source language translation
  gender: "n",                        // noun gender (if applicable)
  pos: "noun",                        // POS for WORD_DB
  example: "Hast du ein Buch?",       // example sentence (target)
  exampleSrc: "Do you have a book?",  // example sentence (source)
  tagged: [                           // tagged words array
    { w:"Hast", pos:"aux", fn:"pred", sub:["pres","2sg"], lemma:"haben" },
    { w:"du", pos:"pron", fn:"subj", sub:["2sg","nom"] },
    { w:"ein", pos:"art", fn:"det", sub:["indef","n","acc"] },
    { w:"Buch", pos:"noun", fn:"obj_acc", sub:["n","acc"], lemma:"Buch" },
  ],
  funInfo: "From Old High German 'buoh'. Related to 'book' and Dutch 'boek'. Early books were beech bark tablets.",
  grammarTags: ["yes_no_question", "indef_article"],
}
```

### New Story Step Shape

```javascript
{
  type: "story",
  speaker: "Verumius",                // character name or "narrator"
  trg: "Entschuldigung, ist das mein Koffer?",
  src: "Excuse me, is that my suitcase?",
  tagged: [...],
  grammarTags: ["yes_no_question", "poss_pron"],
  mood: "confused",                   // optional: character emotion for UI
}
```

---

## Renderer Detection (Dual Format)

The engine detects format by checking which fields exist:

```javascript
if (step.trg !== undefined) {
  // NEW FORMAT: use renderNewTeachCard / renderStoryStep
} else if (step.nl !== undefined) {
  // OLD FORMAT: use existing renderLegacyTeachCard
}
```

Old content is NEVER broken. New format runs alongside. When a full language is converted, old renderer code is archived.

---

## Implementation Notes

1. **Articles always use gender color**, never POS color. The `sub` array determines which gender color to use.
2. **When grammar toggle is OFF**, words revert to default text color (no grammar colors).
3. **When grammar toggle is ON**, translations (src) turn purple (#7B5EE8). Target words NEVER purple.
4. **Understripe** is driven by `fn` (function) or `sub` (gender/case), configurable in settings.
5. **`lemma` field** connects each word to WORD_DB for click-to-popup.
6. **`grammarTags`** on steps feed the Grammar Construct Index (searchable grammar reference).
7. **Empty `sub: []`** is valid for words where Layer 3 detail is not needed or not yet tagged.
