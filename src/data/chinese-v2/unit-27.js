// Unit 27: Business and Economics
// Level: B2.1 (HSK 4)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation
// Vocab: 商业, 市场, 投资, 利润, 成本, 合同, 贸易, 品牌, 消费者, 竞争, 战略, 广告, 管理, 预算, 经营

const UNIT_27 = {
n:27, lang:"zh", srcLang:"en", track:"v2",
title:"商业世界 The Business World", sub:"Commerce and Finance",
icon:"📈", level:"B2.1", color:"#7B5EE8",
lessons:[

// ─── L1: Markets and Trade ───
{id:"zhv2_u27l1", title:"市场贸易 Markets and Trade", icon:"🏪", xp:15, board:true, steps:[
{type:"intro", title:"市场贸易 Markets and Trade",
 desc:"Learn the core vocabulary of business and commerce. China is the world's second-largest economy and its largest trading nation. These words are essential for discussing business, markets, and international trade.",
 goals:["Talk about business and markets with 商业 and 市场","Discuss trade and contracts with 贸易 and 合同","Understand the commercial vocabulary of modern China"]},

{type:"tip", title:"China's Economic Transformation",
 text:"China's economy has undergone a remarkable transformation:\n\n1978: 改革开放(gǎigé kāifàng) begins. GDP per capita was among the lowest in the world.\n\n2001: China joins the World Trade Organization (WTO).\n\nToday: World's second-largest economy, largest trading nation, and largest manufacturer.\n\nKey economic terms:\n国有企业(guóyǒu qǐyè) = state-owned enterprise (SOE)\n民营企业(mínyíng qǐyè) = private enterprise\n外资企业(wàizī qǐyè) = foreign-funded enterprise\n\nChina's economic model blends state guidance with market forces. The phrase 中国特色社会主义市场经济 (socialist market economy with Chinese characteristics) describes this unique approach.",
 deepDive:{title:"Doing Business in China",
  text:"Business culture in China involves important concepts:\n\n关系(guānxi) = relationships/connections. Building personal relationships is essential before doing business. Trust comes from 关系, not just contracts.\n\n面子(miànzi) = face. Public reputation matters enormously. Never embarrass a business partner in front of others.\n\n谈判(tánpàn) = negotiation. Chinese business negotiations tend to be longer and more relationship-focused than Western ones. Patience is valued.\n\nUnderstanding these cultural factors is as important as knowing the vocabulary. Many foreign business deals have failed because of cultural misunderstandings rather than economic factors."}},

{type:"teach", trg:"商业(shāngyè)", src:"business / commerce", pos:"noun", gender:null,
 note:"Commerce + profession. The world of buying and selling.\n商业模式 = business model. 商业区 = business district.",
 example:"A: 上海(Shànghǎi)是(shì)中国(Zhōngguó)最大(zuìdà)的(de)商业(shāngyè)中心(zhōngxīn)。\nB: 对(duì)，很多(hěnduō)跨国(kuàguó)公司(gōngsī)的(de)总部(zǒngbù)都(dōu)在(zài)那里(nàlǐ)。",
 exampleSrc:"A: Shanghai is China's largest business center.\nB: Yes, many multinational companies have their headquarters there.",
 funFact:"商 originally referred to the Shang Dynasty (1600-1046 BCE), whose people were known as skilled traders. After the dynasty fell, the word 商 became associated with commerce and trade. So when you say 商业, you are connecting to over 3,000 years of Chinese commercial history."},

{type:"teach", trg:"市场(shìchǎng)", src:"market", pos:"noun", gender:null,
 note:"City + field. A place for buying and selling.\n市场经济 = market economy. 进入市场 = to enter the market.",
 example:"A: 中国(Zhōngguó)市场(shìchǎng)非常(fēicháng)大(dà)。\nB: 是(shì)的(de)，有(yǒu)十四亿(shísìyì)消费者(xiāofèizhě)。",
 exampleSrc:"A: The Chinese market is enormous.\nB: Yes, it has 1.4 billion consumers.",
 funFact:"市 means city or marketplace, and 场 means field or ground. A market is 'the city field' where commerce takes place. Chinese markets range from traditional 菜市场 (vegetable markets) where vendors sell fresh produce to the enormous 义乌小商品市场 (Yiwu Small Commodities Market), the world's largest wholesale market."},

{type:"teach", trg:"贸易(màoyì)", src:"trade", pos:"noun", gender:null,
 note:"Exchange + ease/change. The exchange of goods between parties.\n国际贸易 = international trade. 自由贸易 = free trade.",
 example:"A: 中国(Zhōngguó)和(hé)欧洲(Ōuzhōu)的(de)贸易(màoyì)额(é)很(hěn)大(dà)。\nB: 对(duì)，两边(liǎngbiān)都(dōu)是(shì)重要(zhòngyào)的(de)贸易(màoyì)伙伴(huǒbàn)。",
 exampleSrc:"A: The trade volume between China and Europe is very large.\nB: Right, both sides are important trade partners.",
 funFact:"贸 means to exchange goods (it contains the 贝 shell radical, since shells were ancient currency), and 易 means easy or change. Trade is 'exchanging with ease.' The ancient Silk Road (丝绸之路, Sīchóu zhī Lù) was one of history's greatest trade routes, connecting China to Central Asia, the Middle East, and Europe."},

{type:"teach", trg:"合同(hétong)", src:"contract / agreement", pos:"noun", gender:null,
 note:"Together + same. A document where parties agree on the same terms.\n签合同 = to sign a contract. 合同条款 = contract terms.",
 example:"A: 我们(wǒmen)什么(shénme)时候(shíhou)签(qiān)合同(hétong)？\nB: 下周(xiàzhōu)一(yī)，双方(shuāngfāng)都(dōu)同意(tóngyì)了(le)。",
 exampleSrc:"A: When do we sign the contract?\nB: Next Monday, both sides have agreed.",
 funFact:"合 means together or to combine, and 同 means same. A contract is 'coming together on the same terms.' In Chinese business culture, a signed contract is important, but the relationship (关系) behind it is often considered even more important. Contracts may be viewed as the start of a relationship, not just a binding legal document."},

{type:"teach", trg:"消费者(xiāofèizhě)", src:"consumer", pos:"noun", gender:null,
 note:"Consume + spend + person who. The person who buys and uses products.\n消费者权益 = consumer rights. 消费者市场 = consumer market.",
 example:"A: 现在(xiànzài)的(de)消费者(xiāofèizhě)越来越(yuèláiyuè)注重(zhùzhòng)品质(pǐnzhì)。\nB: 对(duì)，不(bù)只是(zhǐshì)看(kàn)价格(jiàgé)了(le)。",
 exampleSrc:"A: Today's consumers pay more and more attention to quality.\nB: Right, they no longer just look at price.",
 funFact:"消 means to disappear or consume, 费 means to spend, and 者 means 'the person who.' A consumer is literally 'the one who uses things up and spends.' China has the world's largest e-commerce market, with hundreds of millions of online consumers spending billions during shopping events like 双十一 (Singles' Day, November 11)."},

{type:"mc", q:"商(shāng) originally referred to:",
 opts:["The Shang Dynasty, whose people were known as traders","A type of shop","A counting tool","A currency"],
 ans:"The Shang Dynasty, whose people were known as traders",
 hint:"After the Shang Dynasty fell, its people became known as merchants. The character became permanently associated with commerce."},

{type:"match", pairs:[
  {trg:"商业(shāngyè)", src:"business"},
  {trg:"市场(shìchǎng)", src:"market"},
  {trg:"贸易(màoyì)", src:"trade"},
  {trg:"合同(hétong)", src:"contract"},
  {trg:"消费者(xiāofèizhě)", src:"consumer"}
]},

{type:"fb", s:"中国(Zhōngguó)是(shì)世界(shìjiè)上(shàng)最大(zuìdà)的(de){1}国(guó)之一(zhīyī)。",
 a:["贸易(màoyì)"],
 opts:["贸易(màoyì)","商业(shāngyè)","市场(shìchǎng)","合同(hétong)"],
 hint:"This word means the exchange of goods between countries or parties. China leads the world in this activity.",
 sSrc:"China is one of the world's largest {1} nations."},

{type:"mc", q:"我们(wǒmen)下周(xiàzhōu)签(qiān)合同(hétong)。 What will happen next week?",
 opts:["A contract will be signed","A meeting will be canceled","A trade deal will fail","A market will open"],
 ans:"A contract will be signed",
 hint:"签 means to sign, and 合同 means contract. Both parties will formalize their agreement next week."},

{type:"fb", s:"现在(xiànzài)的(de){1}越来越(yuèláiyuè)注重(zhùzhòng)品质(pǐnzhì)。",
 a:["消费者(xiāofèizhě)"],
 opts:["消费者(xiāofèizhě)","商业(shāngyè)","市场(shìchǎng)","贸易(màoyì)"],
 hint:"This word means the people who buy and use products. They are paying more attention to quality.",
 sSrc:"Today's {1} pay more and more attention to quality."},

{type:"fb", s:"上海(Shànghǎi)是(shì)中国(Zhōngguó)最大(zuìdà)的(de){1}中心(zhōngxīn)。",
 a:["商业(shāngyè)"],
 opts:["商业(shāngyè)","市场(shìchǎng)","贸易(màoyì)","合同(hétong)"],
 hint:"This word means the world of buying, selling, and commerce. Shanghai is the biggest hub for this in China.",
 sSrc:"Shanghai is China's largest {1} center."}
]},

// ─── L2: Finance and Strategy ───
{id:"zhv2_u27l2", title:"财务战略 Finance and Strategy", icon:"💰", xp:15, board:true, steps:[
{type:"intro", title:"财务战略 Finance and Strategy",
 desc:"Learn financial and strategic vocabulary for business discussions. Investment, profit, cost, budget, and strategy are the building blocks of business planning in any language.",
 goals:["Discuss finances with 投资, 利润, 成本, and 预算","Talk about strategy and competition with 战略 and 竞争","Use these terms in business contexts"]},

{type:"teach", trg:"投资(tóuzī)", src:"investment / to invest", pos:"noun", gender:null,
 note:"Throw + capital. Putting money into something for returns.\n投资者 = investor. 投资回报 = return on investment.",
 example:"A: 你(nǐ)觉得(juéde)应该(yīnggāi)投资(tóuzī)什么(shénme)行业(hángyè)？\nB: 我(wǒ)觉得(juéde)科技(kējì)行业(hángyè)是(shì)好(hǎo)的(de)投资(tóuzī)。",
 exampleSrc:"A: What industry do you think we should invest in?\nB: I think the tech industry is a good investment.",
 funFact:"投 means to throw, and 资 means capital or resources. Investment is literally 'throwing in capital.' The metaphor captures the risk involved: like throwing something, you release control and hope for a good outcome. 风险投资 (venture capital) literally means 'wind-risk investment.'"},

{type:"teach", trg:"利润(lìrùn)", src:"profit", pos:"noun", gender:null,
 note:"Benefit + moist/surplus. The money left after costs are paid.\n利润率 = profit margin. 净利润 = net profit.",
 example:"A: 这个(zhège)公司(gōngsī)今年(jīnnián)的(de)利润(lìrùn)增加(zēngjiā)了(le)百分之二十(bǎifēnzhī èrshí)。\nB: 太好(tàihǎo)了(le)，业绩(yèjì)非常(fēicháng)好(hǎo)。",
 exampleSrc:"A: This company's profit increased by 20% this year.\nB: Great, the performance is excellent.",
 funFact:"利 means benefit or sharp, and 润 means moist or surplus. Profit is the 'surplus benefit,' the moisture that keeps a business alive and growing. The agricultural metaphor is deliberate: just as crops need moisture to thrive, businesses need profit to survive. 薄利多销 (thin profits, high volume) is a famous Chinese business strategy."},

{type:"teach", trg:"成本(chéngběn)", src:"cost", pos:"noun", gender:null,
 note:"Become/complete + root/capital. The fundamental expense of production.\n降低成本 = to reduce costs. 成本控制 = cost control.",
 example:"A: 怎么(zěnme)降低(jiàngdī)生产(shēngchǎn)成本(chéngběn)？\nB: 可以(kěyǐ)用(yòng)新(xīn)技术(jìshù)提高(tígāo)效率(xiàolǜ)。",
 exampleSrc:"A: How do we reduce production costs?\nB: We can use new technology to improve efficiency.",
 funFact:"成 means to complete or become, and 本 means root, origin, or capital. Cost is the 'root investment needed to complete something.' 本 also means book (书本) and originally meant the trunk of a tree. The connection is clear: the trunk is the fundamental part from which everything else grows, just as cost is the foundation of any business activity."},

{type:"teach", trg:"竞争(jìngzhēng)", src:"competition", pos:"noun", gender:null,
 note:"Race + contend. Rivalry for the same objective.\n市场竞争 = market competition. 竞争优势 = competitive advantage.",
 example:"A: 这个(zhège)市场(shìchǎng)的(de)竞争(jìngzhēng)非常(fēicháng)激烈(jīliè)。\nB: 所以(suǒyǐ)我们(wǒmen)需要(xūyào)好(hǎo)的(de)战略(zhànlüè)。",
 exampleSrc:"A: The competition in this market is very intense.\nB: That is why we need a good strategy.",
 funFact:"竞 and 争 both mean to contend or strive. The doubling intensifies the meaning: it is not just striving, but striving against others. Chinese business culture views competition as natural and healthy. The phrase 良性竞争 (benign competition) describes healthy rivalry that drives improvement, versus 恶性竞争 (malicious competition) that harms everyone."},

{type:"teach", trg:"战略(zhànlüè)", src:"strategy", pos:"noun", gender:null,
 note:"Battle + plan/summary. A high-level plan for achieving a goal.\n发展战略 = development strategy. 营销战略 = marketing strategy.",
 example:"A: 公司(gōngsī)需要(xūyào)一个(yígè)新(xīn)的(de)发展(fāzhǎn)战略(zhànlüè)。\nB: 对(duì)，现在(xiànzài)的(de)战略(zhànlüè)已经(yǐjīng)过时(guòshí)了(le)。",
 exampleSrc:"A: The company needs a new development strategy.\nB: Right, the current strategy is already outdated.",
 funFact:"战 means battle or war, and 略 means plan or outline. Strategy is a 'battle plan.' The word traces back to Sun Tzu's The Art of War (孙子兵法), one of the most influential strategy texts in world history. Chinese business leaders frequently quote Sun Tzu. His principle 知己知彼百战不殆 (know yourself and know your enemy, and you will not be defeated in a hundred battles) is applied to market competition."},

{type:"teach", trg:"预算(yùsuàn)", src:"budget", pos:"noun", gender:null,
 note:"Pre/advance + calculate. Calculating expenses in advance.\n年度预算 = annual budget. 超出预算 = over budget.",
 example:"A: 这个(zhège)项目(xiàngmù)的(de)预算(yùsuàn)是(shì)多少(duōshao)？\nB: 预算(yùsuàn)是(shì)五百万(wǔbǎiwàn)。",
 exampleSrc:"A: What is the budget for this project?\nB: The budget is five million.",
 funFact:"预 means in advance, and 算 means to calculate. A budget is 'calculating in advance.' Sound financial planning has been valued in Chinese culture since ancient times. The philosopher Mencius said 有恒产者有恒心 (those with stable property have stable hearts), connecting financial security with social stability."},

{type:"mc", q:"投资(tóuzī) literally means:",
 opts:["Throwing in capital","Saving money","Earning interest","Counting coins"],
 ans:"Throwing in capital",
 hint:"投 means to throw, and 资 means capital. The metaphor captures the risk of releasing money with hopes of return."},

{type:"match", pairs:[
  {trg:"投资(tóuzī)", src:"investment"},
  {trg:"利润(lìrùn)", src:"profit"},
  {trg:"成本(chéngběn)", src:"cost"},
  {trg:"竞争(jìngzhēng)", src:"competition"},
  {trg:"战略(zhànlüè)", src:"strategy"},
  {trg:"预算(yùsuàn)", src:"budget"}
]},

{type:"fb", s:"这个(zhège)市场(shìchǎng)的(de){1}非常(fēicháng)激烈(jīliè)。",
 a:["竞争(jìngzhēng)"],
 opts:["竞争(jìngzhēng)","战略(zhànlüè)","投资(tóuzī)","利润(lìrùn)"],
 hint:"This word describes the intense rivalry between companies fighting for the same customers.",
 sSrc:"The {1} in this market is very intense."},

{type:"mc", q:"这个(zhège)公司(gōngsī)今年(jīnnián)的(de)利润(lìrùn)增加(zēngjiā)了(le)。 This means:",
 opts:["The company's profit increased this year","The company lost money","The company closed","The company changed strategy"],
 ans:"The company's profit increased this year",
 hint:"利润 means profit, and 增加 means to increase. The company made more money than before."},

{type:"fb", s:"这个(zhège)项目(xiàngmù)的(de){1}是(shì)三百万(sānbǎiwàn)。",
 a:["预算(yùsuàn)"],
 opts:["预算(yùsuàn)","利润(lìrùn)","成本(chéngběn)","投资(tóuzī)"],
 hint:"This word means a financial plan calculated in advance. It sets the spending limit for a project.",
 sSrc:"The {1} for this project is three million."},

{type:"fb", s:"用(yòng)新(xīn)技术(jìshù)可以(kěyǐ)降低(jiàngdī)生产(shēngchǎn){1}。",
 a:["成本(chéngběn)"],
 opts:["成本(chéngběn)","利润(lìrùn)","预算(yùsuàn)","投资(tóuzī)"],
 hint:"This word means the fundamental expense of producing something. New technology can reduce it.",
 sSrc:"Using new technology can reduce production {1}."}
]},

// ─── L3: Marketing and Management ───
{id:"zhv2_u27l3", title:"营销管理 Marketing and Management", icon:"📣", xp:15, board:true, steps:[
{type:"intro", title:"营销管理 Marketing and Management",
 desc:"Learn vocabulary for marketing, branding, advertising, and business management. These words complete your business vocabulary toolkit for B2-level discussions.",
 goals:["Discuss brands and advertising with 品牌 and 广告","Talk about business management with 管理 and 经营","Connect all business vocabulary into fluent discussion"]},

{type:"teach", trg:"品牌(pǐnpái)", src:"brand", pos:"noun", gender:null,
 note:"Product/grade + plate/sign. A recognized name and identity.\n品牌知名度 = brand awareness. 品牌形象 = brand image.",
 example:"A: 中国(Zhōngguó)有(yǒu)很多(hěnduō)知名(zhīmíng)品牌(pǐnpái)了(le)。\nB: 对(duì)，像(xiàng)华为(Huáwéi)、小米(Xiǎomǐ)、海尔(Hǎi'ěr)。",
 exampleSrc:"A: China has many well-known brands now.\nB: Yes, like Huawei, Xiaomi, and Haier.",
 funFact:"品 means product or grade (it depicts three mouths, suggesting discussion and evaluation), and 牌 means a plate or sign. A brand is a 'product sign,' the marker that distinguishes one product from another. Chinese brands have gone global: Huawei, Lenovo, TikTok (Douyin), and Alibaba are recognized worldwide."},

{type:"teach", trg:"广告(guǎnggào)", src:"advertisement / advertising", pos:"noun", gender:null,
 note:"Wide + announce. Making something widely known.\n做广告 = to advertise. 广告公司 = advertising company.",
 example:"A: 这个(zhège)广告(guǎnggào)做得(zuòde)很(hěn)有(yǒu)创意(chuàngyì)。\nB: 是(shì)的(de)，看了(kànle)以后(yǐhòu)就(jiù)想(xiǎng)买(mǎi)。",
 exampleSrc:"A: This advertisement is very creative.\nB: Yes, after watching it you want to buy it.",
 funFact:"广 means wide or broad, and 告 means to announce or tell. An advertisement is a 'broad announcement.' China's advertising market is the world's second-largest. During major shopping events like Double 11, brands create elaborate ad campaigns across television, social media, live streaming, and outdoor billboards simultaneously."},

{type:"teach", trg:"管理(guǎnlǐ)", src:"management / to manage", pos:"noun", gender:null,
 note:"Pipe/control + handle/organize. Running things in an orderly way.\n管理人员 = management staff. 企业管理 = business management.",
 example:"A: 好(hǎo)的(de)管理(guǎnlǐ)对(duì)一个(yígè)公司(gōngsī)很(hěn)重要(zhòngyào)。\nB: 当然(dāngrán)，管理(guǎnlǐ)不好(bùhǎo)，什么(shénme)战略(zhànlüè)都(dōu)没用(méiyòng)。",
 exampleSrc:"A: Good management is very important for a company.\nB: Of course, without good management, no strategy will work.",
 funFact:"管 originally meant a bamboo pipe (used for channeling water in an organized direction), and 理 means to arrange or handle. Management is 'channeling and organizing,' directing resources the way a pipe directs water. MBA programs (工商管理硕士, Master of Business Administration) are extremely popular in China, with fierce competition for top schools."},

{type:"teach", trg:"经营(jīngyíng)", src:"to operate / to run (a business)", pos:"verb", gender:null,
 note:"Manage + operate. The day-to-day running of a business.\n经营模式 = business model. 经营理念 = business philosophy.",
 example:"A: 他(tā)经营(jīngyíng)这家(zhèjiā)公司(gōngsī)已经(yǐjīng)二十年(èrshínián)了(le)。\nB: 难怪(nánguài)公司(gōngsī)发展(fāzhǎn)得(de)这么(zhème)好(hǎo)。",
 exampleSrc:"A: He has been running this company for twenty years.\nB: No wonder the company has developed so well.",
 funFact:"经 means to manage or pass through, and 营 means to operate or camp. The military origin is clear: 营 originally meant a military encampment. Running a business requires the same discipline and organization as running a military camp. Successful Chinese entrepreneurs are often compared to generals, and business is frequently described using military metaphors."},

{type:"mc", q:"品牌(pǐnpái) contains 品(pǐn), which depicts:",
 opts:["Three mouths, suggesting evaluation and discussion","Three boxes of products","Three coins","Three people"],
 ans:"Three mouths, suggesting evaluation and discussion",
 hint:"品 is a pictograph of three mouths. When people discuss and evaluate something, they establish its grade or quality."},

{type:"match", pairs:[
  {trg:"品牌(pǐnpái)", src:"brand"},
  {trg:"广告(guǎnggào)", src:"advertisement"},
  {trg:"管理(guǎnlǐ)", src:"management"},
  {trg:"经营(jīngyíng)", src:"to operate a business"}
]},

{type:"fb", s:"这个(zhège){1}做得(zuòde)很(hěn)有(yǒu)创意(chuàngyì)。",
 a:["广告(guǎnggào)"],
 opts:["广告(guǎnggào)","品牌(pǐnpái)","管理(guǎnlǐ)","经营(jīngyíng)"],
 hint:"This word means a public announcement designed to promote a product or service. It combines 'wide' and 'announce.'",
 sSrc:"This {1} is very creative."},

{type:"mc", q:"管理(guǎnlǐ) uses 管(guǎn), which originally meant:",
 opts:["A bamboo pipe for channeling water","A wooden stick","A stone tablet","A metal sword"],
 ans:"A bamboo pipe for channeling water",
 hint:"管 depicted a pipe that directs water flow. Management similarly channels and directs resources."},

{type:"fb", s:"他(tā){1}这家(zhèjiā)公司(gōngsī)已经(yǐjīng)十年(shínián)了(le)。",
 a:["经营(jīngyíng)"],
 opts:["经营(jīngyíng)","管理(guǎnlǐ)","广告(guǎnggào)","投资(tóuzī)"],
 hint:"This verb means to run or operate a business on a day-to-day basis. He has been doing it for ten years.",
 sSrc:"He has been {1} this company for ten years."},

{type:"fb", s:"华为(Huáwéi)是(shì)一个(yígè)中国(Zhōngguó)的(de)知名(zhīmíng){1}。",
 a:["品牌(pǐnpái)"],
 opts:["品牌(pǐnpái)","广告(guǎnggào)","市场(shìchǎng)","公司(gōngsī)"],
 hint:"This word means a recognized name and identity for products. Huawei is a famous Chinese one of these.",
 sSrc:"Huawei is a well-known Chinese {1}."},

{type:"mc", q:"好(hǎo)的(de)管理(guǎnlǐ)对(duì)公司(gōngsī)很(hěn)重要(zhòngyào)。 Why?",
 opts:["Without good management, no strategy will work","Management is the only thing that matters","Management replaces competition","Management eliminates costs"],
 ans:"Without good management, no strategy will work",
 hint:"Even the best strategy needs organized execution. Management channels resources toward goals."}
]},

// ─── L4: Unit 27 Review ───
{id:"zhv2_u27l4", title:"商业复习 Business Review", icon:"🔄", xp:15, board:true, steps:[
{type:"intro", title:"商业复习 Business Review",
 desc:"Review all business and economics vocabulary from this unit. Test your ability to discuss markets, finance, strategy, and management at the B2 level.",
 goals:["Review all 15 business and economics words","Connect financial, strategic, and operational vocabulary","Discuss business topics with confidence and precision"]},

{type:"match", pairs:[
  {trg:"商业(shāngyè)", src:"business"},
  {trg:"投资(tóuzī)", src:"investment"},
  {trg:"品牌(pǐnpái)", src:"brand"},
  {trg:"战略(zhànlüè)", src:"strategy"},
  {trg:"经营(jīngyíng)", src:"to operate"}
]},

{type:"mc", q:"贸易(màoyì) contains the shell radical (贝) because:",
 opts:["Shells were ancient Chinese currency","Trade involves the ocean","Shells are decorative","It was chosen randomly"],
 ans:"Shells were ancient Chinese currency",
 hint:"贝 (shell) was one of the earliest forms of money in China. Many financial characters contain this radical."},

{type:"fb", s:"我们(wǒmen)需要(xūyào)一个(yígè)新(xīn)的(de){1}来(lái)进入(jìnrù)这个(zhège)市场(shìchǎng)。",
 a:["战略(zhànlüè)"],
 opts:["战略(zhànlüè)","合同(hétong)","广告(guǎnggào)","预算(yùsuàn)"],
 hint:"This word means a high-level plan. It comes from military terminology, meaning 'battle plan.'",
 sSrc:"We need a new {1} to enter this market."},

{type:"mc", q:"降低(jiàngdī)成本(chéngběn)和(hé)提高(tígāo)利润(lìrùn) are related because:",
 opts:["Reducing costs can increase profit","They are the same thing","They always move in the same direction","They are unrelated"],
 ans:"Reducing costs can increase profit",
 hint:"When you spend less (成本), you keep more (利润). These are two key levers of business performance."},

{type:"fb", s:"这个(zhège){1}让(ràng)我(wǒ)看了(kànle)以后(yǐhòu)就(jiù)想(xiǎng)买(mǎi)。",
 a:["广告(guǎnggào)"],
 opts:["广告(guǎnggào)","品牌(pǐnpái)","合同(hétong)","管理(guǎnlǐ)"],
 hint:"This is a promotional message designed to make you want to buy something. It was very effective.",
 sSrc:"This {1} made me want to buy after watching it."},

{type:"match", pairs:[
  {trg:"市场(shìchǎng)", src:"market"},
  {trg:"利润(lìrùn)", src:"profit"},
  {trg:"成本(chéngběn)", src:"cost"},
  {trg:"合同(hétong)", src:"contract"},
  {trg:"消费者(xiāofèizhě)", src:"consumer"}
]},

{type:"fb", s:"双方(shuāngfāng)下周(xiàzhōu)签(qiān){1}。",
 a:["合同(hétong)"],
 opts:["合同(hétong)","贸易(màoyì)","市场(shìchǎng)","战略(zhànlüè)"],
 hint:"This document formally records the terms both parties have agreed on. You sign it to make it official.",
 sSrc:"Both sides will sign the {1} next week."},

{type:"mc", q:"经营(jīngyíng) has a military origin because 营(yíng) originally meant:",
 opts:["A military encampment","A musical instrument","A farm","A river"],
 ans:"A military encampment",
 hint:"营 originally described an army camp. Running a business requires the same discipline and organization."},

{type:"drag_fill",
 s:"公司(gōngsī)制定(zhìdìng)了(le)新(xīn)的(de){1}，增加(zēngjiā)了(le){2}，做(zuò)了(le)很多(hěnduō){3}，结果(jiéguǒ){4}增长(zēngzhǎng)了(le)百分之三十(bǎifēnzhī sānshí)。",
 blanks:{"1":"战略(zhànlüè)","2":"投资(tóuzī)","3":"广告(guǎnggào)","4":"利润(lìrùn)"},
 pool:["战略(zhànlüè)","投资(tóuzī)","广告(guǎnggào)","利润(lìrùn)"],
 hint:"The company made a new strategy, increased investment, created many ads, and as a result profit grew by 30%."},

{type:"mc", q:"中国(Zhōngguó)市场(shìchǎng)有(yǒu)十四亿(shísìyì)消费者(xiāofèizhě)。 Why does this matter?",
 opts:["The enormous size makes it attractive for business","The number is decreasing","All consumers buy the same things","The market is fully saturated"],
 ans:"The enormous size makes it attractive for business",
 hint:"1.4 billion consumers represents an enormous potential customer base. Scale is the key advantage."}
]}

]};

export default UNIT_27;
