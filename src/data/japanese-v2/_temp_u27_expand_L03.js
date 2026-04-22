// Unit 27 Expansion. Lesson 5: Environmental Policy
const LESSON_5 = {
  id:"jav2_u27l5", title:"かんきょうせいさく", icon:"📜", xp:15, board:true,
  steps:[
    {type:"intro", title:"Environmental Policy",
     desc:"Environmental policy in Japan involves international agreements, government regulations, and corporate responsibility. Learn the vocabulary of treaties, regulations, and the policy mechanisms that drive environmental action at national and international levels.",
     goals:["Use きせい, じょうやく, もくひょう in policy contexts","Discuss international environmental agreements","Navigate regulatory and compliance vocabulary"]},

    {type:"teach", trg:"きせい", src:"regulation / restriction", pos:"noun", gender:null,
     note:"Kanji: 規制. きせいする = to regulate.\nきせいかんわ = deregulation. はいしゅつきせい = emission regulations.",
     example:"A: はいしゅつガスのきせいがきびしくなりました。\nB: きぎょうはたいおうをせまられていますね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Emission gas regulations have become stricter.\nB: Companies are being pressed to respond.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"規制 uses 規 (rule/standard) and 制 (control/system). Japan's environmental きせい evolved from the pollution disasters of the 1960s-70s. Today, Japan has some of the world's strictest industrial emission standards. The debate between きせい (regulation) and きせいかんわ (deregulation) is central to economic policy discussions."},

    {type:"teach", trg:"じょうやく", src:"treaty / convention", pos:"noun", gender:null,
     note:"Kanji: 条約. こくさいじょうやく = international treaty.\nじょうやくをひじゅんする = to ratify a treaty.",
     example:"A: パリきょうていはきこうへんどうにかんするじょうやくです。\nB: おおくのくにがさんかしていますね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: The Paris Agreement is a treaty concerning climate change.\nB: Many countries are participating.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"条約 uses 条 (article/clause) and 約 (promise). Japan's relationship with environmental treaties is complex. It hosted the Kyoto Protocol negotiations in 1997 but later struggled to meet its targets. The term きょうてい (agreement) is slightly less formal than じょうやく (treaty). The Paris Agreement is called パリきょうてい, not パリじょうやく."},

    {type:"teach", trg:"もくひょう", src:"goal / target / objective", pos:"noun", gender:null,
     note:"Kanji: 目標. もくひょうをたてる = to set a goal.\nさくげんもくひょう = reduction target.",
     example:"A: にせんごじゅうねんまでのはいしゅつゼロがもくひょうです。\nB: やくさんじゅうねんでたっせいできるでしょうか。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: The goal is zero emissions by 2050.\nB: Can it be achieved in about thirty years?\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"目標 uses 目 (eye) and 標 (mark/sign). A goal is literally a mark you keep your eye on. Japan's 2050 carbon neutrality もくひょう was announced in 2020. Breaking large goals into smaller milestones uses ちゅうかんもくひょう (intermediate targets). The related word たっせい (achievement) pairs with もくひょう: もくひょうをたっせいする (to achieve a goal)."},

    {type:"mc", q:"きせいかんわ means:", opts:["Relaxing rules and restrictions","Creating new laws","Enforcing penalties","Tightening regulations"], ans:"Relaxing rules and restrictions",
     hint:"かんわ means easing or r..., so combined with きせい it means loosening controls."},

    {type:"teach", trg:"たっせい", src:"achievement / accomplishment", pos:"noun", gender:null,
     note:"Kanji: 達成. たっせいする = to achieve/accomplish.\nもくひょうたっせい = goal achievement.",
     example:"A: もくひょうのたっせいにはこくさいきょうりょくがふかけつです。\nB: いっこくだけではむりですからね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: International cooperation is essential for achieving the goal.\nB: Because one country alone cannot do it.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"達成 uses 達 (reach/arrive) and 成 (become/achieve). Reaching something and making it real. In Japanese business, たっせいりつ (achievement rate) is a key performance metric. A 目標達成 (goal achievement) celebration is a standard corporate ritual. The verb たっせいする carries more weight than できる (can do); it implies overcoming obstacles."},

    {type:"teach", trg:"ふかけつ", src:"indispensable / essential", pos:"adj", gender:null,
     note:"Kanji: 不可欠. 不 (not) + 可 (possible) + 欠 (lack).\nLiterally: cannot be lacked. Formal word for absolutely necessary.",
     example:"A: かんきょうきょういくはじぞくかのうなしゃかいにふかけつです。\nB: こどものころからのきょういくがたいせつですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Environmental education is indispensable for a sustainable society.\nB: Education from childhood is important.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"不可欠 is a formal three-character compound: not + possible + lacking. You cannot lack it. This word is a step above ひつよう (necessary). Editorials and policy papers use ふかけつ to signal absolute necessity. The similar ぜったいにひつよう (absolutely necessary) is less formal. ふかけつ belongs to written and formal spoken Japanese."},

    {type:"fb", s:"もくひょうの{1}にはこくさいきょうりょくがふかけつです。\n(International cooperation is essential for achieving the goal.)", a:"たっせい", opts:["たっせい","きせい","さくげん","もくひょう"], sSrc:"International cooperation is essential for achieving the goal.",
     hint:"The noun meaning to reach and accomplish a set objective."},

    {type:"teach", trg:"こくさいきょうりょく", src:"international cooperation", pos:"noun", gender:null,
     note:"こくさい (international) + きょうりょく (cooperation).\nこくさいきょうりょくきこう = international cooperation agency.",
     example:"A: かんきょうもんだいにはこくさいきょうりょくがひつようです。\nB: にほんもODAをつうじてこうけんしています。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: International cooperation is needed for environmental issues.\nB: Japan is also contributing through ODA.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"Japan's international cooperation agency JICA (国際協力機構) is one of the world's largest aid organizations. Japan provides significant ODA (Official Development Assistance) for environmental projects in developing countries. The phrase こくさいきょうりょく appears in every discussion of global challenges, from climate to health."},

    {type:"teach", trg:"こうけん", src:"contribution", pos:"noun", gender:null,
     note:"Kanji: 貢献. こうけんする = to contribute.\nしゃかいこうけん = social contribution.",
     example:"A: にほんのぎじゅつはかんきょうほごにこうけんできます。\nB: とくにしょうエネぎじゅつですね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Japanese technology can contribute to environmental protection.\nB: Especially energy-saving technology.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"貢献 uses 貢 (tribute) and 献 (offer/dedicate). Contributing is offering tribute. Japanese companies emphasize しゃかいこうけん (social contribution) in their CSR reports. The word carries prestige: saying こうけんしている implies meaningful, positive impact. The phrase ちいきこうけん (community contribution) is also common."},

    {type:"mc", q:"ふかけつ literally breaks down as:", opts:["Not allowed to continue","Cannot be lacked (absolutely essential)","Not possible to add","Cannot be changed"], ans:"Cannot be lacked (absolutely essential)",
     hint:"不 (not) + 可 (possible) + 欠 (lack) creates a triple-character statement of necessity."},

    {type:"teach", trg:"しょうエネ", src:"energy conservation / energy saving", pos:"noun", gender:null,
     note:"Short for 省エネルギー. しょう (save/conserve) + エネ (energy).\nしょうエネかでん = energy-saving appliances.",
     example:"A: しょうエネぎじゅつはにほんのとくいぶんやです。\nB: せかいにゆしゅつされていますね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Energy-saving technology is Japan's specialty.\nB: It is being exported worldwide.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"Japan is a global leader in しょうエネ technology. After the oil crises of the 1970s, Japan invested heavily in energy efficiency. The result: Japan's GDP-per-unit-of-energy is among the best in the world. The government runs a Top Runner program where the most efficient appliance sets the standard that all manufacturers must meet within a few years."},

    {type:"fb", s:"にほんのぎじゅつはかんきょうほごに{1}できます。\n(Japanese technology can contribute to environmental protection.)", a:"こうけん", opts:["こうけん","きせい","たっせい","さくげん"], sSrc:"Japanese technology can contribute to environmental protection.",
     hint:"The noun meaning offering tribute or making a meaningful positive impact."},

    {type:"match", pairs:[{trg:"きせい",src:"regulation"},{trg:"じょうやく",src:"treaty"},{trg:"もくひょう",src:"goal/target"},{trg:"たっせい",src:"achievement"}]},

    {type:"fb", s:"かんきょうきょういくはじぞくかのうなしゃかいに{1}です。\n(Environmental education is indispensable for a sustainable society.)", a:"ふかけつ", opts:["ふかけつ","ひつよう","じゅうよう","かのう"], sSrc:"Environmental education is indispensable for a sustainable society.",
     hint:"The formal adjective meaning something that absolutely cannot be absent."},

    {type:"match", pairs:[{trg:"こくさいきょうりょく",src:"international cooperation"},{trg:"こうけん",src:"contribution"},{trg:"しょうエネ",src:"energy saving"},{trg:"ふかけつ",src:"indispensable"}]},
  ]
};
export default LESSON_5;
