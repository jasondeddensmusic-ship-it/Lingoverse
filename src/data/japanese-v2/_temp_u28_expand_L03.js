// Unit 28 Expansion. Lesson 5: Register Differences
const LESSON_5 = {
  id:"jav2_u28l5", title:"けいごとくだけたひょうげん", icon:"🔄", xp:15, board:true,
  steps:[
    {type:"intro", title:"Register Differences",
     desc:"Japanese has dramatic register shifts between formal, neutral, and casual speech. The same idea can be expressed in completely different words depending on context. Master these register pairs and know when to use each level.",
     goals:["Match formal and casual equivalents for key expressions","Switch between registers appropriately","Recognize social cues that signal which register to use"]},

    {type:"teach", trg:"そうです / さようでございます", src:"that's right (casual / ultra-formal)", pos:"part", gender:null,
     note:"Two extremes of the same meaning.\nそうです = standard polite. さようでございます = ultra-formal (hotel/airline).",
     example:"A: こちらがおへやでございます。さようでございますか？\nB: はい、よやくしたやまだです。",
     exampleSrc:"A: This is your room. Is that correct?\nB: Yes, I am Yamada who made the reservation.",
     funFact:"さようでございます is the highest register of agreement. You hear it at luxury hotels, airlines, and department stores. The ございます form elevates ある into the most polite possible expression. Regular Japanese people never use さよう in daily life. It signals professional service excellence."},

    {type:"teach", trg:"わかりました / かしこまりました", src:"understood (polite / service keigo)", pos:"verb", gender:null,
     note:"Two levels of 'understood.'\nわかりました = standard polite. かしこまりました = service industry ultra-polite.",
     example:"A: ごちゅうもんはいじょうでよろしいですか？\nB: はい。\nA: かしこまりました。",
     exampleSrc:"A: Will that be all for your order?\nB: Yes.\nA: Understood.",
     funFact:"かしこまりました comes from かしこまる (to feel awe/to bow respectfully). It is the standard acknowledgment in hotels, restaurants, and customer service. The word literally means 'I humbly bow before your instruction.' Using it in a casual setting would be comical, but omitting it in service contexts would seem rude."},

    {type:"teach", trg:"すみません / おそれいります", src:"excuse me (standard / formal humble)", pos:"verb", gender:null,
     note:"Both express apology or gratitude for inconvenience.\nおそれいります = literally 'I am afraid/awed.'",
     example:"A: おそれいりますが、おなまえをおしえていただけますか？\nB: やまだともうします。",
     exampleSrc:"A: I am sorry to trouble you, but could you tell me your name?\nB: My name is Yamada.",
     funFact:"おそれいります is the polite escalation of すみません. It literally means 'I am fearful/awed,' expressing deep humility about imposing on someone. Business people use it before making requests. The phrase おそれいりますが (I am sorry to trouble you, but...) is the standard polite preface to any request in formal contexts."},

    {type:"mc", q:"かしこまりました is used primarily in:", opts:["Service industry and hospitality contexts","Casual conversation with friends","Academic writing","Text messages"], ans:"Service industry and hospitality contexts",
     hint:"This ultra-polite acknowledgment signals professional, customer-facing communication."},

    {type:"teach", trg:"たべる / めしあがる / いただく", src:"to eat (plain / respectful / humble)", pos:"verb", gender:null,
     note:"Three register levels for eating.\nたべる = neutral. めしあがる = respectful. いただく = humble.",
     example:"A: どうぞめしあがってください。\nB: ありがとうございます。いただきます。",
     exampleSrc:"A: Please help yourself. (respectful)\nB: Thank you. I will eat. (humble)",
     funFact:"The phrase いただきます (before eating) is one of the first Japanese words learners encounter, but few realize it is humble keigo. It means 'I humbly receive.' めしあがる (respectful) is used for the other person's eating. This three-way split (neutral/respectful/humble) applies to many core verbs and is the backbone of the register system."},

    {type:"teach", trg:"いる / おる / いらっしゃる", src:"to be/exist (plain / humble / respectful)", pos:"verb", gender:null,
     note:"Three levels of existence/presence.\nいる = neutral. おる = humble. いらっしゃる = respectful.",
     example:"A: しゃちょうはいらっしゃいますか？\nB: はい、おります。しょうしょうおまちください。",
     exampleSrc:"A: Is the president in? (respectful for president)\nB: Yes, he is. (humble for self/company) Please wait a moment.",
     funFact:"The います/おります/いらっしゃいます distinction is perhaps the most critical in business Japanese. When a client calls asking for your boss, you use いらっしゃる about the client and おる about your own company's people. Getting this backward (using いらっしゃる about your own boss to an outsider) is a classic keigo mistake."},

    {type:"tip", title:"The Register Ladder",
     text:"Japanese has five main register levels:\n\nCasual (タメぐち): だ, いく, たべる\nUsed with close friends and family.\n\nPolite (ていねいご): です, いきます, たべます\nDefault with strangers and acquaintances.\n\nRespectful (そんけいご): でいらっしゃる, いらっしゃる, めしあがる\nFor others' actions in formal settings.\n\nHumble (けんじょうご): である, まいる, いただく\nFor your own actions in formal settings.\n\nUltra-polite (さいこうけいご): でございます, かしこまりました\nService industry and ceremonial contexts.",
     deepDive:{title:"Reading Social Cues for Register",
      text:"Choosing the right register depends on multiple factors:\n\nAge difference: Speak up to elders, speak casually to peers or younger.\n\nSocial distance: Strangers get polite, close friends get casual.\n\nIn-group vs out-group: Humble about your company to outsiders, polite within the company.\n\nFormality of setting: Meeting room gets keigo, after-work drinks get casual.\n\nPower dynamic: Customer always gets the highest register.\n\nJapanese people constantly adjust their register mid-conversation. Moving from keigo to casual can signal growing closeness. Switching from casual to keigo can signal displeasure or distance."}},

    {type:"fb", s:"しゃちょうは{1}ますか？\n(Is the president in?)", a:"いらっしゃい", opts:["いらっしゃい","おり","い","おいでになり"], sSrc:"Is the president in?",
     hint:"The respectful form of いる, used when asking about someone of high status."},

    {type:"teach", trg:"くる / まいる / いらっしゃる", src:"to come (plain / humble / respectful)", pos:"verb", gender:null,
     note:"Three levels of coming.\nくる = neutral. まいる = humble. いらっしゃる = respectful.\nいらっしゃる covers both 'be' and 'come.'",
     example:"A: なんじにいらっしゃいますか？\nB: ごぜんじゅうじにまいります。",
     exampleSrc:"A: What time will you come? (respectful)\nB: I will come at 10 AM. (humble)",
     funFact:"いらっしゃる is a triple-duty verb: it is the respectful form of いる (be), いく (go), AND くる (come). Context determines which meaning applies. This efficiency creates ambiguity that Japanese speakers navigate through context. なんじにいらっしゃいますか could mean 'When will you be here?' or 'When will you come?' depending on the situation."},

    {type:"teach", trg:"しる / ぞんじる", src:"to know (plain / humble formal)", pos:"verb", gender:null,
     note:"しっています = I know (polite). ぞんじております = I know (humble).\nぞんじません = I do not know (humble).",
     example:"A: このけんについてごぞんじですか？\nB: はい、ぞんじております。",
     exampleSrc:"A: Do you know about this matter? (respectful)\nB: Yes, I am aware. (humble)",
     funFact:"ぞんじる (存じる) is the humble form of しる (know). The respectful form asking someone else is ごぞんじ (ご存知). This pair is tricky because the honorific prefix ご stays when asking others, but drops when talking about yourself. ぞんじません (I don't know, humble) is the polite alternative to the blunt しりません."},

    {type:"mc", q:"When talking about your own boss to an outside client, you should use:", opts:["Respectful forms (いらっしゃる, おっしゃる) for your boss","Casual forms (いる, いう) for your boss","Humble forms (おる, もうす) for your boss","Ultra-polite forms for your boss"], ans:"Humble forms (おる, もうす) for your boss",
     hint:"In-group members are humbled when speaking to out-group people, regardless of rank."},

    {type:"teach", trg:"タメぐち", src:"casual/informal speech (among equals)", pos:"noun", gender:null,
     note:"タメ (equal) + くち (mouth/speech).\nタメぐちでいい？ = Is it OK to speak casually?",
     example:"A: もうタメぐちでいいよ。\nB: じゃ、そうするね。",
     exampleSrc:"A: You can speak casually to me now.\nB: OK, I will do that.",
     funFact:"タメ comes from dice games where a tie is タメ (equal). タメぐち is speech between equals: no keigo, no です/ます. The shift from polite to タメぐち is a social milestone in Japanese relationships. Being offered タメぐち means the other person considers you a friend, not just an acquaintance. Some people never switch."},

    {type:"fb", s:"ごぜんじゅうじに{1}。\n(I will come at 10 AM.)", a:"まいります", opts:["まいります","いらっしゃいます","きます","おこしになります"], sSrc:"I will come at 10 AM.",
     hint:"The humble form of くる, used when describing your own action of going or coming."},

    {type:"match", pairs:[{trg:"かしこまりました",src:"understood (ultra-polite)"},{trg:"おそれいります",src:"I am sorry to trouble you"},{trg:"めしあがる",src:"to eat (respectful)"},{trg:"いただく",src:"to eat (humble)"}]},

    {type:"mc", q:"タメぐち means:", opts:["Casual speech used between equals or close friends","Formal business language","Written academic style","Polite speech for strangers"], ans:"Casual speech used between equals or close friends",
     hint:"タメ means equal, and ぐち means mouth/s...: the way e... talk."},

    {type:"match", pairs:[{trg:"いらっしゃる",src:"to be/come (respectful)"},{trg:"おる",src:"to be (humble)"},{trg:"まいる",src:"to come (humble)"},{trg:"ぞんじる",src:"to know (humble)"}]},
  ]
};
export default LESSON_5;
