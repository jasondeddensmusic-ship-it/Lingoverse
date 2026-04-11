// Unit 6 — 어디 가요?
// Transport, Location Particles & Conjugation Preview

export default {n:6,lang:"ko",srcLang:"en",track:"v2",title:"어디 가요?",sub:"Transport, Location Particles & Conjugation Preview",icon:"🚇",level:"A1.2",color:"#3498DB",lessons:[
  {id:"kou6l1",title:"Transport Words",icon:"🚌",xp:20,board:true,steps:[
        {type:"intro",title:"Getting Around Korea",desc:"지하철 / 버스\n→ subway / bus\n\nTransport words are decodable compounds.",goals:["Learn core transport vocabulary","Decode transport compound words","Know Korean transit culture basics"]},
        {type:"teach",trg:"지하철",src:"subway",pos:"noun",gender:null,phonetic:"ji-ha-cheol",note:"COMPOUND: 지하 (underground) + 철 (iron/rail).\nLiterally: 'underground iron.'\n",example:"A: 학교에 어떻게 가요? B: 지하철로 가요.",exampleSrc:"A: How do you get to school? B: I go by subway.",deepDive:{
          title:"지하철 in Korean Culture",
          text:"지하: underground. 지 (earth) + 하 (below).\n철: iron. Also in 철교 (iron bridge).\n\nSeoul subway: 23 lines. Clean, frequent, cheap.\nWi-Fi throughout. Announcements in Korean + English."
        ,funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"teach",trg:"버스",src:"bus",pos:"noun",gender:null,phonetic:"beo-seu",note:"Konglish: from English 'bus.'\n\n버스 정류장: bus stop.",example:"A: 버스를 타요? B: 네, 매일 버스를 타요.",exampleSrc:"A: Do you take the bus? B: Yes, I take the bus every day.",deepDive:{
          title:"Using 버스",
          text:"정류 (stop/stay) + 장 (place) = stop-place.\n\n타다 = to ride / take (transport verb).\n\n버스를 타다\n→ to take the bus\n\n택시를 타다\n→ to take a taxi\n\n지하철을 타다\n→ to take the subway"
        ,funFact:"A Konglish loanword adapted from English. Korean has borrowed many modern and tech words."}},
        {type:"teach",trg:"기차",src:"train",pos:"noun",gender:null,phonetic:"gi-cha",note:"기차: train.\nCOMPOUND: 기 (machine) + 차 (vehicle).",example:"A: 부산에 어떻게 가요? B: 기차로 가요.",exampleSrc:"A: How do you get to Busan? B: I go by train.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"teach",trg:"KTX",src:"bullet train",pos:"noun",gender:null,phonetic:"ke-i-ti-ekseu",note:"Korea Train eXpress, the bullet train.\nSeoul to Busan in 2.5 hours.",example:"A: KTX가 빨라요? B: 네, 아주 빨라요!",exampleSrc:"A: Is the KTX fast? B: Yes, very fast!",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"mc",q:"버스 means:",opts:["subway","bus","train","taxi"],ans:"bus",hint:"A Konglish word. Read the syllables: 버 (beo) + 스 (seu)."},
        {type:"teach",trg:"비행기",src:"airplane",pos:"noun",gender:null,phonetic:"bi-haeng-gi",note:"COMPOUND: 비행 (flying) + 기 (machine).\n비: to fly. 행: go/travel. 기: machine.\n'Flying-travel machine' = airplane.",example:"A: 일본에 어떻게 가요? B: 비행기를 타고 가요.",exampleSrc:"A: How do you get to Japan? B: I go by airplane.",deepDive:{title:"Using 비행기",text:"비행: flying. 비행사: pilot (flying + expert).\n공항: airport. 공 (air/public) + 항 (port).",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"teach",trg:"타다",src:"to ride / take (transport)",pos:"verb",gender:null,phonetic:"ta-da",note:"타다: universal 'board/ride' verb for transport.\n\n버스를 타다: take the bus",example:"A: 뭘 타요? B: 매일 지하철을 타요.",exampleSrc:"A: What do you ride? B: I take the subway every day.",deepDive:{title:"Using 타다",text:"택시를 타다: take a taxi\n자전거를 타다: ride a bicycle\n말을 타다: ride a horse\n\n내리다: to get off (opposite of 타다).",funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"tip",title:"🚇 Korean Transport: World Class",deepDive:{
          title:"T-money, Color-Coded Buses, and Airport Rail",
          text:"• T-money card works on everything\n• Last train ~12-1am\n\nKTX (bullet train):\n• Seoul → Busan: 2h 30m\n• Seoul → Gwangju: 1h 30m\n• Reserved seating, meals available\n\n버스 (bus):\n• Color-coded by type:\n  파란 버스: trunk routes (blue)\n  초록 버스: neighborhood routes (green)\n  빨간 버스: express (red)\n\n공항철도: Airport Railroad\nSeoul Station → Incheon Airport: 43 min."
        },text:"Seoul's public transit system:\n\n지하철 (subway):\n• 23 lines covering Greater Seoul\n• Color-coded, numbered exits"},
        {type:"mc",q:"지하철 decomposes into:",opts:["지하 (underground) + 철 (iron)","지 (earth) + 하철 (rail)","지하 (lower) + 전 (electric)","All one piece"],ans:"지하 (underground) + 철 (iron)",hint:"Underground + iron/rail"},
        {type:"mc",q:"비행기 means 'airplane' because:",opts:["It sounds like English 'fly'","비행 (flying) + 기 (machine)","From Chinese characters only","It's an old native Korean word"],ans:"비행 (flying) + 기 (machine)",hint:"Flying-machine = airplane"},
        {type:"mc",q:"타다 means:",opts:["To go to a place","To arrive at a place","To ride/board transport","To pay for a ticket"],ans:"To ride/board transport",hint:"버스를 타다, 기차를 타다"},
        {type:"fb",opts:["지하철","비행기","기차","버스"],hint:"... = subway (underground + iron)",s:"매일 ___ 을/를 타요.\n(I take the subway every day)",a:"지하철"},
        {type:"fb",opts:["KTX","버스","지하철","비행기"],hint:"Seoul to Busan 2.5 hours = bullet train",s:"서울에서 부산까지 ___로 두 시간 삼십 분이에요.\n(Seoul to Busan by ___ is 2.5 hours.)",a:"KTX"},
        {type:"match",pairs:[{trg:"지하철",src:"subway"},{trg:"기차",src:"train"},{trg:"비행기",src:"airplane"},{trg:"타다",src:"to ride/board"}]},
        {type:"match",pairs:[{trg:"버스 정류장",src:"bus stop"},{trg:"공항",src:"airport"},{trg:"내리다",src:"to get off"},{trg:"KTX",src:"bullet train"}]},
        {type:"drag_fill",hint:"I take the subway every day. On weekends I travel by train.",s:"저는 매일 {1}을 타요. 주말에는 {2}로 여행해요.",blanks:{"1":"지하철","2":"기차"},pool:["지하철","기차","비행기","택시"]},
        {type:"mc",q:"기 appears in: 비행기, 세탁기, 청소기. 기 means:",opts:["Big","Electric","Machine","Modern"],ans:"Machine",hint:"비행기, 세탁기, 청소기 all share the suffix 기. What does it represent?"}
  ]},
  {id:"kou6l2",title:"에 vs 에서 Named",icon:"📍",xp:25,board:true,steps:[
        {type:"intro",title:"★ AT (Static) vs AT (Active)",desc:"에 vs 에서\n→ static vs action location\n\nToday they get their names.",goals:["Name 에 as destination/static location marker","Name 에서 as action location marker","Apply the correct particle every time"]},
        {type:"teach",trg:"에",src:"to / at (destination or static location)",pos:"verb",gender:null,phonetic:"e",note:"에 marks THREE things:\n\n1. DESTINATION: 학교에 가요 (go TO school)\n2. STATIC LOCATION: 집에 있어요 (am AT home)\n3. TIME: 3시에 (AT 3 o'clock)",example:"A: 어디에 가요? B: 학교에 가요.",exampleSrc:"A: Where are you going? B: I'm going to school.",deepDive:{
          title:"에 vs 에서: The Core Distinction",
          text:"에 answers: WHERE are you? WHERE are you going?\nIt doesn't say anything about what you DO there.\n\n에서 answers: WHERE are you DOING something?\nAction verbs need 에서, not 에."
        ,funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"teach",trg:"에서",src:"at / in (action location)",pos:"noun",gender:null,phonetic:"e-seo",note:"에서 marks WHERE an ACTION happens.\n\n학교에서 공부해요: study AT school.",example:"A: 어디에서 공부해요? B: 학교에서 공부해요.",exampleSrc:"A: Where do you study? B: I study at school.",deepDive:{
          title:"Using 에서",
          text:"카페에서 커피를 마셔요: drink coffee AT the café.\n도서관에서 책을 읽어요: read books AT the library.\n\nTest: Is there an ACTION verb?\nYes → 에서\nNo (just being/going) → 에"
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"tip",title:"📍 에 vs 에서: The Complete System",deepDive:{
          title:"Full Comparison",
          text:"회사에서 일해요 = I work at the company\n\nTest: is someone DOING something there? → 에서. Just existing or going? → 에.\n\n→ I'm at school. (static)\n\n학교에서 공부해요.\n→ I study at school. (action)\n\nBonus  -  에서 also means FROM:\n서울에서 왔어요.\n→ I came from Seoul.\n\n에서: WHERE you DO something\n\n집에서 쉬어요: rest AT home (action: resting)\n도서관에서 공부해요: study AT library (action: studying)\n카페에서 일해요: work AT a café (action: working)\n\nThe test:\n'What are you doing there?'\nIf there IS an action → 에서\nIf you're just BEING there or ARRIVING → 에\n\nBonus: 에서 also means 'from' in one pattern:\n서울에서 왔어요: I came FROM Seoul."
        },text:"에 = static location or destination (no action happening there):\n집에 있어요 = I am at home\n학교에 가요 = I go to school\n\n에서 = action location (something happens there):\n카페에서 공부해요 = I study at the café"},
        {type:"mc",q:"'I study AT the library'  -  correct particle:",opts:["도서관에 공부해요","도서관에서 공부해요","도서관을 공부해요","도서관는 공부해요"],ans:"도서관에서 공부해요",hint:"Studying = action at a place → 에서"},
        {type:"mc",q:"'I am AT home'  -  correct particle:",opts:["집에서 있어요","집에 있어요","집을 있어요","집는 있어요"],ans:"집에 있어요",hint:"Being there statically (있어요, no action) → 에"},
        {type:"mc",q:"'I go TO school'  -  correct particle:",opts:["학교에서 가요","학교를 가요","학교에 가요","학교는 가요"],ans:"학교에 가요",hint:"Going TO a destination → 에"},
        {type:"mc",q:"'I drink coffee AT the café'  -  correct particle:",opts:["카페에 커피를 마셔요","카페에서 커피를 마셔요","카페를 커피를 마셔요","카페는 커피를 마셔요"],ans:"카페에서 커피를 마셔요",hint:"Drinking = action at a place → 에서"},
        {type:"fb",opts:["에서","에","를","는"],hint:"Studying is an action  -  what you DO at the library",s:"저는 매일 도서관___공부해요.\n(I study at the library every day.)",a:"에서"},
        {type:"fb",opts:["에","에서","를","는"],hint:"Being at home, no action verb  -  static location",s:"친구가 집___있어요.\n(A friend is at home.)",a:"에"},
        {type:"fb",opts:["에","에서","를","도"],hint:"First blank: going TO school (destination)",s:"저는 학교___가요. 학교___한국어를 공부해요.\n(I go to school. I study Korean at school.)",a:"에"},
        {type:"drag_fill",hint:"I work AT the café (action). Right now I am AT the café (static).",s:"저는 카페{1} 일해요. 지금 카페{2} 있어요.",blanks:{"1":"에서","2":"에"},pool:["에","에서","를","는"]},
        {type:"match",pairs:[{trg:"학교에 가요",src:"go TO school (destination)"},{trg:"학교에서 공부해요",src:"study AT school (action)"},{trg:"집에 있어요",src:"am AT home (static)"},{trg:"집에서 쉬어요",src:"rest AT home (action)"}]},
        {type:"mc",q:"서울에서 왔어요 means:",opts:["I am in Seoul","I go to Seoul","I came FROM Seoul","Seoul is far"],ans:"I came FROM Seoul",hint:"에서 also marks 'from' with movement verbs like 오다"},
        {type:"mc",q:"에서 is different from 에 because:",opts:["에서 is more polite than 에","에서 marks where actions happen","에서 is only for large places","They are fully interchangeable"],ans:"에서 marks where actions happen",hint:"The key distinction: action vs static/destination"}
  ]},
  {id:"kou6l3",title:"(으)로: By and Toward",icon:"🛤️",xp:20,board:true,steps:[
        {type:"intro",title:"Going BY Bus, Heading TOWARD the Station",desc:"(으)로\n→ by (means) / toward (direction)\n\nOne particle, two uses.",goals:["Use (으)로 for means of transport","Use (으)로 for direction","Know when to use 로 vs 으로"]},
        {type:"teach",trg:"(으)로",src:"by (means) / toward (direction)",pos:"noun",gender:null,phonetic:"(eu)-ro",note:"Marks direction or means (by bus, by subway).",example:"A: 어떻게 가요? B: 버스로 가요.",exampleSrc:"A: How do you get there? B: I go by bus.",deepDive:{
          title:"Using (으)로",
          text:"로: after vowels or ㄹ\n으로: after other consonants\n\n지하철로 (지하철 ends in a consonant → 로)\n버스로 (버스 ends in vowel → 로)\n학교으로 ✗ → 학교로 ✓ (ends in vowel → 로)\n\n왼쪽으로 (왼쪽 ends in consonant ㄱ → 으로)"
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"로  -  transport use",src:"by (vehicle/method)",pos:"intj",gender:null,phonetic:"ro",note:"Marks the METHOD of transport:\n\n버스로 가요: go by bus",example:"A: 기차로 가요? B: 네, 기차로 가요.",exampleSrc:"A: Are you going by train? B: Yes, I'm going by train.",deepDive:{
          title:"Using 로  -  transport use",
          text:"지하철로 가요: go by subway\n비행기로 가요: go by plane\n걸어서 가요: go on foot (걸어서 = by walking)\n\n걸어서: special form  -  걷다 (walk) + -어서."
        ,funFact:"Korean greetings change based on the age and status of the person you're talking to. Politeness levels matter."}},
        {type:"teach",trg:"로  -  direction use",src:"toward / in the direction of",pos:"intj",gender:null,phonetic:"ro",note:"Marks DIRECTION:\n\n왼쪽으로 가세요: go LEFT",example:"A: 어디로 가요? B: 왼쪽으로 가세요.",exampleSrc:"A: Which way do I go? B: Please go to the left.",deepDive:{title:"Using 로  -  direction use",text:"오른쪽으로 가세요: go RIGHT\n앞으로 가세요: go FORWARD\n뒤로 가세요: go BACK\n출구 쪽으로 가세요: go toward the exit",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"mc",q:"(으)로 with transport means:",opts:["toward","from","at","by (means of)"],ans:"by (means of)",hint:"버스로 = by bus. This particle marks the METHOD of travel."},
        {type:"mc",q:"'I go by subway'  -  correct form:",opts:["지하철에 가요","지하철를 가요","지하철로 가요","지하철가 가요"],ans:"지하철로 가요",hint:"지하철 ends in a consonant → 로 (not 으로)"},
        {type:"mc",q:"(으)로 marks:",opts:["Static location","Action location","Means/direction","Object"],ans:"Means/direction",hint:"BY bus, TOWARD the exit  -  means and direction"},
        {type:"mc",q:"왼쪽___가세요  -  correct form:",opts:["왼쪽가","왼쪽로","왼쪽으로","왼쪽에서"],ans:"왼쪽으로",hint:"왼쪽 ends in consonant ㄱ → 으로"},
        {type:"mc",q:"'By airplane' in Korean:",opts:["비행기에","비행기를","비행기로","비행기에서"],ans:"비행기로",hint:"비행기 ends in vowel → 로"},
        {type:"fb",opts:["으로","에서","에","를"],hint:"Vowel ending or consonant ending?",s:"오른쪽___가세요.\n(Go right)",a:"으로"},
        {type:"fb",opts:["로","으로","에서","를"],hint:"버스 ends in vowel → 로 (by bus)",s:"저는 매일 버스___학교에 가요.\n(I go to school by bus.)",a:"로"},
        {type:"match",pairs:[{trg:"버스로",src:"by bus"},{trg:"지하철로",src:"by subway"},{trg:"왼쪽으로",src:"to the left"},{trg:"앞으로",src:"forward"}]},
        {type:"drag_fill",hint:"Go straight, then go left. From there, go by bus.",s:"직진하다가 왼쪽{1} 가세요. 거기서 버스{2} 가면 돼요.",blanks:{"1":"으로","2":"로"},pool:["으로","로","에","에서"]},
        {type:"mc",q:"How is 에 different from (으)로?",opts:["They mean the same thing","에: to/at; 로: toward","로 is more formal than 에","에 is for transport only"],ans:"에: to/at; 로: toward",hint:"에 = destination. 로 = direction/means."},
        {type:"mc",q:"걸어서 가요. 걸어서 = going by:",opts:["Car (driving)","Train (riding)","Foot (walking)","Bicycle (cycling)"],ans:"Foot (walking)",hint:"걷다 (to walk) + -어서 = by walking"},
        {type:"teach",trg:"기다리다",src:"to wait",pos:"verb",gender:null,phonetic:"gi-da-ri-da",note:"기다리다 → 기다려요 (polite present).\nㅣ+ㅓ contracts to ㅕ.\n",example:"A: 지금 뭐 해요? B: 버스를 기다려요.",exampleSrc:"A: What are you doing now? B: I'm waiting for the bus.",deepDive:{title:"Common Phrases",text:"여기에서 기다리세요: please wait here.\n잠깐만 기다려요: wait a moment.\n버스를 기다려요: I'm waiting for the bus.",funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"teach",trg:"찾다",src:"to find / to look for",pos:"verb",gender:null,phonetic:"chat-da",note:"찾다 → 찾아요 (polite present).\nBright vowel in stem.",example:"A: 뭘 찾아요? B: 지하철역을 찾아요.",exampleSrc:"A: What are you looking for? B: I'm looking for the subway station.",deepDive:{title:"Common Uses",text:"길을 찾다: look for the way.\n친구를 찾다: look for a friend.\n지갑을 찾다: look for a wallet.\n\n찾았어요!: I found it!",funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"teach",trg:"(이)랑",src:"and / with (casual)",pos:"part",gender:null,phonetic:"(i)-rang",note:"Casual and/with particle.\n\nAfter vowel: no extra syllable.\nAfter consonant: extra syllable added.",example:"A: 누구랑 가요? B: 친구랑 같이 가요.",exampleSrc:"A: Who are you going with? B: I'm going with a friend.",deepDive:{
          title:"(이)랑",
          text:"Vowel ending + 랑: 친구랑, 엄마랑\nConsonant ending + 이랑: 선생님이랑, 동생이랑\n\n친구랑 = 친구하고 (same meaning, more casual).\n\n하고: neutral.\n(이)랑: casual/spoken.\n와/과: formal/written."
        ,funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"mc",q:"찾다 means:",opts:["to wait","to look for","to ask","to find"],ans:"to find",hint:"Used when searching for something. 길을 찾다 = find the way."},
        {type:"teach",trg:"에게 / 한테",src:"to (a person)",pos:"verb",gender:null,phonetic:"e-ge / han-te",note:"에게: to (a person)  -  formal/written.\n한테: to (a person)  -  casual/spoken.\n",example:"A: 누구한테 전화해요? B: 엄마한테 전화해요.",exampleSrc:"A: Who are you calling? B: I'm calling mom.",deepDive:{
          title:"Using 에게 / 한테",
          text:"친구에게 = 친구한테 (same meaning).\n\n선생님에게 물어봤어요: I asked the teacher.\n엄마한테 전화했어요: I called mom.\n\n에: for places/things.\n에게/한테: for people/animals."
        ,funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"mc",q:"친구랑 같이 가요. (이)랑 is the casual form of:",opts:["하고","에서","의","에"],ans:"하고",hint:"(이)랑  (and/with). More casual"},
        {type:"mc",q:"에게 and 한테 are:",opts:["Same meaning, 에게 is formal","에게 is for places","한테 is for things","Different meanings"],ans:"Same meaning, 에게 is formal",hint:"에게 (formal) = 한테 (casual). Both mean 'to a person.'"}
  ]},
  {id:"kou6l4.1",title:"Directions: Left, Right, Straight",icon:"🧭",xp:18,board:true,steps:[
        {type:"intro",title:"Left, Right, Straight, Nearby",desc:"왼쪽 / 오른쪽\n→ left / right\n\nDirection words for navigation.",goals:["Give and understand basic directions","Use 어디에 있어요? to find places","Know subway exit culture"]},
        {type:"teach",trg:"왼쪽",src:"left",pos:"noun",gender:null,phonetic:"oen-jjok",note:"왼쪽: left (side).\n쪽 = side / direction.",example:"A: 어디로 가요? B: 왼쪽으로 가세요.",exampleSrc:"A: Which way do I go? B: Go to the left.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"오른쪽",src:"right",pos:"noun",gender:null,phonetic:"o-reun-jjok",note:"오른쪽: right (side).\n왼쪽 (left) ↔ 오른쪽 (right).",example:"A: 카페가 어디에 있어요? B: 오른쪽에 있어요.",exampleSrc:"A: Where is the cafe? B: It's on the right.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"직진",src:"straight ahead",pos:"noun",gender:null,phonetic:"jik-jin",note:"직진: straight ahead.\nCOMPOUND: 직 (straight) + 진 (advance).",example:"A: 여기에서 어떻게 가요? B: 직진하세요.",exampleSrc:"A: How do I go from here? B: Go straight.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"mc",q:"오른쪽 means:",opts:["right","left","straight","behind"],ans:"right",hint:"The opposite of 왼쪽. A direction word with 쪽 (side/direction)."},
        {type:"teach",trg:"유턴",src:"U-turn",pos:"noun",gender:null,phonetic:"yu-teon",note:"유턴: U-turn (Konglish from English).",example:"A: 길을 지나쳤어요. B: 여기서 유턴하세요.",exampleSrc:"A: I passed the road. B: Make a U-turn here.",funFact:"A Konglish loanword adapted from English. Korean has borrowed many modern and tech words."},
        {type:"teach",trg:"근처",src:"nearby / in the vicinity",pos:"noun",gender:null,phonetic:"geun-cheo",note:"근처: nearby area.\n근처에: in the vicinity of.\n",example:"A: 여기 근처에 카페가 있어요? B: 네, 역 근처에 있어요.",exampleSrc:"A: Is there a cafe nearby? B: Yes, there's one near the station.",deepDive:{
          title:"Using 근처",
          text:"여기 근처에: near here\n학교 근처에: near the school\n역 근처에: near the station\n\n역: (subway/train) station  -  important word!"
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"mc",q:"근처 means:",opts:["Far away","Nearby","Inside","Behind"],ans:"Nearby",hint:"근처 = nearby area / in the vicinity"},
        {type:"teach",trg:"어디에 있어요?",src:"Where is it?",pos:"intj",gender:null,phonetic:"eo-di-e i-sseo-yo?",note:"어디: where (question word).\n어디에 있어요?: 'Where does it exist?'\n= Where is it?",example:"A: 화장실이 어디에 있어요? B: 저기 왼쪽에 있어요.",exampleSrc:"A: Where is the bathroom? B: Over there on the left.",deepDive:{
          title:"Using 어디에 있어요?",
          text:"화장실이 어디에 있어요?: Where's the bathroom?\n출구가 어디에 있어요?: Where's the exit?\n지하철역이 어디에 있어요?: Where's the subway station?"
        ,funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"teach",trg:"역",src:"station (subway/train)",pos:"noun",gender:null,phonetic:"yeok",note:"역: station.\n\n홍대역: Hongdae Station",example:"A: 다음 역이 어디예요? B: 서울역이에요.",exampleSrc:"A: What's the next station? B: It's Seoul Station.",deepDive:{
          title:"Using 역",
          text:"강남역: Gangnam Station\n서울역: Seoul Station\n\n역 근처에: near the station\n몇 번 출구: which numbered exit\n\n번: number counter (for numbering things)."
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"tip",title:"🚇 Numbered Exits: Korea's Navigation Secret",deepDive:{
          title:"Navigating by Exit Number",
          text:"Koreans give ALL directions by exit number.\n\n'3번 출구로 나오세요.\n→ Please come out exit 3.\n\n홍대역 9번 출구 앞에서 만나요.\n→ Let's meet in front of Hongdae Station exit 9.\n\nPractical use:\n• Save the exit number, not just the station\n• Landmarks are always described by exit number\n• Meeting spots are '역 X번 출구 앞' (in front of exit X)"
        },text:"Every Korean subway station has NUMBERED EXITS.\n\n출구: exit (출=out + 구=opening/mouth)\n1번 출구, 2번 출구, 3번 출구...\n\nWhy this matters:"},
        {type:"mc",q:"쪽 in 왼쪽/오른쪽 means:",opts:["Turn / rotate","Side / direction","Hand / palm","Road / street"],ans:"Side / direction",hint:"쪽 = side/direction suffix. 이쪽, 앞쪽, 뒤쪽 all use it."},
        {type:"mc",q:"'Where is the bathroom?' in Korean:",opts:["화장실이 뭐예요?","화장실이 어디에 있어요?","화장실을 가요?","화장실에서 있어요?"],ans:"화장실이 어디에 있어요?",hint:"어디에 있어요? = Where does it exist? = Where is it?"},
        {type:"mc",q:"직진 = 직 + 진. What does it mean?",opts:["Slow down","Turn left","Go straight","Go back"],ans:"Go straight",hint:"직 (straight) + 진 (advance)"},
        {type:"mc",q:"Koreans give directions using:",opts:["Street names like America","Numbered subway exits","Building colors","Compass directions"],ans:"Numbered subway exits",hint:"'3번 출구로 나오세요'  -  exit number is the landmark"},
        {type:"fb",opts:["어디에","어디를","어디서","어디가"],hint:"... 있어요 = where is it? (어디 + location particle 에)",s:"지하철역이 ___ 있어요?\n(Where is the subway station?)",a:"어디에"},
        {type:"fb",opts:["으로","에","에서","를"],hint:"Vowel ending or consonant ending?",s:"직진하다가 오른쪽___가세요.\n(Go straight, then go to the right.)",a:"으로"},
        {type:"fb",opts:["근처","뒤쪽","직진","출구"],hint:"... = nearby/vicinity",s:"학교 ___에 카페가 있어요.\n(There's a café ___ the school.)",a:"근처"},
        {type:"match",pairs:[{trg:"왼쪽으로 가세요",src:"go left"},{trg:"직진하세요",src:"go straight"},{trg:"오른쪽으로 가세요",src:"go right"},{trg:"3번 출구",src:"exit number 3"}]},
        {type:"drag_fill",hint:"Go straight, then go left. It's near the station.",s:"{1}하다가 왼쪽{2} 가세요. 역 {3}에 있어요.",blanks:{"1":"직진","2":"으로","3":"근처"},pool:["직진","오른쪽","으로","에서","근처","앞쪽"]},
        {type:"mc",q:"Correct way to say 'meet at exit 9':",opts:["9번 출구 앞에서 만나요","9번에서 만나요","역에 만나요","9번에 역을 만나요"],ans:"9번 출구 앞에서 만나요",hint:"역 + numbered exit + 앞에서 + 만나요  -  standard Korean meeting arrangement"}
  ]},
  {id:"kou6l4.2",title:"Positions: Above, Beside, Between",icon:"📍",xp:18,board:true,steps:[
        {type:"intro",title:"Where Things Are",desc:"위 / 아래 / 옆\n→ above / below / beside\n\nEight position words.",goals:["Use 위/아래 for above and below","Use 옆/사이 for beside and between","Cross and turn with 건너다 and 돌다"]},
        {type:"teach",trg:"위",src:"above / on top of",pos:"noun",gender:null,phonetic:"wi",note:"위: above, on top.\n위에: on top of / above (+ 에 for location).\n",example:"A: 책이 어디에 있어요? B: 책상 위에 있어요.",exampleSrc:"A: Where is the book? B: It's on top of the desk.",deepDive:{title:"Using 위",text:"책상 위에: on the desk.\n냉장고 위에: on top of the fridge.\n\n위 ↔ 아래/밑: top ↔ bottom.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"옆",src:"beside / next to",pos:"noun",gender:null,phonetic:"yeop",note:"옆: beside, next to.\n옆에: next to / beside.\n",example:"A: 은행이 어디에 있어요? B: 학교 옆에 있어요.",exampleSrc:"A: Where is the bank? B: It's next to the school.",deepDive:{
          title:"Using 옆",
          text:"학교 옆에: next to the school.\n내 옆에 앉아요: sit next to me.\n\n방향(direction) vs 위치(position):\n왼쪽으로 가세요 (direction) vs 옆에 있어요 (position)."
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"mc",q:"왼쪽 means:",opts:["Right","Left","Straight","Nearby"],ans:"Left",hint:"왼 = left, 오른 = right"},
        {type:"teach",trg:"밖",src:"outside",pos:"noun",gender:null,phonetic:"bak",note:"밖: outside.\n밖에: outside of.\n",example:"A: 고양이가 어디에 있어요? B: 밖에 있어요.",exampleSrc:"A: Where is the cat? B: It's outside.",deepDive:{title:"Using 밖",text:"안 (inside) ↔ 밖 (outside).\n\n밖에 나가요: go outside.\n문 밖에: outside the door.\n집 밖에: outside the house.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"사이",src:"between",pos:"part",gender:null,phonetic:"sa-i",note:"사이: between.\nBetween A and B (position particle).\n",example:"A: 약국이 어디에 있어요? B: 은행과 카페 사이에 있어요.",exampleSrc:"A: Where is the pharmacy? B: It's between the bank and the cafe.",deepDive:{title:"Using 사이",text:"은행과 카페 사이에: between the bank and café.\n\n사이 also means 'relationship':\n우리 사이: our relationship / between us.",funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"teach",trg:"아래 / 밑",src:"below / under",pos:"intj",gender:null,phonetic:"a-rae / mit",note:"아래: below, under.\n밑: under (interchangeable).\n\n위 ↔ 아래: above ↔ below.\n책상 아래에 = under the desk.",example:"A: 가방이 어디에 있어요? B: 책상 아래에 있어요.",exampleSrc:"A: Where is the bag? B: It's under the desk.",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."},
        {type:"teach",trg:"앞",src:"front / in front of",pos:"noun",gender:null,phonetic:"ap",note:"앞: front, in front of.\n앞에: in front of (location).\n앞으로: forward (direction).\n\n앞 ↔ 뒤: front ↔ behind.",example:"A: 어디에서 만나요? B: 학교 앞에서 만나요.",exampleSrc:"A: Where shall we meet? B: Let's meet in front of the school.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"뒤",src:"behind / back",pos:"noun",gender:null,phonetic:"dwi",note:"뒤: behind, back.\n뒤에: behind (location).\n뒤로: backward (direction).\n\n앞 ↔ 뒤: front ↔ behind.",example:"A: 주차장이 어디에 있어요? B: 건물 뒤에 있어요.",exampleSrc:"A: Where is the parking lot? B: It's behind the building.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"mc",q:"책상 아래에 있어요 means:",opts:["It's on the desk","It's under the desk","It's next to the desk","It's behind the desk"],ans:"It's under the desk",hint:"아래 = below/under. 위 ↔ 아래."},
        {type:"tip",title:"📍 The Complete 8-Position Set",deepDive:{
          title:"Position Words in Full Sentences",
          text:"위 = on top\n아래/밑 = below/under\n앞 = in front\n뒤 = behind\n옆 = beside/next to\n사이 = between\n안 = inside\n밖 = outside\n\nPattern: [reference noun] + position + 에:\n테이블 위에 = on (top of) the table\n가방 안에 = inside the bag\n\nAll use +에 있어요 to say 'is at [position]':\n\n책상 위에 있어요.\n→ It's on top of the desk.\n\n은행 옆에 있어요.\n→ It's next to the bank.\n\n집 밖에 있어요.\n→ It's outside the house."
        },text:"위/아래 = above/below, 앞/뒤 = front/behind\n옆/사이 = beside/between, 안/밖 = inside/outside\n\nPattern: noun + position + 에 있어요\n책상 위에 있어요 = It's on the desk."},
        {type:"teach",trg:"건너다 / 건너가다",src:"to cross",pos:"verb",gender:null,phonetic:"geon-neo-da",note:"건너다: to cross.\n건너가다: to go across.\n",example:"A: 여기에서 어떻게 가요? B: 길을 건너세요.",exampleSrc:"A: How do I go from here? B: Cross the street.",deepDive:{
          title:"Using 건너다 / 건너가다",
          text:"길을 건너다: cross the road.\n다리를 건너다: cross the bridge.\n횡단보도: crosswalk.\n\n건너세요: please cross (polite command)."
        ,funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"mc",q:"역 means:",opts:["Exit","Station","Bus stop","Bridge"],ans:"Station",hint:"역 = subway/train station"},
        {type:"teach",trg:"돌다 / 돌아가다",src:"to turn",pos:"verb",gender:null,phonetic:"dol-da",note:"돌다: to turn.\n돌아가다: to turn and go.\n",example:"A: 직진해요? B: 아니요, 왼쪽으로 돌아가세요.",exampleSrc:"A: Go straight? B: No, turn left.",deepDive:{
          title:"Using 돌다 / 돌아가다",
          text:"왼쪽으로 돌아가세요: turn left.\n오른쪽으로 돌아가세요: turn right.\n\n좌회전/우회전: formal signs.\n돌아가세요 = conversational direction."
        ,funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"mc",q:"'It's next to the school'  -  correct:",opts:["학교 위에 있어요","학교 옆에 있어요","학교 사이에 있어요","학교 밖에 있어요"],ans:"학교 옆에 있어요",hint:"옆 = beside/next to"},
        {type:"mc",q:"'Between the bank and the café':",opts:["은행 카페 위에","은행과 카페 옆에","은행과 카페 사이에","은행과 카페 밖에"],ans:"은행과 카페 사이에",hint:"A와 B 사이에 = between A and B"},
        {type:"mc",q:"안 ↔ 밖 means:",opts:["Front ↔ Back","Left ↔ Right","Inside ↔ Outside","Above ↔ Below"],ans:"Inside ↔ Outside",hint:"안 = inside, 밖 = outside"},
        {type:"mc",q:"'Cross the crosswalk'  -  correct verb:",opts:["가세요","건너세요","돌아가세요","내려가세요"],ans:"건너세요",hint:"건너다 = to cross"},
        {type:"fb",opts:["위","아래","옆","사이"],hint:"위 = above/on top",s:"책상 ___ 에 책이 있어요.\n(The book is on top of the desk)",a:"위"},
        {type:"fb",opts:["돌아가세요","건너세요","가세요","내려가세요"],hint:"돌다/돌아가다 = to turn",s:"직진하다가 왼쪽으로 ___.\n(Go straight then turn left)",a:"돌아가세요"},
        {type:"match",pairs:[{trg:"위",src:"above/on top"},{trg:"옆",src:"beside/next to"},{trg:"밖",src:"outside"},{trg:"사이",src:"between"}]}
  ]},
  {id:"kou6l5",title:"★ Verb Review: Contractions + Irregular Seeds",icon:"🔧",xp:25,board:true,steps:[
        {type:"intro",title:"The Full Engine  -  Contractions and What's Coming",desc:"Contraction patterns and a preview of irregular verbs.",goals:["Master all contraction patterns","See every verb class you've used in A1 systematically","Plant seeds for the 5 irregular families","Preview the past tense structure "]},
        {type:"tip",title:"📋 The Complete Contraction Map",deepDive:{
          title:"All Contractions",
          text:"ㅣ + 어 → ㅕ\n마시다 → 마셔요 (drink)\n\nㅡ drops entirely\n쓰다 → 써요 (write)\n\n하다 → always 해요 (special)\n\nNO CONTRACTION (consonant-ending stems):\n먹다 → 먹어요 (eat)\n있다 → 있어요 (have/exist)\n읽다 → 읽어요 (read)"
        },text:"When a vowel stem meets -아/어요, contractions happen:\n\nㅏ + 아 → ㅏ (merge)\n가다 → 가요 (go)\n\nㅗ + 아 → ㅘ\n오다 → 와요 (come)\n\nㅜ + 어 → ㅝ\n배우다 → 배워요 (learn)"},
        {type:"mc",q:"배우다 (to learn)  -  stem 배우, vowel ㅜ. Polite form?",opts:["배우아요","배워요","배우요","배해요"],ans:"배워요",hint:"ㅜ+ㅓ contracts to ㅝ. 배우 + 어요"},
        {type:"mc",q:"쓰다 (to write/use)  -  stem 쓰, vowel ㅡ. Polite form?",opts:["쓰어요","쓰아요","써요","쓰요"],ans:"써요",hint:"ㅡ drops when followed by a vowel ending. 쓰 + 어요"},
        {type:"mc",q:"읽다 (to read)  -  stem 읽, consonant. Polite form?",opts:["읽아요","읽어요","읽요","읽해요"],ans:"읽어요",hint:"Dark vowel ㅣ in stem → 어요. No contraction."},
        {type:"tip",title:"⚡ The 5 Irregular Families: Preview",deepDive:{
          title:"The Other 3 Families + Why They Exist",
          text:"ㅅ-irregular: ㅅ drops\n낫다 → 나아요 (get better)\n\n르-irregular: 르 doubles ㄹ\n모르다 → 몰라요 (not know)\n부르다 → 불러요 (call)\n\nㅎ-irregular: ㅎ drops/transforms\n빨갛다 → 빨개요 (red)\n하얗다 → 하얘요 (white)\n\nKorean irregulars are historical sound fossils.\nㄷ: in old Korean, ㄷ softened to ㄹ before vowels.\nㅂ: was originally like English 'v', weakened to 우.\n\nYou've seen some already. Full lessons on each family come later."
        },text:"Most Korean verbs are completely regular.\nBut 5 families behave differently when vowel endings attach.\n\nㄷ-irregular: ㄷ → ㄹ\n걷다 → 걸어요 (walk), 듣다 → 들어요 (listen)\n\nㅂ-irregular: ㅂ → 우\n덥다 → 더워요 (hot), 춥다 → 추워요 (cold)"},
        {type:"mc",q:"덥다 (hot) is a ㅂ-irregular. Its polite form is:",opts:["덥어요","더워요","덥아요","덥해요"],ans:"더워요",hint:"ㅂ-irregular: ㅂ"},
        {type:"mc",q:"모르다 (not know) is a 르-irregular. Its polite form is:",opts:["모르어요","모르아요","몰라요","모르해요"],ans:"몰라요",hint:"르-irregular: 르"},
        {type:"teach",trg:"과거 시제 미리보기",src:"Adding the past tense car",pos:"part",gender:null,phonetic:"",note:"The past tense adds ONE car between the stem and -요:\n\n가다 → 갔어요 (bright ㅏ → 았어요)",example:"A: 어제 뭐 했어요? B: 밥을 먹었어요.",exampleSrc:"A: What did you do yesterday? B: I ate a meal.",deepDive:{
          title:"과거 시제 미리보기",
          text:"먹다 → 먹었어요 (dark ㅓ → 었어요)\n하다 → 했어요 (always)\n\n⚡ Same vowel harmony rule applies to past!\nBright stem → -았어요\nDark stem → -었어요\n하다 → 했어요 (did)\n\nThis is later. You're ready. Just notice the pattern now."
        ,funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"mc",q:"먹다 (dark vowel)  -  past tense form:",opts:["먹았어요","먹었어요","먹해요","먹다했어요"],ans:"먹었어요",hint:"Check: does the word end in a vowel or consonant?"},
        {type:"mc",q:"가다 (bright vowel ㅏ)  -  past tense form:",opts:["가었어요","갔어요","가았어요","가했어요"],ans:"갔어요",hint:"Check: does the word end in a vowel or consonant?"},
        {type:"mc",q:"하다  -  past tense form:",opts:["하았어요","하었어요","했어요","하했어요"],ans:"했어요",hint:"하다 always: 해요 (present), ... (past). Special contraction."},
        {type:"match",pairs:[{trg:"가다",src:"go"},{trg:"먹다",src:"eat"},{trg:"하다",src:"do"},{trg:"오다",src:"come"}]},
        {type:"tip",title:"🎓 A1 Verb Graduation",deepDive:{
          title:"What You Take Into A2",
          text:"📋 All contraction patterns\n🌱 5 irregular families (to be explained in A2)\n\n⏰ Past tense preview: -았/었어요\n\nThe past tense gets its own lesson later.\nYou already know the engine. You just need the new car.\n\nWelcome to A2."
        },text:"You leave A1 knowing:\n\n🚂 Stem + ending = every Korean verb\n⚡ Bright (ㅏ/ㅗ) → -아요 / Dark → -어요\n🎙️ 해요체 = your register"},
        {type:"tip",title:"📚 Core Verbs: Fuel for the Engine",deepDive:{
          title:"Why These Verbs Now",
          text:"Past tense gets its own lesson later.\nEvery verb below reappears there.\nKnow the present → the past is automatic.\nNo new rules. Just new fuel."
        },text:"These verbs appear everywhere in Korean.\nYou need them before Past tense gets its own lesson later.\n\nAll follow rules you already know."},
        {type:"teach",trg:"읽다 → 읽어요",src:"to read → reads",pos:"verb",gender:null,phonetic:"ik-da → il-geo-yo",note:"읽다: to read.\n\n읽다 → 읽어요\n→ Dark vowel ㅣ in stem → takes -어요.",example:"A: 뭐 해요? B: 책을 읽어요.",exampleSrc:"A: What are you doing? B: I'm reading a book.",deepDive:{
          title:"Pronunciation Note",
          text:"읽다 is pronounced [익따]. The ㄹ is silent.\n읽어요 is pronounced [일거요]. The ㄹ reappears before a vowel.\n\nThis is 연음 (liaison). Spelling stays the same."
        ,funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"teach",trg:"쓰다 → 써요 (write/use)",src:"to write / to use → writes / uses",pos:"verb",gender:null,phonetic:"sseu-da → sseo-yo",note:"쓰다: to write OR to use.\n\n쓰다 → 써요\n→ ㅡ drops, -어요 attaches.",example:"A: 지금 뭐 해요? B: 편지를 써요.",exampleSrc:"A: What are you doing now? B: I'm writing a letter.",deepDive:{
          title:"Two Meanings of 쓰다",
          text:"쓰다 (to write):\n편지를 써요 = I write a letter.\n이름을 써요 = I write a name.\n\n쓰다 (to use):\n이거 써요 = I use this.\n한국어를 써요 = I use Korean.\n\nContext makes it clear."
        ,funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"teach",trg:"일하다 → 일해요",src:"to work → works",pos:"verb",gender:null,phonetic:"il-ha-da → il-hae-yo",note:"일하다: to work.\n하다 compound: 일 (work) + 하다 (do).\n\n일하다 → 일해요 (always 해요).",example:"A: 어디에서 일해요? B: 회사에서 일해요.",exampleSrc:"A: Where do you work? B: I work at a company.",deepDive:{
          title:"일 = Work",
          text:"일하다 = to work (noun + 하다).\nSame pattern as 공부하다, 운동하다.\n\n회사에서 일해요: I work at a company.\n매일 일해요: I work every day.\n\n일 also means 'day' and 'one' in different contexts."
        ,funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"teach",trg:"주다 → 줘요",src:"to give → gives",pos:"verb",gender:null,phonetic:"ju-da → jweo-yo",note:"주다: to give.\n\n주다 → 줘요\n→ ㅜ + 어 = ㅝ contraction.",example:"A: 누구한테 줘요? B: 친구한테 선물을 줘요.",exampleSrc:"A: Who are you giving it to? B: I'm giving a gift to my friend.",deepDive:{
          title:"주다 in Patterns",
          text:"주다 alone = to give:\n물 좀 줘요 = give me some water\n\n-아/어 주다 = do FOR someone:\n읽어 줘요 = read it for me\n도와줘요 = help me\n\n⚡ -아/어 주다 (doing-for-someone) gets its own lesson later."
        ,funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"mc",q:"일하다 → polite present:",opts:["일하아요","일해요","일하여요","일해아요"],ans:"일해요",hint:"하다 compounds always → 해요"},
        {type:"fb",opts:["읽어요","읽아요","읽해요","읽요"],hint:"읽다: dark vowel ㅣ → takes -어요.",s:"매일 책을 ___.\n(I read a book every day.)",a:"읽어요"},
        {type:"teach",trg:"자다 → 자요",src:"to sleep → sleeps",pos:"verb",gender:null,phonetic:"ja-da → ja-yo",note:"자다: to sleep.\n\n자다 → 자요\n→ Bright ㅏ merges with -아요.",example:"A: 보통 몇 시에 자요? B: 11시에 자요.",exampleSrc:"A: What time do you usually sleep? B: I sleep at 11.",deepDive:{
          title:"Sleep Vocabulary",
          text:"자다 → 자요: to sleep\n일어나다 → 일어나요: to wake up\n졸리다 → 졸려요: to be sleepy\n\n잘 자요! = Good night!\n잘 잤어요? = Did you sleep well?"
        ,funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"teach",trg:"앉다 → 앉아요",src:"to sit → sits",pos:"verb",gender:null,phonetic:"an-da → an-ja-yo",note:"앉다: to sit.\n\n앉다 → 앉아요\n→ Bright ㅏ in stem → takes -아요.",example:"A: 어디에 앉아요? B: 여기 앉아요.",exampleSrc:"A: Where do I sit? B: Sit here.",deepDive:{
          title:"앉다 Pronunciation",
          text:"앉다 (to sit) = [안따]. 앉아요 (sit, polite) = [안자요].\n\n여기 앉으세요 = please sit here.\nOpposite: 서다 → 서요 (to stand)."
        ,funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"teach",trg:"입다 → 입어요",src:"to wear (clothes) → wears",pos:"verb",gender:null,phonetic:"ip-da → i-beo-yo",note:"입다: to wear (clothes).\n\n입다 → 입어요\n→ Dark vowel ㅣ → takes -어요.",example:"A: 오늘 뭐 입어요? B: 티셔츠를 입어요.",exampleSrc:"A: What are you wearing today? B: I'm wearing a T-shirt.",deepDive:{
          title:"Korean 'Wear' Verbs",
          text:"Korean has DIFFERENT verbs for different items:\n입다: clothes (shirts, pants)\n신다: shoes/socks (feet)\n쓰다: hats/glasses (head)\n끼다: gloves/rings (hands)\n하다: accessories (ties, scarves)\n\nEnglish uses one 'wear' for everything.\nKorean specifies WHERE on the body."
        ,funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"match",pairs:[{trg:"읽다 → 읽어요",src:"to read"},{trg:"쓰다 → 써요",src:"to write/use"},{trg:"자다 → 자요",src:"to sleep"},{trg:"입다 → 입어요",src:"to wear"}]},
        {type:"mc",q:"주다 → polite present:",opts:["주아요","주어요","줘요","줘아요"],ans:"줘요",hint:"ㅜ + 어 contracts to ㅝ"}
  ]},
  {id:"kou6l6",title:"Weather Talk",icon:"🌤️",xp:20,board:true,steps:[
        {type:"intro",title:"Hot, Cold, and Irregular Weather Words",desc:"Weather vocabulary. Several key words are irregular.",goals:["Say hot, cold, sunny, rainy, cloudy","Recognise ㅂ-irregular weather verbs","Use 날씨가 어때요? (How's the weather?)"]},
        {type:"teach",trg:"날씨",src:"weather",pos:"part",gender:null,phonetic:"nal-ssi",note:"날씨: weather.\n날: day/weather. 씨: suffix.\n",example:"A: 오늘 날씨가 어때요? B: 맑아요!",exampleSrc:"A: How's the weather today? B: It's clear!",deepDive:{title:"Full Pattern",text:"날씨가 어때요?: How's the weather?\n어때요?: 'How is it?'  -  very useful question pattern.",funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"teach",trg:"덥다 → 더워요",src:"to be hot (weather) → it's hot",pos:"verb",gender:null,phonetic:"deop-da → deo-wo-yo",note:"덥다 → 더워요 (ㅂ-irregular).\nNOT the expected form. Irregular change applies.\nFull pattern in a later lesson.",example:"A: 밖에 더워요? B: 네, 오늘 너무 더워요.",exampleSrc:"A: Is it hot outside? B: Yes, it's really hot today.",deepDive:{title:"ㅂ-Irregular Weather Words",text:"덥다 → 더워요 (hot)\n춥다 → 추워요 (cold)\n\nSame ㅂ→워 pattern in both.\nJust remember: 더워요, 추워요.",funFact:"An irregular verb. Korean has about 7 irregular patterns, but they follow consistent rules once you learn them."}},
        {type:"teach",trg:"춥다 → 추워요",src:"to be cold (weather) → it's cold",pos:"verb",gender:null,phonetic:"chup-da → chu-wo-yo",note:"춥다 → 추워요 (ㅂ-irregular).\nNOT the expected regular form. Same irregular pattern.",example:"A: 겨울에 추워요? B: 네, 너무 추워요.",exampleSrc:"A: Is it cold in winter? B: Yes, it's very cold.",deepDive:{
          title:"Seasons in Korean",
          text:"봄\n→ spring\n\n여름\n→ summer\n\n가을\n→ autumn\n\n겨울\n→ winter\n\n여름에 더워요: It's hot in summer.\n겨울에 추워요: It's cold in winter."
        ,funFact:"An irregular verb. Korean has about 7 irregular patterns, but they follow consistent rules once you learn them."}},
        {type:"mc",q:"오늘 날씨가 어때요?  -  날씨 means:",opts:["Temperature","Weather","Season","Wind"],ans:"Weather",hint:"날씨 = weather. 어때요? = How is it?"},
        {type:"teach",trg:"맑다 → 맑아요",src:"to be clear/sunny → it's clear",pos:"verb",gender:null,phonetic:"mak-da → mal-ga-yo",note:"맑다: clear, sunny.\n맑아요: regular! (no irregular change)\n",example:"A: 오늘 날씨가 어때요? B: 날씨가 맑아요.",exampleSrc:"A: How's the weather today? B: The weather is clear.",deepDive:{title:"How to be clear/sunny Works",text:"날씨가 맑아요: the weather is clear\n하늘이 맑아요: the sky is clear\n\n하늘: sky. 하늘색: sky-blue (하늘 + 색).",funFact:"An irregular verb. Korean has about 7 irregular patterns, but they follow consistent rules once you learn them."}},
        {type:"teach",trg:"비가 와요",src:"it's raining",pos:"intj",gender:null,phonetic:"bi-ga wa-yo",note:"비: rain.\n와요: comes. 비가 오다 literally means rain comes.\n",example:"A: 밖에 비가 와요? B: 네, 비가 많이 와요.",exampleSrc:"A: Is it raining outside? B: Yes, it's raining a lot.",deepDive:{
          title:"Using 비가 와요",
          text:"Korean thinks of rain, snow as 'coming':\n비가 와요: rain comes = it rains\n눈이 와요: snow comes = it snows\n\n비가 많이 와요: it rains a lot\n비가 조금 와요: it rains a little"
        ,funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"teach",trg:"흐리다 → 흐려요",src:"to be cloudy → it's cloudy",pos:"verb",gender:null,phonetic:"heu-ri-da → heu-ryeo-yo",note:"흐리다: cloudy.\n흐려요: it's cloudy (이 + 어 → 여 contraction).\n",example:"A: 날씨가 좋아요? B: 아니요, 오늘 흐려요.",exampleSrc:"A: Is the weather nice? B: No, it's cloudy today.",deepDive:{
          title:"Full Pattern",
          text:"Same pattern you saw with 마시다 → 마셔요.\n이 + 어 → 여 (vowel contraction)\n\n맑음: clear (weather forecast)\n흐림: cloudy (weather forecast)\n비: rain (weather forecast)"
        ,funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."}},
        {type:"mc",q:"덥다 → 더워요 means:",opts:["It is cold","It is hot","It is raining","It is cloudy"],ans:"It is hot",hint:"덥다 = hot (weather) → 더워요"},
        {type:"mc",q:"'It's hot' in Korean (correct form):",opts:["덥어요","덥요","더워요","더워다"],ans:"더워요",hint:"덥다 is ㅂ-irregular. ㅂ becomes 우 before vowel endings."},
        {type:"mc",q:"'It's raining' in Korean:",opts:["비가 와요","비가 있어요","비가 내려요","비가 해요"],ans:"비가 와요",hint:"Korean thinks of rain as 'coming': 비가 오다"},
        {type:"mc",q:"날씨가 어때요? means:",opts:["What's the weather?","Where is the weather?","The weather is good","What season is it?"],ans:"What's the weather?",hint:"어때요 = how is it? 날씨 = weather"},
        {type:"mc",q:"춥다 → 추워요 is an example of:",opts:["Regular conjugation pattern","ㅂ-irregular (ㅂ becomes 워)","르-irregular pattern type","으-irregular pattern type"],ans:"ㅂ-irregular (ㅂ becomes 워)",hint:"ㅂ-irregular: ㅂ becomes 워 before endings. The full pattern comes later."},
        {type:"fb",opts:["흐려요","흐리어요","맑아요","더워요"],hint:"흐리다 → ... (이 + 어 → 여)",s:"오늘 날씨가 ___. 비가 와요.\n(It's cloudy today. It's raining.)",a:"흐려요"},
        {type:"fb",opts:["더워요","덥어요","덥요","더위요"],hint:"덥다 is ㅂ-irregular. ㅂ becomes 우 before vowel endings.",s:"여름에 ___, 겨울에 추워요.\n(In summer it's hot, in winter it's cold)",a:"더워요"},
        {type:"match",pairs:[{trg:"더워요",src:"it's hot"},{trg:"추워요",src:"it's cold"},{trg:"맑아요",src:"it's clear/sunny"},{trg:"비가 와요",src:"it's raining"}]},
        {type:"drag_fill",hint:"It's cloudy today. It's raining.",s:"오늘 날씨가 {1}. {2}가 {3}.",blanks:{"1":"흐려요","2":"비","3":"와요"},pool:["더워요","흐려요","비","눈","와요","있어요"]},
        {type:"mc",q:"눈이 와요 means:",opts:["It's snowing","It's raining","It's sunny","The sky is clear"],ans:"It's snowing",hint:"눈: snow. 눈이 오다 = snow comes = it snows. Same pattern as 비가 와요."},
        {type:"mc",q:"하늘색 = 하늘 + 색. 색 means:",opts:["Sky","Clear","Color","Cloud"],ans:"Color",hint:"하늘 (sky) + 색 (color) = sky-blue color"},
        {type:"teach",trg:"마다",src:"every / each",pos:"part",gender:null,phonetic:"ma-da",note:"마다: every / each.\n\n날마다: every day (= 매일).",example:"A: 자주 운동해요? B: 네, 날마다 운동해요.",exampleSrc:"A: Do you exercise often? B: Yes, I exercise every day.",deepDive:{
          title:"마다",
          text:"주마다: every week.\n사람마다: every person / each person.\n\n매일 vs 날마다: same meaning.\n매 (每: every) is Sino-Korean.\n마다 is pure Korean particle."
        ,funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"teach",trg:"아주",src:"very / extremely",pos:"noun",gender:null,phonetic:"a-ju",note:"아주: very, extremely.\n\n아주 좋아요: very good.",example:"A: 이 음식이 맛있어요? B: 네, 아주 맛있어요!",exampleSrc:"A: Is this food tasty? B: Yes, it's very tasty!",deepDive:{
          title:"Using 아주",
          text:"아주 맛있어요: very delicious.\n\n아주 vs 너무 vs 정말:\n아주: very (neutral emphasis)\n너무: too much (can be positive or negative)\n정말: really (emphasis on truth)"
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"바람",src:"wind",pos:"noun",gender:null,phonetic:"ba-ram",note:"바람: wind.\n바람이 세요 means the wind is strong.",example:"A: 밖에 바람이 불어요? B: 네, 바람이 많이 불어요.",exampleSrc:"A: Is the wind blowing outside? B: Yes, the wind is blowing a lot.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"산",src:"mountain",pos:"noun",gender:null,phonetic:"san",note:"산: mountain.\n한라산 = Hallasan (Jeju's famous mountain).",example:"A: 주말에 뭐 해요? B: 산에 가요.",exampleSrc:"A: What are you doing this weekend? B: I'm going to the mountain.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"바다",src:"sea / ocean",pos:"noun",gender:null,phonetic:"ba-da",note:"바다: sea / ocean.\n부산 바다 = Busan's famous beaches.",example:"A: 산이 좋아요, 바다가 좋아요? B: 바다가 좋아요!",exampleSrc:"A: Do you like the mountain or the sea? B: I like the sea!",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"mc",q:"비가 와요 means:",opts:["It is snowing","It is raining","It is sunny","It is windy"],ans:"It is raining",hint:"비 = rain, 오다 = to come → rain is coming = it is raining"},
        {type:"mc",q:"날마다 = 매일. 마다 means:",opts:["Every/each","Only","Also","But"],ans:"Every/each",hint:"마다 = every/each. 날마다 = every day."},
        {type:"mc",q:"아주 좋아요 means:",opts:["Very good","A little good","Not good","Too good"],ans:"Very good",hint:"아주 = very/extremely."}
  ]},
  {id:"kou6l6b",title:"옷 (Clothing)",icon:"👔",xp:20,board:true,steps:[
        {type:"intro",title:"Korean Clothing Vocabulary",desc:"셔츠, 모자, 양말, 가방...\n\nKorean uses DIFFERENT verbs for wearing different items!\n입다: clothes\n신다: shoes/socks\n쓰다: hats\n끼다: gloves/rings",goals:["Learn 15+ clothing items","Use the correct 'wear' verb for each","Describe what people are wearing"]},
        {type:"tip",title:"Five 'Wear' Verbs",deepDive:{
          title:"Why Five Verbs?",
          text:"Korean cares about WHERE on the body:\nTorso = 입다\nFeet = 신다\nHead = 쓰다\nHands = 끼다\nAccessories = 하다\n\nEnglish just says 'wear' for everything."
        },text:"입다: clothes on torso (shirts, pants, dresses)\n신다: footwear (shoes, socks, boots)\n쓰다: headwear (hats, caps, glasses)\n끼다: hand items (gloves, rings)\n하다: accessories (ties, scarves, earrings)\n\nThis lesson teaches clothing items AND which verb goes with each."},
        {type:"teach",trg:"셔츠",src:"shirt",pos:"verb",gender:null,phonetic:"syeo-cheu",note:"셔츠: shirt (from English).\nUse 입다 (torso verb).",example:"A: 오늘 뭐 입어요? B: 하얀 셔츠를 입어요.",exampleSrc:"A: What are you wearing today? B: I'm wearing a white shirt.",funFact:"A Konglish loanword adapted from English. Korean has borrowed many modern and tech words."},
        {type:"teach",trg:"모자",src:"hat / cap",pos:"verb",gender:null,phonetic:"mo-ja",note:"모자: hat/cap.\nUse 쓰다 (head verb).\n\n쓰다 has THREE meanings:\n1. to write\n2. to use\n3. to wear (on head)",example:"A: 밖에 해가 강해요. B: 모자를 쓰세요!",exampleSrc:"A: The sun is strong outside. B: Wear a hat!",funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."},
        {type:"teach",trg:"양말",src:"socks",pos:"verb",gender:null,phonetic:"yang-mal",note:"양말: socks.\nUse 신다 (feet verb).",example:"A: 양말을 신었어요? B: 네, 하얀 양말을 신었어요.",exampleSrc:"A: Did you put on socks? B: Yes, I put on white socks.",funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."},
        {type:"teach",trg:"코트",src:"coat",pos:"verb",gender:null,phonetic:"ko-teu",note:"코트: coat (from English).\nUse 입다 (torso verb).",example:"A: 밖에 추워요. B: 코트를 입으세요.",exampleSrc:"A: It's cold outside. B: Put on a coat.",funFact:"A Konglish loanword adapted from English. Korean has borrowed many modern and tech words."},
        {type:"mc",q:"모자를 ___요.\n(I wear a hat.)",opts:["입어","쓸","써","신어"],ans:"써",hint:"Hat goes on your head. Head verb = 쓰다 → 써요"},
        {type:"teach",trg:"재킷",src:"jacket",pos:"verb",gender:null,phonetic:"jae-kit",note:"재킷: jacket (from English).\nUse 입다 (torso verb).",example:"A: 재킷 색깔이 예뻐요! B: 감사합니다. 새 재킷이에요.",exampleSrc:"A: Your jacket color is pretty! B: Thank you. It's a new jacket.",funFact:"A Konglish loanword adapted from English. Korean has borrowed many modern and tech words."},
        {type:"teach",trg:"스웨터",src:"sweater",pos:"verb",gender:null,phonetic:"seu-we-teo",note:"스웨터: sweater (from English).\nUse 입다 (torso verb).",example:"A: 오늘 좀 쌀쌀해요. B: 스웨터를 입으세요.",exampleSrc:"A: It's a bit chilly today. B: Wear a sweater.",funFact:"A Konglish loanword adapted from English. Korean has borrowed many modern and tech words."},
        {type:"teach",trg:"원피스",src:"dress",pos:"verb",gender:null,phonetic:"won-pi-seu",note:"원피스: dress (from English 'one-piece').\nUse 입다 (torso verb).",example:"A: 원피스를 입었어요? B: 네, 파란 원피스예요.",exampleSrc:"A: Are you wearing a dress? B: Yes, it's a blue dress.",funFact:"A Konglish loanword adapted from English. Korean has borrowed many modern and tech words."},
        {type:"mc",q:"양말을 ___요.\n(I put on socks.)",opts:["입어","써","신어","끼"],ans:"신어",hint:"Socks go on your feet. Feet verb = 신다 → 신어요"},
        {type:"teach",trg:"목도리",src:"scarf / muffler",pos:"verb",gender:null,phonetic:"mok-do-ri",note:"목도리: scarf/muffler.\n목(neck) + 도리(wrap).\nUse 하다 (accessory verb).",example:"A: 목도리를 해요? B: 네, 겨울에 항상 해요.",exampleSrc:"A: Do you wear a scarf? B: Yes, I always wear one in winter.",funFact:"A 하다 verb — noun + 하다 (to do). This pattern creates hundreds of verbs from Sino-Korean nouns."},
        {type:"teach",trg:"장갑",src:"gloves",pos:"verb",gender:null,phonetic:"jang-gap",note:"장갑: gloves.\nUse 끼다 (hand verb).",example:"A: 손이 차가워요! B: 장갑을 끼세요.",exampleSrc:"A: My hands are cold! B: Put on gloves.",funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."},
        {type:"teach",trg:"가방",src:"bag",pos:"noun",gender:null,phonetic:"ga-bang",note:"가방: bag/backpack.\nCommon compound: 책가방 (book bag).",example:"A: 가방이 무거워요? B: 네, 책이 많아요.",exampleSrc:"A: Is your bag heavy? B: Yes, there are many books.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"mc",q:"장갑을 ___요.\n(I put on gloves.)",opts:["입어","끼","써","신어"],ans:"끼",hint:"Gloves go on your hands. Hand verb = 끼다"},
        {type:"teach",trg:"안경",src:"glasses",pos:"verb",gender:null,phonetic:"an-gyeong",note:"안경: glasses.\nCOMPOUND: 안(eye/眼) + 경(mirror/鏡).\nUse 쓰다 (head verb).",example:"A: 안경을 써요? B: 네, 눈이 나빠요.",exampleSrc:"A: Do you wear glasses? B: Yes, my eyesight is bad.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"teach",trg:"구두",src:"dress shoes / formal shoes",pos:"verb",gender:null,phonetic:"gu-du",note:"구두: formal/dress shoes.\nUse 신다 (feet verb).",example:"A: 구두를 신어요? B: 네, 회사에 갈 때 신어요.",exampleSrc:"A: Do you wear dress shoes? B: Yes, when I go to the office.",funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."},
        {type:"teach",trg:"운동화",src:"sneakers / athletic shoes",pos:"verb",gender:null,phonetic:"un-dong-hwa",note:"운동화: sneakers/athletic shoes.\nCOMPOUND: 운동(exercise) + 화(shoes).\nUse 신다 (feet verb).",example:"A: 운동화를 좋아해요? B: 네, 편해요.",exampleSrc:"A: Do you like sneakers? B: Yes, they're comfortable.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"fb",opts:["코트","모자","양말","안경"],hint:"A coat covers your torso against the cold",s:"추워요. ___를 입으세요.\n(It's cold. Put on a coat.)",a:"코트"},
        {type:"fb",opts:["안경","모자","장갑","목도리"],hint:"Something you put on your face to see better",s:"눈이 나빠요. ___을 쓰세요.\n(My eyesight is bad. Wear glasses.)",a:"안경"},
        {type:"match",pairs:[{trg:"셔츠 → 입다",src:"shirt → torso verb"},{trg:"모자 → 쓰다",src:"hat → head verb"},{trg:"양말 → 신다",src:"socks → feet verb"},{trg:"장갑 → 끼다",src:"gloves → hand verb"}]},
        {type:"match",pairs:[{trg:"구두",src:"dress shoes"},{trg:"운동화",src:"sneakers"},{trg:"원피스",src:"dress"},{trg:"목도리",src:"scarf"}]},
        {type:"drag_fill",hint:"In winter: coat (torso), gloves (hands), scarf (accessory)",s:"겨울에 {1}를 입고, {2}을 끼고, {3}를 해요.",blanks:{"1":"코트","2":"장갑","3":"목도리"},pool:["코트","장갑","목도리","모자","양말"]},
        {type:"mc",q:"Which verb goes with 안경?",opts:["쓰다 (head verb)","입다 (torso verb)","신다 (feet verb)","끼다 (hand verb)"],ans:"쓰다 (head verb)",hint:"Glasses go on your face/head area"}
  ]},
  {id:"kou6l6c",title:"옷 더 배우기 (More Clothing)",icon:"👗",xp:20,board:true,steps:[
        {type:"intro",title:"Expanding Your Wardrobe Vocabulary",desc:"바지, 티셔츠, 청바지...\n\nMore clothing items, including Konglish words and native Korean words.",goals:["Learn 8 more clothing items","Spot Konglish (English loan) words","Use the correct wear verbs from the previous lesson","Describe outfits"]},
        {type:"tip",title:"Konglish vs Native Korean Clothing Words",deepDive:{
          title:"How Konglish Works",
          text:"English sounds are adapted to Korean syllable rules:\n\nboot → 부츠 (bu-cheu)\nbelt → 벨트 (bel-teu)\nT-shirt → 티셔츠 (ti-syeo-cheu)\n\nKorean syllables always end in a consonant or vowel.\nNo consonant clusters like 'lts' in 'belts'.\nSo extra vowels are added: 벨트 (bel-teu)."
        },text:"Many Korean clothing words come from English:\n\n티셔츠 (T-shirt) from 'T-shirt'\n부츠 (boots) from 'boots'\n벨트 (belt) from 'belt'\n\nBut key items are native Korean:\n바지: pants (pure Korean)\n청바지: jeans (청 blue + 바지 pants)\n정장: formal suit (Sino-Korean)\n\nKonglish words use Korean pronunciation rules."},
        {type:"teach",trg:"바지",src:"pants / trousers",pos:"verb",gender:null,phonetic:"ba-ji",note:"바지: pants (pure Korean).\nUse 입다 (torso/body verb).\n검은 바지 = black pants.",example:"A: 오늘 뭐 입어요? B: 검은 바지를 입어요.",exampleSrc:"A: What are you wearing today? B: I'm wearing black pants.",funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."},
        {type:"teach",trg:"티셔츠",src:"T-shirt",pos:"verb",gender:null,phonetic:"ti-syeo-cheu",note:"티셔츠: T-shirt (Konglish).\nUse 입다 (torso verb).\n하얀 티셔츠 = white T-shirt.",example:"A: 여름에 뭐 입어요? B: 보통 티셔츠를 입어요.",exampleSrc:"A: What do you wear in summer? B: I usually wear T-shirts.",funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."},
        {type:"teach",trg:"청바지",src:"jeans",pos:"noun",gender:null,phonetic:"cheong-ba-ji",note:"청바지: jeans.\nCOMPOUND: 청(blue) + 바지(pants).\nBlue pants = jeans.",example:"A: 청바지를 자주 입어요? B: 네, 매일 입어요!",exampleSrc:"A: Do you wear jeans often? B: Yes, I wear them every day!",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"mc",q:"청바지 = 청 + 바지. 청 means:",opts:["blue","cloth","long","cotton"],ans:"blue",hint:"청 is a Sino-Korean character meaning blue/green. Blue + pants = jeans."},
        {type:"teach",trg:"반바지",src:"shorts",pos:"noun",gender:null,phonetic:"ban-ba-ji",note:"반바지: shorts.\nCOMPOUND: 반(half) + 바지(pants).\nHalf-pants = shorts.",example:"A: 여름에 반바지를 입어요? B: 네, 더울 때 반바지를 입어요.",exampleSrc:"A: Do you wear shorts in summer? B: Yes, I wear shorts when it's hot.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"teach",trg:"부츠",src:"boots",pos:"verb",gender:null,phonetic:"bu-cheu",note:"부츠: boots (Konglish).\nUse 신다 (feet verb).\n겨울 부츠 = winter boots.",example:"A: 비가 와요! B: 부츠를 신으세요.",exampleSrc:"A: It's raining! B: Wear boots.",funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."},
        {type:"mc",q:"부츠를 ___요.\n(I wear boots.)",opts:["신어","입어","써","끼"],ans:"신어",hint:"Boots go on your feet. Which verb is for footwear?"},
        {type:"teach",trg:"벨트 / 허리띠",src:"belt",pos:"verb",gender:null,phonetic:"bel-teu / heo-ri-tti",note:"벨트: belt (Konglish).\n허리띠: belt (native Korean).\n허리(waist) + 띠(band).\nUse 하다 (accessory verb).",example:"A: 바지가 커요? B: 네, 벨트를 해요.",exampleSrc:"A: Are your pants big? B: Yes, I wear a belt.",funFact:"A 하다 verb — noun + 하다 (to do). This pattern creates hundreds of verbs from Sino-Korean nouns."},
        {type:"teach",trg:"넥타이",src:"necktie / tie",pos:"verb",gender:null,phonetic:"nek-ta-i",note:"넥타이: necktie (Konglish).\nUse 하다 (accessory verb).\n넥타이를 매다 also works.",example:"A: 회사에 넥타이를 해요? B: 네, 매일 넥타이를 해요.",exampleSrc:"A: Do you wear a tie to work? B: Yes, I wear a tie every day.",funFact:"A 하다 verb — noun + 하다 (to do). This pattern creates hundreds of verbs from Sino-Korean nouns."},
        {type:"teach",trg:"정장",src:"formal suit",pos:"verb",gender:null,phonetic:"jeong-jang",note:"정장: formal suit.\nSINO-KOREAN: 정(proper) + 장(outfit).\nUse 입다 (torso verb).",example:"A: 내일 뭐 입어요? B: 면접이 있어서 정장을 입어요.",exampleSrc:"A: What are you wearing tomorrow? B: I have an interview so I'm wearing a suit.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"mc",q:"반바지 means:",opts:["shorts","long pants","jeans","skirt"],ans:"shorts",hint:"반 means half. Half-pants = something shorter than full pants."},
        {type:"fb",opts:["부츠","구두","운동화","양말"],hint:"Rain footwear. A Konglish word from English.",s:"비가 와요. ___를 신으세요.\n(It's raining. Wear boots.)",a:"부츠"},
        {type:"fb",opts:["정장","청바지","반바지","티셔츠"],hint:"A proper, formal outfit for business settings.",s:"회사에 ___를 입어요.\n(I wear a formal suit to the office.)",a:"정장"},
        {type:"match",pairs:[{trg:"바지",src:"pants"},{trg:"청바지",src:"jeans"},{trg:"반바지",src:"shorts"},{trg:"정장",src:"formal suit"}]},
        {type:"match",pairs:[{trg:"티셔츠",src:"T-shirt"},{trg:"부츠",src:"boots"},{trg:"벨트",src:"belt"},{trg:"넥타이",src:"necktie"}]},
        {type:"mc",q:"넥타이를 ___요.\n(I wear a tie.)",opts:["해","입어","써","신어"],ans:"해",hint:"Ties are accessories. Accessories use the 하다 verb."},
        {type:"drag_fill",hint:"Summer: light top + short pants. Winter: heavy outer layer.",s:"여름에 {1}와 {2}를 입어요. 겨울에 {3}를 입어요.",blanks:{"1":"티셔츠","2":"반바지","3":"코트"},pool:["티셔츠","반바지","코트","정장","부츠","벨트"]},
        {type:"fb",opts:["청바지","정장","반바지","넥타이"],hint:"Blue + pants = a casual everyday clothing item.",s:"___를 자주 입어요. 편해요.\n(I often wear jeans. They're comfortable.)",a:"청바지"},
        {type:"mc",q:"Which is a Konglish word?",opts:["부츠 (boots)","바지 (pants)","청바지 (jeans)","정장 (suit)"],ans:"부츠 (boots)",hint:"This word comes directly from English pronunciation adapted to Korean."}
  ]},
  {id:"kou6l6d",title:"방향: 동서남북 (Cardinal Directions)",icon:"🧭",xp:20,board:true,steps:[
        {type:"intro",title:"North, South, East, West in Korean",desc:"동 / 서 / 남 / 북\n→ east / west / south / north\n\nCompass directions and famous Korean place names.",goals:["Learn the four cardinal directions","Understand the 쪽 suffix for direction","Recognize directions in Korean place names","Know the Korean compass order: 동서남북"]},
        {type:"tip",title:"Korean Compass Order: 동서남북",deepDive:{
          title:"Why East First?",
          text:"In traditional Korean (and East Asian) compass systems, East is the primary direction.\n\nThe sun rises in the East.\n동 appears in many important compounds:\n동해: East Sea (Sea of Japan)\n동대문: East Gate\n\nKorean maps traditionally placed East at the top, not North."
        },text:"Korean says directions differently from English:\n\nEnglish: North, South, East, West (NSEW)\nKorean: 동서남북 = East, West, South, North\n\nEast comes first because in Korean culture the sun rising in the east has special importance.\n\nAll four are Sino-Korean characters:\n동(東): east\n서(西): west\n남(南): south\n북(北): north"},
        {type:"teach",trg:"동 / 동쪽",src:"east",pos:"intj",gender:null,phonetic:"dong / dong-jjok",note:"동(東): east.\n동쪽: east side/direction.\n쪽 = side/direction suffix.\n동해 = East Sea.",example:"A: 해가 어디에서 떠요? B: 동쪽에서 떠요.",exampleSrc:"A: Where does the sun rise? B: It rises in the east.",funFact:"Built from Chinese characters (Hanja). About 60% of Korean vocabulary has Hanja roots."},
        {type:"teach",trg:"서 / 서쪽",src:"west",pos:"intj",gender:null,phonetic:"seo / seo-jjok",note:"서(西): west.\n서쪽: west side/direction.\n서울: capital city.\n서해: West Sea (Yellow Sea).",example:"A: 해가 어디에서 져요? B: 서쪽에서 져요.",exampleSrc:"A: Where does the sun set? B: It sets in the west.",funFact:"Built from Chinese characters (Hanja). About 60% of Korean vocabulary has Hanja roots."},
        {type:"teach",trg:"남 / 남쪽",src:"south",pos:"intj",gender:null,phonetic:"nam / nam-jjok",note:"남(南): south.\n남쪽: south side/direction.\n남산: South Mountain (서울).\n남해: South Sea.",example:"A: 제주도가 어디에 있어요? B: 한국 남쪽에 있어요.",exampleSrc:"A: Where is Jeju Island? B: It's in the south of Korea.",funFact:"Built from Chinese characters (Hanja). About 60% of Korean vocabulary has Hanja roots."},
        {type:"teach",trg:"북 / 북쪽",src:"north",pos:"intj",gender:null,phonetic:"buk / buk-jjok",note:"북(北): north.\n북쪽: north side/direction.\n북한: North Korea.\n북해: North Sea.",example:"A: 겨울에 북쪽이 추워요? B: 네, 아주 추워요.",exampleSrc:"A: Is it cold in the north in winter? B: Yes, it's very cold.",funFact:"Built from Chinese characters (Hanja). About 60% of Korean vocabulary has Hanja roots."},
        {type:"mc",q:"해가 동쪽에서 떠요. What does this mean?",opts:["The sun rises in the east","The sun sets in the west","The sun is in the south","The sun is in the north"],ans:"The sun rises in the east",hint:"동 = east, 해 = sun. Where does the sun come up?"},
        {type:"mc",q:"Korean compass order is:",opts:["동서남북 (E-W-S-N)","북남동서 (N-S-E-W)","남북동서 (S-N-E-W)","서동남북 (W-E-S-N)"],ans:"동서남북 (E-W-S-N)",hint:"East comes first in Korean culture. The sun rises there."},
        {type:"tip",title:"Directions in Korean Place Names",deepDive:{
          title:"Seoul's Four Gates",
          text:"Old Seoul was a walled city with gates at each compass point:\n\n동대문 (East Gate): Heunginjimun\n서대문 (West Gate): Donuimun\n남대문 (South Gate): Sungnyemun\n북대문 (North Gate): Sukjeongmun\n\nToday 동대문 and 남대문 are famous shopping districts."
        },text:"Many famous Korean places contain compass characters:\n\n동대문: East Great Gate (동 + 대 + 문)\n남대문: South Great Gate (남 + 대 + 문)\n남산: South Mountain (남 + 산)\n북한산: North Han Mountain\n서울: capital city (historically linked to 서)\n\nKnowing 동서남북 helps you read Korean maps and place names."},
        {type:"teach",trg:"동대문",src:"East Gate (Dongdaemun)",pos:"noun",gender:null,phonetic:"dong-dae-mun",note:"동대문: East Great Gate.\nCOMPOUND: 동(east) + 대(great) + 문(gate).\nFamous Seoul shopping district.",example:"A: 동대문에 가요? B: 네, 쇼핑하러 가요!",exampleSrc:"A: Are you going to Dongdaemun? B: Yes, I'm going shopping!",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"teach",trg:"남산",src:"South Mountain (Namsan)",pos:"noun",gender:null,phonetic:"nam-san",note:"남산: South Mountain.\nCOMPOUND: 남(south) + 산(mountain).\n남산타워 = N Seoul Tower.",example:"A: 남산에 가 봤어요? B: 네, 남산타워가 예뻐요!",exampleSrc:"A: Have you been to Namsan? B: Yes, Namsan Tower is pretty!",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"mc",q:"남대문 = 남 + 대 + 문. 문 means:",opts:["gate / door","mountain","river","road"],ans:"gate / door",hint:"대문 means great gate. 문 is used for doors and gates."},
        {type:"fb",opts:["남쪽","북쪽","동쪽","서쪽"],hint:"Jeju is Korea's southernmost island.",s:"제주도는 한국 ___에 있어요.\n(Jeju Island is in the south of Korea.)",a:"남쪽"},
        {type:"fb",opts:["동쪽","서쪽","남쪽","북쪽"],hint:"The sun rises where? The first direction in 동서남북.",s:"___에서 해가 떠요.\n(The sun rises in the east.)",a:"동쪽"},
        {type:"match",pairs:[{trg:"동쪽",src:"east"},{trg:"서쪽",src:"west"},{trg:"남쪽",src:"south"},{trg:"북쪽",src:"north"}]},
        {type:"match",pairs:[{trg:"동대문",src:"East Gate"},{trg:"남산",src:"South Mountain"},{trg:"북한",src:"North Korea"},{trg:"서해",src:"West Sea"}]},
        {type:"drag_fill",hint:"The sun rises in one direction and sets in the opposite.",s:"해가 {1}에서 떠서 {2}에서 져요.",blanks:{"1":"동쪽","2":"서쪽"},pool:["동쪽","서쪽","남쪽","북쪽"]},
        {type:"mc",q:"남산타워 is on which mountain?",opts:["남산 (South Mountain)","북한산 (North Han Mountain)","동대문 (East Gate area)","서울산 (Seoul Mountain)"],ans:"남산 (South Mountain)",hint:"남산 = 남 (south) + 산 (mountain). The famous tower is there."},
        {type:"fb",opts:["북쪽","남쪽","동쪽","서쪽"],hint:"The direction opposite to south. 북 = north.",s:"겨울에 ___이 아주 추워요.\n(In winter, the north is very cold.)",a:"북쪽"},
        {type:"mc",q:"동대문 = 동 + 대 + 문. 동 means:",opts:["east","west","great","gate"],ans:"east",hint:"The first character in the Korean compass order 동서남북."}
  ]},
  {id:"kou6l7",title:"Transit Compounds + 한강",icon:"🌉",xp:20,board:true,steps:[
        {type:"intro",title:"Compound Words + Korean Transit Culture",desc:"Compound decoding session. The Han River as Seoul's heart.",goals:["Decode 버스정류장, 공항, 출구 compounds","Know T-money card system","Understand 한강 culture"]},
        {type:"teach",trg:"버스 정류장",src:"bus stop",pos:"intj",gender:null,phonetic:"beo-seu jeong-ryu-jang",note:"COMPOUND: 버스 + 정류 + 장.\n정류: stop/stay. 정 (stop/fix) + 류 (flow).\n'Stop the flow' = stopping place.",example:"A: 버스 정류장이 어디에 있어요? B: 저기 오른쪽에 있어요.",exampleSrc:"A: Where is the bus stop? B: Over there on the right.",deepDive:{
          title:"Using 버스 정류장",
          text:"장: place.\n\n버스 정류장: 'bus stopping-place'\n주차장: parking lot (주차 + 장: parking place)\n화장실: bathroom (화장 + 실: makeup-clean room)"
        ,funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"teach",trg:"공항",src:"airport",pos:"noun",gender:null,phonetic:"gong-hang",note:"SINO-KOREAN: 공항 = 공 + 항.\n공 (空): air / public / empty. 항 (港): port.\n'Air port' = airport.",example:"A: 공항에 어떻게 가요? B: 지하철로 가세요.",exampleSrc:"A: How do I get to the airport? B: Take the subway.",deepDive:{
          title:"Using 공항",
          text:"공기: air (공 + 기 = air + energy/matter)\n공원: park (공 + 원 = public + garden)\n공장: factory (공 + 장 = manufacturing + place)"
        ,funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"teach",trg:"출구",src:"exit",pos:"noun",gender:null,phonetic:"chul-gu",note:"SINO-KOREAN: 출 + 구.\n출 (出): to go out. 구 (口): mouth/opening.\n'Going-out opening' = exit.",example:"A: 몇 번 출구로 나가요? B: 3번 출구로 나오세요.",exampleSrc:"A: Which exit do I go out? B: Please come out exit 3.",deepDive:{
          title:"Using 출구",
          text:"출 reappears in:\n출근: going to work (출 + 근: out + attendance)\n출발: departure (출 + 발: out + departure)\n\n나오세요: please come out (나오다 + 세요)"
        ,funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"mc",q:"공항 means:",opts:["bus stop","airport","exit","train station"],ans:"airport",hint:"공 (air/sky) + 항 (port). A compound for where planes arrive."},
        {type:"teach",trg:"T-money 카드",src:"T-money card",pos:"intj",gender:null,phonetic:"tee-meo-ni ka-deu",note:"T-money: Korea's rechargeable transit card.\n\n지하철, 버스, 택시  -  all accept T-money.",example:"A: 어떻게 타요? B: T-money 카드로 타요.",exampleSrc:"A: How do you ride? B: I ride using the T-money card.",deepDive:{
          title:"Using T-money 카드",
          text:"Buy at any 편의점 (convenience store).\nTop up at subway machines.\n\n카드를 찍다: tap the card\n요금: fare (교통 요금: transit fare)"
        ,funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"tip",title:"🌉 한강: Seoul's Social Heart",deepDive:{
          title:"한강: Seoul's Social Heart",
          text:"한강공원 = Han River Park\n\n배달 to the river is completely normal. Just share your GPS location.\n\n• 치킨 + 맥주 (chicken + beer) on the grass\n• 자전거 타기 (cycling) on riverside paths\n• 야경 감상 (night view) at 63빌딩\n• 한강 유람선 (cruise boat)\n• 피크닉 (picnic) with convenience store food\n\n한강 치킨 배달:\nYou can order chicken delivery to the riverbank.\nDelivery person brings it right to you.\n\n한강 culture = 정 (shared life) + 빨리빨리 (fast-paced, efficient fun)\n\n'한강 가자!' = Let's go to the Han River!\n= Let's hang out."
        },text:"한강 (Han River) is where Seoul gathers:\n\n치킨 시키다 = to order chicken (the classic 한강 activity)\n편의점 = convenience store (always nearby)\n자전거 타다 = to ride a bicycle"},
        {type:"mc",q:"공항 = 공 + 항. 항 means:",opts:["Air","Machine","Port","Road"],ans:"Port",hint:"공 (air) + 항 (port) = airport"},
        {type:"mc",q:"출구 = 출 + 구. 출 means:",opts:["Enter","Exit/go out","Station","Open"],ans:"Exit/go out",hint:"출 (出): to go out. 출근 (going to work), 출발 (departure)"},
        {type:"mc",q:"버스 정류장 = 버스 + 정류 + 장. 장 means:",opts:["Bus","Stop","Place","Line"],ans:"Place",hint:"장 = place. 주차장 (parking place), 시장 (market place)"},
        {type:"mc",q:"T-money card works on:",opts:["Subway only","Bus only","Subway + bus + taxi","Subway + KTX only"],ans:"Subway + bus + taxi",hint:"T-money is the universal Korean transit payment system"},
        {type:"fb",opts:["공항","기차역","버스 정류장","출구"],hint:"공 (air) + 항 (port) = airport",s:"___ 에 어떻게 가요?\n(How do I get to the airport?)",a:"공항"},
        {type:"fb",opts:["출구","공항","역","정류장"],hint:"... = exit (出口)",s:"3번 ___로 나오세요.\n(Please come out exit 3)",a:"출구"},
        {type:"match",pairs:[{trg:"버스 정류장",src:"bus stop"},{trg:"공항",src:"airport"},{trg:"출구",src:"exit"},{trg:"한강",src:"Han River"}]},
        {type:"drag_fill",hint:"From Seoul Station, I go to Busan by KTX.",s:"{1}에서 {2}로 {3}에 가요.",blanks:{"1":"서울역","2":"KTX","3":"부산"},pool:["서울역","KTX","버스","부산","공항"]},
        {type:"mc",q:"한강 치킨 배달 means:",opts:["Chicken restaurant near the river","Delivery chicken to the Han River bank","Korean fried chicken brand","Festival food"],ans:"Delivery chicken to the Han River bank",hint:"You can have chicken delivered directly to you at the riverbank  -  정 + convenience culture"}
  ]},
  {id:"kou6l9.1",title:"못, -지만 and Connectors",icon:"🔗",xp:20,board:true,steps:[
        {type:"intro",title:"The Final A1 Toolkit",desc:"못 / -지만\n→ can't / but\n\nFour connectors and frequency adverbs.",goals:["Distinguish 안 (won't) vs 못 (can't)","Use -지만 for contrast","Connect sentences with 그래서/그런데/그러면/아니면","Use frequency adverbs naturally"]},
        {type:"teach",trg:"못",src:"can't (inability)",pos:"verb",gender:null,phonetic:"mot",note:"못 goes before the verb.\n\n못 가요\n→ can't go\n\n못 먹어요\n→ can't eat\n\n못 자요\n→ can't sleep",example:"A: 수영해요? B: 아니요, 수영을 못해요.",exampleSrc:"A: Do you swim? B: No, I can't swim.",funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."},
        {type:"tip",title:"💡 수영을 못해요  -  why 을?",text:"수영하다 = 수영 (swimming) + 하다 (to do)\n(to swim = swimming + to do)\n\nWith 하다 verbs, 못 splits the compound:\n\n수영을 못해요\n→ (I) can't swim\n\n운전을 못해요\n→ (I) can't drive\n\n한국어를 못해요\n→ (I) can't speak Korean\n\nWith plain verbs, 못 just goes before:\n\n못 가요\n→ can't go\n\n못 먹어요\n→ can't eat"},
        {type:"teach",trg:"안 vs 못",src:"won't (choice) vs can't (inability)",pos:"verb",gender:null,phonetic:"an / mot",note:"안 = I choose not to.\n못 = I am not able to.\n\nUsing the wrong one changes what you're saying.",example:"A: 오늘 안 가요? B: 아니요, 가고 싶지만 못 가요.",exampleSrc:"A: You're not going today? B: No, I want to go but I can't go.",funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."},
        {type:"tip",title:"🚫 안 vs 못  -  The Difference Matters",text:"매운 음식을 안 먹어요.\n→ I don't eat spicy food. (preference)\n\n매운 음식을 못 먹어요.\n→ I can't eat spicy food. (physically unable)\n\n커피를 안 마셔요.\n→ I don't drink coffee. (choice)\n\n커피를 못 마셔요.\n→ I can't drink coffee. (e.g. allergy)"},
        {type:"mc",q:"'I can't eat spicy food (not capable)'  -  correct:",opts:["매운 음식을 안 먹어요","매운 음식을 못 먹어요","매운 음식이 없어요","매운 음식을 싫어요"],ans:"매운 음식을 못 먹어요",hint:"못 = not capable"},
        {type:"mc",q:"'I don't drink coffee (by choice)'  -  correct:",opts:["커피를 못 마셔요","커피를 안 마셔요","커피가 없어요","커피를 싫어요"],ans:"커피를 안 마셔요",hint:"안 = I choose not to"},
        {type:"fb",opts:["못","안","별로","전혀"],hint:"Inability = 못",s:"저는 운전을 ___해요.\n(I can't drive  -  not capable)",a:"못"},
        {type:"teach",trg:"-지 못하다",src:"cannot (formal long form)",pos:"verb",gender:null,phonetic:"-ji mot-ha-da",note:"COMPOUND: -지 (verb connector) + 못하다 (cannot do).\nLiterally: 'verb-and-cannot'\n\n수영을 못해요 = 수영하지 못해요\n→ Both mean: can't swim\n→ -지 못하다 is slightly more formal",example:"A: 운전해요? B: 아니요, 운전하지 못해요.",exampleSrc:"A: Do you drive? B: No, I cannot drive.",deepDive:{
          title:"못 vs -지 못하다",
          text:"못 가요 = can't go (short, spoken).\n가지 못해요 = cannot go (long, written/formal).\n\nBoth express inability. Choose by register:\nCasual speech: 못 + verb.\nFormal/written: verb + -지 못하다."
        ,funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"teach",trg:"-지만",src:"but / however",pos:"noun",gender:null,phonetic:"-ji-man",note:"COMPOUND: stem + 지만 (but/however).\n\n어렵다 → 어렵지만\n→ (to be) difficult → but difficult\n\n가다 → 가지만\n→ to go → but going\n\n비싸다 → 비싸지만\n→ (to be) expensive → but expensive",example:"A: 한국어가 어려워요? B: 어렵지만 재미있어요.",exampleSrc:"A: Is Korean difficult? B: It's difficult, but interesting.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"tip",title:"✂️ -지만 in Action",text:"비싸지만 맛있어요.\n→ It's expensive, but delicious.\n\n가고 싶지만 시간이 없어요.\n→ I want to go, but I have no time.\n\n어렵지만 재미있어요.\n→ It's hard, but interesting."},
        {type:"mc",q:"'It's expensive but delicious'  -  correct:",opts:["비싸고 맛있어요","비싸지만 맛있어요","비싸서 맛있어요","비싸는 맛있어요"],ans:"비싸지만 맛있어요",hint:"-지만 = but (contrast)"},
        {type:"fb",opts:["지만","고","서","는데"],hint:"-... attaches to the first verb stem",s:"한국어는 어렵___ 재미있어요.\n(Korean is difficult ___ interesting.)",a:"지만"},
        {type:"teach",trg:"그래서",src:"so / therefore",pos:"noun",gender:null,phonetic:"geu-rae-seo",note:"Connects two sentences: reason → result.\n그래서 starts the SECOND sentence.\n\n배가 고파요. 그래서 밥을 먹었어요.\n→ I'm hungry. So I ate.",example:"A: 왜 집에 있어요? B: 피곤해요. 그래서 쉬어요.",exampleSrc:"A: Why are you at home? B: I'm tired. So I'm resting.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"그런데 / 근데",src:"but / by the way",pos:"intj",gender:null,phonetic:"geu-reon-de / geun-de",note:"Two uses:\n\n1. Contrast:\n맛있어요. 그런데 비싸요.\n→ It's delicious. But it's expensive.\n\n2. Topic shift:\n그런데, 오늘 뭐 했어요?\n→ By the way, what did you do today?\n\n근데 = casual spoken form",example:"A: 이 식당 어때요? B: 맛있어요. 그런데 비싸요.",exampleSrc:"A: How is this restaurant? B: It's delicious. But it's expensive.",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."},
        {type:"teach",trg:"그러면 / 그럼",src:"then / in that case",pos:"intj",gender:null,phonetic:"geu-reo-myeon / geu-reom",note:"그럼요!\n→ Of course! (very common polite reply)\n\n그럼 = casual spoken form of 그러면",example:"A: 시간 있어요? B: 네! A: 그럼, 같이 가요!",exampleSrc:"A: Do you have time? B: Yes! A: Then let's go together!",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."},
        {type:"mc",q:"그런데 means:",opts:["so","but","then","because"],ans:"but",hint:"A connector that introduces contrast or changes topic."},
        {type:"teach",trg:"아니면",src:"or / otherwise",pos:"noun",gender:null,phonetic:"a-ni-myeon",note:"COMPOUND: 아니다 (not be) + (으)면 (if-condition).\nLiterally: 'if it is not (that)'\n\n커피 아니면 차\n→ coffee or tea\n\n여기 아니면 거기\n→ here or there",example:"A: 커피 아니면 차? B: 커피 주세요.",exampleSrc:"A: Coffee or tea? B: Coffee, please.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"tip",title:"🔗 The Connector Set  -  A1 Complete",text:"WITHIN a sentence:\n\n-고: and/then\n먹고 마셔요 → eat, then drink\n\n-지만: but\n어렵지만 재미있어요 → hard but interesting\n\n-아/어서: because → a later lesson\n\nBETWEEN sentences:\n\n그리고 → and also\n그래서 → so / therefore\n그런데 / 근데 → but / by the way\n그러면 / 그럼 → then / in that case\n아니면 → or / otherwise\n\nHalf these keep appearing all the way to B1."},
        {type:"mc",q:"'I was tired. So I stayed home.'  -  which connector?",opts:["그런데","그러면","그래서","아니면"],ans:"그래서",hint:"... = so/therefore (reason → result)"},
        {type:"mc",q:"'Coffee or tea?'  -  which connector?",opts:["그리고","그래서","그런데","아니면"],ans:"아니면",hint:"... = or / otherwise"},
        {type:"fb",opts:["그런데","그래서","그러면","아니면"],hint:"... = but / by the way",s:"맛있어요. ___ 비싸요.\n(Delicious. But expensive.)",a:"그런데"}
  ]},
  {id:"kou6l9.2",title:"Adverbs and Question Words",icon:"📊",xp:18,board:true,steps:[
        {type:"intro",title:"How Often? How Much? Why?",desc:"Frequency words, question words, superlatives.",goals:["Use 자주, 가끔, 보통 for frequency","Ask with 왜 and 얼마나","Pick the best with 제일 and 가장"]},
        {type:"teach",trg:"자주",src:"often",pos:"verb",gender:null,phonetic:"ja-ju",note:"자주: often / frequently.\nAdverb  -  goes before the verb.",example:"A: 자주 운동해요? B: 네, 매일 운동해요.",exampleSrc:"A: Do you exercise often? B: Yes, I exercise every day.",funFact:"Korean verbs always come at the end of the sentence. The ending changes for politeness, tense, and mood."},
        {type:"teach",trg:"가끔",src:"sometimes",pos:"noun",gender:null,phonetic:"ga-kkeum",note:"가끔: sometimes / occasionally.",example:"A: 영화를 자주 봐요? B: 아니요, 가끔 봐요.",exampleSrc:"A: Do you watch movies often? B: No, I watch sometimes.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"보통",src:"usually",pos:"noun",gender:null,phonetic:"bo-tong",note:"보통: usually / normally.\nAlso means 'average' or 'ordinary.'",example:"A: 몇 시에 일어나요? B: 보통 8시에 일어나요.",exampleSrc:"A: What time do you wake up? B: I usually wake up at 8.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"mc",q:"가끔 means:",opts:["sometimes","often","always","never"],ans:"sometimes",hint:"A frequency adverb between 자주 (often) and 전혀 (never)."},
        {type:"teach",trg:"별로",src:"not really",pos:"intj",gender:null,phonetic:"byeol-lo",note:"별로: not really  -  ALWAYS with a negative.\n별로 안 + verb = not really (verb).",example:"A: 이 영화 좋아요? B: 별로 안 좋아요.",exampleSrc:"A: Is this movie good? B: It's not really good.",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."},
        {type:"teach",trg:"전혀",src:"not at all / absolutely not",pos:"intj",gender:null,phonetic:"jeon-hyeo",note:"전혀: not at all  -  ALWAYS with a negative.\n전혀 없어요 means there is absolutely none.",example:"A: 이거 알아요? B: 아니요, 전혀 몰라요.",exampleSrc:"A: Do you know this? B: No, I have no idea at all.",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."},
        {type:"teach",trg:"다시",src:"again",pos:"noun",gender:null,phonetic:"da-si",note:"다시: again.\n다시 한 번 means one more time. Very useful phrase.",example:"A: 다시 한 번 말해 주세요. B: 네, 천천히 말할게요.",exampleSrc:"A: Please say it again. B: Sure, I will speak slowly.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"mc",q:"전혀 means:",opts:["not at all","a little","very much","sometimes"],ans:"not at all",hint:"Used with negatives for emphasis. 전혀 + 없다/안 = absolute zero."},
        {type:"teach",trg:"혼자",src:"alone",pos:"noun",gender:null,phonetic:"hon-ja",note:"혼자: alone / by oneself.",example:"A: 누구랑 왔어요? B: 혼자 왔어요.",exampleSrc:"A: Who did you come with? B: I came alone.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"천천히",src:"slowly",pos:"verb",gender:null,phonetic:"cheon-cheon-hi",note:"천천히: slowly.\nAdverb suffix (like English -ly).",example:"A: 너무 빨라요! B: 천천히 말해 주세요.",exampleSrc:"A: It's too fast! B: Please speak slowly.",funFact:"A Konglish loanword adapted from English. Korean has borrowed many modern and tech words."},
        {type:"mc",q:"별로 means:",opts:["often","again","not really","always"],ans:"not really",hint:"Used with negatives. 별로 안 좋아요 = not really good. Softer than 전혀."},
        {type:"teach",trg:"왜",src:"why",pos:"noun",gender:null,phonetic:"wae",note:"왜: why.\nShort, common, and direct.",example:"A: 오늘 안 가요. B: 왜요?",exampleSrc:"A: I'm not going today. B: Why?",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"얼마나",src:"how much / how long",pos:"noun",gender:null,phonetic:"eol-ma-na",note:"얼마나: how much / how long.\n얼마나 멀어요? = How far is it?",example:"A: 역까지 얼마나 걸려요? B: 걸어서 십 분이에요.",exampleSrc:"A: How long to the station? B: 10 minutes on foot.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"제일",src:"the most / the best",pos:"num",gender:null,phonetic:"je-il",note:"제일: the most / number one.\nCOMPOUND: 제 (most) + 일 (one).",example:"A: 제일 좋아하는 음식이 뭐예요? B: 김치찌개요!",exampleSrc:"A: What is your favorite food? B: Kimchi stew!",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"mc",q:"얼마나 means:",opts:["how much/long","how many","where","when"],ans:"how much/long",hint:"A question word for degree or duration. 얼마나 걸려요? = How long does it take?"},
        {type:"teach",trg:"가장",src:"the most",pos:"noun",gender:null,phonetic:"ga-jang",note:"가장: the most  -  same meaning as 제일.\n제일 is more colloquial, 가장 more formal.",example:"A: 뭐가 가장 중요해요? B: 건강이 가장 중요해요.",exampleSrc:"A: What is most important? B: Health is the most important.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"tip",title:"📊 Frequency Scale  -  Full A1 Set",text:"항상 / 늘\n→ always\n\n자주\n→ often\n\n보통\n→ usually\n\n가끔\n→ sometimes\n\n별로 (+ negative)\n→ not really\n\n전혀 (+ negative)\n→ not at all\n\n이제 A1이 진짜 끝났어요.\n→ Now A1 is truly complete."},
        {type:"mc",q:"별로 / 전혀 always pair with:",opts:["Positive sentences (verb + 요)","Negative sentences (안/못/없어요)","Questions only (interrogative)","Past tense only (았/었어요)"],ans:"Negative sentences (안/못/없어요)",hint:"별로 안 좋아요, 전혀 없어요  -  always negative"},
        {type:"mc",q:"'How long does it take?' in Korean:",opts:["얼마예요?","얼마나 걸려요?","언제 걸려요?","왜 걸려요?"],ans:"얼마나 걸려요?",hint:"얼마나 = how much/long (degree/duration)"},
        {type:"fb",opts:["자주","가끔","전혀","별로"],hint:"... = often",s:"저는 ___ 커피를 마셔요.\n(I often drink coffee)",a:"자주"},
        {type:"fb",opts:["천천히","자주","다시","혼자"],hint:"... = slowly",s:"___ 말해 주세요.\n(Please speak slowly)",a:"천천히"},
        {type:"match",pairs:[{trg:"자주",src:"often"},{trg:"가끔",src:"sometimes"},{trg:"전혀 + neg",src:"not at all"},{trg:"제일/가장",src:"the most/best"}]},
        {type:"drag_fill",hint:"I often exercise. So I'm tired. I sometimes rest.",s:"{1} 운동해요. {2} 피곤해요. {3} 쉬어요.",blanks:{"1":"자주","2":"그래서","3":"가끔"},pool:["자주","가끔","그래서","그런데","전혀"]}
  ]},
  {id:"kou6l8",title:"Review and Quiz",icon:"📝",xp:30,board:true,steps:[
        {type:"intro",title:"A1 Complete!",desc:"A1 complete! Everything TOPIK 1 requires is in place.",goals:["Verify 에 vs 에서 vs (으)로 mastery","Confirm 안 vs 못 distinction","Test connector and frequency adverb knowledge"]},
        {type:"teach",trg:"A1 Complete: Grammar Summary",src:"Everything covered through U6",pos:"part",gender:null,phonetic:"",note:"PARTICLES: all eight particles now formally named.\n\nNEGATION: four tools (choice, inability, long forms of each).",example:"A: 학교에 어떻게 가요? B: 버스로 가요. 학교에서 공부해요. 어렵지만 재미있어요.",exampleSrc:"A: How do you get to school? B: I go by bus. I study at school. It's hard but interesting.",deepDive:{
          title:"Connectors, Frequency Words, and TOPIK Readiness",
          text:"CONNECTORS: -고, -지만, 그래서, 그런데, 그러면, 아니면.\n\nFREQUENCY: 자주, 가끔, 보통, 별로, 전혀, 왜, 얼마나, 제일/가장.\n\nPOSITIONS: 위/아래/앞/뒤/안/밖/옆/사이  -  complete set.\n\nVERB STRUCTURE: stem + ending (preview). Full system later.\n\n✅ You are TOPIK 1 ready."
        ,funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"mc",q:"에 vs 에서  -  the key difference:",opts:["They are the same thing","에: static; 에서: action","에: action; 에서: static","에: formal; 에서: casual"],ans:"에: static; 에서: action",hint:"에 = being/going there. 에서 = doing something there."},
        {type:"mc",q:"지하 means 'underground'. 지하철 therefore means:",opts:["Underground train","Fast train","City bus","Underground tunnel"],ans:"Underground train",hint:"지하 (underground) + 철 (iron/rail) = subway/metro."},
        {type:"mc",q:"버스로 가요. 로 here marks:",opts:["Object (acted on)","Location (at/in)","Means of transport","Topic (about this)"],ans:"Means of transport",hint:"(으)로 = by means of / toward."},
        {type:"mc",q:"In 먹어요, the stem is:",opts:["먹어","먹","어요","먹어요"],ans:"먹",hint:"Strip 다 from 먹다. Remaining = stem."},
        {type:"mc",q:"'It's hot'  -  correct polite form:",opts:["덥어요","덥요","더워요","더워다"],ans:"더워요",hint:"덥다 is ㅂ-irregular. ㅂ becomes 우 before vowel endings."},
        {type:"mc",q:"공항 = 공 + 항. 공 means:",opts:["Korean / domestic","Machine / device","Air / public / empty","Port / harbor"],ans:"Air / public / empty",hint:"공 (空): air, public, empty. 공기, 공원, 공항"},
        {type:"mc",q:"비가 와요  -  why 와요 (come) not another verb?",opts:["No reason, just random","Korean sees rain as coming","와요 sounds nice and soft","It is a translation of English"],ans:"Korean sees rain as coming",hint:"비가 오다 = rain comes = it rains. 눈이 오다 = snow comes = it snows."},
        {type:"fb",opts:["에서","에","를","로"],hint:"Studying is an ACTION at the library",s:"도서관___공부해요.\n(I study at the library)",a:"에서"},
        {type:"fb",opts:["로","에","에서","를"],hint:"지하철 ends in a consonant → 로 (by subway)",s:"지하철___학교에 가요.\n(I go to school by subway)",a:"로"},
        {type:"fb",opts:["와요","오아요","오요","왔요"],hint:"Check the stem vowel: bright or dark?",s:"친구가___.\n(A friend comes  -  polite present)",a:"와요"},
        {type:"match",pairs:[{trg:"에",src:"to/at (static or destination)"},{trg:"에서",src:"at (action location)"},{trg:"(으)로",src:"by/toward (means/direction)"},{trg:"을/를",src:"object marker"}]},
        {type:"drag_fill",hint:"I go to the airport by bus. I waited at the airport for 2 hours.",s:"저는 버스{1} 공항{2} 가요. 공항{3} 두 시간 기다렸어요.",blanks:{"1":"로","2":"에","3":"에서"},pool:["로","에","에서","를","는"]},
        {type:"mc",q:"지금까지 배운 것으로 할 수 있는 것은?",opts:["기본 생활 한국어 (Handle survival Korean)","한국 소설 읽기 (Read Korean novels)","자막 없이 드라마 보기 (Watch dramas without subs)","회의에서 유창하게 말하기 (Speak fluently in meetings)"],ans:"기본 생활 한국어 (Handle survival Korean)",hint:"At this stage you can navigate, eat, shop, ask directions, handle numbers."}
  ]}
]};
