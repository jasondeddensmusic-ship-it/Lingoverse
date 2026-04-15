// Unit 15 Expansion — Lesson 5: Furniture and Neighbors
const LESSON_5 = {
  id:"itv2_u15l5", title:"Mobili e vicini", icon:"🪑", xp:15, board:true,
  steps:[
    {type:"intro", title:"Mobili e vicini",
     desc:"Learn to name specific furniture pieces and talk about neighbor relationships. Italian apartment living means close contact with neighbors, and furniture shopping is a national passion.",
     goals:["Name key furniture items in Italian","Discuss neighbor relationships","Describe rooms and their contents"]},

    {type:"teach", trg:"l'armadio", src:"the wardrobe / closet", pos:"noun", gender:"m",
     note:"Masculine. Plural: gli armadi.\nFrom Germanic 'armarjo.' Built-in closets are rare in Italy.",
     example:"A: L'armadio e abbastanza grande?\nB: Si, c'e spazio per tutti i vestiti.",
     exampleSrc:"A: Is the wardrobe big enough?\nB: Yes, there is space for all the clothes.",
     funFact:"Built-in closets ('armadi a muro') are uncommon in older Italian apartments. Freestanding wardrobes are the norm. Italian furniture stores like IKEA (called 'ikea' with Italian pronunciation) have become popular, but traditional 'mobilifici' (furniture factories) still thrive."},

    {type:"teach", trg:"il divano", src:"the sofa / couch", pos:"noun", gender:"m",
     note:"Masculine. From Turkish/Arabic 'divan' (council chamber).\n'Divano letto' = sofa bed.",
     example:"A: Il divano e comodo?\nB: Molto! E anche un divano letto.",
     exampleSrc:"A: Is the sofa comfortable?\nB: Very! It is also a sofa bed.",
     funFact:"The word 'divano' traveled from Persian ('diwan,' meaning 'council') through Arabic and Turkish to Italian. Originally it meant the cushioned seating along walls in Eastern council chambers. Italian living rooms ('soggiorni') center around the divano and the television."},

    {type:"teach", trg:"la lavatrice", src:"the washing machine", pos:"noun", gender:"f",
     note:"Feminine. From 'lavare' (to wash) + '-trice' (machine suffix).\n'Fare la lavatrice' = to do laundry.",
     example:"A: La lavatrice e inclusa?\nB: Si, e in bagno accanto al lavandino.",
     exampleSrc:"A: Is the washing machine included?\nB: Yes, it is in the bathroom next to the sink.",
     funFact:"In Italian apartments, the washing machine is almost always in the bathroom, not the kitchen or a laundry room. Dryers are rare. The combination 'lavasciuga' (washer-dryer) exists but is considered a luxury. 'Fare la lavatrice' literally means 'to do the washing machine.'"},

    {type:"teach", trg:"il frigorifero", src:"the refrigerator", pos:"noun", gender:"m",
     note:"Masculine. Often shortened to 'il frigo.'\nFrom Latin 'frigidarium' (cold room).",
     example:"A: Il frigo e vuoto!\nB: Dobbiamo fare la spesa.",
     exampleSrc:"A: The fridge is empty!\nB: We need to go grocery shopping.",
     funFact:"Italians almost always say 'il frigo' instead of the full 'frigorifero.' Italian fridges tend to be smaller than American ones because Italians shop for fresh food more frequently. A 'frigo americano' (American-style fridge) is considered impressively large."},

    {type:"teach", trg:"la scrivania", src:"the desk", pos:"noun", gender:"f",
     note:"Feminine. From 'scrivere' (to write).\nLiterally 'the writing place.'",
     example:"A: Ho bisogno di una scrivania per lo studio.\nB: C'e spazio in camera per una scrivania?",
     exampleSrc:"A: I need a desk for studying.\nB: Is there space in the bedroom for a desk?",
     funFact:"'Scrivania' literally means 'a place for writing,' from 'scrivere.' With remote work ('lavoro da remoto'), many Italians had to find space for a scrivania at home for the first time. Small apartments made this a real challenge, spawning creative furniture solutions."},

    {type:"teach", trg:"il vicino", src:"the neighbor", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la vicina. Plural: i vicini.\nAlso adjective: 'vicino' = near, close.",
     example:"A: I tuoi vicini sono simpatici?\nB: Quelli del piano di sotto si, ma quelli di sopra sono rumorosi.",
     exampleSrc:"A: Are your neighbors nice?\nB: The ones downstairs yes, but the ones upstairs are noisy.",
     funFact:"Neighbor relations in Italian apartment buildings can be intense. 'I vicini di sopra' (upstairs neighbors) and 'i vicini di sotto' (downstairs neighbors) are constant characters in Italian life. Noise complaints, cooking smells, and shared spaces generate both friendships and feuds."},

    {type:"teach", trg:"il rumore", src:"the noise", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'rumor' (noise, murmur).\n'Fare rumore' = to make noise. 'Rumoroso' = noisy.",
     example:"A: C'e troppo rumore di notte.\nB: Parla con i vicini o con l'amministratore.",
     exampleSrc:"A: There is too much noise at night.\nB: Talk to the neighbors or the building manager.",
     funFact:"Italian building regulations specify quiet hours ('ore di silenzio'): typically 1-4 PM and after 10 PM. Violating these can lead to complaints and even fines. The midday quiet period ('riposo pomeridiano') is taken very seriously, especially in southern Italy and smaller towns."},

    {type:"teach", trg:"il condominio", src:"the apartment building / condo", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'con' (together) + 'dominium' (ownership).\n'L'assemblea condominiale' = building meeting.",
     example:"A: Il condominio ha un giardino?\nB: Si, un piccolo giardino condominiale.",
     exampleSrc:"A: Does the building have a garden?\nB: Yes, a small shared garden.",
     funFact:"The 'condominio' is not just a building but a legal entity. All owners form the 'assemblea condominiale' (building assembly) and vote on shared expenses, renovations, and rules. These meetings are legendary for heated arguments. An 'amministratore di condominio' manages daily operations."},

    {type:"teach", trg:"il portiere", src:"the doorman / concierge", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la portiera.\n'La portineria' = the concierge's lodge.",
     example:"A: C'e un portiere nel palazzo?\nB: Si, e molto disponibile. Tiene i pacchi per noi.",
     exampleSrc:"A: Is there a doorman in the building?\nB: Yes, he is very helpful. He holds packages for us.",
     funFact:"The 'portiere' or 'portinaio' is a vanishing figure in Italian urban life. Once every building had one, living in a small apartment ('portineria') on the ground floor. They received mail, kept keys, and knew everyone's business. Cost-cutting has eliminated most positions, replaced by intercoms."},

    // Quiz steps
    {type:"mc", q:"Where is the washing machine usually placed in Italian apartments?",
     opts:["In the kitchen next to the dishwasher","In a dedicated laundry room on each floor","In the bathroom near the sink","In the basement shared laundry area"],
     ans:"In the bathroom near the sink",
     hint:"Italian apartment layouts differ from American ones. The b... houses this appliance because a separate laundry space is rare."},

    {type:"fb", s:"L'{1} e abbastanza grande per tutti i vestiti.",
     a:["armadio"],
     opts:["armadio","divano","frigo","balcone"],
     hint:"This large piece of furniture stores your clothing. Built-in versions are rare in older Italian apartments.",
     sSrc:"The {1} is big enough for all the clothes."},

    {type:"match", pairs:[
      {trg:"l'armadio", src:"the wardrobe"},
      {trg:"il divano", src:"the sofa"},
      {trg:"la lavatrice", src:"the washing machine"},
      {trg:"il frigorifero", src:"the refrigerator"},
      {trg:"la scrivania", src:"the desk"}
    ]},

    {type:"mc", q:"What are 'le ore di silenzio' in Italian buildings?",
     opts:["Hours when the elevator is turned off","Quiet hours enforced by building regulations","Hours reserved for children to play outside","Hours when the concierge is on duty"],
     ans:"Quiet hours enforced by building regulations",
     hint:"Typically 1-4 PM and after 10 PM. The midday rest period is taken very seriously, especially in the south."},

    {type:"fb", s:"I {1} di sopra sono molto rumorosi.",
     a:["vicini"],
     opts:["vicini","portieri","mobili","balconi"],
     hint:"The people who live in the apartment above yours. They make too much noise.",
     sSrc:"The upstairs {1} are very noisy."},

    {type:"mc", q:"What is 'l'assemblea condominiale'?",
     opts:["A religious gathering in the building chapel","A meeting where building owners vote on shared matters","A neighborhood street party held annually","A mandatory fire drill for all residents"],
     ans:"A meeting where building owners vote on shared matters",
     hint:"All apartment o... in the b... form this assembly. They decide on expenses, renovations, and rules."},

    {type:"fb", s:"Il {1} tiene i pacchi per noi quando non siamo a casa.",
     a:["portiere"],
     opts:["portiere","vicino","inquilino","proprietario"],
     hint:"This person works in the building entrance. They receive mail and packages. A vanishing profession in Italy.",
     sSrc:"The {1} holds packages for us when we are not home."},

    {type:"mc", q:"What does 'il frigo' shorten?",
     opts:["Il frigorifero","Il frigido","Il frigobar","Il frigidaire"],
     ans:"Il frigorifero",
     hint:"Italians almost always use the short form. Italian fridges tend to be smaller than American ones."}
  ]
};
export default LESSON_5;
