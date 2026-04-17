// Batch 6 – Unit 31 (B2.3 Law): Crime & Criminal Justice
const BATCH6_L1 = {
  id:"jav2_u31l_b6_1", title:"はんざいとけいじしほう", icon:"🔍", xp:15, board:true,
  steps:[
    {type:"intro", title:"はんざいとけいじしほう",
     desc:"Learn advanced vocabulary for crime, criminal justice, and legal proceedings. These JLPT N1-level words appear frequently in news, drama, and legal contexts.",
     goals:["Discuss crime types and criminal justice","Understand courtroom and legal vocabulary","Analyze news about legal cases"]},

    {type:"teach", trg:"はんざい", src:"crime", pos:"noun", gender:null,
     note:"Kanji: 犯罪. はんざいりつ = crime rate.\nサイバーはんざい = cybercrime.",
     example:"A: にほんのはんざいりつはせかいてきにひくいです。\nB: あんぜんなしゃかいですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Japan's crime rate is low globally.\nB: It is a safe society.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"Japan has one of the world's lowest はんざい (crime) rates. Factors include strict gun control, cultural emphasis on conformity, and effective policing. However, オレオレさぎ (phone scams targeting elderly) and サイバーはんざい (cybercrime) are growing concerns. The country's safety remains a major draw for tourists and residents."},

    {type:"teach", trg:"はんにん", src:"criminal / perpetrator", pos:"noun", gender:null,
     note:"Kanji: 犯人. はんにんをたいほする = to arrest the criminal.\nまだはんにんがつかまっていない = the perpetrator has not been caught.",
     example:"A: はんにんはまだつかまっていません。\nB: けいさつがそうさちゅうです。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: The criminal has not been caught yet.\nB: The police are investigating.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"In Japanese media, はんにん is used before conviction. After conviction, the person becomes ゆうざいしゃ (convicted person). The presumption of innocence (すいていむざい) is a legal principle, but media coverage can be intense. Japanese mystery novels (すいりしょうせつ) are a beloved genre, and はんにんあて (guessing the criminal) is a national pastime."},

    {type:"teach", trg:"さいばん", src:"trial / court case", pos:"noun", gender:null,
     note:"Kanji: 裁判. さいばんしょ = court. さいばんかん = judge.\nさいばんいんせいど = lay judge system.",
     example:"A: さいばんはらいしゅうからはじまります。\nB: ゆうざいかむざいか、ちゅうもくされていますね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: The trial starts next week.\nB: Whether guilty or not guilty, it is attracting attention.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"Japan introduced さいばんいんせいど (lay judge system) in 2009, where ordinary citizens serve alongside professional judges in serious criminal cases. Japan's conviction rate exceeds 99%, prompting debate about prosecutorial power. The three-tier court system includes ちほうさいばんしょ (district), こうとうさいばんしょ (high), and さいこうさいばんしょ (supreme)."},

    {type:"teach", trg:"しょうこ", src:"evidence / proof", pos:"noun", gender:null,
     note:"Kanji: 証拠. しょうこをあつめる = to gather evidence.\nしょうこぶっけん = physical evidence.",
     example:"A: じゅうぶんなしょうこがなければきそできません。\nB: そうさをつづけてしょうこをあつめましょう。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Without sufficient evidence, we cannot prosecute.\nB: Let us continue the investigation and gather evidence.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"しょうこ (証拠) is the cornerstone of legal proceedings. The burden of proof (りっしょうせきにん) rests on the prosecution. しょうこいんめつ (evidence destruction) is itself a crime. Japanese detective dramas (けいじドラマ) revolve around しょうこ collection. Popular series like 'Soutou' and 'Hero' showcase this process."},

    {type:"teach", trg:"むざい", src:"not guilty / innocent", pos:"noun", gender:null,
     note:"Kanji: 無罪. むざいほうめん = acquittal.\nOpposite: ゆうざい (guilty).",
     example:"A: ひこくにんはむざいをしゅちょうしています。\nB: さいばんけっかをまちましょう。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: The defendant claims innocence.\nB: Let us wait for the trial result.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"むざい (無罪) uses 無 (without) and 罪 (sin/crime). With Japan's 99%+ conviction rate, むざいはんけつ (not-guilty verdict) is extremely rare and makes headlines. えんざい (冤罪, wrongful conviction) cases, though few, have led to decades of imprisonment. Several high-profile えんざい cases have been overturned after DNA evidence review."},

    {type:"mc", q:"しょうこ means:", opts:["Evidence or proof","A criminal","A judge","A court"], ans:"Evidence or proof",
     hint:"This is what investigators gather and prosecutors present to support their case."},

    {type:"teach", trg:"きそ", src:"prosecution / indictment", pos:"noun", gender:null,
     note:"Kanji: 起訴. きそする = to prosecute/indict.\nふきそ = non-prosecution (no charges filed).",
     example:"A: けんさつはようぎしゃをきそしました。\nB: どんなようぎですか？\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: The prosecution indicted the suspect.\nB: What are the charges?\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"きそ (起訴) literally means 'to raise a suit.' Japanese prosecutors (けんさつかん) have enormous power. They decide whether to きそ, and once they do, conviction is almost certain. ふきそ (non-prosecution) happens when evidence is insufficient or the suspect shows remorse. This prosecutorial discretion is a unique feature of Japanese law."},

    {type:"teach", trg:"ばっきん", src:"fine / penalty payment", pos:"noun", gender:null,
     note:"Kanji: 罰金. ばっきんをはらう = to pay a fine.\nスピードいはんのばっきん = speeding fine.",
     example:"A: しんごうむしでばっきんをとられました。\nB: いくらでしたか？\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: I was fined for running a red light.\nB: How much was it?\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"ばっきん (罰金) combines 罰 (punishment) and 金 (money). Traffic fines (こうつういはん) are common: speeding, illegal parking, and phone use while driving. Japanese fines are generally lower than Western countries but carry social stigma. More serious offenses lead to ちょうえき (imprisonment) instead of just fines."},

    {type:"teach", trg:"そうさ", src:"investigation / search", pos:"noun", gender:null,
     note:"Kanji: 捜査. そうさする = to investigate.\nそうさほんぶ = investigation headquarters.",
     example:"A: けいさつがそうさをすすめています。\nB: はやくはんにんがつかまるといいですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: The police are advancing the investigation.\nB: I hope the criminal is caught soon.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"そうさ (捜査) is distinct from ちょうさ (調査, research/survey). そうさ is specifically criminal investigation. Japanese police そうさ methods include extensive door-to-door interviews, CCTV footage analysis, and detailed crime scene processing. The そうさいちか (investigation division 1) handles homicides and is the setting of many detective dramas."},

    {type:"teach", trg:"ようぎしゃ", src:"suspect", pos:"noun", gender:null,
     note:"Kanji: 容疑者. ようぎしゃをたいほ = arrest the suspect.\nBefore conviction, media uses ようぎしゃ.",
     example:"A: ようぎしゃがたいほされました。\nB: もくげきしゃのしょうげんがけっていてきだったそうです。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: The suspect has been arrested.\nB: Apparently the witness testimony was decisive.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"Japanese media strictly uses ようぎしゃ (suspect) before conviction and ひこくにん (defendant) during trial. Adding さん or even 容疑者 after someone's name is standard media practice. This differs from some countries where media uses terms less carefully. The shift from ようぎしゃ to ゆうざいしゃ (convicted) only happens after the verdict."},

    {type:"fb", s:"けいさつが{1}をすすめています。\n(The police are advancing the investigation.)", a:"そうさ", opts:["そうさ","さいばん","きそ","ばっきん"], sSrc:"The police are advancing the investigation.",
     hint:"The word specifically for criminal investigation by law enforcement."},

    {type:"teach", trg:"ほうりつ", src:"law / legislation", pos:"noun", gender:null,
     note:"Kanji: 法律. ほうりつをまもる = to obey the law.\nほうりつかん = lawyer.",
     example:"A: あたらしいほうりつがしこうされました。\nB: どんなないようですか？\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: A new law has been enacted.\nB: What is its content?\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"ほうりつ (法律) combines 法 (law/method) and 律 (rule/regulation). Japan's legal system blends continental European (especially German) civil law with Anglo-American influences. The けんぽう (constitution), enacted in 1947, is the supreme law. Japan has never amended its けんぽう, making it unique among major democracies."},

    {type:"mc", q:"ようぎしゃ is used for:", opts:["A person suspected of a crime before conviction","A convicted criminal","A judge","A lawyer"], ans:"A person suspected of a crime before conviction",
     hint:"Japanese media carefully distinguishes suspects from convicted persons."},

    {type:"match", pairs:[
      {trg:"はんざい", src:"crime"},
      {trg:"さいばん", src:"trial"},
      {trg:"しょうこ", src:"evidence"},
      {trg:"むざい", src:"not guilty"},
      {trg:"ほうりつ", src:"law"}
    ]},

    {type:"fb", s:"ひこくにんは{1}をしゅちょうしています。\n(The defendant claims innocence.)", a:"むざい", opts:["むざい","ゆうざい","ばっきん","きそ"], sSrc:"The defendant claims innocence.",
     hint:"The legal term meaning not guilty or innocent."},

    {type:"mc", q:"Japan's criminal conviction rate is:", opts:["Over 99%","About 75%","About 50%","About 30%"], ans:"Over 99%",
     hint:"Once Japanese prosecutors decide to indict, conviction is almost certain."}
  ]
};
export default BATCH6_L1;
