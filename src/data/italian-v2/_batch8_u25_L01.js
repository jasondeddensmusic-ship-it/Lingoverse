// Batch 8 — Unit 25 extra lesson. Economy: Trade & Commerce
const BATCH8_L1 = {id:"itv2_u25l_b8_1", title:"Commercio e scambi", icon:"🏪", xp:15, board:true, steps:[
{type:"intro", title:"Commercio e scambi",
 desc:"Learn vocabulary for trade, commerce, and business transactions in the Italian economy.",
 goals:["Discuss trade and commerce","Use business transaction vocabulary","Understand Italian commercial terminology"]},

{type:"teach", trg:"l'imprenditore", src:"the entrepreneur", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: l'imprenditrice.\n'Imprenditoria' = entrepreneurship.",
 example:"A: E un imprenditore di successo.\nB: Ha fondato l'azienda a vent'anni.",
 exampleSrc:"A: He is a successful entrepreneur.\nB: He founded the company at twenty.",
 funFact:"Italy has one of Europe's highest rates of small business owners. The Italian economy runs on 'piccole e medie imprese' (SMEs), often family-run for generations."},

{type:"teach", trg:"la concorrenza", src:"the competition (business)", pos:"noun", gender:"f",
 note:"Feminine noun. 'Concorrente' = competitor.\n'Concorrenza sleale' = unfair competition.",
 example:"A: La concorrenza nel settore e molto forte.\nB: Dobbiamo differenziarci.",
 exampleSrc:"A: Competition in the sector is very strong.\nB: We need to differentiate ourselves.",
 funFact:"Italy's 'Autorita Garante della Concorrenza' (antitrust authority) protects fair competition. 'Made in Italy' branding is itself a competitive advantage worth billions."},

{type:"teach", trg:"la filiera", src:"the supply chain", pos:"noun", gender:"f",
 note:"Feminine noun. 'Filiera corta' = short supply chain.\nCrucial in Italian food industry.",
 example:"A: La filiera del Parmigiano e controllata rigorosamente.\nB: Dalla mucca al formaggio, tutto tracciato.",
 exampleSrc:"A: The Parmigiano supply chain is strictly controlled.\nB: From cow to cheese, everything is traced.",
 funFact:"'Filiera corta' (short supply chain) is an Italian food movement. Buying directly from producers reduces costs and guarantees freshness. Farmers' markets embody this."},

{type:"teach", trg:"il marchio", src:"the brand / trademark", pos:"noun", gender:"m",
 note:"Masculine noun. 'Marchio registrato' = registered trademark.\n'Il marchio di fabbrica' = hallmark.",
 example:"A: Il marchio italiano e sinonimo di qualita.\nB: Per questo e imitato in tutto il mondo.",
 exampleSrc:"A: The Italian brand is synonymous with quality.\nB: That is why it is imitated worldwide.",
 funFact:"Italian 'contraffazione' (counterfeiting) is a billion-euro problem. Fake 'Made in Italy' products flood global markets. Italy fights this aggressively through legal and branding campaigns."},

{type:"teach", trg:"l'esportazione", src:"the export", pos:"noun", gender:"f",
 note:"Feminine noun. 'Esportare' = to export.\n'Paese esportatore' = exporting country.",
 example:"A: L'esportazione di prodotti italiani e in crescita.\nB: Il Made in Italy e sempre piu richiesto.",
 exampleSrc:"A: The export of Italian products is growing.\nB: Made in Italy is increasingly in demand.",
 funFact:"Italy is the world's 8th largest exporter. The four F's drive exports: Food, Fashion, Furniture, and Ferrari. 'Made in Italy' is worth over 60 billion euros annually."},

{type:"teach", trg:"l'appalto", src:"the contract / tender (public)", pos:"noun", gender:"m",
 note:"Masculine noun. 'Vincere un appalto' = to win a contract.\n'Bando di gara' = tender notice.",
 example:"A: L'azienda ha vinto l'appalto per il ponte.\nB: Un progetto da cinquanta milioni.",
 exampleSrc:"A: The company won the contract for the bridge.\nB: A fifty-million project.",
 funFact:"Public contracts ('appalti pubblici') are a major part of the Italian economy and, historically, a source of corruption scandals. Reforms have introduced stricter transparency rules."},

{type:"teach", trg:"il fallimento", src:"the bankruptcy / failure", pos:"noun", gender:"m",
 note:"Masculine noun. 'Fallire' = to go bankrupt.\n'Dichiarare fallimento' = to declare bankruptcy.",
 example:"A: L'azienda ha dichiarato fallimento.\nB: Trecento dipendenti perderanno il lavoro.",
 exampleSrc:"A: The company declared bankruptcy.\nB: Three hundred employees will lose their jobs.",
 funFact:"'Fallimento' also means 'failure' in general. 'Un fallimento totale' can describe a bad dinner party, a film, or a political plan. Very versatile and very dramatic."},

{type:"teach", trg:"la fusione", src:"the merger / fusion", pos:"noun", gender:"f",
 note:"Feminine noun. 'Fusione aziendale' = corporate merger.\nAlso: melting/fusion (physics).",
 example:"A: Le due banche hanno annunciato la fusione.\nB: Diventera la piu grande d'Italia.",
 exampleSrc:"A: The two banks announced the merger.\nB: It will become the largest in Italy.",
 funFact:"Italian banking has seen major fusioni in recent decades. The creation of Intesa Sanpaolo and UniCredit through mergers reshaped Italy's financial landscape."},

{type:"teach", trg:"l'importazione", src:"the import", pos:"noun", gender:"f",
 note:"Feminine noun. 'Importare' = to import.\n'Bilancia commerciale' = trade balance.",
 example:"A: L'importazione di petrolio pesa sul bilancio.\nB: L'Italia dipende dalle fonti energetiche estere.",
 exampleSrc:"A: Oil imports weigh on the balance sheet.\nB: Italy depends on foreign energy sources.",
 funFact:"Italy imports most of its energy. The country has no nuclear power plants since a 1987 referendum. This makes Italy's energy bill one of the highest in Europe."},

{type:"mc",
 q:"What is 'filiera corta'?",
 opts:["A short supply chain (buying directly from producers)","A type of pasta","A small business","A market regulation"],
 ans:"A short supply chain (buying directly from producers)",
 hint:"'Filiera' = s... c..., 'corta' = s.... Direct from farm to table, cutting out middlemen."},

{type:"match", pairs:[
  {trg:"l'imprenditore", src:"the entrepreneur"},
  {trg:"la concorrenza", src:"the competition"},
  {trg:"il fallimento", src:"the bankruptcy"},
  {trg:"l'esportazione", src:"the export"}
]},

{type:"fb",
 s:"L'azienda ha vinto l'{1} per il nuovo ospedale.",
 a:["appalto"],
 opts:["appalto","marchio","esportazione","importazione"],
 hint:"This is a public contract awarded through a bidding process. Companies compete to win it.",
 sSrc:"The company won the {1} for the new hospital."},

{type:"mc",
 q:"What does 'fallimento' mean beyond business?",
 opts:["Failure in general (for anything that goes badly)","Only bankruptcy","A legal term only","Success after difficulty"],
 ans:"Failure in general (for anything that goes badly)",
 hint:"Italians use this word broadly. A bad movie, a failed dinner, a political plan can all be a 'fallimento.'"},

{type:"fb",
 s:"Le due aziende hanno annunciato la {1}.",
 a:["fusione"],
 opts:["fusione","concorrenza","filiera","fallimento"],
 hint:"Two companies becoming one. This business term also means melting or fusion in physics.",
 sSrc:"The two companies announced the {1}."},

{type:"mc",
 q:"What is the biggest challenge to the 'Made in Italy' brand?",
 opts:["Counterfeiting (contraffazione)","Lack of quality","No export market","Too many regulations"],
 ans:"Counterfeiting (contraffazione)",
 hint:"Fake products bearing the Italian label flood global markets. Italy fights this problem aggressively."}
]};
export default BATCH8_L1;
