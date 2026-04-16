// Batch 8 – Unit 25 (B2.1 Business): Corporate Finance & Strategy
const BATCH8_L1 = {
  id:"jav2_u25l_b8_1", title:"ざいむとせんりゃく", icon:"📊", xp:15, board:true,
  steps:[
    {type:"intro", title:"ざいむとせんりゃく",
     desc:"Master corporate finance and strategy vocabulary essential for JLPT N2 business reading. These terms appear in financial news and corporate communications.",
     goals:["Discuss corporate finance in Japanese","Understand strategic business terminology","Navigate financial news vocabulary"]},

    {type:"teach", trg:"ざいむ", src:"finance / financial affairs", pos:"noun", gender:null,
     note:"Kanji: 財務. ざいむしょひょう = financial statements.\nざいむだいじん = Finance Minister.",
     example:"A: ざいむじょうきょうをほうこくします。\nB: うりあげとりえきのすうじをおねがいします。",
     exampleSrc:"A: I will report the financial situation.\nB: Please provide the sales and profit figures.",
     funFact:"ざいむ (財務) is distinct from けいり (経理, accounting). ざいむ deals with financial strategy and planning; けいり handles day-to-day bookkeeping. The ざいむしょう (Ministry of Finance) is one of Japan's most powerful ministries, controlling national budget and tax policy."},

    {type:"teach", trg:"とうし", src:"investment", pos:"noun", gender:null,
     note:"Kanji: 投資. とうしする = to invest.\nとうししんたく = investment trust/mutual fund.",
     example:"A: あたらしいじぎょうにとうしします。\nB: どのくらいのがくですか？",
     exampleSrc:"A: We will invest in a new business.\nB: How much?",
     funFact:"とうし (投資) literally means 'throw resources.' Japanese households traditionally preferred ちょちく (savings) over とうし (investment), keeping money in banks. The government's NISA program (にほんばんISA) promotes individual とうし. The phrase じこtとうし (self-investment) means investing in your own skills."},

    {type:"teach", trg:"しさん", src:"assets / property / wealth", pos:"noun", gender:null,
     note:"Kanji: 資産. しさんうんよう = asset management.\nちてきしさん = intellectual property.",
     example:"A: かいしゃのしさんはじゅうおくえんです。\nB: ゆうりょうなしさんですね。",
     exampleSrc:"A: The company's assets are 1 billion yen.\nB: Those are excellent assets.",
     funFact:"しさん (資産) includes tangible (ゆうけいしさん: buildings, equipment) and intangible (むけいしさん: patents, brand value). Japan's real estate しさんバブル (asset bubble) in the late 1980s and its collapse shaped modern economics. ちてきしさん (intellectual property) is increasingly valued."},

    {type:"teach", trg:"きんゆう", src:"finance / financial services", pos:"noun", gender:null,
     note:"Kanji: 金融. きんゆうきかん = financial institution.\nきんゆうきき = financial crisis.",
     example:"A: きんゆうしじょうがふあんていです。\nB: とうしにはちゅういがひつようですね。",
     exampleSrc:"A: The financial market is unstable.\nB: Caution is needed for investments.",
     funFact:"きんゆう (金融) literally means 'melting/flowing of money.' Japan's きんゆうきかん include メガバンク (mega banks: MUFG, SMBC, Mizuho), ちほうぎんこう (regional banks), and しんようきんこ (credit unions). The にほんぎんこう (Bank of Japan) sets monetary policy."},

    {type:"teach", trg:"かぶしき", src:"stock / shares / equity", pos:"noun", gender:null,
     note:"Kanji: 株式. かぶしきかいしゃ = joint-stock company.\nかぶしきしじょう = stock market.",
     example:"A: かぶしきしじょうがきゅうらくしました。\nB: けいざいのさきゆきがしんぱいです。",
     exampleSrc:"A: The stock market crashed.\nB: I am worried about the economic outlook.",
     funFact:"かぶしきかいしゃ (株式会社, often abbreviated K.K.) is Japan's most common corporate form. The とうきょうしょうけんとりひきじょ (Tokyo Stock Exchange) is the world's third largest by market capitalization. Individual かぶしきとうし (stock investment) has grown significantly since NISA was introduced."},

    {type:"mc", q:"What does ざいむしょひょう mean?", opts:["Financial statements","Business card","Company rules","Employment contract"], ans:"Financial statements",
     hint:"These documents report a company's f... health, including balance sheets and income s...."},

    {type:"teach", trg:"ばいしゅう", src:"acquisition / buyout", pos:"noun", gender:null,
     note:"Kanji: 買収. きぎょうばいしゅう = corporate acquisition.\nM&A = mergers and acquisitions.",
     example:"A: たいしゃがベンチャーをばいしゅうしました。\nB: いくらでばいしゅうしたんですか？",
     exampleSrc:"A: The large company acquired a venture startup.\nB: How much did they acquire it for?",
     funFact:"M&A (ばいしゅう and がっぺい) activity in Japan has increased dramatically. Historically, Japanese companies preferred organic growth, but cross-border ばいしゅう has become common. SoftBank's ばいしゅう of ARM Holdings and Takeda's acquisition of Shire were landmark deals."},

    {type:"teach", trg:"せんりゃく", src:"strategy", pos:"noun", gender:null,
     note:"Kanji: 戦略. けいえいせんりゃく = management strategy.\nせんりゃくてき = strategic.",
     example:"A: ちゅうきけいえいせんりゃくをさくていしました。\nB: じゅうようなポイントはなんですか？",
     exampleSrc:"A: We formulated a medium-term management strategy.\nB: What are the key points?",
     funFact:"せんりゃく (戦略) has military origins: 戦 (war) + 略 (plan). In business, it contrasts with せんじゅつ (戦術, tactics): strategy is the big picture, tactics are the details. Japanese companies are known for ちょうきてきなせんりゃく (long-term strategy) compared to Western quarterly focus."},

    {type:"teach", trg:"きょうそうりょく", src:"competitiveness", pos:"noun", gender:null,
     note:"きょうそう (competition) + りょく (power).\nこくさいきょうそうりょく = international competitiveness.",
     example:"A: きょうそうりょくをつけるためにかいかくがひつようです。\nB: どのぶんやからはじめますか？",
     exampleSrc:"A: Reform is needed to build competitiveness.\nB: Which area shall we start with?",
     funFact:"にほんのきょうそうりょく (Japan's competitiveness) was a major topic when Japan's global ranking dropped from first in 1990 to the 30s by 2020. Rebuilding きょうそうりょく through デジタルか (digitalization) and イノベーション (innovation) is a national priority."},

    {type:"teach", trg:"しゅうえき", src:"revenue / earnings / profit", pos:"noun", gender:null,
     note:"Kanji: 収益. しゅうえきせい = profitability.\nしゅうえきこうぞう = revenue structure.",
     example:"A: しゅうえきがかいぜんしました。\nB: どのじぎょうぶもんですか？",
     exampleSrc:"A: Revenue improved.\nB: Which business division?",
     funFact:"しゅうえき (収益) is broader than りえき (profit). しゅうえき includes all income before deductions, while りえき is what remains after costs. Financial analysts focus on しゅうえきせい (profitability ratio) to judge corporate health. けいじょうしゅうえき (ordinary revenue) is a key metric in Japanese accounting."},

    {type:"teach", trg:"ゆうし", src:"financing / lending / loan", pos:"noun", gender:null,
     note:"Kanji: 融資. ゆうしをうける = to receive financing.\nぎんこうゆうし = bank loan.",
     example:"A: じぎょうかくだいのためにゆうしをうけます。\nB: じょうけんはどうですか？",
     exampleSrc:"A: We will receive financing for business expansion.\nB: What are the terms?",
     funFact:"ゆうし (融資) is distinct from とうし (investment). ゆうし means lending money that must be repaid; とうし means putting money in for potential returns. Japanese ちゅうしょうきぎょう (small businesses) rely heavily on ぎんこうゆうし. Government ゆうし programs support entrepreneurs."},

    {type:"fb", s:"あたらしいじぎょうに{1}します。\n(We will invest in a new business.)", a:"とうし", opts:["とうし","ゆうし","ばいしゅう","ざいむ"], sSrc:"We will invest in a new business.",
     hint:"This word means putting resources into something with the expectation of future returns."},

    {type:"teach", trg:"さいむ", src:"debt / liabilities", pos:"noun", gender:null,
     note:"Kanji: 債務. さいむちょうか = excess debt.\nOpposite of しさん (assets).",
     example:"A: さいむをさくげんするひつようがあります。\nB: どのようなほうほうがありますか？",
     exampleSrc:"A: We need to reduce debt.\nB: What methods are available?",
     funFact:"さいむ is the balance sheet opposite of しさん. Japan's national さいむ is over 1,200 trillion yen, the highest ratio to GDP among developed countries. However, most is domestically held. さいむせいり (debt restructuring) is a common business recovery strategy."},

    {type:"teach", trg:"はさん", src:"bankruptcy / insolvency", pos:"noun", gender:null,
     note:"Kanji: 破産. はさんする = to go bankrupt.\nじこはさん = personal bankruptcy.",
     example:"A: そのかいしゃははさんしました。\nB: じゅうぎょういんはどうなりますか？",
     exampleSrc:"A: That company went bankrupt.\nB: What happens to the employees?",
     funFact:"はさん (破産) literally means 'broken production.' Japan's biggest はさん was JAL (Japan Airlines) in 2010. The かいしゃこうせいほう (Corporate Rehabilitation Act) allows restructuring before はさん. じこはさん (personal bankruptcy) carries heavy social stigma in Japan."},

    {type:"match", pairs:[{trg:"とうし",src:"investment"},{trg:"しさん",src:"assets"},{trg:"さいむ",src:"debt"},{trg:"ゆうし",src:"financing/loan"},{trg:"しゅうえき",src:"revenue"}],
     hint:"Match each financial term with its English meaning."},

    {type:"mc", q:"What is the difference between せんりゃく and せんじゅつ?", opts:["Strategy (big picture) vs. Tactics (details)","They mean the same thing","せんりゃく is military, せんじゅつ is business","せんりゃく is short-term, せんじゅつ is long-term"], ans:"Strategy (big picture) vs. Tactics (details)",
     hint:"Both have military origins: one plans the war, the other plans the battle."},

    {type:"fb", s:"きぎょう{1}がおこなわれました。\n(A corporate acquisition took place.)", a:"ばいしゅう", opts:["ばいしゅう","はさん","せんりゃく","ゆうし"], sSrc:"A corporate acquisition took place.",
     hint:"This word means buying and taking over another company."},

    {type:"mc", q:"What does はさん mean?", opts:["Bankruptcy / insolvency","Merger","Profit","Investment"], ans:"Bankruptcy / insolvency",
     hint:"The kanji literally mean 'broken production,' indicating a company can no longer operate."}
  ]
};
export default BATCH8_L1;
