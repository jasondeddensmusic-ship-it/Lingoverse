// Unit 17 Expansion. Lesson 5: Streaming and Digital Literacy
const LESSON_5 = {
  id:"itv2_u17l5", title:"Streaming e alfabetizzazione digitale", icon:"🎬", xp:15, board:true,
  steps:[
    {type:"intro", title:"Streaming e alfabetizzazione digitale",
     desc:"Learn vocabulary for streaming entertainment and digital skills. Italy's streaming market is booming, and digital literacy is becoming essential for all generations.",
     goals:["Discuss streaming and entertainment online","Talk about digital literacy skills","Describe online habits in Italian"]},

    {type:"teach", trg:"lo streaming", src:"streaming", pos:"noun", gender:"m",
     note:"Masculine. Borrowed from English. Invariable.\n'Guardare in streaming' = to watch via streaming.",
     example:"A: Guardi le serie in streaming?\nB: Si, soprattutto su Netflix.",
     exampleSrc:"A: Do you watch series via streaming?\nB: Yes, mostly on Netflix.",
     funFact:"Italy's streaming market exploded after 2020. Netflix, Amazon Prime Video, and Disney+ are the biggest platforms. Italian-produced series ('serie italiane') have gained international recognition. 'Guardare in streaming' has largely replaced 'guardare la TV' for younger generations."},

    {type:"teach", trg:"la serie", src:"the series / TV show", pos:"noun", gender:"f",
     note:"Feminine. Invariable: la serie, le serie.\n'Serie TV' = TV series. 'Serie originale' = original series.",
     example:"A: Hai visto la nuova serie italiana?\nB: Si, e fantastica! L'ho finita in due giorni.",
     exampleSrc:"A: Did you watch the new Italian series?\nB: Yes, it is fantastic! I finished it in two days.",
     funFact:"Italian-produced series have achieved global success. 'Gomorra,' 'Suburra,' and 'L'Amica Geniale' (My Brilliant Friend) have been watched worldwide. 'Binge-watching' is called 'maratonare una serie' (to marathon a series) in Italian slang."},

    {type:"teach", trg:"il podcast", src:"the podcast", pos:"noun", gender:"m",
     note:"Masculine. Borrowed from English. Plural: i podcast.\n'Ascoltare un podcast' = to listen to a podcast.",
     example:"A: Ascolti podcast in italiano?\nB: Si, per migliorare la comprensione.",
     exampleSrc:"A: Do you listen to podcasts in Italian?\nB: Yes, to improve my comprehension.",
     funFact:"Podcasts ('podcast') have become hugely popular in Italy. True crime, politics, and comedy are the top genres. 'Muschio Selvaggio' (Wild Moss) by rapper Fedez was one of Italy's most popular podcasts. Italian language learners find podcasts an excellent tool for natural listening practice."},

    {type:"teach", trg:"l'abbonamento", src:"the subscription", pos:"noun", gender:"m",
     note:"Masculine. From 'abbonarsi' (to subscribe).\n'Abbonamento mensile' = monthly subscription.",
     example:"A: Quanto costa l'abbonamento a Netflix?\nB: Circa dieci euro al mese.",
     exampleSrc:"A: How much is the Netflix subscription?\nB: About ten euros per month.",
     funFact:"'Abbonamento' is used for all subscriptions: streaming services, gym memberships, magazine subscriptions, and public transport passes. 'Abbonarsi' (to subscribe) works the same way. 'Disdire l'abbonamento' (to cancel the subscription) has become a common modern phrase."},

    {type:"teach", trg:"l'alfabetizzazione digitale", src:"digital literacy", pos:"noun", gender:"f",
     note:"Feminine. 'Alfabetizzazione' = literacy (from 'alfabeto').\n'Competenze digitali' = digital skills.",
     example:"A: L'alfabetizzazione digitale e fondamentale oggi.\nB: Soprattutto per gli anziani.",
     exampleSrc:"A: Digital literacy is fundamental today.\nB: Especially for the elderly.",
     funFact:"Italy has one of Europe's widest digital literacy gaps between generations. Over 30% of Italians aged 65+ have never used the internet. The government launched 'Italia Digitale 2026' to improve digital skills nationwide. Schools now include 'educazione digitale' (digital education) in the curriculum."},

    {type:"teach", trg:"la truffa online", src:"online scam / fraud", pos:"noun", gender:"f",
     note:"Feminine. 'Truffa' = scam, fraud. 'Truffatore' = scammer.\n'Attenzione alle truffe online' = beware of online scams.",
     example:"A: Attenzione! Questa email e una truffa.\nB: Come fai a saperlo?",
     exampleSrc:"A: Watch out! This email is a scam.\nB: How do you know?",
     funFact:"Online scams ('truffe online') are a growing problem in Italy. Phishing emails ('email di phishing'), fake websites, and SMS scams ('smishing') target especially older Italians with low digital literacy. The Polizia Postale (Postal Police) specializes in cybercrime."},

    {type:"teach", trg:"il motore di ricerca", src:"the search engine", pos:"noun", gender:"m",
     note:"Masculine. 'Motore' = engine. 'Ricerca' = search.\nGoogle dominates with over 95% market share in Italy.",
     example:"A: Quale motore di ricerca usi?\nB: Google, come tutti!",
     exampleSrc:"A: Which search engine do you use?\nB: Google, like everyone!",
     funFact:"Google's dominance in Italy is nearly total: over 95% of searches go through Google. The verb 'googlare' (to Google) is in the dictionary. 'Il motore di ricerca' is the formal term, but in everyday speech, 'cercare su Google' (to search on Google) is the default."},

    {type:"teach", trg:"il wifi", src:"wifi / wireless internet", pos:"noun", gender:"m",
     note:"Masculine. Pronounced 'WEE-fee' in Italian.\n'La connessione wifi' = the wifi connection.",
     example:"A: C'e il wifi qui?\nB: Si, la password e scritta al bancone.",
     exampleSrc:"A: Is there wifi here?\nB: Yes, the password is written at the counter.",
     funFact:"Italians pronounce wifi as 'WEE-fee,' not 'WY-fy.' Free wifi in Italian restaurants and cafes was slow to arrive compared to other countries. Many Italian cities now offer free public wifi ('wifi pubblico'), but coverage is often patchy. Asking 'C'e il wifi?' is a universal traveler's question."},

    {type:"teach", trg:"disconnettersi", src:"to disconnect / to log off", pos:"verb", gender:null,
     note:"Reflexive -ere verb. 'Disconnettersi dai social' = to disconnect from social media.\n'Staccare' = to unplug (informal).",
     example:"A: Devo disconnettermi per un po'.\nB: Buona idea. Fa bene staccare.",
     exampleSrc:"A: I need to disconnect for a while.\nB: Good idea. It is good to unplug.",
     funFact:"'Disconnettersi' is the formal verb, but 'staccare' (to detach, to unplug) is what Italians actually say: 'Devo staccare un po' dai social' (I need to unplug from social media for a bit). 'Digital detox' is used as-is in Italian. Awareness of screen time ('tempo schermo') is growing."},

    // Quiz steps
    {type:"mc", q:"How do Italians pronounce 'wifi'?",
     opts:["WHY-fy","WEE-fee","WI-fi","WAY-fay"],
     ans:"WEE-fee",
     hint:"Italian phonetics makes the 'i' sound like 'ee.' This pronunciation is standard across Italy."},

    {type:"fb", s:"Guardo le serie in {1} su Netflix.",
     a:["streaming"],
     opts:["streaming","podcast","wifi","social"],
     hint:"This English word describes watching content online in real time without downloading. Very popular since 2020.",
     sSrc:"I watch series via {1} on Netflix."},

    {type:"match", pairs:[
      {trg:"lo streaming", src:"streaming"},
      {trg:"la serie", src:"the series / TV show"},
      {trg:"il podcast", src:"the podcast"},
      {trg:"l'abbonamento", src:"the subscription"},
      {trg:"la truffa online", src:"online scam"}
    ]},

    {type:"mc", q:"What is 'maratonare una serie' in Italian slang?",
     opts:["Running while listening to a series","Watching an entire series in one sitting (binge-watching)","Reviewing a series on social media","Recommending a series to a marathon group"],
     ans:"Watching an entire series in one sitting (binge-watching)",
     hint:"From 'maratona' (marathon). W... episode after episode without stopping, like running a long race."},

    {type:"fb", s:"L'{1} digitale e fondamentale per gli anziani.",
     a:["alfabetizzazione"],
     opts:["alfabetizzazione","abbonamento","applicazione","aggiornamento"],
     hint:"This means 'literacy' in the digital context. Over 30% of Italians over 65 have never used the internet.",
     sSrc:"Digital {1} is fundamental for the elderly."},

    {type:"mc", q:"What is the 'Polizia Postale'?",
     opts:["The Italian mail delivery service","The cybercrime division of Italian police","A private security company for websites","The agency that regulates postal rates"],
     ans:"The cybercrime division of Italian police",
     hint:"Despite the name suggesting mail ('postale'), this p... unit specializes in online fraud and c...."},

    {type:"fb", s:"Devo {1} dai social per un po'. Fa bene staccare.",
     a:["disconnettermi"],
     opts:["disconnettermi","abbonarmi","aggiornarmi","connettermi"],
     hint:"You want to take a break from social media. This reflexive verb means to log off or unplug.",
     sSrc:"I need to {1} from social media for a while. It is good to unplug."},

    {type:"mc", q:"What does 'disdire l'abbonamento' mean?",
     opts:["To renew a subscription","To upgrade a subscription plan","To cancel a subscription","To share a subscription with someone"],
     ans:"To cancel a subscription",
     hint:"'Disdire' means to c... or revoke. Combined with 'abbonamento,' it means ending your ongoing s...."}
  ]
};
export default LESSON_5;
