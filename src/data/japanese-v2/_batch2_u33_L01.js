// Unit 33 Batch 2 Lesson 1: にほんぶんがくし (Japanese Literary History)
const BATCH2_L_1 = {
  id:"jav2_u33l_b2_1", title:"にほんぶんがくし", icon:"🏯", xp:15, board:true,
  steps:[
    {type:"intro", title:"にほんぶんがくし",
     desc:"Japan's literary history spans over 1,300 years. From classical court poetry to modern Nobel laureates, understanding key periods, genres, and movements enriches your appreciation of Japanese culture and helps with JLPT N1 literary passages.",
     goals:["Identify major literary periods and genres","Discuss classical and modern Japanese literature","Use literary history vocabulary"]},

    {type:"teach", trg:"こじき", src:"Kojiki (Records of Ancient Matters)", pos:"noun", gender:null,
     note:"Kanji: 古事記. Japan's oldest surviving chronicle (712 CE).\nしんわとでんせつ = myths and legends.",
     example:"A: こじきはにほんさいこのれきししょです。\nB: にほんしんわのげんてんですね。\nA: それは素晴(すば)らしい結果(けっか)ですね。\nB: ありがとうございます。チーム全員(ぜんいん)の努力(どりょく)のおかげです。\nA: 今後(こんご)の目標(もくひょう)は何(なん)ですか？\nB: さらに品質(ひんしつ)を向上(こうじょう)させることです。",
     exampleSrc:"A: The Kojiki is Japan's oldest historical record.\nB: It is the source of Japanese mythology.\nA: That is an excellent result.\nB: Thank you. It is thanks to the effort of the whole team.\nA: What are the future goals?\nB: To further improve quality.",
     funFact:"古事記 uses 古 (old), 事 (matters), and 記 (record). Completed in 712 CE, it records creation myths, divine genealogies, and early imperial history. Written in a complex blend of Chinese characters used for Japanese sounds, it preserves the earliest Japanese narratives about the sun goddess Amaterasu and the origins of the imperial line."},

    {type:"teach", trg:"まんようしゅう", src:"Man'yoshu (Collection of Ten Thousand Leaves)", pos:"noun", gender:null,
     note:"Kanji: 万葉集. Japan's oldest poetry anthology (c. 759 CE).\nOver 4,500 poems from all social classes.",
     example:"A: まんようしゅうにはあらゆるかいそうのひとのうたがおさめられています。\nB: にほんしのげんてんともいえますね。\nA: 他(ほか)に何(なに)か気(き)をつけることはありますか？\nB: はい、期限(きげん)を守(まも)ることが一番(いちばん)大切(たいせつ)です。\nA: 期限(きげん)に間(ま)に合(あ)わない場合(ばあい)はどうしますか？\nB: 早(はや)めに上司(じょうし)に相談(そうだん)して、調整(ちょうせい)をお願(ねが)いします。",
     exampleSrc:"A: The Man'yoshu contains poems from people of all social classes.\nB: It can also be called the origin of Japanese poetry.\nA: Is there anything else to be careful about?\nB: Yes, meeting deadlines is the most important thing.\nA: What do you do if you cannot meet the deadline?\nB: Consult your supervisor early and ask for an adjustment.",
     funFact:"万葉集 uses 万 (ten thousand), 葉 (leaves), and 集 (collection). It contains poems from emperors to farmers, making it remarkably democratic for its era. Written in まんようがな (Chinese characters used phonetically), it preserves the emotional landscape of ancient Japan. The current era name 令和 (Reiwa) was derived from this anthology."},

    {type:"teach", trg:"わびさび", src:"wabi-sabi (aesthetic of imperfection)", pos:"noun", gender:null,
     note:"Two combined concepts: わび (rustic simplicity) + さび (beauty of aging).\nCentral to Japanese aesthetics.",
     example:"A: わびさびはにほんびじゅつのこんぽんてきなびいしきです。\nB: かんぺきでないものにびをみいだすかんがえですね。\nA: その件(けん)について進捗(しんちょく)はありますか？\nB: はい、順調(じゅんちょう)に進(すす)んでいます。\nA: 完了(かんりょう)の見込(みこ)みはいつごろですか？\nB: 来月(らいげつ)の初(はじ)めには完了(かんりょう)できる予定(よてい)です。",
     exampleSrc:"A: Wabi-sabi is a fundamental aesthetic sense in Japanese art.\nB: It is the idea of finding beauty in imperfection.\nA: Is there any progress on that matter?\nB: Yes, it is progressing smoothly.\nA: When is it expected to be completed?\nB: It is scheduled to be completed by the beginning of next month.",
     funFact:"わび originally meant loneliness or poverty, and さび meant age or patina. Together they form an aesthetic philosophy that values imperfection, impermanence, and incompleteness. This sensibility influences tea ceremony, pottery, garden design, and literature. A cracked tea bowl with gold repair (きんつぎ) embodies わびさび perfectly."},

    {type:"mc", q:"まんようしゅう is remarkable because:", opts:["It contains poems from all social classes","It was written in modern Japanese","It only includes haiku","It was written by a single author"], ans:"It contains poems from all social classes",
     hint:"This ancient anthology includes verses from emperors to common farmers, making it unusually democratic."},

    {type:"teach", trg:"はいく", src:"haiku (17-syllable poem)", pos:"noun", gender:null,
     note:"Kanji: 俳句. 5-7-5 syllable structure.\nきご (seasonal word) is traditionally required.",
     example:"A: はいくはせかいでもっともみじかいしのけいしきです。\nB: まつおばしょうのふるいけやはあまりにもゆうめいですね。\nA: 以前(いぜん)と比(くら)べてどう変(か)わりましたか？\nB: かなり改善(かいぜん)されました。効率(こうりつ)が上(あ)がりました。\nA: その改善(かいぜん)の要因(よういん)は何(なん)ですか？\nB: 新(あたら)しいシステムの導入(どうにゅう)が大(おお)きかったです。",
     exampleSrc:"A: Haiku is the world's shortest form of poetry.\nB: Matsuo Basho's 'old pond' haiku is extremely famous.\nA: How has it changed compared to before?\nB: It has improved considerably. Efficiency has increased.\nA: What was the cause of that improvement?\nB: The introduction of the new system was a big factor.",
     funFact:"俳句 uses 俳 (actor/fun) and 句 (phrase/verse). Matsuo Basho (1644-1694) elevated はいく from wordplay to high art. The form's constraints (17 syllables, seasonal reference) force extreme compression of meaning. Modern はいく has expanded globally, with associations in over 50 countries. Japan's Haiku International Association promotes cross-cultural understanding through this art form."},

    {type:"teach", trg:"ししょうせつ", src:"I-novel (autobiographical fiction)", pos:"noun", gender:null,
     note:"Kanji: 私小説. A uniquely Japanese literary genre.\nThe author and narrator are nearly identical.",
     example:"A: ししょうせつはにほんどくとくのぶんがくジャンルです。\nB: さっかのじっせいかつをそのままかくのですね。\nA: ご意見(いけん)をお聞(き)かせいただけますか？\nB: 私(わたし)の考(かんが)えでは、もう少(すこ)し検討(けんとう)が必要(ひつよう)だと思(おも)います。\nA: どの点(てん)を検討(けんとう)すべきでしょうか？\nB: 予算(よさん)と人員(じんいん)の面(めん)をもう一度(いちど)見直(みなお)す必要(ひつよう)があります。",
     exampleSrc:"A: The I-novel is a uniquely Japanese literary genre.\nB: The author writes their real life directly.\nA: Could you share your opinion?\nB: In my opinion, I think a bit more consideration is needed.\nA: Which points should be considered?\nB: We need to review the budget and staffing aspects once more.",
     funFact:"私小説 uses 私 (I/private) and 小説 (novel). This genre blurs fiction and autobiography, with the author's own experiences forming the narrative. Emerging in the early 20th century, it became one of Japan's most distinctive literary forms. Critics debate whether ししょうせつ is courageous self-disclosure or narcissistic self-indulgence."},

    {type:"teach", trg:"げんだいぶんがく", src:"contemporary literature / modern literature", pos:"noun", gender:null,
     note:"Kanji: 現代文学. せんごぶんがく = postwar literature.\nげんだいさっか = contemporary authors.",
     example:"A: むらかみはるきはげんだいぶんがくをだいひょうするさっかです。\nB: かれのさくひんはせかいじゅうでよまれていますね。\nA: 何(なに)か良(よ)い方法(ほうほう)はありませんか？\nB: 一(ひと)つ提案(ていあん)があります。段階的(だんかいてき)に進(すす)めてはどうでしょうか。\nA: 段階的(だんかいてき)に、というのはどういうことですか？\nB: まず小規模(しょうきぼ)で試(ため)してから、徐々(じょじょ)に拡大(かくだい)するということです。",
     exampleSrc:"A: Murakami Haruki is a representative author of contemporary literature.\nB: His works are read worldwide.\nA: Is there a good method?\nB: I have one suggestion. How about proceeding step by step?\nA: What do you mean by step by step?\nB: It means trying it on a small scale first, then gradually expanding.",
     funFact:"現代文学 uses 現代 (contemporary/present era) and 文学 (literature). Japan's げんだいぶんがく scene is vibrant: from Murakami Haruki's surrealist novels to Ogawa Yoko's precise prose to Kawakami Mieko's unconventional narratives. The あくたがわしょう (Akutagawa Prize) for emerging writers and なおきしょう (Naoki Prize) for popular fiction are announced biannually, generating intense media coverage."},

    {type:"fb", s:"わびさびはにほんびじゅつのこんぽんてきな{1}です。\n(Wabi-sabi is a fundamental aesthetic sense in Japanese art.)", a:"びいしき", opts:["びいしき","ぎじゅつ","でんとう","れきし"], sSrc:"Wabi-sabi is a fundamental aesthetic sense in Japanese art.",
     hint:"The compound meaning 'aesthetic sense' or 'sense of beauty,' how you perceive and value beauty."},

    {type:"teach", trg:"もののあわれ", src:"the pathos of things / sensitivity to beauty and sadness", pos:"noun", gender:null,
     note:"A core aesthetic concept in Japanese literature.\nAwareness of the beauty in impermanence.",
     example:"A: げんじものがたりにはもののあわれがかんじられます。\nB: うつくしいものがはかないからこそかなしいのですね。\nA: この問題(もんだい)をどう思(おも)いますか？\nB: 複雑(ふくざつ)な問題(もんだい)ですが、解決策(かいけつさく)はあると思(おも)います。\nA: どのような解決策(かいけつさく)を考(かんが)えていますか？\nB: 関係者(かんけいしゃ)全員(ぜんいん)で話(はな)し合(あ)いの場(ば)を設(もう)けることが第一歩(だいいっぽ)です。",
     exampleSrc:"A: The pathos of things can be felt in The Tale of Genji.\nB: It is sad precisely because beautiful things are fleeting.\nA: What do you think about this issue?\nB: It is a complex issue, but I think there are solutions.\nA: What kind of solutions are you thinking of?\nB: The first step is to set up a discussion forum for all stakeholders.",
     funFact:"もののあわれ was defined by 18th-century scholar Motoori Norinaga as the essence of Japanese literature. もの (things) + あわれ (pathos/deep emotion) describes the bittersweet awareness that all beautiful things must pass. Cherry blossoms falling, autumn leaves changing, and twilight are classic もののあわれ moments."},

    {type:"teach", trg:"ぶんごたい", src:"literary style / classical written language", pos:"noun", gender:null,
     note:"Kanji: 文語体. Opposite: こうごたい (colloquial style).\nThe written language used before the Meiji era.",
     example:"A: めいじいぜんのぶんしょうはぶんごたいでかかれていました。\nB: げんだいにほんごとはかなりちがいますね。\nA: 最近(さいきん)の動向(どうこう)はいかがですか？\nB: 全体的(ぜんたいてき)には好調(こうちょう)ですが、一部(いちぶ)課題(かだい)もあります。\nA: どのような課題(かだい)がありますか？\nB: 人材(じんざい)の確保(かくほ)が最(もっと)も大(おお)きな課題(かだい)です。",
     exampleSrc:"A: Texts before the Meiji era were written in literary style.\nB: It is quite different from modern Japanese.\nA: How are the recent trends?\nB: Overall things are going well, but there are some issues.\nA: What kinds of issues are there?\nB: Securing human resources is the biggest challenge.",
     funFact:"文語体 uses 文語 (literary language) and 体 (style/form). Until the げんぶんいっち (unification of spoken and written language) movement in the Meiji era, written Japanese was dramatically different from spoken Japanese. The shift to こうごたい (colloquial style) in literature was revolutionary, making writing accessible to ordinary people."},

    {type:"mc", q:"もののあわれ describes:", opts:["Joy in material possessions","Bittersweet awareness of the beauty in impermanence","Anger at injustice","Fear of the unknown"], ans:"Bittersweet awareness of the beauty in impermanence",
     hint:"This aesthetic concept finds deep emotion in things that are beautiful precisely because they do not last."},

    {type:"fb", s:"ししょうせつはにほんどくとくの{1}ジャンルです。\n(The I-novel is a uniquely Japanese literary genre.)", a:"ぶんがく", opts:["ぶんがく","れきし","びじゅつ","てつがく"], sSrc:"The I-novel is a uniquely Japanese literary genre.",
     hint:"The noun meaning 'literature,' the art of written creative expression."},

    {type:"match", pairs:[{trg:"こじき",src:"Kojiki (oldest chronicle)"},{trg:"まんようしゅう",src:"Man'yoshu (poetry anthology)"},{trg:"わびさび",src:"aesthetic of imperfection"},{trg:"はいく",src:"17-syllable poem"}]},

    {type:"fb", s:"むらかみはるきはげんだい{1}をだいひょうするさっかです。\n(Murakami Haruki is a representative author of contemporary literature.)", a:"ぶんがく", opts:["ぶんがく","しゃかい","ぶんか","びじゅつ"], sSrc:"Murakami Haruki is a representative author of contemporary literature.",
     hint:"The noun for the art of written works including novels, poetry, and essays."},

    {type:"match", pairs:[{trg:"ししょうせつ",src:"I-novel"},{trg:"もののあわれ",src:"pathos of things"},{trg:"ぶんごたい",src:"literary style"},{trg:"げんだいぶんがく",src:"contemporary literature"}]},

    {type:"mc", q:"げんぶんいっち was a Meiji-era movement to:", opts:["Unify spoken and written Japanese","Create a new alphabet","Abolish Chinese characters","Standardize dialects"], ans:"Unify spoken and written Japanese",
     hint:"This movement made writing accessible by aligning it with how people actually spoke."},
  ]
};
export default BATCH2_L_1;
