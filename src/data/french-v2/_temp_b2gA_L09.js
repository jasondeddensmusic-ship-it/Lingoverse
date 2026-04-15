const LESSON_9 = {
  id:"frv2_b2gA_l9", title:"Mouvements et ideologies", icon:"\u{270A}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Mouvements et ideologies",
     desc:"Discuss political and cultural movements, ideologies, and social philosophies. Essential B2 vocabulary for understanding French intellectual life.",
     goals:["Learn 14 ideology and movement words","Discuss isms and social philosophies","Analyze cultural and political trends"]},

    {type:"teach", trg:"le positivisme", src:"positivism", pos:"noun", gender:"m",
     note:"Masculine noun. Philosophy that knowledge comes from observable evidence only.",
     example:"A: Auguste Comte a fonde le positivisme.\nB: L'observation scientifique avant tout.",
     exampleSrc:"A: Auguste Comte founded positivism.\nB: Scientific observation above all.",
     funFact:"Comte's positivism influenced Brazil so much that 'Ordem e Progresso' on their flag comes from his motto."},

    {type:"teach", trg:"l'expressionnisme", src:"expressionism", pos:"noun", gender:"m",
     note:"Masculine noun. Art movement emphasizing emotional experience over reality.",
     example:"A: L'expressionnisme a bouleverse l'art du XXe siecle.\nB: Les couleurs et les formes sont si intenses.",
     exampleSrc:"A: Expressionism revolutionized 20th century art.\nB: The colors and forms are so intense.",
     funFact:"Though born in Germany, expressionism deeply influenced French cinema. 'Le Cabinet du Dr Caligari' inspired French New Wave."},

    {type:"teach", trg:"le particularisme", src:"particularism, regionalism", pos:"noun", gender:"m",
     note:"Masculine noun. Emphasis on the unique character of a region or group.",
     example:"A: Le particularisme breton est tres fort.\nB: Ils sont fiers de leur culture.",
     exampleSrc:"A: Breton particularism is very strong.\nB: They are proud of their culture.",
     funFact:"France's regions have strong identities: Breton, Basque, Alsatian, Corsican. Particularisme is a political force."},

    {type:"teach", trg:"l'integisme", src:"fundamentalism, extremism", pos:"noun", gender:"m",
     note:"Masculine noun. Strict, uncompromising adherence to doctrine.\nOriginally Catholic, now broader.",
     example:"A: L'integrisme menace la cohesion sociale.\nB: Le dialogue est la seule solution.",
     exampleSrc:"A: Fundamentalism threatens social cohesion.\nB: Dialogue is the only solution.",
     funFact:"Originally described ultra-conservative Catholics in France. Now used for any form of rigid doctrinal extremism."},

    {type:"teach", trg:"la globalite", src:"the totality, the whole picture", pos:"noun", gender:"f",
     note:"Feminine noun. The complete picture, everything taken together.",
     example:"A: Il faut voir le probleme dans sa globalite.\nB: Oui, pas seulement les details.",
     exampleSrc:"A: We need to see the problem in its totality.\nB: Yes, not just the details.",
     funFact:"Different from 'la globalisation'. Globalite is about completeness, globalisation is about worldwide spread."},

    {type:"mc",
     q:"Quelle philosophie affirme que seule l'observation scientifique produit la connaissance ?",
     opts:["le positivisme","l'expressionnisme","le particularisme","l'integrisme"],
     ans:"le positivisme",
     hint:"Founded by Auguste Comte. The Brazilian flag motto comes from this philosophy."},

    {type:"teach", trg:"le pamphlet", src:"the pamphlet, the polemical text", pos:"noun", gender:"m",
     note:"Masculine noun. A short, aggressive text attacking someone or something.",
     example:"A: Il a publie un pamphlet contre le gouvernement.\nB: Sa critique est virulente.",
     exampleSrc:"A: He published a pamphlet against the government.\nB: His criticism is fierce.",
     funFact:"In French, 'pamphlet' is always polemical and aggressive, unlike in English where it can be neutral."},

    {type:"teach", trg:"le pamphletaire", src:"the pamphleteer", pos:"noun", gender:"m",
     note:"Masculine noun. Feminine: la pamphletaire.\nA writer of polemical texts.",
     example:"A: Voltaire etait un grand pamphletaire.\nB: Ses textes sont toujours d'actualite.",
     exampleSrc:"A: Voltaire was a great pamphleteer.\nB: His texts are still relevant today.",
     funFact:"France has a proud tradition of pamphletaires from Voltaire to Zola's 'J'accuse'. Words as weapons."},

    {type:"teach", trg:"la diabolisation", src:"demonization", pos:"noun", gender:"f",
     note:"Feminine noun. The act of portraying someone or something as evil.",
     example:"A: La diabolisation de l'adversaire nuit au debat.\nB: Il faut argumenter, pas diaboliser.",
     exampleSrc:"A: Demonizing the opponent harms the debate.\nB: We should argue, not demonize.",
     funFact:"A key term in French political discourse. Marine Le Pen's strategy was called 'dediabolisation' (de-demonization)."},

    {type:"fb",
     s:"Voltaire etait un {1} celebre qui attaquait l'injustice par ses ecrits.",
     a:["pamphletaire"],
     opts:["pamphletaire","positiviste","expressionniste","integriste"],
     hint:"A writer of aggressive, polemical texts. Think of Voltaire and Zola.",
     sSrc:"Voltaire was a famous {1} who attacked injustice through his writings."},

    {type:"teach", trg:"le pointillisme", src:"pointillism", pos:"noun", gender:"m",
     note:"Masculine noun. Painting technique using tiny dots of color.\nFrom 'point' (dot).",
     example:"A: Le pointillisme a ete invente par Seurat.\nB: De pres, on ne voit que des points.",
     exampleSrc:"A: Pointillism was invented by Seurat.\nB: Up close, you only see dots.",
     funFact:"Seurat's 'Un dimanche apres-midi a l'Ile de la Grande Jatte' is the masterpiece of pointillisme."},

    {type:"teach", trg:"posthume", src:"posthumous", pos:"adj", gender:null,
     note:"Adjective. Published, awarded, or occurring after someone's death.\nSame form for both genders.",
     example:"A: C'est une oeuvre posthume de l'auteur.\nB: Elle a ete publiee par sa famille.",
     exampleSrc:"A: It's a posthumous work by the author.\nB: It was published by his family.",
     funFact:"Many great French writers achieved fame posthume: Stendhal, Rimbaud, and even Proust's final volumes."},

    {type:"teach", trg:"la perquisition", src:"the search (legal)", pos:"noun", gender:"f",
     note:"Feminine noun. An official search of premises by police.\n'Mandat de perquisition' = search warrant.",
     example:"A: La perquisition a dure toute la nuit.\nB: Ils ont saisi plusieurs ordinateurs.",
     exampleSrc:"A: The search lasted all night.\nB: They seized several computers.",
     funFact:"French police need a 'mandat de perquisition' from a judge. Searches can only happen between 6am and 9pm."},

    {type:"mc",
     q:"Quel mouvement artistique utilise des points de couleur pour creer une image ?",
     opts:["le pointillisme","l'expressionnisme","le positivisme","le modernisme"],
     ans:"le pointillisme",
     hint:"From 'point' (dot). Seurat invented this technique in the 1880s."},

    {type:"teach", trg:"populeux", src:"populous, densely populated", pos:"adj", gender:null,
     note:"Adjective. Having a large population. Feminine: populeuse.\nDo not confuse with 'populaire'.",
     example:"A: Shanghai est une ville populeuse.\nB: Plus de 25 millions d'habitants.",
     exampleSrc:"A: Shanghai is a populous city.\nB: Over 25 million inhabitants.",
     funFact:"'Populeux' means densely populated. 'Populaire' means popular or working-class. Different meanings entirely."},

    {type:"fb",
     s:"La {1} de l'adversaire politique empeche tout dialogue constructif.",
     a:["diabolisation"],
     opts:["diabolisation","globalite","perquisition","particularisme"],
     hint:"Portraying someone as evil or demonic. A tactic in political rhetoric.",
     sSrc:"The {1} of the political opponent prevents any constructive dialogue."},

    {type:"match", pairs:[
      {trg:"pamphlet", src:"polemical text"},
      {trg:"pointillisme", src:"pointillism"},
      {trg:"posthume", src:"posthumous"},
      {trg:"perquisition", src:"police search"},
      {trg:"populeux", src:"populous"}
    ]},

    {type:"mc",
     q:"Quel mot designe l'attachement aux specificites d'une region ?",
     opts:["le particularisme","le positivisme","l'integrisme","le pamphletaire"],
     ans:"le particularisme",
     hint:"From 'particulier'. The emphasis on what makes a region or group unique."}
  ]
};
export default LESSON_9;
