const LESSON_19 = {
  id:"frv2_b2g7_l19", title:"Arts et creation", icon:"\u{1F3A8}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Arts et creation",
     desc:"Expand your vocabulary for discussing art, creativity, and artistic expression.",
     goals:["Learn 15 words about art and creation","Discuss artistic movements","Describe creative processes"]},

    {type:"teach", trg:"le cinématographe", src:"the cinematograph", pos:"noun", gender:"m",
     note:"Masculine noun. The original name for the motion picture machine and cinema itself.",
     example:"A: Le cinematographe a ete invente par les freres Lumiere.\nB: C'etait en 1895 a Lyon.",
     exampleSrc:"A: The cinematograph was invented by the Lumiere brothers.\nB: It was in 1895 in Lyon.",
     funFact:"The Lumiere brothers' first screening was at the Grand Cafe in Paris. 'Cinematographe' literally means 'writing with movement'."},

    {type:"teach", trg:"le cubisme", src:"cubism", pos:"noun", gender:"m",
     note:"Masculine noun. An art movement using geometric shapes and multiple perspectives.",
     example:"A: Le cubisme a revolutionne la peinture.\nB: Picasso et Braque en sont les pionniers.",
     exampleSrc:"A: Cubism revolutionized painting.\nB: Picasso and Braque are its pioneers.",
     funFact:"The name came from a critic who mocked Braque's paintings as 'cubes'. Born in Paris, cubism changed art forever."},

    {type:"teach", trg:"la basilique", src:"a basilica", pos:"noun", gender:"f",
     note:"Feminine noun. A large and important church, given special status by the Pope.",
     example:"A: La basilique du Sacre-Coeur domine Montmartre.\nB: Sa coupole blanche est visible de loin.",
     exampleSrc:"A: The Sacre-Coeur basilica overlooks Montmartre.\nB: Its white dome is visible from far away.",
     funFact:"Unlike a cathedral (bishop's seat), a basilica is an honorary title. France has 177 basilicas, more than any other country."},

    {type:"teach", trg:"les armoiries", src:"a coat of arms", pos:"noun", gender:"pl",
     note:"Feminine plural noun. Heraldic symbols representing a family or institution.\nAlways plural.",
     example:"A: Les armoiries de la ville ornent l'hotel de ville.\nB: Elles datent du Moyen Age.",
     exampleSrc:"A: The city's coat of arms decorates the town hall.\nB: They date from the Middle Ages.",
     funFact:"French heraldry has strict rules: colors, shapes, and animals all have specific meanings. The French Republic has no official coat of arms."},

    {type:"mc",
     q:"Qui a invente le cinematographe ?",
     opts:["les freres Lumiere","les freres Dardenne","les freres Goncourt","les freres Jacques"],
     ans:"les freres Lumiere",
     hint:"Two brothers from Lyon whose surname means 'light'. Fitting for cinema inventors."},

    {type:"teach", trg:"la boiserie", src:"woodwork, wood paneling", pos:"noun", gender:"f",
     note:"Feminine noun. Decorative wood panels on walls or ceilings.\nOften plural: les boiseries.",
     example:"A: Les boiseries de ce chateau sont magnifiques.\nB: Elles sont sculptees a la main.",
     exampleSrc:"A: The wood paneling of this castle is magnificent.\nB: It's hand-carved.",
     funFact:"French chateaux are famous for their 'boiseries'. Versailles' panels are gilded. The craft of 'boiserie' is a registered French heritage skill."},

    {type:"teach", trg:"le chevron", src:"a chevron, a rafter", pos:"noun", gender:"m",
     note:"Masculine noun. A V-shaped pattern, or a roof rafter.",
     example:"A: Le motif a chevrons est tres elegante.\nB: Ca donne du caractere au tissu.",
     exampleSrc:"A: The chevron pattern is very elegant.\nB: It gives the fabric character.",
     funFact:"Citroen's logo is two chevrons, representing the herringbone gears the company originally manufactured."},

    {type:"teach", trg:"l'applique", src:"a wall lamp, an applique", pos:"noun", gender:"f",
     note:"Feminine noun. A decorative fixture attached to a wall.\nAlso: a technique of sewing fabric pieces.",
     example:"A: Les appliques murales eclairent le couloir.\nB: Elles creent une ambiance tamisee.",
     exampleSrc:"A: The wall lamps light the hallway.\nB: They create a dimmed atmosphere.",
     funFact:"In French interior design, 'appliques' are essential for ambient lighting. The best ones come from Murano glass or Art Deco workshops."},

    {type:"fb",
     s:"Les {1} du salon ont ete restaurees par un artisan specialise.",
     a:["boiseries"],
     opts:["boiseries","armoiries","appliques","basiliques"],
     hint:"Decorative wood panels covering walls, often found in chateaux.",
     sSrc:"The {1} in the living room were restored by a specialized craftsman."},

    {type:"teach", trg:"la commode", src:"a chest of drawers", pos:"noun", gender:"f",
     note:"Feminine noun. A piece of furniture with drawers.\nAlso adjective: commode = convenient.",
     example:"A: Cette commode Louis XV vaut une fortune.\nB: C'est une piece de musee.",
     exampleSrc:"A: This Louis XV chest of drawers is worth a fortune.\nB: It's a museum piece.",
     funFact:"The 'commode' was invented in France around 1700. It literally means 'convenient'. Antique French commodes are highly prized worldwide."},

    {type:"teach", trg:"le barillet", src:"a barrel (lock), a cylinder", pos:"noun", gender:"m",
     note:"Masculine noun. The cylinder of a lock, or a small barrel.\nAlso: the revolving chamber of a gun.",
     example:"A: Le barillet de la serrure est bloque.\nB: Il faut appeler un serrurier.",
     exampleSrc:"A: The lock cylinder is jammed.\nB: We need to call a locksmith.",
     funFact:"Diminutive of 'baril' (barrel). In watchmaking, the 'barillet' holds the mainspring. French has many specialized diminutives."},

    {type:"teach", trg:"le boitier", src:"a case, a housing", pos:"noun", gender:"m",
     note:"Masculine noun. A protective case for a device or mechanism.",
     example:"A: Le boitier de la montre est en titane.\nB: C'est tres resistant.",
     exampleSrc:"A: The watch case is made of titanium.\nB: It's very resistant.",
     funFact:"From 'boite' (box). In photography, 'le boitier' is the camera body. In electronics, it's any device housing."},

    {type:"mc",
     q:"Quel meuble a tiroirs a ete invente en France vers 1700 ?",
     opts:["le barillet","la commode","l'applique","le chevron"],
     ans:"la commode",
     hint:"Its name literally means 'convenient'. A piece of furniture with drawers."},

    {type:"teach", trg:"le contour", src:"an outline, a contour", pos:"noun", gender:"m",
     note:"Masculine noun. The outer edge or shape of something.",
     example:"A: Les contours de la montagne se dessinent dans la brume.\nB: C'est un paysage de reve.",
     exampleSrc:"A: The mountain's contours emerge in the mist.\nB: It's a dreamlike landscape.",
     funFact:"In art, 'le contour' is the defining line. Matisse was famous for his bold contours. In cartography, contour lines show elevation."},

    {type:"teach", trg:"le clivage", src:"a divide, a cleavage", pos:"noun", gender:"m",
     note:"Masculine noun. A deep division between groups.\nAlso: splitting of crystals or rocks.",
     example:"A: Le clivage gauche-droite domine la politique.\nB: Mais d'autres lignes de fracture apparaissent.",
     exampleSrc:"A: The left-right divide dominates politics.\nB: But other fault lines are appearing.",
     funFact:"In geology, 'clivage' is how minerals split along planes. In politics, it's how society splits along ideological lines."},

    {type:"fb",
     s:"Le {1} du paysage se dessinait dans la lumiere du couchant.",
     a:["contour"],
     opts:["contour","clivage","boitier","barillet"],
     hint:"The outline or shape of something, its outer edge.",
     sSrc:"The {1} of the landscape was drawn in the light of the setting sun."},

    {type:"match", pairs:[
      {trg:"cinematographe", src:"motion picture"},
      {trg:"cubisme", src:"cubism"},
      {trg:"basilique", src:"basilica"},
      {trg:"commode", src:"chest of drawers"},
      {trg:"chevron", src:"V-shaped pattern"}
    ]},

    {type:"mc",
     q:"Quel mot designe une division profonde entre groupes sociaux ?",
     opts:["un chevron","un boitier","un clivage","un contour"],
     ans:"un clivage",
     hint:"A deep split, like the one between left and right in politics."},

    {type:"fb",
     s:"Le logo Citroen represente deux {1} en forme de V.",
     a:["chevrons"],
     opts:["chevrons","contours","boitiers","clivages"],
     hint:"V-shaped patterns, originally from herringbone gears the company made.",
     sSrc:"The Citroen logo represents two V-shaped {1}."}
  ]
};
export default LESSON_19;
