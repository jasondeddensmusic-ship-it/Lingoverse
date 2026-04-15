// Unit 01 Expansion L05 — Meeting People & Introductions
const LESSON_5 = {
  id:"jav2_u1l5", title:"しょうかい", icon:"🤝", xp:15, board:true,
  steps:[
    {type:"intro", title:"しょうかい",
     desc:"Learn how to introduce yourself and others at social events, business settings, and casual gatherings. Japanese introductions follow specific patterns depending on formality.",
     goals:["Introduce yourself in formal and casual settings","Introduce a third person to someone","Use appropriate titles and name suffixes"]},

    {type:"teach", trg:"しょうかい", src:"introduction", pos:"noun", gender:null,
     note:"Used when introducing people to each other. Pattern: AをBにしょうかいする.\nKanji: 紹介.",
     example:"A: ともだちをしょうかいします。リサさんです。\nB: はじめまして。リサです。",
     exampleSrc:"A: Let me introduce my friend. This is Lisa.\nB: Nice to meet you. I'm Lisa.",
     funFact:"紹 (connect) + 介 (mediate). An introduction literally means 'connecting through a mediator.' In Japan, being properly introduced by a mutual contact carries far more social weight than introducing yourself directly."},

    {type:"teach", trg:"さん", src:"-san (polite name suffix)", pos:"part", gender:null,
     note:"The universal polite suffix. Attach to family names or first names.\nNever use on yourself.",
     example:"A: たなかさん、おはようございます。\nB: おはようございます、スミスさん。",
     exampleSrc:"A: Good morning, Mr./Ms. Tanaka.\nB: Good morning, Mr./Ms. Smith.",
     funFact:"San is gender-neutral. It covers Mr., Ms., Mrs., and Miss all in one. Calling someone by their name without san is either very intimate or very rude. Even married couples sometimes use san with each other."},

    {type:"teach", trg:"くん", src:"-kun (suffix for boys/juniors)", pos:"part", gender:null,
     note:"Used for boys, young men, or male juniors at work. Sometimes used for girls in school settings.",
     example:"A: やまだくん、きょうのしゅくだいは？\nB: まだおわっていません。",
     exampleSrc:"A: Yamada-kun, how about today's homework?\nB: I haven't finished it yet.",
     funFact:"Kun was originally used only for males but has expanded. Female politicians in the Japanese Diet are addressed as -kun by the speaker. Some workplaces use -kun for all junior employees regardless of gender."},

    {type:"teach", trg:"ちゃん", src:"-chan (cute/familiar suffix)", pos:"part", gender:null,
     note:"Affectionate suffix for children, close friends, and cute things.\nUsing it with strangers is rude.",
     example:"A: みきちゃん、あそびにいこう！\nB: うん！いこういこう！",
     exampleSrc:"A: Miki-chan, let's go play!\nB: Yeah! Let's go!",
     funFact:"Chan originated as a baby's mispronunciation of san. It became its own suffix expressing affection. It works on first names (Yuki-chan), nicknames (Yuk-chan), and even objects (neko-chan, kitty). Baa-chan (grandma) and jii-chan (grandpa) are beloved family terms."},

    {type:"mc", q:"Which suffix should you NEVER use on your own name?", opts:["くん","ちゃん","さん","All of them"], ans:"さん",
     hint:"This polite suffix is for others only. Using it on yourself sounds arrogant."},

    {type:"teach", trg:"さま", src:"-sama (very respectful suffix)", pos:"part", gender:null,
     note:"Highest level of respect. Used for customers, gods, royalty.\nKanji: 様.",
     example:"A: おきゃくさま、こちらへどうぞ。\nB: ありがとうございます。",
     exampleSrc:"A: Dear customer, please come this way.\nB: Thank you.",
     funFact:"Sama is the super-polite version of san. Stores address customers as okyaku-sama. Letters and emails use -sama for the recipient. Kami-sama (god) and ou-sama (king) use it as part of the title. Using it for a friend would be sarcastic."},

    {type:"teach", trg:"どうぞよろしく", src:"nice to meet you (casual)", pos:"intj", gender:null,
     note:"Shorter, more casual version of yoroshiku onegai shimasu.\nUsed among people of similar age or status.",
     example:"A: はじめまして。ケンです。どうぞよろしく。\nB: こちらこそ、よろしく。",
     exampleSrc:"A: Nice to meet you. I'm Ken. Nice to meet you.\nB: Likewise, nice to meet you.",
     funFact:"The full hierarchy of this phrase goes: yoroshiku (most casual) to douzo yoroshiku (casual polite) to yoroshiku onegai shimasu (standard polite) to douzo yoroshiku onegai itashimasu (most formal). Choose your level based on the situation."},

    {type:"teach", trg:"こちらこそ", src:"likewise / same to you", pos:"intj", gender:null,
     note:"Polite response meaning 'it is I who should say that.' Used after receiving a greeting or thanks.",
     example:"A: よろしくおねがいします。\nB: こちらこそ、よろしくおねがいします。",
     exampleSrc:"A: Please treat me well.\nB: Likewise, please treat me well.",
     funFact:"Kochira (this side/direction, meaning 'I/we') + koso (emphasis particle). It deflects the courtesy back: 'No, it is WE who should be saying that.' This back-and-forth of humility is a core feature of Japanese politeness."},

    {type:"fb", s:"しょうかいのあと、___おねがいします。",
     a:["よろしく"],
     opts:["よろしく","ありがとう","すみません","さようなら"],
     hint:"The phrase that expresses hope for a good relationship, always used after introducing yourself.",
     sSrc:"After an introduction, {1} onegai shimasu."},

    {type:"teach", trg:"めいし", src:"business card", pos:"noun", gender:null,
     note:"Exchanging business cards is a formal ritual in Japanese business culture.\nKanji: 名刺.",
     example:"A: めいしをどうぞ。\nB: ありがとうございます。わたしのめいしです。",
     exampleSrc:"A: Here is my business card.\nB: Thank you. Here is my business card.",
     funFact:"Business card exchange (meishi koukan) has strict rules: hold with both hands, bow slightly, read it carefully, never write on it, never put it in your back pocket. Disrespecting a meishi is like disrespecting the person themselves."},

    {type:"teach", trg:"しゅみ", src:"hobby", pos:"noun", gender:null,
     note:"Common self-introduction topic. Pattern: しゅみは X です.\nKanji: 趣味.",
     example:"A: しゅみはなんですか？\nB: どくしょです。",
     exampleSrc:"A: What is your hobby?\nB: Reading.",
     funFact:"Asking about hobbies is a standard part of Japanese self-introductions, especially in group settings like school clubs or new jobs. Common answers: dokusho (reading), ryouri (cooking), ryokou (travel), undou (exercise)."},

    {type:"teach", trg:"どくしょ", src:"reading (as a hobby)", pos:"noun", gender:null,
     note:"Compound: 読 (read) + 書 (write/book). The most commonly stated hobby in Japan.\nKanji: 読書.",
     example:"A: しゅみはなんですか？\nB: どくしょがすきです。まんがもよみます。",
     exampleSrc:"A: What are your hobbies?\nB: I like reading. I also read manga.",
     funFact:"Dokusho is the most popular answer to 'what is your hobby?' in Japanese surveys year after year. Japan publishes more books per capita than almost any country. Train commuters reading books is an iconic image of Japanese daily life."},

    {type:"teach", trg:"りょこう", src:"travel / trip", pos:"noun", gender:null,
     note:"A very popular hobby and conversation topic. Kanji: 旅行.\nAlso means a specific trip: にほんりょこう (Japan trip).",
     example:"A: しゅみはりょこうです。\nB: どこにいきましたか？",
     exampleSrc:"A: My hobby is traveling.\nB: Where have you been?",
     funFact:"旅 (travel) + 行 (go). Japanese people are passionate travelers. Golden Week (early May) and Obon (mid-August) see massive domestic travel. The shinkansen (bullet train) was built largely to handle this travel demand."},

    {type:"mc", q:"めいし means:", opts:["greeting","hobby","business card","introduction"], ans:"business card",
     hint:"A small card exchanged formally in Japanese business settings."},

    {type:"teach", trg:"おしごとはなんですか", src:"what is your job?", pos:"intj", gender:null,
     note:"Polite way to ask someone's occupation. The お makes shigoto more respectful.",
     example:"A: おしごとはなんですか？\nB: きょうしです。",
     exampleSrc:"A: What is your job?\nB: I am a teacher.",
     funFact:"In Japan, your job is a key part of your social identity. Business introductions almost always include company name and position. At parties, people often ask shigoto wa? (your work?) early in conversation to calibrate politeness level."},

    {type:"match", pairs:[
      {trg:"さん", src:"polite name suffix"},
      {trg:"くん", src:"suffix for boys/juniors"},
      {trg:"ちゃん", src:"cute/familiar suffix"},
      {trg:"さま", src:"very respectful suffix"}
    ]},

    {type:"match", pairs:[
      {trg:"しょうかい", src:"introduction"},
      {trg:"めいし", src:"business card"},
      {trg:"しゅみ", src:"hobby"},
      {trg:"りょこう", src:"travel"}
    ]},

    {type:"fb", s:"おきゃく___、こちらへどうぞ。",
     a:["さま"],
     opts:["さま","さん","くん","ちゃん"],
     hint:"The most respectful name suffix, used for customers and honored guests.",
     sSrc:"Dear customer, please come this way."},

    {type:"mc", q:"こちらこそ means:", opts:["Thank you","Goodbye","Likewise / same to you","I understand"], ans:"Likewise / same to you",
     hint:"This redirects a courtesy back to the speaker, meaning 'it is I who should say that.'"},

    {type:"mc", q:"Which is the correct formality order (casual to formal)?", opts:["さん → くん → さま","ちゃん → さん → さま","さま → さん → ちゃん","くん → さま → さん"], ans:"ちゃん → さん → さま",
     hint:"From affectionate/casual through standard polite to highest respect."},

    {type:"mc", q:"しゅみはなんですか means:", opts:["What is your name?","What is your hobby?","What is your job?","Where are you from?"], ans:"What is your hobby?",
     hint:"Shumi is the word for personal interests or pastimes."},
  ]
};
export default LESSON_5;
