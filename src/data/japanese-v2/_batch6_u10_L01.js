// Batch 6 – Unit 10 (A1.2 Weather & Seasons): Nature & Landscape
const BATCH6_L1 = {
  id:"jav2_u10l_b6_1", title:"自然(しぜん)", icon:"🏔️", xp:15, board:true,
  steps:[
    {type:"intro", title:"自然(しぜん)",
     desc:"Expand your nature vocabulary with landscape features and natural phenomena. Japan's geography, from mountains to oceans, deeply shapes its culture and daily conversation.",
     goals:["Name natural features: mountains, rivers, oceans","Use descriptive adjectives for nature","Describe landscapes and natural beauty"]},

    {type:"teach", trg:"自然(しぜん)", src:"nature", pos:"noun", gender:null,
     note:"Kanji: 自然. 自然(しぜん)の中(なか)で = in nature.\n自然(しぜん)に = naturally.",
     example:"A: 日本(にほん)は自然(しぜん)が美(うつく)しいですね。\nB: そうですね。山(やま)も海(うみ)もきれいです。",
     exampleSrc:"A: Japan's nature is beautiful, isn't it?\nB: Yes. Both mountains and the sea are beautiful.",
     funFact:"自然(しぜん) combines 自 (self) and 然 (as it is). Japan's relationship with nature is central to its culture: haiku poetry captures seasonal moments, gardens recreate natural landscapes in miniature, and Shinto considers natural features as dwelling places of kami (spirits)."},

    {type:"teach", trg:"山(やま)", src:"mountain", pos:"noun", gender:null,
     note:"Kanji: 山. 富士山(ふじさん) = Mt. Fuji.\n山登(やまのぼ)り = mountain climbing.",
     example:"A: 日本(にほん)で一番(いちばん)高(たか)い山(やま)はなんですか？\nB: 富士山(ふじさん)です。3776メートルです。",
     exampleSrc:"A: What is the tallest mountain in Japan?\nB: Mt. Fuji. It is 3,776 meters.",
     funFact:"Japan is 73% mountains. The kanji 山 is one of the simplest, literally depicting three peaks. Mountain worship (山岳(さんがく)信仰(しんこう)) has deep roots. Many mountains are considered sacred. 山田(やまだ) (mountain + rice field) is the most common Japanese family name."},

    {type:"teach", trg:"川(かわ)", src:"river", pos:"noun", gender:null,
     note:"Kanji: 川. 大(おお)きい川(かわ) = big river.\n川遊(かわあそ)び = playing in the river.",
     example:"A: この川(かわ)はきれいですね。\nB: はい、魚(さかな)がたくさんいます。",
     exampleSrc:"A: This river is beautiful, isn't it?\nB: Yes, there are many fish.",
     funFact:"川 is another pictographic kanji showing flowing water between banks. Japan has many short, fast rivers due to its mountainous terrain. 七夕(たなばた) (Tanabata, Star Festival) celebrates lovers separated by the 天(あま)の川(がわ) (Milky Way, literally 'heavenly river')."},

    {type:"teach", trg:"海(うみ)", src:"sea / ocean", pos:"noun", gender:null,
     note:"Kanji: 海. 海辺(うみべ) = seaside/beach.\n日本海(にほんかい) = Sea of Japan.",
     example:"A: 夏(なつ)は海(うみ)に行(い)きますか？\nB: はい、毎年(まいとし)沖縄(おきなわ)に行(い)きます。",
     exampleSrc:"A: Do you go to the sea in summer?\nB: Yes, I go to Okinawa every year.",
     funFact:"Japan is an island nation surrounded by sea on all sides. The word 海(うみ) carries emotional weight: songs, poems, and art celebrate the sea. 海開(うみびら)き (ocean opening) is the official start of the swimming season each July. 海 combines 水 (water) and 毎 (every), suggesting the ever-present waters."},

    {type:"teach", trg:"空(そら)", src:"sky", pos:"noun", gender:null,
     note:"Kanji: 空. 青(あお)い空(そら) = blue sky.\nAlso means 'empty' (空(から)の).",
     example:"A: 今日(きょう)は空(そら)がきれいですね。\nB: そうですね。雲(くも)が一(ひと)つもありません。",
     exampleSrc:"A: The sky is beautiful today, isn't it?\nB: Yes. There is not a single cloud.",
     funFact:"空 is a fascinating kanji meaning both 'sky' and 'empty.' Buddhist philosophy connects these: the sky is vast emptiness. This dual meaning appears in 空手(からて) (karate, 'empty hand') and 空気(くうき) (air, 'sky spirit'). The character for sky also reads くう in Buddhist contexts."},

    {type:"teach", trg:"森(もり)", src:"forest", pos:"noun", gender:null,
     note:"Kanji: 森. Three trees stacked. 森(もり)の中(なか) = inside the forest.\nDifferent from 林(はやし) (smaller woods).",
     example:"A: この森(もり)は静(しず)かですね。\nB: はい、鳥(とり)の声(こえ)が聞(き)こえます。",
     exampleSrc:"A: This forest is quiet, isn't it?\nB: Yes, you can hear bird voices.",
     funFact:"The kanji 森 is three 木(き) (tree) characters stacked, perfectly depicting a dense forest. Compare with 林(はやし) (woods), which uses only two trees. The phrase 森(もり)のくまさん (Mr. Bear of the forest) is a beloved children's song. Studio Ghibli films often feature magical forests."},

    {type:"mc", q:"海(うみ) means:", opts:["Sea / ocean","Mountain","River","Forest"], ans:"Sea / ocean",
     hint:"Japan is an island nation surrounded by this natural feature."},

    {type:"teach", trg:"深(ふか)い", src:"deep", pos:"adj", gender:null,
     note:"I-adjective. 深(ふか)い海(うみ) = deep sea.\nKanji: 深い. Opposite: 浅(あさ)い (shallow).",
     example:"A: この池(いけ)は深(ふか)いですか？\nB: はい、とても深(ふか)いです。気(き)をつけてください。",
     exampleSrc:"A: Is this pond deep?\nB: Yes, very deep. Please be careful.",
     funFact:"深(ふか)い extends beyond physical depth to abstract meanings: 深(ふか)い考(かんが)え (deep thinking), 深(ふか)い絆(きずな) (deep bond), 深(ふか)い眠(ねむ)り (deep sleep). In Zen philosophy, 深(ふか)い understanding comes through meditation. The adjective pair 深(ふか)い/浅(あさ)い mirrors English deep/shallow."},

    {type:"teach", trg:"浅(あさ)い", src:"shallow", pos:"adj", gender:null,
     note:"I-adjective. 浅(あさ)い川(かわ) = shallow river.\nKanji: 浅い. Opposite: 深(ふか)い (deep).",
     example:"A: ここは浅(あさ)いから子(こ)どもでも安全(あんぜん)です。\nB: よかったです。安心(あんしん)しました。",
     exampleSrc:"A: It is shallow here, so it is safe even for children.\nB: That is good. I am relieved.",
     funFact:"浅(あさ)い also works metaphorically: 浅(あさ)い眠(ねむ)り (light sleep), 浅(あさ)い習慣(しゅうかん) (a shallow habit/not deeply ingrained). The famous Tokyo district 浅草(あさくさ) (Asakusa) uses this kanji in its name, referring to shallow grass plains that once existed there."},

    {type:"teach", trg:"広(ひろ)い", src:"wide / spacious", pos:"adj", gender:null,
     note:"I-adjective. 広(ひろ)い公園(こうえん) = a spacious park.\nKanji: 広い. Opposite: 狭(せま)い (narrow).",
     example:"A: この公園(こうえん)は広(ひろ)いですね。\nB: そうですね。散歩(さんぽ)にいいです。",
     exampleSrc:"A: This park is spacious, isn't it?\nB: Yes. It is good for walks.",
     funFact:"広(ひろ)い describes both physical width and metaphorical breadth: 広(ひろ)い心(こころ) (broad mind), 広(ひろ)い知識(ちしき) (broad knowledge). The kanji 広 appears in 広告(こうこく) (advertisement, 'spreading widely') and 広場(ひろば) (plaza/square)."},

    {type:"teach", trg:"狭(せま)い", src:"narrow / cramped", pos:"adj", gender:null,
     note:"I-adjective. 狭(せま)い道(みち) = a narrow road.\nKanji: 狭い. Opposite: 広(ひろ)い (wide).",
     example:"A: この部屋(へや)は少(すこ)し狭(せま)いですね。\nB: そうですね。でも便利(べんり)な場所(ばしょ)です。",
     exampleSrc:"A: This room is a bit cramped, isn't it?\nB: Yes. But it is a convenient location.",
     funFact:"Japan's limited space makes 狭(せま)い a frequently used word. Tokyo apartments are famously 狭(せま)い. The expression うさぎ小屋(ごや) (rabbit hutch) was infamously used by foreign media to describe small Japanese homes. But Japanese people have mastered living beautifully in compact spaces."},

    {type:"fb", s:"この川(かわ)は{1}ですか？\n(Is this river deep?)", a:"深(ふか)い", opts:["深(ふか)い","浅(あさ)い","広(ひろ)い","狭(せま)い"], sSrc:"Is this river deep?",
     hint:"The opposite of 浅(あさ)い (shallow). Describes great depth."},

    {type:"teach", trg:"投(な)げる", src:"to throw", pos:"verb", gender:null,
     note:"Group 2 verb. ボールを投(な)げる = to throw a ball.\nKanji: 投げる.",
     example:"A: ボールを投(な)げてください。\nB: はい、行(い)きますよ！",
     exampleSrc:"A: Please throw the ball.\nB: Okay, here it comes!",
     funFact:"投(な)げる appears in many sports terms: 投球(とうきゅう) (pitching), 投擲(とうてき) (throwing events in athletics). 投(な)げ出(だ)す (throw out) means to abandon or give up. In sumo, 投(な)げ (throws) are winning techniques. The kanji 投 combines 手 (hand) and a throwing motion."},

    {type:"teach", trg:"拾(ひろ)う", src:"to pick up", pos:"verb", gender:null,
     note:"Group 1 verb. ゴミを拾(ひろ)う = to pick up trash.\nKanji: 拾う.",
     example:"A: 公園(こうえん)でゴミを拾(ひろ)いましょう。\nB: いいですね。きれいにしましょう。",
     exampleSrc:"A: Let us pick up trash in the park.\nB: Good idea. Let us clean it up.",
     funFact:"拾(ひろ)う is an important word in Japanese environmental consciousness. Community clean-ups (ゴミ拾(ひろ)い) are common events. The word also means 'to find/pick up a taxi' (タクシーを拾(ひろ)う). 命(いのち)を拾(ひろ)う (to pick up one's life) means to have a narrow escape."},

    {type:"mc", q:"The pair 深(ふか)い / 浅(あさ)い means:", opts:["Long / short","Deep / shallow","Wide / narrow","High / low"], ans:"Deep / shallow",
     hint:"These adjectives describe depth, like water in a river or pool."},

    {type:"match", pairs:[
      {trg:"山(やま)", src:"mountain"},
      {trg:"川(かわ)", src:"river"},
      {trg:"森(もり)", src:"forest"},
      {trg:"空(そら)", src:"sky"},
      {trg:"海(うみ)", src:"sea"}
    ]},

    {type:"fb", s:"この公園(こうえん)は{1}ですね。\n(This park is spacious, isn't it?)", a:"広(ひろ)い", opts:["広(ひろ)い","狭(せま)い","深(ふか)い","高(たか)い"], sSrc:"This park is spacious, isn't it?",
     hint:"The i-adjective meaning wide, spacious, or broad."},

    {type:"mc", q:"狭(せま)い describes:", opts:["Something deep","Something tall","Something narrow or cramped","Something wide or spacious"], ans:"Something narrow or cramped",
     hint:"This adjective is the opposite of 広(ひろ)い."}
  ,{type:"match",pairs:[{trg:"自然(しぜん)",src:"nature"},{trg:"浅(あさ)い",src:"shallow"},{trg:"狭(せま)い",src:"narrow / cramped"},{trg:"投(な)げる",src:"to throw"},{trg:"拾(ひろ)う",src:"to pick up"}]}]
};
export default BATCH6_L1;
