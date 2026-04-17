// Batch 11 – Unit 22 (B1.2 Giving & Receiving): Favor & Obligation Expressions
const BATCH11_L1 = {
  id:"jav2_u22l_b11_1", title:"おねがいとおれい", icon:"🤝", xp:15, board:true,
  steps:[
    {type:"intro", title:"おねがいとおれい",
     desc:"Learn expressions for making requests, expressing gratitude, and handling social obligations. These phrases are the glue of Japanese interpersonal relationships.",
     goals:["Make polite requests at various formality levels","Express gratitude beyond simple ありがとう","Understand social obligation vocabulary"]},

    {type:"teach", trg:"おねがい", src:"request / favor", pos:"noun", gender:null,
     note:"おねがいがあるのですが = I have a request.\nCasual: おねがい！= Please!",
     example:"A: ひとつおねがいがあるのですが。\nB: なんでしょうか？\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: I have one request.\nB: What is it?\nA: Do you go often?\nB: I go about once a month.",
     funFact:"おねがい comes from ねがう (to wish/pray). Making a request literally means 'I humbly wish this of you.' The phrase おねがいがあるのですが (I have a request, but...) with the trailing が softens the request by implying hesitation, making it more polite."},

    {type:"teach", trg:"たのむ", src:"to request / to ask a favor", pos:"verb", gender:null,
     note:"Group 1 verb. て-form: たのんで.\nたのみごと = a favor to ask.",
     example:"A: ちょっとたのみたいことがあるんだけど。\nB: いいよ、なに？\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: I have something I'd like to ask you.\nB: Sure, what is it?\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"たのむ is more casual than おねがいする. Among friends: たのむよ！(I'm counting on you!). In yakuza movies: たのんだぞ (I'm entrusting this to you). The formality scale for requests: たのむ (casual) < おねがいする (polite) < おねがいいたします (very formal/humble)."},

    {type:"teach", trg:"おかげ", src:"thanks to / owing to", pos:"noun", gender:null,
     note:"おかげさまで = thanks to you (set phrase).\nExpresses gratitude for help or good fortune.",
     example:"A: しけんにうかりました！\nB: おめでとう！\nA: せんせいのおかげです。\nB: いいえ、あなたの努力(どりょく)のおかげですよ。",
     exampleSrc:"A: I passed the exam!\nB: Congratulations!\nA: It is thanks to my teacher.\nB: No, it is thanks to your hard work.",
     funFact:"おかげ comes from 'shadow of the divine' (お蔭), originally meaning blessings from the gods. おかげさまで is a humble set phrase meaning 'thanks to your gracious help.' Even when asked 'how are you,' Japanese people respond おかげさまで、げんきです (thanks to you, I'm well), attributing health to others' care."},

    {type:"teach", trg:"せいで", src:"because of (negative cause)", pos:"part", gender:null,
     note:"Used for negative outcomes. Xのせいで = because of X (blame).\nOpposite nuance of おかげで.",
     example:"A: たいふうのせいでひこうきがとばなかった。\nB: たいへんでしたね。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Because of the typhoon, the plane didn't fly.\nB: That must have been tough.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"おかげで (positive cause) and せいで (negative cause) are a crucial pair. おかげでうまくいった (it went well THANKS TO...) vs せいでしっぱいした (it failed BECAUSE OF...). Using せいで about a person is essentially blaming them: あなたのせいで (because of YOU) is confrontational."},

    {type:"teach", trg:"めいわく", src:"trouble / bother / nuisance", pos:"noun", gender:null,
     note:"めいわくをかける = to cause trouble for someone.\nごめいわくをおかけして = sorry for the trouble.",
     example:"A: おいそがしいところ、ごめいわくをおかけしてすみません。\nB: いいえ、ぜんぜんめいわくではありません。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Sorry for troubling you when you are busy.\nB: No, it is no trouble at all.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"めいわくをかけない (not causing trouble for others) is a core Japanese value taught from childhood. ひとにめいわくをかけるな (don't cause trouble for others) is perhaps the most commonly taught moral lesson. This extends to quiet behavior on trains, tidy public spaces, and considerate social conduct."},

    {type:"teach", trg:"えんりょ", src:"restraint / holding back / hesitation", pos:"noun", gender:null,
     note:"えんりょする = to hold back/refrain.\nえんりょなく = without holding back.",
     example:"A: えんりょしないでたくさんたべてください。\nB: ありがとうございます。いただきます。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: Please eat a lot without holding back.\nB: Thank you. I will eat.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"えんりょ is a uniquely Japanese social concept: voluntarily restraining yourself out of consideration for others. At a dinner, you might えんりょ from taking the last piece. Hosts counter with えんりょしないで (don't hold back!). The dance between えんりょ and encouragement is a fundamental social ritual."},

    {type:"teach", trg:"きをつかう", src:"to be considerate / attentive", pos:"verb", gender:null,
     note:"Fixed expression. きをつかわないで = don't worry about me.\nShows social awareness.",
     example:"A: おちゃをいれましょうか？\nB: きをつかわないでください。じぶんでいれます。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Shall I make tea?\nB: Please don't worry about me. I'll make it myself.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"きをつかう (using ki/spirit to attend to others) is the art of anticipating needs before being asked. A person who is きがきく (attentive/perceptive) is highly valued. This social awareness creates the famously high service quality in Japan, where staff anticipate customer needs without being asked."},

    {type:"teach", trg:"おれい", src:"gratitude / thanks / return gift", pos:"noun", gender:null,
     note:"おれいをいう = to express thanks.\nおれいのてがみ = thank-you letter.",
     example:"A: たすけてくれてありがとう。なにかおれいをしたいです。\nB: おれいはいりませんよ。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: Thank you for helping me. I want to do something to thank you.\nB: No thanks are necessary.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"おれい (お礼) goes beyond verbal thanks. Japanese gift-giving culture includes おかえし (return gifts): receive a gift, return one of roughly equal value. おれいのきもち (feelings of gratitude) are expressed through actions, not just words. Business relationships run on carefully timed おれい exchanges."},

    {type:"teach", trg:"おわび", src:"apology (formal)", pos:"noun", gender:null,
     note:"おわびする = to formally apologize.\nMore serious than ごめんなさい.",
     example:"A: このたびはごめいわくをおかけし、ふかくおわびもうしあげます。\nB: だいじょうぶです。きにしないでください。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: We deeply apologize for the trouble caused this time.\nB: It's fine. Please don't worry about it.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"おわび (お詫び) is a formal, deep apology used in business crises and public statements. Japanese companies issue おわび press conferences for product defects, with executives bowing deeply (頭を下げる). The depth and length of the bow correlates with the severity of the offense."},

    {type:"teach", trg:"かんしゃ", src:"gratitude / appreciation", pos:"noun", gender:null,
     note:"かんしゃする = to be grateful.\nかんしゃのきもち = feelings of gratitude.",
     example:"A: いつもおうえんしてくれて、かんしゃしています。\nB: こちらこそ。いつもがんばっていますね。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: I am grateful that you always support me.\nB: Likewise. You are always working hard.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"かんしゃ (感謝) is a deeper, more reflective gratitude than ありがとう. It appears in formal speeches, letters, and introspective moments. かんしゃのきもちをわすれない (never forget feelings of gratitude) is a life motto many Japanese people hold. Year-end cards often express かんしゃ."},

    {type:"teach", trg:"おたがいさま", src:"it's mutual / we're even", pos:"noun", gender:null,
     note:"Set phrase dismissing thanks.\nLiterally: it's the same for both of us.",
     example:"A: いつもたすけてくれてありがとう。\nB: おたがいさまですよ。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: Thank you for always helping me.\nB: It's mutual.\nA: How was it?\nB: It was very good.",
     funFact:"おたがいさま (mutual/reciprocal) deflects thanks by equalizing the relationship. It says 'you help me too, so we're even.' This reflects the Japanese value of reciprocity (互恵). Using おたがいさま maintains equality and avoids one person feeling indebted, preserving social harmony."},

    // Quiz steps
    {type:"mc", q:"「おかげで」と「せいで」はどうちがいますか？",
     opts:["おかげで is positive cause, せいで is negative cause","They are the same","おかげで is casual, せいで is formal","おかげで is for people, せいで is for things"],
     ans:"おかげで is positive cause, せいで is negative cause",
     hint:"One attributes good outcomes to a c..., the other blames bad outcomes on a c...."},

    {type:"fb", s:"えんりょ{1}たくさんたべてください。",
     a:["しないで"],
     opts:["しないで","して","しながら","すると"],
     hint:"The host is telling you to eat freely without holding back. They want you to NOT restrain yourself.",
     sSrc:"Please eat a lot without holding back."},

    {type:"match", pairs:[
      {trg:"おれい", src:"gratitude / return gift"},
      {trg:"おわび", src:"formal apology"},
      {trg:"かんしゃ", src:"appreciation"},
      {trg:"めいわく", src:"trouble / nuisance"}
    ]},

    {type:"mc", q:"にほんでこどもにいちばんよくおしえるどうとくはなんですか？",
     opts:["Don't cause trouble for others (めいわくをかけるな)","Always win","Study hard every day","Eat everything on your plate"],
     ans:"Don't cause trouble for others (めいわくをかけるな)",
     hint:"This fundamental moral lesson shapes much of Japanese social behavior, from quiet train rides to tidy public spaces."},

    {type:"fb", s:"いつもたすけてくれてありがとう。{1}ですよ。",
     a:["おたがいさま"],
     opts:["おたがいさま","おかげさま","おねがい","ごめんなさい"],
     hint:"The response deflects thanks by saying the help goes both ways. This phrase means 'it's mutual.'",
     sSrc:"Thank you for always helping me. It's mutual."},

    {type:"mc", q:"「きをつかう」ひとはどんなひとですか？",
     opts:["Someone who anticipates others' needs","Someone who is selfish","Someone who is quiet","Someone who is strong"],
     ans:"Someone who anticipates others' needs",
     hint:"This describes a person who is socially attentive and considerate, proactively caring for those around them."}
  ]
};
export default BATCH11_L1;
