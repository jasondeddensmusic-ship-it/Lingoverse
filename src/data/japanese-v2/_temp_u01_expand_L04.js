// Unit 01 Expansion L06. Parting Phrases & Farewells
const LESSON_6 = {
  id:"jav2_u1l6", title:"わかれのことば", icon:"👋", xp:15, board:true,
  steps:[
    {type:"intro", title:"わかれのことば",
     desc:"Learn the many ways to say goodbye in Japanese. From casual see-you-laters to formal farewells, Japanese has a parting phrase for every situation.",
     goals:["Use casual and formal farewell expressions","Choose the right goodbye for the situation","Combine farewells with well-wishes"]},

    {type:"teach", trg:"またね", src:"see you later (casual)", pos:"intj", gender:null,
     note:"Casual goodbye among friends. Mata = again, ne = right? / agreement particle.",
     example:"A: じゃ、またね！\nB: うん、またね！",
     exampleSrc:"A: Well, see you later!\nB: Yeah, see you!",
     funFact:"Mata ne is far more common than sayounara in daily life. Sayounara sounds too final for friends. Japanese people end casual goodbyes with mata ne, mata ashita (see you tomorrow), or just mata (again)."},

    {type:"teach", trg:"じゃあね", src:"well then, bye (casual)", pos:"intj", gender:null,
     note:"Very casual. Ja = well then, ne = agreement. One of the most common casual goodbyes.",
     example:"A: じゃあね、きをつけてね。\nB: うん、じゃあね！",
     exampleSrc:"A: Well then, bye. Be careful.\nB: Yeah, see you!",
     funFact:"Ja is a contraction of de wa (well then). The casual chain goes: dewa (formal) to ja (casual) to ja ne (friendly) to ja (ultra-casual). Adding ne softens it. Without ne, ja alone sounds slightly abrupt."},

    {type:"teach", trg:"またあした", src:"see you tomorrow", pos:"intj", gender:null,
     note:"Used when you know you will see someone the next day. Very common among classmates and coworkers.",
     example:"A: おつかれさま。またあした！\nB: またあした。おやすみ。",
     exampleSrc:"A: Thanks for your hard work. See you tomorrow!\nB: See you tomorrow. Good night.",
     funFact:"Mata (again) + ashita (tomorrow). This is the standard school goodbye. Kids shout 'mata ashita!' as they leave class. The implied promise of tomorrow makes it optimistic and warm."},

    {type:"teach", trg:"きをつけて", src:"be careful / take care", pos:"intj", gender:null,
     note:"Said to someone leaving. Shows concern for their safety.\nKanji: 気をつけて.",
     example:"A: じゃ、いってきます。\nB: きをつけてね！",
     exampleSrc:"A: Well, I'm heading out.\nB: Take care!",
     funFact:"気 (ki, spirit/mind) + をつけて (wo tsukete, attach/apply). Literally 'apply your mind' or 'stay alert.' Japanese parents say this to children leaving for school every morning. It expresses care without being overbearing."},

    {type:"mc", q:"またね is more common than さようなら because:", opts:["It is more polite","It sounds less final","It is newer","It is shorter"], ans:"It sounds less final",
     hint:"Sayounara implies a long or permanent separation that feels too heavy for daily use."},

    {type:"teach", trg:"バイバイ", src:"bye-bye", pos:"intj", gender:null,
     note:"Borrowed from English. Popular with children and young women.\nWritten in katakana.",
     example:"A: じゃあ、バイバイ！\nB: バイバイ！またね！",
     exampleSrc:"A: Well, bye-bye!\nB: Bye-bye! See you!",
     funFact:"Baibai entered Japanese from American English after World War II. It is considered cute and is used mostly by children, young women, and in casual text messages. Adult men rarely use it except with small children."},

    {type:"teach", trg:"おだいじに", src:"take care (health-related)", pos:"intj", gender:null,
     note:"Said to someone who is sick or going to the doctor.\nKanji: お大事に.",
     example:"A: かぜをひきました。\nB: おだいじに。ゆっくりやすんでください。",
     exampleSrc:"A: I caught a cold.\nB: Take care. Please rest well.",
     funFact:"大事 (daiji) means 'important/serious.' Odaiji ni literally means 'treat it as important.' Doctors and nurses always say this to patients leaving. It is the standard health-related farewell in Japan."},

    {type:"teach", trg:"がんばってください", src:"please do your best / good luck", pos:"intj", gender:null,
     note:"Encouragement before someone faces a challenge. Casual: がんばって.\nKanji: 頑張ってください.",
     example:"A: あしたしけんです。\nB: がんばってください！",
     exampleSrc:"A: I have an exam tomorrow.\nB: Do your best!",
     funFact:"Ganbaru (to persist/endure) is a core Japanese value. Ganbatte is said before exams, sports games, work projects, and any challenge. Some critics note it can pressure people to overwork. Still, it remains one of the most encouraging things you can say."},

    {type:"fb", s:"びょうきのひとに、{1}と言います。",
     a:["おだいじに"],
     opts:["おだいじに","がんばって","きをつけて","おめでとう"],
     hint:"The farewell specifically for someone who is unwell, wishing them good health.",
     sSrc:"To a sick person, you say {1}."},

    {type:"teach", trg:"おやすみ", src:"good night (casual)", pos:"intj", gender:null,
     note:"Casual form of おやすみなさい. Used with family and close friends.",
     example:"A: もうねるね。おやすみ。\nB: おやすみ。いいゆめを。",
     exampleSrc:"A: I'm going to sleep now. Good night.\nB: Good night. Sweet dreams.",
     funFact:"Dropping nasai makes it casual. Oyasumi is the standard family bedtime goodbye. In shared housing (sharehouse) and dormitories, saying oyasumi to housemates as you retire for the night is a comforting routine."},

    {type:"teach", trg:"おげんきで", src:"stay well / take care (long goodbye)", pos:"intj", gender:null,
     note:"Said when you will not see someone for a long time. More emotional than ki wo tsukete.\nKanji: お元気で.",
     example:"A: いよいよあしたアメリカにかえります。\nB: おげんきで。またあえるといいですね。",
     exampleSrc:"A: I'm finally going back to America tomorrow.\nB: Take care. I hope we can meet again.",
     funFact:"Genki (health/energy) + de (in a state of). Literally 'be in a state of health.' This farewell carries emotional weight because it implies a long separation. It is often said with tears at airport goodbyes and graduation ceremonies."},

    {type:"teach", trg:"おせわになりました", src:"thank you for everything you've done", pos:"intj", gender:null,
     note:"Said when leaving a job, moving away, or ending a relationship.\nKanji: お世話になりました.",
     example:"A: きょうでさいごです。おせわになりました。\nB: こちらこそ。おげんきで。",
     exampleSrc:"A: Today is my last day. Thank you for everything.\nB: Likewise. Take care.",
     funFact:"世話 (sewa) means care/assistance. This phrase acknowledges all the help someone gave you. At a farewell party (sobetsukai), the departing person always says osewa ni narimashita. It is one of the most emotionally charged expressions in Japanese."},

    {type:"teach", trg:"よいおとしを", src:"have a good New Year", pos:"intj", gender:null,
     note:"Said in late December before New Year. Only used before January 1.\nKanji: 良いお年を.",
     example:"A: じゃ、よいおとしを！\nB: よいおとしを！またらいねん！",
     exampleSrc:"A: Well, have a good New Year!\nB: Have a good New Year! See you next year!",
     funFact:"This is the December-only farewell. From mid-December, Japanese people end every conversation with yoi otoshi wo. On January 1, it switches to akemashite omedetou. Using the wrong one at the wrong time is a social faux pas."},

    {type:"mc", q:"がんばってください is said:", opts:["After someone succeeds","Before a challenge","When someone is sick","At New Year"], ans:"Before a challenge",
     hint:"This encourages someone to persist and do their best at an upcoming task."},

    {type:"teach", trg:"それでは", src:"well then (formal farewell opener)", pos:"intj", gender:null,
     note:"Formal way to signal you are about to leave. More polite than じゃあ.\nKanji: それでは.",
     example:"A: それでは、しつれいします。\nB: おつかれさまでした。",
     exampleSrc:"A: Well then, excuse me (I'll be going).\nB: Thank you for your hard work.",
     funFact:"Sore de wa (if that is the case) is the formal version of ja. In emails and speeches, sore dewa is the standard transition to the closing. It signals respect and proper form."},

    {type:"teach", trg:"しつれいします", src:"excuse me (for leaving / entering)", pos:"intj", gender:null,
     note:"Used when leaving someone's presence or entering a room.\nKanji: 失礼します.",
     example:"A: しつれいします。おさきにどうぞ。\nB: ありがとうございます。",
     exampleSrc:"A: Excuse me. Please go ahead.\nB: Thank you.",
     funFact:"失礼 means 'rudeness.' You are literally saying 'I will commit a rudeness' by entering or leaving. This beautiful self-deprecation is core to Japanese politeness. Shitsurei shimashita (past tense) means 'I was rude' as an apology."},

    {type:"match", pairs:[
      {trg:"またね", src:"See you later"},
      {trg:"じゃあね", src:"Well then, bye"},
      {trg:"またあした", src:"See you tomorrow"},
      {trg:"バイバイ", src:"Bye-bye"}
    ]},

    {type:"match", pairs:[
      {trg:"きをつけて", src:"Be careful"},
      {trg:"おだいじに", src:"Take care (health)"},
      {trg:"がんばってください", src:"Do your best"},
      {trg:"おげんきで", src:"Stay well"}
    ]},

    {type:"fb", s:"12月に言う特別なあいさつは{1}です。",
     a:["よいおとしを"],
     opts:["よいおとしを","あけましておめでとう","おげんきで","さようなら"],
     hint:"The seasonal farewell used exclusively in late December before the new year arrives.",
     sSrc:"The special December greeting is {1}."},

    {type:"mc", q:"おせわになりました is used when:", opts:["Meeting someone new","Leaving a job or relationship","Ordering food","Answering the phone"], ans:"Leaving a job or relationship",
     hint:"This phrase thanks someone for all their care and assistance over time."},

    {type:"mc", q:"しつれいします literally means:", opts:["I will be rude","I am sorry","Thank you","Goodbye"], ans:"I will be rude",
     hint:"The phrase acknowledges the 'rudeness' of entering or leaving someone's space."},

    {type:"mc", q:"Which farewell is best when someone has a cold?", opts:["がんばって","おだいじに","きをつけて","おげんきで"], ans:"おだいじに",
     hint:"The health-specific farewell used by doctors, nurses, and caring friends."},
  ]
};
export default LESSON_6;
