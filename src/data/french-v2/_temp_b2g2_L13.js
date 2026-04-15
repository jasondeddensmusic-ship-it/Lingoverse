const LESSON_13 = {
  id:"frv2_b2g2_l13", title:"Gastronomie et traditions", icon:"\u{1F37D}\u{FE0F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Gastronomie et traditions",
     desc:"Explore the vocabulary of French food culture, dining traditions, and culinary heritage. From amuse-gueules to creperies.",
     goals:["Learn 20 food and tradition terms","Discuss French gastronomy","Describe culinary experiences"]},

    {type:"teach", trg:"un amuse-gueule", src:"an appetizer, a snack", pos:"noun", gender:"m",
     note:"Masculine noun. A small savory bite served before a meal. Plural: des amuse-gueules.",
     example:"A: Les amuse-gueules sont delicieux ce soir.\nB: Le chef a vraiment fait un effort.",
     exampleSrc:"A: The appetizers are delicious tonight.\nB: The chef really made an effort.",
     funFact:"Literally 'mouth amuser'. Restaurants now prefer 'amuse-bouche' (bouche = mouth, more refined)."},

    {type:"teach", trg:"la bearnaise", src:"the bearnaise (sauce)", pos:"noun", gender:"f",
     note:"Feminine noun. A rich butter and tarragon sauce from southwest France.",
     example:"A: Un steak frites avec bearnaise, s'il vous plait.\nB: Excellent choix, c'est notre specialite.",
     exampleSrc:"A: Steak and fries with bearnaise, please.\nB: Excellent choice, it's our specialty.",
     funFact:"Named after Bearn, Henry IV's home region. The sauce was actually created in Paris in the 1830s."},

    {type:"teach", trg:"la creperie", src:"the creperie", pos:"noun", gender:"f",
     note:"Feminine noun. A restaurant specializing in crepes.",
     example:"A: Il y a une creperie bretonne au coin de la rue.\nB: Leurs galettes au sarrasin sont incroyables.",
     exampleSrc:"A: There's a Breton creperie on the corner.\nB: Their buckwheat galettes are incredible.",
     funFact:"Brittany is the homeland of crepes. A 'galette' is a savory buckwheat crepe, distinct from sweet crepes."},

    {type:"teach", trg:"le cafe-tabac", src:"the cafe-tobacconist", pos:"noun", gender:"m",
     note:"Masculine noun. A cafe that also sells tobacco, stamps, and lottery tickets.",
     example:"A: On se retrouve au cafe-tabac du coin ?\nB: Parfait, j'y serai a midi.",
     exampleSrc:"A: Shall we meet at the corner cafe-tabac?\nB: Perfect, I'll be there at noon.",
     funFact:"The red diamond-shaped sign marks a 'tabac'. These cafes are community hubs in every French town."},

    {type:"teach", trg:"le cafe-creme", src:"the coffee with cream", pos:"noun", gender:"m",
     note:"Masculine noun. Coffee served with hot milk or cream.",
     example:"A: Un cafe-creme et un croissant, s'il vous plait.\nB: Voila, le petit-dejeuner classique.",
     exampleSrc:"A: A coffee with cream and a croissant, please.\nB: There you go, the classic breakfast.",
     funFact:"At a French cafe, order 'un creme' and everyone knows what you mean. The 'cafe' is implied."},

    {type:"mc",
     q:"Comment appelle-t-on une petite bouchee servie avant le repas ?",
     opts:["un amuse-gueule","une bearnaise","un cafe-creme","un chausson"],
     ans:"un amuse-gueule",
     hint:"A small savory bite to 'a...' your mouth before the main meal."},

    {type:"teach", trg:"le cannelloni", src:"the cannelloni", pos:"noun", gender:"m",
     note:"Masculine noun. Italian rolled pasta tubes filled with meat or cheese.",
     example:"A: Les cannellonis a la ricotta sont delicieux.\nB: C'est une recette de ma belle-mere italienne.",
     exampleSrc:"A: The ricotta cannelloni is delicious.\nB: It's my Italian mother-in-law's recipe.",
     funFact:"Italian food is hugely popular in France. French-Italian culinary exchange goes back to Catherine de Medici."},

    {type:"teach", trg:"le cigarillo", src:"the cigarillo", pos:"noun", gender:"m",
     note:"Masculine noun. A small, thin cigar.",
     example:"A: Il fume un cigarillo apres le diner.\nB: L'odeur est moins forte qu'un cigare.",
     exampleSrc:"A: He smokes a cigarillo after dinner.\nB: The smell is less strong than a cigar.",
     funFact:"From Spanish 'cigarrillo' (little cigar). France taxes tobacco heavily, making cigarillos a luxury."},

    {type:"teach", trg:"la creme", src:"the cream (color), cream-colored", pos:"adj", gender:null,
     note:"Adjective. Cream-colored, off-white. Invariable when used as a color.",
     example:"A: Elle porte un tailleur creme tres elegant.\nB: Ca lui va a merveille.",
     exampleSrc:"A: She's wearing a very elegant cream suit.\nB: It suits her perfectly.",
     funFact:"Color adjectives derived from nouns (creme, orange, marron) are invariable in French. No agreement."},

    {type:"teach", trg:"l'aigrelet", src:"slightly sour, tart", pos:"adj", gender:null,
     note:"Adjective. Slightly sour or acidic in taste. Feminine: aigrelette.",
     example:"A: Ce vin blanc est un peu aigrelet.\nB: Ca se marie bien avec le fromage de chevre.",
     exampleSrc:"A: This white wine is slightly tart.\nB: It pairs well with goat cheese.",
     funFact:"Diminutive of 'aigre' (sour). French wine vocabulary has dozens of words for subtle taste differences."},

    {type:"fb",
     s:"On se retrouve au {1} pour un cafe avant le travail ?",
     a:["cafe-tabac"],
     opts:["cafe-tabac","cafe-creme","creperie","cannelloni"],
     hint:"A typically French establishment combining a c... with a tobacconist's shop.",
     sSrc:"Shall we meet at the {1} for a coffee before work?"},

    {type:"teach", trg:"le baisemain", src:"the hand-kissing", pos:"noun", gender:"m",
     note:"Masculine noun. The traditional gesture of kissing a woman's hand.",
     example:"A: Le baisemain est une coutume tres ancienne.\nB: On ne le pratique plus guere aujourd'hui.",
     exampleSrc:"A: Hand-kissing is a very old custom.\nB: It's hardly practiced anymore today.",
     funFact:"Strict etiquette: never actually touch lips to hand. Hover and bow slightly. Only indoors, never with gloves."},

    {type:"teach", trg:"le chichi", src:"the fuss, the pretension", pos:"noun", gender:"m",
     note:"Masculine noun. Unnecessary fuss or affectation. Often plural: des chichis.",
     example:"A: Pas de chichis entre nous !\nB: Tu as raison, restons simples.",
     exampleSrc:"A: No fuss between us!\nB: You're right, let's keep it simple.",
     funFact:"'Sans chichi' means 'no fuss'. Also a type of fried pastry sold at French fairs and beaches."},

    {type:"teach", trg:"le delirium", src:"the delirium", pos:"noun", gender:"m",
     note:"Masculine noun. A state of extreme mental confusion or wild excitement.",
     example:"A: La fete a tourne au delirium total.\nB: Tout le monde dansait sur les tables.",
     exampleSrc:"A: The party turned into total delirium.\nB: Everyone was dancing on the tables.",
     funFact:"'Delirium tremens' is a medical condition from alcohol withdrawal. Commonly shortened to 'delirium'."},

    {type:"mc",
     q:"Quel geste consiste a embrasser la main d'une femme en signe de respect ?",
     opts:["le baisemain","le chichi","le delirium","l'accrochage"],
     ans:"le baisemain",
     hint:"A traditional gesture of gallantry. Think 'baiser' (to kiss) + 'main' (hand)."},

    {type:"teach", trg:"le corse", src:"Corsican", pos:"adj", gender:null,
     note:"Adjective. From or relating to Corsica. Also used as a noun.",
     example:"A: La cuisine corse est un tresor meconnu.\nB: Le brocciu et la charcuterie sont exceptionnels.",
     exampleSrc:"A: Corsican cuisine is an underrated treasure.\nB: The brocciu and charcuterie are exceptional.",
     funFact:"Corsica is a French island with its own language and strong identity. Napoleon was born there."},

    {type:"teach", trg:"le begaiement", src:"the stuttering, the stammering", pos:"noun", gender:"m",
     note:"Masculine noun. A speech disorder involving involuntary repetition of sounds.",
     example:"A: Le begaiement peut etre traite par l'orthophonie.\nB: De nombreuses personnes surmontent ce probleme.",
     exampleSrc:"A: Stuttering can be treated by speech therapy.\nB: Many people overcome this problem.",
     funFact:"'Begayer' (to stutter) is the verb. King George VI's story ('The King's Speech') resonated in France too."},

    {type:"teach", trg:"begayer", src:"to stutter, to stammer", pos:"verb", gender:null,
     note:"Verb. To speak with involuntary repetitions or pauses.",
     example:"A: Il begaie quand il est nerveux.\nB: C'est tout a fait normal sous pression.",
     exampleSrc:"A: He stutters when he's nervous.\nB: That's completely normal under pressure.",
     funFact:"Irregular conjugation: je begaie or je begaye. Both forms are accepted. An old French verb from the 13th century."},

    {type:"teach", trg:"le debonnaire", src:"good-natured person", pos:"noun", gender:"m",
     note:"Masculine noun. A kind, gentle person. Also used as adjective.",
     example:"A: C'est un vrai debonnaire, il pardonne tout.\nB: Sa patience est remarquable.",
     exampleSrc:"A: He's a truly good-natured person, he forgives everything.\nB: His patience is remarkable.",
     funFact:"Louis I of France was called 'le Debonnaire'. The word survives both as noun and adjective."},

    {type:"fb",
     s:"Pas de {1} entre nous, soyons directs et simples.",
     a:["chichis"],
     opts:["chichis","baisemains","deliriums","begaiements"],
     hint:"Unnecessary fuss or pretension. A very colloquial, friendly expression.",
     sSrc:"No {1} between us, let's be direct and simple."},

    {type:"match", pairs:[
      {trg:"amuse-gueule", src:"appetizer"},
      {trg:"bearnaise", src:"bearnaise sauce"},
      {trg:"creperie", src:"creperie"},
      {trg:"baisemain", src:"hand-kissing"},
      {trg:"aigrelet", src:"slightly sour"}
    ]},

    {type:"mc",
     q:"Que signifie 'sans chichi' ?",
     opts:["sans pretention","sans argent","sans raison","sans fin"],
     ans:"sans pretention",
     hint:"Without unnecessary fuss or affectation. Keeping things simple and real."},

    {type:"fb",
     s:"La cuisine {1} est un melange unique d'influences francaises et italiennes.",
     a:["corse"],
     opts:["corse","creme","aigrelet","bearnaise"],
     hint:"Relating to a French Mediterranean island where Napoleon was born.",
     sSrc:"{1} cuisine is a unique blend of French and Italian influences."}
  ]
};
export default LESSON_13;
