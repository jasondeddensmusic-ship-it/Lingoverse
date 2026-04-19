const UNIT_06 = {
  n: 6, lang: "pt", srcLang: "en", track: "v2",
  title: "Onde você vai?",
  sub: "Places and Getting Around",
  icon: "🗺️",
  level: "A1.2",
  color: "#7B5EE8",
  lessons: [
    {
      id: "ptv2_u6l1", title: "Here and There", icon: "📍", xp: 15, board: true,
      steps: [
        {type: "intro", title: "Locations", desc: "Learn to ask where, and say here and there.", goals: ["Ask onde", "Point out locations", "Use aqui, ali, lá"]},

        {type: "teach", trg: "onde", src: "where", pos: "pron", gender: null,
          note: "Question word for location. Pronounced OHN-gee.",
          example: "A: Onde você está?\nB: Eu estou aqui!",
          exampleSrc: "A: Where are you?\nB: I am here!",
          funFact: "From Latin unde (whence). Brazilians often stretch it: onnnnde?"},

        {type: "teach", trg: "aqui", src: "here", pos: "adv", gender: null,
          note: "Adverb for the speaker's location.",
          example: "A: Onde está o café?\nB: Aqui!",
          exampleSrc: "A: Where is the coffee?\nB: Here!",
          funFact: "From Latin eccum hic (behold here). Used with a gesture for clarity."},

        {type: "teach", trg: "ali", src: "there", pos: "adv", gender: null,
          note: "There (nearby or visible). Close but not right here.",
          example: "A: Onde está a fruta?\nB: Ali, na mesa.",
          exampleSrc: "A: Where is the fruit?\nB: There, on the table.",
          funFact: "Used when you can point to the spot. For farther away, use lá."},

        {type: "teach", trg: "lá", src: "there (far)", pos: "adv", gender: null,
          note: "There (far away). More distant than ali.",
          example: "A: Onde ele está?\nB: Ele está lá, em casa.",
          exampleSrc: "A: Where is he?\nB: He is there, at home.",
          funFact: "Brazilians say lá when the place is far or out of sight."},

        {type: "tip", title: "Question Words: que, quem, onde, quando",
          text: "Portuguese information questions start with a question word:\n\nonde = where (location)\nquem = who (person)\nquando = when (time)\no que / que = what (thing)\npor que = why (reason)\ncomo = how (manner)\nqual / quais = which (selection)\nquanto / quanta = how much\nquantos / quantas = how many\n\nYes-or-no questions use the same word order as statements. Only the rising intonation signals a question.\nVocê fala inglês? = Do you speak English?\n\nIn spoken Brazilian Portuguese you often hear: O que é que você quer? (What is it that you want?). This cleft-question pattern is very common.",
          icon: "❓",
          deepDive: {title: "Intonation Questions", text: "Brazilian Portuguese yes-no questions usually have rising intonation at the end. The verb does not invert, unlike in Spanish. You can also add né? (right?) or não é? at the end to soften a statement into a question: É brasileiro, né? (You are Brazilian, aren't you?). This tag is the most common softener in casual speech."}},
        {type: "mc", q: "Which word asks 'where'?",
          opts: ["onde", "aqui", "ali", "lá"], ans: "onde",
          hint: "The question word for location."},

        {type: "fb", s: "{1} você está? (asking location)", a: "Onde",
          sSrc: "Where are you?",
          opts: ["Onde", "Aqui", "Ali", "Lá"],
          hint: "Question word for places."},

        {type: "mc", q: "The word for 'here' is:",
          opts: ["lá", "ali", "aqui", "onde"], ans: "aqui",
          hint: "The speaker's own spot."},

        {type: "match", title: "Match location words",
          pairs: [{trg: "onde", src: "where"}, {trg: "aqui", src: "here"}, {trg: "ali", src: "there"}, {trg: "lá", src: "there (far)"}]},

        {type: "fb", s: "A: Onde está a água? B: {1}, na mesa.", a: "Ali",
          sSrc: "A: Where is the water? B: There, on the table.",
          opts: ["Aqui", "Ali", "Onde", "Lá"],
          hint: "Nearby, visible, something you can point to."},

        {type: "mc", q: "Ele está ____, muito longe daqui.",
          opts: ["aqui", "ali", "lá", "onde"], ans: "lá",
          hint: "Far away, used with longe."},

        {type: "tr", mk: "Onde você está agora?", dir: "trg2src"}
      ]
    },
    {
      id: "ptv2_u6l2", title: "Places in Town", icon: "🏠", xp: 15, board: true,
      steps: [
        {type: "intro", title: "Everyday places", desc: "Learn the most important places you go every day.", goals: ["Name daily places", "Talk about home and work", "Match gender and article"]},

        {type: "teach", trg: "casa", src: "house/home", pos: "noun", gender: "f",
          note: "Feminine. Means both house and home. No article needed in em casa (at home).",
          example: "A: Onde você está?\nB: Eu estou em casa.",
          exampleSrc: "A: Where are you?\nB: I am at home.",
          funFact: "From Latin casa (hut, cottage). Em casa drops the article, just like English at home."},

        {type: "teach", trg: "escola", src: "school", pos: "noun", gender: "f",
          note: "Feminine. Use a escola for the school.",
          example: "A: A escola é perto?\nB: Não, a escola é longe.",
          exampleSrc: "A: Is the school near?\nB: No, the school is far.",
          funFact: "From Greek skhole via Latin. Same root as English scholar."},

        {type: "teach", trg: "trabalho", src: "work", pos: "noun", gender: "m",
          note: "Masculine. Also the place of work.",
          example: "A: Onde você vai?\nB: Eu vou para o trabalho.",
          exampleSrc: "A: Where are you going?\nB: I am going to work.",
          funFact: "From Latin tripalium (a three-pronged torture tool). Work felt hard even to Romans."},

        {type: "teach", trg: "loja", src: "shop", pos: "noun", gender: "f",
          note: "Feminine. General word for shop or store.",
          example: "A: A loja é aqui?\nB: Não, a loja é ali.",
          exampleSrc: "A: Is the shop here?\nB: No, the shop is there.",
          funFact: "From French loge. A loja de roupas is a clothing store."},

        {type: "teach", trg: "restaurante", src: "restaurant", pos: "noun", gender: "m",
          note: "Masculine noun, despite ending in -e. Almost the same as English.",
          example: "A: O restaurante é bom?\nB: Sim, muito bom!",
          exampleSrc: "A: Is the restaurant good?\nB: Yes, very good!",
          funFact: "Borrowed from French restaurant (place that restores you with food)."},

        {type: "mc", q: "Which word is feminine?",
          opts: ["trabalho", "restaurante", "escola", "café"], ans: "escola",
          hint: "Takes the article a, and is where kids study."},

        {type: "fb", s: "A: Onde você vai? B: Eu vou para o {1}. (workplace)", a: "trabalho",
          sSrc: "A: Where are you going? B: I am going to work.",
          opts: ["casa", "escola", "trabalho", "loja"],
          hint: "Masculine noun for your job's place."},

        {type: "mc", q: "Eu estou em ____. (at home)",
          opts: ["casa", "escola", "loja", "trabalho"], ans: "casa",
          hint: "In the phrase em ___ meaning at home."},

        {type: "match", title: "Match places",
          pairs: [{trg: "casa", src: "house/home"}, {trg: "escola", src: "school"}, {trg: "trabalho", src: "work"}, {trg: "restaurante", src: "restaurant"}]},

        {type: "fb", s: "A {1} é aqui. (the shop)", a: "loja",
          sSrc: "The shop is here.",
          opts: ["casa", "loja", "escola", "trabalho"],
          hint: "Feminine place where you buy things."},

        {type: "mc", q: "Eu quero comer no ____. (at the restaurant)",
          opts: ["casa", "escola", "restaurante", "loja"], ans: "restaurante",
          hint: "Masculine place where you eat out."},

        {type: "tr", mk: "A escola é longe.", dir: "trg2src"}
      ]
    },
    {
      id: "ptv2_u6l3", title: "Coming and Going", icon: "🚶", xp: 15, board: true,
      steps: [
        {type: "intro", title: "Movement verbs", desc: "Learn ir, vir, and voltar, plus em and its contractions.", goals: ["Conjugate ir and vir", "Use contractions no, na", "Talk about returning"]},

        {type: "teach", trg: "ir", src: "to go", pos: "verb", gender: null,
          note: "Irregular verb. One of the most useful verbs in Portuguese.",
          example: "A: Onde você vai?\nB: Eu vou para casa.",
          exampleSrc: "A: Where are you going?\nB: I am going home.",
          funFact: "Ir is highly irregular. Present forms: eu vou, você vai, ele/ela vai."},

        {type: "tip", title: "Ir conjugation",
          text: "Present tense forms:\neu vou (I go)\nvocê vai (you go)\nele/ela vai (he/she goes)",
          deepDive: "Ir is irregular and does not follow its infinitive pattern. Just memorize these three forms. It is also used for the near future: Eu vou comer means I am going to eat."},

        {type: "teach", trg: "vir", src: "to come", pos: "verb", gender: null,
          note: "Irregular. Eu venho, você vem, ele/ela vem.",
          example: "A: Você vem amanhã?\nB: Sim, eu venho amanhã.",
          exampleSrc: "A: Are you coming tomorrow?\nB: Yes, I am coming tomorrow.",
          funFact: "From Latin venire, same root as English advent, convene."},

        {type: "teach", trg: "voltar", src: "to return", pos: "verb", gender: null,
          note: "Regular -ar verb. Eu volto, você volta, ele/ela volta.",
          example: "A: Quando você volta?\nB: Eu volto amanhã.",
          exampleSrc: "A: When do you return?\nB: I return tomorrow.",
          funFact: "From Latin voltare (to turn). Same root as English volt and revolve."},

        {type: "mc", q: "Which form means 'I go'?",
          opts: ["eu vai", "eu vou", "eu venho", "eu volto"], ans: "eu vou",
          hint: "The eu form of ir."},

        {type: "teach", trg: "em", src: "in/at", pos: "prep", gender: null,
          note: "Preposition for location. Contracts with o to form no, and with a to form na.",
          example: "A: Onde você está?\nB: Eu estou em casa.",
          exampleSrc: "A: Where are you?\nB: I am at home.",
          funFact: "From Latin in. With em casa there is no contraction because casa takes no article here."},

        {type: "tip", title: "Contractions no and na",
          text: "em + o = no (masculine)\nem + a = na (feminine)\nno trabalho (at work)\nna escola (at school)",
          deepDive: "Portuguese always contracts em with the articles o and a. You cannot say em o or em a. Always use no or na. Examples: no restaurante, na loja, no café, na casa dela."},
        {type: "tip", title: "All Portuguese Contractions: do, da, ao, pelo",
          text: "Portuguese contractions are MANDATORY. Four prepositions contract with articles:\n\nDE + o/a/os/as = do / da / dos / das\nEm sala do professor. (in the teacher's room.)\n\nEM + o/a/os/as = no / na / nos / nas\nEstou no trabalho. (I am at work.)\n\nA + o/a/os/as = ao / à / aos / às\nVou ao mercado. (I go to the market.)\nVou à praia. (I go to the beach.) — note the grave accent on à\n\nPOR + o/a/os/as = pelo / pela / pelos / pelas\nPassei pelo parque. (I went through the park.)\n\nThe grave accent in à marks the fusion of a (preposition) + a (feminine article). It is the only contracted form with an accent.",
          icon: "🔗",
          deepDive: {title: "Why Contractions Are Mandatory", text: "Unlike Spanish (which only has al and del), Portuguese contracts all four main prepositions. Saying 'de o' or 'em a' is a grammatical error, not a stylistic choice. New learners often forget the contraction when they see a preposition plus an article separately. The fix: any time de, em, a, or por appears before o or a, they must merge. No exceptions."}},

        {type: "fb", s: "Eu estou {1} escola. (at the school)", a: "na",
          sSrc: "I am at the school.",
          opts: ["no", "na", "em", "o"],
          hint: "Escola is feminine, so em + a contracts to..."},

        {type: "fb", s: "Ele está {1} trabalho. (at work)", a: "no",
          sSrc: "He is at work.",
          opts: ["no", "na", "em", "a"],
          hint: "Trabalho is masculine, so em + o contracts to..."},

        {type: "mc", q: "Eu ____ para casa agora.",
          opts: ["vai", "vou", "venho", "volto"], ans: "vou",
          hint: "The eu form of ir."},

        {type: "mc", q: "Você ____ amanhã? (come here)",
          opts: ["vai", "vou", "vem", "volto"], ans: "vem",
          hint: "The você form of vir."},

        {type: "fb", s: "A: Quando você {1}? B: Amanhã.", a: "volta",
          sSrc: "A: When do you return? B: Tomorrow.",
          opts: ["volto", "volta", "voltar", "vem"],
          hint: "The você form of voltar."},

        {type: "match", title: "Match movement words",
          pairs: [{trg: "ir", src: "to go"}, {trg: "vir", src: "to come"}, {trg: "voltar", src: "to return"}, {trg: "em", src: "in/at"}]},

        {type: "mc", q: "Ela vai ____ restaurante.",
          opts: ["no", "na", "em", "a"], ans: "no",
          hint: "Restaurante is masculine."},

        {type: "tr", mk: "Eu vou para o trabalho agora.", dir: "trg2src"}
      ]
    },
    {
      id: "ptv2_u6l4", title: "Directions and Distance", icon: "➡️", xp: 15, board: true,
      steps: [
        {type: "intro", title: "Left, right, near, far", desc: "Learn to give simple directions and describe distance.", goals: ["Say left and right", "Say near and far", "Give basic directions"]},

        {type: "teach", trg: "esquerda", src: "left", pos: "noun", gender: "f",
          note: "Feminine noun. Often used as à esquerda (to the left).",
          example: "A: Onde está a loja?\nB: À esquerda.",
          exampleSrc: "A: Where is the shop?\nB: To the left.",
          funFact: "From Basque ezker, adopted into Portuguese and Spanish."},

        {type: "teach", trg: "direita", src: "right", pos: "noun", gender: "f",
          note: "Feminine. Often used as à direita (to the right).",
          example: "A: A escola é à direita?\nB: Sim, à direita.",
          exampleSrc: "A: Is the school to the right?\nB: Yes, to the right.",
          funFact: "From Latin directa (straight). Right hand was considered the straight hand."},

        {type: "teach", trg: "perto", src: "near", pos: "adv", gender: null,
          note: "Adverb. Often used with de: perto de (near to).",
          example: "A: O restaurante é perto?\nB: Sim, muito perto.",
          exampleSrc: "A: Is the restaurant near?\nB: Yes, very near.",
          funFact: "From Latin per tectum (through, close). Brazilians say bem perto for very near."},

        {type: "teach", trg: "longe", src: "far", pos: "adv", gender: null,
          note: "Adverb. Opposite of perto.",
          example: "A: A escola é longe?\nB: Não, não é longe.",
          exampleSrc: "A: Is the school far?\nB: No, it is not far.",
          funFact: "From Latin longe. Brazilians say longe pra caramba for really far."},

        {type: "mc", q: "Which word means 'left'?",
          opts: ["direita", "esquerda", "perto", "longe"], ans: "esquerda",
          hint: "The opposite of right."},

        {type: "mc", q: "Which word means 'near'?",
          opts: ["longe", "perto", "aqui", "ali"], ans: "perto",
          hint: "Opposite of far."},

        {type: "fb", s: "O restaurante é à {1}. (to the right)", a: "direita",
          sSrc: "The restaurant is to the right.",
          opts: ["esquerda", "direita", "perto", "longe"],
          hint: "Opposite of left."},

        {type: "fb", s: "A casa dela é {1}, não é aqui. (distant)", a: "longe",
          sSrc: "Her house is far, it is not here.",
          opts: ["perto", "longe", "aqui", "ali"],
          hint: "Opposite of near."},

        {type: "match", title: "Match directions and distance",
          pairs: [{trg: "esquerda", src: "left"}, {trg: "direita", src: "right"}, {trg: "perto", src: "near"}, {trg: "longe", src: "far"}]},

        {type: "mc", q: "A loja é ____, bem aqui. (nearby)",
          opts: ["longe", "perto", "ali", "lá"], ans: "perto",
          hint: "Very close to where you are."},

        {type: "tip", title: "Giving directions",
          text: "Common direction phrases:\nÀ esquerda. (to the left)\nÀ direita. (to the right)\nÉ perto. (it is near)\nÉ longe. (it is far)",
          deepDive: "The à in à esquerda and à direita is a contraction of the preposition a (to) with the article a. Brazilians often just say Esquerda or Direita with a gesture. Perto de casa means near home, longe da escola means far from school."},

        {type: "fb", s: "A escola é {1} de casa. (near)", a: "perto",
          sSrc: "The school is near home.",
          opts: ["perto", "longe", "esquerda", "direita"],
          hint: "Opposite of far, with de."},

        {type: "mc", q: "Eu vou à ____, não à direita.",
          opts: ["perto", "longe", "esquerda", "casa"], ans: "esquerda",
          hint: "Opposite direction to right."},

        {type: "tr", mk: "O restaurante é perto, à direita.", dir: "trg2src"},

        {type: "fb", s: "A loja não é aqui, é {1}. (far away)", a: "longe",
          sSrc: "The shop is not here, it is far.",
          opts: ["perto", "longe", "aqui", "ali"],
          hint: "Distant, not nearby."},

        {type: "mc", q: "Você vai à esquerda ou à ____?",
          opts: ["perto", "direita", "longe", "casa"], ans: "direita",
          hint: "The option opposite to esquerda."}
      ]
    }
  ]
};

export default UNIT_06;
