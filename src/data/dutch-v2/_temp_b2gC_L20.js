// L20: Samenleving en Debat. Society and Debate
const LESSON_20 = {
  id:"nlv2_b2gC_l20", title:"Samenleving en Debat", icon:"\u{1F5E3}\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Society and Debate",
     desc:"The Netherlands is a society of debate and dialogue. Master the vocabulary of social issues, public discourse, and the Dutch art of speaking your mind.",
     goals:["Master 10 society and debate terms","Discuss Dutch social issues confidently","Navigate public discourse vocabulary"]},

    {type:"teach", trg:"de apartheidsregime", src:"the apartheid regime", pos:"noun", gender:"n",
     note:"Neuter (het apartheidsregime). Apartheid + regime.\n'Apartheid' itself comes from Afrikaans (which comes from Dutch).",
     example:"A: Het apartheidsregime in Zuid-Afrika duurde tientallen jaren.\nB: Tot 1994, met de verkiezing van Mandela.\nA: Nederland had ook banden met dat regime.\nB: Ja, dat is een moeilijk hoofdstuk.",
     exampleSrc:"A: The apartheid regime in South Africa lasted decades.\nB: Until 1994, with the election of Mandela.\nA: The Netherlands also had ties with that regime.\nB: Yes, that is a difficult chapter.",
     funFact:"The word 'apartheid' is Afrikaans, derived from Dutch 'apart' (separate) + '-heid' (state/condition). A Dutch-origin word for a South African system."},

    {type:"teach", trg:"de geweldscene", src:"the violent scene", pos:"noun", gender:"c",
     note:"Common gender (de). Geweld (violence) + scene.\nUsed for films, TV, and real events.",
     example:"A: Die film heeft veel geweldscenes.\nB: Is het geschikt voor kinderen?\nA: Absoluut niet, het is voor volwassenen.\nB: Dan kijken we iets anders.",
     exampleSrc:"A: That film has many violent scenes.\nB: Is it suitable for children?\nA: Absolutely not, it's for adults.\nB: Then we'll watch something else.",
     funFact:"The Dutch film classification system 'Kijkwijzer' uses icons to warn about violence, fear, language, discrimination, drugs, and sexual content."},

    {type:"teach", trg:"de jongedame", src:"the young lady", pos:"noun", gender:"c",
     note:"Common gender (de). Jong (young) + dame (lady).\nSlightly old-fashioned, can sound patronising.",
     example:"A: Die jongedame heeft een indrukwekkende toespraak gehouden.\nB: Hoe oud is ze?\nA: Pas achttien.\nB: Op die leeftijd al zo welbespraakt!",
     exampleSrc:"A: That young lady gave an impressive speech.\nB: How old is she?\nA: Only eighteen.\nB: Already so articulate at that age!",
     funFact:"'Jongedame' can sound condescending depending on context. Young Dutch women often prefer simply being addressed by name."},

    {type:"teach", trg:"de godenwereld", src:"the world of the gods / mythology", pos:"noun", gender:"c",
     note:"Common gender (de). Goden (gods) + wereld (world).\nUsed for mythology and epic stories.",
     example:"A: Het boek beschrijft de Noorse godenwereld.\nB: Met Thor en Odin?\nA: Ja, en ook Freya en Loki.\nB: Fascinerend, die verhalen zijn tijdloos.",
     exampleSrc:"A: The book describes the Norse world of the gods.\nB: With Thor and Odin?\nA: Yes, and also Freya and Loki.\nB: Fascinating, those stories are timeless.",
     funFact:"Dutch place names preserve old Germanic gods: 'Woensdrecht' (Wodan's riding), 'Donar' appears in 'donderdag' (Thursday = Thor's day)."},

    {type:"mc",
     q:"Het woord 'apartheid' komt uit het:",
     opts:["Afrikaans (afgeleid van Nederlands)","Duits","Engels","Frans"],
     ans:"Afrikaans (afgeleid van Nederlands)",
     hint:"The language of South Africa that descends from Dutch. 'Apart' + '-heid'."},

    {type:"teach", trg:"de hobbyschrijver", src:"the hobby writer / amateur writer", pos:"noun", gender:"c",
     note:"Common gender (de). Hobby + schrijver (writer).\n'Schrijven' = to write.",
     example:"A: Ik ben een hobbyschrijver.\nB: Wat schrijf je?\nA: Korte verhalen, vooral science fiction.\nB: Heb je al iets gepubliceerd?",
     exampleSrc:"A: I'm a hobby writer.\nB: What do you write?\nA: Short stories, mainly science fiction.\nB: Have you published anything yet?",
     funFact:"The Netherlands has a thriving amateur writing scene. 'Schrijversgroepen' (writing groups) meet in libraries and community centres nationwide."},

    {type:"teach", trg:"de fastfoodrestaurant", src:"the fast food restaurant", pos:"noun", gender:"n",
     note:"Neuter (het fastfoodrestaurant). Fastfood + restaurant.\n'De snackbar' is the Dutch alternative.",
     example:"A: Zullen we naar een fastfoodrestaurant gaan?\nB: Ik heb liever een snackbar.\nA: Wat is het verschil?\nB: Een snackbar is Nederlandser!",
     exampleSrc:"A: Shall we go to a fast food restaurant?\nB: I prefer a snack bar.\nA: What's the difference?\nB: A snack bar is more Dutch!",
     funFact:"Dutch 'snackbars' serve uniquely Dutch items: frikandel, kroket, bitterballen, kaassouffle. FEBO's vending wall ('automatiek') is an icon."},

    {type:"teach", trg:"de handtasdief", src:"the handbag thief / purse snatcher", pos:"noun", gender:"c",
     note:"Common gender (de). Handtas (handbag) + dief (thief).\n'Zakkenrollerij' = pickpocketing.",
     example:"A: Pas op voor handtasdieven in de stad.\nB: Is het zo erg?\nA: In drukke gebieden wel.\nB: Ik draag mijn tas altijd voor mijn buik.",
     exampleSrc:"A: Watch out for handbag thieves in the city.\nB: Is it that bad?\nA: In busy areas, yes.\nB: I always wear my bag in front of my body.",
     funFact:"Bicycle theft is actually a much bigger problem in the Netherlands than handbag theft. About 500,000 bikes are stolen annually."},

    {type:"fb",
     s:"Die film bevat veel {1} en is niet geschikt voor kinderen.",
     a:["geweldscenes"],
     opts:["geweldscenes","godenwerelden","jongedames","hobbyschrijvers"],
     hint:"Depictions of violence in movies or television. Scenes showing aggressive or harmful acts.",
     sSrc:"That film contains many {1} and is not suitable for children."},

    {type:"teach", trg:"het genotscentrum", src:"the pleasure centre (of the brain)", pos:"noun", gender:"n",
     note:"Neuter (het). Genot (pleasure) + centrum (centre).\nUsed in neuroscience and psychology.",
     example:"A: Chocola activeert het genotscentrum in de hersenen.\nB: Daarom is het zo verslavend!\nA: Ja, dopamine speelt een grote rol.\nB: Dat verklaart mijn chocoladeverslaving.",
     exampleSrc:"A: Chocolate activates the pleasure centre in the brain.\nB: That's why it's so addictive!\nA: Yes, dopamine plays a big role.\nB: That explains my chocolate addiction.",
     funFact:"Dutch neuroscience is world-class. Research institutions like the Donders Institute in Nijmegen are global leaders in brain research."},

    {type:"teach", trg:"het experimenteergedrag", src:"experimentation behaviour", pos:"noun", gender:"n",
     note:"Neuter (het). Experimenteer (experiment) + gedrag (behaviour).\nUsed for adolescent risk-taking.",
     example:"A: Experimenteergedrag hoort bij de puberteit.\nB: Zoals wat?\nA: Grenzen opzoeken, nieuwe dingen proberen.\nB: Dat is normaal, maar soms ook risicovol.",
     exampleSrc:"A: Experimentation behaviour is part of puberty.\nB: Like what?\nA: Pushing boundaries, trying new things.\nB: That's normal, but sometimes risky too.",
     funFact:"The Dutch approach to youth behaviour is relatively liberal. Open discussion and harm reduction are preferred over strict prohibition."},

    {type:"mc",
     q:"In Nederland worden per jaar ongeveer hoeveel fietsen gestolen?",
     opts:["100.000","500.000","1.000.000","50.000"],
     ans:"500.000",
     hint:"Half a million. With 23 million bikes in the country, theft is a massive problem."},

    {type:"fb",
     s:"Het boek beschrijft de Noorse {1} met Thor, Odin en Loki.",
     a:["godenwereld"],
     opts:["godenwereld","geweldscene","hobbyschrijver","jongedame"],
     hint:"The mythological realm where ancient gods live and act. Their universe.",
     sSrc:"The book describes the Norse {1} with Thor, Odin and Loki."},

    {type:"match", pairs:[
      {trg:"apartheidsregime", src:"apartheid regime"},
      {trg:"geweldscene", src:"violent scene"},
      {trg:"jongedame", src:"young lady"},
      {trg:"godenwereld", src:"world of the gods"}
    ]},

    {type:"mc",
     q:"De 'Kijkwijzer' is het Nederlandse systeem voor:",
     opts:["Radiozenders","Boekrecensies","Filmclassificatie en leeftijdswaarschuwingen","Televisiereclame"],
     ans:"Filmclassificatie en leeftijdswaarschuwingen",
     hint:"The Dutch system that uses icons to warn about content like violence, fear, and language."},

    {type:"fb",
     s:"Chocola activeert het {1} in de hersenen, daarom is het verslavend.",
     a:["genotscentrum"],
     opts:["genotscentrum","experimenteergedrag","godenwereld","fastfoodrestaurant"],
     hint:"The area in the brain that processes feelings of reward and pleasure.",
     sSrc:"Chocolate activates the {1} in the brain, that's why it's addictive."},

    {type:"match", pairs:[
      {trg:"hobbyschrijver", src:"hobby writer"},
      {trg:"handtasdief", src:"handbag thief"},
      {trg:"genotscentrum", src:"pleasure centre"},
      {trg:"experimenteergedrag", src:"experimentation behaviour"}
    ]},

    {type:"mc",
     q:"Nederlandse 'snackbars' zijn beroemd om:",
     opts:["Pizza en pasta","Hamburgers en hotdogs","Sushi en ramen","Frikandellen, kroketten en bitterballen"],
     ans:"Frikandellen, kroketten en bitterballen",
     hint:"Uniquely Dutch deep-fried snacks. FEBO's 'automatiek' vending wall is an icon of this culture."}
  ]
};
export default LESSON_20;
