// L19: Common Adverbs and Expressions — 20 A1 gap words
const LESSON_19 = {
  id:"nlv2_a1gap_l19", title:"Bijwoorden en Uitdrukkingen", icon:"\u{1F4A1}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Common Adverbs and Expressions",
     desc:"Learn essential Dutch adverbs and common expressions. These small words make your Dutch sound natural.",
     goals:["Master 20 common adverbs and expressions","Use alleen, bijna, genoeg naturally","Sound more natural in everyday Dutch"]},

    {type:"teach", trg:"alleen", src:"alone / only", pos:"adv", gender:null,
     note:"Double meaning: by oneself, or 'only/just'.",
     example:"A: Woon je alleen?\nB: Ja, ik woon alleen.",
     exampleSrc:"A: Do you live alone?\nB: Yes, I live alone.",
     funFact:"'Al' + 'een' (all one). Both 'alone' and 'only'. Context tells you which."},

    {type:"teach", trg:"allemaal", src:"all / all of them", pos:"adv", gender:null,
     note:"Emphasizes 'all'. Stronger than just 'al'.",
     example:"A: Zijn jullie allemaal klaar?\nB: Ja, we zijn allemaal klaar!",
     exampleSrc:"A: Are you all ready?\nB: Yes, we are all ready!",
     funFact:"'Al' + 'maal' (times). Literally 'all times' = every single one."},

    {type:"teach", trg:"anders", src:"otherwise / differently", pos:"adv", gender:null,
     note:"Adverb form of 'ander'. 'Anders' = in a different way.",
     example:"A: Doe het anders.\nB: Hoe dan?",
     exampleSrc:"A: Do it differently.\nB: How then?",
     funFact:"'Ander' = other (adj). 'Anders' = otherwise (adv). The -s makes it an adverb."},

    {type:"teach", trg:"bijna", src:"almost / nearly", pos:"adv", gender:null,
     note:"Very common. 'Bijna klaar!' = Almost done!",
     example:"A: Ben je klaar?\nB: Bijna! Nog vijf minuten.",
     exampleSrc:"A: Are you done?\nB: Almost! Five more minutes.",
     funFact:"Compound: bij (by/near) + na (close). So close you're 'by-near' it."},

    {type:"mc",
     q:"Ik ben ___ klaar. Nog twee minuten!",
     opts:["bijna","allemaal","alleen","anders"],
     ans:"bijna",
     hint:"Which adverb means 'almost'? Very close to being finished."},

    {type:"teach", trg:"bijvoorbeeld", src:"for example", pos:"adv", gender:null,
     note:"Very common linking word. Often abbreviated 'bijv.'",
     example:"A: Ik hou van fruit, bijvoorbeeld appels.\nB: Ik ook!",
     exampleSrc:"A: I like fruit, for example apples.\nB: Me too!",
     funFact:"Compound: bij (by) + voorbeeld (example). Literally 'by example'."},

    {type:"teach", trg:"genoeg", src:"enough", pos:"adv", gender:null,
     note:"Comes AFTER the adjective: 'groot genoeg' = big enough.",
     example:"A: Heb je genoeg geld?\nB: Ja, meer dan genoeg!",
     exampleSrc:"A: Do you have enough money?\nB: Yes, more than enough!",
     funFact:"Cognate with English 'enough' (from Germanic 'ganogaz'). Same root."},

    {type:"teach", trg:"helemaal", src:"completely / totally", pos:"adv", gender:null,
     note:"Strong intensifier. 'Helemaal niet' = not at all.",
     example:"A: Ben je helemaal klaar?\nB: Ja, helemaal!",
     exampleSrc:"A: Are you completely done?\nB: Yes, completely!",
     funFact:"Compound: hele (whole) + maal (time). Literally 'a whole time' = totally."},

    {type:"teach", trg:"liever", src:"rather / preferably", pos:"adv", gender:null,
     note:"Comparative of 'lief' (dear). 'Ik wil liever...' = I would rather...",
     example:"A: Wil je koffie of thee?\nB: Liever thee, dank je.",
     exampleSrc:"A: Do you want coffee or tea?\nB: Rather tea, thanks.",
     funFact:"From 'lief' (dear). What you like more is 'dearer' to you. Elegant logic."},

    {type:"teach", trg:"meteen", src:"immediately / right away", pos:"adv", gender:null,
     note:"Urgency word. 'Kom meteen!' = Come right away!",
     example:"A: Kun je meteen komen?\nB: Ja, ik kom eraan!",
     exampleSrc:"A: Can you come right away?\nB: Yes, I'm on my way!",
     funFact:"Compound: met (with) + een (one). Literally 'with one' = at once."},

    {type:"fb",
     s:"Ik drink {1} thee dan koffie.",
     a:["liever"],
     opts:["liever","bijna","helemaal","meteen"],
     hint:"Which adverb means 'rather' or 'preferably'? Expressing a preference.",
     sSrc:"I {1} drink tea than coffee."},

    {type:"teach", trg:"nu", src:"now", pos:"adv", gender:null,
     note:"Very basic and very common. 'Nu meteen' = right now.",
     example:"A: Wat doe je nu?\nB: Ik leer Nederlands!",
     exampleSrc:"A: What are you doing now?\nB: I'm learning Dutch!",
     funFact:"Cognate with English 'now'. One of the most basic Dutch words."},

    {type:"teach", trg:"af en toe", src:"now and then / occasionally", pos:"adv", gender:null,
     note:"Expression for infrequent occurrence.",
     example:"A: Ga je vaak naar de bioscoop?\nB: Nee, af en toe.",
     exampleSrc:"A: Do you go to the cinema often?\nB: No, now and then.",
     funFact:"'Af en toe' (off and on). Like English 'off and on' or 'now and then'."},

    {type:"teach", trg:"niet alleen", src:"not only", pos:"adv", gender:null,
     note:"'Niet alleen... maar ook...' = not only... but also...",
     example:"A: Hij spreekt niet alleen Nederlands maar ook Frans.\nB: Wat knap!",
     exampleSrc:"A: He speaks not only Dutch but also French.\nB: How impressive!",
     funFact:"Same structure as English 'not only... but also'. Easy to remember."},

    {type:"teach", trg:"niet waar", src:"isn't that right? / right?", pos:"adv", gender:null,
     note:"Tag question at end of sentence. Like English 'right?'",
     example:"A: Je komt morgen, niet waar?\nB: Ja, natuurlijk!",
     exampleSrc:"A: You're coming tomorrow, right?\nB: Yes, of course!",
     funFact:"Literally 'not true?'. More formal than 'toch?' (right?) or 'he?' (huh?)."},

    {type:"mc",
     q:"Ga je vaak sporten? Nee, ___.",
     opts:["af en toe","meteen","helemaal","nu"],
     ans:"af en toe",
     hint:"Which expression means 'now and then' or 'occasionally'?"},

    {type:"teach", trg:"aan het", src:"(indicates ongoing action)", pos:"prep", gender:null,
     note:"'Zijn + aan het + infinitive' = to be doing something.",
     example:"A: Wat ben je aan het doen?\nB: Ik ben aan het koken.",
     exampleSrc:"A: What are you doing?\nB: I am cooking.",
     funFact:"This is how Dutch makes present continuous. 'Ik ben aan het lezen' = I am reading."},

    {type:"teach", trg:"na", src:"after", pos:"prep", gender:null,
     note:"Preposition. 'Na het eten' = after the meal.",
     example:"A: Wat doen we na het eten?\nB: Een film kijken.",
     exampleSrc:"A: What shall we do after dinner?\nB: Watch a movie.",
     funFact:"Cognate with English 'nigh' (near). Also used in 'naast' (next to)."},

    {type:"teach", trg:"mee", src:"along / with (along)", pos:"prep", gender:null,
     note:"Particle meaning 'along with'. Used in separable verbs.",
     example:"A: Ga je mee?\nB: Ja, ik ga mee!",
     exampleSrc:"A: Are you coming along?\nB: Yes, I'm coming along!",
     funFact:"'Meegaan' (go along), 'meenemen' (take along), 'meedoen' (participate). Very productive."},

    {type:"teach", trg:"af", src:"off / down / finished", pos:"prep", gender:null,
     note:"Particle in separable verbs. 'Af' = off, done.",
     example:"A: Het schilderij is af!\nB: Mooi! Laat eens zien.",
     exampleSrc:"A: The painting is finished!\nB: Beautiful! Let me see.",
     funFact:"'Af' as adjective means 'finished'. Many separable verbs use it: afmaken, afwassen, afvallen."},

    {type:"teach", trg:"bij elkaar", src:"together", pos:"prep", gender:null,
     note:"Expression meaning 'together' or 'combined'.",
     example:"A: Hoeveel is dat bij elkaar?\nB: Twintig euro bij elkaar.",
     exampleSrc:"A: How much is that altogether?\nB: Twenty euros altogether.",
     funFact:"Literally 'by each other'. The Dutch way of saying 'all together/combined'."},

    {type:"match", pairs:[
      {trg:"bijna", src:"almost"},
      {trg:"meteen", src:"immediately"},
      {trg:"af en toe", src:"now and then"},
      {trg:"bij elkaar", src:"together"}
    ]}
  ]
};
export default LESSON_19;
