const LESSON_1 = {
  id:"frv2_b2g4_l1", title:"Le monde de l'art", icon:"\u{1F3A8}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Le monde de l'art",
     desc:"Explore vocabulary related to art, craftsmanship, and creative expression at an advanced level.",
     goals:["Learn 15 words about art and creativity","Discuss artistic styles and techniques","Express opinions about art with nuance"]},

    {type:"teach", trg:"un galeriste", src:"a gallery owner", pos:"noun", gender:"m",
     note:"Masculine noun. Person who runs an art gallery.",
     example:"A: Le galeriste expose de jeunes artistes.\nB: C'est bien, il faut soutenir la releve.",
     exampleSrc:"A: The gallery owner exhibits young artists.\nB: That's good, we need to support new talent.",
     funFact:"Paris has over 300 art galleries. The galeriste is a tastemaker who shapes trends."},

    {type:"teach", trg:"une griffe", src:"a signature style, a brand", pos:"noun", gender:"f",
     note:"Feminine noun. Also means claw. In fashion and art: a designer's mark.",
     example:"A: On reconnait sa griffe dans chaque tableau.\nB: Oui, son style est unique.",
     exampleSrc:"A: You can recognize his signature style in every painting.\nB: Yes, his style is unique.",
     funFact:"Originally meant a claw or scratch mark. Fashion adopted it for designer labels."},

    {type:"teach", trg:"une frise", src:"a frieze", pos:"noun", gender:"f",
     note:"Feminine noun. A decorative band on a building or wall.",
     example:"A: La frise du Parthenon est magnifique.\nB: Les sculptures racontent toute une histoire.",
     exampleSrc:"A: The frieze of the Parthenon is magnificent.\nB: The sculptures tell a whole story.",
     funFact:"From Latin 'frisium'. The Elgin Marbles are sections of the Parthenon frieze."},

    {type:"teach", trg:"gothique", src:"Gothic", pos:"adj", gender:null,
     note:"Adjective. Refers to medieval architecture or a dark artistic style.",
     example:"A: Cette cathedrale est de style gothique.\nB: Les arcs en ogive sont impressionnants.",
     exampleSrc:"A: This cathedral is Gothic style.\nB: The pointed arches are impressive.",
     funFact:"Originally a pejorative term. Renaissance Italians called it 'Gothic' meaning barbarian."},

    {type:"teach", trg:"grotesque", src:"grotesque, absurd", pos:"adj", gender:null,
     note:"Adjective. Comically ugly or absurdly exaggerated.",
     example:"A: La situation est devenue grotesque.\nB: Personne ne peut la prendre au serieux.",
     exampleSrc:"A: The situation has become grotesque.\nB: Nobody can take it seriously.",
     funFact:"From Italian 'grottesca', referring to bizarre cave paintings found in Roman ruins."},

    {type:"mc",
     q:"Quel mot designe le proprietaire d'une galerie d'art ?",
     opts:["un galeriste","un greffier","un graveur","un garagiste"],
     ans:"un galeriste",
     hint:"The word is built on 'galerie' with the professional suffix -iste."},

    {type:"teach", trg:"gracieux", src:"graceful, elegant", pos:"adj", gender:null,
     note:"Adjective. Elegant in movement or form. Feminine: gracieuse.",
     example:"A: La danseuse est tres gracieuse.\nB: Chaque mouvement est parfait.",
     exampleSrc:"A: The dancer is very graceful.\nB: Every movement is perfect.",
     funFact:"'A titre gracieux' means free of charge. Grace can be both beauty and generosity."},

    {type:"teach", trg:"l'expressionnisme", src:"expressionism", pos:"noun", gender:"m",
     note:"Masculine noun. Art movement prioritizing emotional expression over realism.",
     example:"A: L'expressionnisme est ne en Allemagne.\nB: Munch et Kirchner en sont les pionniers.",
     exampleSrc:"A: Expressionism was born in Germany.\nB: Munch and Kirchner are its pioneers.",
     funFact:"'Le Cri' by Munch is the most iconic expressionist work. France preferred Fauvism instead."},

    {type:"teach", trg:"une boiserie", src:"wood paneling", pos:"noun", gender:"f",
     note:"Feminine noun. Decorative carved woodwork on walls.",
     example:"A: Les boiseries de ce chateau sont superbes.\nB: Elles datent du XVIIIe siecle.",
     exampleSrc:"A: The wood paneling in this castle is superb.\nB: It dates from the 18th century.",
     funFact:"Versailles has some of the finest boiseries in the world, carved by master artisans."},

    {type:"fb",
     s:"On reconnait immediatement la {1} de ce createur.",
     a:["griffe"],
     opts:["griffe","frise","boiserie","galerie"],
     hint:"A word that originally meant claw, now used for a designer's signature style.",
     sSrc:"You immediately recognize this creator's {1}."},

    {type:"teach", trg:"un chevron", src:"a rafter, a herringbone pattern", pos:"noun", gender:"m",
     note:"Masculine noun. V-shaped pattern used in textiles and architecture.",
     example:"A: Le parquet est pose en chevron.\nB: C'est un motif tres elegant.",
     exampleSrc:"A: The floor is laid in a herringbone pattern.\nB: It's a very elegant pattern.",
     funFact:"Citroen's logo is a double chevron, inspired by the herringbone gears Andre Citroen manufactured."},

    {type:"teach", trg:"un fleuron", src:"a jewel, a crowning achievement", pos:"noun", gender:"m",
     note:"Masculine noun. The finest example of something. Also a flower ornament.",
     example:"A: Ce musee est le fleuron de la ville.\nB: Il attire des visiteurs du monde entier.",
     exampleSrc:"A: This museum is the jewel of the city.\nB: It attracts visitors from around the world.",
     funFact:"From 'fleur'. A fleuron was originally a flower-shaped ornament on a crown or book."},

    {type:"teach", trg:"le contour", src:"the outline, the contour", pos:"noun", gender:"m",
     note:"Masculine noun. The edge or outline of a shape.",
     example:"A: Dessine d'abord les contours du visage.\nB: Ensuite, j'ajouterai les details.",
     exampleSrc:"A: First draw the outlines of the face.\nB: Then I'll add the details.",
     funFact:"In makeup, 'contouring' was borrowed back from English, though 'contour' is originally French."},

    {type:"mc",
     q:"Quel style architectural utilise des arcs en ogive ?",
     opts:["classique","gothique","baroque","roman"],
     ans:"gothique",
     hint:"This medieval style was named by Renaissance critics who associated it with barbarians."},

    {type:"teach", trg:"un crochet", src:"a hook, a crochet stitch", pos:"noun", gender:"m",
     note:"Masculine noun. A curved hook. Also the craft of crocheting.",
     example:"A: Ma grand-mere fait du crochet chaque soir.\nB: Elle fabrique de belles nappes.",
     exampleSrc:"A: My grandmother does crochet every evening.\nB: She makes beautiful tablecloths.",
     funFact:"English borrowed 'crochet' directly from French. The craft uses a single hooked needle."},

    {type:"teach", trg:"un grillage", src:"a wire fence, mesh", pos:"noun", gender:"m",
     note:"Masculine noun. Wire mesh or fencing. From 'grille' (grid).",
     example:"A: Le jardin est entoure d'un grillage.\nB: C'est pour empecher les lapins d'entrer.",
     exampleSrc:"A: The garden is surrounded by a wire fence.\nB: It's to keep rabbits out.",
     funFact:"From 'grille' (grill/grid). In art, grillage can be used as a sculptural material."},

    {type:"fb",
     s:"Ce musee est le {1} de notre patrimoine culturel.",
     a:["fleuron"],
     opts:["fleuron","contour","chevron","crochet"],
     hint:"A word meaning the finest example or crowning achievement, derived from 'fleur'.",
     sSrc:"This museum is the {1} of our cultural heritage."},

    {type:"match", pairs:[
      {trg:"boiserie", src:"wood paneling"},
      {trg:"chevron", src:"herringbone pattern"},
      {trg:"contour", src:"outline"},
      {trg:"crochet", src:"hook, crochet"},
      {trg:"fleuron", src:"crowning achievement"}
    ]},

    {type:"mc",
     q:"Comment decrit-on une situation absurde et ridicule ?",
     opts:["gothique","grandiose","grotesque","gracieux"],
     ans:"grotesque",
     hint:"From Italian 'grottesca', originally describing bizarre paintings found in caves."},

    {type:"fb",
     s:"L'{1} allemand a influence tout l'art moderne.",
     a:["expressionnisme"],
     opts:["expressionnisme","impressionnisme","classicisme","romantisme"],
     hint:"An early 20th century art movement born in Germany, focused on emotional intensity.",
     sSrc:"{1} influenced all of modern art."}
  ]
};
export default LESSON_1;
