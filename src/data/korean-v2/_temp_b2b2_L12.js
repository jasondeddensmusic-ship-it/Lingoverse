// Korean B2. Batch 2, Lesson 12: Buttons and Moonlight
// Words: 단추, 단편, 단풍, 닫히다, 달래다, 달려들다, 달리, 달리기, 달리하다, 달빛, 담, 담당, 담당자, 담요, 답, 답변, 답장, 답하다, 닷새, 당기다

const LESSON_12 = {
  id:"kov2_b2b2_l12", title:"가을빛과 답변", icon:"🍁", xp:15, board:true,
  steps:[
    {type:"intro", title:"가을빛과 답변",
     desc:"Explore vocabulary about autumn beauty, responses, and responsibility. These words span poetic description and professional communication.",
     goals:["Master 20 words about seasons, replies, and duty","Learn compound verbs with directional meaning","Build workplace vocabulary for roles and responses"]},

    {type:"teach", trg:"단추", src:"button (on clothing)", pos:"noun", gender:null,
     note:"Native Korean. A small disc sewn onto\nclothing for fastening.",
     example:"A: 셔츠 단추가 하나 빠졌어요.\nB: 바느질해서 다시 달아줄게요.",
     exampleSrc:"A: A button on the shirt fell off.\nB: I will sew it back on.",
     funFact:"단추를 잘못 끼우다 (button up wrong) means 'to start off on the wrong foot.' A common Korean metaphor."},

    {type:"teach", trg:"단편", src:"short story; short film", pos:"noun", gender:null,
     note:"Sino-Korean. 短 (short) + 篇 (piece/work).\nA short creative work.",
     example:"A: 이 작가의 단편 소설을 읽었어요?\nB: 네, 정말 감동적이었어요.",
     exampleSrc:"A: Have you read this author's short stories?\nB: Yes, they were really moving.",
     funFact:"단편 vs 장편 (long-form). Korean literary prizes often have separate categories for 단편 and 장편."},

    {type:"teach", trg:"단풍", src:"autumn foliage, maple leaves", pos:"noun", gender:null,
     note:"Sino-Korean. 丹 (red) + 楓 (maple).\nRed and golden leaves in autumn.",
     example:"A: 올해 단풍 구경 갔어요?\nB: 네, 설악산에서 정말 아름다웠어요.",
     exampleSrc:"A: Did you go leaf viewing this year?\nB: Yes, it was really beautiful at Seoraksan.",
     funFact:"단풍놀이 (autumn leaf viewing) is a beloved Korean activity. Seoraksan and Naejangsan are the top destinations."},

    {type:"teach", trg:"닫히다", src:"to be closed, to be shut", pos:"verb", gender:null,
     note:"Passive of 닫다 (to close).\nSomething becomes closed on its own.",
     example:"A: 문이 저절로 닫혔어요.\nB: 바람 때문인가 봐요.",
     exampleSrc:"A: The door closed by itself.\nB: It must be because of the wind.",
     funFact:"닫히다 (passive, it closes) vs 닫다 (active, you close it). The -히- infix creates many Korean passives."},

    {type:"teach", trg:"달래다", src:"to soothe, to comfort, to pacify", pos:"verb", gender:null,
     note:"Native Korean. To calm someone down,\nespecially someone upset or crying.",
     example:"A: 울고 있는 아이를 달래 주세요.\nB: 괜찮아, 엄마가 여기 있어.",
     exampleSrc:"A: Please soothe the crying child.\nB: It is okay, mommy is here.",
     funFact:"달래다 also means 'to coax.' 배고픔을 달래다 (soothe hunger) extends it to abstract discomfort."},

    {type:"teach", trg:"달려들다", src:"to rush at, to pounce on", pos:"verb", gender:null,
     note:"달리다 (run) + 어 + 들다 (enter).\nTo charge toward something aggressively.",
     example:"A: 강아지가 음식에 달려들었어요.\nB: 배가 많이 고팠나 봐요.",
     exampleSrc:"A: The puppy pounced on the food.\nB: It must have been very hungry.",
     funFact:"달려들다 implies aggressive movement toward a target. 일에 달려들다 (throw oneself into work) is a common use."},

    {type:"mc",
     q:"'단풍'과 가장 관련 있는 계절은?",
     opts:["가을","봄","여름","겨울"],
     ans:"가을",
     hint:"The season when leaves turn red and gold before falling from the trees."},

    {type:"teach", trg:"달리", src:"differently, unlike", pos:"adv", gender:null,
     note:"다르다 (different) + 이 (adverb).\nIn a manner that is different from the norm.",
     example:"A: 예상과 달리 결과가 좋았어요.\nB: 다행이네요!",
     exampleSrc:"A: Unlike expectations, the results were good.\nB: That is fortunate!",
     funFact:"~와/과 달리 (unlike, different from) is a key pattern in formal Korean writing and presentations."},

    {type:"teach", trg:"달리기", src:"running, a race", pos:"noun", gender:null,
     note:"달리다 (to run) + 기 (nominalization).\nThe act or sport of running.",
     example:"A: 아침마다 달리기를 해요.\nB: 건강에 정말 좋죠.",
     exampleSrc:"A: I go running every morning.\nB: It is really good for your health.",
     funFact:"달리기 is the general term. 마라톤 (marathon) and 조깅 (jogging) are borrowed English terms also used."},

    {type:"teach", trg:"달리하다", src:"to make different, to differentiate", pos:"verb", gender:null,
     note:"달리 (differently) + 하다.\nTo handle or do something in a different way.",
     example:"A: 이번에는 접근 방식을 달리해 봅시다.\nB: 좋은 생각이에요.",
     exampleSrc:"A: Let us try a different approach this time.\nB: That is a good idea.",
     funFact:"달리하다 is formal. 방법을 달리하다 (change the method) is its most common collocation in writing."},

    {type:"teach", trg:"달빛", src:"moonlight", pos:"noun", gender:null,
     note:"달 (moon) + 빛 (light).\nThe soft glow of the moon at night.",
     example:"A: 달빛이 참 밝아요.\nB: 보름달이라서 그래요.",
     exampleSrc:"A: The moonlight is really bright.\nB: That is because it is a full moon.",
     funFact:"달빛 소나타 is the Korean name for Beethoven's Moonlight Sonata. 달빛 is deeply poetic in Korean literature."},

    {type:"teach", trg:"담", src:"wall, fence", pos:"noun", gender:null,
     note:"Native Korean. A barrier surrounding\na property or dividing spaces.",
     example:"A: 담 너머에 무엇이 있어요?\nB: 이웃집 정원이에요.",
     exampleSrc:"A: What is beyond the wall?\nB: It is the neighbor's garden.",
     funFact:"담을 쌓다 (build a wall) figuratively means to cut off relations with someone. A vivid metaphor."},

    {type:"fb",
     s:"울고 있는 아이를 {1} 주세요.",
     a:["달래"],
     opts:["달래","달려","당겨","닫아"],
     hint:"To comfort and calm down someone who is upset or crying.",
     sSrc:"Please {1} the crying child."},

    {type:"teach", trg:"담당", src:"charge, responsibility", pos:"noun", gender:null,
     note:"Sino-Korean. 擔 (carry) + 當 (face/handle).\nThe responsibility for a task or area.",
     example:"A: 이 프로젝트는 누가 담당이에요?\nB: 김 과장이 담당하고 있어요.",
     exampleSrc:"A: Who is in charge of this project?\nB: Manager Kim is in charge.",
     funFact:"담당하다 (to be in charge of) is essential workplace vocabulary. Every Korean office uses it daily."},

    {type:"teach", trg:"담당자", src:"person in charge, contact person", pos:"noun", gender:null,
     note:"담당 (charge) + 자 (person).\nThe specific person responsible for something.",
     example:"A: 담당자에게 연락해 주세요.\nB: 전화번호를 알려 주실래요?",
     exampleSrc:"A: Please contact the person in charge.\nB: Could you give me the phone number?",
     funFact:"담당자 is the Korean equivalent of 'point of contact.' It appears on every business card and email signature."},

    {type:"teach", trg:"담요", src:"blanket", pos:"noun", gender:null,
     note:"Sino-Korean origin. 毯 + variation.\nA warm covering for the body.",
     example:"A: 담요 한 장 더 줄까요?\nB: 네, 좀 추워요.",
     exampleSrc:"A: Should I give you one more blanket?\nB: Yes, it is a bit cold.",
     funFact:"이불 (duvet/comforter) vs 담요 (blanket). Korean distinguishes between the thick 이불 and thinner 담요."},

    {type:"teach", trg:"답", src:"answer, response", pos:"noun", gender:null,
     note:"Sino-Korean. 答 (answer).\nThe solution to a question or problem.",
     example:"A: 이 문제의 답을 알아요?\nB: 3번이에요.",
     exampleSrc:"A: Do you know the answer to this problem?\nB: It is number 3.",
     funFact:"답 is the short form. 대답 (reply to someone) and 정답 (correct answer) are common compounds."},

    {type:"teach", trg:"답변", src:"reply, official response", pos:"noun", gender:null,
     note:"Sino-Korean. 答 (answer) + 辯 (speak).\nA formal spoken or written response.",
     example:"A: 질문에 답변해 주세요.\nB: 네, 하나씩 답변하겠습니다.",
     exampleSrc:"A: Please reply to the questions.\nB: Yes, I will respond one by one.",
     funFact:"답변 is more formal than 대답. Used in press conferences, official hearings, and customer service."},

    {type:"mc",
     q:"'담당자'는 어떤 사람을 말하나요?",
     opts:["회사를 떠난 사람","특정 업무를 맡은 사람","모든 일을 하는 사람","새로 입사한 사람"],
     ans:"특정 업무를 맡은 사람",
     hint:"The specific individual assigned to handle or be responsible for a particular task."},

    {type:"teach", trg:"답장", src:"reply (to a letter/message)", pos:"noun", gender:null,
     note:"答 (answer) + 狀 (document).\nA written response to correspondence.",
     example:"A: 이메일 답장을 아직 안 했어요.\nB: 빨리 보내세요.",
     exampleSrc:"A: I have not replied to the email yet.\nB: Send it quickly.",
     funFact:"답장 is for written replies. 답문 (reply to official message) is even more formal and bureaucratic."},

    {type:"teach", trg:"답하다", src:"to answer, to reply", pos:"verb", gender:null,
     note:"답 (answer) + 하다.\nTo give a response to a question.",
     example:"A: 솔직하게 답해 주세요.\nB: 네, 사실대로 말씀드리겠습니다.",
     exampleSrc:"A: Please answer honestly.\nB: Yes, I will tell you the truth.",
     funFact:"답하다 is slightly more formal than 대답하다. Both are correct, but 답하다 appears more in writing."},

    {type:"teach", trg:"닷새", src:"five days", pos:"noun", gender:null,
     note:"Native Korean number for days.\nThe fifth in the traditional day-counting system.",
     example:"A: 닷새만 기다려 주세요.\nB: 알겠어요, 금요일까지죠?",
     exampleSrc:"A: Please wait just five days.\nB: Okay, until Friday then?",
     funFact:"Continuing the series: 하루 (1), 이틀 (2), 사흘 (3), 나흘 (4), 닷새 (5), 엿새 (6), 이레 (7)."},

    {type:"teach", trg:"당기다", src:"to pull, to draw toward", pos:"verb", gender:null,
     note:"Native Korean. To exert force bringing\nsomething closer to yourself.",
     example:"A: 문을 당기세요.\nB: 아, 미는 게 아니라 당기는 거였군요.",
     exampleSrc:"A: Pull the door.\nB: Oh, it was pull not push.",
     funFact:"밀다 (push) vs 당기다 (pull). Korean door signs often say 미시오 (push) and 당기시오 (pull)."},

    {type:"match", pairs:[
      {trg:"단풍", src:"autumn foliage"},
      {trg:"달빛", src:"moonlight"},
      {trg:"답변", src:"reply"},
      {trg:"담당자", src:"person in charge"},
      {trg:"닷새", src:"five days"}
    ]},

    {type:"fb",
     s:"이메일 {1}을 아직 안 보냈어요.",
     a:["답장"],
     opts:["답장","답변","답","담당"],
     hint:"A written response specifically to a letter, email, or text message.",
     sSrc:"I have not sent the email {1} yet."}
  ]
};
export default LESSON_12;
