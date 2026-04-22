const LESSON_8 = {
  id:"frv2_b2gap_l8", title:"Arts et architecture", icon:"\u{1F3DB}\u{FE0F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Arts et architecture",
     desc:"Explore the vocabulary of art, architecture, and creative expression. From baroque to cubism, from arches to stained glass.",
     goals:["Learn 20 art and architecture terms","Discuss artistic movements in French","Describe buildings and artworks"]},

    {type:"teach", trg:"le baroque", src:"the baroque (style)", pos:"noun", gender:"m",
     note:"Masculine noun. An ornate artistic style from the 17th-18th centuries.",
     example:"A: Versailles est un chef-d'\u0153uvre du baroque.\nB: L'or et les miroirs sont impressionnants.",
     exampleSrc:"A: Versailles is a baroque masterpiece.\nB: The gold and mirrors are impressive.",
     funFact:"From Portuguese 'barroco' (irregular pearl). Originally an insult meaning 'overly ornate'."},

    {type:"teach", trg:"une basilique", src:"a basilica", pos:"noun", gender:"f",
     note:"Feminine noun. A large, important church with special papal privileges.",
     example:"A: La basilique du Sacr\u00e9-C\u0153ur domine Montmartre.\nB: La vue de l\u00e0-haut est magnifique.",
     exampleSrc:"A: The Sacr\u00e9-C\u0153ur basilica dominates Montmartre.\nB: The view from up there is magnificent.",
     funFact:"From Greek 'basilike' (royal hall). France has 175 basilicas, more than any other country."},

    {type:"teach", trg:"la boiserie", src:"the woodwork, the paneling", pos:"noun", gender:"f",
     note:"Feminine noun. Decorative wood paneling on walls. Often in plural: les boiseries.",
     example:"A: Les boiseries de ce ch\u00e2teau sont magnifiques.\nB: Elles datent du XVIIIe si\u00e8cle.",
     exampleSrc:"A: The wood paneling in this castle is magnificent.\nB: It dates from the 18th century.",
     funFact:"Versailles' boiseries are among the finest in the world. French woodcraft peaked during Louis XIV."},

    {type:"teach", trg:"le cubisme", src:"the cubism", pos:"noun", gender:"m",
     note:"Masculine noun. The early 20th century art movement showing multiple perspectives.",
     example:"A: Picasso et Braque ont invent\u00e9 le cubisme.\nB: C'\u00e9tait une r\u00e9volution artistique.",
     exampleSrc:"A: Picasso and Braque invented cubism.\nB: It was an artistic revolution.",
     funFact:"The name came from a critic who mocked Braque's paintings as 'little cubes'. The insult became the movement."},

    {type:"teach", trg:"un cartographe", src:"a cartographer", pos:"noun", gender:"m",
     note:"Masculine noun. A person who makes maps. Feminine: une cartographe.",
     example:"A: Le cartographe a dessin\u00e9 une nouvelle carte.\nB: Elle est tr\u00e8s pr\u00e9cise.",
     exampleSrc:"A: The cartographer drew a new map.\nB: It's very precise.",
     funFact:"France's Cassini family created the first complete topographic map of a nation (1744-1815)."},

    {type:"teach", trg:"un ch\u00e2ssis", src:"a frame, a chassis", pos:"noun", gender:"m",
     note:"Masculine noun. The frame of a window, painting, or vehicle.",
     example:"A: Le ch\u00e2ssis de la fen\u00eatre est en bois.\nB: Il faudrait le remplacer.",
     exampleSrc:"A: The window frame is made of wood.\nB: We should replace it.",
     funFact:"From 'ch\u00e2sse' (frame). Painters stretch canvas on a 'ch\u00e2ssis'. The word entered English for car frames."},

    {type:"mc",
     q:"Quel mouvement artistique montre un objet sous plusieurs angles \u00e0 la fois ?",
     opts:["Le cubisme","Le baroque","La boiserie","Le contour"],
     ans:"Le cubisme",
     hint:"Created by Picasso and Braque in Paris around 1907. Shows multiple perspectives simultaneously."},

    {type:"teach", trg:"un chevron", src:"a rafter, a chevron", pos:"noun", gender:"m",
     note:"Masculine noun. A V-shaped pattern or a roof beam.",
     example:"A: Les chevrons du toit sont visibles.\nB: C'est le style de la r\u00e9gion.",
     exampleSrc:"A: The roof rafters are visible.\nB: It's the regional style.",
     funFact:"The Citro\u00ebn logo is a double chevron, representing the herringbone gear the founder patented."},

    {type:"teach", trg:"un crochet", src:"a hook, a crochet", pos:"noun", gender:"m",
     note:"Masculine noun. A hook shape, or the craft of crocheting with a hook.",
     example:"A: Accroche ton manteau au crochet.\nB: D'accord, merci.",
     exampleSrc:"A: Hang your coat on the hook.\nB: Okay, thanks.",
     funFact:"'Crochet' entered English for the needlework craft. In French boxing, 'un crochet' is a hook punch."},

    {type:"teach", trg:"les armoiries", src:"the coat of arms", pos:"noun", gender:"f",
     note:"Feminine noun. Always plural. Heraldic symbols of a family, city, or institution.",
     example:"A: Les armoiries de la ville sont tr\u00e8s anciennes.\nB: Elles datent du Moyen \u00c2ge.",
     exampleSrc:"A: The city's coat of arms is very old.\nB: It dates from the Middle Ages.",
     funFact:"From 'armes' (weapons). Every French city has its own armoiries, a tradition from medieval tournaments."},

    {type:"fb",
     s:"Les {1} du ch\u00e2teau datent du r\u00e8gne de Louis XIV.",
     a:["boiseries"],
     opts:["boiseries","armoiries","basiliques","chevrons"],
     hint:"Decorative wood paneling on walls, a hallmark of French castles and palaces.",
     sSrc:"The {1} of the castle date from the reign of Louis XIV."},

    {type:"teach", trg:"une ar\u00eate", src:"an edge, a ridge", pos:"noun", gender:"f",
     note:"Feminine noun. The sharp edge of something, or a fish bone.",
     example:"A: L'ar\u00eate de la montagne est dangereuse.\nB: Oui, il faut \u00eatre prudent.",
     exampleSrc:"A: The mountain ridge is dangerous.\nB: Yes, you need to be careful.",
     funFact:"Same word for a fish bone and a mountain ridge. Context always makes it clear which meaning."},

    {type:"teach", trg:"une art\u00e8re", src:"an artery, a main road", pos:"noun", gender:"f",
     note:"Feminine noun. A blood vessel or a major street.",
     example:"A: Les Champs-\u00c9lys\u00e9es sont la grande art\u00e8re de Paris.\nB: C'est la plus c\u00e9l\u00e8bre avenue du monde.",
     exampleSrc:"A: The Champs-\u00c9lys\u00e9es are the great artery of Paris.\nB: It's the most famous avenue in the world.",
     funFact:"The medical and urban meanings coexist perfectly. A city's main roads are its 'art\u00e8res'."},

    {type:"teach", trg:"un ch\u00e2telain", src:"a castle lord, a ch\u00e2telain", pos:"noun", gender:"m",
     note:"Masculine noun. The owner or keeper of a castle. Feminine: une ch\u00e2telaine.",
     example:"A: Le ch\u00e2telain organise des visites guid\u00e9es.\nB: Son ch\u00e2teau est superbe.",
     exampleSrc:"A: The castle lord organizes guided tours.\nB: His castle is superb.",
     funFact:"Many French ch\u00e2teaux are privately owned. Being a ch\u00e2telain often means expensive maintenance."},

    {type:"teach", trg:"le cin\u00e9matographe", src:"the cinematograph", pos:"noun", gender:"m",
     note:"Masculine noun. The original film projection device. Historical term.",
     example:"A: Le cin\u00e9matographe a \u00e9t\u00e9 invent\u00e9 par les fr\u00e8res Lumi\u00e8re.\nB: En 1895 \u00e0 Lyon.",
     exampleSrc:"A: The cinematograph was invented by the Lumi\u00e8re brothers.\nB: In 1895 in Lyon.",
     funFact:"From Greek 'kinema' (movement) + 'graphein' (to write). France gave cinema to the world."},

    {type:"mc",
     q:"Comment appelle-t-on les symboles h\u00e9raldiques d'une famille ou d'une ville ?",
     opts:["Les ar\u00eates","Les armoiries","Les boiseries","Les chevrons"],
     ans:"Les armoiries",
     hint:"From 'armes' (weapons). Every French city has them, dating back to medieval times."},

    {type:"teach", trg:"un cabriolet", src:"a convertible car, a cabriolet", pos:"noun", gender:"m",
     note:"Masculine noun. A car with a folding roof. Originally a light horse-drawn carriage.",
     example:"A: Il roule en cabriolet l'\u00e9t\u00e9.\nB: C'est agr\u00e9able quand il fait beau.",
     exampleSrc:"A: He drives a convertible in summer.\nB: It's pleasant when the weather is nice.",
     funFact:"From 'cabriole' (a leap). The original cabriolet was a bouncy two-wheeled carriage from the 1700s."},

    {type:"teach", trg:"l'ascendance", src:"the ancestry, the lineage", pos:"noun", gender:"f",
     note:"Feminine noun. One's ancestral background or family line going upward.",
     example:"A: Son ascendance est m\u00e9lang\u00e9e, franco-marocaine.\nB: C'est une richesse culturelle.",
     exampleSrc:"A: His ancestry is mixed, Franco-Moroccan.\nB: It's a cultural richness.",
     funFact:"'Ascendance' goes up (ancestors), 'descendance' goes down (descendants). French genealogy is a popular hobby."},

    {type:"teach", trg:"barioler", src:"to paint in bright colors", pos:"verb", gender:null,
     note:"Verb. To splash with many vivid, sometimes clashing colors.",
     example:"A: Les enfants ont bariol\u00e9 le mur.\nB: C'est color\u00e9 mais un peu chaotique.",
     exampleSrc:"A: The children splashed the wall with bright colors.\nB: It's colorful but a bit chaotic.",
     funFact:"Often used for carnival or festival decorations. 'Bariol\u00e9' suggests joyful, exuberant color."},

    {type:"teach", trg:"un atoll", src:"an atoll", pos:"noun", gender:"m",
     note:"Masculine noun. A ring-shaped coral reef island.",
     example:"A: Cet atoll est un paradis naturel.\nB: L'eau turquoise est incroyable.",
     exampleSrc:"A: This atoll is a natural paradise.\nB: The turquoise water is incredible.",
     funFact:"France has atolls in French Polynesia. Mururoa atoll became famous for nuclear testing in the 1960s-90s."},

    {type:"match", pairs:[
      {trg:"baroque", src:"baroque style"},
      {trg:"basilique", src:"basilica"},
      {trg:"cin\u00e9matographe", src:"cinematograph"},
      {trg:"cabriolet", src:"convertible"},
      {trg:"atoll", src:"atoll"}
    ]},

    {type:"fb",
     s:"Le {1} a \u00e9t\u00e9 invent\u00e9 par les fr\u00e8res Lumi\u00e8re en 1895.",
     a:["cin\u00e9matographe"],
     opts:["cin\u00e9matographe","cubisme","cartographe","cabriolet"],
     hint:"The original device for projecting moving pictures, invented in Lyon.",
     sSrc:"The {1} was invented by the Lumi\u00e8re brothers in 1895."},

    {type:"mc",
     q:"Quel mot d\u00e9signe une \u00eele en forme d'anneau form\u00e9e par du corail ?",
     opts:["Un ch\u00e2ssis","Un crochet","Un atoll","Un chevron"],
     ans:"Un atoll",
     hint:"A ring-shaped coral island, common in the Pacific. France has many in Polynesia."}
  ]
};
export default LESSON_8;
