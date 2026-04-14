// French B2 Gap Lesson 11 — Emotions and Psychology
const LESSON_11 = {id:"frv2_b2g5_l11", title:"Émotions et psychologie", icon:"🧠", xp:15, board:true, steps:[
  {type:"intro", title:"Émotions et psychologie",
   desc:"Explore vocabulary for discussing emotions, psychological states, and inner experience at the B2 level.",
   goals:["Learn 15 key words about emotions and psychology","Describe complex emotional states","Use psychological vocabulary in nuanced discussions"]},

  {type:"teach", trg:"le frémissement", src:"the shiver / tremor", pos:"noun", gender:"m",
   note:"A slight trembling from emotion, cold, or excitement.\nUsed for physical and emotional sensations.",
   example:"A: Un frémissement de joie a parcouru la foule.\nB: Le moment était magique.\nA: Tout le monde retenait son souffle.\nB: Puis l'émotion a éclaté.",
   exampleSrc:"A: A shiver of joy ran through the crowd.\nB: The moment was magical.\nA: Everyone was holding their breath.\nB: Then the emotion burst out.",
   funFact:"From 'frémir' (to shiver/tremble). Can be positive (excitement) or negative (fear). Very literary."},

  {type:"teach", trg:"le grondement", src:"the rumbling / growling", pos:"noun", gender:"m",
   note:"A deep, low sound. Thunder, engines, or angry voices.\nAlso figurative: 'grondement de mécontentement'.",
   example:"A: Le grondement du tonnerre annonce l'orage.\nB: On devrait rentrer.\nA: Le grondement de la foule fait peur.\nB: Oui, la colère populaire est palpable.",
   exampleSrc:"A: The rumbling of thunder announces the storm.\nB: We should go inside.\nA: The rumbling of the crowd is scary.\nB: Yes, popular anger is palpable.",
   funFact:"From 'gronder' (to rumble/scold). 'Gronder un enfant' means to scold a child, from the same root."},

  {type:"teach", trg:"la hardiesse", src:"the boldness / daring", pos:"noun", gender:"f",
   note:"Courage to take risks or speak freely.\nA positive quality in French culture.",
   example:"A: J'admire la hardiesse de cette artiste.\nB: Elle ose ce que personne d'autre ne fait.\nA: C'est du courage ou de l'inconscience?\nB: Un mélange des deux, peut-être.",
   exampleSrc:"A: I admire this artist's boldness.\nB: She dares what nobody else does.\nA: Is it courage or recklessness?\nB: A mix of both, perhaps.",
   funFact:"From 'hardi' (bold). The Old French 'hardir' meant to make bold. Related to English 'hardy'."},

  {type:"teach", trg:"l'inanité", src:"the inanity / futility", pos:"noun", gender:"f",
   note:"Complete emptiness or pointlessness.\nA literary word for total uselessness.",
   example:"A: L'inanité de ce débat est évidente.\nB: On tourne en rond depuis une heure.\nA: Personne ne veut écouter l'autre.\nB: Passons à un sujet plus productif.",
   exampleSrc:"A: The futility of this debate is obvious.\nB: We've been going in circles for an hour.\nA: Nobody wants to listen to the other.\nB: Let's move to a more productive topic.",
   funFact:"From Latin 'inanitas' (emptiness). Related to 'inane' in English. Very formal register."},

  {type:"teach", trg:"inconcevable", src:"inconceivable", pos:"adj", gender:null,
   note:"Impossible to imagine or believe.\nUsed for shocking situations or ideas.",
   example:"A: C'est inconcevable qu'il ait menti.\nB: Je le pensais honnête.\nA: La déception est immense.\nB: La confiance est brisée à jamais.",
   exampleSrc:"A: It's inconceivable that he lied.\nB: I thought he was honest.\nA: The disappointment is immense.\nB: Trust is broken forever.",
   funFact:"From 'in-' (not) + 'concevable' (conceivable). The verb 'concevoir' means both 'to conceive' and 'to imagine'."},

  {type:"teach", trg:"l'intégrisme", src:"fundamentalism / extremism", pos:"noun", gender:"m",
   note:"Rigid adherence to a doctrine, rejecting any change.\nUsed for religious and political extremism.",
   example:"A: L'intégrisme est un danger pour toute société.\nB: Il refuse le dialogue et la nuance.\nA: L'éducation est le meilleur remède.\nB: Oui, la pensée critique protège contre les extrêmes.",
   exampleSrc:"A: Fundamentalism is a danger to any society.\nB: It refuses dialogue and nuance.\nA: Education is the best remedy.\nB: Yes, critical thinking protects against extremes.",
   funFact:"From 'intègre' (integral/whole). Originally referred to Catholic traditionalism before broadening."},

  {type:"teach", trg:"s'extasier", src:"to be ecstatic / to marvel", pos:"verb", gender:null,
   note:"To express intense admiration or delight.\nReflexive verb: always used with 'se'.",
   example:"A: Les touristes s'extasient devant la Tour Eiffel.\nB: C'est un spectacle magnifique, surtout la nuit.\nA: Tu ne t'en lasses jamais?\nB: Jamais, la beauté reste intacte.",
   exampleSrc:"A: Tourists marvel at the Eiffel Tower.\nB: It's a magnificent sight, especially at night.\nA: You never tire of it?\nB: Never, the beauty remains intact.",
   funFact:"From 'extase' (ecstasy), from Greek 'ekstasis' (standing outside oneself). A very expressive verb."},

  {type:"teach", trg:"l'intériorisation", src:"the internalization", pos:"noun", gender:"f",
   note:"Absorbing values or feelings into oneself.\nPsychology term for making external things internal.",
   example:"A: L'intériorisation du stress cause des problèmes de santé.\nB: Il vaut mieux exprimer ses émotions.\nA: C'est plus facile à dire qu'à faire.\nB: La thérapie peut aider.",
   exampleSrc:"A: Internalizing stress causes health problems.\nB: It's better to express your emotions.\nA: That's easier said than done.\nB: Therapy can help.",
   funFact:"From 'intérioriser' + '-tion'. Freud's concept of internalization was widely discussed in French psychology."},

  {type:"teach", trg:"la galère", src:"the ordeal / nightmare", pos:"noun", gender:"f",
   note:"A very difficult or unpleasant situation. Very common in spoken French.\nLiterally: a galley ship.",
   example:"A: Trouver un appartement à Paris, quelle galère!\nB: Tu cherches depuis combien de temps?\nA: Trois mois, sans succès.\nB: Courage, tu vas finir par trouver.",
   exampleSrc:"A: Finding an apartment in Paris, what an ordeal!\nB: How long have you been looking?\nA: Three months, without success.\nB: Hang in there, you'll find one eventually.",
   funFact:"Originally a galley slave ship. 'C'est la galère!' is one of the most common French complaints."},

  {type:"mc", q:"Quel mot désigne un léger tremblement d'émotion?",
   opts:["Un frémissement","Un grondement","Un déchaînement","Un intermède"],
   ans:"Un frémissement",
   hint:"A subtle physical sensation of shivering from excitement, joy, or fear"},

  {type:"fb", s:"C'est {1} qu'il ait menti, je le pensais honnête.",
   a:["inconcevable"], opts:["inconcevable","indiscutable","insignifiant","incomplet"],
   hint:"Impossible to believe or imagine, beyond comprehension",
   sSrc:"It's {1} that he lied, I thought he was honest."},

  {type:"teach", trg:"l'inattendu", src:"the unexpected", pos:"noun", gender:"m",
   note:"Something that was not expected. Used as noun and adjective.\nFeminine: inattendue.",
   example:"A: L'inattendu fait le charme de la vie.\nB: Tu aimes les surprises?\nA: Oui, les bonnes surprises surtout.\nB: La routine est l'ennemi de la créativité.",
   exampleSrc:"A: The unexpected gives life its charm.\nB: You like surprises?\nA: Yes, good surprises especially.\nB: Routine is the enemy of creativity.",
   funFact:"From 'in-' (not) + 'attendu' (expected). 'L'inattendu' as a noun is very literary and elegant."},

  {type:"teach", trg:"foncièrement", src:"fundamentally / deeply", pos:"adv", gender:null,
   note:"At the deepest level, in essence.\nUsed to describe core character traits or beliefs.",
   example:"A: Il est foncièrement honnête.\nB: Oui, c'est dans sa nature.\nA: Même sous pression?\nB: Surtout sous pression, ses valeurs ne changent pas.",
   exampleSrc:"A: He is fundamentally honest.\nB: Yes, it's in his nature.\nA: Even under pressure?\nB: Especially under pressure, his values don't change.",
   funFact:"From 'foncier' (fundamental/landed). Originally related to land ownership ('un bien foncier')."},

  {type:"teach", trg:"généralement", src:"generally", pos:"adv", gender:null,
   note:"In most cases, usually.\nOne of the most common French adverbs.",
   example:"A: Généralement, les Français dînent vers vingt heures.\nB: Plus tard qu'en Amérique du Nord.\nA: C'est une question de culture.\nB: Et de rythme de vie aussi.",
   exampleSrc:"A: Generally, the French eat dinner around eight o'clock.\nB: Later than in North America.\nA: It's a cultural thing.\nB: And a lifestyle rhythm too.",
   funFact:"From 'général' + '-ement'. One of the first adverbs French learners encounter."},

  {type:"mc", q:"Que signifie 'quelle galère!' en français familier?",
   opts:["Quelle situation difficile!","Quel beau bateau!","Quelle bonne surprise!","Quel bon repas!"],
   ans:"Quelle situation difficile!",
   hint:"Originally a slave ship: now means an awful, difficult situation"},

  {type:"fb", s:"L'{1} du stress peut causer des problèmes de santé graves.",
   a:["intériorisation"], opts:["intériorisation","inanité","intégrisme","interaction"],
   hint:"Absorbing and keeping emotions inside rather than expressing them",
   sSrc:"The {1} of stress can cause serious health problems."},

  {type:"match", pairs:[
    {trg:"le frémissement", src:"shiver / tremor"},
    {trg:"la hardiesse", src:"boldness"},
    {trg:"la galère", src:"ordeal"},
    {trg:"foncièrement", src:"fundamentally"},
    {trg:"l'inattendu", src:"the unexpected"}
  ]},

  {type:"mc", q:"Quel verbe signifie 'exprimer une admiration intense'?",
   opts:["S'extasier","S'absenter","S'inscrire","S'insurger"],
   ans:"S'extasier",
   hint:"To be filled with ecstatic wonder, often while looking at something beautiful"},

  {type:"fb", s:"Il est {1} honnête, c'est dans sa nature profonde.",
   a:["foncièrement"], opts:["foncièrement","généralement","ironiquement","immensément"],
   hint:"At the deepest, most essential level of someone's character",
   sSrc:"He is {1} honest, it's in his deep nature."},

  {type:"drag_fill", s:"Le {1} du tonnerre annonce l'orage et provoque un {2} de peur.",
   blanks:{"1":"grondement","2":"frémissement"},
   pool:["grondement","frémissement","déchaînement","intermède"],
   hint:"The deep rumbling sound creates a slight shiver of fear"},

  {type:"mc", q:"L'inanité d'un débat signifie que le débat est:",
   opts:["Complètement vide et inutile","Très animé et passionné","Bien organisé","Extrêmement long"],
   ans:"Complètement vide et inutile",
   hint:"Total emptiness of meaning or purpose, going nowhere"}
]};
export default LESSON_11;
