// L11 - Religion & Philosophy
const LESSON_11 = {id:"frv2_b1gap_l11", title:"Pensée et croyance", icon:"\u{1F4D6}", xp:15, board:true, steps:[

{type:"intro", title:"Pensée et croyance",
 desc:"Explore vocabulary for discussing beliefs, philosophy, and abstract thought in French.",
 goals:["Learn 20 words about belief and thought","Discuss religious and philosophical topics","Use abstract vocabulary with confidence"]},

{type:"teach", trg:"l'athéisme", src:"atheism", pos:"noun", gender:"m",
 note:"Masculine noun. The absence of belief in gods.\nFrom Greek a (without) + theos (god).",
 example:"A: L'athéisme est répandu en France.\nB: La laïcité protège toutes les croyances.",
 exampleSrc:"A: Atheism is widespread in France.\nB: Secularism protects all beliefs.",
 funFact:"France has one of the highest rates of atheism in the world, partly due to its revolutionary history."},

{type:"teach", trg:"l'apocalypse", src:"apocalypse", pos:"noun", gender:"f",
 note:"Feminine noun. A catastrophic end or revelation.\nFrom Greek apokalypsis (uncovering).",
 example:"A: Le film dépeint un monde après l'apocalypse.\nB: C'est un genre très populaire au cinéma.",
 exampleSrc:"A: The film depicts a world after the apocalypse.\nB: It's a very popular genre in cinema.",
 funFact:"Originally meant 'revelation' (the book of Revelation). The catastrophe meaning came later."},

{type:"teach", trg:"apocalyptique", src:"apocalyptic", pos:"adj", gender:null,
 note:"Adjective. Same form for m/f.\nDescribes catastrophic or end-of-world scenarios.",
 example:"A: Le paysage après la tempête était apocalyptique.\nB: Des arbres déracinés partout.",
 exampleSrc:"A: The landscape after the storm was apocalyptic.\nB: Uprooted trees everywhere.",
 funFact:"French journalists use apocalyptique for any dramatic disaster scene. A favorite headline word."},

{type:"teach", trg:"l'allégorie", src:"allegory", pos:"noun", gender:"f",
 note:"Feminine noun. A symbolic story with hidden meaning.\nKey literary and artistic term.",
 example:"A: Le Petit Prince est une allégorie de la vie.\nB: Chaque personnage représente un défaut humain.",
 exampleSrc:"A: The Little Prince is an allegory of life.\nB: Each character represents a human flaw.",
 funFact:"Saint-Exupéry's Le Petit Prince is France's most famous allegory, translated into 300+ languages."},

{type:"teach", trg:"l'ascèse", src:"asceticism, self-discipline", pos:"noun", gender:"f",
 note:"Feminine noun. Rigorous self-discipline.\nFrom Greek askesis (exercise, training).",
 example:"A: Les moines pratiquent une ascèse stricte.\nB: Ils renoncent aux plaisirs matériels.",
 exampleSrc:"A: The monks practice strict asceticism.\nB: They renounce material pleasures.",
 funFact:"Originally a Greek athletic training term. It shifted to spiritual discipline through early Christianity."},

{type:"mc",
 q:"Quel mot désigne une histoire symbolique avec un sens caché ?",
 opts:["une allégorie","une apocalypse","une ascèse","une apparition"],
 ans:"une allégorie",
 hint:"Le Petit Prince is a famous example of this literary device. Each character represents something."},

{type:"teach", trg:"l'apparition", src:"appearance, apparition", pos:"noun", gender:"f",
 note:"Feminine noun. A sudden appearance or ghostly vision.\nFaire son apparition = to appear/debut.",
 example:"A: L'apparition d'Internet a tout changé.\nB: On ne peut plus imaginer la vie sans.",
 exampleSrc:"A: The appearance of the Internet changed everything.\nB: We can't imagine life without it.",
 funFact:"Lourdes is famous for the apparitions of the Virgin Mary in 1858. Millions still visit yearly."},

{type:"teach", trg:"l'anthologie", src:"anthology", pos:"noun", gender:"f",
 note:"Feminine noun. A collection of selected literary works.\nFrom Greek anthos (flower) + legein (gather).",
 example:"A: Cette anthologie de poésie française est magnifique.\nB: Elle couvre cinq siècles de littérature.",
 exampleSrc:"A: This anthology of French poetry is magnificent.\nB: It covers five centuries of literature.",
 funFact:"Literally 'a gathering of flowers.' An anthology was originally a bouquet of the best poems."},

{type:"teach", trg:"l'anonymat", src:"anonymity", pos:"noun", gender:"m",
 note:"Masculine noun. The state of being unnamed.\nGarder l'anonymat = to remain anonymous.",
 example:"A: Le donateur souhaite garder l'anonymat.\nB: On respectera sa volonté.",
 exampleSrc:"A: The donor wishes to remain anonymous.\nB: We'll respect his wishes.",
 funFact:"French law protects anonymat strongly. Anonymous birth (accouchement sous X) is a unique French right."},

{type:"teach", trg:"l'astronome", src:"astronomer", pos:"noun", gender:"m",
 note:"Masculine/feminine noun. A scientist who studies celestial bodies.\nDistinct from astrologue.",
 example:"A: Cet astronome a découvert une nouvelle étoile.\nB: C'est une découverte extraordinaire.",
 exampleSrc:"A: This astronomer discovered a new star.\nB: It's an extraordinary discovery.",
 funFact:"France has a rich astronomy tradition. The Paris Observatory, founded 1667, is the world's oldest active."},

{type:"fb",
 s:"Le donateur souhaite garder l'{1}.",
 a:["anonymat"],
 opts:["anonymat","athéisme","apocalypse","ascèse"],
 hint:"This masculine noun means the state of remaining unnamed or unknown.",
 sSrc:"The donor wishes to maintain {1}."},

{type:"teach", trg:"l'astronomie", src:"astronomy", pos:"noun", gender:"f",
 note:"Feminine noun. The scientific study of space.\nFrom Greek astron (star) + nomos (law).",
 example:"A: L'astronomie est une science fascinante.\nB: J'adore observer les étoiles la nuit.",
 exampleSrc:"A: Astronomy is a fascinating science.\nB: I love observing stars at night.",
 funFact:"Do not confuse with astrologie (astrology). Astronomie is science, astrologie is pseudoscience."},

{type:"teach", trg:"atomique", src:"atomic", pos:"adj", gender:null,
 note:"Adjective. Same form for m/f. Related to atoms.\nBombe atomique = atomic bomb.",
 example:"A: L'énergie atomique reste controversée en France.\nB: Elle produit 70% de notre électricité.",
 exampleSrc:"A: Atomic energy remains controversial in France.\nB: It produces 70% of our electricity.",
 funFact:"France gets 70% of its electricity from nuclear power, the highest percentage in the world."},

{type:"teach", trg:"l'aléa", src:"hazard, risk, unpredictable event", pos:"noun", gender:"m",
 note:"Masculine noun. An unpredictable risk.\nLes aléas de la vie = life's uncertainties.",
 example:"A: Les aléas climatiques menacent les récoltes.\nB: Les agriculteurs s'inquiètent.",
 exampleSrc:"A: Climate hazards threaten the harvests.\nB: Farmers are worried.",
 funFact:"From Arabic al-zahr (the dice), same root as 'hasard.' Aléa emphasizes unpredictability."},

{type:"teach", trg:"aléatoire", src:"random, unpredictable", pos:"adj", gender:null,
 note:"Adjective. Same form for m/f. Subject to chance.\nContrôle aléatoire = random check.",
 example:"A: Les contrôles de police sont aléatoires.\nB: On ne sait jamais quand on sera contrôlé.",
 exampleSrc:"A: Police checks are random.\nB: You never know when you'll be checked.",
 funFact:"In computing, 'nombre aléatoire' means random number. Aléatoire is the French tech term for 'random.'"},

{type:"mc",
 q:"Quel adjectif signifie 'soumis au hasard, imprévisible' ?",
 opts:["aléatoire","atomique","apocalyptique","anonyme"],
 ans:"aléatoire",
 hint:"This word shares the same Arabic root as 'hasard.' Think of random checks or random numbers."},

{type:"teach", trg:"l'apanage", src:"prerogative, exclusive privilege", pos:"noun", gender:"m",
 note:"Masculine noun. Something reserved for one group.\nC'est l'apanage de = it's the privilege of.",
 example:"A: Le bonheur n'est pas l'apanage des riches.\nB: Tout le monde peut trouver sa joie.",
 exampleSrc:"A: Happiness is not the exclusive privilege of the rich.\nB: Everyone can find their joy.",
 funFact:"Originally, an apanage was land given to younger princes. Now it means any exclusive privilege."},

{type:"teach", trg:"l'arabesque", src:"arabesque", pos:"noun", gender:"f",
 note:"Feminine noun. An ornamental design with flowing curves.\nAlso a ballet position.",
 example:"A: Les arabesques de cette mosquée sont magnifiques.\nB: L'art islamique utilise beaucoup de motifs géométriques.",
 exampleSrc:"A: The arabesques of this mosque are magnificent.\nB: Islamic art uses many geometric patterns.",
 funFact:"In ballet, the arabesque is a pose standing on one leg. In art, it's flowing decorative lines."},

{type:"teach", trg:"l'altérité", src:"otherness, alterity", pos:"noun", gender:"f",
 note:"Feminine noun. The quality of being different.\nPhilosophical term for encountering the Other.",
 example:"A: Le voyage nous confronte à l'altérité.\nB: C'est ce qui le rend enrichissant.",
 exampleSrc:"A: Travel confronts us with otherness.\nB: That's what makes it enriching.",
 funFact:"Levinas made altérité a central philosophical concept. The face of the Other demands ethical response."},

{type:"teach", trg:"l'acclamation", src:"acclamation, cheering", pos:"noun", gender:"f",
 note:"Feminine noun. Enthusiastic approval.\nÉlu par acclamation = elected by acclamation.",
 example:"A: Le public l'a accueilli avec des acclamations.\nB: Il était visiblement ému.",
 exampleSrc:"A: The audience greeted him with cheering.\nB: He was visibly moved.",
 funFact:"In French politics, 'élu par acclamation' means elected without a formal vote. Unanimous support."},

{type:"fb",
 s:"Le voyage nous confronte à l'{1} des autres cultures.",
 a:["altérité"],
 opts:["altérité","allégorie","ascèse","astronomie"],
 hint:"This philosophical noun describes the quality of being fundamentally different. Think Levinas.",
 sSrc:"Travel confronts us with the {1} of other cultures."},

{type:"match", pairs:[
  {trg:"l'athéisme", src:"atheism"},
  {trg:"l'allégorie", src:"allegory"},
  {trg:"l'anonymat", src:"anonymity"},
  {trg:"aléatoire", src:"random"},
  {trg:"l'acclamation", src:"cheering"}
]},

{type:"mc",
 q:"Quelle science étudie les étoiles et les planètes ?",
 opts:["l'astronomie","l'astrologie","l'anatomie","l'anthropologie"],
 ans:"l'astronomie",
 hint:"Do not confuse this with astrology. This is the real science, not predictions based on star signs."}

]};
export default LESSON_11;
