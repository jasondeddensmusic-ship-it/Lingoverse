// Batch 8 – Unit 30 (B2.3 Philosophy): Four-Character Compounds (Yojijukugo)
const BATCH8_L1 = {
  id:"jav2_u30l_b8_1", title:"よじじゅくご", icon:"🧠", xp:15, board:true,
  steps:[
    {type:"intro", title:"よじじゅくご",
     desc:"Master four-character compound words (yojijukugo) that pack profound meaning into four kanji. These appear in speeches, writing, and daily conversation as cultural wisdom.",
     goals:["Understand and use common yojijukugo","Recognize philosophical concepts in four characters","Apply yojijukugo in appropriate contexts"]},

    {type:"teach", trg:"いちごいちえ", src:"once-in-a-lifetime encounter", pos:"noun", gender:null,
     note:"一期一会. From tea ceremony philosophy.\nTreat every meeting as unique and precious.",
     example:"A: いちごいちえのきもちでおきゃくさまをむかえます。\nB: すばらしいしせいですね。",
     exampleSrc:"A: We welcome guests with a once-in-a-lifetime mindset.\nB: That is a wonderful attitude.",
     funFact:"いちごいちえ (一期一会) comes from さどう (tea ceremony) master せんのりきゅう. Each tea gathering is unique and unrepeatable, so pour your whole heart into it. This philosophy extends to all human encounters. Japanese hotels, restaurants, and businesses often cite いちごいちえ as their service philosophy."},

    {type:"teach", trg:"しんきいってん", src:"turning over a new leaf / fresh start", pos:"noun", gender:null,
     note:"心機一転. こころ (heart) + き (machine/momentum) + いってん (one turn).\nUsed at New Year, job changes, etc.",
     example:"A: しんきいってんがんばります。\nB: あたらしいスタートですね。おうえんしています。",
     exampleSrc:"A: I will start fresh and do my best.\nB: A new start. I am cheering you on.",
     funFact:"しんきいってん is used at life transitions: new jobs, new schools, New Year, moving to a new city. It implies changing your mental state (しんき) with one rotation (いってん). Japanese spring (しがつ) is the season of しんきいってん because the school and fiscal year both start then."},

    {type:"teach", trg:"じゅうにんといろ", src:"ten people, ten colors (everyone is different)", pos:"noun", gender:null,
     note:"十人十色. Each person has their own way.\nUsed to acknowledge diversity of opinions.",
     example:"A: みんなのいけんがちがいますね。\nB: じゅうにんといろですから。",
     exampleSrc:"A: Everyone's opinions are different.\nB: Because everyone is unique.",
     funFact:"じゅうにんといろ (十人十色) is the Japanese equivalent of 'different strokes for different folks.' It acknowledges that diversity is natural. In a culture that values group harmony, this phrase provides space for individual differences. It is one of the first よじじゅくご children learn."},

    {type:"teach", trg:"ししゃごにゅう", src:"rounding off / rounding (numbers)", pos:"noun", gender:null,
     note:"四捨五入. Discard 4 and below, round up 5 and above.\nMath term used metaphorically.",
     example:"A: ししゃごにゅうすると100になります。\nB: そうですね。98をししゃごにゅうですね。",
     exampleSrc:"A: If we round off, it becomes 100.\nB: Right. Rounding 98.",
     funFact:"ししゃごにゅう (四捨五入) literally means 'discard four, accept five.' It is the standard rounding rule taught in Japanese math class. Metaphorically, it means simplifying: こまかいことはししゃごにゅうして (rounding off the details). It is one of the few mathematical よじじゅくご."},

    {type:"teach", trg:"いっせきにちょう", src:"killing two birds with one stone", pos:"noun", gender:null,
     note:"一石二鳥. One stone, two birds.\nSame metaphor as the English proverb.",
     example:"A: うんどうしながらにほんごのポッドキャストをきくのはいっせきにちょうです。\nB: じかんをゆうこうにつかっていますね。",
     exampleSrc:"A: Listening to a Japanese podcast while exercising is killing two birds with one stone.\nB: You are using time effectively.",
     funFact:"いっせきにちょう (一石二鳥) is one of the few よじじゅくご directly equivalent to an English proverb. It was actually borrowed from the English 'kill two birds with one stone' during the Meiji era. Japanese has a native equivalent: いちきょりょうとく (one action, two gains)."},

    {type:"mc", q:"What does いちごいちえ mean?", opts:["Treasure each encounter as once-in-a-lifetime","One lesson per day","One chance in a hundred","First meeting greetings"], ans:"Treasure each encounter as once-in-a-lifetime",
     hint:"This tea ceremony philosophy asks you to treat every meeting as unique and unrepeatable."},

    {type:"teach", trg:"たりきほんがん", src:"relying on others / depending on external help", pos:"noun", gender:null,
     note:"他力本願. Buddhist origin. Opposite: じりきほんがん (self-reliance).\nOften used negatively.",
     example:"A: たりきほんがんではせいこうしません。\nB: じぶんでどりょくしなければなりませんね。",
     exampleSrc:"A: You will not succeed by relying on others.\nB: You must make the effort yourself.",
     funFact:"たりきほんがん (他力本願) originally means relying on Amida Buddha's power for salvation in Pure Land Buddhism. In modern usage, it means passively depending on others, usually negative. The Buddhist meaning is actually positive: accepting that some things are beyond personal control. This shift in meaning frustrates Buddhist scholars."},

    {type:"teach", trg:"ぜんじんみとう", src:"unprecedented / never done before", pos:"noun", gender:null,
     note:"前人未踏. No person has ever set foot there before.\nUsed for groundbreaking achievements.",
     example:"A: ぜんじんみとうのきろくをたっせいしました。\nB: れきしてきなしゅんかんですね。",
     exampleSrc:"A: An unprecedented record was achieved.\nB: It is a historic moment.",
     funFact:"ぜんじんみとう (前人未踏) literally means 'no previous person has trod.' It describes achievements no one has accomplished before. Sports commentators use it for record-breaking moments. Scientists use it for discoveries. It carries a sense of heroic pioneering that makes listeners feel inspired."},

    {type:"teach", trg:"がしんしょうたん", src:"enduring hardship to achieve a goal", pos:"noun", gender:null,
     note:"臥薪嘗胆. Sleep on firewood and taste gall.\nFrom a Chinese story of revenge through suffering.",
     example:"A: がしんしょうたんのすえ、ようやくせいこうしました。\nB: ながいどりょくがみのりましたね。",
     exampleSrc:"A: After enduring great hardship, I finally succeeded.\nB: Your long effort bore fruit.",
     funFact:"がしんしょうたん (臥薪嘗胆) comes from a Chinese king who slept on firewood and tasted bitter gall daily to never forget his humiliation and motivation for revenge. In Japanese, it means enduring deliberate hardship to achieve a long-term goal. Athletes, entrepreneurs, and students use it to describe their perseverance."},

    {type:"teach", trg:"しこうさくご", src:"trial and error", pos:"noun", gender:null,
     note:"試行錯誤. しこう (trial) + さくご (error).\nしこうさくごをくりかえす = to repeat trial and error.",
     example:"A: しこうさくごのすえにかいけつさくをみつけました。\nB: あきらめなくてよかったですね。",
     exampleSrc:"A: After trial and error, I found a solution.\nB: It is good that you did not give up.",
     funFact:"しこうさくご (試行錯誤) is beloved in Japanese business and education. It implies learning through failure, which aligns with かいぜん (continuous improvement) philosophy. Startup culture embraces しこうさくご. The phrase しこうさくごをおそれるな (do not fear trial and error) encourages risk-taking."},

    {type:"teach", trg:"いちじょういっせき", src:"overnight / in a single day", pos:"noun", gender:null,
     note:"一朝一夕. いっちょういっせき with slightly different reading.\nUsed with negative: いちじょういっせきにはいかない = cannot be done overnight.",
     example:"A: にほんごはいちじょういっせきにはじょうたつしません。\nB: まいにちのどりょくがひつようですね。",
     exampleSrc:"A: You cannot master Japanese overnight.\nB: Daily effort is needed.",
     funFact:"いちじょういっせき (一朝一夕) is almost always used in negative form: いちじょういっせきにはいかない (cannot happen overnight). It sets realistic expectations. しんらいはいちじょういっせきにはきずけない (trust cannot be built overnight) is a common business wisdom."},

    {type:"fb", s:"{1}のきもちでおきゃくさまをむかえます。\n(We welcome guests with a once-in-a-lifetime mindset.)", a:"いちごいちえ", opts:["いちごいちえ","しんきいってん","いっせきにちょう","しこうさくご"], sSrc:"We welcome guests with a once-in-a-lifetime mindset.",
     hint:"This tea ceremony philosophy treats every encounter as unique and precious."},

    {type:"teach", trg:"ゆうずうむげ", src:"flexibility / adaptability / versatility", pos:"noun", gender:null,
     note:"融通無碍. Complete freedom to adapt.\nゆうずうがきく = to be flexible.",
     example:"A: もっとゆうずうむげなたいおうがひつようです。\nB: マニュアルどおりだけではだめですね。",
     exampleSrc:"A: More flexible responses are needed.\nB: Just following the manual is not enough.",
     funFact:"ゆうずうむげ (融通無碍) is a Buddhist term meaning unobstructed adaptability. In business, ゆうずうがきく (to be flexible) is highly valued. The opposite ゆうずうがきかない (inflexible) is criticism. Japanese management philosophy tries to balance きじゅん (standards) with ゆうずう (flexibility)."},

    {type:"teach", trg:"しんしんいってんの", src:"with single-minded devotion", pos:"adj", gender:null,
     note:"真心一点の. Concentrating all sincerity on one point.\nしんしんいってんをこめて = with wholehearted devotion.",
     example:"A: けんきゅうにしんしんいってんでとりくんでいます。\nB: そのじょうねつはすばらしいです。",
     exampleSrc:"A: I am devoted single-mindedly to research.\nB: That passion is wonderful.",
     funFact:"Japanese culture deeply values しんしん (sincerity/devotion). しんしんこめて (with all sincerity) appears on handwritten cards and gifts. いってん (one point) emphasizes focused dedication rather than scattered effort. The concept connects to いちずに (single-mindedly), another admired quality."},

    {type:"match", pairs:[{trg:"いちごいちえ",src:"once-in-a-lifetime encounter"},{trg:"しこうさくご",src:"trial and error"},{trg:"ぜんじんみとう",src:"unprecedented"},{trg:"じゅうにんといろ",src:"everyone is different"},{trg:"いっせきにちょう",src:"two birds one stone"}],
     hint:"Match each four-character compound with its English meaning."},

    {type:"mc", q:"What does がしんしょうたん describe?", opts:["Enduring deliberate hardship to achieve a long-term goal","A quick and easy solution","Giving up after failure","A comfortable life without struggle"], ans:"Enduring deliberate hardship to achieve a long-term goal",
     hint:"The Chinese king slept on firewood and tasted gall to maintain his motivation."},

    {type:"fb", s:"にほんごは{1}にはじょうたつしません。\n(You cannot master Japanese overnight.)", a:"いちじょういっせき", opts:["いちじょういっせき","いちごいちえ","いっせきにちょう","しんきいってん"], sSrc:"You cannot master Japanese overnight.",
     hint:"This compound literally means 'one morning, one evening' and is used with negative forms."},

    {type:"mc", q:"Where does いちごいちえ come from?", opts:["Tea ceremony philosophy","Martial arts tradition","Buddhist scripture","Modern business theory"], ans:"Tea ceremony philosophy",
     hint:"The great t... master Sen no Rikyu taught this principle of treasuring each gathering."}
  ]
};
export default BATCH8_L1;
