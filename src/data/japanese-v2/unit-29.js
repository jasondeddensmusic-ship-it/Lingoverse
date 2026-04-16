// Japanese V2 Unit 29. けいざい (Economy)
import BATCH2_L04 from './_batch2_u29_L04.js';
import BATCH2_L03 from './_batch2_u29_L03.js';
import EXP_L3 from './_temp_u29_expand_L01.js';import EXP_L4 from './_temp_u29_expand_L02.js';import EXP_L5 from './_temp_u29_expand_L03.js';
// Level: B2.2. JLPT N2 aligned.
// けいき, インフレ, かぶしき, ゆにゅう, ゆしゅつ, しじょう, とうし.

const UNIT_29 = {
  n:29, lang:"ja", srcLang:"en", track:"v2",
  title:"けいざい", sub:"Economy",
  icon:"📈", level:"B2.2", color:"#7B5EE8",
  lessons:[

// ═══ L1: Economic Fundamentals ═══
{id:"jav2_u29l1", title:"Economic Fundamentals", icon:"💹", xp:15, board:true, steps:[
  {type:"intro", title:"Economic Fundamentals",
   desc:"Economic vocabulary is everywhere in Japanese media and daily life. From news broadcasts discussing けいき (economic conditions) to conversations about インフレ (inflation), these terms are essential for JLPT N2 and for understanding Japan as an economic society.",
   goals:["Use けいき, インフレ, かぶしき correctly","Discuss economic conditions in Japanese","Understand basic financial news vocabulary"]},

  {type:"teach", trg:"けいざい", src:"economy / economics", pos:"noun", gender:null,
   note:"Kanji: 経済. けいざいがくぶ = economics department.\nけいざいせいちょう = economic growth.",
   example:"A: にほんのけいざいはかいふくしつつあります。\nB: しつぎょうりつもさがっていますね。",
   exampleSrc:"A: Japan's economy is in the process of recovering.\nB: The unemployment rate is also falling.",
   funFact:"経済 originally comes from the classical Chinese phrase 経世済民 (keisai saimin), meaning 'govern the world and save the people.' The Meiji-era scholars who needed a word for 'economy' shortened this to 経済. So the Japanese word for economy carries a built-in ethical dimension: economics should serve the people."},

  {type:"teach", trg:"けいき", src:"economic conditions / business climate", pos:"noun", gender:null,
   note:"Kanji: 景気. けいきがいい = good economic conditions.\nけいきがわるい = recession/bad economy.",
   example:"A: さいきんけいきがいいですね。\nB: はい、しゅうにゅうもふえてきました。",
   exampleSrc:"A: The economy has been good recently.\nB: Yes, income has been increasing too.",
   funFact:"景気 uses 景 (scenery/view) and 気 (spirit/atmosphere). Economic conditions are literally described as the 'atmosphere of the scene.' When けいき is good, people feel optimistic and spend freely. The phrase けいきがいい can also casually mean 'generous' or 'bold' when describing a person's spending habits."},

  {type:"teach", trg:"インフレ", src:"inflation", pos:"noun", gender:null,
   note:"Short for インフレーション. Loanword from English.\nOpposite: デフレ (deflation).",
   example:"A: インフレでぶっかがあがっています。\nB: せいかつがたいへんですね。",
   exampleSrc:"A: Prices are rising due to inflation.\nB: Life is getting tough.",
   funFact:"Japan experienced the opposite problem for decades: デフレ (deflation). From the 1990s to 2020s, prices barely rose. The Bank of Japan tried everything to create some inflation. This long deflationary period, called the 'lost decades' (失われた十年), made Japan unique among developed economies."},

  {type:"mc", q:"けいきがわるい means:", opts:["The business climate is unfavorable","The weather is bad","Business is booming","The stock price fell"], ans:"The business climate is unfavorable",
   hint:"けいき refers to the overall atmosphere of commerce, and わるい means bad."},

  {type:"teach", trg:"かぶしき", src:"stock / shares", pos:"noun", gender:null,
   note:"Kanji: 株式. かぶしきしじょう = stock market.\nかぶしきがいしゃ = stock company (corporation).",
   example:"A: かぶしきしじょうがきょうおおきくさがりました。\nB: なにかげんいんがあるのでしょうか。",
   exampleSrc:"A: The stock market dropped significantly today.\nB: I wonder if there is a cause.",
   funFact:"株 originally means 'tree stump' or 'root.' The financial meaning comes from the idea of owning a 'share' or 'stake' in something rooted and growing. 株式会社 (kabushiki gaisha, abbreviated K.K.) is the standard corporate form in Japan, equivalent to 'Inc.' or 'Ltd.' You see it on every Japanese company's official name."},

  {type:"teach", trg:"ぶっか", src:"prices (of goods) / cost of living", pos:"noun", gender:null,
   note:"Kanji: 物価. ぶっかがあがる = prices rise.\nぶっかがさがる = prices fall. Different from ねだん (single item price).",
   example:"A: さいきんぶっかがあがっていませんか？\nB: はい、とくにしょくりょうひんがたかくなりました。",
   exampleSrc:"A: Haven't prices been rising recently?\nB: Yes, food prices especially have gone up.",
   funFact:"物価 uses 物 (things) and 価 (value/price). While ねだん refers to one item's price, ぶっか means the general price level across goods. The Consumer Price Index is しょうひしゃぶっかしすう in Japanese. Japan's famously stable ぶっか during the deflation era meant 100-yen shops thrived for decades."},

  {type:"fb", s:"{1}でぶっかがあがっています。\n(Prices are rising due to inflation.)", a:"インフレ", opts:["インフレ","デフレ","けいき","けいざい"], sSrc:"Prices are rising due to inflation.",
   hint:"The loanword for the economic phenomenon where prices rise across the board."},

  {type:"teach", trg:"しつぎょう", src:"unemployment", pos:"noun", gender:null,
   note:"Kanji: 失業. 失 (lose) + 業 (occupation).\nしつぎょうりつ = unemployment rate.",
   example:"A: しつぎょうりつがさんパーセントにさがりました。\nB: けいきがかいふくしているしょうこですね。",
   exampleSrc:"A: The unemployment rate has fallen to 3%.\nB: That is evidence that the economy is recovering.",
   funFact:"失業 literally means 'losing one's occupation.' Japan's unemployment rate is historically low compared to other developed nations, usually 2-3%. However, this masks issues like 非正規雇用 (hiseiki koyou, non-regular employment), where many workers hold temporary or part-time positions with fewer benefits."},

  {type:"mc", q:"かぶしきがいしゃ means:", opts:["A trading exchange","A corporation (the standard Japanese form)","A financial index","A shareholders' meeting"], ans:"A corporation (the standard Japanese form)",
   hint:"かぶしき + がいしゃ forms the term for the most common business entity type in Japan."},

  {type:"match", pairs:[{trg:"けいざい",src:"economy"},{trg:"けいき",src:"economic conditions"},{trg:"インフレ",src:"inflation"},{trg:"かぶしき",src:"stock/shares"}]},

  {type:"fb", s:"{1}りつがさんパーセントにさがりました。\n(The unemployment rate has fallen to 3%.)", a:"しつぎょう", opts:["しつぎょう","しゅうにゅう","けいざい","ぶっか"], sSrc:"The unemployment rate has fallen to 3%.",
   hint:"The noun meaning the state of losing one's job, combined with りつ (rate)."},

  {type:"match", pairs:[{trg:"ぶっか",src:"prices (general)"},{trg:"しつぎょう",src:"unemployment"},{trg:"けいき",src:"business climate"},{trg:"インフレ",src:"inflation"}]},
]},

// ═══ L2: Trade & Investment ═══
{id:"jav2_u29l2", title:"Trade & Investment", icon:"🌐", xp:15, board:true, steps:[
  {type:"intro", title:"Trade & Investment",
   desc:"Japan is one of the world's largest trading nations. Understanding imports, exports, markets, and investment vocabulary is essential for reading economic news and discussing global commerce. These terms appear constantly in NHK broadcasts and business newspapers.",
   goals:["Use ゆにゅう, ゆしゅつ for import/export","Use しじょう, とうし for market and investment","Discuss trade in Japanese"]},

  {type:"teach", trg:"ゆにゅう", src:"import", pos:"noun", gender:null,
   note:"Kanji: 輸入. ゆにゅうする = to import.\nゆにゅうひん = imported goods. Opposite: ゆしゅつ.",
   example:"A: にほんはエネルギーのおおくをゆにゅうにたよっています。\nB: とくにせきゆですね。",
   exampleSrc:"A: Japan relies on imports for much of its energy.\nB: Especially oil.",
   funFact:"輸入 uses 輸 (transport) and 入 (enter). Japan imports about 90% of its energy. This vulnerability shapes its foreign policy and economic strategy. The phrase ゆにゅうにたよる (to rely on imports) appears constantly in discussions of Japanese economic security. Food self-sufficiency is also low, around 38%."},

  {type:"teach", trg:"ゆしゅつ", src:"export", pos:"noun", gender:null,
   note:"Kanji: 輸出. ゆしゅつする = to export.\nゆしゅつひん = exported goods. Opposite: ゆにゅう.",
   example:"A: にほんのじどうしゃゆしゅつはせかいトップクラスです。\nB: トヨタやホンダはゆうめいですね。",
   exampleSrc:"A: Japan's automobile exports are world-class.\nB: Toyota and Honda are famous.",
   funFact:"輸出 uses 輸 (transport) and 出 (exit). Japan's export story transformed from cheap goods in the 1950s to high-tech products by the 1980s. The phrase メイド・イン・ジャパン (Made in Japan) went from meaning low quality to symbolizing precision and reliability. Today, Japan exports cars, electronics, machinery, and cultural products."},

  {type:"teach", trg:"しじょう", src:"market", pos:"noun", gender:null,
   note:"Kanji: 市場. Two readings: しじょう (financial/abstract) vs いちば (physical marketplace).\nしじょうちょうさ = market research.",
   example:"A: アジアのしじょうはきゅうそくにせいちょうしています。\nB: にほんきぎょうもしんしゅつしていますね。",
   exampleSrc:"A: Asian markets are growing rapidly.\nB: Japanese companies are also entering them.",
   funFact:"市場 has two completely different readings. しじょう means an abstract market (stock market, job market, real estate market). いちば means a physical marketplace where you buy fish or vegetables. 築地市場 (Tsukiji ichiba) was the famous fish market. The reading tells you which meaning is intended."},

  {type:"mc", q:"ゆにゅう and ゆしゅつ share the kanji 輸. What does 輸 mean?", opts:["Transport","Money","Buy","Sell"], ans:"Transport",
   hint:"The shared kanji relates to the physical movement of goods. 入 = enter, 出 = exit."},

  {type:"teach", trg:"とうし", src:"investment", pos:"noun", gender:null,
   note:"Kanji: 投資. とうしする = to invest.\nとうしか = investor. がいこくとうし = foreign investment.",
   example:"A: かれはふどうさんにとうししています。\nB: リスクもたかいですが、リターンもおおきいですね。",
   exampleSrc:"A: He invests in real estate.\nB: The risk is high, but the returns are also big.",
   funFact:"投資 uses 投 (throw) and 資 (capital/resources). Investing is literally 'throwing capital' into something. Japanese households historically preferred saving over investing, keeping money in low-interest bank accounts. The government's 'iDeCo' and 'NISA' programs aim to shift this culture toward investment."},

  {type:"teach", trg:"せきゆ", src:"petroleum / oil", pos:"noun", gender:null,
   note:"Kanji: 石油. 石 (stone) + 油 (oil).\nせきゆかかく = oil price. せきゆゆしゅつこく = oil-exporting country.",
   example:"A: せきゆのかかくがきゅうとうしています。\nB: ガソリンだいがしんぱいですね。",
   exampleSrc:"A: Oil prices are surging.\nB: I am worried about gasoline costs.",
   funFact:"石油 literally means 'stone oil,' reflecting the ancient observation of oil seeping from rocks. Japan has almost no domestic oil production. The 1973 oil crisis (オイルショック) devastated Japan's economy and permanently shaped its energy policy. It drove Japan to diversify energy sources and improve efficiency."},

  {type:"fb", s:"にほんはエネルギーのおおくを{1}にたよっています。\n(Japan relies on imports for much of its energy.)", a:"ゆにゅう", opts:["ゆにゅう","ゆしゅつ","しじょう","とうし"], sSrc:"Japan relies on imports for much of its energy.",
   hint:"The noun for bringing goods into a country from abroad."},

  {type:"teach", trg:"きぎょう", src:"enterprise / company", pos:"noun", gender:null,
   note:"Kanji: 企業. More formal than かいしゃ (company).\nちゅうしょうきぎょう = small and medium enterprises.",
   example:"A: おおくのにほんきぎょうがかいがいにしんしゅつしています。\nB: グローバルかがすすんでいますね。",
   exampleSrc:"A: Many Japanese enterprises are expanding overseas.\nB: Globalization is progressing.",
   funFact:"企業 is the formal, economic term for 'company,' while かいしゃ is the everyday word. 企 means 'plan/scheme' and 業 means 'business/industry.' News, textbooks, and policy documents prefer きぎょう. The phrase 日本企業 (Japanese enterprises) appears in nearly every economic discussion about Japan's global competitiveness."},

  {type:"mc", q:"しじょう (しじょう reading) refers to:", opts:["A fish vendor's stall","The broader arena of buying and selling","A department store","A shopping mall"], ans:"The broader arena of buying and selling",
   hint:"The しじょう reading is for intangible trading spaces, while いちば is for physical ones."},

  {type:"teach", trg:"ふどうさん", src:"real estate", pos:"noun", gender:null,
   note:"Kanji: 不動産. 不動 (immovable) + 産 (property).\nふどうさんや = real estate agency.",
   example:"A: とうきょうのふどうさんかかくはとてもたかいです。\nB: ちほうにくらべるとなんばいもちがいますね。",
   exampleSrc:"A: Real estate prices in Tokyo are very high.\nB: Compared to rural areas, they are many times different.",
   funFact:"不動産 literally means 'immovable property,' the same logic as English 'real estate' (from Latin 'res,' thing). Japan's 1980s bubble saw Tokyo land prices reach absurd heights. At the peak, the Imperial Palace grounds were theoretically worth more than all of California. The bubble's burst defined Japan's economic trajectory for decades."},

  {type:"fb", s:"かれは{1}にとうししています。\n(He invests in real estate.)", a:"ふどうさん", opts:["ふどうさん","かぶしき","せきゆ","しじょう"], sSrc:"He invests in real estate.",
   hint:"The two-word compound meaning property that does not move: land and buildings."},

  {type:"match", pairs:[{trg:"ゆにゅう",src:"import"},{trg:"ゆしゅつ",src:"export"},{trg:"しじょう",src:"market (financial)"},{trg:"とうし",src:"investment"}]},

  {type:"fb", s:"にほんの{1}ゆしゅつはせかいトップクラスです。\n(Japan's automobile exports are world-class.)", a:"じどうしゃ", opts:["じどうしゃ","でんしゃ","ひこうき","ふね"], sSrc:"Japan's automobile exports are world-class.",
   hint:"The compound noun for a self-moving vehicle, Japan's most famous export product."},

  {type:"match", pairs:[{trg:"せきゆ",src:"petroleum"},{trg:"きぎょう",src:"enterprise"},{trg:"ふどうさん",src:"real estate"},{trg:"ぶっか",src:"prices (general)"}]},
]},

,EXP_L3,EXP_L4,EXP_L5
,BATCH2_L03
,BATCH2_L04
]};
export default UNIT_29;
