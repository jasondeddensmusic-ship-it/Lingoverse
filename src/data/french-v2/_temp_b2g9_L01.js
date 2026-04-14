// French B2 Gap Batch 9 — Lesson 1: Société et Citoyenneté
// Society and citizenship vocabulary

const LESSON_1 = {id:"frv2_b2g9_l1", title:"Société et Citoyenneté", icon:"🏛️", xp:15, board:true, steps:[
  {type:"intro", title:"Société et Citoyenneté",
   desc:"Explore the vocabulary of civic life, social structures, and democratic participation. B2 learners need these words to discuss politics, society, and community engagement.",
   goals:["Learn 20 society and citizenship words","Discuss democratic institutions","Express opinions on social issues"]},

  {type:"teach", trg:"la démocratisation", src:"democratization", pos:"noun", gender:"f",
   note:"From démocratiser (to democratize) + -ation.\nFeminine noun ending in -ation.",
   example:"A: La démocratisation de l'enseignement a changé la société.\nB: Oui, tout le monde peut étudier maintenant.",
   exampleSrc:"A: The democratization of education changed society.\nB: Yes, everyone can study now.",
   funFact:"All French nouns ending in -ation are feminine. This pattern comes from Latin -atio."},

  {type:"teach", trg:"la désobéissance", src:"disobedience", pos:"noun", gender:"f",
   note:"Dés- (un-) + obéissance (obedience).\nOften paired with civile: la désobéissance civile.",
   example:"A: La désobéissance civile est-elle légitime?\nB: Parfois, quand les lois sont injustes.",
   exampleSrc:"A: Is civil disobedience legitimate?\nB: Sometimes, when laws are unjust.",
   funFact:"The concept was popularized in French by Thoreau's essay, translated as 'La Désobéissance civile'."},

  {type:"teach", trg:"l'affirmation", src:"assertion, affirmation", pos:"noun", gender:"f",
   note:"From affirmer (to assert).\nUsed for strong statements or identity claims.",
   example:"A: L'affirmation de soi est importante.\nB: Oui, il faut savoir ce qu'on veut.",
   exampleSrc:"A: Self-assertion is important.\nB: Yes, you need to know what you want.",
   funFact:"In logic, affirmation is the opposite of negation. French debate culture loves both."},

  {type:"teach", trg:"l'administrateur", src:"administrator", pos:"noun", gender:"m",
   note:"Masculine form. Feminine: l'administratrice.\nFrom administrer (to administer).",
   example:"A: L'administrateur a signé le document.\nB: Il gère tout le département.",
   exampleSrc:"A: The administrator signed the document.\nB: He manages the whole department.",
   funFact:"Latin administrare meant 'to serve'. The French word kept the service connotation."},

  {type:"teach", trg:"l'identification", src:"identification", pos:"noun", gender:"f",
   note:"From identifier (to identify) + -ation.\nUsed for ID processes and psychological concepts.",
   example:"A: L'identification des victimes prend du temps.\nB: La police travaille sans relâche.",
   exampleSrc:"A: Identifying the victims takes time.\nB: The police are working tirelessly.",
   funFact:"Identical spelling in English and French, but pronounced very differently: ee-don-tee-fee-kah-SYON."},

  {type:"teach", trg:"la justification", src:"justification", pos:"noun", gender:"f",
   note:"From justifier (to justify) + -ation.\nUsed in arguments, essays, and legal contexts.",
   example:"A: Quelle est la justification de cette décision?\nB: Le rapport explique tout en détail.",
   exampleSrc:"A: What is the justification for this decision?\nB: The report explains everything in detail.",
   funFact:"In French typography, justification also means text alignment, as in English."},

  {type:"teach", trg:"la persévérance", src:"perseverance", pos:"noun", gender:"f",
   note:"From persévérer (to persevere).\nA key quality valued in French education.",
   example:"A: Sa persévérance l'a mené au succès.\nB: Il n'a jamais abandonné.",
   exampleSrc:"A: His perseverance led him to success.\nB: He never gave up.",
   funFact:"The French spelling has accents that English dropped: persévérance vs perseverance."},

  {type:"teach", trg:"la persuasion", src:"persuasion", pos:"noun", gender:"f",
   note:"From persuader (to persuade).\nCentral to French rhetorical tradition.",
   example:"A: L'art de la persuasion est essentiel en politique.\nB: Un bon discours peut tout changer.",
   exampleSrc:"A: The art of persuasion is essential in politics.\nB: A good speech can change everything.",
   funFact:"French rhetoric tradition dates to the salons of the 17th century, where persuasion was an art form."},

  {type:"teach", trg:"la perspicacité", src:"perceptiveness, insight", pos:"noun", gender:"f",
   note:"From perspicace (perceptive).\nA refined, literary word for sharp insight.",
   example:"A: J'admire sa perspicacité.\nB: Elle comprend toujours la situation avant les autres.",
   exampleSrc:"A: I admire her perceptiveness.\nB: She always understands the situation before others.",
   funFact:"From Latin perspicax meaning 'sharp-sighted'. Related to English 'perspicacious'."},

  {type:"mc", q:"La démocratisation de l'enseignement signifie que:", opts:["L'école est réservée aux riches","Tout le monde peut étudier","Les professeurs décident tout","L'éducation est gratuite uniquement"], ans:"Tout le monde peut étudier",
   hint:"Democratization means making something available to all, not just a select few."},

  {type:"teach", trg:"le pamphlet", src:"pamphlet, lampoon", pos:"noun", gender:"m",
   note:"Masculine noun. A short, sharp written attack.\nStronger than English 'pamphlet': implies criticism.",
   example:"A: Il a publié un pamphlet contre le gouvernement.\nB: C'était très courageux à cette époque.",
   exampleSrc:"A: He published a pamphlet against the government.\nB: That was very courageous at that time.",
   funFact:"In French, pamphlet means a polemical text. For informational brochures, French uses 'brochure' or 'dépliant'."},

  {type:"teach", trg:"le pamphlétaire", src:"pamphleteer", pos:"noun", gender:"m",
   note:"One who writes pamphlets.\nFeminine: la pamphlétaire.\nA literary and political figure.",
   example:"A: Voltaire était un grand pamphlétaire.\nB: Ses écrits ont changé la pensée française.",
   exampleSrc:"A: Voltaire was a great pamphleteer.\nB: His writings changed French thought.",
   funFact:"France has a long tradition of political pamphleteering from the Revolution onward."},

  {type:"teach", trg:"la pancarte", src:"sign, placard", pos:"noun", gender:"f",
   note:"A board or sign carried or displayed.\nVery common at protests and demonstrations.",
   example:"A: Les manifestants portaient des pancartes.\nB: On pouvait lire leurs revendications.",
   exampleSrc:"A: The demonstrators were carrying signs.\nB: You could read their demands.",
   funFact:"From Old French pan (piece of cloth) + carte (board). Literally a board with a message."},

  {type:"teach", trg:"l'outrage", src:"outrage, contempt", pos:"noun", gender:"m",
   note:"Masculine noun. Stronger than English 'outrage'.\nLegal term: outrage à agent = contempt of an officer.",
   example:"A: Il a été accusé d'outrage à magistrat.\nB: C'est une infraction très sérieuse.",
   exampleSrc:"A: He was accused of contempt of a judge.\nB: That is a very serious offense.",
   funFact:"In French law, outrage is a specific criminal offense. It is not just an emotion."},

  {type:"fb", s:"La {1} civile est parfois le seul moyen de protester.", a:["désobéissance"], opts:["désobéissance","persuasion","justification","identification"],
   hint:"When laws are unjust, people may resort to this form of defiance.",
   sSrc:"Civil {1} is sometimes the only way to protest."},

  {type:"teach", trg:"la perquisition", src:"search (legal)", pos:"noun", gender:"f",
   note:"A legal search of premises.\nPerquisitionner = to search (a place, legally).",
   example:"A: La police a effectué une perquisition.\nB: Ils ont trouvé des preuves importantes.",
   exampleSrc:"A: The police carried out a search.\nB: They found important evidence.",
   funFact:"From Latin perquisitio. Only used for official, authorized searches, never casual ones."},

  {type:"teach", trg:"perquisitionner", src:"to search (premises)", pos:"verb", gender:null,
   note:"Legal term for searching a property.\nAlways implies official authority.",
   example:"A: La police va perquisitionner le bureau.\nB: Ils ont un mandat du juge.",
   exampleSrc:"A: The police will search the office.\nB: They have a warrant from the judge.",
   funFact:"You cannot perquisitionner a person. For people, French uses 'fouiller'."},

  {type:"teach", trg:"l'incapacité", src:"incapacity, inability", pos:"noun", gender:"f",
   note:"In- (not) + capacité (capacity).\nLegal, medical, and everyday usage.",
   example:"A: Son incapacité à décider frustre tout le monde.\nB: Il hésite toujours trop longtemps.",
   exampleSrc:"A: His inability to decide frustrates everyone.\nB: He always hesitates too long.",
   funFact:"In French law, incapacité juridique means a person cannot exercise their legal rights."},

  {type:"teach", trg:"l'insuffisance", src:"insufficiency, inadequacy", pos:"noun", gender:"f",
   note:"In- (not) + suffisance (sufficiency).\nMedical: insuffisance cardiaque = heart failure.",
   example:"A: L'insuffisance de moyens ralentit le projet.\nB: Il nous faut plus de financement.",
   exampleSrc:"A: The lack of resources is slowing the project.\nB: We need more funding.",
   funFact:"Unlike English 'insufficiency', French insuffisance is very common in medical contexts."},

  {type:"teach", trg:"l'inefficacité", src:"inefficiency, ineffectiveness", pos:"noun", gender:"f",
   note:"In- (not) + efficacité (efficiency).\nUsed to criticize systems and organizations.",
   example:"A: L'inefficacité de cette administration est connue.\nB: Les dossiers traînent pendant des mois.",
   exampleSrc:"A: This administration's inefficiency is well known.\nB: Files drag on for months.",
   funFact:"French bureaucratic inefficiency is a national running joke, often called 'le parcours du combattant'."},

  {type:"mc", q:"Un pamphlet en français est:", opts:["Un guide touristique","Un texte polémique et critique","Un roman court","Une lettre d'amour"], ans:"Un texte polémique et critique",
   hint:"Unlike the English meaning, the French word implies a sharp, critical written attack."},

  {type:"fb", s:"La police a {1} les locaux de l'entreprise.", a:["perquisitionné"], opts:["perquisitionné","persuadé","identifié","justifié"],
   hint:"The legal term for an authorized search of premises.",
   sSrc:"The police {1} the company's premises."},

  {type:"match", pairs:[
    {trg:"la persévérance", src:"perseverance"},
    {trg:"la persuasion", src:"persuasion"},
    {trg:"la perspicacité", src:"insight"},
    {trg:"l'outrage", src:"contempt (legal)"}
  ]},

  {type:"mc", q:"L'insuffisance cardiaque est:", opts:["Un problème de digestion","Une défaillance du coeur","Un excès d'énergie","Une maladie de la peau"], ans:"Une défaillance du coeur",
   hint:"Cardiaque relates to the heart. Insuffisance means something is not working well enough."},

  {type:"fb", s:"Les manifestants brandissaient des {1} dans la rue.", a:["pancartes"], opts:["pancartes","pamphlets","perquisitions","persuasions"],
   hint:"Protesters carry these boards with slogans written on them.",
   sSrc:"The protesters were waving {1} in the street."},

  {type:"mc", q:"Quelle est la forme féminine d'administrateur?", opts:["Administrateuse","Administratrice","Administrateure","Administrateresse"], ans:"Administratrice",
   hint:"The feminine form uses the -trice ending, common for -teur nouns."},

  {type:"match", pairs:[
    {trg:"la démocratisation", src:"democratization"},
    {trg:"la désobéissance", src:"disobedience"},
    {trg:"la pancarte", src:"placard, sign"},
    {trg:"l'incapacité", src:"inability"}
  ]}
]};

export default LESSON_1;
