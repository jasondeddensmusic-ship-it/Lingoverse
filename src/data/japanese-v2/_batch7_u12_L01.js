// Batch 7 – Unit 12 (A2.1 Ability & Potential): Hobbies & Sports
const BATCH7_L1 = {
  id:"jav2_u12l_b7_1", title:"趣味(しゅみ)とスポーツ", icon:"🎯", xp:15, board:true,
  steps:[
    {type:"intro", title:"趣味(しゅみ)とスポーツ",
     desc:"Learn vocabulary for hobbies and sports to discuss what you can do, enjoy doing, and want to try. These words pair naturally with the potential form and dekiru.",
     goals:["Name popular hobbies and sports","Discuss skill levels and interests","Use ability expressions with hobby vocabulary"]},

    {type:"teach", trg:"趣味(しゅみ)", src:"hobby", pos:"noun", gender:null,
     note:"趣味(しゅみ)は何(なに)ですか = what is your hobby?\nA very common self-introduction question.",
     example:"A: 趣味(しゅみ)は何(なに)ですか？\nB: 読書(どくしょ)と旅行(りょこう)です。",
     exampleSrc:"A: What is your hobby?\nB: Reading and traveling.",
     funFact:"趣味(しゅみ) is one of the most asked questions in Japanese self-introductions, job interviews, and dating profiles. Common answers: 読書(どくしょ) (reading), 旅行(りょこう) (travel), 映画鑑賞(えいがかんしょう) (watching movies). Saying 'sleeping' (寝(ね)ること) as a hobby is a classic joke answer."},

    {type:"teach", trg:"釣(つ)り", src:"fishing", pos:"noun", gender:null,
     note:"釣(つ)りをする = to go fishing. 釣(つ)り竿(ざお) = fishing rod.\n海釣(うみつ)り = sea fishing. 川釣(かわつ)り = river fishing.",
     example:"A: 日曜日(にちようび)に釣(つ)りに行(い)きませんか？\nB: いいですね。どこで釣(つ)りますか？",
     exampleSrc:"A: Shall we go fishing on Sunday?\nB: Sounds good. Where shall we fish?",
     funFact:"釣(つ)り is hugely popular in Japan. The country is surrounded by ocean and has abundant rivers. Fishing anime like 'Tsurikichi Sanpei' are classic. Bass fishing (バス釣(つ)り) became a craze in the 1990s. Japan even has indoor fishing centers where you can fish year-round."},

    {type:"teach", trg:"絵(え)を描(か)く", src:"to draw / to paint", pos:"verb", gender:null,
     note:"絵(え) = picture/painting. 描(か)く = to draw/write.\n絵(え)が上手(じょうず) = good at drawing.",
     example:"A: 絵(え)を描(か)くのが好(す)きです。\nB: 何(なに)を描(か)きますか？\nA: 自然(しぜん)の絵(え)が多(おお)いです。",
     exampleSrc:"A: I like drawing.\nB: What do you draw?\nA: Mostly nature scenes.",
     funFact:"Japan's drawing culture spans from traditional 墨絵(すみえ) (ink painting) to modern manga and anime. Drawing skills are highly valued. Many Japanese people can sketch well because art education (図工(ずこう)) is a core school subject. Character design (キャラデザイン) is a dream career for many."},

    {type:"teach", trg:"歌(うた)う", src:"to sing", pos:"verb", gender:null,
     note:"Group 1 verb. 歌(うた) = song (noun).\nカラオケで歌(うた)う = to sing at karaoke.",
     example:"A: カラオケに行(い)きましょう！\nB: いいですね。何(なに)を歌(うた)いますか？",
     exampleSrc:"A: Let us go to karaoke!\nB: Sounds good. What will you sing?",
     funFact:"カラオケ is a Japanese invention (からっぽオーケストラ, 'empty orchestra'). It transformed from bar entertainment in the 1970s to a mainstream hobby with private rooms (ボックス). Japan has over 100,000 karaoke rooms. Singing alone (一人(ひとり)カラオケ, hitokara) is now completely normal."},

    {type:"teach", trg:"踊(おど)る", src:"to dance", pos:"verb", gender:null,
     note:"Group 1 verb. ダンス = dance (noun, loanword).\n踊(おど)り = traditional Japanese dance.",
     example:"A: ダンスが上手(じょうず)ですね。\nB: 子(こ)どものときから習(なら)っています。",
     exampleSrc:"A: You are good at dancing.\nB: I have been learning since I was a child.",
     funFact:"踊(おど)る covers traditional Japanese dance and modern styles. 盆踊(ぼんおど)り (Bon dance) is danced at summer festivals. Para Para was a synchronized dance craze in the 2000s. Today, TikTok dances (踊(おど)ってみた, 'tried dancing') are a massive social media trend in Japan."},

    {type:"teach", trg:"野球(やきゅう)", src:"baseball", pos:"noun", gender:null,
     note:"野球(やきゅう) = baseball (和製語, Japanese-coined word).\n野(や) = field, 球(きゅう) = ball.",
     example:"A: 日本(にほん)で一番(いちばん)人気(にんき)のあるスポーツは何(なに)ですか？\nB: 野球(やきゅう)です！",
     exampleSrc:"A: What is the most popular sport in Japan?\nB: Baseball!",
     funFact:"野球(やきゅう) is Japan's national sport by popularity. High school baseball (甲子園(こうしえん), Koshien) is a massive cultural event with national TV coverage. Pro baseball (プロ野球(やきゅう)) has 12 teams. The word 野球(やきゅう) was coined by mixing 野 (field) and 球 (ball) to translate 'baseball' in the Meiji era."},

    {type:"teach", trg:"水泳(すいえい)", src:"swimming", pos:"noun", gender:null,
     note:"水泳(すいえい)をする = to swim.\nプール = pool. 海水浴(かいすいよく) = sea bathing.",
     example:"A: 水泳(すいえい)が得意(とくい)です。\nB: 何(なん)メートル泳(およ)げますか？",
     exampleSrc:"A: I am good at swimming.\nB: How many meters can you swim?",
     funFact:"水泳(すいえい) is mandatory in Japanese schools. Almost every school has a pool. Summer swim classes run even during vacation. The goal is that every child can swim 25 meters by 6th grade. This policy started after a ferry disaster in 1955 to prevent drowning deaths."},

    {type:"teach", trg:"柔道(じゅうどう)", src:"judo", pos:"noun", gender:null,
     note:"柔(じゅう) = gentle/flexible, 道(どう) = way/path.\n柔道家(じゅうどうか) = judoka (practitioner).",
     example:"A: 柔道(じゅうどう)を習(なら)っていますか？\nB: はい、黒帯(くろおび)です。",
     exampleSrc:"A: Are you learning judo?\nB: Yes, I have a black belt.",
     funFact:"柔道(じゅうどう) was created by Kano Jigoro in 1882 and became the first Japanese martial art in the Olympics (1964 Tokyo). The 'gentle way' emphasizes using an opponent's force against them. Japan has about 200,000 registered 柔道(じゅうどう) practitioners. Bowing before and after a match is essential etiquette."},

    {type:"teach", trg:"登山(とざん)", src:"mountain climbing / hiking", pos:"noun", gender:null,
     note:"登(と) = to climb, 山(ざん) = mountain.\n登山道(とざんどう) = hiking trail. 富士登山(ふじとざん) = climbing Mt. Fuji.",
     example:"A: 週末(しゅうまつ)に登山(とざん)に行(い)きましょう。\nB: どの山(やま)に登(のぼ)りますか？",
     exampleSrc:"A: Let us go hiking this weekend.\nB: Which mountain shall we climb?",
     funFact:"登山(とざん) is a national pastime. Japan is 73% mountainous with over 100 active volcanoes. 富士山(ふじさん) attracts 300,000 climbers annually during the July-August season. 山(やま)ガール (mountain girls) brought fashionable hiking gear mainstream. Every prefecture has beloved local mountains."},

    {type:"teach", trg:"写真(しゃしん)を撮(と)る", src:"to take a photo", pos:"verb", gender:null,
     note:"写真(しゃしん) = photograph. 撮(と)る = to take.\nセルフィー = selfie.",
     example:"A: 一緒(いっしょ)に写真(しゃしん)を撮(と)りましょう。\nB: いいですね。はい、チーズ！",
     exampleSrc:"A: Let us take a photo together.\nB: Sure. Say cheese!",
     funFact:"Japan says チーズ (cheese) for photos, borrowed from English. But the traditional Japanese photo phrase is はい、ニッコリ (yes, smile). Japanese people often make the V-sign (ピースサイン) in photos. This habit started in the 1970s and is now deeply automatic. Young people also do がおー (rawr) faces."},

    {type:"teach", trg:"ヨガ", src:"yoga", pos:"noun", gender:null,
     note:"Katakana loanword. ヨガをする = to do yoga.\nホットヨガ = hot yoga.",
     example:"A: 毎朝(まいあさ)ヨガをしています。\nB: 体(からだ)が柔(やわ)らかくなりますね。",
     exampleSrc:"A: I do yoga every morning.\nB: Your body becomes flexible.",
     funFact:"ヨガ became massively popular in Japan in the 2000s. ホットヨガ (hot yoga) studios are in every major city. Many Japanese women practice ヨガ for health, flexibility, and stress relief. Morning ヨガ programs air on TV. The connection to mindfulness fits naturally with Japanese meditation traditions."},

    {type:"teach", trg:"苦手(にがて)", src:"not good at / weak point", pos:"adj", gender:null,
     note:"Na-adjective. Opposite of 得意(とくい) (strong at).\n数学(すうがく)が苦手(にがて)です = I am weak at math.",
     example:"A: スポーツは苦手(にがて)です。\nB: でも散歩(さんぽ)は好(す)きでしょう？",
     exampleSrc:"A: I am not good at sports.\nB: But you like walking, right?",
     funFact:"苦手(にがて) literally means 'bitter hand.' It is a softer way to say 'bad at' compared to 下手(へた) (unskillful). Japanese people freely admit 苦手(にがて) subjects as a form of humility. 'I am 苦手(にがて) at X' is considered honest and relatable, not embarrassing."},

    {type:"teach", trg:"得意(とくい)", src:"skilled at / strong point", pos:"adj", gender:null,
     note:"Na-adjective. Opposite of 苦手(にがて).\n得意(とくい)料理(りょうり) = a dish you are good at making.",
     example:"A: 得意(とくい)なスポーツは何(なに)ですか？\nB: テニスが得意(とくい)です。",
     exampleSrc:"A: What sport are you good at?\nB: I am good at tennis.",
     funFact:"得意(とくい) means both 'skilled at' and 'proud/triumphant.' When your 得意(とくい)なこと (specialty) goes well, you feel 得意(とくい) (proud). In job interviews, discussing your 得意(とくい) and 苦手(にがて) is standard. The honest balance shows self-awareness, which Japanese employers value."},

    // Quiz steps
    {type:"mc", q:"趣味(しゅみ)はなんですか is asked during:",
     opts:["Self-introductions and dating profiles","Only at job interviews","Medical checkups","Restaurant orders"],
     ans:"Self-introductions and dating profiles",
     hint:"This question about hobbies is one of the most common in Japanese social settings."},

    {type:"match", pairs:[
      {trg:"釣(つ)り", src:"fishing"},
      {trg:"野球(やきゅう)", src:"baseball"},
      {trg:"水泳(すいえい)", src:"swimming"},
      {trg:"柔道(じゅうどう)", src:"judo"},
      {trg:"登山(とざん)", src:"mountain climbing"}
    ]},

    {type:"fb", s:"スポーツは{1}ですが、音楽(おんがく)は得意(とくい)です。",
     a:["苦手(にがて)"],
     opts:["苦手(にがて)","得意(とくい)","上手(じょうず)","下手(へた)"],
     hint:"This na-adjective is a softer way to say 'not good at.' It literally means 'bitter hand.'",
     sSrc:"I am {1} at sports, but good at music."},

    {type:"mc", q:"水泳(すいえい) is mandatory in Japanese schools because:",
     opts:["To prevent drowning deaths after a 1955 ferry disaster","To train Olympic swimmers","Because all schools have pools","To cool down in summer"],
     ans:"To prevent drowning deaths after a 1955 ferry disaster",
     hint:"A tragic event led to a national policy ensuring every child can swim."},

    {type:"fb", s:"一緒(いっしょ)に{1}を撮(と)りましょう。はい、チーズ！",
     a:["写真(しゃしん)"],
     opts:["写真(しゃしん)","映画(えいが)","音楽(おんがく)","ビデオ"],
     hint:"You want to take a picture together. Say cheese!",
     sSrc:"Let us take a {1} together. Say cheese!"},

    {type:"mc", q:"カラオケ literally means:",
     opts:["Empty orchestra","Singing machine","Music box","Song room"],
     ans:"Empty orchestra",
     hint:"The word combines からっぽ (e...) and オーケストラ (o...). Music without singers."},

    {type:"match", pairs:[
      {trg:"歌(うた)う", src:"to sing"},
      {trg:"踊(おど)る", src:"to dance"},
      {trg:"絵(え)を描(か)く", src:"to draw"},
      {trg:"ヨガ", src:"yoga"},
      {trg:"趣味(しゅみ)", src:"hobby"}
    ]},

    {type:"fb", s:"{1}なスポーツはテニスです。毎週(まいしゅう)やっています。",
     a:["得意(とくい)"],
     opts:["得意(とくい)","苦手(にがて)","好(す)き","嫌(きら)い"],
     hint:"This na-adjective means 'skilled at' or 'strong point.' The opposite of 苦手(にがて).",
     sSrc:"The sport I am {1} at is tennis. I play every week."}
  ]
};
export default BATCH7_L1;
