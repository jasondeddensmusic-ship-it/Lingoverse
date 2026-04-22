// French B2 Gap Batch D Lesson 13. Language and Communication
const LESSON_13 = {id:"frv2_b2gD_l13", title:"Langue et communication", icon:"💬", xp:15, board:true, steps:[
  {type:"intro", title:"Langue et communication",
   desc:"Learn vocabulary for discussing language, speech, and communication in French.",
   goals:["Learn 10 language and communication terms","Discuss linguistic phenomena","Use meta-language vocabulary"]},

  {type:"teach", trg:"proférer", src:"to utter / to say loudly", pos:"verb", gender:null,
   note:"To say something loudly, especially threats or insults.\nFormal and always negative connotation.",
   example:"A: Il a proféré des menaces contre le témoin.\nB: C'est un délit grave.\nA: Le juge l'a rappelé à l'ordre.\nB: Il risque une peine supplémentaire.",
   exampleSrc:"A: He uttered threats against the witness.\nB: That's a serious offense.\nA: The judge called him to order.\nB: He risks an additional sentence.",
   funFact:"From Latin 'proferre' (to bring forth). Always negative: you 'profère' insults, threats, or blasphemies, never compliments."},

  {type:"teach", trg:"prénommer", src:"to name / to give a first name", pos:"verb", gender:null,
   note:"To give someone their first name.\nUsually passive: 'il est prénommé' (he is named).",
   example:"A: Comment allez-vous prénommer le bébé?\nB: On hésite entre Louise et Marguerite.\nA: Les deux sont de jolis prénoms classiques.\nB: Louise était le prénom de ma grand-mère.",
   exampleSrc:"A: What are you going to name the baby?\nB: We're choosing between Louise and Marguerite.\nA: Both are lovely classic names.\nB: Louise was my grandmother's name.",
   funFact:"French naming laws were strict until 1993. Parents had to choose from a list of saints' names. Now almost any name is allowed."},

  {type:"teach", trg:"présager", src:"to foreshadow / to predict", pos:"verb", gender:null,
   note:"To be a sign of what will happen. Also: to predict.\n'Rien ne laissait présager cette issue' = nothing foreshadowed this outcome.",
   example:"A: Ces nuages noirs présagent un orage.\nB: On devrait rentrer.\nA: Rien ne laissait présager ce changement de temps.\nB: La météo s'est trompée encore une fois.",
   exampleSrc:"A: These dark clouds foreshadow a storm.\nB: We should go back inside.\nA: Nothing foreshadowed this weather change.\nB: The forecast was wrong again.",
   funFact:"From Latin 'praesagire' (to foretell). Related to 'sage' (wise). A 'présage' (noun) is an omen, good or bad."},

  {type:"teach", trg:"prédisposer", src:"to predispose", pos:"verb", gender:null,
   note:"To make someone likely to develop or do something.\nMedical and psychological contexts.",
   example:"A: Le stress prédispose aux maladies cardiaques.\nB: C'est prouvé scientifiquement?\nA: Oui, de nombreuses études le confirment.\nB: Raison de plus pour se détendre.",
   exampleSrc:"A: Stress predisposes to heart disease.\nB: Is that scientifically proven?\nA: Yes, many studies confirm it.\nB: All the more reason to relax.",
   funFact:"From 'pré-' (before) + 'disposer' (to arrange). Genetics can 'prédisposer' to certain conditions without guaranteeing them."},

  {type:"mc",
   q:"Quel verbe signifie 'dire quelque chose de menaçant à voix haute'?",
   opts:["Proférer","Prénommer","Présager","Prédisposer"],
   ans:"Proférer",
   hint:"This formal verb is always used in negative contexts: threats, insults, or blasphemies.",
   },

  {type:"teach", trg:"préfigurer", src:"to foreshadow / to prefigure", pos:"verb", gender:null,
   note:"To be an early sign or model of something future.\nLiterary and analytical term.",
   example:"A: Ce mouvement artistique préfigurait la révolution.\nB: L'art précède souvent les changements sociaux.\nA: Les artistes sentent les tensions avant les autres.\nB: Ils sont les antennes de la société.",
   exampleSrc:"A: This artistic movement foreshadowed the revolution.\nB: Art often precedes social changes.\nA: Artists sense tensions before others.\nB: They are society's antennas.",
   funFact:"From 'pré-' (before) + 'figurer' (to represent). Used often in literary analysis and art criticism."},

  {type:"teach", trg:"la prunelle", src:"the pupil (of the eye) / wild plum", pos:"noun", gender:"f",
   note:"The dark center of the eye. Also: a small wild plum.\n'La prunelle de ses yeux' = the apple of one's eye.",
   example:"A: Sa fille est la prunelle de ses yeux.\nB: Il ferait n'importe quoi pour elle.\nA: C'est touchant de voir cet amour.\nB: Les pères et leurs filles, c'est spécial.",
   exampleSrc:"A: His daughter is the apple of his eye.\nB: He would do anything for her.\nA: It's touching to see that love.\nB: Fathers and their daughters, it's special.",
   funFact:"The expression 'la prunelle de ses yeux' dates back to the Bible. The pupil is compared to a precious little plum. Charming etymology."},

  {type:"teach", trg:"prévisionnel", src:"provisional / forecast-based", pos:"adj", gender:null,
   note:"Relating to predictions or forecasts.\n'Budget prévisionnel' = forecast budget. Feminine: prévisionnelle.",
   example:"A: Le budget prévisionnel est optimiste.\nB: Les recettes prévues sont réalistes?\nA: Pas tout à fait, il faudra ajuster.\nB: Mieux vaut être prudent dans les estimations.",
   exampleSrc:"A: The forecast budget is optimistic.\nB: Are the projected revenues realistic?\nA: Not quite, we'll need to adjust.\nB: It's better to be cautious with estimates.",
   funFact:"From 'prévision' (forecast) + '-nel'. Very common in French business: 'bilan prévisionnel', 'compte de résultat prévisionnel'."},

  {type:"fb",
   s:"Rien ne laissait {1} une telle catastrophe.",
   a:["présager"],
   opts:["présager","proférer","prénommer","préfigurer"],
   hint:"This verb means to foreshadow or predict. 'Rien ne laissait...' is its most common construction.",
   sSrc:"Nothing foreshadowed such a catastrophe."},

  {type:"teach", trg:"proéminent", src:"prominent / protruding", pos:"adj", gender:null,
   note:"Standing out physically or figuratively.\nMore physical than 'éminent' (which is about status).",
   example:"A: Il a un menton proéminent.\nB: C'est un trait de famille.\nA: On le reconnaît facilement.\nB: C'est un visage qui a du caractère.",
   exampleSrc:"A: He has a prominent chin.\nB: It's a family trait.\nA: He's easily recognizable.\nB: It's a face with character.",
   funFact:"From Latin 'pro-' (forward) + 'eminere' (to project). Physical meaning. For social prominence, use 'éminent' or 'illustre'."},

  {type:"teach", trg:"le prétexte", src:"the pretext / excuse", pos:"noun", gender:"m",
   note:"A false reason given to justify an action.\n'Sous prétexte de' = under the pretext of.",
   example:"A: Il a quitté la réunion sous prétexte d'un appel urgent.\nB: Tu penses que c'était faux?\nA: Oui, il voulait éviter la discussion.\nB: C'est un prétexte classique.",
   exampleSrc:"A: He left the meeting under the pretext of an urgent call.\nB: Do you think it was fake?\nA: Yes, he wanted to avoid the discussion.\nB: It's a classic pretext.",
   funFact:"From Latin 'praetextum' (something woven in front). The toga praetexta in Rome had a purple border. A pretext 'covers' the real reason."},

  {type:"mc",
   q:"Que signifie 'la prunelle de ses yeux'?",
   opts:["Une maladie des yeux","La personne ou la chose la plus chère","La partie la plus sombre de l'oeil","Un type de fruit sauvage"],
   ans:"La personne ou la chose la plus chère",
   hint:"This expression compares someone precious to the dark center of the eye. Similar to 'apple of one's eye'."},

  {type:"match", pairs:[
    {trg:"proférer", src:"to utter threats"},
    {trg:"présager", src:"to foreshadow"},
    {trg:"prédisposer", src:"to predispose"},
    {trg:"prunelle", src:"pupil of eye"},
    {trg:"prétexte", src:"pretext"}
  ]},

  {type:"fb",
   s:"Il a annulé le dîner sous {1} d'une migraine.",
   a:["prétexte"],
   opts:["prétexte","présage","prunelle","préambule"],
   hint:"This noun means a false reason used to justify an action, always implying dishonesty.",
   sSrc:"He cancelled the dinner under the {1} of a migraine."}
]};
export default LESSON_13;
