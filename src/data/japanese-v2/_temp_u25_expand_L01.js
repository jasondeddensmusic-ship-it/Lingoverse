// Unit 25 Expansion. Lesson 3: Meeting Protocol
const LESSON_3 = {
  id:"jav2_u25l3", title:"かいぎのマナー", icon:"🤝", xp:15, board:true,
  steps:[
    {type:"intro", title:"Meeting Protocol",
     desc:"Japanese meetings follow strict protocols from seating order to speaking turns. Master the vocabulary of meeting management: agendas, minutes, facilitation, and the unspoken rules that govern corporate gatherings.",
     goals:["Use ぎじろく, しかい, ぎだい in meeting contexts","Understand Japanese meeting etiquette vocabulary","Navigate formal meeting flow from start to close"]},

    {type:"teach", trg:"ぎじろく", src:"minutes (of a meeting)", pos:"noun", gender:null,
     note:"Kanji: 議事録. 議事 (proceedings) + 録 (record).\nぎじろくをとる = to take minutes.",
     example:"A: きょうのかいぎのぎじろくはだれがとりますか？\nB: わたしがたんとうします。",
     exampleSrc:"A: Who will take the minutes for today's meeting?\nB: I will be in charge.",
     funFact:"In many Japanese companies, the youngest employee in the room takes the ぎじろく. It is considered a training exercise in listening, summarizing, and understanding business context. The minutes typically include date, attendees, agenda items, decisions made, and action items with deadlines."},

    {type:"teach", trg:"しかい", src:"facilitator / chairperson / MC", pos:"noun", gender:null,
     note:"Kanji: 司会. しかいをする = to facilitate/chair.\nしかいしゃ = the person who facilitates.",
     example:"A: きょうのかいぎのしかいはだれですか？\nB: たなかぶちょうがしかいをつとめます。",
     exampleSrc:"A: Who is chairing today's meeting?\nB: Department Head Tanaka will serve as chair.",
     funFact:"司会 uses 司 (manage/preside) and 会 (meeting). The しかい role extends beyond business: wedding receptions, award ceremonies, and TV shows all have a しかい. Good しかい skills are highly valued. The role requires balancing time management with letting everyone speak."},

    {type:"teach", trg:"ぎだい", src:"agenda item / topic for discussion", pos:"noun", gender:null,
     note:"Kanji: 議題. ぎだいにあげる = to put on the agenda.\nほんじつのぎだい = today's agenda items.",
     example:"A: つぎのぎだいにうつりましょう。\nB: はい、よさんについてですね。",
     exampleSrc:"A: Let us move to the next agenda item.\nB: Yes, it is about the budget.",
     funFact:"議題 combines 議 (deliberate) and 題 (topic). Japanese meeting agendas are often distributed in advance so attendees can prepare. This connects to 根回し (nemawashi): key decisions are discussed informally before the meeting, so the formal ぎだい discussion is often a confirmation rather than a debate."},

    {type:"mc", q:"ぎじろくをとる means:", opts:["To write down what happens in a meeting","To set the meeting agenda","To chair a meeting","To cancel the meeting"], ans:"To write down what happens in a meeting",
     hint:"ぎじろく is the written record, and とる means to take or capture."},

    {type:"teach", trg:"よさん", src:"budget", pos:"noun", gender:null,
     note:"Kanji: 予算. よさんをくむ = to draw up a budget.\nよさんないで = within budget.",
     example:"A: らいねんどのよさんはいくらですか？\nB: やくごひゃくまんえんのよていです。",
     exampleSrc:"A: What is the budget for next fiscal year?\nB: It is planned at about five million yen.",
     funFact:"予算 uses 予 (advance/beforehand) and 算 (calculate). Japanese fiscal year budgets are famously detailed. Government budgets go through 概算要求 (rough estimates), 査定 (assessment), and 国会承認 (parliamentary approval). Corporate budgets follow a similar multi-stage process with department-level 予算要求."},

    {type:"teach", trg:"たんとう", src:"being in charge / responsibility", pos:"noun", gender:null,
     note:"Kanji: 担当. たんとうする = to be in charge of.\nたんとうしゃ = person in charge.",
     example:"A: このプロジェクトのたんとうはだれですか？\nB: やまだがたんとうしています。",
     exampleSrc:"A: Who is in charge of this project?\nB: Yamada is in charge.",
     funFact:"担当 uses 担 (carry/shoulder) and 当 (hit/apply). Being たんとう means you carry the responsibility on your shoulders. In Japanese companies, every task has a clear たんとうしゃ. Business cards often list the person's たんとう area. When calling a company, asking for the たんとうしゃ of a specific matter gets you to the right person."},

    {type:"fb", s:"きょうのかいぎの{1}はだれですか？\n(Who is chairing today's meeting?)", a:"しかい", opts:["しかい","ぎだい","ぎじろく","たんとう"], sSrc:"Who is chairing today's meeting?",
     hint:"The role of the person who runs and manages the flow of a meeting."},

    {type:"teach", trg:"けつろん", src:"conclusion / decision", pos:"noun", gender:null,
     note:"Kanji: 結論. けつろんをだす = to reach a conclusion.\nけつろんとして = in conclusion.",
     example:"A: かいぎのけつろんはどうなりましたか？\nB: あたらしいていあんをさいようすることになりました。",
     exampleSrc:"A: What was the meeting's conclusion?\nB: It was decided to adopt the new proposal.",
     funFact:"結論 uses 結 (tie/conclude) and 論 (argument). In Japanese meetings, the けつろん is often a consensus rather than a majority vote. The phrase ということになりました (it has been decided that) is the standard way to announce conclusions, using a passive-like structure that avoids naming who decided."},

    {type:"teach", trg:"さいよう", src:"adoption / hiring / acceptance", pos:"noun", gender:null,
     note:"Kanji: 採用. さいようする = to adopt (a plan) or to hire (a person).\nDouble meaning: business decisions and recruitment.",
     example:"A: このていあんをさいようしましょう。\nB: いぎはありません。",
     exampleSrc:"A: Let us adopt this proposal.\nB: No objections.",
     funFact:"採用 has two major meanings that share the same logic. 採 (pick/select) + 用 (use). Picking a proposal to use = adoption. Picking a person to use = hiring. During しゅうしょくかつどう (job hunting season), university students anxiously await さいようつうち (hiring notifications) from companies."},

    {type:"mc", q:"けつろんをだす means:", opts:["To postpone a decision","To reject a proposal","To arrive at a final decision","To create a new agenda"], ans:"To arrive at a final decision",
     hint:"けつろん is the endpoint of deliberation, and だす means to bring out or produce."},

    {type:"teach", trg:"いぎ", src:"objection", pos:"noun", gender:null,
     note:"Kanji: 異議. いぎをとなえる = to raise an objection.\nいぎなし = no objection.",
     example:"A: ほかにいぎはありませんか？\nB: いぎなしです。しょうにんします。",
     exampleSrc:"A: Are there any other objections?\nB: No objections. Approved.",
     funFact:"異議 uses 異 (different) and 議 (opinion). The phrase 異議なし (no objection) echoes courtroom and parliamentary procedure. In Japanese meetings, the しかい often asks いぎはありませんか before finalizing each ぎだい. Silence is treated as agreement, so not speaking up means you approve."},

    {type:"teach", trg:"ていれいかいぎ", src:"regular meeting / standing meeting", pos:"noun", gender:null,
     note:"Kanji: 定例会議. 定例 (regular/routine) + 会議 (meeting).\nまいしゅうのていれいかいぎ = weekly regular meeting.",
     example:"A: まいしゅうげつようびにていれいかいぎがあります。\nB: なんじからですか？",
     exampleSrc:"A: There is a regular meeting every Monday.\nB: From what time?",
     funFact:"Japanese companies love ていれいかいぎ. Weekly team meetings, monthly department meetings, quarterly reviews. The regularity ensures information flow, but critics say excessive meetings reduce productivity. Some companies have introduced かいぎなしデー (no-meeting days) to give employees uninterrupted work time."},

    {type:"fb", s:"あたらしいていあんを{1}することになりました。\n(It was decided to adopt the new proposal.)", a:"さいよう", opts:["さいよう","しょうにん","ほうこく","ぎじろく"], sSrc:"It was decided to adopt the new proposal.",
     hint:"The verb-noun meaning to select something for use, applied to plans and people alike."},

    {type:"match", pairs:[{trg:"ぎじろく",src:"meeting minutes"},{trg:"しかい",src:"facilitator"},{trg:"ぎだい",src:"agenda item"},{trg:"けつろん",src:"conclusion"}]},

    {type:"mc", q:"In a Japanese meeting, silence after いぎはありませんか means:", opts:["People are confused","The meeting is over","Someone disagrees","Everyone agrees"], ans:"Everyone agrees",
     hint:"In Japanese consensus culture, not voicing opposition is treated as consent."},

    {type:"match", pairs:[{trg:"よさん",src:"budget"},{trg:"たんとう",src:"in charge"},{trg:"さいよう",src:"adoption/hiring"},{trg:"いぎ",src:"objection"}]},
  ]
};
export default LESSON_3;
