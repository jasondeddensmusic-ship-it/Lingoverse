const LESSON_14 = {
  id:"frv2_b2g8_l14", title:"Le monde du travail", icon:"\u{1F4BC}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Le monde du travail",
     desc:"Vocabulary for discussing careers, workplace dynamics, and professional life at B2 level.",
     goals:["Learn 15 workplace and career words","Discuss professional situations fluently","Understand employment terminology"]},

    {type:"teach", trg:"un administrateur", src:"an administrator", pos:"noun", gender:"m",
     note:"Masculine noun. A person who manages an organization.\nFeminine: une administratrice.",
     example:"A: L'administrateur a validé le budget.\nB: Le projet peut enfin démarrer.",
     exampleSrc:"A: The administrator approved the budget.\nB: The project can finally start.",
     funFact:"In French companies, 'administrateur' often means board member, not office manager."},

    {type:"teach", trg:"le mécréant", src:"the unbeliever, the miscreant", pos:"noun", gender:"m",
     note:"Masculine noun. Someone who does not believe, or a scoundrel.\nFeminine: une mécréante.",
     example:"A: Au Moyen Âge, les mécréants étaient persécutés.\nB: La tolérance n'existait pas.",
     exampleSrc:"A: In the Middle Ages, unbelievers were persecuted.\nB: Tolerance didn't exist.",
     funFact:"From 'mes' (mis-) + 'créant' (believing). Originally meant a non-Christian during the Crusades."},

    {type:"teach", trg:"ménager", src:"to handle carefully, to spare", pos:"verb", gender:null,
     note:"Verb, first group (-er). To be careful with, to conserve.\nDo not confuse with 'le ménage'.",
     example:"A: Il faut ménager ses forces.\nB: Le marathon est dans deux jours.",
     exampleSrc:"A: You need to conserve your energy.\nB: The marathon is in two days.",
     funFact:"'Ménager la chèvre et le chou' means to try to please everyone, literally 'spare the goat and the cabbage'."},

    {type:"teach", trg:"le décorateur", src:"the decorator, the designer", pos:"noun", gender:"m",
     note:"Masculine noun. An interior decorator or stage designer.\nFeminine: une décoratrice.",
     example:"A: Le décorateur a choisi des couleurs chaudes.\nB: L'ambiance est tout de suite plus accueillante.",
     exampleSrc:"A: The decorator chose warm colors.\nB: The atmosphere is immediately more welcoming.",
     funFact:"In French film credits, 'décorateur' or 'chef décorateur' is the production designer."},

    {type:"mc",
     q:"Que signifie 'ménager ses forces' ?",
     opts:["Économiser son énergie","Faire le ménage","Organiser sa maison","Préparer un repas"],
     ans:"Économiser son énergie",
     hint:"To be careful with your resources. Not about cleaning house, despite the similar spelling."},

    {type:"teach", trg:"la micro-entreprise", src:"the micro-enterprise", pos:"noun", gender:"f",
     note:"Feminine compound noun. A very small business, often one person.\nA French legal status.",
     example:"A: Ma micro-entreprise marche bien.\nB: Tu arrives à en vivre ?",
     exampleSrc:"A: My micro-enterprise is going well.\nB: Can you make a living from it?",
     funFact:"Over 2 million French people have micro-enterprise status. It simplified freelancing enormously."},

    {type:"teach", trg:"un confrère", src:"a colleague (same profession)", pos:"noun", gender:"m",
     note:"Masculine noun. A fellow member of the same profession.\nFeminine: une consoeur.",
     example:"A: Mes confrères et moi organisons un colloque.\nB: Sur quel sujet ?",
     exampleSrc:"A: My colleagues and I are organizing a conference.\nB: On what topic?",
     funFact:"Doctors, lawyers, and journalists use 'confrère' among themselves. It implies shared expertise."},

    {type:"teach", trg:"absenter", src:"to absent oneself, to leave", pos:"verb", gender:null,
     note:"Reflexive verb: s'absenter. To leave temporarily.\nAlways used with 'se'.",
     example:"A: Je dois m'absenter une heure.\nB: Pas de problème, je gère.",
     exampleSrc:"A: I need to step out for an hour.\nB: No problem, I'll manage.",
     funFact:"Always reflexive in French. You cannot 'absenter quelqu'un'. Only 's'absenter'."},

    {type:"fb",
     s:"Je dois {1} une heure, peux-tu prendre la relève ?",
     a:["m'absenter"],
     opts:["m'absenter","ménager","administrer","décorer"],
     hint:"A reflexive verb meaning to leave temporarily. You step out for a while.",
     sSrc:"I need to {1} for an hour, can you take over?"},

    {type:"teach", trg:"la main-d'oeuvre", src:"the workforce, the labor", pos:"noun", gender:"f",
     note:"Feminine compound noun. Workers as a collective.\nAlso the cost of labor.",
     example:"A: La main-d'oeuvre est rare dans ce secteur.\nB: Les salaires augmentent.",
     exampleSrc:"A: Labor is scarce in this sector.\nB: Wages are going up.",
     funFact:"Literally 'hand of work'. When French news discusses jobs, this word appears constantly."},

    {type:"teach", trg:"l'arrière-grand-parent", src:"the great-grandparent", pos:"noun", gender:"m",
     note:"Masculine noun. A grandparent's parent.\nPlural: arrière-grands-parents.",
     example:"A: Mes arrière-grands-parents étaient agriculteurs.\nB: C'était une vie dure mais noble.",
     exampleSrc:"A: My great-grandparents were farmers.\nB: It was a hard but noble life.",
     funFact:"French adds 'arrière-' for each generation back. 'Arrière-arrière-grand-parent' is great-great."},

    {type:"teach", trg:"un indicateur", src:"an indicator, a gauge", pos:"noun", gender:"m",
     note:"Masculine noun. A metric or sign that shows a trend.\nEconomic and scientific use.",
     example:"A: Les indicateurs de performance sont au vert.\nB: L'entreprise se porte bien.",
     exampleSrc:"A: Performance indicators are in the green.\nB: The company is doing well.",
     funFact:"'Indicateur de vitesse' is a speedometer. 'Au vert' means positive, like a traffic light."},

    {type:"mc",
     q:"Quel mot désigne les travailleurs d'un secteur de manière collective ?",
     opts:["la main-d'oeuvre","l'indicateur","le confrère","l'administrateur"],
     ans:"la main-d'oeuvre",
     hint:"Literally 'hand of work'. The collective labor force or the cost of hiring workers."},

    {type:"teach", trg:"le bonus", src:"the bonus", pos:"noun", gender:"m",
     note:"Masculine noun. An extra financial reward.\nFrom Latin 'bonus' (good).",
     example:"A: Le bonus annuel a été doublé.\nB: L'équipe a vraiment bien travaillé.",
     exampleSrc:"A: The annual bonus was doubled.\nB: The team really worked well.",
     funFact:"In French insurance, 'bonus-malus' adjusts your premium based on your driving record."},

    {type:"teach", trg:"le curieux", src:"the curious person, the onlooker", pos:"noun", gender:"m",
     note:"Masculine noun. A person driven by curiosity.\nFeminine: une curieuse.",
     example:"A: Les curieux se pressent devant le chantier.\nB: Ils veulent voir les travaux.",
     exampleSrc:"A: Onlookers crowd in front of the construction site.\nB: They want to see the work.",
     funFact:"In 18th century France, 'cabinet de curieux' was a collection of wonders, the ancestor of museums."},

    {type:"teach", trg:"le non-sens", src:"the nonsense", pos:"noun", gender:"m",
     note:"Masculine noun. Something absurd or meaningless.\nBorrowed from English.",
     example:"A: Cette réorganisation est un non-sens.\nB: On perd du temps et de l'argent.",
     exampleSrc:"A: This reorganization is nonsense.\nB: We're wasting time and money.",
     funFact:"French uses 'non-sens' for serious absurdity, not humor. For silly nonsense, they say 'bêtises'."},

    {type:"fb",
     s:"Les {1} de performance sont au vert, l'entreprise va bien.",
     a:["indicateurs"],
     opts:["indicateurs","administrateurs","décorateurs","confrères"],
     hint:"Metrics or gauges that show how something is performing. Think of dashboard signals.",
     sSrc:"Performance {1} are in the green, the company is doing well."},

    {type:"match", pairs:[
      {trg:"s'absenter", src:"to step out"},
      {trg:"ménager", src:"to handle carefully"},
      {trg:"arrière-grand-parent", src:"great-grandparent"},
      {trg:"bonus", src:"bonus"},
      {trg:"non-sens", src:"nonsense"}
    ]},

    {type:"mc",
     q:"Comment dit-on 'quitter temporairement un lieu' avec un verbe réfléchi ?",
     opts:["s'absenter","s'obstiner","se ménager","se décorer"],
     ans:"s'absenter",
     hint:"Always used with 'se'. To leave for a short period and come back."},

    {type:"fb",
     s:"Il faut {1} ses forces avant la compétition.",
     a:["ménager"],
     opts:["ménager","absenter","administrer","neutraliser"],
     hint:"To conserve, to be careful with your resources. Not about cleaning.",
     sSrc:"You need to {1} your energy before the competition."}
  ]
};
export default LESSON_14;
