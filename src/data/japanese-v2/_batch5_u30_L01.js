// Unit 30 Batch 5 Lesson 1: 倫理(りんり) (Ethics & Moral Philosophy)
const BATCH5_L_1 = {
  id:"jav2_u30l_b5_1", title:"倫理(りんり)", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"倫理(りんり)",
     desc:"Ethics vocabulary enables deep discussions about right and wrong, values, and moral reasoning. Learn words for morality, conscience, justice, and virtue. These concepts appear in JLPT N1 reading passages and are essential for engaging with Japanese philosophical discourse.",
     goals:["Use ethics vocabulary: 倫理(りんり), 道徳(どうとく), 正義(せいぎ), 良心(りょうしん)","Discuss moral dilemmas in Japanese","Understand Japanese ethical traditions"]},

    {type:"teach", trg:"倫理(りんり)", src:"ethics / moral philosophy", pos:"noun", gender:null,
     note:"Kanji: 倫理(りんり). 倫理学(りんりがく) = ethics (academic field).\n倫理的(りんりてき) = ethical. 倫理規程(りんりきてい) = code of ethics.",
     example:"A: 人工知能(じんこうちのう)の倫理的(りんりてき)問題(もんだい)について考(かんが)えるべきです。\nB: 技術(ぎじゅつ)の進歩(しんぽ)に倫理(りんり)が追(お)いつかなければなりませんね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: We should think about the ethical issues of AI.\nB: Ethics must keep up with technological progress.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"倫理(りんり) uses 倫(りん) (ethics/morality) and 理(り) (reason/logic). Japanese high school students study 倫理(りんり) as a required subject covering both Western and Eastern philosophy. The 倫理(りんり) curriculum includes Confucius, Buddha, Socrates, Kant, and Japanese thinkers like Nishida Kitaro. This broad philosophical education is unique to Japan's education system."},

    {type:"teach", trg:"道徳(どうとく)", src:"morality / moral values", pos:"noun", gender:null,
     note:"Kanji: 道徳(どうとく). 道徳(どうとく)教育(きょういく) = moral education.\n道徳的(どうとくてき) = moral. More practical than 倫理(りんり).",
     example:"A: 小学校(しょうがっこう)での道徳(どうとく)の授業(じゅぎょう)は大切(たいせつ)です。\nB: 子供(こども)のころから価値観(かちかん)を育(そだ)てることが大事(だいじ)ですね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Moral education classes in elementary school are important.\nB: Cultivating values from childhood is important.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"道徳(どうとく) combines 道(どう) (way/path) and 徳(とく) (virtue). 道徳(どうとく) is more practical and everyday than 倫理(りんり) (philosophical). Japanese schools have dedicated 道徳(どうとく) classes teaching empathy, responsibility, and social harmony. The curriculum uses stories and discussions. 道徳(どうとく) became a formally graded subject in 2018, sparking debate about whether morality can be tested and scored."},

    {type:"teach", trg:"正義(せいぎ)", src:"justice / righteousness", pos:"noun", gender:null,
     note:"Kanji: 正義(せいぎ). 正義感(せいぎかん) = sense of justice.\n正義(せいぎ)の味方(みかた) = ally of justice (hero term).",
     example:"A: 正義(せいぎ)とは何(なに)かという問(と)いは、古代(こだい)から哲学者(てつがくしゃ)を悩(なや)ませてきました。\nB: 時代(じだい)や文化(ぶんか)によって正義(せいぎ)の定義(ていぎ)は変(か)わりますね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: The question of what justice is has troubled philosophers since ancient times.\nB: The definition of justice changes with era and culture.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"正義(せいぎ) uses 正(せい) (correct/righteous) and 義(ぎ) (righteousness/meaning). In Japanese pop culture, 正義(せいぎ)の味方(みかた) (ally of justice) is the superhero archetype. Anime heroes declare themselves 正義(せいぎ)の味方(みかた). In philosophy, Harvard professor Michael Sandel's lecture series これからの「正義(せいぎ)」の話(はなし)をしよう became a bestselling book in Japan, sparking nationwide discussion about justice."},

    {type:"teach", trg:"良心(りょうしん)", src:"conscience / moral sense", pos:"noun", gender:null,
     note:"Kanji: 良心(りょうしん). 良心(りょうしん)の呵責(かしゃく) = pang of conscience.\n良心(りょうしん)に従(したが)う = to follow one's conscience.",
     example:"A: 良心(りょうしん)に従(したが)って行動(こうどう)することが大切(たいせつ)です。\nB: 時(とき)には勇気(ゆうき)が必要(ひつよう)ですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Acting according to your conscience is important.\nB: Sometimes courage is needed.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"良心(りょうしん) uses 良(りょう) (good) and 心(しん) (heart/mind). The concept of 良心(りょうしん) as an innate moral sense resonates with both Confucian (良知(りょうち), innate good knowledge) and Western (conscience) traditions. Japanese courts consider 良心(りょうしん) in sentencing. The phrase 良心(りょうしん)の呵責(かしゃく) (pangs of conscience) describes guilt that eats at you from within."},

    {type:"mc", q:"道徳(どうとく) differs from 倫理(りんり) in that:", opts:["道徳(どうとく) is more practical/everyday, 倫理(りんり) is more philosophical","They are identical","道徳(どうとく) is formal, 倫理(りんり) is casual","道徳(どうとく) is newer, 倫理(りんり) is older"], ans:"道徳(どうとく) is more practical/everyday, 倫理(りんり) is more philosophical",
     hint:"One is taught in elementary schools for daily life; the other is studied in high school/university as philosophy."},

    {type:"teach", trg:"価値観(かちかん)", src:"values / value system / sense of values", pos:"noun", gender:null,
     note:"Kanji: 価値観(かちかん). 価値(かち) (value) + 観(かん) (view/perspective).\n価値観(かちかん)の違(ちが)い = difference in values.",
     example:"A: 世代間(せだいかん)で価値観(かちかん)が大(おお)きく異(こと)なることがあります。\nB: お互(たが)いに理解(りかい)し合(あ)う努力(どりょく)が大切(たいせつ)ですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Values can differ greatly between generations.\nB: Mutual understanding efforts are important.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"価値観(かちかん) is one of the most-discussed concepts in modern Japan. Generational 価値観(かちかん)の違(ちが)い (value differences) shape debates on work, family, and society. Older generations value loyalty and self-sacrifice; younger generations prioritize work-life balance and personal fulfillment. 多様(たよう)な価値観(かちかん) (diverse values) is the phrase used to advocate for tolerance of different lifestyles."},

    {type:"teach", trg:"公平性(こうへいせい)", src:"fairness / impartiality / equity", pos:"noun", gender:null,
     note:"Kanji: 公平性(こうへいせい). 公平(こうへい) (fair) + 性(せい) (-ness).\n公平(こうへい)な扱(あつか)い = fair treatment.",
     example:"A: 裁判(さいばん)には公平性(こうへいせい)が求(もと)められます。\nB: 法(ほう)の下(もと)の平等(びょうどう)は民主主義(みんしゅしゅぎ)の基本(きほん)ですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Fairness is required in trials.\nB: Equality under the law is the foundation of democracy.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"公平性(こうへいせい) uses 公(こう) (public) and 平(へい) (flat/equal). Japanese culture has a complex relationship with 公平性(こうへいせい): on one hand, みんな平等(びょうどう) (everyone equal) is an ideal; on the other, hierarchies of age, gender, and company rank are deeply embedded. The tension between formal 公平性(こうへいせい) and practical hierarchy generates ongoing social debate."},

    {type:"teach", trg:"善悪(ぜんあく)", src:"good and evil / right and wrong", pos:"noun", gender:null,
     note:"Kanji: 善悪(ぜんあく). 善悪(ぜんあく)の判断(はんだん) = moral judgment.\n善(ぜん) (good) + 悪(あく) (evil).",
     example:"A: 善悪(ぜんあく)の判断(はんだん)は簡単(かんたん)ではありません。\nB: 状況(じょうきょう)によって判断(はんだん)が変(か)わることもありますね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Moral judgment is not simple.\nB: Judgment can change depending on the situation.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"善悪(ぜんあく) is the fundamental dichotomy of morality. Buddhism teaches that 善悪(ぜんあく) are not absolute but depend on intention and context. Shinto focuses less on 善悪(ぜんあく) and more on purity (清(きよ)い kiyoi) vs. impurity (穢(けが)れ kegare). This multi-layered moral framework means Japanese ethics draws from Buddhist, Confucian, and Shinto traditions simultaneously."},

    {type:"tip", title:"Japanese Ethical Traditions",
     text:"Three philosophical influences:\n仏教(ぶっきょう) (Buddhism): karma, compassion, impermanence\n儒教(じゅきょう) (Confucianism): hierarchy, loyalty, filial piety\n神道(しんとう) (Shinto): purity, nature reverence, ritual\n\nKey concepts:\n和(わ) (harmony) = avoiding conflict\n恩(おん) = debt of gratitude\n義理(ぎり) = social obligation\n人情(にんじょう) = human feeling/compassion\n\nModern additions:\n人権(じんけん) = human rights\n公平性(こうへいせい) = fairness\n多様性(たようせい) = diversity"},

    {type:"teach", trg:"義理(ぎり)", src:"social obligation / duty / honor", pos:"noun", gender:null,
     note:"Kanji: 義理(ぎり). 義理(ぎり)を果(は)たす = to fulfill an obligation.\n義理(ぎり)チョコ = obligation chocolate (Valentine's).",
     example:"A: 日本(にほん)社会(しゃかい)では義理(ぎり)と人情(にんじょう)のバランスが重要(じゅうよう)です。\nB: 関係性(かんけいせい)を大切(たいせつ)にする文化(ぶんか)ですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: In Japanese society, the balance of obligation and human feeling is important.\nB: It is a culture that values relationships.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"義理(ぎり) is one of the most culturally significant Japanese concepts. It describes obligations created by social relationships: giving return gifts, attending funerals of acquaintances, supporting colleagues. 義理(ぎり)チョコ (obligation chocolate) on Valentine's Day is given to male coworkers not out of romance but social duty. The tension between 義理(ぎり) (obligation) and 人情(にんじょう) (personal feelings) is a classic theme in Japanese literature and drama."},

    {type:"teach", trg:"人情(にんじょう)", src:"human feelings / compassion / empathy", pos:"noun", gender:null,
     note:"Kanji: 人情(にんじょう). 人情(にんじょう)厚(あつ)い = warm-hearted/compassionate.\n人情(にんじょう)の町(まち) = a town known for warmth.",
     example:"A: 人情(にんじょう)厚(あつ)い人(ひと)に救(すく)われたことがあります。\nB: 人(ひと)の優(やさ)しさは何(なに)よりも力(ちから)になりますね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: I was once saved by a warm-hearted person.\nB: Human kindness is more powerful than anything.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"人情(にんじょう) combines 人(にん) (human) and 情(じょう) (emotion/feeling). It represents the warm, compassionate side of human nature. 人情話(にんじょうばなし) (human interest stories) are a beloved genre. 人情(にんじょう) vs. 義理(ぎり) is the classic Japanese moral tension: do you follow your heart (人情(にんじょう)) or your social obligations (義理(ぎり))? Great Japanese stories explore this conflict."},

    {type:"fb", s:"人工知能(じんこうちのう)の{1}的(てき)問題(もんだい)について考(かんが)えるべきです。\n(We should think about the ethical issues of AI.)", a:"倫理(りんり)", opts:["倫理(りんり)","道徳(どうとく)","法律(ほうりつ)","経済(けいざい)"], sSrc:"We should think about the ethical issues of AI.",
     hint:"The word for ethics/moral philosophy, used as a な-adjective modifier with てき."},

    {type:"mc", q:"義理(ぎり) describes:", opts:["Social obligations created by relationships","Personal desires","Financial debts","Legal requirements"], ans:"Social obligations created by relationships",
     hint:"This concept governs the sense of duty felt toward people in your s... network."},

    {type:"match", pairs:[{trg:"倫理(りんり)",src:"ethics"},{trg:"正義(せいぎ)",src:"justice"},{trg:"良心(りょうしん)",src:"conscience"},{trg:"価値観(かちかん)",src:"values/value system"}]},

    {type:"fb", s:"日本(にほん)社会(しゃかい)では義理(ぎり)と{1}のバランスが重要(じゅうよう)です。\n(In Japan, the balance of obligation and human feeling is important.)", a:"人情(にんじょう)", opts:["人情(にんじょう)","倫理(りんり)","道徳(どうとく)","正義(せいぎ)"], sSrc:"In Japan, the balance of obligation and human feeling is important.",
     hint:"The word for human feelings, compassion, and empathy that contrasts with social obligation."},

    {type:"mc", q:"Japanese ethics draws from:", opts:["Buddhism, Confucianism, and Shinto simultaneously","Only Western philosophy","Only Buddhism","Only Confucianism"], ans:"Buddhism, Confucianism, and Shinto simultaneously",
     hint:"Japan's moral framework blends multiple philosophical and religious traditions."}
  ,{type:"match",pairs:[{trg:"公平性(こうへいせい)",src:"fairness / impartiality / equity"},{trg:"善悪(ぜんあく)",src:"good and evil / right and wrong"},{trg:"義理(ぎり)",src:"social obligation / duty / honor"}]}]
};
export default BATCH5_L_1;
