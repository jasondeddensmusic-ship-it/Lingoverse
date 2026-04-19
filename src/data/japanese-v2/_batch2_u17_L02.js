// Unit 17 Batch 2 Lesson 2: 苦情(くじょう)の受(う)け身(み) (Passive in Complaints)
const BATCH2_L_2 = {
  id:"jav2_u17l_b2_2", title:"苦情(くじょう)の受(う)け身(み)", icon:"😤", xp:15, board:true,
  steps:[
    {type:"intro", title:"苦情(くじょう)の受(う)け身(み)",
     desc:"Japanese people often frame complaints using passive voice. Instead of blaming directly, they describe how they were affected. Learn to express dissatisfaction about noise, service, and social situations using natural passive complaint patterns.",
     goals:["Express complaints using passive voice naturally","Describe service-related grievances with passive","Combine passive with ても (even if) and てしまう (regrettably)"]},

    {type:"teach", trg:"無視(むし)される", src:"to be ignored / to be disregarded", pos:"verb", gender:null,
     note:"Passive of 無視(むし)する (to ignore). する-verb to される.\nCommon social complaint.",
     example:"A: メールを送(おく)ったのに無視(むし)されました。\nB: もう一度(いちど)送(おく)ってみたら？\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
     exampleSrc:"A: I sent an email but was ignored.\nB: How about sending it again?\nA: What was it like?\nB: It was much better than I imagined.",
     funFact:"無視される is a powerful social complaint. 無 means 'nothing' and 視 means 'look at,' so ignoring literally means 'looking at nothing.' Being ignored (mushi sareru) is considered one of the worst social offenses in Japan, where acknowledgment and response are deeply valued."},

    {type:"teach", trg:"騙(だま)される", src:"to be deceived / to be tricked", pos:"verb", gender:null,
     note:"Passive of 騙(だま)す (to deceive). Group 1: だます to だまさ + れる.",
     example:"A: 悪質(あくしつ)なサイトに騙(だま)されました。\nB: 気(き)をつけてくださいね。\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
     exampleSrc:"A: I was tricked by a malicious website.\nB: Please be careful.\nA: What did you eat?\nB: I ate the local specialty.",
     funFact:"騙される is increasingly common in discussions about internet fraud (ネット詐欺, netto sagi). Japan has seen a rise in phone scams targeting elderly people (オレオレ詐欺, ore-ore sagi, literally 'it is me, it is me' scam). The passive form emphasizes the victim's innocence."},

    {type:"teach", trg:"嘘(うそ)をつかれる", src:"to be lied to", pos:"verb", gender:null,
     note:"Passive of 嘘(うそ)をつく (to tell a lie). Group 1: つく to つか + れる.\n嘘(うそ) = lie. つく = to tell (a lie).",
     example:"A: 友達(ともだち)に嘘(うそ)をつかれて悲(かな)しかったです。\nB: それはつらいですね。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
     exampleSrc:"A: I was lied to by a friend and felt sad.\nB: That is painful.\nA: That is exciting.\nB: Yes, I am already excited.",
     funFact:"嘘をつかれる splits into 嘘 (lie) + を + つかれる (passive of つく). Being lied to is one of the most hurtful experiences in Japanese social culture, where trust (信頼, shinrai) forms the foundation of relationships. The passive centers the speaker's pain from the betrayal."},

    {type:"teach", trg:"苦情(くじょう)", src:"complaint / grievance", pos:"noun", gender:null,
     note:"Kanji: 苦情. く (suffering) + じょう (feeling/situation).\n苦情(くじょう)を言(い)う = to file a complaint.",
     example:"A: レストランに苦情(くじょう)を言(い)いました。\nB: どんな問題(もんだい)がありましたか？\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
     exampleSrc:"A: I complained to the restaurant.\nB: What was the problem?\nA: That is a nice memory.\nB: Yes, I will never forget it.",
     funFact:"苦情 combines 苦 (suffering) and 情 (emotion/circumstances). Filing complaints is culturally complex in Japan. Direct confrontation is avoided; instead, people often write formal complaints or speak to managers. Consumer complaint centers (消費者センター) handle disputes that individuals cannot resolve alone."},

    {type:"mc", q:"メールを送(おく)ったのに無視(むし)された means:", opts:["I ignored the email","I sent an email but was ignored","I received an email","My email was successful"], ans:"I sent an email but was ignored",
     hint:"のに expresses frustration. The passive 無視(むし)された shows the speaker was the one i...."},

    {type:"teach", trg:"約束(やくそく)を破(やぶ)られる", src:"to have a promise broken", pos:"verb", gender:null,
     note:"Passive: 約束(やくそく) (promise) + を + 破(やぶ)られる (passive of 破(やぶ)る, to break).\nExpresses betrayal.",
     example:"A: 約束(やくそく)を破(やぶ)られて信(しん)じられません。\nB: ひどいですね。\nA: どうでしたか？\nB: とても良(よ)かったです。",
     exampleSrc:"A: I had a promise broken and cannot believe it.\nB: That is terrible.\nA: How was it?\nB: It was very good.",
     funFact:"約束を破る literally means 'to tear a promise.' The passive form puts the speaker as the victim of the broken promise. In Japanese culture, keeping promises (yakusoku wo mamoru) is a matter of personal honor. Breaking one damages trust and reputation significantly."},

    {type:"teach", trg:"間違(まちが)えられる", src:"to be mistaken (for) / to have something confused", pos:"verb", gender:null,
     note:"Passive of 間違(まちが)える (to make a mistake). Group 2: まちがえ + られる.",
     example:"A: 注文(ちゅうもん)を間違(まちが)えられました。\nB: 店(みせ)の人(ひと)に言(い)いましたか？\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
     exampleSrc:"A: My order was mixed up.\nB: Did you tell the staff?\nA: When was it?\nB: It was last summer.",
     funFact:"間違えられる covers service mistakes and identity confusion. Having your order mixed up (chuumon wo machigaerareru) is a mild complaint. Being mistaken for someone else (dareka to machigaerareru) is more awkward. In polite Japan, service mistakes are rare but memorable when they happen."},

    {type:"teach", trg:"邪魔(じゃま)される", src:"to be interrupted / to be disturbed", pos:"verb", gender:null,
     note:"Passive of 邪魔(じゃま)する (to disturb/interrupt). する-verb to される.",
     example:"A: 仕事中(しごとちゅう)に邪魔(じゃま)されて困(こま)りました。\nB: 静(しず)かな場所(ばしょ)でやりましょう。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
     exampleSrc:"A: I was disturbed during work and it was troublesome.\nB: Let us work in a quiet place.\nA: That is nice.\nB: Yes, it was very fun.",
     funFact:"邪魔される combines 邪 (wicked/wrong) and 魔 (demon). Being disturbed or interrupted (jama sareru) during work or study is a common complaint. The word おじゃまします (I am intruding) is the standard phrase said when entering someone's home, acknowledging that you are 'disturbing' their space."},

    {type:"fb", s:"注文(ちゅうもん)を{1}ました。\n(My order was mixed up.)", a:"間違(まちが)えられ", opts:["間違(まちが)えられ","間違(まちが)えて","間違(まちが)い","間違(まちが)った"], sSrc:"My order was mixed up.",
     hint:"The passive of 間違(まちが)える (to make a mistake). Group 2 passive: stem + られる."},

    {type:"teach", trg:"断(ことわ)られる", src:"to be refused / to be rejected", pos:"verb", gender:null,
     note:"Passive of 断(ことわ)る (to refuse). Group 1: ことわる to ことわら + れる.",
     example:"A: お願(ねが)いを断(ことわ)られてしまいました。\nB: 残念(ざんねん)でしたね。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
     exampleSrc:"A: My request was refused.\nB: That is unfortunate.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
     funFact:"断られる is emotionally heavy because Japanese culture values acceptance and accommodation. Being refused (kotowarareru) carries more weight than in Western cultures. Many Japanese people avoid making requests they think might be refused, to spare both parties the discomfort."},

    {type:"teach", trg:"悪質(あくしつ)", src:"malicious / vicious / nasty", pos:"adj", gender:null,
     note:"な-adjective. Kanji: 悪質. あく (bad) + しつ (quality).\n悪質(あくしつ)な詐欺(さぎ) = malicious fraud.",
     example:"A: 悪質(あくしつ)な電話(でんわ)に気(き)をつけてください。\nB: はい、知(し)らない番号(ばんごう)には出(で)ません。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
     exampleSrc:"A: Please be careful of malicious phone calls.\nB: Yes, I do not answer unknown numbers.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
     funFact:"悪質 is a strong descriptor used in news and warnings. Phone scams (電話詐欺) targeting elderly people are a major social issue in Japan. Police stations and banks display warnings about 悪質な詐欺 (malicious fraud). The word implies deliberate ill intent, not mere negligence."},

    {type:"mc", q:"約束(やくそく)を破(やぶ)られた expresses:", opts:["I broke a promise","Someone broke a promise to me","Promises are important","I kept my promise"], ans:"Someone broke a promise to me",
     hint:"The passive voice here marks the speaker as the person who suffered the betrayal, not the one who acted."},

    {type:"tip", title:"Passive Complaints: Indirect Strategy",
     text:"Japanese complaint patterns avoid direct blame:\n\nDirect (blunt): あなたが無視(むし)した (you ignored me)\nPassive (natural): 無視(むし)された (I was ignored)\n\nDirect: あなたが嘘(うそ)をついた (you lied)\nPassive (natural): 嘘(うそ)をつかれた (I was lied to)\n\nThe passive shifts focus from 'you did wrong' to 'I was affected.' This is not weakness but social strategy. It preserves harmony while still expressing grievance.",
     deepDive:{title:"When to Complain in Japan",
      text:"Complaining in Japanese requires skill:\n\n1. Avoid direct accusations. Use passive voice.\n2. Frame as inconvenience, not blame: 困(こま)りました (I was troubled).\n3. Use ちょっと (a little) to soften: ちょっと困(こま)っています.\n4. If formally complaining to a business, use polite passive: 間違(まちが)えられたようですが (it seems my order was mistaken).\n\nThe pattern のに (despite) + passive is the standard complaint formula:\n約束(やくそく)したのに破(やぶ)られた = despite promising, the promise was broken on me."}},

    {type:"match", pairs:[{trg:"無視(むし)される",src:"to be ignored"},{trg:"騙(だま)される",src:"to be tricked"},{trg:"嘘(うそ)をつかれる",src:"to be lied to"},{trg:"苦情(くじょう)",src:"complaint"}]},

    {type:"fb", s:"お願(ねが)いを{1}てしまいました。\n(My request was refused.)", a:"断(ことわ)られ", opts:["断(ことわ)られ","断(ことわ)って","断(ことわ)り","断(ことわ)る"], sSrc:"My request was refused.",
     hint:"The passive of 断(ことわ)る (to refuse). Group 1 passive: あ-row + れる."},

    {type:"match", pairs:[{trg:"約束(やくそく)を破(やぶ)られる",src:"to have a promise broken"},{trg:"間違(まちが)えられる",src:"to have mistaken"},{trg:"邪魔(じゃま)される",src:"to be disturbed"},{trg:"断(ことわ)られる",src:"to be refused"}]},

    {type:"mc", q:"邪魔(じゃま)される means:", opts:["to disturb someone","to be disturbed/interrupted","to invite someone","to be welcomed"], ans:"to be disturbed/interrupted",
     hint:"The passive of 邪魔(じゃま)する (to disturb). The speaker is on the receiving end of the disturbance."},
  {type:"match",pairs:[{trg:"悪質(あくしつ)",src:"malicious / vicious / nasty"}]},
  {type:"fb", s:"お客様(きゃくさま)から{1}が届(とど)きました。", a:["苦情(くじょう)"], opts:["苦情(くじょう)","約束(やくそく)","嘘(うそ)","感謝(かんしゃ)"], hint:"A formal expression of dissatisfaction from a customer.", sSrc:"A {1} arrived from a customer."}
]
};
export default BATCH2_L_2;
