// Unit 30 Batch 5 Lesson 1: りんり (Ethics & Moral Philosophy)
const BATCH5_L_1 = {
  id:"jav2_u30l_b5_1", title:"りんり", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"りんり",
     desc:"Ethics vocabulary enables deep discussions about right and wrong, values, and moral reasoning. Learn words for morality, conscience, justice, and virtue. These concepts appear in JLPT N1 reading passages and are essential for engaging with Japanese philosophical discourse.",
     goals:["Use ethics vocabulary: りんり, どうとく, せいぎ, りょうしん","Discuss moral dilemmas in Japanese","Understand Japanese ethical traditions"]},

    {type:"teach", trg:"りんり", src:"ethics / moral philosophy", pos:"noun", gender:null,
     note:"Kanji: 倫理. りんりがく = ethics (academic field).\nりんりてき = ethical. りんりきてい = code of ethics.",
     example:"A: じんこうちのうのりんりてきもんだいについてかんがえるべきです。\nB: ぎじゅつのしんぽにりんりがおいつかなければなりませんね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: We should think about the ethical issues of AI.\nB: Ethics must keep up with technological progress.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"倫理 uses 倫 (ethics/morality) and 理 (reason/logic). Japanese high school students study りんり as a required subject covering both Western and Eastern philosophy. The りんり curriculum includes Confucius, Buddha, Socrates, Kant, and Japanese thinkers like Nishida Kitaro. This broad philosophical education is unique to Japan's education system."},

    {type:"teach", trg:"どうとく", src:"morality / moral values", pos:"noun", gender:null,
     note:"Kanji: 道徳. どうとくきょういく = moral education.\nどうとくてき = moral. More practical than りんり.",
     example:"A: しょうがっこうでのどうとくのじゅぎょうはたいせつです。\nB: こどものころからかちかんをそだてることがだいじですね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: Moral education classes in elementary school are important.\nB: Cultivating values from childhood is important.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"道徳 combines 道 (way/path) and 徳 (virtue). どうとく is more practical and everyday than りんり (philosophical). Japanese schools have dedicated どうとく classes teaching empathy, responsibility, and social harmony. The curriculum uses stories and discussions. どうとく became a formally graded subject in 2018, sparking debate about whether morality can be tested and scored."},

    {type:"teach", trg:"せいぎ", src:"justice / righteousness", pos:"noun", gender:null,
     note:"Kanji: 正義. せいぎかん = sense of justice.\nせいぎのみかた = ally of justice (hero term).",
     example:"A: せいぎとはなにかというといは、こだいからてつがくしゃをなやませてきました。\nB: じだいやぶんかによってせいぎのていぎはかわりますね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: The question of what justice is has troubled philosophers since ancient times.\nB: The definition of justice changes with era and culture.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"正義 uses 正 (correct/righteous) and 義 (righteousness/meaning). In Japanese pop culture, せいぎのみかた (ally of justice) is the superhero archetype. Anime heroes declare themselves せいぎのみかた. In philosophy, Harvard professor Michael Sandel's lecture series これからの「正義」の話をしよう became a bestselling book in Japan, sparking nationwide discussion about justice."},

    {type:"teach", trg:"りょうしん", src:"conscience / moral sense", pos:"noun", gender:null,
     note:"Kanji: 良心. りょうしんのかしゃく = pang of conscience.\nりょうしんにしたがう = to follow one's conscience.",
     example:"A: りょうしんにしたがってこうどうすることがたいせつです。\nB: ときにはゆうきがひつようですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Acting according to your conscience is important.\nB: Sometimes courage is needed.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"良心 uses 良 (good) and 心 (heart/mind). The concept of りょうしん as an innate moral sense resonates with both Confucian (良知 ryouchi, innate good knowledge) and Western (conscience) traditions. Japanese courts consider りょうしん in sentencing. The phrase りょうしんのかしゃく (pangs of conscience) describes guilt that eats at you from within."},

    {type:"mc", q:"どうとく differs from りんり in that:", opts:["どうとく is more practical/everyday, りんり is more philosophical","They are identical","どうとく is formal, りんり is casual","どうとく is newer, りんり is older"], ans:"どうとく is more practical/everyday, りんり is more philosophical",
     hint:"One is taught in elementary schools for daily life; the other is studied in high school/university as philosophy."},

    {type:"teach", trg:"かちかん", src:"values / value system / sense of values", pos:"noun", gender:null,
     note:"Kanji: 価値観. かち (value) + かん (view/perspective).\nかちかんのちがい = difference in values.",
     example:"A: せだいかんでかちかんがおおきくことなることがあります。\nB: たがいにりかいしあうどりょくがたいせつですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Values can differ greatly between generations.\nB: Mutual understanding efforts are important.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"価値観 is one of the most-discussed concepts in modern Japan. Generational かちかんのちがい (value differences) shape debates on work, family, and society. Older generations value loyalty and self-sacrifice; younger generations prioritize work-life balance and personal fulfillment. たようなかちかん (diverse values) is the phrase used to advocate for tolerance of different lifestyles."},

    {type:"teach", trg:"へいとうせい", src:"fairness / impartiality / equity", pos:"noun", gender:null,
     note:"Kanji: 公平性. こうへい (fair) + せい (-ness).\nこうへいなあつかい = fair treatment.",
     example:"A: さいばんにはこうへいせいがもとめられます。\nB: ほうのしたのびょうどうはみんしゅしゅぎのきほんですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Fairness is required in trials.\nB: Equality under the law is the foundation of democracy.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"公平性 uses 公 (public) and 平 (flat/equal). Japanese culture has a complex relationship with こうへいせい: on one hand, みんなびょうどう (everyone equal) is an ideal; on the other, hierarchies of age, gender, and company rank are deeply embedded. The tension between formal こうへいせい and practical hierarchy generates ongoing social debate."},

    {type:"teach", trg:"ぜんあく", src:"good and evil / right and wrong", pos:"noun", gender:null,
     note:"Kanji: 善悪. ぜんあくのはんだん = moral judgment.\nぜん (good) + あく (evil).",
     example:"A: ぜんあくのはんだんはかんたんではありません。\nB: じょうきょうによってはんだんがかわることもありますね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: Moral judgment is not simple.\nB: Judgment can change depending on the situation.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"善悪 is the fundamental dichotomy of morality. Buddhism teaches that ぜんあく are not absolute but depend on intention and context. Shinto focuses less on ぜんあく and more on purity (清い kiyoi) vs. impurity (穢れ kegare). This multi-layered moral framework means Japanese ethics draws from Buddhist, Confucian, and Shinto traditions simultaneously."},

    {type:"tip", title:"Japanese Ethical Traditions",
     text:"Three philosophical influences:\nぶっきょう (Buddhism): karma, compassion, impermanence\nじゅきょう (Confucianism): hierarchy, loyalty, filial piety\nしんとう (Shinto): purity, nature reverence, ritual\n\nKey concepts:\nわ (和) = harmony (avoiding conflict)\nおん (恩) = debt of gratitude\nぎり (義理) = social obligation\nにんじょう (人情) = human feeling/compassion\n\nModern additions:\nじんけん (人権) = human rights\nこうへいせい (公平性) = fairness\nたようせい (多様性) = diversity"},

    {type:"teach", trg:"ぎり", src:"social obligation / duty / honor", pos:"noun", gender:null,
     note:"Kanji: 義理. ぎりをはたす = to fulfill an obligation.\nぎりチョコ = obligation chocolate (Valentine's).",
     example:"A: にほんしゃかいではぎりとにんじょうのバランスがじゅうようです。\nB: かんけいせいをたいせつにするぶんかですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: In Japanese society, the balance of obligation and human feeling is important.\nB: It is a culture that values relationships.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"義理 is one of the most culturally significant Japanese concepts. It describes obligations created by social relationships: giving return gifts, attending funerals of acquaintances, supporting colleagues. ぎりチョコ (obligation chocolate) on Valentine's Day is given to male coworkers not out of romance but social duty. The tension between ぎり (obligation) and にんじょう (personal feelings) is a classic theme in Japanese literature and drama."},

    {type:"teach", trg:"にんじょう", src:"human feelings / compassion / empathy", pos:"noun", gender:null,
     note:"Kanji: 人情. にんじょうあつい = warm-hearted/compassionate.\nにんじょうのまち = a town known for warmth.",
     example:"A: にんじょうあついひとにすくわれたことがあります。\nB: ひとのやさしさはなによりもちからになりますね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: I was once saved by a warm-hearted person.\nB: Human kindness is more powerful than anything.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"人情 combines 人 (human) and 情 (emotion/feeling). It represents the warm, compassionate side of human nature. にんじょうばなし (human interest stories) are a beloved genre. にんじょう vs. ぎり is the classic Japanese moral tension: do you follow your heart (にんじょう) or your social obligations (ぎり)? Great Japanese stories explore this conflict."},

    {type:"fb", s:"じんこうちのうの{1}てきもんだいについてかんがえるべきです。\n(We should think about the ethical issues of AI.)", a:"りんり", opts:["りんり","どうとく","ほうりつ","けいざい"], sSrc:"We should think about the ethical issues of AI.",
     hint:"The word for ethics/moral philosophy, used as a な-adjective modifier with てき."},

    {type:"mc", q:"ぎり describes:", opts:["Social obligations created by relationships","Personal desires","Financial debts","Legal requirements"], ans:"Social obligations created by relationships",
     hint:"This concept governs the sense of duty felt toward people in your s... network."},

    {type:"match", pairs:[{trg:"りんり",src:"ethics"},{trg:"せいぎ",src:"justice"},{trg:"りょうしん",src:"conscience"},{trg:"かちかん",src:"values/value system"}]},

    {type:"fb", s:"にほんしゃかいではぎりと{1}のバランスがじゅうようです。\n(In Japan, the balance of obligation and human feeling is important.)", a:"にんじょう", opts:["にんじょう","りんり","どうとく","せいぎ"], sSrc:"In Japan, the balance of obligation and human feeling is important.",
     hint:"The word for human feelings, compassion, and empathy that contrasts with social obligation."},

    {type:"mc", q:"Japanese ethics draws from:", opts:["Buddhism, Confucianism, and Shinto simultaneously","Only Western philosophy","Only Buddhism","Only Confucianism"], ans:"Buddhism, Confucianism, and Shinto simultaneously",
     hint:"Japan's moral framework blends multiple philosophical and religious traditions."}
  ]
};
export default BATCH5_L_1;
