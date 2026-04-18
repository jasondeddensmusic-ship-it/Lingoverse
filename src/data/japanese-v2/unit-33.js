// Japanese V2 Unit 33. 文学(ぶんがく) (Literature & Poetry)
import BATCH11_L1 from './_batch11_u33_L01.js';
import BATCH10_L1 from './_batch10_u33_L01.js';
import BATCH9_L1 from './_batch9_u33_L01.js';
import BATCH7_L1 from './_batch7_u33_L01.js';
import BATCH8_L1 from './_batch8_u33_L01.js';
import BATCH6_L1 from './_batch6_u33_L01.js';
import BATCH5_L02 from './_batch5_u33_L02.js';
import BATCH5_L01 from './_batch5_u33_L01.js';
import BATCH2_L02 from './_batch2_u33_L02.js';
import BATCH2_L01 from './_batch2_u33_L01.js';
// Level: B2.4. JLPT N2/N1 aligned.
// 作家, 小説, 詩, 表現, 物語, 古典, 比喩.

const UNIT_33 = {
  n:33, lang:"ja", srcLang:"en", track:"v2",
  title:"文学(ぶんがく)", sub:"Literature & Poetry",
  icon:"📖", level:"B2.4", color:"#7B5EE8",
  lessons:[

// ═══ L1: Literary Vocabulary & Analysis ═══
{id:"jav2_u33l1", title:"Literary Vocabulary", icon:"✍️", xp:15, board:true, steps:[
  {type:"intro", title:"Literary Vocabulary & Analysis",
   desc:"Japan has one of the world's richest literary traditions, from the 11th-century Genji Monogatari to modern Nobel laureates. Understanding literary vocabulary like 作家(さっか) (author), 小説(しょうせつ) (novel), and 表現(ひょうげん) (expression) is essential for JLPT N1 reading and for appreciating Japan's cultural heritage.",
   goals:["Use literary analysis vocabulary","Discuss authors and works in Japanese","Understand classical vs. modern literary terminology"]},

  {type:"teach", trg:"文学(ぶんがく)", src:"literature", pos:"noun", gender:null,
   note:"Kanji: 文学. 文学作品(ぶんがくさくひん) = literary work.\n文学史(ぶんがく���) = literary history.",
   example:"A: 日本文学(にほ��ぶんがく)で一番(いちばん)有名(ゆうめい)な作品(さくひん)は何(なん)です���？\nB: 源氏物語(げんじものがたり)は世界最���(せかいさいこ)の長編小説(ちょうへんしょうせつ)と呼(よ)ばれています。\nA: その分野(ぶんや)についてどのくらいご存(ぞん)じですか？\nB: 専門(せんもん)ではありませんが、基本的(きほんてき)な知識(ちしき)はあります。\nA: もっと詳(くわ)しく知(し)りたい場合(ばあい)は、どうすればいいですか？\nB: 専門家(せんもんか)に相談(そうだん)するか、関連(かんれん)の書籍(しょせき)を読(よ)むことをお勧(すす)めします。",
   exampleSrc:"A: What is the most famous work in Japanese literature?\nB: The Tale of Genji is called the world's first full-length novel.\nA: How much do you know about that field?\nB: It is not my specialty, but I have basic knowledge.\nA: If I want to know more in detail, what should I do?\nB: I recommend consulting a specialist or reading related books.",
   funFact:"文学 combines 文 (writing/culture) and 学 (study). Japanese literature spans over 1,300 years, from the Kojiki (712 CE) to contemporary works. Japan has produced two Nobel Prize laureates in literature: Kawabata Yasunari (1968) and Oe Kenzaburo (1994). Murakami Haruki is perennially nominated."},

  {type:"teach", trg:"作家(���っか)", src:"author / writer", pos:"noun", gender:null,
   note:"Kanji: 作家. 小説家(しょうせつか) = novelist.\n劇作家(げきさっか) = playwright.",
   example:"A: 好(す)きな作家(さっか)は誰(だれ)ですか？\nB: 夏目漱石(なつめそうせき)が好(す)きです。こころは名作(めいさく)だと思(おも)います。\nA: どのような影響(えいきょう)がありましたか？\nB: 社会全体(しゃかいぜんたい)に大(おお)きな影響(えいきょう)を与(あた)えました。\nA: 良(よ)い影響(えいきょう)ですか、悪(わる)い影響(えいきょう)ですか？\nB: 両方(りょうほう)あります。メリットもデメリットもあります。",
   exampleSrc:"A: Who is your favorite author?\nB: I like Natsume Soseki. I think Kokoro is a masterpiece.\nA: What kind of impact was there?\nB: It had a big impact on society as a whole.\nA: A good impact or a bad impact?\nB: Both. There are both merits and demerits.",
   funFact:"作家 uses 作 (make/create) and 家 (specialist/house). A 作家 is a 'creation specialist.' In Japanese literary culture, certain 作家(さっか) achieve almost celebrity status. Natsume Soseki's face appeared on the 1,000-yen bill from 1984 to 2004. Murakami Haruki's new releases create midnight bookstore lines."},

  {type:"teach", trg:"小説(しょうせつ)", src:"novel / fiction", pos:"noun", gender:null,
   note:"Kanji: 小説. 短編小説(たんぺんしょう���つ) = short story.\n長編小���(ちょうへんしょうせつ) = full-length novel.",
   example:"A: この小説(しょ���せつ)は実話(じつわ)に基(もと)づいています。\nB: ノンフィクションのような小説(しょ���せつ)ですね。\nA: 具体的(ぐたいてき)にはどういうことですか？\nB: つまり、状況(じょうきょう)に応(おう)じて対応(たいおう)を変(か)える必要(ひつよう)があるということです。\nA: なるほど。それは確(たし)かにそうですね。\nB: ええ、柔軟(じゅうなん)な対応(たいおう)が大切(たいせつ)だと思(おも)います。",
   exampleSrc:"A: This novel is based on a true story.\nB: It is a novel that reads like nonfiction.\nA: What do you mean specifically?\nB: I mean we need to change our approach depending on the situation.\nA: I see. That is certainly true.\nB: Yes, I think flexible response is important.",
   funFact:"小説 literally means 'small talk' or 'minor account,' from the Chinese literary tradition where 小説 was a humble term for informal narratives as opposed to grand historical records. Japanese literature transformed 小説(しょうせつ) into a prestigious art form, especially through the 私小説 (ししょうせつ, I-novel) genre of autobiographical fiction."},

  {type:"mc", q:"長編���説(ちょうへんしょうせつ) means:", opts:["full-length novel","short story","poem collection","essay"], ans:"full-length novel",
   hint:"長編(ちょうへん) means 'long form' combined with the word for n.../fiction."},

  {type:"teach", trg:"詩(し)", src:"poem / poetry", pos:"noun", gender:null,
   note:"Kanji: 詩. ��人(しじん) = poet. 詩歌(しか) = poetry (the art).\nDistinct from 俳句(はいく) (haiku) and 短歌(たんか) (tanka).",
   example:"A: 日本(にほん)の詩(し)は自然(しぜん)をテーマにしたものが多(おお)い���す。\nB: 俳句(はいく)も���歌(たんか)も季節(きせつ)の言葉(ことば)が大事(だいじ)ですよね。\nA: それについてもう少(すこ)し詳(くわ)しく教(おし)えてください。\nB: 例(たと)えば、最近(さいきん)の事例(じれい)を見(み)ると、変化(へんか)が激(はげ)しいです。\nA: そうですか。どう対処(たいしょ)すればいいでしょうか。\nB: まず現状(げんじょう)を把握(はあく)してから、計画(けいかく)を立(た)てましょう。",
   exampleSrc:"A: Much of Japanese poetry has nature as its theme.\nB: Both haiku and tanka value seasonal words.\nA: Please tell me more about that.\nB: For example, looking at recent cases, the changes are dramatic.\nA: Is that so? How should we handle it?\nB: Let's first grasp the current situation, then make a plan.",
   funFact:"詩 uses 言 (words) and 寺 (temple), suggesting sacred or elevated words. Japanese poetic forms include 俳句(はいく) (5-7-5 syllables), 短���(たんか) (5-7-5-7-7), and modern free verse (自由詩(じゆうし)). The 季語 (きご, seasonal word) is mandatory in traditional haiku, connecting each poem to the natural world."},

  {type:"teach", trg:"���現(��ょうげん)", src:"expression / way of expressing", pos:"noun", gender:null,
   note:"Kanji: 表現. ��現(ひょうげん)する = to express.\n表現力(ひょうげんりょく) = expressive ability.",
   example:"A: この作家(さっか)の表現(ひょうげん)はとても豊(ゆた)か��す。\nB: 言葉(ことば)��選(えら)び方(かた)が美(うつく)しいですよね。\nA: どのような方法(ほうほう)がありますか？\nB: いくつかの選択肢(せんたくし)があります。一番(いちばん)効果的(こうかてき)なのは実践(じっせん)です。\nA: 実践(じっせん)というのは、具体的(ぐたいてき)に何(なに)をすればいいですか？\nB: 毎日(まいにち)少(すこ)しずつ取(と)り組(く)むことが重要(じゅうよう)です。",
   exampleSrc:"A: This author's expressions are very rich.\nB: The way they choose words is beautiful.\nA: What kinds of methods are there?\nB: There are several options. The most effective is practice.\nA: What specifically should we do in practice?\nB: It is important to work on it a little each day.",
   funFact:"表現 combines 表 (surface/express) and 現 (appear/present). In Japanese literary criticism, 表現(ひょうげん) analysis focuses on how an author's word choices create mood and meaning. The concept of 言葉(ことば)のあや (subtleties of language) is central to appreciating Japanese literature, where what is left unsaid often matters as much as what is written."},

  {type:"teach", trg:"物語(ものがたり)", src:"tale / story / narrative", pos:"noun", gender:null,
   note:"Kanji: 物語. Classic literary term. 物語(ものがた)る = to narrate.\n源氏物語(げんじものがたり) = The Tale of Genji.",
   example:"A: 源氏物語(げんじものがたり)��千年以上前(せんねんいじょうまえ)に書(か)かれました。\nB: 紫式部(むらさきしきぶ)は天才的(てんさいてき)な作家(さっか)でした。\nA: それはいつごろから始(はじ)まったのですか？\nB: 数年前(すうねんまえ)からですが、最近(さいきん)特(とく)に注目(ちゅうもく)されています。\nA: 今後(こんご)どうなると思(おも)いますか？\nB: さらに発展(はってん)すると予想(よそう)されています。",
   exampleSrc:"A: The Tale of Genji was written over a thousand years ago.\nB: Murasaki Shikibu was a genius author.\nA: When did that start?\nB: It started a few years ago, but it has been getting particular attention recently.\nA: What do you think will happen going forward?\nB: It is expected to develop further.",
   funFact:"物語 uses 物 (thing) and 語 (tell/speak). It means 'telling of things' and is the oldest Japanese word for narrative. The 源氏物語(げんじものがたり) (c. 1010 CE) by Murasaki Shikibu is widely considered the world's first novel. Written by a court lady, it explores love, politics, and impermanence across 54 chapters with over 400 characters."},

  {type:"fb", s:"この作家(さっか)の{1}はとても豊(ゆた)かです。\n(This author's expressions are very rich.)", a:"表現(ひょうげん)", opts:["表現(ひょうげん)","文学(ぶんがく)","物語(ものがたり)","小説(しょうせつ)"], sSrc:"This author's expressions are very rich.",
   hint:"The noun meaning 'expression,' the way an author uses language to convey meaning."},

  {type:"teach", trg:"古典(こてん)", src:"classic / classical work", pos:"noun", gender:null,
   note:"Kanji: 古典. 古典文学(こてんぶんがく) = classical literature.\n古典的(こてんてき) = classical / classic.",
   example:"A: 古典文学(���てんぶんがく)を読(よ)むのは難(むずか)しいですか？\nB: 言��(ことば)が古(ふる)いので最初(さいしょ)は大変(たいへん)ですが、慣(な)れれば楽(たの)しいです。\nA: 何(なに)か問題(もんだい)はありませんでしたか？\nB: いくつか課題(かだい)がありましたが、解決(かいけつ)しました。\nA: どのように解決(かいけつ)したのですか？\nB: チーム全体(ぜんたい)で話(はな)し合(あ)って、最善(さいぜん)の方法(ほうほう)を見(み)つけました。",
   exampleSrc:"A: Is it difficult to read classical literature?\nB: The language is old so it is tough at first, but once you get used to it, it is enjoyable.\nA: Were there any problems?\nB: There were some issues, but we resolved them.\nA: How did you resolve them?\nB: We discussed it as a whole team and found the best method.",
   funFact:"古典 uses 古 (old) and 典 (canon/ceremony). In Japanese education, 古典(こてん) refers specifically to pre-modern literature written in classical Japanese (文語(ぶんご)). Students study 古典(こてん) from middle school, learning to read texts like 枕草子(まくらのそうし) (The Pillow Book) and 奥(おく)の細道(���そみち) (The Narrow Road to the Interior) in their original form."},

  {type:"teach", trg:"比喩(ひゆ)", src:"metaphor / figure of speech", pos:"noun", gender:null,
   note:"Kanji: ��喩. 比喩的(���ゆてき) = metaphorical.\n直喩(ちょくゆ) = simile. 隠喩(いんゆ) = metaphor (implied comparison).",
   example:"A: この詩(し)には多(おお)くの比喩(ひゆ)が使(つか)われています。\nB: 自然(���ぜん)を人間(にんげん)の感情(��んじょう)の比喩(ひゆ)として使(つか)っていますね。\nA: その点(てん)について、もう少(すこ)し説明(せつめい)していただけますか？\nB: もちろんです。重要(じゅうよう)なのは準備(じゅんび)と計画(けいかく)です。\nA: 準備(じゅんび)にはどのくらい時間(じかん)がかかりますか？\nB: 通常(つうじょう)、一週間(いっしゅうかん)から二週間(にしゅうかん)程度(ていど)です。",
   exampleSrc:"A: Many metaphors are used in this poem.\nB: Nature is used as a metaphor for human emotions.\nA: Could you explain that point a bit more?\nB: Of course. What is important is preparation and planning.\nA: How long does preparation take?\nB: Usually about one to two weeks.",
   funFact:"比喩 uses 比 (compare) and 喩 (metaphor/allegory). Japanese rhetoric distinguishes 直喩(ちょくゆ) (simile, explicit comparison using 'like') from 隠喩(いんゆ) (metaphor, implied comparison). Classical Japanese poetry relies heavily on 掛詞(かけことば) (pivot words) that carry double meanings, creating layered metaphors within a single phrase."},

  {type:"teach", trg:"名作(めいさく)", src:"masterpiece / classic work", pos:"noun", gender:null,
   note:"Kanji: 名作. 名作(めいさく)と呼(よ)ばれる = called a masterpiece.\nUsed for literature, film, art, and music.",
   example:"A: ���本文学(にほんぶんがく)の名作(めいさく)をおすすめしてくだ���い。\nB: 村上春樹(むらかみはるき)のノルウェイの森(もり)はいかがですか？\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
   exampleSrc:"A: Please recommend a masterpiece of Japanese literature.\nB: How about Murakami Haruki's Norwegian Wood?\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
   funFact:"名作 combines 名 (name/fame) and 作 (work/creation). A 'famous creation.' Japanese bookstores have dedicated ��作(めいさく) sections, and publishing houses like Iwanami Shoten's blue-cover 文庫(ぶんこ) (pocket editions) series has been introducing 名作(めいさく) to readers since 1927. These affordable editions democratized access to classic literature."},

  {type:"mc", q:"比喩(ひゆ) means:", opts:["rhyme","metaphor","rhythm","plot"], ans:"metaphor",
   hint:"The word for a figure of speech that compares two unlike things to create meaning."},

  {type:"match", pairs:[{trg:"作家(さっか)",src:"author"},{trg:"���説(しょうせつ)",src:"novel"},{trg:"詩(し)",src:"poem"},{trg:"物語(ものがたり)",src:"tale/narrative"}]},

  {type:"fb", s:"日本文学(にほんぶんがく)の{1}をおすすめしてく���さい。\n(Please recommend a masterpiece of Japanese literature.)", a:"名作(めいさく)", opts:["名��(めいさく)","古典(こてん)","文学(ぶんがく)","小説(しょうせつ)"], sSrc:"Please recommend a masterpiece of Japanese literature.",
   hint:"The noun meaning 'masterpiece,' a work of enduring quality and fame."},

  {type:"match", pairs:[{trg:"表現(ひょうげん)",src:"expression"},{trg:"比喩(ひゆ)",src:"metaphor"},{trg:"古典(こてん)",src:"classic"},{trg:"名作(めいさく)",src:"masterpiece"}]},
]},

// ═══ L2: Narrative Techniques & Literary Criticism ═══
{id:"jav2_u33l2", title:"Narrative & Criticism", icon:"📝", xp:15, board:true, steps:[
  {type:"intro", title:"Narrative Techniques & Literary Criticism",
   desc:"Advanced literary discussion requires vocabulary for narrative structure and critical analysis. Words like 主題(しゅだい) (theme), 主人公(しゅじ��こう) (protagonist), and 伏線(ふくせん) (foreshadowing) allow you to analyze stories at a deeper level. This vocabulary is essential for university-level Japanese and for engaging with literary criticism.",
   goals:["Analyze narrative structure in Japanese","Discuss themes and character development","Use literary criticism vocabulary"]},

  {type:"teach", trg:"主題(しゅだい)", src:"theme / subject / motif", pos:"noun", gender:null,
   note:"Kanji: 主題. 作品(さくひん)の主題(しゅだい) = the theme of a work.\n主題歌(しゅだい��) = theme song.",
   example:"A: この小説(しょうせ���)の主題(しゅだい)は何(なん)だと思(おも)いますか？\nB: 人間(にんげん)の孤独(こどく)とつながりだと思(おも)いま��。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
   exampleSrc:"A: What do you think is the theme of this novel?\nB: I think it is human loneliness and connection.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
   funFact:"主題 uses 主 (main/master) and 題 (topic/title). In Japanese literary analysis, identifying the 主題(��ゅだい) is the first step in understanding a work. Many famous Japanese novels explore themes of isolation (孤独(こ���く)), impermanence (無常(むじょう)), and the tension between duty (義理(ぎり)) and personal feeling (人情(にんじょう))."},

  {type:"teach", trg:"主人公(しゅじんこう)", src:"protagonist / main character", pos:"noun", gender:null,
   note:"Kanji: 主人公. 主人公(しゅじんこう)の視点(してん) = protagonist's perspective.\nUsed for novels, manga, anime, and film.",
   example:"A: この物語(ものがたり)の主人公(しゅじんこう)はどんな性格(せいかく)です��？\nB: 内向的(ないこうてき)で口下手(くちべた)ですが、優(やさ)しい人(ひと)です。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
   exampleSrc:"A: What kind of personality does the protagonist of this story have?\nB: Introverted and not good with words, but a kind person.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
   funFact:"主人公 breaks down as 主人 (master/owner) and 公 (public/lord). In Japanese storytelling tradition, the 主人公(���ゅじんこう) often starts from a humble or ordinary position. The concept of the 'reluctant hero' is especially common in Japanese narratives, from folk tales like 桃太郎(ももたろう) to modern anime protagonists."},

  {type:"teach", trg:"伏線(ふくせん)", src:"foreshadowing / plot setup", pos:"noun", gender:null,
   note:"Kanji: ���線. 伏線(ふ��せん)を張(は)る = to plant foreshadowing.\n伏線回収(ふくせんかいしゅう) = resolving foreshadowing.",
   example:"A: 最初(さいしょ)の章(しょう)にあった伏線(ふくせん)が最後(さいご)に回収(かいしゅう)���れました。\nB: 見事(みごと)なストーリーテリングですね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
   exampleSrc:"A: The foreshadowing in the first chapter was resolved at the end.\nB: That is splendid storytelling.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
   funFact:"伏線 uses 伏 (lie hidden/prostrate) and 線 (line/thread). Foreshadowing is a 'hidden thread' running through the story. In manga and anime culture, 伏線回収(ふくせ���かいしゅう) (resolving foreshadowing) is extremely valued. Fans eagerly discuss how early plot details connect to later revelations. Oda Eiichiro's One Piece is famous for 伏線(ふくせん) planted decades earlier."},

  {type:"mc", q:"伏線(ふくせ���)を張(��)る means:", opts:["to plant foreshadowing","to resolve a conflict","to introduce a character","to write a conclusion"], ans:"to plant foreshadowing",
   hint:"張(は)る means 'to stretch/set up,' and 伏線(ふくせん) means the hidden threads of plot."},

  {type:"teach", trg:"展開(てんかい)", src:"development / unfolding (of a plot)", pos:"noun", gender:null,
   note:"Kanji: 展開. 展開(てんかい)する = to develop / to unfold.\nストーリーの展開(てんかい) = plot development.",
   example:"A: 後半(こうはん)の展��(てんかい)は予想外(よそうがい)でした。\nB: どんでん返(がえ)しが素晴(すば)らしかったですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
   exampleSrc:"A: The development in the latter half was unexpected.\nB: The plot twist was wonderful.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
   funFact:"展�� uses 展 (exhibit/spread) and 開 (open). A story 'spreads open.' Japanese narrative structure often follows 起承転結(きしょうてんけつ) (起承転結): introduction (起), development (承), twist (転), and conclusion (結). This four-part structure comes from Chinese poetry but has been adapted for all forms of Japanese storytelling."},

  {type:"teach", trg:"視角(しかく)", src:"point of view / perspective (narrative)", pos:"noun", gender:null,
   note:"Kanji: 視角. Also: 視点(してん) (視点, viewpoint).\n一人称視点(いちにんしょうして���) = first-person perspective.",
   example:"A: この小説(しょうせつ)は誰(だれ)の視角(しかく)で語(かた)られて���ますか？\nB: 主人公(��ゅじんこう)の一人称視点(いちにんしょうしてん)です。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
   exampleSrc:"A: From whose perspective is this novel told?\nB: It is from the protagonist's first-person perspective.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
   funFact:"視角 uses 視 (look/regard) and 角 (angle/corner). The 'angle of looking.' Japanese literature has a strong tradition of 一人称(いちにんしょう) (first-person) narration, especially in the 私小説 (ししょうせつ, I-novel) genre where the author and narrator are nearly identical. This genre blurs the line between fiction and autobiography."},

  {type:"teach", trg:"孤独(こどく)", src:"loneliness / solitude / isolation", pos:"noun", gender:null,
   note:"Kanji: 孤独. 孤独感(こど���かん) = feeling of loneliness.\n孤独(こどく)な = lonely / solitary.",
   example:"A: 日本文学(にほんぶんがく)では孤��(こどく)が大(おお)きなテーマです。\nB: 現代社会(げんだいしゃかい)の孤独(こどく)も作家(さっか)の関心事(かんしんごと)ですね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
   exampleSrc:"A: Loneliness is a major theme in Japanese literature.\nB: The loneliness of modern society is also a concern for authors.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
   funFact:"孤独 uses 孤 (orphan/alone) and 独 (solitary/single). Both characters emphasize being alone. 孤���(こどく) is one of the most explored themes in Japanese literature, from Natsume Soseki's こころ (Kokoro) to Murakami Haruki's works. The modern phenomenon of 孤独死(こどくし) (solitary death) has also become a subject of contemporary fiction."},

  {type:"fb", s:"この小説(しょうせつ)の{1}は何(なん)だと思(おも)いますか？\n(What do you think is the theme of this novel?)", a:"主題(しゅだい)", opts:["主題(しゅだい)","主人公(しゅじんこう)","展開(てんかい)","伏線(ふくせん)"], sSrc:"What do you think is the theme of this novel?",
   hint:"The noun meaning 'theme' or 'subject,' the central idea explored in a literary work."},

  {type:"teach", trg:"無常(むじょう)", src:"impermanence / transience", pos:"noun", gender:null,
   note:"Kanji: 無常. Buddhist concept central to Japanese aesthetics.\n無常感(むじょうかん) = sense of impermanence.",
   example:"A: 日本文学(に��んぶんがく)の底(そこ)には常(つね)に無常感(むじ���うかん)があります。\nB: 桜(さくら)の儚(はかな)さも無常(むじょう)の象徴(しょうちょう)ですよね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
   exampleSrc:"A: There is always a sense of impermanence at the base of Japanese literature.\nB: The fleeting beauty of cherry blossoms is also a symbol of impermanence.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
   funFact:"無常 uses 無 (without) and 常 (constant). 'Nothing is permanent.' This Buddhist concept permeates Japanese art and literature. The opening line of the 平家物語(へいけものがたり) (Tale of the Heike) about the impermanence of the powerful is one of the most famous passages in Japanese literature. The aesthetic appreciation of transient beauty is called もののあわれ."},

  {type:"teach", trg:"批評(ひひょう)", src:"criticism / critique / review", pos:"noun", gender:null,
   note:"Kanji: 批評. 批評家(ひ���ょうか) = critic / reviewer.\n文学批評(ぶんがくひひ���う) = literary criticism.",
   example:"A: この作品(��くひん)に対(たい)する批評(ひひょう)はさまざまです。\nB: 批評家(ひひょうか)によって評価(ひょうか)が分(わ)かれていますね。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
   exampleSrc:"A: The criticism of this work is varied.\nB: Evaluations differ depending on the critic.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
   funFact:"批評 uses 批 (criticize/comment) and 評 (evaluate/review). Japanese literary criticism has its own rich tradition, from Kobayashi Hideo (often called Japan's first modern critic) to contemporary scholars. The Akutagawa Prize (芥川賞(あくたがわしょう)) and Naoki Prize (直木賞(なおきしょう)) are Japan's most prestigious literary awards, generating intense 批評(ひひょう) with each selection."},

  {type:"teach", trg:"作品(さく��ん)", src:"work (of art/literature)", pos:"noun", gender:null,
   note:"Kanji: ��品. 代表作(だ���ひょうさく) = representative work.\nUsed for novels, art, music, film.",
   example:"A: この作家(さっか)の代表作(だいひょうさく)は何(なん)ですか？\nB: 雪国(ゆきぐに)が最(もっと)も知(し)られた作品(さくひん)です。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
   exampleSrc:"A: What is this author's representative work?\nB: Snow Country is the most well-known work.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
   funFact:"作品 combines 作 (make) and 品 (article/goods). In Japanese literary culture, an author's 代表作(だいひょうさく) (representative work) defines their legacy. Kawabata Yasunari's 雪国(ゆき���に) (Snow Country), which opens with one of the most famous sentences in Japanese literature, was cited in his Nobel Prize selection."},

  {type:"mc", q:"無常(むじょう) is a concept rooted in:", opts:["Confucianism","Buddhism","Shintoism","Western philosophy"], ans:"Buddhism",
   hint:"This concept of impermanence comes from a religious tradition teaching that all things are transient."},

  {type:"match", pairs:[{trg:"主題(し���だい)",src:"theme"},{trg:"主人公(しゅじんこう)",src:"protagonist"},{trg:"伏線(ふくせん)",src:"foreshadowing"},{trg:"展開(てんかい)",src:"plot development"}]},

  {type:"fb", s:"この作家(さっか)の{1}は何(なん)ですか？\n(What is this author's representative work?)", a:"代���作(だいひょうさく)", opts:["代表作(だいひょうさく)","主題(しゅだい)","批評(ひひょう)","名作(めいさく)"], sSrc:"What is this author's representative work?",
   hint:"A compound meaning 'representative work,' the work that best represents an author's career."},

  {type:"match", pairs:[{trg:"孤独(こどく)",src:"loneliness"},{trg:"無常(むじょう)",src:"impermanence"},{trg:"批評(ひひょう)",src:"criticism"},{trg:"作品(さくひん)",src:"work (of art)"}]},

  {type:"mc", q:"起承転結(きしょうてんけつ) describes:", opts:["a type of poem","a literary award","the four-part narrative structure","a writing style"], ans:"the four-part narrative structure",
   hint:"This compound describes a classical story arc: introduction, development, twist, and conclusion."},

  {type:"mc", q:"批評(��ひょう) means:", opts:["summary","translation","biography","criticism/review"], ans:"criticism/review",
   hint:"The compound of two kanji both meaning 'to evaluate or comment,' used in literary analysis."},
{type:"match",pairs:[{trg:"文学(ぶんがく)",src:"literature"},{trg:"作家(���っか)",src:"author / writer"},{trg:"小説(しょうせつ)",src:"novel / fiction"},{trg:"���現(��ょうげん)",src:"expression / way of expressing"},{trg:"視角(しかく)",src:"point of view / perspective (narrative)"},{trg:"作品(さく��ん)",src:"work (of art/literature)"}]}]},

,BATCH2_L01
,BATCH2_L02
,BATCH5_L01
,BATCH5_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1
]};
export default UNIT_33;
