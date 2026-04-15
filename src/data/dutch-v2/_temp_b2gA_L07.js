// B2 Gap Batch A — Lesson 07: Inspiratie & Creativiteit
// Theme: Inspiration, arts, hobbies

const LESSON_7 = {id:"nlv2_b2gA_l7", title:"Inspiratie & Creativiteit", icon:"\u{1F3A8}", xp:40, board:true, steps:[
  {type:"intro", title:"Inspiratie & Creativiteit",
   desc:"Learn vocabulary about inspiration, creativity, and cultural life. These words help you discuss art, hobbies, and personal expression in Dutch.",
   goals:["Learn creativity and inspiration vocabulary","Discuss hobbies and cultural activities","Use abstract nouns for personal expression"]},

  {type:"teach", trg:"de inspiratiebron", src:"source of inspiration", pos:"noun", gender:"c",
   note:"Compound: inspiratie + bron (source, spring).\nSomething or someone that inspires you.",
   example:"A: Wat is jouw grootste inspiratiebron?\nB: De natuur. Ik word altijd creatief na een wandeling.\nA: Dat kan ik me voorstellen. En muziek dan?\nB: Muziek is ook een belangrijke inspiratiebron voor mij.",
   exampleSrc:"A: What is your biggest source of inspiration?\nB: Nature. I always get creative after a walk.\nA: I can imagine that. And music?\nB: Music is also an important source of inspiration for me.",
   funFact:"The word 'bron' (source/spring) appears in many Dutch compounds: waterbron, energiebron, inkomstenbron. It always means 'where something originates from.'"},

  {type:"teach", trg:"de improvisatie", src:"improvisation", pos:"noun", gender:"c",
   note:"From Italian 'improvvisare'. Used in music, theatre, and everyday situations.",
   example:"A: De toneelgroep doet aan improvisatie.\nB: Dat vind ik dapper. Alles zonder script!\nA: Het vereist veel creativiteit en snelheid.\nB: Wil je een keer mee naar een voorstelling?",
   exampleSrc:"A: The theatre group does improvisation.\nB: I find that brave. Everything without a script!\nA: It requires a lot of creativity and speed.\nB: Would you like to come to a show sometime?",
   funFact:"Improvisation theatre (improvisatietheater) is hugely popular in the Netherlands. The TV show 'Wie is de Mol?' (Who is the Mole?) is a national obsession that requires improvisation skills."},

  {type:"teach", trg:"de imitatie", src:"imitation", pos:"noun", gender:"c",
   note:"From Latin 'imitatio'. Both copying and performing impressions.\nUsed in art, learning, and comedy.",
   example:"A: Zijn schilderij is een imitatie van Rembrandt.\nB: Is dat niet gewoon namaken?\nA: Imitatie kan ook een vorm van leren zijn.\nB: Dat is waar. Veel kunstenaars beginnen met imitatie.",
   exampleSrc:"A: His painting is an imitation of Rembrandt.\nB: Isn't that just copying?\nA: Imitation can also be a form of learning.\nB: That's true. Many artists start with imitation.",
   funFact:"The Dutch Golden Age produced many 'school of Rembrandt' paintings that are technically imitaties. Some are so good that experts still debate which paintings Rembrandt actually made himself."},

  {type:"teach", trg:"de hobbyist", src:"hobbyist, amateur enthusiast", pos:"noun", gender:"c",
   note:"From English 'hobby' + -ist suffix.\nSomeone who does something as a hobby, not professionally.",
   example:"A: Ben je een professionele fotograaf?\nB: Nee, ik ben een hobbyist.\nA: Maar je foto's zijn echt goed!\nB: Dank je. Ik besteed er veel vrije tijd aan.",
   exampleSrc:"A: Are you a professional photographer?\nB: No, I'm a hobbyist.\nA: But your photos are really good!\nB: Thanks. I spend a lot of free time on it.",
   funFact:"The Dutch are big hobbyists. Popular hobbies include fietsen (cycling), tuinieren (gardening), and knutselen (crafting). The word 'hobby' itself is borrowed from English."},

  {type:"teach", trg:"de interpretatie", src:"interpretation", pos:"noun", gender:"c",
   note:"From Latin 'interpretatio'. How you understand or explain something.\nUsed in art, law, and everyday discussion.",
   example:"A: Wat is jouw interpretatie van dit gedicht?\nB: Ik denk dat het over eenzaamheid gaat.\nA: Interessant. Mijn interpretatie is anders.\nB: Dat maakt kunst zo boeiend: iedereen ziet iets anders.",
   exampleSrc:"A: What is your interpretation of this poem?\nB: I think it's about loneliness.\nA: Interesting. My interpretation is different.\nB: That's what makes art so fascinating: everyone sees something different.",
   funFact:"Dutch art criticism values multiple interpretaties. The concept of 'meerduidigheid' (ambiguity) is considered a strength, not a weakness, in Dutch literary and artistic tradition."},

  {type:"teach", trg:"de introductie", src:"introduction", pos:"noun", gender:"c",
   note:"From Latin 'introductio'. The act of presenting something new.\nUsed for products, people, and concepts.",
   example:"A: De introductie van het nieuwe product is volgende week.\nB: Zijn jullie er klaar voor?\nA: Bijna. De marketingcampagne loopt al.\nB: Spannend! Ik ben benieuwd hoe het ontvangen wordt.",
   exampleSrc:"A: The introduction of the new product is next week.\nB: Are you ready for it?\nA: Almost. The marketing campaign is already running.\nB: Exciting! I'm curious how it will be received.",
   funFact:"In Dutch academic writing, the introductie (or inleiding) follows strict conventions. It must state the research question, relevance, and structure. Dutch theses are famous for their methodical introductions."},

  {type:"tip", title:"Latin-Origin -tie Nouns",
   text:"Dutch has many nouns ending in -tie, all from Latin:\n\n- inspiratie, improvisatie, imitatie\n- interpretatie, introductie\n- indicatie, infectie (from earlier lessons)\n\nAll -tie nouns are de-words (common gender).\nPlural: -ties (inspiraties, interpretaties).\n\nThis is one of the most reliable gender rules in Dutch: if it ends in -tie, it is always 'de'.",
   deepDive:{title:"Recognizing -tie Nouns",
    text:"The -tie suffix corresponds to English -tion:\n\ninformation > informatie\ninterpretation > interpretatie\nintroduction > introductie\nimitation > imitatie\n\nThis makes hundreds of Dutch words instantly recognizable for English speakers. The spelling difference (-tion > -tie) is the only change needed. Pronunciation shifts the stress: English stresses -TION, Dutch stresses the syllable before -tie."}},

  {type:"mc", q:"Welk woord betekent 'source of inspiration'?",
   opts:["de inspiratiebron","de improvisatie","de interpretatie","de introductie"],
   ans:"de inspiratiebron",
   hint:"Inspiratie + bron (source/spring). Where your creative ideas come from."},

  {type:"fb", s:"De toneelgroep doet aan {1}: alles zonder script.",
   a:["improvisatie"], opts:["improvisatie","imitatie","interpretatie","introductie"],
   hint:"Performing without a script, making things up on the spot.",
   sSrc:"The theatre group does improvisation: everything without a script."},

  {type:"mc", q:"Ben je een professionele fotograaf? Nee, ik ben een hobbyist. Wat is een 'hobbyist'?",
   opts:["someone who does something as a hobby","a professional photographer","a hobby shop owner","a creative director"],
   ans:"someone who does something as a hobby",
   hint:"The -ist suffix indicates a person. Hobby + -ist = someone who does it for fun."},

  {type:"fb", s:"Wat is jouw {1} van dit gedicht?",
   a:["interpretatie"], opts:["interpretatie","inspiratiebron","improvisatie","introductie"],
   hint:"Your personal understanding or explanation of a work of art.",
   sSrc:"What is your interpretation of this poem?"},

  {type:"match", pairs:[
    {trg:"inspiratiebron", src:"source of inspiration"},
    {trg:"improvisatie", src:"improvisation"},
    {trg:"imitatie", src:"imitation"},
    {trg:"hobbyist", src:"hobbyist"},
    {trg:"interpretatie", src:"interpretation"},
    {trg:"introductie", src:"introduction"}
  ]},

  {type:"mc", q:"Zijn schilderij is een imitatie van Rembrandt. Wat is 'imitatie'?",
   opts:["a copy or reproduction","an original work","a critique","an exhibition"],
   ans:"a copy or reproduction",
   hint:"From Latin imitatio. Making something that resembles the original."},

  {type:"fb", s:"De {1} van het nieuwe product is volgende week.",
   a:["introductie"], opts:["introductie","interpretatie","improvisatie","inspiratiebron"],
   hint:"The act of presenting or launching something new to the public.",
   sSrc:"The introduction of the new product is next week."},

  {type:"drag_fill", s:"De kunstenaar begon met {1} van de meesters, maar vond al snel zijn eigen {2}.",
   blanks:{"1":"imitatie","2":"inspiratiebron"},
   pool:["imitatie","inspiratiebron","introductie","hobbyist","improvisatie"],
   hint:"He started by copying the masters, then discovered what truly fueled his own creativity."}
]};
export default LESSON_7;
