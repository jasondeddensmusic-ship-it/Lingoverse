// Batch 10 – Unit 14 (B1.1 Opinions): Values & Beliefs
const BATCH10_L1 = {
  id:"jav2_u14l_b10_1", title:"かちかん", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"かちかん",
     desc:"Learn vocabulary for discussing values, beliefs, and worldviews. These abstract concepts are essential for meaningful B1-level conversations.",
     goals:["Discuss personal values and priorities","Express beliefs and convictions","Compare different perspectives"]},

    {type:"teach", trg:"かちかん", src:"values / sense of values", pos:"noun", gender:null,
     note:"かちかんのちがい = difference in values.\nかち = value, かん = sense/view.",
     example:"A: かちかんはひとそれぞれです。\nB: たしかに、みんなちがいますね。",
     exampleSrc:"A: Everyone has different values.\nB: Indeed, everyone is different.",
     funFact:"かちかん (価値観) discussions became more common in Japan after the 2011 earthquake, when many people reevaluated their priorities. The concept of いきがい (reason for living) is a famous Japanese かちかん that has gained worldwide attention through books and documentaries about Okinawan longevity."},

    {type:"teach", trg:"しんじる", src:"to believe / to trust", pos:"verb", gender:null,
     note:"じぶんをしんじる = to believe in yourself.\nしんじられない = unbelievable.",
     example:"A: あなたをしんじています。\nB: ありがとう。がんばります。",
     exampleSrc:"A: I believe in you.\nB: Thank you. I will do my best.",
     funFact:"しんじる (信じる) covers both 'believe' and 'trust.' しんじられない！ (unbelievable!) is a common exclamation of surprise. The related noun しんらい (trust) is fundamental to Japanese business relationships. にほんじんはしんよう (credit/trust) をだいじにする."},

    {type:"teach", trg:"そんちょうする", src:"to respect", pos:"verb", gender:null,
     note:"そんちょう = respect. いけんをそんちょうする = to respect opinions.\nたがいにそんちょうする = to respect each other.",
     example:"A: あいてのいけんをそんちょうしましょう。\nB: そうですね。だいじなことです。",
     exampleSrc:"A: Let's respect the other person's opinion.\nB: Yes. That is important.",
     funFact:"そんちょう (尊重) combines 尊 (honor) and 重 (heavy/important). Japanese society emphasizes mutual そんちょう, especially toward elders and those in authority. The concept extends to nature (しぜんをそんちょうする) and cultural differences (ぶんかをそんちょうする)."},

    {type:"teach", trg:"こうへい", src:"fair / impartial", pos:"adj", gender:null,
     note:"な-adjective. こうへいなはんだん = fair judgment.\nふこうへい = unfair.",
     example:"A: こうへいにはんだんしてください。\nB: もちろん、どちらにもかたよりません。",
     exampleSrc:"A: Please judge fairly.\nB: Of course, I will not be biased toward either side.",
     funFact:"こうへい (公平) is a highly valued concept. Japanese education emphasizes こうへい in group activities. The phrase こうへいをきす means 'to ensure fairness.' Sports referees and teachers are expected to be こうへい above all. ふこうへいだ (that's unfair!) is a common children's complaint."},

    {type:"teach", trg:"せきにん", src:"responsibility", pos:"noun", gender:null,
     note:"せきにんをとる = to take responsibility.\nせきにんかん = sense of responsibility.",
     example:"A: これはわたしのせきにんです。\nB: いっしょにかいけつしましょう。",
     exampleSrc:"A: This is my responsibility.\nB: Let's solve it together.",
     funFact:"せきにん (責任) is taken very seriously in Japan. じにんする (to resign taking responsibility) is a common practice for leaders after failures. The phrase せきにんをもつ (to bear responsibility) shows commitment. Japanese corporate culture emphasizes collective せきにん over individual blame."},

    {type:"teach", trg:"じゆう", src:"freedom / liberty", pos:"noun", gender:null,
     note:"じゆうなじかん = free time.\nじゆうにえらぶ = to choose freely.",
     example:"A: じぶんのじんせいはじゆうにえらべます。\nB: そのとおりだとおもいます。",
     exampleSrc:"A: You can choose your own life freely.\nB: I think that is right.",
     funFact:"じゆう (自由) was coined in the Meiji era to translate 'freedom/liberty' from Western languages. The concept was new to Japanese thought at the time. Today, じゆう is cherished but balanced with せきにん. The phrase じゆうとせきにん (freedom and responsibility) is taught in schools."},

    {type:"teach", trg:"へいわ", src:"peace", pos:"noun", gender:null,
     note:"へいわしゅぎ = pacifism. へいわにくらす = to live in peace.\nせかいへいわ = world peace.",
     example:"A: へいわがいちばんたいせつです。\nB: わたしもそうおもいます。",
     exampleSrc:"A: Peace is the most important thing.\nB: I think so too.",
     funFact:"へいわ (平和) holds special significance in Japan due to the experience of World War II. Hiroshima's へいわきねんこうえん (Peace Memorial Park) is visited by millions. Article 9 of Japan's constitution renounces war. ノーベルへいわしょう (Nobel Peace Prize) is one of the most discussed awards in Japan."},

    {type:"teach", trg:"どりょく", src:"effort / hard work", pos:"noun", gender:null,
     note:"どりょくする = to make an effort.\nどりょくかは = hard worker.",
     example:"A: どりょくすればかならずできます。\nB: そうしんじています。",
     exampleSrc:"A: If you make the effort, you can definitely do it.\nB: I believe that.",
     funFact:"どりょく (努力) is one of the most valued concepts in Japan. The phrase どりょくはうらぎらない (effort never betrays you) is a popular motto. Japanese culture believes in がんばる (perseverance) and kaizen (continuous improvement). Many successful people credit どりょく over talent."},

    {type:"mc", q:"What does いきがい mean?", opts:["Reason for living / sense of purpose","Type of meditation","Traditional ritual","Academic study"], ans:"Reason for living / sense of purpose",
     hint:"This Japanese concept about finding meaning in life has gained worldwide attention through studies of Okinawan longevity."},

    {type:"fb", s:"あいてのいけんを{1}しましょう。\n(Let's respect the other person's opinion.)", a:"そんちょう", opts:["そんちょう","しんじ","どりょく","さんせい"], sSrc:"Let's respect the other person's opinion.",
     hint:"This word combines kanji meaning 'honor' and 'heavy/important.'"},

    {type:"match", pairs:[
      {trg:"かちかん", src:"values"},
      {trg:"せきにん", src:"responsibility"},
      {trg:"じゆう", src:"freedom"},
      {trg:"へいわ", src:"peace"}
    ]},

    {type:"mc", q:"What does じにんする mean in Japanese corporate culture?", opts:["Resigning to take responsibility for a failure","Getting promoted","Retiring early","Changing departments"], ans:"Resigning to take responsibility for a failure",
     hint:"This practice reflects the deep importance of せきにん in Japanese leadership."}
  ]
};
export default BATCH10_L1;
