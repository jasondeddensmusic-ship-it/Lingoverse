// Batch 8 – Unit 30 (B2.3 Philosophy): Four-Character Compounds (Yojijukugo)
const BATCH8_L1 = {
  id:"jav2_u30l_b8_1", title:"よじじゅくご", icon:"🧠", xp:15, board:true,
  steps:[
    {type:"intro", title:"よじじゅくご",
     desc:"Master four-character compound words (yojijukugo) that pack profound meaning into four kanji. These appear in speeches, writing, and daily conversation as cultural wisdom.",
     goals:["Understand and use common yojijukugo","Recognize philosophical concepts in four characters","Apply yojijukugo in appropriate contexts"]},

    {type:"teach", trg:"いちごいちえ", src:"once-in-a-lifetime encounter", pos:"noun", gender:null,
     note:"一期一会. From tea ceremony philosophy.\nTreat every meeting as unique and precious.",
     example:"A: いちごいちえのきもちでおきゃくさまをむかえます。\nB: すばらしいしせいですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: We welcome guests with a once-in-a-lifetime mindset.\nB: That is a wonderful attitude.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"いちごいちえ (一期一会) comes from さどう (tea ceremony) master せんのりきゅう. Each tea gathering is unique and unrepeatable, so pour your whole heart into it. This philosophy extends to all human encounters. Japanese hotels, restaurants, and businesses often cite いちごいちえ as their service philosophy."},

    {type:"teach", trg:"しんきいってん", src:"turning over a new leaf / fresh start", pos:"noun", gender:null,
     note:"心機一転. こころ (heart) + き (machine/momentum) + いってん (one turn).\nUsed at New Year, job changes, etc.",
     example:"A: しんきいってんがんばります。\nB: あたらしいスタートですね。おうえんしています。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: I will start fresh and do my best.\nB: A new start. I am cheering you on.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"しんきいってん is used at life transitions: new jobs, new schools, New Year, moving to a new city. It implies changing your mental state (しんき) with one rotation (いってん). Japanese spring (しがつ) is the season of しんきいってん because the school and fiscal year both start then."},

    {type:"teach", trg:"じゅうにんといろ", src:"ten people, ten colors (everyone is different)", pos:"noun", gender:null,
     note:"十人十色. Each person has their own way.\nUsed to acknowledge diversity of opinions.",
     example:"A: みんなのいけんがちがいますね。\nB: じゅうにんといろですから。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Everyone's opinions are different.\nB: Because everyone is unique.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"じゅうにんといろ (十人十色) is the Japanese equivalent of 'different strokes for different folks.' It acknowledges that diversity is natural. In a culture that values group harmony, this phrase provides space for individual differences. It is one of the first よじじゅくご children learn."},

    {type:"teach", trg:"ししゃごにゅう", src:"rounding off / rounding (numbers)", pos:"noun", gender:null,
     note:"四捨五入. Discard 4 and below, round up 5 and above.\nMath term used metaphorically.",
     example:"A: ししゃごにゅうすると100になります。\nB: そうですね。98をししゃごにゅうですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: If we round off, it becomes 100.\nB: Right. Rounding 98.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"ししゃごにゅう (四捨五入) literally means 'discard four, accept five.' It is the standard rounding rule taught in Japanese math class. Metaphorically, it means simplifying: こまかいことはししゃごにゅうして (rounding off the details). It is one of the few mathematical よじじゅくご."},

    {type:"teach", trg:"いっせきにちょう", src:"killing two birds with one stone", pos:"noun", gender:null,
     note:"一石二鳥. One stone, two birds.\nSame metaphor as the English proverb.",
     example:"A: うんどうしながらにほんごのポッドキャストをきくのはいっせきにちょうです。\nB: じかんをゆうこうにつかっていますね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Listening to a Japanese podcast while exercising is killing two birds with one stone.\nB: You are using time effectively.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"いっせきにちょう (一石二鳥) is one of the few よじじゅくご directly equivalent to an English proverb. It was actually borrowed from the English 'kill two birds with one stone' during the Meiji era. Japanese has a native equivalent: いちきょりょうとく (one action, two gains)."},

    {type:"mc", q:"What does いちごいちえ mean?", opts:["Treasure each encounter as once-in-a-lifetime","One lesson per day","One chance in a hundred","First meeting greetings"], ans:"Treasure each encounter as once-in-a-lifetime",
     hint:"This tea ceremony philosophy asks you to treat every meeting as unique and unrepeatable."},

    {type:"teach", trg:"たりきほんがん", src:"relying on others / depending on external help", pos:"noun", gender:null,
     note:"他力本願. Buddhist origin. Opposite: じりきほんがん (self-reliance).\nOften used negatively.",
     example:"A: たりきほんがんではせいこうしません。\nB: じぶんでどりょくしなければなりませんね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: You will not succeed by relying on others.\nB: You must make the effort yourself.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"たりきほんがん (他力本願) originally means relying on Amida Buddha's power for salvation in Pure Land Buddhism. In modern usage, it means passively depending on others, usually negative. The Buddhist meaning is actually positive: accepting that some things are beyond personal control. This shift in meaning frustrates Buddhist scholars."},

    {type:"teach", trg:"ぜんじんみとう", src:"unprecedented / never done before", pos:"noun", gender:null,
     note:"前人未踏. No person has ever set foot there before.\nUsed for groundbreaking achievements.",
     example:"A: ぜんじんみとうのきろくをたっせいしました。\nB: れきしてきなしゅんかんですね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: An unprecedented record was achieved.\nB: It is a historic moment.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"ぜんじんみとう (前人未踏) literally means 'no previous person has trod.' It describes achievements no one has accomplished before. Sports commentators use it for record-breaking moments. Scientists use it for discoveries. It carries a sense of heroic pioneering that makes listeners feel inspired."},

    {type:"teach", trg:"がしんしょうたん", src:"enduring hardship to achieve a goal", pos:"noun", gender:null,
     note:"臥薪嘗胆. Sleep on firewood and taste gall.\nFrom a Chinese story of revenge through suffering.",
     example:"A: がしんしょうたんのすえ、ようやくせいこうしました。\nB: ながいどりょくがみのりましたね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: After enduring great hardship, I finally succeeded.\nB: Your long effort bore fruit.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"がしんしょうたん (臥薪嘗胆) comes from a Chinese king who slept on firewood and tasted bitter gall daily to never forget his humiliation and motivation for revenge. In Japanese, it means enduring deliberate hardship to achieve a long-term goal. Athletes, entrepreneurs, and students use it to describe their perseverance."},

    {type:"teach", trg:"しこうさくご", src:"trial and error", pos:"noun", gender:null,
     note:"試行錯誤. しこう (trial) + さくご (error).\nしこうさくごをくりかえす = to repeat trial and error.",
     example:"A: しこうさくごのすえにかいけつさくをみつけました。\nB: あきらめなくてよかったですね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: After trial and error, I found a solution.\nB: It is good that you did not give up.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"しこうさくご (試行錯誤) is beloved in Japanese business and education. It implies learning through failure, which aligns with かいぜん (continuous improvement) philosophy. Startup culture embraces しこうさくご. The phrase しこうさくごをおそれるな (do not fear trial and error) encourages risk-taking."},

    {type:"teach", trg:"いちじょういっせき", src:"overnight / in a single day", pos:"noun", gender:null,
     note:"一朝一夕. いっちょういっせき with slightly different reading.\nUsed with negative: いちじょういっせきにはいかない = cannot be done overnight.",
     example:"A: にほんごはいちじょういっせきにはじょうたつしません。\nB: まいにちのどりょくがひつようですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: You cannot master Japanese overnight.\nB: Daily effort is needed.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"いちじょういっせき (一朝一夕) is almost always used in negative form: いちじょういっせきにはいかない (cannot happen overnight). It sets realistic expectations. しんらいはいちじょういっせきにはきずけない (trust cannot be built overnight) is a common business wisdom."},

    {type:"fb", s:"{1}のきもちでおきゃくさまをむかえます。\n(We welcome guests with a once-in-a-lifetime mindset.)", a:"いちごいちえ", opts:["いちごいちえ","しんきいってん","いっせきにちょう","しこうさくご"], sSrc:"We welcome guests with a once-in-a-lifetime mindset.",
     hint:"This tea ceremony philosophy treats every encounter as unique and precious."},

    {type:"teach", trg:"ゆうずうむげ", src:"flexibility / adaptability / versatility", pos:"noun", gender:null,
     note:"融通無碍. Complete freedom to adapt.\nゆうずうがきく = to be flexible.",
     example:"A: もっとゆうずうむげなたいおうがひつようです。\nB: マニュアルどおりだけではだめですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: More flexible responses are needed.\nB: Just following the manual is not enough.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"ゆうずうむげ (融通無碍) is a Buddhist term meaning unobstructed adaptability. In business, ゆうずうがきく (to be flexible) is highly valued. The opposite ゆうずうがきかない (inflexible) is criticism. Japanese management philosophy tries to balance きじゅん (standards) with ゆうずう (flexibility)."},

    {type:"teach", trg:"しんしんいってんの", src:"with single-minded devotion", pos:"adj", gender:null,
     note:"真心一点の. Concentrating all sincerity on one point.\nしんしんいってんをこめて = with wholehearted devotion.",
     example:"A: けんきゅうにしんしんいってんでとりくんでいます。\nB: そのじょうねつはすばらしいです。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: I am devoted single-mindedly to research.\nB: That passion is wonderful.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"Japanese culture deeply values しんしん (sincerity/devotion). しんしんこめて (with all sincerity) appears on handwritten cards and gifts. いってん (one point) emphasizes focused dedication rather than scattered effort. The concept connects to いちずに (single-mindedly), another admired quality."},

    {type:"match", pairs:[{trg:"いちごいちえ",src:"once-in-a-lifetime encounter"},{trg:"しこうさくご",src:"trial and error"},{trg:"ぜんじんみとう",src:"unprecedented"},{trg:"じゅうにんといろ",src:"everyone is different"},{trg:"いっせきにちょう",src:"two birds one stone"}],
     hint:"Match each four-character compound with its English meaning."},

    {type:"mc", q:"What does がしんしょうたん describe?", opts:["Enduring deliberate hardship to achieve a long-term goal","A quick and easy solution","Giving up after failure","A comfortable life without struggle"], ans:"Enduring deliberate hardship to achieve a long-term goal",
     hint:"The Chinese king slept on firewood and tasted gall to maintain his motivation."},

    {type:"fb", s:"にほんごは{1}にはじょうたつしません。\n(You cannot master Japanese overnight.)", a:"いちじょういっせき", opts:["いちじょういっせき","いちごいちえ","いっせきにちょう","しんきいってん"], sSrc:"You cannot master Japanese overnight.",
     hint:"This compound literally means 'one morning, one evening' and is used with negative forms."},

    {type:"mc", q:"Where does いちごいちえ come from?", opts:["Tea ceremony philosophy","Martial arts tradition","Buddhist scripture","Modern business theory"], ans:"Tea ceremony philosophy",
     hint:"The great t... master Sen no Rikyu taught this principle of treasuring each gathering."}
  ]
};
export default BATCH8_L1;
