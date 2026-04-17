// Japanese V2 Unit 29. 経済(けいざい) (Economy)
import BATCH11_L1 from './_batch11_u29_L01.js';
import BATCH10_L1 from './_batch10_u29_L01.js';
import BATCH9_L1 from './_batch9_u29_L01.js';
import BATCH7_L1 from './_batch7_u29_L01.js';
import BATCH8_L1 from './_batch8_u29_L01.js';
import BATCH6_L1 from './_batch6_u29_L01.js';
import BATCH5_L02 from './_batch5_u29_L02.js';
import BATCH5_L01 from './_batch5_u29_L01.js';
import BATCH2_L04 from './_batch2_u29_L04.js';
import BATCH2_L03 from './_batch2_u29_L03.js';
import EXP_L3 from './_temp_u29_expand_L01.js';import EXP_L4 from './_temp_u29_expand_L02.js';import EXP_L5 from './_temp_u29_expand_L03.js';
// Level: B2.2. JLPT N2 aligned.
// 景気, インフレ, 株式, 輸入, 輸出, 市場, 投資.

const UNIT_29 = {
  n:29, lang:"ja", srcLang:"en", track:"v2",
  title:"経済(けいざい)", sub:"Economy",
  icon:"📈", level:"B2.2", color:"#7B5EE8",
  lessons:[

// ═══ L1: Economic Fundamentals ═══
{id:"jav2_u29l1", title:"Economic Fundamentals", icon:"💹", xp:15, board:true, steps:[
  {type:"intro", title:"Economic Fundamentals",
   desc:"Economic vocabulary is everywhere in Japanese media and daily life. From news broadcasts discussing 景気(けいき) (economic conditions) to conversations about インフレ (inflation), these terms are essential for JLPT N2 and for understanding Japan as an economic society.",
   goals:["Use 景気, インフレ, 株式 correctly","Discuss economic conditions in Japanese","Understand basic financial news vocabulary"]},

  {type:"teach", trg:"経済(けいざい)", src:"economy / economics", pos:"noun", gender:null,
   note:"Kanji: 経済. 経済学部(けいざいがくぶ) = economics department.\n経済成長(けいざいせいちょう) = economic growth.",
   example:"A: 日本(にほん)の経済(けいざい)は回復(かいふく)しつつあります。\nB: 失業率(しつぎょうりつ)も下(さ)がっていますね。",
   exampleSrc:"A: Japan's economy is in the process of recovering.\nB: The unemployment rate is also falling.",
   funFact:"経済 originally comes from the classical Chinese phrase 経世済民 (keisai saimin), meaning 'govern the world and save the people.' The Meiji-era scholars who needed a word for 'economy' shortened this to 経済. So the Japanese word for economy carries a built-in ethical dimension: economics should serve the people."},

  {type:"teach", trg:"景気(けいき)", src:"economic conditions / business climate", pos:"noun", gender:null,
   note:"Kanji: 景気. 景気(けいき)がいい = good economic conditions.\n景気(けいき)が悪(わる)い = recession/bad economy.",
   example:"A: 最近(さいきん)景気(けいき)がいいですね。\nB: はい、収入(しゅうにゅう)も増(ふ)えてきました。",
   exampleSrc:"A: The economy has been good recently.\nB: Yes, income has been increasing too.",
   funFact:"景気 uses 景 (scenery/view) and 気 (spirit/atmosphere). Economic conditions are literally described as the 'atmosphere of the scene.' When 景気(けいき) is good, people feel optimistic and spend freely. The phrase 景気(けいき)がいい can also casually mean 'generous' or 'bold' when describing a person's spending habits."},

  {type:"teach", trg:"インフレ", src:"inflation", pos:"noun", gender:null,
   note:"Short for インフレーション. Loanword from English.\nOpposite: デフレ (deflation).",
   example:"A: インフレで物価(ぶっか)が上(あ)がっています。\nB: 生活(せいかつ)が大変(たいへん)ですね。",
   exampleSrc:"A: Prices are rising due to inflation.\nB: Life is getting tough.",
   funFact:"Japan experienced the opposite problem for decades: デフレ (deflation). From the 1990s to 2020s, prices barely rose. The Bank of Japan tried everything to create some inflation. This long deflationary period, called the 'lost decades' (失われた十年), made Japan unique among developed economies."},

  {type:"mc", q:"景気(けいき)が悪(わる)い means:", opts:["The business climate is unfavorable","The weather is bad","Business is booming","The stock price fell"], ans:"The business climate is unfavorable",
   hint:"景気(けいき) refers to the overall atmosphere of commerce, and 悪(わる)い means bad."},

  {type:"teach", trg:"株式(かぶしき)", src:"stock / shares", pos:"noun", gender:null,
   note:"Kanji: 株式. 株式市場(かぶしきしじょう) = stock market.\n株式会社(かぶしきがいしゃ) = stock company (corporation).",
   example:"A: 株式市場(かぶしきしじょう)が今日(きょう)大(おお)きく下(さ)がりました。\nB: 何(なに)か原因(げんいん)があるのでしょうか。",
   exampleSrc:"A: The stock market dropped significantly today.\nB: I wonder if there is a cause.",
   funFact:"株 originally means 'tree stump' or 'root.' The financial meaning comes from the idea of owning a 'share' or 'stake' in something rooted and growing. 株式会社 (kabushiki gaisha, abbreviated K.K.) is the standard corporate form in Japan, equivalent to 'Inc.' or 'Ltd.' You see it on every Japanese company's official name."},

  {type:"teach", trg:"物価(ぶっか)", src:"prices (of goods) / cost of living", pos:"noun", gender:null,
   note:"Kanji: 物価. 物価(ぶっか)が上(あ)がる = prices rise.\n物価(ぶっか)が下(さ)がる = prices fall. Different from 値段(ねだん) (single item price).",
   example:"A: 最近(さいきん)物価(ぶっか)が上(あ)がっていませんか？\nB: はい、特(とく)に食料品(しょくりょうひん)が高(たか)くなりました。",
   exampleSrc:"A: Haven't prices been rising recently?\nB: Yes, food prices especially have gone up.",
   funFact:"物価 uses 物 (things) and 価 (value/price). While 値段(ねだん) refers to one item's price, 物価(ぶっか) means the general price level across goods. The Consumer Price Index is 消費者物価指数(しょうひしゃぶっかしすう) in Japanese. Japan's famously stable 物価(ぶっか) during the deflation era meant 100-yen shops thrived for decades."},

  {type:"fb", s:"{1}で物価(ぶっか)が上(あ)がっています。\n(Prices are rising due to inflation.)", a:"インフレ", opts:["インフレ","デフレ","景気(けいき)","経済(けいざい)"], sSrc:"Prices are rising due to inflation.",
   hint:"The loanword for the economic phenomenon where prices rise across the board."},

  {type:"teach", trg:"失業(しつぎょう)", src:"unemployment", pos:"noun", gender:null,
   note:"Kanji: 失業. 失 (lose) + 業 (occupation).\n失業率(しつぎょうりつ) = unemployment rate.",
   example:"A: 失業率(しつぎょうりつ)が三(さん)パーセントに下(さ)がりました。\nB: 景気(けいき)が回復(かいふく)している証拠(しょうこ)ですね。",
   exampleSrc:"A: The unemployment rate has fallen to 3%.\nB: That is evidence that the economy is recovering.",
   funFact:"失業 literally means 'losing one's occupation.' Japan's unemployment rate is historically low compared to other developed nations, usually 2-3%. However, this masks issues like 非正規雇用 (hiseiki koyou, non-regular employment), where many workers hold temporary or part-time positions with fewer benefits."},

  {type:"mc", q:"株式会社(かぶしきがいしゃ) means:", opts:["A trading exchange","A corporation (the standard Japanese form)","A financial index","A shareholders' meeting"], ans:"A corporation (the standard Japanese form)",
   hint:"株式(かぶしき) + 会社(がいしゃ) forms the term for the most common business entity type in Japan."},

  {type:"match", pairs:[{trg:"経済(けいざい)",src:"economy"},{trg:"景気(けいき)",src:"economic conditions"},{trg:"インフレ",src:"inflation"},{trg:"株式(かぶしき)",src:"stock/shares"}]},

  {type:"fb", s:"{1}率(りつ)が三(さん)パーセントに下(さ)がりました。\n(The unemployment rate has fallen to 3%.)", a:"失業(しつぎょう)", opts:["失業(しつぎょう)","収入(しゅうにゅう)","経済(けいざい)","物価(ぶっか)"], sSrc:"The unemployment rate has fallen to 3%.",
   hint:"The noun meaning the state of losing one's job, combined with 率(りつ) (rate)."},

  {type:"match", pairs:[{trg:"物価(ぶっか)",src:"prices (general)"},{trg:"失業(しつぎょう)",src:"unemployment"},{trg:"景気(けいき)",src:"business climate"},{trg:"インフレ",src:"inflation"}]},
]},

// ═══ L2: Trade & Investment ═══
{id:"jav2_u29l2", title:"Trade & Investment", icon:"🌐", xp:15, board:true, steps:[
  {type:"intro", title:"Trade & Investment",
   desc:"Japan is one of the world's largest trading nations. Understanding imports, exports, markets, and investment vocabulary is essential for reading economic news and discussing global commerce. These terms appear constantly in NHK broadcasts and business newspapers.",
   goals:["Use 輸入, 輸出 for import/export","Use 市場, 投資 for market and investment","Discuss trade in Japanese"]},

  {type:"teach", trg:"輸入(ゆにゅう)", src:"import", pos:"noun", gender:null,
   note:"Kanji: 輸入. 輸入(ゆにゅう)する = to import.\n輸入品(ゆにゅうひん) = imported goods. Opposite: 輸出(ゆしゅつ).",
   example:"A: 日本(にほん)はエネルギーの多(おお)くを輸入(ゆにゅう)に頼(たよ)っています。\nB: 特(とく)に石油(せきゆ)ですね。",
   exampleSrc:"A: Japan relies on imports for much of its energy.\nB: Especially oil.",
   funFact:"輸入 uses 輸 (transport) and 入 (enter). Japan imports about 90% of its energy. This vulnerability shapes its foreign policy and economic strategy. The phrase 輸入(ゆにゅう)に頼(たよ)る (to rely on imports) appears constantly in discussions of Japanese economic security. Food self-sufficiency is also low, around 38%."},

  {type:"teach", trg:"輸出(ゆしゅつ)", src:"export", pos:"noun", gender:null,
   note:"Kanji: 輸出. 輸出(ゆしゅつ)する = to export.\n輸出品(ゆしゅつひん) = exported goods. Opposite: 輸入(ゆにゅう).",
   example:"A: 日本(にほん)の自動車(じどうしゃ)輸出(ゆしゅつ)は世界(せかい)トップクラスです。\nB: トヨタやホンダは有名(ゆうめい)ですね。",
   exampleSrc:"A: Japan's automobile exports are world-class.\nB: Toyota and Honda are famous.",
   funFact:"輸出 uses 輸 (transport) and 出 (exit). Japan's export story transformed from cheap goods in the 1950s to high-tech products by the 1980s. The phrase メイド・イン・ジャパン (Made in Japan) went from meaning low quality to symbolizing precision and reliability. Today, Japan exports cars, electronics, machinery, and cultural products."},

  {type:"teach", trg:"市場(しじょう)", src:"market", pos:"noun", gender:null,
   note:"Kanji: 市場. Two readings: 市場(しじょう) (financial/abstract) vs 市場(いちば) (physical marketplace).\n市場調査(しじょうちょうさ) = market research.",
   example:"A: アジアの市場(しじょう)は急速(きゅうそく)に成長(せいちょう)しています。\nB: 日本企業(にほんきぎょう)も進出(しんしゅつ)していますね。",
   exampleSrc:"A: Asian markets are growing rapidly.\nB: Japanese companies are also entering them.",
   funFact:"市場 has two completely different readings. 市場(しじょう) means an abstract market (stock market, job market, real estate market). 市場(いちば) means a physical marketplace where you buy fish or vegetables. 築地市場 (Tsukiji ichiba) was the famous fish market. The reading tells you which meaning is intended."},

  {type:"mc", q:"輸入(ゆにゅう) and 輸出(ゆしゅつ) share the kanji 輸. What does 輸 mean?", opts:["Transport","Money","Buy","Sell"], ans:"Transport",
   hint:"The shared kanji relates to the physical movement of goods. 入 = enter, 出 = exit."},

  {type:"teach", trg:"投資(とうし)", src:"investment", pos:"noun", gender:null,
   note:"Kanji: 投資. 投資(とうし)する = to invest.\n投資家(とうしか) = investor. 外国投資(がいこくとうし) = foreign investment.",
   example:"A: 彼(かれ)は不動産(ふどうさん)に投資(とうし)しています。\nB: リスクも高(たか)いですが、リターンも大(おお)きいですね。",
   exampleSrc:"A: He invests in real estate.\nB: The risk is high, but the returns are also big.",
   funFact:"投資 uses 投 (throw) and 資 (capital/resources). Investing is literally 'throwing capital' into something. Japanese households historically preferred saving over investing, keeping money in low-interest bank accounts. The government's 'iDeCo' and 'NISA' programs aim to shift this culture toward investment."},

  {type:"teach", trg:"石油(せきゆ)", src:"petroleum / oil", pos:"noun", gender:null,
   note:"Kanji: 石油. 石 (stone) + 油 (oil).\n石油価格(せきゆかかく) = oil price. 石油輸出国(せきゆゆしゅつこく) = oil-exporting country.",
   example:"A: 石油(せきゆ)の価格(かかく)が急騰(きゅうとう)しています。\nB: ガソリン代(だい)が心配(しんぱい)ですね。",
   exampleSrc:"A: Oil prices are surging.\nB: I am worried about gasoline costs.",
   funFact:"石油 literally means 'stone oil,' reflecting the ancient observation of oil seeping from rocks. Japan has almost no domestic oil production. The 1973 oil crisis (オイルショック) devastated Japan's economy and permanently shaped its energy policy. It drove Japan to diversify energy sources and improve efficiency."},

  {type:"fb", s:"日本(にほん)はエネルギーの多(おお)くを{1}に頼(たよ)っています。\n(Japan relies on imports for much of its energy.)", a:"輸入(ゆにゅう)", opts:["輸入(ゆにゅう)","輸出(ゆしゅつ)","市場(しじょう)","投資(とうし)"], sSrc:"Japan relies on imports for much of its energy.",
   hint:"The noun for bringing goods into a country from abroad."},

  {type:"teach", trg:"企業(きぎょう)", src:"enterprise / company", pos:"noun", gender:null,
   note:"Kanji: 企業. More formal than 会社(かいしゃ) (company).\n中小企業(ちゅうしょうきぎょう) = small and medium enterprises.",
   example:"A: 多(おお)くの日本企業(にほんきぎょう)が海外(かいがい)に進出(しんしゅつ)しています。\nB: グローバル化(か)が進(すす)んでいますね。",
   exampleSrc:"A: Many Japanese enterprises are expanding overseas.\nB: Globalization is progressing.",
   funFact:"企業 is the formal, economic term for 'company,' while 会社(かいしゃ) is the everyday word. 企 means 'plan/scheme' and 業 means 'business/industry.' News, textbooks, and policy documents prefer 企業(きぎょう). The phrase 日本企業 (Japanese enterprises) appears in nearly every economic discussion about Japan's global competitiveness."},

  {type:"mc", q:"市場(しじょう) (しじょう reading) refers to:", opts:["A fish vendor's stall","The broader arena of buying and selling","A department store","A shopping mall"], ans:"The broader arena of buying and selling",
   hint:"The しじょう reading is for intangible trading spaces, while いちば is for physical ones."},

  {type:"teach", trg:"不動産(ふどうさん)", src:"real estate", pos:"noun", gender:null,
   note:"Kanji: 不動産. 不動(ふどう) (immovable) + 産(さん) (property).\n不動産屋(ふどうさんや) = real estate agency.",
   example:"A: 東京(とうきょう)の不動産価格(ふどうさんかかく)はとても高(たか)いです。\nB: 地方(ちほう)に比(くら)べると何倍(なんばい)も違(ちが)いますね。",
   exampleSrc:"A: Real estate prices in Tokyo are very high.\nB: Compared to rural areas, they are many times different.",
   funFact:"不動産 literally means 'immovable property,' the same logic as English 'real estate' (from Latin 'res,' thing). Japan's 1980s bubble saw Tokyo land prices reach absurd heights. At the peak, the Imperial Palace grounds were theoretically worth more than all of California. The bubble's burst defined Japan's economic trajectory for decades."},

  {type:"fb", s:"彼(かれ)は{1}に投資(とうし)しています。\n(He invests in real estate.)", a:"不動産(ふどうさん)", opts:["不動産(ふどうさん)","株式(かぶしき)","石油(せきゆ)","市場(しじょう)"], sSrc:"He invests in real estate.",
   hint:"The two-word compound meaning property that does not move: land and buildings."},

  {type:"match", pairs:[{trg:"輸入(ゆにゅう)",src:"import"},{trg:"輸出(ゆしゅつ)",src:"export"},{trg:"市場(しじょう)",src:"market (financial)"},{trg:"投資(とうし)",src:"investment"}]},

  {type:"fb", s:"日本(にほん)の{1}輸出(ゆしゅつ)は世界(せかい)トップクラスです。\n(Japan's automobile exports are world-class.)", a:"自動車(じどうしゃ)", opts:["自動車(じどうしゃ)","電車(でんしゃ)","飛行機(ひこうき)","船(ふね)"], sSrc:"Japan's automobile exports are world-class.",
   hint:"The compound noun for a self-moving vehicle, Japan's most famous export product."},

  {type:"match", pairs:[{trg:"石油(せきゆ)",src:"petroleum"},{trg:"企業(きぎょう)",src:"enterprise"},{trg:"不動産(ふどうさん)",src:"real estate"},{trg:"物価(ぶっか)",src:"prices (general)"}]},
]},

,EXP_L3,EXP_L4,EXP_L5
,BATCH2_L03
,BATCH2_L04
,BATCH5_L01
,BATCH5_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1
]};
export default UNIT_29;
