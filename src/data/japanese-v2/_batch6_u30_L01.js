// Batch 6 – Unit 30 (B2.3 Philosophy): Ethics & Moral Reasoning
const BATCH6_L1 = {
  id:"jav2_u30l_b6_1", title:"りんりとどうとく", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"りんりとどうとく",
     desc:"Explore vocabulary for ethics, morality, and philosophical reasoning. These abstract concepts are essential for academic Japanese, JLPT N1 preparation, and meaningful discussions about society.",
     goals:["Use vocabulary for ethical and moral concepts","Discuss fairness, justice, and duty","Express philosophical arguments"]},

    {type:"teach", trg:"りんり", src:"ethics", pos:"noun", gender:null,
     note:"Kanji: 倫理. りんりてき = ethical.\nせいめいりんり = bioethics.",
     example:"A: このけんきゅうはりんりてきにもんだいがあるとおもいます。\nB: りんりいいんかいにそうだんしましょう。",
     exampleSrc:"A: I think this research has ethical problems.\nB: Let us consult the ethics committee.",
     funFact:"りんり (倫理) combines 倫 (relationships/order) and 理 (reason). In Japanese high schools, 倫理 is a social studies subject covering world philosophy from Socrates to Confucius. Corporate りんり (business ethics) gained attention after scandals at major companies. りんりかん (sense of ethics) is a valued personal quality."},

    {type:"teach", trg:"どうとく", src:"morality / morals", pos:"noun", gender:null,
     note:"Kanji: 道徳. どうとくてき = moral.\nどうとくのじゅぎょう = moral education class.",
     example:"A: どうとくのじゅぎょうでなにをまなびましたか？\nB: おもいやりのたいせつさについてかんがえました。",
     exampleSrc:"A: What did you learn in moral education class?\nB: We thought about the importance of empathy.",
     funFact:"どうとく (道徳) combines 道 (way/path) and 徳 (virtue). Japanese schools have formal どうとく classes where students discuss kindness, responsibility, and social harmony through stories and role-play. This became a graded subject in 2018, reflecting Japan's emphasis on character education alongside academics."},

    {type:"teach", trg:"せいぎ", src:"justice / righteousness", pos:"noun", gender:null,
     note:"Kanji: 正義. せいぎかん = sense of justice.\nせいぎのみかた = ally of justice (hero).",
     example:"A: せいぎとはなんでしょうか？\nB: じだいやぶんかによってかわるものかもしれません。",
     exampleSrc:"A: What is justice?\nB: It may change depending on the era and culture.",
     funFact:"せいぎ (正義) is a powerful concept in Japanese popular culture. Every superhero is せいぎのみかた (ally of justice). But philosophical Japanese works often question absolute せいぎ: anime like Death Note and Attack on Titan explore moral gray areas where both sides believe they represent せいぎ."},

    {type:"teach", trg:"ぎむ", src:"duty / obligation", pos:"noun", gender:null,
     note:"Kanji: 義務. ぎむきょういく = compulsory education.\nけんりとぎむ = rights and duties.",
     example:"A: せいじんにはせんきょけんをこうしするぎむがあるとおもいますか？\nB: けんりであってぎむではないとおもいます。",
     exampleSrc:"A: Do you think adults have a duty to exercise their right to vote?\nB: I think it is a right, not a duty.",
     funFact:"ぎむ (義務) combines 義 (righteousness) and 務 (task). Japanese distinguishes ぎむ (obligation, must do) from けんり (権利, rights, may do). ぎむきょういく (compulsory education) covers 9 years (elementary + middle school). のうぜいのぎむ (duty to pay taxes) and きんろうのぎむ (duty to work) are constitutional obligations."},

    {type:"teach", trg:"こうへい", src:"fairness / impartiality", pos:"adj", gender:null,
     note:"Na-adjective. こうへいなさばき = fair judgment.\nKanji: 公平.",
     example:"A: さいばんはこうへいであるべきです。\nB: もちろんです。すべてのひとにびょうどうでなければなりません。",
     exampleSrc:"A: Trials should be fair.\nB: Of course. They must be equal for all people.",
     funFact:"こうへい (公平) combines 公 (public) and 平 (flat/equal). The related word びょうどう (平等, equality) also uses 平. Japanese courts emphasize こうへい and ちゅうりつ (neutrality). In daily life, こうへいにわける (to divide fairly) is taught to children from kindergarten."},

    {type:"mc", q:"どうとく education in Japanese schools teaches:", opts:["Morality, empathy, and social responsibility","Mathematics","Science","Foreign languages"], ans:"Morality, empathy, and social responsibility",
     hint:"This school subject focuses on character development and ethical behavior."},

    {type:"teach", trg:"おもいやり", src:"empathy / consideration / compassion", pos:"noun", gender:null,
     note:"From おもう (to think) + やる (to do for someone).\nおもいやりのあるひと = a considerate person.",
     example:"A: おもいやりのあるしゃかいをつくりたいですね。\nB: まず、みぢかなひとにおもいやりをもちましょう。",
     exampleSrc:"A: I would like to create a compassionate society.\nB: First, let us show empathy to those close to us.",
     funFact:"おもいやり is considered the highest Japanese virtue. It means proactively thinking about others' feelings and acting accordingly. Japanese service, gift-giving, and social etiquette all flow from おもいやり. It differs from sympathy (same feeling) in that it requires imaginative action: not just feeling, but doing."},

    {type:"teach", trg:"そんちょう", src:"respect", pos:"noun", gender:null,
     note:"Kanji: 尊重. そんちょうする = to respect.\nじんけんをそんちょうする = to respect human rights.",
     example:"A: たがいのいけんをそんちょうすることがたいせつです。\nB: そうですね。ちがうかんがえもみとめるべきです。",
     exampleSrc:"A: It is important to respect each other's opinions.\nB: Yes. We should also accept different ideas.",
     funFact:"そんちょう (尊重) combines 尊 (revere/noble) and 重 (heavy/important). こじんのそんちょう (respect for the individual) and たようせいのそんちょう (respect for diversity) are increasingly important phrases in modern Japan. Traditional group harmony (和) is being balanced with individual そんちょう."},

    {type:"teach", trg:"せいじつ", src:"sincere / honest / faithful", pos:"adj", gender:null,
     note:"Na-adjective. せいじつなたいど = a sincere attitude.\nKanji: 誠実.",
     example:"A: せいじつにこたえてください。\nB: はい、ほんとうのことをいいます。",
     exampleSrc:"A: Please answer sincerely.\nB: Yes, I will tell the truth.",
     funFact:"せいじつ (誠実) uses 誠 (sincerity, the same as まこと) and 実 (truth/reality). Being せいじつ is highly valued in Japanese relationships and business. まこと (truth/sincerity) is a traditional Japanese virtue that appears in samurai codes (武士道, bushido). せいじつさ (sincerity) is what Japanese people seek in partners and friends."},

    {type:"teach", trg:"ゆるす", src:"to forgive / to permit", pos:"verb", gender:null,
     note:"Group 1 verb. あやまちをゆるす = to forgive a mistake.\nKanji: 許す.",
     example:"A: かれのあやまちをゆるすことができますか？\nB: じかんがかかりますが、いつかゆるしたいです。",
     exampleSrc:"A: Can you forgive his mistake?\nB: It will take time, but I want to forgive someday.",
     funFact:"ゆるす (許す) has dual meaning: to forgive (moral) and to permit (practical). ゆるされない (unforgivable) is a strong moral judgment. In Japanese Buddhism, ゆるし (forgiveness) is a path to inner peace. The phrase じぶんをゆるす (to forgive yourself) is increasingly discussed in mental health contexts."},

    {type:"fb", s:"たがいのいけんを{1}することがたいせつです。\n(It is important to respect each other's opinions.)", a:"そんちょう", opts:["そんちょう","はんたい","ひてい","むし"], sSrc:"It is important to respect each other's opinions.",
     hint:"The word meaning to value and honor someone's thoughts."},

    {type:"teach", trg:"けんり", src:"right (legal/human)", pos:"noun", gender:null,
     note:"Kanji: 権利. じんけん = human rights.\nけんりをしゅちょうする = to assert one's rights.",
     example:"A: すべてのひとにはびょうどうなけんりがあります。\nB: それがみんしゅしゅぎのきほんですね。",
     exampleSrc:"A: All people have equal rights.\nB: That is the foundation of democracy.",
     funFact:"けんり (権利) combines 権 (power/authority) and 利 (benefit). The Japanese Constitution guarantees fundamental けんり including freedom of speech, religion, and assembly. じんけん (human rights) education is part of school curricula. けんり and ぎむ (rights and duties) are taught as a balanced pair."},

    {type:"teach", trg:"へいわ", src:"peace", pos:"noun", gender:null,
     note:"Kanji: 平和. へいわしゅぎ = pacifism.\nせかいへいわ = world peace.",
     example:"A: へいわなせかいをねがっています。\nB: わたしもです。せんそうはにどとあってはなりません。",
     exampleSrc:"A: I wish for a peaceful world.\nB: Me too. War must never happen again.",
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
