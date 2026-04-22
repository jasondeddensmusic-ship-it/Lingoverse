// Batch 6 – Unit 31 (B2.3 Law): Crime & Criminal Justice
const BATCH6_L1 = {
  id:"jav2_u31l_b6_1", title:"犯罪(はんざい)と刑事(けいじ)司法(しほう)", icon:"🔍", xp:15, board:true,
  steps:[
    {type:"intro", title:"犯罪(はんざい)と刑事(けいじ)司法(しほう)",
     desc:"Learn advanced vocabulary for crime, criminal justice, and legal proceedings. These JLPT N1-level words appear frequently in news, drama, and legal contexts.",
     goals:["Discuss crime types and criminal justice","Understand courtroom and legal vocabulary","Analyze news about legal cases"]},

    {type:"teach", trg:"犯罪(はんざい)", src:"crime", pos:"noun", gender:null,
     note:"犯罪率(はんざいりつ) = crime rate.\nサイバー犯罪(はんざい) = cybercrime.",
     example:"A: 日本(にほん)の犯罪率(はんざいりつ)は世界的(せかいてき)に低(ひく)いです。\nB: 安全(あんぜん)な社会(しゃかい)ですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Japan's crime rate is low globally.\nB: It is a safe society.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"Japan has one of the world's lowest 犯罪(はんざい) (crime) rates. Factors include strict gun control, cultural emphasis on conformity, and effective policing. However, オレオレさぎ (phone scams targeting elderly) and サイバー犯罪(はんざい) (cybercrime) are growing concerns. The country's safety remains a major draw for tourists and residents."},

    {type:"teach", trg:"犯人(はんにん)", src:"criminal / perpetrator", pos:"noun", gender:null,
     note:"犯人(はんにん)を逮捕(たいほ)する = to arrest the criminal.\nまだ犯人(はんにん)がつかまっていない = the perpetrator has not been caught.",
     example:"A: 犯人(はんにん)はまだつかまっていません。\nB: 警察(けいさつ)が捜査中(そうさちゅう)です。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: The criminal has not been caught yet.\nB: The police are investigating.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"In Japanese media, 犯人(はんにん) is used before conviction. After conviction, the person becomes 有罪者(ゆうざいしゃ) (convicted person). The presumption of innocence (推定無罪(すいていむざい)) is a legal principle, but media coverage can be intense. Japanese mystery novels (推理小説(すいりしょうせつ)) are a beloved genre, and 犯人当(はんにんあ)て (guessing the criminal) is a national pastime."},

    {type:"teach", trg:"裁判(さいばん)", src:"trial / court case", pos:"noun", gender:null,
     note:"裁判所(さいばんしょ) = court. 裁判官(さいばんかん) = judge.\n裁判員制度(さいばんいんせいど) = lay judge system.",
     example:"A: 裁判(さいばん)は来週(らいしゅう)から始(はじ)まります。\nB: 有罪(ゆうざい)か無罪(むざい)か、注目(ちゅうもく)されていますね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: The trial starts next week.\nB: Whether guilty or not guilty, it is attracting attention.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"Japan introduced 裁判員制度(さいばんいんせいど) (lay judge system) in 2009, where ordinary citizens serve alongside professional judges in serious criminal cases. Japan's conviction rate exceeds 99%, prompting debate about prosecutorial power. The three-tier court system includes 地方裁判所(ちほうさいばんしょ) (district), 高等裁判所(こうとうさいばんしょ) (high), and 最高裁判所(さいこうさいばんしょ) (supreme)."},

    {type:"teach", trg:"証拠(しょうこ)", src:"evidence / proof", pos:"noun", gender:null,
     note:"証拠(しょうこ)を集(あつ)める = to gather evidence.\n証拠物件(しょうこぶっけん) = physical evidence.",
     example:"A: 十分(じゅうぶん)な証拠(しょうこ)がなければ起訴(きそ)できません。\nB: 捜査(そうさ)を続(つづ)けて証拠(しょうこ)を集(あつ)めましょう。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Without sufficient evidence, we cannot prosecute.\nB: Let us continue the investigation and gather evidence.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"証拠(しょうこ) is the cornerstone of legal proceedings. The burden of proof (立証責任(りっしょうせきにん)) rests on the prosecution. 証拠隠滅(しょうこいんめつ) (evidence destruction) is itself a crime. Japanese detective dramas (刑事(けいじ)ドラマ) revolve around 証拠(しょうこ) collection. Popular series like 'Soutou' and 'Hero' showcase this process."},

    {type:"teach", trg:"無罪(むざい)", src:"not guilty / innocent", pos:"noun", gender:null,
     note:"無罪放免(むざいほうめん) = acquittal.\nOpposite: 有罪(ゆうざい) (guilty).",
     example:"A: 被告人(ひこくにん)は無罪(むざい)を主張(しゅちょう)しています。\nB: 裁判(さいばん)結果(けっか)を待(ま)ちましょう。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: The defendant claims innocence.\nB: Let us wait for the trial result.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"無罪(むざい) uses 無 (without) and 罪 (sin/crime). With Japan's 99%+ conviction rate, 無罪判決(むざいはんけつ) (not-guilty verdict) is extremely rare and makes headlines. 冤罪(えんざい) (wrongful conviction) cases, though few, have led to decades of imprisonment. Several high-profile 冤罪(えんざい) cases have been overturned after DNA evidence review."},

    {type:"mc", q:"証拠(しょうこ) means:", opts:["Evidence or proof","A criminal","A judge","A court"], ans:"Evidence or proof",
     hint:"This is what investigators gather and prosecutors present to support their case."},

    {type:"teach", trg:"起訴(きそ)", src:"prosecution / indictment", pos:"noun", gender:null,
     note:"起訴(きそ)する = to prosecute/indict.\n不起訴(ふきそ) = non-prosecution (no charges filed).",
     example:"A: 検察(けんさつ)は容疑者(ようぎしゃ)を起訴(きそ)しました。\nB: どんな容疑(ようぎ)ですか？\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: The prosecution indicted the suspect.\nB: What are the charges?\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"起訴(きそ) literally means 'to raise a suit.' Japanese prosecutors (検察官(けんさつかん)) have enormous power. They decide whether to 起訴(きそ), and once they do, conviction is almost certain. 不起訴(ふきそ) (non-prosecution) happens when evidence is insufficient or the suspect shows remorse. This prosecutorial discretion is a unique feature of Japanese law."},

    {type:"teach", trg:"罰金(ばっきん)", src:"fine / penalty payment", pos:"noun", gender:null,
     note:"罰金(ばっきん)を払(はら)う = to pay a fine.\nスピード違反(いはん)の罰金(ばっきん) = speeding fine.",
     example:"A: 信号(しんごう)無視(むし)で罰金(ばっきん)を取(と)られました。\nB: いくらでしたか？\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: I was fined for running a red light.\nB: How much was it?\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"罰金(ばっきん) combines 罰 (punishment) and 金 (money). Traffic fines (交通違反(こうつういはん)) are common: speeding, illegal parking, and phone use while driving. Japanese fines are generally lower than Western countries but carry social stigma. More serious offenses lead to 懲役(ちょうえき) (imprisonment) instead of just fines."},

    {type:"teach", trg:"捜査(そうさ)", src:"investigation / search", pos:"noun", gender:null,
     note:"捜査(そうさ)する = to investigate.\n捜査本部(そうさほんぶ) = investigation headquarters.",
     example:"A: 警察(けいさつ)が捜査(そうさ)を進(すす)めています。\nB: 早(はや)く犯人(はんにん)がつかまるといいですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: The police are advancing the investigation.\nB: I hope the criminal is caught soon.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"捜査(そうさ) is distinct from 調査(ちょうさ) (research/survey). 捜査(そうさ) is specifically criminal investigation. Japanese police 捜査(そうさ) methods include extensive door-to-door interviews, CCTV footage analysis, and detailed crime scene processing. The 捜査一課(そうさいっか) (investigation division 1) handles homicides and is the setting of many detective dramas."},

    {type:"teach", trg:"容疑者(ようぎしゃ)", src:"suspect", pos:"noun", gender:null,
     note:"容疑者(ようぎしゃ)を逮捕(たいほ) = arrest the suspect.\nBefore conviction, media uses 容疑者(ようぎしゃ).",
     example:"A: 容疑者(ようぎしゃ)が逮捕(たいほ)されました。\nB: 目撃者(もくげきしゃ)の証言(しょうげん)が決定的(けっていてき)だったそうです。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: The suspect has been arrested.\nB: Apparently the witness testimony was decisive.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"Japanese media strictly uses 容疑者(ようぎしゃ) (suspect) before conviction and 被告人(ひこくにん) (defendant) during trial. Adding 容疑者(ようぎしゃ) after someone's name is standard media practice. This differs from some countries where media uses terms less carefully. The shift from 容疑者(ようぎしゃ) to 有罪者(ゆうざいしゃ) (convicted) only happens after the verdict."},

    {type:"fb", s:"警察(けいさつ)が{1}を進(すす)めています。\n(The police are advancing the investigation.)", a:"そうさ", opts:["そうさ","さいばん","きそ","ばっきん"], sSrc:"The police are advancing the investigation.",
     hint:"The word specifically for criminal investigation by law enforcement."},

    {type:"teach", trg:"法律(ほうりつ)", src:"law / legislation", pos:"noun", gender:null,
     note:"法律(ほうりつ)を守(まも)る = to obey the law.\n法律家(ほうりつか) = lawyer.",
     example:"A: 新(あたら)しい法律(ほうりつ)が施行(しこう)されました。\nB: どんな内容(ないよう)ですか？\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: A new law has been enacted.\nB: What is its content?\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"法律(ほうりつ) combines 法 (law/method) and 律 (rule/regulation). Japan's legal system blends continental European (especially German) civil law with Anglo-American influences. The 憲法(けんぽう) (constitution), enacted in 1947, is the supreme law. Japan has never amended its 憲法(けんぽう), making it unique among major democracies."},

    {type:"mc", q:"容疑者(ようぎしゃ) is used for:", opts:["A lawyer","A person suspected of a crime before conviction","A convicted criminal","A judge"], ans:"A person suspected of a crime before conviction",
     hint:"Japanese media carefully distinguishes suspects from convicted persons."},

    {type:"match", pairs:[
      {trg:"犯罪(はんざい)", src:"crime"},
      {trg:"裁判(さいばん)", src:"trial"},
      {trg:"証拠(しょうこ)", src:"evidence"},
      {trg:"無罪(むざい)", src:"not guilty"},
      {trg:"法律(ほうりつ)", src:"law"}
    ]},

    {type:"fb", s:"被告人(ひこくにん)は{1}を主張(しゅちょう)しています。\n(The defendant claims innocence.)", a:"むざい", opts:["むざい","ゆうざい","ばっきん","きそ"], sSrc:"The defendant claims innocence.",
     hint:"The legal term meaning not guilty or innocent."},

    {type:"mc", q:"Japan's criminal conviction rate is:", opts:["About 50%","About 30%","Over 99%","About 75%"], ans:"Over 99%",
     hint:"Once Japanese prosecutors decide to indict, conviction is almost certain."}
  ,{type:"match",pairs:[{trg:"犯人(はんにん)",src:"criminal / perpetrator"},{trg:"起訴(きそ)",src:"prosecution / indictment"},{trg:"罰金(ばっきん)",src:"fine / penalty payment"},{trg:"容疑者(ようぎしゃ)",src:"suspect"}]},
  {type:"fb", s:"犯人(はんにん)を特定(とくてい)する{1}が見(み)つかりました。", a:["証拠(しょうこ)"], opts:["証拠(しょうこ)","犯罪(はんざい)","裁判(さいばん)","無罪(むざい)"], hint:"The physical or factual material that proves or disproves a claim in a legal case.", sSrc:"{1} was found that identifies the perpetrator."}
]
};
export default BATCH6_L1;
