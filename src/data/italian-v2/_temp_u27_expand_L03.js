// Unit 27 Expansion. Lesson 6: Tecnologia e societa
const LESSON_6 = {
  id:"itv2_u27l6", title:"Tecnologia e societa", icon:"⚙️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Tecnologia e societa",
     desc:"Learn to discuss the impact of technology on society, digital transformation, and the ethical questions raised by innovation. Express informed opinions about Italy's technological future.",
     goals:["Discuss the societal impact of technology","Express opinions on digital transformation","Understand ethical debates around technology"]},

    {type:"teach", trg:"la digitalizzazione", src:"the digitalization", pos:"noun", gender:"f",
     note:"Feminine noun. The process of adopting digital technologies.\n'Digitalizzazione della pubblica amministrazione' = digitalization of public services.",
     example:"A: La digitalizzazione della pubblica amministrazione procede lentamente.\nB: Molti servizi sono ancora solo cartacei.",
     exampleSrc:"A: Digitalization of public administration is proceeding slowly.\nB: Many services are still paper-based only.",
     funFact:"Italy ranks below the EU average in digitalization. The DESI index consistently places Italy in the lower half of European countries. The PNRR dedicates 25% of its funds to digital transformation, aiming to close this gap."},

    {type:"teach", trg:"la connessione", src:"the connection", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le connessioni.\n'Connessione a banda larga' = broadband connection.\n'Connessione Wi-Fi' = Wi-Fi connection.",
     example:"A: La connessione internet nelle zone rurali e scarsa.\nB: Il divario digitale penalizza i piccoli comuni.",
     exampleSrc:"A: Internet connection in rural areas is poor.\nB: The digital divide penalizes small towns.",
     funFact:"Italy's 'digital divide' is both geographical (rural vs urban) and generational (elderly vs young). Mountain communities in the Alps and Apennines often lack reliable broadband, creating a two-speed digital Italy."},

    {type:"teach", trg:"il divario digitale", src:"the digital divide", pos:"noun", gender:"m",
     note:"Masculine compound noun. The gap between those with and without access to technology.\n'Colmare il divario' = to bridge the divide.",
     example:"A: Il divario digitale tra nord e sud e preoccupante.\nB: Le scuole del sud hanno meno infrastrutture tecnologiche.",
     exampleSrc:"A: The digital divide between north and south is worrying.\nB: Southern schools have less technological infrastructure.",
     funFact:"'Divario' (gap, divide) is used for many Italian inequalities: 'divario economico' (economic gap), 'divario di genere' (gender gap), 'divario Nord-Sud' (North-South divide). The digital divide adds another dimension to Italy's persistent internal divisions."},

    {type:"teach", trg:"l'automazione", src:"the automation", pos:"noun", gender:"f",
     note:"Feminine noun. The use of machines or software to perform tasks.\n'Automazione industriale' = industrial automation.",
     example:"A: L'automazione ha eliminato molti posti di lavoro manuali.\nB: Ma ne ha creati di nuovi nel settore tecnologico.",
     exampleSrc:"A: Automation has eliminated many manual jobs.\nB: But it has created new ones in the technology sector.",
     funFact:"Italy's manufacturing sector, particularly in Emilia-Romagna and Veneto, is a world leader in industrial automation. Italian companies like Comau build robots used in factories worldwide. 'Industria 4.0' is the buzzword for Italy's smart manufacturing push."},

    {type:"teach", trg:"la cybersicurezza", src:"the cybersecurity", pos:"noun", gender:"f",
     note:"Feminine noun. Protection of digital systems from attacks.\nAlso: 'sicurezza informatica.' 'Attacco informatico' = cyberattack.",
     example:"A: La cybersicurezza e una priorita nazionale.\nB: Gli attacchi informatici sono in aumento.",
     exampleSrc:"A: Cybersecurity is a national priority.\nB: Cyberattacks are on the rise.",
     funFact:"Italy created the 'Agenzia per la Cybersicurezza Nazionale' (ACN) in 2021, recognizing digital threats as a matter of national security. Italian businesses, especially small firms, remain vulnerable due to limited investment in cybersecurity."},

    {type:"mc",
     q:"Che cos'e il divario digitale?",
     opts:["La differenza tra smartphone e computer","Il gap tra chi ha accesso alla tecnologia e chi no","Un tipo di connessione internet","La distanza tra due server"],
     ans:"Il gap tra chi ha accesso alla tecnologia e chi no",
     hint:"The g... between those who can fully participate in the digital world and those who are left behind due to lack of access, skills, or infrastructure."},

    {type:"teach", trg:"la start-up", src:"the start-up", pos:"noun", gender:"f",
     note:"Feminine noun. Invariable. Borrowed from English.\n'Start-up innovativa' = innovative start-up (a specific Italian legal category).",
     example:"A: Milano e diventata un centro per le start-up italiane.\nB: Il governo offre incentivi fiscali per le nuove imprese innovative.",
     exampleSrc:"A: Milan has become a center for Italian start-ups.\nB: The government offers tax incentives for new innovative businesses.",
     funFact:"Italy created a legal category called 'start-up innovativa' in 2012, offering tax breaks and simplified regulations. Over 14,000 companies have registered. However, Italian start-ups struggle to attract venture capital compared to UK, German, or French competitors."},

    {type:"teach", trg:"l'obsolescenza", src:"the obsolescence", pos:"noun", gender:"f",
     note:"Feminine noun. 'Obsolescenza programmata' = planned obsolescence.\nWhen products are designed to become outdated.",
     example:"A: L'obsolescenza programmata costringe i consumatori a comprare prodotti nuovi.\nB: L'Europa sta cercando di limitarla con leggi sul diritto alla riparazione.",
     exampleSrc:"A: Planned obsolescence forces consumers to buy new products.\nB: Europe is trying to limit it with right-to-repair laws.",
     funFact:"The EU's 'right to repair' directive, strongly supported by Italy, requires manufacturers to make products more repairable. Italian consumer associations have long campaigned against 'obsolescenza programmata,' especially for electronics."},

    {type:"fb",
     s:"La {1} della pubblica amministrazione italiana procede piu lentamente della media europea.",
     a:["digitalizzazione"],
     opts:["digitalizzazione","automazione","cybersicurezza","connessione"],
     hint:"The process of converting services and operations to digital format. Moving from paper-based systems to electronic ones.",
     sSrc:"The {1} of Italian public administration is proceeding more slowly than the European average."},

    {type:"teach", trg:"l'algoritmo predittivo", src:"the predictive algorithm", pos:"noun", gender:"m",
     note:"Masculine compound noun. Software that uses data to forecast outcomes.\n'Modello predittivo' = predictive model.",
     example:"A: Gli algoritmi predittivi aiutano a prevenire le frodi bancarie.\nB: Analizzano milioni di transazioni in tempo reale.",
     exampleSrc:"A: Predictive algorithms help prevent bank fraud.\nB: They analyze millions of transactions in real time.",
     funFact:"Italian police use predictive algorithms in some cities to anticipate crime patterns. The practice raises privacy concerns and debates about 'sorveglianza di massa' (mass surveillance) versus public safety."},

    {type:"teach", trg:"la sostenibilita digitale", src:"the digital sustainability", pos:"noun", gender:"f",
     note:"Feminine compound noun. The environmental impact of digital technologies.\n'Impronta di carbonio digitale' = digital carbon footprint.",
     example:"A: I centri dati consumano enormi quantita di energia.\nB: La sostenibilita digitale e un problema crescente.",
     exampleSrc:"A: Data centers consume enormous amounts of energy.\nB: Digital sustainability is a growing problem.",
     funFact:"Italy is increasingly aware that digitalization has environmental costs. The 'impronta ecologica' (ecological footprint) of streaming, cloud computing, and cryptocurrency mining has entered public debate alongside discussions of renewable energy."},

    {type:"mc",
     q:"Che cos'e l'obsolescenza programmata?",
     opts:["Un programma informatico obsoleto","La progettazione deliberata di prodotti che diventano inutilizzabili dopo un certo tempo","La formazione continua dei lavoratori","Un tipo di aggiornamento software"],
     ans:"La progettazione deliberata di prodotti che diventano inutilizzabili dopo un certo tempo",
     hint:"When manufacturers intentionally design products to stop working or become outdated, forcing consumers to buy replacements."},

    {type:"match", pairs:[
      {trg:"digitalizzazione", src:"digitalization"},
      {trg:"divario digitale", src:"digital divide"},
      {trg:"automazione", src:"automation"},
      {trg:"cybersicurezza", src:"cybersecurity"},
      {trg:"start-up", src:"start-up"}
    ]},

    {type:"fb",
     s:"L'{1} industriale ha rivoluzionato la produzione manifatturiera italiana.",
     a:["automazione"],
     opts:["automazione","obsolescenza","connessione","sostenibilita"],
     hint:"Using machines and robots to perform manufacturing tasks that humans once did manually. Italy's factories are leaders in this field.",
     sSrc:"Industrial {1} has revolutionized Italian manufacturing."},

    {type:"mc",
     q:"Perche l'Italia si classifica sotto la media europea negli indici di digitalizzazione?",
     opts:["Perche gli italiani non usano internet","Per il ritardo nelle infrastrutture, il divario digitale geografico e la lenta trasformazione dei servizi pubblici","Perche il governo vieta la tecnologia","Perche non esistono aziende tecnologiche italiane"],
     ans:"Per il ritardo nelle infrastrutture, il divario digitale geografico e la lenta trasformazione dei servizi pubblici",
     hint:"Multiple factors combine: uneven broadband coverage, differences between regions, and slow adoption of digital tools by government offices."}
  ]
};
export default LESSON_6;
