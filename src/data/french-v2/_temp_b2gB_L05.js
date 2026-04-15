const LESSON_5 = {
  id:"frv2_b2gB_l5", title:"Environnement et nature", icon:"\u{1F33F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Environnement et nature",
     desc:"Explore environmental and scientific vocabulary. Discuss ecology, climate, and natural phenomena in French.",
     goals:["Learn 10 environment and nature terms","Discuss ecological issues","Express scientific concepts"]},

    {type:"teach", trg:"le phosphate", src:"phosphate", pos:"noun", gender:"m",
     note:"Masculine noun. A chemical compound used in fertilizers and detergents.\nPollution aux phosphates is a major environmental issue.",
     example:"A: Les phosphates polluent les rivieres.\nB: Ils provoquent la proliferation des algues.",
     exampleSrc:"A: Phosphates pollute the rivers.\nB: They cause the proliferation of algae.",
     funFact:"France banned phosphates in household detergents in 2007. Many lakes recovered within just a few years."},

    {type:"teach", trg:"le grillage", src:"the wire fence, the mesh", pos:"noun", gender:"m",
     note:"Masculine noun. A wire fence or metal mesh.\nAlso means grilling (cooking). Context decides.",
     example:"A: Le grillage du jardin est rouille.\nB: Il faut le remplacer avant l'hiver.",
     exampleSrc:"A: The garden fence is rusty.\nB: We need to replace it before winter.",
     funFact:"In rural France, 'mettre un grillage' is a rite of passage for new homeowners. Neighbors often help."},

    {type:"teach", trg:"la globalite", src:"the entirety, the whole", pos:"noun", gender:"f",
     note:"Feminine noun. The state of being whole or complete.\nDans sa globalite = in its entirety.",
     example:"A: Il faut considerer le probleme dans sa globalite.\nB: On ne peut pas se concentrer sur un seul aspect.",
     exampleSrc:"A: We need to consider the problem in its entirety.\nB: We can't focus on just one aspect.",
     funFact:"Despite the similarity, 'globalite' and 'globalisation' have different nuances. Globalite is about completeness, not worldwide reach."},

    {type:"teach", trg:"l'intensification", src:"the intensification", pos:"noun", gender:"f",
     note:"Feminine noun. The act of making something more intense.\nIntensification agricole = agricultural intensification.",
     example:"A: L'intensification des tempetes est liee au rechauffement.\nB: Les scientifiques le confirment depuis des annees.",
     exampleSrc:"A: The intensification of storms is linked to warming.\nB: Scientists have confirmed this for years.",
     funFact:"French climate scientists at the GIEC (French name for IPCC) produce some of the world's most cited research on this topic."},

    {type:"teach", trg:"la porosite", src:"porosity", pos:"noun", gender:"f",
     note:"Feminine noun. The quality of having tiny holes that allow liquids to pass through.\nAlso used figuratively for borders.",
     example:"A: La porosite du sol permet l'infiltration de l'eau.\nB: C'est un facteur cle pour les nappes phreatiques.",
     exampleSrc:"A: The porosity of the soil allows water infiltration.\nB: It's a key factor for groundwater tables.",
     funFact:"Figuratively, French journalists speak of 'la porosite des frontieres' to describe how easily things cross borders."},

    {type:"teach", trg:"la proie", src:"the prey", pos:"noun", gender:"f",
     note:"Feminine noun. An animal hunted by another.\nEtre en proie a = to be prey to, to suffer from.",
     example:"A: Le lapin est la proie du renard.\nB: C'est la chaine alimentaire naturelle.",
     exampleSrc:"A: The rabbit is the fox's prey.\nB: It's the natural food chain.",
     funFact:"'Etre en proie au doute' (to be prey to doubt) is a common literary expression. Proie is used figuratively more often than literally."},

    {type:"teach", trg:"un pilier", src:"a pillar", pos:"noun", gender:"m",
     note:"Masculine noun. A structural column, or a key person/element.\nLes piliers de la societe = the pillars of society.",
     example:"A: L'education est un pilier de la democratie.\nB: Sans elle, les citoyens ne peuvent pas s'informer.",
     exampleSrc:"A: Education is a pillar of democracy.\nB: Without it, citizens cannot inform themselves.",
     funFact:"'Un pilier de bar' (a bar pillar) is French slang for a regular who props up the bar. Humorous and slightly critical."},

    {type:"teach", trg:"la precipitation", src:"precipitation, haste", pos:"noun", gender:"f",
     note:"Feminine noun. Rain/snow (weather), or acting with excessive haste.\nAgir avec precipitation = to act rashly.",
     example:"A: Les precipitations ont ete record ce mois-ci.\nB: Les inondations menacent plusieurs villages.",
     exampleSrc:"A: Precipitation has been record-breaking this month.\nB: Flooding threatens several villages.",
     funFact:"French weather reports always use 'precipitations' (plural) for rain/snow. The singular means hasty action."},

    {type:"teach", trg:"precipitamment", src:"hastily, precipitately", pos:"adv", gender:null,
     note:"Adverb. In a rushed, hasty manner.\nPrecipitamment is one of the longest common French adverbs at 15 letters.",
     example:"A: Il a quitte la reunion precipitamment.\nB: Quelque chose de grave a du se passer.",
     exampleSrc:"A: He left the meeting hastily.\nB: Something serious must have happened.",
     funFact:"At 15 letters, precipitamment is a spelling bee favorite. The double -mm- trips up even native speakers."},

    {type:"teach", trg:"prefigurer", src:"to foreshadow, to prefigure", pos:"verb", gender:null,
     note:"Regular -er verb. To give an advance indication of what is to come.\nUsed in literary and analytical writing.",
     example:"A: Cette crise prefigure de grands changements.\nB: On voit deja les premiers signes de transformation.",
     exampleSrc:"A: This crisis foreshadows great changes.\nB: We can already see the first signs of transformation.",
     funFact:"Art critics love this word. 'Monet prefigure l'impressionnisme' is a textbook sentence in French art history."},

    {type:"mc", q:"Que signifie 'etre en proie au doute'?",
     opts:["Souffrir du doute","Chasser le doute","Ignorer le doute","Resoudre le doute"],
     ans:"Souffrir du doute",
     hint:"Proie means prey, so being prey to doubt means being consumed by it"},

    {type:"fb", s:"Les {1} sont abondantes en automne dans cette region.",
     a:["precipitations"], opts:["precipitations","phosphates","porosites","piliers"],
     hint:"The meteorological term for rain, snow, and other forms of water falling from the sky",
     sSrc:"{1} are abundant in autumn in this region."},

    {type:"mc", q:"Quel est le sens figure de 'pilier'?",
     opts:["Un element fondamental","Une colonne en pierre","Un sport d'equipe","Un type de pont"],
     ans:"Un element fondamental",
     hint:"Beyond the architectural meaning, think of something that supports a system"},

    {type:"match", pairs:[
      {trg:"le phosphate", src:"phosphate"},
      {trg:"la porosite", src:"porosity"},
      {trg:"la proie", src:"prey"},
      {trg:"un pilier", src:"a pillar"}
    ]},

    {type:"fb", s:"Il faut considerer le probleme dans sa {1}.",
     a:["globalite"], opts:["globalite","porosite","precipitation","intensification"],
     hint:"The noun means entirety or wholeness, considering all aspects together",
     sSrc:"We need to consider the problem in its {1}."},

    {type:"mc", q:"Que fait quelqu'un qui agit 'precipitamment'?",
     opts:["Il agit de facon trop rapide","Il agit avec prudence","Il attend patiemment","Il reflechit longtemps"],
     ans:"Il agit de facon trop rapide",
     hint:"The adverb suggests acting in a rushed, hasty manner without thinking"},

    {type:"fb", s:"Cette decouverte {1} une revolution scientifique.",
     a:["prefigure"], opts:["prefigure","precipite","intensifie","globalise"],
     hint:"The verb means to give an advance indication of what is to come",
     sSrc:"This discovery {1} a scientific revolution."},

    {type:"mc", q:"L'{1} agricole a des consequences environnementales.",
     opts:["intensification","precipitation","globalite","porosite"],
     ans:"intensification",
     hint:"Making farming more intense through chemicals and machinery has ecological costs"},

    {type:"fb", s:"Le {1} autour du jardin protege les plantations.",
     a:["grillage"], opts:["grillage","pilier","phosphate","precipitation"],
     hint:"The wire mesh structure that surrounds a garden to keep animals out",
     sSrc:"The {1} around the garden protects the plants."},

    {type:"match", pairs:[
      {trg:"la globalite", src:"entirety"},
      {trg:"l'intensification", src:"intensification"},
      {trg:"precipitamment", src:"hastily"},
      {trg:"prefigurer", src:"to foreshadow"}
    ]}
  ]
};
export default LESSON_5;
