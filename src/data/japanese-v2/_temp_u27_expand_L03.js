// Unit 27 Expansion — Lesson 5: Environmental Policy
const LESSON_5 = {
  id:"jav2_u27l5", title:"かんきょうせいさく", icon:"📜", xp:15, board:true,
  steps:[
    {type:"intro", title:"Environmental Policy",
     desc:"Environmental policy in Japan involves international agreements, government regulations, and corporate responsibility. Learn the vocabulary of treaties, regulations, and the policy mechanisms that drive environmental action at national and international levels.",
     goals:["Use きせい, じょうやく, もくひょう in policy contexts","Discuss international environmental agreements","Navigate regulatory and compliance vocabulary"]},

    {type:"teach", trg:"きせい", src:"regulation / restriction", pos:"noun", gender:null,
     note:"Kanji: 規制. きせいする = to regulate.\nきせいかんわ = deregulation. はいしゅつきせい = emission regulations.",
     example:"A: はいしゅつガスのきせいがきびしくなりました。\nB: きぎょうはたいおうをせまられていますね。",
     exampleSrc:"A: Emission gas regulations have become stricter.\nB: Companies are being pressed to respond.",
     funFact:"規制 uses 規 (rule/standard) and 制 (control/system). Japan's environmental きせい evolved from the pollution disasters of the 1960s-70s. Today, Japan has some of the world's strictest industrial emission standards. The debate between きせい (regulation) and きせいかんわ (deregulation) is central to economic policy discussions."},

    {type:"teach", trg:"じょうやく", src:"treaty / convention", pos:"noun", gender:null,
     note:"Kanji: 条約. こくさいじょうやく = international treaty.\nじょうやくをひじゅんする = to ratify a treaty.",
     example:"A: パリきょうていはきこうへんどうにかんするじょうやくです。\nB: おおくのくにがさんかしていますね。",
     exampleSrc:"A: The Paris Agreement is a treaty concerning climate change.\nB: Many countries are participating.",
     funFact:"条約 uses 条 (article/clause) and 約 (promise). Japan's relationship with environmental treaties is complex. It hosted the Kyoto Protocol negotiations in 1997 but later struggled to meet its targets. The term きょうてい (agreement) is slightly less formal than じょうやく (treaty). The Paris Agreement is called パリきょうてい, not パリじょうやく."},

    {type:"teach", trg:"もくひょう", src:"goal / target / objective", pos:"noun", gender:null,
     note:"Kanji: 目標. もくひょうをたてる = to set a goal.\nさくげんもくひょう = reduction target.",
     example:"A: にせんごじゅうねんまでのはいしゅつゼロがもくひょうです。\nB: やくさんじゅうねんでたっせいできるでしょうか。",
     exampleSrc:"A: The goal is zero emissions by 2050.\nB: Can it be achieved in about thirty years?",
     funFact:"目標 uses 目 (eye) and 標 (mark/sign). A goal is literally a mark you keep your eye on. Japan's 2050 carbon neutrality もくひょう was announced in 2020. Breaking large goals into smaller milestones uses ちゅうかんもくひょう (intermediate targets). The related word たっせい (achievement) pairs with もくひょう: もくひょうをたっせいする (to achieve a goal)."},

    {type:"mc", q:"きせいかんわ means:", opts:["Tightening regulations","Relaxing rules and restrictions","Creating new laws","Enforcing penalties"], ans:"Relaxing rules and restrictions",
     hint:"かんわ means easing or r..., so combined with きせい it means loosening controls."},

    {type:"teach", trg:"たっせい", src:"achievement / accomplishment", pos:"noun", gender:null,
     note:"Kanji: 達成. たっせいする = to achieve/accomplish.\nもくひょうたっせい = goal achievement.",
     example:"A: もくひょうのたっせいにはこくさいきょうりょくがふかけつです。\nB: いっこくだけではむりですからね。",
     exampleSrc:"A: International cooperation is essential for achieving the goal.\nB: Because one country alone cannot do it.",
     funFact:"達成 uses 達 (reach/arrive) and 成 (become/achieve). Reaching something and making it real. In Japanese business, たっせいりつ (achievement rate) is a key performance metric. A 目標達成 (goal achievement) celebration is a standard corporate ritual. The verb たっせいする carries more weight than できる (can do); it implies overcoming obstacles."},

    {type:"teach", trg:"ふかけつ", src:"indispensable / essential", pos:"adj", gender:null,
     note:"Kanji: 不可欠. 不 (not) + 可 (possible) + 欠 (lack).\nLiterally: cannot be lacked. Formal word for absolutely necessary.",
     example:"A: かんきょうきょういくはじぞくかのうなしゃかいにふかけつです。\nB: こどものころからのきょういくがたいせつですね。",
     exampleSrc:"A: Environmental education is indispensable for a sustainable society.\nB: Education from childhood is important.",
     funFact:"不可欠 is a formal three-character compound: not + possible + lacking. You cannot lack it. This word is a step above ひつよう (necessary). Editorials and policy papers use ふかけつ to signal absolute necessity. The similar ぜったいにひつよう (absolutely necessary) is less formal. ふかけつ belongs to written and formal spoken Japanese."},

    {type:"fb", s:"もくひょうの___にはこくさいきょうりょくがふかけつです。\n(International cooperation is essential for achieving the goal.)", a:"たっせい", opts:["たっせい","きせい","さくげん","もくひょう"], sSrc:"International cooperation is essential for achieving the goal.",
     hint:"The noun meaning to reach and accomplish a set objective."},

    {type:"teach", trg:"こくさいきょうりょく", src:"international cooperation", pos:"noun", gender:null,
     note:"こくさい (international) + きょうりょく (cooperation).\nこくさいきょうりょくきこう = international cooperation agency.",
     example:"A: かんきょうもんだいにはこくさいきょうりょくがひつようです。\nB: にほんもODAをつうじてこうけんしています。",
     exampleSrc:"A: International cooperation is needed for environmental issues.\nB: Japan is also contributing through ODA.",
     funFact:"Japan's international cooperation agency JICA (国際協力機構) is one of the world's largest aid organizations. Japan provides significant ODA (Official Development Assistance) for environmental projects in developing countries. The phrase こくさいきょうりょく appears in every discussion of global challenges, from climate to health."},

    {type:"teach", trg:"こうけん", src:"contribution", pos:"noun", gender:null,
     note:"Kanji: 貢献. こうけんする = to contribute.\nしゃかいこうけん = social contribution.",
     example:"A: にほんのぎじゅつはかんきょうほごにこうけんできます。\nB: とくにしょうエネぎじゅつですね。",
     exampleSrc:"A: Japanese technology can contribute to environmental protection.\nB: Especially energy-saving technology.",
     funFact:"貢献 uses 貢 (tribute) and 献 (offer/dedicate). Contributing is offering tribute. Japanese companies emphasize しゃかいこうけん (social contribution) in their CSR reports. The word carries prestige: saying こうけんしている implies meaningful, positive impact. The phrase ちいきこうけん (community contribution) is also common."},

    {type:"mc", q:"ふかけつ literally breaks down as:", opts:["Cannot be lacked (absolutely essential)","Not possible to add","Cannot be changed","Not allowed to continue"], ans:"Cannot be lacked (absolutely essential)",
     hint:"不 (not) + 可 (possible) + 欠 (lack) creates a triple-character statement of necessity."},

    {type:"teach", trg:"しょうエネ", src:"energy conservation / energy saving", pos:"noun", gender:null,
     note:"Short for 省エネルギー. しょう (save/conserve) + エネ (energy).\nしょうエネかでん = energy-saving appliances.",
     example:"A: しょうエネぎじゅつはにほんのとくいぶんやです。\nB: せかいにゆしゅつされていますね。",
     exampleSrc:"A: Energy-saving technology is Japan's specialty.\nB: It is being exported worldwide.",
     funFact:"Japan is a global leader in しょうエネ technology. After the oil crises of the 1970s, Japan invested heavily in energy efficiency. The result: Japan's GDP-per-unit-of-energy is among the best in the world. The government runs a Top Runner program where the most efficient appliance sets the standard that all manufacturers must meet within a few years."},

    {type:"fb", s:"にほんのぎじゅつはかんきょうほごに___できます。\n(Japanese technology can contribute to environmental protection.)", a:"こうけん", opts:["こうけん","きせい","たっせい","さくげん"], sSrc:"Japanese technology can contribute to environmental protection.",
     hint:"The noun meaning offering tribute or making a meaningful positive impact."},

    {type:"match", pairs:[{trg:"きせい",src:"regulation"},{trg:"じょうやく",src:"treaty"},{trg:"もくひょう",src:"goal/target"},{trg:"たっせい",src:"achievement"}]},

    {type:"fb", s:"かんきょうきょういくはじぞくかのうなしゃかいに___です。\n(Environmental education is indispensable for a sustainable society.)", a:"ふかけつ", opts:["ふかけつ","ひつよう","じゅうよう","かのう"], sSrc:"Environmental education is indispensable for a sustainable society.",
     hint:"The formal adjective meaning something that absolutely cannot be absent."},

    {type:"match", pairs:[{trg:"こくさいきょうりょく",src:"international cooperation"},{trg:"こうけん",src:"contribution"},{trg:"しょうエネ",src:"energy saving"},{trg:"ふかけつ",src:"indispensable"}]},
  ]
};
export default LESSON_5;
