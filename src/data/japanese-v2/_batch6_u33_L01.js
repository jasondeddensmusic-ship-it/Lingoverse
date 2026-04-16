// Batch 6 – Unit 33 (B2.4 Literature): Narrative & Storytelling
const BATCH6_L1 = {
  id:"jav2_u33l_b6_1", title:"ものがたりとぶんがく", icon:"✍️", xp:15, board:true,
  steps:[
    {type:"intro", title:"ものがたりとぶんがく",
     desc:"Learn vocabulary for discussing literature, narratives, and creative writing. These words are essential for literary analysis, book discussions, and JLPT N1 reading comprehension.",
     goals:["Discuss literary genres and narrative elements","Use vocabulary for creative expression","Analyze stories and characters"]},

    {type:"teach", trg:"ものがたり", src:"story / tale / narrative", pos:"noun", gender:null,
     note:"Kanji: 物語. From もの (thing) + かたり (telling).\nげんじものがたり = The Tale of Genji.",
     example:"A: このものがたりのテーマはなんですか？\nB: あいとそうしつについてのものがたりです。",
     exampleSrc:"A: What is the theme of this story?\nB: It is a story about love and loss.",
     funFact:"ものがたり (物語) literally means 'telling of things.' げんじものがたり (The Tale of Genji), written around 1000 AD by Murasaki Shikibu, is often called the world's first novel. Japanese narrative tradition spans from ancient mythology (こじき, きき) through medieval war tales to modern light novels (ライトノベル)."},

    {type:"teach", trg:"しゅじんこう", src:"protagonist / main character", pos:"noun", gender:null,
     note:"Kanji: 主人公. しゅじんこう = literally 'master person.'\nDifferent from しゅやく (leading role in a play/film).",
     example:"A: このしょうせつのしゅじんこうはだれですか？\nB: わかいじょせいきしゃです。",
     exampleSrc:"A: Who is the protagonist of this novel?\nB: A young female journalist.",
     funFact:"しゅじんこう (主人公) uses 主 (master), 人 (person), and 公 (public/duke). In manga and anime culture, しゅじんこうほせい (protagonist correction) is a humorous term for the convenient luck that keeps heroes alive. Readers identify with しゅじんこう, making character design crucial to a story's success."},

    {type:"teach", trg:"さくひん", src:"work (literary/artistic)", pos:"noun", gender:null,
     note:"Kanji: 作品. だいひょうさく = masterpiece/representative work.\nさくしゃ = author.",
     example:"A: このさくしゃのさくひんをよんだことがありますか？\nB: はい、デビューさくがすばらしかったです。",
     exampleSrc:"A: Have you read this author's works?\nB: Yes, the debut work was excellent.",
     funFact:"さくひん (作品) applies to novels, films, music, art, and any creative output. The akutagawa prize (あくたがわしょう) and naoki prize (なおきしょう) are Japan's most prestigious literary awards. Japan publishes more books per capita than almost any country, and bookstores (しょてん) thrive even in the digital age."},

    {type:"teach", trg:"えがく", src:"to depict / to portray / to draw", pos:"verb", gender:null,
     note:"Group 1 verb. じだいをえがく = to depict an era.\nKanji: 描く. Also read かく.",
     example:"A: このさくひんはせんごのにほんをえがいています。\nB: れきしてきなはいけいがよくわかりますね。",
     exampleSrc:"A: This work depicts post-war Japan.\nB: You can clearly understand the historical background.",
     funFact:"えがく (描く) and かく (描く) use the same kanji but えがく emphasizes artistic/literary depiction while かく is physical drawing. In literary criticism, えがく is the standard verb: にんげんのこころをえがく (to depict the human heart). Manga artists both かく (draw) and えがく (portray) their stories."},

    {type:"teach", trg:"はいけい", src:"background / setting / context", pos:"noun", gender:null,
     note:"Kanji: 背景. じだいはいけい = historical setting.\nしゃかいてきはいけい = social context.",
     example:"A: このしょうせつのはいけいはめいじじだいです。\nB: きんだいかのじだいですね。",
     exampleSrc:"A: The setting of this novel is the Meiji era.\nB: The era of modernization.",
     funFact:"はいけい (背景) uses 背 (back) and 景 (scenery). In literary analysis, はいけい includes time period, location, social conditions, and cultural context. Japanese literature is deeply tied to はいけい: seasonal settings drive plot in classical works. Understanding historical はいけい is key to reading authors like Natsume Soseki and Kawabata Yasunari."},

    {type:"mc", q:"しゅじんこう means:", opts:["The main character of a story","The author","The setting","The theme"], ans:"The main character of a story",
     hint:"This word describes the central figure around whom the narrative revolves."},

    {type:"teach", trg:"テーマ", src:"theme / subject", pos:"noun", gender:null,
     note:"From German/English. さくひんのテーマ = the work's theme.\nテーマきょく = theme song.",
     example:"A: このえいがのテーマはなんですか？\nB: かぞくのきずなです。",
     exampleSrc:"A: What is this movie's theme?\nB: Family bonds.",
     funFact:"テーマ entered Japanese from German academic tradition (Thema). Japanese literature has recurring テーマ: もののあわれ (the pathos of things), わびさび (beauty in imperfection), はなみ (impermanence of beauty). Modern テーマ include social isolation, technology's impact, and identity in a globalized world."},

    {type:"teach", trg:"ひょうげん", src:"expression / representation", pos:"noun", gender:null,
     note:"Kanji: 表現. ひょうげんする = to express.\nひょうげんのじゆう = freedom of expression.",
     example:"A: このぶんしょうのひょうげんがうつくしいです。\nB: さくしゃのにほんごのセンスがすばらしいですね。",
     exampleSrc:"A: The expression in this writing is beautiful.\nB: The author's sense of Japanese is wonderful.",
     funFact:"ひょうげん (表現) combines 表 (surface/express) and 現 (appear/manifest). In Japanese, ひょうげんりょく (expressive power) is a valued skill. Literary ひょうげん includes metaphor (ひゆ), onomatopoeia (ぎたいご), and seasonal words (きご). Japan's manga and anime are celebrated globally for innovative visual ひょうげん."},

    {type:"teach", trg:"かんどう", src:"being deeply moved / emotional impact", pos:"noun", gender:null,
     note:"Kanji: 感動. かんどうする = to be moved/touched.\nかんどうてきな = moving/touching.",
     example:"A: このえいがはほんとうにかんどうてきでした。\nB: わたしもなきました。",
     exampleSrc:"A: This movie was truly moving.\nB: I cried too.",
     funFact:"かんどう (感動) combines 感 (feel) and 動 (move). Being かんどうした (deeply moved) by art, nature, or human kindness is valued in Japanese culture. The phrase かんどうをあたえる (to give emotional impact) describes great art's purpose. Award speeches in Japan often begin with かんどうしています (I am deeply moved)."},

    {type:"teach", trg:"そうぞう", src:"imagination / creativity", pos:"noun", gender:null,
     note:"Kanji: 想像 (imagine) or 創造 (create). そうぞうりょく = imagination/creativity power.\nContext distinguishes the two.",
     example:"A: こどものそうぞうりょくはすばらしいですね。\nB: おとなもそうぞうりょくをたいせつにすべきです。",
     exampleSrc:"A: Children's imagination is wonderful.\nB: Adults should also value creativity.",
     funFact:"Japanese has two そうぞう: 想像 (imagination, to picture in one's mind) and 創造 (creation, to make something new). Both are essential to literature and art. Japan's creative industries (anime, manga, games, fashion) generate over $200 billion annually, making そうぞう a national economic asset."},

    {type:"fb", s:"このさくひんはせんごのにほんを{1}います。\n(This work depicts post-war Japan.)", a:"えがいて", opts:["えがいて","よんで","かいて","きいて"], sSrc:"This work depicts post-war Japan.",
     hint:"The て-form of the verb meaning to portray or depict artistically."},

    {type:"teach", trg:"きょうかん", src:"empathy / sympathy / resonance", pos:"noun", gender:null,
     note:"Kanji: 共感. きょうかんする = to empathize/resonate.\nきょうかんをよぶ = to evoke empathy.",
     example:"A: このしゅじんこうにきょうかんしますか？\nB: はい、わたしもにたけいけんがあるのできょうかんします。",
     exampleSrc:"A: Do you empathize with this protagonist?\nB: Yes, I have had similar experiences so I empathize.",
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
