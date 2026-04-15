const LESSON_6 = {
  id:"frv2_b2gB_l6", title:"Vie quotidienne avancee", icon:"\u{1F3E0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Vie quotidienne avancee",
     desc:"Expand your everyday vocabulary with nuanced words for daily life, objects, and household activities.",
     goals:["Learn 10 advanced daily life terms","Describe household items precisely","Use nuanced vocabulary for routines"]},

    {type:"teach", trg:"un coffre-fort", src:"a safe, a strongbox", pos:"noun", gender:"m",
     note:"Masculine compound noun. Coffre (chest) + fort (strong).\nPlural: des coffres-forts.",
     example:"A: Les bijoux sont dans le coffre-fort.\nB: Tu te souviens de la combinaison?",
     exampleSrc:"A: The jewels are in the safe.\nB: Do you remember the combination?",
     funFact:"French banks offer 'coffres-forts' for rent. Many families keep one at home behind a painting, just like in the movies."},

    {type:"teach", trg:"un grille-pain", src:"a toaster", pos:"noun", gender:"m",
     note:"Masculine compound noun. Grille (grills) + pain (bread).\nInvariant in plural: des grille-pain.",
     example:"A: Le grille-pain est en panne depuis hier.\nB: On pourrait faire des tartines au four.",
     exampleSrc:"A: The toaster has been broken since yesterday.\nB: We could make toast in the oven.",
     funFact:"The French eat 10 billion baguettes a year. Despite loving bread, most French homes got toasters only in the 1980s."},

    {type:"teach", trg:"une poussette", src:"a stroller, a pushchair", pos:"noun", gender:"f",
     note:"Feminine noun. From 'pousser' (to push).\nAlso means a small push or nudge in some contexts.",
     example:"A: La poussette ne passe pas dans l'escalier.\nB: Il faudrait prendre l'ascenseur.",
     exampleSrc:"A: The stroller doesn't fit in the stairway.\nB: We should take the elevator.",
     funFact:"Parisian sidewalks are notoriously difficult for strollers. The city has been slowly adding ramps since the 2000s."},

    {type:"teach", trg:"une maisonnee", src:"a household", pos:"noun", gender:"f",
     note:"Feminine noun. All the people living in one house.\nMore literary than 'famille' or 'menage'.",
     example:"A: Toute la maisonnee etait reunie pour le diner.\nB: Meme les enfants etaient sages ce soir-la.",
     exampleSrc:"A: The whole household was gathered for dinner.\nB: Even the children were well-behaved that evening.",
     funFact:"Maisonnee has a warm, old-fashioned feel. Modern French prefers 'foyer' for household in official documents."},

    {type:"teach", trg:"un laissez-passer", src:"a pass, a permit", pos:"noun", gender:"m",
     note:"Masculine compound noun. Laissez (let) + passer (pass through).\nInvariant: des laissez-passer.",
     example:"A: Il vous faut un laissez-passer pour entrer dans la zone.\nB: Ou puis-je en obtenir un?",
     exampleSrc:"A: You need a pass to enter the zone.\nB: Where can I get one?",
     funFact:"Laissez-passer entered English directly. It is used internationally in diplomacy for emergency travel documents."},

    {type:"teach", trg:"la grossierete", src:"rudeness, coarseness", pos:"noun", gender:"f",
     note:"Feminine noun. Rude behavior or vulgar language.\nFrom 'grossier' (rude, coarse).",
     example:"A: Sa grossierete m'a choque.\nB: Il n'a aucune notion de politesse.",
     exampleSrc:"A: His rudeness shocked me.\nB: He has no notion of politeness.",
     funFact:"The French reputation for rudeness is largely a Parisian stereotype. Provincial France is famously warm and welcoming."},

    {type:"teach", trg:"la petitesse", src:"smallness, pettiness", pos:"noun", gender:"f",
     note:"Feminine noun. Physical smallness, or moral meanness.\nPetitesse d'esprit = narrow-mindedness.",
     example:"A: La petitesse de cet appartement est frappante.\nB: Il fait a peine trente metres carres.",
     exampleSrc:"A: The smallness of this apartment is striking.\nB: It's barely thirty square meters.",
     funFact:"Parisian apartments are among the most expensive per square meter in Europe. 'Chambre de bonne' (maid's room) studios are a cultural icon."},

    {type:"teach", trg:"la guise", src:"the way, the fashion", pos:"noun", gender:"f",
     note:"Feminine noun. Manner or way of doing things.\nA sa guise = as one pleases. En guise de = by way of.",
     example:"A: Chacun fait a sa guise ici.\nB: C'est une maison tres liberale.",
     exampleSrc:"A: Everyone does as they please here.\nB: It's a very liberal household.",
     funFact:"'En guise de' is essential in formal writing. 'En guise de conclusion' (by way of conclusion) closes many French essays."},

    {type:"teach", trg:"l'encombre", src:"the obstacle, the hindrance", pos:"noun", gender:"m",
     note:"Masculine noun. An obstruction or difficulty.\nSans encombre = without a hitch.",
     example:"A: Le voyage s'est passe sans encombre.\nB: Pas un seul retard, c'est rare!",
     exampleSrc:"A: The trip went without a hitch.\nB: Not a single delay, that's rare!",
     funFact:"'Sans encombre' is one of the most common expressions in French travel writing. It signals relief after an uneventful journey."},

    {type:"teach", trg:"un penchant", src:"a tendency, a fondness", pos:"noun", gender:"m",
     note:"Masculine noun. An inclination toward something.\nAvoir un penchant pour = to have a fondness for.",
     example:"A: Elle a un penchant pour les desserts au chocolat.\nB: Ca se voit, elle en commande toujours!",
     exampleSrc:"A: She has a fondness for chocolate desserts.\nB: You can tell, she always orders them!",
     funFact:"In psychology, penchant can mean a worrying tendency. Context determines whether it is positive (fondness) or negative (inclination)."},

    {type:"mc", q:"Que signifie 'sans encombre'?",
     opts:["Sans difficulte","Sans arret","Sans bruit","Sans raison"],
     ans:"Sans difficulte",
     hint:"Encombre means obstacle, so without obstacles means..."},

    {type:"fb", s:"Le {1} ne fonctionne plus, il faut en acheter un nouveau.",
     a:["grille-pain"], opts:["grille-pain","coffre-fort","laissez-passer","penchant"],
     hint:"The compound noun combines grilling and bread for this kitchen appliance",
     sSrc:"The {1} no longer works, we need to buy a new one."},

    {type:"mc", q:"'En guise de conclusion' signifie:",
     opts:["En tant que conclusion","Sans conclusion","Avant la conclusion","Apres la conclusion"],
     ans:"En tant que conclusion",
     hint:"En guise de means 'by way of' or 'as a substitute for'"},

    {type:"match", pairs:[
      {trg:"un coffre-fort", src:"a safe"},
      {trg:"une poussette", src:"a stroller"},
      {trg:"une maisonnee", src:"a household"},
      {trg:"un laissez-passer", src:"a permit"}
    ]},

    {type:"fb", s:"Sa {1} a blesse tout le monde a la reunion.",
     a:["grossierete"], opts:["grossierete","petitesse","guise","maisonnee"],
     hint:"The noun describes rude, coarse behavior that offends others",
     sSrc:"His {1} hurt everyone at the meeting."},

    {type:"mc", q:"Quel est le pluriel de 'coffre-fort'?",
     opts:["des coffres-forts","des coffre-forts","des coffres-fort","des coffre-fort"],
     ans:"des coffres-forts",
     hint:"In this compound noun, both parts take the plural mark"},

    {type:"fb", s:"Il a un {1} pour la musique classique.",
     a:["penchant"], opts:["penchant","encombre","laissez-passer","grille-pain"],
     hint:"The noun describes a natural inclination or fondness for something",
     sSrc:"He has a {1} for classical music."},

    {type:"mc", q:"'Petitesse d'esprit' signifie:",
     opts:["Etroitesse de vues","Grande intelligence","Taille physique","Jeune age"],
     ans:"Etroitesse de vues",
     hint:"This expression combines smallness with mind, suggesting limited thinking"},

    {type:"fb", s:"Le voyage s'est deroule sans {1}.",
     a:["encombre"], opts:["encombre","guise","petitesse","grossierete"],
     hint:"The word means obstacle or hindrance, and without it means smoothly",
     sSrc:"The trip went without any {1}."},

    {type:"match", pairs:[
      {trg:"la grossierete", src:"rudeness"},
      {trg:"la petitesse", src:"pettiness"},
      {trg:"la guise", src:"the way"},
      {trg:"un penchant", src:"a tendency"}
    ]}
  ]
};
export default LESSON_6;
