// Batch 10 – Unit 14 (B1.1 Opinions): Values & Beliefs
const BATCH10_L1 = {
  id:"jav2_u14l_b10_1", title:"価値観(かちかん)", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"価値観(かちかん)",
     desc:"Learn vocabulary for discussing values, beliefs, and worldviews. These abstract concepts are essential for meaningful B1-level conversations.",
     goals:["Discuss personal values and priorities","Express beliefs and convictions","Compare different perspectives"]},

    {type:"teach", trg:"価値観(かちかん)", src:"values / sense of values", pos:"noun", gender:null,
     note:"価値観(かちかん)のちがい = difference in values.\n価値(かち) = value, 観(かん) = sense/view.",
     example:"A: 価値観(かちかん)はひとそれぞれです。\nB: たしかに、みんなちがいますね。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: Everyone has different values.\nB: Indeed, everyone is different.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"価値観(かちかん) (価値観) discussions became more common in Japan after the 2011 earthquake, when many people reevaluated their priorities. The concept of いきがい (reason for living) is a famous Japanese 価値観(かちかん) that has gained worldwide attention through books and documentaries about Okinawan longevity."},

    {type:"teach", trg:"信(しん)じる", src:"to believe / to trust", pos:"verb", gender:null,
     note:"自分(じぶん)を信(しん)じる = to believe in yourself.\n信(しん)じられない = unbelievable.",
     example:"A: あなたを信(しん)じています。\nB: ありがとう。頑張(がんば)ります。\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: I believe in you.\nB: Thank you. I will do my best.\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"信(しん)じる (信じる) covers both 'believe' and 'trust.' 信(しん)じられない！ (unbelievable!) is a common exclamation of surprise. The related noun 信頼(しんらい) (trust) is fundamental to Japanese business relationships. 日本人(にほんじん)は信用(しんよう) (credit/trust) を大事(だいじ)にする."},

    {type:"teach", trg:"尊重(そんちょう)する", src:"to respect", pos:"verb", gender:null,
     note:"尊重(そんちょう) = respect. 意見(いけん)を尊重(そんちょう)する = to respect opinions.\nたがいに尊重(そんちょう)する = to respect each other.",
     example:"A: 相手(あいて)の意見(いけん)を尊重(そんちょう)しましょう。\nB: そうですね。大事(だいじ)なことです。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: Let's respect the other person's opinion.\nB: Yes. That is important.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"尊重(そんちょう) (尊重) combines 尊 (honor) and 重 (heavy/important). Japanese society emphasizes mutual 尊重(そんちょう), especially toward elders and those in authority. The concept extends to nature (自然(しぜん)を尊重(そんちょう)する) and cultural differences (文化(ぶんか)を尊重(そんちょう)する)."},

    {type:"teach", trg:"公平(こうへい)", src:"fair / impartial", pos:"adj", gender:null,
     note:"な-adjective. 公平(こうへい)な判断(はんだん) = fair judgment.\n不公平(ふこうへい) = unfair.",
     example:"A: 公平(こうへい)に判断(はんだん)してください。\nB: もちろん、どちらにもかたよりません。\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: Please judge fairly.\nB: Of course, I will not be biased toward either side.\nA: Do you go often?\nB: I go about once a month.",
     funFact:"公平(こうへい) (公平) is a highly valued concept. Japanese education emphasizes 公平(こうへい) in group activities. The phrase 公平(こうへい)を期(き)す means 'to ensure fairness.' Sports referees and teachers are expected to be 公平(こうへい) above all. 不公平(ふこうへい)だ (that's unfair!) is a common children's complaint."},

    {type:"teach", trg:"責任(せきにん)", src:"responsibility", pos:"noun", gender:null,
     note:"責任(せきにん)をとる = to take responsibility.\n責任感(せきにんかん) = sense of responsibility.",
     example:"A: これは私(わたし)の責任(せきにん)です。\nB: 一緒(いっしょ)に解決(かいけつ)しましょう。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: This is my responsibility.\nB: Let's solve it together.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"責任(せきにん) (責任) is taken very seriously in Japan. 辞任(じにん)する (to resign taking responsibility) is a common practice for leaders after failures. The phrase 責任(せきにん)をもつ (to bear responsibility) shows commitment. Japanese corporate culture emphasizes collective 責任(せきにん) over individual blame."},

    {type:"teach", trg:"自由(じゆう)", src:"freedom / liberty", pos:"noun", gender:null,
     note:"自由(じゆう)な時間(じかん) = free time.\n自由(じゆう)に選(えら)ぶ = to choose freely.",
     example:"A: 自分(じぶん)の人生(じんせい)は自由(じゆう)に選(えら)べます。\nB: そのとおりだと思(おも)います。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: You can choose your own life freely.\nB: I think that is right.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"自由(じゆう) (自由) was coined in the Meiji era to translate 'freedom/liberty' from Western languages. The concept was new to Japanese thought at the time. Today, 自由(じゆう) is cherished but balanced with 責任(せきにん). The phrase 自由(じゆう)と責任(せきにん) (freedom and responsibility) is taught in schools."},

    {type:"teach", trg:"平和(へいわ)", src:"peace", pos:"noun", gender:null,
     note:"平和(へいわ)主義(しゅぎ) = pacifism. 平和(へいわ)に暮(く)らす = to live in peace.\n世界(せかい)平和(へいわ) = world peace.",
     example:"A: 平和(へいわ)が一番(いちばん)大切(たいせつ)です。\nB: 私(わたし)もそう思(おも)います。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Peace is the most important thing.\nB: I think so too.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"平和(へいわ) (平和) holds special significance in Japan due to the experience of World War II. 広島(ひろしま)の平和(へいわ)記念公園(きねんこうえん) (Peace Memorial Park) is visited by millions. Article 9 of Japan's constitution renounces war. ノーベル平和(へいわ)賞(しょう) (Nobel Peace Prize) is one of the most discussed awards in Japan."},

    {type:"teach", trg:"努力(どりょく)", src:"effort / hard work", pos:"noun", gender:null,
     note:"努力(どりょく)する = to make an effort.\n努力家(どりょくか) = hard worker.",
     example:"A: 努力(どりょく)すればかならずできます。\nB: そう信(しん)じています。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: If you make the effort, you can definitely do it.\nB: I believe that.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"努力(どりょく) (努力) is one of the most valued concepts in Japan. The phrase 努力(どりょく)は裏切(うらぎ)らない (effort never betrays you) is a popular motto. Japanese culture believes in 頑張(がんば)る (perseverance) and kaizen (continuous improvement). Many successful people credit 努力(どりょく) over talent."},

    {type:"mc", q:"What does いきがい mean?", opts:["Reason for living / sense of purpose","Type of meditation","Traditional ritual","Academic study"], ans:"Reason for living / sense of purpose",
     hint:"This Japanese concept about finding meaning in life has gained worldwide attention through studies of Okinawan longevity."},

    {type:"fb", s:"相手(あいて)の意見(いけん)を{1}しましょう。\n(Let's respect the other person's opinion.)", a:"尊重(そんちょう)", opts:["尊重(そんちょう)","信(しん)じ","努力(どりょく)","さんせい"], sSrc:"Let's respect the other person's opinion.",
     hint:"This word combines kanji meaning 'honor' and 'heavy/important.'"},

    {type:"match", pairs:[
      {trg:"価値観(かちかん)", src:"values"},
      {trg:"責任(せきにん)", src:"responsibility"},
      {trg:"自由(じゆう)", src:"freedom"},
      {trg:"平和(へいわ)", src:"peace"}
    ]},

    {type:"mc", q:"What does 辞任(じにん)する mean in Japanese corporate culture?", opts:["Resigning to take responsibility for a failure","Getting promoted","Retiring early","Changing departments"], ans:"Resigning to take responsibility for a failure",
     hint:"This practice reflects the deep importance of 責任(せきにん) in Japanese leadership."}
  ,{type:"match",pairs:[{trg:"信(しん)じる",src:"to believe / to trust"},{trg:"公平(こうへい)",src:"fair / impartial"},{trg:"努力(どりょく)",src:"effort / hard work"}]}]
};
export default BATCH10_L1;
