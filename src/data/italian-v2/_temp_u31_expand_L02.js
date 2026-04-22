// Unit 31 Expansion. Lesson 5: La critica dei media
const LESSON_5 = {
  id:"itv2_u31l5", title:"La critica dei media", icon:"🔎", xp:15, board:true,
  steps:[
    {type:"intro", title:"La critica dei media",
     desc:"Learn vocabulary for analyzing and critiquing media content, understanding media literacy, and discussing the role of media in a democratic society.",
     goals:["Analyze media content critically","Discuss media literacy concepts","Express nuanced views on media's societal impact"]},

    {type:"teach", trg:"l'alfabetizzazione mediatica", src:"the media literacy", pos:"noun", gender:"f",
     note:"Feminine compound noun. The ability to critically analyze media messages.\nAlso: 'educazione ai media' = media education.",
     example:"A: L'alfabetizzazione mediatica dovrebbe essere insegnata a scuola.\nB: I ragazzi devono saper distinguere le fonti affidabili.",
     exampleSrc:"A: Media literacy should be taught in school.\nB: Young people must be able to distinguish reliable sources.",
     funFact:"Italy introduced 'educazione civica digitale' (digital civic education) in schools in 2020, including media literacy. However, implementation varies greatly between regions. Northern schools tend to be better equipped than southern ones."},

    {type:"teach", trg:"la narrazione", src:"the narrative / storytelling", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le narrazioni.\nHow a story is constructed and told. 'Narrazione mediatica' = media narrative.",
     example:"A: La narrazione dei media influenza la percezione pubblica.\nB: Come racconti una storia e importante quanto i fatti stessi.",
     exampleSrc:"A: Media narrative influences public perception.\nB: How you tell a story is as important as the facts themselves.",
     funFact:"Italian political communication has become increasingly focused on 'la narrazione' (the narrative). Politicians craft stories about their vision rather than listing policies. The term entered Italian media vocabulary from American political consulting."},

    {type:"teach", trg:"la retorica", src:"the rhetoric", pos:"noun", gender:"f",
     note:"Feminine noun. The art of persuasive communication.\n'Retorica politica' = political rhetoric. 'Retorico/a' (adj) = rhetorical.",
     example:"A: La retorica della paura e usata spesso in politica.\nB: Crea emozioni forti che influenzano le decisioni.",
     exampleSrc:"A: The rhetoric of fear is often used in politics.\nB: It creates strong emotions that influence decisions.",
     funFact:"Italy has a 2,500-year tradition of rhetoric, from Cicero's orations to Renaissance treatises. Today, Italian universities offer courses in 'retorica e comunicazione' that blend ancient principles with modern media analysis. The roots run deep."},

    {type:"teach", trg:"il framing", src:"the framing", pos:"noun", gender:"m",
     note:"Masculine noun. Invariable. Borrowed from English.\nHow information is presented to influence interpretation.\nItalian equivalent: 'inquadramento.'",
     example:"A: Il framing di una notizia ne cambia completamente il significato.\nB: Lo stesso fatto puo sembrare positivo o negativo a seconda di come viene presentato.",
     exampleSrc:"A: The framing of a news story completely changes its meaning.\nB: The same fact can seem positive or negative depending on how it is presented.",
     funFact:"The concept of 'framing' entered Italian media studies from American communication theory. Italian researchers use both the English term and 'inquadramento' (framing/framework). How a newspaper frames an immigration story, for example, dramatically affects reader reactions."},

    {type:"teach", trg:"lo stereotipo", src:"the stereotype", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: gli stereotipi.\nAn oversimplified, fixed idea about a group.\n'Stereotipato/a' (adj) = stereotyped.",
     example:"A: I media spesso rafforzano gli stereotipi culturali.\nB: Le rappresentazioni semplificate danneggiano la comprensione reciproca.",
     exampleSrc:"A: Media often reinforce cultural stereotypes.\nB: Simplified representations damage mutual understanding.",
     funFact:"Italy fights its own stereotypes: pasta-obsessed, hand-waving, unserious. Italian media critics study how both domestic and foreign media perpetuate 'stereotipi dell'italianita' (stereotypes of Italian-ness) and how these shape national self-image."},

    {type:"mc",
     q:"Che cos'e il 'framing' nella comunicazione mediatica?",
     opts:["Il modo in cui un'informazione viene presentata per influenzarne l'interpretazione","La cornice di un articolo online","Il formato di un programma televisivo","L'inquadratura fotografica di un'immagine"],
     ans:"Il modo in cui un'informazione viene presentata per influenzarne l'interpretazione",
     hint:"How information is packaged and presented shapes how people understand it. The same facts can lead to opposite conclusions depending on this technique."},

    {type:"teach", trg:"la bolla informativa", src:"the information bubble / filter bubble", pos:"noun", gender:"f",
     note:"Feminine compound noun. When algorithms show only content matching your views.\nAlso: 'bolla di filtro' = filter bubble. 'Camera dell'eco' = echo chamber.",
     example:"A: La bolla informativa ci isola da opinioni diverse.\nB: Vediamo solo cio che conferma le nostre idee.",
     exampleSrc:"A: The information bubble isolates us from different opinions.\nB: We only see what confirms our ideas.",
     funFact:"The Italian term 'camera dell'eco' (echo chamber) is used more than 'bolla informativa' in everyday speech. Both describe the same phenomenon: social media algorithms creating intellectual isolation by showing us only what we already agree with."},

    {type:"teach", trg:"il clickbait", src:"the clickbait", pos:"noun", gender:"m",
     note:"Masculine noun. Invariable. Borrowed from English.\nContent designed to attract clicks through misleading headlines.",
     example:"A: I titoli clickbait promettono molto ma offrono poco.\nB: 'Non crederai a quello che e successo' e un classico esempio.",
     exampleSrc:"A: Clickbait headlines promise a lot but deliver little.\nB: 'You will not believe what happened' is a classic example.",
     funFact:"Italian online media increasingly relies on clickbait to generate advertising revenue. The phrase 'Non crederete mai...' (You will never believe...) has become so overused that Italian internet culture now mocks it. Satirical sites create deliberate anti-clickbait headlines."},

    {type:"fb",
     s:"La {1} informativa ci mostra solo contenuti che confermano le nostre opinioni.",
     a:["bolla"],
     opts:["bolla","narrazione","retorica","censura"],
     hint:"A bubble created by algorithms that surrounds you with information matching your existing views, isolating you from different perspectives.",
     sSrc:"The information {1} shows us only content that confirms our opinions."},

    {type:"teach", trg:"la rappresentazione", src:"the representation", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le rappresentazioni.\nHow groups or topics are portrayed in media.\n'Rappresentazione mediatica' = media representation.",
     example:"A: La rappresentazione delle donne nei media e migliorata.\nB: Ma il percorso verso la parita e ancora lungo.",
     exampleSrc:"A: The representation of women in media has improved.\nB: But the path toward parity is still long.",
     funFact:"Italian media watchdog 'AGCOM' monitors gender representation in broadcasting. Studies show Italian TV still features more male experts and presenters. The 'Manifesto di Venezia' (2017) committed Italian journalists to non-sexist reporting language."},

    {type:"teach", trg:"il pluralismo", src:"the pluralism", pos:"noun", gender:"m",
     note:"Masculine noun. The presence of diverse voices and viewpoints in media.\n'Pluralismo informativo' = media pluralism.",
     example:"A: Il pluralismo e essenziale per una democrazia sana.\nB: Senza voci diverse, il dibattito si impoverisce.",
     exampleSrc:"A: Pluralism is essential for a healthy democracy.\nB: Without diverse voices, debate becomes impoverished.",
     funFact:"The Italian constitution protects pluralism, and AGCOM monitors media ownership concentration. Despite this, Italy's media landscape is dominated by a few large groups. The 'Media Pluralism Monitor' consistently ranks Italy as having moderate risk in media diversity."},

    {type:"mc",
     q:"Che cos'e una 'camera dell'eco' nei media digitali?",
     opts:["Una stanza insonorizzata per le registrazioni","Un ambiente in cui si sentono solo opinioni simili alle proprie, rafforzando le convinzioni esistenti","Un tipo di programma radiofonico","Una tecnica di montaggio video"],
     ans:"Un ambiente in cui si sentono solo opinioni simili alle proprie, rafforzando le convinzioni esistenti",
     hint:"Like being in a room where your own voice echoes back at you. You only hear reflections of what you already think."},

    {type:"match", pairs:[
      {trg:"alfabetizzazione mediatica", src:"media literacy"},
      {trg:"framing", src:"framing"},
      {trg:"stereotipo", src:"stereotype"},
      {trg:"bolla informativa", src:"filter bubble"},
      {trg:"pluralismo", src:"pluralism"}
    ]},

    {type:"fb",
     s:"I media spesso rafforzano gli {1} culturali invece di combatterli.",
     a:["stereotipi"],
     opts:["stereotipi","algoritmi","editoriali","sondaggi"],
     hint:"Oversimplified, fixed ideas about groups of people. Media can perpetuate these rather than challenging them.",
     sSrc:"Media often reinforce cultural {1} instead of fighting them."},

    {type:"mc",
     q:"Perche l'alfabetizzazione mediatica e importante per i giovani?",
     opts:["Per evitare completamente i social media","Per diventare giornalisti professionisti","Per saper valutare criticamente le informazioni e distinguere le fonti affidabili","Per imparare a creare contenuti virali"],
     ans:"Per saper valutare criticamente le informazioni e distinguere le fonti affidabili",
     hint:"In an era of overwhelming information, the ability to evaluate what you read, see, and hear critically is essential. Not avoiding media, but engaging with it wisely."}
  ]
};
export default LESSON_5;
