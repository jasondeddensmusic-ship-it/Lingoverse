// Batch 6 – Unit 32 (B2.3 Medicine): Mental Health & Wellbeing
const BATCH6_L1 = {
  id:"jav2_u32l_b6_1", title:"メンタルヘルス", icon:"🧘", xp:15, board:true,
  steps:[
    {type:"intro", title:"メンタルヘルス",
     desc:"Learn vocabulary for mental health, psychological wellbeing, and emotional care. As awareness grows in Japan, this vocabulary becomes increasingly important in daily life and media.",
     goals:["Discuss mental health topics with appropriate vocabulary","Understand stress, anxiety, and coping vocabulary","Express emotional states with nuance"]},

    {type:"teach", trg:"メンタルヘルス", src:"mental health", pos:"noun", gender:null,
     note:"Katakana loanword. メンタルがよわい = mentally fragile.\nメンタルケア = mental health care.",
     example:"A: しょくばでのメンタルヘルスたいさくがじゅうようです。\nB: そうですね。ストレスチェックをじっしすべきです。",
     exampleSrc:"A: Mental health measures in the workplace are important.\nB: Yes. Stress checks should be implemented.",
     funFact:"Japan's awareness of メンタルヘルス has grown dramatically. Since 2015, companies with 50+ employees must conduct annual ストレスチェック. However, stigma (スティグマ) around mental illness persists. Counseling (カウンセリング) and therapy (セラピー) are becoming more accepted, especially among younger generations."},

    {type:"teach", trg:"ふあん", src:"anxiety / unease / worry", pos:"noun", gender:null,
     note:"Kanji: 不安. ふあんになる = to become anxious.\nしょうらいのふあん = anxiety about the future.",
     example:"A: しょうらいにたいするふあんがあります。\nB: ぐたいてきにどんなことがふあんですか？",
     exampleSrc:"A: I have anxiety about the future.\nB: Specifically, what are you anxious about?",
     funFact:"ふあん (不安) combines 不 (not) and 安 (peace). Japan consistently ranks high in future ふあん surveys. Financial insecurity, career uncertainty, and aging are common sources. しゃかいふあん (social anxiety) is a recognized condition. The phrase まんぜんとしたふあん (vague, unfocused anxiety) describes a diffuse unease."},

    {type:"teach", trg:"うつ", src:"depression", pos:"noun", gender:null,
     note:"Kanji: 鬱. うつびょう = depressive disorder.\nうつじょうたい = depressive state.",
     example:"A: さいきんうつっぽいきぶんがつづいています。\nB: いちどせんもんかにそうだんしてみませんか？",
     exampleSrc:"A: I have been feeling depressed recently.\nB: Would you consider consulting a specialist?",
     funFact:"うつ (depression) awareness has increased significantly in Japan. The kanji 鬱 is famously complex (29 strokes) and difficult to write. うつびょう affects about 7% of Japanese adults. The phrase こころのかぜ (a cold of the heart) was used to reduce stigma, comparing depression to a common physical illness that can be treated."},

    {type:"teach", trg:"カウンセリング", src:"counseling", pos:"noun", gender:null,
     note:"Katakana loanword. カウンセラー = counselor.\nカウンセリングをうける = to receive counseling.",
     example:"A: カウンセリングをうけてみたいのですが。\nB: がっこうのカウンセラーにまずれんらくしてみてください。",
     exampleSrc:"A: I would like to try receiving counseling.\nB: Please try contacting the school counselor first.",
     funFact:"Japan placed スクールカウンセラー (school counselors) in all public junior high schools by 2001. Workplace Employee Assistance Programs (EAP) offer カウンセリング. Online and phone counseling services (いのちのでんわ, Lifeline) provide anonymous support. Seeking help is increasingly normalized."},

    {type:"teach", trg:"いやす", src:"to heal / to soothe / to comfort", pos:"verb", gender:null,
     note:"Group 1 verb. こころをいやす = to heal the heart/mind.\nKanji: 癒す. いやし = healing.",
     example:"A: しぜんのなかにいるとこころがいやされます。\nB: おんせんもいいですよ。からだもこころもいやされます。",
     exampleSrc:"A: Being in nature heals the heart.\nB: Onsen is also good. Both body and mind are healed.",
     funFact:"いやし (癒し) became a buzzword in stressed-out Japan. いやしスポット (healing spots: temples, forests, hot springs), いやしのおんがく (healing music), and いやしけいペット (comfort pets) are entire industries. もりりんよく (forest bathing) is a scientifically studied いやし practice originating in Japan."},

    {type:"mc", q:"ふあん describes:", opts:["Anxiety and unease","Physical pain","Excitement","Anger"], ans:"Anxiety and unease",
     hint:"This word combines 不 (not) and 安 (peace) to express a worried mental state."},

    {type:"teach", trg:"きぶん", src:"mood / feeling / disposition", pos:"noun", gender:null,
     note:"Kanji: 気分. きぶんがいい = feeling good.\nきぶんてんかん = change of mood/scenery.",
     example:"A: きょうはきぶんがすぐれません。\nB: むりしないでやすんでくださいね。",
     exampleSrc:"A: I am not feeling well today.\nB: Please don't push yourself and rest.",
     funFact:"きぶん (気分) combines 気 (spirit/energy) and 分 (portion). きぶんてんかん (mood change) is an important self-care concept: changing scenery, taking a walk, or doing something different to reset your mental state. The phrase きぶんやさん (mood person) describes someone whose mood changes easily."},

    {type:"teach", trg:"りらっくす", src:"to relax", pos:"verb", gender:null,
     note:"From English 'relax.' りらっくすする = to relax.\nリラクゼーション = relaxation.",
     example:"A: たまにはりらっくすしましょう。\nB: そうですね。おんせんにいきたいです。",
     exampleSrc:"A: Let us relax once in a while.\nB: Yes. I want to go to a hot spring.",
     funFact:"Japanese りらっくす culture includes onsen (hot springs), sentou (public baths), massage, yoga, and meditation. もくよくざい (bath additives) transform home baths into relaxation sessions. Japanese workplaces are beginning to offer リフレッシュきゅうか (refresh vacation) for mental health recovery."},

    {type:"teach", trg:"こどく", src:"loneliness / solitude / isolation", pos:"noun", gender:null,
     note:"Kanji: 孤独. こどくかん = feeling of loneliness.\nこどくし = solitary death.",
     example:"A: こうれいしゃのこどくがしゃかいもんだいになっています。\nB: ちいきのつながりがたいせつですね。",
     exampleSrc:"A: Elderly loneliness has become a social problem.\nB: Community connections are important.",
     funFact:"こどく (孤独) is a serious social issue in Japan. こどくし (solitary death) among elderly living alone affects thousands annually. The government appointed a こどく・こりつたいさくたんとうだいじん (Minister of Loneliness) in 2021. ひきこもり (social withdrawal) affects an estimated 1.5 million people. Community connections are seen as the key solution."},

    {type:"teach", trg:"じしん", src:"self-confidence / confidence in oneself", pos:"noun", gender:null,
     note:"Kanji: 自信. じしんがある = to have confidence.\nDifferent from じしん (地震, earthquake).",
     example:"A: じしんをもってがんばってください。\nB: ありがとう。がんばります。",
     exampleSrc:"A: Please be confident and do your best.\nB: Thank you. I will try my best.",
     funFact:"じしん (自信) and じしん (地震) are perfect homophones but use completely different kanji: 自信 (self + belief) vs 地震 (earth + shake). Context always clarifies meaning. Japanese culture sometimes discourages excessive じしん (it can look like arrogance), preferring humble competence. Building healthy じしん is increasingly discussed in education."},

    {type:"teach", trg:"がまん", src:"patience / endurance / self-restraint", pos:"noun", gender:null,
     note:"Kanji: 我慢. がまんする = to endure/be patient.\nがまんづよい = patient/enduring.",
     example:"A: あとすこしです。がまんしてください。\nB: はい、がんばります。",
     exampleSrc:"A: Just a little more. Please be patient.\nB: Yes, I will try my best.",
     funFact:"がまん (我慢) is a core Japanese value: the ability to endure discomfort without complaining. Children learn がまん early. However, excessive がまん can harm mental health. Modern psychology encourages expressing feelings rather than always enduring. The balance between がまん and self-expression is a evolving cultural conversation."},

    {type:"fb", s:"しぜんのなかにいるとこころが{1}されます。\n(Being in nature heals the heart.)", a:"いや", opts:["いや","こわ","おどろか","よろこば"], sSrc:"Being in nature heals the heart.",
     hint:"The passive stem of the verb meaning to heal or soothe."},

    {type:"teach", trg:"あんしん", src:"peace of mind / relief / reassurance", pos:"noun", gender:null,
     note:"Kanji: 安心. あんしんする = to feel relieved.\nあんしん・あんぜん = safety and security.",
     example:"A: むすめがぶじにとうちゃくしてあんしんしました。\nB: よかったですね。",
     exampleSrc:"A: I felt relieved that my daughter arrived safely.\nB: That is good.",
     funFact:"あんしん (安心) combines 安 (peace) and 心 (heart). あんしん and あんぜん (safety) are often paired: あんしん・あんぜんなまち (a safe and secure town). The feeling of あんしん is what Japanese hospitality (おもてなし) aims to create. Products labeled あんしんせっけい (peace-of-mind design) sell better."},

    {type:"mc", q:"がまん describes:", opts:["Patient endurance without complaining","Extreme happiness","Complete relaxation","Intense fear"], ans:"Patient endurance without complaining",
     hint:"This traditional Japanese value involves quietly bearing difficulty."},

    {type:"match", pairs:[
      {trg:"ふあん", src:"anxiety"},
      {trg:"いやす", src:"to heal / soothe"},
      {trg:"こどく", src:"loneliness"},
      {trg:"がまん", src:"patience / endurance"},
      {trg:"あんしん", src:"peace of mind"}
    ]},

    {type:"fb", s:"じしんを{1}てがんばってください。\n(Please be confident and do your best.)", a:"もっ", opts:["もっ","すて","わすれ","なくし"], sSrc:"Please be confident and do your best.",
     hint:"The て-form of もつ (to hold/have), used with じしん meaning to have confidence."},

    {type:"mc", q:"こどくし is a social problem involving:", opts:["People dying alone without anyone noticing","Children being bullied","Traffic accidents","Natural disasters"], ans:"People dying alone without anyone noticing",
     hint:"This issue particularly affects elderly p... living a... in Japan."}
  ]
};
export default BATCH6_L1;
