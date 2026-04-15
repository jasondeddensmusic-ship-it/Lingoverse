// Unit 02 Expansion L04 — More Countries, Languages & Where Are You From?
const LESSON_4 = {
  id:"jav2_u2l4", title:"せかいのくに", icon:"🌐", xp:15, board:true,
  steps:[
    {type:"intro", title:"せかいのくに",
     desc:"Learn more country names from around the world and how to talk about languages you speak. You will practice the jin, go, and kara patterns with many new countries.",
     goals:["Name 10+ additional countries","Say which languages you speak","Use the pattern X-go wo hanashimasu (I speak X language)"]},

    {type:"teach", trg:"ドイツ", src:"Germany", pos:"noun", gender:null,
     note:"From Dutch 'Duits.' Written in katakana.\nドイツじん = German person. ドイツご = German language.",
     example:"A: ドイツからですか？\nB: はい、ベルリンからです。",
     exampleSrc:"A: Are you from Germany?\nB: Yes, from Berlin.",
     funFact:"Japan learned about Germany through Dutch traders (the only Europeans allowed in Edo-era Japan), so the Japanese name comes from Dutch, not German (Deutschland) or English (Germany). This is why it sounds so different."},

    {type:"teach", trg:"かんこく", src:"South Korea", pos:"noun", gender:null,
     note:"Short for だいかんみんこく (Republic of Korea).\nかんこくじん = Korean person. かんこくご = Korean language.\nKanji: 韓国.",
     example:"A: かんこくりょうりがすきです。\nB: わたしも！ビビンバがすきです。",
     exampleSrc:"A: I like Korean food.\nB: Me too! I like bibimbap.",
     funFact:"韓 (Han, Korea) + 国 (country). Japan and Korea share complex history but also deep cultural exchange. K-pop (韓流, kanryuu) is massively popular in Japan. Korean language study surged among young Japanese people thanks to K-dramas."},

    {type:"teach", trg:"ブラジル", src:"Brazil", pos:"noun", gender:null,
     note:"Home to the largest Japanese diaspora outside Japan.\nブラジルじん = Brazilian person.",
     example:"A: ブラジルじんですか？\nB: はい、サンパウロからです。",
     exampleSrc:"A: Are you Brazilian?\nB: Yes, from Sao Paulo.",
     funFact:"Brazil has about 1.5 million people of Japanese descent, the largest community outside Japan. Sao Paulo's Liberdade district is a Little Tokyo. Many Japanese-Brazilians moved back to Japan for factory work, creating a unique bicultural community."},

    {type:"teach", trg:"オーストラリア", src:"Australia", pos:"noun", gender:null,
     note:"Popular travel and study abroad destination for Japanese students.\nWritten in katakana.",
     example:"A: オーストラリアにいきたいです。\nB: いいですね。コアラがみたいですか？",
     exampleSrc:"A: I want to go to Australia.\nB: Nice. Do you want to see koalas?",
     funFact:"Australia is one of the top destinations for Japanese working holidays and study abroad. The abbreviation Oosutoraria is long, so many Japanese people just say Oosutoraria or shorten it to Ooji (Aussie) in casual speech."},

    {type:"mc", q:"ドイツ is the Japanese name for:", opts:["Denmark","Germany","Austria","Netherlands"], ans:"Germany",
     hint:"This word came from Dutch traders who called their neighbors by a specific name."},

    {type:"teach", trg:"インド", src:"India", pos:"noun", gender:null,
     note:"Written in katakana. インドじん = Indian person.\nJapanese curry was influenced by Indian curry via Britain.",
     example:"A: インドりょうりはすきですか？\nB: はい、カレーがだいすきです。",
     exampleSrc:"A: Do you like Indian food?\nB: Yes, I love curry.",
     funFact:"Japanese curry (karee) actually came from Britain, not directly from India. The British Navy brought Indian-inspired curry to Japan in the Meiji era. Japanese curry is now sweeter and thicker than Indian curry, and it is considered a national comfort food."},

    {type:"teach", trg:"タイ", src:"Thailand", pos:"noun", gender:null,
     note:"Written in katakana. タイじん = Thai person.\nタイりょうり (Thai food) is very popular in Japan.",
     example:"A: タイにいったことがありますか？\nB: はい、バンコクにいきました。",
     exampleSrc:"A: Have you been to Thailand?\nB: Yes, I went to Bangkok.",
     funFact:"Thailand is one of the most popular vacation destinations for Japanese travelers. Thai massage, Thai food, and Thai temples draw millions of Japanese tourists yearly. Many Thai restaurants in Japan offer surprisingly authentic food."},

    {type:"teach", trg:"スペイン", src:"Spain", pos:"noun", gender:null,
     note:"Written in katakana. スペインご = Spanish language.\nSpanish is the second most-spoken native language worldwide.",
     example:"A: スペインごをはなしますか？\nB: すこしだけはなします。",
     exampleSrc:"A: Do you speak Spanish?\nB: I speak just a little.",
     funFact:"The word comes from 'Espana' via Portuguese. Spanish language study is growing in Japan because of business with Latin America. Flamenco dancing is surprisingly popular as a hobby in Japan, with more flamenco schools in Tokyo than in some Spanish cities."},

    {type:"teach", trg:"はなす", src:"to speak / to talk", pos:"verb", gender:null,
     note:"A u-verb (godan). Polite: はなします.\nPattern: X語を はなします = I speak X language.\nKanji: 話す.",
     example:"A: なにごをはなしますか？\nB: えいごとにほんごをはなします。",
     exampleSrc:"A: What languages do you speak?\nB: I speak English and Japanese.",
     funFact:"話 combines 言 (words) + 舌 (tongue). Speaking is literally 'tongue-words.' Hanasu covers both 'speak a language' and 'talk/chat.' The polite form hanashimasu is used in formal introductions about language ability."},

    {type:"fb", s:"えいごを___ますか？",
     a:["はなし"],
     opts:["はなし","たべ","のみ","よみ"],
     hint:"The polite stem of the verb meaning 'to speak' or 'to talk.'",
     sSrc:"Do you speak English?"},

    {type:"teach", trg:"えいご", src:"English language", pos:"noun", gender:null,
     note:"英語. One of the most studied languages in Japan. Mandatory in schools from elementary level.",
     example:"A: えいごがじょうずですね。\nB: ありがとうございます。まだまだです。",
     exampleSrc:"A: Your English is good.\nB: Thank you. I still have a long way to go.",
     funFact:"英 originally refers to England (from a Chinese name for Britain). Despite years of mandatory English education, many Japanese adults feel unconfident speaking English. The phrase 'eigo ga nigate' (weak at English) is extremely common."},

    {type:"teach", trg:"すこし", src:"a little / a bit", pos:"adv", gender:null,
     note:"Very useful word for hedging. Also: ちょっと (chotto, casual equivalent).\nKanji: 少し.",
     example:"A: にほんごをはなしますか？\nB: はい、すこしはなします。",
     exampleSrc:"A: Do you speak Japanese?\nB: Yes, I speak a little.",
     funFact:"Japanese culture values modesty. Even fluent speakers say sukoshi (a little) when asked about their ability. This self-deprecation (kenson) is expected. Claiming you speak a language 'well' (jouzu) about yourself sounds arrogant."},

    {type:"teach", trg:"ぺらぺら", src:"fluently (onomatopoeia)", pos:"adv", gender:null,
     note:"Mimetic word for speaking fluently. Sounds like smooth, flowing speech.",
     example:"A: にほんごがぺらぺらですね！\nB: いえいえ、まだまだです。",
     exampleSrc:"A: Your Japanese is so fluent!\nB: No, no, I still have a long way to go.",
     funFact:"Pera-pera mimics the smooth flow of fluent speech. Japanese has hundreds of these onomatopoeia pairs: gata-gata (rattling), pika-pika (sparkling), fura-fura (dizzy/wobbly). They add vivid texture to descriptions."},

    {type:"mc", q:"すこし means:", opts:["Very much","A little","Fluently","Not at all"], ans:"A little",
     hint:"The modest word Japanese speakers use even when they are actually quite skilled."},

    {type:"teach", trg:"ロシア", src:"Russia", pos:"noun", gender:null,
     note:"Written in katakana. ロシアじん = Russian person. ロシアご = Russian language.",
     example:"A: ロシアごはむずかしいですか？\nB: はい、とてもむずかしいです。",
     exampleSrc:"A: Is Russian difficult?\nB: Yes, very difficult.",
     funFact:"Japan and Russia are technically still without a peace treaty from World War II due to the Kuril Islands dispute. Despite this, cultural exchange thrives. Russian literature and ballet are deeply respected in Japan."},

    {type:"teach", trg:"イタリア", src:"Italy", pos:"noun", gender:null,
     note:"Written in katakana. イタリアじん = Italian person.\nItalian food is hugely popular in Japan.",
     example:"A: イタリアりょうりがすきですか？\nB: はい、パスタがだいすきです。",
     exampleSrc:"A: Do you like Italian food?\nB: Yes, I love pasta.",
     funFact:"Italian cuisine rivals Japanese food in popularity within Japan. Many Japanese chefs train in Italy. The Japanese-Italian fusion category (wafu pasta, Japanese-style pasta) is a unique culinary genre found nowhere else in the world."},

    {type:"match", pairs:[
      {trg:"ドイツ", src:"Germany"},
      {trg:"かんこく", src:"South Korea"},
      {trg:"ブラジル", src:"Brazil"},
      {trg:"インド", src:"India"}
    ]},

    {type:"match", pairs:[
      {trg:"タイ", src:"Thailand"},
      {trg:"スペイン", src:"Spain"},
      {trg:"ロシア", src:"Russia"},
      {trg:"イタリア", src:"Italy"}
    ]},

    {type:"fb", s:"にほんごが___ですね！",
     a:["ぺらぺら"],
     opts:["ぺらぺら","すこし","まずい","たかい"],
     hint:"The onomatopoeia word that describes smooth, flowing speech.",
     sSrc:"Your Japanese is so fluent!"},

    {type:"mc", q:"How do you say 'I speak Korean'?", opts:["かんこくごをはなします","かんこくじんです","かんこくからです","かんこくがすきです"], ans:"かんこくごをはなします",
     hint:"Country + go (language) + wo + hanashimasu (speak)."},

    {type:"mc", q:"Which country has the largest Japanese diaspora?", opts:["アメリカ","ブラジル","オーストラリア","イギリス"], ans:"ブラジル",
     hint:"About 1.5 million people of Japanese descent live in this South American country."},
  ]
};
export default LESSON_4;
