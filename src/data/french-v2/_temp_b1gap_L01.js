// L01 - Emotions & Inner States
const LESSON_1 = {id:"frv2_b1gap_l1", title:"Emotions profondes", icon:"\u{1F30A}", xp:15, board:true, steps:[

{type:"intro", title:"Emotions profondes",
 desc:"Explore the vocabulary of deep emotions, inner turmoil, and psychological states beyond the basics.",
 goals:["Learn 20 words for complex emotional states","Express anxiety, bitterness, and longing","Discuss feelings with nuance"]},

{type:"teach", trg:"l'anxiété", src:"anxiety", pos:"noun", gender:"f",
 note:"Feminine noun. The ongoing state of worry.",
 example:"A: Tu as l'air tendu. Tout va bien ?\nB: Non, je souffre d'anxiété en ce moment.",
 exampleSrc:"A: You look tense. Is everything okay?\nB: No, I'm suffering from anxiety right now.",
 funFact:"From Latin anxietas, related to angere meaning 'to choke or squeeze.'"},

{type:"teach", trg:"anxieux", src:"anxious", pos:"adj", gender:null,
 note:"Adjective. Anxieux (m), anxieuse (f).\nDescribes a worried, uneasy person.",
 example:"A: Pourquoi es-tu si anxieux ?\nB: J'ai un examen demain matin.",
 exampleSrc:"A: Why are you so anxious?\nB: I have an exam tomorrow morning.",
 funFact:"French distinguishes anxieux (personality trait) from inquiet (situational worry)."},

{type:"teach", trg:"l'angoisse", src:"anguish, dread", pos:"noun", gender:"f",
 note:"Feminine noun. Deeper than anxiété.\nA crushing, existential dread.",
 example:"A: Qu'est-ce qui te fait peur ?\nB: L'angoisse de l'avenir me paralyse parfois.",
 exampleSrc:"A: What scares you?\nB: The anguish about the future paralyzes me sometimes.",
 funFact:"Sartre made angoisse a key existentialist concept, the dread of radical freedom."},

{type:"teach", trg:"angoissant", src:"distressing, anxiety-inducing", pos:"adj", gender:null,
 note:"Adjective from angoisse.\nAngoissant (m), angoissante (f).",
 example:"A: Ce film était vraiment angoissant.\nB: Oui, je n'ai pas dormi après.",
 exampleSrc:"A: That movie was really distressing.\nB: Yes, I couldn't sleep after.",
 funFact:"Often used for horror films. French critics love the phrase 'ambiance angoissante.'"},

{type:"teach", trg:"angoisser", src:"to cause anguish, to worry deeply", pos:"verb", gender:null,
 note:"Regular -er verb. Often reflexive: s'angoisser.\nStronger than s'inquiéter.",
 example:"A: Tu t'angoisses trop pour rien.\nB: Je sais, mais je ne peux pas m'en empêcher.",
 exampleSrc:"A: You worry too much for nothing.\nB: I know, but I can't help it.",
 funFact:"The reflexive form s'angoisser is far more common than the transitive form."},

{type:"mc",
 q:"Quel mot décrit une peur profonde et existentielle ?",
 opts:["l'angoisse","l'anxiété","la peur","le stress"],
 ans:"l'angoisse",
 hint:"This word comes from the Latin for 'to choke' and was adopted by existentialist philosophy."},

{type:"teach", trg:"amer", src:"bitter", pos:"adj", gender:null,
 note:"Adjective. Amer (m), amère (f).\nUsed for taste and emotions.",
 example:"A: Ce café est trop amer pour moi.\nB: Ajoute du sucre, ou essaie le thé.",
 exampleSrc:"A: This coffee is too bitter for me.\nB: Add some sugar, or try tea.",
 funFact:"From Latin amarus. La mer (the sea) tastes amère, which may be why the words sound alike."},

{type:"teach", trg:"l'amertume", src:"bitterness", pos:"noun", gender:"f",
 note:"Feminine noun. The noun form of amer.\nUsed for emotional bitterness more than taste.",
 example:"A: Il parle de son ancien travail avec amertume.\nB: C'est normal, il a été licencié injustement.",
 exampleSrc:"A: He talks about his old job with bitterness.\nB: That's understandable, he was unfairly fired.",
 funFact:"French literature often contrasts amertume with douceur (sweetness) as life's two poles."},

{type:"teach", trg:"affliger", src:"to afflict, to distress", pos:"verb", gender:null,
 note:"Regular -er verb (with g>ge before a/o).\nFormal register.",
 example:"A: Cette nouvelle m'afflige profondément.\nB: Moi aussi, c'est une vraie tragédie.",
 exampleSrc:"A: This news deeply distresses me.\nB: Me too, it's a real tragedy.",
 funFact:"From Latin affligere, to strike down. The past participle affligé works as an adjective."},

{type:"fb",
 s:"Elle parle de son divorce avec beaucoup d'{1}.",
 a:["amertume"],
 opts:["amertume","anxiété","angoisse","abandon"],
 hint:"This word means emotional bitterness, the noun form of 'bitter.'",
 sSrc:"She talks about her divorce with a lot of {1}."},

{type:"teach", trg:"affolé", src:"panicked, frantic", pos:"adj", gender:null,
 note:"Past participle of affoler used as adjective.\nAffolé (m), affolée (f).",
 example:"A: Pourquoi es-tu si affolé ?\nB: J'ai perdu mon passeport à l'aéroport !",
 exampleSrc:"A: Why are you so panicked?\nB: I lost my passport at the airport!",
 funFact:"Affoler literally means 'to make foolish' (a + fol/fou). Panic makes you lose your mind."},

{type:"teach", trg:"l'affolement", src:"panic, frenzy", pos:"noun", gender:"m",
 note:"Masculine noun. The state of being affolé.\nDescribes collective or individual panic.",
 example:"A: L'affolement s'est emparé de la foule.\nB: Tout le monde courait dans tous les sens.",
 exampleSrc:"A: Panic seized the crowd.\nB: Everyone was running in every direction.",
 funFact:"News headlines love this word. 'Affolement sur les marchés' means stock market panic."},

{type:"teach", trg:"l'apaisement", src:"soothing, appeasement", pos:"noun", gender:"m",
 note:"Masculine noun. From apaiser (to soothe).\nCalming after tension.",
 example:"A: Après la dispute, un sentiment d'apaisement est arrivé.\nB: Oui, on a enfin pu discuter calmement.",
 exampleSrc:"A: After the argument, a feeling of calm arrived.\nB: Yes, we could finally talk calmly.",
 funFact:"In politics, apaisement translates as 'appeasement,' echoing 1930s diplomacy."},

{type:"teach", trg:"apeurer", src:"to frighten, to scare", pos:"verb", gender:null,
 note:"Regular -er verb. Often in past participle: apeuré.\nMilder than terrifier.",
 example:"A: Le chien a apeuré les enfants.\nB: Il est gentil, mais il aboie très fort.",
 exampleSrc:"A: The dog frightened the children.\nB: He's friendly, but he barks very loudly.",
 funFact:"From a- (to) + peur (fear). One of French's many emotion verbs built from nouns."},

{type:"mc",
 q:"Comment dit-on quand quelqu'un est en état de panique totale ?",
 opts:["affolé","anxieux","amer","angoissant"],
 ans:"affolé",
 hint:"This adjective comes from the word for 'fool.' Panic makes you lose your senses."},

{type:"teach", trg:"l'agacement", src:"irritation, annoyance", pos:"noun", gender:"m",
 note:"Masculine noun. From agacer (to irritate).\nMild annoyance, not anger.",
 example:"A: Son agacement était visible quand le téléphone a sonné.\nB: Normal, c'était la troisième fois.",
 exampleSrc:"A: His irritation was visible when the phone rang.\nB: Of course, it was the third time.",
 funFact:"Agacer originally meant 'to set teeth on edge,' like biting into a lemon."},

{type:"teach", trg:"adoucir", src:"to soften, to soothe", pos:"verb", gender:null,
 note:"Regular -ir verb. From doux (soft, sweet).\nPhysical and emotional softening.",
 example:"A: La musique adoucit les moeurs.\nB: C'est vrai, elle me calme toujours.",
 exampleSrc:"A: Music soothes the soul.\nB: That's true, it always calms me down.",
 funFact:"The proverb 'La musique adoucit les moeurs' is one of the most quoted in French."},

{type:"teach", trg:"l'adversité", src:"adversity", pos:"noun", gender:"f",
 note:"Feminine noun. Hardship, difficult circumstances.\nFormal register.",
 example:"A: Comment fais-tu face à l'adversité ?\nB: Je m'appuie sur ma famille et mes amis.",
 exampleSrc:"A: How do you face adversity?\nB: I lean on my family and friends.",
 funFact:"From Latin adversitas. The French love 'faire face à l'adversité' in motivational speeches."},

{type:"fb",
 s:"La musique {1} les moeurs, comme dit le proverbe.",
 a:["adoucit"],
 opts:["adoucit","angoisse","afflige","apeure"],
 hint:"This verb means to soften or soothe, built from the word for 'sweet.'",
 sSrc:"Music {1} the soul, as the proverb says."},

{type:"teach", trg:"l'appréhension", src:"apprehension, dread", pos:"noun", gender:"f",
 note:"Feminine noun. Fearful anticipation.\nAlso means 'understanding' in legal context.",
 example:"A: J'ai beaucoup d'appréhension avant mon entretien.\nB: C'est normal, mais tu es bien préparé.",
 exampleSrc:"A: I have a lot of apprehension before my interview.\nB: That's normal, but you're well prepared.",
 funFact:"Dual meaning: both fear (everyday) and arrest/seizure (legal). Context always clarifies."},

{type:"teach", trg:"l'adoration", src:"adoration, worship", pos:"noun", gender:"f",
 note:"Feminine noun. Extreme love or religious devotion.\nUsed casually for strong fondness.",
 example:"A: Elle a une adoration pour le chocolat.\nB: Je sais, elle en mange tous les jours !",
 exampleSrc:"A: She has an adoration for chocolate.\nB: I know, she eats some every day!",
 funFact:"From Latin adorare (to pray to). French uses it both seriously and playfully."},

{type:"match", pairs:[
  {trg:"l'anxiété", src:"anxiety"},
  {trg:"l'amertume", src:"bitterness"},
  {trg:"l'apaisement", src:"soothing"},
  {trg:"l'agacement", src:"irritation"},
  {trg:"l'appréhension", src:"apprehension"}
]},

{type:"mc",
 q:"Quel verbe signifie 'rendre plus doux' ?",
 opts:["adoucir","angoisser","affliger","apeurer"],
 ans:"adoucir",
 hint:"This verb is built from the adjective doux, meaning soft or sweet."},

{type:"fb",
 s:"L'{1} s'est emparé de la foule après l'explosion.",
 a:["affolement"],
 opts:["affolement","apaisement","agacement","adoration"],
 hint:"This masculine noun describes collective panic and frenzy.",
 sSrc:"The {1} seized the crowd after the explosion."},

{type:"mc",
 q:"Quel mot décrit une légère irritation ?",
 opts:["l'agacement","l'angoisse","l'affolement","l'adversité"],
 ans:"l'agacement",
 hint:"Think of the verb agacer, originally meaning to set your teeth on edge."}

]};
export default LESSON_1;
