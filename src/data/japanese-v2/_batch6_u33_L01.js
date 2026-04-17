// Batch 6 – Unit 33 (B2.4 Literature): Narrative & Storytelling
const BATCH6_L1 = {
  id:"jav2_u33l_b6_1", title:"物語(ものがたり)と文学(ぶんがく)", icon:"✍️", xp:15, board:true,
  steps:[
    {type:"intro", title:"物語(ものがたり)と文学(ぶんがく)",
     desc:"Learn vocabulary for discussing literature, narratives, and creative writing. These words are essential for literary analysis, book discussions, and JLPT N1 reading comprehension.",
     goals:["Discuss literary genres and narrative elements","Use vocabulary for creative expression","Analyze stories and characters"]},

    {type:"teach", trg:"物語(ものがたり)", src:"story / tale / narrative", pos:"noun", gender:null,
     note:"From もの (thing) + かたり (telling).\n源氏物語(げんじものがたり) = The Tale of Genji.",
     example:"A: この物語(ものがたり)のテーマは何(なん)ですか？\nB: 愛(あい)と喪失(そうしつ)についての物語(ものがたり)です。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: What is the theme of this story?\nB: It is a story about love and loss.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"物語(ものがたり) literally means 'telling of things.' 源氏物語(げんじものがたり) (The Tale of Genji), written around 1000 AD by Murasaki Shikibu, is often called the world's first novel. Japanese narrative tradition spans from ancient mythology (古事記(こじき)) through medieval war tales to modern light novels (ライトノベル)."},

    {type:"teach", trg:"主人公(しゅじんこう)", src:"protagonist / main character", pos:"noun", gender:null,
     note:"主人公(しゅじんこう) = literally 'master person.'\nDifferent from 主役(しゅやく) (leading role in a play/film).",
     example:"A: この小説(しょうせつ)の主人公(しゅじんこう)は誰(だれ)ですか？\nB: 若(わか)い女性(じょせい)記者(きしゃ)です。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Who is the protagonist of this novel?\nB: A young female journalist.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"主人公(しゅじんこう) uses 主 (master), 人 (person), and 公 (public/duke). In manga and anime culture, 主人公補正(しゅじんこうほせい) (protagonist correction) is a humorous term for the convenient luck that keeps heroes alive. Readers identify with 主人公(しゅじんこう), making character design crucial to a story's success."},

    {type:"teach", trg:"作品(さくひん)", src:"work (literary/artistic)", pos:"noun", gender:null,
     note:"代表作(だいひょうさく) = masterpiece/representative work.\n作者(さくしゃ) = author.",
     example:"A: この作者(さくしゃ)の作品(さくひん)を読(よ)んだことがありますか？\nB: はい、デビュー作(さく)が素晴(すば)らしかったです。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Have you read this author's works?\nB: Yes, the debut work was excellent.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"作品(さくひん) applies to novels, films, music, art, and any creative output. The 芥川賞(あくたがわしょう) (Akutagawa Prize) and 直木賞(なおきしょう) (Naoki Prize) are Japan's most prestigious literary awards. Japan publishes more books per capita than almost any country, and bookstores (書店(しょてん)) thrive even in the digital age."},

    {type:"teach", trg:"描(えが)く", src:"to depict / to portray / to draw", pos:"verb", gender:null,
     note:"Group 1 verb. 時代(じだい)を描(えが)く = to depict an era.\nAlso read かく.",
     example:"A: この作品(さくひん)は戦後(せんご)の日本(にほん)を描(えが)いています。\nB: 歴史的(れきしてき)な背景(はいけい)がよくわかりますね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: This work depicts post-war Japan.\nB: You can clearly understand the historical background.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"描(えが)く and 描(か)く use the same kanji but 描(えが)く emphasizes artistic/literary depiction while 描(か)く is physical drawing. In literary criticism, 描(えが)く is the standard verb: 人間(にんげん)の心(こころ)を描(えが)く (to depict the human heart). Manga artists both 描(か)く (draw) and 描(えが)く (portray) their stories."},

    {type:"teach", trg:"背景(はいけい)", src:"background / setting / context", pos:"noun", gender:null,
     note:"時代(じだい)背景(はいけい) = historical setting.\n社会的(しゃかいてき)背景(はいけい) = social context.",
     example:"A: この小説(しょうせつ)の背景(はいけい)は明治時代(めいじじだい)です。\nB: 近代化(きんだいか)の時代(じだい)ですね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: The setting of this novel is the Meiji era.\nB: The era of modernization.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"背景(はいけい) uses 背 (back) and 景 (scenery). In literary analysis, 背景(はいけい) includes time period, location, social conditions, and cultural context. Japanese literature is deeply tied to 背景(はいけい): seasonal settings drive plot in classical works. Understanding historical 背景(はいけい) is key to reading authors like Natsume Soseki and Kawabata Yasunari."},

    {type:"mc", q:"主人公(しゅじんこう) means:", opts:["The main character of a story","The author","The setting","The theme"], ans:"The main character of a story",
     hint:"This word describes the central figure around whom the narrative revolves."},

    {type:"teach", trg:"テーマ", src:"theme / subject", pos:"noun", gender:null,
     note:"From German/English. 作品(さくひん)のテーマ = the work's theme.\nテーマ曲(きょく) = theme song.",
     example:"A: この映画(えいが)のテーマは何(なん)ですか？\nB: 家族(かぞく)の絆(きずな)です。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: What is this movie's theme?\nB: Family bonds.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"テーマ entered Japanese from German academic tradition (Thema). Japanese literature has recurring テーマ: もののあわれ (the pathos of things), 侘(わ)び寂(さ)び (beauty in imperfection), 花(はな)見(み) (impermanence of beauty). Modern テーマ include social isolation, technology's impact, and identity in a globalized world."},

    {type:"teach", trg:"表現(ひょうげん)", src:"expression / representation", pos:"noun", gender:null,
     note:"表現(ひょうげん)する = to express.\n表現(ひょうげん)の自由(じゆう) = freedom of expression.",
     example:"A: この文章(ぶんしょう)の表現(ひょうげん)が美(うつく)しいです。\nB: 作者(さくしゃ)の日本語(にほんご)のセンスが素晴(すば)らしいですね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: The expression in this writing is beautiful.\nB: The author's sense of Japanese is wonderful.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"表現(ひょうげん) combines 表 (surface/express) and 現 (appear/manifest). In Japanese, 表現力(ひょうげんりょく) (expressive power) is a valued skill. Literary 表現(ひょうげん) includes metaphor (比喩(ひゆ)), onomatopoeia (擬態語(ぎたいご)), and seasonal words (季語(きご)). Japan's manga and anime are celebrated globally for innovative visual 表現(ひょうげん)."},

    {type:"teach", trg:"感動(かんどう)", src:"being deeply moved / emotional impact", pos:"noun", gender:null,
     note:"感動(かんどう)する = to be moved/touched.\n感動的(かんどうてき)な = moving/touching.",
     example:"A: この映画(えいが)は本当(ほんとう)に感動的(かんどうてき)でした。\nB: 私(わたし)も泣(な)きました。\nA: それは興味深(きょうみぶか)いですね。\nB: ええ、日本(にほん)ならではの特徴(とくちょう)だと思(おも)います。\nA: 海外(かいがい)ではどうなのでしょうか？\nB: 国(くに)によって異(こと)なりますが、共通(きょうつう)する部分(ぶぶん)もあります。",
     exampleSrc:"A: This movie was truly moving.\nB: I cried too.\nA: That is interesting.\nB: Yes, I think it is a characteristic unique to Japan.\nA: I wonder how it is overseas?\nB: It differs by country, but there are also common aspects.",
     funFact:"感動(かんどう) combines 感 (feel) and 動 (move). Being 感動(かんどう)した (deeply moved) by art, nature, or human kindness is valued in Japanese culture. The phrase 感動(かんどう)を与(あた)える (to give emotional impact) describes great art's purpose. Award speeches in Japan often begin with 感動(かんどう)しています (I am deeply moved)."},

    {type:"teach", trg:"想像(そうぞう)", src:"imagination / creativity", pos:"noun", gender:null,
     note:"想像力(そうぞうりょく) = imagination/creativity power.\nNote: 創造(そうぞう) (to create) is a homophone. Context distinguishes them.",
     example:"A: 子供(こども)の想像力(そうぞうりょく)は素晴(すば)らしいですね。\nB: 大人(おとな)も想像力(そうぞうりょく)を大切(たいせつ)にすべきです。\nA: その経験(けいけん)から何(なに)を学(まな)びましたか？\nB: 事前(じぜん)の準備(じゅんび)がいかに重要(じゅうよう)かを学(まな)びました。\nA: 具体的(ぐたいてき)にどんな準備(じゅんび)をすべきですか？\nB: まず情報収集(じょうほうしゅうしゅう)をして、それから計画(けいかく)を練(ね)ることが大事(だいじ)です。",
     exampleSrc:"A: Children's imagination is wonderful.\nB: Adults should also value creativity.\nA: What did you learn from that experience?\nB: I learned how important advance preparation is.\nA: What kind of preparation should be done specifically?\nB: First, gather information, then it is important to develop a plan.",
     funFact:"Japanese has two そうぞう: 想像(そうぞう) (imagination, to picture in one's mind) and 創造(そうぞう) (creation, to make something new). Both are essential to literature and art. Japan's creative industries (anime, manga, games, fashion) generate over $200 billion annually, making そうぞう a national economic asset."},

    {type:"fb", s:"この作品(さくひん)は戦後(せんご)の日本(にほん)を{1}います。\n(This work depicts post-war Japan.)", a:"えがいて", opts:["えがいて","よんで","かいて","きいて"], sSrc:"This work depicts post-war Japan.",
     hint:"The て-form of the verb meaning to portray or depict artistically."},

    {type:"teach", trg:"共感(きょうかん)", src:"empathy / sympathy / resonance", pos:"noun", gender:null,
     note:"共感(きょうかん)する = to empathize/resonate.\n共感(きょうかん)を呼(よ)ぶ = to evoke empathy.",
     example:"A: この主人公(しゅじんこう)に共感(きょうかん)しますか？\nB: はい、私(わたし)も似(に)た経験(けいけん)があるので共感(きょうかん)します。\nA: 今後(こんご)の展望(てんぼう)についてお聞(き)かせください。\nB: 今後(こんご)はさらに国際化(こくさいか)が進(すす)むと思(おも)います。\nA: それに対(たい)してどのような対策(たいさく)が必要(ひつよう)ですか？\nB: 語学力(ごがくりょく)の向上(こうじょう)と異文化理解(いぶんかりかい)が不可欠(ふかけつ)です。",
     exampleSrc:"A: Do you empathize with this protagonist?\nB: Yes, I have had similar experiences so I empathize.\nA: Please tell me about future prospects.\nB: I think internationalization will progress further going forward.\nA: What measures are needed for that?\nB: Improving language skills and cross-cultural understanding are essential.",
     funFact:"共感(きょうかん) combines 共 (together) and 感 (feel). In modern Japan, 共感(きょうかん) is the most sought quality in social media content. いいね (likes) represent 共感(きょうかん). Literature that generates 共感(きょうかん) connects readers to characters. The word also applies to music, art, and social movements that 'resonate' with people."},

    {type:"mc", q:"感動(かんどう) describes:", opts:["Being deeply moved emotionally","Being confused","Being angry","Being bored"], ans:"Being deeply moved emotionally",
     hint:"This word describes the powerful emotional impact of art, kindness, or beauty."},

    {type:"match", pairs:[
      {trg:"物語(ものがたり)", src:"story / narrative"},
      {trg:"主人公(しゅじんこう)", src:"protagonist"},
      {trg:"作品(さくひん)", src:"literary/artistic work"},
      {trg:"表現(ひょうげん)", src:"expression"},
      {trg:"感動(かんどう)", src:"being deeply moved"}
    ]},

    {type:"fb", s:"子供(こども)の{1}力(りょく)は素晴(すば)らしいですね。\n(Children's imagination is wonderful.)", a:"そうぞう", opts:["そうぞう","ひょうげん","かんどう","きょうかん"], sSrc:"Children's imagination is wonderful.",
     hint:"The word for the mental ability to picture or create new things."},

    {type:"mc", q:"描(えが)く in literary context means:", opts:["To depict or portray through writing","To physically draw a picture","To erase something","To read aloud"], ans:"To depict or portray through writing",
     hint:"In literature, this verb describes how an author represents subjects in w...."}
  ]
};
export default BATCH6_L1;
