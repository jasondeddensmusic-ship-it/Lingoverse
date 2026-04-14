// French B2 Gap Lesson 15 — Science and Research
const LESSON_15 = {id:"frv2_b2g5_l15", title:"Science et recherche", icon:"🔬", xp:15, board:true, steps:[
  {type:"intro", title:"Science et recherche",
   desc:"Build vocabulary for discussing scientific research, methodology, and discoveries at the B2 level.",
   goals:["Learn 15 key words about science and research","Discuss research methods and findings","Use scientific register vocabulary"]},

  {type:"teach", trg:"l'adduction", src:"the supply / conveyance", pos:"noun", gender:"f",
   note:"The process of bringing something to a location.\n'Adduction d'eau' = water supply system.",
   example:"A: L'adduction d'eau potable est essentielle dans les zones rurales.\nB: Beaucoup de villages n'ont toujours pas l'eau courante.\nA: Les projets d'infrastructure avancent.\nB: Mais pas assez vite pour certaines communautés.",
   exampleSrc:"A: Drinking water supply is essential in rural areas.\nB: Many villages still don't have running water.\nA: Infrastructure projects are progressing.\nB: But not fast enough for some communities.",
   funFact:"From Latin 'adductio' (bringing to). In anatomy, adduction is the movement of a limb toward the body."},

  {type:"teach", trg:"le funiculaire", src:"the funicular railway", pos:"noun", gender:"m",
   note:"A cable railway for steep slopes.\nAlso used as an adjective.",
   example:"A: Le funiculaire de Montmartre transporte des millions de touristes.\nB: C'est plus facile que de monter les escaliers.\nA: La vue d'en haut est magnifique.\nB: Paris s'étend à perte de vue.",
   exampleSrc:"A: The Montmartre funicular carries millions of tourists.\nB: It's easier than climbing the stairs.\nA: The view from the top is magnificent.\nB: Paris stretches as far as the eye can see.",
   funFact:"From Latin 'funiculus' (small rope). The Montmartre funicular has operated since 1900."},

  {type:"teach", trg:"le footballeur", src:"the football player", pos:"noun", gender:"m",
   note:"A person who plays football (soccer).\nFeminine: footballeuse.",
   example:"A: Ce footballeur est le meilleur de sa génération.\nB: Il marque des buts extraordinaires.\nA: Sa technique est incomparable.\nB: Il inspire des millions de jeunes.",
   exampleSrc:"A: This football player is the best of his generation.\nB: He scores extraordinary goals.\nA: His technique is incomparable.\nB: He inspires millions of young people.",
   funFact:"From 'football' (borrowed from English) + '-eur'. France won the World Cup in 1998 and 2018."},

  {type:"teach", trg:"le démonter", src:"to disassemble / to take apart", pos:"verb", gender:null,
   note:"To take something apart into pieces.\nAlso figurative: 'démonter un argument' (to demolish an argument).",
   example:"A: Il faut démonter cette machine pour la réparer.\nB: Tu as les bons outils?\nA: Oui, j'ai tout ce qu'il faut.\nB: Fais attention à noter l'ordre des pièces.",
   exampleSrc:"A: We need to disassemble this machine to repair it.\nB: Do you have the right tools?\nA: Yes, I have everything I need.\nB: Be careful to note the order of the parts.",
   funFact:"From 'dé-' (un-) + 'monter' (to mount/assemble). 'Remonter' means to reassemble."},

  {type:"teach", trg:"déshumaniser", src:"to dehumanize", pos:"verb", gender:null,
   note:"To deprive of human qualities.\nUsed in ethics, war, and technology discussions.",
   example:"A: La technologie peut déshumaniser les relations.\nB: Quand on communique uniquement par écran.\nA: Le contact humain reste irremplaçable.\nB: Il faut trouver un équilibre.",
   exampleSrc:"A: Technology can dehumanize relationships.\nB: When we communicate only through screens.\nA: Human contact remains irreplaceable.\nB: We need to find a balance.",
   funFact:"From 'dés-' (de-) + 'humaniser' (to humanize). A key concept in discussions about AI and automation."},

  {type:"teach", trg:"l'individualiser", src:"to individualize / to personalize", pos:"verb", gender:null,
   note:"To adapt something to individual needs.\nKey concept in education and medicine.",
   example:"A: Il faut individualiser l'enseignement.\nB: Chaque élève apprend différemment.\nA: La technologie peut aider.\nB: Oui, les programmes adaptatifs sont prometteurs.",
   exampleSrc:"A: Teaching needs to be individualized.\nB: Each student learns differently.\nA: Technology can help.\nB: Yes, adaptive programs are promising.",
   funFact:"From 'individuel' + '-iser'. Personalized medicine and education are major trends in France."},

  {type:"teach", trg:"l'interposer", src:"to interpose / to step in", pos:"verb", gender:null,
   note:"To place between two things or people.\nReflexive 's'interposer' = to intervene.",
   example:"A: Le professeur s'est interposé entre les deux élèves.\nB: Il a empêché la bagarre.\nA: Son intervention était nécessaire.\nB: La violence n'est jamais acceptable à l'école.",
   exampleSrc:"A: The teacher stepped in between the two students.\nB: He prevented the fight.\nA: His intervention was necessary.\nB: Violence is never acceptable at school.",
   funFact:"From Latin 'interponere' (to place between). 'S'interposer' implies courage and authority."},

  {type:"teach", trg:"l'inhaler", src:"to inhale", pos:"verb", gender:null,
   note:"To breathe in deliberately. Medical and general use.\nRelated noun: inhalation.",
   example:"A: Inhale profondément par le nez.\nB: Pendant combien de secondes?\nA: Cinq secondes, puis expire lentement.\nB: Cet exercice de respiration calme le stress.",
   exampleSrc:"A: Inhale deeply through the nose.\nB: For how many seconds?\nA: Five seconds, then exhale slowly.\nB: This breathing exercise calms stress.",
   funFact:"From Latin 'inhalare'. In French, 'un inhalateur' is the device used for asthma treatment."},

  {type:"teach", trg:"le hérisser", src:"to bristle / to stand on end", pos:"verb", gender:null,
   note:"Hair or fur standing up from cold, fear, or irritation.\nReflexive: 'se hérisser' = to bristle with anger.",
   example:"A: Ses commentaires me hérissent.\nB: Il sait exactement comment t'énerver.\nA: Mon chat se hérisse quand il a peur.\nB: C'est un réflexe de protection.",
   exampleSrc:"A: His comments make me bristle.\nB: He knows exactly how to annoy you.\nA: My cat bristles when it's scared.\nB: It's a protective reflex.",
   funFact:"From Latin 'ericius' (hedgehog). A hedgehog is 'un hérisson' in French, from the same root."},

  {type:"mc", q:"Que signifie 'démonter un argument'?",
   opts:["Réfuter un argument en montrant ses faiblesses","Construire un argument solide","Présenter un argument nouveau","Copier un argument"],
   ans:"Réfuter un argument en montrant ses faiblesses",
   hint:"Taking it apart piece by piece to show it doesn't hold together"},

  {type:"fb", s:"Il faut {1} l'enseignement pour s'adapter à chaque élève.",
   a:["individualiser"], opts:["individualiser","déshumaniser","démonter","interposer"],
   hint:"To adapt and personalize for each person's unique needs",
   sSrc:"Teaching needs to be {1} to adapt to each student."},

  {type:"teach", trg:"industriellement", src:"industrially", pos:"adv", gender:null,
   note:"In an industrial manner, on a large scale.\nContrasts with 'artisanalement' (in a craft manner).",
   example:"A: Ce fromage est produit industriellement.\nB: Il n'a pas le même goût qu'un artisanal.\nA: C'est moins cher par contre.\nB: Le prix ne fait pas tout.",
   exampleSrc:"A: This cheese is produced industrially.\nB: It doesn't taste the same as artisanal.\nA: It's cheaper though.\nB: Price isn't everything.",
   funFact:"From 'industriel' + '-ment'. French culture often values artisanal over industrial production."},

  {type:"teach", trg:"le jeûner", src:"to fast", pos:"verb", gender:null,
   note:"To abstain from food, for health or religion.\nThe noun is 'le jeûne' (the fast).",
   example:"A: Certaines personnes jeûnent pour leur santé.\nB: Le jeûne intermittent est à la mode.\nA: C'est recommandé par les médecins?\nB: Ça dépend, il faut demander conseil.",
   exampleSrc:"A: Some people fast for their health.\nB: Intermittent fasting is trendy.\nA: Is it recommended by doctors?\nB: It depends, you should seek advice.",
   funFact:"From Latin 'jejunare'. The circumflex accent on the 'u' marks a historical lost 's' (cf. Old French 'jeuner')."},

  {type:"mc", q:"Que signifie 's'interposer'?",
   opts:["Intervenir entre deux personnes ou choses","Se retirer d'une situation","Ignorer un conflit","Encourager une dispute"],
   ans:"Intervenir entre deux personnes ou choses",
   hint:"Stepping in between two parties to prevent conflict or harm"},

  {type:"fb", s:"La technologie peut {1} les relations humaines si on n'y fait pas attention.",
   a:["déshumaniser"], opts:["déshumaniser","individualiser","interposer","démonter"],
   hint:"To strip away human qualities from interactions",
   sSrc:"Technology can {1} human relationships if we're not careful."},

  {type:"match", pairs:[
    {trg:"démonter", src:"to disassemble"},
    {trg:"individualiser", src:"to personalize"},
    {trg:"hérisser", src:"to bristle"},
    {trg:"jeûner", src:"to fast"},
    {trg:"industriellement", src:"industrially"}
  ]},

  {type:"mc", q:"Qu'est-ce que l'adduction d'eau?",
   opts:["Le système d'approvisionnement en eau potable","Un type de traitement de l'eau","Un barrage","Une fontaine publique"],
   ans:"Le système d'approvisionnement en eau potable",
   hint:"The infrastructure that brings drinking water to communities"},

  {type:"fb", s:"Ses commentaires me {1}, ils me mettent vraiment en colère.",
   a:["hérissent"], opts:["hérissent","inhalent","démontent","interposent"],
   hint:"Make my hair stand on end with irritation, like a hedgehog's spines",
   sSrc:"His comments make me {1}, they really make me angry."},

  {type:"drag_fill", s:"Ce fromage est produit {1} alors que celui-ci est fabriqué {2}.",
   blanks:{"1":"industriellement","2":"artisanalement"},
   pool:["industriellement","artisanalement","fraîchement","individuellement"],
   hint:"One is made on a large factory scale, the other by hand in a traditional workshop"},

  {type:"mc", q:"Quel transport permet de monter une pente très raide?",
   opts:["Le funiculaire","Le métro","Le tramway","Le bus"],
   ans:"Le funiculaire",
   hint:"A cable railway specifically designed for steep slopes"}
]};
export default LESSON_15;
