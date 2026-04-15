// Unit 12 Expansion L3 — Sports & Hobbies Abilities
// Potential form with sports, hobbies, and physical skills.

const LESSON_3 = {id:"jav2_u12l3", title:"スポーツとしゅみ", icon:"⚽", xp:15, board:true, steps:[
  {type:"intro", title:"スポーツとしゅみ",
   desc:"Talk about what sports and hobbies you can do. This lesson combines potential forms with sports and hobby vocabulary, so you can discuss your skills and interests with confidence.",
   goals:["Use potential forms with sports and physical activities","Talk about hobbies using ability expressions","Compare skill levels with じょうず and へた"]},

  {type:"teach", trg:"およげる", src:"can swim", pos:"verb", gender:null,
   note:"Potential form of およぐ (to swim). Group 1: ぐ becomes げる.\nおよぐ becomes およげる.",
   example:"A: およげますか？\nB: はい、でもはやくおよげません。",
   exampleSrc:"A: Can you swim?\nB: Yes, but I cannot swim fast.",
   funFact:"およぐ is a ぐ-ending verb, so its て-form is およいで (いで pattern). But its potential form follows the regular rule: change u-sound to e-sound and add る. Swimming is a required school subject in Japan; nearly all public schools have pools."},

  {type:"teach", trg:"はしれる", src:"can run", pos:"verb", gender:null,
   note:"Potential form of はしる (to run). Group 1: る becomes れる.\nはしる becomes はしれる.",
   example:"A: マラソンをはしれますか？\nB: いいえ、ごキロぐらいしかはしれません。",
   exampleSrc:"A: Can you run a marathon?\nB: No, I can only run about five kilometers.",
   funFact:"Japan has a strong running culture. The Tokyo Marathon draws over 300,000 applicants for 38,000 spots. Ekiden (relay marathon) is a beloved team sport unique to Japan. The Hakone Ekiden in January is one of the most-watched sporting events on Japanese television."},

  {type:"teach", trg:"ひける", src:"can play (stringed/keyboard instrument)", pos:"verb", gender:null,
   note:"Potential form of ひく (to play an instrument). Group 1: く becomes ける.\nひく becomes ひける.",
   example:"A: ピアノがひけますか？\nB: すこしひけます。こどものときにならいました。",
   exampleSrc:"A: Can you play piano?\nB: I can play a little. I learned as a child.",
   funFact:"ひく is used for piano, guitar, violin, and all stringed/keyboard instruments. For wind instruments, use ふく (to blow). For drums, use たたく (to hit). These distinctions reflect how you physically interact with each instrument type."},

  {type:"mc", q:"およげますか means:", opts:["Do you like swimming?","Can you swim?","Will you swim?","Did you swim?"], ans:"Can you swim?",
   hint:"The potential form + ますか asks about ability."},

  {type:"teach", trg:"うたえる", src:"can sing", pos:"verb", gender:null,
   note:"Potential form of うたう (to sing). Group 1: う becomes える.\nうたう becomes うたえる.",
   example:"A: カラオケでにほんのうたがうたえますか？\nB: いちきょくだけうたえます。",
   exampleSrc:"A: Can you sing Japanese songs at karaoke?\nB: I can sing just one song.",
   funFact:"Karaoke was invented in Japan in the 1970s. The word combines 空 (kara, empty) and オーケストラ (orchestra), meaning 'empty orchestra.' Being able to sing at karaoke is practically a social skill in Japan. Having a go-to song (jyuhachiban) is considered essential."},

  {type:"teach", trg:"じょうず", src:"skilled / good at", pos:"adj", gender:null,
   note:"な-adjective. Noun + がじょうず = good at something.\nKanji: 上手. Opposite: へた (unskilled).",
   example:"A: テニスがじょうずですね！\nB: いいえ、まだまだです。",
   exampleSrc:"A: You are good at tennis!\nB: No no, I still have a long way to go.",
   funFact:"Responding to じょうず with まだまだです (I still have far to go) is the quintessential Japanese humble response. Accepting a compliment directly feels arrogant in Japanese culture. Even top athletes will say まだまだ when complimented. This modesty is deeply valued."},

  {type:"teach", trg:"へた", src:"unskilled / bad at", pos:"adj", gender:null,
   note:"な-adjective. Noun + がへた = bad at something.\nKanji: 下手. Use carefully; can be rude about others.",
   example:"A: りょうりがへたなので、いつもそとでたべます。\nB: れんしゅうすればじょうずになりますよ。",
   exampleSrc:"A: I am bad at cooking, so I always eat out.\nB: If you practice, you will get good at it.",
   funFact:"へた is safe for describing yourself but can be offensive about others. For others, use あまりじょうずじゃない (not very skilled) or もうすこしれんしゅうがひつよう (needs a bit more practice). The kanji 下手 literally means 'lower hand,' opposite of 上手 (upper hand)."},

  {type:"fb", s:"ピアノが___ますか？\n(Can you play piano?)", a:"ひけ", opts:["ひけ","ひき","ひいて","ひく"], sSrc:"Can you play piano?",
   hint:"Potential form of ひく. Change く (u-row) to け (e-row)."},

  {type:"teach", trg:"スキー", src:"skiing", pos:"noun", gender:null,
   note:"From English 'ski.' スキーをする = to ski. スキーじょう = ski resort.\nKatakana loanword.",
   example:"A: スキーができますか？\nB: はい、まいとしほっかいどうでスキーをします。",
   exampleSrc:"A: Can you ski?\nB: Yes, I ski in Hokkaido every year.",
   funFact:"Japan is one of the world's best skiing destinations. Hokkaido and Nagano receive enormous amounts of powder snow. The 1998 Winter Olympics were held in Nagano. Japanese ski resorts are known for excellent facilities, onsen nearby, and some of the lightest powder snow on Earth."},

  {type:"teach", trg:"サッカー", src:"soccer / football", pos:"noun", gender:null,
   note:"From English 'soccer.' サッカーをする = to play soccer.\nKatakana loanword.",
   example:"A: サッカーができますか？\nB: できますが、あまりじょうずじゃないです。",
   exampleSrc:"A: Can you play soccer?\nB: I can, but I am not very good.",
   funFact:"Japan's professional soccer league (J-League) started in 1993 and transformed the sport's popularity. Japan co-hosted the 2002 FIFA World Cup. サッカー comes from the English word 'soccer,' while most of the world says 'football.' The kanji term 蹴球 (kick-ball) exists but is rarely used."},

  {type:"mc", q:"テニスがじょうずですね means:", opts:["You like tennis","You play tennis often","You are good at tennis","You want to play tennis"], ans:"You are good at tennis",
   hint:"じょうず is a な-adjective meaning 'skilled' or 'g... at.'"},

  {type:"teach", trg:"おどれる", src:"can dance", pos:"verb", gender:null,
   note:"Potential form of おどる (to dance). Group 1: る becomes れる.\nおどる becomes おどれる.",
   example:"A: ダンスがじょうずですね。よくおどれますね。\nB: こどものころからならっています。",
   exampleSrc:"A: You are good at dancing. You can really dance.\nB: I have been learning since childhood.",
   funFact:"おどる covers all styles of dance. Traditional Japanese dance (にほんぶよう) is an art form requiring years of training. Bon-odori (Bon Festival dance) is a community event where anyone can join in. Modern dance culture thrives in Tokyo's clubs and studios."},

  {type:"fb", s:"りょうりが___なので、れんしゅうしたいです。\n(I am bad at cooking, so I want to practice.)", a:"へた", opts:["へた","じょうず","すき","きらい"], sSrc:"I am bad at cooking, so I want to practice.",
   hint:"The な-adjective meaning 'unskilled' or 'bad at' something."},

  {type:"match", pairs:[{trg:"およげる",src:"can swim"},{trg:"はしれる",src:"can run"},{trg:"ひける",src:"can play (instrument)"},{trg:"うたえる",src:"can sing"}]},

  {type:"match", pairs:[{trg:"じょうず",src:"skilled"},{trg:"へた",src:"unskilled"},{trg:"スキー",src:"skiing"},{trg:"サッカー",src:"soccer"}]},

  {type:"mc", q:"おどれますか means:", opts:["Do you dance often?","Can you dance?","Do you like dancing?","Will you dance?"], ans:"Can you dance?",
   hint:"The potential form + ますか asks about ability."},

  {type:"fb", s:"カラオケでにほんのうたが___ますか？\n(Can you sing Japanese songs at karaoke?)", a:"うたえ", opts:["うたえ","うたい","うたって","うたう"], sSrc:"Can you sing Japanese songs at karaoke?",
   hint:"Potential of うたう. Change う (u-row) to え (e-row), add る."},

  {type:"tip", title:"できる vs Potential Form",
   text:"Two ways to express ability:\n\n1. Noun + ができる (general ability):\nスキーができる (can do skiing)\nにほんごができる (can do Japanese)\n\n2. Potential form (specific verb ability):\nおよげる (can swim), はしれる (can run)\n\nBoth are correct. できる works for any noun.\nThe potential form is more specific and natural for actions.\n\nSkill levels:\nじょうず (skilled) vs へた (unskilled)\nとくい (strong point) vs にがて (weak point)",
   deepDive:{title:"とくい vs じょうず",
    text:"Both mean 'good at,' but differ in nuance:\nじょうず = objectively skilled (complimenting someone else)\nとくい = subjective strong point (describing yourself)\n\nSay: わたしはりょうりがとくいです。(Cooking is my strong point.)\nDo not say: わたしはりょうりがじょうずです。(I am skilled at cooking. -- sounds arrogant)\n\nSay: あなたはりょうりがじょうずですね。(You are skilled at cooking!)\nUsing とくい about yourself is modest; using じょうず about yourself is not."}},
]};
export default LESSON_3;
