const LESSON_10 = {
  id:"frv2_b2g4_l10", title:"Expressions et nuances", icon:"\u{1F4AC}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Expressions et nuances",
     desc:"Learn adverbs and expressions that add nuance and sophistication to your French.",
     goals:["Learn 15 adverbs and refined expressions","Add subtle nuances to your speech","Express degrees and conditions precisely"]},

    {type:"teach", trg:"grosso modo", src:"roughly, more or less", pos:"adv", gender:null,
     note:"Adverb. An approximation. From Italian, used in casual speech.",
     example:"A: Grosso modo, combien ca coute ?\nB: Environ cinq cents euros.",
     exampleSrc:"A: Roughly, how much does it cost?\nB: About five hundred euros.",
     funFact:"Borrowed directly from Italian. Very common in everyday French, especially for rough estimates."},

    {type:"teach", trg:"immensement", src:"immensely, vastly", pos:"adv", gender:null,
     note:"Adverb. To an extremely great degree.",
     example:"A: Je suis immensement reconnaissant.\nB: Ce n'etait rien, vraiment.",
     exampleSrc:"A: I am immensely grateful.\nB: It was nothing, really.",
     funFact:"From 'immense'. French loves long adverbs ending in -ment. This one has five syllables."},

    {type:"teach", trg:"idem", src:"likewise, ditto", pos:"adv", gender:null,
     note:"Adverb. Latin word meaning 'the same'. Used to avoid repetition.",
     example:"A: Je prendrai un cafe. Et toi ?\nB: Idem pour moi.",
     exampleSrc:"A: I'll have a coffee. And you?\nB: Same for me.",
     funFact:"Pure Latin, unchanged. Used in academic citations as 'id.' to mean 'same author as above'."},

    {type:"teach", trg:"ici et la", src:"here and there", pos:"adv", gender:null,
     note:"Adverbial expression. Scattered in various places.",
     example:"A: Il y a des erreurs ici et la dans le texte.\nB: Je vais les corriger.",
     exampleSrc:"A: There are errors here and there in the text.\nB: I'll correct them.",
     funFact:"A natural colloquial expression. Note the lack of accent on 'la' when it means 'there'."},

    {type:"teach", trg:"generalement", src:"generously", pos:"adv", gender:null,
     note:"Adverb. In a generous manner, with abundance.",
     example:"A: Il a genereusement donne a l'association.\nB: Sa contribution a fait la difference.",
     exampleSrc:"A: He generously donated to the organization.\nB: His contribution made the difference.",
     funFact:"French philanthropy culture differs from American. Generosity is often more private and discreet."},

    {type:"mc",
     q:"Quel mot latin signifie 'la meme chose' ?",
     opts:["idem","grosso modo","a fortiori","ad hoc"],
     ans:"idem",
     hint:"A very short Latin word meaning 'the same'. Used in everyday French and in academic citations."},

    {type:"teach", trg:"en guise de", src:"by way of, as a form of", pos:"prep", gender:null,
     note:"Prepositional phrase. Meaning 'as' or 'instead of'.",
     example:"A: En guise de remerciement, je t'invite au restaurant.\nB: C'est tres gentil de ta part.",
     exampleSrc:"A: By way of thanks, I'm inviting you to a restaurant.\nB: That's very kind of you.",
     funFact:"'Guise' is an archaic word meaning manner or way. It survives only in this expression."},

    {type:"teach", trg:"dans l'absolu", src:"in absolute terms, ideally", pos:"adv", gender:null,
     note:"Adverbial phrase. In theory, without practical constraints.",
     example:"A: Dans l'absolu, tu as raison.\nB: Mais en pratique, c'est plus complique.",
     exampleSrc:"A: In absolute terms, you're right.\nB: But in practice, it's more complicated.",
     funFact:"A very French philosophical expression. It separates theory from reality with elegant precision."},

    {type:"teach", trg:"en marge de", src:"on the sidelines of, alongside", pos:"prep", gender:null,
     note:"Prepositional phrase. Happening alongside but separate from the main event.",
     example:"A: En marge du sommet, des manifestants protestaient.\nB: Ils reclamaient plus de justice sociale.",
     exampleSrc:"A: On the sidelines of the summit, protesters demonstrated.\nB: They demanded more social justice.",
     funFact:"Literally 'in the margin of'. Used constantly in French journalism for side events."},

    {type:"fb",
     s:"{1}, ca coute environ deux mille euros.",
     a:["Grosso modo"],
     opts:["Grosso modo","Immensement","Idem","Dans l'absolu"],
     hint:"An Italian borrowing meaning approximately or roughly. Used for estimates.",
     sSrc:"{1}, it costs about two thousand euros."},

    {type:"teach", trg:"de tout ceci", src:"of all this", pos:"adv", gender:null,
     note:"Adverbial phrase. Refers to everything that has been discussed.",
     example:"A: Que pensez-vous de tout ceci ?\nB: C'est un sujet complexe qui merite reflexion.",
     exampleSrc:"A: What do you think of all this?\nB: It's a complex subject that deserves reflection.",
     funFact:"'Ceci' points to what follows or what's close. 'Cela' points to what came before. Subtle distinction."},

    {type:"teach", trg:"en poche", src:"in one's pocket, secured", pos:"adv", gender:null,
     note:"Adverbial expression. Having obtained or secured something.",
     example:"A: Diplome en poche, il cherche du travail.\nB: Il trouvera vite avec ses competences.",
     exampleSrc:"A: With his diploma in hand, he's looking for work.\nB: He'll find something quickly with his skills.",
     funFact:"'Avoir un diplome en poche' is a classic French expression for having graduated and being ready."},

    {type:"teach", trg:"la guise", src:"the manner, the way", pos:"noun", gender:"f",
     note:"Feminine noun. Way or manner. Mostly used in 'a sa guise' (as one pleases).",
     example:"A: Chacun agit a sa guise ici.\nB: C'est ca, la liberte individuelle.",
     exampleSrc:"A: Everyone acts as they please here.\nB: That's individual freedom.",
     funFact:"'A sa guise' is the main surviving use. From Frankish 'wisa' (manner), same root as English 'wise'."},

    {type:"mc",
     q:"Quelle expression signifie 'en theorie, sans contraintes pratiques' ?",
     opts:["de tout ceci","dans l'absolu","en marge de","en guise de"],
     ans:"dans l'absolu",
     hint:"A philosophical French expression that separates the ideal from the practical reality."},

    {type:"teach", trg:"impair", src:"odd (number), blunder", pos:"adj", gender:null,
     note:"Adjective. Odd number. Also a noun: a faux pas or blunder.",
     example:"A: Il a commis un impair diplomatique.\nB: L'ambassadeur etait furieux.",
     exampleSrc:"A: He committed a diplomatic blunder.\nB: The ambassador was furious.",
     funFact:"From 'im-' (not) + 'pair' (even). An 'impair' disrupts social harmony, just as odd numbers break pairs."},

    {type:"fb",
     s:"{1} du sommet, des reunions informelles ont eu lieu.",
     a:["En marge"],
     opts:["En marge","En guise","En poche","Dans l'absolu"],
     hint:"On the sidelines of, happening alongside the main event. Literally 'in the margin'.",
     sSrc:"{1} of the summit, informal meetings took place."},

    {type:"match", pairs:[
      {trg:"grosso modo", src:"roughly"},
      {trg:"idem", src:"likewise"},
      {trg:"dans l'absolu", src:"in absolute terms"},
      {trg:"en guise de", src:"by way of"},
      {trg:"impair", src:"odd, blunder"}
    ]},

    {type:"mc",
     q:"Que signifie 'a sa guise' ?",
     opts:["Avec difficulte","Sans hesitation","Comme il lui plait","Avec prudence"],
     ans:"Comme il lui plait",
     hint:"'Guise' is an archaic word meaning manner. This expression means doing things in one's own way."}
  ]
};
export default LESSON_10;
