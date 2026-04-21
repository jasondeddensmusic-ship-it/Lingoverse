// Japanese V2 Unit 04. いくらですか (How much is it?)
import BATCH11_L1 from './_batch11_u04_L01.js';
import BATCH10_L1 from './_batch10_u04_L01.js';
import BATCH9_L1 from './_batch9_u04_L01.js';
import BATCH7_L1 from './_batch7_u04_L01.js';
import BATCH8_L1 from './_batch8_u04_L01.js';
import BATCH6_L1 from './_batch6_u04_L01.js';
import BATCH4_L02 from './_batch4_u04_L02.js';
import BATCH4_L01 from './_batch4_u04_L01.js';
import BATCH3_L1 from './_batch3_u04_L01.js';
// Level: A1.1. JLPT N5 aligned.
import JEXP_04_L1 from './_temp_u04_expand_L01.js';import JEXP_04_L2 from './_temp_u04_expand_L02.js';import JEXP_04_L3 from './_temp_u04_expand_L03.js';import JEXP_04_L4 from './_temp_u04_expand_L04.js';
// Shopping, colors, i-adj vs na-adj intro, numbers 100-10000, counters.

const UNIT_04 = {
  n:4, lang:"ja", srcLang:"en", track:"v2",
  title:"いくらですか", sub:"How Much Is It?",
  icon:"\u{1F6D2}", level:"A1.1", color:"#7B5EE8",
  lessons:[

// ═══ L1: 買(か)い物(もの) (Shopping & Adjectives) ═══
{id:"jav2_u4l1", title:"買(か)い物(もの)", icon:"\u{1F4B4}", xp:15, board:true, steps:[
  {type:"intro", title:"買(か)い物(もの)",
   desc:"Learn to shop in Japanese. You will ask prices, describe things with adjectives, and discover the two types of Japanese adjectives.",
   goals:["Ask 'how much?' with ikura","Use basic i-adjectives and na-adjectives","Name colors in Japanese"]},

  {type:"teach", trg:"いくら", src:"how much (price)", pos:"pron", gender:null,
   note:"Used to ask the price of something. Always followed by desu ka in polite speech.",
   example:"A: これはいくらですか?\nB: 三百(さんびゃく)円(えん)です。",
   exampleSrc:"A: How much is this?\nB: It is 300 yen.",
   funFact:"Ikura is also the Japanese word for salmon roe (the orange fish eggs on sushi). That ikura comes from Russian 'ikra' meaning caviar. Completely different words that just sound the same."},

  {type:"teach", trg:"円(えん)", src:"yen (Japanese currency)", pos:"noun", gender:null,
   note:"Japan's currency. No cents or decimals. Coins: 1, 5, 10, 50, 100, 500.\nKanji: 円.",
   example:"A: いくらですか?\nB: 百(ひゃく)円(えん)です。",
   exampleSrc:"A: How much?\nB: 100 yen.",
   funFact:"円 means 'circle' because coins are round. 1 yen coins are made of aluminum and weigh exactly 1 gram. They are so light they float on water. The yen symbol comes from the kanji 圓 (old form of 円)."},

  {type:"teach", trg:"高(たか)い", src:"expensive / tall", pos:"adj", gender:null,
   note:"An i-adjective (ends in い). Means both 'expensive' and 'tall/high.'\nOpposite: 安(やす)い (cheap) or 低(ひく)い (short).",
   example:"A: このかばんは高(たか)いですか?\nB: はい、とても高(たか)いです。",
   exampleSrc:"A: Is this bag expensive?\nB: Yes, it is very expensive.",
   funFact:"I-adjectives always end in い and can stand alone before desu. They are native Japanese words, unlike na-adjectives which often have Chinese origins. Takai covers 'expensive' and 'tall' because both mean 'high.'"},

  {type:"teach", trg:"安(やす)い", src:"cheap / inexpensive", pos:"adj", gender:null,
   note:"An i-adjective. Opposite of takai (expensive). Also means 'easy' in compounds.",
   example:"A: この時計(とけい)は安(やす)いですか?\nB: はい、千(せん)円(えん)です。",
   exampleSrc:"A: Is this watch cheap?\nB: Yes, it is 1000 yen.",
   funFact:"安 means peace/safety. Cheap prices bring peace of mind. The same kanji appears in anzen (安全, safety) and anshin (安心, peace of mind). Yasui also means 'easy to do' as a suffix: tabe-yasui (easy to eat)."},

  {type:"mc", q:"いくらですか means:", opts:["How much is it?","Where is it?","What is it?","How many?"], ans:"How much is it?",
   hint:"The essential shopping question for asking about price."},

  {type:"teach", trg:"大(おお)きい", src:"big / large", pos:"adj", gender:null,
   note:"An i-adjective. Opposite: 小(ちい)さい (small).\nKanji: 大きい.",
   example:"A: このかばんは大(おお)きいですね。\nB: はい、旅行(りょこう)用(よう)です。",
   exampleSrc:"A: This bag is big, isn't it.\nB: Yes, it is for travel.",
   funFact:"The kanji 大 shows a person with arms spread wide, representing 'big.' It is one of the simplest and most useful kanji. Dai/oo = big appears in daigaku (university = big learning) and Osaka (大阪 = big slope)."},

  {type:"teach", trg:"小(ちい)さい", src:"small / little", pos:"adj", gender:null,
   note:"An i-adjective. Opposite of 大(おお)きい.\nKanji: 小さい.",
   example:"A: この携帯(けいたい)は小(ちい)さいですね。\nB: でも、便利(べんり)ですよ。",
   exampleSrc:"A: This phone is small, isn't it.\nB: But it is convenient!",
   funFact:"The kanji 小 looks like something being divided into small pieces. Shou/ko/chii = small appears in shougakkou (小学校, elementary school = small learning school) and kozutsumi (小包, small package)."},

  {type:"fb", s:"これは{1}ですか?", a:"いくら", opts:["いくら","なん","だれ","どこ"], sSrc:"How much is this?",
   hint:"The question word specifically for asking about price."},

  {type:"teach", trg:"赤(あか)", src:"red", pos:"noun", gender:null,
   note:"The color red. As an adjective: 赤(あか)い (akai, red).\nKanji: 赤.",
   example:"A: 赤(あか)い傘(かさ)はいくらですか?\nB: 二百(にひゃく)円(えん)です。",
   exampleSrc:"A: How much is the red umbrella?\nB: It is 200 yen.",
   funFact:"Red is the most symbolically important color in Japan. Torii gates, daruma dolls, and celebratory rice are all red. The word 'akai' originally meant 'bright/clear' and only narrowed to mean 'red' over centuries."},

  {type:"teach", trg:"青(あお)", src:"blue / green", pos:"noun", gender:null,
   note:"Historically covers both blue and green. As an adjective: 青(あお)い (aoi).\nKanji: 青.",
   example:"A: 青(あお)いかばんが好(す)きです。\nB: わたしも!",
   exampleSrc:"A: I like the blue bag.\nB: Me too!",
   funFact:"Ao covers blue AND green in traditional Japanese. Traffic lights are called 'ao' even though they look green. The word 'midori' (green) only became its own color category in modern times. Old Japanese had just four color words: aka, ao, shiro, kuro."},

  {type:"teach", trg:"白(しろ)", src:"white", pos:"noun", gender:null,
   note:"The color white. As an adjective: 白(しろ)い (shiroi). Symbol of purity.\nKanji: 白.",
   example:"A: 白(しろ)い眼鏡(めがね)はいくらですか?\nB: 千(せん)円(えん)です。",
   exampleSrc:"A: How much are the white glasses?\nB: 1000 yen.",
   funFact:"White represents purity and mourning in Japan. Brides wear white (shiromuku) at Shinto weddings. Funeral envelopes are white. The contrast with Western culture where white means only celebration and black means mourning."},

  {type:"mc", q:"青(あお) traditionally covers:", opts:["Only blue","Blue and green","Blue and red","Only green"], ans:"Blue and green",
   hint:"Japanese originally had just four basic color terms, and ao covered a wide range."},

  {type:"teach", trg:"黒(くろ)", src:"black", pos:"noun", gender:null,
   note:"The color black. As an adjective: 黒(くろ)い (kuroi).\nKanji: 黒.",
   example:"A: 黒(くろ)いかばんをください。\nB: はい、どうぞ。",
   exampleSrc:"A: Please give me the black bag.\nB: Here you go.",
   funFact:"Kuro appears in kurofune (黒船, black ships), the name Japanese people gave to Commodore Perry's American warships that forced Japan to open to trade in 1853. The word still evokes foreign disruption."},

  {type:"teach", trg:"緑(みどり)", src:"green", pos:"noun", gender:null,
   note:"Green as a distinct color. Newer addition to Japanese color terms.\nKanji: 緑.",
   example:"A: 緑(みどり)の傘(かさ)が欲(ほ)しいです。\nB: あそこにありますよ。",
   exampleSrc:"A: I want a green umbrella.\nB: There is one over there.",
   funFact:"Midori only became recognized as a separate basic color in the 20th century. Before that, green was a shade of ao (blue). You can still see this in how traffic lights are called ao-shingou (blue signal) despite being green."},

  {type:"teach", trg:"黄色(きいろ)", src:"yellow", pos:"noun", gender:null,
   note:"The color yellow. As a na-adjective: 黄色(きいろ)な (kiiro na) or 黄色(きいろ)い (kiiroi).\nKanji: 黄色.",
   example:"A: 黄色(きいろ)い本(ほん)はいくらですか?\nB: 五百(ごひゃく)円(えん)です。",
   exampleSrc:"A: How much is the yellow book?\nB: 500 yen.",
   funFact:"黄 (ki, yellow) + 色 (iro, color). Kiiro literally means 'yellow-color.' This color+iro pattern also works for other colors: chairo (tea-color = brown), mizuiro (water-color = light blue), momoiro (peach-color = pink)."},

  {type:"match", pairs:[{trg:"赤(あか)",src:"red"},{trg:"青(あお)",src:"blue"},{trg:"白(しろ)",src:"white"},{trg:"黒(くろ)",src:"black"}]},

  {type:"match", pairs:[{trg:"緑(みどり)",src:"green"},{trg:"黄色(きいろ)",src:"yellow"},{trg:"高(たか)い",src:"expensive"},{trg:"安(やす)い",src:"cheap"}]},

  {type:"fb", s:"この かばんは {1}い です。\n(This bag is expensive.)", a:"高(たか)", opts:["高(たか)","安(やす)","大(おお)き","小(ちい)さ"], sSrc:"This bag is expensive.",
   hint:"The i-adjective meaning expensive or high."},

  {type:"mc", q:"Which is the correct pair of opposites?", opts:["高(たか)い / 小(ちい)さい","大(おお)きい / 安(やす)い","高(たか)い / 安(やす)い","赤(あか)い / 青(あお)い"], ans:"高(たか)い / 安(やす)い",
   hint:"One means expensive, the other means cheap."},

  {type:"tip", title:"I-Adjectives: A Quick Intro",
   text:"I-adjectives ALWAYS end in い:\n高(たか)い (expensive), 安(やす)い (cheap)\n大(おお)きい (big), 小(ちい)さい (small)\n赤(あか)い (red), 青(あお)い (blue)\n\nThey go directly before a noun:\n高(たか)い かばん = expensive bag\n小(ちい)さい 時計(とけい) = small watch",
   deepDive:{title:"Na-adjectives preview",
    text:"Na-adjectives need な before a noun:\n便利(べんり) + な + かばん = convenient bag\nきれい + な + 時計(とけい) = beautiful watch\n\nYou will learn na-adjectives properly in a later unit. For now, just notice that some descriptive words need な and some do not."}},

  {type:"mc", q:"赤(あか)い傘(かさ) means:", opts:["big umbrella","old umbrella","expensive umbrella","red umbrella"], ans:"red umbrella",
   hint:"Akai is the i-adjective form of aka (r...)."},

  {type:"fb", s:"このコートはとても{1}です。五万(ごまん)円(えん)もします。",
   a:["高(たか)い"],
   opts:["高(たか)い","安(やす)い","小(ちい)さい","大(おお)きい"],
   hint:"The coat costs 50,000 yen. This i-adjective describes something that costs a lot.",
   sSrc:"This coat is very {1}. It costs 50,000 yen."},

  {type:"fb", s:"このスーパーの野菜(やさい)はとても{1}ですね。助(たす)かります。",
   a:["安(やす)い"],
   opts:["安(やす)い","高(たか)い","大(おお)きい","緑(みどり)"],
   hint:"The vegetables at this supermarket have very low prices. This i-adjective means the opposite of expensive.",
   sSrc:"The vegetables at this supermarket are very {1}. That is a great help."},
]},

// ═══ L2: 数字(すうじ) (Numbers & Counters) ═══
{id:"jav2_u4l2", title:"数字(すうじ)", icon:"\u{1F51F}", xp:15, board:true, steps:[
  {type:"intro", title:"数字(すうじ)",
   desc:"Expand your number range to 10,000 and learn your first counters. Japanese uses special counter words when counting specific types of objects.",
   goals:["Count from 100 to 10,000","Use the counters ko, mai, and hon","Combine numbers with counters in real shopping situations"]},

  {type:"teach", trg:"百(ひゃく)", src:"one hundred (100)", pos:"num", gender:null,
   note:"100 in Japanese. Sound changes: 300 = 三百(さんびゃく), 600 = 六百(ろっぴゃく), 800 = 八百(はっぴゃく).\nKanji: 百.",
   example:"A: これはいくらですか?\nB: 百(ひゃく)円(えん)です。",
   exampleSrc:"A: How much is this?\nB: It is 100 yen.",
   funFact:"100-yen shops (hyaku-en shoppu) are Japan's version of dollar stores and are wildly popular. Daiso, the biggest chain, has over 3,000 stores in Japan alone. They sell everything from kitchen tools to stationery."},

  {type:"teach", trg:"千(せん)", src:"one thousand (1,000)", pos:"num", gender:null,
   note:"1,000 in Japanese. Sound changes: 3,000 = 三千(さんぜん), 8,000 = 八千(はっせん).\nKanji: 千.",
   example:"A: この本(ほん)はいくらですか?\nB: 二千(にせん)円(えん)です。",
   exampleSrc:"A: How much is this book?\nB: It is 2,000 yen.",
   funFact:"千 appears in senbazuru (千羽鶴, a thousand paper cranes). The legend says folding 1,000 cranes grants a wish. This tradition became a peace symbol after Sadako Sasaki's story in Hiroshima."},

  {type:"teach", trg:"万(まん)", src:"ten thousand (10,000)", pos:"num", gender:null,
   note:"10,000 in Japanese. Japan counts in units of 10,000 (man), not 1,000 like English.\nKanji: 万.",
   example:"A: この時計(とけい)はいくらですか?\nB: 一万(いちまん)円(えん)です。",
   exampleSrc:"A: How much is this watch?\nB: It is 10,000 yen.",
   funFact:"The 10,000-yen bill is the largest common banknote, worth roughly 65-70 USD. Japanese people often use ichiman (10,000) as a mental unit the way English speakers use 'a thousand.' Counting above 9,999 requires the man unit."},

  {type:"mc", q:"二千(にせん)円(えん) means:", opts:["2,000 yen","20,000 yen","2 yen","200 yen"], ans:"2,000 yen",
   hint:"Ni (two) + sen (thousand) + en (y...)."},

  {type:"teach", trg:"個(こ)", src:"(counter for small objects)", pos:"part", gender:null,
   note:"General counter for small, round, or compact items. Apples, eggs, erasers, etc.\nKanji: 個.",
   example:"A: りんごを三(みっ)つください。\nB: 三個(さんこ)ですね。はい、どうぞ。",
   exampleSrc:"A: Three apples, please.\nB: Three pieces, right? Here you go.",
   funFact:"Ko is the most versatile counter. When in doubt about which counter to use, ko often works as a safe fallback for physical objects. Sound changes: ikko (1), nikko (not common, use niko), sanko (3), rokko (6), hakko/hachiko (8), jukko (10)."},

  {type:"teach", trg:"枚(まい)", src:"(counter for flat objects)", pos:"part", gender:null,
   note:"Counter for flat, thin items: paper, plates, shirts, tickets, slices.\nKanji: 枚.",
   example:"A: 切手(きって)は何枚(なんまい)ですか?\nB: 五枚(ごまい)です。",
   exampleSrc:"A: How many stamps?\nB: Five.",
   funFact:"Mai covers anything flat: kami (paper), sara (plates), shatsu (shirts), kippu (tickets), even pizza slices. No sound changes. Simply attach the number: ichimai, nimai, sanmai... Easy to remember."},

  {type:"teach", trg:"本(ほん)", src:"(counter for long, thin objects)", pos:"part", gender:null,
   note:"Counter for long cylindrical objects: pens, bottles, trees, fingers.\nSame kanji as 'book' but different meaning here.\nKanji: 本.",
   example:"A: ペンを二本(にほん)ください。\nB: はい、二本(にほん)ですね。",
   exampleSrc:"A: Two pens, please.\nB: Two pens, right?",
   funFact:"This is the same kanji 本 as in hon (book), but used as a counter it means long thin things. Sound changes: 一本(いっぽん) (1), 二本(にほん) (2), 三本(さんぼん) (3), 四本(よんほん) (4), 五本(ごほん) (5), 六本(ろっぽん) (6), 七本(ななほん) (7), 八本(はっぽん) (8), 九本(きゅうほん) (9), 十本(じゅっぽん) (10)."},

  {type:"mc", q:"Which counter would you use for a plate?", opts:["回数(かいすう)","枚(まい)","円(えん)","本(ほん)"], ans:"枚(まい)",
   hint:"Plates are flat objects. The flat-object counter is the right choice."},

  {type:"tip", title:"Counter Sound Changes",
   text:"Counters change sounds with certain numbers:\n\n本(ほん) (long objects):\n1 = 一本(いっぽん), 3 = 三本(さんぼん), 6 = 六本(ろっぽん), 8 = 八本(はっぽん), 10 = 十本(じゅっぽん)\n\n個(こ) (small objects):\n1 = 一個(いっこ), 6 = 六個(ろっこ), 8 = 八個(はっこ), 10 = 十個(じゅっこ)\n\n枚(まい) (flat objects):\nNo sound changes. Simply add the number.",
   deepDive:{title:"Why counters exist",
    text:"Japanese always pairs a number with a counter that describes the shape or category of what you are counting.\n\nYou cannot just say 'san' (three) alone. You must say:\n三個(さんこ) (three small things)\n三枚(さんまい) (three flat things)\n三本(さんぼん) (three long things)\n\nThis is similar to English saying 'three sheets of paper' instead of 'three papers.'"}},

  {type:"teach", trg:"ください", src:"please (give me)", pos:"verb", gender:null,
   note:"Used when requesting items. Polite imperative form of kureru (to give).\nPattern: noun + を + ください.",
   example:"A: この赤(あか)い傘(かさ)をください。\nB: はい、三百(さんびゃく)円(えん)です。",
   exampleSrc:"A: Please give me this red umbrella.\nB: Yes, that is 300 yen.",
   funFact:"Kudasai literally means 'please lower/hand down to me.' It comes from kudasaru (to bestow from above). When shopping, you point and say 'kore wo kudasai' (this, please) and it works everywhere."},

  {type:"fb", s:"ペンを 三{1} ください。\n(Three pens, please.)", a:"本(ぼん)", opts:["本(ぼん)","個(こ)","枚(まい)","円(えん)"], sSrc:"Three pens, please.",
   hint:"The long-object counter with the sound change for the number three."},

  {type:"teach", trg:"三百(さんびゃく)", src:"three hundred (300)", pos:"num", gender:null,
   note:"Sound change: 三(さん) + 百(ひゃく) becomes 三百(さんびゃく).\nSimilar: 600 = 六百(ろっぴゃく), 800 = 八百(はっぴゃく).",
   example:"A: いくらですか?\nB: 三百(さんびゃく)円(えん)です。",
   exampleSrc:"A: How much?\nB: 300 yen.",
   funFact:"These sound changes (rendaku) happen throughout Japanese to make words flow more smoothly. San + hyaku becomes sanbyaku. Roku + hyaku becomes roppyaku. The pattern follows the same voicing rules across the language."},

  {type:"teach", trg:"五千(ごせん)", src:"five thousand (5,000)", pos:"num", gender:null,
   note:"5,000 yen is a common banknote denomination in Japan.",
   example:"A: この時計(とけい)はいくらですか?\nB: 五千(ごせん)円(えん)です。",
   exampleSrc:"A: How much is this watch?\nB: It is 5,000 yen.",
   funFact:"The 5,000-yen bill features Tsuda Umeko, a pioneering educator who studied in America at age 6 in 1871 and later founded Tsuda University. She replaced the previous male portrait in the 2024 redesign."},

  {type:"mc", q:"一本(いっぽん) is the counter reading for:", opts:["One flat object","One small object","One long object","One yen"], ans:"One long object",
   hint:"Pon/bon/hon is the l...-o... counter. Ippon = one l... thing."},

  {type:"fb", s:"この 時計(とけい)は {1}円(えん) です。\n(This watch is 10,000 yen.)", a:"一万(いちまん)", opts:["一万(いちまん)","十(じゅう)","百(ひゃく)","千(せん)"], sSrc:"This watch is 10,000 yen.",
   hint:"The unit for ten thousand in Japanese."},

  {type:"match", pairs:[{trg:"百(ひゃく)",src:"100"},{trg:"千(せん)",src:"1,000"},{trg:"万(まん)",src:"10,000"},{trg:"三百(さんびゃく)",src:"300"}]},

  {type:"match", pairs:[{trg:"個(こ)",src:"counter: small objects"},{trg:"枚(まい)",src:"counter: flat objects"},{trg:"本(ほん)",src:"counter: long objects"},{trg:"ください",src:"please (give me)"}]},

  {type:"fb", s:"すみません、このりんごを三個(さんこ){1}。",
   a:["ください"],
   opts:["ください","あります","います","です"],
   hint:"You are at a market and politely asking the vendor to give you three apples. This word means 'please give me.'",
   sSrc:"Excuse me, {1} three of these apples."},

  {type:"mc", q:"How do you say 'two flat objects' (like two tickets)?", opts:["二個(にこ)","二本(にほん)","二十(にじゅう)","二枚(にまい)"], ans:"二枚(にまい)",
   hint:"Flat things use the mai counter. No sound changes with two."},

  {type:"mc", q:"三千(さんぜん) means:", opts:["3,000","30,000","30","300"], ans:"3,000",
   hint:"Sen becomes zen after san. San + sen = sanzen."},

  {type:"fb", s:"りんごを {1}個(こ) ください。\n(Five apples, please.)", a:"五(ご)", opts:["五(ご)","三(さん)","二(に)","六(ろっ)"], sSrc:"Five apples, please.",
   hint:"The number that comes before ko for five small items."},

  {type:"mc", q:"You want to buy 2 bottles of water. Which is correct?", opts:["水(みず)を二枚(にまい)ください","水(みず)を二本(にほん)ください","水(みず)を二個(にこ)ください","二(ふた)つの水(みず)をください"], ans:"水(みず)を二本(にほん)ください",
   hint:"Bottles are long, cylindrical objects. Use the matching counter."},

  {type:"tip", title:"Shopping Survival Kit",
   text:"Point and say:\nこれをください。= This one, please.\n\nAsk the price:\nいくらですか? = How much?\n\nState quantity:\n三個(さんこ)ください。= Three, please. (small items)\n二枚(にまい)ください。= Two, please. (flat items)\n一本(いっぽん)ください。= One, please. (long items)",
   deepDive:{title:"Real shopping in Japan",
    text:"At a convenience store (konbini), the cashier will say the total and you pay. No need for complex conversation.\n\nAt markets and department stores, you might hear:\nいらっしゃいませ! (Welcome!)\nおいくらですか? (How much? with polite お)\nまた おこしください (Please come again)\n\nJapan is still largely a cash society, though cashless payment is growing fast."}},
{type:"match",pairs:[{trg:"五千(ごせん)",src:"five thousand (5,000)"}]}]},

,BATCH3_L1
,BATCH4_L01
,BATCH4_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1

// ═══ Essential N5 B2: Time Words, Core Verbs & Adjectives ═══
,{id:"jav2_u4l_essential_n5_b2", title:"今日(きょう)は楽(たの)しい！", icon:"\u{1F4C5}", xp:15, board:true, steps:[

  {type:"intro", title:"今日(きょう)は楽(たの)しい！",
   desc:"Eight foundational JLPT N5 words: two time words, two core verbs, a key noun, and three everyday adjectives. These unlock hundreds of natural Japanese sentences.",
   goals:["Say today and tomorrow in Japanese","Use the verbs 'speak' and 'write' in polite sentences","Describe things as fun, good, or old"]},

  {type:"teach", trg:"今日(きょう)", src:"today", pos:"noun", gender:null,
   phonetic:"kyō",
   note:"今日(きょう) means today.\nTime words go near the start of a sentence, before the verb.\nPattern: 今日(きょう)は + topic + です/verb.",
   example:"A: 今日(きょう)は何曜日(なんようび)ですか？\nB: 今日(きょう)は月曜日(げつようび)です。",
   exampleSrc:"A: What day of the week is today?\nB: Today is Monday.",
   funFact:"今 (now) + 日 (day). The reading きょう is irregular (jukujikun) — it does not follow either character's standard sound. Japanese children learn it as one indivisible concept word, the same way English speakers learn 'today' as a single unit."},

  {type:"teach", trg:"明日(あした)", src:"tomorrow", pos:"noun", gender:null,
   phonetic:"ashita",
   note:"明日(あした) means tomorrow.\nAlternate reading: 明日(あす) — same kanji, more formal.\nUse exactly like 今日(きょう): time word first, then topic, then verb.",
   example:"A: 明日(あした)は学校(がっこう)がありますか？\nB: はい、明日(あした)もあります。",
   exampleSrc:"A: Is there school tomorrow?\nB: Yes, there is school tomorrow too.",
   funFact:"明 means 'bright/clear' (as in the next bright day), and 日 means 'sun/day.' The reading あした is the everyday word; あす is used in news and formal writing. Both are correct for JLPT N5."},

  {type:"teach", trg:"話(はな)す", src:"to speak / to talk", pos:"verb", gender:null,
   phonetic:"hanasu",
   note:"Dictionary form of 'to speak.' Godan verb (Group 1).\nPolite form: 話(はな)します.\nPatterns: 〜と話(はな)す (speak with), 〜を話(はな)す (speak about).",
   example:"A: 日本語(にほんご)を話(はな)しますか？\nB: はい、少(すこ)し話(はな)します。",
   exampleSrc:"A: Do you speak Japanese?\nB: Yes, I speak a little.",
   funFact:"話す (hanasu) and 放す (hanasu) are homophones — both mean 'to release' in different senses. 話す releases words; 放す releases a physical grip. Japanese uses kanji precisely to distinguish these in writing."},

  {type:"teach", trg:"書(か)く", src:"to write", pos:"verb", gender:null,
   phonetic:"kaku",
   note:"Dictionary form of 'to write.' Godan verb (Group 1).\nPolite form: 書(か)きます.\nPatterns: 〜を書(か)く (write something), 〜に書(か)く (write on/to).",
   example:"A: 何(なに)を書(か)きますか？\nB: 名前(なまえ)を書(か)きます。",
   exampleSrc:"A: What do you write?\nB: I write my name.",
   funFact:"The kanji 書 shows a hand holding a brush (聿) over a surface (曰). It appears in 図書館(としょかん) (library = drawing-book-hall) and 書道(しょどう) (calligraphy). This single kanji captures the whole concept of putting language into visible form."},

  {type:"teach", trg:"友達(ともだち)", src:"friend", pos:"noun", gender:null,
   phonetic:"tomodachi",
   note:"友達(ともだち) = friend. Includes both singular and plural.\nOne friend: 友達(ともだち)が一人(ひとり)います.\nSeveral friends: 友達(ともだち)がたくさんいます.",
   example:"A: 友達(ともだち)と話(はな)しますか？\nB: はい、毎日(まいにち)話(はな)します。",
   exampleSrc:"A: Do you talk with your friend?\nB: Yes, I talk every day.",
   funFact:"友 (friend) + 達 (suffix that softens and pluralizes). 達 appears in 私達(わたしたち) (we/us) and 子供達(こどもたち) (children). Tomodachi reached global fame through the 'Tomodachi Initiative,' the US humanitarian mission to Japan after the 2011 earthquake."},

  {type:"tip", title:"I-Adjective Basics",
   text:"I-adjectives (い形容詞) always end in い and conjugate as a group:\n\nDictionary / present:\n楽(たの)しい (fun), 良(よ)い (good), 古(ふる)い (old)\n\nPolite statement: add です after the い-form:\n楽(たの)しいです。(It is fun.)\n\nNegative: replace final い with くない:\n楽(たの)しくない (not fun), 古(ふる)くない (not old)\n\nBefore a noun: adjective goes directly before it:\n楽(たの)しい 授業(じゅぎょう) = fun class\n古(ふる)い 本(ほん) = old book",
   deepDive:{title:"良い vs いい",
    text:"良(よ)い (yoi) and いい (ii) both mean 'good' — same word, two readings.\n\nいい is the spoken everyday form. 良(よ)い is the written/formal form.\n\nOnly 良(よ)い conjugates correctly:\nNegative: 良(よ)くない (NOT いくない)\nPast: 良(よ)かった (NOT いかった)\n\nIn conversation you will hear いい most of the time. In reading and formal writing, 良(よ)い appears. Learning both from the start prevents a very common mistake."}},

  {type:"teach", trg:"楽(たの)しい", src:"fun / enjoyable", pos:"adj", gender:null,
   phonetic:"tanoshii",
   note:"I-adjective meaning fun or enjoyable.\nPolite: 楽(たの)しいです.\nNegative: 楽(たの)しくないです.\nKanji 楽 also means 'music' and 'ease.'",
   example:"A: 授業(じゅぎょう)は楽(たの)しいですか？\nB: はい、とても楽(たの)しいです！",
   exampleSrc:"A: Is the class fun?\nB: Yes, it is very fun!",
   funFact:"楽 is a remarkably versatile kanji. It means fun (tanoshii), music (gaku), and ease (raku) depending on context. 音楽(おんがく) = music (sound + ease/play). 気楽(きらく) = easygoing. 楽しむ = to enjoy. One shape, three emotional registers."},

  {type:"teach", trg:"良(よ)い", src:"good (formal/written form)", pos:"adj", gender:null,
   phonetic:"yoi / ii",
   note:"I-adjective meaning good. Formal reading: 良(よ)い. Spoken: いい.\nAlways conjugate from 良(よ)い:\nNegative: 良(よ)くない. Past: 良(よ)かった.",
   example:"A: この本(ほん)は良(よ)いですか？\nB: はい、とても良(よ)いです。",
   exampleSrc:"A: Is this book good?\nB: Yes, it is very good.",
   funFact:"良 (good/fine) is one of the most ancient and useful kanji. It appears in 良心(りょうしん) (conscience = good heart), 優良(ゆうりょう) (excellent), and 良薬(りょうやく) (effective medicine = good medicine). The dual reading yoi/ii reflects centuries of linguistic evolution."},

  {type:"teach", trg:"古(ふる)い", src:"old (for things, not people)", pos:"adj", gender:null,
   phonetic:"furui",
   note:"I-adjective for things that are old or aged.\nNEVER use for people's age — use 年(と)した for elderly.\nOpposite: 新(あたら)しい (new).",
   example:"A: この本(ほん)は古(ふる)いですか？\nB: はい、百年(ひゃくねん)前(まえ)の本(ほん)です。",
   exampleSrc:"A: Is this book old?\nB: Yes, it is a book from 100 years ago.",
   funFact:"古 appears in 古典(こてん) (classical literature), 古都(こと) (ancient capital — Kyoto's nickname), and 古代(こだい) (ancient times). Antiquities shops in Japan are called 古物商(こぶつしょう), literally 'old-things dealers.'"},

  {type:"mc", q:"今日(きょう) means:", opts:["yesterday","tomorrow","today","this week"], ans:"today",
   hint:"今 = now/this, 日 = day. The reading きょう is irregular but the meaning follows the kanji logic."},

  {type:"mc", q:"Which word means 'tomorrow'?", opts:["今日(きょう)","昨日(きのう)","明日(あした)","毎日(まいにち)"], ans:"明日(あした)",
   hint:"明 means bright/clear — as in the next bright day ahead."},

  {type:"fb", s:"日本語(にほんご)を{1}ますか？\n(Do you speak Japanese?)", a:"話(はな)し", opts:["話(はな)し","書(か)き","飲(の)み","食(た)べ"], sSrc:"Do you speak Japanese?",
   hint:"The polite stem of the verb meaning 'to speak.' Remove su, add masu."},

  {type:"fb", s:"毎日(まいにち)日記(にっき)を{1}きます。\n(I write a diary every day.)", a:"書(か)", opts:["書(か)","話(はな)","読(よ)","見(み)"], sSrc:"I write a diary every day.",
   hint:"The polite stem of the verb meaning 'to write.'"},

  {type:"mc", q:"友達(ともだち) means:", opts:["teacher","classmate","friend","family"], ans:"friend",
   hint:"Tomodachi became an internationally recognized Japanese word after the 2011 earthquake relief mission."},

  {type:"match", pairs:[{trg:"今日(きょう)",src:"today"},{trg:"明日(あした)",src:"tomorrow"},{trg:"友達(ともだち)",src:"friend"},{trg:"話(はな)す",src:"to speak"}]},

  {type:"mc", q:"楽(たの)しい describes something that is:", opts:["old","expensive","fun","small"], ans:"fun",
   hint:"This i-adjective uses the kanji 楽, which also means ease and music."},

  {type:"fb", s:"授業(じゅぎょう)はとても{1}しいです。\n(The class is very fun.)", a:"楽(たの)", opts:["楽(たの)","良(よ)","古(ふる)","高(たか)"], sSrc:"The class is very fun.",
   hint:"The i-adjective meaning enjoyable. Kanji: 楽."},

  {type:"mc", q:"良(よ)い and いい both mean 'good.' Which conjugates correctly?", opts:["いい (always)","良(よ)い (for conjugation)","Both conjugate the same way","Neither — adjective form is fixed"], ans:"良(よ)い (for conjugation)",
   hint:"Negative is 良(よ)くない, past is 良(よ)かった. Never いくない or いかった."},

  {type:"fb", s:"この本(ほん)は{1}いですか？百年(ひゃくねん)前(まえ)のものです。\n(Is this book old? It is from 100 years ago.)", a:"古(ふる)", opts:["古(ふる)","新(あたら)し","高(たか)","楽(たの)し"], sSrc:"Is this book old? It is from 100 years ago.",
   hint:"This i-adjective describes things that have aged over time. Never use it for a person's age."},

  {type:"match", pairs:[{trg:"楽(たの)しい",src:"fun / enjoyable"},{trg:"良(よ)い",src:"good"},{trg:"古(ふる)い",src:"old (things)"},{trg:"書(か)く",src:"to write"}]},

  {type:"mc", q:"古(ふる)い is used for:", opts:["a person who is elderly","a thing that is aged","something that is boring","something that is cheap"], ans:"a thing that is aged",
   hint:"Furui applies to objects and places — not people's age. For people, Japanese uses different expressions."},

  {type:"fb", s:"明日(あした)は友達(ともだち)と{1}します。\n(Tomorrow I will talk with my friend.)", a:"話(はな)", opts:["話(はな)","書(か)","食(た)べ","飲(の)"], sSrc:"Tomorrow I will talk with my friend.",
   hint:"The polite stem of the verb for speaking or talking with someone."},

]}
,
  JEXP_04_L1,
  JEXP_04_L2,
  JEXP_04_L3,
  JEXP_04_L4
]};
export default UNIT_04;
