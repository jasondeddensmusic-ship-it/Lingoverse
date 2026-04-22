const LESSON_17 = {
  id:"frv2_b2g3_l17", title:"Changement et transformation", icon:"\u{1F504}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Changement et transformation",
     desc:"Learn vocabulary for describing change, transformation, and social evolution in French.",
     goals:["Learn 17 B2 transformation and change words","Discuss social and personal change","Describe processes of evolution and decay"]},

    {type:"teach", trg:"un agrandi", src:"enlarged, expanded", pos:"adj", gender:null,
     note:"Adjective. Made bigger or expanded in size or scope. Feminine: agrandie.",
     example:"A: La photo agrandie révèle des détails invisibles.\nB: On voit même les inscriptions.",
     exampleSrc:"A: The enlarged photo reveals invisible details.\nB: You can even see the inscriptions.",
     funFact:"'Agrandir' means to enlarge. In photography, 'un agrandissement' is an enlargement. 'Agrandir la maison' means to extend the house."},

    {type:"teach", trg:"le cinquantième", src:"the fiftieth", pos:"adj", gender:null,
     note:"Ordinal adjective. The number fifty in rank order.",
     example:"A: C'est le cinquantième anniversaire du festival.\nB: Une édition spéciale est prévue.",
     exampleSrc:"A: It's the fiftieth anniversary of the festival.\nB: A special edition is planned.",
     funFact:"French ordinals add '-ieme' to the cardinal: cinquante > cinquantieme. Only 'premier/premiere' is irregular."},

    {type:"teach", trg:"le dixième", src:"the tenth", pos:"noun", gender:"m",
     note:"Masculine noun/adjective. The ordinal for ten. Also a fraction: one tenth.",
     example:"A: C'est le dixième arrondissement de Paris.\nB: Il y a de très bons restaurants là-bas.",
     exampleSrc:"A: It's the tenth arrondissement of Paris.\nB: There are very good restaurants there.",
     funFact:"Parisians identify by arrondissement. 'Le dixieme' or 'le 10e' has become trendy with Canal Saint-Martin as its heart."},

    {type:"teach", trg:"l'avènement", src:"the advent", pos:"noun", gender:"m",
     note:"Masculine noun. The arrival of a significant new era or phenomenon.",
     example:"A: L'avènement du numérique a transformé l'éducation.\nB: Les manuels papier disparaissent peu à peu.",
     exampleSrc:"A: The advent of digital technology transformed education.\nB: Paper textbooks are gradually disappearing.",
     funFact:"Already taught in lesson 9, reinforced here. From 'advenir' (to come about). 'L'Avent' (Advent before Christmas) shares this root."},

    {type:"mc",
     q:"Quel mot est l'ordinal de 'cinquante' ?",
     opts:["cinquantième","cinquième","quinzième","dixième"],
     ans:"cinquantième",
     hint:"French ordinals add '-ieme' to the cardinal number. This is the ordinal form of fifty."},

    {type:"teach", trg:"le dépeigner", src:"to dishevel, to mess up hair", pos:"verb", gender:null,
     note:"Verb. To undo someone's combed hair. Figuratively: to ruffle.",
     example:"A: Le vent m'a complètement dépeigné.\nB: Tu as un peigne dans ton sac ?",
     exampleSrc:"A: The wind completely messed up my hair.\nB: Do you have a comb in your bag?",
     funFact:"From 'peigner' (to comb). 'Depeigner' is a very visual verb that French writers use to describe windswept characters on Normandy beaches."},

    {type:"teach", trg:"s'extasier", src:"to be ecstatic, to rave about", pos:"verb", gender:null,
     note:"Reflexive verb. To express great admiration or wonder.",
     example:"A: Elle s'est extasiée devant le coucher de soleil.\nB: Il faut dire que c'était magnifique.",
     exampleSrc:"A: She was ecstatic at the sunset.\nB: It must be said, it was magnificent.",
     funFact:"From 'extase' (ecstasy), originally a religious term for spiritual rapture. Now used for any intense admiration: food, art, babies."},

    {type:"teach", trg:"l'embout", src:"a tip, a nozzle", pos:"noun", gender:"m",
     note:"Masculine noun. The end piece of a tool, hose, or instrument.",
     example:"A: L'embout de la seringue est stérile.\nB: Parfait, on peut procéder.",
     exampleSrc:"A: The syringe tip is sterile.\nB: Perfect, we can proceed.",
     funFact:"From 'bout' (end/tip). French technical vocabulary creates many words with 'em-' + noun: embout (tip piece), embouchure (mouth piece)."},

    {type:"teach", trg:"l'empâtement", src:"thickening, serif", pos:"noun", gender:"m",
     note:"Masculine noun. A thickening of paint texture or the serifs on a typeface.",
     example:"A: L'empâtement des lettres donne un aspect classique.\nB: C'est une police avec empattement.",
     exampleSrc:"A: The serifs on the letters give a classic look.\nB: It's a serif font.",
     funFact:"In typography, 'police avec empattement' means serif font. Van Gogh's thick brushwork is called 'empâtement' in art criticism."},

    {type:"fb",
     s:"Elle s'est {1} devant la beauté du paysage alpin.",
     a:["extasiée"],
     opts:["extasiée","agrandie","dépeignée","empâtée"],
     hint:"This reflexive verb means to express ecstatic admiration or wonder about something beautiful.",
     sSrc:"She was {1} by the beauty of the Alpine landscape."},

    {type:"teach", trg:"l'emboîtage", src:"fitting together, nesting", pos:"noun", gender:"m",
     note:"Masculine noun. The process of fitting things into each other like a puzzle.",
     example:"A: L'emboîtage des pièces demande de la précision.\nB: Chaque élément doit s'ajuster parfaitement.",
     exampleSrc:"A: Fitting the pieces together requires precision.\nB: Each element must fit perfectly.",
     funFact:"From 'boite' (box). 'Poupees russes' (Russian dolls) are the perfect example of 'emboitage': each fits inside the next."},

    {type:"teach", trg:"l'accélération", src:"acceleration", pos:"noun", gender:"f",
     note:"Feminine noun. An increase in speed or the rate of progress.",
     example:"A: L'accélération du projet est impressionnante.\nB: L'équipe travaille jour et nuit.",
     exampleSrc:"A: The acceleration of the project is impressive.\nB: The team works day and night.",
     funFact:"Already introduced in lesson 10, reinforced here. France's particle accelerator near Grenoble (ESRF) is one of the world's most powerful."},

    {type:"teach", trg:"défoncer", src:"to smash in, to break through", pos:"verb", gender:null,
     note:"Verb. To break down a door or barrier. Slang: to work extremely hard.",
     example:"A: Les pompiers ont défoncé la porte pour entrer.\nB: Le feu se propageait rapidement.",
     exampleSrc:"A: The firefighters smashed the door to enter.\nB: The fire was spreading quickly.",
     funFact:"In modern slang, 'se defoncer' means to give 110% effort at something. 'Il se defonce au travail' means he works incredibly hard."},

    {type:"mc",
     q:"Quel nom technique désigne les petites lignes au bout des lettres dans une police classique ?",
     opts:["l'embellissement","l'empâtement","l'emboîtage","l'embout"],
     ans:"l'empâtement",
     hint:"In typography, this word describes the serifs that give classic fonts their elegant appearance."},

    {type:"teach", trg:"le demi-tour", src:"a U-turn, an about-face", pos:"noun", gender:"m",
     note:"Masculine noun. Turning around completely to go back the way you came.",
     example:"A: Fais demi-tour, on a raté la sortie.\nB: D'accord, je tourne au prochain rond-point.",
     exampleSrc:"A: Make a U-turn, we missed the exit.\nB: Alright, I'll turn at the next roundabout.",
     funFact:"'Faire demi-tour' is used literally for driving and figuratively for changing your mind completely. 'Demi-tour!' is a military command."},

    {type:"teach", trg:"l'appréciable", src:"appreciable, significant", pos:"adj", gender:null,
     note:"Adjective. Large enough to be noticed or valued.",
     example:"A: La différence de prix est appréciable.\nB: On économise presque vingt pour cent.",
     exampleSrc:"A: The price difference is appreciable.\nB: We save almost twenty percent.",
     funFact:"In French, 'appreciable' can mean both 'significant' and 'pleasant/enjoyable'. Context determines which: a 'geste appreciable' is a kind gesture."},

    {type:"teach", trg:"le contreficher", src:"to not care at all", pos:"verb", gender:null,
     note:"Reflexive verb. To not give a care about something. Informal but not vulgar.",
     example:"A: Il s'en contrefiche de ce que les gens pensent.\nB: C'est un esprit libre.",
     exampleSrc:"A: He couldn't care less about what people think.\nB: He's a free spirit.",
     funFact:"A politer version of stronger expressions. The 'contre-' prefix intensifies the indifference. Very common in casual French conversation."},

    {type:"match", pairs:[
      {trg:"demi-tour", src:"U-turn"},
      {trg:"emboîtage", src:"fitting together"},
      {trg:"empâtement", src:"serif"},
      {trg:"appréciable", src:"significant"},
      {trg:"défoncer", src:"to smash in"}
    ]},

    {type:"fb",
     s:"Fais {1}, on a pris la mauvaise direction.",
     a:["demi-tour"],
     opts:["demi-tour","emboîtage","embout","accélération"],
     hint:"This compound noun means turning around completely to go back. It is both a driving and military term.",
     sSrc:"Make a {1}, we went the wrong way."}
  ]
};
export default LESSON_17;
