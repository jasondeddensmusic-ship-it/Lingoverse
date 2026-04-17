// Russian Grammar Reference - CEFR A1-B2 (TRKI aligned)
// Placeholder — full content pending agent build
export const RUSSIAN_GRAMMAR = {
  A1: [
    { title: "Cyrillic Alphabet", icon: "🔤", explanation: "**Russian uses the Cyrillic alphabet.**\n33 letters total: 10 vowels, 21 consonants, 2 signs (ь soft sign, ъ hard sign).\n\n**Familiar friends:** A, M, T, K, O look like Latin.\n**False friends:** В = V (not B), Н = N (not H), Р = R (not P), С = S (not C), У = U (not Y), Х = KH (not X), Я = YA.\n**Completely new:** Б, Д, Ж, З, И, Й, Ф, Ц, Ч, Ш, Щ, Ъ, Ы, Ь, Э, Ю.\n\n**Reading Russian is phonetic.** Once you learn the letters, spelling predicts pronunciation.", rules: [
      "CYRILLIC = LATIN SOUND:",
      "А = a, Б = b, В = v, Г = g, Д = d",
      "Е = ye, Ё = yo, Ж = zh, З = z, И = i",
      "Й = y (short), К = k, Л = l, М = m, Н = n",
      "О = o, П = p, Р = r, С = s, Т = t",
      "У = u, Ф = f, Х = kh, Ц = ts, Ч = ch",
      "Ш = sh, Щ = shch, Ы = y (hard), Э = e, Ю = yu, Я = ya",
    ], examples: [
      "Привет (privet) - hello.",
      "Спасибо (spasibo) - thank you.",
      "Москва (Moskva) - Moscow.",
      "Россия (Rossiya) - Russia.",
    ]},
    { title: "Six Cases Overview", icon: "🎯", explanation: "**Russian has 6 cases.** Noun endings change depending on their role in the sentence.\n\nThis is the biggest challenge for English speakers. But: once learned, word order becomes flexible.\n\n**Cases:**\n1. **Nominative** - subject (кто? что?)\n2. **Accusative** - direct object (кого? что?)\n3. **Genitive** - possession, absence (кого? чего?)\n4. **Dative** - indirect object (кому? чему?)\n5. **Instrumental** - by/with (кем? чем?)\n6. **Prepositional** - about/in/on (о ком? о чём?)", rules: [
      "NOMINATIVE (subject):",
      "**Анна** читает. — Anna reads.",
      "",
      "ACCUSATIVE (object):",
      "Я вижу **Анну**. — I see Anna.",
      "",
      "GENITIVE (possession/absence):",
      "Дом **Анны**. — Anna's house.",
      "Нет **Анны**. — Anna is not here.",
    ], examples: [
      "Я пью кофе. — I drink coffee. (кофе is accusative, same as nominative for inanimate)",
      "У меня нет времени. — I have no time. (genitive after нет)",
      "Я говорю с Анной. — I speak with Anna. (instrumental after с)",
      "Книга о России. — A book about Russia. (prepositional after о)",
    ]},
  ],
  A2: [],
  B1: [],
  B2: []
};
