// Batch 6. Unit 25 extra lesson. L'economia: International Trade & Commerce
const BATCH6_L1 = {id:"itv2_u25l_b6_1", title:"Il commercio internazionale", icon:"\u{1F30D}", xp:15, board:true, steps:[
{type:"intro", title:"Il commercio internazionale",
 desc:"Learn advanced vocabulary for international trade, commerce, and global economic concepts.",
 goals:["Discuss imports, exports, and trade balances","Understand commercial agreements","Use economic terminology in context"]},

{type:"teach", trg:"l'esportazione", src:"the export", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le esportazioni.\nGoods sold to other countries. 'Esportare' = to export.",
 example:"A: L'Italia e famosa per le esportazioni di moda.\nB: E anche di cibo e vino.",
 exampleSrc:"A: Italy is famous for fashion exports.\nB: And also food and wine.",
 funFact:"Italy is the world's 8th largest exporter. 'Made in Italy' is a global brand covering fashion, food, automotive (Ferrari, Lamborghini), and design."},

{type:"teach", trg:"l'importazione", src:"the import", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le importazioni.\nGoods bought from other countries. 'Importare' = to import.",
 example:"A: L'importazione di petrolio e molto costosa.\nB: L'Italia dipende dalle importazioni energetiche.",
 exampleSrc:"A: Oil imports are very expensive.\nB: Italy depends on energy imports.",
 funFact:"Italy imports most of its energy. The 'bilancia commerciale' (trade balance) measures the difference between exports and imports."},

{type:"teach", trg:"il fatturato", src:"the revenue / turnover", pos:"noun", gender:"m",
 note:"Masculine noun. From 'fattura' (invoice).\nTotal sales revenue of a company.",
 example:"A: Il fatturato annuale supera i dieci milioni.\nB: L'azienda sta crescendo bene.",
 exampleSrc:"A: The annual revenue exceeds ten million.\nB: The company is growing well.",
 funFact:"'Fatturato' comes from 'fattura' (invoice). When a company's invoices add up, that total is the 'fatturato.' It does not mean 'manufactured' despite the similar sound."},

{type:"teach", trg:"il bilancio", src:"the budget / balance sheet", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i bilanci.\nA company's financial statement or a government budget.",
 example:"A: Il bilancio mostra un utile record.\nB: Gli azionisti saranno contenti.",
 exampleSrc:"A: The balance sheet shows record profit.\nB: The shareholders will be happy.",
 funFact:"'Bilancio' comes from 'bilancia' (scale/balance). The Italian state budget is called 'legge di bilancio' (budget law) and is debated annually in Parliament."},

{type:"teach", trg:"il concorrente", src:"the competitor", pos:"noun", gender:"m",
 note:"Masculine/feminine noun. Plural: i concorrenti.\nA business rival. From 'concorrere' (to compete).",
 example:"A: I concorrenti hanno abbassato i prezzi.\nB: Dobbiamo reagire subito.",
 exampleSrc:"A: The competitors lowered their prices.\nB: We need to react immediately.",
 funFact:"'Concorrenza' (competition) is a key EU principle. 'Concorrenza sleale' (unfair competition) is illegal under Italian and European law."},

{type:"teach", trg:"la filiale", src:"the branch (office)", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le filiali.\nA branch office of a company or bank.",
 example:"A: La nostra filiale a Milano ha venti dipendenti.\nB: E la più grande del nord.",
 exampleSrc:"A: Our branch in Milan has twenty employees.\nB: It is the biggest in the north.",
 funFact:"From 'figlio' (son/child). A branch is the 'child' of the parent company. Italian banks typically have many 'filiali' (branches) scattered across neighborhoods."},

{type:"teach", trg:"la fusione", src:"the merger", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le fusioni.\nWhen two companies combine into one. Also means 'melting.'",
 example:"A: La fusione tra le due banche è completata.\nB: Ora e il terzo gruppo bancario italiano.",
 exampleSrc:"A: The merger between the two banks is complete.\nB: Now it is the third largest Italian banking group.",
 funFact:"'Fusione' means both business merger and physical melting. 'Fusione nucleare' is nuclear fusion. The metaphor of melting two entities into one works perfectly."},

{type:"teach", trg:"l'imprenditore", src:"the entrepreneur", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: l'imprenditrice. Plural: gli imprenditori.\nA business owner or founder.",
 example:"A: E un giovane imprenditore con grandi idee.\nB: Ha fondato la startup a venticinque anni.",
 exampleSrc:"A: He is a young entrepreneur with big ideas.\nB: He founded the startup at twenty-five.",
 funFact:"Italy has one of Europe's highest rates of small businesses. The 'imprenditore' culture is strong, with family businesses ('impresa familiare') being a cornerstone of the economy."},

{type:"teach", trg:"il fallimento", src:"the bankruptcy / failure", pos:"noun", gender:"m",
 note:"Masculine noun. From 'fallire' (to fail/go bankrupt).\nBusiness bankruptcy or general failure.",
 example:"A: L'azienda ha dichiarato il fallimento.\nB: Quanti posti di lavoro si perdono?",
 exampleSrc:"A: The company declared bankruptcy.\nB: How many jobs are lost?",
 funFact:"'Fallimento' comes from the same root as 'fallire' (to fail). In Italian law, 'procedura fallimentare' (bankruptcy proceedings) is a complex legal process."},

{type:"teach", trg:"il marchio", src:"the brand / trademark", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i marchi.\n'Marchio registrato' = registered trademark.",
 example:"A: Il marchio 'Made in Italy' e conosciuto in tutto il mondo.\nB: E sinonimo di qualità.",
 exampleSrc:"A: The 'Made in Italy' brand is known worldwide.\nB: It is synonymous with quality.",
 funFact:"'Marchio' comes from Germanic 'marka' (sign/boundary). Italian brands like Gucci, Prada, and Barilla are among the world's most recognized 'marchi.'"},

{type:"teach", trg:"negoziare", src:"to negotiate", pos:"verb", gender:null,
 note:"Regular -are verb. negozio, negozi, negozia.\nTo discuss terms of a deal. Also 'trattare.'",
 example:"A: Dobbiamo negoziare un prezzo migliore.\nB: Preparo una controproposta.",
 exampleSrc:"A: We need to negotiate a better price.\nB: I will prepare a counteroffer.",
 funFact:"Italians are renowned negotiators. 'Negoziare' and 'negozio' (shop) share the Latin root 'negotium' (business). Every purchase can become a negotiation in Italian markets."},

{type:"teach", trg:"la quotazione", src:"the stock price / listing", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le quotazioni.\nThe market price of a stock or the act of listing a company.",
 example:"A: La quotazione delle azioni e salita del 5%.\nB: Un buon segno per gli investitori.",
 exampleSrc:"A: The stock price rose by 5%.\nB: A good sign for investors.",
 funFact:"'Quotazione in borsa' means listing on the stock exchange. 'Borsa Italiana' in Milan is Italy's main stock exchange, now part of the Euronext group."},

{type:"teach", trg:"il patrimonio", src:"the assets / net worth", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i patrimoni.\nTotal assets of a person, company, or country. Also cultural heritage.",
 example:"A: Il patrimonio dell'azienda supera i cento milioni.\nB: Include immobili e brevetti.",
 exampleSrc:"A: The company's assets exceed one hundred million.\nB: Including real estate and patents.",
 funFact:"'Patrimonio' covers both financial wealth and cultural heritage. 'Patrimonio UNESCO' means UNESCO World Heritage. Italy has the most UNESCO sites in the world."},

{type:"teach", trg:"la burocrazia", src:"the bureaucracy / red tape", pos:"noun", gender:"f",
 note:"Feminine noun. From French 'bureaucratie.'\nExcessive administrative procedures.",
 example:"A: La burocrazia italiana e molto complessa.\nB: Servono tanti documenti per tutto.",
 exampleSrc:"A: Italian bureaucracy is very complex.\nB: So many documents are needed for everything.",
 funFact:"Italian bureaucracy is legendary. Opening a business requires navigating multiple offices, forms, and waiting periods. 'Burocrazia' is one of the most common Italian complaints."},

{type:"mc", q:"Come si chiama il totale delle vendite di un'azienda?",
 opts:["il fatturato","il bilancio","il patrimonio","il marchio"],
 ans:"il fatturato",
 hint:"Derived from 'fattura' (invoice). The sum of all invoices in a period."},

{type:"fb", s:"La {1} tra le due aziende crea un nuovo colosso.", a:["fusione"],
 opts:["fusione","filiale","burocrazia","quotazione"],
 hint:"When two companies combine into one entity. Also means 'melting.'",
 sSrc:"The {1} between the two companies creates a new giant."},

{type:"match", pairs:[
 {trg:"l'esportazione", src:"export"},
 {trg:"l'importazione", src:"import"},
 {trg:"il concorrente", src:"competitor"},
 {trg:"il fallimento", src:"bankruptcy"}
]},

{type:"mc", q:"Cosa significa 'patrimonio UNESCO'?",
 opts:["UNESCO market listing","UNESCO World Heritage","UNESCO financial report","UNESCO trade agreement"],
 ans:"UNESCO World Heritage",
 hint:"Italy has the most of these sites in the w.... 'Patrimonio' means both assets and h...."},

{type:"fb", s:"Dobbiamo {1} un prezzo migliore con il fornitore.", a:["negoziare"],
 opts:["negoziare","esportare","fallire","quotare"],
 hint:"To discuss and agree on terms. Italians are known for this skill.",
 sSrc:"We need to {1} a better price with the supplier."},

{type:"mc", q:"Qual e la principale borsa valori italiana?",
 opts:["Borsa di Napoli","Borsa di Torino","Borsa Italiana a Milano","Borsa di Roma"],
 ans:"Borsa Italiana a Milano",
 hint:"Located in the financial capital of Italy, now part of the Euronext group."},

{type:"fb", s:"Il marchio 'Made in Italy' e sinonimo di {1}.", a:["qualità"],
 opts:["qualità","burocrazia","fallimento","importazione"],
 hint:"Italian products are known worldwide for this characteristic.",
 sSrc:"The 'Made in Italy' brand is synonymous with {1}."},

{type:"match", pairs:[
 {trg:"il fatturato", src:"revenue"},
 {trg:"il bilancio", src:"balance sheet"},
 {trg:"la filiale", src:"branch office"},
 {trg:"il marchio", src:"brand"}
]}
,{type:"match",pairs:[{trg:"la quotazione",src:"the stock price / listing"},{trg:"la burocrazia",src:"the bureaucracy / red tape"}]}]};
export default BATCH6_L1;
