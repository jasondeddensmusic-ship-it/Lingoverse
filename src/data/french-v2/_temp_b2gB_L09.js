const LESSON_9 = {
  id:"frv2_b2gB_l9", title:"Expressions et locutions", icon:"\u{1F4AC}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Expressions et locutions",
     desc:"Master fixed expressions and adverbial phrases that add nuance and sophistication to your French.",
     goals:["Learn 10 advanced French expressions","Use adverbial phrases naturally","Add nuance to formal writing"]},

    {type:"teach", trg:"dans l'absolu", src:"in absolute terms, ideally", pos:"adv", gender:null,
     note:"Adverbial phrase. Considering something in theory, without practical constraints.\nOften introduces an idealistic view before a 'but'.",
     example:"A: Dans l'absolu, tout le monde devrait avoir acces a l'education.\nB: Mais en pratique, les moyens manquent.",
     exampleSrc:"A: In absolute terms, everyone should have access to education.\nB: But in practice, the means are lacking.",
     funFact:"French loves these philosophical hedges. 'Dans l'absolu' lets you state an ideal before admitting reality is messier."},

    {type:"teach", trg:"jusqu'au bout", src:"to the very end, all the way", pos:"adv", gender:null,
     note:"Adverbial phrase. Until the very end, without giving up.\nAller jusqu'au bout = to see something through completely.",
     example:"A: Il est alle jusqu'au bout de son projet.\nB: Malgre tous les obstacles, il n'a pas abandonne.",
     exampleSrc:"A: He went all the way with his project.\nB: Despite all the obstacles, he didn't give up.",
     funFact:"'Aller jusqu'au bout' is a rallying cry in French politics, sports, and business. It conveys determination and refusal to quit."},

    {type:"teach", trg:"la-dedans", src:"in there, inside that", pos:"adv", gender:null,
     note:"Compound adverb. La (there) + dedans (inside).\nCan be literal (physically inside) or figurative (involved in something).",
     example:"A: Qu'est-ce qu'il y a la-dedans?\nB: Ne touche pas, ca pourrait etre dangereux.",
     exampleSrc:"A: What's in there?\nB: Don't touch it, it could be dangerous.",
     funFact:"La-dedans, la-dessus, la-dessous form a trio of French spatial adverbs. They add precision that plain 'dedans' lacks."},

    {type:"teach", trg:"la-dessus", src:"on that, about that, thereupon", pos:"adv", gender:null,
     note:"Compound adverb. La (there) + dessus (on top).\nAlso means 'about that topic' in conversation.",
     example:"A: La-dessus, je suis tout a fait d'accord avec toi.\nB: Au moins on partage le meme avis sur ce point.",
     exampleSrc:"A: On that point, I completely agree with you.\nB: At least we share the same opinion on this.",
     funFact:"'La-dessus, il est parti' (thereupon, he left) is a classic narrative transition in French storytelling."},

    {type:"teach", trg:"par moment", src:"at times, occasionally", pos:"adv", gender:null,
     note:"Adverbial phrase. From time to time, occasionally.\nSynonym: parfois, de temps en temps.",
     example:"A: Par moment, je me demande si j'ai fait le bon choix.\nB: C'est normal d'avoir des doutes.",
     exampleSrc:"A: At times, I wonder if I made the right choice.\nB: It's normal to have doubts.",
     funFact:"'Par moments' (plural) is equally correct and more common. Both forms are accepted in standard French."},

    {type:"teach", trg:"prioritairement", src:"as a priority, primarily", pos:"adv", gender:null,
     note:"Adverb. Giving priority to something over other things.\nFormal register. Common in administrative and policy language.",
     example:"A: Ces fonds seront utilises prioritairement pour l'education.\nB: C'est le secteur qui en a le plus besoin.",
     exampleSrc:"A: These funds will be used primarily for education.\nB: It's the sector that needs it most.",
     funFact:"French administration loves long adverbs. Prioritairement, anterieurement, posterieurement are all bureaucratic favorites."},

    {type:"teach", trg:"en marge de", src:"on the sidelines of, apart from", pos:"prep", gender:null,
     note:"Prepositional phrase. On the edge of, separate from the main activity.\nEn marge de la societe = on the margins of society.",
     example:"A: En marge du sommet, plusieurs accords ont ete signes.\nB: Les reunions informelles sont souvent plus productives.",
     exampleSrc:"A: On the sidelines of the summit, several agreements were signed.\nB: Informal meetings are often more productive.",
     funFact:"French journalists use 'en marge de' constantly. Every major conference generates news 'en marge' of the official program."},

    {type:"teach", trg:"pour peu que", src:"provided that, if only", pos:"conj", gender:null,
     note:"Conjunction. Requires subjunctive. Means 'if even a little' or 'provided that'.\nExpresses a small condition that triggers a result.",
     example:"A: Pour peu qu'il fasse beau, le jardin sera magnifique.\nB: Il suffit de quelques jours de soleil.",
     exampleSrc:"A: If only the weather is nice, the garden will be magnificent.\nB: A few days of sunshine is all it takes.",
     funFact:"Pour peu que always takes subjunctive. It is elegant and literary, rarely heard in casual conversation."},

    {type:"teach", trg:"dans l'espoir de", src:"in the hope of", pos:"prep", gender:null,
     note:"Prepositional phrase. Followed by infinitive.\nExpresses a hopeful intention behind an action.",
     example:"A: Il a postule dans l'espoir de decrocher le poste.\nB: La concurrence est rude mais il a ses chances.",
     exampleSrc:"A: He applied in the hope of landing the job.\nB: The competition is tough but he has a chance.",
     funFact:"French formal letters often end with a variation: 'Dans l'espoir d'une reponse favorable'. It is classic epistolary style."},

    {type:"teach", trg:"c'est-a-dire que", src:"that is to say, meaning that", pos:"conj", gender:null,
     note:"Conjunction. Introduces an explanation or clarification.\nAbbreviated 'c.-a-d.' in writing.",
     example:"A: Il est bilingue, c'est-a-dire qu'il parle deux langues couramment.\nB: C'est un atout enorme sur le marche du travail.",
     exampleSrc:"A: He's bilingual, meaning he speaks two languages fluently.\nB: It's a huge asset in the job market.",
     funFact:"C'est-a-dire is one of the most common French filler expressions. Politicians use it to buy thinking time mid-sentence."},

    {type:"mc", q:"Que signifie 'dans l'absolu'?",
     opts:["En theorie, idealement","Absolument","Immediatement","Definitivement"],
     ans:"En theorie, idealement",
     hint:"The expression introduces an ideal perspective before acknowledging reality"},

    {type:"fb", s:"Il est alle {1} de son reve malgre les difficultes.",
     a:["jusqu'au bout"], opts:["jusqu'au bout","la-dedans","la-dessus","par moment"],
     hint:"The expression means to the very end, seeing something through completely",
     sSrc:"He went {1} with his dream despite the difficulties."},

    {type:"mc", q:"'En marge de la conference' signifie:",
     opts:["A cote de l'evenement principal","Pendant la conference","Avant la conference","Contre la conference"],
     ans:"A cote de l'evenement principal",
     hint:"En marge means on the edge or sidelines of something"},

    {type:"match", pairs:[
      {trg:"dans l'absolu", src:"in absolute terms"},
      {trg:"la-dedans", src:"in there"},
      {trg:"la-dessus", src:"on that"},
      {trg:"par moment", src:"at times"}
    ]},

    {type:"fb", s:"{1}, les fonds iront a la recherche medicale.",
     a:["Prioritairement"], opts:["Prioritairement","La-dessus","Par moment","La-dedans"],
     hint:"The formal adverb means giving something first priority over other options",
     sSrc:"{1}, the funds will go to medical research."},

    {type:"mc", q:"'Pour peu que' est suivi de quel mode?",
     opts:["Le subjonctif","L'indicatif","Le conditionnel","L'infinitif"],
     ans:"Le subjonctif",
     hint:"This conjunction expresses a condition that is not yet realized"},

    {type:"fb", s:"Il a emigre {1} trouver une vie meilleure.",
     a:["dans l'espoir de"], opts:["dans l'espoir de","en marge de","c'est-a-dire","pour peu que"],
     hint:"The prepositional phrase expresses a hopeful intention behind an action",
     sSrc:"He emigrated {1} finding a better life."},

    {type:"mc", q:"Quelle est l'abreviation de 'c'est-a-dire'?",
     opts:["c.-a-d.","c.a.d","cad","c-a-d"],
     ans:"c.-a-d.",
     hint:"French abbreviations typically use periods after each shortened element"},

    {type:"fb", s:"{1}, je suis completement de ton avis.",
     a:["La-dessus"], opts:["La-dessus","La-dedans","Par moment","Prioritairement"],
     hint:"The compound adverb meaning 'on that point' or 'about that topic'",
     sSrc:"{1}, I completely agree with you."},

    {type:"match", pairs:[
      {trg:"prioritairement", src:"as a priority"},
      {trg:"en marge de", src:"on the sidelines of"},
      {trg:"pour peu que", src:"provided that"},
      {trg:"dans l'espoir de", src:"in the hope of"}
    ]}
  ]
};
export default LESSON_9;
