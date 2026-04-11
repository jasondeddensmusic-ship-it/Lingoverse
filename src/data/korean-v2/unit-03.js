// Unit 3 — 하나, 둘, 셋
// Numbers, SOV Named & Counters

export default {n:3,lang:"ko",srcLang:"en",track:"v2",title:"하나, 둘, 셋",sub:"Numbers, SOV Named & Counters",icon:"🔢",level:"A1.1",color:"#F0A500",lessons:[
  {id:"kou3l1",title:"Sino-Korean Numbers 1-10",icon:"🔢",xp:20,board:true,steps:[
        {type:"intro",title:"Numbers: System 1 of 2",desc:"일, 이, 삼...\n→ Sino-Korean numbers\n\nFor dates, money, phone numbers.",goals:["Count 일 through 십","Build compound numbers (11, 20, 35)","Know when Sino-Korean numbers are used"]},
        {type:"teach",trg:"일, 이, 삼",src:"1, 2, 3",pos:"num",gender:null,phonetic:"il, i, sam",note:"SINO-KOREAN numbers from Chinese.\n\nUse for: dates, money, phone numbers, minutes, floors, addresses.\nNOT for counting objects (that uses native Korean).",example:"A: 일, 이, 삼... 다음은? B: 사, 오!",exampleSrc:"A: 1, 2, 3... next? B: 4, 5!",deepDive:{
          title:"Two Number Systems",
          text:"Korean has TWO number systems.\nSino-Korean (일, 이, 삼): dates, money, phone numbers, minutes, floors.\nNative Korean (하나, 둘, 셋): counting objects, hours, age.\n\nYou will learn both. Sino-Korean first."
        ,funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"teach",trg:"사, 오, 육",src:"4, 5, 6",pos:"intj",gender:null,phonetic:"sa, o, yuk",note:"사 (4), 오 (5), 육 (6).\n\n⚠️ 사 also means death in Chinese characters.",example:"A: 사월은 뭐예요? B: 봄이에요.",exampleSrc:"A: What is April? B: It's spring.",deepDive:{title:"Using 사, 오, 육",text:"This is why 4 is unlucky in Korea.\nMany Korean buildings skip the 4th floor\nor label it 'F' instead.",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"teach",trg:"칠, 팔, 구, 십",src:"7, 8, 9, 10",pos:"num",gender:null,phonetic:"chil, pal, gu, sip",note:"칠 (7), 팔 (8), 구 (9), 십 (10).\n\n십 is the base for all compound numbers.",example:"A: 칠 더하기 삼은? B: 십이에요!",exampleSrc:"A: 7 plus 3 is? B: It's 10!",deepDive:{title:"Using 칠, 팔, 구, 십",text:"십일 (eleven) = 10+1 = 11.\n이십 (twenty) = 2×10 = 20.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"mc",q:"사, 오, 육 means:",opts:["1, 2, 3","4, 5, 6","7, 8, 9, 10","10, 20, 30"],ans:"4, 5, 6",hint:"사 follows 삼 (3). Continue counting from there."},
        {type:"tip",title:"🧮 Number Compounds = Pure Math",deepDive:{
          title:"Building Any Number From Digits",
          text:"사천 (four thousand)\n→ 4,000\n\n오만 (fifty thousand)\n→ 50,000\n\nIt is literal multiplication. No exceptions.\n\nDigits 1-9 + 십 → teens\nDigit × 십 + digit → any number up to 99\n\nNo new words needed after 일-십.\nPure arithmetic."
        },text:"Sino-Korean numbers are pure math  -  just add morphemes:\n\n십 (10) + 일 (1) = 십일 = 11\n이 (2) × 십 (10) = 이십 = 20\n삼 (3) × 백 (100) = 삼백 = 300"},
        {type:"mc",q:"십일 in numbers:",opts:["10","11","12","21"],ans:"11",hint:"십(10) + 일(1)"},
        {type:"mc",q:"이십 in numbers:",opts:["12","20","21","2"],ans:"20",hint:"이(2) × 십(10)"},
        {type:"mc",q:"삼십오 in numbers:",opts:["35","53","305","350"],ans:"35",hint:"삼(3) tens + 오(5)"},
        {type:"mc",q:"Why do many Korean buildings skip the 4th floor?",opts:["Building codes","사 sounds like 'death'","Only 3 floors are needed","Old tradition"],ans:"사 sounds like 'death'",hint:"사 = 4 AND death (from Chinese)"},
        {type:"fb",opts:["십","팔","구","칠"],hint:"4 + 6 = ?",s:"사 더하기 육은 ___이에요. (4 + 6 = ___)",a:"십"},
        {type:"fb",opts:["삼","이","사","육"],hint:"20 + 3 = 23: 이십 + ?",s:"이십___ = 23 (twenty-___)",a:"삼"},
        {type:"match",pairs:[{trg:"일",src:"1"},{trg:"삼",src:"3"},{trg:"육",src:"6"},{trg:"십",src:"10"}]},
        {type:"match",pairs:[{trg:"십일",src:"11"},{trg:"이십",src:"20"},{trg:"삼십",src:"30"},{trg:"사십오",src:"45"}]},
        {type:"drag_fill",hint:"010 format: most Korean mobile numbers start 010",s:"전화번호: 공 {1} 공 - 일이삼사 - 오육칠팔",blanks:{"1":"일"},pool:["일","이","삼","사","오"]},
        {type:"mc",q:"Sino-Korean numbers are used for:",opts:["Counting apples","Telling the hour","Dates and money","Age"],ans:"Dates and money",hint:"Dates, money, phone numbers, minutes  -  all Sino-Korean"}
  ]},
  {id:"kou3l2",title:"백, 천, 만",icon:"💰",xp:20,board:true,steps:[
        {type:"intro",title:"Bigger Numbers",desc:"만\n→ ten-thousand\n\nKorean counts by 10,000s, not 1,000s.",goals:["Use 백 (100), 천 (1,000), 만 (10,000)","Understand the Korean ten-thousand base","Read real Korean prices"]},
        {type:"teach",trg:"백",src:"100",pos:"noun",gender:null,phonetic:"baek",note:"백: hundred.\n이백 (200), 삼백 (300), 오백 (500).\n구백구십구 (999: nine hundred ninety-nine).",example:"A: 이백오십은 뭐예요? B: 250이에요.",exampleSrc:"A: What is 이백오십? B: It's 250.",deepDive:{title:"Using 백",text:"1백 is just 백 (not 일백).",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"천",src:"1,000",pos:"num",gender:null,phonetic:"cheon",note:"천: thousand.\n이천 is 2,000. 삼천 is 3,000.\nJust say the number. The 1 is implied for thousands.",example:"A: 삼천오백 원이에요? B: 네, 삼천오백 원이에요.",exampleSrc:"A: Is it 3,500 won? B: Yes, it's 3,500 won.",deepDive:{title:"천 in Korean Culture",text:"A typical Korean lunch: 오천~팔천 원 (₩5,000-8,000).",funFact:"Korean has TWO number systems: native Korean (하나, 둘, 셋) for counting and Sino-Korean (일, 이, 삼) for dates and money."}},
        {type:"teach",trg:"만",src:"10,000",pos:"noun",gender:null,phonetic:"man",note:"만: TEN THOUSAND (not just a thousand).\n\n⚠️ Korean groups by 만 (10,000), not 천 (1,000).",example:"A: 이거 얼마예요? B: 오만 원이에요.",exampleSrc:"A: How much is this? B: It's 50,000 won.",deepDive:{
          title:"만 in Korean Culture",
          text:"English groups by thousands (1,000; 10,000; 100,000)\nKorean groups by TEN-THOUSANDS\n\n10,000 = 일만\n100,000 = 십만 (ten ten-thousands)\n1,000,000 = 백만 (hundred ten-thousands)\n\nThis is why Korean prices look huge to English speakers."
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"mc",q:"천 means:",opts:["100","10,000","1,000","10"],ans:"1,000",hint:"백 (100) → 천 → 만 (10,000). What comes between?"},
        {type:"teach",trg:"전화번호",src:"phone number",pos:"num",gender:null,phonetic:"jeon-hwa-beon-ho",note:"COMPOUND: 전화 (phone call) + 번호 (number).\n\n공 means zero for phone numbers (not 영).",example:"A: 전화번호가 뭐예요? B: 공일공 일이삼사예요.",exampleSrc:"A: What's your phone number? B: 010-1234.",deepDive:{title:"Using 전화번호",text:"010-1234-5678: 공일공 일이삼사 오육칠팔 (read digit by digit)\n\n전화하다: to phone someone (전화 + 하다)",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},hanja:"電話+番號"},
        {type:"tip",title:"💡 Why Korean Prices Look Enormous",deepDive:{
          title:"Real Korean Price Examples With 만",
          text:"Practical examples:\n₩1,000: 천 원 (1 thousand)\n₩10,000: 만 원 (1 ten-thousand)  -  King Sejong's face\n₩50,000: 오만 원 (5 ten-thousands)  -  largest bill, 신사임당 (Shin Saimdang)\n₩100,000: 십만 원 (10 ten-thousands)\n\n만 원 is your basic mental unit for Korean money."
        },text:"You see a price tag: 25,000원\n\nEnglish brain: 'Twenty-five thousand won'\nKorean brain: 이만오천 원 (2 ten-thousands + 5 thousands)\n\nKorea groups by 만 (10,000), not 천 (1,000).\n"},
        {type:"mc",q:"오천 원 in won:",opts:["₩500","₩5,000","₩50,000","₩500,000"],ans:"₩5,000",hint:"오(5) × 천(1,000)"},
        {type:"mc",q:"오만 원 in won:",opts:["₩5,000","₩50,000","₩500,000","₩5,000,000"],ans:"₩50,000",hint:"오(5) × 만(10,000) = 50,000  -  the biggest Korean bill"},
        {type:"mc",q:"Korean groups big numbers by:",opts:["Hundreds (백)","Thousands (천)","Ten-thousands (만)","Millions"],ans:"Ten-thousands (만)",hint:"만 = 10,000 is the base grouping unit"},
        {type:"mc",q:"전화번호 = 전화 + 번호. What does 전화 mean?",opts:["Number","Address","Phone call","Building"],ans:"Phone call",hint:"전화하다 = to phone someone"},
        {type:"fb",opts:["오천","오백","오십","오"],hint:"30,000 + 5,000 = 35,000",s:"삼만___ = 35,000원 (thirty thousand + ___)",a:"오천"},
        {type:"fb",opts:["천","백","만","십"],hint:"1,000 = one thousand",s:"1,000원은 ___원이에요. (1,000 = one thousand)",a:"천"},
        {type:"match",pairs:[{trg:"백",src:"100"},{trg:"천",src:"1,000"},{trg:"만",src:"10,000"},{trg:"십만",src:"100,000"}]},
        {type:"drag_fill",hint:"12,500 = 만(10,000) + 이천(2,000) + 오백(500)",s:"이 가방은 {1}오백 원이에요. (₩12,500)",blanks:{"1":"만이천"},pool:["만이천","이만","천이백","십이백"]},
        {type:"mc",q:"'My phone number is 010-9876-5432' starts with:",opts:["공일공","영일영","일공일","십일공"],ans:"공일공",hint:"Phone numbers use 공 for zero"},
        {type:"mc",q:"₩100,000 in Korean is:",opts:["만 원","십만 원","백만 원","천만 원"],ans:"십만 원",hint:"100,000 = 10 × 만(10,000) = 십만"}
  ]},
  {id:"kou3l3",title:"Native Korean 하나-열",icon:"✋",xp:20,board:true,steps:[
        {type:"intro",title:"Numbers: System 2 of 2",desc:"하나, 둘, 셋...\n→ native Korean numbers\n\nFor counting things and hours.",goals:["Count 하나 through 열","Know the 4 number contractions (한, 두, 세, 네)","Apply the right system in context"]},
        {type:"teach",trg:"하나, 둘, 셋, 넷, 다섯",src:"1, 2, 3, 4, 5",pos:"num",gender:null,phonetic:"ha-na, dul, set, net, da-seot",note:"NATIVE KOREAN numbers.\n\nUse for: counting things, hours, and age.",example:"A: 사과 몇 개요? B: 하나 주세요.",exampleSrc:"A: How many apples? B: One, please.",deepDive:{
          title:"Using 하나, 둘, 셋, 넷, 다섯",
          text:"• Counting objects (with counters)\n• Hours: 세 시 (3 o'clock)\n• Age: 스물 한 살 (21 years old)\n\nNOT for dates, money, phone numbers."
        ,funFact:"Korean has TWO number systems: native Korean (하나, 둘, 셋) for counting and Sino-Korean (일, 이, 삼) for dates and money."}},
        {type:"teach",trg:"여섯, 일곱, 여덟, 아홉, 열",src:"6, 7, 8, 9, 10",pos:"num",gender:null,phonetic:"yeo-seot, il-gop, yeo-deol, a-hop, yeol",note:"여섯~열: the harder ones to memorize.\n\nGood news: native numbers are mainly used 1-99.",example:"A: 몇 시예요? B: 열 시예요.",exampleSrc:"A: What time is it? B: It's 10 o'clock.",deepDive:{title:"Using 여섯, 일곱, 여덟, 아홉, 열",text:"Above 100, Sino-Korean takes over completely.\nFocus on 1-20 first. The rest follows.",funFact:"Korean has TWO number systems: native Korean (하나, 둘, 셋) for counting and Sino-Korean (일, 이, 삼) for dates and money."}},
        {type:"teach",trg:"한, 두, 세, 네",src:"1, 2, 3, 4 (contracted before counters)",pos:"part",gender:null,phonetic:"han, du, se, ne",note:"Before counters, these four shorten:\n\n하나 → 한 (one)\n둘 → 두 (two)\n셋 → 세 (three)\n넷 → 네 (four)",example:"A: 사과 몇 개요? B: 세 개 주세요.",exampleSrc:"A: How many apples? B: Three, please.",deepDive:{
          title:"Only These Four",
          text:"Only THESE FOUR contract. 다섯~열 stay the same.\n하나 개 ✗ → 한 개 ✓ (one item)\n둘 잔 ✗ → 두 잔 ✓ (two cups)\n다섯 명 ✓ (no contraction needed for 5+)"
        ,funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"mc",q:"여섯, 일곱, 여덟, 아홉, 열 means:",opts:["1, 2, 3, 4, 5","6, 7, 8, 9, 10","1, 2, 3, 4","11, 12, 13, 14, 15"],ans:"6, 7, 8, 9, 10",hint:"These are native Korean numbers. 열 is the last single digit."},
        {type:"tip",title:"📊 Two Systems: The Cheat Sheet",deepDive:{
          title:"Native Korean Numbers: Counting, Hours, and Age",
          text:"NATIVE KOREAN (하나, 둘, 셋...) = for counting, hours, age:\n두 개 = 2 items\n세 시 = 3 o'clock\n스물다섯 살 = 25 years old\n\nNATIVE KOREAN (하나, 둘, 셋...):\n• Counting things: 사과 세 개 (3 apples)\n• Hours: 세 시 (3 o'clock)\n• Age: 스물 살 (20 years old)\n\nTip: if you're unsure, listen to how Koreans say it.\nAfter 100 encounters, your ear knows which to use."
        },text:"SINO-KOREAN (일, 이, 삼...) = for dates, money, minutes:\n삼월 십오일 = March 15th\n이천 원 = ₩2,000\n삼십 분 = 30 minutes"},
        {type:"mc",q:"'3 o'clock' uses which number?",opts:["삼 시","셋 시","세 시","삼시"],ans:"세 시",hint:"Hours use NATIVE numbers, and 셋 contracts to 세 before counters"},
        {type:"mc",q:"'March 15th' uses which number system?",opts:["Native Korean","Sino-Korean","Both mixed","Either works"],ans:"Sino-Korean",hint:"Dates always use ...: 삼월 십오일"},
        {type:"mc",q:"Which four native numbers contract before counters?",opts:["하나, 둘, 셋, 다섯","하나, 둘, 셋, 넷","둘, 셋, 넷, 다섯","하나, 셋, 다섯, 여섯"],ans:"하나, 둘, 셋, 넷",hint:"Only the first four: 하나→한, 둘→두, 셋→세, 넷→네"},
        {type:"mc",q:"'5 people' in Korean:",opts:["다섯 명","다선 명","오 명","다섯명"],ans:"다섯 명",hint:"다섯 (5) does NOT contract. No change needed."},
        {type:"fb",opts:["둘","두","이","이십"],hint:"둘 contracts to 두 before counters",s:"커피 ___ 잔 주세요. (2 cups of coffee) (둘 contracts to 두 before counters)",a:"두"},
        {type:"fb",opts:["일곱","칠","일","여섯"],hint:"Hours use NATIVE Korean. 7",s:"지금 ___ 시예요.\n(It's 7 o'clock)",a:"일곱"},
        {type:"fb",opts:["셋","세","삼","세이"],hint:"셋 contracts to 세 before counters",s:"사과 ___ 개 주세요. (3 apples) (셋 contracts to 세 before counters)",a:"세"},
        {type:"match",pairs:[{trg:"하나→한",src:"1 (contracts before counter)"},{trg:"둘→두",src:"2 (contracts before counter)"},{trg:"셋→세",src:"3 (contracts before counter)"},{trg:"넷→네",src:"4 (contracts before counter)"}]},
        {type:"drag_fill",hint:"3:30  -  native for hours, Sino-Korean for minutes",s:"지금 {1} 시 {2} 분이에요.",blanks:{"1":"세","2":"삼십"},pool:["세","셋","삼","삼십","서른","열"]},
        {type:"mc",q:"Which counter phrase is WRONG?",opts:["사과 세 개","커피 두 잔","사람 하나 명","시간 한 시간"],ans:"사람 하나 명",hint:"하나 contracts to 한 before counters: 한 명, not 하나 명"}
  ]},
  {id:"kou3l4",title:"Counters: 개, 명, 잔, 마리",icon:"🍎",xp:20,board:true,steps:[
        {type:"intro",title:"Korean Counts by Category",desc:"개\n→ counter (general)\n\nKorean needs a COUNTER between number and noun.",goals:["Use 개 (things), 명 (people), 잔 (drinks), 마리 (animals)","Apply the contraction rule (한/두/세/네)","Understand WHY counters exist"]},
        {type:"teach",trg:"개",src:"(counter for general objects)",pos:"noun",gender:null,phonetic:"gae",note:"개: general counter for THINGS and OBJECTS.\n\nPattern: noun + number + counter.",example:"A: 뭐 있어요? B: 사과 세 개 있어요.",exampleSrc:"A: What do you have? B: I have 3 apples.",deepDive:{
          title:"개",
          text:"사과 세 개: apple three-개.\n\nNumbers 1-4 contract:\n한 개 (1), 두 개 (2), 세 개 (3), 네 개 (4)\n다섯 개 (5), 여섯 개 (6)  -  no contraction needed."
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"명",src:"(counter for people)",pos:"part",gender:null,phonetic:"myeong",note:"명: general counter for PEOPLE.\n두 명: 2 people. 세 명: 3 people.\n",example:"A: 학생이 몇 명이에요? B: 다섯 명이에요.",exampleSrc:"A: How many students? B: Five.",deepDive:{
          title:"명",
          text:"분 is the POLITE version of 명:\n두 분이세요? (Are there two of you?)  -  in restaurants.\n선생님 두 분 (two teachers  -  honorific)."
        ,funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"teach",trg:"잔",src:"(counter for cups/glasses)",pos:"noun",gender:null,phonetic:"jan",note:"잔: counter for cups, glasses, drinks.\n한 잔: one cup. 두 잔: two cups.\n",example:"A: 커피 몇 잔이에요? B: 두 잔이에요.",exampleSrc:"A: How many cups of coffee? B: Two cups.",deepDive:{title:"Using 잔",text:"커피 한 잔 주세요 is THE coffee order phrase.\nLike English 'two cups of' -  but always required.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"mc",q:"명 means:",opts:["counter for people","counter for objects","counter for cups","counter for animals"],ans:"counter for people",hint:"Each counter pairs with a category. This one counts human beings."},
        {type:"teach",trg:"마리",src:"(counter for animals)",pos:"noun",gender:null,phonetic:"ma-ri",note:"마리: counter for ANIMALS (all animals).\n고양이 한 마리: one cat.\n강아지 두 마리: two puppies.",example:"A: 고양이 있어요? B: 네, 한 마리 있어요.",exampleSrc:"A: Do you have a cat? B: Yes, I have one.",deepDive:{title:"Using 마리",text:"물고기 세 마리: three fish.\n\nAll animals use 마리, regardless of size.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"tip",title:"🗂️ Why Counters? Korean Classifies the World",deepDive:{
          title:"Advanced Counter Categories",
          text:"마리 = counter for animals: 고양이 두 마리 = 2 cats\n\nPattern: 사과 두 개 (apple two counter)\n\n장  -  flat things (paper, tickets, photos)\n대  -  machines, vehicles\n벌  -  clothing items\n\nYou don't need all of these now.\nJust know: EVERY noun has a counter category.\nThe most common ones come naturally through use.\n\nThink of it like English 'sheets of paper' or 'heads of cattle'  -  but systematically applied to everything."
        },text:"Korean uses counters between number and noun:\n\n개 = counter for objects: 사과 두 개 = 2 apples\n명 = counter for people: 학생 세 명 = 3 students\n잔 = counter for cups: 커피 한 잔 = 1 coffee"},
        {type:"mc",q:"'3 apples' in Korean:",opts:["사과 삼 개","사과 세 개","세 사과 개","사과 셋"],ans:"사과 세 개",hint:"Noun + native number (contracted) + counter"},
        {type:"mc",q:"'2 cups of coffee':",opts:["커피 이 잔","커피 두 잔","두 커피 잔","커피 둘 잔"],ans:"커피 두 잔",hint:"둘 → 두 before counter"},
        {type:"mc",q:"The POLITE counter for people is:",opts:["개","명","분","마리"],ans:"분",hint:"분 is the honorific version of 명"},
        {type:"mc",q:"'5 dogs' in Korean:",opts:["강아지 다선 마리","강아지 다섯 마리","강아지 오 마리","다섯 강아지"],ans:"강아지 다섯 마리",hint:"Animals use 마리. 5 = 다섯 (no contraction needed)"},
        {type:"fb",opts:["한","하나","일","하"],hint:"하나 contracts to 한 before counters",s:"고양이 ___ 마리가 있어요. (one cat)",a:"한"},
        {type:"fb",opts:["두","이","둘","한"],hint:"Polite counter for people = 분, 2 = 두",s:"손님이 ___ 분이에요. (2 guests  -  polite)",a:"두"},
        {type:"fb",opts:["권","개","명","장"],hint:"Books use 권 (not 개)",s:"책 세 ___ 주세요. (3 books  -  use the right counter)",a:"권"},
        {type:"match",pairs:[{trg:"개",src:"general objects"},{trg:"명",src:"people (plain)"},{trg:"잔",src:"cups/drinks"},{trg:"마리",src:"animals"}]},
        {type:"match",pairs:[{trg:"분",src:"people (honorific)"},{trg:"권",src:"books"},{trg:"장",src:"flat things (paper)"},{trg:"대",src:"machines/vehicles"}]},
        {type:"drag_fill",hint:"2 coffees and 3 apples  -  contracted forms",s:"커피 {1} 잔하고 사과 {2} 개 주세요.",blanks:{"1":"두","2":"세"},pool:["두","둘","세","셋","이","삼"]},
        {type:"mc",q:"Which counter would you use for 'two tickets'?",opts:["두 잔","두 개","두 장","두 마리"],ans:"두 장",hint:"장 = flat things like paper, tickets, photos"},
        {type:"teach",trg:"-만",src:"only / just",pos:"noun",gender:null,phonetic:"-man",note:"-만: only / just.\nAttaches directly to a noun.\n\n커피만 마셔요.\n→ I only drink coffee.\n물만 주세요.\n→ Just water, please.",example:"A: 몇 개 드릴까요? B: 하나만 주세요.",exampleSrc:"A: How many shall I give you? B: Just one, please.",deepDive:{
          title:"-만 Replaces Other Particles",
          text:"-만 replaces 은/는/이/가/을/를:\n\n커피를 마셔요 → 커피만 마셔요\n(coffee) → (only coffee)\n\n학생이 있어요 → 학생만 있어요\n(students are here) → (only students)\n\nLike 도, -만 replaces, never stacks."
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"mc",q:"하나만 주세요 means:",opts:["Give me one more","Just one, please","I have only one","One is not enough"],ans:"Just one, please",hint:"-만 = only/just"},
        {type:"fb",opts:["만","도","를","은"],hint:"'Only' particle: replaces 를",s:"커피___ 마셔요.\n(I drink ONLY coffee.)",a:"만"},
        {type:"mc",q:"물만 주세요. What is being requested?",opts:["More water","Only water","Hot water","No water"],ans:"Only water",hint:"-만 = only/just"},
        {type:"teach",trg:"고양이",src:"cat",pos:"noun",gender:null,phonetic:"go-yang-i",note:"고양이: cat.\nCounted with 마리 (animal counter).\n한 마리, 두 마리, 세 마리...",example:"A: 고양이가 있어요? B: 네, 한 마리가 있어요.",exampleSrc:"A: Is there a cat? B: Yes, there is one.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"강아지",src:"puppy / dog",pos:"noun",gender:null,phonetic:"gang-a-ji",note:"강아지: puppy/small dog.\n개 = dog (general).\n강아지 is more common in daily speech.",example:"A: 강아지가 있어요? B: 네, 두 마리 있어요.",exampleSrc:"A: Do you have a puppy? B: Yes, I have two.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"새",src:"bird",pos:"noun",gender:null,phonetic:"sae",note:"새: bird (general).\n참새 = sparrow.\n독수리 = eagle.",example:"A: 저기 뭐가 있어요? B: 새가 있어요.",exampleSrc:"A: What's over there? B: There's a bird.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"mc",q:"고양이 세 마리.\nHow many cats?",opts:["3","2","4","1"],ans:"3",hint:"세 = 3. 마리 = animal counter. Three cats."},
        {type:"fb",opts:["두","이","둘","들"],hint:"Two puppies. Native Korean number before counter: 두.",s:"강아지 {1} 마리를 키워요.\n(I raise ___ puppies.)",a:"두"},
        {type:"match",pairs:[{trg:"고양이",src:"cat"},{trg:"강아지",src:"puppy"},{trg:"새",src:"bird"},{trg:"물고기",src:"fish"}]}
  ]},
  {id:"kou3l5",title:"몇 시예요?",icon:"🕐",xp:20,board:true,steps:[
        {type:"intro",title:"Telling Time",desc:"세 시 삼십 분\n→ 3:30\n\nHours = native numbers. Minutes = Sino-Korean.",goals:["Ask and answer 몇 시예요?","Use native hours + Sino minutes","Decompose 오전/오후 as LEGO compounds"]},
        {type:"teach",trg:"몇 시예요?",src:"What time is it?",pos:"intj",gender:null,phonetic:"myeot si-ye-yo?",note:"몇: how many. 시: o'clock (counter for hours).\n지금 몇 시예요?: 'What time is it now?'\n",example:"A: 지금 몇 시예요? B: 세 시 반이에요.",exampleSrc:"A: What time is it? B: It is 3:30.",deepDive:{title:"Using 몇 시예요?",text:"시 uses NATIVE Korean numbers:\n한 시 = 1 o'clock, 두 시 = 2 o'clock, 세 시 = 3 o'clock...",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"teach",trg:"분",src:"minute(s)",pos:"num",gender:null,phonetic:"bun",note:"분: minutes (counter for minutes).\n분 uses SINO-KOREAN numbers:\n십 분 (10 min), 이십 분 (20 min), 삼십 분 (30 min)",example:"A: 몇 분이에요? B: 삼십 분이에요.",exampleSrc:"A: How many minutes? B: It's 30 minutes.",deepDive:{title:"Using 분",text:"반: half  -  세 시 반 = 3:30 (very common shortcut).\n세 시 반 = 세 시 삼십 분 (same meaning)",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"teach",trg:"오전 / 오후",src:"AM / PM",pos:"intj",gender:null,phonetic:"o-jeon / o-hu",note:"SINO-KOREAN COMPOUNDS:\n오 (noon/午) + 전 (before/前): before noon = AM\n오 (noon/午) + 후 (after/後): after noon = PM",example:"A: 오전이에요? 오후예요? B: 오전 아홉 시예요.",exampleSrc:"A: Is it AM? PM? B: It's 9 AM.",deepDive:{title:"Using 오전 / 오후",text:"전 and 후 are reusable morphemes:\n식전 (before eating), 식후 (after eating)\n전날 (day before), 다음날 (day after)",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"mc",q:"분 means:",opts:["What time is it?","minute","AM","hour"],ans:"minute",hint:"시 = hour. What is the smaller unit of time?"},
        {type:"teach",trg:"반",src:"half (past)",pos:"noun",gender:null,phonetic:"ban",note:"반: half.\n두 시 반: 2:30 (two-thirty).\n세 시 반: 3:30 (three-thirty).",example:"A: 지금 몇 시예요? B: 두 시 반이에요.",exampleSrc:"A: What time is it now? B: It's 2:30.",deepDive:{title:"Using 반",text:"Used instead of '삼십 분' in conversation.\n두 시 반 = 두 시 삼십 분 (same meaning, 반 is faster).",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"mc",q:"'3 o'clock' in Korean:",opts:["삼 시","셋 시","세 시","삼시"],ans:"세 시",hint:"Hours use NATIVE Korean. 셋 → 세 before counter"},
        {type:"mc",q:"'3:30' in Korean:",opts:["삼 시 삼십 분","세 시 삼십 분","세 시 서른 분","삼 시 반"],ans:"세 시 삼십 분",hint:"Native hours (세) + Sino minutes (삼십)"},
        {type:"mc",q:"오후 means:",opts:["Before noon","After noon","Exactly noon","Morning"],ans:"After noon",hint:"오 (noon) + 후 (after) = PM"},
        {type:"mc",q:"두 시 반 as a time:",opts:["2:15","2:30","2:45","12:30"],ans:"2:30",hint:"반 = half past = :30"},
        {type:"fb",opts:["열","십","일곱","아홉"],hint:"10 o'clock: hours use NATIVE Korean. 10 = 열",s:"오전 ___ 시예요.\n(It's 10 AM)",a:"열"},
        {type:"fb",opts:["사십오","마흔다섯","사십","다섯"],hint:"Minutes use SINO-Korean. 45",s:"세 시 ___ 분이에요.\n(It's 3:___.)",a:"사십오"},
        {type:"teach",trg:"정오",src:"noon (exactly)",pos:"intj",gender:null,phonetic:"jeong-o",note:"SINO-KOREAN COMPOUND:\n정 (正: exact/precise) + 오 (午: noon).\n'Exact noon' = 12:00 PM.\n\nSame 오 as 오전/오후!",example:"A: 점심 언제 먹어요? B: 정오에 먹어요.",exampleSrc:"A: When do you eat lunch? B: I eat at noon.",deepDive:{
          title:"The 오 Family",
          text:"오 (午: noon) is the root of all three:\n오전 = before noon (AM)\n오후 = after noon (PM)\n정오 = exactly noon\n\n정 (正) means 'exact' or 'correct'.\n정확하다: to be exact/accurate."
        ,funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"mc",q:"낮 열두 시 = noon. The Korean word for 'exactly noon' is:",opts:["정오","오전","오후","반"],ans:"정오",hint:"정 (正: exact) + 오 (午: noon). 오전 = before noon (AM). 오후 = after noon (PM)."},
        {type:"match",pairs:[{trg:"한 시",src:"1 o'clock"},{trg:"열두 시",src:"12 o'clock"},{trg:"오전",src:"AM (before noon)"},{trg:"오후",src:"PM (after noon)"}]},
        {type:"drag_fill",hint:"8:15 AM  -  native hours, Sino minutes",s:"지금 {1} 시 {2} 분이에요. 오전이에요.",blanks:{"1":"여덟","2":"십오"},pool:["여덟","팔","십오","열다섯","열"]},
        {type:"mc",q:"전 in 오전 also appears in 식전 (before eating). 전 means:",opts:["After","Noon","Before","Food"],ans:"Before",hint:"오전 = before noon; 식전 = before a meal"},
        {type:"mc",q:"Which time expression is WRONG?",opts:["세 시 반","두 시 삼십 분","아홉 시 십오 분","이 시 반"],ans:"이 시 반",hint:"두 시 반 not ...: hours always use NATIVE numbers"}
  ]},
  {id:"kou3l6",title:"얼마예요? (Money)",icon:"💴",xp:20,board:true,steps:[
        {type:"intro",title:"How Much?",desc:"얼마예요?\n→ How much?\n\nShopping survival with Korean numbers.",goals:["Ask 얼마예요? (how much?)","Read Korean prices accurately","Handle change and basic transactions"]},
        {type:"teach",trg:"얼마예요?",src:"How much is it?",pos:"noun",gender:null,phonetic:"eol-ma-ye-yo?",note:"THE survival shopping question.\n이것은 얼마예요?: How much is this?\n저것은 얼마예요?: How much is that?",example:"A: 이거 얼마예요? B: 삼천 원이에요.",exampleSrc:"A: How much is this? B: It is 3,000 won.",deepDive:{title:"Using 얼마예요?",text:"얼마: how much. 예요: is.\n\n이거 얼마예요? (shorter, casual version) is also common.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"원",src:"won (₩)",pos:"noun",gender:null,phonetic:"won",note:"원: Korean won (₩).\n천 원 = ₩1,000 (cheap snack)\n만 원 = ₩10,000 (mid-range)",example:"A: 이거 얼마예요? B: 오천 원이에요.",exampleSrc:"A: How much is this? B: It's 5,000 won.",deepDive:{
          title:"Korean Bills and Coins",
          text:"₩1,000 천 원: cheap snack\n₩5,000 오천 원: cheap lunch item\n₩10,000 만 원: King Sejong (세종대왕)\n₩50,000 오만 원: largest bill (신사임당, Shin Saimdang)\n\n만 원 is your basic mental unit for Korean money."
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"거스름돈",src:"change (money back)",pos:"noun",gender:null,phonetic:"geo-seu-reum-don",note:"거스름돈: change (money returned).\n\n영수증 주세요: Receipt, please.",example:"A: 거스름돈이 있어요? B: 네, 여기 있어요.",exampleSrc:"A: Do you have change? B: Yes, here you go.",deepDive:{title:"Using 거스름돈",text:"카드로 해요: I'll pay by card.\n현금으로 해요: I'll pay cash.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"mc",q:"원 means:",opts:["How much is it?","change","price","won"],ans:"won",hint:"This is the name of the Korean currency unit."},
        {type:"teach",trg:"할인",src:"discount",pos:"noun",gender:null,phonetic:"ha-rin",note:"SINO-KOREAN: 할 (cut/reduce) + 인 (price).\n할인이 있어요?\n→ Is there a discount?",example:"A: 할인이 있어요? B: 네, 이십 퍼센트 할인이에요.",exampleSrc:"A: Is there a discount? B: Yes, it's 20 percent off.",deepDive:{title:"Shopping Vocabulary",text:"세일: sale (Konglish from English 'sale')\n이십 퍼센트 할인: 20% off\n퍼센트: percent (Konglish)",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"tip",title:"💳 Paying in Korea",deepDive:{
          title:"Essential Payment Phrases",
          text:"Useful phrases:\n\n카드로 계산해도 돼요?\n→ Can I pay by card?\n\n영수증 주세요.\n→ Receipt, please.\n\n잔돈 없어요.\n→ I don't have exact change."
        },text:"Korea is largely cashless:\n\n카드 (card): credit/debit cards everywhere\n현금 (cash): still needed at small restaurants\n모바일 결제: mobile payment (very common  -  Kakao Pay, Naver Pay)"},
        {type:"mc",q:"이천오백 원 in won:",opts:["₩250","₩2,500","₩25,000","₩250,000"],ans:"₩2,500",hint:"이(2) × 천(1,000) + 오(5) × 백(100) = 2,500"},
        {type:"mc",q:"삼만 원 in won:",opts:["₩3,000","₩300","₩30,000","₩300,000"],ans:"₩30,000",hint:"삼(3) × 만(10,000) = 30,000"},
        {type:"mc",q:"The ₩50,000 bill features:",opts:["Modern Seoul skyline","King Sejong the Great","Shin Saimdang","Cherry blossom painting"],ans:"Shin Saimdang",hint:"신사임당: famous artist and calligrapher. King Sejong is on the ₩10,000 bill."},
        {type:"mc",q:"You want to pay by card. You say:",opts:["영수증 주세요","카드로 해 주세요","현금이 없어요","얼마예요?"],ans:"카드로 해 주세요",hint:"카드 = card, 로 = by means of, 해 주세요 = please do"},
        {type:"fb",opts:["만오천","십오천","오만","천오"],hint:"15,000 = 만(10,000) + 오천(5,000)",s:"이 책은 ___ 원이에요.\n(This book is ___ won. ₩15,000)",a:"만오천"},
        {type:"fb",opts:["할인","거스름돈","영수증","카드"],hint:"할 (cut) + 인 (price) = discount",s:"___이 있어요?\n(Is there a discount?)",a:"할인"},
        {type:"match",pairs:[{trg:"얼마예요?",src:"How much is it?"},{trg:"영수증",src:"receipt"},{trg:"할인",src:"discount"},{trg:"거스름돈",src:"change (money back)"}]},
        {type:"drag_fill",hint:"How much? Then: receipt please.",s:"A: 이거 {1}예요? B: 팔천 원이에요. A: {2} 주세요.",blanks:{"1":"얼마","2":"영수증"},pool:["얼마","몇","할인","영수증","카드"]},
        {type:"mc",q:"십만 원 equals:",opts:["₩10,000","₩50,000","₩100,000","₩1,000,000"],ans:"₩100,000",hint:"십(10) × 만(10,000) = 100,000."}
  ]},
  {id:"kou3l7",title:"★ SOV Named: Verb Goes Last",icon:"⭐",xp:25,board:true,steps:[
        {type:"intro",title:"★ You've Been Doing This Since Day One",desc:"SOV: Subject. Object. Verb.\n\nYou've been doing this since day one.",goals:["Name SOV word order","Verify it in sentences you already know","Own this rule permanently"]},
        {type:"teach",trg:"SOV",src:"Subject  -  Object  -  Verb",pos:"noun",gender:null,phonetic:"",note:"Korean is SOV:\nS: Subject (I, me)\nO: Object (coffee)",example:"A: 뭐 마셔요? B: 저는 커피를 마셔요.",exampleSrc:"A: What do you drink? B: I drink coffee.",deepDive:{
          title:"SOV in Korean Culture",
          text:"V: Verb LAST (마셔요  -  drink)\n\nEnglish is SVO: I DRINK coffee.\nKorean is SOV: I coffee DRINK.\n\nYou've been doing this naturally since lesson 1.\nNow you know what it's called."
        ,funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"teach",trg:"SOV verification",src:"Every sentence you know",pos:"intj",gender:null,phonetic:"",note:"Check every sentence you know:\n\n저는 학생이에요 → S + V (no object)",example:"A: 학생이에요? B: 네, 저는 학생이에요.",exampleSrc:"A: Are you a student? B: Yes, I am a student.",deepDive:{
          title:"Using SOV verification",
          text:"커피가 있어요 → S + V (있다 = exist)\n저는 밥을 먹어요 → S + O + V ✓\n저는 커피를 마셔요 → S + O + V ✓\n\nVerb. Always. Last."
        ,funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"teach",trg:"Flexible middle, fixed end",src:"Korean word order rule",pos:"intj",gender:null,phonetic:"",note:"In a longer sentence:\n어제 (yesterday)  -  time\n저는 (I)  -  subject",example:"A: 어제 뭐 먹었어요? B: 학교에서 점심을 먹었어요.",exampleSrc:"A: What did you eat yesterday? B: I ate lunch at school.",deepDive:{
          title:"Using Flexible middle, fixed end",
          text:"학교에서 (at school)  -  location\n점심을 (lunch)  -  object\n먹었어요 (ate)  -  VERB LAST\n\nThe middle elements can shift.\nThe verb CANNOT move from the end.\n\nEnglish: I ate lunch at school yesterday.\nKorean: Yesterday I at-school lunch ATE."
        ,funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"mc",q:"In Korean, the standard word order is:",opts:["Subject  -  Verb  -  Object","Object  -  Subject  -  Verb","Subject  -  Object  -  Verb","Verb  -  Subject  -  Object"],ans:"Subject  -  Object  -  Verb",hint:"The verb always goes last in Korean sentences."},
        {type:"tip",title:"⭐ Why SOV Feels Natural After Two Units",deepDive:{
          title:"The Verb-Last Rule and Why It Sticks",
          text:"SOV = Subject-Object-Verb. The verb ALWAYS goes last.\nThe middle is flexible. The end is fixed.\n\n저도 몰라요 → ...몰라요 (last)\n\nYour brain already knows SOV.\nThis lesson just gave your brain a name for it.\n\nKey takeaway: NEVER move the verb.\nEven in a sentence with 10 elements,\nthe verb is the caboose."
        },text:"Every Korean sentence you know ends with a verb:\n\n저는 학생이에요 = I am a student (verb last)\n커피를 마셔요 = I drink coffee (verb last)\n학교에 가요 = I go to school (verb last)"},
        {type:"mc",q:"In Korean, where does the verb go?",opts:["First","Middle","Last","It varies"],ans:"Last",hint:"SOV = verb at the END, always"},
        {type:"mc",q:"저는 학생이에요. The verb is:",opts:["저는","학생","이에요","저"],ans:"이에요",hint:"The verb is always the final element"},
        {type:"mc",q:"Which sentence shows correct SOV order?",opts:["마셔요 저는 커피를","저는 마셔요 커피를","저는 커피를 마셔요","커피를 마셔요 저는"],ans:"저는 커피를 마셔요",hint:"Subject first, object middle, verb LAST"},
        {type:"mc",q:"Korean SOV vs English SVO: what's different?",opts:["Korean has no subject","Verb is in the middle in Korean","Verb comes last in Korean","Objects come first in Korean"],ans:"Verb comes last in Korean",hint:"English: I DRINK coffee. Korean: I coffee DRINK."},
        {type:"fb",opts:["먹어요","있어요","가요","이에요"],hint:"Verb = last. 밥을 먹다 = to eat rice",s:"저는 밥을 ___.\n(I eat rice  -  put the verb last)",a:"먹어요"},
        {type:"fb",opts:["읽었어요","도서관","어제","책을"],hint:"The verb (read) goes last in this SOV sentence",s:"어제 저는 도서관에서 책을 ___.\n(Yesterday I ___ a book at the library.)",a:"읽었어요"},
        {type:"match",pairs:[{trg:"S",src:"subject (first)"},{trg:"O",src:"object (middle)"},{trg:"V",src:"verb (always LAST)"},{trg:"SOV",src:"Korean word order"}]},
        {type:"drag_fill",hint:"I drink coffee  -  object comes before verb",s:"{1} {2}를 {3}.",blanks:{"1":"저는","2":"커피","3":"마셔요"},pool:["커피","마셔요","저는","학교"]},
        {type:"mc",q:"어제 저는 학교에서 점심을 먹었어요. The verb is:",opts:["어제","저는","점심을","먹었어요"],ans:"먹었어요",hint:"Verb = last word. Always."},
        {type:"mc",q:"Korean word order is flexible EXCEPT:",opts:["The verb can move anywhere","The verb must be last","The subject must be first","Particles can be dropped"],ans:"The verb must be last",hint:"SOV: the verb always goes at the end"}
  ]},
  {id:"kou3l7b",title:"★ 해요체 Named: You've Been Speaking It All Along",icon:"🎙️",xp:25,board:true,steps:[
        {type:"intro",title:"The Speech Level You're Already Using",desc:"해요체\n→ the polite register\n\nEvery -요 ending you've used is this.",goals:["Learn the name: 해요체","Understand what a speech level is and why Korean has them","See the 3 practical speech levels (not 7  -  be calm)","Hear 합쇼체 and recognise you've already encountered it","Know when 반말 exists but not use it yet"]},
        {type:"teach",trg:"해요체 (haeyo-che)",src:"Polite informal speech  -  the -요 register",pos:"part",gender:null,phonetic:"hae-yo-che",note:"해요체 = 해요 + 체(style/register).\nEvery sentence ending in -요 is polite casual.\n",example:"A: 뭐 해요? B: 공부해요.",exampleSrc:"A: What are you doing? B: I'm studying.",deepDive:{
          title:"해요체 (haeyo-che)",
          text:"Why 해요? Because 하다 → 해요 is its core form.\n\n해요체 is:\n✅ Safe with everyone  -  strangers, colleagues, acquaintances\n✅ Not too formal, not too casual\n✅ The default for any situation you're unsure about\n✅ What 99% of Korean learners use daily, forever\n\nYou have been speaking 해요체 from your very first lesson."
        ,funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"tip",title:"🗺️ Why Korean Has Speech Levels At All",deepDive:{
          title:"The Full System (academic knowledge, not required yet)",
          text:"This is not about being 'polite' in an English sense.\nThis is social cartography. Getting it wrong is like using the wrong tense.\n\nKorean has 7 historically documented speech levels.\nIn practice, only 3 matter for daily life:\n\n1. 해요체 (-아/어요)  -  YOU ARE HERE\n   Polite informal. Safe default with everyone.\n\n2. 합쇼체 (-습니다/ㅂ니다)  -  FORMAL POLITE\n   Offices, broadcasts, military, announcements.\n\n3. 반말 (-아/어, no -요)  -  CASUAL\n   Close friends, younger people, children.\n   Never with strangers or elders.\n\nThe other 4 levels (하오체, 하게체, 해라체, 해체)\nare found in historical dramas and literature.\nNot needed for modern daily life.\n\nConclusion: 3 levels. Not 7. You're already in one."
        },text:"Korean encodes your social relationship DIRECTLY into verb endings.\nYour words tell the listener:\n• How old they are relative to you\n• What your relationship is\n• How formal the situation is\n\nGetting the level wrong is grammatically incoherent.\nKoreans ask your age because they NEED to know which endings to use."},
        {type:"teach",trg:"합쇼체 (hapjyo-che)",src:"Formal polite  -  the -습니다/ㅂ니다 register",pos:"intj",gender:null,phonetic:"hap-syo-che",note:"합쇼체 = the formal, stiff register.\nYou've already heard it  -  you just didn't know the name.\n\n처음 뵙겠습니다: memorize as a set formal phrase. -겠 is taught in a later lesson.",example:"A: 처음 뵙겠습니다. B: 네, 반갑습니다.",exampleSrc:"A: Nice to meet you (formal). B: Yes, nice to meet you.",deepDive:{
          title:"Using 합쇼체 (hapjyo-che)",
          text:"감사합니다 () = 하다 → 합니다 form\n안녕히 가세요 → formal version: 안녕히 가십시오\n\nFORMATION:\nStem ends in vowel + ㅂ니다: 가다 → 갑니다\nStem ends in consonant + 습니다: 먹다 → 먹습니다\n\nWHEN to use:\n• Job interviews\n• Meeting clients / senior strangers\n• Official broadcasts and announcements\n• Military, airlines, formal ceremonies\n\n⚡ You don't need to produce this yet. Just recognise it."
        ,funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"mc",q:"감사합니다  -  the -ㅂ니다 ending signals:",opts:["해요체","합쇼체 (formal)","반말","A question"],ans:"합쇼체 (formal)",hint:"합니다/ㅂ니다/습니다 = 합쇼체. The formal register."},
        {type:"mc",q:"Meeting a Korean colleague for the first time, you use:",opts:["반말 (casual)","해요체 or 합쇼체","Only 합쇼체","English instead"],ans:"해요체 or 합쇼체",hint:"Both polite registers are appropriate for first meetings"},
        {type:"teach",trg:"합쇼체  -  formation pattern",src:"Verb stem + ㅂ니다 (vowel) / 습니다 (consonant)",pos:"part",gender:null,phonetic:"",note:"\n가다 → 갑니다 (to go → go, formal)\n→ vowel stem: just add the ending\n먹다 → 먹습니다 (consonant stem: add -습니다).\n하다 → 합니다 (to do → do, formal).",example:"A: 어디 갑니까? B: 학교에 갑니다.",exampleSrc:"A: Where are you going? (formal) B: I'm going to school. (formal)",deepDive:{
          title:"Same Engine, Different Car",
          text:"Same stem as 해요체. Just a different 'politeness car':\n🚂 TRAIN: same engine (가, 먹, 하)\n해요체 car: -아/어요\n합쇼체 car: -ㅂ니다/-습니다"
        ,funFact:"Korean particles attach to nouns to show their role in the sentence. The particle, not word order, determines meaning."}},
        {type:"tip",title:"🌱 반말: It Exists. Don't Use It Yet.",deepDive:{
          title:"Why Koreans Sometimes Sound Rude in Dramas",
          text:"Using 반말 with the wrong person signals you think you are above them.\nA full 반말 lesson comes later.\n\nIf you've watched Korean dramas, you've heard 반말 constantly.\nClose friends, couples, family: everyone uses it.\n\nDrama dialogue = 반말 between intimates.\nReal life with strangers = always 해요체 or higher.\n\nKorean learners who learn from dramas often pick up 반말 first.\nThis is a mistake. It causes social discomfort.\n\nThe correct order:\n1. 해요체 (you're here now): master this first\n2. 합쇼체: for formal contexts\n3. 반말: when you have real relationships\n\nMost Korean speakers will correct you kindly.\nBut they'll think more of you if you use 해요체 correctly\nthan if you try 반말 too soon."
        },text:"반말 = casual speech. Just drop the -요.\n해요체: 가요, 먹어요, 있어요\n반말: 가, 먹어, 있어\n\nOnly use with close friends your age or younger.\nNEVER with strangers or elders. Stick to 해요체 for now."},
        {type:"mc",q:"먹다 in 합쇼체 formal present is:",opts:["먹어요","먹습니다","먹요","먹이에요"],ans:"먹습니다",hint:"먹다: consonant stem + 습니다"},
        {type:"mc",q:"가다 in 합쇼체 formal present is:",opts:["가요","갑니다","가습니다","갔어요"],ans:"갑니다",hint:"가다: vowel stem + ㅂ니다"},
        {type:"match",pairs:[{trg:"해요체",src:"safe polite default"},{trg:"합쇼체",src:"formal polite (news, service)"},{trg:"반말",src:"casual (close friends only)"},{trg:"-요",src:"the polite marker"}]},
        {type:"mc",q:"A pilot says '착륙하겠습니다'. This is:",opts:["해요체","합쇼체","반말","Not Korean"],ans:"합쇼체",hint:"-겠습니다 is ... + future mood. Formal register, as expected on a broadcast."},
        {type:"mc",q:"Which register have you been speaking since the very first lesson?",opts:["합쇼체","반말","해요체","모르겠어요 (I don't know)"],ans:"해요체",hint:"Every -요 ending you've used. You've been in it from day one"},
        {type:"tip",title:"✅ Where You Stand Right Now",deepDive:{
          title:"Your Complete Verb Engine So Far",
          text:"🗺️ What the other levels are and when to use them\n\n\nThis is the complete engine of Korean verb formation.\nEvery verb you encounter from here on  -  you can analyse:\n• What's the stem?\n• What vowel does it contain?\n• Which ending does it take?\n• What speech level is this?\n\nYou are no longer memorising chunks.\nYou are generating Korean."
        },text:"You now know:\n\n🚂 How verbs are built (stem + ending)\n⚡ Why -아요 vs -어요 (vowel harmony)\n🎙️ What speech level you're speaking (해요체)"}
  ]},
  {id:"kou3l8",title:"날짜 (Dates)",icon:"📅",xp:20,board:true,steps:[
        {type:"intro",title:"Dates and Birthdays",desc:"년 / 월 / 일\n→ year / month / day\n\nBig to small. All Sino-Korean.",goals:["Say dates in Korean","Ask and answer birthday questions","Decompose 생일 and key date words"]},
        {type:"teach",trg:"년 / 월 / 일",src:"year / month / day",pos:"intj",gender:null,phonetic:"nyeon / wol / il",note:"Dates go big to small: year, then month, then day.\nOpposite order from US English.\n",example:"A: 오늘 몇 월 며칠이에요? B: 삼월 십오일이에요.",exampleSrc:"A: What is today's date? B: It's March 15th.",deepDive:{title:"Using 년 / 월 / 일",text:"년: year\n월: month (same 월 as 월요일/Monday!)\n일: day\n\nAll use SINO-KOREAN numbers.",funFact:"A Konglish loanword adapted from English. Korean has borrowed many modern and tech words."}},
        {type:"teach",trg:"생일",src:"birthday",pos:"noun",gender:null,phonetic:"saeng-il",note:"SINO-KOREAN: 생 (birth/生) + 일 (day/日).\n'Birth-day': same logic as English!\n",example:"A: 생일이 언제예요? B: 칠월 이십일이에요.",exampleSrc:"A: When is your birthday? B: It's July 20th.",deepDive:{title:"Using 생일",text:"생: same as 학생!\n언제: when (time question word)\n\n생일 축하해요!: Happy birthday!",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},hanja:"生+日"},
        {type:"teach",trg:"올해",src:"this year",pos:"noun",gender:null,phonetic:"ol-hae",note:"올해: this year.",example:"A: 올해 뭐 해요? B: 한국어를 공부해요.",exampleSrc:"A: What are you doing this year? B: I'm studying Korean.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"내년",src:"next year",pos:"noun",gender:null,phonetic:"nae-nyeon",note:"내년: next year.\nCOMPOUND: 내 (coming) + 년 (year).",example:"A: 내년에 뭐 해요? B: 한국에 가요.",exampleSrc:"A: What are you doing next year? B: I'm going to Korea.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"teach",trg:"작년",src:"last year",pos:"noun",gender:null,phonetic:"jak-nyeon",note:"작년: last year.\nCOMPOUND: 작 (previous) + 년 (year).",example:"A: 작년에 어디 갔어요? B: 일본에 갔어요.",exampleSrc:"A: Where did you go last year? B: I went to Japan.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"mc",q:"생일 means:",opts:["year","this year","birthday","age"],ans:"birthday",hint:"생 (life/birth) + 일 (day). What day celebrates your birth?"},
        {type:"teach",trg:"축하해요",src:"Congratulations!",pos:"noun",gender:null,phonetic:"chu-ka-hae-yo",note:"축하: congratulations.\n축하해요: 'Congratulations!' / 'Happy [occasion]!'\n",example:"A: 오늘 생일이에요! B: 생일 축하해요!",exampleSrc:"A: Today is my birthday! B: Happy birthday!",deepDive:{title:"Using 축하해요",text:"생일 축하해요: Happy birthday!\n결혼 축하해요: Congratulations on your wedding!\n졸업 축하해요: Congratulations on graduating!",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."}},
        {type:"mc",q:"생일 = 생 + 일. 생 means:",opts:["Sun","Study","Birth/life","Person"],ans:"Birth/life",hint:"생 = birth, same morpheme as 학생 (study-person)"},
        {type:"mc",q:"'July 7th' in Korean:",opts:["칠월 칠일","일곱월 일곱일","칠월 일곱일","일월 칠일"],ans:"칠월 칠일",hint:"Dates use SINO-Korean. 7 = 칠."},
        {type:"mc",q:"Korean date order is:",opts:["Day → Month → Year","Month → Day → Year (American)","Year → Month → Day","Month → Year → Day"],ans:"Year → Month → Day",hint:"Big to small: year first, day last"},
        {type:"mc",q:"내년 = 내 + 년. 년 means:",opts:["Month","Day","Year","Time"],ans:"Year",hint:"년 = year. 내 = next."},
        {type:"fb",opts:["언제","어디","뭐","얼마"],hint:"Time question word: when",s:"생일이 ___예요?\n(When is your birthday?)",a:"언제"},
        {type:"fb",opts:["년","월","일","살"],hint:"Year marker after the number",s:"이천이십오___ 삼월 이십오일.\n(The year 2025)",a:"년"},
        {type:"fb",opts:["축하","감사","안녕","미안"],hint:"Congratulations",s:"생일 ___해요!\n(Happy birthday!)",a:"축하"},
        {type:"match",pairs:[{trg:"년",src:"year"},{trg:"월",src:"month"},{trg:"일",src:"day"},{trg:"생일",src:"birthday (birth+day)"}]},
        {type:"drag_fill",hint:"2002, July 15th  -  a sample birthday",s:"제 생일은 {1}년 {2}월 {3}일이에요.",blanks:{"1":"이천이","2":"칠","3":"십오"},pool:["이천이","이천삼","칠","팔","십오","이십"]},
        {type:"mc",q:"'생일 축하해요' is used for:",opts:["Any celebration","Only for adults","Any birthday","Only for children"],ans:"Any birthday",hint:"생일 축하해요 = Happy birthday (any age)"}
  ]},
  {id:"kou3l8b",title:"일월-십이월 (Months)",icon:"📅",xp:20,board:true,steps:[
        {type:"intro",title:"12 Months in Korean",desc:"일월 → January\n\nAll months = Sino-Korean number + 월.\nYou already know the numbers. Now add 월!",goals:["Name all 12 months","Use months in date sentences","Know the irregular pronunciations"]},
        {type:"tip",title:"The Simplest System",deepDive:{
          title:"Why This Is Easy",
          text:"Unlike English (January, February... all different words), Korean months are pure math.\n일(1) + 월(month) = January.\nNo memorization needed beyond the numbers you already know."
        },text:"Korean months = Sino-Korean number + 월 (month).\n\n1월 = 일월 = January\n2월 = 이월 = February\n...\n12월 = 십이월 = December\n\nYou already know 일 through 십이. Just add 월!"},
        {type:"teach",trg:"일월",src:"January",pos:"noun",gender:null,phonetic:"il-wol",note:"일(1) + 월(month) = January.\n새해: New Year.",example:"A: 일월에 뭐 해요? B: 새해 계획을 세워요.",exampleSrc:"A: What do you do in January? B: I make New Year plans.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"이월",src:"February",pos:"noun",gender:null,phonetic:"i-wol",note:"이(2) + 월(month) = February.",example:"A: 이월은 며칠까지 있어요? B: 보통 이십팔일이에요.",exampleSrc:"A: How many days does February have? B: Usually 28 days.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"삼월",src:"March",pos:"noun",gender:null,phonetic:"sam-wol",note:"삼(3) + 월(month) = March.",example:"A: 삼월에 벚꽃이 펴요? B: 네, 삼월 말에 펴요.",exampleSrc:"A: Do cherry blossoms bloom in March? B: Yes, they bloom in late March.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"사월",src:"April",pos:"noun",gender:null,phonetic:"sa-wol",note:"사(4) + 월(month) = April.",example:"A: 사월에 날씨가 어때요? B: 따뜻해요.",exampleSrc:"A: How is the weather in April? B: It's warm.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"오월",src:"May",pos:"noun",gender:null,phonetic:"o-wol",note:"오(5) + 월(month) = May.\n어린이날: Children's Day (May 5th).",example:"A: 오월에 무슨 날이 있어요? B: 어린이날이 있어요.",exampleSrc:"A: What holiday is in May? B: Children's Day.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"mc",q:"삼월은 몇 번째 달이에요?\n(March is which month?)",opts:["1st month","2nd month","3rd month","4th month"],ans:"3rd month",hint:"삼 = 3. 삼월 = 3rd month"},
        {type:"teach",trg:"유월",src:"June",pos:"noun",gender:null,phonetic:"yu-wol",note:"IRREGULAR: 육월 → 유월 (the ㄱ drops!).\n장마: rainy season (monsoon).",example:"A: 유월에 뭐 해요? B: 장마가 시작돼요.",exampleSrc:"A: What happens in June? B: The rainy season starts.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"칠월",src:"July",pos:"noun",gender:null,phonetic:"chil-wol",note:"칠(7) + 월(month) = July.",example:"A: 칠월에 날씨가 어때요? B: 아주 더워요.",exampleSrc:"A: How is the weather in July? B: It's very hot.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"팔월",src:"August",pos:"noun",gender:null,phonetic:"pal-wol",note:"팔(8) + 월(month) = August.\n여름 휴가: summer vacation.",example:"A: 팔월에 뭐 해요? B: 여름 휴가를 가요.",exampleSrc:"A: What do you do in August? B: I go on summer vacation.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"mc",q:"유월 is irregular because:",opts:["육 changes to 유 before 월","오 changes to 유","칠 drops a letter","It uses native Korean"],ans:"육 changes to 유 before 월",hint:"육월 sounds awkward. The ㄱ drops: 유월."},
        {type:"teach",trg:"구월",src:"September",pos:"noun",gender:null,phonetic:"gu-wol",note:"구(9) + 월(month) = September.",example:"A: 구월에 학교가 시작해요? B: 네, 이 학기에요.",exampleSrc:"A: Does school start in September? B: Yes, this semester.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"시월",src:"October",pos:"noun",gender:null,phonetic:"si-wol",note:"IRREGULAR: 십월 → 시월 (the ㅂ drops!).\n단풍: autumn leaves.",example:"A: 시월에 뭐 하고 싶어요? B: 단풍을 보고 싶어요.",exampleSrc:"A: What do you want to do in October? B: I want to see the autumn leaves.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"teach",trg:"십일월",src:"November",pos:"intj",gender:null,phonetic:"sib-il-wol",note:"십일(11) + 월(month) = November.\n수능: Korean SAT (CSAT).",example:"A: 수능이 언제예요? B: 십일월이에요.",exampleSrc:"A: When is the college entrance exam? B: It's in November.",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."},
        {type:"teach",trg:"십이월",src:"December",pos:"noun",gender:null,phonetic:"sib-i-wol",note:"십이(12) + 월(month) = December.",example:"A: 십이월에 뭐 해요? B: 크리스마스를 즐겨요.",exampleSrc:"A: What do you do in December? B: I enjoy Christmas.",funFact:"Korean nouns don't have articles or plural markers. Context tells you if it's one or many."},
        {type:"mc",q:"시월 is irregular because:",opts:["십 changes to 시 before 월","The ㅂ in 십 drops","It uses a different number","It's a native Korean word"],ans:"The ㅂ in 십 drops",hint:"십월 → 시월. The ㅂ disappears for easier pronunciation."},
        {type:"mc",q:"Korean has two irregular months. They are:",opts:["유월 and 시월","일월 and 이월","오월 and 구월","칠월 and 팔월"],ans:"유월 and 시월",hint:"6월 and 10월 have pronunciation changes"},
        {type:"fb",opts:["삼월","사월","오월","이월"],hint:"March = 3rd month",s:"벚꽃은 ___에 펴요.\n(Cherry blossoms bloom in March.)",a:"삼월"},
        {type:"fb",opts:["팔월","칠월","유월","구월"],hint:"August = 8th month",s:"여름 휴가는 보통 ___에 가요.\n(Summer vacation is usually in August.)",a:"팔월"},
        {type:"match",pairs:[{trg:"일월",src:"January"},{trg:"삼월",src:"March"},{trg:"유월",src:"June"},{trg:"시월",src:"October"}]},
        {type:"match",pairs:[{trg:"사월",src:"April"},{trg:"칠월",src:"July"},{trg:"십일월",src:"November"},{trg:"십이월",src:"December"}]},
        {type:"drag_fill",hint:"My birthday is August 15th",s:"제 생일은 {1} {2}일이에요.",blanks:{"1":"팔월","2":"십오"},pool:["팔월","칠월","십오","이십"]},
        {type:"mc",q:"수능 is in which month?",opts:["시월 (October)","십일월 (November)","십이월 (December)","구월 (September)"],ans:"십일월 (November)",hint:"Korea's college entrance exam is in November"}
  ]},
  {id:"kou3l9",title:"요일 (Days of the Week)",icon:"📆",xp:20,board:true,steps:[
        {type:"intro",title:"Monday Through Sunday",desc:"월요일\n→ Monday\n\nEvery day = element (e.g. 화 fire) + 요일.",goals:["Name all 7 days","Decompose each day name","Ask and say what day it is"]},
        {type:"teach",trg:"월요일",src:"Monday",pos:"noun",gender:null,phonetic:"wol-yo-il",note:"COMPOUND: 월(moon/月) + 요(day-of) + 일(day).\n'Moon-day' = Monday.\n",example:"A: 월요일에 뭐 해요? B: 학교에 가요.",exampleSrc:"A: What do you do on Monday? B: I go to school.",deepDive:{title:"월요일 in Korean Culture",text:"월: same as 월(month)!\nMonday in Korean = Moon-day. Same as English!",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"teach",trg:"화요일",src:"Tuesday",pos:"noun",gender:null,phonetic:"hwa-yo-il",note:"COMPOUND: 화(fire/火) + 요(day-of) + 일(day).\n'Fire-day' = Tuesday.",example:"A: 화요일에 수업이 있어요? B: 네, 한국어 수업이 있어요.",exampleSrc:"A: Do you have class on Tuesday? B: Yes, I have Korean class.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"teach",trg:"수요일",src:"Wednesday",pos:"noun",gender:null,phonetic:"su-yo-il",note:"COMPOUND: 수(water/水) + 요(day-of) + 일(day).\n'Water-day' = Wednesday.",example:"A: 수요일에 뭐 해요? B: 운동해요.",exampleSrc:"A: What do you do on Wednesday? B: I exercise.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"mc",q:"화요일 = 화 + 요일. 화 means:",opts:["Water","Moon","Fire","Wood"],ans:"Fire",hint:"화 (火) = fire. Fire-day = Tuesday."},
        {type:"teach",trg:"목요일",src:"Thursday",pos:"noun",gender:null,phonetic:"mok-yo-il",note:"COMPOUND: 목(wood/木) + 요(day-of) + 일(day).\n'Wood-day' = Thursday.",example:"A: 목요일에 뭐 해요? B: 친구를 만나요.",exampleSrc:"A: What do you do on Thursday? B: I meet a friend.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"teach",trg:"금요일",src:"Friday",pos:"noun",gender:null,phonetic:"geum-yo-il",note:"COMPOUND: 금(gold/金) + 요(day-of) + 일(day).\n'Gold-day' = Friday.",example:"A: 무슨 요일을 좋아해요? B: 금요일을 좋아해요!",exampleSrc:"A: What day do you like? B: I like Friday!",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"teach",trg:"토요일",src:"Saturday",pos:"noun",gender:null,phonetic:"to-yo-il",note:"COMPOUND: 토(earth/土) + 요(day-of) + 일(day).\n'Earth-day' = Saturday.",example:"A: 토요일에 뭐 해요? B: 쉬어요.",exampleSrc:"A: What do you do on Saturday? B: I rest.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"mc",q:"금요일 means:",opts:["Monday","Thursday","Friday","Sunday"],ans:"Friday",hint:"금 = gold. Gold-day = Friday."},
        {type:"teach",trg:"일요일",src:"Sunday",pos:"noun",gender:null,phonetic:"il-yo-il",note:"COMPOUND: 일(sun/日) + 요(day-of) + 일(day).\n'Sun-day' = Sunday.",example:"A: 일요일에 뭐 해요? B: 집에 있어요.",exampleSrc:"A: What do you do on Sunday? B: I stay home.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."},
        {type:"teach",trg:"무슨 요일이에요?",src:"What day is it?",pos:"intj",gender:null,phonetic:"mu-seun yo-il-i-e-yo?",note:"무슨: what kind of / which.\n무슨 요일이에요?: 'What day (of the week) is it?'\n",example:"A: 오늘 무슨 요일이에요? B: 월요일이에요.",exampleSrc:"A: What day is it today? B: It's Monday.",deepDive:{title:"Using 무슨 요일이에요?",text:"오늘: today\n내일: tomorrow\n어제: yesterday\n\n오늘 무슨 요일이에요? is the natural question.",funFact:"Korean has rich exclamations that express subtle emotions. Tone and context determine the exact feeling."}},
        {type:"mc",q:"월요일 = 월 + 요일. 월 means:",opts:["Sun","Fire","Moon","Water"],ans:"Moon",hint:"월 = moon AND month. Monday = Moon-day."},
        {type:"mc",q:"Which day is 수요일?",opts:["Monday","Tuesday","Wednesday","Thursday"],ans:"Wednesday",hint:"수 = water. Water-day"},
        {type:"mc",q:"금요일 = 금 + 요일. 금 means:",opts:["Earth","Gold","Wood","Fire"],ans:"Gold",hint:"금 = gold. Gold-day = Friday."},
        {type:"mc",q:"Which Korean day name matches 'Sun-day' in English?",opts:["월요일","화요일","토요일","일요일"],ans:"일요일",hint:"일 = sun/日. Sunday = Sun-day"},
        {type:"fb",opts:["일","요","날","한"],hint:"The last day: 일요일 (Sun-day)",s:"월, 화, 수, 목, 금, 토, ___ (complete the week)",a:"일"},
        {type:"fb",opts:["무슨","어떤","몇","어느"],hint:"... = 'what kind of / which'",s:"오늘 ___요일이에요?\n(What day is it?)",a:"무슨"},
        {type:"fb",opts:["월","화","수","목"],hint:"Monday = 월요일",s:"___요일에 학교에 가요.\n(I go to school on Monday)",a:"월"},
        {type:"match",pairs:[{trg:"월요일",src:"Monday (moon)"},{trg:"화요일",src:"Tuesday (fire)"},{trg:"수요일",src:"Wednesday (water)"},{trg:"목요일",src:"Thursday (wood)"}]},
        {type:"match",pairs:[{trg:"금요일",src:"Friday (gold)"},{trg:"토요일",src:"Saturday (earth)"},{trg:"일요일",src:"Sunday (sun)"},{trg:"무슨 요일?",src:"What day is it?"}]},
        {type:"drag_fill",hint:"Today is Wednesday, tomorrow is Thursday",s:"오늘은 {1}이에요. 내일은 {2}이에요.",blanks:{"1":"수요일","2":"목요일"},pool:["수요일","목요일","월요일","금요일"]},
        {type:"mc",q:"The five elements in Korean days come from:",opts:["Japanese mythology","Chinese philosophical elements","Korean shamanism only","English weekday names directly"],ans:"Chinese philosophical elements",hint:"Wood(목), fire(화), earth(토), gold(금), water(수)"}
  ]},
  {id:"kou3l10",title:"Review & Quiz",icon:"📝",xp:30,board:true,steps:[
        {type:"intro",title:"Review & Quiz",desc:"Review: numbers, counters, time, dates, days, money, SOV.",goals:["Verify both number systems","Test counters and time-telling","Confirm SOV understanding"]},
        {type:"teach",trg:"Review Summary",src:"What you now know",pos:"num",gender:null,phonetic:"",note:"Two number systems, each with its own job.\nCounters learned: things, people, cups, animals, and more.\nTime: native Korean for hours, Sino-Korean for minutes.",example:"A: 지금 몇 시예요? B: 세 시 반이에요.",exampleSrc:"A: What time is it now? B: It's 3:30.",deepDive:{title:"Using Review Summary",text:"DATES: Sino-Korean, big→small.\nSOV: verb ALWAYS last.",funFact:"Korean builds words by combining meaning blocks. Understanding the parts unlocks entire word families."}},
        {type:"mc",q:"십오 in numbers:",opts:["5","10","15","50"],ans:"15",hint:"십(10) + 오(5)"},
        {type:"mc",q:"'3 cups of coffee':",opts:["커피 삼 잔","커피 세 잔","세 커피 잔","커피 셋 잔"],ans:"커피 세 잔",hint:"Drinks counter 잔, native number 셋→세"},
        {type:"mc",q:"Korean word order is:",opts:["SVO (like English)","SOV (verb last)","VSO","Free, no rules"],ans:"SOV (verb last)",hint:"Subject Object Verb  -  verb at the end, always"},
        {type:"mc",q:"오전 = 오 + 전. It means:",opts:["5 o'clock","Afternoon / PM","Before noon / AM","After 5"],ans:"Before noon / AM",hint:"오(noon) + 전(before) = AM"},
        {type:"mc",q:"학생 has 생 meaning person/life. In 생일, 생 means:",opts:["Study","Day","Birth","Student"],ans:"Birth",hint:"생 = birth/life. 일 = day. 생일 = birthday."},
        {type:"mc",q:"Hours use ___; minutes use ___.",opts:["Sino; Native","Native; Sino","Both Sino","Both Native"],ans:"Native; Sino",hint:"세 시(native) 삼십 분(Sino) = 3:30"},
        {type:"mc",q:"수요일 = 수 + 요일. 수 means:",opts:["Moon","Fire","Water","Gold"],ans:"Water",hint:"수 = water. Water-day = Wednesday."},
        {type:"mc",q:"Which correctly says '2 people'?",opts:["둘 명","이 명","두 명","이분"],ans:"두 명",hint:"둘 → 두 before counter 명"},
        {type:"fb",opts:["읽어요","책을","저는","도서관"],hint:"SOV: verb goes at the end",s:"저는 책을 ___.\n(I read books  -  verb last)",a:"읽어요"},
        {type:"fb",opts:["50,000","5,000","500,000","5,000,000"],hint:"오(5) × 만(10,000)",s:"오만 원은 ___원이에요. (50,000 won = ___ won in digits)",a:"50,000"},
        {type:"match",pairs:[{trg:"일",src:"1 (sino)"},{trg:"하나",src:"1 (native)"},{trg:"십",src:"10 (sino)"},{trg:"열",src:"10 (native)"}]},
        {type:"match",pairs:[{trg:"개",src:"general objects"},{trg:"명",src:"people"},{trg:"잔",src:"cups/drinks"},{trg:"마리",src:"animals"}]},
        {type:"drag_fill",hint:"SOV: eating lunch at school  -  verb last",s:"{1}에 {2}을 {3}.",blanks:{"1":"학교에서","2":"점심","3":"먹어요"},pool:["학교에서","점심","먹어요","저는","오늘"]},
        {type:"mc",q:"Dates use which number system?",opts:["Native Korean","Sino-Korean","Both mixed","Either one"],ans:"Sino-Korean",hint:"삼월 십오일 (March 15th)  -  all ..."}
  ]}
]};
