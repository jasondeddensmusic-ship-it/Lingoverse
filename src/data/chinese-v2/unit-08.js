// Unit 8: Shopping and Money
// Level: A2.1 (HSK 2)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_08 = {
n:8, lang:"zh", srcLang:"en", track:"v2",
title:"多少钱？", sub:"Shopping and Prices",
icon:"🛒", level:"A2.1", color:"#7B5EE8",
lessons:[

// ─── L1: Money and Prices ───
{id:"zhv2_u8l1", title:"多少钱？ How Much?", icon:"💰", xp:15, board:true, steps:[
{type:"intro", title:"多少钱？ How Much?",
 desc:"Learn to ask about prices and talk about money in Chinese. You will master the essential vocabulary for any shopping situation.",
 goals:["Ask prices with 多少钱","Understand Chinese currency words","Describe things as expensive or cheap"]},

{type:"teach", trg:"钱(qián)", src:"money", pos:"noun", gender:null,
 note:"Second tone. The general word for money.\nAlso appears in compound words related to finance.",
 example:"A: 你(nǐ)有(yǒu)钱(qián)吗(ma)？\nB: 有(yǒu)，我(wǒ)有(yǒu)一点儿(yìdiǎnr)钱(qián)。",
 exampleSrc:"A: Do you have money?\nB: Yes, I have a little money.",
 funFact:"钱 originally meant a type of farming tool, which was later used as currency in ancient China. The metal radical (钅) on the left tells you it relates to metal, since early Chinese money was made of bronze."},

{type:"teach", trg:"块(kuài)", src:"yuan (spoken)", pos:"part", gender:null,
 note:"The everyday spoken word for yuan (the Chinese currency unit).\n块 literally means 'piece' or 'lump.'",
 example:"A: 这(zhè)个(ge)多少(duōshǎo)钱(qián)？\nB: 五(wǔ)块(kuài)。",
 exampleSrc:"A: How much is this?\nB: Five yuan.",
 funFact:"The formal written word for yuan is 元(yuán), seen on price tags and receipts. But in speech, everyone says 块. It is like saying 'bucks' instead of 'dollars' in English, except 块 is standard, not slang."},

{type:"teach", trg:"多少(duōshǎo)", src:"how much / how many", pos:"pron", gender:null,
 note:"多 (many) + 少 (few). Used to ask about quantity or price.\nFor prices: 多少钱？ How much money?",
 example:"A: 这(zhè)个(ge)多少(duōshǎo)钱(qián)？\nB: 十(shí)块(kuài)。",
 exampleSrc:"A: How much is this?\nB: Ten yuan.",
 funFact:"Chinese has two ways to ask 'how many.' 几 is for small numbers (under 10) and needs a measure word. 多少 is for larger or unknown quantities and does not need one. For prices, always use 多少."},

{type:"teach", trg:"买(mǎi)", src:"to buy", pos:"verb", gender:null,
 note:"Third tone. Be careful: 买 (buy, third tone) and 卖 (sell, fourth tone)\nsound almost identical. Tone is everything!",
 example:"A: 你(nǐ)想(xiǎng)买(mǎi)什么(shénme)？\nB: 我(wǒ)想(xiǎng)买(mǎi)一(yī)个(ge)。",
 exampleSrc:"A: What do you want to buy?\nB: I want to buy one.",
 funFact:"买 and 卖 are a famous minimal pair in Chinese. The only difference is the tone: mǎi (third, buy) vs mài (fourth, sell). A common memory trick: when you buy, your voice dips down (third tone) like reaching for your wallet."},

{type:"teach", trg:"卖(mài)", src:"to sell", pos:"verb", gender:null,
 note:"Fourth tone. The counterpart to 买 (buy, third tone).\nThe characters even look similar: 卖 has an extra stroke on top.",
 example:"A: 你(nǐ)们(men)卖(mài)茶(chá)吗(ma)？\nB: 卖(mài)，我(wǒ)们(men)卖(mài)很(hěn)多(duō)茶(chá)。",
 exampleSrc:"A: Do you sell tea?\nB: Yes, we sell a lot of tea.",
 funFact:"In the traditional characters, 買 (buy) has 貝 (shell/money) at the bottom, showing you use money. 賣 (sell) adds an extra component on top meaning 'to go out.' Selling is making money go out from the buyer."},

{type:"teach", trg:"贵(guì)", src:"expensive", pos:"adj", gender:null,
 note:"Fourth tone. Used for prices and also means 'precious' or 'noble.'\nThe polite phrase 贵姓 asks 'your honorable surname.'",
 example:"A: 这(zhè)个(ge)太(tài)贵(guì)了(le)！\nB: 那(nà)个(ge)便宜(piányi)一点儿(yìdiǎnr)。",
 exampleSrc:"A: This one is too expensive!\nB: That one is a little cheaper.",
 funFact:"贵 contains the 贝 (shell) radical. In ancient China, cowrie shells were used as currency. Many money-related characters contain 贝: 贵 (expensive), 贫 (poor), 货 (goods), 财 (wealth)."},

{type:"teach", trg:"便宜(piányi)", src:"cheap / inexpensive", pos:"adj", gender:null,
 note:"Second tone + neutral tone. The opposite of 贵.\nAlways two syllables. Do not use 便 alone for this meaning.",
 example:"A: 这(zhè)个(ge)贵(guì)吗(ma)？\nB: 不(bù)贵(guì)，很(hěn)便宜(piányi)。",
 exampleSrc:"A: Is this expensive?\nB: Not expensive, very cheap.",
 funFact:"便宜 literally means 'convenient and fitting.' The idea is that a low price is convenient for you. Interestingly, 便宜 can also be a verb meaning 'to let someone have an advantage,' as in giving them a bargain."},

{type:"tip", title:"Asking Prices in Chinese",
 text:"The standard price question:\n\n这(zhè)个(ge)多少(duōshǎo)钱(qián)？\nHow much is this?\n\nCurrency structure:\n十五(shíwǔ)块(kuài) = 15 yuan\n三(sān)块(kuài)五(wǔ) = 3.50 yuan\n\nUseful responses:\n太(tài)贵(guì)了(le)！ = Too expensive!\n便宜(piányi)一点儿(yìdiǎnr)吧(ba)。 = Make it a little cheaper.\n\nNote: In spoken Chinese, you can drop 钱 and 块 when the context is clear about money.",
 deepDive:{title:"Bargaining Culture in China",
  text:"Bargaining (讨价还价) is common at street markets, small shops, and tourist areas. However, prices are fixed at supermarkets, malls, and chain stores.\n\nA typical bargaining exchange:\nCustomer: 多少钱？ (How much?)\nSeller: 一百块。 (100 yuan.)\nCustomer: 太贵了！便宜一点儿吧。 (Too expensive! A bit cheaper.)\nSeller: 八十块。 (80 yuan.)\n\nKnowing these phrases gives you real power in Chinese markets."}},

{type:"mc", q:"这(zhè)个(ge)多少(duōshǎo)钱(qián)？ What is this question asking?",
 opts:["Where is this?","How much is this?","What is this?","Who sells this?"],
 ans:"How much is this?",
 hint:"多少 asks 'how much/many' and 钱 means 'money.' Together they form a price question."},

{type:"match", pairs:[
  {trg:"钱(qián)", src:"money"},
  {trg:"块(kuài)", src:"yuan (spoken)"},
  {trg:"买(mǎi)", src:"to buy"},
  {trg:"卖(mài)", src:"to sell"},
  {trg:"贵(guì)", src:"expensive"}
]},

{type:"fb", s:"这(zhè)个(ge){1}钱(qián)？",
 a:["多少(duōshǎo)"],
 opts:["多少(duōshǎo)","什么(shénme)","怎么(zěnme)","几(jǐ)"],
 hint:"Which question word asks about quantity or price, meaning 'how much'?",
 sSrc:"How much is this? ({1} money?)"},

{type:"mc", q:"买(mǎi) and 卖(mài) differ only in:",
 opts:["Their tone","Their meaning is the same","Their radical","Their stroke count"],
 ans:"Their tone",
 hint:"One is third tone and one is fourth tone. This tiny difference changes buying into selling."},

{type:"fb", s:"这(zhè)个(ge)太(tài){1}了(le)！",
 a:["贵(guì)"],
 opts:["贵(guì)","便宜(piányi)","好(hǎo)","大(dà)"],
 hint:"You are complaining that the price is too high. Which adjective means 'expensive'?",
 sSrc:"This is too {1}!"},

{type:"mc", q:"Which is the correct way to say '15 yuan' in spoken Chinese?",
 opts:["十五(shíwǔ)块(kuài)","十五(shíwǔ)钱(qián)","一五(yīwǔ)块(kuài)","十五(shíwǔ)个(ge)"],
 ans:"十五(shíwǔ)块(kuài)",
 hint:"The number comes first, followed by the spoken word for the yuan currency unit."},

{type:"fb", s:"不(bù)贵(guì)，很(hěn){1}。",
 a:["便宜(piányi)"],
 opts:["便宜(piányi)","贵(guì)","好(hǎo)","多(duō)"],
 hint:"The opposite of expensive. This two-syllable word means the price is low.",
 sSrc:"Not expensive, very {1}."}
]},

// ─── L2: Shopping Choices ───
{id:"zhv2_u8l2", title:"还是或者 Choices and Options", icon:"🤔", xp:15, board:true, steps:[
{type:"intro", title:"还是或者 Choices and Options",
 desc:"Learn to express choices when shopping. Master the difference between 还是 (or, in questions) and 或者 (or, in statements), plus useful shopping adverbs.",
 goals:["Use 还是 for question choices and 或者 for statements","Express 'too much' with 太","Use 已经 (already) and 一共 (altogether)"]},

{type:"teach", trg:"太(tài)", src:"too (excessive)", pos:"adv", gender:null,
 note:"Fourth tone. Means 'excessively' or 'too much.'\nAlmost always followed by 了 at the end: 太...了。",
 example:"A: 这(zhè)个(ge)怎么样(zěnmeyàng)？\nB: 太(tài)贵(guì)了(le)！",
 exampleSrc:"A: How about this one?\nB: Too expensive!",
 funFact:"太 can express both negative excess (太贵了, too expensive) and positive emphasis (太好了, wonderful/great). When Chinese speakers say 太好了, they mean something is SO good it exceeds expectations."},

{type:"teach", trg:"还是(háishi)", src:"or (in questions)", pos:"conj", gender:null,
 note:"Used ONLY in questions to offer a choice between options.\nA 还是 B? Do you want A or B?",
 example:"A: 你(nǐ)要(yào)茶(chá)还是(háishi)水(shuǐ)？\nB: 我(wǒ)要(yào)茶(chá)。",
 exampleSrc:"A: Do you want tea or water?\nB: I want tea.",
 funFact:"Chinese carefully separates 'or' into two words. 还是 is for questions where you must CHOOSE one. 或者 is for statements where either option is fine. English uses 'or' for both, which can be ambiguous."},

{type:"teach", trg:"或者(huòzhě)", src:"or (in statements)", pos:"conj", gender:null,
 note:"Used in statements, not questions. Means either option is acceptable.\nThink of it as 'or' when you are NOT asking someone to choose.",
 example:"A: 明天(míngtiān)去(qù)哪儿(nǎr)？\nB: 我(wǒ)们(men)可以(kěyǐ)去(qù)商店(shāngdiàn)或者(huòzhě)饭店(fàndiàn)。",
 exampleSrc:"A: Where shall we go tomorrow?\nB: We can go to the shop or the restaurant.",
 funFact:"A simple test: if you are asking a question that requires a choice, use 还是. If you are making a statement where both options are possible, use 或者. They are never interchangeable."},

{type:"teach", trg:"已经(yǐjīng)", src:"already", pos:"adv", gender:null,
 note:"Third tone + first tone. Placed before the verb.\nOften paired with 了 at the end of the sentence.",
 example:"A: 你(nǐ)买(mǎi)了(le)吗(ma)？\nB: 已经(yǐjīng)买(mǎi)了(le)。",
 exampleSrc:"A: Did you buy it?\nB: I already bought it.",
 funFact:"已 means 'already/completed' and 经 means 'to pass through.' Together they convey that an action has already passed through to completion. The word feels definitive, like something is done and settled."},

{type:"teach", trg:"一共(yīgòng)", src:"altogether / in total", pos:"adv", gender:null,
 note:"First tone + fourth tone. Used when adding things up.\nVery common when paying at shops or restaurants.",
 example:"A: 一共(yīgòng)多少(duōshǎo)钱(qián)？\nB: 一共(yīgòng)二十(èrshí)块(kuài)。",
 exampleSrc:"A: How much altogether?\nB: Twenty yuan in total.",
 funFact:"一 means 'one' and 共 means 'together/shared.' The idea of adding everything into one total. You will hear this word every time you pay at a Chinese shop or restaurant."},

{type:"teach", trg:"找(zhǎo)", src:"to look for / to give change", pos:"verb", gender:null,
 note:"Third tone. Has two common meanings:\n1. To look for / to find. 2. To give change (money).",
 example:"A: 找(zhǎo)你(nǐ)五(wǔ)块(kuài)。\nB: 谢谢(xièxie)！",
 exampleSrc:"A: Here is five yuan change.\nB: Thank you!",
 funFact:"The 'give change' meaning comes from the idea of finding the difference. If something costs 15 yuan and you pay 20, the seller 'finds' the 5 yuan difference for you. One word, two very useful meanings."},

{type:"tip", title:"还是 vs 或者: Two Types of 'Or'",
 text:"Chinese splits English 'or' into two words:\n\n还是(háishi) = or (in QUESTIONS, choosing one)\n你(nǐ)要(yào)咖啡(kāfēi)还是(háishi)茶(chá)？\nDo you want coffee or tea? (Pick one!)\n\n或者(huòzhě) = or (in STATEMENTS, either is fine)\n你(nǐ)可以(kěyǐ)喝(hē)咖啡(kāfēi)或者(huòzhě)茶(chá)。\nYou can drink coffee or tea. (Either works.)\n\nSimple rule: Question? Use 还是. Statement? Use 或者.",
 deepDive:{title:"Why Chinese Separates 'Or'",
  text:"English 'or' is genuinely ambiguous. 'Do you want coffee or tea?' could mean 'pick one' (exclusive or) or 'either is fine' (inclusive or). Chinese eliminates this ambiguity by using different words.\n\n还是 forces a choice. It says: I need you to decide between A and B.\n或者 allows flexibility. It says: A and B are both options, no pressure.\n\nThis distinction actually makes Chinese more precise than English in this area."}},

{type:"mc", q:"你(nǐ)要(yào)茶(chá)还是(háishi)水(shuǐ)？ This sentence uses 还是 because:",
 opts:["It is asking for a choice","It is making a statement","It is talking about the past","It uses 太 for emphasis"],
 ans:"It is asking for a choice",
 hint:"还是 appears in sentences that ask someone to decide between two options."},

{type:"match", pairs:[
  {trg:"太(tài)", src:"too (excessive)"},
  {trg:"还是(háishi)", src:"or (questions)"},
  {trg:"或者(huòzhě)", src:"or (statements)"},
  {trg:"已经(yǐjīng)", src:"already"}
]},

{type:"fb", s:"你(nǐ)买(mǎi)这(zhè)个(ge){1}那(nà)个(ge)？",
 a:["还是(háishi)"],
 opts:["还是(háishi)","或者(huòzhě)","和(hé)","也(yě)"],
 hint:"You are asking someone to choose between this one and that one. Which 'or' is for questions?",
 sSrc:"Are you buying this one {1} that one?"},

{type:"mc", q:"他(tā)已经(yǐjīng)买(mǎi)了(le)。 What does 已经 tell us?",
 opts:["He wants to buy","He will buy later","He has already bought","He cannot buy"],
 ans:"He has already bought",
 hint:"This adverb signals that an action is completed, finished, done."},

{type:"fb", s:"{1}多少(duōshǎo)钱(qián)？",
 a:["一共(yīgòng)"],
 opts:["一共(yīgòng)","已经(yǐjīng)","还是(háishi)","太(tài)"],
 hint:"You want to know the total price of everything together. Which word means 'altogether'?",
 sSrc:"{1} how much?"},

{type:"mc", q:"你(nǐ)可以(kěyǐ)坐(zuò)公交(gōngjiāo)___地铁(dìtiě)。 Which word fills the blank?",
 opts:["还是(háishi)","或者(huòzhě)","和(hé)","但是(dànshì)"],
 ans:"或者(huòzhě)",
 hint:"This is a statement offering two possibilities, not a question forcing a choice."},

{type:"fb", s:"找(zhǎo)你(nǐ)三(sān){1}。",
 a:["块(kuài)"],
 opts:["块(kuài)","个(ge)","钱(qián)","元(yuán)"],
 hint:"The cashier is giving you change. Which spoken unit word follows the number for yuan?",
 sSrc:"Here is three {1} change."},

{type:"match", pairs:[
  {trg:"一共(yīgòng)", src:"altogether"},
  {trg:"找(zhǎo)", src:"to give change"},
  {trg:"块(kuài)", src:"yuan (spoken)"},
  {trg:"多少(duōshǎo)", src:"how much"}
]},

{type:"mc", q:"太(tài)好(hǎo)了(le)！ What does 太 express here?",
 opts:["Negative excess","Positive emphasis (so good!)","A question","Past tense"],
 ans:"Positive emphasis (so good!)",
 hint:"太 can mean 'too much' negatively OR 'so/wonderfully' positively, depending on the adjective."}
]},

// ─── L3: Clothes and Measure Words ───
{id:"zhv2_u8l3", title:"买衣服 Buying Clothes", icon:"👔", xp:15, board:true, steps:[
{type:"intro", title:"买衣服 Buying Clothes",
 desc:"Learn vocabulary for buying clothes and master two important measure words. Chinese uses special counting words for different types of objects.",
 goals:["Use 穿 (to wear) for clothing","Learn measure words 件 and 条","Practice a complete shopping dialogue"]},

{type:"teach", trg:"穿(chuān)", src:"to wear / to put on", pos:"verb", gender:null,
 note:"First tone. Used for clothes you put ON your body.\nCovers both 'to wear' and 'to put on.'",
 example:"A: 你(nǐ)今天(jīntiān)穿(chuān)什么(shénme)？\nB: 我(wǒ)穿(chuān)一(yī)件(jiàn)白(bái)的(de)。",
 exampleSrc:"A: What are you wearing today?\nB: I am wearing a white one.",
 funFact:"穿 originally meant 'to pierce through' or 'to pass through.' Putting on clothes is like passing your body through the fabric. The character still keeps this meaning: 穿过 means 'to pass through' a place."},

{type:"teach", trg:"件(jiàn)", src:"measure word for clothing (upper body)", pos:"part", gender:null,
 note:"Fourth tone. The measure word for shirts, jackets, coats, dresses.\nUsed for upper body clothing and general garments.",
 example:"A: 你(nǐ)要(yào)买(mǎi)几(jǐ)件(jiàn)？\nB: 我(wǒ)要(yào)买(mǎi)两(liǎng)件(jiàn)。",
 exampleSrc:"A: How many pieces do you want to buy?\nB: I want to buy two.",
 funFact:"件 is also used for events, matters, and luggage. You count letters (一件信), suitcases (一件行李), and even incidents (一件事) with 件. The common thread is 'an individual item or affair.'"},

{type:"teach", trg:"条(tiáo)", src:"measure word for pants, scarves, fish", pos:"part", gender:null,
 note:"Second tone. Used for long, thin, or strip-shaped things.\nPants, skirts, scarves, fish, roads, and rivers all use 条.",
 example:"A: 这(zhè)条(tiáo)多少(duōshǎo)钱(qián)？\nB: 这(zhè)条(tiáo)五十(wǔshí)块(kuài)。",
 exampleSrc:"A: How much is this one (pants/scarf)?\nB: This one is fifty yuan.",
 funFact:"条 groups together anything long and narrow. A pair of pants, a fish, a road, a river, even a piece of news (一条消息). The logic is shape-based: if it is elongated, it probably uses 条."},

{type:"tip", title:"Measure Words for Shopping",
 text:"Chinese requires a measure word between a number and a noun:\n\n个(ge) = general/default measure word\n件(jiàn) = clothing (tops, dresses), items, events\n条(tiáo) = long things (pants, scarves, fish, roads)\n杯(bēi) = cups/glasses of drinks\n块(kuài) = yuan (money), also pieces/chunks\n\nExamples:\n一(yī)件(jiàn)衣服(yīfu) = one piece of clothing\n两(liǎng)条(tiáo)裤子(kùzi) = two pairs of pants\n三(sān)个(ge)人(rén) = three people\n\nUsing the right measure word shows language skill, but 个 works as a safe default when you forget.",
 deepDive:{title:"Why Measure Words Exist",
  text:"English actually has measure words too, but only for uncountable nouns: a 'cup' of coffee, a 'piece' of paper, a 'pair' of pants. Chinese extends this system to ALL nouns.\n\nThere are over 100 measure words in Chinese, but about 10 cover 90 percent of daily use. The most important ones are: 个 (general), 件 (clothing/items), 条 (long things), 杯 (drinks), 本 (books), 张 (flat things), and 块 (pieces/yuan).\n\nWhen in doubt, use 个. Native speakers will understand you, even if it is not perfectly correct."}},

{type:"mc", q:"一(yī)件(jiàn) is the correct measure word combination for:",
 opts:["A shirt or jacket","A pair of pants","A cup of tea","A piece of paper"],
 ans:"A shirt or jacket",
 hint:"件 is used for upper body garments, dresses, and general clothing items."},

{type:"match", pairs:[
  {trg:"穿(chuān)", src:"to wear"},
  {trg:"件(jiàn)", src:"measure word: tops, items"},
  {trg:"条(tiáo)", src:"measure word: long things"},
  {trg:"便宜(piányi)", src:"cheap"}
]},

{type:"fb", s:"我(wǒ)想(xiǎng)买(mǎi)两(liǎng){1}裤子(kùzi)。",
 a:["条(tiáo)"],
 opts:["条(tiáo)","件(jiàn)","个(ge)","块(kuài)"],
 hint:"Pants are long and narrow. Which measure word is used for elongated objects?",
 sSrc:"I want to buy two {1} pants."},

{type:"mc", q:"你(nǐ)今天(jīntiān)穿(chuān)什么(shénme)？ What is this asking?",
 opts:["What did you buy today?","What are you wearing today?","What do you want today?","Where are you going today?"],
 ans:"What are you wearing today?",
 hint:"穿 is the verb for putting clothes on your body. The question asks about your outfit."},

{type:"fb", s:"我(wǒ)要(yào)买(mǎi)一(yī){1}衣服(yīfu)。",
 a:["件(jiàn)"],
 opts:["件(jiàn)","条(tiáo)","个(ge)","杯(bēi)"],
 hint:"Clothing items like shirts and dresses use which measure word?",
 sSrc:"I want to buy one {1} piece of clothing."},

{type:"mc", q:"这(zhè)条(tiáo)太(tài)贵(guì)了(le)，有(yǒu)没有(méiyǒu)便宜(piányi)的(de)？\nWhat is the shopper asking?",
 opts:["Is this long enough?","Do you have a cheaper one?","Can I try this on?","Where is the fitting room?"],
 ans:"Do you have a cheaper one?",
 hint:"太贵了 means 'too expensive,' and 便宜的 means 'a cheap one.' What does the shopper want?"},

{type:"fb", s:"你(nǐ)今天(jīntiān){1}的(de)衣服(yīfu)很(hěn)好看(hǎokàn)！",
 a:["穿(chuān)"],
 opts:["穿(chuān)","买(mǎi)","卖(mài)","要(yào)"],
 hint:"Which verb describes having clothes on your body right now?",
 sSrc:"The clothes you are {1} today look great!"},

{type:"match", pairs:[
  {trg:"一(yī)件(jiàn)衣服(yīfu)", src:"one piece of clothing"},
  {trg:"两(liǎng)条(tiáo)裤子(kùzi)", src:"two pairs of pants"},
  {trg:"多少(duōshǎo)钱(qián)", src:"how much money"},
  {trg:"太(tài)贵(guì)了(le)", src:"too expensive"}
]},

{type:"mc", q:"A customer says: 一共(yīgòng)多少(duōshǎo)钱(qián)？ The seller says: 三十五(sānshíwǔ)块(kuài)。\nThe customer pays 五十(wǔshí)块(kuài)。 How much change?",
 opts:["十(shí)块(kuài)","十五(shíwǔ)块(kuài)","二十(èrshí)块(kuài)","五(wǔ)块(kuài)"],
 ans:"十五(shíwǔ)块(kuài)",
 hint:"Subtract the total price from the amount paid: 50 minus 35 equals the change."},

{type:"fb", s:"已经(yǐjīng){1}了(le)三(sān)件(jiàn)衣服(yīfu)。",
 a:["买(mǎi)"],
 opts:["买(mǎi)","卖(mài)","穿(chuān)","找(zhǎo)"],
 hint:"Someone has already completed a purchase of three clothing items. Which verb means 'to buy'?",
 sSrc:"Already {1} three pieces of clothing."}
]}

]};

export default UNIT_08;
