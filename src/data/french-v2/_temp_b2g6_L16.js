const LESSON_16 = {
  id:"frv2_b2g6_l16", title:"Verbes d'action précis", icon:"\u26A1", xp:15, board:true,
  steps:[
    {type:"intro", title:"Verbes d'action précis",
     desc:"Expand your range of precise action verbs that add vividness and specificity to your French.",
     goals:["Learn 20 precise B2 action verbs","Replace vague verbs with specific ones","Express actions with greater precision"]},

    {type:"teach", trg:"interposer", src:"to interpose, to step in between", pos:"verb", gender:null,
     note:"Verb. To place oneself between opposing parties. Reflexive: s'interposer.",
     example:"A: Il s'est interposé entre les deux hommes.\nB: Sans lui, ça aurait mal tourné.",
     exampleSrc:"A: He stepped in between the two men.\nB: Without him, it would have gone badly.",
     funFact:"From Latin 'interponere'. Used in diplomacy: 's'interposer dans un conflit' means to mediate."},

    {type:"teach", trg:"désaffecter", src:"to decommission, to close down", pos:"verb", gender:null,
     note:"Verb. To remove from active service. Past participle: désaffecté.",
     example:"A: L'usine a été désaffectée en 2010.\nB: Elle est maintenant un espace culturel.",
     exampleSrc:"A: The factory was decommissioned in 2010.\nB: It's now a cultural space.",
     funFact:"'Une église désaffectée' is a deconsecrated church. France transforms many old buildings into cultural venues."},

    {type:"teach", trg:"gargariser", src:"to gargle (also: to gloat)", pos:"verb", gender:null,
     note:"Verb. To gargle with liquid, or reflexively to gloat over something.",
     example:"A: Il se gargarise de son succès.\nB: Un peu de modestie ne ferait pas de mal.",
     exampleSrc:"A: He's gloating over his success.\nB: A little modesty wouldn't hurt.",
     funFact:"'Se gargariser de grands mots' means to use big words self-importantly. A beautifully vivid metaphor."},

    {type:"teach", trg:"coulisser", src:"to slide (in a groove)", pos:"verb", gender:null,
     note:"Verb. To move smoothly along a track or groove.",
     example:"A: La porte coulisse silencieusement.\nB: Le mécanisme est bien huilé.",
     exampleSrc:"A: The door slides silently.\nB: The mechanism is well oiled.",
     funFact:"From 'coulisse' (groove or wing of a theater). 'En coulisses' means backstage or behind the scenes."},

    {type:"mc",
     q:"Que signifie 's'interposer' ?",
     opts:["Se placer entre deux parties en conflit","Se mettre en colère","S'éloigner rapidement","Se déguiser"],
     ans:"Se placer entre deux parties en conflit",
     hint:"From Latin meaning to place between. Think of stepping in to separate fighters or mediate."},

    {type:"teach", trg:"désosser", src:"to bone (remove bones from meat)", pos:"verb", gender:null,
     note:"Verb. To remove bones from meat or fish. Also: to dismantle completely.",
     example:"A: Le boucher a désossé le poulet.\nB: C'est plus facile à cuisiner.",
     exampleSrc:"A: The butcher boned the chicken.\nB: It's easier to cook.",
     funFact:"Figuratively, 'désosser un texte' means to analyze it exhaustively, taking it completely apart."},

    {type:"teach", trg:"extasier", src:"to go into ecstasy, to be thrilled", pos:"verb", gender:null,
     note:"Reflexive verb: s'extasier devant. To be overcome with admiration.",
     example:"A: Elle s'extasie devant chaque tableau.\nB: Elle a un vrai amour de l'art.",
     exampleSrc:"A: She goes into raptures over every painting.\nB: She has a real love of art.",
     funFact:"From 'extase' (ecstasy). More common in literary French. Everyday speech would use 's'émerveiller'."},

    {type:"teach", trg:"léser", src:"to harm, to wrong (someone's rights)", pos:"verb", gender:null,
     note:"Verb. To cause prejudice to someone's rights or interests.",
     example:"A: Cette réforme lèse les petits producteurs.\nB: Ils n'ont pas été consultés.",
     exampleSrc:"A: This reform harms small producers.\nB: They were not consulted.",
     funFact:"Legal French. 'La partie lésée' means the injured party in a lawsuit."},

    {type:"fb",
     s:"L'ancienne gare a été {1} et transformée en musée.",
     a:["désaffectée"],
     opts:["désaffectée","désossée","interposée","coulissée"],
     hint:"Removed from active service or its original purpose. Think of closing down a building.",
     sSrc:"The old train station was {1} and transformed into a museum."},

    {type:"teach", trg:"lettrer", src:"to letter, to inscribe letters on", pos:"verb", gender:null,
     note:"Verb. To write or paint letters on something. 'Lettré' also means learned.",
     example:"A: L'artisan a lettré l'enseigne du magasin.\nB: C'est un travail artisanal magnifique.",
     exampleSrc:"A: The craftsman lettered the shop sign.\nB: It's magnificent artisan work.",
     funFact:"'Un homme lettré' means a learned or well-read person. 'Les belles-lettres' means fine literature."},

    {type:"teach", trg:"bisquer", src:"to be annoyed, to fume", pos:"verb", gender:null,
     note:"Verb. To be irritated or jealous. Informal but expressive.",
     example:"A: Ça le fait bisquer de me voir réussir.\nB: Tant pis pour lui.",
     exampleSrc:"A: It makes him fume to see me succeed.\nB: Too bad for him.",
     funFact:"'Bisque, bisque, rage!' is a children's taunt meaning 'be mad all you want!' Old but still known."},

    {type:"teach", trg:"chômer", src:"to be unemployed, to not work", pos:"verb", gender:null,
     note:"Verb. To be idle or unemployed. 'Jour chômé' = public holiday.",
     example:"A: Lundi prochain est un jour chômé.\nB: Parfait, un long week-end !",
     exampleSrc:"A: Next Monday is a public holiday.\nB: Perfect, a long weekend!",
     funFact:"From Latin 'caumare' (to rest in the heat). 'Le chômage' (unemployment) is France's eternal political issue."},

    {type:"mc",
     q:"Que fait un boucher quand il 'désosse' un poulet ?",
     opts:["Il enlève les os","Il le fait cuire","Il le coupe en tranches","Il le pèse"],
     ans:"Il enlève les os",
     hint:"The prefix 'dé-' means removal, and 'os' means bone. A butcher's specific skill."},

    {type:"teach", trg:"s'insurger", src:"to rebel, to protest strongly", pos:"verb", gender:null,
     note:"Reflexive verb. To revolt or express strong indignation.",
     example:"A: Les citoyens se sont insurgés contre la loi.\nB: Des milliers de personnes ont manifesté.",
     exampleSrc:"A: Citizens rebelled against the law.\nB: Thousands of people demonstrated.",
     funFact:"France has a long tradition of 'insurrection'. The Commune of 1871 is the most famous example."},

    {type:"teach", trg:"incriminer", src:"to incriminate, to blame", pos:"verb", gender:null,
     note:"Verb. To accuse or charge someone with a crime.",
     example:"A: Les preuves l'incriminent directement.\nB: Son ADN a été trouvé sur les lieux.",
     exampleSrc:"A: The evidence directly incriminates him.\nB: His DNA was found at the scene.",
     funFact:"From Latin 'crimen' (accusation). 'Pièce incriminée' means the item under suspicion."},

    {type:"teach", trg:"pressentir", src:"to sense, to have a premonition", pos:"verb", gender:null,
     note:"Verb. To feel something is going to happen before it does.",
     example:"A: Je pressens un problème.\nB: Ton intuition est souvent juste.",
     exampleSrc:"A: I sense a problem coming.\nB: Your intuition is often right.",
     funFact:"'Être pressenti pour un poste' means to be tipped or considered for a position. Dual meaning."},

    {type:"fb",
     s:"Il se {1} de grands mots sans rien dire de concret.",
     a:["gargarise"],
     opts:["gargarise","insurge","extasie","interpose"],
     hint:"Using big words self-importantly, like gargling with them in your mouth.",
     sSrc:"He {1} himself with big words without saying anything concrete."},

    {type:"teach", trg:"récuser", src:"to challenge, to reject (a judge)", pos:"verb", gender:null,
     note:"Verb. To formally reject a judge or witness. Also: to deny responsibility.",
     example:"A: L'avocat a récusé le juge pour partialité.\nB: Un nouveau juge sera nommé.",
     exampleSrc:"A: The lawyer challenged the judge for bias.\nB: A new judge will be appointed.",
     funFact:"A specific legal term. 'Se récuser' means to recuse oneself from a case due to conflict of interest."},

    {type:"match", pairs:[
      {trg:"interposer", src:"to step in between"},
      {trg:"désaffecter", src:"to decommission"},
      {trg:"chômer", src:"to be idle/unemployed"},
      {trg:"incriminer", src:"to incriminate"},
      {trg:"pressentir", src:"to sense, to have a premonition"}
    ]},

    {type:"mc",
     q:"Que fait un avocat quand il 'récuse' un juge ?",
     opts:["Il demande son remplacement pour partialité","Il le félicite","Il accepte sa décision","Il le consulte en privé"],
     ans:"Il demande son remplacement pour partialité",
     hint:"A formal legal action. The prefix 're-' + 'cusare' (to refuse). Challenging impartiality."},

    {type:"fb",
     s:"Les citoyens se sont {1} contre la hausse des impôts.",
     a:["insurgés"],
     opts:["insurgés","gargarisés","extasiés","interposés"],
     hint:"To rebel or protest strongly against something. Think of an uprising or revolt.",
     sSrc:"Citizens {1} against the tax increase."}
  ]
};
export default LESSON_16;
