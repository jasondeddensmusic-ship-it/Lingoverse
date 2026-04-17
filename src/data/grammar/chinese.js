// Chinese Grammar Reference - HSK 1-4 aligned, A1-B2
// Placeholder - full content being built by agent
export const CHINESE_GRAMMAR = {
  A1: [
    { title: "Pinyin and Tones", icon: "🎵", explanation: "**Mandarin Chinese uses 4 tones plus a neutral tone.**\nEach syllable has a tone that determines its meaning.\nTone 1: high flat (m\u0101 = mother).\nTone 2: rising (m\u00E1 = hemp).\nTone 3: dip-rise (m\u01CE = horse).\nTone 4: falling (m\u00E0 = scold).\nNeutral: short and light (ma = question particle).\n\n**Tone marks go on the main vowel.**\nIf there are two vowels, the mark goes on a before o/e, on the second vowel otherwise.\n\n**Getting tones right is essential.**\nChinese listeners rely on tones to understand meaning. Wrong tone = wrong word.", rules: [
      "FOUR TONES:",
      "1st tone: **\u0304** high flat (m\u0101)",
      "2nd tone: **\u0301** rising (m\u00E1)",
      "3rd tone: **\u030C** dip-rise (m\u01CE)",
      "4th tone: **\u0300** falling (m\u00E0)",
      "",
      "TONE SANDHI:",
      "Two 3rd tones together: first becomes 2nd.",
      "Example: n\u01D0 + h\u01CEo = n\u00ED h\u01CEo (hello).",
    ], examples: [
      "m\u0101 (mother), m\u00E1 (hemp), m\u01CE (horse), m\u00E0 (scold) - same syllable, four meanings.",
      "n\u01D0h\u01CEo (hello) - pronounced as n\u00EDh\u01CEo due to tone sandhi.",
      "b\u00F9 (not) before tone 4 becomes b\u00FA: b\u00FA sh\u00EC (is not).",
    ]},
    { title: "Basic Sentence Structure (SVO)", icon: "📐", explanation: "**Chinese follows Subject-Verb-Object order, like English.**\nI eat rice. = 我(w\u01D2)吃(ch\u012B)米饭(m\u01D0f\u00E0n)。\nShe reads books. = 她(t\u0101)看(k\u00E0n)书(sh\u016B)。\n\n**No conjugation is needed.**\nThe verb never changes form. No tenses, no agreement.\n我(w\u01D2)吃(ch\u012B) = I eat. 他(t\u0101)吃(ch\u012B) = He eats. Same verb.\n\n**Time words go before the verb.**\n我(w\u01D2)今天(j\u012Bnti\u0101n)吃(ch\u012B)米饭(m\u01D0f\u00E0n)。= I eat rice today.", rules: [
      "BASIC PATTERN:",
      "Subject + Verb + Object",
      "我(w\u01D2)吃(ch\u012B)米饭(m\u01D0f\u00E0n)。 - I eat rice.",
      "",
      "NO CONJUGATION:",
      "我(w\u01D2)吃(ch\u012B), 你(n\u01D0)吃(ch\u012B), 他(t\u0101)吃(ch\u012B) - same form.",
      "",
      "TIME BEFORE VERB:",
      "我(w\u01D2)**今天(j\u012Bnti\u0101n)**吃(ch\u012B)米饭(m\u01D0f\u00E0n)。",
    ], examples: [
      "我(w\u01D2)喝(h\u0113)茶(ch\u00E1)。 - I drink tea.",
      "她(t\u0101)看(k\u00E0n)书(sh\u016B)。 - She reads books.",
      "我们(w\u01D2men)明天(m\u00EDngti\u0101n)去(q\u00F9)学校(xu\u00E9xi\u00E0o)。 - We go to school tomorrow.",
    ]},
  ],
  A2: [],
  B1: [],
  B2: []
};
