const LESSON_14 = {
  id:"frv2_b2gB_l14", title:"Sciences et innovation", icon:"\u{1F52C}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Sciences et innovation",
     desc:"Build your scientific and technological vocabulary. From laboratories to discoveries, speak about science in French.",
     goals:["Learn 10 science and technology terms","Discuss scientific progress","Describe innovations formally"]},

    {type:"teach", trg:"le decimetre", src:"the decimeter", pos:"noun", gender:"m",
     note:"Masculine noun. One-tenth of a meter (10 centimeters).\nDeci (tenth) + metre. Used in school math.",
     example:"A: Un decimetre carre fait cent centimetres carres.\nB: C'est une des premieres conversions qu'on apprend a l'ecole.",
     exampleSrc:"A: A square decimeter equals one hundred square centimeters.\nB: It's one of the first conversions you learn at school.",
     funFact:"France invented the metric system during the Revolution (1795). The meter was defined as one ten-millionth of the distance from pole to equator."},

    {type:"teach", trg:"la detonation", src:"a detonation, an explosion", pos:"noun", gender:"f",
     note:"Feminine noun. A violent explosion or the sharp sound it makes.\nDifferent from 'deflagration' (slower combustion).",
     example:"A: La detonation a ete entendue a des kilometres.\nB: Les vitres ont tremble dans tout le quartier.",
     exampleSrc:"A: The detonation was heard for kilometers.\nB: Windows shook across the whole neighborhood.",
     funFact:"French distinguishes detonation (supersonic) from deflagration (subsonic). The physics matters in forensic investigations."},

    {type:"teach", trg:"un chronobiologiste", src:"a chronobiologist", pos:"noun", gender:"m",
     note:"Masculine noun. A scientist who studies biological rhythms.\nFeminine: une chronobiologiste. Chrono (time) + biologiste.",
     example:"A: Les chronobiologistes etudient nos rythmes de sommeil.\nB: Leur travail a revolutionne notre comprehension de la fatigue.",
     exampleSrc:"A: Chronobiologists study our sleep rhythms.\nB: Their work has revolutionized our understanding of fatigue.",
     funFact:"French schools adjusted timetables based on chronobiology research. Morning math classes are now standard because focus peaks before noon."},

    {type:"teach", trg:"le parachute", src:"the parachute", pos:"noun", gender:"m",
     note:"Masculine noun. A device for slowing descent through the air.\nPara (against) + chute (fall). Also: parachute dore = golden parachute.",
     example:"A: Le parachute s'est ouvert juste a temps.\nB: Le parachutiste a atterri sain et sauf.",
     exampleSrc:"A: The parachute opened just in time.\nB: The parachutist landed safe and sound.",
     funFact:"The word parachute was coined in French by Lenormand in 1783. He made the first recorded parachute jump from a tower in Montpellier."},

    {type:"teach", trg:"le paraphe", src:"the initial, the flourish", pos:"noun", gender:"m",
     note:"Masculine noun. An abbreviated signature or decorative flourish.\nParapher un document = to initial a document.",
     example:"A: Veuillez apposer votre paraphe en bas de chaque page.\nB: C'est necessaire pour valider le contrat.",
     exampleSrc:"A: Please put your initials at the bottom of each page.\nB: It's necessary to validate the contract.",
     funFact:"French contracts require paraphes on every page plus a full signature at the end. This prevents page substitution fraud."},

    {type:"teach", trg:"un plantigrade", src:"a plantigrade", pos:"noun", gender:"m",
     note:"Masculine noun. An animal that walks on the soles of its feet.\nBears and humans are plantigrades. Planti (sole) + grade (walk).",
     example:"A: L'ours est un plantigrade.\nB: C'est pour ca qu'il laisse des empreintes si grandes.",
     exampleSrc:"A: The bear is a plantigrade.\nB: That's why it leaves such large footprints.",
     funFact:"Humans are plantigrades too. Dogs and cats are digitigrades (they walk on their toes). Horses are unguligrades (on hooves)."},

    {type:"teach", trg:"planer", src:"to glide, to hover", pos:"verb", gender:null,
     note:"Regular -er verb. To fly without engine power, or to float above.\nAlso slang: planer = to be spaced out or high.",
     example:"A: L'aigle plane au-dessus de la vallee.\nB: C'est un spectacle magnifique a observer.",
     exampleSrc:"A: The eagle glides above the valley.\nB: It's a magnificent sight to watch.",
     funFact:"In French slang, 'tu planes completement' means you're totally out of it. The image is floating disconnected from reality."},

    {type:"teach", trg:"la decouverte", src:"the discovery", pos:"noun", gender:"f",
     note:"Feminine noun. Finding something new or unknown.\nPartir a la decouverte de = to go exploring.",
     example:"A: Cette decouverte a bouleverse la medecine.\nB: Le vaccin a sauve des millions de vies.",
     exampleSrc:"A: This discovery revolutionized medicine.\nB: The vaccine saved millions of lives.",
     funFact:"Pasteur's discoveries are France's greatest scientific pride. His name is on streets, schools, and the Pasteur Institute worldwide."},

    {type:"teach", trg:"l'acceleration", src:"acceleration", pos:"noun", gender:"f",
     note:"Feminine noun. The increase in speed or rate of change.\nAcceleration de la croissance = acceleration of growth.",
     example:"A: L'acceleration du rechauffement climatique est alarmante.\nB: Les mesures actuelles sont insuffisantes.",
     exampleSrc:"A: The acceleration of global warming is alarming.\nB: Current measures are insufficient.",
     funFact:"France's TGV trains accelerate to 320 km/h in regular service. The speed record for a train on rails (574 km/h) belongs to a French TGV."},

    {type:"teach", trg:"un guet-apens", src:"an ambush, a trap", pos:"noun", gender:"m",
     note:"Masculine noun. A planned surprise attack or treacherous trap.\nGuet (watch) + apens (from 'a pense' = premeditated). Plural: des guets-apens.",
     example:"A: C'etait un veritable guet-apens.\nB: Ils sont tombes dans le piege sans se mefier.",
     exampleSrc:"A: It was a real ambush.\nB: They fell into the trap without suspecting anything.",
     funFact:"Guet-apens is a legal term in French criminal law. It implies premeditation, which increases the severity of sentencing."},

    {type:"mc", q:"Qui a invente le systeme metrique?",
     opts:["La France revolutionnaire","L'Angleterre industrielle","L'Allemagne scientifique","L'Italie de la Renaissance"],
     ans:"La France revolutionnaire",
     hint:"The metric system was created during a famous revolution in 1795"},

    {type:"fb", s:"L'aigle {1} au-dessus des montagnes.",
     a:["plane"], opts:["plane","parachute","detone","accelere"],
     hint:"The verb for flying without engine power, gliding on air currents",
     sSrc:"The eagle {1} above the mountains."},

    {type:"mc", q:"Qu'est-ce qu'un plantigrade?",
     opts:["Un animal a sang froid","Un animal qui marche sur la plante des pieds","Un animal qui vit dans les plantes","Un herbivore"],
     ans:"Un animal qui marche sur la plante des pieds",
     hint:"Planti refers to the sole of the foot, grade means walking"},

    {type:"match", pairs:[
      {trg:"le decimetre", src:"decimeter"},
      {trg:"la detonation", src:"detonation"},
      {trg:"le parachute", src:"parachute"},
      {trg:"l'acceleration", src:"acceleration"}
    ]},

    {type:"fb", s:"Veuillez {1} chaque page du contrat.",
     a:["parapher"], opts:["parapher","planer","detoner","accelerer"],
     hint:"The verb for putting your initials on a document to validate it",
     sSrc:"Please {1} each page of the contract."},

    {type:"mc", q:"En argot, 'planer' signifie:",
     opts:["Etudier serieusement","Travailler dur","Etre dans un etat second","Voler rapidement"],
     ans:"Etre dans un etat second",
     hint:"The slang meaning extends the image of floating disconnected from reality"},

    {type:"fb", s:"C'etait un {1}, ils n'avaient aucune chance de s'echapper.",
     a:["guet-apens"], opts:["guet-apens","parachute","decimetre","plantigrade"],
     hint:"The compound noun for a premeditated ambush or trap",
     sSrc:"It was a {1}, they had no chance of escaping."},

    {type:"mc", q:"Le TGV francais a atteint quel record de vitesse?",
     opts:["320 km/h","450 km/h","700 km/h","574 km/h"],
     ans:"574 km/h",
     hint:"The record speed far exceeds the regular commercial service speed"},

    {type:"fb", s:"Cette {1} scientifique a change le monde.",
     a:["decouverte"], opts:["decouverte","detonation","acceleration","paraphe"],
     hint:"The feminine noun for finding something new that transforms knowledge",
     sSrc:"This scientific {1} changed the world."},

    {type:"match", pairs:[
      {trg:"un chronobiologiste", src:"a chronobiologist"},
      {trg:"un guet-apens", src:"an ambush"},
      {trg:"planer", src:"to glide"},
      {trg:"la decouverte", src:"discovery"}
    ]}
  ]
};
export default LESSON_14;
