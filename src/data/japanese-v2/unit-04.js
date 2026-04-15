// Japanese V2 Unit 04. いくらですか (How much is it?)
// Level: A1.1. JLPT N5 aligned.
import JEXP_04_L1 from './_temp_u04_expand_L01.js';import JEXP_04_L2 from './_temp_u04_expand_L02.js';import JEXP_04_L3 from './_temp_u04_expand_L03.js';import JEXP_04_L4 from './_temp_u04_expand_L04.js';
// Shopping, colors, i-adj vs na-adj intro, numbers 100-10000, counters.

const UNIT_04 = {
  n:4, lang:"ja", srcLang:"en", track:"v2",
  title:"いくらですか", sub:"How Much Is It?",
  icon:"🛒", level:"A1.1", color:"#7B5EE8",
  lessons:[

// ═══ L1: かいもの (Shopping & Adjectives) ═══
{id:"jav2_u4l1", title:"かいもの", icon:"💴", xp:15, board:true, steps:[
  {type:"intro", title:"かいもの",
   desc:"Learn to shop in Japanese. You will ask prices, describe things with adjectives, and discover the two types of Japanese adjectives.",
   goals:["Ask 'how much?' with ikura","Use basic i-adjectives and na-adjectives","Name colors in Japanese"]},

  {type:"teach", trg:"いくら", src:"how much (price)", pos:"pron", gender:null,
   note:"Used to ask the price of something. Always followed by desu ka in polite speech.",
   example:"A: これはいくらですか？\nB: さんびゃくえんです。",
   exampleSrc:"A: How much is this?\nB: It is 300 yen.",
   funFact:"Ikura is also the Japanese word for salmon roe (the orange fish eggs on sushi). That ikura comes from Russian 'ikra' meaning caviar. Completely different words that just sound the same."},

  {type:"teach", trg:"えん", src:"yen (Japanese currency)", pos:"noun", gender:null,
   note:"Japan's currency. No cents or decimals. Coins: 1, 5, 10, 50, 100, 500.\nKanji: 円.",
   example:"A: いくらですか？\nB: ひゃくえんです。",
   exampleSrc:"A: How much?\nB: 100 yen.",
   funFact:"円 means 'circle' because coins are round. 1 yen coins are made of aluminum and weigh exactly 1 gram. They are so light they float on water. The yen symbol comes from the kanji 圓 (old form of 円)."},

  {type:"teach", trg:"たかい", src:"expensive / tall", pos:"adj", gender:null,
   note:"An i-adjective (ends in い). Means both 'expensive' and 'tall/high.'\nOpposite: やすい (cheap) or ひくい (short).",
   example:"A: このかばんはたかいですか？\nB: はい、とてもたかいです。",
   exampleSrc:"A: Is this bag expensive?\nB: Yes, it is very expensive.",
   funFact:"I-adjectives always end in い and can stand alone before desu. They are native Japanese words, unlike na-adjectives which often have Chinese origins. Takai covers 'expensive' and 'tall' because both mean 'high.'"},

  {type:"teach", trg:"やすい", src:"cheap / inexpensive", pos:"adj", gender:null,
   note:"An i-adjective. Opposite of takai (expensive). Also means 'easy' in compounds.",
   example:"A: このとけいはやすいですか？\nB: はい、せんえんです。",
   exampleSrc:"A: Is this watch cheap?\nB: Yes, it is 1000 yen.",
   funFact:"安 means peace/safety. Cheap prices bring peace of mind. The same kanji appears in anzen (安全, safety) and anshin (安心, peace of mind). Yasui also means 'easy to do' as a suffix: tabe-yasui (easy to eat)."},

  {type:"mc", q:"いくらですか means:", opts:["How much is it?","Where is it?","What is it?","How many?"], ans:"How much is it?",
   hint:"The essential shopping question for asking about price."},

  {type:"teach", trg:"おおきい", src:"big / large", pos:"adj", gender:null,
   note:"An i-adjective. Opposite: ちいさい (small).\nKanji: 大きい.",
   example:"A: このかばんはおおきいですね。\nB: はい、りょこうようです。",
   exampleSrc:"A: This bag is big, isn't it?\nB: Yes, it is for travel.",
   funFact:"The kanji 大 shows a person with arms spread wide, representing 'big.' It is one of the simplest and most useful kanji. Dai/oo = big appears in daigaku (university = big learning) and Osaka (大阪 = big slope)."},

  {type:"teach", trg:"ちいさい", src:"small / little", pos:"adj", gender:null,
   note:"An i-adjective. Opposite of おおきい.\nKanji: 小さい.",
   example:"A: このけいたいはちいさいですね。\nB: でも、べんりですよ。",
   exampleSrc:"A: This phone is small, isn't it?\nB: But it is convenient!",
   funFact:"The kanji 小 looks like something being divided into small pieces. Shou/ko/chii = small appears in shougakkou (小学校, elementary school = small learning school) and kozutsumi (小包, small package)."},

  {type:"fb", s:"これは{1}ですか？", a:"いくら", opts:["いくら","なん","だれ","どこ"], sSrc:"How much is this?",
   hint:"The question word specifically for asking about price."},

  {type:"teach", trg:"あか", src:"red", pos:"noun", gender:null,
   note:"The color red. As an adjective: あかい (akai, red).\nKanji: 赤.",
   example:"A: あかいかさはいくらですか？\nB: にひゃくえんです。",
   exampleSrc:"A: How much is the red umbrella?\nB: It is 200 yen.",
   funFact:"Red is the most symbolically important color in Japan. Torii gates, daruma dolls, and celebratory rice are all red. The word 'akai' originally meant 'bright/clear' and only narrowed to mean 'red' over centuries."},

  {type:"teach", trg:"あお", src:"blue / green", pos:"noun", gender:null,
   note:"Historically covers both blue and green. As an adjective: あおい (aoi).\nKanji: 青.",
   example:"A: あおいかばんがすきです。\nB: わたしも！",
   exampleSrc:"A: I like the blue bag.\nB: Me too!",
   funFact:"Ao covers blue AND green in traditional Japanese. Traffic lights are called 'ao' even though they look green. The word 'midori' (green) only became its own color category in modern times. Old Japanese had just four color words: aka, ao, shiro, kuro."},

  {type:"teach", trg:"しろ", src:"white", pos:"noun", gender:null,
   note:"The color white. As an adjective: しろい (shiroi). Symbol of purity.\nKanji: 白.",
   example:"A: しろいめがねはいくらですか？\nB: せんえんです。",
   exampleSrc:"A: How much are the white glasses?\nB: 1000 yen.",
   funFact:"White represents purity and mourning in Japan. Brides wear white (shiromuku) at Shinto weddings. Funeral envelopes are white. The contrast with Western culture where white means only celebration and black means mourning."},

  {type:"mc", q:"あお traditionally covers:", opts:["Only blue","Blue and green","Blue and red","Only green"], ans:"Blue and green",
   hint:"Japanese originally had just four basic color terms, and ao covered a wide range."},

  {type:"teach", trg:"くろ", src:"black", pos:"noun", gender:null,
   note:"The color black. As an adjective: くろい (kuroi).\nKanji: 黒.",
   example:"A: くろいかばんをください。\nB: はい、どうぞ。",
   exampleSrc:"A: Please give me the black bag.\nB: Here you go.",
   funFact:"Kuro appears in kurofune (黒船, black ships), the name Japanese people gave to Commodore Perry's American warships that forced Japan to open to trade in 1853. The word still evokes foreign disruption."},

  {type:"teach", trg:"みどり", src:"green", pos:"noun", gender:null,
   note:"Green as a distinct color. Newer addition to Japanese color terms.\nKanji: 緑.",
   example:"A: みどりのかさがほしいです。\nB: あそこにありますよ。",
   exampleSrc:"A: I want a green umbrella.\nB: There is one over there.",
   funFact:"Midori only became recognized as a separate basic color in the 20th century. Before that, green was a shade of ao (blue). You can still see this in how traffic lights are called ao-shingou (blue signal) despite being green."},

  {type:"teach", trg:"きいろ", src:"yellow", pos:"noun", gender:null,
   note:"The color yellow. As a na-adjective: きいろな (kiiro na) or きいろい (kiiroi).\nKanji: 黄色.",
   example:"A: きいろいほんはいくらですか？\nB: ごひゃくえんです。",
   exampleSrc:"A: How much is the yellow book?\nB: 500 yen.",
   funFact:"黄 (ki, yellow) + 色 (iro, color). Kiiro literally means 'yellow-color.' This color+iro pattern also works for other colors: chairo (tea-color = brown), mizuiro (water-color = light blue), momoiro (peach-color = pink)."},

  {type:"match", pairs:[{trg:"あか",src:"red"},{trg:"あお",src:"blue"},{trg:"しろ",src:"white"},{trg:"くろ",src:"black"}]},

  {type:"match", pairs:[{trg:"みどり",src:"green"},{trg:"きいろ",src:"yellow"},{trg:"たかい",src:"expensive"},{trg:"やすい",src:"cheap"}]},

  {type:"fb", s:"この かばんは {1}い です。\n(This bag is expensive.)", a:"たか", opts:["たか","やす","おおき","ちいさ"], sSrc:"This bag is expensive.",
   hint:"The i-adjective meaning expensive or high."},

  {type:"mc", q:"Which is the correct pair of opposites?", opts:["たかい / ちいさい","おおきい / やすい","たかい / やすい","あかい / あおい"], ans:"たかい / やすい",
   hint:"One means expensive, the other means cheap."},

  {type:"tip", title:"I-Adjectives: A Quick Intro",
   text:"I-adjectives ALWAYS end in い:\nたかい (expensive), やすい (cheap)\nおおきい (big), ちいさい (small)\nあかい (red), あおい (blue)\n\nThey go directly before a noun:\nたかい かばん = expensive bag\nちいさい とけい = small watch",
   deepDive:{title:"Na-adjectives preview",
    text:"Na-adjectives need な before a noun:\nべんり + な + かばん = convenient bag\nきれい + な + とけい = beautiful watch\n\nYou will learn na-adjectives properly in a later unit. For now, just notice that some descriptive words need な and some do not."}},

  {type:"mc", q:"あかいかさ means:", opts:["big umbrella","old umbrella","expensive umbrella","red umbrella"], ans:"red umbrella",
   hint:"Akai is the i-adjective form of aka (r...)."},
]},

// ═══ L2: すうじ (Numbers & Counters) ═══
{id:"jav2_u4l2", title:"すうじ", icon:"🔟", xp:15, board:true, steps:[
  {type:"intro", title:"すうじ",
   desc:"Expand your number range to 10,000 and learn your first counters. Japanese uses special counter words when counting specific types of objects.",
   goals:["Count from 100 to 10,000","Use the counters ko, mai, and hon","Combine numbers with counters in real shopping situations"]},

  {type:"teach", trg:"ひゃく", src:"one hundred (100)", pos:"num", gender:null,
   note:"100 in Japanese. Sound changes: 300 = さんびゃく, 600 = ろっぴゃく, 800 = はっぴゃく.\nKanji: 百.",
   example:"A: これはいくらですか？\nB: ひゃくえんです。",
   exampleSrc:"A: How much is this?\nB: It is 100 yen.",
   funFact:"100-yen shops (hyaku-en shoppu) are Japan's version of dollar stores and are wildly popular. Daiso, the biggest chain, has over 3,000 stores in Japan alone. They sell everything from kitchen tools to stationery."},

  {type:"teach", trg:"せん", src:"one thousand (1,000)", pos:"num", gender:null,
   note:"1,000 in Japanese. Sound changes: 3,000 = さんぜん, 8,000 = はっせん.\nKanji: 千.",
   example:"A: このほんはいくらですか？\nB: にせんえんです。",
   exampleSrc:"A: How much is this book?\nB: It is 2,000 yen.",
   funFact:"千 appears in senbazuru (千羽鶴, a thousand paper cranes). The legend says folding 1,000 cranes grants a wish. This tradition became a peace symbol after Sadako Sasaki's story in Hiroshima."},

  {type:"teach", trg:"まん", src:"ten thousand (10,000)", pos:"num", gender:null,
   note:"10,000 in Japanese. Japan counts in units of 10,000 (man), not 1,000 like English.\nKanji: 万.",
   example:"A: このとけいはいくらですか？\nB: いちまんえんです。",
   exampleSrc:"A: How much is this watch?\nB: It is 10,000 yen.",
   funFact:"The 10,000-yen bill is the largest common banknote, worth roughly 65-70 USD. Japanese people often use ichiman (10,000) as a mental unit the way English speakers use 'a thousand.' Counting above 9,999 requires the man unit."},

  {type:"mc", q:"にせんえん means:", opts:["2,000 yen","20,000 yen","2 yen","200 yen"], ans:"2,000 yen",
   hint:"Ni (two) + sen (thousand) + en (y...)."},

  {type:"teach", trg:"こ", src:"(counter for small objects)", pos:"part", gender:null,
   note:"General counter for small, round, or compact items. Apples, eggs, erasers, etc.\nKanji: 個.",
   example:"A: りんごをみっつください。\nB: さんこですね。はい、どうぞ。",
   exampleSrc:"A: Three apples, please.\nB: Three pieces, right? Here you go.",
   funFact:"Ko is the most versatile counter. When in doubt about which counter to use, ko often works as a safe fallback for physical objects. Sound changes: ikko (1), nikko (not common, use niko), sanko (3), rokko (6), hakko/hachiko (8), jukko (10)."},

  {type:"teach", trg:"まい", src:"(counter for flat objects)", pos:"part", gender:null,
   note:"Counter for flat, thin items: paper, plates, shirts, tickets, slices.\nKanji: 枚.",
   example:"A: きってはなんまいですか？\nB: ごまいです。",
   exampleSrc:"A: How many stamps?\nB: Five.",
   funFact:"Mai covers anything flat: kami (paper), sara (plates), shatsu (shirts), kippu (tickets), even pizza slices. No sound changes. Simply attach the number: ichimai, nimai, sanmai... Easy to remember."},

  {type:"teach", trg:"ほん", src:"(counter for long, thin objects)", pos:"part", gender:null,
   note:"Counter for long cylindrical objects: pens, bottles, trees, fingers.\nSame kanji as 'book' but different meaning here.\nKanji: 本.",
   example:"A: ペンをにほんください。\nB: はい、にほんですね。",
   exampleSrc:"A: Two pens, please.\nB: Two pens, right?",
   funFact:"This is the same kanji 本 as in hon (book), but used as a counter it means long thin things. Sound changes: ippon (1), nihon (2), sanbon (3), yonhon (4), gohon (5), roppon (6), nanahon (7), happon (8), kyuuhon (9), juppon (10)."},

  {type:"mc", q:"Which counter would you use for a plate?", opts:["かいすう","まい","えん","ほん"], ans:"まい",
   hint:"Plates are flat objects. The flat-object counter is the right choice."},

  {type:"tip", title:"Counter Sound Changes",
   text:"Counters change sounds with certain numbers:\n\nほん (long objects):\n1 = いっぽん, 3 = さんぼん, 6 = ろっぽん, 8 = はっぽん, 10 = じゅっぽん\n\nこ (small objects):\n1 = いっこ, 6 = ろっこ, 8 = はっこ, 10 = じゅっこ\n\nまい (flat objects):\nNo sound changes. Simply add the number.",
   deepDive:{title:"Why counters exist",
    text:"Japanese always pairs a number with a counter that describes the shape or category of what you are counting.\n\nYou cannot just say 'san' (three) alone. You must say:\nさんこ (three small things)\nさんまい (three flat things)\nさんぼん (three long things)\n\nThis is similar to English saying 'three sheets of paper' instead of 'three papers.'"}},

  {type:"teach", trg:"ください", src:"please (give me)", pos:"verb", gender:null,
   note:"Used when requesting items. Polite imperative form of kureru (to give).\nPattern: noun + を + ください.",
   example:"A: このあかいかさをください。\nB: はい、さんびゃくえんです。",
   exampleSrc:"A: Please give me this red umbrella.\nB: Yes, that is 300 yen.",
   funFact:"Kudasai literally means 'please lower/hand down to me.' It comes from kudasaru (to bestow from above). When shopping, you point and say 'kore wo kudasai' (this, please) and it works everywhere."},

  {type:"fb", s:"ペンを さん{1} ください。\n(Three pens, please.)", a:"ぼん", opts:["ぼん","こ","まい","えん"], sSrc:"Three pens, please.",
   hint:"The long-object counter with the sound change for the number three."},

  {type:"teach", trg:"さんびゃく", src:"three hundred (300)", pos:"num", gender:null,
   note:"Sound change: さん + ひゃく becomes さんびゃく.\nSimilar: 600 = ろっぴゃく, 800 = はっぴゃく.",
   example:"A: いくらですか？\nB: さんびゃくえんです。",
   exampleSrc:"A: How much?\nB: 300 yen.",
   funFact:"These sound changes (rendaku) happen throughout Japanese to make words flow more smoothly. San + hyaku becomes sanbyaku. Roku + hyaku becomes roppyaku. The pattern follows the same voicing rules across the language."},

  {type:"teach", trg:"ごせん", src:"five thousand (5,000)", pos:"num", gender:null,
   note:"5,000 yen is a common banknote denomination in Japan.",
   example:"A: このとけいはいくらですか？\nB: ごせんえんです。",
   exampleSrc:"A: How much is this watch?\nB: It is 5,000 yen.",
   funFact:"The 5,000-yen bill features Tsuda Umeko, a pioneering educator who studied in America at age 6 in 1871 and later founded Tsuda University. She replaced the previous male portrait in the 2024 redesign."},

  {type:"mc", q:"いっぽん is the counter reading for:", opts:["One flat object","One small object","One long object","One yen"], ans:"One long object",
   hint:"Pon/bon/hon is the l...-o... counter. Ippon = one l... thing."},

  {type:"fb", s:"この とけいは {1}えん です。\n(This watch is 10,000 yen.)", a:"いちまん", opts:["いちまん","じゅう","ひゃく","せん"], sSrc:"This watch is 10,000 yen.",
   hint:"The unit for ten thousand in Japanese."},

  {type:"match", pairs:[{trg:"ひゃく",src:"100"},{trg:"せん",src:"1,000"},{trg:"まん",src:"10,000"},{trg:"さんびゃく",src:"300"}]},

  {type:"match", pairs:[{trg:"こ",src:"counter: small objects"},{trg:"まい",src:"counter: flat objects"},{trg:"ほん",src:"counter: long objects"},{trg:"ください",src:"please (give me)"}]},

  {type:"mc", q:"How do you say 'two flat objects' (like two tickets)?", opts:["にこ","にほん","にじゅう","にまい"], ans:"にまい",
   hint:"Flat things use the mai counter. No sound changes with two."},

  {type:"mc", q:"さんぜん means:", opts:["3,000","30,000","30","300"], ans:"3,000",
   hint:"Sen becomes zen after san. San + sen = sanzen."},

  {type:"fb", s:"りんごを {1}こ ください。\n(Five apples, please.)", a:"ご", opts:["ご","さん","に","ろっ"], sSrc:"Five apples, please.",
   hint:"The number that comes before ko for five small items."},

  {type:"mc", q:"You want to buy 2 bottles of water. Which is correct?", opts:["みずをにまいください","みずをにほんください","みずをにこください","ふたつのみずをください"], ans:"みずをにほんください",
   hint:"Bottles are long, cylindrical objects. Use the matching counter."},

  {type:"tip", title:"Shopping Survival Kit",
   text:"Point and say:\nこれをください。= This one, please.\n\nAsk the price:\nいくらですか？ = How much?\n\nState quantity:\nさんこください。= Three, please. (small items)\nにまいください。= Two, please. (flat items)\nいっぽんください。= One, please. (long items)",
   deepDive:{title:"Real shopping in Japan",
    text:"At a convenience store (konbini), the cashier will say the total and you pay. No need for complex conversation.\n\nAt markets and department stores, you might hear:\nいらっしゃいませ！ (Welcome!)\nおいくらですか？ (How much? with polite お)\nまた おこしください (Please come again)\n\nJapan is still largely a cash society, though cashless payment is growing fast."}},
]},

]};
export default UNIT_04;
