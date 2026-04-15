const LESSON_8 = {
  id:"frv2_b2g2_l8", title:"Arts et patrimoine", icon:"\u{1F3A8}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Arts et patrimoine",
     desc:"Explore vocabulary for discussing art movements, heritage, and cultural institutions. From cinema pioneers to architectural gems.",
     goals:["Learn 20 art and heritage terms","Discuss cultural heritage in French","Describe artistic and architectural features"]},

    {type:"teach", trg:"un cinematographe", src:"a cinematograph", pos:"noun", gender:"m",
     note:"Masculine noun. The original motion picture device invented by the Lumieres.",
     example:"A: Le cinematographe a revolutionne le divertissement.\nB: Les freres Lumiere l'ont invente en 1895.",
     exampleSrc:"A: The cinematograph revolutionized entertainment.\nB: The Lumiere brothers invented it in 1895.",
     funFact:"The word 'cinema' is short for 'cinematographe'. France is the birthplace of cinema."},

    {type:"teach", trg:"le cubisme", src:"the cubism", pos:"noun", gender:"m",
     note:"Masculine noun. Art movement showing multiple perspectives simultaneously.",
     example:"A: Le cubisme a brise toutes les regles de la perspective.\nB: Picasso et Braque en etaient les pionniers.",
     exampleSrc:"A: Cubism broke all the rules of perspective.\nB: Picasso and Braque were its pioneers.",
     funFact:"The term came from a critic mocking Braque's paintings as 'petits cubes'. The insult became the name."},

    {type:"teach", trg:"un archetype", src:"an archetype", pos:"noun", gender:"m",
     note:"Masculine noun. An original model or ideal example.",
     example:"A: Don Quichotte est l'archetype du reveur idealiste.\nB: Un personnage universel.",
     exampleSrc:"A: Don Quixote is the archetype of the idealistic dreamer.\nB: A universal character.",
     funFact:"Jung popularized 'archetype' in psychology. From Greek 'archetypon' (original pattern)."},

    {type:"teach", trg:"les armoiries", src:"the coat of arms", pos:"noun", gender:"f",
     note:"Feminine plural noun. A heraldic emblem representing a family or institution.",
     example:"A: Les armoiries de la ville datent du Moyen Age.\nB: Elles montrent un lion et une couronne.",
     exampleSrc:"A: The city's coat of arms dates from the Middle Ages.\nB: It shows a lion and a crown.",
     funFact:"Every French commune has armoiries. Heraldry ('heraldique') remains a living tradition in France."},

    {type:"teach", trg:"un chatelain", src:"a castle owner, a lord", pos:"noun", gender:"m",
     note:"Masculine noun. The owner or lord of a castle. Feminine: une chatelaine.",
     example:"A: Le chatelain organise des visites guidees.\nB: Le chateau a ete dans sa famille pendant trois siecles.",
     exampleSrc:"A: The castle owner organizes guided tours.\nB: The castle has been in his family for three centuries.",
     funFact:"France has over 40,000 chateaux. Many chatelains open them to tourists to cover maintenance costs."},

    {type:"mc",
     q:"Qui a invente le cinematographe ?",
     opts:["les freres Lumiere","les freres Montgolfier","les freres Grimm","les freres Wright"],
     ans:"les freres Lumiere",
     hint:"Two French brothers from Lyon who held the first public film screening in 1895."},

    {type:"teach", trg:"le chevron", src:"the rafter, the chevron", pos:"noun", gender:"m",
     note:"Masculine noun. A V-shaped pattern or a roof beam.",
     example:"A: Le motif en chevrons est tres decoratif.\nB: On le voit souvent dans les parquets parisiens.",
     exampleSrc:"A: The chevron pattern is very decorative.\nB: It's often seen in Parisian parquet floors.",
     funFact:"Citroen's logo is two chevrons. They represent the herringbone gear that Andre Citroen patented."},

    {type:"teach", trg:"un crochet", src:"a hook, a crochet", pos:"noun", gender:"m",
     note:"Masculine noun. A hook shape or the craft of crocheting.",
     example:"A: Elle fait du crochet tous les soirs.\nB: Elle a fait une couverture magnifique.",
     exampleSrc:"A: She does crochet every evening.\nB: She made a magnificent blanket.",
     funFact:"From Old French 'croc' (hook). A 'crochet' in boxing is a hook punch. The craft name came later."},

    {type:"teach", trg:"le chassis", src:"the frame, the chassis", pos:"noun", gender:"m",
     note:"Masculine noun. A frame or supporting structure.",
     example:"A: Le chassis de cette voiture est en aluminium.\nB: C'est plus leger mais tout aussi solide.",
     exampleSrc:"A: The chassis of this car is aluminum.\nB: It's lighter but just as strong.",
     funFact:"In art, a 'chassis' is the wooden frame that canvas is stretched on. In windows, it means the frame."},

    {type:"teach", trg:"la boiserie", src:"the woodwork, the paneling", pos:"noun", gender:"f",
     note:"Feminine noun. Decorative wood panels on walls. Usually plural: les boiseries.",
     example:"A: Les boiseries de ce salon sont d'epoque.\nB: Elles ont ete restaurees avec soin.",
     exampleSrc:"A: The wood paneling in this living room is period.\nB: It was carefully restored.",
     funFact:"French boiserie reached its peak under Louis XV. Versailles' panels are masterpieces of woodcraft."},

    {type:"fb",
     s:"Don Quichotte est l'{1} du heros romantique et naif.",
     a:["archetype"],
     opts:["archetype","crochet","chevron","chassis"],
     hint:"The original model or perfect example of something. A Jungian psychology term.",
     sSrc:"Don Quixote is the {1} of the romantic and naive hero."},

    {type:"teach", trg:"le barillet", src:"the barrel (of a lock), the cylinder", pos:"noun", gender:"m",
     note:"Masculine noun. A small barrel or the cylinder of a lock or revolver.",
     example:"A: Le barillet de la serrure est casse.\nB: Il faut appeler un serrurier.",
     exampleSrc:"A: The lock cylinder is broken.\nB: We need to call a locksmith.",
     funFact:"Diminutive of 'baril' (barrel). French locksmiths are highly skilled artisans called 'serruriers'."},

    {type:"teach", trg:"le boitier", src:"the case, the housing", pos:"noun", gender:"m",
     note:"Masculine noun. A protective case or housing for equipment.",
     example:"A: Le boitier de cette montre est en or.\nB: C'est une piece de collection.",
     exampleSrc:"A: The case of this watch is gold.\nB: It's a collector's piece.",
     funFact:"Camera enthusiasts talk about 'boitier' for the camera body. French watchmaking uses the term constantly."},

    {type:"teach", trg:"un copeau", src:"a shaving, a chip (of wood)", pos:"noun", gender:"m",
     note:"Masculine noun. A thin strip of wood removed by a plane or chisel.",
     example:"A: Le sol de l'atelier est couvert de copeaux.\nB: L'ebeniste travaille le chene.",
     exampleSrc:"A: The workshop floor is covered with wood shavings.\nB: The cabinetmaker is working oak.",
     funFact:"French ebenistes (cabinetmakers) are world-famous. 'Copeau' comes from 'couper' (to cut)."},

    {type:"mc",
     q:"Quel motif decoratif en forme de V est present sur le logo Citroen ?",
     opts:["le chevron","le crochet","l'armoiries","le chassis"],
     ans:"le chevron",
     hint:"A V-shaped pattern, also common in Parisian parquet floors."},

    {type:"teach", trg:"la benediction", src:"the blessing", pos:"noun", gender:"f",
     note:"Feminine noun. A religious blessing or a piece of good fortune.",
     example:"A: Le pretre a donne sa benediction.\nB: La ceremonie etait tres emouvante.",
     exampleSrc:"A: The priest gave his blessing.\nB: The ceremony was very moving.",
     funFact:"'C'est une benediction' means 'it's a blessing' figuratively. From Latin 'benedictio' (good speech)."},

    {type:"teach", trg:"un dandy", src:"a dandy", pos:"noun", gender:"m",
     note:"Masculine noun. An elegantly dressed man who values refinement.",
     example:"A: Baudelaire etait un veritable dandy.\nB: Son elegance etait legendaire.",
     exampleSrc:"A: Baudelaire was a true dandy.\nB: His elegance was legendary.",
     funFact:"Dandyism was a cultural movement. Barbey d'Aurevilly wrote 'Du dandysme' (1845). Elegance as philosophy."},

    {type:"teach", trg:"l'applique", src:"the wall lamp, the sconce", pos:"noun", gender:"f",
     note:"Feminine noun. A decorative light fixture mounted on a wall.",
     example:"A: Les appliques en bronze eclairent le couloir.\nB: Elles donnent une lumiere douce et chaude.",
     exampleSrc:"A: The bronze wall lamps light the hallway.\nB: They give a soft, warm light.",
     funFact:"French interior design prizes appliques for ambient lighting. Versailles has thousands of them."},

    {type:"teach", trg:"encastrer", src:"to embed, to recess", pos:"verb", gender:null,
     note:"Verb. To fit something flush into a wall or surface.",
     example:"A: On va encastrer le four dans le meuble de cuisine.\nB: Ca donnera un aspect plus moderne.",
     exampleSrc:"A: We'll recess the oven into the kitchen unit.\nB: It will give a more modern look.",
     funFact:"'Un four encastrable' (a built-in oven) is standard in French kitchens. From 'en' + 'castre' (frame)."},

    {type:"fb",
     s:"Les {1} de ce salon Louis XV valent une fortune.",
     a:["boiseries"],
     opts:["boiseries","appliques","armoiries","copeaux"],
     hint:"Decorative wooden wall panels. Think of 'bois' (wood).",
     sSrc:"The {1} in this Louis XV salon are worth a fortune."},

    {type:"match", pairs:[
      {trg:"cinematographe", src:"cinematograph"},
      {trg:"chatelain", src:"castle owner"},
      {trg:"dandy", src:"dandy"},
      {trg:"barillet", src:"cylinder"},
      {trg:"applique", src:"wall lamp"}
    ]},

    {type:"mc",
     q:"Que signifie 'encastrer' ?",
     opts:["integrer dans une surface","peindre un mur","demolir un batiment","eclairer une piece"],
     ans:"integrer dans une surface",
     hint:"To fit something flush into a wall or s.... Think of built-in appliances."},

    {type:"fb",
     s:"Le {1} de cette montre ancienne est en argent massif.",
     a:["boitier"],
     opts:["boitier","barillet","chassis","crochet"],
     hint:"The protective case or housing. For watches, cameras, and electronics.",
     sSrc:"The {1} of this antique watch is solid silver."}
  ]
};
export default LESSON_8;
