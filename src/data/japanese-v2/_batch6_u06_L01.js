// Batch 6 – Unit 06 (A1.2 Family): Describing People
const BATCH6_L1 = {
  id:"jav2_u06l_b6_1", title:"人(ひと)の特徴(とくちょう)", icon:"👤", xp:15, board:true,
  steps:[
    {type:"intro", title:"人(ひと)の特徴(とくちょう)",
     desc:"Learn to describe people's physical appearance and personality. These adjectives are essential for talking about family members, friends, and people you meet.",
     goals:["Describe physical appearance with adjectives","Talk about personality traits","Use adjective pairs: 高(たか)い/低(ひく)い, 太(ふと)い/細(ほそ)い"]},

    {type:"teach", trg:"背(せ)が高(たか)い", src:"tall (person)", pos:"adj", gender:null,
     note:"背(せ) = height (stature), 高(たか)い = high/tall.\n背(せ)が低(ひく)い = short (person).",
     example:"A: お兄(にい)さんは背(せ)が高(たか)いですか？\nB: はい、180センチです。",
     exampleSrc:"A: Is your older brother tall?\nB: Yes, he is 180 cm.",
     funFact:"Japanese uses 背(せ)が高(たか)い (stature is high) rather than a single word for tall. Average height in Japan is about 171 cm for men and 158 cm for women. Taller people are sometimes called のっぽ (beanpole), a playful word."},

    {type:"teach", trg:"背(せ)が低(ひく)い", src:"short (person)", pos:"adj", gender:null,
     note:"背(せ) = height, 低(ひく)い = low/short.\nPolitely, people say 小(ちい)さい (small) instead.",
     example:"A: 妹(いもうと)は背(せ)が低(ひく)いです。\nB: かわいいですね。",
     exampleSrc:"A: My younger sister is short.\nB: How cute.",
     funFact:"Directly calling someone 背(せ)が低(ひく)い can sound blunt. Japanese people prefer softer expressions: 小(ちい)さい (small/petite) or 小柄(こがら)な (small-built). In anime and manga, short characters are often the most powerful, a trope called ちびだけど強(つよ)い (small but strong)."},

    {type:"teach", trg:"優(やさ)しい", src:"kind / gentle", pos:"adj", gender:null,
     note:"I-adjective. 優(やさ)しい人(ひと) = a kind person.\nKanji: 優しい.",
     example:"A: お母(かあ)さんはどんな人(ひと)ですか？\nB: とても優(やさ)しい人(ひと)です。",
     exampleSrc:"A: What kind of person is your mother?\nB: She is a very kind person.",
     funFact:"優(やさ)しい is one of the most valued traits in Japanese culture. It means kind, gentle, and considerate all at once. When describing an ideal partner, 優(やさ)しい人(ひと) tops the list. The kanji 優 also appears in 優秀(ゆうしゅう) (excellent) and 優勝(ゆうしょう) (championship victory)."},

    {type:"teach", trg:"厳(きび)しい", src:"strict / harsh / tough", pos:"adj", gender:null,
     note:"I-adjective. 厳(きび)しい先生(せんせい) = a strict teacher.\nKanji: 厳しい.",
     example:"A: お父(とう)さんは厳(きび)しいですか？\nB: 少(すこ)し厳(きび)しいですが、優(やさ)しいです。",
     exampleSrc:"A: Is your father strict?\nB: He is a little strict, but kind.",
     funFact:"厳(きび)しい describes strictness in people, difficulty of tasks, and harshness of weather. 厳(きび)しい冬(ふゆ) = a harsh winter. In Japanese schools, 厳(きび)しい先生(せんせい) are often respected: the phrase 愛(あい)のムチ (whip of love) means strict discipline from caring."},

    {type:"teach", trg:"面白(おもしろ)い", src:"interesting / funny", pos:"adj", gender:null,
     note:"I-adjective. 面白(おもしろ)い人(ひと) = a funny/interesting person.\nOpposite: つまらない (boring).",
     example:"A: あの人(ひと)は面白(おもしろ)いですね。\nB: そうですね。いつも笑(わら)っています。",
     exampleSrc:"A: That person is funny, isn't he?\nB: Yes. He is always laughing.",
     funFact:"面白(おもしろ)い covers both 'interesting' and 'funny' in Japanese. The kanji 面白(おもしろ)い literally means 'white face,' possibly from watching a bright, entertaining stage performance. In Kansai (Osaka), being 面白(おもしろ)い is a social superpower."},

    {type:"mc", q:"優(やさ)しい means:", opts:["Kind and gentle","Strict and tough","Tall","Funny"], ans:"Kind and gentle",
     hint:"This adjective describes someone who is considerate and warm-hearted."},

    {type:"teach", trg:"真面目(まじめ)", src:"serious / diligent / earnest", pos:"adj", gender:null,
     note:"Na-adjective. 真面目(まじめ)な人(ひと) = a serious/hardworking person.\nKanji: 真面目.",
     example:"A: 兄(あに)はとても真面目(まじめ)です。\nB: 勉強(べんきょう)が好(す)きですか？",
     exampleSrc:"A: My older brother is very serious.\nB: Does he like studying?",
     funFact:"真面目(まじめ) literally means 'true face.' Being 真面目(まじめ) is generally positive in Japan: reliable, hardworking, sincere. However, 真面目(まじめ)すぎる (too serious) can mean someone who cannot relax. The balance between 真面目(まじめ) and 楽(たの)しい (fun) is important."},

    {type:"teach", trg:"元気(げんき)", src:"energetic / healthy / well", pos:"adj", gender:null,
     note:"Na-adjective. お元気(げんき)ですか = how are you?\n元気(げんき)な子(こ)ども = an energetic child.",
     example:"A: お祖母(ばあ)さんはお元気(げんき)ですか？\nB: はい、とても元気(げんき)です。",
     exampleSrc:"A: Is your grandmother well?\nB: Yes, she is very well.",
     funFact:"元気(げんき) combines 元 (origin) and 気 (energy/spirit). It literally means 'original energy.' お元気(げんき)ですか is the standard 'how are you?' はい、元気(げんき)です is the standard answer. The word captures physical health, mental vitality, and positive energy all at once."},

    {type:"teach", trg:"静(しず)か", src:"quiet / calm", pos:"adj", gender:null,
     note:"Na-adjective. 静(しず)かな人(ひと) = a quiet person.\nKanji: 静か.",
     example:"A: 妹(いもうと)は静(しず)かな子(こ)です。\nB: 恥(は)ずかしがり屋(や)ですか？",
     exampleSrc:"A: My little sister is a quiet child.\nB: Is she shy?",
     funFact:"静(しず)か values are deep in Japanese culture. 静(しず)かにしてください (please be quiet) is common on trains and in libraries. The tea ceremony (茶道(さどう)) and zen gardens embody 静(しず)か as an aesthetic. Many temples advertise 静(しず)かな環境(かんきょう) (quiet environment)."},

    {type:"teach", trg:"賑(にぎ)やか", src:"lively / bustling", pos:"adj", gender:null,
     note:"Na-adjective. Opposite of 静(しず)か.\n賑(にぎ)やかな町(まち) = a lively town.",
     example:"A: この町(まち)は賑(にぎ)やかですね。\nB: そうですね。いつも人(ひと)が多(おお)いです。",
     exampleSrc:"A: This town is lively, isn't it?\nB: Yes. There are always many people.",
     funFact:"賑(にぎ)やか shares its root with 握(にぎ)る (to grip). A 賑(にぎ)やかな place is one tightly packed with people and energy. Tokyo's 渋谷(しぶや), Osaka's 道頓堀(どうとんぼり), and festival streets are 賑(にぎ)やか. Japanese people enjoy the contrast between 賑(にぎ)やか entertainment districts and 静(しず)か residential areas."},

    {type:"fb", s:"お母(かあ)さんはとても{1}人(ひと)です。\n(My mother is a very kind person.)", a:"優(やさ)しい", opts:["優(やさ)しい","厳(きび)しい","高(たか)い","小(ちい)さい"], sSrc:"My mother is a very kind person.",
     hint:"The adjective meaning gentle and considerate."},

    {type:"teach", trg:"恥(は)ずかしい", src:"shy / embarrassed", pos:"adj", gender:null,
     note:"I-adjective. 恥(は)ずかしがり屋(や) = a shy person.\nKanji: 恥ずかしい.",
     example:"A: 日本語(にほんご)で話(はな)すのが恥(は)ずかしいです。\nB: 大丈夫(だいじょうぶ)。練習(れんしゅう)すれば慣(な)れますよ。",
     exampleSrc:"A: I am embarrassed to speak in Japanese.\nB: It is okay. You will get used to it with practice.",
     funFact:"恥(は)ずかしい covers both shyness and embarrassment. The famous Japanese expression 恥(は)じを知(し)る (to know shame) is a cultural value. Ruth Benedict's book 'The Chrysanthemum and the Sword' famously described Japan as a 'shame culture,' though this is an oversimplification."},

    {type:"teach", trg:"かっこいい", src:"cool / handsome / stylish", pos:"adj", gender:null,
     note:"I-adjective. Originally for men, now used broadly.\nかっこわるい = uncool/lame.",
     example:"A: あの人(ひと)はかっこいいですね。\nB: そうですね。服(ふく)も素敵(すてき)です。",
     exampleSrc:"A: That person is cool, isn't he?\nB: Yes. His clothes are also nice.",
     funFact:"かっこいい comes from かっこう (格好(かっこう), appearance) + いい (good). It originally described manly attractiveness but now applies to anything stylish: people, cars, fashion, actions. A parallel word, かわいい (cute), is perhaps Japan's most famous cultural export."},

    {type:"mc", q:"The opposite of 静(しず)か (quiet) is:", opts:["賑(にぎ)やか (lively)","優(やさ)しい (kind)","厳(きび)しい (strict)","恥(は)ずかしい (shy)"], ans:"賑(にぎ)やか (lively)",
     hint:"This na-adjective describes a bustling, energetic atmosphere."},

    {type:"match", pairs:[
      {trg:"優(やさ)しい", src:"kind / gentle"},
      {trg:"厳(きび)しい", src:"strict / harsh"},
      {trg:"面白(おもしろ)い", src:"interesting / funny"},
      {trg:"静(しず)か", src:"quiet / calm"},
      {trg:"恥(は)ずかしい", src:"shy / embarrassed"}
    ]},

    {type:"fb", s:"この町(まち)は{1}ですね。\n(This town is lively, isn't it?)", a:"賑(にぎ)やか", opts:["賑(にぎ)やか","静(しず)か","厳(きび)しい","恥(は)ずかしい"], sSrc:"This town is lively, isn't it?",
     hint:"The na-adjective that means bustling and full of energy."},

    {type:"mc", q:"真面目(まじめ)な人(ひと) describes someone who is:", opts:["Serious and diligent","Funny and playful","Shy and quiet","Tall and strong"], ans:"Serious and diligent",
     hint:"This na-adjective describes someone reliable and hardworking."}
  ,{type:"match",pairs:[{trg:"背(せ)が高(たか)い",src:"tall (person)"},{trg:"背(せ)が低(ひく)い",src:"short (person)"},{trg:"真面目(まじめ)",src:"serious / diligent / earnest"},{trg:"元気(げんき)",src:"energetic / healthy / well"},{trg:"かっこいい",src:"cool / handsome / stylish"}]}]
};
export default BATCH6_L1;
