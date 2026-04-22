// L03: Food and Drink, 20 A1 gap words
const LESSON_3 = {
  id:"nlv2_a1gap_l3", title:"Eten en Drinken", icon:"\u{1F35E}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Food and Drink",
     desc:"Learn essential Dutch food and drink vocabulary. From bread and cheese to coffee and beer.",
     goals:["Master 20 food and drink words","Know de/het for common food nouns","Order food and drink in Dutch"]},

    {type:"teach", trg:"de aardappel", src:"the potato", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: aardappelen or aardappels.",
     example:"A: Wil je aardappelen bij het eten?\nB: Ja, lekker!",
     exampleSrc:"A: Do you want potatoes with dinner?\nB: Yes, delicious!",
     funFact:"Literally 'earth apple'. Dutch and French (pomme de terre) both call it that."},

    {type:"teach", trg:"de aardbei", src:"the strawberry", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: aardbeien.",
     example:"A: Wil je aardbeien?\nB: Ja, met slagroom!",
     exampleSrc:"A: Do you want strawberries?\nB: Yes, with whipped cream!",
     funFact:"Literally 'earth berry'. Grows close to the earth. Cognate with German 'Erdbeere'."},

    {type:"teach", trg:"de appel", src:"the apple", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: appels.",
     example:"A: Wil je een appel?\nB: Ja, graag. Ik houd van appels.",
     exampleSrc:"A: Do you want an apple?\nB: Yes, please. I love apples.",
     funFact:"Almost identical to English 'apple' and German 'Apfel'. Proto-Germanic root."},

    {type:"teach", trg:"de banaan", src:"the banana", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: bananen.",
     example:"A: Er zijn geen bananen meer.\nB: Dan neem ik een appel.",
     exampleSrc:"A: There are no more bananas.\nB: Then I'll take an apple.",
     funFact:"International word. Originally from West African languages via Portuguese."},

    {type:"mc",
     q:"Welk fruit groeit dicht bij de grond?",
     opts:["de aardbei","de banaan","de appel","de sinaasappel"],
     ans:"de aardbei",
     hint:"Think about the literal meaning: 'earth berry'. Which fruit grows low?"},

    {type:"teach", trg:"de boterham", src:"the sandwich / slice of bread", pos:"noun", gender:"c",
     note:"Common gender (de). The Dutch staple lunch.",
     example:"A: Wat eet je voor de lunch?\nB: Een boterham met kaas.",
     exampleSrc:"A: What are you having for lunch?\nB: A sandwich with cheese.",
     funFact:"Literally 'butter ham'. The default Dutch lunch is a boterham with toppings."},

    {type:"teach", trg:"het brood", src:"the bread", pos:"noun", gender:"n",
     note:"Neuter noun (het). The basis of Dutch meals.",
     example:"A: We hebben geen brood meer.\nB: Dan ga ik naar de bakker.",
     exampleSrc:"A: We have no more bread.\nB: Then I'll go to the bakery.",
     funFact:"Cognate with English 'bread'. The Dutch eat bread for breakfast AND lunch."},

    {type:"teach", trg:"het ei", src:"the egg", pos:"noun", gender:"n",
     note:"Neuter noun (het). Plural: eieren.",
     example:"A: Wil je een ei bij het ontbijt?\nB: Ja, een gekookt ei graag.",
     exampleSrc:"A: Do you want an egg for breakfast?\nB: Yes, a boiled egg please.",
     funFact:"Cognate with English 'egg'. Short and sweet, like the word itself."},

    {type:"teach", trg:"de groente", src:"the vegetable(s)", pos:"noun", gender:"c",
     note:"Common gender (de). Often used as uncountable.",
     example:"A: Eet je genoeg groente?\nB: Ja, elke dag!",
     exampleSrc:"A: Do you eat enough vegetables?\nB: Yes, every day!",
     funFact:"Related to 'groen' (green). Vegetables = 'the green stuff'."},

    {type:"teach", trg:"het fruit", src:"the fruit", pos:"noun", gender:"n",
     note:"Neuter noun (het). Uncountable, like in English.",
     example:"A: Eet je veel fruit?\nB: Ja, ik eet elke dag een appel.",
     exampleSrc:"A: Do you eat a lot of fruit?\nB: Yes, I eat an apple every day.",
     funFact:"From French. Both Dutch and English borrowed it from the same source."},

    {type:"fb",
     s:"Ik eet elke dag {1} en groente.",
     a:["fruit"],
     opts:["fruit","brood","kaas","melk"],
     hint:"What food group pairs naturally with vegetables for a healthy diet?",
     sSrc:"I eat {1} and vegetables every day."},

    {type:"teach", trg:"de kaas", src:"the cheese", pos:"noun", gender:"c",
     note:"Common gender (de). The Netherlands is famous for cheese.",
     example:"A: Wil je kaas op je boterham?\nB: Ja, Goudse kaas graag!",
     exampleSrc:"A: Do you want cheese on your sandwich?\nB: Yes, Gouda cheese please!",
     funFact:"The Netherlands exports more cheese than any other country. Gouda and Edam are Dutch cities."},

    {type:"teach", trg:"de komkommer", src:"the cucumber", pos:"noun", gender:"c",
     note:"Common gender (de). Common salad ingredient.",
     example:"A: Doe je komkommer in de salade?\nB: Ja, en ook tomaat.",
     exampleSrc:"A: Do you put cucumber in the salad?\nB: Yes, and also tomato.",
     funFact:"From Latin 'cucumis'. The Dutch word sounds like 'come-come-er'."},

    {type:"teach", trg:"de koek", src:"the cookie / cake", pos:"noun", gender:"c",
     note:"Common gender (de). Generic word for baked sweet treats.",
     example:"A: Wil je een koekje bij de koffie?\nB: Ja, lekker!",
     exampleSrc:"A: Do you want a cookie with your coffee?\nB: Yes, delicious!",
     funFact:"Related to English 'cake' and German 'Kuchen'. All from the same root."},

    {type:"teach", trg:"de chocola", src:"the chocolate", pos:"noun", gender:"c",
     note:"Common gender (de). Also spelled 'chocolade'.",
     example:"A: Ik houd van chocola.\nB: Ik ook! Vooral puur.",
     exampleSrc:"A: I love chocolate.\nB: Me too! Especially dark.",
     funFact:"The Netherlands has the highest chocolate consumption per person in Europe."},

    {type:"mc",
     q:"Wat eet je op een boterham?",
     opts:["groente","kaas","soep","fruit"],
     ans:"kaas",
     hint:"Think about the classic Dutch lunch. What goes on a slice of bread?"},

    {type:"teach", trg:"de melk", src:"the milk", pos:"noun", gender:"c",
     note:"Common gender (de). Dairy is huge in the Netherlands.",
     example:"A: Drink je melk?\nB: Ja, elke ochtend een glas.",
     exampleSrc:"A: Do you drink milk?\nB: Yes, a glass every morning.",
     funFact:"Cognate with English 'milk'. Dutch dairy farming goes back thousands of years."},

    {type:"teach", trg:"de koffie", src:"the coffee", pos:"noun", gender:"c",
     note:"Common gender (de). The Dutch national drink.",
     example:"A: Wil je koffie?\nB: Ja graag, zwart alsjeblieft.",
     exampleSrc:"A: Do you want coffee?\nB: Yes please, black please.",
     funFact:"The Dutch were major coffee traders. 'Koffie' time is a real social tradition."},

    {type:"teach", trg:"het bier", src:"the beer", pos:"noun", gender:"n",
     note:"Neuter noun (het). Heineken is the most famous Dutch beer brand.",
     example:"A: Wil je een biertje?\nB: Ja, lekker! Een pilsje graag.",
     exampleSrc:"A: Do you want a beer?\nB: Yes, nice! A pilsner please.",
     funFact:"Heineken, Amstel, Grolsch are all Dutch. The Netherlands is a beer country."},

    {type:"teach", trg:"de cola", src:"the cola", pos:"noun", gender:"c",
     note:"Common gender (de). Same international word.",
     example:"A: Wil je cola of sap?\nB: Cola graag.",
     exampleSrc:"A: Do you want cola or juice?\nB: Cola please.",
     funFact:"International word. The Dutch pronounce it 'koh-lah'."},

    {type:"teach", trg:"de frisdrank", src:"the soft drink", pos:"noun", gender:"c",
     note:"Common gender (de). Compound: fris (fresh) + drank (drink).",
     example:"A: Hebben jullie frisdrank?\nB: Ja, cola en sinas.",
     exampleSrc:"A: Do you have soft drinks?\nB: Yes, cola and orange soda.",
     funFact:"Literally 'fresh drink'. Dutch uses this generic term for all sodas."},

    {type:"match", pairs:[
      {trg:"aardappel", src:"potato"},
      {trg:"boterham", src:"sandwich"},
      {trg:"frisdrank", src:"soft drink"},
      {trg:"ei", src:"egg"}
    ]}
  ]
};
export default LESSON_3;
