// Unit 1 — 안녕하세요!
// Greetings, 이다 & Being

export default {n:1,lang:"ko",srcLang:"en",track:"v2",title:"안녕하세요!",sub:"Greetings, 이다 & Being",icon:"👋",level:"A1.1",color:"#FF6B6B",lessons:[
  {id:"kou1l1",title:"안녕하세요",icon:"👋",xp:20,board:true,steps:[
        {type:"intro",title:"안녕하세요!",desc:"안녕\n→ peace\n\nYour first Korean words. Greetings are about respect.",goals:["Say hello and goodbye in Korean","Learn two different goodbyes (leaving vs staying)","Understand how Korean differs from English","See how Korean verbs work at a high level"]},
        {type:"teach",trg:"안녕하세요",src:"Hello",pos:"intj",gender:null,phonetic:"an-nyeong-ha-se-yo",note:"COMPOUND: 안녕 (peace) + 하 (do) + 세요 (please/honorific).\nLiterally: 'Do you have peace?'\nUse with EVERYONE. It's universally polite.",example:"A: 안녕하세요! B: 안녕하세요! 만나서 반갑습니다.",exampleSrc:"A: Hello! B: Hello! Nice to meet you.",deepDive:{
          title:"The Culture Behind the Greeting",
          text:"Korean greetings encode respect through verb endings.\n\nThe -세요 in 안녕하세요 is the polite request form.\nYou are literally asking someone if they have peace.\n\nThis same ending appears in 주세요 (please give) and 오세요 (please come)."
        ,funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"tip",title:"🌏 How Korean Is Different From English",deepDive:{
          title:"The Big Picture: Korean vs English",
          text:"SOV vs SVO:\nEnglish: I coffee drink (weird!)\nKorean: 저는 커피를 마셔요 (I coffee drink: normal!)\nThe verb ALWAYS goes last in Korean.\n\nAgglutinative language:\nKorean snaps pieces onto verb stems.\nOne verb can carry tense + politeness + mood.\nThink of it like LEGO for grammar.\n\nContext-heavy:\nKorean trusts you to figure out who and what from context.\nNo grammatical gender. No plural markers (usually). No articles.\n\nGOOD NEWS:\nNo irregular spelling. Consistent pronunciation rules.\nEvery syllable block is pronounced. What you see is what you say."
        },text:"A few things to know before you dive in:\n\n• Korean puts the verb LAST (you'll see this every sentence)\n• Korean has NO articles (a, the). Context tells you.\n• Korean verbs DON'T change for person (I go, you go, he goes: all the same)\n• Korean questions sound like statements (your voice just rises)\n• Korean drops subjects constantly: 'coffee exists' can mean 'I have coffee'"},
        {type:"tip",title:"📖 Korean Verbs End in -다",deepDive:{
          title:"Why -다 Matters",
          text:"The ending shows politeness, tense, and mood.\nYou are learning the POLITE ending (-요) from day one.\n\nDictionary form: always ends in -다.\n\nStem: everything BEFORE -다.\n하다 → stem is 하\n가다 → stem is 가\n먹다 → stem is 먹\n있다 → stem is 있\n\nEndings snap onto the stem:\n-세요: polite request\n-이에요/예요: am/is\n-아/어요: polite present tense\n\nFor now: -다 is dictionary form, -요 means polite."
        },text:"Every Korean verb in the dictionary ends in -다:\n하다 (to do), 가다 (to go), 먹다 (to eat), 있다 (to exist).\n\nTo USE a verb, drop -다 and add an ending.\n하다 → 하세요 (please do)."},
        {type:"mc",q:"안녕하세요 literally means:",opts:["How are you?","Good morning","Do you have peace?","I am well"],ans:"Do you have peace?",hint:"안녕 (peace) + 하세요 (do you have / please do)"},
        {type:"teach",trg:"안녕히 가세요",src:"Goodbye (to person leaving)",pos:"intj",gender:null,phonetic:"an-nyeong-hi ga-se-yo",note:"Said to someone who is LEAVING.\nYou stay, they go.\n안녕히 = peacefully, 가세요 = please go.",example:"A: 선생님, 안녕히 가세요! B: 네, 안녕히 계세요!",exampleSrc:"A: Teacher, goodbye! (go well) B: Yes, goodbye! (stay well)",deepDive:{title:"The Logic",text:"You are wishing THEM a peaceful journey.\nLiterally: 'Go peacefully.'\n\n안녕히\n→ peacefully\n\n가세요\n→ please go",funFact:"Korean greetings change based on the age and status of the person you're talking to. Politeness levels matter."}},
        {type:"teach",trg:"안녕히 계세요",src:"Goodbye (to person staying)",pos:"intj",gender:null,phonetic:"an-nyeong-hi gye-se-yo",note:"Said to someone who STAYS.\nYou leave, they stay.\n안녕히 = peacefully, 계세요 = please stay.",example:"A: 안녕히 계세요! 감사합니다! B: 안녕히 가세요!",exampleSrc:"A: Goodbye! (stay well) Thank you! B: Goodbye! (go well)",deepDive:{
          title:"The Logic",
          text:"You are wishing THEM a peaceful stay.\nTwo goodbyes: one for the leaver, one for the stayer.\n\n안녕히\n→ peacefully\n\n계세요\n→ please stay"
        ,funFact:"Korean greetings change based on the age and status of the person you're talking to. Politeness levels matter."}},
        {type:"teach",trg:"안녕",src:"Hi / Bye (casual)",pos:"intj",gender:null,phonetic:"an-nyeong",note:"Casual hello AND goodbye in one word.\nOnly use with CLOSE friends your age or younger.\n⚠️ NEVER use with strangers, elders, or at work.",example:"A: 안녕! 내일 봐! B: 안녕! 내일 봐!",exampleSrc:"A: Bye! See you tomorrow! B: Bye! See you tomorrow!",deepDive:{title:"Using 안녕",text:"Stay with 안녕하세요 until you know when 안녕 is safe to use.",funFact:"Korean greetings change based on the age and status of the person you're talking to. Politeness levels matter."}},
        {type:"mc",q:"안녕히 계세요 means:",opts:["Hi","Goodbye","Thank you","See you tomorrow"],ans:"Goodbye",hint:"This farewell is said to the person who stays behind."},
        {type:"tip",title:"🧠 Goodbye Summary: Formal vs Casual",deepDive:{
          title:"Full Comparison",
          text:"BOTH leaving: either works, or just 안녕!\n잘 가 = bye (casual, to someone leaving)\n\n• 가세요 = please go\n• 계세요 = please stay\n\nThink about what the OTHER person is doing.\nThat tells you which formal goodbye to use."
        },text:"Leaving someone who STAYS:\n안녕히 계세요 = Goodbye (you stay well)\n\nYOU are the one leaving:\n안녕히 가세요 = Goodbye (go well)"},
        {type:"tip",title:"🙇 Bowing Basics",deepDive:{
          title:"When and How Deep to Bow",
          text:"When you say 안녕하세요, a small bow shows respect.\n\nYou don't need to bow deeply in casual settings.\nJust a gentle nod of the head is enough."
        },text:"Korean greetings usually come with a bow.\n\n• Slight nod (15°): friends, casual settings\n• Medium bow (30°): normal polite greeting\n• Deep bow (45°+): elders, formal situations, apologies"},
        {type:"mc",q:"You're leaving a shop. The shopkeeper stays. You say:",opts:["안녕히 가세요","안녕히 계세요","안녕하세요","안녕"],ans:"안녕히 계세요",hint:"THEY stay, so you wish them to 'stay in peace'"},
        {type:"mc",q:"Your friend is leaving the café. You stay. You say:",opts:["안녕히 가세요","안녕히 계세요","안녕하세요","안녕히"],ans:"안녕히 가세요",hint:"THEY go, so you wish them to 'go in peace'"},
        {type:"fb",opts:["안녕히 가세요","안녕히 계세요","안녕하세요","안녕"],hint:"Your coworker STAYS. Wish them to 'stay in peace.'",s:"You leave the office. Your coworker stays. You say: ___",a:"안녕히 계세요"},
        {type:"mc",q:"가세요 in 안녕히 가세요 means 'please go.' You say this to someone who is:",opts:["Staying behind","Leaving","Arriving","Sleeping"],ans:"Leaving",hint:"가 = go. You wish the LEAVER to go in peace."},
        {type:"mc",q:"안녕 (casual) is appropriate when talking to:",opts:["Your boss","A close friend your age","A stranger on the street","Your friend's grandmother"],ans:"A close friend your age",hint:"안녕 is casual. Only safe with ___ ___s your ___ or younger."},
        {type:"fb",opts:["안녕","안녕하세요","안녕히 가세요","안녕히 계세요"],hint:"A teacher is senior. Use the polite, universal greeting.",s:"A student greets their teacher in the morning: ___",a:"안녕하세요"},
        {type:"match",pairs:[{trg:"안녕하세요",src:"Hello (polite)"},{trg:"안녕히 가세요",src:"Goodbye (to leaver)"},{trg:"안녕히 계세요",src:"Goodbye (to stayer)"},{trg:"안녕",src:"Hi / Bye (casual)"}]},
        {type:"mc",q:"In the dictionary, Korean verbs always end in:",opts:["-요","-세요","-다","-하"],ans:"-다",hint:"All Korean verbs share the same dictionary ending. Which one?"},
        {type:"fb",opts:["안녕히 가세요","안녕히 계세요","안녕하세요","안녕"],hint:"Both are GOING. Each wishes the other to 'go in peace.'",s:"Two friends part ways on the street. Both are leaving. They both say: ___",a:"안녕히 가세요"},
        {type:"mc",q:"In Korean sentences, the verb goes:",opts:["At the beginning","In the middle","At the END","Before the subject"],ans:"At the END",hint:"Korean is a verb-last language. Subject first, verb last."},
        {type:"match",pairs:[{trg:"Meeting someone for the first time",src:"안녕하세요"},{trg:"Your friend leaves, you stay",src:"안녕히 가세요"},{trg:"You leave, host stays",src:"안녕히 계세요"},{trg:"Texting a close friend",src:"안녕"}]},
        {type:"mc",q:"You visit a Korean home. The host greets you with 안녕하세요. After tea, you leave. The host stays. What do you say as you go?",opts:["안녕히 가세요","안녕히 계세요","안녕하세요","안녕"],ans:"안녕히 계세요",hint:"You are LEAVING, the host STAYS. Wish them to stay in peace."}
  ]},
  {id:"kou1l2",title:"저는 ___이에요/예요",icon:"🧑",xp:20,board:true,steps:[
        {type:"intro",title:"I Am ___",desc:"저는 사라예요.\n→ I am Sara.\n\nThe verb goes at the END.",goals:["Say 'I am (your name)'","Use 이에요/예요 (am/is)","Understand the topic marker 은/는","Learn about Korean politeness levels"]},
        {type:"teach",trg:"저",src:"I / me (polite)",pos:"noun",gender:null,phonetic:"jeo",note:"Polite 'I'. Use with everyone.\nThe casual form is taught in a later lesson.\nAlways use this polite form until then.",example:"A: 저는 사라예요. B: 안녕하세요, 사라!",exampleSrc:"A: I am Sara. B: Hello, Sara!",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"는 / 은",src:"(topic marker)",pos:"part",gender:null,phonetic:"neun / eun",note:"Marks what we're talking about.\n\n저는\n→ after a vowel\n\n학생은\n→ after a consonant",example:"A: 저는 민수예요. B: 저는 사라예요. A: 만나서 반갑습니다!",exampleSrc:"A: I am Minsu. B: I am Sara. A: Nice to meet you!",deepDive:{title:"Full Pattern",text:"Don't overthink it yet. Just copy the pattern.\nThis gets a proper name later.",funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"tip",title:"해요체: 🎀 You're Speaking Politely",deepDive:{
          title:"Why Politeness Is Built Into Korean Grammar",
          text:"English uses WORDS for politeness: 'Can you please pass the salt?'\n\nKorean uses VERB ENDINGS (grammar, not vocabulary).\nSame sentence, different ending = different respect level.\n\nAge determines EVERYTHING:\nWho speaks first, which ending you use.\nThis is why Koreans ask your age immediately.\nIt's not rude. It's NECESSARY to know which verb endings to use with you.\n\n해요체 (-요 ending): safe with literally everyone.\n반말 (no -요): friends your age, younger people, NEVER strangers."
        },text:"Every -요 ending you have learned is 해요체 (polite casual).\n가요 (go), 먹어요 (eat), 있어요 (have).\n\n해요체 is safe for 95% of daily situations.\nPolite but not stiff. Perfect for stores, cafés, new people."},
        {type:"teach",trg:"이에요 / 예요",src:"am / is / are",pos:"part",gender:null,phonetic:"i-e-yo / ye-yo",note:"After a consonant ending:\n학생이에요.\n→ I am a student.",example:"A: 학생이에요? B: 네, 저는 학생이에요. A: 저는 선생님이에요.",exampleSrc:"A: Are you a student? B: Yes, I am a student. A: I am a teacher.",deepDive:{title:"The Rule",text:"The verb goes at the END. Always.\n엠마예요.\n→ I am Emma.\n\nThe verb goes at the END. Always. -요 = polite marker.",funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"tip",title:"🔍 SOV: Verb Goes Last",deepDive:{
          title:"Why Verb-Last Feels Natural",
          text:"This is how Korean works. The verb ALWAYS goes at the end.\nYou'll see this in every single lesson.\n\nBonus: 저는 is often dropped in casual speech.\n사라예요 alone means 'I'm Sara' from context."
        },text:"Every sentence you've seen so far:\n\n저는 사라예요. (I am Sara.)\n저는 학생이에요. (I am a student.)\n\nSubject, then VERB (last).\n"},
        {type:"mc",q:"저는 사라___.\n(Sara)",opts:["이에요","예요"],ans:"예요",hint:"Vowel ending or consonant ending?"},
        {type:"mc",q:"I am a student: 저는 학생___.",opts:["이에요","예요"],ans:"이에요",hint:"Vowel ending or consonant ending?"},
        {type:"mc",q:"저는 민수___.\n(Minsu)",opts:["이에요","예요"],ans:"예요",hint:"Vowel ending or consonant ending?"},
        {type:"fb",opts:["이에요","예요"],hint:"Check the last letter. Vowel or consonant?",s:"저는 엠마___.\n(I am Emma ___.)",a:"예요"},
        {type:"fb",opts:["이에요","예요"],hint:"Vowel ending or consonant ending?",s:"저는 선생님___.\n(I am a teacher ___.)",a:"이에요"},
        {type:"mc",q:"The -요 at the end of 이에요 shows that you are being:",opts:["Casual","Polite","Angry","Formal-written"],ans:"Polite",hint:"The ending -요 signals a specific speech register you learned about."},
        {type:"mc",q:"Which marker goes after 저 to mean 'as for me'?",opts:["은","는","이","가"],ans:"는",hint:"Does the word end in a vowel or consonant?"},
        {type:"mc",q:"In casual speech, Koreans often drop 저는. So '사라예요' by itself means:",opts:["Sara is here","I am Sara","Where is Sara?","Sara says hello"],ans:"I am Sara",hint:"When 저는 is dropped, context tells you who is speaking."},
        {type:"mc",q:"저는 학생이에요. What is the verb in this sentence?",opts:["저","는","학생","이에요"],ans:"이에요",hint:"The verb is at the END of the sentence. What comes last?"},
        {type:"fb",opts:["저","이","가","는"],hint:"The polite word for 'I' goes here.",s:"___는 학생이에요.\n(I am a student.)",a:"저"},
        {type:"match",pairs:[{trg:"저",src:"I / me (polite)"},{trg:"는 / 은",src:"topic marker"},{trg:"이에요",src:"am/is (after consonant)"},{trg:"예요",src:"am/is (after vowel)"}]},
        {type:"mc",q:"Korean has how many speech levels?",opts:["2","4","7","10"],ans:"7",hint:"Korean has multiple levels of politeness, each with its own verb endings."},
        {type:"mc",q:"저는 엠마예요. Why 예요 and not 이에요?",opts:["엠마 is a foreign name","엠마 ends in a vowel (ㅏ)","엠마 is short","It doesn't matter"],ans:"엠마 ends in a vowel (ㅏ)",hint:"Check the last letter of the previous word."},
        {type:"match",pairs:[{trg:"저는 사라예요",src:"I am Sara"},{trg:"저는 학생이에요",src:"I am a student"},{trg:"저는 민수예요",src:"I am Minsu"},{trg:"저는 선생님이에요",src:"I am a teacher"}]},
        {type:"mc",q:"To introduce yourself, say your name then:",opts:["하세요","이에요 or 예요","있어요","없어요"],ans:"이에요 or 예요",hint:"Check what the word before it ends with."}
  ]},
  {id:"kou1l2b",title:"★ The Verb Engine",icon:"🚂",xp:25,board:true,steps:[
        {type:"intro",title:"How Korean Verbs Actually Work",desc:"이에요 / 가세요 / 있어요\n→ verbs you already know\n\nHow are they built? One system behind every verb.",goals:["See how every Korean verb is built from two parts","Understand what the stem is","See why -요 makes speech polite","Recognise the 하다 verb family that unlocks hundreds of words"]},
        {type:"teach",trg:"가다 → 가요",src:"to go → go (polite)",pos:"verb",gender:null,phonetic:"ga-da → ga-yo",note:"Every dictionary verb ends in the same suffix.\nDrop that suffix to find the stem. Add an ending.\n\n가다\n→ stem: 가\n→ polite present: 가요",example:"A: 어디에 가요? B: 학교에 가요.",exampleSrc:"A: Where are you going? B: I am going to school.",deepDive:{
          title:"The Stem + Ending System",
          text:"The stem carries the meaning.\nThe ending carries politeness, tense, and mood.\nThis is how EVERY Korean verb works:\ndictionary form → drop the suffix → add ending."
        ,funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"teach",trg:"먹다 → 먹어요",src:"to eat → eat (polite)",pos:"verb",gender:null,phonetic:"meok-da → meo-geo-yo",note:"Every dictionary verb ends in the same suffix.\nDrop it to find the stem.\n\n먹다\n→ stem: 먹\n→ polite present: 먹어요",example:"A: 뭐 먹어요? B: 밥 먹어요.",exampleSrc:"A: What are you eating? B: I am eating rice.",deepDive:{
          title:"Why -어요?",
          text:"Two things happening:\n1. The stem 먹 ends in a consonant, so it needs a connecting vowel.\n2. The vowel in 먹 is ㅓ (dark), so the connector is -어.\n\n⚡ Why -어요 here but -아요 elsewhere?\nThere's a rule. You'll see it in a later lesson. For now: Bright vowels take -아, dark vowels take -어. a later lesson names this rule."
        ,funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"teach",trg:"하다 → 해요",src:"to do → do (polite)",pos:"verb",gender:null,phonetic:"ha-da → hae-yo",note:"하다 is the MOST important Korean verb.\n\n하다 → 해요 (always)\n→ Special contraction. No exceptions.",example:"A: 뭐 해요? B: 공부해요.",exampleSrc:"A: What are you doing? B: I am studying.",deepDive:{
          title:"Conjugating 하다",
          text:"하다 snaps onto nouns to create verb phrases:\n공부 (study) + 하다 = 공부하다 → 공부해요\n운동 (exercise) + 하다 = 운동하다 → 운동해요\n일 (work) + 하다 = 일하다 → 일해요\n요리 (cooking) + 하다 = 요리하다 → 요리해요\n\n⚡ LEGO: Every noun + 하다 = verb. This single pattern unlocks hundreds of words."
        ,funFact:"A 하다 verb — noun + 하다 (to do). This pattern creates hundreds of verbs from Sino-Korean nouns."}},
        {type:"mc",q:"먹다 means:",opts:["to eat","to drink","to do","to exist"],ans:"to eat",hint:"This verb was taught with the example 밥 먹어요 (I eat rice)."},
        {type:"tip",title:"🚂 The Train Metaphor",deepDive:{
          title:"Why This Is Better Than Memorising",
          text:"Right now you only have ONE car: -요 (the politeness car).\nSoon you'll add more cars:\n🚃 Past tense car: -었/았어요\n🚃 Future car: -(으)ㄹ 거예요\n🚃 Request car: -(으)세요\n\nSame engine. Different cars. That's Korean.\n\nWithout the engine:\n먹어요, 가요, 해요 = memorised chunks.\n\nWith the engine:\nSTEM → ENDING = infinite verbs.\n\nYou just saw 하다 attaches to nouns:\n산책하다 (take a walk) → 산책해요\n전화하다 (phone someone) → 전화해요\n사랑하다 (to love) → 사랑해요\n\nYou can now form verbs you've NEVER SEEN.\nThat's the difference between memorising and generating."
        },text:"Think of every Korean verb as a TRAIN:\n\n🚂 STEM = the engine (carries the meaning)\n🚃 ENDING = the car that snaps on\n\n가다 → 가요 (go, politely)\n먹다 → 먹어요 (eat, politely)\n하다 → 해요 (do, politely)"},
        {type:"mc",q:"What is the stem of 먹다?",opts:["먹다","먹어","먹","다"],ans:"먹",hint:"Strip -다 from the dictionary form. What remains is the stem."},
        {type:"mc",q:"What is the stem of 가다?",opts:["가다","가요","가","요"],ans:"가",hint:"Strip the dictionary suffix to find the stem."},
        {type:"mc",q:"하다 → 해요. The -요 signals:",opts:["Past tense","Politeness (해요체)","A question","Future"],ans:"Politeness (해요체)",hint:"-요 at the end = polite speech (___). You're in this register from day one."},
        {type:"mc",q:"공부 (study) + 하다 = ?",opts:["공부요","공부가요","공부해요","공부어요"],ans:"공부해요",hint:"Noun + 하다 compounds always conjugate one way."},
        {type:"fb",opts:["해요","하요","하아요","하이요"],hint:"하다 compounds always conjugate as 해요. No exceptions.",s:"운동___\n(I exercise  -  polite present)",a:"해요"},
        {type:"fb",opts:["가요","가어요","가다","갑니다"],hint:"가다 stem is 가. Bright vowel ㅏ merges directly with the polite ending.",s:"어디에 ___?\n(Where are you going?)",a:"가요"},
        {type:"teach",trg:"있다 → 있어요",src:"to exist / to have → exists (polite)",pos:"verb",gender:null,phonetic:"it-da → i-sseo-yo",note:"Drop the suffix to find the stem.\n\n있다\n→ stem: 있\n→ polite present: 있어요\n→ there is / I have (polite).",example:"A: 커피 있어요? B: 네, 있어요! A: 감사합니다!",exampleSrc:"A: Is there coffee? B: Yes, there is! A: Thank you!",deepDive:{title:"Conjugating 있다",text:"없다 → stem: 없\n없 + 어요 = 없어요 (don't have / don't exist) ✓\n\nBoth have dark vowels → always -어요.",funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"mc",q:"있다 → stem is:",opts:["있다","있어","있","어요"],ans:"있",hint:"Strip -다 from 있다. The stem is 있."},
        {type:"mc",q:"Which of these is NOT a 하다 verb?",opts:["공부하다","운동하다","가다","요리하다"],ans:"가다",hint:"... = to go. It is its own verb. 공부/운동/요리 all attach 하다."},
        {type:"tip",title:"📋 The Three Patterns You've Seen",deepDive:{
          title:"Why -어요 and Not -아요?",
          text:"You may have noticed: 먹어요, 있어요 all use -어요.\nBut 가요 doesn't use -어 at all.\n\nThere's a rule behind this. It's called vowel harmony.\nBright vowels (ㅏ ㅗ) take -아요.\nDark vowels (everything else) take -어요.\n\n가다: stem 가, vowel ㅏ is bright → merges to 가요.\n먹다: stem 먹, vowel ㅓ is dark → 먹어요.\n공부하다 → 공부해요.\n\nThe full rule comes in a later lesson. For now: just see the three patterns."
        },text:"Every verb you've used fits one of these:\n\n가다 → 가요 (bright vowel ㅏ: merges with -아요)\n먹다 → 먹어요 (dark vowel ㅓ: takes -어요)\n하다 → 해요 (always, no exceptions)"},
        {type:"match",pairs:[{trg:"가다",src:"to go"},{trg:"먹다",src:"to eat"},{trg:"하다",src:"to do"},{trg:"있다",src:"to exist"}]},
        {type:"drag_fill",hint:"Match each verb to its polite form: go, eat, study.",s:"저는 학교에 {1}. 밥 {2}. 공부 {3}.",blanks:{"1":"가요","2":"먹어요","3":"해요"},pool:["가요","먹어요","해요","가다","먹다"]},
        {type:"mc",q:"You want to say 'I exercise' (운동). Which is correct?",opts:["운동요","운동어요","운동해요","운동가요"],ans:"운동해요",hint:"This is a 하다 compound. One rule, always."},
        {type:"mc",q:"The stem of 이에요/예요 is:",opts:["이에","이","이에요","예"],ans:"이",hint:"The copula follows the same stem + ending logic."},
        {type:"tip",title:"🎯 What You Can Now Do",deepDive:{
          title:"Think Like a Polyglot",
          text:"✅ Analyse every verb you encounter: stem? ending? what does each part do?\n\n\nThis is how a polyglot thinks.\nNot: 'I memorised this phrase.'\nBut: 'I see stem 먹, I know what it means, I know what -어요 does, I can build this form myself.'\n\nThe rule for -아요 vs -어요 comes next.\nFor now: the engine is running. 🚂"
        },text:"With just STEM + ENDING you can now:\n\n✅ Form ANY regular verb in polite present tense\n✅ Understand that -요 = polite register (해요체)\n✅ Generate 하다 verbs you've never seen before"}
  ]},
  {id:"kou1l3",title:"Konglish Blitz. Free Vocab!",icon:"🎁",xp:20,board:true,steps:[
        {type:"intro",title:"Free Vocabulary!",desc:"Korean borrowed hundreds of English words. FREE vocabulary!",goals:["Recognize 8+ Konglish words","Read English words in Hangul","Understand Korean-ified pronunciation","Know what Konglish is"]},
        {type:"teach",trg:"커피",src:"coffee ☕",pos:"noun",gender:null,phonetic:"keo-pi",note:"From English coffee. Just read the Hangul.",example:"A: 뭐 드릴까요? B: 커피 주세요.",exampleSrc:"A: What can I get you? B: Coffee, please.",funFact:"A Konglish loanword adapted from English. Korean has borrowed many modern and tech words."},
        {type:"teach",trg:"택시",src:"taxi 🚕",pos:"noun",gender:null,phonetic:"taek-si",note:"From English taxi. Sounds almost identical.",example:"A: 택시를 타요? B: 네, 택시를 타요.",exampleSrc:"A: Are you taking a taxi? B: Yes, I'm taking a taxi.",funFact:"A Konglish loanword adapted from English. Korean has borrowed many modern and tech words."},
        {type:"teach",trg:"버스",src:"bus 🚌",pos:"noun",gender:null,phonetic:"beo-seu",note:"From English bus. Pronunciation shifts slightly in Korean.",example:"A: 버스가 와요? B: 네, 버스가 와요!",exampleSrc:"A: Is the bus coming? B: Yes, the bus is coming!",funFact:"A Konglish loanword adapted from English. Korean has borrowed many modern and tech words."},
        {type:"mc",q:"택시 means:",opts:["taxi 🚕","coffee ☕","bus 🚌","hotel 🏨"],ans:"taxi 🚕",hint:"This Konglish word sounds like the English word for a car you hail."},
        {type:"teach",trg:"컴퓨터",src:"computer 💻",pos:"noun",gender:null,phonetic:"keom-pyu-teo",note:"From English computer. Five syllable blocks in Korean.",example:"A: 컴퓨터가 있어요? B: 네, 있어요!",exampleSrc:"A: Is there a computer? B: Yes, there is!",funFact:"A Konglish loanword adapted from English. Korean has borrowed many modern and tech words."},
        {type:"mc",q:"커피 in English is:",opts:["tea","coffee","water","juice"],ans:"coffee",hint:"Read the Hangul: 커 (keo) + 피 (pi)"},
        {type:"mc",q:"How many syllable blocks does 컴퓨터 have?",opts:["2","3","4","5"],ans:"3",hint:"컴 + 퓨 + 터 = 3 blocks"},
        {type:"teach",trg:"호텔",src:"hotel 🏨",pos:"noun",gender:null,phonetic:"ho-tel",note:"From English hotel. Very close pronunciation.",example:"A: 호텔이 어디예요? B: 저기요.",exampleSrc:"A: Where is the hotel? B: Over there.",funFact:"A Konglish loanword adapted from English. Korean has borrowed many modern and tech words."},
        {type:"teach",trg:"카페",src:"cafe ☕",pos:"noun",gender:null,phonetic:"ka-pe",note:"From English café. Korea has one of the highest\ncafé densities in the world!",example:"A: 카페에 가요? B: 네, 커피 먹어요! A: 저도 가요!",exampleSrc:"A: Are you going to the cafe? B: Yes, having coffee! A: I'm going too!",funFact:"A Konglish loanword adapted from English. Korean has borrowed many modern and tech words."},
        {type:"teach",trg:"아이스크림",src:"ice cream 🍦",pos:"noun",gender:null,phonetic:"a-i-seu-keu-rim",note:"From English ice cream. Five syllable blocks.",example:"A: 아이스크림 먹어요? B: 네, 먹어요! A: 저도요!",exampleSrc:"A: Are you eating ice cream? B: Yes! A: Me too!",funFact:"A Konglish loanword adapted from English. Korean has borrowed many modern and tech words."},
        {type:"mc",q:"카페 means:",opts:["hotel 🏨","cafe ☕","ice cream 🍦","computer 💻"],ans:"cafe ☕",hint:"A place where you drink 커피. Borrowed from French/English."},
        {type:"teach",trg:"인터넷",src:"internet 🌐",pos:"noun",gender:null,phonetic:"in-teo-net",note:"From English internet. Three syllable blocks.",example:"A: 인터넷이 있어요? B: 네, 있어요.",exampleSrc:"A: Is there internet? B: Yes, there is.",funFact:"A Konglish loanword adapted from English. Korean has borrowed many modern and tech words."},
        {type:"tip",title:"💡 Konglish = Free Words",deepDive:{
          title:"Korean-ified Pronunciation Matters",
          text:"Read the Hangul to get the Korean pronunciation.\nDon't use the English pronunciation. Koreans won't understand!"
        },text:"Korean has hundreds of English loanwords (콩글리시 = Konglish).\n\n커피  택시  버스  호텔  카페\n케이크  초콜릿  카메라  피아노\n\nThe catch: pronunciation is Korean-ified.\n'Computer' → 컴퓨터 (keom-pyu-teo)\n"},
        {type:"match",pairs:[{trg:"커피",src:"coffee"},{trg:"택시",src:"taxi"},{trg:"버스",src:"bus"},{trg:"호텔",src:"hotel"}]},
        {type:"mc",q:"아이스크림 has how many syllable blocks?",opts:["3","4","5","6"],ans:"5",hint:"아-이-스-크-림: count each block"},
        {type:"mc",q:"Which word means 'cafe'?",opts:["커피","카페","택시","호텔"],ans:"카페",hint:"Sounds like 'ka-pe'"},
        {type:"fb",opts:["컴퓨터","인터넷","호텔","카페"],hint:"3 syllable blocks: 컴+퓨+터",s:"___ is the Konglish word for 'computer'",a:"컴퓨터"},
        {type:"fb",opts:["택시","버스","커피","호텔"],hint:"What vehicle sounds like 'taek-si'?",s:"___를 타요.\n(I take a taxi.)",a:"택시"},
        {type:"tip",title:"🔊 Why Pronunciation Changes",deepDive:{
          title:"연음 (Linking) in Natural Speech",
          text:"This is called 연음 (linking). It is automatic in natural speech.\nThe spelling stays the same, only the sound shifts."
        },text:"Korean spelling and pronunciation sometimes differ:\n\n받침 + vowel → the 받침 moves forward:\n먹어요 sounds like [머거요] = eat\n없어요 sounds like [업서요] = do not have"},
        {type:"match",pairs:[{trg:"카페",src:"cafe"},{trg:"인터넷",src:"internet"},{trg:"아이스크림",src:"ice cream"},{trg:"컴퓨터",src:"computer"}]},
        {type:"mc",q:"You're in Seoul and want to find a hotel. You ask: ___이 어디예요?",opts:["호텔","커피","버스","택시"],ans:"호텔",hint:"Which Konglish word means 'hotel'?"},
        {type:"mc",q:"Why should you NOT use English pronunciation for Konglish words?",opts:["It is perfectly fine to do so","Koreans will not understand","It sounds more natural to them","English is widely understood"],ans:"Koreans will not understand",hint:"Konglish uses Korean-ified sounds, not English sounds"},
        {type:"fb",opts:["카페","커피","호텔","택시"],hint:"The place where you drink coffee: ...",s:"___에 가요.\n(I go to the cafe.)",a:"카페"}
  ]},
  {id:"kou1l4",title:"네 / 아니요 / 감사합니다",icon:"🙏",xp:20,board:true,steps:[
        {type:"intro",title:"Yes, No & Thank You",desc:"감사합니다\n→ thank you (formal)\n\nThree survival words, decomposed into parts.",goals:["Say yes (네) and no (아니요)","Say thank you (formal and casual)","Use 아니에요 (am not / is not)","Decompose 감사합니다 into compound parts"]},
        {type:"teach",trg:"네",src:"Yes",pos:"intj",gender:null,phonetic:"ne",note:"Often sounds like 'de' in fast speech.\nVery common. You'll hear it constantly\nas a conversation filler meaning 'uh-huh, I'm listening.'",example:"A: 학생이에요? B: 네, 학생이에요.",exampleSrc:"A: Are you a student? B: Yes, I am a student.",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."},
        {type:"teach",trg:"아니요",src:"No",pos:"intj",gender:null,phonetic:"a-ni-yo",note:"Polite 'no'.\n아니에요: 'am not / is not'. The negative of 이에요/예요.",example:"A: 선생님이에요? B: 아니요, 학생이에요.",exampleSrc:"A: Are you a teacher? B: No, I'm a student.",deepDive:{
          title:"아니요 vs 아니에요",
          text:"아니요: standalone 'no' (answering a yes/no question).\n아니에요: 'am not / is not' (negating identity).\n\n학생이에요? 아니요, 의사예요.\nAre you a student? No, I am a doctor."
        ,funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"mc",q:"Someone asks if you're a teacher. You're not. You say:",opts:["네","아니요","안녕히 가세요","안녕하세요"],ans:"아니요",hint:"You are NOT a teacher."},
        {type:"teach",trg:"아니에요",src:"to not be (am/is/are not)",pos:"verb",gender:null,phonetic:"a-ni-e-yo",note:"아니에요 = am not, is not, are not.\n학생이 아니에요.\n→ (I) am not a student.",example:"A: 의사예요? B: 아니에요, 학생이에요. A: 아, 네!",exampleSrc:"A: Are you a doctor? B: No, I'm a student. A: Ah, yes!",deepDive:{
          title:"The Negative Copula Pattern",
          text:"Pattern: 의사가 아니에요.\n→ is not a doctor.\n\n학생이 아니에요.\n→ (I) am not a student.\n\n⚡ Note: 이/가 goes before 아니에요, NOT 은/는."
        ,funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"tip",title:"🔄 이에요 vs 아니에요",deepDive:{title:"Full Comparison",text:"Notice: the negative uses 이/가 before 아니에요, not 은/는."},text:"Positive: 저는 학생이에요. = I am a student.\nNegative: 저는 학생이 아니에요. = I am not a student.\n\n이에요/예요 = am / is (after consonant/vowel)\n아니에요 = am not / is not"},
        {type:"mc",q:"저는 학생이 아니에요 means:",opts:["I am a student","I am not a student","I like students","Students are here"],ans:"I am not a student",hint:"아니에요 = am not"},
        {type:"fb",opts:["이에요","예요","아니에요","아니요"],hint:"This is the negative form of the copula 이에요/예요.",s:"저는 의사가 ___.\n(I am not a doctor.)",a:"아니에요"},
        {type:"teach",trg:"감사합니다",src:"Thank you (formal)",pos:"intj",gender:null,phonetic:"gam-sa-ham-ni-da",note:"COMPOUND: 감사 (gratitude) + 합니다 (do-formally).\nLiterally: 'I do gratitude.'\n합니다 → pronounced [함니다]\nNasalization: ㅂ becomes ㅁ before ㄴ.",example:"A: 커피예요. B: 감사합니다! A: 네!",exampleSrc:"A: Here's your coffee. B: Thank you! A: Yes! (You're welcome!)",deepDive:{
          title:"Why 합 Sounds Like 함",
          text:"This is called nasalization.\nWhen ㅂ meets ㄴ, it becomes ㅁ:\n합 + 니 → 함니 (hab-ni → ham-ni)\n\nYou learned this in the Hangul sound rules.\nYou'll hear this in 합쇼체 (formal speech) constantly."
        ,funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"teach",trg:"고마워요",src:"Thanks (casual-polite)",pos:"intj",gender:null,phonetic:"go-ma-wo-yo",note:"The casual-polite version of 감사합니다.\nUse with friends, peers, people your age.\nStill polite: -요 ending.",example:"A: 이거 줄게요! B: 고마워요!",exampleSrc:"A: I'll give you this! B: Thanks!",deepDive:{
          title:"감사합니다 vs 고마워요",
          text:"감사합니다: formal. Use with elders, strangers, service.\n고마워요: casual-polite. Use with friends, peers.\n\nBoth mean 'thank you'. Different levels of formality.\n\n고맙습니다: slightly less stiff than 감사합니다, but still formal.\nYou'll hear all three. For now, use 감사합니다 for formal and 고마워요 for casual."
        ,funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"tip",title:"🧱 Compound Pattern: noun → 하다 verb",deepDive:{
          title:"하다 Verbs: The Biggest Pattern in Korean",
          text:"About 40% of all Korean verbs follow this pattern.\n\n전화 (phone call)\n전화하다 (to call)\n전화해요 (I call)\n\n일 (work)\n일하다 (to work)\n일해요 (I work)\n\nOnce you know the noun, the verb is free."
        },text:"Many Korean verbs are noun + 하다 (to do):\n\n공부 (study) → 공부하다 (to study) → 공부해요 (I study)\n운동 (exercise) → 운동하다 (to exercise) → 운동해요\n요리 (cooking) → 요리하다 (to cook) → 요리해요\n\nLearn the noun, add 하다, conjugate as 해요. Instant verb."},
        {type:"mc",q:"감사합니다 literally means:",opts:["I am grateful","I do gratitude","Good thanks","Thank you very much"],ans:"I do gratitude",hint:"감사 (gratitude) + 합니다 (do formally)"},
        {type:"mc",q:"You receive a gift from your friend's mother. You say:",opts:["고마워요","감사합니다","네","아니에요"],ans:"감사합니다",hint:"Friend's MOTHER is an elder. Use the formal version."},
        {type:"mc",q:"Your close friend helps you with homework. You say:",opts:["감사합니다","고마워요","아니에요","아니요"],ans:"고마워요",hint:"Close friend, same age. Casual-polite is fine."},
        {type:"fb",opts:["이에요","아니에요","예요","아니요"],hint:"The negative copula goes after noun + particle pattern.",s:"'I am NOT a teacher' in Korean: 저는 선생님이 ___.",a:"아니에요"},
        {type:"match",pairs:[{trg:"네",src:"yes"},{trg:"아니요",src:"no"},{trg:"감사합니다",src:"thank you (formal)"},{trg:"고마워요",src:"thanks (casual-polite)"}]},
        {type:"mc",q:"네 is often used in Korean conversation as a filler meaning:",opts:["Yes, I agree","I'm listening / go on","Really? / oh?","Of course / sure"],ans:"I'm listening / go on",hint:"Koreans say 네 constantly to show they're paying attention"},
        {type:"fb",opts:["이에요","예요","아니에요","네"],hint:"What is the negative form of the copula 이에요/예요?",s:"학생이에요? 아니요, 학생이 ___.\n(No, I am NOT a student.)",a:"아니에요"},
        {type:"match",pairs:[{trg:"아니에요",src:"to not be (am/is/are not)"},{trg:"이에요",src:"am / is (after consonant)"},{trg:"예요",src:"am / is (after vowel)"},{trg:"감사합니다",src:"thank you (formal)"}]},
        {type:"mc",q:"Both 감사합니다 and 안녕하세요 share the same verb root. What is it?",opts:["가다 (to go)","하다 (to do)","오다 (to come)","있다 (to exist)"],ans:"하다 (to do)",hint:"감사+합니다 and 안녕+하세요 both use 하다"}
  ]},
  {id:"kou1l4b",title:"Say NO: Korean Negation",icon:"🚫",xp:22,board:true,steps:[
        {type:"intro",title:"Three Ways to Say No",desc:"아니요 / 아니에요 / 안\n→ No / is not / not (verb)\n\nThree ways to negate.",goals:["Use 안 before verbs (choice/preference)","Use 아니에요 to say 'is not'","Preview -지 않아요 (formal negation)","Understand 안 vs 아니에요"]},
        {type:"teach",trg:"안",src:"not (pre-verb negation)",pos:"intj",gender:null,phonetic:"an",note:"안 goes directly BEFORE the verb.\n\n안 가요.\n→ I'm not going.",example:"A: 카페에 가요? B: 아니요, 안 가요.",exampleSrc:"A: Are you going to the cafe? B: No, I'm not going.",deepDive:{title:"More Examples",text:"안 먹어요.\n→ I don't eat it. (preference)\n\n안 해요.\n→ I'm not doing it.\n\nSimple rule: 안 + verb = negation.",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"tip",title:"🚫 안  -  The Simplest Negation",deepDive:{title:"More Examples",text:"안 마셔요.\n→ Don't drink.\n\n안 알아요.\n→ Don't know.\n\n안 괜찮아요.\n→ Not okay."},text:"안 is a single syllable that goes BEFORE the verb.\n\n안 가요.\n→ Not going. (choice)\n\n안 먹어요.\n→ Don't eat. (preference)"},
        {type:"mc",q:"'I'm not going' (by choice):",opts:["가요","안 가요","아니에요","없어요"],ans:"안 가요",hint:"안 before the verb = not doing"},
        {type:"fb",opts:["이","가","는","을"],hint:"Check the last letter of the word.",s:"커피___ 아니에요.\n(Not coffee.)",a:"가"},
        {type:"teach",trg:"아니에요",src:"to not be (am/is/are not)",pos:"verb",gender:null,phonetic:"a-ni-e-yo",note:"Used for NOUNS (not verbs).\nPattern: topic + noun + 이/가 + 아니에요.\n저는 학생이 아니에요.\n→ I am not a student.",example:"A: 이것은 커피예요? B: 아니에요, 커피가 아니에요.",exampleSrc:"A: Is this coffee? B: No, it's not coffee.",deepDive:{
          title:"Negative Copula Examples",
          text:"이것은 커피가 아니에요.\n→ This is not coffee.\n\n이것은 버스가 아니에요.\n→ This is not a bus.\n\n⚡ Note: 이/가 is used before 아니에요, NOT 은/는."
        ,funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"tip",title:"🔄 이에요/예요 vs 아니에요",deepDive:{
          title:"More Examples",
          text:"이것은 커피예요.\n→ This is coffee.\n\n이것은 커피가 아니에요.\n→ This is not coffee.\n\n⚠️ The negative uses 이/가 before 아니에요:\n학생이에요 → 학생이 아니에요 (same 이!)"
        },text:"Positive → Negative:\n\n저는 학생이에요.\n→ I am a student.\n\n저는 학생이 아니에요.\n→ I am NOT a student."},
        {type:"mc",q:"'This is not a taxi':",opts:["이것은 택시예요.","이것은 택시가 아니에요.","이것은 택시이에요.","이것이 없어요."],ans:"이것은 택시가 아니에요.",hint:"Noun + 가/이 + ___"},
        {type:"fb",opts:["이","가","는","를"],hint:"Check the last letter of the word.",s:"저는 선생님___ 아니에요.\n(I'm not a teacher.)",a:"이"},
        {type:"teach",trg:"-지 않아요",src:"do not (formal/emphatic negation)",pos:"verb",gender:null,phonetic:"-ji a-na-yo",note:"Formal negation pattern. Attach to verb stem.\n\n가지 않아요.\n→ I do not go. (formal)",example:"A: 커피 먹어요? B: 아니요, 먹지 않아요.",exampleSrc:"A: Do you drink coffee? B: No, I do not drink it.",deepDive:{
          title:"More Examples",
          text:"먹지 않아요.\n→ I do not eat.\n\n마시지 않아요.\n→ I do not drink.\n\nSame meaning as 안 + verb, but more formal.\n안 가요 = 가지 않아요. Choose by register."
        ,funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"tip",title:"📊 Three Negation Tools  -  At a Glance",deepDive:{
          title:"안 vs -지 않아요: When to Use Each",
          text:"안 is day-one negation. -지 않아요 is the same meaning, more formal.\n\n3. 안 + [verb]  -  'don't/not' (casual)\n안 가요.\n→ I'm not going.\n\n4. [verb] + 지 않아요  -  'do not' (formal)\n가지 않아요.\n→ I do not go.\n\n⚡ For now: 안 + verb for daily speech.\n지 않아요 comes up in writing and formal talk."
        },text:"Three ways to say 'not' in Korean:\n\n안 + verb: 안 먹어요 = do not eat (quick, casual)\n아니에요: 학생이 아니에요 = am not a student (identity)\n-지 않아요: 먹지 않아요 = do not eat (formal/emphatic)"},
        {type:"mc",q:"Which negation pattern is used for VERBS (not nouns)?",opts:["아니에요","안 + verb","이에요/예요","맞아요"],ans:"안 + verb",hint:"아니에요 negates nouns (A is not B). ... negates actions."},
        {type:"mc",q:"저는 학생이 아니에요 uses 아니에요. Why 아니에요 and not 안?",opts:["학생 is a verb (action word)","학생 is a noun (identity negation)","It is past tense (time marker)","It is formal (speech level)"],ans:"학생 is a noun (identity negation)",hint:"안 negates VERBS. 아니에요 negates ___S (am/is not)."},
        {type:"fb",opts:["에요","예요","이에요","요"],hint:"아니 is the full form. 아니 +",s:"저는 의사가 아니___.\n(I'm not a doctor.)",a:"에요"},
        {type:"match",pairs:[{trg:"안 가요",src:"Not going (choice)"},{trg:"아니에요",src:"Is not (for nouns)"},{trg:"가지 않아요",src:"Do not go (formal)"},{trg:"아니요",src:"No (standalone)"}]},
        {type:"mc",q:"저는 학생이 아니에요  -  what particle comes before 아니에요?",opts:["은/는","이/가","을/를","에"],ans:"이/가",hint:"The noun before 아니에요 takes ... (subject marker)"},
        {type:"tip",title:"🇰🇷 Real Talk: When Do Koreans Use Each?",deepDive:{
          title:"Negation in Formal vs Casual Registers",
          text:"가지 않아요, 먹지 않아요.\n→ More explicit and considered.\n\nFor noun 'is not'  -  always:\n아니에요 (no casual shortcut for this one)\n\n⚡ Start with: 안 + verb for everything. You'll see 지 않아요 later when formal endings are taught."
        },text:"Daily conversation (90% of the time):\n안 가요, 안 먹어요, 안 알아요.\n→ Short, fast, natural.\n\nFormal writing, presentations, polite emphasis:"},
        {type:"mc",q:"Same meaning as 안 먹어요:",opts:["먹어요","먹지 않아요","먹지 못해요","아니에요"],ans:"먹지 않아요",hint:"안 verb = verb + 지 ___. Same meaning."}
  ]},
  {id:"kou1l5",title:"이것은 뭐예요?",icon:"👆",xp:20,board:true,steps:[
        {type:"intro",title:"What Is This?",desc:"이것은 뭐예요?\n→ What is this?\n\nPoint at things. Name them.",goals:["Ask 'What is this?'","Answer 'This is ___'","Use 이것 (this thing)","Confirm with 맞아요 (correct)"]},
        {type:"teach",trg:"이것",src:"this thing",pos:"noun",gender:null,phonetic:"i-geot",note:"이 means this (near me).\n것 means thing.\n\n이것은 뭐예요?\n→ What is this?",example:"A: 이것은 뭐예요? B: 이것은 커피예요.",exampleSrc:"A: What is this? B: This is coffee.",deepDive:{title:"About 것",text:"것 is one of the most common Korean words.\nIt means 'thing' and appears in dozens of grammar patterns.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"뭐",src:"what",pos:"noun",gender:null,phonetic:"mwo",note:"Short form of the full question word. Much more common in daily speech.\n\n이것은 뭐예요?\n→ What is this?",example:"A: 이것은 뭐예요? B: 김치예요.",exampleSrc:"A: What is this? B: It is kimchi.",deepDive:{
          title:"뭐 vs 무엇",
          text:"뭐 is the short version of 무엇 (what).\n무엇 is formal/written. 뭐 is spoken.\nYou will almost always hear 뭐 in conversation."
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"mc",q:"이것은 뭐예요? means:",opts:["Where is this?","What is this?","Who is this?","How is this?"],ans:"What is this?",hint:"You just learned this question word. 이것은 ___ 예요?"},
        {type:"teach",trg:"네, 맞아요",src:"Yes, that's right",pos:"intj",gender:null,phonetic:"ne, ma-ja-yo",note:"맞아요: 'is correct / that's right.'\nVery useful confirmation word.\nUse it to agree with someone.",example:"A: 커피예요? B: 네, 맞아요! A: 감사합니다!",exampleSrc:"A: Is it coffee? B: Yes, that's right! A: Thank you!",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."},
        {type:"teach",trg:"아니요, 아니에요",src:"No, it's not",pos:"intj",gender:null,phonetic:"a-ni-yo, a-ni-e-yo",note:"아니요 = no (standalone rejection)\n아니에요 = is not (negation inside sentence)\n",example:"A: 택시예요? B: 아니요, 버스예요. A: 아, 버스!",exampleSrc:"A: Is it a taxi? B: No, it's a bus. A: Ah, a bus!",deepDive:{title:"아니요, 아니에요",text:"아니요, 학생이에요.\n→ No, I'm a student. (correcting someone)",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"mc",q:"Someone asks 이것은 뭐예요? pointing at your coffee. You say:",opts:["아니요.","커피예요.","감사합니다.","안녕하세요."],ans:"커피예요.",hint:"This is coffee."},
        {type:"fb",opts:["뭐","네","저","이것"],hint:"Which question word fills the blank to ask about the object?",s:"이것은 ___예요?\n(Asking 'what')",a:"뭐"},
        {type:"tip",title:"🗣️ Questions Without Question Words",deepDive:{
          title:"How Intonation Creates Questions",
          text:"Just raise your intonation at the end.\n\nThis is why L1 said: Korean questions sound like statements."
        },text:"In Korean, any statement becomes a question by raising your voice:\n\n• 커피예요. (flat tone) = It's coffee.\n• 커피예요? (rising tone) = Is it coffee?\n\nNo extra words needed. No word order change."},
        {type:"mc",q:"커피예요? (with rising intonation) means:",opts:["It's coffee.","Is it coffee?","I want coffee.","Where is coffee?"],ans:"Is it coffee?",hint:"Rising intonation = question in Korean"},
        {type:"mc",q:"커피예요? 네, 맞아요! What does 맞아요 mean?",opts:["Thank you","That's right","I don't know","Not at all"],ans:"That's right",hint:"맞다 = to be correct/___. 네, 맞아요 confirms something is true."},
        {type:"fb",opts:["버스","택시","커피","호텔"],hint:"A bus is ... (Konglish!)",s:"택시예요? 아니요, ___예요.\n(No, it's a bus.)",a:"버스"},
        {type:"teach",trg:"이거",src:"this (casual short form)",pos:"noun",gender:null,phonetic:"i-geo",note:"이거 = casual short form of 이것.\nMuch more common in daily speech.\n이거 뭐예요? = What's this? (casual but polite)",example:"A: 이거 뭐예요? B: 아이스크림이에요!",exampleSrc:"A: What's this? B: It's ice cream!",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"mc",q:"이거 is the short form of:",opts:["이것","그것","저것","무엇"],ans:"이것",hint:"이거  (this thing), just shorter"},
        {type:"fb",opts:["이에요","예요","아니에요","맞아요"],hint:"Vowel ending or consonant ending?",s:"이것은 컴퓨터___.\n(This is a computer.)",a:"예요"},
        {type:"fb",opts:["이에요","예요","아니에요","맞아요"],hint:"Vowel ending or consonant ending?",s:"이것은 호텔___.\n(This is a hotel.)",a:"이에요"},
        {type:"match",pairs:[{trg:"이것은 뭐예요?",src:"What is this?"},{trg:"네, 맞아요",src:"Yes, that's right"},{trg:"아니에요",src:"It's not / am not"},{trg:"이거",src:"this (casual)"}]},
        {type:"mc",q:"Someone shows you a photo. You point and ask what it is. You say:",opts:["이것은 뭐예요?","감사합니다","안녕하세요","아니에요"],ans:"이것은 뭐예요?",hint:"What is this?"},
        {type:"mc",q:"이것은 인터넷이에요? 아니요, 컴퓨터예요. What was the answer?",opts:["It is the internet","It's not, it's a computer","Yes, it's the internet","I don't know"],ans:"It's not, it's a computer",hint:"아니요 = no. Then the correction: 컴퓨터예요."},
        {type:"match",pairs:[{trg:"이것",src:"this thing"},{trg:"뭐",src:"what"},{trg:"맞아요",src:"correct / right"},{trg:"이거",src:"this (casual)"}]},
        {type:"mc",q:"Is this coffee? Yes, ___! (confirm)",opts:["아니에요","맞아요","뭐예요","감사합니다"],ans:"맞아요",hint:"Confirming: yes, that's right!"}
  ]},
  {id:"kou1l6",title:"어디 사람이에요?",icon:"🌍",xp:25,board:true,steps:[
        {type:"intro",title:"Nationality. Country Names Are Compounds",desc:"국\n→ country\n\nKorean words are built from reusable blocks.",goals:["Say your nationality","Learn your first building blocks","See how Korean builds words like LEGO","Understand Korean name culture"]},
        {type:"tip",title:"🏷️ Korean Names: Family Name First",deepDive:{
          title:"Korean Name Culture",
          text:"Top 5 surnames: 김 (Kim), 이 (Lee), 박 (Park), 최 (Choi), 정 (Jung).\nAbout 50% of Koreans have one of these five names.\n\nOnly about 300 family names exist in Korea\n(versus thousands in English).\n\nGiven names are usually 2 syllables,\noften with Chinese-origin meaning.\n\nMarried women keep their family name.\n\nCalling someone by first name (이름)\nwithout permission is RUDE.\n\nEven couples often use titles early in relationships.\n\nAt work: 김 대리님 (Manager Kim),\n박 과장님 (Section Chief Park).\n\nThe word 이름 appears in 이름이 뭐예요?\nbut Koreans rarely use first names in daily life."
        },text:"Korean names: FAMILY NAME first, given name second.\n\n김민수 = Kim Minsu (김 = Kim, family name)\n이지은 = Lee Jieun (이 = Lee, family name)\n박서준 = Park Seojun (박 = Park, family name)"},
        {type:"tip",title:"🧬 Sino-Korean: Your Secret Weapon",deepDive:{
          title:"Why does Korean have Chinese-origin words?",
          text:"Snap them together:\n학 (study) + 생 (person) = 학생 = student\n학 (study) + 교 (teach) = 학교 = school\n\nOne block appears in dozens of words. Learn 50 blocks, decode 500+ words.\n\nFor over a thousand years, Korea used Chinese characters for ALL writing. Korean scholars, government officials, and writers wrote exclusively in Classical Chinese.\n\nThe problem: Chinese characters are incredibly difficult to learn. Only the educated elite could read and write. Most Korean people were illiterate.\n\nIn 1443, King Sejong the Great invented Hangul specifically so that ordinary people could read and write. He said: 'A wise person can learn it in a morning, a fool in ten days.'\n\nBut even after Hangul was created, the Chinese-origin VOCABULARY stayed. Korean kept thousands of Chinese-root words, just spelled them in Hangul instead of Chinese characters.\n\nThis is why 60% of Korean words are 'Sino-Korean': the SOUNDS and MEANINGS come from Chinese, but the WRITING is pure Hangul."
        },text:"About 60% of Korean words are built from small meaning-blocks from Chinese.\n\nYou do NOT need to learn Chinese or memorize characters.\nJust learn the MEANING of each block:\n\n국 = country\n학 = study\n생 = person/life"},
        {type:"teach",trg:"한국",src:"Korea",pos:"noun",gender:null,phonetic:"han-guk",note:"SINO-KOREAN COMPOUND:\n한 (Korea) + 국 (country).\n국 appears in ALL country names.",example:"A: 어디 사람이에요? B: 저는 한국 사람이에요.",exampleSrc:"A: Where are you from? B: I am Korean.",deepDive:{title:"Using 한국",text:"Learn this block. It unlocks every country word.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},hanja:"韓+國"},
        {type:"teach",trg:"미국",src:"America (USA)",pos:"noun",gender:null,phonetic:"mi-guk",note:"SINO-KOREAN: 미 (beautiful) + 국 (country).\n'Beautiful country': the old Chinese name.\nSame building block as the Korea word.",example:"A: 미국 사람이에요? B: 네, 미국 사람이에요.",exampleSrc:"A: Are you American? B: Yes, I'm American.",hanja:"美+國",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"teach",trg:"일본",src:"Japan",pos:"noun",gender:null,phonetic:"il-bon",note:"SINO-KOREAN: 일 (sun) + 본 (origin).\n'Sun origin': Land of the Rising Sun.",example:"A: 일본 사람이에요? B: 아니요, 한국 사람이에요.",exampleSrc:"A: Are you Japanese? B: No, I'm Korean.",hanja:"日+本",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"mc",q:"미국 means:",opts:["Korea","America","Japan","China"],ans:"America",hint:"미 (beautiful) + 국 (country). Which country has this Chinese name?"},
        {type:"teach",trg:"중국",src:"China",pos:"noun",gender:null,phonetic:"jung-guk",note:"SINO-KOREAN: 중 (center) + 국 (country).\n'Center country': Middle Kingdom.\nSame 국 again!",example:"A: 중국 사람이에요? B: 네, 중국 사람이에요!",exampleSrc:"A: Are you Chinese? B: Yes, I'm Chinese!",hanja:"中+國",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"teach",trg:"사람",src:"person / people",pos:"noun",gender:null,phonetic:"sa-ram",note:"Native Korean word (not Sino-Korean).\n[country] + person = [nationality].\nSimple, consistent pattern.",example:"A: 한국 사람이에요? B: 네! A: 만나서 반갑습니다!",exampleSrc:"A: Are you Korean? B: Yes! A: Nice to meet you!",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"mc",q:"What does the 국 in 한국 mean?",opts:["Language","Person","Country","Hello"],ans:"Country",hint:"국 (國) appears in 한국, 미국, 중국. What do those all share?"},
        {type:"mc",q:"미국 literally means:",opts:["Great country","Beautiful country","Big country","New country"],ans:"Beautiful country",hint:"미 = beautiful"},
        {type:"tip",title:"🧱 국 = Country (LEGO Piece #1)",deepDive:{
          title:"국 = Country (LEGO Piece #1)",
          text:"영국 = England (영 = English + 국 = country)\n\nOne morpheme, four countries. This is the LEGO Principle.\n\n외국 = foreign country (외 = outside)\n\nONE piece, many words. Korean is LEGO."
        },text:"국 (國) = country. Your first Sino-Korean morpheme:\n\n한국 = Korea (한 = Korean + 국 = country)\n미국 = America (미 = beautiful + 국 = country)\n중국 = China (중 = middle + 국 = country)"},
        {type:"fb",opts:["한국","미국","일본","중국"],hint:"한 + 국 (country). Which country is this language from?",s:"저는 ___ 사람이에요.\n(I am a Korean person.)",a:"한국"},
        {type:"fb",opts:["사람","나라","국가","학생"],hint:"This native Korean word means an individual human being.",s:"저는 미국 ___이에요.\n(I am an American person.)",a:"사람"},
        {type:"mc",q:"How do you say 'I am Japanese'?",opts:["저는 일본 사람이에요","저는 중국 사람이에요","저는 한국 사람이에요","저는 미국 사람이에요"],ans:"저는 일본 사람이에요",hint:"Japan = 일본"},
        {type:"match",pairs:[{trg:"한국",src:"Korea"},{trg:"미국",src:"America"},{trg:"일본",src:"Japan"},{trg:"중국",src:"China"}]},
        {type:"mc",q:"Korean names put the family name:",opts:["Last","First","In the middle","It varies"],ans:"First",hint:"Korean convention."},
        {type:"mc",q:"Which three family names cover about 45% of all Koreans?",opts:["김, 이, 박","최, 정, 강","서, 윤, 조","한, 미, 중"],ans:"김, 이, 박",hint:"Kim, Lee, Park are the big three"},
        {type:"fb",opts:["한국","미국","일본","중국"],hint:"중 (center) + 국 (country). The 'Middle Kingdom.'",s:"일본 사람이에요? 아니요, ___ 사람이에요.\n(No, I'm Chinese.)",a:"중국"},
        {type:"match",pairs:[{trg:"사람",src:"person"},{trg:"국",src:"country (building block)"},{trg:"한국 사람이에요",src:"I am Korean"},{trg:"미국 사람이에요",src:"I am American"}]},
        {type:"mc",q:"중국 = 중 + 국. What does 중 mean?",opts:["Center","Big","Old","East"],ans:"Center",hint:"중국 is the 'Middle Kingdom.' Which word means 'middle'?"}
  ]},
  {id:"kou1l7",title:"만나서 반갑습니다",icon:"🤝",xp:20,board:true,steps:[
        {type:"intro",title:"Nice to Meet You",desc:"만나서 반갑습니다\n→ Nice to meet you\n\nEssential first-meeting expressions.",goals:["Say 'nice to meet you'","Ask someone's name","Use 죄송합니다 (I'm sorry)","Learn 잠시만요 (just a moment)"]},
        {type:"teach",trg:"만나서 반갑습니다",src:"Nice to meet you",pos:"intj",gender:null,phonetic:"man-na-seo ban-gap-seum-ni-da",note:"Fixed phrase. Memorize as a chunk.\nUsed in first meetings. Formal and warm.\nLiterally: 'Having met you, I'm glad.'",example:"A: 안녕하세요! 저는 민수예요. B: 안녕하세요! 만나서 반갑습니다!",exampleSrc:"A: Hello! I'm Minsu. B: Hello! Nice to meet you!",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."},
        {type:"teach",trg:"이름이 뭐예요?",src:"What is your name?",pos:"part",gender:null,phonetic:"i-reum-i mwo-ye-yo?",note:"이름\n→ name (one word)\n\n이름 + 이\n→ the 이 after it is the subject marker\n\n뭐예요\n→ what is?",example:"A: 이름이 뭐예요? B: 저는 민수예요.",exampleSrc:"A: What's your name? B: I'm Minsu.",deepDive:{
          title:"Asking Names in Korean Culture",
          text:"Koreans more often use titles than first names.\n\nAt work: position + 님 (김 과장님 = Manager Kim).\nWith friends: 이름 or nickname.\nWith strangers: avoid names entirely.\n\n이름 (name) comes from the verb 이르다 (to tell/name)."
        ,funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"mc",q:"이름이 뭐예요? means:",opts:["How are you?","Where are you from?","What is your name?","How old are you?"],ans:"What is your name?",hint:"이름 = name, 뭐 = what"},
        {type:"teach",trg:"죄송합니다",src:"I'm sorry (formal)",pos:"intj",gender:null,phonetic:"joe-song-ham-ni-da",note:"Very formal apology. Use with strangers, elders.\n죄송 (apology) + 합니다 (do formally).\nSame structure as the formal thank you!",example:"A: 죄송합니다! B: 괜찮아요!",exampleSrc:"A: I'm sorry! B: It's okay!",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."},
        {type:"teach",trg:"잠시만요",src:"Just a moment, please",pos:"noun",gender:null,phonetic:"jam-si-man-yo",note:"잠시: a moment. 만: only. 요: polite.\nUse when you need someone to wait.\nVery common in shops, restaurants, offices.",example:"A: 안녕하세요! B: 잠시만요! A: 네!",exampleSrc:"A: Hello! B: Just a moment! A: Yes!",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"괜찮아요",src:"It's okay / I'm fine",pos:"intj",gender:null,phonetic:"gwaen-chan-a-yo",note:"Three uses:\n1. 'It's okay' (responding to an apology)\n2. 'I'm fine' (when asked how you are)\n3. 'No thanks' (declining politely)",example:"A: 죄송합니다! B: 괜찮아요! A: 감사합니다.",exampleSrc:"A: I'm sorry! B: It's okay! A: Thank you.",deepDive:{
          title:"괜찮다: One Word, Many Situations",
          text:"괜찮다 is one of the most versatile Korean words.\n\nA: 죄송합니다! → B: 괜찮아요. (It's okay.)\nA: 커피 드릴까요? → B: 괜찮아요. (No thanks.)\nA: 괜찮아요? → B: 네, 괜찮아요. (Yes, I'm fine.)\n\nTone and context tell the listener which meaning you intend."
        ,funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"mc",q:"잠시만요 means:",opts:["I'm sorry","It's okay","Just a moment","Thank you"],ans:"Just a moment",hint:"잠시 = a moment, 만 = only, 요 = polite ending."},
        {type:"mc",q:"Someone introduces themselves. You respond:",opts:["감사합니다","만나서 반갑습니다","죄송합니다","안녕히 가세요"],ans:"만나서 반갑습니다",hint:"Nice to meet you"},
        {type:"mc",q:"You accidentally bump into someone on the subway. You say:",opts:["감사합니다","안녕하세요","죄송합니다","괜찮아요"],ans:"죄송합니다",hint:"Formal apology for a stranger"},
        {type:"fb",opts:["뭐","저","네","이것"],hint:"Which question word asks for unknown information?",s:"이름이 ___예요?\n(What is your name?)",a:"뭐"},
        {type:"tip",title:"🤝 The Korean First Meeting Sequence",deepDive:{
          title:"Follow-up Questions",
          text:"4. 이름이 뭐예요?\n→ What's your name?\n\n5. 어디 사람이에요?\n→ Where are you from?\n\nBow slightly when you say 만나서 반갑습니다. A small nod is enough."
        },text:"Koreans follow a predictable pattern when meeting:\n\n1. 안녕하세요! (Hello!)\n2. 저는 민수예요. (I am Minsu.)\n3. 만나서 반갑습니다! (Nice to meet you!)"},
        {type:"mc",q:"Someone says 죄송합니다 after stepping on your foot. You say:",opts:["죄송합니다","감사합니다","괜찮아요","안녕히 가세요"],ans:"괜찮아요",hint:"It's okay! (accepting the apology)"},
        {type:"fb",opts:["만나서","감사","이름이","죄송"],hint:"... = having met",s:"안녕하세요! ___ 반갑습니다!\n(Nice to meet you!)",a:"만나서"},
        {type:"mc",q:"A waiter says 잠시만요 when you enter a restaurant. This means:",opts:["Welcome!","Just a moment","Thank you","Goodbye!"],ans:"Just a moment",hint:"잠시만요: please wait a moment"},
        {type:"mc",q:"죄송합니다 uses the same compound pattern as 감사합니다. Both use:",opts:["있다 (to exist)","하다 (to do)","가다 (to go)","이다 (to be)"],ans:"하다 (to do)",hint:"Both follow the pattern: noun + 하다 = verb. 감사 + 하다, 죄송 + 하다."},
        {type:"match",pairs:[{trg:"만나서 반갑습니다",src:"nice to meet you"},{trg:"이름이 뭐예요?",src:"what's your name?"},{trg:"죄송합니다",src:"I'm sorry"},{trg:"괜찮아요",src:"it's okay"}]},
        {type:"fb",opts:["잠시만요","감사합니다","죄송합니다","안녕하세요"],hint:"Just a moment, please",s:"You need the waiter to wait. You say: ___",a:"잠시만요"},
        {type:"mc",q:"How does 괜찮아요 function when offered food you don't want?",opts:["It means yes please definitely","It means no thanks politely","It is a formal greeting only","It expresses strong dislike"],ans:"It means no thanks politely",hint:"괜찮아요 can ___ decline offers"},
        {type:"match",pairs:[{trg:"잠시만요",src:"just a moment"},{trg:"괜찮아요",src:"it's okay / no thanks"},{trg:"감사합니다",src:"thank you (formal)"},{trg:"죄송합니다",src:"I'm sorry (formal)"}]},
        {type:"mc",q:"Put the first meeting in order: A) 만나서 반갑습니다 B) 안녕하세요 C) 저는 민수예요",opts:["B → C → A","A → B → C","C → A → B","B → A → C"],ans:"B → C → A",hint:"Hello → I am 민수 → Nice to meet you"}
  ]},
  {id:"kou1l8",title:"⚠️ Konglish False Friends",icon:"⚠️",xp:20,board:true,steps:[
        {type:"intro",title:"Words That Trick You",desc:"Some Konglish sounds like English but means something DIFFERENT.",goals:["Know 5 major false friends","Understand the real Korean meanings","Learn 파이팅 and 에어컨","Never fall for the trap"]},
        {type:"teach",trg:"서비스",src:"FREE bonus / extra",pos:"noun",gender:null,phonetic:"seo-bi-seu",note:"⚠️ FALSE FRIEND: Sounds like 'service'\nActual meaning: FREE EXTRA at restaurants.\n서비스로 드릴게요: 'I'll give it as a freebie.'",example:"A: 이거 뭐예요? B: 아, 서비스예요! 많이 드세요.",exampleSrc:"A: What's this? B: Oh, it's a freebie! Please enjoy.",deepDive:{title:"Using 서비스",text:"NOT related to customer service!",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"핸드폰",src:"cellphone / mobile phone",pos:"noun",gender:null,phonetic:"haen-deu-pon",note:"⚠️ HEADS UP: 'Handphone' is Konglish.\nEnglish speakers say 'cellphone' or 'mobile.'\nKoreans won't understand 'cellphone.'",example:"A: 핸드폰 번호가 뭐예요? B: 공일공 이삼사오 육칠팔구예요.",exampleSrc:"A: What's your phone number? B: 010-2345-6789.",deepDive:{title:"Using 핸드폰",text:"핸드폰 or 스마트폰: use these.",funFact:"A Konglish loanword adapted from English. Korean has borrowed many modern and tech words."}},
        {type:"teach",trg:"바이트",src:"part-time job",pos:"noun",gender:null,phonetic:"ba-i-teu",note:"⚠️ FALSE FRIEND: NOT 'byte' (computer)!\nFrom German 'Arbeit' (work).\n바이트하다: to work part-time.",example:"A: 오늘 시간 있어요? B: 아니요, 오늘 바이트가 있어요.",exampleSrc:"A: Do you have time today? B: No, I have a part-time job today.",deepDive:{title:"Using 바이트",text:"Also written 아르바이트 (a-reu-ba-i-teu).",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"mc",q:"핸드폰 means:",opts:["FREE bonus","part-time job","cellphone","air conditioner"],ans:"cellphone",hint:"This Konglish word combines 'hand' + 'phone.'"},
        {type:"mc",q:"A restaurant gives you extra side dishes saying '서비스예요.' This means:",opts:["It's the service charge","It's free / on the house","The service is good","You should tip"],ans:"It's free / on the house",hint:"서비스 in Korean = free bonus"},
        {type:"mc",q:"바이트 in Korean means:",opts:["A unit of computer data","A part-time job","To bite something","A small amount"],ans:"A part-time job",hint:"From German 'Arbeit' (work)"},
        {type:"teach",trg:"파이팅",src:"You can do it! / Go for it!",pos:"noun",gender:null,phonetic:"pa-i-ting",note:"⚠️ HEADS UP: Sounds like 'fighting'\nbut means ENCOURAGEMENT, not violence.\nMeans ENCOURAGEMENT, not violence. Used to cheer someone on.",example:"A: 내일 시험이에요. B: 진짜요? 파이팅!",exampleSrc:"A: I have an exam tomorrow. B: Really? You can do it!",deepDive:{title:"파이팅 in Korean Culture",text:"One of the most beloved Korean expressions.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"에어컨",src:"air conditioner",pos:"noun",gender:null,phonetic:"e-eo-keon",note:"Shortened Konglish: 'air con(ditioner)'\nKoreans clip long English words:\nAir conditioner becomes a shorter word in Korean.",example:"A: 더워요! B: 에어컨 켜 주세요.",exampleSrc:"A: It's hot! B: Please turn on the AC.",deepDive:{title:"Using 에어컨",text:"remote control → 리모컨\ndigital camera → 디카",funFact:"A Konglish loanword adapted from English. Korean has borrowed many modern and tech words."}},
        {type:"mc",q:"In Korea, a cellphone is called:",opts:["셀폰","모바일","핸드폰","텔레폰"],ans:"핸드폰",hint:"Korea uses 'handphone'"},
        {type:"mc",q:"Your Korean friend says 파이팅! before your job interview. They mean:",opts:["Let's fight!","You can do it!","Be careful!","Goodbye!"],ans:"You can do it!",hint:"파이팅 = encouragement, not fighting"},
        {type:"tip",title:"✂️ Koreans Clip English Words",deepDive:{
          title:"Why Korean Prefers Short Words",
          text:"apartment → 아파트 = apt (clipped)\n\nNot all Konglish is clipped  -  편의점 = convenience store is pure Korean.\n\nThis clipping happens because Korean prefers 2-3 syllable words.\nLong Konglish gets trimmed down."
        },text:"Korean often shortens long English loanwords:\n\nAir conditioner becomes a shorter word in Korean. = A/C (clipped)\nremote control → 리모컨 = remote (clipped)\ndigital camera → 디카 = digicam (clipped)"},
        {type:"fb",opts:["바이트","서비스","파이팅","에어컨"],hint:"This false friend comes from German 'Arbeit' (work).",s:"오늘 ___가 있어요.\n(I have a part-time job today.)",a:"바이트"},
        {type:"fb",opts:["파이팅","서비스","감사합니다","안녕하세요"],hint:"This Konglish word sounds like a combat verb but means 'go for it!'",s:"시험 ___!\n(Good luck on the exam!)",a:"파이팅"},
        {type:"match",pairs:[{trg:"서비스",src:"free bonus / freebie"},{trg:"핸드폰",src:"cellphone"},{trg:"바이트",src:"part-time job"},{trg:"파이팅",src:"you can do it!"}]},
        {type:"mc",q:"에어컨 is short for:",opts:["air condition","air conditioner","air container","air concert"],ans:"air conditioner",hint:"에어(___) + 컨(con) , clipped"},
        {type:"mc",q:"At a Korean restaurant, the owner brings an extra dish and says '서비스예요!' What should you do?",opts:["Pay for the dish","Ask for the check","Thank them (it's free)","Leave a small tip"],ans:"Thank them (it's free)",hint:"서비스 = ___bie. Just say 감사합니다!"},
        {type:"fb",opts:["핸드폰","바이트","에어컨","서비스"],hint:"Korean uses 'hand' + 'phone' for this device.",s:"___ 번호가 뭐예요?\n(What's your phone number?)",a:"핸드폰"},
        {type:"match",pairs:[{trg:"에어컨",src:"air conditioner"},{trg:"파이팅",src:"encouragement"},{trg:"서비스",src:"not 'service' but 'freebie'"},{trg:"바이트",src:"not 'byte' but 'part-time job'"}]},
        {type:"tip",title:"🌏 Why False Friends Exist",text:"False friends happen because Korean borrowed the English SOUND but changed the MEANING.\n\nEnglish does this too:\n• 'Angst' in English means worry (German: deep existential dread)\n• 'Kindergarten' in English means preschool (German: literally 'children garden')\n\nEvery language reshapes borrowed words.\nKorean is no different. Just be aware of the traps!"},
        {type:"mc",q:"Which of these is NOT a false friend (meaning matches English)?",opts:["서비스 (service)","바이트 (byte)","커피 (coffee)","파이팅 (fighting)"],ans:"커피 (coffee)",hint:"커피 actually means ___. The others have shifted meanings."}
  ]},
  {id:"kou1l9",title:"First Meeting",icon:"💬",xp:20,board:true,steps:[
        {type:"intro",title:"Your First Korean Conversation",desc:"나이\n→ age\n\nYour first full conversation, plus why age matters.",goals:["Follow a full first-meeting dialogue","Know why Koreans ask your age","Use 저도 (me too)","Understand Korean age hierarchy"]},
        {type:"teach",trg:"나이",src:"age",pos:"part",gender:null,phonetic:"na-i",note:"In Korea, age shapes every social interaction.\nWho bows deeper, who pours drinks, which speech level you use.",example:"A: 나이가 어떻게 되세요? B: 스물다섯 살이에요.",exampleSrc:"A: How old are you? B: I am 25.",deepDive:{title:"나이",text:"Koreans ask age early. It's NOT rude.\nIt's NECESSARY to know how to speak to you.",funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"tip",title:"🎌 나이: Why Koreans Ask Your Age",deepDive:{
          title:"The Korean Age Hierarchy",
          text:"• Who bows deeper\n• Who pours the drink\n• Titles (형/오빠/누나/언니)\n\nIf a Korean asks your age within 5 minutes of meeting you, they're being POLITE. They want to speak to you correctly.\n\nKorean has special titles based on age and gender:\n\n형 (hyeong): older brother (said by males)\n오빠 (oppa): older brother (said by females)\n누나 (nuna): older sister (said by males)\n언니 (eonni): older sister (said by females)\n\nThese are used for ANY older person you're close to,\nnot just real siblings.\n\nA Korean born in 1990 speaking to someone born in 1988:\nthe 1990-born person speaks with more respect.\nTwo years difference changes everything.\n\nKoreans calculate age differently too.\nTraditional Korean age: you're 1 at birth and gain\na year every January 1st. Korea recently switched\nto international age for legal purposes (2023)."
        },text:"In English, asking someone's age is often rude.\nIn Korean, it's ESSENTIAL.\n\nAge determines:\n• Speech level (polite, formal, casual)"},
        {type:"mc",q:"A Korean asks your age upon first meeting. This is:",opts:["Very rude and personal","Normal: sets the speech level","Only acceptable with friends","A personal attack on privacy"],ans:"Normal: sets the speech level",hint:"Age determines how Koreans speak to each other"},
        {type:"teach",trg:"저도",src:"me too / I also",pos:"part",gender:null,phonetic:"jeo-do",note:"저: I (polite). 도: also/too (particle).\n저 → 저도 (me too).\n도 just attaches to words. Simple.",example:"A: 만나서 반갑습니다! B: 네, 저도 반갑습니다!",exampleSrc:"A: Nice to meet you! B: Yes, I'm also pleased to meet you!",deepDive:{
          title:"도 Is Everywhere",
          text:"저도요! = Me too! (instant reply)\n\n도 replaces topic/subject markers:\n저는 → 저도 (not 저는도).\n\n한국어도 좋아해요 = I also like Korean.\n커피도 주세요 = Coffee too, please."
        ,funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"teach",trg:"어디",src:"where",pos:"noun",gender:null,phonetic:"eo-di",note:"어디: where.\n어디 사람이에요? = Where person are you?\nThis means 'Where are you from?'",example:"A: 어디 사람이에요? B: 미국 사람이에요.",exampleSrc:"A: Where are you from? B: I'm American.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"잘 부탁합니다",src:"Please take care of me / Please be good to me",pos:"intj",gender:null,phonetic:"jal bu-tak-ham-ni-da",note:"Common closing phrase in first meetings.\n잘: well. 부탁: request. 합니다: do (formal).\nUsed at work, school, any new relationship.",example:"A: 저는 새 직원이에요. 잘 부탁합니다! B: 네, 반갑습니다!",exampleSrc:"A: I'm the new employee. Please take care of me! B: Yes, nice to meet you!",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."},
        {type:"mc",q:"어디 means:",opts:["where","me too","please take care of me","what"],ans:"where",hint:"This question word asks about location or origin."},
        {type:"mc",q:"저도 means:",opts:["Me too","Not me","Just me","Only me"],ans:"Me too",hint:"저 (I) + 도 (also) = me too"},
        {type:"fb",opts:["부탁합니다","감사합니다","죄송합니다","안녕하세요"],hint:"Please take care of me (formal closing)",s:"안녕하세요! 저는 민수예요. 만나서 반갑습니다! 앞으로 잘 ___.\n(Hello! I'm Minsu. Nice to meet you! Please take care of me.)",a:"부탁합니다"},
        {type:"tip",title:"💬 Full First Meeting Script",deepDive:{
          title:"Common Follow-up Questions",
          text:"어디에서 왔어요? = Where are you from?\n뭐 하세요? = What do you do?\n\nThis sequence happens in every Korean first meeting.\n\nYou know EVERY word in this dialogue."
        },text:"The standard Korean first-meeting sequence:\n\n안녕하세요! = Hello!\n저는 민수예요. = I am Minsu.\n만나서 반갑습니다. = Nice to meet you."},
        {type:"mc",q:"안녕하세요! 저는 민수예요. What did this person just do?",opts:["Asked your age","Said goodbye","Introduced themselves","Ordered coffee"],ans:"Introduced themselves",hint:"저는 민수예요 = I am Minsu"},
        {type:"mc",q:"어디 사람이에요? means:",opts:["What's your name?","Where are you from?","How old are you?","What do you do?"],ans:"Where are you from?",hint:"어디 = where, 사람 = person"},
        {type:"fb",opts:["저도","저는","이것","네"],hint:"Me too = 저 + 도",s:"네, ___반갑습니다!\n(Yes, I'm also pleased to meet you!)",a:"저도"},
        {type:"fb",opts:["어디","뭐","이름","나이"],hint:"Which question word asks about location or origin?",s:"___ 사람이에요?\n(Where are you from?)",a:"어디"},
        {type:"match",pairs:[{trg:"나이",src:"age"},{trg:"저도",src:"me too"},{trg:"어디",src:"where"},{trg:"잘 부탁합니다",src:"please take care of me"}]},
        {type:"mc",q:"When do Koreans typically say 잘 부탁합니다?",opts:["When leaving a place","When eating a meal","When meeting someone new","When saying sorry to someone"],ans:"When meeting someone new",hint:"It's a closing phrase for first ___s"},
        {type:"mc",q:"The particle 도 in 저도 means:",opts:["Not","Also / too","Very","Only"],ans:"Also / too",hint:"도 = also/too. It attaches to nouns."},
        {type:"match",pairs:[{trg:"만나서 반갑습니다",src:"nice to meet you"},{trg:"이름이 뭐예요?",src:"what's your name?"},{trg:"어디 사람이에요?",src:"where are you from?"},{trg:"잘 부탁합니다",src:"please take care of me"}]},
        {type:"mc",q:"Put the meeting phrases in natural order: A) 잘 부탁합니다 B) 안녕하세요 C) 만나서 반갑습니다 D) 저는 민수예요",opts:["B → D → C → A","A → B → C → D","D → C → B → A","B → C → D → A"],ans:"B → D → C → A",hint:"Hello → introduce yourself → nice to meet you → please take care of me"},
        {type:"fb",opts:["어디","뭐","나이","이름"],hint:"Which question word asks about location or origin?",s:"저는 미국 사람이에요. ___사람이에요?\n(Where are you from?)",a:"어디"}
  ]},
  {id:"kou1l10",title:"Review & Quiz",icon:"📝",xp:30,board:true,steps:[
        {type:"intro",title:"Greetings Review",desc:"Review everything from this unit. No surprises.",goals:["Review all vocabulary so far","Test greetings, introductions, Konglish","Decompose compound words","Prove you know the goodbye rules"]},
        {type:"mc",q:"How do you say 'hello' in Korean?",opts:["감사합니다","안녕하세요","죄송합니다","만나서 반갑습니다"],ans:"안녕하세요",hint:"'Do you have peace?'"},
        {type:"mc",q:"안녕하세요 decomposes into:",opts:["안녕 + 하 + 세요","안 + 녕 + 하세요","안녕하 + 세 + 요","All one piece"],ans:"안녕 + 하 + 세요",hint:"Peace + do + please/honorific"},
        {type:"mc",q:"감사합니다 decomposes into:",opts:["감 + 사 + 합니다","감사 + 합니다","감사합 + 니다","All one piece"],ans:"감사 + 합니다",hint:"Gratitude + do-formally"},
        {type:"fb",opts:["안녕히 가세요","안녕히 계세요","안녕하세요","안녕"],hint:"Host STAYS. Wish them to 'stay in peace.'",s:"You're leaving a Korean home. The host stays. You say: ___",a:"안녕히 계세요"},
        {type:"mc",q:"What does 서비스 ACTUALLY mean in Korean?",opts:["Customer service","Free bonus / extra","Waiter / server","Restaurant / café"],ans:"Free bonus / extra",hint:"Konglish false friend!"},
        {type:"mc",q:"한국 = 한 + 국. What does 국 mean?",opts:["Language","People","Country","Hello"],ans:"Country",hint:"한국, 미국, 중국 all end in 국. What do they all have in common?"},
        {type:"fb",opts:["이에요","예요","아니에요","입니다"],hint:"Vowel ending or consonant ending?",s:"저는 학생___.\n(I am a student.)",a:"이에요"},
        {type:"match",pairs:[{trg:"안녕하세요",src:"hello"},{trg:"감사합니다",src:"thank you"},{trg:"죄송합니다",src:"I'm sorry"},{trg:"네",src:"yes"}]},
        {type:"mc",q:"'Goodbye' to someone leaving:",opts:["안녕히 계세요","안녕히 가세요","안녕하세요","만나서 반갑습니다"],ans:"안녕히 가세요",hint:"They GO → ___ (go in peace)"},
        {type:"mc",q:"저는 밥을 먹어요. The verb 먹어요 goes:",opts:["First","After the subject","At the END","Before the object"],ans:"At the END",hint:"SOV: Subject Object Verb. Verb always last."},
        {type:"fb",opts:["이름","저는","어디","뭐"],hint:"The question asks for a name.",s:"A: ___이 뭐예요? B: 제 이름은 민수예요.\n(What is your name?)",a:"이름"},
        {type:"mc",q:"Someone points at an object and asks 이것은 뭐예요? They want to know:",opts:["Where it is","What it is","Whose it is","How much it costs"],ans:"What it is",hint:"뭐 = what. 이것 = this thing."},
        {type:"mc",q:"저는 의사가 아니에요. This means:",opts:["I am a doctor","I am not a doctor","I want to be a doctor","Where is the doctor?"],ans:"I am not a doctor",hint:"아니에요 = am not / is not"},
        {type:"fb",opts:["한국","미국","일본","중국"],hint:"한 + 국. The country whose language you are studying.",s:"미국 사람이에요? 아니요, ___ 사람이에요.\n(No, I'm Korean.)",a:"한국"},
        {type:"match",pairs:[{trg:"만나서 반갑습니다",src:"nice to meet you"},{trg:"안녕히 가세요",src:"goodbye (to leaver)"},{trg:"안녕히 계세요",src:"goodbye (to stayer)"},{trg:"괜찮아요",src:"it's okay"}]},
        {type:"mc",q:"해요체 is which type of speech?",opts:["Very formal","Casual (no -요)","Polite everyday","Written only"],ans:"Polite everyday",hint:"해요체 = the ___ register you use with most people."},
        {type:"mc",q:"In the dictionary, all Korean verbs end in:",opts:["-요","-세요","-다","-하"],ans:"-다",hint:"Dictionary form: always ..."},
        {type:"fb",opts:["괜찮아요","감사합니다","안녕하세요","만나서 반갑습니다"],hint:"When someone apologizes, you reassure them that no harm was done.",s:"Someone bumps into you and says 죄송합니다. You say: ___",a:"괜찮아요"},
        {type:"match",pairs:[{trg:"커피",src:"coffee"},{trg:"택시",src:"taxi"},{trg:"핸드폰",src:"cellphone"},{trg:"바이트",src:"part-time job"}]},
        {type:"mc",q:"김민수: which is the family name?",opts:["민수","김","민","수"],ans:"김",hint:"Korean: family name FIRST, given name second."},
        {type:"mc",q:"A Korean asks your age within 5 minutes. This is:",opts:["Rude in Korean culture","Normal in Korean culture","Only for close friends","A workplace question"],ans:"Normal in Korean culture",hint:"Age determines speech level, so ___s ask early"}
  ]}
]};
