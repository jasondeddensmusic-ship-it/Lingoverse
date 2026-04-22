// L15: Uitdrukkingen en Idioom. Expressions and Idioms
const LESSON_15 = {
  id:"nlv2_b2gC_l15", title:"Uitdrukkingen en Idioom", icon:"\u{1F4AC}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Expressions and Idioms",
     desc:"Advanced Dutch is full of colourful expressions. Master idioms and fixed phrases that native speakers use daily but textbooks rarely teach.",
     goals:["Master 10 Dutch idioms and expressions","Understand figurative language","Use expressions naturally in context"]},

    {type:"teach", trg:"in lichterlaaie", src:"ablaze / in flames", pos:"adv", gender:null,
     note:"Fixed expression. 'In lichterlaaie staan' = to be ablaze.\nUsed literally and figuratively.",
     example:"A: Het gebouw stond in lichterlaaie.\nB: Was er iemand gewond?\nA: Gelukkig niet, iedereen was op tijd buiten.\nB: Wat een geluk!",
     exampleSrc:"A: The building was ablaze.\nB: Was anyone hurt?\nA: Fortunately not, everyone got out in time.\nB: What luck!",
     funFact:"'Lichterlaaie' is an old Dutch word meaning 'bright blaze'. It only survives in this fixed expression. You never hear 'lichterlaaie' alone."},

    {type:"teach", trg:"in acht nemen", src:"to observe / to take into account", pos:"verb", gender:null,
     note:"Fixed expression. 'In acht nemen' = to observe/heed.\n'Voorzichtigheid in acht nemen' = to exercise caution.",
     example:"A: Neem de veiligheidsregels in acht.\nB: Welke regels bedoel je?\nA: Altijd een helm dragen op de bouwplaats.\nB: Natuurlijk, dat spreekt voor zich.",
     exampleSrc:"A: Observe the safety rules.\nB: Which rules do you mean?\nA: Always wear a helmet on the construction site.\nB: Of course, that goes without saying.",
     funFact:"'In acht nemen' is formal Dutch. In everyday speech, people say 'opletten' (to pay attention) or 'rekening houden met' (to take into account)."},

    {type:"teach", trg:"in omloop brengen", src:"to put into circulation", pos:"verb", gender:null,
     note:"Fixed expression. 'In omloop' = in circulation.\nUsed for money, rumours, and information.",
     example:"A: Iemand heeft een gerucht in omloop gebracht.\nB: Waarover?\nA: Over een reorganisatie.\nB: Is het waar?\nA: Dat weet niemand zeker.",
     exampleSrc:"A: Someone has put a rumour into circulation.\nB: About what?\nA: About a reorganisation.\nB: Is it true?\nA: Nobody knows for sure.",
     funFact:"'Omloop' literally means 'running around'. Money, rumours, and diseases can all be 'in omloop' (in circulation) in Dutch."},

    {type:"teach", trg:"in stand houden", src:"to maintain / to keep up", pos:"verb", gender:null,
     note:"Fixed expression. 'In stand houden' = to maintain.\n'Het gebouw in stand houden' = to maintain the building.",
     example:"A: Het is duur om dit monument in stand te houden.\nB: Hoeveel kost het per jaar?\nA: Bijna een miljoen euro.\nB: Maar het is het waard.",
     exampleSrc:"A: It's expensive to maintain this monument.\nB: How much does it cost per year?\nA: Almost one million euros.\nB: But it's worth it.",
     funFact:"'Monumentenzorg' (heritage conservation) is serious business in the Netherlands. There are over 62,000 listed national monuments."},

    {type:"mc",
     q:"'In lichterlaaie staan' betekent:",
     opts:["Helemaal in brand staan","In de rij staan","In de zon staan","In het donker staan"],
     ans:"Helemaal in brand staan",
     hint:"'Lichterlaaie' is an old word for bright blaze. Something is fully on fire."},

    {type:"teach", trg:"in rekening brengen", src:"to charge (to an account)", pos:"verb", gender:null,
     note:"Fixed expression. 'In rekening brengen' = to charge.\n'De kosten in rekening brengen' = to charge the costs.",
     example:"A: Hoeveel brengt u in rekening?\nB: Vijftig euro per uur.\nA: Dat valt mee.\nB: Exclusief btw, dat wel.",
     exampleSrc:"A: How much do you charge?\nB: Fifty euros per hour.\nA: That's reasonable.\nB: Excluding VAT, though.",
     funFact:"'Btw' stands for 'belasting over de toegevoegde waarde' (value added tax). The standard rate in the Netherlands is 21%."},

    {type:"teach", trg:"de aanhang", src:"the following / supporters", pos:"noun", gender:"c",
     note:"Common gender (de). From 'aanhangen' (to follow/support).\n'De aanhanger' = the supporter/trailer.",
     example:"A: De partij heeft veel aanhang in het zuiden.\nB: Waarom juist daar?\nA: Ze spreken de belangen van boeren aan.\nB: Dat verklaart de populariteit.",
     exampleSrc:"A: The party has a lot of support in the south.\nB: Why especially there?\nA: They address the interests of farmers.\nB: That explains the popularity.",
     funFact:"'Aanhang' can also mean a romantic partner in informal Dutch: 'Neem je aanhang mee?' (Are you bringing your other half?)."},

    {type:"teach", trg:"de insider", src:"the insider", pos:"noun", gender:"c",
     note:"Common gender (de). English loanword.\n'Insiderkennis' = insider knowledge.",
     example:"A: Een insider heeft informatie gelekt.\nB: Aan de pers?\nA: Ja, het staat in alle kranten.\nB: Dat wordt een groot schandaal.",
     exampleSrc:"A: An insider has leaked information.\nB: To the press?\nA: Yes, it's in all the newspapers.\nB: That will be a big scandal.",
     funFact:"Dutch media use 'insider' and 'klokkenluider' (whistleblower, literally: bell-ringer) for people who reveal internal information."},

    {type:"fb",
     s:"Neem de veiligheidsregels goed {1}.",
     a:["in acht"],
     opts:["in acht","in stand","in omloop","in rekening"],
     hint:"To observe or heed rules carefully. A formal way of saying 'pay attention to'.",
     sSrc:"Observe the safety rules carefully."},

    {type:"teach", trg:"de bib", src:"the library (informal)", pos:"noun", gender:"c",
     note:"Common gender (de). Short for 'bibliotheek'.\nVery common in Flemish Dutch, spreading to NL.",
     example:"A: Ga je mee naar de bib?\nB: Is er een nieuwe bib geopend?\nA: Ja, vlak bij het station.\nB: Leuk, ik wil nieuwe boeken lenen.",
     exampleSrc:"A: Are you coming to the library?\nB: Has a new library opened?\nA: Yes, right near the station.\nB: Nice, I want to borrow new books.",
     funFact:"'Bib' is the standard word for library in Belgium. In the Netherlands, 'bieb' is more common as the informal short form of 'bibliotheek'."},

    {type:"teach", trg:"de denkwijs", src:"the way of thinking / mindset", pos:"noun", gender:"c",
     note:"Common gender (de). Denk (think) + wijs (way/manner).\nSynonym: 'denkwijze'.",
     example:"A: Zijn denkwijs is heel anders dan de mijne.\nB: Op welk vlak?\nA: Hij is heel analytisch, ik ben meer creatief.\nB: Dat kan juist goed samenwerken.",
     exampleSrc:"A: His way of thinking is very different from mine.\nB: In what way?\nA: He's very analytical, I'm more creative.\nB: That can actually work well together.",
     funFact:"The Dutch are known for 'nuchterheid' (sobriety/level-headedness) in their denkwijs. Practical thinking is valued over emotional responses."},

    {type:"mc",
     q:"'In omloop brengen' kan gebruikt worden voor:",
     opts:["Alleen geld","Geld, geruchten en informatie","Alleen geruchten","Alleen kranten"],
     ans:"Geld, geruchten en informatie",
     hint:"Anything that can circulate among people: currency, rumours, or news."},

    {type:"fb",
     s:"De kosten worden aan het einde van de maand {1} gebracht.",
     a:["in rekening"],
     opts:["in rekening","in acht","in omloop","in stand"],
     hint:"To charge costs to someone's account. A formal billing expression.",
     sSrc:"The costs will be charged at the end of the month."},

    {type:"match", pairs:[
      {trg:"in lichterlaaie", src:"ablaze"},
      {trg:"in acht nemen", src:"to observe / heed"},
      {trg:"in omloop brengen", src:"to put into circulation"},
      {trg:"in stand houden", src:"to maintain"}
    ]},

    {type:"mc",
     q:"Een 'klokkenluider' is in het Nederlands:",
     opts:["Iemand die klokken repareert","Een kerkelijk beroep","Een whistleblower die misstanden onthult","Een muzikant"],
     ans:"Een whistleblower die misstanden onthult",
     hint:"Literally 'bell-ringer'. Someone who sounds the alarm about wrongdoing inside an organisation."},

    {type:"fb",
     s:"Het is erg duur om dit historische gebouw {1} te houden.",
     a:["in stand"],
     opts:["in stand","in acht","in omloop","in rekening"],
     hint:"To keep something in good condition over time. Preservation and maintenance.",
     sSrc:"It is very expensive to keep this historical building maintained."},

    {type:"match", pairs:[
      {trg:"in rekening brengen", src:"to charge"},
      {trg:"aanhang", src:"following / supporters"},
      {trg:"insider", src:"insider"},
      {trg:"denkwijs", src:"way of thinking"}
    ]}
  ]
};
export default LESSON_15;
