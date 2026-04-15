// Japanese V2 Unit 15 — ほうこう (Directions & Movement)
// Level: A2.2 — JLPT N4 aligned.
import JEXP_15_L1 from './_temp_u15_expand_L01.js';import JEXP_15_L2 from './_temp_u15_expand_L02.js';import JEXP_15_L3 from './_temp_u15_expand_L03.js';
// Directions, before/after, while doing, transport vocabulary.

const UNIT_15 = {
  n:15, lang:"ja", srcLang:"en", track:"v2",
  title:"ほうこう", sub:"Directions & Movement",
  icon:"🧭", level:"A2.2", color:"#7B5EE8",
  lessons:[

// ═══ L1: みちをきく (Asking for Directions) ═══
{id:"jav2_u15l1", title:"みちをきく", icon:"🗺️", xp:15, board:true, steps:[
  {type:"intro", title:"みちをきく",
   desc:"Navigate Japanese streets and stations with confidence. Learn direction words, how to give and follow simple directions, and essential transport vocabulary for getting around.",
   goals:["Use direction words: right, left, straight, turn, cross","Ask for and understand simple directions","Learn transport vocabulary: ticket, transfer, platform"]},

  {type:"teach", trg:"みぎ", src:"right", pos:"noun", gender:null,
   note:"Direction word. みぎに = to the right. みぎがわ = right side.\nKanji: 右.",
   example:"A: つぎのかどをみぎにまがってください。\nB: みぎですね。わかりました。",
   exampleSrc:"A: Please turn right at the next corner.\nB: Right, got it.",
   funFact:"右 shows a hand (又) reaching toward the mouth (口), since most people eat with their right hand. In Japanese culture, right is considered the auspicious side. Bowing etiquette, seating arrangements, and gift-giving all have right-side conventions."},

  {type:"teach", trg:"ひだり", src:"left", pos:"noun", gender:null,
   note:"Direction word. ひだりに = to the left. ひだりがわ = left side.\nKanji: 左.",
   example:"A: えきはどこですか？\nB: ひだりにまがると、えきがあります。",
   exampleSrc:"A: Where is the station?\nB: If you turn left, there is the station.",
   funFact:"左 shows a hand (ナ) holding a carpenter's square (工). In old Japan, left was associated with higher rank. The word hidari-kiki (left-handed) uses the same kanji. About 10% of Japanese people are left-handed, similar to global averages."},

  {type:"teach", trg:"まっすぐ", src:"straight ahead", pos:"adv", gender:null,
   note:"Go straight without turning. まっすぐいく = go straight.\nWritten in hiragana typically.",
   example:"A: この道をまっすぐいってください。\nB: どのくらいですか？\nA: ごふんくらいです。",
   exampleSrc:"A: Please go straight on this road.\nB: How far is it?\nA: About five minutes.",
   funFact:"まっすぐ doubles the っ for emphasis, making it sound crisp and decisive. It also means 'honest' or 'upright' when describing personality: まっすぐなひと (a straightforward person). Japanese streets rarely follow a grid, so まっすぐ often means 'follow the road.'"},

  {type:"teach", trg:"まがる", src:"to turn", pos:"verb", gender:null,
   note:"Group 1 verb. みぎにまがる = turn right. ひだりにまがる = turn left.\nKanji: 曲がる.",
   example:"A: しんごうをみぎにまがってください。\nB: はい、みぎですね。",
   exampleSrc:"A: Please turn right at the traffic light.\nB: Yes, right.",
   funFact:"曲がる also means 'to bend' or 'to curve.' A まがったみち is a winding road. The kanji 曲 represents something curved or bent. In music, 曲 (kyoku) means a musical piece or tune, showing its range of meanings."},

  {type:"mc", q:"みぎにまがってください means:", opts:["Please go straight","Please turn right","Please turn left","Please stop"], ans:"Please turn right",
   hint:"Migi is the direction word for the hand most people write with."},

  {type:"teach", trg:"わたる", src:"to cross", pos:"verb", gender:null,
   note:"Group 1 verb. Used for crossing roads, bridges, intersections.\nKanji: 渡る.",
   example:"A: このはしをわたってください。\nB: はしのあとは？\nA: まっすぐいってください。",
   exampleSrc:"A: Please cross this bridge.\nB: After the bridge?\nA: Please go straight.",
   funFact:"渡る combines water (氵) and degree/crossing (度). It literally suggests crossing over water. Beyond roads and bridges, wataru also means 'to hand over' (watasu, the transitive form) and appears in 'migratory birds' (wataridori)."},

  {type:"teach", trg:"しんごう", src:"traffic light", pos:"noun", gender:null,
   note:"An important landmark for directions. 'At the traffic light' = しんごうのところで.\nKanji: 信号.",
   example:"A: しんごうをわたってまっすぐいってください。\nB: ありがとうございます。",
   exampleSrc:"A: Cross at the traffic light and go straight.\nB: Thank you.",
   funFact:"Japanese traffic lights use the word あお (blue) for the green light, even though modern lights are green. This is because historically, Japanese used あお for both blue and green. The 'green' light is still officially called あおしんごう (blue signal)."},

  {type:"fb", s:"つぎのかどを___にまがってください。\n(Please turn left at the next corner.)", a:"ひだり", opts:["ひだり","みぎ","まっすぐ","うしろ"], sSrc:"Please turn left at the next corner.",
   hint:"The direction word for the opposite side of right."},

  {type:"teach", trg:"きっぷ", src:"ticket", pos:"noun", gender:null,
   note:"Paper ticket for trains, buses, events. Also called チケット (from English).\nKanji: 切符.",
   example:"A: きっぷはどこでかいますか？\nB: あのきかいでかいます。",
   exampleSrc:"A: Where do you buy tickets?\nB: You buy them at that machine.",
   funFact:"切符 combines 切 (cut) and 符 (token), from the era when tickets were torn in half for verification. IC cards (Suica, Pasmo) have largely replaced paper tickets in cities, but きっぷ remains essential for long-distance trains and rural areas."},

  {type:"teach", trg:"のりかえ", src:"transfer (between trains/buses)", pos:"noun", gender:null,
   note:"のりかえる (verb) = to transfer. のりかえ (noun) = a transfer.\nKanji: 乗り換え.",
   example:"A: しぶやでのりかえてください。\nB: なんばんせんですか？",
   exampleSrc:"A: Please transfer at Shibuya.\nB: What platform number?",
   funFact:"のりかえ combines 乗り (ride) and 換え (change). Tokyo's train system requires frequent transfers. Station signs helpfully show のりかえ information in multiple languages. The average Tokyo commuter makes 1-2 transfers per trip. Navigation apps have made this much easier."},

  {type:"teach", trg:"のりば", src:"platform / boarding area", pos:"noun", gender:null,
   note:"のる (to ride) + ば (place). The place where you board.\nKanji: 乗り場.",
   example:"A: バスのりばはどこですか？\nB: えきのまえにあります。",
   exampleSrc:"A: Where is the bus stop/platform?\nB: It is in front of the station.",
   funFact:"のりば is a general term for any boarding area: バスのりば (bus stop), タクシーのりば (taxi stand), ふねのりば (boat dock). The ば suffix meaning 'place' appears in many words: にわ (garden), あそびば (playground), いちば (market)."},

  {type:"mc", q:"のりかえ means:", opts:["a ticket","a platform","a transfer","an exit"], ans:"a transfer",
   hint:"The noun for changing from one train or bus line to another."},

  {type:"match", pairs:[{trg:"みぎ",src:"right"},{trg:"ひだり",src:"left"},{trg:"まっすぐ",src:"straight"},{trg:"まがる",src:"to turn"}]},

  {type:"match", pairs:[{trg:"わたる",src:"to cross"},{trg:"きっぷ",src:"ticket"},{trg:"のりかえ",src:"transfer"},{trg:"のりば",src:"platform"}]},

  {type:"fb", s:"このはしを___ください。\n(Please cross this bridge.)", a:"わたって", opts:["わたって","まがって","あるいて","のって"], sSrc:"Please cross this bridge.",
   hint:"The て-form of the verb meaning 'to cross' roads, bridges, etc."},

  {type:"mc", q:"しんごう means:", opts:["corner","bridge","traffic light","station"], ans:"traffic light",
   hint:"The device at intersections that shows red, yellow, and green lights."},
]},

// ═══ L2: まえに と あとで (Before & After) ═══
{id:"jav2_u15l2", title:"まえにとあとで", icon:"⏰", xp:15, board:true, steps:[
  {type:"intro", title:"まえにとあとで",
   desc:"Learn to sequence events in time with まえに (before doing) and あとで (after doing). You will also learn ながら (while doing two things at once), which adds a simultaneous action layer to your Japanese.",
   goals:["Use verb (dictionary form) + まえに for 'before doing'","Use verb (た-form) + あとで for 'after doing'","Use verb (stem) + ながら for 'while doing'"]},

  {type:"teach", trg:"〜まえに", src:"before doing ~", pos:"part", gender:null,
   note:"Dictionary form + まえに = before doing.\nたべるまえに = before eating.",
   example:"A: ねるまえになにをしますか？\nB: はをみがきます。",
   exampleSrc:"A: What do you do before sleeping?\nB: I brush my teeth.",
   funFact:"まえに uses the dictionary (plain present) form, not the past form. This makes sense: the action has not happened yet, so it takes the non-past. Compare this with あとで, which uses the past form because the first action is already completed."},

  {type:"teach", trg:"〜あとで", src:"after doing ~", pos:"part", gender:null,
   note:"た-form + あとで = after doing.\nたべたあとで = after eating.",
   example:"A: ごはんをたべたあとでさんぽします。\nB: いいしゅうかんですね。",
   exampleSrc:"A: I take a walk after eating dinner.\nB: That is a good habit.",
   funFact:"あとで uses the past (た) form because the first action is completed before the second begins. The logic is: 'having done X, then Y.' You will also hear あとに, which has a slightly tighter time connection. Both are natural and common."},

  {type:"teach", trg:"〜ながら", src:"while doing ~", pos:"part", gender:null,
   note:"Verb stem + ながら = while doing simultaneously.\nたべながら = while eating.",
   example:"A: おんがくをききながらべんきょうします。\nB: しゅうちゅうできますか？",
   exampleSrc:"A: I study while listening to music.\nB: Can you concentrate?",
   funFact:"ながら requires the verb stem (remove ます from the polite form): たべ+ながら, のみ+ながら, あるき+ながら. The main action comes at the end of the sentence, and the ながら action is secondary. Walking while talking: はなしながらあるく."},

  {type:"mc", q:"ねるまえに means:", opts:["after sleeping","while sleeping","before sleeping","I want to sleep"], ans:"before sleeping",
   hint:"Dictionary form + まえに = before performing the action."},

  {type:"teach", trg:"はをみがく", src:"to brush teeth", pos:"verb", gender:null,
   note:"は (teeth) + を + みがく (to polish/brush). A daily routine verb.\nKanji: 歯を磨く.",
   example:"A: あさごはんのまえにはをみがきますか？\nB: いいえ、あとでみがきます。",
   exampleSrc:"A: Do you brush your teeth before breakfast?\nB: No, I brush them after.",
   funFact:"In Japan, many people brush their teeth after every meal, not just morning and night. Office workers often keep a toothbrush at their desk. School children brush after lunch. The level of dental hygiene awareness is remarkably high."},

  {type:"teach", trg:"シャワーをあびる", src:"to take a shower", pos:"verb", gender:null,
   note:"シャワー (shower, from English) + を + あびる (to bathe in/be showered with).\nGroup 2 verb.",
   example:"A: シャワーをあびたあとでねます。\nB: わたしもそうです。",
   exampleSrc:"A: I sleep after taking a shower.\nB: I do too.",
   funFact:"あびる means 'to be bathed in' something. It works for showers (シャワーをあびる), sunlight (ひをあびる), and even criticism (ひはんをあびる). Most Japanese households have a separate bath and shower area, and soaking in the tub (おふろにはいる) is the evening tradition."},

  {type:"teach", trg:"あるく", src:"to walk", pos:"verb", gender:null,
   note:"Group 1 verb. あるいて = て-form. Used for walking as transport.\nKanji: 歩く.",
   example:"A: えきまであるきながらはなしましょう。\nB: いいですね。",
   exampleSrc:"A: Let us talk while walking to the station.\nB: Sounds good.",
   funFact:"歩く shows the kanji 歩 (step), which depicts two feet alternating. Walking culture is strong in Japan: most people walk 7,000-10,000 steps daily. あるきスマホ (walking while looking at your phone) has become a social issue, with warning signs in many stations."},

  {type:"fb", s:"ごはんをたべた___でさんぽします。\n(I take a walk after eating.)", a:"あと", opts:["あと","まえ","あいだ","とき"], sSrc:"I take a walk after eating.",
   hint:"The word meaning 'after' that follows the た-form."},

  {type:"teach", trg:"でかける", src:"to go out / to leave", pos:"verb", gender:null,
   note:"Group 2 verb. More specific than いく. Means leaving home or your current location.\nKanji: 出かける.",
   example:"A: でかけるまえにまどをしめてください。\nB: はい、わかりました。",
   exampleSrc:"A: Please close the windows before going out.\nB: Yes, understood.",
   funFact:"でかける is the combination of 出 (go out) and かける (to set out). It specifically means leaving a location, not just 'going.' When your family asks いまからでかける？(Are you going out now?), they mean leaving the house. It implies a purposeful departure."},

  {type:"teach", trg:"つく", src:"to arrive", pos:"verb", gender:null,
   note:"Group 1 verb. Place + に + つく = arrive at a place.\nKanji: 着く.",
   example:"A: えきについたあとでれんらくします。\nB: おねがいします。",
   exampleSrc:"A: I will contact you after arriving at the station.\nB: Please do.",
   funFact:"着く also means 'to stick to' or 'to be attached.' The kanji 着 appears in 着る (to wear, for upper body), 着物 (kimono, literally 'thing to wear'), and 到着 (touchard/arrival). At train stations, 到着 is displayed on departure boards."},

  {type:"mc", q:"おんがくをききながらべんきょうする means:", opts:["Study then listen to music","Study before listening to music","Study while listening to music","Study instead of listening to music"], ans:"Study while listening to music",
   hint:"ながら connects two actions happening at the same time."},

  {type:"match", pairs:[{trg:"まえに",src:"before"},{trg:"あとで",src:"after"},{trg:"ながら",src:"while"},{trg:"あるく",src:"to walk"}]},

  {type:"match", pairs:[{trg:"はをみがく",src:"brush teeth"},{trg:"シャワーをあびる",src:"take a shower"},{trg:"でかける",src:"go out"},{trg:"つく",src:"to arrive"}]},

  {type:"fb", s:"おんがくをきき___べんきょうします。\n(I study while listening to music.)", a:"ながら", opts:["ながら","まえに","あとで","あいだ"], sSrc:"I study while listening to music.",
   hint:"The pattern for doing two things simultaneously, attached to the verb stem."},

  {type:"mc", q:"でかけるまえにまどをしめる means:", opts:["Close windows after going out","Open windows before going out","Close windows before going out","Close windows while going out"], ans:"Close windows before going out",
   hint:"Dictionary form + まえに means 'before doing' the action."},

  {type:"tip", title:"Time Sequence Patterns",
   text:"Before: dictionary form + まえに\nねるまえに (before sleeping)\nたべるまえに (before eating)\n\nAfter: た-form + あとで\nねたあとで (after sleeping)\nたべたあとで (after eating)\n\nWhile: verb stem + ながら\nたべながら (while eating)\nあるきながら (while walking)\n\nThe main action goes at the end of the sentence.",
   deepDive:{title:"ながら nuance",
    text:"ながら implies the second verb is the main action:\nテレビをみながらたべる = Eat while watching TV (eating is main)\nたべながらテレビをみる = Watch TV while eating (watching is main)\n\nながら can sometimes express contrast, similar to 'although':\nしっていながらいわない = Although knowing, not say it.\nThis usage is more advanced and literary, but good to recognize."}},
]},

]};
export default UNIT_15;
