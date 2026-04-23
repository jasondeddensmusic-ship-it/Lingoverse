// Batch 7. Unit 34 extra lesson. Le relazioni internazionali: European Union & Italy
const BATCH7_L1 = {id:"itv2_u34l_b7_1", title:"L'Italia e l'Unione Europea", icon:"\u{1F1EA}\u{1F1FA}", xp:15, board:true, steps:[
{type:"intro", title:"L'Italia e l'Unione Europea",
 desc:"Learn vocabulary for EU institutions, Italy's role in Europe, and the mechanics of European cooperation.",
 goals:["Discuss EU institutions in Italian","Talk about Italy's role in Europe","Use diplomatic and political vocabulary"]},

{type:"teach", trg:"l'Unione Europea", src:"the European Union", pos:"noun", gender:"f",
 note:"Feminine noun. Abbreviation: UE.\n'Stato membro' = member state.",
 example:"A: L'Italia e un membro fondatore dell'UE.\nB: Dal Trattato di Roma del 1957.",
 exampleSrc:"A: Italy is a founding member of the EU.\nB: Since the Treaty of Rome of 1957.",
 funFact:"The Treaty of Rome (1957), signed in the Campidoglio, created the European Economic Community. Italy, along with France, Germany, Belgium, Netherlands, and Luxembourg, founded what became the EU."},

{type:"teach", trg:"il trattato", src:"the treaty", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i trattati.\n'Firmare un trattato' = to sign a treaty.",
 example:"A: Il Trattato di Roma fu firmato nel 1957.\nB: Un momento storico per l'Europa.",
 exampleSrc:"A: The Treaty of Rome was signed in 1957.\nB: A historic moment for Europe.",
 funFact:"Italy has hosted key European treaties: Rome (1957), Maastricht built on Italian proposals, and the failed European Constitution was signed in Rome in 2004."},

{type:"teach", trg:"il Parlamento Europeo", src:"the European Parliament", pos:"noun", gender:"m",
 note:"Masculine noun. 'Europarlamentare' = MEP (Member of European Parliament).\nElected by EU citizens.",
 example:"A: Il Parlamento Europeo ha sede a Strasburgo.\nB: L'Italia ha 76 europarlamentari.",
 exampleSrc:"A: The European Parliament is based in Strasbourg.\nB: Italy has 76 MEPs.",
 funFact:"Italy sends 76 members to the European Parliament, the third largest delegation after Germany (96) and France (79). Italian MEPs have shaped key EU policies on agriculture, culture, and migration."},

{type:"teach", trg:"la Commissione Europea", src:"the European Commission", pos:"noun", gender:"f",
 note:"Feminine noun. The EU's executive body.\n'Il/la commissario/a' = commissioner.",
 example:"A: La Commissione Europea propone le leggi.\nB: E il motore dell'integrazione europea.",
 exampleSrc:"A: The European Commission proposes laws.\nB: It is the engine of European integration.",
 funFact:"Italy has produced notable European Commission Presidents, including Romano Prodi (1999-2004). Italy consistently advocates for stronger EU economic governance and migration policy."},

{type:"teach", trg:"la sovranita", src:"sovereignty", pos:"noun", gender:"f",
 note:"Feminine noun. 'Sovrano' = sovereign.\n'Sovranita nazionale' = national sovereignty.",
 example:"A: Il dibattito sulla sovranita e sempre acceso.\nB: Quanto potere dare all'UE?",
 exampleSrc:"A: The debate on sovereignty is always heated.\nB: How much power to give the EU?",
 funFact:"The tension between 'sovranita nazionale' and European integration is a permanent theme in Italian politics. 'Sovranismo' (sovereigntism) became a major political force in recent years."},

{type:"teach", trg:"la moneta unica", src:"the single currency", pos:"noun", gender:"f",
 note:"Feminine noun. 'L'euro' = the euro.\nAdopted by Italy on January 1, 2002.",
 example:"A: L'euro ha sostituito la lira nel 2002.\nB: Molti italiani hanno nostalgia della lira.",
 exampleSrc:"A: The euro replaced the lira in 2002.\nB: Many Italians feel nostalgia for the lira.",
 funFact:"Italy's old currency, the lira, dated back to Charlemagne. When the euro replaced it, many Italians felt prices doubled. 'Nostalgia della lira' is still a real sentiment for older generations."},

{type:"teach", trg:"il fondo europeo", src:"the European fund", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i fondi europei.\n'Fondi strutturali' = structural funds.",
 example:"A: L'Italia riceve fondi europei per lo sviluppo.\nB: Ma spenderli tutti e una sfida.",
 exampleSrc:"A: Italy receives European funds for development.\nB: But spending them all is a challenge.",
 funFact:"Italy is one of the largest recipients of EU funds but historically struggles to spend them efficiently. 'Fondi europei non spesi' (unspent EU funds) is a recurring Italian headline."},

{type:"teach", trg:"il vertice", src:"the summit", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i vertici.\n'Vertice europeo' = European summit. Also: top/peak.",
 example:"A: Il prossimo vertice europeo e a Bruxelles.\nB: Si discutera di politica energetica.",
 exampleSrc:"A: The next European summit is in Brussels.\nB: Energy policy will be discussed.",
 funFact:"'Vertice' means both summit (meeting) and summit (peak of a mountain). 'Ai vertici del potere' = at the pinnacle of power. 'Incontro al vertice' = summit meeting."},

{type:"teach", trg:"la direttiva", src:"the directive", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le direttive.\nAn EU law that member states must implement.",
 example:"A: La direttiva europea deve essere recepita entro due anni.\nB: L'Italia e spesso in ritardo.",
 exampleSrc:"A: The European directive must be implemented within two years.\nB: Italy is often late.",
 funFact:"Italy has been repeatedly fined by the EU Court of Justice for late implementation of 'direttive.' 'Procedura di infrazione' (infringement procedure) is a familiar term in Italian EU discourse."},

{type:"teach", trg:"il negoziato", src:"the negotiation", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i negoziati.\n'Negoziare' = to negotiate.",
 example:"A: I negoziati sono complessi.\nB: Ventisette paesi devono trovare un accordo.",
 exampleSrc:"A: The negotiations are complex.\nB: Twenty-seven countries must find an agreement.",
 funFact:"Italian diplomats are renowned negotiators. The Italian diplomatic tradition dates to the Renaissance city-states, where 'l'arte del negoziato' (the art of negotiation) was perfected."},

{type:"teach", trg:"il sussidio", src:"the subsidy / benefit", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i sussidi.\n'Sussidio di disoccupazione' = unemployment benefit.",
 example:"A: I sussidi agricoli dell'UE sono importanti per l'Italia.\nB: L'agricoltura e un settore chiave.",
 exampleSrc:"A: EU agricultural subsidies are important for Italy.\nB: Agriculture is a key sector.",
 funFact:"Italy's agricultural sector benefits greatly from EU 'sussidi.' Olive oil, wine, and cheese producers rely on EU Common Agricultural Policy (PAC) funds."},

{type:"teach", trg:"la cooperazione", src:"cooperation", pos:"noun", gender:"f",
 note:"Feminine noun. 'Cooperare' = to cooperate.\n'Cooperazione internazionale' = international cooperation.",
 example:"A: La cooperazione europea e fondamentale.\nB: Insieme siamo più forti.",
 exampleSrc:"A: European cooperation is fundamental.\nB: Together we are stronger.",
 funFact:"'Cooperazione allo sviluppo' (development cooperation) is a major Italian foreign policy pillar. Italy contributes to UN, EU, and bilateral aid programs worldwide."},

{type:"teach", trg:"ratificare", src:"to ratify", pos:"verb", gender:null,
 note:"Regular -are verb. ratifico, ratifichi, ratifica.\n'La ratifica' = ratification.",
 example:"A: Il Parlamento ha ratificato il trattato.\nB: Ora e ufficialmente in vigore.",
 exampleSrc:"A: Parliament ratified the treaty.\nB: Now it is officially in force.",
 funFact:"'Ratificare' is the formal act of confirming a treaty. In Italy, ratification requires a vote in both chambers of Parliament (Camera dei Deputati and Senato)."},

{type:"mc", q:"Quando fu firmato il Trattato di Roma?",
 opts:["1957","1945","1992","2002"],
 ans:"1957",
 hint:"The treaty that created the European Economic Community. Six founding members."},

{type:"fb", s:"L'Italia e un membro {1} dell'UE.", a:["fondatore"],
 opts:["fondatore","recente","piccolo","nuovo"],
 hint:"One of the original six countries that created what became the EU.",
 sSrc:"Italy is a {1} member of the EU."},

{type:"match", pairs:[
 {trg:"il trattato", src:"treaty"},
 {trg:"la sovranita", src:"sovereignty"},
 {trg:"la direttiva", src:"directive"},
 {trg:"il vertice", src:"summit"}
]},

{type:"mc", q:"Quale moneta ha sostituito la lira italiana?",
 opts:["La sterlina","L'euro","Il marco","Il franco"],
 ans:"L'euro",
 hint:"The single currency adopted by Italy in 2002."},

{type:"fb", s:"I {1} sono complessi con ventisette paesi.", a:["negoziati"],
 opts:["negoziati","vertici","trattati","sussidi"],
 hint:"Discussions to reach an agreement. The art of diplomatic talking.",
 sSrc:"The {1} are complex with twenty-seven countries."},

{type:"mc", q:"Quanti europarlamentari ha l'Italia?",
 opts:["50","100","76","96"],
 ans:"76",
 hint:"The third largest delegation in the European Parliament."},

{type:"fb", s:"Il Parlamento ha {1} il trattato.", a:["ratificato"],
 opts:["ratificato","negoziato","rifiutato","scritto"],
 hint:"The formal act of officially confirming and approving a treaty.",
 sSrc:"Parliament {1} the treaty."},

{type:"match", pairs:[
 {trg:"il Parlamento Europeo", src:"European Parliament"},
 {trg:"il negoziato", src:"negotiation"},
 {trg:"la cooperazione", src:"cooperation"},
 {trg:"il sussidio", src:"subsidy"}
]}
,{type:"match",pairs:[{trg:"la Commissione Europea",src:"the European Commission"},{trg:"la moneta unica",src:"the single currency"},{trg:"il fondo europeo",src:"the European fund"},{trg:"ratificare",src:"to ratify"}]},{type:"mc",q:"How do you say \"European Union\" in Italian?",opts:["il trattato","il Parlamento Europeo","la Commissione Europea","l'Unione Europea"],ans:"l'Unione Europea",hint:"Recall the Italian vocabulary word taught in this lesson."}]};
export default BATCH7_L1;
