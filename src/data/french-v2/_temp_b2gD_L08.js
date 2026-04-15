// French B2 Gap Batch D Lesson 8 — Arts and Expression
const LESSON_8 = {id:"frv2_b2gD_l8", title:"Arts et expression", icon:"🎨", xp:15, board:true, steps:[
  {type:"intro", title:"Arts et expression",
   desc:"Explore vocabulary for discussing artistic movements, creative expression, and cultural criticism.",
   goals:["Learn 10 art and expression terms","Discuss artistic movements and styles","Express critical opinions about culture"]},

  {type:"teach", trg:"l'expressionnisme", src:"the expressionism", pos:"noun", gender:"m",
   note:"An art movement emphasizing emotional experience over realism.\nOriginated in early 20th century Germany.",
   example:"A: L'expressionnisme a influencé le cinéma allemand.\nB: Les films de Fritz Lang, par exemple?\nA: Exactement. Les ombres et les distorsions.\nB: C'est un style très reconnaissable.",
   exampleSrc:"A: Expressionism influenced German cinema.\nB: Fritz Lang's films, for example?\nA: Exactly. The shadows and distortions.\nB: It's a very recognizable style.",
   funFact:"The term comes from 'expression' + '-isme'. French art critics initially dismissed it as 'too Germanic' before embracing it."},

  {type:"teach", trg:"le pseudonyme", src:"the pseudonym / pen name", pos:"noun", gender:"m",
   note:"A fictitious name used by an author or artist.\nFrom Greek 'pseudo' (false) + 'onyma' (name).",
   example:"A: George Sand est le pseudonyme d'Amantine Lucile Aurore Dupin.\nB: Pourquoi a-t-elle choisi un nom masculin?\nA: Pour être publiée plus facilement au XIXe siècle.\nB: Les femmes écrivains n'étaient pas prises au sérieux.",
   exampleSrc:"A: George Sand is the pseudonym of Amantine Lucile Aurore Dupin.\nB: Why did she choose a masculine name?\nA: To be published more easily in the 19th century.\nB: Women writers were not taken seriously.",
   funFact:"Many French writers used pseudonyms: Molière (Jean-Baptiste Poquelin), Voltaire (Francois-Marie Arouet), Stendhal (Henri Beyle)."},

  {type:"teach", trg:"le pléonasme", src:"the pleonasm / redundancy", pos:"noun", gender:"m",
   note:"Using more words than needed to express an idea.\nExample: 'monter en haut' (go up upward).",
   example:"A: 'Descendre en bas' est un pléonasme.\nB: Pourquoi? On dit ça tout le temps.\nA: Parce que 'descendre' signifie déjà 'aller en bas'.\nB: Je ne ferai plus cette erreur.",
   exampleSrc:"A: 'Descendre en bas' is a pleonasm.\nB: Why? People say it all the time.\nA: Because 'descendre' already means 'go down'.\nB: I won't make that mistake again.",
   funFact:"French teachers love catching pleonasms. Famous examples: 'prévoir à l'avance', 'ajouter en plus', 'au jour d'aujourd'hui'."},

  {type:"teach", trg:"la phonétique", src:"the phonetics", pos:"noun", gender:"f",
   note:"The study of speech sounds. Also: the sound system of a language.\nKey for pronunciation teaching.",
   example:"A: La phonétique française est difficile pour les anglophones.\nB: Surtout les voyelles nasales?\nA: Oui, et le 'r' aussi.\nB: Il faut beaucoup de pratique.",
   exampleSrc:"A: French phonetics is difficult for English speakers.\nB: Especially the nasal vowels?\nA: Yes, and the 'r' too.\nB: It takes a lot of practice.",
   funFact:"French has 16 vowel sounds versus 5 written vowels. The nasal vowels (an, on, in, un) don't exist in English."},

  {type:"mc",
   q:"Qu'est-ce qu'un pléonasme?",
   opts:["Une redondance dans l'expression","Un genre littéraire ancien","Une figure de style poétique","Un synonyme de métaphore"],
   ans:"Une redondance dans l'expression",
   hint:"Think of saying 'go up upward' where one word already contains the meaning of the other."},

  {type:"teach", trg:"le photomontage", src:"the photomontage", pos:"noun", gender:"m",
   note:"A composite image made by combining several photographs.\nUsed in art, propaganda, and advertising.",
   example:"A: Ce photomontage est incroyablement réaliste.\nB: On ne voit pas les retouches.\nA: La technologie rend la détection difficile.\nB: C'est un défi pour le journalisme.",
   exampleSrc:"A: This photomontage is incredibly realistic.\nB: You can't see the edits.\nA: Technology makes detection difficult.\nB: It's a challenge for journalism.",
   funFact:"Dada artists like Hannah Hoch pioneered photomontage in the 1920s. Now 'photomontage' often refers to digital manipulation."},

  {type:"teach", trg:"la physionomie", src:"the facial features / appearance", pos:"noun", gender:"f",
   note:"The general appearance of a face or a place.\nAlso: the character visible in someone's face.",
   example:"A: La physionomie du quartier a complètement changé.\nB: Avec tous ces nouveaux immeubles.\nA: On ne reconnaît plus rien.\nB: Le charme ancien a disparu.",
   exampleSrc:"A: The appearance of the neighborhood has completely changed.\nB: With all these new buildings.\nA: You can't recognize anything anymore.\nB: The old charm has disappeared.",
   funFact:"From Greek 'physis' (nature) + 'gnomon' (judge). A 'physionomiste' is someone good at remembering faces."},

  {type:"teach", trg:"le décorateur", src:"the decorator / set designer", pos:"noun", gender:"m",
   note:"Someone who decorates interiors or designs stage sets.\nFeminine: 'décoratrice'.",
   example:"A: Le décorateur a transformé cet appartement.\nB: Les couleurs sont magnifiques.\nA: Il a un talent naturel pour l'espace.\nB: On devrait l'engager pour notre bureau.",
   exampleSrc:"A: The decorator transformed this apartment.\nB: The colors are magnificent.\nA: He has a natural talent for space.\nB: We should hire him for our office.",
   funFact:"In French theater, 'le décorateur' designs sets. In film, the role is called 'chef décorateur'. Both are highly respected."},

  {type:"fb",
   s:"George Sand est le {1} d'Amantine Lucile Aurore Dupin.",
   a:["pseudonyme"],
   opts:["pseudonyme","pléonasme","décorateur","photomontage"],
   hint:"This word means a false name adopted by a writer, from Greek for 'false name'.",
   sSrc:"George Sand is the {1} of Amantine Lucile Aurore Dupin."},

  {type:"teach", trg:"l'exclamation", src:"the exclamation", pos:"noun", gender:"f",
   note:"A sudden cry or remark expressing emotion.\nIn grammar: 'point d'exclamation' (exclamation mark).",
   example:"A: Son exclamation de surprise a fait rire tout le monde.\nB: Elle ne s'y attendait vraiment pas.\nA: Une fête surprise réussie.\nB: Sa réaction était priceless.",
   exampleSrc:"A: Her exclamation of surprise made everyone laugh.\nB: She really didn't expect it.\nA: A successful surprise party.\nB: Her reaction was priceless.",
   funFact:"French exclamations include 'Zut!' (darn), 'Mince!' (shoot), 'Oh la la!' (three words, not two as foreigners often think)."},

  {type:"teach", trg:"le particularisme", src:"the particularism", pos:"noun", gender:"m",
   note:"Devotion to the interests of a specific group or region.\nOften in cultural or political contexts.",
   example:"A: Le particularisme breton est très fort.\nB: Ils ont leur propre langue et culture.\nA: Et une gastronomie unique.\nB: Les crêpes et le cidre sont emblématiques.",
   exampleSrc:"A: Breton particularism is very strong.\nB: They have their own language and culture.\nA: And a unique gastronomy.\nB: Crepes and cider are emblematic.",
   funFact:"France has strong regional identities despite centralization. Corsica, Brittany, Alsace, and Basque Country each claim distinct cultures."},

  {type:"mc",
   q:"Qu'est-ce que la physionomie d'un quartier?",
   opts:["Son apparence générale et son caractère","Sa population totale","Son code postal","Sa superficie en mètres carrés"],
   ans:"Son apparence générale et son caractère",
   hint:"This word originally refers to facial features but extends to the overall look and feel of a place."},

  {type:"match", pairs:[
    {trg:"expressionnisme", src:"expressionism"},
    {trg:"phonétique", src:"phonetics"},
    {trg:"photomontage", src:"photomontage"},
    {trg:"décorateur", src:"decorator"},
    {trg:"exclamation", src:"exclamation"}
  ]},

  {type:"fb",
   s:"La {1} du quartier a complètement changé en dix ans.",
   a:["physionomie"],
   opts:["physionomie","phonétique","exclamation","globalité"],
   hint:"This word describes the overall appearance and character of a face or place.",
   sSrc:"The {1} of the neighborhood has completely changed in ten years."}
]};
export default LESSON_8;
