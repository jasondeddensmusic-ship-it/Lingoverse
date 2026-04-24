// L16: Happiness, Pleasure, and Wellbeing
const LESSON_16 = {
  id:"nlv2_b2g6_l16", title:"Geluk en Welbevinden", icon:"\uD83D\uDE0A", xp:15, board:true,
  steps:[
    {type:"intro", title:"Happiness, Pleasure, and Wellbeing",
     desc:"Dive into the Dutch vocabulary of happiness and pleasure. The Netherlands consistently ranks among the world's happiest countries, and the language reflects this focus on wellbeing.",
     goals:["Learn 10 words about happiness and pleasure","Discuss the Dutch concept of wellbeing","Use abstract emotional vocabulary"]},

    {type:"teach", trg:"het geluksonderzoek", src:"the happiness research", pos:"noun", gender:"n",
     note:"Compound: geluk (happiness) + onderzoek (research).\nAcademic study of what makes people happy.",
     example:"A: Volgens geluksonderzoek zijn Nederlanders heel gelukkig.\nB: Waarom?\nA: Goede gezondheidszorg en veel vrijheid.\nB: En ook de balans tussen werk en thuis.",
     exampleSrc:"A: According to happiness research, Dutch people are very happy.\nB: Why?\nA: Good healthcare and a lot of freedom.\nB: And also the balance between work and home.",
     funFact:"The World Happiness Report consistently places the Netherlands in the top 5. Dutch children are the happiest in the world according to UNICEF."},

    {type:"teach", trg:"het geluksverschil", src:"the happiness gap, the difference in happiness", pos:"noun", gender:"n",
     note:"Compound: geluk (happiness) + verschil (difference).\nThe gap in wellbeing between groups.",
     example:"A: Het geluksverschil tussen arm en rijk groeit.\nB: Dat is zorgwekkend.\nA: Ongelijkheid heeft invloed op geluk.\nB: We moeten daar iets aan doen.",
     exampleSrc:"A: The happiness gap between poor and rich is growing.\nB: That is worrying.\nA: Inequality affects happiness.\nB: We need to do something about that.",
     funFact:"Dutch professor Ruut Veenhoven at Erasmus University runs the World Database of Happiness, the largest collection of happiness research."},

    {type:"teach", trg:"de genotswaarde", src:"the pleasure value, the enjoyment value", pos:"noun", gender:"c",
     note:"Compound: genot (pleasure) + waarde (value).\nHow much enjoyment something provides.",
     example:"A: De genotswaarde van een goed boek is hoog.\nB: Hoger dan televisie?\nA: Voor mij wel, ja.\nB: Iedereen vindt genot in andere dingen.",
     exampleSrc:"A: The pleasure value of a good book is high.\nB: Higher than television?\nA: For me, yes.\nB: Everyone finds pleasure in different things.",
     funFact:"The Dutch concept of 'gezelligheid' (coziness, togetherness) is considered to have the highest genotswaarde in Dutch culture."},

    {type:"teach", trg:"gemankeerd", src:"failed, frustrated (in one's ambitions)", pos:"adj", gender:null,
     note:"From French 'manquer' (to miss, to fail).\nDescribes someone who failed to achieve their calling.",
     example:"A: Hij is een gemankeerd kunstenaar.\nB: Wat doet hij nu?\nA: Hij werkt op een kantoor.\nB: Maar hij schildert nog in zijn vrije tijd.",
     exampleSrc:"A: He is a frustrated artist.\nB: What does he do now?\nA: He works in an office.\nB: But he still paints in his free time.",
     funFact:"The phrase 'gemankeerd arts/kunstenaar/schrijver' is very Dutch. It describes someone whose true calling was different from their career path."},

    {type:"teach", trg:"de godenwereld", src:"the world of the gods, the divine realm", pos:"noun", gender:"c",
     note:"Compound: goden (gods) + wereld (world).\nUsed in mythology and literature.",
     example:"A: De Griekse godenwereld is fascinerend.\nB: Met al die verhalen over Zeus en Athena?\nA: Ja, en de oorlogen tussen goden en mensen.\nB: Het is de basis van de westerse literatuur.",
     exampleSrc:"A: The Greek world of the gods is fascinating.\nB: With all those stories about Zeus and Athena?\nA: Yes, and the wars between gods and humans.\nB: It is the foundation of Western literature.",
     funFact:"Dutch schools teach Greek and Roman mythology as part of the 'gymnasium' track. Students in this track also learn Latin and Ancient Greek."},

    {type:"mc",
     q:"Wat bestudeert 'geluksonderzoek'?",
     opts:["Wat mensen gelukkig maakt","Hoe je de loterij wint","De geschiedenis van geluk","Gelukskoekjes en hun boodschappen"],
     ans:"Wat mensen gelukkig maakt",
     hint:"'Geluk' means happiness and 'onderzoek' means research. Academic study of wellbeing and life satisfaction."},

    {type:"teach", trg:"het goudhaantje", src:"the golden boy/girl, the star performer", pos:"noun", gender:"n",
     note:"Diminutive of 'gouden haan' (golden rooster).\nSomeone who is the favorite or the star.",
     example:"A: Hij is het goudhaantje van de afdeling.\nB: Omdat hij altijd de beste resultaten haalt?\nA: Ja, de baas is dol op hem.\nB: Dat kan jaloezie veroorzaken.",
     exampleSrc:"A: He is the golden boy of the department.\nB: Because he always gets the best results?\nA: Yes, the boss adores him.\nB: That can cause jealousy.",
     funFact:"The 'goudhaantje' in Dutch offices is both envied and admired. The word has a slightly ironic tone, hinting that the favoritism may not last."},

    {type:"teach", trg:"handenvol", src:"handfuls of, lots of", pos:"adj", gender:null,
     note:"Compound: handen (hands) + vol (full).\nUsed as an adverb meaning 'lots of' or 'plenty of'.",
     example:"A: We hebben handenvol werk deze week.\nB: Kunnen we extra hulp krijgen?\nA: Ik zal het vragen.\nB: Dat zou heel welkom zijn.",
     exampleSrc:"A: We have loads of work this week.\nB: Can we get extra help?\nA: I will ask.\nB: That would be very welcome.",
     funFact:"'Handenvol' literally means 'hands full'. The Dutch also say 'handen vol hebben aan' meaning 'to have one's hands full with'."},

    {type:"teach", trg:"het establishment", src:"the establishment", pos:"noun", gender:"n",
     note:"English loanword. The ruling elite or dominant institutions.\nUsed in political and social commentary.",
     example:"A: Hij is tegen het establishment.\nB: Waarom?\nA: Hij vindt dat de elite te veel macht heeft.\nB: Dat is een populistisch standpunt.",
     exampleSrc:"A: He is against the establishment.\nB: Why?\nA: He thinks the elite has too much power.\nB: That is a populist viewpoint.",
     funFact:"Anti-establishment sentiment in Dutch politics led to the rise of populist parties. The Netherlands has one of Europe's most fragmented parliaments."},

    {type:"fb",
     s:"Hij is een {1} musicus die nu als accountant werkt.",
     a:["gemankeerd"],
     opts:["gemankeerd","geluksverschil","goudhaantje","handenvol"],
     hint:"From French 'manquer' (to fail). Describes someone who did not pursue their true calling.",
     sSrc:"He is a {1} musician who now works as an accountant."},

    {type:"teach", trg:"de hartstichting", src:"the heart foundation", pos:"noun", gender:"c",
     note:"Compound: hart (heart) + stichting (foundation).\nA charity focused on cardiovascular health.",
     example:"A: De Hartstichting zamelt geld in voor onderzoek.\nB: Naar hartziekten?\nA: Ja, het is de belangrijkste doodsoorzaak.\nB: Ik doneer elk jaar.",
     exampleSrc:"A: The Heart Foundation raises money for research.\nB: Into heart diseases?\nA: Yes, it is the leading cause of death.\nB: I donate every year.",
     funFact:"The Dutch Hartstichting is one of the largest health charities in the Netherlands. Their annual collection week raises millions of euros."},

    {type:"teach", trg:"hoogtij", src:"high tide, heyday", pos:"noun", gender:"n",
     note:"Compound: hoog (high) + tij (tide).\nUsed figuratively for a peak period of success.",
     example:"A: Het is hoogtij voor de techsector.\nB: De winsten zijn enorm.\nA: Maar het kan niet eeuwig duren.\nB: Elke hoogtij wordt gevolgd door een dal.",
     exampleSrc:"A: It is a heyday for the tech sector.\nB: The profits are enormous.\nA: But it cannot last forever.\nB: Every high tide is followed by a low.",
     funFact:"The expression 'hoogtij vieren' (to celebrate a heyday) perfectly captures the Dutch maritime heritage, linking success to the rhythm of tides."},

    {type:"mc",
     q:"Wat is een 'goudhaantje'?",
     opts:["Een oud muntstuk","De favoriet of de sterspeler","Een gouden sieraad","Een soort vogel"],
     ans:"De favoriet of de sterspeler",
     hint:"Diminutive of 'golden rooster'. Someone who is the star performer or the boss's favorite."},

    {type:"match", pairs:[
      {trg:"geluksonderzoek", src:"happiness research"},
      {trg:"geluksverschil", src:"happiness gap"},
      {trg:"genotswaarde", src:"pleasure value"},
      {trg:"goudhaantje", src:"golden boy/girl"}
    ]},

    {type:"fb",
     s:"Het is {1} voor de woningmarkt, de prijzen stijgen enorm.",
     a:["hoogtij"],
     opts:["hoogtij","establishment","hartstichting","godenwereld"],
     hint:"A peak period, a heyday. Originally a nautical term for when the tide is highest.",
     sSrc:"It is a {1} for the housing market, prices are rising enormously."},

    {type:"mc",
     q:"Wat doet de 'Hartstichting'?",
     opts:["Hartpatienten verplegen","Defibrillators verkopen","Geld inzamelen voor onderzoek naar hartziekten","Hartoperaties uitvoeren"],
     ans:"Geld inzamelen voor onderzoek naar hartziekten",
     hint:"A 'stichting' is a foundation. Combined with 'hart' (heart), it is a charity dedicated to cardiovascular research."}
  ]
};
export default LESSON_16;
