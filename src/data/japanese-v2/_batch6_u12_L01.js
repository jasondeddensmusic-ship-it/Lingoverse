// Batch 6 – Unit 12 (A2.1 Ability & Potential): Sports & Hobbies
const BATCH6_L1 = {
  id:"jav2_u12l_b6_1", title:"スポーツとしゅみ", icon:"⚽", xp:15, board:true,
  steps:[
    {type:"intro", title:"スポーツとしゅみ",
     desc:"Talk about sports, hobbies, and abilities. Learn action verbs for physical activities and practice expressing what you can and cannot do.",
     goals:["Name popular sports and hobbies","Use physical action verbs: ける, なげる, うつ","Express abilities with potential form"]},

    {type:"teach", trg:"ける", src:"to kick", pos:"verb", gender:null,
     note:"Group 1 verb. ボールをける = to kick a ball.\nKanji: 蹴る.",
     example:"A: サッカーでボールをけるのがじょうずですね。\nB: ありがとう。まいにちれんしゅうしています。",
     exampleSrc:"A: You are good at kicking the ball in soccer.\nB: Thanks. I practice every day.",
     funFact:"ける (蹴る) has a strong, forceful image. In martial arts, まわしげり (roundhouse kick) and まえげり (front kick) use this root. Japanese comedian culture uses つっこみ (straight man) who metaphorically 'kicks' the ボケ (funny man). The kanji 蹴 contains 足 (foot)."},

    {type:"teach", trg:"うつ", src:"to hit / to strike", pos:"verb", gender:null,
     note:"Group 1 verb. ボールをうつ = to hit a ball.\nKanji: 打つ. Also: キーボードをうつ = to type.",
     example:"A: やきゅうでボールをうつのはむずかしいですか？\nB: はい、でもれんしゅうすればできます。",
     exampleSrc:"A: Is it hard to hit a ball in baseball?\nB: Yes, but you can do it with practice.",
     funFact:"うつ (打つ) is versatile: hit a ball, type on a keyboard, administer an injection (ちゅうしゃをうつ). In baseball, Japan's national sport alongside sumo, だしゃ (打者, batter) is a key position. ホームランをうつ (to hit a home run) is every baseball fan's dream phrase."},

    {type:"teach", trg:"およぐ", src:"to swim", pos:"verb", gender:null,
     note:"Group 1 verb. プールでおよぐ = to swim in a pool.\nKanji: 泳ぐ.",
     example:"A: およげますか？\nB: はい、こどものときからおよいでいます。",
     exampleSrc:"A: Can you swim?\nB: Yes, I have been swimming since childhood.",
     funFact:"およぐ (泳ぐ) uses the kanji 泳, which contains 永 (eternal, long) and 氵 (water). Swimming is a required subject in Japanese schools. Most schools have outdoor pools. The annual pool-opening ceremony (プールびらき) in June is a summer tradition."},

    {type:"teach", trg:"はしる", src:"to run", pos:"verb", gender:null,
     note:"Group 1 verb. マラソンをはしる = to run a marathon.\nKanji: 走る.",
     example:"A: まいあさはしっていますか？\nB: はい、さんキロくらいはしります。",
     exampleSrc:"A: Do you run every morning?\nB: Yes, I run about 3 kilometers.",
     funFact:"はしる (走る) is one of the most basic motion verbs. Japanese ekiden (駅伝) relay races are hugely popular. The Tokyo Marathon draws over 38,000 runners. School sports days (うんどうかい) always feature はしる events. The kanji 走 depicts a person running."},

    {type:"teach", trg:"なげる", src:"to throw", pos:"verb", gender:null,
     note:"Group 2 verb. ボールをなげる = to throw a ball.\nKanji: 投げる.",
     example:"A: ボールをなげてください。\nB: はい！キャッチしてね。",
     exampleSrc:"A: Please throw the ball.\nB: Okay! Catch it!",
     funFact:"In baseball, the pitcher (ピッチャー/投手 とうしゅ) is the master of なげる. Japanese pitchers like Ohtani Shohei are world-famous. なげだす (throw out/give up) and なげかける (throw at/address someone) are common compound verbs."},

    {type:"mc", q:"およげますか means:", opts:["Can you swim?","Can you run?","Can you kick?","Can you throw?"], ans:"Can you swim?",
     hint:"およぐ means to s.... The potential form adds the ability meaning."},

    {type:"teach", trg:"つる", src:"to fish / to angle", pos:"verb", gender:null,
     note:"Group 1 verb. さかなをつる = to catch fish.\nKanji: 釣る. つり = fishing.",
     example:"A: しゅうまつはつりにいきます。\nB: どこでつりますか？",
     exampleSrc:"A: I am going fishing this weekend.\nB: Where will you fish?",
     funFact:"つり (釣り, fishing) is one of Japan's most popular hobbies. Sea fishing (うみづり), river fishing (かわづり), and fly fishing (フライフィッシング) all have devoted followers. The phrase つりあう (to be balanced) uses the same root, from the balance of a fishing rod."},

    {type:"teach", trg:"えをかく", src:"to draw a picture", pos:"verb", gender:null,
     note:"え = picture, かく = to draw/write. Group 1 verb.\nかく in this sense: 描く.",
     example:"A: えをかくのがすきですか？\nB: はい、すいさいがでけしきをかきます。",
     exampleSrc:"A: Do you like drawing pictures?\nB: Yes, I draw landscapes with watercolors.",
     funFact:"かく means both 'to write' (書く) and 'to draw' (描く). Different kanji, same pronunciation. Japanese art traditions include すみえ (ink painting), まんが (comics), and anime. Many Japanese hobbies involve 手 (hands): おりがみ, しょどう (calligraphy), いけばな (flower arranging)."},

    {type:"teach", trg:"あつめる", src:"to collect / to gather", pos:"verb", gender:null,
     note:"Group 2 verb. きってをあつめる = to collect stamps.\nKanji: 集める.",
     example:"A: なにをあつめていますか？\nB: フィギュアをあつめています。",
     exampleSrc:"A: What do you collect?\nB: I collect figurines.",
     funFact:"あつめる is the heart of Japanese collecting culture (コレクション). From stamps to anime figures, capsule toys (ガチャガチャ) to trading cards, collecting is a national pastime. Akihabara in Tokyo is the world capital of コレクター (collector) culture."},

    {type:"teach", trg:"まける", src:"to lose (a game)", pos:"verb", gender:null,
     note:"Group 2 verb. しあいにまけた = lost the match.\nKanji: 負ける. Opposite: かつ (to win).",
     example:"A: きのうのしあいはまけました。\nB: ざんねんですね。つぎはがんばってください。",
     exampleSrc:"A: We lost yesterday's match.\nB: That is unfortunate. Good luck next time.",
     funFact:"まける (負ける) and かつ (勝つ, to win) are essential sports vocabulary. まけずぎらい (hating to lose) is considered a positive personality trait in Japan, meaning competitive and determined. In sumo, losing means stepping out of the ring (どひょう)."},

    {type:"teach", trg:"かつ", src:"to win", pos:"verb", gender:null,
     note:"Group 1 verb. しあいにかつ = to win a match.\nKanji: 勝つ. かち = victory.",
     example:"A: きょうのしあいにかちましたか？\nB: はい、さんたいにでかちました！",
     exampleSrc:"A: Did you win today's match?\nB: Yes, we won 3 to 2!",
     funFact:"かつ (勝つ) appears in many motivational phrases: かちいくさ (winning battle), かちぐみ (winners' group), and がんばればかてる (if you persevere, you can win). Before exams, Japanese students eat かつどん (pork cutlet bowl) because かつ sounds like 'to win.'"},

    {type:"fb", s:"ボールを{1}のがじょうずですね。\n(You are good at kicking the ball.)", a:"ける", opts:["ける","なげる","うつ","はしる"], sSrc:"You are good at kicking the ball.",
     hint:"This verb specifically means using your foot to strike something."},

    {type:"teach", trg:"どきどきする", src:"to be excited / heart pounding", pos:"verb", gender:null,
     note:"Onomatopoeia + する. どきどき = the sound of a pounding heart.\nUsed for excitement, nervousness, and anticipation.",
     example:"A: しあいのまえはどきどきしますか？\nB: はい、いつもどきどきします。",
     exampleSrc:"A: Do you get nervous before a match?\nB: Yes, my heart always pounds.",
     funFact:"どきどき is a gitaigo (sound-symbolic word) mimicking a heartbeat. Japanese is extraordinarily rich in these: わくわく (excited anticipation), はらはら (anxious suspense), いきいき (full of life). These words add emotional texture that single adjectives cannot achieve."},

    {type:"mc", q:"The opposite of まける (to lose) is:", opts:["かつ (to win)","はしる (to run)","なげる (to throw)","おぼえる (to remember)"], ans:"かつ (to win)",
     hint:"This verb describes achieving victory in a competition."},

    {type:"match", pairs:[
      {trg:"ける", src:"to kick"},
      {trg:"うつ", src:"to hit"},
      {trg:"およぐ", src:"to swim"},
      {trg:"はしる", src:"to run"},
      {trg:"かつ", src:"to win"}
    ]},

    {type:"fb", s:"しあいのまえは{1}します。\n(My heart pounds before a match.)", a:"どきどき", opts:["どきどき","わくわく","いらいら","ぼんやり"], sSrc:"My heart pounds before a match.",
     hint:"This onomatopoeia mimics the sound of a pounding heart."},

    {type:"mc", q:"つり means:", opts:["Fishing","Swimming","Running","Collecting"], ans:"Fishing",
     hint:"This hobby involves catching something from water using a rod."}
  ]
};
export default BATCH6_L1;
