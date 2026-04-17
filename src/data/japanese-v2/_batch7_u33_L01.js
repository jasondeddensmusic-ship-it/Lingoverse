// Batch 7 – Unit 33 (B2.2 Literature): Literary & Poetic Vocabulary
const BATCH7_L1 = {
  id:"jav2_u33l_b7_1", title:"ぶんがくてきひょうげん", icon:"📚", xp:15, board:true,
  steps:[
    {type:"intro", title:"ぶんがくてきひょうげん",
     desc:"Learn literary and poetic vocabulary for understanding Japanese literature, from classical references to modern expressions. These words connect you to Japan's rich written tradition.",
     goals:["Recognize literary and poetic terms","Discuss Japanese literary works and genres","Use elevated vocabulary for artistic expression"]},

    {type:"teach", trg:"ものがたり", src:"story / tale / narrative", pos:"noun", gender:null,
     note:"Kanji: 物語. ものがたるもの = something that tells a story.\nげんじものがたり = The Tale of Genji.",
     example:"A: げんじものがたりをよんだことがありますか？\nB: げんだいごやくでよみました。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Have you read The Tale of Genji?\nB: I read it in modern translation.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"ものがたり (物語) literally means 'thing-telling.' The Tale of Genji (源氏物語), written by Murasaki Shikibu around 1010, is considered the world's first novel. Japanese ものがたり tradition spans 1,000+ years from classical tales to modern manga and light novels. The storytelling impulse is central to Japanese culture."},

    {type:"teach", trg:"はいく", src:"haiku (17-syllable poem)", pos:"noun", gender:null,
     note:"5-7-5 syllable structure. きご = seasonal word.\nまつおばしょう = Matsuo Basho (master poet).",
     example:"A: はいくをつくってみませんか？\nB: ごーしちーごのリズムですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Would you like to try writing haiku?\nB: The 5-7-5 rhythm.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"はいく (俳句) is the world's shortest poetry form. Matsuo Basho's 'furuike ya / kawazu tobikomu / mizu no oto' (old pond / a frog jumps in / sound of water) is the most famous はいく ever written. Japan has amateur はいく clubs nationwide. Even newspapers run daily はいく columns. The form has spread globally."},

    {type:"teach", trg:"たんか", src:"tanka (31-syllable poem)", pos:"noun", gender:null,
     note:"5-7-5-7-7 syllable structure. Older than haiku.\nまんようしゅう = oldest anthology (759 AD).",
     example:"A: まんようしゅうにはよんせんしゅのたんかがあります。\nB: にほんさいこのかしゅうですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: The Manyoshu contains 4,000 tanka poems.\nB: Japan's oldest poetry anthology.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"たんか (短歌) predates haiku by centuries. The 万葉集 (Manyoshu, 759 AD) is Japan's oldest poetry collection. Unlike haiku, たんか allows emotional expression in 31 syllables. Modern たんか poets write about love, loss, and daily life. 新春歌会始め (New Year Poetry Reading) is hosted annually by the Emperor."},

    {type:"teach", trg:"ひゆ", src:"metaphor / figurative expression", pos:"noun", gender:null,
     note:"ひゆてき = metaphorical.\nひゆをつかう = to use a metaphor.",
     example:"A: じんせいはたびだというひゆはゆうめいです。\nB: にほんぶんがくにおおいですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: The metaphor 'life is a journey' is famous.\nB: It appears often in Japanese literature.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"ひゆ (比喩) is central to Japanese poetic tradition. Japanese poetry relies on implied meaning (暗示) rather than direct statement. Cherry blossoms as a ひゆ for life's fleeting beauty, autumn moon for loneliness, flowing water for time's passage. Understanding ひゆ is key to reading Japanese literature."},

    {type:"teach", trg:"もののあわれ", src:"the pathos of things / bittersweet beauty", pos:"noun", gender:null,
     note:"Core Japanese aesthetic concept.\nDefines classical Japanese literary sensibility.",
     example:"A: さくらはもののあわれをかんじさせます。\nB: うつくしいけれどはかないですね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Cherry blossoms evoke mono no aware.\nB: Beautiful yet fleeting.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"もののあわれ (物の哀れ) is Japan's defining aesthetic: the bittersweet awareness of impermanence. Everything beautiful is fleeting, and that knowledge makes it more beautiful. Cherry blossoms falling, autumn leaves changing, seasons passing. This concept, articulated by scholar Motoori Norinaga, permeates all Japanese art."},

    {type:"teach", trg:"さっか", src:"author / novelist / writer", pos:"noun", gender:null,
     note:"しょうせつか = novelist specifically.\nさっかになる = to become a writer.",
     example:"A: すきなさっかはだれですか？\nB: むらかみはるきがすきです。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Who is your favorite author?\nB: I like Murakami Haruki.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"Japan has a rich さっか culture. Two Nobel Prize winners (Kawabata Yasunari, Oe Kenzaburo), plus Murakami Haruki as a perennial Nobel favorite. The 芥川賞 (Akutagawa Prize) and 直木賞 (Naoki Prize) are major literary awards. Japan publishes more books per capita than most countries."},

    {type:"teach", trg:"すいり", src:"mystery / deduction / reasoning", pos:"noun", gender:null,
     note:"すいりしょうせつ = mystery novel.\nめいたんてい = famous detective.",
     example:"A: にほんのすいりしょうせつはにんきがあります。\nB: ひがしのけいごがゆうめいですね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Japanese mystery novels are popular.\nB: Higashino Keigo is famous.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"すいり (推理) fiction is Japan's most popular literary genre. Authors like Higashino Keigo, Miyabe Miyuki, and the classic Edogawa Ranpo (pen name from 'Edgar Allan Poe') are national treasures. Japan has the 本格ミステリ (honkaku mystery, puzzle mystery) tradition emphasizing fair-play clues for the reader."},

    {type:"teach", trg:"ことわざ", src:"proverb / saying", pos:"noun", gender:null,
     note:"にほんのことわざ = Japanese proverbs.\nことわざにあるように = as the proverb says.",
     example:"A: ことわざにあるように「いしのうえにもさんねん」です。\nB: がまんすればせいこうしますね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: As the proverb says, 'three years on a stone.'\nB: If you persevere, you will succeed.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"Japanese ことわざ (諺) number in the thousands. Many come from Chinese classics, Buddhist teachings, or farming wisdom. Famous ones: 七転び八起き (fall 7, rise 8), 猿も木から落ちる (even monkeys fall from trees), 口は災いの元 (the mouth is the source of disaster). ことわざ are regularly tested in school exams."},

    {type:"teach", trg:"よじじゅくご", src:"four-character idiom", pos:"noun", gender:null,
     note:"Chinese-origin set phrases.\nいちごいちえ = one meeting, one chance.",
     example:"A: すきなよじじゅくごはなんですか？\nB: 一期一会です。であいをたいせつにしたいです。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: What is your favorite four-character idiom?\nB: 'Ichigo ichie.' I want to treasure every encounter.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"よじじゅくご (四字熟語) are Chinese-origin four-kanji compounds that express complex ideas concisely. 一期一会 (treasure every encounter), 十人十色 (ten people, ten colors = everyone is different), 七転八起 (fall seven times, rise eight). Students memorize hundreds. New Year calligraphy often features a personal よじじゅくご."},

    {type:"teach", trg:"ふうし", src:"satire / irony", pos:"noun", gender:null,
     note:"ふうしする = to satirize. ふうしてき = satirical.\nせいじふうし = political satire.",
     example:"A: このマンガはしゃかいへのふうしですね。\nB: わらいながらかんがえさせられます。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: This manga is social satire.\nB: It makes you think while laughing.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"ふうし (風刺) has a long Japanese tradition from 狂歌 (kyoka, comic tanka) to modern political cartoons. Manga like Crayon Shin-chan contain subtle ふうし of Japanese society. Japanese ふうし tends to be gentle and indirect compared to Western satire, using humor and absurdity rather than harsh criticism."},

    {type:"teach", trg:"やまとことば", src:"native Japanese words (vs Chinese-origin)", pos:"noun", gender:null,
     note:"Also: わご = native Japanese words.\nOpposite: かんご = Chinese-origin words.",
     example:"A: やまとことばはやわらかいひびきがあります。\nB: かんごはかたいかんじですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Yamato words have a soft sound.\nB: Chinese-origin words feel more formal.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"やまとことば (大和言葉) are the original Japanese words before Chinese influence. They tend to be softer and more emotional: うつくしい vs 美麗, こころ vs 精神, いのち vs 生命. Mixing やまとことば and かんご creates Japanese register variety. Poetry prefers やまとことば for emotional resonance."},

    {type:"teach", trg:"よみがえる", src:"to revive / to come back to life", pos:"verb", gender:null,
     note:"Group 1 verb. Literary/poetic. きおくがよみがえる = memories revive.\nAlso: いきかえる.",
     example:"A: このうたをきくと、むかしのきおくがよみがえります。\nB: なつかしいですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: When I hear this song, old memories revive.\nB: Nostalgic.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"よみがえる (蘇る) is a literary verb meaning 'to return from the underworld.' The kanji 蘇 appears in 蘇我氏 (Soga clan) and suggests renewal from death. In modern usage, it describes vivid recall of memories, revival of traditions, or comeback from failure. It has a more poetic weight than simply 'to recover.'"},

    // Quiz steps
    {type:"mc", q:"げんじものがたり is considered:",
     opts:["The world's first novel (written around 1010)","Japan's first haiku collection","A modern manga series","A historical textbook"],
     ans:"The world's first novel (written around 1010)",
     hint:"W... by Murasaki Shikibu over 1,000 years ago, this is the w...'s earliest full-length n...."},

    {type:"match", pairs:[
      {trg:"はいく", src:"17-syllable poem"},
      {trg:"たんか", src:"31-syllable poem"},
      {trg:"ひゆ", src:"metaphor"},
      {trg:"ことわざ", src:"proverb"},
      {trg:"ふうし", src:"satire"}
    ]},

    {type:"fb", s:"さくらは{1}をかんじさせます。うつくしいけれどはかない。",
     a:["もののあわれ"],
     opts:["もののあわれ","わびさび","いきがい","ことわざ"],
     hint:"The bittersweet awareness of impermanence. Cherry blossoms are the ultimate symbol of this concept.",
     sSrc:"Cherry blossoms evoke {1}. Beautiful yet fleeting."},

    {type:"mc", q:"よじじゅくご are:",
     opts:["Four-character Chinese-origin idioms","Four-line poems","Four-word sentences","Four-part stories"],
     ans:"Four-character Chinese-origin idioms",
     hint:"These compact expressions use exactly f... kanji to convey complex ideas."},

    {type:"fb", s:"すきな{1}はだれですか？むらかみはるきがすきです。",
     a:["さっか"],
     opts:["さっか","はいく","ことわざ","ものがたり"],
     hint:"Who is your favorite writer/author? This noun means 'novelist' or 'author.'",
     sSrc:"Who is your favorite {1}? I like Murakami Haruki."},

    {type:"mc", q:"やまとことば compared to かんご sound:",
     opts:["Softer and more emotional","Harder and more formal","Identical","Louder"],
     ans:"Softer and more emotional",
     hint:"Native Japanese words have a gentler resonance than Chinese-origin formal vocabulary."},

    {type:"match", pairs:[
      {trg:"ものがたり", src:"story/tale"},
      {trg:"もののあわれ", src:"pathos of things"},
      {trg:"さっか", src:"author"},
      {trg:"すいり", src:"mystery"},
      {trg:"よじじゅくご", src:"four-character idiom"}
    ]},

    {type:"fb", s:"このうたをきくと、むかしのきおくが{1}ます。",
     a:["よみがえり"],
     opts:["よみがえり","なつかしくなり","かんどうし","もどり"],
     hint:"Old memories come vividly back to life. This literary verb means 'to revive.'",
     sSrc:"When I hear this song, old memories {1}."}
  ]
};
export default BATCH7_L1;
