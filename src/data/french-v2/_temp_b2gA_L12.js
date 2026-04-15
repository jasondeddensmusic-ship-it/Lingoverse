const LESSON_12 = {
  id:"frv2_b2gA_l12", title:"Textures et sensations", icon:"\u{1F44B}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Textures et sensations",
     desc:"Describe physical sensations, textures, and flavors with precision. Build the vocabulary needed for vivid descriptions at the B2 level.",
     goals:["Learn 14 texture and sensation words","Describe flavors and physical qualities","Use vivid adjectives and nouns in descriptions"]},

    {type:"teach", trg:"piquant", src:"spicy, prickly, biting", pos:"adj", gender:null,
     note:"Adjective. Describes spicy food, a sharp wit, or prickly texture.\nFeminine: piquante.",
     example:"A: Cette sauce est trop piquante pour moi.\nB: Ajoute un peu de creme pour adoucir.",
     exampleSrc:"A: This sauce is too spicy for me.\nB: Add a bit of cream to soften it.",
     funFact:"'Un commentaire piquant' means a witty, sharp remark. The word works for taste, touch, and personality."},

    {type:"teach", trg:"orange", src:"orange (color/adjective)", pos:"adj", gender:null,
     note:"Adjective. Invariable when used as a color adjective.\nAlso noun: une orange (the fruit).",
     example:"A: J'adore ce coucher de soleil orange.\nB: Les couleurs sont magnifiques ce soir.",
     exampleSrc:"A: I love this orange sunset.\nB: The colors are magnificent tonight.",
     funFact:"In French, most color adjectives derived from nouns (orange, marron, noisette) are invariable. They never agree."},

    {type:"teach", trg:"la porosite", src:"porosity", pos:"noun", gender:"f",
     note:"Feminine noun. The quality of having tiny holes that absorb liquid.\nAlso used figuratively.",
     example:"A: La porosite de cette pierre est elevee.\nB: Elle absorbe beaucoup d'eau.",
     exampleSrc:"A: The porosity of this stone is high.\nB: It absorbs a lot of water.",
     funFact:"Figuratively, 'la porosite entre politique et affaires' describes blurred boundaries. A journalists' favorite word."},

    {type:"teach", trg:"mou", src:"soft, limp, weak", pos:"adj", gender:null,
     note:"Adjective. Feminine: molle. Describes soft texture or weak character.\n'Mol' before vowels (rare).",
     example:"A: Ce matelas est trop mou.\nB: Il faut en acheter un plus ferme.",
     exampleSrc:"A: This mattress is too soft.\nB: We need to buy a firmer one.",
     funFact:"'Mou' for character means spineless. 'C'est un mou' is a mild insult for someone with no backbone."},

    {type:"teach", trg:"la jointure", src:"the joint, the juncture", pos:"noun", gender:"f",
     note:"Feminine noun. Where two things meet. Anatomical joint or seam.",
     example:"A: La jointure du genou me fait mal.\nB: Tu devrais consulter un medecin.",
     exampleSrc:"A: My knee joint hurts.\nB: You should see a doctor.",
     funFact:"Also used in construction: 'faire les jointures' means to grout tiles. The word spans anatomy and building."},

    {type:"mc",
     q:"Quel adjectif decrit a la fois un plat epice et un commentaire mordant ?",
     opts:["piquant","mou","orange","poreux"],
     ans:"piquant",
     hint:"Works for taste, touch, and personality. Something that stings or bites."},

    {type:"teach", trg:"la machoire", src:"the jaw", pos:"noun", gender:"f",
     note:"Feminine noun. The bone structure of the mouth.\n'Serrer les machoires' = to clench one's jaw.",
     example:"A: Il a serre les machoires de colere.\nB: Il essayait de se controler.",
     exampleSrc:"A: He clenched his jaw in anger.\nB: He was trying to control himself.",
     funFact:"'Bailler a s'en decrocher la machoire' means to yawn wide enough to dislocate your jaw. Classic French hyperbole."},

    {type:"teach", trg:"la griffes", src:"the claws, the brand signature", pos:"noun", gender:"f",
     note:"Feminine noun. Animal claws, or a fashion designer's label.\n'La griffe Chanel' = the Chanel label.",
     example:"A: Le chat sort ses griffes quand il a peur.\nB: Attention, ca fait mal !",
     exampleSrc:"A: The cat extends its claws when scared.\nB: Careful, it hurts!",
     funFact:"In fashion, 'une griffe' means a designer label. 'Porter la griffe de' means to bear the signature of."},

    {type:"teach", trg:"l'encombre", src:"the obstacle, hindrance", pos:"noun", gender:"f",
     note:"Feminine noun. An obstacle or impediment.\n'Sans encombre' = without trouble.",
     example:"A: Le voyage s'est passe sans encombre.\nB: Tant mieux, on avait peur des retards.",
     exampleSrc:"A: The trip went without a hitch.\nB: Good, we were worried about delays.",
     funFact:"Almost always used in the expression 'sans encombre'. You rarely hear 'avec encombre' in modern French."},

    {type:"fb",
     s:"Ce matelas est trop {1}, j'ai mal au dos.",
     a:["mou"],
     opts:["mou","piquant","orange","poreux"],
     hint:"Soft, limp, lacking firmness. The opposite of 'ferme' (firm).",
     sSrc:"This mattress is too {1}, my back hurts."},

    {type:"teach", trg:"le porcelet", src:"the piglet", pos:"noun", gender:"m",
     note:"Masculine noun. A young pig. Diminutive of 'porc'.\n'Porcelet roti' is a French delicacy.",
     example:"A: Le porcelet roti est la specialite de la maison.\nB: Ca sent delicieusement bon.",
     exampleSrc:"A: Roast piglet is the house specialty.\nB: It smells deliciously good.",
     funFact:"French charcuterie traditions are UNESCO-recognized. Porcelet is a festive dish, especially in the south."},

    {type:"teach", trg:"le poivrier", src:"the pepper mill/plant", pos:"noun", gender:"m",
     note:"Masculine noun. A pepper grinder or a pepper plant.\nFrom 'poivre' (pepper).",
     example:"A: Passe-moi le poivrier, s'il te plait.\nB: Tiens, ne mets pas trop de poivre.",
     exampleSrc:"A: Pass me the pepper mill, please.\nB: Here, don't put too much pepper.",
     funFact:"The Peugeot company has been making pepper mills since 1842, before they ever made cars."},

    {type:"teach", trg:"portant", src:"bearing, supporting", pos:"adj", gender:null,
     note:"Adjective. Capable of supporting weight.\n'A bout portant' = at point-blank range.",
     example:"A: Ce mur est portant, on ne peut pas l'abattre.\nB: Il soutient toute la structure.",
     exampleSrc:"A: This wall is load-bearing, we can't knock it down.\nB: It supports the whole structure.",
     funFact:"'Bien portant' means in good health. 'Un mur portant' is structural. The word adapts to many contexts."},

    {type:"mc",
     q:"Quelle expression signifie 'sans probleme, sans difficulte' ?",
     opts:["sans encombre","sans griffes","sans jointure","sans porosite"],
     ans:"sans encombre",
     hint:"A very common expression. The noun means obstacle or hindrance."},

    {type:"teach", trg:"le plaquage", src:"the tackle (rugby), the veneer", pos:"noun", gender:"m",
     note:"Masculine noun. A rugby tackle, or wood/metal veneer.\nFrom 'plaquer' (to flatten, to plate).",
     example:"A: Son plaquage etait spectaculaire.\nB: L'adversaire est tombe immediatement.",
     exampleSrc:"A: His tackle was spectacular.\nB: The opponent went down immediately.",
     funFact:"Rugby is beloved in southwest France. Toulouse and Toulon fans debate the art of the perfect plaquage."},

    {type:"fb",
     s:"Il a serre les {1} pour ne pas crier de douleur.",
     a:["machoires"],
     opts:["machoires","griffes","jointures","porcelets"],
     hint:"The bones of the mouth. To clench them is a sign of self-control or anger.",
     sSrc:"He clenched his {1} to keep from screaming in pain."},

    {type:"match", pairs:[
      {trg:"piquant", src:"spicy, biting"},
      {trg:"porosite", src:"porosity"},
      {trg:"griffes", src:"claws"},
      {trg:"poivrier", src:"pepper mill"},
      {trg:"plaquage", src:"tackle (rugby)"}
    ]},

    {type:"mc",
     q:"Quel animal est un jeune porc ?",
     opts:["un porcelet","un poivrier","un plaquage","un portant"],
     ans:"un porcelet",
     hint:"The diminutive of 'porc'. A small, young pig. A festive dish in southern France."}
  ]
};
export default LESSON_12;
