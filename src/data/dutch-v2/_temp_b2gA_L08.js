// B2 Gap Batch A — Lesson 08: Identiteit & Samenleving
// Theme: Identity, immigration, diversity

const LESSON_8 = {id:"nlv2_b2gA_l8", title:"Identiteit & Samenleving", icon:"\u{1F30D}", xp:40, board:true, steps:[
  {type:"intro", title:"Identiteit & Samenleving",
   desc:"Learn vocabulary about identity, immigration, and social change. These terms are essential for understanding Dutch debates about diversity and integration.",
   goals:["Learn identity and immigration vocabulary","Discuss individualism and social change","Understand Dutch integration terminology"]},

  {type:"teach", trg:"het individualisme", src:"individualism", pos:"noun", gender:"n",
   note:"het-word. -isme suffix. The philosophy of individual freedom and self-reliance.",
   example:"A: Het individualisme is sterk in de Nederlandse cultuur.\nB: Dat klopt. Nederlanders hechten veel waarde aan persoonlijke vrijheid.\nA: Maar soms gaat het ten koste van de gemeenschap.\nB: Dat is de keerzijde van het individualisme.",
   exampleSrc:"A: Individualism is strong in Dutch culture.\nB: That's true. Dutch people value personal freedom greatly.\nA: But sometimes it comes at the expense of the community.\nB: That's the downside of individualism.",
   funFact:"The Netherlands scores very high on Hofstede's individualism index (80/100). Dutch culture strongly emphasizes personal responsibility and the right to your own opinion."},

  {type:"teach", trg:"de individualisering", src:"individualization", pos:"noun", gender:"c",
   note:"The process of becoming more individualistic.\n-ering suffix creates process nouns.",
   example:"A: De individualisering van de samenleving heeft grote gevolgen.\nB: Zoals wat?\nA: Meer eenpersoons-huishoudens, minder kerkbezoek.\nB: En meer nadruk op zelfontplooiing.",
   exampleSrc:"A: The individualization of society has major consequences.\nB: Such as?\nA: More single-person households, less church attendance.\nB: And more emphasis on self-development.",
   funFact:"The Dutch -isering suffix corresponds to English -ization. It always creates a de-word: individualisering, digitalisering, flexibilisering. The suffix marks a gradual process of change."},

  {type:"teach", trg:"de identiteitskaart", src:"identity card", pos:"noun", gender:"c",
   note:"Compound: identiteit (identity) + kaart (card).\nOfficial ID document. Also: identiteitsbewijs.",
   example:"A: Mag ik uw identiteitskaart zien?\nB: Natuurlijk, hier is hij.\nA: In Nederland is het verplicht om je te kunnen identificeren.\nB: Ja, iedereen boven de veertien moet een geldig ID bij zich hebben.",
   exampleSrc:"A: May I see your identity card?\nB: Of course, here it is.\nA: In the Netherlands it's mandatory to be able to identify yourself.\nB: Yes, everyone over fourteen must carry a valid ID.",
   funFact:"The Dutch identiteitskaart costs about 75 euros and is valid for 10 years. Since 2005, the Netherlands has an identificatieplicht (ID obligation) for everyone 14 and older."},

  {type:"teach", trg:"de keerzijde", src:"downside, flip side", pos:"noun", gender:"c",
   note:"Compound: keer (turn) + zijde (side).\nThe negative aspect of something positive.",
   example:"A: De keerzijde van technologie is dat we altijd bereikbaar zijn.\nB: Dat is een goed punt.\nA: Elke ontwikkeling heeft een keerzijde.\nB: We moeten de voordelen afwegen tegen de nadelen.",
   exampleSrc:"A: The downside of technology is that we're always reachable.\nB: That's a good point.\nA: Every development has a downside.\nB: We must weigh the advantages against the disadvantages.",
   funFact:"The word 'keerzijde' literally means 'turn-side': the side you see when you flip something over. On Dutch coins, the keerzijde shows the national emblem."},

  {type:"teach", trg:"de flexibilisering", src:"flexibilization", pos:"noun", gender:"c",
   note:"-isering suffix. The trend toward more flexibility in work and society.",
   example:"A: De flexibilisering van de arbeidsmarkt heeft voor- en nadelen.\nB: Meer vrijheid voor werknemers, maar minder zekerheid.\nA: Veel jongeren hebben alleen nog flexcontracten.\nB: Dat maakt het moeilijk om een hypotheek te krijgen.",
   exampleSrc:"A: The flexibilization of the job market has pros and cons.\nB: More freedom for employees, but less security.\nA: Many young people only have flex contracts.\nB: That makes it difficult to get a mortgage.",
   funFact:"The Netherlands has one of the highest rates of flexwerk (flexible work) in Europe. The ZZP'er (self-employed professional) has become a symbol of Dutch flexibilisering."},

  {type:"teach", trg:"de industrialisatie", src:"industrialization", pos:"noun", gender:"c",
   note:"The historical process of becoming industrialized.\n-isatie suffix. de-word.",
   example:"A: De industrialisatie van Nederland begon laat vergeleken met Engeland.\nB: Wanneer was dat?\nA: Pas in de tweede helft van de negentiende eeuw.\nB: Maar daarna ging het wel snel.",
   exampleSrc:"A: The industrialization of the Netherlands started late compared to England.\nB: When was that?\nA: Only in the second half of the nineteenth century.\nB: But after that it went quickly.",
   funFact:"Dutch industrialisatie came late because the Netherlands was already wealthy from trade. Why build factories when you can just buy and sell? The shift came when steam power made factory production unavoidable."},

  {type:"tip", title:"-isering and -isatie: Process Nouns",
   text:"Dutch has two suffixes for societal processes:\n\n-isering (ongoing process):\n- individualisering, flexibilisering, digitalisering\n\n-isatie (completed or historical process):\n- industrialisatie, privatisatie, globalisatie\n\nBoth are ALWAYS de-words (common gender).\nBoth correspond to English -ization.\n\nThe distinction: -isering emphasizes the process is still happening. -isatie treats it as more established or historical.",
   deepDive:{title:"Dutch Society in Transition",
    text:"Modern Dutch society is shaped by several -isering/-isatie trends:\n\n- Individualisering: from group identity to personal identity\n- Flexibilisering: from lifetime employment to flexible contracts\n- Digitalisering: from paper to digital\n- Vergrijzing: aging population (not -isering but same pattern)\n\nThese trends appear constantly in NT2 reading texts and political debates. Understanding them is key to following Dutch current affairs."}},

  {type:"mc", q:"Welk woord betekent 'downside, flip side'?",
   opts:["de keerzijde","de identiteitskaart","het individualisme","de flexibilisering"],
   ans:"de keerzijde",
   hint:"Keer (turn) + zijde (side). The negative aspect you see when you flip something over."},

  {type:"fb", s:"Het {1} is sterk in de Nederlandse cultuur.",
   a:["individualisme"], opts:["individualisme","industrialisatie","identiteitskaart","flexibilisering"],
   hint:"The philosophy that values personal freedom above collective identity.",
   sSrc:"Individualism is strong in Dutch culture."},

  {type:"mc", q:"Mag ik uw identiteitskaart zien? Wat is een 'identiteitskaart'?",
   opts:["an official identity document","a business card","a library card","a credit card"],
   ans:"an official identity document",
   hint:"Identiteit (i...) + kaart (card). An o... d... proving who you are."},

  {type:"fb", s:"De {1} van de arbeidsmarkt betekent minder vaste contracten.",
   a:["flexibilisering"], opts:["flexibilisering","industrialisatie","individualisering","keerzijde"],
   hint:"The trend toward more flexibility (flexibiliteit) in the workplace.",
   sSrc:"The flexibilization of the job market means fewer permanent contracts."},

  {type:"match", pairs:[
    {trg:"individualisme", src:"individualism"},
    {trg:"individualisering", src:"individualization"},
    {trg:"identiteitskaart", src:"identity card"},
    {trg:"keerzijde", src:"downside"},
    {trg:"flexibilisering", src:"flexibilization"},
    {trg:"industrialisatie", src:"industrialization"}
  ]},

  {type:"mc", q:"De individualisering van de samenleving heeft grote gevolgen. Wat is 'individualisering'?",
   opts:["the process of society becoming more individualistic","a type of insurance","a form of government","a management strategy"],
   ans:"the process of society becoming more individualistic",
   hint:"The -isering suffix marks an ongoing societal p.... Individual + isering."},

  {type:"fb", s:"De {1} van Nederland begon in de negentiende eeuw.",
   a:["industrialisatie"], opts:["industrialisatie","individualisering","flexibilisering","keerzijde"],
   hint:"The historical process of factories and manufacturing replacing manual production.",
   sSrc:"The industrialization of the Netherlands started in the nineteenth century."},

  {type:"drag_fill", s:"Elke ontwikkeling heeft een {1}: de {2} brengt vrijheid, maar de {3} is minder zekerheid.",
   blanks:{"1":"keerzijde","2":"flexibilisering","3":"keerzijde"},
   pool:["keerzijde","flexibilisering","individualisme","industrialisatie","identiteitskaart"],
   hint:"Every trend has a flip side. Flexible work brings freedom, but the flip side is less security."}
]};
export default LESSON_8;
