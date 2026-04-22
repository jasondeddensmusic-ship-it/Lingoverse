const LESSON_7 = {
  id:"frv2_b2gap_l7", title:"Traits de caract\u00e8re", icon:"\u{1F3AD}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Traits de caract\u00e8re",
     desc:"Describe people with nuance and precision. From gruff loners to sly tricksters, master the vocabulary of personality.",
     goals:["Learn 20 personality and character words","Describe people with rich vocabulary","Distinguish subtle character differences"]},

    {type:"teach", trg:"un abruti", src:"a fool, an idiot", pos:"noun", gender:"m",
     note:"Masculine noun. A crude insult meaning a stupid person. Feminine: une abrutie.",
     example:"A: Quel abruti, il a oubli\u00e9 les cl\u00e9s.\nB: Ce n'est pas la premi\u00e8re fois.",
     exampleSrc:"A: What an idiot, he forgot the keys.\nB: It's not the first time.",
     funFact:"From 'abrutir' (to make stupid). Literally means someone reduced to the state of a 'brute' (beast)."},

    {type:"teach", trg:"cabotin", src:"showy, theatrical", pos:"adj", gender:null,
     note:"Adjective and noun. Describes someone who overacts or seeks attention. Feminine: cabotine.",
     example:"A: Il est un peu cabotin sur sc\u00e8ne.\nB: Oui, mais le public adore \u00e7a.",
     exampleSrc:"A: He's a bit theatrical on stage.\nB: Yes, but the audience loves it.",
     funFact:"Named after traveling actors in the 17th century. The word suggests charming but slightly fake performance."},

    {type:"teach", trg:"cachottier", src:"secretive, sneaky", pos:"adj", gender:null,
     note:"Adjective. Describes someone who hides small things. Feminine: cachotti\u00e8re.",
     example:"A: Tu es bien cachotti\u00e8re aujourd'hui.\nB: C'est une surprise, tu verras !",
     exampleSrc:"A: You're being very secretive today.\nB: It's a surprise, you'll see!",
     funFact:"From 'cachotterie' (little secret). Playful rather than sinister, often used with affection."},

    {type:"teach", trg:"circonspect", src:"cautious, circumspect", pos:"adj", gender:null,
     note:"Adjective. Careful and deliberate, avoiding risk. Feminine: circonspecte.",
     example:"A: Sois circonspect dans tes propos.\nB: Tu as raison, c'est un sujet sensible.",
     exampleSrc:"A: Be circumspect in what you say.\nB: You're right, it's a sensitive topic.",
     funFact:"From Latin 'circumspectus' meaning looking around. The image is of someone checking all sides before acting."},

    {type:"teach", trg:"la circonspection", src:"the caution, the circumspection", pos:"noun", gender:"f",
     note:"Feminine noun. The quality of being careful and considering consequences.",
     example:"A: Il agit toujours avec circonspection.\nB: C'est un homme prudent.",
     exampleSrc:"A: He always acts with caution.\nB: He's a prudent man.",
     funFact:"A virtue in French diplomacy. 'Agir avec circonspection' is the gold standard of political behavior."},

    {type:"teach", trg:"cynique", src:"cynical", pos:"adj", gender:null,
     note:"Adjective. Distrustful of human goodness. Same form for m/f.",
     example:"A: Ne sois pas si cynique.\nB: Excuse-moi, mais l'exp\u00e9rience m'a appris \u00e0 douter.",
     exampleSrc:"A: Don't be so cynical.\nB: Sorry, but experience taught me to doubt.",
     funFact:"From Greek 'kunikos' (dog-like). The Cynics were philosophers who rejected social conventions."},

    {type:"mc",
     q:"Quel adjectif d\u00e9crit une personne qui fait de petits secrets ?",
     opts:["Cachottier","Cabotin","Cynique","Circonspect"],
     ans:"Cachottier",
     hint:"From 'cachotterie' (little secret). Playful rather than sinister."},

    {type:"teach", trg:"un cancre", src:"a dunce, a bad student", pos:"noun", gender:"m",
     note:"Masculine noun. A lazy or underperforming student.",
     example:"A: Il \u00e9tait le cancre de la classe.\nB: Maintenant il est chef d'entreprise !",
     exampleSrc:"A: He was the dunce of the class.\nB: Now he's a company CEO!",
     funFact:"Jacques Pr\u00e9vert's poem 'Le Cancre' is one of France's most beloved poems, celebrating the rebel student."},

    {type:"teach", trg:"un attirail", src:"a gear, a paraphernalia", pos:"noun", gender:"m",
     note:"Masculine noun. A collection of equipment or tools for a specific purpose.",
     example:"A: Regarde tout cet attirail de p\u00eache !\nB: Il a des cannes, des moulinets, tout.",
     exampleSrc:"A: Look at all this fishing gear!\nB: He has rods, reels, everything.",
     funFact:"From Old French 'atirer' (to prepare). Often used with a slightly humorous or overwhelmed tone."},

    {type:"teach", trg:"un battant", src:"a fighter, a go-getter", pos:"noun", gender:"m",
     note:"Masculine noun. Someone who fights hard and never gives up. Feminine: une battante.",
     example:"A: C'est une vraie battante.\nB: Oui, rien ne l'arr\u00eate.",
     exampleSrc:"A: She's a real fighter.\nB: Yes, nothing stops her.",
     funFact:"From 'battre' (to fight). Also means the clapper of a bell or a door wing. Multiple meanings, one energy."},

    {type:"teach", trg:"un culot", src:"nerve, audacity", pos:"noun", gender:"m",
     note:"Masculine noun. Bold impudence. 'Avoir du culot' means to have nerve.",
     example:"A: Quel culot de demander une augmentation !\nB: Il faut oser dans la vie.",
     exampleSrc:"A: What nerve to ask for a raise!\nB: You have to dare in life.",
     funFact:"Originally meant the bottom of a bottle. The slang shift to 'nerve' happened in the 19th century."},

    {type:"fb",
     s:"Ne sois pas si {1}, tout le monde n'est pas malhonnête.",
     a:["cynique"],
     opts:["cynique","cabotin","cachottier","circonspect"],
     hint:"Distrustful of human goodness. From Greek philosophers called the 'dog-like' school.",
     sSrc:"Don't be so {1}, not everyone is dishonest."},

    {type:"teach", trg:"un chapardeur", src:"a petty thief, a pilferer", pos:"noun", gender:"m",
     note:"Masculine noun. Someone who steals small things. Feminine: une chapardeuse.",
     example:"A: Ce gamin est un petit chapardeur.\nB: Il pique des bonbons au march\u00e9.",
     exampleSrc:"A: That kid is a little pilferer.\nB: He swipes candy at the market.",
     funFact:"From 'chaparder' (to pilfer). More playful than 'voleur'. Often used for children or minor theft."},

    {type:"teach", trg:"un aspirant", src:"an aspiring person, a cadet", pos:"noun", gender:"m",
     note:"Masculine noun. Someone who aspires to a position. Also a military rank.",
     example:"A: L'aspirant r\u00eave de devenir capitaine.\nB: Il travaille tr\u00e8s dur pour \u00e7a.",
     exampleSrc:"A: The cadet dreams of becoming captain.\nB: He works very hard for it.",
     funFact:"In the French military, 'aspirant' is a rank between warrant officer and second lieutenant."},

    {type:"teach", trg:"l'amateurisme", src:"the amateurism", pos:"noun", gender:"m",
     note:"Masculine noun. Lack of professionalism. Usually pejorative.",
     example:"A: C'est de l'amateurisme pur.\nB: Oui, il faut faire mieux que \u00e7a.",
     exampleSrc:"A: It's pure amateurism.\nB: Yes, we need to do better than that.",
     funFact:"In French, 'amateur' can be positive (enthusiast) or negative (unprofessional). Context is everything."},

    {type:"teach", trg:"camus", src:"snub-nosed, flat-nosed", pos:"adj", gender:null,
     note:"Adjective. Describes a short, flat nose. Feminine: camuse.",
     example:"A: Il a un nez camus comme son p\u00e8re.\nB: C'est un trait de famille.",
     exampleSrc:"A: He has a snub nose like his father.\nB: It's a family trait.",
     funFact:"The word predates the famous author Albert Camus, whose family name has the same origin."},

    {type:"mc",
     q:"Comment appelle-t-on une personne qui ne renonce jamais ?",
     opts:["Un chapardeur","Un battant","Un cancre","Un abruti"],
     ans:"Un battant",
     hint:"From 'battre' (to fight). A go-getter who keeps pushing through obstacles."},

    {type:"teach", trg:"accablant", src:"overwhelming, damning", pos:"adj", gender:null,
     note:"Adjective. Describes evidence that crushes, or heat that oppresses. Feminine: accablante.",
     example:"A: Les preuves sont accablantes.\nB: L'accus\u00e9 n'a aucune chance.",
     exampleSrc:"A: The evidence is damning.\nB: The defendant has no chance.",
     funFact:"From 'accabler' (to overwhelm). Can describe both crushing heat and crushing guilt."},

    {type:"teach", trg:"attard\u00e9", src:"delayed, backward", pos:"adj", gender:null,
     note:"Adjective. Behind schedule or developmentally delayed. Feminine: attard\u00e9e.",
     example:"A: Le train est attard\u00e9 d'une heure.\nB: Encore un retard, c'est habituel.",
     exampleSrc:"A: The train is delayed by an hour.\nB: Another delay, that's typical.",
     funFact:"'S'attarder' means to linger. A beautiful word when positive: 'il s'attarde devant le coucher de soleil'."},

    {type:"teach", trg:"auguste", src:"august, majestic", pos:"adj", gender:null,
     note:"Adjective. Noble and impressive in appearance or manner.",
     example:"A: L'assembl\u00e9e auguste a rendu son verdict.\nB: C'est une d\u00e9cision historique.",
     exampleSrc:"A: The august assembly delivered its verdict.\nB: It's a historic decision.",
     funFact:"From Emperor Augustus. In French circus, 'l'auguste' is the clown with the red nose. A strange contradiction."},

    {type:"match", pairs:[
      {trg:"abruti", src:"fool"},
      {trg:"battant", src:"fighter"},
      {trg:"cancre", src:"dunce"},
      {trg:"culot", src:"nerve, audacity"},
      {trg:"chapardeur", src:"pilferer"}
    ]},

    {type:"fb",
     s:"Les preuves contre lui sont {1}, il n'a aucune d\u00e9fense.",
     a:["accablantes"],
     opts:["accablantes","attard\u00e9es","augustes","cyniques"],
     hint:"Describes evidence that crushes any defense. From 'accabler' meaning to overwhelm.",
     sSrc:"The evidence against him is {1}, he has no defense."},

    {type:"mc",
     q:"Quel mot d\u00e9signe l'audace ou le toupet de quelqu'un ?",
     opts:["L'attirail","L'aspirant","Le culot","Le cancre"],
     ans:"Le culot",
     hint:"Slang for bold impudence. Originally meant the bottom of a bottle."}
  ]
};
export default LESSON_7;
