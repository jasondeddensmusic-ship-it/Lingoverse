// Unit 27 Batch 5 Lesson 1: エネルギー (Energy & Sustainability)
const BATCH5_L_1 = {
  id:"jav2_u27l_b5_1", title:"エネルギー", icon:"⚡", xp:15, board:true,
  steps:[
    {type:"intro", title:"エネルギー",
     desc:"Energy policy is central to Japan's environmental debate. After Fukushima, nuclear power became controversial. Learn vocabulary for renewable energy, carbon emissions, and sustainability. These terms dominate environmental news and JLPT N2 reading passages.",
     goals:["Use energy vocabulary: さいせいかのう, げんしりょく, はいしゅつ","Discuss Japan's energy challenges","Express environmental obligations with べき and ざるをえない"]},

    {type:"teach", trg:"さいせいかのうエネルギー", src:"renewable energy", pos:"noun", gender:null,
     note:"さいせいかのう (renewable) + エネルギー (energy).\nたいようこう = solar power. ふうりょく = wind power.",
     example:"A: さいせいかのうエネルギーへのいこうがすすんでいます。\nB: たいようこうはっでんがとくにふえていますね。",
     exampleSrc:"A: The transition to renewable energy is advancing.\nB: Solar power generation is especially increasing.",
     funFact:"再生可能 uses 再 (again), 生 (life), 可 (possible), 能 (ability): literally 'able to be reborn.' Japan's energy mix shifted dramatically after the 2011 Fukushima disaster. Before Fukushima, nuclear provided about 30% of electricity. After, the country rapidly expanded solar power (太陽光), making Japan the world's third-largest solar installer."},

    {type:"teach", trg:"げんしりょく", src:"nuclear power / atomic energy", pos:"noun", gender:null,
     note:"Kanji: 原子力. げんしりょくはつでんしょ = nuclear power plant.\nA politically charged topic in Japan since 2011.",
     example:"A: げんしりょくはつでんしょのさいかどうについてぎろんがつづいています。\nB: あんぜんせいとエネルギーじきゅうのバランスがむずかしいですね。",
     exampleSrc:"A: Debate continues about restarting nuclear power plants.\nB: Balancing safety and energy self-sufficiency is difficult.",
     funFact:"原子力 uses 原 (original/source), 子 (child/particle), and 力 (power). After the 2011 Fukushima disaster (東日本大震災), all of Japan's 54 nuclear reactors were shut down. The debate between げんぱつさいかどう (reactor restart) and だつげんぱつ (nuclear phase-out) divides Japanese society deeply. It remains one of Japan's most contentious political issues."},

    {type:"teach", trg:"はいしゅつりょう", src:"emissions volume / amount of emissions", pos:"noun", gender:null,
     note:"Kanji: 排出量. にさんかたんそはいしゅつりょう = CO2 emissions.\nはいしゅつ (emissions) + りょう (quantity).",
     example:"A: にさんかたんそのはいしゅつりょうをさくげんするひつようがあります。\nB: さんぎょうかいぜんたいでとりくむべきですね。",
     exampleSrc:"A: We need to reduce CO2 emissions.\nB: The entire industry should work on this.",
     funFact:"排出量 is the key metric in climate discussions. 排 (expel) + 出 (exit) + 量 (quantity). Japan pledged to achieve carbon neutrality (カーボンニュートラル) by 2050. はいしゅつりょうさくげん (emissions reduction) drives policy on energy, transportation, and manufacturing. Japanese companies increasingly report their はいしゅつりょう in sustainability reports."},

    {type:"teach", trg:"〜ざるをえない", src:"cannot help but ~ / have no choice but to ~", pos:"part", gender:null,
     note:"Negative stem + ざるを得ない. Formal expression of necessity.\nみとめざるをえない = cannot help but acknowledge.",
     example:"A: げんじょうをかんがえると、たいさくをとらざるをえません。\nB: もはやさきおくりできるもんだいではありませんね。",
     exampleSrc:"A: Considering the current situation, we have no choice but to take measures.\nB: It is no longer a problem we can postpone.",
     funFact:"ざるを得ない is a classical Japanese negative (ざる) + を得ない (cannot obtain). It expresses reluctant necessity: 'I would prefer not to, but circumstances force me.' It is more formal and literary than しかたがない. Academic and political writing uses it for situations where action is compelled by facts: 事実を認めざるを得ない (we must acknowledge the facts)."},

    {type:"mc", q:"さいせいかのうエネルギー includes:", opts:["Solar, wind, and other renewable sources","Only nuclear power","Only fossil fuels","Only hydroelectric power"], ans:"Solar, wind, and other renewable sources",
     hint:"さいせいかのう means 'r...' or 'able to be regenerated.'"},

    {type:"teach", trg:"じぞくかのう", src:"sustainable / sustainability", pos:"adj", gender:null,
     note:"な-adjective. Kanji: 持続可能. SDGs = じぞくかのうかいはつもくひょう.\nじぞくかのうなしゃかい = sustainable society.",
     example:"A: じぞくかのうなしゃかいをつくることがわれわれのせきにんです。\nB: みらいのせだいのためにこうどうしましょう。",
     exampleSrc:"A: Building a sustainable society is our responsibility.\nB: Let us act for the sake of future generations.",
     funFact:"持続可能 uses 持 (hold), 続 (continue), 可 (possible), 能 (ability). The SDGs (Sustainable Development Goals) are called SDGs or じぞくかのうかいはつもくひょう in Japan. Japanese corporations have embraced SDGs terminology. ESG (Environment, Social, Governance) investing has grown. じぞくかのうせい (sustainability) is now a standard business and education term."},

    {type:"teach", trg:"さくげん", src:"reduction / cutback", pos:"noun", gender:null,
     note:"Kanji: 削減. さくげんする = to reduce/cut.\nよさんさくげん = budget cuts. コストさくげん = cost reduction.",
     example:"A: はいしゅつりょうをごじゅっパーセントさくげんすることがもくひょうです。\nB: やしんてきなもくひょうですが、たっせいかのうでしょうか。",
     exampleSrc:"A: The goal is to reduce emissions by 50%.\nB: It is an ambitious goal, but is it achievable?",
     funFact:"削減 uses 削 (shave/whittle) and 減 (decrease). The kanji 削 originally depicted a knife shaving wood, implying careful, deliberate reduction. In business, コストさくげん (cost reduction) is a perpetual goal. In environmental policy, はいしゅつさくげん (emissions reduction) is the key metric. Japan's government sets numerical さくげん targets for climate commitments."},

    {type:"teach", trg:"いこう", src:"transition / shift / migration", pos:"noun", gender:null,
     note:"Kanji: 移行. いこうする = to transition/shift.\nいこうきかん = transition period.",
     example:"A: かせきねんりょうからさいせいかのうエネルギーへのいこうがじゅうようです。\nB: しかし、きゅうげきないこうはけいざいにえいきょうをあたえますね。",
     exampleSrc:"A: The transition from fossil fuels to renewable energy is important.\nB: However, a rapid transition would impact the economy.",
     funFact:"移行 uses 移 (move/transfer) and 行 (go/conduct). The word captures the process of shifting from one system to another. デジタルいこう (digital transition), エネルギーいこう (energy transition), and しんせいどへのいこう (transition to a new system) are common usages. Japan values smooth いこう with いこうきかん (transition periods) to minimize disruption."},

    {type:"tip", title:"Environmental Debate Vocabulary",
     text:"Energy sources:\nかせきねんりょう = fossil fuels\nげんしりょく = nuclear power\nさいせいかのう = renewable energy\nたいようこう = solar power\nふうりょく = wind power\n\nEnvironmental action:\nさくげん = reduction\nはいしゅつ = emissions\nリサイクル = recycling\nしょうエネ = energy saving\n\nPolicy terms:\nいこう = transition\nじぞくかのう = sustainable\nカーボンニュートラル = carbon neutral\nSDGs = sustainable development goals\n\nObligation patterns:\nべき = should/ought to\nざるをえない = have no choice but to\nなければならない = must"},

    {type:"teach", trg:"かせきねんりょう", src:"fossil fuels", pos:"noun", gender:null,
     note:"Kanji: 化石燃料. かせき (fossil) + ねんりょう (fuel).\nせきゆ = petroleum. せきたん = coal. てんねんガス = natural gas.",
     example:"A: かせきねんりょうへのいぞんをへらすべきです。\nB: だいたいエネルギーのかいはつがきゅうむですね。",
     exampleSrc:"A: We should reduce dependence on fossil fuels.\nB: Development of alternative energy is urgently needed.",
     funFact:"化石燃料 is a four-kanji compound: 化 (change), 石 (stone), 燃 (burn), 料 (material). Japan imports nearly all its かせきねんりょう, making energy security (エネルギーあんぜんほしょう) a constant concern. The 1970s oil crises traumatized Japan and drove investments in nuclear power and energy efficiency. Japan's energy dependence on imports exceeds 90%."},

    {type:"fb", s:"はいしゅつりょうを50%{1}することがもくひょうです。\n(The goal is to reduce emissions by 50%.)", a:"さくげん", opts:["さくげん","ぞうか","いこう","はいしゅつ"], sSrc:"The goal is to reduce emissions by 50%.",
     hint:"The noun meaning reduction or cutback, using kanji for shave and decrease."},

    {type:"mc", q:"ざるをえない expresses:", opts:["Reluctant necessity (no choice but to)","Strong desire to do something","Polite refusal","Happy agreement"], ans:"Reluctant necessity (no choice but to)",
     hint:"This formal pattern means circumstances force the action, even if it is not preferred."},

    {type:"match", pairs:[{trg:"さいせいかのう",src:"renewable"},{trg:"げんしりょく",src:"nuclear power"},{trg:"じぞくかのう",src:"sustainable"},{trg:"かせきねんりょう",src:"fossil fuels"}]},

    {type:"fb", s:"げんじょうをかんがえると、たいさくをとら{1}えません。\n(Considering the situation, we have no choice but to take measures.)", a:"ざるを", opts:["ざるを","なくても","ないでも","ずにも"], sSrc:"Considering the situation, we have no choice but to take measures.",
     hint:"The classical negative form + を before 得ない, expressing reluctant necessity."},

    {type:"mc", q:"Japan imports what percentage of its energy resources?", opts:["Over 90%","About 50%","About 25%","Less than 10%"], ans:"Over 90%",
     hint:"Japan has minimal domestic fossil fuel reserves, making it heavily dependent on imports."}
  ]
};
export default BATCH5_L_1;
