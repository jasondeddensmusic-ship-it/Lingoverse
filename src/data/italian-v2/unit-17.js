// Italian V2 Unit 17. I media e la tecnologia (Media & Technology) (B1.2)
import BATCH8_L1 from './_batch8_u17_L01.js';
import BATCH7_L1 from './_batch7_u17_L01.js';
import BATCH6_L1 from './_batch6_u17_L01.js';
import BATCH5_L02 from './_batch5_u17_L02.js';
import BATCH5_L01 from './_batch5_u17_L01.js';
import BATCH2_L02 from './_batch2_u17_L02.js';
import BATCH2_L01 from './_batch2_u17_L01.js';
import EXP_L4 from './_temp_u17_expand_L01.js';import EXP_L5 from './_temp_u17_expand_L02.js';import EXP_L6 from './_temp_u17_expand_L03.js';
// CILS/CELI B1 aligned. Media, tech devices, internet vocabulary.

const UNIT_17 = {
  n:17, lang:"it", srcLang:"en", track:"v2",
  title:"I media e la tecnologia", sub:"Media & Technology",
  icon:"📱", level:"B1.2", color:"#7B5EE8",
  lessons:[
    {id:"itv2_u17l1", title:"I mezzi di informazione", icon:"📰", xp:15, board:true, steps:[
      {type:"intro", title:"I mezzi di informazione",
       desc:"Learn Italian media vocabulary: newspapers, news broadcasts, and journalism. Italy has a rich and complex media landscape that shapes daily conversation.",
       goals:["Name types of media and news sources","Discuss news and current events","Understand Italian media terms"]},

      {type:"teach", trg:"il giornale", src:"the newspaper", pos:"noun", gender:"m",
       note:"Masculine. From 'giorno' (day). A daily publication.\n'Leggere il giornale' = to read the newspaper.",
       example:"A: Hai letto il giornale stamattina?\nB: Si, c'e un articolo interessante sulla politica.",
       exampleSrc:"A: Did you read the newspaper this morning?\nB: Yes, there is an interesting article about politics.",
       funFact:"Italy has many regional newspapers. 'La Repubblica' and 'Corriere della Sera' are the big nationals, but locals like 'Il Mattino' (Naples) or 'La Stampa' (Turin) are equally important. Italians often read the newspaper at the 'bar' (cafe) over morning coffee."},

      {type:"teach", trg:"il telegiornale", src:"the TV news / newscast", pos:"noun", gender:"m",
       note:"Masculine. Tele (television) + giornale (newspaper/journal).\nAbbreviated: il TG. 'Il TG delle otto' = the 8 o'clock news.",
       example:"A: Hai visto il telegiornale?\nB: Si, il TG delle otto. Notizie terribili.",
       exampleSrc:"A: Did you watch the news?\nB: Yes, the 8 o'clock news. Terrible news.",
       funFact:"The Italian 'telegiornale' (TG) is a cultural institution. The 8 PM news on RAI 1 (TG1) is the most watched program in Italy. Families traditionally gather for dinner at 8 and watch the TG together. Each RAI channel and private network has its own TG."},

      {type:"teach", trg:"l'articolo", src:"the article", pos:"noun", gender:"m",
       note:"Masculine. From Latin 'articulus' (small joint, section).\nAlso means 'grammar article' (il, la, lo).",
       example:"A: Hai scritto l'articolo?\nB: Si, esce domani sul giornale.",
       exampleSrc:"A: Did you write the article?\nB: Yes, it comes out tomorrow in the newspaper.",
       funFact:"'Articolo' has multiple meanings: a newspaper article, a grammatical article (il, la, lo), and a product item ('articolo sportivo' = sports item). All share the Latin root 'articulus' meaning 'a small section or part.'"},

      {type:"teach", trg:"la notizia", src:"the news (item) / piece of news", pos:"noun", gender:"f",
       note:"Feminine. Plural: le notizie. From Latin 'notitia' (knowledge).\n'Le ultime notizie' = the latest news.",
       example:"A: Hai sentito la notizia?\nB: Quale notizia? E successo qualcosa?",
       exampleSrc:"A: Did you hear the news?\nB: What news? Did something happen?",
       funFact:"Unlike English where 'news' is uncountable, Italian 'notizia' is countable: 'una notizia' (a piece of news), 'le notizie' (the news items). 'Buone notizie!' (Good news!) and 'Brutte notizie' (Bad news) are everyday expressions."},

      {type:"teach", trg:"la cronaca", src:"the news report / chronicle", pos:"noun", gender:"f",
       note:"Feminine. From Greek 'khronika' (things of time).\n'Cronaca nera' = crime news. 'Cronaca locale' = local news.",
       example:"A: La cronaca locale parla del nuovo parco.\nB: Finalmente una buona notizia!",
       exampleSrc:"A: The local news is about the new park.\nB: Finally some good news!",
       funFact:"Italian newspapers have distinct sections: 'cronaca nera' (crime news, literally 'black chronicle'), 'cronaca rosa' (celebrity gossip, literally 'pink chronicle'), 'cronaca locale' (local news), and 'cronaca sportiva' (sports news). The color coding is unique to Italian journalism."},
{type:"match",pairs:[{trg:"il telegiornale",src:"the TV news / newscast"},{trg:"l'articolo",src:"the article"},{trg:"la notizia",src:"the news (item) / piece of news"},{trg:"la cronaca",src:"the news report / chronicle"}]},

      {type:"teach", trg:"l'editoriale", src:"the editorial / opinion piece", pos:"noun", gender:"m",
       note:"Masculine. From 'editore' (editor, publisher).\nAn opinion article by the editor or a prominent writer.",
       example:"A: L'editoriale di oggi critica il governo.\nB: L'editorialista ha sempre opinioni forti.",
       exampleSrc:"A: Today's editorial criticizes the government.\nB: The editorialist always has strong opinions.",
       funFact:"Italian newspapers are known for their strong editorial voices. Each major paper has a recognizable political leaning. 'La Repubblica' leans center-left, 'Il Giornale' leans right, 'Il Sole 24 Ore' focuses on business. Readers often choose based on editorial alignment."},

      {type:"teach", trg:"il giornalista", src:"the journalist", pos:"noun", gender:"m",
       note:"Masculine/feminine: il/la giornalista. From 'giornale.'\n-ista endings are invariable for gender.",
       example:"A: Il giornalista ha intervistato il sindaco.\nB: Ho visto l'intervista in televisione.",
       exampleSrc:"A: The journalist interviewed the mayor.\nB: I saw the interview on television.",
       funFact:"Italian journalists must pass a state exam and register with the 'Ordine dei Giornalisti' (Order of Journalists) to practice professionally. There are two levels: 'giornalista professionista' (full professional) and 'pubblicista' (part-time contributor). This regulation is unique in Europe."},

      {type:"teach", trg:"l'intervista", src:"the interview", pos:"noun", gender:"f",
       note:"Feminine. From English 'interview' via French.\n'Fare un'intervista' = to conduct an interview.",
       example:"A: L'intervista era molto interessante.\nB: Si, il giornalista ha fatto domande difficili.",
       exampleSrc:"A: The interview was very interesting.\nB: Yes, the journalist asked difficult questions.",
       funFact:"'Intervista' entered Italian from English via French. Italian talk shows ('programmi televisivi') feature long, in-depth interviews that would be unusual in American TV. Italian hosts often let guests speak for several minutes without interruption."},

      // Quiz steps
      {type:"mc", q:"What is 'il telegiornale'?",
       opts:["The TV broadcast of the giornale","The printed daily newspaper delivered to homes","The monthly magazine supplement","The morning radio program"],
       ans:"The TV broadcast of the giornale",
       hint:"A compound noun: 'tele-' means television and the second half is a daily publication. Abbreviated as TG."},

      {type:"fb", s:"Hai letto il {1} stamattina?",
       a:["giornale"],
       opts:["giornale","telegiornale","articolo","editoriale"],
       hint:"This is the printed daily publication you read with morning coffee. From 'giorno' (day).",
       sSrc:"Did you read the {1} this morning?"},

      {type:"match", pairs:[
        {trg:"il giornale", src:"the newspaper"},
        {trg:"la notizia", src:"a piece of news"},
        {trg:"la cronaca", src:"the news report"},
        {trg:"l'editoriale", src:"the editorial"},
        {trg:"l'intervista", src:"the interview"}
      ]},

      {type:"mc", q:"What is 'la cronaca nera'?",
       opts:["Evening news","Crime news","Sports news","Celebrity gossip"],
       ans:"Crime news",
       hint:"'Nera' means 'black.' Italian journalism uses colors for sections: black for c..., pink for gossip."},

      {type:"fb", s:"Il {1} ha intervistato il sindaco.",
       a:["giornalista"],
       opts:["giornalista","articolo","editoriale","telegiornale"],
       hint:"This person conducts interviews and writes articles. They must register with the Ordine dei Giornalisti.",
       sSrc:"The {1} interviewed the mayor."},

      {type:"mc", q:"How is Italian 'notizia' different from English 'news'?",
       opts:["It is uncountable like English 'news'","It is always used in the plural form","It is countable: una notizia, due notizie","It only refers to negative news events"],
       ans:"It is countable: una notizia, due notizie",
       hint:"In English, 'news' cannot be counted. In Italian you can attach a singular or plural article: 'una' (one) or 'le' (the, plural)."},

      {type:"fb", s:"L'{1} di oggi critica il governo.",
       a:["editoriale"],
       opts:["editoriale","articolo","intervista","notizia"],
       hint:"This is an opinion piece written by the editor or a prominent writer. It expresses a point of view.",
       sSrc:"Today's {1} criticizes the government."},

      {type:"mc", q:"What does 'l'articolo' mean in a newspaper context?",
       opts:["An interview","A grammar article","A product for sale","A written article / piece"],
       ans:"A written article / piece",
       hint:"From Latin 'articulus' (small section). In a newspaper, it is a w... text on a specific topic."}
    ]},

    {id:"itv2_u17l2", title:"La tecnologia", icon:"💻", xp:15, board:true, steps:[
      {type:"intro", title:"La tecnologia",
       desc:"Learn the Italian words for technology devices and digital actions. From screens to keyboards, these terms are essential for modern life in Italy.",
       goals:["Name common tech devices and parts","Describe digital actions","Discuss technology in Italian"]},

      {type:"teach", trg:"lo schermo", src:"the screen", pos:"noun", gender:"m",
       note:"Masculine. Plural: gli schermi. From Germanic 'skirmjan' (to protect).\nOriginally meant 'shield,' then 'screen.'",
       example:"A: Lo schermo del telefono e rotto.\nB: Puoi farlo riparare in centro.",
       exampleSrc:"A: The phone screen is broken.\nB: You can get it repaired downtown.",
       funFact:"'Schermo' originally meant 'shield' (something that screens/protects). It evolved to mean any flat surface that displays images. 'Il grande schermo' (the big screen) means cinema, while 'il piccolo schermo' (the small screen) means television."},

      {type:"teach", trg:"la tastiera", src:"the keyboard", pos:"noun", gender:"f",
       note:"Feminine. From 'tasto' (key, button).\n'Tastiera QWERTY' is standard in Italy too.",
       example:"A: La tastiera del portatile non funziona.\nB: Prova a riavviare il computer.",
       exampleSrc:"A: The laptop keyboard is not working.\nB: Try restarting the computer.",
       funFact:"Italian keyboards have a QWERTY layout but include accented letters (e, a, o, u, i with various accents) that replace some punctuation keys. Typing '@' requires Alt Gr + a specific key. The Italian keyboard layout subtly reflects the language's accent-heavy writing system."},

      {type:"teach", trg:"l'applicazione", src:"the application / app", pos:"noun", gender:"f",
       note:"Feminine. Often shortened to 'l'app' (feminine: un'app).\nFrom Latin 'applicatio' (attachment).",
       example:"A: Quale app usi per le foto?\nB: Ho scaricato un'applicazione nuova.",
       exampleSrc:"A: Which app do you use for photos?\nB: I downloaded a new application.",
       funFact:"Italians commonly use the shortened form 'app' (pronounced as in English). It is feminine because the full word 'applicazione' is feminine. So: 'un'app' (an app), 'le app' (the apps). Italy has a strong app development community, especially in Milan and Rome."},

      {type:"teach", trg:"l'aggiornamento", src:"the update", pos:"noun", gender:"m",
       note:"Masculine. From 'aggiornare' (to update, to bring up to date).\n'Aggiornare' literally means 'to bring to the day' (giorno).",
       example:"A: C'e un aggiornamento del sistema.\nB: Lo installo stasera.",
       exampleSrc:"A: There is a system update.\nB: I will install it tonight.",
       funFact:"'Aggiornare' literally breaks down to 'a-giorno-are' (to bring to the day). The same verb is used for meetings: 'La riunione e stata aggiornata' means 'The meeting has been postponed/adjourned.' Context determines whether it means 'update' or 'adjourn.'"},

      {type:"teach", trg:"scaricare", src:"to download", pos:"verb", gender:null,
       note:"Regular -are verb. Opposite: caricare (to upload/charge).\nLiterally 'to unload.'",
       example:"A: Ho scaricato il film.\nB: Legalmente, spero!",
       exampleSrc:"A: I downloaded the movie.\nB: Legally, I hope!",
       funFact:"'Scaricare' literally means 'to unload' (as in unloading a truck). In tech, it means 'to download.' The opposite 'caricare' means both 'to upload' and 'to charge' (a battery). 'Caricare il telefono' = to charge the phone. 'Caricare un file' = to upload a file."},
{type:"match",pairs:[{trg:"la tastiera",src:"the keyboard"},{trg:"l'applicazione",src:"the application / app"},{trg:"l'aggiornamento",src:"the update"},{trg:"scaricare",src:"to download"}]},

      {type:"teach", trg:"caricare", src:"to upload / to charge", pos:"verb", gender:null,
       note:"Regular -are verb. 'Caricare la batteria' = to charge the battery.\n'Caricare un video' = to upload a video.",
       example:"A: Devo caricare il telefono.\nB: C'e una presa qui vicino.",
       exampleSrc:"A: I need to charge my phone.\nB: There is an outlet nearby.",
       funFact:"'Caricare' means 'to load' in all senses: load a truck, load a gun, charge a battery, upload a file. Italian uses one verb where English uses several. 'Il caricatore' means both 'charger' (for phones) and 'magazine' (for firearms)."},

      {type:"teach", trg:"il portatile", src:"the laptop", pos:"noun", gender:"m",
       note:"Masculine. Short for 'computer portatile' (portable computer).\n'Il fisso' = desktop computer.",
       example:"A: Hai portato il portatile?\nB: Si, e nello zaino.",
       exampleSrc:"A: Did you bring the laptop?\nB: Yes, it is in the backpack.",
       funFact:"Italians say 'il portatile' for laptop and 'il fisso' for desktop (literally 'the fixed one'). The word 'computer' is used as-is in Italian (masculine, invariable). 'Il PC' (pronounced 'pi-ci') is also very common in everyday speech."},

      {type:"teach", trg:"il collegamento", src:"the connection / link", pos:"noun", gender:"m",
       note:"Masculine. From 'collegare' (to connect, to link).\n'Collegamento internet' = internet connection.",
       example:"A: Il collegamento internet e lento.\nB: Prova a riavviare il router.",
       exampleSrc:"A: The internet connection is slow.\nB: Try restarting the router.",
       funFact:"Italy historically lagged behind in broadband internet, especially in rural areas. The 'digital divide' between north and south has been a major political issue. Italy invested heavily in fiber optics after 2020, but some rural areas still rely on slower connections."},

      // Quiz steps
      {type:"mc", q:"What does 'scaricare' mean in technology?",
       opts:["To download","To upload files to a server","To charge","To delete"],
       ans:"To download",
       hint:"Literally 'to unload.' The opposite of 'caricare.' You bring data from the internet to your device."},

      {type:"fb", s:"Lo {1} del telefono e rotto.",
       a:["schermo"],
       opts:["schermo","tastiera","portatile","collegamento"],
       hint:"This is the flat surface you look at on your phone. It displays images and text. Originally meant 'shield.'",
       sSrc:"The phone {1} is broken."},

      {type:"match", pairs:[
        {trg:"lo schermo", src:"the screen"},
        {trg:"la tastiera", src:"the keyboard"},
        {trg:"l'applicazione", src:"the app"},
        {trg:"scaricare", src:"to download"},
        {trg:"caricare", src:"to upload / charge"}
      ]},

      {type:"mc", q:"What does 'caricare' mean?",
       opts:["Only to upload a file to a remote server","To upload or to charge a battery","Only to charge a device","To delete something permanently"],
       ans:"To upload or to charge a battery",
       hint:"This verb means 'to load' in all its senses. It works for sending a file, powering a device, or loading a truck. Context decides."},

      {type:"fb", s:"C'e un {1} del sistema. Installalo.",
       a:["aggiornamento"],
       opts:["aggiornamento","collegamento","schermo","portatile"],
       hint:"The system needs to be brought up to date. From 'aggiornare' (to bring to the day).",
       sSrc:"There is a system {1}. Install it."},

      {type:"mc", q:"What is 'il portatile' in Italian?",
       opts:["A tablet device","A portable radio receiver","A laptop computer you carry","A portable external battery charger"],
       ans:"A laptop computer you carry",
       hint:"Short for 'portatile' (portable). The stationary desk version is called 'il fisso' (the fixed one)."},

      {type:"fb", s:"Ho scaricato un'{1} nuova per le foto.",
       a:["applicazione"],
       opts:["applicazione","aggiornamento","intervista","articolo"],
       hint:"This is a program you install on your phone. Often shortened to 'app.' Feminine noun.",
       sSrc:"I downloaded a new {1} for photos."},

      {type:"mc", q:"What has been a major tech issue in Italy?",
       opts:["Keyboards lacking accent keys for typing","An overload of smartphones causing infrastructure strain","A complete absence of TV channels in remote areas","The connectivity gap dividing north from south"],
       ans:"The connectivity gap dividing north from south",
       hint:"Rural areas historically had slower internet access. Fiber optics investment after 2020 aimed to close the digital divide."}
    ]},

    {id:"itv2_u17l3", title:"Online", icon:"🌐", xp:15, board:true, steps:[
      {type:"intro", title:"Online",
       desc:"Learn internet and social media vocabulary in Italian. Many tech words are borrowed from English, but Italians have their own way of using and adapting them.",
       goals:["Use internet vocabulary in Italian","Discuss social media and online activities","Understand borrowed English tech terms"]},

      {type:"teach", trg:"il sito web", src:"the website", pos:"noun", gender:"m",
       note:"Masculine. 'Sito' means 'site' or 'place.' Often just 'il sito.'\nFrom Latin 'situs' (place, position).",
       example:"A: Hai visto il loro sito web?\nB: Si, e molto ben fatto.",
       exampleSrc:"A: Have you seen their website?\nB: Yes, it is very well made.",
       funFact:"Italians often drop 'web' and simply say 'il sito.' Italian websites use the country code '.it' (like .uk for Britain). The Italian internet regulator is called 'Registro.it' and manages all .it domain names from Pisa, where the first Italian internet connection was established."},

      {type:"teach", trg:"la rete", src:"the network / the internet", pos:"noun", gender:"f",
       note:"Feminine. Literally 'the net.' 'In rete' = online.\nAlso means a physical net (fishing, tennis).",
       example:"A: L'ho trovato in rete.\nB: Su quale sito?",
       exampleSrc:"A: I found it online.\nB: On which website?",
       funFact:"'La rete' literally means 'the net,' making it a perfect translation for 'the internet' (interconnected networks). Italians also say 'la Rete' (capitalized) specifically for the internet. 'Navigare in rete' (to surf the net) is the standard expression for browsing."},

      {type:"teach", trg:"la password", src:"the password", pos:"noun", gender:"f",
       note:"Feminine. Borrowed directly from English.\nPronounced 'PASSword' with Italian phonetics.",
       example:"A: Ho dimenticato la password.\nB: Clicca su 'password dimenticata.'",
       exampleSrc:"A: I forgot the password.\nB: Click on 'forgot password.'",
       funFact:"'Password' is used as-is in Italian and is feminine (because 'la parola,' the Italian word for 'word,' is feminine). Many English tech words keep their original form in Italian: password, mouse, file, link, blog. They follow Italian grammar rules for gender and plurals."},

      {type:"teach", trg:"l'account", src:"the account", pos:"noun", gender:"m",
       note:"Masculine. Borrowed from English. Pronounced 'ah-COWNT.'\nItalian alternative: il profilo (profile).",
       example:"A: Hai creato un account?\nB: Si, con la mia email personale.",
       exampleSrc:"A: Did you create an account?\nB: Yes, with my personal email.",
       funFact:"'Account' is masculine in Italian (like most borrowed English nouns). The plural follows English: 'gli account' (not 'gli accounti'). For social media, 'il profilo' (profile) is the preferred Italian word. 'Seguire un account' = to follow an account."},

      {type:"teach", trg:"condividere", src:"to share (online)", pos:"verb", gender:null,
       note:"Irregular -ere verb. Past participle: condiviso.\n'Condividere un post' = to share a post.",
       example:"A: Hai condiviso l'articolo?\nB: Si, l'ho condiviso sui social.",
       exampleSrc:"A: Did you share the article?\nB: Yes, I shared it on social media.",
       funFact:"'Condividere' was used long before social media existed. It means 'to share' in any context: sharing a meal, an apartment, or an opinion. Social media gave it a new digital meaning. The past participle 'condiviso' is irregular (not 'condividuto')."},
{type:"match",pairs:[{trg:"la rete",src:"the network / the internet"},{trg:"la password",src:"the password"},{trg:"l'account",src:"the account"},{trg:"condividere",src:"to share (online)"}]},

      {type:"teach", trg:"postare", src:"to post (online)", pos:"verb", gender:null,
       note:"Regular -are verb. Adapted from English 'to post.'\n'Postare una foto' = to post a photo. Very informal.",
       example:"A: Hai postato le foto della vacanza?\nB: Si, su Instagram.",
       exampleSrc:"A: Did you post the vacation photos?\nB: Yes, on Instagram.",
       funFact:"'Postare' is an Italianized English verb. Purists prefer 'pubblicare' (to publish), but 'postare' has won in everyday speech. Italian adapts many English verbs by adding -are: 'cliccare' (to click), 'chattare' (to chat), 'googlare' (to Google)."},

      {type:"teach", trg:"cercare su internet", src:"to search online", pos:"verb", gender:null,
       note:"'Cercare' = to search. 'Su internet' = on the internet.\nAlternative: 'googlare' (to Google, very informal).",
       example:"A: Cerca su internet il ristorante piu vicino.\nB: Ho trovato! E a duecento metri.",
       exampleSrc:"A: Search online for the nearest restaurant.\nB: Found it! It is two hundred meters away.",
       funFact:"While 'cercare su internet' is standard, 'googlare' (to Google) is widely understood. The Zingarelli dictionary, Italy's most authoritative, officially included 'googlare' in 2017. Other accepted Italianized tech verbs include 'twittare' (to tweet) and 'whatsappare' (to WhatsApp)."},

      {type:"teach", trg:"i social", src:"social media", pos:"noun", gender:"m",
       note:"Masculine plural. Short for 'i social media' or 'i social network.'\n'Sui social' = on social media.",
       example:"A: Passi troppo tempo sui social.\nB: Lo so, devo staccare un po'.",
       exampleSrc:"A: You spend too much time on social media.\nB: I know, I need to disconnect a bit.",
       funFact:"Italians are among the most active social media users in Europe. The most popular platforms are WhatsApp, Instagram, Facebook, and TikTok. 'I social' as a shortened term is universally understood. 'Influencer' is used as-is in Italian, though 'creatore di contenuti' (content creator) is the formal alternative."},

      // Quiz steps
      {type:"mc", q:"What does 'la rete' mean in a technology context?",
       opts:["The internet / network","The screen","The keyboard","The password"],
       ans:"The internet / network",
       hint:"Literally 'the net.' 'Navigare in rete' means to browse the i.... The same word also means a physical net."},

      {type:"fb", s:"Ho dimenticato la {1} del mio account.",
       a:["password"],
       opts:["password","rete","tastiera","applicazione"],
       hint:"This secret word protects your account. Borrowed directly from English. Feminine in Italian.",
       sSrc:"I forgot the {1} for my account."},

      {type:"match", pairs:[
        {trg:"il sito web", src:"the website"},
        {trg:"la rete", src:"the network / internet"},
        {trg:"la password", src:"the password"},
        {trg:"condividere", src:"to share"},
        {trg:"postare", src:"to post"}
      ]},

      {type:"mc", q:"What is 'googlare' in Italian?",
       opts:["A type of pasta dish","An Italianized action word meaning to Google / search online","A popular computer brand name","A well-known Italian search engine"],
       ans:"An Italianized action word meaning to Google / search online",
       hint:"English verbs are adapted by adding -are: click > cliccare, chat > chattare, tweet > twittare. The same pattern applies here."},

      {type:"fb", s:"Hai {1} le foto della vacanza sui social?",
       a:["postato"],
       opts:["postato","scaricato","caricato","cercato"],
       hint:"You published photos on social media for others to see. This Italianized English verb means 'to post.'",
       sSrc:"Did you {1} the vacation photos on social media?"},

      {type:"mc", q:"How do Italians say 'social media' in everyday speech?",
       opts:["Le reti sociali","I media sociali","I social","I socialmedia"],
       ans:"I social",
       hint:"The shortened form is universally understood. It is masculine plural. 'Sui s...' means 'on s... media.'"},

      {type:"fb", s:"Hai {1} l'articolo sui social?",
       a:["condiviso"],
       opts:["condiviso","postato","scaricato","cercato"],
       hint:"You shared the article with others online. This irregular past participle ends in -viso, not -viduto.",
       sSrc:"Did you {1} the article on social media?"},

      {type:"mc", q:"Why is 'la password' feminine in Italian?",
       opts:["Because it ends in a consonant sound","Because all English loanwords are feminine","Because passwords are always kept secret","Because 'parola' (word) is feminine"],
       ans:"Because 'parola' (word) is feminine",
       hint:"Italian assigns gender to English loans based on the nearest native equivalent. An access code takes its grammatical gender from whichever Italian noun it most resembles."}
    ]}
  ]
};
export default UNIT_17;
