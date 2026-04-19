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
          hint: "Every afternoon, without fail."},
{type:"match", pairs:[
  {trg:"quanto", src:"how much"}
]}
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
    }
  ]
};

export default UNIT_05;
