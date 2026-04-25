const LESSON_18 = {
  id:"frv2_b2g3_l18", title:"Expressions et registres", icon:"\u{1F5E3}\u{FE0F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Expressions et registres",
     desc:"Learn French expressions, discourse markers, and phrases that signal different registers and communicative intentions.",
     goals:["Learn 17 B2 expressions and discourse markers","Use fixed phrases in context","Navigate formal and informal registers"]},

    {type:"teach", trg:"en dehors", src:"outside, apart from", pos:"adv", gender:null,
     note:"Adverbial phrase. Outside of a place or beyond a category.",
     example:"A: En dehors du travail, que fais-tu ?\nB: Je fais du sport et je lis beaucoup.",
     exampleSrc:"A: Outside of work, what do you do?\nB: I play sports and I read a lot.",
     funFact:"'En dehors de' functions as a preposition meaning 'apart from'. It is more formal than 'a part' and very common in written French."},

    {type:"teach", trg:"en plein", src:"right in the middle of, in full", pos:"adv", gender:null,
     note:"Adverbial phrase. Directly in the center or at the peak of something.",
     example:"A: On est en plein centre-ville.\nB: Oui, tout est accessible à pied.",
     exampleSrc:"A: We're right in the city center.\nB: Yes, everything is accessible on foot.",
     funFact:"'En plein air' means outdoors (in the open air). The Impressionists were called 'peintres en plein air' because they painted outside."},

    {type:"teach", trg:"en présence de", src:"in the presence of", pos:"adv", gender:null,
     note:"Prepositional phrase. Being physically present alongside someone.",
     example:"A: Le contrat a été signé en présence de témoins.\nB: Tout est en règle.",
     exampleSrc:"A: The contract was signed in the presence of witnesses.\nB: Everything is in order.",
     funFact:"A formal legal expression. In French courts, 'en presence des parties' means with all parties present. Essential in official documents."},

    {type:"teach", trg:"en marge de", src:"on the sidelines of, alongside", pos:"adv", gender:null,
     note:"Prepositional phrase. On the edge of or parallel to a main event.",
     example:"A: Des discussions ont eu lieu en marge du sommet.\nB: Les accords informels sont souvent décisifs.",
     exampleSrc:"A: Discussions took place on the sidelines of the summit.\nB: Informal agreements are often decisive.",
     funFact:"'En marge' literally means in the margin. People who live 'en marge de la societe' are on the fringes of society. Very productive expression."},

    {type:"mc",
     q:"Quelle expression signifie 'en parallèle de' ou 'à côté de' un événement principal ?",
     opts:["en marge de","en plein","en dehors","en présence de"],
     ans:"en marge de",
     hint:"This phrase literally means 'in the margin of'. Think of things happening alongside but not inside the main event."},

    {type:"teach", trg:"de côté", src:"aside, on the side", pos:"adv", gender:null,
     note:"Adverbial phrase. Set apart or saved for later.",
     example:"A: J'ai mis de l'argent de côté pour les vacances.\nB: C'est prudent de prévoir.",
     exampleSrc:"A: I put money aside for the vacation.\nB: It's wise to plan ahead.",
     funFact:"'Mettre de cote' (to set aside) is one of the most common French financial expressions. 'Laisser de cote' means to leave out or ignore."},

    {type:"teach", trg:"dans l'absolu", src:"in absolute terms", pos:"adv", gender:null,
     note:"Adverbial phrase. Speaking theoretically, without considering practical constraints.",
     example:"A: Dans l'absolu, c'est une bonne idée.\nB: Mais en pratique, c'est irréalisable.",
     exampleSrc:"A: In absolute terms, it's a good idea.\nB: But in practice, it's unfeasible.",
     funFact:"A favorite expression in French debates. It signals a theoretical concession before a practical objection: 'yes in theory, but...'"},

    {type:"teach", trg:"avant même que", src:"even before", pos:"adv", gender:null,
     note:"Conjunctive phrase. Emphasizes that something happened surprisingly early.",
     example:"A: Avant même que j'aie fini, il avait compris.\nB: Il est très intuitif.",
     exampleSrc:"A: Even before I had finished, he had understood.\nB: He is very intuitive.",
     funFact:"'Avant meme que' takes the subjunctive in formal French. It adds dramatic emphasis compared to simple 'avant que'."},

    {type:"teach", trg:"c'est-à-dire que", src:"that is to say, meaning that", pos:"adv", gender:null,
     note:"Connector phrase. Used to clarify or rephrase what was just said.",
     example:"A: C'est-à-dire que nous devons recommencer ?\nB: Oui, il faut tout reprendre à zéro.",
     exampleSrc:"A: Meaning we have to start over?\nB: Yes, we need to start from scratch.",
     funFact:"Often abbreviated 'c.-a-d.' in writing. French speakers use it constantly in speech as a way to rephrase and clarify their thoughts."},

    {type:"fb",
     s:"{1}, cette stratégie pourrait fonctionner, mais les conditions ne sont pas réunies.",
     a:["Dans l'absolu"],
     opts:["Dans l'absolu","En marge","De côté","En plein"],
     hint:"This phrase means in theory or without considering practical constraints.",
     sSrc:"{1}, this strategy could work, but the conditions are not met."},

    {type:"teach", trg:"de toute", src:"in any case, regardless", pos:"adv", gender:null,
     note:"Short form of 'de toute facon' or 'de toute maniere'. Very common in speech.",
     example:"A: De toute façon, c'est trop tard pour changer.\nB: Tu as raison, avançons.",
     exampleSrc:"A: In any case, it's too late to change.\nB: You're right, let's move on.",
     funFact:"'De toute facon' is one of the most frequent French expressions. It dismisses objections and signals a final decision."},

    {type:"teach", trg:"eh bien oui", src:"well, yes indeed", pos:"adv", gender:null,
     note:"Discourse marker. Confirms something surprising or reluctantly acknowledged.",
     example:"A: Tu vas vraiment déménager ?\nB: Eh bien oui, c'est décidé.",
     exampleSrc:"A: Are you really going to move?\nB: Well, yes indeed, it's decided.",
     funFact:"'Eh bien' is the classic French equivalent of 'well then'. Adding 'oui' confirms something the listener might find surprising."},

    {type:"teach", trg:"depuis la veille", src:"since the day before", pos:"adv", gender:null,
     note:"Time expression. Referring to the previous day.",
     example:"A: Il n'avait pas mangé depuis la veille.\nB: Pas étonnant qu'il se sente mal.",
     exampleSrc:"A: He hadn't eaten since the day before.\nB: No wonder he feels unwell.",
     funFact:"'La veille' means the day before. 'Le lendemain' means the day after. These are essential narrative time markers in French storytelling."},

    {type:"mc",
     q:"Quelle expression sert à reformuler ou préciser ce qu'on vient de dire ?",
     opts:["en plein","c'est-à-dire que","de toute façon","eh bien oui"],
     ans:"c'est-à-dire que",
     hint:"This connecting phrase literally means 'that is to say that'. It introduces a clarification or rephrasing."},

    {type:"teach", trg:"en double", src:"in duplicate", pos:"adv", gender:null,
     note:"Adverbial phrase. Made in two copies or existing twice.",
     example:"A: Remplissez ce formulaire en double.\nB: D'accord, un exemplaire pour vous et un pour moi.",
     exampleSrc:"A: Fill in this form in duplicate.\nB: Alright, one copy for you and one for me.",
     funFact:"French bureaucracy is famous for requiring documents 'en double' or even 'en triple'. Some administrations still require paper copies."},

    {type:"teach", trg:"en temps", src:"in time, on time", pos:"adv", gender:null,
     note:"Short for 'en temps et en heure' (in due time). Used to indicate timeliness.",
     example:"A: Les résultats seront communiqués en temps voulu.\nB: Nous vous tiendrons informés.",
     exampleSrc:"A: The results will be communicated in due time.\nB: We will keep you informed.",
     funFact:"'En temps et en heure' is the full formal expression. 'En temps reel' means in real time, widely used in tech contexts."},

    {type:"teach", trg:"dans l'espoir de", src:"in the hope of", pos:"adv", gender:null,
     note:"Prepositional phrase. Expressing hope that something will happen.",
     example:"A: Il a postulé dans l'espoir de décrocher le poste.\nB: Sa candidature est solide.",
     exampleSrc:"A: He applied in the hope of landing the job.\nB: His application is solid.",
     funFact:"A formal register phrase. In letters, 'dans l'espoir d'une reponse favorable' (hoping for a favorable reply) is a classic closing formula."},

    {type:"match", pairs:[
      {trg:"en dehors", src:"outside"},
      {trg:"de côté", src:"aside"},
      {trg:"en double", src:"in duplicate"},
      {trg:"depuis la veille", src:"since the day before"},
      {trg:"dans l'espoir de", src:"in the hope of"}
    ]},

    {type:"fb",
     s:"Le contrat a été signé {1} de deux avocats et d'un notaire.",
     a:["en présence"],
     opts:["en présence","en marge","en plein","en dehors"],
     hint:"This prepositional phrase means with someone physically present alongside. Common in legal contexts.",
     sSrc:"The contract was signed {1} of two lawyers and a notary."}
  ]
};
export default LESSON_18;
