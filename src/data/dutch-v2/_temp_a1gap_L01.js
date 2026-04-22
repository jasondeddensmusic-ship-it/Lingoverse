// L01: Greetings and Basics — 20 A1 gap words
const LESSON_1 = {
  id:"nlv2_a1gap_l1", title:"Hallo en Tot Ziens", icon:"\u{1F44B}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Greetings and Basics",
     desc:"Learn essential Dutch greetings, polite forms, and basic social words for everyday encounters.",
     goals:["Master 20 core greeting and polite words","Use Meneer and Mevrouw correctly","Say hello and goodbye naturally"]},

    {type:"teach", trg:"Meneer", src:"Sir / Mr.", pos:"noun", gender:"c",
     note:"Common gender (de). Used as a polite address form.",
     example:"A: Goedemorgen, Meneer Jansen.\nB: Goedemorgen! Hoe gaat het?",
     exampleSrc:"A: Good morning, Mr. Jansen.\nB: Good morning! How are you?",
     funFact:"From 'mijn heer' (my lord). Still used in formal Dutch daily life."},

    {type:"teach", trg:"mevrouw", src:"Madam / Mrs.", pos:"noun", gender:"c",
     note:"Common gender (de). Polite address for women.",
     example:"A: Mevrouw De Vries, mag ik iets vragen?\nB: Natuurlijk!",
     exampleSrc:"A: Mrs. De Vries, may I ask something?\nB: Of course!",
     funFact:"From 'mijn vrouw' (my wife/woman). Used regardless of marital status."},

    {type:"teach", trg:"de naam", src:"the name", pos:"noun", gender:"c",
     note:"Common gender (de). One of the first words you need.",
     example:"A: Wat is je naam?\nB: Mijn naam is Sophie.",
     exampleSrc:"A: What is your name?\nB: My name is Sophie.",
     funFact:"Cognate with English 'name' and German 'Name'. Same Germanic root."},

    {type:"teach", trg:"heten", src:"to be called", pos:"verb", gender:null,
     note:"Irregular verb. Ik heet, jij heet, hij heet.",
     example:"A: Hoe heet je?\nB: Ik heet Mark. En jij?",
     exampleSrc:"A: What are you called?\nB: I am called Mark. And you?",
     funFact:"Dutch uses 'heten' where English uses 'to be called'. No direct English equivalent."},

    {type:"mc",
     q:"Iemand vraagt naar je naam. Ik ___ Sophie.",
     opts:["heet","ben","heb","ga"],
     ans:"heet",
     hint:"Which verb means 'to be called' in Dutch? Think of introductions."},

    {type:"teach", trg:"de groet", src:"the greeting", pos:"noun", gender:"c",
     note:"Common gender (de). Related to the verb 'groeten'.",
     example:"A: Met vriendelijke groet, Jan.\nB: Wat een nette brief!",
     exampleSrc:"A: With kind regards, Jan.\nB: What a nice letter!",
     funFact:"'Met vriendelijke groet' is the standard Dutch letter closing, like 'Kind regards'."},

    {type:"teach", trg:"de dank", src:"the thanks", pos:"noun", gender:"c",
     note:"Common gender (de). 'Dank je' = thanks (informal).",
     example:"A: Hier is je koffie.\nB: Dank je wel!",
     exampleSrc:"A: Here is your coffee.\nB: Thank you!",
     funFact:"'Dank je' is informal, 'dank u' is formal. Both are everywhere in Dutch."},

    {type:"teach", trg:"danken", src:"to thank", pos:"verb", gender:null,
     note:"Regular verb. Ik dank, jij dankt, hij dankt.",
     example:"A: Ik wil je danken voor je hulp.\nB: Graag gedaan!",
     exampleSrc:"A: I want to thank you for your help.\nB: You're welcome!",
     funFact:"Related to English 'thank' and German 'danken'. All from Proto-Germanic."},

    {type:"teach", trg:"bedanken", src:"to thank (someone)", pos:"verb", gender:null,
     note:"More common than 'danken' in everyday Dutch.",
     example:"A: Ik wil je bedanken.\nB: Dat hoeft niet!",
     exampleSrc:"A: I want to thank you.\nB: That's not necessary!",
     funFact:"The 'be-' prefix makes it transitive. You 'bedank' a person directly."},

    {type:"fb",
     s:"Ik wil je {1} voor het cadeau.",
     a:["bedanken"],
     opts:["bedanken","groeten","heten","noemen"],
     hint:"Which verb means to express gratitude to someone directly?",
     sSrc:"I want to {1} you for the gift."},

    {type:"teach", trg:"goed", src:"good", pos:"adj", gender:null,
     note:"Very common adjective. Also used as adverb meaning 'well'.",
     example:"A: Hoe gaat het?\nB: Goed, dank je!",
     exampleSrc:"A: How are you?\nB: Good, thank you!",
     funFact:"Cognate with English 'good'. One of the most frequent Dutch words."},

    {type:"teach", trg:"fijn", src:"fine / nice / pleasant", pos:"adj", gender:null,
     note:"Expresses something pleasant or agreeable.",
     example:"A: Fijn weekend!\nB: Jij ook, bedankt!",
     exampleSrc:"A: Have a nice weekend!\nB: You too, thanks!",
     funFact:"Also means 'fine' (texture). 'Fijn zand' = fine sand. Context determines meaning."},

    {type:"teach", trg:"echt", src:"really / genuine", pos:"adj", gender:null,
     note:"As adjective: genuine. As adverb: really.",
     example:"A: Is dat echt?\nB: Ja, het is echt waar!",
     exampleSrc:"A: Is that real?\nB: Yes, it is really true!",
     funFact:"One of the most used intensifiers in spoken Dutch. 'Echt?' = 'Really?'"},

    {type:"teach", trg:"het afscheid", src:"the farewell", pos:"noun", gender:"n",
     note:"Neuter noun (het). Used for goodbyes.",
     example:"A: Het was een mooi afscheid.\nB: Ja, heel emotioneel.",
     exampleSrc:"A: It was a beautiful farewell.\nB: Yes, very emotional.",
     funFact:"Compound: af (off) + scheid (separation). Literally 'separating off'."},

    {type:"mc",
     q:"Welk woord past? ___ weekend!",
     opts:["Fijn","Groet","Naam","Afscheid"],
     ans:"Fijn",
     hint:"Which word means 'nice' and is used to wish someone a good weekend?"},

    {type:"teach", trg:"glimlachen", src:"to smile", pos:"verb", gender:null,
     note:"Separable verb: ik glimlach, hij glimlacht.",
     example:"A: Waarom glimlach je?\nB: Ik ben gewoon blij!",
     exampleSrc:"A: Why are you smiling?\nB: I am just happy!",
     funFact:"Compound: glim (gleam) + lachen (to laugh). A 'gleaming laugh' = a smile."},

    {type:"teach", trg:"lachen", src:"to laugh", pos:"verb", gender:null,
     note:"Regular verb. Ik lach, jij lacht, hij lacht.",
     example:"A: Waarom lach je zo hard?\nB: Die film is zo grappig!",
     exampleSrc:"A: Why are you laughing so hard?\nB: That movie is so funny!",
     funFact:"Cognate with English 'laugh'. Both from Proto-Germanic lahjan."},

    {type:"teach", trg:"kennen", src:"to know (a person/thing)", pos:"verb", gender:null,
     note:"For knowing people or places. Not for facts (that is 'weten').",
     example:"A: Ken je Meneer Bakker?\nB: Ja, hij is mijn buurman.",
     exampleSrc:"A: Do you know Mr. Bakker?\nB: Yes, he is my neighbor.",
     funFact:"Dutch distinguishes 'kennen' (familiarity) from 'weten' (knowledge of facts)."},

    {type:"teach", trg:"noemen", src:"to call / to name", pos:"verb", gender:null,
     note:"Regular verb. Ik noem, jij noemt, hij noemt.",
     example:"A: Hoe noem je dat in het Nederlands?\nB: Dat noemen we een fiets.",
     exampleSrc:"A: What do you call that in Dutch?\nB: We call that a bicycle.",
     funFact:"Related to English 'name' (as a verb). From the same Germanic root."},

    {type:"teach", trg:"gewoon", src:"normal / just / simply", pos:"adj", gender:null,
     note:"Very common filler word in spoken Dutch.",
     example:"A: Wat doe je vanavond?\nB: Ik blijf gewoon thuis.",
     exampleSrc:"A: What are you doing tonight?\nB: I'm just staying home.",
     funFact:"One of the most overused words in Dutch. 'Doe maar gewoon' = just act normal."},

    {type:"teach", trg:"normaal", src:"normal / usual", pos:"adj", gender:null,
     note:"More formal synonym of 'gewoon'.",
     example:"A: Is dat normaal hier?\nB: Ja, heel normaal.",
     exampleSrc:"A: Is that normal here?\nB: Yes, very normal.",
     funFact:"Same Latin root as English 'normal'. Borrowed via French."},

    {type:"fb",
     s:"Vraagt iemand over mevrouw De Vries? Ja, ik {1} haar goed.",
     a:["ken"],
     opts:["ken","weet","noem","heet"],
     hint:"Which verb is used for being familiar with a person?",
     sSrc:"Do you know Mrs. De Vries? Yes, I {1} her well."},

    {type:"match", pairs:[
      {trg:"Meneer", src:"Sir / Mr."},
      {trg:"mevrouw", src:"Madam / Mrs."},
      {trg:"afscheid", src:"farewell"},
      {trg:"groet", src:"greeting"}
    ]}
  ]
};
export default LESSON_1;
