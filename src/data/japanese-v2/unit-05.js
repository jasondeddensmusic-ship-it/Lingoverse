// Japanese V2 Unit 05. 食(た)べ物(もの) (Food & Drink)
import BATCH11_L1 from './_batch11_u05_L01.js';
import BATCH10_L1 from './_batch10_u05_L01.js';
import BATCH9_L1 from './_batch9_u05_L01.js';
import BATCH7_L1 from './_batch7_u05_L01.js';
import BATCH8_L1 from './_batch8_u05_L01.js';
import BATCH6_L1 from './_batch6_u05_L01.js';
import BATCH4_L02 from './_batch4_u05_L02.js';
import BATCH4_L01 from './_batch4_u05_L01.js';
import BATCH3_L1 from './_batch3_u05_L01.js';
// Level: A1.2. JLPT N5 aligned.
import JEXP_05_L1 from './_temp_u05_expand_L01.js';import JEXP_05_L2 from './_temp_u05_expand_L02.js';import JEXP_05_L3 from './_temp_u05_expand_L03.js';
// Food vocabulary, drinks, eating verbs, taste adjectives, suki/kirai.

const UNIT_05 = {
  n:5, lang:"ja", srcLang:"en", track:"v2",
  title:"食(た)べ物(もの)", sub:"Food & Drink",
  icon:"\u{1F371}", level:"A1.2", color:"#7B5EE8",
  lessons:[

// ═══ L1: 食(た)べ物(もの)と飲(の)み物(もの) (Food & Drinks) ═══
{id:"jav2_u5l1", title:"食(た)べ物(もの)と飲(の)み物(もの)", icon:"\u{1F35A}", xp:15, board:true, steps:[
  {type:"intro", title:"食(た)べ物(もの)と飲(の)み物(もの)",
   desc:"Learn the most common food and drink words in Japanese. You will be able to order meals, talk about what you eat, and understand a basic Japanese menu.",
   goals:["Name common Japanese foods","Name everyday drinks","Use tabemono and nomimono as category words"]},

  {type:"teach", trg:"食(た)べ物(もの)", src:"food", pos:"noun", gender:null,
   note:"Compound word: taberu (to eat) + mono (thing). Literally 'eating thing.'",
   example:"A: 日本(にほん)の食(た)べ物(もの)が好(す)きですか?\nB: はい、大好(だいす)きです!",
   exampleSrc:"A: Do you like Japanese food?\nB: Yes, I love it!",
   funFact:"Mono (thing) combines with many verbs to make nouns. Nomimono (drink = drinking-thing), kaimono (shopping = buying-thing), tabemono (food = eating-thing). Once you know this pattern, you can guess many compound words."},

  {type:"teach", trg:"ご飯(はん)", src:"cooked rice / meal", pos:"noun", gender:null,
   note:"Means both 'cooked rice' and 'meal.' Context tells you which.\nKanji: ご飯.",
   example:"A: ご飯(はん)を食(た)べましたか?\nB: はい、もう食(た)べました。",
   exampleSrc:"A: Did you eat (your meal)?\nB: Yes, I already ate.",
   funFact:"Rice is so central to Japanese culture that gohan means both 'rice' and 'meal.' Breakfast is asa-gohan (morning rice), lunch is hiru-gohan (noon rice), and dinner is ban-gohan (evening rice). No rice, no meal."},

  {type:"teach", trg:"パン", src:"bread", pos:"noun", gender:null,
   note:"A loanword from Portuguese 'pao,' not English. Written in katakana.",
   example:"A: 朝(あさ)ご飯(はん)は何(なに)を食(た)べますか?\nB: パンを食(た)べます。",
   exampleSrc:"A: What do you eat for breakfast?\nB: I eat bread.",
   funFact:"Pan came from Portuguese missionaries in the 1500s, making it one of the oldest Western loanwords in Japanese. Japan has a huge bread culture today. Melon-pan (melon bread), an-pan (red bean bread), and curry-pan (curry bread) are iconic."},

  {type:"teach", trg:"肉(にく)", src:"meat", pos:"noun", gender:null,
   note:"General word for meat. Types: 牛肉(ぎゅうにく) (beef), 豚肉(ぶたにく) (pork), 鶏肉(とりにく) (chicken).\nKanji: 肉.",
   example:"A: 肉(にく)が好(す)きですか?\nB: はい、鶏肉(とりにく)が好(す)きです。",
   exampleSrc:"A: Do you like meat?\nB: Yes, I like chicken.",
   funFact:"The kanji 肉 is a pictograph of a piece of meat with visible sinews. Japan had a Buddhist-influenced ban on eating meat for over 1,000 years until the Meiji era (1868). Wagyu (Japanese beef) is now one of the most prized meats worldwide."},

  {type:"mc", q:"ご飯(はん) means:", opts:["cooked rice / meal","bread","meat","vegetables"], ans:"cooked rice / meal",
   hint:"This word has a double meaning related to Japan's staple grain."},

  {type:"teach", trg:"魚(さかな)", src:"fish", pos:"noun", gender:null,
   note:"General word for fish (as food or alive).\nKanji: 魚.",
   example:"A: 魚(さかな)を食(た)べますか?\nB: はい、毎日(まいにち)食(た)べます。",
   exampleSrc:"A: Do you eat fish?\nB: Yes, I eat it every day.",
   funFact:"Japan consumes more fish per person than almost any other country. The kanji 魚 is a pictograph of a fish with head, body, and tail. Tsukiji (now Toyosu) fish market in Tokyo handles over 2,000 tons of seafood daily."},

  {type:"teach", trg:"野菜(やさい)", src:"vegetable(s)", pos:"noun", gender:null,
   note:"General word for vegetables. No singular/plural distinction.\nKanji: 野菜.",
   example:"A: 野菜(やさい)を食(た)べてください。\nB: はい、わかりました。",
   exampleSrc:"A: Please eat your vegetables.\nB: OK, understood.",
   funFact:"野菜 combines 野 (field/wild) and 菜 (greens/vegetables). Japanese cuisine features many vegetables rarely seen in Western cooking: daikon (giant radish), renkon (lotus root), gobo (burdock), and shiso (perilla leaf)."},

  {type:"teach", trg:"果物(くだもの)", src:"fruit", pos:"noun", gender:null,
   note:"Compound: kuda (archaic for rotting/ripening) + mono (thing).\nKanji: 果物.",
   example:"A: 果物(くだもの)が好(す)きですか?\nB: はい、りんごが好(す)きです。",
   exampleSrc:"A: Do you like fruit?\nB: Yes, I like apples.",
   funFact:"Fruit in Japan is often luxury-priced. A single muskmelon can cost over 10,000 yen (70 USD). Perfectly shaped fruits are given as formal gifts. Department stores have entire floors dedicated to premium fruit."},

  {type:"fb", s:"日本(にほん)の{1}が好(す)きです。\n(I like Japanese food.)", a:"食(た)べ物(もの)", opts:["食(た)べ物(もの)","飲(の)み物(もの)","果物(くだもの)","野菜(やさい)"], sSrc:"I like Japanese food.",
   hint:"The general compound word meaning 'things to eat.'"},

  {type:"teach", trg:"卵(たまご)", src:"egg", pos:"noun", gender:null,
   note:"Can also be written たまご or 卵 (kanji). Raw eggs are commonly eaten in Japan.\nKanji: 卵.",
   example:"A: 卵(たまご)を何個(なんこ)買(か)いますか?\nB: 六個(ろっこ)ください。",
   exampleSrc:"A: How many eggs will you buy?\nB: Six, please.",
   funFact:"Japanese people eat raw eggs regularly. Tamago kake gohan (raw egg on hot rice with soy sauce) is a beloved breakfast. Japanese egg safety standards are among the strictest in the world, making raw consumption safe."},

  {type:"teach", trg:"水(みず)", src:"water", pos:"noun", gender:null,
   note:"Cold water. Hot water is お湯(ゆ) (oyu). Tap water in Japan is safe to drink.\nKanji: 水.",
   example:"A: 水(みず)をください。\nB: はい、どうぞ。",
   exampleSrc:"A: Water, please.\nB: Here you go.",
   funFact:"水 is a pictograph of flowing water. Mizu appears everywhere in Japanese: suiyoubi (Wednesday = water day), suiei (swimming = water swim), suisou (fish tank = water tank). Restaurants serve free cold water (ohiya) automatically."},

  {type:"teach", trg:"お茶(ちゃ)", src:"tea (green tea)", pos:"noun", gender:null,
   note:"Usually means green tea in Japan. The お is an honorific prefix.\nKanji: お茶.",
   example:"A: お茶(ちゃ)を飲(の)みますか?\nB: はい、お願(ねが)いします。",
   exampleSrc:"A: Will you have tea?\nB: Yes, please.",
   funFact:"Tea arrived in Japan from China around 800 AD. The 'o' prefix shows respect because tea was a precious luxury. Green tea (ryokucha) is the default. When Japanese people say 'ocha,' they always mean green tea, never black tea (koucha)."},

  {type:"mc", q:"お茶(ちゃ) usually refers to:", opts:["black tea","green tea","herbal tea","iced tea"], ans:"green tea",
   hint:"Japan's default t... variety, served in almost every restaurant for free."},

  {type:"teach", trg:"牛乳(ぎゅうにゅう)", src:"milk", pos:"noun", gender:null,
   note:"Literally 'cow + milk.' Also simply called ミルク (miruku) in casual speech.\nKanji: 牛乳.",
   example:"A: 牛乳(ぎゅうにゅう)を飲(の)みますか?\nB: 毎朝(まいあさ)飲(の)みます。",
   exampleSrc:"A: Do you drink milk?\nB: I drink it every morning.",
   funFact:"牛 (gyuu, cow) + 乳 (nyuu, milk). Dairy was almost unknown in Japan until the Meiji era (1868). School lunch programs made milk-drinking common after World War II. Today, Japan produces high-quality dairy, especially in Hokkaido."},

  {type:"teach", trg:"ジュース", src:"juice", pos:"noun", gender:null,
   note:"Loanword from English. Written in katakana. In Japan, can mean any soft drink.",
   example:"A: ジュースを飲(の)みますか?\nB: オレンジジュースをお願(ねが)いします。",
   exampleSrc:"A: Will you have juice?\nB: Orange juice, please.",
   funFact:"In Japanese, juusu covers not just fruit juice but any sweet drink, including soda. If you want actual fruit juice, specify: orenji juusu (orange), ringo juusu (apple). Vending machines selling drinks are everywhere in Japan, about 5 million nationwide."},

  {type:"teach", trg:"コーヒー", src:"coffee", pos:"noun", gender:null,
   note:"Loanword from Dutch 'koffie.' Written in katakana. Very popular in Japan.",
   example:"A: コーヒーを飲(の)みますか?\nB: はい、ブラックでお願(ねが)いします。",
   exampleSrc:"A: Will you have coffee?\nB: Yes, black please.",
   funFact:"The word came from Dutch traders in the 1600s, not English. Japan is the world's third-largest coffee importer. Canned coffee from vending machines (both hot and cold) is a Japanese invention. Kissaten (old-style coffee shops) are cultural treasures."},

  {type:"match", pairs:[{trg:"ご飯(はん)",src:"rice / meal"},{trg:"パン",src:"bread"},{trg:"肉(にく)",src:"meat"},{trg:"魚(さかな)",src:"fish"}]},

  {type:"match", pairs:[{trg:"水(みず)",src:"water"},{trg:"お茶(ちゃ)",src:"tea"},{trg:"牛乳(ぎゅうにゅう)",src:"milk"},{trg:"コーヒー",src:"coffee"}]},

  {type:"fb", s:"{1}をください。\n(Water, please.)", a:"水(みず)", opts:["水(みず)","お茶(ちゃ)","肉(にく)","パン"], sSrc:"Water, please.",
   hint:"The basic word for cold drinking water."},

  {type:"mc", q:"パン came to Japanese from which language?", opts:["English","French","Portuguese","Spanish"], ans:"Portuguese",
   hint:"Missionaries brought this word to Japan in the 1500s."},

  {type:"mc", q:"Which word means 'fruit'?", opts:["野菜(やさい)","卵(たまご)","食(た)べ物(もの)","果物(くだもの)"], ans:"果物(くだもの)",
   hint:"The compound literally means 'ripening thing.'"},
]},

// ═══ L2: おいしい! (Taste & Preferences) ═══
{id:"jav2_u5l2", title:"おいしい!", icon:"\u{1F60B}", xp:15, board:true, steps:[
  {type:"intro", title:"おいしい!",
   desc:"Learn to describe food, express what you like and dislike, and use the essential eating and drinking verbs. These are among the most useful everyday words in Japanese.",
   goals:["Use taberu (eat) and nomu (drink)","Describe food as delicious or bad-tasting","Express likes and dislikes with suki and kirai"]},

  {type:"teach", trg:"食(た)べる", src:"to eat", pos:"verb", gender:null,
   note:"A ru-verb (ichidan). Polite form: 食(た)べます. Past: 食(た)べました.\nKanji: 食べる.",
   example:"A: 何(なに)を食(た)べますか?\nB: お寿司(すし)を食(た)べます。",
   exampleSrc:"A: What will you eat?\nB: I will eat sushi.",
   funFact:"食 is a pictograph of a person bending over food with a lid on top. Taberu is one of the first verbs every Japanese learner masters. It is an ichidan (ru-verb), meaning it conjugates simply: tabe-masu, tabe-nai, tabe-ta."},

  {type:"teach", trg:"飲(の)む", src:"to drink", pos:"verb", gender:null,
   note:"A u-verb (godan). Polite form: 飲(の)みます. Past: 飲(の)みました.\nKanji: 飲む.",
   example:"A: 何(なに)を飲(の)みますか?\nB: お茶(ちゃ)を飲(の)みます。",
   exampleSrc:"A: What will you drink?\nB: I will drink tea.",
   funFact:"飲 combines 'food/drink' and 'to owe/lack,' suggesting the need to drink. Nomu is also used for taking medicine: kusuri wo nomu (to take medicine, literally 'drink medicine'). Unlike taberu, nomu is a godan (u-verb)."},

  {type:"teach", trg:"おいしい", src:"delicious / tasty", pos:"adj", gender:null,
   note:"The most common food compliment. An i-adjective. Say it after eating to show appreciation.",
   example:"A: このラーメンはおいしいですか?\nB: はい、とてもおいしいです!",
   exampleSrc:"A: Is this ramen delicious?\nB: Yes, it is very delicious!",
   funFact:"Saying oishii while eating is the best compliment to a Japanese cook. The word originally meant 'nice/good' in general. The TV show reaction of shouting 'oishii!' after the first bite is a real cultural practice, not just for cameras."},

  {type:"mc", q:"食(た)べる means:", opts:["to eat","to drink","to cook","to buy"], ans:"to eat",
   hint:"This ru-verb is specifically about consuming food, not liquids."},

  {type:"teach", trg:"まずい", src:"bad-tasting / gross", pos:"adj", gender:null,
   note:"Opposite of oishii. An i-adjective. Very direct, so use carefully around cooks.",
   example:"A: このコーヒーはおいしいですか?\nB: いいえ、ちょっとまずいです。",
   exampleSrc:"A: Is this coffee good?\nB: No, it is a bit bad-tasting.",
   funFact:"Saying mazui directly is considered quite rude. Japanese people usually soften it: chotto... (a little...) or add nigate desu (it is not to my taste). Mazui also means 'this is bad' as in a bad situation: mazui, chikoku da! (Oh no, I am late!)."},

  {type:"teach", trg:"好(す)き", src:"like / fond of", pos:"adj", gender:null,
   note:"Na-adjective. Pattern: [noun] が 好(す)き です. Use が (not を) before suki.\nKanji: 好き.",
   example:"A: お寿司(すし)が好(す)きですか?\nB: はい、大好(だいす)きです!",
   exampleSrc:"A: Do you like sushi?\nB: Yes, I love it!",
   funFact:"Suki is a na-adjective, not a verb. Japanese does not say 'I like sushi' but literally 'sushi is liked (by me).' Daisuki (big + like = love) is one of the most famous Japanese words worldwide, used in both food and romance contexts."},

  {type:"teach", trg:"嫌(きら)い", src:"dislike / hate", pos:"adj", gender:null,
   note:"Na-adjective. Opposite of suki. Pattern: [noun] が 嫌(きら)い です.\nKanji: 嫌い.",
   example:"A: 野菜(やさい)が嫌(きら)いですか?\nB: いいえ、好(す)きですよ。",
   exampleSrc:"A: Do you dislike vegetables?\nB: No, I like them!",
   funFact:"Saying kirai directly about someone's cooking is very rude. Japanese people prefer nigate (not good with) or chotto... (a little...). Daikirai (big + dislike = hate) is the nuclear option and mostly used by children or in dramatic situations."},

  {type:"fb", s:"お寿司(すし)が{1}です。\n(I like sushi.)", a:"好(す)き", opts:["好(す)き","嫌(きら)い","おいしい","まずい"], sSrc:"I like sushi.",
   hint:"The na-adjective meaning 'fond of' that uses ga, not wo."},

  {type:"teach", trg:"飲(の)み物(もの)", src:"drink / beverage", pos:"noun", gender:null,
   note:"Compound: nomu (to drink) + mono (thing). Same pattern as tabemono.",
   example:"A: 飲(の)み物(もの)は何(なに)がいいですか?\nB: お茶(ちゃ)がいいです。",
   exampleSrc:"A: What would you like to drink?\nB: Tea would be good.",
   funFact:"The verb+mono pattern is very productive in Japanese: tabemono (food), nomimono (drink), kaimono (shopping), yomimono (reading material), wasure-mono (forgotten item). Mono literally means 'thing.'"},

  {type:"teach", trg:"お腹(なか)が空(す)いた", src:"I am hungry", pos:"verb", gender:null,
   note:"Literally 'stomach became empty.' Casual form. Polite: お腹(なか)が空(す)きました.",
   example:"A: お腹(なか)が空(す)いた!\nB: じゃ、食(た)べに行(い)きましょう。",
   exampleSrc:"A: I am hungry!\nB: Then let's go eat.",
   funFact:"Onaka (belly) + ga suita (became empty). This is the standard way to say hungry. A more childish way is peko-peko, an onomatopoeia for a rumbling stomach. Harapeko (belly + peko) is the cute/comic version."},

  {type:"teach", trg:"喉(のど)が渇(かわ)いた", src:"I am thirsty", pos:"verb", gender:null,
   note:"Literally 'throat became dry.' Casual form. Polite: 喉(のど)が渇(かわ)きました.",
   example:"A: 喉(のど)が渇(かわ)いた!\nB: 水(みず)を飲(の)みましょう。",
   exampleSrc:"A: I am thirsty!\nB: Let's drink water.",
   funFact:"Nodo (throat) + ga kawaita (became dry). Japanese expresses many physical states as body-part descriptions: onaka ga suita (belly emptied = hungry), atama ga itai (head hurts = headache), me ga sameta (eyes awakened = woke up)."},

  {type:"mc", q:"おいしい means:", opts:["bad-tasting","delicious","hungry","thirsty"], ans:"delicious",
   hint:"The most common compliment for food in Japanese."},

  {type:"mc", q:"Which particle goes before 好(す)き?", opts:["を","に","が","で"], ans:"が",
   hint:"Suki uses a special particle that marks what is liked."},

  {type:"tip", title:"Suki vs Taberu: Different Structures",
   text:"With 食(た)べる (eat), use を:\nお寿司(すし)を 食(た)べます。(I eat sushi.)\n\nWith 好(す)き (like), use が:\nお寿司(すし)が 好(す)きです。(I like sushi.)\n\nThis is because suki is an adjective, not a verb.\nThe thing you like is the subject, not the object.",
   deepDive:{title:"Why ga instead of wo?",
    text:"In 'sushi ga suki desu,' sushi is technically the subject, not the object. The sentence literally means 'sushi is liked (by me).'\n\nThis is a common pattern with feelings and abilities:\n英語(えいご)が わかります。(English is understandable / I understand English.)\n音楽(おんがく)が 好(す)きです。(Music is liked / I like music.)"}},

  {type:"fb", s:"水(みず)を{1}ます。\n(I drink water.)", a:"飲(の)み", opts:["飲(の)み","食(た)べ","好(す)き","嫌(きら)い"], sSrc:"I drink water.",
   hint:"The polite stem of the verb meaning 'to drink.'"},

  {type:"match", pairs:[{trg:"おいしい",src:"delicious"},{trg:"まずい",src:"bad-tasting"},{trg:"好(す)き",src:"like"},{trg:"嫌(きら)い",src:"dislike"}]},

  {type:"match", pairs:[{trg:"食(た)べる",src:"to eat"},{trg:"飲(の)む",src:"to drink"},{trg:"お腹(なか)が空(す)いた",src:"I am hungry"},{trg:"喉(のど)が渇(かわ)いた",src:"I am thirsty"}]},

  {type:"mc", q:"飲(の)み物(もの) means:", opts:["food","vegetable","fruit","drink"], ans:"drink",
   hint:"Nomu (the consuming-liquid verb) + mono (thing) = ?"},

  {type:"fb", s:"{1}が空(す)いた!\n(I am hungry!)", a:"お腹(なか)", opts:["お腹(なか)","喉(のど)","頭(あたま)","手(て)"], sSrc:"I am hungry!",
   hint:"The body part that empties when you need to eat."},
]},

,BATCH3_L1
,BATCH4_L01
,BATCH4_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1
]};
export default UNIT_05;
