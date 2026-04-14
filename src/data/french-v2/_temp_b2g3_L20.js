const LESSON_20 = {
  id:"frv2_b2g3_l20", title:"Le mot juste", icon:"\u{1F4AC}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Le mot juste",
     desc:"Master advanced vocabulary for precision in French expression, from formal verbs to specialist terms and cultural references.",
     goals:["Learn 17 final B2 gap words","Use precise vocabulary in context","Consolidate formal and informal registers"]},

    {type:"teach", trg:"déambuler", src:"to stroll, to wander", pos:"verb", gender:null,
     note:"Verb. To walk slowly without a specific destination.",
     example:"A: On a déambulé dans les rues du Marais.\nB: C'est le meilleur quartier pour flâner.",
     exampleSrc:"A: We strolled through the streets of the Marais.\nB: It's the best neighborhood for wandering.",
     funFact:"'Deambuler' is more literary than 'se promener'. A 'deambulatoire' is the walking aisle behind a cathedral altar, where monks pace."},

    {type:"teach", trg:"la dépêche", src:"a dispatch", pos:"noun", gender:"f",
     note:"Feminine noun. Already introduced in lesson 5. An urgent news wire or message.",
     example:"A: La dépêche de l'AFP confirme la nouvelle.\nB: Tous les médias vont la reprendre.",
     exampleSrc:"A: The AFP dispatch confirms the news.\nB: All media outlets will pick it up.",
     funFact:"AFP (Agence France-Presse) is one of the three oldest news agencies in the world. Its 'depeches' reach every major newsroom globally."},

    {type:"teach", trg:"l'altération", src:"alteration, degradation", pos:"noun", gender:"f",
     note:"Feminine noun. Already introduced in lesson 8. A damaging change.",
     example:"A: L'altération du patrimoine bâti est préoccupante.\nB: Il faut investir dans la restauration.",
     exampleSrc:"A: The degradation of built heritage is concerning.\nB: We must invest in restoration.",
     funFact:"'Alterer' means to degrade (negative), while 'modifier' is neutral. Choosing the right word signals whether the change is good or bad."},

    {type:"teach", trg:"un dérivé", src:"a derivative", pos:"noun", gender:"m",
     note:"Masculine noun. Already introduced in lesson 8. Something derived from another.",
     example:"A: Le plastique est un dérivé du pétrole.\nB: C'est pourquoi il pollue tant.",
     exampleSrc:"A: Plastic is a petroleum derivative.\nB: That's why it pollutes so much.",
     funFact:"In finance, 'produits derives' are financial derivatives (options, futures). The 2008 crisis was blamed partly on unregulated 'derives'."},

    {type:"mc",
     q:"Quel verbe signifie marcher lentement, sans but précis, de manière littéraire ?",
     opts:["déambuler","défoncer","dénaturer","démonter"],
     ans:"déambuler",
     hint:"This literary verb describes slow, aimless walking. Think of monks pacing in a cathedral corridor."},

    {type:"teach", trg:"un déclamatoire", src:"declamatory", pos:"adj", gender:null,
     note:"Adjective. Speaking in an overly dramatic or pompous manner.",
     example:"A: Son ton déclamatoire agace ses collègues.\nB: Il devrait parler plus simplement.",
     exampleSrc:"A: His declamatory tone annoys his colleagues.\nB: He should speak more simply.",
     funFact:"French theater tradition values 'declamation' as a skill. At the Comedie-Francaise, actors train in classical declamation for Racine and Corneille."},

    {type:"teach", trg:"ensanglanter", src:"to bloody", pos:"verb", gender:null,
     note:"Verb. Already introduced in lesson 16. To stain or mark with blood.",
     example:"A: L'histoire de ce pays est ensanglantée.\nB: Les conflits ont laissé des traces profondes.",
     exampleSrc:"A: This country's history is blood-stained.\nB: The conflicts left deep marks.",
     funFact:"Literary French uses 'ensanglante' for dramatic effect. Newspapers reserve it for the most serious acts of violence."},

    {type:"teach", trg:"la coexistence", src:"coexistence", pos:"noun", gender:"f",
     note:"Feminine noun. Already introduced in lesson 10. Living together despite differences.",
     example:"A: La coexistence pacifique est un idéal à poursuivre.\nB: Cela demande du respect mutuel.",
     exampleSrc:"A: Peaceful coexistence is an ideal to pursue.\nB: It requires mutual respect.",
     funFact:"The concept of 'laicite' (secularism) in France is fundamentally about coexistence: all religions coexist in a neutral public space."},

    {type:"teach", trg:"la dépossession", src:"dispossession", pos:"noun", gender:"f",
     note:"Feminine noun. The act of being stripped of possessions or rights.",
     example:"A: La dépossession des terres indigènes est un sujet brûlant.\nB: C'est une question de justice historique.",
     exampleSrc:"A: The dispossession of indigenous lands is a burning issue.\nB: It's a matter of historical justice.",
     funFact:"The noun form of 'deposseder' (lesson 12). In French sociology, 'depossession symbolique' describes losing cultural identity, not just property."},

    {type:"fb",
     s:"La {1} pacifique entre les communautés est l'objectif de cette politique.",
     a:["coexistence"],
     opts:["coexistence","dépossession","désillusion","déclaration"],
     hint:"This noun means living together peacefully despite differences. A key concept in French secularism.",
     sSrc:"Peaceful {1} between communities is the goal of this policy."},

    {type:"teach", trg:"dénigrer", src:"to denigrate, to disparage", pos:"verb", gender:null,
     note:"Verb. To unfairly criticize in order to damage reputation.",
     example:"A: Il ne faut pas dénigrer le travail des autres.\nB: La critique constructive est plus utile.",
     exampleSrc:"A: You should not denigrate the work of others.\nB: Constructive criticism is more useful.",
     funFact:"From Latin 'denigrare' meaning to blacken. French law treats 'denigrement commercial' (unfairly disparaging a competitor) as a legal offense."},

    {type:"teach", trg:"le déplacé", src:"inappropriate", pos:"adj", gender:null,
     note:"Adjective. Already introduced in lesson 14. Socially inappropriate behavior.",
     example:"A: Ses blagues sont souvent déplacées.\nB: Il manque de tact.",
     exampleSrc:"A: His jokes are often inappropriate.\nB: He lacks tact.",
     funFact:"In French social etiquette, being 'deplace' is one of the worst social sins. The French value 'savoir-vivre' (knowing how to behave)."},

    {type:"teach", trg:"un exutoire", src:"an outlet", pos:"noun", gender:"m",
     note:"Masculine noun. Already introduced in lesson 10. A way to release pressure.",
     example:"A: L'écriture est un exutoire pour ses émotions.\nB: Elle écrit chaque soir dans son journal.",
     exampleSrc:"A: Writing is an outlet for her emotions.\nB: She writes every evening in her journal.",
     funFact:"French psychologists recommend finding an 'exutoire' for stress. Art therapy, sports, and journaling are the most commonly prescribed."},

    {type:"mc",
     q:"Quel verbe signifie critiquer injustement pour nuire à la réputation de quelqu'un ?",
     opts:["dénigrer","déambuler","décortiquer","déconnecter"],
     ans:"dénigrer",
     hint:"From Latin 'to blacken'. This verb describes unfair criticism aimed at damaging someone's standing."},

    {type:"teach", trg:"l'appréciable", src:"significant, appreciable", pos:"adj", gender:null,
     note:"Adjective. Already introduced in lesson 17. Large enough to be noticed.",
     example:"A: Les progrès sont appréciables.\nB: On avance dans la bonne direction.",
     exampleSrc:"A: The progress is appreciable.\nB: We're moving in the right direction.",
     funFact:"In formal French, 'appreciable' is more precise than 'important'. It signals something measurable and noticeable, not just 'big'."},

    {type:"teach", trg:"la clarté", src:"clarity", pos:"noun", gender:"f",
     note:"Feminine noun. Already introduced in lesson 4. The quality of being clear.",
     example:"A: La clarté du discours est remarquable.\nB: Chaque point est parfaitement expliqué.",
     exampleSrc:"A: The clarity of the speech is remarkable.\nB: Each point is perfectly explained.",
     funFact:"French intellectual tradition prizes 'clarte' above all. A well-known quote: 'Ce qui se concoit bien s'enonce clairement' (what is well conceived is clearly expressed)."},

    {type:"teach", trg:"l'exactitude", src:"precision, exactness", pos:"noun", gender:"f",
     note:"Feminine noun. Already introduced in lesson 1. Accuracy and precision.",
     example:"A: L'exactitude des données est vérifiée.\nB: On peut s'y fier en toute confiance.",
     exampleSrc:"A: The accuracy of the data is verified.\nB: We can rely on it with full confidence.",
     funFact:"French science and philosophy value 'exactitude' as a cardinal virtue. Pascal, Descartes, and Lavoisier all championed precise thinking."},

    {type:"match", pairs:[
      {trg:"déambuler", src:"to stroll"},
      {trg:"dénigrer", src:"to disparage"},
      {trg:"dépossession", src:"dispossession"},
      {trg:"clarté", src:"clarity"},
      {trg:"exactitude", src:"precision"}
    ]},

    {type:"fb",
     s:"Il ne faut jamais {1} le travail de ses collègues, même si on n'est pas d'accord.",
     a:["dénigrer"],
     opts:["dénigrer","déambuler","décomposer","démotiver"],
     hint:"This verb means to unfairly criticize or disparage someone. It comes from the Latin word for 'to blacken'.",
     sSrc:"You must never {1} the work of your colleagues, even if you disagree."}
  ]
};
export default LESSON_20;
