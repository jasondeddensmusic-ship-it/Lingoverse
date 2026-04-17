// Batch 7 – Unit 02 (A1.1 Self-Intro): Personality & Appearance Adjectives
const BATCH7_L1 = {
  id:"jav2_u02l_b7_1", title:"どんな人(ひと)？", icon:"🪞", xp:15, board:true,
  steps:[
    {type:"intro", title:"どんな人(ひと)？",
     desc:"Learn adjectives to describe people's personalities and appearance. These words are essential for talking about yourself and others in self-introductions and daily conversation.",
     goals:["Describe personality traits with na-adjectives","Describe physical features with i-adjectives","Combine adjectives with desu for simple descriptions"]},

    {type:"teach", trg:"元気(げんき)", src:"energetic / healthy / well", pos:"adj", gender:null,
     note:"Na-adjective. お元気(げんき)ですか？ = how are you?\n元気(げんき)です = I am well/fine.",
     example:"A: お元気(げんき)ですか？\nB: はい、元気(げんき)です！",
     exampleSrc:"A: How are you?\nB: Yes, I am well!",
     funFact:"元気(げんき) combines 元 (origin) and 気 (energy/spirit). Being genki means your original life energy is strong. It is the single most common wellness check in Japanese. Replying with a bright 元気(げんき)です is considered polite even if you feel tired."},

    {type:"teach", trg:"静(しず)か", src:"quiet / calm", pos:"adj", gender:null,
     note:"Na-adjective. 静(しず)かな人(ひと) = a quiet person.\n静(しず)かにしてください = please be quiet.",
     example:"A: この公園(こうえん)は静(しず)かですね。\nB: はい、とても静(しず)かです。",
     exampleSrc:"A: This park is quiet, isn't it?\nB: Yes, it is very quiet.",
     funFact:"静(しず)か uses the kanji 静, which combines 青 (blue/green) and 争 (conflict) with the meaning of 'conflict settling like a calm blue sky.' Japanese culture deeply values 静(しず)か spaces. Temples, gardens, and tea rooms are designed for quiet reflection."},

    {type:"teach", trg:"にぎやか", src:"lively / bustling", pos:"adj", gender:null,
     note:"Na-adjective. Opposite of 静(しず)か.\nにぎやかな町(まち) = a lively town.",
     example:"A: 渋谷(しぶや)はにぎやかですね。\nB: はい、いつも人(ひと)が多(おお)いです。",
     exampleSrc:"A: Shibuya is lively, isn't it?\nB: Yes, there are always many people.",
     funFact:"にぎやか (賑やか) originally described marketplaces full of noise and activity. In Japanese, being にぎやか is positive, suggesting energy, fun, and community. A にぎやかな家族(かぞく)のディナーは暖(あたた)かく楽(たの)しい場面(ばめん), meaning a warm, happy family dinner scene."},

    {type:"teach", trg:"やさしい人(ひと)", src:"kind person", pos:"noun", gender:null,
     note:"やさしい (kind/gentle) + 人(ひと) (person).\nHere やさしい means kind (優(やさ)しい), not easy.",
     example:"A: お母(かあ)さんはどんな人(ひと)ですか？\nB: やさしい人(ひと)です。",
     exampleSrc:"A: What kind of person is your mother?\nB: She is a kind person.",
     funFact:"やさしい人(ひと) is the most common positive personality description in Japanese. When asked what they look for in a partner, Japanese people overwhelmingly answer やさしい人(ひと). Kindness is valued above intelligence, humor, or appearance."},

    {type:"teach", trg:"真面目(まじめ)", src:"serious / diligent", pos:"adj", gender:null,
     note:"Na-adjective. 真面目(まじめ)な人(ひと) = a serious person.\nAlways positive in Japanese: hardworking, reliable.",
     example:"A: 田中(たなか)さんは真面目(まじめ)な人(ひと)ですね。\nB: はい、いつも一生懸命(いっしょうけんめい)です。",
     exampleSrc:"A: Tanaka is a serious person.\nB: Yes, he is always hardworking.",
     funFact:"真面目(まじめ) literally means 'true face.' A 真面目(まじめ)な人(ひと) shows their true, honest face. Unlike English 'serious' which can be negative, 真面目(まじめ) in Japanese is almost always a compliment meaning dedicated, reliable, and trustworthy."},

    {type:"teach", trg:"面白(おもしろ)い", src:"interesting / funny", pos:"adj", gender:null,
     note:"I-adjective. 面白(おもしろ)い人(ひと) = an interesting/funny person.\n面白(おもしろ)くない = not interesting.",
     example:"A: この映画(えいが)は面白(おもしろ)いですか？\nB: はい、とても面白(おもしろ)いです！",
     exampleSrc:"A: Is this movie interesting?\nB: Yes, it is very interesting!",
     funFact:"面白(おもしろ)い originally meant 'the face (面) becomes white (白い)' from the brightness of seeing something exciting. In modern Japanese, it covers both 'interesting' and 'funny.' Kansai comedians have made 面白(おもしろ)い a cultural ideal in Japan."},

    {type:"teach", trg:"つまらない", src:"boring / dull", pos:"adj", gender:null,
     note:"I-adjective. Opposite of 面白(おもしろ)い.\nつまらないものですが = it is a humble thing (gift-giving phrase).",
     example:"A: この本(ほん)はどうですか？\nB: ちょっとつまらないです。",
     exampleSrc:"A: How is this book?\nB: It is a bit boring.",
     funFact:"つまらない literally means 'it does not come to a conclusion.' Something boring has no satisfying end. When giving a gift, Japanese people say つまらないものですが (this is a trivial thing, but...) as humble modesty, even for expensive presents."},

    {type:"teach", trg:"背(せ)が高(たか)い", src:"tall (person)", pos:"adj", gender:null,
     note:"背(せ) = height/back, 高(たか)い = tall/high.\n背(せ)が低(ひく)い = short (person).",
     example:"A: お父(とう)さんは背(せ)が高(たか)いですか？\nB: はい、180センチです。",
     exampleSrc:"A: Is your father tall?\nB: Yes, he is 180 cm.",
     funFact:"Japanese height is always measured in centimeters. Saying 背(せ)が高(たか)い is a common compliment, especially for men. The average Japanese male height is about 171 cm and female about 158 cm, shorter than many Western countries but steadily increasing."},

    {type:"teach", trg:"髪(かみ)が長(なが)い", src:"long hair", pos:"adj", gender:null,
     note:"髪(かみ) = hair, 長(なが)い = long.\n髪(かみ)が短(みじか)い = short hair.",
     example:"A: あの人(ひと)は髪(かみ)が長(なが)いですね。\nB: そうですね。きれいな髪(かみ)です。",
     exampleSrc:"A: That person has long hair.\nB: Yes. Beautiful hair.",
     funFact:"In Japanese, hair descriptions use the pattern 髪(かみ)が + adjective. You say 髪(かみ)が長(なが)い (hair is long), not 長(なが)い髪(かみ)の人(ひと). This pattern puts the characteristic as a statement: the hair IS long, rather than describing 'a long-haired person.'"},

    {type:"teach", trg:"眼鏡(めがね)をかけている", src:"wearing glasses", pos:"verb", gender:null,
     note:"眼鏡(めがね) = glasses, かけている = is wearing (on face).\nFor hats: かぶっている. For clothes: 着(き)ている.",
     example:"A: あの眼鏡(めがね)をかけている人(ひと)は誰(だれ)ですか？\nB: 山田(やまだ)さんです。",
     exampleSrc:"A: Who is that person wearing glasses?\nB: That is Yamada.",
     funFact:"Japanese uses different verbs for wearing things on different body parts: かける for glasses, かぶる for hats, 着(き)る for upper body clothes, 履(は)く for lower body and shoes, する for accessories. Each body zone has its own verb."},

    {type:"teach", trg:"太(ふと)い", src:"thick / fat", pos:"adj", gender:null,
     note:"I-adjective. 太(ふと)いペン = thick pen.\nDirect about people: use 太(ふと)っている instead.",
     example:"A: このペンは太(ふと)いですね。\nB: はい、書(か)きやすいです。",
     exampleSrc:"A: This pen is thick.\nB: Yes, it is easy to write with.",
     funFact:"太(ふと)い is used freely for objects (thick line, thick pen) but is considered rude when used directly about people. For people, Japanese uses the indirect ぽっちゃり (plump, slightly positive) or ふくよか (full-figured, polite). Directness about weight is avoided."},

    {type:"teach", trg:"細(ほそ)い", src:"thin / slim", pos:"adj", gender:null,
     note:"I-adjective. Opposite of 太(ふと)い.\n細(ほそ)い道(みち) = narrow road. 細(ほそ)い声(こえ) = thin/weak voice.",
     example:"A: この道(みち)は細(ほそ)いですね。\nB: はい、車(くるま)は通(とお)れません。",
     exampleSrc:"A: This road is narrow.\nB: Yes, cars cannot pass through.",
     funFact:"細(ほそ)い describes thinness for both objects and occasionally people. For people, 痩(や)せている (thin/skinny) is more common. The kanji 細 combines 糸 (thread) and 田 (rice field), suggesting something as thin as a thread in a field."},

    {type:"teach", trg:"人気(にんき)がある", src:"popular / well-liked", pos:"adj", gender:null,
     note:"人気(にんき) = popularity. 人気(にんき)がある = to be popular.\n人気(にんき)がない = not popular.",
     example:"A: あのアイドルは人気(にんき)がありますね。\nB: はい、若(わか)い人(ひと)に人気(にんき)です。",
     exampleSrc:"A: That idol is popular.\nB: Yes, popular with young people.",
     funFact:"人気(にんき) literally means 'people energy.' Japanese pop culture is built on the 人気(にんき) system. Idol groups, anime characters, and even train stations get ranked by 人気(にんき). AKB48 built their entire concept around fan-voted 人気(にんき) rankings."},

    // Quiz steps
    {type:"mc", q:"お元気(げんき)ですか means:",
     opts:["How are you?","Where are you?","Who are you?","What is your name?"],
     ans:"How are you?",
     hint:"This is a wellness check using the na-adjective that means 'energetic' or 'well.'"},

    {type:"match", pairs:[
      {trg:"静(しず)か", src:"quiet"},
      {trg:"にぎやか", src:"lively"},
      {trg:"真面目(まじめ)", src:"diligent"},
      {trg:"面白(おもしろ)い", src:"interesting"},
      {trg:"つまらない", src:"boring"}
    ]},

    {type:"fb", s:"田中(たなか)さんは{1}い人(ひと)です。いつも笑(わら)っています。",
     a:["面白(おもしろ)"],
     opts:["面白(おもしろ)","つまらな","静(しず)か","真面目(まじめ)"],
     hint:"Tanaka makes people laugh. This i-adjective means 'funny' or 'interesting.'",
     sSrc:"Tanaka is a {1} person. He is always laughing."},

    {type:"mc", q:"背(せ)が高(たか)い describes:",
     opts:["A tall person","A short person","A thin person","A heavy person"],
     ans:"A tall person",
     hint:"背(せ) means height or stature, and 高(たか)い means high or t...."},

    {type:"fb", s:"あの眼鏡(めがね)を{1}人(ひと)は誰(だれ)ですか？",
     a:["かけている"],
     opts:["かけている","着(き)ている","履(は)いている","かぶっている"],
     hint:"The verb for wearing something on your face (like glasses). Not 着(き)る or 履(は)く.",
     sSrc:"Who is that person {1} glasses?"},

    {type:"mc", q:"真面目(まじめ) in Japanese is usually:",
     opts:["A compliment meaning diligent","An insult meaning boring","A neutral word for normal","A word for shy"],
     ans:"A compliment meaning diligent",
     hint:"Unlike 'serious' in English, this na-adjective is almost always positive in Japanese. It means hardworking and reliable."},

    {type:"match", pairs:[
      {trg:"太(ふと)い", src:"thick"},
      {trg:"細(ほそ)い", src:"thin"},
      {trg:"背(せ)が高(たか)い", src:"tall (person)"},
      {trg:"人気(にんき)がある", src:"popular"}
    ]},

    {type:"fb", s:"渋谷(しぶや)は{1}な町(まち)です。人(ひと)がたくさんいます。",
     a:["にぎやか"],
     opts:["にぎやか","静(しず)か","真面目(まじめ)","つまらない"],
     hint:"This na-adjective means lively and bustling, the opposite of quiet.",
     sSrc:"Shibuya is a {1} town. There are many people."}
  ]
};
export default BATCH7_L1;
