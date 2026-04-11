// Unit 8 — 아프면 쉬세요
// Health, Conditional & Ability

export default {n:8,lang:"ko",srcLang:"en",track:"v2",title:"아프면 쉬세요",sub:"Health, Conditional & Ability",icon:"🏥",level:"A2.1",color:"#E74C3C",lessons:[
  {id:"kou8l1.1",title:"Face and Core Body",icon:"🧑",xp:16,board:true,steps:[
        {type:"intro",title:"Your Body in Korean",desc:"Body part vocabulary. Most are Sino-Korean compounds.",goals:["Learn 13 core body parts","See Sino-Korean compounds in body/health vocabulary","Prepare for 아프다 (to hurt) in the next lesson","Build the vocabulary base for Korean healthcare"]},
        {type:"teach",trg:"머리",src:"head",pos:"noun",gender:null,note:"머리: head. Also means hair.\nCOMPOUND: 두통 = 두 (head) + 통 (pain) = headache.\n머리카락: hair strands.",example:"머리가 좋아요.",exampleSrc:"She's smart. (literally: head is good)",deepDive:{
          title:"두 (Head) in Compounds",
          text:"두뇌: brain (두 head + 뇌 brain).\n두통약: headache medicine (두통 + 약).\n\n머리가 아파요: My head hurts.\n머리가 좋아요: Smart (head is good).\n머리가 나빠요: Not smart (head is bad).\n\n머리 does double duty: the body part AND intelligence."
        ,funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"teach",trg:"눈",src:"eye",pos:"noun",gender:null,phonetic:"nun",note:"눈: eye.\n⚠️ Also means snow (same spelling, different word).\nCOMPOUND: 눈물 = 눈 (eye) + 물 (water) = tears.",example:"눈이 크고 예뻐요.",exampleSrc:"Her eyes are big and pretty.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"teach",trg:"코",src:"nose",pos:"intj",gender:null,phonetic:"ko",note:"코: nose.\nCOMPOUND: 코 (nose) + 물 (water).\n콧물: runny nose (literally nose-water).",example:"그 사람은 코가 높아요.",exampleSrc:"That person has a sharp nose.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"mc",q:"눈 means:",opts:["eye","nose","mouth","ear"],ans:"eye",hint:"This word also means snow. 눈물 = ___ + water = tears."},
        {type:"teach",trg:"입",src:"mouth",pos:"noun",gender:null,phonetic:"ip",note:"입: mouth.\n입구 = entrance (입 mouth + 구 opening).",example:"A: 아기가 뭘 해요? B: 입을 크게 벌리고 있어요. A: 밥을 먹고 싶어요? B: 네, 입이 작아서 천천히 먹어요.",exampleSrc:"A: What is the baby doing? B: She is opening her mouth wide. A: Does she want to eat? B: Yes, her mouth is small so she eats slowly.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"귀",src:"ear",pos:"noun",gender:null,phonetic:"gwi",note:"귀: ear.\n귀엽다 (cute) comes from 귀 (ear)  -  cute enough to bite!",example:"A: 어디가 아파요? B: 귀가 아파요. A: 언제부터 아팠어요? B: 어제부터요. 소리가 잘 안 들려요.",exampleSrc:"A: Where does it hurt? B: My ear hurts. A: Since when did it hurt? B: Since yesterday. I can't hear well.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"목",src:"neck / throat",pos:"noun",gender:null,note:"목: neck AND throat.\nCOMPOUND: 목소리 = 목 (throat) + 소리 (sound) = voice.\n목걸이 = 목 (neck) + 걸이 (hanging thing) = necklace.",example:"A: 오늘 목이 아파요. B: 감기에 걸렸어요? A: 아마요. 목소리도 이상해요. B: 따뜻한 물을 마시세요.",exampleSrc:"A: My throat hurts today. B: Did you catch a cold? A: Maybe. My voice sounds weird too. B: Drink warm water.",deepDive:{
          title:"목 in Health",
          text:"목이 아파요.\n→ My throat hurts.\n\n감기에 걸리면 목이 아파요.\n→ If you catch a cold, your throat hurts.\n\n목: one of the first words you need at a Korean doctor."
        ,funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"mc",q:"목이 아파요 can mean:",opts:["Neck only (outside)","Throat only (inside)","Both neck and throat","Neither meaning"],ans:"Both neck and throat",hint:"In Korean, 목 has a dual meaning covering two related body parts."},
        {type:"teach",trg:"배",src:"stomach / belly",pos:"noun",gender:null,note:"배: stomach/belly.\n배가 고파요: I'm hungry.\n배가 불러요: I'm full.\n⚠️ 배 also means: pear, boat, double.",example:"A: 점심 먹었어요? B: 아니요, 아직 안 먹었어요. 배가 고파요. A: 같이 밥 먹으러 가요. B: 좋아요! 배가 너무 고파요.",exampleSrc:"A: Did you eat lunch? B: No, I haven't eaten yet. I'm hungry. A: Let's go eat together. B: Great! I'm so hungry.",deepDive:{
          title:"배 Polysemy",
          text:"Korean has many words with multiple meanings:\n\n배가 아파요: My stomach hurts.\n배가 고파요: I'm hungry.\n배가 불러요: I'm full.\n\n배 = pear (the fruit).\n배 = boat/ship (the vehicle).\n배 = double (as in twice).\n\nContext always clarifies which 배."
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}}
  ]},
  {id:"kou8l1.2",title:"Limbs and Back",icon:"💪",xp:16,board:true,steps:[
        {type:"intro",title:"Arms, Legs, Shoulders, Back",desc:"손 / 발 / 팔 / 다리\n→ hand / foot / arm / leg\n\nWords for the doctor.",goals:["Name all limbs in Korean","Use 어깨, 등, 허리 for upper and lower back","Say 팔이 아파요, 다리가 아파요"]},
        {type:"teach",trg:"손",src:"hand",pos:"noun",gender:null,phonetic:"son",note:"손: hand.\nCOMPOUND: 손가락 = 손 (hand) + 가락 (rod) = finger.\n손님 = 손 (hand) + 님 (honorific) = guest.",example:"A: 손이 왜 그래요? B: 요리하다가 손을 다쳤어요. A: 많이 아파요? B: 조금 아파요. 손가락도 아파요.",exampleSrc:"A: What happened to your hand? B: I hurt my hand while cooking. A: Does it hurt a lot? B: It hurts a little. My fingers hurt too.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"teach",trg:"발",src:"foot",pos:"noun",gender:null,phonetic:"bal",note:"발: foot.\nCOMPOUND: 발가락 = 발 (foot) + 가락 (rod) = toe.\n발음 = 발 (release) + 음 (sound) = pronunciation.",example:"A: 오래 걸었어요? B: 네, 두 시간 동안 걸었어요. A: 발이 아프지 않아요? B: 좀 아파요. 발이 부었어요.",exampleSrc:"A: Did you walk for a long time? B: Yes, I walked for two hours. A: Don't your feet hurt? B: They hurt a bit. My feet are swollen.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"teach",trg:"팔",src:"arm",pos:"num",gender:null,phonetic:"pal",note:"팔: arm.\nCOMPOUND: 팔꿈치 = 팔 (arm) + 꿈치 (bend) = elbow.\n⚠️ 팔 also means 8 (the number). Different origin.",example:"A: 어디가 아파요? B: 팔이 아파요. 운동을 너무 많이 했어요. A: 오른쪽 팔이에요? B: 네, 오른쪽 팔이 아파요.",exampleSrc:"A: Where does it hurt? B: My arm hurts. I exercised too much. A: Is it the right arm? B: Yes, my right arm hurts.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"mc",q:"발 means:",opts:["foot","hand","arm","leg"],ans:"foot",hint:"발가락 = ___-stick = toe. The body part at the bottom of your leg."},
        {type:"teach",trg:"다리",src:"leg",pos:"noun",gender:null,phonetic:"da-ri",note:"다리: leg.\n⚠️ Also means bridge (다리 connects two sides).\nCOMPOUND: 다리를 꼬다 = to cross one's legs.",example:"A: 축구를 했어요? B: 네, 그래서 다리가 아파요. A: 어느 다리요? B: 왼쪽 다리가 아파요. 많이 뛰었어요.",exampleSrc:"A: Did you play soccer? B: Yes, so my legs hurt. A: Which leg? B: My left leg hurts. I ran a lot.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"mc",q:"손 means:",opts:["hand","stomach","arm","shoulder"],ans:"hand",hint:"손가락 = ___-stick = finger. 손님 = ___-person = guest."},
        {type:"teach",trg:"어깨",src:"shoulder",pos:"noun",gender:null,phonetic:"eo-kkae",note:"어깨: shoulder.\n어깨 통증: shoulder pain (very common complaint).\n어깨를 펴다: to straighten your shoulders.",example:"A: 요즘 어깨가 많이 아파요. B: 컴퓨터를 오래 했어요? A: 네, 매일 8시간 일해요. B: 어깨를 자주 쉬어 주세요.",exampleSrc:"A: My shoulders hurt a lot these days. B: Did you use the computer for a long time? A: Yes, I work 8 hours every day. B: Please rest your shoulders often.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"등",src:"back",pos:"noun",gender:null,phonetic:"deung",note:"등: back (upper back area).\n등산: mountain climbing (등 back/climb + 산 mountain).\n⚠️ 등 also means 'class/grade' and 'light/lamp'.",example:"A: 등이 왜 아파요? B: 어제 등산을 했어요. A: 오래 걸었어요? B: 네, 네 시간 동안 걸었어요. 등이 너무 아파요.",exampleSrc:"A: Why does your back hurt? B: I went hiking yesterday. A: Did you walk for a long time? B: Yes, I walked for four hours. My back hurts so much.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"허리",src:"lower back / waist",pos:"noun",gender:null,phonetic:"heo-ri",note:"허리: waist / lower back.\n허리띠: belt (허리 waist + 띠 band).\nThe #1 complaint in Korean offices.",example:"A: 왜 서 있어요? B: 허리가 아파서 앉을 수 없어요. A: 언제부터 아팠어요? B: 이번 주부터요. 오래 앉아서 허리가 아파요.",exampleSrc:"A: Why are you standing? B: My lower back hurts so I can't sit. A: Since when did it hurt? B: Since this week. I sat too long so my lower back hurts.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"mc",q:"등 means:",opts:["back","stomach","shoulder","waist"],ans:"back",hint:"등산 = ___-mountain = mountain climbing. The upper rear of the torso."},
        {type:"tip",title:"🦴 Body Parts Map",deepDive:{
          title:"Full Body Parts Reference",
          text:"머리 = head\n눈 = eye\n코 = nose\n입 = mouth\n귀 = ear\n목 = neck\n\n팔 = arm\n손 = hand\n배 = stomach\n다리 = leg\n발 = foot\n허리 = lower back\n\n아파요 = it hurts.\n머리가 아파요 = My head hurts.\n배가 아파요 = My stomach hurts.\n목이 아파요 = My throat hurts.\n\n이/가 (not 은/는) because the pain is NEW information."
        },text:"Head and face: 머리, 눈, 코, 입, 귀, 목\nBody: 팔, 손, 배, 다리, 발, 허리\n\nPattern: body part + 이/가 아파요 = it hurts.\n머리가 아파요 = My head hurts."},
        {type:"mc",q:"머리 means both:",opts:["Head and hair","Head and hand","Eye and nose","Neck and throat"],ans:"Head and hair",hint:"머리 = head / hair. 머리카락 = hair strands specifically."},
        {type:"mc",q:"두통 = 두 + 통. 통 means:",opts:["Head","Pain","Medicine","Stomach"],ans:"Pain",hint:"통 (痛) = pain. 두통 = head + pain = headache."},
        {type:"mc",q:"목소리 = 목 + 소리. 소리 means:",opts:["Voice","Throat","Neck","Sound"],ans:"Sound",hint:"소리 = sound. 목소리 = throat + sound = voice."},
        {type:"mc",q:"'My stomach hurts'  -  correct particle:",opts:["배는 아파요","배가 아파요","배를 아파요","배에 아파요"],ans:"배가 아파요",hint:"Pain is new information → 이/가 (subject marker), not 은/는 (topic)."},
        {type:"mc",q:"손가락 = 손 + 가락. 가락 means:",opts:["Finger","Stick/rod","Nail","Ring"],ans:"Stick/rod",hint:"가락 = stick/rod. 손가락 = hand-stick = finger. 발가락 = foot-stick = toe."},
        {type:"fb",opts:["목","머리","배","귀"],hint:"목 = throat/neck",s:"___가 아파요.\n(My throat hurts.)",a:"목"},
        {type:"fb",opts:["허리","등","배","다리"],hint:"... = waist/lower back",s:"___가 아파요.\n(My lower back hurts.)",a:"허리"},
        {type:"match",pairs:[{trg:"머리",src:"head"},{trg:"배",src:"stomach"},{trg:"손",src:"hand"},{trg:"다리",src:"leg"}]},
        {type:"match",pairs:[{trg:"어깨",src:"shoulder"},{trg:"허리",src:"lower back"},{trg:"목",src:"throat/neck"},{trg:"등",src:"back"}]},
        {type:"drag_fill",hint:"My throat hurts and my head hurts too. I think it's a cold.",s:"{1}가 아프고 {2}도 아파요. 감기인 것 같아요.",blanks:{"1":"목","2":"머리"},pool:["목","머리","손","발","배"]},
        {type:"mc",q:"눈 can mean both:",opts:["Eye and snow","Eye and ear","Nose and mouth","Head and hair"],ans:"Eye and snow",hint:"눈물 = ___-water = tears (body part). 눈이 와요 = ___ is falling (weather)."}
  ]},
  {id:"kou8l1.3",title:"More Body Parts",icon:"🦵",xp:18,board:true,steps:[
        {type:"intro",title:"Face, Fingers, and More",desc:"얼굴 → face\n손가락 → finger\n무릎 → knee\n\nExpanding your body vocabulary for the doctor's office.",goals:["Learn 8 additional body parts","Use them in health sentences","Complete your A1 body parts set"]},
        {type:"teach",trg:"얼굴",src:"face",pos:"noun",gender:null,phonetic:"eol-gul",note:"얼굴: face.\n얼굴이 빨갛다: face is red.",example:"A: 얼굴이 빨개요! B: 네, 좀 부끄러워요.",exampleSrc:"A: Your face is red! B: Yes, I'm a bit embarrassed.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"이",src:"tooth / teeth",pos:"noun",gender:null,phonetic:"i",note:"이: tooth/teeth.\n치과: dentist (dental clinic).\nCOMPOUND: 치(tooth/齒) + 과(department/科).",example:"A: 이가 아파요. B: 치과에 가세요.",exampleSrc:"A: My tooth hurts. B: Go to the dentist.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"teach",trg:"손가락",src:"finger",pos:"noun",gender:null,phonetic:"son-ga-rak",note:"손가락: finger.\nCOMPOUND: 손(hand) + 가락(stick/digit).\n발가락: toe (발 + 가락).",example:"A: 손가락을 다쳤어요? B: 네, 칼로 베었어요.",exampleSrc:"A: Did you hurt your finger? B: Yes, I cut it with a knife.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"teach",trg:"무릎",src:"knee",pos:"noun",gender:null,phonetic:"mu-reup",note:"무릎: knee.\n무릎이 아프다: my knee hurts.",example:"A: 무릎이 아파요. B: 계단을 많이 올라갔어요?",exampleSrc:"A: My knee hurts. B: Did you climb a lot of stairs?",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"mc",q:"이가 아파요 means:",opts:["My tooth hurts","My eye hurts","My ear hurts","My stomach hurts"],ans:"My tooth hurts",hint:"이 = tooth. 치과 = dental clinic"},
        {type:"teach",trg:"심장",src:"heart (organ)",pos:"noun",gender:null,phonetic:"sim-jang",note:"심장: heart (the organ).\nCOMPOUND: 심(heart/心) + 장(organ/臟).\n마음: heart (emotions). Different word!",example:"A: 심장이 빨리 뛰어요. B: 운동을 많이 했어요?",exampleSrc:"A: My heart is beating fast. B: Did you exercise a lot?",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"teach",trg:"머리카락",src:"hair (on head)",pos:"noun",gender:null,phonetic:"meo-ri-ka-rak",note:"머리카락: hair (on head).\nCOMPOUND: 머리(head) + 카락(strand).\n머리를 자르다: to cut hair.",example:"A: 머리카락이 길어요. B: 네, 자르고 싶어요.",exampleSrc:"A: Your hair is long. B: Yes, I want to cut it.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"teach",trg:"발가락",src:"toe",pos:"noun",gender:null,phonetic:"bal-ga-rak",note:"발가락: toe.\nCOMPOUND: 발(foot) + 가락(digit).\nSame pattern as 손가락 (finger).",example:"A: 발가락을 부딪쳤어요! B: 아야! 괜찮아요?",exampleSrc:"A: I stubbed my toe! B: Ouch! Are you okay?",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"teach",trg:"가슴",src:"chest / breast",pos:"noun",gender:null,phonetic:"ga-seum",note:"가슴: chest/breast.\n가슴이 답답하다: chest feels tight/stuffy.\n가슴이 아프다: heartache (emotional too).",example:"A: 가슴이 답답해요. B: 깊이 숨을 쉬세요.",exampleSrc:"A: My chest feels tight. B: Take a deep breath.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"mc",q:"손가락 and 발가락 share the element:",opts:["가락 (digit/stick)","손 (hand)","발 (foot)","락 (fall)"],ans:"가락 (digit/stick)",hint:"손 + 가락 = finger. 발 + 가락 = toe. 가락 = the digit"},
        {type:"mc",q:"심장 vs 마음: what's the difference?",opts:["심장 = physical heart, 마음 = emotional heart","Both mean the same","심장 = emotional, 마음 = physical","Neither means heart"],ans:"심장 = physical heart, 마음 = emotional heart",hint:"심장 is the organ. 마음 is feelings."},
        {type:"fb",opts:["이","코","귀","눈"],hint:"치과 = dental clinic. What body part goes to the dentist?",s:"___이 아파요. 치과에 가야 돼요.\n(My tooth hurts. I need to go to the dentist.)",a:"이"},
        {type:"fb",opts:["심장","머리","배","가슴"],hint:"The organ that pumps blood",s:"___이 빨리 뛰어요.\n(My heart is beating fast.)",a:"심장"},
        {type:"match",pairs:[{trg:"얼굴",src:"face"},{trg:"손가락",src:"finger"},{trg:"무릎",src:"knee"},{trg:"심장",src:"heart (organ)"}]},
        {type:"match",pairs:[{trg:"머리카락",src:"hair"},{trg:"발가락",src:"toe"},{trg:"이",src:"tooth"},{trg:"가슴",src:"chest"}]},
        {type:"drag_fill",hint:"My knee hurts and my lower back hurts too",s:"{1}이 아프고 {2}도 아파요.",blanks:{"1":"무릎","2":"허리"},pool:["무릎","허리","손가락","얼굴"]},
        {type:"mc",q:"머리카락을 자르다 means:",opts:["to cut hair","to wash hair","to brush hair","to grow hair"],ans:"to cut hair",hint:"자르다 = to cut. 머리카락 = hair on head"}
  ]},
  {id:"kou8l2",title:"아프다 + 이/가",icon:"🤒",xp:22,board:true,steps:[
        {type:"intro",title:"Saying What Hurts",desc:"아프다\n→ to hurt\n\nUses 이/가, not 은/는. New info = subject marker.",goals:["Use 아프다 with body parts","Understand why 이/가 (not 은/는) for pain","Learn common symptom phrases","Build natural health complaint sentences"]},
        {type:"teach",trg:"아프다 → 아파요",src:"to hurt / to be sick",pos:"verb",gender:null,note:"아프다: to hurt, to be sick.\n\n아프다 → 아파요 (bright ㅏ → 아요).",example:"A: 어디가 아파요? B: 머리가 아파요.",exampleSrc:"A: Where does it hurt? B: My head hurts.",deepDive:{
          title:"Conjugating 아프다",
          text:"⚠️ BUT: 아프다 is a ㅡ-stem verb.\n아프 + 아요 → ㅡ drops → 아파요.\nSame ㅡ-drop pattern as 쓰다 → 써요.\n\n어디가 아파요? = Where hurts? = What's wrong?"
        ,funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"teach",trg:"머리가 아파요",src:"My head hurts",pos:"intj",gender:null,note:"Body part + 이/가 + 아파요 = My ___ hurts.\n\n이/가  -  NOT 은/는.",example:"A: 어디가 아파요? B: 머리가 아파요.",exampleSrc:"A: Where does it hurt? B: My head hurts.",deepDive:{
          title:"Using 이/가 아파요 for Pain",
          text:"Why 이/가? Because the pain is NEW information.\n\nDoctor: 어디가 아파요? (Where hurts?)\nYou: 머리가 아파요. (My HEAD hurts  -  new info).\n\nIf you said 머리는 아파요, it would imply:\n'As for my head, it hurts (but other things are fine)'  -  weird in this context."
        ,funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"teach",trg:"감기에 걸리다",src:"to catch a cold",pos:"verb",gender:null,note:"감기: cold (illness).\n걸리다: to be caught/to catch (illness).\n",example:"A: 오늘 왜 안 왔어요? B: 감기에 걸렸어요. A: 많이 아파요? B: 네, 목이 아프고 콧물이 나요.",exampleSrc:"A: Why didn't you come today? B: I caught a cold. A: Are you very sick? B: Yes, my throat hurts and I have a runny nose.",deepDive:{
          title:"Using 감기에 걸리다",
          text:"감기에 걸렸어요: caught a cold.\n\nSymptoms of 감기:\n목이 아파요 (throat hurts)\n기침이 나요 (coughing: 기침 + 나다)\n콧물이 나요 (runny nose: 콧물 + 나다)\n열이 나요 (have a fever: 열 + 나다)"
        ,funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"mc",q:"머리가 아파요 means:",opts:["My head hurts","to hurt","to catch a cold","I have a headache medicine"],ans:"My head hurts",hint:"머리 + 가 + 아파요 = My head hurts. Uses subject marker for new info."},
        {type:"teach",trg:"열이 나다",src:"to have a fever",pos:"verb",gender:null,note:"열 (熱): heat/fever.\n나다: to come out / to arise.\n",example:"A: 얼굴이 빨개요. 괜찮아요? B: 열이 나요. A: 체온이 몇 도예요? B: 38도예요. 좀 쉬고 싶어요.",exampleSrc:"A: Your face is red. Are you okay? B: I have a fever. A: What is your temperature? B: It's 38 degrees. I want to rest a bit.",deepDive:{
          title:"Using 열이 나다",
          text:"열이 나요 = fever arises = I have a fever.\n\nSame 나다 pattern:\n기침이 나요: cough comes out = I'm coughing.\n콧물이 나요: nose-water comes out = runny nose.\n땀이 나요: sweat comes out = I'm sweating."
        ,funFact:"Built from Chinese characters (Hanja). About 60% of Korean vocabulary has Hanja roots."}},
        {type:"teach",trg:"기침",src:"cough",pos:"noun",gender:null,phonetic:"gi-chim",note:"기침: cough.\n기침이 나다 means to have a cough. (기침 comes out)",example:"A: 기침을 많이 해요? B: 네, 어제부터 기침이 나요. A: 약을 먹었어요? B: 아직 안 먹었어요. 약국에 가야 해요.",exampleSrc:"A: Are you coughing a lot? B: Yes, I've had a cough since yesterday. A: Did you take medicine? B: Not yet. I need to go to the pharmacy.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"콧물",src:"runny nose",pos:"noun",gender:null,phonetic:"kot-mul",note:"콧물: runny nose.\nCOMPOUND: 코 (nose) + 물 (water). Literally nose-water.",example:"콧물이 나요.",exampleSrc:"I have a runny nose.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"teach",trg:"약",src:"medicine",pos:"noun",gender:null,note:"약 (藥): medicine.\n\n약을 먹다: to take medicine.",example:"A: 감기에 걸렸어요. B: 약을 먹었어요? A: 아니요, 아직이요. B: 빨리 약을 먹으세요. 그러면 좀 나을 거예요.",exampleSrc:"A: I caught a cold. B: Did you take medicine? A: No, not yet. B: Take medicine quickly. Then you'll feel better.",deepDive:{
          title:"Important Notes",
          text:"⚠️ Korean says '먹다' (eat) medicine, not '마시다' (drink).\n\n약국: pharmacy (약 + 국: medicine + bureau).\n약사: pharmacist (약 + 사: medicine + person/expert)."
        ,funFact:"Built from Chinese characters (Hanja). About 60% of Korean vocabulary has Hanja roots."}},
        {type:"mc",q:"기침 means:",opts:["cough","fever","medicine","runny nose"],ans:"cough",hint:"기침이 나요 = I have a ___. A symptom involving the throat and lungs."},
        {type:"tip",title:"🏥 At the Doctor  -  Key Phrases",deepDive:{
          title:"Doctor Visit: Symptoms, Allergies, and Advice",
          text:"배가 아파요 = My stomach hurts\n열이 나요 = I have a fever\n기침이 나요 = I have a cough\n\n= What are the symptoms?\n\n알레르기가 있어요?\n= Do you have any allergies?\n\n약을 드세요.\n= Please take this medicine. (드시다 = honorific of 먹다)\n\n푹 쉬세요.\n= Please rest well. (푹 = deeply/thoroughly)"
        },text:"어디가 아파요? = Where does it hurt?\n언제부터 아팠어요? = Since when have you been in pain?\n증상이 뭐예요? = What are your symptoms?\n\n머리가 아파요 = I have a headache"},
        {type:"mc",q:"'My head hurts'  -  correct:",opts:["머리는 아파요","머리가 아파요","머리를 아파요","머리에 아파요"],ans:"머리가 아파요",hint:"Pain = new info → 이/가, not 은/는."},
        {type:"mc",q:"감기에 걸렸어요 means:",opts:["I have allergies","I caught a cold","I broke my arm","I have a headache"],ans:"I caught a cold",hint:"감기 = cold. 걸리다 = to catch. 걸렸어요 = caught (past)."},
        {type:"mc",q:"약을 ___요.\n(I take medicine.)  -  correct verb:",opts:["마셔","먹어","해","가"],ans:"먹어",hint:"Korean says 약을 먹다 (eat medicine), not drink."},
        {type:"mc",q:"열이 나요 literally means:",opts:["Fever exists here","Fever comes out / arises","Fever is very hot","Fever hurts a lot"],ans:"Fever comes out / arises",hint:"나다 = to arise/come out. 열이 나다 = fever arises."},
        {type:"mc",q:"콧물 = 코 + ㅅ + 물. What is 물?",opts:["Water","Nose","Cold","Sick"],ans:"Water",hint:"You already know 물 (water). 콧물 literally = nose + ___."},
        {type:"fb",opts:["걸렸어요","걸려요","걸리요","걸었어요"],hint:"감기에 ___ = to catch a cold. Use past tense of 걸리다.",s:"감기에 ___. 목이 아파요.\n(I caught a cold. My throat hurts.)",a:"걸렸어요"},
        {type:"fb",opts:["열","기침","콧물","감기"],hint:"체온 38도: what medical symptom produces high temperature?",s:"___이 나요. 체온이 38도예요.\n(I have a fever. Temperature is 38°.)",a:"열"},
        {type:"fb",opts:["약","밥","물","주스"],hint:"이제 좀 나아요 (feeling better now). What did you take to feel better?",s:"___을 먹었어요. 이제 좀 나아요.\n(I took medicine. I feel a bit better now.)",a:"약"},
        {type:"match",pairs:[{trg:"열이 나요",src:"have a fever"},{trg:"기침이 나요",src:"coughing"},{trg:"콧물이 나요",src:"runny nose"},{trg:"머리가 아파요",src:"headache"}]},
        {type:"drag_fill",hint:"I caught a cold. My throat hurts and I have a fever. I took medicine.",s:"감기에 {1}. {2}가 아프고 {3}이 나요. {4}을 먹었어요.",blanks:{"1":"걸렸어요","2":"목","3":"열","4":"약"},pool:["걸렸어요","걸려요","목","배","열","기침","약","밥"]},
        {type:"mc",q:"약국 = 약 + 국. 국 means:",opts:["Country/bureau","Medicine","Store","Doctor"],ans:"Country/bureau",hint:"국 (局): bureau/office. 약국 = medicine bureau = pharmacy."}
  ]},
  {id:"kou8l3",title:"-(으)면: 만약에...",icon:"🔀",xp:25,board:true,steps:[
        {type:"intro",title:"If... Then...  -  The Conditional",desc:"아프면 쉬세요.\n→ If sick, rest.\n\nNew grammar: -(으)면 (if/when).",goals:["Learn -(으)면 conditional formation","Apply to consonant and vowel stems","Use in health and daily life contexts","Combine with verbs, adjectives, and 이다"]},
        {type:"teach",trg:"-(으)면",src:"if / when",pos:"part",gender:null,note:"-(으)면: if / when.\n\nVowel stem → -면: 가다 → 가면.\nConsonant stem → -으면: 먹다 → 먹으면.",example:"A: 내일 비가 오면 어떻게 해요? B: 집에서 쉬어요. A: 비가 안 오면요? B: 공원에 가요.",exampleSrc:"A: What do we do if it rains tomorrow? B: We rest at home. A: What if it doesn't rain? B: We go to the park.",deepDive:{
          title:"More Examples",
          text:"ㄹ stem → -면 (ㄹ stays): 살다 → 살면 (if you live)\n\n아프다 → 아프면 (if sick)\n\nThe Train metaphor:\n-(으)면 is a CONDITIONAL car.\nStem + [conditional car] + ... main clause verb."
        ,funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"teach",trg:"가다 → 가면",src:"if (you) go",pos:"intj",gender:null,note:"가다: vowel stem 가.\nVowel stems add -면 directly.\n가다 → 가면 (if you go).",example:"A: 이번 여름에 뭐 해요? B: 한국에 가면 삼겹살을 먹을 거예요. A: 좋겠다! 저도 가고 싶어요. B: 같이 가면 더 재미있어요.",exampleSrc:"A: What are you doing this summer? B: If I go to Korea, I'll eat samgyeopsal. A: Sounds great! I want to go too. B: If we go together, it's more fun.",deepDive:{title:"More Vowel Stem Examples",text:"하다 → 하면 (if you do)\n오다 → 오면 (if you come)\n보다 → 보면 (if you see/watch)",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"teach",trg:"먹다 → 먹으면",src:"if (you) eat",pos:"intj",gender:null,note:"먹다: consonant stem 먹.\nConsonant stems: buffered form.\n먹다 → 먹으면 (if you eat).",example:"A: 매운 음식을 먹으면 어떻게 돼요? B: 배가 아파요. A: 그러면 안 매운 음식을 먹으세요. B: 네, 많이 먹으면 배가 불러요.",exampleSrc:"A: What happens if you eat spicy food? B: My stomach hurts. A: Then eat non-spicy food. B: Yes, if I eat a lot, I get full.",deepDive:{title:"More Consonant Stem Examples",text:"있다 → 있으면 (if there is / if you have)\n없다 → 없으면 (if there isn't)\n읽다 → 읽으면 (if you read)",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"mc",q:"학교에 가요 means:",opts:["I eat at school","I go to school","School is big","I like school"],ans:"I go to school",hint:"가다 = to go. 학교에 = to school."},
        {type:"teach",trg:"아프다 → 아프면",src:"if (you're) sick",pos:"part",gender:null,note:"아프다: ㅡ stem.\nㅡ stays before -면.\n아프다 → 아프면 (if sick).",example:"A: 아프면 어떻게 해요? B: 병원에 가요. A: 병원에 가면 뭐 해요? B: 의사 선생님을 만나요.",exampleSrc:"A: What do you do if you're sick? B: I go to the hospital. A: What do you do when you go to the hospital? B: I see the doctor.",deepDive:{
          title:"ㅡ Stems with -(으)면",
          text:"ㅡ does NOT drop before -면.\n(ㅡ only drops before VOWEL endings like -아/어요.)\n\n크다 → 크면 (if it's big)\n바쁘다 → 바쁘면 (if you're busy)\n예쁘다 → 예쁘면 (if it's pretty)"
        ,funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"teach",trg:"살다 → 살면",src:"if (you) live",pos:"intj",gender:null,note:"살다: ㄹ stem.\nㄹ stays before -면.\n살다 → 살면 (if you live).",example:"A: 서울에 살면 뭐가 좋아요? B: 지하철이 편해요. A: 부산에 살면요? B: 바다가 가까워요. 좋아요.",exampleSrc:"A: What's good about living in Seoul? B: The subway is convenient. A: What about living in Busan? B: The ocean is close. It's nice.",deepDive:{title:"ㄹ Stems with -(으)면",text:"ㄹ stems keep ㄹ before 면:\n알다 → 알면 (if you know)\n만들다 → 만들면 (if you make)",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"tip",title:"📋 -(으)면 Formation Chart",deepDive:{
          title:"Extended Reference",
          text:"마시다 → 마시면 = if (you) drink\n\nCONSONANT STEM → add -으면:\n먹다 → 먹으면 = if (you) eat\n읽다 → 읽으면 = if (you) read\n\nCONSONANT STEM → -으면:\n먹다 → 먹으면 (if you eat)\n있다 → 있으면 (if there is)\n없다 → 없으면 (if there isn't)\n읽다 → 읽으면 (if you read)\n\nㅡ STEM → -면 (ㅡ stays):\n아프다 → 아프면 (if sick)\n크다 → 크면 (if big)\n바쁘다 → 바쁘면 (if busy)\n\nㄹ STEM → -면 (ㄹ stays):\n살다 → 살면 (if you live)\n알다 → 알면 (if you know)\n\nIRREGULARS with -(으)면:\n듣다 → 들으면 (if you listen. ㄷ→ㄹ)\n덥다 → 더우면 (if hot. ㅂ→우)\n춥다 → 추우면 (if cold. ㅂ→우)"
        },text:"VOWEL STEM → add -면 directly:\n가다 → 가면 = if (you) go\n오다 → 오면 = if (you) come\n하다 → 하면 = if (you) do"},
        {type:"teach",trg:"덥다 → 더우면",src:"to be hot → if it's hot",pos:"verb",gender:null,note:"덥다: ㅂ-irregular.\n덥다 → 더우면\nㅂ becomes 우 before the ending.\n",example:"A: 오늘 너무 더워요. B: 더우면 에어컨을 켜세요. A: 추우면 어떻게 해요? B: 추우면 히터를 켜세요.",exampleSrc:"A: It's so hot today. B: If it's hot, turn on the AC. A: What if it's cold? B: If it's cold, turn on the heater.",deepDive:{
          title:"How to be hot Works",
          text:"Irregulars change BEFORE -(으)면:\nㄷ-irregular: 듣다 → 들으면\nㅂ-irregular: 덥다 → 더우면, 춥다 → 추우면\n\nThe irregular change happens whenever the stem meets a vowel  -  -(으) counts."
        ,funFact:"An irregular verb. Korean has about 7 irregular patterns, but they follow consistent rules once you learn them."}},
        {type:"mc",q:"먹다 → conditional:",opts:["먹면","먹으면","먹에면","먹이면"],ans:"먹으면",hint:"Consonant stem → -으면. 먹 + 으면."},
        {type:"mc",q:"가다 → conditional:",opts:["가면","가으면","갈면","간면"],ans:"가면",hint:"Vowel stem → -면. 가 + 면."},
        {type:"mc",q:"아프다 → conditional:",opts:["아프면","아프으면","아파면","아픈면"],ans:"아프면",hint:"ㅡ stem → -면 (ㅡ stays before consonant). 아프 + 면."},
        {type:"mc",q:"덥다 → conditional:",opts:["덥으면","더우면","덥면","더워면"],ans:"더우면",hint:"ㅂ-irregular: 덥"},
        {type:"mc",q:"시간이 있으면 같이 가요. Translation:",opts:["I always have free time","If you have time, let us go","Time exists for everyone","I had time yesterday already"],ans:"If you have time, let us go",hint:"있으면 = if there is / if you have. 같이 = together."},
        {type:"mc",q:"비가 오면 우산을 가져가세요. 오면 means:",opts:["If it comes (rain)","Because it's coming","It came","It will come"],ans:"If it comes (rain)",hint:"-(으)면 = if/when. 비가 오면 = if rain comes = if it rains."},
        {type:"fb",opts:["아프","아파","아픈","아프은"],hint:"아프다 has a ㅡ stem. ㅡ stems take -면 directly. What is the stem?",s:"___면 쉬세요.\n(If you're sick, rest.)",a:"아프"},
        {type:"fb",opts:["있으","있","있어","이으"],hint:"Check: does the word end in a vowel or consonant?",s:"시간이 ___면 영화를 봐요.\n(If I have time, I watch movies.)",a:"있으"},
        {type:"fb",opts:["가","가으","간","갈"],hint:"Vowel stem or consonant stem?",s:"한국에 ___면 삼겹살을 먹을 거예요.\n(If I go to Korea, I'll eat samgyeopsal.)",a:"가"},
        {type:"match",pairs:[{trg:"가면",src:"if you go"},{trg:"먹으면",src:"if you eat"},{trg:"아프면",src:"if you're sick"},{trg:"있으면",src:"if there is"}]},
        {type:"drag_fill",hint:"If you're sick, go to the hospital. And take medicine.",s:"{1} 병원에 가세요. {2} 약을 드세요.",blanks:{"1":"아프면","2":"그리고"},pool:["아프면","아파서","그리고","그런데","아프고"]},
        {type:"mc",q:"듣다 → conditional (ㄷ-irregular):",opts:["듣으면","들으면","듣면","들면"],ans:"들으면",hint:"Apply the rule you just learned."}
  ]},
  {id:"kou8l4",title:"할 수 있어요!",icon:"💪",xp:25,board:true,steps:[
        {type:"intro",title:"Can / Can't  -  Ability and Possibility",desc:"할 수 있어요 / 할 수 없어요\n→ can / can't\n\nAbility, not situation.",goals:["Learn -(으)ㄹ 수 있다/없다 formation","Distinguish from 못 (situational inability)","Use in health and daily life contexts","Build ability statements with confidence"]},
        {type:"teach",trg:"-(으)ㄹ 수 있다",src:"can / is able to",pos:"intj",gender:null,note:"Can / able to do something.\n\nVowel stem + ㄹ 수 있다.\nConsonant stem + 을 수 있다.",example:"A: 한국어를 할 수 있어요? B: 네, 조금 할 수 있어요. A: 한자도 읽을 수 있어요? B: 아니요, 한자는 아직 못 읽어요.",exampleSrc:"A: Can you speak Korean? B: Yes, I can speak a little. A: Can you read Chinese characters too? B: No, I can't read Chinese characters yet.",deepDive:{
          title:"Using -(으)ㄹ 수 있다",
          text:"Vowel stem + ㄹ 수 있다: 가다 → 갈 수 있다\nConsonant stem + 을 수 있다: 먹다 → 먹을 수 있다\n하다 → 할 수 있다 (do → can do)\n\n수 (數): means 'way/method/ability'.\n있다: exists.\n\n갈 수 있다 = 'the way to go exists' = can go."
        ,funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"teach",trg:"-(으)ㄹ 수 없다",src:"cannot / is unable to",pos:"intj",gender:null,note:"Cannot do something (opposite).\n\nSame pattern, but with 없다.\n갈 수 없어요: can't go.",example:"A: 오늘 같이 갈 수 있어요? B: 미안해요, 오늘 갈 수 없어요. A: 왜요? B: 아파서 집에서 쉬어야 해요.",exampleSrc:"A: Can you go together today? B: Sorry, I can't go today. A: Why? B: I'm sick so I need to rest at home.",deepDive:{title:"Using -(으)ㄹ 수 없다",text:"갈 수 없어요: can't go.\n먹을 수 없어요: can't eat.\n할 수 없어요: can't do.\n\n수가 없다 = 'the way doesn't exist' = cannot.",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"tip",title:"💪 못 vs -(으)ㄹ 수 없다",deepDive:{
          title:"Full Comparison",
          text:"못 먹어요: I can't eat (right now: not hungry, sick...)\n\n먹을 수 없어요: I cannot eat (ability: allergic, forbidden...)\n\nIn practice, 못 is more casual/spoken.\n-(으)ㄹ 수 없다 is more formal/precise.\n\nFor abilities/skills:\n한국어를 할 수 있어요. ✓ (I CAN speak Korean)\n한국어를 못 해요. ✓ (I CAN'T speak Korean)\nBoth work here  -  overlapping meaning."
        },text:"Both translate to 'can't' in English.\nBut Korean hears them differently:\n\n못 가요: I can't go (situation: I'm busy, it's raining...)\n갈 수 없어요: I cannot go (ability/possibility: no bus, road closed...)"},
        {type:"teach",trg:"수영할 수 있어요",src:"I can swim",pos:"intj",gender:null,note:"수영하다: to swim.\n수영 (水泳): 수 (water) + 영 (swim).\n",example:"A: 바다에서 수영할 수 있어요? B: 네, 수영을 잘해요. A: 저는 수영을 못 해요. B: 수영을 배우면 좋아요. 같이 가요!",exampleSrc:"A: Can you swim in the ocean? B: Yes, I'm good at swimming. A: I can't swim. B: It's good if you learn to swim. Let's go together!",deepDive:{
          title:"Using 수영할 수 있어요",
          text:"수영하다 → 수영할 수 있어요 (to swim → can swim).\n\n수영할 수 있어요? = Can you swim?\n네, 수영할 수 있어요. = Yes, I can swim.\n아니요, 수영할 수 없어요. = No, I can't swim."
        ,funFact:"Built from Chinese characters (Hanja). About 60% of Korean vocabulary has Hanja roots."}},
        {type:"teach",trg:"운전할 수 있어요",src:"I can drive",pos:"intj",gender:null,note:"운전하다: to drive.\n운전 (運轉): 운 (carry/move) + 전 (turn/rotate).\n",example:"A: 운전할 수 있어요? B: 네, 작년에 면허를 받았어요. A: 그러면 내일 운전해 줄 수 있어요? B: 네, 좋아요. 어디에 가요?",exampleSrc:"A: Can you drive? B: Yes, I got my license last year. A: Then can you drive for me tomorrow? B: Sure. Where are we going?",deepDive:{title:"Using 운전할 수 있어요",text:"운전할 수 있어요? = Can you drive?\n운전면허: driver's license (운전 + 면허: driving + license).",funFact:"Built from Chinese characters (Hanja). About 60% of Korean vocabulary has Hanja roots."}},
        {type:"teach",trg:"약을 가져다 줘요",src:"bring me medicine (please)",pos:"intj",gender:null,note:"가져다 주다: to bring (for someone).\n가져다: carry-and-deliver.\n주다: to give.",example:"A: 아파서 못 일어나요. B: 괜찮아요? 뭐 필요해요? A: 약을 가져다 줘요. B: 네, 물도 가져다 줄게요.",exampleSrc:"A: I'm sick and can't get up. B: Are you okay? What do you need? A: Please bring me medicine. B: Sure, I'll bring you water too.",deepDive:{
          title:"Using 약을 가져다 줘요",
          text:"⚡ -아/어 주다 = 'do for someone.' This gets its own lesson later.\nThis is a very important pattern.\nFull explanation in a later lesson.\nFor now: 가져다 줘요 = please bring (for me)."
        ,funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"mc",q:"운전할 수 있어요 means:",opts:["I can drive","I can swim","bring me medicine","I can cook"],ans:"I can drive",hint:"운전 (運轉) = carry + turn. 할 수 있어요 = can do. A skill involving vehicles."},
        {type:"mc",q:"먹다 → 'can eat':",opts:["먹을 수 있어요","먹는 수 있어요","먹은 수 있어요","먹어 수 있어요"],ans:"먹을 수 있어요",hint:"Consonant stem + 을 수 있다. 먹 + 을 수 있어요."},
        {type:"mc",q:"가다 → 'can go':",opts:["갈 수 있어요","가을 수 있어요","간 수 있어요","가 수 있어요"],ans:"갈 수 있어요",hint:"Vowel stem + ㄹ 수 있다. 가 + ㄹ"},
        {type:"mc",q:"못 해요 and 할 수 없어요 are:",opts:["Completely different meanings","Same meaning, formality only","못 is past; 수 없다 present","Only 수 없다 is polite"],ans:"Same meaning, formality only",hint:"Both = 'can't do.' 못 is casual/spoken, -(으)ㄹ 수 없다 is more formal."},
        {type:"mc",q:"수영할 수 있어요?  -  Translation:",opts:["Do you swim?","Can you swim?","Did you swim?","Will you swim?"],ans:"Can you swim?",hint:"-(으)ㄹ 수 있다 = ability. 수영하다 = to swim. Asking about ability."},
        {type:"mc",q:"한국어를 할 수 있어요. 수 means:",opts:["Language / speech","Ability / way / method","Water / liquid","Number / counting"],ans:"Ability / way / method",hint:"수 (數) here = way/method. 할 수 있다 = 'the way to do exists.'"},
        {type:"mc",q:"운전 = 운 + 전. 전 means:",opts:["Turn/rotate","Car","License","Road"],ans:"Turn/rotate",hint:"전 (轉) = turn/rotate. 운전 = carry + turn = driving."},
        {type:"fb",opts:["할","한","하는","해"],hint:"하다 → 할 수 있다. 하 + ㄹ = 할.",s:"한국어를 ___ 수 있어요.\n(I can speak Korean.)",a:"할"},
        {type:"fb",opts:["갈","가는","간","가"],hint:"가다 → 갈 수 없다. 가 + ㄹ = 갈.",s:"오늘 ___ 수 없어요.\n(I can't go today.)",a:"갈"},
        {type:"fb",opts:["먹을","먹는","먹은","먹어"],hint:"Check the last letter. Consonant or vowel?",s:"매운 음식을 ___ 수 있어요?\n(Can you eat spicy food?)",a:"먹을"},
        {type:"match",pairs:[{trg:"할 수 있어요",src:"can do"},{trg:"갈 수 없어요",src:"can't go"},{trg:"먹을 수 있어요",src:"can eat"},{trg:"수영할 수 없어요",src:"can't swim"}]},
        {type:"drag_fill",hint:"I can speak Korean. But I can't speak Japanese.",s:"한국어를 {1} 수 있어요. 그런데 일본어를 {2} 수 없어요.",blanks:{"1":"할","2":"할"},pool:["할","한","하는","먹을","갈"]},
        {type:"mc",q:"I'm sick so I ___ go to school: 아파서 학교에 ___ 수 없어요.",opts:["갈","가는","간","가"],ans:"갈",hint:"가다 → 갈 수 없다. Sick → can't go to school."}
  ]},
  {id:"kou8l5",title:"-지 마세요",icon:"🚫",xp:22,board:true,steps:[
        {type:"intro",title:"Don't Do That!  -  Negative Commands",desc:"걱정하지 마세요.\n→ Don't worry.\n\nNew grammar: -지 마세요 (don't do X).",goals:["Learn -지 마세요 formation","Use in health advice contexts","Understand politeness levels of negative commands","Build natural prohibition sentences"]},
        {type:"teach",trg:"-지 마세요",src:"please don't (polite)",pos:"intj",gender:null,note:"Please don't (prohibition).\n\nAttach directly to verb stem.",example:"A: 내일 시험이에요. 걱정돼요. B: 걱정하지 마세요. 잘할 수 있어요. A: 밤새 공부해야 해요? B: 아니요, 무리하지 마세요. 잘 자세요.",exampleSrc:"A: I have an exam tomorrow. I'm worried. B: Don't worry. You can do well. A: Should I study all night? B: No, don't overdo it. Sleep well.",deepDive:{
          title:"Using -지 마세요",
          text:"가다 → 가지 마세요 (please don't go)\n먹다 → 먹지 마세요 (please don't eat)\n하다 → 하지 마세요 (please don't do)\n걱정하다 → 걱정하지 마세요 (please don't worry)\n\n마세요 comes from 말다 (to stop/cease) + 세요 (polite request).\n\nThis is the POLITE form.\n반말: -지 마 (don't!  -  casual)."
        ,funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"teach",trg:"걱정하지 마세요",src:"don't worry",pos:"intj",gender:null,note:"걱정하다: to worry.\n걱정 (憂慮): worry/concern.\n",example:"A: 병원에 가야 해요. 무서워요. B: 괜찮아요, 걱정하지 마세요. A: 주사를 맞으면 아파요? B: 조금 아파요. 그런데 금방 끝나요.",exampleSrc:"A: I have to go to the hospital. I'm scared. B: It's okay, don't worry. A: Does it hurt if I get a shot? B: It hurts a little. But it ends quickly.",deepDive:{
          title:"Using 걱정하지 마세요",
          text:"걱정하지 마세요 is one of the most common phrases in Korean.\n\n괜찮아요: it's okay/fine.\n괜찮아요, 걱정하지 마세요.\n= It's fine, don't worry."
        ,funFact:"Built from Chinese characters (Hanja). About 60% of Korean vocabulary has Hanja roots."}},
        {type:"teach",trg:"무리하지 마세요",src:"don't overdo it",pos:"intj",gender:null,note:"무리하다: to overdo/overexert.\n무리 (無理): unreasonable/excessive.\n무 (無: without) + 리 (理: reason).",example:"A: 아직 감기가 안 나았어요. B: 그러면 무리하지 마세요. A: 그런데 일이 많아요. B: 건강이 더 중요해요. 쉬세요.",exampleSrc:"A: My cold hasn't gotten better yet. B: Then don't overdo it. A: But I have a lot of work. B: Health is more important. Rest.",deepDive:{title:"Using 무리하지 마세요",text:"무리하지 마세요: don't push yourself too hard.\nVery common health advice in Korean.",funFact:"Built from Chinese characters (Hanja). About 60% of Korean vocabulary has Hanja roots."}},
        {type:"mc",q:"걱정하지 마세요 means:",opts:["please don't go","don't worry","don't overdo it","don't be late"],ans:"don't worry",hint:"걱정하다 = to worry. -지 마세요 = please don't. Combined: please don't ___."},
        {type:"teach",trg:"늦지 마세요",src:"don't be late",pos:"intj",gender:null,note:"늦다: to be late.\n늦다 → 늦지 마세요 (don't be late).",example:"A: 내일 병원 예약이 있어요. B: 몇 시에요? A: 아홉 시요. B: 그러면 늦지 마세요. 일찍 출발하세요.",exampleSrc:"A: I have a hospital appointment tomorrow. B: What time? A: Nine o'clock. B: Then don't be late. Leave early.",deepDive:{title:"Using 늦지 마세요",text:"약속에 늦지 마세요: Don't be late for the appointment.\n약속 (約束): promise/appointment.",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"tip",title:"📋 -지 마세요 Common Phrases",deepDive:{
          title:"지 마세요 Common Phrases",
          text:"포기하지 마세요 = Do not give up\n\n-지 마 = casual form (반말): 걱정하지 마 = do not worry\n\n늦지 마세요 (don't be late)\n잊지 마세요 (don't forget)\n만지지 마세요 (don't touch)\n가지 마세요 (don't go)\n\nSigns:\n들어가지 마세요 (don't enter)\n주차하지 마세요 (don't park)\n사진 찍지 마세요 (don't take photos)"
        },text:"Useful -지 마세요 (please do not) phrases:\n\n걱정하지 마세요 = Do not worry\n무리하지 마세요 = Do not overdo it\n늦지 마세요 = Do not be late"},
        {type:"mc",q:"먹다 → 'please don't eat':",opts:["먹지 마세요","먹을 마세요","안 먹세요","먹으마세요"],ans:"먹지 마세요",hint:"Stem + 지 마세요. 먹 + 지 마세요."},
        {type:"mc",q:"가다 → 'don't go' (casual 반말):",opts:["가지 마세요","가지 마","안 가","가지 말아요"],ans:"가지 마",hint:"반말 form of -지 마세요 is -지 마."},
        {type:"mc",q:"무리 = 무 + 리. 무 means:",opts:["Without/not","Body","Hard","Reason"],ans:"Without/not",hint:"무 (無) = without/not. 무리 = without reason = unreasonable/excessive."},
        {type:"mc",q:"아프면 ___.\n(If you're sick, don't overdo it.)",opts:["무리하세요","무리하지 마세요","무리해요","무리하지 않아요"],ans:"무리하지 마세요",hint:"-지 마세요 = please don't. Advice: don't overdo it."},
        {type:"fb",opts:["늦","늦어","늦은","늦는"],hint:"늦다 → stem 늦 + 지 마세요.",s:"내일 ___지 마세요!\n(Don't be late tomorrow!)",a:"늦"},
        {type:"fb",opts:["먹","먹어","먹는","먹을"],hint:"먹다 → stem 먹 + 지 마세요.",s:"밥 ___지 마세요.\n(Don't eat rice.)",a:"먹"},
        {type:"fb",opts:["걱정","걱정을","무리","공부"],hint:"하다 = to worry. 하지 마세요",s:"___하지 마세요. 괜찮아요.\n(Don't worry. It's okay.)",a:"걱정"},
        {type:"match",pairs:[{trg:"걱정하지 마세요",src:"don't worry"},{trg:"무리하지 마세요",src:"don't overdo it"},{trg:"늦지 마세요",src:"don't be late"},{trg:"잊지 마세요",src:"don't forget"}]},
        {type:"drag_fill",hint:"I caught a cold. The doctor said: 'Don't drink alcohol. Rest well.'",s:"감기에 걸렸어요. 의사가 말했어요: \"{1} 마시지 마세요. {2} 쉬세요.\"",blanks:{"1":"술","2":"푹"},pool:["술","물","푹","많이","빨리"]},
        {type:"mc",q:"사진 찍지 마세요 means:",opts:["Take a photo please","Don't take photos","Photos are allowed","The camera is broken"],ans:"Don't take photos",hint:"사진 찍다 = take photos. -지 마세요 = please don't."},
        {type:"mc",q:"How does -(으)면 combine with -지 마세요?",opts:["아프면 무리하지 마세요","아파면 무리지 마세요","아프면지 마세요","아프으면 마세요"],ans:"아프면 무리하지 마세요",hint:"-(으)면 on first clause, -지 마세요 on second: if sick, don't overdo."},
        {type:"teach",trg:"-아/어도 되다",src:"may / it's okay to / can I...?",pos:"intj",gender:null,note:"Permission: it's okay to / may I?\n\nFollows vowel harmony rules.",example:"A: 여기 앉아도 돼요? B: 네, 앉아도 돼요. A: 커피를 마셔도 돼요? B: 네, 괜찮아요. 드세요.",exampleSrc:"A: May I sit here? B: Yes, you may sit. A: May I drink coffee? B: Yes, that's fine. Go ahead.",deepDive:{
          title:"Using -아/어도 되다",
          text:"앉다 → 앉아도 돼요? (May I sit?)\n가다 → 가도 돼요? (May I go?)\n먹다 → 먹어도 돼요? (May I eat?)\n\n돼요 = 되어요 (contracted).\n\nAnswer yes: 네, -아/어도 돼요. (Yes, you may.)\nAnswer no: 아니요, -면 안 돼요. (No, you may not.)"
        ,funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"teach",trg:"-(으)면 안 되다",src:"may not / not allowed / must not",pos:"intj",gender:null,note:"Not allowed / must not (prohibition).\n\n여기에서 담배 피우면 안 돼요 (You must not smoke here).",example:"A: 여기에서 사진 찍어도 돼요? B: 아니요, 사진 찍으면 안 돼요. A: 밖에서는요? B: 밖에서는 괜찮아요. 찍어도 돼요.",exampleSrc:"A: May I take photos here? B: No, you must not take photos. A: What about outside? B: Outside is fine. You may take photos.",deepDive:{
          title:"Using -(으)면 안 되다",
          text:"= You must not smoke here.\n\n이거 먹으면 안 돼요.\n= You must not eat this.\n\n-지 마세요 (don't do) = polite request.\n-(으)면 안 돼요 = it's not allowed / forbidden.\n\n-지 마세요: softer (please don't).\n-(으)면 안 돼요: stronger (you must not)."
        ,funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"mc",q:"여기 앉아도 돼요? means:",opts:["May I sit here?","I'm sitting here","Don't sit here","I sat here"],ans:"May I sit here?",hint:"-아/어도 되다 = may / it's okay to."},
        {type:"mc",q:"사진 찍으면 안 돼요 means:",opts:["Take a photo please","You may take photos","Taking photos is not allowed","I took a photo"],ans:"Taking photos is not allowed",hint:"-(으)면 안 되다 = not allowed."}
  ]},
  {id:"kou8l6",title:"병원과 약국",icon:"💊",xp:22,board:true,steps:[
        {type:"intro",title:"Hospital and Pharmacy",desc:"병원 / 약국\n→ hospital / pharmacy\n\nHealthcare vocabulary.",goals:["Learn hospital and pharmacy vocabulary","Understand 의원 vs 병원 vs 대학병원 distinction","Know 처방전 (prescription) system","Cultural context: Korean healthcare"]},
        {type:"teach",trg:"병원",src:"hospital / clinic",pos:"noun",gender:null,note:"병원 (病院): 병 (illness) + 원 (院: institution).\n\n⚠️ 병원 is used loosely in Korean.\nIt can mean a small clinic OR a large hospital.\n의원: small clinic. 병원: medium hospital. 대학병원: university hospital.",example:"A: 어디가 아파요? B: 배가 너무 아파요. A: 병원에 가야 해요. 같이 가요. B: 네, 가까운 병원이 어디에 있어요?",exampleSrc:"A: Where does it hurt? B: My stomach hurts so much. A: You need to go to the hospital. Let's go together. B: Yes, where is the nearest hospital?",deepDive:{
          title:"Korean Healthcare System",
          text:"Korea has universal healthcare (건강보험).\nMost Koreans go to 의원 (clinics) for everyday ailments.\n\n응급실: emergency room.\n\nHospital visits are affordable. Prescriptions go to a separate 약국 (pharmacy)."
        ,funFact:"Built from Chinese characters (Hanja). About 60% of Korean vocabulary has Hanja roots."}},
        {type:"teach",trg:"의사",src:"doctor",pos:"noun",gender:null,phonetic:"ui-sa",note:"의사: doctor.\nCOMPOUND: 의 (medicine) + 사 (師: expert).",example:"병원에서 의사 선생님이 말했어요.",exampleSrc:"The doctor said at the hospital.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"teach",trg:"간호사",src:"nurse",pos:"noun",gender:null,phonetic:"gan-ho-sa",note:"간호사: nurse.\nCOMPOUND: 간호 (care) + 사 (師: expert).",example:"간호사가 친절해요.",exampleSrc:"The nurse is kind.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"teach",trg:"처방전",src:"prescription",pos:"noun",gender:null,phonetic:"cheo-bang-jeon",note:"처방전: prescription (document).",example:"A: 의사 선생님이 뭐라고 했어요? B: 처방전을 줬어요. A: 그러면 약국에 가세요. B: 네, 처방전을 가지고 약국에 갈게요.",exampleSrc:"A: What did the doctor say? B: She gave me a prescription. A: Then go to the pharmacy. B: Yes, I'll take the prescription to the pharmacy.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"약국",src:"pharmacy",pos:"noun",gender:null,phonetic:"yak-guk",note:"약국: pharmacy.\nCOMPOUND: 약 (medicine) + 국 (shop/bureau).",example:"A: 처방전이 있어요? B: 네, 여기 있어요. A: 이 약을 하루에 세 번 드세요. B: 감사합니다. 약국이 몇 시까지 해요?",exampleSrc:"A: Do you have a prescription? B: Yes, here it is. A: Take this medicine three times a day. B: Thank you. Until what time is the pharmacy open?",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"mc",q:"의사 means:",opts:["hospital","prescription","doctor","nurse"],ans:"doctor",hint:"COMPOUND: 의 (medicine) + 사 (expert). The person who examines patients."},
        {type:"teach",trg:"증상",src:"symptoms",pos:"noun",gender:null,note:"증상 (症狀): symptoms.\n증 (症: illness/condition) + 상 (狀: state/form).\n",example:"A: 증상이 어떻게 돼요? B: 기침이 나고 열이 나요.",exampleSrc:"A: What are your symptoms? B: I have a cough and fever.",deepDive:{
          title:"Using 증상",
          text:"Common 증상:\n두통 (headache): 두 (head) + 통 (pain)\n복통 (stomachache): 복 (belly) + 통 (pain)\n열 (fever)\n기침 (cough)\n구토 (vomiting): 구 (mouth) + 토 (spit out)"
        ,funFact:"Built from Chinese characters (Hanja). About 60% of Korean vocabulary has Hanja roots."}},
        {type:"teach",trg:"주사",src:"injection / shot",pos:"noun",gender:null,note:"주사 (注射): injection.\n주 (注: pour/inject) + 사 (射: shoot).\n",example:"주사를 맞았어요.",exampleSrc:"I got a shot.",deepDive:{
          title:"주사 in Korean Culture",
          text:"주사를 맞다: to get a shot.\n맞다: to be hit / to receive.\n\n주사를 맞았어요: got a shot (past).\n\nIn Korea, injections are MUCH more common than in the West.\nDoctors give injections for colds, fatigue, vitamins."
        ,funFact:"Built from Chinese characters (Hanja). About 60% of Korean vocabulary has Hanja roots."}},
        {type:"tip",title:"🏥 Korean Healthcare Culture",deepDive:{
          title:"한의원  -  Traditional Korean Medicine",
          text:"• Hospital visits are affordable (~₩5,000–15,000 for clinic)\n• Pharmacies fill prescriptions  -  cheap (~₩3,000–10,000)\n• Injections are common and popular\n• 한의원 (Korean traditional medicine clinic) uses 한약 (herbal medicine)\n\n의원 vs 병원 vs 대학병원:\n감기? → 의원 (small clinic)\n수술? → 병원 (hospital)\n심각한 병? → 대학병원 (university hospital)\n응급? → 응급실 (ER)\n\nKoreans go to the doctor OFTEN.\nA cold? Doctor visit. Tired? Doctor visit.\nIt's affordable and normalized.\n\n한의원: Korean traditional medicine clinic.\n한의사: traditional medicine doctor.\n한약: herbal medicine.\n\n한 (韓): Korean. 의 (醫): medicine.\n\nKorean traditional medicine uses:\n침 (acupuncture)\n뜸 (moxibustion)\n한약 (herbal medicine)\n부항 (cupping)\n\nMany Koreans use BOTH:\n양의원 (Western clinic) for acute issues\n한의원 (traditional clinic) for chronic/preventive care\n\nBoth are covered by 건강보험."
        },text:"Korea has universal healthcare: 건강보험 (health insurance).\n건강 (健康): health. 보험 (保險): insurance.\n\nKey facts:\n• Everyone is covered by 건강보험"},
        {type:"mc",q:"병 appears in 병원 (hospital) and 병 (sickness). What does the morpheme 병 mean?",opts:["Place / location","Doctor / physician","Illness / disease","Medicine / remedy"],ans:"Illness / disease",hint:"병 (病) = illness. 병원 = illness + institution."},
        {type:"mc",q:"Take the prescription to the ___: 처방전을 가지고 ___에 가세요.",opts:["병원","약국","의원","학교"],ans:"약국",hint:"Prescription → pharmacy. In Korea, doctors and pharmacies are separate."},
        {type:"mc",q:"주사를 맞다 means:",opts:["To give a shot","To get/receive a shot","To make a shot","To buy a shot"],ans:"To get/receive a shot",hint:"맞다 = to receive/be hit. 주사를 맞다 = receive an injection."},
        {type:"mc",q:"감기에 걸렸어요. Which do you visit first?",opts:["약국","대학병원","응급실","의원"],ans:"의원",hint:"A cold = small clinic (...). Save 병원/대학병원 for serious issues."},
        {type:"mc",q:"한의원 specializes in:",opts:["Western surgical medicine","Traditional Korean medicine","Dental care practice","Eye care treatment"],ans:"Traditional Korean medicine",hint:"한의원 = Korean (한) + medicine (의) + clinic (원)."},
        {type:"fb",opts:["처방전","주사","증상","약"],hint:"... = prescription.",s:"___을 가지고 약국에 가세요.\n(Take the prescription to the pharmacy.)",a:"처방전"},
        {type:"fb",opts:["증상","약","처방전","주사"],hint:"... = symptoms.",s:"감기 ___이 뭐예요? 열이 나요.\n(What are your cold symptoms? I have a fever.)",a:"증상"},
        {type:"fb",opts:["주사","약","처방전","열"],hint:"... = injection/shot.",s:"의사 선생님이 ___를 줬어요.\n(The doctor gave me a shot.)",a:"주사"},
        {type:"match",pairs:[{trg:"의원",src:"small clinic"},{trg:"병원",src:"hospital"},{trg:"약국",src:"pharmacy"},{trg:"응급실",src:"emergency room"}]},
        {type:"drag_fill",hint:"I went to the clinic and got a prescription. I took the prescription to the pharmacy.",s:"{1}에 가서 {2}를 받았어요. {3}을 가지고 {4}에 갔어요.",blanks:{"1":"의원","2":"처방전","3":"처방전","4":"약국"},pool:["의원","약국","처방전","주사","증상","병원"]},
        {type:"mc",q:"건강보험 = 건강 + 보험. 보험 means:",opts:["Health","Insurance","Hospital","Government"],ans:"Insurance",hint:"보험 (保險) = insurance. 건강보험 = health + insurance."}
  ]},
  {id:"kou8l7",title:"부터/까지/동안",icon:"⏱️",xp:25,board:true,steps:[
        {type:"intro",title:"From... Until... For...  -  Time Ranges",desc:"부터 / 까지 / 동안\n→ from / until / during\n\nThree time-range particles.",goals:["Use 부터 for starting points","Use 까지 for ending points","Use 동안 for durations","Combine all three in natural sentences"]},
        {type:"teach",trg:"부터",src:"from (starting point)",pos:"noun",gender:null,note:"부터: from (starting point in time or space).\n\n월요일부터: from Monday.\n9시부터: from 9 o'clock.",example:"A: 언제부터 아팠어요? B: 어제부터 아팠어요. A: 어제부터 약을 먹었어요? B: 아니요, 오늘 아침부터 먹기 시작했어요.",exampleSrc:"A: Since when have you been sick? B: I've been sick since yesterday. A: Have you been taking medicine since yesterday? B: No, I started taking it from this morning.",deepDive:{title:"More Examples",text:"아침부터: from morning\n집에서부터: from home (에서 + 부터 for places)\n\n부터 marks WHERE something STARTS.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"까지",src:"until / to (ending point)",pos:"part",gender:null,note:"까지: until, to, up to.\n\n금요일까지: until Friday.\n5시까지: until 5 o'clock.",example:"A: 약국이 몇 시까지 해요? B: 아홉 시까지 해요. A: 그러면 빨리 가야 해요. B: 네, 여덟 시 반까지 가세요.",exampleSrc:"A: Until what time is the pharmacy open? B: Until 9 o'clock. A: Then I need to go quickly. B: Yes, get there by 8:30.",deepDive:{
          title:"More Examples",
          text:"저녁까지: until evening\n학교까지: to school (distance)\n\n까지 marks WHERE something ENDS.\n\n부터...까지 = from...to/until."
        ,funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"teach",trg:"부터...까지",src:"from...to/until",pos:"num",gender:null,note:"부터...까지: from...to.\n\nExample: from 9 to 6 (number + start + number + end).",example:"A: 일이 몇 시부터 몇 시까지예요? B: 아홉 시부터 여섯 시까지예요. A: 토요일에도 일해요? B: 아니요, 월요일부터 금요일까지만 일해요.",exampleSrc:"A: What time is work from and until? B: From 9 to 6. A: Do you work on Saturday too? B: No, I only work from Monday to Friday.",deepDive:{
          title:"Using 부터...까지",
          text:"월요일부터 금요일까지: from Monday to Friday.\n서울에서부터 부산까지: from Seoul to Busan.\n\nThis pair is used constantly:\nschedules, travel, stories, descriptions."
        ,funFact:"Korean has TWO number systems: native Korean (하나, 둘, 셋) for counting and Sino-Korean (일, 이, 삼) for dates and money."}},
        {type:"mc",q:"까지 means:",opts:["from","during","since","until"],ans:"until",hint:"The ending-point particle. 10시___ = ___ 10 o'clock."},
        {type:"teach",trg:"동안",src:"during / for (duration)",pos:"noun",gender:null,note:"동안 (動安/간): during, for (a period of time).\n\n한 시간 동안: for one hour",example:"A: 약을 얼마 동안 먹어야 해요? B: 일주일 동안 드세요. A: 일주일 동안 매일요? B: 네, 하루에 세 번, 일주일 동안이요.",exampleSrc:"A: For how long do I need to take the medicine? B: Take it for one week. A: Every day for one week? B: Yes, three times a day, for one week.",deepDive:{
          title:"Using 동안",
          text:"두 달 동안: for two months\n방학 동안: during vacation\n여행 동안: during the trip\n\n동안 focuses on HOW LONG, not when.\n\n한 시간 동안 운동했어요.\n= I exercised for one hour."
        ,funFact:"Built from Chinese characters (Hanja). About 60% of Korean vocabulary has Hanja roots."}},
        {type:"teach",trg:"얼마나 걸려요?",src:"how long does it take?",pos:"intj",gender:null,note:"얼마나: how much/long.\n걸리다: to take (time).\n",example:"A: 학교까지 얼마나 걸려요? B: 버스로 삼십 분이에요.",exampleSrc:"A: How long to school? B: 30 minutes by bus.",deepDive:{
          title:"Using 얼마나 걸려요?",
          text:"얼마나 걸려요? = How long does it take?\n\n30분 걸려요: It takes 30 minutes.\n한 시간 걸려요: It takes one hour.\n\n학교까지 얼마나 걸려요?\n= How long to get to school?\n30분 걸려요.\n= It takes 30 minutes."
        ,funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"tip",title:"📋 부터/까지/동안 Summary",deepDive:{
          title:"Extended Reference",
          text:"두 시간 동안 = for 2 hours\n얼마나 걸려요? = How long does it take?\n\nDAYS:\n월요일부터 금요일까지 (Mon to Fri)\n일주일 동안 (for one week)\n\nPLACES:\n서울에서부터 부산까지 (from Seoul to Busan)\n학교까지 30분 걸려요 (30 min to school)\n\n부터+까지 = range.\n동안 = duration within that range."
        },text:"부터 = from (starting point)\n까지 = until / to (ending point)\n동안 = during / for (duration)\n\n9시부터 6시까지 = from 9 to 6"},
        {type:"mc",q:"'From Monday to Friday':",opts:["월요일부터 금요일까지","월요일까지 금요일부터","월요일동안 금요일","월요일에서 금요일에"],ans:"월요일부터 금요일까지",hint:"부터 = from. 까지 = to/until."},
        {type:"mc",q:"'For two hours':",opts:["두 시간 부터","두 시간 까지","두 시간 동안","두 시간 에서"],ans:"두 시간 동안",hint:"Which particle marks how long something lasts?"},
        {type:"mc",q:"학교까지 얼마나 걸려요?  -  Answer: 30분 ___.",opts:["걸려요","있어요","가요","해요"],ans:"걸려요",hint:"걸리다 = to take (time). 30분 ... = takes 30 minutes."},
        {type:"mc",q:"방학 동안 뭐 했어요? 동안 here means:",opts:["From","Until","During","Before"],ans:"During",hint:"동안 = during/for. 방학 동안 = during vacation."},
        {type:"mc",q:"서울에서부터 부산까지  -  에서부터 combines:",opts:["Location + from","Action + until","Time + during","Direction + to"],ans:"Location + from",hint:"에서 (location) + 부터 (from) = from [place]."},
        {type:"fb",opts:["부터","까지","동안","에서"],hint:"from. (First blank: 9시)",s:"9시___6시___일해요.\n(I work from 9 to 6.)",a:"부터"},
        {type:"fb",opts:["동안","부터","까지","에서"],hint:"... = for (duration).",s:"한 시간 ___ 운동했어요.\n(I exercised for one hour.)",a:"동안"},
        {type:"fb",opts:["까지","부터","동안","에서"],hint:"to/until (ending point). 학교 = to school",s:"학교___ 얼마나 걸려요?\n(How long to school?)",a:"까지"},
        {type:"match",pairs:[{trg:"부터",src:"from (start)"},{trg:"까지",src:"until/to (end)"},{trg:"동안",src:"for/during"},{trg:"걸려요",src:"it takes (time)"}]},
        {type:"drag_fill",hint:"I work from Monday to Friday. I work for 8 hours a day.",s:"월요일{1} 금요일{2} 일해요. 하루에 8시간 {3} 일해요.",blanks:{"1":"부터","2":"까지","3":"동안"},pool:["부터","까지","동안","에서","에"]},
        {type:"mc",q:"언제부터 아팠어요? means:",opts:["Where exactly does it hurt?","Since when have you had pain?","How long does the pain last?","Why does it hurt so much?"],ans:"Since when have you had pain?",hint:"언제 = when. 부터 = from/since. 언제부터 = since when."},
        {type:"mc",q:"약을 3일 동안 드세요. Translation:",opts:["Take medicine 3 times","Take medicine for 3 days","Take medicine until the 3rd","Take medicine from the 3rd"],ans:"Take medicine for 3 days",hint:"3일 동안 = for 3 days. 드세요 = please take (honorific of 먹다)."}
  ]},
  {id:"kou8l8",title:"날씨가 좋은데...",icon:"🌱",xp:20,board:true,steps:[
        {type:"intro",title:"A New Sound  -  Softening with -는데",desc:"-는데\n→ softening connector\n\nKorean's way of being indirect.",goals:["Hear -는데 in 3 natural dialogues","Feel the softening/background-setting function","Build recognition now. Formal naming comes later","No production required  -  just notice"]},
        {type:"teach",trg:"날씨가 좋은데",src:"the weather is nice, (so)...",pos:"intj",gender:null,note:"날씨가 좋은데 같이 산책할까요? (The weather is nice, shall we walk?)\n\n좋은데: good + but/so...",example:"A: 오늘 뭐 할 거예요? B: 날씨가 좋은데 같이 산책할까요? A: 좋아요! 어디로 가요? B: 공원에 가요. 꽃이 예뻐요.",exampleSrc:"A: What are you going to do today? B: The weather is nice, shall we take a walk? A: Sure! Where shall we go? B: Let's go to the park. The flowers are pretty.",deepDive:{
          title:"Using 날씨가 좋은데",
          text:"-는데/-은데 sets up BACKGROUND before the main point.\nIt's softer than 그래서 (therefore) or 그런데 (but).\n\nIt's like saying: 'Given that the weather is nice...'\nThe listener knows a suggestion is coming.\n\n⚡ -는데 gets its own lesson later. For now, just notice the pattern.\nFor now: just feel the softening effect."
        ,funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"teach",trg:"시간이 있는데",src:"I have time, (so)...",pos:"intj",gender:null,note:"시간이 있는데 영화 볼까요? (I have time, shall we watch a movie?)\n\n있는데: there is + so...",example:"A: 오늘 바빠요? B: 아니요, 시간이 있는데 영화 볼까요? A: 좋아요! 몇 시에 만날까요? B: 세 시에 만나요.",exampleSrc:"A: Are you busy today? B: No, I have time, shall we watch a movie? A: Sure! What time shall we meet? B: Let's meet at 3.",deepDive:{
          title:"Using 시간이 있는데",
          text:"-는데 with action verbs: stem + 는데\n있다 → 있는데 (have, so...)\n\n-은데 with descriptive verbs (adjectives): stem + (으)ㄴ데\n좋다 → 좋은데 (is good, so...)\n\nDon't memorize the forms yet.\nJust notice: -는데 always comes mid-sentence, setting up what comes next."
        ,funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"teach",trg:"배가 고픈데",src:"I'm hungry, (so)...",pos:"intj",gender:null,note:"배가 고픈데 뭐 먹을까요? (I'm hungry, what shall we eat?)\n\n고프다 → 고픈데 (ㅡ stem + ㄴ데).\n먹을까요 means shall we eat. -(으)ㄹ까요 is the suggestion form, full lesson in a later lesson.",example:"A: 점심을 안 먹었어요. B: 저도요. 배가 고픈데 뭐 먹을까요? A: 근처에 한식당이 있어요. B: 좋아요, 거기에 가요!",exampleSrc:"A: I didn't eat lunch. B: Me neither. I'm hungry, what shall we eat? A: There's a Korean restaurant nearby. B: Great, let's go there!",deepDive:{
          title:"Using 배가 고픈데",
          text:"Notice: nobody said 'let's eat.'\n-는데 IMPLIES the suggestion without stating it directly.\n\n배가 고파요. 밥 먹어요. = I'm hungry. Let's eat. (direct)\n배가 고픈데... = I'm hungry, so... (indirect, softer)\n\nKorean conversation strongly prefers the second form.\nThis is connected to 눈치  -  reading the situation."
        ,funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"mc",q:"시간이 있는데 means:",opts:["the weather is nice,","I'm hungry,","I have time,","I'm busy,"],ans:"I have time,",hint:"시간 = time. 있다 = to have/exist. -는데 sets up background for a suggestion."},
        {type:"tip",title:"🌱 -는데 Preview  -  What to Notice",deepDive:{
          title:"Why -는데 Matters So Much",
          text:"Pattern: [background] + -는데 + [suggestion/question]\n\n-는데 sets background, softens, and invites the listener to respond.\nThe full explanation comes in a later lesson. Your feel for it grows with each encounter.\n\n-는데 is arguably the single most important connector in Korean.\n\nIt appears in:\n• Suggestions: 배가 고픈데 뭐 먹을까요?\n• Excuses: 바쁜데 내일 만날까요?\n• Contrasts: 한국어는 어려운데 재미있어요.\n• Background: 제가 한국에 갔는데 정말 좋았어요.\n\nNative speakers use it in almost every sentence.\nUnderstanding -는데 = understanding Korean conversational flow.\n\nYou'll build full command of it in a later lesson.\nFor now: let it wash over you."
        },text:"Three examples you just saw:\n\n날씨가 좋은데 같이 나갈까요? = The weather is nice  -  shall we go out?\n시간이 있는데 영화 볼까요? = I have time  -  shall we watch a movie?\n배가 고픈데 뭐 먹을까요? = I am hungry  -  what shall we eat?"},
        {type:"mc",q:"날씨가 좋은데 같이 나갈까요?  -  -은데 here functions as:",opts:["Marks past tense only","Sets background then suggests","Makes sentence more formal","Only used in questions"],ans:"Sets background then suggests",hint:"-는데/-은데 sets up background → suggestion follows."},
        {type:"mc",q:"배가 고픈데...  -  What does this imply?",opts:["Nothing, it is just unfinished","Speaker hints at wanting food","The speaker is not hungry","Speaker asks about food prices"],ans:"Speaker hints at wanting food",hint:"-는데 hints and invites response. 'I'm hungry, so...' implies 'let's eat.'"},
        {type:"mc",q:"배가 고픈데 뭐 먹을까요? has how many parts?",opts:["One statement","Background + suggestion","Question + answer","Two unrelated sentences"],ans:"Background + suggestion",hint:"배가 고픈데 = background (I'm hungry). 뭐 먹을까요 = suggestion (shall we eat?)."},
        {type:"fb",opts:["좋은","좋는","좋아","좋으"],hint:"좋다 (adjective) + (으)ㄴ데 데. Don't memorize  -  just recognize",s:"날씨가 ___데 같이 산책할까요?\n(The weather is nice  -  shall we walk?)",a:"좋은"},
        {type:"fb",opts:["있는","있은","있어","있을"],hint:"있다 (verb) + 는데 데. Just notice the pattern",s:"시간이 ___데 영화 볼까요?\n(I have time  -  shall we watch a movie?)",a:"있는"},
        {type:"match",pairs:[{trg:"날씨가 좋은데",src:"the weather is nice, (so)..."},{trg:"시간이 있는데",src:"I have time, (so)..."},{trg:"배가 고픈데",src:"I'm hungry, (so)..."},{trg:"바쁜데",src:"I'm busy, (but)..."}]},
        {type:"drag_fill",hint:"The weather is nice  -  shall we go out? I'm hungry  -  what shall we eat?",s:"{1} 좋은데 같이 {2}? 배가 {3} 뭐 먹을까요?",blanks:{"1":"날씨가","2":"나갈까요","3":"고픈데"},pool:["날씨가","날씨는","나갈까요","나가요","고픈데","고파서"]},
        {type:"mc",q:"Koreans prefer -는데 because it shows:",opts:["Grammar requires it","Indirectness and 눈치","It is shorter to say","Direct statements are banned"],ans:"Indirectness and 눈치",hint:"-는데 softens and hints. Direct = less socially smooth in Korean."},
        {type:"mc",q:"Compare: 배가 고파요. 밥 먹어요. vs 배가 고픈데...  -  which is more natural Korean?",opts:["The first (direct)","The second (with -는데)","Both are equally natural","Neither is correct"],ans:"The second (with -는데)",hint:"Korean conversation prefers -는데 for its softening, hinting quality."},
        {type:"fb",opts:["좋은","좋아","좋는","좋을"],hint:"좋다 + (으)ㄴ데 데. Background + suggestion",s:"아프면 쉬세요. 그런데 날씨가 ___데 같이 산책할까요? is softer because of:",a:"좋은"},
        {type:"mc",q:"Which uses -는데 to set background?",opts:["어제 비가 왔어요","좋은데 같이 나갈까요?","고파서 밥 먹었어요","아프면 쉬세요"],ans:"좋은데 같이 나갈까요?",hint:"-는데/-은데 sets background. 좋은데 = nice + so/and..."},
        {type:"mc",q:"오늘 바쁜데 내일 만날까요?  -  Translation:",opts:["I am busy, meet tomorrow?","I was busy and met yesterday","I am always busy at meetings","Today is a busy meeting day"],ans:"I am busy, meet tomorrow?",hint:"바쁘다 + ㄴ데 = 바쁜데. Background → suggestion."},
        {type:"tip",title:"🧠 What to Take Away",deepDive:{
          title:"Where You Will Hear -는데 Everywhere",
          text:"• Dramas\n\n• YouTube\n• Conversations\n\nEvery time you hear -는데, your brain files it.\nBy a later lesson, naming it will feel like recognition  -  not new learning.\n\nThis is how polyglots learn grammar:\nfeel it first, name it later."
        },text:"You've now seen -는데 three times.\n\nDon't try to produce it yet.\nJust listen for it in Korean content.\n\nYou'll hear it EVERYWHERE:"}
  ]},
  {id:"kou8l9",title:"복습 + 퀴즈",icon:"📝",xp:30,board:true,steps:[
        {type:"intro",title:"Health & Grammar Tools  -  Review",desc:"Review: body parts, conditionals, ability, prohibitions, time ranges.",goals:["Verify conditional formation","Test ability expression","Confirm health vocabulary","Demonstrate time range particles"]},
        {type:"mc",q:"배가 아프면 means:",opts:["My stomach hurts","If my stomach hurts","My stomach hurt","Because my stomach hurts"],ans:"If my stomach hurts",hint:"-(으)면 = if/when."},
        {type:"mc",q:"읽다 → 'can read':",opts:["읽을 수 있어요","읽는 수 있어요","읽어 수 있어요","읽을 수 해요"],ans:"읽을 수 있어요",hint:"Consonant stem + 을 수 있어요."},
        {type:"mc",q:"'Don't worry' in Korean:",opts:["걱정하세요","걱정하지 마세요","걱정 없어요","걱정해요"],ans:"걱정하지 마세요",hint:"Stem + 지 마세요 = please don't. ...."},
        {type:"mc",q:"아침부터 저녁까지 means:",opts:["Morning and evening","From morning to evening","In the morning, in the evening","Morning or evening"],ans:"From morning to evening",hint:"부터 = from, 까지 = until/to."},
        {type:"mc",q:"두통 = 두 + 통. Means:",opts:["Stomachache","Headache","Backache","Sore throat"],ans:"Headache",hint:"두 (head) + 통 (pain) = headache."},
        {type:"mc",q:"덥다 → conditional (ㅂ-irregular):",opts:["덥으면","더우면","덥면","더워면"],ans:"더우면",hint:"Apply the rule you just learned."},
        {type:"mc",q:"약을 3일 동안 드세요. 동안 means:",opts:["From (starting point)","Until (ending point)","For (duration)","Before (preceding)"],ans:"For (duration)",hint:"3일 ___: the doctor is specifying how long to take medicine."},
        {type:"mc",q:"Where do you take a prescription?",opts:["병원","약국","응급실","한의원"],ans:"약국",hint:"처방전 (prescription)"},
        {type:"mc",q:"배가 고픈데 뭐 먹을까요? -는데 here:",opts:["Expresses anger","Sets background and hints","Asks a direct question","Means 'because'"],ans:"Sets background and hints",hint:"-는데 sets background → softly suggests."},
        {type:"fb",opts:["아프","아파","아픈","아프은"],hint:"아프다 is a ㅡ stem verb. What goes before -면?",s:"___면 병원에 가세요.\n(If you're sick, go to the hospital.)",a:"아프"},
        {type:"fb",opts:["할","한","하는","해"],hint:"수영하다 → 할 수 있다. Same pattern.",s:"수영을 ___ 수 있어요.\n(I can swim.)",a:"할"},
        {type:"fb",opts:["지","을","는","고"],hint:"Stem + 지 마세요 = don't do. 마시 + 지 마세요.",s:"커피 마시___ 마세요.\n(Don't drink coffee.)",a:"지"},
        {type:"fb",opts:["동안","부터","까지","에서"],hint:"Which particle means 'for' a period of time?",s:"삼십 분 ___ 기다렸어요.\n(I waited for 30 minutes.)",a:"동안"},
        {type:"match",pairs:[{trg:"아프면",src:"if sick"},{trg:"할 수 있어요",src:"can do"},{trg:"걱정하지 마세요",src:"don't worry"},{trg:"3일 동안",src:"for 3 days"}]},
        {type:"match",pairs:[{trg:"부터",src:"from (start)"},{trg:"까지",src:"until (end)"},{trg:"동안",src:"for (duration)"},{trg:"걸려요",src:"it takes (time)"}]},
        {type:"drag_fill",hint:"I caught a cold. My throat hurts and I have a fever. The doctor said: 'Take medicine for 3 days. Don't overdo it.'",s:"감기에 걸렸어요. {1}가 아프고 {2}이 나요. 의사가 말했어요: \"약을 3일 {3} 드세요. {4}하지 마세요.\"",blanks:{"1":"목","2":"열","3":"동안","4":"무리"},pool:["목","배","열","기침","동안","부터","무리","걱정"]},
        {type:"tip",title:"🎉 Health & Grammar Complete",deepDive:{
          title:"Full Achievement List",
          text:"-지 마세요: 걱정하지 마세요 = Do not worry\n부터/까지/동안: 9시부터 6시까지 = from 9 to 6\n\n✅ Navigate Korean healthcare\n✅ Recognize -는데 in natural speech\n\nNext you will learn:\n미래 시제 (future tense): -(으)ㄹ 거예요\n★ Speech levels deep dive\n방 culture: 노래방, 피시방, 만화방\n\n화이팅! (You can do it!)"
        },text:"You now know:\n\n몸 vocabulary: 머리 = head, 배 = stomach, 다리 = leg\n아파요 pattern: 머리가 아파요 = My head hurts\n-(으)면: 아프면 쉬세요 = If sick, rest"},
        {type:"mc",q:"Which is the conditional marker?",opts:["-았/었어요","-지 마세요","-(으)면","-(으)ㄹ 수 있다"],ans:"-(으)면",hint:"... = if/when. The conditional car on the Train."}
  ]},
  {id:"kou8l9b",title:"동물",icon:"🐶",xp:20,board:true,steps:[
        {type:"intro",title:"Animals in Korean",desc:"From pets to wild animals, learn to talk about the animal kingdom in Korean.",goals:["Learn 12 animal words","Understand zoo vocabulary","Know the 12 zodiac animals","Use animals in simple sentences"]},
        {type:"teach",trg:"동물",src:"animal",pos:"noun",gender:null,note:"COMPOUND: 동(move/動) + 물(thing/物).\nLiterally 'moving thing'.",example:"A: 동물을 좋아해요?\nB: 네, 동물을 정말 좋아해요.\nA: 어떤 동물을 좋아해요?\nB: 강아지를 제일 좋아해요.",exampleSrc:"A: Do you like animals?\nB: Yes, I really like animals.\nA: What kind of animal do you like?\nB: I like puppies the most.",deepDive:{title:"동물 Breakdown",text:"동(動) = movement, motion\n물(物) = thing, object\n\n동물원 (zoo) adds 원(園) = garden.\nSo 동물원 = animal garden = zoo.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"teach",trg:"개",src:"dog",pos:"noun",gender:null,note:"개: dog (general term).\n강아지: puppy (cute/small dog).",example:"A: 개가 있어요?\nB: 네, 작은 개가 있어요.\nA: 이름이 뭐예요?\nB: 이름은 초코예요.",exampleSrc:"A: Do you have a dog?\nB: Yes, I have a small dog.\nA: What's its name?\nB: Its name is Choco.",deepDive:{
          title:"개 vs 강아지",
          text:"개 = dog (neutral, general term)\n강아지 = puppy / doggy (affectionate)\n\nKoreans often say 강아지 even for adult dogs when being affectionate.\n\n멍멍 = Korean onomatopoeia for 'woof woof'."
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"고양이",src:"cat",pos:"noun",gender:null,note:"고양이: cat.\n키우다: to raise/keep (a pet).",example:"A: 고양이를 키워요?\nB: 네, 고양이 두 마리 있어요.\nA: 이름이 뭐예요?\nB: 나비하고 구름이에요.",exampleSrc:"A: Do you raise a cat?\nB: Yes, I have two cats.\nA: What are their names?\nB: They're Nabi and Gureum.",deepDive:{
          title:"Cat Culture in Korea",
          text:"고양이 = cat\n야옹 = Korean onomatopoeia for 'meow'\n\nPopular cat names:\n나비 (butterfly), 구름 (cloud), 치즈 (cheese)\n\n마리 is the counter for animals:\n한 마리 = one animal\n두 마리 = two animals"
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"새",src:"bird",pos:"noun",gender:null,note:"새: bird (general term).\n참새: sparrow.",example:"A: 저기 새가 있어요!\nB: 어디요? 아, 정말 예쁜 새예요.\nA: 무슨 새예요?\nB: 참새인 것 같아요.",exampleSrc:"A: There's a bird over there!\nB: Where? Ah, it's a really pretty bird.\nA: What kind of bird is it?\nB: I think it's a sparrow.",deepDive:{title:"Common Birds",text:"새 = bird (general)\n참새 = sparrow\n비둘기 = pigeon\n독수리 = eagle\n\n새가 날아요 = The bird is flying.\n날다 = to fly",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"물고기",src:"fish",pos:"noun",gender:null,note:"COMPOUND: 물(water/水) + 고기(meat).\nLiterally 'water meat'.",example:"A: 물고기를 좋아해요?\nB: 네, 수족관에 자주 가요.\nA: 어떤 물고기가 좋아요?\nB: 열대어가 예뻐요.",exampleSrc:"A: Do you like fish?\nB: Yes, I often go to the aquarium.\nA: What kind of fish do you like?\nB: Tropical fish are pretty.",deepDive:{
          title:"물고기 vs 생선",
          text:"물고기 = fish (alive, swimming)\n생선 = fish (for eating, at market)\n\n물고기를 봤어요 = I saw a fish (alive)\n생선을 먹었어요 = I ate fish (food)\n\nSame animal, different words by context."
        ,funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"teach",trg:"토끼",src:"rabbit",pos:"noun",gender:null,note:"토끼: rabbit.\nVery common in Korean folk tales.",example:"A: 토끼를 본 적 있어요?\nB: 네, 동물원에서 봤어요.\nA: 귀여웠어요?\nB: 네, 정말 귀여웠어요!",exampleSrc:"A: Have you ever seen a rabbit?\nB: Yes, I saw one at the zoo.\nA: Was it cute?\nB: Yes, it was really cute!",deepDive:{
          title:"Rabbit in Korean Culture",
          text:"토끼 = rabbit\n\nThe Korean moon rabbit (달토끼) is a folk character who lives on the moon making rice cakes (떡).\n\n토끼 is also a zodiac animal (Year of the Rabbit)."
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"말",src:"horse",pos:"noun",gender:null,note:"말: horse.\n타다: to ride.",example:"A: 말을 타 봤어요?\nB: 네, 제주도에서 탔어요.\nA: 재미있었어요?\nB: 네, 정말 재미있었어요!",exampleSrc:"A: Have you ridden a horse?\nB: Yes, I rode one on Jeju Island.\nA: Was it fun?\nB: Yes, it was really fun!",deepDive:{
          title:"말 Has Two Meanings",
          text:"말 = horse (animal)\n말 = speech, language, words\n\nContext makes it clear:\n말을 탔어요 = I rode a horse\n말을 했어요 = I spoke (said words)"
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"소",src:"cow",pos:"noun",gender:null,note:"소: cow.\n한우: Korean beef (premium).",example:"A: 한국에 소가 많아요?\nB: 네, 시골에 많아요.\nA: 한우를 먹어 봤어요?\nB: 네, 정말 맛있어요!",exampleSrc:"A: Are there many cows in Korea?\nB: Yes, there are many in the countryside.\nA: Have you tried Korean beef?\nB: Yes, it's really delicious!",deepDive:{
          title:"소 in Korean Culture",
          text:"소 = cow/cattle\n한우(韓牛) = Korean beef (very expensive, premium)\n소고기 = beef (meat)\n\n음매 = Korean onomatopoeia for 'moo'"
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"돼지",src:"pig",pos:"noun",gender:null,note:"돼지: pig.\n돼지고기: pork (pig + meat).",example:"A: 돼지고기를 좋아해요?\nB: 네, 삼겹살을 자주 먹어요.\nA: 한국 사람들도 돼지고기를 많이 먹어요?\nB: 네, 삼겹살이 인기 있어요.",exampleSrc:"A: Do you like pork?\nB: Yes, I often eat samgyeopsal.\nA: Do Koreans also eat a lot of pork?\nB: Yes, samgyeopsal is popular.",deepDive:{
          title:"Meat Words Pattern",
          text:"Animal + 고기 = meat:\n소 + 고기 = 소고기 (beef)\n돼지 + 고기 = 돼지고기 (pork)\n닭 + 고기 = 닭고기 (chicken meat)\n\n삼겹살 = pork belly (three-layer meat)"
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"호랑이",src:"tiger",pos:"noun",gender:null,note:"호랑이: tiger.\nKorea's national symbol animal.",example:"A: 호랑이를 본 적 있어요?\nB: 동물원에서 봤어요.\nA: 무서웠어요?\nB: 아니요, 멋있었어요!",exampleSrc:"A: Have you ever seen a tiger?\nB: I saw one at the zoo.\nA: Was it scary?\nB: No, it was cool!",deepDive:{
          title:"Tiger in Korean Culture",
          text:"호랑이 = tiger\n\nThe tiger is a symbol of Korea.\n한국 호랑이 = Korean tiger\n\nMany Korean folk tales start with:\n옛날 옛날에 호랑이가... = Once upon a time, a tiger...\n\n2018 Winter Olympics mascot: 수호랑 (Soohorang), a white tiger."
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"사자",src:"lion",pos:"noun",gender:null,note:"COMPOUND: 사(lion/獅) + 자(child/子).\n동물의 왕: king of animals.",example:"A: 사자가 무서워요?\nB: 네, 조금 무서워요.\nA: 동물의 왕이에요.\nB: 맞아요, 정말 멋있어요.",exampleSrc:"A: Are lions scary?\nB: Yes, a little scary.\nA: It's the king of animals.\nB: That's right, really cool.",deepDive:{
          title:"사자 Breakdown",
          text:"사(獅) = lion\n자(子) = child, person\n\nSino-Korean compound.\n\n사자 also means 'four letters' in other context:\n사(four/四) + 자(letter/字) = 사자성어 (four-character idiom)"
        ,funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"teach",trg:"동물원",src:"zoo",pos:"noun",gender:null,note:"COMPOUND: 동물(animal) + 원(garden/園).\nLiterally 'animal garden'.",example:"A: 주말에 뭐 할 거예요?\nB: 동물원에 갈 거예요.\nA: 좋아요! 저도 같이 가도 돼요?\nB: 물론이요, 같이 가요!",exampleSrc:"A: What will you do this weekend?\nB: I'm going to go to the zoo.\nA: Nice! Can I go with you?\nB: Of course, let's go together!",deepDive:{
          title:"Popular Korean Zoos",
          text:"동물원 = zoo\n\nFamous Korean zoos:\n서울대공원 = Seoul Grand Park Zoo\n에버랜드 = Everland (theme park + zoo)\n\n원(園) = garden/park appears in:\n공원 = park\n유치원 = kindergarten\n동물원 = zoo"
        ,funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"tip",title:"🐉 12 Zodiac Animals",deepDive:{
          title:"Zodiac in Korean Culture",
          text:"띠 = zodiac sign\n무슨 띠예요? = What's your zodiac?\n\nEach year has an animal. Your birth year determines your 띠.\n\nCommon conversation starter:\n몇 년생이에요? = What year were you born?\n저는 토끼띠예요 = I'm a rabbit (zodiac).\n\nThe zodiac cycles every 12 years."
        },text:"Korean zodiac (띠) uses 12 animals:\n\n쥐 = rat\n소 = ox\n호랑이 = tiger\n토끼 = rabbit\n용 = dragon\n뱀 = snake\n말 = horse\n양 = sheep\n원숭이 = monkey\n닭 = rooster\n개 = dog\n돼지 = pig\n\nWhat's your 띠?"},
        {type:"mc",q:"물고기 literally means:",opts:["swimming thing","water meat","ocean animal","pond creature"],ans:"water meat",hint:"물 = water, 고기 = meat. What do you get?"},
        {type:"mc",q:"Which is the correct counter for animals?",opts:["개","명","마리","번"],ans:"마리",hint:"People use 명, but animals use a different counter."},
        {type:"mc",q:"Korea's national symbol animal is the:",opts:["사자","곰","호랑이","용"],ans:"호랑이",hint:"This animal appears in many Korean folk tales and was the 2018 Olympics mascot."},
        {type:"mc",q:"What is the difference between 물고기 and 생선?",opts:["물고기 is bigger","생선 is alive, 물고기 is food","물고기 is alive, 생선 is food","No difference"],ans:"물고기 is alive, 생선 is food",hint:"One swims in the water, the other sits on your plate."},
        {type:"fb",opts:["원","관","장","실"],hint:"동물 + ___ = zoo. Which Sino-Korean suffix means 'garden'?",s:"동물___에 가고 싶어요.\n(I want to go to the zoo.)",a:"원"},
        {type:"fb",opts:["마리","명","개","번"],hint:"The animal counter. Not 명 (people) or 개 (things).",s:"고양이 두 ___가 있어요.\n(I have two cats.)",a:"마리"},
        {type:"match",pairs:[{trg:"개",src:"dog"},{trg:"고양이",src:"cat"},{trg:"호랑이",src:"tiger"},{trg:"토끼",src:"rabbit"}]}
  ]},
  {id:"kou8l9c",title:"건강",icon:"🏥",xp:20,board:true,steps:[
        {type:"intro",title:"Health and the Hospital",desc:"Learn to describe symptoms, visit the doctor, and get medicine in Korean.",goals:["Describe common symptoms","Navigate hospital and pharmacy visits","Understand health-related expressions","Use health vocabulary in sentences"]},
        {type:"teach",trg:"아프다",src:"to be sick/hurt",pos:"verb",gender:null,note:"아프다: to be sick, to hurt.\nBody part + 가/이 아파요.",example:"A: 어디가 아파요?\nB: 머리가 아파요.\nA: 언제부터 아팠어요?\nB: 어제부터 아팠어요.",exampleSrc:"A: Where does it hurt?\nB: My head hurts.\nA: Since when has it hurt?\nB: It's been hurting since yesterday.",deepDive:{
          title:"아프다 Conjugation",
          text:"아프다 is a 'ㅡ irregular' verb:\n\n아프 + 아요 → 아파요 (present)\n아프 + 았어요 → 아팠어요 (past)\n아프 + (으)면 → 아프면 (if sick)\n\nPattern: 어디가 아파요? = Where does it hurt?\n머리가 아파요 = My head hurts\n배가 아파요 = My stomach hurts"
        ,funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"teach",trg:"열",src:"fever",pos:"noun",gender:null,note:"열: fever, heat.\n열이 나다: to have a fever.",example:"A: 열이 있어요?\nB: 네, 열이 38도예요.\nA: 많이 아프시겠어요.\nB: 약 좀 주세요.",exampleSrc:"A: Do you have a fever?\nB: Yes, my fever is 38 degrees.\nA: You must feel very sick.\nB: Please give me some medicine.",deepDive:{
          title:"Temperature in Korea",
          text:"Korea uses Celsius.\n\n정상 체온 = normal body temperature (36.5C)\n열이 나요 = I have a fever\n열이 38도예요 = My fever is 38 degrees\n\n열 also means 'ten' in Sino-Korean numbers\nand 'heat' in general."
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"기침",src:"cough",pos:"verb",gender:null,note:"기침: cough (noun).\n기침하다: to cough (verb).",example:"A: 기침이 심해요?\nB: 네, 계속 기침해요.\nA: 감기인 것 같아요.\nB: 약국에 가야 할 것 같아요.",exampleSrc:"A: Is your cough bad?\nB: Yes, I keep coughing.\nA: I think it's a cold.\nB: I think I need to go to the pharmacy.",deepDive:{
          title:"기침 Usage",
          text:"기침 = cough (noun)\n기침하다 = to cough (verb)\n기침이 나다 = to have a cough (onset)\n기침이 심하다 = the cough is severe\n\n계속 기침해요 = I keep coughing\n기침이 멈추지 않아요 = The cough won't stop"
        ,funFact:"A 하다 verb — noun + 하다 (to do). This pattern creates hundreds of verbs from Sino-Korean nouns."}},
        {type:"teach",trg:"감기",src:"cold (illness)",pos:"noun",gender:null,note:"감기: common cold.\n감기에 걸리다: to catch a cold.",example:"A: 감기에 걸렸어요?\nB: 네, 어제부터 감기예요.\nA: 약 먹었어요?\nB: 아직 안 먹었어요.",exampleSrc:"A: Did you catch a cold?\nB: Yes, I've had a cold since yesterday.\nA: Did you take medicine?\nB: I haven't taken any yet.",deepDive:{
          title:"Illness Expressions",
          text:"감기에 걸리다 = to catch a cold\n독감 = flu (stronger than 감기)\n\n감기 증상:\n기침 = cough\n콧물 = runny nose (코 + 물 = nose + water)\n재채기 = sneeze\n목이 아프다 = sore throat"
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"두통",src:"headache",pos:"noun",gender:null,note:"COMPOUND: 두(head/頭) + 통(pain/痛).\nLiterally 'head pain'.",example:"A: 두통이 있어요?\nB: 네, 심한 두통이 있어요.\nA: 두통약 드릴까요?\nB: 네, 주세요.",exampleSrc:"A: Do you have a headache?\nB: Yes, I have a severe headache.\nA: Shall I give you headache medicine?\nB: Yes, please.",deepDive:{
          title:"Pain Compounds with 통",
          text:"통(痛) = pain:\n두통 = headache (head + pain)\n복통 = stomachache (belly + pain)\n치통 = toothache (tooth + pain)\n\nAll Sino-Korean medical terms."
        ,funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"teach",trg:"약",src:"medicine",pos:"noun",gender:null,note:"약: medicine, drug.\n약을 먹다: to take medicine.",example:"A: 약을 먹었어요?\nB: 아직 안 먹었어요.\nA: 빨리 드세요.\nB: 네, 지금 먹을게요.",exampleSrc:"A: Did you take medicine?\nB: I haven't taken any yet.\nA: Please take it quickly.\nB: Okay, I'll take it now.",deepDive:{
          title:"약 Compounds",
          text:"약 = medicine\n약국 = pharmacy (medicine + bureau)\n약사 = pharmacist (medicine + person)\n\n감기약 = cold medicine\n두통약 = headache medicine\n소화제 = digestive medicine"
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"병원",src:"hospital",pos:"noun",gender:null,note:"COMPOUND: 병(illness/病) + 원(institution/院).\n병원에 가다: to go to the hospital.",example:"A: 병원에 가야 돼요.\nB: 왜요? 어디가 아파요?\nA: 열이 나고 기침이 심해요.\nB: 빨리 가세요!",exampleSrc:"A: I have to go to the hospital.\nB: Why? Where does it hurt?\nA: I have a fever and my cough is bad.\nB: Go quickly!",deepDive:{
          title:"Korean Healthcare System",
          text:"병원 = hospital\n의원 = clinic (smaller than 병원)\n대학병원 = university hospital (large)\n응급실 = emergency room\n\nIn Korea, you can visit most hospitals without an appointment.\nHealthcare is relatively affordable."
        ,funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"teach",trg:"약국",src:"pharmacy",pos:"noun",gender:null,note:"COMPOUND: 약(medicine/藥) + 국(bureau/局).\n처방전: prescription.",example:"A: 약국이 어디에 있어요?\nB: 병원 옆에 있어요.\nA: 감기약을 사고 싶어요.\nB: 처방전이 있어요?",exampleSrc:"A: Where is the pharmacy?\nB: It's next to the hospital.\nA: I want to buy cold medicine.\nB: Do you have a prescription?",deepDive:{
          title:"Pharmacy in Korea",
          text:"약국 = pharmacy\n약사 = pharmacist\n처방전 = prescription\n\nIn Korea:\n처방약 = prescription medicine (need doctor's note)\n일반약 = over-the-counter medicine (no prescription)\n\n편의점에서도 간단한 약을 살 수 있어요.\nYou can also buy simple medicine at convenience stores."
        ,funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"teach",trg:"주사",src:"shot/injection",pos:"noun",gender:null,note:"주사: shot, injection.\n주사를 맞다: to get a shot.",example:"A: 주사를 맞아야 해요?\nB: 네, 독감 주사예요.\nA: 주사가 무서워요.\nB: 괜찮아요, 안 아파요.",exampleSrc:"A: Do I have to get a shot?\nB: Yes, it's a flu shot.\nA: I'm scared of shots.\nB: It's okay, it won't hurt.",deepDive:{
          title:"주사 Expressions",
          text:"주사를 맞다 = to get/receive a shot\n주사를 놓다 = to give a shot (doctor does this)\n\n독감 주사 = flu shot\n예방 주사 = vaccination\n\n주사가 무서워요 = I'm afraid of shots\n주사 안 아파요 = The shot doesn't hurt"
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"증상",src:"symptom",pos:"noun",gender:null,note:"COMPOUND: 증(evidence/症) + 상(shape/狀).\n증상을 설명하다: to describe symptoms.",example:"A: 증상이 어때요?\nB: 열이 나고 기침이 나요.\nA: 언제부터 그랬어요?\nB: 이틀 전부터요.",exampleSrc:"A: How are your symptoms?\nB: I have a fever and a cough.\nA: Since when has it been like this?\nB: Since two days ago.",deepDive:{
          title:"At the Doctor's Office",
          text:"의사: 어디가 아파요? = Where does it hurt?\n환자: 열이 나고 기침이 나요 = I have fever and cough\n의사: 언제부터요? = Since when?\n환자: 어제부터요 = Since yesterday\n의사: 약 처방해 드릴게요 = I'll prescribe medicine"
        ,funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"tip",title:"🏥 Hospital Visit Phrases",deepDive:{
          title:"More Medical Phrases",
          text:"Useful hospital expressions:\n\n접수하다 = to register (at reception)\n진찰을 받다 = to get an examination\n검사를 받다 = to get tested\n입원하다 = to be hospitalized\n퇴원하다 = to be discharged\n\n보험이 있어요? = Do you have insurance?\n건강보험증 = health insurance card"
        },text:"Essential phrases for the hospital:\n\n어디가 아파요? = Where does it hurt?\n열이 나요 = I have a fever\n기침이 나요 = I have a cough\n감기에 걸렸어요 = I caught a cold\n약을 먹었어요 = I took medicine\n알레르기가 있어요 = I have allergies\n처방전 주세요 = Please give me a prescription"},
        {type:"mc",q:"열이 나요 means:",opts:["I have a cold","I have a fever","I have a cough","I have a headache"],ans:"I have a fever",hint:"열 = fever/heat. 나다 = to come out. The heat is coming out."},
        {type:"mc",q:"Where do you go to buy medicine?",opts:["병원","약국","학교","식당"],ans:"약국",hint:"약 = medicine. Where is the place for medicine?"},
        {type:"mc",q:"감기에 걸렸어요 means:",opts:["I have a headache","I got better","I caught a cold","I need a shot"],ans:"I caught a cold",hint:"감기 = cold. 걸리다 = to catch (an illness)."},
        {type:"mc",q:"주사를 맞다 means:",opts:["To give a shot","To be afraid of shots","To get/receive a shot","To buy medicine"],ans:"To get/receive a shot",hint:"맞다 here means to receive. The patient receives the injection."},
        {type:"fb",opts:["걸렸","걸리","걸린","걸려"],hint:"걸리다 → past tense = 걸렸어요. Dark vowel stem.",s:"감기에 ___어요.\n(I caught a cold.)",a:"걸렸"},
        {type:"fb",opts:["열","약","감기","두통"],hint:"Which symptom means 'heat/fever'?",s:"___이 나고 기침이 나요.\n(I have a fever and a cough.)",a:"열"},
        {type:"match",pairs:[{trg:"아프다",src:"to be sick"},{trg:"약국",src:"pharmacy"},{trg:"주사",src:"shot"},{trg:"증상",src:"symptom"}]},
        {type:"drag_fill",hint:"I caught a cold. I have a fever and a bad cough. I went to the hospital and got an examination.",s:"감기에 걸렸어요. {1}이 나고 {2}이 심해요. {3}에 가서 {4}을 받았어요.",blanks:{"1":"열","2":"기침","3":"병원","4":"진찰"},pool:["열","기침","병원","진찰","약국","두통","감기","주사"]},
        {type:"mc",q:"두통 is made of which Sino-Korean parts?",opts:["head + medicine","head + pain","sick + cold","pain + fever"],ans:"head + pain",hint:"두 = head (頭), 통 = pain (痛). A compound describing where it hurts."}
  ]}
]};
