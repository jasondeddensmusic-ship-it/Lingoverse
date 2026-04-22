// L10 - Connectors & Expressions
const LESSON_10 = {id:"frv2_b1gap_l10", title:"Expressions et connecteurs", icon:"\u{1F517}", xp:15, board:true, steps:[

{type:"intro", title:"Expressions et connecteurs",
 desc:"Learn useful French expressions and connectors that make your speech more natural and fluent.",
 goals:["Learn 20 connectors and expressions","Use au bout du compte, au hasard, and more","Connect ideas like a native speaker"]},

{type:"teach", trg:"a priori", src:"in principle, at first glance", pos:"adv", gender:null,
 note:"Adverb from Latin. Without prior examination.\nVery common in spoken French.",
 example:"A: A priori, je suis disponible vendredi.\nB: Parfait, on se retrouve à midi ?",
 exampleSrc:"A: In principle, I'm available Friday.\nB: Perfect, shall we meet at noon?",
 funFact:"The French use 'a priori' far more casually than English speakers. It means 'as far as I know.'"},

{type:"teach", trg:"ainsi que", src:"as well as, just as", pos:"conj", gender:null,
 note:"Conjunction. Connects two equal elements.\nMore formal than 'et aussi.'",
 example:"A: Le français ainsi que l'espagnol sont des langues romanes.\nB: Elles viennent toutes deux du latin.",
 exampleSrc:"A: French as well as Spanish are Romance languages.\nB: They both come from Latin.",
 funFact:"In formal writing, ainsi que is a signal of elevated register. Everyday speech uses 'et aussi.'"},

{type:"teach", trg:"ainsi de suite", src:"and so on, and so forth", pos:"adv", gender:null,
 note:"Fixed expression. Used to indicate continuation.\nEt ainsi de suite = and so on.",
 example:"A: Lundi le français, mardi l'anglais, et ainsi de suite.\nB: Tu as un emploi du temps chargé.",
 exampleSrc:"A: Monday French, Tuesday English, and so on.\nB: You have a busy schedule.",
 funFact:"The full form is 'et ainsi de suite.' Often abbreviated in speech to just 'ainsi de suite.'"},

{type:"teach", trg:"au bout du compte", src:"in the end, when all is said and done", pos:"adv", gender:null,
 note:"Fixed expression. Summarizing a conclusion.\nSynonym of 'en fin de compte.'",
 example:"A: Au bout du compte, c'était la bonne décision.\nB: Oui, même si c'était difficile sur le moment.",
 exampleSrc:"A: In the end, it was the right decision.\nB: Yes, even if it was hard at the time.",
 funFact:"Literally 'at the end of the count.' Like reaching the bottom line of an accounting sheet."},

{type:"teach", trg:"au hasard", src:"at random, randomly", pos:"adv", gender:null,
 note:"Adverbial expression. Without plan or purpose.\nChoisir au hasard = to choose randomly.",
 example:"A: J'ai choisi ce restaurant au hasard.\nB: Bonne pioche, la cuisine est excellente !",
 exampleSrc:"A: I chose this restaurant at random.\nB: Good pick, the food is excellent!",
 funFact:"Hasard comes from Arabic az-zahr (the dice). Random choice was originally a dice throw."},

{type:"mc",
 q:"Quelle expression signifie 'finalement, tout bien considéré' ?",
 opts:["au bout du compte","au hasard","a priori","ainsi de suite"],
 ans:"au bout du compte",
 hint:"This expression literally means 'at the end of the count.' Think of reaching the bottom line."},

{type:"teach", trg:"au juste", src:"exactly, precisely", pos:"adv", gender:null,
 note:"Adverbial expression. Used in questions seeking precision.\nQue veux-tu au juste ? = what exactly do you want?",
 example:"A: Que s'est-il passé au juste ?\nB: Je ne sais pas, j'étais absent.",
 exampleSrc:"A: What exactly happened?\nB: I don't know, I was absent.",
 funFact:"Almost always in questions. It adds emphasis: 'au juste' pushes for a precise, honest answer."},

{type:"teach", trg:"au large", src:"offshore, out at sea", pos:"adv", gender:null,
 note:"Adverbial expression. Away from the coast.\nAlso: prendre le large = to flee, to escape.",
 example:"A: Le bateau est au large de Marseille.\nB: Il reviendra au port demain matin.",
 exampleSrc:"A: The boat is offshore of Marseille.\nB: It will return to port tomorrow morning.",
 funFact:"'Prendre le large' means both to sail away and to escape/run away. Very common expression."},

{type:"teach", trg:"au plus vite", src:"as quickly as possible", pos:"adv", gender:null,
 note:"Adverbial expression. Urgency marker.\nSynonym: au plus tôt = at the earliest.",
 example:"A: Il faut régler ce problème au plus vite.\nB: J'appelle le technicien immédiatement.",
 exampleSrc:"A: We need to fix this problem as quickly as possible.\nB: I'm calling the technician immediately.",
 funFact:"In French emails, 'merci de répondre au plus vite' is the polite-but-urgent way to say 'ASAP.'"},

{type:"teach", trg:"au bord de", src:"on the edge of, on the verge of", pos:"prep", gender:null,
 note:"Prepositional phrase. Physical or figurative edge.\nAu bord de la mer = at the seaside.",
 example:"A: Elle est au bord des larmes.\nB: Qu'est-ce qui ne va pas ?",
 exampleSrc:"A: She's on the verge of tears.\nB: What's wrong?",
 funFact:"Au bord de la mer is the classic French vacation. Au bord de la crise de nerfs is a nervous breakdown."},

{type:"fb",
 s:"J'ai choisi ce livre {1}, sans réfléchir.",
 a:["au hasard"],
 opts:["au hasard","au juste","au large","au plus vite"],
 hint:"This expression means randomly or without purpose. It comes from an Arabic word for dice.",
 sSrc:"I chose this book {1}, without thinking."},

{type:"teach", trg:"au gré de", src:"according to, at the mercy of", pos:"prep", gender:null,
 note:"Prepositional phrase. Depending on something.\nAu gré du vent = at the mercy of the wind.",
 example:"A: Le voilier avance au gré du vent.\nB: C'est la beauté de la voile.",
 exampleSrc:"A: The sailboat moves at the mercy of the wind.\nB: That's the beauty of sailing.",
 funFact:"Gré means 'will' or 'liking.' De bon gré = willingly. De mauvais gré = reluctantly."},

{type:"teach", trg:"au dépens de", src:"at the expense of", pos:"prep", gender:null,
 note:"Prepositional phrase. To the detriment of.\nÀ ses dépens = at one's own expense (figurative).",
 example:"A: Il a réussi au dépens de ses collègues.\nB: Ce n'est pas une façon correcte de travailler.",
 exampleSrc:"A: He succeeded at the expense of his colleagues.\nB: That's not a proper way to work.",
 funFact:"'Apprendre à ses dépens' means to learn the hard way. Very common in everyday French."},

{type:"teach", trg:"au terme de", src:"at the end of, upon completion of", pos:"prep", gender:null,
 note:"Prepositional phrase. At the conclusion of a process.\nFormal register.",
 example:"A: Au terme de trois ans d'études, elle a obtenu son diplôme.\nB: Toute la famille était fière.",
 exampleSrc:"A: At the end of three years of study, she got her diploma.\nB: The whole family was proud.",
 funFact:"Le terme means both 'end' and 'term.' Au terme de = at the end of. À terme = in the long run."},

{type:"mc",
 q:"Quelle expression signifie 'exactement' dans une question ?",
 opts:["au hasard","au juste","au large","au gré de"],
 ans:"au juste",
 hint:"This expression is almost always used in questions, pushing for a precise answer."},

{type:"teach", trg:"au profit de", src:"for the benefit of, in favor of", pos:"prep", gender:null,
 note:"Prepositional phrase. To the advantage of.\nOpposite: au dépens de.",
 example:"A: Un concert a été organisé au profit des victimes.\nB: Tous les bénéfices seront reversés.",
 exampleSrc:"A: A concert was organized for the benefit of the victims.\nB: All proceeds will be donated.",
 funFact:"Charity events are always 'au profit de' a cause. The phrase is on every fundraising poster."},

{type:"teach", trg:"au moyen de", src:"by means of, using", pos:"prep", gender:null,
 note:"Prepositional phrase. The instrument or method used.\nFormal alternative to 'avec.'",
 example:"A: On peut résoudre ce problème au moyen d'un logiciel.\nB: Lequel recommandes-tu ?",
 exampleSrc:"A: We can solve this problem by means of software.\nB: Which one do you recommend?",
 funFact:"Le Moyen Âge (Middle Ages) uses the same word. Moyen means both 'means/way' and 'middle.'"},

{type:"teach", trg:"l'aubaine", src:"windfall, bargain, stroke of luck", pos:"noun", gender:"f",
 note:"Feminine noun. An unexpected piece of good luck.\nQuelle aubaine ! = what a bargain!",
 example:"A: Trouver cet appartement était une aubaine.\nB: Le prix était incroyablement bas.",
 exampleSrc:"A: Finding this apartment was a windfall.\nB: The price was incredibly low.",
 funFact:"Originally a feudal law term: the droit d'aubaine let the king seize a foreigner's property at death."},

{type:"teach", trg:"l'apéro", src:"aperitif drinks, pre-dinner drinks", pos:"noun", gender:"m",
 note:"Masculine noun. Informal short form of apéritif.\nA sacred French social ritual.",
 example:"A: On se fait un apéro ce soir ?\nB: Avec plaisir, j'apporte du rosé.",
 exampleSrc:"A: Shall we have drinks this evening?\nB: With pleasure, I'll bring rosé.",
 funFact:"L'apéro is arguably France's most important social institution. It starts around 6-7pm and can last hours."},

{type:"fb",
 s:"Un concert a été organisé {1} des enfants malades.",
 a:["au profit de"],
 opts:["au profit de","au dépens de","au moyen de","au terme de"],
 hint:"This prepositional phrase means 'for the benefit of.' It appears on every charity event poster.",
 sSrc:"A concert was organized {1} sick children."},

{type:"teach", trg:"alors même que", src:"even though, even as", pos:"conj", gender:null,
 note:"Conjunction. Emphasizes a strong contrast.\nMore dramatic than 'même si.'",
 example:"A: Il a continué alors même que tout le monde l'avait prévenu.\nB: Son entêtement est légendaire.",
 exampleSrc:"A: He continued even though everyone had warned him.\nB: His stubbornness is legendary.",
 funFact:"Adds dramatic emphasis. Lawyers love it: 'alors même que le prévenu savait que...'"},

{type:"match", pairs:[
  {trg:"au hasard", src:"at random"},
  {trg:"au bord de", src:"on the edge of"},
  {trg:"au dépens de", src:"at the expense of"},
  {trg:"l'aubaine", src:"windfall"},
  {trg:"l'apéro", src:"aperitif drinks"}
]},

{type:"mc",
 q:"Quelle expression signifie 'le plus rapidement possible' ?",
 opts:["au large","au bout du compte","au plus vite","au juste"],
 ans:"au plus vite",
 hint:"Used in emails when you need an urgent response. Think of the French ASAP equivalent."}

]};
export default LESSON_10;
