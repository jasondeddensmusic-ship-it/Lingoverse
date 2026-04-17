// Unit 23 Expansion. Lesson 5: めいしかとけいしき (Nominalization in Formal Writing)
const LESSON_5 = {
  id:"jav2_u23l5", title:"めいしかとけいしき", icon:"✍️", xp:15, board:true,
  steps:[
    {type:"intro", title:"めいしかとけいしき",
     desc:"Learn how nominalization works in formal and written Japanese. Master patterns like ものだ (general truth), ところだ (timing), and ことだ (advice). These advanced nominalizer patterns appear in essays, news, and formal speech. They mark the difference between conversational and polished Japanese.",
     goals:["Use ものだ for general truths and nostalgia","Use ところだ for timing expressions","Use ことだ for strong advice and imperatives"]},

    {type:"teach", trg:"〜ものだ", src:"it is natural to ~ / one should ~ / used to ~", pos:"part", gender:null,
     note:"Dictionary form + ものだ = general truth, natural tendency, or nostalgia.\nThree meanings depending on tense and context.",
     example:"A: ひとはだれでもしっぱいするものです。\nB: そうですね、しっぱいからまなべますね。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: It is natural for anyone to make mistakes.\nB: That is right, we can learn from mistakes.\nA: How was it?\nB: It was very good.",
     funFact:"ものだ is a philosophical pattern with three distinct uses: 1) general truth (人間はまちがうものだ, humans err), 2) strong should (やくそくはまもるものだ, promises should be kept), 3) nostalgia with past tense (よくあそんだものだ, we used to play). The もの (thing) grounds abstract ideas as if they are natural objects in the world."},

    {type:"teach", trg:"〜たものだ", src:"used to ~ (nostalgic)", pos:"part", gender:null,
     note:"Past tense + ものだ = nostalgic recollection of past habits.\nExpresses fond memories of things that no longer happen.",
     example:"A: こどものころ、よくこのこうえんであそんだものです。\nB: いいおもいでですね。\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: When I was a child, I used to play in this park a lot.\nB: What a nice memory.\nA: When was it?\nB: It was last summer.",
     funFact:"たものだ carries emotional warmth absent from simple past tense. あそんだ (played) is neutral fact. あそんだものだ (used to play) is tinged with nostalgia. Older speakers use this pattern naturally when reminiscing. It signals that the speaker is looking back fondly at a time that has passed."},

    {type:"teach", trg:"〜ところだ", src:"be about to ~ / be in the middle of ~ / have just ~", pos:"part", gender:null,
     note:"Tense changes the timing:\nDictionary form + ところ = about to start.\nている + ところ = in the middle of.\nた + ところ = just finished.",
     example:"A: いまからしゅっぱつするところです。\nB: きをつけていってらっしゃい。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: I am just about to leave now.\nB: Take care and have a safe trip.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"ところ (place/point) as a grammar pattern marks a temporal 'place' in an action's timeline. するところ (about to), しているところ (in the middle), したところ (just did). This three-stage system lets Japanese speakers pinpoint exactly where they are in a process with surgical precision. Phone conversations use this constantly."},

    {type:"teach", trg:"〜ことだ", src:"the thing to do is ~ / you should ~ (advice)", pos:"part", gender:null,
     note:"Dictionary form + ことだ = strong advice or imperative.\nStronger than ほうがいい. Used by teachers, doctors, parents.",
     example:"A: けんこうのためにはやくねることです。\nB: わかりました。こんばんからそうします。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: For health, the thing to do is sleep early.\nB: Understood. I will do so from tonight.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"ことだ as advice literally means 'the matter/thing is to do X.' It is authoritative and direct, used by people in positions of authority. A doctor says うんどうすることだ (the thing to do is exercise). A teacher says もっとべんきょうすることだ (you need to study more). It is too strong for peer conversations."},

    {type:"mc", q:"よくあそんだものだ expresses:", opts:["A plan to play soon","A nostalgic memory of playing in the past","Playing is a natural thing","A command to play more"], ans:"A nostalgic memory of playing in the past",
     hint:"P... tense + ものだ carries warm, fond recollection of habits from long ago."},

    {type:"teach", trg:"しっぱい", src:"failure / mistake", pos:"noun", gender:null,
     note:"Kanji: 失敗. しつ (lose) + ぱい (defeat).\nしっぱいする = to fail. Opposite: せいこう (success).",
     example:"A: しっぱいをおそれないでください。\nB: はい、しっぱいからまなびます。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Please do not fear failure.\nB: Yes, I will learn from failure.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"失敗 uses 失 (lose) and 敗 (defeat), doubling the negative imagery. Yet Japanese culture increasingly values しっぱい as a learning tool. The phrase しっぱいはせいこうのもと (failure is the origin of success) is a well-known proverb. Start-up culture in Japan is slowly shifting attitudes toward embracing rather than fearing failure."},

    {type:"teach", trg:"おもいで", src:"memory / recollection", pos:"noun", gender:null,
     note:"Kanji: 思い出. おもい (thought/feeling) + で (come out).\nいいおもいで = good memory.",
     example:"A: がくせいじだいのおもいでをはなしてください。\nB: ぶかつどうのおもいでがいちばんです。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
     exampleSrc:"A: Please share memories from your student days.\nB: Club activity memories are the best.\nA: How long did it take?\nB: About two hours.",
     funFact:"思い出 literally means 'thoughts that come out.' The verb おもいだす (to recall) shares the same structure. Japanese graduation ceremonies (卒業式, sotsugyoushiki) are deeply emotional events where おもいで are shared and celebrated. The song おもいでのアルバム is one of Japan's most beloved graduation songs."},

    {type:"teach", trg:"せいこう", src:"success", pos:"noun", gender:null,
     note:"Kanji: 成功. せい (become/achieve) + こう (merit/work).\nせいこうする = to succeed. Opposite of しっぱい.",
     example:"A: プロジェクトがせいこうしました。\nB: おめでとうございます。みんなのどりょくのおかげですね。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
     exampleSrc:"A: The project succeeded.\nB: Congratulations. Thanks to everyone's effort.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
     funFact:"成功 combines 成 (become/accomplish) and 功 (achievement/merit). Japanese success culture values group effort over individual achievement. Saying みんなのおかげで (thanks to everyone) after せいこう is socially expected. Taking sole credit is considered arrogant. The collective framing (チームのせいこう, team success) is always preferred."},

    {type:"fb", s:"いまからしゅっぱつする{1}です。\n(I am just about to leave now.)", a:"ところ", opts:["ところ","こと","もの","はず"], sSrc:"I am just about to leave now.",
     hint:"The word marking a temporal point. With dictionary form, it means 'about to start.'"},

    {type:"teach", trg:"〜ないことだ", src:"the thing is to NOT ~ / you should NOT ~", pos:"part", gender:null,
     note:"Negative form + ことだ = strong advice against doing something.\nUsed by authority figures. Formal tone.",
     example:"A: しけんのまえにあせらないことです。\nB: おちついてがんばります。\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: The thing is to not panic before the exam.\nB: I will stay calm and do my best.\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"ないことだ is the negative advice pattern: 'the thing to do is NOT X.' Doctors use it (たばこをすわないことだ, the thing is to not smoke), teachers use it (あきらめないことだ, don't give up), and coaches use it. Like positive ことだ, it is too authoritative for casual peer conversations."},

    {type:"teach", trg:"あせる", src:"to rush / to panic / to be hasty", pos:"verb", gender:null,
     note:"Group 1 verb. Kanji: 焦る. あせらないで = don't rush/panic.\nDescribes anxious hurrying.",
     example:"A: しけんまであとさんにちしかありません。\nB: あせらないで、けいかくてきにべんきょうしましょう。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: There are only three days until the exam.\nB: Don't panic, let us study systematically.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"焦る uses 焦 (scorch/burn). The image is of something burning from impatience. あせる describes both physical rushing and mental panic. あせっている (being panicky) is a common state before exams, deadlines, and presentations. The advice あせらないで (don't rush) is heard constantly in Japanese life."},

    {type:"mc", q:"けんこうのためにはやくねることだ expresses:", opts:["A nostalgic memory","A general truth about nature","Strong advice from an authority","An ongoing habit"], ans:"Strong advice from an authority",
     hint:"Dictionary form + ことだ is used by teachers, doctors, and parents to give firm recommendations."},

    {type:"match", pairs:[{trg:"ものだ (dict.)",src:"it is natural to / one should"},{trg:"たものだ",src:"used to (nostalgic)"},{trg:"ところだ",src:"about to / in the middle / just did"},{trg:"ことだ (advice)",src:"the thing to do is"}]},

    {type:"match", pairs:[{trg:"しっぱい",src:"failure"},{trg:"せいこう",src:"success"},{trg:"おもいで",src:"memory"},{trg:"あせる",src:"to rush/panic"}]},

    {type:"fb", s:"ひとはだれでもしっぱいする{1}です。\n(It is natural for anyone to make mistakes.)", a:"もの", opts:["もの","こと","ところ","はず"], sSrc:"It is natural for anyone to make mistakes.",
     hint:"The nominalizer expressing a general truth or natural tendency of human nature."},

    {type:"mc", q:"しゅっぱつするところだ means:", opts:["I should depart","I used to depart","I am about to depart","Departing is natural"], ans:"I am about to depart",
     hint:"Dictionary form + ところ marks the moment just before an action begins."},

    {type:"match", pairs:[{trg:"ないことだ",src:"you should not (advice)"},{trg:"あせる",src:"to panic"},{trg:"せいこう",src:"success"},{trg:"ものだ (truth)",src:"it is natural"}]},
  ]
};
export default LESSON_5;
