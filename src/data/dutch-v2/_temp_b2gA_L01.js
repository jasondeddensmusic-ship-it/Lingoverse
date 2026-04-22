// B2 Gap Batch A. Lesson 01: Maatschappij & Beleid
// Theme: Society, policy, citizenship

const LESSON_1 = {id:"nlv2_b2gA_l1", title:"Maatschappij & Beleid", icon:"\u{1F3DB}", xp:40, board:true, steps:[
  {type:"intro", title:"Maatschappij & Beleid",
   desc:"Explore Dutch vocabulary for societal structures, policy-making, and civic life. These words appear frequently in news, debates, and NT2 exam texts.",
   goals:["Learn key policy and society nouns","Discuss civic institutions in Dutch","Use compound nouns for societal topics"]},

  {type:"teach", trg:"de bevolkingssamenstelling", src:"population composition", pos:"noun", gender:"c",
   note:"Compound: bevolking (population) + samenstelling (composition).\nUsed in demographics discussions.",
   example:"A: De bevolkingssamenstelling van Nederland verandert snel.\nB: Ja, er wonen steeds meer mensen met een migratieachtergrond.\nA: Dat heeft invloed op het beleid.\nB: Zeker, de overheid moet daarmee rekening houden.",
   exampleSrc:"A: The population composition of the Netherlands is changing rapidly.\nB: Yes, more and more people with a migration background live here.\nA: That influences policy.\nB: Certainly, the government must take that into account.",
   funFact:"The Netherlands tracks bevolkingssamenstelling through the CBS (Central Bureau of Statistics), one of the oldest statistical offices in the world (founded 1899)."},

  {type:"teach", trg:"het inburgeringstraject", src:"civic integration programme", pos:"noun", gender:"n",
   note:"Compound: inburgering (civic integration) + traject (programme).\nMandatory for most new immigrants.",
   example:"A: Hoe gaat je inburgeringstraject?\nB: Het is zwaar, maar ik leer veel.\nA: Welke onderdelen vind je het moeilijkst?\nB: De kennis van de Nederlandse maatschappij.",
   exampleSrc:"A: How is your civic integration programme going?\nB: It's tough, but I'm learning a lot.\nA: Which parts do you find hardest?\nB: The knowledge of Dutch society.",
   funFact:"Since 2022, newcomers to the Netherlands must pass the inburgeringsexamen within 3 years or face fines. The exam tests Dutch language skills plus knowledge of Dutch society."},

  {type:"teach", trg:"de fractie", src:"parliamentary faction, fraction", pos:"noun", gender:"c",
   note:"Political term: a group of MPs from the same party.\nAlso means fraction in math.",
   example:"A: De fractie van die partij heeft tegen het voorstel gestemd.\nB: Waarom? Waren ze het er niet mee eens?\nA: Nee, de fractie vond het plan te duur.\nB: Dat is begrijpelijk in deze economische situatie.",
   exampleSrc:"A: The faction of that party voted against the proposal.\nB: Why? Didn't they agree with it?\nA: No, the faction found the plan too expensive.\nB: That's understandable in this economic situation.",
   funFact:"The Dutch parliament (Tweede Kamer) has 150 seats. With many parties, coalition-building between fracties is essential. The Netherlands has never had a single-party government."},

  {type:"teach", trg:"de gemeentesecretaris", src:"municipal secretary", pos:"noun", gender:"c",
   note:"Compound: gemeente (municipality) + secretaris (secretary).\nThe highest-ranking civil servant in a municipality.",
   example:"A: De gemeentesecretaris leidt de ambtelijke organisatie.\nB: Is dat een belangrijke functie?\nA: Ja, hij of zij adviseert het college van B en W.\nB: En coordineert alle gemeentelijke diensten.",
   exampleSrc:"A: The municipal secretary leads the civil service organization.\nB: Is that an important position?\nA: Yes, he or she advises the mayor and aldermen.\nB: And coordinates all municipal services.",
   funFact:"Dutch municipalities (gemeenten) have enormous autonomy compared to many countries. The gemeentesecretaris is the link between elected officials and the civil service apparatus."},

  {type:"teach", trg:"het inburgeringsbeleid", src:"civic integration policy", pos:"noun", gender:"n",
   note:"Compound: inburgering + beleid (policy).\nFrequent in political debates about immigration.",
   example:"A: Het inburgeringsbeleid is de afgelopen jaren strenger geworden.\nB: Dat klopt, de eisen zijn hoger.\nA: Vind je dat een goede ontwikkeling?\nB: Het hangt ervan af hoe je het bekijkt.",
   exampleSrc:"A: Civic integration policy has become stricter in recent years.\nB: That's true, the requirements are higher.\nA: Do you think that's a good development?\nB: It depends on how you look at it.",
   funFact:"The Netherlands was one of the first European countries to introduce mandatory civic integration (inburgering) in 1998. The policy has been revised multiple times since."},

  {type:"teach", trg:"de indicatie", src:"indication, referral", pos:"noun", gender:"c",
   note:"Medical/administrative term. An official assessment of need.\nUsed for healthcare and social services.",
   example:"A: Je hebt een indicatie nodig voor thuiszorg.\nB: Hoe krijg ik die?\nA: Via je huisarts of het wijkteam.\nB: En dan bepalen zij hoeveel zorg ik krijg?",
   exampleSrc:"A: You need an indication for home care.\nB: How do I get one?\nA: Through your GP or the neighbourhood team.\nB: And then they determine how much care I receive?",
   funFact:"In Dutch healthcare, an indicatie is the official gateway to receiving care. Without it, insurers will not cover treatment. The system balances access with cost control."},

  {type:"tip", title:"Compound Nouns in Policy Dutch",
   text:"Dutch policy vocabulary relies heavily on compound nouns. The last part determines the article:\n\nde bevolking + de samenstelling = de bevolkingssamenstelling\nde inburgering + het traject = het inburgeringstraject\nde gemeente + de secretaris = de gemeentesecretaris\n\nNote the linking -s- between parts: bevolkings-, inburgerings-.",
   deepDive:{title:"Linking Elements in Compounds",
    text:"Dutch compounds often have linking elements:\n\n-s-: bevolkingssamenstelling, inburgeringsbeleid\n-en-: ziekenhuis, pannenkoek\n-e-: gemeentesecretaris\n\nThere is no single rule for which linking element to use. Native speakers learn them with each compound. The good news: the meaning is always transparent from the parts."}},

  {type:"mc", q:"Welk woord betekent 'civic integration programme'?",
   opts:["het inburgeringstraject","de gemeentesecretaris","de bevolkingssamenstelling","de indicatie"],
   ans:"het inburgeringstraject",
   hint:"Compound of inburgering (civic integration) + traject (programme/track)."},

  {type:"fb", s:"De {1} van Nederland is de afgelopen decennia sterk veranderd.",
   a:["bevolkingssamenstelling"], opts:["bevolkingssamenstelling","gemeentesecretaris","fractie","indicatie"],
   hint:"The demographic make-up of a country's people.",
   sSrc:"The population composition of the Netherlands has changed significantly in recent decades."},

  {type:"mc", q:"De fractie stemde tegen het voorstel. Wat is een 'fractie' in de politiek?",
   opts:["een type verkiezing","een groep parlementsleden van dezelfde partij","een onderdeel van een gemeente","een soort beleid"],
   ans:"een groep parlementsleden van dezelfde partij",
   hint:"Think of a group of politicians who belong to the same party in parliament."},

  {type:"fb", s:"De {1} is de hoogste ambtenaar van de gemeente.",
   a:["gemeentesecretaris"], opts:["gemeentesecretaris","fractie","indicatie","inburgeringstraject"],
   hint:"The top civil servant who leads the municipal organization.",
   sSrc:"The municipal secretary is the highest-ranking civil servant of the municipality."},

  {type:"match", pairs:[
    {trg:"bevolkingssamenstelling", src:"population composition"},
    {trg:"inburgeringstraject", src:"civic integration programme"},
    {trg:"fractie", src:"parliamentary faction"},
    {trg:"gemeentesecretaris", src:"municipal secretary"},
    {trg:"indicatie", src:"indication, referral"}
  ]},

  {type:"mc", q:"Je hebt een indicatie nodig voor thuiszorg. Wat is een 'indicatie'?",
   opts:["a hospital department","a medical prescription","an official assessment of care needs","a type of insurance"],
   ans:"an official assessment of care needs",
   hint:"An o... determination that you qualify for a certain level of c...."},

  {type:"fb", s:"Het {1} is de afgelopen jaren strenger geworden.",
   a:["inburgeringsbeleid"], opts:["inburgeringsbeleid","inburgeringstraject","bevolkingssamenstelling","indicatie"],
   hint:"The government's approach to civic integration for newcomers.",
   sSrc:"Civic integration policy has become stricter in recent years."},

  {type:"drag_fill", s:"De {1} stemde tegen het nieuwe {2} over de {3}.",
   blanks:{"1":"fractie","2":"inburgeringsbeleid","3":"bevolkingssamenstelling"},
   pool:["fractie","inburgeringsbeleid","bevolkingssamenstelling","indicatie","gemeentesecretaris"],
   hint:"The parliamentary group voted against the new integration approach regarding demographics."}
]};
export default LESSON_1;
