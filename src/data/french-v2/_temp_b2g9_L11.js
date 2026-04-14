// French B2 Gap Batch 9 — Lesson 11: Famille et Relations
// Family and relationship vocabulary

const LESSON_11 = {id:"frv2_b2g9_l11", title:"Famille et Relations", icon:"👨‍👩‍👧", xp:15, board:true, steps:[
  {type:"intro", title:"Famille et Relations",
   desc:"Learn advanced vocabulary for discussing family structures, relationships, and social bonds. B2 requires nuanced language about human connections.",
   goals:["Learn 20 family and relationship words","Describe family dynamics","Discuss social bonds and conflicts"]},

  {type:"teach", trg:"l'arrière-grand-parent", src:"great-grandparent", pos:"noun", gender:"m",
   note:"Arrière (back, behind) + grand-parent.\nPlural: les arrière-grands-parents.",
   example:"A: Mes arrière-grands-parents venaient de Bretagne.\nB: C'est une belle région.",
   exampleSrc:"A: My great-grandparents came from Brittany.\nB: It's a beautiful region.",
   funFact:"French stacks arrière- for each generation: arrière-arrière-grand-parent = great-great-grandparent."},

  {type:"teach", trg:"la main-d'oeuvre", src:"workforce, labor", pos:"noun", gender:"f",
   note:"Main (hand) + d'oeuvre (of work).\nThe available workers or cost of labor.",
   example:"A: La main-d'oeuvre qualifiée manque dans ce secteur.\nB: Il faut investir dans la formation.",
   exampleSrc:"A: Skilled labor is lacking in this sector.\nB: We must invest in training.",
   funFact:"Literally 'hand of work'. The word captures the manual origin of labor."},

  {type:"teach", trg:"le non-fumeur", src:"non-smoker", pos:"noun", gender:"m",
   note:"Non- + fumeur (smoker).\nAlso adjective: une zone non-fumeur.",
   example:"A: La section non-fumeur est à droite.\nB: Depuis 2007, tout est non-fumeur en France.",
   exampleSrc:"A: The non-smoking section is on the right.\nB: Since 2007, everything is non-smoking in France.",
   funFact:"France banned smoking in public places in 2007. Before that, restaurants had fumeur/non-fumeur sections."},

  {type:"teach", trg:"nous-mêmes", src:"ourselves", pos:"pron", gender:null,
   note:"Nous + mêmes. Emphatic pronoun for 'we ourselves'.\nPattern: moi-même, toi-même, etc.",
   example:"A: Nous l'avons construit nous-mêmes.\nB: Sans aucune aide extérieure.",
   exampleSrc:"A: We built it ourselves.\nB: Without any outside help.",
   funFact:"The même pattern works for all persons: moi-même, toi-même, lui-même, elle-même."},

  {type:"teach", trg:"l'adolescence", src:"adolescence", pos:"noun", gender:"f",
   note:"From Latin adolescere (to grow up).\nThe teenage years.",
   example:"A: L'adolescence est une période difficile.\nB: Les changements hormonaux affectent tout.",
   exampleSrc:"A: Adolescence is a difficult period.\nB: Hormonal changes affect everything.",
   funFact:"French distinguishes adolescence (the period) from adolescent (the person). Both from Latin."},

  {type:"teach", trg:"le demi-tour", src:"U-turn, about-face", pos:"noun", gender:"m",
   note:"Demi (half) + tour (turn).\nA 180-degree reversal, literal or figurative.",
   example:"A: Le conducteur a fait demi-tour.\nB: La route était bloquée par un accident.",
   exampleSrc:"A: The driver made a U-turn.\nB: The road was blocked by an accident.",
   funFact:"Faire demi-tour is also used figuratively: the government did a U-turn on its policy."},

  {type:"teach", trg:"l'ex", src:"ex (former partner)", pos:"noun", gender:"m",
   note:"Short for ex-conjoint, ex-mari, ex-femme.\nInformal but universally understood.",
   example:"A: Mon ex habite dans le même quartier.\nB: C'est parfois gênant de le croiser.",
   exampleSrc:"A: My ex lives in the same neighborhood.\nB: It's sometimes awkward to run into him.",
   funFact:"Ex is used identically in French and English. It works for both masculine and feminine."},

  {type:"teach", trg:"la nôtre", src:"ours", pos:"pron", gender:null,
   note:"Possessive pronoun. La nôtre (f), le nôtre (m), les nôtres (pl).\nNote the circumflex on ô.",
   example:"A: Leur maison est grande, mais la nôtre est plus chaleureuse.\nB: Je suis d'accord, j'adore notre maison.",
   exampleSrc:"A: Their house is big, but ours is warmer.\nB: I agree, I love our house.",
   funFact:"The circumflex on nôtre (pronoun) distinguishes it from notre (adjective) without circumflex."},

  {type:"teach", trg:"l'oral", src:"oral exam, spoken test", pos:"noun", gender:"m",
   note:"From oral (oral, spoken).\nThe spoken part of an exam, as opposed to l'écrit.",
   example:"A: L'oral du bac est dans deux semaines.\nB: Je suis mort de trac.",
   exampleSrc:"A: The oral bac exam is in two weeks.\nB: I'm terrified.",
   funFact:"The French baccalauréat includes both written (l'écrit) and oral (l'oral) exams."},

  {type:"mc", q:"Les arrière-grands-parents sont:", opts:["Les parents de vos parents","Les grands-parents de vos parents","Les parents de vos grands-parents","Les frères de vos grands-parents"], ans:"Les parents de vos grands-parents",
   hint:"Arrière adds one generation back. Grand-parent + one more = great-grandparent."},

  {type:"teach", trg:"l'intériorisation", src:"internalization", pos:"noun", gender:"f",
   note:"From intérioriser (to internalize) + -ation.\nAbsorbing external values or emotions.",
   example:"A: L'intériorisation du stress cause des problèmes de santé.\nB: Il faut apprendre à s'exprimer.",
   exampleSrc:"A: Internalizing stress causes health problems.\nB: You need to learn to express yourself.",
   funFact:"Intériorisation is a key term in psychology and sociology, used frequently in French academia."},

  {type:"teach", trg:"la déscolarisation", src:"dropping out of school", pos:"noun", gender:"f",
   note:"Dé- (un-) + scolarisation (schooling).\nLeaving the education system.",
   example:"A: La déscolarisation des jeunes est un problème grave.\nB: Il faut trouver des solutions adaptées.",
   exampleSrc:"A: Young people dropping out of school is a serious problem.\nB: We need to find appropriate solutions.",
   funFact:"France has mandatory schooling until age 16. Déscolarisation before that age is illegal."},

  {type:"teach", trg:"le pire", src:"the worst", pos:"noun", gender:"m",
   note:"Superlative of mauvais.\nUsed as noun: le pire = the worst thing/outcome.",
   example:"A: Le pire, c'est qu'il ne regrette rien.\nB: Il n'a aucun remords.",
   exampleSrc:"A: The worst part is that he regrets nothing.\nB: He has no remorse.",
   funFact:"Pire comes from Latin pejor. English 'pejorative' shares the same root."},

  {type:"teach", trg:"le pendant", src:"counterpart, matching piece", pos:"noun", gender:"m",
   note:"From pendre (to hang). Something that hangs alongside.\nLe pendant de = the counterpart of.",
   example:"A: Ce tableau est le pendant de celui-ci.\nB: Ils forment une paire.",
   exampleSrc:"A: This painting is the counterpart of this one.\nB: They form a pair.",
   funFact:"As a preposition, pendant means 'during'. As a noun, it means 'matching counterpart'."},

  {type:"fb", s:"Nous l'avons fait {1}, sans aide.", a:["nous-mêmes"], opts:["nous-mêmes","la nôtre","l'oral","le pendant"],
   hint:"The emphatic pronoun meaning 'we ourselves'. Adds emphasis to nous.",
   sSrc:"We did it {1}, without help."},

  {type:"teach", trg:"autour de soi", src:"around oneself", pos:"adv", gender:null,
   note:"Autour (around) + de + soi (oneself).\nSoi is the reflexive pronoun for 'one'.",
   example:"A: Il faut regarder autour de soi.\nB: Le danger peut venir de n'importe où.",
   exampleSrc:"A: You need to look around you.\nB: Danger can come from anywhere.",
   funFact:"Soi is the impersonal reflexive. Autour de soi = around oneself (general), autour de lui = around him (specific)."},

  {type:"teach", trg:"donnant-donnant", src:"give and take, tit for tat", pos:"adv", gender:null,
   note:"Donnant (giving) + donnant (giving).\nA fair exchange: I give, you give.",
   example:"A: C'est du donnant-donnant.\nB: Si tu m'aides, je t'aide en retour.",
   exampleSrc:"A: It's give and take.\nB: If you help me, I'll help you in return.",
   funFact:"This expression dates from merchant culture: no goods without payment, no payment without goods."},

  {type:"mc", q:"'Le pire' est le superlatif de:", opts:["Bon","Mauvais","Grand","Petit"], ans:"Mauvais",
   hint:"Mauvais > pire > le pire. The worst, superlative of bad."},

  {type:"fb", s:"La {1} des adolescents est un problème social majeur.", a:["déscolarisation"], opts:["déscolarisation","intériorisation","adolescence","main-d'oeuvre"],
   hint:"When young people leave the education system. Dé- (undo) + schooling.",
   sSrc:"Young people {1} is a major social problem."},

  {type:"match", pairs:[
    {trg:"l'arrière-grand-parent", src:"great-grandparent"},
    {trg:"la main-d'oeuvre", src:"workforce"},
    {trg:"le non-fumeur", src:"non-smoker"},
    {trg:"le demi-tour", src:"U-turn"}
  ]},

  {type:"mc", q:"'Donnant-donnant' exprime:", opts:["Un cadeau gratuit","Un échange équitable","Une compétition","Un refus"], ans:"Un échange équitable",
   hint:"Giving-giving: both sides contribute equally. A fair deal."},

  {type:"fb", s:"Ce tableau est le {1} de celui qui est en face.", a:["pendant"], opts:["pendant","pire","demi-tour","oral"],
   hint:"The matching counterpart. Two paintings that form a pair.",
   sSrc:"This painting is the {1} of the one opposite."},

  {type:"match", pairs:[
    {trg:"nous-mêmes", src:"ourselves"},
    {trg:"la nôtre", src:"ours"},
    {trg:"l'ex", src:"ex-partner"},
    {trg:"donnant-donnant", src:"give and take"}
  ]}
]};

export default LESSON_11;
