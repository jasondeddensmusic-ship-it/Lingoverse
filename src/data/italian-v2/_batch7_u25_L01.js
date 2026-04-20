// Batch 7 — Unit 25 extra lesson. L'economia: Startups & Entrepreneurship
const BATCH7_L1 = {id:"itv2_u25l_b7_1", title:"Le startup e l'imprenditoria", icon:"\u{1F680}", xp:15, board:true, steps:[
{type:"intro", title:"Le startup e l'imprenditoria",
 desc:"Learn advanced vocabulary for startups, innovation ecosystems, and the entrepreneurial mindset.",
 goals:["Discuss startup culture and innovation","Talk about funding and business models","Use formal economic vocabulary"]},

{type:"teach", trg:"il finanziamento", src:"funding / financing", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i finanziamenti.\n'Finanziare' = to fund. 'Fondi' = funds.",
 example:"A: La startup ha ottenuto un finanziamento di due milioni.\nB: Un ottimo inizio per crescere.",
 exampleSrc:"A: The startup obtained two million in funding.\nB: A great start for growth.",
 funFact:"Italy's startup ecosystem has grown rapidly. Milan is the hub, but Turin, Rome, and Bologna also have thriving 'incubatori' (incubators) and 'acceleratori' (accelerators)."},

{type:"teach", trg:"l'investitore", src:"the investor", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: l'investitrice. Plural: gli investitori.\n'Investire' = to invest.",
 example:"A: L'investitore ha fiducia nel progetto.\nB: Ottimo, possiamo procedere.",
 exampleSrc:"A: The investor has confidence in the project.\nB: Excellent, we can proceed.",
 funFact:"'Business angel' is used in Italian too for early-stage investors. 'Venture capital' (capitali di rischio) entered Italian business vocabulary directly from English."},

{type:"teach", trg:"la scalabilita", src:"scalability", pos:"noun", gender:"f",
 note:"Feminine noun. 'Scalabile' = scalable.\nA business model that can grow without proportional cost increase.",
 example:"A: La scalabilita del modello e fondamentale.\nB: Dobbiamo crescere senza aumentare troppo i costi.",
 exampleSrc:"A: The scalability of the model is fundamental.\nB: We must grow without increasing costs too much.",
 funFact:"'Scalabilita' is a recent addition to Italian business vocabulary, borrowed from tech culture. Italian entrepreneurs increasingly mix English and Italian in startup jargon."},

{type:"teach", trg:"il brevetto", src:"the patent", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i brevetti.\n'Brevettare' = to patent. 'Proprieta intellettuale' = intellectual property.",
 example:"A: Abbiamo registrato il brevetto.\nB: Ora la nostra invenzione e protetta.",
 exampleSrc:"A: We registered the patent.\nB: Now our invention is protected.",
 funFact:"Italy files about 4,000 patents per year at the European Patent Office. The pharmaceutical, automotive, and mechanical engineering sectors lead in Italian patent applications."},

{type:"teach", trg:"il capitale", src:"capital (financial)", pos:"noun", gender:"m",
 note:"Masculine noun. 'Capitale sociale' = share capital.\n'Capitale di rischio' = venture capital.",
 example:"A: Quanto capitale serve per iniziare?\nB: Almeno centomila euro.",
 exampleSrc:"A: How much capital is needed to start?\nB: At least one hundred thousand euros.",
 funFact:"'Capitale' means both financial capital and capital city. Roma is 'la capitale d'Italia.' The dual meaning reflects how money and power have always been connected."},

{type:"teach", trg:"il fatturato", src:"revenue / turnover", pos:"noun", gender:"m",
 note:"Masculine noun. From 'fattura' (invoice).\n'Fatturato annuale' = annual revenue.",
 example:"A: Il fatturato e cresciuto del trenta per cento.\nB: Un risultato eccellente.",
 exampleSrc:"A: Revenue grew by thirty percent.\nB: An excellent result.",
 funFact:"'Fatturato' is THE metric Italian businesses focus on. In the news, company rankings are always by 'fatturato.' Small businesses (PMI) are the backbone of Italy's economy."},

{type:"teach", trg:"la sostenibilita finanziaria", src:"financial sustainability", pos:"noun", gender:"f",
 note:"Feminine noun. 'Sostenibile' = sustainable.\nWhether a business can survive long-term financially.",
 example:"A: La sostenibilita finanziaria e la nostra priorita.\nB: Senza di essa, non possiamo crescere.",
 exampleSrc:"A: Financial sustainability is our priority.\nB: Without it, we cannot grow.",
 funFact:"Italian startups face unique challenges: high bureaucracy, complex tax systems, and difficulty accessing credit. 'Sostenibilita finanziaria' means surviving these obstacles long enough to thrive."},

{type:"teach", trg:"il modello di business", src:"business model", pos:"noun", gender:"m",
 note:"Masculine noun. Often shortened to 'business model' in Italian.\n'Modello' = model/template.",
 example:"A: Qual e il vostro modello di business?\nB: Freemium con abbonamento premium.",
 exampleSrc:"A: What is your business model?\nB: Freemium with premium subscription.",
 funFact:"Italian business language mixes Italian and English freely. 'Business model,' 'pitch,' 'startup,' and 'team' are used as-is. This 'itangliano' (Italian-English mix) is controversial."},

{type:"teach", trg:"il margine di profitto", src:"profit margin", pos:"noun", gender:"m",
 note:"Masculine noun. 'Margine lordo' = gross margin.\n'Margine netto' = net margin.",
 example:"A: Il margine di profitto e solo del cinque per cento.\nB: Dobbiamo ridurre i costi.",
 exampleSrc:"A: The profit margin is only five percent.\nB: We must reduce costs.",
 funFact:"Italian small businesses often operate on thin 'margini.' Family-owned companies ('imprese familiari') sometimes prioritize longevity and reputation over maximizing margins."},

{type:"teach", trg:"la quota di mercato", src:"market share", pos:"noun", gender:"f",
 note:"Feminine noun. 'Conquistare quota di mercato' = to gain market share.\n'Quota' = share/portion.",
 example:"A: La nostra quota di mercato e del quindici per cento.\nB: Dobbiamo arrivare al venti.",
 exampleSrc:"A: Our market share is fifteen percent.\nB: We need to reach twenty.",
 funFact:"'Quota' is used in many contexts: 'quota rosa' (pink quota) is Italy's gender quota for corporate boards and political lists, mandating female representation."},

{type:"teach", trg:"la crescita", src:"growth", pos:"noun", gender:"f",
 note:"Feminine noun. 'Crescita economica' = economic growth.\n'Crescere' = to grow.",
 example:"A: La crescita dell'azienda e impressionante.\nB: Hanno raddoppiato in un anno.",
 exampleSrc:"A: The company's growth is impressive.\nB: They doubled in one year.",
 funFact:"'Crescita' is one of the most used words in Italian economic discourse. The eternal debate about Italy's slow growth ('crescita lenta') dominates political discussion."},

{type:"teach", trg:"il lancio", src:"the launch", pos:"noun", gender:"m",
 note:"Masculine noun. 'Lancio di un prodotto' = product launch.\n'Lanciare' = to launch.",
 example:"A: Il lancio del nuovo prodotto e domani.\nB: Tutto e pronto?",
 exampleSrc:"A: The new product launch is tomorrow.\nB: Is everything ready?",
 funFact:"'Lanciare' means both to launch and to throw. 'Lancio' works for products, rockets, and even dice. 'Lanciare una sfida' = to throw down a challenge."},

{type:"teach", trg:"innovativo", src:"innovative", pos:"adj", gender:null,
 note:"Adjective. Innovativo/a/i/e.\n'L'innovazione' = innovation.",
 example:"A: L'approcciò è molto innovativo.\nB: E questo che ci distingue dalla concorrenza.",
 exampleSrc:"A: The approach is very innovative.\nB: That is what sets us apart from the competition.",
 funFact:"Italy ranks well in 'innovazione' in design, food technology, and green energy, less so in digital tech. The 'Piano Nazionale Innovazione' aims to change this."},

{type:"mc", q:"Che cos'e un 'business angel'?",
 opts:["An early-stage investor","A startup founder","A business consultant","A company lawyer"],
 ans:"An early-stage investor",
 hint:"An individual who provides funding and mentoring to startups in their e... stages."},

{type:"fb", s:"La startup ha ottenuto un {1} di due milioni.", a:["finanziamento"],
 opts:["finanziamento","brevetto","lancio","margine"],
 hint:"Money received to fund a business venture. Financial backing.",
 sSrc:"The startup obtained two million in {1}."},

{type:"match", pairs:[
 {trg:"il brevetto", src:"patent"},
 {trg:"il capitale", src:"capital"},
 {trg:"la crescita", src:"growth"},
 {trg:"il lancio", src:"launch"}
]},

{type:"mc", q:"Che cosa significa 'quota rosa'?",
 opts:["Gender quota for female representation","Market share","A type of investment","A startup metric"],
 ans:"Gender quota for female representation",
 hint:"Italian policy mandating f... presence on corporate boards and political lists."},

{type:"fb", s:"Il {1} di profitto e solo del cinque per cento.", a:["margine"],
 opts:["margine","modello","capitale","fatturato"],
 hint:"The difference between revenue and costs. How much profit remains.",
 sSrc:"The profit {1} is only five percent."},

{type:"mc", q:"Quale città e il centro dell'ecosistema startup italiano?",
 opts:["Milano","Roma","Napoli","Firenze"],
 ans:"Milano",
 hint:"Italy's financial and business capital in the north."},

{type:"fb", s:"L'approcciò è molto {1}.", a:["innovativo"],
 opts:["innovativo","tradizionale","economico","finanziario"],
 hint:"New, creative, and different from what has been done before.",
 sSrc:"The approach is very {1}."},

{type:"match", pairs:[
 {trg:"il finanziamento", src:"funding"},
 {trg:"l'investitore", src:"investor"},
 {trg:"la quota di mercato", src:"market share"},
 {trg:"il fatturato", src:"revenue"}
]}
]};
export default BATCH7_L1;
