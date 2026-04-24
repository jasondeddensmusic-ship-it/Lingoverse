// Korean V2 Unit 11, 여행 가요!
// Level: B1.1

const UNIT_11 =
{n:11,lang:"ko",srcLang:"en",track:"v2",title:"여행 가요!",sub:"Travel, Progressive & Experiential",icon:"🧳",level:"B1.1",color:"#6C5CE7",lessons:[

// ═══ L1: 여행 준비 (Trip Prep) ═══
{id:"kou11l1",title:"여행 준비",icon:"✈️",xp:22,board:true,steps:[
  {type:"intro",title:"Getting Ready to Travel",desc:"여행\n→ travel / trip\n\nPack your bags. Korea awaits.",goals:["Learn essential travel vocabulary","Know transportation words","Use 예약하다 (to reserve)","Cultural context: Korean domestic travel"]},
  {type:"teach",kind:"word",nl:"여행",en:"travel / trip",pos:"noun",gender:null,funFact:"From hanja: 旅 (travel) + 行 (go). Travel go = trip.",phonetic:"yeo-haeng",example:"여행을 좋아해요.",exampleEn:"I like traveling.",note:"여행 (旅行): travel / trip.\nCOMPOUND: 여 (travel) + 행 (go).",deepDive:{title:"Types of 여행",text:"해외여행: overseas travel.\n국내여행: domestic travel.\n배낭여행: backpacking.\n신혼여행: honeymoon."}},
  {type:"teach",kind:"word",nl:"여행하다",en:"to travel",pos:"verb",gender:null,funFact:"From hanja: 女 (woman) + 幸 (fortunate) + 下 (below/under) + 多 (many).",example:"A: 주말에 뭐 했어요? B: 부산에서 여행했어요. A: 재미있었어요? B: 네, 해운대에 갔는데 바다가 정말 예뻤어요. A: 저도 부산에 가고 싶어요!",exampleEn:"A: What did you do on the weekend? B: I traveled in Busan. A: Was it fun? B: Yes, I went to Haeundae and the sea was really pretty. A: I want to go to Busan too!",note:"여행하다: to travel.\n여행 + 하다 = noun + do."},
  {type:"teach",kind:"word",nl:"숙소",en:"accommodation / lodging",pos:"noun",gender:null,funFact:"Sino-Korean compound: 숙 (stay/lodge) + 소 (place)",phonetic:"suk-so",example:"숙소를 예약했어요.",exampleEn:"I booked accommodation.",note:"숙소 (宿所): accommodation.\nCOMPOUND: 숙 (stay/lodge) + 소 (place).\nBroader than 호텔: includes 게스트하우스, 민박, 에어비앤비."},
  {type:"teach",kind:"word",nl:"예약하다",en:"to reserve / book",pos:"verb",gender:null,funFact:"Sino-Korean compound: 예 (beforehand) + 약 (promise)",phonetic:"ye-yak-ha-da",example:"비행기표를 예약했어요.",exampleEn:"I booked a plane ticket.",note:"예약 (豫約): reservation.\nCOMPOUND: 예 (beforehand) + 약 (promise).",deepDive:{title:"Using 예약하다",text:"호텔을 예약하다: book a hotel.\n식당을 예약하다: reserve a restaurant.\n예약 취소: cancel a reservation.\n\n인터넷으로 예약했어요.\n= I booked online."}},
  {type:"teach",kind:"word",nl:"비행기",en:"airplane",pos:"noun",gender:null,funFact:"From hanja: 飛 (fly) + 行 (go) + 機 (machine). Flying-going machine = airplane.",phonetic:"bi-haeng-gi",example:"비행기로 제주도에 가요.",exampleEn:"I go to Jeju by airplane.",note:"비행기 (飛行機): airplane.\nCOMPOUND: 비 (fly) + 행 (go) + 기 (machine).",deepDive:{title:"Travel Transport Words",text:"비행기: airplane.\n기차: train.\n버스: bus.\n택시: taxi.\n배: ship/boat.\n\n비행기표: plane ticket.\n탑승권: boarding pass."}},
  {type:"teach",kind:"word",nl:"여권",en:"passport",pos:"noun",gender:null,funFact:"Sino-Korean compound: 여 (travel) + 권 (ticket/certificate)",phonetic:"yeo-gwon",example:"여권을 가져왔어요?",exampleEn:"Did you bring your passport?",note:"여권 (旅券): passport.\nCOMPOUND: 여 (travel) + 권 (ticket/certificate)."},
  {type:"teach",kind:"word",nl:"짐",en:"luggage / baggage",pos:"noun",gender:null,funFact:"Korean nouns don't have plural forms or articles. Context and particles do the job.",example:"A: 짐 다 쌌어요? B: 아직이요. 옷을 더 넣어야 해요. A: 빨리 싸세요. 비행기 시간이 얼마 안 남았어요. B: 알겠어요! 지금 싸고 있어요.",exampleEn:"A: Did you finish packing? B: Not yet. I need to put in more clothes. A: Pack quickly. There's not much time before the flight. B: Got it! I'm packing right now.",note:"짐: luggage, baggage, things to carry.\n짐을 싸다: to pack.\n짐을 풀다: to unpack."},
  {type:"mc",q:"여행 = 여 + 행. 행 means:",opts:["Go","Travel","Fly","Stay"],ans:"Go",hint:"행 (行) = go/business. 여행 = travel + go = a trip."},
  {type:"mc",q:"예약하다 means:",opts:["To cancel","To reserve","To pack","To arrive"],ans:"To reserve",hint:"예 (beforehand) + 약 (promise) = reservation. 예약하다 = to …."},
  {type:"mc",q:"비행기 = 비 + 행 + 기. 비 means:",opts:["Fast","Big","Fly","High"],ans:"Fly",hint:"비 (飛) = …. 비행기 = … + go + machine = airplane."},
  {type:"fb",s:"호텔을 ___했어요.\n(I booked a hotel.)",a:"예약",opts:["예약","여행","출발","도착"],hint:"You made a reservation. Which word means 'to book'?"},
  {type:"fb",s:"___을 싸야 해요.\n(I need to pack luggage.)",a:"짐",opts:["짐","여권","표","돈"],hint:"The word for luggage/baggage. 싸다 = to pack."},
  {type:"match",pairs:[{nl:"여행",en:"travel/trip"},{nl:"예약",en:"reservation"},{nl:"비행기",en:"airplane"},{nl:"여권",en:"passport"}]},
  {type:"teach",kind:"word",nl:"출발",en:"departure",pos:"noun",gender:null,funFact:"Sino-Korean compound: 출 (exit) + 발 (start/release)",phonetic:"chul-bal",example:"출발 시간이 몇 시예요?",exampleEn:"What time is the departure?",note:"출발 (出發): departure.\nCOMPOUND: 출 (exit) + 발 (start/release)."},
  {type:"teach",kind:"word",nl:"도착",en:"arrival",pos:"noun",gender:null,funFact:"Sino-Korean compound: 도 (reach) + 착 (attach/arrive)",phonetic:"do-chak",example:"도착했어요!",exampleEn:"I arrived!",note:"도착 (到着): arrival.\nCOMPOUND: 도 (reach) + 착 (attach/arrive)."},
  {type:"mc",q:"출발 is the opposite of:",opts:["여행","비행기","예약","도착"],ans:"도착",hint:"출발 = departure. The opposite is arrival."},
  {type:"fb",s:"___시간이 몇 시예요?\n(What time is the departure?)",a:"출발",opts:["출발","도착","예약","비행기"],hint:"출 (exit) + 발 (start) = departure."},
  {type:"match",pairs:[{nl:"출발",en:"departure"},{nl:"도착",en:"arrival"},{nl:"짐",en:"luggage"},{nl:"숙소",en:"accommodation"}]},
  {type:"drag_fill",s:"비행기표를 {1}하고 {2}을 쌌어요. {3} 시간은 10시예요.\n(I ___ the plane ticket and packed ___. ___ time is 10:00.)",blanks:{"1":"예약","2":"짐","3":"출발"},pool:["예약","여행","짐","돈","출발","도착"],hint:"Think: reserve, baggage, and leaving."},
  {type:"mc",q:"인터넷으로 호텔을 예약했어요 means:",opts:["I booked the hotel online","I canceled the hotel online","I found the hotel online","I reviewed the hotel online"],ans:"I booked the hotel online",hint:"인터넷으로 = via internet. 예약하다 = to reserve/book."},
]},

// ═══ L2: KTX와 교통 ═══
{id:"kou11l2",title:"KTX와 교통",icon:"🚄",xp:22,board:true,steps:[
  {type:"intro",title:"KTX and Transportation",desc:"KTX\n→ Korea Train Express\n\nKorea's bullet train.",goals:["Learn KTX and train vocabulary","Know transport-related words","Use -로 for transport method","Cultural context: Korean train travel"]},
  {type:"teach",kind:"word",nl:"기차",en:"train",pos:"noun",gender:null,funFact:"From hanja: 汽 (steam) + 車 (vehicle). Steam vehicle = train.",phonetic:"gi-cha",example:"기차로 부산에 가요.",exampleEn:"I go to Busan by train.",note:"기차 (汽車): train.\nCOMPOUND: 기 (steam) + 차 (vehicle)."},
  {type:"teach",kind:"word",nl:"기차역",en:"train station",pos:"noun",gender:null,funFact:"Sino-Korean compound: 기차 (train) + 역 (station)",phonetic:"gi-cha-yeok",example:"기차역이 어디에 있어요?",exampleEn:"Where is the train station?",note:"기차역: train station.\nCOMPOUND: 기차 (train) + 역 (station).\n역 (驛) appears in 서울역, 부산역."},
  {type:"teach",kind:"word",nl:"표",en:"ticket",pos:"noun",gender:null,funFact:"Korean nouns don't have plural forms or articles. Context and particles do the job.",example:"A: 부산까지 표 두 장 주세요. B: KTX요? 무궁화호요? A: KTX로 주세요. 얼마예요? B: 한 장에 5만 9천 원이에요. A: 카드로 결제할게요.",exampleEn:"A: Two tickets to Busan, please. B: KTX or Mugunghwa? A: KTX, please. How much is it? B: 59,000 won per ticket. A: I'll pay by card.",note:"표 (票): ticket.\n기차표: train ticket.\n비행기표: plane ticket."},
  {type:"teach",kind:"word",nl:"좌석",en:"seat",pos:"noun",gender:null,funFact:"Sino-Korean compound: 좌 (sit) + 석 (place)",phonetic:"jwa-seok",example:"좌석 번호가 뭐예요?",exampleEn:"What is the seat number?",note:"좌석 (座席): seat.\nCOMPOUND: 좌 (sit) + 석 (place).\n창가 좌석: window seat.\n통로 좌석: aisle seat."},
  {type:"tip",title:"🚄 KTX: Korea's Bullet Train",text:"KTX = Korea Train Express.\nSeoul to Busan: 2.5 hours (300km/h).\nSeoul to Gwangju: 2 hours.\n\nBook at korail.com or use the Korail Talk app.",deepDive:{title:"Korean Train System",text:"KTX: fastest, most expensive.\nITX-새마을: semi-express.\n무궁화호: local (cheapest, slowest).\n\nKey stations:\n서울역: Seoul Station.\n부산역: Busan Station.\n대전역: Daejeon Station.\n\n서울역에서 부산역까지 KTX로 2시간 반이에요.\n= Seoul to Busan by KTX is 2.5 hours."}},
  {type:"mc",q:"기차역 = 기차 + 역. 역 means:",opts:["Station","Train","Road","City"],ans:"Station",hint:"역 (驛) = …. 서울역, 부산역, 기차역."},
  {type:"mc",q:"KTX takes how long from Seoul to Busan?",opts:["30 minutes","2.5 hours","1 hour","5 hours"],ans:"2.5 hours",hint:"KTX travels at 300km/h. Seoul to Busan is about 400km."},
  {type:"teach",kind:"grammar",nl:"-로/-으로 (교통수단)",en:"by (transport method)",pos:"part",gender:null,funFact:"By (transport). -로 after vowel-ending nouns (버스로 = by bus), -으로 after consonants (지하철로 = by subway). Same particle for 'by means of' throughout Korean.",example:"A: 부산에 뭐로 가요? B: KTX로 가요. 비행기는 너무 비싸요. A: 서울역에서 출발해요? B: 네, 서울역에서 출발해요. 2시간 반 걸려요. A: 빠르네요!",exampleEn:"A: How are you getting to Busan? B: I'm going by KTX. Planes are too expensive. A: Do you depart from Seoul Station? B: Yes, I depart from Seoul Station. It takes 2.5 hours. A: That's fast!",note:"-로/-으로: by (means of transport).\n\nAfter vowel or ㄹ: -로 (비행기로).\nAfter consonant: -으로 (버스으로 → 버스로).",deepDive:{title:"Transport + -로 Examples",text:"비행기로: by plane.\n기차로: by train.\n버스로: by bus.\n택시로: by taxi.\n지하철로: by subway.\n\n뭐로 가요? = How are you getting there?\n(literally: by what are you going?)"}},
  {type:"teach",kind:"word",nl:"지하철",en:"subway",pos:"noun",gender:null,funFact:"From hanja: 地 (earth) + 下 (under) + 鐵 (iron). Underground iron = subway.",phonetic:"ji-ha-cheol",example:"지하철로 강남에 가요.",exampleEn:"I go to Gangnam by subway.",note:"지하철 (地下鐵): subway.\nCOMPOUND: 지하 (underground) + 철 (iron/rail)."},
  {type:"mc",q:"뭐로 가요? means:",opts:["Where are you going?","When are you leaving?","How are you getting there?","Who are you going with?"],ans:"How are you getting there?",hint:"-로 = by (method). 뭐로 = by what method."},
  {type:"fb",s:"___로 부산에 가요.\n(I go to Busan by train.)",a:"기차",opts:["기차","비행기","택시","버스"],hint:"Korea's rail system. A vehicle that runs on tracks."},
  {type:"fb",s:"기차___를 샀어요.\n(I bought a train ticket.)",a:"표",opts:["표","역","좌석","시간"],hint:"The single-syllable Sino-Korean word (票) for a ticket."},
  {type:"match",pairs:[{nl:"기차",en:"train"},{nl:"지하철",en:"subway"},{nl:"좌석",en:"seat"},{nl:"표",en:"ticket"}]},
  {type:"teach",kind:"word",nl:"환승",en:"transfer (trains/subway)",pos:"noun",gender:null,funFact:"Sino-Korean compound: 환 (change) + 승 (ride)",phonetic:"hwan-seung",example:"2호선에서 환승하세요.",exampleEn:"Please transfer at Line 2.",note:"환승 (換乘): transfer.\nCOMPOUND: 환 (change) + 승 (ride)."},
  {type:"mc",q:"지하철 = 지하 + 철. 지하 means:",opts:["City","Train","Fast","Underground"],ans:"Underground",hint:"지하 (地下) = …. 철 (鐵) = iron/rail."},
  {type:"fb",s:"2호선에서 ___하세요.\n(Transfer at Line 2.)",a:"환승",opts:["환승","출발","도착","예약"],hint:"환 (change) + 승 (ride) = transfer."},
  {type:"drag_fill",s:"{1}로 서울에서 부산까지 가요. {2}에서 {3}를 샀어요.\n(I go from Seoul to Busan by ___. I bought a ___ at the ___.)",blanks:{"1":"KTX","2":"기차역","3":"표"},pool:["KTX","비행기","기차역","공항","표","짐"],hint:"Think: bullet train, station, and what you buy there."},
  {type:"mc",q:"창가 좌석 means:",opts:["Window seat","Aisle seat","First class seat","Standing ticket"],ans:"Window seat",hint:"창가 = by the …. 좌석 = …. … …."},

{type:"mc",q:"KTX로 부산에 가고 있는데 경치가 정말 좋아요.\n(I am going to Busan by KTX and the scenery is really beautiful.)",opts:["-로 + -게 되다 + -지만","-로 + -고 있다 + -는데","-으로 + -아/어 보다 + -네요","-로 + -고 있다 + -거든요"],ans:"-로 + -고 있다 + -는데",hint:"This sentence uses three grammar forms: method, ongoing action, and background."},
]},

// ═══ L3: -아/어 봤어요 (Experiential) ═══
{id:"kou11l3",title:"-아/어 봤어요",icon:"🌏",xp:24,board:true,steps:[
  {type:"intro",title:"Have You Ever...?",desc:"-아/어 봤어요\n→ have tried / have experienced\n\nThe experiential past.",goals:["Use -아/어 봤어요 for life experiences","Ask and answer 'have you ever' questions","Distinguish from simple past tense","Build natural conversation about travel"]},
  {type:"tip",title:"🌏 Experience vs Simple Past",text:"You already know -아/어 보다 (try doing) from A2.\n\n-아/어 봤어요 adds PAST:\n= have tried / have experienced.\n\n먹어 봤어요: have tried eating.\n가 봤어요: have been to.",deepDive:{title:"Simple Past vs Experiential Past",text:"갔어요 = I went (simple fact, specific time).\n가 봤어요 = I have been (life experience, any time).\n\n김치를 먹었어요 = I ate kimchi (yesterday, last week).\n김치를 먹어 봤어요 = I have tried kimchi (ever in my life).\n\nThe difference: -았/었어요 = specific event.\n-아/어 봤어요 = general experience."}},
  {type:"teach",kind:"grammar",nl:"-아/어 봤어요",en:"have tried / have experienced",pos:"verb",gender:null,funFact:"The polite informal ending. Used in ~80% of daily Korean conversation. Safe with almost everyone.",example:"A: 한국에 가 봤어요? B: 네, 작년에 가 봤어요. 서울이 정말 좋았어요. A: 한국 음식도 먹어 봤어요? B: 네, 김치찌개를 먹어 봤는데 정말 맛있었어요. A: 다음에 불고기도 먹어 보세요!",exampleEn:"A: Have you been to Korea? B: Yes, I went last year. Seoul was really great. A: Did you also try Korean food? B: Yes, I tried kimchi jjigae and it was really delicious. A: Next time try bulgogi too!",note:"-아/어 봤어요: experiential past.\n\nVerb stem + 아/어 보다 (try) + past = have tried.",deepDive:{title:"Conjugation Pattern",text:"Same vowel harmony as always:\n\nBright (ㅏ,ㅗ): -아 봤어요\n가다 → 가 봤어요 (have been)\n\nDark (others): -어 봤어요\n먹다 → 먹어 봤어요 (have tried eating)\n\n하다 → 해 봤어요 (have tried doing)"}},
  {type:"mc",q:"한국에 가 봤어요? means:",opts:["Have you been to Korea?","Did you go to Korea yesterday?","Are you going to Korea?","Do you want to go to Korea?"],ans:"Have you been to Korea?",hint:"-아/어 봤어요 = have experienced. Life experience question."},
  {type:"teach",kind:"phrase",nl:"네, 가 봤어요 / 아니요, 안 가 봤어요",en:"Yes, I have / No, I haven't",pos:"intj",gender:null,funFact:"Positive: 가 봤어요 (have been).",example:"A: 제주도에 가 봤어요? B: 네, 작년에 가 봤어요.",exampleEn:"A: Have you been to Jeju? B: Yes, I went last year.",note:"Positive: 가 봤어요 (have been).\nNegative: 안 가 봤어요 (haven't been).\n\nOr: 못 가 봤어요 (haven't been able to)."},
  {type:"mc",q:"김치를 먹어 봤어요 is different from 김치를 먹었어요 because:",opts:["It means the future","It asks about life experience, not a specific time","It is more formal","It means you didn't like it"],ans:"It asks about life experience, not a specific time",hint:"-어 봐요 = experiential: did you EVER? -었어요 = simple past: did you (then)?"},
  {type:"fb",s:"한국 음식을 먹___봤어요?\n(Have you tried Korean food?)",a:"어",opts:["어","아","해","여"],hint:"먹다 has a dark vowel. Which connector follows dark vowels?"},
  {type:"fb",s:"서울에 ___봤어요?\n(Have you been to Seoul?)",a:"가",opts:["가","갈","갔","간"],hint:"가다 has a bright vowel. What is the stem that attaches to 봤어요?"},
  {type:"teach",kind:"phrase",nl:"해 봤어요",en:"have tried doing",pos:"intj",gender:null,funFact:"All 하다 verbs follow this:.",example:"A: 스키를 해 봤어요? B: 아니요, 안 해 봤어요.",exampleEn:"A: Have you tried skiing? B: No, I haven't.",note:"하다 → 해 봤어요.\n\nAll 하다 verbs follow this:\n운동해 봤어요: have tried exercising.\n요리해 봤어요: have tried cooking."},
  {type:"mc",q:"스키를 해 봤어요? means:",opts:["Do you ski?","Did you ski yesterday?","Have you tried skiing?","Will you go skiing?"],ans:"Have you tried skiing?",hint:"해 봤어요 = have … doing. Experience question."},
  {type:"fb",s:"한복을 입___봤어요?\n(Have you tried wearing hanbok?)",a:"어",opts:["어","아","해","여"],hint:"입다 has a dark vowel (ㅣ). Which harmony connector fits?"},
  {type:"teach",kind:"phrase",nl:"한번도 안 -아/어 봤어요",en:"have never (not even once)",pos:"intj",gender:null,funFact:"Strong negation for experience.",example:"A: 스키를 타 봤어요? B: 아니요, 한번도 안 타 봤어요. A: 진짜요? 재미있는데! 같이 가 볼래요? B: 좋아요! 한번 해 보고 싶었어요.",exampleEn:"A: Have you tried skiing? B: No, I've never tried it. A: Really? It's fun! Do you want to go together? B: Sure! I've been wanting to try it.",note:"한번도 = not even once.\n한번도 + 안 + -아/어 봤어요 = have never.\n\nStrong negation for experience."},
  {type:"mc",q:"한번도 안 먹어 봤어요 means:",opts:["I ate it once","I want to try it","I tried it many times","I have never tried it"],ans:"I have never tried it",hint:"한번도 = not even once. 안 먹어 봤어요 = haven't … eating."},
  {type:"match",pairs:[{nl:"가 봤어요",en:"have been (to)"},{nl:"먹어 봤어요",en:"have tried eating"},{nl:"해 봤어요",en:"have tried doing"},{nl:"한번도 안",en:"not even once"}]},
  {type:"drag_fill",s:"A: 제주도에 {1} 봤어요? B: 네, 작년에 {2} 봤어요. 정말 {3}.\n(A: Have you ___ to Jeju? B: Yes, I ___ last year. It was really ___.)",blanks:{"1":"가","2":"가","3":"좋았어요"},pool:["가","먹어","해","좋았어요","맛있었어요","재미있었어요"],hint:"Experiential: stem + 봤어요. Last blank is a past feeling."},
  {type:"fb",s:"불고기를 먹어 봤어요? 네, 정말 ___.\n(Have you tried bulgogi? Yes, it was really delicious.)",a:"맛있었어요",opts:["맛있었어요","맛있어요","맛있을 거예요","맛없어요"],hint:"Past tense: it WAS delicious (after trying it)."},
  {type:"mc",q:"Which question asks about life experience?",opts:["한국 음식을 먹어 봤어요?","어제 뭐 먹었어요?","오늘 뭐 먹을 거예요?","지금 뭐 먹어요?"],ans:"한국 음식을 먹어 봤어요?",hint:"-어 봤어요 = the experiential pattern. Asks about any-time experience."},

{type:"fb",s:"제주도에서 말을 타 {1}?\n(Have you tried riding a horse in Jeju?)",a:["봤어요"],opts:["봤어요","보고 있어요","볼 거예요","봐요"],hint:"Express trying an experience in the past using the experiential ending."},
{type:"mc",q:"한국 음식을 많이 먹어 봤는데 비빔밥이 제일 맛있었어요.\n(I tried many Korean foods and bibimbap was the most delicious.)",opts:["-아/어 보다 + -지만 + 가장","-아/어 보다 + -는데 + 제일","-게 되다 + -는데 + 더","-기로 하다 + -거든요 + 제일"],ans:"-아/어 보다 + -는데 + 제일",hint:"Experience + background + superlative: past experience leading to judgment."},
{type:"drag_fill",s:"한복을 {1} 봤는데 정말 {2}.\n(I tried wearing hanbok and it was really pretty.)",blanks:{"1":"입어","2":"예뻤어요"},pool:["입어","예뻤어요","입고","예쁘게","입는","예뻐요"],hint:"-아/어 보다 (tried doing) + -는데 (and/but)."},
]},

// ═══ L4: ★ -고 있다: Progressive (HARVEST) ═══
{id:"kou11l4",title:"★ -고 있다: 진행",icon:"🔄",xp:24,board:true,steps:[
  {type:"intro",title:"-고 있다: Right Now",desc:"-고 있다\n→ is doing (right now)\n\nYou have been seeing this since Unit 9.\nNow it gets its own lesson.",goals:["Use -고 있다 for ongoing actions","Distinguish from simple present","Past progressive: -고 있었어요","Production practice with all tenses"]},
  {type:"tip",title:"🔄 You Have Seen This Before",text:"Since Unit 9, you have seen -고 있다 in examples:\n공부하고 있어요 = am studying (right now).\n\nYou knew what it meant.\nNow let's NAME it and drill it.",deepDive:{title:"Why -고 있다 Exists",text:"-고 있다 = progressive aspect.\n\nKorean present tense is ambiguous:\n먹어요 = I eat / I am eating.\n\n-고 있다 removes ambiguity:\n먹고 있어요 = I am eating (right now, definitely).\n\nEnglish needs 'am/is/are + -ing'.\nKorean needs stem + 고 있다."}},
  {type:"teach",kind:"grammar",nl:"-고 있다",en:"is doing / am doing",pos:"part",gender:null,funFact:"Progressive: 'is/am/are doing.' 먹고 있어요 (I'm eating). Contrast with simple present 먹어요 (I eat); progressive emphasizes ongoing action.",example:"A: 지금 뭐 하고 있어요? B: 짐을 싸고 있어요. 내일 여행이에요! A: 어디 가요? B: 제주도에 가요. 비행기표도 예약하고 있어요. A: 재미있겠다! 사진 많이 찍어요!",exampleEn:"A: What are you doing right now? B: I'm packing my bags. I have a trip tomorrow! A: Where are you going? B: I'm going to Jeju. I'm also booking my plane ticket. A: That sounds fun! Take lots of photos!",note:"-고 있다: progressive (ongoing action).\n\nVerb stem + 고 있다.\n먹다 → 먹고 있어요 (am eating).\n가다 → 가고 있어요 (am going).",deepDive:{title:"Full Progressive Conjugation",text:"Present: 먹고 있어요 = am eating.\nPast: 먹고 있었어요 = was eating.\nFormal: 먹고 있습니다 = am eating (formal).\n\n하다 → 하고 있어요 (am doing).\n공부하다 → 공부하고 있어요 (am studying).\n읽다 → 읽고 있어요 (am reading)."}},
  {type:"mc",q:"먹고 있어요 means:",opts:["I am eating","I will eat","I ate","I want to eat"],ans:"I am eating",hint:"-고 있다 = progressive. Right now, ongoing."},
  {type:"mc",q:"How is 먹고 있어요 different from 먹어요?",opts:["More formal","Emphasizes RIGHT NOW","Past tense","Future tense"],ans:"Emphasizes RIGHT NOW",hint:"먹어요 = general habit. 먹고 있어요 = ongoing at this moment."},
  {type:"fb",s:"지금 책을 읽___있어요.\n(I am reading a book right now.)",a:"고",opts:["고","어","아","는"],hint:"This action is ongoing at this moment. Which particle links a verb stem to 있다 for progressive?"},
  {type:"fb",s:"친구를 기다리___있어요.\n(I am waiting for a friend.)",a:"고",opts:["고","어","아","는"],hint:"I am waiting for a friend. Progressive form: which particle links to 있다?"},
  {type:"teach",kind:"grammar",nl:"-고 있었어요",en:"was doing",pos:"verb",gender:null,funFact:"The polite informal ending. Used in ~80% of daily Korean conversation. Safe with almost everyone.",example:"A: 어제 전화했는데 왜 안 받았어요? B: 미안해요, 자고 있었어요. A: 그래요? 몇 시에 잤어요? B: 9시부터 자고 있었어요. 너무 피곤했어요. A: 다음에는 문자 할게요.",exampleEn:"A: I called yesterday, why didn't you answer? B: Sorry, I was sleeping. A: Really? What time did you fall asleep? B: I was sleeping from 9 o'clock. I was so tired. A: Next time I'll text you.",note:"-고 있었어요: past progressive.\n\n있다 → past = 있었다.\n먹고 있었어요 = was eating.",deepDive:{title:"Past Progressive Usage",text:"자고 있었어요: was sleeping.\n공부하고 있었어요: was studying.\n기다리고 있었어요: was waiting.\n\nUsed for interrupted actions:\n전화했을 때 (when you called)\n+ 자고 있었어요 (I was sleeping)."}},
  {type:"mc",q:"자고 있었어요 means:",opts:["I sleep","I am sleeping","I was sleeping","I will sleep"],ans:"I was sleeping",hint:"-고 있었어요 = was doing. Past progressive."},
  {type:"fb",s:"전화했을 때 공부___있었어요.\n(When you called, I was studying.)",a:"하고",opts:["하고","해서","하면","하는"],hint:"When you called, I was studying. Which particle makes past progressive?"},
  {type:"teach",kind:"phrase",nl:"뭐 하고 있어요?",en:"What are you doing?",pos:"pron",gender:null,funFact:"The go-to check-in question.",example:"A: 뭐 하고 있어요? B: 영화를 보고 있어요.",exampleEn:"A: What are you doing? B: I'm watching a movie.",note:"뭐 하고 있어요?: what are you doing (right now)?\n\nThe go-to check-in question."},
  {type:"mc",q:"A: 뭐 하고 있어요? B: 음악을 듣고 있어요. B is:",opts:["Wanting to listen","Going to listen to music","Done listening","Listening to music right now"],ans:"Listening to music right now",hint:"-고 있어요 = ongoing action. The sentence uses 듣고 있어요. What is B doing?"},
  {type:"match",pairs:[{nl:"먹고 있어요",en:"am eating"},{nl:"자고 있었어요",en:"was sleeping"},{nl:"공부하고 있어요",en:"am studying"},{nl:"기다리고 있어요",en:"am waiting"}]},
  {type:"drag_fill",s:"A: 뭐 {1} 있어요? B: 한국어를 {2} 있어요. 아까는 음악을 {3} 있었어요.\n(A: What are you ___? B: I am ___ Korean. Earlier I was ___ to music.)",blanks:{"1":"하고","2":"공부하고","3":"듣고"},pool:["하고","먹고","공부하고","배우고","듣고","보고"],hint:"Progressive: stem + 고 있다. Think: do, study, listen."},
  {type:"fb",s:"지금 비가 오___있어요.\n(It is raining right now.)",a:"고",opts:["고","어","아","는"],hint:"It is raining right now. Progressive: which particle connects 오다 to 있다?"},
  {type:"mc",q:"Which sentence emphasizes an action happening RIGHT NOW?",opts:["책을 읽고 있어요","책을 읽어요","책을 읽었어요","책을 읽을 거예요"],ans:"책을 읽고 있어요",hint:"-고 있다 = progressive. Happening at this moment."},
  {type:"fb",s:"아이가 ___있어요.\n(The child is sleeping.)",a:"자고",opts:["자고","자서","자면","잤어"],hint:"자다 (to sleep) + 고 있다 = is sleeping."},

{type:"fb",s:"지금 비가 {1} 있어요.\n(It is raining right now.)",a:["오고"],opts:["오고","와서","오면","오는데"],hint:"Rain is happening right now. Which particle connects to 있다 for progressive?"},
{type:"mc",q:"어제 이 시간에 뭐 하고 있었어요?\n(What were you doing at this time yesterday?)",opts:["-고 있다 (present progressive)","-고 있었다 (past progressive)","-았/었다 (simple past)","-겠다 (future)"],ans:"-고 있었다 (past progressive)",hint:"This tense describes an action that was in progress at some point earlier. -고 있었다."},
{type:"drag_fill",s:"친구가 전화했을 때 저는 {1} 있었어요.\n(When my friend called, I was sleeping.)",blanks:{"1":"자고"},pool:["자고","자서","자면","자는데","자니까","잤어요"],hint:"-고 있었다 past progressive: 자고 있었다 = was sleeping."},
]},

// ═══ L5: 제주도 여행 (Conversation) ═══
{id:"kou11l5",title:"제주도 여행",icon:"🏝️",xp:22,board:true,steps:[
  {type:"intro",title:"Planning a Jeju Trip",desc:"제주도\n→ Jeju Island\n\nKorea's favorite vacation destination.",goals:["Practice travel conversation","Combine experiential + progressive","Learn Jeju-specific vocabulary","Plan a trip using all travel grammar"]},
  {type:"teach",kind:"word",nl:"제주도",en:"Jeju Island",pos:"noun",gender:null,funFact:"From hanja: 制 (system/control) + 主 (master/main) + 度 (degree/measure).",phonetic:"je-ju-do",example:"A: 이번 휴가에 어디 가요? B: 제주도에 가요! A: 좋겠다! 제주도에 가 봤어요? B: 아니요, 처음이에요. 너무 기대돼요. A: 한라산에 꼭 올라가 보세요!",exampleEn:"A: Where are you going this vacation? B: I'm going to Jeju! A: Nice! Have you been to Jeju? B: No, it's my first time. I'm so excited. A: You must try climbing Hallasan!",note:"제주도: Jeju Island.\n도 (島) = island.\n\nKorea's #1 vacation destination."},
  {type:"teach",kind:"word",nl:"바다",en:"sea / ocean",pos:"noun",gender:null,funFact:"Sea / ocean. Native Korean. Contrast Sino-Korean 해양 (oceanography). Korea has 3 coastlines: East Sea, Yellow Sea, South Sea; each with distinct character.",example:"A: 제주도 바다가 정말 예뻐요! B: 맞아요. 물이 정말 깨끗해요. A: 바닷가에서 뭐 했어요? B: 수영도 하고 사진도 많이 찍었어요. A: 좋겠다! 저도 바다에 가고 싶어요.",exampleEn:"A: The Jeju sea is really pretty! B: That's right. The water is really clean. A: What did you do at the beach? B: I swam and took lots of photos. A: I'm jealous! I want to go to the sea too.",note:"바다: sea, ocean.\n바닷가: seaside, beach.\n해수욕장: swimming beach."},
  {type:"teach",kind:"word",nl:"관광",en:"sightseeing / tourism",pos:"noun",gender:null,funFact:"Sino-Korean compound: 관 (see) + 광 (light/scenery)",phonetic:"gwan-gwang",example:"관광하러 제주도에 갔어요.",exampleEn:"I went to Jeju for sightseeing.",note:"관광 (觀光): sightseeing.\nCOMPOUND: 관 (see) + 광 (light/scenery).\n관광지: tourist spot."},
  {type:"teach",kind:"word",nl:"렌터카",en:"rental car",pos:"noun",gender:null,funFact:"Jeju has no subway.",example:"A: 제주도에서 어떻게 이동해요? B: 렌터카를 빌렸어요. 지하철이 없어서요. A: 운전할 줄 알아요? B: 네, 면허가 있어요. 렌터카가 제일 편해요. A: 얼마예요? B: 하루에 5만 원 정도예요.",exampleEn:"A: How do you get around in Jeju? B: I rented a car. There's no subway. A: Do you know how to drive? B: Yes, I have a license. A rental car is the most convenient. A: How much is it? B: About 50,000 won per day.",note:"렌터카: rental car (Konglish).\n빌리다: to rent/borrow.\n\nJeju has no subway. Cars are essential."},
  {type:"mc",q:"제주도 = 제주 + 도. 도 means:",opts:["Island","City","Province","Mountain"],ans:"Island",hint:"도 (島) = …. 제주도 = Jeju …."},
  {type:"tip",title:"🏝️ 제주도 Travel Guide",text:"제주도 is Korea's Hawaii:\n\n비행기로 서울에서 1시간 (1 hour from Seoul by plane).\n렌터카가 필수 (rental car essential, no subway).\n한라산: Korea's tallest mountain.\n흑돼지: famous black pig BBQ.",deepDive:{title:"Must-Visit Jeju Spots",text:"한라산 (Hallasan): Korea's tallest peak (1,947m).\n성산일출봉: Sunrise Peak (UNESCO).\n만장굴: Lava tube cave.\n\n제주 특산물 (specialties):\n흑돼지: black pig.\n감귤: tangerines.\n해녀: female divers (UNESCO heritage).\n\n제주 방언 (dialect):\nVery different from standard Korean.\n혼저 옵서예 = 어서 오세요 (welcome)."}},
  {type:"mc",q:"Why do most tourists rent a car in Jeju?",opts:["Cars are very cheap","There is no subway system","Jeju is very small","Taxis don't exist"],ans:"There is no subway system",hint:"Think about what type of public rail transport Jeju lacks, making cars essential."},
  {type:"fb",s:"제주도에 ___봤어요?\n(Have you been to Jeju?)",a:"가",opts:["가","간","갈","갔"],hint:"-아/어 봤어요 pattern. 가다 → 가 봤어요."},
  {type:"fb",s:"지금 제주도에서 ___하고 있어요.\n(I am sightseeing in Jeju right now.)",a:"관광",opts:["관광","여행","출발","도착"],hint:"Visiting tourist spots and enjoying the scenery. Which word means sightseeing?"},
  {type:"teach",kind:"word",nl:"일정",en:"schedule / itinerary",pos:"noun",gender:null,funFact:"Sino-Korean compound: 일 (day) + 정 (set/plan)",phonetic:"il-jeong",example:"여행 일정을 만들었어요.",exampleEn:"I made a travel itinerary.",note:"일정 (日程): schedule, itinerary.\nCOMPOUND: 일 (day) + 정 (set/plan)."},
  {type:"match",pairs:[{nl:"제주도",en:"Jeju Island"},{nl:"바다",en:"sea"},{nl:"숙소",en:"accommodation"},{nl:"일정",en:"itinerary"}]},
  {type:"drag_fill",s:"제주도에 {1}로 가요. {2}를 예약하고 {3}을 만들었어요.\n(I go to Jeju by ___. I booked ___ and made an ___.)",blanks:{"1":"비행기","2":"숙소","3":"일정"},pool:["비행기","기차","숙소","호텔","일정","여권"],hint:"Think: flying, a place to stay, and a travel plan."},
  {type:"mc",q:"관광지 means:",opts:["Airport","Hotel","Tourist spot","Restaurant"],ans:"Tourist spot",hint:"관광 (sightseeing) + 지 (地: place) = … …."},
  {type:"fb",s:"한라산에 올라___봤어요?\n(Have you tried climbing Hallasan?)",a:"가",opts:["가","간","갈","가고"],hint:"올라가다 (to climb up) → 올라가 봤어요."},
  {type:"mc",q:"A: 제주도 바다가 어때요? B: 정말 예뻐요! 어때요 means:",opts:["Where is it?","What is it?","When did you go?","How is it?"],ans:"How is it?",hint:"어때요 = how is it? Asking for opinion/impression."},

{type:"fb",s:"제주도에 가{1} 비행기를 탔어요.\n(I took a plane to go to Jeju.)",a:["려고"],opts:["려고","면","서","는데"],hint:"State the purpose of boarding the aircraft using the purpose connector."},
{type:"mc",q:"해녀 체험을 해 봤는데 정말 신기했어요.\n(I tried the haenyeo experience and it was really amazing.)",opts:["-아/어 보다 + -는데","-고 있다 + -지만","-게 되다 + -거든요","-기로 하다 + -네요"],ans:"-아/어 보다 + -는데",hint:"Tried (experience) + background/result."},
{type:"match",pairs:[{nl:"비행기로 갔어요",en:"went by plane"},{nl:"배로 갔어요",en:"went by boat"},{nl:"버스로 갔어요",en:"went by bus"},{nl:"택시로 갔어요",en:"went by taxi"}]},
]},

// ═══ L5b: -(으)ㄴ 후에 (After Doing) ═══
{id:"kou11l5b",title:"-(으)ㄴ 후에: 도착한 후에",icon:"⏭️",xp:22,board:true,steps:[
  {type:"intro",title:"After Doing: -(으)ㄴ 후에",desc:"도착한 후에 전화했어요.\n→ After arriving, I called.\n\nSequence events with -(으)ㄴ 후에.",goals:["Use -(으)ㄴ 후에 to sequence events","Attach it to past-tense verb stems","Contrast with -고 나서 (A2)","Sequence travel actions naturally"]},
  {type:"tip",title:"Sequencing: -(으)ㄴ 후에",text:"후 means 'after.' 에 marks time.\nAttach past modifier -(으)ㄴ to the verb:\n\nConsonant stem: + 은 후에\n먹다 → 먹은 후에 (after eating)\n\nVowel stem: + ㄴ 후에\n가다 → 간 후에 (after going)\n\n하다 → 한 후에 (after doing)",deepDive:{title:"-고 나서 vs -(으)ㄴ 후에",text:"-고 나서: and then (immediate sequence).\n밥을 먹고 나서 커피를 마셨어요.\nI ate, then drank coffee.\n\n-(으)ㄴ 후에: after (time gap possible).\n졸업한 후에 한국에 갔어요.\nAfter graduating, I went to Korea.\n\nBoth work for sequences.\n-(으)ㄴ 후에 feels more formal.\n-고 나서 feels more conversational.\n\n후에 can also follow nouns:\n수업 후에 = after class.\n점심 후에 = after lunch."}},
  {type:"teach",kind:"grammar",nl:"-(으)ㄴ 후에",en:"after doing",pos:"part",gender:null,funFact:"Marks location or time. One particle, two jobs. Context tells you which.",example:"A: 공항에 도착한 후에 뭐 했어요? B: 짐을 찾은 후에 택시를 탔어요. A: 호텔까지 얼마나 걸렸어요? B: 30분 정도 걸렸어요. 도착한 후에 바로 쉬었어요. A: 피곤했겠어요!",exampleEn:"A: What did you do after arriving at the airport? B: After getting my luggage, I took a taxi. A: How long did it take to the hotel? B: About 30 minutes. After arriving, I rested right away. A: You must have been tired!",note:"-(으)ㄴ 후에: after doing.\n\nConsonant: stem + 은 후에.\nVowel: stem + ㄴ 후에.\n하다 → 한 후에."},
  {type:"teach",kind:"phrase",nl:"밥을 먹은 후에",en:"after eating",pos:"intj",gender:null,funFact:"Consonant stem: add 은 후에.",example:"A: 점심 먹은 후에 뭐 할 거예요? B: 카페에 가서 커피를 마실 거예요. A: 저도 같이 가도 돼요? B: 그럼요! 밥 먹은 후에 같이 가요. A: 좋아요!",exampleEn:"A: What are you going to do after lunch? B: I'm going to go to a cafe and drink coffee. A: Can I come along too? B: Of course! Let's go together after eating. A: Sounds good!",note:"먹다 → 먹은 후에.\nConsonant stem: add 은 후에."},
  {type:"mc",q:"도착한 후에 전화했어요 means:",opts:["After arriving, I called","Before arriving, I called","While arriving, I called","I arrived and I'm calling"],ans:"After arriving, I called",hint:"The speaker arrived first, then …. Which order does 후에 indicate?"},
  {type:"fb",s:"숙소에 도착{1} 후에 짐을 풀었어요.\n(After arriving at the lodging, I unpacked.)",a:"한",opts:["한","하는","할","했"],hint:"도착하다 → 도착한 후에. Past modifier -(으)ㄴ."},
  {type:"teach",kind:"phrase",nl:"체크인한 후에",en:"after checking in",pos:"intj",gender:null,funFact:"Set phrases are the fastest way to sound natural. Koreans use fixed expressions constantly.",example:"A: 호텔에 도착했어요? B: 네, 방금 체크인한 후에 방에 올라왔어요. A: 방이 어때요? B: 넓고 깨끗해요! 창문에서 바다가 보여요. A: 좋겠다! 쉬고 나서 연락해요.",exampleEn:"A: Did you arrive at the hotel? B: Yes, I just checked in and came up to the room. A: How's the room? B: It's spacious and clean! I can see the ocean from the window. A: Lucky you! Contact me after you rest.",note:"체크인하다 → 체크인한 후에.\n하다 verbs: just add ㄴ 후에."},
  {type:"mc",q:"졸업한 후에 한국에 갔어요. What happened first?",opts:["Going to Korea","Graduating","Both at the same time","Neither is specified"],ans:"Graduating",hint:"-(으)ㄴ 후에: the verb BEFORE 후에 happens first."},
  {type:"fb",s:"비행기에서 내{1} 후에 택시를 탔어요.\n(After getting off the plane, I took a taxi.)",a:"린",opts:["린","는","리는","렸"],hint:"내리다 → 내린 후에. Vowel stem: add ㄴ 후에."},
  {type:"teach",kind:"phrase",nl:"예약한 후에",en:"after booking/reserving",pos:"intj",gender:null,funFact:"Sino-Korean compound: 예(ahead/豫) + 약(promise/約)",example:"호텔을 예약한 후에 비행기표를 샀어요.",exampleEn:"After booking the hotel, I bought a plane ticket.",note:"예약하다 → 예약한 후에.\n\nCOMPOUND: 예(ahead/豫) + 약(promise/約).\nAhead-promise = reservation."},
  {type:"mc",q:"Which is correct for 'after eating'?",opts:["먹을 후에","먹는 후에","먹은 후에","먹고 후에"],ans:"먹은 후에",hint:"'After doing' uses the PAST modifier form. Consonant stems add 은."},
  {type:"fb",s:"표를 {1} 후에 기차를 기다렸어요.\n(After buying the ticket, I waited for the train.)",a:"산",opts:["산","사는","살","사"],hint:"사다 → 산 후에. Vowel stem: add ㄴ 후에."},
  {type:"match",pairs:[{nl:"먹은 후에",en:"after eating"},{nl:"도착한 후에",en:"after arriving"},{nl:"본 후에",en:"after seeing"},{nl:"만난 후에",en:"after meeting"}]},
  {type:"mc",q:"점심을 먹은 후에 커피를 마셨어요. -고 나서 version:",opts:["점심을 먹어서 커피를 마셨어요","점심을 먹는데 커피를 마셨어요","점심을 먹으면 커피를 마셨어요","점심을 먹고 나서 커피를 마셨어요"],ans:"점심을 먹고 나서 커피를 마셨어요",hint:"Use the casual 'after doing' connector. Lunch first, then coffee."},
  {type:"fb",s:"한국에 {1} 후에 한국어를 공부하기 시작했어요.\n(After coming to Korea, I started studying Korean.)",a:"온",opts:["온","오는","올","와"],hint:"오다 → 온 후에. Vowel stem: add ㄴ."},
  {type:"mc",q:"'After checking in, I rested in the room.'\nWhich grammar fits?",opts:["체크인한 후에 방에서 쉬었어요","체크인하고 있는 방에서 쉬었어요","체크인하면 방에서 쉬었어요","체크인하는데 방에서 쉬었어요"],ans:"체크인한 후에 방에서 쉬었어요",hint:"After completing the registration process, rest in the room."},
  {type:"drag_fill",s:"비행기에서 {1} 후에 짐을 {2} 택시를 {3}.\n(After getting off the plane, I picked up luggage and took a taxi.)",blanks:{"1":"내린","2":"찾고","3":"탔어요"},pool:["내린","찾고","탔어요","내리는","찾은","타요"],hint:"내리다 → 내린 후에. Then 찾고 (picked up and) 탔어요 (took)."},
  {type:"fb",s:"여행을 끝{1} 후에 사진을 정리했어요.\n(After finishing the trip, I organized photos.)",a:"낸",opts:["낸","내는","내고","났"],hint:"끝내다 → 끝낸 후에. 내다 vowel stem: add ㄴ."},
  {type:"drag_fill",s:"KTX에서 {1} 후에 {2}한테 전화{3}.\n(After getting off the KTX, I called my friend.)",blanks:{"1":"내린","2":"친구","3":"했어요"},pool:["내린","친구","했어요","내리는","한테서","해요"],hint:"After getting off: 내린 후에. Called my friend: 친구한테 전화했어요."},

{type:"mc",q:"호텔에 도착한 후에 바로 바다에 갔어요.\n(After arriving at the hotel, I went straight to the sea.)\nWhat does this sentence describe?",opts:["Doing two things at the same time","A sequence: arrived first, then went to the sea","Immediate action without waiting","An interrupted action"],ans:"A sequence: arrived first, then went to the sea",hint:"바로 = immediately. -(으)ㄴ 후에 sequences two events. Which order did they happen in?"},
]},

// ═══ L5c: -(으)러 가다/오다 (Go/Come To Do) ═══
{id:"kou11l5c",title:"-(으)러 가다/오다",icon:"🚶",xp:22,board:true,steps:[
  {type:"intro",title:"Go/Come To Do: -(으)러",desc:"밥 먹으러 가요!\n→ Let's go to eat!\n\nExpress purpose of movement.",goals:["Use -(으)러 가다 for 'go to do'","Use -(으)러 오다 for 'come to do'","Distinguish from -(으)려고","Apply in travel contexts"]},
  {type:"tip",title:"Purpose of Movement: -(으)러",text:"-(으)러 ONLY works with movement verbs:\n가다 (go), 오다 (come), 다니다 (commute).\n\nConsonant stem: + 으러\n먹다 → 먹으러 가다\n\nVowel stem: + 러\n보다 → 보러 가다\n\n하다 → 하러 가다",deepDive:{title:"-(으)러 vs -(으)려고",text:"-(으)러: purpose of GOING/COMING.\nOnly with 가다/오다/다니다.\n밥 먹으러 가요. (Go to eat.)\n\n-(으)려고: general purpose.\nWorks with ANY verb.\n밥 먹으려고 요리해요.\n(I cook in order to eat.)\n\n밥 먹으러 식당에 갔어요. (Went to restaurant to eat.)\n밥 먹으려고 요리했어요. (Cooked in order to eat.)\n\n-(으)러 implies physical movement.\n-(으)려고 is about intention/purpose."}},
  {type:"teach",kind:"grammar",nl:"-(으)러 가다",en:"go to do",pos:"part",gender:null,funFact:"'Go (somewhere) to do.' Purpose-of-movement ending. 밥 먹으러 가요 (I'm going to eat). Used only with 가다/오다/다니다 as the main verb.",example:"A: 어디 가요? B: 밥 먹으러 식당에 가요. 같이 갈래요? A: 좋아요! 뭐 먹으러 가요? B: 비빔밥 먹으러 가요. 맛있는 식당을 찾았어요. A: 좋아요, 빨리 가요!",exampleEn:"A: Where are you going? B: I'm going to a restaurant to eat. Want to come? A: Sure! What are we going to eat? B: We're going to eat bibimbap. I found a delicious restaurant. A: Great, let's go quickly!",note:"-(으)러 가다: go to do.\n\nConsonant: + 으러 가다.\nVowel: + 러 가다.\nOnly with movement verbs."},
  {type:"teach",kind:"grammar",nl:"-(으)러 오다",en:"come to do",pos:"part",gender:null,funFact:"'Come (somewhere) to do.' Mirror of -러 가다. 배우러 왔어요 (I came to learn). Speaker's perspective determines 가다 vs 오다 choice.",example:"A: 한국에 왜 왔어요? B: 한국어 배우러 왔어요. A: 한국에서 얼마나 있을 거예요? B: 6개월 정도 있을 거예요. 여행도 하러 갈 거예요. A: 좋은 경험이 될 거예요!",exampleEn:"A: Why did you come to Korea? B: I came to learn Korean. A: How long will you stay in Korea? B: About 6 months. I'm also going to go traveling. A: It will be a great experience!",note:"-(으)러 오다: come to do.\n\nSame pattern, different direction.\n가다 = going. 오다 = coming."},
  {type:"mc",q:"밥 먹으러 가요 means:",opts:["Let's go eat","I ate already","I'm eating now","I want to eat"],ans:"Let's go eat",hint:"-(으)러 가다 = go to do. Going to take / consume (food)."},
  {type:"fb",s:"커피 마시{1} 카페에 갔어요.\n(I went to a cafe to drink coffee.)",a:"러",opts:["러","려고","면서","는데"],hint:"마시다 → 마시러 가다. Vowel stem: add 러."},
  {type:"mc",q:"한국어 배우러 왔어요 means:",opts:["I learned Korean and came","I came to learn Korean","I'm learning Korean now","I want to learn Korean"],ans:"I came to learn Korean",hint:"-(으)러 오다 = come to do. 배우다 → 배우러 왔어요."},
  {type:"fb",s:"친구를 만나{1} 서울에 갔어요.\n(I went to Seoul to meet a friend.)",a:"러",opts:["러","려고","서","면"],hint:"만나다 → 만나러 가다. Purpose of going."},
  {type:"match",pairs:[{nl:"먹으러 가다",en:"go to eat"},{nl:"보러 오다",en:"come to see"},{nl:"사러 가다",en:"go to buy"},{nl:"놀러 가다",en:"go to hang out"}]},
  {type:"mc",q:"놀러 가요 means:",opts:["Go play by yourself","I'm playing now","Let's go hang out","I came to play"],ans:"Let's go hang out",hint:"놀다 → 놀러 가다. Go to play/… out."},
  {type:"fb",s:"관광지를 {1} 제주도에 갔어요.\n(I went to Jeju to see tourist spots.)",a:"보러",opts:["보러","봐서","보면","보는데"],hint:"-(으)러 가다 = go in order to. 보다 + purpose ending."},
  {type:"mc",q:"부산에 해운대 해수욕장 보러 왔어요. This means:",opts:["Haeundae Beach came to Busan","I saw Haeundae Beach in Busan","I will go to Haeundae Beach","I came to Busan to see Haeundae Beach"],ans:"I came to Busan to see Haeundae Beach",hint:"-(으)러 오다 = come to do. … to see the …."},
  {type:"fb",s:"기차표를 {1} 역에 갔어요.\n(I went to the station to buy a train ticket.)",a:"사러",opts:["사러","사서","사면","사고"],hint:"-(으)러 가다 = go in order to. 사다 + purpose ending."},
  {type:"drag_fill",s:"한국 음식을 {1} 식당에 {2}. 도착한 후에 메뉴를 {3}.\n(I went to a restaurant to eat Korean food. After arriving, I looked at the menu.)",blanks:{"1":"먹으러","2":"갔어요","3":"봤어요"},pool:["먹으러","갔어요","봤어요","먹어서","가요","보러"],hint:"Went to eat: 먹으러 갔어요. After arriving: 도착한 후에. Looked at: 봤어요."},
  {type:"drag_fill",s:"친구가 한국에 {1} 왔어요. 공항에서 내리{2} 저한테 전화{3}.\n(My friend came to Korea to travel. After getting off at the airport, they called me.)",blanks:{"1":"여행하러","2":"고 나서","3":"했어요"},pool:["여행하러","고 나서","했어요","여행해서","은 후에","해요"],hint:"Came to travel: 여행하러 왔어요. And then: -고 나서. Called me: 전화했어요."},

{type:"fb",s:"점심을 {1} 식당에 갔어요.\n(I went to a restaurant to eat lunch.)",a:["먹으러"],opts:["먹으러","먹고","먹어서","먹으면"],hint:"Combine going somewhere with a purpose using the movement-purpose connector."},
{type:"mc",q:"친구를 만나러 카페에 가고 있어요.\n(I am going to a cafe to meet a friend.)",opts:["-(으)러 가다 + -고 있다","-(으)러 오다 + -고 있다","-(으)려고 + -고 있다","-(으)ㄹ 줄 알다 + -고 있다"],ans:"-(으)러 가다 + -고 있다",hint:"Going to do something + currently in the middle of doing it."},
{type:"drag_fill",s:"한국어를 {1} 학원에 {2}.\n(I go to an academy to learn Korean.)",blanks:{"1":"배우러","2":"다녀요"},pool:["배우러","다녀요","배우려고","가요","배우면","다니는데"],hint:"-(으)러 = purpose with movement verb. 배우다 → 배우러."},
{type:"match",pairs:[{nl:"먹으러 가요",en:"go to eat"},{nl:"공부하러 가요",en:"go to study"},{nl:"운동하러 가요",en:"go to exercise"},{nl:"쇼핑하러 가요",en:"go to shop"}]},
{type:"mc",q:"서울에서 부산까지 맛집을 찾으러 갔는데 줄이 너무 길었어요.\n(I went to find a famous restaurant from Seoul to Busan but the line was too long.)",opts:["-(으)러 가다 + -아/어서","-(으)러 가다 + -는데","-(으)려고 + -지만","-(으)러 오다 + -거든요"],ans:"-(으)러 가다 + -는데",hint:"Purpose movement + contrast: went for a purpose but encountered a problem."},
]},

// ═══ L6: -(으)ㄹ 줄 알다/모르다 ═══
{id:"kou11l6",title:"-(으)ㄹ 줄 알다",icon:"🎯",xp:24,board:true,steps:[
  {type:"intro",title:"Know How To / Don't Know How To",desc:"-(으)ㄹ 줄 알다\n→ know how to\n\nAbility based on knowledge, not possibility.",goals:["Use -(으)ㄹ 줄 알다 for 'know how to'","Use -(으)ㄹ 줄 모르다 for 'don't know how to'","Distinguish from -(으)ㄹ 수 있다","Practice with real skills"]},
  {type:"tip",title:"🎯 Two Kinds of 'Can'",text:"You learned -(으)ㄹ 수 있다 in A2:\n= CAN (possibility/ability).\n\nNow: -(으)ㄹ 줄 알다:\n= KNOW HOW TO (learned skill).\n\n운전할 수 있어요: I can drive (it's possible).\n운전할 줄 알아요: I know how to drive (learned skill).",deepDive:{title:"수 있다 vs 줄 알다",text:"-(으)ㄹ 수 있다: ability/possibility.\nCan you come tomorrow? 내일 올 수 있어요?\n\n-(으)ㄹ 줄 알다: learned knowledge/skill.\nCan you drive? 운전할 줄 알아요?\n\nBoth translate to 'can' in English.\nKorean distinguishes them.\n\n줄 literally means 'way/method'.\n알다 = to know.\n줄 알다 = know the way = know how to."}},
  {type:"teach",kind:"grammar",nl:"-(으)ㄹ 줄 알다",en:"know how to",pos:"part",gender:null,funFact:"'Know how to.' Skill or ability. 수영할 줄 알아요 (I know how to swim). Contrast with -(으)ㄹ 수 있다 (can do), which is more about possibility.",example:"A: 한국어를 읽을 줄 알아요? B: 네, 읽을 줄 알아요. 한글을 배웠어요. A: 대단하네요! 쓸 줄도 알아요? B: 조금요. 아직 연습하고 있어요. A: 열심히 하고 있네요!",exampleEn:"A: Do you know how to read Korean? B: Yes, I know how to read it. I learned Hangul. A: That's impressive! Do you also know how to write? B: A little. I'm still practicing. A: You're working hard!",note:"-(으)ㄹ 줄 알다: know how to.\n\nConsonant stem + 을 줄 알다.\nVowel stem + ㄹ 줄 알다.",deepDive:{title:"Conjugation Examples",text:"읽다 → 읽을 줄 알아요 (know how to read).\n만들다 → 만들 줄 알아요 (know how to make).\n하다 → 할 줄 알아요 (know how to do).\n타다 → 탈 줄 알아요 (know how to ride).\n\nNegative: 줄 모르다\n읽을 줄 몰라요 (don't know how to read).\n\n⚠️ 모르다 past = 몰랐어요 (not 모랐어요)."}},
  {type:"mc",q:"운전할 줄 알아요 means:",opts:["I know how to drive (learned skill)","I can drive (it's possible) (in most cases)","I want to drive (in most cases)","I am driving (in most cases)"],ans:"I know how to drive (learned skill)",hint:"줄 = way/method. 알다 = to understand. This pattern expresses mastery through practice."},
  {type:"teach",kind:"grammar",nl:"-(으)ㄹ 줄 모르다",en:"don't know how to",pos:"part",gender:null,funFact:"'Don't know how to.' Negative of 알다. 운전할 줄 몰라요 (I don't know how to drive). Skill-negation, not possibility-negation.",example:"A: 같이 수영하러 갈래요? B: 미안해요, 수영할 줄 몰라요. A: 진짜요? 배워 보고 싶어요? B: 네, 배우고 싶은데 시간이 없어요. A: 다음에 같이 수영장에 가요. 제가 가르쳐 줄게요!",exampleEn:"A: Want to go swimming together? B: Sorry, I don't know how to swim. A: Really? Do you want to learn? B: Yes, I want to learn but I don't have time. A: Let's go to the pool together next time. I'll teach you!",note:"-(으)ㄹ 줄 모르다: don't know how to.\n\n줄 모르다 is the negative of 줄 알다.\n모르다 → 몰라요 (irregular)."},
  {type:"mc",q:"수영할 줄 몰라요 means:",opts:["I can't swim (no pool)","I don't know how to swim","I don't want to swim","I didn't swim"],ans:"I don't know how to swim",hint:"줄 모르다 = lacking the method. This person has never practiced or been taught to …."},
  {type:"fb",s:"한국어를 읽___줄 알아요.\n(I know how to read Korean.)",a:"을",opts:["을","는","고","어"],hint:"읽다: consonant stem → 을 줄 알다."},
  {type:"fb",s:"요리___줄 몰라요.\n(I don't know how to cook.)",a:"할",opts:["할","하는","한","해"],hint:"요리하다: 하다 → 할 줄 모르다."},
  {type:"mc",q:"Which asks about a LEARNED SKILL?",opts:["내일 올 수 있어요?","요리하고 싶어요?","요리할 줄 알아요?","요리했어요?"],ans:"요리할 줄 알아요?",hint:"줄 알다 = have mastered the way. Which option uses this pattern for 요리하다?"},
  {type:"teach",kind:"phrase",nl:"그럴 줄 몰랐어요",en:"I didn't know that would happen",pos:"intj",gender:null,funFact:"Beyond skills, 줄 알다/모르다 expresses expectations:.",example:"A: 오늘 비가 왔어요. B: 진짜요? 비가 올 줄 몰랐어요. 우산을 안 가져왔어요. A: 저도요. 날씨가 이렇게 추울 줄 몰랐어요. B: 날씨 예보를 봤어야 했는데요. A: 다음부터 꼭 확인해요!",exampleEn:"A: It rained today. B: Really? I didn't know it would rain. I didn't bring an umbrella. A: Me neither. I didn't know it would be this cold. B: We should have checked the forecast. A: Let's definitely check from now on!",note:"줄 몰랐어요: didn't know/expect.\n\nExtended meaning: didn't expect.\n이렇게 맛있을 줄 몰랐어요.\n= I didn't know it would be this delicious.",deepDive:{title:"줄 알다/모르다 for Expectations",text:"Beyond skills, 줄 알다/모르다 expresses expectations:\n\n올 줄 알았어요: I thought they would come.\n올 줄 몰랐어요: I didn't think they would come.\n\n이렇게 어려울 줄 몰랐어요.\n= I didn't know it would be this hard."}},
  {type:"mc",q:"비가 올 줄 몰랐어요 means:",opts:["I know it will rain","I want it to rain","It's not raining","I didn't know it would rain"],ans:"I didn't know it would rain",hint:"줄 몰랐어요 = …'t be aware/expect."},
  {type:"match",pairs:[{nl:"할 줄 알아요",en:"know how to do"},{nl:"할 줄 몰라요",en:"don't know how to"},{nl:"할 수 있어요",en:"can do (possible)"},{nl:"올 줄 몰랐어요",en:"didn't expect to come"}]},
  {type:"drag_fill",s:"A: 한국어를 읽{1} 줄 알아요? B: 네, 읽{2} 줄 알아요. 하지만 쓸 줄 {3}.\n(A: Do you know how to read___ Korean? B: Yes, I know how to read___. But I ___ know how to write.)",blanks:{"1":"을","2":"을","3":"몰라요"},pool:["을","는","고","알아요","몰라요","있어요"],hint:"Consonant stem 읽 takes 을. Last blank: negative of 알다."},
  {type:"fb",s:"자전거를 탈 줄 ___?\n(Do you know how to ride a bicycle?)",a:"알아요",opts:["알아요","몰라요","있어요","없어요"],hint:"Asking if they KNOW how to. 줄 알다 = know how to."},
  {type:"mc",q:"피아노를 칠 줄 알아요? asks:",opts:["Do you know how to play piano? (learned skill)","Can you play piano? (is it possible now)","Do you want to play piano? (in most cases)","Did you play piano? (in most cases) (in most cases)"],ans:"Do you know how to play piano? (learned skill)",hint:"줄 알다 = have mastered the way. Is this asking about possibility or acquired ability?"},

{type:"fb",s:"저는 한국어를 읽을 줄 {1}.\n(I know how to read Korean.)",a:["알아요"],opts:["알아요","몰라요","있어요","해요"],hint:"-(으)ㄹ 줄 알다 = know how to. Ability gained through learning."},
{type:"mc",q:"수영할 줄 모르는데 배우고 싶어요.\n(I do not know how to swim but I want to learn.)",opts:["-(으)ㄹ 줄 알다 + -지만 + -게 되다","-(으)ㄹ 줄 모르다 + -는데 + -고 싶다","못 + -는데 + -고 싶다","안 + -거든요 + -기로 하다"],ans:"-(으)ㄹ 줄 모르다 + -는데 + -고 싶다",hint:"Cannot do + background + desire: three patterns combined."},
{type:"drag_fill",s:"피아노를 {1} 줄 아는데 기타를 {2} 줄 몰라요.\n(I know how to play piano but do not know how to play guitar.)",blanks:{"1":"칠","2":"칠"},pool:["칠","칠","치는","치고","쳐서","치면"],hint:"-(으)ㄹ 줄 알다/모르다 contrast. 치다 → 칠 줄 알다."},
{type:"match",pairs:[{nl:"할 줄 알아요",en:"know how to do"},{nl:"할 줄 몰라요",en:"do not know how to do"},{nl:"할 수 있어요",en:"can do (ability/possibility)"},{nl:"해 봤어요",en:"have tried doing"}]},
{type:"mc",q:"한국 노래를 부를 줄 알아서 노래방에서 불러 봤어요.\n(I know how to sing Korean songs so I tried singing at noraebang.)",opts:["-(으)ㄹ 수 있다 + -아/어서 + -기로 하다","-(으)ㄹ 줄 알다 + -니까 + -게 되다","-(으)ㄹ 줄 알다 + -아/어서 + -아/어 보다","-(으)ㄹ 줄 모르다 + -는데 + -아/어 보다"],ans:"-(으)ㄹ 줄 알다 + -아/어서 + -아/어 보다",hint:"Ability + reason + trying: knew how so tried it."},
]},

// ═══ L7: 여행 대화 (Practical Dialogues) ═══
{id:"kou11l7",title:"여행 대화",icon:"💬",xp:22,board:true,steps:[
  {type:"intro",title:"Travel Conversations",desc:"Practical dialogues for travelers.\n\nBooking, directions, complaints.",goals:["Use travel vocabulary in real dialogues","Practice booking and asking directions","Handle common travel situations","Combine all U11 grammar in context"]},
  {type:"teach",kind:"phrase",nl:"방이 있어요?",en:"Do you have a room?",pos:"intj",gender:null,funFact:"Set phrases are the fastest way to sound natural. Koreans use fixed expressions constantly.",example:"A: 방이 있어요? B: 네, 있어요. 1박에 8만 원이에요.",exampleEn:"A: Do you have a room? B: Yes. 80,000 won per night.",note:"방이 있어요?: Do you have a room?\n1박 (一泊): one night's stay.\n박 = overnight stay counter."},
  {type:"teach",kind:"word",nl:"1박 2일",en:"1 night 2 days",pos:"num",gender:null,funFact:"Common trip format in Korea.",phonetic:"il-bak i-il",example:"A: 이번 주말에 경주에 갈까요? B: 좋아요! 1박 2일로 갈까요? A: 네, 토요일에 출발해서 일요일에 돌아와요. B: 숙소는 어디로 예약할까요? A: 한옥 게스트하우스가 좋겠어요!",exampleEn:"A: Shall we go to Gyeongju this weekend? B: Sure! Shall we go for 1 night 2 days? A: Yes, we leave Saturday and come back Sunday. B: Where should we book accommodation? A: A hanok guesthouse would be nice!",note:"1박 2일: one night, two days.\n박 (泊) = overnight stay.\n\nCommon trip format in Korea."},
  {type:"teach",kind:"phrase",nl:"체크인/체크아웃",en:"check-in / check-out",pos:"intj",gender:null,funFact:"Set phrases are the fastest way to sound natural. Koreans use fixed expressions constantly.",example:"A: 체크인하고 싶은데요. B: 네, 예약하셨어요? A: 네, 김민수로 예약했어요. B: 확인했습니다. 체크아웃은 11시까지예요. A: 알겠습니다. 감사합니다!",exampleEn:"A: I'd like to check in. B: Yes, did you make a reservation? A: Yes, I reserved under Kim Minsu. B: Confirmed. Check-out is by 11 AM. A: Understood. Thank you!",note:"체크인: check-in (Konglish).\n체크아웃: check-out.\n\n-부터: from (time). -까지: until."},
  {type:"mc",q:"1박 2일 means:",opts:["1 night 2 days","One week","2 nights 3 days","Half a day"],ans:"1 night 2 days",hint:"박 = overnight stay. 일 = calendar day. How many of each are in 1박 2일?"},
  {type:"fb",s:"체크인은 3시___예요.\n(Check-in is from 3 PM.)",a:"부터",opts:["부터","까지","에서","한테"],hint:"Check-in starts FROM 3 PM. Which time particle means 'from'?"},
  {type:"teach",kind:"phrase",nl:"길을 잃었어요",en:"I'm lost",pos:"pron",gender:null,funFact:"Set phrases are the fastest way to sound natural. Koreans use fixed expressions constantly.",example:"A: 죄송합니다, 길을 잃었어요. 서울역이 어디에 있어요? B: 여기서 직진해서 왼쪽으로 가세요. A: 걸어서 얼마나 걸려요? B: 10분 정도 걸려요. A: 감사합니다! 많이 도와주셨어요.",exampleEn:"A: Excuse me, I'm lost. Where is Seoul Station? B: Go straight from here and turn left. A: How long does it take on foot? B: About 10 minutes. A: Thank you! You've helped me a lot.",note:"길 = road/way.\n잃다 = to lose.\n길을 잃다 = to lose one's way = to be lost."},
  {type:"teach",kind:"phrase",nl:"여기서 얼마나 걸려요?",en:"How long does it take from here?",pos:"intj",gender:null,funFact:"Set phrases are the fastest way to sound natural. Koreans use fixed expressions constantly.",example:"A: 역까지 얼마나 걸려요? B: 10분 정도 걸려요.",exampleEn:"A: How long to the station? B: About 10 minutes.",note:"얼마나: how much/long.\n걸리다: to take (time).\n정도: about/approximately."},
  {type:"mc",q:"길을 잃었어요 means:",opts:["I found the way","I'm lost","The road is long","I know the way"],ans:"I'm lost",hint:"길 = road. 잃다 = to lose. … the road = I'm …."},
  {type:"fb",s:"역까지 얼마나 ___?\n(How long does it take to the station?)",a:"걸려요",opts:["걸려요","가요","있어요","해요"],hint:"How long does it take to the station? Which verb means 'to take (time)'?"},
  {type:"teach",kind:"phrase",nl:"와이파이가 안 돼요",en:"The WiFi doesn't work",pos:"intj",gender:null,funFact:"Set phrases are the fastest way to sound natural. Koreans use fixed expressions constantly.",example:"A: 저기요, 와이파이가 안 돼요. B: 죄송합니다. 비밀번호를 다시 알려 드릴게요. A: 감사합니다. 그리고 에어컨도 안 돼요. B: 정말요? 확인해 보겠습니다. 잠시만요. A: 네, 감사합니다.",exampleEn:"A: Excuse me, the WiFi doesn't work. B: Sorry. Let me give you the password again. A: Thank you. Also, the AC doesn't work either. B: Really? Let me check. Just a moment. A: Yes, thank you.",note:"와이파이: WiFi (Konglish).\n안 돼요: doesn't work.\n\n에어컨이 안 돼요: AC doesn't work."},
  {type:"mc",q:"와이파이가 안 돼요 means:",opts:["WiFi is fast","WiFi is free","WiFi doesn't work","Where is the WiFi?"],ans:"WiFi doesn't work",hint:"안 돼요 = …'t labour / job / isn't working."},
  {type:"match",pairs:[{nl:"방이 있어요?",en:"Do you have a room?"},{nl:"길을 잃었어요",en:"I'm lost"},{nl:"얼마나 걸려요?",en:"How long does it take?"},{nl:"안 돼요",en:"doesn't work"}]},
  {type:"drag_fill",s:"A: 죄송합니다, 길을 {1}. 역까지 얼마나 {2}? B: 걸어서 10분 {3} 걸려요.\n(A: Excuse me, I'm ___. How long does it ___ to the station? B: ___ 10 minutes walking.)",blanks:{"1":"잃었어요","2":"걸려요","3":"정도"},pool:["잃었어요","있어요","걸려요","가요","정도","쯤"],hint:"Think: lost the way, duration verb, and approximately."},
  {type:"fb",s:"에어컨이 ___돼요.\n(The AC doesn't work.)",a:"안",opts:["안","못","잘","다"],hint:"안 돼요 = doesn't work."},
  {type:"mc",q:"걸어서 10분 정도 걸려요 means:",opts:["I can walk in 10 minutes","The walk is 10 minutes away","I walked for 10 minutes","It takes about 10 minutes walking"],ans:"It takes about 10 minutes walking",hint:"걸어서 = by …. 10분 정도 = about 10 min. 걸려요 = it …."},

{type:"fb",s:"실례합니다, 서울역에 어떻게 {1}?\n(Excuse me, how do I get to Seoul Station?)",a:["가요"],opts:["가요","갔어요","갈 거예요","가고 있어요"],hint:"Asking for directions: present tense question form."},
{type:"mc",q:"지하철로 가면 30분 걸리는데 버스로 가면 1시간 걸려요.\n(If you go by subway it takes 30 minutes but by bus it takes an hour.)",opts:["-로 + -(으)면 + -는데","-로 + -아/어서 + -지만","-으로 + -(으)면 + -거든요","-로 + -(으)니까 + -네요"],ans:"-로 + -(으)면 + -는데",hint:"Combine method of transport with a conditional and contrast for two ways to travel."},
{type:"drag_fill",s:"여행 중에 길을 {1} 지도 앱을 {2}.\n(While traveling, I lost my way so I used a map app.)",blanks:{"1":"잃어버려서","2":"사용했어요"},pool:["잃어버려서","사용했어요","잃어버리면","사용해요","잃어버리는데","사용하고"],hint:"-아/어서 (cause) connecting two events during travel."},
{type:"match",pairs:[{nl:"어떻게 가요?",en:"How do I get there?"},{nl:"얼마나 걸려요?",en:"How long does it take?"},{nl:"어디에서 내려요?",en:"Where do I get off?"},{nl:"몇 번 버스예요?",en:"What number bus is it?"}]},
]},

// ═══ L8: 한국 여행 문화 ═══
{id:"kou11l8",title:"한국 여행 문화",icon:"🌏",xp:20,board:true,steps:[
  {type:"intro",title:"Korean Travel Culture",desc:"How Koreans travel.\n\nDomestic tourism, apps, and etiquette.",goals:["Understand Korean domestic travel trends","Know key travel apps and services","Learn seasonal travel vocabulary","Cultural context for B1 conversations"]},
  {type:"teach",kind:"word",nl:"국내 여행",en:"domestic travel",pos:"noun",gender:null,funFact:"Sino-Korean compound: 국 (country) + 내 (inside)",phonetic:"guk-nae yeo-haeng",example:"한국 사람들은 국내 여행을 많이 해요.",exampleEn:"Koreans travel domestically a lot.",note:"국내 (國內): domestic.\nCOMPOUND: 국 (country) + 내 (inside).\n국내 여행 = travel inside the country."},
  {type:"teach",kind:"word",nl:"해외 여행",en:"overseas travel",pos:"noun",gender:null,funFact:"Sino-Korean compound: 해 (sea) + 외 (outside)",phonetic:"hae-oe yeo-haeng",example:"해외 여행 가 봤어요?",exampleEn:"Have you traveled overseas?",note:"해외 (海外): overseas.\nCOMPOUND: 해 (sea) + 외 (outside).\n해외 여행 = travel outside the country."},
  {type:"mc",q:"국내 = 국 + 내. 내 means:",opts:["Inside","Outside","Country","Travel"],ans:"Inside",hint:"내 (內) = …. 국내 = … the country."},
  {type:"tip",title:"🗺️ Popular Korean Travel Destinations",text:"Top domestic destinations:\n\n제주도: beaches, hiking, food.\n부산: 해운대 beach, seafood.\n경주: ancient capital, temples.\n전주: 한옥마을, 비빔밥.",deepDive:{title:"Travel Apps and Services",text:"네이버 지도: Korea's #1 map app.\n카카오맵: alternative map app.\nKorail: train booking.\n야놀자/여기어때: accommodation apps.\n\n한국 관광공사 (KTO): official tourism org.\nVisit Korea app: English tourist info.\n\n한국 여행 팁:\n현금보다 카드 (card > cash).\nT-money 카드: transit card.\nWiFi egg: portable WiFi rental."}},
  {type:"mc",q:"해외 = 해 + 외. 외 means:",opts:["Sea","Outside","Inside","Far"],ans:"Outside",hint:"외 (外) = …. 해외 = … the sea = overseas."},
  {type:"teach",kind:"word",nl:"관광지",en:"tourist spot / attraction",pos:"noun",gender:null,funFact:"Sino-Korean compound: 관광 (sightseeing) + 지 (地: place)",phonetic:"gwan-gwang-ji",example:"서울에 관광지가 많아요.",exampleEn:"Seoul has many tourist spots.",note:"관광지: tourist spot.\nCOMPOUND: 관광 (sightseeing) + 지 (地: place)."},
  {type:"fb",s:"___여행을 좋아해요? 국내 여행이요? 해외 여행이요?\n(Which travel do you like?)",a:"어떤",opts:["어떤","어디","언제","뭐"],hint:"Asking about preference between types. Which question word means 'what kind of'?"},
  {type:"match",pairs:[{nl:"국내 여행",en:"domestic travel"},{nl:"해외 여행",en:"overseas travel"},{nl:"관광지",en:"tourist spot"},{nl:"숙소",en:"accommodation"}]},
  {type:"mc",q:"네이버 지도 is:",opts:["A restaurant guide","A train booking site","Korea's main map app","A hotel booking app"],ans:"Korea's main map app",hint:"네이버 지도: 지도 = chart/navigation. Naver is the dominant platform for finding your way in 한국."},
  {type:"drag_fill",s:"한국 사람들은 {1} 여행을 많이 해요. {2}에 가 봤어요? {3}가 많아요.\n(Koreans travel ___ a lot. Have you been to ___? There are many ___.)",blanks:{"1":"국내","2":"제주도","3":"관광지"},pool:["국내","해외","제주도","부산","관광지","숙소"],hint:"Think: inside the country, famous island, sightseeing places."},

{type:"mc",q:"한국에서는 신발을 벗고 집에 들어가야 해요.\n(In Korea, you must take off your shoes before entering a house.)",opts:["-지만 + -아/어야 하다","-아/어서 + -게 되다","-고 + -아/어도 되다","-고 + -아/어야 하다"],ans:"-고 + -아/어야 하다",hint:"Two actions in sequence + a 'must' obligation. Which two patterns?"},
{type:"fb",s:"한국 음식을 {1} 봤는데 정말 매웠어요.\n(I tried Korean food and it was really spicy.)",a:["먹어"],opts:["먹어","먹고","먹기","먹을"],hint:"The experiential ending means 'try doing.' Combine with 봤는데 for past experience."},
{type:"drag_fill",s:"한국에서 {1} 찜질방에 가 {2}.\n(When traveling in Korea, you should try going to a jjimjilbang.)",blanks:{"1":"여행할 때","2":"보세요"},pool:["여행할 때","보세요","여행하면","봐요","여행해서","봤어요"],hint:"-(으)ㄹ 때 (when) + -아/어 보다 (try) + -세요 (polite suggestion)."},
{type:"mc",q:"찜질방에서 계란을 먹으면서 이야기하는 것이 한국 문화예요.\n(Eating eggs while talking at a jjimjilbang is Korean culture.)\nWhat does 먹으면서 이야기하는 mean here?",opts:["Eating and talking at the same time","Eating and then talking","Eating because of talking","Eating instead of talking"],ans:"Eating and talking at the same time",hint:"먹으면서 = doing two things at once. What is the nuance of -(으)면서 in this sentence?"},
{type:"fb",s:"한국 사람들은 여행할 때 맛집을 {1} 가는 편이에요.\n(Korean people tend to look up famous restaurants when traveling.)",a:["찾아"],opts:["찾아","찾고","찾으면","찾는"],hint:"Express the habit of going somewhere to find something, as a general tendency."},
{type:"match",pairs:[{nl:"찜질방",en:"Korean bathhouse / sauna"},{nl:"노래방",en:"singing room / karaoke"},{nl:"PC방",en:"internet cafe"},{nl:"한옥",en:"traditional Korean house"}]},
{type:"mc",q:"KTX로 부산에 갔는데 해운대가 정말 아름다웠어요.\n(I went to Busan by KTX and Haeundae was really beautiful.)",opts:["-로 + -아/어서","-로 + -는데","-로 + -지만","-로 + -거든요"],ans:"-로 + -는데",hint:"Combine method of transport with a background connector to set context."},
{type:"fb",s:"한국에서 택시를 타{1} 기사님이 친절했어요.\n(When I took a taxi in Korea, the driver was kind.)",a:["는데"],opts:["는데","서","면","지만"],hint:"The background connector sets the scene before the main point is made."},
{type:"drag_fill",s:"제주도에 {1} 봤는데 다시 {2} 싶어요.\n(I have been to Jeju and want to go again.)",blanks:{"1":"가","2":"가고"},pool:["가","가고","간","가는","가서","갈"],hint:"-아/어 보다 (have been/tried) + -고 싶다 (want to): experience + desire."},
]},

// ═══ L9: ★ ㅎ 불규칙 (HARVEST, Batch 3) ═══
{id:"kou11l9",title:"★ ㅎ 불규칙",icon:"🎨",xp:24,board:true,steps:[
  {type:"intro",title:"ㅎ-Irregular Verbs: Color Adjectives",desc:"노랗다 → 노래요\n→ to be yellow → is yellow\n\nYou saw color hints since Unit 6.\nNow the pattern gets named.",goals:["Master ㅎ-irregular conjugation pattern","Learn color adjectives that use ㅎ-irregular","Understand ㅎ drops before vowel endings","Apply to modifier forms"]},
  {type:"tip",title:"🎨 You Have Seen This Before",text:"Since Unit 6, you saw adjectives like 까맣다 and 노랗다.\nYou noticed something odd about their conjugation.\n\nNow: the ㅎ-IRREGULAR pattern.\nWhen ㅎ meets a vowel ending, ㅎ DROPS and the vowel changes.",deepDive:{title:"The ㅎ-Irregular Rule",text:"ㅎ stems: When the ending starts with a vowel:\n1. ㅎ drops completely.\n2. ㅏ or ㅓ merges with the remaining vowel.\n\n노랗다: 노랗 + 아요 → 노라 + 아요 → 노래요 (yellow).\n빨갛다: 빨갛 + 아요 → 빨가 + 아요 → 빨개요 (red).\n까맣다: 까맣 + 아요 → 까마 + 아요 → 까매요 (black).\n하얗다: 하얗 + 아요 → 하야 + 아요 → 하얘요 (white).\n파랗다: 파랗 + 아요 → 파라 + 아요 → 파래요 (blue).\n\nThis is Batch 3 of 5 irregular families.\nYou already know ㄷ, ㅂ, ㄹ, 으. Now ㅎ."}},
  {type:"teach",kind:"grammar",nl:"ㅎ 불규칙",en:"ㅎ-irregular pattern",pos:"part",gender:null,funFact:"ㅎ-irregular. ㅎ batchim + vowel ending → ㅎ drops. 빨갛다 → 빨개요 (it's red). Affects color descriptive verbs: 그렇다, 이렇다, 어떻다.",example:"A: 이 꽃이 무슨 색이에요? B: 노래요. 예쁘지 않아요? A: 정말 예뻐요! 저기 빨간 꽃도 있어요. B: 맞아요. 빨개요. 파란 꽃도 있네요! A: 여기 꽃이 다 예쁘네요.",exampleEn:"A: What color is this flower? B: It's yellow. Isn't it pretty? A: It's really pretty! There are red flowers over there too. B: Right. They're red. There are also blue flowers! A: All the flowers here are pretty.",note:"ㅎ-irregular: ㅎ drops before vowel endings.\n\nMostly color adjectives.\nBatch 3 of 5 irregular families."},
  {type:"teach",kind:"word",nl:"노랗다",en:"to be yellow",pos:"verb",gender:null,funFact:"Korean verbs don't change for person or number. \"I go\" and \"they go\" use the same verb form.",phonetic:"no-ra-ta",example:"A: 이 바나나 색이 어때요? B: 노래요. 잘 익었어요. A: 그러면 먹어도 돼요? B: 네, 노란 바나나가 제일 맛있어요. A: 맞아요, 저도 노란 바나나를 좋아해요.",exampleEn:"A: How's the color of this banana? B: It's yellow. It's ripe. A: Then can I eat it? B: Yes, yellow bananas are the tastiest. A: Right, I like yellow bananas too.",note:"노랗다 → 노래요 (ㅎ-irregular).\n노란 바나나: yellow banana (modifier)."},
  {type:"teach",kind:"word",nl:"빨갛다",en:"to be red",pos:"verb",gender:null,funFact:"Korean verbs don't change for person or number. \"I go\" and \"they go\" use the same verb form.",phonetic:"ppal-ga-ta",example:"A: 이 사과 색이 정말 빨개요. B: 네, 빨간 사과가 달아요. A: 초록색 사과도 있어요? B: 네, 있는데 빨간 사과가 더 맛있어요. A: 그러면 빨간 사과로 주세요!",exampleEn:"A: This apple is really red. B: Yes, red apples are sweet. A: Are there green apples too? B: Yes, but red apples taste better. A: Then give me red apples please!",note:"빨갛다 → 빨개요 (ㅎ-irregular).\n빨간 사과: red apple (modifier)."},
  {type:"teach",kind:"word",nl:"까맣다",en:"to be black",pos:"verb",gender:null,funFact:"Korean verbs don't change for person or number. \"I go\" and \"they go\" use the same verb form.",phonetic:"kka-ma-ta",example:"A: 저 고양이 봐요! 너무 귀여워요. B: 어디요? 아, 까만 고양이요? A: 네! 눈이 까매서 예뻐요. B: 맞아요. 까만 고양이가 귀여워요. A: 사진 찍어도 될까요?",exampleEn:"A: Look at that cat! It's so cute. B: Where? Oh, the black cat? A: Yes! Its eyes are black and pretty. B: Right. Black cats are cute. A: Can I take a photo?",note:"까맣다 → 까매요 (ㅎ-irregular).\n까만 머리: black hair (modifier)."},
  {type:"teach",kind:"word",nl:"하얗다",en:"to be white",pos:"verb",gender:null,funFact:"Korean verbs don't change for person or number. \"I go\" and \"they go\" use the same verb form.",phonetic:"ha-ya-ta",example:"A: 밖에 눈이 와요! B: 정말요? 하얀 눈이 정말 예뻐요. A: 맞아요. 밖이 다 하얘요. B: 눈사람 만들러 나갈래요? A: 좋아요! 빨리 나가요!",exampleEn:"A: It's snowing outside! B: Really? White snow is really pretty. A: Right. Everything outside is white. B: Want to go out and make a snowman? A: Sure! Let's go quickly!",note:"하얗다 → 하얘요 (ㅎ-irregular).\n하얀 눈: white snow (modifier)."},
  {type:"teach",kind:"word",nl:"파랗다",en:"to be blue",pos:"verb",gender:null,funFact:"Korean verbs don't change for person or number. \"I go\" and \"they go\" use the same verb form.",phonetic:"pa-ra-ta",example:"A: 오늘 하늘이 정말 파래요! B: 네, 구름도 없어서 더 파래 보여요. A: 제주도 바다도 이렇게 파랬어요? B: 네, 파란 바다가 정말 예뻤어요. A: 저도 파란 바다를 보고 싶어요!",exampleEn:"A: The sky is really blue today! B: Yes, there are no clouds so it looks even bluer. A: Was the Jeju sea this blue too? B: Yes, the blue sea was really beautiful. A: I want to see the blue sea too!",note:"파랗다 → 파래요 (ㅎ-irregular).\n파란 하늘: blue sky (modifier)."},
  {type:"mc",q:"노랗다 → polite form:",opts:["노래요","노라요","노랗아요","노랗해요"],ans:"노래요",hint:"ㅎ-irregular: ㅎ drops before vowel endings. Apply to 노랗다."},
  {type:"mc",q:"빨갛다 → polite form:",opts:["빨갛아요","빨개요","빨가요","빨갛해요"],ans:"빨개요",hint:"ㅎ-irregular: same pattern as 노랗다. ㅎ drops before vowel endings."},
  {type:"fb",s:"하늘이 ___.\n(The sky is blue.)",a:"파래요",opts:["파래요","파랗아요","파라요","파란해요"],hint:"파랗다 is ㅎ-irregular. ㅎ drops before 아요 and the vowels merge."},
  {type:"fb",s:"눈이 ___.\n(The snow is white.)",a:"하얘요",opts:["하얘요","하얗아요","하야요","하얀해요"],hint:"하얗다 is ㅎ-irregular. ㅎ drops before 아요 and the vowels merge."},
  {type:"tip",title:"🎨 ㅎ-Irregular Modifier Forms",text:"Modifier form: ㅎ drops + ㄴ\n\n노랗다 → 노란 (yellow + noun)\n빨갛다 → 빨간 (red + noun)\n까맣다 → 까만 (black + noun)\n하얗다 → 하얀 (white + noun)\n파랗다 → 파란 (blue + noun)",deepDive:{title:"Color Modifiers in Action",text:"노란 꽃: yellow flower.\n빨간 사과: red apple.\n까만 고양이: black cat.\n하얀 구름: white cloud.\n파란 바다: blue sea.\n\nAll ㅎ-irregulars follow this:\nstem without ㅎ + ㄴ = modifier."}},
  {type:"mc",q:"'Red apple' in Korean:",opts:["빨갛 사과","빨개 사과","빨간 사과","빨개요 사과"],ans:"빨간 사과",hint:"The irregular adjective drops its final consonant before the modifier ending -ㄴ."},
  {type:"fb",s:"___고양이가 귀여워요.\n(The black cat is cute.)",a:"까만",opts:["까만","까매","까맣","까매요"],hint:"까맣다 ㅎ-irregular modifier: ㅎ drops, add ㄴ. What's the modifier form?"},
  {type:"match",pairs:[{nl:"노란",en:"yellow (modifier)"},{nl:"빨간",en:"red (modifier)"},{nl:"까만",en:"black (modifier)"},{nl:"파란",en:"blue (modifier)"}]},
  {type:"drag_fill",s:"{1} 하늘에 {2} 구름이 있어요. {3} 꽃이 예뻐요.\n(In the ___ sky, there are ___ clouds. The ___ flowers are pretty.)",blanks:{"1":"파란","2":"하얀","3":"노란"},pool:["파란","빨간","하얀","까만","노란","초록"],hint:"All ㅎ-irregular modifiers: sky, cloud, and flower colors."},
  {type:"mc",q:"까맣다 → 까매요, 노랗다 → 노래요.\nWhat happens to ㅎ in these words?",opts:["ㅎ becomes ㅂ","ㅎ changes to ㄹ","ㅎ stays the same","ㅎ drops before vowel endings"],ans:"ㅎ drops before vowel endings",hint:"Compare 노랗다 and 까맣다. Both share this pattern: the ㅎ does something when -아요 attaches."},

{type:"fb",s:"날씨가 {1} 산책하기 좋아요.\n(The weather is cool so it is nice for a walk.)",a:["선선해서"],opts:["선선해서","선선하면","선선한데","선선해도"],hint:"Cool weather, so good for walking. 선선하다 is regular 하다: stem + -아/어서 for cause."},
{type:"mc",q:"이 노란 꽃이 정말 예쁘네요!\n(This yellow flower is really pretty!)",opts:["노랗다 → 노란 (ㅎ-irregular modifier)","노랗다 → 노랗은 (regular)","노랗다 → 노라은 (ㄹ drop)","노랗다 → 노래은 (vowel shift)"],ans:"노랗다 → 노란 (ㅎ-irregular modifier)",hint:"노랗다 is in the ㅎ-change group. Its final ㅎ drops and -ㄴ attaches. What is the result?"},
]},

// ═══ L10: 복습 + 퀴즈 ═══
{id:"kou11l10",title:"복습 + 퀴즈",icon:"📝",xp:20,board:true,steps:[
  {type:"intro",title:"Unit 11 Review",desc:"Review all travel vocabulary and grammar.\n\n-아/어 봤어요, -고 있다, -(으)ㄹ 줄 알다, ㅎ-irregular.",goals:["Review all Unit 11 vocabulary","Test experiential and progressive","Apply -(으)ㄹ 줄 알다/모르다","Prove ㅎ-irregular mastery"]},
  {type:"mc",q:"제주도에 가 봤어요? asks about:",opts:["Life experience","Future plans","Current action","Past specific event"],ans:"Life experience",hint:"-아/어 봤어요 = experiential. Have you ever...?"},
  {type:"mc",q:"지금 비가 오고 있어요 means:",opts:["It rained","It is raining right now","It will rain","It might rain"],ans:"It is raining right now",hint:"-고 있다 = progressive. Happening now."},
  {type:"mc",q:"한국어를 읽을 줄 알아요 means:",opts:["I can read Korean (possible)","I am reading Korean","I know how to read Korean (skill)","I want to read Korean"],ans:"I know how to read Korean (skill)",hint:"줄 알다 = 'way + understand.' Does it express possibility or acquired mastery?"},
  {type:"mc",q:"노랗다 → modifier form:",opts:["노랗은","노래요","노래","노란"],ans:"노란",hint:"This yellow color adjective follows the ㅎ-irregular modifier pattern."},
  {type:"fb",s:"설악산에 가___봤어요?\n(Have you been to Seoraksan?)",a:"아",opts:["아","어","해","고"],hint:"가다 has a bright vowel stem (ㅏ). Which vowel connects bright stems to 보다?"},
  {type:"fb",s:"지금 뭐 하___있어요?\n(What are you doing now?)",a:"고",opts:["고","어","아","는"],hint:"What are you doing now? Progressive: which particle links the stem to 있다?"},
  {type:"fb",s:"수영할 줄 ___?\n(Do you know how to swim?)",a:"알아요",opts:["알아요","몰라요","있어요","봤어요"],hint:"Asking about ability. 줄 알다 = know how to."},
  {type:"fb",s:"___바다가 예뻐요.\n(The blue sea is pretty.)",a:"파란",opts:["파란","파래","파랗","파래요"],hint:"파랗다 ㅎ-irregular modifier: ㅎ drops, add ㄴ. What's the modifier form?"},
  {type:"match",pairs:[{nl:"여행",en:"travel"},{nl:"예약",en:"reservation"},{nl:"출발",en:"departure"},{nl:"도착",en:"arrival"}]},
  {type:"match",pairs:[{nl:"가 봤어요",en:"have been to"},{nl:"하고 있어요",en:"am doing"},{nl:"할 줄 알아요",en:"know how to do"},{nl:"노래요",en:"is yellow"}]},
  {type:"drag_fill",s:"제주도에 {1} 봤어요. 지금 호텔에서 {2} 있어요. {3} 바다가 정말 예뻐요.\n(I have ___ to Jeju. I am ___ at the hotel now. The ___ sea is really pretty.)",blanks:{"1":"가","2":"쉬고","3":"파란"},pool:["가","먹어","쉬고","자고","파란","빨간"],hint:"Experiential, progressive, and ㅎ-irregular modifier."},
  {type:"mc",q:"여권 = 여 + 권. 여 means:",opts:["Travel","Document","Country","Person"],ans:"Travel",hint:"여 (旅) = …. 권 (券) = ticket/certificate. 여권 = … certificate = passport."},
  {type:"mc",q:"1박 2일 describes:",opts:["A 2-week vacation","A 1 night, 2 day trip","A round trip ticket","A hotel room type"],ans:"A 1 night, 2 day trip",hint:"박 = overnight stay. 일 = calendar day. Count each in the compound."},
  {type:"mc",q:"버스로 30분쯤 걸려요 means:",opts:["I rode the bus for 30 minutes","The bus costs 30 won","It takes about 30 minutes by bus","The bus stop is 30 minutes away"],ans:"It takes about 30 minutes by bus",hint:"버스로 = by …. 쯤 = about. 걸려요 = it … (duration)."},
  {type:"mc",q:"Which is ㅎ-irregular?",opts:["먹다","가다","크다","하얗다"],ans:"하얗다",hint:"ㅎ-irregulars are mostly color adjectives ending in ㅎ."},

{type:"mc",q:"버스로 서울에서 부산까지 4시간 반 걸렸어요.\n(It took 4 and a half hours from Seoul to Busan by bus.)",opts:["-로 + 에서...까지 + 걸리다","-를 + 에서...까지 + 타다","-로 + 부터...까지 + 걸리다","-로 + 에서...까지 + 가다"],ans:"-로 + 에서...까지 + 걸리다",hint:"Combine transport method, distance range, and duration verb in one sentence."},
{type:"fb",s:"한국에 와 {1} 한국 문화를 많이 배웠어요.\n(Since coming to Korea, I have learned a lot about Korean culture.)",a:["서"],opts:["서","면","는데","도"],hint:"-아/어서 (since/because): reason for learning about culture."},
{type:"drag_fill",s:"제주도에 {1} 봤는데 다음에는 경주에 {2} 싶어요.\n(I have visited Jeju but next time I want to go to Gyeongju.)",blanks:{"1":"가","2":"가고"},pool:["가","가고","간","가려고","가서","가기"],hint:"-아/어 보다 (experienced) + -고 싶다 (want to): comparing travel experiences."},
{type:"match",pairs:[{nl:"KTX로 2시간 걸려요",en:"Takes 2 hours by KTX"},{nl:"비행기로 1시간 걸려요",en:"Takes 1 hour by plane"},{nl:"버스로 4시간 걸려요",en:"Takes 4 hours by bus"},{nl:"지하철로 30분 걸려요",en:"Takes 30 minutes by subway"}]},
{type:"match",pairs:[{trg:"-로/-으로 (교통수단)",src:"by (transport method)"},{trg:"렌터카",src:"rental car"},{trg:"-(으)ㄴ 후에",src:"after doing"},{trg:"1박 2일",src:"1 night 2 days"},{trg:"ㅎ 불규칙",src:"ㅎ-irregular pattern"},{trg:"빨갛다",src:"to be red"}]},{type:"match",pairs:[{trg:"까맣다",src:"to be black"},{trg:"파랗다",src:"to be blue"}]}]},

// ═══ L11: 직업, 동물, 취미 (Jobs, Animals, Hobbies) ═══
{id:"kov2_u11l_jobs_animals_hobbies",title:"직업, 동물, 취미",icon:"🎯",xp:22,board:true,steps:[
  {type:"intro",title:"Jobs, Animals, and Hobbies",desc:"Vocabulary for three essential everyday topics: what people do for work, common animals, and popular leisure activities.",goals:["Learn 3 core profession words","Learn 3 common animal names","Learn 3 popular hobby words","Practice with production quizzes"]},

  // ── PROFESSIONS ──
  {type:"teach",kind:"word",nl:"학생",en:"student",pos:"noun",gender:null,
   note:"학 (study) + 생 (person born into). A person born into studying.",
   funFact:"Sino-Korean compound: 學 (study) + 生 (life/person). Literally 'study-person.' Korean university students are among the most hardworking in the world.",
   example:"A: 직업이 뭐예요? B: 저는 학생이에요. 대학교에 다녀요.",
   exampleEn:"A: What is your job? B: I am a student. I attend university."},

  {type:"teach",kind:"word",nl:"변호사",en:"lawyer",pos:"noun",gender:null,
   note:"변 (argue) + 호 (protect) + 사 (person of expertise). One who argues to protect.",
   funFact:"Sino-Korean compound: 辯護士. Korean legal dramas (법정 드라마) have popularized this word. The 사 (士) suffix appears in 의사 (doctor) and 요리사 (chef) too.",
   example:"A: 무슨 일을 해요? B: 변호사예요. 일을 좋아해요.",
   exampleEn:"A: What work do you do? B: I am a lawyer. I love my work."},

  {type:"teach",kind:"word",nl:"운전사",en:"driver",pos:"noun",gender:null,
   note:"운전 (driving) + 사 (person of expertise). Person who drives professionally.",
   funFact:"운전 (運轉) means 'to operate a vehicle.' The 사 (士) suffix marks a skilled professional, the same as in 의사 and 변호사.",
   example:"A: 아버지 직업이 뭐예요? B: 버스 운전사예요. 매일 일찍 일어나요.",
   exampleEn:"A: What is your father's job? B: He is a bus driver. He wakes up early every day."},

  // ── ANIMALS ──
  {type:"teach",kind:"word",nl:"개",en:"dog",pos:"noun",gender:null,
   note:"Pure Korean (not Sino-Korean). One syllable, very frequent in daily speech.",
   funFact:"Korea has one of the highest rates of pet dog ownership in Asia. The phrase 개가 짖다 (a dog barks) appears in proverbs. Do not confuse 개 (dog) with the prefix 개- which intensifies adjectives informally.",
   example:"A: 동물을 좋아해요? B: 네, 개를 좋아해요. 정말 귀여워요.",
   exampleEn:"A: Do you like animals? B: Yes, I like dogs. They are really cute."},

  {type:"teach",kind:"word",nl:"고양이",en:"cat",pos:"noun",gender:null,
   note:"Pure Korean, three syllables. The informal shortened form 냥이 is heard in casual speech.",
   funFact:"고양이 is thought to derive from an older Korean word. Cat cafes (고양이 카페) are hugely popular in Korean cities. Cats are called 냐옹 (meow) in Korean onomatopoeia.",
   example:"A: 개를 좋아해요? 아니면 고양이요? B: 저는 고양이를 좋아해요.",
   exampleEn:"A: Do you like dogs or cats? B: I like cats."},

  {type:"teach",kind:"word",nl:"토끼",en:"rabbit",pos:"noun",gender:null,
   note:"Pure Korean. The ㄲ (double consonant) gives it a sharper pronunciation than 토기 would.",
   funFact:"In Korean mythology, a rabbit lives on the moon and pounds rice cakes (떡). This image appears on the moon during 추석 (Chuseok, harvest festival). Children are taught to look for 달 토끼 (moon rabbit).",
   example:"A: 어떤 동물을 좋아해요? B: 토끼를 좋아해요. 귀엽잖아요!",
   exampleEn:"A: What animals do you like? B: I like rabbits. They are so cute!"},

  // ── HOBBIES ──
  {type:"teach",kind:"word",nl:"축구",en:"soccer",pos:"noun",gender:null,
   note:"축 (kick) + 구 (ball). The foot-kicking ball game.",
   funFact:"Sino-Korean: 蹴球. Korea co-hosted the 2002 FIFA World Cup with Japan, and the national team's run to the semi-finals is still celebrated as 4강 신화 (the miracle of the final four). 축구 is the most popular team sport in Korea.",
   example:"A: 취미가 뭐예요? B: 축구예요. 주말마다 해요.",
   exampleEn:"A: What is your hobby? B: Soccer. I play every weekend."},

  {type:"teach",kind:"word",nl:"영화",en:"movie / film",pos:"noun",gender:null,
   note:"영 (shadow/image) + 화 (picture). A moving shadow picture.",
   funFact:"Sino-Korean: 映畫. The Korean film industry (한국 영화) earned global fame with 기생충 (Parasite, 2019), the first non-English film to win the Academy Award for Best Picture. Cinema-going (영화관 가기) is one of the top date activities in Korea.",
   example:"A: 무슨 취미가 있어요? B: 영화 보기를 좋아해요.",
   exampleEn:"A: What hobbies do you have? B: I like watching movies."},

  {type:"teach",kind:"word",nl:"음악",en:"music",pos:"noun",gender:null,
   note:"음 (sound/note) + 악 (music). The art of organized sound.",
   funFact:"Sino-Korean: 音樂. K-pop (케이팝) has made 음악 one of Korea's most powerful cultural exports. The word covers all music genres: 클래식 음악 (classical), 팝 음악 (pop), 국악 (traditional Korean music).",
   example:"A: 어떤 취미가 있어요? B: 음악 듣기를 좋아해요. 케이팝을 좋아해요.",
   exampleEn:"A: What hobbies do you have? B: I like listening to music. I like K-pop."},

  // ── TIP ──
  {type:"tip",title:"직업 endings: -사 and -생",text:"Korean profession words often end in -사 (士/師: skilled person) or -생 (生: person).\n\n-사 pattern:\n변호사: lawyer\n의사: doctor\n간호사: nurse\n요리사: chef\n운전사: driver\n\n-생 pattern:\n학생: student (study-person)\n\nSpotting these suffixes helps you recognize new job words instantly.",
   deepDive:{title:"More -사 professions",text:"The -사 suffix marks professional expertise across many fields:\n\n건축사: architect\n약사: pharmacist\n교사: teacher (formal)\n\nNote: 선생님 is the everyday word for 'teacher.' 교사 is the formal title used on official documents and job listings."}},

  // ── QUIZZES ──
  {type:"mc",q:"학생 = 학 + 생. 학 means:",opts:["Study","Person","Work","School"],ans:"Study",hint:"학 (學) = formal learning/learning. 학교 = school, 학생 = student."},

  {type:"mc",q:"Which suffix means 'skilled professional'?",opts:["-생","-사","-어","-도"],ans:"-사",hint:"The -사 (士) suffix appears in 변호사, 의사, 요리사, 운전사."},

  {type:"fb",s:"저는 버스 ___예요. 매일 일찍 일어나요.\n(I am a bus driver. I wake up early every day.)",a:"운전사",opts:["운전사","변호사","학생","간호사"],hint:"운전 = driving. Which profession drives professionally?"},

  {type:"fb",s:"저는 법 관련 일을 해요. 저는 ___예요.\n(I do law-related work. I am a ___.) ",a:"변호사",opts:["변호사","운전사","학생","의사"],hint:"변 (argue) + 호 (protect) + 사 = the legal profession."},

  {type:"mc",q:"고양이 카페 means:",opts:["A dog park","A coffee shop that serves cats","A cafe themed around cats","A pet hospital"],ans:"A cafe themed around cats",hint:"고양이 = cat. 카페 = …. Very popular in Korean cities."},

  {type:"match",pairs:[{nl:"학생",en:"student"},{nl:"변호사",en:"lawyer"},{nl:"운전사",en:"driver"},{nl:"개",en:"dog"}]},

  {type:"match",pairs:[{nl:"고양이",en:"cat"},{nl:"토끼",en:"rabbit"},{nl:"축구",en:"soccer"},{nl:"음악",en:"music"}]},

  {type:"fb",s:"저는 ___를 좋아해요. 케이팝을 자주 들어요.\n(I like ___. I often listen to K-pop.)",a:"음악",opts:["음악","영화","축구","토끼"],hint:"음 (sound) + 악 (music). The art of organized sound."},

  {type:"fb",s:"주말에 친구들하고 ___를 해요. 운동을 좋아해요.\n(On weekends I play ___ with friends. I like exercise.)",a:"축구",opts:["축구","영화","음악","변호사"],hint:"축 (kick) + 구 (ball). Korea's most popular team sport."},

  {type:"mc",q:"영화 = 영 + 화. 화 means:",opts:["Screen","Camera","Shadow","Picture"],ans:"Picture",hint:"화 (畫) = …/drawing. 영화 = shadow … = movie."},

  {type:"drag_fill",s:"A: 취미가 뭐예요? B: {1} 보기를 좋아해요. 그리고 {2}도 들어요.\nA: What is your hobby? B: I like watching ___. I also listen to ___.",blanks:{"1":"영화","2":"음악"},pool:["영화","음악","축구","토끼","변호사","학생"],hint:"Think: watch something, listen to something."},

  {type:"mc",q:"달 토끼 refers to:",opts:["A rabbit in moon mythology","A type of white chocolate","A rabbit racing game","A rabbit that lives by the sea"],ans:"A rabbit in moon mythology",hint:"달 = one of Korea's most poetic celestial words. What legendary creature lives there in Korean folklore?"},

  {type:"fb",s:"A: 집에 동물이 있어요? B: 네, ___가 있어요. 이름이 초코예요.\n(A: Do you have animals? B: Yes, I have a ___. Its name is Choco.)",a:"개",opts:["개","고양이","토끼","물고기"],hint:"개 = dog. One syllable, pure Korean."},
]},

]};

export default UNIT_11;
