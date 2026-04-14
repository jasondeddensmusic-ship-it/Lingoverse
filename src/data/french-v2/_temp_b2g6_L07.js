const LESSON_7 = {
  id:"frv2_b2g6_l7", title:"Expressions et locutions", icon:"\uD83D\uDDE3\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Expressions et locutions",
     desc:"Master French adverbial expressions and set phrases that add precision and elegance to formal speech.",
     goals:["Learn 20 adverbial and prepositional expressions","Use formal connectors in debate","Express nuance with set phrases"]},

    {type:"teach", trg:"ailleurs", src:"elsewhere", pos:"adv", gender:null,
     note:"Adverb. In another place. 'D'ailleurs' means moreover/besides.",
     example:"A: Il faudrait chercher ailleurs.\nB: D'ailleurs, j'ai une autre idée.",
     exampleSrc:"A: We should look elsewhere.\nB: Besides, I have another idea.",
     funFact:"'Par ailleurs' means furthermore. 'D'ailleurs' is one of the most common French connectors."},

    {type:"teach", trg:"dans l'absolu", src:"in absolute terms", pos:"adv", gender:null,
     note:"Adverbial phrase. Considering something without context or conditions.",
     example:"A: Dans l'absolu, c'est une bonne idée.\nB: Mais en pratique, c'est compliqué.",
     exampleSrc:"A: In absolute terms, it's a good idea.\nB: But in practice, it's complicated.",
     funFact:"A favorite of French intellectuals for introducing a theoretical perspective before a practical objection."},

    {type:"teach", trg:"c'est-à-dire", src:"that is to say", pos:"conj", gender:null,
     note:"Conjunction. Used to clarify or rephrase. Abbreviated 'c.-à-d.'",
     example:"A: Il est bilingue, c'est-à-dire qu'il parle deux langues.\nB: Lesquelles ?",
     exampleSrc:"A: He's bilingual, that is to say he speaks two languages.\nB: Which ones?",
     funFact:"One of the most characteristic French connectors. Used constantly in both speech and writing."},

    {type:"teach", trg:"logiquement", src:"logically, normally", pos:"adv", gender:null,
     note:"Adverb. As expected or by logic. Also means 'in theory, supposedly'.",
     example:"A: Logiquement, il devrait arriver à midi.\nB: S'il n'y a pas de retard.",
     exampleSrc:"A: Logically, he should arrive at noon.\nB: If there's no delay.",
     funFact:"In everyday French, 'logiquement' often means 'supposedly' or 'in principle' rather than strict logic."},

    {type:"mc",
     q:"Que signifie 'dans l'absolu' ?",
     opts:["En théorie, sans conditions","Absolument pas","De manière absolue","Sans aucun doute"],
     ans:"En théorie, sans conditions",
     hint:"A formal phrase for considering something on its own merits, without practical constraints."},

    {type:"teach", trg:"là-dedans", src:"in there, in that", pos:"adv", gender:null,
     note:"Adverb. Inside that thing or situation.",
     example:"A: Qu'est-ce qu'il y a là-dedans ?\nB: Des vieux documents à trier.",
     exampleSrc:"A: What's in there?\nB: Old documents to sort through.",
     funFact:"French uses hyphenated 'là' compounds: là-dedans, là-dessus, là-dessous, là-bas. All directional."},

    {type:"teach", trg:"là-dessus", src:"on that, about that", pos:"adv", gender:null,
     note:"Adverb. On that subject or on top of that thing.",
     example:"A: Là-dessus, je suis d'accord avec toi.\nB: Tant mieux, avançons.",
     exampleSrc:"A: On that point, I agree with you.\nB: Good, let's move forward.",
     funFact:"Can be physical (on top of that) or abstract (on that topic). Very useful in debates."},

    {type:"teach", trg:"lors", src:"at the time of", pos:"adv", gender:null,
     note:"Adverb. Used in 'lors de' (during, at the time of). Formal register.",
     example:"A: Lors de la réunion, un accord a été trouvé.\nB: Après trois heures de négociations.",
     exampleSrc:"A: During the meeting, an agreement was reached.\nB: After three hours of negotiations.",
     funFact:"'Dès lors' means from that point on. 'Lors de' is essential for formal narrative in French."},

    {type:"fb",
     s:"Il est polyglotte, {1} qu'il parle plusieurs langues.",
     a:["c'est-à-dire"],
     opts:["c'est-à-dire","logiquement","là-dessus","ailleurs"],
     hint:"A connector used to clarify or rephrase what was just said. Abbreviated c.-a-d.",
     sSrc:"He's a polyglot, {1} he speaks several languages."},

    {type:"teach", trg:"jusqu'au bout", src:"to the very end", pos:"adv", gender:null,
     note:"Adverbial phrase. All the way through without giving up.",
     example:"A: Il faut aller jusqu'au bout de ce projet.\nB: Abandonner n'est pas une option.",
     exampleSrc:"A: We must see this project through to the very end.\nB: Giving up is not an option.",
     funFact:"'Bout' means end or tip. This phrase conveys determination and perseverance in French culture."},

    {type:"teach", trg:"en marge de", src:"on the margins of, alongside", pos:"prep", gender:null,
     note:"Prepositional phrase. On the sidelines of, or alongside an event.",
     example:"A: En marge du sommet, des manifestants se sont rassemblés.\nB: Ils protestaient contre les accords.",
     exampleSrc:"A: On the margins of the summit, protesters gathered.\nB: They were protesting against the agreements.",
     funFact:"'En marge' literally means in the margin. Used in journalism for side events at major gatherings."},

    {type:"teach", trg:"en guise de", src:"by way of, as", pos:"prep", gender:null,
     note:"Prepositional phrase. Used instead of or in place of something.",
     example:"A: En guise de remerciement, voici un cadeau.\nB: C'est très gentil de votre part.",
     exampleSrc:"A: By way of thanks, here is a gift.\nB: That's very kind of you.",
     funFact:"From Old French 'guise' meaning manner or fashion. Also seen in 'à sa guise' (as one pleases)."},

    {type:"mc",
     q:"Que signifie 'jusqu'au bout' ?",
     opts:["Jusqu'à la fin, complètement","Au début seulement","À contrecœur","De temps en temps"],
     ans:"Jusqu'à la fin, complètement",
     hint:"'Bout' means end or tip. This phrase expresses total commitment and perseverance."},

    {type:"teach", trg:"dans l'espoir de", src:"in the hope of", pos:"prep", gender:null,
     note:"Prepositional phrase. Expressing the motivation behind an action.",
     example:"A: Il travaille dur dans l'espoir de réussir.\nB: Sa détermination est admirable.",
     exampleSrc:"A: He works hard in the hope of succeeding.\nB: His determination is admirable.",
     funFact:"A formal alternative to 'en espérant'. Common in written French, news articles, and speeches."},

    {type:"teach", trg:"dans la limite de", src:"within the limits of", pos:"prep", gender:null,
     note:"Prepositional phrase. Up to a certain boundary or extent.",
     example:"A: Je vous aiderai dans la limite de mes compétences.\nB: C'est déjà beaucoup.",
     exampleSrc:"A: I'll help you within the limits of my abilities.\nB: That's already a lot.",
     funFact:"Essential in French contracts and policies. 'Dans la limite des stocks disponibles' means while supplies last."},

    {type:"teach", trg:"généralement", src:"generally, usually", pos:"adv", gender:null,
     note:"Adverb. In most cases. More formal than 'en général'.",
     example:"A: Les trains arrivent généralement à l'heure.\nB: Sauf en cas de grève.",
     exampleSrc:"A: Trains generally arrive on time.\nB: Except in case of a strike.",
     funFact:"'Généralement parlant' (generally speaking) is the formal version often heard in debates."},

    {type:"fb",
     s:"{1} du festival, plusieurs conférences ont été organisées.",
     a:["En marge"],
     opts:["En marge","En guise","Dans l'espoir","Dans la limite"],
     hint:"On the sidelines of. A phrase used for events happening alongside a main event.",
     sSrc:"{1} of the festival, several conferences were organized."},

    {type:"teach", trg:"généreusement", src:"generously", pos:"adv", gender:null,
     note:"Adverb. In a generous manner, with abundance.",
     example:"A: Il a donné généreusement à l'association.\nB: Son don a sauvé le projet.",
     exampleSrc:"A: He gave generously to the charity.\nB: His donation saved the project.",
     funFact:"From 'généreux'. French culture values 'générosité' highly, both material and intellectual."},

    {type:"teach", trg:"la hardiesse", src:"the boldness, the audacity", pos:"noun", gender:"f",
     note:"Feminine noun. Courage to take risks, especially in creative expression.",
     example:"A: J'admire la hardiesse de ce projet architectural.\nB: C'est vraiment avant-gardiste.",
     exampleSrc:"A: I admire the boldness of this architectural project.\nB: It's truly avant-garde.",
     funFact:"From 'hardi' (bold). A literary word used especially for artistic or intellectual courage."},

    {type:"match", pairs:[
      {trg:"c'est-à-dire", src:"that is to say"},
      {trg:"en guise de", src:"by way of"},
      {trg:"jusqu'au bout", src:"to the very end"},
      {trg:"en marge de", src:"on the margins of"},
      {trg:"hardiesse", src:"boldness"}
    ]},

    {type:"mc",
     q:"Quelle expression signifie 'dans les limites de' ?",
     opts:["dans la limite de","dans l'espoir de","en marge de","en guise de"],
     ans:"dans la limite de",
     hint:"A prepositional phrase setting a boundary or maximum extent for something."},

    {type:"fb",
     s:"Il a investi son argent {1} obtenir un meilleur rendement.",
     a:["dans l'espoir de"],
     opts:["dans l'espoir de","dans la limite de","en guise de","en marge de"],
     hint:"A formal way of saying the motivation was hope or expectation of a positive outcome.",
     sSrc:"He invested his money {1} getting a better return."}
  ]
};
export default LESSON_7;
