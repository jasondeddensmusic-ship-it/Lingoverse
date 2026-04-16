// Batch 7 — Unit 31 extra lesson. I media avanzati: Fake News & Media Literacy
const BATCH7_L1 = {id:"itv2_u31l_b7_1", title:"Le notizie false e l'alfabetizzazione mediatica", icon:"\u{1F4F0}", xp:15, board:true, steps:[
{type:"intro", title:"Le notizie false e l'alfabetizzazione mediatica",
 desc:"Learn vocabulary for discussing fake news, media literacy, and critical thinking about information.",
 goals:["Identify and discuss fake news concepts","Talk about media credibility","Express critical views on information sources"]},

{type:"teach", trg:"la notizia falsa", src:"fake news", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le notizie false.\nAlso: 'bufala' (hoax) and 'disinformazione' (disinformation).",
 example:"A: Questa notizia e falsa.\nB: Come lo sai? Verifica la fonte.",
 exampleSrc:"A: This news is fake.\nB: How do you know? Check the source.",
 funFact:"Italians use 'bufala' (literally: buffalo/joke) for hoaxes. 'E una bufala!' = It is a hoax! The word predates social media by centuries."},

{type:"teach", trg:"la fonte", src:"the source", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le fonti.\n'Fonte attendibile' = reliable source.",
 example:"A: Qual e la fonte di questa informazione?\nB: Un articolo del Corriere della Sera.",
 exampleSrc:"A: What is the source of this information?\nB: An article from Corriere della Sera.",
 funFact:"'Fonte' means both source (of information) and fountain (of water). Italian journalism uses 'fonti anonime' (anonymous sources) frequently, a practice that generates debate."},

{type:"teach", trg:"verificare", src:"to verify / to fact-check", pos:"verb", gender:null,
 note:"Regular -are verb. verifico, verifichi, verifica.\n'La verifica' = verification.",
 example:"A: Bisogna sempre verificare le notizie.\nB: Specialmente sui social media.",
 exampleSrc:"A: You must always verify news.\nB: Especially on social media.",
 funFact:"Italy has several fact-checking organizations: 'Pagella Politica' checks political claims, and 'Facta' verifies viral content. Media literacy is increasingly taught in Italian schools."},

{type:"teach", trg:"la credibilita", src:"credibility", pos:"noun", gender:"f",
 note:"Feminine noun. 'Credibile' = credible.\n'Perdere credibilita' = to lose credibility.",
 example:"A: Quel giornale ha perso credibilita.\nB: Per colpa di articoli imprecisi.",
 exampleSrc:"A: That newspaper lost credibility.\nB: Because of inaccurate articles.",
 funFact:"Italy ranks relatively low in press freedom indexes, partly due to media ownership concentration. Silvio Berlusconi's ownership of TV channels while being PM was a major 'credibilita' debate."},

{type:"teach", trg:"il pregiudizio", src:"prejudice / bias", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i pregiudizi.\nLiterally: 'pre-judgment.'",
 example:"A: I pregiudizi influenzano le nostre opinioni.\nB: Dobbiamo esserne consapevoli.",
 exampleSrc:"A: Prejudices influence our opinions.\nB: We must be aware of them.",
 funFact:"'Pregiudizio' works for both media bias and social prejudice. 'Pregiudizio di conferma' = confirmation bias. Understanding this concept is key to media literacy."},

{type:"teach", trg:"la propaganda", src:"propaganda", pos:"noun", gender:"f",
 note:"Feminine noun. Information used to promote a particular cause or viewpoint.\n'Fare propaganda' = to spread propaganda.",
 example:"A: Non confondere l'informazione con la propaganda.\nB: Sono due cose molto diverse.",
 exampleSrc:"A: Do not confuse information with propaganda.\nB: They are two very different things.",
 funFact:"The Vatican created the 'Congregatio de Propaganda Fide' in 1622, giving the world the word 'propaganda.' Originally neutral, it acquired negative connotations in the 20th century."},

{type:"teach", trg:"la manipolazione", src:"manipulation", pos:"noun", gender:"f",
 note:"Feminine noun. 'Manipolare' = to manipulate.\n'Manipolazione mediatica' = media manipulation.",
 example:"A: La manipolazione delle immagini e facile con la tecnologia.\nB: Per questo servono gli strumenti per riconoscerla.",
 exampleSrc:"A: Image manipulation is easy with technology.\nB: That is why tools to recognize it are needed.",
 funFact:"'Manipolazione' comes from Latin 'manus' (hand). Originally it meant handling with hands. The metaphorical meaning of controlling information or people developed later."},

{type:"teach", trg:"la trasparenza", src:"transparency", pos:"noun", gender:"f",
 note:"Feminine noun. 'Trasparente' = transparent.\n'Trasparenza istituzionale' = institutional transparency.",
 example:"A: Chiediamo piu trasparenza ai media.\nB: Il pubblico ha diritto all'informazione.",
 exampleSrc:"A: We demand more transparency from the media.\nB: The public has a right to information.",
 funFact:"'Trasparenza' is a key word in Italian public discourse. FOIA (Freedom of Information Act) was adopted in Italy in 2016, giving citizens the right to access government data."},

{type:"teach", trg:"il titolo sensazionalistico", src:"clickbait / sensationalist headline", pos:"noun", gender:"m",
 note:"Masculine noun. 'Sensazionalismo' = sensationalism.\nHeadlines designed to shock and attract clicks.",
 example:"A: Non fidarti dei titoli sensazionalistici.\nB: Leggi sempre l'articolo completo.",
 exampleSrc:"A: Do not trust sensationalist headlines.\nB: Always read the full article.",
 funFact:"Italian media has a long tradition of dramatic headlines. 'Strillone' (literally: screamer) was the word for newsboys who shouted headlines. The tradition continues online."},

{type:"teach", trg:"l'algoritmo", src:"the algorithm", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli algoritmi.\nThe code that determines what content you see online.",
 example:"A: L'algoritmo decide cosa vedi sui social.\nB: Crea una bolla informativa.",
 exampleSrc:"A: The algorithm decides what you see on social media.\nB: It creates an information bubble.",
 funFact:"'Algoritmo' comes from the name of the 9th-century Persian mathematician Al-Khwarizmi. His work was translated in medieval Italy, giving the world both 'algorithm' and 'algebra.'"},

{type:"teach", trg:"la bolla informativa", src:"information bubble / filter bubble", pos:"noun", gender:"f",
 note:"Feminine noun. When algorithms show you only what you already agree with.\n'Bolla' = bubble.",
 example:"A: Viviamo in una bolla informativa.\nB: Bisogna cercare fonti diverse.",
 exampleSrc:"A: We live in an information bubble.\nB: We need to seek diverse sources.",
 funFact:"'Bolla informativa' translates the English 'filter bubble.' The Italian metaphor works perfectly: a bubble that isolates you from different viewpoints. 'Scoppiare la bolla' = to burst the bubble."},

{type:"teach", trg:"l'opinione pubblica", src:"public opinion", pos:"noun", gender:"f",
 note:"Feminine noun. 'Influenzare l'opinione pubblica' = to influence public opinion.",
 example:"A: I social media influenzano l'opinione pubblica.\nB: Piu dei giornali tradizionali.",
 exampleSrc:"A: Social media influences public opinion.\nB: More than traditional newspapers.",
 funFact:"Italy has major public opinion research institutes: Eurispes, IPSOS Italia, and SWG. 'Sondaggi d'opinione' (opinion polls) are widely reported, especially before elections."},

{type:"mc", q:"Che cosa significa 'bufala' in italiano?",
 opts:["A hoax / fake news","A buffalo","A reliable source","A newspaper"],
 ans:"A hoax / fake news",
 hint:"An Italian slang word for something false or fabricated. Predates social media."},

{type:"fb", s:"Bisogna sempre {1} le notizie prima di condividerle.", a:["verificare"],
 opts:["verificare","manipolare","credere","condividere"],
 hint:"To check if something is true. Fact-checking.",
 sSrc:"You must always {1} news before sharing it."},

{type:"match", pairs:[
 {trg:"la fonte", src:"source"},
 {trg:"la credibilita", src:"credibility"},
 {trg:"la trasparenza", src:"transparency"},
 {trg:"il pregiudizio", src:"prejudice"}
]},

{type:"mc", q:"Da dove viene la parola 'algoritmo'?",
 opts:["Dal nome del matematico Al-Khwarizmi","Dal greco 'algoris'","Dal latino 'algorithmus'","Dall'italiano 'algor'"],
 ans:"Dal nome del matematico Al-Khwarizmi",
 hint:"A 9th-century Persian mathematician whose name was Latinized through Italian translations."},

{type:"fb", s:"Viviamo in una {1} informativa.", a:["bolla"],
 opts:["bolla","fonte","rete","pagina"],
 hint:"When you only see information that confirms your existing views. A closed sphere.",
 sSrc:"We live in an information {1}."},

{type:"mc", q:"Quando l'Italia ha adottato il FOIA?",
 opts:["2016","2000","1948","2020"],
 ans:"2016",
 hint:"The Freedom of Information Act. Relatively recent in Italian history."},

{type:"fb", s:"Non fidarti dei titoli {1}.", a:["sensazionalistici"],
 opts:["sensazionalistici","informativi","credibili","trasparenti"],
 hint:"Headlines designed to shock and attract attention, not to inform accurately.",
 sSrc:"Do not trust {1} headlines."},

{type:"match", pairs:[
 {trg:"la propaganda", src:"propaganda"},
 {trg:"la manipolazione", src:"manipulation"},
 {trg:"l'algoritmo", src:"algorithm"},
 {trg:"l'opinione pubblica", src:"public opinion"}
]}
]};
export default BATCH7_L1;
