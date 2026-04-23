// Korean V2 Unit 6, 어디 가요?
// Level: A1.2

const UNIT_6 =
{n:6,lang:"ko",srcLang:"en",track:"v2",title:"어디 가요?",sub:"Transport, Location Particles & Conjugation Preview",icon:"🚇",level:"A1.2",color:"#3498DB",lessons:[

// ═══ L1: Transport Words ═══
{id:"kou6l1",title:"Transport Words",icon:"🚌",xp:20,board:true,steps:[
  {type:"intro",title:"Getting Around Korea",desc:"지하철 / 버스\n→ subway / bus\n\nTransport words are decodable compounds.",goals:["Learn core transport vocabulary","Decode transport compound words","Know Korean transit culture basics"]},
  {type:"teach",kind:"word",nl:"지하철",en:"subway",pos:"noun",gender:null,funFact:"From hanja: 地 (earth) + 下 (under) + 鐵 (iron). Underground iron = subway.",phonetic:"ji-ha-cheol",example:"A: 학교에 어떻게 가요? B: 지하철로 가요.",exampleEn:"A: How do you get to school? B: I go by subway.",note:"COMPOUND: 지하 (underground) + 철 (iron/rail).\nLiterally: 'underground iron.'\n",deepDive:{title:"지하철 in Korean Culture",text:"지하: underground. 지 (earth) + 하 (below).\n철: iron. Also in 철교 (iron bridge).\n\nSeoul subway: 23 lines. Clean, frequent, cheap.\nWi-Fi throughout. Announcements in Korean + English."}},
  {type:"teach",kind:"word",nl:"버스",en:"bus",pos:"noun",gender:null,funFact:"Loanword from English \"bus.\" Korean adapted it using Hangul phonetics.",phonetic:"beo-seu",example:"A: 버스를 타요? B: 네, 매일 버스를 타요.",exampleEn:"A: Do you take the bus? B: Yes, I take the bus every day.",note:"Konglish: from English 'bus.'\n\n버스 정류장: bus stop.",deepDive:{title:"Using 버스",text:"정류 (stop/stay) + 장 (place) = stop-place.\n\n타다 = to ride / take (transport verb).\n\n버스를 타다\n→ to take the bus\n\n택시를 타다\n→ to take a taxi\n\n지하철을 타다\n→ to take the subway"}},
  {type:"teach",kind:"word",nl:"기차",en:"train",pos:"noun",gender:null,funFact:"From hanja: 汽 (steam) + 車 (vehicle). Steam vehicle = train.",phonetic:"gi-cha",example:"A: 부산에 어떻게 가요? B: 기차로 가요.",exampleEn:"A: How do you get to Busan? B: I go by train.",note:"기차: train.\nCOMPOUND: 기 (machine) + 차 (vehicle)."},
  {type:"teach",kind:"word",nl:"KTX",en:"bullet train",pos:"noun",gender:null,funFact:"Korea Train eXpress, the bullet train.",phonetic:"ke-i-ti-ekseu",example:"A: KTX가 빨라요? B: 네, 아주 빨라요!",exampleEn:"A: Is the KTX fast? B: Yes, very fast!",note:"Korea Train eXpress, the bullet train.\nSeoul to Busan in 2.5 hours."},
  {type:"mc",q:"버스 means:",opts:["bus","subway","train","taxi"],ans:"bus",hint:"A Konglish word. Read the syllables: 버 (beo) + 스 (seu)."},
  {type:"teach",kind:"word",nl:"비행기",en:"airplane",pos:"noun",gender:null,funFact:"From hanja: 飛 (fly) + 行 (go) + 機 (machine). Flying-going machine = airplane.",phonetic:"bi-haeng-gi",example:"A: 일본에 어떻게 가요? B: 비행기를 타고 가요.",exampleEn:"A: How do you get to Japan? B: I go by airplane.",note:"COMPOUND: 비행 (flying) + 기 (machine).\n비: to fly. 행: go/travel. 기: machine.\n'Flying-travel machine' = airplane.",deepDive:{title:"Using 비행기",text:"비행: flying. 비행사: pilot (flying + expert).\n공항: airport. 공 (air/public) + 항 (port)."}},
  {type:"teach",kind:"word",nl:"타다",en:"to ride / take (transport)",pos:"verb",gender:null,funFact:"Korean verbs don't change for person or number. \"I go\" and \"they go\" use the same verb form.",phonetic:"ta-da",example:"A: 뭘 타요? B: 매일 지하철을 타요.",exampleEn:"A: What do you ride? B: I take the subway every day.",note:"타다: universal 'board/ride' verb for transport.\n\n버스를 타다: take the bus",deepDive:{title:"Using 타다",text:"택시를 타다: take a taxi\n자전거를 타다: ride a bicycle\n말을 타다: ride a horse\n\n내리다: to get off (opposite of 타다)."}},
  {type:"tip",title:"🚇 Korean Transport: World Class",text:"Seoul's public transit system:\n\n지하철 (subway):\n• 23 lines covering Greater Seoul\n• Color-coded, numbered exits",deepDive:{title:"T-money, Color-Coded Buses, and Airport Rail",text:"• T-money card works on everything\n• Last train ~12-1am\n\nKTX (bullet train):\n• Seoul → Busan: 2h 30m\n• Seoul → Gwangju: 1h 30m\n• Reserved seating, meals available\n\n버스 (bus):\n• Color-coded by type:\n  파란 버스: trunk routes (blue)\n  초록 버스: neighborhood routes (green)\n  빨간 버스: express (red)\n\n공항철도: Airport Railroad\nSeoul Station → Incheon Airport: 43 min."}},
  {type:"mc",q:"지하철 decomposes into:",opts:["지 (earth) + 하철 (rail)","지하 (underground) + 철 (iron)","지하 (lower) + 전 (electric)","All one piece"],ans:"지하 (underground) + 철 (iron)",hint:"Two-block compound: below-ground + metal. That is the literal root meaning of a subway system."},
  {type:"mc",q:"비행기 means 'airplane' because:",opts:["It sounds like English 'fly'","From Chinese characters only","비행 (flying) + 기 (machine)","It's an old native Korean word"],ans:"비행 (flying) + 기 (machine)",hint:"비 = air travel, 행 = going, 기 = a mechanical device. Compound yielding airplane."},
  {type:"mc",q:"타다 means:",opts:["To go to a place","To arrive at a place","To pay for a ticket","To ride/board transport"],ans:"To ride/board transport",hint:"버스를 타다, 기차를 타다"},
  {type:"fb",s:"매일 ___ 을/를 타요.\n(I take the subway every day)",a:"지하철",opts:["지하철","비행기","기차","버스"],hint:"... = subway (underground + iron)"},
  {type:"fb",s:"서울에서 부산까지 ___로 두 시간 삼십 분이에요.\n(Seoul to Busan by ___ is 2.5 hours.)",a:"KTX",opts:["KTX","버스","지하철","비행기"],hint:"Seoul to Busan 2.5 hours = bullet train"},
  {type:"match",pairs:[{nl:"지하철",en:"subway"},{nl:"기차",en:"train"},{nl:"비행기",en:"airplane"},{nl:"타다",en:"to ride/board"}]},
  {type:"match",pairs:[{nl:"버스 정류장",en:"bus stop"},{nl:"공항",en:"airport"},{nl:"내리다",en:"to get off"},{nl:"KTX",en:"bullet train"}]},
  {type:"drag_fill",s:"저는 매일 {1}을 타요. 주말에는 {2}로 여행해요.",blanks:{"1":"지하철","2":"기차"},pool:["지하철","기차","비행기","택시"],hint:"I take the subway every day. On weekends I travel by train."},
  {type:"mc",q:"기 appears in: 비행기, 세탁기, 청소기. 기 means:",opts:["Machine","Electric","Big","Modern"],ans:"Machine",hint:"비행기, 세탁기, 청소기 all share the suffix 기. What does it represent?"},
]},

// ═══ L2: 에 vs 에서 (P26 Named) ═══
{id:"kou6l2",title:"에 vs 에서 Named",icon:"📍",xp:25,board:true,steps:[
  {type:"intro",title:"★ AT (Static) vs AT (Active)",desc:"에 vs 에서\n→ static vs action location\n\nToday they get their names.",goals:["Name 에 as destination/static location marker","Name 에서 as action location marker","Apply the correct particle every time"]},
  {type:"teach",kind:"word",nl:"에",en:"to / at (destination or static location)",pos:"verb",gender:null,funFact:"It doesn't say anything about what you DO there.",phonetic:"e",example:"A: 어디에 가요? B: 학교에 가요.",exampleEn:"A: Where are you going? B: I'm going to school.",note:"에 marks THREE things:\n\n1. DESTINATION: 학교에 가요 (go TO school)\n2. STATIC LOCATION: 집에 있어요 (am AT home)\n3. TIME: 3시에 (AT 3 o'clock)",deepDive:{title:"에 vs 에서: The Core Distinction",text:"에 answers: WHERE are you? WHERE are you going?\nIt doesn't say anything about what you DO there.\n\n에서 answers: WHERE are you DOING something?\nAction verbs need 에서, not 에."}},
  {type:"teach",kind:"word",nl:"에서",en:"at / in (action location)",pos:"noun",gender:null,funFact:"Test: Is there an ACTION verb?.",phonetic:"e-seo",example:"A: 어디에서 공부해요? B: 학교에서 공부해요.",exampleEn:"A: Where do you study? B: I study at school.",note:"에서 marks WHERE an ACTION happens.\n\n학교에서 공부해요: study AT school.",deepDive:{title:"Using 에서",text:"카페에서 커피를 마셔요: drink coffee AT the café.\n도서관에서 책을 읽어요: read books AT the library.\n\nTest: Is there an ACTION verb?\nYes → 에서\nNo (just being/going) → 에"}},
  {type:"tip",title:"📍 에 vs 에서: The Complete System",text:"에 = static location or destination (no action happening there):\n집에 있어요 = I am at home\n학교에 가요 = I go to school\n\n에서 = action location (something happens there):\n카페에서 공부해요 = I study at the café",deepDive:{title:"Full Comparison",text:"회사에서 일해요 = I work at the company\n\nTest: is someone DOING something there? → 에서. Just existing or going? → 에.\n\n→ I'm at school. (static)\n\n학교에서 공부해요.\n→ I study at school. (action)\n\nBonus  -  에서 also means FROM:\n서울에서 왔어요.\n→ I came from Seoul.\n\n에서: WHERE you DO something\n\n집에서 쉬어요: rest AT home (action: resting)\n도서관에서 공부해요: study AT library (action: studying)\n카페에서 일해요: work AT a café (action: working)\n\nThe test:\n'What are you doing there?'\nIf there IS an action → 에서\nIf you're just BEING there or ARRIVING → 에\n\nBonus: 에서 also means 'from' in one pattern:\n서울에서 왔어요: I came FROM Seoul."}},
  {type:"mc",q:"'I study AT the library'  -  correct particle:",opts:["도서관에서 공부해요","도서관에 공부해요","도서관을 공부해요","도서관는 공부해요"],ans:"도서관에서 공부해요",hint:"Studying = action at a place → 에서"},
  {type:"mc",q:"'I am AT home'  -  correct particle:",opts:["집에서 있어요","집에 있어요","집을 있어요","집는 있어요"],ans:"집에 있어요",hint:"Static existence uses the location particle 에, not the action particle 에서."},
  {type:"mc",q:"'I go TO school'  -  correct particle:",opts:["학교에서 가요","학교를 가요","학교에 가요","학교는 가요"],ans:"학교에 가요",hint:"Going TO a destination → 에"},
  {type:"mc",q:"'I drink coffee AT the café'  -  correct particle:",opts:["카페에 커피를 마셔요","카페는 커피를 마셔요","카페를 커피를 마셔요","카페에서 커피를 마셔요"],ans:"카페에서 커피를 마셔요",hint:"Drinking = action at a place → 에서"},
  {type:"fb",s:"저는 매일 도서관___공부해요.\n(I study at the library every day.)",a:"에서",opts:["에서","에","를","는"],hint:"Studying is an action  -  what you DO at the library"},
  {type:"fb",s:"친구가 집___있어요.\n(A friend is at home.)",a:"에",opts:["에","에서","를","는"],hint:"Being at home, no action verb  -  static location"},
  {type:"fb",s:"저는 학교___가요. 학교___한국어를 공부해요.\n(I go to school. I study Korean at school.)",a:"에",opts:["에","에서","를","도"],hint:"First blank: going TO school (destination)"},
  {type:"drag_fill",s:"저는 카페{1} 일해요. 지금 카페{2} 있어요.",blanks:{"1":"에서","2":"에"},pool:["에","에서","를","는"],hint:"I work AT the café (action). Right now I am AT the café (static)."},
  {type:"match",pairs:[{nl:"학교에 가요",en:"go TO school (destination)"},{nl:"학교에서 공부해요",en:"study AT school (action)"},{nl:"집에 있어요",en:"am AT home (static)"},{nl:"집에서 쉬어요",en:"rest AT home (action)"}]},
  {type:"mc",q:"서울에서 왔어요 means:",opts:["I came FROM Seoul","I go to Seoul","I am in Seoul","Seoul is far"],ans:"I came FROM Seoul",hint:"에서 also marks 'from' with movement verbs like 오다"},
  {type:"mc",q:"에서 is different from 에 because:",opts:["에서 is more polite than 에","에서 marks where actions happen","에서 is only for large places","They are fully interchangeable"],ans:"에서 marks where actions happen",hint:"The key distinction: action vs static/destination"},
]},

// ═══ L3: (으)로 ═══
{id:"kou6l3",title:"(으)로: By and Toward",icon:"🛤️",xp:20,board:true,steps:[
  {type:"intro",title:"Going BY Bus, Heading TOWARD the Station",desc:"(으)로\n→ by (means) / toward (direction)\n\nOne particle, two uses.",goals:["Use (으)로 for means of transport","Use (으)로 for direction","Know when to use 로 vs 으로"]},
  {type:"teach",kind:"word",nl:"(으)로",en:"by (means) / toward (direction)",pos:"noun",gender:null,funFact:"Marks direction or means (by bus, by subway).",phonetic:"(eu)-ro",example:"A: 어떻게 가요? B: 버스로 가요.",exampleEn:"A: How do you get there? B: I go by bus.",note:"Marks direction or means (by bus, by subway).",deepDive:{title:"Using (으)로",text:"로: after vowels or ㄹ\n으로: after other consonants\n\n지하철로 (지하철 ends in a consonant → 로)\n버스로 (버스 ends in vowel → 로)\n학교으로 ✗ → 학교로 ✓ (ends in vowel → 로)\n\n왼쪽으로 (왼쪽 ends in consonant ㄱ → 으로)"}},
  {type:"teach",kind:"phrase",nl:"로  -  transport use",en:"by (vehicle/method)",pos:"intj",gender:null,funFact:"Marks the METHOD of transport:.",phonetic:"ro",example:"A: 기차로 가요? B: 네, 기차로 가요.",exampleEn:"A: Are you going by train? B: Yes, I'm going by train.",note:"Marks the METHOD of transport:\n\n버스로 가요: go by bus",deepDive:{title:"Using 로  -  transport use",text:"지하철로 가요: go by subway\n비행기로 가요: go by plane\n걸어서 가요: go on foot (걸어서 = by walking)\n\n걸어서: special form  -  걷다 (walk) + -어서."}},
  {type:"teach",kind:"phrase",nl:"로  -  direction use",en:"toward / in the direction of",pos:"intj",gender:null,funFact:"Marks DIRECTION:.",phonetic:"ro",example:"A: 어디로 가요? B: 왼쪽으로 가세요.",exampleEn:"A: Which way do I go? B: Please go to the left.",note:"Marks DIRECTION:\n\n왼쪽으로 가세요: go LEFT",deepDive:{title:"Using 로  -  direction use",text:"오른쪽으로 가세요: go RIGHT\n앞으로 가세요: go FORWARD\n뒤로 가세요: go BACK\n출구 쪽으로 가세요: go toward the exit"}},
  {type:"mc",q:"(으)로 with transport means:",opts:["by (means of)","from","at","toward"],ans:"by (means of)",hint:"버스로 = via bus. This particle marks the METHOD of travel."},
  {type:"mc",q:"'I go by subway'  -  correct form:",opts:["지하철에 가요","지하철로 가요","지하철를 가요","지하철가 가요"],ans:"지하철로 가요",hint:"지하철 ends in a consonant → 로 (not 으로)"},
  {type:"mc",q:"(으)로 marks:",opts:["Static location","Action location","Means/direction","Object"],ans:"Means/direction",hint:"Double duty: BY bus (method) AND TOWARD the exit (orientation)."},
  {type:"mc",q:"왼쪽___가세요  -  correct form:",opts:["왼쪽가","왼쪽로","왼쪽에서","왼쪽으로"],ans:"왼쪽으로",hint:"왼쪽 ends in consonant ㄱ → 으로"},
  {type:"mc",q:"'By airplane' in Korean:",opts:["비행기로","비행기를","비행기에","비행기에서"],ans:"비행기로",hint:"비행기 ends in vowel → 로"},
  {type:"fb",s:"오른쪽___가세요.\n(Go right)",a:"으로",opts:["으로","에서","에","를"],hint:"Vowel ending or consonant ending?"},
  {type:"fb",s:"저는 매일 버스___학교에 가요.\n(I go to school by bus.)",a:"로",opts:["로","으로","에서","를"],hint:"버스 ends in vowel → 로 (by bus)"},
  {type:"match",pairs:[{nl:"버스로",en:"by bus"},{nl:"지하철로",en:"by subway"},{nl:"왼쪽으로",en:"to the left"},{nl:"앞으로",en:"forward"}]},
  {type:"drag_fill",s:"직진하다가 왼쪽{1} 가세요. 거기서 버스{2} 가면 돼요.",blanks:{"1":"으로","2":"로"},pool:["으로","로","에","에서"],hint:"Go straight, then go left. From there, go by bus."},
  {type:"mc",q:"How is 에 different from (으)로?",opts:["They mean the same thing","에: to/at; 로: toward","로 is more formal than 에","에 is for transport only"],ans:"에: to/at; 로: toward",hint:"에 = destination. 로 = direction/means."},
  {type:"mc",q:"걸어서 가요. 걸어서 = going by:",opts:["Car (driving)","Train (riding)","Foot (walking)","Bicycle (cycling)"],ans:"Foot (walking)",hint:"걷다 (to stroll or move on two feet) + -어서 indicates the verb's method."},

  {type:"teach",kind:"word",nl:"기다리다",en:"to wait",pos:"verb",gender:null,funFact:"From hanja: 氣 (spirit/energy) + 多 (many) + 理 (reason/principle) + 多 (many).",phonetic:"gi-da-ri-da",example:"A: 지금 뭐 해요? B: 버스를 기다려요.",exampleEn:"A: What are you doing now? B: I'm waiting for the bus.",note:"기다리다 → 기다려요 (polite present).\nㅣ+ㅓ contracts to ㅕ.\n",deepDive:{title:"Common Phrases",text:"여기에서 기다리세요: please wait here.\n잠깐만 기다려요: wait a moment.\n버스를 기다려요: I'm waiting for the bus."}},
  {type:"teach",kind:"word",nl:"찾다",en:"to find / to look for",pos:"verb",gender:null,funFact:"Bright vowel in stem.",phonetic:"chat-da",example:"A: 뭘 찾아요? B: 지하철역을 찾아요.",exampleEn:"A: What are you looking for? B: I'm looking for the subway station.",note:"찾다 → 찾아요 (polite present).\nBright vowel in stem.",deepDive:{title:"Common Uses",text:"길을 찾다: look for the way.\n친구를 찾다: look for a friend.\n지갑을 찾다: look for a wallet.\n\n찾았어요!: I found it!"}},
  {type:"teach",kind:"grammar",nl:"(이)랑",en:"and / with (casual)",pos:"part",gender:null,funFact:"Korean particles attach after nouns to mark their role. No equivalent in English.",phonetic:"(i)-rang",example:"A: 누구랑 가요? B: 친구랑 같이 가요.",exampleEn:"A: Who are you going with? B: I'm going with a friend.",note:"Casual and/with particle.\n\nAfter vowel: no extra syllable.\nAfter consonant: extra syllable added.",deepDive:{title:"(이)랑",text:"Vowel ending + 랑: 친구랑, 엄마랑\nConsonant ending + 이랑: 선생님이랑, 동생이랑\n\n친구랑 = 친구하고 (same meaning, more casual).\n\n하고: neutral.\n(이)랑: casual/spoken.\n와/과: formal/written."}},
  {type:"mc",q:"찾다 means:",opts:["to wait","to look for","to ask","to find"],ans:"to find",hint:"Used when searching for something. 길을 찾다 = … the way."},
  {type:"teach",kind:"phrase",nl:"에게 / 한테",en:"to (a person)",pos:"verb",gender:null,funFact:"Korean verbs don't change for person or number. \"I go\" and \"they go\" use the same verb form.",phonetic:"e-ge / han-te",example:"A: 누구한테 전화해요? B: 엄마한테 전화해요.",exampleEn:"A: Who are you calling? B: I'm calling mom.",note:"에게: to (a person)  -  formal/written.\n한테: to (a person)  -  casual/spoken.\n",deepDive:{title:"Using 에게 / 한테",text:"친구에게 = 친구한테 (same meaning).\n\n선생님에게 물어봤어요: I asked the teacher.\n엄마한테 전화했어요: I called mom.\n\n에: for places/things.\n에게/한테: for people/animals."}},
  {type:"mc",q:"친구랑 같이 가요. (이)랑 is the casual form of:",opts:["하고","에서","의","에"],ans:"하고",hint:"(이)랑  (and/with). More casual"},
  {type:"mc",q:"에게 and 한테 are:",opts:["에게 is for places","Same meaning, 에게 is formal","한테 is for things","Different meanings"],ans:"Same meaning, 에게 is formal",hint:"Two variants of the dative particle: one polished for written or business contexts, one casual for daily speech."},
]},

// ═══ L4: Directions ═══
{id:"kou6l4.1",title:"Directions: Left, Right, Straight",icon:"🧭",xp:18,board:true,steps:[
  {type:"intro",title:"Left, Right, Straight, Nearby",desc:"왼쪽 / 오른쪽\n→ left / right\n\nDirection words for navigation.",goals:["Give and understand basic directions","Use 어디에 있어요? to find places","Know subway exit culture"]},
  {type:"teach",kind:"word",nl:"왼쪽",en:"left",pos:"noun",gender:null,funFact:"Korean nouns don't have plural forms or articles. Context and particles do the job.",phonetic:"oen-jjok",example:"A: 어디로 가요? B: 왼쪽으로 가세요.",exampleEn:"A: Which way do I go? B: Go to the left.",note:"왼쪽: left (side).\n쪽 = side / direction."},
  {type:"teach",kind:"word",nl:"오른쪽",en:"right",pos:"noun",gender:null,funFact:"Korean nouns don't have plural forms or articles. Context and particles do the job.",phonetic:"o-reun-jjok",example:"A: 카페가 어디에 있어요? B: 오른쪽에 있어요.",exampleEn:"A: Where is the cafe? B: It's on the right.",note:"오른쪽: right (side).\n왼쪽 (left) ↔ 오른쪽 (right)."},
  {type:"teach",kind:"word",nl:"직진",en:"straight ahead",pos:"noun",gender:null,funFact:"Sino-Korean compound: 직 (straight) + 진 (advance)",phonetic:"jik-jin",example:"A: 여기에서 어떻게 가요? B: 직진하세요.",exampleEn:"A: How do I go from here? B: Go straight.",note:"직진: straight ahead.\nCOMPOUND: 직 (straight) + 진 (advance)."},
  {type:"mc",q:"오른쪽 means:",opts:["right","left","straight","behind"],ans:"right",hint:"The opposite of 왼쪽. A direction word with 쪽 (side/direction)."},
  {type:"teach",kind:"word",nl:"유턴",en:"U-turn",pos:"noun",gender:null,funFact:"Korean nouns don't have plural forms or articles. Context and particles do the job.",phonetic:"yu-teon",example:"A: 길을 지나쳤어요. B: 여기서 유턴하세요.",exampleEn:"A: I passed the road. B: Make a U-turn here.",note:"유턴: U-turn (Konglish from English)."},
  {type:"teach",kind:"word",nl:"근처",en:"nearby / in the vicinity",pos:"noun",gender:null,funFact:"Korean nouns don't have plural forms or articles. Context and particles do the job.",phonetic:"geun-cheo",example:"A: 여기 근처에 카페가 있어요? B: 네, 역 근처에 있어요.",exampleEn:"A: Is there a cafe nearby? B: Yes, there's one near the station.",note:"근처: nearby area.\n근처에: in the vicinity of.\n",deepDive:{title:"Using 근처",text:"여기 근처에: near here\n학교 근처에: near the school\n역 근처에: near the station\n\n역: (subway/train) station  -  important word!"}},
  {type:"mc",q:"근처 means:",opts:["Far away","Nearby","Inside","Behind"],ans:"Nearby",hint:"근처 = … area / in the vicinity"},
  {type:"teach",kind:"phrase",nl:"어디에 있어요?",en:"Where is it?",pos:"intj",gender:null,funFact:"Set phrases are the fastest way to sound natural. Koreans use fixed expressions constantly.",phonetic:"eo-di-e i-sseo-yo?",example:"A: 화장실이 어디에 있어요? B: 저기 왼쪽에 있어요.",exampleEn:"A: Where is the bathroom? B: Over there on the left.",note:"어디: where (question word).\n어디에 있어요?: 'Where does it exist?'\n= Where is it?",deepDive:{title:"Using 어디에 있어요?",text:"화장실이 어디에 있어요?: Where's the bathroom?\n출구가 어디에 있어요?: Where's the exit?\n지하철역이 어디에 있어요?: Where's the subway station?"}},
  {type:"teach",kind:"word",nl:"역",en:"station (subway/train)",pos:"noun",gender:null,funFact:"Korean nouns don't have plural forms or articles. Context and particles do the job.",phonetic:"yeok",example:"A: 다음 역이 어디예요? B: 서울역이에요.",exampleEn:"A: What's the next station? B: It's Seoul Station.",note:"역: station.\n\n홍대역: Hongdae Station",deepDive:{title:"Using 역",text:"강남역: Gangnam Station\n서울역: Seoul Station\n\n역 근처에: near the station\n몇 번 출구: which numbered exit\n\n번: number counter (for numbering things)."}},
  {type:"tip",title:"🚇 Numbered Exits: Korea's Navigation Secret",text:"Every Korean subway station has NUMBERED EXITS.\n\n출구: exit (출=out + 구=opening/mouth)\n1번 출구, 2번 출구, 3번 출구...\n\nWhy this matters:",deepDive:{title:"Navigating by Exit Number",text:"Koreans give ALL directions by exit number.\n\n'3번 출구로 나오세요.\n→ Please come out exit 3.\n\n홍대역 9번 출구 앞에서 만나요.\n→ Let's meet in front of Hongdae Station exit 9.\n\nPractical use:\n• Save the exit number, not just the station\n• Landmarks are always described by exit number\n• Meeting spots are '역 X번 출구 앞' (in front of exit X)"}},
  {type:"mc",q:"쪽 in 왼쪽/오른쪽 means:",opts:["Turn / rotate","Hand / palm","Side / direction","Road / street"],ans:"Side / direction",hint:"쪽 = …/… suffix. 이쪽, 앞쪽, 뒤쪽 all use it."},
  {type:"mc",q:"'Where is the bathroom?' in Korean:",opts:["화장실이 뭐예요?","화장실에서 있어요?","화장실을 가요?","화장실이 어디에 있어요?"],ans:"화장실이 어디에 있어요?",hint:"Ask where a specific facility is located using the location-existence question."},
  {type:"mc",q:"직진 = 직 + 진. What does it mean?",opts:["Go straight","Turn left","Slow down","Go back"],ans:"Go straight",hint:"직 (direct, no turning) + 진 (to advance forward)."},
  {type:"mc",q:"Koreans give directions using:",opts:["Street names like America","Numbered subway exits","Building colors","Compass directions"],ans:"Numbered subway exits",hint:"'3번 출구로 나오세요'  -  exit number is the landmark"},
  {type:"fb",s:"지하철역이 ___ 있어요?\n(Where is the subway station?)",a:"어디에",opts:["어디에","어디를","어디서","어디가"],hint:"... 있어요 = where is it? (어디 + location particle 에)"},
  {type:"fb",s:"직진하다가 오른쪽___가세요.\n(Go straight, then go to the right.)",a:"으로",opts:["으로","에","에서","를"],hint:"Vowel ending or consonant ending?"},
  {type:"fb",s:"학교 ___에 카페가 있어요.\n(There's a café ___ the school.)",a:"근처",opts:["근처","뒤쪽","직진","출구"],hint:"... = nearby/vicinity"},
  {type:"match",pairs:[{nl:"왼쪽으로 가세요",en:"go left"},{nl:"직진하세요",en:"go straight"},{nl:"오른쪽으로 가세요",en:"go right"},{nl:"3번 출구",en:"exit number 3"}]},
  {type:"drag_fill",s:"{1}하다가 왼쪽{2} 가세요. 역 {3}에 있어요.",blanks:{"1":"직진","2":"으로","3":"근처"},pool:["직진","오른쪽","으로","에서","근처","앞쪽"],hint:"Go straight, then go left. It's near the station."},
  {type:"mc",q:"Correct way to say 'meet at exit 9':",opts:["역에 만나요","9번에서 만나요","9번 출구 앞에서 만나요","9번에 역을 만나요"],ans:"9번 출구 앞에서 만나요",hint:"Arrange to meet at the front of a specific numbered station exit."},
  // ── A1 GAP FIX: Spatial positions + directional verbs (TOPIK 1 / TTMIK L1 L8) ──
]},

// === Positions: Above, Beside, Between ===
{id:"kou6l4.2",title:"Positions: Above, Beside, Between",icon:"📍",xp:18,board:true,steps:[
  {type:"intro",title:"Where Things Are",desc:"위 / 아래 / 옆\n→ above / below / beside\n\nEight position words.",goals:["Use 위/아래 for above and below","Use 옆/사이 for beside and between","Cross and turn with 건너다 and 돌다"]},
  {type:"teach",kind:"word",nl:"위",en:"above / on top of",pos:"noun",gender:null,funFact:"Korean nouns don't have plural forms or articles. Context and particles do the job.",phonetic:"wi",example:"A: 책이 어디에 있어요? B: 책상 위에 있어요.",exampleEn:"A: Where is the book? B: It's on top of the desk.",note:"위: above, on top.\n위에: on top of / above (+ 에 for location).\n",deepDive:{title:"Using 위",text:"책상 위에: on the desk.\n냉장고 위에: on top of the fridge.\n\n위 ↔ 아래/밑: top ↔ bottom."}},
  {type:"teach",kind:"word",nl:"옆",en:"beside / next to",pos:"noun",gender:null,funFact:"Korean nouns don't have plural forms or articles. Context and particles do the job.",phonetic:"yeop",example:"A: 은행이 어디에 있어요? B: 학교 옆에 있어요.",exampleEn:"A: Where is the bank? B: It's next to the school.",note:"옆: beside, next to.\n옆에: next to / beside.\n",deepDive:{title:"Using 옆",text:"학교 옆에: next to the school.\n내 옆에 앉아요: sit next to me.\n\n방향(direction) vs 위치(position):\n왼쪽으로 가세요 (direction) vs 옆에 있어요 (position)."}},
  {type:"mc",q:"왼쪽 means:",opts:["Left","Right","Straight","Nearby"],ans:"Left",hint:"왼 = …, 오른 = right"},
  {type:"teach",kind:"word",nl:"밖",en:"outside",pos:"noun",gender:null,funFact:"Korean nouns don't have plural forms or articles. Context and particles do the job.",phonetic:"bak",example:"A: 고양이가 어디에 있어요? B: 밖에 있어요.",exampleEn:"A: Where is the cat? B: It's outside.",note:"밖: outside.\n밖에: outside of.\n",deepDive:{title:"Using 밖",text:"안 (inside) ↔ 밖 (outside).\n\n밖에 나가요: go outside.\n문 밖에: outside the door.\n집 밖에: outside the house."}},
  {type:"teach",kind:"word",nl:"사이",en:"between",pos:"noun",gender:null,funFact:"Between A and B (position particle).",phonetic:"sa-i",example:"A: 약국이 어디에 있어요? B: 은행과 카페 사이에 있어요.",exampleEn:"A: Where is the pharmacy? B: It's between the bank and the cafe.",note:"사이: between.\nBetween A and B (position particle).\n",deepDive:{title:"Using 사이",text:"은행과 카페 사이에: between the bank and café.\n\n사이 also means 'relationship':\n우리 사이: our relationship / between us."}},
  {type:"teach",kind:"word",nl:"아래 / 밑",en:"below / under",pos:"noun",gender:null,funFact:"Korean nouns don't have plural forms or articles. Context and particles do the job.",phonetic:"a-rae / mit",example:"A: 가방이 어디에 있어요? B: 책상 아래에 있어요.",exampleEn:"A: Where is the bag? B: It's under the desk.",note:"아래: below, under.\n밑: under (interchangeable).\n\n위 ↔ 아래: above ↔ below.\n책상 아래에 = under the desk."},
  {type:"teach",kind:"word",nl:"앞",en:"front / in front of",pos:"noun",gender:null,funFact:"Korean nouns don't have plural forms or articles. Context and particles do the job.",phonetic:"ap",example:"A: 어디에서 만나요? B: 학교 앞에서 만나요.",exampleEn:"A: Where shall we meet? B: Let's meet in front of the school.",note:"앞: front, in front of.\n앞에: in front of (location).\n앞으로: forward (direction).\n\n앞 ↔ 뒤: front ↔ behind."},
  {type:"teach",kind:"word",nl:"뒤",en:"behind / back",pos:"noun",gender:null,funFact:"Korean nouns don't have plural forms or articles. Context and particles do the job.",phonetic:"dwi",example:"A: 주차장이 어디에 있어요? B: 건물 뒤에 있어요.",exampleEn:"A: Where is the parking lot? B: It's behind the building.",note:"뒤: behind, back.\n뒤에: behind (location).\n뒤로: backward (direction).\n\n앞 ↔ 뒤: front ↔ behind."},
  {type:"mc",q:"책상 아래에 있어요 means:",opts:["It's on the desk","It's under the desk","It's next to the desk","It's behind the desk"],ans:"It's under the desk",hint:"아래 = below/under. 위 ↔ 아래."},
  {type:"tip",title:"📍 The Complete 8-Position Set",text:"위/아래 = above/below, 앞/뒤 = front/behind\n옆/사이 = beside/between, 안/밖 = inside/outside\n\nPattern: noun + position + 에 있어요\n책상 위에 있어요 = It's on the desk.",deepDive:{title:"Position Words in Full Sentences",text:"위 = on top\n아래/밑 = below/under\n앞 = in front\n뒤 = behind\n옆 = beside/next to\n사이 = between\n안 = inside\n밖 = outside\n\nPattern: [reference noun] + position + 에:\n테이블 위에 = on (top of) the table\n가방 안에 = inside the bag\n\nAll use +에 있어요 to say 'is at [position]':\n\n책상 위에 있어요.\n→ It's on top of the desk.\n\n은행 옆에 있어요.\n→ It's next to the bank.\n\n집 밖에 있어요.\n→ It's outside the house."}},
  {type:"teach",kind:"phrase",nl:"건너다 / 건너가다",en:"to cross",pos:"verb",gender:null,funFact:"Korean verbs don't change for person or number. \"I go\" and \"they go\" use the same verb form.",phonetic:"geon-neo-da",example:"A: 여기에서 어떻게 가요? B: 길을 건너세요.",exampleEn:"A: How do I go from here? B: Cross the street.",note:"건너다: to cross.\n건너가다: to go across.\n",deepDive:{title:"Using 건너다 / 건너가다",text:"길을 건너다: cross the road.\n다리를 건너다: cross the bridge.\n횡단보도: crosswalk.\n\n건너세요: please cross (polite command)."}},
  {type:"mc",q:"역 means:",opts:["Exit","Bus stop","Station","Bridge"],ans:"Station",hint:"역 = subway/train …"},
  {type:"teach",kind:"phrase",nl:"돌다 / 돌아가다",en:"to turn",pos:"verb",gender:null,funFact:"Korean verbs don't change for person or number. \"I go\" and \"they go\" use the same verb form.",phonetic:"dol-da",example:"A: 직진해요? B: 아니요, 왼쪽으로 돌아가세요.",exampleEn:"A: Go straight? B: No, turn left.",note:"돌다: to turn.\n돌아가다: to turn and go.\n",deepDive:{title:"Using 돌다 / 돌아가다",text:"왼쪽으로 돌아가세요: turn left.\n오른쪽으로 돌아가세요: turn right.\n\n좌회전/우회전: formal signs.\n돌아가세요 = conversational direction."}},
  {type:"mc",q:"'It's next to the school'  -  correct:",opts:["학교 위에 있어요","학교 밖에 있어요","학교 사이에 있어요","학교 옆에 있어요"],ans:"학교 옆에 있어요",hint:"옆 = beside/next to"},
  {type:"mc",q:"'Between the bank and the café':",opts:["은행과 카페 사이에","은행과 카페 옆에","은행 카페 위에","은행과 카페 밖에"],ans:"은행과 카페 사이에",hint:"Located between two buildings: one for money, one for coffee."},
  {type:"mc",q:"안 ↔ 밖 means:",opts:["Front ↔ Back","Inside ↔ Outside","Left ↔ Right","Above ↔ Below"],ans:"Inside ↔ Outside",hint:"안 = …, 밖 = …"},
  {type:"mc",q:"'Cross the crosswalk'  -  correct verb:",opts:["가세요","돌아가세요","건너세요","내려가세요"],ans:"건너세요",hint:"건너다 = to cross"},
  {type:"fb",s:"책상 ___ 에 책이 있어요.\n(The book is on top of the desk)",a:"위",opts:["위","아래","옆","사이"],hint:"위 = above/on top"},
  {type:"fb",s:"직진하다가 왼쪽으로 ___.\n(Go straight then turn left)",a:"돌아가세요",opts:["돌아가세요","건너세요","가세요","내려가세요"],hint:"돌다/돌아가다 = to turn"},
  {type:"match",pairs:[{nl:"위",en:"above/on top"},{nl:"옆",en:"beside/next to"},{nl:"밖",en:"outside"},{nl:"사이",en:"between"}]},
]},

// ═══ L5: -아/어요 Preview ═══
{id:"kou6l5",title:"★ Verb Review: Contractions + Irregular Seeds",icon:"🔧",xp:25,board:true,steps:[
  {type:"intro",title:"The Full Engine  -  Contractions and What's Coming",desc:"Contraction patterns and a preview of irregular verbs.",goals:["Master all contraction patterns","See every verb class you've used in A1 systematically","Plant seeds for the 5 irregular families","Preview the past tense structure"]},

  {type:"tip",title:"📋 The Complete Contraction Map",text:"When a vowel stem meets -아/어요, contractions happen:\n\nㅏ + 아 → ㅏ (merge)\n가다 → 가요 (go)\n\nㅗ + 아 → ㅘ\n오다 → 와요 (come)\n\nㅜ + 어 → ㅝ\n배우다 → 배워요 (learn)",deepDive:{title:"All Contractions",text:"ㅣ + 어 → ㅕ\n마시다 → 마셔요 (drink)\n\nㅡ drops entirely\n쓰다 → 써요 (write)\n\n하다 → always 해요 (special)\n\nNO CONTRACTION (consonant-ending stems):\n먹다 → 먹어요 (eat)\n있다 → 있어요 (have/exist)\n읽다 → 읽어요 (read)"}},

  {type:"mc",q:"배우다 (to learn)  -  stem 배우, vowel ㅜ. Polite form?",opts:["배워요","배우아요","배우요","배해요"],ans:"배워요",hint:"ㅜ+ㅓ contracts to ㅝ. 배우 + 어요"},

  {type:"mc",q:"쓰다 (to write/use)  -  stem 쓰, vowel ㅡ. Polite form?",opts:["쓰어요","써요","쓰아요","쓰요"],ans:"써요",hint:"ㅡ drops when followed by a vowel ending. 쓰 + 어요"},

  {type:"mc",q:"읽다 (to read)  -  stem 읽, consonant. Polite form?",opts:["읽아요","읽요","읽어요","읽해요"],ans:"읽어요",hint:"Dark vowel ㅣ in stem → 어요. No contraction."},

  {type:"tip",title:"⚡ The 5 Irregular Families: Preview",text:"Most Korean verbs are completely regular.\nBut 5 families behave differently when vowel endings attach.\n\nㄷ-irregular: ㄷ → ㄹ\n걷다 → 걸어요 (walk), 듣다 → 들어요 (listen)\n\nㅂ-irregular: ㅂ → 우\n덥다 → 더워요 (hot), 춥다 → 추워요 (cold)",deepDive:{title:"The Other 3 Families + Why They Exist",text:"ㅅ-irregular: ㅅ drops\n낫다 → 나아요 (get better)\n\n르-irregular: 르 doubles ㄹ\n모르다 → 몰라요 (not know)\n부르다 → 불러요 (call)\n\nㅎ-irregular: ㅎ drops/transforms\n빨갛다 → 빨개요 (red)\n하얗다 → 하얘요 (white)\n\nKorean irregulars are historical sound fossils.\nㄷ: in old Korean, ㄷ softened to ㄹ before vowels.\nㅂ: was originally like English 'v', weakened to 우.\n\nYou've seen some already. Full lessons on each family come later."}},

  {type:"mc",q:"덥다 (hot) is a ㅂ-irregular. Its polite form is:",opts:["덥어요","덥해요","덥아요","더워요"],ans:"더워요",hint:"ㅂ-irregular: ㅂ"},

  {type:"mc",q:"모르다 (not know) is a 르-irregular. Its polite form is:",opts:["몰라요","모르아요","모르어요","모르해요"],ans:"몰라요",hint:"르-irregular: 르"},

  {type:"teach",kind:"grammar",nl:"과거 시제 미리보기",en:"Adding the past tense car",pos:"part",gender:null,funFact:"Korean particles attach after nouns to mark their role. No equivalent in English.",phonetic:"",example:"A: 어제 뭐 했어요? B: 밥을 먹었어요.",exampleEn:"A: What did you do yesterday? B: I ate a meal.",note:"The past tense adds ONE car between the stem and -요:\n\n가다 → 갔어요 (bright ㅏ → 았어요)",deepDive:{title:"과거 시제 미리보기",text:"먹다 → 먹었어요 (dark ㅓ → 었어요)\n하다 → 했어요 (always)\n\n⚡ Same vowel harmony rule applies to past!\nBright stem → -았어요\nDark stem → -었어요\n하다 → 했어요 (did)\n\nThis is later. You're ready. Just notice the pattern now."}},

  {type:"mc",q:"먹다 (dark vowel)  -  past tense form:",opts:["먹았어요","먹었어요","먹해요","먹다했어요"],ans:"먹었어요",hint:"Check: does the word end in a vowel or consonant?"},

  {type:"mc",q:"가다 (bright vowel ㅏ)  -  past tense form:",opts:["가었어요","가았어요","갔어요","가했어요"],ans:"갔어요",hint:"Check: does the word end in a vowel or consonant?"},

  {type:"mc",q:"하다  -  past tense form:",opts:["하았어요","하었어요","하했어요","했어요"],ans:"했어요",hint:"하다 always: 해요 (present), ... (past). Special contraction."},

  {type:"match",pairs:[{nl:"가다",en:"go"},{nl:"먹다",en:"eat"},{nl:"하다",en:"do"},{nl:"오다",en:"come"}]},

  {type:"tip",title:"🎓 A1 Verb Graduation",text:"You leave A1 knowing:\n\n🚂 Stem + ending = every Korean verb\n⚡ Bright (ㅏ/ㅗ) → -아요 / Dark → -어요\n🎙️ 해요체 = your register",deepDive:{title:"What You Take Into A2",text:"📋 All contraction patterns\n🌱 5 irregular families (to be explained in A2)\n\n⏰ Past tense preview: -았/었어요\n\nThe past tense gets its own lesson later.\nYou already know the engine. You just need the new car.\n\nWelcome to A2."}},
  {type:"tip",title:"📚 Core Verbs: Fuel for the Engine",text:"These verbs appear everywhere in Korean.\nYou need them before Past tense gets its own lesson later.\n\nAll follow rules you already know.",deepDive:{title:"Why These Verbs Now",text:"Past tense gets its own lesson later.\nEvery verb below reappears there.\nKnow the present → the past is automatic.\nNo new rules. Just new fuel."}},
  {type:"teach",kind:"grammar",nl:"읽다 → 읽어요",en:"to read → reads",pos:"verb",gender:null,funFact:"The polite informal ending. Used in ~80% of daily Korean conversation. Safe with almost everyone.",phonetic:"ik-da → il-geo-yo",example:"A: 뭐 해요? B: 책을 읽어요.",exampleEn:"A: What are you doing? B: I'm reading a book.",note:"읽다: to read.\n\n읽다 → 읽어요\n→ Dark vowel ㅣ in stem → takes -어요.",deepDive:{title:"Pronunciation Note",text:"읽다 is pronounced [익따]. The ㄹ is silent.\n읽어요 is pronounced [일거요]. The ㄹ reappears before a vowel.\n\nThis is 연음 (liaison). Spelling stays the same."}},
  {type:"teach",kind:"grammar",nl:"쓰다 → 써요 (write/use)",en:"to write / to use → writes / uses",pos:"part",gender:null,funFact:"Korean particles attach after nouns to mark their role. No equivalent in English.",phonetic:"sseu-da → sseo-yo",example:"A: 지금 뭐 해요? B: 편지를 써요.",exampleEn:"A: What are you doing now? B: I'm writing a letter.",note:"쓰다: to write OR to use.\n\n쓰다 → 써요\n→ ㅡ drops, -어요 attaches.",deepDive:{title:"Two Meanings of 쓰다",text:"쓰다 (to write):\n편지를 써요 = I write a letter.\n이름을 써요 = I write a name.\n\n쓰다 (to use):\n이거 써요 = I use this.\n한국어를 써요 = I use Korean.\n\nContext makes it clear."}},
  {type:"teach",kind:"phrase",nl:"일하다 → 일해요",en:"to work → works",pos:"verb",gender:null,funFact:"Compound word: 일 (work) + 하다 (do).",phonetic:"il-ha-da → il-hae-yo",example:"A: 어디에서 일해요? B: 회사에서 일해요.",exampleEn:"A: Where do you work? B: I work at a company.",note:"일하다: to work.\n하다 compound: 일 (work) + 하다 (do).\n\n일하다 → 일해요 (always 해요).",deepDive:{title:"일 = Work",text:"일하다 = to work (noun + 하다).\nSame pattern as 공부하다, 운동하다.\n\n회사에서 일해요: I work at a company.\n매일 일해요: I work every day.\n\n일 also means 'day' and 'one' in different contexts."}},
  {type:"teach",kind:"grammar",nl:"주다 → 줘요",en:"to give → gives",pos:"part",gender:null,funFact:"Korean particles attach after nouns to mark their role. No equivalent in English.",phonetic:"ju-da → jweo-yo",example:"A: 누구한테 줘요? B: 친구한테 선물을 줘요.",exampleEn:"A: Who are you giving it to? B: I'm giving a gift to my friend.",note:"주다: to give.\n\n주다 → 줘요\n→ ㅜ + 어 = ㅝ contraction.",deepDive:{title:"주다 in Patterns",text:"주다 alone = to give:\n물 좀 줘요 = give me some water\n\n-아/어 주다 = do FOR someone:\n읽어 줘요 = read it for me\n도와줘요 = help me\n\n⚡ -아/어 주다 (doing-for-someone) gets its own lesson later."}},
  {type:"mc",q:"일하다 → polite present:",opts:["일해요","일하아요","일하여요","일해아요"],ans:"일해요",hint:"하다 compounds always → 해요"},
  {type:"fb",s:"매일 책을 ___.\n(I read a book every day.)",a:"읽어요",opts:["읽어요","읽아요","읽해요","읽요"],hint:"읽다: dark vowel ㅣ → takes -어요."},
  {type:"teach",kind:"grammar",nl:"자다 → 자요",en:"to sleep → sleeps",pos:"part",gender:null,funFact:"Korean particles attach after nouns to mark their role. No equivalent in English.",phonetic:"ja-da → ja-yo",example:"A: 보통 몇 시에 자요? B: 11시에 자요.",exampleEn:"A: What time do you usually sleep? B: I sleep at 11.",note:"자다: to sleep.\n\n자다 → 자요\n→ Bright ㅏ merges with -아요.",deepDive:{title:"Sleep Vocabulary",text:"자다 → 자요: to sleep\n일어나다 → 일어나요: to wake up\n졸리다 → 졸려요: to be sleepy\n\n잘 자요! = Good night!\n잘 잤어요? = Did you sleep well?"}},
  {type:"teach",kind:"grammar",nl:"앉다 → 앉아요",en:"to sit → sits",pos:"verb",gender:null,funFact:"The polite informal ending. Used in ~80% of daily Korean conversation. Safe with almost everyone.",phonetic:"an-da → an-ja-yo",example:"A: 어디에 앉아요? B: 여기 앉아요.",exampleEn:"A: Where do I sit? B: Sit here.",note:"앉다: to sit.\n\n앉다 → 앉아요\n→ Bright ㅏ in stem → takes -아요.",deepDive:{title:"앉다 Pronunciation",text:"앉다 (to sit) = [안따]. 앉아요 (sit, polite) = [안자요].\n\n여기 앉으세요 = please sit here.\nOpposite: 서다 → 서요 (to stand)."}},
  {type:"teach",kind:"grammar",nl:"입다 → 입어요",en:"to wear (clothes) → wears",pos:"verb",gender:null,funFact:"The polite informal ending. Used in ~80% of daily Korean conversation. Safe with almost everyone.",phonetic:"ip-da → i-beo-yo",example:"A: 오늘 뭐 입어요? B: 티셔츠를 입어요.",exampleEn:"A: What are you wearing today? B: I'm wearing a T-shirt.",note:"입다: to wear (clothes).\n\n입다 → 입어요\n→ Dark vowel ㅣ → takes -어요.",deepDive:{title:"Korean 'Wear' Verbs",text:"Korean has DIFFERENT verbs for different items:\n입다: clothes (shirts, pants)\n신다: shoes/socks (feet)\n쓰다: hats/glasses (head)\n끼다: gloves/rings (hands)\n하다: accessories (ties, scarves)\n\nEnglish uses one 'wear' for everything.\nKorean specifies WHERE on the body."}},
  {type:"match",pairs:[{nl:"읽다 → 읽어요",en:"to read"},{nl:"쓰다 → 써요",en:"to write/use"},{nl:"자다 → 자요",en:"to sleep"},{nl:"입다 → 입어요",en:"to wear"}]},
  {type:"mc",q:"주다 → polite present:",opts:["주아요","줘요","주어요","줘아요"],ans:"줘요",hint:"ㅜ + 어 contracts to ㅝ"},
]},

// ═══ L6: Weather + preview ═══
{id:"kou6l6",title:"Weather Talk",icon:"🌤️",xp:20,board:true,steps:[
  {type:"intro",title:"Hot, Cold, and Irregular Weather Words",desc:"Weather vocabulary. Several key words are irregular.",goals:["Say hot, cold, sunny, rainy, cloudy","Recognise ㅂ-irregular weather verbs","Use 날씨가 어때요? (How's the weather?)"]},
  {type:"teach",kind:"grammar",nl:"날씨",en:"weather",pos:"part",gender:null,funFact:"Korean particles attach after nouns to mark their role. No equivalent in English.",phonetic:"nal-ssi",example:"A: 오늘 날씨가 어때요? B: 맑아요!",exampleEn:"A: How's the weather today? B: It's clear!",note:"날씨: weather.\n날: day/weather. 씨: suffix.\n",deepDive:{title:"Full Pattern",text:"날씨가 어때요?: How's the weather?\n어때요?: 'How is it?'  -  very useful question pattern."}},
  {type:"teach",kind:"grammar",nl:"덥다 → 더워요",en:"to be hot (weather) → it's hot",pos:"part",gender:null,funFact:"Korean particles attach after nouns to mark their role. No equivalent in English.",phonetic:"deop-da → deo-wo-yo",example:"A: 밖에 더워요? B: 네, 오늘 너무 더워요.",exampleEn:"A: Is it hot outside? B: Yes, it's really hot today.",note:"덥다 → 더워요 (ㅂ-irregular).\nNOT the expected form. Irregular change applies.\nFull pattern in a later lesson.",deepDive:{title:"ㅂ-Irregular Weather Words",text:"덥다 → 더워요 (hot)\n춥다 → 추워요 (cold)\n\nSame ㅂ→워 pattern in both.\nJust remember: 더워요, 추워요."}},
  {type:"teach",kind:"grammar",nl:"춥다 → 추워요",en:"to be cold (weather) → it's cold",pos:"part",gender:null,funFact:"Korean particles attach after nouns to mark their role. No equivalent in English.",phonetic:"chup-da → chu-wo-yo",example:"A: 겨울에 추워요? B: 네, 너무 추워요.",exampleEn:"A: Is it cold in winter? B: Yes, it's very cold.",note:"춥다 → 추워요 (ㅂ-irregular).\nNOT the expected regular form. Same irregular pattern.",deepDive:{title:"Seasons in Korean",text:"봄\n→ spring\n\n여름\n→ summer\n\n가을\n→ autumn\n\n겨울\n→ winter\n\n여름에 더워요: It's hot in summer.\n겨울에 추워요: It's cold in winter."}},
  {type:"mc",q:"오늘 날씨가 어때요?  -  날씨 means:",opts:["Weather","Temperature","Season","Wind"],ans:"Weather",hint:"날씨 = …. 어때요? = How is it?"},
  {type:"teach",kind:"grammar",nl:"맑다 → 맑아요",en:"to be clear/sunny → it's clear",pos:"verb",gender:null,funFact:"The polite informal ending. Used in ~80% of daily Korean conversation. Safe with almost everyone.",phonetic:"mak-da → mal-ga-yo",example:"A: 오늘 날씨가 어때요? B: 날씨가 맑아요.",exampleEn:"A: How's the weather today? B: The weather is clear.",note:"맑다: clear, sunny.\n맑아요: regular! (no irregular change)\n",deepDive:{title:"How to be clear/sunny Works",text:"날씨가 맑아요: the weather is clear\n하늘이 맑아요: the sky is clear\n\n하늘: sky. 하늘색: sky-blue (하늘 + 색)."}},
  {type:"teach",kind:"phrase",nl:"비가 와요",en:"it's raining",pos:"intj",gender:null,funFact:"Korean thinks of rain, snow as 'coming':.",phonetic:"bi-ga wa-yo",example:"A: 밖에 비가 와요? B: 네, 비가 많이 와요.",exampleEn:"A: Is it raining outside? B: Yes, it's raining a lot.",note:"비: rain.\n와요: comes. 비가 오다 literally means rain comes.\n",deepDive:{title:"Using 비가 와요",text:"Korean thinks of rain, snow as 'coming':\n비가 와요: rain comes = it rains\n눈이 와요: snow comes = it snows\n\n비가 많이 와요: it rains a lot\n비가 조금 와요: it rains a little"}},
  {type:"teach",kind:"grammar",nl:"흐리다 → 흐려요",en:"to be cloudy → it's cloudy",pos:"part",gender:null,funFact:"Korean particles attach after nouns to mark their role. No equivalent in English.",phonetic:"heu-ri-da → heu-ryeo-yo",example:"A: 날씨가 좋아요? B: 아니요, 오늘 흐려요.",exampleEn:"A: Is the weather nice? B: No, it's cloudy today.",note:"흐리다: cloudy.\n흐려요: it's cloudy (이 + 어 → 여 contraction).\n",deepDive:{title:"Full Pattern",text:"Same pattern you saw with 마시다 → 마셔요.\n이 + 어 → 여 (vowel contraction)\n\n맑음: clear (weather forecast)\n흐림: cloudy (weather forecast)\n비: rain (weather forecast)"}},
  {type:"mc",q:"덥다 → 더워요 means:",opts:["It is cold","It is hot","It is raining","It is cloudy"],ans:"It is hot",hint:"덥다 = … (weather) → 더워요"},
  {type:"mc",q:"'It's hot' in Korean (correct form):",opts:["덥어요","덥요","더워요","더워다"],ans:"더워요",hint:"덥다 is ㅂ-irregular. ㅂ becomes 우 before vowel endings."},
  {type:"mc",q:"'It's raining' in Korean:",opts:["비가 해요","비가 있어요","비가 내려요","비가 와요"],ans:"비가 와요",hint:"In Korean, precipitation uses a movement verb. It 'comes' rather than 'falls.'"},
  {type:"mc",q:"날씨가 어때요? means:",opts:["What's the weather?","Where is the weather?","The weather is good","What season is it?"],ans:"What's the weather?",hint:"어때요 = how is it? 날씨 = …"},
  {type:"mc",q:"춥다 → 추워요 is an example of:",opts:["Regular conjugation pattern","ㅂ-irregular (ㅂ becomes 워)","르-irregular pattern type","으-irregular pattern type"],ans:"ㅂ-irregular (ㅂ becomes 워)",hint:"Look at which consonant transforms in 춥 → 추우 before the polite ending attaches."},
  {type:"fb",s:"오늘 날씨가 ___. 비가 와요.\n(It's cloudy today. It's raining.)",a:"흐려요",opts:["흐려요","흐리어요","맑아요","더워요"],hint:"흐리다 → ... (이 + 어 → 여)"},
  {type:"fb",s:"여름에 ___, 겨울에 추워요.\n(In summer it's hot, in winter it's cold)",a:"더워요",opts:["더워요","덥어요","덥요","더위요"],hint:"덥다 is ㅂ-irregular. ㅂ becomes 우 before vowel endings."},
  {type:"match",pairs:[{nl:"더워요",en:"it's hot"},{nl:"추워요",en:"it's cold"},{nl:"맑아요",en:"it's clear/sunny"},{nl:"비가 와요",en:"it's raining"}]},
  {type:"drag_fill",s:"오늘 날씨가 {1}. {2}가 {3}.",blanks:{"1":"흐려요","2":"비","3":"와요"},pool:["더워요","흐려요","비","눈","와요","있어요"],hint:"It's cloudy today. It's raining."},
  {type:"mc",q:"눈이 와요 means:",opts:["It's sunny","It's raining","It's snowing","The sky is clear"],ans:"It's snowing",hint:"눈: snow. 눈이 오다 = snow comes = it snows. Same pattern as 비가 와요."},
  {type:"mc",q:"하늘색 = 하늘 + 색. 색 means:",opts:["Sky","Clear","Cloud","Color"],ans:"Color",hint:"하늘 = sky. 색 (色) is the general visual-hue morpheme, pair it with a noun to name the shade."},

  {type:"teach",kind:"grammar",nl:"마다",en:"every / each",pos:"part",gender:null,funFact:"Means \"every.\" 매일마다 is redundant. Just 매일 or 날마다.",phonetic:"ma-da",example:"A: 자주 운동해요? B: 네, 날마다 운동해요.",exampleEn:"A: Do you exercise often? B: Yes, I exercise every day.",note:"마다: every / each.\n\n날마다: every day (= 매일).",deepDive:{title:"마다",text:"주마다: every week.\n사람마다: every person / each person.\n\n매일 vs 날마다: same meaning.\n매 (每: every) is Sino-Korean.\n마다 is pure Korean particle."}},
  {type:"teach",kind:"word",nl:"아주",en:"very / extremely",pos:"noun",gender:null,funFact:"From hanja: 兒 (child) + 主 (master/main).",phonetic:"a-ju",example:"A: 이 음식이 맛있어요? B: 네, 아주 맛있어요!",exampleEn:"A: Is this food tasty? B: Yes, it's very tasty!",note:"아주: very, extremely.\n\n아주 좋아요: very good.",deepDive:{title:"Using 아주",text:"아주 맛있어요: very delicious.\n\n아주 vs 너무 vs 정말:\n아주: very (neutral emphasis)\n너무: too much (can be positive or negative)\n정말: really (emphasis on truth)"}},
  {type:"teach",kind:"word",nl:"바람",en:"wind",pos:"noun",gender:null,funFact:"Korean nouns don't have plural forms or articles. Context and particles do the job.",phonetic:"ba-ram",example:"A: 밖에 바람이 불어요? B: 네, 바람이 많이 불어요.",exampleEn:"A: Is the wind blowing outside? B: Yes, the wind is blowing a lot.",note:"바람: wind.\n바람이 세요 means the wind is strong."},
  {type:"teach",kind:"word",nl:"산",en:"mountain",pos:"noun",gender:null,funFact:"Korean nouns don't have plural forms or articles. Context and particles do the job.",phonetic:"san",example:"A: 주말에 뭐 해요? B: 산에 가요.",exampleEn:"A: What are you doing this weekend? B: I'm going to the mountain.",note:"산: mountain.\n한라산 = Hallasan (Jeju's famous mountain)."},
  {type:"teach",kind:"word",nl:"바다",en:"sea / ocean",pos:"noun",gender:null,funFact:"Korean nouns don't have plural forms or articles. Context and particles do the job.",phonetic:"ba-da",example:"A: 산이 좋아요, 바다가 좋아요? B: 바다가 좋아요!",exampleEn:"A: Do you like the mountain or the sea? B: I like the sea!",note:"바다: sea / ocean.\n부산 바다 = Busan's famous beaches."},
  {type:"mc",q:"비가 와요 means:",opts:["It is raining","It is snowing","It is sunny","It is windy"],ans:"It is raining",hint:"비 = precipitation from clouds. 오다 = to come. Together: drops are arriving."},
  {type:"mc",q:"날마다 = 매일. 마다 means:",opts:["Only","Every/each","Also","But"],ans:"Every/each",hint:"마다 = …/each. 날마다 = … day."},
  {type:"mc",q:"아주 좋아요 means:",opts:["Not good","A little good","Very good","Too good"],ans:"Very good",hint:"아주 = very/extremely."},
]},

// ═══ L6b: Clothing Vocabulary ═══
{id:"kou6l6b",title:"옷 (Clothing)",icon:"👔",xp:20,board:true,steps:[
  {type:"intro",title:"Korean Clothing Vocabulary",desc:"셔츠, 모자, 양말, 가방...\n\nKorean uses DIFFERENT verbs for wearing different items!\n입다: clothes\n신다: shoes/socks\n쓰다: hats\n끼다: gloves/rings",goals:["Learn 15+ clothing items","Use the correct 'wear' verb for each","Describe what people are wearing"]},
  {type:"tip",title:"Five 'Wear' Verbs",text:"입다: clothes on torso (shirts, pants, dresses)\n신다: footwear (shoes, socks, boots)\n쓰다: headwear (hats, caps, glasses)\n끼다: hand items (gloves, rings)\n하다: accessories (ties, scarves, earrings)\n\nThis lesson teaches clothing items AND which verb goes with each.",deepDive:{title:"Why Five Verbs?",text:"Korean cares about WHERE on the body:\nTorso = 입다\nFeet = 신다\nHead = 쓰다\nHands = 끼다\nAccessories = 하다\n\nEnglish just says 'wear' for everything."}},
  {type:"teach",kind:"word",nl:"셔츠",en:"shirt",pos:"noun",gender:null,funFact:"Use 입다 (torso verb).",phonetic:"syeo-cheu",example:"A: 오늘 뭐 입어요? B: 하얀 셔츠를 입어요.",exampleEn:"A: What are you wearing today? B: I'm wearing a white shirt.",note:"셔츠: shirt (from English).\nUse 입다 (torso verb)."},
  {type:"teach",kind:"word",nl:"모자",en:"hat / cap",pos:"noun",gender:null,funFact:"Use 쓰다 (head verb).",phonetic:"mo-ja",example:"A: 밖에 해가 강해요. B: 모자를 쓰세요!",exampleEn:"A: The sun is strong outside. B: Wear a hat!",note:"모자: hat/cap.\nUse 쓰다 (head verb).\n\n쓰다 has THREE meanings:\n1. to write\n2. to use\n3. to wear (on head)"},
  {type:"teach",kind:"word",nl:"양말",en:"socks",pos:"noun",gender:null,funFact:"From hanja: 洋 (ocean) + 末 (end).",phonetic:"yang-mal",example:"A: 양말을 신었어요? B: 네, 하얀 양말을 신었어요.",exampleEn:"A: Did you put on socks? B: Yes, I put on white socks.",note:"양말: socks.\nUse 신다 (feet verb)."},
  {type:"teach",kind:"word",nl:"코트",en:"coat",pos:"noun",gender:null,funFact:"Use 입다 (torso verb).",phonetic:"ko-teu",example:"A: 밖에 추워요. B: 코트를 입으세요.",exampleEn:"A: It's cold outside. B: Put on a coat.",note:"코트: coat (from English).\nUse 입다 (torso verb)."},
  {type:"mc",q:"모자를 ___요.\n(I wear a hat.)",opts:["써","쓸","입어","신어"],ans:"써",hint:"Hat goes on your head. Head verb = 쓰다 → 써요"},
  {type:"teach",kind:"word",nl:"재킷",en:"jacket",pos:"noun",gender:null,funFact:"Use 입다 (torso verb).",phonetic:"jae-kit",example:"A: 재킷 색깔이 예뻐요! B: 감사합니다. 새 재킷이에요.",exampleEn:"A: Your jacket color is pretty! B: Thank you. It's a new jacket.",note:"재킷: jacket (from English).\nUse 입다 (torso verb)."},
  {type:"teach",kind:"word",nl:"스웨터",en:"sweater",pos:"noun",gender:null,funFact:"Use 입다 (torso verb).",phonetic:"seu-we-teo",example:"A: 오늘 좀 쌀쌀해요. B: 스웨터를 입으세요.",exampleEn:"A: It's a bit chilly today. B: Wear a sweater.",note:"스웨터: sweater (from English).\nUse 입다 (torso verb)."},
  {type:"teach",kind:"word",nl:"원피스",en:"dress",pos:"noun",gender:null,funFact:"Loanword from English \"dress.\" Korean adapted it using Hangul phonetics.",phonetic:"won-pi-seu",example:"A: 원피스를 입었어요? B: 네, 파란 원피스예요.",exampleEn:"A: Are you wearing a dress? B: Yes, it's a blue dress.",note:"원피스: dress (from English 'one-piece').\nUse 입다 (torso verb)."},
  {type:"mc",q:"양말을 ___요.\n(I put on socks.)",opts:["입어","신어","써","끼"],ans:"신어",hint:"Put on footwear using the verb specifically for items worn on the feet."},
  {type:"teach",kind:"word",nl:"목도리",en:"scarf / muffler",pos:"noun",gender:null,funFact:"Use 하다 (accessory verb).",phonetic:"mok-do-ri",example:"A: 목도리를 해요? B: 네, 겨울에 항상 해요.",exampleEn:"A: Do you wear a scarf? B: Yes, I always wear one in winter.",note:"목도리: scarf/muffler.\n목(neck) + 도리(wrap).\nUse 하다 (accessory verb)."},
  {type:"teach",kind:"word",nl:"장갑",en:"gloves",pos:"noun",gender:null,funFact:"Use 끼다 (hand verb).",phonetic:"jang-gap",example:"A: 손이 차가워요! B: 장갑을 끼세요.",exampleEn:"A: My hands are cold! B: Put on gloves.",note:"장갑: gloves.\nUse 끼다 (hand verb)."},
  {type:"teach",kind:"word",nl:"가방",en:"bag",pos:"noun",gender:null,funFact:"From hanja: 家 (home/house) + 房 (room).",phonetic:"ga-bang",example:"A: 가방이 무거워요? B: 네, 책이 많아요.",exampleEn:"A: Is your bag heavy? B: Yes, there are many books.",note:"가방: bag/backpack.\nCommon compound: 책가방 (book bag)."},
  {type:"mc",q:"장갑을 ___요.\n(I put on gloves.)",opts:["입어","써","끼","신어"],ans:"끼",hint:"Gloves go on your hands. Hand verb = 끼다"},
  {type:"teach",kind:"word",nl:"안경",en:"glasses",pos:"noun",gender:null,funFact:"Sino-Korean compound: 안(eye/眼) + 경(mirror/鏡)",phonetic:"an-gyeong",example:"A: 안경을 써요? B: 네, 눈이 나빠요.",exampleEn:"A: Do you wear glasses? B: Yes, my eyesight is bad.",note:"안경: glasses.\nCOMPOUND: 안(eye/眼) + 경(mirror/鏡).\nUse 쓰다 (head verb)."},
  {type:"teach",kind:"word",nl:"구두",en:"dress shoes / formal shoes",pos:"noun",gender:null,funFact:"Use 신다 (feet verb).",phonetic:"gu-du",example:"A: 구두를 신어요? B: 네, 회사에 갈 때 신어요.",exampleEn:"A: Do you wear dress shoes? B: Yes, when I go to the office.",note:"구두: formal/dress shoes.\nUse 신다 (feet verb)."},
  {type:"teach",kind:"word",nl:"운동화",en:"sneakers / athletic shoes",pos:"noun",gender:null,funFact:"Sino-Korean compound: 운동(exercise) + 화(shoes)",phonetic:"un-dong-hwa",example:"A: 운동화를 좋아해요? B: 네, 편해요.",exampleEn:"A: Do you like sneakers? B: Yes, they're comfortable.",note:"운동화: sneakers/athletic shoes.\nCOMPOUND: 운동(exercise) + 화(shoes).\nUse 신다 (feet verb)."},
  {type:"fb",s:"추워요. ___를 입으세요.\n(It's cold. Put on a coat.)",a:"코트",opts:["코트","모자","양말","안경"],hint:"A coat covers your torso against the cold"},
  {type:"fb",s:"눈이 나빠요. ___을 쓰세요.\n(My eyesight is bad. Wear glasses.)",a:"안경",opts:["안경","모자","장갑","목도리"],hint:"Something you put on your face to see better"},
  {type:"match",pairs:[{nl:"셔츠 → 입다",en:"shirt → torso verb"},{nl:"모자 → 쓰다",en:"hat → head verb"},{nl:"양말 → 신다",en:"socks → feet verb"},{nl:"장갑 → 끼다",en:"gloves → hand verb"}]},
  {type:"match",pairs:[{nl:"구두",en:"dress shoes"},{nl:"운동화",en:"sneakers"},{nl:"원피스",en:"dress"},{nl:"목도리",en:"scarf"}]},
  {type:"drag_fill",s:"겨울에 {1}를 입고, {2}을 끼고, {3}를 해요.",blanks:{"1":"코트","2":"장갑","3":"목도리"},pool:["코트","장갑","목도리","모자","양말"],hint:"In winter: coat (torso), gloves (hands), scarf (accessory)"},
  {type:"mc",q:"Which verb goes with 안경?",opts:["끼다 (hand verb)","입다 (torso verb)","신다 (feet verb)","쓰다 (head verb)"],ans:"쓰다 (head verb)",hint:"Glasses rest on the face near the eyes. Which option covers items worn above the neck?"},
]},

// ═══════════════════════════════════════════════════
// LESSON: More Clothing (kou6l6c). Unit 6, A1.2
// Teaches: 바지, 티셔츠, 청바지, 반바지, 부츠, 벨트/허리띠, 넥타이, 정장
// ═══════════════════════════════════════════════════
{id:"kou6l6c",title:"옷 더 배우기 (More Clothing)",icon:"👗",xp:20,board:true,steps:[
  {type:"intro",title:"Expanding Your Wardrobe Vocabulary",desc:"바지, 티셔츠, 청바지...\n\nMore clothing items, including Konglish words and native Korean words.",goals:["Learn 8 more clothing items","Spot Konglish (English loan) words","Use the correct wear verbs from the previous lesson","Describe outfits"]},
  {type:"tip",title:"Konglish vs Native Korean Clothing Words",text:"Many Korean clothing words come from English:\n\n티셔츠 (T-shirt) from 'T-shirt'\n부츠 (boots) from 'boots'\n벨트 (belt) from 'belt'\n\nBut key items are native Korean:\n바지: pants (pure Korean)\n청바지: jeans (청 blue + 바지 pants)\n정장: formal suit (Sino-Korean)\n\nKonglish words use Korean pronunciation rules.",deepDive:{title:"How Konglish Works",text:"English sounds are adapted to Korean syllable rules:\n\nboot → 부츠 (bu-cheu)\nbelt → 벨트 (bel-teu)\nT-shirt → 티셔츠 (ti-syeo-cheu)\n\nKorean syllables always end in a consonant or vowel.\nNo consonant clusters like 'lts' in 'belts'.\nSo extra vowels are added: 벨트 (bel-teu)."}},
  {type:"teach",kind:"word",nl:"바지",en:"pants / trousers",pos:"noun",gender:null,funFact:"Use 입다 (torso/body verb).",phonetic:"ba-ji",example:"A: 오늘 뭐 입어요? B: 검은 바지를 입어요.",exampleEn:"A: What are you wearing today? B: I'm wearing black pants.",note:"바지: pants (pure Korean).\nUse 입다 (torso/body verb).\n검은 바지 = black pants."},
  {type:"teach",kind:"word",nl:"티셔츠",en:"T-shirt",pos:"noun",gender:null,funFact:"Use 입다 (torso verb).",phonetic:"ti-syeo-cheu",example:"A: 여름에 뭐 입어요? B: 보통 티셔츠를 입어요.",exampleEn:"A: What do you wear in summer? B: I usually wear T-shirts.",note:"티셔츠: T-shirt (Konglish).\nUse 입다 (torso verb).\n하얀 티셔츠 = white T-shirt."},
  {type:"teach",kind:"word",nl:"청바지",en:"jeans",pos:"noun",gender:null,funFact:"Sino-Korean compound: 청(blue) + 바지(pants)",phonetic:"cheong-ba-ji",example:"A: 청바지를 자주 입어요? B: 네, 매일 입어요!",exampleEn:"A: Do you wear jeans often? B: Yes, I wear them every day!",note:"청바지: jeans.\nCOMPOUND: 청(blue) + 바지(pants).\nBlue pants = jeans."},
  {type:"mc",q:"청바지 = 청 + 바지. 청 means:",opts:["blue","cloth","long","cotton"],ans:"blue",hint:"청 is a Sino-Korean character meaning …/green. … + pants = jeans."},
  {type:"teach",kind:"word",nl:"반바지",en:"shorts",pos:"noun",gender:null,funFact:"Sino-Korean compound: 반(half) + 바지(pants)",phonetic:"ban-ba-ji",example:"A: 여름에 반바지를 입어요? B: 네, 더울 때 반바지를 입어요.",exampleEn:"A: Do you wear shorts in summer? B: Yes, I wear shorts when it's hot.",note:"반바지: shorts.\nCOMPOUND: 반(half) + 바지(pants).\nHalf-pants = shorts."},
  {type:"teach",kind:"word",nl:"부츠",en:"boots",pos:"noun",gender:null,funFact:"Use 신다 (feet verb).",phonetic:"bu-cheu",example:"A: 비가 와요! B: 부츠를 신으세요.",exampleEn:"A: It's raining! B: Wear boots.",note:"부츠: boots (Konglish).\nUse 신다 (feet verb).\n겨울 부츠 = winter boots."},
  {type:"mc",q:"부츠를 ___요.\n(I wear boots.)",opts:["입어","신어","써","끼"],ans:"신어",hint:"Boots go on your feet. Which verb is for footwear?"},
  {type:"teach",kind:"word",nl:"벨트 / 허리띠",en:"belt",pos:"noun",gender:null,funFact:"Use 하다 (accessory verb).",phonetic:"bel-teu / heo-ri-tti",example:"A: 바지가 커요? B: 네, 벨트를 해요.",exampleEn:"A: Are your pants big? B: Yes, I wear a belt.",note:"벨트: belt (Konglish).\n허리띠: belt (native Korean).\n허리(waist) + 띠(band).\nUse 하다 (accessory verb)."},
  {type:"teach",kind:"word",nl:"넥타이",en:"necktie / tie",pos:"noun",gender:null,funFact:"Use 하다 (accessory verb).",phonetic:"nek-ta-i",example:"A: 회사에 넥타이를 해요? B: 네, 매일 넥타이를 해요.",exampleEn:"A: Do you wear a tie to work? B: Yes, I wear a tie every day.",note:"넥타이: necktie (Konglish).\nUse 하다 (accessory verb).\n넥타이를 매다 also works."},
  {type:"teach",kind:"word",nl:"정장",en:"formal suit",pos:"noun",gender:null,funFact:"From hanja: 情 (emotion/feeling) + 長 (chief/long).",phonetic:"jeong-jang",example:"A: 내일 뭐 입어요? B: 면접이 있어서 정장을 입어요.",exampleEn:"A: What are you wearing tomorrow? B: I have an interview so I'm wearing a suit.",note:"정장: formal suit.\nSINO-KOREAN: 정(proper) + 장(outfit).\nUse 입다 (torso verb)."},
  {type:"mc",q:"반바지 means:",opts:["jeans","long pants","shorts","skirt"],ans:"shorts",hint:"반 means half. Half-pants = something shorter than full pants."},
  {type:"fb",s:"비가 와요. ___를 신으세요.\n(It's raining. Wear boots.)",a:"부츠",opts:["부츠","구두","운동화","양말"],hint:"Rain footwear. A Konglish word from English."},
  {type:"fb",s:"회사에 ___를 입어요.\n(I wear a formal suit to the office.)",a:"정장",opts:["정장","청바지","반바지","티셔츠"],hint:"A proper, formal outfit for business settings."},
  {type:"match",pairs:[{nl:"바지",en:"pants"},{nl:"청바지",en:"jeans"},{nl:"반바지",en:"shorts"},{nl:"정장",en:"formal suit"}]},
  {type:"match",pairs:[{nl:"티셔츠",en:"T-shirt"},{nl:"부츠",en:"boots"},{nl:"벨트",en:"belt"},{nl:"넥타이",en:"necktie"}]},
  {type:"mc",q:"넥타이를 ___요.\n(I wear a tie.)",opts:["신어","입어","써","해"],ans:"해",hint:"Ties are accessories. Accessories use the 하다 verb."},
  {type:"drag_fill",s:"여름에 {1}와 {2}를 입어요. 겨울에 {3}를 입어요.",blanks:{"1":"티셔츠","2":"반바지","3":"코트"},pool:["티셔츠","반바지","코트","정장","부츠","벨트"],hint:"Summer: light top + short pants. Winter: heavy outer layer."},
  {type:"fb",s:"___를 자주 입어요. 편해요.\n(I often wear jeans. They're comfortable.)",a:"청바지",opts:["청바지","정장","반바지","넥타이"],hint:"Blue + pants = a casual everyday clothing item."},
  {type:"mc",q:"Which is a Konglish word?",opts:["부츠 (boots)","바지 (pants)","청바지 (jeans)","정장 (suit)"],ans:"부츠 (boots)",hint:"This word comes directly from English pronunciation adapted to Korean."},
]},

// ═══════════════════════════════════════════════════
// LESSON: Cardinal Directions (kou6l6d). Unit 6, A1.2
// Teaches: 동, 서, 남, 북, 동쪽/서쪽/남쪽/북쪽, compound place names
// ═══════════════════════════════════════════════════
{id:"kou6l6d",title:"방향: 동서남북 (Cardinal Directions)",icon:"🧭",xp:20,board:true,steps:[
  {type:"intro",title:"North, South, East, West in Korean",desc:"동 / 서 / 남 / 북\n→ east / west / south / north\n\nCompass directions and famous Korean place names.",goals:["Learn the four cardinal directions","Understand the 쪽 suffix for direction","Recognize directions in Korean place names","Know the Korean compass order: 동서남북"]},
  {type:"tip",title:"Korean Compass Order: 동서남북",text:"Korean says directions differently from English:\n\nEnglish: North, South, East, West (NSEW)\nKorean: 동서남북 = East, West, South, North\n\nEast comes first because in Korean culture the sun rising in the east has special importance.\n\nAll four are Sino-Korean characters:\n동(東): east\n서(西): west\n남(南): south\n북(北): north",deepDive:{title:"Why East First?",text:"In traditional Korean (and East Asian) compass systems, East is the primary direction.\n\nThe sun rises in the East.\n동 appears in many important compounds:\n동해: East Sea (Sea of Japan)\n동대문: East Gate\n\nKorean maps traditionally placed East at the top, not North."}},
  {type:"teach",kind:"word",nl:"동 / 동쪽",en:"east",pos:"noun",gender:null,funFact:"Korean nouns don't have plural forms or articles. Context and particles do the job.",phonetic:"dong / dong-jjok",example:"A: 해가 어디에서 떠요? B: 동쪽에서 떠요.",exampleEn:"A: Where does the sun rise? B: It rises in the east.",note:"동(東): east.\n동쪽: east side/direction.\n쪽 = side/direction suffix.\n동해 = East Sea."},
  {type:"teach",kind:"word",nl:"서 / 서쪽",en:"west",pos:"noun",gender:null,funFact:"Korean nouns don't have plural forms or articles. Context and particles do the job.",phonetic:"seo / seo-jjok",example:"A: 해가 어디에서 져요? B: 서쪽에서 져요.",exampleEn:"A: Where does the sun set? B: It sets in the west.",note:"서(西): west.\n서쪽: west side/direction.\n서울: capital city.\n서해: West Sea (Yellow Sea)."},
  {type:"teach",kind:"word",nl:"남 / 남쪽",en:"south",pos:"noun",gender:null,funFact:"Korean nouns don't have plural forms or articles. Context and particles do the job.",phonetic:"nam / nam-jjok",example:"A: 제주도가 어디에 있어요? B: 한국 남쪽에 있어요.",exampleEn:"A: Where is Jeju Island? B: It's in the south of Korea.",note:"남(南): south.\n남쪽: south side/direction.\n남산: South Mountain (서울).\n남해: South Sea."},
  {type:"teach",kind:"word",nl:"북 / 북쪽",en:"north",pos:"noun",gender:null,funFact:"Korean nouns don't have plural forms or articles. Context and particles do the job.",phonetic:"buk / buk-jjok",example:"A: 겨울에 북쪽이 추워요? B: 네, 아주 추워요.",exampleEn:"A: Is it cold in the north in winter? B: Yes, it's very cold.",note:"북(北): north.\n북쪽: north side/direction.\n북한: North Korea.\n북해: North Sea."},
  {type:"mc",q:"해가 동쪽에서 떠요. What does this mean?",opts:["The sun rises in the east","The sun sets in the west","The sun is in the south","The sun is in the north"],ans:"The sun rises in the east",hint:"동 points to the direction where daybreak starts. 뜨다 = to ascend or emerge."},
  {type:"mc",q:"Korean compass order is:",opts:["북남동서 (N-S-E-W)","동서남북 (E-W-S-N)","남북동서 (S-N-E-W)","서동남북 (W-E-S-N)"],ans:"동서남북 (E-W-S-N)",hint:"East comes first in Korean culture. The sun rises there."},
  {type:"tip",title:"Directions in Korean Place Names",text:"Many famous Korean places contain compass characters:\n\n동대문: East Great Gate (동 + 대 + 문)\n남대문: South Great Gate (남 + 대 + 문)\n남산: South Mountain (남 + 산)\n북한산: North Han Mountain\n서울: capital city (historically linked to 서)\n\nKnowing 동서남북 helps you read Korean maps and place names.",deepDive:{title:"Seoul's Four Gates",text:"Old Seoul was a walled city with gates at each compass point:\n\n동대문 (East Gate): Heunginjimun\n서대문 (West Gate): Donuimun\n남대문 (South Gate): Sungnyemun\n북대문 (North Gate): Sukjeongmun\n\nToday 동대문 and 남대문 are famous shopping districts."}},
  {type:"teach",kind:"word",nl:"동대문",en:"East Gate (Dongdaemun)",pos:"noun",gender:null,funFact:"Sino-Korean compound: 동(east) + 대(great) + 문(gate)",phonetic:"dong-dae-mun",example:"A: 동대문에 가요? B: 네, 쇼핑하러 가요!",exampleEn:"A: Are you going to Dongdaemun? B: Yes, I'm going shopping!",note:"동대문: East Great Gate.\nCOMPOUND: 동(east) + 대(great) + 문(gate).\nFamous Seoul shopping district."},
  {type:"teach",kind:"word",nl:"남산",en:"South Mountain (Namsan)",pos:"noun",gender:null,funFact:"Sino-Korean compound: 남(south) + 산(mountain)",phonetic:"nam-san",example:"A: 남산에 가 봤어요? B: 네, 남산타워가 예뻐요!",exampleEn:"A: Have you been to Namsan? B: Yes, Namsan Tower is pretty!",note:"남산: South Mountain.\nCOMPOUND: 남(south) + 산(mountain).\n남산타워 = N Seoul Tower."},
  {type:"mc",q:"남대문 = 남 + 대 + 문. 문 means:",opts:["river","mountain","gate / door","road"],ans:"gate / door",hint:"대문 means great …. 문 is used for doors and gates."},
  {type:"fb",s:"제주도는 한국 ___에 있어요.\n(Jeju Island is in the south of Korea.)",a:"남쪽",opts:["남쪽","북쪽","동쪽","서쪽"],hint:"Jeju is Korea's southernmost island."},
  {type:"fb",s:"___에서 해가 떠요.\n(The sun rises in the east.)",a:"동쪽",opts:["동쪽","서쪽","남쪽","북쪽"],hint:"The sun rises where? The first direction in 동서남북."},
  {type:"match",pairs:[{nl:"동쪽",en:"east"},{nl:"서쪽",en:"west"},{nl:"남쪽",en:"south"},{nl:"북쪽",en:"north"}]},
  {type:"match",pairs:[{nl:"동대문",en:"East Gate"},{nl:"남산",en:"South Mountain"},{nl:"북한",en:"North Korea"},{nl:"서해",en:"West Sea"}]},
  {type:"drag_fill",s:"해가 {1}에서 떠서 {2}에서 져요.",blanks:{"1":"동쪽","2":"서쪽"},pool:["동쪽","서쪽","남쪽","북쪽"],hint:"The sun rises in one direction and sets in the opposite."},
  {type:"mc",q:"남산타워 is on which mountain?",opts:["서울산 (Seoul Mountain)","북한산 (North Han Mountain)","동대문 (East Gate area)","남산 (South Mountain)"],ans:"남산 (South Mountain)",hint:"The iconic peak named after its cardinal direction within central Seoul."},
  {type:"fb",s:"겨울에 ___이 아주 추워요.\n(In winter, the north is very cold.)",a:"북쪽",opts:["북쪽","남쪽","동쪽","서쪽"],hint:"The direction opposite to south. 북 = north."},
  {type:"mc",q:"동대문 = 동 + 대 + 문. 동 means:",opts:["east","west","great","gate"],ans:"east",hint:"The first character in the Korean compass order 동서남북. It points to where the sun rises."},
]},

// ═══ L7: Compound Blitz + Culture ═══
{id:"kou6l7",title:"Transit Compounds + 한강",icon:"🌉",xp:20,board:true,steps:[
  {type:"intro",title:"Compound Words + Korean Transit Culture",desc:"Compound decoding session. The Han River as Seoul's heart.",goals:["Decode 버스정류장, 공항, 출구 compounds","Know T-money card system","Understand 한강 culture"]},
  {type:"teach",kind:"phrase",nl:"버스 정류장",en:"bus stop",pos:"intj",gender:null,funFact:"Sino-Korean compound: 버스 + 정류 + 장",phonetic:"beo-seu jeong-ryu-jang",example:"A: 버스 정류장이 어디에 있어요? B: 저기 오른쪽에 있어요.",exampleEn:"A: Where is the bus stop? B: Over there on the right.",note:"COMPOUND: 버스 + 정류 + 장.\n정류: stop/stay. 정 (stop/fix) + 류 (flow).\n'Stop the flow' = stopping place.",deepDive:{title:"Using 버스 정류장",text:"장: place.\n\n버스 정류장: 'bus stopping-place'\n주차장: parking lot (주차 + 장: parking place)\n화장실: bathroom (화장 + 실: makeup-clean room)"}},
  {type:"teach",kind:"word",nl:"공항",en:"airport",pos:"noun",gender:null,funFact:"From hanja: 空 (air/sky) + 港 (harbor). An air harbor = airport.",phonetic:"gong-hang",example:"A: 공항에 어떻게 가요? B: 지하철로 가세요.",exampleEn:"A: How do I get to the airport? B: Take the subway.",note:"SINO-KOREAN: 공항 = 공 + 항.\n공 (空): air / public / empty. 항 (港): port.\n'Air port' = airport.",deepDive:{title:"Using 공항",text:"공기: air (공 + 기 = air + energy/matter)\n공원: park (공 + 원 = public + garden)\n공장: factory (공 + 장 = manufacturing + place)"}},
  {type:"teach",kind:"word",nl:"출구",en:"exit",pos:"noun",gender:null,funFact:"From hanja: 出 (exit/go out) + 究 (investigate).",phonetic:"chul-gu",example:"A: 몇 번 출구로 나가요? B: 3번 출구로 나오세요.",exampleEn:"A: Which exit do I go out? B: Please come out exit 3.",note:"SINO-KOREAN: 출 + 구.\n출 (出): to go out. 구 (口): mouth/opening.\n'Going-out opening' = exit.",deepDive:{title:"Using 출구",text:"출 reappears in:\n출근: going to work (출 + 근: out + attendance)\n출발: departure (출 + 발: out + departure)\n\n나오세요: please come out (나오다 + 세요)"}},
  {type:"mc",q:"공항 means:",opts:["airport","bus stop","exit","train station"],ans:"airport",hint:"공 (air/sky) + 항 (port). A compound for where planes arrive."},
  {type:"teach",kind:"phrase",nl:"T-money 카드",en:"T-money card",pos:"intj",gender:null,funFact:"Buy at any 편의점 (convenience store).",phonetic:"tee-meo-ni ka-deu",example:"A: 어떻게 타요? B: T-money 카드로 타요.",exampleEn:"A: How do you ride? B: I ride using the T-money card.",note:"T-money: Korea's rechargeable transit card.\n\n지하철, 버스, 택시  -  all accept T-money.",deepDive:{title:"Using T-money 카드",text:"Buy at any 편의점 (convenience store).\nTop up at subway machines.\n\n카드를 찍다: tap the card\n요금: fare (교통 요금: transit fare)"}},
  {type:"tip",title:"🌉 한강: Seoul's Social Heart",text:"한강 (Han River) is where Seoul gathers:\n\n치킨 시키다 = to order chicken (the classic 한강 activity)\n편의점 = convenience store (always nearby)\n자전거 타다 = to ride a bicycle",deepDive:{title:"한강: Seoul's Social Heart",text:"한강공원 = Han River Park\n\n배달 to the river is completely normal. Just share your GPS location.\n\n• 치킨 + 맥주 (chicken + beer) on the grass\n• 자전거 타기 (cycling) on riverside paths\n• 야경 감상 (night view) at 63빌딩\n• 한강 유람선 (cruise boat)\n• 피크닉 (picnic) with convenience store food\n\n한강 치킨 배달:\nYou can order chicken delivery to the riverbank.\nDelivery person brings it right to you.\n\n한강 culture = 정 (shared life) + 빨리빨리 (fast-paced, efficient fun)\n\n'한강 가자!' = Let's go to the Han River!\n= Let's hang out."}},
  {type:"mc",q:"공항 = 공 + 항. 항 means:",opts:["Air","Port","Machine","Road"],ans:"Port",hint:"공 (air) + 항 = airport"},
  {type:"mc",q:"출구 = 출 + 구. 출 means:",opts:["Enter","Station","Exit/go out","Open"],ans:"Exit/go out",hint:"출 (出): to go out. 출근 (going to work), 출발 (departure)"},
  {type:"mc",q:"버스 정류장 = 버스 + 정류 + 장. 장 means:",opts:["Bus","Stop","Line","Place"],ans:"Place",hint:"장 (場) is the Hanja for a physical location or venue. 주차장 = parking lot, 시장 = market."},
  {type:"mc",q:"T-money card works on:",opts:["Subway + bus + taxi","Bus only","Subway only","Subway + KTX only"],ans:"Subway + bus + taxi",hint:"T-money is the universal Korean transit payment system"},
  {type:"fb",s:"___ 에 어떻게 가요?\n(How do I get to the airport?)",a:"공항",opts:["공항","기차역","버스 정류장","출구"],hint:"공 (air) + 항 = airport"},
  {type:"fb",s:"3번 ___로 나오세요.\n(Please come out exit 3)",a:"출구",opts:["출구","공항","역","정류장"],hint:"... = exit (出口)"},
  {type:"match",pairs:[{nl:"버스 정류장",en:"bus stop"},{nl:"공항",en:"airport"},{nl:"출구",en:"exit"},{nl:"한강",en:"Han River"}]},
  {type:"drag_fill",s:"{1}에서 {2}로 {3}에 가요.",blanks:{"1":"서울역","2":"KTX","3":"부산"},pool:["서울역","KTX","버스","부산","공항"],hint:"From Seoul Station, I go to Busan by KTX."},
  {type:"mc",q:"한강 치킨 배달 means:",opts:["Chicken restaurant near the river","Delivery chicken to the Han River bank","Korean fried chicken brand","Festival food"],ans:"Delivery chicken to the Han River bank",hint:"You can have … delivered directly to you at the riverbank - 정 + convenience culture"},
]},

// ═══ L8b: A1 Essentials  -  못, -지만, Connectors, Frequency (A1 GAP FIX) ═══
{id:"kou6l9.1",title:"못, -지만 and Connectors",icon:"🔗",xp:20,board:true,steps:[

  {type:"intro",title:"The Final A1 Toolkit",desc:"못 / -지만\n→ can't / but\n\nFour connectors and frequency adverbs.",goals:["Distinguish 안 (won't) vs 못 (can't)","Use -지만 for contrast","Connect sentences with 그래서/그런데/그러면/아니면","Use frequency adverbs naturally"]},

  // ── 못 ──
  {type:"teach",kind:"word",nl:"못",en:"can't (inability)",pos:"adv",gender:null,phonetic:"mot",funFact:"Used frequently in everyday Korean conversation. Practice it in context for natural recall.",
   example:"A: 수영해요? B: 아니요, 수영을 못해요.",exampleEn:"A: Do you swim? B: No, I can't swim.",
   note:"못 goes before the verb.\n\n못 가요\n→ can't go\n\n못 먹어요\n→ can't eat\n\n못 자요\n→ can't sleep"},

  // ── 을 explained ──
  {type:"tip",title:"💡 수영을 못해요  -  why 을?",
   text:"수영하다 = 수영 (swimming) + 하다 (to do)\n(to swim = swimming + to do)\n\nWith 하다 verbs, 못 splits the compound:\n\n수영을 못해요\n→ (I) can't swim\n\n운전을 못해요\n→ (I) can't drive\n\n한국어를 못해요\n→ (I) can't speak Korean\n\nWith plain verbs, 못 just goes before:\n\n못 가요\n→ can't go\n\n못 먹어요\n→ can't eat"},

  // ── 안 vs 못 ──
  {type:"teach",kind:"phrase",nl:"안 vs 못",en:"won't (choice) vs can't (inability)",pos:"part",gender:null,phonetic:"an / mot",funFact:"Set phrases are the fastest way to sound natural. Koreans use fixed expressions constantly.",
   example:"A: 오늘 안 가요? B: 아니요, 가고 싶지만 못 가요.",exampleEn:"A: You're not going today? B: No, I want to go but I can't go.",
   note:"안 = I choose not to.\n못 = I am not able to.\n\nUsing the wrong one changes what you're saying."},

  {type:"tip",title:"🚫 안 vs 못  -  The Difference Matters",
   text:"매운 음식을 안 먹어요.\n→ I don't eat spicy food. (preference)\n\n매운 음식을 못 먹어요.\n→ I can't eat spicy food. (physically unable)\n\n커피를 안 마셔요.\n→ I don't drink coffee. (choice)\n\n커피를 못 마셔요.\n→ I can't drink coffee. (e.g. allergy)"},

  {type:"mc",q:"'I can't eat spicy food (not capable)'  -  correct:",opts:["매운 음식을 못 먹어요","매운 음식을 안 먹어요","매운 음식이 없어요","매운 음식을 싫어요"],ans:"매운 음식을 못 먹어요",hint:"못 = not capable"},
  {type:"mc",q:"'I don't drink coffee (by choice)'  -  correct:",opts:["커피를 못 마셔요","커피를 안 마셔요","커피가 없어요","커피를 싫어요"],ans:"커피를 안 마셔요",hint:"안 = I choose not to"},
  {type:"fb",s:"저는 운전을 ___해요.\n(I can't drive  -  not capable)",a:"못",opts:["못","안","별로","전혀"],hint:"Inability = 못"},

  // ── -지 못하다 ──
  {type:"teach",kind:"grammar",nl:"-지 못하다",en:"cannot (formal long form)",pos:"part",gender:null,phonetic:"-ji mot-ha-da",funFact:"Korean has two negation systems: pre-verb 안 and post-verb -지 않다. Both are used daily.",
   example:"A: 운전해요? B: 아니요, 운전하지 못해요.",exampleEn:"A: Do you drive? B: No, I cannot drive.",
   note:"COMPOUND: -지 (verb connector) + 못하다 (cannot do).\nLiterally: 'verb-and-cannot'\n\n수영을 못해요 = 수영하지 못해요\n→ Both mean: can't swim\n→ -지 못하다 is slightly more formal",deepDive:{title:"못 vs -지 못하다",text:"못 가요 = can't go (short, spoken).\n가지 못해요 = cannot go (long, written/formal).\n\nBoth express inability. Choose by register:\nCasual speech: 못 + verb.\nFormal/written: verb + -지 못하다."}},

  // ── -지만 ──
  {type:"teach",kind:"word",nl:"-지만",en:"but / however",pos:"conj",gender:null,phonetic:"-ji-man",funFact:"Used frequently in everyday Korean conversation. Practice it in context for natural recall.",
   example:"A: 한국어가 어려워요? B: 어렵지만 재미있어요.",exampleEn:"A: Is Korean difficult? B: It's difficult, but interesting.",
   note:"COMPOUND: stem + 지만 (but/however).\n\n어렵다 → 어렵지만\n→ (to be) difficult → but difficult\n\n가다 → 가지만\n→ to go → but going\n\n비싸다 → 비싸지만\n→ (to be) expensive → but expensive"},

  {type:"tip",title:"✂️ -지만 in Action",
   text:"비싸지만 맛있어요.\n→ It's expensive, but delicious.\n\n가고 싶지만 시간이 없어요.\n→ I want to go, but I have no time.\n\n어렵지만 재미있어요.\n→ It's hard, but interesting."},

  {type:"mc",q:"'It's expensive but delicious'  -  correct:",opts:["비싸고 맛있어요","비싸서 맛있어요","비싸지만 맛있어요","비싸는 맛있어요"],ans:"비싸지만 맛있어요",hint:"-지만 = but (contrast)"},
  {type:"fb",s:"한국어는 어렵___ 재미있어요.\n(Korean is difficult ___ interesting.)",a:"지만",opts:["지만","고","서","는데"],hint:"-... attaches to the first verb stem"},

  // ── 그래서 ──
  {type:"teach",kind:"word",nl:"그래서",en:"so / therefore",pos:"conj",gender:null,phonetic:"geu-rae-seo",funFact:"Used frequently in everyday Korean conversation. Practice it in context for natural recall.",
   example:"A: 왜 집에 있어요? B: 피곤해요. 그래서 쉬어요.",exampleEn:"A: Why are you at home? B: I'm tired. So I'm resting.",
   note:"Connects two sentences: reason → result.\n그래서 starts the SECOND sentence.\n\n배가 고파요. 그래서 밥을 먹었어요.\n→ I'm hungry. So I ate."},

  // ── 그런데 ──
  {type:"teach",kind:"phrase",nl:"그런데 / 근데",en:"but / by the way",pos:"conj",gender:null,phonetic:"geu-reon-de / geun-de",funFact:"Set phrases are the fastest way to sound natural. Koreans use fixed expressions constantly.",
   example:"A: 이 식당 어때요? B: 맛있어요. 그런데 비싸요.",exampleEn:"A: How is this restaurant? B: It's delicious. But it's expensive.",
   note:"Two uses:\n\n1. Contrast:\n맛있어요. 그런데 비싸요.\n→ It's delicious. But it's expensive.\n\n2. Topic shift:\n그런데, 오늘 뭐 했어요?\n→ By the way, what did you do today?\n\n근데 = casual spoken form"},

  // ── 그러면 ──
  {type:"teach",kind:"phrase",nl:"그러면 / 그럼",en:"then / in that case",pos:"conj",gender:null,phonetic:"geu-reo-myeon / geu-reom",funFact:"Set phrases are the fastest way to sound natural. Koreans use fixed expressions constantly.",
   example:"A: 시간 있어요? B: 네! A: 그럼, 같이 가요!",exampleEn:"A: Do you have time? B: Yes! A: Then let's go together!",
   note:"그럼요!\n→ Of course! (very common polite reply)\n\n그럼 = casual spoken form of 그러면"},
  {type:"mc",q:"그런데 means:",opts:["so","because","then","but"],ans:"but",hint:"A connector that introduces contrast or changes topic."},

  // ── 아니면 ──
  {type:"teach",kind:"word",nl:"아니면",en:"or / otherwise",pos:"conj",gender:null,phonetic:"a-ni-myeon",funFact:"Used frequently in everyday Korean conversation. Practice it in context for natural recall.",
   example:"A: 커피 아니면 차? B: 커피 주세요.",exampleEn:"A: Coffee or tea? B: Coffee, please.",
   note:"COMPOUND: 아니다 (not be) + (으)면 (if-condition).\nLiterally: 'if it is not (that)'\n\n커피 아니면 차\n→ coffee or tea\n\n여기 아니면 거기\n→ here or there"},

  {type:"tip",title:"🔗 The Connector Set  -  A1 Complete",
   text:"WITHIN a sentence:\n\n-고: and/then\n먹고 마셔요 → eat, then drink\n\n-지만: but\n어렵지만 재미있어요 → hard but interesting\n\n-아/어서: because → a later lesson\n\nBETWEEN sentences:\n\n그리고 → and also\n그래서 → so / therefore\n그런데 / 근데 → but / by the way\n그러면 / 그럼 → then / in that case\n아니면 → or / otherwise\n\nHalf these keep appearing all the way to B1."},

  {type:"mc",q:"'I was tired. So I stayed home.'  -  which connector?",opts:["그래서","그러면","그런데","아니면"],ans:"그래서",hint:"... = so/therefore (reason → result)"},
  {type:"mc",q:"'Coffee or tea?'  -  which connector?",opts:["그리고","아니면","그런데","그래서"],ans:"아니면",hint:"... = or / otherwise"},
  {type:"fb",s:"맛있어요. ___ 비싸요.\n(Delicious. But expensive.)",a:"그런데",opts:["그런데","그래서","그러면","아니면"],hint:"... = but / by the way"},

  // ── Frequency adverbs ──
]},

// === Adverbs and Question Words ===
{id:"kou6l9.2",title:"Adverbs and Question Words",icon:"📊",xp:18,board:true,steps:[
  {type:"intro",title:"How Often? How Much? Why?",desc:"Frequency words, question words, superlatives.",goals:["Use 자주, 가끔, 보통 for frequency","Ask with 왜 and 얼마나","Pick the best with 제일 and 가장"]},
  {type:"teach",kind:"word",nl:"자주",en:"often",pos:"noun",gender:null,funFact:"From hanja: 自 (self) + 主 (master/main).",phonetic:"ja-ju",example:"A: 자주 운동해요? B: 네, 매일 운동해요.",exampleEn:"A: Do you exercise often? B: Yes, I exercise every day.",note:"자주: often / frequently.\nAdverb  -  goes before the verb."},
  {type:"teach",kind:"word",nl:"가끔",en:"sometimes",pos:"noun",gender:null,funFact:"Korean nouns don't have plural forms or articles. Context and particles do the job.",phonetic:"ga-kkeum",example:"A: 영화를 자주 봐요? B: 아니요, 가끔 봐요.",exampleEn:"A: Do you watch movies often? B: No, I watch sometimes.",note:"가끔: sometimes / occasionally."},
  {type:"teach",kind:"word",nl:"보통",en:"usually",pos:"noun",gender:null,funFact:"Also means 'average' or 'ordinary.",phonetic:"bo-tong",example:"A: 몇 시에 일어나요? B: 보통 8시에 일어나요.",exampleEn:"A: What time do you wake up? B: I usually wake up at 8.",note:"보통: usually / normally.\nAlso means 'average' or 'ordinary.'"},
  {type:"mc",q:"가끔 means:",opts:["sometimes","often","always","never"],ans:"sometimes",hint:"A frequency adverb between 자주 (often) and 전혀 (never)."},

  {type:"teach",kind:"word",nl:"별로",en:"not really",pos:"noun",gender:null,funFact:"Korean nouns don't have plural forms or articles. Context and particles do the job.",phonetic:"byeol-lo",example:"A: 이 영화 좋아요? B: 별로 안 좋아요.",exampleEn:"A: Is this movie good? B: It's not really good.",note:"별로: not really  -  ALWAYS with a negative.\n별로 안 + verb = not really (verb)."},
  {type:"teach",kind:"word",nl:"전혀",en:"not at all / absolutely not",pos:"noun",gender:null,funFact:"Korean nouns don't have plural forms or articles. Context and particles do the job.",phonetic:"jeon-hyeo",example:"A: 이거 알아요? B: 아니요, 전혀 몰라요.",exampleEn:"A: Do you know this? B: No, I have no idea at all.",note:"전혀: not at all  -  ALWAYS with a negative.\n전혀 없어요 means there is absolutely none."},

  {type:"teach",kind:"word",nl:"다시",en:"again",pos:"noun",gender:null,funFact:"From hanja: 多 (many) + 市 (city/market).",phonetic:"da-si",example:"A: 다시 한 번 말해 주세요. B: 네, 천천히 말할게요.",exampleEn:"A: Please say it again. B: Sure, I will speak slowly.",note:"다시: again.\n다시 한 번 means one more time. Very useful phrase."},
  {type:"mc",q:"전혀 means:",opts:["a little","not at all","very much","sometimes"],ans:"not at all",hint:"Used with negatives for emphasis. 전혀 + 없다/안 = absolute zero."},
  {type:"teach",kind:"word",nl:"혼자",en:"alone",pos:"noun",gender:null,funFact:"Korean nouns don't have plural forms or articles. Context and particles do the job.",phonetic:"hon-ja",example:"A: 누구랑 왔어요? B: 혼자 왔어요.",exampleEn:"A: Who did you come with? B: I came alone.",note:"혼자: alone / by oneself."},
  {type:"teach",kind:"word",nl:"천천히",en:"slowly",pos:"noun",gender:null,funFact:"Adverb suffix (like English -ly).",phonetic:"cheon-cheon-hi",example:"A: 너무 빨라요! B: 천천히 말해 주세요.",exampleEn:"A: It's too fast! B: Please speak slowly.",note:"천천히: slowly.\nAdverb suffix (like English -ly)."},
  {type:"mc",q:"별로 means:",opts:["often","again","not really","always"],ans:"not really",hint:"Used with negatives. 별로 안 좋아요 = not … good. Softer than 전혀."},

  {type:"teach",kind:"word",nl:"왜",en:"why",pos:"noun",gender:null,funFact:"Short, common, and direct.",phonetic:"wae",example:"A: 오늘 안 가요. B: 왜요?",exampleEn:"A: I'm not going today. B: Why?",note:"왜: why.\nShort, common, and direct."},
  {type:"teach",kind:"word",nl:"얼마나",en:"how much / how long",pos:"noun",gender:null,funFact:"Korean nouns don't have plural forms or articles. Context and particles do the job.",phonetic:"eol-ma-na",example:"A: 역까지 얼마나 걸려요? B: 걸어서 십 분이에요.",exampleEn:"A: How long to the station? B: 10 minutes on foot.",note:"얼마나: how much / how long.\n얼마나 멀어요? = How far is it?"},

  {type:"teach",kind:"word",nl:"제일",en:"the most / the best",pos:"noun",gender:null,funFact:"Sino-Korean compound: 제 (most) + 일 (one)",phonetic:"je-il",example:"A: 제일 좋아하는 음식이 뭐예요? B: 김치찌개요!",exampleEn:"A: What is your favorite food? B: Kimchi stew!",note:"제일: the most / number one.\nCOMPOUND: 제 (most) + 일 (one)."},
  {type:"mc",q:"얼마나 means:",opts:["when","how many","where","how much/long"],ans:"how much/long",hint:"A question word for degree or duration. 얼마나 걸려요? = How … does it take?"},
  {type:"teach",kind:"word",nl:"가장",en:"the most",pos:"noun",gender:null,funFact:"From hanja: 家 (home/house) + 長 (chief/long).",phonetic:"ga-jang",example:"A: 뭐가 가장 중요해요? B: 건강이 가장 중요해요.",exampleEn:"A: What is most important? B: Health is the most important.",note:"가장: the most  -  same meaning as 제일.\n제일 is more colloquial, 가장 more formal."},

  {type:"tip",title:"📊 Frequency Scale  -  Full A1 Set",
   text:"항상 / 늘\n→ always\n\n자주\n→ often\n\n보통\n→ usually\n\n가끔\n→ sometimes\n\n별로 (+ negative)\n→ not really\n\n전혀 (+ negative)\n→ not at all\n\n이제 A1이 진짜 끝났어요.\n→ Now A1 is truly complete."},

  {type:"mc",q:"별로 / 전혀 always pair with:",opts:["Negative sentences (안/못/없어요)","Positive sentences (verb + 요)","Questions only (interrogative)","Past tense only (았/었어요)"],ans:"Negative sentences (안/못/없어요)",hint:"별로 안 좋아요, 전혀 없어요  -  these adverbs require 안, 못, or 없다 to feel complete."},
  {type:"mc",q:"'How long does it take?' in Korean:",opts:["얼마예요?","얼마나 걸려요?","언제 걸려요?","왜 걸려요?"],ans:"얼마나 걸려요?",hint:"This question word asks about degree or duration. How long does the trip take?"},
  {type:"fb",s:"저는 ___ 커피를 마셔요.\n(I often drink coffee)",a:"자주",opts:["자주","가끔","전혀","별로"],hint:"... = often"},
  {type:"fb",s:"___ 말해 주세요.\n(Please speak slowly)",a:"천천히",opts:["천천히","자주","다시","혼자"],hint:"... = slowly"},
  {type:"match",pairs:[{nl:"자주",en:"often"},{nl:"가끔",en:"sometimes"},{nl:"전혀 + neg",en:"not at all"},{nl:"제일/가장",en:"the most/best"}]},
  {type:"drag_fill",s:"{1} 운동해요. {2} 피곤해요. {3} 쉬어요.",blanks:{"1":"자주","2":"그래서","3":"가끔"},pool:["자주","가끔","그래서","그런데","전혀"],hint:"I often exercise. So I'm tired. I sometimes rest."},
]},
// ═══ L8: Review & Quiz ═══
{id:"kou6l8",title:"Review and Quiz",icon:"📝",xp:30,board:true,steps:[
  {type:"intro",title:"A1 Complete!",desc:"A1 complete! Everything TOPIK 1 requires is in place.",goals:["Verify 에 vs 에서 vs (으)로 mastery","Confirm 안 vs 못 distinction","Test connector and frequency adverb knowledge"]},
  {type:"teach",kind:"grammar",nl:"A1 Complete: Grammar Summary",en:"Everything covered through U6",pos:"part",gender:null,funFact:"Korean particles attach after nouns to mark their role. No equivalent in English.",phonetic:"",example:"A: 학교에 어떻게 가요? B: 버스로 가요. 학교에서 공부해요. 어렵지만 재미있어요.",exampleEn:"A: How do you get to school? B: I go by bus. I study at school. It's hard but interesting.",note:"PARTICLES: all eight particles now formally named.\n\nNEGATION: four tools (choice, inability, long forms of each).",deepDive:{title:"Connectors, Frequency Words, and TOPIK Readiness",text:"CONNECTORS: -고, -지만, 그래서, 그런데, 그러면, 아니면.\n\nFREQUENCY: 자주, 가끔, 보통, 별로, 전혀, 왜, 얼마나, 제일/가장.\n\nPOSITIONS: 위/아래/앞/뒤/안/밖/옆/사이  -  complete set.\n\nVERB STRUCTURE: stem + ending (preview). Full system later.\n\n✅ You are TOPIK 1 ready."}},
  {type:"mc",q:"에 vs 에서  -  the key difference:",opts:["에: static; 에서: action","They are the same thing","에: action; 에서: static","에: formal; 에서: casual"],ans:"에: static; 에서: action",hint:"에 = being/going there. 에서 = doing something there."},
  {type:"mc",q:"지하 means 'underground'. 지하철 therefore means:",opts:["Fast train","Underground train","City bus","Underground tunnel"],ans:"Underground train",hint:"지하 + 철 (iron/rail) = subway/metro."},
  {type:"mc",q:"버스로 가요. 로 here marks:",opts:["Object (acted on)","Location (at/in)","Means of transport","Topic (about this)"],ans:"Means of transport",hint:"(으)로 signals the method or direction of travel: by bus, toward somewhere."},
  {type:"mc",q:"The polite form of 'to eat' ends in 어요. What is the part before the polite ending?",opts:["먹어","먹어요","어요","먹"],ans:"먹",hint:"Strip 다 from 먹다. Remaining = stem."},
  {type:"mc",q:"'It's hot'  -  correct polite form:",opts:["더워요","덥요","덥어요","더워다"],ans:"더워요",hint:"덥다 is ㅂ-irregular. ㅂ becomes 우 before vowel endings."},
  {type:"mc",q:"공항 = 공 + 항. 공 means:",opts:["Korean / domestic","Air / public / empty","Machine / device","Port / harbor"],ans:"Air / public / empty",hint:"공 (空): …, …, …. 공기, 공원, 공항"},
  {type:"mc",q:"비가 와요  -  why 와요 (come) not another verb?",opts:["No reason, just random","와요 sounds nice and soft","Korean sees rain as coming","It is a translation of English"],ans:"Korean sees rain as coming",hint:"비가 오다 and 눈이 오다 both use 오다. Weather is viewed as approaching the speaker, not falling."},
  {type:"fb",s:"도서관___공부해요.\n(I study at the library)",a:"에서",opts:["에서","에","를","로"],hint:"Studying is an ACTION at the library"},
  {type:"fb",s:"지하철___학교에 가요.\n(I go to school by subway)",a:"로",opts:["로","에","에서","를"],hint:"지하철 ends in a consonant → 로 (by subway)"},
  {type:"fb",s:"친구가___.\n(A friend comes  -  polite present)",a:"와요",opts:["와요","오아요","오요","왔요"],hint:"Check the stem vowel: bright or dark?"},
  {type:"match",pairs:[{nl:"에",en:"to/at (static or destination)"},{nl:"에서",en:"at (action location)"},{nl:"(으)로",en:"by/toward (means/direction)"},{nl:"을/를",en:"object marker"}]},
  {type:"drag_fill",s:"저는 버스{1} 공항{2} 가요. 공항{3} 두 시간 기다렸어요.",blanks:{"1":"로","2":"에","3":"에서"},pool:["로","에","에서","를","는"],hint:"I go to the airport by bus. I waited at the airport for 2 hours."},
  {type:"mc",q:"지금까지 배운 것으로 할 수 있는 것은?",opts:["회의에서 유창하게 말하기 (Speak fluently in meetings)","한국 소설 읽기 (Read Korean novels)","자막 없이 드라마 보기 (Watch dramas without subs)","기본 생활 한국어 (Handle survival Korean)"],ans:"기본 생활 한국어 (Handle survival Korean)",hint:"At this stage you can navigate, eat, shop, ask directions, and manage basic numbers."},
{type:"match",pairs:[{trg:"기다리다",src:"to wait"},{trg:"찾다",src:"to find / to look for"},{trg:"(이)랑",src:"and / with (casual)"},{trg:"유턴",src:"U-turn"},{trg:"아래 / 밑",src:"below / under"},{trg:"뒤",src:"behind / back"}]},{type:"match",pairs:[{trg:"과거 시제 미리보기",src:"Adding the past tense car"},{trg:"앉다 → 앉아요",src:"to sit → sits"},{trg:"날씨",src:"weather"},{trg:"마다",src:"every / each"},{trg:"아주",src:"very / extremely"},{trg:"바람",src:"wind"}]},{type:"match",pairs:[{trg:"바다",src:"sea / ocean"},{trg:"재킷",src:"jacket"},{trg:"스웨터",src:"sweater"},{trg:"가방",src:"bag"},{trg:"T-money 카드",src:"T-money card"},{trg:"보통",src:"usually"}]},{type:"match",pairs:[{trg:"다시",src:"again"},{trg:"혼자",src:"alone"},{trg:"A1 Complete: Grammar Summary",src:"Everything covered through U6"}]}]},

// ═══ Daily Routines: 하루 일과 ═══
{id:"kov2_u9l_a1_essentials",title:"하루 일과",icon:"☀️",xp:22,board:true,steps:[
  {type:"intro",title:"Daily Life Essentials",desc:"Nine core words for talking about your day: drinks, time, sleep, family, and feelings.",goals:["Learn 차, 시간, 자다, 일찍, 늦게","Learn 가족, 피곤하다, 항상, 맑다","Describe a daily routine in Korean","Produce target-language forms in fill-in-blank quizzes"]},

  {type:"teach",trg:"차",src:"tea",pos:"noun",gender:null,
   phonetic:"cha",
   note:"차: tea.\n차를 마시다 = to drink tea.\nAlso means 'car', context always makes it clear.",
   example:"A: 뭐 마실 거예요?\nB: 차 한 잔 주세요.",
   exampleSrc:"A: What would you like to drink?\nB: One cup of tea, please.",
   funFact:"차 entered Korean from Chinese 茶 (chá). Korea has a long tea culture, 녹차 (green tea) is served free in many traditional restaurants, just like water."},

  {type:"teach",trg:"시간",src:"time / hour",pos:"noun",gender:null,
   phonetic:"si-gan",
   note:"시간: time, hour.\n시간이 있어요 = I have time.\n한 시간 = one hour.",
   example:"A: 지금 시간 있어요?\nB: 네, 시간 있어요. 같이 가요!",
   exampleSrc:"A: Do you have time now?\nB: Yes, I have time. Let's go together!",
   funFact:"From Sino-Korean 時間: 시 (時 = time/hour) + 간 (間 = interval). A span of time. Koreans also use 시 alone for o'clock: 세 시 = three o'clock."},

  {type:"teach",trg:"자다",src:"to sleep",pos:"verb",gender:null,
   phonetic:"ja-da",
   note:"자다: to sleep.\n자요 = sleeps (polite).\n잘 자요 = sleep well (casual goodnight).",
   example:"A: 몇 시에 자요?\nB: 보통 열한 시에 자요.",
   exampleSrc:"A: What time do you sleep?\nB: I usually sleep at eleven.",
   funFact:"잘 자요 (sleep well) is how Koreans say goodnight casually. The more formal version is 안녕히 주무세요, using the honorific verb 주무시다 (to sleep, honorific)."},

  {type:"teach",trg:"가족",src:"family",pos:"noun",gender:null,
   phonetic:"ga-jok",
   note:"가족: family (as a group).\n우리 가족 = my family.\n가족이 있어요 = I have a family.",
   example:"A: 가족이 몇 명이에요?\nB: 네 명이에요. 부모님하고 여동생이 있어요.",
   exampleSrc:"A: How many people are in your family?\nB: Four. I have my parents and a younger sister.",
   funFact:"Koreans often say 우리 가족 (our family) even when referring to their own family alone. 우리 (our/we) replaces 내 (my) for family, home, and close things, a reflection of the collective culture."},

  {type:"teach",trg:"피곤하다",src:"to be tired",pos:"adj",gender:null,
   phonetic:"pi-gon-ha-da",
   note:"피곤하다: tired, fatigued.\n피곤해요 = I'm tired.\nOpposite: 활기차다 (energetic).",
   example:"A: 왜 피곤해요?\nB: 어제 늦게 자서 피곤해요.",
   exampleSrc:"A: Why are you tired?\nB: I slept late yesterday so I'm tired.",
   funFact:"From Sino-Korean: 疲 (피, tired) + 困 (곤, stuck/troubled). Literally 'weary and stuck.' 피로 (fatigue) shares the same root and appears in formal contexts like 피로감 (feeling of fatigue)."},

  {type:"teach",trg:"항상",src:"always",pos:"adv",gender:null,
   phonetic:"hang-sang",
   note:"항상: always.\nSynonyms: 늘 (always, native Korean), 언제나 (always, any time).\n항상 vs 자주: always vs often.",
   example:"A: 아침에 항상 차를 마셔요?\nB: 네, 항상 마셔요. 습관이에요.",
   exampleSrc:"A: Do you always drink tea in the morning?\nB: Yes, always. It's a habit.",
   funFact:"항상 comes from Sino-Korean 恒常: 항 (恒, permanent) + 상 (常, ordinary/constant). Together they mean perpetually constant, always without exception."},

  {type:"teach",trg:"일찍",src:"early",pos:"adv",gender:null,
   phonetic:"il-jjik",
   note:"일찍: early.\n일찍 자요 = I sleep early.\nOpposite: 늦게 (late).",
   example:"A: 오늘 일찍 왔어요!\nB: 네, 오늘은 일찍 일어났어요.",
   exampleSrc:"A: You came early today!\nB: Yes, I woke up early today.",
   funFact:"일찍 is a pure native Korean adverb with no hanja root. It always describes timing, you can't say 일찍 빠르다 (quickly fast). For speed, Koreans use 빨리. 일찍 is only about time of day."},

  {type:"teach",trg:"늦게",src:"late",pos:"adv",gender:null,
   phonetic:"neut-ge",
   note:"늦게: late (adverb form of 늦다).\n늦게 자요 = I sleep late.\nOpposite: 일찍 (early).",
   example:"A: 왜 늦게 왔어요?\nB: 지하철이 늦게 와서 늦었어요.",
   exampleSrc:"A: Why did you come late?\nB: The subway came late so I was late.",
   funFact:"늦게 is the adverb form of 늦다 (to be late). Korean forms adverbs from adjectives/verbs by adding -게: 늦다 → 늦게, 빠르다 → 빠르게, 조용하다 → 조용하게. This -게 pattern is extremely productive."},

  {type:"teach",trg:"맑다",src:"to be clear / sunny",pos:"adj",gender:null,
   phonetic:"mak-da",
   note:"맑다: clear, sunny (weather), bright.\n맑아요 = it's clear.\n하늘이 맑아요 = the sky is clear.",
   example:"A: 오늘 날씨가 어때요?\nB: 맑아요! 구름이 없어요.",
   exampleSrc:"A: How's the weather today?\nB: It's clear! There are no clouds.",
   funFact:"맑다 is a native Korean word. It describes weather, water, and even a person's eyes or voice: 목소리가 맑다 (a clear voice). A 맑은 하늘 (clear sky) is the classic weather expression in Korean weather forecasts."},

  {type:"tip",title:"자다 vs 주무시다: Sleep Verbs",text:"Korean has two verbs for sleeping depending on who you're talking about:\n\n자다 = to sleep (plain)\n주무시다 = to sleep (honorific, for elders/respected people)\n\nYou say:\n부모님이 주무세요. (Parents are sleeping.)\n저는 자요. (I'm sleeping.)\n\nGoodnight:\n잘 자요! = Goodnight (casual, to a friend)\n안녕히 주무세요! = Goodnight (polite, to parents/elders)",deepDive:{title:"The -시- Honorific",text:"주무시다 is the honorific form of 자다. The honorific marker -시- transforms many common verbs:\n자다 → 주무시다 (sleep)\n먹다 → 드시다 (eat)\n있다 → 계시다 (exist/be)\n\nUse them whenever speaking ABOUT or TO someone older or of higher status."}},

  {type:"mc",q:"차 means:",opts:["tea (drink)","hot water","car only","coffee"],ans:"tea (drink)",hint:"차 can mean … or car, here we focus on the …. 차를 마시다 = … …."},
  {type:"mc",q:"시간 있어요? means:",opts:["How many hours?","Do you have time?","How long is it?","What time is it?"],ans:"Do you have time?",hint:"시간 = temporal reference. 있어요 = have. Together: Do you have temporal reference?"},
  {type:"mc",q:"항상 means:",opts:["often","never","always","sometimes"],ans:"always",hint:"항상 = … (every time, without exception). 자주 = often."},
  {type:"mc",q:"맑아요 describes:",opts:["cold weather","cloudy weather","rainy weather","clear sunny weather"],ans:"clear sunny weather",hint:"맑다 conjugates to 맑아요. 구름이 없고 하늘이 파래요, blue sky, no clouds. Pick the option that fits."},
  {type:"mc",q:"일찍 is the opposite of:",opts:["늦게","자주","항상","빨리"],ans:"늦게",hint:"일찍 (early) and 늦게 (late) are a pair: arrive early vs arrive late."},

  {type:"fb",s:"저는 보통 열 시에 ___요.\n(I usually sleep at 10.)",a:"자",opts:["자","보","가","와"],hint:"Which verb means to sleep? Remove 다 and add 아/어요."},
  {type:"fb",s:"오늘 날씨가 ___ 어요.\n(Today's weather is clear.)",a:"맑",opts:["맑","춥","더","비"],hint:"Clear/sunny weather. Stem + 아요 (bright vowel)."},
  {type:"fb",s:"왜 ___해요? 어제 늦게 자서요.\n(Why are you tired? Because I slept late yesterday.)",a:"피곤",opts:["피곤","행복","조용","가능"],hint:"Which word means tired/fatigued?"},
  {type:"fb",s:"저는 ___ 아침에 차를 마셔요.\n(I always drink tea in the morning.)",a:"항상",opts:["항상","가끔","보통","자주"],hint:"Without exception, every morning. The strongest frequency word."},

  {type:"match",pairs:[{trg:"차",src:"tea"},{trg:"시간",src:"time / hour"},{trg:"자다",src:"to sleep"},{trg:"가족",src:"family"}]},
  {type:"match",pairs:[{trg:"항상",src:"always"},{trg:"일찍",src:"early"},{trg:"늦게",src:"late"},{trg:"피곤하다",src:"to be tired"}]},

  {type:"drag_fill",s:"저는 {1} 일찍 자요. 그래서 아침에 {2} 않아요. 날씨가 {3} 때 기분이 좋아요.",blanks:{"1":"항상","2":"피곤하지","3":"맑을"},pool:["항상","피곤하지","맑을","보통","기쁘지","춥"],hint:"I always sleep early. So I'm not tired in the morning. I feel good when the weather is clear."},
]},

]};

export default UNIT_6;
