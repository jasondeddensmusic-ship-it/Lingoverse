// French B2 Gap Lesson 18. Travel and Exploration
const LESSON_18 = {id:"frv2_b2g5_l18", title:"Voyages et exploration", icon:"🧭", xp:15, board:true, steps:[
  {type:"intro", title:"Voyages et exploration",
   desc:"Learn vocabulary for discussing travel, geography, and cultural discovery at the B2 level.",
   goals:["Learn 15 key words about travel and exploration","Discuss journeys, destinations, and cultural encounters","Use travel and geography vocabulary"]},

  {type:"teach", trg:"l'islandais", src:"Icelandic (language/person)", pos:"noun", gender:"m",
   note:"The language or a person from Iceland.\nAlso adjective: 'la culture islandaise'.",
   example:"A: L'islandais est une langue très ancienne.\nB: Elle a peu changé depuis les Vikings.\nA: Les Islandais peuvent lire des textes médiévaux.\nB: C'est fascinant, comme un voyage dans le temps.",
   exampleSrc:"A: Icelandic is a very old language.\nB: It has changed little since the Vikings.\nA: Icelanders can read medieval texts.\nB: It's fascinating, like a journey through time.",
   funFact:"Icelandic is the closest living language to Old Norse. Iceland has a tradition of preserving linguistic purity."},

  {type:"teach", trg:"l'algérien", src:"Algerian (person)", pos:"noun", gender:"m",
   note:"A person from Algeria. Feminine: algérienne.\nFrance has a large Algerian diaspora.",
   example:"A: La communauté algérienne en France est très importante.\nB: Les liens historiques sont profonds.\nA: La cuisine algérienne enrichit la gastronomie française.\nB: Le couscous est le plat préféré des Français!",
   exampleSrc:"A: The Algerian community in France is very large.\nB: The historical ties are deep.\nA: Algerian cuisine enriches French gastronomy.\nB: Couscous is the French people's favorite dish!",
   funFact:"Algeria was a French colony from 1830 to 1962. Couscous was voted France's favorite dish in multiple polls."},

  {type:"teach", trg:"le gaélique", src:"Gaelic", pos:"noun", gender:"m",
   note:"The Celtic languages of Ireland and Scotland.\nAlso adjective: 'la tradition gaélique'.",
   example:"A: Le gaélique est menacé de disparition.\nB: L'Irlande fait des efforts pour le préserver.\nA: Les panneaux sont bilingues là-bas.\nB: La langue fait partie de l'identité nationale.",
   exampleSrc:"A: Gaelic is threatened with extinction.\nB: Ireland is making efforts to preserve it.\nA: Signs are bilingual there.\nB: Language is part of national identity.",
   funFact:"Irish Gaelic has about 1.7 million speakers. Scotland has about 60,000 Scottish Gaelic speakers."},

  {type:"teach", trg:"le finnois", src:"Finnish (language)", pos:"noun", gender:"m",
   note:"The language of Finland. Also adjective.\nNot related to Swedish or other Scandinavian languages.",
   example:"A: Le finnois est très différent du suédois.\nB: Ce n'est pas une langue germanique?\nA: Non, c'est une langue finno-ougrienne.\nA: Comme le hongrois et l'estonien.",
   exampleSrc:"A: Finnish is very different from Swedish.\nB: Isn't it a Germanic language?\nA: No, it's a Finno-Ugric language.\nA: Like Hungarian and Estonian.",
   funFact:"Finnish has 15 grammatical cases (French has none!). It is related to Hungarian and Estonian."},

  {type:"teach", trg:"s'absenter", src:"to be absent / to leave temporarily", pos:"verb", gender:null,
   note:"To leave a place temporarily. Reflexive verb.\nFormal register.",
   example:"A: Je dois m'absenter quelques minutes.\nB: D'accord, je t'attends ici.\nA: Je reviens tout de suite.\nB: Prends ton temps, il n'y a pas de presse.",
   exampleSrc:"A: I need to step out for a few minutes.\nB: Okay, I'll wait for you here.\nA: I'll be right back.\nB: Take your time, there's no rush.",
   funFact:"From 'ab-' (away) + 'sent' (being). 'S'absenter' is more formal than simply 'partir' (to leave)."},

  {type:"teach", trg:"le demi-tour", src:"the U-turn / about-face", pos:"noun", gender:"m",
   note:"Turning around to go back the way you came.\n'Faire demi-tour' = to turn around.",
   example:"A: On a fait demi-tour parce que la route était bloquée.\nB: Un accident?\nA: Non, des travaux. Il n'y avait pas de déviation.\nB: C'est frustrant quand on est pressé.",
   exampleSrc:"A: We made a U-turn because the road was blocked.\nB: An accident?\nA: No, roadwork. There was no detour.\nB: It's frustrating when you're in a hurry.",
   funFact:"Compound: 'demi' (half) + 'tour' (turn). A 'demi-tour' is exactly 180 degrees."},

  {type:"teach", trg:"arriver avant", src:"to arrive before / to beat someone there", pos:"verb", gender:null,
   note:"To reach a destination before someone else.\nA common travel expression.",
   example:"A: On est arrivés avant les autres.\nB: Le train était en avance?\nA: Non, on a pris un raccourci.\nB: Bien joué, on a le temps de s'installer.",
   exampleSrc:"A: We arrived before the others.\nB: Was the train early?\nA: No, we took a shortcut.\nB: Well played, we have time to settle in.",
   funFact:"'Arriver' comes from Latin 'ad ripam' (to the riverbank). Originally meant reaching the shore after a voyage."},

  {type:"teach", trg:"le cinquantième", src:"the fiftieth", pos:"noun", gender:null,
   note:"Ordinal number: 50th.\nUsed for anniversaries, editions, and rankings.",
   example:"A: C'est le cinquantième anniversaire du festival.\nB: Un demi-siècle de musique!\nA: La programmation est exceptionnelle cette année.\nB: Ils ont invité les plus grands artistes.",
   exampleSrc:"A: It's the fiftieth anniversary of the festival.\nB: Half a century of music!\nA: The lineup is exceptional this year.\nB: They invited the greatest artists.",
   funFact:"From 'cinquante' + '-ième'. French ordinal numbers add '-ième' to the cardinal (except 'premier')."},

  {type:"teach", trg:"dans l'absolu", src:"in absolute terms / ideally", pos:"adv", gender:null,
   note:"Speaking theoretically, without considering practical constraints.\nFormal expression.",
   example:"A: Dans l'absolu, tout le monde devrait voyager.\nB: Mais tout le monde n'en a pas les moyens.\nA: C'est vrai, le coût est un obstacle.\nB: Des solutions accessibles existent pourtant.",
   exampleSrc:"A: In absolute terms, everyone should travel.\nB: But not everyone can afford it.\nA: True, cost is an obstacle.\nB: Yet accessible solutions exist.",
   funFact:"Literally: 'in the absolute'. Used to distinguish theoretical ideals from practical realities."},

  {type:"mc", q:"Que signifie 'faire demi-tour'?",
   opts:["Tourner pour revenir en arrière","Tourner à gauche","Continuer tout droit","S'arrêter sur place"],
   ans:"Tourner pour revenir en arrière",
   hint:"A 180-degree turn to go back the way you came"},

  {type:"fb", s:"Le {1} est une langue finno-ougrienne, pas germanique.",
   a:["finnois"], opts:["finnois","gaélique","islandais","flamand"],
   hint:"The language of Finland, related to Hungarian and Estonian",
   sSrc:"{1} is a Finno-Ugric language, not Germanic."},

  {type:"teach", trg:"ici et là", src:"here and there", pos:"adv", gender:null,
   note:"In various places, scattered around.\nA common expression in descriptions.",
   example:"A: On voit des fleurs sauvages ici et là.\nB: Le paysage est magnifique.\nA: La nature reprend ses droits.\nB: C'est apaisant de se promener ici.",
   exampleSrc:"A: You can see wildflowers here and there.\nB: The landscape is magnificent.\nA: Nature is reclaiming its rights.\nB: It's soothing to walk here.",
   funFact:"A simple but elegant expression. 'Ci et là' is a more literary variant of the same idea."},

  {type:"teach", trg:"de chez soi", src:"from one's own home", pos:"noun", gender:null,
   note:"From the comfort of home. Used with working, ordering, traveling virtually.",
   example:"A: On peut visiter des musées de chez soi.\nB: Les visites virtuelles sont incroyables.\nA: Ce n'est pas pareil qu'en vrai.\nB: Non, mais c'est un bon début.",
   exampleSrc:"A: You can visit museums from home.\nB: Virtual tours are incredible.\nA: It's not the same as in person.\nB: No, but it's a good start.",
   funFact:"'Chez soi' literally means 'at one's own place'. 'Travailler de chez soi' = to work from home."},

  {type:"teach", trg:"l'itou", src:"likewise / ditto", pos:"adv", gender:null,
   note:"An old-fashioned or playful way to say 'likewise' or 'me too'.\nInformal and charming.",
   example:"A: Je suis fatigué du voyage.\nB: Moi itou!\nA: On se repose avant de sortir?\nB: Bonne idée, une petite sieste s'impose.",
   exampleSrc:"A: I'm tired from the trip.\nB: Me too!\nA: Shall we rest before going out?\nB: Good idea, a little nap is in order.",
   funFact:"From Old French 'iteu' (such/likewise). Charming and playful, used more in speech than writing."},

  {type:"mc", q:"La communauté algérienne en France est liée à quel fait historique?",
   opts:["La Révolution française","La colonisation française de l'Algérie","Le commerce des épices","Les Croisades"],
   ans:"La colonisation française de l'Algérie",
   hint:"Algeria was under French rule from 1830 to 1962, creating deep historical ties"},

  {type:"fb", s:"Je dois {1} quelques minutes, je reviens tout de suite.",
   a:["m'absenter"], opts:["m'absenter","m'extasier","m'interposer","m'inscrire"],
   hint:"To leave temporarily for a short time",
   sSrc:"I need to {1} for a few minutes, I'll be right back."},

  {type:"match", pairs:[
    {trg:"le demi-tour", src:"U-turn"},
    {trg:"ici et là", src:"here and there"},
    {trg:"de chez soi", src:"from home"},
    {trg:"dans l'absolu", src:"in absolute terms"},
    {trg:"itou", src:"likewise / ditto"}
  ]},

  {type:"mc", q:"Que peut-on faire 'de chez soi' grâce à la technologie?",
   opts:["Goûter la cuisine locale","Sentir l'air marin","Visiter des musées virtuellement","Nager dans l'océan"],
   ans:"Visiter des musées virtuellement",
   hint:"Technology allows experiences from home that previously required travel"},

  {type:"fb", s:"C'est le {1} anniversaire du festival, un demi-siècle de musique.",
   a:["cinquantième"], opts:["cinquantième","centurion","cinquième","cinquante"],
   hint:"The ordinal number for 50, marking half a century",
   sSrc:"It's the {1} anniversary of the festival, half a century of music."},

  {type:"drag_fill", s:"{1}, tout le monde devrait voyager, mais {2} les moyens manquent.",
   blanks:{"1":"Dans l'absolu","2":"en pratique"},
   pool:["Dans l'absolu","en pratique","De chez soi","Ici et là"],
   hint:"Theoretically yes, but in reality the means are lacking"},

  {type:"mc", q:"Que signifie 'itou' en français?",
   opts:["Jamais","Toujours","Autrement","Également, pareillement"],
   ans:"Également, pareillement",
   hint:"An old-fashioned, playful way to say 'me too' or 'likewise'"}
]};
export default LESSON_18;
