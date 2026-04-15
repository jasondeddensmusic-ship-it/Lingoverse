// B2 Gap Batch A — Lesson 12: Emoties & Innerlijk Leven
// Theme: Emotions, mental states, expressions

const LESSON_12 = {id:"nlv2_b2gA_l12", title:"Emoties & Innerlijk Leven", icon:"\u{1F9E0}", xp:40, board:true, steps:[
  {type:"intro", title:"Emoties & Innerlijk Leven",
   desc:"Learn vocabulary about emotions, mental states, and inner life. These words help you express feelings and discuss psychology in Dutch.",
   goals:["Learn vocabulary for emotions and mental states","Express complex feelings in Dutch","Understand compound nouns about inner life"]},

  {type:"teach", trg:"de gemoedstoestand", src:"state of mind, emotional state", pos:"noun", gender:"c",
   note:"Compound: gemoed (mind/spirit) + toestand (state/condition).\nUsed in psychology and everyday conversation.",
   example:"A: Hoe is je gemoedstoestand vandaag?\nB: Eerlijk gezegd een beetje onrustig.\nA: Komt dat ergens door?\nB: Ik maak me zorgen over het werk.",
   exampleSrc:"A: How is your state of mind today?\nB: Honestly, a bit restless.\nA: Is that caused by something?\nB: I'm worried about work.",
   funFact:"The Dutch word 'gemoed' has no perfect English equivalent. It means something between 'mind', 'heart', and 'spirit'. The gemoedstoestand covers your whole emotional-mental condition."},

  {type:"teach", trg:"de geluksbeleving", src:"experience of happiness, sense of well-being", pos:"noun", gender:"c",
   note:"Compound: geluk (happiness) + beleving (experience).\nUsed in psychology and well-being research.",
   example:"A: De geluksbeleving van Nederlanders scoort hoog internationaal.\nB: Dat verbaast me niet. Het leven is hier vrij comfortabel.\nA: Maar geluksbeleving hangt ook af van verwachtingen.\nB: Dat is een interessant punt.",
   exampleSrc:"A: The happiness experience of Dutch people scores high internationally.\nB: That doesn't surprise me. Life is quite comfortable here.\nA: But the experience of happiness also depends on expectations.\nB: That's an interesting point.",
   funFact:"The Netherlands consistently ranks in the top 10 of the World Happiness Report. Dutch geluksbeleving is linked to social trust, work-life balance, and the famous 'gezelligheid'."},

  {type:"teach", trg:"de geloofsbeleving", src:"religious experience, faith experience", pos:"noun", gender:"c",
   note:"Compound: geloof (faith/belief) + beleving (experience).\nHow someone personally experiences their religion.",
   example:"A: Geloofsbeleving is heel persoonlijk.\nB: Dat klopt. Iedereen beleeft het op zijn eigen manier.\nA: In Nederland is de geloofsbeleving erg veranderd.\nB: Ja, minder mensen gaan naar de kerk, maar spiritualiteit groeit.",
   exampleSrc:"A: Religious experience is very personal.\nB: That's right. Everyone experiences it in their own way.\nA: In the Netherlands, faith experience has changed a lot.\nB: Yes, fewer people go to church, but spirituality is growing.",
   funFact:"The Netherlands is one of the most secularized countries in Europe. Over 50% of Dutch people describe themselves as non-religious. Yet personal geloofsbeleving in non-traditional forms is growing."},

  {type:"teach", trg:"het gespreksonderwerp", src:"topic of conversation", pos:"noun", gender:"n",
   note:"Compound: gesprek (conversation) + onderwerp (subject).\nhet-word because onderwerp is het.",
   example:"A: Wat is een goed gespreksonderwerp op een feestje?\nB: Het weer is altijd veilig in Nederland!\nA: Maar ook saai. Politiek is een riskant gespreksonderwerp.\nB: Voetbal werkt meestal wel.",
   exampleSrc:"A: What is a good topic of conversation at a party?\nB: The weather is always safe in the Netherlands!\nA: But also boring. Politics is a risky topic of conversation.\nB: Football usually works.",
   funFact:"Dutch directness means that almost anything can be a gespreksonderwerp. Unlike many cultures, Dutch people will openly discuss salaries, politics, and personal matters at social gatherings."},

  {type:"teach", trg:"het gezegde", src:"saying, proverb", pos:"noun", gender:"n",
   note:"From 'zeggen' (to say). Past participle used as noun.\nA common saying or fixed expression.",
   example:"A: Ken je het gezegde 'Wie het laatst lacht, lacht het best'?\nB: Ja, dat is een bekend Nederlands gezegde.\nA: Gezegdes bevatten vaak wijsheid.\nB: Maar soms zijn ze ook achterhaald.",
   exampleSrc:"A: Do you know the saying 'He who laughs last, laughs best'?\nB: Yes, that's a well-known Dutch saying.\nA: Sayings often contain wisdom.\nB: But sometimes they're also outdated.",
   funFact:"Dutch has hundreds of gezegdes. Many are shared with English but some are uniquely Dutch, like 'Doe maar normaal, dan doe je al gek genoeg' (Just act normal, that's crazy enough already)."},

  {type:"teach", trg:"de geldlust", src:"greed for money, lust for wealth", pos:"noun", gender:"c",
   note:"Compound: geld (money) + lust (desire, craving).\nNegative connotation. Used critically.",
   example:"A: De geldlust van sommige bankiers is schokkend.\nB: Dat was duidelijk tijdens de financiele crisis.\nA: Geldlust leidt vaak tot onethisch gedrag.\nB: De samenleving moet daar grenzen aan stellen.",
   exampleSrc:"A: The greed for money of some bankers is shocking.\nB: That was clear during the financial crisis.\nA: Greed for money often leads to unethical behaviour.\nB: Society must set limits on that.",
   funFact:"The word 'lust' in Dutch is broader than in English. It means 'desire' or 'appetite' in general: levenslust (zest for life), reislust (wanderlust), leeslust (love of reading). Geldlust is the negative variant."},

  {type:"tip", title:"-beleving Compounds",
   text:"The suffix -beleving (experience, way of experiencing) creates expressive nouns:\n\n- geluksbeleving (happiness experience)\n- geloofsbeleving (faith experience)\n- klantbeleving (customer experience)\n- merkbeleving (brand experience)\n\n-beleving always makes a de-word.\nFrom 'beleven' (to experience). The linking -s- connects the first part.\n\nRelated: -toestand (state/condition):\n- gemoedstoestand (emotional state)\n- gezondheidstoestand (health condition)",
   deepDive:{title:"Dutch Emotional Vocabulary",
    text:"Dutch has rich vocabulary for emotional states:\n\n- gezellig: cosy, sociable (untranslatable, iconic Dutch)\n- benauwd: anxious, stuffy (physically and emotionally)\n- uitgelaten: exuberant, elated\n- weemoedig: melancholy, wistful\n\nThe compound tradition means Dutch can precisely name emotional states that English describes with phrases. A gemoedstoestand covers your whole inner weather in one word."}},

  {type:"mc", q:"Welk woord betekent 'state of mind'?",
   opts:["de gemoedstoestand","de geluksbeleving","het gespreksonderwerp","het gezegde"],
   ans:"de gemoedstoestand",
   hint:"Gemoed (mind/spirit) + toestand (state). Your overall emotional condition."},

  {type:"fb", s:"De {1} van Nederlanders scoort hoog internationaal.",
   a:["geluksbeleving"], opts:["geluksbeleving","geloofsbeleving","gemoedstoestand","geldlust"],
   hint:"How people experience happiness. Geluk (happiness) + beleving (experience).",
   sSrc:"The happiness experience of Dutch people scores high internationally."},

  {type:"mc", q:"Wat is een goed gespreksonderwerp op een feestje?",
   opts:["a topic of conversation","a type of game","a drink recipe","a music playlist"],
   ans:"a topic of conversation",
   hint:"Gesprek (conversation) + onderwerp (subject). What people talk about."},

  {type:"fb", s:"Ken je het {1} 'Wie het laatst lacht, lacht het best'?",
   a:["gezegde"], opts:["gezegde","gespreksonderwerp","gemoedstoestand","geluksbeleving"],
   hint:"A traditional saying or proverb. From 'zeggen' (to say).",
   sSrc:"Do you know the saying 'He who laughs last, laughs best'?"},

  {type:"match", pairs:[
    {trg:"gemoedstoestand", src:"state of mind"},
    {trg:"geluksbeleving", src:"experience of happiness"},
    {trg:"geloofsbeleving", src:"religious experience"},
    {trg:"gespreksonderwerp", src:"topic of conversation"},
    {trg:"gezegde", src:"saying, proverb"},
    {trg:"geldlust", src:"greed for money"}
  ]},

  {type:"mc", q:"De geldlust van sommige bankiers is schokkend. Wat is 'geldlust'?",
   opts:["greed for money","a bank fee","a salary increase","financial planning"],
   ans:"greed for money",
   hint:"Geld (money) + lust (desire/craving). An excessive appetite for wealth."},

  {type:"fb", s:"In Nederland is de {1} erg veranderd: minder kerk, meer spiritualiteit.",
   a:["geloofsbeleving"], opts:["geloofsbeleving","geluksbeleving","gemoedstoestand","geldlust"],
   hint:"How someone personally experiences their faith or religion.",
   sSrc:"In the Netherlands, religious experience has changed a lot: less church, more spirituality."},

  {type:"drag_fill", s:"Zijn {1} was slecht omdat {2} een gevoelig {3} was geworden op het werk.",
   blanks:{"1":"gemoedstoestand","2":"geld","3":"gespreksonderwerp"},
   pool:["gemoedstoestand","geld","gespreksonderwerp","gezegde","geluksbeleving"],
   hint:"His emotional state was bad because money had become a sensitive conversation topic at work."}
]};
export default LESSON_12;
