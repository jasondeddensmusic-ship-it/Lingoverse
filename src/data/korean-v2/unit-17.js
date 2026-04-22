// Korean V2 Unit 17, 뉴스를 봤어요
// Level: B1.2

const UNIT_17 =
{n:17,lang:"ko",srcLang:"en",track:"v2",title:"뉴스를 봤어요",sub:"Passive & Causative",icon:"📰",level:"B1.2",color:"#7B5EE8",lessons:[

// ── L1: 뉴스 어휘 (News Vocabulary) ──
{id:"kou17l1",title:"뉴스 어휘",icon:"📺",xp:22,board:true,steps:[
{type:"intro",title:"Korean News & Media",desc:"뉴스\n→ news\n\nKorea's vibrant media landscape.\nTV, online news, and current events.",goals:["Learn 8 news/media words","Talk about current events","Understand Korean media landscape","Use news vocabulary naturally"]},
{type:"teach",nl:"뉴스",en:"news",pos:"noun",gender:null,funFact:"Loanword from English \"news.\" Korean adapted it using Hangul phonetics.",phonetic:"nyu-seu",example:"A: 오늘 뉴스 봤어요? B: 네, 아침에 봤어요. 큰 사건이 있었어요. A: 어떤 사건이요? 무슨 일이에요? B: 교통사고가 났대요. 다행히 다친 사람은 없었어요. A: 정말요? 어디서 났어요?",exampleEn:"A: Did you watch the news today? B: Yes, I watched it this morning. There was a big incident. A: What incident? What happened? B: They said there was a traffic accident. Luckily no one was hurt. A: Really? Where did it happen?",note:"Konglish from English 'news.'\n뉴스를 보다 = to watch the news.",kind:"noun"},
{type:"teach",nl:"기사",en:"news article",pos:"noun",gender:null,funFact:"Sino-Korean compound: 기(record/記) + 사(matter/事)",phonetic:"gi-sa",note:"COMPOUND: 기(record/記) + 사(matter/事).\nRecord-matter = news article.",kind:"noun"},
{type:"teach",nl:"사건",en:"incident, event",pos:"noun",gender:null,funFact:"Sino-Korean compound: 사(matter/事) + 건(matter/件)",phonetic:"sa-geon",note:"COMPOUND: 사(matter/事) + 건(matter/件).\nMatter-matter = incident/event.",kind:"noun"},
{type:"teach",nl:"사고",en:"accident",pos:"noun",gender:null,funFact:"Sino-Korean compound: 사(matter/事) + 고(event/故)",phonetic:"sa-go",note:"COMPOUND: 사(matter/事) + 고(event/故).\n교통사고 = traffic accident.",kind:"noun"},
{type:"teach",nl:"경제",en:"economy",pos:"noun",gender:null,funFact:"From hanja: 經 (manage) + 濟 (help). Managing help = economy.",phonetic:"gyeong-je",note:"COMPOUND: 경(manage/經) + 제(aid/濟).\nManage-aid = economy.",kind:"noun"},
{type:"teach",nl:"정치",en:"politics",pos:"noun",gender:null,funFact:"From hanja: 政 (govern) + 治 (rule). Governing rule = politics.",phonetic:"jeong-chi",note:"COMPOUND: 정(govern/政) + 치(manage/治).\nGovern-manage = politics.",kind:"noun"},
{type:"teach",nl:"사회",en:"society",pos:"noun",gender:null,funFact:"Sino-Korean compound: 사(company/社) + 회(gather/會)",phonetic:"sa-hoe",note:"COMPOUND: 사(company/社) + 회(gather/會).\nCompany-gather = society.",kind:"noun"},
{type:"teach",nl:"환경",en:"environment",pos:"noun",gender:null,funFact:"From hanja: 環 (ring) + 境 (border). Ring border = environment.",phonetic:"hwan-gyeong",note:"COMPOUND: 환(surround/環) + 경(boundary/境).\nSurround-boundary = environment.",kind:"noun"},
{type:"mc",q:"기사 in a news context means:",opts:["News article","Reporter","Newspaper","Television"],ans:"News article",hint:"기(record) + 사(matter) = a recorded matter = …."},
{type:"match",pairs:[{nl:"경제",en:"economy"},{nl:"정치",en:"politics"},{nl:"사회",en:"society"},{nl:"환경",en:"environment"}]},
{type:"mc",q:"교통사고 means:",opts:["Traffic jam","Traffic accident","Bus stop","Train station"],ans:"Traffic accident",hint:"교통 = …. 사고 = …."},
{type:"fb",s:"오늘 뉴스에서 큰 {1}이 있었다고 해요.\n(Today's news said there was a big ___.)",a:"사건",opts:["사건","뉴스","기사","사회"],hint:"What kind of big thing happens in the news? Think breaking news."},
{type:"drag_fill",s:"이 {1}에 경제 {2}가 많이 나와요.\n(This ___ has many economy ___.)",blanks:{"1":"뉴스","2":"기사"},pool:["뉴스","기사","사건","사고","정치"],hint:"This news has many economy articles."},
{type:"mc",q:"환경 문제 means:",opts:["Economic crisis","Social problem","Environmental issue","Political debate"],ans:"Environmental issue",hint:"환경 = environment. 문제 = problem/…."},
{type:"fb",s:"한국 {1}이 최근에 많이 변했어요.\n(Korean ___ has changed a lot recently.)",a:"사회",opts:["사회","경제","정치","환경"],hint:"What broad concept describes how people live together? 사(company) + 회(gather)."},
{type:"match",pairs:[{nl:"뉴스",en:"news"},{nl:"기사",en:"article"},{nl:"사건",en:"incident"},{nl:"사고",en:"accident"}]},

{type:"fb",s:"정치 {1}를 매일 읽어요.\n(I read political ___ every day.)",a:"기사",opts:["기사","사건","뉴스","사고"],hint:"What do you read in a newspaper? Individual written pieces."},
{type:"mc",q:"사회 환경 문제가 뉴스에서 보도됐어요.\n(Social environmental issues were reported.)\nHow many Sino-Korean compound words?",opts:["Five","Three","Two","Four: 사회, 환경, 문제, 보도"],ans:"Four: 사회, 환경, 문제, 보도",hint:"Count the compound words built from hanja roots."},
{type:"drag_fill",s:"어제 큰 교통 {1}가 났어요. 오늘 {2}에서 그 {3}을 봤어요.\n(Yesterday a big traffic ___ happened. Today I saw that ___ on the ___.)",blanks:{"1":"사고","2":"뉴스","3":"기사"},pool:["사고","뉴스","기사","사건","정치","환경"],hint:"Traffic + accident. Written report on broadcast media."},
]},

// ── L2: 피동 (Passive Voice) ──
{id:"kou17l2",title:"피동 (Passive)",icon:"🔄",xp:26,board:true,steps:[
{type:"intro",title:"Korean Passive Voice",desc:"문이 열렸어요.\n→ The door was opened.\n\nKorean passive uses suffix changes.\nNot 'be + past participle' like English.",goals:["Understand Korean passive suffixes","Learn -이/히/리/기 passive forms","Convert active to passive","Use passive in news contexts"]},
{type:"tip",title:"Passive Suffixes: -이/히/리/기",text:"Korean passives change the VERB ITSELF:\n\nActive → Passive (suffix)\n보다 → 보이다 (-이) = be seen\n잡다 → 잡히다 (-히) = be caught\n열다 → 열리다 (-리) = be opened\n잠그다 → 잠기다 (-기) = be locked\n\nNo pattern for which suffix to use.\nYou must memorize each pair.\nBut groups of similar stems often\nshare the same suffix.",deepDive:"The four passive suffixes:\n\n-이: 보다→보이다, 쓰다→쓰이다, 놓다→놓이다\n-히: 잡다→잡히다, 읽다→읽히다, 먹다→먹히다\n-리: 열다→열리다, 팔다→팔리다, 들다→들리다\n-기: 잠그다→잠기다, 끊다→끊기다, 안다→안기다\n\nTrends (not rules):\nㅂ stems often take -히\nㄹ stems often take -리\nBut exceptions are common."},
{type:"teach",nl:"열리다",en:"to be opened",pos:"verb",gender:null,funFact:"From hanja: 熱 (hot/heat) + 理 (reason/principle) + 多 (many).",phonetic:"yeol-li-da",example:"A: 문이 왜 열려 있어요? B: 바람 때문에 열린 것 같아요. A: 잠가야 하지 않아요? 위험해요. B: 맞아요. 제가 닫을게요. A: 고마워요. 밤에는 꼭 잠그세요.",exampleEn:"A: Why is the door open? B: I think it opened because of the wind. A: Shouldn't we lock it? It's dangerous. B: You're right. I'll close it. A: Thanks. Make sure to lock it at night.",note:"Passive of 열다 (to open).\n문이 열렸어요 = The door was opened.\nSuffix: -리.",kind:"verb"},
{type:"teach",nl:"잡히다",en:"to be caught",pos:"verb",gender:null,funFact:"Passive of 잡다 (to catch).",phonetic:"jap-hi-da",example:"A: 그 범인이 잡혔대요? B: 네, 어제 밤에 잡혔어요. A: 어디서 잡혔어요? B: 부산에서 잡혔대요. 도망가다가 잡혔어요. A: 다행이에요. 이제 안심이에요.",exampleEn:"A: Did they say the criminal was caught? B: Yes, they were caught last night. A: Where were they caught? B: They said in Busan. They were caught while fleeing. A: That's a relief. I feel safe now.",note:"Passive of 잡다 (to catch).\n범인이 잡혔어요 = The criminal was caught.\nSuffix: -히.",kind:"verb"},
{type:"teach",nl:"보이다",en:"to be seen, to be visible",pos:"verb",gender:null,funFact:"Passive of 보다 (to see).",phonetic:"bo-i-da",example:"A: 저기 뭐가 보여요? B: 산이 보여요. 날씨가 맑아서 잘 보여요. A: 정말 예쁘네요. 서울에서는 안 보이잖아요. B: 맞아요. 공기가 깨끗할 때만 보여요. A: 사진 찍어도 돼요?",exampleEn:"A: What do you see over there? B: I can see the mountain. It's clear so it's very visible. A: It's really pretty. You can't see it from Seoul. B: Right. It's only visible when the air is clean. A: Can I take a photo?",note:"Passive of 보다 (to see).\n산이 보여요 = The mountain is visible.\nSuffix: -이.",kind:"verb"},
{type:"teach",nl:"들리다",en:"to be heard",pos:"verb",gender:null,funFact:"Passive of 듣다 (to hear).",phonetic:"deul-li-da",example:"A: 이 노래 들려요? B: 네, 어디서 들리는 거예요? A: 옆집에서 들려요. 매일 밤에 음악이 들려요. B: 시끄럽지 않아요? A: 괜찮아요. 좋은 노래라서요.",exampleEn:"A: Can you hear this song? B: Yes, where is it coming from? A: It's coming from next door. I hear music every night. B: Isn't it noisy? A: It's fine. It's a good song.",note:"Passive of 듣다 (to hear). (ㄷ→ㄹ first)\n소리가 들려요 = A sound is heard.\nSuffix: -리.",kind:"verb"},
{type:"mc",q:"문이 열렸어요 means:",opts:["The door was opened","I opened the door","Open the door","The door is opening"],ans:"The door was opened",hint:"열리다 is passive. The … is the subject of the passive sentence."},
{type:"fb",s:"멀리서 음악이 {1}.\n(Music is ___ from far away.)",a:"들려요",opts:["들려요","들어요","들리세요","듣어요"],hint:"Music is received by your ears, not actively listened to. Which passive form fits?"},
{type:"mc",q:"Active: 경찰이 범인을 잡았어요. Passive:",opts:["범인을 잡혔어요","범인이 잡혔어요","경찰이 잡혔어요","범인이 잡아요"],ans:"범인이 잡혔어요",hint:"The criminal is now the subject receiving the action. Which passive ending fits 잡다?"},
{type:"fb",s:"여기서 한라산이 {1}.\n(Hallasan is ___ from here.)",a:"보여요",opts:["보여요","봐요","보이세요","보는데"],hint:"The mountain is visible, not actively watched. Which passive form of 보다?"},
{type:"tip",title:"Active vs Passive Structure",text:"Active: [Subject]이/가 [Object]을/를 verb\n경찰이 범인을 잡았어요.\nPolice caught the criminal.\n\nPassive: [Subject]이/가 passive-verb\n범인이 잡혔어요.\nThe criminal was caught.\n\nThe object becomes the subject.\nThe original subject is often dropped."},
{type:"mc",q:"이 책이 많이 읽혔어요 means:",opts:["This book reads a lot","I read this book a lot","This book was read a lot","Read this book a lot"],ans:"This book was read a lot",hint:"읽다 → 읽히다 (passive). The … is the subject being …."},
{type:"match",pairs:[{nl:"열다 → 열리다",en:"open → be opened"},{nl:"잡다 → 잡히다",en:"catch → be caught"},{nl:"보다 → 보이다",en:"see → be seen"},{nl:"듣다 → 들리다",en:"hear → be heard"}]},
{type:"fb",s:"이 제품이 한국에서 많이 {1}.\n(This product is ___ a lot in Korea.)",a:"팔려요",opts:["팔려요","팔아요","파는데","팔거든요"],hint:"The product isn't selling itself actively. It's being sold. Which passive form?"},
{type:"drag_fill",s:"문이 {1}. 범인이 {2}.\n(The door was ___. The criminal was ___.)",blanks:{"1":"열렸어요","2":"잡혔어요"},pool:["열렸어요","잡혔어요","보였어요","들렸어요","팔렸어요"],hint:"Both sentences use passive voice. What happened to the door? To the criminal?"},
{type:"mc",q:"Which is NOT a passive suffix?",opts:["리 (open → be opened)","이 (see → be seen)","히 (catch → be caught)","-서 (and so)"],ans:"-서 (and so)",hint:"Not all Korean connectors mark passive. The passive voice uses specific suffixes."},

{type:"teach",nl:"끊기다",en:"to be cut off, disconnected",pos:"verb",gender:null,funFact:"Passive of 끊다 (to cut).",phonetic:"kkeun-gi-da",example:"A: 여보세요? 아까 전화가 끊겼어요. B: 네, 지하철이라서 끊겼나 봐요. A: 다시 연결됐네요. 뭐라고 하셨어요? B: 회의 시간이 바뀌었다고 했어요. A: 아, 알겠어요. 감사합니다.",exampleEn:"A: Hello? The call got cut off earlier. B: Yes, I think it dropped because of the subway. A: We're connected again. What were you saying? B: I said the meeting time changed. A: Ah, I see. Thank you.",note:"Passive of 끊다 (to cut).\n전화가 끊겼어요 = The call was cut off.\nSuffix: -기.",kind:"verb"},
{type:"fb",s:"전화가 갑자기 {1}.\n(The phone call was suddenly ___.)",a:"끊겼어요",opts:["끊겼어요","끊었어요","끊어요","끊기세요"],hint:"The call was disconnected. Which passive form?"},
{type:"mc",q:"뉴스에서 새로운 사건이 보도됐어요.\n(A new incident was reported.)\n보도되다 is passive because:",opts:["The incident receives the action of being reported","The incident reports itself","Someone reports actively","It describes the future"],ans:"The incident receives the action of being reported",hint:"The subject is not doing the reporting."},
{type:"fb",s:"이 노래가 라디오에서 많이 {1}.\n(This song is ___ a lot on the radio.)",a:"들려요",opts:["들려요","들어요","듣어요","들리세요"],hint:"The song is received by ears. Which passive form?"},
{type:"drag_fill",s:"뉴스에서 큰 사건이 {1}. 범인이 {2}. 전 국민에게 {3}.\n(A big incident was ___. The criminal was ___. It was ___ to the nation.)",blanks:{"1":"보도됐어요","2":"잡혔어요","3":"알려졌어요"},pool:["보도됐어요","잡혔어요","알려졌어요","보도했어요","잡았어요","알렸어요"],hint:"Three passive sentences: reported, caught, made known."},
]},

// ── L3: 사동 (Causative Voice) ──
{id:"kou17l3",title:"사동 (Causative)",icon:"➡️",xp:24,board:true,steps:[
{type:"intro",title:"Making Someone Do Something",desc:"Causative: make/let someone act.\n\n아이를 먹이다.\n→ Feed the child. (Make eat.)\n\nCausative suffixes overlap with passive.",goals:["Understand Korean causative","Learn -이/히/리/기/우/추 causatives","Distinguish from passive","Use in everyday contexts"]},
{type:"tip",title:"Causative Suffixes",text:"Causatives MAKE or LET someone do something:\n\n먹다 → 먹이다 (-이) = feed (make eat)\n읽다 → 읽히다 (-히) = make read\n알다 → 알리다 (-리) = inform (make know)\n웃다 → 웃기다 (-기) = make laugh\n자다 → 재우다 (-우) = put to sleep\n낮다 → 낮추다 (-추) = lower (make low)\n\nSame suffixes as passive, PLUS -우 and -추!\nContext tells you passive vs causative.",deepDive:"Passive vs Causative with same suffix:\n\n보이다: passive = be seen / causative = show\n먹이다: causative only = feed\n읽히다: passive = be read / causative = make read\n\nHow to tell apart:\nPassive: subject receives action\n문이 열리다 = door is opened\n\nCausative: subject causes action\n아이를 먹이다 = feed the child\n\nThe sentence structure reveals which one."},
{type:"teach",nl:"먹이다",en:"to feed (make eat)",pos:"verb",gender:null,funFact:"Korean verbs don't change for person or number. \"I go\" and \"they go\" use the same verb form.",phonetic:"meog-i-da",example:"A: 아기한테 밥 먹였어요? B: 네, 방금 먹였어요. 잘 먹었어요. A: 다행이에요. 어제는 안 먹으려고 했잖아요. B: 오늘은 좋아하는 반찬이 있어서 잘 먹었어요. A: 그렇군요. 내일도 그 반찬 만들어요.",exampleEn:"A: Did you feed the baby? B: Yes, I just fed them. They ate well. A: That's good. Yesterday they didn't want to eat. B: Today there was a side dish they like so they ate well. A: I see. Let's make that side dish tomorrow too.",note:"Causative of 먹다.\n아이에게 밥을 먹여요.\n= I feed the child rice.",kind:"verb"},
{type:"teach",nl:"웃기다",en:"to make laugh",pos:"verb",gender:null,funFact:"Causative of 웃다 (to laugh).",phonetic:"ut-gi-da",example:"A: 어제 본 영화 어땠어요? B: 정말 웃겼어요. 계속 웃었어요. A: 그래요? 저도 보고 싶어요. B: 같이 볼래요? 한 번 더 봐도 웃길 것 같아요. A: 좋아요. 이번 주말에 봐요.",exampleEn:"A: How was the movie you saw yesterday? B: It was really funny. I kept laughing. A: Really? I want to see it too. B: Want to watch it together? I think it'll be funny even a second time. A: Sure. Let's watch it this weekend.",note:"Causative of 웃다 (to laugh).\n이 영화가 웃겨요.\n= This movie is funny (makes you laugh).",kind:"verb"},
{type:"teach",nl:"알리다",en:"to inform, to notify",pos:"verb",gender:null,funFact:"Causative of 알다 (to know).",phonetic:"al-li-da",example:"A: 회의 시간이 바뀌었어요. 다른 사람들에게 알려 주세요. B: 네, 바로 알릴게요. 몇 시로 바뀌었어요? A: 3시에서 4시로 바뀌었어요. B: 알겠어요. 지금 단톡방에 알릴게요. A: 감사합니다. 빨리 알려 주세요.",exampleEn:"A: The meeting time changed. Please inform the others. B: Yes, I'll let them know right away. What time did it change to? A: It changed from 3 to 4. B: Got it. I'll notify them in the group chat now. A: Thank you. Please let them know quickly.",note:"Causative of 알다 (to know).\nMake someone know = inform.\n소식을 알려요 = I inform/notify.",kind:"verb"},
{type:"teach",nl:"재우다",en:"to put to sleep",pos:"verb",gender:null,funFact:"Causative of 자다 (to sleep).",phonetic:"jae-u-da",example:"A: 아기 재웠어요? B: 아직이요. 안 자려고 해요. A: 자장가 불러 줘 볼까요? B: 좋은 생각이에요. 어제도 자장가 들으면서 잠들었어요. A: 그러면 제가 불러 줄게요.",exampleEn:"A: Did you put the baby to sleep? B: Not yet. They don't want to sleep. A: Should we try singing a lullaby? B: Good idea. Yesterday they fell asleep listening to a lullaby too. A: Then I'll sing one.",note:"Causative of 자다 (to sleep).\n아이를 재워요 = I put the child to sleep.\nSuffix: -우.",kind:"verb"},
{type:"mc",q:"먹이다 means:",opts:["To feed (make someone eat)","To be eaten","To eat a lot","To stop eating"],ans:"To feed (make someone eat)",hint:"Causative: create … take / consume (food) = …."},
{type:"fb",s:"이 코미디가 정말 {1}.\n(This comedy really ___ you laugh.)",a:"웃겨요",opts:["웃겨요","웃어요","웃기세요","웃는데"],hint:"This comedy really makes you laugh. 웃기다 = causative of 웃다."},
{type:"mc",q:"알리다 comes from 알다 (know). 알리다 means:",opts:["To be known","To inform (make someone know)","To forget","To not know"],ans:"To inform (make someone know)",hint:"알리다 adds the -리 causative suffix to a verb of perception."},
{type:"fb",s:"아기를 {1}. 이제 자요.\n(I ___ the baby to sleep. Now sleeping.)",a:"재웠어요",opts:["재웠어요","잤어요","자려고요","자면서"],hint:"I put the baby to sleep. They're sleeping now. 재우다 = causative of 자다."},
{type:"mc",q:"Passive 보이다 (be seen) vs Causative 보이다 (show). How to tell apart?",opts:["Passive is formal, causative is casual","They're always the same","By sentence structure: subject receives action (passive) vs causes action (causative)","You can't tell"],ans:"By sentence structure: subject receives action (passive) vs causes action (causative)",hint:"산이 보여요 vs 사진을 보여요. Which noun is receiving, and which is causing?"},
{type:"teach",nl:"낮추다",en:"to lower, to reduce",pos:"verb",gender:null,funFact:"Causative of 낮다 (to be low).",phonetic:"nat-chu-da",example:"A: 음악 소리 좀 낮춰 주세요. B: 아, 죄송해요. 너무 컸어요? A: 네, 아기가 자고 있거든요. B: 알겠어요. 바로 낮출게요. A: 감사합니다. 좀 있다가 깨면 괜찮아요.",exampleEn:"A: Please lower the music volume. B: Oh, sorry. Was it too loud? A: Yes, the baby is sleeping. B: Got it. I'll lower it right away. A: Thank you. It's fine once they wake up later.",note:"Causative of 낮다 (to be low).\n소리를 낮춰요 = Lower the volume.\nSuffix: -추.",kind:"verb"},
{type:"fb",s:"소리를 {1}. 아기가 자고 있어요.\n(___ the volume. The baby is sleeping.)",a:"낮춰요",opts:["낮춰요","낮아요","낮게요","낮히요"],hint:"Lower the volume. The baby is sleeping. 낮추다 = causative."},
{type:"match",pairs:[{nl:"먹이다 (causative)",en:"feed"},{nl:"웃기다 (causative)",en:"make laugh"},{nl:"알리다 (causative)",en:"inform"},{nl:"재우다 (causative)",en:"put to sleep"}]},
{type:"drag_fill",s:"엄마가 아이에게 밥을 {1}. 그리고 아이를 {2}.\n(Mom ___ the child rice. And ___ the child to sleep.)",blanks:{"1":"먹여요","2":"재워요"},pool:["먹여요","재워요","먹어요","자요","알려요"],hint:"Mom feeds the child rice. And puts the child to sleep."},
{type:"mc",q:"뉴스에서 사건을 알렸어요. 알리다 is used because:",opts:["The news asked about it","The news was known (passive)","People already knew","The news informed (made people know)"],ans:"The news informed (made people know)",hint:"뉴스에서 is the source of the action. Is the broadcast receiving something, or causing something?"},

{type:"teach",nl:"높이다",en:"to raise, to increase",pos:"verb",gender:null,funFact:"Causative of 높다 (to be high).",phonetic:"nop-i-da",example:"A: 우리 제품의 품질을 높여야 해요. B: 맞아요. 고객들이 불만이 많아요. A: 어떻게 하면 좋을까요? B: 먼저 재료의 질을 높이면 좋겠어요. A: 좋은 생각이에요. 비용은 좀 올라도 괜찮아요.",exampleEn:"A: We need to raise our product quality. B: Right. Customers have many complaints. A: What should we do? B: First, I think we should raise the quality of materials. A: Good idea. It's okay even if costs go up a bit.",note:"Causative of 높다 (to be high).\n품질을 높여요 = Raise the quality.\nSuffix: -이.",kind:"verb"},
{type:"fb",s:"품질을 {1}. 더 좋은 제품을 만들어요.\n(We ___ the quality. We make better products.)",a:"높여요",opts:["높여요","높아요","높은데","높으면"],hint:"Raise the quality. Which causative form?"},
{type:"mc",q:"보이다 can be passive (be seen) or causative (show).\n사진을 보여 줬어요 means:",opts:["Showed the photo (causative)","The photo was seen (passive)","Looked at the photo","Will show the photo"],ans:"Showed the photo (causative)",hint:"Object + … = … use."},
{type:"fb",s:"선생님이 학생들에게 새 단어를 {1}.\n(The teacher ___ new words to the students.)",a:"알려 줬어요",opts:["알려 줬어요","알았어요","알게요","알려졌어요"],hint:"The teacher made students know. Causative + benefactive."},
{type:"drag_fill",s:"엄마가 아이를 {1}. 그리고 소리를 {2}. 아이가 잘 {3}.\n(Mom ___ the child to sleep. And ___ the volume. The child sleeps well.)",blanks:{"1":"재웠어요","2":"낮췄어요","3":"자요"},pool:["재웠어요","낮췄어요","자요","재워요","잤어요","낮아요"],hint:"Put to sleep (causative). Lowered volume (causative). Sleeps (active)."},
]},

// ── L3b: -다가 (While Doing, Then) ──
{id:"kou17l3b",title:"-다가: 먹다가",icon:"🔀",xp:22,board:true,steps:[
  {type:"intro",title:"While Doing, Then: -다가",desc:"밥을 먹다가 전화를 받았어요.\n→ While eating, I got a phone call.\n\nOne action interrupted by another.",goals:["Use -다가 for interrupted actions","Express action switches mid-stream","Distinguish from -면서 (simultaneous)","Use in news/daily contexts"]},
  {type:"tip",title:"Interruption: -다가",text:"-다가: doing A, then switched to B.\nAction A was interrupted or abandoned.\n\nVerb stem + 다가:\n먹다 → 먹다가\n보다 → 보다가\n걷다 → 걷다가\n공부하다 → 공부하다가\n\nThe subject usually stays the same.",deepDive:{title:"-다가 vs -면서",text:"-면서: two actions AT THE SAME TIME.\n음악을 들으면서 공부해요.\nI study while listening to music.\n(Both continue together.)\n\n-다가: action A then SWITCH to B.\n공부하다가 잠들었어요.\nWhile studying, I fell asleep.\n(Studying stopped. Sleeping started.)\n\n-면서 = simultaneous, parallel.\n-다가 = sequential, one replaces other.\n\n-다가 often implies the switch was\nunplanned or unexpected."}},
  {type:"teach",kind:"grammar",nl:"-다가",en:"while doing (then switched to)",pos:"part",gender:null,funFact:"Korean particles attach after nouns to mark their role. No equivalent in English.",example:"밥을 먹다가 전화를 받았어요.",exampleEn:"While eating, I got a phone call.",note:"-다가: while doing A, then B.\n\nVerb stem + 다가.\nAction A interrupted or switched.\nUsually same subject."},
  {type:"mc",q:"밥을 먹다가 전화를 받았어요 means:",opts:["While eating, I got a phone call","After eating, I made a call","I ate and then called","I called while eating"],ans:"While eating, I got a phone call",hint:"-다가 = … doing, then. … was interrupted by the …."},
  {type:"fb",s:"공부하{1} 잠들었어요.\n(While studying, I fell asleep.)",a:"다가",opts:["다가","면서","고","서"],hint:"Studying was interrupted by falling asleep. Which connector shows a mid-action switch?"},
  {type:"mc",q:"TV를 보다가 나갔어요 means:",opts:["I watched TV and went out","While watching TV, I went out","After watching TV, I went out","I watch TV outside"],ans:"While watching TV, I went out",hint:"-다가 = switched actions. Was … TV, then left."},
  {type:"fb",s:"걷{1} 넘어졌어요.\n(While walking, I fell down.)",a:"다가",opts:["다가","으면서","고","어서"],hint:"Walking interrupted by falling. Which connector shows an action cut short?"},
  {type:"teach",kind:"phrase",nl:"운전하다가 사고가 났어요",en:"while driving, an accident happened",pos:"intj",gender:null,funFact:"News often uses -다가 for incidents.",example:"고속도로에서 운전하다가 사고가 났어요.",exampleEn:"While driving on the highway, an accident happened.",note:"News often uses -다가 for incidents.\n운전하다가 = while driving."},
  {type:"mc",q:"Which means 'while running, I got hurt'?",opts:["뛰고 다쳤어요","뛰면서 다쳤어요","뛰다가 다쳤어요","뛰어서 다쳤어요"],ans:"뛰다가 다쳤어요",hint:"-다가 = action interrupted. Running was interrupted by getting hurt."},
  {type:"match",pairs:[{nl:"먹다가",en:"while eating (then...)"},{nl:"걷다가",en:"while walking (then...)"},{nl:"자다가",en:"while sleeping (then...)"},{nl:"일하다가",en:"while working (then...)"}]},
  {type:"fb",s:"뉴스를 보{1} 잠들었어요.\n(While watching the news, I fell asleep.)",a:"다가",opts:["다가","면서","고 나서","ㄴ 후에"],hint:"Watching was interrupted by sleeping. Which connector marks an interrupted action?"},
  {type:"mc",q:"비가 오다가 갑자기 멈췄어요 means:",opts:["If it rains, it will stop","Because it rained, it stopped","After raining, it stopped","It was raining, then suddenly stopped"],ans:"It was raining, then suddenly stopped",hint:"-다가 = switched states. Rain … mid-action."},
  {type:"fb",s:"서울에서 살{1} 부산으로 이사했어요.\n(I was living in Seoul, then moved to Busan.)",a:"다가",opts:["다가","면서","아서","고"],hint:"Living in Seoul was interrupted by moving. Which connector shows a life change?"},
  {type:"drag_fill",s:"뉴스 기사를 {1} 모르는 단어가 {2}. 사전을 {3}.\n(While reading a news article, I came across an unknown word. I looked it up in the dictionary.)",blanks:{"1":"읽다가","2":"나왔어요","3":"찾아봤어요"},pool:["읽다가","나왔어요","찾아봤어요","읽으면서","나오면","찾으러"],hint:"While reading (interrupted). Unknown word appeared. Looked it up (tried seeing)."},

{type:"teach",kind:"phrase",nl:"일하다가 쉬었어요",en:"while working, I took a break",pos:"intj",gender:null,funFact:"Work was interrupted by the break.",example:"오후에 일하다가 커피를 마시러 나갔어요.",exampleEn:"In the afternoon, while working, I went out to get coffee.",note:"-다가 for switching activities.\nWork was interrupted by the break."},
{type:"mc",q:"음악을 듣다가 잠들었어요 means:",opts:["While listening to music, I fell asleep","I listened and fell asleep simultaneously","After listening, I fell asleep","I fell asleep to listen"],ans:"While listening to music, I fell asleep",hint:"-다가 means the first action was interrupted."},
{type:"fb",s:"요리하{1} 손을 다쳤어요.\n(While cooking, I hurt my hand.)",a:"다가",opts:["다가","면서","고","어서"],hint:"Cooking was interrupted by an injury. Which connector?"},
{type:"mc",q:"집에 가다가 비를 맞았어요 means:",opts:["Going home because of rain","While going home, I got caught in the rain","After going home in the rain","I went home and it rained"],ans:"While going home, I got caught in the rain",hint:"-다가 = interrupted action."},
{type:"fb",s:"운전하{1} 사고가 나서 뉴스에 보도됐어요.\n(While driving, an accident happened and was reported.)",a:"다가",opts:["다가","면서","고","어서"],hint:"Driving was interrupted by an accident. Which connector?"},
{type:"drag_fill",s:"한국어를 공부하{1} 어려운 문법이 나왔어요. 선생님에게 {2}.\n(While studying Korean, difficult grammar came up. I asked the teacher.)",blanks:{"1":"다가","2":"물어봤어요"},pool:["다가","물어봤어요","면서","물어보세요","공부해서","물어봐요"],hint:"Studying interrupted. Then asked. Interrupted action + past."},
]},

// ── L3c: N밖에 + Negative (Nothing But) ──
{id:"kou17l3c",title:"N밖에: 뉴스밖에",icon:"⚠️",xp:20,board:true,steps:[
  {type:"intro",title:"Nothing But: N밖에",desc:"시간이 10분밖에 없어요.\n→ There are only 10 minutes (nothing but 10 min).\n\nEmphasize scarcity with N밖에 + negative.",goals:["Use N밖에 + negative for 'nothing but'","Always pair with a negative verb","Contrast with -만 ('only')","Express scarcity in news contexts"]},
  {type:"tip",title:"N밖에 + Negative",text:"밖 = outside. 에 = at.\nN밖에 = outside of N = nothing but N.\n\nALWAYS requires a NEGATIVE verb:\n돈이 천 원밖에 없어요.\n= I only have 1,000 won.\n(Nothing but 1,000 won exists.)\n\n시간이 없어요 (negative).\n모르다 (negative meaning).\n못 하다 (negative).",deepDive:{title:"밖에 vs -만",text:"Both mean 'only' but differ:\n\n-만: neutral. Just states a fact.\n커피만 마셔요. (I only drink coffee.)\n\nN밖에: emphasizes scarcity/limitation.\n커피밖에 없어요. (There's nothing but coffee.)\n\n-만 works with positive verbs.\nN밖에 REQUIRES negative verbs.\n\n-만 마셔요 (only drink) = choice.\nN밖에 없어요 (nothing but) = limitation.\n\n밖에 sounds more emphatic,\nslightly complaining."}},
  {type:"teach",kind:"grammar",nl:"N밖에 + negative",en:"nothing but / only (emphatic)",pos:"part",gender:null,funFact:"Marks location or time. One particle, two jobs. Context tells you which.",example:"시간이 10분밖에 없어요.",exampleEn:"There are only 10 minutes left.",note:"N밖에: nothing but N.\n\nALWAYS + negative verb.\n없어요, 모르다, 못 하다, 안 하다.\n\nMore emphatic than -만."},
  {type:"mc",q:"돈이 천 원밖에 없어요 means:",opts:["I only have 1,000 won","I have more than 1,000 won","1,000 won is enough","I don't have 1,000 won"],ans:"I only have 1,000 won",hint:"N밖에 없다 = nothing but N exists. Emphasizes how little."},
  {type:"fb",s:"학생이 세 명{1} 안 왔어요.\n(Only three students came. / Nothing but three students came.)",a:"밖에",opts:["밖에","만","도","이"],hint:"Three students, that's all. Which particle emphasizes scarcity with a negative verb?"},
  {type:"mc",q:"한국어를 조금밖에 못 해요 means:",opts:["I can speak a lot of Korean","I can only speak a little Korean","I can't speak Korean at all","I speak Korean well"],ans:"I can only speak a little Korean",hint:"N밖에 못 하다 = can do nothing but N. Only a …."},
  {type:"fb",s:"뉴스{1} 안 봐요.\n(I watch nothing but the news.)",a:"밖에",opts:["밖에","만","도","를"],hint:"Nothing but news. Which particle pairs with a negative verb to show limitation?"},
  {type:"match",pairs:[{nl:"밖에 없다",en:"there's nothing but"},{nl:"밖에 모르다",en:"know nothing but"},{nl:"밖에 못 하다",en:"can do nothing but"},{nl:"밖에 안 하다",en:"do nothing but"}]},
  {type:"mc",q:"이 식당에는 김치찌개밖에 없어요. This means:",opts:["This restaurant has everything except kimchi stew","This restaurant doesn't have kimchi stew","This restaurant only has kimchi stew","Kimchi stew is outside the restaurant"],ans:"This restaurant only has kimchi stew",hint:"N밖에 없다 = nothing but N exists."},
  {type:"fb",s:"이 기사에 사진이 한 장{1} 없어요.\n(This article has only one photo.)",a:"밖에",opts:["밖에","만","도","이"],hint:"Only one photo exists. Which particle emphasizes 'nothing but' with a negative?"},
  {type:"mc",q:"Which is correct? 'I only know this word.'",opts:["이 단어밖에 알고 있어요","이 단어밖에 알아요","이 단어만에 몰라요","이 단어밖에 몰라요"],ans:"이 단어밖에 몰라요",hint:"N밖에 + negative verb (모르다). 밖에 always needs negative."},
  {type:"drag_fill",s:"이 뉴스 {1}에는 경제 기사{2} {3}.\n(This news channel has nothing but economy articles.)",blanks:{"1":"채널","2":"밖에","3":"없어요"},pool:["채널","밖에","없어요","채널을","만","있어요"],hint:"This channel: 채널에는. Only economy articles. Emphatic limitation + negative."},

{type:"teach",kind:"phrase",nl:"시간밖에 없어요",en:"there is only time (nothing but time)",pos:"intj",gender:null,funFact:"N밖에 없다: nothing but N exists.",example:"오늘은 한 시간밖에 없어요.",exampleEn:"Today I only have one hour.",note:"N밖에 없다: nothing but N exists.\nAlways negative verb after 밖에."},
{type:"mc",q:"커피만 마셔요 vs 커피밖에 안 마셔요.\nWhat is the difference?",opts:["First is neutral (only coffee). Second emphasizes limitation.","They mean the same","First is formal, second is casual","First is negative, second is positive"],ans:"First is neutral (only coffee). Second emphasizes limitation.",hint:"-만 is a simple choice; 밖에 pairs with a negative verb and implies scarcity or complaint."},
{type:"fb",s:"한국어 단어를 100개{1} 몰라요.\n(I only know 100 Korean words.)",a:"밖에",opts:["밖에","만","도","를"],hint:"Emphatic only, implying not enough. Always with negative verb."},
{type:"mc",q:"Which is grammatically correct?",opts:["돈이 천 원밖에 있어요","돈이 천 원밖에 없어요","돈이 천 원밖에 많아요","돈이 천 원밖에 좋아요"],ans:"돈이 천 원밖에 없어요",hint:"밖에 requires a negative verb. Which has a negative?"},
{type:"fb",s:"이 드라마를 두 번{1} 못 봤어요.\n(I could only watch this drama twice.)",a:"밖에",opts:["밖에","만","도","이나"],hint:"Emphatic only with negative verb (못). Nothing but two viewings."},
{type:"match",pairs:[{nl:"밖에 없다",en:"there is nothing but"},{nl:"-만 있다",en:"there is only (neutral)"},{nl:"밖에 못 하다",en:"can do nothing but"},{nl:"-만 하다",en:"only do (neutral)"}]},
{type:"fb",s:"오늘은 한 시간{1} 없어요. 빨리 해야 해요.\n(Today I only have one hour. I must hurry.)",a:"밖에",opts:["밖에","만","도","이"],hint:"Nothing but one hour exists. Emphatic scarcity + negative."},
{type:"drag_fill",s:"이 사건 기사{1} {2}. 정치 뉴스는 하나{3} {4}.\n(There are nothing but articles on this incident. There is only one political news piece.)",blanks:{"1":"밖에","2":"없어요","3":"밖에","4":"없어요"},pool:["밖에","없어요","밖에","없어요","만","있어요"],hint:"Both: emphatic scarcity. N밖에 + negative verb, twice."},
{type:"teach",kind:"grammar",nl:"-(으)ㄹ 수밖에 없다",en:"can't help but / have no choice but to",pos:"part",gender:null,funFact:"Marks location or time. One particle, two jobs. Context tells you which.",phonetic:"-eul su-bak-e eop-da",example:"갈 수밖에 없어요.",exampleEn:"I have no choice but to go.",note:"-(으)ㄹ 수밖에 없다:\ncan't help but / have no choice.\n\nCombines: -(으)ㄹ 수 (ability)\n+ 밖에 없다 (nothing but).\n\nLiterally: outside of being able to do X, nothing exists.",deepDive:{title:"-(으)ㄹ 수밖에 없다 Breakdown",text:"Components you already know:\n-(으)ㄹ 수 있다 = can do (U8)\n밖에 + negative = nothing but (U17)\n\nCombined:\n갈 수밖에 없어요.\n= Outside of going, there's nothing.\n= I have no choice but to go.\n\n먹을 수밖에 없어요.\n= I have no choice but to eat.\n\n할 수밖에 없어요.\n= I can't help but do it.\n\nVery common in Korean:\n어쩔 수 없어요 = It can't be helped."}},
{type:"mc",q:"갈 수밖에 없어요 means:",opts:["I only go sometimes","I can't go","I have no choice but to go","I want to go"],ans:"I have no choice but to go",hint:"-(으)ㄹ 수밖에 없다 = can't help but. No other option exists."},
{type:"fb",s:"이렇게 {1} 수밖에 없어요.\n(I have no choice but to do it this way.)",a:"할",opts:["할","하는","한","하고"],hint:"-(으)ㄹ 수밖에 없다: the future modifier form attaches to 수. 하다 → ?"},
]},

// ── L4: 뉴스 읽기 (Reading News) ──
{id:"kou17l4",title:"뉴스 읽기",icon:"📰",xp:22,board:true,steps:[
{type:"intro",title:"Reading Korean News",desc:"Korean news uses passive and causative\nheavily. Also formal written style.",goals:["Read simplified Korean news sentences","Identify passive in news context","Understand news sentence patterns","Build news vocabulary"]},
{type:"tip",title:"News Korean Features",text:"Korean news differs from conversation:\n\n1. Passive heavy: 발견됐다 (was discovered)\n2. Formal endings: -습니다/-ㅂ니다\n3. Sino-Korean vocabulary: 실시, 발표, 보도\n4. Indirect speech: ~라고 밝혔다\n5. Noun-heavy sentences\n\nDon't worry about producing this style.\nJust recognize it when reading.",deepDive:"Common news verbs (mostly passive/reported):\n\n보도되다 = be reported\n발표되다 = be announced\n발견되다 = be discovered\n개최되다 = be held (event)\n체포되다 = be arrested\n확인되다 = be confirmed\n\nThese all use 되다 passive pattern:\n한자어 + 되다 = be [action]ed"},
{type:"teach",nl:"발표하다",en:"to announce",pos:"verb",gender:null,funFact:"Sino-Korean compound: 발(send out/發) + 표(show/表)",phonetic:"bal-pyo-ha-da",note:"COMPOUND: 발(send out/發) + 표(show/表).\nSend-out-show = announce.\nPassive: 발표되다 = be announced.",kind:"verb"},
{type:"teach",nl:"보도하다",en:"to report (news)",pos:"verb",gender:null,funFact:"Sino-Korean compound: 보(report/報) + 도(guide/導)",phonetic:"bo-do-ha-da",note:"COMPOUND: 보(report/報) + 도(guide/導).\nReport-guide = news reporting.\nPassive: 보도되다 = be reported.",kind:"verb"},
{type:"teach",nl:"체포하다",en:"to arrest",pos:"verb",gender:null,funFact:"Sino-Korean compound: 체(body/體) + 포(catch/捕)",phonetic:"che-po-ha-da",note:"COMPOUND: 체(body/體) + 포(catch/捕).\nBody-catch = arrest.\nPassive: 체포되다 = be arrested.",kind:"verb"},
{type:"mc",q:"범인이 체포됐어요 means:",opts:["The criminal was arrested","The criminal arrested someone","The criminal escaped","The police are searching"],ans:"The criminal was arrested",hint:"체포되다 = passive of 체포하다. The … is the subject receiving the action."},
{type:"fb",s:"새로운 정책이 {1}.\n(A new policy was ___.)",a:"발표됐어요",opts:["발표됐어요","발표했어요","발표하는데","발표할까요"],hint:"A new policy was announced. Passive: 발표되다."},
{type:"mc",q:"뉴스에서 사고가 보도됐어요. This means:",opts:["The news caused an accident","An accident was reported on the news","The accident reported the news","Someone reported to the accident"],ans:"An accident was reported on the news",hint:"보도되다 = passive of 보도하다. The … was …."},
{type:"fb",s:"경제 성장률이 3%로 {1}.\n(The economic growth rate was ___ at 3%.)",a:"확인됐어요",opts:["확인됐어요","확인했어요","확인하면","확인해서"],hint:"Economic growth rate was confirmed at 3%. Passive: 확인되다."},
{type:"match",pairs:[{nl:"발표되다",en:"be announced"},{nl:"보도되다",en:"be reported"},{nl:"체포되다",en:"be arrested"},{nl:"확인되다",en:"be confirmed"}]},
{type:"mc",q:"한자어 + 되다 pattern creates:",opts:["Future tense","Past tense","Passive voice (be [action]ed)","Active voice"],ans:"Passive voice (be [action]ed)",hint:"되다 after a Sino-Korean noun turns the subject into the receiver. Extremely common in news Korean."},
{type:"drag_fill",s:"오늘 뉴스: 큰 사건이 {1}. 범인은 아직 {2}.\n(Today's news: A big incident was ___. The criminal hasn't been ___.)",blanks:{"1":"보도됐어요","2":"체포되지 않았어요"},pool:["보도됐어요","체포되지 않았어요","보도했어요","체포했어요","발표했어요"],hint:"Today's news: A big incident was reported. The criminal hasn't been arrested yet."},
{type:"teach",nl:"개최하다",en:"to hold (an event)",pos:"verb",gender:null,funFact:"Sino-Korean compound: 개(open/開) + 최(gather/催)",phonetic:"gae-choe-ha-da",note:"COMPOUND: 개(open/開) + 최(gather/催).\nOpen-gather = hold an event.\nPassive: 개최되다 = be held.",kind:"verb"},
{type:"fb",s:"올림픽이 서울에서 {1}.\n(The Olympics were ___ in Seoul.)",a:"개최됐어요",opts:["개최됐어요","개최했어요","발표됐어요","체포됐어요"],hint:"The Olympics were held in Seoul. 개최되다 = passive of 개최하다."},
{type:"mc",q:"Active: 정부가 정책을 발표했어요. Passive:",opts:["정부를 발표했어요","정부가 발표됐어요","정책을 발표됐어요","정책이 발표됐어요"],ans:"정책이 발표됐어요",hint:"The object (정책) becomes the subject. 발표하다 → 발표되다."},

{type:"teach",nl:"실시하다",en:"to implement, to carry out",pos:"verb",gender:null,funFact:"Sino-Korean compound: 실(real/實) + 시(carry out/施)",phonetic:"sil-si-ha-da",note:"COMPOUND: 실(real/實) + 시(carry out/施).\nPassive: 실시되다 = be implemented.",kind:"verb"},
{type:"fb",s:"새 정책이 내년부터 {1}.\n(The new policy will be ___ from next year.)",a:"실시돼요",opts:["실시돼요","실시해요","실시하면","실시되는데"],hint:"The new policy will be carried out. Passive."},
{type:"mc",q:"뉴스 기사를 읽다가 모르는 단어가 나왔어요.\nWhich two patterns are combined?",opts:["-다가 (interrupted action) + news vocabulary","Only -다가","Only passive","Neither"],ans:"-다가 (interrupted action) + news vocabulary",hint:"One ongoing activity switched mid-stream when something unexpected came up."},
{type:"fb",s:"이 법이 국회에 의해 {1}.\n(This law was ___ by the National Assembly.)",a:"실시됐어요",opts:["실시됐어요","실시했어요","발표해요","보도하면"],hint:"The law was implemented BY the Assembly. Passive + agent."},
{type:"drag_fill",s:"새 법이 {1}. 시민들에게 {2}. 내일부터 {3}.\n(The new law was ___. It was ___ to citizens. It is ___ from tomorrow.)",blanks:{"1":"발표됐어요","2":"알려졌어요","3":"실시돼요"},pool:["발표됐어요","알려졌어요","실시돼요","발표했어요","알렸어요","실시해요"],hint:"Three passive sentences: announced, made known, implemented."},
]},

// ── L5: 한국 미디어 (Korean Media) ──
{id:"kou17l5",title:"한국 미디어",icon:"📡",xp:20,board:true,steps:[
{type:"intro",title:"Korean Media Landscape",desc:"Korea's media is diverse and influential.\n\nFrom K-drama to K-pop to news.",goals:["Understand Korean media types","Learn about Korean broadcasting","Discuss media in Korean","Apply passive/causative in context"]},
{type:"tip",title:"Korean Broadcasting",text:"Major Korean TV networks:\n- KBS (한국방송공사): public broadcaster\n- MBC (문화방송): semi-public\n- SBS (서울방송): private\n- JTBC: cable news/drama\n- tvN: cable entertainment\n\nStreaming:\n- 넷플릭스 (Netflix): K-drama global reach\n- 왓챠 (Watcha): Korean streaming\n- 웨이브 (Wavve): KBS/MBC/SBS joint",deepDive:"K-content global impact:\n\n한류 (Korean Wave) = the spread of\nKorean pop culture globally.\n\nMilestones:\n- 2012: 강남스타일 (Gangnam Style)\n- 2020: 기생충 (Parasite) Oscar\n- 2021: 오징어 게임 (Squid Game)\n- BTS, BLACKPINK global fame\n\n한류 has made Korean language\nlearning popular worldwide."},
{type:"teach",nl:"한류",en:"Korean Wave (Hallyu)",pos:"noun",gender:null,funFact:"Sino-Korean compound: 한(Korea/韓) + 류(flow/流)",phonetic:"hal-lyu",note:"COMPOUND: 한(Korea/韓) + 류(flow/流).\nKorea-flow = Korean cultural wave.\nThe global spread of K-culture.",kind:"noun"},
{type:"teach",nl:"방송",en:"broadcast, TV show",pos:"noun",gender:null,funFact:"Sino-Korean compound: 방(release/放) + 송(send/送)",phonetic:"bang-song",note:"COMPOUND: 방(release/放) + 송(send/送).\nRelease-send = broadcast.",kind:"noun"},
{type:"teach",nl:"인기를 얻다",en:"to gain popularity",pos:"verb",gender:null,funFact:"Opposite: 인기를 잃다 = lose popularity.",phonetic:"in-gi-reul eot-da",example:"A: 이 드라마가 요즘 인기를 얻고 있어요. B: 정말요? 어떤 드라마예요? A: 사극이에요. 역사 드라마가 인기를 얻고 있어요. B: 저도 사극 좋아해요. 어디서 볼 수 있어요? A: 넷플릭스에서 볼 수 있어요.",exampleEn:"A: This drama is gaining popularity lately. B: Really? What drama is it? A: It's a historical drama. Historical dramas are gaining popularity. B: I like historical dramas too. Where can I watch it? A: You can watch it on Netflix.",note:"인기(popularity) + 를 + 얻다(to gain).\n인기를 얻었어요 = gained popularity.\nOpposite: 인기를 잃다 = lose popularity.",kind:"phrase"},
{type:"mc",q:"한류 literally means:",opts:["Korea-flow (Korean Wave)","Korea-style","Korean news","Korean drama"],ans:"Korea-flow (Korean Wave)",hint:"한 (韓) is the Hanja for the peninsula; 류 (流) refers to a current or stream. The compound names the cultural current radiating outward."},
{type:"fb",s:"이 드라마가 전 세계에서 {1}. 한류 덕분이에요.\n(This drama ___ worldwide. Thanks to Hallyu.)",a:"인기를 얻었어요",opts:["인기를 얻었어요","인기를 잃었어요","인기가 없어요","인기를 줬어요"],hint:"This drama gained popularity worldwide. Thanks to Hallyu."},
{type:"mc",q:"기생충\n(Parasite) was significant because:",opts:["First Korean drama on Netflix","First Korean film to win Academy Award for Best Picture","First K-pop song to chart globally","First Korean news broadcast"],ans:"First Korean film to win Academy Award for Best Picture",hint:"봉준호 won the top prize at the 2020 Oscars with 기생충. It was a historic moment for non-English cinema."},
{type:"match",pairs:[{nl:"KBS",en:"Korean public broadcaster"},{nl:"한류",en:"Korean Wave"},{nl:"방송",en:"broadcast"},{nl:"기생충",en:"Parasite (film)"}]},
{type:"fb",s:"넷플릭스에서 한국 드라마가 많이 {1}.\n(Many Korean dramas are ___ on Netflix.)",a:"방송돼요",opts:["방송돼요","방송해요","방송하면서","방송하려고"],hint:"Many Korean dramas are broadcast on Netflix. Passive: 방송되다."},
{type:"mc",q:"한류 has made Korean language learning:",opts:["Only popular in Asia","Less popular","Popular worldwide","Unpopular"],ans:"Popular worldwide",hint:"The global spread of K-pop, K-drama, and K-film has driven interest in Korean."},
{type:"drag_fill",s:"한국 문화가 전 세계에 {1}. 이것을 {2}라고 해요.\n(Korean culture became ___ worldwide. This is called ___.)",blanks:{"1":"알려졌어요","2":"한류"},pool:["알려졌어요","한류","방송","뉴스","전해졌어요"],hint:"Korean culture became known worldwide. This is called Hallyu."},
{type:"fb",s:"한국 드라마를 보{1} 볼수록 재미있어요.\n(The more I watch Korean dramas, the more fun they are.)",a:"면",opts:["면","는데","어서","다가"],hint:"The MORE I watch, the more fun. -(으)ㄹ수록."},
{type:"drag_fill",s:"뉴스{1} 안 봐요. 드라마{2} 봐요.\n(I watch nothing but news. I watch nothing but dramas.)",blanks:{"1":"밖에","2":"밖에"},pool:["밖에","밖에","만","만","도","도"],hint:"Both sentences express emphatic limitation with a negative verb. Same particle twice."},

{type:"teach",nl:"시청자",en:"viewer, audience",pos:"noun",gender:null,funFact:"Sino-Korean compound: 시(see/視) + 청(listen/聴) + 자(person/者)",phonetic:"si-cheong-ja",note:"COMPOUND: 시(see/視) + 청(listen/聴) + 자(person/者).\nSee-listen-person = viewer.",kind:"noun"},
{type:"teach",nl:"출연하다",en:"to appear (on a show)",pos:"verb",gender:null,funFact:"Sino-Korean compound: 출(go out/出) + 연(perform/演)",phonetic:"chul-yeon-ha-da",note:"COMPOUND: 출(go out/出) + 연(perform/演).\nGo-out-perform = appear on show.",kind:"verb"},
{type:"fb",s:"유명한 배우가 이 드라마에 {1}.\n(A famous actor ___ in this drama.)",a:"출연했어요",opts:["출연했어요","출연됐어요","출연하는데","출연할래요"],hint:"The actor appeared on the show. Active: they chose to appear."},
{type:"teach",kind:"grammar",nl:"에 의해(서)",en:"by (agent in passive)",pos:"part",gender:null,funFact:"Marks location or time. One particle, two jobs. Context tells you which.",example:"경찰에 의해 범인이 체포됐어요.",exampleEn:"The criminal was arrested by the police.",note:"에 의해: marks who did the action.\nUsed with passive sentences.\nFormal/written style. Common in news."},
{type:"mc",q:"이 방송이 시청자에 의해 선택됐어요.\n(This broadcast was chosen by viewers.)\n에 의해 marks:",opts:["The reason","The time","The location","The agent (viewers) in a passive sentence"],ans:"The agent (viewers) in a passive sentence",hint:"에 의해 = by. Who did the choosing?"},
{type:"fb",s:"한류 덕분에 한국 드라마가 전 세계에 {1}.\n(Thanks to Hallyu, Korean dramas became ___ worldwide.)",a:"알려졌어요",opts:["알려졌어요","알렸어요","알았어요","알려요"],hint:"Korean dramas became known. Passive."},
{type:"drag_fill",s:"예전에는 한국 방송이 한국에서{1} 안 {2}. 지금은 전 세계 {3}가 봐요.\n(Korean broadcasts used to only be watched in Korea. Now viewers worldwide watch.)",blanks:{"1":"밖에","2":"봤어요","3":"시청자"},pool:["밖에","봤어요","시청자","만","봐요","방송"],hint:"Only watched in Korea (emphatic limitation + negative). Viewers worldwide."},

{type:"fb",s:"이 기사는 기자에 {1} 작성되었어요.\n(This article was written by a journalist.)",a:["의해"],opts:["의해","대해","의하면","관해"],hint:"The passive agent marker shows who performed the action. The journalist acted."},
{type:"mc",q:"TV를 보다가 잠이 들었어요.\n(I fell asleep while watching TV.)",opts:["-다가 (interrupted action)","-(으)면서 (simultaneous)","-고 (sequential)","-아/어서 (cause)"],ans:"-다가 (interrupted action)",hint:"One thing was happening, then a switch occurred. Which connector shows a mid-stream change?"},
{type:"drag_fill",s:"한국에는 김치{1} 없으면 식사가 {2}.\n(In Korea, if there is nothing but kimchi, the meal is not complete.)",blanks:{"1":"밖에","2":"안 돼요"},pool:["밖에","안 돼요","만","못 해요","뿐","없어요"],hint:"Nothing but kimchi. Emphatic limitation particle + negative = if there is only kimchi."},
{type:"match",pairs:[{nl:"에 의해",en:"by (passive agent)"},{nl:"-다가",en:"while doing, then..."},{nl:"밖에 + neg",en:"nothing but / only"},{nl:"-이/히/리/기",en:"passive suffix"}]},
{type:"mc",q:"이 건물은 유명한 건축가에 의해 설계되었어요.\n(This building was designed by a famous architect.)",opts:["에 대해 (about)","에 의해 (passive agent)","에 의하면 (according to)","에 관해 (regarding)"],ans:"에 의해 (passive agent)",hint:"에 의해 names the person responsible for a completed task. Formal written style."},
{type:"fb",s:"공부하{1} 친구한테 전화가 왔어요.\n(While studying, I got a call from a friend.)",a:["다가"],opts:["다가","면서","고","서"],hint:"Studying was interrupted by the phone call. Which connector shows a sudden switch?"},
]},

// ── L6: ★ -았/었었 HARVEST (Double Past) ──
{id:"kou17l6",title:"★ -았/었었",icon:"🌾",xp:24,board:true,steps:[
{type:"intro",title:"Harvesting -았/었었 (Double Past)",desc:"You've been seeing -았/었었 since Unit 10.\n\n전에 서울에 살았었어요.\n→ I used to live in Seoul (but not anymore).\n\nPast actions that are no longer true.",goals:["Master -았/었었 for discontinued past","Distinguish from simple past -았/었","Use for life changes and memories","Express 'used to' naturally"]},
{type:"tip",title:"-았/었었 vs -았/었",text:"Simple past -았/었:\n서울에 살았어요.\n= I lived in Seoul. (maybe still do)\n\nDouble past -았/었었:\n서울에 살았었어요.\n= I used to live in Seoul. (not anymore)\n\nThe double past emphasizes that\nthe situation has CHANGED.\nIt's now OVER or DIFFERENT.",deepDive:"When to use -았/었었:\n\n1. You no longer do it:\n한국에 살았었어요. (used to live, don't now)\n\n2. Things have changed:\n이 가게가 유명했었어요. (was famous, isn't now)\n\n3. Distant memories:\n어렸을 때 여기서 놀았었어요. (played here as a child)\n\nNOTE: In casual speech, simple past\noften covers both meanings.\n-았/었었 is more precise/emphatic."},
{type:"mc",q:"전에 한국에 살았었어요 means:",opts:["I used to live in Korea (not anymore)","I live in Korea now","I will live in Korea","I'm living in Korea"],ans:"I used to live in Korea (not anymore)",hint:"-았/었었 = discontinued past. I lived there, but that's over now."},
{type:"fb",s:"이 식당이 전에 유명{1}. 지금은 아니에요.\n(This restaurant used to be famous___. Not anymore.)",a:"했었어요",opts:["했었어요","했어요","해요","하는데"],hint:"This restaurant used to be famous. Not anymore. Discontinued → -았/었었."},
{type:"mc",q:"공부했어요 vs 공부했었어요:",opts:["Both mean the same","First: studied (neutral). Second: used to study (not anymore).","First is more emphatic","Second is present tense"],ans:"First: studied (neutral). Second: used to study (not anymore).",hint:"-았/었어요 = simple past. -았/었었어요 = discontinued past."},
{type:"fb",s:"어렸을 때 이 공원에서 {1}.\n(When I was young, I used to ___ in this park.)",a:"놀았었어요",opts:["놀았었어요","놀아요","놀았어요","노는데"],hint:"When I was young, I used to play in this park. Distant memory, no longer happening."},
{type:"mc",q:"이 가수가 예전에 인기가 많았었어요. Now:",opts:["The singer just debuted","The singer is still popular","The singer is no longer popular","The singer's popularity is growing"],ans:"The singer is no longer popular",hint:"-았/었었 = discontinued past. The popularity was there before but isn't now."},
{type:"teach",nl:"예전에",en:"in the past, before",pos:"noun",gender:null,funFact:"Often paired with -았/었었.",phonetic:"ye-jeon-e",example:"A: 예전에 여기 자주 왔어요? B: 네, 예전에는 매일 왔었어요. A: 지금은 왜 안 와요? B: 이사해서 멀어졌어요. 예전에는 가까웠었어요. A: 아, 그렇군요. 옛날 생각이 나죠?",exampleEn:"A: Did you come here often in the past? B: Yes, I used to come every day. A: Why don't you come now? B: I moved so it got far. It used to be close. A: Ah, I see. It brings back memories, right?",note:"예전 = old times, before.\n예전에는 = in the past (contrast with now).\nOften paired with -았/었었.",kind:"adverb"},
{type:"fb",s:"예전에는 한국어를 못 {1}. 지금은 잘해요.\n(In the past, I couldn't ___ Korean. Now I'm good.)",a:"했었어요",opts:["했었어요","했어요","해요","하는데"],hint:"The situation has changed from past to now. Which ending shows a discontinued state?"},
{type:"mc",q:"'I used to watch this drama' in Korean:",opts:["이 드라마를 보는데","이 드라마를 봐요","이 드라마를 볼 거예요","이 드라마를 봤었어요"],ans:"이 드라마를 봤었어요",hint:"You no longer watch it. Which ending shows a past that's over?"},
{type:"drag_fill",s:"예전에 이 동네가 조용{1}. 지금은 많이 {2}.\n(This neighborhood used to be quiet___. Now it's ___ a lot.)",blanks:{"1":"했었어요","2":"변했어요"},pool:["했었어요","변했어요","해요","했어요","하는데"],hint:"This neighborhood used to be quiet. Now it's changed a lot."},
{type:"match",pairs:[{nl:"살았어요",en:"lived (neutral past)"},{nl:"살았었어요",en:"used to live (not anymore)"},{nl:"했어요",en:"did (neutral past)"},{nl:"했었어요",en:"used to do (not anymore)"}]},
{type:"fb",s:"한국 경제가 어려{1}. 지금은 많이 좋아졌어요.\n(Korea's economy used to be difficult___. Now it's much better.)",a:"웠었어요",opts:["웠었어요","워요","웠어요","운데"],hint:"Korea's economy used to be difficult but isn't anymore. 어렵다 is ㅂ-irregular. Discontinued past."},
{type:"mc",q:"-았/었었 is most natural when:",opts:["Emphasizing that the past situation has changed","Talking about yesterday","Describing current events","Making future plans"],ans:"Emphasizing that the past situation has changed",hint:"The double tense form adds weight: it signals that what was once true is no longer true today."},

{type:"fb",s:"이 카페가 예전에 조용{1}. 지금은 항상 사람이 많아요.\n(This cafe used to be quiet___. Now always crowded.)",a:"했었어요",opts:["했었어요","했어요","해요","하잖아요"],hint:"The cafe was quiet but not anymore. Discontinued state."},
{type:"mc",q:"뉴스에서 보도됐었어요 vs 보도됐어요.\nWhat does the double past add?",opts:["Nothing, identical","Emphasis that the report is from a distant or concluded past","Future tense","More casual"],ans:"Emphasis that the report is from a distant or concluded past",hint:"-았/었었 adds the sense that something is now over."},
{type:"fb",s:"예전에 이 기사가 많이 읽{1}. 지금은 아무도 안 봐요.\n(This article used to be read a lot___. Nobody reads it now.)",a:"혔었어요",opts:["혔었어요","혔어요","혀요","히는데"],hint:"The article was read (passive) but no longer. Discontinued passive past."},
{type:"match",pairs:[{nl:"봤었어요",en:"used to watch (not anymore)"},{nl:"들렸었어요",en:"used to be heard (not anymore)"},{nl:"알려졌었어요",en:"used to be known (not anymore)"},{nl:"인기 있었었어요",en:"used to be popular (not anymore)"}]},
{type:"drag_fill",s:"이 가수가 예전에 {1}. 뉴스에도 많이 {2}. 지금은 은퇴{3}.\n(This singer used to be popular. They appeared on the news a lot. Now retired.)",blanks:{"1":"인기 있었었어요","2":"나왔었어요","3":"했어요"},pool:["인기 있었었어요","나왔었어요","했어요","인기 있어요","나와요","하는데"],hint:"Used to be popular (discontinued). Used to appear (discontinued). Retired (simple past)."},
{type:"mc",q:"이 드라마가 예전에 인기 있었었는데 지금은 아무도 안 봐요.\nHow many grammar patterns?",opts:["One: -았/었었","Two: -는데, negative","Three: -았/었었 (discontinued), -는데 (contrast), negative 안","Four"],ans:"Three: -았/었었 (discontinued), -는데 (contrast), negative 안",hint:"Count the patterns: the double past, the connecting/contrasting clause, and 아무도 안."},

{type:"mc",q:"어릴 때 이 동네에서 살았었는데 많이 변했어요.\n(I used to live in this neighborhood when I was young but it has changed a lot.)",opts:["-겠- (future) + -는데","-았/었- (simple past) + -는데","-고 있었다 (past progressive) + -지만","-았/었었- (remote past) + -는데"],ans:"-았/었었- (remote past) + -는데",hint:"The doubled tense form signals a completed, discontinued habit. -는데 introduces what has changed since then."},
]},

// ── L7: 시사 토론 (Current Events Discussion) ──
{id:"kou17l7",title:"시사 토론",icon:"🗣️",xp:22,board:true,steps:[
{type:"intro",title:"Discussing Current Events",desc:"Use all Unit 17 grammar\nto discuss news and events.",goals:["Discuss news using passive voice","Report events with causative","Use -았/었었 for historical changes","Combine all patterns naturally"]},
{type:"mc",q:"경찰에 의해 범인이 체포됐어요. 의해 adds:",opts:["By (agent marker in passive)","Because","Despite","While"],ans:"By (agent marker in passive)",hint:"경찰 performed the action. 에 의해 identifies who is responsible in a formal sentence."},
{type:"fb",s:"이 사건이 뉴스에서 크게 {1}.\n(This incident was widely ___ on the news.)",a:"보도됐어요",opts:["보도됐어요","보도했어요","보도하면서","보도하려고"],hint:"This incident was widely reported on the news. Passive."},
{type:"mc",q:"정부가 새 법을 발표했어요 (active). Passive version:",opts:["정부가 발표됐어요","새 법이 발표됐어요","새 법을 발표됐어요","법이 발표하다"],ans:"새 법이 발표됐어요",hint:"Object (새 법) becomes subject. 발표하다 → 발표되다."},
{type:"fb",s:"예전에 이 지역이 위험{1}. 지금은 안전해요.\n(This area used to be dangerous___. Now it's safe.)",a:"했었어요",opts:["했었어요","했어요","해요","하는데"],hint:"This area used to be dangerous. Now it's safe. Change → -았/었었."},
{type:"drag_fill",s:"한류가 전 세계에 한국 문화를 {1}. 한국어 학습자가 {2}.\n(Hallyu ___ Korean culture to the world. Korean learners ___.)",blanks:{"1":"알렸어요","2":"늘었어요"},pool:["알렸어요","늘었어요","알려졌어요","줄었어요","보도됐어요"],hint:"Hallyu informed the world about Korean culture (causative). Korean learners increased."},
{type:"match",pairs:[{nl:"보도되다",en:"be reported (passive)"},{nl:"알리다",en:"inform (causative)"},{nl:"-았/었었",en:"used to (discontinued)"},{nl:"에 의해",en:"by (passive agent)"}]},
{type:"mc",q:"이 코미디가 관객을 웃겼어요. 웃기다 here is:",opts:["Active (laughed)","Passive (was laughed at)","Causative (made the audience laugh)","Honorific (respectfully laughed)"],ans:"Causative (made the audience laugh)",hint:"The comedy is the subject making something happen in 관객 (the crowd). Which verb type fits?"},
{type:"fb",s:"한국 영화가 세계적으로 {1}. 한류의 영향이에요.\n(Korean films became ___ worldwide. It's Hallyu's influence.)",a:"알려졌어요",opts:["알려졌어요","알렸어요","알았어요","알게요"],hint:"Korean films became known worldwide. Passive: 알려지다 (become known)."},
{type:"drag_fill",s:"예전에는 한국 문화가 잘 {1}. 지금은 전 세계에서 {2}.\n(Korean culture was not well ___. Now it's ___ worldwide.)",blanks:{"1":"알려지지 않았어요","2":"사랑받고 있어요"},pool:["알려지지 않았어요","사랑받고 있어요","알려졌어요","보도됐어요","발표했어요"],hint:"Korean culture was not well known before. Now it's loved worldwide."},
{type:"fb",s:"한류 덕분에 한국어를 배우{1} 오는 외국인이 많아졌어요.\n(Thanks to Hallyu, more foreigners are coming to learn Korean.)",a:"러",opts:["러","려고","면서","다가"],hint:"Coming TO learn Korean. -(으)러 오다 = come to do."},
{type:"mc",q:"한국 영화가 유명해졌잖아요 means:",opts:["Korean movies aren't famous","Did Korean movies become famous?","Korean movies will become famous","Korean movies became famous, you know"],ans:"Korean movies became famous, you know",hint:"-아/어지다 + -잖아요. Shared knowledge."},

{type:"teach",nl:"기자",en:"reporter, journalist",pos:"noun",gender:null,funFact:"From hanja: 記 (record) + 者 (person). Recording person = journalist.",phonetic:"gi-ja",note:"COMPOUND: 기(record/記) + 자(person/者).\nRecord-person = reporter.",kind:"noun"},
{type:"fb",s:"{1}가 그 사건을 보도했어요.\n(The ___ reported the incident.)",a:"기자",opts:["기자","기사","사건","뉴스"],hint:"Who writes and reports news? A record-person."},
{type:"mc",q:"기자에 의해 사건이 알려졌어요.\nThis sentence uses:",opts:["에 의해 (agent) + passive (알려지다)","Only passive","Only 에 의해","Neither"],ans:"에 의해 (agent) + passive (알려지다)",hint:"Two grammar elements: who performed the action + who receives the action. Both are present."},
{type:"fb",s:"기자가 뉴스를 보도하{1} 갑자기 방송이 끊겼어요.\n(While the reporter was reporting, the broadcast cut off.)",a:"다가",opts:["다가","면서","고","어서"],hint:"Reporting was interrupted. Which connector?"},
{type:"drag_fill",s:"예전에 이 기자가 {1}. 사건이 기자에 의해 {2}. 뉴스{3} 안 봤어요.\n(This reporter used to be famous. The incident was ___ by the reporter. I watched nothing but news.)",blanks:{"1":"유명했었어요","2":"보도됐어요","3":"밖에"},pool:["유명했었어요","보도됐어요","밖에","유명해요","보도해요","만"],hint:"Double past + passive + emphatic only. Three patterns."},
{type:"mc",q:"한류 덕분에 한국 문화가 알려졌잖아요.\nHow many grammar patterns?",opts:["Two","Three: 덕분에, passive 알려지다, -잖아요","One","Four+"],ans:"Three: 덕분에, passive 알려지다, -잖아요",hint:"Count: a beneficiary expression, a stative change verb, and an appeal to shared knowledge."},
{type:"fb",s:"이 사건이 기자에 {1} 보도됐어요.\n(This incident was reported ___ the journalist.)",a:"의해",opts:["의해","대해","위해","따라"],hint:"Who performed the action? Which agent marker?"},

{type:"fb",s:"이 뉴스에 의하면 경제가 {1} 있어요.\n(According to this news, the economy is improving.)",a:["좋아지고"],opts:["좋아지고","좋아해서","좋아하면","좋아져도"],hint:"에 의하면 (according to) + -아/어지다 (become) + -고 있다 (progressive)."},
{type:"mc",q:"최근 한국에서 1인 가구가 많아지고 있어요.\n(Recently in Korea, single-person households are increasing.)",opts:["-기로 하다 + -고 있다","-게 되다 + -는 편이다","-아/어지다 + -고 있다","-나 보다 + -는데"],ans:"-아/어지다 + -고 있다",hint:"많아지다 (become many) + progressive: ongoing societal change."},
{type:"drag_fill",s:"이 법은 국회에 {1} 만들어{2}.\n(This law was made by the National Assembly.)",blanks:{"1":"의해","2":"졌어요"},pool:["의해","졌어요","대해","져요","의하면","지고"],hint:"에 의해 (by agent) + passive -어지다: was made by."},
{type:"mc",q:"뉴스를 보다가 중요한 소식을 들었어요.\n(While watching the news, I heard important information.)",opts:["-아/어서 (because)","-(으)면서 (simultaneous)","-고 (and then)","-다가 (action interrupted)"],ans:"-다가 (action interrupted)",hint:"Something was in progress, then a new event occurred and changed the course."},
{type:"fb",s:"한국에서는 교육{1} 중요한 것은 없어요.\n(In Korea, nothing is as important as education.)",a:["밖에"],opts:["밖에","만큼","보다","처럼"],hint:"Nothing is as important as education. Which particle shows emphatic limitation?"},
{type:"match",pairs:[{nl:"에 의해 만들어졌어요",en:"was made by"},{nl:"에 의하면",en:"according to"},{nl:"에 대해",en:"about / regarding"},{nl:"에 관해",en:"concerning"}]},
{type:"mc",q:"전문가에 의하면 내년에 경제가 좋아질 거라고 해요.\n(According to experts, the economy will improve next year.)",opts:["에 의하면 + -(으)ㄹ 거라고 하다","에 의해 + -(으)ㄹ 거라고 하다","에 대해 + -겠다고 하다","에 의하면 + -겠다고 하다"],ans:"에 의하면 + -(으)ㄹ 거라고 하다",hint:"Citation form + reported future: according to a source, something will happen."},
]},

// ── L8: 한국 사회 변화 (Social Changes) ──
{id:"kou17l8",title:"한국 사회 변화",icon:"🔄",xp:20,board:true,steps:[
{type:"intro",title:"How Korea Has Changed",desc:"Korea's rapid modernization.\n\nFrom war to tech powerhouse\nin one generation.",goals:["Discuss Korea's transformation","Use -았/었었 for historical changes","Apply passive to social changes","Understand Korea's rapid development"]},
{type:"tip",title:"Korea's Transformation",text:"1950s: One of the poorest countries.\n2020s: 10th largest economy.\n\n한강의 기적 (Miracle on the Han River)\n\nKey changes:\n- 농업 → 제조업 → 기술 (agriculture → manufacturing → tech)\n- 교육 중심 사회 (education-focused society)\n- K-pop, K-drama: global cultural exports\n- Samsung, Hyundai, LG: global brands",deepDive:"Korea's economic miracle facts:\n\n1960 GDP per capita: ~$79\n2020 GDP per capita: ~$31,000\n\nThat's 400x growth in 60 years.\n\nKey factors:\n1. 교육 investment (education)\n2. Export-driven economy\n3. Government-chaebol cooperation (재벌 = conglomerate)\n4. Hard work culture (근면 = diligence)\n5. Compressed modernization\n\nThe downside:\n- Extreme work hours\n- Education pressure\n- Birth rate crisis\n- Wealth inequality"},
{type:"mc",q:"한강의 기적 refers to:",opts:["Korea's rapid economic development","A miracle that happened at the Han River","A famous Korean drama","A religious event"],ans:"Korea's rapid economic development",hint:"한강의 기적 = 'Miracle on the Han River.' It describes one of the fastest rises from poverty to prosperity in modern history."},
{type:"fb",s:"한국이 예전에 가난{1}. 지금은 선진국이에요.\n(Korea used to be poor___. Now it's a developed country.)",a:"했었어요",opts:["했었어요","했어요","해요","하는데"],hint:"Korea used to be poor. Now it's a developed country. Discontinued past."},
{type:"teach",nl:"발전하다",en:"to develop, to advance",pos:"verb",gender:null,funFact:"Sino-Korean compound: 발(send out/發) + 전(unfold/展)",phonetic:"bal-jeon-ha-da",note:"COMPOUND: 발(send out/發) + 전(unfold/展).\nSend-out-unfold = develop.\n한국이 빠르게 발전했어요.",kind:"verb"},
{type:"teach",nl:"변하다",en:"to change",pos:"verb",gender:null,funFact:"Korean verbs don't change for person or number. \"I go\" and \"they go\" use the same verb form.",phonetic:"byeon-ha-da",example:"A: 이 동네가 많이 변했어요. B: 그러게요. 예전에는 조용했었는데요. A: 건물도 많이 생기고 사람도 많아졌어요. B: 좋은 점도 있지만 아쉬운 점도 있어요. A: 맞아요. 세상이 빠르게 변하네요.",exampleEn:"A: This neighborhood has changed a lot. B: I know. It used to be quiet. A: Many buildings were built and there are more people. B: There are good things but also things to miss. A: Right. The world changes fast.",note:"변(change/變) + 하다.\n세상이 많이 변했어요.\n= The world has changed a lot.",kind:"verb"},
{type:"mc",q:"한국 사회가 빠르게 변했어요 means:",opts:["Korean society is changing slowly","Korean society changed rapidly","Korean society didn't change","Korean society will change"],ans:"Korean society changed rapidly",hint:"변하다 = to change. 빠르게 = …. Past tense."},
{type:"fb",s:"기술이 많이 {1}. 스마트폰이 생활을 바꿨어요.\n(Technology has ___ a lot. Smartphones changed daily life.)",a:"발전했어요",opts:["발전했어요","발전되요","발전하는데","발전할까요"],hint:"Technology has advanced a lot. Smartphones changed daily life."},
{type:"match",pairs:[{nl:"발전하다",en:"to develop"},{nl:"변하다",en:"to change"},{nl:"한강의 기적",en:"Miracle on the Han River"},{nl:"한류",en:"Korean Wave"}]},
{type:"drag_fill",s:"예전에 한국은 농업 국가{1}. 지금은 기술 강국으로 {2}.\n(Korea used to be an agricultural country___. Now it ___ into a tech powerhouse.)",blanks:{"1":"였었어요","2":"발전했어요"},pool:["였었어요","발전했어요","이에요","변하는데","했어요"],hint:"Korea used to be an agricultural country. Now it has developed into a tech powerhouse."},
{type:"mc",q:"한국의 출산율이 세계에서 가장 낮아졌어요. This is about:",opts:["Korea's education system improving","Korea's economy growing the fastest","Korea's birth rate becoming the world's lowest","Korea's population increasing"],ans:"Korea's birth rate becoming the world's lowest",hint:"출산율 = how many babies are born per person. 가장 낮아지다 = to fall to the very bottom of a ranking."},
{type:"fb",s:"경제가 발전하{1} 발전할수록 사회가 변해요.\n(The more the economy develops, the more society changes.)",a:"면",opts:["면","서","는데","다가"],hint:"The MORE it develops. -(으)ㄹ수록. 발전하면 발전할수록."},
{type:"drag_fill",s:"예전에는 회식을 매일 {1}. 요즘은 회식{2} 안 해요.\n(We used to have company dinners every day. These days we barely do them.)",blanks:{"1":"했었어요","2":"밖에"},pool:["했었어요","밖에","해요","만","했어요","도"],hint:"Used to (double past): 했었어요. Barely/nothing but: 밖에 + 안."},

{type:"teach",nl:"성장하다",en:"to grow (economy/person)",pos:"verb",gender:null,funFact:"Sino-Korean compound: 성(become/成) + 장(grow/長)",phonetic:"seong-jang-ha-da",note:"COMPOUND: 성(become/成) + 장(grow/長).\nBecome-grow = growth.",kind:"verb"},
{type:"fb",s:"한국 경제가 빠르게 {1}.\n(Korea's economy ___ rapidly.)",a:"성장했어요",opts:["성장했어요","성장돼요","성장하면","발전하는데"],hint:"Korea's economy grew rapidly. Which past tense?"},
{type:"mc",q:"예전에 한국이 가난했었는데 지금은 선진국이에요.\nWhich patterns are combined?",opts:["Four","Two","One","Three: -았/었었 (discontinued), -는데 (contrast), present copula"],ans:"Three: -았/었었 (discontinued), -는데 (contrast), present copula",hint:"Count carefully: how many distinct grammar elements appear in the two clauses?"},
{type:"fb",s:"한국이 발전하{1} 사회도 많이 변했어요.\n(As Korea developed, society also changed.)",a:"면서",opts:["면서","다가","고","어서"],hint:"As Korea developed (simultaneous ongoing process)."},
{type:"match",pairs:[{nl:"성장하다",en:"to grow"},{nl:"발전하다",en:"to develop"},{nl:"변하다",en:"to change"},{nl:"가난하다",en:"to be poor"}]},
{type:"fb",s:"예전에는 한국이 가난{1}. 지금은 기술 강국이에요.\n(Korea used to be poor___. Now it is a tech powerhouse.)",a:"했었어요",opts:["했었어요","했어요","해요","하는데"],hint:"Korea WAS poor but NOT anymore. Discontinued state."},
{type:"drag_fill",s:"한국이 예전에 {1}. 한강의 기적으로 {2}. 지금은 한류에 의해 문화가 전 세계에 {3}.\n(Korea used to be poor. Through the miracle, it grew. Now culture is known worldwide.)",blanks:{"1":"가난했었어요","2":"성장했어요","3":"알려졌어요"},pool:["가난했었어요","성장했어요","알려졌어요","가난해요","성장하는데","알렸어요"],hint:"Used to be poor (discontinued). Grew (simple past). Is known (passive)."},

{type:"fb",s:"요즘 한국 사회가 빠르게 {1} 있어요.\n(Korean society is changing rapidly these days.)",a:["변하고"],opts:["변하고","변해서","변하면","변하는데"],hint:"-고 있다 progressive: ongoing societal change."},
{type:"mc",q:"한국은 짧은 시간에 경제가 발전했었어요.\n(Korea developed economically in a short time (remote past).)",opts:["-았/었었 (remote past)","-았/었 (simple past)","-고 있었다 (past progressive)","-겠 (future)"],ans:"-았/었었 (remote past)",hint:"The doubled tense suffix signals that the situation no longer applies today. How many tense markers?"},
{type:"drag_fill",s:"한국 문화가 세계에 {1} 사람들이 한국에 관심을 {2} 됐어요.\n(Korean culture spread worldwide and people came to be interested in Korea.)",blanks:{"1":"알려지면서","2":"갖게"},pool:["알려지면서","갖게","알려져서","갖고","알려지고","갖기로"],hint:"Passive (알려지다, become known) + -(으)면서 (while/as) + -게 되다 (came to)."},
{type:"mc",q:"저출산 문제에 의해 한국 인구가 줄어들고 있어요.\n(Due to the low birth rate issue, the Korean population is decreasing.)",opts:["에 대해 + -게 되다","에 의해 + -고 있다","때문에 + -고 있다","에 의하면 + -는 편이다"],ans:"에 의해 + -고 있다",hint:"Passive agent marker + progressive: the issue is currently causing an ongoing decrease."},
{type:"fb",s:"예전에는 대가족이 많았{1} 지금은 핵가족이 많아요.\n(Before there were many large families but now nuclear families are common.)",a:["었는데"],opts:["었는데","어서","으면","어도"],hint:"-았/었었- (remote past, many large families used to exist) + -는데 (contrast with now)."},
{type:"match",pairs:[{nl:"저출산",en:"low birth rate"},{nl:"고령화",en:"aging society"},{nl:"핵가족",en:"nuclear family"},{nl:"1인 가구",en:"single-person household"}]},
{type:"mc",q:"한류에 의해 한국어를 배우는 외국인이 많아지고 있어요.\n(Due to the Korean Wave, foreigners learning Korean are increasing.)",opts:["때문에 + -아/어지다 + -고 있다","에 대해 + -게 되다 + -는 편이다","에 의해 + -아/어지다 + -고 있다","에 의하면 + -아/어지다 + -나 보다"],ans:"에 의해 + -아/어지다 + -고 있다",hint:"Passive cause + change-of-state + progressive: three forms describing an ongoing trend."},
]},

// ── L9: 복습 + 퀴즈 ──
{id:"kou17l9",title:"복습 + 퀴즈",icon:"📝",xp:20,board:true,steps:[
{type:"intro",title:"Unit 17 Review",desc:"Review passive, causative, and double past.\n\nPassive -이/히/리/기, 되다 passive.\nCausative. -았/었었 discontinued past.",goals:["Review passive voice","Test causative usage","Apply -았/었었 correctly","Complete news vocabulary"]},
{type:"mc",q:"문이 열렸어요. This is:",opts:["Passive (the door was opened)","Active (I opened the door)","Causative (made someone open)","Future (the door will open)"],ans:"Passive (the door was opened)",hint:"열리다 has the -리 suffix. The subject (문) is not doing anything; something was done to it."},
{type:"fb",s:"아이에게 밥을 {1}.\n(I ___ rice to the child.)",a:"먹여요",opts:["먹여요","먹어요","먹혀요","먹이세요"],hint:"Which form means to make someone eat? Stem + causative suffix."},
{type:"mc",q:"한국에 살았었어요 vs 한국에 살았어요:",opts:["Both mean the same","Used to live (not anymore) vs lived (neutral)","First is present, second is past","First is formal"],ans:"Used to live (not anymore) vs lived (neutral)",hint:"The double form carries extra weight: something has clearly ended. The single form is a plain statement of fact."},
{type:"match",pairs:[{nl:"열리다",en:"be opened (passive)"},{nl:"먹이다",en:"feed (causative)"},{nl:"보도되다",en:"be reported (passive)"},{nl:"알리다",en:"inform (causative)"}]},
{type:"fb",s:"범인이 경찰에게 {1}.\n(The criminal was ___ by the police.)",a:"잡혔어요",opts:["잡혔어요","잡았어요","잡겼어요","잡아요"],hint:"The criminal was ___ by the police. Passive construction."},
{type:"mc",q:"한자어 + 되다 creates:",opts:["Causative","Active voice","Passive (발표되다 = be announced)","Honorific"],ans:"Passive (발표되다 = be announced)",hint:"되다 after a Sino-Korean action noun turns the noun phrase into a receiving form. Very common in news Korean."},
{type:"drag_fill",s:"이 영화가 관객을 {1}. 전 세계에서 {2}.\n(This movie ___ the audience laugh. It was ___ worldwide.)",blanks:{"1":"웃겼어요","2":"사랑받았어요"},pool:["웃겼어요","사랑받았어요","웃었어요","사랑했어요","보였어요"],hint:"First blank: the movie caused a reaction. Second blank: a feeling received globally."},
{type:"fb",s:"예전에 이 지역이 위험{1}. 지금은 안전해졌어요.\n(This area used to be dangerous___. Now it's become safe.)",a:"했었어요",opts:["했었어요","했어요","해요","하면서"],hint:"This area used to be dangerous. Now it's become safe. Discontinued past."},
{type:"mc",q:"한류 means:",opts:["Korean politics","Korean news media","Korean economy","Global spread of Korean culture"],ans:"Global spread of Korean culture",hint:"한(Korea) + 류(flow/wave). What flows out globally?"},
{type:"match",pairs:[{nl:"뉴스",en:"news"},{nl:"기사",en:"article"},{nl:"사건",en:"incident"},{nl:"한류",en:"Korean Wave"}]},
{type:"mc",q:"소리를 낮춰요 uses 낮추다, which is:",opts:["Causative of 낮다 (make lower)","Passive of 낮다 (be lowered)","Active voice","Honorific form"],ans:"Causative of 낮다 (make lower)",hint:"낮추다 uses the -추 suffix. The subject is actively bringing something down to a reduced level."},
{type:"drag_fill",s:"한국이 예전에 가난{1}. 한강의 기적으로 크게 {2}.\n(Korea used to be poor___. Through the Miracle on the Han River, it greatly ___.)",blanks:{"1":"했었어요","2":"발전했어요"},pool:["했었어요","발전했어요","해요","발전하는데","했어요"],hint:"Korea used to be poor. Through the Miracle on the Han River, it greatly developed."},

{type:"mc",q:"TV를 보다가 잠이 들었어요.\n(I fell asleep while watching TV.)",opts:["-(으)면서","-다가","-고","-아/어서"],ans:"-다가",hint:"The interruption/switch connector: one action was in progress when a change occurred."},
{type:"fb",s:"이 영화는 실화에 {1} 만들어졌어요.\n(This movie was based on a true story.)",a:["의해"],opts:["의해","대해","의하면","관해"],hint:"Passive agent marker: who performed the action or made the thing."},
{type:"drag_fill",s:"시간이 {1} 없어서 커피{2} 마셨어요.\n(I only had time to drink coffee (nothing but coffee).)",blanks:{"1":"없어서","2":"밖에"},pool:["없어서","밖에","있어서","만","없는데","뿐"],hint:"Emphatic limitation + negative verb: only coffee, nothing else."},
{type:"mc",q:"어릴 때 매일 축구를 했었는데 지금은 못 해요.\n(I used to play soccer every day as a child but now I cannot.)",opts:["-고 있었다 (past prog) + -는데","-았/었 (simple past) + -지만","-았/었었 (remote past) + -는데","-겠 + -는데"],ans:"-았/었었 (remote past) + -는데",hint:"The doubled tense marker signals a discontinued childhood habit. -는데 introduces the current change."},
{type:"match",pairs:[{nl:"보다가",en:"while watching, then..."},{nl:"에 의해",en:"by (passive agent)"},{nl:"밖에 없어요",en:"there is only / nothing but"},{nl:"-았/었었-",en:"remote/discontinued past"}]},
{type:"fb",s:"뉴스에 의하면 내일 비가 {1} 해요.\n(According to the news, it is supposed to rain tomorrow.)",a:["온다고"],opts:["온다고","오냐고","오라고","오자고"],hint:"에 의하면 (according to) + -다고 하다 (reported statement)."},
{type:"mc",q:"공부하다가 배가 고파서 라면을 끓여 먹었어요.\n(While studying, I got hungry so I boiled and ate ramen.)",opts:["-고 + -때문에 + -기로 하다","-다가 + -니까 + -게 되다","-(으)면서 + -아/어서 + -아/어 보다","-다가 + -아/어서 + -아/어 먹다"],ans:"-다가 + -아/어서 + -아/어 먹다",hint:"Interrupted action + cause + eating: three patterns combined."},
]},

// ── L10: 종합 복습 (Comprehensive Review) ──
{id:"kou17l10",title:"종합 복습",icon:"🏆",xp:25,board:true,steps:[
{type:"intro",title:"Unit 17 Comprehensive Review",desc:"Combine ALL Unit 17 patterns.\n\nPassive, causative, -다가, 밖에,\n-았/었었, 에 의해 in real contexts.",goals:["Combine passive + causative","Layer -다가 with other patterns","Use 밖에 and -았/었었 naturally","Identify multi-construct sentences"]},
{type:"fb",s:"뉴스를 보{1} 잠들었어요. 피곤했거든요.\n(While watching the news, I fell asleep. I was tired.)",a:"다가",opts:["다가","면서","고","아서"],hint:"Watching was interrupted by sleeping. Which connector?"},
{type:"mc",q:"이 식당이 유명했었는데 지금은 손님밖에 없어요.\nWhich patterns combined?",opts:["Three: -았/었었, -는데, N밖에","Two: -는데, 밖에","One: -았/었었","Four: plus passive"],ans:"Three: -았/었었, -는데, N밖에",hint:"Discontinued past + contrast + emphatic only with negative."},
{type:"fb",s:"경찰에 {1} 범인이 체포됐어요.\n(The criminal was arrested ___ the police.)",a:"의해",opts:["의해","대해","위해","따라"],hint:"Who performed the action? Which agent marker?"},
{type:"mc",q:"아이를 재우다가 나도 잠들었어요 combines:",opts:["-다가 only","-다가 (while) + causative (재우다)","causative only","passive + -면서"],ans:"-다가 (while) + causative (재우다)",hint:"재우다 has the -우 suffix making someone else sleep. What connector shows one action switching to another?"},
{type:"fb",s:"이 사건이 여러 매체에 의해 {1}.\n(This incident was ___ by multiple media outlets.)",a:"보도됐어요",opts:["보도됐어요","보도했어요","보도하면","보도할까요"],hint:"The incident was reported BY media. Passive with agent."},
{type:"match",pairs:[{nl:"-다가",en:"while doing, then switched"},{nl:"N밖에 + neg",en:"nothing but (emphatic)"},{nl:"-았/었었",en:"used to (discontinued)"},{nl:"에 의해",en:"by (agent in passive)"}]},
{type:"drag_fill",s:"한국 드라마를 보{1} 한국어에 관심이 생겼어요. 한국어{2} 공부 안 해요. 드라마를 보면 볼{3} 실력이 늘{4}.\n(While watching K-dramas, I got interested. I study nothing but Korean. The more I watch, the more my skills improve.)",blanks:{"1":"다가","2":"밖에","3":"수록","4":"더라고요"},pool:["다가","밖에","수록","더라고요","면서","만","거든요","네요"],hint:"Interrupted action + nothing but + the more + I found that. Four patterns."},
{type:"match",pairs:[{trg:"끊기다",src:"to be cut off, disconnected"},{trg:"낮추다",src:"to lower, to reduce"},{trg:"높이다",src:"to raise, to increase"},{trg:"보도하다",src:"to report (news)"},{trg:"체포하다",src:"to arrest"},{trg:"개최하다",src:"to hold (an event)"}]},{type:"match",pairs:[{trg:"실시하다",src:"to implement, to carry out"},{trg:"인기를 얻다",src:"to gain popularity"},{trg:"출연하다",src:"to appear (on a show)"},{trg:"예전에",src:"in the past, before"},{trg:"시청자",src:"viewer, audience"}]}]},

// ── L11: B1 접속사와 동사 (Discourse Connectors & Core Verbs) ──
{id:"kov2_u17l_disc",title:"B1 접속사와 동사",icon:"🔗",xp:20,board:true,steps:[
{type:"intro",title:"B1 Discourse Connectors and Core Verbs",desc:"Learn contrast and additive connectors that structure Korean essays and news writing.\n하지만, 그러나, 비록, 또한, 게다가\nPlus two core B1 verbs: 설명하다 and 결정하다.\nEssential for TOPIK II reading and writing tasks.",goals:["Use 5 discourse connectors accurately","Distinguish formal vs. informal contrast markers","Use 설명하다 and 결정하다 naturally","Structure multi-sentence arguments"]},

{type:"teach",trg:"하지만",src:"but / however (spoken)",pos:"conj",gender:null,
 note:"Contrasts two clauses. Used at the start of the second sentence.\n어렵다. 하지만 재미있다.\nReady for any CEFR-level conversation.\nEquivalent to English 'but' or 'however.'",
 example:"A: 한국어 공부가 어때요?\nB: 어려워요. 하지만 정말 재미있어요.\nA: 저도 그래요. 하지만 시험이 걱정돼요.\nB: 걱정하지 마세요. 잘 할 수 있어요!",
 exampleSrc:"A: How is your Korean study going?\nB: It's hard. But it's really interesting.\nA: Same here. But I'm worried about the exam.\nB: Don't worry. You can do it!",
 funFact:"하지만 comes from 하지 (not doing) + 만 (only/but). Literally 'but only...' - it evolved into the standard spoken contrast connector."},

{type:"teach",trg:"그러나",src:"however / but (formal written)",pos:"conj",gender:null,
 note:"Formal contrast connector. Used in essays, news, and written Korean.\nDo not use in casual conversation.\n그래서 → result. 그러나 → contrast.\nSynonym of 하지만 in formal registers.",
 example:"A: 기사 잘 썼어요?\nB: 경제 문제를 설명했어요. 그러나 결론이 약해요.\nA: 그러나를 어디에 쓰면 좋아요?\nB: 글에서 두 가지 의견을 대조할 때 써요.",
 exampleSrc:"A: Did you write the article well?\nB: I explained the economic issue. However, the conclusion is weak.\nA: Where is it best to use 그러나?\nB: In writing, when contrasting two viewpoints.",
 funFact:"그러나 is one of the three most common connectors in TOPIK II writing tasks. Alongside 따라서 and 또한, it marks advanced essay structure."},

{type:"teach",trg:"비록",src:"although / even though",pos:"conj",gender:null,
 note:"Concessive connector. Always followed by -(으)ㄹ지라도, -아/어도, or -지만.\n비록 어렵지만 포기하지 않아요.\n= Although it's hard, I don't give up.",
 example:"A: 경제 상황이 어때요?\nB: 비록 문제가 있지만 사회가 발전하고 있어요.\nA: 비록은 어떻게 써요?\nB: 비록 + [상황] + -지만 이에요.",
 exampleSrc:"A: How is the economic situation?\nB: Although there are problems, society is developing.\nA: How do you use 비록?\nB: It is: 비록 + [situation] + -지만.",
 funFact:"비록 is a Sino-Korean-era concessive connector. It signals that the speaker acknowledges a negative fact but still holds a contrasting view. Mastering it marks a clear B1-B2 writing jump."},

{type:"teach",trg:"또한",src:"also / moreover / in addition",pos:"adv",gender:null,
 note:"Additive connector linking two parallel points. Used in formal speech and writing.\n그리고 = casual 'and'. 또한 = formal 'moreover'.\n또한 is a TOPIK writing staple.",
 example:"A: 뉴스 기사를 어떻게 써요?\nB: 사건을 설명해요. 또한 사회 영향도 써야 해요.\nA: 또한 vs 그리고는 어때요?\nB: 또한이 더 격식적이에요.",
 exampleSrc:"A: How do you write a news article?\nB: You explain the incident. Moreover, you also need to write about the social impact.\nA: What about 또한 vs 그리고?\nB: 또한 is more formal.",
 funFact:"Sino-Korean: 또(again/also) + 한(one/the same). A single compact word that carries the weight of 'furthermore' in English essays."},

{type:"teach",trg:"게다가",src:"besides / on top of that / moreover",pos:"adv",gender:null,
 note:"Additive connector with an escalation nuance.\nAdds a second point that strengthens the first.\n경제 문제가 있어요. 게다가 정치 문제도 있어요.\n= There are economic problems. On top of that, political ones too.",
 example:"A: 왜 그 사건이 뉴스에 많이 나와요?\nB: 사회 문제예요. 게다가 환경 문제도 포함돼 있어요.\nA: 아, 두 가지 문제가 있군요.\nB: 맞아요. 게다가는 '더 나쁜 점을 추가할 때' 써요.",
 exampleSrc:"A: Why is that incident covered so much in the news?\nB: It is a social issue. On top of that, it also involves an environmental issue.\nA: Ah, so there are two problems.\nB: Right. 게다가 is used to add a point that makes the situation even more so.",
 funFact:"게다가 comes from 것 (thing) + 에다가 (to/onto). Literally 'onto that thing.' It always piles on an additional, often escalating, point."},

{type:"teach",trg:"설명하다",src:"to explain",pos:"verb",gender:null,
 note:"Sino-Korean: 설(explain/說) + 명(clear/明) + 하다.\nExplain something to someone.\n선생님께 설명해요 = I explain to the teacher.\n이유를 설명하다 = to explain the reason.",
 example:"A: 이 기사가 어려워요.\nB: 제가 설명해 드릴게요.\nA: 감사해요. 잘 설명해 줘요.\nB: 사회 문제를 쉽게 설명하려고 해요.",
 exampleSrc:"A: This article is difficult.\nB: I will explain it to you.\nA: Thank you. Please explain it well.\nB: I will try to explain the social issue in a simple way.",
 funFact:"설명하다 is one of the top 500 most-used Korean verbs. In TOPIK reading tasks, you're often asked to identify 'what the writer explains (설명한다)' as the main purpose."},

{type:"teach",trg:"결정하다",src:"to decide",pos:"verb",gender:null,
 note:"Sino-Korean: 결(decide/決) + 정(determine/定) + 하다.\nUsed for both personal and formal decisions.\n결정했어요 = I have decided.\n결정: decision (noun).",
 example:"A: 어떤 뉴스를 볼지 결정했어요?\nB: 정치 뉴스를 보기로 결정했어요.\nA: 왜요?\nB: 환경 문제에 관심이 생겨서 결정했어요.",
 exampleSrc:"A: Have you decided which news to watch?\nB: I decided to watch political news.\nA: Why?\nB: I became interested in environmental issues and decided.",
 funFact:"결정하다 vs 정하다: Both mean 'to decide.' 결정하다 is more formal and deliberate; 정하다 is casual and used for simple choices like times and places."},

{type:"tip",title:"Spoken vs. Written Contrast Connectors",text:"Korean has two registers for 'however':\n\nSPOKEN (해요체 / 반말):\n하지만 = but / however\n그런데 = but / by the way\n\nFORMAL WRITTEN (문어체):\n그러나 = however / but\n반면에 = on the other hand\n\nFor B1-B2 writing: use 그러나.\nFor conversation: use 하지만.\n\nThe fastest way to sound more advanced\nin TOPIK 쓰기 is to replace 하지만\nwith 그러나 in your essays.",
 deepDive:"Full register table for contrast connectors:\n\n하지만: spoken, informal writing, blogs\n그런데: spoken, topic shift, light contrast\n그러나: formal essays, news, academic writing\n반면에: formal, side-by-side comparison\n반면: same, slightly shorter form\n\nAlso note additive connectors by register:\nCAUSAL / SPOKEN: 그래서, 그러니까\nFORMAL: 따라서, 그러므로\n\nADDITIVE / SPOKEN: 그리고\nFORMAL: 또한, 더불어\nESCALATING: 게다가 (neutral-formal)\n\nFor TOPIK II 쓰기 (writing task):\nUse 그러나, 또한, 따라서, 게다가."},

{type:"mc",q:"하지만 is used in which context?",opts:["Spoken conversation and informal writing","Academic research papers","News broadcasts only","Formal essay writing"],ans:"Spoken conversation and informal writing",hint:"하지만 belongs to 해요체 -- the everyday register. Its formal counterpart, 그러나, is saved for essays and news."},

{type:"fb",s:"경제 문제가 심각해요. ___ 해결책도 있어요.\n(The economic problem is serious. ___, there are also solutions.)",a:"하지만",opts:["하지만","또한","게다가","왜냐하면"],hint:"Two contrasting facts: 'serious problem' vs. 'solutions exist'. Which spoken contrast connector fits here?"},

{type:"mc",q:"사회가 발전했다. ___ 환경 문제가 생겼다.\nWhich formal connector fits the blank?",opts:["왜냐하면","그러나","게다가","하지만"],ans:"그러나",hint:"The sentence is in formal written style (-다 ending). Which connector belongs in formal essays and news?"},

{type:"fb",s:"___ 어렵지만 포기하지 않아요.\n(Although it's hard, I don't give up.)",a:"비록",opts:["비록","게다가","또한","그러나"],hint:"This connector signals concession: 'I acknowledge the difficulty, but still...' It always pairs with -지만 or -아도."},

{type:"mc",q:"기사를 썼어요. ___ 사진도 찍었어요.\nWhich connector shows 'in addition'?",opts:["그러나","비록","또한","하지만"],ans:"또한",hint:"Both actions are positive additions. Which formal additive connector links two parallel efforts?"},

{type:"mc",q:"선생님이 문법을 ___ 주셨어요.\n(The teacher ___ the grammar for us.)",opts:["결정하다","발전하다","이해하다","설명하다"],ans:"설명하다",hint:"The teacher made the grammar clear and easy to understand. Which verb means 'to explain'?"},

{type:"mc",q:"어디서 만날지 ___ 해야 해요.\n(We need to ___ where to meet.)",opts:["결정하다","참여하다","이해하다","설명하다"],ans:"결정하다",hint:"You have not yet agreed on a meeting place. A choice needs to be made. Which verb means 'to decide'?"},

{type:"drag_fill",s:"기자가 사건을 {1}. 비록 정보가 적지만 {2} {3}줬어요. {4} 사회 영향도 보도했어요.\n(The reporter ___ the incident. Although there was little information, they ___ explained well. Moreover, they also reported the social impact.)",blanks:{"1":"결정하다","2":"잘","3":"설명해","4":"또한"},pool:["결정하다","잘","설명해","또한","게다가","했어요"],hint:"Decided what to report. Explained clearly despite limited info. Then added social context."},

{type:"match",pairs:[{trg:"하지만",src:"but / however (spoken)"},{trg:"그러나",src:"however / but (formal written)"},{trg:"비록",src:"although / even though"},{trg:"또한",src:"also / moreover"},{trg:"게다가",src:"on top of that / besides"}]},
]},

// ── Discourse Connectors: 그래서 그런데 그리고 그러면 그래도 ──
{id:"kov2_u17l_connectors",title:"연결어 (Discourse Connectors)",icon:"🔗",xp:20,board:true,steps:[

{type:"intro",title:"Korean Discourse Connectors",desc:"Words that connect ideas across sentences.\n그래서, 그런데, 그리고, 그러면, 그래도\n→ so, but/by the way, and, then, still\n\nThese are the glue of Korean speech and TOPIK reading passages.",goals:["Recognize 5 core discourse connectors","Understand the logical relationship each signals","Use connectors to link sentences naturally","Distinguish register: spoken vs. formal alternatives"]},

{type:"teach",trg:"그래서",src:"so / therefore",pos:"conj",gender:null,
 phonetic:"geu-rae-seo",
 note:"Signals cause-and-effect: A 그래서 B.\nA caused B. Neutral register, spoken and written.",
 example:"A: 어제 아팠어요. 그래서 학교에 못 갔어요.\nB: 지금은 괜찮아요?",
 exampleSrc:"A: I was sick yesterday. So I couldn't go to school.\nB: Are you OK now?",
 funFact:"그래서 traces to 그렇게 (like that) + 해서 (having done). Literally 'having done like that', the cause already happened, so the result follows."},

{type:"teach",trg:"그런데",src:"but / by the way",pos:"conj",gender:null,
 phonetic:"geu-reon-de",
 note:"Two jobs:\n1. Soft contrast: 'but / however' (spoken register).\n2. Topic shift: 'by the way / actually'.\nContext determines which meaning applies.",
 example:"A: 운동을 시작했어요. 그런데 시간이 없어요.\nB: 그런데 오늘 날씨는 정말 좋네요!",
 exampleSrc:"A: I started exercising. But I have no time.\nB: By the way, the weather is really nice today!",
 funFact:"그런데 collapses 그러한데 (in such a state, but). Its cousin 그러나 carries the same contrast meaning in formal writing. TOPIK reading passages use 그러나; conversation uses 그런데."},

{type:"teach",trg:"그리고",src:"and / and then",pos:"conj",gender:null,
 phonetic:"geu-ri-go",
 note:"Adds information or sequences events.\nCan link nouns (A하고 B) or full sentences (A. 그리고 B.).\n그리고 works between sentences; -하고 links noun phrases.",
 example:"A: 오늘 뭐 했어요?\nB: 도서관에서 공부했어요. 그리고 친구를 만났어요.",
 exampleSrc:"A: What did you do today?\nB: I studied at the library. And then I met a friend.",
 funFact:"그리고 is from 그리하고 (doing so, and). In formal writing, 또한 and 더불어 serve the same additive role. In everyday speech, 그리고 is by far the most common additive connector."},

{type:"teach",trg:"그러면",src:"then / in that case / if so",pos:"conj",gender:null,
 phonetic:"geu-reo-myeon",
 note:"Draws a logical conclusion from what was just said.\n'If that is the case, then...'\nOften shortened to 그럼 in casual speech.",
 example:"A: 내일 시험이 있어요.\nB: 그러면 오늘 일찍 자야 해요.",
 exampleSrc:"A: There's an exam tomorrow.\nB: Then you should go to bed early today.",
 funFact:"그러면 = 그렇다 (to be so) + -(으)면 (if). Its casual short form 그럼 is extremely common. In TOPIK 듣기, expect both forms. 그럼 can also close a conversation: '그럼, 안녕히 가세요!'"},

{type:"teach",trg:"그래도",src:"still / even so / but still",pos:"conj",gender:null,
 phonetic:"geu-rae-do",
 note:"Concedes a point but asserts something despite it.\n'Even so / still', the speaker acknowledges the reality but pushes back.",
 example:"A: 힘들지 않아요?\nB: 네, 힘들어요. 그래도 계속하고 싶어요.",
 exampleSrc:"A: Isn't it hard?\nB: Yes, it's hard. But I still want to keep going.",
 funFact:"그래도 = 그래 (so / like that) + -도 (even). Compare: 그래서 (so, therefore, consequence) vs. 그래도 (even so, concession despite the fact). The -도 is the same particle that means 'even' in 저도 (me too)."},

{type:"tip",title:"Connector Logic Map",
 text:"Five connectors, five logical relationships:\n\n그래서 → CAUSE/RESULT: A happened, so B.\n그런데 → CONTRAST or TOPIC SHIFT: A, but B / By the way...\n그리고 → ADDITION/SEQUENCE: A, and also B.\n그러면 → CONDITION/CONSEQUENCE: Given A, then B.\n그래도 → CONCESSION: A is true, but still B.\n\nSpoken shortened forms:\n그러면 → 그럼\n그런데 → 근데\n그리고 → (no standard short form)\n\nFormal written alternatives:\n그래서 → 따라서 / 그러므로\n그런데 → 그러나\n그리고 → 또한 / 더불어",
 deepDive:"Register guide for TOPIK:\n\nFor TOPIK II 쓰기 (writing):\nReplace 그래서 with 따라서 or 그러므로.\nReplace 그런데 with 그러나 or 반면에.\nReplace 그리고 with 또한 or 더불어.\nKeep 그러면 as-is (acceptable in all registers).\nKeep 그래도 as-is (common in both registers).\n\nFor TOPIK II 듣기/읽기 (listening/reading):\nBoth formal and informal connectors appear.\nContext clues: -다 verb endings signal formal style.\n-아요/어요 endings signal spoken style."},

{type:"mc",q:"어제 비가 많이 왔어요. ___ 집에 있었어요.\nWhich connector best fills the blank?",opts:["그래서","그런데","그래도","그러면"],ans:"그래서",hint:"Heavy rain caused staying home. Choose the connector that signals 'A happened, so B followed.'"},

{type:"mc",q:"오늘 날씨가 좋아요. ___ 내일은 비가 온대요.\nWhich connector fits?",opts:["그리고","그런데","그러면","그래서"],ans:"그런데",hint:"The two sentences shift from good news to unexpected news. Which connector signals contrast or a topic shift?"},

{type:"fb",s:"도서관에서 공부했어요. ___ 카페에서 쉬었어요.\n(I studied at the library. ___ I rested at the cafe.)",a:"그리고",opts:["그리고","그래서","그래도","그런데"],hint:"Two actions listed in sequence, with no contrast or cause. Which connector simply adds the next thing that happened?"},

{type:"mc",q:"시험이 어려웠어요. ___ 열심히 공부했어요.\nWhich connector expresses 'even so / but still'?",opts:["그리고","그러면","그래도","그래서"],ans:"그래도",hint:"The exam was hard, that is acknowledged. But the speaker studied hard anyway. Which connector signals 'despite that'?"},

{type:"fb",s:"내일 회의가 있어요. ___ 오늘 준비해야 해요.\n(There is a meeting tomorrow. ___ I should prepare today.)",a:"그러면",opts:["그러면","그런데","그리고","그래도"],hint:"The meeting tomorrow is the given condition. What follows is the logical next step. Which connector means 'in that case / then'?"},

{type:"match",pairs:[{trg:"그래서",src:"so / therefore (cause-result)"},{trg:"그런데",src:"but / by the way (contrast or shift)"},{trg:"그리고",src:"and / and then (addition or sequence)"},{trg:"그러면",src:"then / in that case (condition)"},{trg:"그래도",src:"still / even so (concession)"}]},

{type:"fb",s:"날씨가 추워요. ___ 운동하러 갔어요.\n(The weather is cold. ___ I still went to exercise.)",a:"그래도",opts:["그래도","그래서","그러면","그리고"],hint:"Cold weather is the acknowledged obstacle. The speaker went anyway. Which connector signals 'even so'?"},

{type:"mc",q:"배가 고파요. ___ 식당을 찾아요.\nWhich connector logically fits?",opts:["그런데","그리고","그래도","그러면"],ans:"그러면",hint:"Being hungry is the stated condition. Going to find a restaurant is the logical response. Which connector means 'given that, then...'?"},

{type:"mc",q:"그러면 is often shortened in spoken Korean to:",opts:["그럼","그래도","그러나","그래서"],ans:"그럼",hint:"The shortened spoken form keeps only the first syllable of each part. Listen for this in TOPIK 듣기."},

{type:"drag_fill",s:"어제 늦게 잤어요. {1} 피곤해요. {2} 일은 해야 해요.\n(I went to bed late yesterday. ___ I'm tired. ___ I still have to work.)",blanks:{"1":"그래서","2":"그래도"},pool:["그래서","그래도","그런데","그러면","그리고"],hint:"Late sleep caused tiredness. Tiredness is acknowledged but work continues regardless."},

]},
]};

export default UNIT_17;
