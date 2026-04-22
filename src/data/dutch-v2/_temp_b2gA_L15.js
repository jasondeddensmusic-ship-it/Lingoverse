// B2 Gap Batch A. Lesson 15: Intentie & Actie
// Theme: Intentions, plans, actions

const LESSON_15 = {id:"nlv2_b2gA_l15", title:"Intentie & Actie", icon:"\u{1F3AF}", xp:40, board:true, steps:[
  {type:"intro", title:"Intentie & Actie",
   desc:"Learn vocabulary about intentions, actions, and commitment. These abstract nouns are essential for formal discussions, contracts, and policy language in Dutch.",
   goals:["Learn abstract nouns about intention and effort","Discuss plans and commitments","Understand formal Dutch for policy and business"]},

  {type:"teach", trg:"de intentie", src:"intention", pos:"noun", gender:"c",
   note:"From Latin 'intentio'. The purpose behind an action.\nUsed in formal and everyday Dutch.",
   example:"A: Wat is de intentie van dit voorstel?\nB: De intentie is om de buurt veiliger te maken.\nA: Dat klinkt goed, maar de intentie alleen is niet genoeg.\nB: Nee, er moeten ook concrete stappen volgen.",
   exampleSrc:"A: What is the intention of this proposal?\nB: The intention is to make the neighbourhood safer.\nA: That sounds good, but the intention alone is not enough.\nB: No, concrete steps must follow as well.",
   funFact:"In Dutch law, 'intentie' matters: the distinction between 'opzet' (intent) and 'schuld' (negligence) determines criminal liability. The letter of intent is called an 'intentieverklaring'."},

  {type:"teach", trg:"de intentieverklaring", src:"letter of intent, declaration of intent", pos:"noun", gender:"c",
   note:"Compound: intentie + verklaring (declaration).\nA formal document stating future plans.",
   example:"A: We hebben een intentieverklaring getekend.\nB: Is dat al een definitief contract?\nA: Nee, het is een verklaring dat we de intentie hebben om samen te werken.\nB: Dus het is een eerste stap.",
   exampleSrc:"A: We have signed a letter of intent.\nB: Is that already a final contract?\nA: No, it's a declaration that we intend to collaborate.\nB: So it's a first step.",
   funFact:"An intentieverklaring is common in Dutch business. It signals serious interest without full commitment. In English business, this is often abbreviated as LOI (Letter of Intent)."},

  {type:"teach", trg:"de inzet", src:"effort, commitment, stake", pos:"noun", gender:"c",
   note:"From 'inzetten' (to deploy, to commit).\nMultiple meanings: effort, what you risk, or deployment.",
   example:"A: De inzet van de vrijwilligers was geweldig.\nB: Zonder hun inzet was het festival niet mogelijk geweest.\nA: Hoe kunnen we hun inzet belonen?\nB: Een bedankfeestje zou een mooi gebaar zijn.",
   exampleSrc:"A: The effort of the volunteers was amazing.\nB: Without their commitment, the festival wouldn't have been possible.\nA: How can we reward their effort?\nB: A thank-you party would be a nice gesture.",
   funFact:"In Dutch card games, 'inzet' means 'stake' (the money you bet). In sports, it means 'effort' or 'dedication'. In military language, it means 'deployment'. Context always clarifies."},

  {type:"teach", trg:"de inslag", src:"impact, approach, character", pos:"noun", gender:"c",
   note:"From 'inslaan' (to strike/hit). The character or nature of something.\nAlso: literal impact (meteorite).",
   example:"A: Het festival heeft een internationale inslag.\nB: Er komen artiesten uit de hele wereld.\nA: Die multiculturele inslag maakt het bijzonder.\nB: Dat trekt een divers publiek.",
   exampleSrc:"A: The festival has an international character.\nB: Artists from all over the world come.\nA: That multicultural approach makes it special.\nB: That attracts a diverse audience.",
   funFact:"The word 'inslag' has a fascinating range of meanings: from the literal impact of a bomb to the figurative character of an event. Even in textiles, 'inslag' means the weft (horizontal threads in weaving)."},

  {type:"teach", trg:"het fragment", src:"fragment, excerpt", pos:"noun", gender:"n",
   note:"From Latin 'fragmentum'. A piece or excerpt of a larger whole.\nhet-word. Common in media and literature.",
   example:"A: Ik heb een fragment van het interview gezien.\nB: Wat vond je ervan?\nA: Het was maar een kort fragment, dus ik kan het niet goed beoordelen.\nB: Het hele interview duurt een uur.",
   exampleSrc:"A: I saw an excerpt of the interview.\nB: What did you think of it?\nA: It was just a short fragment, so I can't judge it well.\nB: The full interview lasts an hour.",
   funFact:"In Dutch media, 'fragment' is the standard word for a clip or excerpt. TV shows use 'terugkijkfragment' (replay clip) and news sites embed 'videofragmenten' in articles."},

  {type:"teach", trg:"het item", src:"item, segment (in news/shows)", pos:"noun", gender:"n",
   note:"From English. A specific segment in a programme or list.\nhet-word. Very common in Dutch media.",
   example:"A: Het volgende item gaat over de woningmarkt.\nB: Dat is een belangrijk onderwerp.\nA: Er zijn drie items in het journaal vanavond.\nB: Het laatste item is een luchtig verhaal.",
   exampleSrc:"A: The next segment is about the housing market.\nB: That's an important topic.\nA: There are three segments in tonight's news.\nB: The last item is a light story.",
   funFact:"Dutch people use 'item' for news segments (journaal-item), agenda topics (agendapunt/item), and shopping list entries. It's one of many English words fully integrated into Dutch."},

  {type:"tip", title:"Abstract Action Nouns",
   text:"Dutch has many abstract nouns for actions and commitments:\n\n- intentie: what you plan to do\n- intentieverklaring: formal statement of intent\n- inzet: effort you put in (or stake you risk)\n- inslag: character, approach, nature\n\nThe in- prefix often signals 'into' or 'beginning':\ninzet (putting in), inslag (striking in), inbraak (breaking in)\n\nThese words appear frequently in formal Dutch: business, policy, and news.",
   deepDive:{title:"From Intention to Action",
    text:"Dutch distinguishes clearly between levels of commitment:\n\n1. Intentie: what you want to do (weakest)\n2. Intentieverklaring: formal written intent\n3. Overeenkomst: agreement (binding)\n4. Contract: legally binding contract (strongest)\n\nIn Dutch business culture, an intentieverklaring is taken seriously even though it is not legally binding. Breaking one damages your reputation, which in the small Dutch business world can be costly."}},

  {type:"mc", q:"Welk woord betekent 'letter of intent'?",
   opts:["de intentieverklaring","de intentie","de inzet","de inslag"],
   ans:"de intentieverklaring",
   hint:"Intentie + verklaring (declaration). A formal document stating future plans."},

  {type:"fb", s:"De {1} van de vrijwilligers was geweldig.",
   a:["inzet"], opts:["inzet","intentie","inslag","fragment"],
   hint:"The effort and commitment people put into something. From 'inzetten'.",
   sSrc:"The effort of the volunteers was amazing."},

  {type:"mc", q:"Het festival heeft een internationale inslag. Wat is 'inslag'?",
   opts:["ticket price","character, approach","impact crater","entrance fee"],
   ans:"character, approach",
   hint:"The nature or c... of something. What kind of 'flavour' it has."},

  {type:"fb", s:"Ik heb een {1} van het interview gezien op televisie.",
   a:["fragment"], opts:["fragment","item","intentie","inzet"],
   hint:"A short piece or excerpt from a longer recording.",
   sSrc:"I saw an excerpt of the interview on television."},

  {type:"match", pairs:[
    {trg:"intentie", src:"intention"},
    {trg:"intentieverklaring", src:"letter of intent"},
    {trg:"inzet", src:"effort, commitment"},
    {trg:"inslag", src:"character, approach"},
    {trg:"fragment", src:"fragment, excerpt"},
    {trg:"item", src:"item, segment"}
  ]},

  {type:"mc", q:"Het volgende item gaat over de woningmarkt. Wat is een 'item'?",
   opts:["a news headline","a commercial break","a specific segment in a programme","a shopping product"],
   ans:"a specific segment in a programme",
   hint:"From English. A distinct part of a broadcast, meeting agenda, or list."},

  {type:"fb", s:"De {1} van dit voorstel is om de buurt veiliger te maken.",
   a:["intentie"], opts:["intentie","intentieverklaring","inzet","inslag"],
   hint:"The purpose or aim behind a plan. What someone intends to achieve.",
   sSrc:"The intention of this proposal is to make the neighbourhood safer."},

  {type:"drag_fill", s:"Na de {1} volgde een periode van hoge {2}, maar het {3} op het nieuws toonde weinig resultaat.",
   blanks:{"1":"intentieverklaring","2":"inzet","3":"item"},
   pool:["intentieverklaring","inzet","item","fragment","inslag"],
   hint:"After the formal declaration, much effort was spent, but the news segment showed little progress."}
]};
export default LESSON_15;
