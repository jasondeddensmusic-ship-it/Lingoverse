// Batch 8 — Unit 32 extra lesson. Globalization: Migration & Cultural Exchange
const BATCH8_L1 = {id:"itv2_u32l_b8_1", title:"Migrazione e culture", icon:"🌏", xp:15, board:true, steps:[
{type:"intro", title:"Migrazione e culture",
 desc:"Learn vocabulary for discussing migration, cultural exchange, and the global movement of people and ideas.",
 goals:["Discuss migration and integration","Use multicultural vocabulary","Understand Italy's migration context"]},

{type:"teach", trg:"l'immigrazione", src:"the immigration", pos:"noun", gender:"f",
 note:"Feminine noun. 'Immigrare' = to immigrate.\n'L'immigrato' = the immigrant. Double m.",
 example:"A: L'immigrazione in Italia e aumentata negli ultimi decenni.\nB: L'integrazione e la sfida principale.",
 exampleSrc:"A: Immigration to Italy has increased in recent decades.\nB: Integration is the main challenge.",
 funFact:"Italy transformed from an emigration country to an immigration destination in the 1980s. Today about 5 million foreign residents live in Italy, mainly from Romania, Albania, and Morocco."},

{type:"teach", trg:"il rifugiato", src:"the refugee", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: la rifugiata.\n'Diritto d'asilo' = right of asylum.",
 example:"A: Il centro accoglie cinquanta rifugiati.\nB: Ricevono corsi di italiano e assistenza.",
 exampleSrc:"A: The center hosts fifty refugees.\nB: They receive Italian courses and assistance.",
 funFact:"Lampedusa, a small Sicilian island, became a symbol of the Mediterranean migration crisis. Thousands of migrants arrive by sea each year, making it a frontline of European immigration."},

{type:"teach", trg:"l'integrazione", src:"the integration", pos:"noun", gender:"f",
 note:"Feminine noun. 'Integrarsi' = to integrate.\n'Politiche di integrazione' = integration policies.",
 example:"A: L'integrazione richiede impegno da entrambe le parti.\nB: Lingua, lavoro e rispetto reciproco.",
 exampleSrc:"A: Integration requires effort from both sides.\nB: Language, work, and mutual respect.",
 funFact:"Italy's 'ius soli temperato' debate (citizenship through birth in Italy) has been ongoing for years. Children born in Italy to immigrant parents often wait until 18 for citizenship."},

{type:"teach", trg:"la convivenza", src:"the coexistence / cohabitation", pos:"noun", gender:"f",
 note:"Feminine noun. 'Convivere' = to coexist/live together.\n'Convivenza pacifica' = peaceful coexistence.",
 example:"A: La convivenza tra culture diverse arricchisce la societa.\nB: La diversita e una risorsa.",
 exampleSrc:"A: Coexistence between different cultures enriches society.\nB: Diversity is a resource.",
 funFact:"'Convivenza' also means living together as an unmarried couple. Italy legally recognized 'unioni civili' (civil unions) in 2016, changing the meaning of convivenza in Italian law."},

{type:"teach", trg:"lo stereotipo", src:"the stereotype", pos:"noun", gender:"m",
 note:"Masculine noun. 'Stereotipato' = stereotypical.\n'Superare gli stereotipi' = to overcome stereotypes.",
 example:"A: Gli stereotipi sugli italiani non sono tutti veri.\nB: Non tutti mangiamo pasta tre volte al giorno!",
 exampleSrc:"A: Stereotypes about Italians are not all true.\nB: Not all of us eat pasta three times a day!",
 funFact:"Italians are aware of their own stereotypes and play with them humorously. The 'mamma italiana' (Italian mom), the gesticulating speaker, the pasta obsession are both cliche and partly true."},

{type:"teach", trg:"il meticciato", src:"the cultural mixing / mestizaje", pos:"noun", gender:"m",
 note:"Masculine noun. 'Cultura meticcia' = mixed culture.\nDescribes cultural blending.",
 example:"A: Il meticciato culturale crea nuove forme d'arte.\nB: La musica italiana ne e un esempio perfetto.",
 exampleSrc:"A: Cultural mixing creates new art forms.\nB: Italian music is a perfect example.",
 funFact:"Italy's music scene shows 'meticciato' beautifully. Artists blend Italian, African, Arabic, and Latin influences. Italian trap and hip-hop are some of Europe's most vibrant."},

{type:"teach", trg:"la diaspora", src:"the diaspora", pos:"noun", gender:"f",
 note:"Feminine noun. 'Diaspora italiana' = Italian diaspora.\nFrom Greek: dia (through) + speirein (to scatter).",
 example:"A: La diaspora italiana ha raggiunto ogni continente.\nB: Ci sono comunita italiane ovunque.",
 exampleSrc:"A: The Italian diaspora reached every continent.\nB: There are Italian communities everywhere.",
 funFact:"An estimated 80 million people worldwide have Italian ancestry. Argentina, Brazil, the USA, and Australia have the largest communities. Italian restaurants exist in every country."},

{type:"teach", trg:"il permesso di soggiorno", src:"the residence permit", pos:"noun", gender:"m",
 note:"Masculine compound. 'Rinnovare il permesso' = to renew the permit.\nEssential document for non-EU residents.",
 example:"A: Ho finalmente ricevuto il permesso di soggiorno!\nB: Dopo quanti mesi di attesa?",
 exampleSrc:"A: I finally received the residence permit!\nB: After how many months of waiting?",
 funFact:"Obtaining a 'permesso di soggiorno' in Italy is notoriously bureaucratic. Wait times can exceed a year. The process involves multiple office visits, documents, and patience."},

{type:"teach", trg:"la seconda generazione", src:"the second generation", pos:"noun", gender:"f",
 note:"Feminine compound. Children of immigrants born or raised in Italy.\n'Italiani di seconda generazione.'",
 example:"A: I ragazzi di seconda generazione sono italiani a tutti gli effetti.\nB: Parlano italiano, vivono qui, studiano qui.",
 exampleSrc:"A: Second-generation kids are Italian in every way.\nB: They speak Italian, live here, study here.",
 funFact:"Italy's 'seconde generazioni' increasingly shape Italian culture, from football to music to literature. Writers like Igiaba Scego tell stories of dual identity with power and nuance."},

{type:"mc",
 q:"How many people worldwide have Italian ancestry?",
 opts:["About 80 million","About 10 million","About 200 million","About 30 million"],
 ans:"About 80 million",
 hint:"The Italian diaspora is one of the largest in the world, with communities on every continent."},

{type:"match", pairs:[
  {trg:"il rifugiato", src:"the refugee"},
  {trg:"la convivenza", src:"the coexistence"},
  {trg:"lo stereotipo", src:"the stereotype"},
  {trg:"la diaspora", src:"the diaspora"}
]},

{type:"fb",
 s:"Ho finalmente ricevuto il {1} dopo mesi di attesa!",
 a:["permesso di soggiorno"],
 opts:["permesso di soggiorno","rifugiato","stereotipo","meticciato"],
 hint:"This essential document allows non-EU citizens to legally reside in Italy. Getting it is famously bureaucratic.",
 sSrc:"I finally received the {1} after months of waiting!"},

{type:"mc",
 q:"Which Italian island became a symbol of Mediterranean migration?",
 opts:["Lampedusa","Sardinia","Capri","Elba"],
 ans:"Lampedusa",
 hint:"This small Sicilian island is the closest European point to North Africa. Thousands arrive by sea each year."},

{type:"fb",
 s:"L'{1} richiede impegno da entrambe le parti.",
 a:["integrazione"],
 opts:["integrazione","immigrazione","diaspora","convivenza"],
 hint:"This process of becoming part of a new society requires effort from both newcomers and the host community.",
 sSrc:"{1} requires effort from both sides."},

{type:"mc",
 q:"What does 'convivenza' also mean besides cultural coexistence?",
 opts:["Living together as an unmarried couple","A cooking tradition","A political alliance","A religious ceremony"],
 ans:"Living together as an unmarried couple",
 hint:"Italy legally recognized civil unions in 2016. 'Convivenza' covers both cultural and romantic l... t...."}
,{type:"match",pairs:[{trg:"il meticciato",src:"the cultural mixing / mestizaje"},{trg:"la seconda generazione",src:"the second generation"}]},{type:"mc",q:"How do you say \"immigration\" in Italian?",opts:["la finestra","il tavolo","l'immigrazione","la bicicletta"],ans:"l'immigrazione",hint:"Recall the Italian vocabulary word taught in this lesson."}]};
export default BATCH8_L1;
