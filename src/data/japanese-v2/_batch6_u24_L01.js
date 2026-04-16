// Batch 6 – Unit 24 (B1.3 Advanced Connectors): Formal Writing Expressions
const BATCH6_L1 = {
  id:"jav2_u24l_b6_1", title:"ぶんしょうひょうげん", icon:"📝", xp:15, board:true,
  steps:[
    {type:"intro", title:"ぶんしょうひょうげん",
     desc:"Learn formal written expressions and set phrases used in letters, emails, and official documents. These are essential for JLPT N2 reading and professional communication in Japanese.",
     goals:["Use formal connectors for written communication","Master set phrases for letters and emails","Distinguish spoken vs written register"]},

    {type:"teach", trg:"たとえば", src:"for example", pos:"conj", gender:null,
     note:"Kanji: 例えば. Used to introduce examples in both speech and writing.\nたとえばこんなこと = for example, things like this.",
     example:"A: にほんのでんとうてきなたべものはなにがありますか？\nB: たとえば、すしやてんぷらがゆうめいです。",
     exampleSrc:"A: What traditional Japanese foods are there?\nB: For example, sushi and tempura are famous.",
     funFact:"たとえば (例えば) is essential in academic and professional communication. The kanji 例 (example) appears in れいぶん (example sentence), じつれい (actual example), and れいがい (exception). JLPT reading passages use たとえば as a signal that concrete examples will follow a general statement."},

    {type:"teach", trg:"つまり", src:"in other words / that is to say", pos:"conj", gender:null,
     note:"Used to summarize or rephrase. つまりこういうことです = in other words, it is like this.\nLess formal than すなわち.",
     example:"A: このプロジェクトはよさんがたりません。つまり、ちゅうしするしかありません。\nB: ざんねんですが、しかたがないですね。",
     exampleSrc:"A: This project does not have enough budget. In other words, we have no choice but to cancel.\nB: It is unfortunate, but it cannot be helped.",
     funFact:"つまり signals that a simplification or conclusion is coming. In conversations, it helps the listener understand the core point. つまるところ (when it comes down to it) is a more formal variant. JLPT tests love to ask what つまり introduces: the main point or summary."},

    {type:"teach", trg:"ただし", src:"however / provided that", pos:"conj", gender:null,
     note:"Kanji: 但し. Introduces a condition or exception.\nUsed in contracts, rules, and formal writing.",
     example:"A: このサービスはむりょうです。ただし、がくせいにかぎります。\nB: がくせいしょうがひつようですか？",
     exampleSrc:"A: This service is free. However, it is limited to students.\nB: Is a student ID required?",
     funFact:"ただし (但し) is the formal exception-maker. In legal documents and contracts, ただしがき (proviso clause) introduces conditions. Signs often use it: にゅうじょうむりょう、ただしよやくがひつよう (entry free, provided reservation required). It is more restrictive than しかし (however)."},

    {type:"teach", trg:"さらに", src:"furthermore / additionally / even more", pos:"adv", gender:null,
     note:"Kanji: 更に. Adds emphasis or additional information.\nさらにいうと = furthermore.",
     example:"A: きょうはさむいです。さらに、あめもふっています。\nB: さいあくのてんきですね。",
     exampleSrc:"A: It is cold today. Furthermore, it is also raining.\nB: The worst weather.",
     funFact:"さらに (更に) escalates information: each addition is more significant. In news: ひがいはさらにかくだいしている (damage is expanding even further). In advertising: さらにおとく (even more of a bargain). The kanji 更 means 'renew/change,' capturing the idea of going beyond the current state."},

    {type:"teach", trg:"たしかに", src:"certainly / indeed / it is true that", pos:"adv", gender:null,
     note:"Kanji: 確かに. Used to acknowledge a point before adding your own.\nたしかにそうですが... = That is true, but...",
     example:"A: にほんごはむずかしいですか？\nB: たしかにむずかしいですが、おもしろいです。",
     exampleSrc:"A: Is Japanese difficult?\nB: It is certainly difficult, but interesting.",
     funFact:"たしかに is a powerful conversation tool. It acknowledges the other person's point (building rapport) before adding your perspective. The pattern たしかに...でも/しかし (certainly...but) is diplomatic disagreement. In debates, starting with たしかに shows intellectual honesty."},

    {type:"mc", q:"ただし is used to:", opts:["Introduce a condition or exception","Give an example","Summarize a point","Express agreement"], ans:"Introduce a condition or exception",
     hint:"This formal connector restricts or qualifies the previous statement."},

    {type:"teach", trg:"まとめる", src:"to summarize / to compile / to organize", pos:"verb", gender:null,
     note:"Group 2 verb. いけんをまとめる = to compile opinions.\nKanji: 纏める.",
     example:"A: きょうのかいぎのないようをまとめてください。\nB: はい、ぎじろくをつくります。",
     exampleSrc:"A: Please summarize today's meeting content.\nB: Yes, I will create the minutes.",
     funFact:"まとめる is essential in Japanese work culture. まとめやく (the person who summarizes/coordinates) is a valued role. Bloggers create まとめサイト (summary sites) compiling information. The phrase はなしをまとめると (to summarize the discussion) signals a conclusion is coming."},

    {type:"teach", trg:"のべる", src:"to state / to express / to mention", pos:"verb", gender:null,
     note:"Group 2 verb. Formal. いけんをのべる = to state an opinion.\nKanji: 述べる.",
     example:"A: さいごにひとことのべさせてください。\nB: どうぞ。",
     exampleSrc:"A: Please let me state one final word.\nB: Please go ahead.",
     funFact:"のべる (述べる) is the formal way to 'say' in written and academic Japanese. In essays, the pattern いかにのべる (as stated below) and じょうにのべたとおり (as mentioned above) structure arguments. The kanji 述 contains 述 which suggests 'following a path' of logical expression."},

    {type:"teach", trg:"もとづく", src:"to be based on", pos:"verb", gender:null,
     note:"Group 1 verb. じじつにもとづく = based on facts.\nKanji: 基づく.",
     example:"A: このほうこくはデータにもとづいています。\nB: しんらいできるないようですね。",
     exampleSrc:"A: This report is based on data.\nB: It is trustworthy content.",
     funFact:"もとづく (基づく) is indispensable in academic writing. じじつにもとづいて (based on facts), ほうりつにもとづいて (based on law), けいけんにもとづいて (based on experience). The kanji 基 (foundation) appears in きほん (basics) and きそ (foundation). Arguments must もとづく something to have credibility."},

    {type:"teach", trg:"あきらか", src:"clear / obvious / evident", pos:"adj", gender:null,
     note:"Na-adjective. あきらかに = clearly/obviously.\nKanji: 明らか.",
     example:"A: このデータからあきらかなことがひとつあります。\nB: なんでしょうか？",
     exampleSrc:"A: There is one thing that is clear from this data.\nB: What is it?",
     funFact:"あきらか (明らか) uses the kanji 明 (bright/clear), also found in あかるい (bright) and せつめい (explanation). In research papers, あきらかにする (to make clear/to reveal) is the goal: 'This study あきらかにした that...' Academic Japanese relies heavily on this word."},

    {type:"teach", trg:"しめす", src:"to show / to indicate / to demonstrate", pos:"verb", gender:null,
     note:"Group 1 verb. データがしめすように = as the data shows.\nKanji: 示す.",
     example:"A: グラフがじんこうげんしょうをしめしています。\nB: しんこくなもんだいですね。",
     exampleSrc:"A: The graph shows population decline.\nB: It is a serious problem.",
     funFact:"しめす (示す) is the academic verb for 'showing' evidence. In presentations: このグラフがしめすように (as this graph shows). The kanji 示 originally depicted an altar showing offerings to gods. Today it 'shows' data and evidence. しめす is more formal than みせる (to show physically)."},

    {type:"fb", s:"にほんのでんとうてきなたべもの、{1}すしやてんぷらがゆうめいです。\n(Traditional Japanese food, for example sushi and tempura are famous.)", a:"たとえば", opts:["たとえば","つまり","ただし","さらに"], sSrc:"Traditional Japanese food, for example sushi and tempura are famous.",
     hint:"This connector introduces specific examples of a general category."},

    {type:"teach", trg:"ふくざつ", src:"complex / complicated", pos:"adj", gender:null,
     note:"Na-adjective. ふくざつなもんだい = a complex problem.\nKanji: 複雑.",
     example:"A: にほんごのけいごはふくざつですね。\nB: そうですね。でもすこしずつなれます。",
     exampleSrc:"A: Japanese keigo is complex, isn't it?\nB: Yes. But you get used to it little by little.",
     funFact:"ふくざつ (複雑) combines 複 (multiple/duplicate) and 雑 (miscellaneous). It describes systems with many interacting parts. ふくざつなきもち (complicated feelings), ふくざつなかんけい (complicated relationship), ふくざつなしくみ (complex mechanism). The word itself is ふくざつ to write."},

    {type:"mc", q:"つまり is used to:", opts:["Rephrase or summarize the main point","Add an exception","Give an example","Express surprise"], ans:"Rephrase or summarize the main point",
     hint:"This word signals that a simpler explanation or conclusion follows."},

    {type:"match", pairs:[
      {trg:"たとえば", src:"for example"},
      {trg:"つまり", src:"in other words"},
      {trg:"ただし", src:"however / provided that"},
      {trg:"さらに", src:"furthermore"},
      {trg:"たしかに", src:"certainly / indeed"}
    ]},

    {type:"fb", s:"このほうこくはデータに{1}います。\n(This report is based on data.)", a:"もとづいて", opts:["もとづいて","しめして","のべて","まとめて"], sSrc:"This report is based on data.",
     hint:"The て-form of the verb meaning 'to be based on' or 'to be founded upon.'"},

    {type:"mc", q:"あきらか means:", opts:["Clear or obvious","Complex or complicated","Important or precious","Difficult or hard"], ans:"Clear or obvious",
     hint:"This adjective describes something that is plainly evident."}
  ]
};
export default BATCH6_L1;
