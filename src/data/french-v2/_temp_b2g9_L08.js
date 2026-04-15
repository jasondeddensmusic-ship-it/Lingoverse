// French B2 Gap Batch 9 — Lesson 8: Droit et Justice
// Law and justice vocabulary

const LESSON_8 = {id:"frv2_b2g9_l8", title:"Droit et Justice", icon:"⚖️", xp:15, board:true, steps:[
  {type:"intro", title:"Droit et Justice",
   desc:"Build your legal vocabulary for discussing law, crime, and the justice system. Essential for B2 newspaper reading and debate.",
   goals:["Learn 20 legal and justice words","Discuss crime and punishment","Understand the French legal system"]},

  {type:"teach", trg:"le harcèlement", src:"harassment", pos:"noun", gender:"m",
   note:"From harceler (to harass).\nHarcèlement moral = bullying. Harcèlement sexuel = sexual harassment.",
   example:"A: Le harcèlement au travail est puni par la loi.\nB: Les victimes doivent porter plainte.",
   exampleSrc:"A: Workplace harassment is punished by law.\nB: Victims must file a complaint.",
   funFact:"Harcèlement moral was legally defined in France in 2002. France was a pioneer in this area."},

  {type:"teach", trg:"le condamné", src:"the convicted person", pos:"noun", gender:"m",
   note:"Past participle of condamner used as noun.\nFeminine: la condamnée.",
   example:"A: Le condamné a fait appel de la décision.\nB: Son avocat espère une réduction de peine.",
   exampleSrc:"A: The convicted person appealed the decision.\nB: His lawyer hopes for a reduced sentence.",
   funFact:"The silent letters in condamné: the M before N is silent, so it sounds like 'kon-da-NAY'."},

  {type:"teach", trg:"le laissez-passer", src:"pass, permit", pos:"noun", gender:"m",
   note:"Laissez (let) + passer (pass).\nAn official document allowing entry. Invariable.",
   example:"A: Il faut un laissez-passer pour entrer dans la zone.\nB: Demandez-le à la sécurité.",
   exampleSrc:"A: You need a pass to enter the zone.\nB: Ask security for one.",
   funFact:"Laissez-passer entered English directly. Like laissez-faire, it is a French imperative phrase."},

  {type:"teach", trg:"la lèse-majesté", src:"lese-majesty", pos:"noun", gender:"f",
   note:"Léser (to harm) + majesté (majesty).\nOffense against a sovereign or head of state.",
   example:"A: Le crime de lèse-majesté n'existe plus en France.\nB: Mais il existe encore dans certains pays.",
   exampleSrc:"A: The crime of lese-majesty no longer exists in France.\nB: But it still exists in some countries.",
   funFact:"Thailand still has strict lèse-majesté laws. France abolished theirs after the Revolution."},

  {type:"teach", trg:"le guet-apens", src:"ambush, trap", pos:"noun", gender:"m",
   note:"Guet (watch) + apens (premeditated).\nA premeditated attack or trap.",
   example:"A: Les soldats sont tombés dans un guet-apens.\nB: L'ennemi les attendait derrière la colline.",
   exampleSrc:"A: The soldiers fell into an ambush.\nB: The enemy was waiting behind the hill.",
   funFact:"Apens comes from Old French apenser (to premeditate). The word only survives in this compound."},

  {type:"teach", trg:"le passe-passe", src:"sleight of hand, trick", pos:"noun", gender:"m",
   note:"Tour de passe-passe = magic trick, clever deception.\nAlways with tour de.",
   example:"A: C'est un tour de passe-passe comptable.\nB: L'argent a disparu des livres.",
   exampleSrc:"A: It's an accounting sleight of hand.\nB: The money disappeared from the books.",
   funFact:"Passe-passe literally means 'pass-pass'. The magician passes objects from hand to hand."},

  {type:"teach", trg:"le paraphe", src:"initials, flourish (signature)", pos:"noun", gender:"m",
   note:"A simplified signature or initials.\nParapher = to initial (a document).",
   example:"A: Veuillez apposer votre paraphe sur chaque page.\nB: Et votre signature complète à la fin.",
   exampleSrc:"A: Please put your initials on each page.\nB: And your full signature at the end.",
   funFact:"French legal documents require paraphes (initials) on every page to prevent page substitution."},

  {type:"teach", trg:"pirate", src:"pirate, bootleg", pos:"adj", gender:null,
   note:"Used as adjective: un logiciel pirate = pirated software.\nAlso noun: un pirate informatique = hacker.",
   example:"A: Le site diffusait des copies pirates.\nB: Il a été fermé par les autorités.",
   exampleSrc:"A: The site was distributing pirated copies.\nB: It was shut down by the authorities.",
   funFact:"Piratage informatique (hacking) is a serious crime in French law, carrying up to 5 years."},

  {type:"teach", trg:"l'exhibitionnisme", src:"exhibitionism", pos:"noun", gender:"m",
   note:"From exhiber (to exhibit) + -isme.\nLegal term for indecent exposure.",
   example:"A: L'exhibitionnisme est un délit en France.\nB: C'est puni de un an d'emprisonnement.",
   exampleSrc:"A: Exhibitionism is a misdemeanor in France.\nB: It is punished by one year of imprisonment.",
   funFact:"French law distinguishes délit (misdemeanor) from crime (felony). Exhibitionism is a délit."},

  {type:"mc", q:"Un guet-apens est:", opts:["Un procès public","Un piège prémédité","Un avocat célèbre","Un tribunal militaire"], ans:"Un piège prémédité",
   hint:"Guet means watching. Apens means premeditated. An attack lying in wait."},

  {type:"teach", trg:"la détonation", src:"detonation, blast", pos:"noun", gender:"f",
   note:"From détoner (to detonate).\nThe loud sound of an explosion.",
   example:"A: La détonation a été entendue à des kilomètres.\nB: Les vitres ont tremblé dans tout le quartier.",
   exampleSrc:"A: The blast was heard for miles.\nB: Windows shook throughout the neighborhood.",
   funFact:"Détoner (to detonate) and détonner (to clash, be out of tune) are different words. Note the double N."},

  {type:"teach", trg:"l'obus", src:"shell (artillery)", pos:"noun", gender:"m",
   note:"An explosive projectile fired from a cannon.\nFrom Czech houfnice via German.",
   example:"A: Un obus a frappé le bâtiment abandonné.\nB: Heureusement, personne n'était à l'intérieur.",
   exampleSrc:"A: A shell hit the abandoned building.\nB: Fortunately, nobody was inside.",
   funFact:"Obus came to French from Czech via German. The word traveled the same path as the weapon."},

  {type:"teach", trg:"le parachute", src:"parachute", pos:"noun", gender:"m",
   note:"Para- (against) + chute (fall).\nAlso figurative: parachute doré = golden parachute.",
   example:"A: Le parachute doré du PDG a choqué l'opinion.\nB: Des millions d'euros pour un départ!",
   exampleSrc:"A: The CEO's golden parachute shocked public opinion.\nB: Millions of euros for a departure!",
   funFact:"Parachute is a French invention, both the word and the device. Para means 'against'."},

  {type:"teach", trg:"la déflagration", src:"deflagration, explosion", pos:"noun", gender:"f",
   note:"A rapid combustion, less intense than detonation.\nAlso figurative: a political shock.",
   example:"A: La déflagration a soufflé les fenêtres.\nB: C'était une explosion de gaz.",
   exampleSrc:"A: The blast blew out the windows.\nB: It was a gas explosion.",
   funFact:"Technically, déflagration is subsonic burning while détonation is supersonic. Both mean 'boom' colloquially."},

  {type:"fb", s:"Le {1} au travail peut être moral ou sexuel.", a:["harcèlement"], opts:["harcèlement","guet-apens","laissez-passer","paraphe"],
   hint:"Systematic, repeated hostile behavior targeting someone. A workplace crime.",
   sSrc:"{1} in the workplace can be moral or sexual."},

  {type:"teach", trg:"le communiste", src:"communist", pos:"noun", gender:"m",
   note:"Also adjective: le parti communiste.\nFeminine: la communiste.",
   example:"A: Le parti communiste a perdu beaucoup d'influence.\nB: Mais il existe toujours en France.",
   exampleSrc:"A: The communist party has lost a lot of influence.\nB: But it still exists in France.",
   funFact:"The PCF (Parti communiste français) was once the largest party in France after WWII."},

  {type:"teach", trg:"le pharaon", src:"pharaoh", pos:"noun", gender:"m",
   note:"Egyptian ruler. From Egyptian per-aa (great house).\nAlso figurative: a very powerful leader.",
   example:"A: Ce PDG se comporte comme un pharaon.\nB: Il règne sur l'entreprise sans partage.",
   exampleSrc:"A: This CEO behaves like a pharaoh.\nB: He rules the company without sharing power.",
   funFact:"Pharaonique (pharaonic) in French means grandiose or megalomaniac: un projet pharaonique."},

  {type:"mc", q:"Un paraphe est:", opts:["Une signature complète","Des initiales sur un document","Un tampon officiel","Un sceau royal"], ans:"Des initiales sur un document",
   hint:"A simplified form of your signature, placed on each page of a legal d...."},

  {type:"fb", s:"Les soldats sont tombés dans un {1}.", a:["guet-apens"], opts:["guet-apens","passe-passe","parachute","paraphe"],
   hint:"A premeditated attack where the enemy lies in wait. An ambush.",
   sSrc:"The soldiers fell into an {1}."},

  {type:"match", pairs:[
    {trg:"le harcèlement", src:"harassment"},
    {trg:"le condamné", src:"convicted person"},
    {trg:"le laissez-passer", src:"permit"},
    {trg:"la lèse-majesté", src:"lese-majesty"}
  ]},

  {type:"mc", q:"Un parachute doré est:", opts:["Un sport extrême","Une indemnité de départ très élevée","Un parachute en or","Un prix militaire"], ans:"Une indemnité de départ très élevée",
   hint:"Golden parachute: the huge severance package a CEO receives when leaving."},

  {type:"fb", s:"La {1} a été entendue dans tout le quartier.", a:["détonation"], opts:["détonation","déflagration","démocratisation","désobéissance"],
   hint:"The loud sound of an explosion. From détoner, to explode.",
   sSrc:"The {1} was heard throughout the neighborhood."},

  {type:"match", pairs:[
    {trg:"le guet-apens", src:"ambush"},
    {trg:"le passe-passe", src:"sleight of hand"},
    {trg:"le parachute", src:"parachute"},
    {trg:"l'obus", src:"shell (artillery)"}
  ]}
]};

export default LESSON_8;
