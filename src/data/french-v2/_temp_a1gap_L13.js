const LESSON_13 = {
  id:"frv2_a1gap_l13", title:"Bouger et se déplacer", icon:"\u{1F6B6}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Bouger et se déplacer",
     desc:"Physical actions and movement. Learn to express sitting down, stretching out, approaching, catching, and more.",
     goals:["Learn 20 physical movement verbs","Describe body actions and gestures","Give and follow movement instructions"]},

    {type:"teach", trg:"asseoir", src:"to sit down", pos:"verb", gender:null,
     note:"Usually reflexive: 's'asseoir'. Irregular. Very common verb.",
     example:"A: Tu veux t'asseoir ?\nB: Oui, je suis fatigué.",
     exampleSrc:"A: Do you want to sit down?\nB: Yes, I'm tired.",
     funFact:"'Asseyez-vous' (sit down, formal) is what every French teacher says at the start of class."},

    {type:"teach", trg:"allonger", src:"to extend, to lie down", pos:"verb", gender:null,
     note:"Regular -er verb. Reflexive 's'allonger' = to lie down.",
     example:"A: Tu veux t'allonger un peu ?\nB: Oui, je suis épuisé.",
     exampleSrc:"A: Do you want to lie down a bit?\nB: Yes, I'm exhausted.",
     funFact:"From 'long' (long). Literally 'to make longer'. When you lie down, you extend your body."},

    {type:"teach", trg:"approcher", src:"to approach, to come closer", pos:"verb", gender:null,
     note:"Regular -er verb. Reflexive: 's'approcher de'.",
     example:"A: Approche-toi, je vais te montrer.\nB: D'accord, je viens.",
     exampleSrc:"A: Come closer, I'll show you.\nB: Okay, I'm coming.",
     funFact:"'Approcher' can also mean 'to approximate': 'le résultat approche le million' (the result nears a million)."},

    {type:"teach", trg:"accompagner", src:"to accompany, to go with", pos:"verb", gender:null,
     note:"Regular -er verb. To go along with someone.",
     example:"A: Tu m'accompagnes au magasin ?\nB: Bien sûr, j'arrive.",
     exampleSrc:"A: Will you come with me to the store?\nB: Of course, I'm coming.",
     funFact:"In music, 'accompagner' means to play backup for a singer. The pianist accompanies the vocalist."},

    {type:"teach", trg:"attacher", src:"to tie, to fasten", pos:"verb", gender:null,
     note:"Regular -er verb. Used for seatbelts, laces, and emotional bonds.",
     example:"A: Attache ta ceinture !\nB: Oui, c'est fait.",
     exampleSrc:"A: Fasten your seatbelt!\nB: Yes, done.",
     funFact:"'S'attacher à quelqu'un' means to become attached to someone emotionally. From physical to emotional."},

    {type:"mc",
     q:"Quel verbe signifie 'to sit down' ?",
     opts:["s'asseoir","s'allonger","s'approcher","s'attacher"],
     ans:"s'asseoir",
     hint:"This reflexive irregular verb is what you do when you take a seat."},

    {type:"teach", trg:"arracher", src:"to tear out, to pull out", pos:"verb", gender:null,
     note:"Regular -er verb. Forceful removal action.",
     example:"A: Il faut arracher les mauvaises herbes.\nB: D'accord, je m'en occupe.",
     exampleSrc:"A: We need to pull out the weeds.\nB: Okay, I'll take care of it.",
     funFact:"'Arracher une dent' means to pull out a tooth. French dentists still use this dramatic verb."},

    {type:"teach", trg:"arranger", src:"to arrange, to fix", pos:"verb", gender:null,
     note:"Regular -er verb. To organize or to repair/solve a problem.",
     example:"A: Ça ne marche pas.\nB: Ne t'inquiète pas, je vais arranger ça.",
     exampleSrc:"A: It doesn't work.\nB: Don't worry, I'll fix it.",
     funFact:"'Ça m'arrange' means 'that works for me' or 'that suits me'. Very common in scheduling."},

    {type:"teach", trg:"arrondir", src:"to round, to round off", pos:"verb", gender:null,
     note:"Regular -ir verb. To make round or to round a number.",
     example:"A: On arrondit à dix euros ?\nB: Oui, c'est plus simple.",
     exampleSrc:"A: Shall we round it to ten euros?\nB: Yes, it's simpler.",
     funFact:"'Arrondir ses fins de mois' means to supplement your income, literally 'rounding off your month-ends'."},

    {type:"teach", trg:"appuyer", src:"to press, to lean", pos:"verb", gender:null,
     note:"Stem-changing verb (appuie). To push a button or lean against.",
     example:"A: Appuie sur le bouton vert.\nB: Celui-là ? D'accord.",
     exampleSrc:"A: Press the green button.\nB: This one? Okay.",
     funFact:"'Appuyer sur la détente' means to pull the trigger. 'Appuyer' always involves pressing or pushing."},

    {type:"fb",
     s:"{1}-toi, il faut mettre ta ceinture de sécurité.",
     a:["Attache"],
     opts:["Attache","Approche","Allonge","Assieds"],
     hint:"This verb means to fasten or tie something, commonly used for seatbelts.",
     sSrc:"{1} yourself, you need to put on your seatbelt."},

    {type:"teach", trg:"agiter", src:"to shake, to wave", pos:"verb", gender:null,
     note:"Regular -er verb. Physical shaking or emotional stirring.",
     example:"A: Agite bien la bouteille avant de servir.\nB: Comme ça ?",
     exampleSrc:"A: Shake the bottle well before serving.\nB: Like this?",
     funFact:"Medicine labels say 'agiter avant emploi' (shake before use). You see this phrase daily."},

    {type:"teach", trg:"abaisser", src:"to lower, to bring down", pos:"verb", gender:null,
     note:"Regular -er verb. From 'bas' (low). To move something downward.",
     example:"A: Abaisse la poignée pour ouvrir.\nB: Ah oui, ça marche !",
     exampleSrc:"A: Lower the handle to open.\nB: Oh yes, it works!",
     funFact:"'S'abaisser' (reflexive) means to lower oneself, either physically crouching or figuratively humbling oneself."},

    {type:"teach", trg:"abriter", src:"to shelter, to house", pos:"verb", gender:null,
     note:"Regular -er verb. From 'abri' (shelter). To provide protection.",
     example:"A: Cet arbre nous abrite de la pluie.\nB: Oui, restons ici.",
     exampleSrc:"A: This tree shelters us from the rain.\nB: Yes, let's stay here.",
     funFact:"Museums often 'abritent' (house) famous collections. The Louvre abrite the Mona Lisa."},

    {type:"teach", trg:"abîmer", src:"to damage, to ruin", pos:"verb", gender:null,
     note:"Regular -er verb. To cause damage or wear.",
     example:"A: Fais attention, tu vas abîmer la table !\nB: Pardon, je fais attention.",
     exampleSrc:"A: Be careful, you'll damage the table!\nB: Sorry, I'll be careful.",
     funFact:"The circumflex in 'abîmer' replaces an old letter S. The word was once 'abismer' from Latin 'abyssus' (abyss)."},

    {type:"mc",
     q:"Quel verbe signifie 'to shake' ?",
     opts:["agiter","abaisser","abriter","abîmer"],
     ans:"agiter",
     hint:"This verb describes vigorous back-and-forth movement, like what you do to a bottle."},

    {type:"teach", trg:"amener", src:"to bring (a person)", pos:"verb", gender:null,
     note:"Stem-changing verb (amène). Bring a PERSON to a place.",
     example:"A: Tu amènes les enfants ?\nB: Oui, ils sont dans la voiture.",
     exampleSrc:"A: Are you bringing the kids?\nB: Yes, they're in the car.",
     funFact:"'Amener' = bring a person. 'Apporter' = bring a thing. This distinction matters in careful French."},

    {type:"teach", trg:"actionner", src:"to activate, to operate", pos:"verb", gender:null,
     note:"Regular -er verb. To set a mechanism in motion.",
     example:"A: Actionne le levier pour démarrer.\nB: D'accord, je tire.",
     exampleSrc:"A: Activate the lever to start.\nB: Okay, I'm pulling.",
     funFact:"Used for mechanical devices and systems. 'Actionner l'alarme' means to trigger the alarm."},

    {type:"teach", trg:"allier", src:"to combine, to ally", pos:"verb", gender:null,
     note:"Regular -er verb. To bring together or join forces.",
     example:"A: Il faut allier travail et plaisir.\nB: C'est la meilleure façon !",
     exampleSrc:"A: We must combine work and pleasure.\nB: That's the best way!",
     funFact:"'Les Alliés' (the Allies) is the French term for the allied forces in both World Wars."},

    {type:"teach", trg:"alterner", src:"to alternate", pos:"verb", gender:null,
     note:"Regular -er verb. To switch between two things in turns.",
     example:"A: On alterne entre français et anglais ?\nB: Bonne idée !",
     exampleSrc:"A: Shall we alternate between French and English?\nB: Good idea!",
     funFact:"'Alternance' is a work-study system in France where students alternate between school and a company."},

    {type:"fb",
     s:"Tu {1} les enfants à l'école le matin ?",
     a:["amènes"],
     opts:["amènes","apportes","arranges","abrites"],
     hint:"This verb means to bring a person somewhere. It's different from bringing an object.",
     sSrc:"Do you {1} the children to school in the morning?"},

    {type:"match", pairs:[
      {trg:"asseoir", src:"to sit down"},
      {trg:"appuyer", src:"to press"},
      {trg:"agiter", src:"to shake"},
      {trg:"amener", src:"to bring (person)"},
      {trg:"abîmer", src:"to damage"}
    ]},

    {type:"mc",
     q:"Quelle est la différence entre 'amener' et 'apporter' ?",
     opts:["amener = person, apporter = thing","amener = thing, apporter = person","They mean the same","amener = formal, apporter = informal"],
     ans:"amener = person, apporter = thing",
     hint:"One verb is for living beings you guide somewhere, the other for objects you carry."},

    {type:"fb",
     s:"{1} sur le bouton rouge pour éteindre la machine.",
     a:["Appuie"],
     opts:["Appuie","Agite","Abaisse","Actionne"],
     hint:"This verb specifically means to push down on a button or surface.",
     sSrc:"{1} the red button to turn off the machine."}
  ]
};
export default LESSON_13;
