// Batch 3 — Unit 25 Lesson (Economy: Trade & Employment)
const BATCH3_L_1 = {
  id:"itv2_u25l_b3_1", title:"Commercio e occupazione", icon:"🏭", xp:15, board:true,
  steps:[
    {type:"intro", title:"Commercio e occupazione",
     desc:"Deepen your understanding of international trade, employment markets, and macroeconomic indicators. These terms appear daily in Italian economic journalism.",
     goals:["Discuss trade agreements and tariffs","Describe employment conditions and labor markets","Analyze economic indicators and forecasts"]},

    {type:"teach", trg:"il dazio", src:"the tariff / customs duty", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i dazi.\n'Dazio doganale' = customs tariff. 'Imporre dazi' = to impose tariffs.",
     example:"A: I dazi sulle importazioni cinesi sono aumentati.\nB: Le imprese temono una guerra commerciale.",
     exampleSrc:"A: Tariffs on Chinese imports have increased.\nB: Companies fear a trade war.",
     funFact:"From Arabic 'ad-dar' via medieval Venetian trade vocabulary. Venice was the gateway for Eastern goods into Europe, and its customs system became the model for modern European tariff structures."},

    {type:"teach", trg:"il PIL pro capite", src:"the GDP per capita", pos:"noun", gender:"m",
     note:"Masculine compound noun. GDP divided by population.\n'Reddito pro capite' = per capita income.",
     example:"A: Il PIL pro capite del nord Italia e molto più alto del sud.\nB: La differenza e quasi il doppio.",
     exampleSrc:"A: GDP per capita in northern Italy is much higher than the south.\nB: The difference is almost double.",
     funFact:"Italy's north-south economic divide is among the starkest in Europe. Lombardia's per-capita GDP rivals Germany's, while Calabria's is closer to Greece's. This gap has persisted since unification in 1861."},

    {type:"teach", trg:"l'occupazione", src:"the employment", pos:"noun", gender:"f",
     note:"Feminine noun. 'Tasso di occupazione' = employment rate.\nOpposite: la disoccupazione. Also means 'occupation' (military).",
     example:"A: L'occupazione femminile in Italia resta bassa.\nB: Siamo tra gli ultimi in Europa.",
     exampleSrc:"A: Female employment in Italy remains low.\nB: We are among the last in Europe.",
     funFact:"Italy's female employment rate is about 52%, well below the EU average. The gap is widest in southern regions, where traditional family structures and limited childcare services keep many women out of the workforce."},

    {type:"teach", trg:"la manodopera", src:"the labor / workforce", pos:"noun", gender:"f",
     note:"Feminine noun. Literally 'hand-work.'\n'Costo della manodopera' = labor cost. 'Manodopera qualificata' = skilled labor.",
     example:"A: Il costo della manodopera italiana e competitivo.\nB: Ma la produttivita deve crescere.",
     exampleSrc:"A: The cost of Italian labor is competitive.\nB: But productivity must grow.",
     funFact:"'Manodopera' literally combines 'mano' (hand) + 'd'opera' (of work). Italy's manufacturing strength relies on skilled manodopera, particularly in artisanal sectors like fashion, ceramics, and precision machinery."},

    {type:"teach", trg:"la recessione", src:"the recession", pos:"noun", gender:"f",
     note:"Feminine noun. Two consecutive quarters of negative GDP growth.\n'Entrare in recessione' = to enter a recession.",
     example:"A: L'economia e entrata in recessione per la terza volta in dieci anni.\nB: Il governo prepara misure di stimolo.",
     exampleSrc:"A: The economy entered recession for the third time in ten years.\nB: The government is preparing stimulus measures.",
     funFact:"Italy has been called 'il malato d'Europa' (the sick man of Europe) due to its frequent recessions and stagnant growth. The country's GDP in 2023 was barely above its 2007 level, a lost decade and a half."},

    {type:"mc",
     q:"Come si chiamano le imposte sulle merci importate dall'estero?",
     opts:["I dazi","Le tasse","I debiti","I crediti"],
     ans:"I dazi",
     hint:"Custom fees applied to goods entering the country from abroad. They can be raised or lowered to influence trade."},

    {type:"teach", trg:"l'importazione", src:"the import", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le importazioni.\nOpposite: l'esportazione. 'Bilancia delle importazioni' = import balance.",
     example:"A: Le importazioni di gas naturale pesano sul bilancio.\nB: L'Italia dipende quasi interamente dall'estero per l'energia.",
     exampleSrc:"A: Natural gas imports weigh on the budget.\nB: Italy depends almost entirely on foreign sources for energy.",
     funFact:"Italy imports about 75% of its energy needs, making it highly dependent on foreign suppliers. The 2022 energy crisis after the conflict in Ukraine hit Italy particularly hard, driving inflation above 8%."},

    {type:"teach", trg:"il sindacato", src:"the trade union", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i sindacati.\n'Sindacalista' = trade unionist. Italy's big three: CGIL, CISL, UIL.",
     example:"A: I sindacati hanno proclamato uno sciopero generale.\nB: Protestano contro la riforma delle pensioni.",
     exampleSrc:"A: The trade unions called a general strike.\nB: They are protesting against the pension reform.",
     funFact:"Italy has a strong union tradition. The three major confederations (CGIL, CISL, UIL) represent millions of workers. General strikes ('scioperi generali') remain a powerful tool, disrupting transport and public services across the country."},

    {type:"teach", trg:"il contratto", src:"the contract", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i contratti.\n'Contratto a tempo indeterminato' = permanent contract.\n'Contratto a termine' = fixed-term contract.",
     example:"A: Ha finalmente ottenuto un contratto a tempo indeterminato.\nB: Dopo anni di lavoro precario.",
     exampleSrc:"A: He finally got a permanent contract.\nB: After years of precarious work.",
     funFact:"The 'contratto a tempo indeterminato' is the holy grail for Italian workers. It provides maximum legal protections and makes it extremely difficult for the employer to dismiss the worker, a pillar of Italy's rigid labor market."},

    {type:"fb",
     s:"L'Italia e entrata in {1} dopo due trimestri consecutivi di crescita negativa.",
     a:["recessione"],
     opts:["recessione","inflazione","occupazione","esportazione"],
     hint:"A period when the economy shrinks for two quarters in a row. The GDP goes down instead of up.",
     sSrc:"Italy entered a {1} after two consecutive quarters of negative growth."},

    {type:"teach", trg:"lo sciopero", src:"the strike", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: gli scioperi.\n'Scioperare' (verb) = to go on strike. 'Sciopero generale' = general strike.",
     example:"A: Lo sciopero dei trasporti ha paralizzato la città.\nB: Autobus e treni fermi per otto ore.",
     exampleSrc:"A: The transport strike paralyzed the city.\nB: Buses and trains stopped for eight hours.",
     funFact:"Italy has one of the highest strike rates in Europe. Strikes must be announced in advance and guarantee 'servizi minimi' (minimum services), especially in transport. Romans joke that the metro is 'always on strike.'"},

    {type:"teach", trg:"il sussidio", src:"the subsidy / benefit", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i sussidi.\n'Sussidio di disoccupazione' = unemployment benefit.\n'Sussidio statale' = government subsidy.",
     example:"A: Il sussidio di disoccupazione dura al massimo due anni.\nB: Non e sufficiente per molte famiglie.",
     exampleSrc:"A: The unemployment benefit lasts a maximum of two years.\nB: It is not enough for many families.",
     funFact:"Italy's main unemployment benefit is called NASPI. It replaces a portion of the worker's previous salary for up to 24 months. The 'reddito di cittadinanza' (citizen's income), introduced in 2019, was partially replaced by new measures in 2024."},

    {type:"teach", trg:"la produttivita", src:"the productivity", pos:"noun", gender:"f",
     note:"Feminine noun. Invariable (accented ending).\nOutput per worker or per hour worked.",
     example:"A: La produttivita italiana e stagnante da vent'anni.\nB: Senza innovazione, non crescera.",
     exampleSrc:"A: Italian productivity has been stagnant for twenty years.\nB: Without innovation, it will not grow.",
     funFact:"Italy's productivity puzzle baffles economists: despite skilled workers and world-class industries, overall productivity has barely grown since 2000. Small firm size, underinvestment in technology, and bureaucracy are often cited as causes."},

    {type:"mc",
     q:"Quale organizzazione rappresenta i lavoratori e negozia le condizioni di lavoro?",
     opts:["Il sindacato","Il tribunale","La borsa","La banca centrale"],
     ans:"Il sindacato",
     hint:"An organization of workers that negotiates with employers. Italy has three major ones: CGIL, CISL, and UIL."},

    {type:"teach", trg:"la previsione", src:"the forecast / prediction", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le previsioni.\n'Previsioni economiche' = economic forecasts. Also used for weather.",
     example:"A: Le previsioni per l'anno prossimo sono caute.\nB: Si prevede una crescita dello 0,7%.",
     exampleSrc:"A: The forecasts for next year are cautious.\nB: Growth of 0.7% is expected.",
     funFact:"Italy's main economic forecasting bodies are ISTAT (national statistics), Banca d'Italia, and the Ministry of Economy. Their forecasts often differ, leading to political debates about which numbers to trust."},

    {type:"teach", trg:"lo stipendio", src:"the salary", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: gli stipendi.\n'Stipendio lordo/netto' = gross/net salary.",
     example:"A: Gli stipendi italiani non sono cresciuti con l'inflazione.\nB: Il potere d'acquisto e diminuito.",
     exampleSrc:"A: Italian salaries have not kept up with inflation.\nB: Purchasing power has decreased.",
     funFact:"Italian wages are among the lowest in Western Europe for comparable jobs. Real wages (adjusted for inflation) actually declined between 1990 and 2020, a unique situation among major economies."},

    {type:"match", pairs:[
      {trg:"dazio", src:"tariff"},
      {trg:"manodopera", src:"workforce"},
      {trg:"sindacato", src:"trade union"},
      {trg:"sciopero", src:"strike"},
      {trg:"sussidio", src:"subsidy"}
    ]},

    {type:"fb",
     s:"I {1} hanno proclamato uno sciopero contro la riforma del lavoro.",
     a:["sindacati"],
     opts:["sindacati","dazi","contratti","sussidi"],
     hint:"Organizations that represent workers and negotiate on their behalf. Italy's big three are CGIL, CISL, and UIL.",
     sSrc:"The {1} called a strike against the labor reform."},

    {type:"mc",
     q:"Perche la produttivita italiana e stagnante da vent'anni?",
     opts:["Perche gli italiani non lavorano abbastanza ore all'anno","Per la dimensione ridotta delle imprese, la scarsa innovazione e la burocrazia","Perche l'Italia non commercia abbastanza con l'estero","Perche i sindacati impediscono qualsiasi cambiamento"],
     ans:"Per la dimensione ridotta delle imprese, la scarsa innovazione e la burocrazia",
     hint:"Multiple structural factors: small firm size limits investment, technology adoption lags, and administrative complexity slows everything down."}
  ,{type:"match",pairs:[{trg:"il PIL pro capite",src:"the GDP per capita"},{trg:"il contratto",src:"the contract"},{trg:"la produttivita",src:"the productivity"},{trg:"la previsione",src:"the forecast / prediction"},{trg:"lo stipendio",src:"the salary"}]},{type:"mc",q:"How do you say \"employment\" in Italian?",opts:["la finestra","il tavolo","la bicicletta","l'occupazione"],ans:"l'occupazione",hint:"Recall the Italian vocabulary word taught in this lesson."},{type:"mc",q:"How do you say \"import\" in Italian?",opts:["l'importazione","la finestra","il tavolo","la bicicletta"],ans:"l'importazione",hint:"Recall the Italian vocabulary word taught in this lesson."},
{type:"fb",s:"Il governo ha firmato un accordo per ridurre il {1}.",a:["dazio"],opts:["dazio","sindacato","contratto","sussidio"],hint:"A tax imposed on goods crossing a border, used to control trade.",sSrc:"The government signed an agreement to reduce the {1}."}]
};
export default BATCH3_L_1;
