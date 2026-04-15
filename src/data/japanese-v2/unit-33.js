// Japanese V2 Unit 33. ぶんがく (Literature & Poetry)
// Level: B2.4. JLPT N2/N1 aligned.
// さっか, しょうせつ, し, ひょうげん, ものがたり, こてん, ひゆ.

const UNIT_33 = {
  n:33, lang:"ja", srcLang:"en", track:"v2",
  title:"ぶんがく", sub:"Literature & Poetry",
  icon:"📖", level:"B2.4", color:"#7B5EE8",
  lessons:[

// ═══ L1: Literary Vocabulary & Analysis ═══
{id:"jav2_u33l1", title:"Literary Vocabulary", icon:"✍️", xp:15, board:true, steps:[
  {type:"intro", title:"Literary Vocabulary & Analysis",
   desc:"Japan has one of the world's richest literary traditions, from the 11th-century Genji Monogatari to modern Nobel laureates. Understanding literary vocabulary like さっか (author), しょうせつ (novel), and ひょうげん (expression) is essential for JLPT N1 reading and for appreciating Japan's cultural heritage.",
   goals:["Use literary analysis vocabulary","Discuss authors and works in Japanese","Understand classical vs. modern literary terminology"]},

  {type:"teach", trg:"ぶんがく", src:"literature", pos:"noun", gender:null,
   note:"Kanji: 文学. ぶんがくさくひん = literary work.\nぶんがくし = literary history.",
   example:"A: にほんぶんがくでいちばんゆうめいなさくひんはなんですか？\nB: げんじものがたりはせかいさいこのちょうへんしょうせつとよばれています。",
   exampleSrc:"A: What is the most famous work in Japanese literature?\nB: The Tale of Genji is called the world's first full-length novel.",
   funFact:"文学 combines 文 (writing/culture) and 学 (study). Japanese literature spans over 1,300 years, from the Kojiki (712 CE) to contemporary works. Japan has produced two Nobel Prize laureates in literature: Kawabata Yasunari (1968) and Oe Kenzaburo (1994). Murakami Haruki is perennially nominated."},

  {type:"teach", trg:"さっか", src:"author / writer", pos:"noun", gender:null,
   note:"Kanji: 作家. しょうせつか = novelist.\nげきさっか = playwright.",
   example:"A: すきなさっかはだれですか？\nB: なつめそうせきがすきです。こころはめいさくだとおもいます。",
   exampleSrc:"A: Who is your favorite author?\nB: I like Natsume Soseki. I think Kokoro is a masterpiece.",
   funFact:"作家 uses 作 (make/create) and 家 (specialist/house). A 作家 is a 'creation specialist.' In Japanese literary culture, certain さっか achieve almost celebrity status. Natsume Soseki's face appeared on the 1,000-yen bill from 1984 to 2004. Murakami Haruki's new releases create midnight bookstore lines."},

  {type:"teach", trg:"しょうせつ", src:"novel / fiction", pos:"noun", gender:null,
   note:"Kanji: 小説. たんぺんしょうせつ = short story.\nちょうへんしょうせつ = full-length novel.",
   example:"A: このしょうせつはじっわにもとづいています。\nB: ノンフィクションのようなしょうせつですね。",
   exampleSrc:"A: This novel is based on a true story.\nB: It is a novel that reads like nonfiction.",
   funFact:"小説 literally means 'small talk' or 'minor account,' from the Chinese literary tradition where 小説 was a humble term for informal narratives as opposed to grand historical records. Japanese literature transformed しょうせつ into a prestigious art form, especially through the 私小説 (ししょうせつ, I-novel) genre of autobiographical fiction."},

  {type:"mc", q:"ちょうへんしょうせつ means:", opts:["full-length novel","short story","poem collection","essay"], ans:"full-length novel",
   hint:"ちょうへん means 'long form' combined with the word for n.../fiction."},

  {type:"teach", trg:"し", src:"poem / poetry", pos:"noun", gender:null,
   note:"Kanji: 詩. しじん = poet. しか = poetry (the art).\nDistinct from はいく (haiku) and たんか (tanka).",
   example:"A: にほんのしはしぜんをテーマにしたものがおおいです。\nB: はいくもたんかもきせつのことばがだいじですよね。",
   exampleSrc:"A: Much of Japanese poetry has nature as its theme.\nB: Both haiku and tanka value seasonal words.",
   funFact:"詩 uses 言 (words) and 寺 (temple), suggesting sacred or elevated words. Japanese poetic forms include はいく (5-7-5 syllables), たんか (5-7-5-7-7), and modern free verse (じゆうし). The 季語 (きご, seasonal word) is mandatory in traditional haiku, connecting each poem to the natural world."},

  {type:"teach", trg:"ひょうげん", src:"expression / way of expressing", pos:"noun", gender:null,
   note:"Kanji: 表現. ひょうげんする = to express.\nひょうげんりょく = expressive ability.",
   example:"A: このさっかのひょうげんはとてもゆたかです。\nB: ことばのえらびかたがうつくしいですよね。",
   exampleSrc:"A: This author's expressions are very rich.\nB: The way they choose words is beautiful.",
   funFact:"表現 combines 表 (surface/express) and 現 (appear/present). In Japanese literary criticism, ひょうげん analysis focuses on how an author's word choices create mood and meaning. The concept of ことばのあや (subtleties of language) is central to appreciating Japanese literature, where what is left unsaid often matters as much as what is written."},

  {type:"teach", trg:"ものがたり", src:"tale / story / narrative", pos:"noun", gender:null,
   note:"Kanji: 物語. Classic literary term. ものがたる = to narrate.\nげんじものがたり = The Tale of Genji.",
   example:"A: げんじものがたりはせんねんいじょうまえにかかれました。\nB: むらさきしきぶはてんさいてきなさっかでした。",
   exampleSrc:"A: The Tale of Genji was written over a thousand years ago.\nB: Murasaki Shikibu was a genius author.",
   funFact:"物語 uses 物 (thing) and 語 (tell/speak). It means 'telling of things' and is the oldest Japanese word for narrative. The げんじものがたり (c. 1010 CE) by Murasaki Shikibu is widely considered the world's first novel. Written by a court lady, it explores love, politics, and impermanence across 54 chapters with over 400 characters."},

  {type:"fb", s:"このさっかの{1}はとてもゆたかです。\n(This author's expressions are very rich.)", a:"ひょうげん", opts:["ひょうげん","ぶんがく","ものがたり","しょうせつ"], sSrc:"This author's expressions are very rich.",
   hint:"The noun meaning 'expression,' the way an author uses language to convey meaning."},

  {type:"teach", trg:"こてん", src:"classic / classical work", pos:"noun", gender:null,
   note:"Kanji: 古典. こてんぶんがく = classical literature.\nこてんてき = classical / classic.",
   example:"A: こてんぶんがくをよむのはむずかしいですか？\nB: ことばがふるいのでさいしょはたいへんですが、なれればたのしいです。",
   exampleSrc:"A: Is it difficult to read classical literature?\nB: The language is old so it is tough at first, but once you get used to it, it is enjoyable.",
   funFact:"古典 uses 古 (old) and 典 (canon/ceremony). In Japanese education, こてん refers specifically to pre-modern literature written in classical Japanese (文語, ぶんご). Students study こてん from middle school, learning to read texts like まくらのそうし (The Pillow Book) and おくのほそみち (The Narrow Road to the Interior) in their original form."},

  {type:"teach", trg:"ひゆ", src:"metaphor / figure of speech", pos:"noun", gender:null,
   note:"Kanji: 比喩. ひゆてき = metaphorical.\nちょくゆ = simile. いんゆ = metaphor (implied comparison).",
   example:"A: このしにはおおくのひゆがつかわれています。\nB: しぜんをにんげんのかんじょうのひゆとしてつかっていますね。",
   exampleSrc:"A: Many metaphors are used in this poem.\nB: Nature is used as a metaphor for human emotions.",
   funFact:"比喩 uses 比 (compare) and 喩 (metaphor/allegory). Japanese rhetoric distinguishes ちょくゆ (simile, explicit comparison using 'like') from いんゆ (metaphor, implied comparison). Classical Japanese poetry relies heavily on かけことば (pivot words) that carry double meanings, creating layered metaphors within a single phrase."},

  {type:"teach", trg:"めいさく", src:"masterpiece / classic work", pos:"noun", gender:null,
   note:"Kanji: 名作. めいさくとよばれる = called a masterpiece.\nUsed for literature, film, art, and music.",
   example:"A: にほんぶんがくのめいさくをおすすめしてください。\nB: むらかみはるきのノルウェイのもりはいかがですか？",
   exampleSrc:"A: Please recommend a masterpiece of Japanese literature.\nB: How about Murakami Haruki's Norwegian Wood?",
   funFact:"名作 combines 名 (name/fame) and 作 (work/creation). A 'famous creation.' Japanese bookstores have dedicated めいさく sections, and publishing houses like Iwanami Shoten's blue-cover ぶんこ (pocket editions) series has been introducing めいさく to readers since 1927. These affordable editions democratized access to classic literature."},

  {type:"mc", q:"ひゆ means:", opts:["rhyme","metaphor","rhythm","plot"], ans:"metaphor",
   hint:"The word for a figure of speech that compares two unlike things to create meaning."},

  {type:"match", pairs:[{trg:"さっか",src:"author"},{trg:"しょうせつ",src:"novel"},{trg:"し",src:"poem"},{trg:"ものがたり",src:"tale/narrative"}]},

  {type:"fb", s:"にほんぶんがくの{1}をおすすめしてください。\n(Please recommend a masterpiece of Japanese literature.)", a:"めいさく", opts:["めいさく","こてん","ぶんがく","しょうせつ"], sSrc:"Please recommend a masterpiece of Japanese literature.",
   hint:"The noun meaning 'masterpiece,' a work of enduring quality and fame."},

  {type:"match", pairs:[{trg:"ひょうげん",src:"expression"},{trg:"ひゆ",src:"metaphor"},{trg:"こてん",src:"classic"},{trg:"めいさく",src:"masterpiece"}]},
]},

// ═══ L2: Narrative Techniques & Literary Criticism ═══
{id:"jav2_u33l2", title:"Narrative & Criticism", icon:"📝", xp:15, board:true, steps:[
  {type:"intro", title:"Narrative Techniques & Literary Criticism",
   desc:"Advanced literary discussion requires vocabulary for narrative structure and critical analysis. Words like しゅだい (theme), しゅじんこう (protagonist), and ふくせん (foreshadowing) allow you to analyze stories at a deeper level. This vocabulary is essential for university-level Japanese and for engaging with literary criticism.",
   goals:["Analyze narrative structure in Japanese","Discuss themes and character development","Use literary criticism vocabulary"]},

  {type:"teach", trg:"しゅだい", src:"theme / subject / motif", pos:"noun", gender:null,
   note:"Kanji: 主題. さくひんのしゅだい = the theme of a work.\nしゅだいか = theme song.",
   example:"A: このしょうせつのしゅだいはなんだとおもいますか？\nB: にんげんのこどくとつながりだとおもいます。",
   exampleSrc:"A: What do you think is the theme of this novel?\nB: I think it is human loneliness and connection.",
   funFact:"主題 uses 主 (main/master) and 題 (topic/title). In Japanese literary analysis, identifying the しゅだい is the first step in understanding a work. Many famous Japanese novels explore themes of isolation (こどく), impermanence (むじょう), and the tension between duty (ぎり) and personal feeling (にんじょう)."},

  {type:"teach", trg:"しゅじんこう", src:"protagonist / main character", pos:"noun", gender:null,
   note:"Kanji: 主人公. しゅじんこうのししてん = protagonist's perspective.\nUsed for novels, manga, anime, and film.",
   example:"A: このものがたりのしゅじんこうはどんなせいかくですか？\nB: ないこうてきでくちべたですが、やさしいひとです。",
   exampleSrc:"A: What kind of personality does the protagonist of this story have?\nB: Introverted and not good with words, but a kind person.",
   funFact:"主人公 breaks down as 主人 (master/owner) and 公 (public/lord). In Japanese storytelling tradition, the しゅじんこう often starts from a humble or ordinary position. The concept of the 'reluctant hero' is especially common in Japanese narratives, from folk tales like ももたろう to modern anime protagonists."},

  {type:"teach", trg:"ふくせん", src:"foreshadowing / plot setup", pos:"noun", gender:null,
   note:"Kanji: 伏線. ふくせんをはる = to plant foreshadowing.\nふくせんかいしゅう = resolving foreshadowing.",
   example:"A: さいしょのしょうにあったふくせんがさいごにかいしゅうされました。\nB: みごとなストーリーテリングですね。",
   exampleSrc:"A: The foreshadowing in the first chapter was resolved at the end.\nB: That is splendid storytelling.",
   funFact:"伏線 uses 伏 (lie hidden/prostrate) and 線 (line/thread). Foreshadowing is a 'hidden thread' running through the story. In manga and anime culture, ふくせんかいしゅう (resolving foreshadowing) is extremely valued. Fans eagerly discuss how early plot details connect to later revelations. Oda Eiichiro's One Piece is famous for ふくせん planted decades earlier."},

  {type:"mc", q:"ふくせんをはる means:", opts:["to plant foreshadowing","to resolve a conflict","to introduce a character","to write a conclusion"], ans:"to plant foreshadowing",
   hint:"はる means 'to stretch/set up,' and ふくせん means the hidden threads of plot."},

  {type:"teach", trg:"てんかい", src:"development / unfolding (of a plot)", pos:"noun", gender:null,
   note:"Kanji: 展開. てんかいする = to develop / to unfold.\nストーリーのてんかい = plot development.",
   example:"A: こうはんのてんかいはよそうがいでした。\nB: どんでんがえしがすばらしかったですね。",
   exampleSrc:"A: The development in the latter half was unexpected.\nB: The plot twist was wonderful.",
   funFact:"展開 uses 展 (exhibit/spread) and 開 (open). A story 'spreads open.' Japanese narrative structure often follows きしょうてんけつ (起承転結): introduction (起), development (承), twist (転), and conclusion (結). This four-part structure comes from Chinese poetry but has been adapted for all forms of Japanese storytelling."},

  {type:"teach", trg:"しかく", src:"point of view / perspective (narrative)", pos:"noun", gender:null,
   note:"Kanji: 視角. Also: してん (視点, viewpoint).\nいちにんしょうしてん = first-person perspective.",
   example:"A: このしょうせつはだれのしかくでかたられていますか？\nB: しゅじんこうのいちにんしょうしてんです。",
   exampleSrc:"A: From whose perspective is this novel told?\nB: It is from the protagonist's first-person perspective.",
   funFact:"視角 uses 視 (look/regard) and 角 (angle/corner). The 'angle of looking.' Japanese literature has a strong tradition of いちにんしょう (first-person) narration, especially in the 私小説 (ししょうせつ, I-novel) genre where the author and narrator are nearly identical. This genre blurs the line between fiction and autobiography."},

  {type:"teach", trg:"こどく", src:"loneliness / solitude / isolation", pos:"noun", gender:null,
   note:"Kanji: 孤独. こどくかん = feeling of loneliness.\nこどくな = lonely / solitary.",
   example:"A: にほんぶんがくではこどくがおおきなテーマです。\nB: げんだいしゃかいのこどくもさっかのかんしんごとですね。",
   exampleSrc:"A: Loneliness is a major theme in Japanese literature.\nB: The loneliness of modern society is also a concern for authors.",
   funFact:"孤独 uses 孤 (orphan/alone) and 独 (solitary/single). Both characters emphasize being alone. こどく is one of the most explored themes in Japanese literature, from Natsume Soseki's こころ (Kokoro) to Murakami Haruki's works. The modern phenomenon of こどくし (solitary death) has also become a subject of contemporary fiction."},

  {type:"fb", s:"このしょうせつの{1}はなんだとおもいますか？\n(What do you think is the theme of this novel?)", a:"しゅだい", opts:["しゅだい","しゅじんこう","てんかい","ふくせん"], sSrc:"What do you think is the theme of this novel?",
   hint:"The noun meaning 'theme' or 'subject,' the central idea explored in a literary work."},

  {type:"teach", trg:"むじょう", src:"impermanence / transience", pos:"noun", gender:null,
   note:"Kanji: 無常. Buddhist concept central to Japanese aesthetics.\nむじょうかん = sense of impermanence.",
   example:"A: にほんぶんがくのそこにはつねにむじょうかんがあります。\nB: さくらのはかなさもむじょうのしょうちょうですよね。",
   exampleSrc:"A: There is always a sense of impermanence at the base of Japanese literature.\nB: The fleeting beauty of cherry blossoms is also a symbol of impermanence.",
   funFact:"無常 uses 無 (without) and 常 (constant). 'Nothing is permanent.' This Buddhist concept permeates Japanese art and literature. The opening line of the へいけものがたり (Tale of the Heike) about the impermanence of the powerful is one of the most famous passages in Japanese literature. The aesthetic appreciation of transient beauty is called もののあわれ."},

  {type:"teach", trg:"ひひょう", src:"criticism / critique / review", pos:"noun", gender:null,
   note:"Kanji: 批評. ひひょうか = critic / reviewer.\nぶんがくひひょう = literary criticism.",
   example:"A: このさくひんにたいするひひょうはさまざまです。\nB: ひひょうかによってひょうかがわかれていますね。",
   exampleSrc:"A: The criticism of this work is varied.\nB: Evaluations differ depending on the critic.",
   funFact:"批評 uses 批 (criticize/comment) and 評 (evaluate/review). Japanese literary criticism has its own rich tradition, from Kobayashi Hideo (often called Japan's first modern critic) to contemporary scholars. The Akutagawa Prize (あくたがわしょう) and Naoki Prize (なおきしょう) are Japan's most prestigious literary awards, generating intense ひひょう with each selection."},

  {type:"teach", trg:"さくひん", src:"work (of art/literature)", pos:"noun", gender:null,
   note:"Kanji: 作品. だいひょうさく = representative work.\nUsed for novels, art, music, film.",
   example:"A: このさっかのだいひょうさくはなんですか？\nB: ゆきぐにがもっともしられたさくひんです。",
   exampleSrc:"A: What is this author's representative work?\nB: Snow Country is the most well-known work.",
   funFact:"作品 combines 作 (make) and 品 (article/goods). In Japanese literary culture, an author's だいひょうさく (representative work) defines their legacy. Kawabata Yasunari's ゆきぐに (Snow Country), which opens with one of the most famous sentences in Japanese literature, was cited in his Nobel Prize selection."},

  {type:"mc", q:"むじょう is a concept rooted in:", opts:["Confucianism","Buddhism","Shintoism","Western philosophy"], ans:"Buddhism",
   hint:"This concept of impermanence comes from a religious tradition teaching that all things are transient."},

  {type:"match", pairs:[{trg:"しゅだい",src:"theme"},{trg:"しゅじんこう",src:"protagonist"},{trg:"ふくせん",src:"foreshadowing"},{trg:"てんかい",src:"plot development"}]},

  {type:"fb", s:"このさっかの{1}はなんですか？\n(What is this author's representative work?)", a:"だいひょうさく", opts:["だいひょうさく","しゅだい","ひひょう","めいさく"], sSrc:"What is this author's representative work?",
   hint:"A compound meaning 'representative work,' the work that best represents an author's career."},

  {type:"match", pairs:[{trg:"こどく",src:"loneliness"},{trg:"むじょう",src:"impermanence"},{trg:"ひひょう",src:"criticism"},{trg:"さくひん",src:"work (of art)"}]},

  {type:"mc", q:"きしょうてんけつ describes:", opts:["a type of poem","a literary award","the four-part narrative structure","a writing style"], ans:"the four-part narrative structure",
   hint:"This compound describes a classical story arc: introduction, development, twist, and conclusion."},

  {type:"mc", q:"ひひょう means:", opts:["summary","translation","biography","criticism/review"], ans:"criticism/review",
   hint:"The compound of two kanji both meaning 'to evaluate or comment,' used in literary analysis."},
]},

]};
export default UNIT_33;
