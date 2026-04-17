const UNIT_05 = {
  n: 5, lang: "pt", srcLang: "en", track: "v2",
  title: "Todo dia",
  sub: "Daily Routines",
  icon: "🌅",
  level: "A1.2",
  color: "#7B5EE8",
  lessons: [
    {
      id: "ptv2_u5l1", title: "Today and Tomorrow", icon: "📅", xp: 15, board: true,
      steps: [
        {type: "intro", title: "Talking about days", desc: "Learn the three core time words for everyday conversation.", goals: ["Say today, yesterday, tomorrow", "Talk about now", "Use time words in sentences"]},

        {type: "teach", trg: "hoje", src: "today", pos: "adv", gender: null,
          note: "Adverb of time. Pronounced OH-zhee.",
          example: "A: O que você quer comer hoje?\nB: Hoje eu quero arroz.",
          exampleSrc: "A: What do you want to eat today?\nB: Today I want rice.",
          funFact: "From Latin hodie, same root as Italian oggi and Spanish hoy."},

        {type: "teach", trg: "ontem", src: "yesterday", pos: "adv", gender: null,
          note: "Adverb of past time. Pronounced OHN-tay.",
          example: "A: Ontem eu comi feijão.\nB: Hoje eu quero carne.",
          exampleSrc: "A: Yesterday I ate beans.\nB: Today I want meat.",
          funFact: "Hontem in Old Portuguese, from Latin ad noctem (at night)."},

        {type: "teach", trg: "amanhã", src: "tomorrow", pos: "adv", gender: null,
          note: "The tilde makes the ã nasal. Stress falls on the last syllable.",
          example: "A: Amanhã eu quero café.\nB: Eu também.",
          exampleSrc: "A: Tomorrow I want coffee.\nB: Me too.",
          funFact: "From Latin ad maneana (at morning), same origin as Spanish mañana."},

        {type: "teach", trg: "agora", src: "now", pos: "adv", gender: null,
          note: "Adverb for the present moment.",
          example: "A: Você quer comer agora?\nB: Sim, eu quero comer agora.",
          exampleSrc: "A: Do you want to eat now?\nB: Yes, I want to eat now.",
          funFact: "From Latin hac hora (at this hour)."},

        {type: "mc", q: "Which word means 'today'?",
          opts: ["ontem", "amanhã", "agora", "hoje"], ans: "hoje",
          hint: "Starts with H and refers to the current day."},

        {type: "mc", q: "Which word means 'tomorrow'?",
          opts: ["hoje", "ontem", "amanhã", "agora"], ans: "amanhã",
          hint: "Has a nasal ã at the end."},

        {type: "fb", s: "{1} eu quero pão com café.", a: "Hoje",
          sSrc: "Today I want bread with coffee.",
          opts: ["Hoje", "Ontem", "Amanhã", "Agora"],
          hint: "The present day."},

        {type: "fb", s: "{1} eu comi feijão.", a: "Ontem",
          sSrc: "Yesterday I ate beans.",
          opts: ["Hoje", "Ontem", "Amanhã", "Agora"],
          hint: "The day before today."},

        {type: "match", title: "Match time words",
          pairs: [{trg: "hoje", src: "today"}, {trg: "ontem", src: "yesterday"}, {trg: "amanhã", src: "tomorrow"}, {trg: "agora", src: "now"}]},

        {type: "mc", q: "Eu quero comer ____. (right at this moment)",
          opts: ["hoje", "ontem", "amanhã", "agora"], ans: "agora",
          hint: "The immediate present moment."},

        {type: "tr", mk: "Amanhã eu quero café.", dir: "trg2src"}
      ]
    },
    {
      id: "ptv2_u5l2", title: "Day, Week, Time", icon: "⏰", xp: 15, board: true,
      steps: [
        {type: "intro", title: "Units of time", desc: "Learn the core nouns for day, week, hour, and time.", goals: ["Name time units", "Ask about time", "Combine with numbers"]},

        {type: "teach", trg: "dia", src: "day", pos: "noun", gender: "m",
          note: "Masculine noun, even though it ends in -a.",
          example: "A: Hoje é um bom dia.\nB: Sim, um dia bonito.",
          exampleSrc: "A: Today is a good day.\nB: Yes, a beautiful day.",
          funFact: "Dia is one of the few masculine nouns ending in -a. Also used in bom dia (good morning)."},

        {type: "teach", trg: "semana", src: "week", pos: "noun", gender: "f",
          note: "Feminine noun. From Latin septimana (seven days).",
          example: "A: Eu tenho uma semana de férias.\nB: Que bom!",
          exampleSrc: "A: I have a week of vacation.\nB: How nice!",
          funFact: "Fim de semana (weekend) literally means 'end of week'."},

        {type: "teach", trg: "hora", src: "hour", pos: "noun", gender: "f",
          note: "Feminine noun. Also used to ask the time: Que horas são?",
          example: "A: Que horas são?\nB: É uma hora.",
          exampleSrc: "A: What time is it?\nB: It is one o'clock.",
          funFact: "Hora covers both 'hour' and 'time of day'."},

        {type: "teach", trg: "tempo", src: "time", pos: "noun", gender: "m",
          note: "Masculine. Means time in general, and also weather.",
          example: "A: Você tem tempo agora?\nB: Não, eu não tenho tempo hoje.",
          exampleSrc: "A: Do you have time now?\nB: No, I do not have time today.",
          funFact: "Tempo means both time and weather, just like French temps."},

        {type: "mc", q: "Which word is feminine?",
          opts: ["dia", "tempo", "semana", "café"], ans: "semana",
          hint: "Takes the article a, and refers to seven days."},

        {type: "fb", s: "Eu tenho uma {1}. (one week)", a: "semana",
          sSrc: "I have one week.",
          opts: ["dia", "semana", "hora", "tempo"],
          hint: "Seven days together."},

        {type: "mc", q: "Que ____ são? (what time is it)",
          opts: ["dia", "semana", "horas", "tempo"], ans: "horas",
          hint: "Plural of hour, used when asking the clock time."},

        {type: "teach", trg: "quanto", src: "how much", pos: "pron", gender: "m",
          note: "Masculine form. Feminine is quanta. Used for amounts and time.",
          example: "A: Quanto tempo você tem?\nB: Eu tenho uma hora.",
          exampleSrc: "A: How much time do you have?\nB: I have one hour.",
          funFact: "In Unit 2 you learned quantos for counting plural items. Quanto tempo asks how much time."},

        {type: "fb", s: "{1} tempo você tem?", a: "Quanto",
          sSrc: "How much time do you have?",
          opts: ["Quantos", "Quanto", "Quem", "Que"],
          hint: "Singular masculine form for uncountable nouns like tempo."},

        {type: "match", title: "Match time units",
          pairs: [{trg: "dia", src: "day"}, {trg: "semana", src: "week"}, {trg: "hora", src: "hour"}, {trg: "tempo", src: "time"}]},

        {type: "mc", q: "Hoje é um bom ____.",
          opts: ["semana", "hora", "dia", "tempo"], ans: "dia",
          hint: "Masculine, and used in bom ___ greeting."},

        {type: "tr", mk: "Eu não tenho tempo hoje.", dir: "trg2src"}
      ]
    },
    {
      id: "ptv2_u5l3", title: "Parts of the Day", icon: "🌞", xp: 15, board: true,
      steps: [
        {type: "intro", title: "Morning, afternoon, night", desc: "Learn the three main parts of the day and when to use them.", goals: ["Name parts of day", "Use cedo and tarde", "Connect to greetings"]},

        {type: "teach", trg: "manhã", src: "morning", pos: "noun", gender: "f",
          note: "Feminine. Pronounced mahn-YAH with a nasal ã.",
          example: "A: Eu quero café de manhã.\nB: Eu também.",
          exampleSrc: "A: I want coffee in the morning.\nB: Me too.",
          funFact: "Bom dia (good morning) uses dia, but de manhã means in the morning."},

        {type: "teach", trg: "tarde", src: "afternoon", pos: "noun", gender: "f",
          note: "Feminine as a noun. Also used in boa tarde (good afternoon).",
          example: "A: Boa tarde!\nB: Boa tarde! Você quer chá?",
          exampleSrc: "A: Good afternoon!\nB: Good afternoon! Do you want tea?",
          funFact: "Tarde can also mean late (as an adverb). Context shows which meaning."},

        {type: "teach", trg: "noite", src: "night", pos: "noun", gender: "f",
          note: "Feminine. Used in boa noite (good night or good evening).",
          example: "A: Boa noite!\nB: Boa noite! Até amanhã.",
          exampleSrc: "A: Good night!\nB: Good night! See you tomorrow.",
          funFact: "Brazilians use boa noite both for evening arrivals and for bedtime."},

        {type: "mc", q: "Which word means 'morning'?",
          opts: ["tarde", "noite", "manhã", "dia"], ans: "manhã",
          hint: "Has a nasal ã at the end."},

        {type: "teach", trg: "cedo", src: "early", pos: "adv", gender: null,
          note: "Adverb. The opposite of tarde (late).",
          example: "A: Eu acordo cedo.\nB: Eu também, de manhã cedo.",
          exampleSrc: "A: I wake up early.\nB: Me too, early in the morning.",
          funFact: "From Latin cito (quickly). Brazilians often say bem cedo for very early."},

        {type: "teach", trg: "tarde", src: "late", pos: "adv", gender: null,
          note: "As an adverb, means late. Same spelling as the noun for afternoon.",
          example: "A: Você vai chegar tarde?\nB: Sim, eu vou chegar tarde hoje.",
          exampleSrc: "A: Are you going to arrive late?\nB: Yes, I am going to arrive late today.",
          funFact: "Portuguese often uses one word for two roles. Context makes the meaning clear."},

        {type: "mc", q: "Which word means 'early'?",
          opts: ["tarde", "cedo", "agora", "hoje"], ans: "cedo",
          hint: "Opposite of late."},

        {type: "fb", s: "Boa {1}! (greeting at night)", a: "noite",
          sSrc: "Good night!",
          opts: ["manhã", "tarde", "noite", "dia"],
          hint: "Evening and night-time greeting."},

        {type: "fb", s: "Eu acordo {1} de manhã.", a: "cedo",
          sSrc: "I wake up early in the morning.",
          opts: ["tarde", "cedo", "agora", "hoje"],
          hint: "Opposite of late."},

        {type: "match", title: "Match parts of day",
          pairs: [{trg: "manhã", src: "morning"}, {trg: "tarde", src: "afternoon"}, {trg: "noite", src: "night"}, {trg: "cedo", src: "early"}]},

        {type: "mc", q: "De ____ eu como pão e café.",
          opts: ["noite", "tarde", "manhã", "hora"], ans: "manhã",
          hint: "The morning meal time."},

        {type: "tr", mk: "Boa tarde! Você quer café?", dir: "trg2src"}
      ]
    },
    {
      id: "ptv2_u5l4", title: "Always and Never", icon: "🔁", xp: 15, board: true,
      steps: [
        {type: "intro", title: "Frequency adverbs", desc: "Learn sempre and nunca to talk about how often you do things.", goals: ["Say always and never", "Combine with verbs", "Review daily routines"]},

        {type: "teach", trg: "sempre", src: "always", pos: "adv", gender: null,
          note: "Adverb of frequency. Usually placed after the verb.",
          example: "A: Eu sempre quero café de manhã.\nB: Eu também, sempre.",
          exampleSrc: "A: I always want coffee in the morning.\nB: Me too, always.",
          funFact: "From Latin semper, same root as English sempiternal."},

        {type: "teach", trg: "nunca", src: "never", pos: "adv", gender: null,
          note: "Adverb of frequency. The opposite of sempre.",
          example: "A: Eu nunca bebo chá.\nB: Eu nunca bebo café.",
          exampleSrc: "A: I never drink tea.\nB: I never drink coffee.",
          funFact: "Nunca can go before or after the verb. Eu nunca como or nunca eu como both work."},

        {type: "mc", q: "Which word means 'always'?",
          opts: ["nunca", "agora", "sempre", "tarde"], ans: "sempre",
          hint: "Every single time, without exception."},

        {type: "mc", q: "Which word means 'never'?",
          opts: ["sempre", "nunca", "cedo", "hoje"], ans: "nunca",
          hint: "Not ever, zero times."},

        {type: "fb", s: "Eu {1} como feijão. (every single day)", a: "sempre",
          sSrc: "I always eat beans.",
          opts: ["nunca", "sempre", "cedo", "tarde"],
          hint: "The opposite of never."},

        {type: "fb", s: "Ela {1} bebe café. (not ever)", a: "nunca",
          sSrc: "She never drinks coffee.",
          opts: ["sempre", "nunca", "hoje", "agora"],
          hint: "Zero times, not once."},

        {type: "tip", title: "Word order with sempre and nunca",
          text: "The most common pattern is:\nSubject + frequency + verb\nEu sempre como.\nEu nunca bebo chá.",
          deepDive: "Both sempre and nunca typically come between the subject and the verb in everyday speech. For stronger emphasis, you can also put nunca at the start: Nunca eu faço isso. In polite spoken Brazilian, sempre almost always stays in the middle."},

        {type: "mc", q: "Eu ____ como arroz com feijão.",
          opts: ["sempre", "nunca", "cedo", "tarde"], ans: "sempre",
          hint: "Brazilians eat this pair daily, so always fits."},

        {type: "fb", s: "A: Você come carne? B: Não, eu {1} como carne.", a: "nunca",
          sSrc: "A: Do you eat meat? B: No, I never eat meat.",
          opts: ["sempre", "nunca", "agora", "cedo"],
          hint: "Not once, ever."},

        {type: "match", title: "Match frequency and time",
          pairs: [{trg: "sempre", src: "always"}, {trg: "nunca", src: "never"}, {trg: "agora", src: "now"}, {trg: "cedo", src: "early"}]},

        {type: "mc", q: "Eu ____ acordo cedo de manhã.",
          opts: ["nunca", "tarde", "sempre", "agora"], ans: "sempre",
          hint: "A habitual morning action, every day."},

        {type: "tr", mk: "Eu sempre quero café de manhã.", dir: "trg2src"},

        {type: "fb", s: "Ele {1} bebe suco à tarde.", a: "sempre",
          sSrc: "He always drinks juice in the afternoon.",
          opts: ["sempre", "nunca", "cedo", "hoje"],
          hint: "Every afternoon, without fail."}
      ]
    }
  ]
};

export default UNIT_05;
