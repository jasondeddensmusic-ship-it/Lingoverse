// Japanese V2 Unit 15. 方向(ほうこう) (Directions & Movement)
import BATCH11_L1 from './_batch11_u15_L01.js';
import BATCH10_L1 from './_batch10_u15_L01.js';
import BATCH9_L1 from './_batch9_u15_L01.js';
import BATCH7_L1 from './_batch7_u15_L01.js';
import BATCH8_L1 from './_batch8_u15_L01.js';
import BATCH6_L1 from './_batch6_u15_L01.js';
import BATCH4_L02 from './_batch4_u15_L02.js';
import BATCH4_L01 from './_batch4_u15_L01.js';
import BATCH2_L1 from './_batch2_u15_L01.js';
// Level: A2.2. JLPT N4 aligned.
import JEXP_15_L1 from './_temp_u15_expand_L01.js';import JEXP_15_L2 from './_temp_u15_expand_L02.js';import JEXP_15_L3 from './_temp_u15_expand_L03.js';
// Directions, before/after, while doing, transport vocabulary.

const UNIT_15 = {
  n:15, lang:"ja", srcLang:"en", track:"v2",
  title:"方向(ほうこう)", sub:"Directions & Movement",
  icon:"🧭", level:"A2.2", color:"#7B5EE8",
  lessons:[

// ═══ L1: 道(みち)を聞(き)く (Asking for Directions) ═══
{id:"jav2_u15l1", title:"道(みち)を聞(き)く", icon:"🗺️", xp:15, board:true, steps:[
  {type:"intro", title:"道(みち)を聞(き)く",
   desc:"Navigate Japanese streets and stations with confidence. Learn direction words, how to give and follow simple directions, and essential transport vocabulary for getting around.",
   goals:["Use direction words: right, left, straight, turn, cross","Ask for and understand simple directions","Learn transport vocabulary: ticket, transfer, platform"]},

  {type:"teach", trg:"右(みぎ)", src:"right", pos:"noun", gender:null,
   note:"Direction word. 右(みぎ)に = to the right. 右側(みぎがわ) = right side.\nKanji: 右.",
   example:"A: 次(つぎ)の角(かど)を右(みぎ)に曲(ま)がってください。\nB: 右(みぎ)ですね。分(わ)かりました。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
   exampleSrc:"A: Please turn right at the next corner.\nB: Right, got it.\nA: Who did you go with?\nB: I went with a friend.",
   funFact:"右 shows a hand (又) reaching toward the mouth (口), since most people eat with their right hand. In Japanese culture, right is considered the auspicious side. Bowing etiquette, seating arrangements, and gift-giving all have right-side conventions."},

  {type:"teach", trg:"左(ひだり)", src:"left", pos:"noun", gender:null,
   note:"Direction word. 左(ひだり)に = to the left. 左側(ひだりがわ) = left side.\nKanji: 左.",
   example:"A: 駅(えき)はどこですか？\nB: 左(ひだり)に曲(ま)がると、駅(えき)があります。\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
   exampleSrc:"A: Where is the station?\nB: If you turn left, there is the station.\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
   funFact:"左 shows a hand (ナ) holding a carpenter's square (工). In old Japan, left was associated with higher rank. The word hidari-kiki (left-handed) uses the same kanji. About 10% of Japanese people are left-handed, similar to global averages."},

  {type:"teach", trg:"まっすぐ", src:"straight ahead", pos:"adv", gender:null,
   note:"Go straight without turning. まっすぐ行(い)く = go straight.\nWritten in hiragana typically.",
   example:"A: この道(みち)をまっすぐ行(い)ってください。\nB: どのくらいですか？\nA: 五分(ごふん)くらいです。\nB: 分(わ)かりました。ありがとうございます。",
   exampleSrc:"A: Please go straight on this road.\nB: How far is it?\nA: About five minutes.\nB: I understand. Thank you.",
   funFact:"まっすぐ doubles the っ for emphasis, making it sound crisp and decisive. It also means 'honest' or 'upright' when describing personality: まっすぐな人(ひと) (a straightforward person). Japanese streets rarely follow a grid, so まっすぐ often means 'follow the road.'"},

  {type:"teach", trg:"曲(ま)がる", src:"to turn", pos:"verb", gender:null,
   note:"Group 1 verb. 右(みぎ)に曲(ま)がる = turn right. 左(ひだり)に曲(ま)がる = turn left.\nKanji: 曲がる.",
   example:"A: 信号(しんごう)を右(みぎ)に曲(ま)がってください。\nB: はい、右(みぎ)ですね。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
   exampleSrc:"A: Please turn right at the traffic light.\nB: Yes, right.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
   funFact:"曲がる also means 'to bend' or 'to curve.' A 曲(ま)がった道(みち) is a winding road. The kanji 曲 represents something curved or bent. In music, 曲 (kyoku) means a musical piece or tune, showing its range of meanings."},

  {type:"mc", q:"右(みぎ)に曲(ま)がってください means:", opts:["Please turn right","Please go straight","Please turn left","Please stop"], ans:"Please turn right",
   hint:"Migi is the direction word for the hand most people write with."},

  {type:"teach", trg:"渡(わた)る", src:"to cross", pos:"verb", gender:null,
   note:"Group 1 verb. Used for crossing roads, bridges, intersections.\nKanji: 渡る.",
   example:"A: この橋(はし)を渡(わた)ってください。\nB: 橋(はし)のあとは？\nA: まっすぐ行(い)ってください。\nB: はい、分(わ)かりました。",
   exampleSrc:"A: Please cross this bridge.\nB: After the bridge?\nA: Please go straight.\nB: Yes, I understand.",
   funFact:"渡る combines water (氵) and degree/crossing (度). It literally suggests crossing over water. Beyond roads and bridges, wataru also means 'to hand over' (watasu, the transitive form) and appears in 'migratory birds' (wataridori)."},

  {type:"teach", trg:"信号(しんごう)", src:"traffic light", pos:"noun", gender:null,
   note:"An important landmark for directions. 'At the traffic light' = 信号(しんごう)のところで.\nKanji: 信号.",
   example:"A: 信号(しんごう)を渡(わた)ってまっすぐ行(い)ってください。\nB: ありがとうございます。\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
   exampleSrc:"A: Cross at the traffic light and go straight.\nB: Thank you.\nA: I am also interested.\nB: Then, how about doing it together next time?",
   funFact:"Japanese traffic lights use the word あお (blue) for the green light, even though modern lights are green. This is because historically, Japanese used あお for both blue and green. The 'green' light is still officially called あおしんごう (blue signal)."},

  {type:"fb", s:"次(つぎ)の角(かど)を{1}に曲(ま)がってください。\n(Please turn left at the next corner.)", a:"左(ひだり)", opts:["左(ひだり)","右(みぎ)","まっすぐ","後(うし)ろ"], sSrc:"Please turn left at the next corner.",
   hint:"The direction word for the opposite side of right."},

  {type:"teach", trg:"切符(きっぷ)", src:"ticket", pos:"noun", gender:null,
   note:"Paper ticket for trains, buses, events. Also called チケット (from English).\nKanji: 切符.",
   example:"A: 切符(きっぷ)はどこで買(か)いますか？\nB: あの機械(きかい)で買(か)います。\nA: どんな感(かん)じでしたか？\nB: 想像(そうぞう)していたよりずっと良(よ)かったです。",
   exampleSrc:"A: Where do you buy tickets?\nB: You buy them at that machine.\nA: What was it like?\nB: It was much better than I imagined.",
   funFact:"切符 combines 切 (cut) and 符 (token), from the era when tickets were torn in half for verification. IC cards (Suica, Pasmo) have largely replaced paper tickets in cities, but きっぷ remains essential for long-distance trains and rural areas."},

  {type:"teach", trg:"乗(の)り換(か)え", src:"transfer (between trains/buses)", pos:"noun", gender:null,
   note:"乗(の)り換(か)える (verb) = to transfer. 乗(の)り換(か)え (noun) = a transfer.\nKanji: 乗り換え.",
   example:"A: 渋谷(しぶや)で乗(の)り換(か)えてください。\nB: 何番線(なんばんせん)ですか？\nA: 何(なに)を食(た)べましたか？\nB: 地元(じもと)の名物(めいぶつ)を食(た)べました。",
   exampleSrc:"A: Please transfer at Shibuya.\nB: What platform number?\nA: What did you eat?\nB: I ate the local specialty.",
   funFact:"乗り換え combines 乗り (ride) and 換え (change). Tokyo's train system requires frequent transfers. Station signs helpfully show のりかえ information in multiple languages. The average Tokyo commuter makes 1-2 transfers per trip. Navigation apps have made this much easier."},

  {type:"teach", trg:"乗(の)り場(ば)", src:"platform / boarding area", pos:"noun", gender:null,
   note:"乗(の)る (to ride) + 場(ば) (place). The place where you board.\nKanji: 乗り場.",
   example:"A: バス乗(の)り場(ば)はどこですか？\nB: 駅(えき)の前(まえ)にあります。\nA: 楽(たの)しみですね。\nB: はい、今(いま)からわくわくしています。",
   exampleSrc:"A: Where is the bus stop/platform?\nB: It is in front of the station.\nA: That is exciting.\nB: Yes, I am already excited.",
   funFact:"乗り場 is a general term for any boarding area: バス乗り場 (bus stop), タクシー乗り場 (taxi stand), 船乗(ふなの)り場(ば) (boat dock). The 場 suffix meaning 'place' appears in many words: 庭(にわ) (garden), 遊(あそ)び場(ば) (playground), 市場(いちば) (market)."},

  {type:"mc", q:"乗(の)り換(か)え means:", opts:["a ticket","a transfer","a platform","an exit"], ans:"a transfer",
   hint:"The noun for changing from one train or bus line to another."},

  {type:"match", pairs:[{trg:"右(みぎ)",src:"right"},{trg:"左(ひだり)",src:"left"},{trg:"まっすぐ",src:"straight"},{trg:"曲(ま)がる",src:"to turn"}]},

  {type:"match", pairs:[{trg:"渡(わた)る",src:"to cross"},{trg:"切符(きっぷ)",src:"ticket"},{trg:"乗(の)り換(か)え",src:"transfer"},{trg:"乗(の)り場(ば)",src:"platform"}]},

  {type:"fb", s:"この橋(はし)を{1}ください。\n(Please cross this bridge.)", a:"渡(わた)って", opts:["渡(わた)って","曲(ま)がって","歩(ある)いて","乗(の)って"], sSrc:"Please cross this bridge.",
   hint:"The て-form of the verb meaning 'to cross' roads, bridges, etc."},

  {type:"mc", q:"信号(しんごう) means:", opts:["corner","bridge","traffic light","station"], ans:"traffic light",
   hint:"The device at intersections that shows red, yellow, and green lights."},
]},

// ═══ L2: 前(まえ)に と 後(あと)で (Before & After) ═══
{id:"jav2_u15l2", title:"前(まえ)にと後(あと)で", icon:"⏰", xp:15, board:true, steps:[
  {type:"intro", title:"前(まえ)にと後(あと)で",
   desc:"Learn to sequence events in time with まえに (before doing) and あとで (after doing). You will also learn ながら (while doing two things at once), which adds a simultaneous action layer to your Japanese.",
   goals:["Use verb (dictionary form) + 前(まえ)に for 'before doing'","Use verb (た-form) + 後(あと)で for 'after doing'","Use verb (stem) + ながら for 'while doing'"]},

  {type:"teach", trg:"〜前(まえ)に", src:"before doing ~", pos:"part", gender:null,
   note:"Dictionary form + 前(まえ)に = before doing.\n食(た)べる前(まえ)に = before eating.",
   example:"A: 寝(ね)る前(まえ)に何(なに)をしますか？\nB: 歯(は)を磨(みが)きます。\nA: いい思(おも)い出(で)ですね。\nB: はい、一生(いっしょう)忘(わす)れません。",
   exampleSrc:"A: What do you do before sleeping?\nB: I brush my teeth.\nA: That is a nice memory.\nB: Yes, I will never forget it.",
   funFact:"まえに uses the dictionary (plain present) form, not the past form. This makes sense: the action has not happened yet, so it takes the non-past. Compare this with あとで, which uses the past form because the first action is already completed."},

  {type:"teach", trg:"〜後(あと)で", src:"after doing ~", pos:"part", gender:null,
   note:"た-form + 後(あと)で = after doing.\n食(た)べた後(あと)で = after eating.",
   example:"A: ご飯(はん)を食(た)べた後(あと)で散歩(さんぽ)します。\nB: いい習慣(しゅうかん)ですね。\nA: どうでしたか？\nB: とても良(よ)かったです。",
   exampleSrc:"A: I take a walk after eating dinner.\nB: That is a good habit.\nA: How was it?\nB: It was very good.",
   funFact:"あとで uses the past (た) form because the first action is completed before the second begins. The logic is: 'having done X, then Y.' You will also hear あとに, which has a slightly tighter time connection. Both are natural and common."},

  {type:"teach", trg:"〜ながら", src:"while doing ~", pos:"part", gender:null,
   note:"Verb stem + ながら = while doing simultaneously.\n食(た)べながら = while eating.",
   example:"A: 音楽(おんがく)を聞(き)きながら勉強(べんきょう)します。\nB: 集中(しゅうちゅう)できますか？\nA: いつですか？\nB: 去年(きょねん)の夏(なつ)でした。",
   exampleSrc:"A: I study while listening to music.\nB: Can you concentrate?\nA: When was it?\nB: It was last summer.",
   funFact:"ながら requires the verb stem (remove ます from the polite form): 食(た)べ+ながら, 飲(の)み+ながら, 歩(ある)き+ながら. The main action comes at the end of the sentence, and the ながら action is secondary. Walking while talking: 話(はな)しながら歩(ある)く."},

  {type:"mc", q:"寝(ね)る前(まえ)に means:", opts:["before sleeping","while sleeping","after sleeping","I want to sleep"], ans:"before sleeping",
   hint:"Dictionary form + 前(まえ)に = b... performing the action."},

  {type:"teach", trg:"歯(は)を磨(みが)く", src:"to brush teeth", pos:"verb", gender:null,
   note:"歯(は) (teeth) + を + 磨(みが)く (to polish/brush). A daily routine verb.\nKanji: 歯を磨く.",
   example:"A: 朝(あさ)ご飯(はん)の前(まえ)に歯(は)を磨(みが)きますか？\nB: いいえ、後(あと)で磨(みが)きます。\nA: それはいいですね。\nB: はい、とても楽(たの)しかったです。",
   exampleSrc:"A: Do you brush your teeth before breakfast?\nB: No, I brush them after.\nA: That is nice.\nB: Yes, it was very fun.",
   funFact:"In Japan, many people brush their teeth after every meal, not just morning and night. Office workers often keep a toothbrush at their desk. School children brush after lunch. The level of dental hygiene awareness is remarkably high."},

  {type:"teach", trg:"シャワーを浴(あ)びる", src:"to take a shower", pos:"verb", gender:null,
   note:"シャワー (shower, from English) + を + 浴(あ)びる (to bathe in/be showered with).\nGroup 2 verb.",
   example:"A: シャワーを浴(あ)びた後(あと)で寝(ね)ます。\nB: 私(わたし)もそうです。\nA: そうですか。よかったですね。\nB: はい、いい経験(けいけん)でした。",
   exampleSrc:"A: I sleep after taking a shower.\nB: I do too.\nA: Is that so? That is good.\nB: Yes, it was a good experience.",
   funFact:"浴びる means 'to be bathed in' something. It works for showers (シャワーを浴びる), sunlight (日(ひ)を浴(あ)びる), and even criticism (批判(ひはん)を浴(あ)びる). Most Japanese households have a separate bath and shower area, and soaking in the tub (お風呂(ふろ)に入(はい)る) is the evening tradition."},

  {type:"teach", trg:"歩(ある)く", src:"to walk", pos:"verb", gender:null,
   note:"Group 1 verb. 歩(ある)いて = て-form. Used for walking as transport.\nKanji: 歩く.",
   example:"A: 駅(えき)まで歩(ある)きながら話(はな)しましょう。\nB: いいですね。\nA: また行(い)きたいですか？\nB: はい、ぜひ行(い)きたいです。",
   exampleSrc:"A: Let us talk while walking to the station.\nB: Sounds good.\nA: Do you want to go again?\nB: Yes, I definitely want to go.",
   funFact:"歩く shows the kanji 歩 (step), which depicts two feet alternating. Walking culture is strong in Japan: most people walk 7,000-10,000 steps daily. 歩(ある)きスマホ (walking while looking at your phone) has become a social issue, with warning signs in many stations."},

  {type:"fb", s:"ご飯(はん)を食(た)べた{1}で散歩(さんぽ)します。\n(I take a walk after eating.)", a:"後(あと)", opts:["後(あと)","前(まえ)","間(あいだ)","時(とき)"], sSrc:"I take a walk after eating.",
   hint:"The word meaning 'after' that follows the た-form."},

  {type:"teach", trg:"出(で)かける", src:"to go out / to leave", pos:"verb", gender:null,
   note:"Group 2 verb. More specific than 行(い)く. Means leaving home or your current location.\nKanji: 出かける.",
   example:"A: 出(で)かける前(まえ)に窓(まど)を閉(し)めてください。\nB: はい、分(わ)かりました。\nA: どのくらいかかりましたか？\nB: だいたい二時間(にじかん)ぐらいです。",
   exampleSrc:"A: Please close the windows before going out.\nB: Yes, understood.\nA: How long did it take?\nB: About two hours.",
   funFact:"出かける is the combination of 出 (go out) and かける (to set out). It specifically means leaving a location, not just 'going.' When your family asks いまから出(で)かける？(Are you going out now?), they mean leaving the house. It implies a purposeful departure."},

  {type:"teach", trg:"着(つ)く", src:"to arrive", pos:"verb", gender:null,
   note:"Group 1 verb. Place + に + 着(つ)く = arrive at a place.\nKanji: 着く.",
   example:"A: 駅(えき)に着(つ)いた後(あと)で連絡(れんらく)します。\nB: お願(ねが)いします。\nA: 難(むずか)しかったですか？\nB: 最初(さいしょ)は難(むずか)しかったですが、慣(な)れました。",
   exampleSrc:"A: I will contact you after arriving at the station.\nB: Please do.\nA: Was it difficult?\nB: It was difficult at first, but I got used to it.",
   funFact:"着く also means 'to stick to' or 'to be attached.' The kanji 着 appears in 着(き)る (to wear, for upper body), 着物(きもの) (kimono, literally 'thing to wear'), and 到着(とうちゃく) (arrival). At train stations, 到着 is displayed on departure boards."},

  {type:"mc", q:"音楽(おんがく)を聞(き)きながら勉強(べんきょう)する means:", opts:["Study then listen to music","Study while listening to music","Study before listening to music","Study instead of listening to music"], ans:"Study while listening to music",
   hint:"ながら connects two actions happening at the same time."},

  {type:"match", pairs:[{trg:"前(まえ)に",src:"before"},{trg:"後(あと)で",src:"after"},{trg:"ながら",src:"while"},{trg:"歩(ある)く",src:"to walk"}]},

  {type:"match", pairs:[{trg:"歯(は)を磨(みが)く",src:"brush teeth"},{trg:"シャワーを浴(あ)びる",src:"take a shower"},{trg:"出(で)かける",src:"go out"},{trg:"着(つ)く",src:"to arrive"}]},

  {type:"fb", s:"音楽(おんがく)を聞(き)き{1}勉強(べんきょう)します。\n(I study while listening to music.)", a:"ながら", opts:["ながら","前(まえ)に","後(あと)で","間(あいだ)"], sSrc:"I study while listening to music.",
   hint:"The pattern for doing two things simultaneously, attached to the verb stem."},

  {type:"mc", q:"出(で)かける前(まえ)に窓(まど)を閉(し)める means:", opts:["Close windows after going out","Open windows before going out","Close windows before going out","Close windows while going out"], ans:"Close windows before going out",
   hint:"Dictionary form + 前(まえ)に means 'b... doing' the action."},

  {type:"tip", title:"Time Sequence Patterns",
   text:"Before: dictionary form + 前(まえ)に\n寝(ね)る前(まえ)に (before sleeping)\n食(た)べる前(まえ)に (before eating)\n\nAfter: た-form + 後(あと)で\n寝(ね)た後(あと)で (after sleeping)\n食(た)べた後(あと)で (after eating)\n\nWhile: verb stem + ながら\n食(た)べながら (while eating)\n歩(ある)きながら (while walking)\n\nThe main action goes at the end of the sentence.",
   deepDive:{title:"ながら nuance",
    text:"ながら implies the second verb is the main action:\nテレビを見(み)ながら食(た)べる = Eat while watching TV (eating is main)\n食(た)べながらテレビを見(み)る = Watch TV while eating (watching is main)\n\nながら can sometimes express contrast, similar to 'although':\n知(し)っていながら言(い)わない = Although knowing, not say it.\nThis usage is more advanced and literary, but good to recognize."}},
{type:"match",pairs:[{trg:"信号(しんごう)",src:"traffic light"}]},
  {type:"fb", s:"次(つぎ)の{1}で止(と)まってください。\n(Please stop at the next traffic light.)", a:"信号(しんごう)", opts:["信号(しんごう)","切符(きっぷ)","右(みぎ)","左(ひだり)"], sSrc:"Please stop at the next traffic light.",
   hint:"The device on a pole that shows red, yellow, and green."}]},

,BATCH2_L1
,BATCH4_L01
,BATCH4_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1

// ═══ L_N4_EXPAND: 借(か)りる・返(かえ)す (Borrowing, Lending & Natural Places) ═══
,{id:"jav2_u15l_n4_expand", title:"借(か)りる・返(かえ)す", icon:"🌊", xp:20, board:true, steps:[
  {type:"intro", title:"借(か)りる・返(かえ)す",
   desc:"Master nine essential N4 words: the borrow/lend/return verb triad, paying for things, staying overnight, and Japan's iconic natural landscapes.",
   goals:["Use 借りる, 貸す, 返す correctly for borrowing and lending","Express staying overnight and paying","Name key natural features: sea, mountain, road, bridge"]},

  {type:"teach", trg:"道(みち)", src:"road / street / path", pos:"noun", gender:null,
   note:"Any road, path, or route. 道(みち)を渡(わた)る = cross the road. 道(みち)を聞(き)く = ask for directions.",
   example:"A: この道(みち)をまっすぐ行(い)くと駅(えき)に着(つ)きますか？\nB: はい、五分(ごふん)で着(つ)きます。",
   exampleSrc:"A: If I go straight down this road, will I arrive at the station?\nB: Yes, you will arrive in five minutes.",
   funFact:"道 is one of Japan's most culturally loaded words. Do (michi read as do) also appears in martial arts: judo (柔道), kendo (剣道), judo (柔道). The concept of a way or path as a discipline for self-improvement is deeply embedded in Japanese culture."},

  {type:"teach", trg:"橋(はし)", src:"bridge", pos:"noun", gender:null,
   note:"Any bridge over water or a gap. 橋(はし)を渡(わた)る = cross a bridge.\nKanji: 橋.",
   example:"A: あの橋(はし)を渡(わた)ると、駅(えき)が見(み)えます。\nB: きれいな橋(はし)ですね。",
   exampleSrc:"A: Once you cross that bridge, you can see the station.\nB: What a beautiful bridge.",
   funFact:"Japan has over 700,000 bridges, more than any other country. Famous examples include the Akashi Kaikyo Bridge (the world's longest suspension bridge) and the ornate wooden bridges of Kyoto's temple gardens. The word hashi also means chopsticks, written differently."},

  {type:"teach", trg:"海(うみ)", src:"sea / ocean", pos:"noun", gender:null,
   note:"Used for the sea or ocean. 海(うみ)に行(い)く = go to the sea / beach.\nKanji: 海.",
   example:"A: 夏(なつ)に海(うみ)に行(い)きませんか？\nB: いいですね。友達(ともだち)と一緒(いっしょ)に行(い)きましょう。",
   exampleSrc:"A: Shall we go to the sea in summer?\nB: Sounds great. Let us go together with friends.",
   funFact:"Japan is an island nation surrounded by sea on all sides. The kanji 海 combines water (氵) and every (毎), evoking a place where water is everywhere. About 73% of Japanese land is mountainous, so sea and mountain (山) define the landscape equally in Japanese consciousness."},

  {type:"teach", trg:"山(やま)", src:"mountain", pos:"noun", gender:null,
   note:"Any mountain or hill. 山(やま)に登(のぼ)る = climb a mountain.\nKanji: 山.",
   example:"A: 富士山(ふじさん)に登(のぼ)ったことがありますか？\nB: いいえ、でも山(やま)は大好(だいす)きです。",
   exampleSrc:"A: Have you ever climbed Mount Fuji?\nB: No, but I love mountains.",
   funFact:"山 is one of the first kanji most people learn because its shape clearly pictures three mountain peaks. Japan has over 100 mountains above 2,000 meters. The honorific prefix 富士山 (Mt. Fuji) uses さん, the same suffix as for people, showing deep respect for the mountain."},

  {type:"mc", q:"橋(はし)を渡(わた)る means:", opts:["climb a mountain","cross a bridge","walk on a road","reach the station"], ans:"cross a bridge",
   hint:"渡る means to …, and 橋 is the structure over water."},

  {type:"teach", trg:"借(か)りる", src:"to borrow", pos:"verb", gender:null,
   note:"Group 2 verb. Subject borrows FROM someone. に from particle: 友達(ともだち)に借(か)りる.\nKanji: 借りる.",
   example:"A: 傘(かさ)を借(か)りてもいいですか？\nB: もちろんです。どうぞ。",
   exampleSrc:"A: May I borrow an umbrella?\nB: Of course. Please go ahead.",
   funFact:"借りる contains the kanji 借 (borrow), which shows a person (亻) next to a crossed basket (昔 a past layer), implying taking something temporarily. Japanese culture has a strong norm of returning borrowed items promptly. Keeping something borrowed too long is considered rude."},

  {type:"teach", trg:"貸(か)す", src:"to lend", pos:"verb", gender:null,
   note:"Group 1 verb. Subject lends TO someone. に to particle: 友達(ともだち)に貸(か)す.\nKanji: 貸す.",
   example:"A: 本(ほん)を貸(か)してください。\nB: いいですよ。いつ返(かえ)しますか？",
   exampleSrc:"A: Please lend me a book.\nB: Sure. When will you return it?",
   funFact:"貸す and 借りる are a matched pair. Lend and borrow cause confusion in English too. Japanese learners find it clearer with the particles: 友達に貸す (lend to a friend) vs. 友達に借りる (borrow from a friend). Libraries use 貸し出し (lending out) on checkout receipts."},

  {type:"teach", trg:"返(かえ)す", src:"to return (something)", pos:"verb", gender:null,
   note:"Group 1 verb. Return an object to its owner. Different from 帰(かえ)る (return home).\nKanji: 返す.",
   example:"A: 先週(せんしゅう)借(か)りた本(ほん)を返(かえ)します。\nB: ありがとうございます。",
   exampleSrc:"A: I am returning the book I borrowed last week.\nB: Thank you.",
   funFact:"返す and 帰る share the reading kaeri/kaes but have completely different kanji and meanings. 返 (return an object) vs. 帰 (return home). This is a famous confusable pair in Japanese. The verb also appears in 繰(く)り返(かえ)す (to repeat), literally to return repeatedly."},

  {type:"fb", s:"友達(ともだち)に本(ほん)を{1}もいいですか？\n(May I borrow a book from my friend?)", a:"借(か)りて", opts:["借(か)りて","貸(か)して","返(かえ)して","渡(わた)って"], sSrc:"May I borrow a book from my friend?",
   hint:"The て-form of the verb meaning to take something temporarily from someone."},

  {type:"teach", trg:"払(はら)う", src:"to pay", pos:"verb", gender:null,
   note:"Group 1 verb. お金(かね)を払(はら)う = pay money. Used at shops, restaurants, stations.\nKanji: 払う.",
   example:"A: ここでお金(かね)を払(はら)いますか？\nB: はい、レジで払(はら)ってください。",
   exampleSrc:"A: Do I pay here?\nB: Yes, please pay at the register.",
   funFact:"払う originally meant to brush away or sweep, from the image of handing over coins. Related words: 支払(しはら)い (payment), 払(はら)い戻(もど)し (refund). Japan is still largely a cash society; many small restaurants and shops accept only cash, so 払う is a very practical verb."},

  {type:"teach", trg:"泊(と)まる", src:"to stay overnight / to lodge", pos:"verb", gender:null,
   note:"Group 1 verb. Place + に + 泊(と)まる = stay at a place overnight.\nKanji: 泊まる.",
   example:"A: 旅館(りょかん)に泊(と)まったことがありますか？\nB: はい、去年(きょねん)友達(ともだち)と泊(と)まりました。",
   exampleSrc:"A: Have you ever stayed at a Japanese inn?\nB: Yes, I stayed there last year with friends.",
   funFact:"泊まる contains the kanji 泊 (overnight), which combines water (氵) and white (白). Legend says it evokes a boat anchored overnight on still water. The counter for nights is 泊(はく): 一泊(いっぱく) = one night, 二泊(にはく) = two nights. Hotel check-in forms ask 何泊(なんはく)ですか？"},

  {type:"mc", q:"お金(かね)を払(はら)う means:", opts:["to borrow money","to lend money","to pay money","to return money"], ans:"to pay money",
   hint:"This verb describes giving money at a shop or restaurant."},

  {type:"fb", s:"この本(ほん)は図書館(としょかん)に{1}します。\n(I will return this book to the library.)", a:"返(かえ)", opts:["返(かえ)","貸(か)","借(か)","払(はら)"], sSrc:"I will return this book to the library.",
   hint:"The verb stem for giving something back to where it came from."},

  {type:"tip", title:"The Borrow/Lend/Return Triad",
   text:"Three verbs, one transaction:\nBorrow: 借(か)りる (Group 2, iru-verb)\nLend: 貸(か)す (Group 1, su-verb)\nReturn: 返(かえ)す (Group 1, su-verb)\n\nParticle logic:\nBorrow FROM: 友達(ともだち)に借(か)りる\nLend TO: 友達(ともだち)に貸(か)す\nReturn TO: 友達(ともだち)に返(かえ)す\n\nTip: Both 貸す and 返す are Group 1 (plain past: 貸した, 返した). Only 借りる is Group 2.",
   deepDive:{title:"Polite request forms",
    text:"Borrowing politely:\n借(か)りてもいいですか？ = May I borrow?\n貸(か)してください = Please lend me.\n返(かえ)してもらえますか？ = Could you return it?\n\nPermission (〜てもいいですか) is softer and more common than a direct request (〜てください) when asking to borrow something. Use 〜てください when returning something, since you are giving, not asking."}},

  {type:"match", pairs:[{trg:"借(か)りる",src:"to borrow"},{trg:"貸(か)す",src:"to lend"},{trg:"返(かえ)す",src:"to return (sth)"},{trg:"払(はら)う",src:"to pay"}]},

  {type:"match", pairs:[{trg:"道(みち)",src:"road / path"},{trg:"橋(はし)",src:"bridge"},{trg:"海(うみ)",src:"sea / ocean"},{trg:"山(やま)",src:"mountain"}]},

  {type:"mc", q:"泊(と)まる means:", opts:["to travel","to stay overnight","to check out","to book a room"], ans:"to stay overnight",
   hint:"This verb describes spending the night at a hotel or inn."},

  {type:"fb", s:"ホテルに一晩(ひとばん){1}ました。\n(I stayed overnight at the hotel.)", a:"泊(と)ま", opts:["泊(と)ま","借(か)り","払(はら)","返(かえ)し"], sSrc:"I stayed overnight at the hotel.",
   hint:"The verb stem for spending the night somewhere."},

  {type:"fb", s:"海(うみ)まで{1}を渡(わた)ってください。\n(Please cross the bridge to reach the sea.)", a:"橋(はし)", opts:["橋(はし)","山(やま)","道(みち)","信号(しんごう)"], sSrc:"Please cross the bridge to reach the sea.",
   hint:"The structure built over water for crossing."},

  {type:"mc", q:"貸(か)す means:", opts:["to borrow","to lend","to return","to pay"], ans:"to lend",
   hint:"You give something to someone temporarily. They will give it back later."},

  {type:"mc", q:"Which sentence means 'I borrowed money from a friend'?", opts:["友達(ともだち)にお金(かね)を貸(か)しました","友達(ともだち)にお金(かね)を借(か)りました","友達(ともだち)にお金(かね)を返(かえ)しました","友達(ともだち)にお金(かね)を払(はら)いました"], ans:"友達(ともだち)にお金(かね)を借(か)りました",
   hint:"に marks the source when you receive something temporarily."},
]}
,
  JEXP_15_L1,
  JEXP_15_L2,
  JEXP_15_L3
]};
export default UNIT_15;
