// Japanese V2 Unit 01. Greetings & Basics (A1.1)
import BATCH3_L1 from './_batch3_u01_L01.js';
// First Japanese content unit. JLPT N5 aligned.
import JEXP_01_L1 from './_temp_u01_expand_L01.js';import JEXP_01_L2 from './_temp_u01_expand_L02.js';import JEXP_01_L3 from './_temp_u01_expand_L03.js';import JEXP_01_L4 from './_temp_u01_expand_L04.js';

const UNIT_01 = {
  n:1, lang:"ja", srcLang:"en", track:"v2",
  title:"はじめまして", sub:"Greetings & Self-Introduction",
  icon:"🗾", level:"A1.1", color:"#7B5EE8",
  lessons:[
    {id:"jav2_u1l1", title:"あいさつ", icon:"👋", xp:15, board:true, steps:[
      {type:"intro", title:"あいさつ",
       desc:"Learn the essential Japanese greetings for different times of day and social situations.",
       goals:["Greet people at different times of day","Use basic polite expressions","Understand formality levels"]},

      {type:"teach", trg:"こんにちは", src:"hello / good afternoon", pos:"intj", gender:null,
       note:"The most common Japanese greeting. Used roughly 10 AM to 6 PM.",
       example:"A: こんにちは！\nB: こんにちは！お元気ですか？",
       exampleSrc:"A: Hello!\nB: Hello! How are you?",
       funFact:"Literally means 'as for this day' from the old phrase 'konnichi wa gokigen ikaga desu ka' (how is your mood today?). Only the first part survived."},

      {type:"teach", trg:"おはようございます", src:"good morning (polite)", pos:"intj", gender:null,
       note:"Polite morning greeting. Casual version: おはよう (ohayou).\nUsed until about 10 AM.",
       example:"A: おはようございます、先生！\nB: おはようございます。今日もがんばりましょう。",
       exampleSrc:"A: Good morning, teacher!\nB: Good morning. Let's do our best today too.",
       funFact:"Comes from 'hayai' (early). Literally 'it is early.' In the entertainment industry, actors say ohayou gozaimasu at any hour when starting work, even at night."},

      {type:"teach", trg:"こんばんは", src:"good evening", pos:"intj", gender:null,
       note:"Evening greeting. Used after dark, roughly from 6 PM.",
       example:"A: こんばんは。いい天気ですね。\nB: そうですね。星がきれいです。",
       exampleSrc:"A: Good evening. Nice weather, isn't it?\nB: Yes, it is. The stars are beautiful.",
       funFact:"Like konnichiwa, this is a fragment of a longer phrase: 'konban wa gokigen ikaga desu ka.' The 'wa' is the topic particle written with は, not わ."},

      {type:"teach", trg:"おやすみなさい", src:"good night", pos:"intj", gender:null,
       note:"Said when going to bed or parting late at night.\nCasual: おやすみ (oyasumi).",
       example:"A: もう遅いですね。おやすみなさい。\nB: おやすみなさい。また明日！",
       exampleSrc:"A: It's late already. Good night.\nB: Good night. See you tomorrow!",
       funFact:"Literally means 'please rest.' The verb yasumu means to rest. Adding nasai makes it a gentle command, like a parent telling a child to rest well."},

      {type:"teach", trg:"さようなら", src:"goodbye", pos:"intj", gender:null,
       note:"Formal goodbye. Implies you won't see the person for a while.\nFor casual partings, use じゃあね or またね.",
       example:"A: 今日はありがとうございました。\nB: こちらこそ。さようなら！",
       exampleSrc:"A: Thank you for today.\nB: Likewise. Goodbye!",
       funFact:"Means 'if that is so' or 'well then.' It carries a sense of finality. Japanese people rarely use it with close friends, preferring mata ne (see you) or ja ne (well then)."},

      {type:"teach", trg:"ありがとうございます", src:"thank you (polite)", pos:"intj", gender:null,
       note:"Polite thank you. Casual: ありがとう (arigatou).\nThe most important polite phrase.",
       example:"A: どうぞ、お茶です。\nB: ありがとうございます！",
       exampleSrc:"A: Here you go, tea.\nB: Thank you very much!",
       funFact:"From 'arigatai' meaning 'rare/precious.' Thanking someone literally means telling them their kindness is a rare and precious thing. The kanji is 有難う (difficult to exist)."},

      {type:"teach", trg:"すみません", src:"excuse me / sorry", pos:"intj", gender:null,
       note:"Versatile: apology, getting attention, or expressing gratitude through humility.\nMore formal than ごめんなさい.",
       example:"A: すみません、駅はどこですか？\nB: あそこです。",
       exampleSrc:"A: Excuse me, where is the station?\nB: It's over there.",
       funFact:"Literally 'it does not end' (the feeling of indebtedness). Japanese culture values humility so deeply that you apologize (sumimasen) even when thanking someone for going out of their way."},

      {type:"teach", trg:"はい", src:"yes", pos:"part", gender:null,
       note:"Polite yes. Also used as 'I understand' or 'I'm listening.'\nCasual: うん (un).",
       example:"A: 日本語を勉強していますか？\nB: はい、勉強しています。",
       exampleSrc:"A: Are you studying Japanese?\nB: Yes, I am studying.",
       funFact:"Hai does not always mean agreement. In conversation, it often means 'I am listening' or 'I follow you.' Nodding with 'hai, hai' just means you are paying attention."},

      {type:"teach", trg:"いいえ", src:"no", pos:"part", gender:null,
       note:"Polite no. Often avoided in favor of softer expressions.\nCasual: ううん (uun).",
       example:"A: コーヒーはいかがですか？\nB: いいえ、結構です。お茶をお願いします。",
       exampleSrc:"A: Would you like coffee?\nB: No, I'm fine. Tea, please.",
       funFact:"Japanese people often avoid saying iie directly. They use softer forms like 'chotto...' (a little...) trailing off, or 'daijoubu desu' (I'm okay) to decline without the bluntness of 'no.'"},

      {type:"teach", trg:"お願いします", src:"please", pos:"verb", gender:null,
       note:"Polite request. Literally: I make a request.\nUsed when asking for something or placing an order.",
       example:"A: コーヒーをお願いします。\nB: はい、少々お待ちください。",
       exampleSrc:"A: Coffee, please.\nB: Yes, please wait a moment.",
       funFact:"Onegai shimasu comes from negau (to wish/pray). You are literally saying 'I humbly wish this of you.' In casual speech, just onegai is enough among friends."},

      {type:"teach", trg:"はじめまして", src:"nice to meet you", pos:"intj", gender:null,
       note:"Said when meeting someone for the FIRST time only.\nLiterally: for the first time.",
       example:"A: はじめまして。田中です。\nB: はじめまして。スミスです。よろしくお願いします。",
       exampleSrc:"A: Nice to meet you. I'm Tanaka.\nB: Nice to meet you. I'm Smith. Please be kind to me.",
       funFact:"Always followed by your name and then 'yoroshiku onegai shimasu' (please treat me well). This trio is the fixed self-introduction formula in Japan."},

      {type:"teach", trg:"よろしくお願いします", src:"please treat me well", pos:"verb", gender:null,
       note:"Essential phrase after introductions. No direct English equivalent.\nExpresses hope for a good relationship.",
       example:"A: はじめまして。リサです。よろしくお願いします。\nB: こちらこそ、よろしくお願いします。",
       exampleSrc:"A: Nice to meet you. I'm Lisa. Please treat me well.\nB: Likewise, please treat me well.",
       funFact:"This phrase has no real English translation. It expresses mutual goodwill and is used in introductions, starting jobs, beginning projects, and even in emails. Untranslatable but essential."},

      // Quiz steps
      {type:"mc", q:"朝のあいさつは何ですか？",
       opts:["おはようございます","こんにちは","こんばんは","おやすみなさい"],
       ans:"おはようございます",
       hint:"This greeting is used in the morning, roughly until 10 AM. It comes from the word for 'early.'"},

      {type:"mc", q:"'ありがとうございます' means:",
       opts:["Excuse me","Thank you","Goodbye","Good morning"],
       ans:"Thank you",
       hint:"This is the polite form of expressing gratitude. The casual version drops gozaimasu."},

      {type:"fb", s:"{1}、田中です。よろしくお願いします。",
       a:["はじめまして"],
       opts:["はじめまして","さようなら","すみません","こんにちは"],
       hint:"This phrase is only used when meeting someone for the FIRST time. It precedes your name in a self-introduction.",
       sSrc:"{1}. I'm Tanaka. Please treat me well."},

      {type:"match", pairs:[
        {trg:"こんにちは", src:"Hello"},
        {trg:"ありがとう", src:"Thank you"},
        {trg:"すみません", src:"Excuse me"},
        {trg:"さようなら", src:"Goodbye"}
      ]},

      {type:"mc", q:"誰かに「ありがとう」と言われたら、何と言いますか？",
       opts:["さようなら","すみません","どういたしまして","はい"],
       ans:"どういたしまして",
       hint:"The standard response to thanks. It literally means 'what have I done?' (implying it was nothing)."},

      {type:"fb", s:"コーヒーを{1}。",
       a:["お願いします"],
       opts:["お願いします","ありがとう","すみません","さようなら"],
       hint:"You are making a polite request, like ordering at a cafe. This means 'please.'",
       sSrc:"Coffee, {1}."},
    ]},
  ]
};

export default UNIT_01;
