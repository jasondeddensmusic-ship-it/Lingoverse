// Batch 11 – Unit 22 (B1.2 Giving & Receiving): Favor & Obligation Expressions
const BATCH11_L1 = {
  id:"jav2_u22l_b11_1", title:"お願(ねが)いとお礼(れい)", icon:"🤝", xp:15, board:true,
  steps:[
    {type:"intro", title:"お願(ねが)いとお礼(れい)",
     desc:"Learn expressions for making requests, expressing gratitude, and handling social obligations. These phrases are the glue of Japanese interpersonal relationships.",
     goals:["Make polite requests at various formality levels","Express gratitude beyond simple ありがとう","Understand social obligation vocabulary"]},

    {type:"teach", trg:"お願(ねが)い", src:"request / favor", pos:"noun", gender:null,
     note:"お願(ねが)いがあるのですが = I have a request.\nCasual: お願(ねが)い！= Please!",
     example:"A: 一(ひと)つお願(ねが)いがあるのですが。\nB: なんでしょうか？\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: I have one request.\nB: What is it?\nA: Do you go often?\nB: I go about once a month.",
     funFact:"お願(ねが)い comes from 願(ねが)う (to wish/pray). Making a request literally means 'I humbly wish this of you.' The phrase お願(ねが)いがあるのですが (I have a request, but...) with the trailing が softens the request by implying hesitation, making it more polite."},

    {type:"teach", trg:"頼(たの)む", src:"to request / to ask a favor", pos:"verb", gender:null,
     note:"Group 1 verb. て-form: 頼(たの)んで.\n頼(たの)みごと = a favor to ask.",
     example:"A: ちょっと頼(たの)みたいことがあるんだけど。\nB: いいよ、何(なに)？\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: I have something I'd like to ask you.\nB: Sure, what is it?\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"頼(たの)む is more casual than お願(ねが)いする. Among friends: 頼(たの)むよ！(I'm counting on you!). In yakuza movies: 頼(たの)んだぞ (I'm entrusting this to you). The formality scale for requests: 頼(たの)む (casual) < お願(ねが)いする (polite) < お願(ねが)いいたします (very formal/humble)."},

    {type:"teach", trg:"お陰(かげ)", src:"thanks to / owing to", pos:"noun", gender:null,
     note:"お陰(かげ)様(さま)で = thanks to you (set phrase).\nExpresses gratitude for help or good fortune.",
     example:"A: 試験(しけん)に受(う)かりました！\nB: おめでとう！\nA: 先生(せんせい)のお陰(かげ)です。\nB: いいえ、あなたの努力(どりょく)のお陰(かげ)ですよ。",
     exampleSrc:"A: I passed the exam!\nB: Congratulations!\nA: It is thanks to my teacher.\nB: No, it is thanks to your hard work.",
     funFact:"お陰(かげ) comes from 'shadow of the divine' (お蔭), originally meaning blessings from the gods. お陰(かげ)様(さま)で is a humble set phrase meaning 'thanks to your gracious help.' Even when asked 'how are you,' Japanese people respond お陰(かげ)様(さま)で、元気(げんき)です (thanks to you, I'm well), attributing health to others' care."},

    {type:"teach", trg:"せいで", src:"because of (negative cause)", pos:"part", gender:null,
     note:"Used for negative outcomes. Xのせいで = because of X (blame).\nOpposite nuance of お陰(かげ)で.",
     example:"A: 台風(たいふう)のせいで飛行機(ひこうき)が飛(と)ばなかった。\nB: 大変(たいへん)でしたね。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: Because of the typhoon, the plane didn't fly.\nB: That must have been tough.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"お陰(かげ)で (positive cause) and せいで (negative cause) are a crucial pair. お陰(かげ)でうまくいった (it went well THANKS TO...) vs せいで失敗(しっぱい)した (it failed BECAUSE OF...). Using せいで about a person is essentially blaming them: あなたのせいで (because of YOU) is confrontational."},

    {type:"teach", trg:"迷惑(めいわく)", src:"trouble / bother / nuisance", pos:"noun", gender:null,
     note:"迷惑(めいわく)をかける = to cause trouble for someone.\nご迷惑(めいわく)をおかけして = sorry for the trouble.",
     example:"A: お忙(いそが)しいところ、ご迷惑(めいわく)をおかけしてすみません。\nB: いいえ、全然(ぜんぜん)迷惑(めいわく)ではありません。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Sorry for troubling you when you are busy.\nB: No, it is no trouble at all.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"迷惑(めいわく)をかけない (not causing trouble for others) is a core Japanese value taught from childhood. 人(ひと)に迷惑(めいわく)をかけるな (don't cause trouble for others) is perhaps the most commonly taught moral lesson. This extends to quiet behavior on trains, tidy public spaces, and considerate social conduct."},

    {type:"teach", trg:"遠慮(えんりょ)", src:"restraint / holding back / hesitation", pos:"noun", gender:null,
     note:"遠慮(えんりょ)する = to hold back/refrain.\n遠慮(えんりょ)なく = without holding back.",
     example:"A: 遠慮(えんりょ)しないでたくさん食(た)べてください。\nB: ありがとうございます。いただきます。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: Please eat a lot without holding back.\nB: Thank you. I will eat.\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"遠慮(えんりょ) is a uniquely Japanese social concept: voluntarily restraining yourself out of consideration for others. At a dinner, you might 遠慮(えんりょ) from taking the last piece. Hosts counter with 遠慮(えんりょ)しないで (don't hold back!). The dance between 遠慮(えんりょ) and encouragement is a fundamental social ritual."},

    {type:"teach", trg:"気(き)を使(つか)う", src:"to be considerate / attentive", pos:"verb", gender:null,
     note:"Fixed expression. 気(き)を使(つか)わないで = don't worry about me.\nShows social awareness.",
     example:"A: お茶(ちゃ)を入(い)れましょうか？\nB: 気(き)を使(つか)わないでください。自分(じぶん)で入(い)れます。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: Shall I make tea?\nB: Please don't worry about me. I'll make it myself.\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"気(き)を使(つか)う (using ki/spirit to attend to others) is the art of anticipating needs before being asked. A person who is 気(き)が利(き)く (attentive/perceptive) is highly valued. This social awareness creates the famously high service quality in Japan, where staff anticipate customer needs without being asked."},

    {type:"teach", trg:"お礼(れい)", src:"gratitude / thanks / return gift", pos:"noun", gender:null,
     note:"お礼(れい)を言(い)う = to express thanks.\nお礼(れい)の手紙(てがみ) = thank-you letter.",
     example:"A: 助(たす)けてくれてありがとう。なにかお礼(れい)をしたいです。\nB: お礼(れい)はいりませんよ。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: Thank you for helping me. I want to do something to thank you.\nB: No thanks are necessary.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"お礼(れい) (お礼) goes beyond verbal thanks. Japanese gift-giving culture includes お返(かえ)し (return gifts): receive a gift, return one of roughly equal value. お礼(れい)の気持(きも)ち (feelings of gratitude) are expressed through actions, not just words. Business relationships run on carefully timed お礼(れい) exchanges."},

    {type:"teach", trg:"お詫(わ)び", src:"apology (formal)", pos:"noun", gender:null,
     note:"お詫(わ)びする = to formally apologize.\nMore serious than ごめんなさい.",
     example:"A: このたびはご迷惑(めいわく)をおかけし、深(ふか)くお詫(わ)び申(もう)し上(あ)げます。\nB: 大丈夫(だいじょうぶ)です。気(き)にしないでください。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: We deeply apologize for the trouble caused this time.\nB: It's fine. Please don't worry about it.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"お詫(わ)び (お詫び) is a formal, deep apology used in business crises and public statements. Japanese companies issue お詫(わ)び press conferences for product defects, with executives bowing deeply (頭(あたま)を下(さ)げる). The depth and length of the bow correlates with the severity of the offense."},

    {type:"teach", trg:"感謝(かんしゃ)", src:"gratitude / appreciation", pos:"noun", gender:null,
     note:"感謝(かんしゃ)する = to be grateful.\n感謝(かんしゃ)の気持(きも)ち = feelings of gratitude.",
     example:"A: いつも応援(おうえん)してくれて、感謝(かんしゃ)しています。\nB: こちらこそ。いつも頑張(がんば)っていますね。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: I am grateful that you always support me.\nB: Likewise. You are always working hard.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"感謝(かんしゃ) (感謝) is a deeper, more reflective gratitude than ありがとう. It appears in formal speeches, letters, and introspective moments. 感謝(かんしゃ)の気持(きも)ちを忘(わす)れない (never forget feelings of gratitude) is a life motto many Japanese people hold. Year-end cards often express 感謝(かんしゃ)."},

    {type:"teach", trg:"お互(たが)い様(さま)", src:"it's mutual / we're even", pos:"noun", gender:null,
     note:"Set phrase dismissing thanks.\nLiterally: it's the same for both of us.",
     example:"A: いつも助(たす)けてくれてありがとう。\nB: お互(たが)い様(さま)ですよ。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: Thank you for always helping me.\nB: It's mutual.\nA: How was it?\nB: It was very good.",
     funFact:"お互(たが)い様(さま) (mutual/reciprocal) deflects thanks by equalizing the relationship. It says 'you help me too, so we're even.' This reflects the Japanese value of reciprocity (互恵(ごけい)). Using お互(たが)い様(さま) maintains equality and avoids one person feeling indebted, preserving social harmony."},

    // Quiz steps
    {type:"mc", q:"「お陰(かげ)で」と「せいで」はどう違(ちが)いますか？",
     opts:["お陰(かげ)で is positive cause, せいで is negative cause","They are the same","お陰(かげ)で is casual, せいで is formal","お陰(かげ)で is for people, せいで is for things"],
     ans:"お陰(かげ)で is positive cause, せいで is negative cause",
     hint:"One attributes good outcomes to a c..., the other blames bad outcomes on a c...."},

    {type:"fb", s:"遠慮(えんりょ){1}たくさん食(た)べてください。",
     a:["しないで"],
     opts:["しないで","して","しながら","すると"],
     hint:"The host is telling you to eat freely without holding back. They want you to NOT restrain yourself.",
     sSrc:"Please eat a lot without holding back."},

    {type:"match", pairs:[
      {trg:"お礼(れい)", src:"gratitude / return gift"},
      {trg:"お詫(わ)び", src:"formal apology"},
      {trg:"感謝(かんしゃ)", src:"appreciation"},
      {trg:"迷惑(めいわく)", src:"trouble / nuisance"}
    ]},

    {type:"mc", q:"日本(にほん)で子供(こども)に一番(いちばん)よく教(おし)える道徳(どうとく)はなんですか？",
     opts:["Don't cause trouble for others (迷惑(めいわく)をかけるな)","Always win","Study hard every day","Eat everything on your plate"],
     ans:"Don't cause trouble for others (迷惑(めいわく)をかけるな)",
     hint:"This fundamental moral lesson shapes much of Japanese social behavior, from quiet train rides to tidy public spaces."},

    {type:"fb", s:"いつも助(たす)けてくれてありがとう。{1}ですよ。",
     a:["お互(たが)い様(さま)"],
     opts:["お互(たが)い様(さま)","お陰(かげ)様(さま)","お願(ねが)い","ごめんなさい"],
     hint:"The response deflects thanks by saying the help goes both ways. This phrase means 'it's mutual.'",
     sSrc:"Thank you for always helping me. It's mutual."},

    {type:"mc", q:"「気(き)を使(つか)う」人(ひと)はどんな人(ひと)ですか？",
     opts:["Someone who anticipates others' needs","Someone who is selfish","Someone who is quiet","Someone who is strong"],
     ans:"Someone who anticipates others' needs",
     hint:"This describes a person who is socially attentive and considerate, proactively caring for those around them."}
  ,{type:"match",pairs:[{trg:"お願(ねが)い",src:"request / favor"},{trg:"頼(たの)む",src:"to request / to ask a favor"},{trg:"遠慮(えんりょ)",src:"restraint / holding back / hesitation"},{trg:"気(き)を使(つか)う",src:"to be considerate / attentive"}]}]
};
export default BATCH11_L1;
