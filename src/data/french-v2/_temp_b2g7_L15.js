const LESSON_15 = {
  id:"frv2_b2g7_l15", title:"Expression et registre", icon:"\u{1F4AC}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Expression et registre",
     desc:"Learn vocabulary for mastering different registers and styles of expression in French.",
     goals:["Learn 15 expression and register words","Distinguish formal and informal speech","Use idiomatic expressions accurately"]},

    {type:"teach", trg:"magistralement", src:"masterfully, brilliantly", pos:"adv", gender:null,
     note:"Adverb. In a masterful or authoritative manner.",
     example:"A: Il a magistralement reussi son discours.\nB: Le public etait captive.",
     exampleSrc:"A: He masterfully delivered his speech.\nB: The audience was captivated.",
     funFact:"From 'magistral' (masterful). In pharmacy, a 'preparation magistrale' is a custom-made prescription, prepared with mastery."},

    {type:"teach", trg:"la lese-majeste", src:"lese-majeste (offending royalty)", pos:"noun", gender:"f",
     note:"Feminine noun. An offense against a sovereign or authority.\nNow used figuratively.",
     example:"A: Critiquer le chef ici, c'est un crime de lese-majeste.\nB: Personne n'ose rien dire.",
     exampleSrc:"A: Criticizing the boss here is a crime of lese-majeste.\nB: No one dares say anything.",
     funFact:"Originally a crime punishable by death under French monarchy. Today used humorously for any criticism of a powerful person."},

    {type:"teach", trg:"le jamais-vu", src:"jamais vu (never-seen feeling)", pos:"noun", gender:"m",
     note:"Masculine noun. The feeling that something familiar seems completely new.\nOpposite of deja vu.",
     example:"A: J'ai eu un moment de jamais-vu devant ma propre maison.\nB: C'est un phenomene neurologique etrange.",
     exampleSrc:"A: I had a jamais-vu moment in front of my own house.\nB: It's a strange neurological phenomenon.",
     funFact:"Like 'deja vu', 'jamais vu' is a French psychological term used worldwide. It's rarer and more disorienting than deja vu."},

    {type:"teach", trg:"la la-dessus", src:"on that, about that", pos:"adv", gender:null,
     note:"Adverb. On that topic or surface. Used to change subject.\n'La-dessus, il est parti' = With that, he left.",
     example:"A: La-dessus, je suis d'accord avec toi.\nB: Tant mieux, passons au point suivant.",
     exampleSrc:"A: On that, I agree with you.\nB: Good, let's move to the next point.",
     funFact:"Part of a trio: 'la-dessus' (on that), 'la-dessous' (under that), 'la-dedans' (in that). Very common in spoken French."},

    {type:"mc",
     q:"Quel mot designe le sentiment que quelque chose de familier semble completement nouveau ?",
     opts:["le jamais-vu","le deja-vu","la lese-majeste","la la-dessus"],
     ans:"le jamais-vu",
     hint:"The opposite of deja vu. 'Never seen' even though you have seen it before."},

    {type:"teach", trg:"malgre moi", src:"in spite of myself", pos:"adv", gender:null,
     note:"Adverbial phrase. Against one's own will or intention.",
     example:"A: J'ai ri malgre moi.\nB: C'etait trop drole pour se retenir.",
     exampleSrc:"A: I laughed in spite of myself.\nB: It was too funny to hold back.",
     funFact:"Moliere's famous play 'Le Medecin malgre lui' (The Doctor in Spite of Himself) made this expression a classic."},

    {type:"teach", trg:"jusqu'au bout", src:"to the very end", pos:"adv", gender:null,
     note:"Adverbial phrase. All the way through, to completion.",
     example:"A: Il faut aller jusqu'au bout de cette enquete.\nB: Nous ne lacherons rien.",
     exampleSrc:"A: We must see this investigation through to the end.\nB: We won't give up anything.",
     funFact:"'Aller jusqu'au bout' is a rallying cry in French sports and politics. It implies total commitment and refusal to quit."},

    {type:"teach", trg:"la-dedans", src:"in there, in that", pos:"adv", gender:null,
     note:"Adverb. Inside that place or thing. Also: involved in that.",
     example:"A: Qu'est-ce qu'il y a la-dedans ?\nB: Ouvre la boite et tu verras.",
     exampleSrc:"A: What's in there?\nB: Open the box and you'll see.",
     funFact:"'Je ne veux pas etre la-dedans' means 'I don't want to be involved in that'. The spatial metaphor becomes figurative."},

    {type:"fb",
     s:"L'orchestre a {1} interprete la symphonie de Beethoven.",
     a:["magistralement"],
     opts:["magistralement","materiellement","momentanement","malgre"],
     hint:"In a masterful, brilliant manner, like a true authority.",
     sSrc:"The orchestra {1} performed Beethoven's symphony."},

    {type:"teach", trg:"dans l'absolu", src:"in absolute terms, ideally", pos:"adv", gender:null,
     note:"Adverbial phrase. Speaking theoretically, without considering constraints.",
     example:"A: Dans l'absolu, ton plan est parfait.\nB: Mais dans la realite, c'est plus complique.",
     exampleSrc:"A: In absolute terms, your plan is perfect.\nB: But in reality, it's more complicated.",
     funFact:"Very common in French debate. It acknowledges an ideal before introducing practical objections: 'dans l'absolu oui, mais...'"},

    {type:"teach", trg:"dans quelle mesure", src:"to what extent", pos:"adv", gender:null,
     note:"Interrogative phrase. Used to ask about degree or proportion.",
     example:"A: Dans quelle mesure etes-vous satisfait ?\nB: Je suis satisfait a quatre-vingts pour cent.",
     exampleSrc:"A: To what extent are you satisfied?\nB: I'm eighty percent satisfied.",
     funFact:"A staple of French academic essays. Many DELF B2 writing tasks begin with 'Dans quelle mesure...' as a prompt."},

    {type:"teach", trg:"en marge de", src:"on the sidelines of, alongside", pos:"adv", gender:null,
     note:"Prepositional phrase. On the edges of, or alongside an event.\nAlso: outside the mainstream.",
     example:"A: En marge du sommet, des manifestations ont eu lieu.\nB: Les protestataires etaient nombreux.",
     exampleSrc:"A: On the sidelines of the summit, demonstrations took place.\nB: The protesters were numerous.",
     funFact:"'Vivre en marge de la societe' means to live on the fringes of society. 'Ecrire en marge' means to write in the margin."},

    {type:"mc",
     q:"Quelle expression signifie 'aller jusqu'a la fin sans abandonner' ?",
     opts:["jusqu'au bout","malgre moi","la-dedans","dans l'absolu"],
     ans:"jusqu'au bout",
     hint:"'To the very end'. A phrase about total commitment and determination."},

    {type:"teach", trg:"de haut en bas", src:"from top to bottom, disdainfully", pos:"adv", gender:null,
     note:"Adverbial phrase. Literally top to bottom.\nFiguratively: looking down on someone.",
     example:"A: Elle m'a regarde de haut en bas.\nB: Quelle arrogance !",
     exampleSrc:"A: She looked me up and down.\nB: What arrogance!",
     funFact:"The physical gesture of scanning someone from head to toe is universally understood as judgmental. French captures it perfectly."},

    {type:"teach", trg:"du premier coup", src:"on the first try", pos:"adv", gender:null,
     note:"Adverbial phrase. Successfully at the first attempt.",
     example:"A: Il a reussi l'examen du premier coup.\nB: Bravo, c'est rare.",
     exampleSrc:"A: He passed the exam on the first try.\nB: Bravo, that's rare.",
     funFact:"The French driving test has a pass rate of about 55%. Passing 'du premier coup' is a genuine achievement."},

    {type:"fb",
     s:"{1} ce projet est realisable, mais le budget est insuffisant.",
     a:["Dans l'absolu"],
     opts:["Dans l'absolu","Malgre moi","La-dedans","Jusqu'au bout"],
     hint:"In theory, ideally, without considering practical limitations.",
     sSrc:"{1}, this project is feasible, but the budget is insufficient."},

    {type:"match", pairs:[
      {trg:"magistralement", src:"masterfully"},
      {trg:"malgre moi", src:"in spite of myself"},
      {trg:"jusqu'au bout", src:"to the very end"},
      {trg:"en marge de", src:"on the sidelines of"},
      {trg:"du premier coup", src:"on the first try"}
    ]},

    {type:"mc",
     q:"Quelle expression utilise-t-on dans une dissertation pour demander 'a quel degre' ?",
     opts:["dans quelle mesure","de haut en bas","dans l'absolu","en marge de"],
     ans:"dans quelle mesure",
     hint:"A formal question about degree or extent, common in academic writing."},

    {type:"fb",
     s:"{1} du festival, des ateliers gratuits etaient proposes.",
     a:["En marge"],
     opts:["En marge","Malgre","Jusqu'au","Du premier"],
     hint:"On the sidelines of, alongside but separate from the main event.",
     sSrc:"{1} of the festival, free workshops were offered."}
  ]
};
export default LESSON_15;
