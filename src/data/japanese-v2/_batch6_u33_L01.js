// Batch 6 – Unit 33 (B2.4 Literature): Narrative & Storytelling
const BATCH6_L1 = {
  id:"jav2_u33l_b6_1", title:"ものがたりとぶんがく", icon:"✍️", xp:15, board:true,
  steps:[
    {type:"intro", title:"ものがたりとぶんがく",
     desc:"Learn vocabulary for discussing literature, narratives, and creative writing. These words are essential for literary analysis, book discussions, and JLPT N1 reading comprehension.",
     goals:["Discuss literary genres and narrative elements","Use vocabulary for creative expression","Analyze stories and characters"]},

    {type:"teach", trg:"ものがたり", src:"story / tale / narrative", pos:"noun", gender:null,
     note:"Kanji: 物語. From もの (thing) + かたり (telling).\nげんじものがたり = The Tale of Genji.",
     example:"A: このものがたりのテーマはなんですか？\nB: あいとそうしつについてのものがたりです。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: What is the theme of this story?\nB: It is a story about love and loss.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"ものがたり (物語) literally means 'telling of things.' げんじものがたり (The Tale of Genji), written around 1000 AD by Murasaki Shikibu, is often called the world's first novel. Japanese narrative tradition spans from ancient mythology (こじき, きき) through medieval war tales to modern light novels (ライトノベル)."},

    {type:"teach", trg:"しゅじんこう", src:"protagonist / main character", pos:"noun", gender:null,
     note:"Kanji: 主人公. しゅじんこう = literally 'master person.'\nDifferent from しゅやく (leading role in a play/film).",
     example:"A: このしょうせつのしゅじんこうはだれですか？\nB: わかいじょせいきしゃです。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Who is the protagonist of this novel?\nB: A young female journalist.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"しゅじんこう (主人公) uses 主 (master), 人 (person), and 公 (public/duke). In manga and anime culture, しゅじんこうほせい (protagonist correction) is a humorous term for the convenient luck that keeps heroes alive. Readers identify with しゅじんこう, making character design crucial to a story's success."},

    {type:"teach", trg:"さくひん", src:"work (literary/artistic)", pos:"noun", gender:null,
     note:"Kanji: 作品. だいひょうさく = masterpiece/representative work.\nさくしゃ = author.",
     example:"A: このさくしゃのさくひんをよんだことがありますか？\nB: はい、デビューさくがすばらしかったです。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Have you read this author's works?\nB: Yes, the debut work was excellent.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"さくひん (作品) applies to novels, films, music, art, and any creative output. The akutagawa prize (あくたがわしょう) and naoki prize (なおきしょう) are Japan's most prestigious literary awards. Japan publishes more books per capita than almost any country, and bookstores (しょてん) thrive even in the digital age."},

    {type:"teach", trg:"えがく", src:"to depict / to portray / to draw", pos:"verb", gender:null,
     note:"Group 1 verb. じだいをえがく = to depict an era.\nKanji: 描く. Also read かく.",
     example:"A: このさくひんはせんごのにほんをえがいています。\nB: れきしてきなはいけいがよくわかりますね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: This work depicts post-war Japan.\nB: You can clearly understand the historical background.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"えがく (描く) and かく (描く) use the same kanji but えがく emphasizes artistic/literary depiction while かく is physical drawing. In literary criticism, えがく is the standard verb: にんげんのこころをえがく (to depict the human heart). Manga artists both かく (draw) and えがく (portray) their stories."},

    {type:"teach", trg:"はいけい", src:"background / setting / context", pos:"noun", gender:null,
     note:"Kanji: 背景. じだいはいけい = historical setting.\nしゃかいてきはいけい = social context.",
     example:"A: このしょうせつのはいけいはめいじじだいです。\nB: きんだいかのじだいですね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: The setting of this novel is the Meiji era.\nB: The era of modernization.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"はいけい (背景) uses 背 (back) and 景 (scenery). In literary analysis, はいけい includes time period, location, social conditions, and cultural context. Japanese literature is deeply tied to はいけい: seasonal settings drive plot in classical works. Understanding historical はいけい is key to reading authors like Natsume Soseki and Kawabata Yasunari."},

    {type:"mc", q:"しゅじんこう means:", opts:["The main character of a story","The author","The setting","The theme"], ans:"The main character of a story",
     hint:"This word describes the central figure around whom the narrative revolves."},

    {type:"teach", trg:"テーマ", src:"theme / subject", pos:"noun", gender:null,
     note:"From German/English. さくひんのテーマ = the work's theme.\nテーマきょく = theme song.",
     example:"A: このえいがのテーマはなんですか？\nB: かぞくのきずなです。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: What is this movie's theme?\nB: Family bonds.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"テーマ entered Japanese from German academic tradition (Thema). Japanese literature has recurring テーマ: もののあわれ (the pathos of things), わびさび (beauty in imperfection), はなみ (impermanence of beauty). Modern テーマ include social isolation, technology's impact, and identity in a globalized world."},

    {type:"teach", trg:"ひょうげん", src:"expression / representation", pos:"noun", gender:null,
     note:"Kanji: 表現. ひょうげんする = to express.\nひょうげんのじゆう = freedom of expression.",
     example:"A: このぶんしょうのひょうげんがうつくしいです。\nB: さくしゃのにほんごのセンスがすばらしいですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: The expression in this writing is beautiful.\nB: The author's sense of Japanese is wonderful.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"ひょうげん (表現) combines 表 (surface/express) and 現 (appear/manifest). In Japanese, ひょうげんりょく (expressive power) is a valued skill. Literary ひょうげん includes metaphor (ひゆ), onomatopoeia (ぎたいご), and seasonal words (きご). Japan's manga and anime are celebrated globally for innovative visual ひょうげん."},

    {type:"teach", trg:"かんどう", src:"being deeply moved / emotional impact", pos:"noun", gender:null,
     note:"Kanji: 感動. かんどうする = to be moved/touched.\nかんどうてきな = moving/touching.",
     example:"A: このえいがはほんとうにかんどうてきでした。\nB: わたしもなきました。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: This movie was truly moving.\nB: I cried too.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"かんどう (感動) combines 感 (feel) and 動 (move). Being かんどうした (deeply moved) by art, nature, or human kindness is valued in Japanese culture. The phrase かんどうをあたえる (to give emotional impact) describes great art's purpose. Award speeches in Japan often begin with かんどうしています (I am deeply moved)."},

    {type:"teach", trg:"そうぞう", src:"imagination / creativity", pos:"noun", gender:null,
     note:"Kanji: 想像 (imagine) or 創造 (create). そうぞうりょく = imagination/creativity power.\nContext distinguishes the two.",
     example:"A: こどものそうぞうりょくはすばらしいですね。\nB: おとなもそうぞうりょくをたいせつにすべきです。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Children's imagination is wonderful.\nB: Adults should also value creativity.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"Japanese has two そうぞう: 想像 (imagination, to picture in one's mind) and 創造 (creation, to make something new). Both are essential to literature and art. Japan's creative industries (anime, manga, games, fashion) generate over $200 billion annually, making そうぞう a national economic asset."},

    {type:"fb", s:"このさくひんはせんごのにほんを{1}います。\n(This work depicts post-war Japan.)", a:"えがいて", opts:["えがいて","よんで","かいて","きいて"], sSrc:"This work depicts post-war Japan.",
     hint:"The て-form of the verb meaning to portray or depict artistically."},

    {type:"teach", trg:"きょうかん", src:"empathy / sympathy / resonance", pos:"noun", gender:null,
     note:"Kanji: 共感. きょうかんする = to empathize/resonate.\nきょうかんをよぶ = to evoke empathy.",
     example:"A: このしゅじんこうにきょうかんしますか？\nB: はい、わたしもにたけいけんがあるのできょうかんします。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Do you empathize with this protagonist?\nB: Yes, I have had similar experiences so I empathize.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"きょうかん (共感) combines 共 (together) and 感 (feel). In modern Japan, きょうかん is the most sought quality in social media content. いいね (likes) represent きょうかん. Literature that generates きょうかん connects readers to characters. The word also applies to music, art, and social movements that 'resonate' with people."},

    {type:"mc", q:"かんどう describes:", opts:["Being deeply moved emotionally","Being confused","Being angry","Being bored"], ans:"Being deeply moved emotionally",
     hint:"This word describes the powerful emotional impact of art, kindness, or beauty."},

    {type:"match", pairs:[
      {trg:"ものがたり", src:"story / narrative"},
      {trg:"しゅじんこう", src:"protagonist"},
      {trg:"さくひん", src:"literary/artistic work"},
      {trg:"ひょうげん", src:"expression"},
      {trg:"かんどう", src:"being deeply moved"}
    ]},

    {type:"fb", s:"こどもの{1}りょくはすばらしいですね。\n(Children's imagination is wonderful.)", a:"そうぞう", opts:["そうぞう","ひょうげん","かんどう","きょうかん"], sSrc:"Children's imagination is wonderful.",
     hint:"The word for the mental ability to picture or create new things."},

    {type:"mc", q:"えがく in literary context means:", opts:["To depict or portray through writing","To physically draw a picture","To erase something","To read aloud"], ans:"To depict or portray through writing",
     hint:"In literature, this verb describes how an author represents subjects in w...."}
  ]
};
export default BATCH6_L1;
