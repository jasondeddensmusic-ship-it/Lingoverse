// L07 - Politics & Society
const LESSON_7 = {id:"frv2_b1gap_l7", title:"Politique et société", icon:"\u{1F3DB}", xp:15, board:true, steps:[

{type:"intro", title:"Politique et société",
 desc:"Build your vocabulary for political and social discussions. Elections, power, and civic life.",
 goals:["Learn 20 words about politics and society","Discuss elections and governance","Express opinions about social issues"]},

{type:"teach", trg:"l'actionnaire", src:"shareholder", pos:"noun", gender:"m",
 note:"Masculine/feminine noun. An owner of company shares.\nFrom action (share).",
 example:"A: Les actionnaires ont voté contre le plan.\nB: Le directeur devra changer de stratégie.",
 exampleSrc:"A: The shareholders voted against the plan.\nB: The director will have to change strategy.",
 funFact:"From action (share/stock). An actionnaire owns actions. The assemblée des actionnaires is the AGM."},

{type:"teach", trg:"l'allocation", src:"allowance, benefit payment", pos:"noun", gender:"f",
 note:"Feminine noun. Government financial aid.\nAllocations familiales = child benefits.",
 example:"A: Les allocations familiales aident les parents.\nB: C'est une aide importante pour beaucoup de familles.",
 exampleSrc:"A: Child benefits help parents.\nB: It's important aid for many families.",
 funFact:"La CAF (Caisse d'Allocations Familiales) is every French person's relationship with the welfare state."},

{type:"teach", trg:"l'anarchiste", src:"anarchist", pos:"noun", gender:"m",
 note:"Masculine/feminine noun. Also used as adjective.\nPerson who opposes organized government.",
 example:"A: Proudhon était un célèbre anarchiste français.\nB: Il a dit que 'la propriété, c'est le vol.'",
 exampleSrc:"A: Proudhon was a famous French anarchist.\nB: He said that 'property is theft.'",
 funFact:"France has a strong anarchist tradition. The symbol A-in-circle originates from the French movement."},

{type:"teach", trg:"l'aristocrate", src:"aristocrat", pos:"noun", gender:"m",
 note:"Masculine/feminine noun. A member of the nobility.\nFrom Greek aristos (best) + kratos (power).",
 example:"A: Les aristocrates ont perdu leur pouvoir après la Révolution.\nB: Beaucoup ont dû fuir le pays.",
 exampleSrc:"A: The aristocrats lost their power after the Revolution.\nB: Many had to flee the country.",
 funFact:"'Aristocrate' was a deadly insult during the French Revolution. The guillotine awaited."},

{type:"teach", trg:"aristocratique", src:"aristocratic", pos:"adj", gender:null,
 note:"Adjective. Same form for m/f.\nDescribes elegance, refinement, or noble origin.",
 example:"A: Ce château a un charme aristocratique.\nB: On imagine facilement la vie de l'époque.",
 exampleSrc:"A: This castle has an aristocratic charm.\nB: You can easily imagine life back then.",
 funFact:"Used figuratively for anything elegant and refined, even without actual nobility involved."},

{type:"mc",
 q:"Quel mot désigne une aide financière versée par l'État ?",
 opts:["une allocation","une action","une accusation","une adhésion"],
 ans:"une allocation",
 hint:"The CAF distributes these payments to French families. Think of government benefits."},

{type:"teach", trg:"l'accusation", src:"accusation, charge", pos:"noun", gender:"f",
 note:"Feminine noun. A formal charge or blame.\nL'acte d'accusation = the indictment.",
 example:"A: L'accusation manque de preuves.\nB: L'avocat va demander l'acquittement.",
 exampleSrc:"A: The accusation lacks evidence.\nB: The lawyer will request an acquittal.",
 funFact:"In French courts, the prosecution side is literally called 'l'accusation.' Very dramatic."},

{type:"teach", trg:"acquitter", src:"to acquit, to pay", pos:"verb", gender:null,
 note:"Regular -er verb. Double meaning: found not guilty, or to pay a debt.\nS'acquitter de = to fulfill.",
 example:"A: Le tribunal l'a acquitté de toutes les charges.\nB: Sa famille est soulagée.",
 exampleSrc:"A: The court acquitted him of all charges.\nB: His family is relieved.",
 funFact:"Acquitter une facture means to pay a bill. S'acquitter d'une obligation means to fulfill a duty."},

{type:"teach", trg:"l'attentat", src:"attack, assassination attempt", pos:"noun", gender:"m",
 note:"Masculine noun. A violent political attack.\nAttentat à la bombe = bombing.",
 example:"A: L'attentat a choqué tout le pays.\nB: Une cérémonie d'hommage est prévue demain.",
 exampleSrc:"A: The attack shocked the entire country.\nB: A memorial ceremony is planned for tomorrow.",
 funFact:"From attenter (to attempt against). An attentat is always violent and political, unlike attaque."},

{type:"teach", trg:"arbitraire", src:"arbitrary", pos:"adj", gender:null,
 note:"Adjective. Same form for m/f. Based on whim, not reason.\nAlso a noun: l'arbitraire.",
 example:"A: Cette décision semble totalement arbitraire.\nB: Il n'y a aucune justification logique.",
 exampleSrc:"A: This decision seems totally arbitrary.\nB: There's no logical justification.",
 funFact:"L'arbitraire du signe is Saussure's key linguistic concept: the connection between word and meaning is arbitrary."},

{type:"fb",
 s:"Le tribunal l'a {1} de toutes les charges.",
 a:["acquitté"],
 opts:["acquitté","accusé","attaqué","arbitré"],
 hint:"This verb means to declare someone not guilty in court.",
 sSrc:"The court {1} him of all charges."},

{type:"teach", trg:"arbitrer", src:"to arbitrate, to referee", pos:"verb", gender:null,
 note:"Regular -er verb. To judge a dispute or officiate a game.\nL'arbitre = the referee.",
 example:"A: Qui va arbitrer le match ce soir ?\nB: Un arbitre international, apparemment.",
 exampleSrc:"A: Who's going to referee tonight's match?\nB: An international referee, apparently.",
 funFact:"In French football, yelling at the arbitre is practically a national sport. 'L'arbitre est aveugle!'"},

{type:"teach", trg:"l'armement", src:"armament, weaponry", pos:"noun", gender:"m",
 note:"Masculine noun. Weapons collectively.\nIndustrie de l'armement = arms industry.",
 example:"A: La course à l'armement inquiète les experts.\nB: Le désarmement semble impossible.",
 exampleSrc:"A: The arms race worries experts.\nB: Disarmament seems impossible.",
 funFact:"France is one of the world's top arms exporters. L'armement is regularly debated in the Assemblée."},

{type:"teach", trg:"l'associatif", src:"community-based, associative", pos:"adj", gender:null,
 note:"Adjective. Associatif (m), associative (f).\nLe tissu associatif = community fabric.",
 example:"A: La vie associative est très riche dans cette ville.\nB: Il y a des clubs pour tout le monde.",
 exampleSrc:"A: Community life is very rich in this city.\nB: There are clubs for everyone.",
 funFact:"France's 'loi 1901' makes creating an association incredibly easy. There are 1.5 million in France."},

{type:"mc",
 q:"Quel mot décrit une attaque violente à caractère politique ?",
 opts:["un attentat","une accusation","un armement","un arbitrage"],
 ans:"un attentat",
 hint:"This masculine noun specifically describes violent political attacks, not general arguments."},

{type:"teach", trg:"l'assistance", src:"assistance, audience", pos:"noun", gender:"f",
 note:"Feminine noun. Help or the people present.\nAssistance publique = public welfare.",
 example:"A: L'assistance a applaudi le discours.\nB: C'était un moment très émouvant.",
 exampleSrc:"A: The audience applauded the speech.\nB: It was a very moving moment.",
 funFact:"Double meaning: help (prêter assistance) and audience (l'assistance was captivated). Context decides."},

{type:"teach", trg:"l'assuré", src:"the insured person", pos:"noun", gender:"m",
 note:"Masculine/feminine noun. Person covered by insurance.\nFrom assurer (to insure).",
 example:"A: L'assuré doit déclarer tout sinistre rapidement.\nB: C'est écrit dans le contrat.",
 exampleSrc:"A: The insured must report any claim quickly.\nB: It's written in the contract.",
 funFact:"Every French resident is an assuré social through the Sécurité Sociale system. Universal coverage."},

{type:"teach", trg:"l'assureur", src:"insurer", pos:"noun", gender:"m",
 note:"Masculine/feminine noun. The insurance company or agent.\nFrom assurer (to insure).",
 example:"A: Mon assureur m'a remboursé rapidement.\nB: Tu as de la chance, le mien est lent.",
 exampleSrc:"A: My insurer reimbursed me quickly.\nB: You're lucky, mine is slow.",
 funFact:"AXA, the world's largest insurer, is French. Insurance is a major French industry."},

{type:"teach", trg:"athée", src:"atheist", pos:"adj", gender:null,
 note:"Adjective and noun. Same form for m/f.\nFrom Greek atheos (without god).",
 example:"A: La France est un pays laïc, beaucoup sont athées.\nB: La laïcité est un principe fondamental.",
 exampleSrc:"A: France is a secular country, many are atheists.\nB: Secularism is a fundamental principle.",
 funFact:"French laïcité (secularism) is much stronger than in most countries. Religion stays strictly private."},

{type:"fb",
 s:"La vie {1} est très développée dans les villages français.",
 a:["associative"],
 opts:["associative","aristocratique","arbitraire","athée"],
 hint:"This adjective describes community organizations and clubs. France has 1.5 million of these.",
 sSrc:"Community {1} life is very developed in French villages."},

{type:"teach", trg:"l'attroupement", src:"gathering, crowd", pos:"noun", gender:"m",
 note:"Masculine noun. An unauthorized gathering of people.\nOften negative or police context.",
 example:"A: La police a dispersé l'attroupement.\nB: Il y avait trop de monde sur la place.",
 exampleSrc:"A: The police dispersed the gathering.\nB: There were too many people in the square.",
 funFact:"French law distinguishes attroupement (spontaneous) from manifestation (organized protest)."},

{type:"match", pairs:[
  {trg:"l'allocation", src:"benefit payment"},
  {trg:"l'attentat", src:"attack"},
  {trg:"l'accusation", src:"accusation"},
  {trg:"l'assureur", src:"insurer"},
  {trg:"l'attroupement", src:"gathering"}
]},

{type:"mc",
 q:"Quel adjectif décrit une décision prise sans logique ni justification ?",
 opts:["arbitraire","aristocratique","associatif","athée"],
 ans:"arbitraire",
 hint:"Saussure used this word for the relationship between words and meanings. Think 'based on whim.'"}

]};
export default LESSON_7;
