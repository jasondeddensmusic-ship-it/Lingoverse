// Unit 25 Expansion. Lesson 3: Meeting Protocol
const LESSON_3 = {
  id:"jav2_u25l3", title:"かいぎのマナー", icon:"🤝", xp:15, board:true,
  steps:[
    {type:"intro", title:"Meeting Protocol",
     desc:"Japanese meetings follow strict protocols from seating order to speaking turns. Master the vocabulary of meeting management: agendas, minutes, facilitation, and the unspoken rules that govern corporate gatherings.",
     goals:["Use ぎじろく, しかい, ぎだい in meeting contexts","Understand Japanese meeting etiquette vocabulary","Navigate formal meeting flow from start to close"]},

    {type:"teach", trg:"ぎじろく", src:"minutes (of a meeting)", pos:"noun", gender:null,
     note:"Kanji: 議事録. 議事 (proceedings) + 録 (record).\nぎじろくをとる = to take minutes.",
     example:"A: きょうのかいぎのぎじろくはだれがとりますか？\nB: わたしがたんとうします。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Who will take the minutes for today's meeting?\nB: I will be in charge.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"In many Japanese companies, the youngest employee in the room takes the ぎじろく. It is considered a training exercise in listening, summarizing, and understanding business context. The minutes typically include date, attendees, agenda items, decisions made, and action items with deadlines."},

    {type:"teach", trg:"しかい", src:"facilitator / chairperson / MC", pos:"noun", gender:null,
     note:"Kanji: 司会. しかいをする = to facilitate/chair.\nしかいしゃ = the person who facilitates.",
     example:"A: きょうのかいぎのしかいはだれですか？\nB: たなかぶちょうがしかいをつとめます。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Who is chairing today's meeting?\nB: Department Head Tanaka will serve as chair.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"司会 uses 司 (manage/preside) and 会 (meeting). The しかい role extends beyond business: wedding receptions, award ceremonies, and TV shows all have a しかい. Good しかい skills are highly valued. The role requires balancing time management with letting everyone speak."},

    {type:"teach", trg:"ぎだい", src:"agenda item / topic for discussion", pos:"noun", gender:null,
     note:"Kanji: 議題. ぎだいにあげる = to put on the agenda.\nほんじつのぎだい = today's agenda items.",
     example:"A: つぎのぎだいにうつりましょう。\nB: はい、よさんについてですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Let us move to the next agenda item.\nB: Yes, it is about the budget.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"議題 combines 議 (deliberate) and 題 (topic). Japanese meeting agendas are often distributed in advance so attendees can prepare. This connects to 根回し (nemawashi): key decisions are discussed informally before the meeting, so the formal ぎだい discussion is often a confirmation rather than a debate."},

    {type:"mc", q:"ぎじろくをとる means:", opts:["To write down what happens in a meeting","To set the meeting agenda","To chair a meeting","To cancel the meeting"], ans:"To write down what happens in a meeting",
     hint:"ぎじろく is the written record, and とる means to take or capture."},

    {type:"teach", trg:"よさん", src:"budget", pos:"noun", gender:null,
     note:"Kanji: 予算. よさんをくむ = to draw up a budget.\nよさんないで = within budget.",
     example:"A: らいねんどのよさんはいくらですか？\nB: やくごひゃくまんえんのよていです。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: What is the budget for next fiscal year?\nB: It is planned at about five million yen.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"予算 uses 予 (advance/beforehand) and 算 (calculate). Japanese fiscal year budgets are famously detailed. Government budgets go through 概算要求 (rough estimates), 査定 (assessment), and 国会承認 (parliamentary approval). Corporate budgets follow a similar multi-stage process with department-level 予算要求."},

    {type:"teach", trg:"たんとう", src:"being in charge / responsibility", pos:"noun", gender:null,
     note:"Kanji: 担当. たんとうする = to be in charge of.\nたんとうしゃ = person in charge.",
     example:"A: このプロジェクトのたんとうはだれですか？\nB: やまだがたんとうしています。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Who is in charge of this project?\nB: Yamada is in charge.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"担当 uses 担 (carry/shoulder) and 当 (hit/apply). Being たんとう means you carry the responsibility on your shoulders. In Japanese companies, every task has a clear たんとうしゃ. Business cards often list the person's たんとう area. When calling a company, asking for the たんとうしゃ of a specific matter gets you to the right person."},

    {type:"fb", s:"きょうのかいぎの{1}はだれですか？\n(Who is chairing today's meeting?)", a:"しかい", opts:["しかい","ぎだい","ぎじろく","たんとう"], sSrc:"Who is chairing today's meeting?",
     hint:"The role of the person who runs and manages the flow of a meeting."},

    {type:"teach", trg:"けつろん", src:"conclusion / decision", pos:"noun", gender:null,
     note:"Kanji: 結論. けつろんをだす = to reach a conclusion.\nけつろんとして = in conclusion.",
     example:"A: かいぎのけつろんはどうなりましたか？\nB: あたらしいていあんをさいようすることになりました。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: What was the meeting's conclusion?\nB: It was decided to adopt the new proposal.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"結論 uses 結 (tie/conclude) and 論 (argument). In Japanese meetings, the けつろん is often a consensus rather than a majority vote. The phrase ということになりました (it has been decided that) is the standard way to announce conclusions, using a passive-like structure that avoids naming who decided."},

    {type:"teach", trg:"さいよう", src:"adoption / hiring / acceptance", pos:"noun", gender:null,
     note:"Kanji: 採用. さいようする = to adopt (a plan) or to hire (a person).\nDouble meaning: business decisions and recruitment.",
     example:"A: このていあんをさいようしましょう。\nB: いぎはありません。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Let us adopt this proposal.\nB: No objections.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"採用 has two major meanings that share the same logic. 採 (pick/select) + 用 (use). Picking a proposal to use = adoption. Picking a person to use = hiring. During しゅうしょくかつどう (job hunting season), university students anxiously await さいようつうち (hiring notifications) from companies."},

    {type:"mc", q:"けつろんをだす means:", opts:["To reject a proposal","To arrive at a final decision","To create a new agenda","To postpone a decision"], ans:"To arrive at a final decision",
     hint:"けつろん is the endpoint of deliberation, and だす means to bring out or produce."},

    {type:"teach", trg:"いぎ", src:"objection", pos:"noun", gender:null,
     note:"Kanji: 異議. いぎをとなえる = to raise an objection.\nいぎなし = no objection.",
     example:"A: ほかにいぎはありませんか？\nB: いぎなしです。しょうにんします。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Are there any other objections?\nB: No objections. Approved.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"異議 uses 異 (different) and 議 (opinion). The phrase 異議なし (no objection) echoes courtroom and parliamentary procedure. In Japanese meetings, the しかい often asks いぎはありませんか before finalizing each ぎだい. Silence is treated as agreement, so not speaking up means you approve."},

    {type:"teach", trg:"ていれいかいぎ", src:"regular meeting / standing meeting", pos:"noun", gender:null,
     note:"Kanji: 定例会議. 定例 (regular/routine) + 会議 (meeting).\nまいしゅうのていれいかいぎ = weekly regular meeting.",
     example:"A: まいしゅうげつようびにていれいかいぎがあります。\nB: なんじからですか？\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: There is a regular meeting every Monday.\nB: From what time?\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"Japanese companies love ていれいかいぎ. Weekly team meetings, monthly department meetings, quarterly reviews. The regularity ensures information flow, but critics say excessive meetings reduce productivity. Some companies have introduced かいぎなしデー (no-meeting days) to give employees uninterrupted work time."},

    {type:"fb", s:"あたらしいていあんを{1}することになりました。\n(It was decided to adopt the new proposal.)", a:"さいよう", opts:["さいよう","しょうにん","ほうこく","ぎじろく"], sSrc:"It was decided to adopt the new proposal.",
     hint:"The verb-noun meaning to select something for use, applied to plans and people alike."},

    {type:"match", pairs:[{trg:"ぎじろく",src:"meeting minutes"},{trg:"しかい",src:"facilitator"},{trg:"ぎだい",src:"agenda item"},{trg:"けつろん",src:"conclusion"}]},

    {type:"mc", q:"In a Japanese meeting, silence after いぎはありませんか means:", opts:["The meeting is over","Someone disagrees","Everyone agrees","People are confused"], ans:"Everyone agrees",
     hint:"In Japanese consensus culture, not voicing opposition is treated as consent."},

    {type:"match", pairs:[{trg:"よさん",src:"budget"},{trg:"たんとう",src:"in charge"},{trg:"さいよう",src:"adoption/hiring"},{trg:"いぎ",src:"objection"}]},
  ]
};
export default LESSON_3;
