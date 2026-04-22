// L08: Weather and Nature, 20 A1 gap words
const LESSON_8 = {
  id:"nlv2_a1gap_l8", title:"Weer en Natuur", icon:"\u{1F327}\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Weather and Nature",
     desc:"Learn Dutch weather and nature vocabulary. Describe landscapes, locations, and weather conditions.",
     goals:["Master 20 weather and nature words","Describe the weather in Dutch","Talk about countries and landscapes"]},

    {type:"teach", trg:"donker", src:"dark", pos:"adj", gender:null,
     note:"Opposite of 'licht' (light/bright).",
     example:"A: Het is al donker buiten.\nB: Ja, het wordt vroeg donker in de winter.",
     exampleSrc:"A: It's already dark outside.\nB: Yes, it gets dark early in winter.",
     funFact:"Cognate with English 'dark' (old form 'deorc'). Same Germanic origin."},

    {type:"teach", trg:"heerlijk", src:"wonderful / delicious / lovely", pos:"adj", gender:null,
     note:"Expresses great pleasure. For weather, food, or feelings.",
     example:"A: Wat een heerlijk weer!\nB: Ja, eindelijk zon!",
     exampleSrc:"A: What wonderful weather!\nB: Yes, finally sun!",
     funFact:"From 'heer' (lord). Originally meant 'lordly'. Now means delightful."},

    {type:"teach", trg:"het eiland", src:"the island", pos:"noun", gender:"n",
     note:"Neuter noun (het). Plural: eilanden.",
     example:"A: Texel is een mooi eiland.\nB: Ja, ik ga er graag heen.",
     exampleSrc:"A: Texel is a beautiful island.\nB: Yes, I like going there.",
     funFact:"The Wadden Islands are Dutch treasures. Texel, Vlieland, Terschelling."},

    {type:"teach", trg:"het land", src:"the country / land", pos:"noun", gender:"n",
     note:"Neuter noun (het). Both 'country' and 'land/field'.",
     example:"A: Uit welk land kom je?\nB: Ik kom uit Nederland.",
     exampleSrc:"A: Which country are you from?\nB: I'm from the Netherlands.",
     funFact:"Cognate with English 'land'. Nederland = 'low land'. Very fitting!"},

    {type:"teach", trg:"het dorp", src:"the village", pos:"noun", gender:"n",
     note:"Neuter noun (het). Plural: dorpen. Smaller than a stad (city).",
     example:"A: Woon je in een stad of een dorp?\nB: In een klein dorp.",
     exampleSrc:"A: Do you live in a city or a village?\nB: In a small village.",
     funFact:"Cognate with English 'thorp' (as in place names like Cleethorpes)."},

    {type:"mc",
     q:"Nederland betekent letterlijk ___.",
     opts:["laag land","mooi land","groot land","oud land"],
     ans:"laag land",
     hint:"Think about 'neder' (low) plus 'l...'. What does the country name mean?"},

    {type:"teach", trg:"het noorden", src:"the north", pos:"noun", gender:"n",
     note:"Neuter noun (het). One of four compass directions.",
     example:"A: Amsterdam ligt in het noorden.\nB: En Maastricht in het zuiden.",
     exampleSrc:"A: Amsterdam is in the north.\nB: And Maastricht in the south.",
     funFact:"Cognate with English 'north'. Same word, same meaning, same root."},

    {type:"teach", trg:"de haven", src:"the harbor / port", pos:"noun", gender:"c",
     note:"Common gender (de). Rotterdam has Europe's largest port.",
     example:"A: De haven van Rotterdam is enorm.\nB: Ja, de grootste van Europa!",
     exampleSrc:"A: The harbor of Rotterdam is enormous.\nB: Yes, the biggest in Europe!",
     funFact:"Cognate with English 'haven'. Rotterdam's port is Europe's largest."},

    {type:"teach", trg:"het buitenland", src:"abroad / foreign countries", pos:"noun", gender:"n",
     note:"Neuter noun (het). Compound: buiten (outside) + land (country).",
     example:"A: Ga je naar het buitenland?\nB: Ja, naar Spanje!",
     exampleSrc:"A: Are you going abroad?\nB: Yes, to Spain!",
     funFact:"Literally 'outside-land'. Dutch uses it as a singular noun, not plural."},

    {type:"teach", trg:"de boot", src:"the boat", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: boten.",
     example:"A: We gaan met de boot naar het eiland.\nB: Leuk! Hoe lang duurt dat?",
     exampleSrc:"A: We're going by boat to the island.\nB: Fun! How long does that take?",
     funFact:"Cognate with English 'boat'. The Dutch and boats: an inseparable pair."},

    {type:"teach", trg:"de grond", src:"the ground / soil", pos:"noun", gender:"c",
     note:"Common gender (de). The floor or earth beneath you.",
     example:"A: Zet het op de grond.\nB: Op de grond? Niet op de tafel?",
     exampleSrc:"A: Put it on the ground.\nB: On the ground? Not on the table?",
     funFact:"Cognate with English 'ground'. Much of Dutch ground is reclaimed from water!"},

    {type:"fb",
     s:"We gaan met de {1} naar het eiland.",
     a:["boot"],
     opts:["boot","bus","auto","fiets"],
     hint:"How do you cross water to reach an island? Which vehicle floats?",
     sSrc:"We are going by {1} to the island."},

    {type:"teach", trg:"het ijs", src:"the ice / ice cream", pos:"noun", gender:"n",
     note:"Neuter noun (het). Both ice and ice cream.",
     example:"A: Wil je een ijsje?\nB: Ja, chocolade graag!",
     exampleSrc:"A: Do you want an ice cream?\nB: Yes, chocolate please!",
     funFact:"When it freezes, the Dutch ice skate on canals. 'Ijs' is life in winter."},

    {type:"teach", trg:"de krant", src:"the newspaper", pos:"noun", gender:"c",
     note:"Common gender (de). Still widely read in the Netherlands.",
     example:"A: Lees je de krant?\nB: Ja, elke ochtend online.",
     exampleSrc:"A: Do you read the newspaper?\nB: Yes, every morning online.",
     funFact:"The Dutch are avid newspaper readers. De Telegraaf is the biggest daily."},

    {type:"teach", trg:"de foto", src:"the photo", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: fotos.",
     example:"A: Wat een mooie foto!\nB: Dank je, die is van onze vakantie.",
     exampleSrc:"A: What a beautiful photo!\nB: Thanks, that's from our vacation.",
     funFact:"International word. Short for 'fotografie' (photography)."},

    {type:"teach", trg:"het internet", src:"the internet", pos:"noun", gender:"n",
     note:"Neuter noun (het). International word.",
     example:"A: Heb je internet thuis?\nB: Ja, glasvezel!",
     exampleSrc:"A: Do you have internet at home?\nB: Yes, fiber optic!",
     funFact:"The Netherlands has one of the fastest internet speeds in Europe."},

    {type:"mc",
     q:"De haven van ___ is de grootste van Europa.",
     opts:["Utrecht","Rotterdam","Amsterdam","Den Haag"],
     ans:"Rotterdam",
     hint:"Which Dutch city is famous for having Europe's largest port?"},

    {type:"teach", trg:"het idee", src:"the idea", pos:"noun", gender:"n",
     note:"Neuter noun (het). Plural: ideeen.",
     example:"A: Ik heb een goed idee!\nB: Vertel! Wat is het?",
     exampleSrc:"A: I have a good idea!\nB: Tell me! What is it?",
     funFact:"From Greek via French. Same word in many languages."},

    {type:"teach", trg:"de informatie", src:"the information", pos:"noun", gender:"c",
     note:"Common gender (de). Uncountable, like in English.",
     example:"A: Heb je meer informatie?\nB: Ja, kijk op de website.",
     exampleSrc:"A: Do you have more information?\nB: Yes, look at the website.",
     funFact:"From Latin 'informatio'. International word used everywhere."},

    {type:"teach", trg:"interessant", src:"interesting", pos:"adj", gender:null,
     note:"From French. Very common adjective.",
     example:"A: Die film is heel interessant.\nB: Ja, ik wil hem ook zien!",
     exampleSrc:"A: That movie is very interesting.\nB: Yes, I want to see it too!",
     funFact:"From Latin 'interesse'. Same spelling as German, close to English."},

    {type:"teach", trg:"de film", src:"the film / movie", pos:"noun", gender:"c",
     note:"Common gender (de). Plural: films.",
     example:"A: Zullen we een film kijken?\nB: Ja, leuk!",
     exampleSrc:"A: Shall we watch a movie?\nB: Yes, fun!",
     funFact:"International word. The Dutch love going to the bioscoop (cinema)."},

    {type:"match", pairs:[
      {trg:"eiland", src:"island"},
      {trg:"buitenland", src:"abroad"},
      {trg:"haven", src:"harbor"},
      {trg:"heerlijk", src:"wonderful"}
    ]}
  ]
};
export default LESSON_8;
