// French B2 Gap Batch D Lesson 1 — Justice and Law
const LESSON_1 = {id:"frv2_b2gD_l1", title:"Justice et droit", icon:"⚖️", xp:15, board:true, steps:[
  {type:"intro", title:"Justice et droit",
   desc:"Build vocabulary for discussing the legal system, crime, and justice in French.",
   goals:["Learn 10 key legal and justice terms","Discuss court proceedings and law enforcement","Use formal register for legal contexts"]},

  {type:"teach", trg:"le prévenu", src:"the defendant / the accused", pos:"noun", gender:"m",
   note:"Person charged with a crime, before trial.\nMore formal than 'accusé'.",
   example:"A: Le prévenu a nié toutes les accusations.\nB: Son avocat était très convaincant.\nA: Le juge a reporté le verdict.\nB: La décision sera rendue la semaine prochaine.",
   exampleSrc:"A: The defendant denied all charges.\nB: His lawyer was very convincing.\nA: The judge postponed the verdict.\nB: The decision will be given next week.",
   funFact:"From 'prévenir' (to warn/inform). Originally meant 'the one who has been notified' of charges."},

  {type:"teach", trg:"la désobéissance", src:"disobedience", pos:"noun", gender:"f",
   note:"Refusal to obey rules or authority.\nOften paired with 'civile' for protests.",
   example:"A: La désobéissance civile a une longue histoire.\nB: Gandhi et Martin Luther King en sont des exemples.\nA: C'est toujours d'actualité?\nB: Oui, les militants climatiques l'utilisent aussi.",
   exampleSrc:"A: Civil disobedience has a long history.\nB: Gandhi and Martin Luther King are examples.\nA: Is it still relevant today?\nB: Yes, climate activists use it too.",
   funFact:"From 'dés-' (un-) + 'obéissance' (obedience). Henry David Thoreau coined the modern concept in 1849."},

  {type:"teach", trg:"la pénalité", src:"the penalty", pos:"noun", gender:"f",
   note:"A punishment imposed for breaking a rule.\nUsed in law, sports, and everyday contexts.",
   example:"A: Quelle est la pénalité pour cette infraction?\nB: Une amende de cinq cents euros.\nA: C'est assez sévère.\nB: C'est pour dissuader les récidivistes.",
   exampleSrc:"A: What is the penalty for this offense?\nB: A fine of five hundred euros.\nA: That's quite severe.\nB: It's to deter repeat offenders.",
   funFact:"From Latin 'poenalitas'. The root 'poena' (punishment) also gives 'peine' (pain/sentence)."},

  {type:"teach", trg:"le confrère", src:"the colleague / fellow member", pos:"noun", gender:"m",
   note:"A colleague in the same profession.\nEspecially common among lawyers, doctors, journalists.",
   example:"A: Mon confrère a gagné un procès important.\nB: Celui contre la multinationale?\nA: Oui, tout le barreau en parle.\nB: C'est une victoire pour la profession.",
   exampleSrc:"A: My colleague won an important case.\nB: The one against the multinational?\nA: Yes, the whole bar is talking about it.\nB: It's a victory for the profession.",
   funFact:"From 'con-' (together) + 'frère' (brother). Literally 'fellow brother' in a profession. Feminine: 'la consoeur'."},

  {type:"mc",
   q:"Qui est le prévenu dans un procès?",
   opts:["La personne accusée d'un crime","Le juge qui préside l'audience","L'avocat de la défense","Le témoin principal"],
   ans:"La personne accusée d'un crime",
   hint:"Think about who has been 'notified' of charges against them."},

  {type:"teach", trg:"l'outrage", src:"the outrage / contempt", pos:"noun", gender:"m",
   note:"A serious insult or offense.\nLegal term: 'outrage au tribunal' (contempt of court).",
   example:"A: Il a été condamné pour outrage à agent.\nB: Qu'est-ce qu'il a fait exactement?\nA: Il a insulté un policier pendant un contrôle.\nB: C'est une infraction assez courante.",
   exampleSrc:"A: He was convicted of insulting an officer.\nB: What exactly did he do?\nA: He insulted a police officer during a check.\nB: It's a fairly common offense.",
   funFact:"From 'outre' (beyond). An outrage goes 'beyond' acceptable limits. Same root as 'outrageous' in English."},

  {type:"teach", trg:"la justification", src:"the justification", pos:"noun", gender:"f",
   note:"A reason or explanation that defends an action.\nUsed in law, writing, and everyday arguments.",
   example:"A: Quelle est votre justification pour cette décision?\nB: Les données montrent que c'était nécessaire.\nA: Le conseil acceptera-t-il cette explication?\nB: Je l'espère, les preuves sont solides.",
   exampleSrc:"A: What is your justification for this decision?\nB: The data shows it was necessary.\nA: Will the board accept this explanation?\nB: I hope so, the evidence is solid.",
   funFact:"From Latin 'justificare' (to make just). In typography, 'justification' means aligning text to both margins."},

  {type:"teach", trg:"le pourvoyeur", src:"the supplier / provider", pos:"noun", gender:"m",
   note:"Someone who supplies or provides something.\nCan be neutral or negative (arms, drugs).",
   example:"A: Le pourvoyeur principal a été arrêté.\nB: Il alimentait tout le réseau?\nA: Oui, depuis plusieurs années.\nB: C'est un coup dur pour l'organisation.",
   exampleSrc:"A: The main supplier was arrested.\nB: Was he supplying the whole network?\nA: Yes, for several years.\nB: It's a major blow to the organization.",
   funFact:"From 'pourvoir' (to provide). The verb is highly irregular with forms like 'je pourvois' and 'j'ai pourvu'."},

  {type:"fb",
   s:"La {1} civile est un acte de protestation non violente.",
   a:["désobéissance"],
   opts:["désobéissance","pénalité","justification","outrage"],
   hint:"Think of the word that combines 'un-' with 'obedience' to describe peaceful resistance.",
   sSrc:"Civil {1} is an act of non-violent protest."},

  {type:"teach", trg:"la proie", src:"the prey / the victim", pos:"noun", gender:"f",
   note:"An animal hunted by a predator. Figuratively: a victim.\n'Être en proie à' means to be plagued by.",
   example:"A: Les escrocs ciblent souvent les personnes âgées.\nB: Elles sont des proies faciles.\nA: Il faut mieux les protéger.\nB: La prévention est essentielle.",
   exampleSrc:"A: Scammers often target elderly people.\nB: They are easy prey.\nA: We need to protect them better.\nB: Prevention is essential.",
   funFact:"From Latin 'praeda' (booty). The expression 'oiseau de proie' (bird of prey) is common in French."},

  {type:"teach", trg:"le prédateur", src:"the predator", pos:"noun", gender:"m",
   note:"An animal that hunts others. Figuratively: someone who exploits.\nFeminine: prédatrice.",
   example:"A: Les prédateurs financiers sont difficiles à détecter.\nB: Ils utilisent des méthodes très sophistiquées.\nA: Comment s'en protéger?\nB: En vérifiant toujours les sources d'information.",
   exampleSrc:"A: Financial predators are hard to detect.\nB: They use very sophisticated methods.\nA: How can we protect ourselves?\nB: By always checking the sources of information.",
   funFact:"From Latin 'praedator' (plunderer). Shares the same root as 'proie' (prey)."},

  {type:"mc",
   q:"Que signifie 'être en proie à la panique'?",
   opts:["Être submergé par la panique","Chasser quelqu'un en panique","Fuir un prédateur","Provoquer la panique chez les autres"],
   ans:"Être submergé par la panique",
   hint:"The expression means to be seized or overwhelmed by something negative."},

  {type:"match", pairs:[
    {trg:"prévenu", src:"defendant"},
    {trg:"désobéissance", src:"disobedience"},
    {trg:"pénalité", src:"penalty"},
    {trg:"pourvoyeur", src:"supplier"},
    {trg:"outrage", src:"contempt"}
  ]},

  {type:"fb",
   s:"Le {1} a fourni des armes au réseau criminel pendant des années.",
   a:["pourvoyeur"],
   opts:["pourvoyeur","prévenu","confrère","prédateur"],
   hint:"This word describes someone who provides or supplies goods, often in a criminal context.",
   sSrc:"The {1} supplied weapons to the criminal network for years."},

  {type:"mc",
   q:"Quel mot décrit un collègue dans la même profession, surtout chez les avocats?",
   opts:["un confrère","un pourvoyeur","un prévenu","un prédateur"],
   ans:"un confrère",
   hint:"This word literally means 'fellow brother' and is used among professionals like lawyers and doctors."}
]};
export default LESSON_1;
