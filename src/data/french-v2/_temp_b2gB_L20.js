const LESSON_20 = {
  id:"frv2_b2gB_l20", title:"Synthese et revision", icon:"\u{1F3AF}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Synthese et revision",
     desc:"Review and consolidate vocabulary from across all themes in this batch. Test your mastery of advanced French.",
     goals:["Review key words from all 19 lessons","Test cross-theme vocabulary recall","Demonstrate B2-level range"]},

    {type:"teach", trg:"un bilan", src:"a review, an assessment", pos:"noun", gender:"m",
     note:"Masculine noun. A summary of results or an overall assessment.\nFaire le bilan = to take stock. Bilan de sante = health check-up.",
     example:"A: Il est temps de faire le bilan de cette annee.\nB: Dans l'ensemble, les resultats sont positifs.",
     exampleSrc:"A: It's time to take stock of this year.\nB: Overall, the results are positive.",
     funFact:"The French love bilans. Every news channel does a bilan at year-end. Companies do bilans comptables (balance sheets) quarterly."},

    {type:"teach", trg:"approfondir", src:"to deepen, to explore further", pos:"verb", gender:null,
     note:"Regular -ir verb (2nd group). To study something more deeply.\nApprofondissement = deepening. Approfondi = thorough.",
     example:"A: Il faut approfondir cette question.\nB: Une analyse superficielle ne suffit pas.",
     exampleSrc:"A: We need to explore this question further.\nB: A superficial analysis is not enough.",
     funFact:"'Approfondissez!' is a common annotation on French essays. Teachers want depth, not breadth. Quality over quantity."},

    {type:"teach", trg:"la synthese", src:"the synthesis, the summary", pos:"noun", gender:"f",
     note:"Feminine noun. Combining elements into a coherent whole, or a summary.\nEsprit de synthese = ability to summarize. Note de synthese = briefing paper.",
     example:"A: Sa synthese du debat etait remarquable.\nB: Elle a resume trois heures en cinq minutes.",
     exampleSrc:"A: Her synthesis of the debate was remarkable.\nB: She summarized three hours in five minutes.",
     funFact:"'L'esprit de synthese' is one of the most valued skills in French education and business. It means getting to the essence quickly."},

    {type:"teach", trg:"la maitrise", src:"mastery, command", pos:"noun", gender:"f",
     note:"Feminine noun. Expert skill or control over something.\nMaitrise de soi = self-control. Also a former university degree level.",
     example:"A: Sa maitrise du francais est impressionnante.\nB: On dirait un locuteur natif.",
     exampleSrc:"A: His command of French is impressive.\nB: He sounds like a native speaker.",
     funFact:"Maitrise was a French university degree between licence and doctorat until 2004. Now it is Master 1 under the European system."},

    {type:"teach", trg:"l'aboutissement", src:"the culmination, the outcome", pos:"noun", gender:"m",
     note:"Masculine noun. The successful conclusion of a long process.\nAboutir = to lead to, to result in.",
     example:"A: Ce prix est l'aboutissement de dix ans de recherche.\nB: Tout son travail acharne a ete recompense.",
     exampleSrc:"A: This prize is the culmination of ten years of research.\nB: All his hard work has been rewarded.",
     funFact:"Aboutir comes from 'bout' (end). The about-issement is reaching the end successfully. French distinguishes this from mere conclusion."},

    {type:"mc", q:"Que signifie 'esprit de synthese'?",
     opts:["Capacite a resumer l'essentiel","Esprit critique","Esprit de competition","Capacite a memoriser"],
     ans:"Capacite a resumer l'essentiel",
     hint:"This prized French skill involves extracting the core message from complex information"},

    {type:"fb", s:"Il faut {1} cette analyse avant de conclure.",
     a:["approfondir"], opts:["approfondir","recapituler","conceder","refuter"],
     hint:"The verb means to go deeper into a subject, exploring it more thoroughly",
     sSrc:"We need to {1} this analysis before concluding."},

    {type:"mc", q:"Un 'prevenu' est:",
     opts:["Un avocat","Une personne accusee avant le proces","Un temoin","Un juge"],
     ans:"Une personne accusee avant le proces",
     hint:"This legal term from Lesson 1 describes someone charged but not yet tried"},

    {type:"match", pairs:[
      {trg:"un bilan", src:"an assessment"},
      {trg:"la synthese", src:"synthesis"},
      {trg:"la maitrise", src:"mastery"},
      {trg:"l'aboutissement", src:"culmination"}
    ]},

    {type:"fb", s:"Sa {1} de soi est admirable dans les situations de stress.",
     a:["maitrise"], opts:["maitrise","synthese","bilan","aboutissement"],
     hint:"The feminine noun for self-control and expert command over emotions",
     sSrc:"His self-{1} is admirable in stressful situations."},

    {type:"mc", q:"'La democratisation de l'enseignement' signifie:",
     opts:["Elire les directeurs","Supprimer les examens","Rendre l'education accessible a tous","Voter pour les professeurs"],
     ans:"Rendre l'education accessible a tous",
     hint:"From Lesson 3, this process makes something available to the whole population"},

    {type:"fb", s:"Ce succes est l'{1} de plusieurs annees d'effort.",
     a:["aboutissement"], opts:["aboutissement","bilan","synthese","maitrise"],
     hint:"The masculine noun for the successful conclusion of a long, difficult process",
     sSrc:"This success is the {1} of several years of effort."},

    {type:"mc", q:"Que signifie 'en marge de' une conference?",
     opts:["Pendant l'evenement","Au centre de l'attention","Contre la conference","En dehors du programme officiel"],
     ans:"En dehors du programme officiel",
     hint:"From Lesson 9, this prepositional phrase means on the sidelines of"},

    {type:"match", pairs:[
      {trg:"la perspicacite", src:"perspicacity"},
      {trg:"la grossierete", src:"rudeness"},
      {trg:"l'agressivite", src:"aggressiveness"},
      {trg:"la perseverance", src:"perseverance"}
    ]},

    {type:"fb", s:"Faisons le {1} de nos progres ce semestre.",
     a:["bilan"], opts:["bilan","aboutissement","synthese","maitrise"],
     hint:"The masculine noun for taking stock and reviewing overall results",
     sSrc:"Let's do a {1} of our progress this semester."},

    {type:"mc", q:"'Au compte-gouttes' signifie:",
     opts:["En tres petites quantites","Rapidement","Par telephone","En comptant"],
     ans:"En tres petites quantites",
     hint:"From Lesson 15, this expression uses the image of a dropper dispensing liquid"},

    {type:"fb", s:"Cette {1} resume parfaitement les enjeux du debat.",
     a:["synthese"], opts:["synthese","maitrise","bilan","aboutissement"],
     hint:"The feminine noun for a coherent summary that brings all elements together",
     sSrc:"This {1} perfectly summarizes the stakes of the debate."},

    {type:"mc", q:"La 'probite' est:",
     opts:["Un devoir civique","Une honnetete absolue et integre","Un type de courage","Une forme de prudence"],
     ans:"Une honnetete absolue et integre",
     hint:"From Lesson 19, this formal word describes complete moral integrity"},

    {type:"match", pairs:[
      {trg:"approfondir", src:"to deepen"},
      {trg:"etayer", src:"to support (argument)"},
      {trg:"profaner", src:"to desecrate"},
      {trg:"s'obstiner", src:"to persist stubbornly"}
    ]},

    {type:"mc", q:"Combien de stations de metro compte Paris?",
     opts:["450","200","308","150"],
     ans:"308",
     hint:"From Lesson 18, the Paris Metro is one of the densest networks in the world"},

    {type:"fb", s:"{1} les points essentiels de notre discussion.",
     a:["Recapitulons"], opts:["Recapitulons","Approfondissons","Refutons","Concedons"],
     hint:"The imperative from Lesson 17 meaning let us summarize the main points",
     sSrc:"Let's {1} the essential points of our discussion."}
  ]
};
export default LESSON_20;
