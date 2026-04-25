// Korean V2 Unit 2, 저는 학생이에요
// Level: A1.1

const UNIT_2 =
{n:2,lang:"ko",srcLang:"en",track:"v2",title:"저는 학생이에요",sub:"Identity, Existence, Particles & Demonstratives",icon:"🧑",level:"A1.1",color:"#5B8CFF",lessons:[

// ═══ L1: 직업 (Jobs) ═══
{id:"kou2l1",title:"직업 (Jobs)",icon:"💼",xp:20,board:true,steps:[
  {type:"intro",title:"What Do You Do?",desc:"Every job word is a Sino-Korean compound. Same blocks, new words.",goals:["Learn 8 job words","Decompose each into Sino-Korean parts","See 학, 생, 원, 사 reused across words"]},
  {type:"teach",kind:"word",nl:"학생",hanja:"學+生",en:"student",pos:"noun",gender:null,funFact:"From hanja: 學 (learn) + 生 (life). Literally \"learning person.\"",phonetic:"hak-saeng",example:"A: 학생이에요? B: 네, 저는 학생이에요.",exampleEn:"A: Are you a student? B: Yes, I am a student.",note:"SINO-KOREAN: 학 (study) + 생 (life, person).\n'Study-person' = student.\n학 reappears in: 학교, 학원, 대학교...",deepDive:{title:"Using 학생",text:"생 (life/student) reappears throughout Korean: 선생님 (teacher), 생일 (birthday), 생활 (life), 생각 (thought), 생업 (industry)."}},
  {type:"teach",kind:"grammar",nl:"선생님",hanja:"先生+님",en:"teacher",pos:"part",gender:null,funFact:"From hanja: 先 (first) + 生 (born). Someone born before you, hence \"teacher.\"",phonetic:"seon-saeng-nim",example:"A: 선생님이에요? B: 네, 저는 선생님이에요.",exampleEn:"A: Are you a teacher? B: Yes, I am a teacher.",note:"COMPOUND: 선생 (teacher) + 님 (honorific).\n님 shows RESPECT. You add it to titles.\n선생 alone is informal. 님 elevates it.",deepDive:{title:"선생님",text:"님 (honorific suffix) reappears: 사장님 (boss/CEO), 부장님 (department head), 의사 선생님 (doctor). Added to respected roles."}},
  {type:"teach",kind:"word",nl:"의사",hanja:"醫+師",en:"doctor",pos:"noun",gender:null,funFact:"From hanja: 醫 (medicine) + 師 (master). Medicine master = doctor.",phonetic:"ui-sa",example:"A: 의사예요? B: 네, 저는 의사예요.",exampleEn:"A: Are you a doctor? B: Yes, I am a doctor.",note:"SINO-KOREAN: 의 (medicine) + 사 (master/expert).\n의 reappears in: 의학 (medicine), 의원 (clinic).\n사 (master/expert) reappears in: 교사, 강사..."},
  {type:"mc",q:"선생님 means:",opts:["teacher","student","doctor","nurse"],ans:"teacher",hint:"선생 + 님 (honorific suffix). What role does this person have?"},
  {type:"teach",kind:"word",nl:"회사원",hanja:"會社+員",en:"office worker",pos:"noun",gender:null,funFact:"From hanja: 會 (meeting/society) + 社 (society/company) + 遠 (far).",phonetic:"hoe-sa-won",example:"A: 뭐 해요? B: 저는 회사원이에요.",exampleEn:"A: What do you do? B: I am an office worker.",note:"SINO-KOREAN: 회사 (company) + 원 (member).\n'Company-member' = office worker.\n원 reappears in: 병원, 학원, 공무원..."},
  {type:"teach",kind:"word",nl:"경찰관",hanja:"警察+官",en:"police officer",pos:"noun",gender:null,funFact:"SINO-KOREAN: 경찰 (police) + 관 (official).",phonetic:"gyeong-chal-gwan",example:"A: 이 사람은 누구예요? B: 경찰관이에요.",exampleEn:"A: Who is this person? B: They are a police officer.",note:"SINO-KOREAN: 경찰 (police) + 관 (official).\n관: same building block as 도서관!\n경 (warn) + 찰 (observe): police."},
  {type:"teach",kind:"word",nl:"요리사",hanja:"料理+師",en:"chef / cook",pos:"noun",gender:null,funFact:"From hanja: 料 (ingredients) + 理 (manage) + 師 (master). Ingredients master = chef.",phonetic:"yo-ri-sa",example:"A: 요리사예요? B: 네, 저는 요리사예요.",exampleEn:"A: Are you a chef? B: Yes, I am a chef.",note:"SINO-KOREAN: 요리 (cooking) + 사 (expert).\nSame 사 (expert) morpheme as the doctor word.\n요리: cooking. Also a verb: 요리하다 (to cook)."},
  {type:"mc",q:"경찰관 means:",opts:["office worker","police officer","chef","nurse"],ans:"police officer",hint:"경 (warn) + 찰 (observe) + 관 (official). Law enforcement."},
  {type:"teach",kind:"word",nl:"간호사",hanja:"看護+師",en:"nurse",pos:"noun",gender:null,funFact:"From hanja: 看 (watch) + 護 (protect) + 師 (master). Watch-protect master = nurse.",phonetic:"gan-ho-sa",example:"A: 간호사가 있어요? B: 네, 저는 간호사예요.",exampleEn:"A: Is there a nurse? B: Yes, I am a nurse.",note:"SINO-KOREAN: 간호 (nursing/care) + 사 (expert).\nSame 사 (expert) morpheme across all three job words.\n사 = professional expert in a field."},
  {type:"teach",kind:"word",nl:"프리랜서",en:"freelancer",pos:"noun",gender:null,funFact:"Loanword from English 'freelancer.' Modern Korean work culture has rapidly adopted gig-economy terms: 프리랜서, 세얼, 인플루언서.",phonetic:"peu-ri-laen-seo",example:"A: 회사원이에요? B: 아니요, 프리랜서예요.",exampleEn:"A: Are you an office worker? B: No, I'm a freelancer.",note:"From English freelancer.\nVery common job in Korea.\nEnds in a vowel sound, so use the vowel form."},
  {type:"tip",title:"🧱 The 사 (師/士) Morpheme: Expert in a Field",text:"You've now seen 사 (expert) THREE times:\n의사 (medicine + expert) = doctor\n요리사 (cooking + expert) = chef\n간호사 (nursing + expert) = nurse\n\nOne morpheme, three words decoded.",deepDive:{title:"The LEGO Morpheme Bank",text:"And 원 (member/place) twice:\n\n회사원\n→ office worker (company + member)\n\n병원\n→ hospital (illness + place)\n\n8 morphemes → already 10+ words decoded.\nEvery lesson, your LEGO set gets bigger."}},
  {type:"mc",q:"학생 분해: 학 + 생. 학 means:",opts:["Person","School","Study","Teacher"],ans:"Study",hint:"formal learning-person = student"},
  {type:"mc",q:"의사, 요리사, 간호사. what do they all share?",opts:["의 (medicine) morpheme","님 (honorific) suffix","원 (institution) morpheme","사 (expert) morpheme"],ans:"사 (expert) morpheme",hint:"사 marks someone skilled in a specific profession."},
  {type:"mc",q:"Which word uses 님 to add RESPECT to a title?",opts:["선생님","의사","학생","회사원"],ans:"선생님",hint:"님 is an honorific suffix added to titles"},
  {type:"mc",q:"'I am a chef' in Korean:",opts:["저는 선생님이에요","저는 요리사예요","저는 학생이에요","저는 의사예요"],ans:"저는 요리사예요",hint:"Check the last sound of the job title."},
  {type:"fb",s:"저는 ___이에요. (office worker)",a:"회사원",opts:["회사원","경찰관","의사","학생"],hint:"Company + member = office worker"},
  {type:"fb",s:"저는 간호___예요.\n(I am a nurs___.)",a:"사",opts:["사","님","원","생"],hint:"Expert morpheme used in 의사, 요리사, 간호사"},
  {type:"match",pairs:[{nl:"학생",en:"student"},{nl:"선생님",en:"teacher"},{nl:"의사",en:"doctor"},{nl:"회사원",en:"office worker"}]},
  {type:"match",pairs:[{nl:"요리사",en:"chef"},{nl:"간호사",en:"nurse"},{nl:"경찰관",en:"police officer"},{nl:"프리랜서",en:"freelancer"}]},
  {type:"drag_fill",s:"저는 {1}이에요. 학교에서 공부해요.",blanks:{"1":"학생"},pool:["학생","의사","요리사","간호사"],hint:"Who studies at school?"},
  {type:"mc",q:"회사원 = 회사 + 원. 원 means:",opts:["Office","Work","Member","Place"],ans:"Member",hint:"Company-organization affiliate = office worker"},
  {type:"mc",q:"What type of word is 프리랜서?",opts:["Pure Korean word","Sino-Korean compound","A Japanese word","Konglish loanword"],ans:"Konglish loanword",hint:"English freelancer adapted into Korean pronunciation"},
]},

// ═══ L2: 있어요 / 없어요 ═══
{id:"kou2l2",title:"있어요 / 없어요",icon:"📦",xp:20,board:true,steps:[
  {type:"intro",title:"There Is / There Isn't",desc:"있다 / 없다\n→ exist / not exist\n\nOne verb, three jobs.",goals:["Use 있어요 for 'there is' AND 'I have'","Use 없어요 for the opposite","Notice 이/가 landing naturally on subjects"]},
  {type:"teach",kind:"word",nl:"있어요",en:"there is / I have / exists",pos:"noun",gender:null,funFact:"Works for BOTH 'there is' and 'I have':.",phonetic:"i-sseo-yo",example:"A: 커피가 있어요? B: 네, 있어요!",exampleEn:"A: Is there coffee? B: Yes, there is!",note:"있다: to exist / to have.\n있어요: polite present form.",deepDive:{title:"있어요 in Korean Culture",text:"Works for BOTH 'there is' and 'I have':\n커피가 있어요: There is coffee.\n저는 고양이가 있어요: I have a cat.\n\nKorean doesn't always separate existence from possession."}},
  {type:"teach",kind:"word",nl:"없어요",en:"there isn't / I don't have",pos:"noun",gender:null,funFact:"있어요 (to exist/have) and 없어요 (to not exist/not have) are core antonyms. Memorize together: 커피 있어요 / 커피 없어요.",phonetic:"eop-seo-yo",example:"A: 시간이 있어요? B: 아니요, 시간이 없어요.",exampleEn:"A: Do you have time? B: No, I don't have time.",note:"없다 = to not exist / to not have.\n없어요 = polite present form.",deepDive:{title:"Using 없어요",text:"있어요\n→ there is / I have\n\n없어요\n→ there is not / I don't have\n\nExact opposites. Pair them in your memory."}},
  {type:"teach",kind:"grammar",nl:"이 / 가",en:"(subject marker. just notice it)",pos:"part",gender:null,funFact:"The subject marker. Highlights NEW information. Distinguishes \"who did it\" from \"what we are talking about.\"",phonetic:"i / ga",example:"A: 커피가 있어요? B: 커피가 있어요. 시간이 없어요.",exampleEn:"A: Is there coffee? B: There is coffee. There is no time.",note:"You will see these on subjects.\n\n시간이\n→ after consonant\n\n커피가\n→ after vowel",deepDive:{title:"Full Pattern",text:"가 after vowel: 커피가 (coffee)\n\nJust notice the pattern for now.\nDon't memorize a rule yet.\nThis gets a proper name in a later lesson."}},
  {type:"mc",q:"없어요 means:",opts:["there isn't","there is","I am","I have"],ans:"there isn't",hint:"없다 is the exact opposite of 있다. Think: non-existence."},
  {type:"tip",title:"💡 있다: Korean's Most Useful Verb",text:"있다 covers THREE English ideas:\n\n1. There is:\n커피가 있어요.\n→ There is coffee.",deepDive:{title:"있다: Korean's Most Useful Verb",text:"2. I have:\n\n저는 차가 있어요.\n→ I have a car.\n\n3. Someone is somewhere:\n선생님이 교실에 있어요.\n→ The teacher is in the classroom.\n\n없다 is the exact inverse of all three:\n\n커피가 없어요.\n→ There is no coffee. / I don't have coffee.\n\nOne verb doing the work of three English verbs."}},
  {type:"mc",q:"커피가 있어요 can mean:",opts:["Only there is coffee","Both there is and I have","Only I have coffee","Only I like coffee"],ans:"Both there is and I have",hint:"있다 covers existence AND possession"},
  {type:"mc",q:"'I don't have time':",opts:["시간이 있어요","시간은 이에요","시간이 없어요","시간을 주세요"],ans:"시간이 없어요",hint:"Use the opposite of 있다 to say something is absent or unavailable."},
  {type:"mc",q:"When a noun ends in a consonant, which subject/topic marker is attached? (e.g., 시간 + ?)",opts:["은","도","를","이"],ans:"이",hint:"이 after consonant-ending words"},
  {type:"mc",q:"커피___ 있어요.\n(There is coffee)",opts:["가","이","은","는"],ans:"가",hint:"Check the last letter."},
  {type:"teach",kind:"word",nl:"물",en:"water",pos:"noun",gender:null,funFact:"Water. One of the most common Korean nouns. Compound-forming: 물병 (water bottle), 물감기 (the flu), 물거품 (commodity/tangible goods).",phonetic:"mul",example:"A: 물이 있어요? B: 네, 물이 있어요.",exampleEn:"A: Is there water? B: Yes, there is water.",note:"One of the most common Korean nouns."},
  {type:"fb",s:"물이 ___.\n(There is water.)",a:"있어요",opts:["있어요","없어요","이에요","아니에요"],hint:"The existence verb, polite form. Opposite of 없어요."},
  {type:"fb",s:"저는 시간이 ___.\n(I have no time)",a:"없어요",opts:["있어요","없어요","이에요","몰라요"],hint:"Don't have = the opposite of 있어요"},
  {type:"fb",s:"교실에 선생님___ 있어요.\n(In the classroom, a teacher is there.)",a:"이",opts:["이","가","은","는"],hint:"선생님 ends in consonant ㅁ"},
  {type:"match",pairs:[{nl:"있어요",en:"there is / I have"},{nl:"없어요",en:"there isn't / don't have"},{nl:"이",en:"subject marker (after consonant)"},{nl:"가",en:"subject marker (after vowel)"}]},
  {type:"drag_fill",s:"{1}이 있어요. 커피가 {2}.",blanks:{"1":"시간","2":"없어요"},pool:["시간","커피","있어요","없어요","이에요"],hint:"Time exists. No coffee."},
  {type:"mc",q:"'There is no doctor'. choose the correct sentence:",opts:["의사가 있어요","의사는 없어요","의사가 이에요","의사도 있어요"],ans:"의사는 없어요",hint:"The doctor is not present. Which expression means something is absent?"},
  {type:"mc",q:"저는 고양이가 있어요. This means:",opts:["I am a cat","I want a cat","I have a cat","Cats are nice"],ans:"I have a cat",hint:"있어요 = have, when used with a possessed object"},
  {type:"mc",q:"이/가 is used for:",opts:["Object of sentence","Topic of sentence","Location","Subject of sentence"],ans:"Subject of sentence",hint:"Just notice for now. This gets named properly in a later lesson"},
  {type:"teach",kind:"word",nl:"질문",en:"question",pos:"noun",gender:null,funFact:"From hanja: 質 (quality) + 問 (ask). Quality asking = question.",phonetic:"jil-mun",example:"A: 질문이 있어요? B: 네, 질문이 있어요!",exampleEn:"A: Do you have a question? B: Yes, I have a question!",note:"질문: question.\nSINO-KOREAN: 질 (matter) + 문 (ask).\n\n질문이 있어요.\n→ I have a question.",deepDive:{title:"Classroom Survival Words",text:"질문이 있어요: I have a question.\n질문 있어요?: Any questions?\n\n문 (問) = ask. Same morpheme in:\n문제 (問題) = problem/question (on a test)\n학문 (學問) = learning/scholarship"}},
  {type:"teach",kind:"word",nl:"대답",en:"answer / reply",pos:"noun",gender:null,funFact:"From hanja: 對 (face) + 答 (answer). Face and answer = reply.",phonetic:"dae-dap",example:"A: 질문이 있어요. B: 네, 대답해 주세요!",exampleEn:"A: I have a question. B: Yes, please answer!",note:"대답: answer, reply.\nSINO-KOREAN: 대 (respond) + 답 (answer).\n\n대답해 주세요.\n→ Please answer.",deepDive:{title:"Ways to Say Answer",text:"대답: answer/reply (spoken response).\n대답하다: to answer.\n\n답 alone also means 'answer':\n정답 = correct answer (정 = correct + 답)\n\n질문 ↔ 대답: question ↔ answer."}},
  {type:"mc",q:"질문이 있어요 means:",opts:["I have a question","I have an answer","There is no question","I don't understand"],ans:"I have a question",hint:"질문 = inquiry, 있어요 = have/exist"},
]},

// ═══ L3: 이것/그것/저것 ═══
{id:"kou2l2b",title:"★ Vowel Harmony: Why -아요 vs -어요",icon:"⚡",xp:25,board:true,steps:[
  {type:"intro",title:"The Rule Behind Every Verb Ending",desc:"가요 vs 먹어요\n→ different endings, one rule\n\nVowel harmony explained.",goals:["Understand the bright/dark vowel split","Know when to use -아요 vs -어요","Understand why 하다 → 해요 (not 하아요)","Generate ANY regular verb form from the stem alone"]},

  {type:"tip",title:"☀️ Bright Vowels Take -아요",text:"Korean splits vowels into two families.\n\n☀️ BRIGHT vowels: ㅏ and ㅗ\nThese attract the ending -아요.\n\nLook at the LAST VOWEL of the stem.",deepDive:{title:"Bright Vowels Take -아요",text:"If it's ㅏ or ㅗ, the verb takes -아요.\n\n가다: stem 가, vowel ㅏ (bright) → -아요\n오다: stem 오, vowel ㅗ (bright) → -아요\n보다: stem 보, vowel ㅗ (bright) → -아요\n\nTwo bright sounds prefer each other."}},

  {type:"teach",kind:"word",nl:"가다",en:"to go",pos:"verb",gender:null,funFact:"Native Korean verb. Contraction: 가 + -아요 → 가요 (identical ㅏ vowels merge).",phonetic:"ga-da",example:"A: 어디에 가요? B: 학교에 가요.",exampleEn:"A: Where are you going? B: I'm going to school.",note:"Bright vowel in the stem.\nSame vowel merges in the ending.\n\n가다 → 가요 (to go → I go)",deepDive:{title:"The Simplest Contraction",text:"가 + 아요: the two ㅏ sounds merge into one.\nResult: 가요 (not 가아요)."}},

  {type:"teach",kind:"word",nl:"오다",en:"to come",pos:"verb",gender:null,funFact:"Native Korean verb. Diphthong contraction: 오 + -아요 → 와요 (ㅗ + ㅏ → ㅘ). Not the literal 오아요.",phonetic:"o-da",example:"A: 누가 와요? B: 친구가 와요.",exampleEn:"A: Who is coming? B: A friend is coming.",note:"Bright vowel in the stem.\nTwo vowels contract.\n\n오다 → 와요 (to come → I come)",deepDive:{title:"The ㅘ Contraction",text:"오 + 아요: ㅗ and ㅏ merge into ㅘ.\nResult: 와요 (not 오아요)."}},

  {type:"teach",kind:"grammar",nl:"보다",en:"to see / to watch",pos:"part",gender:null,funFact:"Native Korean verb. Diphthong contraction: 보 + -아요 → 봐요 (ㅗ + ㅏ → ㅘ).",phonetic:"bo-da",example:"A: 뭐 봐요? B: 영화를 봐요.",exampleEn:"A: What are you watching? B: I'm watching a movie.",note:"Same bright vowel contraction.\n\n보다 → 봐요 (to see → I see)",deepDive:{title:"Same Contraction",text:"보 + 아요: ㅗ+ㅏ = ㅘ.\nResult: 봐요 (not 보아요).\n\nSame pattern as 오다 → 와요."}},
  {type:"mc",q:"오다 means:",opts:["to come","to see","to go","to eat"],ans:"to come",hint:"오다 contracts to 와요. It describes movement toward you."},

  {type:"tip",title:"🌙 All Other Vowels Take -어요",text:"Every vowel that is NOT ㅏ or ㅗ is dark.\nDark vowels take -어요.\n\nㅓ, ㅜ, ㅡ, ㅣ, ㅔ, ㅐ and all others.\n\n먹다: stem 먹, vowel ㅓ (dark) → -어요",deepDive:{title:"All Other Vowels Take -어요",text:"마시다: stem 마시, last vowel ㅣ (dark) → -어요\n\n있다: stem 있, vowel ㅣ (dark) → -어요\n\nBright = only ㅏ and ㅗ.\nDark = literally everything else."}},

  {type:"teach",kind:"grammar",nl:"먹다",en:"to eat",pos:"part",gender:null,funFact:"To eat. Dictionary form. Note verbs ALWAYS end in 다. Common conjugations: 먹어요 (polite), 먹었어요 (past polite), 먹을 거예요 (future).",phonetic:"meok-da",example:"A: 뭐 먹어요? B: 밥을 먹어요.",exampleEn:"A: What are you eating? B: I'm eating rice.",note:"먹다: stem 먹.\nThe vowel in the stem is dark (not ㅏ or ㅗ).\n먹다 → 먹어요 (to eat → I eat).",deepDive:{title:"먹다",text:"Consonant stems: the ending just attaches."}},

  {type:"teach",kind:"word",nl:"마시다",en:"to drink",pos:"verb",gender:null,funFact:"Native Korean verb. Vowel contraction: 마시 + -어요 → 마셔요 (ㅣ + ㅓ → ㅕ). Same as 가르치다 → 가르쳐요.",phonetic:"ma-si-da",example:"A: 뭐 마셔요? B: 커피를 마셔요.",exampleEn:"A: What are you drinking? B: I'm drinking coffee.",note:"마시다: stem 마시.\nLast vowel ㅣ is dark.\n마시다 → 마셔요 (ㅣ+ㅓ contracts).",deepDive:{title:"Contraction",text:"마시 + 어요: mouth naturally says 마셔요.\nSame contraction as 가르치다 → 가르쳐요."}},

  {type:"tip",title:"✨ 하다 Is Special",text:"하다 (to do) has a unique conjugation:\n\n하다 → 해요 (NOT 하아요 or 하어요)\n\nEvery noun + 하다 verb follows this rule:\n공부하다 → 공부해요 (study)\n운동하다 → 운동해요 (exercise)\n요리하다 → 요리해요 (cook)",deepDive:{title:"Why 하다 Contracts",text:"하 + 여 contracts to 해. Always.\nThis is the most common contraction in Korean.\n\nBecause 하다 attaches to nouns, learning this ONE rule gives you hundreds of verbs:\n전화하다 → 전화해요 (phone)\n산책하다 → 산책해요 (walk/stroll)\n사랑하다 → 사랑해요 (love)\n\nWhenever you see 공부하다, 운동하다, etc., you know: 공부해요, 운동해요."}},

  {type:"teach",kind:"word",nl:"배우다",en:"to learn",pos:"verb",gender:null,funFact:"Native Korean verb. Dark-vowel stem (ㅜ) takes -어요 ending: 배우다 → 배워요 (ㅜ + ㅓ → ㅝ).",phonetic:"bae-u-da",example:"A: 뭐 배워요? B: 한국어를 배워요.",exampleEn:"A: What are you learning? B: I'm learning Korean.",note:"배우다: stem 배우.\nThe stem vowel ㅜ is dark."},
  {type:"teach",kind:"word",nl:"살다",en:"to live",pos:"verb",gender:null,funFact:"Native Korean verb. Identical-vowel merge: 서 + -어요 → 서요 (both ㅓ collapse to one).",phonetic:"sal-da",example:"A: 어디에 살아요? B: 서울에 살아요.",exampleEn:"A: Where do you live? B: I live in Seoul.",note:"살다: stem 살.\nThe stem vowel ㅏ is bright."},
  {type:"teach",kind:"word",nl:"서다",en:"to stand",pos:"verb",gender:null,funFact:"Native Korean verb. Contraction: 서 + -어요 → 서요 (identical ㅓ vowels merge).",phonetic:"seo-da",example:"A: 어디에 서요? B: 여기에 서요.",exampleEn:"A: Where do you stand? B: I stand here.",note:"서다: stem 서.\nThe stem vowel ㅓ is dark."},
  {type:"teach",kind:"word",nl:"놀다",en:"to play / to hang out",pos:"verb",gender:null,funFact:"Native Korean verb. Bright-vowel stem (ㅗ) takes -아요 ending: 놀다 → 놀아요. Bright = ㅏ or ㅗ.",phonetic:"nol-da",example:"A: 같이 놀아요! B: 네, 좋아요!",exampleEn:"A: Let's hang out! B: Yes, sounds good!",note:"놀다: stem 놀.\nThe stem vowel ㅗ is bright."},

  {type:"mc",q:"배우다 (to learn). stem vowel is ㅜ. Which ending?",opts:["-아요 → 배우아요","-어요 → 배워요","해요","가요"],ans:"-어요 → 배워요",hint:"Is the stem vowel bright or dark?"},

  {type:"mc",q:"오다 (to come). stem vowel is ㅗ. Which ending?",opts:["해요","-어요 → 오어요","-아요 → 와요","요만"],ans:"-아요 → 와요",hint:"What kind of vowel is ㅗ?"},

  {type:"mc",q:"Which verb gets -어요?",opts:["가다 (ㅏ stem)","보다 (ㅗ stem)","오다 (ㅗ stem)","읽다 (ㅣ vowel)"],ans:"읽다 (ㅣ vowel)",hint:"ㅣ is not a bright sound. Which option shows that neutral-pitch stem?"},

  {type:"fb",s:"살다 (to live): polite form ___",a:"살아요",opts:["살아요","살어요","살해요","살요"],hint:"ㅏ is BRIGHT"},

  {type:"fb",s:"서다 (to stand): polite form ___",a:"서요",opts:["서요","서아요","서해요","서어요"],hint:"ㅓ is a dark vowel. Dark vowels take -어요, which contracts here."},

  {type:"tip",title:"🔗 Contraction Patterns",text:"When stem vowel meets ending vowel, they merge:\n\n가 + 아요 → 가요 (same ㅏ merges)\n오 + 아요 → 와요 (ㅗ+ㅏ becomes ㅘ)\n마시 + 어요 → 마셔요 (ㅣ+ㅓ becomes ㅕ)\n쓰 + 어요 → 써요 (ㅡ drops entirely)\n\nDon't memorise these. Just say them out loud.\nYour mouth naturally picks the shorter form.",deepDive:{title:"Why Korean Contracts",text:"Korean is an efficiency language. When two vowels crash, the shorter form wins.\n\nYou already do this in English: 'do not' → 'don't', 'I am' → 'I'm'.\n\nKorean does it with vowels:\n보 + 아요: your mouth says 봐요, not 보아요.\n마시 + 어요: your mouth says 마셔요, not 마시어요.\n\nThe written contractions just follow what your mouth already wants to do.\n\nFull contraction reference with all irregular types in a later lesson."}},

  {type:"mc",q:"마시다 (to drink) → 마시 + 어요 = ?",opts:["마셔요","마시어요","마사요","마시요"],ans:"마셔요",hint:"이 + 어 contracts to 여. 마시 + 어요"},

  {type:"mc",q:"보다 (to see) → 보 + 아요 = ?",opts:["보아요","봐요","보요","봐아요"],ans:"봐요",hint:"ㅗ + ㅏ contracts to ㅘ. 보 + 아요"},

  {type:"tip",title:"🎯 You Can Now Generate ANY Regular Verb",text:"With vowel harmony + 하다 rule, you can conjugate any regular verb:\n\nBright vowel (ㅏ/ㅗ) → 아요: 가다 → 가요 = go\nDark vowel (else) → 어요: 먹다 → 먹어요 = eat\n하다 → always 해요: 공부하다 → 공부해요 = study",deepDive:{title:"From Memorizing to Generating",text:"Three rules. Every regular verb. You can generate forms you have never seen.\n\nOr this one:\n쓰다 = to write\nStem: 쓰\nVowel: ㅡ (dark, and ㅡ drops)\n쓰 + 어요 = 써요 (I write) ✓\n\nYou derived these yourself.\nYou did not memorise them.\nThat is the difference between a phrase learner and a language learner."}},

  {type:"match",pairs:[{nl:"가다 (ㅏ)",en:"bright: goes"},{nl:"먹다 (ㅓ)",en:"dark: eats"},{nl:"오다 (ㅗ)",en:"bright: comes"},{nl:"하다",en:"special: always 해"}]},

  {type:"drag_fill",s:"저는 학교에 {1}. 밥 {2}. 커피 {3}.",blanks:{"1":"가요","2":"먹어요","3":"마셔요"},pool:["가요","먹어요","마셔요","봐요","해요"],hint:"Three verbs: go (bright), eat (dark), drink (dark contracted)"},

  {type:"mc",q:"You see a new verb: 놀다 (to play). Stem 놀, vowel ㅗ. Polite form?",opts:["놀해요","놀어요","놀아요","노요"],ans:"놀아요",hint:"ㅗ is BRIGHT"},

  {type:"mc",q:"Summary: 하다 ALWAYS becomes:",opts:["하아요","하요","하여요","해요"],ans:"해요",hint:"하 + 아 always contracts to 해. .... No exceptions."},
  {type:"teach",kind:"grammar",nl:"좋다 → 좋아요",en:"to be good / to like → is good / (I) like",pos:"verb",gender:null,funFact:"To be good / to like. Dual meaning: describes quality (사과가 좋아요; apple is good) OR expresses liking (사과가 좋아요; I like apples). Subject-particle makes the difference.",phonetic:"jo-ta → jo-a-yo",example:"A: 한국 음식이 좋아요? B: 네, 좋아요!",exampleEn:"A: Do you like Korean food? B: Yes, I like it!",note:"좋다: to be good, to like (feeling).\n\n좋다 → 좋아요\n→ Bright ㅗ in stem → takes -아요.",deepDive:{title:"좋다: Korea's Essential Word",text:"좋다 does DOUBLE duty:\n\n1. 'Is good':\n날씨가 좋아요 = The weather is good.\n\n2. 'I like' (feeling, with 이/가):\n커피가 좋아요 = I like coffee.\n\nThe subject marker 이/가 marks what you like.\nNOT 을/를. That's for 좋아하다.\n\nOpposite: 싫다 → 싫어요 (to dislike)."}},
  {type:"teach",kind:"grammar",nl:"좋아하다 → 좋아해요",en:"to like (action) → likes",pos:"verb",gender:null,funFact:"To like (action). From 좋다 + 하다. Unlike 좋다, takes a direct object with 을/를. 사과를 좋아해요 (I like apples). Action-verb of liking.",phonetic:"jo-a-ha-da → jo-a-hae-yo",example:"A: 뭐 좋아해요? B: 저는 한국 음식을 좋아해요.",exampleEn:"A: What do you like? B: I like Korean food.",note:"좋아하다: to like (as action verb).\n하다 compound: 좋아 (liking) + 하다 (do).\n\n좋아하다 → 좋아해요 (always 해요).",deepDive:{title:"좋다 vs 좋아하다",text:"좋다 = feeling (uses 이/가):\n커피가 좋아요 = Coffee is pleasing to me.\n\n좋아하다 = action (uses 을/를):\n커피를 좋아해요 = I like coffee (actively).\n\nBoth mean 'I like coffee' in English.\nBut the PARTICLES change.\nFor now: both are fine. Koreans use both."}},
  {type:"mc",q:"좋다 → polite present:",opts:["좋아요","좋어요","좋요","좋해요"],ans:"좋아요",hint:"Bright ㅗ → -아요"},
  {type:"fb",s:"저는 커피___ 좋아해요.\n(I like coffee.)",a:"를",opts:["를","가","은","에"],hint:"Action verbs take which particle on their target?"},
]},


// ═══ L2c: 을/를. The Object Marker ═══
{id:"kou2l2c",title:"을/를: Object Marker",icon:"🎯",xp:25,board:true,steps:[
 {type:"intro",title:"What the Verb Acts On",desc:"을/를\n→ object marker\n\nMarks WHAT the verb acts on.",goals:["Use 을/를 (object particle)","Choose 을 vs 를 based on final letter","See the full particle trio (은/는, 이/가, 을/를)","Parse Korean sentences into topic + object + verb"]},
 // ── Teach: 을/를 ──
 {type:"teach",kind:"grammar",nl:"을 / 를",en:"(object particle)",pos:"part",gender:null,funFact:"The object marker. Tells you what the verb acts on. Often dropped in casual speech.",phonetic:"eul / reul",example:"A: 뭐 마셔요? B: 커피를 마셔요.",exampleEn:"A: What are you drinking? B: I'm drinking coffee.",note:"을/를 marks the OBJECT. the thing being acted on.\n\n을 after consonant:\n밥을 (rice), 물을 (water)\n\n를 after vowel:\n커피를 (coffee), 차를 (tea)",deepDive:{title:"Same Logic as 은/는 and 이/가",text:"Korean particles come in pairs. Same function, two shapes for smooth sound:\n\nConsonant ending + 을:\n밥 (rice, ends ㅂ) → 밥을\n물 (water, ends ㄹ) → 물을\n\nVowel ending + 를:\n커피 (coffee, ends ㅣ) → 커피를\n차 (tea, ends ㅏ) → 차를\n\nYou already know this pattern from 은/는 and 이/가."}},
 // ── Teach: the rule ──
 {type:"teach",kind:"grammar",nl:"을 or 를?",en:"Check the last letter.",pos:"part",gender:null,funFact:"Object particle choice. 을 after consonant-ending nouns (밥을 먹다), 를 after vowel-ending (커피를 마시다). The sound-matching rule runs throughout Korean particles.",phonetic:"",example:"A: 뭐 먹어요? B: 밥을 먹어요.",exampleEn:"A: What are you eating? B: I'm eating rice.",note:"Last letter has a consonant (받침)?\n→ add 을\n\nLast letter is a vowel (no 받침)?\n→ add 를",deepDive:{title:"The Rule In Full",text:"밥 → ㅂ (consonant) → 밥을\n커피 → ㅣ (vowel) → 커피를\n택시 → ㅣ (vowel) → 택시를\n물 → ㄹ (consonant) → 물을\n\nSame test every time. One glance at the final letter."}},
 // ── Teach: particle trio preview ──
 {type:"teach",kind:"grammar",nl:"은/는, 이/가, 을/를",en:"The three core particles",pos:"part",gender:null,funFact:"Three core particle pairs. 은/는 = topic ('as for X'). 이/가 = subject ('X does'). 을/를 = object ('does to X'). Each pair splits by preceding sound.",phonetic:"",example:"A: 저는 커피를 마셔요. B: 저도요!",exampleEn:"A: I drink coffee. B: Me too!",note:"You now know the three CORE particles:\n\n은/는\n→ TOPIC: 'as for X...'\n\n이/가\n→ SUBJECT: the doer / what exists\n\n을/를\n→ OBJECT: what the verb acts on",deepDive:{title:"How They Build a Sentence",text:"저는 커피를 마셔요 (I drink coffee):\n\n저는 → 'as for me' (topic)\n커피를 → coffee (object: what I drink)\n마셔요 → drink (verb: always last)\n\nKorean sentence = topic + object + verb.\nParticles tell you WHO does WHAT."}},
 // ── MC quizzes ──
 {type:"mc",q:"을/를 marks the ___ of a sentence.",opts:["object (acted upon)","subject (the doer)","topic (general context)","location (at/in)"],ans:"object (acted upon)",hint:"The thing the verb acts ON."},
 {type:"mc",q:"물___ 마셔요. 물 ends in consonant ㄹ.",opts:["를","을","은","는"],ans:"을",hint:"Consonant ending → 을"},
 {type:"mc",q:"커피___ 마셔요. 커피 ends in vowel ㅣ.",opts:["을","은","를","는"],ans:"를",hint:"Vowel ending → 를"},
 {type:"mc",q:"택시___ 타요. 택시 ends in vowel ㅣ.",opts:["을","는","은","를"],ans:"를",hint:"Vowel ending → 를"},
 // ── FB drills ──
 {type:"fb",s:"저는 밥___ 먹어요.\n(I eat rice.)",a:"을",opts:["을","를","은","가"],hint:"밥 ends in consonant ㅂ"},
 {type:"fb",s:"저는 영화___ 봐요.\n(I watch a movie.)",a:"를",opts:["을","를","은","이"],hint:"영화 ends in vowel ㅏ"},
 {type:"fb",s:"한국어___ 배워요.\n(I learn Korean.)",a:"를",opts:["을","를","은","가"],hint:"어 ends in vowel"},
 // ── Match ──
 {type:"match",pairs:[{nl:"밥을",en:"rice (object)"},{nl:"커피를",en:"coffee (object)"},{nl:"물을",en:"water (object)"},{nl:"영화를",en:"movie (object)"}]},
 // ── Tip: you've seen this ──
 {type:"tip",title:"🔍 You've Been Seeing 을/를 Since Day One",text:"택시를 타요 = I take a taxi.\n커피를 마셔요 = I drink coffee.\n밥을 먹어요 = I eat rice.\n\nEvery time you saw 를 or 을 in an example, that was the object marker at work.",deepDive:{title:"Why 을/를 Matters So Much",text:"Without 을/를, Korean sentences are ambiguous.\n\n커피 마셔요: I drink coffee (casual, particles dropped).\n커피를 마셔요: I drink coffee (clear: coffee is the object).\n\nKoreans drop particles in casual speech.\nBut when you are learning, particles are your roadmap.\nThey tell you exactly what role each word plays."}},
 // ── Final MC ──
 {type:"mc",q:"저는 한국 음식을 좋아해요. What is the object?",opts:["한국 음식 (Korean food)","저 (I, polite form)","좋아해요 (like, action)","는 (topic particle)"],ans:"한국 음식 (Korean food)",hint:"을 marks the object. What comes before 을?"},
]},

{id:"kou2l3",title:"이것 / 그것 / 저것",icon:"👆",xp:20,board:true,steps:[
  {type:"intro",title:"This / That / That Over There",desc:"이/그/저\n→ this / that / that over there\n\nThree spatial levels.",goals:["Use all three demonstratives","Understand the 이/그/저 prefix logic","See how it connects to 여기/거기/저기"]},
  {type:"teach",kind:"grammar",nl:"이것",en:"this (near me)",pos:"part",gender:null,funFact:"'This one' (near speaker). Demonstrative noun. Pairs: 이것 (near me), 그것 (near you), 저것 (far from both). Korean's three-way spatial distinction is more fine-grained than English.",phonetic:"i-geot",example:"A: 이것은 뭐예요? B: 이것은 커피예요.",exampleEn:"A: What is this? B: This is coffee.",note:"이: near ME (the speaker).\n것: thing.\n이것: this thing.",deepDive:{title:"Full Pattern",text:"이 prefix rule: refers to things near the SPEAKER. Contrast: 그것 (near listener), 저것 (far from both). Three-level deixis is core to Korean."}},
  {type:"teach",kind:"word",nl:"그것",en:"that (near you)",pos:"pron",gender:null,funFact:"That near you. Also used for things just mentioned in conversation: 그것은 뭐예요? (what is that thing?).",phonetic:"geu-geot",example:"A: 그것은 뭐예요? B: 그것은 물이에요.",exampleEn:"A: What is that? B: That is water.",note:"그: near YOU (the listener).\n그것: that thing near you.",deepDive:{title:"Using 그것",text:"Also used for things just mentioned:\n'그 사람' = 'that person' (already mentioned)."}},
  {type:"teach",kind:"word",nl:"저것",en:"that (far from both)",pos:"pron",gender:null,funFact:"That far from both. Three-level deixis system: 이것 (this/near me), 그것 (that/near you), 저것 (that/far from both).",phonetic:"jeo-geot",example:"A: 저것이 뭐예요? B: 학교예요.",exampleEn:"A: What is that over there? B: It's a school.",note:"저: far from BOTH of us.\n저것: that thing way over there.",deepDive:{title:"Using 저것",text:"The full three-level system:\n\n이\n→ near ME\n\n그\n→ near YOU\n\n저\n→ far from BOTH."}},
  {type:"mc",q:"그것 means:",opts:["that (near you)","this (near me)","that (far away)","here"],ans:"that (near you)",hint:"그 = next to the listener. 것 = a thing. Points at an object adjacent to the person addressed."},
  {type:"teach",kind:"grammar",nl:"이 / 그 / 저 + noun",en:"this / that / that (far) + noun",pos:"part",gender:null,funFact:"Demonstrative adjective forms. 이 책 (this book), 그 책 (that book near you), 저 책 (that book far away). Shortened from 이것/그것/저것 when modifying nouns.",phonetic:"i / geu / jeo",example:"A: 이 가방은 뭐예요? B: 제 가방이에요.",exampleEn:"A: What is this bag? B: It's my bag.",note:"The prefix attaches directly to a noun:\n이것 → 이 가방 (this bag)\n그것 → 그 책 (that book)",deepDive:{title:"Prefix + Noun Pattern",text:"저것 → 저 건물 (that building)\n\nSame 이/그/저 logic, just with a specific noun."}},
  {type:"tip",title:"🔺 One Prefix, Three Systems",text:"이 (this) / 그 (that) / 저 (that far). one prefix, three uses:\n\n• Before nouns: 이 책 = this book\n• Standalone: 이것 = this thing\n• Places: 여기 = here\n\nLearn the prefix ONCE, get three systems for free.",deepDive:{title:"이/그/저: Full Comparison",text:"Before NOUNS:\n이 책 = this book\n그 사람 = that person\n\nSTANDALONE:\n이것 = this thing\n그것 = that thing\n저것 = that (far)\n\nPLACES:\n여기 = here\n거기 = there\n저기 = over there\n\nSame 이/그/저 prefix in all three systems.\nEnglish: this and that (2 levels).\nKorean: 이, 그, and 저 (3 levels)."}},
  {type:"mc",q:"Something is right next to YOU (not me). You call it:",opts:["이것","그것","저것","여기"],ans:"그것",hint:"Near the LISTENER = 그"},
  {type:"mc",q:"A mountain far from both of us. You say:",opts:["이것","그것","저것","그산"],ans:"저것",hint:"Far from BOTH = 저"},
  {type:"mc",q:"이것 = 이 + 것. 것 means:",opts:["Place","Person","Time","Thing"],ans:"Thing",hint:"것 = object / item/stuff"},
  {type:"mc",q:"'That book (near you)' as a short form:",opts:["그 책","이 책","저 책","그것 책"],ans:"그 책",hint:"Drop 것, add the noun directly"},
  {type:"fb",s:"___ 건물은 뭐예요?\n(What is that building over there?)",a:"저",opts:["이","그","저","여"],hint:"Far from both speakers = 저"},
  {type:"fb",s:"___ 것은 뭐예요?\n(What is this?)",a:"이",opts:["이","그","저","그게"],hint:"Near the SPEAKER = 이"},
  {type:"match",pairs:[{nl:"이것",en:"this (near me)"},{nl:"그것",en:"that (near you)"},{nl:"저것",en:"that (far away)"},{nl:"그 책",en:"that book (near listener)"}]},
  {type:"teach",kind:"word",nl:"제",en:"my (polite)",pos:"pron",gender:null,funFact:"Contracted from the polite I + possessive.",phonetic:"je",example:"A: 이것은 누구 가방이에요? B: 제 가방이에요.",exampleEn:"A: Whose bag is this? B: It's my bag.",note:"제 = 저 (I, polite) + 의 (possession).\nContracted from the polite I + possessive."},
  {type:"drag_fill",s:"이것은 제 가방이에요. {1}은 선생님 가방이에요. {2}은 저기 있어요.",blanks:{"1":"그것","2":"저것"},pool:["이것","그것","저것","여기","거기"],hint:"My bag, teacher's bag (near them), the third one is far"},
  {type:"mc",q:"'이 사람' most likely refers to:",opts:["A person far away","A person near the speaker","A person near the listener","An imaginary person"],ans:"A person near the speaker",hint:"이 always points to whoever or whatever is adjacent to the one doing the talking."},
  {type:"mc",q:"그것 is used when the object is:",opts:["Right in front of you","On a distant mountain","Near the listener","In a past conversation only"],ans:"Near the listener",hint:"그 points toward the other person in the conversation, not the speaker and not a distant location."},
  {type:"mc",q:"Which prefix system do 이것/그것/저것 share with 여기/거기/저기?",opts:["은/는/도","을/를","있/없/모","이/그/저"],ans:"이/그/저",hint:"The same distance-based prefix runs through both"},

  {type:"teach",kind:"grammar",nl:"보다",en:"to see / to watch",pos:"part",gender:null,funFact:"Native Korean verb. Diphthong contraction: 보 + -아요 → 봐요 (ㅗ + ㅏ → ㅘ).",phonetic:"bo-da",example:"A: 이거 봐요! B: 뭐예요?",exampleEn:"A: Look at this! B: What is it?",note:"보다: to see, to watch, to look.\n\nOne of the 5 most common Korean verbs.",deepDive:{title:"보다",text:"보다 → 봐요 (polite present: ㅗ+ㅏ = ㅘ contraction).\n\n영화를 봐요: I watch a movie.\n텔레비전을 봐요: I watch TV.\n이거 봐요!: Look at this!\n\n보다 appears EVERYWHERE in Korean.\nYou'll use it every day."}},
  {type:"teach",kind:"word",nl:"말하다",en:"to speak / to say",pos:"verb",gender:null,funFact:"Compound of native 말 (speech) + 하다 (to do). No hanja on the native root; -하다 is a Korean verbalizer.",phonetic:"mal-ha-da",example:"A: 한국어로 말해요? B: 네, 한국어로 말해요!",exampleEn:"A: Do you speak in Korean? B: Yes, I speak in Korean!",note:"말하다: to speak, to say.\n말 (speech/words) + 하다 (do).",deepDive:{title:"말하다 in Korean Culture",text:"말하다 → 말해요 (하다 verb: always 해요).\n\n한국어로 말해요: I speak in Korean.\n영어로 말해요: I speak in English.\n천천히 말해 주세요: Please speak slowly.\n\n-(으)로 말하다: speak IN [language]."}},
  {type:"mc",q:"보다 → polite present:",opts:["봐요","보아요","보요","봅니다"],ans:"봐요",hint:"보: ㅗ+ㅏ contracts to ㅘ. ...."},
  {type:"mc",q:"한국어로 말해요 means:",opts:["I write Korean","I speak Korean","I read Korean","I study Korean"],ans:"I speak Korean",hint:"말하다 = to communicate verbally. 한국어로 = in the language of Korea."},
]},

// ═══ L4: 여기/거기/저기 ═══
{id:"kou2l4",title:"여기 / 거기 / 저기",icon:"📍",xp:20,board:true,steps:[
  {type:"intro",title:"Here / There / Over There",desc:"여기 / 거기 / 저기\n→ here / there / over there\n\nPlaces use the same system.",goals:["Use 여기, 거기, 저기 for places","Call a waiter with 저기요!","Connect this system back to 이/그/저"]},
  {type:"teach",kind:"word",nl:"여기",en:"here (near me)",pos:"pron",gender:null,funFact:"From hanja: 女 (woman) + 氣 (spirit/energy).",phonetic:"yeo-gi",example:"A: 어디에 있어요? B: 여기 있어요!",exampleEn:"A: Where is it? B: It's right here!",note:"Here, near the speaker.\nSame logic as the near-me prefix.",deepDive:{title:"Using 여기",text:"여기요!: 'Here!' (used to direct someone here).\n여기 있어요: 'It's here.'"}},
  {type:"teach",kind:"word",nl:"거기",en:"there (near you)",pos:"pron",gender:null,funFact:"From hanja: 距 (distance) + 氣 (spirit/energy).",phonetic:"geo-gi",example:"A: 거기가 어디예요? B: 학교예요.",exampleEn:"A: Where is that place? B: It's the school.",note:"There, near the listener.\nSame logic as the near-you prefix.",deepDive:{title:"Using 거기",text:"Used as 거기 있어요? = 'is it there (by you)?'. Three-level: 여기 (here/near me), 거기 (there/near you), 저거다 (over there, far from both)."}},
  {type:"teach",kind:"word",nl:"저기",en:"over there (far from both)",pos:"noun",gender:null,funFact:"From hanja: 低 (low) + 氣 (spirit/energy).",phonetic:"jeo-gi",example:"A: 저기 보세요! B: 뭐예요?",exampleEn:"A: Look over there! B: What is it?",note:"Over there, far from both.\nSame logic as the far-from-both prefix.",deepDive:{title:"저기 in Korean Culture",text:"저기요!: 'Excuse me!'. to get someone's attention.\nLiterally: 'Hey, over there!' Used for waiters, strangers.\nOne of Korea's most useful words."}},
  {type:"mc",q:"거기 means:",opts:["there","here","over there","this way"],ans:"there",hint:"Same 그 prefix as 그것. Near the LISTENER."},
  {type:"teach",kind:"grammar",nl:"이쪽 / 그쪽 / 저쪽",en:"this way / that way / that way (far)",pos:"part",gender:null,funFact:"Direction demonstratives. 쪽 means 'side/direction.' 이쪽 (this way), 그쪽 (that way, near listener), 저쪽 (that way, far). Used for pointing and spatial reference.",phonetic:"i-jjok / geu-jjok / jeo-jjok",example:"A: 어디로 가요? B: 이쪽으로 오세요.",exampleEn:"A: Which way do I go? B: Come this way.",note:"쪽: direction/side.\n이쪽: this direction (toward me).\n그쪽: that direction (toward you).",deepDive:{title:"이쪽 / 그쪽 / 저쪽",text:"저쪽: that direction (far).\n\n이쪽으로: this way → (으)로 = direction particle ."}},
  {type:"tip",title:"📍 저기요: The Word That Gets You Fed",text:"The most useful single word for visiting Korea:\n\n저기요!\n→ Excuse me! (literally: hey, over there!)\n\n여기요!\n→ Hey, over here! (also used, less common)",deepDive:{title:"When to Use 저기요",text:"저기요 works for:\n• Calling a waiter in a restaurant\n• Getting a stranger's attention\n• Flagging down a taxi\n• Alerting a shopkeeper\n\n저기요 is the safe default."}},
  {type:"mc",q:"To call a waiter in a Korean restaurant:",opts:["여기!","저기요!","거기요!","안녕하세요!"],ans:"저기요!",hint:"저기요 = Excuse me! (to get attention from afar)"},
  {type:"mc",q:"You want your friend (standing near you) to come toward you. You say:",opts:["저기로 가세요","거기 있어요","이쪽으로 오세요","저기요"],ans:"이쪽으로 오세요",hint:"이쪽 = this direction (toward me)"},
  {type:"mc",q:"거기 means 'over there' (middle distance). Which spatial prefix group does it belong to?",opts:["이","여","저","그"],ans:"그",hint:"거기 = there, near YOU = 그 logic"},
  {type:"teach",kind:"word",nl:"화장실",en:"bathroom / restroom",pos:"noun",gender:null,funFact:"From hanja: 化 (change) + 粧 (makeup) + 室 (room). Makeup room = bathroom.",phonetic:"hwa-jang-shil",example:"A: 화장실이 어디 있어요? B: 저기에 있어요.",exampleEn:"A: Where is the bathroom? B: It's over there.",note:"The first phrase every Korea visitor learns.\n실 = room (building block)."},
  {type:"teach",kind:"word",nl:"지하철역",en:"subway station",pos:"noun",gender:null,funFact:"Seoul's subway is one of the world's longest and most efficient. All signs are in 4 languages.",phonetic:"ji-ha-cheol-yeok",example:"A: 지하철역이 어디에 있어요? B: 저기에 있어요.",exampleEn:"A: Where is the subway station? B: It's over there.",note:"지하 = underground. 철 = iron/rail.\n역 = station (building block)."},
  {type:"mc",q:"화장실이 어디 있어요? You look and say '저기요!' Wait. what does 저기요 mean here?",opts:["Excuse me (asking someone)","I found it over there","Here I am","That's the bathroom"],ans:"Excuse me (asking someone)",hint:"저기요 is the polite way to flag a stranger when you need help or attention."},
  {type:"fb",s:"지하철역이 ___에 있어요.\n(The subway station is over there)",a:"저기",opts:["여기","거기","저기","이기"],hint:"Far from both people = 저"},
  {type:"fb",s:"___요! 메뉴 주세요.\n(Calling the waiter)",a:"저기",opts:["여기","거기","저기","이기"],hint:"Standard way to call a waiter"},
  {type:"match",pairs:[{nl:"여기",en:"here (near me)"},{nl:"거기",en:"there (near you)"},{nl:"저기",en:"over there"},{nl:"저기요!",en:"Excuse me!"}]},
  {type:"match",pairs:[{nl:"이쪽",en:"this way (toward me)"},{nl:"그쪽",en:"that way (toward you)"},{nl:"저쪽",en:"that way (far)"},{nl:"쪽",en:"direction / side"}]},
  {type:"drag_fill",s:"A: {1}요! 메뉴 주세요. B: 네, {2} 있어요.",blanks:{"1":"저기","2":"여기"},pool:["여기","거기","저기","이기"],hint:"Call the waiter, then: the menu is right here"},
  {type:"mc",q:"What connects 이것/그것/저것 and 여기/거기/저기?",opts:["They use different roots","They share 이/그/저 prefix","They are all formal","They all mean here"],ans:"They share 이/그/저 prefix",hint:"The same distance-based opening syllable runs through both sets: close to me, close to you, far from both."},
  {type:"mc",q:"이쪽으로 오세요 means:",opts:["Go over there","Look that direction","Come this way","Stay there"],ans:"Come this way",hint:"이쪽 = this direction (toward speaker), 오세요 = please approach / arrive"},
]},

// ═══ L5: Family Preview ═══
{id:"kou2l5",title:"Family Preview",icon:"👨‍👩‍👧‍👦",xp:20,board:true,steps:[
  {type:"intro",title:"Meet the Family (Preview)",desc:"Family vocabulary. Which word depends on YOUR gender.",goals:["Preview core family words","Grasp the speaker-gender rule","Prepare for the full family unit (U5)"]},
  {type:"teach",kind:"word",nl:"여자",en:"woman / female",pos:"noun",gender:null,funFact:"From hanja: 女 (female) + 子 (child). Female child = woman.",phonetic:"yeo-ja",example:"A: 여자예요? B: 네, 저는 여자예요.",exampleEn:"A: Are you a woman? B: Yes, I am a woman.",note:"여 = female (building block).\n여자 = woman.\n여동생 = younger sister."},
  {type:"teach",kind:"word",nl:"남자",en:"man / male",pos:"noun",gender:null,funFact:"From hanja: 男 (male) + 子 (child). Male child = man.",phonetic:"nam-ja",example:"A: 남자예요? B: 네, 저는 남자예요.",exampleEn:"A: Are you a man? B: Yes, I am a man.",note:"남 = male (building block).\n남자 = man.\n남동생 = younger brother."},
  {type:"teach",kind:"phrase",nl:"엄마 / 어머니",en:"mom / mother",pos:"intj",gender:null,funFact:"Kids and adults alike use 엄마 with their own mother.",phonetic:"eom-ma / eo-meo-ni",example:"A: 엄마가 있어요? B: 네, 우리 엄마가 여기 있어요.",exampleEn:"A: Is your mom here? B: Yes, my mom is here.",note:"엄마: casual (mom).\n어머니: formal (mother).",deepDive:{title:"Using 엄마 / 어머니",text:"Kids and adults alike use 엄마 with their own mother.\nUse 어머니 about other people's mothers.\nNote: 우리 엄마 = 'our mom' = Korean says 'our', not 'my'."}},
  {type:"teach",kind:"grammar",nl:"아빠 / 아버지",en:"dad / father",pos:"part",gender:null,funFact:"Dad / father. 아빠 is affectionate/casual (child's word), 아버지 is formal/respectful (adult's word). Register-matched. Adults use 아버지 when referring to their own father in formal contexts.",phonetic:"a-ppa / a-beo-ji",example:"A: 아빠가 어디에 있어요? B: 집에 있어요.",exampleEn:"A: Where is dad? B: He's at home.",note:"아빠: casual (dad).\n아버지: formal (father).",deepDive:{title:"아빠 / 아버지",text:"The double ㅃ in 아빠 is a tense consonant.\nAudio tip: it sounds clipped and forceful."}},
  {type:"teach",kind:"phrase",nl:"형 / 오빠",en:"older brother (male/female speaker)",pos:"intj",gender:null,funFact:"The SPEAKER's gender determines the word.",phonetic:"hyeong / o-ppa",example:"A: 오빠가 있어요? B: 네, 오빠가 있어요.",exampleEn:"A: Do you have an older brother? B: Yes, I have an older brother.",note:"TWO words. ONE meaning. Different speakers:\n형: used by MALE speakers.\n오빠: used by FEMALE speakers.",deepDive:{title:"Using 형 / 오빠",text:"The SPEAKER's gender determines the word.\nNot the sibling's gender."}},
  {type:"mc",q:"아빠 means:",opts:["dad","mom","older brother","younger sibling"],ans:"dad",hint:"The tense ㅃ gives this word a punchy sound. Casual form of 아버지."},
  {type:"teach",kind:"phrase",nl:"누나 / 언니",en:"older sister (male/female speaker)",pos:"intj",gender:null,funFact:"Male speaker: 형 (older bro), 누나 (older sis).",phonetic:"nu-na / eon-ni",example:"A: 누나가 있어요? B: 네, 누나가 있어요.",exampleEn:"A: Do you have an older sister? B: Yes, I have an older sister.",note:"Same speaker-gender rule as older brother words:\n누나: used by MALE speakers.\n언니: used by FEMALE speakers.",deepDive:{title:"Using 누나 / 언니",text:"Full grid:\nMale speaker: 형 (older bro), 누나 (older sis)\nFemale speaker: 오빠 (older bro), 언니 (older sis)"}},
  {type:"teach",kind:"word",nl:"동생",en:"younger sibling",pos:"noun",gender:null,funFact:"Sino-Korean: 同 (same) + 生 (born). Literally 'same-born' (sibling). Contrast: 형/오빠 (older brother), 언니/누나 (older sister).",phonetic:"dong-saeng",example:"A: 동생이 있어요? B: 네, 남동생이 있어요.",exampleEn:"A: Do you have a younger sibling? B: Yes, I have a younger brother.",note:"동생: younger sibling.\n남동생: younger BROTHER.\n여동생: younger SISTER.\n남 = male, 여 = female.",deepDive:{title:"Using 동생",text:"Good news: no speaker-gender split for younger siblings.\nDifference only for OLDER siblings."}},
  {type:"tip",title:"🎯 Korean Siblings: It's About YOU, Not Them",text:"In English: one word per sibling type.\n\nIn Korean: THE SPEAKER'S GENDER MATTERS.\n\nIf you are male: 형 (older bro), 누나 (older sis).\nIf you are female: 오빠 (older bro), 언니 (older sis).",deepDive:{title:"Speaker Gender Changes the Word",text:"Male speaker:\n형 = my older brother\n누나 = my older sister\n\nFemale speaker:\n오빠 = my older brother\n언니 = my older sister\n\nThese words also extend OUTSIDE family:\n오빠: how female fans call male idols!\n언니: how Korean women address older female friends.\n형: how Korean men address older male friends.\n\nThey're relationship words, not just family labels."}},
  {type:"mc",q:"A female speaker says '오빠가 있어요.' She has:",opts:["A younger brother","An older brother","An older sister","A younger sister"],ans:"An older brother",hint:"오빠 is used by women to refer to a senior male sibling."},
  {type:"mc",q:"A male speaker wants to say 'I have an older sister':",opts:["오빠가 있어요","언니가 있어요","누나가 있어요","형이 있어요"],ans:"누나가 있어요",hint:"Male speaker + older sister = 누나"},
  {type:"mc",q:"남동생 = 남 + 동생. 남 means:",opts:["Female","Older","Young","Male"],ans:"Male",hint:"남 and 여 are a pair. Think about which gender 남 represents."},
  {type:"mc",q:"Which sibling term does NOT change based on speaker gender?",opts:["동생","누나/언니","형/오빠","All change"],ans:"동생",hint:"Younger sibling  regardless of speaker"},
  {type:"fb",s:"저는 여자예요. 오빠___ 있어요.\n(I'm a woman. I have an older brother.)",a:"가",opts:["가","이","는","를"],hint:"Vowel ending or consonant ending?"},
  {type:"fb",s:"저는 남자예요. ___ 이 있어요. (older sister)",a:"누나",opts:["누나","언니","오빠","형"],hint:"Male speaker + older sister = ?"},
  {type:"match",pairs:[{nl:"형",en:"older bro (male speaker)"},{nl:"오빠",en:"older bro (female speaker)"},{nl:"누나",en:"older sis (male speaker)"},{nl:"언니",en:"older sis (female speaker)"}]},
  {type:"drag_fill",s:"저는 여자예요. {1}가 있어요. {2}가 있어요.",blanks:{"1":"오빠","2":"언니"},pool:["형","오빠","누나","언니","동생"],hint:"Female speaker: older brother, then older sister"},
  {type:"mc",q:"Outside family, 오빠 is used by:",opts:["Male speakers to older males","Female speakers to older males","Anyone to anyone older","Only to blood relatives"],ans:"Female speakers to older males",hint:"Only women and girls use 오빠 for a senior man they are close to, even outside the family."},
  {type:"mc",q:"'I have a younger brother' in Korean:",opts:["형이 있어요","여동생이 있어요","남동생이 있어요","오빠가 있어요"],ans:"남동생이 있어요",hint:"남 (male) + 동생 (younger sibling)"},
]},

// ═══ L6: Sino-Korean Cluster ═══
{id:"kou2l6",title:"Sino-Korean Cluster",icon:"🏛️",xp:20,board:true,steps:[
  {type:"intro",title:"Unlock Words With Building Blocks",desc:"60% of Korean words come from Chinese-origin blocks. Learn one, unlock many.",goals:["Learn 학교, 도서관, 교실, 병원","Decompose each into reusable morphemes","Build your LEGO morpheme bank to 10+ pieces"]},
  {type:"teach",kind:"word",nl:"학교",hanja:"學+校",en:"school",pos:"noun",gender:null,funFact:"From hanja: 學 (learn) + 校 (school). Literally \"learning school.\"",phonetic:"hak-gyo",example:"A: 어디에 가요? B: 학교에 가요.",exampleEn:"A: Where are you going? B: I'm going to school.",note:"SINO-KOREAN: 학 (study) + 교 (teach).\n'Study-teach place': school.",deepDive:{title:"Using 학교",text:"학: same as 학생!\n교 reappears in: 교실 (classroom), 교육 (education), 교사 (teacher)."}},
  {type:"teach",kind:"word",nl:"도서관",hanja:"圖書+館",en:"library",pos:"noun",gender:null,funFact:"From hanja: 圖 (diagram) + 書 (book) + 館 (building). Book building = library.",phonetic:"do-seo-gwan",example:"A: 지금 어디에 있어요? B: 도서관에 있어요.",exampleEn:"A: Where are you now? B: I'm at the library.",note:"SINO-KOREAN: 도서 (books) + 관 (building).\n'Book-building' = library.",deepDive:{title:"Using 도서관",text:"관 reappears in: 영화관 (cinema), 미술관 (art museum), 박물관 (museum), 경찰관 (police officer)!"}},
  {type:"teach",kind:"word",nl:"교실",hanja:"校+室",en:"classroom",pos:"noun",gender:null,funFact:"From hanja: 敎 (teach) + 室 (room). Teaching room = classroom.",phonetic:"gyo-sil",example:"A: 교실이 어디예요? B: 저기에 있어요.",exampleEn:"A: Where is the classroom? B: It's over there.",note:"SINO-KOREAN: 교 (teach) + 실 (room).\n'Teach-room' = classroom.",deepDive:{title:"Using 교실",text:"실 reappears in: 사무실 (office), 회의실 (meeting room), 화장실 (bathroom)."}},
  {type:"mc",q:"도서관 means:",opts:["library","classroom","school","hospital"],ans:"library",hint:"도서 (books) + 관 (building). Where do you find books?"},
  {type:"teach",kind:"word",nl:"병원",hanja:"病+院",en:"hospital / clinic",pos:"noun",gender:null,funFact:"From hanja: 病 (illness) + 院 (institute). Illness institute = hospital.",phonetic:"byeong-won",example:"A: 어디에 가요? B: 병원에 가요.",exampleEn:"A: Where are you going? B: I'm going to the hospital.",note:"SINO-KOREAN: 병 (illness) + 원 (place/institution).\n'Illness-place' = hospital.",deepDive:{title:"Using 병원",text:"원: same as 회사원! But here 원 means 'institution/place'.\n원 appears as BOTH 'member' and 'place'. context tells you which."}},
  {type:"teach",kind:"word",nl:"약국",hanja:"藥+局",en:"pharmacy",pos:"noun",gender:null,funFact:"From hanja: 藥 (medicine) + 局 (bureau). Medicine bureau = pharmacy.",phonetic:"yak-guk",example:"A: 약국이 어디 있어요? B: 저기에 있어요.",exampleEn:"A: Where is the pharmacy? B: It's over there.",note:"SINO-KOREAN: 약 (medicine) + 국 (bureau/bureau).\n'Medicine-place' = pharmacy.",deepDive:{title:"Using 약국",text:"약: medicine. Reappears in 약사 (pharmacist = medicine + expert!)."}},
  {type:"tip",title:"🏗️ Your Morpheme Bank So Far",text:"Sino-Korean morphemes you know so far:\n\n학 (學) = study: 학생 = student, 학교 = school\n생 (生) = life/person: 학생 = study-person, 선생 = teacher\n사 (師/士) = expert: 의사 = doctor, 교사 = teacher",deepDive:{title:"Your Full LEGO Set So Far",text:"국 (國) = country: 한국 = Korea, 미국 = America\n인 (人) = person: 한국인 = Korean person\n\n원 (member/place): 회사원, 병원, 학원...\n의 (medicine): 의사, 의학...\n사 (expert): 의사, 요리사, 간호사...\n약 (medicine): 약국, 약사...\n병 (illness): 병원, 병...\n\n10 morphemes → already 20+ words decoded.\nBy Later: ~80 morphemes → 500+ words."}},
  {type:"mc",q:"학교 = 학 + 교. 교 means:",opts:["Study","Teach","School","Place"],ans:"Teach",hint:"Study + instruct = school"},
  {type:"mc",q:"도서관 = 도서 + 관. 관 means:",opts:["Book","Room","Building","Library"],ans:"Building",hint:"관 = physical structure/hall (영화관, 미술관)"},
  {type:"mc",q:"교실 and 화장실 both share 실. 실 means:",opts:["School","Teach","Place","Room"],ans:"Room",hint:"교실 = teach-enclosed space, 화장실 = wash-enclosed space"},
  {type:"mc",q:"병원 = 병 + 원. 병 means:",opts:["Illness","Place","Doctor","Medicine"],ans:"Illness",hint:"medical condition-place = hospital"},
  {type:"fb",s:"___에 가요. 약을 사요.\n(Going to get medicine)",a:"약국",opts:["약국","병원","학교","도서관"],hint:"약 (medicine) + 국 (bureau) = pharmacy"},
  {type:"fb",s:"교___이 어디에 있어요?\n(Where is the classroom?)",a:"실",opts:["실","관","원","학"],hint:"교 (teach) + ___ (room)"},
  {type:"match",pairs:[{nl:"학교",en:"school"},{nl:"도서관",en:"library"},{nl:"교실",en:"classroom"},{nl:"병원",en:"hospital"}]},
  {type:"match",pairs:[{nl:"약국",en:"pharmacy"},{nl:"학 (morpheme)",en:"study"},{nl:"관 (morpheme)",en:"building"},{nl:"실 (morpheme)",en:"room"}]},
  {type:"drag_fill",s:"저는 {1}에서 공부해요. 책이 {2}에 있어요.",blanks:{"1":"학교","2":"도서관"},pool:["학교","도서관","병원","약국"],hint:"Study at school, books are at the library"},
  {type:"mc",q:"Which word contains 원 meaning 'PLACE' (not 'member')?",opts:["회사원","병원","선생님","경찰관"],ans:"병원",hint:"... = illness-place; 회사원 = company-member"},
]},

// ═══ L7: 도 (also/too) ═══
{id:"kou2l7",title:"도 (also / too)",icon:"➕",xp:20,board:true,steps:[
  {type:"intro",title:"Also / Too",desc:"도\n→ also / too\n\nReplaces other markers, never stacks.",goals:["Use 도 (also/too)","Understand that 도 replaces other particles","Use 저도요 as an instant reply"]},
  {type:"teach",kind:"word",nl:"도",en:"also / too",pos:"noun",gender:null,funFact:"'Also / too.' Attach directly to noun, replacing 은/는/이/가. 저도 = me too; 커피도 = coffee too.",phonetic:"do",example:"A: 저는 학생이에요. B: 저도 학생이에요!",exampleEn:"A: I am a student. B: I am also a student!",note:"도: also / too.\n\n도 REPLACES 은/는 or 이/가.\n저는 → 저도 (I → I too). 커피가 → 커피도 (coffee → coffee too).",deepDive:{title:"Using 도",text:"저는 학생이에요 → 저도 학생이에요 (I'm a student → I'm also a student).\n커피가 있어요 → 커피도 있어요 (There's coffee → There's also coffee).\n\n도 NEVER stacks:\n저는도 ✗ / 커피가도 ✗\nJust: 저도 ✓ / 커피도 ✓"}},
  {type:"teach",kind:"word",nl:"저도요",en:"me too",pos:"pron",gender:null,funFact:"One of the most common expressions in Korean conversation.",phonetic:"jeo-do-yo",example:"A: 저는 학생이에요. B: 저도요!",exampleEn:"A: I'm a student. B: Me too!",note:"저도요: 'Me too!' Quick, natural reply.\n\n저도요 = 저 (I) + 도 (also) + 요 (polite).",deepDive:{title:"저도요 in Korean Culture",text:"One of the most common expressions in Korean conversation."}},
  {type:"teach",kind:"phrase",nl:"도 with 있어요",en:"also have / also there is",pos:"intj",gender:null,funFact:"Negative 도: '도 없어요' = 'also don't have'.",phonetic:"do",example:"A: 물이 있어요? B: 네, 물이 있어요. 커피도 있어요.",exampleEn:"A: Is there water? B: Yes, there is water. There is also coffee.",note:"도 replaces 이/가 on the subject too:\n커피가 있어요 → 커피도 있어요 (also have coffee)\n시간이 없어요 → 시간도 없어요 (also no time)",deepDive:{title:"Using 도 with 있어요",text:"Negative form: 도 + 없어요 = 'also don't have.' 저도 없어요 (I don't have either), 커피도 없어요 (no coffee either)."}},
  {type:"mc",q:"저도요 means:",opts:["me too","also have","likewise","also"],ans:"me too",hint:"저 (I) + 도 (also) + 요 (polite). Quick agreement reply."},
  {type:"teach",kind:"grammar",nl:"도 with negatives",en:"neither / don't have either",pos:"part",gender:null,funFact:"'Neither / don't have either.' 저도 없어요 (I don't have it either). 도 with negative verb: negative coordination. Classical usage across Korean.",phonetic:"do",example:"A: 이것은 뭐예요? B: 저도 몰라요.",exampleEn:"A: What is this? B: I don't know either.",note:"도 + negative = 'neither' / 'don't ... either':\n저도 몰라요: I don't know either.\n저도 없어요: I don't have it either.",deepDive:{title:"도 with negatives",text:"저도 학생이 아니에요: I'm not a student either.\n\nSame particle, different meaning with negatives."}},
  {type:"tip",title:"⚡ 도 Replaces. Never Stacks",text:"도 (also/too) REPLACES other particles. it does not stack:\n\n저는 학생이에요 = I am a student\n저도 학생이에요 = I am also a student (도 replaces 는)\n\n커피가 있어요 = There is coffee",deepDive:{title:"도 Replaces. Never Stacks",text:"차도 있어요 = There is also tea (도 replaces 가)\n\nNever: 저는도 ✗ or 커피가도 ✗\n\n✓ 커피도 있어요.\n→ There is coffee too.\n\n✓ 선생님도 있어요.\n→ The teacher is also here.\n\n도 = swap, not addition."}},
  {type:"mc",q:"'I am ALSO a student':",opts:["저는 학생이에요","저도 학생이에요","저가 학생이에요","저도는 학생이에요"],ans:"저도 학생이에요",hint:"도 replaces 는 entirely"},
  {type:"mc",q:"Your friend says 저는 커피가 좋아요. You agree. Your reply:",opts:["아니요","감사합니다","저도요!","맞아요 저는"],ans:"저도요!",hint:"Quick 'me too' reply"},
  {type:"mc",q:"'There is also tea' (차 = tea):",opts:["차이도 있어요","차가도 있어요","차는도 있어요","차도 있어요"],ans:"차도 있어요",hint:"도 replaces 가. never stacks with it"},
  {type:"mc",q:"저도 몰라요 means:",opts:["I don't know either","I know too","I also want to know","Me too!"],ans:"I don't know either",hint:"도 + negative = neither / 't also / likewise"},
  {type:"fb",s:"커피___ 있어요. 차도 있어요.\n(There is ALSO coffee)",a:"도",opts:["도","는","가","이"],hint:"Also-exists = 도 replaces the particle"},
  {type:"fb",s:"A: 저는 학생이에요. B: 저___ 학생이에요!\n(Me too = 저도)",a:"도",opts:["도","는","가","이"],hint:"Me too = 저도"},
  {type:"fb",s:"선생님___ 없어요.\n(The teacher isn't here either)",a:"도",opts:["도","은","이","가"],hint:"도 replaces 은 to add 'also/either'"},
  {type:"match",pairs:[{nl:"도",en:"also / too (replaces particles)"},{nl:"저도요",en:"me too!"},{nl:"도 없어요",en:"don't have either"},{nl:"도 몰라요",en:"don't know either"}]},
  {type:"drag_fill",s:"저는 학생이에요. 제 친구{1} 학생이에요. 우리 선생님{2} 여기 있어요.",blanks:{"1":"도","2":"도"},pool:["도","는","이","가"],hint:"Friend is ALSO a student. Teacher is ALSO here."},
  {type:"mc",q:"Which 도 sentence is WRONG?",opts:["저도 학생이에요","시간이도 없어요","선생님도 있어요","커피도 있어요"],ans:"시간이도 없어요",hint:"도 never stacks with 이/가"},
]},

// ═══ L8: [place]에 있어요 ═══
{id:"kou2l8",title:"[place]에 있어요",icon:"📍",xp:20,board:true,steps:[
  {type:"intro",title:"Where Things Are",desc:"에\n→ at / to\n\nMarks WHERE something is.",goals:["Use [place]에 있어요 to say where things are","Ask 어디에 있어요? (where is?)","Get comfortable with 에 as a location particle"]},
  {type:"teach",kind:"word",nl:"에",en:"at / in (location)",pos:"noun",gender:null,funFact:"Pattern: [place]에 있어요 = is/am at [place].",phonetic:"e",example:"A: 어디에 있어요? B: 학교에 있어요.",exampleEn:"A: Where are you? B: I'm at school.",note:"에 = marks WHERE something IS (static location).\n\n학교에 있어요.\n→ I'm at school.",deepDive:{title:"More Locations",text:"카페에 있어요.\n→ I'm at the café.\n\n집에 있어요.\n→ I'm at home.\n\nPattern: [place]에 있어요 = is/am at [place].\nFull 에 system (including 에서) comes in a later lesson."}},
  {type:"teach",kind:"word",nl:"어디",en:"where",pos:"noun",gender:null,funFact:"The most important question you'll ask in Korea.",phonetic:"eo-di",example:"A: 화장실이 어디에 있어요? B: 저기 왼쪽에 있어요.",exampleEn:"A: Where is the bathroom? B: Over there on the left.",note:"어디: where.\n어디에 있어요?: 'Where is it?'",deepDive:{title:"어디 in Korean Culture",text:"어디에 있어요 = survival Korean.\nThe most important question you'll ask in Korea."}},
  {type:"teach",kind:"word",nl:"집",en:"home / house",pos:"noun",gender:null,funFact:"Native Korean word (no hanja). 우리 집 = our house (Korean favors collective 우리 over possessive 내).",phonetic:"jip",example:"A: 지금 어디에 있어요? B: 집에 있어요.",exampleEn:"A: Where are you now? B: I'm at home.",note:"집: home/house.\n집에 있어요: 'I'm at home' / 'It's at home'.",deepDive:{title:"집 in Korean Culture",text:"Native Korean word (not Sino-Korean).\n집에 가요: 'going home' (에 as destination. preview of U6!)"}},
  {type:"mc",q:"학교가 어디에 있어요? This question asks:",opts:["Where is the school?","What is a school?","Is there a school?","Who is at school?"],ans:"Where is the school?",hint:"어디 marks a location question. 있어요 means 'is/exists.'"},
  {type:"teach",kind:"word",nl:"카페",en:"café",pos:"noun",gender:null,funFact:"Loanword from English \"cafe.\" Korean adapted it using Hangul phonetics.",phonetic:"ka-pe",example:"A: 카페에 있어요? B: 네, 카페에 있어요!",exampleEn:"A: Are you at the cafe? B: Yes, I'm at the cafe!",note:"From English café.\n카페에 있어요: 'I'm at the café.'",deepDive:{title:"Cultural Note",text:"Korea has more cafés per capita than any country.\n카페 culture is massive here."}},
  {type:"teach",kind:"word",nl:"지금",en:"now / right now",pos:"noun",gender:null,funFact:"Sino-Korean: 只今 (only-now = this very moment). Contrast: 금방 (just now, Sino-Korean 方 = method), 이제 (now/henceforth).",phonetic:"ji-geum",example:"A: 지금 어디에 있어요? B: 카페에 있어요.",exampleEn:"A: Where are you right now? B: I'm at the cafe.",note:"지금: now.\n지금 어디에 있어요?: 'Where are you right now?'",deepDive:{title:"Using 지금",text:"SINO-KOREAN: 지 (this) + 금 (now).\nVery common time word."}},
  {type:"mc",q:"화장실이 어디에 있어요? means:",opts:["What is the bathroom?","Where is the bathroom?","Is there a bathroom?","The bathroom is big."],ans:"Where is the bathroom?",hint:"어디 is the location question word. 있어요 asks about existence or placement."},
  {type:"mc",q:"'I'm at the library':",opts:["도서관에 없어요","도서관이 있어요","도서관에 있어요","도서관은 이에요"],ans:"도서관에 있어요",hint:"Static location uses 에. Which sentence places someone at a location?"},
  {type:"mc",q:"지금 어디에 있어요? Someone is asking:",opts:["How are you now?","Are you here now?","What time is it?","Where are you right now?"],ans:"Where are you right now?",hint:"지금 = at this moment. 어디에 있어요 asks about current location."},
  {type:"mc",q:"집에 있어요. 집 means:",opts:["Home","Café","School","Library"],ans:"Home",hint:"집 = dwelling/house"},
  {type:"fb",s:"지금 카페___있어요.\n(Location particle: at the café)",a:"에",opts:["에","이","가","는"],hint:"Location particle: at the café"},
  {type:"fb",s:"선생님이 ___에 있어요?\n(Where is the teacher?)",a:"어디",opts:["어디","무엇","누구","언제"],hint:"'Where' in Korean"},
  {type:"fb",s:"저는 지금 집___있어요.\n(I'm at home now.)",a:"에",opts:["에","은","이","가"],hint:"At home = 집 + location particle + 있어요"},
  {type:"match",pairs:[{nl:"에",en:"at/in (location)"},{nl:"어디",en:"where"},{nl:"집",en:"home/house"},{nl:"지금",en:"now"}]},
  {type:"drag_fill",s:"A: 지금 {1}에 있어요? B: 아니요, {2}에 있어요.",blanks:{"1":"학교","2":"카페"},pool:["학교","카페","집","병원","어디"],hint:"Are you at school? No, I'm at the café."},
  {type:"mc",q:"학교에 있어요: the 에 marks:",opts:["Action location","Static location","Object","Topic"],ans:"Static location",hint:"에 marks where something IS, not where action happens"},
  {type:"mc",q:"카페 comes from:",opts:["Pure Korean","Chinese characters","English loanword","Japanese"],ans:"English loanword",hint:"The Korean spelling directly mimics the European pronunciation of a common coffee-shop term."},
]},

// ═══ L9: 알아요/몰라요 + Dialogue ═══
{id:"kou2l9",title:"알아요 / 몰라요",icon:"💡",xp:20,board:true,steps:[
  {type:"intro",title:"I Know / I Don't Know",desc:"알다 / 모르다\n→ know / don't know\n\nTwo essential verbs.",goals:["Say 알아요 (I know)","Say 몰라요 (I don't know)","Understand the preview flag"]},
  {type:"teach",kind:"word",nl:"알다",en:"to know",pos:"verb",gender:null,phonetic:"al-da",funFact:"알다 is a ㄹ-irregular verb. The ㄹ drops before ㄴ, ㅂ, and ㅅ endings.",example:"A: 그 사람을 알아요? B: 네, 알아요!",exampleEn:"A: Do you know that person? B: Yes, I know them!",note:"알다: to know (a fact, a person, information).\n알다 → 알아요 (ㄹ stem stays before 아/어).\n\nㄹ-irregular preview:\n알 + 세요 → 아세요 (not 알세요).",deepDive:{title:"알다 vs 이해하다",text:"알아요: I know / I know who/what something is.\n이해해요: I understand (a concept, an explanation).\n\nIn daily Korean, 알아요 covers both uses.\n알겠어요 = I understand (polite response to instructions)."}},
  {type:"teach",kind:"word",nl:"알아요",en:"I know / I understand",pos:"verb",gender:null,funFact:"알아요 covers both knowing facts and understanding concepts in daily conversation.",phonetic:"a-ra-yo",example:"A: 이것은 뭐예요? B: 알아요! 커피예요.",exampleEn:"A: What is this? B: I know! It's coffee.",note:"알다 → 알아요 (polite present form).\nㄹ stem + 아요 (bright vowel harmony).",deepDive:{title:"Using 알아요",text:"알아요: 'I know (this information).'\n이해해요: 'I understand (a concept)'. but 알아요 covers both in daily use."}},
  {type:"teach",kind:"grammar",nl:"몰라요",en:"I don't know",pos:"verb",gender:null,funFact:"모르다 is 르-irregular. The same pattern as 빠르다 → 빨라요.",phonetic:"mol-la-yo",example:"A: 이것은 뭐예요? B: 몰라요.",exampleEn:"A: What is this? B: I don't know.",note:"모르다 → 몰라요 (르-irregular).\n르 doubles to ㄹㄹ before endings.\nFull pattern in a later lesson.",deepDive:{title:"르-Irregular Preview",text:"모르다 → 몰라요 (NOT 모르어요).\n\nThe 르 transforms before -아/어:\n모르 → 몰라 (르 doubles).\n\nSame pattern: 부르다 → 불러요 (call), 빠르다 → 빨라요 (fast).\nFull 르-pattern in a later lesson."}},
  {type:"teach",kind:"word",nl:"맞아요",en:"That's right / Correct",pos:"pron",gender:null,funFact:"'Correct / that's right.' From 맞다 (to fit/be correct). Used constantly in agreement: 맞아요! 네, 맞아요.",phonetic:"ma-ja-yo",example:"A: 학생이에요? B: 네, 맞아요!",exampleEn:"A: Are you a student? B: Yes, that's right!",note:"맞다: to be correct/right.\n맞아요: polite form. 'That's correct.'",deepDive:{title:"Using 맞아요",text:"맞아요 is used to confirm someone is right.\n틀려요: 'That's wrong.' (opposite)\n\nVery common in conversation."}},
  {type:"mc",q:"몰라요 means:",opts:["I don't know","That's right","I'm not sure","I know"],ans:"I don't know",hint:"모르다 is the opposite of 알다. What is the negative?"},
  {type:"teach",kind:"word",nl:"정말요?",en:"Really?",pos:"noun",gender:null,funFact:"'Really?' Casual-polite. 정말 (truly) + 요 (polite marker). Used for mild surprise. Stronger: 진짜요? (seriously?). Korean has rich intensifiers; tone matters.",phonetic:"jeong-mal-yo",example:"A: 저는 의사예요. B: 정말요?",exampleEn:"A: I'm a doctor. B: Really?",note:"정말: really / truly.\n정말요?: 'Really?' (surprised/interested reaction)",deepDive:{title:"Using 정말요?",text:"정말요 = 정말 (really) + 요 (polite).\n\n진짜요?: same meaning, more casual.\n(진짜 = real/true, more emphatic than 정말)"}},
  {type:"tip",title:"⚡ When Verbs Change Shape",text:"You'll occasionally meet verbs that change shape when conjugated.\n\n모르다 → 몰라요 (expected: 모르어요 ✗)\n\nThis is called an IRREGULAR verb.\nDon't try to figure out the pattern yet.",deepDive:{title:"Why Some Verbs Are Irregular",text:"모르다 follows the 르-irregular pattern. The full explanation comes in a later lesson.\n\nWhen you see ⚡ before a form:\n→ Just memorize the form for now\n→ The pattern will be explained later\n→ It's not an error, it's a known rule\n\nFor now: 몰라요. Done."}},
  {type:"mc",q:"'I don't know':",opts:["알아요","몰라요","없어요","아니에요"],ans:"몰라요",hint:"모르다 is a 르-irregular. The 르 doubles before vowel endings."},
  {type:"mc",q:"모르다 becomes 몰라요 because:",opts:["It is regular","ㄹ drops","르 doubles to ㄹㄹ","ㅗ changes to ㅏ"],ans:"르 doubles to ㄹㄹ",hint:"르-irregular: 모르 becomes 몰라 before -아/어"},
  {type:"mc",q:"맞아요 is used to:",opts:["Express disagreement politely","Ask a question very indirectly","Say goodbye formally to someone","Confirm something is correct"],ans:"Confirm something is correct",hint:"맞다 = to be accurate or true. Used to agree or verify a statement."},
  {type:"mc",q:"정말요? is a reaction expressing:",opts:["Surprise or interest","Strong disagreement","Strong agreement","Formal politeness"],ans:"Surprise or interest",hint:"정말 = really. used when surprised or wanting to confirm"},
  {type:"fb",s:"A: 선생님이 학교에 있어요. B: 네, ___요.\n(That's right)",a:"맞아",opts:["맞아","알아","몰라","정말"],hint:"Confirming something is correct"},
  {type:"fb",s:"저는 ___.\n(I don't know. irregular form!)",a:"몰라요",opts:["몰라요","모르어요","모르요","모라요"],hint:"모르다 is 르-irregular. The 르 doubles to ㄹㄹ before -아/어."},
  {type:"match",pairs:[{nl:"알아요",en:"I know"},{nl:"몰라요",en:"I don't know"},{nl:"맞아요",en:"That's right"},{nl:"정말요?",en:"Really?"}]},
  {type:"drag_fill",s:"A: 선생님이 어디에 있어요? B: {1}. 저도 {2}.",blanks:{"1":"몰라요","2":"몰라요"},pool:["알아요","몰라요","맞아요","정말요"],hint:"A asks where the teacher is. B has no idea. Neither does C."},
  {type:"mc",q:"진짜요? compared to 정말요? is:",opts:["More formal","More casual/emphatic","Less common","Completely different meaning"],ans:"More casual/emphatic",hint:"진짜 = real/true, often used with stronger feeling"},
  {type:"mc",q:"알아요 covers which English meanings?",opts:["Only I know (knowledge)","Only I understand (feeling)","Both I know and I understand","I want to know something"],ans:"Both I know and I understand",hint:"In Korean daily speech, 알아요 spans the cognitive ranges that English splits into two verbs."},
  {type:"mc",q:"'To know' in Korean (dictionary form) is:",opts:["몰라요","맞아요","배우다","알다"],ans:"알다",hint:"The ㄹ-irregular verb for knowing a person, fact, or information."},
]},

// ═══ L9b: Question Words ═══
{id:"kou2l9b",title:"누구? 왜? 어떻게?",icon:"❓",xp:20,board:true,steps:[
  {type:"intro",title:"Korean Question Words",desc:"누구 = who\n왜 = why\n어떻게 = how\n뭐 = what\n\nYou already know 어디 (where).\nNow: the full question set.",goals:["Use 누구 (who) in sentences","Ask 왜 (why)","Ask 어떻게 (how)","Formalize 뭐 (what) as a question word"]},
  {type:"tip",title:"Korean Question Words",text:"Korean questions keep the SAME word order as statements.\nJust swap the unknown part for a question word:\n\n선생님이 있어요. → 누가 있어요?\nThe teacher is here. → Who is here?\n\nNo word-order flip needed. Korean questions are simple.",deepDive:{title:"Question Word Positions",text:"Korean question words sit WHERE the answer would go:\n\n학교에 있어요 → 어디에 있어요?\n(school) → (where?)\n\n선생님이 있어요 → 누가 있어요?\n(teacher) → (who?)\n\nThis is the opposite of English, which moves the question word to the front."}},
  {type:"teach",kind:"word",nl:"친구",en:"friend",pos:"noun",gender:null,phonetic:"chin-gu",funFact:"Sino-Korean: 親 (close/kin) + 舊 (old acquaintance). A close, long-known companion.",example:"A: 이 사람은 누구예요? B: 제 친구예요.",exampleEn:"A: Who is this person? B: They are my friend.",note:"SINO-KOREAN: 친(close/親) + 구(old acquaintance/舊).\n'Close old-acquaintance' = friend.\n친구를 만나요 = I meet a friend.",deepDive:{title:"친구 in Korean Culture",text:"친구 is used only for people born in the same year.\nFor older friends: 형, 오빠, 누나, 언니.\nFor younger friends: 후배 (junior).\n\n친한 친구 = close friend.\n오래된 친구 = old friend (known for a long time)."}},
  {type:"mc",q:"친구 means:",opts:["friend","teacher","neighbor","family member"],ans:"friend",hint:"From hanja: 親(close) + 舊(old acquaintance). Used only with people your own age."},
  {type:"teach",kind:"word",nl:"누구",en:"who",pos:"pron",gender:null,funFact:"Who. As subject, contracts: 누구 + 이/가 → 누가 (not 누구가). Object form stays 누구를.",phonetic:"nu-gu",example:"A: 이 사람은 누구예요? B: 제 친구예요.",exampleEn:"A: Who is this person? B: It's my friend.",note:"누구: who.\n누구예요?: 'Who is it?'\n\nAs subject: 누가 (누구 + 이/가 → 누가).\n누가 있어요?: 'Who is here?'"},
  {type:"teach",kind:"word",nl:"뭐",en:"what",pos:"pron",gender:null,funFact:"Casual contraction of 무엇 (formal what). 뭐 is standard in everyday speech; 무엇 in writing and formal register.",phonetic:"mwo",example:"A: 뭐 먹어요? B: 밥 먹어요.",exampleEn:"A: What are you eating? B: I'm eating rice.",note:"뭐: what (casual/spoken).\n뭐예요?: 'What is it?'\n\nFormal form: 무엇 (mu-eot).\nDaily speech: always 뭐."},
  {type:"teach",kind:"word",nl:"왜",en:"why",pos:"noun",gender:null,funFact:"Why. Question word. Often doubles as exclamation 'Why?!' in emotional speech. Intonation distinguishes: rising tone = question, flat = mild confusion, sharp = reproach.",phonetic:"wae",example:"A: 왜 한국어를 배워요? B: 한국 음악이 좋아요.",exampleEn:"A: Why do you learn Korean? B: I like Korean music.",note:"왜: why.\n왜요?: 'Why?' (polite, standalone).\n\n왜 sits at the START of the clause."},
  {type:"teach",kind:"word",nl:"어떻게",en:"how",pos:"noun",gender:null,funFact:"Same root as 어떤 (what kind of), next card.",phonetic:"eo-tteo-ke",example:"A: 어떻게 가요? B: 버스로 가요.",exampleEn:"A: How do you get there? B: By bus.",note:"어떻게: how.\n어떻게 해요?: 'How do you do it?'\n\nSame root as 어떤 (what kind of), next card."},
  {type:"teach",kind:"word",nl:"어떤",en:"what kind of / which",pos:"noun",gender:null,funFact:"Both translate as 'what kind of' but differ:.",phonetic:"eo-tteon",example:"A: 어떤 음악 좋아해요? B: 한국 음악이요.",exampleEn:"A: What kind of music do you like? B: Korean music.",note:"어떤: what kind of / which.\nSame root as 어떻게 (how).\n\n어떤 음악? = what kind of music?\n어떤 사람? = what kind of person?",deepDive:{title:"어떤 vs 무슨",text:"Both translate as 'what kind of' but differ:\n\n무슨 요일이에요? = What day is it? (fixed set)\n어떤 음악 좋아해요? = What kind of music? (open choice)\n\n무슨: selecting from a known/limited set.\n어떤: asking about characteristics or preferences.\n\n무슨 색? = What color? (from a set)\n어떤 색? = What kind of color? (describe it)"}},
  {type:"teach",kind:"word",nl:"언제",en:"when",pos:"noun",gender:null,funFact:"When. Full question word set: 누구 (who), 무엇/뭐 (what), 언제 (when), 어디 (where), 왜 (why), 어떻게 (how).",phonetic:"eon-je",example:"A: 언제 와요? B: 내일 와요.",exampleEn:"A: When are you coming? B: Tomorrow.",note:"언제: when.\n언제요?: 'When?' (polite, standalone).\n\nFull question word set:\n어디, 누구, 뭐, 왜, 어떻게, 어떤, 언제."},
  {type:"mc",q:"이 사람은 누구예요? This question asks:",opts:["When is this person coming?","Who is this person?","Where is this person?","What is this person doing?"],ans:"Who is this person?",hint:"누구 = who"},
  {type:"mc",q:"왜 한국어를 배워요? means:",opts:["When do you learn Korean?","How do you learn Korean?","Why do you learn Korean?","What do you learn?"],ans:"Why do you learn Korean?",hint:"왜 = reason query"},
  {type:"mc",q:"어떻게 가요? means:",opts:["When do you go?","Where do you go?","Why do you go?","How do you get there?"],ans:"How do you get there?",hint:"어떻게 = how"},
  {type:"mc",q:"'Who is here?' uses which form?",opts:["누가 있어요?","누구 있어요?","누구는 있어요?","누구를 있어요?"],ans:"누가 있어요?",hint:"The question asks who is present. The subject marker changes the question word."},
  {type:"fb",s:"___가 학교에 있어요?\n(Who is at school?)",a:"누",opts:["누","왜","뭐","어디"],hint:"'Who' as subject: 누구 → 누가"},
  {type:"fb",s:"___ 집에 있어요?\n(Why are you at home?)",a:"왜",opts:["왜","뭐","누구","어떻게"],hint:"Asking for a reason"},
  {type:"fb",s:"___ 먹어요?\n(What are you eating?)",a:"뭐",opts:["뭐","왜","누구","언제"],hint:"Asking what someone is eating"},
  {type:"fb",s:"한국어를 ___ 배워요?\n(How do you study Korean?)",a:"어떻게",opts:["어떻게","어디","왜","뭐"],hint:"Asking about the method"},
  {type:"mc",q:"어떤 음악 좋아해요? means:",opts:["When do you listen to music?","What kind of music do you like?","How is the music?","Where is the music?"],ans:"What kind of music do you like?",hint:"어떤 = what type / sort of. Asking about preferences."},
  {type:"fb",s:"___ 영화 좋아해요?\n(What kind of movie do you like?)",a:"어떤",opts:["어떤","어떻게","무슨","뭐"],hint:"Asking about kind/type preference. Same root as 어떻게."},
  {type:"match",pairs:[{nl:"누구",en:"who"},{nl:"왜",en:"why"},{nl:"어떻게",en:"how"},{nl:"어떤",en:"what kind of"}]},
  {type:"match",pairs:[{nl:"뭐",en:"what"},{nl:"어디",en:"where"},{nl:"언제",en:"when"},{nl:"누구예요?",en:"Who is it?"}]},
  {type:"mc",q:"Korean questions compared to English:",opts:["Always add 요 at the start","Move the question word to the front","Keep the same word order","Flip subject and verb"],ans:"Keep the same word order",hint:"Korean replaces the unknown item with the interrogative directly in its original slot, without rearranging the sentence."},
  {type:"mc",q:"뭐 vs 무엇:",opts:["뭐 is old Korean, 무엇 is modern","뭐 is formal, 무엇 is casual","They are unrelated words","뭐 is casual/spoken, 무엇 is formal"],ans:"뭐 is casual/spoken, 무엇 is formal",hint:"Daily speech uses 뭐"},
  {type:"drag_fill",s:"A: {1} 사람은 {2}예요? B: 제 선생님이에요.",blanks:{"1":"이","2":"누구"},pool:["이","그","누구","뭐","왜"],hint:"A: Who is this person? B: It's my teacher."},
  {type:"drag_fill",s:"A: {1} 한국어를 배워요? B: 한국 음악이 좋아요. A: {2} 배워요? B: 학교에서 배워요.",blanks:{"1":"왜","2":"어떻게"},pool:["왜","어떻게","뭐","어디","누구"],hint:"A asks WHY (reason), then HOW (method)."},
  {type:"fb",s:"이 사람은 제 ___예요.\n(This person is my friend.)",a:"친구",opts:["친구","선생님","가족","이름"],hint:"Sino-Korean: 親(close) + 舊(old acquaintance). Used only for people your own age."},
]},

// ═══ L10b: 양식 작성하기 (Filling Out Forms) ═══
{id:"kov2_u2l_form",title:"양식 작성하기",icon:"📝",xp:15,board:true,steps:[
  {type:"intro",title:"Filling Out Forms",desc:"Learn to read and fill out basic forms in Korean: name, address, phone, email. Essential for hotel check-in, TOPIK registration, and everyday official documents.",goals:["Read basic form field labels","Fill in personal details in Korean","Use a simple closing message greeting"]},

  {type:"teach",trg:"이름",src:"name",pos:"noun",gender:null,
   note:"SINO-KOREAN: 이 (this) + 름 (phonetic). The standard word for a person's name.\n이름이 뭐예요? = What is your name?",
   example:"A: 이름이 뭐예요?\nB: 제 이름은 민수예요.",
   exampleSrc:"A: What is your name?\nB: My name is Minsu.",
   funFact:"Korean names have the family name FIRST, given name second. So 김민수 = Kim (family) + Minsu (given). On foreign forms Koreans often reverse this order."},

  {type:"teach",trg:"주소",src:"address",pos:"noun",gender:null,
   note:"SINO-KOREAN: 住 (reside) + 所 (place). Your residential or mailing address.",
   example:"A: 주소가 어디예요?\nB: 서울이에요.",
   exampleSrc:"A: What is your address?\nB: It is Seoul.",
   funFact:"Korea reformed its address system in 2014 to street-based addresses, but many Koreans still use the traditional neighbourhood and lot-number system."},

  {type:"teach",trg:"전화번호",src:"phone number",pos:"noun",gender:null,
   note:"COMPOUND: 전화 (telephone) + 번호 (number). Literally 'telephone number'.\n번호 is the same word used in bus or seat numbers.",
   example:"A: 전화번호가 있어요?\nB: 네, 있어요.",
   exampleSrc:"A: Do you have a phone number?\nB: Yes, I do.",
   funFact:"Korean mobile numbers follow the format 010-XXXX-XXXX. The 010 prefix is standard for all carriers since 2004."},

  {type:"teach",trg:"이메일",src:"email",pos:"noun",gender:null,
   note:"Loanword from English 'email'. Written and pronounced as 이메일 in Korean.\n이메일 주소 = email address.",
   example:"A: 이메일이 있어요?\nB: 네, 있어요.",
   exampleSrc:"A: Do you have an email address?\nB: Yes, I do.",
   funFact:"Korea has one of the world's highest internet penetration rates. 이메일 is universally understood, though the older generation may say 전자우편 (electronic mail) in formal writing."},

  {type:"teach",trg:"생년월일",src:"date of birth",pos:"noun",gender:null,
   note:"COMPOUND: 생 (born) + 년 (year) + 월 (month) + 일 (day). Literally 'birth-year-month-day'.\nKorean forms always use this order: year first.",
   example:"A: 생년월일이 어떻게 돼요?\nB: 1990년 5월 3일이에요.",
   exampleSrc:"A: What is your date of birth?\nB: It is May 3, 1990.",
   funFact:"Korea uses two age systems: international age (from birth) and Korean age (born as age 1, everyone adds a year on New Year's Day). Official forms now use international age."},

  {type:"teach",trg:"쓰다",src:"to write / to fill in",pos:"verb",gender:null,
   note:"쓰다 = to write (also 'to use' in a second sense, taught later).\n쓰다 → 써요 (ㅡ-drop irregular: ㅡ drops, bright ㅏ wins), actually ㅡ drops before -어요 → 써요.",
   example:"A: 이름을 여기에 써요.\nB: 네, 알아요.",
   exampleSrc:"A: Write your name here.\nB: Yes, I know.",
   funFact:"쓰다 is a 으-irregular verb: the ㅡ stem vowel drops entirely before the -어요 ending, giving 써요 (not 쓰어요). This same rule applies to 크다 (big) → 커요."},

  {type:"teach",trg:"수고하세요",src:"thank you for your hard work / goodbye (service context)",pos:"intj",gender:null,
   note:"Literally 'please keep up the effort'. Used as a polite closing when leaving a shop, office, or official counter.\nOnly said TO the person who is CONTINUING to work, not to someone who is also leaving.",
   example:"A: 감사합니다!\nB: 수고하세요!",
   exampleSrc:"A: Thank you!\nB: Goodbye (keep up the good work)!",
   funFact:"Saying 수고하세요 to your boss is awkward, it implies they are working hard below you. Use 수고하십니다 upward, or simply bow and say 먼저 가겠습니다 (I will leave first)."},

  {type:"tip",title:"Korean Form Fields at a Glance",text:"The five fields on almost every Korean form:\n\n이름: name\n주소: address\n전화번호: phone number\n이메일: email\n생년월일: date of birth\n\nDate format is always year-month-day:\n1995년 8월 12일",deepDive:{title:"Official Document Order",text:"Year-month-day order (년/월/일) comes from Sino-Korean tradition.\nIt runs from largest to smallest unit.\n\nSame logic as the address system: country, city, district, street, number.\n\nThis 'largest to smallest' principle appears throughout Korean: family name before given name, year before month before day."}},

  {type:"mc",q:"Which form field asks for where you live?",opts:["주소","생년월일","이메일","이름"],ans:"주소",hint:"주 (reside) + 소 (place): the residential location field."},

  {type:"mc",q:"전화번호 literally means:",opts:["email address","phone number","date of birth","postal code"],ans:"phone number",hint:"전화 = telephone, 번호 = numeric identifier."},

  {type:"mc",q:"Korean date format on official forms:",opts:["day-month-year","month-day-year","year-month-day","no fixed order"],ans:"year-month-day",hint:"Korean orders time from the largest unit to the smallest: 년, 월, 일."},

  {type:"fb",s:"___을 여기에 써요.\n(Write your name here.)",a:"이름",opts:["이름","주소","이메일","생년월일"],hint:"The most basic personal detail on any form: what are you called?"},

  {type:"fb",s:"저의 ___가 없어요. 이메일만 있어요.\n(I don't have a phone number. I only have email.)",a:"전화번호",opts:["전화번호","주소","생년월일","이름"],hint:"전화 (telephone) + 번호 (number)."},

  {type:"fb",s:"___이 어떻게 돼요?\n(What is your address?)",a:"주소",opts:["주소","이름","이메일","전화번호"],hint:"住 (reside) + 所 (place) = the field for where you live."},

  {type:"fb",s:"사무실을 나갈 때: ___!\n(Leaving the office: ___!)",a:"수고하세요",opts:["수고하세요","알아요","몰라요","있어요"],hint:"A polite farewell to the person who is still working."},

  {type:"match",pairs:[{trg:"이름",src:"name"},{trg:"주소",src:"address"},{trg:"전화번호",src:"phone number"},{trg:"이메일",src:"email"}]},

  {type:"match",pairs:[{trg:"생년월일",src:"date of birth"},{trg:"쓰다",src:"to write / fill in"},{trg:"수고하세요",src:"goodbye (to someone still working)"},{trg:"번호",src:"number (in a sequence)"}]},
]},

// ═══ L10: Review & Quiz ═══
{id:"kou2l10",title:"Review & Quiz",icon:"📝",xp:30,board:true,steps:[
  {type:"intro",title:"Review & Quiz",desc:"Review: jobs, existence, demonstratives, family, place, morphemes.",goals:["Verify all U2 concepts","Test morpheme decomposition","Confirm particle instincts"]},
  {type:"teach",kind:"grammar",nl:"Review Summary",en:"What you now know",pos:"part",gender:null,funFact:"End-of-unit consolidation. Korean curriculum traditionally emphasizes systematic review; each grammatical structure builds on the prior. Review is not filler but pedagogical practice.",phonetic:"",example:"A: 학생이에요? B: 네, 저는 학생이에요. 학교에 있어요. 친구도 있어요.",exampleEn:"A: Are you a student? B: Yes, I am a student. I'm at school. I also have a friend.",note:"You now know 8 jobs, 5 locations, 5 family terms.\nYou have seen subject markers. The formal name comes later.",deepDive:{title:"Particles, Existence, and Morphemes Banked",text:"에 location particle\n도 'also' particle\n있다/없다 existence/possession\nDECOMPOSITION: 10 Sino-Korean morphemes banked."}},
  {type:"mc",q:"학생 = 학 + 생. 학 means:",opts:["Study","Person","School","Teacher"],ans:"Study",hint:"formal learning-person = student"},
  {type:"mc",q:"선생님 = 선생 + 님. 님 means:",opts:["Teacher (person)","Honorific suffix","Student (person)","Friend (person)"],ans:"Honorific suffix",hint:"님 elevates any title"},
  {type:"mc",q:"Which correctly uses 도?",opts:["저는도 학생이에요","저가도 학생이에요","저도 학생이에요","저이도 학생이에요"],ans:"저도 학생이에요",hint:"도 REPLACES 는, never stacks"},
  {type:"mc",q:"Something far from both speaker and listener is called:",opts:["이것","그것","여기","저것"],ans:"저것",hint:"Far from BOTH = 저"},
  {type:"mc",q:"'Where is the pharmacy?'",opts:["약국이 어디에 있어요?","약국이 뭐예요?","약국에 있어요.","약국이 있어요?"],ans:"약국이 어디에 있어요?",hint:"어디 = where, 있어요 = is"},
  {type:"mc",q:"관 appears in 도서관 AND 경찰관. It means:",opts:["Study / learning","Building / official hall","Room / chamber","Member / person"],ans:"Building / official hall",hint:"관 = physical structure/authorised large room in both words"},
  {type:"mc",q:"A female speaker saying 오빠가 있어요 has:",opts:["A younger brother","An older sister","An older brother","A male friend"],ans:"An older brother",hint:"오빠 is used by women for a senior male sibling in the family."},
  {type:"fb",s:"지금 카페___있어요.\n(Location: at the café)",a:"에",opts:["에","는","이","가"],hint:"Location: at the café"},
  {type:"fb",s:"저는 ___.\n(I don't know)",a:"몰라요",opts:["몰라요","모르어요","알아요","없어요"],hint:"모르다 is 르-irregular. The 르 doubles to ㄹㄹ before -아/어."},
  {type:"fb",s:"커피도 있어요. 차___ 있어요.\n(Tea is ALSO there)",a:"도",opts:["도","는","이","가"],hint:"Also-there = 도 replaces the particle"},
  {type:"match",pairs:[{nl:"있어요",en:"there is / I have"},{nl:"없어요",en:"there isn't / don't have"},{nl:"알아요",en:"I know"},{nl:"몰라요",en:"I don't know"}]},
  {type:"match",pairs:[{nl:"학교",en:"school (study+teach)"},{nl:"도서관",en:"library (book+building)"},{nl:"병원",en:"hospital (illness+place)"},{nl:"교실",en:"classroom (teach+room)"}]},
  {type:"drag_fill",s:"저는 {1}에 있어요. {2}도 있어요.",blanks:{"1":"학교","2":"친구"},pool:["학교","카페","집","친구","선생님"],hint:"I'm at school. A friend is also here."},
  {type:"mc",q:"실 appears in 교실 and 화장실. It means:",opts:["Teach","Place","Study","Room"],ans:"Room",hint:"교실 = teach-enclosed space; 화장실 = bathroom = wash-enclosed space"},
{type:"match",pairs:[{trg:"질문",src:"question"},{trg:"대답",src:"answer / reply"},{trg:"마시다",src:"to drink"},{trg:"배우다",src:"to learn"},{trg:"살다",src:"to live"},{trg:"서다",src:"to stand"}]},{type:"match",pairs:[{trg:"놀다",src:"to play / to hang out"},{trg:"지하철역",src:"subway station"},{trg:"남자",src:"man / male"},{trg:"엄마 / 어머니",src:"mom / mother"},{trg:"아빠 / 아버지",src:"dad / father"},{trg:"카페",src:"café"},{trg:"Review Summary",src:"What you now know"}]}]},

]};

export default UNIT_2;
