// Korean B2. Batch 6, Lesson 2: Drinking Culture and Victory
// Words: 술병, 술자리, 술잔, 숨기다, 숨지다, 스승, 스위치, 스치다, 스케이트, 스케줄, 스키장, 스튜디오, 슬쩍, 슬퍼하다, 습기, 승객, 승리, 승리하다, 승부, 승진

const LESSON_2 = {
  id:"kov2_b2b6_l2", title:"술자리와 승리", icon:"🍶", xp:15, board:true,
  steps:[
    {type:"intro", title:"술자리와 승리",
     desc:"Explore Korean drinking culture vocabulary and words about victory and promotion. These words are essential for social and workplace conversations.",
     goals:["Master 20 words about social drinking, secrets, and success","Understand Korean drinking etiquette vocabulary","Use victory and promotion words in workplace contexts"]},

    {type:"teach", trg:"술병", src:"liquor bottle", pos:"noun", gender:null,
     note:"술 (alcohol) + 병 (bottle).\nA compound noun for any bottle of alcohol.",
     example:"A: 술병이 벌써 세 개나 비었네.\nB: 오늘 좀 많이 마셨지?",
     exampleSrc:"A: Three liquor bottles are already empty.\nB: We drank quite a lot today, didn't we?",
     funFact:"In Korea, it is polite to turn away from elders when drinking and to hold the glass with both hands."},

    {type:"teach", trg:"술자리", src:"drinking gathering", pos:"noun", gender:null,
     note:"술 (alcohol) + 자리 (seat/occasion).\nA social occasion centered on drinking.",
     example:"A: 오늘 저녁에 술자리가 있어.\nB: 회식이야? 누구랑?",
     exampleSrc:"A: There is a drinking gathering tonight.\nB: A company dinner? With whom?",
     funFact:"Korean 술자리 culture is deeply tied to workplace bonding. Declining can be socially awkward but is becoming more accepted."},

    {type:"teach", trg:"술잔", src:"drinking glass, liquor glass", pos:"noun", gender:null,
     note:"술 (alcohol) + 잔 (glass/cup).\nThe cup used for drinking alcohol.",
     example:"A: 술잔을 비우면 바로 채워 줘야 해.\nB: 한국 예절이 그렇지.",
     exampleSrc:"A: When someone's glass is empty, you should refill it right away.\nB: That is Korean etiquette.",
     funFact:"Pouring your own drink (자작) is considered rude in traditional Korean drinking culture. Others pour for you."},

    {type:"mc",
     q:"한국 술자리 예절로 맞는 것은?",
     opts:["다른 사람의 술잔을 채워 준다","자기 잔에 직접 따른다","술병을 한 손으로 든다","어른보다 먼저 마신다"],
     ans:"다른 사람의 술잔을 채워 준다",
     hint:"Korean drinking etiquette emphasizes serving OTHERS, not yourself."},

    {type:"teach", trg:"숨기다", src:"to hide, to conceal", pos:"verb", gender:null,
     note:"Native Korean verb.\nHiding something from others' view or knowledge.",
     example:"A: 왜 사실을 숨겼어?\nB: 걱정시키고 싶지 않았어.",
     exampleSrc:"A: Why did you hide the truth?\nB: I did not want to make you worry.",
     funFact:"The related noun 숨바꼭질 (hide-and-seek) is a beloved Korean children's game. 숨다 means to hide oneself."},

    {type:"teach", trg:"숨지다", src:"to die, to pass away (formal)", pos:"verb", gender:null,
     note:"숨 (breath) + 지다 (to fall/cease).\nA formal, news-style word for dying.",
     example:"A: 그 사고로 두 명이 숨졌대.\nB: 정말 안타깝다.",
     exampleSrc:"A: They say two people died in that accident.\nB: That is really tragic.",
     funFact:"숨지다 is the standard word in Korean news reports. More casual is 죽다, more respectful is 돌아가시다."},

    {type:"teach", trg:"스승", src:"teacher, mentor", pos:"noun", gender:null,
     note:"Native Korean word.\nA revered teacher or master, not just any instructor.",
     example:"A: 스승의 날에 뭘 준비했어?\nB: 카네이션하고 편지를 썼어.",
     exampleSrc:"A: What did you prepare for Teacher's Day?\nB: I wrote a letter and got a carnation.",
     funFact:"May 15 is 스승의 날 (Teacher's Day) in Korea. The word carries deep Confucian respect, unlike 선생님."},

    {type:"teach", trg:"스위치", src:"switch", pos:"noun", gender:null,
     note:"Loanword from English 'switch'.\nA device for turning things on and off.",
     example:"A: 스위치가 어디 있어?\nB: 문 옆에 있어.",
     exampleSrc:"A: Where is the switch?\nB: It is next to the door.",
     funFact:"Korean has many English loanwords for technology. 스위치 is also the Korean name for the Nintendo Switch console."},

    {type:"fb",
     s:"방을 나갈 때 {1}를 꺼 주세요.",
     a:["스위치"],
     opts:["스위치","스케줄","스튜디오","스키장"],
     hint:"The device next to the door that turns lights on and off.",
     sSrc:"Please turn off the {1} when you leave the room."},

    {type:"teach", trg:"스치다", src:"to brush past, to flash by", pos:"verb", gender:null,
     note:"Native Korean verb.\nSomething passing by lightly or briefly.",
     example:"A: 좋은 생각이 머리를 스쳤어.\nB: 뭔데? 빨리 말해 봐.",
     exampleSrc:"A: A good idea flashed through my mind.\nB: What is it? Tell me quickly.",
     funFact:"스치다 is often used figuratively: an idea or memory that briefly crosses your mind."},

    {type:"teach", trg:"스케이트", src:"skates, skating", pos:"noun", gender:null,
     note:"Loanword from English 'skate'.\nIce skating or the skates themselves.",
     example:"A: 겨울에 스케이트 타러 갈래?\nB: 좋아! 실내 링크로 가자.",
     exampleSrc:"A: Want to go skating in winter?\nB: Sure! Let's go to an indoor rink.",
     funFact:"Korea is a powerhouse in short track speed skating, winning more Olympic golds than any other country."},

    {type:"teach", trg:"스케줄", src:"schedule", pos:"noun", gender:null,
     note:"Loanword from English 'schedule'.\nAlso written 스케쥴. Interchangeable with 일정.",
     example:"A: 이번 주 스케줄이 어떻게 돼?\nB: 수요일만 비어 있어.",
     exampleSrc:"A: What is your schedule this week?\nB: Only Wednesday is free.",
     funFact:"K-pop fans track their favorite idols' 스케줄 obsessively. Fan sites publish daily schedule updates."},

    {type:"teach", trg:"스키장", src:"ski resort", pos:"noun", gender:null,
     note:"스키 (ski, loanword) + 장 (場, place).\nA place for skiing.",
     example:"A: 이번 겨울에 스키장 갈 거야?\nB: 응, 강원도에 있는 데로 갈 거야.",
     exampleSrc:"A: Are you going to a ski resort this winter?\nB: Yes, I will go to one in Gangwon Province.",
     funFact:"Gangwon Province hosted the 2018 Winter Olympics. Korea's ski resorts are popular weekend destinations."},

    {type:"teach", trg:"스튜디오", src:"studio", pos:"noun", gender:null,
     note:"Loanword from English 'studio'.\nA room for recording, filming, or living.",
     example:"A: 녹음은 어디서 해?\nB: 강남에 있는 스튜디오에서 해.",
     exampleSrc:"A: Where do you do the recording?\nB: At a studio in Gangnam.",
     funFact:"In Korean real estate, 스튜디오 also means a studio apartment, similar to a 원룸 (one-room)."},

    {type:"teach", trg:"슬쩍", src:"secretly, stealthily", pos:"adv", gender:null,
     note:"Native Korean adverb.\nDoing something quietly so others do not notice.",
     example:"A: 슬쩍 나가자. 지루해.\nB: 들키면 어떡해?",
     exampleSrc:"A: Let's sneak out. It is boring.\nB: What if we get caught?",
     funFact:"슬쩍 has a mischievous, playful nuance. It often describes harmless sneaking rather than serious deception."},

    {type:"teach", trg:"슬퍼하다", src:"to be sad, to grieve", pos:"verb", gender:null,
     note:"슬프다 (sad) + -어하다 (to show/feel).\nExpressing sadness outwardly.",
     example:"A: 너무 슬퍼하지 마.\nB: 고마워, 노력할게.",
     exampleSrc:"A: Do not be too sad.\nB: Thank you, I will try.",
     funFact:"Korean distinguishes between 슬프다 (feeling sad internally) and 슬퍼하다 (showing sadness externally)."},

    {type:"mc",
     q:"'슬쩍'의 의미와 가장 가까운 것은?",
     opts:["크게","몰래","빠르게","천천히"],
     ans:"몰래",
     hint:"Think of doing something quietly so that nobody notices you."},

    {type:"teach", trg:"습기", src:"moisture, humidity", pos:"noun", gender:null,
     note:"Sino-Korean. 濕 (wet) + 氣 (air/energy).\nWater vapor in the air.",
     example:"A: 장마철에는 습기가 너무 많아.\nB: 제습기를 틀어야겠다.",
     exampleSrc:"A: There is too much humidity during the monsoon season.\nB: We should turn on the dehumidifier.",
     funFact:"Korea's 장마 (monsoon) season in July brings extreme humidity. 습기 제거 products are a big business."},

    {type:"teach", trg:"승객", src:"passenger", pos:"noun", gender:null,
     note:"Sino-Korean. 乘 (ride) + 客 (guest).\nA person riding a vehicle.",
     example:"A: 이 비행기에 승객이 몇 명이에요?\nB: 약 이백 명 정도요.",
     exampleSrc:"A: How many passengers are on this plane?\nB: About two hundred.",
     funFact:"Korean public transport announcements always address riders as 승객 여러분 (dear passengers)."},

    {type:"teach", trg:"승리", src:"victory", pos:"noun", gender:null,
     note:"Sino-Korean. 勝 (win) + 利 (advantage).\nWinning in a competition or conflict.",
     example:"A: 드디어 승리했어!\nB: 정말 대단해! 축하해!",
     exampleSrc:"A: We finally won!\nB: That is amazing! Congratulations!",
     funFact:"승리 is a popular Korean name meaning 'victory.' K-pop group BIGBANG had a member named 승리."},

    {type:"teach", trg:"승리하다", src:"to win, to achieve victory", pos:"verb", gender:null,
     note:"승리 + 하다 (to do).\nThe verb form of achieving victory.",
     example:"A: 한국 팀이 승리했대!\nB: 몇 대 몇으로?",
     exampleSrc:"A: They say the Korean team won!\nB: What was the score?",
     funFact:"Korean sports commentary uses 승리하다 for formal reports and 이기다 for casual conversation."},

    {type:"teach", trg:"승부", src:"match, contest, showdown", pos:"noun", gender:null,
     note:"Sino-Korean. 勝 (win) + 負 (lose).\nLiterally 'winning and losing,' a decisive contest.",
     example:"A: 이번 경기는 진짜 승부였어.\nB: 마지막까지 긴장됐어.",
     exampleSrc:"A: This game was a real showdown.\nB: It was nerve-wracking until the end.",
     funFact:"승부욕 (competitive spirit, literally 'desire for a match') is highly valued in Korean sports and business."},

    {type:"teach", trg:"승진", src:"promotion (at work)", pos:"noun", gender:null,
     note:"Sino-Korean. 升 (rise) + 進 (advance).\nMoving up to a higher position.",
     example:"A: 드디어 과장으로 승진했어!\nB: 축하해! 한턱내야지.",
     exampleSrc:"A: I finally got promoted to section chief!\nB: Congratulations! You should treat us.",
     funFact:"In Korean corporate culture, 승진 is celebrated with a dinner where the promoted person treats colleagues."},

    {type:"fb",
     s:"열심히 일한 결과 부장으로 {1}했습니다.",
     a:["승진"],
     opts:["승진","승리","승부","승객"],
     hint:"Moving up to a higher position at work after years of hard work.",
     sSrc:"As a result of working hard, I got {1} to department head."},

    {type:"match", pairs:[
      {trg:"승리", src:"victory"},
      {trg:"승부", src:"match, contest"},
      {trg:"승진", src:"promotion"},
      {trg:"승객", src:"passenger"}
    ]}
  ]
};

export default LESSON_2;
