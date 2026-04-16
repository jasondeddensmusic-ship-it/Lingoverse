// Batch 6 – Unit 25 (B2.1 Business): Negotiations & Contracts
const BATCH6_L1 = {
  id:"jav2_u25l_b6_1", title:"こうしょうとけいやく", icon:"📑", xp:15, board:true,
  steps:[
    {type:"intro", title:"こうしょうとけいやく",
     desc:"Master advanced business vocabulary for negotiations and contracts. These JLPT N2 words are essential for anyone working in a Japanese business environment.",
     goals:["Use negotiation vocabulary: こうしょう, ていあん, じょうけん","Understand contract terminology","Navigate formal business discussions"]},

    {type:"teach", trg:"こうしょう", src:"negotiation", pos:"noun", gender:null,
     note:"Kanji: 交渉. こうしょうする = to negotiate.\nかかくこうしょう = price negotiation.",
     example:"A: くらいあんととのこうしょうはどうでしたか？\nB: まだつづいています。らいしゅうもういちどはなしあいます。",
     exampleSrc:"A: How were the negotiations with the client?\nB: They are still ongoing. We will talk again next week.",
     funFact:"Japanese こうしょう style differs from Western negotiation. 根回し (nemawashi, consensus-building beforehand) means much of the negotiation happens before the formal meeting. Decisions appear unanimous because disagreements are resolved privately. This approach values 和 (wa, harmony) over confrontation."},

    {type:"teach", trg:"じょうけん", src:"condition / terms / requirements", pos:"noun", gender:null,
     note:"Kanji: 条件. じょうけんをだす = to set conditions.\nさいていじょうけん = minimum conditions.",
     example:"A: けいやくのじょうけんをかくにんしてください。\nB: はい、ほうむぶにかくにんしてもらいます。",
     exampleSrc:"A: Please confirm the contract terms.\nB: Yes, I will have the legal department check them.",
     funFact:"じょうけん (条件) combines 条 (article/clause) and 件 (matter). In Japanese contracts, じょうけんがあう (conditions match) leads to agreement. じょうけんつき (conditional) means with strings attached. Employment ads list きゅうよじょうけん (salary conditions) and きんむじょうけん (work conditions)."},

    {type:"teach", trg:"けいやく", src:"contract / agreement", pos:"noun", gender:null,
     note:"Kanji: 契約. けいやくをむすぶ = to sign/conclude a contract.\nけいやくしょ = contract document.",
     example:"A: けいやくしょにサインをおねがいします。\nB: ないようをもういちどかくにんさせてください。",
     exampleSrc:"A: Please sign the contract.\nB: Let me confirm the contents one more time.",
     funFact:"けいやく (契約) uses 契 (pledge) and 約 (promise). Japanese contracts traditionally required はんこ (seals) rather than signatures. Since 2021, electronic signatures (でんしけいやく) have become legally valid. けいやくきかん (contract period) and けいやくかいじょ (contract termination) are key business terms."},

    {type:"teach", trg:"はんだん", src:"judgment / decision / assessment", pos:"noun", gender:null,
     note:"Kanji: 判断. はんだんする = to judge/decide.\nはんだんりょく = judgment ability.",
     example:"A: さいしゅうてきなはんだんはしゃちょうがします。\nB: いつまでにけつろんがでますか？",
     exampleSrc:"A: The president will make the final judgment.\nB: By when will the conclusion be reached?",
     funFact:"はんだん (判断) combines 判 (judge) and 断 (cut/decide). In Japanese business hierarchy, はんだん flows upward: middle managers prepare information, executives make はんだん. りんぎしょ (approval document) circulates for はんこ from each level before the final はんだん."},

    {type:"teach", trg:"せきにん", src:"responsibility", pos:"noun", gender:null,
     note:"Kanji: 責任. せきにんをとる = to take responsibility.\nせきにんしゃ = person in charge.",
     example:"A: このもんだいのせきにんはだれにありますか？\nB: わたしがせきにんをもっています。",
     exampleSrc:"A: Who has responsibility for this problem?\nB: I am responsible.",
     funFact:"せきにん (責任) is deeply serious in Japanese culture. When companies fail, executives take せきにん by resigning (じにん). The phrase せきにんをとる (take responsibility) can mean anything from apologizing to stepping down. Personal せきにんかん (sense of responsibility) is instilled from childhood."},

    {type:"mc", q:"けいやくをむすぶ means:", opts:["To conclude/sign a contract","To break a contract","To read a contract","To write a contract"], ans:"To conclude/sign a contract",
     hint:"むすぶ means to tie/c.... Combined with けいやく, it means formalizing an agreement."},

    {type:"teach", trg:"しめきり", src:"deadline", pos:"noun", gender:null,
     note:"Kanji: 締め切り. From しめる (close) + きる (cut off).\nしめきりにまにあう = to meet the deadline.",
     example:"A: しめきりはいつですか？\nB: らいしゅうのきんようびです。",
     exampleSrc:"A: When is the deadline?\nB: Next Friday.",
     funFact:"しめきり (締め切り) literally means 'closed and cut off.' Missing a しめきり is considered very unprofessional in Japanese business. The phrase しめきりにおわれる (being chased by deadlines) describes the stress of time pressure. Manga artists are famous for ぎりぎりのしめきり (last-minute deadline rushes)."},

    {type:"teach", trg:"りえき", src:"profit / benefit", pos:"noun", gender:null,
     note:"Kanji: 利益. りえきをだす = to make a profit.\nそんえき = profit and loss.",
     example:"A: こんきのりえきはぞうかしましたか？\nB: はい、ぜんきひじゅっパーセントぞうかしました。",
     exampleSrc:"A: Did profit increase this quarter?\nB: Yes, it increased 10% compared to last quarter.",
     funFact:"りえき (利益) combines 利 (advantage) and 益 (benefit). In Japanese corporate culture, こうえき (公益, public benefit) is valued alongside private profit. Many Japanese companies emphasize しゃかいこうけん (社会貢献, social contribution) in their mission statements, balancing りえき with social responsibility."},

    {type:"teach", trg:"こうりつ", src:"efficiency", pos:"noun", gender:null,
     note:"Kanji: 効率. こうりつてき = efficient.\nこうりつをあげる = to increase efficiency.",
     example:"A: どうすればしごとのこうりつをあげられますか？\nB: まずむだなかいぎをへらしましょう。",
     exampleSrc:"A: How can we increase work efficiency?\nB: First, let us reduce unnecessary meetings.",
     funFact:"こうりつ (効率) combines 効 (effect) and 率 (rate). Japanese manufacturing pioneered efficiency with カイゼン (kaizen, continuous improvement) and ジャストインタイム (just-in-time). The Toyota Production System revolutionized global manufacturing through こうりつ thinking. However, overworking for こうりつ has social costs."},

    {type:"teach", trg:"めいかく", src:"clear / precise / definite", pos:"adj", gender:null,
     note:"Na-adjective. めいかくにする = to clarify.\nKanji: 明確.",
     example:"A: もくひょうをめいかくにしてください。\nB: はい、うりあげをじゅっパーセントふやすことです。",
     exampleSrc:"A: Please clarify the goals.\nB: Yes, it is to increase sales by 10%.",
     funFact:"めいかく (明確) combines two 'clear' kanji: 明 (bright) and 確 (certain). In business, めいかくなしじ (clear instructions) and めいかくなもくひょう (clear goals) are expected from leaders. Ambiguity (あいまい) is acceptable in social situations but problematic in business planning."},

    {type:"fb", s:"けいやくの{1}をかくにんしてください。\n(Please confirm the contract terms.)", a:"じょうけん", opts:["じょうけん","けいやく","こうしょう","しめきり"], sSrc:"Please confirm the contract terms.",
     hint:"The word for conditions, terms, or requirements of an agreement."},

    {type:"teach", trg:"さいよう", src:"hiring / adoption (of a plan)", pos:"noun", gender:null,
     note:"Kanji: 採用. さいようする = to hire/adopt.\nさいようしけん = employment exam.",
     example:"A: しんじんのさいようはいつからですか？\nB: しがつからしんそつさいようがはじまります。",
     exampleSrc:"A: When does new hiring start?\nB: New graduate hiring starts from April.",
     funFact:"さいよう (採用) has two meanings: hiring people and adopting plans/ideas. Japan's unique しんそついっかつさいよう (mass hiring of new graduates) system means companies recruit fresh graduates simultaneously every April. This system is uniquely Japanese and shapes the entire education and career planning process."},

    {type:"teach", trg:"こうけん", src:"contribution", pos:"noun", gender:null,
     note:"Kanji: 貢献. しゃかいにこうけんする = to contribute to society.\nこうけんど = degree of contribution.",
     example:"A: このプロジェクトのせいこうにおおきくこうけんしました。\nB: ありがとうございます。チームぜんたいのどりょくです。",
     exampleSrc:"A: You contributed greatly to this project's success.\nB: Thank you. It was the entire team's effort.",
     funFact:"こうけん (貢献) combines 貢 (tribute) and 献 (offering). In Japanese corporate evaluations, こうけんど (contribution level) determines bonuses and promotions. しゃかいこうけん (social contribution) through volunteering, charity, and environmental programs is increasingly important for corporate reputation."},

    {type:"mc", q:"しめきり means:", opts:["Deadline","Contract","Profit","Efficiency"], ans:"Deadline",
     hint:"This word literally means 'closing and cutting off,' referring to a time limit."},

    {type:"match", pairs:[
      {trg:"こうしょう", src:"negotiation"},
      {trg:"けいやく", src:"contract"},
      {trg:"せきにん", src:"responsibility"},
      {trg:"りえき", src:"profit"},
      {trg:"こうりつ", src:"efficiency"}
    ]},

    {type:"fb", s:"もくひょうを{1}にしてください。\n(Please clarify the goals.)", a:"めいかく", opts:["めいかく","ふくざつ","かんたん","あいまい"], sSrc:"Please clarify the goals.",
     hint:"The na-adjective meaning clear, precise, and definite."},

    {type:"mc", q:"さいよう covers:", opts:["Both hiring people and adopting plans","Only hiring people","Only adopting plans","Firing people"], ans:"Both hiring people and adopting plans",
     hint:"This versatile word is used for bringing in both new employees and new ideas."}
  ]
};
export default BATCH6_L1;
