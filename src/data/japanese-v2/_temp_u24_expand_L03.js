// Unit 24 Expansion. Lesson 5: エッセイのつなぎ (Essay & Presentation Connectors)
const LESSON_5 = {
  id:"jav2_u24l5", title:"エッセイのつなぎ", icon:"📄", xp:15, board:true,
  steps:[
    {type:"intro", title:"エッセイのつなぎ",
     desc:"Learn the connectors that structure formal essays and presentations. Master まず (first), つぎに (next), さいごに (finally) for ordering points, and たとえば (for example), とくに (especially), and ようするに (in short) for developing arguments. These patterns make your writing and speaking sound organized and persuasive.",
     goals:["Use ordering connectors: まず, つぎに, さいごに","Use development connectors: たとえば, とくに","Use summary connectors: ようするに, いじょう"]},

    {type:"teach", trg:"まず", src:"first / first of all / to begin with", pos:"adv", gender:null,
     note:"Opens a sequence of points. Always the first in a series.\nまず...つぎに...さいごに = first...next...finally.",
     example:"A: まず、じこしょうかいをおねがいします。\nB: はい、わたしはたなかと申します。",
     exampleSrc:"A: First, please introduce yourself.\nB: Yes, my name is Tanaka.",
     funFact:"まず comes from the adverb meaning 'for now/first.' It is indispensable in Japanese organizing: presentations open with まず, instructions begin with まず, and problem-solving starts with まず. The phrase まずは (for starters) is slightly softer. Japanese speakers use まず so frequently that it serves as a verbal pause filler meaning 'well, to start...'"},

    {type:"teach", trg:"つぎに", src:"next / secondly / then", pos:"adv", gender:null,
     note:"The second point in a sequence. Follows まず.\nKanji: 次に. つぎ = next (noun).",
     example:"A: まず、もんだいをせいりします。つぎに、かいけつさくをかんがえます。\nB: わかりました。",
     exampleSrc:"A: First, we organize the problems. Next, we think of solutions.\nB: Understood.",
     funFact:"次に uses 次 (next/order). Japanese speakers value clear ordering in communication. Business presentations, school reports, and even cooking shows follow the まず...つぎに structure rigorously. The noun つぎ means 'next' and appears everywhere: つぎのかい (next meeting), つぎのえき (next station). Clear sequencing is a valued communication skill."},

    {type:"teach", trg:"さいごに", src:"finally / lastly / in conclusion", pos:"adv", gender:null,
     note:"Signals the final point in a sequence. Kanji: 最後に.\nさいご = last/final (noun).",
     example:"A: さいごに、まとめをはっぴょうします。\nB: おねがいします。",
     exampleSrc:"A: Finally, I will present the summary.\nB: Please go ahead.",
     funFact:"最後 uses 最 (most) and 後 (after/behind), literally 'the most after.' さいごに closes presentations, essays, and speeches. Japanese presentations follow a strict structure: はじめに (introduction), followed by numbered points, ending with さいごに (conclusion). The phrase さいごまで (until the end) expresses perseverance."},

    {type:"teach", trg:"たとえば", src:"for example / for instance", pos:"adv", gender:null,
     note:"Introduces a specific example to support a general statement.\nKanji: 例えば. Can start a sentence or follow a comma.",
     example:"A: にほんにはおもしろいぶんかがあります。たとえば、おちゃのゆやいけばなです。\nB: わたしもきょうみがあります。",
     exampleSrc:"A: Japan has interesting culture. For example, tea ceremony and flower arranging.\nB: I am interested too.",
     funFact:"例えば uses 例 (example/precedent). It is the standard way to introduce examples in both speech and writing. Japanese communication values concrete examples: making a general statement without a たとえば feels incomplete. In essays, たとえば paragraphs are expected to follow every major claim."},

    {type:"mc", q:"The correct ordering sequence is:", opts:["つぎに, まず, さいごに","さいごに, まず, つぎに","まず, つぎに, さいごに","つぎに, さいごに, まず"], ans:"まず, つぎに, さいごに",
     hint:"Think of the logical order: first, next, and finally."},

    {type:"teach", trg:"とくに", src:"especially / particularly / in particular", pos:"adv", gender:null,
     note:"Highlights one item from a group as especially important or notable.\nKanji: 特に. とく = special/particular.",
     example:"A: にほんのたべものはおいしいです。とくに、おすしがだいすきです。\nB: わたしもおすしがすきです。",
     exampleSrc:"A: Japanese food is delicious. Especially, I love sushi.\nB: I like sushi too.",
     funFact:"特に uses 特 (special/unique). It zooms in on one element from many: 日本語は難しい。特に漢字が (Japanese is hard. Especially kanji). In news, とくに highlights severity: 特に被害が大きい (damage is especially severe). Resumes and interviews use とくに to emphasize strengths: 特に英語力に自信があります (I am especially confident in my English ability)."},

    {type:"teach", trg:"ようするに", src:"in short / to sum up / the point is", pos:"conj", gender:null,
     note:"Kanji: 要するに. よう (essential/need) + する (do).\nSummarizes or cuts to the core of an argument.",
     example:"A: ようするに、じかんがたりないということですね。\nB: そのとおりです。",
     exampleSrc:"A: In short, you mean there is not enough time.\nB: Exactly.",
     funFact:"要するに uses 要 (essential/main point). It cuts through complexity to the core: 'strip away the details and the point is...' Compared to つまり (in other words, rephrasing), ようするに is more reductive: it simplifies rather than rephrases. In meetings, ようするに signals impatience or efficiency: 'let us get to the point.'"},

    {type:"teach", trg:"いっぽう", src:"on the one hand / meanwhile / while", pos:"conj", gender:null,
     note:"Kanji: 一方. Written form of いっぽうで.\nPresents a parallel or contrasting perspective in formal writing.",
     example:"A: とかいのじんこうはふえている。いっぽう、いなかのじんこうはへっている。\nB: にほんのかだいですね。",
     exampleSrc:"A: The urban population is increasing. Meanwhile, the rural population is decreasing.\nB: That is a challenge for Japan.",
     funFact:"一方 without で is the written variant preferred in essays and news. It frames two sides of a coin: A is happening; meanwhile, B is also happening. News articles use 一方 to present balanced reporting. It can also introduce yourself pivoting to the other side of your own argument: 'I support X. 一方, I understand the concerns about Y.'"},

    {type:"fb", s:"にほんのたべものはおいしいです。{1}、おすしがだいすきです。\n(Japanese food is delicious. Especially, I love sushi.)", a:"とくに", opts:["とくに","たとえば","ようするに","さらに"], sSrc:"Japanese food is delicious. Especially, I love sushi.",
     hint:"The adverb that highlights one item as particularly noteworthy from a group."},

    {type:"teach", trg:"いじょう", src:"that is all / the above / more than", pos:"noun", gender:null,
     note:"Kanji: 以上. い (by means of) + じょう (above).\nいじょうです = that concludes. Also: 100人以上 = 100 or more people.",
     example:"A: いじょうでわたしのはっぴょうをおわります。\nB: ありがとうございました。しつもんはありますか？",
     exampleSrc:"A: With that, I conclude my presentation.\nB: Thank you. Are there any questions?",
     funFact:"以上 is the professional ending for presentations, reports, and speeches. いじょうです (that is all) is clean and final. The word also means 'more than': 100にんいじょう (100 or more people). In military and business contexts, いじょう ends radio transmissions and reports. The opposite, 以下 (ika), means 'below/less than.'"},

    {type:"teach", trg:"まとめ", src:"summary / conclusion / compilation", pos:"noun", gender:null,
     note:"From まとめる (to summarize/compile). まとめをする = to make a summary.\nVery common in presentations and reports.",
     example:"A: さいごにまとめをはっぴょうします。\nB: おねがいします。",
     exampleSrc:"A: Finally, I will present the summary.\nB: Please go ahead.",
     funFact:"まとめ comes from まとめる (to gather/compile). Japanese presentations always include a まとめ slide. Blog posts end with まとめ sections. The word reflects Japanese communication preference for neat closure: everything gathered together at the end. Video creators use まとめ動画 (summary videos) and news sites have まとめ記事 (roundup articles)."},

    {type:"mc", q:"ようするに is used to:", opts:["Add an example","Introduce the first point","Cut to the core of an argument","Express surprise"], ans:"Cut to the core of an argument",
     hint:"This connector strips away details and delivers the essential point."},

    {type:"match", pairs:[{trg:"まず",src:"first"},{trg:"つぎに",src:"next"},{trg:"さいごに",src:"finally"},{trg:"たとえば",src:"for example"}]},

    {type:"match", pairs:[{trg:"とくに",src:"especially"},{trg:"ようするに",src:"in short"},{trg:"いっぽう",src:"on the one hand"},{trg:"いじょう",src:"that is all"}]},

    {type:"fb", s:"{1}でわたしのはっぴょうをおわります。\n(With that, I conclude my presentation.)", a:"いじょう", opts:["いじょう","まとめ","さいごに","ようするに"], sSrc:"With that, I conclude my presentation.",
     hint:"The word meaning 'the above' that professionally signals the end of a report."},

    {type:"mc", q:"いっぽう is different from しかし because:", opts:["They mean the same thing","いっぽう presents a parallel view, しかし contradicts","いっぽう is casual, しかし is formal","いっぽう is only for spoken Japanese"], ans:"いっぽう presents a parallel view, しかし contradicts",
     hint:"One shows two sides existing simultaneously; the other signals direct opposition."},

    {type:"match", pairs:[{trg:"まとめ",src:"summary"},{trg:"いじょう",src:"that is all"},{trg:"とくに",src:"especially"},{trg:"たとえば",src:"for example"}]},
  ]
};
export default LESSON_5;
