// Batch 3. Unit 10, Lesson 1: Problemi in viaggio (Travel Problems)
const BATCH3_U10_L1 = {
  id:"itv2_u10l_b3_1", title:"Problemi in viaggio", icon:"\u26A0\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Problemi in viaggio",
     desc:"Learn vocabulary for handling travel problems in Italy. From lost luggage to hotel complaints, being prepared makes any trip smoother.",
     goals:["Report lost or stolen items","Make complaints at hotels","Handle transport disruptions"]},

    {type:"teach", trg:"il bagaglio", src:"the luggage / baggage", pos:"noun", gender:"m",
     note:"Masculine. Plural: i bagagli. From French 'bagage.'\n'Ritiro bagagli' = baggage claim.",
     example:"A: Il mio bagaglio non è arrivato.\nB: Compili questo modulo, per favore.",
     exampleSrc:"A: My luggage has not arrived.\nB: Fill out this form, please.",
     funFact:"Lost luggage in Italian airports requires filling out a 'PIR' (Property Irregularity Report). Italian airports have improved their baggage handling, but delays still happen during peak summer season. Fiumicino airport in Rome processes over 40 million passengers yearly."},

    {type:"teach", trg:"smarrire", src:"to lose / to misplace", pos:"verb", gender:null,
     note:"Regular -ire verb (with -isc- forms). 'Ho smarrito il passaporto' = I lost my passport.\nPast participle: smarrito.",
     example:"A: Ho smarrito il portafoglio!\nB: Dove l'hai visto l'ultima volta?",
     exampleSrc:"A: I lost my wallet!\nB: Where did you last see it?",
     funFact:"'Smarrire' implies losing something accidentally (misplacing), while 'perdere' is more general. 'Oggetti smarriti' (lost and found) offices exist in every Italian train station and airport. Report lost items quickly because Italian lost-and-found systems work surprisingly well."},

    {type:"teach", trg:"rubare", src:"to steal / to rob", pos:"verb", gender:null,
     note:"Regular -are verb. 'Mi hanno rubato la borsa' = They stole my bag.\nFrom Germanic 'raubon' (to rob).",
     example:"A: Mi hanno rubato il telefono!\nB: Andiamo subito dalla polizia.",
     exampleSrc:"A: They stole my phone!\nB: Let us go to the police immediately.",
     funFact:"Pickpocketing ('borseggio') is a known issue in Italian tourist areas. Rome, Naples, and Florence require extra vigilance. Always report theft to the 'Carabinieri' or 'Polizia' to get a 'denuncia' (police report), which you need for insurance claims."},

    {type:"teach", trg:"la denuncia", src:"the police report / complaint", pos:"noun", gender:"f",
     note:"Feminine. From 'denunciare' (to report).\n'Fare una denuncia' = to file a police report.",
     example:"A: Devo fare una denuncia per furto.\nB: La polizia e in Via Roma.",
     exampleSrc:"A: I need to file a theft report.\nB: The police station is on Via Roma.",
     funFact:"Filing a 'denuncia' is essential for insurance claims and replacing stolen documents. Italian police stations have forms in multiple languages for tourists. The process can be slow but is necessary. Some cities now allow filing online through the Polizia di Stato website."},

    {type:"teach", trg:"il reclamo", src:"the complaint / claim", pos:"noun", gender:"m",
     note:"Masculine. From 'reclamare' (to complain/claim).\n'Fare un reclamo' = to make a complaint.",
     example:"A: Vorrei fare un reclamo.\nB: Certo, mi dica il problema.",
     exampleSrc:"A: I would like to make a complaint.\nB: Of course, tell me the problem.",
     funFact:"Italian consumer culture is increasingly complaint-savvy. Hotels, airlines, and restaurants all have complaint procedures. 'Reclamare' is your right as a consumer. The phrase 'Vorrei fare un reclamo' is polite but firm. For serious issues, the 'Autorita garante della concorrenza e del mercato' handles consumer complaints."},

    {type:"teach", trg:"cancellare", src:"to cancel", pos:"verb", gender:null,
     note:"Regular -are verb. 'Il volo e stato cancellato' = the flight was cancelled.\nAlso means 'to erase/delete.'",
     example:"A: Il treno e stato cancellato.\nB: C'e un altro treno tra un'ora.",
     exampleSrc:"A: The train has been cancelled.\nB: There is another train in an hour.",
     funFact:"EU regulations (EC 261/2004) protect passengers of cancelled flights. Airlines must offer rebooking, refund, or compensation. In Italy, train cancellations also trigger compensation rights. Trenitalia and Italo offer automatic refunds for significant delays."},

    {type:"teach", trg:"lo sciopero", src:"the strike", pos:"noun", gender:"m",
     note:"Masculine. From Greek 'skopelos' (rock, obstacle).\n'Sciopero dei trasporti' = transport strike.",
     example:"A: C'e uno sciopero dei treni domani.\nB: Dobbiamo trovare un'alternativa.",
     exampleSrc:"A: There is a train strike tomorrow.\nB: We need to find an alternative.",
     funFact:"Italy is famous for frequent transport strikes. By law, essential services must run during 'fasce di garanzia' (guaranteed service windows), typically 6-9 AM and 5-8 PM. Check 'scioperi.mit.gov.it' for upcoming strikes. Italians plan around strikes as a normal part of life."},

    {type:"teach", trg:"il guasto", src:"the breakdown / malfunction", pos:"noun", gender:"m",
     note:"Masculine. From 'guastare' (to break/ruin).\n'Fuori servizio' = out of service.",
     example:"A: L'ascensore e guasto.\nB: Dobbiamo prendere le scale.",
     exampleSrc:"A: The elevator is broken.\nB: We have to take the stairs.",
     funFact:"'Guasto' appears on Italian signs as 'fuori servizio' (out of service) or 'in riparazione' (under repair). Italian infrastructure, while generally good, can surprise visitors with unexpected breakdowns, especially in older buildings and smaller towns."},

    {type:"teach", trg:"il sostituto", src:"the replacement / substitute", pos:"noun", gender:"m",
     note:"Masculine. From 'sostituire' (to replace).\n'Servizio sostitutivo' = replacement service.",
     example:"A: C'e un autobus sostitutivo.\nB: Da dove parte?",
     exampleSrc:"A: There is a replacement bus.\nB: Where does it depart from?",
     funFact:"When trains are cancelled in Italy, 'autobus sostitutivi' (replacement buses) are dispatched. These buses follow the train route, stopping at each station. They take longer but ensure passengers reach their destination. The announcement 'servizio sostitutivo con autobus' is common during strikes."},

    {type:"teach", trg:"la multa", src:"the fine / penalty", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'multa' (fine, penalty).\n'Prendere una multa' = to get a fine.",
     example:"A: Ho preso una multa per parcheggio.\nB: Quanto devi pagare?",
     exampleSrc:"A: I got a parking fine.\nB: How much do you have to pay?",
     funFact:"Italian traffic fines ('multe') can follow you internationally. ZTL (zona traffico limitato) fines are especially common for tourists who drive into restricted city center zones without realizing it. These camera-enforced zones exist in most Italian cities and the fines arrive by mail, even months later."},

    {type:"teach", trg:"l'ambasciata", src:"the embassy", pos:"noun", gender:"f",
     note:"Feminine. From 'ambasciatore' (ambassador).\n'Contattare l'ambasciata' = to contact the embassy.",
     example:"A: Ho perso il passaporto. Devo andare all'ambasciata.\nB: Hai una copia del passaporto?",
     exampleSrc:"A: I lost my passport. I need to go to the embassy.\nB: Do you have a copy of your passport?",
     funFact:"Most embassies are located in Rome, the capital. Consulates exist in major cities like Milan, Florence, and Naples. For lost passports, your embassy issues emergency travel documents. Always keep a photocopy of your passport separate from the original when traveling in Italy."},

    {type:"teach", trg:"il modulo", src:"the form (to fill out)", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'modulus' (a measure).\n'Compilare un modulo' = to fill out a form.",
     example:"A: Deve compilare questo modulo.\nB: Serve anche un documento d'identità?",
     exampleSrc:"A: You need to fill out this form.\nB: Do you also need an ID document?",
     funFact:"Italian bureaucracy involves many forms. 'Compilare' (to compile/fill in) is the standard verb. Many forms now have online versions, but paper forms persist in smaller offices. Patience with Italian paperwork is essential. The phrase 'in triplice copia' (in triplicate) is still heard in some offices."},

    {type:"teach", trg:"il consolato", src:"the consulate", pos:"noun", gender:"m",
     note:"Masculine. From 'console' (consul).\nHandles citizen services in cities outside the capital.",
     example:"A: Il consolato americano e a Milano.\nB: Hanno un numero di emergenza?",
     exampleSrc:"A: The American consulate is in Milan.\nB: Do they have an emergency number?",
     funFact:"Consulates handle everyday citizen services: visas, document renewals, voter registration for expats. In emergencies abroad, your consulate is the first point of contact. Italian cities with major consulates include Milan, Florence, Naples, and Palermo."},

    // Quiz steps
    {type:"mc", q:"What is a 'denuncia' and why is it important?",
     opts:["A police report needed for insurance claims","A pharmacy prescription for travelers","A customs declaration for imported goods","A hotel review posted online"],
     ans:"A police report needed for insurance claims",
     hint:"Filing this at the p... station is essential after theft. Without it, your i... company will not process a claim."},

    {type:"fb", s:"Il treno e stato {1}.",
     a:["cancellato"],
     opts:["cancellato","guasto","sostituto","smarrito"],
     hint:"The train will not run at all. Not delayed, but completely removed from the schedule. EU rules may entitle you to compensation.",
     sSrc:"The train has been {1}."},

    {type:"match", pairs:[
      {trg:"il bagaglio", src:"the luggage"},
      {trg:"rubare", src:"to steal"},
      {trg:"lo sciopero", src:"the strike"},
      {trg:"la multa", src:"the fine"},
      {trg:"il modulo", src:"the form"}
    ,{trg:"il consolato",src:"the consulate"}]},

    {type:"mc", q:"What are 'fasce di garanzia' during Italian strikes?",
     opts:["Guaranteed discounts on ticket prices","Guaranteed service windows when transport runs","Insurance coverage for stranded passengers","Special taxis provided by the government"],
     ans:"Guaranteed service windows when transport runs",
     hint:"Essential services must operate during specific morning and evening hours, typically 6-9 AM and 5-8 PM. Plan travel around these w...."},

    {type:"fb", s:"Mi hanno {1} il telefono!",
     a:["rubato"],
     opts:["rubato","smarrito","cancellato","guastato"],
     hint:"Someone took your phone deliberately. This is theft, not losing it. You need to go to the police.",
     sSrc:"They {1} my phone!"},

    {type:"mc", q:"What is a ZTL in Italian cities?",
     opts:["A covered pedestrian shopping area","A type of Italian train service","A restricted traffic zone with camera enforcement","A special tourist bus route"],
     ans:"A restricted traffic zone with camera enforcement",
     hint:"'Zona Traffico Limitato' fines are a common surprise for tourists who drive into city centers. The cameras send fines by mail, even months later."},

    {type:"fb", s:"Deve compilare questo {1}.",
     a:["modulo"],
     opts:["modulo","reclamo","guasto","bagaglio"],
     hint:"A paper or digital form that you fill out with your information. Italian bureaucracy requires many of these.",
     sSrc:"You need to fill out this {1}."},

    {type:"mc", q:"Where should you go if you lose your passport in Italy?",
     opts:["The nearest train station","Your hotel reception only","The local hospital","Your country's embassy or consulate"],
     ans:"Your country's embassy or consulate",
     hint:"They issue emergency travel documents. Embassies are in Rome; consulates exist in major cities like Milan and Florence. Keep a photocopy separate."}
  ,{type:"match",pairs:[{trg:"smarrire",src:"to lose / to misplace"},{trg:"la denuncia",src:"the police report / complaint"},{trg:"il reclamo",src:"the complaint / claim"},{trg:"cancellare",src:"to cancel"},{trg:"il guasto",src:"the breakdown / malfunction"},{trg:"il sostituto",src:"the replacement / substitute"}]},{type:"mc",q:"How do you say \"embassy\" in Italian?",opts:["l'ambasciata","il tavolo","la bicicletta","la finestra"],ans:"l'ambasciata",hint:"Recall the Italian vocabulary word taught in this lesson."}]
};
export default BATCH3_U10_L1;
