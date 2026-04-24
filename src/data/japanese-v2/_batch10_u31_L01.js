// Batch 10 – Unit 31 (B2): 権利(けんり)
const BATCH10_L1 = {
  id:"jav2_u31l_b10_1", title:"権利(けんり)", icon:"🏛️", xp:15, board:true,
  steps:[
    {type:"intro", title:"権利(けんり)",
     desc:"Rights laws and civic vocabulary",
     goals:["Master key vocabulary for this topic","Use new words in context","Build reading comprehension"]},

    {type:"teach", trg:"人権(じんけん)", src:"human rights", pos:"noun", gender:null,
     note:"人(じん) human + 権(けん) right.\nFundamental human rights; core legal concept.",
     example:"A: 人権(じんけん)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Let us think about human rights.\nB: It is an important theme.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"人(じん) (human) + 権(けん) (right). Post-war Japan rebuilt legal system around 基本的人権(きほんてきじんけん) (fundamental human rights). The United Nations Human Rights Council periodically reviews Japan."},

    {type:"teach", trg:"市民権(しみんけん)", src:"civil rights", pos:"noun", gender:null,
     note:"市民(しみん) citizen + 権(けん) right.\nOften means 'social acceptance' beyond legal meaning.",
     example:"A: 市民権(しみんけん)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Let us think about civil rights.\nB: It is an important theme.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"市民(しみん) (citizen) + 権(けん) (right). In Japan, 市民権(しみんけん) often refers to social acceptance beyond legal citizenship. 市民権(しみんけん)を得(え)る means something has become mainstream."},

    {type:"teach", trg:"選挙権(せんきょけん)", src:"right to vote", pos:"noun", gender:null,
     note:"選挙(せんきょ) election + 権(けん) right.\nJapan voting age lowered to 18 in 2016.",
     example:"A: 選挙権(せんきょけん)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: Let us think about right to vote.\nB: It is an important theme.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"選挙(せんきょ) (election) + 権(けん) (right). Japan lowered the voting age from 20 to 18 in 2016, the first change since 1945. Turnout among 18-19 year-olds remains a civic education concern."},

    {type:"teach", trg:"言論(げんろん)の自由(じゆう)", src:"freedom of speech", pos:"noun", gender:null,
     note:"言論(げんろん) speech + 自由(じゆう) freedom.\nGuaranteed in Japan's Constitution (Article 21).",
     example:"A: 言論(げんろん)の自由(じゆう)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Let us think about freedom of speech.\nB: It is an important theme.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"Freedom of speech, guaranteed in Article 21 of Japan's 憲法(けんぽう). Japan's press freedom ranking has declined since 2010 due to journalist-source confidentiality concerns and pressure from the kisha-club system."},

    {type:"teach", trg:"プライバシー", src:"privacy", pos:"noun", gender:null,
     note:"English loanword.\nGoverned by Japan's Personal Information Protection Act.",
     example:"A: プライバシーについて考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: Let us think about privacy.\nB: It is an important theme.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"Imported English. Japan's 個人情報保護法(こじんじょうほうほごほう) (Personal Information Protection Act, 2003 + 2017) is the primary プライバシー framework, comparable to but narrower than GDPR."},

    {type:"teach", trg:"平等(びょうどう)", src:"equality", pos:"noun", gender:null,
     note:"平(へい) flat + 等(とう) equal.\nEquality under law (Article 14 of Constitution).",
     example:"A: 平等(びょうどう)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Let us think about equality.\nB: It is an important theme.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"平(へい) (flat) + 等(とう) (equal). Article 14 of Japan's 憲法(けんぽう) guarantees 法(ほう)の下(もと)の平等(びょうどう) (equality under law). 男女平等(だんじょびょうどう) (gender equality) is an active ongoing topic."},

    {type:"teach", trg:"差別(さべつ)", src:"discrimination", pos:"noun", gender:null,
     note:"差(さ) difference + 別(べつ) separation.\nUnfair treatment based on category.",
     example:"A: 差別(さべつ)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: Let us think about discrimination.\nB: It is an important theme.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"差(さ) (difference) + 別(べつ) (separation). Japanese anti-discrimination law has been strengthened in the 2020s to cover LGBTQ+ and 外国人(がいこくじん) (foreign residents), though some advocates argue more is needed."},

    {type:"teach", trg:"法律(ほうりつ)", src:"law", pos:"noun", gender:null,
     note:"法(ほう) law + 律(りつ) rule.\nA formal statute or legal code.",
     example:"A: 法律(ほうりつ)について考(かんが)えましょう。\nB: 大事(だいじ)なテーマですね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Let us think about law.\nB: It is an important theme.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"法(ほう) (law) + 律(りつ) (rule). Japan's legal system blends German civil law (Meiji era) with post-WWII American constitutional influence. 六法全書(ろっぽうぜんしょ) (Six Codes) collects core 法律(ほうりつ)."},

    {type:"mc", q:"What does 人権(じんけん) mean?", opts:["human rights","civil rights","right to vote","freedom of speech"], ans:"human rights",
     hint:"This is a key term in this unit's topic area."},

    {type:"fb", s:"{1}は重要(じゅうよう)です。\n(privacy is important.)", a:"プライバシー", opts:["プライバシー","平等(びょうどう)","差別(さべつ)","人権(じんけん)"], sSrc:"privacy is important.",
     hint:"Think about which word matches the English translation."},

    {type:"match", pairs:[{trg:"人権(じんけん)",src:"human rights"},{trg:"市民権(しみんけん)",src:"civil rights"},{trg:"選挙権(せんきょけん)",src:"right to vote"},{trg:"言論(げんろん)の自由(じゆう)",src:"freedom of speech"},{trg:"差別(さべつ)",src:"discrimination"}]},

    {type:"mc", q:"Which word means law?", opts:["平等(びょうどう)","法律(ほうりつ)","プライバシー","市民権(しみんけん)"], ans:"法律(ほうりつ)",
     hint:"This term is essential vocabulary for this topic."}
  ]
};
export default BATCH10_L1;
