// Batch 6 – Unit 06 (A1.2 Family): Describing People
const BATCH6_L1 = {
  id:"jav2_u06l_b6_1", title:"ひとのとくちょう", icon:"👤", xp:15, board:true,
  steps:[
    {type:"intro", title:"ひとのとくちょう",
     desc:"Learn to describe people's physical appearance and personality. These adjectives are essential for talking about family members, friends, and people you meet.",
     goals:["Describe physical appearance with adjectives","Talk about personality traits","Use adjective pairs: たかい/ひくい, ふとい/ほそい"]},

    {type:"teach", trg:"せがたかい", src:"tall (person)", pos:"adj", gender:null,
     note:"せ = height (stature), たかい = high/tall.\nせがひくい = short (person).",
     example:"A: おにいさんはせがたかいですか？\nB: はい、ひゃくはちじゅうセンチです。",
     exampleSrc:"A: Is your older brother tall?\nB: Yes, he is 180 cm.",
     funFact:"Japanese uses せがたかい (stature is high) rather than a single word for tall. Average height in Japan is about 171 cm for men and 158 cm for women. Taller people are sometimes called のっぽ (beanpole), a playful word."},

    {type:"teach", trg:"せがひくい", src:"short (person)", pos:"adj", gender:null,
     note:"せ = height, ひくい = low/short.\nPolitely, people say ちいさい (small) instead.",
     example:"A: いもうとはせがひくいです。\nB: かわいいですね。",
     exampleSrc:"A: My younger sister is short.\nB: How cute.",
     funFact:"Directly calling someone せがひくい can sound blunt. Japanese people prefer softer expressions: ちいさい (small/petite) or こがらな (small-built). In anime and manga, short characters are often the most powerful, a trope called ちびだけどつよい (small but strong)."},

    {type:"teach", trg:"やさしい", src:"kind / gentle", pos:"adj", gender:null,
     note:"I-adjective. やさしいひと = a kind person.\nKanji: 優しい.",
     example:"A: おかあさんはどんなひとですか？\nB: とてもやさしいひとです。",
     exampleSrc:"A: What kind of person is your mother?\nB: She is a very kind person.",
     funFact:"やさしい is one of the most valued traits in Japanese culture. It means kind, gentle, and considerate all at once. When describing an ideal partner, やさしいひと tops the list. The kanji 優 also appears in ゆうしゅう (excellent) and ゆうしょう (championship victory)."},

    {type:"teach", trg:"きびしい", src:"strict / harsh / tough", pos:"adj", gender:null,
     note:"I-adjective. きびしいせんせい = a strict teacher.\nKanji: 厳しい.",
     example:"A: おとうさんはきびしいですか？\nB: すこしきびしいですが、やさしいです。",
     exampleSrc:"A: Is your father strict?\nB: He is a little strict, but kind.",
     funFact:"きびしい describes strictness in people, difficulty of tasks, and harshness of weather. きびしいふゆ = a harsh winter. In Japanese schools, きびしいせんせい are often respected: the phrase あいのムチ (whip of love) means strict discipline from caring."},

    {type:"teach", trg:"おもしろい", src:"interesting / funny", pos:"adj", gender:null,
     note:"I-adjective. おもしろいひと = a funny/interesting person.\nOpposite: つまらない (boring).",
     example:"A: あのひとはおもしろいですね。\nB: そうですね。いつもわらっています。",
     exampleSrc:"A: That person is funny, isn't he?\nB: Yes. He is always laughing.",
     funFact:"おもしろい covers both 'interesting' and 'funny' in Japanese. The kanji 面白い literally means 'white face,' possibly from watching a bright, entertaining stage performance. In Kansai (Osaka), being おもしろい is a social superpower."},

    {type:"mc", q:"やさしい means:", opts:["Kind and gentle","Strict and tough","Tall","Funny"], ans:"Kind and gentle",
     hint:"This adjective describes someone who is considerate and warm-hearted."},

    {type:"teach", trg:"まじめ", src:"serious / diligent / earnest", pos:"adj", gender:null,
     note:"Na-adjective. まじめなひと = a serious/hardworking person.\nKanji: 真面目.",
     example:"A: あにはとてもまじめです。\nB: べんきょうがすきですか？",
     exampleSrc:"A: My older brother is very serious.\nB: Does he like studying?",
     funFact:"まじめ (真面目) literally means 'true face.' Being まじめ is generally positive in Japan: reliable, hardworking, sincere. However, まじめすぎる (too serious) can mean someone who cannot relax. The balance between まじめ and たのしい (fun) is important."},

    {type:"teach", trg:"げんき", src:"energetic / healthy / well", pos:"adj", gender:null,
     note:"Na-adjective. おげんきですか = how are you?\nげんきなこども = an energetic child.",
     example:"A: おばあさんはおげんきですか？\nB: はい、とてもげんきです。",
     exampleSrc:"A: Is your grandmother well?\nB: Yes, she is very well.",
     funFact:"げんき (元気) combines 元 (origin) and 気 (energy/spirit). It literally means 'original energy.' おげんきですか is the standard 'how are you?' はい、げんきです is the standard answer. The word captures physical health, mental vitality, and positive energy all at once."},

    {type:"teach", trg:"しずか", src:"quiet / calm", pos:"adj", gender:null,
     note:"Na-adjective. しずかなひと = a quiet person.\nKanji: 静か.",
     example:"A: いもうとはしずかなこです。\nB: はずかしがりやですか？",
     exampleSrc:"A: My little sister is a quiet child.\nB: Is she shy?",
     funFact:"しずか values are deep in Japanese culture. しずかにしてください (please be quiet) is common on trains and in libraries. The tea ceremony (さどう) and zen gardens embody しずか as an aesthetic. Many temples advertise しずかなかんきょう (quiet environment)."},

    {type:"teach", trg:"にぎやか", src:"lively / bustling", pos:"adj", gender:null,
     note:"Na-adjective. Opposite of しずか.\nにぎやかなまち = a lively town.",
     example:"A: このまちはにぎやかですね。\nB: そうですね。いつもひとがおおいです。",
     exampleSrc:"A: This town is lively, isn't it?\nB: Yes. There are always many people.",
     funFact:"にぎやか shares its root with にぎる (to grip). A にぎやかな place is one tightly packed with people and energy. Tokyo's Shibuya, Osaka's Dotonbori, and festival streets are にぎやか. Japanese people enjoy the contrast between にぎやか entertainment districts and しずか residential areas."},

    {type:"fb", s:"おかあさんはとても{1}ひとです。\n(My mother is a very kind person.)", a:"やさしい", opts:["やさしい","きびしい","たかい","ちいさい"], sSrc:"My mother is a very kind person.",
     hint:"The adjective meaning gentle and considerate."},

    {type:"teach", trg:"はずかしい", src:"shy / embarrassed", pos:"adj", gender:null,
     note:"I-adjective. はずかしがりや = a shy person.\nKanji: 恥ずかしい.",
     example:"A: にほんごではなすのがはずかしいです。\nB: だいじょうぶ。れんしゅうすればなれますよ。",
     exampleSrc:"A: I am embarrassed to speak in Japanese.\nB: It is okay. You will get used to it with practice.",
     funFact:"はずかしい covers both shyness and embarrassment. The famous Japanese expression はじをしる (to know shame) is a cultural value. Ruth Benedict's book 'The Chrysanthemum and the Sword' famously described Japan as a 'shame culture,' though this is an oversimplification."},

    {type:"teach", trg:"かっこいい", src:"cool / handsome / stylish", pos:"adj", gender:null,
     note:"I-adjective. Originally for men, now used broadly.\nかっこわるい = uncool/lame.",
     example:"A: あのひとはかっこいいですね。\nB: そうですね。ふくもすてきです。",
     exampleSrc:"A: That person is cool, isn't he?\nB: Yes. His clothes are also nice.",
     funFact:"かっこいい comes from かっこう (格好, appearance) + いい (good). It originally described manly attractiveness but now applies to anything stylish: people, cars, fashion, actions. A parallel word, かわいい (cute), is perhaps Japan's most famous cultural export."},

    {type:"mc", q:"The opposite of しずか (quiet) is:", opts:["にぎやか (lively)","やさしい (kind)","きびしい (strict)","はずかしい (shy)"], ans:"にぎやか (lively)",
     hint:"This na-adjective describes a bustling, energetic atmosphere."},

    {type:"match", pairs:[
      {trg:"やさしい", src:"kind / gentle"},
      {trg:"きびしい", src:"strict / harsh"},
      {trg:"おもしろい", src:"interesting / funny"},
      {trg:"しずか", src:"quiet / calm"},
      {trg:"はずかしい", src:"shy / embarrassed"}
    ]},

    {type:"fb", s:"このまちは{1}ですね。\n(This town is lively, isn't it?)", a:"にぎやか", opts:["にぎやか","しずか","きびしい","はずかしい"], sSrc:"This town is lively, isn't it?",
     hint:"The na-adjective that means bustling and full of energy."},

    {type:"mc", q:"まじめなひと describes someone who is:", opts:["Serious and diligent","Funny and playful","Shy and quiet","Tall and strong"], ans:"Serious and diligent",
     hint:"This na-adjective describes someone reliable and hardworking."}
  ]
};
export default BATCH6_L1;
