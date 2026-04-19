// PP63 Round 2 — A1 Vocabulary Gaps
// Closes flags: toilet, tas, vakantie, vlees, gras, hotel, kroeg, haast, hartelijk
const LESSON_PP63R2_A1 = {
  id:"nlv2_pp63r2_a1", title:"Dagelijks A1", icon:"\u{1F9E7}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Essential A1 Words",
     desc:"Nine everyday Dutch words that appear constantly in natural speech. These complete your core A1 vocabulary.",
     goals:["Learn 9 essential everyday nouns and adjectives","Build vocabulary for daily situations","Understand common A1 expressions"]},

    {type:"teach", trg:"het toilet", src:"the toilet / the restroom", pos:"noun", gender:"n",
     note:"Het-word. Also: 'het WC' (informal). 'Naar het toilet gaan' = to go to the bathroom.",
     example:"A: Waar is het toilet?\nB: Rechts de gang in, tweede deur links.",
     exampleSrc:"A: Where is the toilet?\nB: Right down the hall, second door on the left.",
     funFact:"The Dutch word 'toilet' comes from French 'toilette' (small cloth). Public toilets in the Netherlands are called 'openbaar toilet' and often cost 50 cents."},

    {type:"teach", trg:"de tas", src:"the bag / the purse", pos:"noun", gender:"c",
     note:"De-word. Plural: tassen. 'Schooltas' = school bag. 'Handtas' = handbag.",
     example:"A: Heb jij mijn tas gezien?\nB: Ja, hij ligt op de stoel.",
     exampleSrc:"A: Have you seen my bag?\nB: Yes, it is on the chair.",
     funFact:"The diminutive 'tasje' is very common. Dutch people often say 'even een tasje pakken' for a quick errand bag."},

    {type:"mc",
     q:"Ik ga naar ___. Ik kom zo terug.",
     opts:["het toilet","de tas","het gras","het hotel"],
     ans:"het toilet",
     hint:"Where do you go for a brief natural break? The room with the facilities."},

    {type:"teach", trg:"de vakantie", src:"the holiday / the vacation", pos:"noun", gender:"c",
     note:"De-word. Plural: vakanties. 'Op vakantie gaan' = to go on holiday. Very important in Dutch culture.",
     example:"A: Waar ga jij op vakantie?\nB: Naar Spanje. En jij?\nA: Ik blijf dit jaar thuis.",
     exampleSrc:"A: Where are you going on holiday?\nB: To Spain. And you?\nA: I'm staying home this year.",
     funFact:"The Dutch have some of the most vacation days in Europe. The 'zomervakantie' (summer holiday) typically lasts 6 weeks and is a national institution."},

    {type:"teach", trg:"het vlees", src:"the meat", pos:"noun", gender:"n",
     note:"Het-word. No article needed in general: 'Ik eet vlees' = I eat meat. Types: 'rundvlees' (beef), 'varkensvlees' (pork), 'kippenvlees' (chicken).",
     example:"A: Eet jij vlees?\nB: Nee, ik ben vegetarisch.\nA: Ik eet zelden vlees.",
     exampleSrc:"A: Do you eat meat?\nB: No, I'm vegetarian.\nA: I rarely eat meat.",
     funFact:"The Netherlands is one of the world's largest meat exporters. However, plant-based eating has grown enormously, and many Dutch people are 'flexitariërs'."},

    {type:"fb",
     s:"Ik eet zelden {1}. Ik ben bijna vegetarisch.",
     a:["vlees"],
     opts:["vlees","kaas","brood","groenten"],
     hint:"What animal product does a vegetarian not eat? Three letters in Dutch.",
     sSrc:"I rarely eat {1}. I am almost vegetarian."},

    {type:"teach", trg:"het gras", src:"the grass", pos:"noun", gender:"n",
     note:"Het-word. Plural: grassen (types of grass). 'Op het gras zitten' = to sit on the grass. 'Groen als gras' = as green as grass.",
     example:"A: Het gras is zo groen hier!\nB: Ja, we krijgen veel regen.\nA: Typisch Nederland.",
     exampleSrc:"A: The grass is so green here!\nB: Yes, we get a lot of rain.\nA: Typical Netherlands.",
     funFact:"The Netherlands is famous for its green, flat meadows (weilanden). The lush grass supports the world-famous Dutch dairy industry, including Gouda and Edam cheese."},

    {type:"teach", trg:"het hotel", src:"the hotel", pos:"noun", gender:"n",
     note:"Het-word. International cognate. Plural: hotels. 'In een hotel logeren' = to stay in a hotel.",
     example:"A: Heeft het hotel een zwembad?\nB: Ja, en ook een sauna.\nA: Geweldig!",
     exampleSrc:"A: Does the hotel have a swimming pool?\nB: Yes, and also a sauna.\nA: Wonderful!",
     funFact:"The Netherlands has over 3,000 hotels. The famous 'Hotel des Indes' in The Hague has hosted royalty since 1881. Amsterdam's canals make it a top hotel destination."},

    {type:"mc",
     q:"We slapen vannacht in een ___.",
     opts:["hotel","vakantie","gras","toilet"],
     ans:"hotel",
     hint:"Where do you sleep when traveling away from home? A building with rooms to rent overnight."},

    {type:"teach", trg:"de kroeg", src:"the pub / the bar", pos:"noun", gender:"c",
     note:"De-word. Plural: kroegen. Informal word for a bar or pub. The 'bruine kroeg' (brown café) is a Dutch institution.",
     example:"A: Gaan we na het werk naar de kroeg?\nB: Goed idee! Om zes uur?\nA: Ja, tot dan!",
     exampleSrc:"A: Are we going to the pub after work?\nB: Good idea! At six o'clock?\nA: Yes, see you then!",
     funFact:"The 'bruine kroeg' (brown café) is a traditional Dutch pub known for its dark wood interior and cozy atmosphere. Amsterdam has hundreds of them, many centuries old."},

    {type:"teach", trg:"de haast", src:"the hurry / the rush", pos:"noun", gender:"c",
     note:"De-word. 'Haast hebben' = to be in a hurry. 'Geen haast' = no rush. Very common expression.",
     example:"A: Ik heb haast! De trein gaat over vijf minuten!\nB: Schiet op!",
     exampleSrc:"A: I'm in a hurry! The train leaves in five minutes!\nB: Hurry up!",
     funFact:"The Dutch expression 'haast je langzaam' (hurry slowly) means 'slow down to do things right'. It captures a practical Dutch wisdom about not rushing into mistakes."},

    {type:"fb",
     s:"Sorry, ik heb {1}. Ik moet nu weg.",
     a:["haast"],
     opts:["haast","vakantie","vlees","gras"],
     hint:"What do you have when you need to leave quickly? A time pressure.",
     sSrc:"Sorry, I am in a {1}. I have to go now."},

    {type:"teach", trg:"hartelijk", src:"heartfelt / cordial / warm", pos:"adj", gender:null,
     note:"Adjective. 'Hartelijk welkom' = warm welcome. 'Hartelijk dank' = heartfelt thanks. Very common in formal and semi-formal Dutch.",
     example:"A: Hartelijk welkom in ons hotel!\nB: Dank u, we zijn blij hier te zijn.",
     exampleSrc:"A: A warm welcome to our hotel!\nB: Thank you, we are happy to be here.",
     funFact:"'Hartelijk dank' is one of the most common formal thanks in Dutch, used in letters, emails, and formal occasions. It literally means 'hearty thanks' from 'hart' (heart)."},

    {type:"match", pairs:[
      {trg:"het toilet", src:"the toilet"},
      {trg:"de tas", src:"the bag"},
      {trg:"de vakantie", src:"the holiday"},
      {trg:"het vlees", src:"the meat"},
      {trg:"het gras", src:"the grass"},
      {trg:"het hotel", src:"the hotel"},
      {trg:"de kroeg", src:"the pub"},
      {trg:"de haast", src:"the hurry"},
      {trg:"hartelijk", src:"heartfelt"}
    ]}
  ]
};
export default LESSON_PP63R2_A1;
