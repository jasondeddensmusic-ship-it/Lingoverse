const LESSON_1 = {
  id:"frv2_a1gap_l1", title:"Bonjour et Allô", icon:"\u{1F44B}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Bonjour et Allô",
     desc:"Essential greetings, reactions, and everyday interjections. These small words are the heartbeat of spoken French.",
     goals:["Learn 20 greeting and reaction words","Use common French interjections naturally","Respond to surprises and questions"]},

    {type:"teach", trg:"allô", src:"hello (on the phone)", pos:"intj", gender:null,
     note:"Used exclusively when answering the phone.",
     example:"A: Allô, c'est Marie ?\nB: Oui, c'est moi. Bonjour !",
     exampleSrc:"A: Hello, is this Marie?\nB: Yes, it's me. Hello!",
     funFact:"Borrowed from English 'hello' in the 1880s when telephones arrived in France."},

    {type:"teach", trg:"ah", src:"ah, oh", pos:"intj", gender:null,
     note:"Expresses surprise, understanding, or emotion.",
     example:"A: J'ai trouvé ton chat.\nB: Ah, merci beaucoup !",
     exampleSrc:"A: I found your cat.\nB: Ah, thank you so much!",
     funFact:"One of the most universal sounds across all human languages."},

    {type:"teach", trg:"ah bon", src:"oh really, is that so", pos:"intj", gender:null,
     note:"Shows mild surprise or interest. Very common in conversation.",
     example:"A: Je pars en vacances demain.\nB: Ah bon ? Où tu vas ?",
     exampleSrc:"A: I'm leaving on vacation tomorrow.\nB: Oh really? Where are you going?",
     funFact:"Can sound surprised or skeptical depending on intonation. Rising tone means genuine surprise."},

    {type:"teach", trg:"ah oui", src:"oh yes, right", pos:"intj", gender:null,
     note:"Confirms or recalls something. Signals agreement.",
     example:"A: Tu te souviens de Pierre ?\nB: Ah oui, bien sûr !",
     exampleSrc:"A: Do you remember Pierre?\nB: Oh yes, of course!",
     funFact:"French speakers use 'ah oui' to show they're actively listening and engaged."},

    {type:"teach", trg:"ah non", src:"oh no", pos:"intj", gender:null,
     note:"Expresses refusal, disbelief, or dismay.",
     example:"A: Il pleut encore.\nB: Ah non, pas encore !",
     exampleSrc:"A: It's raining again.\nB: Oh no, not again!",
     funFact:"French speakers often stretch it to 'ah nooon' for dramatic effect."},

    {type:"mc",
     q:"Que dit-on quand on répond au téléphone ?",
     opts:["Allô","Ah bon","Ah oui","Ah non"],
     ans:"Allô",
     hint:"This greeting is reserved specifically for phone calls."},

    {type:"teach", trg:"ah ouais", src:"oh yeah (informal)", pos:"intj", gender:null,
     note:"Casual version of 'ah oui'. Common among friends.",
     example:"A: J'ai gagné au loto !\nB: Ah ouais ? C'est pas vrai !",
     exampleSrc:"A: I won the lottery!\nB: Oh yeah? No way!",
     funFact:"'Ouais' is the informal 'oui', similar to English 'yeah' vs 'yes'."},

    {type:"teach", trg:"l'accent", src:"the accent", pos:"noun", gender:"m",
     note:"Masculine noun. Means both a speech accent and a written accent mark.",
     example:"A: Tu as un accent ?\nB: Oui, j'ai un accent du sud.",
     exampleSrc:"A: Do you have an accent?\nB: Yes, I have a southern accent.",
     funFact:"French has 5 accent marks: acute, grave, circumflex, diaeresis, and cedilla."},

    {type:"teach", trg:"l'air", src:"the air, the look", pos:"noun", gender:"m",
     note:"Masculine noun. Means 'air' and also 'appearance' or 'look'.",
     example:"A: Tu as l'air fatigué.\nB: Oui, j'ai mal dormi.",
     exampleSrc:"A: You look tired.\nB: Yes, I slept badly.",
     funFact:"'Avoir l'air' (to look/seem) is one of the most common French expressions."},

    {type:"teach", trg:"ainsi", src:"thus, like this", pos:"adv", gender:null,
     note:"Formal way to say 'in this way' or 'therefore'.",
     example:"A: Comment on fait ?\nB: Ainsi, tu mélanges d'abord la farine.",
     exampleSrc:"A: How do we do it?\nB: Like this, you mix the flour first.",
     funFact:"'Et ainsi de suite' means 'and so on', used just like the English phrase."},

    {type:"fb",
     s:"Tu as {1} fatigué aujourd'hui.",
     a:["l'air"],
     opts:["l'air","l'accent","ainsi","allô"],
     hint:"This expression means 'to look' or 'to seem' when used with avoir.",
     sSrc:"You look {1} tired today."},

    {type:"teach", trg:"alors", src:"so, then, well", pos:"adv", gender:null,
     note:"Extremely common filler word. Starts sentences or links ideas.",
     example:"A: Alors, tu viens ou pas ?\nB: Alors, je ne sais pas encore.",
     exampleSrc:"A: So, are you coming or not?\nB: Well, I don't know yet.",
     funFact:"French people use 'alors' constantly, like English speakers use 'so' or 'well'."},

    {type:"teach", trg:"aussi", src:"also, too", pos:"adv", gender:null,
     note:"Placed after the verb. One of the most frequent French adverbs.",
     example:"A: J'aime le chocolat.\nB: Moi aussi !",
     exampleSrc:"A: I like chocolate.\nB: Me too!",
     funFact:"'Moi aussi' (me too) is one of the first phrases every French learner picks up."},

    {type:"teach", trg:"aujourd'hui", src:"today", pos:"adv", gender:null,
     note:"Literally 'on the day of today'. Used constantly in daily speech.",
     example:"A: Qu'est-ce que tu fais aujourd'hui ?\nB: Aujourd'hui, je reste à la maison.",
     exampleSrc:"A: What are you doing today?\nB: Today, I'm staying home.",
     funFact:"Built from 'au jour d'hui' where 'hui' already meant 'today' in Old French. So it literally means 'on the day of today'."},

    {type:"mc",
     q:"Comment dit-on 'me too' en français ?",
     opts:["Moi aussi","Moi alors","Moi ainsi","Moi aujourd'hui"],
     ans:"Moi aussi",
     hint:"This adverb means 'also' or 'too' and goes after the verb or pronoun."},

    {type:"teach", trg:"avant", src:"before", pos:"adv", gender:null,
     note:"Used for time ('before the meeting') or position ('in front').",
     example:"A: On mange avant ou après ?\nB: Avant, j'ai faim !",
     exampleSrc:"A: Do we eat before or after?\nB: Before, I'm hungry!",
     funFact:"The opposite 'après' (after) is equally common. Together they cover most time references."},

    {type:"teach", trg:"avec", src:"with", pos:"prep", gender:null,
     note:"One of the most essential French prepositions.",
     example:"A: Tu viens avec moi ?\nB: Oui, j'arrive avec mon frère.",
     exampleSrc:"A: Are you coming with me?\nB: Yes, I'm coming with my brother.",
     funFact:"From Latin 'apud hoc' (with this). One of the 10 most used words in French."},

    {type:"teach", trg:"assez", src:"enough, quite", pos:"adv", gender:null,
     note:"Means 'enough' after a noun, or 'quite/rather' before an adjective.",
     example:"A: Tu as assez mangé ?\nB: Oui, c'est assez pour moi.",
     exampleSrc:"A: Have you eaten enough?\nB: Yes, that's enough for me.",
     funFact:"'J'en ai assez !' (I've had enough!) is a classic expression of frustration."},

    {type:"teach", trg:"au contraire", src:"on the contrary", pos:"adv", gender:null,
     note:"Used to contradict what someone just said. Quite formal.",
     example:"A: Tu n'aimes pas le café ?\nB: Au contraire, j'adore le café !",
     exampleSrc:"A: You don't like coffee?\nB: On the contrary, I love coffee!",
     funFact:"This phrase is used in English too, often with a French accent for dramatic flair."},

    {type:"teach", trg:"au fait", src:"by the way", pos:"adv", gender:null,
     note:"Introduces a new topic in conversation. Very natural.",
     example:"A: Au fait, tu as vu Marie ?\nB: Non, pas depuis lundi.",
     exampleSrc:"A: By the way, did you see Marie?\nB: No, not since Monday.",
     funFact:"Literally means 'to the fact'. French loves turning simple words into elegant phrases."},

    {type:"fb",
     s:"Tu viens {1} moi au cinéma ?",
     a:["avec"],
     opts:["avec","avant","aussi","assez"],
     hint:"This preposition means 'accompanied by' or 'together with'.",
     sSrc:"Are you coming {1} me to the cinema?"},

    {type:"match", pairs:[
      {trg:"allô", src:"hello (phone)"},
      {trg:"aujourd'hui", src:"today"},
      {trg:"avec", src:"with"},
      {trg:"assez", src:"enough"},
      {trg:"au fait", src:"by the way"}
    ]},

    {type:"mc",
     q:"Quel mot veut dire 'before' en français ?",
     opts:["avant","après","avec","aussi"],
     ans:"avant",
     hint:"This word is the opposite of 'après' and refers to earlier in time."},

    {type:"fb",
     s:"{1}, qu'est-ce que tu fais ce soir ?",
     a:["Au fait"],
     opts:["Au fait","Au contraire","Ah bon","Allô"],
     hint:"This phrase introduces a new topic, like 'by the way' in English.",
     sSrc:"{1}, what are you doing tonight?"}
  ]
};
export default LESSON_1;
