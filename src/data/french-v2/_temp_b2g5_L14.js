// French B2 Gap Lesson 14. Heritage and History
const LESSON_14 = {id:"frv2_b2g5_l14", title:"Patrimoine et histoire", icon:"🏰", xp:15, board:true, steps:[
  {type:"intro", title:"Patrimoine et histoire",
   desc:"Learn vocabulary for discussing heritage, historical events, and collective memory at B2 level.",
   goals:["Learn 15 key words about heritage and history","Discuss historical events and their legacy","Use formal vocabulary for historical topics"]},

  {type:"teach", trg:"le garde-chasse", src:"the gamekeeper", pos:"noun", gender:"m",
   note:"A person who protects wildlife on an estate.\nPlural: gardes-chasses.",
   example:"A: Le garde-chasse surveille le domaine depuis vingt ans.\nB: Il connaît chaque arbre de la forêt.\nA: C'est un métier en voie de disparition?\nB: Non, il reste essentiel pour la protection de la nature.",
   exampleSrc:"A: The gamekeeper has watched over the estate for twenty years.\nB: He knows every tree in the forest.\nA: Is it a dying profession?\nB: No, it remains essential for nature protection.",
   funFact:"Compound: 'garde' (guard) + 'chasse' (hunt). A figure in French rural life and literature."},

  {type:"teach", trg:"le café-tabac", src:"the tobacco shop/cafe", pos:"noun", gender:"m",
   note:"A French cafe that also sells tobacco and lottery tickets.\nA cultural institution in France.",
   example:"A: On se retrouve au café-tabac du coin?\nB: D'accord, celui de la place du marché.\nA: Je vais y acheter un journal aussi.\nB: C'est pratique, on trouve tout là-bas.",
   exampleSrc:"A: Shall we meet at the corner tobacco shop?\nB: Okay, the one on the market square.\nA: I'll buy a newspaper there too.\nB: It's convenient, you find everything there.",
   funFact:"A distinctly French institution combining coffee, tobacco, newspapers, and lottery. Look for the red diamond sign."},

  {type:"teach", trg:"le centurion", src:"the centurion", pos:"noun", gender:"m",
   note:"A Roman military officer commanding 100 soldiers.\nUsed in history and figuratively.",
   example:"A: Les centurions commandaient cent soldats romains.\nB: Ils étaient le pilier de l'armée.\nA: La discipline romaine était légendaire.\nB: C'est grâce aux centurions.",
   exampleSrc:"A: Centurions commanded one hundred Roman soldiers.\nB: They were the backbone of the army.\nA: Roman discipline was legendary.\nB: That's thanks to the centurions.",
   funFact:"From Latin 'centurio' (leader of a hundred). France's Roman heritage is visible in cities like Nîmes and Arles."},

  {type:"teach", trg:"la béarnaise", src:"the Bearnaise (sauce)", pos:"noun", gender:"f",
   note:"A rich butter and egg sauce from Béarn, southwest France.\nA classic of French cuisine.",
   example:"A: La béarnaise accompagne parfaitement le steak.\nB: C'est ma sauce préférée.\nA: Elle est difficile à préparer?\nB: Un peu, il faut la cuire à feu doux.",
   exampleSrc:"A: Bearnaise sauce goes perfectly with steak.\nB: It's my favorite sauce.\nA: Is it difficult to prepare?\nB: A little, you need to cook it over low heat.",
   funFact:"Named after Béarn, home region of King Henri IV. The sauce was created in Paris in 1836."},

  {type:"teach", trg:"la grandeur", src:"the grandeur / greatness", pos:"noun", gender:"f",
   note:"Impressiveness, nobility, or great size.\nUsed for empires, people, and ambitions.",
   example:"A: La grandeur de Versailles impressionne tous les visiteurs.\nB: Louis XIV voulait montrer sa puissance.\nA: C'est un symbole de l'histoire française.\nB: Et aussi de la démesure royale.",
   exampleSrc:"A: The grandeur of Versailles impresses all visitors.\nB: Louis XIV wanted to show his power.\nA: It's a symbol of French history.\nB: And also of royal excess.",
   funFact:"From 'grand' + '-eur'. De Gaulle spoke of 'la grandeur de la France' as a political ideal."},

  {type:"teach", trg:"le flamand", src:"Flemish (language/person)", pos:"noun", gender:"m",
   note:"The Dutch-speaking people of Belgium and northern France.\nAlso the language they speak.",
   example:"A: Le flamand est parlé dans le nord de la France.\nB: C'est une variante du néerlandais.\nA: La frontière linguistique est ancienne.\nB: Oui, elle date du Moyen Âge.",
   exampleSrc:"A: Flemish is spoken in northern France.\nB: It's a variant of Dutch.\nA: The linguistic border is old.\nB: Yes, it dates from the Middle Ages.",
   funFact:"French Flanders has Flemish-speaking communities around Dunkirk. The name comes from 'Flanders'."},

  {type:"teach", trg:"le héliotrope", src:"the heliotrope", pos:"noun", gender:"m",
   note:"A plant that turns toward the sun.\nAlso a pale purple color.",
   example:"A: Les héliotropes suivent le soleil toute la journée.\nB: C'est fascinant, comme les tournesols.\nA: Le parfum est délicieux.\nB: On l'utilisait beaucoup en parfumerie au dix-neuvième siècle.",
   exampleSrc:"A: Heliotropes follow the sun all day.\nB: It's fascinating, like sunflowers.\nA: The fragrance is delicious.\nB: It was widely used in perfumery in the nineteenth century.",
   funFact:"From Greek 'helios' (sun) + 'tropos' (turning). A favorite of Victorian-era French gardens."},

  {type:"teach", trg:"herculéen", src:"Herculean", pos:"adj", gender:null,
   note:"Requiring enormous strength or effort.\nFrom the Greek hero Hercules. Feminine: herculéenne.",
   example:"A: La restauration du château est un effort herculéen.\nB: Le chantier dure depuis cinq ans.\nA: Le budget a été dépassé trois fois.\nB: Mais le résultat sera magnifique.",
   exampleSrc:"A: The restoration of the castle is a Herculean effort.\nB: The construction site has lasted five years.\nA: The budget was exceeded three times.\nB: But the result will be magnificent.",
   funFact:"From 'Hercule' (Hercules). The French form preserves the accent: herculéen."},

  {type:"teach", trg:"la crèperie", src:"the creperie", pos:"noun", gender:"f",
   note:"A restaurant specializing in crepes.\nEspecially associated with Brittany.",
   example:"A: Cette crèperie sert les meilleures galettes de la ville.\nB: Avec du cidre breton?\nA: Bien sûr, c'est la tradition.\nB: La Bretagne est le paradis des crèpes.",
   exampleSrc:"A: This creperie serves the best galettes in town.\nB: With Breton cider?\nA: Of course, it's the tradition.\nB: Brittany is a crepe paradise.",
   funFact:"From 'crèpe' + '-erie' (place for). Breton galettes use buckwheat; crèpes use regular wheat flour."},

  {type:"mc", q:"Qu'est-ce qu'un café-tabac?",
   opts:["Un café qui vend aussi du tabac et des journaux","Un type de café aromatisé","Un musée du tabac","Un restaurant gastronomique"],
   ans:"Un café qui vend aussi du tabac et des journaux",
   hint:"A distinctly French institution combining coffee service with tobacco and newspaper sales"},

  {type:"fb", s:"La {1} de Versailles impressionne tous les visiteurs.",
   a:["grandeur"], opts:["grandeur","galère","jointure","guise"],
   hint:"Impressiveness and nobility on a grand scale",
   sSrc:"The {1} of Versailles impresses all visitors."},

  {type:"teach", trg:"le grimage", src:"the stage makeup", pos:"noun", gender:"m",
   note:"Theatrical makeup application. From 'grimer' (to apply stage makeup).\nUsed in theater and cinema.",
   example:"A: Le grimage des acteurs a pris trois heures.\nB: C'est un art en soi.\nA: Le résultat est bluffant.\nB: On ne les reconnaît plus du tout.",
   exampleSrc:"A: The actors' stage makeup took three hours.\nB: It's an art in itself.\nA: The result is stunning.\nB: You can't recognize them at all anymore.",
   funFact:"From 'grimer' (to make up for stage). Not to be confused with 'maquillage' (everyday makeup)."},

  {type:"teach", trg:"adopté", src:"adopted", pos:"adj", gender:null,
   note:"Officially taken as one's own child.\nFeminine: adoptée. Also used for ideas and customs.",
   example:"A: Elle a été adoptée à l'âge de deux ans.\nB: Ses parents adoptifs sont merveilleux.\nA: La France est son pays adopté.\nB: Elle s'y sent chez elle depuis toujours.",
   exampleSrc:"A: She was adopted at the age of two.\nB: Her adoptive parents are wonderful.\nA: France is her adopted country.\nB: She has always felt at home there.",
   funFact:"From Latin 'adoptare' (to choose for oneself). 'Pays adopté' means adopted country."},

  {type:"teach", trg:"fraîchement", src:"freshly / recently", pos:"adv", gender:null,
   note:"Just recently, or with coolness.\n'Fraîchement diplômé' = freshly graduated.",
   example:"A: Les murs sont fraîchement repeints.\nB: La peinture est encore humide?\nA: Non, mais l'odeur est encore forte.\nB: Ouvre les fenêtres pour aérer.",
   exampleSrc:"A: The walls are freshly repainted.\nB: Is the paint still wet?\nA: No, but the smell is still strong.\nB: Open the windows to air it out.",
   funFact:"From 'frais/fraîche' (fresh/cool) + '-ment'. 'Accueilli fraîchement' means received coolly."},

  {type:"mc", q:"Quel effort est qualifié de 'herculéen'?",
   opts:["Un effort collectif","Un effort qui demande une force énorme","Un effort quotidien","Un effort intellectuel"],
   ans:"Un effort qui demande une force énorme",
   hint:"Named after the Greek hero known for his incredible strength"},

  {type:"fb", s:"Le {1} surveille le domaine et protège la faune sauvage.",
   a:["garde-chasse"], opts:["garde-chasse","centurion","flamand","galeriste"],
   hint:"A person employed to protect wildlife and manage a hunting estate",
   sSrc:"The {1} watches over the estate and protects wildlife."},

  {type:"match", pairs:[
    {trg:"la crèperie", src:"creperie"},
    {trg:"herculéen", src:"Herculean"},
    {trg:"le centurion", src:"centurion"},
    {trg:"fraîchement", src:"freshly / recently"},
    {trg:"le grimage", src:"stage makeup"}
  ]},

  {type:"mc", q:"D'où vient la sauce béarnaise?",
   opts:["De Normandie","De Provence","De la région du Béarn, dans le sud-ouest","De Paris"],
   ans:"De la région du Béarn, dans le sud-ouest",
   hint:"Named after a region in southwestern France, home of King Henri IV"},

  {type:"fb", s:"Elle a été {1} à l'âge de deux ans par une famille aimante.",
   a:["adoptée"], opts:["adoptée","inhabitée","humiliée","inscrite"],
   hint:"Officially taken in as one's own child",
   sSrc:"She was {1} at the age of two by a loving family."},

  {type:"drag_fill", s:"Les murs sont {1} repeints et le {2} des acteurs a pris trois heures.",
   blanks:{"1":"fraîchement","2":"grimage"},
   pool:["fraîchement","grimage","grandeur","flamand"],
   hint:"Recently repainted walls and theatrical makeup that took a long time"},

  {type:"mc", q:"Le flamand est parlé dans quelle région de France?",
   opts:["Le sud de la France","L'ouest de la France","Le centre de la France","Le nord de la France"],
   ans:"Le nord de la France",
   hint:"Near the Belgian border, where Dutch-speaking communities have existed for centuries"}
]};
export default LESSON_14;
