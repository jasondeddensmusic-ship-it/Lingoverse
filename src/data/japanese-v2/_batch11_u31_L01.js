// Batch 11 – Unit 31 (B2.3 Law): Legal & Rights Vocabulary
const BATCH11_L1 = {
  id:"jav2_u31l_b11_1", title:"ほうとけんり", icon:"📜", xp:15, board:true,
  steps:[
    {type:"intro", title:"ほうとけんり",
     desc:"Learn legal and rights vocabulary essential for understanding Japanese law, contracts, and civic life. These terms appear in news, documents, and JLPT N2.",
     goals:["Use basic legal vocabulary in context","Discuss rights and obligations","Understand legal concepts in Japanese society"]},

    {type:"teach", trg:"けんり", src:"right (legal/human)", pos:"noun", gender:null,
     note:"きほんてきじんけん = basic human rights.\nけんりをまもる = protect rights.",
     example:"A: すべてのひとにはびょうどうなけんりがあります。\nB: けんぽうでほしょうされていますね。",
     exampleSrc:"A: All people have equal rights.\nB: They are guaranteed by the constitution.",
     funFact:"けんり (権利) combines 権 (authority) and 利 (benefit). Japan's postwar constitution guarantees extensive けんり including じんけん (human rights), ひょうげんのじゆう (freedom of expression), and きょういくをうけるけんり (right to education). Article 9 (戦争放棄) renouncing war is the most debated provision."},

    {type:"teach", trg:"ぎむ", src:"obligation / duty", pos:"noun", gender:null,
     note:"Opposite of けんり. こくみんのぎむ = citizen's duties.\nのうぜいのぎむ = obligation to pay taxes.",
     example:"A: にほんこくみんにはさんだいぎむがあります。\nB: きょういく、きんろう、のうぜいですね。",
     exampleSrc:"A: Japanese citizens have three major obligations.\nB: Education, work, and paying taxes.",
     funFact:"Japan's constitution specifies three ぎむ (obligations): きょういくのぎむ (compulsory education), きんろうのぎむ (duty to work), and のうぜいのぎむ (duty to pay taxes). The balance between けんり and ぎむ is a fundamental civic concept taught from elementary school."},

    {type:"teach", trg:"けいやく", src:"contract / agreement", pos:"noun", gender:null,
     note:"けいやくする = to sign a contract.\nけいやくしょ = contract document.",
     example:"A: けいやくしょをよくよんでからサインしてください。\nB: わかりました。ないようをかくにんします。",
     exampleSrc:"A: Please read the contract carefully before signing.\nB: Understood. I will confirm the contents.",
     funFact:"Japanese business traditionally relied on しんらいかんけい (trust relationships) over formal けいやく. Handshake deals were common. However, globalization has increased the importance of written けいやくしょ. Japanese contracts tend to be shorter than American ones, relying more on good faith (誠意) between parties."},

    {type:"teach", trg:"しょうこ", src:"evidence / proof", pos:"noun", gender:null,
     note:"しょうこをだす = present evidence.\nしょうこぶつ = physical evidence.",
     example:"A: しょうこがなければゆうざいにはなりません。\nB: すいていゆうざいのげんそくですね。",
     exampleSrc:"A: Without evidence, one cannot be found guilty.\nB: The presumption of innocence principle.",
     funFact:"Japan's legal system requires しょうこ for conviction, but the conviction rate exceeds 99%, raising international concern. しょうこ includes ぶっしょう (physical evidence), しょうにんしょうげん (witness testimony), and じはく (confession). The high conviction rate means prosecutors only bring cases they are very confident of winning."},

    {type:"teach", trg:"さいばん", src:"trial / court case", pos:"noun", gender:null,
     note:"さいばんしょ = courthouse.\nさいばんかん = judge.",
     example:"A: さいばんいんせいどをしっていますか？\nB: はい、いっぱんしみんがさいばんにさんかするせいどですね。",
     exampleSrc:"A: Do you know the lay judge system?\nB: Yes, it is a system where ordinary citizens participate in trials.",
     funFact:"Japan introduced さいばんいんせいど (lay judge system) in 2009, allowing citizens to participate in serious criminal trials. Before this, only professional judges decided cases. The system was modeled partly on American jury trials but differs significantly: lay judges deliberate alongside professional judges rather than separately."},

    {type:"teach", trg:"いはん", src:"violation / infringement", pos:"noun", gender:null,
     note:"ほういはん = law violation.\nいはんする = to violate.",
     example:"A: こうつういはんでばっきんをはらいました。\nB: なにをしたのですか？",
     exampleSrc:"A: I paid a fine for a traffic violation.\nB: What did you do?",
     funFact:"Japan has strict こうつういはん (traffic violation) enforcement. Common violations include speed (スピードいはん), running red lights (しんごうむし), and cycling while using a phone (ながらスマホ). Fines are paid at convenience stores or post offices. Accumulating violations leads to license suspension."},

    {type:"teach", trg:"ばっきん", src:"fine (monetary penalty)", pos:"noun", gender:null,
     note:"ばっきんをはらう = pay a fine.\nばっきんけい = punishable by fine.",
     example:"A: ちゅうしゃいはんのばっきんはいくらですか？\nB: ばしょによりますが、いちまんごせんえんくらいです。",
     exampleSrc:"A: How much is the fine for a parking violation?\nB: It depends on the location, but about 15,000 yen.",
     funFact:"Japanese ばっきん range from small traffic fines to massive corporate penalties. Japan's anti-monopoly laws (独占禁止法) can impose billions of yen in ばっきん on price-fixing companies. Environmental violations also carry significant ばっきん. The system emphasizes deterrence through proportional financial penalties."},

    {type:"teach", trg:"せいとう", src:"legitimate / justified / fair", pos:"adj", gender:null,
     note:"せいとうなりゆう = legitimate reason.\nせいとうぼうえい = self-defense (legal).",
     example:"A: これはせいとうなけんりのこうしです。\nB: たしかに、ほうりつてきにもんだいはありません。",
     exampleSrc:"A: This is a legitimate exercise of rights.\nB: Indeed, there is no legal problem.",
     funFact:"せいとう (正当) combines 正 (correct) and 当 (appropriate). せいとうぼうえい (justifiable self-defense) is a key legal concept. In Japanese law, the use of force must be せいとう and proportional. The concept extends beyond law: せいとうなひょうか (fair evaluation) is expected in workplaces and schools."},

    {type:"teach", trg:"そんがいばいしょう", src:"compensation for damages", pos:"noun", gender:null,
     note:"そんがいばいしょうをせいきゅうする = claim damages.\nLegal remedy for harm.",
     example:"A: じこのひがいしゃはそんがいばいしょうをせいきゅうしました。\nB: さいばんでみとめられましたか？",
     exampleSrc:"A: The accident victim claimed compensation for damages.\nB: Was it recognized in court?",
     funFact:"そんがいばいしょう (損害賠償) is a fundamental legal concept in Japanese civil law. Japan's damage awards are generally lower than American ones, but include いしゃりょう (consolation money for emotional suffering). Product liability cases (せいぞうぶつせきにん) and medical malpractice are common そんがいばいしょう contexts."},

    {type:"teach", trg:"じょうれい", src:"ordinance / local regulation", pos:"noun", gender:null,
     note:"しじょうれい = city ordinance.\nじょうれいでさだめる = establish by ordinance.",
     example:"A: このちいきにはどくじのじょうれいがあります。\nB: どんなじょうれいですか？",
     exampleSrc:"A: This region has its own ordinances.\nB: What kind of ordinances?",
     funFact:"Japanese じょうれい (条例) are local laws enacted by municipalities. Famous ones include Kyoto's けいかんじょうれい (landscape ordinance) limiting building heights to protect traditional views. Some cities have ポイすてきんしじょうれい (anti-littering ordinances) with fines. Local じょうれい reflect each community's unique values and concerns."},

    {type:"teach", trg:"けんぽう", src:"constitution", pos:"noun", gender:null,
     note:"にほんこくけんぽう = Constitution of Japan.\nけんぽうかいせい = constitutional amendment.",
     example:"A: にほんこくけんぽうはいつせいていされましたか？\nB: せんきゅうひゃくよんじゅうろくねんです。",
     exampleSrc:"A: When was the Japanese constitution established?\nB: In 1946.",
     funFact:"Japan's けんぽう (憲法), enacted in 1947, has never been amended, making it one of the oldest unchanged constitutions. だいきゅうじょう (Article 9) renouncing war is both celebrated and debated. けんぽうかいせい (amendment) requires two-thirds of both parliamentary houses and a national referendum, making change extremely difficult."},

    // Quiz steps
    {type:"mc", q:"にほんこくみんのさんだいぎむはなんですか？",
     opts:["Education, work, and paying taxes","Voting, military service, and education","Work, voting, and recycling","Education, healthcare, and taxes"],
     ans:"Education, work, and paying taxes",
     hint:"Japan's constitution specifies three obligations for citizens. Two are economic and one is educational."},

    {type:"fb", s:"すべてのひとにはびょうどうな{1}があります。",
     a:["けんり"],
     opts:["けんり","ぎむ","ばっきん","けいやく"],
     hint:"All people possess equal legal protections. This word means 'rights.'",
     sSrc:"All people have equal rights."},

    {type:"match", pairs:[
      {trg:"けんり", src:"right"},
      {trg:"ぎむ", src:"obligation"},
      {trg:"しょうこ", src:"evidence"},
      {trg:"さいばん", src:"trial"}
    ]},

    {type:"mc", q:"にほんのゆうざいりつはどのくらいですか？",
     opts:["Over 99%","About 50%","About 75%","About 90%"],
     ans:"Over 99%",
     hint:"Japan's conviction rate is remarkably high, which means prosecutors are very selective about which cases to bring to court."},

    {type:"fb", s:"こうつう{1}でばっきんをはらいました。",
     a:["いはん"],
     opts:["いはん","けいやく","さいばん","じょうれい"],
     hint:"You committed a traffic infraction and had to pay a fine. This word means 'violation.'",
     sSrc:"I paid a fine for a traffic violation."},

    {type:"mc", q:"にほんこくけんぽうのだいきゅうじょうはなにをきていしていますか？",
     opts:["Renunciation of war","Freedom of speech","Right to education","Right to work"],
     ans:"Renunciation of war",
     hint:"This is the most famous and most debated article of the Japanese constitution, establishing a unique military policy."}
  ]
};
export default BATCH11_L1;
