// Korean V2 Unit 1, 안녕하세요!
// Level: A1.1

const UNIT_1 =
{n:1,lang:"ko",srcLang:"en",track:"v2",title:"안녕하세요!",sub:"Greetings, 이다 & Being",icon:"👋",level:"A1.1",color:"#FF6B6B",lessons:[
 // ═══ L1: 안녕하세요 ═══
// ═══════════════════════════════════════════════════════════
// KOREAN SEED REGISTRY. P26 AUDIT REFERENCE
// Every agent MUST read this before writing any Korean lesson.
// concept → first planted → harvest lesson
// ═══════════════════════════════════════════════════════════
// verb_stem_engine      → kou1l2b (planted)       → always active
// vowel_harmony         → kou1l2b (preview)           → kou2l2b (A1) + kou7l3 (A2 deepdive) ✅written
// haeyo_speech_level    → kou1l2 + kou3l7b         → kou9l4 (A2 deepdive) ✅harvested
// hapjyo_speech_level   → kou3l7b (recognition)    → kou9l4 (A2 production) ✅harvested
// banmal                → kou3l7b (preview)           → kou10l3 (A2) ✅harvested
// dt_irregular          → kou6l5 (preview)            → kou7l5 (A2) ✅harvested
// bp_irregular          → kou6l5 (preview)            → kou7l5 (A2) ✅harvested
// ru_eu_irregular       → kou6l5 (preview)            → kou9l7 (A2) ✅harvested
// h_irregular           → kou6l5 (preview)            → kou11l9 (B1) ✅harvested
// past_tense            → kou6l5 (preview)            → kou7l2 (A2) ✅harvested
// future_tense          → --                       → kou9l2 (A2)
// neunde_connector      → kou8l8 (preview) ✅planted  → kou13l2 (B1) ✅harvested
// go_iss_progressive    → kou9l6 (preview) ✅planted  → kou11l4 (B1) ✅harvested
// ge_dwae_change        → kou7l4 (preview) ✅planted  → kou15l4 (B1) ✅harvested
// neyo_discovery        → kou7l4 (preview) ✅planted  → kou13l5 (B1) ✅harvested
// noun_modifiers        → kou7l8 (preview) ✅planted  → kou18l5-7 (B1) ✅harvested
// ae_juda_for_someone   → kou8l4 (preview) ✅planted  → kou15l1 (B1) ✅harvested
// geo_deun_yo_reason    → kou9l5 (preview) ✅planted  → kou13l4 (B1) ✅harvested
// go_sipeo_hada_3rd     → kou9l8 (preview) ✅planted  → kou15l7 (B1) ✅harvested
// deo_rago_yo_evidential→ kou10l7 (preview) ✅planted → kou19l2 (B1) ✅harvested
// double_past_었었       → kou10l7 (preview) ✅planted → kou17l6 (B1) ✅harvested
// gi_nominalization     → kou10l8 (preview) ✅planted → kou18l1 (B1) ✅harvested
// ═══════════════════════════════════════════════════════════
// ALL 12 B1 SEEDS HARVESTED. Registry complete through B1.
// B2 seeds to be planted in U17-U20 for future harvest.
// ═══════════════════════════════════════════════════════════
 {id:"kou1l1",title:"안녕하세요",icon:"👋",xp:20,board:true,steps:[
 // ── Step 1: Intro ──
 {type:"intro",title:"안녕하세요!",desc:"안녕\n→ peace\n\nYour first Korean words. Greetings are about respect.",goals:["Say hello and goodbye in Korean","Learn two different goodbyes (leaving vs staying)","Understand how Korean differs from English","See how Korean verbs work at a high level"]},
 // ── Step 2: Teach 안녕하세요 ──
 {type:"teach",kind:"grammar",nl:"안녕하세요",en:"Hello",pos:"verb",gender:null,funFact:"Sino-Korean compound: 안녕 (peace) + 하 (do) + 세요 (please/honorific)",phonetic:"an-nyeong-ha-se-yo",example:"A: 안녕하세요! B: 안녕하세요! 만나서 반갑습니다.",exampleEn:"A: Hello! B: Hello! Nice to meet you.",note:"COMPOUND: 안녕 (peace) + 하 (do) + 세요 (please/honorific).\nLiterally: 'Do you have peace?'\nUse with EVERYONE. It's universally polite.",deepDive:{title:"The Culture Behind the Greeting",text:"Korean greetings encode respect through verb endings.\n\nThe -세요 in 안녕하세요 is the polite request form.\nYou are literally asking someone if they have peace.\n\nThis same ending appears in 주세요 (please give) and 오세요 (please come)."}},
 // ── Step 3: Tip. How Korean Is Different (rewrite plan U1-L1) ──
 {type:"tip",title:"🌏 How Korean Is Different From English",text:"A few things to know before you dive in:\n\n• Korean puts the verb LAST (you'll see this every sentence)\n• Korean has NO articles (a, the). Context tells you.\n• Korean verbs DON'T change for person (I go, you go, he goes: all the same)\n• Korean questions sound like statements (your voice just rises)\n• Korean drops subjects constantly: 'coffee exists' can mean 'I have coffee'",deepDive:{title:"The Big Picture: Korean vs English",text:"SOV vs SVO:\nEnglish: I coffee drink (weird!)\nKorean: 저는 커피를 마셔요 (I coffee drink: normal!)\nThe verb ALWAYS goes last in Korean.\n\nAgglutinative language:\nKorean snaps pieces onto verb stems.\nOne verb can carry tense + politeness + mood.\nThink of it like LEGO for grammar.\n\nContext-heavy:\nKorean trusts you to figure out who and what from context.\nNo grammatical gender. No plural markers (usually). No articles.\n\nGOOD NEWS:\nNo irregular spelling. Consistent pronunciation rules.\nEvery syllable block is pronounced. What you see is what you say."}},
 // ── Step 4: Tip  -  Korean Verbs End in -다 (rewrite plan U1-L1) ──
 {type:"tip",title:"📖 Korean Verbs End in -다",text:"Every Korean verb in the dictionary ends in -다:\n하다 (to do), 가다 (to go), 먹다 (to eat), 있다 (to exist).\n\nTo USE a verb, drop -다 and add an ending.\n하다 → 하세요 (please do).",deepDive:{title:"Why -다 Matters",text:"The ending shows politeness, tense, and mood.\nYou are learning the POLITE ending (-요) from day one.\n\nDictionary form: always ends in -다.\n\nStem: everything BEFORE -다.\n하다 → stem is 하\n가다 → stem is 가\n먹다 → stem is 먹\n있다 → stem is 있\n\nEndings snap onto the stem:\n-세요: polite request\n-이에요/예요: am/is\n-아/어요: polite present tense\n\nFor now: -다 is dictionary form, -요 means polite."}},
 // ── Step 5: MC  -  test 안녕하세요 meaning ──
 {type:"mc",q:"안녕하세요 literally means:",opts:["Do you have peace?","Good morning","How are you?","I am well"],ans:"Do you have peace?",hint:"안녕 + 하세요 (do you have / please do)"},
 // ── Step 6: Teach 안녕히 가세요 ──
 {type:"teach",kind:"phrase",nl:"안녕히 가세요",en:"Goodbye (to person leaving)",pos:"intj",gender:null,funFact:"You are wishing THEM a peaceful journey.",phonetic:"an-nyeong-hi ga-se-yo",example:"A: 선생님, 안녕히 가세요! B: 네, 안녕히 계세요!",exampleEn:"A: Teacher, goodbye! (go well) B: Yes, goodbye! (stay well)",note:"Said to someone who is LEAVING.\nYou stay, they go.\n안녕히 = peacefully, 가세요 = please go.",deepDive:{title:"The Logic",text:"You are wishing THEM a peaceful journey.\nLiterally: 'Go peacefully.'\n\n안녕히\n→ peacefully\n\n가세요\n→ please go"}},
 // ── Step 7: Teach 안녕히 계세요 ──
 {type:"teach",kind:"phrase",nl:"안녕히 계세요",en:"Goodbye (to person staying)",pos:"intj",gender:null,funFact:"You are wishing THEM a peaceful stay.",phonetic:"an-nyeong-hi gye-se-yo",example:"A: 안녕히 계세요! 감사합니다! B: 안녕히 가세요!",exampleEn:"A: Goodbye! (stay well) Thank you! B: Goodbye! (go well)",note:"Said to someone who STAYS.\nYou leave, they stay.\n안녕히 = peacefully, 계세요 = please stay.",deepDive:{title:"The Logic",text:"You are wishing THEM a peaceful stay.\nTwo goodbyes: one for the leaver, one for the stayer.\n\n안녕히\n→ peacefully\n\n계세요\n→ please stay"}},
 // ── Step 8: Teach 안녕 (casual)  -  BEFORE any quiz that uses it ──
 {type:"teach",kind:"word",nl:"안녕",en:"Hi / Bye (casual)",pos:"intj",gender:null,funFact:"Stay with 안녕하세요 until you know when 안녕 is safe to use.",phonetic:"an-nyeong",example:"A: 안녕! 내일 봐! B: 안녕! 내일 봐!",exampleEn:"A: Bye! See you tomorrow! B: Bye! See you tomorrow!",note:"Casual hello AND goodbye in one word.\nOnly use with CLOSE friends your age or younger.\n⚠️ NEVER use with strangers, elders, or at work.",deepDive:{title:"Using 안녕",text:"Stay with 안녕하세요 until you know when 안녕 is safe to use."}},
  {type:"mc",q:"안녕히 계세요 means:",opts:["Hi","Goodbye","Thank you","See you tomorrow"],ans:"Goodbye",hint:"This farewell is said to the person who stays behind."},
 // ── Step 9: Tip. Two Goodbyes + casual ──
 {type:"tip",title:"🧠 Goodbye Summary: Formal vs Casual",text:"Leaving someone who STAYS:\n안녕히 계세요 = Goodbye (you stay well)\n\nYOU are the one leaving:\n안녕히 가세요 = Goodbye (go well)",deepDive:{title:"Full Comparison",text:"BOTH leaving: either works, or just 안녕!\n잘 가 = bye (casual, to someone leaving)\n\n• 가세요 = please go\n• 계세요 = please stay\n\nThink about what the OTHER person is doing.\nThat tells you which formal goodbye to use."}},
 // ── Step 10: Tip. Bowing ──
 {type:"tip",title:"🙇 Bowing Basics",text:"Korean greetings usually come with a bow.\n\n• Slight nod (15°): friends, casual settings\n• Medium bow (30°): normal polite greeting\n• Deep bow (45°+): elders, formal situations, apologies",deepDive:{title:"When and How Deep to Bow",text:"When you say 안녕하세요, a small bow shows respect.\n\nYou don't need to bow deeply in casual settings.\nJust a gentle nod of the head is enough."}},
 // ── Step 11: MC, leaving shop ──
 {type:"mc",q:"You're leaving a shop. The shopkeeper stays. You say:",opts:["안녕히 가세요","안녕하세요","안녕히 계세요","안녕"],ans:"안녕히 계세요",hint:"THEY stay, so you wish them to 'stay in peace'"},
 // ── Step 10: MC, friend leaving ──
 {type:"mc",q:"Your friend is leaving the café. You stay. You say:",opts:["안녕히","안녕히 계세요","안녕하세요","안녕히 가세요"],ans:"안녕히 가세요",hint:"THEY go, so you wish them to 'go in peace'"},
 // ── Step 11: FB, goodbye fill-blank ──
 {type:"fb",s:"You leave the office. Your coworker stays. You say: ___",a:"안녕히 계세요",opts:["안녕히 가세요","안녕히 계세요","안녕하세요","안녕"],hint:"Your coworker STAYS. Wish them to 'stay in peace.'"},
 // ── Step 12: MC, who says which (conceptual angle) ──
 {type:"mc",q:"가세요 in 안녕히 가세요 means 'please go.' You say this to someone who is:",opts:["Leaving","Staying behind","Arriving","Sleeping"],ans:"Leaving",hint:"가 = go. You wish the LEAVER to go in peace."},
 // ── Step 15: MC  -  when is 안녕 OK ──
 {type:"mc",q:"안녕 (casual) is appropriate when talking to:",opts:["Your boss","A close friend your age","A stranger on the street","Your friend's grandmother"],ans:"A close friend your age",hint:"안녕 is casual. Safe only with peers you know well, typically your own generation or younger."},
 // ── Step 16: FB, greeting your teacher ──
 {type:"fb",s:"A student greets their teacher in the morning: ___",a:"안녕하세요",opts:["안녕","안녕하세요","안녕히 가세요","안녕히 계세요"],hint:"A teacher is senior. Use the polite, universal greeting."},
 // ── Step 17: Match, all four greetings ──
 {type:"match",pairs:[{nl:"안녕하세요",en:"Hello (polite)"},{nl:"안녕히 가세요",en:"Goodbye (to leaver)"},{nl:"안녕히 계세요",en:"Goodbye (to stayer)"},{nl:"안녕",en:"Hi / Bye (casual)"}]},
 // ── Step 18: MC  -  tests -다 tip ──
 {type:"mc",q:"In the dictionary, Korean verbs always end in:",opts:["-요","-세요","-다","-하"],ans:"-다",hint:"All Korean verbs share the same dictionary ending. Which one?"},
 // ── Step 19: FB, both leaving ──
 {type:"fb",s:"Two friends part ways on the street. Both are leaving. They both say: ___",a:"안녕히 가세요",opts:["안녕히 가세요","안녕히 계세요","안녕하세요","안녕"],hint:"Both are GOING. Each wishes the other to 'go in peace.'"},
 // ── Step 20: MC, tests verb-last from tip ──
 {type:"mc",q:"In Korean sentences, the verb goes:",opts:["At the beginning","In the middle","Before the subject","At the END"],ans:"At the END",hint:"Korean is a verb-last language. Subject first, verb last."},
 // ── Step 21: Match, scenario-based ──
 {type:"match",pairs:[{nl:"Meeting someone for the first time",en:"안녕하세요"},{nl:"Your friend leaves, you stay",en:"안녕히 가세요"},{nl:"You leave, host stays",en:"안녕히 계세요"},{nl:"Texting a close friend",en:"안녕"}]},
 // ── Step 22: MC, boss checkpoint ──
 {type:"mc",q:"You visit a Korean home. The host greets you with 안녕하세요. After tea, you leave. The host stays. What do you say as you go?",opts:["안녕히 계세요","안녕히 가세요","안녕하세요","안녕"],ans:"안녕히 계세요",hint:"You are LEAVING, the host STAYS. Wish them to stay in peace."},
 ]},

 // ═══ L2: 저는 ___이에요 ═══
 {id:"kou1l2",title:"저는 ___이에요/예요",icon:"🧑",xp:20,board:true,steps:[
 {type:"intro",title:"I Am ___",desc:"저는 사라예요.\n→ I am Sara.\n\nThe verb goes at the END.",goals:["Say 'I am (your name)'","Use 이에요/예요 (am/is)","Understand the topic marker 은/는","Learn about Korean politeness levels"]},
 {type:"teach",kind:"word",nl:"저",en:"I / me (polite)",pos:"pron",gender:null,funFact:"Use with everyone.",phonetic:"jeo",example:"A: 저는 사라예요. B: 안녕하세요, 사라!",exampleEn:"A: I am Sara. B: Hello, Sara!",note:"Polite 'I'. Use with everyone.\nThe casual form is taught in a later lesson.\nAlways use this polite form until then."},
 {type:"teach",kind:"grammar",nl:"는 / 은",en:"(topic marker)",pos:"part",gender:null,funFact:"The topic marker. Sets the stage for what the sentence is about. Korean uses particles where English uses word order.",phonetic:"neun / eun",example:"A: 저는 민수예요. B: 저는 사라예요. A: 만나서 반갑습니다!",exampleEn:"A: I am Minsu. B: I am Sara. A: Nice to meet you!",note:"Marks what we're talking about.\n\n저는\n→ after a vowel\n\n학생은\n→ after a consonant",deepDive:{title:"Full Pattern",text:"Don't overthink it yet. Just copy the pattern.\nThis gets a proper name later."}},
 // P42 tip: "You're Speaking Politely (해요체)"
 {type:"tip",title:"해요체: 🎀 You're Speaking Politely",text:"Every -요 ending you have learned is 해요체 (polite casual).\n가요 (go), 먹어요 (eat), 있어요 (have).\n\n해요체 is safe for 95% of daily situations.\nPolite but not stiff. Perfect for stores, cafés, new people.",deepDive:{title:"Why Politeness Is Built Into Korean Grammar",text:"English uses WORDS for politeness: 'Can you please pass the salt?'\n\nKorean uses VERB ENDINGS (grammar, not vocabulary).\nSame sentence, different ending = different respect level.\n\nAge determines EVERYTHING:\nWho speaks first, which ending you use.\nThis is why Koreans ask your age immediately.\nIt's not rude. It's NECESSARY to know which verb endings to use with you.\n\n해요체 (-요 ending): safe with literally everyone.\n반말 (no -요): friends your age, younger people, NEVER strangers."}},
 {type:"teach",kind:"grammar",nl:"이에요 / 예요",en:"am / is / are",pos:"aux",gender:null,funFact:"Marks location or time. One particle, two jobs. Context tells you which.",phonetic:"i-e-yo / ye-yo",example:"A: 학생이에요? B: 네, 저는 학생이에요. A: 저는 선생님이에요.",exampleEn:"A: Are you a student? B: Yes, I am a student. A: I am a teacher.",note:"After a consonant ending:\n학생이에요.\n→ I am a student.",deepDive:{title:"The Rule",text:"The verb goes at the END. Always.\n엠마예요.\n→ I am Emma.\n\nThe verb goes at the END. Always. -요 = polite marker."}},
 {type:"tip",title:"🔍 SOV: Verb Goes Last",text:"Every sentence you've seen so far:\n\n저는 사라예요. (I am Sara.)\n저는 학생이에요. (I am a student.)\n\nSubject, then VERB (last).\n",deepDive:{title:"Why Verb-Last Feels Natural",text:"This is how Korean works. The verb ALWAYS goes at the end.\nYou'll see this in every single lesson.\n\nBonus: 저는 is often dropped in casual speech.\n사라예요 alone means 'I'm Sara' from context."}},
 {type:"fb",s:"저는 사라{1}.\n(Sara)",a:"예요",opts:["예요","이에요"],hint:"The last letter of 사라 is a vowel. Which ending fits?"},
 {type:"fb",s:"I am a student: 저는 학생{1}.",a:"이에요",opts:["예요","이에요"],hint:"The last letter of 학생 is a consonant. Which ending fits?"},
 {type:"fb",s:"저는 민수{1}.\n(Minsu)",a:"예요",opts:["예요","이에요"],hint:"The last letter of 민수 is a vowel. Which ending fits?"},
 {type:"fb",s:"저는 엠마___.\n(I am Emma ___.)",a:"예요",opts:["이에요","예요"],hint:"Check the last letter. Vowel or consonant?"},
 {type:"fb",s:"저는 선생님___.\n(I am a teacher ___.)",a:"이에요",opts:["이에요","예요"],hint:"Vowel ending or consonant ending?"},
 {type:"mc",q:"The -요 at the end of 이에요 shows that you are being:",opts:["Casual","Formal-written","Angry","Polite"],ans:"Polite",hint:"The ending -요 signals a specific speech register you learned about."},
 {type:"mc",q:"Which marker goes after 저 to mean 'as for me'?",opts:["는","은","이","가"],ans:"는",hint:"Does the word end in a vowel or consonant?"},
 {type:"mc",q:"In casual speech, Koreans often drop 저는. So '사라예요' by itself means:",opts:["Sara is here","I am Sara","Where is Sara?","Sara says hello"],ans:"I am Sara",hint:"When 저는 is dropped, context tells you who is speaking."},
 {type:"mc",q:"What is the predicate that completes an identity statement like '저는 학생___'?",opts:["저","는","이에요","학생"],ans:"이에요",hint:"The verb is at the END of the sentence. What comes last?"},
 {type:"fb",s:"___는 학생이에요.\n(I am a student.)",a:"저",opts:["저","이","가","는"],hint:"The polite word for 'I' goes here."},
 {type:"match",pairs:[{nl:"저",en:"I / me (polite)"},{nl:"는 / 은",en:"topic marker"},{nl:"이에요",en:"am/is (after consonant)"},{nl:"예요",en:"am/is (after vowel)"}]},
 {type:"mc",q:"Korean has how many speech levels?",opts:["2","4","10","7"],ans:"7",hint:"Korean has multiple levels of politeness, each with its own verb endings."},
 {type:"mc",q:"저는 엠마예요. Why 예요 and not 이에요?",opts:["엠마 ends in a vowel (ㅏ)","엠마 is a foreign name","엠마 is short","It doesn't matter"],ans:"엠마 ends in a vowel (ㅏ)",hint:"Check the last letter of the previous word."},
 {type:"match",pairs:[{nl:"저는 사라예요",en:"I am Sara"},{nl:"저는 학생이에요",en:"I am a student"},{nl:"저는 민수예요",en:"I am Minsu"},{nl:"저는 선생님이에요",en:"I am a teacher"}]},
 {type:"mc",q:"To introduce yourself, say your name then:",opts:["하세요","이에요 or 예요","있어요","없어요"],ans:"이에요 or 예요",hint:"Check what the word before it ends with."},
 ]},

 // ═══ L2b: ★ THE VERB ENGINE. Stem + Ending = Everything ═══
 {id:"kou1l2b",title:"★ The Verb Engine",icon:"🚂",xp:25,board:true,steps:[
  {type:"intro",title:"How Korean Verbs Actually Work",desc:"이에요 / 가세요 / 있어요\n→ verbs you already know\n\nHow are they built? One system behind every verb.",goals:["See how every Korean verb is built from two parts","Understand what the stem is","See why -요 makes speech polite","Recognise the 하다 verb family that unlocks hundreds of words"]},

  {type:"teach",kind:"grammar",nl:"가다 → 가요",en:"to go → go (polite)",pos:"part",gender:null,funFact:"Korean verbs conjugate by changing the stem ending. 가다 (to go, dictionary form) drops 다 and adds 요 for polite speech. The 요 ending is one of Korean's most-used markers.",phonetic:"ga-da → ga-yo",example:"A: 어디에 가요? B: 학교에 가요.",exampleEn:"A: Where are you going? B: I am going to school.",note:"Every dictionary verb ends in the same suffix.\nDrop that suffix to find the stem. Add an ending.\n\n가다\n→ stem: 가\n→ polite present: 가요",deepDive:{title:"The Stem + Ending System",text:"The stem carries the meaning.\nThe ending carries politeness, tense, and mood.\nThis is how EVERY Korean verb works:\ndictionary form → drop the suffix → add ending."}},

  {type:"teach",kind:"phrase",nl:"먹다 → 먹어요",en:"to eat → eat (polite)",pos:"verb",gender:null,funFact:"Two things happening:.",phonetic:"meok-da → meo-geo-yo",example:"A: 뭐 먹어요? B: 밥 먹어요.",exampleEn:"A: What are you eating? B: I am eating rice.",note:"Every dictionary verb ends in the same suffix.\nDrop it to find the stem.\n\n먹다\n→ stem: 먹\n→ polite present: 먹어요",deepDive:{title:"Why -어요?",text:"Two things happening:\n1. The stem 먹 ends in a consonant, so it needs a connecting vowel.\n2. The vowel in 먹 is ㅓ (dark), so the connector is -어.\n\n⚡ Why -어요 here but -아요 elsewhere?\nThere's a rule. You'll see it in a later lesson. For now: Bright vowels take -아, dark vowels take -어. a later lesson names this rule."}},

  {type:"teach",kind:"phrase",nl:"하다 → 해요",en:"to do → do (polite)",pos:"verb",gender:null,funFact:"This single pattern unlocks hundreds of words.",phonetic:"ha-da → hae-yo",example:"A: 뭐 해요? B: 공부해요.",exampleEn:"A: What are you doing? B: I am studying.",note:"하다 is the MOST important Korean verb.\n\n하다 → 해요 (always)\n→ Special contraction. No exceptions.",deepDive:{title:"Conjugating 하다",text:"하다 snaps onto nouns to create verb phrases:\n공부 (study) + 하다 = 공부하다 → 공부해요\n운동 (exercise) + 하다 = 운동하다 → 운동해요\n일 (work) + 하다 = 일하다 → 일해요\n요리 (cooking) + 하다 = 요리하다 → 요리해요\n\n⚡ LEGO: Every noun + 하다 = verb. This single pattern unlocks hundreds of words."}},
  {type:"mc",q:"먹다 means:",opts:["to eat","to drink","to do","to exist"],ans:"to eat",hint:"This verb was taught with the example 밥 먹어요."},

  {type:"tip",title:"🚂 The Train Metaphor",text:"Think of every Korean verb as a TRAIN:\n\n🚂 STEM = the engine (carries the meaning)\n🚃 ENDING = the car that snaps on\n\n가다 → 가요 (go, politely)\n먹다 → 먹어요 (eat, politely)\n하다 → 해요 (do, politely)",deepDive:{title:"Why This Is Better Than Memorising",text:"Right now you only have ONE car: -요 (the politeness car).\nSoon you'll add more cars:\n🚃 Past tense car: -었/았어요\n🚃 Future car: -(으)ㄹ 거예요\n🚃 Request car: -(으)세요\n\nSame engine. Different cars. That's Korean.\n\nWithout the engine:\n먹어요, 가요, 해요 = memorised chunks.\n\nWith the engine:\nSTEM → ENDING = infinite verbs.\n\nYou just saw 하다 attaches to nouns:\n산책하다 (take a walk) → 산책해요\n전화하다 (phone someone) → 전화해요\n사랑하다 (to love) → 사랑해요\n\nYou can now form verbs you've NEVER SEEN.\nThat's the difference between memorising and generating."}},

  {type:"mc",q:"Which part of the verb 'to eat' remains after stripping the dictionary suffix?",opts:["먹다","먹","먹어","다"],ans:"먹",hint:"Strip -다 from the dictionary form. What remains is the stem."},

  {type:"mc",q:"Which part of the verb 'to go' remains after stripping the dictionary suffix?",opts:["가다","가요","가","요"],ans:"가",hint:"Strip the dictionary suffix to find the stem."},

  {type:"mc",q:"하다 → 해요. The -요 signals:",opts:["Past tense","Future","A question","Politeness (해요체)"],ans:"Politeness (해요체)",hint:"The ending on polite verbs signals a specific speech register used in daily conversation."},

  {type:"mc",q:"공부 (study) + 하다 = ?",opts:["공부해요","공부가요","공부요","공부어요"],ans:"공부해요",hint:"Noun + 하다 compounds always conjugate one way."},

  {type:"fb",s:"운동___\n(I exercise  -  polite present)",a:"해요",opts:["해요","하요","하아요","하이요"],hint:"하다 compounds always conjugate as 해요. No exceptions."},

  {type:"fb",s:"어디에 ___?\n(Where are you going?)",a:"가요",opts:["가요","가어요","가다","갑니다"],hint:"가다 stem is 가. Bright vowel ㅏ merges directly with the polite ending."},

  {type:"teach",kind:"phrase",nl:"있다 → 있어요",en:"to exist / to have → exists (polite)",pos:"verb",gender:null,funFact:"Both have dark vowels → always -어요.",phonetic:"it-da → i-sseo-yo",example:"A: 커피 있어요? B: 네, 있어요! A: 감사합니다!",exampleEn:"A: Is there coffee? B: Yes, there is! A: Thank you!",note:"Drop the suffix to find the stem.\n\n있다\n→ stem: 있\n→ polite present: 있어요\n→ there is / I have (polite).",deepDive:{title:"Conjugating 있다",text:"없다 → stem: 없\n없 + 어요 = 없어요 (don't have / don't exist) ✓\n\nBoth have dark vowels → always -어요."}},

  {type:"mc",q:"Remove the dictionary suffix from the existence verb. What bare stem remains?",opts:["있다","있","있어","어요"],ans:"있",hint:"The dictionary form ends in -다. What is left after removing it?"},

  {type:"mc",q:"Which of these is NOT a 하다 verb?",opts:["공부하다","운동하다","가다","요리하다"],ans:"가다",hint:"... = to go. It is its own verb. 공부/운동/요리 all attach 하다."},

  {type:"tip",title:"📋 The Three Patterns You've Seen",text:"Every verb you've used fits one of these:\n\n가다 → 가요 (bright vowel ㅏ: merges with -아요)\n먹다 → 먹어요 (dark vowel ㅓ: takes -어요)\n하다 → 해요 (always, no exceptions)",deepDive:{title:"Why -어요 and Not -아요?",text:"You may have noticed: 먹어요, 있어요 all use -어요.\nBut 가요 doesn't use -어 at all.\n\nThere's a rule behind this. It's called vowel harmony.\nBright vowels (ㅏ ㅗ) take -아요.\nDark vowels (everything else) take -어요.\n\n가다: stem 가, vowel ㅏ is bright → merges to 가요.\n먹다: stem 먹, vowel ㅓ is dark → 먹어요.\n공부하다 → 공부해요.\n\nThe full rule comes in a later lesson. For now: just see the three patterns."}},

  {type:"match",pairs:[{nl:"가다",en:"to go"},{nl:"먹다",en:"to eat"},{nl:"하다",en:"to do"},{nl:"있다",en:"to exist"}]},

  {type:"drag_fill",s:"저는 학교에 {1}. 밥 {2}. 공부 {3}.",blanks:{"1":"가요","2":"먹어요","3":"해요"},pool:["가요","먹어요","해요","가다","먹다"],hint:"Match each verb to its polite form: go, eat, study."},

  {type:"mc",q:"You want to say 'I exercise' (운동). Which is correct?",opts:["운동요","운동어요","운동가요","운동해요"],ans:"운동해요",hint:"This is a 하다 compound. One rule, always."},

  {type:"mc",q:"What is the base form of the copula before the polite ending is added?",opts:["이","이에","이에요","예"],ans:"이",hint:"The copula follows the same stem + ending logic."},

  {type:"tip",title:"🎯 What You Can Now Do",text:"With just STEM + ENDING you can now:\n\n✅ Form ANY regular verb in polite present tense\n✅ Understand that -요 = polite register (해요체)\n✅ Generate 하다 verbs you've never seen before",deepDive:{title:"Think Like a Polyglot",text:"✅ Analyse every verb you encounter: stem? ending? what does each part do?\n\n\nThis is how a polyglot thinks.\nNot: 'I memorised this phrase.'\nBut: 'I see stem 먹, I know what it means, I know what -어요 does, I can build this form myself.'\n\nThe rule for -아요 vs -어요 comes next.\nFor now: the engine is running. 🚂"}},
 ]},


 // ═══ L3: Konglish Blitz ═══
 {id:"kou1l3",title:"Konglish Blitz. Free Vocab!",icon:"🎁",xp:20,board:true,steps:[
 {type:"intro",title:"Free Vocabulary!",desc:"Korean borrowed hundreds of English words. FREE vocabulary!",goals:["Recognize 8+ Konglish words","Read English words in Hangul","Understand Korean-ified pronunciation","Know what Konglish is"]},
 {type:"teach",kind:"word",nl:"커피",en:"coffee ☕",pos:"noun",gender:null,funFact:"Loanword from English \"coffee.\" Korean adapted it using Hangul phonetics.",phonetic:"keo-pi",example:"A: 뭐 드릴까요? B: 커피 주세요.",exampleEn:"A: What can I get you? B: Coffee, please.",note:"From English coffee. Just read the Hangul."},
 {type:"teach",kind:"word",nl:"택시",en:"taxi 🚕",pos:"noun",gender:null,funFact:"Loanword from English \"taxi.\" Korean adapted it using Hangul phonetics.",phonetic:"taek-si",example:"A: 택시를 타요? B: 네, 택시를 타요.",exampleEn:"A: Are you taking a taxi? B: Yes, I'm taking a taxi.",note:"From English taxi. Sounds almost identical."},
 {type:"teach",kind:"word",nl:"버스",en:"bus 🚌",pos:"noun",gender:null,funFact:"Loanword from English \"bus.\" Korean adapted it using Hangul phonetics.",phonetic:"beo-seu",example:"A: 버스가 와요? B: 네, 버스가 와요!",exampleEn:"A: Is the bus coming? B: Yes, the bus is coming!",note:"From English bus. Pronunciation shifts slightly in Korean."},
  {type:"mc",q:"택시 means:",opts:["taxi 🚕","coffee ☕","bus 🚌","hotel 🏨"],ans:"taxi 🚕",hint:"This Konglish word sounds like the English word for a car you hail."},
 {type:"teach",kind:"word",nl:"컴퓨터",en:"computer 💻",pos:"noun",gender:null,funFact:"Loanword from English \"computer.\" Korean adapted it using Hangul phonetics.",phonetic:"keom-pyu-teo",example:"A: 컴퓨터가 있어요? B: 네, 있어요!",exampleEn:"A: Is there a computer? B: Yes, there is!",note:"From English computer. Five syllable blocks in Korean."},
 {type:"mc",q:"커피 in English is:",opts:["tea","coffee","water","juice"],ans:"coffee",hint:"Read the Hangul: 커 (keo) + 피 (pi)"},
 {type:"mc",q:"How many syllable blocks does 컴퓨터 have?",opts:["2","4","3","5"],ans:"3",hint:"컴 + 퓨 + 터 = 3 blocks"},
 {type:"teach",kind:"word",nl:"호텔",en:"hotel 🏨",pos:"noun",gender:null,funFact:"Loanword from English \"hotel.\" Korean adapted it using Hangul phonetics.",phonetic:"ho-tel",example:"A: 호텔이 어디예요? B: 저기요.",exampleEn:"A: Where is the hotel? B: Over there.",note:"From English hotel. Very close pronunciation."},
 {type:"teach",kind:"word",nl:"카페",en:"cafe ☕",pos:"noun",gender:null,funFact:"Loanword from English \"cafe.\" Korean adapted it using Hangul phonetics.",phonetic:"ka-pe",example:"A: 카페에 가요? B: 네, 커피 먹어요! A: 저도 가요!",exampleEn:"A: Are you going to the cafe? B: Yes, having coffee! A: I'm going too!",note:"From English café. Korea has one of the highest\ncafé densities in the world!"},
 {type:"teach",kind:"word",nl:"아이스크림",en:"ice cream 🍦",pos:"noun",gender:null,funFact:"Loanword from English \"ice cream.\" Korean adapted it using Hangul phonetics.",phonetic:"a-i-seu-keu-rim",example:"A: 아이스크림 먹어요? B: 네, 먹어요! A: 저도요!",exampleEn:"A: Are you eating ice cream? B: Yes! A: Me too!",note:"From English ice cream. Five syllable blocks."},
  {type:"mc",q:"카페 means:",opts:["hotel 🏨","computer 💻","ice cream 🍦","cafe ☕"],ans:"cafe ☕",hint:"A place where you drink 커피. Borrowed from French/English."},
 {type:"teach",kind:"word",nl:"인터넷",en:"internet 🌐",pos:"noun",gender:null,funFact:"Loanword from English \"internet.\" Korean adapted it using Hangul phonetics.",phonetic:"in-teo-net",example:"A: 인터넷이 있어요? B: 네, 있어요.",exampleEn:"A: Is there internet? B: Yes, there is.",note:"From English internet. Three syllable blocks."},
 {type:"tip",title:"💡 Konglish = Free Words",text:"Korean has hundreds of English loanwords (콩글리시 = Konglish).\n\n커피  택시  버스  호텔  카페\n케이크  초콜릿  카메라  피아노\n\nThe catch: pronunciation is Korean-ified.\n'Computer' → 컴퓨터 (keom-pyu-teo)\n",deepDive:{title:"Korean-ified Pronunciation Matters",text:"Read the Hangul to get the Korean pronunciation.\nDon't use the English pronunciation. Koreans won't understand!"}},
 {type:"match",pairs:[{nl:"커피",en:"coffee"},{nl:"택시",en:"taxi"},{nl:"버스",en:"bus"},{nl:"호텔",en:"hotel"}]},
 {type:"mc",q:"아이스크림 has how many syllable blocks?",opts:["5","4","3","6"],ans:"5",hint:"아-이-스-크-림: count each block"},
 {type:"mc",q:"Which word means 'cafe'?",opts:["커피","카페","택시","호텔"],ans:"카페",hint:"Sounds like 'ka-pe'"},
 {type:"fb",s:"___ is the Konglish word for 'computer'",a:"컴퓨터",opts:["컴퓨터","인터넷","호텔","카페"],hint:"3 syllable blocks: 컴+퓨+터"},
 {type:"fb",s:"___를 타요.\n(I take a taxi.)",a:"택시",opts:["택시","버스","커피","호텔"],hint:"What vehicle sounds like 'taek-si'?"},
 {type:"tip",title:"🔊 Why Pronunciation Changes",text:"Korean spelling and pronunciation sometimes differ:\n\n받침 + vowel → the 받침 moves forward:\n먹어요 sounds like [머거요] = eat\n없어요 sounds like [업서요] = do not have",deepDive:{title:"연음 (Linking) in Natural Speech",text:"This is called 연음 (linking). It is automatic in natural speech.\nThe spelling stays the same, only the sound shifts."}},
 {type:"match",pairs:[{nl:"카페",en:"cafe"},{nl:"인터넷",en:"internet"},{nl:"아이스크림",en:"ice cream"},{nl:"컴퓨터",en:"computer"}]},
 {type:"mc",q:"You're in Seoul and want to find a hotel. You ask: ___이 어디예요?",opts:["버스","커피","호텔","택시"],ans:"호텔",hint:"Which Konglish word means 'hotel'?"},
 {type:"mc",q:"Why should you NOT use English pronunciation for Konglish words?",opts:["It is perfectly fine to do so","English is widely understood","It sounds more natural to them","Koreans will not understand"],ans:"Koreans will not understand",hint:"Konglish uses Korean-ified sounds, not English sounds"},
 {type:"fb",s:"___에 가요.\n(I go to the cafe.)",a:"카페",opts:["카페","커피","호텔","택시"],hint:"The place where you drink coffee: ..."},
 ]},

 // ═══ L4: 네/아니요, 감사합니다 ═══
 {id:"kou1l4",title:"네 / 아니요 / 감사합니다",icon:"🙏",xp:20,board:true,steps:[
 {type:"intro",title:"Yes, No & Thank You",desc:"감사합니다\n→ thank you (formal)\n\nThree survival words, decomposed into parts.",goals:["Say yes (네) and no (아니요)","Say thank you (formal and casual)","Use 아니에요 (am not / is not)","Decompose 감사합니다 into compound parts"]},
 {type:"teach",kind:"word",nl:"네",en:"Yes",pos:"intj",gender:null,funFact:"Often sounds like 'de' in fast speech.",phonetic:"ne",example:"A: 학생이에요? B: 네, 학생이에요.",exampleEn:"A: Are you a student? B: Yes, I am a student.",note:"Often sounds like 'de' in fast speech.\nVery common. You'll hear it constantly\nas a conversation filler meaning 'uh-huh, I'm listening.'"},
 {type:"teach",kind:"grammar",nl:"아니요",en:"No",pos:"part",gender:null,funFact:"\"Try doing.\" 먹어 보세요 = please try eating it. Common recommendation pattern.",phonetic:"a-ni-yo",example:"A: 선생님이에요? B: 아니요, 학생이에요.",exampleEn:"A: Are you a teacher? B: No, I'm a student.",note:"Polite 'no'.\n아니에요: 'am not / is not'. The negative of 이에요/예요.",deepDive:{title:"아니요 vs 아니에요",text:"아니요: standalone 'no' (answering a yes/no question).\n아니에요: 'am not / is not' (negating identity).\n\n학생이에요? 아니요, 의사예요.\nAre you a student? No, I am a doctor."}},
 {type:"mc",q:"Someone asks if you're a teacher. You're not. You say:",opts:["아니요","네","안녕히 가세요","안녕하세요"],ans:"아니요",hint:"You are NOT a teacher."},
 {type:"teach",kind:"grammar",nl:"아니에요",en:"to not be (am/is/are not)",pos:"aux",gender:null,funFact:"Marks location or time. One particle, two jobs. Context tells you which.",phonetic:"a-ni-e-yo",example:"A: 의사예요? B: 아니에요, 학생이에요. A: 아, 네!",exampleEn:"A: Are you a doctor? B: No, I'm a student. A: Ah, yes!",note:"아니에요 = am not, is not, are not.\n학생이 아니에요.\n→ (I) am not a student.",deepDive:{title:"The Negative Copula Pattern",text:"Pattern: 의사가 아니에요.\n→ is not a doctor.\n\n학생이 아니에요.\n→ (I) am not a student.\n\n⚡ Note: 이/가 goes before 아니에요, NOT 은/는."}},
 {type:"tip",title:"🔄 이에요 vs 아니에요",text:"Positive: 저는 학생이에요. = I am a student.\nNegative: 저는 학생이 아니에요. = I am not a student.\n\n이에요/예요 = am / is (after consonant/vowel)\n아니에요 = am not / is not",deepDive:{title:"Full Comparison",text:"Notice: the negative uses 이/가 before 아니에요, not 은/는."}},
 {type:"mc",q:"저는 학생이 아니에요 means:",opts:["I am a student","I am not a student","I like students","Students are here"],ans:"I am not a student",hint:"아니에요 = am not"},
 {type:"fb",s:"저는 의사가 ___.\n(I am not a doctor.)",a:"아니에요",opts:["이에요","예요","아니에요","아니요"],hint:"This is the negative form of the copula 이에요/예요."},
 {type:"teach",kind:"word",nl:"감사합니다",en:"Thank you (formal)",pos:"intj",gender:null,funFact:"Sino-Korean compound: 감사 (gratitude) + 합니다 (do-formally)",phonetic:"gam-sa-ham-ni-da",example:"A: 커피예요. B: 감사합니다! A: 네!",exampleEn:"A: Here's your coffee. B: Thank you! A: Yes! (You're welcome!)",note:"COMPOUND: 감사 (gratitude) + 합니다 (do-formally).\nLiterally: 'I do gratitude.'\n합니다 → pronounced [함니다]\nNasalization: ㅂ becomes ㅁ before ㄴ.",deepDive:{title:"Why 합 Sounds Like 함",text:"This is called nasalization.\nWhen ㅂ meets ㄴ, it becomes ㅁ:\n합 + 니 → 함니 (hab-ni → ham-ni)\n\nYou learned this in the Hangul sound rules.\nYou'll hear this in 합쇼체 (formal speech) constantly."}},
 {type:"teach",kind:"grammar",nl:"고마워요",en:"Thanks (casual-polite)",pos:"part",gender:null,funFact:"Casual-polite thanks. From 고맙다 (to be thankful). Softer than 감사합니다 (formal). Use with peers and people you know; 감사합니다 with strangers and superiors.",phonetic:"go-ma-wo-yo",example:"A: 이거 줄게요! B: 고마워요!",exampleEn:"A: I'll give you this! B: Thanks!",note:"The casual-polite version of 감사합니다.\nUse with friends, peers, people your age.\nStill polite: -요 ending.",deepDive:{title:"감사합니다 vs 고마워요",text:"감사합니다: formal. Use with elders, strangers, service.\n고마워요: casual-polite. Use with friends, peers.\n\nBoth mean 'thank you'. Different levels of formality.\n\n고맙습니다: slightly less stiff than 감사합니다, but still formal.\nYou'll hear all three. For now, use 감사합니다 for formal and 고마워요 for casual."}},
 {type:"tip",title:"🧱 Compound Pattern: noun → 하다 verb",text:"Many Korean verbs are noun + 하다 (to do):\n\n공부 (study) → 공부하다 (to study) → 공부해요 (I study)\n운동 (exercise) → 운동하다 (to exercise) → 운동해요\n요리 (cooking) → 요리하다 (to cook) → 요리해요\n\nLearn the noun, add 하다, conjugate as 해요. Instant verb.",deepDive:{title:"하다 Verbs: The Biggest Pattern in Korean",text:"About 40% of all Korean verbs follow this pattern.\n\n전화 (phone call)\n전화하다 (to call)\n전화해요 (I call)\n\n일 (work)\n일하다 (to work)\n일해요 (I work)\n\nOnce you know the noun, the verb is free."}},
 {type:"mc",q:"감사합니다 literally means:",opts:["I am grateful","Good thanks","I do gratitude","Thank you very much"],ans:"I do gratitude",hint:"감사 + 합니다 (do formally)"},
 {type:"mc",q:"You receive a gift from your friend's mother. You say:",opts:["고마워요","아니에요","네","감사합니다"],ans:"감사합니다",hint:"Friend's MOTHER is an elder. Use the formal version."},
 {type:"mc",q:"Your close friend helps you with homework. You say:",opts:["고마워요","감사합니다","아니에요","아니요"],ans:"고마워요",hint:"Close friend, same age. Casual-polite is fine."},
 {type:"fb",s:"'I am NOT a teacher' in Korean: 저는 선생님이 ___.",a:"아니에요",opts:["이에요","아니에요","예요","아니요"],hint:"The negative copula goes after noun + particle pattern."},
 {type:"match",pairs:[{nl:"네",en:"yes"},{nl:"아니요",en:"no"},{nl:"감사합니다",en:"thank you (formal)"},{nl:"고마워요",en:"thanks (casual-polite)"}]},
 {type:"mc",q:"네 is often used in Korean conversation as a filler meaning:",opts:["Yes, I agree","I'm listening / go on","Really? / oh?","Of course / sure"],ans:"I'm listening / go on",hint:"Koreans say 네 constantly to show they're paying attention"},
 {type:"fb",s:"학생이에요? 아니요, 학생이 ___.\n(No, I am NOT a student.)",a:"아니에요",opts:["이에요","예요","아니에요","네"],hint:"What is the negative form of the copula 이에요/예요?"},
 {type:"match",pairs:[{nl:"아니에요",en:"to not be (am/is/are not)"},{nl:"이에요",en:"am / is (after consonant)"},{nl:"예요",en:"am / is (after vowel)"},{nl:"감사합니다",en:"thank you (formal)"}]},
 {type:"mc",q:"Both 감사합니다 and 안녕하세요 share the same verb root. What is it?",opts:["가다 (to go)","오다 (to come)","하다 (to do)","있다 (to exist)"],ans:"하다 (to do)",hint:"Both phrases are noun + verb compounds. What action verb do they share?"},
 ]},

 // ═══ L4b: 안 / 아니에요 / 지 않아요  -  Negation ═══
 {id:"kou1l4b",title:"Say NO: Korean Negation",icon:"🚫",xp:22,board:true,steps:[
 {type:"intro",title:"Three Ways to Say No",desc:"아니요 / 아니에요 / 안\n→ No / is not / not (verb)\n\nThree ways to negate.",goals:["Use 안 before verbs (choice/preference)","Use 아니에요 to say 'is not'","Preview -지 않아요 (formal negation)","Understand 안 vs 아니에요"]},
 {type:"teach",kind:"grammar",nl:"안",en:"not (pre-verb negation)",pos:"adv",gender:null,funFact:"Korean has two negation systems: pre-verb 안 and post-verb -지 않다. Both are used daily.",phonetic:"an",example:"A: 카페에 가요? B: 아니요, 안 가요.",exampleEn:"A: Are you going to the cafe? B: No, I'm not going.",note:"안 goes directly BEFORE the verb.\n\n안 가요.\n→ I'm not going.",deepDive:{title:"More Examples",text:"안 먹어요.\n→ I don't eat it. (preference)\n\n안 해요.\n→ I'm not doing it.\n\nSimple rule: 안 + verb = negation."}},
 {type:"tip",title:"🚫 안  -  The Simplest Negation",text:"안 is a single syllable that goes BEFORE the verb.\n\n안 가요.\n→ Not going. (choice)\n\n안 먹어요.\n→ Don't eat. (preference)",deepDive:{title:"More Examples",text:"안 마셔요.\n→ Don't drink.\n\n안 알아요.\n→ Don't know.\n\n안 괜찮아요.\n→ Not okay."}},
 {type:"mc",q:"'I'm not going' (by choice):",opts:["안 가요","가요","아니에요","없어요"],ans:"안 가요",hint:"안 before the verb = not doing"},
 {type:"fb",s:"커피___ 아니에요.\n(Not coffee.)",a:"가",opts:["이","가","는","을"],hint:"Check the last letter of the word."},
 {type:"teach",kind:"word",nl:"아니에요",en:"to not be (am/is/are not)",pos:"verb",gender:null,funFact:"Used for NOUNS (not verbs).",phonetic:"a-ni-e-yo",example:"A: 이것은 커피예요? B: 아니에요, 커피가 아니에요.",exampleEn:"A: Is this coffee? B: No, it's not coffee.",note:"Used for NOUNS (not verbs).\nPattern: topic + noun + 이/가 + 아니에요.\n저는 학생이 아니에요.\n→ I am not a student.",deepDive:{title:"Negative Copula Examples",text:"이것은 커피가 아니에요.\n→ This is not coffee.\n\n이것은 버스가 아니에요.\n→ This is not a bus.\n\n⚡ Note: 이/가 is used before 아니에요, NOT 은/는."}},
 {type:"tip",title:"🔄 이에요/예요 vs 아니에요",text:"Positive → Negative:\n\n저는 학생이에요.\n→ I am a student.\n\n저는 학생이 아니에요.\n→ I am NOT a student.",deepDive:{title:"More Examples",text:"이것은 커피예요.\n→ This is coffee.\n\n이것은 커피가 아니에요.\n→ This is not coffee.\n\n⚠️ The negative uses 이/가 before 아니에요:\n학생이에요 → 학생이 아니에요 (same 이!)"}},
 {type:"mc",q:"'This is not a taxi':",opts:["이것은 택시예요.","이것은 택시가 아니에요.","이것은 택시이에요.","이것이 없어요."],ans:"이것은 택시가 아니에요.",hint:"Noun + 가/이 + 아니에요"},
 {type:"fb",s:"저는 선생님___ 아니에요.\n(I'm not a teacher.)",a:"이",opts:["이","가","는","를"],hint:"Check the last letter of the word."},
 {type:"teach",kind:"grammar",nl:"-지 않아요",en:"do not (formal/emphatic negation)",pos:"verb",gender:null,funFact:"The polite informal ending. Used in ~80% of daily Korean conversation. Safe with almost everyone.",phonetic:"-ji a-na-yo",example:"A: 커피 먹어요? B: 아니요, 먹지 않아요.",exampleEn:"A: Do you drink coffee? B: No, I do not drink it.",note:"Formal negation pattern. Attach to verb stem.\n\n가지 않아요.\n→ I do not go. (formal)",deepDive:{title:"More Examples",text:"먹지 않아요.\n→ I do not eat.\n\n마시지 않아요.\n→ I do not drink.\n\nSame meaning as 안 + verb, but more formal.\n안 가요 = 가지 않아요. Choose by register."}},
 {type:"tip",title:"📊 Three Negation Tools  -  At a Glance",text:"Three ways to say 'not' in Korean:\n\n안 + verb: 안 먹어요 = do not eat (quick, casual)\n아니에요: 학생이 아니에요 = am not a student (identity)\n-지 않아요: 먹지 않아요 = do not eat (formal/emphatic)",deepDive:{title:"안 vs -지 않아요: When to Use Each",text:"안 is day-one negation. -지 않아요 is the same meaning, more formal.\n\n3. 안 + [verb]  -  'don't/not' (casual)\n안 가요.\n→ I'm not going.\n\n4. [verb] + 지 않아요  -  'do not' (formal)\n가지 않아요.\n→ I do not go.\n\n⚡ For now: 안 + verb for daily speech.\n지 않아요 comes up in writing and formal talk."}},
 {type:"mc",q:"Which negation pattern is used for VERBS (not nouns)?",opts:["아니에요","이에요/예요","안 + verb","맞아요"],ans:"안 + verb",hint:"아니에요 negates nouns (A is not B). ... negates actions."},
 {type:"mc",q:"저는 학생이 아니에요 uses 아니에요. Why 아니에요 and not 안?",opts:["학생 is a verb (action word)","It is formal (speech level)","It is past tense (time marker)","학생 is a noun (identity negation)"],ans:"학생 is a noun (identity negation)",hint:"안 negates VERBS. 아니에요 negates NOUNS (am/is not)."},
 {type:"fb",s:"저는 의사가 아니___.\n(I'm not a doctor.)",a:"에요",opts:["에요","예요","이에요","요"],hint:"아니 is the full form. 아니 +"},
 {type:"match",pairs:[{nl:"안 가요",en:"Not going (choice)"},{nl:"아니에요",en:"Is not (for nouns)"},{nl:"가지 않아요",en:"Do not go (formal)"},{nl:"아니요",en:"No (standalone)"}]},
 {type:"mc",q:"저는 학생이 아니에요  -  what particle comes before 아니에요?",opts:["이/가","은/는","을/를","에"],ans:"이/가",hint:"The noun before 아니에요 takes ... (subject marker)"},
 {type:"tip",title:"🇰🇷 Real Talk: When Do Koreans Use Each?",text:"Daily conversation (90% of the time):\n안 가요, 안 먹어요, 안 알아요.\n→ Short, fast, natural.\n\nFormal writing, presentations, polite emphasis:",deepDive:{title:"Negation in Formal vs Casual Registers",text:"가지 않아요, 먹지 않아요.\n→ More explicit and considered.\n\nFor noun 'is not'  -  always:\n아니에요 (no casual shortcut for this one)\n\n⚡ Start with: 안 + verb for everything. You'll see 지 않아요 later when formal endings are taught."}},
 {type:"mc",q:"Same meaning as 안 먹어요:",opts:["먹어요","먹지 않아요","먹지 못해요","아니에요"],ans:"먹지 않아요",hint:"Two ways to negate a verb: short form (before verb) and long form (after stem)."},
 ]},


 // ═══ L5: 이것은 ___이에요 ═══
 {id:"kou1l5",title:"이것은 뭐예요?",icon:"👆",xp:20,board:true,steps:[
 {type:"intro",title:"What Is This?",desc:"이것은 뭐예요?\n→ What is this?\n\nPoint at things. Name them.",goals:["Ask 'What is this?'","Answer 'This is ___'","Use 이것 (this thing)","Confirm with 맞아요 (correct)"]},
 {type:"teach",kind:"word",nl:"이것",en:"this thing",pos:"pron",gender:null,funFact:"It means 'thing' and appears in dozens of grammar patterns.",phonetic:"i-geot",example:"A: 이것은 뭐예요? B: 이것은 커피예요.",exampleEn:"A: What is this? B: This is coffee.",note:"이 means this (near me).\n것 means thing.\n\n이것은 뭐예요?\n→ What is this?",deepDive:{title:"About 것",text:"것 is one of the most common Korean words.\nIt means 'thing' and appears in dozens of grammar patterns."}},
 {type:"teach",kind:"word",nl:"뭐",en:"what",pos:"pron",gender:null,funFact:"You will almost always hear 뭐 in conversation.",phonetic:"mwo",example:"A: 이것은 뭐예요? B: 김치예요.",exampleEn:"A: What is this? B: It is kimchi.",note:"Short form of the full question word. Much more common in daily speech.\n\n이것은 뭐예요?\n→ What is this?",deepDive:{title:"뭐 vs 무엇",text:"뭐 is the short version of 무엇 (what).\n무엇 is formal/written. 뭐 is spoken.\nYou will almost always hear 뭐 in conversation."}},
 {type:"mc",q:"이것은 뭐예요? means:",opts:["What is this?","Where is this?","Who is this?","How is this?"],ans:"What is this?",hint:"You just learned this question word. 이것은 ___ 예요?"},
 {type:"teach",kind:"phrase",nl:"네, 맞아요",en:"Yes, that's right",pos:"intj",gender:null,funFact:"Very useful confirmation word.",phonetic:"ne, ma-ja-yo",example:"A: 커피예요? B: 네, 맞아요! A: 감사합니다!",exampleEn:"A: Is it coffee? B: Yes, that's right! A: Thank you!",note:"맞아요: 'is correct / that's right.'\nVery useful confirmation word.\nUse it to agree with someone."},
 {type:"teach",kind:"grammar",nl:"아니요, 아니에요",en:"No, it's not",pos:"aux",gender:null,funFact:"Marks location or time. One particle, two jobs. Context tells you which.",phonetic:"a-ni-yo, a-ni-e-yo",example:"A: 택시예요? B: 아니요, 버스예요. A: 아, 버스!",exampleEn:"A: Is it a taxi? B: No, it's a bus. A: Ah, a bus!",note:"아니요 = no (standalone rejection)\n아니에요 = is not (negation inside sentence)\n",deepDive:{title:"아니요, 아니에요",text:"아니요, 학생이에요.\n→ No, I'm a student. (correcting someone)"}},
 {type:"mc",q:"Someone asks 이것은 뭐예요? pointing at your coffee. You say:",opts:["아니요.","커피예요.","감사합니다.","안녕하세요."],ans:"커피예요.",hint:"This is coffee."},
 {type:"fb",s:"이것은 ___예요?\n(Asking 'what')",a:"뭐",opts:["뭐","네","저","이것"],hint:"Which question word fills the blank to ask about the object?"},
 {type:"tip",title:"🗣️ Questions Without Question Words",text:"In Korean, any statement becomes a question by raising your voice:\n\n• 커피예요. (flat tone) = It's coffee.\n• 커피예요? (rising tone) = Is it coffee?\n\nNo extra words needed. No word order change.",deepDive:{title:"How Intonation Creates Questions",text:"Just raise your intonation at the end.\n\nThis is why L1 said: Korean questions sound like statements."}},
 {type:"mc",q:"커피예요? (with rising intonation) means:",opts:["It's coffee.","I want coffee.","Is it coffee?","Where is coffee?"],ans:"Is it coffee?",hint:"Rising intonation = question in Korean"},
 {type:"mc",q:"커피예요? 네, 맞아요! What does 맞아요 mean?",opts:["Thank you","Not at all","I don't know","That's right"],ans:"That's right",hint:"맞다 = to be correct. 네, 맞아요 affirms that a statement is accurate."},
 {type:"fb",s:"택시예요? 아니요, ___예요.\n(No, it's a bus.)",a:"버스",opts:["버스","택시","커피","호텔"],hint:"A bus is ... (Konglish!)"},
 {type:"teach",kind:"word",nl:"이거",en:"this (casual short form)",pos:"pron",gender:null,funFact:"Much more common in daily speech.",phonetic:"i-geo",example:"A: 이거 뭐예요? B: 아이스크림이에요!",exampleEn:"A: What's this? B: It's ice cream!",note:"이거 = casual short form of 이것.\nMuch more common in daily speech.\n이거 뭐예요? = What's this? (casual but polite)"},
 {type:"mc",q:"이거 is the short form of:",opts:["이것","그것","저것","무엇"],ans:"이것",hint:"이거  (this thing), just shorter"},
 {type:"fb",s:"이것은 컴퓨터___.\n(This is a computer.)",a:"예요",opts:["이에요","예요","아니에요","맞아요"],hint:"Vowel ending or consonant ending?"},
 {type:"fb",s:"이것은 호텔___.\n(This is a hotel.)",a:"이에요",opts:["이에요","예요","아니에요","맞아요"],hint:"Vowel ending or consonant ending?"},
 {type:"match",pairs:[{nl:"이것은 뭐예요?",en:"What is this?"},{nl:"네, 맞아요",en:"Yes, that's right"},{nl:"아니에요",en:"It's not / am not"},{nl:"이거",en:"this (casual)"}]},
 {type:"mc",q:"Someone shows you a photo. You point and ask what it is. You say:",opts:["감사합니다","이것은 뭐예요?","안녕하세요","아니에요"],ans:"이것은 뭐예요?",hint:"What is this?"},
 {type:"mc",q:"이것은 인터넷이에요? 아니요, 컴퓨터예요. What was the answer?",opts:["It is the internet","Yes, it's the internet","It's not, it's a computer","I don't know"],ans:"It's not, it's a computer",hint:"아니요 = no. Then the correction: 컴퓨터예요."},
 {type:"match",pairs:[{nl:"이것",en:"this thing"},{nl:"뭐",en:"what"},{nl:"맞아요",en:"correct / right"},{nl:"이거",en:"this (casual)"}]},
 {type:"mc",q:"Is this coffee? Yes, ___! (confirm)",opts:["아니에요","감사합니다","뭐예요","맞아요"],ans:"맞아요",hint:"Confirming: yes, that's right!"},
 ]},

 // ═══ L6: ___사람이에요 ═══
 {id:"kou1l6",title:"어디 사람이에요?",icon:"🌍",xp:25,board:true,steps:[
 {type:"intro",title:"Nationality. Country Names Are Compounds",desc:"국\n→ country\n\nKorean words are built from reusable blocks.",goals:["Say your nationality","Learn your first building blocks","See how Korean builds words like LEGO","Understand Korean name culture"]},
 // P42 tip: Korean Names (rewrite plan says before nationality words)
 {type:"tip",title:"🏷️ Korean Names: Family Name First",text:"Korean names: FAMILY NAME first, given name second.\n\n김민수 = Kim Minsu (김 = Kim, family name)\n이지은 = Lee Jieun (이 = Lee, family name)\n박서준 = Park Seojun (박 = Park, family name)",deepDive:{title:"Korean Name Culture",text:"Top 5 surnames: 김 (Kim), 이 (Lee), 박 (Park), 최 (Choi), 정 (Jung).\nAbout 50% of Koreans have one of these five names.\n\nOnly about 300 family names exist in Korea\n(versus thousands in English).\n\nGiven names are usually 2 syllables,\noften with Chinese-origin meaning.\n\nMarried women keep their family name.\n\nCalling someone by first name (이름)\nwithout permission is RUDE.\n\nEven couples often use titles early in relationships.\n\nAt work: 김 대리님 (Manager Kim),\n박 과장님 (Section Chief Park).\n\nThe word 이름 appears in 이름이 뭐예요?\nbut Koreans rarely use first names in daily life."}},
 {type:"tip",title:"🧬 Sino-Korean: Your Secret Weapon",text:"About 60% of Korean words are built from small meaning-blocks from Chinese.\n\nYou do NOT need to learn Chinese or memorize characters.\nJust learn the MEANING of each block:\n\n국 = country\n학 = study\n생 = person/life",deepDive:{title:"Why does Korean have Chinese-origin words?",text:"Snap them together:\n학 (study) + 생 (person) = 학생 = student\n학 (study) + 교 (teach) = 학교 = school\n\nOne block appears in dozens of words. Learn 50 blocks, decode 500+ words.\n\nFor over a thousand years, Korea used Chinese characters for ALL writing. Korean scholars, government officials, and writers wrote exclusively in Classical Chinese.\n\nThe problem: Chinese characters are incredibly difficult to learn. Only the educated elite could read and write. Most Korean people were illiterate.\n\nIn 1443, King Sejong the Great invented Hangul specifically so that ordinary people could read and write. He said: 'A wise person can learn it in a morning, a fool in ten days.'\n\nBut even after Hangul was created, the Chinese-origin VOCABULARY stayed. Korean kept thousands of Chinese-root words, just spelled them in Hangul instead of Chinese characters.\n\nThis is why 60% of Korean words are 'Sino-Korean': the SOUNDS and MEANINGS come from Chinese, but the WRITING is pure Hangul."}},
 {type:"teach",kind:"word",nl:"한국",hanja:"韓+國",en:"Korea",pos:"noun",gender:null,funFact:"From hanja: 韓 (Korea) + 國 (country). The name of Korea itself.",phonetic:"han-guk",example:"A: 어디 사람이에요? B: 저는 한국 사람이에요.",exampleEn:"A: Where are you from? B: I am Korean.",note:"SINO-KOREAN COMPOUND:\n한 (Korea) + 국 (country).\n국 appears in ALL country names.",deepDive:{title:"Using 한국",text:"Learn this block. It unlocks every country word."}},
 {type:"teach",kind:"word",nl:"미국",hanja:"美+國",en:"America (USA)",pos:"noun",gender:null,funFact:"From hanja: 美 (beautiful/America) + 國 (country).",phonetic:"mi-guk",example:"A: 미국 사람이에요? B: 네, 미국 사람이에요.",exampleEn:"A: Are you American? B: Yes, I'm American.",note:"SINO-KOREAN: 미 (beautiful) + 국 (country).\n'Beautiful country': the old Chinese name.\nSame building block as the Korea word."},
 {type:"teach",kind:"word",nl:"일본",hanja:"日+本",en:"Japan",pos:"noun",gender:null,funFact:"From hanja: 日 (sun) + 本 (origin). Japan: \"where the sun originates.\"",phonetic:"il-bon",example:"A: 일본 사람이에요? B: 아니요, 한국 사람이에요.",exampleEn:"A: Are you Japanese? B: No, I'm Korean.",note:"SINO-KOREAN: 일 (sun) + 본 (origin).\n'Sun origin': Land of the Rising Sun."},
  {type:"mc",q:"미국 means:",opts:["America","Korea","Japan","China"],ans:"America",hint:"미 (beautiful) + 국 (country). Which country has this Chinese name?"},
 {type:"teach",kind:"word",nl:"중국",hanja:"中+國",en:"China",pos:"noun",gender:null,funFact:"From hanja: 中 (middle) + 國 (country). China: \"the middle kingdom.\"",phonetic:"jung-guk",example:"A: 중국 사람이에요? B: 네, 중국 사람이에요!",exampleEn:"A: Are you Chinese? B: Yes, I'm Chinese!",note:"SINO-KOREAN: 중 (center) + 국 (country).\n'Center country': Middle Kingdom.\nSame 국 again!"},
 {type:"teach",kind:"word",nl:"사람",en:"person / people",pos:"noun",gender:null,funFact:"Native Korean word (not Sino-Korean).",phonetic:"sa-ram",example:"A: 한국 사람이에요? B: 네! A: 만나서 반갑습니다!",exampleEn:"A: Are you Korean? B: Yes! A: Nice to meet you!",note:"Native Korean word (not Sino-Korean).\n[country] + person = [nationality].\nSimple, consistent pattern."},
 {type:"mc",q:"What does the 국 in 한국 mean?",opts:["Language","Country","Person","Hello"],ans:"Country",hint:"국 (國) appears in 한국, 미국, 중국. What do those all share?"},
 {type:"mc",q:"미국 literally means:",opts:["Great country","Big country","Beautiful country","New country"],ans:"Beautiful country",hint:"미 = pleasing (aesthetic)"},
 {type:"tip",title:"🧱 국 = Country (LEGO Piece #1)",text:"국 (國) = country. Your first Sino-Korean morpheme:\n\n한국 = Korea (한 = Korean + 국 = country)\n미국 = America (미 = beautiful + 국 = country)\n중국 = China (중 = middle + 국 = country)",deepDive:{title:"국 = Country (LEGO Piece #1)",text:"영국 = England (영 = English + 국 = country)\n\nOne morpheme, four countries. This is the LEGO Principle.\n\n외국 = foreign country (외 = outside)\n\nONE piece, many words. Korean is LEGO."}},
 {type:"fb",s:"저는 ___ 사람이에요.\n(I am a Korean person.)",a:"한국",opts:["한국","미국","일본","중국"],hint:"한 + 국 (country). Which country is this language from?"},
 {type:"fb",s:"저는 미국 ___이에요.\n(I am an American person.)",a:"사람",opts:["사람","나라","국가","학생"],hint:"This native Korean word means an individual human being."},
 {type:"mc",q:"How do you say 'I am Japanese'?",opts:["저는 미국 사람이에요","저는 중국 사람이에요","저는 한국 사람이에요","저는 일본 사람이에요"],ans:"저는 일본 사람이에요",hint:"The person is not Korean or Chinese. Think of the third East Asian country."},
 {type:"match",pairs:[{nl:"한국",en:"Korea"},{nl:"미국",en:"America"},{nl:"일본",en:"Japan"},{nl:"중국",en:"China"}]},
 {type:"mc",q:"Korean names put the family name:",opts:["First","Last","In the middle","It varies"],ans:"First",hint:"Korean convention."},
 {type:"mc",q:"Which three family names cover about 45% of all Koreans?",opts:["최, 정, 강","김, 이, 박","서, 윤, 조","한, 미, 중"],ans:"김, 이, 박",hint:"Kim, Lee, Park are the big three"},
 {type:"fb",s:"일본 사람이에요? 아니요, ___ 사람이에요.\n(No, I'm Chinese.)",a:"중국",opts:["한국","미국","일본","중국"],hint:"중 (center) + 국 (country). The 'Middle Kingdom.'"},
 {type:"match",pairs:[{nl:"사람",en:"person"},{nl:"국",en:"country (building block)"},{nl:"한국 사람이에요",en:"I am Korean"},{nl:"미국 사람이에요",en:"I am American"}]},
 {type:"mc",q:"중국 = 중 + 국. What does 중 mean?",opts:["Old","Big","Center","East"],ans:"Center",hint:"중국 is the 'Middle Kingdom.' Which word means 'middle'?"},
 ]},

 // ═══ L7: 만나서 반갑습니다 ═══
 {id:"kou1l7",title:"만나서 반갑습니다",icon:"🤝",xp:20,board:true,steps:[
 {type:"intro",title:"Nice to Meet You",desc:"만나서 반갑습니다\n→ Nice to meet you\n\nEssential first-meeting expressions.",goals:["Say 'nice to meet you'","Ask someone's name","Use 죄송합니다 (I'm sorry)","Learn 잠시만요 (just a moment)"]},
 {type:"teach",kind:"phrase",nl:"만나서 반갑습니다",en:"Nice to meet you",pos:"pron",gender:null,funFact:"Memorize as a chunk.",phonetic:"man-na-seo ban-gap-seum-ni-da",example:"A: 안녕하세요! 저는 민수예요. B: 안녕하세요! 만나서 반갑습니다!",exampleEn:"A: Hello! I'm Minsu. B: Hello! Nice to meet you!",note:"Fixed phrase. Memorize as a chunk.\nUsed in first meetings. Formal and warm.\nLiterally: 'Having met you, I'm glad.'"},
 {type:"teach",kind:"grammar",nl:"이름이 뭐예요?",en:"What is your name?",pos:"aux",gender:null,funFact:"Korean verb endings change meaning dramatically. Mastering endings is the key to fluency.",phonetic:"i-reum-i mwo-ye-yo?",example:"A: 이름이 뭐예요? B: 저는 민수예요.",exampleEn:"A: What's your name? B: I'm Minsu.",note:"이름\n→ name (one word)\n\n이름 + 이\n→ the 이 after it is the subject marker\n\n뭐예요\n→ what is?",deepDive:{title:"Asking Names in Korean Culture",text:"Koreans more often use titles than first names.\n\nAt work: position + 님 (김 과장님 = Manager Kim).\nWith friends: 이름 or nickname.\nWith strangers: avoid names entirely.\n\n이름 (name) comes from the verb 이르다 (to tell/name)."}},
 {type:"mc",q:"이름이 뭐예요? means:",opts:["What is your name?","Where are you from?","How are you?","How old are you?"],ans:"What is your name?",hint:"이름 = label / identifier, 뭐 = what"},
 {type:"teach",kind:"word",nl:"죄송합니다",en:"I'm sorry (formal)",pos:"intj",gender:null,funFact:"Very formal apology.",phonetic:"joe-song-ham-ni-da",example:"A: 죄송합니다! B: 괜찮아요!",exampleEn:"A: I'm sorry! B: It's okay!",note:"Very formal apology. Use with strangers, elders.\n죄송 (apology) + 합니다 (do formally).\nSame structure as the formal thank you!"},
 {type:"teach",kind:"word",nl:"잠시만요",en:"Just a moment, please",pos:"intj",gender:null,funFact:"Use when you need someone to wait.",phonetic:"jam-si-man-yo",example:"A: 안녕하세요! B: 잠시만요! A: 네!",exampleEn:"A: Hello! B: Just a moment! A: Yes!",note:"잠시: a moment. 만: only. 요: polite.\nUse when you need someone to wait.\nVery common in shops, restaurants, offices."},
 {type:"teach",kind:"word",nl:"괜찮아요",en:"It's okay / I'm fine",pos:"intj",gender:null,funFact:"Tone and context tell the listener which meaning you intend.",phonetic:"gwaen-chan-a-yo",example:"A: 죄송합니다! B: 괜찮아요! A: 감사합니다.",exampleEn:"A: I'm sorry! B: It's okay! A: Thank you.",note:"Three uses:\n1. 'It's okay' (responding to an apology)\n2. 'I'm fine' (when asked how you are)\n3. 'No thanks' (declining politely)",deepDive:{title:"괜찮다: One Word, Many Situations",text:"괜찮다 is one of the most versatile Korean words.\n\nA: 죄송합니다! → B: 괜찮아요. (It's okay.)\nA: 커피 드릴까요? → B: 괜찮아요. (No thanks.)\nA: 괜찮아요? → B: 네, 괜찮아요. (Yes, I'm fine.)\n\nTone and context tell the listener which meaning you intend."}},
  {type:"mc",q:"잠시만요 means:",opts:["I'm sorry","Just a moment","It's okay","Thank you"],ans:"Just a moment",hint:"잠시 = a brief interval, 만 = only, 요 = polite ending."},
 {type:"mc",q:"Someone introduces themselves. You respond:",opts:["감사합니다","죄송합니다","만나서 반갑습니다","안녕히 가세요"],ans:"만나서 반갑습니다",hint:"Nice to meet you"},
 {type:"mc",q:"You accidentally bump into someone on the subway. You say:",opts:["감사합니다","안녕하세요","괜찮아요","죄송합니다"],ans:"죄송합니다",hint:"Formal apology for a stranger"},
 {type:"fb",s:"이름이 ___예요?\n(What is your name?)",a:"뭐",opts:["뭐","저","네","이것"],hint:"Which question word asks for unknown information?"},
 {type:"tip",title:"🤝 The Korean First Meeting Sequence",text:"Koreans follow a predictable pattern when meeting:\n\n1. 안녕하세요! (Hello!)\n2. 저는 민수예요. (I am Minsu.)\n3. 만나서 반갑습니다! (Nice to meet you!)",deepDive:{title:"Follow-up Questions",text:"4. 이름이 뭐예요?\n→ What's your name?\n\n5. 어디 사람이에요?\n→ Where are you from?\n\nBow slightly when you say 만나서 반갑습니다. A small nod is enough."}},
 {type:"mc",q:"Someone says 죄송합니다 after stepping on your foot. You say:",opts:["괜찮아요","감사합니다","죄송합니다","안녕히 가세요"],ans:"괜찮아요",hint:"It's okay! (accepting the apology)"},
 {type:"fb",s:"안녕하세요! ___ 반갑습니다!\n(Nice to meet you!)",a:"만나서",opts:["만나서","감사","이름이","죄송"],hint:"... = having met"},
 {type:"mc",q:"A waiter says 잠시만요 when you enter a restaurant. This means:",opts:["Welcome!","Just a moment","Thank you","Goodbye!"],ans:"Just a moment",hint:"잠시만요: please wait a brief interval"},
 {type:"mc",q:"죄송합니다 uses the same compound pattern as 감사합니다. Both use:",opts:["있다 (to exist)","가다 (to go)","하다 (to do)","이다 (to be)"],ans:"하다 (to do)",hint:"This verb root is found in both expressions of gratitude and apology."},
 {type:"match",pairs:[{nl:"만나서 반갑습니다",en:"nice to meet you"},{nl:"이름이 뭐예요?",en:"what's your name?"},{nl:"죄송합니다",en:"I'm sorry"},{nl:"괜찮아요",en:"it's okay"}]},
 {type:"fb",s:"You need the waiter to wait. You say: ___",a:"잠시만요",opts:["잠시만요","감사합니다","죄송합니다","안녕하세요"],hint:"Just a moment, please"},
 {type:"mc",q:"How does 괜찮아요 function when offered food you don't want?",opts:["It means yes please definitely","It expresses strong dislike","It is a formal greeting only","It means no thanks politely"],ans:"It means no thanks politely",hint:"괜찮아요 is a soft refusal in Korean culture. Literally 'it is okay,' used to decline without seeming rude."},
 {type:"match",pairs:[{nl:"잠시만요",en:"just a moment"},{nl:"괜찮아요",en:"it's okay / no thanks"},{nl:"감사합니다",en:"thank you (formal)"},{nl:"죄송합니다",en:"I'm sorry (formal)"}]},
 {type:"mc",q:"Put the first meeting in order: A) 만나서 반갑습니다 B) 안녕하세요 C) 저는 민수예요",opts:["B → C → A","A → B → C","C → A → B","B → A → C"],ans:"B → C → A",hint:"Hello → I am 민수 → Nice to meet you"},
 ]},

 // ═══ L8: Konglish False Friends ═══
 {id:"kou1l8",title:"⚠️ Konglish False Friends",icon:"⚠️",xp:20,board:true,steps:[
 {type:"intro",title:"Words That Trick You",desc:"Some Konglish sounds like English but means something DIFFERENT.",goals:["Know 5 major false friends","Understand the real Korean meanings","Learn 파이팅 and 에어컨","Never fall for the trap"]},
 {type:"teach",kind:"word",nl:"서비스",en:"FREE bonus / extra",pos:"noun",gender:null,funFact:"Loanword from English \"service.\" Korean adapted it using Hangul phonetics.",phonetic:"seo-bi-seu",example:"A: 이거 뭐예요? B: 아, 서비스예요! 많이 드세요.",exampleEn:"A: What's this? B: Oh, it's a freebie! Please enjoy.",note:"⚠️ FALSE FRIEND: Sounds like 'service'\nActual meaning: FREE EXTRA at restaurants.\n서비스로 드릴게요: 'I'll give it as a freebie.'",deepDive:{title:"Using 서비스",text:"NOT related to customer service!"}},
 {type:"teach",kind:"word",nl:"핸드폰",en:"cellphone / mobile phone",pos:"noun",gender:null,funFact:"English speakers say 'cellphone' or 'mobile.",phonetic:"haen-deu-pon",example:"A: 핸드폰 번호가 뭐예요? B: 공일공 이삼사오 육칠팔구예요.",exampleEn:"A: What's your phone number? B: 010-2345-6789.",note:"⚠️ HEADS UP: 'Handphone' is Konglish.\nEnglish speakers say 'cellphone' or 'mobile.'\nKoreans won't understand 'cellphone.'",deepDive:{title:"Using 핸드폰",text:"핸드폰 or 스마트폰: use these."}},
 {type:"teach",kind:"word",nl:"바이트",en:"part-time job",pos:"noun",gender:null,funFact:"Loanword from English \"part-time job.\" Korean adapted it using Hangul phonetics.",phonetic:"ba-i-teu",example:"A: 오늘 시간 있어요? B: 아니요, 오늘 바이트가 있어요.",exampleEn:"A: Do you have time today? B: No, I have a part-time job today.",note:"⚠️ FALSE FRIEND: NOT 'byte' (computer)!\nFrom German 'Arbeit' (work).\n바이트하다: to work part-time.",deepDive:{title:"Using 바이트",text:"Also written 아르바이트 (a-reu-ba-i-teu)."}},
  {type:"mc",q:"핸드폰 means:",opts:["cellphone","part-time job","FREE bonus","air conditioner"],ans:"cellphone",hint:"This Konglish word combines 'hand' + 'phone.'"},
 {type:"mc",q:"A restaurant gives you extra side dishes saying '서비스예요.' This means:",opts:["It's the service charge","It's free / on the house","The service is good","You should tip"],ans:"It's free / on the house",hint:"서비스 in Korean = no charge bonus"},
 {type:"mc",q:"바이트 in Korean means:",opts:["A unit of computer data","To bite something","A part-time job","A small amount"],ans:"A part-time job",hint:"From German 'Arbeit' (work)"},
 {type:"teach",kind:"word",nl:"파이팅",en:"You can do it! / Go for it!",pos:"noun",gender:null,funFact:"One of the most beloved Korean expressions.",phonetic:"pa-i-ting",example:"A: 내일 시험이에요. B: 진짜요? 파이팅!",exampleEn:"A: I have an exam tomorrow. B: Really? You can do it!",note:"⚠️ HEADS UP: Sounds like 'fighting'\nbut means ENCOURAGEMENT, not violence.\nMeans ENCOURAGEMENT, not violence. Used to cheer someone on.",deepDive:{title:"파이팅 in Korean Culture",text:"One of the most beloved Korean expressions."}},
 {type:"teach",kind:"word",nl:"에어컨",en:"air conditioner",pos:"noun",gender:null,funFact:"Loanword from English \"air conditioner.\" Korean adapted it using Hangul phonetics.",phonetic:"e-eo-keon",example:"A: 더워요! B: 에어컨 켜 주세요.",exampleEn:"A: It's hot! B: Please turn on the AC.",note:"Shortened Konglish: 'air con(ditioner)'\nKoreans clip long English words:\nAir conditioner becomes a shorter word in Korean.",deepDive:{title:"Using 에어컨",text:"remote control → 리모컨\ndigital camera → 디카"}},
 {type:"mc",q:"In Korea, a cellphone is called:",opts:["셀폰","모바일","텔레폰","핸드폰"],ans:"핸드폰",hint:"Korea uses 'handphone'"},
 {type:"mc",q:"Your Korean friend says 파이팅! before your job interview. They mean:",opts:["You can do it!","Let's fight!","Be careful!","Goodbye!"],ans:"You can do it!",hint:"파이팅 = encouragement, not fighting"},
 {type:"tip",title:"✂️ Koreans Clip English Words",text:"Korean often shortens long English loanwords:\n\nAir conditioner becomes a shorter word in Korean. = A/C (clipped)\nremote control → 리모컨 = remote (clipped)\ndigital camera → 디카 = digicam (clipped)",deepDive:{title:"Why Korean Prefers Short Words",text:"apartment → 아파트 = apt (clipped)\n\nNot all Konglish is clipped  -  편의점 = convenience store is pure Korean.\n\nThis clipping happens because Korean prefers 2-3 syllable words.\nLong Konglish gets trimmed down."}},
 {type:"fb",s:"오늘 ___가 있어요.\n(I have a part-time job today.)",a:"바이트",opts:["바이트","서비스","파이팅","에어컨"],hint:"This false friend comes from German 'Arbeit' (work)."},
 {type:"fb",s:"시험 ___!\n(Good luck on the exam!)",a:"파이팅",opts:["파이팅","서비스","감사합니다","안녕하세요"],hint:"This Konglish word sounds like a combat verb but means 'go for it!'"},
 {type:"match",pairs:[{nl:"서비스",en:"free bonus / freebie"},{nl:"핸드폰",en:"cellphone"},{nl:"바이트",en:"part-time job"},{nl:"파이팅",en:"you can do it!"}]},
 {type:"mc",q:"에어컨 is short for:",opts:["air condition","air conditioner","air container","air concert"],ans:"air conditioner",hint:"에어 + 컨, a clipped Konglish borrowing of the English appliance name."},
 {type:"mc",q:"At a Korean restaurant, the owner brings an extra dish and says '서비스예요!' What should you do?",opts:["Pay for the dish","Ask for the check","Thank them (it's free)","Leave a small tip"],ans:"Thank them (it's free)",hint:"서비스 = freebie. Just say 감사합니다!"},
 {type:"fb",s:"___ 번호가 뭐예요?\n(What's your phone number?)",a:"핸드폰",opts:["핸드폰","바이트","에어컨","서비스"],hint:"Korean uses 'hand' + 'phone' for this device."},
 {type:"match",pairs:[{nl:"에어컨",en:"air conditioner"},{nl:"파이팅",en:"encouragement"},{nl:"서비스",en:"not 'service' but 'freebie'"},{nl:"바이트",en:"not 'byte' but 'part-time job'"}]},
 {type:"tip",title:"🌏 Why False Friends Exist",text:"False friends happen because Korean borrowed the English SOUND but changed the MEANING.\n\nEnglish does this too:\n• 'Angst' in English means worry (German: deep existential dread)\n• 'Kindergarten' in English means preschool (German: literally 'children garden')\n\nEvery language reshapes borrowed words.\nKorean is no different. Just be aware of the traps!"},
 {type:"mc",q:"Which of these is NOT a false friend (meaning matches English)?",opts:["서비스 (service)","바이트 (byte)","파이팅 (fighting)","커피 (coffee)"],ans:"커피 (coffee)",hint:"One word keeps its English meaning exactly. The rest are false friends."},
 ]},

 // ═══ L9: First Meeting Dialogue ═══
 {id:"kou1l9",title:"First Meeting",icon:"💬",xp:20,board:true,steps:[
 {type:"intro",title:"Your First Korean Conversation",desc:"나이\n→ age\n\nYour first full conversation, plus why age matters.",goals:["Follow a full first-meeting dialogue","Know why Koreans ask your age","Use 저도 (me too)","Understand Korean age hierarchy"]},
 {type:"teach",kind:"grammar",nl:"나이",en:"age",pos:"part",gender:null,funFact:"Age. Crucial in Korean culture; age determines speech level and honorifics. Asking 나이가 어떻게 되세요? (how old are you?) is normal and not rude, unlike in Western contexts.",phonetic:"na-i",example:"A: 나이가 어떻게 되세요? B: 스물다섯 살이에요.",exampleEn:"A: How old are you? B: I am 25.",note:"In Korea, age shapes every social interaction.\nWho bows deeper, who pours drinks, which speech level you use.",deepDive:{title:"나이",text:"Koreans ask age early. It's NOT rude.\nIt's NECESSARY to know how to speak to you."}},
 {type:"tip",title:"🎌 나이: Why Koreans Ask Your Age",text:"In English, asking someone's age is often rude.\nIn Korean, it's ESSENTIAL.\n\nAge determines:\n• Speech level (polite, formal, casual)",deepDive:{title:"The Korean Age Hierarchy",text:"• Who bows deeper\n• Who pours the drink\n• Titles (형/오빠/누나/언니)\n\nIf a Korean asks your age within 5 minutes of meeting you, they're being POLITE. They want to speak to you correctly.\n\nKorean has special titles based on age and gender:\n\n형 (hyeong): older brother (said by males)\n오빠 (oppa): older brother (said by females)\n누나 (nuna): older sister (said by males)\n언니 (eonni): older sister (said by females)\n\nThese are used for ANY older person you're close to,\nnot just real siblings.\n\nA Korean born in 1990 speaking to someone born in 1988:\nthe 1990-born person speaks with more respect.\nTwo years difference changes everything.\n\nKoreans calculate age differently too.\nTraditional Korean age: you're 1 at birth and gain\na year every January 1st. Korea recently switched\nto international age for legal purposes (2023)."}},
 {type:"mc",q:"A Korean asks your age upon first meeting. This is:",opts:["Normal: sets the speech level","Very rude and personal","Only acceptable with friends","A personal attack on privacy"],ans:"Normal: sets the speech level",hint:"Age determines how Koreans speak to each other"},
 {type:"teach",kind:"grammar",nl:"저도",en:"me too / I also",pos:"part",gender:null,funFact:"From hanja: 低 (low) + 度 (degree/measure).",phonetic:"jeo-do",example:"A: 만나서 반갑습니다! B: 네, 저도 반갑습니다!",exampleEn:"A: Nice to meet you! B: Yes, I'm also pleased to meet you!",note:"저: I (polite). 도: also/too (particle).\n저 → 저도 (me too).\n도 just attaches to words. Simple.",deepDive:{title:"도 Is Everywhere",text:"저도요! = Me too! (instant reply)\n\n도 replaces topic/subject markers:\n저는 → 저도 (not 저는도).\n\n한국어도 좋아해요 = I also like Korean.\n커피도 주세요 = Coffee too, please."}},
 {type:"teach",kind:"word",nl:"어디",en:"where",pos:"noun",gender:null,funFact:"This means 'Where are you from?'.",phonetic:"eo-di",example:"A: 어디 사람이에요? B: 미국 사람이에요.",exampleEn:"A: Where are you from? B: I'm American.",note:"어디: where.\n어디 사람이에요? = Where person are you?\nThis means 'Where are you from?'"},
 {type:"teach",kind:"phrase",nl:"잘 부탁합니다",en:"Please take care of me / Please be good to me",pos:"intj",gender:null,funFact:"Common closing phrase in first meetings.",phonetic:"jal bu-tak-ham-ni-da",example:"A: 저는 새 직원이에요. 잘 부탁합니다! B: 네, 반갑습니다!",exampleEn:"A: I'm the new employee. Please take care of me! B: Yes, nice to meet you!",note:"Common closing phrase in first meetings.\n잘: well. 부탁: request. 합니다: do (formal).\nUsed at work, school, any new relationship."},
  {type:"mc",q:"어디 means:",opts:["me too","where","please take care of me","what"],ans:"where",hint:"This question word asks about location or origin."},
 {type:"mc",q:"저도 means:",opts:["Just me","Not me","Me too","Only me"],ans:"Me too",hint:"저 (I) + 도 (also) = me too"},
 {type:"fb",s:"안녕하세요! 저는 민수예요. 만나서 반갑습니다! 앞으로 잘 ___.\n(Hello! I'm Minsu. Nice to meet you! Please take care of me.)",a:"부탁합니다",opts:["부탁합니다","감사합니다","죄송합니다","안녕하세요"],hint:"Please take care of me (formal closing)"},
 {type:"tip",title:"💬 Full First Meeting Script",text:"The standard Korean first-meeting sequence:\n\n안녕하세요! = Hello!\n저는 민수예요. = I am Minsu.\n만나서 반갑습니다. = Nice to meet you.",deepDive:{title:"Common Follow-up Questions",text:"어디에서 왔어요? = Where are you from?\n뭐 하세요? = What do you do?\n\nThis sequence happens in every Korean first meeting.\n\nYou know EVERY word in this dialogue."}},
 {type:"mc",q:"안녕하세요! 저는 민수예요. What did this person just do?",opts:["Asked your age","Said goodbye","Ordered coffee","Introduced themselves"],ans:"Introduced themselves",hint:"저는 민수예요 = I am Minsu"},
 {type:"mc",q:"어디 사람이에요? means:",opts:["Where are you from?","What's your name?","How old are you?","What do you do?"],ans:"Where are you from?",hint:"어디 = location query, 사람 = person"},
 {type:"fb",s:"네, ___반갑습니다!\n(Yes, I'm also pleased to meet you!)",a:"저도",opts:["저도","저는","이것","네"],hint:"Me too = 저 + 도"},
 {type:"fb",s:"___ 사람이에요?\n(Where are you from?)",a:"어디",opts:["어디","뭐","이름","나이"],hint:"Which question word asks about location or origin?"},
 {type:"match",pairs:[{nl:"나이",en:"age"},{nl:"저도",en:"me too"},{nl:"어디",en:"where"},{nl:"잘 부탁합니다",en:"please take care of me"}]},
 {type:"mc",q:"When do Koreans typically say 잘 부탁합니다?",opts:["When leaving a place","When meeting someone new","When eating a meal","When saying sorry to someone"],ans:"When meeting someone new",hint:"It's a closing phrase for first meetings"},
 {type:"mc",q:"The particle 도 in 저도 means:",opts:["Not","Very","Also / too","Only"],ans:"Also / too",hint:"도 = also/too. It attaches to nouns."},
 {type:"match",pairs:[{nl:"만나서 반갑습니다",en:"nice to meet you"},{nl:"이름이 뭐예요?",en:"what's your name?"},{nl:"어디 사람이에요?",en:"where are you from?"},{nl:"잘 부탁합니다",en:"please take care of me"}]},
 {type:"mc",q:"Put the meeting phrases in natural order: A) 잘 부탁합니다 B) 안녕하세요 C) 만나서 반갑습니다 D) 저는 민수예요",opts:["B → C → D → A","A → B → C → D","D → C → B → A","B → D → C → A"],ans:"B → D → C → A",hint:"Hello → introduce yourself → nice to meet you → please take care of me"},
 {type:"fb",s:"저는 미국 사람이에요. ___사람이에요?\n(Where are you from?)",a:"어디",opts:["어디","뭐","나이","이름"],hint:"Which question word asks about location or origin?"},
 ]},

 // ═══ L10: Review & Quiz ═══
 {id:"kou1l10",title:"Review & Quiz",icon:"📝",xp:30,board:true,steps:[
 {type:"intro",title:"Greetings Review",desc:"Review everything from this unit. No surprises.",goals:["Review all vocabulary so far","Test greetings, introductions, Konglish","Decompose compound words","Prove you know the goodbye rules"]},
 {type:"mc",q:"How do you say 'hello' in Korean?",opts:["안녕하세요","감사합니다","죄송합니다","만나서 반갑습니다"],ans:"안녕하세요",hint:"'Do you have peace?'"},
 {type:"mc",q:"안녕하세요 decomposes into:",opts:["안 + 녕 + 하세요","안녕 + 하 + 세요","안녕하 + 세 + 요","All one piece"],ans:"안녕 + 하 + 세요",hint:"Peace + do + please/honorific"},
 {type:"mc",q:"감사합니다 decomposes into:",opts:["감 + 사 + 합니다","감사합 + 니다","감사 + 합니다","All one piece"],ans:"감사 + 합니다",hint:"Gratitude + do-formally"},
 {type:"fb",s:"You're leaving a Korean home. The host stays. You say: ___",a:"안녕히 계세요",opts:["안녕히 가세요","안녕히 계세요","안녕하세요","안녕"],hint:"Host STAYS. Wish them to 'stay in peace.'"},
 {type:"mc",q:"What does 서비스 ACTUALLY mean in Korean?",opts:["Customer service","Restaurant / café","Waiter / server","Free bonus / extra"],ans:"Free bonus / extra",hint:"Konglish false friend!"},
 {type:"mc",q:"한국 = 한 + 국. What does 국 mean?",opts:["Country","People","Language","Hello"],ans:"Country",hint:"한국, 미국, 중국 all end in 국. What do they all have in common?"},
 {type:"fb",s:"저는 학생___.\n(I am a student.)",a:"이에요",opts:["이에요","예요","아니에요","입니다"],hint:"Vowel ending or consonant ending?"},
 {type:"match",pairs:[{nl:"안녕하세요",en:"hello"},{nl:"감사합니다",en:"thank you"},{nl:"죄송합니다",en:"I'm sorry"},{nl:"네",en:"yes"}]},
 {type:"mc",q:"'Goodbye' to someone leaving:",opts:["안녕히 계세요","안녕히 가세요","안녕하세요","만나서 반갑습니다"],ans:"안녕히 가세요",hint:"The other person is leaving. You wish them peace as they depart."},
  {type:"mc",q:"저는 밥을 먹어요. The verb 먹어요 goes:",opts:["First","After the subject","At the END","Before the object"],ans:"At the END",hint:"SOV: Subject Object Verb. Verb always last."},
  {type:"fb",s:"A: ___이 뭐예요? B: 제 이름은 민수예요.\n(What is your name?)",a:"이름",opts:["이름","저는","어디","뭐"],hint:"The question asks for a name."},
  {type:"mc",q:"Someone points at an object and asks 이것은 뭐예요? They want to know:",opts:["Where it is","How much it costs","Whose it is","What it is"],ans:"What it is",hint:"뭐 = what. 이것 = this thing."},
 {type:"mc",q:"저는 의사가 아니에요. This means:",opts:["I am not a doctor","I am a doctor","I want to be a doctor","Where is the doctor?"],ans:"I am not a doctor",hint:"아니에요 = am not / is not"},
 {type:"fb",s:"미국 사람이에요? 아니요, ___ 사람이에요.\n(No, I'm Korean.)",a:"한국",opts:["한국","미국","일본","중국"],hint:"한 + 국. The country whose language you are studying."},
 {type:"match",pairs:[{nl:"만나서 반갑습니다",en:"nice to meet you"},{nl:"안녕히 가세요",en:"goodbye (to leaver)"},{nl:"안녕히 계세요",en:"goodbye (to stayer)"},{nl:"괜찮아요",en:"it's okay"}]},
  {type:"mc",q:"해요체 is which type of speech?",opts:["Very formal","Polite everyday","Casual (no -요)","Written only"],ans:"Polite everyday",hint:"해요체 = the default speech level for daily conversation with strangers and acquaintances."},
 {type:"mc",q:"In the dictionary, all Korean verbs end in:",opts:["-요","-세요","-다","-하"],ans:"-다",hint:"Dictionary form: always ..."},
 {type:"fb",s:"Someone bumps into you and says 죄송합니다. You say: ___",a:"괜찮아요",opts:["괜찮아요","감사합니다","안녕하세요","만나서 반갑습니다"],hint:"When someone apologizes, you reassure them that no harm was done."},
 {type:"match",pairs:[{nl:"커피",en:"coffee"},{nl:"택시",en:"taxi"},{nl:"핸드폰",en:"cellphone"},{nl:"바이트",en:"part-time job"}]},
  {type:"mc",q:"In a three-syllable Korean name, is the family name the first or last syllable group?",opts:["민수","수","민","김"],ans:"김",hint:"Korean: family name FIRST, given name second."},
 {type:"mc",q:"A Korean asks your age within 5 minutes. This is:",opts:["Normal in Korean culture","Rude in Korean culture","Only for close friends","A workplace question"],ans:"Normal in Korean culture",hint:"Age determines speech level, so Koreans ask early"},
 ]},
 ]};

export default UNIT_1;
