// Unit 17 Batch2. Lesson 1: Digital Life & Apps
const BATCH2_U17_L1 = {
  id:"itv2_u17l_b2_1", title:"La vita digitale", icon:"📲", xp:15, board:true,
  steps:[
    {type:"intro", title:"La vita digitale",
     desc:"Expand your Italian tech vocabulary with terms for apps, online services, digital payments, and smart devices. These words reflect how Italians interact with technology daily.",
     goals:["Discuss apps and digital services","Talk about online shopping and payments","Understand smart device vocabulary"]},

    {type:"teach", trg:"il commercio elettronico", src:"e-commerce / online shopping", pos:"noun", gender:"m",
     note:"Masculine. Often shortened to 'e-commerce.'\n'Fare acquisti online' = to shop online.",
     example:"A: Il commercio elettronico cresce ogni anno.\nB: Anch'io compro quasi tutto online.",
     exampleSrc:"A: E-commerce grows every year.\nB: I also buy almost everything online.",
     funFact:"Italy lagged behind other European countries in e-commerce adoption but has caught up rapidly since 2020. 'Amazon Italia' is the dominant platform, but Italian marketplaces like 'ePRICE' also thrive. Italian consumers still value in-store experience, so a 'hybrid' approach is common."},

    {type:"teach", trg:"il pagamento digitale", src:"digital payment", pos:"noun", gender:"m",
     note:"Masculine. 'Pagare con il telefono' = to pay by phone.\n'Contactless' is used as-is in Italian.",
     example:"A: Accettate pagamenti digitali?\nB: Si, carta, telefono e anche PayPal.",
     exampleSrc:"A: Do you accept digital payments?\nB: Yes, card, phone, and also PayPal.",
     funFact:"Italy was historically a cash-heavy society, but digital payments have surged. The government's 'cashback' program (2020-2021) incentivized card use. Italian merchants are now required by law to accept card payments. 'Satispay,' an Italian mobile payment app, has become very popular among young people."},

    {type:"teach", trg:"il cloud", src:"the cloud (data storage)", pos:"noun", gender:"m",
     note:"Masculine. Borrowed from English. Pronounced 'claud.'\n'Salvare nel cloud' = to save to the cloud.",
     example:"A: Hai salvato le foto nel cloud?\nB: Si, uso Google Drive.",
     exampleSrc:"A: Did you save the photos to the cloud?\nB: Yes, I use Google Drive.",
     funFact:"'Il cloud' entered Italian vocabulary around 2010 and is now universally understood. Italian businesses increasingly use 'servizi cloud' for data storage and computing. Privacy concerns are regulated by the EU's GDPR, which Italy enforces through the 'Garante della Privacy' (Privacy Authority)."},

    {type:"teach", trg:"il backup", src:"the backup (data)", pos:"noun", gender:"m",
     note:"Masculine. Borrowed from English.\n'Fare il backup' = to make a backup.",
     example:"A: Hai fatto il backup del telefono?\nB: No, devo farlo. L'ultima volta ho perso tutto.",
     exampleSrc:"A: Did you back up your phone?\nB: No, I need to. Last time I lost everything.",
     funFact:"'Backup' is used as-is in Italian. The concept of backing up data is preached but not always practiced. Losing phone photos ('le foto') is an Italian nightmare. Italian tech shops report that data recovery requests spike after phone drops and water damage, especially during summer beach season."},

    {type:"teach", trg:"lo smartphone", src:"the smartphone", pos:"noun", gender:"m",
     note:"Masculine. Used as-is in Italian.\n'Il cellulare' = mobile phone (more general).",
     example:"A: Quale smartphone hai?\nB: Un iPhone. Ma il prossimo sara un Samsung.",
     exampleSrc:"A: Which smartphone do you have?\nB: An iPhone. But the next one will be a Samsung.",
     funFact:"Italy has one of the highest smartphone penetration rates in Europe (over 80%). Italians spend an average of 4+ hours per day on their phones. WhatsApp is the dominant messaging app, far ahead of SMS. 'Cellulare' remains the everyday word, while 'smartphone' is used when specifying the type."},

    {type:"teach", trg:"il codice QR", src:"the QR code", pos:"noun", gender:"m",
     note:"Masculine. 'QR' pronounced 'cu-erre.'\n'Inquadrare il QR' = to scan the QR code.",
     example:"A: Inquadra il codice QR per il menu.\nB: Non funziona. La fotocamera non lo legge.",
     exampleSrc:"A: Scan the QR code for the menu.\nB: It doesn't work. The camera can't read it.",
     funFact:"QR codes became ubiquitous in Italian restaurants after 2020, replacing physical menus. 'Inquadrare' (to frame/scan) is the Italian verb for scanning a QR code. Many Italian businesses now use QR codes for payments, menus, museum guides, and train tickets."},

    {type:"teach", trg:"l'intelligenza artificiale", src:"artificial intelligence (AI)", pos:"noun", gender:"f",
     note:"Feminine. Abbreviated 'IA' in Italian (not AI).\n'L'IA generativa' = generative AI.",
     example:"A: L'intelligenza artificiale cambiera il lavoro.\nB: Si, ma creera anche nuove opportunita.",
     exampleSrc:"A: Artificial intelligence will change work.\nB: Yes, but it will also create new opportunities.",
     funFact:"In Italian, AI is abbreviated as 'IA' (Intelligenza Artificiale), reversing the English initials. Italian universities have strong AI research programs, particularly in Turin, Milan, and Trento. Italy was the first EU country to temporarily restrict ChatGPT (2023), citing privacy concerns."},

    {type:"teach", trg:"la cybersicurezza", src:"cybersecurity", pos:"noun", gender:"f",
     note:"Feminine. Also: 'la sicurezza informatica.'\n'Attacco informatico' = cyberattack.",
     example:"A: La cybersicurezza e importante per le aziende.\nB: Ogni anno ci sono più attacchi informatici.",
     exampleSrc:"A: Cybersecurity is important for companies.\nB: Every year there are more cyberattacks.",
     funFact:"Italy uses both 'cybersicurezza' (hybrid English-Italian) and 'sicurezza informatica' (pure Italian). The 'Agenzia per la Cybersicurezza Nazionale' (ACN) was established in 2021. Italian small businesses are particularly vulnerable to cyberattacks due to limited IT budgets."},

    {type:"teach", trg:"il dispositivo", src:"the device", pos:"noun", gender:"m",
     note:"Masculine. From 'disporre' (to arrange, to set up).\n'Dispositivo mobile' = mobile device.",
     example:"A: Quanti dispositivi hai connessi?\nB: Telefono, tablet, portatile e smart TV.",
     exampleSrc:"A: How many devices do you have connected?\nB: Phone, tablet, laptop, and smart TV.",
     funFact:"'Dispositivo' is the formal Italian word for any electronic device. In tech contexts, it replaces specific names when speaking generally. 'Dispositivi indossabili' (wearable devices) like smartwatches are growing in popularity. Italian households average 6-7 connected devices."},

    {type:"teach", trg:"la connessione", src:"the connection (internet)", pos:"noun", gender:"f",
     note:"Feminine. 'Connessione lenta' = slow connection.\n'Perdere la connessione' = to lose the connection.",
     example:"A: La connessione e troppo lenta.\nB: Proviamo a cambiare operatore.",
     exampleSrc:"A: The connection is too slow.\nB: Let's try switching providers.",
     funFact:"Italy has invested heavily in fiber optic broadband, but coverage remains uneven. Major cities enjoy fast connections, while rural areas may still rely on slower technologies. 'FWA' (Fixed Wireless Access) bridges the gap in many areas. 'Fibra ottica' (fiber optic) is the premium option."},

    {type:"teach", trg:"il tutorial", src:"the tutorial", pos:"noun", gender:"m",
     note:"Masculine. Borrowed from English.\n'Guardare un tutorial' = to watch a tutorial.",
     example:"A: Ho imparato a cucinare guardando tutorial.\nB: YouTube e pieno di tutorial italiani.",
     exampleSrc:"A: I learned to cook by watching tutorials.\nB: YouTube is full of Italian tutorials.",
     funFact:"Italian YouTube has a thriving tutorial culture. 'Tutorial di cucina' (cooking tutorials) are enormously popular, as are DIY ('fai da te') and beauty tutorials. Italian creators often mix Italian with English tech terms, creating a characteristic bilingual style called 'itanglese.'"},

    // Quiz steps
    {type:"mc", q:"How is 'AI' abbreviated in Italian?",
     opts:["AI (same as English)","IA (reversed initials)","IN (for Intelligenza Nuova)","AS (for Artificiale Smart)"],
     ans:"IA (reversed initials)",
     hint:"'Intelligenza Artificiale' puts 'Intelligenza' first. The abbreviation follows Italian word order: IA, not AI."},

    {type:"fb", s:"Hai salvato le foto nel {1}?",
     a:["cloud"],
     opts:["cloud","backup","dispositivo","tutorial"],
     hint:"This English loanword refers to remote data storage accessed via the internet. In Italian it is masculine: 'il c...'",
     sSrc:"Did you save the photos to the {1}?"},

    {type:"match", pairs:[
      {trg:"il pagamento digitale", src:"digital payment"},
      {trg:"il codice QR", src:"the QR code"},
      {trg:"la cybersicurezza", src:"cybersecurity"},
      {trg:"il dispositivo", src:"the device"},
      {trg:"la connessione", src:"the connection"}
    ]},

    {type:"mc", q:"What is 'Satispay' in Italy?",
     opts:["A government tax payment system","A popular Italian mobile payment app","A satellite internet provider","A digital identity verification tool"],
     ans:"A popular Italian mobile payment app",
     hint:"This I... fintech company created a m... p... system particularly p... among young people as an alternative to cards."},

    {type:"fb", s:"Inquadra il {1} QR per il menu del ristorante.",
     a:["codice"],
     opts:["codice","cloud","backup","dispositivo"],
     hint:"This is the square pattern you scan with your phone camera. 'QR' is pronounced 'cu-erre' in Italian.",
     sSrc:"Scan the QR {1} for the restaurant menu."},

    {type:"mc", q:"Why was Italy notable in the AI regulation space?",
     opts:["Italy created the world's first AI system","Italy was the first EU country to temporarily restrict ChatGPT","Italy banned all AI research permanently","Italy built a national AI computer system"],
     ans:"Italy was the first EU country to temporarily restrict ChatGPT",
     hint:"The 'Garante della Privacy' (Privacy Authority) cited data protection concerns under GDPR when taking this action in 2023."},

    {type:"fb", s:"La {1} e troppo lenta. Cambiamo operatore.",
     a:["connessione"],
     opts:["connessione","applicazione","password","rete"],
     hint:"The internet speed is too slow. You want to switch to a faster provider. This noun means 'connection.'",
     sSrc:"The {1} is too slow. Let's switch providers."},

    {type:"mc", q:"What does 'itanglese' refer to?",
     opts:["A dialect spoken in southern Italy","The mix of Italian and English in modern Italian speech","An ancient Italian language form","A type of Italian hand gesture"],
     ans:"The mix of Italian and English in modern Italian speech",
     hint:"I... creators often blend the two languages, especially in tech and digital contexts. It is a characteristic of m... communication."}
  ,{type:"match",pairs:[{trg:"il commercio elettronico",src:"e-commerce / online shopping"},{trg:"il backup",src:"the backup (data)"},{trg:"lo smartphone",src:"the smartphone"},{trg:"il tutorial",src:"the tutorial"}]},{type:"mc",q:"How do you say \"artificial intelligence\" in Italian?",opts:["la finestra","il tavolo","l'intelligenza artificiale","la bicicletta"],ans:"l'intelligenza artificiale",hint:"Recall the Italian vocabulary word taught in this lesson."}]
};
export default BATCH2_U17_L1;
