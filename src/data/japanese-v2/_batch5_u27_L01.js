// Unit 27 Batch 5 Lesson 1: エネルギー (Energy & Sustainability)
const BATCH5_L_1 = {
  id:"jav2_u27l_b5_1", title:"エネルギー", icon:"⚡", xp:15, board:true,
  steps:[
    {type:"intro", title:"エネルギー",
     desc:"Energy policy is central to Japan's environmental debate. After Fukushima, nuclear power became controversial. Learn vocabulary for renewable energy, carbon emissions, and sustainability. These terms dominate environmental news and JLPT N2 reading passages.",
     goals:["Use energy vocabulary: 再生可能(さいせいかのう), 原子力(げんしりょく), 排出(はいしゅつ)","Discuss Japan's energy challenges","Express environmental obligations with べき and ざるをえない"]},

    {type:"teach", trg:"再生可能(さいせいかのう)エネルギー", src:"renewable energy", pos:"noun", gender:null,
     note:"再生可能(さいせいかのう) (renewable) + エネルギー (energy).\n太陽光(たいようこう) = solar power. 風力(ふうりょく) = wind power.",
     example:"A: 再生可能(さいせいかのう)エネルギーへの移行(いこう)が進(すす)んでいます。\nB: 太陽光(たいようこう)発電(はつでん)が特(とく)に増(ふ)えていますね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: The transition to renewable energy is advancing.\nB: Solar power generation is especially increasing.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"再生可能(さいせいかのう) uses 再(さい) (again), 生(せい) (life), 可(か) (possible), 能(のう) (ability): literally 'able to be reborn.' Japan's energy mix shifted dramatically after the 2011 Fukushima disaster. Before Fukushima, nuclear provided about 30% of electricity. After, the country rapidly expanded solar power (太陽光(たいようこう)), making Japan the world's third-largest solar installer."},

    {type:"teach", trg:"原子力(げんしりょく)", src:"nuclear power / atomic energy", pos:"noun", gender:null,
     note:"Kanji: 原子力(げんしりょく). 原子力(げんしりょく)発電所(はつでんしょ) = nuclear power plant.\nA politically charged topic in Japan since 2011.",
     example:"A: 原子力(げんしりょく)発電所(はつでんしょ)の再稼働(さいかどう)について議論(ぎろん)が続(つづ)いています。\nB: 安全性(あんぜんせい)とエネルギー自給(じきゅう)のバランスが難(むずか)しいですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Debate continues about restarting nuclear power plants.\nB: Balancing safety and energy self-sufficiency is difficult.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"原子力(げんしりょく) uses 原(げん) (original/source), 子(し) (child/particle), and 力(りょく) (power). After the 2011 Fukushima disaster (東日本大震災(ひがしにほんだいしんさい)), all of Japan's 54 nuclear reactors were shut down. The debate between 原発再稼働(げんぱつさいかどう) (reactor restart) and 脱原発(だつげんぱつ) (nuclear phase-out) divides Japanese society deeply. It remains one of Japan's most contentious political issues."},

    {type:"teach", trg:"排出量(はいしゅつりょう)", src:"emissions volume / amount of emissions", pos:"noun", gender:null,
     note:"Kanji: 排出量(はいしゅつりょう). 二酸化炭素(にさんかたんそ)排出量(はいしゅつりょう) = CO2 emissions.\n排出(はいしゅつ) (emissions) + 量(りょう) (quantity).",
     example:"A: 二酸化炭素(にさんかたんそ)の排出量(はいしゅつりょう)を削減(さくげん)する必要(ひつよう)があります。\nB: 産業界(さんぎょうかい)全体(ぜんたい)で取(と)り組(く)むべきですね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: We need to reduce CO2 emissions.\nB: The entire industry should work on this.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"排出量(はいしゅつりょう) is the key metric in climate discussions. 排(はい) (expel) + 出(しゅつ) (exit) + 量(りょう) (quantity). Japan pledged to achieve carbon neutrality (カーボンニュートラル) by 2050. 排出量削減(はいしゅつりょうさくげん) (emissions reduction) drives policy on energy, transportation, and manufacturing. Japanese companies increasingly report their 排出量(はいしゅつりょう) in sustainability reports."},

    {type:"teach", trg:"〜ざるをえない", src:"cannot help but ~ / have no choice but to ~", pos:"part", gender:null,
     note:"Negative stem + ざるを得(え)ない. Formal expression of necessity.\n認(みと)めざるをえない = cannot help but acknowledge.",
     example:"A: 現状(げんじょう)を考(かんが)えると、対策(たいさく)を取(と)らざるをえません。\nB: もはや先送(さきおく)りできる問題(もんだい)ではありませんね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Considering the current situation, we have no choice but to take measures.\nB: It is no longer a problem we can postpone.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"ざるを得(え)ない is a classical Japanese negative (ざる) + を得(え)ない (cannot obtain). It expresses reluctant necessity: 'I would prefer not to, but circumstances force me.' It is more formal and literary than しかたがない. Academic and political writing uses it for situations where action is compelled by facts: 事実(じじつ)を認(みと)めざるを得(え)ない (we must acknowledge the facts)."},

    {type:"mc", q:"再生可能(さいせいかのう)エネルギー includes:", opts:["Solar, wind, and other renewable sources","Only nuclear power","Only fossil fuels","Only hydroelectric power"], ans:"Solar, wind, and other renewable sources",
     hint:"再生可能(さいせいかのう) means 'r...' or 'able to be regenerated.'"},

    {type:"teach", trg:"持続可能(じぞくかのう)", src:"sustainable / sustainability", pos:"adj", gender:null,
     note:"な-adjective. Kanji: 持続可能(じぞくかのう). SDGs = 持続可能(じぞくかのう)開発(かいはつ)目標(もくひょう).\n持続可能(じぞくかのう)な社会(しゃかい) = sustainable society.",
     example:"A: 持続可能(じぞくかのう)な社会(しゃかい)を作(つく)ることが我(われ)々(われ)の責任(せきにん)です。\nB: 未来(みらい)の世代(せだい)のために行動(こうどう)しましょう。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Building a sustainable society is our responsibility.\nB: Let us act for the sake of future generations.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"持続可能(じぞくかのう) uses 持(じ) (hold), 続(ぞく) (continue), 可(か) (possible), 能(のう) (ability). The SDGs (Sustainable Development Goals) are called SDGs or 持続可能(じぞくかのう)開発(かいはつ)目標(もくひょう) in Japan. Japanese corporations have embraced SDGs terminology. ESG (Environment, Social, Governance) investing has grown. 持続可能性(じぞくかのうせい) (sustainability) is now a standard business and education term."},

    {type:"teach", trg:"削減(さくげん)", src:"reduction / cutback", pos:"noun", gender:null,
     note:"Kanji: 削減(さくげん). 削減(さくげん)する = to reduce/cut.\n予算(よさん)削減(さくげん) = budget cuts. コスト削減(さくげん) = cost reduction.",
     example:"A: 排出量(はいしゅつりょう)を50パーセント削減(さくげん)することが目標(もくひょう)です。\nB: 野心的(やしんてき)な目標(もくひょう)ですが、達成可能(たっせいかのう)でしょうか。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: The goal is to reduce emissions by 50%.\nB: It is an ambitious goal, but is it achievable?\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"削減(さくげん) uses 削(さく) (shave/whittle) and 減(げん) (decrease). The kanji 削(さく) originally depicted a knife shaving wood, implying careful, deliberate reduction. In business, コスト削減(さくげん) (cost reduction) is a perpetual goal. In environmental policy, 排出削減(はいしゅつさくげん) (emissions reduction) is the key metric. Japan's government sets numerical 削減(さくげん) targets for climate commitments."},

    {type:"teach", trg:"移行(いこう)", src:"transition / shift / migration", pos:"noun", gender:null,
     note:"Kanji: 移行(いこう). 移行(いこう)する = to transition/shift.\n移行期間(いこうきかん) = transition period.",
     example:"A: 化石燃料(かせきねんりょう)から再生可能(さいせいかのう)エネルギーへの移行(いこう)が重要(じゅうよう)です。\nB: しかし、急激(きゅうげき)な移行(いこう)は経済(けいざい)に影響(えいきょう)を与(あた)えますね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: The transition from fossil fuels to renewable energy is important.\nB: However, a rapid transition would impact the economy.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"移行(いこう) uses 移(い) (move/transfer) and 行(こう) (go/conduct). The word captures the process of shifting from one system to another. デジタル移行(いこう) (digital transition), エネルギー移行(いこう) (energy transition), and 新制度(しんせいど)への移行(いこう) (transition to a new system) are common usages. Japan values smooth 移行(いこう) with 移行期間(いこうきかん) (transition periods) to minimize disruption."},

    {type:"tip", title:"Environmental Debate Vocabulary",
     text:"Energy sources:\n化石燃料(かせきねんりょう) = fossil fuels\n原子力(げんしりょく) = nuclear power\n再生可能(さいせいかのう) = renewable energy\n太陽光(たいようこう) = solar power\n風力(ふうりょく) = wind power\n\nEnvironmental action:\n削減(さくげん) = reduction\n排出(はいしゅつ) = emissions\nリサイクル = recycling\n省(しょう)エネ = energy saving\n\nPolicy terms:\n移行(いこう) = transition\n持続可能(じぞくかのう) = sustainable\nカーボンニュートラル = carbon neutral\nSDGs = sustainable development goals\n\nObligation patterns:\nべき = should/ought to\nざるをえない = have no choice but to\nなければならない = must"},

    {type:"teach", trg:"化石燃料(かせきねんりょう)", src:"fossil fuels", pos:"noun", gender:null,
     note:"Kanji: 化石燃料(かせきねんりょう). 化石(かせき) (fossil) + 燃料(ねんりょう) (fuel).\n石油(せきゆ) = petroleum. 石炭(せきたん) = coal. 天然(てんねん)ガス = natural gas.",
     example:"A: 化石燃料(かせきねんりょう)への依存(いぞん)を減(へ)らすべきです。\nB: 代替(だいたい)エネルギーの開発(かいはつ)が急務(きゅうむ)ですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: We should reduce dependence on fossil fuels.\nB: Development of alternative energy is urgently needed.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"化石燃料(かせきねんりょう) is a four-kanji compound: 化(か) (change), 石(せき) (stone), 燃(ねん) (burn), 料(りょう) (material). Japan imports nearly all its 化石燃料(かせきねんりょう), making energy security (エネルギー安全保障(あんぜんほしょう)) a constant concern. The 1970s oil crises traumatized Japan and drove investments in nuclear power and energy efficiency. Japan's energy dependence on imports exceeds 90%."},

    {type:"fb", s:"排出量(はいしゅつりょう)を50%{1}することが目標(もくひょう)です。\n(The goal is to reduce emissions by 50%.)", a:"削減(さくげん)", opts:["削減(さくげん)","増加(ぞうか)","移行(いこう)","排出(はいしゅつ)"], sSrc:"The goal is to reduce emissions by 50%.",
     hint:"The noun meaning reduction or cutback, using kanji for shave and decrease."},

    {type:"mc", q:"ざるをえない expresses:", opts:["Happy agreement","Reluctant necessity (no choice but to)","Strong desire to do something","Polite refusal"], ans:"Reluctant necessity (no choice but to)",
     hint:"This formal pattern means circumstances force the action, even if it is not preferred."},

    {type:"match", pairs:[{trg:"再生可能(さいせいかのう)",src:"renewable"},{trg:"原子力(げんしりょく)",src:"nuclear power"},{trg:"持続可能(じぞくかのう)",src:"sustainable"},{trg:"化石燃料(かせきねんりょう)",src:"fossil fuels"}]},

    {type:"fb", s:"現状(げんじょう)を考(かんが)えると、対策(たいさく)を取(と)ら{1}えません。\n(Considering the situation, we have no choice but to take measures.)", a:"ざるを", opts:["ざるを","なくても","ないでも","ずにも"], sSrc:"Considering the situation, we have no choice but to take measures.",
     hint:"The classical negative form + を before 得(え)ない, expressing reluctant necessity."},

    {type:"mc", q:"Japan imports what percentage of its energy resources?", opts:["About 25%","Less than 10%","Over 90%","About 50%"], ans:"Over 90%",
     hint:"Japan has minimal domestic fossil fuel reserves, making it heavily dependent on imports."}
  ,{type:"match",pairs:[{trg:"排出量(はいしゅつりょう)",src:"emissions volume / amount of emissions"},{trg:"移行(いこう)",src:"transition / shift / migration"}]}]
};
export default BATCH5_L_1;
