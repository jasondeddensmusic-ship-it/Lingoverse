// Japanese V2 Unit 09. かいもの (Shopping)
import BATCH11_L1 from './_batch11_u09_L01.js';
import BATCH10_L1 from './_batch10_u09_L01.js';
import BATCH9_L1 from './_batch9_u09_L01.js';
import BATCH7_L1 from './_batch7_u09_L01.js';
import BATCH8_L1 from './_batch8_u09_L01.js';
import BATCH6_L1 from './_batch6_u09_L01.js';
import BATCH4_L02 from './_batch4_u09_L02.js';
import BATCH4_L01 from './_batch4_u09_L01.js';
import BATCH2_L1 from './_batch2_u09_L01.js';
// Level: A1.3. JLPT N5 aligned.
// Shopping vocabulary, transactional verbs, useful shopping phrases.

const UNIT_09 = {
  n:9, lang:"ja", srcLang:"en", track:"v2",
  title:"かいもの", sub:"Shopping",
  icon:"🛍️", level:"A1.3", color:"#7B5EE8",
  lessons:[

// ═══ L1: おみせで (At the Shop) ═══
{id:"jav2_u9l1", title:"おみせで", icon:"🏪", xp:15, board:true, steps:[
  {type:"intro", title:"おみせで",
   desc:"Learn the vocabulary you need for shopping in Japan. From shop workers to money, receipts, and bags, these words will help you navigate any store. You will also learn the essential phrase 'kore wo kudasai' (this one, please).",
   goals:["Name shop-related items: money, change, receipt, bag","Use kore wo kudasai to request items","Ask ikura desu ka (how much is it?)"]},

  {type:"teach", trg:"みせ", src:"shop / store", pos:"noun", gender:null,
   note:"General word for any shop. Often with honorific お: おみせ.\nKanji: 店.",
   example:"A: このみせはなにをうっていますか？\nB: くだものをうっています。",
   exampleSrc:"A: What does this shop sell?\nB: It sells fruit.",
   funFact:"店 shows a building (广) with divination (占), suggesting a fortune-telling stall, one of the earliest types of shops. Mise appears in many compounds: nomimise (bar/pub), hanaya (flower shop, different kanji), and the common omise (polite form with o-)."},

  {type:"teach", trg:"てんいん", src:"shop clerk / staff", pos:"noun", gender:null,
   note:"The person who works in a shop. Literally 'shop member.'\nKanji: 店員.",
   example:"A: てんいんさん、これはいくらですか？\nB: にせんえんです。",
   exampleSrc:"A: Excuse me (clerk), how much is this?\nB: It is 2,000 yen.",
   funFact:"店 (ten, shop) + 員 (in, member). Adding -san makes it polite: ten'in-san. Japanese shop clerks are famous for their service level. They greet every customer with 'irasshaimase!' (welcome!), wrap purchases carefully, and bow as you leave."},

  {type:"teach", trg:"おかね", src:"money", pos:"noun", gender:null,
   note:"General word for money. The お is an honorific prefix. Also means gold (kane).\nKanji: お金.",
   example:"A: おかねがありますか？\nB: はい、すこしあります。",
   exampleSrc:"A: Do you have money?\nB: Yes, I have a little.",
   funFact:"金 (kane) means both 'money' and 'gold/metal.' It appears in kingyou (goldfish), kinyoubi (Friday = gold day), and ginkou (bank = silver going). Japan is still heavily cash-based, though cashless payment is growing fast in cities."},

  {type:"teach", trg:"おつり", src:"change (money returned)", pos:"noun", gender:null,
   note:"The money returned after paying. The お is honorific. From tsuru (to fish/hook back).",
   example:"A: おつりはひゃくえんです。\nB: ありがとうございます。",
   exampleSrc:"A: Your change is 100 yen.\nB: Thank you very much.",
   funFact:"Otsuri literally comes from 'tsuri' meaning to fish up or hook back, as in getting money fished back to you. In Japan, cashiers place your change on a small tray rather than in your hand. This is considered more hygienic and polite."},

  {type:"mc", q:"てんいん means:", opts:["shop clerk","customer","manager","friend"], ans:"shop clerk",
   hint:"The compound of 's...' + 'member' describing the person who works there."},

  {type:"teach", trg:"レシート", src:"receipt", pos:"noun", gender:null,
   note:"Loanword from English 'receipt.' Written in katakana. Given at most shops.",
   example:"A: レシートはいりますか？\nB: はい、おねがいします。",
   exampleSrc:"A: Do you need a receipt?\nB: Yes, please.",
   funFact:"Cashiers always ask 'reshiito wa irimasu ka?' (do you need a receipt?). In convenience stores you will hear this every time. If you do not need one, say 'daijoubu desu' (I am fine) or 'kekkou desu' (no thank you). Receipts are important for returns."},

  {type:"teach", trg:"ふくろ", src:"bag / sack", pos:"noun", gender:null,
   note:"Since 2020, plastic bags cost money in Japan. Shops ask if you need one.\nKanji: 袋.",
   example:"A: ふくろはいりますか？\nB: いいえ、けっこうです。",
   exampleSrc:"A: Do you need a bag?\nB: No, I am fine.",
   funFact:"Since July 2020, Japan charges for plastic bags to reduce waste. Shops ask 'fukuro wa irimasu ka?' at checkout. Most Japanese people carry reusable bags (my-bag or eco-bag). Paper bags (kami-bukuro) are often still free at clothing stores."},

  {type:"teach", trg:"これをください", src:"this one, please (give me this)", pos:"verb", gender:null,
   note:"The most useful shopping phrase. Point at what you want and say this.",
   example:"A: これをください。\nB: はい、さんびゃくえんです。",
   exampleSrc:"A: This one, please.\nB: Yes, that is 300 yen.",
   funFact:"Kore (this) + wo (object particle) + kudasai (please give). This three-word phrase will get you through almost any shopping situation in Japan. Point, say 'kore wo kudasai,' and you are done. Works at restaurants, convenience stores, markets, everywhere."},

  {type:"fb", s:"{1}をください。\n(This one, please.)", a:"これ", opts:["これ","あれ","どれ","それ"], sSrc:"This one, please.",
   hint:"The demonstrative pronoun for something close to the speaker."},

  {type:"teach", trg:"いくらですか", src:"how much is it?", pos:"verb", gender:null,
   note:"The essential price question. いくら (how much) + ですか (is it?).",
   example:"A: このケーキはいくらですか？\nB: よんひゃくえんです。",
   exampleSrc:"A: How much is this cake?\nB: It is 400 yen.",
   funFact:"Ikura desu ka is the single most important shopping phrase after kore wo kudasai. In markets without price tags, this is your lifeline. At department stores and convenience stores, prices are always displayed, but at small shops and street stalls, you will need this."},

  {type:"teach", trg:"かう", src:"to buy", pos:"verb", gender:null,
   note:"A u-verb (godan). Polite: かいます. Pattern: [thing] を かう.\nKanji: 買う.",
   example:"A: なにをかいますか？\nB: ほんをかいます。",
   exampleSrc:"A: What will you buy?\nB: I will buy a book.",
   funFact:"買 shows a net (罒) over a shellfish (貝). Shells were ancient currency in China, so buying meant 'netting shells.' The kanji 貝 (shell) appears in many money-related characters: bai (buy), baikyaku (sell), zai (goods), and hin (quality)."},

  {type:"teach", trg:"うる", src:"to sell", pos:"verb", gender:null,
   note:"A u-verb (godan). Polite: うります. Opposite of かう.\nKanji: 売る.",
   example:"A: このみせはなにをうっていますか？\nB: にほんのおちゃをうっています。",
   exampleSrc:"A: What does this shop sell?\nB: It sells Japanese tea.",
   funFact:"売 shows a gentleman (士) above a child/person (儿) offering something at a stand. Urimono means 'things for sale.' Uriage (sales revenue) is a key business word. The passive form ureru (to sell well) is used to describe popular products."},

  {type:"mc", q:"これをください means:", opts:["How much is this?","This one, please","Where is this?","What is this?"], ans:"This one, please",
   hint:"The phrase you say while pointing at something you want to purchase."},

  {type:"match", pairs:[{trg:"みせ",src:"shop"},{trg:"てんいん",src:"shop clerk"},{trg:"おかね",src:"money"},{trg:"おつり",src:"change"}]},

  {type:"match", pairs:[{trg:"レシート",src:"receipt"},{trg:"ふくろ",src:"bag"},{trg:"かう",src:"to buy"},{trg:"うる",src:"to sell"}]},

  {type:"fb", s:"このほんは{1}ですか？\n(How much is this book?)", a:"いくら", opts:["いくら","なに","どこ","だれ"], sSrc:"How much is this book?",
   hint:"The question word specifically for asking about price."},

  {type:"mc", q:"ふくろはいりますか means:", opts:["Do you need a receipt?","Do you have money?","Do you need a bag?","Is it expensive?"], ans:"Do you need a bag?",
   hint:"Fukuro is the word for a b... or sack that shops offer at checkout."},

  {type:"tip", title:"Shopping Survival Phrases",
   text:"Essential phrases at any Japanese shop:\n\nいらっしゃいませ！ = Welcome! (clerk says this)\nこれをください。 = This one, please.\nいくらですか？ = How much?\nレシートをください。 = Receipt, please.\nふくろはいりますか？ = Do you need a bag? (clerk asks)\nありがとうございます。 = Thank you very much.",
   deepDive:{title:"Convenience store checkout",
    text:"At a konbini (convenience store), the clerk will ask several rapid-fire questions:\n\nおべんとうはあたためますか？ = Shall I heat your bento?\nおはしはいりますか？ = Do you need chopsticks?\nポイントカードはありますか？ = Do you have a point card?\n\nYou can answer hai (yes) or daijoubu desu (no, I am fine) to each."}},
]},

// ═══ L2: もうすこし (Bargaining & Giving) ═══
{id:"jav2_u9l2", title:"もうすこし", icon:"💰", xp:15, board:true, steps:[
  {type:"intro", title:"もうすこし",
   desc:"Learn verbs for giving and receiving, plus useful phrases for asking for discounts and making requests. Japanese has separate verbs for giving and receiving depending on social hierarchy.",
   goals:["Use harau (to pay) and morau (to receive)","Use ageru (to give) in basic sentences","Ask for a discount politely with mou sukoshi yasuku"]},

  {type:"teach", trg:"はらう", src:"to pay", pos:"verb", gender:null,
   note:"A u-verb (godan). Polite: はらいます. Pattern: [amount] を はらう.\nKanji: 払う.",
   example:"A: カードではらえますか？\nB: はい、だいじょうぶです。",
   exampleSrc:"A: Can I pay by card?\nB: Yes, that is fine.",
   funFact:"払 shows a hand (扌) sweeping away. The original meaning was 'to brush off/sweep,' which evolved into 'to pay' as in clearing a debt. Harau is used with various payment methods: genkin de harau (pay with cash), kaado de harau (pay by card)."},

  {type:"teach", trg:"もらう", src:"to receive / to get", pos:"verb", gender:null,
   note:"A u-verb (godan). Polite: もらいます. The speaker/in-group receives from others.",
   example:"A: おかあさんからなにをもらいましたか？\nB: ほんをもらいました。",
   exampleSrc:"A: What did you receive from your mother?\nB: I received a book.",
   funFact:"Morau is one of three giving/receiving verbs in Japanese: ageru (I give to you), kureru (you give to me), morau (I receive from you). This three-way split reflects how deeply Japanese language tracks the direction and social flow of actions."},

  {type:"teach", trg:"あげる", src:"to give (to someone)", pos:"verb", gender:null,
   note:"A ru-verb (ichidan). Polite: あげます. Used when YOU give to others.\nKanji: 上げる.",
   example:"A: ともだちになにをあげましたか？\nB: チョコレートをあげました。",
   exampleSrc:"A: What did you give your friend?\nB: I gave chocolate.",
   funFact:"上げる literally means 'to raise up.' Giving is conceptualized as raising something toward the other person. Japan has a rich gift-giving culture: ochuugen (mid-year gifts) and oseibo (year-end gifts) are formal occasions. The wrapping matters as much as the gift."},

  {type:"mc", q:"はらう means:", opts:["to pay","to receive","to give","to sell"], ans:"to pay",
   hint:"The action of clearing a debt, originally meaning 'to sweep away.'"},

  {type:"teach", trg:"もうすこし", src:"a little more", pos:"adv", gender:null,
   note:"Mou (more) + sukoshi (a little). Used for polite requests or comparisons.",
   example:"A: もうすこしやすくなりますか？\nB: そうですね...すこしだけ。",
   exampleSrc:"A: Can it be a little cheaper?\nB: Well... just a little.",
   funFact:"Mou sukoshi is extremely versatile. Mou sukoshi yasuku (a bit cheaper), mou sukoshi ookiku (a bit bigger), mou sukoshi matte (wait a bit more). It softens requests, making them sound less demanding. Politeness through understatement is core to Japanese communication."},

  {type:"teach", trg:"もうすこしやすく", src:"a little cheaper (please)", pos:"adv", gender:null,
   note:"The polite way to ask for a discount. Add なりますか？ to complete the question.",
   example:"A: もうすこしやすくなりますか？\nB: じゃ、にせんえんでいいですよ。",
   exampleSrc:"A: Can it be a little cheaper?\nB: OK, 2,000 yen is fine.",
   funFact:"Bargaining is not common in Japanese shops, supermarkets, or department stores. However, it is expected at flea markets (furima), electronics shops in Akihabara, and some tourist areas. Always ask gently and be ready to accept the answer gracefully."},

  {type:"fb", s:"カードで{1}えますか？\n(Can I pay by card?)", a:"はら", opts:["はら","もら","あげ","かえ"], sSrc:"Can I pay by card?",
   hint:"The stem of the verb meaning 'to pay' or 'to sweep away a debt.'"},

  {type:"teach", trg:"たかすぎる", src:"too expensive", pos:"adj", gender:null,
   note:"Takai (expensive) + sugiru (too much). Pattern: adj-stem + sugiru = too [adj].",
   example:"A: このかばんはいくらですか？\nB: ごまんえんです。\nA: たかすぎます！",
   exampleSrc:"A: How much is this bag?\nB: 50,000 yen.\nA: That is too expensive!",
   funFact:"The -sugiru suffix works with any adjective or verb: taka-sugiru (too expensive), oo-sugiru (too big), tabe-sugiru (eat too much), nomi-sugiru (drink too much). It is one of the most productive grammar patterns in Japanese."},

  {type:"teach", trg:"ちょうどいい", src:"just right / perfect", pos:"adj", gender:null,
   note:"Choudo (exactly) + ii (good). Used for size, amount, price, temperature, etc.",
   example:"A: このサイズはどうですか？\nB: ちょうどいいです！",
   exampleSrc:"A: How is this size?\nB: It is just right!",
   funFact:"Choudo means 'exactly/precisely.' Combined with ii (good), it means 'perfectly suited.' Japanese culture values things being just right, not too much, not too little. This connects to the aesthetic concept of wabi-sabi and finding beauty in balance."},

  {type:"teach", trg:"べつべつ", src:"separately (split the bill)", pos:"adv", gender:null,
   note:"Used when paying: べつべつでおねがいします = separate checks, please.",
   example:"A: おかんじょうはいっしょですか？\nB: べつべつでおねがいします。",
   exampleSrc:"A: Is the bill together?\nB: Separately, please.",
   funFact:"Betsu-betsu (literally 'separate-separate') is essential at restaurants with friends. Japanese dining culture traditionally uses warikan (splitting equally) rather than paying for exactly what you ordered. Saying betsu-betsu is perfectly acceptable at casual restaurants."},

  {type:"mc", q:"もうすこしやすく means:", opts:["much more expensive","a little cheaper","very cheap","too expensive"], ans:"a little cheaper",
   hint:"Mou sukoshi (a l... more) + yasuku (cheaply) = a gentle discount request."},

  {type:"teach", trg:"いっしょに", src:"together", pos:"adv", gender:null,
   note:"Often used with verbs: いっしょにたべましょう (let's eat together).\nKanji: 一緒に.",
   example:"A: いっしょにかいものにいきませんか？\nB: いいですね！いきましょう。",
   exampleSrc:"A: Would you like to go shopping together?\nB: That sounds good! Let's go.",
   funFact:"一緒 combines 一 (one) and 緒 (thread/together), meaning 'tied as one.' Issho-ni is one of the warmest words in Japanese. Issho-ni tabemasu (eat together), issho-ni ikimasu (go together). Doing things together is deeply valued in Japanese culture."},

  {type:"teach", trg:"ぜんぶ", src:"all / everything / total", pos:"noun", gender:null,
   note:"Used for totals: ぜんぶでいくらですか？ (How much for everything?)\nKanji: 全部.",
   example:"A: ぜんぶでいくらですか？\nB: さんぜんえんです。",
   exampleSrc:"A: How much is everything?\nB: 3,000 yen.",
   funFact:"全 (zen, complete/whole) + 部 (bu, part/section). Zenbu paradoxically combines 'whole' and 'part' to mean 'all parts = everything.' It is the go-to word when asking for a total: zenbu de (in total), zenbu tabeta (ate everything)."},

  {type:"fb", s:"{1}でいくらですか？\n(How much is everything?)", a:"ぜんぶ", opts:["ぜんぶ","すこし","いっしょ","べつべつ"], sSrc:"How much is everything?",
   hint:"The word meaning 'all' or 'total' when asking about the complete price."},

  {type:"match", pairs:[{trg:"はらう",src:"to pay"},{trg:"もらう",src:"to receive"},{trg:"あげる",src:"to give"},{trg:"かう",src:"to buy"}]},

  {type:"match", pairs:[{trg:"たかすぎる",src:"too expensive"},{trg:"ちょうどいい",src:"just right"},{trg:"べつべつ",src:"separately"},{trg:"ぜんぶ",src:"everything"}]},

  {type:"mc", q:"あげる is used when:", opts:["I receive something","Someone gives to me","I give to someone","I buy something"], ans:"I give to someone",
   hint:"The direction of this verb flows from the speaker outward to others."},

  {type:"fb", s:"ともだちにチョコレートを{1}ました。\n(I gave chocolate to my friend.)", a:"あげ", opts:["あげ","もらい","はらい","かい"], sSrc:"I gave chocolate to my friend.",
   hint:"The polite stem of the verb for giving something to another person."},

  {type:"mc", q:"ちょうどいい means:", opts:["too much","not enough","very expensive","just right"], ans:"just right",
   hint:"The combination of 'exactly' and 'good' expressing perfect fit."},

  {type:"tip", title:"Giving and Receiving in Japanese",
   text:"Japanese has THREE giving/receiving verbs:\n\nあげる = I give to you/them\nくれる = You/they give to ME\nもらう = I receive from you/them\n\nThe direction and social status matter:\nI give UP to superiors: さしあげる\nI give to equals/juniors: あげる\nSomeone gives DOWN to me: くださる\nSomeone gives to me: くれる",
   deepDive:{title:"Why three verbs?",
    text:"English uses 'give' for all directions. Japanese tracks WHO gives to WHOM:\n\nわたしが ともだちに あげる。(I give to friend.)\nともだちが わたしに くれる。(Friend gives to me.)\nわたしが ともだちに もらう。(I receive from friend.)\n\nThis three-way system reflects the Japanese focus on social relationships and the direction of favors. In-group vs out-group also matters."}},

  {type:"mc", q:"おかんじょうはべつべつでおねがいします means:", opts:["Separate checks, please.","Can we share one bill?","All together, please.","Which is cheaper?"], ans:"Separate checks, please.",
   hint:"べつべつ means 'each part on its own,' the opposite of combining into one."},

  {type:"mc", q:"いっしょに means:", opts:["separately","together","later","quickly"], ans:"together",
   hint:"This adverb combines the kanji for 'one' and 'thread,' meaning bound as one."},
]},

,BATCH2_L1
,BATCH4_L01
,BATCH4_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1
]};
export default UNIT_09;
