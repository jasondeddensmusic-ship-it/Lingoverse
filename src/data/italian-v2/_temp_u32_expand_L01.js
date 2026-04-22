// Unit 32 Expansion. Lesson 4: Le relazioni internazionali
const LESSON_4 = {
  id:"itv2_u32l4", title:"Le relazioni internazionali", icon:"🤝", xp:15, board:true,
  steps:[
    {type:"intro", title:"Le relazioni internazionali",
     desc:"Learn vocabulary for discussing diplomacy, international organizations, and geopolitical relations. These terms are essential for understanding Italy's role in the world.",
     goals:["Describe diplomatic relations and negotiations","Discuss the role of international organizations","Express opinions about Italy's foreign policy"]},

    {type:"teach", trg:"la diplomazia", src:"the diplomacy", pos:"noun", gender:"f",
     note:"Feminine noun. The conduct of international relations through negotiation.\n'Diplomatico/a' (adj/noun) = diplomatic/diplomat.",
     example:"A: La diplomazia e preferibile alla guerra.\nB: Ma richiede pazienza e compromesso.",
     exampleSrc:"A: Diplomacy is preferable to war.\nB: But it requires patience and compromise.",
     funFact:"Italy has a distinguished diplomatic tradition. The concept of permanent embassies was invented by Italian city-states in the 15th century. Milan and Venice pioneered the system of resident ambassadors that all nations use today."},

    {type:"teach", trg:"il trattato", src:"the treaty", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i trattati.\n'Trattato di pace' = peace treaty.\n'Firmare un trattato' = to sign a treaty.",
     example:"A: Il Trattato di Roma del 1957 fondo la Comunita Europea.\nB: L'Italia fu tra i sei paesi fondatori.",
     exampleSrc:"A: The Treaty of Rome in 1957 founded the European Community.\nB: Italy was among the six founding countries.",
     funFact:"The Treaty of Rome, signed in the Campidoglio (Capitol Hill), established the European Economic Community. Italy's role as a founding member gives it a special voice in EU affairs, though that influence has waxed and waned over decades."},

    {type:"teach", trg:"l'ambasciata", src:"the embassy", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le ambasciate.\n'Ambasciatore/ambasciatrice' = ambassador.\n'Consolato' = consulate (for administrative services).",
     example:"A: L'ambasciata italiana a Washington e molto attiva.\nB: Promuove la cultura e il commercio italiano.",
     exampleSrc:"A: The Italian embassy in Washington is very active.\nB: It promotes Italian culture and trade.",
     funFact:"Italy maintains one of the world's densest diplomatic networks, with embassies and consulates in over 120 countries. Italian consulates abroad also serve the large Italian diaspora, estimated at over 80 million people of Italian descent worldwide."},

    {type:"teach", trg:"il negoziato", src:"the negotiation", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i negoziati.\n'Negoziare' (verb) = to negotiate. 'Tavolo di negoziato' = negotiating table.",
     example:"A: I negoziati per il cessate il fuoco proseguono.\nB: Le due parti non trovano ancora un accordo.",
     exampleSrc:"A: Negotiations for a ceasefire continue.\nB: The two sides have not yet reached an agreement.",
     funFact:"Niccolo Machiavelli was one of history's first diplomatic theorists. His analysis of negotiation, alliance-building, and statecraft in 'Il Principe' remains required reading in international relations programs worldwide."},

    {type:"teach", trg:"la sanzione internazionale", src:"the international sanction", pos:"noun", gender:"f",
     note:"Feminine compound noun. Plural: le sanzioni internazionali.\nPunitive measures imposed on countries. 'Imporre sanzioni' = to impose sanctions.",
     example:"A: Le sanzioni internazionali colpiscono l'economia del paese.\nB: Ma spesso sono i cittadini comuni a soffrire di piu.",
     exampleSrc:"A: International sanctions hit the country's economy.\nB: But it is often ordinary citizens who suffer most.",
     funFact:"Italy has sometimes been reluctant to support harsh sanctions due to its deep trade relationships, particularly with Russia and Middle Eastern countries. Balancing economic interests with political solidarity is a constant challenge for Italian foreign policy."},

    {type:"mc",
     q:"Quale concetto diplomatico fu inventato dalle citta-stato italiane nel Quattrocento?",
     opts:["Le ambasciate permanenti con ambasciatori residenti","I trattati di pace multilaterali","Le organizzazioni internazionali","Le sanzioni economiche"],
     ans:"Le ambasciate permanenti con ambasciatori residenti",
     hint:"Before Italian city-states pioneered this, countries only sent envoys for specific missions. Milan and Venice created the modern system of permanent diplomatic missions abroad."},

    {type:"teach", trg:"l'alleanza", src:"the alliance", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le alleanze.\n'Alleanza militare' = military alliance. 'Alleato/a' (noun/adj) = ally/allied.",
     example:"A: L'Italia fa parte della NATO dal 1949.\nB: L'alleanza atlantica resta un pilastro della politica estera.",
     exampleSrc:"A: Italy has been part of NATO since 1949.\nB: The Atlantic alliance remains a pillar of foreign policy.",
     funFact:"Italy hosts several major NATO bases, including the Naval Support Activity in Naples, which serves as the headquarters of Allied Joint Force Command. Italy's strategic Mediterranean position makes it a key NATO ally."},

    {type:"teach", trg:"il multilateralismo", src:"the multilateralism", pos:"noun", gender:"m",
     note:"Masculine noun. Cooperation among multiple countries to address shared challenges.\nOpposite: 'l'unilateralismo' (unilateralism).",
     example:"A: L'Italia crede fortemente nel multilateralismo.\nB: I problemi globali richiedono risposte collettive.",
     exampleSrc:"A: Italy strongly believes in multilateralism.\nB: Global problems require collective responses.",
     funFact:"Italy consistently advocates multilateral approaches in international forums. As a medium-sized power, Italy gains influence through institutions like the EU, UN, and G7 rather than through unilateral action. This pragmatic approach has been a constant since WWII."},

    {type:"fb",
     s:"Il Trattato di Roma del 1957 fondo la Comunita Economica Europea, e l'Italia fu tra i paesi {1}.",
     a:["fondatori"],
     opts:["fondatori","alleati","diplomatici","negoziatori"],
     hint:"The countries that created the organization from the beginning. The original six members who signed the founding document.",
     sSrc:"The Treaty of Rome in 1957 founded the European Economic Community, and Italy was among the {1} countries."},

    {type:"teach", trg:"il vertice", src:"the summit", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i vertici.\nA meeting of heads of state or government.\n'Vertice del G7' = G7 summit. Also means 'peak' or 'top.'",
     example:"A: Al vertice del G7 si e discusso del cambiamento climatico.\nB: L'Italia ha ospitato il vertice in Puglia.",
     exampleSrc:"A: At the G7 summit, climate change was discussed.\nB: Italy hosted the summit in Puglia.",
     funFact:"Italy hosted the G7 summit in 2024 in Puglia. The word 'vertice' (literally 'vertex/peak') perfectly captures the idea of leaders at the top of their countries meeting at the highest level of diplomacy."},

    {type:"teach", trg:"la geopolitica", src:"the geopolitics", pos:"noun", gender:"f",
     note:"Feminine noun. The study of how geography affects politics and international relations.\n'Geopolitico/a' (adj) = geopolitical.",
     example:"A: La geopolitica del Mediterraneo e complessa.\nB: L'Italia si trova al centro di tensioni tra Europa, Africa e Medio Oriente.",
     exampleSrc:"A: Mediterranean geopolitics is complex.\nB: Italy finds itself at the center of tensions between Europe, Africa, and the Middle East.",
     funFact:"Italy's 'Rivista Italiana di Geopolitica' (Limes) is one of Europe's most respected geopolitical journals. Founded in 1993, it reflects a sophisticated Italian tradition of analyzing power, territory, and international strategy."},

    {type:"mc",
     q:"Perche la posizione geografica dell'Italia e strategicamente importante?",
     opts:["Perche e il paese piu grande d'Europa","Perche si trova al centro del Mediterraneo, tra Europa, Africa e Medio Oriente","Perche confina con la Russia","Perche ha il porto piu grande del mondo"],
     ans:"Perche si trova al centro del Mediterraneo, tra Europa, Africa e Medio Oriente",
     hint:"Italy's boot-shaped peninsula extends into the sea that connects three continents. This central position makes it a gateway and a crossroads of civilizations."},

    {type:"match", pairs:[
      {trg:"diplomazia", src:"diplomacy"},
      {trg:"trattato", src:"treaty"},
      {trg:"negoziato", src:"negotiation"},
      {trg:"alleanza", src:"alliance"},
      {trg:"vertice", src:"summit"}
    ]},

    {type:"fb",
     s:"La {1} e preferibile alla guerra per risolvere i conflitti tra nazioni.",
     a:["diplomazia"],
     opts:["diplomazia","geopolitica","sanzione","propaganda"],
     hint:"The art and practice of conducting international relations through dialogue and negotiation rather than force.",
     sSrc:"{1} is preferable to war for resolving conflicts between nations."},

    {type:"mc",
     q:"In quale organizzazione l'Italia e membro fondatore dal 1957?",
     opts:["Le Nazioni Unite","La NATO","L'Unione Europea (originariamente CEE)","L'Organizzazione Mondiale del Commercio"],
     ans:"L'Unione Europea (originariamente CEE)",
     hint:"Six countries signed the founding treaty in Rome. This organization began as an economic community and evolved into a broader political union."}
  ]
};
export default LESSON_4;
