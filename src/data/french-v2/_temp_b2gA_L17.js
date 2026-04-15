const LESSON_17 = {
  id:"frv2_b2gA_l17", title:"Processus et transformations", icon:"\u{1F504}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Processus et transformations",
     desc:"Describe processes, changes, and transformations with precision. Essential abstract vocabulary for B2 academic and professional contexts.",
     goals:["Learn 14 process and transformation words","Discuss change and development abstractly","Use formal vocabulary for analysis"]},

    {type:"teach", trg:"la materialisation", src:"materialization", pos:"noun", gender:"f",
     note:"Feminine noun. The process of becoming real or tangible.\nFrom 'materiel' (material).",
     example:"A: La materialisation de ce projet a pris deux ans.\nB: Mais le resultat en valait la peine.",
     exampleSrc:"A: The materialization of this project took two years.\nB: But the result was worth it.",
     funFact:"Used in both business (making plans real) and supernatural contexts (ghosts appearing). Very versatile."},

    {type:"teach", trg:"l'idealisation", src:"idealization", pos:"noun", gender:"f",
     note:"Feminine noun. The act of viewing something as perfect or ideal.",
     example:"A: L'idealisation du passe est dangereuse.\nB: Les choses n'etaient pas mieux avant.",
     exampleSrc:"A: Idealization of the past is dangerous.\nB: Things were not better before.",
     funFact:"French philosophy has debated idealisation since the Enlightenment. Rousseau idealized nature; Voltaire mocked him for it."},

    {type:"teach", trg:"l'interiorisation", src:"internalization", pos:"noun", gender:"f",
     note:"Feminine noun. Making external ideas or feelings part of your inner self.",
     example:"A: L'interiorisation du stress cause des problemes de sante.\nB: Il faut apprendre a exprimer ses emotions.",
     exampleSrc:"A: Internalizing stress causes health problems.\nB: You need to learn to express your emotions.",
     funFact:"A key term in French psychology. Psychoanalysis (very popular in France) discusses interiorisation extensively."},

    {type:"teach", trg:"l'incrustation", src:"the inlay, the encrustation", pos:"noun", gender:"f",
     note:"Feminine noun. Embedding something into a surface.\nAlso: overstaying one's welcome.",
     example:"A: Les incrustations d'or decorent le plafond.\nB: C'est un travail d'artisan remarquable.",
     exampleSrc:"A: The gold inlays decorate the ceiling.\nB: It's remarkable craftsmanship.",
     funFact:"Colloquially, 's'incruster' means to show up uninvited and refuse to leave. 'Il s'est incruste a la fete.'"},

    {type:"teach", trg:"l'acceleration", src:"acceleration", pos:"noun", gender:"f",
     note:"Feminine noun. The rate of increase in speed or process.\nWide usage in science, tech, and society.",
     example:"A: L'acceleration du changement climatique inquiete les scientifiques.\nB: Les donnees sont alarmantes.",
     exampleSrc:"A: The acceleration of climate change worries scientists.\nB: The data is alarming.",
     funFact:"Hartmut Rosa's theory of 'acceleration sociale' is widely discussed in French sociology."},

    {type:"mc",
     q:"Quel mot designe le fait de rendre concret un projet ou une idee ?",
     opts:["la materialisation","l'idealisation","l'interiorisation","l'incrustation"],
     ans:"la materialisation",
     hint:"Making something tangible and real. From 'materiel'. Think of a plan becoming reality."},

    {type:"teach", trg:"la mutation", src:"the transformation, the mutation", pos:"noun", gender:"f",
     note:"Feminine noun. A fundamental change. In biology: genetic mutation.\nAlso: job transfer.",
     example:"A: La societe est en pleine mutation.\nB: Les reperes traditionnels disparaissent.",
     exampleSrc:"A: Society is undergoing a major transformation.\nB: Traditional reference points are disappearing.",
     funFact:"'Demander sa mutation' means to request a transfer to another workplace. A very different use of the same word."},

    {type:"teach", trg:"la consolidation", src:"consolidation", pos:"noun", gender:"f",
     note:"Feminine noun. Strengthening or making more solid.\n'Consolidation de la paix' = peace consolidation.",
     example:"A: La consolidation de notre position sur le marche est prioritaire.\nB: Il faut fideliser nos clients.",
     exampleSrc:"A: Consolidating our market position is a priority.\nB: We need to build customer loyalty.",
     funFact:"Used across domains: construction (setting concrete), finance (merging accounts), and politics (cementing power)."},

    {type:"teach", trg:"la deterioration", src:"deterioration", pos:"noun", gender:"f",
     note:"Feminine noun. The process of becoming worse.\n'Deterioration des conditions de vie'.",
     example:"A: La deterioration de l'environnement s'accelere.\nB: Il faut agir maintenant.",
     exampleSrc:"A: Environmental deterioration is accelerating.\nB: We need to act now.",
     funFact:"News headlines frequently use 'deterioration de la situation' for worsening crises. A journalist's staple word."},

    {type:"fb",
     s:"La societe est en pleine {1}, les anciennes regles ne s'appliquent plus.",
     a:["mutation"],
     opts:["mutation","consolidation","materialisation","incrustation"],
     hint:"A fundamental transformation of a system or society. Also used in biology for genetic changes.",
     sSrc:"Society is undergoing a major {1}, the old rules no longer apply."},

    {type:"teach", trg:"la proliferation", src:"proliferation", pos:"noun", gender:"f",
     note:"Feminine noun. Rapid increase or spread.\n'Non-proliferation nucleaire' = nuclear non-proliferation.",
     example:"A: La proliferation des armes nucleaires est une menace globale.\nB: Les traites internationaux sont essentiels.",
     exampleSrc:"A: Nuclear weapons proliferation is a global threat.\nB: International treaties are essential.",
     funFact:"The 'Traite de non-proliferation' (1968) is one of the most important international agreements France upholds."},

    {type:"teach", trg:"la regression", src:"regression", pos:"noun", gender:"f",
     note:"Feminine noun. Moving backward or declining.\nAlso a statistical and psychological term.",
     example:"A: C'est une regression par rapport aux droits acquis.\nB: On ne peut pas accepter de recul.",
     exampleSrc:"A: It's a regression compared to established rights.\nB: We cannot accept going backward.",
     funFact:"In French psychology, 'regression' describes returning to childlike behavior. In stats, it's a mathematical model."},

    {type:"teach", trg:"l'emergence", src:"emergence", pos:"noun", gender:"f",
     note:"Feminine noun. The process of coming into existence or prominence.\n'Pays emergent' = emerging country.",
     example:"A: L'emergence de nouvelles technologies change tout.\nB: Il faut s'adapter rapidement.",
     exampleSrc:"A: The emergence of new technologies changes everything.\nB: We need to adapt quickly.",
     funFact:"'Les pays emergents' (BRICS) is a constant topic in French economics and foreign policy discussion."},

    {type:"mc",
     q:"Quel mot designe le fait de devenir plus faible ou de s'aggraver ?",
     opts:["la deterioration","la consolidation","l'emergence","la proliferation"],
     ans:"la deterioration",
     hint:"The process of becoming worse. The opposite of improvement or consolidation."},

    {type:"teach", trg:"la stagnation", src:"stagnation", pos:"noun", gender:"f",
     note:"Feminine noun. Lack of growth, movement, or development.\nEconomic and figurative use.",
     example:"A: La stagnation economique dure depuis trois ans.\nB: Le chomage ne baisse pas.",
     exampleSrc:"A: Economic stagnation has lasted for three years.\nB: Unemployment isn't falling.",
     funFact:"'Stagflation' (stagnation + inflation) entered French economics vocabulary in the 1970s oil crisis."},

    {type:"fb",
     s:"L'{1} de nouvelles start-ups dans ce secteur est tres rapide.",
     a:["emergence"],
     opts:["emergence","stagnation","regression","deterioration"],
     hint:"The process of coming into existence or becoming prominent. Think of new things appearing.",
     sSrc:"The {1} of new start-ups in this sector is very rapid."},

    {type:"match", pairs:[
      {trg:"idealisation", src:"idealization"},
      {trg:"mutation", src:"transformation"},
      {trg:"proliferation", src:"proliferation"},
      {trg:"regression", src:"regression"},
      {trg:"stagnation", src:"stagnation"}
    ]},

    {type:"mc",
     q:"Quel mot designe le renforcement ou l'affermissement de quelque chose ?",
     opts:["la consolidation","la deterioration","la stagnation","la regression"],
     ans:"la consolidation",
     hint:"Making something stronger or more solid. Used in construction, finance, and politics."}
  ]
};
export default LESSON_17;
