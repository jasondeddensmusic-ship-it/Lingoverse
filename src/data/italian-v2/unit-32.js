// Italian V2 Unit 32 — La globalizzazione (B2.3)
// CILS B2 aligned. Globalization, migration, identity, and international cooperation vocabulary.

const UNIT_32 = {
  n:32, lang:"it", srcLang:"en", track:"v2",
  title:"La globalizzazione", sub:"Globalization & Identity",
  icon:"🌍", level:"B2.3", color:"#7B5EE8",
  lessons:[
    // ─── Lesson 1: Economia globale ───
    {id:"itv2_u32l1", title:"Economia globale", icon:"🔗", xp:15, board:true, steps:[
      {type:"intro", title:"Economia globale",
       desc:"Learn vocabulary for discussing globalization, international trade, and the interconnected world economy. Essential for understanding Italian perspectives on global issues.",
       goals:["Define and discuss globalization","Talk about international trade and cooperation","Express opinions on the benefits and challenges of a connected world"]},

      {type:"teach", trg:"la globalizzazione", src:"the globalization", pos:"noun", gender:"f",
       note:"Feminine noun. The process of increasing worldwide interconnection.\n'Globalizzazione economica/culturale' = economic/cultural globalization.",
       example:"A: La globalizzazione ha cambiato il mondo del lavoro.\nB: Ha creato opportunita ma anche disuguaglianze.",
       exampleSrc:"A: Globalization has changed the world of work.\nB: It has created opportunities but also inequalities.",
       funFact:"Italy's relationship with globalization is complex. Its export-driven economy benefits enormously, but many small businesses and traditional sectors feel threatened. The 'no global' movement found strong support in Italy, especially after the G8 protests in Genoa in 2001."},

      {type:"teach", trg:"il commercio internazionale", src:"the international trade", pos:"noun", gender:"m",
       note:"Masculine compound noun. 'Accordo commerciale' = trade agreement.\n'Libero commercio' = free trade. 'Bilancia commerciale' = trade balance.",
       example:"A: Il commercio internazionale e cresciuto enormemente.\nB: La Cina e diventata il principale partner di molti paesi.",
       exampleSrc:"A: International trade has grown enormously.\nB: China has become the main partner of many countries.",
       funFact:"Italy is a major global trader, with 'Made in Italy' exports worth over 600 billion euros annually. Italian luxury goods, machinery, and food products are sought worldwide, making trade a pillar of the national economy."},

      {type:"teach", trg:"la cooperazione", src:"the cooperation", pos:"noun", gender:"f",
       note:"Feminine noun. 'Cooperazione internazionale' = international cooperation.\n'Cooperazione allo sviluppo' = development cooperation.",
       example:"A: La cooperazione tra i paesi e fondamentale per la pace.\nB: Le organizzazioni internazionali facilitano il dialogo.",
       exampleSrc:"A: Cooperation between countries is fundamental for peace.\nB: International organizations facilitate dialogue.",
       funFact:"Italy is a founding member of the EU, NATO, and the UN. Italian 'cooperazione allo sviluppo' (development aid) focuses particularly on Africa and the Mediterranean, reflecting geographic and historical ties."},

      {type:"teach", trg:"la disuguaglianza", src:"the inequality", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le disuguaglianze.\n'Disuguaglianza economica/sociale' = economic/social inequality.",
       example:"A: La disuguaglianza tra nord e sud del mondo cresce.\nB: La globalizzazione non ha beneficiato tutti allo stesso modo.",
       exampleSrc:"A: Inequality between the global north and south is growing.\nB: Globalization has not benefited everyone equally.",
       funFact:"Italy itself has a famous internal divide: the prosperous north versus the less developed south ('il Mezzogiorno'). This 'questione meridionale' (southern question) has persisted since Italian unification in 1861."},

      {type:"mc",
       q:"Che cos'e la globalizzazione?",
       opts:["Il processo di crescente interconnessione mondiale","Un tipo di politica nazionale","Una teoria economica del passato","Un accordo commerciale tra due paesi"],
       ans:"Il processo di crescente interconnessione mondiale",
       hint:"The increasing connection and interdependence of economies, cultures, and populations across the entire world."},

      {type:"teach", trg:"il protezionismo", src:"the protectionism", pos:"noun", gender:"m",
       note:"Masculine noun. Economic policy of shielding domestic industries from foreign competition.\nOpposite: 'il liberismo' (free trade/liberalism).",
       example:"A: Il protezionismo e tornato di moda in molti paesi.\nB: I dazi doganali stanno aumentando.",
       exampleSrc:"A: Protectionism has come back into fashion in many countries.\nB: Customs duties are increasing.",
       funFact:"Italy has historically oscillated between protectionism and free trade. While benefiting from EU free trade, Italian farmers and manufacturers sometimes demand protection from cheaper imports, especially from Asian markets."},

      {type:"teach", trg:"la catena di fornitura", src:"the supply chain", pos:"noun", gender:"f",
       note:"Feminine compound noun. Plural: le catene di fornitura.\n'Catena di fornitura globale' = global supply chain.",
       example:"A: La pandemia ha interrotto le catene di fornitura globali.\nB: Molte aziende hanno ripensato la produzione.",
       exampleSrc:"A: The pandemic disrupted global supply chains.\nB: Many companies rethought production.",
       funFact:"COVID-19 exposed the fragility of global supply chains. Italian fashion houses discovered that relying on distant manufacturers created vulnerability. Many began 'reshoring' production back to Italy, reviving the 'filiera corta' (short supply chain) model."},

      {type:"fb",
       s:"La {1} tra paesi ricchi e paesi poveri continua a crescere.",
       a:["disuguaglianza"],
       opts:["disuguaglianza","globalizzazione","cooperazione","catena"],
       hint:"The gap between those who have more and those who have less. An unequal distribution of wealth and opportunities.",
       sSrc:"The {1} between rich and poor countries continues to grow."},

      {type:"teach", trg:"lo sviluppo sostenibile", src:"the sustainable development", pos:"noun", gender:"m",
       note:"Masculine compound noun. Development that meets present needs without compromising future generations.\n'Obiettivi di sviluppo sostenibile' = Sustainable Development Goals.",
       example:"A: Lo sviluppo sostenibile e una priorita globale.\nB: L'ONU ha fissato 17 obiettivi da raggiungere entro il 2030.",
       exampleSrc:"A: Sustainable development is a global priority.\nB: The UN set 17 goals to reach by 2030.",
       funFact:"Italy incorporated sustainable development into its constitution in 2022, adding environmental protection to Article 9. The country aims to balance its industrial heritage with green transition, particularly in renewable energy and circular economy."},

      {type:"mc",
       q:"Che cos'e il protezionismo economico?",
       opts:["Un accordo di cooperazione internazionale","La politica di proteggere le industrie nazionali dalla concorrenza estera","La globalizzazione dei mercati finanziari","Un tipo di sviluppo sostenibile"],
       ans:"La politica di proteggere le industrie nazionali dalla concorrenza estera",
       hint:"An economic policy that shields domestic producers from foreign competition through tariffs, quotas, or other barriers. The opposite of free trade."},

      {type:"match", pairs:[
        {trg:"globalizzazione", src:"globalization"},
        {trg:"cooperazione", src:"cooperation"},
        {trg:"disuguaglianza", src:"inequality"},
        {trg:"protezionismo", src:"protectionism"},
        {trg:"sviluppo sostenibile", src:"sustainable development"}
      ]},

      {type:"fb",
       s:"La {1} internazionale e necessaria per affrontare il cambiamento climatico.",
       a:["cooperazione"],
       opts:["cooperazione","globalizzazione","disuguaglianza","catena"],
       hint:"Working together across borders to solve shared problems. Countries must collaborate to address global challenges.",
       sSrc:"International {1} is necessary to address climate change."},

      {type:"mc",
       q:"Perche molte aziende italiane hanno riportato la produzione in Italia dopo la pandemia?",
       opts:["Perche la globalizzazione e finita","Perche la produzione in Italia e meno costosa","Perche le catene di fornitura globali si sono rivelate fragili","Perche lo richiede la legge europea"],
       ans:"Perche le catene di fornitura globali si sono rivelate fragili",
       hint:"The pandemic showed that relying on distant manufacturers creates risk. Disruptions in one part of the world can halt production everywhere."}
    ]},

    // ─── Lesson 2: Migrazione e identita ───
    {id:"itv2_u32l2", title:"Migrazione e identita", icon:"🧳", xp:15, board:true, steps:[
      {type:"intro", title:"Migrazione e identita",
       desc:"Learn vocabulary for discussing migration, cultural identity, and multicultural society. These are central topics in contemporary Italian public discourse.",
       goals:["Discuss migration patterns and policies","Talk about cultural identity and belonging","Understand integration and multiculturalism concepts"]},

      {type:"teach", trg:"la migrazione", src:"the migration", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le migrazioni.\n'Migrazione interna' = internal migration. 'Flusso migratorio' = migratory flow.",
       example:"A: La migrazione dal sud al nord e un fenomeno storico in Italia.\nB: Milioni di italiani si sono trasferiti negli anni Cinquanta.",
       exampleSrc:"A: Migration from south to north is a historical phenomenon in Italy.\nB: Millions of Italians moved in the 1950s.",
       funFact:"Italy was a country of emigration until the 1970s. Millions left for the Americas, Australia, and northern Europe. Today Italy is primarily a receiving country, a dramatic reversal within a single generation."},

      {type:"teach", trg:"l'integrazione", src:"the integration", pos:"noun", gender:"f",
       note:"Feminine noun. 'Integrazione sociale/culturale' = social/cultural integration.\n'Politiche di integrazione' = integration policies.",
       example:"A: L'integrazione dei nuovi arrivati richiede tempo e risorse.\nB: La scuola gioca un ruolo fondamentale.",
       exampleSrc:"A: Integration of newcomers requires time and resources.\nB: Schools play a fundamental role.",
       funFact:"Italian integration policy is based on 'ius sanguinis' (citizenship by blood), not 'ius soli' (by birth on territory). Children born in Italy to foreign parents must wait until age 18 to apply for citizenship, a hotly debated topic."},

      {type:"teach", trg:"il multiculturalismo", src:"the multiculturalism", pos:"noun", gender:"m",
       note:"Masculine noun. The coexistence of diverse cultural groups in one society.\n'Societa multiculturale' = multicultural society.",
       example:"A: Il multiculturalismo arricchisce la societa.\nB: Ma richiede rispetto reciproco e dialogo.",
       exampleSrc:"A: Multiculturalism enriches society.\nB: But it requires mutual respect and dialogue.",
       funFact:"Italy is becoming multicultural rapidly. Over 5 million foreign residents live in Italy, representing about 8.5% of the population. The largest communities are Romanian, Albanian, Moroccan, Chinese, and Ukrainian."},

      {type:"teach", trg:"l'identita", src:"the identity", pos:"noun", gender:"f",
       note:"Feminine noun. Invariable (accented ending).\n'Identita culturale' = cultural identity. 'Carta d'identita' = identity card.",
       example:"A: L'identita culturale si costruisce nel tempo.\nB: E un equilibrio tra tradizione e cambiamento.",
       exampleSrc:"A: Cultural identity is built over time.\nB: It is a balance between tradition and change.",
       funFact:"Italian identity is layered: local (campanilismo, loyalty to one's town), regional (Toscano, Siciliano), and national. Many Italians identify first with their city or region and only secondarily as Italian. This reflects centuries of political fragmentation."},

      {type:"mc",
       q:"Su quale principio si basa la cittadinanza italiana?",
       opts:["Ius sanguinis: diritto di sangue","Ius soli: diritto di nascita sul territorio","Ius culturae: diritto di cultura","Ius laboris: diritto di lavoro"],
       ans:"Ius sanguinis: diritto di sangue",
       hint:"Italian citizenship is based on family lineage, not place of birth. Children inherit the nationality of their parents, regardless of where they are born."},

      {type:"teach", trg:"la frontiera", src:"the border / frontier", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le frontiere.\n'Controllo alle frontiere' = border control. 'Frontiera naturale' = natural border.",
       example:"A: Le frontiere europee sono aperte grazie a Schengen.\nB: Ma i controlli sono tornati in alcuni paesi.",
       exampleSrc:"A: European borders are open thanks to Schengen.\nB: But controls have returned in some countries.",
       funFact:"Italy's geography makes it a natural gateway to Europe from Africa and the Middle East. The island of Lampedusa, closer to Tunisia than to Sicily, has become a symbol of the Mediterranean migration debate."},

      {type:"teach", trg:"l'accoglienza", src:"the welcome / reception", pos:"noun", gender:"f",
       note:"Feminine noun. 'Centro di accoglienza' = reception center.\n'Accogliere' (verb) = to welcome/receive.",
       example:"A: L'accoglienza dei rifugiati divide l'opinione pubblica.\nB: Tra solidarieta e preoccupazione.",
       exampleSrc:"A: The reception of refugees divides public opinion.\nB: Between solidarity and concern.",
       funFact:"The Italian word 'accoglienza' carries warmth that 'reception' lacks in English. Italian civil society organizations ('associazioni') play a major role in welcoming and supporting migrants, often ahead of government action."},

      {type:"fb",
       s:"L'{1} dei nuovi arrivati e un processo lungo che richiede impegno da entrambe le parti.",
       a:["integrazione"],
       opts:["integrazione","identita","migrazione","frontiera"],
       hint:"The process by which newcomers become part of the host society. It involves learning the language, finding work, and building connections.",
       sSrc:"The {1} of newcomers is a long process that requires commitment from both sides."},

      {type:"teach", trg:"il rifugiato", src:"the refugee", pos:"noun", gender:"m",
       note:"Masculine noun. Feminine: la rifugiata.\nPlural: i rifugiati. 'Diritto di asilo' = right of asylum.",
       example:"A: I rifugiati hanno diritto alla protezione internazionale.\nB: La Convenzione di Ginevra lo garantisce.",
       exampleSrc:"A: Refugees have the right to international protection.\nB: The Geneva Convention guarantees it.",
       funFact:"Italy processes tens of thousands of asylum requests yearly. The system involves 'commissioni territoriali' (territorial commissions) that evaluate each case. The word 'rifugiato' has specific legal meaning, distinct from 'migrante' (migrant)."},

      {type:"mc",
       q:"Che cos'e il 'campanilismo' nella cultura italiana?",
       opts:["Il suono delle campane la domenica","La forte identificazione con la propria citta o paese","Una forma di protesta politica","Un tipo di migrazione interna"],
       ans:"La forte identificazione con la propria citta o paese",
       hint:"Named after the 'campanile' (bell tower) that each Italian town has. It represents fierce local pride and loyalty to one's hometown."},

      {type:"match", pairs:[
        {trg:"migrazione", src:"migration"},
        {trg:"integrazione", src:"integration"},
        {trg:"identita", src:"identity"},
        {trg:"frontiera", src:"border"},
        {trg:"rifugiato", src:"refugee"}
      ]},

      {type:"fb",
       s:"Il {1} ha una forte identita regionale e locale.",
       a:["multiculturalismo"],
       opts:["multiculturalismo","protezionismo","campanilismo","commercio"],
       hint:"The coexistence of many different cultures within one society. A concept that describes diverse communities living together.",
       sSrc:"{1} enriches society with diverse perspectives and traditions."},

      {type:"mc",
       q:"Perche Lampedusa e diventata un simbolo del dibattito sull'immigrazione?",
       opts:["Perche ospita il parlamento europeo","Perche e la citta piu grande della Sicilia","Perche e l'isola italiana piu vicina all'Africa, punto di arrivo di molti migranti","Perche e la frontiera con la Francia"],
       ans:"Perche e l'isola italiana piu vicina all'Africa, punto di arrivo di molti migranti",
       hint:"This tiny island is much closer to Tunisia than to the Italian mainland, making it a natural landing point for boats crossing the Mediterranean."}
    ]},

    // ─── Lesson 3: Il futuro globale ───
    {id:"itv2_u32l3", title:"Il futuro globale", icon:"🔮", xp:15, board:true, steps:[
      {type:"intro", title:"Il futuro globale",
       desc:"Learn to discuss global challenges, cultural exchange, and visions for the future. Practice expressing complex opinions about interconnected world issues.",
       goals:["Discuss major global challenges facing humanity","Talk about cultural exchange and its effects","Express visions for a more just and sustainable world"]},

      {type:"teach", trg:"la sfida globale", src:"the global challenge", pos:"noun", gender:"f",
       note:"Feminine compound noun. Plural: le sfide globali.\n'Sfida' also means 'challenge' in the sense of a dare or competition.",
       example:"A: Il cambiamento climatico e la piu grande sfida globale.\nB: Richiede cooperazione senza precedenti.",
       exampleSrc:"A: Climate change is the greatest global challenge.\nB: It requires unprecedented cooperation.",
       funFact:"'Sfida' comes from the verb 'sfidare' (to challenge, to defy). In medieval Italian, it meant a formal challenge to a duel. Today it ranges from personal challenges ('sfida personale') to global ones ('sfida planetaria')."},

      {type:"teach", trg:"lo scambio culturale", src:"the cultural exchange", pos:"noun", gender:"m",
       note:"Masculine compound noun. Plural: gli scambi culturali.\n'Programma di scambio' = exchange program.",
       example:"A: Lo scambio culturale arricchisce entrambe le parti.\nB: L'Erasmus e un esempio perfetto.",
       exampleSrc:"A: Cultural exchange enriches both sides.\nB: Erasmus is a perfect example.",
       funFact:"Italy is one of the top destinations for Erasmus students in Europe and also one of the top senders. Bologna, the city that gave its name to the European university system ('Processo di Bologna'), hosts thousands of exchange students yearly."},

      {type:"teach", trg:"l'interdipendenza", src:"the interdependence", pos:"noun", gender:"f",
       note:"Feminine noun. The mutual dependence of economies, nations, or people.\n'Interdipendenza economica' = economic interdependence.",
       example:"A: L'interdipendenza economica rende le guerre piu costose.\nB: Ma non le elimina purtroppo.",
       exampleSrc:"A: Economic interdependence makes wars more costly.\nB: But it does not eliminate them unfortunately.",
       funFact:"The European Union was built on the idea that economic interdependence prevents war. Italy's founding role in the EU (Treaty of Rome, 1957) reflects faith in this principle, even as Euroscepticism has grown."},

      {type:"teach", trg:"la diversita", src:"the diversity", pos:"noun", gender:"f",
       note:"Feminine noun. Invariable (accented ending).\n'Diversita culturale' = cultural diversity. 'Biodiversita' = biodiversity.",
       example:"A: La diversita e una ricchezza, non un problema.\nB: Le societa piu innovative sono quelle piu diverse.",
       exampleSrc:"A: Diversity is a richness, not a problem.\nB: The most innovative societies are the most diverse.",
       funFact:"Italy is itself internally diverse: 20 regions with distinct dialects, cuisines, and traditions. Sardinian is as different from Neapolitan as Portuguese is from Spanish. This internal diversity prepares Italians for multicultural thinking."},

      {type:"mc",
       q:"Che cos'e il programma Erasmus?",
       opts:["Un programma di scambio universitario europeo","Un fondo per lo sviluppo economico","Un accordo commerciale tra paesi","Un progetto per la protezione dell'ambiente"],
       ans:"Un programma di scambio universitario europeo",
       hint:"A European program allowing university students to study abroad at partner institutions. Named after the humanist Erasmus of Rotterdam."},

      {type:"teach", trg:"la sovranita", src:"the sovereignty", pos:"noun", gender:"f",
       note:"Feminine noun. Invariable (accented ending).\n'Sovranita nazionale' = national sovereignty. 'Sovranismo' = sovereignty movement.",
       example:"A: La globalizzazione mette in discussione la sovranita nazionale.\nB: E un equilibrio difficile da trovare.",
       exampleSrc:"A: Globalization challenges national sovereignty.\nB: It is a difficult balance to find.",
       funFact:"'Sovranismo' (sovereignty movement) became a key political term in Italy after 2018, used by parties arguing for more national control over EU policies, immigration, and economic decisions. It parallels similar movements across Europe."},

      {type:"teach", trg:"il patrimonio culturale", src:"the cultural heritage", pos:"noun", gender:"m",
       note:"Masculine compound noun. 'Patrimonio dell'umanita' = World Heritage.\nArticle 9 of the Italian Constitution protects cultural heritage.",
       example:"A: L'Italia ha il maggior numero di siti patrimonio dell'umanita.\nB: Cinquantotto siti riconosciuti dall'UNESCO.",
       exampleSrc:"A: Italy has the largest number of World Heritage sites.\nB: Fifty-eight sites recognized by UNESCO.",
       funFact:"Italy leads the world with 58 UNESCO World Heritage sites, from Pompeii to the Dolomites. Article 9 of the Italian Constitution explicitly protects the landscape and cultural heritage, making Italy one of few countries with constitutional environmental and cultural protection."},

      {type:"fb",
       s:"La {1} culturale rende le societa piu creative e innovative.",
       a:["diversita"],
       opts:["diversita","sovranita","sfida","interdipendenza"],
       hint:"The variety of different cultures, perspectives, and backgrounds within a group or society. The opposite of homogeneity.",
       sSrc:"Cultural {1} makes societies more creative and innovative."},

      {type:"teach", trg:"la cittadinanza globale", src:"the global citizenship", pos:"noun", gender:"f",
       note:"Feminine compound noun. The idea of belonging to a worldwide community.\n'Cittadino del mondo' = citizen of the world.",
       example:"A: La cittadinanza globale implica responsabilita verso tutti.\nB: Non solo verso il proprio paese.",
       exampleSrc:"A: Global citizenship implies responsibility toward everyone.\nB: Not only toward one's own country.",
       funFact:"The Italian word 'cosmopolita' (cosmopolitan), used since the Renaissance, captures a similar idea. Dante called himself a citizen of the world. The concept of looking beyond local boundaries has deep roots in Italian intellectual tradition."},

      {type:"teach", trg:"la solidarieta", src:"the solidarity", pos:"noun", gender:"f",
       note:"Feminine noun. Invariable (accented ending).\n'Solidarieta internazionale' = international solidarity.",
       example:"A: La solidarieta tra i popoli e il fondamento della pace.\nB: Senza solidarieta, non c'e vera cooperazione.",
       exampleSrc:"A: Solidarity between peoples is the foundation of peace.\nB: Without solidarity, there is no real cooperation.",
       funFact:"Article 2 of the Italian Constitution speaks of 'doveri inderogabili di solidarieta' (inescapable duties of solidarity). Solidarity is not just a moral value in Italy but a constitutional obligation."},

      {type:"mc",
       q:"Quanti siti patrimonio dell'umanita UNESCO ha l'Italia?",
       opts:["Venti, il terzo al mondo","Cinquantotto, il numero piu alto al mondo","Cento, ma molti sono condivisi","Dieci, tutti nel centro storico di Roma"],
       ans:"Cinquantotto, il numero piu alto al mondo",
       hint:"Italy holds the world record for this UNESCO designation. The sites range from ancient ruins to natural landscapes across the entire peninsula."},

      {type:"match", pairs:[
        {trg:"sfida globale", src:"global challenge"},
        {trg:"scambio culturale", src:"cultural exchange"},
        {trg:"diversita", src:"diversity"},
        {trg:"sovranita", src:"sovereignty"},
        {trg:"solidarieta", src:"solidarity"}
      ]},

      {type:"fb",
       s:"L'{1} economica significa che nessun paese puo prosperare da solo.",
       a:["interdipendenza"],
       opts:["interdipendenza","identita","integrazione","accoglienza"],
       hint:"When countries depend on each other for trade, resources, and stability. What happens in one country affects all others.",
       sSrc:"Economic {1} means that no country can prosper alone."},

      {type:"mc",
       q:"Che cos'e il 'sovranismo' nel contesto politico italiano?",
       opts:["Una teoria economica sulla globalizzazione","Un partito politico fondato nel 2020","Un movimento che vuole piu controllo nazionale su politiche europee e immigrazione","Un programma di scambio culturale"],
       ans:"Un movimento che vuole piu controllo nazionale su politiche europee e immigrazione",
       hint:"A political movement advocating for more national control over decisions currently shared with the EU or international bodies. Related to 'sovranita' (sovereignty)."}
    ]}
  ]
};

export default UNIT_32;
