// PP63 Round 2 — B2 Vocabulary Gaps
// Closes flags: elite, diabetes, detox, mayo
const LESSON_PP63R2_B2 = {
  id:"nlv2_pp63r2_b2", title:"B2 Woordenschat Extra", icon:"\u{1F393}", xp:15, board:true,
  steps:[
    {type:"intro", title:"B2 Vocabulary Essentials",
     desc:"Four important Dutch words at B2 level that appear in modern contexts: health, food culture, society, and media.",
     goals:["Learn 4 key B2 vocabulary words","Understand contemporary Dutch usage","Practice in authentic contexts"]},

    {type:"teach", trg:"de elite", src:"the elite", pos:"noun", gender:"c",
     note:"De-word. Plural: elites. From French. 'De politieke elite' = the political elite. 'Eliteonderwijs' = elite education.",
     example:"A: Hij is kritisch over de politieke elite.\nB: Dat sentiment groeit in heel Europa.",
     exampleSrc:"A: He is critical of the political elite.\nB: That sentiment is growing across all of Europe.",
     funFact:"From French 'élite' (the chosen). In Dutch, 'elitedenken' (elite thinking) is often used critically, reflecting the Dutch egalitarian 'doe maar gewoon' (just act normal) culture."},

    {type:"teach", trg:"diabetes", src:"diabetes", pos:"noun", gender:"c",
     note:"De-word (when used with article: 'de diabetes'). Often used without article. International medical term. 'Suikerziekte' is the Dutch alternative.",
     example:"A: Mijn vader heeft diabetes type 2.\nB: Dat is erfelijk in onze familie.\nA: Gelukkig is het goed te behandelen.",
     exampleSrc:"A: My father has type 2 diabetes.\nB: That is hereditary in our family.\nA: Luckily it is treatable.",
     funFact:"The Dutch word 'suikerziekte' (sugar disease) literally describes diabetes. Both terms are used. The Netherlands has one of the best diabetes care systems in Europe through the 'ketenzorg' (integrated care) model."},

    {type:"mc",
     q:"Hij heeft ___ en moet elke dag insuline spuiten.",
     opts:["diabetes","de elite","een detox","mayo"],
     ans:"diabetes",
     hint:"Which medical condition requires insulin injections? A disease affecting blood sugar levels."},

    {type:"teach", trg:"de detox", src:"the detox / the cleanse", pos:"noun", gender:"c",
     note:"De-word. From English. 'Een digitale detox' = a digital detox. 'Detoxen' = to detox. Used for both body cleanses and digital breaks.",
     example:"A: Ik heb te veel stress. Ik wil een digitale detox doen.\nB: Dat is een goed idee. Even alles loslaten.",
     exampleSrc:"A: I have too much stress. I want to do a digital detox.\nB: That is a good idea. Letting go of everything for a while.",
     funFact:"'Digitale detox' retreats are popular in the Netherlands. Dutch research showed that office workers check their phones over 80 times a day, driving demand for structured tech breaks."},

    {type:"teach", trg:"de mayo", src:"the mayo / mayonnaise", pos:"noun", gender:"c",
     note:"De-word. Short for 'mayonaise'. Essential in Dutch food culture. 'Friet met mayo' = fries with mayo.",
     example:"A: Wil je mayo op je friet?\nB: Ja graag, heel lekker!\nA: Het is typisch Nederlands.",
     exampleSrc:"A: Do you want mayo on your fries?\nB: Yes please, very tasty!\nA: It is typically Dutch.",
     funFact:"The Dutch consume more mayonnaise per person than almost any other country. 'Friet speciaal' (special fries) comes with mayo, curry ketchup, and chopped onions. Heinz and Calvé are the top brands."},

    {type:"fb",
     s:"Een ___ doet goed na een drukke periode. Even alles loslaten.",
     a:["detox"],
     opts:["detox","elite","diabetes","mayo"],
     hint:"What word describes a cleanse or break to reset your mind and body? Often 'digitale ___'.",
     sSrc:"A {1} does good after a busy period. Letting go of everything for a while."},

    {type:"match", pairs:[
      {trg:"de elite", src:"the elite"},
      {trg:"diabetes", src:"diabetes"},
      {trg:"de detox", src:"the detox"},
      {trg:"de mayo", src:"the mayo"}
    ]}
  ]
};
export default LESSON_PP63R2_B2;
