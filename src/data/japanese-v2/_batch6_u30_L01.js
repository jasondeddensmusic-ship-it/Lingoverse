// Batch 6 – Unit 30 (B2.3 Philosophy): Ethics & Moral Reasoning
const BATCH6_L1 = {
  id:"jav2_u30l_b6_1", title:"りんりとどうとく", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"りんりとどうとく",
     desc:"Explore vocabulary for ethics, morality, and philosophical reasoning. These abstract concepts are essential for academic Japanese, JLPT N1 preparation, and meaningful discussions about society.",
     goals:["Use vocabulary for ethical and moral concepts","Discuss fairness, justice, and duty","Express philosophical arguments"]},

    {type:"teach", trg:"りんり", src:"ethics", pos:"noun", gender:null,
     note:"Kanji: 倫理. りんりてき = ethical.\nせいめいりんり = bioethics.",
     example:"A: このけんきゅうはりんりてきにもんだいがあるとおもいます。\nB: りんりいいんかいにそうだんしましょう。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: I think this research has ethical problems.\nB: Let us consult the ethics committee.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"りんり (倫理) combines 倫 (relationships/order) and 理 (reason). In Japanese high schools, 倫理 is a social studies subject covering world philosophy from Socrates to Confucius. Corporate りんり (business ethics) gained attention after scandals at major companies. りんりかん (sense of ethics) is a valued personal quality."},

    {type:"teach", trg:"どうとく", src:"morality / morals", pos:"noun", gender:null,
     note:"Kanji: 道徳. どうとくてき = moral.\nどうとくのじゅぎょう = moral education class.",
     example:"A: どうとくのじゅぎょうでなにをまなびましたか？\nB: おもいやりのたいせつさについてかんがえました。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: What did you learn in moral education class?\nB: We thought about the importance of empathy.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"どうとく (道徳) combines 道 (way/path) and 徳 (virtue). Japanese schools have formal どうとく classes where students discuss kindness, responsibility, and social harmony through stories and role-play. This became a graded subject in 2018, reflecting Japan's emphasis on character education alongside academics."},

    {type:"teach", trg:"せいぎ", src:"justice / righteousness", pos:"noun", gender:null,
     note:"Kanji: 正義. せいぎかん = sense of justice.\nせいぎのみかた = ally of justice (hero).",
     example:"A: せいぎとはなんでしょうか？\nB: じだいやぶんかによってかわるものかもしれません。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: What is justice?\nB: It may change depending on the era and culture.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"せいぎ (正義) is a powerful concept in Japanese popular culture. Every superhero is せいぎのみかた (ally of justice). But philosophical Japanese works often question absolute せいぎ: anime like Death Note and Attack on Titan explore moral gray areas where both sides believe they represent せいぎ."},

    {type:"teach", trg:"ぎむ", src:"duty / obligation", pos:"noun", gender:null,
     note:"Kanji: 義務. ぎむきょういく = compulsory education.\nけんりとぎむ = rights and duties.",
     example:"A: せいじんにはせんきょけんをこうしするぎむがあるとおもいますか？\nB: けんりであってぎむではないとおもいます。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Do you think adults have a duty to exercise their right to vote?\nB: I think it is a right, not a duty.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"ぎむ (義務) combines 義 (righteousness) and 務 (task). Japanese distinguishes ぎむ (obligation, must do) from けんり (権利, rights, may do). ぎむきょういく (compulsory education) covers 9 years (elementary + middle school). のうぜいのぎむ (duty to pay taxes) and きんろうのぎむ (duty to work) are constitutional obligations."},

    {type:"teach", trg:"こうへい", src:"fairness / impartiality", pos:"adj", gender:null,
     note:"Na-adjective. こうへいなさばき = fair judgment.\nKanji: 公平.",
     example:"A: さいばんはこうへいであるべきです。\nB: もちろんです。すべてのひとにびょうどうでなければなりません。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: Trials should be fair.\nB: Of course. They must be equal for all people.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"こうへい (公平) combines 公 (public) and 平 (flat/equal). The related word びょうどう (平等, equality) also uses 平. Japanese courts emphasize こうへい and ちゅうりつ (neutrality). In daily life, こうへいにわける (to divide fairly) is taught to children from kindergarten."},

    {type:"mc", q:"どうとく education in Japanese schools teaches:", opts:["Morality, empathy, and social responsibility","Mathematics","Science","Foreign languages"], ans:"Morality, empathy, and social responsibility",
     hint:"This school subject focuses on character development and ethical behavior."},

    {type:"teach", trg:"おもいやり", src:"empathy / consideration / compassion", pos:"noun", gender:null,
     note:"From おもう (to think) + やる (to do for someone).\nおもいやりのあるひと = a considerate person.",
     example:"A: おもいやりのあるしゃかいをつくりたいですね。\nB: まず、みぢかなひとにおもいやりをもちましょう。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: I would like to create a compassionate society.\nB: First, let us show empathy to those close to us.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"おもいやり is considered the highest Japanese virtue. It means proactively thinking about others' feelings and acting accordingly. Japanese service, gift-giving, and social etiquette all flow from おもいやり. It differs from sympathy (same feeling) in that it requires imaginative action: not just feeling, but doing."},

    {type:"teach", trg:"そんちょう", src:"respect", pos:"noun", gender:null,
     note:"Kanji: 尊重. そんちょうする = to respect.\nじんけんをそんちょうする = to respect human rights.",
     example:"A: たがいのいけんをそんちょうすることがたいせつです。\nB: そうですね。ちがうかんがえもみとめるべきです。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: It is important to respect each other's opinions.\nB: Yes. We should also accept different ideas.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"そんちょう (尊重) combines 尊 (revere/noble) and 重 (heavy/important). こじんのそんちょう (respect for the individual) and たようせいのそんちょう (respect for diversity) are increasingly important phrases in modern Japan. Traditional group harmony (和) is being balanced with individual そんちょう."},

    {type:"teach", trg:"せいじつ", src:"sincere / honest / faithful", pos:"adj", gender:null,
     note:"Na-adjective. せいじつなたいど = a sincere attitude.\nKanji: 誠実.",
     example:"A: せいじつにこたえてください。\nB: はい、ほんとうのことをいいます。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Please answer sincerely.\nB: Yes, I will tell the truth.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"せいじつ (誠実) uses 誠 (sincerity, the same as まこと) and 実 (truth/reality). Being せいじつ is highly valued in Japanese relationships and business. まこと (truth/sincerity) is a traditional Japanese virtue that appears in samurai codes (武士道, bushido). せいじつさ (sincerity) is what Japanese people seek in partners and friends."},

    {type:"teach", trg:"ゆるす", src:"to forgive / to permit", pos:"verb", gender:null,
     note:"Group 1 verb. あやまちをゆるす = to forgive a mistake.\nKanji: 許す.",
     example:"A: かれのあやまちをゆるすことができますか？\nB: じかんがかかりますが、いつかゆるしたいです。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Can you forgive his mistake?\nB: It will take time, but I want to forgive someday.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"ゆるす (許す) has dual meaning: to forgive (moral) and to permit (practical). ゆるされない (unforgivable) is a strong moral judgment. In Japanese Buddhism, ゆるし (forgiveness) is a path to inner peace. The phrase じぶんをゆるす (to forgive yourself) is increasingly discussed in mental health contexts."},

    {type:"fb", s:"たがいのいけんを{1}することがたいせつです。\n(It is important to respect each other's opinions.)", a:"そんちょう", opts:["そんちょう","はんたい","ひてい","むし"], sSrc:"It is important to respect each other's opinions.",
     hint:"The word meaning to value and honor someone's thoughts."},

    {type:"teach", trg:"けんり", src:"right (legal/human)", pos:"noun", gender:null,
     note:"Kanji: 権利. じんけん = human rights.\nけんりをしゅちょうする = to assert one's rights.",
     example:"A: すべてのひとにはびょうどうなけんりがあります。\nB: それがみんしゅしゅぎのきほんですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: All people have equal rights.\nB: That is the foundation of democracy.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"けんり (権利) combines 権 (power/authority) and 利 (benefit). The Japanese Constitution guarantees fundamental けんり including freedom of speech, religion, and assembly. じんけん (human rights) education is part of school curricula. けんり and ぎむ (rights and duties) are taught as a balanced pair."},

    {type:"teach", trg:"へいわ", src:"peace", pos:"noun", gender:null,
     note:"Kanji: 平和. へいわしゅぎ = pacifism.\nせかいへいわ = world peace.",
     example:"A: へいわなせかいをねがっています。\nB: わたしもです。せんそうはにどとあってはなりません。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: I wish for a peaceful world.\nB: Me too. War must never happen again.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"へいわ (平和) is deeply significant in post-war Japan. Article 9 of the Japanese Constitution renounces war. Hiroshima and Nagasaki's へいわきねんしきてん (peace memorial ceremonies) are held every August. へいわ education (peace education) is part of Japanese schooling. The concept shapes Japan's international identity."},

    {type:"mc", q:"おもいやり describes:", opts:["Proactive empathy and consideration for others","Strict discipline","Physical strength","Academic knowledge"], ans:"Proactive empathy and consideration for others",
     hint:"This Japanese virtue goes beyond feeling to actively caring for o...' wellbeing."},

    {type:"match", pairs:[
      {trg:"りんり", src:"ethics"},
      {trg:"せいぎ", src:"justice"},
      {trg:"ぎむ", src:"duty"},
      {trg:"けんり", src:"rights"},
      {trg:"へいわ", src:"peace"}
    ]},

    {type:"fb", s:"すべてのひとにはびょうどうな{1}があります。\n(All people have equal rights.)", a:"けんり", opts:["けんり","ぎむ","りんり","どうとく"], sSrc:"All people have equal rights.",
     hint:"The legal/philosophical concept of entitlements that all people possess."},

    {type:"mc", q:"せいじつ describes someone who is:", opts:["Sincere and honest","Strict and harsh","Quiet and shy","Funny and entertaining"], ans:"Sincere and honest",
     hint:"This quality involves truthfulness and genuine behavior."}
  ]
};
export default BATCH6_L1;
