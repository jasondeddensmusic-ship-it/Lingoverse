// Unit 17 Expansion. Lesson 4: Social Media
const LESSON_4 = {
  id:"itv2_u17l4", title:"I social media", icon:"📲", xp:15, board:true,
  steps:[
    {type:"intro", title:"I social media",
     desc:"Dive into Italian social media vocabulary: followers, likes, stories, and the culture of online interaction. Italy is one of Europe's most active social media markets.",
     goals:["Use social media vocabulary in Italian","Discuss online behavior and trends","Understand Italianized English tech terms"]},

    {type:"teach", trg:"il follower", src:"the follower", pos:"noun", gender:"m",
     note:"Masculine. Borrowed from English. Plural: i follower.\n'Avere molti follower' = to have many followers.",
     example:"A: Quanti follower hai su Instagram?\nB: Circa duemila. E tu?",
     exampleSrc:"A: How many followers do you have on Instagram?\nB: About two thousand. And you?",
     funFact:"'Follower' is used as-is in Italian. The Italian alternative 'seguace' exists but sounds too serious (it means 'disciple'). 'Seguire' (to follow) is the verb: 'Ti seguo su Instagram' (I follow you on Instagram). Italian influencers are called 'influencer' with no translation."},

    {type:"teach", trg:"il like", src:"the like", pos:"noun", gender:"m",
     note:"Masculine. Borrowed from English. Plural: i like.\n'Mettere un like' = to give a like.",
     example:"A: Hai messo un like alla mia foto?\nB: Si! Bellissima foto.",
     exampleSrc:"A: Did you give a like to my photo?\nB: Yes! Beautiful photo.",
     funFact:"'Mettere un like' (to put a like) is the standard Italian phrase. The Italian alternative 'mi piace' (I like it) is what Facebook originally used for its Italian button. Some people say 'mettere un mi piace,' mixing both languages in a uniquely Italian hybrid."},

    {type:"teach", trg:"la storia", src:"the story (social media)", pos:"noun", gender:"f",
     note:"Feminine. Same word as 'history/story.'\n'Mettere una storia' = to post a story.",
     example:"A: Hai visto la mia storia di oggi?\nB: Si, eri al mare? Che bello!",
     exampleSrc:"A: Did you see my story today?\nB: Yes, you were at the sea? How nice!",
     funFact:"Instagram and WhatsApp Stories are hugely popular in Italy. 'Mettere una storia' (to post a story) and 'guardare le storie' (to watch stories) are everyday phrases. WhatsApp is the dominant messaging app, and Italians share stories there as frequently as on Instagram."},

    {type:"teach", trg:"il profilo", src:"the profile", pos:"noun", gender:"m",
     note:"Masculine. 'Profilo pubblico' = public profile.\n'Profilo privato' = private profile.",
     example:"A: Il tuo profilo e pubblico o privato?\nB: Privato. Solo gli amici possono vedere.",
     exampleSrc:"A: Is your profile public or private?\nB: Private. Only friends can see.",
     funFact:"Many young Italians maintain multiple profiles: a 'profilo ufficiale' (official profile) with their real name and a 'finsta' (fake Instagram, from English slang) for closer friends. 'Profilo' is preferred over the English 'account' when discussing social media specifically."},

    {type:"teach", trg:"il contenuto", src:"the content", pos:"noun", gender:"m",
     note:"Masculine. Plural: i contenuti.\n'Creare contenuti' = to create content. 'Contenuto virale' = viral content.",
     example:"A: Che tipo di contenuti pubblichi?\nB: Foto di viaggi e ricette italiane.",
     exampleSrc:"A: What type of content do you publish?\nB: Travel photos and Italian recipes.",
     funFact:"'Creatore di contenuti' (content creator) is the formal Italian term for what most people call an 'influencer.' Italian content creation is strong in food ('foodblogger'), fashion ('fashion blogger'), and travel. Milan is the influencer capital of Italy."},

    {type:"teach", trg:"il commento", src:"the comment", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'commentum' (invention, note).\n'Lasciare un commento' = to leave a comment.",
     example:"A: Hai letto i commenti sotto il post?\nB: Si, alcuni sono molto cattivi.",
     exampleSrc:"A: Did you read the comments under the post?\nB: Yes, some are very mean.",
     funFact:"Italian social media comments can be extremely passionate. Political discussions and football debates generate the most heated exchanges. 'Hater' (used as-is in Italian) and 'troll' are common terms. Italy passed cyberbullying laws in 2017 to protect minors."},

    {type:"teach", trg:"diventare virale", src:"to go viral", pos:"verb", gender:null,
     note:"'Virale' = viral. 'Un video virale' = a viral video.\n'E diventato virale' = it went viral.",
     example:"A: Il video del gatto e diventato virale!\nB: Ha gia un milione di visualizzazioni.",
     exampleSrc:"A: The cat video went viral!\nB: It already has a million views.",
     funFact:"'Virale' was adopted directly from the medical term into social media Italian. 'Visualizzazioni' (views), 'condivisioni' (shares), and 'interazioni' (interactions) are the metrics Italians discuss. Italian viral content often involves food controversies, like the outrage over pineapple on pizza."},

    {type:"teach", trg:"la notifica", src:"the notification", pos:"noun", gender:"f",
     note:"Feminine. From 'notificare' (to notify).\n'Disattivare le notifiche' = to turn off notifications.",
     example:"A: Ricevo troppe notifiche!\nB: Disattivale nelle impostazioni.",
     exampleSrc:"A: I receive too many notifications!\nB: Turn them off in the settings.",
     funFact:"'Notifica' is used for both app notifications and legal notifications (official documents). The double meaning can cause momentary panic: 'Ho ricevuto una notifica' could mean your friend liked your photo or the tax office sent you a letter. Context is everything."},

    {type:"teach", trg:"la privacy", src:"privacy", pos:"noun", gender:"f",
     note:"Feminine. Borrowed from English. Pronounced 'PRIH-vah-see.'\n'Impostazioni sulla privacy' = privacy settings.",
     example:"A: Le impostazioni sulla privacy sono importanti.\nB: Si, non condividere troppe informazioni personali.",
     exampleSrc:"A: Privacy settings are important.\nB: Yes, don't share too much personal information.",
     funFact:"'Privacy' entered Italian from English and is feminine. Italy has strong data protection laws under the EU's GDPR ('Regolamento generale sulla protezione dei dati'). The Italian 'Garante della Privacy' (Privacy Guarantor) actively fines companies for violations."},

    // Quiz steps
    {type:"mc", q:"How do Italians say 'to give a like' on social media?",
     opts:["Mettere un like","Fare un pollice","Cliccare un bene","Dare un cuore"],
     ans:"Mettere un like",
     hint:"'M...' means 'to put.' The English noun 'l...' is used directly. Some also say 'm... un mi piace.'"},

    {type:"fb", s:"Hai visto la mia {1} di oggi su Instagram?",
     a:["storia"],
     opts:["storia","notifica","privacy","password"],
     hint:"This disappearing content format shows photos and videos for 24 hours. Same Italian word as 'story' or 'history.'",
     sSrc:"Did you see my {1} today on Instagram?"},

    {type:"match", pairs:[
      {trg:"il follower", src:"the follower"},
      {trg:"il like", src:"the like"},
      {trg:"il commento", src:"the comment"},
      {trg:"la notifica", src:"the notification"},
      {trg:"la privacy", src:"privacy"}
    ]},

    {type:"mc", q:"What does 'diventare virale' mean?",
     opts:["To catch a computer virus","To become popular and spread rapidly online","To get sick from using social media too much","To create a social media account"],
     ans:"To become popular and spread rapidly online",
     hint:"'Virale' was borrowed from medicine. Content that spreads like an infection across the internet."},

    {type:"fb", s:"Che tipo di {1} pubblichi sui social?",
     a:["contenuti"],
     opts:["contenuti","follower","profili","notifiche"],
     hint:"The photos, videos, and text you create and share online. 'Creatore di c...' is the formal term for influencer.",
     sSrc:"What type of {1} do you publish on social media?"},

    {type:"mc", q:"What is the 'Garante della Privacy' in Italy?",
     opts:["A feature that hides your online profile","A social media platform for private messaging","An authority that enforces data protection laws","A private security company for celebrities"],
     ans:"An authority that enforces data protection laws",
     hint:"This government body oversees compliance with EU d... p... rules and can issue fines to companies."},

    {type:"fb", s:"Ricevo troppe {1}. Devo disattivarle.",
     a:["notifiche"],
     opts:["notifiche","storie","password","foto"],
     hint:"These alerts from apps keep interrupting you. You can turn them off in the settings.",
     sSrc:"I receive too many {1}. I need to turn them off."},

    {type:"mc", q:"Why does Italian social media use so many English words?",
     opts:["The Italian government mandates English for digital terms","Italian lacks words for technology concepts","English words are shorter and easier to type","Italian adapts English tech terms naturally with Italian grammar rules"],
     ans:"Italian adapts English tech terms naturally with Italian grammar rules",
     hint:"I... adds its own g...: gender ('il like,' masculine), verb forms ('postare'), and plurals. It is natural language evolution."}
  ]
};
export default LESSON_4;
