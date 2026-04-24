// B2 Gap Batch A. Lesson 18: Verbanden & Structuur
// Theme: Connections, structures, organization

const LESSON_18 = {id:"nlv2_b2gA_l18", title:"Verbanden & Structuur", icon:"\u{1F517}", xp:40, board:true, steps:[
  {type:"intro", title:"Verbanden & Structuur",
   desc:"Learn vocabulary about connections, organizational structures, and group dynamics. These abstract nouns are used in academic, business, and policy discussions.",
   goals:["Learn vocabulary about structures and connections","Discuss organizational concepts","Understand Dutch compound nouns for abstract relationships"]},

  {type:"teach", trg:"de dwarsverbinding", src:"cross-connection, lateral link", pos:"noun", gender:"c",
   note:"Compound: dwars (cross/lateral) + verbinding (connection).\nA link between things that are not directly connected.",
   example:"A: We moeten meer dwarsverbindingen maken tussen afdelingen.\nB: Hoe bedoel je?\nA: Mensen van marketing moeten met technici praten.\nB: Die dwarsverbindingen leiden tot betere innovatie.",
   exampleSrc:"A: We need to create more cross-connections between departments.\nB: What do you mean?\nA: People from marketing need to talk to technicians.\nB: Those lateral links lead to better innovation.",
   funFact:"The word 'dwars' in Dutch means 'cross', 'lateral', or 'contrary'. A 'dwarsligger' is someone who is being difficult (literally: someone who lies across the path). A dwarsverbinding is constructive."},

  {type:"teach", trg:"het groepsverband", src:"group setting, group context", pos:"noun", gender:"n",
   note:"Compound: groep (group) + verband (connection/context).\nhet-word. Doing things as a group.",
   example:"A: In groepsverband leer je meer dan alleen.\nB: Dat klopt, je leert van elkaars fouten.\nA: Werken in groepsverband is ook goed voor je sociale vaardigheden.\nB: Niet iedereen vindt groepswerk prettig.",
   exampleSrc:"A: In a group setting you learn more than alone.\nB: That's true, you learn from each other's mistakes.\nA: Working in a group context is also good for your social skills.\nB: Not everyone enjoys group work.",
   funFact:"Dutch education emphasizes werken in groepsverband from primary school onward. The polder model (consensus-building) starts early. Group projects are a staple of Dutch education."},

  {type:"teach", trg:"de gokverslaafde", src:"gambling addict", pos:"noun", gender:"c",
   note:"Compound: gok (gamble) + verslaafde (addict).\nSomeone addicted to gambling.",
   example:"A: De gokverslaafde verloor alles: zijn huis, zijn baan, zijn familie.\nB: Dat is een heel triest verhaal.\nA: Gokverslaving is een erkende ziekte in Nederland.\nB: Er is hulp beschikbaar via verslavingszorg.",
   exampleSrc:"A: The gambling addict lost everything: his house, his job, his family.\nB: That's a very sad story.\nA: Gambling addiction is a recognized illness in the Netherlands.\nB: Help is available through addiction care.",
   funFact:"The Netherlands has about 80,000 gokverslaafden according to estimates. Since the legalization of online gambling in 2021, the number has been rising. The government regulates via the Kansspelautoriteit."},

  {type:"teach", trg:"de gokautomaat", src:"slot machine, gambling machine", pos:"noun", gender:"c",
   note:"Compound: gok (gamble) + automaat (machine).\nFound in casinos and formerly in cafes.",
   example:"A: Gokautomaten stonden vroeger in elk cafe.\nB: Dat is tegenwoordig verboden.\nA: Je vindt ze nu alleen nog in speelhallen en casino's.\nB: Goed, want ze waren heel verslavend.",
   exampleSrc:"A: Slot machines used to be in every cafe.\nB: That's forbidden nowadays.\nA: You only find them in arcades and casinos now.\nB: Good, because they were very addictive.",
   funFact:"Until 2000, gokautomaten were common in Dutch cafes and snackbars. The government removed most of them to combat gambling addiction. Holland Casino is the only legal casino chain in the Netherlands."},

  {type:"teach", trg:"de graffiti", src:"graffiti", pos:"noun", gender:"c",
   note:"From Italian 'graffiti' (scratched drawings).\nStreet art or vandalism, depending on perspective.",
   example:"A: Is graffiti kunst of vandalisme?\nB: Dat hangt af van waar het staat.\nA: In Amsterdam zijn er legale graffitimuren.\nB: Banksy heeft graffiti tot museumkunst verheven.",
   exampleSrc:"A: Is graffiti art or vandalism?\nB: That depends on where it is.\nA: In Amsterdam there are legal graffiti walls.\nB: Banksy elevated graffiti to museum art.",
   funFact:"Amsterdam has a vibrant graffiti scene. The NDSM Wharf is famous for street art. Dutch cities have designated legal graffiti walls (legale graffitiplaatsen) to channel creative expression."},

  {type:"teach", trg:"de holding", src:"holding company", pos:"noun", gender:"c",
   note:"From English. A company that owns other companies.\nCommon in Dutch business structures.",
   example:"A: De holding bezit vijf dochterondernemingen.\nB: Wat is het voordeel van een holdingstructuur?\nA: Fiscaal voordeel en risicospreiding.\nB: Veel Nederlandse ondernemers hebben een holding.",
   exampleSrc:"A: The holding company owns five subsidiaries.\nB: What is the advantage of a holding structure?\nA: Tax advantages and risk distribution.\nB: Many Dutch entrepreneurs have a holding company.",
   funFact:"The Netherlands is known as a 'doorstroomland' (conduit country) for international holdings. Many multinationals have their European holding in the Netherlands due to favorable tax treaties and legal infrastructure."},

  {type:"tip", title:"Compound Nouns for Social Problems",
   text:"Dutch creates precise vocabulary for social issues through compounds:\n\ngok- (gambling):\n- gokverslaafde (gambling addict)\n- gokautomaat (slot machine)\n- gokverslaving (gambling addiction)\n\nThe pattern [activity] + verslaafde describes addicts:\n- gokverslaafde (gambling addict)\n- drugsverslaafde (drug addict)\n- internetverslaafde (internet addict)\n\nAll are de-words when used as nouns.",
   deepDive:{title:"Addiction Care in the Netherlands",
    text:"The Netherlands has a progressive approach to addiction:\n\n- Verslavingszorg (addiction care) is covered by health insurance\n- Harm reduction over punishment\n- Legal regulated gambling via Kansspelautoriteit\n- Drug policy: soft drugs tolerated, hard drugs prosecuted\n\nThis approach means that vocabulary about addiction (verslaving, verslaafde, gokautomaat) appears frequently in policy texts and news articles."}},

  {type:"mc", q:"Welk woord betekent 'cross-connection'?",
   opts:["de dwarsverbinding","het groepsverband","de holding","de graffiti"],
   ans:"de dwarsverbinding",
   hint:"Dwars (lateral/cross) + verbinding (connection). A link between separate areas."},

  {type:"fb", s:"In {1} leer je meer dan alleen.",
   a:["groepsverband"], opts:["groepsverband","dwarsverbinding","holding","graffiti"],
   hint:"The setting of working or learning as a group. Groep + verband.",
   sSrc:"In a group setting you learn more than alone."},

  {type:"mc", q:"De gokverslaafde verloor alles. Wat is een 'gokverslaafde'?",
   opts:["a professional poker player","someone addicted to gambling","a casino owner","a lottery winner"],
   ans:"someone addicted to gambling",
   hint:"Gok (gamble) + verslaafde (addict). S... who cannot stop g...."},

  {type:"fb", s:"{1} stonden vroeger in elk cafe.",
   a:["Gokautomaten"], opts:["Gokautomaten","Graffiti","Holdings","Dwarsverbindingen"],
   hint:"Gambling machines. Plural of gokautomaat.",
   sSrc:"Slot machines used to be in every cafe."},

  {type:"match", pairs:[
    {trg:"dwarsverbinding", src:"cross-connection"},
    {trg:"groepsverband", src:"group setting"},
    {trg:"gokverslaafde", src:"gambling addict"},
    {trg:"gokautomaat", src:"slot machine"},
    {trg:"graffiti", src:"graffiti"},
    {trg:"holding", src:"holding company"}
  ]},

  {type:"mc", q:"Is graffiti kunst of vandalisme? Wat is 'graffiti'?",
   opts:["a painting technique","a music genre","drawings or text sprayed on walls","a type of sculpture"],
   ans:"drawings or text sprayed on walls",
   hint:"From Italian. Street art that is s... or painted on public surfaces."},

  {type:"fb", s:"De {1} bezit vijf dochterondernemingen.",
   a:["holding"], opts:["holding","graffiti","dwarsverbinding","gokautomaat"],
   hint:"A parent company that owns and controls other companies.",
   sSrc:"The holding company owns five subsidiaries."},

  {type:"drag_fill", s:"De {1} werkte in {2} aan een project over {3} als kunst.",
   blanks:{"1":"gokverslaafde","2":"groepsverband","3":"graffiti"},
   pool:["gokverslaafde","groepsverband","graffiti","holding","dwarsverbinding"],
   hint:"The person recovering from addiction worked in a group setting on a project about street art."}
]};
export default LESSON_18;
