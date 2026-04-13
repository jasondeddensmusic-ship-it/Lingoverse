// B2 Lesson 17: Discourse & Reasoning
// Words: 그녀, 그놈, 그대, 그때그때, 그래야, 그러다, 그런대로, 그렇지, 그루, 그리로,
//        그리하여, 그사이, 그야말로, 그이, 그저께, 그전, 그제서야, 그제야, 그해, 극히

const LESSON_17 = {
  id:"kov2_b2_l17", title:"담화와 추론", icon:"\uD83D\uDCAC", xp:15, board:true,
  steps:[
    {type:"intro", title:"Discourse & Reasoning",
     desc:"Learn pronouns, discourse markers, and reasoning expressions that appear in TOPIK II reading passages. These words connect ideas and refer back to previous context.",
     goals:["Learn 20 discourse and pronoun vocabulary words","Understand Korean's rich system of 그- (that) compounds","Use formal discourse connectors in writing"]},

    {type:"teach", trg:"\uADF8\uB140", src:"she; her (literary)", pos:"pron", gender:null,
     note:"Pure Korean compound: that (그) + woman (녀).\nLiterary/written pronoun for a female.",
     example:"A: \uADF8\uB140\uB294 \uC720\uBA85\uD55C \uC791\uAC00\uC608\uC694.\nB: \uADF8\uB140\uC758 \uC791\uD488\uC744 \uC77D\uC5B4 \uBD24\uC5B4\uC694?\nA: \uADF8\uB140\uC758 \uC18C\uC124\uC774 \uC778\uC0C1\uC801\uC774\uC5C8\uC5B4\uC694.\nB: \uADF8\uB140\uB294 \uC0C1\uC744 \uB9CE\uC774 \uBC1B\uC558\uC5B4\uC694.",
     exampleSrc:"A: She is a famous writer.\nB: Have you read her works?\nA: Her novel was impressive.\nB: She has won many awards.",
     funFact:"그녀 was coined in the early 20th century as a translation for 'she.' Korean traditionally did not have gendered pronouns. It remains mostly literary."},

    {type:"teach", trg:"\uADF8\uB188", src:"that guy; that fellow (informal/derogatory)", pos:"pron", gender:null,
     note:"Pure Korean compound: that (그) + fellow/guy (놈).\nInformal, can be affectionate or derogatory.",
     example:"A: \uADF8\uB188\uC774 \uB610 \uB2A6\uC5C8\uC5B4\uC694.\nB: \uD56D\uC0C1 \uB2A6\uB294 \uC0AC\uB78C\uC774\uC8E0.\nA: \uADF8\uB188\uC774 \uACB0\uAD6D \uC131\uACF5\uD588\uC5B4\uC694.\nB: \uB180\uB77C\uC6B4 \uC77C\uC774\uB124\uC694!",
     exampleSrc:"A: That guy was late again.\nB: He always shows up late.\nA: That fellow ended up succeeding.\nB: That is surprising!",
     funFact:"놈 ranges from mildly vulgar to affectionate depending on tone and context. Between close male friends, 그놈 can be warm."},

    {type:"teach", trg:"\uADF8\uB300", src:"you (literary/poetic)", pos:"pron", gender:null,
     note:"Pure Korean pronoun. Elevated, literary 'you.'\nCommon in poetry and song lyrics.",
     example:"A: \uADF8\uB300\uB97C \uC0AC\uB791\uD569\uB2C8\uB2E4.\nB: \uC544\uB984\uB2E4\uC6B4 \uD45C\uD604\uC774\uB124\uC694.\nA: \uADF8\uB300\uAC00 \uBCF4\uACE0 \uC2F6\uC5B4\uC694.\nB: \uC2DC\uC5D0\uC11C \uB9CE\uC774 \uC0AC\uC6A9\uD558\uC8E0.",
     exampleSrc:"A: I love you (literary).\nB: What a beautiful expression.\nA: I miss you (literary).\nB: It is used a lot in poetry.",
     funFact:"그대 is Korea's most romantic pronoun. Countless love songs use it. It sits between formal and intimate, creating a poetic distance."},

    {type:"teach", trg:"\uADF8\uB54C\uADF8\uB54C", src:"each time; as the occasion arises", pos:"adv", gender:null,
     note:"Pure Korean reduplication: that time + that time.\nDealing with things as they come.",
     example:"A: \uACC4\uD68D\uC744 \uC138\uC6B0\uC138\uC694.\nB: \uADF8\uB54C\uADF8\uB54C \uACB0\uC815\uD560\uAC8C\uC694.\nA: \uC0C1\uD669\uC5D0 \uB530\uB77C \uADF8\uB54C\uADF8\uB54C \uB300\uCC98\uD574\uC694.\nB: \uC720\uC5F0\uD558\uAC8C \uB300\uCC98\uD558\uB294 \uAC83\uC774 \uC88B\uC8E0.",
     exampleSrc:"A: Make a plan.\nB: I will decide as the occasion arises.\nA: I deal with things as they come.\nB: Being flexible is good.",
     funFact:"그때그때 reflects a Korean pragmatic approach: rather than over-planning, handling each situation as it unfolds."},

    {type:"teach", trg:"\uADF8\uB7EC\uB2E4", src:"to do so; to be that way", pos:"verb", gender:null,
     note:"Pure Korean verb. Refers back to a previous action or state.",
     example:"A: \uBE44\uAC00 \uC62C \uAC83 \uAC19\uC544\uC694.\nB: \uADF8\uB7EC\uBA74 \uC6B0\uC0B0\uC744 \uAC00\uC838\uAC00\uC138\uC694.\nA: \uC790\uAFB8 \uADF8\uB7EC\uB2C8\uAE4C \uBB38\uC81C\uC608\uC694.\nB: \uC55E\uC73C\uB85C \uC870\uC2EC\uD560\uAC8C\uC694.",
     exampleSrc:"A: It looks like it will rain.\nB: If so, bring an umbrella.\nA: Since you keep doing that, it is a problem.\nB: I will be careful from now on.",
     funFact:"그러다 is a pro-verb (like English 'do so'). It replaces previously mentioned actions: 계속 그러다 (keep doing that)."},

    {type:"mc",
     q:"\uC2DC\uC640 \uB178\uB798\uC5D0\uC11C \uC0AC\uB791\uD558\uB294 \uC0AC\uB78C\uC744 \uBD80\uB97C \uB54C \uC4F0\uB294 \uB9D0\uC740?",
     opts:["\uADF8\uB300","\uADF8\uB188","\uADF8\uB140","\uADF8\uC774"],
     ans:"\uADF8\uB300",
     hint:"This literary pronoun for 'you' appears in countless Korean love songs and poems."},

    {type:"teach", trg:"\uADF8\uB7F0\uB300\uB85C", src:"to some extent; passably; somehow", pos:"adv", gender:null,
     note:"Pure Korean compound: like that (그런) + as is (대로).\nAcceptably, though not perfectly.",
     example:"A: \uC0DD\uD65C\uC774 \uC5B4\uB54C\uC694?\nB: \uADF8\uB7F0\uB300\uB85C \uAD1C\uCC2E\uC544\uC694.\nA: \uC2DC\uD5D8 \uACB0\uACFC\uAC00 \uC5B4\uB590\uC5B4\uC694?\nB: \uADF8\uB7F0\uB300\uB85C \uB9CC\uC871\uD574\uC694.",
     exampleSrc:"A: How is life?\nB: It is passably okay.\nA: How were the exam results?\nB: I am somewhat satisfied.",
     funFact:"그런대로 conveys modest satisfaction. It is a very Korean response style: not enthusiastic, not negative, just 'acceptably fine.'"},

    {type:"teach", trg:"\uADF8\uB807\uC9C0", src:"that is right; indeed (agreement)", pos:"intj", gender:null,
     note:"Pure Korean interjection from 그렇다 (to be so).\nUsed to agree with someone.",
     example:"A: \uC624\uB298 \uB0A0\uC528\uAC00 \uC88B\uB124\uC694.\nB: \uADF8\uB807\uC9C0, \uC0B0\uCC45\uD558\uAE30 \uC88B\uACA0\uC5B4\uC694.\nA: \uAC74\uAC15\uC774 \uC81C\uC77C \uC911\uC694\uD574\uC694.\nB: \uADF8\uB807\uC9C0, \uAC74\uAC15\uC774 \uCD5C\uACE0\uC8E0.",
     exampleSrc:"A: The weather is nice today.\nB: Indeed, it would be nice to take a walk.\nA: Health is the most important thing.\nB: That is right, health comes first.",
     funFact:"그렇지 is conversational and warm. It shows active listening and agreement. Very common in everyday Korean."},

    {type:"teach", trg:"\uADF8\uB9AC\uB85C", src:"to that place; in that direction", pos:"adv", gender:null,
     note:"Pure Korean compound: that (그리) + to (로).\nDirectional adverb: toward that place.",
     example:"A: \uADF8\uB9AC\uB85C \uAC00\uC138\uC694.\nB: \uC5B4\uB290 \uCABD\uC73C\uB85C \uAC00\uC694?\nA: \uADF8\uB9AC\uB85C \uAC00\uBA74 \uACF5\uC6D0\uC774 \uB098\uC640\uC694.\nB: \uAC10\uC0AC\uD569\uB2C8\uB2E4, \uADF8\uB9AC\uB85C \uAC00\uBCFC\uAC8C\uC694.",
     exampleSrc:"A: Go in that direction.\nB: Which way do I go?\nA: If you go that way, you will find a park.\nB: Thank you, I will head that way.",
     funFact:"이리/그리/저리 form a spatial triad: 이리 (this way, near speaker), 그리 (that way, near listener), 저리 (that way, far from both)."},

    {type:"teach", trg:"\uADF8\uB9AC\uD558\uC5EC", src:"and so; thus; therefore (formal)", pos:"adv", gender:null,
     note:"Pure Korean formal connector. Very literary/written.",
     example:"A: \uBE44\uAC00 \uB9CE\uC774 \uC654\uC5B4\uC694. \uADF8\uB9AC\uD558\uC5EC \uD64D\uC218\uAC00 \uBC1C\uC0DD\uD588\uC5B4\uC694.\nB: \uD53C\uD574\uAC00 \uCE30 \uAC83 \uAC19\uB124\uC694.\nA: \uADF8\uB9AC\uD558\uC5EC \uB300\uCC45\uC744 \uC138\uC6E0\uC5B4\uC694.\nB: \uC2E0\uC18D\uD55C \uB300\uCC98\uC600\uB124\uC694.",
     exampleSrc:"A: It rained heavily. And so, a flood occurred.\nB: The damage must be significant.\nA: Therefore, countermeasures were established.\nB: That was a swift response.",
     funFact:"그리하여 is highly formal and literary. In everyday speech, 그래서 (so/therefore) is the common equivalent."},

    {type:"teach", trg:"\uADF8\uC0AC\uC774", src:"in the meantime; during that time", pos:"noun", gender:null,
     note:"Pure Korean compound: that (그) + between (사이).\nThe interval between two points in time.",
     example:"A: 1\uB144 \uB9CC\uC5D0 \uB9CC\uB0AC\uC5B4\uC694.\nB: \uADF8\uC0AC\uC774\uC5D0 \uB9CE\uC774 \uBCC0\uD588\uC5B4\uC694.\nA: \uADF8\uC0AC\uC774 \uAC74\uAC15\uC740 \uC5B4\uB556\uC5B4\uC694?\nB: \uADF8\uC0AC\uC774 \uC798 \uC9C0\uB0C8\uC5B4\uC694.",
     exampleSrc:"A: We met after one year.\nB: A lot changed in the meantime.\nA: How was your health during that time?\nB: I have been well during that time.",
     funFact:"그사이 is often used to express surprise at how much has changed: 그사이에 이렇게! (So much happened in the meantime!)"},

    {type:"teach", trg:"\uADF8\uC57C\uB9D0\uB85C", src:"truly; really; indeed (emphatic)", pos:"adv", gender:null,
     note:"Pure Korean emphatic: that (그) + indeed (야말로).\nStrong emphasis on truth or appropriateness.",
     example:"A: \uC774\uAC83\uC774 \uADF8\uC57C\uB9D0\uB85C \uC9C4\uC9DC \uD55C\uAD6D \uC74C\uC2DD\uC774\uC5D0\uC694.\nB: \uC815\uB9D0 \uB9DB\uC788\uC5B4\uC694!\nA: \uADF8\uC57C\uB9D0\uB85C \uB300\uB2E8\uD55C \uC0AC\uB78C\uC774\uC5D0\uC694.\nB: \uC874\uACBD\uD569\uB2C8\uB2E4.",
     exampleSrc:"A: This is truly authentic Korean food.\nB: It is really delicious!\nA: That person is truly remarkable.\nB: I have great respect.",
     funFact:"그야말로 adds strong emotional emphasis. It implies 'this is the real deal, no question about it.' Common in speeches and reviews."},

    {type:"teach", trg:"\uADF8\uC774", src:"that person (literary, neutral gender)", pos:"pron", gender:null,
     note:"Pure Korean compound: that (그) + person (이).\nGender-neutral literary pronoun.",
     example:"A: \uADF8\uC774\uB294 \uB9E4\uC77C \uC544\uCE68\uC5D0 \uC0B0\uCC45\uD574\uC694.\nB: \uADF8\uC774\uC758 \uC2B5\uAD00\uC774\uB124\uC694.\nA: \uADF8\uC774\uC640 \uC774\uC57C\uAE30\uB97C \uB098\uB204\uACE0 \uC2F6\uC5B4\uC694.\nB: \uC88B\uC740 \uBD84\uC774\uC8E0.",
     exampleSrc:"A: That person takes a walk every morning.\nB: That is their habit.\nA: I want to talk with them.\nB: They are a good person.",
     funFact:"그이 is rare in modern speech but appears in literature. It is gender-neutral, unlike 그녀 (female) or 그놈 (male/informal)."},

    {type:"fb",
     s:"{1} \uB9CE\uC740 \uAC83\uC774 \uBCC0\uD588\uC5B4\uC694.",
     a:["\uADF8\uC0AC\uC774\uC5D0"],
     opts:["\uADF8\uC0AC\uC774\uC5D0","\uADF8\uC800","\uADF8\uB7F0\uB300\uB85C","\uADF8\uC57C\uB9D0\uB85C"],
     hint:"This word means 'during that time' or 'in the meantime' between two events.",
     sSrc:"{1}, a lot has changed."},

    {type:"teach", trg:"\uADF8\uC800\uAED8", src:"the day before yesterday", pos:"noun", gender:null,
     note:"Pure Korean word. Two days ago.",
     example:"A: \uADF8\uC800\uAED8 \uBB54 \uD588\uC5B4\uC694?\nB: \uADF8\uC800\uAED8 \uCE5C\uAD6C\uB97C \uB9CC\uB0AC\uC5B4\uC694.\nA: \uADF8\uC800\uAED8\uBD80\uD130 \uBE44\uAC00 \uC654\uC5B4\uC694.\nB: \uC624\uB298\uAE4C\uC9C0 \uACC4\uC18D \uBE44\uAC00 \uC640\uC694.",
     exampleSrc:"A: What did you do the day before yesterday?\nB: I met a friend the day before yesterday.\nA: It has been raining since the day before yesterday.\nB: The rain has continued until today.",
     funFact:"그저께 is the standard form. 그끄저께 means 'three days ago.' Korean has specific words for each day relative to today."},

    {type:"teach", trg:"\uADF8\uC804", src:"before that; previously; the time before", pos:"noun", gender:null,
     note:"Pure Korean compound: that (그) + before (전).\nReferring to an earlier time.",
     example:"A: \uADF8\uC804\uC5D0\uB294 \uC5B4\uB514\uC5D0\uC11C \uC77C\uD588\uC5B4\uC694?\nB: \uADF8\uC804\uC5D0\uB294 \uC11C\uC6B8\uC5D0\uC11C \uC77C\uD588\uC5B4\uC694.\nA: \uADF8\uC804\uC758 \uACBD\uD5D8\uC774 \uB3C4\uC6C0\uC774 \uB410\uC5B4\uC694?\nB: \uADF8\uC804 \uACBD\uD5D8\uC774 \uD070 \uB3C4\uC6C0\uC774 \uB418\uC5C8\uC5B4\uC694.",
     exampleSrc:"A: Where did you work before that?\nB: Before that, I worked in Seoul.\nA: Did the previous experience help?\nB: The previous experience was a great help.",
     funFact:"그전 is a useful discourse marker for establishing timelines. In narrative writing, it helps readers track chronology."},

    {type:"teach", trg:"\uADF8\uC81C\uC11C\uC57C", src:"only then; not until then", pos:"adv", gender:null,
     note:"Pure Korean compound: that moment (그제) + only then (서야).\nRealizing or acting only after a delay.",
     example:"A: \uC124\uBA85\uC744 \uB4E3\uACE0 \uADF8\uC81C\uC11C\uC57C \uC774\uD574\uD588\uC5B4\uC694.\nB: \uCC98\uC74C\uC5D0\uB294 \uBAB0\uB790\uC5B4\uC694?\nA: \uADF8\uC81C\uC11C\uC57C \uBB38\uC81C\uB97C \uC54C\uC558\uC5B4\uC694.\nB: \uB2A6\uC5C8\uC9C0\uB9CC \uC54C\uAC8C \uB41C \uAC83\uC774 \uC911\uC694\uD574\uC694.",
     exampleSrc:"A: I understood only after hearing the explanation.\nB: You did not know at first?\nA: Only then did I realize the problem.\nB: Better late than never.",
     funFact:"그제서야 implies delayed realization. It carries a nuance of 'if only I had known sooner.' Very expressive in narrative writing."},

    {type:"teach", trg:"\uADF8\uC81C\uC57C", src:"only then; not until that moment", pos:"adv", gender:null,
     note:"Shorter form of 그제서야. Same meaning, slightly less emphatic.",
     example:"A: \uC5F4\uC27C\uB97C \uC78A\uC5B4\uBC84\uB838\uC5B4\uC694. \uADF8\uC81C\uC57C \uAE30\uC5B5\uB0AC\uC5B4\uC694.\nB: \uB2E4\uD589\uD788 \uAE30\uC5B5\uB0AC\uB124\uC694.\nA: \uADF8\uC81C\uC57C \uBB38\uC744 \uC5F4 \uC218 \uC788\uC5C8\uC5B4\uC694.\nB: \uC544\uC2AC\uC544\uC2AC\uD588\uACA0\uB124\uC694.",
     exampleSrc:"A: I forgot my keys. I only then remembered.\nB: Fortunately you remembered.\nA: Only then could I open the door.\nB: That must have been stressful.",
     funFact:"그제야 vs 그제서야: essentially synonyms. 그제서야 is slightly more emphatic due to the added 서. Both mean 'only at that point.'"},

    {type:"teach", trg:"\uADF8\uD574", src:"that year; the year in question", pos:"noun", gender:null,
     note:"Pure Korean compound: that (그) + year (해).\nReferring to a specific year in context.",
     example:"A: \uADF8\uD574 \uC5EC\uB984\uC740 \uD2B9\uBCC4\uD788 \uB354\uC6E0\uC5B4\uC694.\nB: \uADF8\uD574\uC5D0 \uBB34\uC2A8 \uC77C\uC774 \uC788\uC5C8\uC5B4\uC694?\nA: \uADF8\uD574\uC5D0 \uD55C\uAD6D\uC5D0 \uCC98\uC74C \uC654\uC5B4\uC694.\nB: \uADF8\uD574\uAC00 \uC778\uC0DD\uC758 \uC804\uD658\uC810\uC774\uC5C8\uB124\uC694.",
     exampleSrc:"A: That year's summer was especially hot.\nB: What happened that year?\nA: That year I first came to Korea.\nB: That year was a turning point in your life.",
     funFact:"그해 is essential in Korean storytelling. It anchors narratives to specific years without naming them: 그해 겨울 (that winter)."},

    {type:"teach", trg:"\uADF9\uD788", src:"extremely; exceedingly; utterly", pos:"adv", gender:null,
     note:"Sino-Korean: extreme (極) + -ly (히).\nVery formal intensifier.",
     example:"A: \uC774\uB7F0 \uACBD\uC6B0\uB294 \uADF9\uD788 \uB4DC\uBB3C\uC5B4\uC694.\nB: \uADF9\uD788 \uC870\uC2EC\uD574\uC57C \uD574\uC694.\nA: \uADF9\uD788 \uC18C\uC218\uC758 \uC0AC\uB78C\uB9CC \uC54C\uC544\uC694.\nB: \uBE44\uBC00\uC774 \uC720\uC9C0\uB418\uACE0 \uC788\uB124\uC694.",
     exampleSrc:"A: Such cases are extremely rare.\nB: We must be extremely careful.\nA: Only an exceedingly small number know.\nB: The secret is being maintained.",
     funFact:"극히 is formal and written. In speech, 매우 (very) or 아주 (really) are preferred. 극히 드물다 (extremely rare) is a standard collocation."},

    {type:"mc",
     q:"\uC124\uBA85\uC744 \uB4E3\uACE0 \uB098\uC11C\uC57C \uBE44\uB85C\uC18C \uC774\uD574\uD588\uC5B4\uC694. \uC5B4\uB5A4 \uD45C\uD604\uC774 \uC801\uC808\uD560\uAE4C\uC694?",
     opts:["\uADF8\uC81C\uC11C\uC57C","\uADF8\uC57C\uB9D0\uB85C","\uADF8\uB7F0\uB300\uB85C","\uADF9\uD788"],
     ans:"\uADF8\uC81C\uC11C\uC57C",
     hint:"This adverb means 'only at that point' or 'not until then,' expressing delayed realization."},

    {type:"match", pairs:[
      {trg:"\uADF8\uB140", src:"she (literary)"},
      {trg:"\uADF8\uB300", src:"you (poetic)"},
      {trg:"\uADF8\uC0AC\uC774", src:"in the meantime"},
      {trg:"\uADF8\uC57C\uB9D0\uB85C", src:"truly/indeed"},
      {trg:"\uADF8\uC800\uAED8", src:"day before yesterday"},
      {trg:"\uADF9\uD788", src:"extremely"}
    ]}
  ]
};
export default LESSON_17;
