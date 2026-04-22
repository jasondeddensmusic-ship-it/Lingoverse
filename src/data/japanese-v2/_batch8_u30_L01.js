// Batch 8 – Unit 30 (B2.3 Philosophy): Four-Character Compounds (Yojijukugo)
const BATCH8_L1 = {
  id:"jav2_u30l_b8_1", title:"四字熟語(よじじゅくご)", icon:"🧠", xp:15, board:true,
  steps:[
    {type:"intro", title:"四字熟語(よじじゅくご)",
     desc:"Master four-character compound words (yojijukugo) that pack profound meaning into four kanji. These appear in speeches, writing, and daily conversation as cultural wisdom.",
     goals:["Understand and use common yojijukugo","Recognize philosophical concepts in four characters","Apply yojijukugo in appropriate contexts"]},

    {type:"teach", trg:"一期一会(いちごいちえ)", src:"once-in-a-lifetime encounter", pos:"noun", gender:null,
     note:"一期一会. From tea ceremony philosophy.\nTreat every meeting as unique and precious.",
     example:"A: 一期一会(いちごいちえ)の気持(きも)ちでお客(きゃく)さまを迎(むか)えます。\nB: 素晴(すば)らしい姿勢(しせい)ですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: We welcome guests with a once-in-a-lifetime mindset.\nB: That is a wonderful attitude.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"一期一会(いちごいちえ) comes from 茶道(さどう) (tea ceremony) master 千(せん)の利休(りきゅう). Each tea gathering is unique and unrepeatable, so pour your whole heart into it. This philosophy extends to all human encounters. Japanese hotels, restaurants, and businesses often cite 一期一会(いちごいちえ) as their service philosophy."},

    {type:"teach", trg:"心機一転(しんきいってん)", src:"turning over a new leaf / fresh start", pos:"noun", gender:null,
     note:"心機一転. 心(こころ) (heart) + 機(き) (machine/momentum) + 一転(いってん) (one turn).\nUsed at New Year, job changes, etc.",
     example:"A: 心機一転(しんきいってん)頑張(がんば)ります。\nB: 新(あたら)しいスタートですね。応援(おうえん)しています。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: I will start fresh and do my best.\nB: A new start. I am cheering you on.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"心機一転(しんきいってん) is used at life transitions: new jobs, new schools, New Year, moving to a new city. It implies changing your mental state (心機(しんき)) with one rotation (一転(いってん)). Japanese spring (四月(しがつ)) is the season of 心機一転(しんきいってん) because the school and fiscal year both start then."},

    {type:"teach", trg:"十人十色(じゅうにんといろ)", src:"ten people, ten colors (everyone is different)", pos:"noun", gender:null,
     note:"十人十色. Each person has their own way.\nUsed to acknowledge diversity of opinions.",
     example:"A: みんなの意見(いけん)が違(ちが)いますね。\nB: 十人十色(じゅうにんといろ)ですから。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Everyone's opinions are different.\nB: Because everyone is unique.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"十人十色(じゅうにんといろ) is the Japanese equivalent of 'different strokes for different folks.' It acknowledges that diversity is natural. In a culture that values group harmony, this phrase provides space for individual differences. It is one of the first 四字熟語(よじじゅくご) children learn."},

    {type:"teach", trg:"四捨五入(ししゃごにゅう)", src:"rounding off / rounding (numbers)", pos:"noun", gender:null,
     note:"四捨五入. Discard 4 and below, round up 5 and above.\nMath term used metaphorically.",
     example:"A: 四捨五入(ししゃごにゅう)すると100になります。\nB: そうですね。98を四捨五入(ししゃごにゅう)ですね。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: If we round off, it becomes 100.\nB: Right. Rounding 98.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"四捨五入(ししゃごにゅう) literally means 'discard four, accept five.' It is the standard rounding rule taught in Japanese math class. Metaphorically, it means simplifying: 細(こま)かいことは四捨五入(ししゃごにゅう)して (rounding off the details). It is one of the few mathematical 四字熟語(よじじゅくご)."},

    {type:"teach", trg:"一石二鳥(いっせきにちょう)", src:"killing two birds with one stone", pos:"noun", gender:null,
     note:"一石二鳥. One stone, two birds.\nSame metaphor as the English proverb.",
     example:"A: 運動(うんどう)しながら日本語(にほんご)のポッドキャストを聞(き)くのは一石二鳥(いっせきにちょう)です。\nB: 時間(じかん)を有効(ゆうこう)に使(つか)っていますね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: Listening to a Japanese podcast while exercising is killing two birds with one stone.\nB: You are using time effectively.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"一石二鳥(いっせきにちょう) is one of the few 四字熟語(よじじゅくご) directly equivalent to an English proverb. It was actually borrowed from the English 'kill two birds with one stone' during the Meiji era. Japanese has a native equivalent: 一挙両得(いっきょりょうとく) (one action, two gains)."},

    {type:"mc", q:"What does 一期一会(いちごいちえ) mean?", opts:["Treasure each encounter as once-in-a-lifetime","One lesson per day","One chance in a hundred","First meeting greetings"], ans:"Treasure each encounter as once-in-a-lifetime",
     hint:"This tea ceremony philosophy asks you to treat every meeting as unique and unrepeatable."},

    {type:"teach", trg:"他力本願(たりきほんがん)", src:"relying on others / depending on external help", pos:"noun", gender:null,
     note:"他力本願. Buddhist origin. Opposite: 自力本願(じりきほんがん) (self-reliance).\nOften used negatively.",
     example:"A: 他力本願(たりきほんがん)では成功(せいこう)しません。\nB: 自分(じぶん)で努力(どりょく)しなければなりませんね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: You will not succeed by relying on others.\nB: You must make the effort yourself.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"他力本願(たりきほんがん) originally means relying on Amida Buddha's power for salvation in Pure Land Buddhism. In modern usage, it means passively depending on others, usually negative. The Buddhist meaning is actually positive: accepting that some things are beyond personal control. This shift in meaning frustrates Buddhist scholars."},

    {type:"teach", trg:"前人未踏(ぜんじんみとう)", src:"unprecedented / never done before", pos:"noun", gender:null,
     note:"前人未踏. No person has ever set foot there before.\nUsed for groundbreaking achievements.",
     example:"A: 前人未踏(ぜんじんみとう)の記録(きろく)を達成(たっせい)しました。\nB: 歴史的(れきしてき)な瞬間(しゅんかん)ですね。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: An unprecedented record was achieved.\nB: It is a historic moment.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"前人未踏(ぜんじんみとう) literally means 'no previous person has trod.' It describes achievements no one has accomplished before. Sports commentators use it for record-breaking moments. Scientists use it for discoveries. It carries a sense of heroic pioneering that makes listeners feel inspired."},

    {type:"teach", trg:"臥薪嘗胆(がしんしょうたん)", src:"enduring hardship to achieve a goal", pos:"noun", gender:null,
     note:"臥薪嘗胆. Sleep on firewood and taste gall.\nFrom a Chinese story of revenge through suffering.",
     example:"A: 臥薪嘗胆(がしんしょうたん)の末(すえ)、ようやく成功(せいこう)しました。\nB: 長(なが)い努力(どりょく)が実(みの)りましたね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: After enduring great hardship, I finally succeeded.\nB: Your long effort bore fruit.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"臥薪嘗胆(がしんしょうたん) comes from a Chinese king who slept on firewood and tasted bitter gall daily to never forget his humiliation and motivation for revenge. In Japanese, it means enduring deliberate hardship to achieve a long-term goal. Athletes, entrepreneurs, and students use it to describe their perseverance."},

    {type:"teach", trg:"試行錯誤(しこうさくご)", src:"trial and error", pos:"noun", gender:null,
     note:"試行錯誤. 試行(しこう) (trial) + 錯誤(さくご) (error).\n試行錯誤(しこうさくご)を繰(く)り返(かえ)す = to repeat trial and error.",
     example:"A: 試行錯誤(しこうさくご)の末(すえ)に解決策(かいけつさく)を見(み)つけました。\nB: 諦(あきら)めなくてよかったですね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: After trial and error, I found a solution.\nB: It is good that you did not give up.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"試行錯誤(しこうさくご) is beloved in Japanese business and education. It implies learning through failure, which aligns with 改善(かいぜん) (continuous improvement) philosophy. Startup culture embraces 試行錯誤(しこうさくご). The phrase 試行錯誤(しこうさくご)を恐(おそ)れるな (do not fear trial and error) encourages risk-taking."},

    {type:"teach", trg:"一朝一夕(いちじょういっせき)", src:"overnight / in a single day", pos:"noun", gender:null,
     note:"一朝一夕. Used with negative: 一朝一夕(いちじょういっせき)にはいかない = cannot be done overnight.",
     example:"A: 日本語(にほんご)は一朝一夕(いちじょういっせき)には上達(じょうたつ)しません。\nB: 毎日(まいにち)の努力(どりょく)が必要(ひつよう)ですね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: You cannot master Japanese overnight.\nB: Daily effort is needed.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"一朝一夕(いちじょういっせき) is almost always used in negative form: 一朝一夕(いちじょういっせき)にはいかない (cannot happen overnight). It sets realistic expectations. 信頼(しんらい)は一朝一夕(いちじょういっせき)には築(きず)けない (trust cannot be built overnight) is a common business wisdom."},

    {type:"fb", s:"{1}の気持(きも)ちでお客(きゃく)さまを迎(むか)えます。\n(We welcome guests with a once-in-a-lifetime mindset.)", a:"一期一会(いちごいちえ)", opts:["一期一会(いちごいちえ)","心機一転(しんきいってん)","一石二鳥(いっせきにちょう)","試行錯誤(しこうさくご)"], sSrc:"We welcome guests with a once-in-a-lifetime mindset.",
     hint:"This tea ceremony philosophy treats every encounter as unique and precious."},

    {type:"teach", trg:"融通無碍(ゆうずうむげ)", src:"flexibility / adaptability / versatility", pos:"noun", gender:null,
     note:"融通無碍. Complete freedom to adapt.\n融通(ゆうずう)がきく = to be flexible.",
     example:"A: もっと融通無碍(ゆうずうむげ)な対応(たいおう)が必要(ひつよう)です。\nB: マニュアルどおりだけではだめですね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: More flexible responses are needed.\nB: Just following the manual is not enough.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"融通無碍(ゆうずうむげ) is a Buddhist term meaning unobstructed adaptability. In business, 融通(ゆうずう)がきく (to be flexible) is highly valued. The opposite 融通(ゆうずう)がきかない (inflexible) is criticism. Japanese management philosophy tries to balance 基準(きじゅん) (standards) with 融通(ゆうずう) (flexibility)."},

    {type:"teach", trg:"真心一点(しんしんいってん)の", src:"with single-minded devotion", pos:"adj", gender:null,
     note:"真心一点の. Concentrating all sincerity on one point.\n真心(しんしん)一点(いってん)をこめて = with wholehearted devotion.",
     example:"A: 研究(けんきゅう)に真心一点(しんしんいってん)で取(と)り組(く)んでいます。\nB: その情熱(じょうねつ)は素晴(すば)らしいです。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: I am devoted single-mindedly to research.\nB: That passion is wonderful.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"Japanese culture deeply values 真心(しんしん) (sincerity/devotion). 真心(しんしん)をこめて (with all sincerity) appears on handwritten cards and gifts. 一点(いってん) (one point) emphasizes focused dedication rather than scattered effort. The concept connects to 一途(いちず)に (single-mindedly), another admired quality."},

    {type:"match", pairs:[{trg:"一期一会(いちごいちえ)",src:"once-in-a-lifetime encounter"},{trg:"試行錯誤(しこうさくご)",src:"trial and error"},{trg:"前人未踏(ぜんじんみとう)",src:"unprecedented"},{trg:"十人十色(じゅうにんといろ)",src:"everyone is different"},{trg:"一石二鳥(いっせきにちょう)",src:"two birds one stone"}],
     hint:"Match each four-character compound with its English meaning."},

    {type:"mc", q:"What does 臥薪嘗胆(がしんしょうたん) describe?", opts:["A comfortable life without struggle","Enduring deliberate hardship to achieve a long-term goal","A quick and easy solution","Giving up after failure"], ans:"Enduring deliberate hardship to achieve a long-term goal",
     hint:"The Chinese king slept on firewood and tasted gall to maintain his motivation."},

    {type:"fb", s:"日本語(にほんご)は{1}には上達(じょうたつ)しません。\n(You cannot master Japanese overnight.)", a:"一朝一夕(いちじょういっせき)", opts:["一朝一夕(いちじょういっせき)","一期一会(いちごいちえ)","一石二鳥(いっせきにちょう)","心機一転(しんきいってん)"], sSrc:"You cannot master Japanese overnight.",
     hint:"This compound literally means 'one morning, one evening' and is used with negative forms."},

    {type:"mc", q:"Where does 一期一会(いちごいちえ) come from?", opts:["Buddhist scripture","Modern business theory","Tea ceremony philosophy","Martial arts tradition"], ans:"Tea ceremony philosophy",
     hint:"The great t... master Sen no Rikyu taught this principle of treasuring each gathering."}
  ,{type:"match",pairs:[{trg:"心機一転(しんきいってん)",src:"turning over a new leaf / fresh start"},{trg:"四捨五入(ししゃごにゅう)",src:"rounding off / rounding (numbers)"},{trg:"他力本願(たりきほんがん)",src:"relying on others / depending on external help"},{trg:"臥薪嘗胆(がしんしょうたん)",src:"enduring hardship to achieve a goal"},{trg:"融通無碍(ゆうずうむげ)",src:"flexibility / adaptability / versatility"},{trg:"真心一点(しんしんいってん)の",src:"with single-minded devotion"}]}]
};
export default BATCH8_L1;
