// L14: History & Heritage - Civilizations, traditions, and legacy
const LESSON_14 = {
  id:"esv2_b1gap_l14", title:"Historia y patrimonio", icon:"\u{1F3DB}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Historia y patrimonio",
     desc:"Explore history and heritage. Learn vocabulary for civilizations, traditions, and the legacy of the past.",
     goals:["Learn 20 history and heritage words","Discuss historical events and figures","Describe cultural traditions"]},

    {type:"teach", trg:"azteca", src:"Aztec", pos:"adj", gender:null,
     note:"Adjective/noun. Same form for both genders.\nRelating to the Aztec civilization.",
     example:"A: La cultura azteca era muy avanzada.\nB: S\u00ed, ten\u00edan un calendario muy preciso.",
     exampleSrc:"A: The Aztec culture was very advanced.\nB: Yes, they had a very precise calendar.",
     funFact:"From Nahuatl 'aztecatl' (person from Aztlan). The Aztecs called themselves 'Mexica', which gave Mexico its name."},

    {type:"teach", trg:"aborigen", src:"aboriginal, indigenous", pos:"noun", gender:null,
     note:"Noun/adjective. Common gender: el/la aborigen.\nOriginal inhabitants of a land.",
     example:"A: Los abor\u00edgenes australianos tienen una cultura milenaria.\nB: Es fascinante.",
     exampleSrc:"A: The Australian aborigines have an ancient culture.\nB: It is fascinating.",
     funFact:"From Latin 'aborigines' (from the beginning). In Spanish, 'ind\u00edgena' is now preferred over 'aborigen' in many contexts as more respectful."},

    {type:"teach", trg:"el cacique", src:"the chief, local boss", pos:"noun", gender:"m",
     note:"Masculine noun. Indigenous leader or corrupt local ruler.\nCaciquismo = political bossism.",
     example:"A: El cacique del pueblo controlaba todo.\nB: Eso ya no pasa, \u00bfverdad?",
     exampleSrc:"A: The local boss of the town controlled everything.\nB: That does not happen anymore, right?",
     funFact:"From Taino 'kasike' (chief). One of the first Caribbean words to enter Spanish. 'Caciquismo' became a key concept in Spanish political history."},

    {type:"teach", trg:"el cabildo", src:"the town council, chapter", pos:"noun", gender:"m",
     note:"Masculine noun. A governing body.\nCabildo insular = island council (Canary Islands).",
     example:"A: El cabildo decidi\u00f3 construir un nuevo hospital.\nB: Era muy necesario.",
     exampleSrc:"A: The town council decided to build a new hospital.\nB: It was very necessary.",
     funFact:"From Latin 'capitulum' (chapter). In the Canary Islands, each island has its own 'cabildo insular' as its governing body."},

    {type:"teach", trg:"la brujería", src:"the witchcraft", pos:"noun", gender:"f",
     note:"Feminine noun. The practice of magic or sorcery.\nBruja = witch. Brujo = wizard.",
     example:"A: En la Edad Media cre\u00edan mucho en la brujer\u00eda.\nB: Era una parte muy importante de la cultura.",
     exampleSrc:"A: In the Middle Ages they believed a lot in witchcraft.\nB: It was a very important part of the culture.",
     funFact:"Origin uncertain, possibly pre-Roman Iberian. The town of Zugarramurdi in Navarra is famous for its witch trials in 1610."},

    {type:"teach", trg:"la barbarie", src:"the barbarity, savagery", pos:"noun", gender:"f",
     note:"Feminine noun. Extreme cruelty or uncivilized behavior.\nCivilizaci\u00f3n y barbarie = famous dichotomy.",
     example:"A: La guerra es pura barbarie.\nB: Estoy completamente de acuerdo.",
     exampleSrc:"A: War is pure barbarity.\nB: I completely agree.",
     funFact:"From Greek 'barbaros' (foreigner, non-Greek speaker). Sarmiento's 'Facundo: Civilizaci\u00f3n y Barbarie' is a foundational text of Argentine literature."},

    {type:"mc",
     q:"\u00bfQu\u00e9 civilizaci\u00f3n fund\u00f3 la ciudad de Tenochtitl\u00e1n?",
     opts:["la azteca","la aborigen","la brit\u00e1nica","la budista"],
     ans:"la azteca",
     hint:"An indigenous civilization from central Mexico whose people called themselves the Mexica."},

    {type:"teach", trg:"la bendici\u00f3n", src:"the blessing", pos:"noun", gender:"f",
     note:"Feminine noun. A religious or figurative blessing.\nDar la bendici\u00f3n = to give a blessing.",
     example:"A: Los abuelos nos dieron su bendici\u00f3n.\nB: Eso significa mucho para nosotros.",
     exampleSrc:"A: The grandparents gave us their blessing.\nB: That means a lot to us.",
     funFact:"From Latin 'benedictio' (speaking well of). 'Ser una bendici\u00f3n' (to be a blessing) is used for anything wonderful: good weather, a good child."},

    {type:"teach", trg:"bautizar", src:"to baptize, to name", pos:"verb", gender:null,
     note:"Regular -ar verb. Religious and figurative.\nBautizar un barco = to christen a ship.",
     example:"A: Van a bautizar al beb\u00e9 el domingo.\nB: \u00bfQu\u00e9 nombre le van a poner?",
     exampleSrc:"A: They are going to baptize the baby on Sunday.\nB: What name are they going to give him?",
     funFact:"From Greek 'baptizein' (to immerse). In casual Spanish, 'bautizar el vino' means to water down wine, a joking reference to adding water."},

    {type:"teach", trg:"el bautizo", src:"the baptism, christening", pos:"noun", gender:"m",
     note:"Masculine noun. The ceremony of baptism.\nA major social event in Spain.",
     example:"A: El bautizo es el s\u00e1bado en la iglesia.\nB: \u00bfY despu\u00e9s hay comida?",
     exampleSrc:"A: The baptism is on Saturday at the church.\nB: And is there a meal afterwards?",
     funFact:"Baptisms in Spain are major family celebrations, often with a formal lunch for dozens of guests. Godparents ('padrinos') play an important social role."},

    {type:"teach", trg:"budista", src:"Buddhist", pos:"adj", gender:null,
     note:"Adjective/noun. Same form for both genders.\nRelating to Buddhism.",
     example:"A: Hay un templo budista en la ciudad.\nB: S\u00ed, es muy tranquilo y bonito.",
     exampleSrc:"A: There is a Buddhist temple in the city.\nB: Yes, it is very peaceful and beautiful.",
     funFact:"From 'Buda' (Buddha) + '-ista'. Buddhism has grown in Spain since the 1970s. There are estimated 80,000 practicing Buddhists in Spain today."},

    {type:"fb",
     s:"Van a {1} al beb\u00e9 este domingo en la catedral.",
     a:["bautizar"],
     opts:["bautizar","bendecir","bombardear","bordar"],
     hint:"A religious ceremony involving water, performed on infants. Also means 'to name'.",
     sSrc:"They are going to {1} the baby this Sunday at the cathedral."},

    {type:"teach", trg:"la burocracia", src:"the bureaucracy", pos:"noun", gender:"f",
     note:"Feminine noun. Complex administrative procedures.\nOften used negatively.",
     example:"A: La burocracia en Espa\u00f1a puede ser desesperante.\nB: S\u00ed, los tr\u00e1mites tardan mucho.",
     exampleSrc:"A: The bureaucracy in Spain can be exasperating.\nB: Yes, the procedures take a long time.",
     funFact:"From French 'bureaucratie': 'bureau' (desk/office) + Greek '-kratia' (rule). Spain's bureaucracy is notorious: the word 'papeleo' (paperwork) is practically a national sport."},

    {type:"teach", trg:"el beneficio", src:"the benefit, profit", pos:"noun", gender:"m",
     note:"Masculine noun. Advantage or financial gain.\nEn beneficio de = for the benefit of.",
     example:"A: Este proyecto trae muchos beneficios.\nB: \u00bfTanto econ\u00f3micos como sociales?",
     exampleSrc:"A: This project brings many benefits.\nB: Both economic and social ones?",
     funFact:"From Latin 'beneficium' (good deed): 'bene' (well) + 'facere' (to do). In business, 'beneficios' means profits. In health, it means benefits."},

    {type:"teach", trg:"el beneficiario", src:"the beneficiary", pos:"noun", gender:"m",
     note:"Masculine noun. La beneficiaria = female.\nThe person who receives a benefit.",
     example:"A: \u00bfQui\u00e9n es el beneficiario del seguro?\nB: Mi esposa.",
     exampleSrc:"A: Who is the beneficiary of the insurance?\nB: My wife.",
     funFact:"From 'beneficio' + '-ario' (person related to). The '-ario' suffix creates person nouns: secretario, funcionario, beneficiario, destinatario."},

    {type:"teach", trg:"la anterioridad", src:"the priority, previous time", pos:"noun", gender:"f",
     note:"Feminine noun. Con anterioridad = previously.\nA formal time expression.",
     example:"A: Debes reservar con anterioridad.\nB: \u00bfCon cu\u00e1ntos d\u00edas de antelaci\u00f3n?",
     exampleSrc:"A: You must book in advance.\nB: How many days in advance?",
     funFact:"From Latin 'anterior' (former) + '-idad'. 'Con anterioridad' is the formal version of 'antes' (before). Very common in legal and administrative texts."},

    {type:"mc",
     q:"\u00bfQu\u00e9 palabra describe los complicados tr\u00e1mites administrativos?",
     opts:["burocracia","brujer\u00eda","barbarie","bendici\u00f3n"],
     ans:"burocracia",
     hint:"Complex administrative procedures involving lots of paperwork and official stamps."},

    {type:"teach", trg:"bombardear", src:"to bomb, to bombard", pos:"verb", gender:null,
     note:"Regular -ar verb. Military and figurative.\nBombardear con preguntas = to bombard with questions.",
     example:"A: Nos bombardean con publicidad todo el d\u00eda.\nB: Es verdad, es agotador.",
     exampleSrc:"A: They bombard us with advertising all day.\nB: That is true, it is exhausting.",
     funFact:"From 'bomba' (bomb), from Italian 'bomba' (onomatopoeia). The figurative use 'bombardear con preguntas' is much more common than the military meaning."},

    {type:"fb",
     s:"El {1} del proyecto se destinar\u00e1 a los vecinos del barrio.",
     a:["beneficio"],
     opts:["beneficio","bautizo","cabildo","cacique"],
     hint:"A noun meaning advantage or profit, from the Latin for 'good deed'.",
     sSrc:"The {1} of the project will go to the neighborhood residents."},

    {type:"match", pairs:[
      {trg:"azteca", src:"Aztec"},
      {trg:"brujer\u00eda", src:"witchcraft"},
      {trg:"burocracia", src:"bureaucracy"},
      {trg:"bendici\u00f3n", src:"blessing"},
      {trg:"beneficiario", src:"beneficiary"}
    ]}
  ]
};
export default LESSON_14;
