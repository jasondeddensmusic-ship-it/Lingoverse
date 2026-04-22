// Korean V2 B1 Gap Lesson 15. Tools, Preparation, and Repair
// 20 teach cards + interleaved quizzes. Max 30 steps.

const LESSON_15 = {
  id:"kov2_b1gap_l15", title:"준비와 수리", icon:"🔧", xp:15, board:true,
  steps:[
    {type:"intro", title:"Tools, Preparation, and Repair",
     desc:"From preparing events to fixing broken machines, these words cover the practical side of getting things done. Learn verbs for making, placing, and repairing.",
     goals:["Master 20 preparation and tool words","Use passive/causative verb pairs","Build practical everyday dialogues"]},

    // ── Teach 1-4: Preparation verbs ──
    {type:"teach", trg:"마련되다", src:"to be prepared, to be arranged", pos:"verb", gender:null,
     note:"Passive form of 마련하다.\nSomething is prepared or comes into being.",
     example:"A: 자리가 마련됐어요?\nB: 네, 30명분 자리가 마련됐어요.\nA: 음식도 마련됐어요?\nB: 네, 다 준비됐어요.",
     exampleSrc:"A: Have the seats been arranged?\nB: Yes, seats for 30 people have been prepared.\nA: Has food been prepared too?\nB: Yes, everything is ready.",
     funFact:"자리가 마련되다 is a formal way to say a venue or opportunity has been prepared. Common in event announcements."},

    {type:"teach", trg:"마련하다", src:"to prepare, to arrange", pos:"verb", gender:null,
     note:"Transitive: YOU prepare something.\nOften for events, funds, or opportunities.",
     example:"A: 파티 준비를 어떻게 해요?\nB: 먼저 장소를 마련해야 해요.\nA: 음식은요?\nB: 음식도 마련할게요. 걱정 마세요.",
     exampleSrc:"A: How do we prepare for the party?\nB: First, we need to arrange a venue.\nA: What about food?\nB: I'll prepare the food too. Don't worry.",
     funFact:"돈을 마련하다 (to come up with money) is used when you need to gather funds, often urgently."},

    {type:"teach", trg:"만들어지다", src:"to be made, to be created", pos:"verb", gender:null,
     note:"만들다 (make) + -어지다 (passive).\nSomething is made or comes into existence.",
     example:"A: 이 다리가 언제 만들어졌어요?\nB: 100년 전에 만들어졌어요.\nA: 정말요? 아직도 튼튼해요.\nB: 잘 만들어진 건물은 오래 가요.",
     exampleSrc:"A: When was this bridge built?\nB: It was built 100 years ago.\nA: Really? It's still sturdy.\nB: Well-made structures last a long time.",
     funFact:"Korean passive verbs with -어지다 are extremely common: 만들어지다, 깨지다, 열리다, 닫히다."},

    {type:"teach", trg:"꾸미다", src:"to decorate, to adorn", pos:"verb", gender:null,
     note:"Decorating a room, one's appearance, or a story.\n방을 꾸미다 = to decorate a room.",
     example:"A: 방을 새로 꾸몄어요?\nB: 네, 주말에 꾸몄어요.\nA: 예쁘게 잘 꾸몄네요!\nB: 감사해요. 시간이 좀 걸렸어요.",
     exampleSrc:"A: Did you redecorate your room?\nB: Yes, I decorated it over the weekend.\nA: You decorated it really nicely!\nB: Thank you. It took some time.",
     funFact:"꾸미기 (decorating/styling) is a popular hobby category in Korea. 셀프 인테리어 = DIY interior decorating."},

    // ── Quiz batch 1 ──
    {type:"mc",
     q:"행사 장소가 이미 ___.",
     opts:["마련됐어요","마련했어요","만들어졌어요","꾸몄어요"],
     ans:"마련됐어요",
     hint:"The event venue has already been arranged. Which passive form means 'was prepared'?"},

    {type:"fb",
     s:"크리스마스 트리를 예쁘게 {1}.",
     a:["꾸몄어요"],
     opts:["꾸몄어요","마련했어요","만들었어요","고쳤어요"],
     hint:"We beautifully adorned the Christmas tree. Which verb means to decorate?",
     sSrc:"We decorated the Christmas tree beautifully."},

    // ── Teach 5-8: Placement verbs ──
    {type:"teach", trg:"놓이다", src:"to be placed, to be put", pos:"verb", gender:null,
     note:"Passive of 놓다 (to put, place).\nThe object sits there, having been placed.",
     example:"A: 테이블 위에 뭐가 놓여 있어요?\nB: 꽃병이 놓여 있어요.\nA: 누가 놓았어요?\nB: 아마 엄마가 놓으셨을 거예요.",
     exampleSrc:"A: What's placed on the table?\nB: A vase is placed there.\nA: Who put it there?\nB: Probably Mom placed it there.",
     funFact:"놓다/놓이다 is one of the fundamental Korean transitive/passive pairs. 놓다 (you place it) vs 놓이다 (it is placed)."},

    {type:"teach", trg:"놓치다", src:"to miss, to let go of", pos:"verb", gender:null,
     note:"놓다 (let go) + 치다 (strike).\nMissing a chance or letting something slip away.",
     example:"A: 버스를 놓쳤어요!\nB: 다음 버스는 언제 와요?\nA: 10분 후에요.\nB: 기회를 놓치면 안 돼요. 빨리 가요!",
     exampleSrc:"A: I missed the bus!\nB: When does the next bus come?\nA: In 10 minutes.\nB: We can't miss the chance. Let's hurry!",
     funFact:"기회를 놓치다 (to miss an opportunity) is used constantly. The opposite: 기회를 잡다 (to seize an opportunity)."},

    {type:"teach", trg:"내놓다", src:"to put out, to present", pos:"verb", gender:null,
     note:"내 (outward) + 놓다 (place).\nPutting something out for others to see or use.",
     example:"A: 새 제품을 내놓았어요?\nB: 네, 이번 달에 내놓았어요.\nA: 반응이 어때요?\nB: 좋아요. 사람들이 관심을 많이 보여요.",
     exampleSrc:"A: Did you put out a new product?\nB: Yes, we released it this month.\nA: How's the response?\nB: Good. People are showing a lot of interest.",
     funFact:"Companies 제품을 내놓다 (release products). Students 답을 내놓다 (present answers). Flexible compound verb."},

    {type:"teach", trg:"고치다", src:"to fix, to repair", pos:"verb", gender:null,
     note:"Repairing broken things or correcting mistakes.\n습관을 고치다 = to fix a habit.",
     example:"A: 컴퓨터가 고장났어요.\nB: 어디서 고칠 수 있어요?\nA: 수리점에서 고칠 수 있어요.\nB: 빨리 고쳐야겠네요.",
     exampleSrc:"A: The computer broke down.\nB: Where can you get it fixed?\nA: At a repair shop.\nB: You should get it fixed quickly.",
     funFact:"고치다 works for machines (컴퓨터를 고치다), habits (버릇을 고치다), and text (글을 고치다)."},

    // ── Quiz batch 2 ──
    {type:"match", pairs:[
      {trg:"놓이다", src:"to be placed"},
      {trg:"놓치다", src:"to miss, let go"},
      {trg:"내놓다", src:"to put out"},
      {trg:"고치다", src:"to fix, repair"}
    ]},

    {type:"mc",
     q:"버스를 ___서 택시를 탔어요.",
     opts:["놓여","놓쳐","내놓아","고쳐"],
     ans:"놓쳐",
     hint:"I missed the bus so I took a taxi. Which verb means to miss or let slip?"},

    // ── Teach 9-12: Things and tools ──
    {type:"teach", trg:"고장", src:"breakdown, malfunction", pos:"noun", gender:null,
     note:"Hanja: 故障 (cause + obstacle).\n고장나다 = to break down.",
     example:"A: 엘리베이터가 고장났어요.\nB: 언제부터 고장이에요?\nA: 오늘 아침부터요.\nB: 수리 기사를 불러야겠어요.",
     exampleSrc:"A: The elevator broke down.\nB: Since when has it been broken?\nA: Since this morning.\nB: We need to call a repairman.",
     funFact:"고장 is one of the first practical words you learn in Korea. Useful for ATMs, vending machines, and transit."},

    {type:"teach", trg:"도구", src:"tool, instrument", pos:"noun", gender:null,
     note:"Hanja: 道具 (way + implement).\nAny tool from a hammer to software.",
     example:"A: 어떤 도구가 필요해요?\nB: 망치하고 드라이버가 필요해요.\nA: 도구 상자에 있어요?\nB: 네, 확인해 볼게요.",
     exampleSrc:"A: What tools do you need?\nB: I need a hammer and a screwdriver.\nA: Are they in the toolbox?\nB: Yes, let me check.",
     funFact:"In modern Korean, 도구 also applies to digital tools: 검색 도구 (search tool), 개발 도구 (development tools)."},

    {type:"teach", trg:"기계", src:"machine", pos:"noun", gender:null,
     note:"Hanja: 機械 (mechanism + device).\nAny mechanical or electronic device.",
     example:"A: 이 기계 어떻게 써요?\nB: 버튼을 누르면 돼요.\nA: 기계가 복잡해 보여요.\nB: 처음에는 그래요. 곧 익숙해져요.",
     exampleSrc:"A: How do you use this machine?\nB: Just press the button.\nA: The machine looks complicated.\nB: It does at first. You'll get used to it soon.",
     funFact:"기계치 means someone who is terrible with machines or technology. 치 = a derogatory suffix meaning 'fool.'"},

    {type:"teach", trg:"모니터", src:"monitor, screen", pos:"noun", gender:null,
     note:"English loanword.\nComputer screen or monitoring device.",
     example:"A: 모니터가 안 켜져요.\nB: 전원을 확인해 봤어요?\nA: 네, 전원은 켜져 있어요.\nB: 케이블을 다시 연결해 보세요.",
     exampleSrc:"A: The monitor won't turn on.\nB: Did you check the power?\nA: Yes, the power is on.\nB: Try reconnecting the cable.",
     funFact:"Korean uses many English tech words: 모니터, 키보드 (keyboard), 마우스 (mouse), 프린터 (printer)."},

    // ── Quiz batch 3 ──
    {type:"fb",
     s:"세탁기가 {1}나서 수리점에 전화했어요.",
     a:["고장"],
     opts:["고장","고치","도구","기계"],
     hint:"The washing machine had a malfunction, so I called the repair shop. Which noun means breakdown?",
     sSrc:"The washing machine broke down, so I called the repair shop."},

    // ── Teach 13-16: Help and opportunity ──
    {type:"teach", trg:"모델", src:"model (role model, fashion model)", pos:"noun", gender:null,
     note:"English loanword.\n역할 모델 = role model.",
     example:"A: 역할 모델이 누구예요?\nB: 저는 어머니가 역할 모델이에요.\nA: 왜요?\nB: 항상 열심히 일하시거든요.",
     exampleSrc:"A: Who is your role model?\nB: My mother is my role model.\nA: Why?\nB: Because she always works hard.",
     funFact:"한국 모델 (Korean models) have gained global fame through K-fashion. Seoul Fashion Week is a major industry event."},

    {type:"teach", trg:"도움", src:"help, assistance", pos:"noun", gender:null,
     note:"돕다 (to help) + -ㅁ (noun form).\n도움이 되다 = to be helpful.",
     example:"A: 도움이 필요해요?\nB: 네, 좀 도와주세요.\nA: 어떤 도움이 필요해요?\nB: 이 짐 좀 옮기는 거 도와주세요.",
     exampleSrc:"A: Do you need help?\nB: Yes, please help me.\nA: What kind of help do you need?\nB: Please help me move this luggage.",
     funFact:"도움 is from the irregular verb 돕다 (to help). It follows the ㅂ-irregular pattern: 돕다 > 도와요."},

    {type:"teach", trg:"공동", src:"joint, shared, communal", pos:"noun", gender:null,
     note:"Hanja: 共同 (together + same).\n공동 작업 = collaborative work.",
     example:"A: 이건 공동 프로젝트예요.\nB: 몇 명이서 공동으로 해요?\nA: 5명이서 공동 작업해요.\nB: 공동으로 하면 더 빨라요.",
     exampleSrc:"A: This is a joint project.\nB: How many people work jointly?\nA: 5 people work collaboratively.\nB: Working jointly is faster.",
     funFact:"공동체 (community) is a beloved concept in Korean society. 마을 공동체 = village community."},

    {type:"teach", trg:"기회", src:"opportunity, chance", pos:"noun", gender:null,
     note:"Hanja: 機會 (mechanism + meeting).\nA moment when conditions align.",
     example:"A: 좋은 기회가 왔어요.\nB: 어떤 기회예요?\nA: 해외 연수 기회예요.\nB: 이런 기회는 놓치면 안 돼요!",
     exampleSrc:"A: A good opportunity came.\nB: What kind of opportunity?\nA: An overseas training opportunity.\nB: You can't miss this kind of chance!",
     funFact:"기회는 준비된 자에게 온다 (opportunity comes to the prepared) is a beloved Korean motivational quote."},

    // ── Quiz batch 4 ──
    {type:"match", pairs:[
      {trg:"도움", src:"help"},
      {trg:"공동", src:"joint, shared"},
      {trg:"기회", src:"opportunity"},
      {trg:"모델", src:"model"}
    ]},

    // ── Teach 17-20: Possession and placement ──
    {type:"teach", trg:"구하다", src:"to seek, to obtain", pos:"verb", gender:null,
     note:"Hanja: 求 (seek).\n일을 구하다 = to look for a job.\n구출하다 = to rescue.",
     example:"A: 요즘 일을 구하고 있어요.\nB: 어떤 일을 구해요?\nA: IT 분야에서 일을 구해요.\nB: 좋은 곳을 구하면 좋겠네요.",
     exampleSrc:"A: I'm looking for a job these days.\nB: What kind of job are you looking for?\nA: I'm looking for work in the IT field.\nB: I hope you find a good place.",
     funFact:"구인 (seeking people) and 구직 (seeking work) are the words for job listings and job hunting respectively."},

    {type:"teach", trg:"갖다", src:"to have, to possess", pos:"verb", gender:null,
     note:"Shortened form of 가지다.\nVery common in spoken Korean.",
     example:"A: 펜 갖고 있어요?\nB: 네, 여기요.\nA: 감사해요. 잠깐 빌려도 돼요?\nB: 네, 갖고 쓰세요.",
     exampleSrc:"A: Do you have a pen?\nB: Yes, here you go.\nA: Thank you. Can I borrow it for a moment?\nB: Yes, take and use it.",
     funFact:"갖다 is the conversational form. 가지다 is fuller. Both are equally correct, but 갖다 dominates in speech."},

    {type:"teach", trg:"두다", src:"to put, to place, to keep", pos:"verb", gender:null,
     note:"Placing something somewhere for later.\n-아/어 두다 = do and leave in that state.",
     example:"A: 열쇠를 어디에 뒀어요?\nB: 테이블 위에 뒀어요.\nA: 거기 없는데요.\nB: 그러면 가방에 넣어 뒀을 거예요.",
     exampleSrc:"A: Where did you put the keys?\nB: I put them on the table.\nA: They're not there.\nB: Then I probably put them in my bag.",
     funFact:"The grammar pattern -아/어 두다 means to do something and leave it that way: 사 두다 (buy and keep), 써 두다 (write down and keep)."},

    {type:"teach", trg:"남기다", src:"to leave behind", pos:"verb", gender:null,
     note:"Causative of 남다 (to remain).\nYOU leave something behind for others.",
     example:"A: 메시지를 남기시겠어요?\nB: 네, 전화했다고 남겨 주세요.\nA: 다른 말씀은요?\nB: 내일 다시 전화하겠다고 남겨 주세요.",
     exampleSrc:"A: Would you like to leave a message?\nB: Yes, please leave a message that I called.\nA: Anything else?\nB: Please note that I'll call again tomorrow.",
     funFact:"메시지를 남기다 (leave a message) and 흔적을 남기다 (leave a trace) are the most common collocations."},

    // ── Final quiz batch ──
    {type:"mc",
     q:"요즘 새로운 일을 ___고 있어요.",
     opts:["갖","두","구하","남기"],
     ans:"구하",
     hint:"These days I am looking for a new job. Which verb means to seek or look for?"},

    {type:"fb",
     s:"전화했다고 메시지를 {1} 주세요.",
     a:["남겨"],
     opts:["남겨","둬","갖고","구해"],
     hint:"Please leave a message saying I called. Which verb means to leave something behind?",
     sSrc:"Please leave a message that I called."},

    {type:"mc",
     q:"열쇠를 서랍에 넣어 ___.",
     opts:["남겼어요","구했어요","갖었어요","뒀어요"],
     ans:"뒀어요",
     hint:"I put the keys in the drawer and left them there. Which verb means to place and keep?"}
  ]
};

export default LESSON_15;
