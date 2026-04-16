// Batch 8 — Unit 03 extra lesson. Family: Life Events & Celebrations
const BATCH8_L1 = {id:"itv2_u03l_b8_1", title:"Le feste in famiglia", icon:"🎂", xp:15, board:true, steps:[
{type:"intro", title:"Le feste in famiglia",
 desc:"Learn vocabulary for family celebrations, life events, and the traditions that bring Italian families together.",
 goals:["Describe family celebrations and traditions","Talk about life events","Use vocabulary for parties and gatherings"]},

{type:"teach", trg:"il compleanno", src:"the birthday", pos:"noun", gender:"m",
 note:"Masculine noun. 'Buon compleanno!' = Happy birthday!\n'Compiere gli anni' = to turn (age).",
 example:"A: Quanti anni compi?\nB: Domani compio trent'anni!",
 exampleSrc:"A: How old are you turning?\nB: Tomorrow I turn thirty!",
 funFact:"Italians celebrate 'l'onomastico' (name day) as well as birthdays. If your name is Giovanni, you celebrate on Saint John's day too."},

{type:"teach", trg:"il regalo", src:"the gift / present", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i regali.\n'Fare un regalo' = to give a gift.",
 example:"A: Che bel regalo! Grazie!\nB: Sono contento che ti piaccia.",
 exampleSrc:"A: What a beautiful gift! Thank you!\nB: I am glad you like it.",
 funFact:"In Italy, it is bad luck to open gifts in front of the giver at some events. At weddings, gifts are often opened privately later."},

{type:"teach", trg:"festeggiare", src:"to celebrate", pos:"verb", gender:null,
 note:"Regular -are verb. 'Festeggiamo!' = Let us celebrate!\n'Festa' = party/celebration.",
 example:"A: Come festeggi il compleanno?\nB: Con una cena in famiglia.",
 exampleSrc:"A: How do you celebrate your birthday?\nB: With a family dinner.",
 funFact:"Italian celebrations almost always center on food. A birthday without a torta (cake) is unthinkable, and Sunday lunch is the weekly family festa."},

{type:"teach", trg:"il matrimonio", src:"the wedding / marriage", pos:"noun", gender:"m",
 note:"Masculine noun. 'Sposarsi' = to get married.\n'Gli sposi' = the newlyweds.",
 example:"A: Quando e il matrimonio?\nB: A giugno, nella chiesa del paese.",
 exampleSrc:"A: When is the wedding?\nB: In June, in the village church.",
 funFact:"Italian weddings can last an entire day. The reception meal alone often has 8 to 12 courses and can last 5 hours. Guests receive 'bomboniere' (small gifts)."},

{type:"teach", trg:"invitare", src:"to invite", pos:"verb", gender:null,
 note:"Regular -are verb. 'Un invito' = an invitation.\n'Sei invitato/a!' = You are invited!",
 example:"A: Ti invito alla mia festa!\nB: Che bello, vengo volentieri!",
 exampleSrc:"A: I invite you to my party!\nB: How nice, I will gladly come!",
 funFact:"In Italian culture, refusing an invitation requires elaborate excuses. A simple 'no' is considered cold. 'Mi piacerebbe tanto ma...' (I would love to but...) is the way."},

{type:"teach", trg:"il brindisi", src:"the toast (celebratory)", pos:"noun", gender:"m",
 note:"Masculine noun. Invariable plural: i brindisi.\n'Fare un brindisi' = to make a toast.",
 example:"A: Facciamo un brindisi!\nB: Cin cin! Alla salute!",
 exampleSrc:"A: Let us make a toast!\nB: Cheers! To health!",
 funFact:"'Cin cin' (cheers) comes from the Chinese 'qing qing' (please please), brought to Italy by sailors. You must look each person in the eyes while clinking glasses."},

{type:"teach", trg:"riunirsi", src:"to gather / to get together", pos:"verb", gender:null,
 note:"Reflexive verb. 'Ci riuniamo' = we get together.\n'Una riunione' = a meeting/gathering.",
 example:"A: Ci riuniamo tutti a Natale?\nB: Si, come ogni anno a casa dei nonni.",
 exampleSrc:"A: Are we all getting together at Christmas?\nB: Yes, as every year at the grandparents' house.",
 funFact:"The Italian family gathering ('riunione di famiglia') is a cornerstone of social life. Some families gather every Sunday for pranzo, not just holidays."},

{type:"teach", trg:"il ricordo", src:"the memory / souvenir", pos:"noun", gender:"m",
 note:"Masculine noun. 'Ricordare' = to remember.\n'Un bel ricordo' = a beautiful memory.",
 example:"A: Hai bei ricordi dell'infanzia?\nB: Si, le estati al mare con i nonni.",
 exampleSrc:"A: Do you have nice childhood memories?\nB: Yes, the summers at the seaside with my grandparents.",
 funFact:"'Ricordo' comes from Latin 'recordari' (to pass back through the heart). Memory is literally felt in the heart, not the head."},

{type:"teach", trg:"sorprendere", src:"to surprise", pos:"verb", gender:null,
 note:"Irregular past participle: sorpreso.\n'Una sorpresa' = a surprise. 'Festa a sorpresa' = surprise party.",
 example:"A: Organizziamo una festa a sorpresa!\nB: Che idea fantastica!",
 exampleSrc:"A: Let us organize a surprise party!\nB: What a fantastic idea!",
 funFact:"Italians love surprise parties (feste a sorpresa). The key phrase when the guest arrives is everyone shouting 'Sorpresa!' together."},

{type:"mc",
 q:"What does 'fare un brindisi' mean?",
 opts:["To make a toast","To bake a cake","To give a gift","To send an invitation"],
 ans:"To make a toast",
 hint:"This involves raising glasses together. You might say 'Cin cin!' afterwards."},

{type:"match", pairs:[
  {trg:"festeggiare", src:"to celebrate"},
  {trg:"invitare", src:"to invite"},
  {trg:"il regalo", src:"the gift"},
  {trg:"il ricordo", src:"the memory"}
]},

{type:"fb",
 s:"Ci {1} tutti a Natale a casa dei nonni.",
 a:["riuniamo"],
 opts:["riuniamo","festeggiamo","sorprendiamo","invitiamo"],
 hint:"This reflexive verb means 'to gather together.' The family comes together in one place.",
 sSrc:"We all {1} at Christmas at the grandparents' house."},

{type:"mc",
 q:"What is 'l'onomastico' in Italian culture?",
 opts:["A name day celebration","A birthday party","A wedding anniversary","A religious holiday"],
 ans:"A name day celebration",
 hint:"It is connected to your first n... and the saint associated with it."},

{type:"fb",
 s:"Organizziamo una festa a {1} per Marco!",
 a:["sorpresa"],
 opts:["sorpresa","brindisi","regalo","compleanno"],
 hint:"The guest does not know about the party. Everyone will shout when Marco arrives.",
 sSrc:"Let us organize a {1} party for Marco!"},

{type:"mc",
 q:"What must you do while clinking glasses in Italy?",
 opts:["Look each person in the eyes","Close your eyes","Hold the glass with two hands","Say your name"],
 ans:"Look each person in the eyes",
 hint:"Not doing this is considered bad luck, similar to a superstition in many European countries."}
]};
export default BATCH8_L1;
