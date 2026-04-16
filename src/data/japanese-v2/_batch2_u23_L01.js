// Unit 23 Batch 2 Lesson 1: ちゅうしょうめいし (Abstract Noun Vocabulary)
const BATCH2_L_1 = {
  id:"jav2_u23l_b2_1", title:"ちゅうしょうめいし", icon:"💎", xp:15, board:true,
  steps:[
    {type:"intro", title:"ちゅうしょうめいし",
     desc:"B1 Japanese requires abstract nouns for discussing concepts, values, and qualities. Learn nouns like 'freedom,' 'responsibility,' 'possibility,' and 'effort.' These words elevate your ability to discuss ideas and express nuanced thoughts.",
     goals:["Learn abstract nouns for values and qualities","Use abstract nouns in opinion expressions","Combine abstract nouns with nominalization patterns"]},

    {type:"teach", trg:"じゆう", src:"freedom / liberty", pos:"noun", gender:null,
     note:"Kanji: 自由. じ (self) + ゆう (reason/cause).\nじゆうな = free (na-adjective form).",
     example:"A: じゆうにいけんをいってください。\nB: では、えんりょなくいいます。",
     exampleSrc:"A: Please state your opinions freely.\nB: Then I will speak without reserve.",
     funFact:"自由 literally means 'from oneself,' implying self-determination. The word was coined during the Meiji era to translate Western concepts of liberty. Japanese freedom balances individual rights with social harmony (和, wa). じゆうにする means 'to do as one pleases,' which carries a slightly different nuance than Western freedom."},

    {type:"teach", trg:"せきにん", src:"responsibility", pos:"noun", gender:null,
     note:"Kanji: 責任. せき (blame/duty) + にん (burden/duty).\nせきにんをとる = to take responsibility.",
     example:"A: これはわたしのせきにんです。\nB: いっしょにかいけつしましょう。",
     exampleSrc:"A: This is my responsibility.\nB: Let us solve it together.",
     funFact:"責任 is heavy in Japanese culture. せきにんをとる (take responsibility) often means resignation from a position. Corporate scandals lead to presidents bowing deeply and accepting 責任. The concept extends beyond blame: it includes duty, accountability, and the social weight of your role."},

    {type:"teach", trg:"かのうせい", src:"possibility / likelihood", pos:"noun", gender:null,
     note:"Kanji: 可能性. かのう (possible) + せい (nature/quality).\nかのうせいがたかい = high possibility.",
     example:"A: ごうかくするかのうせいはどのくらいですか？\nB: がんばればかのうせいはたかいですよ。",
     exampleSrc:"A: What is the possibility of passing?\nB: If you try hard, the possibility is high.",
     funFact:"可能性 is essential for hedging and probability. Japanese communication avoids absolutes, so かのうせいがある (there is a possibility) is preferred over definitive statements. News reports say かのうせいがある when reporting unconfirmed information, maintaining journalistic caution."},

    {type:"teach", trg:"どりょく", src:"effort / hard work / endeavor", pos:"noun", gender:null,
     note:"Kanji: 努力. ど (strive) + りょく (strength/power).\nどりょくする = to make an effort.",
     example:"A: どりょくすればかならずせいこうします。\nB: そうしんじてがんばります。",
     exampleSrc:"A: If you make effort, you will surely succeed.\nB: I believe that and will do my best.",
     funFact:"努力 is one of Japan's most valued concepts. Japanese culture emphasizes effort over innate talent: どりょくする人 (a person who makes effort) is more admired than a natural genius. The phrase 努力は裏切らない (doryoku wa uragiranai, effort does not betray) is a beloved motivational saying."},

    {type:"mc", q:"せきにんをとる in Japanese corporate culture often means:", opts:["Getting a promotion","Taking responsibility, often by resigning","Avoiding blame","Starting a new project"], ans:"Taking responsibility, often by resigning",
     hint:"In Japanese business, accepting r... for failure o... requires leaving your position."},

    {type:"teach", trg:"けいけん", src:"experience", pos:"noun", gender:null,
     note:"Kanji: 経験. けい (pass through) + けん (test/verify).\nけいけんする = to experience.",
     example:"A: いいけいけんになりました。\nB: つぎにいかしてくださいね。",
     exampleSrc:"A: It was a good experience.\nB: Please use it for next time.",
     funFact:"経験 literally means 'passing through and verifying,' capturing the idea that true knowledge comes from lived experience. いいけいけんになりました (it became a good experience) is a positive reframing used even after failures. Japanese culture values 経験 as the teacher that textbooks cannot replace."},

    {type:"teach", trg:"もくてき", src:"purpose / goal / objective", pos:"noun", gender:null,
     note:"Kanji: 目的. もく (eye) + てき (target).\nもくてきをたっせいする = to achieve a goal.",
     example:"A: りょこうのもくてきはなんですか？\nB: にほんのぶんかをたいけんすることです。",
     exampleSrc:"A: What is the purpose of your trip?\nB: To experience Japanese culture.",
     funFact:"目的 combines 'eye' and 'target,' suggesting aiming your gaze at a goal. It is more specific than もくひょう (目標, general goal/target). もくてき refers to the ultimate purpose or reason: why are you doing this? Japanese immigration forms ask 入国の目的 (purpose of entry), a question every traveler encounters."},

    {type:"teach", trg:"かち", src:"value / worth", pos:"noun", gender:null,
     note:"Kanji: 価値. か (price/value) + ち (value/worth).\nかちがある = to have value.",
     example:"A: このけいけんにはかちがあります。\nB: そうですね。おかねでかえないものです。",
     exampleSrc:"A: This experience has value.\nB: That is right. It is something money cannot buy.",
     funFact:"価値 deals with both monetary and intrinsic worth. かちかん (価値観, values/worldview) is a crucial word for discussing different perspectives. Japanese society is experiencing a かちかんのへんか (change in values) as younger generations prioritize work-life balance over traditional corporate loyalty."},

    {type:"fb", s:"がんばれば{1}はたかいですよ。\n(If you try hard, the possibility is high.)", a:"かのうせい", opts:["かのうせい","せきにん","もくてき","どりょく"], sSrc:"If you try hard, the possibility is high.",
     hint:"The abstract noun for 'possibility' or 'likelihood,' using the suffix 性 (nature/quality)."},

    {type:"teach", trg:"えいきょう", src:"influence / impact / effect", pos:"noun", gender:null,
     note:"Kanji: 影響. えい (shadow) + きょう (echo/resound).\nえいきょうをあたえる = to give influence.",
     example:"A: テクノロジーがせいかつにえいきょうをあたえています。\nB: いいえいきょうもわるいえいきょうもありますね。",
     exampleSrc:"A: Technology is having an impact on daily life.\nB: There are both good and bad impacts.",
     funFact:"影響 beautifully combines 影 (shadow) and 響 (echo), suggesting influence that spreads like shadows and echoes. It is one of the most-used nouns in news and academic Japanese. えいきょうを受ける (to receive influence) and えいきょうを与える (to give influence) are essential collocations."},

    {type:"teach", trg:"たっせいする", src:"to achieve / to accomplish", pos:"verb", gender:null,
     note:"する-verb. たっせい = achievement/accomplishment.\nKanji: 達成する. もくひょうをたっせいする = achieve a goal.",
     example:"A: もくひょうをたっせいしました！\nB: おめでとうございます！どりょくのけっかですね。",
     exampleSrc:"A: I achieved my goal!\nB: Congratulations! It is the result of effort.",
     funFact:"達成 combines 達 (reach/achieve) and 成 (complete/become). Goal achievement (目標達成) is celebrated in Japanese organizations with ceremonies and recognition. The phrase 達成感 (tasseikan, sense of achievement) describes the deeply satisfying feeling of completing something difficult."},

    {type:"mc", q:"もくてき means:", opts:["Problem","Method","Purpose/objective","Result"], ans:"Purpose/objective",
     hint:"This word combines 'eye' (目) and 'target' (的), meaning what you are aiming at or why you are doing something."},

    {type:"tip", title:"Abstract Nouns for Discussion",
     text:"Values and qualities:\nじゆう = freedom\nせきにん = responsibility\nかち = value/worth\n\nAbilities and likelihood:\nかのうせい = possibility\nどりょく = effort\nけいけん = experience\n\nGoals and impact:\nもくてき = purpose\nたっせいする = to achieve\nえいきょう = influence/impact\n\nThese nouns combine naturally with nominalization:\nどりょくすることがだいじ = making effort is important.\nけいけんのかちがある = it has the value of experience.",
     deepDive:{title:"Abstract Thinking in Japanese",
      text:"B1 is where Japanese becomes truly expressive. Abstract nouns let you discuss:\n\n1. Values: じゆうとせきにんのバランス (the balance of freedom and responsibility).\n2. Possibilities: かのうせいをひろげる (to expand possibilities).\n3. Impact: えいきょうをかんがえる (to consider the impact).\n\nThese nouns often form compound expressions:\nかのうせいがたかい/ひくい (high/low possibility)\nせきにんがおもい (heavy responsibility)\nどりょくがみのる (effort bears fruit)\n\nMastering these abstract nouns is what separates intermediate learners from advanced ones."}},

    {type:"match", pairs:[{trg:"じゆう",src:"freedom"},{trg:"せきにん",src:"responsibility"},{trg:"かのうせい",src:"possibility"},{trg:"どりょく",src:"effort"}]},

    {type:"fb", s:"もくひょうを{1}しました！\n(I achieved my goal!)", a:"たっせい", opts:["たっせい","かいけつ","けいけん","どりょく"], sSrc:"I achieved my goal!",
     hint:"The する-verb meaning to accomplish or achieve, combining 'reach' + 'complete.'"},

    {type:"match", pairs:[{trg:"けいけん",src:"experience"},{trg:"もくてき",src:"purpose"},{trg:"かち",src:"value/worth"},{trg:"えいきょう",src:"influence"}]},

    {type:"mc", q:"どりょくは裏切らない is a popular saying meaning:", opts:["Effort is useless","Effort does not betray (hard work always pays off)","Effort is betrayal","Only talent matters"], ans:"Effort does not betray (hard work always pays off)",
     hint:"This beloved motivational phrase reflects Japan's cultural emphasis on e... over natural talent."},
  ]
};
export default BATCH2_L_1;
