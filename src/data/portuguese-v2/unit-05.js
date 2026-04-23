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
          pairs: [{trg: "manhã", src: "morning"}, {trg: "tarde", src: "afternoon"}, {trg: "noite", src: "night"}, {trg: "cedo", src: "early"},{trg:"quanto", src:"how much"}]},

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
    },
    {
      id: "ptv2_u5l_days", title: "Dias da semana", icon: "📅", xp: 15, board: true,
      steps: [
        {type: "intro", title: "Days of the Week", desc: "Learn the days of the week in Brazilian Portuguese. These are essential for scheduling, making plans, and everyday conversation.", goals: ["Learn all 7 days of the week", "Use days with 'na/no' prepositions", "Talk about weekly routines"]},

        {type: "teach", trg: "segunda-feira", src: "Monday", pos: "noun", gender: "f",
          note: "Literally 'second market day'. Portuguese weekdays count market days.",
          example: "A: Hoje é segunda-feira?\nB: Sim, hoje é segunda-feira.",
          exampleSrc: "A: Is today Monday?\nB: Yes, today is Monday.",
          funFact: "Portuguese names weekdays by ordinal numbers. Segunda means second. Monday is the second day of the traditional week (after Sunday)."},

        {type: "teach", trg: "terça-feira", src: "Tuesday", pos: "noun", gender: "f",
          note: "Literally 'third market day'. Terça = third (feminine).",
          example: "A: Amanhã é terça-feira?\nB: Sim, amanhã é terça-feira.",
          exampleSrc: "A: Is tomorrow Tuesday?\nB: Yes, tomorrow is Tuesday.",
          funFact: "Terça comes from Latin tertia, meaning third. Portuguese is the only Romance language that names weekdays by market-day numbers."},

        {type: "teach", trg: "quarta-feira", src: "Wednesday", pos: "noun", gender: "f",
          note: "Literally 'fourth market day'. Quarta = fourth (feminine).",
          example: "A: Hoje é quarta-feira.\nB: Boa tarde! Quarta-feira já.",
          exampleSrc: "A: Today is Wednesday.\nB: Good afternoon! Wednesday already.",
          funFact: "Quarta comes from Latin quarta, meaning fourth. Wednesday breaks the week in half, making quarta-feira literally midweek."},

        {type: "teach", trg: "quinta-feira", src: "Thursday", pos: "noun", gender: "f",
          note: "Literally 'fifth market day'. Quinta = fifth (feminine).",
          example: "A: Você quer café na quinta-feira?\nB: Sim, na quinta-feira.",
          exampleSrc: "A: Do you want coffee on Thursday?\nB: Yes, on Thursday.",
          funFact: "In most Romance languages Thursday is named after the Roman god Jupiter (jovedi, jueves, jeudi). Only Portuguese uses the ordinal feira system."},

        {type: "teach", trg: "sexta-feira", src: "Friday", pos: "noun", gender: "f",
          note: "Literally 'sixth market day'. Sexta = sixth (feminine).",
          example: "A: Hoje é sexta-feira!\nB: Boa tarde! Sexta-feira.",
          exampleSrc: "A: Today is Friday!\nB: Good afternoon! Friday.",
          funFact: "Sexta comes from Latin sexta, meaning sixth. In Brazilian culture, sexta-feira is widely celebrated as the gateway to the weekend."},

        {type: "tip", title: "The feira system: how Portuguese names weekdays",
          text: "Monday through Friday are named using ordinal numbers plus feira (market day):\nsegunda (2nd) terça (3rd) quarta (4th) quinta (5th) sexta (6th)\n\nNo other Romance language does this. French, Spanish, and Italian use Roman god names (Lundi, Lunes, Lunedi).\n\nThe weekend keeps religious names: sábado (Sabbath) and domingo (Lord's Day).",
          deepDive: "The feira system comes from medieval Portugal, where weekly market days were counted from Sunday. Igreja (church) days set the rhythm of the week. Monday was the second day after Sunday, and so on up to Friday. When you learn Portuguese, you are inheriting a Medieval Portuguese counting system that has survived for 800 years."},

        {type: "teach", trg: "sábado", src: "Saturday", pos: "noun", gender: "m",
          note: "Masculine noun. No feira suffix. From Hebrew Shabbat (rest day).",
          example: "A: Você quer comer no sábado?\nB: Sim, no sábado.",
          exampleSrc: "A: Do you want to eat on Saturday?\nB: Yes, on Saturday.",
          funFact: "Sábado comes from Hebrew Shabbat, the Jewish day of rest. It entered Portuguese through Latin and Arabic during the medieval Iberian period."},

        {type: "teach", trg: "domingo", src: "Sunday", pos: "noun", gender: "m",
          note: "Masculine noun. No feira suffix. From Latin dies Dominica (Lord's Day).",
          example: "A: Você bebe café no domingo?\nB: Sim, sempre no domingo.",
          exampleSrc: "A: Do you drink coffee on Sunday?\nB: Yes, always on Sunday.",
          funFact: "Domingo comes from Latin dies Dominica, meaning the Lord's Day. The same root gives Italian domenica and Spanish domingo."},

        {type: "mc", q: "Which day is 'Monday' in Portuguese?",
          opts: ["terça-feira", "segunda-feira", "quarta-feira", "domingo"], ans: "segunda-feira",
          hint: "The second market day of the week."},

        {type: "mc", q: "Which day is 'Friday' in Portuguese?",
          opts: ["quinta-feira", "sábado", "sexta-feira", "terça-feira"], ans: "sexta-feira",
          hint: "The final market-day weekday. Six comes after five in the ordinal count."},

        {type: "mc", q: "Sábado and domingo have no feira because they are ____.",
          opts: ["religious names", "market days", "ordinal numbers", "Latin verbs"], ans: "religious names",
          hint: "One comes from Hebrew, one from Latin for Lord's Day."},

        {type: "fb", s: "Hoje é {1}. (the second market day)", a: "segunda-feira",
          sSrc: "Today is Monday.",
          opts: ["segunda-feira", "terça-feira", "quarta-feira", "quinta-feira"],
          hint: "Second of the market-day weekdays."},

        {type: "fb", s: "Você quer comer no {1}? (the fifth market day)", a: "quinta-feira",
          sSrc: "Do you want to eat on Thursday?",
          opts: ["terça-feira", "quarta-feira", "quinta-feira", "sexta-feira"],
          hint: "Four plus one. The day between Wednesday and Friday."},

        {type: "match", title: "Match days of the week",
          pairs: [{trg: "segunda-feira", src: "Monday"}, {trg: "quarta-feira", src: "Wednesday"}, {trg: "sexta-feira", src: "Friday"}, {trg: "domingo", src: "Sunday"}]},

        {type: "fb", s: "Amanhã é {1}. (the day after Saturday)", a: "domingo",
          sSrc: "Tomorrow is Sunday.",
          opts: ["sábado", "domingo", "segunda-feira", "sexta-feira"],
          hint: "Lord's Day. Comes after sábado."},

        {type: "mc", q: "Eu sempre bebo café no ____. (a weekend day named after the Sabbath)",
          opts: ["domingo", "sexta-feira", "sábado", "segunda-feira"], ans: "sábado",
          hint: "From Hebrew Shabbat. Saturday."},

        {type: "match", title: "Match remaining days",
          pairs: [{trg: "terça-feira", src: "Tuesday"}, {trg: "quinta-feira", src: "Thursday"}, {trg: "sábado", src: "Saturday"}]}
      ]
    },
    {
      id: "ptv2_u5l5", title: "Posso, sei, consigo", icon: "💪", xp: 15, board: true,
      steps: [
        {type: "intro", title: "Expressing Ability", desc: "Learn to say what you can and cannot do in Brazilian Portuguese using poder (can), saber (know how to), and conseguir (manage to).", goals: ["Use poder for permission and possibility", "Use saber for learned skills", "Say what you cannot do"]},

        {type: "teach", trg: "poder", src: "to be able to / can", pos: "verb", gender: null,
          note: "Irregular modal verb for general possibility or permission.\neu posso (I can), você pode (you can), podemos (we can).",
          example: "A: Eu posso comer agora?\nB: Sim, você pode comer.",
          exampleSrc: "A: Can I eat now?\nB: Yes, you can eat.",
          funFact: "From Latin potere. The same root gave English possible, potent, and powerful."},

        {type: "teach", trg: "saber", src: "to know how to", pos: "verb", gender: null,
          note: "Use saber for skills you have learned.\neu sei (I know how to), você sabe (you know how to).",
          example: "A: Você sabe cozinhar?\nB: Eu sei cozinhar um pouco.",
          exampleSrc: "A: Do you know how to cook?\nB: I know how to cook a little.",
          funFact: "Saber covers knowledge of skills and facts. Conhecer means 'to be acquainted with' a person or place. Never swap them."},

        {type: "teach", trg: "conseguir", src: "to manage to / to be able to", pos: "verb", gender: null,
          note: "Use conseguir to stress effort or success.\neu consigo (I manage to), você consegue (you manage to).",
          example: "A: Você consegue comer tudo?\nB: Sim, eu consigo.",
          exampleSrc: "A: Can you manage to eat everything?\nB: Yes, I can manage.",
          funFact: "Conseguir implies overcoming a challenge. Eu consigo suggests you succeeded despite difficulty."},

        {type: "tip", title: "Poder vs. saber vs. conseguir",
          text: "poder: general possibility or permission.\nsaber: a learned skill.\nconseguir: managing to do something, often despite difficulty.\n\nAll three translate as 'can' in English, but Portuguese keeps them separate.",
          deepDive: "For everyday A1 use: permission or possibility = poder. Learned skill = saber. Difficult achievement = conseguir. In Brazil, saber is the go-to for skills: Eu sei nadar, eu sei cozinhar, eu sei dirigir."},

        {type: "teach", trg: "não posso", src: "I cannot", pos: "verb", gender: null,
          note: "Negation of posso. Place não directly before the verb.",
          example: "A: Você pode comer agora?\nB: Não, eu não posso comer agora.",
          exampleSrc: "A: Can you eat now?\nB: No, I cannot eat now.",
          funFact: "Brazilians sometimes intensify negation: Eu nao posso nao. This doubled no is common in casual speech."},

        {type: "teach", trg: "não sei", src: "I do not know how", pos: "verb", gender: null,
          note: "Negation of sei. Used when you lack a learned skill.",
          example: "A: Você sabe cozinhar?\nB: Não, eu não sei cozinhar.",
          exampleSrc: "A: Do you know how to cook?\nB: No, I do not know how to cook.",
          funFact: "Nao sei alone (without a following verb) is the everyday phrase for 'I don't know' in conversation."},

        {type: "teach", trg: "cozinhar", src: "to cook", pos: "verb", gender: null,
          note: "A regular -ar verb. The standard verb for preparing food.",
          example: "A: Você sabe cozinhar?\nB: Sim, eu sei cozinhar.",
          exampleSrc: "A: Do you know how to cook?\nB: Yes, I know how to cook.",
          funFact: "From Latin coquinare. Cozinha (kitchen) and culinária (cuisine) share the same root."},

        {type: "teach", trg: "dirigir", src: "to drive", pos: "verb", gender: null,
          note: "A regular -ir verb. The standard verb for driving a vehicle.",
          example: "A: Você sabe dirigir?\nB: Sim, eu sei dirigir.",
          exampleSrc: "A: Do you know how to drive?\nB: Yes, I know how to drive.",
          funFact: "From Latin dirigere (to guide, direct). The same root gives English direct and director."},

        {type: "mc", q: "Which verb means 'to know how to' (a learned skill)?",
          opts: ["poder", "conseguir", "saber", "querer"], ans: "saber",
          hint: "Think: I know how to cook, I know how to drive."},

        {type: "mc", q: "Which phrase correctly means 'I cannot'?",
          opts: ["eu posso", "eu não sei", "eu não posso", "eu consegue"], ans: "eu não posso",
          hint: "Start with the subject, then the negation word, then the verb form for I."},

        {type: "fb", s: "Eu {1} cozinhar bem.", a: "sei",
          sSrc: "I know how to cook well.",
          opts: ["posso", "sei", "consigo", "quero"],
          hint: "Cooking is a learned skill. Use the skill verb, not the permission verb."},

        {type: "fb", s: "Você {1} comer agora?", a: "pode",
          sSrc: "Can you eat now?",
          opts: ["sabe", "pode", "consegue", "quer"],
          hint: "Permission or general possibility uses this modal verb."},

        {type: "mc", q: "Eu ____ dirigir. (I do not know how to drive)",
          opts: ["não posso", "não sei", "não consigo", "não quero"], ans: "não sei",
          hint: "Driving is a learned skill. Negate the skill verb, not the permission verb."},

        {type: "fb", s: "Ele não {1} cozinhar hoje.", a: "consegue",
          sSrc: "He cannot manage to cook today.",
          opts: ["sabe", "pode", "consegue", "quer"],
          hint: "The effort or success verb, third-person singular."},

        {type: "match", title: "Match the ability phrases",
          pairs: [{trg: "eu posso", src: "I can (permission)"}, {trg: "eu sei", src: "I know how to"}, {trg: "eu consigo", src: "I manage to"}, {trg: "eu não sei", src: "I do not know how"}]},

        {type: "fb", s: "Eu sei {1} muito bem.", a: "cozinhar",
          sSrc: "I know how to cook very well.",
          opts: ["cozinhar", "dirigir", "comer", "beber"],
          hint: "The verb for preparing food in the kitchen."},

        {type: "fb", s: "Você sabe {1}?", a: "dirigir",
          sSrc: "Do you know how to drive?",
          opts: ["dirigir", "cozinhar", "comer", "beber"],
          hint: "The verb for operating a car."},

        {type: "mc", q: "Você ____ cozinhar? Sim, eu sei.",
          opts: ["posso", "sabe", "consegue", "pode"], ans: "sabe",
          hint: "Asking about a skill uses the skill verb. Você form of saber."},

        {type: "fb", s: "Eu sempre {1} beber água.", a: "posso",
          sSrc: "I can always drink water.",
          opts: ["sei", "posso", "consigo", "quero"],
          hint: "General possibility uses this modal verb."}
      ]
    },
    {
      id: "ptv2_u5l_essential_a1", title: "Verbos e alimentos essenciais", icon: "🗝️", xp: 20, board: true,
      steps: [
        {type: "intro", title: "Essential daily words", desc: "Learn two foundational Brazilian foods and eight core verbs you will use every day. These words come up in nearly every conversation.", goals: ["Name two breakfast staples: queijo and ovo", "Use estudar, ver, ouvir, abrir, fechar, sair", "Use perguntar and começar in sentences", "Produce target forms in fill-in-the-blank quizzes"]},

        {type: "teach", trg: "o queijo", src: "the cheese", pos: "noun", gender: "m",
          note: "Masculine noun. One of the most common Brazilian breakfast foods.\nArticle: o queijo. With em: no queijo.",
          example: "A: Você quer queijo hoje?\nB: Sim, eu quero queijo com pão.",
          exampleSrc: "A: Do you want cheese today?\nB: Yes, I want cheese with bread.",
          funFact: "Brazil is one of the world's top cheese producers. Queijo mineiro, from Minas Gerais, is so iconic it earned UNESCO heritage status in 2019."},

        {type: "teach", trg: "o ovo", src: "the egg", pos: "noun", gender: "m",
          note: "Masculine noun. Plural: ovos. A staple of the Brazilian café da manhã (breakfast).",
          example: "A: Você come ovo de manhã?\nB: Sim, sempre como ovo.",
          exampleSrc: "A: Do you eat egg in the morning?\nB: Yes, I always eat egg.",
          funFact: "Brazil is the fourth-largest egg producer globally. Ovos mexidos (scrambled eggs) and ovo frito (fried egg) are standard on nearly every Brazilian breakfast table."},

        {type: "teach", trg: "estudar", src: "to study", pos: "verb", gender: null,
          note: "Regular -ar verb. eu estudo, você estuda, nós estudamos.\nUsed for studying any subject or language.",
          example: "A: Você quer estudar hoje?\nB: Sim, eu quero estudar agora.",
          exampleSrc: "A: Do you want to study today?\nB: Yes, I want to study now.",
          funFact: "From Latin studere (to be eager). The same root gives English studio, student, and study."},

        {type: "teach", trg: "ver", src: "to see", pos: "verb", gender: null,
          note: "Irregular verb. eu vejo (I see), você vê (you see), ele vê (he sees).\nUse for seeing with the eyes or watching something.",
          example: "A: Você quer ver?\nB: Sim, eu quero ver agora.",
          exampleSrc: "A: Do you want to see?\nB: Yes, I want to see now.",
          funFact: "One of the most ancient Portuguese verbs, from Latin videre. The same root gives English video, vision, and visual."},

        {type: "teach", trg: "ouvir", src: "to hear / to listen", pos: "verb", gender: null,
          note: "Irregular -ir verb. eu ouço (I hear), você ouve (you hear).\nUsed for both passive hearing and active listening.",
          example: "A: Você ouve bem?\nB: Sim, eu ouço bem.",
          exampleSrc: "A: Do you hear well?\nB: Yes, I hear well.",
          funFact: "Ouço (I hear/listen) has the irregular -ço ending. From Latin audire, same root as English audio and audience."},

        {type: "teach", trg: "abrir", src: "to open", pos: "verb", gender: null,
          note: "Regular -ir verb. eu abro, você abre, nós abrimos.\nUsed for doors, windows, books, shops.",
          example: "A: Você pode abrir?\nB: Sim, eu posso abrir agora.",
          exampleSrc: "A: Can you open it?\nB: Yes, I can open it now.",
          funFact: "From Latin aperire. Abertura (opening, overture) shares the same root. Also used in abrir um negócio (to open a business)."},

        {type: "teach", trg: "fechar", src: "to close", pos: "verb", gender: null,
          note: "Regular -ar verb. eu fecho, você fecha, nós fechamos.\nThe direct opposite of abrir.",
          example: "A: Pode fechar agora?\nB: Sim, eu fecho agora.",
          exampleSrc: "A: Can you close it now?\nB: Yes, I will close it now.",
          funFact: "Fechado (closed) appears on nearly every shop sign in Brazil. The same root gives fechadura (lock) and enclausurar (to lock away)."},

        {type: "teach", trg: "sair", src: "to leave / to go out", pos: "verb", gender: null,
          note: "Irregular -ir verb. eu saio (I leave), você sai (you leave).\nUsed for leaving a place or going out socially.",
          example: "A: Você vai sair hoje?\nB: Sim, eu quero sair de manhã.",
          exampleSrc: "A: Are you going to go out today?\nB: Yes, I want to go out in the morning.",
          funFact: "Saio (I leave) keeps the irregular -io ending in the eu form. A saída (the exit) comes from the same root and appears on every door in Brazil."},

        {type: "teach", trg: "perguntar", src: "to ask (a question)", pos: "verb", gender: null,
          note: "Regular -ar verb. eu pergunto, você pergunta.\nUsed when asking someone a question. Do not confuse with pedir (to ask for something).",
          example: "A: Posso perguntar?\nB: Sim, pode perguntar agora.",
          exampleSrc: "A: May I ask?\nB: Yes, you may ask now.",
          funFact: "From Latin percontari (to question thoroughly). Pergunta means question. Brazilians often say Posso te fazer uma pergunta? before asking anything delicate."},

        {type: "teach", trg: "começar", src: "to begin / to start", pos: "verb", gender: null,
          note: "Regular -ar verb with spelling change: eu começo (c becomes ç before o).\nvocê começa, nós começamos.",
          example: "A: Quando você quer começar?\nB: Eu quero começar agora.",
          exampleSrc: "A: When do you want to start?\nB: I want to start now.",
          funFact: "The spelling change começo (not comeco) is mandatory. Portuguese uses ç before o/a to preserve the soft /s/ sound. From Latin initiare via Vulgar Latin."},

        {type: "tip", title: "Irregular eu forms: ver, ouvir, sair, começar",
          text: "Four verbs in this lesson have tricky first-person singular forms:\n\nver: eu vejo (not eu ve)\nouvir: eu ouço (not eu ouvio)\nsair: eu saio (not eu sai)\ncomeçar: eu começo (spelling change: c to ç)\n\nAll other forms are regular. Just memorize the eu form for each.",
          deepDive: "These irregular eu forms are extremely common in speech. Brazilians hear eu ouço, eu vejo, eu saio, and eu começo hundreds of times a day. The best strategy: practice the eu form in short sentences until it feels automatic. Você/ele/ela forms follow the infinitive stem with standard endings."},

        {type: "mc", q: "Which word means 'the egg'?",
          opts: ["o queijo", "o ovo", "o leite", "o café"], ans: "o ovo",
          hint: "A round breakfast item. Its plural is ovos."},

        {type: "mc", q: "Which verb means 'to study'?",
          opts: ["ver", "ouvir", "estudar", "sair"], ans: "estudar",
          hint: "A regular -ar verb. Think: student, studio."},

        {type: "fb", s: "Eu {1} bem de manhã. (I listen / I hear)", a: "ouço",
          sSrc: "I hear well in the morning.",
          opts: ["ouvir", "ouço", "vejo", "abro"],
          hint: "Irregular eu form of ouvir. Ends in -ço."},

        {type: "fb", s: "Ela quer {1} agora. (to open)", a: "abrir",
          sSrc: "She wants to open it now.",
          opts: ["fechar", "abrir", "sair", "ver"],
          hint: "The infinitive meaning to open, opposite of fechar."},

        {type: "mc", q: "What is the eu form of ver?",
          opts: ["eu ve", "eu vejo", "eu vir", "eu vê"], ans: "eu vejo",
          hint: "Irregular: adds -jo to the stem."},

        {type: "fb", s: "Você pode {1} agora? (to close)", a: "fechar",
          sSrc: "Can you close it now?",
          opts: ["abrir", "fechar", "sair", "começar"],
          hint: "The opposite of abrir. Regular -ar verb."},

        {type: "fb", s: "Eu {1} de casa às oito. (I leave)", a: "saio",
          sSrc: "I leave home at eight.",
          opts: ["sai", "saio", "saiu", "vou"],
          hint: "Irregular eu form of sair. Ends in -io."},

        {type: "match", title: "Match the verbs",
          pairs: [{trg: "estudar", src: "to study"}, {trg: "ver", src: "to see"}, {trg: "ouvir", src: "to hear"}, {trg: "sair", src: "to go out"}]},

        {type: "mc", q: "Posso ____ agora? (to ask something)",
          opts: ["perguntar", "começar", "abrir", "estudar"], ans: "perguntar",
          hint: "The verb for posing a question, not for requesting an object."},

        {type: "fb", s: "Quando você quer {1}? (to begin)", a: "começar",
          sSrc: "When do you want to start?",
          opts: ["começar", "terminar", "sair", "estudar"],
          hint: "The verb for starting something. eu começo is its irregular eu form."},

        {type: "mc", q: "Which two are masculine nouns?",
          opts: ["o queijo e o ovo", "o queijo e a água", "o ovo e a fruta", "o café e a casa"], ans: "o queijo e o ovo",
          hint: "Both are common breakfast items. Both take the article o."},

        {type: "fb", s: "Eu {1} estudar hoje. (I want to begin)", a: "quero começar",
          sSrc: "I want to start studying today.",
          opts: ["quero começar", "posso sair", "sei abrir", "vou ouvir"],
          hint: "Two-word phrase: the querer form for eu, then the infinitive for starting."},

        {type: "match", title: "Match nouns and verbs",
          pairs: [{trg: "o queijo", src: "the cheese"}, {trg: "o ovo", src: "the egg"}, {trg: "abrir", src: "to open"}, {trg: "fechar", src: "to close"}]},

        {type: "mc", q: "Eu ____ de casa às oito. (the correct eu form of sair)",
          opts: ["sai", "saio", "saiu", "saiço"], ans: "saio",
          hint: "The irregular eu form ends in -io."},

        {type: "fb", s: "A: Você {1} queijo de manhã? B: Sim, eu como. (eat, você form)", a: "come",
          sSrc: "A: Do you eat cheese in the morning? B: Yes, I do.",
          opts: ["come", "comer", "comendo", "comeu"],
          hint: "The você/ele/ela present form of comer."}
      ]
    }
  ]
};

export default UNIT_05;
