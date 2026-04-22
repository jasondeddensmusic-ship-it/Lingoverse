// Batch 7. Unit 32 extra lesson. La globalizzazione: Cultural Identity & Heritage
const BATCH7_L1 = {id:"itv2_u32l_b7_1", title:"L'identità culturale", icon:"\u{1F30D}", xp:15, board:true, steps:[
{type:"intro", title:"L'identità culturale",
 desc:"Learn vocabulary for discussing cultural identity, heritage preservation, and the tension between tradition and modernity.",
 goals:["Discuss cultural identity and belonging","Talk about heritage preservation","Express nuanced views on tradition vs. change"]},

{type:"teach", trg:"l'identità", src:"identity", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le identità. Invariable.\n'Carta d'identità' = ID card.",
 example:"A: L'identità culturale e importante.\nB: Ci definisce come popolo.",
 exampleSrc:"A: Cultural identity is important.\nB: It defines us as a people.",
 funFact:"'Carta d'identità' (identity card) is mandatory in Italy for all citizens over 15. It has been used since 1931 and is a more common form of ID than the passport."},

{type:"teach", trg:"il patrimonio culturale", src:"cultural heritage", pos:"noun", gender:"m",
 note:"Masculine noun. 'Patrimonio UNESCO' = UNESCO Heritage.\nItaly has 59 UNESCO sites, the most in the world.",
 example:"A: L'Italia ha un patrimonio culturale immenso.\nB: Il più grande al mondo per numero di siti UNESCO.",
 exampleSrc:"A: Italy has an immense cultural heritage.\nB: The greatest in the world by number of UNESCO sites.",
 funFact:"Italy's 59 UNESCO World Heritage Sites include Venice, Florence's historic center, Pompeii, the Dolomites, and the trulli of Alberobello. Protecting them is a national mission."},

{type:"teach", trg:"la tradizione", src:"tradition", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le tradizioni.\n'Tradizionale' = traditional.",
 example:"A: Le tradizioni regionali sono ancora molto forti.\nB: Ogni regione ha le sue.",
 exampleSrc:"A: Regional traditions are still very strong.\nB: Every region has its own.",
 funFact:"Italy's regions maintain distinct traditions: food, dialect, festivals, and customs. A Neapolitan and a Milanese share a nation but may have very different 'tradizioni.'"},

{type:"teach", trg:"il dialetto", src:"the dialect", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i dialetti.\nItaly has dozens of mutually unintelligible dialects.",
 example:"A: Parli il dialetto della tua regione?\nB: Un po', i nonni lo parlano sempre.",
 exampleSrc:"A: Do you speak the dialect of your region?\nB: A little, grandparents always speak it.",
 funFact:"Italian dialects (napoletano, siciliano, veneto, etc.) are actually separate Romance languages. Before unification in 1861, only about 2.5% of Italians spoke standard Italian."},

{type:"teach", trg:"l'integrazione", src:"integration", pos:"noun", gender:"f",
 note:"Feminine noun. 'Integrarsi' = to integrate.\n'Integrazione culturale' = cultural integration.",
 example:"A: L'integrazione richiede sforzo da entrambe le parti.\nB: Apertura e rispetto reciproco.",
 exampleSrc:"A: Integration requires effort from both sides.\nB: Openness and mutual respect.",
 funFact:"Italian immigration is relatively recent compared to other European countries. The debate on 'integrazione' is ongoing, with food often being the first bridge between cultures."},

{type:"teach", trg:"la diversita", src:"diversity", pos:"noun", gender:"f",
 note:"Feminine noun. Invariable plural.\n'Diversita culturale' = cultural diversity.",
 example:"A: La diversita arricchisce la società.\nB: Ogni cultura porta qualcosa di unico.",
 exampleSrc:"A: Diversity enriches society.\nB: Every culture brings something unique.",
 funFact:"Italy itself is incredibly diverse: Alpine, Mediterranean, insular cultures; dozens of dialects; Germanic, Slavic, and Albanian minorities. 'Diversita' starts at home."},

{type:"teach", trg:"lo stereotipo", src:"the stereotype", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli stereotipi.\n'Stereotipato' = stereotypical.",
 example:"A: Non tutti gli italiani mangiano pasta ogni giorno.\nB: Beh... quasi tutti, in realtà!",
 exampleSrc:"A: Not all Italians eat pasta every day.\nB: Well... almost all, actually!",
 funFact:"Italian stereotypes (pasta, gestures, loud talking, mamma) have some truth but also limit understanding. Italians themselves joke about regional stereotypes: northerners are cold, southerners are dramatic."},

{type:"teach", trg:"il senso di appartenenza", src:"sense of belonging", pos:"noun", gender:"m",
 note:"Masculine noun. 'Appartenere' = to belong.\n'Appartenenza a una comunita' = belonging to a community.",
 example:"A: Il senso di appartenenza e fondamentale.\nB: Ci fa sentire parte di qualcosa.",
 exampleSrc:"A: A sense of belonging is fundamental.\nB: It makes us feel part of something.",
 funFact:"Italian 'campanilismo' (loyalty to your town's bell tower/campanile) creates strong local identity. Many Italians feel Florentine, Roman, or Neapolitan before feeling Italian."},

{type:"teach", trg:"la globalizzazione", src:"globalization", pos:"noun", gender:"f",
 note:"Feminine noun. 'Globalizzato' = globalized.\n'Antiglobalizzazione' = anti-globalization.",
 example:"A: La globalizzazione ha cambiato tutto.\nB: Ha vantaggi e svantaggi.",
 exampleSrc:"A: Globalization has changed everything.\nB: It has advantages and disadvantages.",
 funFact:"Italy's 'slow food' movement, founded in 1986, was a direct response to globalization (specifically, a McDonald's opening near the Spanish Steps in Rome). It became a worldwide movement."},

{type:"teach", trg:"preservare", src:"to preserve", pos:"verb", gender:null,
 note:"Regular -are verb. preservo, preservi, preserva.\n'La preservazione' = preservation.",
 example:"A: Dobbiamo preservare le nostre tradizioni.\nB: Senza chiuderci al mondo.",
 exampleSrc:"A: We must preserve our traditions.\nB: Without closing ourselves to the world.",
 funFact:"'Preservare' vs 'conservare': both mean to preserve, but 'conservare' is more common for physical objects and food, while 'preservare' is preferred for abstract concepts like heritage and rights."},

{type:"teach", trg:"l'artigianato", src:"craftsmanship / artisanship", pos:"noun", gender:"m",
 note:"Masculine noun. 'L'artigiano' = the artisan.\n'Artigianale' = artisan/handmade.",
 example:"A: L'artigianato italiano e famoso nel mondo.\nB: Dalla ceramica alla pelletteria.",
 exampleSrc:"A: Italian craftsmanship is famous worldwide.\nB: From ceramics to leather goods.",
 funFact:"Italian 'artigianato' is a UNESCO treasure. Murano glass, Florentine leather, Deruta ceramics, and Cremona violins all represent centuries of accumulated skill passed from master to apprentice."},

{type:"teach", trg:"il campanilismo", src:"local patriotism / parochialism", pos:"noun", gender:"m",
 note:"Masculine noun. From 'campanile' (bell tower).\nStrong identification with one's hometown.",
 example:"A: Il campanilismo italiano e molto forte.\nB: Ogni città crede di essere la migliore.",
 exampleSrc:"A: Italian local patriotism is very strong.\nB: Every city believes it is the best.",
 funFact:"'Campanilismo' literally means loyalty to your town's bell tower (campanile). It explains why Italians feel Milanese or Palermitan before Italian, and why rivalries between neighboring towns are fierce."},

{type:"teach", trg:"la nostalgia", src:"nostalgia / homesickness", pos:"noun", gender:"f",
 note:"Feminine noun. 'Nostalgico' = nostalgic.\nFrom Greek 'nostos' (return) + 'algos' (pain).",
 example:"A: Provo nostalgia per il mio paese.\nB: E normale quando si vive lontano.",
 exampleSrc:"A: I feel homesick for my town.\nB: It is normal when you live far away.",
 funFact:"Italian emigrants worldwide maintain 'nostalgia' for the homeland through food, music, and festivals. Little Italies around the world are monuments to this nostalgia."},

{type:"mc", q:"Quanti siti UNESCO ha l'Italia?",
 opts:["59","45","30","72"],
 ans:"59",
 hint:"The most of any country in the world. Over fifty sites."},

{type:"fb", s:"Ogni regione ha le sue {1}.", a:["tradizioni"],
 opts:["tradizioni","stereotipi","dialetti","identità"],
 hint:"Customs, practices, and beliefs passed down through generations.",
 sSrc:"Every region has its own {1}."},

{type:"match", pairs:[
 {trg:"il dialetto", src:"dialect"},
 {trg:"lo stereotipo", src:"stereotype"},
 {trg:"il campanilismo", src:"local patriotism"},
 {trg:"la nostalgia", src:"nostalgia"}
]},

{type:"mc", q:"Che cos'e il movimento Slow Food?",
 opts:["A restaurant chain","A reaction to globalization, promoting local food","A diet program","A cooking school"],
 ans:"A reaction to globalization, promoting local food",
 hint:"Founded in Italy in 1986, in response to a fast-f... restaurant opening in Rome."},

{type:"fb", s:"Dobbiamo {1} le nostre tradizioni.", a:["preservare"],
 opts:["preservare","globalizzare","stereotipare","dimenticare"],
 hint:"To keep alive and protect. To safeguard for future generations.",
 sSrc:"We must {1} our traditions."},

{type:"mc", q:"Che cosa significa 'campanilismo'?",
 opts:["Italian nationalism","Globalization","Strong loyalty to one's hometown","Love for church bells"],
 ans:"Strong loyalty to one's hometown",
 hint:"From 'campanile' (bell tower). Each town rallying around its own tower."},

{type:"fb", s:"L'{1} italiano e famoso nel mondo.", a:["artigianato"],
 opts:["artigianato","algoritmo","stereotipo","dialetto"],
 hint:"Handmade crafts and skilled manual work. Glass, leather, ceramics.",
 sSrc:"Italian {1} is famous worldwide."},

{type:"match", pairs:[
 {trg:"l'identità", src:"identity"},
 {trg:"la diversita", src:"diversity"},
 {trg:"l'integrazione", src:"integration"},
 {trg:"la globalizzazione", src:"globalization"}
]}
,{type:"match",pairs:[{trg:"la tradizione",src:"tradition"}]},{type:"fb",s:"La globalizzazione minaccia {1} dei piccoli comuni.",a:["il dialetto"],opts:["il dialetto","la nostalgia","il campanilismo","la diversita"],hint:"A regional variety of a language, spoken locally and distinct from the national standard.",sSrc:"Globalization threatens the {1} of small towns."}]};
export default BATCH7_L1;
