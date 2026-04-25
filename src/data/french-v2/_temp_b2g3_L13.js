const LESSON_13 = {
  id:"frv2_b2g3_l13", title:"Science et recherche", icon:"\u{1F52C}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Science et recherche",
     desc:"Learn vocabulary for discussing scientific research, experiments, and discovery in French.",
     goals:["Learn 17 B2 science and research words","Discuss research methods and findings","Express scientific concepts clearly"]},

    {type:"teach", trg:"décortiquer", src:"to dissect, to analyze in detail", pos:"verb", gender:null,
     note:"Verb. To peel off the shell, or figuratively, to analyze something thoroughly.",
     example:"A: Le chercheur a décortiqué les résultats.\nB: Son analyse est très détaillée.",
     exampleSrc:"A: The researcher dissected the results.\nB: His analysis is very detailed.",
     funFact:"Literally means to remove the 'cortex' (shell/bark). Shrimp are 'decortiquees' when peeled. In analysis, it means stripping something to its core."},

    {type:"teach", trg:"dénoter", src:"to denote, to indicate", pos:"verb", gender:null,
     note:"Verb. To be a sign of something or to indicate a quality.",
     example:"A: Son calme dénote une grande expérience.\nB: Il a vu bien pire dans sa carrière.",
     exampleSrc:"A: His calm denotes great experience.\nB: He has seen far worse in his career.",
     funFact:"In linguistics, 'denotation' is the literal meaning of a word, while 'connotation' is the implied meaning. Both terms are French."},

    {type:"teach", trg:"dérouter", src:"to baffle, to divert", pos:"verb", gender:null,
     note:"Verb. To confuse or perplex. Also: to reroute a plane or ship.",
     example:"A: Sa réponse m'a complètement dérouté.\nB: Moi aussi, je ne m'y attendais pas.",
     exampleSrc:"A: His answer completely baffled me.\nB: Me neither, I wasn't expecting it.",
     funFact:"From 'deroute' (rout/defeat). Being 'deroute' means thrown off your route, like a ship blown off course. The image is of total confusion."},

    {type:"teach", trg:"la détonation", src:"a detonation", pos:"noun", gender:"f",
     note:"Feminine noun. A sudden, violent explosion.",
     example:"A: Une détonation a été entendue à trois kilomètres.\nB: C'était un exercice militaire.",
     exampleSrc:"A: A detonation was heard three kilometers away.\nB: It was a military exercise.",
     funFact:"From Latin 'detonare' meaning to thunder. French distinguishes 'detonation' (sharp explosion) from 'deflagration' (slower combustion)."},

    {type:"mc",
     q:"Quel verbe signifie analyser quelque chose en profondeur, comme retirer la coque ?",
     opts:["décortiquer","dénoter","dérouter","détoner"],
     ans:"décortiquer",
     hint:"This verb literally means to remove the shell or bark. Think of peeling shrimp, then analyzing data the same way."},

    {type:"teach", trg:"un démonter", src:"to dismantle, to take apart", pos:"verb", gender:null,
     note:"Verb. To take something apart piece by piece. Figuratively: to refute an argument.",
     example:"A: Il a démonté l'argument de son adversaire.\nB: Point par point, avec des preuves.",
     exampleSrc:"A: He dismantled his opponent's argument.\nB: Point by point, with evidence.",
     funFact:"'Demonter' an argument is a powerful debate move. French debate culture values systematic dismantling of opposing views."},

    {type:"teach", trg:"exempter", src:"to exempt", pos:"verb", gender:null,
     note:"Verb. To free someone from an obligation or duty.",
     example:"A: Les étudiants boursiers sont exemptés de frais.\nB: C'est une aide précieuse.",
     exampleSrc:"A: Scholarship students are exempt from fees.\nB: It's a precious help.",
     funFact:"From Latin 'eximere' meaning to take out. 'Exempt de TVA' (VAT exempt) is common on French invoices."},

    {type:"teach", trg:"l'eldorado", src:"El Dorado, a paradise", pos:"noun", gender:"m",
     note:"Masculine noun. A place of fabulous wealth or opportunity.",
     example:"A: Internet semblait être l'eldorado des années 2000.\nB: La réalité s'est avérée plus complexe.",
     exampleSrc:"A: The Internet seemed to be the El Dorado of the 2000s.\nB: Reality proved more complex.",
     funFact:"Voltaire featured El Dorado in 'Candide' (1759). The chapter on the golden city is one of the most famous in French literature."},

    {type:"teach", trg:"entrevoir", src:"to catch a glimpse of, to foresee", pos:"verb", gender:null,
     note:"Verb. To see briefly or to begin to foresee. Irregular: like 'voir'.",
     example:"A: On entrevoit enfin une solution au problème.\nB: C'est encourageant après des mois de recherche.",
     exampleSrc:"A: We can finally glimpse a solution to the problem.\nB: It's encouraging after months of research.",
     funFact:"'Entre-' means between. 'Entrevoir' is seeing something partially, between obstacles. Related: 'entrouvrir' (to half-open)."},

    {type:"fb",
     s:"Les boursiers sont {1} du paiement des frais d'inscription.",
     a:["exemptés"],
     opts:["exemptés","démontés","déroutés","décortiqués"],
     hint:"This verb means to free someone from an obligation. Common in administrative and tax contexts.",
     sSrc:"Scholarship holders are {1} from paying registration fees."},

    {type:"teach", trg:"entrouvrir", src:"to half-open", pos:"verb", gender:null,
     note:"Verb. To open something slightly, not all the way. Irregular: like 'ouvrir'.",
     example:"A: Elle a entrouvert la porte pour voir qui sonnait.\nB: C'était le facteur avec un colis.",
     exampleSrc:"A: She half-opened the door to see who was ringing.\nB: It was the postman with a package.",
     funFact:"The prefix 'entre-' adds the meaning 'partially' or 'between'. Compare: entrouvrir (half-open), entrevoir (half-see), entendre (hear, originally 'to understand between')."},

    {type:"teach", trg:"entremêler", src:"to intermingle, to intertwine", pos:"verb", gender:null,
     note:"Verb. To mix or weave together two or more things.",
     example:"A: Les cultures s'entremêlent dans cette ville.\nB: C'est ce qui fait sa richesse.",
     exampleSrc:"A: Cultures intermingle in this city.\nB: That's what makes it rich.",
     funFact:"'Meler' means to mix. 'Entremeler' adds the sense of weaving between. French literature loves describing 'destins entremeles' (intertwined fates)."},

    {type:"teach", trg:"un envers", src:"the reverse side, the flip side", pos:"noun", gender:"m",
     note:"Masculine noun. The back or wrong side. 'A l'envers' means upside down or inside out.",
     example:"A: L'envers du décor est moins glamour.\nB: Oui, on ne voit pas les coulisses.",
     exampleSrc:"A: The flip side of the scene is less glamorous.\nB: Yes, you don't see the backstage.",
     funFact:"'L'envers du decor' (behind the scenes) is a beloved French expression. 'A l'envers' can mean backwards, upside down, or inside out."},

    {type:"mc",
     q:"Quel verbe signifie ouvrir quelque chose légèrement, pas complètement ?",
     opts:["enrayer","entrouvrir","entrevoir","entremêler"],
     ans:"entrouvrir",
     hint:"The prefix 'entre-' means partially. Combined with 'ouvrir' (to open), it means to open just a crack."},

    {type:"teach", trg:"le dénigrement", src:"denigration, disparagement", pos:"noun", gender:"m",
     note:"Masculine noun. The act of unfairly criticizing or belittling someone.",
     example:"A: Le dénigrement systématique de ses collègues est inacceptable.\nB: Il faut que la direction intervienne.",
     exampleSrc:"A: The systematic denigration of his colleagues is unacceptable.\nB: Management must intervene.",
     funFact:"French labor law recognizes 'denigrement' as a form of workplace harassment ('harcelement moral'). It can lead to legal action."},

    {type:"teach", trg:"la désapprobation", src:"disapproval", pos:"noun", gender:"f",
     note:"Feminine noun. The expression of displeasure or moral objection.",
     example:"A: Il a exprimé sa désapprobation d'un simple regard.\nB: Pas besoin de mots, c'était clair.",
     exampleSrc:"A: He expressed his disapproval with just a look.\nB: No need for words, it was clear.",
     funFact:"French culture has an art of expressing disapproval without words. A raised eyebrow, a sigh, or a 'pfff' sound conveys volumes."},

    {type:"teach", trg:"le déshumaniser", src:"to dehumanize", pos:"noun", gender:"m",
     note:"Verb. To deprive someone of human qualities or dignity.",
     example:"A: La guerre déshumanise les soldats et les civils.\nB: C'est une tragédie universelle.",
     exampleSrc:"A: War dehumanizes soldiers and civilians.\nB: It is a universal tragedy.",
     funFact:"Simone Weil and Albert Camus both wrote extensively about dehumanization. The concept is central to French philosophical humanism."},

    {type:"match", pairs:[
      {trg:"décortiquer", src:"to dissect"},
      {trg:"entrevoir", src:"to catch a glimpse"},
      {trg:"entremêler", src:"to intermingle"},
      {trg:"envers", src:"reverse side"},
      {trg:"désapprobation", src:"disapproval"}
    ]},

    {type:"fb",
     s:"On {1} enfin une solution après des mois de recherche.",
     a:["entrevoit"],
     opts:["entrevoit","entrouvre","entremêle","dénigre"],
     hint:"This verb means to begin to see or foresee something, but only partially or briefly.",
     sSrc:"We can finally {1} a solution after months of research."}
  ]
};
export default LESSON_13;
