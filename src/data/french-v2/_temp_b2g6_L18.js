const LESSON_18 = {
  id:"frv2_b2g6_l18", title:"Structure et organisation", icon:"\uD83C\uDFD7\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Structure et organisation",
     desc:"Build vocabulary for discussing systems, structures, and organizational concepts.",
     goals:["Learn 20 words about structure and systems","Discuss organizational frameworks","Navigate institutional vocabulary"]},

    {type:"teach", trg:"l'organigramme", src:"the organizational chart", pos:"noun", gender:"m",
     note:"Masculine noun. A diagram showing the structure of an organization.",
     example:"A: L'organigramme montre qui dirige chaque service.\nB: Le directeur est tout en haut.",
     exampleSrc:"A: The org chart shows who leads each department.\nB: The director is at the very top.",
     funFact:"From 'organisme' + 'gramme'. Every French company and administration has one. A visual hierarchy."},

    {type:"teach", trg:"la hiérarchie", src:"the hierarchy", pos:"noun", gender:"f",
     note:"Feminine noun. A ranked system of authority from top to bottom.",
     example:"A: La hiérarchie dans l'armée est très stricte.\nB: Chaque grade a ses responsabilités.",
     exampleSrc:"A: The hierarchy in the army is very strict.\nB: Each rank has its responsibilities.",
     funFact:"From Greek 'hierarkhia' (sacred rule). French society is notably hierarchical compared to Nordic countries."},

    {type:"teach", trg:"le dispositif", src:"the device, the system, the arrangement", pos:"noun", gender:"m",
     note:"Masculine noun. A system or plan put in place for a specific purpose.",
     example:"A: Le dispositif de sécurité a été renforcé.\nB: Trois cents policiers sont déployés.",
     exampleSrc:"A: The security arrangement has been reinforced.\nB: Three hundred police officers are deployed.",
     funFact:"Very common in administrative French. 'Un dispositif d'aide' is a support scheme. Broader than 'appareil'."},

    {type:"teach", trg:"le mécanisme", src:"the mechanism", pos:"noun", gender:"m",
     note:"Masculine noun. The internal workings of a machine or process.",
     example:"A: Le mécanisme de cette horloge est complexe.\nB: C'est un travail d'horloger.",
     exampleSrc:"A: The mechanism of this clock is complex.\nB: It's a watchmaker's craft.",
     funFact:"Used figuratively: 'les mécanismes de défense' (defense mechanisms) from Freud, huge in French psychology."},

    {type:"mc",
     q:"Que montre 'un organigramme' ?",
     opts:["La structure hiérarchique d'une organisation","Les résultats financiers","Le planning des vacances","La liste des employés"],
     ans:"La structure hiérarchique d'une organisation",
     hint:"A visual diagram showing who reports to whom in a company or institution."},

    {type:"teach", trg:"le rouage", src:"the cog, the inner workings", pos:"noun", gender:"m",
     note:"Masculine noun. A gear wheel, or figuratively the inner workings of a system.",
     example:"A: Il connaît tous les rouages de l'administration.\nB: Il y travaille depuis vingt ans.",
     exampleSrc:"A: He knows all the inner workings of the administration.\nB: He's worked there for twenty years.",
     funFact:"From 'roue' (wheel). 'Les rouages du pouvoir' means the mechanisms of power. A classic French expression."},

    {type:"teach", trg:"l'échéance", src:"the deadline, the due date", pos:"noun", gender:"f",
     note:"Feminine noun. The date by which something must be done or paid.",
     example:"A: L'échéance du prêt est dans six mois.\nB: Il faut commencer à économiser.",
     exampleSrc:"A: The loan due date is in six months.\nB: We need to start saving.",
     funFact:"'À l'échéance' means when due. 'À brève échéance' means in the short term. Essential business vocabulary."},

    {type:"teach", trg:"le protocole", src:"the protocol, the procedure", pos:"noun", gender:"m",
     note:"Masculine noun. A set of rules for official or scientific procedures.",
     example:"A: Le protocole sanitaire est très strict.\nB: Tout le monde doit porter un masque.",
     exampleSrc:"A: The health protocol is very strict.\nB: Everyone must wear a mask.",
     funFact:"French diplomacy practically invented modern protocol. 'Chef du protocole' manages state ceremonies."},

    {type:"fb",
     s:"Il connaît tous les {1} de cette institution.",
     a:["rouages"],
     opts:["rouages","protocoles","échéances","mécanismes"],
     hint:"The inner workings or cogs of a system. From 'roue' meaning wheel.",
     sSrc:"He knows all the inner {1} of this institution."},

    {type:"teach", trg:"le maillon", src:"the link (of a chain)", pos:"noun", gender:"m",
     note:"Masculine noun. One link in a chain. Also figuratively a component of a system.",
     example:"A: Le maillon faible de l'équipe a été identifié.\nB: Il faut renforcer ce poste.",
     exampleSrc:"A: The weak link of the team has been identified.\nB: We need to strengthen that position.",
     funFact:"'Le Maillon faible' was the French version of 'The Weakest Link' TV show. 'Maillon' from 'maille' (mesh)."},

    {type:"teach", trg:"l'infrastructure", src:"the infrastructure", pos:"noun", gender:"f",
     note:"Feminine noun. The basic physical systems of a country or organization.",
     example:"A: L'infrastructure routière doit être modernisée.\nB: Les autoroutes sont vieillissantes.",
     exampleSrc:"A: The road infrastructure needs modernization.\nB: The highways are aging.",
     funFact:"France is famous for its TGV rail infrastructure. 'Les infrastructures' is often plural in French."},

    {type:"teach", trg:"le préalable", src:"the prerequisite, the precondition", pos:"noun", gender:"m",
     note:"Masculine noun or adjective. Something required before proceeding.",
     example:"A: C'est un préalable à toute négociation.\nB: Sans cela, on ne commence pas.",
     exampleSrc:"A: It's a prerequisite for any negotiation.\nB: Without it, we don't begin.",
     funFact:"'Au préalable' means beforehand. A key diplomatic and legal term in French negotiations."},

    {type:"mc",
     q:"Que désigne 'le maillon' dans une chaîne ?",
     opts:["Un anneau qui relie deux parties","Le premier élément","Le dernier élément","Le point central"],
     ans:"Un anneau qui relie deux parties",
     hint:"Think of a physical chain: each ring that connects to the next is one of these."},

    {type:"teach", trg:"le levier", src:"the lever, the leverage", pos:"noun", gender:"m",
     note:"Masculine noun. A tool for lifting, or figuratively a means of influence.",
     example:"A: L'éducation est un levier de progrès social.\nB: C'est l'investissement le plus important.",
     exampleSrc:"A: Education is a lever of social progress.\nB: It's the most important investment.",
     funFact:"Archimedes said 'Give me a lever and I'll move the world.' 'Levier de croissance' = growth driver."},

    {type:"teach", trg:"le périmètre", src:"the perimeter, the scope", pos:"noun", gender:"m",
     note:"Masculine noun. The boundary of an area, or the scope of a project.",
     example:"A: Le périmètre du projet a été défini.\nB: On ne dépasse pas ces limites.",
     exampleSrc:"A: The scope of the project has been defined.\nB: We don't exceed these limits.",
     funFact:"Used in both geometry and business. 'Périmètre de sécurité' is a common news term for cordoned areas."},

    {type:"teach", trg:"la matrice", src:"the matrix, the template", pos:"noun", gender:"f",
     note:"Feminine noun. An original mold or framework from which copies are made.",
     example:"A: Cette idée est la matrice de toute sa philosophie.\nB: Tout en découle.",
     exampleSrc:"A: This idea is the matrix of his entire philosophy.\nB: Everything flows from it.",
     funFact:"From Latin 'matrix' meaning womb. Used in mathematics, printing, and as a powerful metaphor."},

    {type:"fb",
     s:"Le {1} de sécurité a été établi autour du bâtiment.",
     a:["périmètre"],
     opts:["périmètre","protocole","levier","maillon"],
     hint:"The boundary line around an area, or the defined scope of something.",
     sSrc:"The security {1} was established around the building."},

    {type:"teach", trg:"le jalon", src:"the milestone, the marker", pos:"noun", gender:"m",
     note:"Masculine noun. A marker along a path, or a milestone in a project.",
     example:"A: Ce contrat est un jalon important pour l'entreprise.\nB: Il marque un tournant.",
     exampleSrc:"A: This contract is an important milestone for the company.\nB: It marks a turning point.",
     funFact:"'Poser des jalons' means to lay the groundwork. From surveyor's stakes marking out land."},

    {type:"teach", trg:"le pivot", src:"the pivot, the cornerstone", pos:"noun", gender:"m",
     note:"Masculine noun. The central point around which something turns.",
     example:"A: Elle est le pivot de cette organisation.\nB: Sans elle, tout s'effondre.",
     exampleSrc:"A: She is the cornerstone of this organization.\nB: Without her, everything collapses.",
     funFact:"Used in basketball ('joueur pivot' = center), strategy, and metaphorically for any central element."},

    {type:"match", pairs:[
      {trg:"rouage", src:"cog, inner workings"},
      {trg:"maillon", src:"link (of a chain)"},
      {trg:"levier", src:"lever, leverage"},
      {trg:"jalon", src:"milestone"},
      {trg:"pivot", src:"cornerstone"}
    ]},

    {type:"mc",
     q:"Que signifie 'poser des jalons' ?",
     opts:["Préparer le terrain pour un projet","Planter des arbres","Installer des clôtures","Construire des routes"],
     ans:"Préparer le terrain pour un projet",
     hint:"From surveyor's markers along a path. Figuratively, doing the preparatory work."},

    {type:"fb",
     s:"L'éducation est le principal {1} de développement social.",
     a:["levier"],
     opts:["levier","jalon","pivot","rouage"],
     hint:"A tool for moving or lifting heavy things. Figuratively, a means to drive change.",
     sSrc:"Education is the main {1} of social development."}
  ]
};
export default LESSON_18;
