// Batch 7 – Unit 33 (B2.2 Literature): Literary & Poetic Vocabulary
const BATCH7_L1 = {
  id:"jav2_u33l_b7_1", title:"文学的表現(ぶんがくてきひょうげん)", icon:"📚", xp:15, board:true,
  steps:[
    {type:"intro", title:"文学的表現(ぶんがくてきひょうげん)",
     desc:"Learn literary and poetic vocabulary for understanding Japanese literature, from classical references to modern expressions. These words connect you to Japan's rich written tradition.",
     goals:["Recognize literary and poetic terms","Discuss Japanese literary works and genres","Use elevated vocabulary for artistic expression"]},

    {type:"teach", trg:"物語(ものがたり)", src:"story / tale / narrative", pos:"noun", gender:null,
     note:"物語(ものがたり)るもの = something that tells a story.\n源氏物語(げんじものがたり) = The Tale of Genji.",
     example:"A: 源氏物語(げんじものがたり)を読(よ)んだことがありますか？\nB: 現代語訳(げんだいごやく)で読(よ)みました。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
     exampleSrc:"A: Have you read The Tale of Genji?\nB: I read it in modern translation.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
     funFact:"物語(ものがたり) literally means 'thing-telling.' The Tale of Genji (源氏物語(げんじものがたり)), written by Murasaki Shikibu around 1010, is considered the world's first novel. Japanese 物語(ものがたり) tradition spans 1,000+ years from classical tales to modern manga and light novels. The storytelling impulse is central to Japanese culture."},

    {type:"teach", trg:"俳句(はいく)", src:"haiku (17-syllable poem)", pos:"noun", gender:null,
     note:"5-7-5 syllable structure. 季語(きご) = seasonal word.\n松尾芭蕉(まつおばしょう) = Matsuo Basho (master poet).",
     example:"A: 俳句(はいく)を作(つく)ってみませんか？\nB: 五(ご)・七(しち)・五(ご)のリズムですね。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
     exampleSrc:"A: Would you like to try writing haiku?\nB: The 5-7-5 rhythm.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
     funFact:"俳句(はいく) is the world's shortest poetry form. Matsuo Basho's 'ふるいけや / かわずとびこむ / みずのおと' (old pond / a frog jumps in / sound of water) is the most famous 俳句(はいく) ever written. Japan has amateur 俳句(はいく) clubs nationwide. Even newspapers run daily 俳句(はいく) columns. The form has spread globally."},

    {type:"teach", trg:"短歌(たんか)", src:"tanka (31-syllable poem)", pos:"noun", gender:null,
     note:"5-7-5-7-7 syllable structure. Older than haiku.\n万葉集(まんようしゅう) = oldest anthology (759 AD).",
     example:"A: 万葉集(まんようしゅう)には四千首(よんせんしゅ)の短歌(たんか)があります。\nB: 日本(にほん)最古(さいこ)の歌集(かしゅう)ですね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
     exampleSrc:"A: The Manyoshu contains 4,000 tanka poems.\nB: Japan's oldest poetry anthology.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
     funFact:"短歌(たんか) predates haiku by centuries. The 万葉集(まんようしゅう) (759 AD) is Japan's oldest poetry collection. Unlike 俳句(はいく), 短歌(たんか) allows emotional expression in 31 syllables. Modern 短歌(たんか) poets write about love, loss, and daily life. 新春歌会始(しんしゅんうたかいはじ)め (New Year Poetry Reading) is hosted annually by the Emperor."},

    {type:"teach", trg:"比喩(ひゆ)", src:"metaphor / figurative expression", pos:"noun", gender:null,
     note:"比喩的(ひゆてき) = metaphorical.\n比喩(ひゆ)を使(つか)う = to use a metaphor.",
     example:"A: 人生(じんせい)は旅(たび)だという比喩(ひゆ)は有名(ゆうめい)です。\nB: 日本(にほん)文学(ぶんがく)に多(おお)いですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: The metaphor 'life is a journey' is famous.\nB: It appears often in Japanese literature.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"比喩(ひゆ) is central to Japanese poetic tradition. Japanese poetry relies on implied meaning (暗示(あんじ)) rather than direct statement. Cherry blossoms as a 比喩(ひゆ) for life's fleeting beauty, autumn moon for loneliness, flowing water for time's passage. Understanding 比喩(ひゆ) is key to reading Japanese literature."},

    {type:"teach", trg:"物の哀(もののあわ)れ", src:"the pathos of things / bittersweet beauty", pos:"noun", gender:null,
     note:"Core Japanese aesthetic concept.\nDefines classical Japanese literary sensibility.",
     example:"A: 桜(さくら)は物(もの)の哀(あわ)れを感(かん)じさせます。\nB: 美(うつく)しいけれど儚(はかな)いですね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: Cherry blossoms evoke mono no aware.\nB: Beautiful yet fleeting.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"物の哀(もののあわ)れ is Japan's defining aesthetic: the bittersweet awareness of impermanence. Everything beautiful is fleeting, and that knowledge makes it more beautiful. Cherry blossoms falling, autumn leaves changing, seasons passing. This concept, articulated by scholar Motoori Norinaga, permeates all Japanese art."},

    {type:"teach", trg:"作家(さっか)", src:"author / novelist / writer", pos:"noun", gender:null,
     note:"小説家(しょうせつか) = novelist specifically.\n作家(さっか)になる = to become a writer.",
     example:"A: 好(す)きな作家(さっか)は誰(だれ)ですか？\nB: 村上春樹(むらかみはるき)が好(す)きです。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Who is your favorite author?\nB: I like Murakami Haruki.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"Japan has a rich 作家(さっか) culture. Two Nobel Prize winners (Kawabata Yasunari, Oe Kenzaburo), plus Murakami Haruki as a perennial Nobel favorite. The 芥川賞(あくたがわしょう) (Akutagawa Prize) and 直木賞(なおきしょう) (Naoki Prize) are major literary awards. Japan publishes more books per capita than most countries."},

    {type:"teach", trg:"推理(すいり)", src:"mystery / deduction / reasoning", pos:"noun", gender:null,
     note:"推理小説(すいりしょうせつ) = mystery novel.\n名探偵(めいたんてい) = famous detective.",
     example:"A: 日本(にほん)の推理小説(すいりしょうせつ)は人気(にんき)があります。\nB: 東野圭吾(ひがしのけいご)が有名(ゆうめい)ですね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Japanese mystery novels are popular.\nB: Higashino Keigo is famous.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"推理(すいり) fiction is Japan's most popular literary genre. Authors like Higashino Keigo, Miyabe Miyuki, and the classic Edogawa Ranpo (pen name from 'Edgar Allan Poe') are national treasures. Japan has the 本格(ほんかく)ミステリ (honkaku mystery, puzzle mystery) tradition emphasizing fair-play clues for the reader."},

    {type:"teach", trg:"諺(ことわざ)", src:"proverb / saying", pos:"noun", gender:null,
     note:"日本(にほん)の諺(ことわざ) = Japanese proverbs.\n諺(ことわざ)にあるように = as the proverb says.",
     example:"A: 諺(ことわざ)にあるように「石(いし)の上(うえ)にも三年(さんねん)」です。\nB: 我慢(がまん)すれば成功(せいこう)しますね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: As the proverb says, 'three years on a stone.'\nB: If you persevere, you will succeed.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"Japanese 諺(ことわざ) number in the thousands. Many come from Chinese classics, Buddhist teachings, or farming wisdom. Famous ones: 七転(ななころ)び八起(やお)き (fall 7, rise 8), 猿(さる)も木(き)から落(お)ちる (even monkeys fall from trees), 口(くち)は災(わざわ)いの元(もと) (the mouth is the source of disaster). 諺(ことわざ) are regularly tested in school exams."},

    {type:"teach", trg:"四字熟語(よじじゅくご)", src:"four-character idiom", pos:"noun", gender:null,
     note:"Chinese-origin set phrases.\n一期一会(いちごいちえ) = one meeting, one chance.",
     example:"A: 好(す)きな四字熟語(よじじゅくご)は何(なん)ですか？\nB: 一期一会(いちごいちえ)です。出会(であ)いを大切(たいせつ)にしたいです。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: What is your favorite four-character idiom?\nB: 'Ichigo ichie.' I want to treasure every encounter.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"四字熟語(よじじゅくご) are Chinese-origin four-kanji compounds that express complex ideas concisely. 一期一会(いちごいちえ) (treasure every encounter), 十人十色(じゅうにんといろ) (ten people, ten colors = everyone is different), 七転八起(しちてんはっき) (fall seven times, rise eight). Students memorize hundreds. New Year calligraphy often features a personal 四字熟語(よじじゅくご)."},

    {type:"teach", trg:"風刺(ふうし)", src:"satire / irony", pos:"noun", gender:null,
     note:"風刺(ふうし)する = to satirize. 風刺的(ふうしてき) = satirical.\n政治風刺(せいじふうし) = political satire.",
     example:"A: このマンガは社会(しゃかい)への風刺(ふうし)ですね。\nB: 笑(わら)いながら考(かんが)えさせられます。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: This manga is social satire.\nB: It makes you think while laughing.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"風刺(ふうし) has a long Japanese tradition from 狂歌(きょうか) (comic tanka) to modern political cartoons. Manga like Crayon Shin-chan contain subtle 風刺(ふうし) of Japanese society. Japanese 風刺(ふうし) tends to be gentle and indirect compared to Western satire, using humor and absurdity rather than harsh criticism."},

    {type:"teach", trg:"大和言葉(やまとことば)", src:"native Japanese words (vs Chinese-origin)", pos:"noun", gender:null,
     note:"Also: 和語(わご) = native Japanese words.\nOpposite: 漢語(かんご) = Chinese-origin words.",
     example:"A: 大和言葉(やまとことば)は柔(やわ)らかい響(ひび)きがあります。\nB: 漢語(かんご)は硬(かた)い感(かん)じですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Yamato words have a soft sound.\nB: Chinese-origin words feel more formal.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"大和言葉(やまとことば) are the original Japanese words before Chinese influence. They tend to be softer and more emotional: うつくしい vs 美麗(びれい), こころ vs 精神(せいしん), いのち vs 生命(せいめい). Mixing 大和言葉(やまとことば) and 漢語(かんご) creates Japanese register variety. Poetry prefers 大和言葉(やまとことば) for emotional resonance."},

    {type:"teach", trg:"蘇(よみがえ)る", src:"to revive / to come back to life", pos:"verb", gender:null,
     note:"Group 1 verb. Literary/poetic. 記憶(きおく)が蘇(よみがえ)る = memories revive.\nAlso: 生(い)き返(かえ)る.",
     example:"A: この歌(うた)を聞(き)くと、昔(むかし)の記憶(きおく)が蘇(よみがえ)ります。\nB: 懐(なつ)かしいですね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: When I hear this song, old memories revive.\nB: Nostalgic.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"蘇(よみがえ)る is a literary verb meaning 'to return from the underworld.' The kanji 蘇 appears in 蘇我氏(そがし) (Soga clan) and suggests renewal from death. In modern usage, it describes vivid recall of memories, revival of traditions, or comeback from failure. It has a more poetic weight than simply 'to recover.'"},

    // Quiz steps
    {type:"mc", q:"源氏物語(げんじものがたり) is considered:",
     opts:["The world's first novel (written around 1010)","Japan's first haiku collection","A modern manga series","A historical textbook"],
     ans:"The world's first novel (written around 1010)",
     hint:"Authored by Murasaki Shikibu, this is the earliest known full-length prose narrative in any language."},

    {type:"match", pairs:[
      {trg:"俳句(はいく)", src:"17-syllable poem"},
      {trg:"短歌(たんか)", src:"31-syllable poem"},
      {trg:"比喩(ひゆ)", src:"metaphor"},
      {trg:"諺(ことわざ)", src:"proverb"},
      {trg:"風刺(ふうし)", src:"satire"}
    ]},

    {type:"fb", s:"桜(さくら)は{1}を感(かん)じさせます。美(うつく)しいけれど儚(はかな)い。",
     a:["物の哀(もののあわ)れ"],
     opts:["物の哀(もののあわ)れ","わびさび","生(い)きがい","諺(ことわざ)"],
     hint:"The bittersweet awareness of impermanence. Cherry blossoms are the ultimate symbol of this concept.",
     sSrc:"Cherry blossoms evoke {1}. Beautiful yet fleeting."},

    {type:"mc", q:"四字熟語(よじじゅくご) are:",
     opts:["Four-character Chinese-origin idioms","Four-line poems","Four-word sentences","Four-part stories"],
     ans:"Four-character Chinese-origin idioms",
     hint:"These compact expressions pack a complex idea into a precise number of kanji characters from classical sources."},

    {type:"fb", s:"好(す)きな{1}は誰(だれ)ですか？村上春樹(むらかみはるき)が好(す)きです。",
     a:["作家(さっか)"],
     opts:["作家(さっか)","俳句(はいく)","諺(ことわざ)","物語(ものがたり)"],
     hint:"Who is your favorite writer/author? This noun means 'novelist' or 'author.'",
     sSrc:"Who is your favorite {1}? I like Murakami Haruki."},

    {type:"mc", q:"大和言葉(やまとことば) compared to 漢語(かんご) sound:",
     opts:["Softer and more emotional","Harder and more formal","Identical","Louder"],
     ans:"Softer and more emotional",
     hint:"Native Japanese words have a gentler resonance than Chinese-origin formal vocabulary."},

    {type:"match", pairs:[
      {trg:"物語(ものがたり)", src:"story/tale"},
      {trg:"物の哀(もののあわ)れ", src:"pathos of things"},
      {trg:"作家(さっか)", src:"author"},
      {trg:"推理(すいり)", src:"mystery"},
      {trg:"四字熟語(よじじゅくご)", src:"four-character idiom"}
    ]},

    {type:"fb", s:"この歌(うた)を聞(き)くと、昔(むかし)の記憶(きおく)が{1}ます。",
     a:["蘇(よみがえ)り"],
     opts:["蘇(よみがえ)り","懐(なつ)かしくなり","感動(かんどう)し","戻(もど)り"],
     hint:"Old memories come vividly back to life. This literary verb means 'to revive.'",
     sSrc:"When I hear this song, old memories {1}."}
  ]
};
export default BATCH7_L1;
