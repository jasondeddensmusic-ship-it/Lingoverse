const LESSON_14 = {
  id:"frv2_b2gap_l14", title:"Traits et attitudes", icon:"\u{1F3AD}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Traits et attitudes",
     desc:"Vocabulary for character traits, attitudes, and behavioral descriptions. From clumsiness to doubt.",
     goals:["Learn 20 character and attitude vocabulary words","Describe people's behavior in French","Express moral judgments and assessments"]},

    {type:"teach", trg:"barbare", src:"barbaric, uncivilized", pos:"adj", gender:null,
     note:"Adjective. Extremely cruel or uncivilized. Also a noun: un/une barbare.",
     example:"A: Cet acte est absolument barbare.\nB: Il faut que justice soit faite.",
     exampleSrc:"A: This act is absolutely barbaric.\nB: Justice must be done.",
     funFact:"From Greek 'barbaros', imitating foreign speech as 'bar-bar'. The Greeks called all non-Greeks barbarians."},

    {type:"teach", trg:"douteux", src:"doubtful, dubious", pos:"adj", gender:null,
     note:"Adjective. Of questionable quality or honesty. Feminine: douteuse.",
     example:"A: Cette affaire me semble douteuse.\nB: Oui, il y a des zones d'ombre.",
     exampleSrc:"A: This deal seems dubious to me.\nB: Yes, there are grey areas.",
     funFact:"From 'doute' (doubt). 'Gout douteux' means questionable taste. Very common in French criticism."},

    {type:"teach", trg:"disgracieux", src:"ungraceful, unsightly", pos:"adj", gender:null,
     note:"Adjective. Lacking grace or beauty. Feminine: disgracieuse.",
     example:"A: Ce batiment moderne est plutot disgracieux.\nB: Il jure avec le quartier historique.",
     exampleSrc:"A: This modern building is rather unsightly.\nB: It clashes with the historic neighborhood.",
     funFact:"From 'dis-' (without) + 'grace'. In French court culture, being 'en disgrace' meant losing royal favor."},

    {type:"teach", trg:"dupe", src:"deceived, fooled", pos:"adj", gender:null,
     note:"Adjective (and noun). A person who is easily fooled.",
     example:"A: Je ne suis pas dupe de son jeu.\nB: Moi non plus, il ment clairement.",
     exampleSrc:"A: I'm not fooled by his game.\nB: Me neither, he's clearly lying.",
     funFact:"From 'la duppe', an old word for the hoopoe bird, considered gullible. 'Duper' means to deceive."},

    {type:"teach", trg:"ardu", src:"arduous, difficult", pos:"adj", gender:null,
     note:"Adjective. Extremely difficult, requiring great effort. Feminine: ardue.",
     example:"A: La tache est ardue mais pas impossible.\nB: On y arrivera avec de la perseverance.",
     exampleSrc:"A: The task is arduous but not impossible.\nB: We'll manage with perseverance.",
     funFact:"From Latin 'arduus' meaning steep, high. Originally described steep mountain paths."},

    {type:"mc",
     q:"Quel adjectif signifie 'qui manque d'elegance ou de beaute' ?",
     opts:["disgracieux","douteux","barbare","ardu"],
     ans:"disgracieux",
     hint:"The prefix 'dis-' removes grace. In French court culture, it meant losing the king's favor."},

    {type:"teach", trg:"la balourdise", src:"the blunder, the clumsiness", pos:"noun", gender:"f",
     note:"Feminine noun. A clumsy mistake or tactless remark.",
     example:"A: Sa balourdise a vexe tout le monde.\nB: Il devrait tourner sa langue sept fois.",
     exampleSrc:"A: His blunder offended everyone.\nB: He should think before he speaks.",
     funFact:"From 'balourd' (oaf, lout). 'Tourner sa langue sept fois' = think seven times before speaking."},

    {type:"teach", trg:"la barbarie", src:"the barbarity, the savagery", pos:"noun", gender:"f",
     note:"Feminine noun. Extreme cruelty or the state of being uncivilized.",
     example:"A: La barbarie de ce regime est documentee.\nB: Les preuves sont accablantes.",
     exampleSrc:"A: The barbarity of this regime is documented.\nB: The evidence is overwhelming.",
     funFact:"Montesquieu used 'barbarie' to critique European colonialism. A powerful word in French political discourse."},

    {type:"teach", trg:"la bord\u00e9e", src:"the volley, the broadside", pos:"noun", gender:"f",
     note:"Feminine noun. A volley of gunfire, insults, or a nautical term for a tack.",
     example:"A: Il nous a lance une bordee d'injures.\nB: Il etait hors de lui.",
     exampleSrc:"A: He hurled a volley of insults at us.\nB: He was beside himself.",
     funFact:"Naval term: the broadside of cannons. 'Tirer une bordee' also means to go on a bender."},

    {type:"fb",
     s:"Je ne suis pas {1} de ses belles promesses.",
     a:["dupe"],
     opts:["dupe","ardu","barbare","douteux"],
     hint:"Not fooled or deceived. Named after a bird once considered gullible.",
     sSrc:"I'm not {1} by his fine promises."},

    {type:"teach", trg:"dommageable", src:"harmful, damaging", pos:"adj", gender:null,
     note:"Adjective. Causing harm or damage. Formal register.",
     example:"A: Ce retard est dommageable pour le projet.\nB: Il faut rattraper le temps perdu.",
     exampleSrc:"A: This delay is harmful to the project.\nB: We need to make up for lost time.",
     funFact:"From 'dommage' (damage/pity). 'C'est dommage' means 'that's a pity', but 'dommageable' means harmful."},

    {type:"teach", trg:"certifi\u00e9", src:"certified, qualified", pos:"adj", gender:null,
     note:"Adjective. Officially recognized or guaranteed as genuine.",
     example:"A: Ce diamant est certifie par un expert.\nB: Alors sa valeur est garantie.",
     exampleSrc:"A: This diamond is certified by an expert.\nB: Then its value is guaranteed.",
     funFact:"In French education, a 'professeur certifie' has passed the CAPES exam. Below 'agrege' in rank."},

    {type:"teach", trg:"agr\u00e9g\u00e9", src:"holder of the agregation", pos:"adj", gender:null,
     note:"Adjective. Having passed France's elite teaching exam. Also a noun.",
     example:"A: Elle est agregee de lettres modernes.\nB: C'est le concours le plus difficile.",
     exampleSrc:"A: She holds the agregation in modern literature.\nB: It's the most difficult competitive exam.",
     funFact:"The 'agregation' has an 8-15% pass rate. Being 'agrege' carries enormous prestige in France."},

    {type:"mc",
     q:"Quel mot designe une erreur maladroite ou une gaffe ?",
     opts:["une balourdise","une bord\u00e9e","une barbarie","une combine"],
     ans:"une balourdise",
     hint:"From 'balourd' meaning oaf. A clumsy mistake, especially a tactless remark."},

    {type:"teach", trg:"chantant", src:"melodious, sing-song", pos:"adj", gender:null,
     note:"Adjective. Having a musical quality. Used for accents and voices.",
     example:"A: J'adore ton accent chantant du Sud.\nB: Merci, je le garde precieusement !",
     exampleSrc:"A: I love your sing-song Southern accent.\nB: Thanks, I keep it proudly!",
     funFact:"Southern French accents are described as 'chantant'. The Marseille accent is the most famous."},

    {type:"teach", trg:"un battant", src:"a fighter, a go-getter", pos:"noun", gender:"m",
     note:"Masculine noun. A determined, resilient person. Feminine: une battante.",
     example:"A: C'est une vraie battante, elle n'abandonne jamais.\nB: Elle m'inspire beaucoup.",
     exampleSrc:"A: She's a real fighter, she never gives up.\nB: She inspires me a lot.",
     funFact:"From 'battre' (to fight). Also the clapper of a bell or the swinging part of a door."},

    {type:"teach", trg:"attard\u00e9", src:"backward, behind the times", pos:"adj", gender:null,
     note:"Adjective. Late or outdated. Can be offensive when describing people.",
     example:"A: Ces methodes sont completement attardees.\nB: Il faut moderniser le systeme.",
     exampleSrc:"A: These methods are completely outdated.\nB: We need to modernize the system.",
     funFact:"From 'attarder' (to delay). Handle with care when describing people, as it can be deeply offensive."},

    {type:"fb",
     s:"La tache est {1} mais nous avons les competences.",
     a:["ardue"],
     opts:["ardue","douteuse","disgracieuse","barbare"],
     hint:"Extremely difficult, requiring great effort. From Latin 'arduus' meaning steep.",
     sSrc:"The task is {1} but we have the skills."},

    {type:"teach", trg:"distinct", src:"distinct, separate", pos:"adj", gender:null,
     note:"Adjective. Clearly different or separate. Feminine: distincte.",
     example:"A: Ces deux problemes sont bien distincts.\nB: Il ne faut pas les confondre.",
     exampleSrc:"A: These two problems are quite distinct.\nB: We shouldn't confuse them.",
     funFact:"From Latin 'distinctus' meaning separated. 'Distinctement' (distinctly) is the adverb form."},

    {type:"teach", trg:"divergent", src:"divergent, differing", pos:"adj", gender:null,
     note:"Adjective. Moving apart or disagreeing. Feminine: divergente.",
     example:"A: Nos opinions sont divergentes sur ce sujet.\nB: C'est normal, discutons-en.",
     exampleSrc:"A: Our opinions are divergent on this topic.\nB: That's normal, let's discuss it.",
     funFact:"From Latin 'divergere' (to move apart). 'Pensee divergente' (divergent thinking) is key in creativity."},

    {type:"match", pairs:[
      {trg:"barbare", src:"barbaric"},
      {trg:"dupe", src:"deceived"},
      {trg:"ardu", src:"arduous"},
      {trg:"battant", src:"fighter"},
      {trg:"chantant", src:"melodious"}
    ]},

    {type:"mc",
     q:"Quel adjectif decrit un accent musical et melodieux ?",
     opts:["chantant","distinct","divergent","douteux"],
     ans:"chantant",
     hint:"Like a song. Southern French accents, especially from Marseille, are famously described this way."},

    {type:"fb",
     s:"Ce retard est {1} pour la reputation de l'entreprise.",
     a:["dommageable"],
     opts:["dommageable","certifi\u00e9","agr\u00e9g\u00e9","divergent"],
     hint:"Causing harm or damage. From 'dommage' (damage), but not the same as 'c'est dommage' (that's a pity).",
     sSrc:"This delay is {1} to the company's reputation."}
  ]
};
export default LESSON_14;
