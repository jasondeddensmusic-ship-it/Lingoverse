// Unit 26 Batch 2 Lesson 4: 放送(ほうそう)とSNS (Broadcasting & Social Media)
const BATCH2_L_4 = {
  id:"jav2_u26l_b2_4", title:"放送(ほうそう)とSNS", icon:"📺", xp:15, board:true,
  steps:[
    {type:"intro", title:"放送(ほうそう)とSNS",
     desc:"Japanese media landscape spans traditional broadcasting and modern social media. Learn vocabulary for TV programs, online platforms, viral content, and the unique terminology of Japanese internet culture. This vocabulary is essential for understanding contemporary Japanese society.",
     goals:["Use broadcasting and TV vocabulary","Discuss social media in Japanese","Understand Japanese internet culture terms"]},

    {type:"teach", trg:"放送(ほうそう)", src:"broadcast / broadcasting", pos:"noun", gender:null,
     note:"放送(ほうそう)する = to broadcast.\n生(なま)放送(ほうそう) = live broadcast.",
     example:"A: この番組(ばんぐみ)は生(なま)放送(ほうそう)です。\nB: CMなしで放送(ほうそう)されるんですね。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: This program is a live broadcast.\nB: It is broadcast without commercials.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"放送 uses 放(ほう) (release) and 送(そう) (send). NHK (日本(にほん)放送(ほうそう)協会(きょうかい)) is Japan's public broadcaster, funded by viewer fees (受信料(じゅしんりょう)) rather than advertising. This unique funding model has been debated for decades. Japanese broadcasting includes both 地上波(ちじょうは) (terrestrial) and 衛星放送(えいせいほうそう) (satellite) channels."},

    {type:"teach", trg:"番組(ばんぐみ)", src:"program / show (TV/radio)", pos:"noun", gender:null,
     note:"人気(にんき)番組(ばんぐみ) = popular program.\nバラエティー番組(ばんぐみ) = variety show.",
     example:"A: おすすめの番組(ばんぐみ)はありますか？\nB: ドキュメンタリー番組(ばんぐみ)がおもしろいですよ。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Are there any programs you recommend?\nB: Documentary programs are interesting.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"番組 uses 番(ばん) (number/order) and 組(ぐみ) (group/set). Japanese TV is dominated by variety shows (バラエティー) featuring comedian panels, food segments, and travel reports. The ゴールデンタイム (golden time, prime time 7-10 PM) is fiercely competitive. Japanese TV culture has heavily influenced the formats adopted globally, including game show concepts."},

    {type:"teach", trg:"視聴率(しちょうりつ)", src:"viewer rating / audience share", pos:"noun", gender:null,
     note:"視聴率(しちょうりつ)が高(たか)い = high ratings.\nMeasured by Video Research Ltd. in Japan.",
     example:"A: このドラマの視聴率(しちょうりつ)は二十(にじゅう)パーセントを超(こ)えました。\nB: 大ヒットですね。\nA: それは予想外(よそうがい)の結果(けっか)ですね。\nB: はい、私(わたし)も驚(おどろ)きました。原因(げんいん)を調(しら)べています。\nA: いつごろ原因(げんいん)が分(わ)かりそうですか？\nB: 今週中(こんしゅうちゅう)には分析(ぶんせき)結果(けっか)が出(で)る予定(よてい)です。",
     exampleSrc:"A: This drama's viewer rating exceeded 20%.\nB: That is a major hit.\nA: That is an unexpected result.\nB: Yes, I was surprised too. We are investigating the cause.\nA: When do you think you will know the cause?\nB: The analysis results are expected to come out by the end of this week.",
     funFact:"視聴率 uses 視聴(しちょう) (viewing/watching) and 率(りつ) (rate). In Japan, achieving over 20% 視聴率(しちょうりつ) is considered a major success. The measurement system is dominated by Video Research, whose numbers determine advertising rates. The shift to streaming services has complicated 視聴率(しちょうりつ) measurements, but traditional TV ratings remain influential in Japanese media business."},

    {type:"mc", q:"生(なま)放送(ほうそう) means:", opts:["Live broadcast","Recorded broadcast","Repeat broadcast","Emergency broadcast"], ans:"Live broadcast",
     hint:"生(なま) means 'l.../raw/fresh,' combined with the word for broadcasting."},

    {type:"teach", trg:"配信(はいしん)", src:"streaming / distribution (digital content)", pos:"noun", gender:null,
     note:"配信(はいしん)する = to stream/distribute.\n動画(どうが)配信(はいしん) = video streaming.",
     example:"A: 最近(さいきん)はテレビより動画(どうが)配信(はいしん)サービスを見(み)る人(ひと)が増(ふ)えています。\nB: 自分(じぶん)の好(す)きな時間(じかん)に見(み)られますからね。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
     exampleSrc:"A: Recently more people watch streaming services than TV.\nB: Because you can watch at your own preferred time.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
     funFact:"配信 uses 配(はい) (distribute) and 信(しん) (message/information). Japan's streaming market includes Netflix, Amazon Prime, and domestic services like Hulu Japan, U-NEXT, and ABEMA. The Japanese term オンデマンド (on-demand) is used alongside 配信(はいしん). The shift from 放送(ほうそう) to 配信(はいしん) represents one of the biggest changes in Japanese media consumption."},

    {type:"teach", trg:"書(か)き込(こ)み", src:"online comment / post / entry", pos:"noun", gender:null,
     note:"From 書(か)き込(こ)む (to write in). ネットに書(か)き込(こ)む = to post online.\n匿名(いめい)の書(か)き込(こ)み = anonymous posts on forums.",
     example:"A: ネットの書(か)き込(こ)みをすべて信(しん)じてはいけません。\nB: 特(とく)に匿名(とくめい)の書(か)き込(こ)みには注意(ちゅうい)が必要(ひつよう)です。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
     exampleSrc:"A: You should not believe everything posted online.\nB: Anonymous posts especially require caution.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
     funFact:"書き込み comes from 書(か)く (write) + 込(こ)む (put into). Japan has a unique online comment culture, historically centered on 2ちゃんねる (2channel/5channel), one of the world's oldest internet forums. 匿名(とくめい) (anonymous) posting is the norm in Japanese internet culture, which creates both uninhibited discussion and online harassment challenges."},

    {type:"teach", trg:"炎上(えんじょう)", src:"flaming / online backlash / going viral negatively", pos:"noun", gender:null,
     note:"Literally 'catching fire.' 炎上(えんじょう)する = to get flamed.\nSNSで炎上(えんじょう) = backlash on social media.",
     example:"A: あのタレントの発言(はつげん)がSNSで炎上(えんじょう)しています。\nB: 不用意(ふようい)な発言(はつげん)だったようですね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: That celebrity's statement is causing a firestorm on social media.\nB: It seems to have been a careless remark.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"炎上 literally means 'going up in flames.' In Japanese internet culture, it specifically describes the rapid spread of criticism and outrage online. Companies fear SNS炎上(えんじょう) because it can destroy reputations overnight. Japan's hyper-connected society means 炎上(えんじょう) can move from online to mainstream news within hours."},

    {type:"fb", s:"あのタレントの発言(はつげん)がSNSで{1}しています。\n(That celebrity's statement is causing a firestorm on social media.)", a:"炎上(えんじょう)", opts:["炎上(えんじょう)","配信(はいしん)","放送(ほうそう)","書(か)き込(こ)み"], sSrc:"That celebrity's statement is causing a firestorm on social media.",
     hint:"The internet term meaning 'going up in flames,' describing a wave of online criticism."},

    {type:"teach", trg:"発言(はつげん)", src:"statement / remark / utterance", pos:"noun", gender:null,
     note:"発言(はつげん)する = to make a statement.\n問題(もんだい)発言(はつげん) = problematic remark.",
     example:"A: 公開(こうかい)の場(ば)での発言(はつげん)には気(き)をつけましょう。\nB: 一度(いちど)言(い)ったことは消(け)せませんからね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: Let us be careful with statements in public.\nB: Because once said, words cannot be erased.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"発言 uses 発(はつ) (emit/release) and 言(げん) (speak/word). In Japanese politics and business, 発言(はつげん) carries weight. The phrase 発言(はつげん)を撤回(てっかい)する (to retract a statement) is common in press conferences. 問題(もんだい)発言(はつげん) (problematic statement) can end careers, as Japanese public figures face intense scrutiny."},

    {type:"teach", trg:"匿名(とくめい)", src:"anonymous / anonymity", pos:"noun", gender:null,
     note:"匿名性(とくめいせい) = anonymity.\n匿名(とくめい)の書(か)き込(こ)み = anonymous post.",
     example:"A: 匿名性(とくめいせい)がネット上(じょう)の誹謗中傷(ひぼうちゅうしょう)を助長(じょちょう)している。\nB: 実名制(じつめいせい)を強化(きょうか)すべきだという見解(けんかい)もあります。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Anonymity facilitates online defamation.\nB: There are also views that real-name policies should be strengthened.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"匿名 uses 匿(とく) (hide/conceal) and 名(めい) (name). Japan's internet culture has deep roots in 匿名性(とくめいせい). Unlike Facebook (which requires real names), Japanese platforms like 2ちゃんねる and Twitter (now X) thrived on anonymity. This creates a unique tension: 匿名(とくめい) enables honest discussion but also enables cyberbullying."},

    {type:"mc", q:"配信(はいしん) differs from 放送(ほうそう) in that:", opts:["配信(はいしん) is only for music","配信(はいしん) is digital on-demand, 放送(ほうそう) is traditional broadcast","They are exactly the same","配信(はいしん) is radio, 放送(ほうそう) is TV"], ans:"配信(はいしん) is digital on-demand, 放送(ほうそう) is traditional broadcast",
     hint:"One is the t... sending of content over airwaves, the other is d... distribution."},

    {type:"teach", trg:"誹謗中傷(ひぼうちゅうしょう)", src:"defamation / slander / libel", pos:"noun", gender:null,
     note:"ネット上(じょう)の誹謗中傷(ひぼうちゅうしょう) = online defamation.\nA serious legal and social issue in Japan.",
     example:"A: ネット上(じょう)の誹謗中傷(ひぼうちゅうしょう)は法律(ほうりつ)で罰(ばっ)せられます。\nB: SNSの使(つか)い方(かた)に気(き)をつけなければなりませんね。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Online defamation is punishable by law.\nB: We must be careful about how we use social media.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"誹謗中傷 is a four-kanji compound: 誹(ひ) (slander), 謗(ぼう) (defame), 中(ちゅう) (hit), 傷(しょう) (wound). After the tragic death of a reality TV star due to online harassment in 2020, Japan strengthened laws against 誹謗中傷(ひぼうちゅうしょう). The Penal Code now includes harsher penalties for online insults, and victims can more easily obtain poster identification through court orders."},

    {type:"fb", s:"ネット上(じょう)の{1}は法律(ほうりつ)で罰(ばっ)せられます。\n(Online defamation is punishable by law.)", a:"誹謗中傷(ひぼうちゅうしょう)", opts:["誹謗中傷(ひぼうちゅうしょう)","炎上(えんじょう)","書(か)き込(こ)み","発言(はつげん)"], sSrc:"Online defamation is punishable by law.",
     hint:"The legal term for harmful speech that damages someone's reputation."},

    {type:"match", pairs:[{trg:"放送(ほうそう)",src:"broadcast"},{trg:"配信(はいしん)",src:"streaming"},{trg:"視聴率(しちょうりつ)",src:"viewer rating"},{trg:"炎上(えんじょう)",src:"online firestorm"},{trg:"番組(ばんぐみ)",src:"program / show (TV/radio)"}]},

    {type:"fb", s:"このドラマの{1}は二十(にじゅう)パーセントを超(こ)えました。\n(This drama's viewer rating exceeded 20%.)", a:"視聴率(しちょうりつ)", opts:["視聴率(しちょうりつ)","番組(ばんぐみ)","放送(ほうそう)","配信(はいしん)"], sSrc:"This drama's viewer rating exceeded 20%.",
     hint:"The noun for the numerical measure of how many people watch a program."},

    {type:"match", pairs:[{trg:"書(か)き込(こ)み",src:"online comment"},{trg:"匿名(とくめい)",src:"anonymous"},{trg:"発言(はつげん)",src:"statement"},{trg:"誹謗中傷(ひぼうちゅうしょう)",src:"defamation"}]},

    {type:"mc", q:"Japan strengthened online defamation laws after:", opts:["A newspaper lawsuit","A corporate scandal","The death of a reality TV star due to cyberbullying","A government data breach"], ans:"The death of a reality TV star due to cyberbullying",
     hint:"This tragic 2020 event led to legal reforms making online insults more harshly punishable."}]
};
export default BATCH2_L_4;
