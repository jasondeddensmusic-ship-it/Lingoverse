// Batch 8. Unit 34 extra lesson. International Relations: Diplomacy & Treaties
const BATCH8_L1 = {id:"itv2_u34l_b8_1", title:"Diplomazia e trattati", icon:"🤝", xp:15, board:true, steps:[
{type:"intro", title:"Diplomazia e trattati",
 desc:"Learn vocabulary for diplomacy, international treaties, and Italy's role in global affairs.",
 goals:["Discuss international diplomacy","Use treaty and agreement vocabulary","Understand Italy's role in international organizations"]},

{type:"teach", trg:"il trattato", src:"the treaty", pos:"noun", gender:"m",
 note:"Masculine noun. 'Firmare un trattato' = to sign a treaty.\n'Trattato di pace' = peace treaty.",
 example:"A: I Trattati di Roma hanno fondato la CEE.\nB: Nel 1957, sei paesi firmarono a Roma.",
 exampleSrc:"A: The Treaties of Rome founded the EEC.\nB: In 1957, six countries signed in Rome.",
 funFact:"The Treaties of Rome (1957) were signed in the Campidoglio. Italy was a founding member of the European project. The city of Rome itself is a symbol of European unity."},

{type:"teach", trg:"l'ambasciata", src:"the embassy", pos:"noun", gender:"f",
 note:"Feminine noun. 'L'ambasciatore' = the ambassador.\n'Ambasciata italiana' = Italian embassy.",
 example:"A: L'ambasciata italiana a Londra e in Grosvenor Square.\nB: Serve un appuntamento per il visto?",
 exampleSrc:"A: The Italian embassy in London is in Grosvenor Square.\nB: Do you need an appointment for the visa?",
 funFact:"Italian embassies are known for promoting 'Settimana della Cucina Italiana' (Italian Cuisine Week) worldwide. Diplomacy through food is uniquely Italian."},

{type:"teach", trg:"il vertice", src:"the summit", pos:"noun", gender:"m",
 note:"Masculine noun. Also means 'top/peak.'\n'Vertice internazionale' = international summit.",
 example:"A: Il vertice del G7 si terra in Italia.\nB: Sara un evento di grande importanza.",
 exampleSrc:"A: The G7 summit will be held in Italy.\nB: It will be an event of great importance.",
 funFact:"Italy hosted the G7 summit in Puglia in 2024, at the stunning Borgo Egnazia resort. Italy rotates as G7 president regularly, using the summits to showcase Italian culture."},

{type:"teach", trg:"la sovranita", src:"the sovereignty", pos:"noun", gender:"f",
 note:"Feminine noun. Invariable. 'Sovranita nazionale' = national sovereignty.\n'Sovrano' = sovereign.",
 example:"A: La sovranita popolare e il fondamento della democrazia.\nB: Il potere appartiene al popolo.",
 exampleSrc:"A: Popular sovereignty is the foundation of democracy.\nB: Power belongs to the people.",
 funFact:"Article 1 of the Italian Constitution states that sovereignty belongs to the people. The tension between national sovereignty and EU integration is a constant theme in Italian politics."},

{type:"teach", trg:"il negoziato", src:"the negotiation", pos:"noun", gender:"m",
 note:"Masculine noun. 'Negoziare' = to negotiate.\n'Tavolo dei negoziati' = negotiation table.",
 example:"A: I negoziati sono durati mesi.\nB: Finalmente hanno raggiunto un accordo.",
 exampleSrc:"A: The negotiations lasted months.\nB: They finally reached an agreement.",
 funFact:"'Sedersi al tavolo dei negoziati' (to sit at the negotiation table) is a key diplomatic phrase. Italy's tradition of compromise politics makes Italians skilled negotiators."},

{type:"teach", trg:"la sanzione", src:"the sanction", pos:"noun", gender:"f",
 note:"Feminine noun. 'Imporre sanzioni' = to impose sanctions.\n'Sanzioni economiche' = economic sanctions.",
 example:"A: L'UE ha imposto nuove sanzioni.\nB: Avranno un impatto sull'economia.",
 exampleSrc:"A: The EU imposed new sanctions.\nB: They will have an impact on the economy.",
 funFact:"'Sanzione' means both punishment AND official approval. 'Sanzionare una legge' means to ratify it. Context determines whether it is positive (approval) or negative (punishment)."},

{type:"teach", trg:"il mediatore", src:"the mediator", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: la mediatrice.\n'Mediazione' = mediation.",
 example:"A: L'Italia ha agito come mediatore nel conflitto.\nB: La diplomazia italiana e rispettata nel mondo.",
 exampleSrc:"A: Italy acted as mediator in the conflict.\nB: Italian diplomacy is respected worldwide.",
 funFact:"Italy has a strong tradition of mediation. The Vatican, located in Rome, has mediated international disputes for centuries. Italian 'soft power' combines culture, cuisine, and diplomacy."},

{type:"teach", trg:"il multilateralismo", src:"the multilateralism", pos:"noun", gender:"m",
 note:"Masculine noun. 'Multilaterale' = multilateral.\nOpposite: 'unilateralismo.'",
 example:"A: L'Italia sostiene il multilateralismo.\nB: I problemi globali richiedono soluzioni collettive.",
 exampleSrc:"A: Italy supports multilateralism.\nB: Global problems require collective solutions.",
 funFact:"Italy is a strong advocate for multilateral cooperation through the UN, EU, and NATO. Its foreign policy balances Atlanticism (US alliance) with European integration."},

{type:"teach", trg:"il protocollo", src:"the protocol", pos:"noun", gender:"m",
 note:"Masculine noun. 'Protocollo diplomatico' = diplomatic protocol.\n'Rispettare il protocollo' = to follow protocol.",
 example:"A: Il protocollo diplomatico e molto rigido.\nB: Ogni dettaglio conta: sedie, bandiere, ordine.",
 exampleSrc:"A: Diplomatic protocol is very strict.\nB: Every detail matters: chairs, flags, order.",
 funFact:"Italian diplomatic protocol is meticulous. The seating order, flag placement, and form of address at state dinners follow centuries-old rules. A mistake can cause a diplomatic incident."},

{type:"mc",
 q:"What were the Treaties of Rome?",
 opts:["The founding documents of the European Economic Community (1957)","Peace treaties ending World War II","Trade agreements with the USA","NATO founding documents"],
 ans:"The founding documents of the European Economic Community (1957)",
 hint:"Six countries signed these treaties in Rome, laying the foundation for what became the E... Union."},

{type:"match", pairs:[
  {trg:"l'ambasciata", src:"the embassy"},
  {trg:"il vertice", src:"the summit"},
  {trg:"il negoziato", src:"the negotiation"},
  {trg:"la sanzione", src:"the sanction"}
]},

{type:"fb",
 s:"L'Italia ha agito come {1} nel conflitto internazionale.",
 a:["mediatore"],
 opts:["mediatore","ambasciatore","vertice","protocollo"],
 hint:"This person helps two sides reach an agreement. Italy has a strong tradition of this diplomatic role.",
 sSrc:"Italy acted as {1} in the international conflict."},

{type:"mc",
 q:"What unusual dual meaning does 'sanzione' have?",
 opts:["Both alliance AND rivalry","Both punishment AND official approval","Both war AND peace","Both trade AND embargo"],
 ans:"Both punishment AND official approval",
 hint:"'Sanzionare' can mean to impose penalties or to officially approve a law. Context determines meaning."},

{type:"fb",
 s:"La {1} popolare e il fondamento della democrazia italiana.",
 a:["sovranita"],
 opts:["sovranita","sanzione","mediazione","diplomazia"],
 hint:"Article 1 of the Constitution says this belongs to the people. It means ultimate political authority.",
 sSrc:"Popular {1} is the foundation of Italian democracy."},

{type:"mc",
 q:"How does Italy promote its culture through embassies?",
 opts:["Through sports events","Through fashion shows only","Through Settimana della Cucina Italiana (Italian Cuisine Week)","Through military parades"],
 ans:"Through Settimana della Cucina Italiana (Italian Cuisine Week)",
 hint:"Embassies worldwide celebrate the country's food culture through an annual November event. Gastronomy as diplomacy is a uniquely national tradition."}
]};
export default BATCH8_L1;
