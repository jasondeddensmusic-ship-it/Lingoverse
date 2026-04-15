// Unit 20 Expansion. Lesson 3: でんわのけいご (Keigo on the Phone)
const LESSON_3 = {
  id:"jav2_u20l3", title:"でんわのけいご", icon:"📞", xp:15, board:true,
  steps:[
    {type:"intro", title:"でんわのけいご",
     desc:"Phone calls in Japanese business are a keigo minefield. You must switch instantly between honorific (for the caller) and humble (for your own side). Master the set phrases for answering, transferring, and taking messages on the phone.",
     goals:["Use standard business phone greetings and closings","Transfer calls using keigo set phrases","Take messages with humble and honorific forms correctly"]},

    {type:"teach", trg:"おでんわありがとうございます", src:"thank you for calling", pos:"intj", gender:null,
     note:"Standard business phone greeting when answering.\nお (honorific prefix) + でんわ (phone call) + ありがとうございます.",
     example:"A: おでんわありがとうございます。ABCしょうじでございます。\nB: おせわになっております。やまだともうしますが。",
     exampleSrc:"A: Thank you for calling. This is ABC Trading.\nB: Thank you for your continued support. My name is Yamada.",
     funFact:"This opening line is drilled into every Japanese office worker. The full formula is: おでんわありがとうございます + company name + でございます. Answering within 3 rings is expected. If you are late, you add おまたせいたしました (I humbly apologize for making you wait) before the greeting."},

    {type:"teach", trg:"おせわになっております", src:"thank you for your support (business greeting)", pos:"intj", gender:null,
     note:"Set phrase meaning 'we are in your care.' Used at the start of business calls.\nおせわ (care) + になっております (humble continuous).",
     example:"A: いつもおせわになっております。\nB: こちらこそおせわになっております。",
     exampleSrc:"A: Thank you always for your support.\nB: Likewise, thank you for your support.",
     funFact:"おせわになっております is Japan's most important business greeting. It acknowledges the ongoing business relationship. Even if you have never met the person, you say this because your companies have a relationship. Both sides say it, creating a mutual acknowledgment of interdependence."},

    {type:"teach", trg:"しょうしょうおまちください", src:"please wait a moment (very polite)", pos:"intj", gender:null,
     note:"しょうしょう (a little, formal) + おまちください (please wait).\nKanji: 少々お待ちください.",
     example:"A: たなかをおねがいします。\nB: しょうしょうおまちください。",
     exampleSrc:"A: May I speak with Tanaka?\nB: Please wait a moment.",
     funFact:"少々お待ちください is the formal phone hold phrase. しょうしょう (a little) is more formal than ちょっと. This phrase is so standard that it is essentially automatic. Every receptionist, shop clerk, and office worker uses it dozens of times daily. Holding music (保留音, horyuuon) plays while you wait."},

    {type:"teach", trg:"おつなぎします", src:"I will connect/transfer you (humble)", pos:"verb", gender:null,
     note:"お + つなぎ (connecting) + します (humble pattern).\nFrom つなぐ (to connect). Kanji: お繋ぎします.",
     example:"A: えいぎょうぶにおつなぎします。\nB: おねがいします。",
     exampleSrc:"A: I will transfer you to the sales department.\nB: Please do.",
     funFact:"おつなぎします uses the humble お + stem + する pattern for transferring calls. つなぐ means 'to connect/link.' Phone transfers are common in Japanese companies where calls go through a central receptionist before reaching the right person. This humble form shows respect to the caller."},

    {type:"mc", q:"おでんわありがとうございます is used:", opts:["When ending a call","When answering a business phone call","When making a personal call","When leaving a voicemail"], ans:"When answering a business phone call",
     hint:"This is the standard opening phrase when you pick up a b... telephone c...."},

    {type:"teach", trg:"あいにく", src:"unfortunately / I am sorry but", pos:"adv", gender:null,
     note:"Used to introduce bad news politely. Softens the blow.\nあいにくせきをはずしております = unfortunately, they are away.",
     example:"A: やまださんはいらっしゃいますか？\nB: あいにくせきをはずしております。",
     exampleSrc:"A: Is Mr. Yamada there?\nB: Unfortunately, he is away from his seat.",
     funFact:"あいにく (unfortunately) is the politeness cushion of Japanese phone calls. Before delivering any bad news (person is out, meeting is full, schedule does not work), Japanese speakers soften with あいにく. It prepares the listener for disappointing information and shows the speaker's regret."},

    {type:"teach", trg:"せきをはずす", src:"to be away from one's seat/desk", pos:"verb", gender:null,
     note:"せき (seat) + をはずす (to step away from).\nKanji: 席を外す. Standard phone phrase for 'not at their desk.'",
     example:"A: すずきはただいませきをはずしております。\nB: いつもどりますか？",
     exampleSrc:"A: Suzuki is currently away from their desk.\nB: When will they return?",
     funFact:"席を外す is the polite way to say someone is not at their desk without specifying where they went. It could mean a bathroom break, a meeting, or stepping out for lunch. The vagueness is intentional. Japanese business communication avoids unnecessary detail about colleagues' whereabouts."},

    {type:"teach", trg:"でんごんをおねがいできますか", src:"may I leave a message?", pos:"intj", gender:null,
     note:"でんごん (message) + をおねがいできますか (could I request?).\nKanji: 伝言. Polite message-leaving formula.",
     example:"A: でんごんをおねがいできますか？\nB: はい、どうぞ。",
     exampleSrc:"A: May I leave a message?\nB: Yes, please go ahead.",
     funFact:"伝言 combines 伝 (convey) and 言 (word). Leaving messages (dengon) is still common in Japanese offices despite email. The phrase おねがいできますか (could I ask?) is more polite than おねがいします because it frames the request as a question, giving the listener the option to decline."},

    {type:"fb", s:"あいにく{1}をはずしております。\n(Unfortunately, they are away from their seat.)", a:"せき", opts:["せき","かいぎ","でんわ","おきゃく"], sSrc:"Unfortunately, they are away from their seat.",
     hint:"The word for 'seat' or 'desk' in the set phrase meaning someone has stepped away."},

    {type:"teach", trg:"おりかえし", src:"returning (a call) / callback", pos:"noun", gender:null,
     note:"おりかえしでんわする = to call back.\nKanji: 折り返し. 折 (fold) + 返し (return).",
     example:"A: おりかえしおでんわいただけますか？\nB: はい、もどりましたられんらくいたします。",
     exampleSrc:"A: Could you have them call me back?\nB: Yes, I will have them contact you when they return.",
     funFact:"折り返し literally means 'fold back,' like folding a letter to return it. In phone culture, おりかえし is the standard callback system. When someone is unavailable, the caller can request おりかえし. The receptionist writes the message and the person calls back. This system persists even with voicemail and email."},

    {type:"teach", trg:"もどる", src:"to return / to come back", pos:"verb", gender:null,
     note:"Group 1 verb. もどりましたら = when they return.\nKanji: 戻る. Intransitive (the person returns).",
     example:"A: たなかはなんじにもどりますか？\nB: 3じごろもどるよていです。",
     exampleSrc:"A: What time will Tanaka return?\nB: They are expected to return around 3 o'clock.",
     funFact:"戻る is the standard 'return' verb for people coming back to a location. In phone contexts, もどりましたら (when they return) triggers the callback system. The transitive pair もどす (to return/put back an object) is also common. Japanese verbs frequently come in intransitive/transitive pairs like this."},

    {type:"mc", q:"しょうしょうおまちください is used when:", opts:["Ending a conversation","Asking someone to hold on the phone","Refusing a request","Introducing yourself"], ans:"Asking someone to hold on the phone",
     hint:"This very polite set phrase asks the caller to wait briefly while you transfer or find s...."},

    {type:"tip", title:"Business Phone Call Flow",
     text:"Answering:\nおでんわありがとうございます。[company]でございます。\n\nGreeting:\nおせわになっております。\n\nTransferring:\nしょうしょうおまちください。おつなぎします。\n\nPerson unavailable:\nあいにくせきをはずしております。\n\nOffering callback:\nもどりましたらおりかえしれんらくいたします。\n\nTaking a message:\nでんごんをおつたえいたします。\n\nClosing:\nしつれいいたします。(I will be rude = goodbye, humble)",
     deepDive:{title:"In-Group/Out-Group on Phone Calls",
      text:"Phone calls are where uchi-soto rules matter most:\n\nWhen an outsider asks about YOUR colleague:\nUse HUMBLE for your colleague, even your boss.\nたなかはせきをはずしております。(Tanaka is away. Humble おる for your side.)\nNOT: たなかさんはいらっしゃいません。(Wrong: honorific for your own person.)\n\nWhen talking about the CALLER's people:\nUse HONORIFIC.\nそちらのしゃちょうはいらっしゃいますか？ (Is your president available? Honorific.)\n\nThis is the hardest part of keigo: humble-fying your own boss when talking to outsiders. It feels wrong, but it is correct."}},

    {type:"match", pairs:[{trg:"おでんわありがとうございます",src:"thank you for calling"},{trg:"おせわになっております",src:"thank you for your support"},{trg:"しょうしょうおまちください",src:"please wait a moment"},{trg:"おつなぎします",src:"I will transfer you"}]},

    {type:"fb", s:"もどりましたら{1}れんらくいたします。\n(I will have them call you back when they return.)", a:"おりかえし", opts:["おりかえし","おでんわ","でんごん","おへんじ"], sSrc:"I will have them call you back when they return.",
     hint:"The word meaning 'callback' or 'returning (a call).' Literally: fold back."},

    {type:"match", pairs:[{trg:"あいにく",src:"unfortunately"},{trg:"せきをはずす",src:"to be away from seat"},{trg:"でんごん",src:"message"},{trg:"おりかえし",src:"callback"}]},

    {type:"mc", q:"When an outsider asks about your boss, you say:", opts:["しゃちょうはいらっしゃいません (honorific)","しゃちょうはおりません (humble)","しゃちょうはいません (neutral)","しゃちょうさまはおでかけです (super-honorific)"], ans:"しゃちょうはおりません (humble)",
     hint:"Uchi-soto rule: when speaking to outsiders, h... your own people, even your boss."},
  ]
};
export default LESSON_3;
