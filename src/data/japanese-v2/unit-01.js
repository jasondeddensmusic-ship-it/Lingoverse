// Japanese V2 Unit 01. Greetings & Basics (A1.1)
import BATCH11_L1 from './_batch11_u01_L01.js';
import BATCH10_L1 from './_batch10_u01_L01.js';
import BATCH9_L1 from './_batch9_u01_L01.js';
import BATCH7_L1 from './_batch7_u01_L01.js';
import BATCH8_L1 from './_batch8_u01_L01.js';
import BATCH6_L1 from './_batch6_u01_L01.js';
import BATCH4_L02 from './_batch4_u01_L02.js';
import BATCH4_L01 from './_batch4_u01_L01.js';
import BATCH3_L1 from './_batch3_u01_L01.js';
// First Japanese content unit. JLPT N5 aligned.
import JEXP_01_L1 from './_temp_u01_expand_L01.js';import JEXP_01_L2 from './_temp_u01_expand_L02.js';import JEXP_01_L3 from './_temp_u01_expand_L03.js';import JEXP_01_L4 from './_temp_u01_expand_L04.js';

const UNIT_01 = {
  n:1, lang:"ja", srcLang:"en", track:"v2",
  title:"はじめまして", sub:"Greetings & Self-Introduction",
  icon:"\u{1F5FE}", level:"A1.1", color:"#7B5EE8",
  lessons:[
    {id:"jav2_u1l1", title:"あいさつ", icon:"\u{1F44B}", xp:15, board:true, steps:[
      {type:"intro", title:"あいさつ",
       desc:"Learn the essential Japanese greetings for different times of day and social situations.",
       goals:["Greet people at different times of day","Use basic polite expressions","Understand formality levels"]},

      {type:"tip", title:"How to Read Japanese in This Course",
       text:"Japanese uses three scripts: hiragana, katakana, and kanji.\n\nIn this course, kanji always appears with its reading in parentheses:\n\n先生(せんせい) = sensei (teacher)\n\nThe characters before the parentheses are kanji (meaning).\nThe hiragana inside ( ) tells you how to pronounce it.\n\nSome words mix kanji and hiragana:\n食(た)べる = taberu (to eat)\nThe kanji 食 is read た, and べる is the verb ending.\n\nGreetings like こんにちは are written in hiragana only, no kanji needed.",
       deepDive:"You learned hiragana and katakana in Foundations. Now you will see kanji with furigana (readings) throughout every lesson.\n\nExamples you will see:\n- 天気(てんき) = tenki (weather) — both kanji have readings\n- お元気(げんき) = ogenki (well/healthy) — お is hiragana prefix, 元気 is kanji\n- 大(おお)きい = ookii (big) — kanji stem + hiragana ending\n\nYou do NOT need to memorize kanji right now. Just read the hiragana in parentheses. Over time, you will naturally start recognizing the kanji."},


      {type:"teach", trg:"こんにちは", src:"hello / good afternoon", pos:"intj", gender:null,
       note:"The most common Japanese greeting. Used roughly 10 AM to 6 PM.",
       example:"A: こんにちは!\nB: こんにちは! お元気(げんき)ですか?",
       exampleSrc:"A: Hello!\nB: Hello! How are you?",
       funFact:"Literally means 'as for this day' from the old phrase 'konnichi wa gokigen ikaga desu ka' (how is your mood today?). Only the first part survived."},

      {type:"teach", trg:"おはようございます", src:"good morning (polite)", pos:"intj", gender:null,
       note:"Polite morning greeting. Casual version: おはよう (ohayou).\nUsed until about 10 AM.",
       example:"A: おはようございます!\nB: おはようございます!",
       exampleSrc:"A: Good morning!\nB: Good morning!",
       funFact:"Comes from 'hayai' (early). Literally 'it is early.' In the entertainment industry, actors say ohayou gozaimasu at any hour when starting work, even at night."},

      {type:"teach", trg:"こんばんは", src:"good evening", pos:"intj", gender:null,
       note:"Evening greeting. Used after dark, roughly from 6 PM.",
       example:"A: こんばんは!\nB: こんばんは!",
       exampleSrc:"A: Good evening!\nB: Good evening!",
       funFact:"Like konnichiwa, this is a fragment of a longer phrase: 'konban wa gokigen ikaga desu ka.' The 'wa' is the topic particle written with は, not わ."},

      {type:"teach", trg:"おやすみなさい", src:"good night", pos:"intj", gender:null,
       note:"Said when going to bed or parting late at night.\nCasual: おやすみ (oyasumi).",
       example:"A: おやすみなさい。\nB: おやすみなさい!",
       exampleSrc:"A: Good night.\nB: Good night!",
       funFact:"Literally means 'please rest.' The verb yasumu means to rest. Adding nasai makes it a gentle command, like a parent telling a child to rest well."},

      {type:"teach", trg:"さようなら", src:"goodbye", pos:"intj", gender:null,
       note:"Formal goodbye. Implies you won't see the person for a while.\nFor casual partings, use じゃあね or またね.",
       example:"A: さようなら!\nB: さようなら! またね!",
       exampleSrc:"A: Goodbye!\nB: Goodbye! See you!",
       funFact:"Means 'if that is so' or 'well then.' It carries a sense of finality. Japanese people rarely use it with close friends, preferring mata ne (see you) or ja ne (well then)."},
{type:"match",pairs:[{trg:"おはようございます",src:"good morning (polite)"},{trg:"こんばんは",src:"good evening"},{trg:"おやすみなさい",src:"good night"},{trg:"さようなら",src:"goodbye"}]},

      {type:"teach", trg:"ありがとうございます", src:"thank you (polite)", pos:"intj", gender:null,
       note:"Polite thank you. Casual: ありがとう (arigatou).\nThe most important polite phrase.",
       example:"A: どうぞ、お茶(ちゃ)です。\nB: ありがとうございます!",
       exampleSrc:"A: Here you go, tea.\nB: Thank you very much!",
       funFact:"From 'arigatai' meaning 'rare/precious.' Thanking someone literally means telling them their kindness is a rare and precious thing. The kanji is 有難う (difficult to exist)."},

      {type:"teach", trg:"すみません", src:"excuse me / sorry", pos:"intj", gender:null,
       note:"Versatile: apology, getting attention, or expressing gratitude through humility.\nMore formal than ごめんなさい.",
       example:"A: すみません、駅(えき)はどこですか?\nB: あそこです。",
       exampleSrc:"A: Excuse me, where is the station?\nB: It's over there.",
       funFact:"Literally 'it does not end' (the feeling of indebtedness). Japanese culture values humility so deeply that you apologize (sumimasen) even when thanking someone for going out of their way."},

      {type:"teach", trg:"はい", src:"yes", pos:"part", gender:null,
       note:"Polite yes. Also used as 'I understand' or 'I'm listening.'\nCasual: うん (un).",
       example:"A: 日本語(にほんご)を勉強(べんきょう)していますか?\nB: はい、勉強(べんきょう)しています。",
       exampleSrc:"A: Are you studying Japanese?\nB: Yes, I am studying.",
       funFact:"Hai does not always mean agreement. In conversation, it often means 'I am listening' or 'I follow you.' Nodding with 'hai, hai' just means you are paying attention."},

      {type:"teach", trg:"いいえ", src:"no", pos:"part", gender:null,
       note:"Polite no. Often avoided in favor of softer expressions.\nCasual: ううん (uun).",
       example:"A: コーヒーはいかがですか?\nB: いいえ、結構(けっこう)です。お茶(ちゃ)をお願(ねが)いします。",
       exampleSrc:"A: Would you like coffee?\nB: No, I'm fine. Tea, please.",
       funFact:"Japanese people often avoid saying iie directly. They use softer forms like 'chotto...' (a little...) trailing off, or 'daijoubu desu' (I'm okay) to decline without the bluntness of 'no.'"},

      {type:"teach", trg:"お願(ねが)いします", src:"please", pos:"verb", gender:null,
       note:"Polite request. Literally: I make a request.\nUsed when asking for something or placing an order.",
       example:"A: コーヒーをお願(ねが)いします。\nB: はい、少々(しょうしょう)お待(ま)ちください。",
       exampleSrc:"A: Coffee, please.\nB: Yes, please wait a moment.",
       funFact:"Onegai shimasu comes from negau (to wish/pray). You are literally saying 'I humbly wish this of you.' In casual speech, just onegai is enough among friends."},
{type:"match",pairs:[{trg:"すみません",src:"excuse me / sorry"},{trg:"はい",src:"yes"},{trg:"いいえ",src:"no"},{trg:"お願(ねが)いします",src:"please"}]},

      {type:"teach", trg:"はじめまして", src:"nice to meet you", pos:"intj", gender:null,
       note:"Said when meeting someone for the FIRST time only.\nLiterally: for the first time.",
       example:"A: はじめまして。田中(たなか)です。\nB: はじめまして。スミスです。よろしくお願(ねが)いします。",
       exampleSrc:"A: Nice to meet you. I'm Tanaka.\nB: Nice to meet you. I'm Smith. Please be kind to me.",
       funFact:"Always followed by your name and then 'yoroshiku onegai shimasu' (please treat me well). This trio is the fixed self-introduction formula in Japan."},

      {type:"teach", trg:"よろしくお願(ねが)いします", src:"please treat me well", pos:"verb", gender:null,
       note:"Essential phrase after introductions. No direct English equivalent.\nExpresses hope for a good relationship.",
       example:"A: はじめまして。リサです。よろしくお願(ねが)いします。\nB: こちらこそ、よろしくお願(ねが)いします。",
       exampleSrc:"A: Nice to meet you. I'm Lisa. Please treat me well.\nB: Likewise, please treat me well.",
       funFact:"This phrase has no real English translation. It expresses mutual goodwill and is used in introductions, starting jobs, beginning projects, and even in emails. Untranslatable but essential."},

      // Quiz steps
      {type:"mc", q:"朝(あさ)のあいさつは何(なん)ですか?",
       opts:["おはようございます","こんにちは","こんばんは","おやすみなさい"],
       ans:"おはようございます",
       hint:"This greeting is used in the morning, roughly until 10 AM. It comes from the word for 'early.'"},

      {type:"mc", q:"'ありがとうございます' means:",
       opts:["Excuse me","Thank you","Goodbye","Good morning"],
       ans:"Thank you",
       hint:"This is the polite form of expressing gratitude. The casual version drops gozaimasu."},

      {type:"fb", s:"{1}、田中(たなか)です。よろしくお願(ねが)いします。",
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

      {type:"mc", q:"誰(だれ)かに「ありがとう」と言(い)われたら、何(なん)と言(い)いますか?",
       opts:["さようなら","すみません","どういたしまして","はい"],
       ans:"どういたしまして",
       hint:"The standard response to thanks. It literally means 'what have I done?' (implying it was nothing)."},

      {type:"fb", s:"コーヒーを{1}。",
       a:["お願いします"],
       opts:["お願いします","ありがとう","すみません","さようなら"],
       hint:"You are making a polite request, like ordering at a cafe. This means 'please.'",
       sSrc:"Coffee, {1}."},
    ]},
,BATCH11_L1
]};

export default UNIT_01;
