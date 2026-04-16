// Batch 7 – Unit 12 (A2.1 Ability & Potential): Hobbies & Sports
const BATCH7_L1 = {
  id:"jav2_u12l_b7_1", title:"しゅみとスポーツ", icon:"🎯", xp:15, board:true,
  steps:[
    {type:"intro", title:"しゅみとスポーツ",
     desc:"Learn vocabulary for hobbies and sports to discuss what you can do, enjoy doing, and want to try. These words pair naturally with the potential form and dekiru.",
     goals:["Name popular hobbies and sports","Discuss skill levels and interests","Use ability expressions with hobby vocabulary"]},

    {type:"teach", trg:"しゅみ", src:"hobby", pos:"noun", gender:null,
     note:"しゅみはなんですか = what is your hobby?\nA very common self-introduction question.",
     example:"A: しゅみはなんですか？\nB: どくしょとりょこうです。",
     exampleSrc:"A: What is your hobby?\nB: Reading and traveling.",
     funFact:"しゅみ (趣味) is one of the most asked questions in Japanese self-introductions, job interviews, and dating profiles. Common answers: どくしょ (reading), りょこう (travel), えいがかんしょう (watching movies). Saying 'sleeping' (ねること) as a hobby is a classic joke answer."},

    {type:"teach", trg:"つり", src:"fishing", pos:"noun", gender:null,
     note:"つりをする = to go fishing. つりざお = fishing rod.\nうみづり = sea fishing. かわづり = river fishing.",
     example:"A: にちようびにつりにいきませんか？\nB: いいですね。どこでつりますか？",
     exampleSrc:"A: Shall we go fishing on Sunday?\nB: Sounds good. Where shall we fish?",
     funFact:"つり (釣り) is hugely popular in Japan. The country is surrounded by ocean and has abundant rivers. Fishing anime like 'Tsurikichi Sanpei' are classic. Bass fishing (バスつり) became a craze in the 1990s. Japan even has indoor fishing centers where you can fish year-round."},

    {type:"teach", trg:"えをかく", src:"to draw / to paint", pos:"verb", gender:null,
     note:"え = picture/painting. かく = to draw/write.\nえがうまい = good at drawing.",
     example:"A: えをかくのがすきです。\nB: なにをかきますか？\nA: しぜんのえがおおいです。",
     exampleSrc:"A: I like drawing.\nB: What do you draw?\nA: Mostly nature scenes.",
     funFact:"Japan's drawing culture spans from traditional すみえ (ink painting) to modern manga and anime. Drawing skills are highly valued. Many Japanese people can sketch well because art education (図工, ずこう) is a core school subject. Character design (キャラデザイン) is a dream career for many."},

    {type:"teach", trg:"うたう", src:"to sing", pos:"verb", gender:null,
     note:"Group 1 verb. うた = song (noun).\nカラオケでうたう = to sing at karaoke.",
     example:"A: カラオケにいきましょう！\nB: いいですね。なにをうたいますか？",
     exampleSrc:"A: Let us go to karaoke!\nB: Sounds good. What will you sing?",
     funFact:"カラオケ is a Japanese invention (from からっぽオーケストラ, 'empty orchestra'). It transformed from bar entertainment in the 1970s to a mainstream hobby with private rooms (ボックス). Japan has over 100,000 karaoke rooms. Singing alone (ひとりカラオケ, hitokara) is now completely normal."},

    {type:"teach", trg:"おどる", src:"to dance", pos:"verb", gender:null,
     note:"Group 1 verb. ダンス = dance (noun, loanword).\nおどり = traditional Japanese dance.",
     example:"A: ダンスがじょうずですね。\nB: こどものときからならっています。",
     exampleSrc:"A: You are good at dancing.\nB: I have been learning since I was a child.",
     funFact:"おどる (踊る) covers traditional Japanese dance and modern styles. ぼんおどり (Bon dance) is danced at summer festivals. Para Para was a synchronized dance craze in the 2000s. Today, TikTok dances (踊ってみた, 'tried dancing') are a massive social media trend in Japan."},

    {type:"teach", trg:"やきゅう", src:"baseball", pos:"noun", gender:null,
     note:"やきゅう = baseball (和製語, Japanese-coined word).\nや = field, きゅう = ball.",
     example:"A: にほんでいちばんにんきのあるスポーツはなんですか？\nB: やきゅうです！",
     exampleSrc:"A: What is the most popular sport in Japan?\nB: Baseball!",
     funFact:"やきゅう (野球) is Japan's national sport by popularity. High school baseball (こうしえん, Koshien) is a massive cultural event with national TV coverage. Pro baseball (プロやきゅう) has 12 teams. The word やきゅう was coined by mixing 野 (field) and 球 (ball) to translate 'baseball' in the Meiji era."},

    {type:"teach", trg:"すいえい", src:"swimming", pos:"noun", gender:null,
     note:"Kanji: 水泳. すいえいをする = to swim.\nプール = pool. かいすいよく = sea bathing.",
     example:"A: すいえいがとくいです。\nB: なんメートルおよげますか？",
     exampleSrc:"A: I am good at swimming.\nB: How many meters can you swim?",
     funFact:"すいえい (水泳) is mandatory in Japanese schools. Almost every school has a pool. Summer swim classes run even during vacation. The goal is that every child can swim 25 meters by 6th grade. This policy started after a ferry disaster in 1955 to prevent drowning deaths."},

    {type:"teach", trg:"じゅうどう", src:"judo", pos:"noun", gender:null,
     note:"じゅう = gentle/flexible, どう = way/path.\nじゅうどうか = judoka (practitioner).",
     example:"A: じゅうどうをならっていますか？\nB: はい、くろおびです。",
     exampleSrc:"A: Are you learning judo?\nB: Yes, I have a black belt.",
     funFact:"じゅうどう (柔道) was created by Kano Jigoro in 1882 and became the first Japanese martial art in the Olympics (1964 Tokyo). The 'gentle way' emphasizes using an opponent's force against them. Japan has about 200,000 registered じゅうどう practitioners. Bowing before and after a match is essential etiquette."},

    {type:"teach", trg:"とざん", src:"mountain climbing / hiking", pos:"noun", gender:null,
     note:"と = to climb, ざん = mountain.\nとざんどう = hiking trail. ふじとざん = climbing Mt. Fuji.",
     example:"A: しゅうまつにとざんにいきましょう。\nB: どのやまにのぼりますか？",
     exampleSrc:"A: Let us go hiking this weekend.\nB: Which mountain shall we climb?",
     funFact:"とざん (登山) is a national pastime. Japan is 73% mountainous with over 100 active volcanoes. Mt. Fuji (富士山) attracts 300,000 climbers annually during the July-August season. やまガール (mountain girls) brought fashionable hiking gear mainstream. Every prefecture has beloved local mountains."},

    {type:"teach", trg:"しゃしんをとる", src:"to take a photo", pos:"verb", gender:null,
     note:"しゃしん = photograph. とる = to take.\nセルフィー = selfie.",
     example:"A: いっしょにしゃしんをとりましょう。\nB: いいですね。はい、チーズ！",
     exampleSrc:"A: Let us take a photo together.\nB: Sure. Say cheese!",
     funFact:"Japan says チーズ (cheese) for photos, borrowed from English. But the traditional Japanese photo phrase is はい、ニッコリ (yes, smile). Japanese people often make the V-sign (ピースサイン) in photos. This habit started in the 1970s and is now deeply automatic. Young people also do がおー (rawr) faces."},

    {type:"teach", trg:"ヨガ", src:"yoga", pos:"noun", gender:null,
     note:"Katakana loanword. ヨガをする = to do yoga.\nホットヨガ = hot yoga.",
     example:"A: まいあさヨガをしています。\nB: からだがやわらかくなりますね。",
     exampleSrc:"A: I do yoga every morning.\nB: Your body becomes flexible.",
     funFact:"ヨガ became massively popular in Japan in the 2000s. ホットヨガ (hot yoga) studios are in every major city. Many Japanese women practice ヨガ for health, flexibility, and stress relief. Morning ヨガ programs air on TV. The connection to mindfulness fits naturally with Japanese meditation traditions."},

    {type:"teach", trg:"にがて", src:"not good at / weak point", pos:"adj", gender:null,
     note:"Na-adjective. Opposite of とくい (strong at).\nすうがくがにがてです = I am weak at math.",
     example:"A: スポーツはにがてです。\nB: でもさんぽはすきでしょう？",
     exampleSrc:"A: I am not good at sports.\nB: But you like walking, right?",
     funFact:"にがて (苦手) literally means 'bitter hand.' It is a softer way to say 'bad at' compared to へた (unskillful). Japanese people freely admit にがて subjects as a form of humility. 'I am にがて at X' is considered honest and relatable, not embarrassing."},

    {type:"teach", trg:"とくい", src:"skilled at / strong point", pos:"adj", gender:null,
     note:"Na-adjective. Opposite of にがて.\nとくいりょうり = a dish you are good at making.",
     example:"A: とくいなスポーツはなんですか？\nB: テニスがとくいです。",
     exampleSrc:"A: What sport are you good at?\nB: I am good at tennis.",
     funFact:"とくい (得意) means both 'skilled at' and 'proud/triumphant.' When your とくいなこと (specialty) goes well, you feel とくい (proud). In job interviews, discussing your とくい and にがて is standard. The honest balance shows self-awareness, which Japanese employers value."},

    // Quiz steps
    {type:"mc", q:"しゅみはなんですか is asked during:",
     opts:["Self-introductions and dating profiles","Only at job interviews","Medical checkups","Restaurant orders"],
     ans:"Self-introductions and dating profiles",
     hint:"This question about hobbies is one of the most common in Japanese social settings."},

    {type:"match", pairs:[
      {trg:"つり", src:"fishing"},
      {trg:"やきゅう", src:"baseball"},
      {trg:"すいえい", src:"swimming"},
      {trg:"じゅうどう", src:"judo"},
      {trg:"とざん", src:"mountain climbing"}
    ]},

    {type:"fb", s:"スポーツは{1}ですが、おんがくはとくいです。",
     a:["にがて"],
     opts:["にがて","とくい","じょうず","へた"],
     hint:"This na-adjective is a softer way to say 'not good at.' It literally means 'bitter hand.'",
     sSrc:"I am {1} at sports, but good at music."},

    {type:"mc", q:"すいえい is mandatory in Japanese schools because:",
     opts:["To prevent drowning deaths after a 1955 ferry disaster","To train Olympic swimmers","Because all schools have pools","To cool down in summer"],
     ans:"To prevent drowning deaths after a 1955 ferry disaster",
     hint:"A tragic event led to a national policy ensuring every child can swim."},

    {type:"fb", s:"いっしょに{1}をとりましょう。はい、チーズ！",
     a:["しゃしん"],
     opts:["しゃしん","えいが","おんがく","ビデオ"],
     hint:"You want to take a picture together. Say cheese!",
     sSrc:"Let us take a {1} together. Say cheese!"},

    {type:"mc", q:"カラオケ literally means:",
     opts:["Empty orchestra","Singing machine","Music box","Song room"],
     ans:"Empty orchestra",
     hint:"The word combines からっぽ (e...) and オーケストラ (o...). Music without singers."},

    {type:"match", pairs:[
      {trg:"うたう", src:"to sing"},
      {trg:"おどる", src:"to dance"},
      {trg:"えをかく", src:"to draw"},
      {trg:"ヨガ", src:"yoga"},
      {trg:"しゅみ", src:"hobby"}
    ]},

    {type:"fb", s:"{1}なスポーツはテニスです。まいしゅうやっています。",
     a:["とくい"],
     opts:["とくい","にがて","すき","きらい"],
     hint:"This na-adjective means 'skilled at' or 'strong point.' The opposite of にがて.",
     sSrc:"The sport I am {1} at is tennis. I play every week."}
  ]
};
export default BATCH7_L1;
