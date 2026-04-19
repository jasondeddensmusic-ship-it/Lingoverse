// Unit 25 Batch 5 Lesson 2: 交渉(こうしょう) (Negotiation & Persuasion)
const BATCH5_L_2 = {
  id:"jav2_u25l_b5_2", title:"交渉(こうしょう)", icon:"💬", xp:15, board:true,
  steps:[
    {type:"intro", title:"交渉(こうしょう)",
     desc:"Japanese negotiation relies on indirect communication, consensus-building, and relationship management. Learn vocabulary for proposals, compromises, conditions, and agreements. These skills bridge cultural gaps and enable successful business interactions in Japan.",
     goals:["Use negotiation vocabulary: こうしょう, だきょう, じょうけん","Understand indirect refusal and agreement patterns","Navigate proposal and counter-proposal language"]},

    {type:"teach", trg:"交渉(こうしょう)", src:"negotiation", pos:"noun", gender:null,
     note:"Kanji: 交渉(こうしょう). 交渉(こうしょう)する = to negotiate.\n価格交渉(かかくこうしょう) = price negotiation.",
     example:"A: 交渉(こうしょう)は夜(よる)遅(おそ)くまで続(つづ)きました。\nB: 合意(ごうい)に達(たっ)しましたか？\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Negotiations continued until late at night.\nB: Did you reach an agreement?\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"交渉 uses 交 (exchange/interact) and 渉 (wade/cross). Japanese 交渉(こうしょう) emphasizes harmony: both sides should feel they gained something. The 根回(ねまわ)し (behind-the-scenes consensus building) happens before formal 交渉(こうしょう). By the time parties sit down to negotiate, much has already been agreed informally."},

    {type:"teach", trg:"妥協(だきょう)", src:"compromise", pos:"noun", gender:null,
     note:"Kanji: 妥協(だきょう). 妥協(だきょう)する = to compromise.\n妥協点(だきょうてん) = point of compromise.",
     example:"A: お互(たが)いに妥協点(だきょうてん)を見(み)つけましょう。\nB: はい、両方(りょうほう)が満足(まんぞく)できる解決策(かいけつさく)を探(さが)しましょう。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Let us find a point of compromise.\nB: Yes, let us look for a solution that satisfies both sides.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"妥協 uses 妥 (peace/compromise) and 協 (cooperate). Japanese business culture values 妥協(だきょう) as a sign of maturity, not weakness. Win-win solutions (ウィンウィン) are preferred. The phrase 妥協(だきょう)を許(ゆる)さない (to not allow compromise) signals unshakable principles, used sparingly for truly important matters."},

    {type:"teach", trg:"条件(じょうけん)", src:"condition / terms / requirements", pos:"noun", gender:null,
     note:"Kanji: 条件(じょうけん). 条件(じょうけん)を出(だ)す = to present conditions.\n最低条件(さいていじょうけん) = minimum conditions.",
     example:"A: こちらの条件(じょうけん)をお伝(つた)えいたします。\nB: 検討(けんとう)させていただきます。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: I will convey our conditions.\nB: We will consider them.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"条件 uses 条 (article/clause) and 件 (matter). In 交渉(こうしょう), presenting 条件(じょうけん) is the formal phase. Japanese negotiation often involves exchanging written 条件(じょうけん) before meeting. The phrase 条件(じょうけん)がそろう (conditions are all met) signals readiness to proceed. 条件付(じょうけんつ)き (with conditions/conditional) describes qualified agreements."},

    {type:"teach", trg:"合意(ごうい)", src:"agreement / consensus / accord", pos:"noun", gender:null,
     note:"Kanji: 合意(ごうい). 合意(ごうい)する = to agree/reach consensus.\n合意(ごうい)に達(たっ)する = to reach an agreement.",
     example:"A: ようやく両者(りょうしゃ)の合意(ごうい)に達(たっ)しました。\nB: 長(なが)い交渉(こうしょう)でしたね。お疲(つか)れさまでした。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: We finally reached agreement between both parties.\nB: It was a long negotiation. Good work.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"合意 combines 合 (fit/match) and 意 (intention/meaning). Unlike 契約(けいやく) (contract, legal), 合意(ごうい) is the meeting of minds. Japanese business prizes 合意(ごうい) because it represents genuine alignment, not just legal obligation. 全員(ぜんいん)の合意(ごうい) (unanimous agreement) is the ideal outcome, reflecting the consensus-driven culture."},

    {type:"mc", q:"だきょうてん means:", opts:["A point where both sides can compromise","A place for negotiations","A deadline for talks","A final offer"], ans:"A point where both sides can compromise",
     hint:"だきょう (c...) + てん (p...) = the place w... agreement can be found."},

    {type:"teach", trg:"根回(ねまわ)し", src:"behind-the-scenes consensus building", pos:"noun", gender:null,
     note:"Kanji: 根回(ねまわ)し. Literally: 'going around the roots.' Pre-meeting preparation.\nThe informal groundwork before formal decisions.",
     example:"A: 会議(かいぎ)の前(まえ)に関係者(かんけいしゃ)に根回(ねまわ)しをしておきましょう。\nB: 全員(ぜんいん)の理解(りかい)を得(え)ておくことが大事(だいじ)ですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Let us do nemawashi with stakeholders before the meeting.\nB: It is important to get everyone's understanding beforehand.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"根回し literally means 'going around the roots' (of a tree being transplanted). Just as you prepare roots before moving a tree, you prepare people before making a decision. 根回(ねまわ)し involves individual meetings, phone calls, and informal dinners to build consensus before the formal meeting. Many Japanese decisions are actually made through 根回(ねまわ)し, not in the meeting itself."},

    {type:"teach", trg:"要望(ようぼう)", src:"demand / request / requirement", pos:"noun", gender:null,
     note:"Kanji: 要望(ようぼう). 要望(ようぼう)する = to demand/request.\nStronger than おねがい but less aggressive than 要求(ようきゅう).",
     example:"A: 顧客(こきゃく)からの要望(ようぼう)に対応(たいおう)する必要(ひつよう)があります。\nB: 具体的(ぐたいてき)にどのような要望(ようぼう)ですか？\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: We need to respond to the customer's demands.\nB: Specifically, what kind of demands?\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"要望 uses 要 (need/essential) and 望 (desire/hope). It falls between おねがい (polite request) and 要求(ようきゅう) (formal demand). 顧客(こきゃく)の要望(ようぼう) (customer demands) drives Japanese business philosophy of customer-first (お客様(きゃくさま)は神様(かみさま), the customer is god). Companies strive to exceed 要望(ようぼう), not just meet them."},

    {type:"teach", trg:"折(お)り合(あ)い", src:"compromise / mutual concession / middle ground", pos:"noun", gender:null,
     note:"Kanji: 折(お)り合(あ)い. 折(お)り合(あ)いをつける = to reach a compromise.\nLess formal than 妥協(だきょう). More conversational.",
     example:"A: なんとか折(お)り合(あ)いをつけることができました。\nB: 両方(りょうほう)が少(すこ)しずつ譲(ゆず)ったんですね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: We managed to reach a compromise somehow.\nB: Both sides gave a little, then.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"折り合い uses 折 (fold/bend) and 合い (matching/fitting). The image is of two sides bending toward each other until they fit together. 折(お)り合(あ)いをつける is more casual and natural than 妥協(だきょう)する. In daily life, neighbors need to 折(お)り合(あ)いをつける about noise, families about schedules, and colleagues about workload. It is the art of everyday compromise."},

    {type:"tip", title:"Japanese Negotiation Culture",
     text:"Key concepts:\n根回(ねまわ)し = pre-meeting consensus (do this FIRST)\nりんぎ = circulate proposal for stamp approval\nぜんいんいっち = unanimous consent (the goal)\n妥協(だきょう) = compromise (both sides yield)\n\nIndirect refusal phrases:\nちょっとむずかしいですね = That is a bit difficult (= no)\n検討(けんとう)します = We will consider it (= maybe no)\n善処(ぜんしょ)します = We will do our best (= unlikely)\n\nDirect agreement:\n承知(しょうち)しました = Agreed/understood\n合意(ごうい)します = We agree\n契約(けいやく)しましょう = Let us make a contract"},

    {type:"teach", trg:"譲(ゆず)る", src:"to yield / to concede / to give way", pos:"verb", gender:null,
     note:"Group 1 verb. Kanji: 譲(ゆず)る. 席(せき)を譲(ゆず)る = give up one's seat.\n一歩(いっぽ)譲(ゆず)る = concede one step.",
     example:"A: お互(たが)いに一歩(いっぽ)ずつ譲(ゆず)りましょう。\nB: そうですね。そのほうがうまくいきます。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Let us each concede one step.\nB: That is right. It will work better that way.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"譲る is a fundamental social verb in Japanese. On trains, you 譲(ゆず)る your seat to the elderly. In negotiations, you 譲(ゆず)る on minor points to gain major ones. 一歩(いっぽ)譲(ゆず)る (concede one step) is wisdom in conflict resolution. The kanji 譲 also appears in 譲渡(じょうと) (transfer of ownership) and 謙譲語(けんじょうご) (humble language, literally 'yielding language')."},

    {type:"teach", trg:"満足(まんぞく)", src:"satisfaction / being satisfied", pos:"noun", gender:null,
     note:"Kanji: 満足(まんぞく). 満足(まんぞく)する = to be satisfied.\n顧客満足(こきゃくまんぞく) = customer satisfaction.",
     example:"A: 両方(りょうほう)が満足(まんぞく)できる結果(けっか)になりました。\nB: ウィンウィンの関係(かんけい)ですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: The result satisfies both parties.\nB: It is a win-win relationship.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"満足 uses 満 (full) and 足 (sufficient/foot). Being 満足(まんぞく) means being 'fully sufficient.' 顧客満足度(こきゃくまんぞくど) (customer satisfaction level) is a key business metric in Japan. Companies survey 満足度(まんぞくど) obsessively. Japanese service culture aims for 120% 満足(まんぞく), exceeding expectations rather than merely meeting them."},

    {type:"fb", s:"お互(たが)いに{1}てんを見(み)つけましょう。\n(Let us find a point of compromise.)", a:"だきょう", opts:["だきょう","もんだい","ごうい","しゅちょう"], sSrc:"Let us find a point of compromise.",
     hint:"The noun meaning compromise, combined with てん (point) for the place where both sides yield."},

    {type:"mc", q:"ねまわし happens:", opts:["Before the formal meeting or decision","During the meeting","After the decision is made","Only in emergencies"], ans:"Before the formal meeting or decision",
     hint:"This behind-the-scenes process prepares consensus so the m... runs smoothly."},

    {type:"match", pairs:[{trg:"交渉(こうしょう)",src:"negotiation"},{trg:"妥協(だきょう)",src:"compromise"},{trg:"合意(ごうい)",src:"agreement/consensus"},{trg:"根回(ねまわ)し",src:"behind-the-scenes prep"}]},

    {type:"fb", s:"ようやく両者(りょうしゃ)の{1}に達(たっ)しました。\n(We finally reached agreement between both parties.)", a:"ごうい", opts:["ごうい","けいやく","こうしょう","だきょう"], sSrc:"We finally reached agreement between both parties.",
     hint:"The word meaning agreement or consensus, not contract, that represents a meeting of minds."},

    {type:"mc", q:"ちょっとむずかしいですね in business likely means:", opts:["An indirect refusal (probably no)","A genuine statement of difficulty","A request for more time","An enthusiastic yes"], ans:"An indirect refusal (probably no)",
     hint:"Japanese business communication often uses softened language to decline without saying 'no' directly."}
  ,{type:"match",pairs:[{trg:"条件(じょうけん)",src:"condition / terms / requirements"},{trg:"要望(ようぼう)",src:"demand / request / requirement"},{trg:"折(お)り合(あ)い",src:"compromise / mutual concession / middle ground"},{trg:"譲(ゆず)る",src:"to yield / to concede / to give way"},{trg:"満足(まんぞく)",src:"satisfaction / being satisfied"}]},
  {type:"fb", s:"両社(りょうしゃ)は価格(かかく)について{1}に達(たっ)しました。", a:["合意(ごうい)"], opts:["合意(ごうい)","交渉(こうしょう)","妥協(だきょう)","条件(じょうけん)"], hint:"The shared understanding reached when both sides agree on terms.", sSrc:"The two companies reached a {1} on the price."}
]
};
export default BATCH5_L_2;
