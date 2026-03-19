// Korean function words — manually curated with POS tags
// Used by WORD_DB builder as highest-priority POS source
// Covers A1-B2 CEFR: particles, pronouns, conjunctions, adverbs,
// question words, auxiliaries, common verbs, numbers, counters, interjections
// Korean has NO articles or grammatical gender, but has a rich particle/suffix system

export const FUNCTION_WORDS_KO = [

  // ═══════════════════════════════════════════════════════════════════
  // PARTICLES (조사) — Topic markers
  // ═══════════════════════════════════════════════════════════════════
  { word: "은", lemma: "은/는", en: "topic marker", pos: "particle_topic", tags: ["after_consonant"] },
  { word: "는", lemma: "은/는", en: "topic marker", pos: "particle_topic", tags: ["after_vowel"] },

  // ═══════════════════════════════════════════════════════════════════
  // PARTICLES — Subject markers
  // ═══════════════════════════════════════════════════════════════════
  { word: "이", lemma: "이/가", en: "subject marker", pos: "particle_subj", tags: ["after_consonant"] },
  { word: "가", lemma: "이/가", en: "subject marker", pos: "particle_subj", tags: ["after_vowel"] },

  // ═══════════════════════════════════════════════════════════════════
  // PARTICLES — Object markers
  // ═══════════════════════════════════════════════════════════════════
  { word: "을", lemma: "을/를", en: "object marker", pos: "particle_obj", tags: ["after_consonant"] },
  { word: "를", lemma: "을/를", en: "object marker", pos: "particle_obj", tags: ["after_vowel"] },

  // ═════════════════════════════════════════════════════��═════════════
  // PARTICLES — Possessive
  // ═══════════════════════════════════════════════════════════════════
  { word: "의", lemma: "의", en: "possessive marker ('s/of)", pos: "particle_poss", tags: [] },

  // ═══════════════════════════════════════════════════════════════════
  // PARTICLES — Location / Time
  // ═══════════════════════════════════════════════════════════════════
  { word: "에", lemma: "에", en: "at/in/on/to (location/time)", pos: "particle_loc", tags: ["static","time"] },
  { word: "에서", lemma: "에서", en: "at/in/from (action location)", pos: "particle_loc", tags: ["dynamic","action_place"] },

  // ═══════════════════════════════════════════════════════════════════
  // PARTICLES — Direction
  // ═══════════════════════════════════════════════════════════════════
  { word: "으로", lemma: "(으)로", en: "to/toward/by means of", pos: "particle_dir", tags: ["after_consonant"] },
  { word: "로", lemma: "(으)로", en: "to/toward/by means of", pos: "particle_dir", tags: ["after_vowel","after_ㄹ"] },

  // ═══════════════════════════════════════════════════════════════════
  // PARTICLES — Connection / And / With
  // ═══════════════════════════════════════════════════════════════════
  { word: "와", lemma: "와/과", en: "and/with", pos: "particle_conn", tags: ["after_vowel","formal"] },
  { word: "과", lemma: "와/과", en: "and/with", pos: "particle_conn", tags: ["after_consonant","formal"] },
  { word: "하고", lemma: "하고", en: "and/with", pos: "particle_conn", tags: ["spoken","informal"] },
  { word: "이랑", lemma: "(이)랑", en: "and/with", pos: "particle_conn", tags: ["after_consonant","casual"] },
  { word: "랑", lemma: "(이)랑", en: "and/with", pos: "particle_conn", tags: ["after_vowel","casual"] },

  // ═══════════════════════════════════════════════════════════════════
  // PARTICLES — To/From person (dative)
  // ═══════════════════════════════════════════════════════════════════
  { word: "에게", lemma: "에게", en: "to (person, written)", pos: "particle_other", tags: ["dative","written"] },
  { word: "한테", lemma: "한테", en: "to (person, spoken)", pos: "particle_other", tags: ["dative","spoken"] },
  { word: "께", lemma: "께", en: "to (person, honorific)", pos: "particle_other", tags: ["dative","honorific"] },
  { word: "에게서", lemma: "에게서", en: "from (person, written)", pos: "particle_other", tags: ["ablative","written"] },
  { word: "한테서", lemma: "한테서", en: "from (person, spoken)", pos: "particle_other", tags: ["ablative","spoken"] },

  // ═══════════════════════════════════════════════════════════════════
  // PARTICLES — Comparison
  // ═══════════════════════════════════════════════════════════════════
  { word: "보다", lemma: "보다", en: "than/compared to", pos: "particle_comp", tags: ["comparison"] },

  // ═══════════════════════════════════════════════════════════════════
  // PARTICLES — Miscellaneous
  // ═══════════════════════════════════════════════════════════════════
  { word: "도", lemma: "도", en: "also/too/even", pos: "particle_other", tags: ["inclusive"] },
  { word: "만", lemma: "만", en: "only/just", pos: "particle_other", tags: ["restrictive"] },
  { word: "부터", lemma: "부터", en: "from/since", pos: "particle_other", tags: ["start_point"] },
  { word: "까지", lemma: "까지", en: "until/to/even", pos: "particle_other", tags: ["end_point"] },
  { word: "처럼", lemma: "처럼", en: "like/as", pos: "particle_comp", tags: ["simile"] },
  { word: "같이", lemma: "같이", en: "like/together with", pos: "particle_comp", tags: ["simile","together"] },
  { word: "마다", lemma: "마다", en: "every/each", pos: "particle_other", tags: ["distributive"] },
  { word: "조차", lemma: "조차", en: "even (emphatic)", pos: "particle_other", tags: ["emphatic","B1+"] },
  { word: "마저", lemma: "마저", en: "even/as well (last remaining)", pos: "particle_other", tags: ["emphatic","B1+"] },
  { word: "밖에", lemma: "밖에", en: "only/nothing but (+ neg)", pos: "particle_other", tags: ["restrictive","requires_neg"] },
  { word: "대로", lemma: "대로", en: "as/according to", pos: "particle_other", tags: ["manner"] },
  { word: "뿐", lemma: "뿐", en: "only/merely", pos: "particle_other", tags: ["restrictive","B1+"] },
  { word: "이나", lemma: "(이)나", en: "or/as many as", pos: "particle_other", tags: ["after_consonant","choice"] },
  { word: "나", lemma: "(이)나", en: "or/as many as", pos: "particle_other", tags: ["after_vowel","choice"] },
  { word: "쯤", lemma: "쯤", en: "about/approximately", pos: "particle_other", tags: ["approximation"] },
  { word: "씩", lemma: "씩", en: "each/apiece", pos: "particle_other", tags: ["distributive"] },
  { word: "이라도", lemma: "(이)라도", en: "even if it is/at least", pos: "particle_other", tags: ["concessive"] },
  { word: "라도", lemma: "(이)라도", en: "even if it is/at least", pos: "particle_other", tags: ["after_vowel","concessive"] },
  { word: "이야", lemma: "(이)야", en: "as for (emphasis)", pos: "particle_topic", tags: ["after_consonant","emphatic","casual"] },
  { word: "야", lemma: "(이)야", en: "as for (emphasis)", pos: "particle_topic", tags: ["after_vowel","emphatic","casual"] },

  // ═══════════════════════════════════════════════════════════════════
  // PRONOUNS — Personal (1st person)
  // ═══════════════════════════════════════════════════════════════════
  { word: "나", lemma: "나", en: "I/me", pos: "pronoun_pers", tags: ["1sg","plain"] },
  { word: "저", lemma: "저", en: "I/me (humble)", pos: "pronoun_pers", tags: ["1sg","humble"] },
  { word: "내", lemma: "나", en: "my (나+의 contracted)", pos: "pronoun_pers", tags: ["1sg","possessive","plain"] },
  { word: "제", lemma: "저", en: "my (저+의 contracted, humble)", pos: "pronoun_pers", tags: ["1sg","possessive","humble"] },

  // ═══════════════════════════════════════════════════════════════════
  // PRONOUNS — Personal (2nd person)
  // ═══════════════════════════════════════════════════════════════════
  { word: "너", lemma: "너", en: "you (informal)", pos: "pronoun_pers", tags: ["2sg","plain"] },
  { word: "네", lemma: "너", en: "your (너+의 contracted)", pos: "pronoun_pers", tags: ["2sg","possessive","plain"] },
  { word: "당신", lemma: "당신", en: "you (formal, limited use)", pos: "pronoun_pers", tags: ["2sg","formal"] },
  { word: "님", lemma: "님", en: "sir/ma'am (honorific suffix)", pos: "pronoun_pers", tags: ["honorific","suffix"] },

  // ═══════════════════════════════════════════════════════════════════
  // PRONOUNS — Personal (3rd person)
  // ═══════════════════════════════════════════════════════════════════
  { word: "그", lemma: "그", en: "he/that person", pos: "pronoun_pers", tags: ["3sg","m","written"] },
  { word: "그녀", lemma: "그녀", en: "she", pos: "pronoun_pers", tags: ["3sg","f","written"] },
  { word: "그 사람", lemma: "그 사람", en: "that person/he/she", pos: "pronoun_pers", tags: ["3sg","spoken"] },
  { word: "이 사람", lemma: "이 사람", en: "this person", pos: "pronoun_pers", tags: ["3sg","proximal"] },
  { word: "저 사람", lemma: "저 사람", en: "that person (over there)", pos: "pronoun_pers", tags: ["3sg","distal"] },

  // ═══════════════════════════════════════════════════════════════════
  // PRONOUNS — Personal (plural)
  // ═══════════════════════════════════════════════════════════════════
  { word: "우리", lemma: "우리", en: "we/our", pos: "pronoun_pers", tags: ["1pl","plain"] },
  { word: "저희", lemma: "저희", en: "we/our (humble)", pos: "pronoun_pers", tags: ["1pl","humble"] },
  { word: "너희", lemma: "너희", en: "you all (informal)", pos: "pronoun_pers", tags: ["2pl","plain"] },
  { word: "그들", lemma: "그들", en: "they/them", pos: "pronoun_pers", tags: ["3pl","written"] },

  // ═══════════════════════════════════════════════════════════════════
  // PRONOUNS — Reflexive
  // ═══════════════════════════════════════════════════════════════════
  { word: "자기", lemma: "자기", en: "oneself/self", pos: "pronoun_refl", tags: ["reflexive"] },
  { word: "자신", lemma: "자신", en: "oneself (formal)", pos: "pronoun_refl", tags: ["reflexive","formal"] },

  // ═══════════════════════════════════════════════════════════════════
  // PRONOUNS — Demonstrative (this/that/that over there)
  // ═══════════════════════════════════════════════════════════════════
  { word: "이것", lemma: "이것", en: "this (thing)", pos: "pronoun_dem", tags: ["proximal","full"] },
  { word: "이거", lemma: "이것", en: "this (thing, spoken)", pos: "pronoun_dem", tags: ["proximal","contracted"] },
  { word: "이", lemma: "이", en: "this (determiner)", pos: "pronoun_dem", tags: ["proximal","determiner"] },
  { word: "그것", lemma: "그것", en: "that (thing, near listener)", pos: "pronoun_dem", tags: ["medial","full"] },
  { word: "그거", lemma: "그것", en: "that (thing, spoken)", pos: "pronoun_dem", tags: ["medial","contracted"] },
  { word: "그", lemma: "그", en: "that (determiner)", pos: "pronoun_dem", tags: ["medial","determiner"] },
  { word: "저것", lemma: "저것", en: "that (thing, far away)", pos: "pronoun_dem", tags: ["distal","full"] },
  { word: "저거", lemma: "저것", en: "that (thing, far, spoken)", pos: "pronoun_dem", tags: ["distal","contracted"] },
  { word: "저", lemma: "저", en: "that (determiner, far)", pos: "pronoun_dem", tags: ["distal","determiner"] },
  { word: "여기", lemma: "여기", en: "here", pos: "pronoun_dem", tags: ["proximal","place"] },
  { word: "거기", lemma: "거기", en: "there (near listener)", pos: "pronoun_dem", tags: ["medial","place"] },
  { word: "저기", lemma: "저기", en: "over there", pos: "pronoun_dem", tags: ["distal","place"] },
  { word: "이렇게", lemma: "이렇게", en: "like this/this way", pos: "pronoun_dem", tags: ["proximal","manner"] },
  { word: "그렇게", lemma: "그렇게", en: "like that/that way", pos: "pronoun_dem", tags: ["medial","manner"] },
  { word: "저렇게", lemma: "저렇게", en: "like that (far)/that way", pos: "pronoun_dem", tags: ["distal","manner"] },

  // ═══════════════════════════════════════════════════════════════════
  // PRONOUNS — Interrogative
  // ═══════════════════════════════════════════════════════════════════
  { word: "뭐", lemma: "무엇", en: "what (spoken)", pos: "pronoun_inter", tags: ["contracted"] },
  { word: "무엇", lemma: "무엇", en: "what", pos: "pronoun_inter", tags: ["full"] },
  { word: "누구", lemma: "누구", en: "who/whom", pos: "pronoun_inter", tags: [] },
  { word: "누가", lemma: "누구", en: "who (as subject, 누구+가)", pos: "pronoun_inter", tags: ["subject_form"] },
  { word: "어디", lemma: "어디", en: "where", pos: "pronoun_inter", tags: ["place"] },
  { word: "언제", lemma: "언제", en: "when", pos: "pronoun_inter", tags: ["time"] },
  { word: "왜", lemma: "왜", en: "why", pos: "pronoun_inter", tags: ["reason"] },
  { word: "어떻게", lemma: "어떻게", en: "how", pos: "pronoun_inter", tags: ["manner"] },
  { word: "어느", lemma: "어느", en: "which (of several)", pos: "pronoun_inter", tags: ["determiner","selection"] },
  { word: "어떤", lemma: "어떤", en: "what kind of/which", pos: "pronoun_inter", tags: ["determiner","quality"] },
  { word: "얼마", lemma: "얼마", en: "how much/how many", pos: "pronoun_inter", tags: ["amount"] },
  { word: "몇", lemma: "몇", en: "how many (with counter)", pos: "pronoun_inter", tags: ["amount","counter"] },
  { word: "얼마나", lemma: "얼마나", en: "how much/to what extent", pos: "pronoun_inter", tags: ["degree"] },

  // ═══════════════════════════════════════════════════════════════════
  // CONJUNCTIONS / CONNECTORS (접속사)
  // ═══════════════════════════════════════════════════════════════════
  { word: "그리고", lemma: "그리고", en: "and/and then", pos: "conjunction", tags: ["additive"] },
  { word: "그런데", lemma: "그런데", en: "but/by the way", pos: "conjunction", tags: ["contrastive","spoken"] },
  { word: "하지만", lemma: "하지만", en: "but/however", pos: "conjunction", tags: ["contrastive"] },
  { word: "그러나", lemma: "그러나", en: "but/however (formal)", pos: "conjunction", tags: ["contrastive","formal"] },
  { word: "그래서", lemma: "그래서", en: "so/therefore", pos: "conjunction", tags: ["causal"] },
  { word: "그러므로", lemma: "그러므로", en: "therefore (formal)", pos: "conjunction", tags: ["causal","formal"] },
  { word: "또는", lemma: "또는", en: "or", pos: "conjunction", tags: ["disjunctive"] },
  { word: "아니면", lemma: "아니면", en: "or/otherwise", pos: "conjunction", tags: ["disjunctive","spoken"] },
  { word: "왜냐하면", lemma: "왜냐하면", en: "because", pos: "conjunction", tags: ["causal","reason"] },
  { word: "그렇지만", lemma: "그렇지만", en: "however/nevertheless", pos: "conjunction", tags: ["contrastive"] },
  { word: "그러면", lemma: "그러면", en: "then/if so", pos: "conjunction", tags: ["conditional"] },
  { word: "그럼", lemma: "그러면", en: "then (spoken)", pos: "conjunction", tags: ["conditional","contracted"] },
  { word: "또한", lemma: "또한", en: "also/furthermore", pos: "conjunction", tags: ["additive","formal"] },
  { word: "게다가", lemma: "게다가", en: "moreover/besides", pos: "conjunction", tags: ["additive","B1+"] },
  { word: "그래도", lemma: "그래도", en: "still/even so", pos: "conjunction", tags: ["concessive"] },
  { word: "즉", lemma: "즉", en: "that is/namely", pos: "conjunction", tags: ["explanatory","formal"] },
  { word: "예를 들어", lemma: "예를 들어", en: "for example", pos: "conjunction", tags: ["exemplary"] },
  { word: "따라서", lemma: "따라서", en: "accordingly/therefore", pos: "conjunction", tags: ["causal","formal"] },
  { word: "한편", lemma: "한편", en: "on the other hand/meanwhile", pos: "conjunction", tags: ["contrastive","B2"] },
  { word: "반면에", lemma: "반면에", en: "on the other hand/while", pos: "conjunction", tags: ["contrastive","B2"] },
  { word: "그러니까", lemma: "그러니까", en: "so/I mean/therefore", pos: "conjunction", tags: ["causal","spoken"] },
  { word: "그런데도", lemma: "그런데도", en: "nevertheless/even so", pos: "conjunction", tags: ["concessive","B1+"] },

  // ═══════════════════════════════════════════════════════════════════
  // ADVERBS — Degree / Intensity
  // ═══════════════════════════════════════════════════════════════════
  { word: "매우", lemma: "매우", en: "very (formal)", pos: "adverb", tags: ["degree","formal"] },
  { word: "아주", lemma: "아주", en: "very/quite", pos: "adverb", tags: ["degree"] },
  { word: "너무", lemma: "너무", en: "too much/very (spoken)", pos: "adverb", tags: ["degree","spoken"] },
  { word: "정말", lemma: "정말", en: "really/truly", pos: "adverb", tags: ["degree","emphasis"] },
  { word: "진짜", lemma: "진짜", en: "really/for real (casual)", pos: "adverb", tags: ["degree","casual"] },
  { word: "꽤", lemma: "꽤", en: "quite/fairly", pos: "adverb", tags: ["degree"] },
  { word: "상당히", lemma: "상당히", en: "considerably/quite", pos: "adverb", tags: ["degree","formal","B1+"] },
  { word: "굉장히", lemma: "굉장히", en: "extremely/tremendously", pos: "adverb", tags: ["degree","emphasis"] },
  { word: "완전", lemma: "완전", en: "totally/completely (slang)", pos: "adverb", tags: ["degree","casual"] },

  // ═══════════════════════════════════════════════════════════════════
  // ADVERBS — Frequency / Time
  // ═══════════════════════════════════════════════════════════════════
  { word: "항상", lemma: "항상", en: "always", pos: "adverb", tags: ["frequency"] },
  { word: "늘", lemma: "늘", en: "always/all the time", pos: "adverb", tags: ["frequency","spoken"] },
  { word: "언제나", lemma: "언제나", en: "always/at any time", pos: "adverb", tags: ["frequency"] },
  { word: "자주", lemma: "자주", en: "often/frequently", pos: "adverb", tags: ["frequency"] },
  { word: "가끔", lemma: "가끔", en: "sometimes/occasionally", pos: "adverb", tags: ["frequency"] },
  { word: "보통", lemma: "보통", en: "usually/normally", pos: "adverb", tags: ["frequency"] },
  { word: "별로", lemma: "별로", en: "not really/not particularly (+ neg)", pos: "adverb", tags: ["frequency","requires_neg"] },
  { word: "거의", lemma: "거의", en: "almost/nearly/hardly (+ neg)", pos: "adverb", tags: ["frequency"] },
  { word: "아직", lemma: "아직", en: "still/yet", pos: "adverb", tags: ["time","aspect"] },
  { word: "이미", lemma: "이미", en: "already", pos: "adverb", tags: ["time","aspect"] },
  { word: "벌써", lemma: "벌써", en: "already (surprised)", pos: "adverb", tags: ["time","aspect","surprise"] },
  { word: "방금", lemma: "방금", en: "just now", pos: "adverb", tags: ["time"] },
  { word: "곧", lemma: "곧", en: "soon", pos: "adverb", tags: ["time"] },
  { word: "드디어", lemma: "드디어", en: "finally/at last", pos: "adverb", tags: ["time","emphasis"] },

  // ═══════════════════════════════════════════════════════════════════
  // ADVERBS — Time reference
  // ═══════════════════════════════════════════════════════════════════
  { word: "지금", lemma: "지금", en: "now", pos: "adverb", tags: ["time","present"] },
  { word: "오늘", lemma: "오늘", en: "today", pos: "adverb", tags: ["time","present"] },
  { word: "내일", lemma: "내일", en: "tomorrow", pos: "adverb", tags: ["time","future"] },
  { word: "어제", lemma: "어제", en: "yesterday", pos: "adverb", tags: ["time","past"] },
  { word: "그때", lemma: "그때", en: "then/at that time", pos: "adverb", tags: ["time","reference"] },
  { word: "아까", lemma: "아까", en: "a while ago/earlier", pos: "adverb", tags: ["time","past"] },
  { word: "나중에", lemma: "나중에", en: "later", pos: "adverb", tags: ["time","future"] },
  { word: "요즘", lemma: "요즘", en: "these days/lately", pos: "adverb", tags: ["time","present"] },
  { word: "옛날에", lemma: "옛날에", en: "in the old days/long ago", pos: "adverb", tags: ["time","past"] },
  { word: "모레", lemma: "모레", en: "the day after tomorrow", pos: "adverb", tags: ["time","future"] },
  { word: "그저께", lemma: "그저께", en: "the day before yesterday", pos: "adverb", tags: ["time","past"] },

  // ═══════════════════════════════════════════════════════════════════
  // ADVERBS — Place
  // ═══════════════════════════════════════════════════════════════════
  { word: "여기", lemma: "여기", en: "here", pos: "adverb", tags: ["place","proximal"] },
  { word: "거기", lemma: "거기", en: "there", pos: "adverb", tags: ["place","medial"] },
  { word: "저기", lemma: "저기", en: "over there", pos: "adverb", tags: ["place","distal"] },
  { word: "어디", lemma: "어디", en: "where/somewhere", pos: "adverb", tags: ["place","question"] },
  { word: "밖", lemma: "밖", en: "outside", pos: "adverb", tags: ["place"] },
  { word: "안", lemma: "안", en: "inside", pos: "adverb", tags: ["place"] },
  { word: "위", lemma: "위", en: "above/on top", pos: "adverb", tags: ["place","spatial"] },
  { word: "아래", lemma: "아래", en: "below/under", pos: "adverb", tags: ["place","spatial"] },
  { word: "밑", lemma: "밑", en: "under/beneath", pos: "adverb", tags: ["place","spatial"] },
  { word: "앞", lemma: "앞", en: "front/ahead", pos: "adverb", tags: ["place","spatial"] },
  { word: "뒤", lemma: "뒤", en: "behind/back", pos: "adverb", tags: ["place","spatial"] },
  { word: "옆", lemma: "옆", en: "beside/next to", pos: "adverb", tags: ["place","spatial"] },
  { word: "사이", lemma: "사이", en: "between/among", pos: "adverb", tags: ["place","spatial"] },

  // ═══════════════════════════════════════════════════════════════════
  // ADVERBS — Manner
  // ═══════════════════════════════════════════════════════════════════
  { word: "잘", lemma: "잘", en: "well/nicely", pos: "adverb", tags: ["manner"] },
  { word: "못", lemma: "못", en: "cannot/poorly", pos: "adverb", tags: ["manner","inability"] },
  { word: "빨리", lemma: "빨리", en: "quickly/fast", pos: "adverb", tags: ["manner","speed"] },
  { word: "천천히", lemma: "천천히", en: "slowly", pos: "adverb", tags: ["manner","speed"] },
  { word: "같이", lemma: "같이", en: "together", pos: "adverb", tags: ["manner","company"] },
  { word: "함께", lemma: "함께", en: "together (formal)", pos: "adverb", tags: ["manner","company","formal"] },
  { word: "혼자", lemma: "혼자", en: "alone/by oneself", pos: "adverb", tags: ["manner"] },
  { word: "먼저", lemma: "먼저", en: "first/beforehand", pos: "adverb", tags: ["manner","sequence"] },
  { word: "다시", lemma: "다시", en: "again", pos: "adverb", tags: ["manner","repetition"] },
  { word: "많이", lemma: "많이", en: "a lot/much", pos: "adverb", tags: ["manner","quantity"] },
  { word: "조금", lemma: "조금", en: "a little/a bit", pos: "adverb", tags: ["manner","quantity"] },
  { word: "좀", lemma: "조금", en: "a bit (contracted/softener)", pos: "adverb", tags: ["manner","quantity","contracted","softener"] },
  { word: "직접", lemma: "직접", en: "directly/personally", pos: "adverb", tags: ["manner"] },
  { word: "특히", lemma: "특히", en: "especially/particularly", pos: "adverb", tags: ["manner","emphasis"] },
  { word: "대충", lemma: "대충", en: "roughly/approximately", pos: "adverb", tags: ["manner","casual"] },
  { word: "열심히", lemma: "열심히", en: "diligently/hard", pos: "adverb", tags: ["manner"] },

  // ═══════════════════════════════════════════════════════════════════
  // ADVERBS — Miscellaneous
  // ═══════════════════════════════════════════════════════════════════
  { word: "또", lemma: "또", en: "also/again", pos: "adverb", tags: ["additive"] },
  { word: "역시", lemma: "역시", en: "as expected/also", pos: "adverb", tags: ["confirmation"] },
  { word: "사실", lemma: "사실", en: "actually/in fact", pos: "adverb", tags: ["discourse"] },
  { word: "아마", lemma: "아마", en: "probably/maybe", pos: "adverb", tags: ["probability"] },
  { word: "아마도", lemma: "아마도", en: "probably/perhaps", pos: "adverb", tags: ["probability","formal"] },
  { word: "혹시", lemma: "혹시", en: "by any chance/perhaps", pos: "adverb", tags: ["probability","polite_question"] },
  { word: "물론", lemma: "물론", en: "of course", pos: "adverb", tags: ["certainty"] },
  { word: "당연히", lemma: "당연히", en: "naturally/of course", pos: "adverb", tags: ["certainty"] },
  { word: "분명히", lemma: "분명히", en: "clearly/certainly", pos: "adverb", tags: ["certainty","B1+"] },
  { word: "반드시", lemma: "반드시", en: "surely/without fail", pos: "adverb", tags: ["certainty","formal"] },
  { word: "꼭", lemma: "꼭", en: "definitely/certainly/must", pos: "adverb", tags: ["certainty","emphasis"] },
  { word: "제발", lemma: "제발", en: "please (begging)", pos: "adverb", tags: ["plea"] },

  // ═══════════════════════════════════════════════════════════════════
  // NEGATION
  // ═══════════════════════════════════════════════════════════════════
  { word: "안", lemma: "안", en: "not (short negation)", pos: "negation", tags: ["pre_verbal"] },
  { word: "못", lemma: "못", en: "cannot (inability)", pos: "negation", tags: ["pre_verbal","inability"] },
  { word: "아니", lemma: "아니", en: "no/not", pos: "negation", tags: ["standalone"] },
  { word: "아니요", lemma: "아니요", en: "no (polite)", pos: "negation", tags: ["standalone","polite"] },
  { word: "절대", lemma: "절대", en: "never/absolutely not", pos: "negation", tags: ["emphatic","requires_neg"] },
  { word: "전혀", lemma: "전혀", en: "not at all (+ neg)", pos: "negation", tags: ["emphatic","requires_neg"] },

  // ═══════════════════════════════════════════════════════════════════
  // QUESTION WORDS (standalone interrogatives)
  // ═══════════════════════════════════════════════════════════════════
  { word: "뭐", lemma: "무엇", en: "what", pos: "question", tags: ["spoken"] },
  { word: "무엇", lemma: "무엇", en: "what (full form)", pos: "question", tags: ["formal"] },
  { word: "누구", lemma: "누구", en: "who", pos: "question", tags: [] },
  { word: "누가", lemma: "누구", en: "who (subject)", pos: "question", tags: ["subject_form"] },
  { word: "어디", lemma: "어디", en: "where", pos: "question", tags: ["place"] },
  { word: "언제", lemma: "언제", en: "when", pos: "question", tags: ["time"] },
  { word: "왜", lemma: "왜", en: "why", pos: "question", tags: ["reason"] },
  { word: "어떻게", lemma: "어떻게", en: "how", pos: "question", tags: ["manner"] },
  { word: "어느", lemma: "어느", en: "which", pos: "question", tags: ["selection"] },
  { word: "어떤", lemma: "어떤", en: "what kind of", pos: "question", tags: ["quality"] },
  { word: "얼마", lemma: "얼마", en: "how much", pos: "question", tags: ["amount"] },
  { word: "몇", lemma: "몇", en: "how many", pos: "question", tags: ["count"] },
  { word: "얼마나", lemma: "얼마나", en: "how much/to what degree", pos: "question", tags: ["degree"] },

  // ═══════════════════════════════════════════════════════════════════
  // AUXILIARY VERBS / COPULA / EXISTENCE
  // ═══════════════════════════════════════════════════════════════════
  { word: "있다", lemma: "있다", en: "to exist/to have/to be (at)", pos: "aux_verb", tags: ["existence","dict"] },
  { word: "있어요", lemma: "있다", en: "exists/have (polite)", pos: "aux_verb", tags: ["existence","해요체"] },
  { word: "있었어요", lemma: "있다", en: "existed/had (past polite)", pos: "aux_verb", tags: ["existence","해요체","past"] },
  { word: "있습니다", lemma: "있다", en: "exists/have (formal)", pos: "aux_verb", tags: ["existence","합쇼체"] },
  { word: "없다", lemma: "없다", en: "to not exist/to not have", pos: "aux_verb", tags: ["non_existence","dict"] },
  { word: "없어요", lemma: "없다", en: "doesn't exist/don't have (polite)", pos: "aux_verb", tags: ["non_existence","해요체"] },
  { word: "없었어요", lemma: "없다", en: "didn't exist/didn't have (past polite)", pos: "aux_verb", tags: ["non_existence","해요체","past"] },
  { word: "없습니다", lemma: "없다", en: "doesn't exist/don't have (formal)", pos: "aux_verb", tags: ["non_existence","합쇼체"] },
  { word: "이다", lemma: "이다", en: "to be (copula)", pos: "aux_verb", tags: ["copula","dict"] },
  { word: "이에요", lemma: "이다", en: "is (after consonant, polite)", pos: "aux_verb", tags: ["copula","해요체","after_consonant"] },
  { word: "예요", lemma: "이다", en: "is (after vowel, polite)", pos: "aux_verb", tags: ["copula","해요체","after_vowel"] },
  { word: "입니다", lemma: "이다", en: "is (formal)", pos: "aux_verb", tags: ["copula","합쇼체"] },
  { word: "이었어요", lemma: "이다", en: "was (after consonant, past polite)", pos: "aux_verb", tags: ["copula","해요체","past","after_consonant"] },
  { word: "였어요", lemma: "이다", en: "was (after vowel, past polite)", pos: "aux_verb", tags: ["copula","해요체","past","after_vowel"] },
  { word: "아니다", lemma: "아니다", en: "to not be", pos: "aux_verb", tags: ["neg_copula","dict"] },
  { word: "아니에요", lemma: "아니다", en: "is not (polite)", pos: "aux_verb", tags: ["neg_copula","해요체"] },
  { word: "아닙니다", lemma: "아니다", en: "is not (formal)", pos: "aux_verb", tags: ["neg_copula","합쇼체"] },
  { word: "아니었어요", lemma: "아니다", en: "was not (past polite)", pos: "aux_verb", tags: ["neg_copula","해요체","past"] },

  // ═══════════════════════════════════════════════════════════════════
  // AUXILIARY — 하다 (to do) conjugations
  // ═══════════════════════════════════════════════════════════════════
  { word: "하다", lemma: "하다", en: "to do", pos: "aux_verb", tags: ["action","dict"] },
  { word: "해요", lemma: "하다", en: "do/does (polite)", pos: "aux_verb", tags: ["action","해요체"] },
  { word: "합니다", lemma: "하다", en: "do/does (formal)", pos: "aux_verb", tags: ["action","합쇼체"] },
  { word: "했어요", lemma: "하다", en: "did (past polite)", pos: "aux_verb", tags: ["action","해요체","past"] },
  { word: "할 거예요", lemma: "하다", en: "will do (future polite)", pos: "aux_verb", tags: ["action","해요체","future"] },
  { word: "하고 있어요", lemma: "하다", en: "is doing (progressive)", pos: "aux_verb", tags: ["action","해요체","progressive"] },

  // ═══════════════════════════════════════════════════════════════════
  // AUXILIARY — 되다 (to become) conjugations
  // ═══════════════════════════════════════════════════════════════════
  { word: "되다", lemma: "되다", en: "to become/to be done", pos: "aux_verb", tags: ["change","dict"] },
  { word: "돼요", lemma: "되다", en: "becomes/is okay (polite)", pos: "aux_verb", tags: ["change","해요체"] },
  { word: "됩니다", lemma: "되다", en: "becomes (formal)", pos: "aux_verb", tags: ["change","합쇼체"] },
  { word: "됐어요", lemma: "되다", en: "became/is done (past polite)", pos: "aux_verb", tags: ["change","해요체","past"] },
  { word: "될 거예요", lemma: "되다", en: "will become (future polite)", pos: "aux_verb", tags: ["change","해요체","future"] },

  // ═══════════════════════════════════════════════════════════════════
  // AUXILIARY — 싶다 (to want, used in -고 싶다)
  // ═══════════════════════════════════════════════════════════════════
  { word: "싶다", lemma: "싶다", en: "to want (in -고 싶다)", pos: "aux_verb", tags: ["desire","dict"] },
  { word: "싶어요", lemma: "싶다", en: "want to (polite)", pos: "aux_verb", tags: ["desire","해요체"] },
  { word: "싶었어요", lemma: "싶다", en: "wanted to (past polite)", pos: "aux_verb", tags: ["desire","해요체","past"] },

  // ═══════════════════════════════════════════════════════════════════
  // COMMON VERBS — Motion
  // ═══════════════════════════════════════════════════════════════════
  { word: "가다", lemma: "가다", en: "to go", pos: "verb", tags: ["motion","dict"] },
  { word: "가요", lemma: "가다", en: "go (polite)", pos: "verb", tags: ["motion","해요체"] },
  { word: "갔어요", lemma: "가다", en: "went (past polite)", pos: "verb", tags: ["motion","해요체","past"] },
  { word: "갈 거예요", lemma: "가다", en: "will go (future polite)", pos: "verb", tags: ["motion","해요체","future"] },
  { word: "오다", lemma: "오다", en: "to come", pos: "verb", tags: ["motion","dict"] },
  { word: "와요", lemma: "오다", en: "come (polite)", pos: "verb", tags: ["motion","해요체"] },
  { word: "왔어요", lemma: "오다", en: "came (past polite)", pos: "verb", tags: ["motion","해요체","past"] },
  { word: "올 거예요", lemma: "오다", en: "will come (future polite)", pos: "verb", tags: ["motion","해요체","future"] },
  { word: "걷다", lemma: "걷다", en: "to walk", pos: "verb", tags: ["motion","dict","ㄷ_irregular"] },
  { word: "걸어요", lemma: "걷다", en: "walk (polite)", pos: "verb", tags: ["motion","해요체"] },
  { word: "걸었어요", lemma: "걷다", en: "walked (past polite)", pos: "verb", tags: ["motion","해요체","past"] },
  { word: "달리다", lemma: "달리다", en: "to run", pos: "verb", tags: ["motion","dict"] },
  { word: "달려요", lemma: "달리다", en: "run (polite)", pos: "verb", tags: ["motion","해요체"] },
  { word: "타다", lemma: "타다", en: "to ride/take (transport)", pos: "verb", tags: ["motion","dict"] },
  { word: "타요", lemma: "타다", en: "ride (polite)", pos: "verb", tags: ["motion","해요체"] },
  { word: "내리다", lemma: "내리다", en: "to get off/descend", pos: "verb", tags: ["motion","dict"] },
  { word: "내려요", lemma: "내리다", en: "get off (polite)", pos: "verb", tags: ["motion","해요체"] },

  // ═══════════════════════════════════════════════════════════════════
  // COMMON VERBS — Eating / Drinking
  // ═══════════════════════════════════════════════════════════════════
  { word: "먹다", lemma: "먹다", en: "to eat", pos: "verb", tags: ["consumption","dict"] },
  { word: "먹어요", lemma: "먹다", en: "eat (polite)", pos: "verb", tags: ["consumption","해요체"] },
  { word: "먹었어요", lemma: "먹다", en: "ate (past polite)", pos: "verb", tags: ["consumption","해요체","past"] },
  { word: "먹을 거예요", lemma: "먹다", en: "will eat (future polite)", pos: "verb", tags: ["consumption","해요체","future"] },
  { word: "마시다", lemma: "마시다", en: "to drink", pos: "verb", tags: ["consumption","dict"] },
  { word: "마셔요", lemma: "마시다", en: "drink (polite)", pos: "verb", tags: ["consumption","해요체"] },
  { word: "마셨어요", lemma: "마시다", en: "drank (past polite)", pos: "verb", tags: ["consumption","해요체","past"] },

  // ═══════════════════════════════════════════════════════════════════
  // COMMON VERBS — Perception / Cognition
  // ═══════════════════════════════════════════════════════════════════
  { word: "보다", lemma: "보다", en: "to see/watch", pos: "verb", tags: ["perception","dict"] },
  { word: "봐요", lemma: "보다", en: "see (polite)", pos: "verb", tags: ["perception","해요체"] },
  { word: "봤어요", lemma: "보다", en: "saw (past polite)", pos: "verb", tags: ["perception","해요체","past"] },
  { word: "듣다", lemma: "듣다", en: "to hear/listen", pos: "verb", tags: ["perception","dict","ㄷ_irregular"] },
  { word: "들어요", lemma: "듣다", en: "hear (polite)", pos: "verb", tags: ["perception","해요체"] },
  { word: "들었어요", lemma: "듣다", en: "heard (past polite)", pos: "verb", tags: ["perception","해요체","past"] },
  { word: "알다", lemma: "알다", en: "to know", pos: "verb", tags: ["cognition","dict","ㄹ_final"] },
  { word: "알아요", lemma: "알다", en: "know (polite)", pos: "verb", tags: ["cognition","해요체"] },
  { word: "알았어요", lemma: "알다", en: "knew/understood (past polite)", pos: "verb", tags: ["cognition","해요체","past"] },
  { word: "모르다", lemma: "모르다", en: "to not know", pos: "verb", tags: ["cognition","dict","르_irregular"] },
  { word: "몰라요", lemma: "모르다", en: "don't know (polite)", pos: "verb", tags: ["cognition","해요체"] },
  { word: "몰랐어요", lemma: "모르다", en: "didn't know (past polite)", pos: "verb", tags: ["cognition","해요체","past"] },
  { word: "생각하다", lemma: "생각하다", en: "to think", pos: "verb", tags: ["cognition","dict","하다_verb"] },
  { word: "생각해요", lemma: "생각하다", en: "think (polite)", pos: "verb", tags: ["cognition","해요체"] },
  { word: "이해하다", lemma: "이해하다", en: "to understand", pos: "verb", tags: ["cognition","dict","하다_verb"] },
  { word: "이해해요", lemma: "이해하다", en: "understand (polite)", pos: "verb", tags: ["cognition","해요체"] },
  { word: "기억하다", lemma: "기억하다", en: "to remember", pos: "verb", tags: ["cognition","dict","하다_verb"] },
  { word: "기억해요", lemma: "기억하다", en: "remember (polite)", pos: "verb", tags: ["cognition","해요체"] },
  { word: "잊다", lemma: "잊다", en: "to forget", pos: "verb", tags: ["cognition","dict"] },
  { word: "잊어요", lemma: "잊다", en: "forget (polite)", pos: "verb", tags: ["cognition","해요체"] },

  // ═══════════════════════════════════════════════════════════════════
  // COMMON VERBS — Communication
  // ═══════════════════════════════════════════════════════════════════
  { word: "말하다", lemma: "말하다", en: "to speak/say", pos: "verb", tags: ["communication","dict","하다_verb"] },
  { word: "말해요", lemma: "말하다", en: "speak (polite)", pos: "verb", tags: ["communication","해요체"] },
  { word: "말했어요", lemma: "말하다", en: "said (past polite)", pos: "verb", tags: ["communication","해요체","past"] },
  { word: "읽다", lemma: "읽다", en: "to read", pos: "verb", tags: ["communication","dict"] },
  { word: "읽어요", lemma: "읽다", en: "read (polite)", pos: "verb", tags: ["communication","해요체"] },
  { word: "읽었어요", lemma: "읽다", en: "read (past polite)", pos: "verb", tags: ["communication","해요체","past"] },
  { word: "쓰다", lemma: "쓰다", en: "to write/to use", pos: "verb", tags: ["communication","dict","ㅡ_irregular"] },
  { word: "써요", lemma: "쓰다", en: "write (polite)", pos: "verb", tags: ["communication","해요체"] },
  { word: "썼어요", lemma: "쓰다", en: "wrote (past polite)", pos: "verb", tags: ["communication","해요체","past"] },
  { word: "묻다", lemma: "묻다", en: "to ask", pos: "verb", tags: ["communication","dict"] },
  { word: "물어요", lemma: "묻다", en: "ask (polite)", pos: "verb", tags: ["communication","해요체"] },
  { word: "대답하다", lemma: "대답하다", en: "to answer/reply", pos: "verb", tags: ["communication","dict","하다_verb"] },
  { word: "대답해요", lemma: "대답하다", en: "answer (polite)", pos: "verb", tags: ["communication","해요체"] },
  { word: "전화하다", lemma: "전화하다", en: "to call (phone)", pos: "verb", tags: ["communication","dict","하다_verb"] },
  { word: "전화해요", lemma: "전화하다", en: "call (polite)", pos: "verb", tags: ["communication","해요체"] },

  // ═══════════════════════════════════════════════════════════════════
  // COMMON VERBS — Descriptive (adjectives acting as verbs)
  // ═══════════════════════════════════════════════════════════════════
  { word: "좋다", lemma: "좋다", en: "to be good/to like", pos: "verb", tags: ["descriptive","dict"] },
  { word: "좋아요", lemma: "좋다", en: "is good/like (polite)", pos: "verb", tags: ["descriptive","해요체"] },
  { word: "좋았어요", lemma: "좋다", en: "was good (past polite)", pos: "verb", tags: ["descriptive","해요체","past"] },
  { word: "좋아하다", lemma: "좋아하다", en: "to like", pos: "verb", tags: ["emotion","dict","하다_verb"] },
  { word: "좋아해요", lemma: "좋아하다", en: "like (polite)", pos: "verb", tags: ["emotion","해요체"] },
  { word: "싫다", lemma: "싫다", en: "to dislike/to be unpleasant", pos: "verb", tags: ["descriptive","dict"] },
  { word: "싫어요", lemma: "싫다", en: "dislike (polite)", pos: "verb", tags: ["descriptive","해요체"] },
  { word: "싫어하다", lemma: "싫어하다", en: "to dislike/hate", pos: "verb", tags: ["emotion","dict","하다_verb"] },
  { word: "싫어해요", lemma: "싫어하다", en: "dislike (polite)", pos: "verb", tags: ["emotion","해요체"] },
  { word: "크다", lemma: "크다", en: "to be big/tall", pos: "verb", tags: ["descriptive","dict"] },
  { word: "커요", lemma: "크다", en: "is big (polite)", pos: "verb", tags: ["descriptive","해요체"] },
  { word: "작다", lemma: "작다", en: "to be small", pos: "verb", tags: ["descriptive","dict"] },
  { word: "작아요", lemma: "작다", en: "is small (polite)", pos: "verb", tags: ["descriptive","해요체"] },
  { word: "많다", lemma: "많다", en: "to be many/much", pos: "verb", tags: ["descriptive","dict"] },
  { word: "많아요", lemma: "많다", en: "is many (polite)", pos: "verb", tags: ["descriptive","해요체"] },
  { word: "적다", lemma: "적다", en: "to be few/little", pos: "verb", tags: ["descriptive","dict"] },
  { word: "적어요", lemma: "적다", en: "is few (polite)", pos: "verb", tags: ["descriptive","해요체"] },
  { word: "길다", lemma: "길다", en: "to be long", pos: "verb", tags: ["descriptive","dict","ㄹ_final"] },
  { word: "길어요", lemma: "길다", en: "is long (polite)", pos: "verb", tags: ["descriptive","해요체"] },
  { word: "짧다", lemma: "짧다", en: "to be short", pos: "verb", tags: ["descriptive","dict"] },
  { word: "짧아요", lemma: "짧다", en: "is short (polite)", pos: "verb", tags: ["descriptive","해요체"] },
  { word: "높다", lemma: "높다", en: "to be high/tall", pos: "verb", tags: ["descriptive","dict"] },
  { word: "높아요", lemma: "높다", en: "is high (polite)", pos: "verb", tags: ["descriptive","해요체"] },
  { word: "낮다", lemma: "낮다", en: "to be low", pos: "verb", tags: ["descriptive","dict"] },
  { word: "낮아요", lemma: "낮다", en: "is low (polite)", pos: "verb", tags: ["descriptive","해요체"] },
  { word: "새롭다", lemma: "새롭다", en: "to be new", pos: "verb", tags: ["descriptive","dict","ㅂ_irregular"] },
  { word: "새로워요", lemma: "새롭다", en: "is new (polite)", pos: "verb", tags: ["descriptive","해요체"] },
  { word: "빠르다", lemma: "빠르다", en: "to be fast", pos: "verb", tags: ["descriptive","dict","르_irregular"] },
  { word: "빨라요", lemma: "빠르다", en: "is fast (polite)", pos: "verb", tags: ["descriptive","해요체"] },
  { word: "느리다", lemma: "느리다", en: "to be slow", pos: "verb", tags: ["descriptive","dict"] },
  { word: "느려요", lemma: "느리다", en: "is slow (polite)", pos: "verb", tags: ["descriptive","해요체"] },
  { word: "쉽다", lemma: "쉽다", en: "to be easy", pos: "verb", tags: ["descriptive","dict","ㅂ_irregular"] },
  { word: "쉬워요", lemma: "쉽다", en: "is easy (polite)", pos: "verb", tags: ["descriptive","해요체"] },
  { word: "어렵다", lemma: "어렵다", en: "to be difficult", pos: "verb", tags: ["descriptive","dict","ㅂ_irregular"] },
  { word: "어려워요", lemma: "어렵다", en: "is difficult (polite)", pos: "verb", tags: ["descriptive","해요체"] },
  { word: "비싸다", lemma: "비싸다", en: "to be expensive", pos: "verb", tags: ["descriptive","dict"] },
  { word: "비싸요", lemma: "비싸다", en: "is expensive (polite)", pos: "verb", tags: ["descriptive","해요체"] },
  { word: "싸다", lemma: "싸다", en: "to be cheap", pos: "verb", tags: ["descriptive","dict"] },
  { word: "싸요", lemma: "싸다", en: "is cheap (polite)", pos: "verb", tags: ["descriptive","해요체"] },
  { word: "덥다", lemma: "덥다", en: "to be hot (weather)", pos: "verb", tags: ["descriptive","dict","ㅂ_irregular"] },
  { word: "더워요", lemma: "덥다", en: "is hot (polite)", pos: "verb", tags: ["descriptive","해요체"] },
  { word: "춥다", lemma: "춥다", en: "to be cold (weather)", pos: "verb", tags: ["descriptive","dict","ㅂ_irregular"] },
  { word: "추워요", lemma: "춥다", en: "is cold (polite)", pos: "verb", tags: ["descriptive","해요체"] },
  { word: "맛있다", lemma: "맛있다", en: "to be delicious", pos: "verb", tags: ["descriptive","dict"] },
  { word: "맛있어요", lemma: "맛있다", en: "is delicious (polite)", pos: "verb", tags: ["descriptive","해요체"] },
  { word: "맛없다", lemma: "맛없다", en: "to be tasteless", pos: "verb", tags: ["descriptive","dict"] },
  { word: "맛없어요", lemma: "맛없다", en: "is tasteless (polite)", pos: "verb", tags: ["descriptive","해요체"] },
  { word: "재미있다", lemma: "재미있다", en: "to be fun/interesting", pos: "verb", tags: ["descriptive","dict"] },
  { word: "재미있어요", lemma: "재미있다", en: "is fun (polite)", pos: "verb", tags: ["descriptive","해요체"] },
  { word: "재미없다", lemma: "재미없다", en: "to be boring", pos: "verb", tags: ["descriptive","dict"] },
  { word: "재미없어요", lemma: "재미없다", en: "is boring (polite)", pos: "verb", tags: ["descriptive","해요체"] },
  { word: "바쁘다", lemma: "바쁘다", en: "to be busy", pos: "verb", tags: ["descriptive","dict","ㅡ_irregular"] },
  { word: "바빠요", lemma: "바쁘다", en: "is busy (polite)", pos: "verb", tags: ["descriptive","해요체"] },
  { word: "피곤하다", lemma: "피곤하다", en: "to be tired", pos: "verb", tags: ["descriptive","dict","하다_verb"] },
  { word: "피곤해요", lemma: "피곤하다", en: "is tired (polite)", pos: "verb", tags: ["descriptive","해요체"] },
  { word: "행복하다", lemma: "행복하다", en: "to be happy", pos: "verb", tags: ["descriptive","dict","하다_verb"] },
  { word: "행복해요", lemma: "행복하다", en: "is happy (polite)", pos: "verb", tags: ["descriptive","해요체"] },
  { word: "슬프다", lemma: "슬프다", en: "to be sad", pos: "verb", tags: ["descriptive","dict","ㅡ_irregular"] },
  { word: "슬퍼요", lemma: "슬프다", en: "is sad (polite)", pos: "verb", tags: ["descriptive","해요체"] },

  // ═══════════════════════════════════════════════════════════════════
  // COMMON VERBS — Daily life / Actions
  // ═══════════════════════════════════════════════════════════════════
  { word: "살다", lemma: "살다", en: "to live", pos: "verb", tags: ["daily","dict","ㄹ_final"] },
  { word: "살아요", lemma: "살다", en: "live (polite)", pos: "verb", tags: ["daily","해요체"] },
  { word: "살았어요", lemma: "살다", en: "lived (past polite)", pos: "verb", tags: ["daily","해요체","past"] },
  { word: "사다", lemma: "사다", en: "to buy", pos: "verb", tags: ["daily","dict"] },
  { word: "사요", lemma: "사다", en: "buy (polite)", pos: "verb", tags: ["daily","해요체"] },
  { word: "샀어요", lemma: "사다", en: "bought (past polite)", pos: "verb", tags: ["daily","해요체","past"] },
  { word: "주다", lemma: "주다", en: "to give", pos: "verb", tags: ["daily","dict"] },
  { word: "줘요", lemma: "주다", en: "give (polite)", pos: "verb", tags: ["daily","해요체"] },
  { word: "줬어요", lemma: "주다", en: "gave (past polite)", pos: "verb", tags: ["daily","해요체","past"] },
  { word: "받다", lemma: "받다", en: "to receive", pos: "verb", tags: ["daily","dict"] },
  { word: "받아요", lemma: "받다", en: "receive (polite)", pos: "verb", tags: ["daily","해요체"] },
  { word: "받았어요", lemma: "받다", en: "received (past polite)", pos: "verb", tags: ["daily","해요체","past"] },
  { word: "만들다", lemma: "만들다", en: "to make/create", pos: "verb", tags: ["daily","dict","ㄹ_final"] },
  { word: "만들어요", lemma: "만들다", en: "make (polite)", pos: "verb", tags: ["daily","해요체"] },
  { word: "만들었어요", lemma: "만들다", en: "made (past polite)", pos: "verb", tags: ["daily","해요체","past"] },
  { word: "배우다", lemma: "배우다", en: "to learn", pos: "verb", tags: ["daily","dict"] },
  { word: "배워요", lemma: "배우다", en: "learn (polite)", pos: "verb", tags: ["daily","해요체"] },
  { word: "배웠어요", lemma: "배우다", en: "learned (past polite)", pos: "verb", tags: ["daily","해요체","past"] },
  { word: "가르치다", lemma: "가르치다", en: "to teach", pos: "verb", tags: ["daily","dict"] },
  { word: "가르쳐요", lemma: "가르치다", en: "teach (polite)", pos: "verb", tags: ["daily","해요체"] },
  { word: "일하다", lemma: "일하다", en: "to work", pos: "verb", tags: ["daily","dict","하다_verb"] },
  { word: "일해요", lemma: "일하다", en: "work (polite)", pos: "verb", tags: ["daily","해요체"] },
  { word: "일했어요", lemma: "일하다", en: "worked (past polite)", pos: "verb", tags: ["daily","해요체","past"] },
  { word: "놀다", lemma: "놀다", en: "to play/hang out", pos: "verb", tags: ["daily","dict","ㄹ_final"] },
  { word: "놀아요", lemma: "놀다", en: "play (polite)", pos: "verb", tags: ["daily","해요체"] },
  { word: "자다", lemma: "자다", en: "to sleep", pos: "verb", tags: ["daily","dict"] },
  { word: "자요", lemma: "자다", en: "sleep (polite)", pos: "verb", tags: ["daily","해요체"] },
  { word: "잤어요", lemma: "자다", en: "slept (past polite)", pos: "verb", tags: ["daily","해요체","past"] },
  { word: "일어나다", lemma: "일어나다", en: "to get up/wake up", pos: "verb", tags: ["daily","dict"] },
  { word: "일어나요", lemma: "일어나다", en: "get up (polite)", pos: "verb", tags: ["daily","해요체"] },
  { word: "앉다", lemma: "앉다", en: "to sit", pos: "verb", tags: ["daily","dict"] },
  { word: "앉아요", lemma: "앉다", en: "sit (polite)", pos: "verb", tags: ["daily","해요체"] },
  { word: "서다", lemma: "서다", en: "to stand", pos: "verb", tags: ["daily","dict"] },
  { word: "서요", lemma: "서다", en: "stand (polite)", pos: "verb", tags: ["daily","해요체"] },
  { word: "기다리다", lemma: "기다리다", en: "to wait", pos: "verb", tags: ["daily","dict"] },
  { word: "기다려요", lemma: "기다리다", en: "wait (polite)", pos: "verb", tags: ["daily","해요체"] },
  { word: "찾다", lemma: "찾다", en: "to find/look for", pos: "verb", tags: ["daily","dict"] },
  { word: "찾아요", lemma: "찾다", en: "find (polite)", pos: "verb", tags: ["daily","해요체"] },
  { word: "열다", lemma: "열다", en: "to open", pos: "verb", tags: ["daily","dict","ㄹ_final"] },
  { word: "열어요", lemma: "열다", en: "open (polite)", pos: "verb", tags: ["daily","해요체"] },
  { word: "닫다", lemma: "닫다", en: "to close", pos: "verb", tags: ["daily","dict"] },
  { word: "닫아요", lemma: "닫다", en: "close (polite)", pos: "verb", tags: ["daily","해요체"] },
  { word: "씻다", lemma: "씻다", en: "to wash", pos: "verb", tags: ["daily","dict"] },
  { word: "씻어요", lemma: "씻다", en: "wash (polite)", pos: "verb", tags: ["daily","해요체"] },
  { word: "입다", lemma: "입다", en: "to wear (clothes)", pos: "verb", tags: ["daily","dict"] },
  { word: "입어요", lemma: "입다", en: "wear (polite)", pos: "verb", tags: ["daily","해요체"] },
  { word: "벗다", lemma: "벗다", en: "to take off (clothes)", pos: "verb", tags: ["daily","dict"] },
  { word: "벗어요", lemma: "벗다", en: "take off (polite)", pos: "verb", tags: ["daily","해요체"] },
  { word: "만나다", lemma: "만나다", en: "to meet", pos: "verb", tags: ["daily","dict"] },
  { word: "만나요", lemma: "만나다", en: "meet (polite)", pos: "verb", tags: ["daily","해요체"] },
  { word: "만났어요", lemma: "만나다", en: "met (past polite)", pos: "verb", tags: ["daily","해요체","past"] },
  { word: "돕다", lemma: "돕다", en: "to help", pos: "verb", tags: ["daily","dict","ㅂ_irregular"] },
  { word: "도와요", lemma: "돕다", en: "help (polite)", pos: "verb", tags: ["daily","해요체"] },
  { word: "도왔어요", lemma: "돕다", en: "helped (past polite)", pos: "verb", tags: ["daily","해요체","past"] },
  { word: "놓다", lemma: "놓다", en: "to put/place", pos: "verb", tags: ["daily","dict"] },
  { word: "놓아요", lemma: "놓다", en: "put (polite)", pos: "verb", tags: ["daily","해요체"] },
  { word: "들다", lemma: "들다", en: "to hold/carry/enter", pos: "verb", tags: ["daily","dict","ㄹ_final"] },
  { word: "들어요", lemma: "들다", en: "hold (polite)", pos: "verb", tags: ["daily","해요체"] },
  { word: "나가다", lemma: "나가다", en: "to go out", pos: "verb", tags: ["daily","dict"] },
  { word: "나가요", lemma: "나가다", en: "go out (polite)", pos: "verb", tags: ["daily","해요체"] },
  { word: "들어오다", lemma: "들어오다", en: "to come in/enter", pos: "verb", tags: ["daily","dict"] },
  { word: "들어와요", lemma: "들어오다", en: "come in (polite)", pos: "verb", tags: ["daily","해요체"] },
  { word: "보내다", lemma: "보내다", en: "to send", pos: "verb", tags: ["daily","dict"] },
  { word: "보내요", lemma: "보내다", en: "send (polite)", pos: "verb", tags: ["daily","해요체"] },

  // ═══════════════════════════════════════════════════════════════════
  // NUMBERS — Native Korean (고유어 수사)
  // ═══════════════════════════════════════════════════════════════════
  { word: "하나", lemma: "하나", en: "one (1)", pos: "number_native", tags: ["cardinal"] },
  { word: "둘", lemma: "둘", en: "two (2)", pos: "number_native", tags: ["cardinal"] },
  { word: "셋", lemma: "셋", en: "three (3)", pos: "number_native", tags: ["cardinal"] },
  { word: "넷", lemma: "넷", en: "four (4)", pos: "number_native", tags: ["cardinal"] },
  { word: "다섯", lemma: "다섯", en: "five (5)", pos: "number_native", tags: ["cardinal"] },
  { word: "여섯", lemma: "여섯", en: "six (6)", pos: "number_native", tags: ["cardinal"] },
  { word: "일곱", lemma: "일곱", en: "seven (7)", pos: "number_native", tags: ["cardinal"] },
  { word: "여덟", lemma: "여덟", en: "eight (8)", pos: "number_native", tags: ["cardinal"] },
  { word: "아홉", lemma: "아홉", en: "nine (9)", pos: "number_native", tags: ["cardinal"] },
  { word: "열", lemma: "열", en: "ten (10)", pos: "number_native", tags: ["cardinal"] },
  { word: "스물", lemma: "스물", en: "twenty (20)", pos: "number_native", tags: ["cardinal"] },
  { word: "서른", lemma: "서른", en: "thirty (30)", pos: "number_native", tags: ["cardinal"] },
  { word: "마흔", lemma: "마흔", en: "forty (40)", pos: "number_native", tags: ["cardinal"] },
  { word: "쉰", lemma: "쉰", en: "fifty (50)", pos: "number_native", tags: ["cardinal"] },
  { word: "예순", lemma: "예순", en: "sixty (60)", pos: "number_native", tags: ["cardinal"] },
  { word: "일흔", lemma: "일흔", en: "seventy (70)", pos: "number_native", tags: ["cardinal"] },
  { word: "여든", lemma: "여든", en: "eighty (80)", pos: "number_native", tags: ["cardinal"] },
  { word: "아흔", lemma: "아흔", en: "ninety (90)", pos: "number_native", tags: ["cardinal"] },

  // Counter-form variants (shortened before counters)
  { word: "한", lemma: "하나", en: "one (before counter)", pos: "number_native", tags: ["counter_form"] },
  { word: "두", lemma: "둘", en: "two (before counter)", pos: "number_native", tags: ["counter_form"] },
  { word: "세", lemma: "셋", en: "three (before counter)", pos: "number_native", tags: ["counter_form"] },
  { word: "네", lemma: "넷", en: "four (before counter)", pos: "number_native", tags: ["counter_form"] },
  { word: "스무", lemma: "스물", en: "twenty (before counter)", pos: "number_native", tags: ["counter_form"] },

  // ═══════════════════════════════════════════════════════════════════
  // NUMBERS — Sino-Korean (한자어 수사)
  // ═══════════════════════════════════════════════════════════════════
  { word: "일", lemma: "일", en: "one (1)", pos: "number_sino", tags: ["cardinal"] },
  { word: "이", lemma: "이", en: "two (2)", pos: "number_sino", tags: ["cardinal"] },
  { word: "삼", lemma: "삼", en: "three (3)", pos: "number_sino", tags: ["cardinal"] },
  { word: "사", lemma: "사", en: "four (4)", pos: "number_sino", tags: ["cardinal"] },
  { word: "오", lemma: "오", en: "five (5)", pos: "number_sino", tags: ["cardinal"] },
  { word: "육", lemma: "육", en: "six (6)", pos: "number_sino", tags: ["cardinal"] },
  { word: "칠", lemma: "칠", en: "seven (7)", pos: "number_sino", tags: ["cardinal"] },
  { word: "팔", lemma: "팔", en: "eight (8)", pos: "number_sino", tags: ["cardinal"] },
  { word: "구", lemma: "구", en: "nine (9)", pos: "number_sino", tags: ["cardinal"] },
  { word: "십", lemma: "십", en: "ten (10)", pos: "number_sino", tags: ["cardinal"] },
  { word: "백", lemma: "백", en: "hundred (100)", pos: "number_sino", tags: ["cardinal"] },
  { word: "천", lemma: "천", en: "thousand (1,000)", pos: "number_sino", tags: ["cardinal"] },
  { word: "만", lemma: "만", en: "ten thousand (10,000)", pos: "number_sino", tags: ["cardinal"] },
  { word: "억", lemma: "억", en: "hundred million (100,000,000)", pos: "number_sino", tags: ["cardinal"] },
  { word: "영", lemma: "영", en: "zero (0)", pos: "number_sino", tags: ["cardinal"] },
  { word: "공", lemma: "공", en: "zero (0, in phone numbers)", pos: "number_sino", tags: ["cardinal","phone"] },

  // Ordinal prefix
  { word: "첫째", lemma: "첫째", en: "first", pos: "number_native", tags: ["ordinal"] },
  { word: "둘째", lemma: "둘째", en: "second", pos: "number_native", tags: ["ordinal"] },
  { word: "셋째", lemma: "셋째", en: "third", pos: "number_native", tags: ["ordinal"] },
  { word: "넷째", lemma: "넷째", en: "fourth", pos: "number_native", tags: ["ordinal"] },
  { word: "제일", lemma: "제일", en: "the most/number one", pos: "number_sino", tags: ["ordinal","superlative"] },

  // ═══════════════════════════════════════════════════════════════════
  // COUNTERS (분류사)
  // ═══════════════════════════════════════════════════════════════════
  { word: "개", lemma: "개", en: "general counter (things)", pos: "counter", tags: ["general"] },
  { word: "명", lemma: "명", en: "counter for people (formal)", pos: "counter", tags: ["people","formal"] },
  { word: "사람", lemma: "사람", en: "counter for people (informal)", pos: "counter", tags: ["people","informal"] },
  { word: "분", lemma: "분", en: "counter for people (honorific)", pos: "counter", tags: ["people","honorific"] },
  { word: "마리", lemma: "마리", en: "counter for animals", pos: "counter", tags: ["animals"] },
  { word: "권", lemma: "권", en: "counter for books/volumes", pos: "counter", tags: ["books"] },
  { word: "잔", lemma: "잔", en: "counter for cups/glasses", pos: "counter", tags: ["drinks"] },
  { word: "병", lemma: "병", en: "counter for bottles", pos: "counter", tags: ["bottles"] },
  { word: "장", lemma: "장", en: "counter for flat objects (paper/tickets)", pos: "counter", tags: ["flat_objects"] },
  { word: "대", lemma: "대", en: "counter for machines/vehicles", pos: "counter", tags: ["machines"] },
  { word: "번", lemma: "번", en: "counter for occurrences/times", pos: "counter", tags: ["times","sino"] },
  { word: "벌", lemma: "벌", en: "counter for sets of clothing", pos: "counter", tags: ["clothing"] },
  { word: "켤레", lemma: "켤레", en: "counter for pairs (shoes/socks)", pos: "counter", tags: ["pairs"] },
  { word: "그루", lemma: "그루", en: "counter for trees", pos: "counter", tags: ["trees"] },
  { word: "송이", lemma: "송이", en: "counter for flowers/bunches", pos: "counter", tags: ["flowers"] },
  { word: "자루", lemma: "자루", en: "counter for long thin objects (pens)", pos: "counter", tags: ["long_thin"] },
  { word: "채", lemma: "채", en: "counter for buildings/houses", pos: "counter", tags: ["buildings"] },
  { word: "그릇", lemma: "그릇", en: "counter for bowls of food", pos: "counter", tags: ["food"] },
  { word: "접시", lemma: "접시", en: "counter for plates of food", pos: "counter", tags: ["food"] },
  { word: "조각", lemma: "조각", en: "counter for pieces/slices", pos: "counter", tags: ["pieces"] },
  { word: "통", lemma: "통", en: "counter for phone calls/letters", pos: "counter", tags: ["communications"] },

  // Time-related counters (Sino-Korean)
  { word: "시", lemma: "시", en: "o'clock/hour", pos: "counter", tags: ["time","hour","native_number"] },
  { word: "분", lemma: "분", en: "minute", pos: "counter", tags: ["time","minute","sino_number"] },
  { word: "초", lemma: "초", en: "second", pos: "counter", tags: ["time","second","sino_number"] },
  { word: "시간", lemma: "시간", en: "hours (duration)", pos: "counter", tags: ["time","duration","native_number"] },
  { word: "월", lemma: "월", en: "month (of the year)", pos: "counter", tags: ["time","month","sino_number"] },
  { word: "일", lemma: "일", en: "day (of the month)", pos: "counter", tags: ["time","day","sino_number"] },
  { word: "년", lemma: "년", en: "year", pos: "counter", tags: ["time","year","sino_number"] },
  { word: "달", lemma: "달", en: "month (duration)", pos: "counter", tags: ["time","duration","native_number"] },
  { word: "주", lemma: "주", en: "week", pos: "counter", tags: ["time","week","sino_number"] },
  { word: "살", lemma: "살", en: "years old (age)", pos: "counter", tags: ["age","native_number"] },
  { word: "세", lemma: "세", en: "years old (formal age)", pos: "counter", tags: ["age","sino_number","formal"] },
  { word: "층", lemma: "층", en: "floor/story", pos: "counter", tags: ["building","sino_number"] },

  // Currency/money
  { word: "원", lemma: "원", en: "won (Korean currency)", pos: "counter", tags: ["money","sino_number"] },

  // ═══════════════════════════════════════════════════════════════════
  // INTERJECTIONS (감탄사) / Greetings / Social phrases
  // ═══════════════════════════════════════════════════════════════════
  { word: "네", lemma: "네", en: "yes (polite)", pos: "interjection", tags: ["affirmative","polite"] },
  { word: "예", lemma: "예", en: "yes (formal)", pos: "interjection", tags: ["affirmative","formal"] },
  { word: "응", lemma: "응", en: "yeah (casual)", pos: "interjection", tags: ["affirmative","casual"] },
  { word: "아니요", lemma: "아니요", en: "no (polite)", pos: "interjection", tags: ["negative","polite"] },
  { word: "아니", lemma: "아니", en: "no (casual)", pos: "interjection", tags: ["negative","casual"] },
  { word: "감사합니다", lemma: "감사합니다", en: "thank you (formal)", pos: "interjection", tags: ["gratitude","formal"] },
  { word: "고마워요", lemma: "고맙다", en: "thank you (polite)", pos: "interjection", tags: ["gratitude","polite"] },
  { word: "고마워", lemma: "고맙다", en: "thanks (casual)", pos: "interjection", tags: ["gratitude","casual"] },
  { word: "죄송합니다", lemma: "죄송합니다", en: "I'm sorry (formal)", pos: "interjection", tags: ["apology","formal"] },
  { word: "미안해요", lemma: "미안하다", en: "sorry (polite)", pos: "interjection", tags: ["apology","polite"] },
  { word: "미안해", lemma: "미안하다", en: "sorry (casual)", pos: "interjection", tags: ["apology","casual"] },
  { word: "안녕하세요", lemma: "안녕하세요", en: "hello (polite)", pos: "interjection", tags: ["greeting","polite"] },
  { word: "안녕", lemma: "안녕", en: "hi/bye (casual)", pos: "interjection", tags: ["greeting","casual"] },
  { word: "안녕히 가세요", lemma: "안녕히 가세요", en: "goodbye (to person leaving)", pos: "interjection", tags: ["farewell","polite","to_leaver"] },
  { word: "안녕히 계세요", lemma: "안녕히 계세요", en: "goodbye (to person staying)", pos: "interjection", tags: ["farewell","polite","to_stayer"] },
  { word: "잠깐만요", lemma: "잠깐만요", en: "just a moment please", pos: "interjection", tags: ["request","polite"] },
  { word: "잠시만요", lemma: "잠시만요", en: "one moment please", pos: "interjection", tags: ["request","polite"] },
  { word: "실례합니다", lemma: "실례합니다", en: "excuse me (formal)", pos: "interjection", tags: ["politeness","formal"] },
  { word: "괜찮아요", lemma: "괜찮다", en: "it's okay/I'm fine (polite)", pos: "interjection", tags: ["reassurance","polite"] },
  { word: "대박", lemma: "대박", en: "wow/amazing (slang)", pos: "interjection", tags: ["exclamation","casual"] },
  { word: "아이고", lemma: "아이고", en: "oh my/oh dear", pos: "interjection", tags: ["exclamation","surprise"] },
  { word: "어머", lemma: "어머", en: "oh my (female)", pos: "interjection", tags: ["exclamation","surprise"] },
  { word: "야", lemma: "야", en: "hey! (casual)", pos: "interjection", tags: ["attention","casual"] },
  { word: "여보세요", lemma: "여보세요", en: "hello (phone)", pos: "interjection", tags: ["greeting","phone"] },
  { word: "축하합니다", lemma: "축하합니다", en: "congratulations (formal)", pos: "interjection", tags: ["celebration","formal"] },
  { word: "축하해요", lemma: "축하하다", en: "congratulations (polite)", pos: "interjection", tags: ["celebration","polite"] },
  { word: "화이팅", lemma: "화이팅", en: "fighting!/you can do it!", pos: "interjection", tags: ["encouragement","konglish"] },
  { word: "수고하셨습니다", lemma: "수고하셨습니다", en: "thank you for your work (formal)", pos: "interjection", tags: ["workplace","formal"] },
  { word: "잘 먹겠습니다", lemma: "잘 먹겠습니다", en: "I will eat well (before meal)", pos: "interjection", tags: ["meal","formal","before_eating"] },
  { word: "잘 먹었습니다", lemma: "잘 먹었습니다", en: "I ate well (after meal)", pos: "interjection", tags: ["meal","formal","after_eating"] },
  { word: "천만에요", lemma: "천만에요", en: "you're welcome (polite)", pos: "interjection", tags: ["response","polite"] },
  { word: "별말씀을요", lemma: "별말씀을요", en: "not at all/you're welcome (humble)", pos: "interjection", tags: ["response","humble"] },
  { word: "만나서 반갑습니다", lemma: "만나서 반갑습니다", en: "nice to meet you (formal)", pos: "interjection", tags: ["greeting","formal","first_meeting"] },
  { word: "만나서 반가워요", lemma: "만나서 반가워요", en: "nice to meet you (polite)", pos: "interjection", tags: ["greeting","polite","first_meeting"] },

];
