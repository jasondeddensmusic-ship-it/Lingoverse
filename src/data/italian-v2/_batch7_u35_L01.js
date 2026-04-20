// Batch 7 — Unit 35 extra lesson. L'innovazione: Digital Transformation & Smart Cities
const BATCH7_L1 = {id:"itv2_u35l_b7_1", title:"La trasformazione digitale", icon:"\u{1F4BB}", xp:15, board:true, steps:[
{type:"intro", title:"La trasformazione digitale",
 desc:"Learn vocabulary for digital transformation, smart city concepts, and Italy's tech innovation landscape.",
 goals:["Discuss digital transformation in Italian","Talk about smart city technologies","Use technology vocabulary in formal contexts"]},

{type:"teach", trg:"la trasformazione digitale", src:"digital transformation", pos:"noun", gender:"f",
 note:"Feminine noun. The process of using technology to change business and society.\n'Digitalizzare' = to digitize.",
 example:"A: La trasformazione digitale cambia ogni settore.\nB: Dalla sanita all'istruzione.",
 exampleSrc:"A: Digital transformation is changing every sector.\nB: From healthcare to education.",
 funFact:"Italy's 'Piano Nazionale di Ripresa e Resilienza' (PNRR) allocates billions to digital transformation. The goal is to modernize public administration, which still relies heavily on paper."},

{type:"teach", trg:"la connettivita", src:"connectivity", pos:"noun", gender:"f",
 note:"Feminine noun. 'Connesso' = connected.\n'Banda larga' = broadband. 'Banda ultralarga' = ultrafast broadband.",
 example:"A: La connettivita e migliorata molto.\nB: Finalmente anche nei piccoli paesi.",
 exampleSrc:"A: Connectivity has improved a lot.\nB: Finally also in small towns.",
 funFact:"Italy's digital divide between north and south is significant. While Milan has excellent broadband, many southern towns still struggle with basic 'connettivita.'"},

{type:"teach", trg:"la piattaforma", src:"the platform (digital)", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le piattaforme.\n'Piattaforma digitale' = digital platform.",
 example:"A: Questa piattaforma gestisce milioni di utenti.\nB: L'interfaccia e molto intuitiva.",
 exampleSrc:"A: This platform manages millions of users.\nB: The interface is very intuitive.",
 funFact:"'Piattaforma' originally means physical platform (train station, oil rig). Its digital meaning has become dominant. Italian startups are building platforms for food delivery, fashion, and public services."},

{type:"teach", trg:"il cloud", src:"the cloud (computing)", pos:"noun", gender:"m",
 note:"Masculine noun. Used as-is from English.\n'Archiviazione in cloud' = cloud storage.",
 example:"A: Salva i documenti nel cloud.\nB: Cosi puoi accedervi da qualsiasi dispositivo.",
 exampleSrc:"A: Save the documents in the cloud.\nB: So you can access them from any device.",
 funFact:"Italy's government launched a national 'Polo Strategico Nazionale' for cloud services to host public administration data securely. Digital sovereignty is a growing concern."},

{type:"teach", trg:"la cybersicurezza", src:"cybersecurity", pos:"noun", gender:"f",
 note:"Feminine noun. Also: 'sicurezza informatica.'\n'Attacco informatico' = cyberattack.",
 example:"A: La cybersicurezza e una priorita nazionale.\nB: Gli attacchi informatici sono in aumento.",
 exampleSrc:"A: Cybersecurity is a national priority.\nB: Cyberattacks are increasing.",
 funFact:"Italy created the 'Agenzia per la Cybersicurezza Nazionale' (ACN) in 2021. Cyberattacks on Italian hospitals, municipalities, and businesses have made 'cybersicurezza' a household term."},

{type:"teach", trg:"l'intelligenza artificiale", src:"artificial intelligence", pos:"noun", gender:"f",
 note:"Feminine noun. Abbreviation: IA (not AI in Italian).\n'Apprendimento automatico' = machine learning.",
 example:"A: L'intelligenza artificiale sta rivoluzionando molti settori.\nB: Dalla medicina alla finanza.",
 exampleSrc:"A: Artificial intelligence is revolutionizing many sectors.\nB: From medicine to finance.",
 funFact:"Italy abbreviates artificial intelligence as 'IA' (Intelligenza Artificiale), not 'AI.' Italian universities in Turin, Milan, and Bologna are leading research centers for IA."},

{type:"teach", trg:"il dato", src:"data (singular) / datum", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i dati.\n'Analisi dei dati' = data analysis. 'Protezione dei dati' = data protection.",
 example:"A: I dati sono il nuovo petrolio.\nB: Ma vanno protetti e usati responsabilmente.",
 exampleSrc:"A: Data is the new oil.\nB: But it must be protected and used responsibly.",
 funFact:"Italy's 'Garante della Privacy' (Privacy Authority) is one of Europe's most active data protection agencies. GDPR ('Regolamento Generale sulla Protezione dei Dati') is strictly enforced."},

{type:"teach", trg:"la città intelligente", src:"smart city", pos:"noun", gender:"f",
 note:"Feminine noun. Also: 'smart city' (used in Italian).\n'Mobilita intelligente' = smart mobility.",
 example:"A: Milano vuole diventare una città intelligente.\nB: Con sensori, dati e servizi digitali.",
 exampleSrc:"A: Milan wants to become a smart city.\nB: With sensors, data, and digital services.",
 funFact:"Italian smart city projects focus on 'mobilita' (mobility), waste management, and energy efficiency. Milan, Bologna, and Florence are leaders. Historic centers pose unique challenges for technology integration."},

{type:"teach", trg:"l'automazione", src:"automation", pos:"noun", gender:"f",
 note:"Feminine noun. 'Automatizzare' = to automate.\n'Processo automatizzato' = automated process.",
 example:"A: L'automazione ha cambiato la produzione industriale.\nB: Ma crea anche preoccupazioni per il lavoro.",
 exampleSrc:"A: Automation has changed industrial production.\nB: But it also creates concerns about jobs.",
 funFact:"Italy's manufacturing heartland (Lombardy, Emilia-Romagna, Veneto) is a world leader in industrial automation. Italian robotics companies export worldwide."},

{type:"teach", trg:"la blockchain", src:"blockchain", pos:"noun", gender:"f",
 note:"Feminine noun. Used as-is from English.\n'Registro distribuito' = distributed ledger.",
 example:"A: La blockchain garantisce la tracciabilita.\nB: Utile per il 'Made in Italy.'",
 exampleSrc:"A: Blockchain guarantees traceability.\nB: Useful for 'Made in Italy.'",
 funFact:"Italy is exploring blockchain for 'Made in Italy' product authentication. Tracking olive oil, wine, and fashion from origin to consumer fights counterfeiting, a major Italian concern."},

{type:"teach", trg:"l'interfaccia", src:"the interface", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le interfacce.\n'Interfaccia utente' = user interface (UI).",
 example:"A: L'interfaccia deve essere semplice e intuitiva.\nB: L'usabilita e fondamentale.",
 exampleSrc:"A: The interface must be simple and intuitive.\nB: Usability is fundamental.",
 funFact:"Italian design excellence extends to digital interfaces. Italian UX designers are sought after worldwide, combining the country's aesthetic tradition with modern technology."},

{type:"teach", trg:"la sostenibilita digitale", src:"digital sustainability", pos:"noun", gender:"f",
 note:"Feminine noun. Technology that respects environmental and social limits.\n'Green IT' = informatica verde.",
 example:"A: La sostenibilita digitale e il futuro.\nB: Tecnologia che rispetta l'ambiente.",
 exampleSrc:"A: Digital sustainability is the future.\nB: Technology that respects the environment.",
 funFact:"Italian companies are increasingly focused on 'sostenibilita digitale': reducing the energy consumption of data centers, recycling electronic waste, and designing sustainable software."},

{type:"teach", trg:"l'ecosistema digitale", src:"digital ecosystem", pos:"noun", gender:"m",
 note:"Masculine noun. The interconnected network of digital platforms, services, and users.",
 example:"A: L'ecosistema digitale italiano sta crescendo.\nB: Servono più investimenti in formazione.",
 exampleSrc:"A: The Italian digital ecosystem is growing.\nB: More investment in training is needed.",
 funFact:"Italy's digital ecosystem includes major players like Nexi (payments), engineering.it (IT services), and hundreds of innovative startups. Milan's 'Milano Digitale' initiative leads the transformation."},

{type:"mc", q:"Qual e l'abbreviazione italiana per i sistemi che simulano le capacita cognitive umane?",
 opts:["IA","AI","IT","ID"],
 ans:"IA",
 hint:"Italian uses the Italian abbreviation, not the English one."},

{type:"fb", s:"I {1} sono il nuovo petrolio.", a:["dati"],
 opts:["dati","cloud","sensori","algoritmi"],
 hint:"Information collected and stored digitally. The plural of 'dato.'",
 sSrc:"{1} is the new oil."},

{type:"match", pairs:[
 {trg:"la cybersicurezza", src:"cybersecurity"},
 {trg:"l'automazione", src:"automation"},
 {trg:"la blockchain", src:"blockchain"},
 {trg:"l'interfaccia", src:"interface"}
]},

{type:"mc", q:"Che cos'e il PNRR italiano?",
 opts:["A national recovery and resilience plan","A cybersecurity agency","A digital platform","A smart city project"],
 ans:"A national recovery and resilience plan",
 hint:"Italy's p... allocating billions to modernization, including digital transformation."},

{type:"fb", s:"La {1} digitale cambia ogni settore.", a:["trasformazione"],
 opts:["trasformazione","piattaforma","connettivita","blockchain"],
 hint:"The process of fundamental change driven by technology.",
 sSrc:"Digital {1} is changing every sector."},

{type:"mc", q:"Per cosa viene usata la blockchain nel 'Made in Italy'?",
 opts:["Per la tracciabilita dei prodotti","Per il pagamento online","Per la cybersicurezza","Per l'intelligenza artificiale"],
 ans:"Per la tracciabilita dei prodotti",
 hint:"Tracking products from origin to consumer to fight counterfeiting."},

{type:"fb", s:"Milano vuole diventare una città {1}.", a:["intelligente"],
 opts:["intelligente","grande","antica","italiana"],
 hint:"A city that uses technology, data, and sensors to improve services.",
 sSrc:"Milan wants to become a {1} city."},

{type:"match", pairs:[
 {trg:"la piattaforma", src:"platform"},
 {trg:"il cloud", src:"cloud"},
 {trg:"il dato", src:"data"},
 {trg:"l'ecosistema digitale", src:"digital ecosystem"}
]}
,{type:"fb",s:"Le aziende archiviano i file nel {1} per accedervi da qualsiasi dispositivo.",a:["il cloud"],opts:["il cloud","la blockchain","il dato","la piattaforma"],hint:"A remote server infrastructure that stores and delivers data and services over the internet.",sSrc:"Companies store files in the {1} to access them from any device."}]};
export default BATCH7_L1;
