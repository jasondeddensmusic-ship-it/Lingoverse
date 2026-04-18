const LESSON_10 = {
  id:"frv2_b2g8_l10", title:"Émotions et états d'âme", icon:"\u{1F4AB}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Émotions et états d'âme",
     desc:"Advanced vocabulary for expressing complex emotions, moods, and psychological states.",
     goals:["Learn 15 emotion and state-of-mind words","Express nuanced feelings","Discuss psychological concepts at B2 level"]},

    {type:"teach", trg:"l'intériorisation", src:"the internalization", pos:"noun", gender:"f",
     note:"Feminine noun. The process of making something part of your inner self.\nPsychology term.",
     example:"A: L'intériorisation du stress est dangereuse.\nB: Il vaut mieux en parler.",
     exampleSrc:"A: The internalization of stress is dangerous.\nB: It's better to talk about it.",
     funFact:"French psychology heavily uses this concept. 'Intérioriser ses émotions' means to bottle up feelings."},

    {type:"teach", trg:"l'expressionnisme", src:"expressionism", pos:"noun", gender:"m",
     note:"Masculine noun. An art movement emphasizing emotional experience.\nEarly 20th century.",
     example:"A: L'expressionnisme allemand a influencé le cinéma.\nB: Les ombres, les contrastes.",
     exampleSrc:"A: German expressionism influenced cinema.\nB: The shadows, the contrasts.",
     funFact:"The 1920 film 'Caligari' is THE reference for expressionism in French film schools."},

    {type:"teach", trg:"méconnaissable", src:"unrecognizable", pos:"adj", gender:null,
     note:"Adjective. So changed as to be unrecognizable.\nFrom 'méconnaître' (to fail to recognize).",
     example:"A: Après sa maladie, il était méconnaissable.\nB: Il a tellement changé.",
     exampleSrc:"A: After his illness, he was unrecognizable.\nB: He changed so much.",
     funFact:"French loves this dramatic adjective. 'Le quartier est méconnaissable' is said about gentrification."},

    {type:"teach", trg:"mêlé", src:"mixed, mingled", pos:"adj", gender:null,
     note:"Adjective. Combined or intertwined.\nFeminine: mêlée. From 'mêler' (to mix).",
     example:"A: Ses sentiments sont mêlés de joie et de tristesse.\nB: C'est normal dans ces moments.",
     exampleSrc:"A: His feelings are mixed with joy and sadness.\nB: That's normal at such times.",
     funFact:"'Une mêlée' in rugby is a scrum. The word implies things tangled together."},

    {type:"mc",
     q:"Quel mot signifie 'garder ses émotions pour soi' ?",
     opts:["intériorisation","expressionnisme","exaltation","idéalisation"],
     ans:"intériorisation",
     hint:"The process of making something internal. Bottling up feelings instead of expressing them."},

    {type:"teach", trg:"le jamais-vu", src:"the feeling of unfamiliarity", pos:"noun", gender:"m",
     note:"Masculine noun. The opposite of déjà vu: feeling something familiar is new.\nPsychology term.",
     example:"A: J'ai eu un moment de jamais-vu chez moi.\nB: C'est un phénomène étrange.",
     exampleSrc:"A: I had a moment of jamais-vu at home.\nB: It's a strange phenomenon.",
     funFact:"Like 'déjà vu', 'jamais vu' is a French term used worldwide in psychology. Literally 'never seen'."},

    {type:"teach", trg:"l'ennui", src:"boredom, ennui", pos:"noun", gender:"m",
     note:"Masculine noun. Boredom or a deeper existential weariness.\nBorrowed back into English.",
     example:"A: L'ennui le ronge depuis des mois.\nB: Il a besoin de retrouver une passion.",
     exampleSrc:"A: Boredom has been eating at him for months.\nB: He needs to find a passion again.",
     funFact:"Baudelaire made 'l'ennui' a literary concept. In English, 'ennui' keeps the French existential depth."},

    {type:"teach", trg:"le déchaînement", src:"the outburst, the frenzy", pos:"noun", gender:"m",
     note:"Masculine noun. A violent, uncontrolled outpouring.\nFrom 'déchaîner' (to unchain).",
     example:"A: Le déchaînement des passions est dangereux.\nB: Il faut garder son calme.",
     exampleSrc:"A: The outburst of passions is dangerous.\nB: We must keep calm.",
     funFact:"The image is of breaking chains. French loves this metaphor for any uncontrolled emotional release."},

    {type:"fb",
     s:"Après sa transformation, il était {1}, personne ne le reconnaissait.",
     a:["méconnaissable"],
     opts:["méconnaissable","mêlé","momentané","magnétique"],
     hint:"So changed that you cannot recognize the person. Think of 'mis-' + 'connaître'.",
     sSrc:"After his transformation, he was {1}, nobody recognized him."},

    {type:"teach", trg:"numéroté", src:"numbered", pos:"adj", gender:null,
     note:"Adjective. Having a number assigned.\nFeminine: numérotée. From 'numéroter'.",
     example:"A: Les places sont numérotées.\nB: Cherchons nos sièges.",
     exampleSrc:"A: The seats are numbered.\nB: Let's find our seats.",
     funFact:"French theaters always have 'places numérotées'. Standing-room-only is 'places debout'."},

    {type:"teach", trg:"l'encombre", src:"the obstacle, the hindrance", pos:"noun", gender:"m",
     note:"Masculine noun. An obstacle or impediment.\nMostly in 'sans encombre' (without a hitch).",
     example:"A: Le voyage s'est passé sans encombre.\nB: Tant mieux, on avait peur du retard.",
     exampleSrc:"A: The trip went without a hitch.\nB: Good, we were afraid of delays.",
     funFact:"Almost never used outside 'sans encombre'. One of French's most formulaic fixed expressions."},

    {type:"teach", trg:"l'idéalisation", src:"the idealization", pos:"noun", gender:"f",
     note:"Feminine noun. Viewing something as perfect when it is not.\nPsychology and romance.",
     example:"A: L'idéalisation du partenaire est fréquente au début.\nB: La réalité finit par s'imposer.",
     exampleSrc:"A: Idealization of the partner is common at first.\nB: Reality eventually sets in.",
     funFact:"French novelist Stendhal described love's idealization as 'cristallisation' in his famous essay 'De l'amour'."},

    {type:"mc",
     q:"Quel terme français, utilisé en psychologie, est l'opposé du déjà-vu ?",
     opts:["le jamais-vu","l'ennui","le déchaînement","l'intériorisation"],
     ans:"le jamais-vu",
     hint:"Literally 'never seen'. The feeling that something familiar suddenly seems completely new."},

    {type:"teach", trg:"cinquantième", src:"fiftieth", pos:"adj", gender:null,
     note:"Adjective/noun. The ordinal number for 50.\nInvariable as adjective.",
     example:"A: C'est le cinquantième anniversaire du festival.\nB: Un demi-siècle de musique !",
     exampleSrc:"A: It's the fiftieth anniversary of the festival.\nB: Half a century of music!",
     funFact:"French ordinal numbers above 'premier' all end in '-ième'. 'Cinquantième' trips many learners."},

    {type:"teach", trg:"dixième", src:"tenth", pos:"adj", gender:null,
     note:"Adjective/noun. The ordinal number for 10.\nAlso a noun: un dixième (a tenth).",
     example:"A: C'est le dixième arrondissement de Paris.\nB: Un quartier très vivant.",
     exampleSrc:"A: It's the tenth arrondissement of Paris.\nB: A very lively neighborhood.",
     funFact:"Parisians identify themselves by their arrondissement number. 'Le dixième' means a whole lifestyle."},

    {type:"teach", trg:"l'amuse-gueule", src:"the appetizer, the hors d'oeuvre", pos:"noun", gender:"m",
     note:"Masculine compound noun. A small snack served before a meal.\nPlural: des amuse-gueules.",
     example:"A: Les amuse-gueules sont délicieux.\nB: Le chef s'est vraiment surpassé.",
     exampleSrc:"A: The appetizers are delicious.\nB: The chef really outdid himself.",
     funFact:"Literally 'mouth-amuser'. 'Gueule' is the informal word for mouth (animal or vulgar for human)."},

    {type:"fb",
     s:"Le voyage s'est passé sans {1}, tout était parfait.",
     a:["encombre"],
     opts:["encombre","ennui","déchaînement","amuse-gueule"],
     hint:"A fixed expression meaning without any obstacle or problem. A very common phrase.",
     sSrc:"The trip went without {1}, everything was perfect."},

    {type:"match", pairs:[
      {trg:"jamais-vu", src:"feeling of unfamiliarity"},
      {trg:"ennui", src:"boredom, existential weariness"},
      {trg:"méconnaissable", src:"unrecognizable"},
      {trg:"amuse-gueule", src:"appetizer"},
      {trg:"dixième", src:"tenth"}
    ]},

    {type:"mc",
     q:"Quel écrivain français a fait de 'l'ennui' un grand thème littéraire ?",
     opts:["Baudelaire","Molière","Voltaire","Zola"],
     ans:"Baudelaire",
     hint:"A 19th century poet who explored boredom as existential weariness in his famous poetry."},

    {type:"fb",
     s:"Les {1} sont délicieux, le chef s'est surpassé.",
     a:["amuse-gueules"],
     opts:["amuse-gueules","déchaînements","encombres","binocles"],
     hint:"Bite-sized appetisers served before the main meal. The name literally refers to entertaining one's palate.",
     sSrc:"The {1} are delicious, the chef outdid himself."}
  ]
};
export default LESSON_10;
