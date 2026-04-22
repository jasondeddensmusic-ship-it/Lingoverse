const LESSON_2 = {
  id:"frv2_b2g2_l2", title:"Environnement et climat", icon:"\u{1F30D}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Environnement et climat",
     desc:"Build vocabulary for discussing environmental issues, climate change, and sustainability. Essential for B2-level debates and essays.",
     goals:["Learn 20 environment and climate terms","Discuss ecological challenges in French","Express opinions on sustainability"]},

    {type:"teach", trg:"atmospherique", src:"atmospheric", pos:"adj", gender:null,
     note:"Adjective. Relating to the atmosphere. Same form for both genders.",
     example:"A: La pression atmospherique baisse.\nB: Ca annonce de la pluie pour demain.",
     exampleSrc:"A: The atmospheric pressure is dropping.\nB: That means rain for tomorrow.",
     funFact:"France has one of Europe's densest networks of atmospheric monitoring stations."},

    {type:"teach", trg:"la devastation", src:"the devastation", pos:"noun", gender:"f",
     note:"Feminine noun. Widespread destruction or ruin.",
     example:"A: La devastation causee par l'ouragan est enorme.\nB: Des milliers de maisons sont detruites.",
     exampleSrc:"A: The devastation caused by the hurricane is enormous.\nB: Thousands of houses are destroyed.",
     funFact:"France's 1999 storms ('tempetes de 1999') caused devastating forest loss. A national trauma."},

    {type:"teach", trg:"dessecher", src:"to dry out, to desiccate", pos:"verb", gender:null,
     note:"Verb. To remove all moisture. Reflexive: se dessecher (to dry up).",
     example:"A: Le soleil a desseche la terre.\nB: Les agriculteurs sont desesperes.",
     exampleSrc:"A: The sun dried out the earth.\nB: The farmers are desperate.",
     funFact:"From 'sec' (dry). French vineyards face increasing dessiccation due to climate change."},

    {type:"teach", trg:"un crustace", src:"a crustacean", pos:"noun", gender:"m",
     note:"Masculine noun. A shellfish like a crab, lobster, or shrimp.",
     example:"A: Les crustaces sont menaces par l'acidification des oceans.\nB: C'est un probleme grave pour la biodiversite.",
     exampleSrc:"A: Crustaceans are threatened by ocean acidification.\nB: It's a serious problem for biodiversity.",
     funFact:"France is Europe's biggest consumer of crustaceans. Brittany's lobster is legendary."},

    {type:"teach", trg:"centrifuge", src:"centrifugal", pos:"adj", gender:null,
     note:"Adjective. Moving away from the center. Used in science and figuratively.",
     example:"A: La force centrifuge pousse l'eau vers l'exterieur.\nB: C'est le principe de l'essoreuse.",
     exampleSrc:"A: Centrifugal force pushes water outward.\nB: That's the principle of the spin dryer.",
     funFact:"From Latin 'centrum' (center) + 'fugere' (to flee). The opposite is 'centripete'."},

    {type:"mc",
     q:"Quel verbe signifie 'enlever toute l'humidite' ?",
     opts:["dessecher","devastation","centrifuge","crustace"],
     ans:"dessecher",
     hint:"Think of the root 'sec' meaning dry. Adding 'de-' intensifies the action."},

    {type:"teach", trg:"centripete", src:"centripetal", pos:"adj", gender:null,
     note:"Adjective. Moving toward the center. The opposite of centrifuge.",
     example:"A: La gravite est une force centripete.\nB: Elle attire les objets vers le centre.",
     exampleSrc:"A: Gravity is a centripetal force.\nB: It attracts objects toward the center.",
     funFact:"From Latin 'centrum' + 'petere' (to seek). Newton formalized centripetal force in 1687."},

    {type:"teach", trg:"l'accumulation", src:"the accumulation", pos:"noun", gender:"f",
     note:"Feminine noun. A gradual build-up of something over time.",
     example:"A: L'accumulation de dechets plastiques est alarmante.\nB: Il faut reduire notre consommation.",
     exampleSrc:"A: The accumulation of plastic waste is alarming.\nB: We need to reduce our consumption.",
     funFact:"In rhetoric, 'accumulation' is a figure of speech listing many items for emphasis. Very French."},

    {type:"teach", trg:"l'acceleration", src:"the acceleration", pos:"noun", gender:"f",
     note:"Feminine noun. The increase in speed or rate of change.",
     example:"A: L'acceleration du rechauffement climatique inquiete les scientifiques.\nB: Les donnees sont sans appel.",
     exampleSrc:"A: The acceleration of global warming worries scientists.\nB: The data is undeniable.",
     funFact:"France's TGV acceleration from 0 to 300 km/h takes just 4 minutes. A source of national pride."},

    {type:"teach", trg:"un bosquet", src:"a grove, a thicket", pos:"noun", gender:"m",
     note:"Masculine noun. A small group of trees or bushes.",
     example:"A: Il y a un joli bosquet au fond du jardin.\nB: Les oiseaux y nichent au printemps.",
     exampleSrc:"A: There's a nice grove at the bottom of the garden.\nB: Birds nest there in spring.",
     funFact:"Versailles has famous 'bosquets' designed by Le Notre. Each is a green outdoor room."},

    {type:"fb",
     s:"L'{1} de gaz a effet de serre dans l'atmosphere est dangereuse.",
     a:["accumulation"],
     opts:["accumulation","acceleration","devastation","bosquet"],
     hint:"A gradual build-up over time. Think of things piling up layer by layer.",
     sSrc:"The {1} of greenhouse gases in the atmosphere is dangerous."},

    {type:"teach", trg:"aeronautique", src:"aeronautical", pos:"adj", gender:null,
     note:"Adjective. Relating to the science of flight and aircraft.",
     example:"A: Toulouse est la capitale aeronautique de l'Europe.\nB: Oui, Airbus y a son siege.",
     exampleSrc:"A: Toulouse is the aeronautical capital of Europe.\nB: Yes, Airbus has its headquarters there.",
     funFact:"France's aeronautical heritage includes the Concorde and Airbus. Toulouse is the industry hub."},

    {type:"teach", trg:"aeroportuaire", src:"airport (related to)", pos:"adj", gender:null,
     note:"Adjective. Relating to airports and airport operations.",
     example:"A: Les taxes aeroportuaires ont augmente.\nB: Ca rend les billets plus chers.",
     exampleSrc:"A: Airport taxes have increased.\nB: That makes tickets more expensive.",
     funFact:"Charles de Gaulle airport is Europe's second busiest. Its Terminal 1 was revolutionary in 1974."},

    {type:"teach", trg:"le contour", src:"the outline, the contour", pos:"noun", gender:"m",
     note:"Masculine noun. The outer edge or shape of something.",
     example:"A: Les contours de la montagne se dessinent dans la brume.\nB: C'est un paysage magnifique.",
     exampleSrc:"A: The mountain contours emerge in the mist.\nB: It's a magnificent landscape.",
     funFact:"'Faire le contour de' means to go around something. Cartographers use 'courbes de niveau' for contour lines."},

    {type:"mc",
     q:"Quel mot designe un petit groupe d'arbres dans un parc ?",
     opts:["une accumulation","un bosquet","un contour","un crustace"],
     ans:"un bosquet",
     hint:"A small cluster of trees, often found in formal gardens like Versailles."},

    {type:"teach", trg:"la deforestation", src:"the deforestation", pos:"noun", gender:"f",
     note:"Feminine noun. The clearing of forests on a large scale.",
     example:"A: La deforestation en Amazonie s'accelere.\nB: C'est une catastrophe ecologique mondiale.",
     exampleSrc:"A: Deforestation in the Amazon is accelerating.\nB: It's a global ecological catastrophe.",
     funFact:"France lost 80% of its forests by the 18th century. Reforestation efforts reversed this dramatically."},

    {type:"teach", trg:"la contraction", src:"the contraction, the shrinking", pos:"noun", gender:"f",
     note:"Feminine noun. A reduction in size, volume, or economic activity.",
     example:"A: La contraction de l'economie est preoccupante.\nB: Le chomage risque d'augmenter.",
     exampleSrc:"A: The contraction of the economy is concerning.\nB: Unemployment may increase.",
     funFact:"In grammar, contraction merges words: 'de + le' becomes 'du'. A fundamental French mechanism."},

    {type:"teach", trg:"un derive", src:"a derivative, a by-product", pos:"noun", gender:"m",
     note:"Masculine noun. Something that comes from an original source.",
     example:"A: Le plastique est un derive du petrole.\nB: C'est pour cela qu'il est si polluant.",
     exampleSrc:"A: Plastic is a derivative of petroleum.\nB: That's why it's so polluting.",
     funFact:"'A la derive' means adrift. The noun 'derive' in sailing means leeway or drift."},

    {type:"teach", trg:"budgetaire", src:"budgetary", pos:"adj", gender:null,
     note:"Adjective. Relating to financial budgets. Same form for both genders.",
     example:"A: Les contraintes budgetaires limitent les projets ecologiques.\nB: Il faut trouver de nouveaux financements.",
     exampleSrc:"A: Budgetary constraints limit ecological projects.\nB: We need to find new funding.",
     funFact:"France's 'loi de finances' (budget law) is debated every autumn. It is a major political event."},

    {type:"teach", trg:"efficacement", src:"effectively, efficiently", pos:"adv", gender:null,
     note:"Adverb. In an effective or efficient manner.",
     example:"A: Comment lutter efficacement contre la pollution ?\nB: Il faut agir a tous les niveaux.",
     exampleSrc:"A: How can we fight pollution effectively?\nB: We need to act at all levels.",
     funFact:"The French love the distinction between 'efficace' (effective) and 'efficient' (efficient). They are not the same."},

    {type:"fb",
     s:"Toulouse est la capitale {1} de l'Europe grace a Airbus.",
     a:["aeronautique"],
     opts:["aeronautique","aeroportuaire","atmospherique","budgetaire"],
     hint:"Relating to the science of flight and aircraft engineering.",
     sSrc:"Toulouse is the {1} capital of Europe thanks to Airbus."},

    {type:"match", pairs:[
      {trg:"devastation", src:"devastation"},
      {trg:"bosquet", src:"grove"},
      {trg:"contraction", src:"contraction"},
      {trg:"derive", src:"derivative"},
      {trg:"crustace", src:"crustacean"}
    ]},

    {type:"mc",
     q:"Quel adjectif decrit ce qui se rapporte aux aeroports ?",
     opts:["atmospherique","budgetaire","aeroportuaire","aeronautique"],
     ans:"aeroportuaire",
     hint:"Relating specifically to airports, not aviation in general. Think of 'aeroport'."},

    {type:"fb",
     s:"La {1} de l'economie a entraine une hausse du chomage.",
     a:["contraction"],
     opts:["contraction","accumulation","acceleration","devastation"],
     hint:"A shrinking or reduction. The economy is getting smaller, not bigger.",
     sSrc:"The {1} of the economy led to a rise in unemployment."}
  ]
};
export default LESSON_2;
