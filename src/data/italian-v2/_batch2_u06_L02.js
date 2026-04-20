// Unit 06 Batch 2 — Lesson 2: Asking for Help & Getting Around
const BATCH2_U06_L2 = {
  id:"itv2_u06l_b2_2", title:"Chiedere aiuto", icon:"\u2753", xp:15, board:true,
  steps:[
    {type:"intro", title:"Chiedere aiuto",
     desc:"Learn how to ask for help, get directions, and handle common situations when navigating an Italian city.",
     goals:["Ask for help politely in different situations","Understand common helpful responses","Navigate practical city situations"]},

    {type:"teach", trg:"aiuto", src:"help (noun/exclamation)", pos:"noun", gender:"m",
     note:"Masculine. As exclamation: 'Aiuto!' = Help!\n'Ho bisogno di aiuto' = I need help.",
     example:"A: Ho bisogno di aiuto.\nB: Certo, come posso aiutarla?",
     exampleSrc:"A: I need help.\nB: Of course, how can I help you?",
     funFact:"'Aiuto!' as an exclamation is instantly understood everywhere in Italy. For less urgent situations, 'Mi può aiutare?' (Can you help me?) is polite. Italians are generally very willing to help lost tourists."},

    {type:"teach", trg:"il problema", src:"the problem", pos:"noun", gender:"m",
     note:"Masculine despite ending in -a. Plural: i problemi.\nFrom Greek 'problema' (something thrown forward).",
     example:"A: C'e un problema?\nB: Si, ho perso il portafoglio.",
     exampleSrc:"A: Is there a problem?\nB: Yes, I lost my wallet.",
     funFact:"'Problema' is one of several Italian masculine nouns ending in -a (inherited from Greek): il programma, il sistema, il tema, il dilemma. This Greek pattern surprises learners who expect -a to be feminine."},

    {type:"teach", trg:"ho bisogno di", src:"I need", pos:"verb", gender:null,
     note:"Literally: 'I have need of.' Uses 'avere' + 'bisogno' + 'di.'\nMore common than 'necessitare.'",
     example:"A: Ho bisogno di una farmacia.\nB: Ce n'e una in piazza.",
     exampleSrc:"A: I need a pharmacy.\nB: There is one in the square.",
     funFact:"Italian expresses 'I need' with 'I have need of' (ho bisogno di). This avere construction is standard. 'Bisogno' comes from a Germanic root meaning 'to worry about.' What you need is what worries you."},

    {type:"teach", trg:"cercare", src:"to look for / to search", pos:"verb", gender:null,
     note:"Regular -are verb. 'Cerco una farmacia' = I am looking for a pharmacy.\nFrom Latin 'circare' (to go around).",
     example:"A: Cosa cerchi?\nB: Cerco la stazione.",
     exampleSrc:"A: What are you looking for?\nB: I am looking for the station.",
     funFact:"Cercare does not need a preposition: 'Cerco la stazione' (I look for the station), unlike English which needs 'for.' This simplicity makes it easy to use when lost in an Italian city."},

    {type:"teach", trg:"sapere", src:"to know (facts/information)", pos:"verb", gender:null,
     note:"Irregular: so, sai, sa, sappiamo, sapete, sanno.\nFor facts and skills. 'Sai dov'e...?' = Do you know where...?",
     example:"A: Sai dov'è la stazione?\nB: Si, e dritto poi a sinistra.",
     exampleSrc:"A: Do you know where the station is?\nB: Yes, it is straight then left.",
     funFact:"Remember: sapere = facts/skills, conoscere = people/places. 'Sai parlare italiano?' (Can you speak Italian?) uses sapere because it is about a skill. This distinction is one of the first grammar points in Italian."},

    {type:"teach", trg:"capire", src:"to understand", pos:"verb", gender:null,
     note:"Irregular -ire verb with -isc- infix: capisco, capisci, capisce.\n'Non capisco' = I do not understand.",
     example:"A: Capisce l'italiano?\nB: Si, capisco un po'.",
     exampleSrc:"A: Do you understand Italian?\nB: Yes, I understand a little.",
     funFact:"'Non capisco' (I do not understand) is perhaps the most useful phrase for any language learner. 'Capisce?' (Do you understand?) is a common check during explanations. 'Ho capito' (I understood) confirms comprehension."},

    {type:"teach", trg:"ripetere", src:"to repeat", pos:"verb", gender:null,
     note:"Regular -ere verb. 'Puo ripetere?' = Can you repeat? (formal).\nFrom Latin 'repetere' (to seek again).",
     example:"A: Puo ripetere, per favore?\nB: Certo! La stazione e a destra.",
     exampleSrc:"A: Can you repeat, please?\nB: Of course! The station is to the right.",
     funFact:"'Puo ripetere, per favore?' is the polite life-saver phrase. Italians speak fast and the informal 'Puoi ripetere?' works with peers. Add 'più lentamente' (more slowly) if speed is the issue."},

    {type:"teach", trg:"lentamente", src:"slowly", pos:"adv", gender:null,
     note:"From 'lento' (slow) + '-mente' (mind, manner).\n'-mente' is the Italian equivalent of English '-ly.'",
     example:"A: Puo parlare più lentamente?\nB: Certo! La... stazione... e... a... destra.",
     exampleSrc:"A: Can you speak more slowly?\nB: Of course! The... station... is... to... the right.",
     funFact:"Italian adverbs ending in '-mente' follow the same pattern as English '-ly' and French '-ment.' All come from Latin 'mens' (mind). Slowly = 'with a slow mind/manner.' Adding 'per favore' makes any request polite."},

    {type:"teach", trg:"la mappa", src:"the map", pos:"noun", gender:"f",
     note:"Feminine. From medieval Latin 'mappa' (napkin, cloth map).\n'Mappa della città' = city map.",
     example:"A: Hai una mappa della città?\nB: Si, eccola!",
     exampleSrc:"A: Do you have a city map?\nB: Yes, here it is!",
     funFact:"From Latin 'mappa' (cloth), because maps were drawn on cloth. Tourist information offices ('uffici turistici') in Italian cities provide free maps. Google Maps has largely replaced paper maps, but asking for one is still common."},

    {type:"teach", trg:"l'informazione", src:"the information", pos:"noun", gender:"f",
     note:"Feminine. Often plural: le informazioni.\n'Ufficio informazioni' = information office.",
     example:"A: Vorrei un'informazione, per favore.\nB: Certo, mi dica!",
     exampleSrc:"A: I would like some information, please.\nB: Of course, tell me!",
     funFact:"'Vorrei un'informazione' (I would like some information) is the standard polite opening when asking for directions or help. The 'i' in tourist information offices stands for 'informazioni.' Green signs with a white 'i' mark them."},

    {type:"teach", trg:"girare", src:"to turn", pos:"verb", gender:null,
     note:"Regular -are verb. 'Giri a destra' = turn right (formal imperative).\nAlso means 'to wander around.'",
     example:"A: Dove giro?\nB: Gira a sinistra dopo il semaforo.",
     exampleSrc:"A: Where do I turn?\nB: Turn left after the traffic light.",
     funFact:"'Girare' means 'to turn' in directions but also 'to wander' (girare per la città = wander around the city), 'to spin' (la terra gira = the earth spins), and 'to film' (girare un film). Extremely versatile."},

    {type:"teach", trg:"attraversare", src:"to cross", pos:"verb", gender:null,
     note:"Regular -are verb. 'Attraversa la piazza' = cross the square.\nFrom 'attraverso' (through, across).",
     example:"A: Attraversa la piazza e poi gira a destra.\nB: Grazie mille!",
     exampleSrc:"A: Cross the square and then turn right.\nB: Thank you very much!",
     funFact:"'Attraversare la strada' (to cross the street) is essential vocabulary. Italian drivers can be aggressive, and jaywalking is common but risky. Pedestrian crossings ('strisce pedonali' = zebra stripes) offer some safety."},

    {type:"teach", trg:"continuare", src:"to continue / to keep going", pos:"verb", gender:null,
     note:"Regular -are verb. 'Continua dritto' = keep going straight.\nFrom Latin 'continuare.'",
     example:"A: Continuo dritto?\nB: Si, continua per duecento metri.",
     exampleSrc:"A: Do I keep going straight?\nB: Yes, continue for two hundred meters.",
     funFact:"'Continua dritto' (keep going straight) and 'continua per cento metri' (continue for 100 meters) are the building blocks of Italian directions. Combined with 'gira' (turn) and 'attraversa' (cross), you can follow any route."},

    {type:"teach", trg:"il semaforo", src:"the traffic light", pos:"noun", gender:"m",
     note:"Masculine. From Greek 'sema' (sign) + 'phoros' (carrying).\n'Dopo il semaforo' = after the traffic light.",
     example:"A: C'e un semaforo all'incrocio?\nB: Si, gira a destra al semaforo.",
     exampleSrc:"A: Is there a traffic light at the intersection?\nB: Yes, turn right at the traffic light.",
     funFact:"Italian traffic lights follow the standard red-yellow-green pattern, but drivers are famously creative about obeying them, especially in Naples. 'Passare con il rosso' (to run a red light) carries heavy fines."},

    // Quiz steps
    {type:"mc", q:"Come si dice 'I need help' in italiano?",
     opts:["Ho bisogno di aiuto","Sono aiuto","Faccio aiuto","Ho aiuto"],
     ans:"Ho bisogno di aiuto",
     hint:"Italian uses 'I have need of' rather than 'I need.' The structure uses avere plus a noun and a preposition."},

    {type:"fb", s:"{1} dov'è la stazione?",
     a:["Sai"],
     opts:["Sai","Sei","Hai","Vai"],
     hint:"You are asking if someone knows a fact. This is the 'tu' form of 'sapere,' for knowledge and information.",
     sSrc:"Do you {1} where the station is?"},

    {type:"mc", q:"What is the most useful phrase when you do not understand?",
     opts:["Non capisco","Non parlo","Non so","Non mangio"],
     ans:"Non capisco",
     hint:"This phrase uses the -isc- form of 'capire.' It tells the speaker you did not follow their words."},

    {type:"fb", s:"Puo parlare più {1}?",
     a:["lentamente"],
     opts:["lentamente","velocemente","fortemente","gentilmente"],
     hint:"You want the person to reduce their speaking speed. This adverb means 'slowly.'",
     sSrc:"Can you speak more {1}?"},

    {type:"match", pairs:[
      {trg:"capire", src:"to understand"},
      {trg:"ripetere", src:"to repeat"},
      {trg:"sapere", src:"to know (facts)"},
      {trg:"girare", src:"to turn"},
      {trg:"attraversare", src:"to cross"}
    ]},

    {type:"mc", q:"What does 'girare' mean besides 'to turn'?",
     opts:["To wander, to spin, to film","Only to turn","To stop","To run"],
     ans:"To wander, to spin, to film",
     hint:"This is one of Italian's most versatile verbs. Walking around a city, the earth spinning, and making a movie all use it."},

    {type:"fb", s:"{1} la piazza e poi gira a destra.",
     a:["Attraversa"],
     opts:["Attraversa","Continua","Ripeti","Cerca"],
     hint:"You need to go from one side of the square to the other. This verb means 'to cross.'",
     sSrc:"{1} the square and then turn right."},

    {type:"mc", q:"What is 'il semaforo'?",
     opts:["The traffic light","The train station","The bus stop","The police station"],
     ans:"The traffic light",
     hint:"From Greek 'sema' (sign) + 'phoros' (carrying). A common landmark used when giving directions in Italian cities."}
  ,{type:"match",pairs:[{trg:"il problema",src:"the problem"},{trg:"cercare",src:"to look for / to search"},{trg:"la mappa",src:"the map"},{trg:"continuare",src:"to continue / to keep going"},{trg:"il semaforo",src:"the traffic light"}]},{type:"mc",q:"How do you say \"information\" in Italian?",opts:["l'informazione","la finestra","il tavolo","la bicicletta"],ans:"l'informazione",hint:"Recall the Italian vocabulary word taught in this lesson."}]
};
export default BATCH2_U06_L2;
