// PP63 Round 2 — A2/B1 Vocabulary Gaps
// Closes flags: moskee, kans, pech, kunst, lastig, boete, beurs, campagne, motivatie, passie, effect, focus
const LESSON_PP63R2_B1 = {
  id:"nlv2_pp63r2_b1", title:"A2-B1 Kernwoorden", icon:"\u{1F4A1}", xp:15, board:true,
  steps:[
    {type:"intro", title:"A2-B1 Core Vocabulary",
     desc:"Twelve essential Dutch words at A2-B1 level. These appear in everyday conversation, news, and professional contexts.",
     goals:["Learn 12 key A2-B1 vocabulary words","Understand cultural and everyday usage","Practice in natural sentence contexts"]},

    {type:"teach", trg:"de moskee", src:"the mosque", pos:"noun", gender:"c",
     note:"De-word. Plural: moskeeën. Important word in multicultural Dutch society.",
     example:"A: Er staat een nieuwe moskee in onze wijk.\nB: Ja, die is vorig jaar geopend.",
     exampleSrc:"A: There is a new mosque in our neighborhood.\nB: Yes, that one opened last year.",
     funFact:"The Netherlands has about 500 mosques, reflecting the country's Moroccan and Turkish communities. The Blue Mosque in Gouda is one of the largest in Europe."},

    {type:"teach", trg:"de kans", src:"the chance / the opportunity", pos:"noun", gender:"c",
     note:"De-word. Plural: kansen. 'Een kans krijgen' = to get a chance. 'Kansen benutten' = to seize opportunities.",
     example:"A: Dit is een geweldige kans voor jou!\nB: Ik weet het, ik ga het proberen.",
     exampleSrc:"A: This is a great opportunity for you!\nB: I know, I will try it.",
     funFact:"'Kansen' (chances/opportunities) is central to Dutch culture. The famous Dutch directness often includes immediate statements about whether something is 'kansrijk' (promising) or 'kansloos' (hopeless)."},

    {type:"teach", trg:"de pech", src:"the bad luck / the misfortune", pos:"noun", gender:"c",
     note:"De-word. Informal. 'Pech hebben' = to have bad luck. 'Wat pech!' = What bad luck! 'Pech onderweg' = breakdown on the road.",
     example:"A: Ik heb mijn sleutels vergeten.\nB: Wat een pech! Heb je een reservesleutel?",
     exampleSrc:"A: I forgot my keys.\nB: What bad luck! Do you have a spare key?",
     funFact:"'Pech' also means a car breakdown. The ANWB (Dutch road assistance) is called when you have 'pech onderweg'. The word comes from German 'Pech' (pitch/tar), meaning bad luck stuck to you."},

    {type:"mc",
     q:"Ik heb de bus gemist. Wat ___!",
     opts:["een pech","een kans","een haast","een gras"],
     ans:"een pech",
     hint:"What Dutch word expresses bad luck or misfortune? Used in 'wat ___!' = what bad luck!"},

    {type:"teach", trg:"de kunst", src:"the art", pos:"noun", gender:"c",
     note:"De-word. 'Kunst en cultuur' = arts and culture. 'Beeldende kunst' = visual art. 'Dat is een kunst op zich' = that is an art in itself.",
     example:"A: Ik houd van moderne kunst.\nB: Welke kunstenaars vind je mooi?",
     exampleSrc:"A: I love modern art.\nB: Which artists do you like?",
     funFact:"The Netherlands has an extraordinary art heritage: Rembrandt, Vermeer, Van Gogh, Mondrian, and Escher are all Dutch. The Rijksmuseum in Amsterdam is one of the world's greatest art museums."},

    {type:"teach", trg:"lastig", src:"difficult / tricky / troublesome", pos:"adj", gender:null,
     note:"Adjective. More colloquial than 'moeilijk'. 'Dat is lastig' = that is tricky. 'Een lastige situatie' = a difficult situation.",
     example:"A: Is de opdracht moeilijk?\nB: Ja, best lastig. Maar ik krijg het wel voor elkaar.",
     exampleSrc:"A: Is the assignment difficult?\nB: Yes, pretty tricky. But I will manage it.",
     funFact:"'Lastig' vs 'moeilijk': 'moeilijk' is neutral difficulty, 'lastig' implies something annoying or complicated. A math problem is 'moeilijk'; a bureaucratic process is 'lastig'."},

    {type:"fb",
     s:"Dat formulier is heel {1} in te vullen.",
     a:["lastig"],
     opts:["lastig","hartelijk","vakantie","kroeg"],
     hint:"What adjective means difficult or tricky? More informal than 'moeilijk'.",
     sSrc:"That form is very {1} to fill in."},

    {type:"teach", trg:"de boete", src:"the fine / the penalty", pos:"noun", gender:"c",
     note:"De-word. Plural: boetes. 'Een boete krijgen' = to get a fine. 'Parkeerboete' = parking fine. 'Boete betalen' = to pay a fine.",
     example:"A: Ik heb een parkeerboete gekregen.\nB: Hoeveel moet je betalen?\nA: Zestig euro.",
     exampleSrc:"A: I got a parking fine.\nB: How much do you have to pay?\nA: Sixty euros.",
     funFact:"Dutch traffic fines are among the highest in Europe. Parking illegally in Amsterdam can cost 95 euros. Speed cameras (flitspalen) are everywhere on Dutch highways."},

    {type:"teach", trg:"de beurs", src:"the scholarship / the stock exchange / the fair", pos:"noun", gender:"c",
     note:"De-word. Three meanings: (1) scholarship grant, (2) stock exchange, (3) trade fair. Context decides.",
     example:"A: Heb jij een studiebeurs gekregen?\nB: Ja, ik heb een beurs van de universiteit.",
     exampleSrc:"A: Did you get a scholarship?\nB: Yes, I received a grant from the university.",
     funFact:"The Amsterdam Stock Exchange (AEX), founded in 1602 by the Dutch East India Company, was the world's first official stock exchange. 'Beurs' has retained all three meanings since the 17th century."},

    {type:"mc",
     q:"Ze werkt op de ___ in Amsterdam. Ze koopt en verkoopt aandelen.",
     opts:["beurs","boete","moskee","kunst"],
     ans:"beurs",
     hint:"Where do people trade stocks and shares? The financial marketplace. Three letters in Dutch."},

    {type:"teach", trg:"de campagne", src:"the campaign", pos:"noun", gender:"c",
     note:"De-word. Plural: campagnes. From French. 'Verkiezingscampagne' = election campaign. 'Reclamecampagne' = advertising campaign.",
     example:"A: De campagne voor de verkiezingen is begonnen.\nB: Ik zie overal posters en filmpjes.",
     exampleSrc:"A: The campaign for the elections has started.\nB: I see posters and videos everywhere.",
     funFact:"Dutch election campaigns are famously brief by American standards. Parliamentary elections typically have a campaign period of just a few weeks, with strict limits on campaign spending."},

    {type:"teach", trg:"de motivatie", src:"the motivation", pos:"noun", gender:"c",
     note:"De-word. Plural: motivaties. 'Motivatie brief' = motivation letter (required for jobs/universities). 'Intrinsieke motivatie' = intrinsic motivation.",
     example:"A: Wat is jouw motivatie om dit te leren?\nB: Ik wil in Nederland werken.",
     exampleSrc:"A: What is your motivation to learn this?\nB: I want to work in the Netherlands.",
     funFact:"Dutch job applications typically require a 'motivatiebrief' (motivation letter). It should explain WHY you want the specific job, not just what you can do. Vague letters are quickly rejected."},

    {type:"teach", trg:"de passie", src:"the passion", pos:"noun", gender:"c",
     note:"De-word. Plural: passies. From Latin 'passio'. 'Met passie werken' = to work with passion. Also: Passion of Christ in religious context.",
     example:"A: Schilderen is mijn grote passie.\nB: Dat zie je aan je werk. Het is prachtig!",
     exampleSrc:"A: Painting is my great passion.\nB: You can see that in your work. It is beautiful!",
     funFact:"Despite their practical reputation, the Dutch have enormous passion for specific pursuits. Football, cycling, art, and cheese are typical Dutch passions. The Ajax soccer club inspires near-religious devotion."},

    {type:"teach", trg:"het effect", src:"the effect", pos:"noun", gender:"n",
     note:"Het-word. Plural: effecten. International cognate. 'Effect hebben op' = to have an effect on. 'Bijwerking' = side effect (of medicine).",
     example:"A: Welk effect heeft dit op het milieu?\nB: Het vermindert CO2-uitstoot aanzienlijk.",
     exampleSrc:"A: What effect does this have on the environment?\nB: It reduces CO2 emissions significantly.",
     funFact:"Cognate with English, French, German. Used in the same international contexts: butterfly effect (vlindereffect), side effect (bijeffect), greenhouse effect (broeikaseffect)."},

    {type:"teach", trg:"de focus", src:"the focus", pos:"noun", gender:"c",
     note:"De-word. From English/Latin. 'Focus houden' = to keep focus. 'In focus zijn' = to be in focus. Used in business, photography, and daily speech.",
     example:"A: Ik verlies mijn focus als het te druk is.\nB: Probeer eens met koptelefoon te werken.",
     exampleSrc:"A: I lose my focus when it is too busy.\nB: Try working with headphones.",
     funFact:"From Latin 'focus' (fireplace/hearth). In Dutch business culture, 'focus' is a key buzzword. Companies talk about 'kerntaak' (core task) and 'focus houden op de klant' (keeping customer focus)."},

    {type:"fb",
     s:"Ze heeft veel {1} voor haar werk. Ze werkt heel hard.",
     a:["passie"],
     opts:["passie","boete","beurs","campagne"],
     hint:"What word describes intense enthusiasm or love for what you do? Strong internal drive.",
     sSrc:"She has a lot of {1} for her work. She works very hard."},

    {type:"match", pairs:[
      {trg:"de moskee", src:"the mosque"},
      {trg:"de kans", src:"the chance"},
      {trg:"de pech", src:"the bad luck"},
      {trg:"de kunst", src:"the art"},
      {trg:"lastig", src:"difficult"},
      {trg:"de boete", src:"the fine"},
      {trg:"de beurs", src:"the scholarship"},
      {trg:"de campagne", src:"the campaign"},
      {trg:"de motivatie", src:"the motivation"},
      {trg:"de passie", src:"the passion"},
      {trg:"het effect", src:"the effect"},
      {trg:"de focus", src:"the focus"}
    ]}
  ]
};
export default LESSON_PP63R2_B1;
