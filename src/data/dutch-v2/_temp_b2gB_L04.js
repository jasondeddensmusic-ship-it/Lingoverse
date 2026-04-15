// Dutch B2 gapB Lesson 04 — Kinderen en Gezin
// Children, family life, and parenting vocabulary

const LESSON_4 = {id:"nlv2_b2gB_l4", title:"Kinderen en Gezin", icon:"\u{1F476}", xp:25, board:true, steps:[
{type:"intro", title:"Kinderen en Gezin",
 desc:"Family life in the Netherlands comes with its own vocabulary. From daycare to children's clothing, learn the words that parents use every day.",
 goals:["8 family and children nouns","Discuss childcare and family activities","Understand Dutch parenting culture"]},

{type:"teach", trg:"de kinderkleding", src:"children's clothing", pos:"noun", gender:"c",
 note:"Kinder + kleding (clothing).\n'De kinderafdeling' = children's department.",
 example:"A: Waar koop je kinderkleding?\nB: Meestal bij de kringloop, eerlijk gezegd.\nA: Slim, ze groeien er zo snel uit.\nB: Precies, het is zonde van het geld.",
 exampleSrc:"A: Where do you buy children's clothing?\nB: Usually at the thrift store, honestly.\nA: Smart, they grow out of it so fast.\nB: Exactly, it's a waste of money.",
 funFact:"Second-hand children's clothing is so popular in the Netherlands that dedicated swap events (kleding-ruilbeurzen) are organized regularly."},

{type:"teach", trg:"het kinderlied", src:"children's song / nursery rhyme", pos:"noun", gender:"n",
 note:"Kinder + lied (song).\n'Kinderliedjes zingen' = to sing nursery rhymes.",
 example:"A: Ken je dit kinderlied nog?\nB: Ja, mijn oma zong dat altijd.\nA: Sommige liedjes blijven je hele leven bij.\nB: Klopt, ik zing ze nu voor mijn eigen kinderen.",
 exampleSrc:"A: Do you still know this nursery rhyme?\nB: Yes, my grandma always sang it.\nA: Some songs stay with you your whole life.\nB: True, I sing them for my own children now.",
 funFact:"'Slaap kindje slaap' is one of the oldest Dutch lullabies, dating back to the 18th century."},

{type:"teach", trg:"het kleuterdagverblijf", src:"daycare center (for toddlers)", pos:"noun", gender:"n",
 note:"Kleuter (toddler) + dagverblijf (day shelter).\nNow usually called 'kinderdagverblijf' or 'kdv'.",
 example:"A: Waar gaat je zoon overdag naartoe?\nB: Naar het kleuterdagverblijf.\nA: Vindt hij het leuk daar?\nB: Ja, hij heeft al veel vriendjes gemaakt.",
 exampleSrc:"A: Where does your son go during the day?\nB: To the daycare center.\nA: Does he like it there?\nB: Yes, he's already made lots of friends.",
 funFact:"Dutch daycare is among the most expensive in Europe. The government subsidizes it through 'kinderopvangtoeslag' (childcare benefit)."},

{type:"teach", trg:"de kinderafdeling", src:"children's department / ward", pos:"noun", gender:"c",
 note:"Kinder + afdeling (department).\nCan refer to a store section or hospital ward.",
 example:"A: De kinderafdeling is op de tweede verdieping.\nB: Dank je. Ik zoek een cadeau.\nA: Er is nu ook uitverkoop.\nB: Mooi, dan kan ik misschien iets leuks vinden.",
 exampleSrc:"A: The children's department is on the second floor.\nB: Thanks. I'm looking for a gift.\nA: There's also a sale on now.\nB: Great, then maybe I can find something nice.",
 funFact:"Dutch hospitals have specialized children's wards with playrooms, clowns, and school teachers to make stays less frightening."},

{type:"teach", trg:"het knuffeldier", src:"stuffed animal / cuddly toy", pos:"noun", gender:"n",
 note:"Knuffel (cuddle) + dier (animal).\n'Knuffelen' = to cuddle, to hug.",
 example:"A: Mijn dochter kan niet slapen zonder haar knuffeldier.\nB: Welke heeft ze?\nA: Een oud konijntje, ze heet Flopje.\nB: Schattig! Die moet je nooit kwijtraken.",
 exampleSrc:"A: My daughter can't sleep without her stuffed animal.\nB: Which one does she have?\nA: An old bunny, her name is Flopje.\nB: Adorable! You must never lose that one.",
 funFact:"Dutch children are famous for their attachment to one specific 'knuffel'. Losing it is considered a minor family emergency."},

{type:"teach", trg:"de knuffel", src:"cuddle / hug / stuffed toy", pos:"noun", gender:"c",
 note:"Triple meaning: a hug, the act of cuddling, or a stuffed toy.\n'Een knuffel geven' = to give a hug.",
 example:"A: Kom, een knuffel voor het slapengaan.\nB: Mama, ik wil ook mijn knuffel!\nA: Hier is je beer. Welterusten.\nB: Welterusten, mama.",
 exampleSrc:"A: Come, a hug before bedtime.\nB: Mama, I want my stuffed toy too!\nA: Here's your bear. Good night.\nB: Good night, mama.",
 funFact:"The word 'knuffel' is uniquely Dutch. There is no single English word that captures both the physical hug and the beloved toy."},

{type:"teach", trg:"het kroost", src:"offspring / brood (informal)", pos:"noun", gender:"n",
 note:"Informal, affectionate word for one's children.\n'Met heel het kroost' = with all the kids.",
 example:"A: Hoe gaat het met je kroost?\nB: Druk, druk, druk. Drie kinderen is veel.\nA: Maar je zou het niet willen missen.\nB: Absoluut niet, het is geweldig.",
 exampleSrc:"A: How's the brood doing?\nB: Busy, busy, busy. Three kids is a lot.\nA: But you wouldn't want to miss it.\nB: Absolutely not, it's wonderful.",
 funFact:"'Kroost' sounds warm and humorous. Parents often use it self-deprecatingly: 'Ik moet het kroost ophalen' (I need to pick up the brood)."},

{type:"teach", trg:"de knutselen", src:"to do arts and crafts", pos:"verb", gender:null,
 note:"Core Dutch childhood activity.\n'Knutselwerk' = craft project. 'Knutselspullen' = craft supplies.",
 example:"A: De kinderen willen knutselen.\nB: Goed idee. Wat hebben we nodig?\nA: Papier, lijm en een schaar.\nB: Ik pak het wel even.",
 exampleSrc:"A: The children want to do arts and crafts.\nB: Good idea. What do we need?\nA: Paper, glue and scissors.\nB: I'll get it.",
 funFact:"Knutselen is considered a core Dutch childhood skill. Schools dedicate significant time to it, especially around Sinterklaas and Christmas."},

{type:"mc", q:"'Het knuffeldier' is:",
 opts:["A pet you can hug","A stuffed animal","A teddy bear brand","A zoo animal"],
 ans:"A stuffed animal",
 hint:"Knuffel (cuddle) + dier (animal). The toy children sleep with."},

{type:"fb", s:"De kinderen willen vanmiddag {1}.",
 a:["knutselen"], opts:["knutselen","knuffelen","kroost","kleuterdagverblijf"],
 hint:"The hands-on creative activity with paper, glue, and scissors",
 sSrc:"The children want to {1} this afternoon."},

{type:"mc", q:"'Het kroost' is een informeel woord voor:",
 opts:["Your partner","Your children","Your parents","Your pets"],
 ans:"Your children",
 hint:"An affectionate, slightly humorous word for one's offspring"},

{type:"fb", s:"Mijn dochter kan niet slapen zonder haar {1}.",
 a:["knuffeldier"], opts:["knuffeldier","kinderlied","kinderkleding","kroost"],
 hint:"The stuffed toy a child takes to bed",
 sSrc:"My daughter can't sleep without her {1}."},

{type:"match", pairs:[
 {trg:"de kinderkleding", src:"children's clothing"},
 {trg:"het kinderlied", src:"nursery rhyme"},
 {trg:"het kleuterdagverblijf", src:"daycare center"},
 {trg:"de kinderafdeling", src:"children's department"}
]},

{type:"mc", q:"'Een knuffel geven' betekent:",
 opts:["To give a gift","To give a hug","To give a stuffed toy","To give a kiss"],
 ans:"To give a hug",
 hint:"The physical act of embracing someone warmly"},

{type:"fb", s:"Hoe gaat het met je {1}? Druk, druk, druk!",
 a:["kroost"], opts:["kroost","knuffel","kinderlied","kinderafdeling"],
 hint:"The informal, affectionate word for your children",
 sSrc:"How's your {1} doing? Busy, busy, busy!"},

{type:"match", pairs:[
 {trg:"het knuffeldier", src:"stuffed animal"},
 {trg:"de knuffel", src:"hug / cuddly toy"},
 {trg:"het kroost", src:"offspring / brood"},
 {trg:"knutselen", src:"to do arts and crafts"}
]}
]};
export default LESSON_4;
