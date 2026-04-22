// Batch 6 – Unit 12 (A2.1 Ability & Potential): Sports & Hobbies
const BATCH6_L1 = {
  id:"jav2_u12l_b6_1", title:"スポーツと趣味(しゅみ)", icon:"⚽", xp:15, board:true,
  steps:[
    {type:"intro", title:"スポーツと趣味(しゅみ)",
     desc:"Talk about sports, hobbies, and abilities. Learn action verbs for physical activities and practice expressing what you can and cannot do.",
     goals:["Name popular sports and hobbies","Use physical action verbs: 蹴(け)る, 投(な)げる, 打(う)つ","Express abilities with potential form"]},

    {type:"teach", trg:"蹴(け)る", src:"to kick", pos:"verb", gender:null,
     note:"Group 1 verb. ボールを蹴(け)る = to kick a ball.\nKanji: 蹴る.",
     example:"A: サッカーでボールを蹴(け)るのが上手(じょうず)ですね。\nB: ありがとう。毎日(まいにち)練習(れんしゅう)しています。",
     exampleSrc:"A: You are good at kicking the ball in soccer.\nB: Thanks. I practice every day.",
     funFact:"蹴(け)る has a strong, forceful image. In martial arts, 回(まわ)し蹴(げ)り (roundhouse kick) and 前蹴(まえげ)り (front kick) use this root. Japanese comedian culture uses 突(つ)っ込(こ)み (straight man) who metaphorically 'kicks' the ボケ (funny man). The kanji 蹴 contains 足(あし) (foot)."},

    {type:"teach", trg:"打(う)つ", src:"to hit / to strike", pos:"verb", gender:null,
     note:"Group 1 verb. ボールを打(う)つ = to hit a ball.\nKanji: 打つ. Also: キーボードを打(う)つ = to type.",
     example:"A: 野球(やきゅう)でボールを打(う)つのは難(むずか)しいですか？\nB: はい、でも練習(れんしゅう)すればできます。",
     exampleSrc:"A: Is it hard to hit a ball in baseball?\nB: Yes, but you can do it with practice.",
     funFact:"打(う)つ is versatile: hit a ball, type on a keyboard, administer an injection (注射(ちゅうしゃ)を打(う)つ). In baseball, Japan's national sport alongside sumo, 打者(だしゃ) (batter) is a key position. ホームランを打(う)つ (to hit a home run) is every baseball fan's dream phrase."},

    {type:"teach", trg:"泳(およ)ぐ", src:"to swim", pos:"verb", gender:null,
     note:"Group 1 verb. プールで泳(およ)ぐ = to swim in a pool.\nKanji: 泳ぐ.",
     example:"A: 泳(およ)げますか？\nB: はい、子(こ)どもの時(とき)から泳(およ)いでいます。",
     exampleSrc:"A: Can you swim?\nB: Yes, I have been swimming since childhood.",
     funFact:"泳(およ)ぐ uses the kanji 泳, which contains 永 (eternal, long) and 氵 (water). Swimming is a required subject in Japanese schools. Most schools have outdoor pools. The annual pool-opening ceremony (プール開(びら)き) in June is a summer tradition."},

    {type:"teach", trg:"走(はし)る", src:"to run", pos:"verb", gender:null,
     note:"Group 1 verb. マラソンを走(はし)る = to run a marathon.\nKanji: 走る.",
     example:"A: 毎朝(まいあさ)走(はし)っていますか？\nB: はい、3キロくらい走(はし)ります。",
     exampleSrc:"A: Do you run every morning?\nB: Yes, I run about 3 kilometers.",
     funFact:"走(はし)る is one of the most basic motion verbs. Japanese 駅伝(えきでん) relay races are hugely popular. The Tokyo Marathon draws over 38,000 runners. School sports days (運動会(うんどうかい)) always feature 走(はし)る events. The kanji 走 depicts a person running."},

    {type:"teach", trg:"投(な)げる", src:"to throw", pos:"verb", gender:null,
     note:"Group 2 verb. ボールを投(な)げる = to throw a ball.\nKanji: 投げる.",
     example:"A: ボールを投(な)げてください。\nB: はい！キャッチしてね。",
     exampleSrc:"A: Please throw the ball.\nB: Okay! Catch it!",
     funFact:"In baseball, the pitcher (ピッチャー/投手(とうしゅ)) is the master of 投(な)げる. Japanese pitchers like 大谷翔平(おおたにしょうへい) are world-famous. 投(な)げ出(だ)す (throw out/give up) and 投(な)げかける (throw at/address someone) are common compound verbs."},

    {type:"mc", q:"泳(およ)げますか means:", opts:["Can you swim?","Can you run?","Can you kick?","Can you throw?"], ans:"Can you swim?",
     hint:"泳(およ)ぐ means to s.... The potential form adds the ability meaning."},

    {type:"teach", trg:"釣(つ)る", src:"to fish / to angle", pos:"verb", gender:null,
     note:"Group 1 verb. 魚(さかな)を釣(つ)る = to catch fish.\nKanji: 釣る. 釣(つ)り = fishing.",
     example:"A: 週末(しゅうまつ)は釣(つ)りに行(い)きます。\nB: どこで釣(つ)りますか？",
     exampleSrc:"A: I am going fishing this weekend.\nB: Where will you fish?",
     funFact:"釣(つ)り (fishing) is one of Japan's most popular hobbies. 海釣(うみづ)り (sea fishing), 川釣(かわづ)り (river fishing), and fly fishing (フライフィッシング) all have devoted followers. The phrase 釣(つ)り合(あ)う (to be balanced) uses the same root, from the balance of a fishing rod."},

    {type:"teach", trg:"絵(え)を描(か)く", src:"to draw a picture", pos:"verb", gender:null,
     note:"絵(え) = picture, 描(か)く = to draw/write. Group 1 verb.\n描(か)く in this sense: 描く.",
     example:"A: 絵(え)を描(か)くのが好(す)きですか？\nB: はい、水彩画(すいさいが)で景色(けしき)を描(か)きます。",
     exampleSrc:"A: Do you like drawing pictures?\nB: Yes, I draw landscapes with watercolors.",
     funFact:"描(か)く means both 'to write' (書(か)く) and 'to draw' (描(か)く). Different kanji, same pronunciation. Japanese art traditions include 墨絵(すみえ) (ink painting), 漫画(まんが) (comics), and anime. Many Japanese hobbies involve 手(て) (hands): 折(お)り紙(がみ), 書道(しょどう) (calligraphy), 生(いけ)け花(ばな) (flower arranging)."},

    {type:"teach", trg:"集(あつ)める", src:"to collect / to gather", pos:"verb", gender:null,
     note:"Group 2 verb. 切手(きって)を集(あつ)める = to collect stamps.\nKanji: 集める.",
     example:"A: 何(なに)を集(あつ)めていますか？\nB: フィギュアを集(あつ)めています。",
     exampleSrc:"A: What do you collect?\nB: I collect figurines.",
     funFact:"集(あつ)める is the heart of Japanese collecting culture (コレクション). From stamps to anime figures, capsule toys (ガチャガチャ) to trading cards, collecting is a national pastime. Akihabara in Tokyo is the world capital of コレクター (collector) culture."},

    {type:"teach", trg:"負(ま)ける", src:"to lose (a game)", pos:"verb", gender:null,
     note:"Group 2 verb. 試合(しあい)に負(ま)けた = lost the match.\nKanji: 負ける. Opposite: 勝(か)つ (to win).",
     example:"A: 昨日(きのう)の試合(しあい)は負(ま)けました。\nB: 残念(ざんねん)ですね。次(つぎ)は頑張(がんば)ってください。",
     exampleSrc:"A: We lost yesterday's match.\nB: That is unfortunate. Good luck next time.",
     funFact:"負(ま)ける and 勝(か)つ (to win) are essential sports vocabulary. 負(ま)けず嫌(ぎら)い (hating to lose) is considered a positive personality trait in Japan, meaning competitive and determined. In sumo, losing means stepping out of the ring (土俵(どひょう))."},

    {type:"teach", trg:"勝(か)つ", src:"to win", pos:"verb", gender:null,
     note:"Group 1 verb. 試合(しあい)に勝(か)つ = to win a match.\nKanji: 勝つ. 勝(か)ち = victory.",
     example:"A: 今日(きょう)の試合(しあい)に勝(か)ちましたか？\nB: はい、3対(たい)2で勝(か)ちました！",
     exampleSrc:"A: Did you win today's match?\nB: Yes, we won 3 to 2!",
     funFact:"勝(か)つ appears in many motivational phrases: 勝(か)ち戦(いくさ) (winning battle), 勝(か)ち組(ぐみ) (winners' group), and 頑張(がんば)れば勝(か)てる (if you persevere, you can win). Before exams, Japanese students eat かつ丼(どん) (pork cutlet bowl) because かつ sounds like 'to win.'"},

    {type:"fb", s:"ボールを{1}のが上手(じょうず)ですね。\n(You are good at kicking the ball.)", a:"蹴(け)る", opts:["蹴(け)る","投(な)げる","打(う)つ","走(はし)る"], sSrc:"You are good at kicking the ball.",
     hint:"This verb specifically means using your foot to strike something."},

    {type:"teach", trg:"どきどきする", src:"to be excited / heart pounding", pos:"verb", gender:null,
     note:"Onomatopoeia + する. どきどき = the sound of a pounding heart.\nUsed for excitement, nervousness, and anticipation.",
     example:"A: 試合(しあい)の前(まえ)はどきどきしますか？\nB: はい、いつもどきどきします。",
     exampleSrc:"A: Do you get nervous before a match?\nB: Yes, my heart always pounds.",
     funFact:"どきどき is a gitaigo (sound-symbolic word) mimicking a heartbeat. Japanese is extraordinarily rich in these: わくわく (excited anticipation), はらはら (anxious suspense), いきいき (full of life). These words add emotional texture that single adjectives cannot achieve."},

    {type:"mc", q:"The opposite of 負(ま)ける (to lose) is:", opts:["覚(おぼ)える (to remember)","勝(か)つ (to win)","走(はし)る (to run)","投(な)げる (to throw)"], ans:"勝(か)つ (to win)",
     hint:"This verb describes achieving victory in a competition."},

    {type:"match", pairs:[
      {trg:"蹴(け)る", src:"to kick"},
      {trg:"打(う)つ", src:"to hit"},
      {trg:"泳(およ)ぐ", src:"to swim"},
      {trg:"走(はし)る", src:"to run"},
      {trg:"勝(か)つ", src:"to win"}
    ]},

    {type:"fb", s:"試合(しあい)の前(まえ)は{1}します。\n(My heart pounds before a match.)", a:"どきどき", opts:["どきどき","わくわく","いらいら","ぼんやり"], sSrc:"My heart pounds before a match.",
     hint:"This onomatopoeia mimics the sound of a pounding heart."},

    {type:"mc", q:"釣(つ)り means:", opts:["Running","Collecting","Fishing","Swimming"], ans:"Fishing",
     hint:"This hobby involves catching something from water using a rod."}
  ,{type:"match",pairs:[{trg:"釣(つ)る",src:"to fish / to angle"},{trg:"絵(え)を描(か)く",src:"to draw a picture"},{trg:"集(あつ)める",src:"to collect / to gather"},{trg:"負(ま)ける",src:"to lose (a game)"}]},
  {type:"fb", s:"バスに乗(の)り遅(おく)れないように全力(ぜんりょく)で{1}ました。", a:["走(はし)る"], opts:["走(はし)る","蹴(け)る","泳(およ)ぐ","投(な)げる"], hint:"The verb for moving on foot at speed.", sSrc:"I {1} at full speed so as not to miss the bus."}
]
};
export default BATCH6_L1;
