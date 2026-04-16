// Unit 33 Batch 2 Lesson 1: にほんぶんがくし (Japanese Literary History)
const BATCH2_L_1 = {
  id:"jav2_u33l_b2_1", title:"にほんぶんがくし", icon:"🏯", xp:15, board:true,
  steps:[
    {type:"intro", title:"にほんぶんがくし",
     desc:"Japan's literary history spans over 1,300 years. From classical court poetry to modern Nobel laureates, understanding key periods, genres, and movements enriches your appreciation of Japanese culture and helps with JLPT N1 literary passages.",
     goals:["Identify major literary periods and genres","Discuss classical and modern Japanese literature","Use literary history vocabulary"]},

    {type:"teach", trg:"こじき", src:"Kojiki (Records of Ancient Matters)", pos:"noun", gender:null,
     note:"Kanji: 古事記. Japan's oldest surviving chronicle (712 CE).\nしんわとでんせつ = myths and legends.",
     example:"A: こじきはにほんさいこのれきししょです。\nB: にほんしんわのげんてんですね。",
     exampleSrc:"A: The Kojiki is Japan's oldest historical record.\nB: It is the source of Japanese mythology.",
     funFact:"古事記 uses 古 (old), 事 (matters), and 記 (record). Completed in 712 CE, it records creation myths, divine genealogies, and early imperial history. Written in a complex blend of Chinese characters used for Japanese sounds, it preserves the earliest Japanese narratives about the sun goddess Amaterasu and the origins of the imperial line."},

    {type:"teach", trg:"まんようしゅう", src:"Man'yoshu (Collection of Ten Thousand Leaves)", pos:"noun", gender:null,
     note:"Kanji: 万葉集. Japan's oldest poetry anthology (c. 759 CE).\nOver 4,500 poems from all social classes.",
     example:"A: まんようしゅうにはあらゆるかいそうのひとのうたがおさめられています。\nB: にほんしのげんてんともいえますね。",
     exampleSrc:"A: The Man'yoshu contains poems from people of all social classes.\nB: It can also be called the origin of Japanese poetry.",
     funFact:"万葉集 uses 万 (ten thousand), 葉 (leaves), and 集 (collection). It contains poems from emperors to farmers, making it remarkably democratic for its era. Written in まんようがな (Chinese characters used phonetically), it preserves the emotional landscape of ancient Japan. The current era name 令和 (Reiwa) was derived from this anthology."},

    {type:"teach", trg:"わびさび", src:"wabi-sabi (aesthetic of imperfection)", pos:"noun", gender:null,
     note:"Two combined concepts: わび (rustic simplicity) + さび (beauty of aging).\nCentral to Japanese aesthetics.",
     example:"A: わびさびはにほんびじゅつのこんぽんてきなびいしきです。\nB: かんぺきでないものにびをみいだすかんがえですね。",
     exampleSrc:"A: Wabi-sabi is a fundamental aesthetic sense in Japanese art.\nB: It is the idea of finding beauty in imperfection.",
     funFact:"わび originally meant loneliness or poverty, and さび meant age or patina. Together they form an aesthetic philosophy that values imperfection, impermanence, and incompleteness. This sensibility influences tea ceremony, pottery, garden design, and literature. A cracked tea bowl with gold repair (きんつぎ) embodies わびさび perfectly."},

    {type:"mc", q:"まんようしゅう is remarkable because:", opts:["It contains poems from all social classes","It was written in modern Japanese","It only includes haiku","It was written by a single author"], ans:"It contains poems from all social classes",
     hint:"This ancient anthology includes verses from emperors to common farmers, making it unusually democratic."},

    {type:"teach", trg:"はいく", src:"haiku (17-syllable poem)", pos:"noun", gender:null,
     note:"Kanji: 俳句. 5-7-5 syllable structure.\nきご (seasonal word) is traditionally required.",
     example:"A: はいくはせかいでもっともみじかいしのけいしきです。\nB: まつおばしょうのふるいけやはあまりにもゆうめいですね。",
     exampleSrc:"A: Haiku is the world's shortest form of poetry.\nB: Matsuo Basho's 'old pond' haiku is extremely famous.",
     funFact:"俳句 uses 俳 (actor/fun) and 句 (phrase/verse). Matsuo Basho (1644-1694) elevated はいく from wordplay to high art. The form's constraints (17 syllables, seasonal reference) force extreme compression of meaning. Modern はいく has expanded globally, with associations in over 50 countries. Japan's Haiku International Association promotes cross-cultural understanding through this art form."},

    {type:"teach", trg:"ししょうせつ", src:"I-novel (autobiographical fiction)", pos:"noun", gender:null,
     note:"Kanji: 私小説. A uniquely Japanese literary genre.\nThe author and narrator are nearly identical.",
     example:"A: ししょうせつはにほんどくとくのぶんがくジャンルです。\nB: さっかのじっせいかつをそのままかくのですね。",
     exampleSrc:"A: The I-novel is a uniquely Japanese literary genre.\nB: The author writes their real life directly.",
     funFact:"私小説 uses 私 (I/private) and 小説 (novel). This genre blurs fiction and autobiography, with the author's own experiences forming the narrative. Emerging in the early 20th century, it became one of Japan's most distinctive literary forms. Critics debate whether ししょうせつ is courageous self-disclosure or narcissistic self-indulgence."},

    {type:"teach", trg:"げんだいぶんがく", src:"contemporary literature / modern literature", pos:"noun", gender:null,
     note:"Kanji: 現代文学. せんごぶんがく = postwar literature.\nげんだいさっか = contemporary authors.",
     example:"A: むらかみはるきはげんだいぶんがくをだいひょうするさっかです。\nB: かれのさくひんはせかいじゅうでよまれていますね。",
     exampleSrc:"A: Murakami Haruki is a representative author of contemporary literature.\nB: His works are read worldwide.",
     funFact:"現代文学 uses 現代 (contemporary/present era) and 文学 (literature). Japan's げんだいぶんがく scene is vibrant: from Murakami Haruki's surrealist novels to Ogawa Yoko's precise prose to Kawakami Mieko's unconventional narratives. The あくたがわしょう (Akutagawa Prize) for emerging writers and なおきしょう (Naoki Prize) for popular fiction are announced biannually, generating intense media coverage."},

    {type:"fb", s:"わびさびはにほんびじゅつのこんぽんてきな{1}です。\n(Wabi-sabi is a fundamental aesthetic sense in Japanese art.)", a:"びいしき", opts:["びいしき","ぎじゅつ","でんとう","れきし"], sSrc:"Wabi-sabi is a fundamental aesthetic sense in Japanese art.",
     hint:"The compound meaning 'aesthetic sense' or 'sense of beauty,' how you perceive and value beauty."},

    {type:"teach", trg:"もののあわれ", src:"the pathos of things / sensitivity to beauty and sadness", pos:"noun", gender:null,
     note:"A core aesthetic concept in Japanese literature.\nAwareness of the beauty in impermanence.",
     example:"A: げんじものがたりにはもののあわれがかんじられます。\nB: うつくしいものがはかないからこそかなしいのですね。",
     exampleSrc:"A: The pathos of things can be felt in The Tale of Genji.\nB: It is sad precisely because beautiful things are fleeting.",
     funFact:"もののあわれ was defined by 18th-century scholar Motoori Norinaga as the essence of Japanese literature. もの (things) + あわれ (pathos/deep emotion) describes the bittersweet awareness that all beautiful things must pass. Cherry blossoms falling, autumn leaves changing, and twilight are classic もののあわれ moments."},

    {type:"teach", trg:"ぶんごたい", src:"literary style / classical written language", pos:"noun", gender:null,
     note:"Kanji: 文語体. Opposite: こうごたい (colloquial style).\nThe written language used before the Meiji era.",
     example:"A: めいじいぜんのぶんしょうはぶんごたいでかかれていました。\nB: げんだいにほんごとはかなりちがいますね。",
     exampleSrc:"A: Texts before the Meiji era were written in literary style.\nB: It is quite different from modern Japanese.",
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
