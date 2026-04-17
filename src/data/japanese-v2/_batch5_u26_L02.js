// Unit 26 Batch 5 Lesson 2: メディアリテラシー (Media Literacy & Critical Thinking)
const BATCH5_L_2 = {
  id:"jav2_u26l_b5_2", title:"メディアリテラシー", icon:"🧐", xp:15, board:true,
  steps:[
    {type:"intro", title:"メディアリテラシー",
     desc:"In an age of information overload, critical evaluation of media is essential. Learn vocabulary for analyzing sources, identifying bias, and distinguishing fact from opinion. These skills and their Japanese vocabulary are increasingly tested on JLPT N2 and are vital for informed citizenship.",
     goals:["Discuss reliability of information sources","Distinguish facts from opinions in Japanese","Use vocabulary for critical media analysis"]},

    {type:"teach", trg:"しんらいせい", src:"reliability / credibility / trustworthiness", pos:"noun", gender:null,
     note:"Kanji: 信頼性. しんらい (trust) + せい (-ness/quality).\nじょうほうのしんらいせい = reliability of information.",
     example:"A: インターネットじょうほうのしんらいせいをかくにんすることがだいじです。\nB: できげんやしゅっしょをチェックすべきですね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
     exampleSrc:"A: It is important to verify the reliability of internet information.\nB: We should check sources and origins.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
     funFact:"信頼性 became a buzzword as フェイクニュース (fake news) spread globally. 信 (believe) + 頼 (rely) + 性 (nature) = the quality of being trustworthy. Japanese education now includes メディアリテラシー classes teaching students to evaluate しんらいせい. The distinction between しんらいできるじょうほうげん (reliable sources) and あやしいじょうほう (dubious information) is increasingly important."},

    {type:"teach", trg:"じじつ", src:"fact / truth / reality", pos:"noun", gender:null,
     note:"Kanji: 事実. じじつかくにん = fact-checking.\nじじつにもとづく = based on facts.",
     example:"A: じじつといけんをくべつすることがたいせつです。\nB: じじつはデータでしょうめいできますね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
     exampleSrc:"A: It is important to distinguish facts from opinions.\nB: Facts can be proven with data.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
     funFact:"事実 uses 事 (matter) and 実 (truth/fruit). Distinguishing じじつ from いけん (opinion) is a core critical thinking skill. Japanese media sometimes blurs this line. ファクトチェック (fact-checking) organizations are growing in Japan. The phrase 事実無根 (jijitsu mukon, baseless/without factual basis) is used to deny false claims."},

    {type:"teach", trg:"フェイクニュース", src:"fake news / disinformation", pos:"noun", gender:null,
     note:"Loanword from English. にせじょうほう = false information (Japanese equivalent).\nSNSでひろがるフェイクニュース = fake news spreading on social media.",
     example:"A: フェイクニュースにだまされないようにしましょう。\nB: じょうほうげんをかくにんするしゅうかんをつけましょう。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
     exampleSrc:"A: Let us not be deceived by fake news.\nB: Let us develop the habit of checking information sources.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
     funFact:"フェイクニュース entered Japanese directly from English. Japan has experienced several viral フェイクニュース incidents, particularly during disasters when false rumors spread via SNS. The government and media organizations now actively combat にせじょうほう (false information). During earthquakes, NHK repeatedly warns viewers to check official sources and not spread unconfirmed reports."},

    {type:"teach", trg:"きゃっかんてき", src:"objective / impartial", pos:"adj", gender:null,
     note:"な-adjective. Kanji: 客観的. Opposite: しゅかんてき (subjective).\nきゃっかんてきなじじつ = objective facts.",
     example:"A: きゃっかんてきにはんだんすることがだいじです。\nB: かんじょうにながされないようにしましょう。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: It is important to judge objectively.\nB: Let us not be swayed by emotions.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"客観的 uses 客 (guest/objective) and 観 (view/observe). The concept of きゃっかんせい (objectivity) is valued in Japanese journalism and academia. News reports strive for きゃっかんてき reporting. However, true objectivity is debated: some argue all reporting involves しゅかんてき (subjective) choices about what to include and how to frame it."},

    {type:"mc", q:"じじつといけんをくべつする means:", opts:["To distinguish facts from opinions","To agree with opinions","To create new facts","To ignore all opinions"], ans:"To distinguish facts from opinions",
     hint:"くべつする means 'to d.../differentiate,' applied to f... vs. o...."},

    {type:"teach", trg:"じょうほうげん", src:"information source", pos:"noun", gender:null,
     note:"Kanji: 情報源. じょうほう (information) + げん (source/origin).\nしんらいできるじょうほうげん = reliable source.",
     example:"A: ふくすうのじょうほうげんをかくにんすることをおすすめします。\nB: ひとつのきじだけをしんじるのはきけんですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: I recommend checking multiple information sources.\nB: Believing only one article is dangerous.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"情報源 is critical in journalism. 源 means 'source/spring,' the same kanji in 温泉 (onsen, hot spring). Protecting じょうほうげん (source confidentiality) is a journalistic principle. Japanese reporters sometimes go to prison rather than reveal their sources. The phrase 情報源の秘匿 (jouhougen no hitoku, source concealment) is a hot topic in media ethics."},

    {type:"teach", trg:"うのみにする", src:"to swallow whole / to believe uncritically", pos:"verb", gender:null,
     note:"う (cormorant) + のみ (swallowing) + にする. Cormorants swallow fish whole without chewing.\nA vivid metaphor for uncritical acceptance.",
     example:"A: ネットのじょうほうをうのみにしてはいけません。\nB: じぶんでかくにんするしゅうかんがだいじですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: You must not swallow internet information uncritically.\nB: The habit of verifying for yourself is important.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"鵜呑みにする comes from cormorant fishing (鵜飼い ukai), a traditional Japanese method where trained cormorants catch fish and swallow them whole. The metaphor is perfect: accepting information without 'chewing' (thinking critically). This expression has gained new relevance in the digital age. Teachers warn students: ネットじょうほうをうのみにしない (do not swallow internet info uncritically)."},

    {type:"teach", trg:"くべつ", src:"distinction / differentiation / telling apart", pos:"noun", gender:null,
     note:"Kanji: 区別. くべつする = to distinguish/differentiate.\nしゅかんときゃっかんのくべつ = distinction between subjective and objective.",
     example:"A: こうこくとニュースのくべつがむずかしいことがあります。\nB: ステルスマーケティングというもんだいですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: Sometimes it is difficult to distinguish advertising from news.\nB: That is the problem of stealth marketing.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"区別 uses 区 (ward/section) and 別 (separate/different). Making くべつ is a core intellectual skill. In media literacy, key distinctions include: じじつ vs. いけん (fact vs. opinion), ニュース vs. こうこく (news vs. advertising), いちじじょうほう vs. にじじょうほう (primary vs. secondary information). Japanese education is increasingly focused on teaching these くべつ skills."},

    {type:"tip", title:"Media Literacy Skills in Japanese",
     text:"Question to ask:\nだれがかいた？ = Who wrote it?\nなぜかいた？ = Why was it written?\nこんきょはなに？ = What is the evidence?\nべつのみかたは？ = Is there another perspective?\n\nRed flags:\nじょうほうげんがあいまい = vague sources\nかんじょうてきなことば = emotional language\nかたよったみかた = one-sided view\nかくにんできないデータ = unverifiable data\n\nGood practices:\nふくすうのじょうほうげん = multiple sources\nいちじじょうほう = primary sources\nきゃっかんてきなデータ = objective data"},

    {type:"teach", trg:"ろんそう", src:"controversy / debate / dispute", pos:"noun", gender:null,
     note:"Kanji: 論争. ろんそうをよぶ = to spark controversy.\nIntellectual or public debate on important issues.",
     example:"A: このもんだいはおおきなろんそうをよんでいます。\nB: さまざまないけんがたいりつしていますね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: This issue is sparking a major controversy.\nB: Various opinions are clashing.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"論争 uses 論 (theory/argument) and 争 (compete/dispute). Japan has had notable ろんそう on topics like constitutional revision, nuclear energy, and historical issues. Academic ろんそう (scholarly debate) is more structured and polite than public ろんそう. The media often frames issues as ろんそう to generate reader interest."},

    {type:"teach", trg:"たいりつ", src:"confrontation / opposition / conflict", pos:"noun", gender:null,
     note:"Kanji: 対立. たいりつする = to confront/oppose.\nいけんのたいりつ = conflict of opinions.",
     example:"A: よとうとやとうのたいりつがはげしくなっています。\nB: せんきょがちかいですからね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: The confrontation between the ruling and opposition parties is intensifying.\nB: It is because the election is approaching.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"対立 uses 対 (against/pair) and 立 (stand). Two things 'standing against' each other. Japanese politics features たいりつ between よとう (ruling party) and やとう (opposition). However, Japanese culture generally prefers わ (harmony) over たいりつ. The tension between these values shapes political discourse: strong opinions exist but are often expressed indirectly."},

    {type:"fb", s:"じょうほうをうのみに{1}はいけません。\n(You must not swallow information uncritically.)", a:"して", opts:["して","する","され","した"], sSrc:"You must not swallow information uncritically.",
     hint:"The て-form of する, needed before はいけません (must not)."},

    {type:"mc", q:"きゃっかんてき is the opposite of:", opts:["しゅかんてき (subjective)","ろんりてき (logical)","きほんてき (basic)","ぐたいてき (concrete)"], ans:"しゅかんてき (subjective)",
     hint:"Objective (based on external facts) vs. s... (based on personal feelings/views)."},

    {type:"match", pairs:[{trg:"しんらいせい",src:"reliability"},{trg:"じじつ",src:"fact"},{trg:"フェイクニュース",src:"fake news"},{trg:"きゃっかんてき",src:"objective"}]},

    {type:"fb", s:"ふくすうの{1}をかくにんしましょう。\n(Let us check multiple information sources.)", a:"じょうほうげん", opts:["じょうほうげん","じょうほう","きじ","しゅちょう"], sSrc:"Let us check multiple information sources.",
     hint:"The compound meaning 'information source,' combining じょうほう with the kanji for origin/spring."},

    {type:"mc", q:"うのみにする literally comes from:", opts:["A cormorant swallowing fish whole","A person drinking water","A bird singing","A dog fetching"], ans:"A cormorant swallowing fish whole",
     hint:"The metaphor compares uncritical acceptance to how cormorants gulp f... without chewing."}
  ]
};
export default BATCH5_L_2;
