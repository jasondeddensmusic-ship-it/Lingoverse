// Batch 6 — Unit 17 extra lesson. I media e la tecnologia: Social Media & Digital Life
const BATCH6_L1 = {id:"itv2_u17l_b6_1", title:"La vita digitale", icon:"\u{1F4F1}", xp:15, board:true, steps:[
{type:"intro", title:"La vita digitale",
 desc:"Learn vocabulary for social media, digital communication, and online life in Italian.",
 goals:["Discuss social media and online habits","Talk about digital communication","Understand internet vocabulary in Italian"]},

{type:"teach", trg:"il profilo", src:"the profile", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i profili.\nYour social media identity page.",
 example:"A: Hai visto il suo profilo?\nB: Si, ha molti follower.",
 exampleSrc:"A: Have you seen his profile?\nB: Yes, he has many followers.",
 funFact:"'Profilo' comes from Latin 'profilum' (outline). In Italian, it means both a social media profile and a person's side view (profile)."},

{type:"teach", trg:"condividere", src:"to share", pos:"verb", gender:null,
 note:"Irregular -ere verb. condivido, condividi, condivide.\nPast participle: condiviso.",
 example:"A: Ho condiviso la foto del tramonto.\nB: E bellissima, quanti like ha?",
 exampleSrc:"A: I shared the sunset photo.\nB: It is beautiful, how many likes does it have?",
 funFact:"'Condividere' means both to share online and to share in general. 'Condividere un appartamento' (to share an apartment) uses the same verb."},

{type:"teach", trg:"il collegamento", src:"the connection / link", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i collegamenti.\nAn internet connection or a hyperlink.",
 example:"A: Il collegamento internet e lento oggi.\nB: Prova a riavviare il router.",
 exampleSrc:"A: The internet connection is slow today.\nB: Try restarting the router.",
 funFact:"'Collegamento' also means a travel connection (bus/train). 'Link' is increasingly used in Italian for web links, but 'collegamento' remains the proper Italian term."},

{type:"teach", trg:"scaricare", src:"to download", pos:"verb", gender:null,
 note:"Regular -are verb. scarico, scarichi, scarica.\nAlso means 'to unload' (a truck, for example).",
 example:"A: Devo scaricare l'aggiornamento.\nB: Ci vuole molto tempo?",
 exampleSrc:"A: I need to download the update.\nB: Does it take long?",
 funFact:"'Scaricare' means both 'to download' and 'to discharge/unload.' A 'telefono scarico' means a phone with a dead battery, not a downloaded phone."},

{type:"teach", trg:"caricare", src:"to upload / to charge", pos:"verb", gender:null,
 note:"Regular -are verb. carico, carichi, carica.\nOpposite of scaricare. Upload or charge a battery.",
 example:"A: Ho caricato le foto sul cloud.\nB: Bene, così non le perdi.",
 exampleSrc:"A: I uploaded the photos to the cloud.\nB: Good, that way you will not lose them.",
 funFact:"'Caricare' has three digital meanings: to upload files, to charge a battery, and to load a webpage. 'La pagina non si carica' means the page is not loading."},

{type:"teach", trg:"l'aggiornamento", src:"the update", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli aggiornamenti.\nFrom 'aggiornare' (to update/bring up to date).",
 example:"A: C'e un aggiornamento del sistema.\nB: Lo installo stasera.",
 exampleSrc:"A: There is a system update.\nB: I will install it tonight.",
 funFact:"'Aggiornare' literally means 'to bring to today' (a + giorno). Software updates are 'aggiornamenti,' and staying current on news is 'tenersi aggiornati.'"},

{type:"teach", trg:"la password", src:"the password", pos:"noun", gender:"f",
 note:"Feminine noun (borrowed from English). Invariable plural.\nAlso 'la parola d'ordine' (formal).",
 example:"A: Ho dimenticato la password.\nB: Puoi fare il recupero password.",
 exampleSrc:"A: I forgot my password.\nB: You can do a password recovery.",
 funFact:"Despite having the beautiful native term 'parola d'ordine' (word of order), Italians universally use the English 'password' for digital accounts."},

{type:"teach", trg:"il sito web", src:"the website", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i siti web.\n'Sito' (site/place) + 'web.'",
 example:"A: Hai visitato il sito web del museo?\nB: Si, ci sono gli orari e i prezzi.",
 exampleSrc:"A: Have you visited the museum's website?\nB: Yes, there are the hours and prices.",
 funFact:"Italians often shorten 'sito web' to just 'sito.' The domain '.it' is Italy's country code, and Italian websites take pride in their '.it' addresses."},

{type:"teach", trg:"la notifica", src:"the notification", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le notifiche.\nFrom 'notificare' (to notify). Phone and app alerts.",
 example:"A: Ho troppe notifiche sul telefono.\nB: Disattiva quelle non importanti.",
 exampleSrc:"A: I have too many notifications on my phone.\nB: Disable the unimportant ones.",
 funFact:"'Notifica' also has a legal meaning: 'notifica giudiziaria' is a legal notice served to someone. The digital use has overtaken the legal meaning in everyday speech."},

{type:"teach", trg:"il motore di ricerca", src:"the search engine", pos:"noun", gender:"m",
 note:"Masculine noun. 'Motore' (engine) + 'di ricerca' (of search).\nGoogle, Bing, etc.",
 example:"A: Cerca sul motore di ricerca.\nB: Trovato! Era il primo risultato.",
 exampleSrc:"A: Search on the search engine.\nB: Found it! It was the first result.",
 funFact:"'Googlare' (to Google) has entered informal Italian, but purists prefer 'cercare su internet' (to search on the internet) or 'cercare sul motore di ricerca.'"},

{type:"teach", trg:"il backup", src:"the backup", pos:"noun", gender:"m",
 note:"Masculine noun (borrowed from English). Invariable.\n'Fare il backup' = to make a backup.",
 example:"A: Fai sempre il backup dei tuoi dati.\nB: Si, lo faccio ogni settimana.",
 exampleSrc:"A: Always back up your data.\nB: Yes, I do it every week.",
 funFact:"Like many tech terms, 'backup' was adopted directly from English. The Italian equivalent 'copia di sicurezza' (safety copy) exists but is used mostly in formal documentation."},

{type:"teach", trg:"l'account", src:"the account (online)", pos:"noun", gender:"m",
 note:"Masculine noun (borrowed from English). Invariable plural.\nYour digital identity on a platform.",
 example:"A: Ho creato un account nuovo.\nB: Quale nome utente hai scelto?",
 exampleSrc:"A: I created a new account.\nB: Which username did you choose?",
 funFact:"Despite having 'conto' for financial accounts, Italians use the English 'account' specifically for digital/online accounts. The two words coexist without confusion."},

{type:"teach", trg:"eliminare", src:"to delete / to eliminate", pos:"verb", gender:null,
 note:"Regular -are verb. elimino, elimini, elimina.\nTo permanently remove files, messages, or accounts.",
 example:"A: Hai eliminato le foto vecchie?\nB: Si, ho liberato due gigabyte.",
 exampleSrc:"A: Did you delete the old photos?\nB: Yes, I freed up two gigabytes.",
 funFact:"'Eliminare' in Italian covers both digital deletion and physical elimination. In cooking, 'eliminare' excess fat means to remove it. In sports, it means to knock someone out of a competition."},

{type:"teach", trg:"la privacy", src:"the privacy", pos:"noun", gender:"f",
 note:"Feminine noun (borrowed from English). Pronounced PREE-vah-see in Italian.\nData protection and personal space.",
 example:"A: La privacy online e molto importante.\nB: Attento ai dati che condividi.",
 exampleSrc:"A: Online privacy is very important.\nB: Be careful about the data you share.",
 funFact:"Italians pronounce 'privacy' with Italian phonetics. The Italian equivalent 'riservatezza' (reserve) exists for personal privacy, but 'privacy' dominates in digital contexts."},

{type:"mc", q:"Come si dice 'to download' in italiano?",
 opts:["scaricare","caricare","condividere","eliminare"],
 ans:"scaricare",
 hint:"Also means 'to unload.' A phone with a dead battery is 'scarico.'"},

{type:"fb", s:"Ho {1} le foto delle vacanze sui social.", a:["condiviso"],
 opts:["condiviso","scaricato","eliminato","caricato"],
 hint:"Past participle of the verb meaning 'to share.' Irregular form.",
 sSrc:"I {1} the vacation photos on social media."},

{type:"match", pairs:[
 {trg:"scaricare", src:"to download"},
 {trg:"caricare", src:"to upload"},
 {trg:"condividere", src:"to share"},
 {trg:"eliminare", src:"to delete"}
]},

{type:"mc", q:"Cosa fai se dimentichi la password?",
 opts:["Fai il recupero password","Elimini l'account","Scarichi l'aggiornamento","Condividi il profilo"],
 ans:"Fai il recupero password",
 hint:"The process of resetting your forgotten access code for an online account."},

{type:"fb", s:"Fai sempre il {1} dei tuoi dati importanti.", a:["backup"],
 opts:["backup","profilo","collegamento","aggiornamento"],
 hint:"A safety copy of your files. Borrowed from English.",
 sSrc:"Always make a {1} of your important data."},

{type:"mc", q:"Cosa significa 'il collegamento internet e lento'?",
 opts:["The internet connection is slow","The website is broken","The download is complete","The notification is off"],
 ans:"The internet connection is slow",
 hint:"'Collegamento' means c.... 'Lento' means s...."},

{type:"fb", s:"Ho troppe {1} sul telefono, devo disattivarle.", a:["notifiche"],
 opts:["notifiche","password","privacy","account"],
 hint:"The alerts that pop up on your phone from apps and messages.",
 sSrc:"I have too many {1} on my phone, I need to disable them."},

{type:"match", pairs:[
 {trg:"il profilo", src:"profile"},
 {trg:"il sito web", src:"website"},
 {trg:"la notifica", src:"notification"},
 {trg:"il motore di ricerca", src:"search engine"}
]}
,{type:"match",pairs:[{trg:"il collegamento",src:"the connection / link"},{trg:"la privacy",src:"the privacy"}]}]};
export default BATCH6_L1;
