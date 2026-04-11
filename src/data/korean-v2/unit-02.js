// Unit 2 — 저는 학생이에요
// Identity, Existence, Particles & Demonstratives

export default {n:2,lang:"ko",srcLang:"en",track:"v2",title:"저는 학생이에요",sub:"Identity, Existence, Particles & Demonstratives",icon:"🧑",level:"A1.1",color:"#5B8CFF",lessons:[
  {id:"kou2l1",title:"직업 (Jobs)",icon:"💼",xp:20,board:true,steps:[
        {type:"intro",title:"What Do You Do?",desc:"Every job word is a Sino-Korean compound. Same blocks, new words.",goals:["Learn 8 job words","Decompose each into Sino-Korean parts","See 학, 생, 원, 사 reused across words"]},
        {type:"teach",trg:"학생",src:"student",pos:"noun",gender:null,phonetic:"hak-saeng",note:"SINO-KOREAN: 학 (study) + 생 (life, person).\n'Study-person' = student.\n학 reappears in: 학교, 학원, 대학교...",example:"A: 학생이에요? B: 네, 저는 학생이에요.",exampleSrc:"A: Are you a student? B: Yes, I am a student.",deepDive:{title:"Using 학생",text:"생 reappears in: 선생님, 생일, 생활...",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},hanja:"學+生"},
        {type:"teach",trg:"선생님",src:"teacher",pos:"part",gender:null,phonetic:"seon-saeng-nim",note:"COMPOUND: 선생 (teacher) + 님 (honorific).\n님 shows RESPECT. You add it to titles.\n선생 alone is informal. 님 elevates it.",example:"A: 선생님이에요? B: 네, 저는 선생님이에요.",exampleSrc:"A: Are you a teacher? B: Yes, I am a teacher.",deepDive:{title:"선생님",text:"님 reappears in: 사장님, 부장님, 의사 선생님...",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},hanja:"先生+님"},
        {type:"teach",trg:"의사",src:"doctor",pos:"noun",gender:null,phonetic:"ui-sa",note:"SINO-KOREAN: 의 (medicine) + 사 (master/expert).\n의 reappears in: 의학 (medicine), 의원 (clinic).\n사 (master/expert) reappears in: 교사, 강사...",example:"A: 의사예요? B: 네, 저는 의사예요.",exampleSrc:"A: Are you a doctor? B: Yes, I am a doctor.",hanja:"醫+師",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"mc",q:"선생님 means:",opts:["teacher","student","doctor","nurse"],ans:"teacher",hint:"선생 + 님 (honorific suffix). What role does this person have?"},
        {type:"teach",trg:"회사원",src:"office worker",pos:"noun",gender:null,phonetic:"hoe-sa-won",note:"SINO-KOREAN: 회사 (company) + 원 (member).\n'Company-member' = office worker.\n원 reappears in: 병원, 학원, 공무원...",example:"A: 뭐 해요? B: 저는 회사원이에요.",exampleSrc:"A: What do you do? B: I am an office worker.",hanja:"會社+員",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"teach",trg:"경찰관",src:"police officer",pos:"noun",gender:null,phonetic:"gyeong-chal-gwan",note:"SINO-KOREAN: 경찰 (police) + 관 (official).\n관: same building block as 도서관!\n경 (warn) + 찰 (observe): police.",example:"A: 이 사람은 누구예요? B: 경찰관이에요.",exampleSrc:"A: Who is this person? B: They are a police officer.",hanja:"警察+官",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"teach",trg:"요리사",src:"chef / cook",pos:"verb",gender:null,phonetic:"yo-ri-sa",note:"SINO-KOREAN: 요리 (cooking) + 사 (expert).\nSame 사 (expert) morpheme as the doctor word.\n요리: cooking. Also a verb: 요리하다 (to cook).",example:"A: 요리사예요? B: 네, 저는 요리사예요.",exampleSrc:"A: Are you a chef? B: Yes, I am a chef.",hanja:"料理+師",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"mc",q:"경찰관 means:",opts:["office worker","police officer","chef","nurse"],ans:"police officer",hint:"경 (warn) + 찰 (observe) + 관 (official). Law enforcement."},
        {type:"teach",trg:"간호사",src:"nurse",pos:"noun",gender:null,phonetic:"gan-ho-sa",note:"SINO-KOREAN: 간호 (nursing/care) + 사 (expert).\nSame 사 (expert) morpheme across all three job words.\n사 = professional expert in a field.",example:"A: 간호사가 있어요? B: 네, 저는 간호사예요.",exampleSrc:"A: Is there a nurse? B: Yes, I am a nurse.",hanja:"看護+師",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"teach",trg:"프리랜서",src:"freelancer",pos:"noun",gender:null,phonetic:"peu-ri-laen-seo",note:"From English freelancer.\nVery common job in Korea.\nEnds in a vowel sound, so use the vowel form.",example:"A: 회사원이에요? B: 아니요, 프리랜서예요.",exampleSrc:"A: Are you an office worker? B: No, I'm a freelancer.",funFact:"A Konglish loanword adapted from English. Korean has borrowed many modern and tech words."},
        {type:"tip",title:"🧱 The 사 (師/士) Morpheme: Expert in a Field",deepDive:{
          title:"The LEGO Morpheme Bank",
          text:"And 원 (member/place) twice:\n\n회사원\n→ office worker (company + member)\n\n병원\n→ hospital (illness + place)\n\n8 morphemes → already 10+ words decoded.\nEvery lesson, your LEGO set gets bigger."
        },text:"You've now seen 사 (expert) THREE times:\n의사 (medicine + expert) = doctor\n요리사 (cooking + expert) = chef\n간호사 (nursing + expert) = nurse\n\nOne morpheme, three words decoded."},
        {type:"mc",q:"학생 분해: 학 + 생. 학 means:",opts:["Person","Study","School","Teacher"],ans:"Study",hint:"Study-person = student"},
        {type:"mc",q:"의사, 요리사, 간호사  -  what do they all share?",opts:["의 (medicine) morpheme","사 (expert) morpheme","원 (institution) morpheme","님 (honorific) suffix"],ans:"사 (expert) morpheme",hint:"사 = professional/___ in a field"},
        {type:"mc",q:"Which word uses 님 to add RESPECT to a title?",opts:["학생","의사","선생님","회사원"],ans:"선생님",hint:"님 is an honorific suffix added to titles"},
        {type:"mc",q:"'I am a chef' in Korean:",opts:["저는 요리사예요","저는 선생님이에요","저는 학생이에요","저는 의사예요"],ans:"저는 요리사예요",hint:"Check the last sound of the job title."},
        {type:"fb",opts:["회사원","경찰관","의사","학생"],hint:"Company + member = office worker",s:"저는 ___이에요. (office worker)",a:"회사원"},
        {type:"fb",opts:["사","님","원","생"],hint:"Expert morpheme used in 의사, 요리사, 간호사",s:"저는 간호___예요.\n(I am a nurs___.)",a:"사"},
        {type:"match",pairs:[{trg:"학생",src:"student"},{trg:"선생님",src:"teacher"},{trg:"의사",src:"doctor"},{trg:"회사원",src:"office worker"}]},
        {type:"match",pairs:[{trg:"요리사",src:"chef"},{trg:"간호사",src:"nurse"},{trg:"경찰관",src:"police officer"},{trg:"프리랜서",src:"freelancer"}]},
        {type:"drag_fill",hint:"Who studies at school?",s:"저는 {1}이에요. 학교에서 공부해요.",blanks:{"1":"학생"},pool:["학생","의사","요리사","간호사"]},
        {type:"mc",q:"회사원 = 회사 + 원. 원 means:",opts:["Office","Work","Member","Place"],ans:"Member",hint:"Company-member = office worker"},
        {type:"mc",q:"What type of word is 프리랜서?",opts:["Pure Korean word","Sino-Korean compound","Konglish loanword","A Japanese word"],ans:"Konglish loanword",hint:"English freelancer adapted into Korean pronunciation"}
  ]},
  {id:"kou2l2",title:"있어요 / 없어요",icon:"📦",xp:20,board:true,steps:[
        {type:"intro",title:"There Is / There Isn't",desc:"있다 / 없다\n→ exist / not exist\n\nOne verb, three jobs.",goals:["Use 있어요 for 'there is' AND 'I have'","Use 없어요 for the opposite","Notice 이/가 landing naturally on subjects"]},
        {type:"teach",trg:"있어요",src:"there is / I have / exists",pos:"noun",gender:null,phonetic:"i-sseo-yo",note:"있다: to exist / to have.\n있어요: polite present form.\n",example:"A: 커피가 있어요? B: 네, 있어요!",exampleSrc:"A: Is there coffee? B: Yes, there is!",deepDive:{
          title:"있어요 in Korean Culture",
          text:"Works for BOTH 'there is' and 'I have':\n커피가 있어요: There is coffee.\n저는 고양이가 있어요: I have a cat.\n\nKorean doesn't always separate existence from possession."
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"없어요",src:"there isn't / I don't have",pos:"noun",gender:null,phonetic:"eop-seo-yo",note:"없다 = to not exist / to not have.\n없어요 = polite present form.\n",example:"A: 시간이 있어요? B: 아니요, 시간이 없어요.",exampleSrc:"A: Do you have time? B: No, I don't have time.",deepDive:{title:"Using 없어요",text:"있어요\n→ there is / I have\n\n없어요\n→ there is not / I don't have\n\nExact opposites. Pair them in your memory.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"이 / 가",src:"(subject marker  -  just notice it)",pos:"part",gender:null,phonetic:"i / ga",note:"You will see these on subjects.\n\n시간이\n→ after consonant\n\n커피가\n→ after vowel",example:"A: 커피가 있어요? B: 커피가 있어요. 시간이 없어요.",exampleSrc:"A: Is there coffee? B: There is coffee. There is no time.",deepDive:{
          title:"Full Pattern",
          text:"가 after vowel: 커피가 (coffee)\n\nJust notice the pattern for now.\nDon't memorize a rule yet.\nThis gets a proper name in a later lesson."
        ,funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"mc",q:"없어요 means:",opts:["there is","there isn't","I am","I have"],ans:"there isn't",hint:"없다 is the exact opposite of 있다. Think: non-existence."},
        {type:"tip",title:"💡 있다: Korean's Most Useful Verb",deepDive:{
          title:"있다: Korean's Most Useful Verb",
          text:"2. I have:\n\n저는 차가 있어요.\n→ I have a car.\n\n3. Someone is somewhere:\n선생님이 교실에 있어요.\n→ The teacher is in the classroom.\n\n없다 is the exact inverse of all three:\n\n커피가 없어요.\n→ There is no coffee. / I don't have coffee.\n\nOne verb doing the work of three English verbs."
        },text:"있다 covers THREE English ideas:\n\n1. There is:\n커피가 있어요.\n→ There is coffee."},
        {type:"mc",q:"커피가 있어요 can mean:",opts:["Only there is coffee","Both there is and I have","Only I have coffee","Only I like coffee"],ans:"Both there is and I have",hint:"있다 covers existence AND possession"},
        {type:"mc",q:"'I don't have time':",opts:["시간이 있어요","시간이 없어요","시간은 이에요","시간을 주세요"],ans:"시간이 없어요",hint:"___ = don't have / there isn't"},
        {type:"mc",q:"시간이 없어요. Which particle is on 시간?",opts:["은","도","이","를"],ans:"이",hint:"이 after consonant-ending words"},
        {type:"mc",q:"커피___ 있어요.\n(There is coffee)",opts:["이","가","은","는"],ans:"가",hint:"Check the last letter."},
        {type:"teach",trg:"물",src:"water",pos:"noun",gender:null,phonetic:"mul",note:"One of the most common Korean nouns.",example:"A: 물이 있어요? B: 네, 물이 있어요.",exampleSrc:"A: Is there water? B: Yes, there is water.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"fb",opts:["있어요","없어요","이에요","아니에요"],hint:"The existence verb, polite form. Opposite of 없어요.",s:"물이 ___.\n(There is water.)",a:"있어요"},
        {type:"fb",opts:["있어요","없어요","이에요","몰라요"],hint:"Don't have = the opposite of 있어요",s:"저는 시간이 ___.\n(I have no time)",a:"없어요"},
        {type:"fb",opts:["이","가","은","는"],hint:"선생님 ends in consonant ㅁ",s:"교실에 선생님___ 있어요.\n(In the classroom, a teacher is there.)",a:"이"},
        {type:"match",pairs:[{trg:"있어요",src:"there is / I have"},{trg:"없어요",src:"there isn't / don't have"},{trg:"이",src:"subject marker (after consonant)"},{trg:"가",src:"subject marker (after vowel)"}]},
        {type:"drag_fill",hint:"Time exists. No coffee.",s:"{1}이 있어요. 커피가 {2}.",blanks:{"1":"시간","2":"없어요"},pool:["시간","커피","있어요","없어요","이에요"]},
        {type:"mc",q:"'There is no doctor'  -  choose the correct sentence:",opts:["의사가 있어요","의사는 없어요","의사가 이에요","의사도 있어요"],ans:"의사는 없어요",hint:"___ = there isn't"},
        {type:"mc",q:"저는 고양이가 있어요. This means:",opts:["I am a cat","I want a cat","I have a cat","Cats are nice"],ans:"I have a cat",hint:"있어요 = have, when used with a possessed object"},
        {type:"mc",q:"이/가 is used for:",opts:["Object of sentence","Topic of sentence","Subject of sentence","Location"],ans:"Subject of sentence",hint:"Just notice for now  -  This gets named properly in a later lesson"},
        {type:"teach",trg:"질문",src:"question",pos:"noun",gender:null,phonetic:"jil-mun",note:"질문: question.\nSINO-KOREAN: 질 (matter) + 문 (ask).\n\n질문이 있어요.\n→ I have a question.",example:"A: 질문이 있어요? B: 네, 질문이 있어요!",exampleSrc:"A: Do you have a question? B: Yes, I have a question!",deepDive:{
          title:"Classroom Survival Words",
          text:"질문이 있어요: I have a question.\n질문 있어요?: Any questions?\n\n문 (問) = ask. Same morpheme in:\n문제 (問題) = problem/question (on a test)\n학문 (學問) = learning/scholarship"
        ,funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"teach",trg:"대답",src:"answer / reply",pos:"noun",gender:null,phonetic:"dae-dap",note:"대답: answer, reply.\nSINO-KOREAN: 대 (respond) + 답 (answer).\n\n대답해 주세요.\n→ Please answer.",example:"A: 질문이 있어요. B: 네, 대답해 주세요!",exampleSrc:"A: I have a question. B: Yes, please answer!",deepDive:{
          title:"Ways to Say Answer",
          text:"대답: answer/reply (spoken response).\n대답하다: to answer.\n\n답 alone also means 'answer':\n정답 = correct answer (정 = correct + 답)\n\n질문 ↔ 대답: question ↔ answer."
        ,funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"mc",q:"질문이 있어요 means:",opts:["I have an answer","I have a question","There is no question","I don't understand"],ans:"I have a question",hint:"질문 = question, 있어요 = have/exist"}
  ]},
  {id:"kou2l2b",title:"★ Vowel Harmony: Why -아요 vs -어요",icon:"⚡",xp:25,board:true,steps:[
        {type:"intro",title:"The Rule Behind Every Verb Ending",desc:"가요 vs 먹어요\n→ different endings, one rule\n\nVowel harmony explained.",goals:["Understand the bright/dark vowel split","Know when to use -아요 vs -어요","Understand why 하다 → 해요 (not 하아요)","Generate ANY regular verb form from the stem alone"]},
        {type:"tip",title:"☀️ Bright Vowels Take -아요",deepDive:{
          title:"Bright Vowels Take -아요",
          text:"If it's ㅏ or ㅗ, the verb takes -아요.\n\n가다: stem 가, vowel ㅏ (bright) → -아요\n오다: stem 오, vowel ㅗ (bright) → -아요\n보다: stem 보, vowel ㅗ (bright) → -아요\n\nTwo bright sounds prefer each other."
        },text:"Korean splits vowels into two families.\n\n☀️ BRIGHT vowels: ㅏ and ㅗ\nThese attract the ending -아요.\n\nLook at the LAST VOWEL of the stem."},
        {type:"teach",trg:"가다",src:"to go",pos:"verb",gender:null,phonetic:"ga-da",note:"Bright vowel in the stem.\nSame vowel merges in the ending.\n\n가다 → 가요 (to go → I go)",example:"A: 어디에 가요? B: 학교에 가요.",exampleSrc:"A: Where are you going? B: I'm going to school.",deepDive:{title:"The Simplest Contraction",text:"가 + 아요: the two ㅏ sounds merge into one.\nResult: 가요 (not 가아요).",funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"teach",trg:"오다",src:"to come",pos:"verb",gender:null,phonetic:"o-da",note:"Bright vowel in the stem.\nTwo vowels contract.\n\n오다 → 와요 (to come → I come)",example:"A: 누가 와요? B: 친구가 와요.",exampleSrc:"A: Who is coming? B: A friend is coming.",deepDive:{title:"The ㅘ Contraction",text:"오 + 아요: ㅗ and ㅏ merge into ㅘ.\nResult: 와요 (not 오아요).",funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"teach",trg:"보다",src:"to see / to watch",pos:"verb",gender:null,phonetic:"bo-da",note:"Same bright vowel contraction.\n\n보다 → 봐요 (to see → I see)",example:"A: 뭐 봐요? B: 영화를 봐요.",exampleSrc:"A: What are you watching? B: I'm watching a movie.",deepDive:{title:"Same Contraction",text:"보 + 아요: ㅗ+ㅏ = ㅘ.\nResult: 봐요 (not 보아요).\n\nSame pattern as 오다 → 와요.",funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"mc",q:"오다 means:",opts:["to go","to see","to come","to eat"],ans:"to come",hint:"오다 contracts to 와요. It describes movement toward you."},
        {type:"tip",title:"🌙 All Other Vowels Take -어요",deepDive:{
          title:"All Other Vowels Take -어요",
          text:"마시다: stem 마시, last vowel ㅣ (dark) → -어요\n\n있다: stem 있, vowel ㅣ (dark) → -어요\n\nBright = only ㅏ and ㅗ.\nDark = literally everything else."
        },text:"Every vowel that is NOT ㅏ or ㅗ is dark.\nDark vowels take -어요.\n\nㅓ, ㅜ, ㅡ, ㅣ, ㅔ, ㅐ and all others.\n\n먹다: stem 먹, vowel ㅓ (dark) → -어요"},
        {type:"teach",trg:"먹다",src:"to eat",pos:"verb",gender:null,phonetic:"meok-da",note:"먹다: stem 먹.\nThe vowel in the stem is dark (not ㅏ or ㅗ).\n먹다 → 먹어요 (to eat → I eat).",example:"A: 뭐 먹어요? B: 밥을 먹어요.",exampleSrc:"A: What are you eating? B: I'm eating rice.",deepDive:{title:"먹다",text:"Consonant stems: the ending just attaches.",funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"teach",trg:"마시다",src:"to drink",pos:"verb",gender:null,phonetic:"ma-si-da",note:"마시다: stem 마시.\nLast vowel ㅣ is dark.\n마시다 → 마셔요 (ㅣ+ㅓ contracts).",example:"A: 뭐 마셔요? B: 커피를 마셔요.",exampleSrc:"A: What are you drinking? B: I'm drinking coffee.",deepDive:{title:"Contraction",text:"마시 + 어요: mouth naturally says 마셔요.\nSame contraction as 가르치다 → 가르쳐요.",funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"tip",title:"✨ 하다 Is Special",deepDive:{
          title:"Why 하다 Contracts",
          text:"하 + 여 contracts to 해. Always.\nThis is the most common contraction in Korean.\n\nBecause 하다 attaches to nouns, learning this ONE rule gives you hundreds of verbs:\n전화하다 → 전화해요 (phone)\n산책하다 → 산책해요 (walk/stroll)\n사랑하다 → 사랑해요 (love)\n\nWhenever you see 공부하다, 운동하다, etc., you know: 공부해요, 운동해요."
        },text:"하다 (to do) has a unique conjugation:\n\n하다 → 해요 (NOT 하아요 or 하어요)\n\nEvery noun + 하다 verb follows this rule:\n공부하다 → 공부해요 (study)\n운동하다 → 운동해요 (exercise)\n요리하다 → 요리해요 (cook)"},
        {type:"teach",trg:"배우다",src:"to learn",pos:"verb",gender:null,phonetic:"bae-u-da",note:"배우다: stem 배우.\nThe stem vowel ㅜ is dark.",example:"A: 뭐 배워요? B: 한국어를 배워요.",exampleSrc:"A: What are you learning? B: I'm learning Korean.",funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."},
        {type:"teach",trg:"살다",src:"to live",pos:"verb",gender:null,phonetic:"sal-da",note:"살다: stem 살.\nThe stem vowel ㅏ is bright.",example:"A: 어디에 살아요? B: 서울에 살아요.",exampleSrc:"A: Where do you live? B: I live in Seoul.",funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."},
        {type:"teach",trg:"서다",src:"to stand",pos:"verb",gender:null,phonetic:"seo-da",note:"서다: stem 서.\nThe stem vowel ㅓ is dark.",example:"A: 어디에 서요? B: 여기에 서요.",exampleSrc:"A: Where do you stand? B: I stand here.",funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."},
        {type:"teach",trg:"놀다",src:"to play / to hang out",pos:"verb",gender:null,phonetic:"nol-da",note:"놀다: stem 놀.\nThe stem vowel ㅗ is bright.",example:"A: 같이 놀아요! B: 네, 좋아요!",exampleSrc:"A: Let's hang out! B: Yes, sounds good!",funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."},
        {type:"mc",q:"배우다 (to learn)  -  stem vowel is ㅜ. Which ending?",opts:["-아요 → 배우아요","-어요 → 배워요","해요","가요"],ans:"-어요 → 배워요",hint:"Is the stem vowel bright or dark?"},
        {type:"mc",q:"오다 (to come)  -  stem vowel is ㅗ. Which ending?",opts:["-아요 → 와요","-어요 → 오어요","해요","요만"],ans:"-아요 → 와요",hint:"What kind of vowel is ㅗ?"},
        {type:"mc",q:"Which verb gets -어요?",opts:["가다 (ㅏ stem)","보다 (ㅗ stem)","읽다 (ㅣ vowel)","오다 (ㅗ stem)"],ans:"읽다 (ㅣ vowel)",hint:"What kind of ___ is ㅣ: bright or dark?"},
        {type:"fb",opts:["살아요","살어요","살해요","살요"],hint:"ㅏ is BRIGHT",s:"살다 (to live): polite form ___",a:"살아요"},
        {type:"fb",opts:["서요","서아요","서해요","서어요"],hint:"ㅓ is a dark vowel. Dark vowels take -어요, which contracts here.",s:"서다 (to stand): polite form ___",a:"서요"},
        {type:"tip",title:"🔗 Contraction Patterns",deepDive:{
          title:"Why Korean Contracts",
          text:"Korean is an efficiency language. When two vowels crash, the shorter form wins.\n\nYou already do this in English: 'do not' → 'don't', 'I am' → 'I'm'.\n\nKorean does it with vowels:\n보 + 아요: your mouth says 봐요, not 보아요.\n마시 + 어요: your mouth says 마셔요, not 마시어요.\n\nThe written contractions just follow what your mouth already wants to do.\n\nFull contraction reference with all irregular types in a later lesson."
        },text:"When stem vowel meets ending vowel, they merge:\n\n가 + 아요 → 가요 (same ㅏ merges)\n오 + 아요 → 와요 (ㅗ+ㅏ becomes ㅘ)\n마시 + 어요 → 마셔요 (ㅣ+ㅓ becomes ㅕ)\n쓰 + 어요 → 써요 (ㅡ drops entirely)\n\nDon't memorise these. Just say them out loud.\nYour mouth naturally picks the shorter form."},
        {type:"mc",q:"마시다 (to drink) → 마시 + 어요 = ?",opts:["마시어요","마셔요","마사요","마시요"],ans:"마셔요",hint:"이 + 어 contracts to 여. 마시 + 어요"},
        {type:"mc",q:"보다 (to see) → 보 + 아요 = ?",opts:["보아요","봐요","보요","봐아요"],ans:"봐요",hint:"ㅗ + ㅏ contracts to ㅘ. 보 + 아요"},
        {type:"tip",title:"🎯 You Can Now Generate ANY Regular Verb",deepDive:{
          title:"From Memorizing to Generating",
          text:"Three rules. Every regular verb. You can generate forms you have never seen.\n\nOr this one:\n쓰다 = to write\nStem: 쓰\nVowel: ㅡ (dark, and ㅡ drops)\n쓰 + 어요 = 써요 (I write) ✓\n\nYou derived these yourself.\nYou did not memorise them.\nThat is the difference between a phrase learner and a language learner."
        },text:"With vowel harmony + 하다 rule, you can conjugate any regular verb:\n\nBright vowel (ㅏ/ㅗ) → 아요: 가다 → 가요 = go\nDark vowel (else) → 어요: 먹다 → 먹어요 = eat\n하다 → always 해요: 공부하다 → 공부해요 = study"},
        {type:"match",pairs:[{trg:"가다 (ㅏ)",src:"bright: goes"},{trg:"먹다 (ㅓ)",src:"dark: eats"},{trg:"오다 (ㅗ)",src:"bright: comes"},{trg:"하다",src:"special: always 해"}]},
        {type:"drag_fill",hint:"Three verbs: go (bright), eat (dark), drink (dark contracted)",s:"저는 학교에 {1}. 밥 {2}. 커피 {3}.",blanks:{"1":"가요","2":"먹어요","3":"마셔요"},pool:["가요","먹어요","마셔요","봐요","해요"]},
        {type:"mc",q:"You see a new verb: 놀다 (to play). Stem 놀, vowel ㅗ. Polite form?",opts:["놀아요","놀어요","놀해요","노요"],ans:"놀아요",hint:"ㅗ is BRIGHT"},
        {type:"mc",q:"Summary: 하다 ALWAYS becomes:",opts:["하아요","하요","해요","하여요"],ans:"해요",hint:"하 + 아 always contracts to 해. .... No exceptions."},
        {type:"teach",trg:"좋다 → 좋아요",src:"to be good / to like → is good / (I) like",pos:"verb",gender:null,phonetic:"jo-ta → jo-a-yo",note:"좋다: to be good, to like (feeling).\n\n좋다 → 좋아요\n→ Bright ㅗ in stem → takes -아요.",example:"A: 한국 음식이 좋아요? B: 네, 좋아요!",exampleSrc:"A: Do you like Korean food? B: Yes, I like it!",deepDive:{
          title:"좋다: Korea's Essential Word",
          text:"좋다 does DOUBLE duty:\n\n1. 'Is good':\n날씨가 좋아요 = The weather is good.\n\n2. 'I like' (feeling, with 이/가):\n커피가 좋아요 = I like coffee.\n\nThe subject marker 이/가 marks what you like.\nNOT 을/를. That's for 좋아하다.\n\nOpposite: 싫다 → 싫어요 (to dislike)."
        ,funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"teach",trg:"좋아하다 → 좋아해요",src:"to like (action) → likes",pos:"verb",gender:null,phonetic:"jo-a-ha-da → jo-a-hae-yo",note:"좋아하다: to like (as action verb).\n하다 compound: 좋아 (liking) + 하다 (do).\n\n좋아하다 → 좋아해요 (always 해요).",example:"A: 뭐 좋아해요? B: 저는 한국 음식을 좋아해요.",exampleSrc:"A: What do you like? B: I like Korean food.",deepDive:{
          title:"좋다 vs 좋아하다",
          text:"좋다 = feeling (uses 이/가):\n커피가 좋아요 = Coffee is pleasing to me.\n\n좋아하다 = action (uses 을/를):\n커피를 좋아해요 = I like coffee (actively).\n\nBoth mean 'I like coffee' in English.\nBut the PARTICLES change.\nFor now: both are fine. Koreans use both."
        ,funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"mc",q:"좋다 → polite present:",opts:["좋요","좋어요","좋아요","좋해요"],ans:"좋아요",hint:"Bright ㅗ → -아요"},
        {type:"fb",opts:["를","가","은","에"],hint:"Action verbs take which particle on their target?",s:"저는 커피___ 좋아해요.\n(I like coffee.)",a:"를"}
  ]},
  {id:"kou2l2c",title:"을/를: Object Marker",icon:"🎯",xp:25,board:true,steps:[
        {type:"intro",title:"What the Verb Acts On",desc:"을/를\n→ object marker\n\nMarks WHAT the verb acts on.",goals:["Use 을/를 (object particle)","Choose 을 vs 를 based on final letter","See the full particle trio (은/는, 이/가, 을/를)","Parse Korean sentences into topic + object + verb"]},
        {type:"teach",trg:"을 / 를",src:"(object particle)",pos:"part",gender:null,phonetic:"eul / reul",note:"을/를 marks the OBJECT  -  the thing being acted on.\n\n을 after consonant:\n밥을 (rice), 물을 (water)\n\n를 after vowel:\n커피를 (coffee), 차를 (tea)",example:"A: 뭐 마셔요? B: 커피를 마셔요.",exampleSrc:"A: What are you drinking? B: I'm drinking coffee.",deepDive:{
          title:"Same Logic as 은/는 and 이/가",
          text:"Korean particles come in pairs. Same function, two shapes for smooth sound:\n\nConsonant ending + 을:\n밥 (rice, ends ㅂ) → 밥을\n물 (water, ends ㄹ) → 물을\n\nVowel ending + 를:\n커피 (coffee, ends ㅣ) → 커피를\n차 (tea, ends ㅏ) → 차를\n\nYou already know this pattern from 은/는 and 이/가."
        ,funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"teach",trg:"을 or 를?",src:"Check the last letter.",pos:"part",gender:null,phonetic:"",note:"Last letter has a consonant (받침)?\n→ add 을\n\nLast letter is a vowel (no 받침)?\n→ add 를",example:"A: 뭐 먹어요? B: 밥을 먹어요.",exampleSrc:"A: What are you eating? B: I'm eating rice.",deepDive:{
          title:"The Rule In Full",
          text:"밥 → ㅂ (consonant) → 밥을\n커피 → ㅣ (vowel) → 커피를\n택시 → ㅣ (vowel) → 택시를\n물 → ㄹ (consonant) → 물을\n\nSame test every time. One glance at the final letter."
        ,funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"teach",trg:"은/는, 이/가, 을/를",src:"The three core particles",pos:"verb",gender:null,phonetic:"",note:"You now know the three CORE particles:\n\n은/는\n→ TOPIC: 'as for X...'\n\n이/가\n→ SUBJECT: the doer / what exists\n\n을/를\n→ OBJECT: what the verb acts on",example:"A: 저는 커피를 마셔요. B: 저도요!",exampleSrc:"A: I drink coffee. B: Me too!",deepDive:{
          title:"How They Build a Sentence",
          text:"저는 커피를 마셔요 (I drink coffee):\n\n저는 → 'as for me' (topic)\n커피를 → coffee (object: what I drink)\n마셔요 → drink (verb: always last)\n\nKorean sentence = topic + object + verb.\nParticles tell you WHO does WHAT."
        ,funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"mc",q:"을/를 marks the ___ of a sentence.",opts:["topic (general context)","subject (the doer)","object (acted upon)","location (at/in)"],ans:"object (acted upon)",hint:"The thing the verb acts ON."},
        {type:"mc",q:"물___ 마셔요. 물 ends in consonant ㄹ.",opts:["을","를","은","는"],ans:"을",hint:"Consonant ending → 을"},
        {type:"mc",q:"커피___ 마셔요. 커피 ends in vowel ㅣ.",opts:["을","를","은","는"],ans:"를",hint:"Vowel ending → 를"},
        {type:"mc",q:"택시___ 타요. 택시 ends in vowel ㅣ.",opts:["을","를","은","는"],ans:"를",hint:"Vowel ending → 를"},
        {type:"fb",opts:["을","를","은","가"],hint:"밥 ends in consonant ㅂ",s:"저는 밥___ 먹어요.\n(I eat rice.)",a:"을"},
        {type:"fb",opts:["을","를","은","이"],hint:"영화 ends in vowel ㅏ",s:"저는 영화___ 봐요.\n(I watch a movie.)",a:"를"},
        {type:"fb",opts:["을","를","은","가"],hint:"어 ends in vowel",s:"한국어___ 배워요.\n(I learn Korean.)",a:"를"},
        {type:"match",pairs:[{trg:"밥을",src:"rice (object)"},{trg:"커피를",src:"coffee (object)"},{trg:"물을",src:"water (object)"},{trg:"영화를",src:"movie (object)"}]},
        {type:"tip",title:"🔍 You've Been Seeing 을/를 Since Day One",deepDive:{
          title:"Why 을/를 Matters So Much",
          text:"Without 을/를, Korean sentences are ambiguous.\n\n커피 마셔요: I drink coffee (casual, particles dropped).\n커피를 마셔요: I drink coffee (clear: coffee is the object).\n\nKoreans drop particles in casual speech.\nBut when you are learning, particles are your roadmap.\nThey tell you exactly what role each word plays."
        },text:"택시를 타요 = I take a taxi.\n커피를 마셔요 = I drink coffee.\n밥을 먹어요 = I eat rice.\n\nEvery time you saw 를 or 을 in an example, that was the object marker at work."},
        {type:"mc",q:"저는 한국 음식을 좋아해요. What is the object?",opts:["저 (I, polite form)","한국 음식 (Korean food)","좋아해요 (like, action)","는 (topic particle)"],ans:"한국 음식 (Korean food)",hint:"을 marks the object. What comes before 을?"}
  ]},
  {id:"kou2l3",title:"이것 / 그것 / 저것",icon:"👆",xp:20,board:true,steps:[
        {type:"intro",title:"This / That / That Over There",desc:"이/그/저\n→ this / that / that over there\n\nThree spatial levels.",goals:["Use all three demonstratives","Understand the 이/그/저 prefix logic","See how it connects to 여기/거기/저기"]},
        {type:"teach",trg:"이것",src:"this (near me)",pos:"part",gender:null,phonetic:"i-geot",note:"이: near ME (the speaker).\n것: thing.\n이것: this thing.",example:"A: 이것은 뭐예요? B: 이것은 커피예요.",exampleSrc:"A: What is this? B: This is coffee.",deepDive:{title:"Full Pattern",text:"이 prefix rule: near the SPEAKER.",funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"teach",trg:"그것",src:"that (near you)",pos:"noun",gender:null,phonetic:"geu-geot",note:"그: near YOU (the listener).\n그것: that thing near you.\n",example:"A: 그것은 뭐예요? B: 그것은 물이에요.",exampleSrc:"A: What is that? B: That is water.",deepDive:{title:"Using 그것",text:"Also used for things just mentioned:\n'그 사람' = 'that person' (already mentioned).",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"저것",src:"that (far from both)",pos:"noun",gender:null,phonetic:"jeo-geot",note:"저: far from BOTH of us.\n저것: that thing way over there.\n",example:"A: 저것이 뭐예요? B: 학교예요.",exampleSrc:"A: What is that over there? B: It's a school.",deepDive:{title:"Using 저것",text:"The full three-level system:\n\n이\n→ near ME\n\n그\n→ near YOU\n\n저\n→ far from BOTH.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"mc",q:"그것 means:",opts:["this (near me)","that (near you)","that (far away)","here"],ans:"that (near you)",hint:"그 = near the listener. 것 = thing. Near YOU, not me."},
        {type:"teach",trg:"이 / 그 / 저 + noun",src:"this / that / that (far) + noun",pos:"noun",gender:null,phonetic:"i / geu / jeo",note:"The prefix attaches directly to a noun:\n이것 → 이 가방 (this bag)\n그것 → 그 책 (that book)",example:"A: 이 가방은 뭐예요? B: 제 가방이에요.",exampleSrc:"A: What is this bag? B: It's my bag.",deepDive:{title:"Prefix + Noun Pattern",text:"저것 → 저 건물 (that building)\n\nSame 이/그/저 logic, just with a specific noun.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"tip",title:"🔺 One Prefix, Three Systems",deepDive:{
          title:"이/그/저: Full Comparison",
          text:"Before NOUNS:\n이 책 = this book\n그 사람 = that person\n\nSTANDALONE:\n이것 = this thing\n그것 = that thing\n저것 = that (far)\n\nPLACES:\n여기 = here\n거기 = there\n저기 = over there\n\nSame 이/그/저 prefix in all three systems.\nEnglish: this and that (2 levels).\nKorean: 이, 그, and 저 (3 levels)."
        },text:"이 (this) / 그 (that) / 저 (that far)  -  one prefix, three uses:\n\n• Before nouns: 이 책 = this book\n• Standalone: 이것 = this thing\n• Places: 여기 = here\n\nLearn the prefix ONCE, get three systems for free."},
        {type:"mc",q:"Something is right next to YOU (not me). You call it:",opts:["이것","그것","저것","여기"],ans:"그것",hint:"Near the LISTENER = 그"},
        {type:"mc",q:"A mountain far from both of us. You say:",opts:["이것","그것","저것","그산"],ans:"저것",hint:"Far from BOTH = 저"},
        {type:"mc",q:"이것 = 이 + 것. 것 means:",opts:["Place","Person","Thing","Time"],ans:"Thing",hint:"것 = thing/stuff"},
        {type:"mc",q:"'That book (near you)' as a short form:",opts:["이 책","그 책","저 책","그것 책"],ans:"그 책",hint:"Drop 것, add the noun directly"},
        {type:"fb",opts:["이","그","저","여"],hint:"Far from both speakers = 저",s:"___ 건물은 뭐예요?\n(What is that building over there?)",a:"저"},
        {type:"fb",opts:["이","그","저","그게"],hint:"Near the SPEAKER = 이",s:"___ 것은 뭐예요?\n(What is this?)",a:"이"},
        {type:"match",pairs:[{trg:"이것",src:"this (near me)"},{trg:"그것",src:"that (near you)"},{trg:"저것",src:"that (far away)"},{trg:"그 책",src:"that book (near listener)"}]},
        {type:"teach",trg:"제",src:"my (polite)",pos:"noun",gender:null,phonetic:"je",note:"제 = 저 (I, polite) + 의 (possession).\nContracted from the polite I + possessive.",example:"A: 이것은 누구 가방이에요? B: 제 가방이에요.",exampleSrc:"A: Whose bag is this? B: It's my bag.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"drag_fill",hint:"My bag, teacher's bag (near them), the third one is far",s:"이것은 제 가방이에요. {1}은 선생님 가방이에요. {2}은 저기 있어요.",blanks:{"1":"그것","2":"저것"},pool:["이것","그것","저것","여기","거기"]},
        {type:"mc",q:"'이 사람' most likely refers to:",opts:["A person far away","A person near the speaker","A person near the listener","An imaginary person"],ans:"A person near the speaker",hint:"이 = ___ ME/the ___"},
        {type:"mc",q:"그것 is used when the object is:",opts:["Right in front of you","Near the listener","On a distant mountain","In a past conversation only"],ans:"Near the listener",hint:"그 = ___ YOU (the other person)"},
        {type:"mc",q:"Which prefix system do 이것/그것/저것 share with 여기/거기/저기?",opts:["은/는/도","이/그/저","있/없/모","을/를"],ans:"이/그/저",hint:"The same distance-based prefix runs through both"},
        {type:"teach",trg:"보다",src:"to see / to watch",pos:"verb",gender:null,phonetic:"bo-da",note:"보다: to see, to watch, to look.\n\nOne of the 5 most common Korean verbs.",example:"A: 이거 봐요! B: 뭐예요?",exampleSrc:"A: Look at this! B: What is it?",deepDive:{
          title:"보다",
          text:"보다 → 봐요 (polite present: ㅗ+ㅏ = ㅘ contraction).\n\n영화를 봐요: I watch a movie.\n텔레비전을 봐요: I watch TV.\n이거 봐요!: Look at this!\n\n보다 appears EVERYWHERE in Korean.\nYou'll use it every day."
        ,funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"teach",trg:"말하다",src:"to speak / to say",pos:"verb",gender:null,phonetic:"mal-ha-da",note:"말하다: to speak, to say.\n말 (speech/words) + 하다 (do).\n",example:"A: 한국어로 말해요? B: 네, 한국어로 말해요!",exampleSrc:"A: Do you speak in Korean? B: Yes, I speak in Korean!",deepDive:{
          title:"말하다 in Korean Culture",
          text:"말하다 → 말해요 (하다 verb: always 해요).\n\n한국어로 말해요: I speak in Korean.\n영어로 말해요: I speak in English.\n천천히 말해 주세요: Please speak slowly.\n\n-(으)로 말하다: speak IN [language]."
        ,funFact:"A 하다 verb — noun + 하다 (to do). This pattern creates hundreds of verbs from Sino-Korean nouns."}},
        {type:"mc",q:"보다 → polite present:",opts:["봐요","보아요","보요","봅니다"],ans:"봐요",hint:"보: ㅗ+ㅏ contracts to ㅘ. ...."},
        {type:"mc",q:"한국어로 말해요 means:",opts:["I speak Korean","I write Korean","I read Korean","I study Korean"],ans:"I speak Korean",hint:"말하다 = to speak. 한국어로 = in Korean."}
  ]},
  {id:"kou2l4",title:"여기 / 거기 / 저기",icon:"📍",xp:20,board:true,steps:[
        {type:"intro",title:"Here / There / Over There",desc:"여기 / 거기 / 저기\n→ here / there / over there\n\nPlaces use the same system.",goals:["Use 여기, 거기, 저기 for places","Call a waiter with 저기요!","Connect this system back to 이/그/저"]},
        {type:"teach",trg:"여기",src:"here (near me)",pos:"noun",gender:null,phonetic:"yeo-gi",note:"Here, near the speaker.\nSame logic as the near-me prefix.",example:"A: 어디에 있어요? B: 여기 있어요!",exampleSrc:"A: Where is it? B: It's right here!",deepDive:{title:"Using 여기",text:"여기요!: 'Here!' (used to direct someone here).\n여기 있어요: 'It's here.'",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"거기",src:"there (near you)",pos:"noun",gender:null,phonetic:"geo-gi",note:"There, near the listener.\nSame logic as the near-you prefix.",example:"A: 거기가 어디예요? B: 학교예요.",exampleSrc:"A: Where is that place? B: It's the school.",deepDive:{title:"Using 거기",text:"거기 있어요?: 'Is it there (by you)?'",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"저기",src:"over there (far from both)",pos:"noun",gender:null,phonetic:"jeo-gi",note:"Over there, far from both.\nSame logic as the far-from-both prefix.",example:"A: 저기 보세요! B: 뭐예요?",exampleSrc:"A: Look over there! B: What is it?",deepDive:{
          title:"저기 in Korean Culture",
          text:"저기요!: 'Excuse me!'  -  to get someone's attention.\nLiterally: 'Hey, over there!' Used for waiters, strangers.\nOne of Korea's most useful words."
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"mc",q:"거기 means:",opts:["here","there","over there","this way"],ans:"there",hint:"Same 그 prefix as 그것. Near the LISTENER."},
        {type:"teach",trg:"이쪽 / 그쪽 / 저쪽",src:"this way / that way / that way (far)",pos:"part",gender:null,phonetic:"i-jjok / geu-jjok / jeo-jjok",note:"쪽: direction/side.\n이쪽: this direction (toward me).\n그쪽: that direction (toward you).",example:"A: 어디로 가요? B: 이쪽으로 오세요.",exampleSrc:"A: Which way do I go? B: Come this way.",deepDive:{title:"이쪽 / 그쪽 / 저쪽",text:"저쪽: that direction (far).\n\n이쪽으로: this way → (으)로 = direction particle .",funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"tip",title:"📍 저기요: The Word That Gets You Fed",deepDive:{
          title:"When to Use 저기요",
          text:"저기요 works for:\n• Calling a waiter in a restaurant\n• Getting a stranger's attention\n• Flagging down a taxi\n• Alerting a shopkeeper\n\n저기요 is the safe default."
        },text:"The most useful single word for visiting Korea:\n\n저기요!\n→ Excuse me! (literally: hey, over there!)\n\n여기요!\n→ Hey, over here! (also used, less common)"},
        {type:"mc",q:"To call a waiter in a Korean restaurant:",opts:["여기!","거기요!","저기요!","안녕하세요!"],ans:"저기요!",hint:"___ = Excuse me! (to get attention from afar)"},
        {type:"mc",q:"You want your friend (standing near you) to come toward you. You say:",opts:["저기로 가세요","거기 있어요","이쪽으로 오세요","저기요"],ans:"이쪽으로 오세요",hint:"이쪽 = this direction (toward me)"},
        {type:"mc",q:"거기 maps to which 이/그/저 prefix?",opts:["이","그","저","여"],ans:"그",hint:"거기 = there, near YOU = 그 logic"},
        {type:"teach",trg:"화장실",src:"bathroom / restroom",pos:"noun",gender:null,phonetic:"hwa-jang-shil",note:"The first phrase every Korea visitor learns.\n실 = room (building block).",example:"A: 화장실이 어디 있어요? B: 저기에 있어요.",exampleSrc:"A: Where is the bathroom? B: It's over there.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"지하철역",src:"subway station",pos:"noun",gender:null,phonetic:"ji-ha-cheol-yeok",note:"지하 = underground. 철 = iron/rail.\n역 = station (building block).",example:"A: 지하철역이 어디에 있어요? B: 저기에 있어요.",exampleSrc:"A: Where is the subway station? B: It's over there.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"mc",q:"화장실이 어디 있어요? You look and say '저기요!' Wait  -  what does 저기요 mean here?",opts:["I found it over there","Excuse me (asking someone)","Here I am","That's the bathroom"],ans:"Excuse me (asking someone)",hint:"저기요 = '___ me!' to get attention"},
        {type:"fb",opts:["여기","거기","저기","이기"],hint:"Far from both people = 저",s:"지하철역이 ___에 있어요.\n(The subway station is over there)",a:"저기"},
        {type:"fb",opts:["여기","거기","저기","이기"],hint:"Standard way to call a waiter",s:"___요! 메뉴 주세요.\n(Calling the waiter)",a:"저기"},
        {type:"match",pairs:[{trg:"여기",src:"here (near me)"},{trg:"거기",src:"there (near you)"},{trg:"저기",src:"over there"},{trg:"저기요!",src:"Excuse me!"}]},
        {type:"match",pairs:[{trg:"이쪽",src:"this way (toward me)"},{trg:"그쪽",src:"that way (toward you)"},{trg:"저쪽",src:"that way (far)"},{trg:"쪽",src:"direction / side"}]},
        {type:"drag_fill",hint:"Call the waiter, then: the menu is right here",s:"A: {1}요! 메뉴 주세요. B: 네, {2} 있어요.",blanks:{"1":"저기","2":"여기"},pool:["여기","거기","저기","이기"]},
        {type:"mc",q:"What connects 이것/그것/저것 and 여기/거기/저기?",opts:["They use different roots","They share 이/그/저 prefix","They are all formal","They all mean here"],ans:"They share 이/그/저 prefix",hint:"Same distance ___: 이 (near me), 그 (near you), 저 (far)"},
        {type:"mc",q:"이쪽으로 오세요 means:",opts:["Go over there","Come this way","Look that direction","Stay there"],ans:"Come this way",hint:"이쪽 = this direction (toward speaker), 오세요 = please come"}
  ]},
  {id:"kou2l5",title:"Family Preview",icon:"👨‍👩‍👧‍👦",xp:20,board:true,steps:[
        {type:"intro",title:"Meet the Family (Preview)",desc:"Family vocabulary. Which word depends on YOUR gender.",goals:["Preview core family words","Grasp the speaker-gender rule","Prepare for the full family unit (U5)"]},
        {type:"teach",trg:"여자",src:"woman / female",pos:"noun",gender:null,phonetic:"yeo-ja",note:"여 = female (building block).\n여자 = woman.\n여동생 = younger sister.",example:"A: 여자예요? B: 네, 저는 여자예요.",exampleSrc:"A: Are you a woman? B: Yes, I am a woman.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"남자",src:"man / male",pos:"noun",gender:null,phonetic:"nam-ja",note:"남 = male (building block).\n남자 = man.\n남동생 = younger brother.",example:"A: 남자예요? B: 네, 저는 남자예요.",exampleSrc:"A: Are you a man? B: Yes, I am a man.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"엄마 / 어머니",src:"mom / mother",pos:"intj",gender:null,phonetic:"eom-ma / eo-meo-ni",note:"엄마: casual (mom).\n어머니: formal (mother).\n",example:"A: 엄마가 있어요? B: 네, 우리 엄마가 여기 있어요.",exampleSrc:"A: Is your mom here? B: Yes, my mom is here.",deepDive:{
          title:"Using 엄마 / 어머니",
          text:"Kids and adults alike use 엄마 with their own mother.\nUse 어머니 about other people's mothers.\nNote: 우리 엄마 = 'our mom' = Korean says 'our', not 'my'."
        ,funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"teach",trg:"아빠 / 아버지",src:"dad / father",pos:"part",gender:null,phonetic:"a-ppa / a-beo-ji",note:"아빠: casual (dad).\n아버지: formal (father).\n",example:"A: 아빠가 어디에 있어요? B: 집에 있어요.",exampleSrc:"A: Where is dad? B: He's at home.",deepDive:{title:"아빠 / 아버지",text:"The double ㅃ in 아빠 is a tense consonant.\nAudio tip: it sounds clipped and forceful.",funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"teach",trg:"형 / 오빠",src:"older brother (male/female speaker)",pos:"intj",gender:null,phonetic:"hyeong / o-ppa",note:"TWO words. ONE meaning. Different speakers:\n형: used by MALE speakers.\n오빠: used by FEMALE speakers.",example:"A: 오빠가 있어요? B: 네, 오빠가 있어요.",exampleSrc:"A: Do you have an older brother? B: Yes, I have an older brother.",deepDive:{title:"Using 형 / 오빠",text:"The SPEAKER's gender determines the word.\nNot the sibling's gender.",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"mc",q:"아빠 means:",opts:["dad","mom","older brother","younger sibling"],ans:"dad",hint:"The tense ㅃ gives this word a punchy sound. Casual form of 아버지."},
        {type:"teach",trg:"누나 / 언니",src:"older sister (male/female speaker)",pos:"intj",gender:null,phonetic:"nu-na / eon-ni",note:"Same speaker-gender rule as older brother words:\n누나: used by MALE speakers.\n언니: used by FEMALE speakers.",example:"A: 누나가 있어요? B: 네, 누나가 있어요.",exampleSrc:"A: Do you have an older sister? B: Yes, I have an older sister.",deepDive:{title:"Using 누나 / 언니",text:"Full grid:\nMale speaker: 형 (older bro), 누나 (older sis)\nFemale speaker: 오빠 (older bro), 언니 (older sis)",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"teach",trg:"동생",src:"younger sibling",pos:"noun",gender:null,phonetic:"dong-saeng",note:"동생: younger sibling.\n남동생: younger BROTHER.\n여동생: younger SISTER.\n남 = male, 여 = female.",example:"A: 동생이 있어요? B: 네, 남동생이 있어요.",exampleSrc:"A: Do you have a younger sibling? B: Yes, I have a younger brother.",deepDive:{title:"Using 동생",text:"Good news: no speaker-gender split for younger siblings.\nDifference only for OLDER siblings.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"tip",title:"🎯 Korean Siblings: It's About YOU, Not Them",deepDive:{
          title:"Speaker Gender Changes the Word",
          text:"Male speaker:\n형 = my older brother\n누나 = my older sister\n\nFemale speaker:\n오빠 = my older brother\n언니 = my older sister\n\nThese words also extend OUTSIDE family:\n오빠: how female fans call male idols!\n언니: how Korean women address older female friends.\n형: how Korean men address older male friends.\n\nThey're relationship words, not just family labels."
        },text:"In English: one word per sibling type.\n\nIn Korean: THE SPEAKER'S GENDER MATTERS.\n\nIf you are male: 형 (older bro), 누나 (older sis).\nIf you are female: 오빠 (older bro), 언니 (older sis)."},
        {type:"mc",q:"A female speaker says '오빠가 있어요.' She has:",opts:["A younger brother","An older brother","An older sister","A younger sister"],ans:"An older brother",hint:"오빠 = ___ ___, used by FEMALE speakers"},
        {type:"mc",q:"A male speaker wants to say 'I have an older sister':",opts:["오빠가 있어요","언니가 있어요","누나가 있어요","형이 있어요"],ans:"누나가 있어요",hint:"Male speaker + older sister = 누나"},
        {type:"mc",q:"남동생 = 남 + 동생. 남 means:",opts:["Female","Older","Male","Young"],ans:"Male",hint:"남 and 여 are a pair. Think about which gender 남 represents."},
        {type:"mc",q:"Which sibling term does NOT change based on speaker gender?",opts:["형/오빠","누나/언니","동생","All change"],ans:"동생",hint:"Younger sibling  regardless of speaker"},
        {type:"fb",opts:["가","이","는","를"],hint:"Vowel ending or consonant ending?",s:"저는 여자예요. 오빠___ 있어요.\n(I'm a woman. I have an older brother.)",a:"가"},
        {type:"fb",opts:["누나","언니","오빠","형"],hint:"Male speaker + older sister = ?",s:"저는 남자예요. ___ 이 있어요. (older sister)",a:"누나"},
        {type:"match",pairs:[{trg:"형",src:"older bro (male speaker)"},{trg:"오빠",src:"older bro (female speaker)"},{trg:"누나",src:"older sis (male speaker)"},{trg:"언니",src:"older sis (female speaker)"}]},
        {type:"drag_fill",hint:"Female speaker: older brother, then older sister",s:"저는 여자예요. {1}가 있어요. {2}가 있어요.",blanks:{"1":"오빠","2":"언니"},pool:["형","오빠","누나","언니","동생"]},
        {type:"mc",q:"Outside family, 오빠 is used by:",opts:["Male speakers to older males","Female speakers to older males","Anyone to anyone older","Only to blood relatives"],ans:"Female speakers to older males",hint:"Only women/girls use 오빠 for non-family ___ ___"},
        {type:"mc",q:"'I have a younger brother' in Korean:",opts:["남동생이 있어요","여동생이 있어요","형이 있어요","오빠가 있어요"],ans:"남동생이 있어요",hint:"남 (male) + 동생 (younger sibling)"}
  ]},
  {id:"kou2l6",title:"Sino-Korean Cluster",icon:"🏛️",xp:20,board:true,steps:[
        {type:"intro",title:"Unlock Words With Building Blocks",desc:"60% of Korean words come from Chinese-origin blocks. Learn one, unlock many.",goals:["Learn 학교, 도서관, 교실, 병원","Decompose each into reusable morphemes","Build your LEGO morpheme bank to 10+ pieces"]},
        {type:"teach",trg:"학교",src:"school",pos:"noun",gender:null,phonetic:"hak-gyo",note:"SINO-KOREAN: 학 (study) + 교 (teach).\n'Study-teach place': school.\n",example:"A: 어디에 가요? B: 학교에 가요.",exampleSrc:"A: Where are you going? B: I'm going to school.",deepDive:{title:"Using 학교",text:"학: same as 학생!\n교 reappears in: 교실 (classroom), 교육 (education), 교사 (teacher).",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},hanja:"學+校"},
        {type:"teach",trg:"도서관",src:"library",pos:"noun",gender:null,phonetic:"do-seo-gwan",note:"SINO-KOREAN: 도서 (books) + 관 (building).\n'Book-building' = library.\n",example:"A: 지금 어디에 있어요? B: 도서관에 있어요.",exampleSrc:"A: Where are you now? B: I'm at the library.",deepDive:{title:"Using 도서관",text:"관 reappears in: 영화관 (cinema), 미술관 (art museum), 박물관 (museum), 경찰관 (police officer)!",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},hanja:"圖書+館"},
        {type:"teach",trg:"교실",src:"classroom",pos:"noun",gender:null,phonetic:"gyo-sil",note:"SINO-KOREAN: 교 (teach) + 실 (room).\n'Teach-room' = classroom.\n",example:"A: 교실이 어디예요? B: 저기에 있어요.",exampleSrc:"A: Where is the classroom? B: It's over there.",deepDive:{title:"Using 교실",text:"실 reappears in: 사무실 (office), 회의실 (meeting room), 화장실 (bathroom).",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},hanja:"校+室"},
        {type:"mc",q:"도서관 means:",opts:["school","classroom","library","hospital"],ans:"library",hint:"도서 (books) + 관 (building). Where do you find books?"},
        {type:"teach",trg:"병원",src:"hospital / clinic",pos:"noun",gender:null,phonetic:"byeong-won",note:"SINO-KOREAN: 병 (illness) + 원 (place/institution).\n'Illness-place' = hospital.\n",example:"A: 어디에 가요? B: 병원에 가요.",exampleSrc:"A: Where are you going? B: I'm going to the hospital.",deepDive:{
          title:"Using 병원",
          text:"원: same as 회사원! But here 원 means 'institution/place'.\n원 appears as BOTH 'member' and 'place'  -  context tells you which."
        ,funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},hanja:"病+院"},
        {type:"teach",trg:"약국",src:"pharmacy",pos:"noun",gender:null,phonetic:"yak-guk",note:"SINO-KOREAN: 약 (medicine) + 국 (bureau/bureau).\n'Medicine-place' = pharmacy.\n",example:"A: 약국이 어디 있어요? B: 저기에 있어요.",exampleSrc:"A: Where is the pharmacy? B: It's over there.",deepDive:{title:"Using 약국",text:"약: medicine. Reappears in 약사 (pharmacist = medicine + expert!).",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},hanja:"藥+局"},
        {type:"tip",title:"🏗️ Your Morpheme Bank So Far",deepDive:{
          title:"Your Full LEGO Set So Far",
          text:"국 (國) = country: 한국 = Korea, 미국 = America\n인 (人) = person: 한국인 = Korean person\n\n원 (member/place): 회사원, 병원, 학원...\n의 (medicine): 의사, 의학...\n사 (expert): 의사, 요리사, 간호사...\n약 (medicine): 약국, 약사...\n병 (illness): 병원, 병...\n\n10 morphemes → already 20+ words decoded.\nBy Later: ~80 morphemes → 500+ words."
        },text:"Sino-Korean morphemes you know so far:\n\n학 (學) = study: 학생 = student, 학교 = school\n생 (生) = life/person: 학생 = study-person, 선생 = teacher\n사 (師/士) = expert: 의사 = doctor, 교사 = teacher"},
        {type:"mc",q:"학교 = 학 + 교. 교 means:",opts:["Study","School","Teach","Place"],ans:"Teach",hint:"Study + Teach = school"},
        {type:"mc",q:"도서관 = 도서 + 관. 관 means:",opts:["Book","Room","Building","Library"],ans:"Building",hint:"관 = building/hall (영화관, 미술관)"},
        {type:"mc",q:"교실 and 화장실 both share 실. 실 means:",opts:["School","Teach","Room","Place"],ans:"Room",hint:"교실 = teach-room, 화장실 = wash-room"},
        {type:"mc",q:"병원 = 병 + 원. 병 means:",opts:["Doctor","Place","Illness","Medicine"],ans:"Illness",hint:"Illness-place = hospital"},
        {type:"fb",opts:["약국","병원","학교","도서관"],hint:"약 (medicine) + 국 (bureau) = pharmacy",s:"___에 가요. 약을 사요.\n(Going to get medicine)",a:"약국"},
        {type:"fb",opts:["실","관","원","학"],hint:"교 (teach) + ___ (room)",s:"교___이 어디에 있어요?\n(Where is the classroom?)",a:"실"},
        {type:"match",pairs:[{trg:"학교",src:"school"},{trg:"도서관",src:"library"},{trg:"교실",src:"classroom"},{trg:"병원",src:"hospital"}]},
        {type:"match",pairs:[{trg:"약국",src:"pharmacy"},{trg:"학 (morpheme)",src:"study"},{trg:"관 (morpheme)",src:"building"},{trg:"실 (morpheme)",src:"room"}]},
        {type:"drag_fill",hint:"Study at school, books are at the library",s:"저는 {1}에서 공부해요. 책이 {2}에 있어요.",blanks:{"1":"학교","2":"도서관"},pool:["학교","도서관","병원","약국"]},
        {type:"mc",q:"Which word contains 원 meaning 'PLACE' (not 'member')?",opts:["회사원","병원","선생님","경찰관"],ans:"병원",hint:"... = illness-place; 회사원 = company-member"}
  ]},
  {id:"kou2l7",title:"도 (also / too)",icon:"➕",xp:20,board:true,steps:[
        {type:"intro",title:"Also / Too",desc:"도\n→ also / too\n\nReplaces other markers, never stacks.",goals:["Use 도 (also/too)","Understand that 도 replaces other particles","Use 저도요 as an instant reply"]},
        {type:"teach",trg:"도",src:"also / too",pos:"noun",gender:null,phonetic:"do",note:"도: also / too.\n\n도 REPLACES 은/는 or 이/가.\n저는 → 저도 (I → I too). 커피가 → 커피도 (coffee → coffee too).",example:"A: 저는 학생이에요. B: 저도 학생이에요!",exampleSrc:"A: I am a student. B: I am also a student!",deepDive:{
          title:"Using 도",
          text:"저는 학생이에요 → 저도 학생이에요 (I'm a student → I'm also a student).\n커피가 있어요 → 커피도 있어요 (There's coffee → There's also coffee).\n\n도 NEVER stacks:\n저는도 ✗ / 커피가도 ✗\nJust: 저도 ✓ / 커피도 ✓"
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"저도요",src:"me too",pos:"noun",gender:null,phonetic:"jeo-do-yo",note:"저도요: 'Me too!' Quick, natural reply.\n\n저도요 = 저 (I) + 도 (also) + 요 (polite).",example:"A: 저는 학생이에요. B: 저도요!",exampleSrc:"A: I'm a student. B: Me too!",deepDive:{title:"저도요 in Korean Culture",text:"One of the most common expressions in Korean conversation.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"도 with 있어요",src:"also have / also there is",pos:"intj",gender:null,phonetic:"do",note:"도 replaces 이/가 on the subject too:\n커피가 있어요 → 커피도 있어요 (also have coffee)\n시간이 없어요 → 시간도 없어요 (also no time)",example:"A: 물이 있어요? B: 네, 물이 있어요. 커피도 있어요.",exampleSrc:"A: Is there water? B: Yes, there is water. There is also coffee.",deepDive:{title:"Using 도 with 있어요",text:"Negative 도: '도 없어요' = 'also don't have'",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"mc",q:"저도요 means:",opts:["also","also have","likewise","me too"],ans:"me too",hint:"저 (I) + 도 (also) + 요 (polite). Quick agreement reply."},
        {type:"teach",trg:"도 with negatives",src:"neither / don't have either",pos:"part",gender:null,phonetic:"do",note:"도 + negative = 'neither' / 'don't ... either':\n저도 몰라요: I don't know either.\n저도 없어요: I don't have it either.",example:"A: 이것은 뭐예요? B: 저도 몰라요.",exampleSrc:"A: What is this? B: I don't know either.",deepDive:{title:"도 with negatives",text:"저도 학생이 아니에요: I'm not a student either.\n\nSame particle, different meaning with negatives.",funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"tip",title:"⚡ 도 Replaces  -  Never Stacks",deepDive:{
          title:"도 Replaces  -  Never Stacks",
          text:"차도 있어요 = There is also tea (도 replaces 가)\n\nNever: 저는도 ✗ or 커피가도 ✗\n\n✓ 커피도 있어요.\n→ There is coffee too.\n\n✓ 선생님도 있어요.\n→ The teacher is also here.\n\n도 = swap, not addition."
        },text:"도 (also/too) REPLACES other particles  -  it does not stack:\n\n저는 학생이에요 = I am a student\n저도 학생이에요 = I am also a student (도 replaces 는)\n\n커피가 있어요 = There is coffee"},
        {type:"mc",q:"'I am ALSO a student':",opts:["저는 학생이에요","저도 학생이에요","저가 학생이에요","저도는 학생이에요"],ans:"저도 학생이에요",hint:"도 replaces 는 entirely"},
        {type:"mc",q:"Your friend says 저는 커피가 좋아요. You agree. Your reply:",opts:["아니요","저도요!","감사합니다","맞아요 저는"],ans:"저도요!",hint:"Quick 'me too' reply"},
        {type:"mc",q:"'There is also tea' (차 = tea):",opts:["차도 있어요","차가도 있어요","차는도 있어요","차이도 있어요"],ans:"차도 있어요",hint:"도 replaces 가  -  never stacks with it"},
        {type:"mc",q:"저도 몰라요 means:",opts:["I know too","I don't know either","I also want to know","Me too!"],ans:"I don't know either",hint:"도 + negative = neither / don't either"},
        {type:"fb",opts:["도","는","가","이"],hint:"Also-exists = 도 replaces the particle",s:"커피___ 있어요. 차도 있어요.\n(There is ALSO coffee)",a:"도"},
        {type:"fb",opts:["도","는","가","이"],hint:"Me too = 저도",s:"A: 저는 학생이에요. B: 저___ 학생이에요!\n(Me too = 저도)",a:"도"},
        {type:"fb",opts:["도","은","이","가"],hint:"도 replaces 은 to add 'also/either'",s:"선생님___ 없어요.\n(The teacher isn't here either)",a:"도"},
        {type:"match",pairs:[{trg:"도",src:"also / too (replaces particles)"},{trg:"저도요",src:"me too!"},{trg:"도 없어요",src:"don't have either"},{trg:"도 몰라요",src:"don't know either"}]},
        {type:"drag_fill",hint:"Friend is ALSO a student. Teacher is ALSO here.",s:"저는 학생이에요. 제 친구{1} 학생이에요. 우리 선생님{2} 여기 있어요.",blanks:{"1":"도","2":"도"},pool:["도","는","이","가"]},
        {type:"mc",q:"Which 도 sentence is WRONG?",opts:["저도 학생이에요","커피도 있어요","선생님도 있어요","시간이도 없어요"],ans:"시간이도 없어요",hint:"도 never stacks with 이/가"}
  ]},
  {id:"kou2l8",title:"[place]에 있어요",icon:"📍",xp:20,board:true,steps:[
        {type:"intro",title:"Where Things Are",desc:"에\n→ at / to\n\nMarks WHERE something is.",goals:["Use [place]에 있어요 to say where things are","Ask 어디에 있어요? (where is?)","Get comfortable with 에 as a location particle"]},
        {type:"teach",trg:"에",src:"at / in (location)",pos:"noun",gender:null,phonetic:"e",note:"에 = marks WHERE something IS (static location).\n\n학교에 있어요.\n→ I'm at school.",example:"A: 어디에 있어요? B: 학교에 있어요.",exampleSrc:"A: Where are you? B: I'm at school.",deepDive:{
          title:"More Locations",
          text:"카페에 있어요.\n→ I'm at the café.\n\n집에 있어요.\n→ I'm at home.\n\nPattern: [place]에 있어요 = is/am at [place].\nFull 에 system (including 에서) comes in a later lesson."
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"어디",src:"where",pos:"noun",gender:null,phonetic:"eo-di",note:"어디: where.\n어디에 있어요?: 'Where is it?'\n",example:"A: 화장실이 어디에 있어요? B: 저기 왼쪽에 있어요.",exampleSrc:"A: Where is the bathroom? B: Over there on the left.",deepDive:{title:"어디 in Korean Culture",text:"어디에 있어요 = survival Korean.\nThe most important question you'll ask in Korea.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"집",src:"home / house",pos:"noun",gender:null,phonetic:"jip",note:"집: home/house.\n집에 있어요: 'I'm at home' / 'It's at home'.\n",example:"A: 지금 어디에 있어요? B: 집에 있어요.",exampleSrc:"A: Where are you now? B: I'm at home.",deepDive:{title:"집 in Korean Culture",text:"Native Korean word (not Sino-Korean).\n집에 가요: 'going home' (에 as destination  -  preview of U6!)",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"mc",q:"학교가 어디에 있어요? This question asks:",opts:["What is a school?","Where is the school?","Is there a school?","Who is at school?"],ans:"Where is the school?",hint:"어디 = ___."},
        {type:"teach",trg:"카페",src:"café",pos:"noun",gender:null,phonetic:"ka-pe",note:"From English café.\n카페에 있어요: 'I'm at the café.'\n",example:"A: 카페에 있어요? B: 네, 카페에 있어요!",exampleSrc:"A: Are you at the cafe? B: Yes, I'm at the cafe!",deepDive:{title:"Cultural Note",text:"Korea has more cafés per capita than any country.\n카페 culture is massive here.",funFact:"A Konglish loanword adapted from English. Korean has borrowed many modern and tech words."}},
        {type:"teach",trg:"지금",src:"now / right now",pos:"intj",gender:null,phonetic:"ji-geum",note:"지금: now.\n지금 어디에 있어요?: 'Where are you right now?'\n",example:"A: 지금 어디에 있어요? B: 카페에 있어요.",exampleSrc:"A: Where are you right now? B: I'm at the cafe.",deepDive:{title:"Using 지금",text:"SINO-KOREAN: 지 (this) + 금 (now).\nVery common time word.",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"mc",q:"화장실이 어디에 있어요? means:",opts:["What is the bathroom?","Where is the bathroom?","Is there a bathroom?","The bathroom is big."],ans:"Where is the bathroom?",hint:"어디 = where, ___ = is/there is"},
        {type:"mc",q:"'I'm at the library':",opts:["도서관에 없어요","도서관이 있어요","도서관에 있어요","도서관은 이에요"],ans:"도서관에 있어요",hint:"Place + 에 + ___ = am at [place]"},
        {type:"mc",q:"지금 어디에 있어요? Someone is asking:",opts:["How are you now?","Where are you right now?","What time is it?","Are you here now?"],ans:"Where are you right now?",hint:"지금 = ___, 어디에 있어요 = ___ is"},
        {type:"mc",q:"집에 있어요. 집 means:",opts:["School","Café","Home","Library"],ans:"Home",hint:"집 = home/house"},
        {type:"fb",opts:["에","이","가","는"],hint:"Location particle: at the café",s:"지금 카페___있어요.\n(Location particle: at the café)",a:"에"},
        {type:"fb",opts:["어디","무엇","누구","언제"],hint:"'Where' in Korean",s:"선생님이 ___에 있어요?\n(Where is the teacher?)",a:"어디"},
        {type:"fb",opts:["에","은","이","가"],hint:"At home = 집 + location particle + 있어요",s:"저는 지금 집___있어요.\n(I'm at home now.)",a:"에"},
        {type:"match",pairs:[{trg:"에",src:"at/in (location)"},{trg:"어디",src:"where"},{trg:"집",src:"home/house"},{trg:"지금",src:"now"}]},
        {type:"drag_fill",hint:"Are you at school? No, I'm at the café.",s:"A: 지금 {1}에 있어요? B: 아니요, {2}에 있어요.",blanks:{"1":"학교","2":"카페"},pool:["학교","카페","집","병원","어디"]},
        {type:"mc",q:"학교에 있어요: the 에 marks:",opts:["Action location","Static location","Object","Topic"],ans:"Static location",hint:"에 marks where something IS, not where action happens"},
        {type:"mc",q:"카페 comes from:",opts:["Pure Korean","Chinese characters","English loanword","Japanese"],ans:"English loanword",hint:"French/___ cafe adapted into Korean"}
  ]},
  {id:"kou2l9",title:"알아요 / 몰라요",icon:"💡",xp:20,board:true,steps:[
        {type:"intro",title:"I Know / I Don't Know",desc:"알다 / 모르다\n→ know / don't know\n\nTwo essential verbs.",goals:["Say 알아요 (I know)","Say 몰라요 (I don't know)","Understand the preview flag"]},
        {type:"teach",trg:"알아요",src:"I know / I understand",pos:"noun",gender:null,phonetic:"a-ra-yo",note:"알다: to know.\n알아요: polite present form.\n",example:"A: 이것은 뭐예요? B: 알아요! 커피예요.",exampleSrc:"A: What is this? B: I know! It's coffee.",deepDive:{title:"Using 알아요",text:"알아요: 'I know (this information).'\n이해해요: 'I understand (a concept)'  -  but 알아요 covers both in daily use.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"몰라요",src:"I don't know",pos:"part",gender:null,phonetic:"mol-la-yo",note:"모르다 → 몰라요 (르-irregular).\n르 doubles to ㄹㄹ before endings.\nFull pattern in a later lesson.",example:"A: 이것은 뭐예요? B: 몰라요.",exampleSrc:"A: What is this? B: I don't know.",deepDive:{
          title:"르-Irregular Preview",
          text:"모르다 → 몰라요 (NOT 모르어요).\n\nThe 르 transforms before -아/어:\n모르 → 몰라 (르 doubles).\n\nSame pattern: 부르다 → 불러요 (call), 빠르다 → 빨라요 (fast).\nFull 르-pattern in a later lesson."
        ,funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"teach",trg:"맞아요",src:"That's right / Correct",pos:"noun",gender:null,phonetic:"ma-ja-yo",note:"맞다: to be correct/right.\n맞아요: polite form. 'That's correct.'\n",example:"A: 학생이에요? B: 네, 맞아요!",exampleSrc:"A: Are you a student? B: Yes, that's right!",deepDive:{title:"Using 맞아요",text:"맞아요 is used to confirm someone is right.\n틀려요: 'That's wrong.' (opposite)\n\nVery common in conversation.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"mc",q:"몰라요 means:",opts:["I know","That's right","I'm not sure","I don't know"],ans:"I don't know",hint:"모르다 is the opposite of 알다 (to know). What is the negative?"},
        {type:"teach",trg:"정말요?",src:"Really?",pos:"noun",gender:null,phonetic:"jeong-mal-yo",note:"정말: really / truly.\n정말요?: 'Really?' (surprised/interested reaction)\n",example:"A: 저는 의사예요. B: 정말요?",exampleSrc:"A: I'm a doctor. B: Really?",deepDive:{title:"Using 정말요?",text:"정말요 = 정말 (really) + 요 (polite).\n\n진짜요?: same meaning, more casual.\n(진짜 = real/true, more emphatic than 정말)",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"tip",title:"⚡ When Verbs Change Shape",deepDive:{
          title:"Why Some Verbs Are Irregular",
          text:"모르다 follows the 르-irregular pattern. The full explanation comes in a later lesson.\n\nWhen you see ⚡ before a form:\n→ Just memorize the form for now\n→ The pattern will be explained later\n→ It's not an error, it's a known rule\n\nFor now: 몰라요. Done."
        },text:"You'll occasionally meet verbs that change shape when conjugated.\n\n모르다 → 몰라요 (expected: 모르어요 ✗)\n\nThis is called an IRREGULAR verb.\nDon't try to figure out the pattern yet."},
        {type:"mc",q:"'I don't know':",opts:["알아요","몰라요","없어요","아니에요"],ans:"몰라요",hint:"모르다 is a 르-irregular. The 르 doubles before vowel endings."},
        {type:"mc",q:"모르다 becomes 몰라요 because:",opts:["It is regular","르 doubles to ㄹㄹ","ㄹ drops","ㅗ changes to ㅏ"],ans:"르 doubles to ㄹㄹ",hint:"르-irregular: 모르 becomes 몰라 before -아/어"},
        {type:"mc",q:"맞아요 is used to:",opts:["Express disagreement politely","Confirm something is correct","Say goodbye formally to someone","Ask a question very indirectly"],ans:"Confirm something is correct",hint:"맞다 = to be ___/right"},
        {type:"mc",q:"정말요? is a reaction expressing:",opts:["Strong agreement","Strong disagreement","Surprise or interest","Formal politeness"],ans:"Surprise or interest",hint:"정말 = really  -  used when ___d or wanting to confirm"},
        {type:"fb",opts:["맞아","알아","몰라","정말"],hint:"Confirming something is correct",s:"A: 선생님이 학교에 있어요. B: 네, ___요.\n(That's right)",a:"맞아"},
        {type:"fb",opts:["몰라요","모르어요","모르요","모라요"],hint:"모르다 is 르-irregular. The 르 doubles to ㄹㄹ before -아/어.",s:"저는 ___.\n(I don't know  -  irregular form!)",a:"몰라요"},
        {type:"match",pairs:[{trg:"알아요",src:"I know"},{trg:"몰라요",src:"I don't know"},{trg:"맞아요",src:"That's right"},{trg:"정말요?",src:"Really?"}]},
        {type:"drag_fill",hint:"A asks where the teacher is. B has no idea. Neither does C.",s:"A: 선생님이 어디에 있어요? B: {1}. 저도 {2}.",blanks:{"1":"몰라요","2":"몰라요"},pool:["알아요","몰라요","맞아요","정말요"]},
        {type:"mc",q:"진짜요? compared to 정말요? is:",opts:["More formal","Less common","More casual/emphatic","Completely different meaning"],ans:"More casual/emphatic",hint:"진짜 = real/true, often used with stronger feeling"},
        {type:"mc",q:"알아요 covers which English meanings?",opts:["Only I know (knowledge)","Both I know and I understand","Only I understand (feeling)","I want to know something"],ans:"Both I know and I understand",hint:"알아요 is used for ___ in daily conversation"}
  ]},
  {id:"kou2l9b",title:"누구? 왜? 어떻게?",icon:"❓",xp:20,board:true,steps:[
        {type:"intro",title:"Korean Question Words",desc:"누구 = ___\n왜 = why\n어떻게 = how\n뭐 = what\n\nYou already know 어디 (where).\nNow: the full question set.",goals:["Use 누구 (who) in sentences","Ask 왜 (why)","Ask 어떻게 (how)","Formalize 뭐 (what) as a question word"]},
        {type:"tip",title:"Korean Question Words",deepDive:{
          title:"Question Word Positions",
          text:"Korean question words sit WHERE the answer would go:\n\n학교에 있어요 → 어디에 있어요?\n(school) → (where?)\n\n선생님이 있어요 → 누가 있어요?\n(teacher) → (who?)\n\nThis is the opposite of English, which moves the question word to the front."
        },text:"Korean questions keep the SAME word order as statements.\nJust swap the unknown part for a question word:\n\n선생님이 있어요. → 누가 있어요?\nThe teacher is here. → Who is here?\n\nNo word-order flip needed. Korean questions are simple."},
        {type:"teach",trg:"누구",src:"who",pos:"noun",gender:null,phonetic:"nu-gu",note:"누구: who.\n누구예요?: 'Who is it?'\n\nAs subject: 누가 (누구 + 이/가 → 누가).\n누가 있어요?: 'Who is here?'",example:"A: 이 사람은 누구예요? B: 제 친구예요.",exampleSrc:"A: Who is this person? B: It's my friend.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"뭐",src:"what",pos:"noun",gender:null,phonetic:"mwo",note:"뭐: what (casual/spoken).\n뭐예요?: 'What is it?'\n\nFormal form: 무엇 (mu-eot).\nDaily speech: always 뭐.",example:"A: 뭐 먹어요? B: 밥 먹어요.",exampleSrc:"A: What are you eating? B: I'm eating rice.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"왜",src:"why",pos:"noun",gender:null,phonetic:"wae",note:"왜: why.\n왜요?: 'Why?' (polite, standalone).\n\n왜 sits at the START of the clause.",example:"A: 왜 한국어를 배워요? B: 한국 음악이 좋아요.",exampleSrc:"A: Why do you learn Korean? B: I like Korean music.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"어떻게",src:"how",pos:"noun",gender:null,phonetic:"eo-tteo-ke",note:"어떻게: how.\n어떻게 해요?: 'How do you do it?'\n\nSame root as 어떤 (what kind of), next card.",example:"A: 어떻게 가요? B: 버스로 가요.",exampleSrc:"A: How do you get there? B: By bus.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"어떤",src:"what kind of / which",pos:"noun",gender:null,phonetic:"eo-tteon",note:"어떤: what kind of / which.\nSame root as 어떻게 (how).\n\n어떤 음악? = what kind of music?\n어떤 사람? = what kind of person?",example:"A: 어떤 음악 좋아해요? B: 한국 음악이요.",exampleSrc:"A: What kind of music do you like? B: Korean music.",deepDive:{
          title:"어떤 vs 무슨",
          text:"Both translate as 'what kind of' but differ:\n\n무슨 요일이에요? = What day is it? (fixed set)\n어떤 음악 좋아해요? = What kind of music? (open choice)\n\n무슨: selecting from a known/limited set.\n어떤: asking about characteristics or preferences.\n\n무슨 색? = What color? (from a set)\n어떤 색? = What kind of color? (describe it)"
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"언제",src:"when",pos:"noun",gender:null,phonetic:"eon-je",note:"언제: when.\n언제요?: 'When?' (polite, standalone).\n\nFull question word set:\n어디, 누구, 뭐, 왜, 어떻게, 어떤, 언제.",example:"A: 언제 와요? B: 내일 와요.",exampleSrc:"A: When are you coming? B: Tomorrow.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"mc",q:"이 사람은 누구예요? This question asks:",opts:["Where is this person?","Who is this person?","What is this person doing?","When is this person coming?"],ans:"Who is this person?",hint:"누구 = ___"},
        {type:"mc",q:"왜 한국어를 배워요? means:",opts:["How do you learn Korean?","What do you learn?","Why do you learn Korean?","When do you learn Korean?"],ans:"Why do you learn Korean?",hint:"왜 = why"},
        {type:"mc",q:"어떻게 가요? means:",opts:["Where do you go?","Why do you go?","When do you go?","How do you get there?"],ans:"How do you get there?",hint:"어떻게 = how"},
        {type:"mc",q:"'Who is here?' uses which form?",opts:["누구 있어요?","누가 있어요?","누구를 있어요?","누구는 있어요?"],ans:"누가 있어요?",hint:"누구 as subject becomes 누가 (누구 + 이/가)"},
        {type:"fb",opts:["누","왜","뭐","어디"],hint:"'Who' as subject: 누구 → 누가",s:"___가 학교에 있어요?\n(Who is at school?)",a:"누"},
        {type:"fb",opts:["왜","뭐","누구","어떻게"],hint:"Asking for a reason",s:"___ 집에 있어요?\n(Why are you at home?)",a:"왜"},
        {type:"fb",opts:["뭐","왜","누구","언제"],hint:"Asking what someone is eating",s:"___ 먹어요?\n(What are you eating?)",a:"뭐"},
        {type:"fb",opts:["어떻게","어디","왜","뭐"],hint:"Asking about the method",s:"한국어를 ___ 배워요?\n(How do you study Korean?)",a:"어떻게"},
        {type:"mc",q:"어떤 음악 좋아해요? means:",opts:["How is the music?","What kind of music do you like?","Where is the music?","When do you listen to music?"],ans:"What kind of music do you like?",hint:"어떤 = what kind of. Asking about preferences."},
        {type:"fb",opts:["어떤","어떻게","무슨","뭐"],hint:"Asking about kind/type preference. Same root as 어떻게.",s:"___ 영화 좋아해요?\n(What kind of movie do you like?)",a:"어떤"},
        {type:"match",pairs:[{trg:"누구",src:"who"},{trg:"왜",src:"why"},{trg:"어떻게",src:"how"},{trg:"어떤",src:"what kind of"}]},
        {type:"match",pairs:[{trg:"뭐",src:"what"},{trg:"어디",src:"where"},{trg:"언제",src:"when"},{trg:"누구예요?",src:"Who is it?"}]},
        {type:"mc",q:"Korean questions compared to English:",opts:["Move the question word to the front","Flip subject and verb","Keep the same word order","Always add 요 at the start"],ans:"Keep the same word order",hint:"Korean swaps the unknown ___ for a question ___, in place"},
        {type:"mc",q:"뭐 vs 무엇:",opts:["뭐 is formal, 무엇 is casual","They are unrelated words","뭐 is casual/spoken, 무엇 is formal","뭐 is old Korean, 무엇 is modern"],ans:"뭐 is casual/spoken, 무엇 is formal",hint:"Daily speech uses 뭐"},
        {type:"drag_fill",hint:"A: Who is this person? B: It's my teacher.",s:"A: {1} 사람은 {2}예요? B: 제 선생님이에요.",blanks:{"1":"이","2":"누구"},pool:["이","그","누구","뭐","왜"]},
        {type:"drag_fill",hint:"A asks WHY (reason), then HOW (method).",s:"A: {1} 한국어를 배워요? B: 한국 음악이 좋아요. A: {2} 배워요? B: 학교에서 배워요.",blanks:{"1":"왜","2":"어떻게"},pool:["왜","어떻게","뭐","어디","누구"]}
  ]},
  {id:"kou2l10",title:"Review & Quiz",icon:"📝",xp:30,board:true,steps:[
        {type:"intro",title:"Review & Quiz",desc:"Review: jobs, existence, demonstratives, family, place, morphemes.",goals:["Verify all U2 concepts","Test morpheme decomposition","Confirm particle instincts"]},
        {type:"teach",trg:"Review Summary",src:"What you now know",pos:"part",gender:null,phonetic:"",note:"You now know 8 jobs, 5 locations, 5 family terms.\nYou have seen subject markers. The formal name comes later.",example:"A: 학생이에요? B: 네, 저는 학생이에요. 학교에 있어요. 친구도 있어요.",exampleSrc:"A: Are you a student? B: Yes, I am a student. I'm at school. I also have a friend.",deepDive:{
          title:"Particles, Existence, and Morphemes Banked",
          text:"에 location particle\n도 'also' particle\n있다/없다 existence/possession\nDECOMPOSITION: 10 Sino-Korean morphemes banked."
        ,funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"mc",q:"학생 = 학 + 생. 학 means:",opts:["Person","Study","School","Teacher"],ans:"Study",hint:"Study-person = student"},
        {type:"mc",q:"선생님 = 선생 + 님. 님 means:",opts:["Teacher (person)","Student (person)","Honorific suffix","Friend (person)"],ans:"Honorific suffix",hint:"님 elevates any title"},
        {type:"mc",q:"Which correctly uses 도?",opts:["저는도 학생이에요","저도 학생이에요","저가도 학생이에요","저이도 학생이에요"],ans:"저도 학생이에요",hint:"도 REPLACES 는, never stacks"},
        {type:"mc",q:"Something far from both speaker and listener is called:",opts:["이것","그것","저것","여기"],ans:"저것",hint:"Far from BOTH = 저"},
        {type:"mc",q:"'Where is the pharmacy?'",opts:["약국이 뭐예요?","약국이 어디에 있어요?","약국에 있어요.","약국이 있어요?"],ans:"약국이 어디에 있어요?",hint:"어디 = where, ___ = is"},
        {type:"mc",q:"관 appears in 도서관 AND 경찰관. It means:",opts:["Study / learning","Building / official hall","Room / chamber","Member / person"],ans:"Building / official hall",hint:"관 = building/official hall in both words"},
        {type:"mc",q:"A female speaker saying 오빠가 있어요 has:",opts:["A younger brother","An older sister","An older brother","A male friend"],ans:"An older brother",hint:"오빠 = ___ ___, used by female speakers"},
        {type:"fb",opts:["에","는","이","가"],hint:"Location: at the café",s:"지금 카페___있어요.\n(Location: at the café)",a:"에"},
        {type:"fb",opts:["몰라요","모르어요","알아요","없어요"],hint:"모르다 is 르-irregular. The 르 doubles to ㄹㄹ before -아/어.",s:"저는 ___.\n(I don't know)",a:"몰라요"},
        {type:"fb",opts:["도","는","이","가"],hint:"Also-there = 도 replaces the particle",s:"커피도 있어요. 차___ 있어요.\n(Tea is ALSO there)",a:"도"},
        {type:"match",pairs:[{trg:"있어요",src:"there is / I have"},{trg:"없어요",src:"there isn't / don't have"},{trg:"알아요",src:"I know"},{trg:"몰라요",src:"I don't know"}]},
        {type:"match",pairs:[{trg:"학교",src:"school (study+teach)"},{trg:"도서관",src:"library (book+building)"},{trg:"병원",src:"hospital (illness+place)"},{trg:"교실",src:"classroom (teach+room)"}]},
        {type:"drag_fill",hint:"I'm at school. A friend is also here.",s:"저는 {1}에 있어요. {2}도 있어요.",blanks:{"1":"학교","2":"친구"},pool:["학교","카페","집","친구","선생님"]},
        {type:"mc",q:"실 appears in 교실 and 화장실. It means:",opts:["Teach","Place","Room","Study"],ans:"Room",hint:"교실 = teach-room; 화장실 = bathroom = wash-room"}
  ]}
]};
