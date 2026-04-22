const LESSON_14 = {
  id:"frv2_b2g6_l14", title:"Art et architecture", icon:"\uD83C\uDFA8", xp:15, board:true,
  steps:[
    {type:"intro", title:"Art et architecture",
     desc:"Explore vocabulary for discussing art, architecture, and aesthetic concepts at B2 level.",
     goals:["Learn 20 words about art and aesthetics","Discuss artistic movements","Describe architecture and design"]},

    {type:"teach", trg:"l'incrustation", src:"the inlay, the overlay", pos:"noun", gender:"f",
     note:"Feminine noun. A decorative technique of embedding material into a surface.",
     example:"A: Les incrustations de nacre sont magnifiques.\nB: C'est un travail d'artisan.",
     exampleSrc:"A: The mother-of-pearl inlays are magnificent.\nB: It's artisan work.",
     funFact:"In digital media, 'incrustation' means overlay or superimposition, like green screen effects."},

    {type:"teach", trg:"la grandeur", src:"the greatness, the grandeur", pos:"noun", gender:"f",
     note:"Feminine noun. Impressive size, or moral/historical greatness.",
     example:"A: La grandeur de ce château est impressionnante.\nB: Versailles reste inégalé.",
     exampleSrc:"A: The grandeur of this castle is impressive.\nB: Versailles remains unmatched.",
     funFact:"De Gaulle famously spoke of 'la grandeur de la France'. The word carries both physical and moral weight."},

    {type:"teach", trg:"le café-concert", src:"the music cafe", pos:"noun", gender:"m",
     note:"Masculine compound noun. A cafe with live music performances. Historical term.",
     example:"A: Les cafés-concerts étaient populaires au XIXe siècle.\nB: C'est l'ancêtre du cabaret.",
     exampleSrc:"A: Music cafes were popular in the 19th century.\nB: They're the ancestor of cabaret.",
     funFact:"The café-concert gave birth to French chanson. Edith Piaf started in similar Parisian venues."},

    {type:"teach", trg:"la fresque", src:"the fresco, the mural", pos:"noun", gender:"f",
     note:"Feminine noun. A painting done on wet plaster, or any large mural.",
     example:"A: La fresque du plafond est spectaculaire.\nB: Elle date du XVIIe siècle.",
     exampleSrc:"A: The ceiling fresco is spectacular.\nB: It dates from the 17th century.",
     funFact:"From Italian 'fresco' meaning fresh (painted on fresh plaster). Also used for a panoramic narrative."},

    {type:"mc",
     q:"Qu'est-ce qu'un 'café-concert' ?",
     opts:["Un café avec des spectacles musicaux","Un café qui vend des instruments","Un concert en plein air","Un café très bruyant"],
     ans:"Un café avec des spectacles musicaux",
     hint:"A 19th-century French institution combining drinks with live entertainment. Ancestor of cabaret."},

    {type:"teach", trg:"la crème", src:"the cream (also: the best)", pos:"noun", gender:"f",
     note:"Feminine noun. Dairy cream, or figuratively the best of something.",
     example:"A: C'est la crème des ingénieurs.\nB: Il est vraiment exceptionnel.",
     exampleSrc:"A: He's the cream of engineers.\nB: He's truly exceptional.",
     funFact:"'La crème de la crème' is used in both French and English. 'Un café crème' is coffee with cream."},

    {type:"teach", trg:"la déscolarisation", src:"the dropping out of school", pos:"noun", gender:"f",
     note:"Feminine noun. The process of children leaving or being removed from school.",
     example:"A: La déscolarisation touche les quartiers défavorisés.\nB: C'est un problème de société.",
     exampleSrc:"A: Dropping out of school affects disadvantaged neighborhoods.\nB: It's a social problem.",
     funFact:"A key concern in French education policy. France has mandatory schooling from age 3 to 16."},

    {type:"teach", trg:"l'héliotrope", src:"the heliotrope", pos:"noun", gender:"m",
     note:"Masculine noun. A plant that turns toward the sun, or a purple color.",
     example:"A: Les héliotropes parfument le jardin.\nB: Leur couleur violette est magnifique.",
     exampleSrc:"A: The heliotropes perfume the garden.\nB: Their purple color is magnificent.",
     funFact:"From Greek 'helios' (sun) + 'tropos' (turn). The heliotrope always faces the sun."},

    {type:"fb",
     s:"La {1} de Versailles impressionne tous les visiteurs.",
     a:["grandeur"],
     opts:["grandeur","incrustation","crème","fresque"],
     hint:"Both physical impressiveness and moral/historical greatness. Think of palaces and empires.",
     sSrc:"The {1} of Versailles impresses all visitors."},

    {type:"teach", trg:"le lobby", src:"the lobby (entrance hall)", pos:"noun", gender:"m",
     note:"Masculine noun. The entrance hall of a hotel or building.",
     example:"A: Retrouvons-nous dans le lobby de l'hôtel.\nB: D'accord, près de la réception.",
     exampleSrc:"A: Let's meet in the hotel lobby.\nB: Okay, near the reception.",
     funFact:"Same English word, two meanings in French: the entrance hall AND the pressure group. Context decides."},

    {type:"teach", trg:"le graffiti", src:"the graffiti", pos:"noun", gender:"m",
     note:"Masculine noun. Writing or drawings on walls. Singular or plural in French.",
     example:"A: Les graffitis sur ce mur sont de l'art.\nB: C'est signé Banksy !",
     exampleSrc:"A: The graffiti on this wall is art.\nB: It's signed Banksy!",
     funFact:"Italian borrowing (plural of 'graffito'). French street art is world-class, especially in Paris and Lyon."},

    {type:"teach", trg:"la marqueterie", src:"marquetry, inlaid woodwork", pos:"noun", gender:"f",
     note:"Feminine noun. Decorative woodwork using different colored wood pieces.",
     example:"A: La marqueterie de ce meuble est extraordinaire.\nB: C'est un savoir-faire ancien.",
     exampleSrc:"A: The marquetry on this furniture is extraordinary.\nB: It's an ancient craft.",
     funFact:"André-Charles Boulle perfected marquetry for Louis XIV. 'Marqueterie Boulle' uses brass and tortoiseshell."},

    {type:"mc",
     q:"Que désigne 'la marqueterie' ?",
     opts:["Un style de photographie","Un travail décoratif en bois de différentes couleurs","Un type de peinture sur toile","Une technique de sculpture"],
     ans:"Un travail décoratif en bois de différentes couleurs",
     hint:"An ancient decorative craft using pieces of different colored wood fitted together."},

    {type:"teach", trg:"la vitrine", src:"the display window, the showcase", pos:"noun", gender:"f",
     note:"Feminine noun. A shop window or glass display case.",
     example:"A: La vitrine du magasin est magnifiquement décorée.\nB: C'est la période de Noël.",
     exampleSrc:"A: The shop window is beautifully decorated.\nB: It's the Christmas period.",
     funFact:"'Faire du lèche-vitrine' (window licking) is the French expression for window shopping."},

    {type:"teach", trg:"la mosaïque", src:"the mosaic", pos:"noun", gender:"f",
     note:"Feminine noun. Art made from small colored pieces, or a diverse mix.",
     example:"A: La mosaïque romaine est parfaitement conservée.\nB: Les couleurs sont encore vives.",
     exampleSrc:"A: The Roman mosaic is perfectly preserved.\nB: The colors are still vivid.",
     funFact:"Used figuratively: 'une mosaïque culturelle' means a cultural mosaic, celebrating diversity."},

    {type:"teach", trg:"le patrimoine", src:"the heritage, the patrimony", pos:"noun", gender:"m",
     note:"Masculine noun. Cultural or architectural heritage to be preserved.",
     example:"A: Le patrimoine français est classé par l'UNESCO.\nB: Plus de 40 sites sont inscrits.",
     exampleSrc:"A: French heritage is classified by UNESCO.\nB: Over 40 sites are listed.",
     funFact:"'Les Journées du Patrimoine' every September opens palaces, factories, and hidden sites to the public."},

    {type:"fb",
     s:"La {1} romaine découverte lors des fouilles date du IIe siècle.",
     a:["mosaïque"],
     opts:["mosaïque","marqueterie","fresque","vitrine"],
     hint:"Art made from assembling many small colored pieces, tiles, or stones.",
     sSrc:"The Roman {1} discovered during excavations dates from the 2nd century."},

    {type:"teach", trg:"l'esquisse", src:"the sketch, the rough draft", pos:"noun", gender:"f",
     note:"Feminine noun. A preliminary drawing or outline of something.",
     example:"A: L'esquisse montre le plan du futur bâtiment.\nB: L'architecte a du talent.",
     exampleSrc:"A: The sketch shows the plan for the future building.\nB: The architect is talented.",
     funFact:"From Italian 'schizzo'. 'Esquisser un sourire' means to hint at a smile, a beautiful literary use."},

    {type:"teach", trg:"le vernissage", src:"the opening night (art exhibition)", pos:"noun", gender:"m",
     note:"Masculine noun. A private viewing of an art exhibition before it opens to the public.",
     example:"A: Le vernissage est ce vendredi soir.\nB: Tous les collectionneurs seront là.",
     exampleSrc:"A: The opening night is this Friday evening.\nB: All the collectors will be there.",
     funFact:"Literally 'varnishing'. Artists used to varnish paintings on the day before the show opened."},

    {type:"match", pairs:[
      {trg:"fresque", src:"fresco, mural"},
      {trg:"patrimoine", src:"heritage"},
      {trg:"vernissage", src:"opening night"},
      {trg:"esquisse", src:"sketch"},
      {trg:"vitrine", src:"display window"}
    ]},

    {type:"mc",
     q:"Pourquoi dit-on 'vernissage' pour l'inauguration d'une exposition ?",
     opts:["Le sol était verni pour l'occasion","Le nom du premier galeriste était Vernis","Les artistes vernissaient leurs tableaux le jour d'avant","On servait du vernis à boire"],
     ans:"Les artistes vernissaient leurs tableaux le jour d'avant",
     hint:"The word comes from a literal practice. Think of the final protective coating on a painting."},

    {type:"fb",
     s:"L'{1} de l'architecte montre les premières lignes du projet.",
     a:["esquisse"],
     opts:["esquisse","incrustation","grandeur","mosaïque"],
     hint:"A preliminary drawing or outline, the very first draft of an artistic or architectural idea.",
     sSrc:"The architect's {1} shows the first lines of the project."}
  ]
};
export default LESSON_14;
