const LESSON_19 = {
  id:"frv2_a1gap_l19", title:"Sentiments et émotions", icon:"\u{2764}\u{FE0F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Sentiments et émotions",
     desc:"Express your emotions and feelings. From love to anguish, learn the vocabulary that gives voice to your inner world.",
     goals:["Learn 20 emotion and feeling words","Express what you feel","Describe emotional states in French"]},

    {type:"teach", trg:"l'amour", src:"the love", pos:"noun", gender:"m",
     note:"Masculine noun. The most important emotion word in French.",
     example:"A: L'amour est compliqué.\nB: Oui, mais c'est beau aussi.",
     exampleSrc:"A: Love is complicated.\nB: Yes, but it's beautiful too.",
     funFact:"Revisited from Lesson 2 because love is central to French culture. 'Amour' changes gender in plural: 'les belles amours'."},

    {type:"teach", trg:"l'affection", src:"the affection, the fondness", pos:"noun", gender:"f",
     note:"Feminine noun. Warm, tender feelings for someone.",
     example:"A: Il a de l'affection pour toi.\nB: C'est gentil de sa part.",
     exampleSrc:"A: He has affection for you.\nB: That's nice of him.",
     funFact:"'Affection' is gentler than 'amour'. You can have 'de l'affection' for friends, family, and pets."},

    {type:"teach", trg:"l'angoisse", src:"the anxiety, the anguish", pos:"noun", gender:"f",
     note:"Feminine noun. A deep, pressing feeling of dread.",
     example:"A: L'angoisse me paralyse.\nB: Respire profondément, ça va passer.",
     exampleSrc:"A: The anxiety paralyzes me.\nB: Breathe deeply, it will pass.",
     funFact:"'Crise d'angoisse' is a panic attack. Mental health awareness in France has grown significantly."},

    {type:"teach", trg:"l'admiration", src:"the admiration", pos:"noun", gender:"f",
     note:"Feminine noun. Feeling of wonder and respect for someone.",
     example:"A: J'ai de l'admiration pour les pompiers.\nB: Moi aussi, ils sont courageux.",
     exampleSrc:"A: I have admiration for firefighters.\nB: Me too, they're brave.",
     funFact:"French firefighters ('pompiers') are among the most admired professions in France."},

    {type:"teach", trg:"l'amusement", src:"the amusement, the entertainment", pos:"noun", gender:"m",
     note:"Masculine noun. Fun and entertainment.",
     example:"A: C'est juste pour l'amusement.\nB: D'accord, amusons-nous !",
     exampleSrc:"A: It's just for fun.\nB: Okay, let's have fun!",
     funFact:"Despite their intellectual reputation, the French deeply value 'l'amusement'. Laughter is daily medicine."},

    {type:"mc",
     q:"Quel mot décrit une peur profonde et paralysante ?",
     opts:["l'angoisse","l'affection","l'admiration","l'amusement"],
     ans:"l'angoisse",
     hint:"This feminine noun is stronger than regular worry. It describes intense dread or anxiety."},

    {type:"teach", trg:"l'avarice", src:"the greed, the miserliness", pos:"noun", gender:"f",
     note:"Feminine noun. Excessive attachment to money. A vice.",
     example:"A: L'avarice est un défaut.\nB: Oui, il faut être généreux.",
     exampleSrc:"A: Greed is a flaw.\nB: Yes, one should be generous.",
     funFact:"Molière's play 'L'Avare' (The Miser) made avarice one of the most famous character flaws in French literature."},

    {type:"teach", trg:"l'arrogance", src:"the arrogance", pos:"noun", gender:"f",
     note:"Feminine noun. Excessive pride and self-importance.",
     example:"A: Son arrogance est insupportable.\nB: Oui, il se croit supérieur.",
     exampleSrc:"A: His arrogance is unbearable.\nB: Yes, he thinks he's superior.",
     funFact:"The French distinguish 'fierté' (healthy pride) from 'arrogance' (excessive, unlikable pride)."},

    {type:"teach", trg:"l'amitié", src:"the friendship", pos:"noun", gender:"f",
     note:"Feminine noun. The bond between friends.",
     example:"A: Notre amitié est précieuse.\nB: Oui, depuis vingt ans !",
     exampleSrc:"A: Our friendship is precious.\nB: Yes, for twenty years!",
     funFact:"Revisited from Lesson 2. 'Les amitiés' at the end of a letter means 'warm regards'. More personal than formal."},

    {type:"teach", trg:"agacer", src:"to irritate, to annoy", pos:"verb", gender:null,
     note:"Regular -er verb (c becomes ç before a/o). Mild annoyance.",
     example:"A: Le bruit m'agace.\nB: Moi aussi, c'est pénible.",
     exampleSrc:"A: The noise irritates me.\nB: Me too, it's annoying.",
     funFact:"'Agacer' is milder than 'énerver' (to really annoy). It's like the difference between 'irk' and 'infuriate'."},

    {type:"fb",
     s:"Son {1} est insupportable, il se croit meilleur que tout le monde.",
     a:["arrogance"],
     opts:["arrogance","admiration","affection","amitié"],
     hint:"This feminine noun describes an unpleasant excessive pride and sense of superiority.",
     sSrc:"His {1} is unbearable, he thinks he's better than everyone."},

    {type:"teach", trg:"affoler", src:"to panic, to terrify", pos:"verb", gender:null,
     note:"Regular -er verb. Reflexive: 's'affoler' = to panic.",
     example:"A: Ne t'affole pas, tout va bien.\nB: Tu as raison, je me calme.",
     exampleSrc:"A: Don't panic, everything is fine.\nB: You're right, I'll calm down.",
     funFact:"'Pas de panique !' and 'Ne t'affole pas !' are the two standard ways to tell someone to calm down."},

    {type:"teach", trg:"l'amicalement", src:"in a friendly way", pos:"adv", gender:null,
     note:"Adverb from 'amical'. Used to close letters warmly.",
     example:"A: Comment je termine ma lettre ?\nB: Écris 'amicalement'.",
     exampleSrc:"A: How do I end my letter?\nB: Write 'amicalement' (in friendship).",
     funFact:"Letter-ending hierarchy: 'cordialement' (professionally) < 'amicalement' (warmly) < 'bisous' (kisses, intimate)."},

    {type:"teach", trg:"l'avidement", src:"eagerly, avidly", pos:"adv", gender:null,
     note:"Adverb from 'avide'. With great desire or enthusiasm.",
     example:"A: Il lit avidement tous les livres.\nB: C'est un grand lecteur.",
     exampleSrc:"A: He reads all the books eagerly.\nB: He's a great reader.",
     funFact:"'Avide' (avid, greedy) comes from Latin 'avidus'. Used positively for knowledge, negatively for money."},

    {type:"teach", trg:"l'allergique", src:"allergic", pos:"adj", gender:null,
     note:"Same form for both genders. Physically or figuratively intolerant.",
     example:"A: Tu es allergique à quelque chose ?\nB: Oui, aux arachides.",
     exampleSrc:"A: Are you allergic to anything?\nB: Yes, to peanuts.",
     funFact:"French menus must list allergens by law. 'Allergique' is also used humorously: 'je suis allergique au lundi'."},

    {type:"mc",
     q:"Comment termine-t-on une lettre amicale en français ?",
     opts:["Respectueusement","Amicalement","Cordialement","Sincèrement"],
     ans:"Amicalement",
     hint:"This adverb is warmer than professional 'cordialement' but less intimate than 'bisous'."},

    {type:"teach", trg:"l'alcoolique", src:"alcoholic", pos:"adj", gender:null,
     note:"Same form for both genders. Related to alcohol or alcohol dependency.",
     example:"A: C'est une boisson alcoolique ?\nB: Non, c'est du jus de pomme.",
     exampleSrc:"A: Is it an alcoholic drink?\nB: No, it's apple juice.",
     funFact:"'Les Alcooliques anonymes' (AA) operates actively in France. Alcohol culture and awareness coexist."},

    {type:"teach", trg:"l'alcoolisme", src:"the alcoholism", pos:"noun", gender:"m",
     note:"Masculine noun. The medical condition of alcohol dependency.",
     example:"A: L'alcoolisme est un problème sérieux.\nB: Oui, il faut en parler.",
     exampleSrc:"A: Alcoholism is a serious problem.\nB: Yes, we need to talk about it.",
     funFact:"France has significantly reduced alcohol consumption since the 1960s, but it remains an important health topic."},

    {type:"teach", trg:"l'agréable", src:"pleasant, enjoyable", pos:"adj", gender:null,
     note:"Same form for both genders. Widely used positive adjective.",
     example:"A: La promenade était agréable ?\nB: Oui, le temps était parfait.",
     exampleSrc:"A: Was the walk pleasant?\nB: Yes, the weather was perfect.",
     funFact:"Revisited from Lesson 3. 'Agréable' is the go-to positive adjective for experiences, weather, and company."},

    {type:"teach", trg:"l'amusant", src:"funny, entertaining", pos:"adj", gender:null,
     note:"Masculine form. Feminine: 'amusante'. Makes people laugh or smile.",
     example:"A: L'histoire est amusante ?\nB: Oui, très drôle !",
     exampleSrc:"A: Is the story funny?\nB: Yes, very funny!",
     funFact:"Revisited from Lesson 3. French humor tends toward wordplay ('jeux de mots') and irony rather than slapstick."},

    {type:"fb",
     s:"Ne t'{1} pas, tout va bien se passer.",
     a:["affole"],
     opts:["affole","amuse","agace","admire"],
     hint:"This reflexive verb means to panic or become frantic with worry.",
     sSrc:"Don't {1}, everything is going to be fine."},

    {type:"match", pairs:[
      {trg:"angoisse", src:"anxiety/anguish"},
      {trg:"avarice", src:"greed"},
      {trg:"agacer", src:"to irritate"},
      {trg:"affoler", src:"to panic"},
      {trg:"allergique", src:"allergic"}
    ]},

    {type:"mc",
     q:"Quel adjectif utilisez-vous pour décrire un bon moment ?",
     opts:["angoissant","arrogant","agréable","agaçant"],
     ans:"agréable",
     hint:"This adjective describes something pleasant and enjoyable to experience."},

    {type:"fb",
     s:"Le bruit m'{1}, je ne peux pas me concentrer.",
     a:["agace"],
     opts:["agace","affole","amuse","admire"],
     hint:"This verb describes a mild but persistent feeling of annoyance or irritation.",
     sSrc:"The noise {1} me, I can't concentrate."}
  ]
};
export default LESSON_19;
