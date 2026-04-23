const UNIT_04 = {
  n: 4, lang: "pt", srcLang: "en", track: "v2",
  title: "O que você quer comer?",
  sub: "Food and Ordering",
  icon: "🍽️",
  level: "A1.2",
  color: "#7B5EE8",
  lessons: [
    {
      id: "ptv2_u4l1", title: "Eating and Drinking", icon: "🍴", xp: 15, board: true,
      steps: [
        {type: "intro", title: "Food basics", desc: "Learn the core verbs for eating and drinking, plus your first food and drink words.", goals: ["Say eat and drink", "Name basic foods", "Name basic drinks"]},

        {type: "teach", trg: "comer", src: "to eat", pos: "verb", gender: null,
          note: "A regular -er verb. Used for eating any food.",
          example: "A: Você quer comer?\nB: Sim, eu quero comer.",
          exampleSrc: "A: Do you want to eat?\nB: Yes, I want to eat.",
          funFact: "Comes from Latin comedere, which also gave English comestible."},

        {type: "teach", trg: "beber", src: "to drink", pos: "verb", gender: null,
          note: "A regular -er verb for drinking any liquid.",
          example: "A: Você quer beber algo?\nB: Eu quero beber água.",
          exampleSrc: "A: Do you want to drink something?\nB: I want to drink water.",
          funFact: "Brazilians often say tomar for drinking too, but beber is the standard verb."},

        {type: "mc", q: "Which verb means 'to eat'?",
          opts: ["beber", "ser", "comer", "ter"], ans: "comer",
          hint: "Think of the English word comestible."},

        {type: "teach", trg: "água", src: "water", pos: "noun", gender: "f",
          note: "Feminine noun. Use a água for the water.",
          example: "A: Eu quero água, por favor.\nB: Aqui está a água.",
          exampleSrc: "A: I want water, please.\nB: Here is the water.",
          funFact: "Brazilians often ask for água sem gás (still) or com gás (sparkling)."},

        {type: "teach", trg: "café", src: "coffee", pos: "noun", gender: "m",
          note: "Masculine noun. The accent shows the stress on the final syllable.",
          example: "A: Você quer café?\nB: Sim, eu quero um café.",
          exampleSrc: "A: Do you want coffee?\nB: Yes, I want a coffee.",
          funFact: "Brazil is the world's largest coffee producer. A small strong coffee is a cafezinho."},

        {type: "teach", trg: "chá", src: "tea", pos: "noun", gender: "m",
          note: "Masculine, despite ending in a stressed á.",
          example: "A: Eu quero chá, não café.\nB: Aqui está o chá.",
          exampleSrc: "A: I want tea, not coffee.\nB: Here is the tea.",
          funFact: "Borrowed from Chinese chá via trade routes, same origin as Russian chai."},

        {type: "teach", trg: "leite", src: "milk", pos: "noun", gender: "m",
          note: "Masculine noun. Used for cow's milk and other milks.",
          example: "A: Você quer leite no café?\nB: Sim, com leite, por favor.",
          exampleSrc: "A: Do you want milk in the coffee?\nB: Yes, with milk, please.",
          funFact: "From Latin lac, same root as English lactose."},

        {type: "teach", trg: "suco", src: "juice", pos: "noun", gender: "m",
          note: "Masculine noun. In Portugal the word is sumo.",
          example: "A: Eu quero um suco.\nB: Suco de laranja?",
          exampleSrc: "A: I want a juice.\nB: Orange juice?",
          funFact: "Brazil has a huge fresh juice culture. Sucos naturais are sold on every corner."},

        {type: "mc", q: "Which word means 'water'?",
          opts: ["leite", "café", "suco", "água"], ans: "água",
          hint: "Starts with a vowel and has an accent."},

        {type: "fb", s: "Eu quero um {1}, por favor.", a: "café",
          sSrc: "I want a coffee, please.",
          opts: ["café", "água", "chá", "leite"],
          hint: "Brazil's most famous hot drink."},

        {type: "match", title: "Match the drinks",
          pairs: [{trg: "água", src: "water"}, {trg: "leite", src: "milk"}, {trg: "suco", src: "juice"}, {trg: "chá", src: "tea"}]},

        {type: "mc", q: "Você quer ____ no café?",
          opts: ["água", "suco", "leite", "chá"], ans: "leite",
          hint: "The white liquid from cows."}
      ]
    },
    {
      id: "ptv2_u4l2", title: "Common Foods", icon: "🍚", xp: 15, board: true,
      steps: [
        {type: "intro", title: "Everyday Brazilian foods", desc: "Learn the staples of the Brazilian table.", goals: ["Name staple foods", "Talk about fruits and meats"]},

        {type: "teach", trg: "pão", src: "bread", pos: "noun", gender: "m",
          note: "Masculine. The tilde on ão gives a nasal sound.",
          example: "A: Você quer pão?\nB: Sim, com café.",
          exampleSrc: "A: Do you want bread?\nB: Yes, with coffee.",
          funFact: "Pão de queijo (cheese bread) is a classic Brazilian snack from Minas Gerais."},

        {type: "teach", trg: "arroz", src: "rice", pos: "noun", gender: "m",
          note: "Masculine noun. The z at the end sounds like s.",
          example: "A: Eu quero arroz.\nB: Arroz com feijão?",
          exampleSrc: "A: I want rice.\nB: Rice with beans?",
          funFact: "Arroz com feijão (rice and beans) is the daily staple in most Brazilian homes."},

        {type: "teach", trg: "feijão", src: "beans", pos: "noun", gender: "m",
          note: "Masculine. Singular in Portuguese even when English is plural.",
          example: "A: Você gosta de feijão?\nB: Sim, eu como feijão todo dia.",
          exampleSrc: "A: Do you like beans?\nB: Yes, I eat beans every day.",
          funFact: "Feijoada, the national dish, is a rich black bean stew with pork."},

        {type: "teach", trg: "carne", src: "meat", pos: "noun", gender: "f",
          note: "Feminine noun. Covers beef and meat in general.",
          example: "A: Você come carne?\nB: Sim, eu como carne.",
          exampleSrc: "A: Do you eat meat?\nB: Yes, I eat meat.",
          funFact: "A churrasco is a Brazilian barbecue, famous for skewered grilled meats."},

        {type: "teach", trg: "fruta", src: "fruit", pos: "noun", gender: "f",
          note: "Feminine. Often plural as frutas.",
          example: "A: Você quer fruta?\nB: Sim, uma fruta, por favor.",
          exampleSrc: "A: Do you want fruit?\nB: Yes, a fruit, please.",
          funFact: "Brazil has tropical fruits like açaí, cupuaçu, and jabuticaba found nowhere else."},

        {type: "teach", trg: "delicioso", src: "delicious", pos: "adj", gender: "m",
          note: "Masculine form. Feminine is deliciosa. Must agree with the noun.",
          example: "A: O pão está delicioso!\nB: A fruta também está deliciosa.",
          exampleSrc: "A: The bread is delicious!\nB: The fruit is also delicious.",
          funFact: "From Latin deliciosus. Use estar delicioso for food that is tasty right now."},

        {type: "mc", q: "Which food is the Brazilian daily staple with rice?",
          opts: ["pão", "carne", "feijão", "fruta"], ans: "feijão",
          hint: "Pairs with arroz at every meal."},

        {type: "fb", s: "Eu quero arroz com {1}.", a: "feijão",
          sSrc: "I want rice with beans.",
          opts: ["pão", "feijão", "carne", "fruta"],
          hint: "The classic pairing with rice in Brazil."},

        {type: "mc", q: "O ____ está delicioso. (the bread is delicious)",
          opts: ["carne", "fruta", "água", "pão"], ans: "pão",
          hint: "Bakery item, masculine, takes o."},

        {type: "match", title: "Match the foods",
          pairs: [{trg: "pão", src: "bread"}, {trg: "arroz", src: "rice"}, {trg: "carne", src: "meat"}, {trg: "fruta", src: "fruit"}]},

        {type: "fb", s: "A carne está {1}!", a: "deliciosa",
          sSrc: "The meat is delicious!",
          opts: ["delicioso", "deliciosa", "delicios", "delicias"],
          hint: "Carne is feminine, so the adjective must match."}
      ]
    },
    {
      id: "ptv2_u4l3", title: "Wanting and Ordering", icon: "🙋", xp: 15, board: true,
      steps: [
        {type: "intro", title: "Querer: to want", desc: "Learn to order food politely using querer.", goals: ["Conjugate querer", "Order with por favor", "Use pedir"]},

        {type: "teach", trg: "querer", src: "to want", pos: "verb", gender: null,
          note: "Irregular verb. The most common way to order or ask for things.",
          example: "A: O que você quer?\nB: Eu quero um café.",
          exampleSrc: "A: What do you want?\nB: I want a coffee.",
          funFact: "Querer also means 'to love' in some contexts. Eu te quero means I love you."},

        {type: "tip", title: "Querer conjugation",
          text: "Querer is irregular in the present tense.\neu quero (I want)\nvocê quer (you want)\nele/ela quer (he/she wants)",
          deepDive: "The stem changes from quer- to quer-o in the I form. It keeps the same stem for você, ele, and ela. This is the most useful verb for ordering food in any Brazilian restaurant or café."},

        {type: "mc", q: "Which form is correct for 'I want'?",
          opts: ["eu quer", "eu queres", "eu quero", "eu querer"], ans: "eu quero",
          hint: "The I form typically ends in o."},

        {type: "teach", trg: "por favor", src: "please", pos: "intj", gender: null,
          note: "Literally 'for favor'. Use at the end of any request.",
          example: "A: Um café, por favor.\nB: Aqui está.",
          exampleSrc: "A: A coffee, please.\nB: Here you are.",
          funFact: "Brazilians are warm and polite, and por favor softens any request."},

        {type: "teach", trg: "pedir", src: "to order", pos: "verb", gender: null,
          note: "To request or order something. Used in restaurants.",
          example: "A: O que você vai pedir?\nB: Eu vou pedir arroz com feijão.",
          exampleSrc: "A: What are you going to order?\nB: I am going to order rice and beans.",
          funFact: "From Latin petere, same root as English petition."},

        {type: "fb", s: "Eu {1} um café, por favor.", a: "quero",
          sSrc: "I want a coffee, please.",
          opts: ["quer", "quero", "querer", "queres"],
          hint: "The eu form of querer."},

        {type: "mc", q: "Você ____ comer agora? (do you want to eat now)",
          opts: ["quero", "quer", "querer", "queres"], ans: "quer",
          hint: "The você form of this verb drops the final -er and loses the plural ending."},

        {type: "fb", s: "Um suco, {1}.", a: "por favor",
          sSrc: "A juice, please.",
          opts: ["obrigado", "por favor", "oi", "sim"],
          hint: "Polite word that softens a request."},

        {type: "mc", q: "How do you order politely?",
          opts: ["Café!", "Café, por favor.", "Eu café.", "Café sim."], ans: "Café, por favor.",
          hint: "Include the politeness word."},

        {type: "match", title: "Match the phrases",
          pairs: [{trg: "eu quero", src: "I want"}, {trg: "você quer", src: "you want"}, {trg: "por favor", src: "please"}, {trg: "pedir", src: "to order"}]},

        {type: "fb", s: "Eu vou {1} feijoada.", a: "pedir",
          sSrc: "I am going to order feijoada.",
          opts: ["comer", "beber", "pedir", "querer"],
          hint: "The verb for ordering in a restaurant."},

        {type: "mc", q: "Ela ____ água, por favor.",
          opts: ["quero", "querer", "queres", "quer"], ans: "quer",
          hint: "Ela uses the same form as você."}
      ]
    },
    {
      id: "ptv2_u4l4", title: "At the Restaurant", icon: "🍛", xp: 15, board: true,
      steps: [
        {type: "intro", title: "Putting it all together", desc: "Combine food, drink, and ordering into real restaurant conversations.", goals: ["Order a full meal", "Compliment food", "Answer food questions"]},

        {type: "tip", title: "Ordering in Brazil",
          text: "In a restaurant, you can simply say:\nEu quero + food, por favor.\nOr: Um + food, por favor.",
          deepDive: "Brazilian servers are friendly and relaxed. A simple Eu quero um café, por favor is perfect. You can also add obrigado or obrigada after your order for extra warmth."},

        {type: "mc", q: "O que você quer beber?",
          opts: ["suco", "arroz", "pão", "carne"], ans: "suco",
          hint: "The question asks about drinking."},

        {type: "fb", s: "A: O que você quer comer? B: Eu quero {1} com feijão.", a: "arroz",
          sSrc: "A: What do you want to eat? B: I want rice with beans.",
          opts: ["arroz", "café", "suco", "chá"],
          hint: "The classic partner of feijão."},

        {type: "mc", q: "Which sentence orders water politely?",
          opts: ["Água!", "Água, por favor.", "Eu água.", "Querer água."], ans: "Água, por favor.",
          hint: "Include the polite phrase at the end."},

        {type: "fb", s: "A fruta está {1}.", a: "deliciosa",
          sSrc: "The fruit is delicious.",
          opts: ["delicioso", "deliciosa", "delicios", "delicias"],
          hint: "Fruta is feminine, so the adjective must match."},

        {type: "mc", q: "Select the definite article that matches masculine singular gender:",
          opts: ["a", "um", "o", "uma"], ans: "o",
          hint: "Masculine singular nouns use the shorter definite article. Pão (bread) is masculine."},

        {type: "tr", mk: "Eu quero água, por favor.", dir: "trg2src"},

        {type: "match", title: "Match orders",
          pairs: [{trg: "um café", src: "a coffee"}, {trg: "uma água", src: "a water"}, {trg: "um suco", src: "a juice"}, {trg: "um pão", src: "a bread"}]},

        {type: "fb", s: "Eu {1} pedir arroz com feijão.", a: "quero",
          sSrc: "I want to order rice and beans.",
          opts: ["quer", "quero", "pedir", "comer"],
          hint: "The eu form of querer."},

        {type: "mc", q: "Which answer is polite and correct?",
          opts: ["Carne.", "Eu carne.", "Querer carne.", "Uma carne, por favor."], ans: "Uma carne, por favor.",
          hint: "Include article and politeness."},

        {type: "tr", mk: "A comida está deliciosa!", dir: "trg2src"},

        {type: "fb", s: "Ela {1} chá, não café.", a: "quer",
          sSrc: "She wants tea, not coffee.",
          opts: ["quero", "quer", "querer", "queres"],
          hint: "Ela takes the same form as você."},

        {type: "mc", q: "Eu quero ____, por favor. (milk)",
          opts: ["leite", "suco", "água", "chá"], ans: "leite",
          hint: "White drink from cows."}
      ]
    }
  ]
};

export default UNIT_04;
