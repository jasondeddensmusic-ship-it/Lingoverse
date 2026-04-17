// Unit 27 Batch 5 Lesson 1: エネルギー (Energy & Sustainability)
const BATCH5_L_1 = {
  id:"jav2_u27l_b5_1", title:"エネルギー", icon:"⚡", xp:15, board:true,
  steps:[
    {type:"intro", title:"エネルギー",
     desc:"Energy policy is central to Japan's environmental debate. After Fukushima, nuclear power became controversial. Learn vocabulary for renewable energy, carbon emissions, and sustainability. These terms dominate environmental news and JLPT N2 reading passages.",
     goals:["Use energy vocabulary: さいせいかのう, げんしりょく, はいしゅつ","Discuss Japan's energy challenges","Express environmental obligations with べき and ざるをえない"]},

    {type:"teach", trg:"さいせいかのうエネルギー", src:"renewable energy", pos:"noun", gender:null,
     note:"さいせいかのう (renewable) + エネルギー (energy).\nたいようこう = solar power. ふうりょく = wind power.",
     example:"A: さいせいかのうエネルギーへのいこうがすすんでいます。\nB: たいようこうはっでんがとくにふえていますね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: The transition to renewable energy is advancing.\nB: Solar power generation is especially increasing.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"再生可能 uses 再 (again), 生 (life), 可 (possible), 能 (ability): literally 'able to be reborn.' Japan's energy mix shifted dramatically after the 2011 Fukushima disaster. Before Fukushima, nuclear provided about 30% of electricity. After, the country rapidly expanded solar power (太陽光), making Japan the world's third-largest solar installer."},

    {type:"teach", trg:"げんしりょく", src:"nuclear power / atomic energy", pos:"noun", gender:null,
     note:"Kanji: 原子力. げんしりょくはつでんしょ = nuclear power plant.\nA politically charged topic in Japan since 2011.",
     example:"A: げんしりょくはつでんしょのさいかどうについてぎろんがつづいています。\nB: あんぜんせいとエネルギーじきゅうのバランスがむずかしいですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Debate continues about restarting nuclear power plants.\nB: Balancing safety and energy self-sufficiency is difficult.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"原子力 uses 原 (original/source), 子 (child/particle), and 力 (power). After the 2011 Fukushima disaster (東日本大震災), all of Japan's 54 nuclear reactors were shut down. The debate between げんぱつさいかどう (reactor restart) and だつげんぱつ (nuclear phase-out) divides Japanese society deeply. It remains one of Japan's most contentious political issues."},

    {type:"teach", trg:"はいしゅつりょう", src:"emissions volume / amount of emissions", pos:"noun", gender:null,
     note:"Kanji: 排出量. にさんかたんそはいしゅつりょう = CO2 emissions.\nはいしゅつ (emissions) + りょう (quantity).",
     example:"A: にさんかたんそのはいしゅつりょうをさくげんするひつようがあります。\nB: さんぎょうかいぜんたいでとりくむべきですね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: We need to reduce CO2 emissions.\nB: The entire industry should work on this.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"排出量 is the key metric in climate discussions. 排 (expel) + 出 (exit) + 量 (quantity). Japan pledged to achieve carbon neutrality (カーボンニュートラル) by 2050. はいしゅつりょうさくげん (emissions reduction) drives policy on energy, transportation, and manufacturing. Japanese companies increasingly report their はいしゅつりょう in sustainability reports."},

    {type:"teach", trg:"〜ざるをえない", src:"cannot help but ~ / have no choice but to ~", pos:"part", gender:null,
     note:"Negative stem + ざるを得ない. Formal expression of necessity.\nみとめざるをえない = cannot help but acknowledge.",
     example:"A: げんじょうをかんがえると、たいさくをとらざるをえません。\nB: もはやさきおくりできるもんだいではありませんね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Considering the current situation, we have no choice but to take measures.\nB: It is no longer a problem we can postpone.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"ざるを得ない is a classical Japanese negative (ざる) + を得ない (cannot obtain). It expresses reluctant necessity: 'I would prefer not to, but circumstances force me.' It is more formal and literary than しかたがない. Academic and political writing uses it for situations where action is compelled by facts: 事実を認めざるを得ない (we must acknowledge the facts)."},

    {type:"mc", q:"さいせいかのうエネルギー includes:", opts:["Solar, wind, and other renewable sources","Only nuclear power","Only fossil fuels","Only hydroelectric power"], ans:"Solar, wind, and other renewable sources",
     hint:"さいせいかのう means 'r...' or 'able to be regenerated.'"},

    {type:"teach", trg:"じぞくかのう", src:"sustainable / sustainability", pos:"adj", gender:null,
     note:"な-adjective. Kanji: 持続可能. SDGs = じぞくかのうかいはつもくひょう.\nじぞくかのうなしゃかい = sustainable society.",
     example:"A: じぞくかのうなしゃかいをつくることがわれわれのせきにんです。\nB: みらいのせだいのためにこうどうしましょう。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Building a sustainable society is our responsibility.\nB: Let us act for the sake of future generations.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"持続可能 uses 持 (hold), 続 (continue), 可 (possible), 能 (ability). The SDGs (Sustainable Development Goals) are called SDGs or じぞくかのうかいはつもくひょう in Japan. Japanese corporations have embraced SDGs terminology. ESG (Environment, Social, Governance) investing has grown. じぞくかのうせい (sustainability) is now a standard business and education term."},

    {type:"teach", trg:"さくげん", src:"reduction / cutback", pos:"noun", gender:null,
     note:"Kanji: 削減. さくげんする = to reduce/cut.\nよさんさくげん = budget cuts. コストさくげん = cost reduction.",
     example:"A: はいしゅつりょうをごじゅっパーセントさくげんすることがもくひょうです。\nB: やしんてきなもくひょうですが、たっせいかのうでしょうか。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: The goal is to reduce emissions by 50%.\nB: It is an ambitious goal, but is it achievable?\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"削減 uses 削 (shave/whittle) and 減 (decrease). The kanji 削 originally depicted a knife shaving wood, implying careful, deliberate reduction. In business, コストさくげん (cost reduction) is a perpetual goal. In environmental policy, はいしゅつさくげん (emissions reduction) is the key metric. Japan's government sets numerical さくげん targets for climate commitments."},

    {type:"teach", trg:"いこう", src:"transition / shift / migration", pos:"noun", gender:null,
     note:"Kanji: 移行. いこうする = to transition/shift.\nいこうきかん = transition period.",
     example:"A: かせきねんりょうからさいせいかのうエネルギーへのいこうがじゅうようです。\nB: しかし、きゅうげきないこうはけいざいにえいきょうをあたえますね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: The transition from fossil fuels to renewable energy is important.\nB: However, a rapid transition would impact the economy.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"移行 uses 移 (move/transfer) and 行 (go/conduct). The word captures the process of shifting from one system to another. デジタルいこう (digital transition), エネルギーいこう (energy transition), and しんせいどへのいこう (transition to a new system) are common usages. Japan values smooth いこう with いこうきかん (transition periods) to minimize disruption."},

    {type:"tip", title:"Environmental Debate Vocabulary",
     text:"Energy sources:\nかせきねんりょう = fossil fuels\nげんしりょく = nuclear power\nさいせいかのう = renewable energy\nたいようこう = solar power\nふうりょく = wind power\n\nEnvironmental action:\nさくげん = reduction\nはいしゅつ = emissions\nリサイクル = recycling\nしょうエネ = energy saving\n\nPolicy terms:\nいこう = transition\nじぞくかのう = sustainable\nカーボンニュートラル = carbon neutral\nSDGs = sustainable development goals\n\nObligation patterns:\nべき = should/ought to\nざるをえない = have no choice but to\nなければならない = must"},

    {type:"teach", trg:"かせきねんりょう", src:"fossil fuels", pos:"noun", gender:null,
     note:"Kanji: 化石燃料. かせき (fossil) + ねんりょう (fuel).\nせきゆ = petroleum. せきたん = coal. てんねんガス = natural gas.",
     example:"A: かせきねんりょうへのいぞんをへらすべきです。\nB: だいたいエネルギーのかいはつがきゅうむですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: We should reduce dependence on fossil fuels.\nB: Development of alternative energy is urgently needed.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
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
