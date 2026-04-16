// Batch 3 — Unit 35 Lesson (Innovation: Digital Transformation & AI Ethics)
const BATCH3_L_1 = {
  id:"itv2_u35l_b3_1", title:"Trasformazione digitale e etica dell'IA", icon:"🧠", xp:15, board:true,
  steps:[
    {type:"intro", title:"Trasformazione digitale e etica dell'IA",
     desc:"Deepen your technology vocabulary with terms for AI ethics, digital governance, and the societal impact of emerging technologies. Key terms for Italian tech discourse and policy debates.",
     goals:["Discuss ethical implications of artificial intelligence","Describe digital governance and regulation","Analyze technology's impact on society and work"]},

    {type:"teach", trg:"il deepfake", src:"the deepfake", pos:"noun", gender:"m",
     note:"Masculine noun. Invariable. AI-generated fake video or audio.\n'Riconoscere un deepfake' = to recognize a deepfake.",
     example:"A: I deepfake rendono impossibile fidarsi dei video online.\nB: La tecnologia per crearli diventa sempre piu accessibile.",
     exampleSrc:"A: Deepfakes make it impossible to trust online videos.\nB: The technology to create them is becoming increasingly accessible.",
     funFact:"Italy's Garante per la Privacy issued specific guidelines on deepfakes in 2023, warning about their use in disinformation and identity theft. Italian researchers at the Politecnico di Milano are developing detection tools."},

    {type:"teach", trg:"il bias algoritmico", src:"algorithmic bias", pos:"noun", gender:"m",
     note:"Masculine compound noun. Systematic discrimination embedded in algorithms.\n'Bias di genere' = gender bias.",
     example:"A: Il bias algoritmico puo discriminare minoranze etniche.\nB: Se i dati di addestramento sono distorti, l'IA perpetua le disuguaglianze.",
     exampleSrc:"A: Algorithmic bias can discriminate against ethnic minorities.\nB: If training data is biased, AI perpetuates inequalities.",
     funFact:"Italian AI ethics research, centered at universities like Bologna and Turin, examines how cultural assumptions embedded in training data affect algorithmic decisions. The EU AI Act, which Italy helped shape, addresses bias as a key risk."},

    {type:"teach", trg:"la trasparenza", src:"transparency", pos:"noun", gender:"f",
     note:"Feminine noun. Openness and accountability.\n'Trasparenza algoritmica' = algorithmic transparency.",
     example:"A: La trasparenza degli algoritmi e fondamentale per la democrazia.\nB: I cittadini devono sapere come vengono prese le decisioni che li riguardano.",
     exampleSrc:"A: Algorithmic transparency is fundamental for democracy.\nB: Citizens must know how decisions affecting them are made.",
     funFact:"Italy's digital administration law requires 'trasparenza amministrativa' for public sector algorithms. When automated systems make decisions about citizens (taxes, benefits, permits), the reasoning must be explainable."},

    {type:"teach", trg:"la robotica", src:"robotics", pos:"noun", gender:"f",
     note:"Feminine noun. The science of designing and building robots.\n'Robotica industriale' = industrial robotics. 'Robot chirurgico' = surgical robot.",
     example:"A: L'Italia e tra i leader europei nella robotica industriale.\nB: I robot vengono usati soprattutto nell'automotive e nel packaging.",
     exampleSrc:"A: Italy is among the European leaders in industrial robotics.\nB: Robots are used mainly in automotive and packaging.",
     funFact:"Italy has the second-highest density of industrial robots in Europe. The Italian Institute of Technology (IIT) in Genoa develops humanoid robots like iCub, one of the world's most advanced research platforms for studying human-robot interaction."},

    {type:"teach", trg:"la blockchain", src:"the blockchain", pos:"noun", gender:"f",
     note:"Feminine noun. English loanword. A decentralized digital ledger technology.\n'Tecnologia blockchain' = blockchain technology.",
     example:"A: La blockchain garantisce la tracciabilita delle transazioni.\nB: Viene usata anche per certificare l'origine dei prodotti alimentari.",
     exampleSrc:"A: Blockchain guarantees the traceability of transactions.\nB: It is also used to certify the origin of food products.",
     funFact:"Italian food companies use blockchain to trace 'Made in Italy' products from farm to table. Consumers can scan a QR code on a bottle of olive oil and see the entire production chain, combating counterfeiting."},

    {type:"mc",
     q:"Che cos'e il 'bias algoritmico'?",
     opts:["Un errore tecnico che rende i computer piu lenti del previsto","La discriminazione sistematica presente nei sistemi di intelligenza artificiale","Un virus informatico che colpisce i social media e le piattaforme digitali","Una preferenza personale dell'utente che influenza i risultati di ricerca"],
     ans:"La discriminazione sistematica presente nei sistemi di intelligenza artificiale",
     hint:"When algorithms systematically discriminate because their training data reflects existing societal biases and inequalities."},

    {type:"teach", trg:"l'internet delle cose", src:"the Internet of Things (IoT)", pos:"noun", gender:"m",
     note:"Masculine compound noun. Abbreviated IoT.\nPhysical objects connected to the internet.",
     example:"A: L'internet delle cose connette elettrodomestici, auto e sensori.\nB: Entro il 2030, miliardi di dispositivi saranno connessi.",
     exampleSrc:"A: The Internet of Things connects appliances, cars, and sensors.\nB: By 2030, billions of devices will be connected.",
     funFact:"Italian uses a translated term 'internet delle cose' alongside the English acronym IoT. Italian smart agriculture projects use IoT sensors to monitor soil, water, and crops, optimizing the production of wine, olive oil, and cheese."},

    {type:"teach", trg:"la sovranita digitale", src:"digital sovereignty", pos:"noun", gender:"f",
     note:"Feminine compound noun. A country's control over its digital infrastructure and data.\n'Autonomia tecnologica' = technological autonomy.",
     example:"A: L'Europa cerca la sovranita digitale per non dipendere da aziende americane e cinesi.\nB: E una sfida enorme che richiede investimenti miliardari.",
     exampleSrc:"A: Europe seeks digital sovereignty to not depend on American and Chinese companies.\nB: It is an enormous challenge requiring billions in investment.",
     funFact:"Italy supports EU digital sovereignty through the GAIA-X cloud project and investments in national data centers. The goal is to keep European citizens' data on European servers, governed by European privacy laws."},

    {type:"teach", trg:"il divario digitale", src:"the digital divide", pos:"noun", gender:"m",
     note:"Masculine compound noun. The gap between those with and without digital access.\n'Colmare il divario' = to bridge the divide.",
     example:"A: Il divario digitale penalizza le aree rurali e gli anziani.\nB: Senza internet veloce, restano esclusi dai servizi.",
     exampleSrc:"A: The digital divide penalizes rural areas and the elderly.\nB: Without fast internet, they are excluded from services.",
     funFact:"Italy's digital divide is both geographic and generational. While Milan rivals any European tech hub, many southern and mountainous areas lack broadband. Over 30% of Italians aged 65+ have never used the internet."},

    {type:"fb",
     s:"Il {1} digitale tra nord e sud Italia resta un problema significativo.",
     a:["divario"],
     opts:["divario","bias","deepfake","cloud"],
     hint:"The gap between those who have access to digital technology and those who do not. A divide that is geographic and generational.",
     sSrc:"The digital {1} between northern and southern Italy remains a significant problem."},

    {type:"teach", trg:"l'etica dell'IA", src:"AI ethics", pos:"noun", gender:"f",
     note:"Feminine compound noun. The moral principles guiding AI development and use.\n'IA responsabile' = responsible AI.",
     example:"A: L'etica dell'IA deve garantire equita, trasparenza e rispetto della privacy.\nB: Senza regole, l'IA puo causare danni enormi.",
     exampleSrc:"A: AI ethics must ensure fairness, transparency, and privacy respect.\nB: Without rules, AI can cause enormous harm.",
     funFact:"Italy was among the first EU countries to establish an AI ethics advisory body. The Vatican also published guidelines on AI ethics in 2020, reflecting the unique Italian situation where technological innovation meets centuries of moral philosophy."},

    {type:"teach", trg:"l'obsolescenza programmata", src:"planned obsolescence", pos:"noun", gender:"f",
     note:"Feminine compound noun. Designing products to become outdated.\n'Economia dell'usa e getta' = throwaway economy.",
     example:"A: L'obsolescenza programmata costringe i consumatori a comprare nuovi dispositivi.\nB: E uno spreco enorme di risorse naturali.",
     exampleSrc:"A: Planned obsolescence forces consumers to buy new devices.\nB: It is an enormous waste of natural resources.",
     funFact:"Italy, as a leader in the circular economy, is pushing back against planned obsolescence. Consumer groups like Altroconsumo campaign for the 'diritto alla riparabilita' (right to repair), which EU legislation is beginning to guarantee."},

    {type:"teach", trg:"la realta aumentata", src:"augmented reality", pos:"noun", gender:"f",
     note:"Feminine compound noun. Technology overlaying digital info on the real world.\n'Realta virtuale' = virtual reality.",
     example:"A: La realta aumentata viene usata nei musei italiani per mostrare le rovine originali.\nB: Punti il telefono verso le colonne e vedi come apparivano duemila anni fa.",
     exampleSrc:"A: Augmented reality is used in Italian museums to show the original ruins.\nB: You point your phone at the columns and see how they looked two thousand years ago.",
     funFact:"Italian museums and archaeological sites are pioneers in augmented reality. The Colosseum, Pompeii, and the Roman Forum use AR apps to let visitors see ancient buildings reconstructed over the actual ruins."},

    {type:"mc",
     q:"Come viene usata la blockchain nel settore alimentare italiano?",
     opts:["Per automatizzare la produzione nelle fabbriche alimentari","Per certificare l'origine e la tracciabilita dei prodotti Made in Italy","Per sostituire i supermercati con negozi completamente automatizzati","Per creare ricette personalizzate basate sulle preferenze dei consumatori"],
     ans:"Per certificare l'origine e la tracciabilita dei prodotti Made in Italy",
     hint:"Consumers can trace food products from farm to table. It combats counterfeiting by creating an immutable record of every step in the production chain."},

    {type:"match", pairs:[
      {trg:"deepfake", src:"deepfake"},
      {trg:"blockchain", src:"blockchain"},
      {trg:"divario digitale", src:"digital divide"},
      {trg:"sovranita digitale", src:"digital sovereignty"},
      {trg:"realta aumentata", src:"augmented reality"}
    ]},

    {type:"fb",
     s:"L'{1} dell'IA deve garantire equita, trasparenza e rispetto dei diritti fondamentali.",
     a:["etica"],
     opts:["etica","robotica","blockchain","obsolescenza"],
     hint:"The moral principles that should guide the development and use of artificial intelligence. Fairness, transparency, and privacy are key pillars.",
     sSrc:"AI {1} must ensure fairness, transparency, and respect for fundamental rights."},

    {type:"mc",
     q:"Perche il Vaticano ha pubblicato linee guida sull'etica dell'intelligenza artificiale?",
     opts:["Per vietare l'uso dell'IA nelle chiese cattoliche di tutto il mondo","Per promuovere la vendita di prodotti tecnologici benedetti dal Papa","Per riflettere la posizione unica dell'Italia dove innovazione tecnologica e tradizione morale si incontrano","Per richiedere che tutti i robot vengano battezzati prima dell'uso"],
     ans:"Per riflettere la posizione unica dell'Italia dove innovazione tecnologica e tradizione morale si incontrano",
     hint:"Italy sits at a unique crossroads: cutting-edge technology meets centuries of moral philosophy. The Vatican's involvement reflects this distinctive cultural context."}
  ]
};
export default BATCH3_L_1;
