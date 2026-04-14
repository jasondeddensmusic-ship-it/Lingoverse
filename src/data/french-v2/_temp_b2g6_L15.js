const LESSON_15 = {
  id:"frv2_b2g6_l15", title:"Nuances et précisions", icon:"\uD83C\uDFAF", xp:15, board:true,
  steps:[
    {type:"intro", title:"Nuances et précisions",
     desc:"Refine your vocabulary with precise words for subtle distinctions and specific measurements.",
     goals:["Learn 20 words for precise expression","Distinguish between similar concepts","Use technical vocabulary with confidence"]},

    {type:"teach", trg:"différencié", src:"differentiated, distinct", pos:"adj", gender:null,
     note:"Past participle used as adjective. Feminine: différenciée.",
     example:"A: L'enseignement différencié s'adapte à chaque élève.\nB: C'est plus efficace pour apprendre.",
     exampleSrc:"A: Differentiated teaching adapts to each student.\nB: It's more effective for learning.",
     funFact:"A key term in French education policy. 'Pédagogie différenciée' respects different learning speeds."},

    {type:"teach", trg:"ajoutée", src:"added (in 'valeur ajoutée')", pos:"adj", gender:null,
     note:"Past participle used as adjective. Always feminine in 'la valeur ajoutée'.",
     example:"A: La valeur ajoutée de ce service est évidente.\nB: Les clients sont très satisfaits.",
     exampleSrc:"A: The added value of this service is obvious.\nB: Customers are very satisfied.",
     funFact:"'TVA' (taxe sur la valeur ajoutée) is the French VAT. Every receipt in France shows it."},

    {type:"teach", trg:"approfondi", src:"thorough, in-depth", pos:"adj", gender:null,
     note:"Past participle used as adjective. Feminine: approfondie.",
     example:"A: Une analyse approfondie est nécessaire.\nB: Prenons le temps de bien étudier le dossier.",
     exampleSrc:"A: A thorough analysis is necessary.\nB: Let's take the time to study the file properly.",
     funFact:"From 'approfondir' (to deepen). 'Cours approfondi' means an advanced, in-depth course."},

    {type:"teach", trg:"gradé", src:"ranked, holding a rank", pos:"adj", gender:null,
     note:"Adjective or noun. A person with military or police rank. Feminine: gradée.",
     example:"A: Le gradé a donné l'ordre d'évacuer.\nB: Les soldats ont obéi immédiatement.",
     exampleSrc:"A: The officer gave the order to evacuate.\nB: The soldiers obeyed immediately.",
     funFact:"From 'grade' (rank). In the military, 'un gradé' is any officer above basic private."},

    {type:"mc",
     q:"Que signifie 'une analyse approfondie' ?",
     opts:["Une étude détaillée et complète","Une étude superficielle","Une analyse automatique","Une analyse rapide"],
     ans:"Une étude détaillée et complète",
     hint:"From 'approfondir' (to deepen). Think of going deep into a subject, not just skimming."},

    {type:"teach", trg:"la force", src:"the force, the strength (adj: forced)", pos:"noun", gender:"f",
     note:"Feminine noun as force/strength. As adjective 'forcé': obligatory, forced.",
     example:"A: Il a mangé une dose forcée de légumes.\nB: Sa mère n'a pas laissé le choix.",
     exampleSrc:"A: He ate a forced dose of vegetables.\nB: His mother didn't give him a choice.",
     funFact:"'C'est forcé' means it's inevitable. 'Force majeure' is a legal term for unforeseeable circumstances."},

    {type:"teach", trg:"l'adduction", src:"the supply (water), the conveyance", pos:"noun", gender:"f",
     note:"Feminine noun. The system of bringing water to a town. Technical term.",
     example:"A: L'adduction d'eau de ce village date de 1950.\nB: Les canalisations doivent être rénovées.",
     exampleSrc:"A: This village's water supply system dates from 1950.\nB: The pipes need renovation.",
     funFact:"From Latin 'adducere' meaning to lead toward. Also an anatomical term for muscle movement."},

    {type:"teach", trg:"l'interconnexion", src:"the interconnection", pos:"noun", gender:"f",
     note:"Feminine noun. The linking of different systems or networks together.",
     example:"A: L'interconnexion des réseaux de transport est essentielle.\nB: Le métro et le train doivent communiquer.",
     exampleSrc:"A: The interconnection of transport networks is essential.\nB: Metro and train must communicate.",
     funFact:"A modern buzzword in French infrastructure and technology. 'Interconnecter' is the verb form."},

    {type:"fb",
     s:"L'enseignement {1} permet à chaque élève de progresser à son rythme.",
     a:["différencié"],
     opts:["différencié","approfondi","gradé","ajoutée"],
     hint:"A teaching approach that adapts to each student's individual needs and pace.",
     sSrc:"{1} teaching allows each student to progress at their own pace."},

    {type:"teach", trg:"l'amateurisme", src:"the amateurism", pos:"noun", gender:"m",
     note:"Masculine noun. Lack of professional quality or seriousness.",
     example:"A: Cet amateurisme n'est plus acceptable.\nB: Il faut recruter des professionnels.",
     exampleSrc:"A: This amateurism is no longer acceptable.\nB: We need to recruit professionals.",
     funFact:"Strongly negative in French. While 'amateur' can be positive in English, 'amateurisme' never is."},

    {type:"teach", trg:"le taux", src:"the rate, the level", pos:"noun", gender:"m",
     note:"Masculine noun. A numerical rate or proportion.",
     example:"A: Le taux de chômage a baissé.\nB: C'est une bonne nouvelle pour l'économie.",
     exampleSrc:"A: The unemployment rate has dropped.\nB: That's good news for the economy.",
     funFact:"'Taux d'intérêt' (interest rate), 'taux de change' (exchange rate). Essential economics vocabulary."},

    {type:"teach", trg:"le seuil", src:"the threshold", pos:"noun", gender:"m",
     note:"Masculine noun. The point at which something begins or changes.",
     example:"A: Le seuil de pauvreté en France est bien défini.\nB: Beaucoup de familles vivent juste au-dessus.",
     exampleSrc:"A: The poverty threshold in France is well defined.\nB: Many families live just above it.",
     funFact:"Literally a doorstep. 'Au seuil de' means on the brink of. Used in science, economics, and literature."},

    {type:"mc",
     q:"Que mesure 'le taux de chômage' ?",
     opts:["Le pourcentage de personnes sans emploi","Le nombre total d'entreprises","La croissance économique","Le salaire moyen"],
     ans:"Le pourcentage de personnes sans emploi",
     hint:"A numerical rate showing the proportion of people without work in the economy."},

    {type:"teach", trg:"le barème", src:"the scale, the grading system", pos:"noun", gender:"m",
     note:"Masculine noun. A graduated scale of rates, prices, or grades.",
     example:"A: Le barème de notation est strict.\nB: Chaque erreur coûte deux points.",
     exampleSrc:"A: The grading scale is strict.\nB: Each mistake costs two points.",
     funFact:"Named after François Barême, a 17th-century French mathematician who published calculation tables."},

    {type:"teach", trg:"le bilan", src:"the assessment, the balance sheet", pos:"noun", gender:"m",
     note:"Masculine noun. A summary or evaluation. 'Bilan de santé' = checkup.",
     example:"A: Le bilan de l'année est positif.\nB: Tous les objectifs ont été atteints.",
     exampleSrc:"A: The year's assessment is positive.\nB: All objectives were met.",
     funFact:"'Dresser un bilan' (to draw up an assessment) is used in business, health, and personal reflection."},

    {type:"teach", trg:"le critère", src:"the criterion", pos:"noun", gender:"m",
     note:"Masculine noun. A standard for judging or deciding. Plural: les critères.",
     example:"A: Quels sont les critères de sélection ?\nB: L'expérience et la motivation.",
     exampleSrc:"A: What are the selection criteria?\nB: Experience and motivation.",
     funFact:"From Greek 'kriterion' meaning standard of judgment. French keeps the Greek plural logic."},

    {type:"fb",
     s:"Le {1} de pauvreté est fixé à 60% du revenu médian.",
     a:["seuil"],
     opts:["seuil","taux","barème","bilan"],
     hint:"The point at which something begins. Literally means a doorstep or threshold.",
     sSrc:"The poverty {1} is set at 60% of the median income."},

    {type:"teach", trg:"le palmarès", src:"the record of achievements, the rankings", pos:"noun", gender:"m",
     note:"Masculine noun. A list of winners or best performers.",
     example:"A: Cette chanson est en tête du palmarès.\nB: Elle est numéro un depuis trois semaines.",
     exampleSrc:"A: This song is at the top of the charts.\nB: It's been number one for three weeks.",
     funFact:"From Latin 'palmaris' (of the palm, as in palm of victory). Used for music charts, sports records, and award lists."},

    {type:"teach", trg:"la fourchette", src:"the fork (also: range, bracket)", pos:"noun", gender:"f",
     note:"Feminine noun. A fork, or figuratively a range of values.",
     example:"A: Le salaire est dans une fourchette de 35 000 à 45 000 euros.\nB: C'est raisonnable.",
     exampleSrc:"A: The salary is in a range of 35,000 to 45,000 euros.\nB: That's reasonable.",
     funFact:"'Fourchette de prix' (price range) is essential business French. The fork shape suggests upper and lower bounds."},

    {type:"match", pairs:[
      {trg:"barème", src:"grading scale"},
      {trg:"bilan", src:"assessment"},
      {trg:"critère", src:"criterion"},
      {trg:"palmarès", src:"rankings"},
      {trg:"fourchette", src:"range, bracket"}
    ]},

    {type:"mc",
     q:"Que signifie 'une fourchette de prix' ?",
     opts:["Une gamme entre un minimum et un maximum","Un prix unique fixe","Une réduction de prix","Un prix au kilo"],
     ans:"Une gamme entre un minimum et un maximum",
     hint:"The fork shape suggests two prongs: a lower bound and an upper bound for values."},

    {type:"fb",
     s:"Le {1} de fin d'année montre que tous les objectifs ont été atteints.",
     a:["bilan"],
     opts:["bilan","barème","critère","palmarès"],
     hint:"A summary assessment or evaluation, commonly used at the end of a period.",
     sSrc:"The year-end {1} shows that all objectives were met."}
  ]
};
export default LESSON_15;
