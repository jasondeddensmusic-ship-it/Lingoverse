// Batch 7 – Unit 02 (A1.1 Self-Intro): Personality & Appearance Adjectives
const BATCH7_L1 = {
  id:"jav2_u02l_b7_1", title:"どんなひと？", icon:"🪞", xp:15, board:true,
  steps:[
    {type:"intro", title:"どんなひと？",
     desc:"Learn adjectives to describe people's personalities and appearance. These words are essential for talking about yourself and others in self-introductions and daily conversation.",
     goals:["Describe personality traits with na-adjectives","Describe physical features with i-adjectives","Combine adjectives with desu for simple descriptions"]},

    {type:"teach", trg:"げんき", src:"energetic / healthy / well", pos:"adj", gender:null,
     note:"Na-adjective. おげんきですか？ = how are you?\nげんきです = I am well/fine.",
     example:"A: おげんきですか？\nB: はい、げんきです！",
     exampleSrc:"A: How are you?\nB: Yes, I am well!",
     funFact:"元気 combines 元 (origin) and 気 (energy/spirit). Being genki means your original life energy is strong. It is the single most common wellness check in Japanese. Replying with a bright げんきです is considered polite even if you feel tired."},

    {type:"teach", trg:"しずか", src:"quiet / calm", pos:"adj", gender:null,
     note:"Na-adjective. しずかなひと = a quiet person.\nしずかにしてください = please be quiet.",
     example:"A: このこうえんはしずかですね。\nB: はい、とてもしずかです。",
     exampleSrc:"A: This park is quiet, isn't it?\nB: Yes, it is very quiet.",
     funFact:"静か uses the kanji 静, which combines 青 (blue/green) and 争 (conflict) with the meaning of 'conflict settling like a calm blue sky.' Japanese culture deeply values しずか spaces. Temples, gardens, and tea rooms are designed for quiet reflection."},

    {type:"teach", trg:"にぎやか", src:"lively / bustling", pos:"adj", gender:null,
     note:"Na-adjective. Opposite of しずか.\nにぎやかなまち = a lively town.",
     example:"A: しぶやはにぎやかですね。\nB: はい、いつもひとがおおいです。",
     exampleSrc:"A: Shibuya is lively, isn't it?\nB: Yes, there are always many people.",
     funFact:"にぎやか (賑やか) originally described marketplaces full of noise and activity. In Japanese, being にぎやか is positive, suggesting energy, fun, and community. A にぎやかな family dinner is a warm, happy scene with everyone talking."},

    {type:"teach", trg:"やさしいひと", src:"kind person", pos:"noun", gender:null,
     note:"やさしい (kind/gentle) + ひと (person).\nHere やさしい means kind (優しい), not easy.",
     example:"A: おかあさんはどんなひとですか？\nB: やさしいひとです。",
     exampleSrc:"A: What kind of person is your mother?\nB: She is a kind person.",
     funFact:"やさしいひと is the most common positive personality description in Japanese. When asked what they look for in a partner, Japanese people overwhelmingly answer やさしいひと. Kindness is valued above intelligence, humor, or appearance."},

    {type:"teach", trg:"まじめ", src:"serious / diligent", pos:"adj", gender:null,
     note:"Na-adjective. まじめなひと = a serious person.\nAlways positive in Japanese: hardworking, reliable.",
     example:"A: たなかさんはまじめなひとですね。\nB: はい、いつもいっしょうけんめいです。",
     exampleSrc:"A: Tanaka is a serious person.\nB: Yes, he is always hardworking.",
     funFact:"まじめ (真面目) literally means 'true face.' A まじめ person shows their true, honest face. Unlike English 'serious' which can be negative, まじめ in Japanese is almost always a compliment meaning dedicated, reliable, and trustworthy."},

    {type:"teach", trg:"おもしろい", src:"interesting / funny", pos:"adj", gender:null,
     note:"I-adjective. おもしろいひと = an interesting/funny person.\nおもしろくない = not interesting.",
     example:"A: このえいがはおもしろいですか？\nB: はい、とてもおもしろいです！",
     exampleSrc:"A: Is this movie interesting?\nB: Yes, it is very interesting!",
     funFact:"面白い originally meant 'the face (面) becomes white (白い)' from the brightness of seeing something exciting. In modern Japanese, it covers both 'interesting' and 'funny.' Kansai comedians have made おもしろい a cultural ideal in Japan."},

    {type:"teach", trg:"つまらない", src:"boring / dull", pos:"adj", gender:null,
     note:"I-adjective. Opposite of おもしろい.\nつまらないものですが = it is a humble thing (gift-giving phrase).",
     example:"A: このほんはどうですか？\nB: ちょっとつまらないです。",
     exampleSrc:"A: How is this book?\nB: It is a bit boring.",
     funFact:"つまらない literally means 'it does not come to a conclusion.' Something boring has no satisfying end. When giving a gift, Japanese people say つまらないものですが (this is a trivial thing, but...) as humble modesty, even for expensive presents."},

    {type:"teach", trg:"せがたかい", src:"tall (person)", pos:"adj", gender:null,
     note:"せ = height/back, たかい = tall/high.\nせがひくい = short (person).",
     example:"A: おとうさんはせがたかいですか？\nB: はい、180センチです。",
     exampleSrc:"A: Is your father tall?\nB: Yes, he is 180 cm.",
     funFact:"Japanese height is always measured in centimeters. Saying せがたかい is a common compliment, especially for men. The average Japanese male height is about 171 cm and female about 158 cm, shorter than many Western countries but steadily increasing."},

    {type:"teach", trg:"かみがながい", src:"long hair", pos:"adj", gender:null,
     note:"かみ = hair, ながい = long.\nかみがみじかい = short hair.",
     example:"A: あのひとはかみがながいですね。\nB: そうですね。きれいなかみです。",
     exampleSrc:"A: That person has long hair.\nB: Yes. Beautiful hair.",
     funFact:"In Japanese, hair descriptions use the pattern かみが + adjective. You say かみがながい (hair is long), not ながいかみのひと. This pattern puts the characteristic as a statement: the hair IS long, rather than describing 'a long-haired person.'"},

    {type:"teach", trg:"めがねをかけている", src:"wearing glasses", pos:"verb", gender:null,
     note:"めがね = glasses, かけている = is wearing (on face).\nFor hats: かぶっている. For clothes: きている.",
     example:"A: あのめがねをかけているひとはだれですか？\nB: やまださんです。",
     exampleSrc:"A: Who is that person wearing glasses?\nB: That is Yamada.",
     funFact:"Japanese uses different verbs for wearing things on different body parts: かける for glasses, かぶる for hats, きる for upper body clothes, はく for lower body and shoes, する for accessories. Each body zone has its own verb."},

    {type:"teach", trg:"ふとい", src:"thick / fat", pos:"adj", gender:null,
     note:"I-adjective. ふといペン = thick pen.\nDirect about people: use ふとっている instead.",
     example:"A: このペンはふといですね。\nB: はい、かきやすいです。",
     exampleSrc:"A: This pen is thick.\nB: Yes, it is easy to write with.",
     funFact:"ふとい is used freely for objects (thick line, thick pen) but is considered rude when used directly about people. For people, Japanese uses the indirect ぽっちゃり (plump, slightly positive) or ふくよか (full-figured, polite). Directness about weight is avoided."},

    {type:"teach", trg:"ほそい", src:"thin / slim", pos:"adj", gender:null,
     note:"I-adjective. Opposite of ふとい.\nほそいみち = narrow road. ほそいこえ = thin/weak voice.",
     example:"A: このみちはほそいですね。\nB: はい、くるまはとおれません。",
     exampleSrc:"A: This road is narrow.\nB: Yes, cars cannot pass through.",
     funFact:"ほそい (細い) describes thinness for both objects and occasionally people. For people, やせている (thin/skinny) is more common. The kanji 細 combines 糸 (thread) and 田 (rice field), suggesting something as thin as a thread in a field."},

    {type:"teach", trg:"にんきがある", src:"popular / well-liked", pos:"adj", gender:null,
     note:"にんき = popularity. にんきがある = to be popular.\nにんきがない = not popular.",
     example:"A: あのアイドルはにんきがありますね。\nB: はい、わかいひとににんきです。",
     exampleSrc:"A: That idol is popular.\nB: Yes, popular with young people.",
     funFact:"人気 (にんき) literally means 'people energy.' Japanese pop culture is built on the にんき system. Idol groups, anime characters, and even train stations get ranked by にんき. AKB48 built their entire concept around fan-voted にんき rankings."},

    // Quiz steps
    {type:"mc", q:"おげんきですか means:",
     opts:["How are you?","Where are you?","Who are you?","What is your name?"],
     ans:"How are you?",
     hint:"This is a wellness check using the na-adjective that means 'energetic' or 'well.'"},

    {type:"match", pairs:[
      {trg:"しずか", src:"quiet"},
      {trg:"にぎやか", src:"lively"},
      {trg:"まじめ", src:"diligent"},
      {trg:"おもしろい", src:"interesting"},
      {trg:"つまらない", src:"boring"}
    ]},

    {type:"fb", s:"たなかさんは{1}なひとです。いつもわらっています。",
     a:["おもしろい"],
     opts:["おもしろい","つまらない","しずか","まじめ"],
     hint:"Tanaka makes people laugh. This i-adjective means 'funny' or 'interesting.'",
     sSrc:"Tanaka is a {1} person. He is always laughing."},

    {type:"mc", q:"せがたかい describes:",
     opts:["A tall person","A short person","A thin person","A heavy person"],
     ans:"A tall person",
     hint:"せ means height or stature, and たかい means high or t...."},

    {type:"fb", s:"あのめがねを{1}ひとはだれですか？",
     a:["かけている"],
     opts:["かけている","きている","はいている","かぶっている"],
     hint:"The verb for wearing something on your face (like glasses). Not きる or はく.",
     sSrc:"Who is that person {1} glasses?"},

    {type:"mc", q:"まじめ in Japanese is usually:",
     opts:["A compliment meaning diligent","An insult meaning boring","A neutral word for normal","A word for shy"],
     ans:"A compliment meaning diligent",
     hint:"Unlike 'serious' in English, this na-adjective is almost always positive in Japanese. It means hardworking and reliable."},

    {type:"match", pairs:[
      {trg:"ふとい", src:"thick"},
      {trg:"ほそい", src:"thin"},
      {trg:"せがたかい", src:"tall (person)"},
      {trg:"にんきがある", src:"popular"}
    ]},

    {type:"fb", s:"しぶやは{1}なまちです。ひとがたくさんいます。",
     a:["にぎやか"],
     opts:["にぎやか","しずか","まじめ","つまらない"],
     hint:"This na-adjective means lively and bustling, the opposite of quiet.",
     sSrc:"Shibuya is a {1} town. There are many people."}
  ]
};
export default BATCH7_L1;
