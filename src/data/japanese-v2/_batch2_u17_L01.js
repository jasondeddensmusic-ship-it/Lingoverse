// Unit 17 Batch 2 Lesson 1: ニュースのうけみ (Passive in News & Complaints)
const BATCH2_L_1 = {
  id:"jav2_u17l_b2_1", title:"ニュースのうけみ", icon:"📡", xp:15, board:true,
  steps:[
    {type:"intro", title:"ニュースのうけみ",
     desc:"Passive voice is the backbone of Japanese news language. Learn how reporters describe arrests, discoveries, rescues, and policy changes. These expressions appear in every newspaper, broadcast, and online article.",
     goals:["Use passive verbs in news reporting contexts","Describe arrests, rescues, and policy announcements","Understand impersonal passive for general facts"]},

    {type:"teach", trg:"たいほされる", src:"to be arrested", pos:"verb", gender:null,
     note:"Passive of たいほする (to arrest). する-verb to される.\nKanji: 逮捕される. Standard news vocabulary.",
     example:"A: ようぎしゃがたいほされました。\nB: どんなはんざいですか？\nA: おすすめですか？\nB: はい、ぜひ試(ため)してみてください。",
     exampleSrc:"A: The suspect was arrested.\nB: What kind of crime?\nA: Do you recommend it?\nB: Yes, please try it.",
     funFact:"逮捕される is heard in virtually every crime news segment. The kanji 逮 means 'catch/seize' and 捕 means 'capture.' Japanese police have an exceptionally high arrest-to-conviction rate, exceeding 99%. When someone is 逮捕された, it is treated as almost equivalent to a guilty verdict in public perception."},

    {type:"teach", trg:"きゅうじょされる", src:"to be rescued / to be saved", pos:"verb", gender:null,
     note:"Passive of きゅうじょする (to rescue). する-verb to される.\nKanji: 救助される. Common in disaster news.",
     example:"A: やまでそうなんしたひとがきゅうじょされました。\nB: ぶじでよかったですね。\nA: 一緒(いっしょ)に行(い)きませんか？\nB: いいですね。行(い)きましょう。",
     exampleSrc:"A: The person who was in distress on the mountain was rescued.\nB: It is good they are safe.\nA: Shall we go together?\nB: That sounds good. Let's go.",
     funFact:"救助される appears frequently in Japan's disaster reporting. With earthquakes, typhoons, and mountain accidents common, rescue operations are regular news. The Self-Defense Forces (自衛隊) often conduct rescue missions. 救 means 'save' and 助 means 'help,' forming a powerful compound."},

    {type:"teach", trg:"はいしされる", src:"to be abolished / to be repealed", pos:"verb", gender:null,
     note:"Passive of はいしする (to abolish). する-verb to される.\nKanji: 廃止される. Used for laws, systems, policies.",
     example:"A: そのせいどははいしされました。\nB: あたらしいせいどはありますか？\nA: どこがおすすめですか？\nB: 京都(きょうと)がおすすめです。",
     exampleSrc:"A: That system was abolished.\nB: Is there a new system?\nA: Where do you recommend?\nB: I recommend Kyoto.",
     funFact:"廃止される is essential for understanding policy news. 廃 means 'abolish/discard' and 止 means 'stop.' Japan periodically abolishes outdated regulations. The passive is standard because news focuses on what happened to the system, not on who abolished it."},

    {type:"teach", trg:"ようぎしゃ", src:"suspect", pos:"noun", gender:null,
     note:"Kanji: 容疑者. よう (suspicion) + ぎ (doubt) + しゃ (person).\nThe standard term used in Japanese crime reporting.",
     example:"A: ようぎしゃはまだみつかっていません。\nB: けいさつがさがしています。\nA: 何(なに)が一番(いちばん)良(よ)かったですか？\nB: 食(た)べ物(もの)が一番(いちばん)おいしかったです。",
     exampleSrc:"A: The suspect has not been found yet.\nB: The police are searching.\nA: What was the best part?\nB: The food was the most delicious.",
     funFact:"容疑者 is the formal news term for 'suspect.' Japanese media strictly uses this term until conviction, after which the person becomes 被告 (hikoku, defendant) or 犯人 (hannin, criminal). This linguistic precision reflects Japan's legal process."},

    {type:"mc", q:"ようぎしゃがたいほされた means:", opts:["The suspect was arrested","The police arrested","I was arrested","The suspect escaped"], ans:"The suspect was arrested",
     hint:"The passive of たいほする focuses on the s... receiving the action of arrest."},

    {type:"teach", trg:"かいせいされる", src:"to be revised / to be amended (law)", pos:"verb", gender:null,
     note:"Passive of かいせいする (to revise). する-verb to される.\nKanji: 改正される. Used for laws and regulations.",
     example:"A: ほうりつがかいせいされました。\nB: どんなへんこうがありましたか？\nA: よく行(い)きますか？\nB: 月(つき)に一回(いっかい)ぐらい行(い)きます。",
     exampleSrc:"A: The law was revised.\nB: What changes were made?\nA: Do you go often?\nB: I go about once a month.",
     funFact:"改正される is critical for understanding Japanese legislative news. 改 means 'reform/change' and 正 means 'correct.' Laws in Japan go through revision (改正) rather than replacement. The Diet (国会, kokkai) debates and passes revisions in a process that dominates political news cycles."},

    {type:"teach", trg:"ほうりつ", src:"law / legislation", pos:"noun", gender:null,
     note:"Kanji: 法律. ほう (law/method) + りつ (regulation).\nあたらしいほうりつ = a new law.",
     example:"A: このほうりつはいつからてきようされますか？\nB: らいねんの4がつからです。\nA: 誰(だれ)と行(い)きましたか？\nB: 友達(ともだち)と一緒(いっしょ)に行(い)きました。",
     exampleSrc:"A: When will this law be applied?\nB: From April next year.\nA: Who did you go with?\nB: I went with a friend.",
     funFact:"法律 is the general word for law. Japan's legal system blends Western civil law with unique Japanese elements. The word 法 appears in countless compounds: 憲法 (kenpo, constitution), 刑法 (keiho, criminal law), 方法 (houhou, method). April is when most new laws take effect, aligning with Japan's fiscal year."},

    {type:"teach", trg:"にんめいされる", src:"to be appointed / to be nominated", pos:"verb", gender:null,
     note:"Passive of にんめいする (to appoint). する-verb to される.\nKanji: 任命される.",
     example:"A: あたらしいだいじんがにんめいされました。\nB: だれがにんめいされましたか？\nA: それは大変(たいへん)でしたね。\nB: はい、でもいい勉強(べんきょう)になりました。",
     exampleSrc:"A: A new minister was appointed.\nB: Who was appointed?\nA: That must have been tough.\nB: Yes, but it was a good learning experience.",
     funFact:"任命される is used for official government and corporate appointments. 任 means 'responsibility/duty' and 命 means 'command/life.' Cabinet ministers (大臣, daijin) are formally appointed by the Emperor on the Prime Minister's recommendation, making にんめい a word with constitutional significance."},

    {type:"fb", s:"やまでそうなんしたひとが{1}ました。\n(The person in distress on the mountain was rescued.)", a:"きゅうじょされ", opts:["きゅうじょされ","きゅうじょして","きゅうじょし","きゅうじょする"], sSrc:"The person in distress on the mountain was rescued.",
     hint:"The passive form of きゅうじょする (to rescue). する-verb passive: される."},

    {type:"teach", trg:"そうなんする", src:"to be in distress / to be shipwrecked", pos:"verb", gender:null,
     note:"する-verb. そうなん = distress/disaster at sea or in mountains.\nKanji: 遭難する. Used for accidents in nature.",
     example:"A: まいとしやまでそうなんするひとがいます。\nB: あんぜんにきをつけなければなりません。\nA: 本当(ほんとう)ですか？すごいですね。\nB: ありがとうございます。頑張(がんば)りました。",
     exampleSrc:"A: Every year people get into distress on mountains.\nB: We must pay attention to safety.\nA: Really? That is amazing.\nB: Thank you. I worked hard.",
     funFact:"遭難する combines 遭 (encounter) and 難 (difficulty), meaning to encounter a life-threatening situation. Mountain climbing accidents (山岳遭難) make national news in Japan, especially on famous peaks like Mount Fuji. Rescue helicopter footage is a staple of Japanese news broadcasts."},

    {type:"teach", trg:"てきようされる", src:"to be applied / to be enforced", pos:"verb", gender:null,
     note:"Passive of てきようする (to apply/enforce). する-verb to される.\nKanji: 適用される. Used for rules, laws, policies.",
     example:"A: あたらしいルールがてきようされます。\nB: いつからですか？\nA: 私(わたし)も興味(きょうみ)があります。\nB: じゃあ、今度(こんど)一緒(いっしょ)にどうですか？",
     exampleSrc:"A: The new rule will be enforced.\nB: From when?\nA: I am also interested.\nB: Then, how about doing it together next time?",
     funFact:"適用される is bureaucratic vocabulary essential for understanding regulations. 適 means 'suitable/fit' and 用 means 'use.' When a law is 適用される, it officially takes effect. Japanese bureaucracy is meticulous about implementation dates and scope of application."},

    {type:"mc", q:"ほうりつがかいせいされた means:", opts:["The law was broken","The law was revised","A new law was created","The law was abolished"], ans:"The law was revised",
     hint:"かいせい means revision or amendment. The passive shows the l... was the subject of revision."},

    {type:"tip", title:"Passive in News Headlines",
     text:"Japanese news headlines often use passive to keep focus on events:\n\nたいほされた = was arrested\nきゅうじょされた = was rescued\nはいしされた = was abolished\nかいせいされた = was revised\nにんめいされた = was appointed\nてきようされた = was enforced\n\nThe agent (who did it) is often omitted entirely:\nようぎしゃがたいほされた (the suspect was arrested)\nnot: けいさつがようぎしゃをたいほした (police arrested the suspect)",
     deepDive:{title:"Reading NHK News",
      text:"NHK News Web (NHK NEWS WEB) is the best resource for learning Japanese through news. Articles use standard passive constructions:\n\nはっぴょうされた (was announced)\nけっていされた (was decided)\nかくにんされた (was confirmed)\n\nThese passive constructions make Japanese news readable once you know the pattern: [topic] が [passive verb]. The vocabulary is specialized but repetitive, making it easier to learn over time."}},

    {type:"match", pairs:[{trg:"たいほされる",src:"to be arrested"},{trg:"きゅうじょされる",src:"to be rescued"},{trg:"はいしされる",src:"to be abolished"},{trg:"かいせいされる",src:"to be revised"}]},

    {type:"fb", s:"あたらしいだいじんが{1}ました。\n(A new minister was appointed.)", a:"にんめいされ", opts:["にんめいされ","にんめいして","にんめいし","にんめいする"], sSrc:"A new minister was appointed.",
     hint:"The passive of にんめいする (to appoint). する-verb passive: される."},

    {type:"match", pairs:[{trg:"ようぎしゃ",src:"suspect"},{trg:"ほうりつ",src:"law"},{trg:"にんめいされる",src:"to be appointed"},{trg:"てきようされる",src:"to be enforced"}]},

    {type:"mc", q:"そうなんする means:", opts:["to succeed","to be in distress","to celebrate","to travel"], ans:"to be in distress",
     hint:"This word describes a life-threatening situation, usually on a mountain or at sea."},
  ]
};
export default BATCH2_L_1;
