// French B2 Gap Batch 9 — Lesson 9: Verbes Avancés I
// Advanced verbs: actions and processes

const LESSON_9 = {id:"frv2_b2g9_l9", title:"Verbes Avancés I", icon:"🔧", xp:15, board:true, steps:[
  {type:"intro", title:"Verbes Avancés I",
   desc:"Master advanced French verbs for describing physical actions, processes, and changes. These verbs add precision and color to your B2 expression.",
   goals:["Learn 20 advanced action verbs","Use reflexive and pronominal forms","Describe processes precisely"]},

  {type:"teach", trg:"s'obstiner", src:"to persist stubbornly", pos:"verb", gender:null,
   note:"Reflexive verb. S'obstiner à + infinitive.\nNegative connotation: persisting despite reason.",
   example:"A: Il s'obstine à nier les faits.\nB: Les preuves sont pourtant évidentes.",
   exampleSrc:"A: He stubbornly persists in denying the facts.\nB: The evidence is obvious, though.",
   funFact:"From Latin obstinare. Obstiné (stubborn) is the adjective. S'obstiner is always reflexive."},

  {type:"teach", trg:"pincer", src:"to pinch, to catch", pos:"verb", gender:null,
   note:"To squeeze between fingers. Also slang: se faire pincer = to get caught.\nPincement = a pinch.",
   example:"A: Elle m'a pincé le bras!\nB: C'était pour te réveiller.",
   exampleSrc:"A: She pinched my arm!\nB: It was to wake you up.",
   funFact:"Se faire pincer (to get caught) is informal but very common: 'Il s'est fait pincer par la police.'"},

  {type:"teach", trg:"paresser", src:"to laze around", pos:"verb", gender:null,
   note:"From paresseux (lazy).\nTo spend time doing nothing, being idle.",
   example:"A: J'ai paressé toute la matinée.\nB: Parfois, il faut se reposer.",
   exampleSrc:"A: I lazed around all morning.\nB: Sometimes, you need to rest.",
   funFact:"Paresse (laziness) is one of the seven deadly sins in French: les sept péchés capitaux."},

  {type:"teach", trg:"accoler", src:"to place side by side, to join", pos:"verb", gender:null,
   note:"From à + col (neck). Originally: to embrace.\nNow: to place things next to each other.",
   example:"A: On a accolé les deux mots pour former un composé.\nB: C'est un procédé courant en français.",
   exampleSrc:"A: We placed the two words side by side to form a compound.\nB: It's a common process in French.",
   funFact:"Accolade (the embrace, or the curly bracket) comes from the same root: necks touching."},

  {type:"teach", trg:"s'agglutiner", src:"to cluster together, to crowd", pos:"verb", gender:null,
   note:"Reflexive. From Latin agglutinare (to glue together).\nPeople crowding or sticking together.",
   example:"A: Les curieux s'agglutinaient devant la vitrine.\nB: Le magasin venait d'ouvrir ses portes.",
   exampleSrc:"A: The onlookers were crowding in front of the shop window.\nB: The store had just opened its doors.",
   funFact:"Agglutinante describes languages that glue morphemes together (like Turkish or Japanese)."},

  {type:"teach", trg:"contreficher (se)", src:"to not care at all", pos:"verb", gender:null,
   note:"Reflexive: s'en contreficher.\nVery informal. Stronger than 's'en ficher'.",
   example:"A: Il s'en contrefiche de ce que pensent les autres.\nB: C'est un homme très indépendant.",
   exampleSrc:"A: He couldn't care less what others think.\nB: He's a very independent man.",
   funFact:"S'en ficher > s'en contreficher > s'en foutre: increasing levels of not caring (and rudeness)."},

  {type:"teach", trg:"crémer", src:"to cream, to add cream", pos:"verb", gender:null,
   note:"From crème (cream).\nTo add cream to a dish or drink.",
   example:"A: Tu veux crémer ton café?\nB: Oui, un nuage de lait, s'il te plaît.",
   exampleSrc:"A: Do you want cream in your coffee?\nB: Yes, a splash of milk, please.",
   funFact:"Un café crème (shortened to 'un crème') is the classic French coffee with milk."},

  {type:"teach", trg:"cuber", src:"to cube (math), to repeat a year (slang)", pos:"verb", gender:null,
   note:"Math: to raise to the third power.\nSlang: to repeat the second year of prep school.",
   example:"A: Il a cubé pour intégrer Polytechnique.\nB: Trois ans de prépa, c'est éprouvant.",
   exampleSrc:"A: He repeated his second prep year to get into Polytechnique.\nB: Three years of prep is exhausting.",
   funFact:"In French student slang: carré = second year, cube = repeating it. From squaring and cubing."},

  {type:"teach", trg:"affubler", src:"to dress up ridiculously", pos:"verb", gender:null,
   note:"To dress someone in a ridiculous or inappropriate outfit.\nAlways pejorative.",
   example:"A: On l'avait affublé d'un costume ridicule.\nB: Il ne pouvait pas refuser au carnaval.",
   exampleSrc:"A: They had dressed him up in a ridiculous costume.\nB: He couldn't refuse at the carnival.",
   funFact:"From Old French afubler (to put on a cloak). The negative meaning developed over centuries."},

  {type:"mc", q:"'S'obstiner' a une connotation:", opts:["Positive: persévérer avec courage","Négative: insister malgré la raison","Neutre: continuer normalement","Positive: être déterminé"], ans:"Négative: insister malgré la raison",
   hint:"Unlike persévérer which is positive, this verb implies irrational stubbornness."},

  {type:"teach", trg:"dépeigner", src:"to mess up someone's hair", pos:"verb", gender:null,
   note:"Dé- (undo) + peigner (to comb).\nTo dishevel, to make hair messy.",
   example:"A: Le vent m'a complètement dépeigné.\nB: Tu devrais te recoiffer avant la réunion.",
   exampleSrc:"A: The wind completely messed up my hair.\nB: You should fix your hair before the meeting.",
   funFact:"Dé- reverses the action: peigner (to comb) > dépeigner (to uncombed). Very logical!"},

  {type:"teach", trg:"mansarder", src:"to add a mansard roof", pos:"verb", gender:null,
   note:"From mansarde (attic room with sloped ceiling).\nTo convert a roof into living space.",
   example:"A: Ils ont mansardé les combles pour gagner de l'espace.\nB: C'est un bel appartement maintenant.",
   exampleSrc:"A: They converted the attic with a mansard roof to gain space.\nB: It's a lovely apartment now.",
   funFact:"Named after architect François Mansart (1598-1666). The mansard roof is a Parisian icon."},

  {type:"teach", trg:"s'autosaisir", src:"to take up a matter on one's own initiative", pos:"verb", gender:null,
   note:"Auto- (self) + saisir (to seize).\nLegal: when a body investigates without being asked.",
   example:"A: Le juge s'est autosaisi de l'affaire.\nB: Personne n'avait porté plainte.",
   exampleSrc:"A: The judge took up the case on his own initiative.\nB: Nobody had filed a complaint.",
   funFact:"This verb is specific to French legal and administrative language. Very formal."},

  {type:"teach", trg:"narcotiser", src:"to drug, to narcotize", pos:"verb", gender:null,
   note:"From narcotique (narcotic).\nTo put someone under the influence of a drug.",
   example:"A: Le voleur a narcotisé sa victime.\nB: Elle ne s'est rendu compte de rien.",
   exampleSrc:"A: The thief drugged his victim.\nB: She didn't notice anything.",
   funFact:"From Greek narke (numbness), which also gives us narcissism (Narcissus fell into a stupor)."},

  {type:"fb", s:"Les curieux {1} devant le lieu de l'accident.", a:["s'agglutinaient"], opts:["s'agglutinaient","s'obstinaient","se contrefichaient","paressaient"],
   hint:"Crowding together, pressing close. From the Latin for gluing together.",
   sSrc:"The onlookers were {1} in front of the accident scene."},

  {type:"teach", trg:"flûter", src:"to play the flute, to drink flutes", pos:"verb", gender:null,
   note:"From flûte (flute).\nPlaying the instrument, or drinking champagne from flutes.",
   example:"A: On a flûté du champagne toute la soirée.\nB: C'était un anniversaire mémorable.",
   exampleSrc:"A: We drank flutes of champagne all evening.\nB: It was a memorable birthday.",
   funFact:"A flûte is both a musical instrument and a tall, thin champagne glass."},

  {type:"mc", q:"'Affubler quelqu'un' signifie:", opts:["L'habiller élégamment","L'habiller de manière ridicule","Le complimenter","Le punir"], ans:"L'habiller de manière ridicule",
   hint:"This verb always implies that the outfit is inappropriate or laughable."},

  {type:"fb", s:"Il {1} à nier malgré les preuves.", a:["s'obstine"], opts:["s'obstine","s'agglutine","s'autosaisit","paresse"],
   hint:"Stubbornly insisting on something despite evidence to the contrary.",
   sSrc:"He {1} in denying despite the evidence."},

  {type:"match", pairs:[
    {trg:"s'obstiner", src:"to persist stubbornly"},
    {trg:"pincer", src:"to pinch"},
    {trg:"paresser", src:"to laze around"},
    {trg:"accoler", src:"to place side by side"}
  ]},

  {type:"mc", q:"En argot étudiant, 'cuber' signifie:", opts:["Calculer des volumes","Redoubler la deuxième année de prépa","Jouer aux dés","Construire un cube"], ans:"Redoubler la deuxième année de prépa",
   hint:"Carré = second year of prep school. Cube = doing it again. Math metaphor."},

  {type:"fb", s:"Le vent l'a complètement {1}.", a:["dépeigné"], opts:["dépeigné","narcotisé","mansardé","accolé"],
   hint:"Undid the combing. Dé- reverses peigner (to comb). Made hair messy.",
   sSrc:"The wind completely {1} him."},

  {type:"match", pairs:[
    {trg:"affubler", src:"to dress ridiculously"},
    {trg:"dépeigner", src:"to mess up hair"},
    {trg:"narcotiser", src:"to drug"},
    {trg:"s'autosaisir", src:"to take up on own initiative"}
  ]}
]};

export default LESSON_9;
