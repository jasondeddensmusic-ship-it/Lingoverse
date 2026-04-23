// Batch 7. Unit 05 extra lesson. A casa: Tools & DIY
const BATCH7_L1 = {id:"itv2_u05l_b7_1", title:"Attrezzi e fai-da-te", icon:"\u{1F527}", xp:15, board:true, steps:[
{type:"intro", title:"Attrezzi e fai-da-te",
 desc:"Learn vocabulary for common tools, DIY projects, and basic home repairs.",
 goals:["Name basic household tools","Describe simple repairs","Ask for help with home maintenance"]},

{type:"teach", trg:"il martello", src:"the hammer", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i martelli.\n'Martellare' = to hammer.",
 example:"A: Mi passi il martello?\nB: Eccolo, attento alle dita!",
 exampleSrc:"A: Can you pass me the hammer?\nB: Here it is, watch your fingers!",
 funFact:"'Tra l'incudine e il martello' (between the anvil and the hammer) means being stuck between two hard choices. The same expression exists in English."},

{type:"teach", trg:"il cacciavite", src:"the screwdriver", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i cacciaviti.\nLiterally: 'screw-chaser' (caccia + vite).",
 example:"A: Serve un cacciavite per questa vite.\nB: A stella o a taglio?",
 exampleSrc:"A: We need a screwdriver for this screw.\nB: Phillips or flathead?",
 funFact:"The Italian name literally means 'screw hunter.' A 'cacciavite a stella' is a Phillips head (star), while 'a taglio' is a flathead (slit)."},

{type:"teach", trg:"la vite", src:"the screw", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le viti.\nAlso means 'grapevine' (different meaning, same word).",
 example:"A: Manca una vite in questa sedia.\nB: Ne ho una nel cassetto.",
 exampleSrc:"A: There is a screw missing in this chair.\nB: I have one in the drawer.",
 funFact:"'Vite' means both screw and grapevine. The spiral shape of a vine inspired the name for the screw. 'Avvitare' = to screw in, 'svitare' = to unscrew."},

{type:"teach", trg:"il chiodo", src:"the nail", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i chiodi.\nMetal nail, not fingernail (that is 'unghia').",
 example:"A: Mi servono due chiodi per il quadro.\nB: Di che misura?",
 exampleSrc:"A: I need two nails for the picture.\nB: What size?",
 funFact:"'Chiodo scaccia chiodo' (nail drives out nail) is a proverb meaning a new love helps you forget an old one. One of the most used Italian sayings about heartbreak."},

{type:"teach", trg:"le forbici", src:"the scissors", pos:"noun", gender:"f",
 note:"Feminine plural noun. Always plural in Italian.\n'Un paio di forbici' = a pair of scissors.",
 example:"A: Dove sono le forbici?\nB: Nel secondo cassetto.",
 exampleSrc:"A: Where are the scissors?\nB: In the second drawer.",
 funFact:"Like English, Italian scissors are always plural: 'le forbici.' You can say 'un paio di forbici' (a pair of scissors) to mean one tool."},

{type:"teach", trg:"il nastro adesivo", src:"the adhesive tape / scotch tape", pos:"noun", gender:"m",
 note:"Masculine noun. Often shortened to 'lo scotch' in casual Italian.\n'Nastro' alone means ribbon or tape.",
 example:"A: Hai del nastro adesivo?\nB: Si, e nel cassetto della scrivania.",
 exampleSrc:"A: Do you have adhesive tape?\nB: Yes, it is in the desk drawer.",
 funFact:"Italians commonly call adhesive tape 'lo scotch,' using the brand name generically. This is one of many English brand names adopted into everyday Italian."},

{type:"teach", trg:"la colla", src:"the glue", pos:"noun", gender:"f",
 note:"Feminine noun. 'Incollare' = to glue.\n'Colla a caldo' = hot glue, 'super colla' = superglue.",
 example:"A: Il vaso si e rotto. Serve la colla.\nB: Prova con la super colla.",
 exampleSrc:"A: The vase broke. We need glue.\nB: Try with superglue.",
 funFact:"'Colla' comes from Greek 'kolla' (glue). The same root gives us 'collage' (things glued together) and 'collagene' (collagen, the body's natural glue)."},

{type:"teach", trg:"misurare", src:"to measure", pos:"verb", gender:null,
 note:"Regular -are verb. misuro, misuri, misura.\n'Misurare' = to measure length, size, or quantity.",
 example:"A: Devo misurare la parete.\nB: Usa il metro a nastro.",
 exampleSrc:"A: I need to measure the wall.\nB: Use the tape measure.",
 funFact:"'Due volte misura, una volta taglia' (measure twice, cut once) exists in Italian too. Universal wisdom for carpenters everywhere."},

{type:"teach", trg:"aggiustare", src:"to fix / to repair", pos:"verb", gender:null,
 note:"Regular -are verb. aggiusto, aggiusti, aggiusta.\nSynonym: riparare.",
 example:"A: Puoi aggiustare la sedia?\nB: Si, mi serve solo un cacciavite.",
 exampleSrc:"A: Can you fix the chair?\nB: Yes, I just need a screwdriver.",
 funFact:"'Aggiustare' literally means 'to make right/just' (from 'giusto'). It is used for everything from fixing a chair to mending a relationship."},

{type:"teach", trg:"montare", src:"to assemble / to mount", pos:"verb", gender:null,
 note:"Regular -are verb. monto, monti, monta.\n'Montare un mobile' = to assemble furniture.",
 example:"A: Devo montare la libreria nuova.\nB: Ti aiuto, servono due persone.",
 exampleSrc:"A: I need to assemble the new bookshelf.\nB: I will help you, it takes two people.",
 funFact:"'Montare la panna' means to whip cream (mount it up). 'Montare' has many meanings: assemble, mount, whip, and even 'to blow things out of proportion' (montarsi la testa)."},

{type:"teach", trg:"il trapano", src:"the drill", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i trapani.\n'Trapano elettrico' = power drill.",
 example:"A: Mi presti il trapano?\nB: Certo, ma riportalo domani.",
 exampleSrc:"A: Can you lend me the drill?\nB: Sure, but bring it back tomorrow.",
 funFact:"In Italian apartment buildings, drilling is regulated: no trapano during lunch (1-3 PM) or after 9 PM. Breaking this rule annoys neighbors faster than anything."},

{type:"teach", trg:"la scala", src:"the ladder", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le scale.\nAlso means 'staircase.' Context clarifies which.",
 example:"A: Mi serve la scala per il lampadario.\nB: Attento, e alta!",
 exampleSrc:"A: I need the ladder for the chandelier.\nB: Be careful, it is high!",
 funFact:"'Scala' means both ladder and staircase. 'La Scala' in Milan is the world-famous opera house, named after the church of Santa Maria alla Scala that once stood there."},

{type:"teach", trg:"il fai-da-te", src:"DIY / do-it-yourself", pos:"noun", gender:"m",
 note:"Masculine noun. Invariable. Literally: 'do it yourself.'\n'Negozio di fai-da-te' = hardware store.",
 example:"A: Ti piace il fai-da-te?\nB: Si, ho costruito tutta la libreria!",
 exampleSrc:"A: Do you like DIY?\nB: Yes, I built the whole bookshelf!",
 funFact:"Italy has a strong 'fai-da-te' culture. Major chains like Leroy Merlin and Brico are popular, but Italians also have a tradition of 'arrangiarsi' (making do with what you have)."},

{type:"mc", q:"Come si dice 'screwdriver' in italiano?",
 opts:["il cacciavite","il martello","il chiodo","il trapano"],
 ans:"il cacciavite",
 hint:"Literally a 'screw hunter.' The tool used to turn screws in or out."},

{type:"fb", s:"Mi servono due {1} per appendere il quadro.", a:["chiodi"],
 opts:["chiodi","viti","forbici","martelli"],
 hint:"Small metal pins with a flat head that you hammer into the wall.",
 sSrc:"I need two {1} to hang the picture."},

{type:"match", pairs:[
 {trg:"il martello", src:"hammer"},
 {trg:"il trapano", src:"drill"},
 {trg:"le forbici", src:"scissors"},
 {trg:"la colla", src:"glue"}
,{trg:"aggiustare",src:"to fix / to repair"}]},

{type:"mc", q:"Che cosa significa 'aggiustare'?",
 opts:["to assemble","to fix / to repair","to break","to measure"],
 ans:"to fix / to repair",
 hint:"To make something work again. Comes from 'giusto' (right/correct)."},

{type:"fb", s:"Devo {1} la parete prima di comprare la libreria.", a:["misurare"],
 opts:["misurare","montare","aggiustare","martellare"],
 hint:"To check the exact size using a tape measure or ruler.",
 sSrc:"I need to {1} the wall before buying the bookshelf."},

{type:"mc", q:"Quando NON si può usare il trapano in un palazzo italiano?",
 opts:["Mai, e sempre permesso","Solo il lunedì","Durante l'ora di pranzo e dopo le 9 di sera","Solo la domenica"],
 ans:"Durante l'ora di pranzo e dopo le 9 di sera",
 hint:"Quiet hours in Italian apartments protect lunch and evening rest."},

{type:"fb", s:"Devo {1} la libreria nuova. Mi aiuti?", a:["montare"],
 opts:["montare","misurare","sbucciare","aggiustare"],
 hint:"To put together the pieces of furniture from a flat-pack box.",
 sSrc:"I need to {1} the new bookshelf. Can you help me?"},

{type:"match", pairs:[
 {trg:"la vite", src:"screw"},
 {trg:"il nastro adesivo", src:"adhesive tape"},
 {trg:"la scala", src:"ladder"},
 {trg:"il fai-da-te", src:"DIY"}
]}
]};
export default BATCH7_L1;
