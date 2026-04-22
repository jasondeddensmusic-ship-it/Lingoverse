const LESSON_8 = {
  id:"frv2_b2g6_l8", title:"Héritage et identité", icon:"\uD83C\uDFDB\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Héritage et identité",
     desc:"Build vocabulary for discussing heritage, genetics, identity, and historical legacy in French.",
     goals:["Learn 20 words about heritage and identity","Discuss cultural identity with nuance","Navigate scientific and cultural registers"]},

    {type:"teach", trg:"l'hérédité", src:"heredity", pos:"noun", gender:"f",
     note:"Feminine noun. The biological transmission of traits from parents to offspring.",
     example:"A: L'hérédité joue un rôle dans cette maladie.\nB: Mais l'environnement aussi.",
     exampleSrc:"A: Heredity plays a role in this disease.\nB: But the environment does too.",
     funFact:"From Latin 'hereditas' meaning inheritance. Darwin's ideas were debated fiercely in French scientific circles."},

    {type:"teach", trg:"l'idéalisation", src:"the idealization", pos:"noun", gender:"f",
     note:"Feminine noun. Portraying something as perfect or better than reality.",
     example:"A: L'idéalisation du passé est trompeuse.\nB: Chaque époque avait ses problèmes.",
     exampleSrc:"A: The idealization of the past is misleading.\nB: Every era had its problems.",
     funFact:"Freud's concept of idealization was widely adopted in French psychoanalysis, which remains very influential."},

    {type:"teach", trg:"l'héritage", src:"the heritage, the inheritance", pos:"noun", gender:"m",
     note:"Masculine noun. Property or traditions passed down through generations.",
     example:"A: L'héritage culturel de la France est immense.\nB: De l'art gothique au cinéma.",
     exampleSrc:"A: France's cultural heritage is immense.\nB: From Gothic art to cinema.",
     funFact:"French distinguishes 'héritage' (what you receive) from 'patrimoine' (what you preserve for the nation)."},

    {type:"teach", trg:"l'inflexion", src:"the inflection, the shift", pos:"noun", gender:"f",
     note:"Feminine noun. A change in direction, tone, or policy.",
     example:"A: On note une inflexion dans sa politique.\nB: Il est devenu plus modéré.",
     exampleSrc:"A: We notice a shift in his policy.\nB: He has become more moderate.",
     funFact:"In linguistics, inflexion refers to word endings that show grammar function. Figuratively, any subtle shift."},

    {type:"mc",
     q:"Que désigne 'l'hérédité' ?",
     opts:["La transmission biologique des traits","L'héritage financier","Le patrimoine culturel","La tradition familiale"],
     ans:"La transmission biologique des traits",
     hint:"A scientific term about genes passing from parents to children. Think biology, not money."},

    {type:"teach", trg:"l'indigène", src:"the indigenous person", pos:"noun", gender:"m",
     note:"Masculine/feminine noun. A native inhabitant. Can be sensitive in colonial contexts.",
     example:"A: Les peuples indigènes protègent la forêt.\nB: Leur savoir ancestral est précieux.",
     exampleSrc:"A: Indigenous peoples protect the forest.\nB: Their ancestral knowledge is precious.",
     funFact:"In France, 'indigène' has colonial connotations. The 2006 film 'Indigènes' told North African soldiers' stories."},

    {type:"teach", trg:"l'infidélité", src:"infidelity, unfaithfulness", pos:"noun", gender:"f",
     note:"Feminine noun. Disloyalty, especially in romantic relationships.",
     example:"A: L'infidélité a détruit leur mariage.\nB: La confiance est difficile à reconstruire.",
     exampleSrc:"A: Infidelity destroyed their marriage.\nB: Trust is hard to rebuild.",
     funFact:"French literature from Flaubert to modern novels obsesses over infidelity as a theme."},

    {type:"teach", trg:"l'incognito", src:"incognito", pos:"noun", gender:"m",
     note:"Masculine noun or adverb. Traveling or acting under a disguised identity.",
     example:"A: La star voyageait incognito.\nB: Personne ne l'a reconnue.",
     exampleSrc:"A: The star was traveling incognito.\nB: Nobody recognized her.",
     funFact:"Italian borrowing meaning 'unknown'. French kings historically traveled 'incognito' to observe their realm."},

    {type:"fb",
     s:"L'{1} du passé colonial empêche de voir les erreurs.",
     a:["idéalisation"],
     opts:["idéalisation","hérédité","inflexion","incognito"],
     hint:"Portraying something as better or more perfect than it actually was.",
     sSrc:"The {1} of the colonial past prevents seeing the mistakes."},

    {type:"teach", trg:"l'intégrisme", src:"fundamentalism", pos:"noun", gender:"m",
     note:"Masculine noun. Strict adherence to a doctrine, especially religious.",
     example:"A: L'intégrisme menace le vivre-ensemble.\nB: Le dialogue est indispensable.",
     exampleSrc:"A: Fundamentalism threatens social cohesion.\nB: Dialogue is essential.",
     funFact:"Originally described Catholic traditionalists opposing Vatican II. Now used for any rigid doctrine."},

    {type:"teach", trg:"la globalité", src:"the entirety, the whole picture", pos:"noun", gender:"f",
     note:"Feminine noun. The complete whole, taken as a single entity.",
     example:"A: Il faut considérer le problème dans sa globalité.\nB: Pas seulement les détails.",
     exampleSrc:"A: We must consider the problem in its entirety.\nB: Not just the details.",
     funFact:"'Dans sa globalité' is the standard French phrase for taking a holistic view of something."},

    {type:"teach", trg:"la galère", src:"the ordeal, the struggle", pos:"noun", gender:"f",
     note:"Feminine noun. A difficult or unpleasant situation. Colloquial but very common.",
     example:"A: Trouver un appartement, c'est la galère.\nB: Les prix sont devenus fous.",
     exampleSrc:"A: Finding an apartment is a real struggle.\nB: Prices have gone crazy.",
     funFact:"Originally a slave-rowed ship. Galley slaves endured the worst fate, hence 'la galère' for any ordeal."},

    {type:"mc",
     q:"Que signifie 'la galère' dans le langage courant ?",
     opts:["Un repas copieux","Une situation très difficile","Un bateau ancien","Une fête réussie"],
     ans:"Une situation très difficile",
     hint:"Originally a slave ship. Now colloquially used for any painful, frustrating s...."},

    {type:"teach", trg:"le fédéralisme", src:"federalism", pos:"noun", gender:"m",
     note:"Masculine noun. A political system with power shared between central and regional governments.",
     example:"A: Le fédéralisme suisse est un modèle.\nB: Chaque canton a beaucoup d'autonomie.",
     exampleSrc:"A: Swiss federalism is a model.\nB: Each canton has a lot of autonomy.",
     funFact:"France is historically centralized, making federalism a hot debate topic in European politics."},

    {type:"teach", trg:"le forçat", src:"the convict, the forced laborer", pos:"noun", gender:"m",
     note:"Masculine noun. A prisoner condemned to hard labor. Literary register.",
     example:"A: Les forçats construisaient les routes.\nB: Dans des conditions inhumaines.",
     exampleSrc:"A: The convicts built the roads.\nB: In inhumane conditions.",
     funFact:"Victor Hugo's Jean Valjean was a forçat. The word evokes the brutal penal colonies of French Guiana."},

    {type:"teach", trg:"le footballeur", src:"the football player", pos:"noun", gender:"m",
     note:"Masculine noun. A soccer player. Feminine: une footballeuse.",
     example:"A: Ce footballeur gagne des millions.\nB: Le sport est devenu un business.",
     exampleSrc:"A: This football player earns millions.\nB: Sport has become a business.",
     funFact:"France won the World Cup in 1998 and 2018. 'Les Bleus' united the nation across ethnic lines."},

    {type:"fb",
     s:"Il faut analyser ce dossier dans sa {1}.",
     a:["globalité"],
     opts:["globalité","galère","hérédité","inflexion"],
     hint:"Considering the complete picture, the whole thing taken as one entity.",
     sSrc:"We must analyze this file in its {1}."},

    {type:"teach", trg:"les fêtes", src:"the holidays, the celebrations", pos:"noun", gender:"f",
     note:"Feminine plural noun. Holidays, festivities, or celebration periods.",
     example:"A: Qu'est-ce que tu fais pendant les fêtes ?\nB: On va chez ma grand-mère en Provence.",
     exampleSrc:"A: What are you doing during the holidays?\nB: We're going to my grandmother's in Provence.",
     funFact:"'Les fêtes' without specification means Christmas and New Year in France. 'Bonnes fêtes!' is the standard greeting."},

    {type:"teach", trg:"l'iode", src:"iodine", pos:"noun", gender:"m",
     note:"Masculine noun. A chemical element found in seawater and thyroid function.",
     example:"A: L'air marin est riche en iode.\nB: C'est bon pour la santé.",
     exampleSrc:"A: Sea air is rich in iodine.\nB: It's good for your health.",
     funFact:"Discovered by a French chemist, Bernard Courtois, in 1811 while making saltpeter for Napoleon's armies."},

    {type:"match", pairs:[
      {trg:"galère", src:"ordeal, struggle"},
      {trg:"incognito", src:"incognito"},
      {trg:"forçat", src:"convict"},
      {trg:"fédéralisme", src:"federalism"},
      {trg:"iode", src:"iodine"}
    ]},

    {type:"mc",
     q:"Quel mot désigne le strict respect d'une doctrine religieuse ?",
     opts:["l'idéalisation","la globalité","l'intégrisme","le fédéralisme"],
     ans:"l'intégrisme",
     hint:"Originally about Catholic traditionalists, now used for any rigid religious or ideological doctrine."},

    {type:"fb",
     s:"On note une {1} dans la politique du gouvernement.",
     a:["inflexion"],
     opts:["inflexion","infidélité","hérédité","idéalisation"],
     hint:"A subtle change in direction or approach, especially in policy or tone.",
     sSrc:"We notice a {1} in the government's policy."}
  ]
};
export default LESSON_8;
