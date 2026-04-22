// Batch 6 – Unit 30 (B2.3 Philosophy): Ethics & Moral Reasoning
const BATCH6_L1 = {
  id:"jav2_u30l_b6_1", title:"倫理(りんり)と道徳(どうとく)", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"倫理(りんり)と道徳(どうとく)",
     desc:"Explore vocabulary for ethics, morality, and philosophical reasoning. These abstract concepts are essential for academic Japanese, JLPT N1 preparation, and meaningful discussions about society.",
     goals:["Use vocabulary for ethical and moral concepts","Discuss fairness, justice, and duty","Express philosophical arguments"]},

    {type:"teach", trg:"倫理(りんり)", src:"ethics", pos:"noun", gender:null,
     note:"倫理的(りんりてき) = ethical.\n生命倫理(せいめいりんり) = bioethics.",
     example:"A: この研究(けんきゅう)は倫理的(りんりてき)に問題(もんだい)があると思(おも)います。\nB: 倫理委員会(りんりいいんかい)に相談(そうだん)しましょう。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: I think this research has ethical problems.\nB: Let us consult the ethics committee.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"りんり (倫理) combines 倫 (relationships/order) and 理 (reason). In Japanese high schools, 倫理 is a social studies subject covering world philosophy from Socrates to Confucius. Corporate りんり (business ethics) gained attention after scandals at major companies. 倫理観(りんりかん) (sense of ethics) is a valued personal quality."},

    {type:"teach", trg:"道徳(どうとく)", src:"morality / morals", pos:"noun", gender:null,
     note:"道徳的(どうとくてき) = moral.\n道徳(どうとく)の授業(じゅぎょう) = moral education class.",
     example:"A: 道徳(どうとく)の授業(じゅぎょう)で何(なに)を学(まな)びましたか？\nB: 思(おも)いやりの大切(たいせつ)さについて考(かんが)えました。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: What did you learn in moral education class?\nB: We thought about the importance of empathy.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"どうとく (道徳) combines 道 (way/path) and 徳 (virtue). Japanese schools have formal 道徳(どうとく) classes where students discuss kindness, responsibility, and social harmony through stories and role-play. This became a graded subject in 2018, reflecting Japan's emphasis on character education alongside academics."},

    {type:"teach", trg:"正義(せいぎ)", src:"justice / righteousness", pos:"noun", gender:null,
     note:"正義感(せいぎかん) = sense of justice.\n正義(せいぎ)の味方(みかた) = ally of justice (hero).",
     example:"A: 正義(せいぎ)とは何(なん)でしょうか？\nB: 時代(じだい)や文化(ぶんか)によって変(か)わるものかもしれません。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: What is justice?\nB: It may change depending on the era and culture.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"正義(せいぎ) is a powerful concept in Japanese popular culture. Every superhero is 正義(せいぎ)の味方(みかた) (ally of justice). But philosophical Japanese works often question absolute 正義(せいぎ): anime like Death Note and Attack on Titan explore moral gray areas where both sides believe they represent 正義(せいぎ)."},

    {type:"teach", trg:"義務(ぎむ)", src:"duty / obligation", pos:"noun", gender:null,
     note:"義務教育(ぎむきょういく) = compulsory education.\n権利(けんり)と義務(ぎむ) = rights and duties.",
     example:"A: 成人(せいじん)には選挙権(せんきょけん)を行使(こうし)する義務(ぎむ)があると思(おも)いますか？\nB: 権利(けんり)であって義務(ぎむ)ではないと思(おも)います。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Do you think adults have a duty to exercise their right to vote?\nB: I think it is a right, not a duty.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"義務(ぎむ) combines 義 (righteousness) and 務 (task). Japanese distinguishes 義務(ぎむ) (obligation, must do) from 権利(けんり) (rights, may do). 義務教育(ぎむきょういく) (compulsory education) covers 9 years (elementary + middle school). 納税(のうぜい)の義務(ぎむ) (duty to pay taxes) and 勤労(きんろう)の義務(ぎむ) (duty to work) are constitutional obligations."},

    {type:"teach", trg:"公平(こうへい)", src:"fairness / impartiality", pos:"adj", gender:null,
     note:"Na-adjective. 公平(こうへい)な裁(さば)き = fair judgment.",
     example:"A: 裁判(さいばん)は公平(こうへい)であるべきです。\nB: もちろんです。すべての人(ひと)に平等(びょうどう)でなければなりません。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Trials should be fair.\nB: Of course. They must be equal for all people.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"公平(こうへい) combines 公 (public) and 平 (flat/equal). The related word 平等(びょうどう) (equality) also uses 平. Japanese courts emphasize 公平(こうへい) and 中立(ちゅうりつ) (neutrality). In daily life, 公平(こうへい)に分(わ)ける (to divide fairly) is taught to children from kindergarten."},

    {type:"mc", q:"道徳(どうとく) education in Japanese schools teaches:", opts:["Morality, empathy, and social responsibility","Mathematics","Science","Foreign languages"], ans:"Morality, empathy, and social responsibility",
     hint:"This school subject focuses on character development and ethical behavior."},

    {type:"teach", trg:"思(おも)いやり", src:"empathy / consideration / compassion", pos:"noun", gender:null,
     note:"From 思(おも)う (to think) + やる (to do for someone).\n思(おも)いやりのある人(ひと) = a considerate person.",
     example:"A: 思(おも)いやりのある社会(しゃかい)を作(つく)りたいですね。\nB: まず、身近(みぢか)な人(ひと)に思(おも)いやりを持(も)ちましょう。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: I would like to create a compassionate society.\nB: First, let us show empathy to those close to us.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"思(おも)いやり is considered the highest Japanese virtue. It means proactively thinking about others' feelings and acting accordingly. Japanese service, gift-giving, and social etiquette all flow from 思(おも)いやり. It differs from sympathy (same feeling) in that it requires imaginative action: not just feeling, but doing."},

    {type:"teach", trg:"尊重(そんちょう)", src:"respect", pos:"noun", gender:null,
     note:"尊重(そんちょう)する = to respect.\n人権(じんけん)を尊重(そんちょう)する = to respect human rights.",
     example:"A: 互(たが)いの意見(いけん)を尊重(そんちょう)することが大切(たいせつ)です。\nB: そうですね。違(ちが)う考(かんが)えも認(みと)めるべきです。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: It is important to respect each other's opinions.\nB: Yes. We should also accept different ideas.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"尊重(そんちょう) combines 尊 (revere/noble) and 重 (heavy/important). 個人(こじん)の尊重(そんちょう) (respect for the individual) and 多様性(たようせい)の尊重(そんちょう) (respect for diversity) are increasingly important phrases in modern Japan. Traditional group harmony (和) is being balanced with individual 尊重(そんちょう)."},

    {type:"teach", trg:"誠実(せいじつ)", src:"sincere / honest / faithful", pos:"adj", gender:null,
     note:"Na-adjective. 誠実(せいじつ)な態度(たいど) = a sincere attitude.",
     example:"A: 誠実(せいじつ)に答(こた)えてください。\nB: はい、本当(ほんとう)のことを言(い)います。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Please answer sincerely.\nB: Yes, I will tell the truth.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"誠実(せいじつ) uses 誠 (sincerity, the same as まこと) and 実 (truth/reality). Being 誠実(せいじつ) is highly valued in Japanese relationships and business. まこと (truth/sincerity) is a traditional Japanese virtue that appears in samurai codes (武士道(ぶしどう), bushido). 誠実(せいじつ)さ (sincerity) is what Japanese people seek in partners and friends."},

    {type:"teach", trg:"許(ゆる)す", src:"to forgive / to permit", pos:"verb", gender:null,
     note:"Group 1 verb. 過(あやま)ちを許(ゆる)す = to forgive a mistake.",
     example:"A: 彼(かれ)の過(あやま)ちを許(ゆる)すことができますか？\nB: 時間(じかん)がかかりますが、いつか許(ゆる)したいです。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Can you forgive his mistake?\nB: It will take time, but I want to forgive someday.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"許(ゆる)す (to forgive) has dual meaning: to forgive (moral) and to permit (practical). 許(ゆる)されない (unforgivable) is a strong moral judgment. In Japanese Buddhism, 許(ゆる)し (forgiveness) is a path to inner peace. The phrase 自分(じぶん)を許(ゆる)す (to forgive yourself) is increasingly discussed in mental health contexts."},

    {type:"fb", s:"互(たが)いの意見(いけん)を{1}することが大切(たいせつ)です。\n(It is important to respect each other's opinions.)", a:"そんちょう", opts:["そんちょう","はんたい","ひてい","むし"], sSrc:"It is important to respect each other's opinions.",
     hint:"The word meaning to value and honor someone's thoughts."},

    {type:"teach", trg:"権利(けんり)", src:"right (legal/human)", pos:"noun", gender:null,
     note:"人権(じんけん) = human rights.\n権利(けんり)を主張(しゅちょう)する = to assert one's rights.",
     example:"A: すべての人(ひと)には平等(びょうどう)な権利(けんり)があります。\nB: それが民主主義(みんしゅしゅぎ)の基本(きほん)ですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: All people have equal rights.\nB: That is the foundation of democracy.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"権利(けんり) combines 権 (power/authority) and 利 (benefit). The Japanese Constitution guarantees fundamental 権利(けんり) including freedom of speech, religion, and assembly. 人権(じんけん) (human rights) education is part of school curricula. 権利(けんり)と義務(ぎむ) (rights and duties) are taught as a balanced pair."},

    {type:"teach", trg:"平和(へいわ)", src:"peace", pos:"noun", gender:null,
     note:"平和主義(へいわしゅぎ) = pacifism.\n世界平和(せかいへいわ) = world peace.",
     example:"A: 平和(へいわ)な世界(せかい)を願(ねが)っています。\nB: 私(わたし)もです。戦争(せんそう)は二度(にど)とあってはなりません。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: I wish for a peaceful world.\nB: Me too. War must never happen again.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"平和(へいわ) is deeply significant in post-war Japan. Article 9 of the Japanese Constitution renounces war. 広島(ひろしま)と長崎(ながさき)の平和(へいわ)記念式典(きねんしきてん) (peace memorial ceremonies) are held every August. 平和(へいわ)教育(きょういく) (peace education) is part of Japanese schooling. The concept shapes Japan's international identity."},

    {type:"mc", q:"思(おも)いやり describes:", opts:["Academic knowledge","Proactive empathy and consideration for others","Strict discipline","Physical strength"], ans:"Proactive empathy and consideration for others",
     hint:"This Japanese virtue goes beyond feeling to actively caring for o...' wellbeing."},

    {type:"match", pairs:[
      {trg:"倫理(りんり)", src:"ethics"},
      {trg:"正義(せいぎ)", src:"justice"},
      {trg:"義務(ぎむ)", src:"duty"},
      {trg:"権利(けんり)", src:"rights"},
      {trg:"平和(へいわ)", src:"peace"}
    ]},

    {type:"fb", s:"すべての人(ひと)には平等(びょうどう)な{1}があります。\n(All people have equal rights.)", a:"けんり", opts:["けんり","ぎむ","りんり","どうとく"], sSrc:"All people have equal rights.",
     hint:"The legal/philosophical concept of entitlements that all people possess."},

    {type:"mc", q:"誠実(せいじつ) describes someone who is:", opts:["Quiet and shy","Funny and entertaining","Sincere and honest","Strict and harsh"], ans:"Sincere and honest",
     hint:"This quality involves truthfulness and genuine behavior."}
  ,{type:"match",pairs:[{trg:"道徳(どうとく)",src:"morality / morals"},{trg:"公平(こうへい)",src:"fairness / impartiality"},{trg:"思(おも)いやり",src:"empathy / consideration / compassion"},{trg:"誠実(せいじつ)",src:"sincere / honest / faithful"},{trg:"許(ゆる)す",src:"to forgive / to permit"}]},
  {type:"fb", s:"社会(しゃかい)において{1}を守(まも)ることは大切(たいせつ)です。", a:["正義(せいぎ)"], opts:["正義(せいぎ)","倫理(りんり)","義務(ぎむ)","道徳(どうとく)"], hint:"The moral principle of what is right and fair in society.", sSrc:"In society, it is important to uphold {1}."},
  {type:"fb", s:"彼(かれ)は謝(あやま)ったので私(わたし)は{1}ことにしました。", a:["許(ゆる)す"], opts:["許(ゆる)す","尊重(そんちょう)","思(おも)いやり","誠実(せいじつ)"], hint:"The verb for pardoning someone who has wronged you.", sSrc:"He apologised, so I decided to {1} him."}
]
};
export default BATCH6_L1;
