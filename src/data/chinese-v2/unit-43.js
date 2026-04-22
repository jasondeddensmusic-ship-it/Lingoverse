// Unit 43: Green Earth
// Level: B2.1 (HSK 4)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation

const UNIT_43 = {
n:43, lang:"zh", srcLang:"en", track:"v2",
title:"绿色地球 Green Earth", sub:"Sustainability and Climate",
icon:"🌱", level:"B2.1", color:"#7B5EE8",
lessons:[

// ─── L1: Energy and Resources ───
{id:"zhv2_u43l1", title:"Energy and Resources", icon:"⚡", xp:15, board:true, steps:[
{type:"intro", title:"Energy and Resources",
 desc:"Climate change and sustainability dominate global conversation. Learn the core vocabulary for discussing energy, resources, and how we use them.",
 goals:["Discuss energy types","Use resources vocabulary","Describe consumption patterns"]},

{type:"teach", trg:"能源(néngyuán)", src:"energy (as a resource)", pos:"noun", gender:null,
 note:"能 (ability/energy) + 源 (source).\nSources of power. For fuel, electricity, solar.",
 example:"A: 我们(wǒmen)需要(xūyào)新(xīn)的(de)能源(néngyuán)。\nB: 太阳能(tàiyángnéng)和(hé)风能(fēngnéng)都(dōu)是(shì)好(hǎo)选择(xuǎnzé)。",
 exampleSrc:"A: We need new energy sources.\nB: Solar and wind power are both good choices.",
 funFact:"能源 specifically means energy as a resource, distinct from 能量 (energy as a physics quantity). 能源政策 = energy policy. The word is central to any conversation about China's massive shift toward renewable power."},

{type:"teach", trg:"资源(zīyuán)", src:"resources", pos:"noun", gender:null,
 note:"资 (capital/resource) + 源 (source).\nCapital sources. Natural, human, or financial.",
 example:"A: 我们(wǒmen)必须(bìxū)保护(bǎohù)自然(zìrán)资源(zīyuán)。\nB: 对(duì)，资源(zīyuán)是(shì)有限(yǒuxiàn)的(de)。",
 exampleSrc:"A: We must protect natural resources.\nB: Right, resources are limited.",
 funFact:"资源 has branched widely in modern Chinese: 人力资源 (human resources), 自然资源 (natural resources), 水资源 (water resources). The word frames almost anything as a resource to be managed, a framing increasingly important in sustainability."},

{type:"teach", trg:"可再生(kězàishēng)", src:"renewable", pos:"adj", gender:null,
 note:"可 (can) + 再 (again) + 生 (generate).\nCan-generate-again. Key climate term.",
 example:"A: 可再生(kězàishēng)能源(néngyuán)是(shì)未来(wèilái)。\nB: 同意(tóngyì)，不可再生(bùkězàishēng)的(de)资源(zīyuán)会(huì)用(yòng)完(wán)。",
 exampleSrc:"A: Renewable energy is the future.\nB: I agree. Non-renewable resources will run out.",
 funFact:"可再生 is a modern three-character compound built from Classical components. Its structure mirrors English 're-new-able' perfectly: possible + again + generate. Clean linguistic engineering for a clean energy concept."},

{type:"teach", trg:"消耗(xiāohào)", src:"to consume / consumption", pos:"verb", gender:null,
 note:"消 (disappear/consume) + 耗 (deplete).\nBoth verbs reinforce depletion.",
 example:"A: 这(zhè)种(zhǒng)车(chē)消耗(xiāohào)太(tài)多(duō)燃油(rányóu)。\nB: 所以(suǒyǐ)我(wǒ)们(men)应该(yīnggāi)买(mǎi)电(diàn)动(dòng)汽(qì)车(chē)。",
 exampleSrc:"A: This type of car consumes too much fuel.\nB: So we should buy electric cars.",
 funFact:"消耗 emphasizes using something up completely. A related word 消费 (consumption in economic sense) focuses on spending rather than depletion. You 消耗 fuel but 消费 money, though the words sometimes overlap."},

{type:"teach", trg:"过度(guòdù)", src:"excessive / excessively", pos:"adj", gender:null,
 note:"过 (exceed) + 度 (degree).\nExceeding the right degree.",
 example:"A: 过度(guòdù)消耗(xiāohào)资源(zīyuán)是(shì)个(gè)大(dà)问题(wèntí)。\nB: 我(wǒ)们(men)应该(yīnggāi)节约(jiéyuē)使用(shǐyòng)。",
 exampleSrc:"A: Excessive consumption of resources is a big problem.\nB: We should use things sparingly.",
 funFact:"过度 can attach to many verbs to create 'over-' compounds: 过度工作 (overwork), 过度消费 (over-consumption), 过度使用 (overuse). It is the Chinese equivalent of the English 'over-' prefix."},

{type:"teach", trg:"持续(chíxù)", src:"sustained / continuous / ongoing", pos:"adj", gender:null,
 note:"持 (hold/continue) + 续 (continue).\nBoth characters reinforce continuation.",
 example:"A: 我们(wǒmen)要(yào)推动(tuīdòng)持续(chíxù)发展(fāzhǎn)。\nB: 对(duì)，不能(bùnéng)只(zhǐ)顾(gù)眼前(yǎnqián)。",
 exampleSrc:"A: We need to push for sustainable development.\nB: Right, we cannot focus only on the present.",
 funFact:"持续 lies at the heart of 可持续发展 (kěchíxù fāzhǎn, 'sustainable development'), a phrase adopted from UN terminology and now core to Chinese policy language. The concept has shaped national strategy since the 1990s."},

{type:"mc", q:"可再生(kězàishēng) literally means:",
 opts:["can generate again","environmentally protected","important resource","able to save"],
 ans:"can generate again",
 hint:"Three characters: 可 (can) + 再 + 生. Combine them literally."},

{type:"mc", q:"过度(guòdù) is the Chinese equivalent of which English prefix?",
 opts:["re-","over-","pre-","un-"],
 ans:"over-",
 hint:"It means 'exceeding the right degree.' Think overuse, overwork, overeating."},

{type:"fb", s:"这(zhè)辆(liàng)车(chē){1}很(hěn)多(duō)油(yóu)，不(bù)环保(huánbǎo)。",
 a:["消耗(xiāohào)"],
 opts:["消耗(xiāohào)","持续(chíxù)","过度(guòdù)","可再生(kězàishēng)"],
 hint:"The verb for using up fuel, food, or resources. 消 (consume) + 耗 (deplete).",
 sSrc:"This car {1} a lot of fuel. It is not environmentally friendly."},

{type:"match", pairs:[
  {trg:"能源(néngyuán)", src:"energy (resource)"},
  {trg:"资源(zīyuán)", src:"resources"},
  {trg:"可再生(kězàishēng)", src:"renewable"},
  {trg:"消耗(xiāohào)", src:"to consume"},
  {trg:"过度(guòdù)", src:"excessive"},
  {trg:"持续(chíxù)", src:"sustained"}
]}

]},

// ─── L2: Carbon and Climate ───
{id:"zhv2_u43l2", title:"Carbon and Climate", icon:"🌡️", xp:15, board:true, steps:[
{type:"intro", title:"Carbon and Climate",
 desc:"From carbon emissions to greenhouse effects, climate science has its own Chinese vocabulary. Learn the key scientific and policy terms.",
 goals:["Discuss emissions and pollution","Use climate science vocabulary","Talk about reducing impact"]},

{type:"teach", trg:"碳(tàn)", src:"carbon", pos:"noun", gender:null,
 note:"Single character. The chemical element.\n碳排放 = carbon emissions.",
 example:"A: 减少(jiǎnshǎo)碳(tàn)排放(páifàng)是(shì)全球(quánqiú)目标(mùbiāo)。\nB: 每(měi)个(gè)国家(guójiā)都(dōu)要(yào)参与(cānyù)。",
 exampleSrc:"A: Reducing carbon emissions is a global goal.\nB: Every country must participate.",
 funFact:"碳 as a chemistry term is relatively modern in Chinese. Traditional vocabulary used 炭 (charcoal, a related character), but modern science adopted 碳 as the cleaner term for the element carbon on the periodic table."},

{type:"teach", trg:"排放(páifàng)", src:"emissions / to emit", pos:"noun", gender:null,
 note:"排 (arrange/emit) + 放 (release).\nArranged release. Both noun and verb.",
 example:"A: 工厂(gōngchǎng)的(de)排放(páifàng)必须(bìxū)达到(dádào)标准(biāozhǔn)。\nB: 这(zhè)样(yàng)才能(cáinéng)保护(bǎohù)空气(kōngqì)质量(zhìliàng)。",
 exampleSrc:"A: Factory emissions must meet the standard.\nB: Only then can we protect air quality.",
 funFact:"排放 entered wide use with China's environmental regulations from the 2000s onward. The word is now ubiquitous in news coverage: 零排放 (zero emissions), 排放标准 (emissions standard), 温室气体排放 (greenhouse gas emissions)."},

{type:"teach", trg:"温室(wēnshì)", src:"greenhouse", pos:"noun", gender:null,
 note:"温 (warm) + 室 (room).\nWarm room. Same word for actual greenhouses and greenhouse effect.",
 example:"A: 温室(wēnshì)效应(xiàoyìng)让(ràng)地球(dìqiú)变(biàn)暖(nuǎn)。\nB: 我们(wǒmen)需要(xūyào)立刻(lìkè)行动(xíngdòng)。",
 exampleSrc:"A: The greenhouse effect is warming the Earth.\nB: We need to act immediately.",
 funFact:"温室效应 (greenhouse effect) is a direct translation of the scientific English term, introduced through climate science literature in the 1980s. The underlying analogy (a garden greenhouse trapping heat) works identically in both languages."},

{type:"teach", trg:"生态(shēngtài)", src:"ecology / ecosystem", pos:"noun", gender:null,
 note:"生 (life) + 态 (state).\nLife state. Attributive usage common: 生态系统 (ecosystem).",
 example:"A: 这(zhè)里(lǐ)的(de)生态(shēngtài)环境(huánjìng)很(hěn)好(hǎo)。\nB: 我们(wǒmen)要(yào)好好(hǎohǎo)保护(bǎohù)。",
 exampleSrc:"A: The ecological environment here is excellent.\nB: We must protect it well.",
 funFact:"生态 is a 20th-century scientific word, translating the Greek root of 'ecology.' 生态文明 ('ecological civilization') has become a major Chinese policy concept, framing environmental protection as a stage of civilization itself."},

{type:"teach", trg:"减少(jiǎnshǎo)", src:"to reduce / to decrease", pos:"verb", gender:null,
 note:"减 (reduce) + 少 (few).\nMake fewer. Opposite: 增加 (zēngjiā, increase).",
 example:"A: 我(wǒ)们(men)应该(yīnggāi)减少(jiǎnshǎo)使用(shǐyòng)塑料(sùliào)袋(dài)。\nB: 对(duì)，塑料(sùliào)对(duì)环境(huánjìng)不(bù)好(hǎo)。",
 exampleSrc:"A: We should reduce the use of plastic bags.\nB: Right, plastic is bad for the environment.",
 funFact:"减少 is one of a three-verb family for numeric changes: 增加 (increase), 减少 (reduce), 保持 (keep constant). These verbs power most statistical and environmental discussion in modern Chinese."},

{type:"teach", trg:"绿色(lǜsè)", src:"green (environmental)", pos:"adj", gender:null,
 note:"绿 (green) + 色 (color).\nAlso attributive for 'eco-friendly' as in English.",
 example:"A: 绿色(lǜsè)食品(shípǐn)越来越(yuèláiyuè)受(shòu)欢迎(huānyíng)。\nB: 因为(yīnwèi)人们(rénmen)更(gèng)注重(zhùzhòng)健康(jiànkāng)。",
 exampleSrc:"A: Green food is becoming more and more popular.\nB: Because people care more about health.",
 funFact:"绿色 as 'eco-friendly' is a linguistic loan from English 'green' in the environmental sense. It now prefixes many terms: 绿色能源 (green energy), 绿色出行 (green travel), 绿色经济 (green economy)."},

{type:"mc", q:"温室(wēnshì) literally describes what kind of room?",
 opts:["warm room","big room","glass room","clean room"],
 ans:"warm room",
 hint:"温 means ___. 室 means ___. The name captures the function: trapping heat."},

{type:"mc", q:"碳排放 means:",
 opts:["coal usage","carbon emissions","air pressure","carbon dioxide"],
 ans:"carbon emissions",
 hint:"碳 is …. 排放 means 'to emit' or '….' Combine them."},

{type:"fb", s:"保护(bǎohù){1}环境(huánjìng)是(shì)每(měi)个人(gèrén)的(de)责任(zérèn)。",
 a:["生态(shēngtài)"],
 opts:["生态(shēngtài)","温室(wēnshì)","碳(tàn)","绿色(lǜsè)"],
 hint:"The noun for ecosystem. 生 (life) + 态 (state).",
 sSrc:"Protecting the {1} environment is everyone's responsibility."},

{type:"match", pairs:[
  {trg:"碳(tàn)", src:"carbon"},
  {trg:"排放(páifàng)", src:"emissions"},
  {trg:"温室(wēnshì)", src:"greenhouse"},
  {trg:"生态(shēngtài)", src:"ecology"},
  {trg:"减少(jiǎnshǎo)", src:"to reduce"},
  {trg:"绿色(lǜsè)", src:"green (eco)"}
]}

]},

// ─── L3: Crisis and Awareness ───
{id:"zhv2_u43l3", title:"Crisis and Awareness", icon:"🌍", xp:15, board:true, steps:[
{type:"intro", title:"Crisis and Awareness",
 desc:"Discuss the environmental crisis at a global level. These words empower you to engage with the biggest issue of our time.",
 goals:["Frame global environmental issues","Express awareness and responsibility","Discuss crisis and response"]},

{type:"teach", trg:"危机(wēijī)", src:"crisis", pos:"noun", gender:null,
 note:"危 (danger) + 机 (opportunity/moment).\nDanger and opportunity together.",
 example:"A: 气候(qìhòu)危机(wēijī)非常(fēicháng)严重(yánzhòng)。\nB: 我(wǒ)们(men)需要(xūyào)立即(lìjí)行动(xíngdòng)。",
 exampleSrc:"A: The climate crisis is very serious.\nB: We need to act immediately.",
 funFact:"The idea that 危机 = danger + opportunity is a popular Western interpretation but slightly oversimplified. 机 in this word means 'turning point,' not specifically 'opportunity.' Still, the dual-nature framing has inspired many thinkers on both sides."},

{type:"teach", trg:"全球(quánqiú)", src:"global / worldwide", pos:"adj", gender:null,
 note:"全 (whole/all) + 球 (ball/sphere).\nThe whole sphere (Earth).",
 example:"A: 这(zhè)是(shì)一(yí)个(gè)全球(quánqiú)性(xìng)的(de)问题(wèntí)。\nB: 所以(suǒyǐ)需要(xūyào)全球(quánqiú)合作(hézuò)。",
 exampleSrc:"A: This is a global issue.\nB: So it requires global cooperation.",
 funFact:"球 (ball/sphere) in 地球 (Earth) and 全球 (global) shows that Chinese conceives of the planet as a sphere. Before contact with Western cartography, traditional Chinese cosmology had a square Earth under a round sky. The modern term updates this."},

{type:"teach", trg:"意识(yìshí)", src:"awareness / consciousness", pos:"noun", gender:null,
 note:"意 (meaning/intent) + 识 (knowledge).\nIntentional knowledge. Both cognitive and social awareness.",
 example:"A: 人们(rénmen)的(de)环保(huánbǎo)意识(yìshí)越(yuè)来(lái)越(yuè)强(qiáng)。\nB: 这(zhè)是(shì)很(hěn)好(hǎo)的(de)趋势(qūshì)。",
 exampleSrc:"A: People's environmental awareness is getting stronger.\nB: This is a good trend.",
 funFact:"意识 is a modern word coined to translate Western philosophical concepts of 'consciousness' and 'awareness.' It is rooted in classical Chinese vocabulary but the specific compound word as we use it today comes from 20th-century translations of European thought."},

{type:"teach", trg:"环保(huánbǎo)", src:"environmental protection / eco-friendly", pos:"noun", gender:null,
 note:"Short for 环境保护 (environmental protection).\nUsed widely in daily speech.",
 example:"A: 我(wǒ)喜欢(xǐhuan)环保(huánbǎo)的(de)产品(chǎnpǐn)。\nB: 虽然(suīrán)贵(guì)一点(yìdiǎn)，但(dàn)是(shì)值得(zhíde)。",
 exampleSrc:"A: I like environmentally friendly products.\nB: Although a bit expensive, they are worth it.",
 funFact:"环保 is the everyday shortened form of 环境保护. Chinese frequently shortens four-character phrases to two-character compounds: 环境保护 → 环保, 超级市场 → 超市 (supermarket), 地铁 from 地下铁道."},

{type:"teach", trg:"责任(zérèn)", src:"responsibility / duty", pos:"noun", gender:null,
 note:"责 (duty/blame) + 任 (task/responsibility).\nDouble emphasis. Both formal and personal.",
 example:"A: 保护(bǎohù)地球(dìqiú)是(shì)我(wǒ)们(men)共同(gòngtóng)的(de)责任(zérèn)。\nB: 说(shuō)得(de)对(duì)，每(měi)个人(gèrén)都(dōu)要(yào)尽(jìn)一份(yífèn)力(lì)。",
 exampleSrc:"A: Protecting Earth is our shared responsibility.\nB: Well said. Everyone needs to do their part.",
 funFact:"责任 is a deeply Confucian concept. Classical Chinese ethics emphasized responsibility to family, society, and state. Modern 责任 has expanded to include responsibility to the planet, extending ancient social values to environmental scale."},

{type:"teach", trg:"保护(bǎohù)", src:"to protect / protection", pos:"verb", gender:null,
 note:"保 (protect/keep) + 护 (guard/protect).\nDouble-emphasis protection.",
 example:"A: 我(wǒ)们(men)要(yào)保护(bǎohù)动物(dòngwù)和(hé)植物(zhíwù)。\nB: 特别(tèbié)是(shì)濒危(bīnwēi)物种(wùzhǒng)。",
 exampleSrc:"A: We must protect animals and plants.\nB: Especially endangered species.",
 funFact:"保护 appears in numerous contexts: 保护动物 (protect animals), 保护环境 (protect environment), 保护隐私 (protect privacy). The word is central to rights-based and conservation discourse in modern Chinese."},

{type:"mc", q:"全球(quánqiú) literally breaks down as:",
 opts:["whole sphere","many lands","international","all countries"],
 ans:"whole sphere",
 hint:"全 means ___. 球 means ball or ___. Earth is the ___ in question."},

{type:"mc", q:"环保(huánbǎo) is short for which longer phrase?",
 opts:["环形保养(huánxíng bǎoyǎng)","环境保护(huánjìng bǎohù)","环球保险(huánqiú bǎoxiǎn)","环行保持(huánxíng bǎochí)"],
 ans:"环境保护(huánjìng bǎohù)",
 hint:"Environmental + protection. The two full words combine into the short form."},

{type:"fb", s:"保护(bǎohù)环境(huánjìng)是(shì)每(měi)个(gè)人(rén)的(de){1}。",
 a:["责任(zérèn)"],
 opts:["责任(zérèn)","意识(yìshí)","危机(wēijī)","全球(quánqiú)"],
 hint:"The noun for duty or obligation. Central to Confucian ethics and modern civic life.",
 sSrc:"Protecting the environment is everyone's {1}."},

{type:"match", pairs:[
  {trg:"危机(wēijī)", src:"crisis"},
  {trg:"全球(quánqiú)", src:"global"},
  {trg:"意识(yìshí)", src:"awareness"},
  {trg:"环保(huánbǎo)", src:"eco-friendly"},
  {trg:"责任(zérèn)", src:"responsibility"},
  {trg:"保护(bǎohù)", src:"to protect"}
]},

{type:"tip", title:"The 危机 Myth",
 text:"You may have heard that 危机 means 'danger + opportunity.'\nThe truth is subtler. 危 does mean danger. But 机 here means 'turning point' or 'crucial moment,' not specifically 'opportunity.'\nStill, the word captures a real insight: a crisis creates a moment where change becomes possible.",
 deepDive:"The 'crisis = danger + opportunity' idea was popularized in the West by President Kennedy in a 1959 speech. Linguists have since pointed out the oversimplification. Yet the metaphor remains useful: treating climate 危机 as a turning point is exactly the mindset needed to respond."},

{type:"story", speaker:"narrator", mood:"urgent", art:"zh-climate-awareness",
 trg:"全球(quánqiú)气候(qìhòu)危机(wēijī)需要(xūyào)每(měi)个(gè)国家(guójiā)共同(gòngtóng)行动(xíngdòng)。人们(rénmen)的(de)环保(huánbǎo)意识(yìshí)越(yuè)来(lái)越(yuè)强(qiáng)，大家(dàjiā)减少(jiǎnshǎo)碳(tàn)排放(páifàng)，保护(bǎohù)生态(shēngtài)。每(měi)个人(gèrén)都(dōu)有(yǒu)责任(zérèn)留(liú)给(gěi)下(xià)一代(yídài)一(yí)个(gè)绿色(lǜsè)的(de)地球(dìqiú)。",
 src:"The global climate crisis requires every country to act together. People's environmental awareness is growing stronger. Everyone is reducing carbon emissions and protecting ecosystems. Everyone has the responsibility to leave a green Earth for the next generation."}

]}

]};

export default UNIT_43;
