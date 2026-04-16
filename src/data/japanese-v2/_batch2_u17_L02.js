// Unit 17 Batch 2 Lesson 2: くじょうのうけみ (Passive in Complaints)
const BATCH2_L_2 = {
  id:"jav2_u17l_b2_2", title:"くじょうのうけみ", icon:"😤", xp:15, board:true,
  steps:[
    {type:"intro", title:"くじょうのうけみ",
     desc:"Japanese people often frame complaints using passive voice. Instead of blaming directly, they describe how they were affected. Learn to express dissatisfaction about noise, service, and social situations using natural passive complaint patterns.",
     goals:["Express complaints using passive voice naturally","Describe service-related grievances with passive","Combine passive with ても (even if) and てしまう (regrettably)"]},

    {type:"teach", trg:"むしされる", src:"to be ignored / to be disregarded", pos:"verb", gender:null,
     note:"Passive of むしする (to ignore). する-verb to される.\nKanji: 無視される. Common social complaint.",
     example:"A: メールをおくったのにむしされました。\nB: もういちどおくってみたら？",
     exampleSrc:"A: I sent an email but was ignored.\nB: How about sending it again?",
     funFact:"無視される is a powerful social complaint. 無 means 'nothing' and 視 means 'look at,' so ignoring literally means 'looking at nothing.' Being ignored (mushi sareru) is considered one of the worst social offenses in Japan, where acknowledgment and response are deeply valued."},

    {type:"teach", trg:"だまされる", src:"to be deceived / to be tricked", pos:"verb", gender:null,
     note:"Passive of だます (to deceive). Group 1: だます to だまさ + れる.\nKanji: 騙される.",
     example:"A: あくしつなサイトにだまされました。\nB: きをつけてくださいね。",
     exampleSrc:"A: I was tricked by a malicious website.\nB: Please be careful.",
     funFact:"騙される is increasingly common in discussions about internet fraud (ネット詐欺, netto sagi). Japan has seen a rise in phone scams targeting elderly people (オレオレ詐欺, ore-ore sagi, literally 'it is me, it is me' scam). The passive form emphasizes the victim's innocence."},

    {type:"teach", trg:"うそをつかれる", src:"to be lied to", pos:"verb", gender:null,
     note:"Passive of うそをつく (to tell a lie). Group 1: つく to つか + れる.\nうそ = lie. つく = to tell (a lie).",
     example:"A: ともだちにうそをつかれてかなしかったです。\nB: それはつらいですね。",
     exampleSrc:"A: I was lied to by a friend and felt sad.\nB: That is painful.",
     funFact:"うそをつかれる splits into うそ (lie) + を + つかれる (passive of つく). Being lied to is one of the most hurtful experiences in Japanese social culture, where trust (信頼, shinrai) forms the foundation of relationships. The passive centers the speaker's pain from the betrayal."},

    {type:"teach", trg:"くじょう", src:"complaint / grievance", pos:"noun", gender:null,
     note:"Kanji: 苦情. く (suffering) + じょう (feeling/situation).\nくじょうをいう = to file a complaint.",
     example:"A: レストランにくじょうをいいました。\nB: どんなもんだいがありましたか？",
     exampleSrc:"A: I complained to the restaurant.\nB: What was the problem?",
     funFact:"苦情 combines 苦 (suffering) and 情 (emotion/circumstances). Filing complaints is culturally complex in Japan. Direct confrontation is avoided; instead, people often write formal complaints or speak to managers. Consumer complaint centers (消費者センター) handle disputes that individuals cannot resolve alone."},

    {type:"mc", q:"メールをおくったのにむしされた means:", opts:["I ignored the email","I sent an email but was ignored","I received an email","My email was successful"], ans:"I sent an email but was ignored",
     hint:"のに expresses frustration. The passive むしされた shows the speaker was the one i...."},

    {type:"teach", trg:"やくそくをやぶられる", src:"to have a promise broken", pos:"verb", gender:null,
     note:"Passive: やくそく (promise) + を + やぶられる (passive of やぶる, to break).\nExpresses betrayal.",
     example:"A: やくそくをやぶられてしんじられません。\nB: ひどいですね。",
     exampleSrc:"A: I had a promise broken and cannot believe it.\nB: That is terrible.",
     funFact:"やくそくをやぶる literally means 'to tear a promise.' The passive form puts the speaker as the victim of the broken promise. In Japanese culture, keeping promises (yakusoku wo mamoru) is a matter of personal honor. Breaking one damages trust and reputation significantly."},

    {type:"teach", trg:"まちがえられる", src:"to be mistaken (for) / to have something confused", pos:"verb", gender:null,
     note:"Passive of まちがえる (to make a mistake). Group 2: まちがえ + られる.\nKanji: 間違えられる.",
     example:"A: ちゅうもんをまちがえられました。\nB: みせのひとにいいましたか？",
     exampleSrc:"A: My order was mixed up.\nB: Did you tell the staff?",
     funFact:"間違えられる covers service mistakes and identity confusion. Having your order mixed up (chuumon wo machigaerareru) is a mild complaint. Being mistaken for someone else (dareka to machigaerareru) is more awkward. In polite Japan, service mistakes are rare but memorable when they happen."},

    {type:"teach", trg:"じゃまされる", src:"to be interrupted / to be disturbed", pos:"verb", gender:null,
     note:"Passive of じゃまする (to disturb/interrupt). する-verb to される.\nKanji: 邪魔される.",
     example:"A: しごとちゅうにじゃまされてこまりました。\nB: しずかなばしょでやりましょう。",
     exampleSrc:"A: I was disturbed during work and it was troublesome.\nB: Let us work in a quiet place.",
     funFact:"邪魔される combines 邪 (wicked/wrong) and 魔 (demon). Being disturbed or interrupted (jama sareru) during work or study is a common complaint. The word おじゃまします (I am intruding) is the standard phrase said when entering someone's home, acknowledging that you are 'disturbing' their space."},

    {type:"fb", s:"ちゅうもんを{1}ました。\n(My order was mixed up.)", a:"まちがえられ", opts:["まちがえられ","まちがえて","まちがい","まちがった"], sSrc:"My order was mixed up.",
     hint:"The passive of まちがえる (to make a mistake). Group 2 passive: stem + られる."},

    {type:"teach", trg:"ことわられる", src:"to be refused / to be rejected", pos:"verb", gender:null,
     note:"Passive of ことわる (to refuse). Group 1: ことわる to ことわら + れる.\nKanji: 断られる.",
     example:"A: おねがいをことわられてしまいました。\nB: ざんねんでしたね。",
     exampleSrc:"A: My request was refused.\nB: That is unfortunate.",
     funFact:"断られる is emotionally heavy because Japanese culture values acceptance and accommodation. Being refused (kotowarareru) carries more weight than in Western cultures. Many Japanese people avoid making requests they think might be refused, to spare both parties the discomfort."},

    {type:"teach", trg:"あくしつ", src:"malicious / vicious / nasty", pos:"adj", gender:null,
     note:"な-adjective. Kanji: 悪質. あく (bad) + しつ (quality).\nあくしつなサギ = malicious fraud.",
     example:"A: あくしつなでんわにきをつけてください。\nB: はい、しらないばんごうにはでません。",
     exampleSrc:"A: Please be careful of malicious phone calls.\nB: Yes, I do not answer unknown numbers.",
     funFact:"悪質 is a strong descriptor used in news and warnings. Phone scams (電話詐欺) targeting elderly people are a major social issue in Japan. Police stations and banks display warnings about 悪質な詐欺 (malicious fraud). The word implies deliberate ill intent, not mere negligence."},

    {type:"mc", q:"やくそくをやぶられた expresses:", opts:["I broke a promise","Someone broke a promise to me","Promises are important","I kept my promise"], ans:"Someone broke a promise to me",
     hint:"The passive puts the speaker as the victim. やぶられる = having something broken on you."},

    {type:"tip", title:"Passive Complaints: Indirect Strategy",
     text:"Japanese complaint patterns avoid direct blame:\n\nDirect (blunt): あなたがむしした (you ignored me)\nPassive (natural): むしされた (I was ignored)\n\nDirect: あなたがうそをついた (you lied)\nPassive (natural): うそをつかれた (I was lied to)\n\nThe passive shifts focus from 'you did wrong' to 'I was affected.' This is not weakness but social strategy. It preserves harmony while still expressing grievance.",
     deepDive:{title:"When to Complain in Japan",
      text:"Complaining in Japanese requires skill:\n\n1. Avoid direct accusations. Use passive voice.\n2. Frame as inconvenience, not blame: こまりました (I was troubled).\n3. Use ちょっと (a little) to soften: ちょっとこまっています.\n4. If formally complaining to a business, use polite passive: まちがえられたようですが (it seems my order was mistaken).\n\nThe pattern のに (despite) + passive is the standard complaint formula:\nやくそくしたのにやぶられた = despite promising, the promise was broken on me."}},

    {type:"match", pairs:[{trg:"むしされる",src:"to be ignored"},{trg:"だまされる",src:"to be tricked"},{trg:"うそをつかれる",src:"to be lied to"},{trg:"くじょう",src:"complaint"}]},

    {type:"fb", s:"おねがいを{1}てしまいました。\n(My request was refused.)", a:"ことわられ", opts:["ことわられ","ことわって","ことわり","ことわる"], sSrc:"My request was refused.",
     hint:"The passive of ことわる (to refuse). Group 1 passive: あ-row + れる."},

    {type:"match", pairs:[{trg:"やくそくをやぶられる",src:"to have a promise broken"},{trg:"まちがえられる",src:"to have mistaken"},{trg:"じゃまされる",src:"to be disturbed"},{trg:"ことわられる",src:"to be refused"}]},

    {type:"mc", q:"じゃまされる means:", opts:["to disturb someone","to be disturbed/interrupted","to invite someone","to be welcomed"], ans:"to be disturbed/interrupted",
     hint:"The passive of じゃまする (to disturb). The speaker is on the receiving end of the disturbance."},
  ]
};
export default BATCH2_L_2;
