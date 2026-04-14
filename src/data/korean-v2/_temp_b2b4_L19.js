// Korean B2 — Batch 4, Lesson 19: Change and Nicknames
// Words: 변경, 변동, 변명, 변신, 변화되다, 별다르다, 별도, 별명, 별일, 병들다, 병실, 병아리, 보고하다, 보관, 보내오다, 보너스, 보름, 보리, 보살피다, 보상

const LESSON_19 = {
  id:"kov2_b2b4_l19", title:"변화와 별명", icon:"🦋", xp:15, board:true,
  steps:[
    {type:"intro", title:"변화와 별명",
     desc:"Learn words about change, nicknames, illness, and care. This lesson covers 변- transformation words, 별- special/separate words, and 보- care vocabulary.",
     goals:["Master 20 words about change, illness, and caregiving","Understand 변- Hanja compounds (change, transform)","Use 보- words for caring, storing, and reporting"]},

    {type:"teach", trg:"변경", src:"change, modification", pos:"noun", gender:null,
     note:"Sino-Korean. 變 (change) + 更 (renew).\nAltering something from its current state.",
     example:"A: 일정 변경이 있어요.\nB: 언제로 바뀌었어요?",
     exampleSrc:"A: There is a schedule change.\nB: When was it changed to?",
     funFact:"From Hanja 變更. 주소 변경 (address change), 비밀번호 변경 (password change), 노선 변경 (route change)."},

    {type:"teach", trg:"변동", src:"fluctuation, change, shift", pos:"noun", gender:null,
     note:"Sino-Korean. 變 (change) + 動 (move).\nMovement or shift in values or conditions.",
     example:"A: 환율 변동이 심해요.\nB: 해외 송금할 때 주의해야 해요.",
     exampleSrc:"A: Exchange rate fluctuations are severe.\nB: You need to be careful when sending money abroad.",
     funFact:"From Hanja 變動. 가격 변동 (price fluctuation), 인구 변동 (population shift), 기후 변동 (climate change)."},

    {type:"teach", trg:"변명", src:"excuse, justification", pos:"noun", gender:null,
     note:"Sino-Korean. 辯 (argue) + 明 (explain).\nAn explanation to defend oneself.",
     example:"A: 변명하지 말고 솔직하게 말해.\nB: 알았어, 내 잘못이야.",
     exampleSrc:"A: Do not make excuses, be honest.\nB: OK, it is my fault.",
     funFact:"From Hanja 辯明. 변명의 여지가 없다 (there is no room for excuses) is a strong expression of fault."},

    {type:"teach", trg:"변신", src:"transformation, makeover", pos:"noun", gender:null,
     note:"Sino-Korean. 變 (change) + 身 (body).\nA dramatic change in appearance or form.",
     example:"A: 헤어스타일을 바꾸니 완전 변신이야!\nB: 고마워, 나도 마음에 들어.",
     exampleSrc:"A: Changing your hairstyle is a complete transformation!\nB: Thanks, I like it too.",
     funFact:"변신 is popular in Korean media: superhero 변신 scenes, 변신 로봇 (transforming robots), 파격적 변신 (dramatic makeover)."},

    {type:"teach", trg:"변화되다", src:"to be changed, to be transformed", pos:"verb", gender:null,
     note:"변화 (change) + 되다 (passive).\nSomething undergoes transformation.",
     example:"A: 사회가 빠르게 변화되고 있어요.\nB: 기술 발전 때문이죠.",
     exampleSrc:"A: Society is being transformed rapidly.\nB: It is because of technological advancement.",
     funFact:"변화되다 (passive) vs. 변화하다 (active). 변화시키다 (causative: to cause change) adds another layer."},

    {type:"mc",
     q:"'변명'은 어떤 상황에서 쓰나요?",
     opts:["잘못을 정당화하려 할 때","칭찬할 때","약속할 때","인사할 때"],
     ans:"잘못을 정당화하려 할 때",
     hint:"This word describes an explanation given to justify or defend oneself after doing something wrong."},

    {type:"teach", trg:"별다르다", src:"to be special, to be different (usually negative)", pos:"adj", gender:null,
     note:"별 (special) + 다르다 (different).\nNothing particularly special or different.",
     example:"A: 별다른 문제 없이 잘 됐어요.\nB: 다행이네요.",
     exampleSrc:"A: It went well without any particular problems.\nB: That is fortunate.",
     funFact:"Almost always used in negative form: 별다른 이유 없이 (without particular reason), 별다를 것 없다 (nothing special)."},

    {type:"teach", trg:"별도", src:"separately, additionally", pos:"noun", gender:null,
     note:"Sino-Korean. 別 (separate) + 途 (way).\nA separate or additional matter.",
     example:"A: 배송비는 별도입니다.\nB: 얼마예요?",
     exampleSrc:"A: Shipping costs are separate.\nB: How much is it?",
     funFact:"From Hanja 別途. 별도 요금 (separate charge), 별도 문의 (separate inquiry). Very common in commerce."},

    {type:"teach", trg:"별명", src:"nickname", pos:"noun", gender:null,
     note:"Sino-Korean. 別 (other) + 名 (name).\nAn informal name given by others.",
     example:"A: 네 별명이 뭐야?\nB: 친구들이 나를 '곰돌이'라고 불러.",
     exampleSrc:"A: What is your nickname?\nB: My friends call me 'teddy bear.'",
     funFact:"From Hanja 別名. Korean nickname culture is strong. Celebrities have fan-given 별명 that become iconic."},

    {type:"teach", trg:"별일", src:"something out of the ordinary", pos:"noun", gender:null,
     note:"별 (special) + 일 (matter/thing).\nSomething unusual happening.",
     example:"A: 별일 없지?\nB: 응, 잘 지내고 있어.",
     exampleSrc:"A: Nothing out of the ordinary, right?\nB: Nope, I am doing well.",
     funFact:"별일 없어? (Anything unusual?) is a common greeting. 별일 다 있다 (all sorts of things happen) expresses surprise."},

    {type:"teach", trg:"병들다", src:"to fall ill, to become sick", pos:"verb", gender:null,
     note:"병 (illness) + 들다 (enter).\nIllness enters the body.",
     example:"A: 스트레스를 많이 받으면 병들어요.\nB: 건강 관리를 잘 해야겠어요.",
     exampleSrc:"A: You will fall ill if you are under too much stress.\nB: I need to take better care of my health.",
     funFact:"병들다 is more literary than 아프다 (to be sick). Used for serious or prolonged illness, not minor aches."},

    {type:"teach", trg:"병실", src:"hospital room, ward", pos:"noun", gender:null,
     note:"Sino-Korean. 病 (illness) + 室 (room).\nA room in a hospital for patients.",
     example:"A: 할머니가 3층 병실에 계셔요.\nB: 면회 시간이 언제예요?",
     exampleSrc:"A: Grandmother is in a room on the 3rd floor.\nB: When are visiting hours?",
     funFact:"From Hanja 病室. 1인실 (single room), 2인실 (double room), 다인실 (multi-bed ward) are common hospital room types."},

    {type:"fb",
     s:"배송비는 상품 가격과 {1}로 청구됩니다.",
     a:["별도"],
     opts:["별도","별명","별일","별다른"],
     hint:"This Sino-Korean word means 'separately' or 'additionally,' often used for extra charges.",
     sSrc:"Shipping costs are charged {1} from the product price."},

    {type:"teach", trg:"병아리", src:"chick, baby chicken", pos:"noun", gender:null,
     note:"병아리 from 비아리 (old Korean).\nA young chicken just hatched.",
     example:"A: 병아리가 너무 귀여워!\nB: 노란색이 정말 예쁘지.",
     exampleSrc:"A: Baby chicks are so cute!\nB: The yellow color is really pretty.",
     funFact:"병아리 is also slang for a beginner: 운전 병아리 (beginner driver), 요리 병아리 (cooking novice)."},

    {type:"teach", trg:"보고하다", src:"to report, to give a report", pos:"verb", gender:null,
     note:"Sino-Korean. 報 (report) + 告 (inform) + 하다.\nTo formally inform a superior.",
     example:"A: 결과를 부장님께 보고했어요?\nB: 아직이요, 지금 가겠습니다.",
     exampleSrc:"A: Did you report the results to the department head?\nB: Not yet, I will go now.",
     funFact:"From Hanja 報告. Very common in Korean workplace culture: 업무 보고 (work report), 일일 보고 (daily report)."},

    {type:"teach", trg:"보관", src:"storage, keeping, safekeeping", pos:"noun", gender:null,
     note:"Sino-Korean. 保 (protect) + 管 (manage).\nKeeping something safe.",
     example:"A: 중요한 서류는 금고에 보관하세요.\nB: 네, 잠금장치도 확인할게요.",
     exampleSrc:"A: Keep important documents in the safe.\nB: Yes, I will also check the lock.",
     funFact:"From Hanja 保管. 냉장 보관 (refrigerated storage), 물품 보관함 (storage locker), 보관료 (storage fee)."},

    {type:"teach", trg:"보내오다", src:"to send (toward the speaker), to have been sending", pos:"verb", gender:null,
     note:"보내다 (send) + 오다 (come).\nSending something toward the speaker over time.",
     example:"A: 매달 편지를 보내오고 있어요.\nB: 정말 따뜻한 마음이네요.",
     exampleSrc:"A: They have been sending letters every month.\nB: That is a really warm heart.",
     funFact:"The -오다 suffix adds continuity toward the speaker: 살아오다 (have been living), 해 오다 (have been doing)."},

    {type:"teach", trg:"보너스", src:"bonus", pos:"noun", gender:null,
     note:"Loanword from English 'bonus.'\nExtra payment or reward.",
     example:"A: 이번 달에 보너스를 받았어요.\nB: 축하해요! 뭐 사고 싶은 거 있어요?",
     exampleSrc:"A: I received a bonus this month.\nB: Congratulations! Is there anything you want to buy?",
     funFact:"Korean companies typically give 보너스 at year-end (연말 보너스) and sometimes mid-year. It is a major anticipated event."},

    {type:"teach", trg:"보름", src:"fifteen days, a half month; full moon", pos:"noun", gender:null,
     note:"Native Korean word.\nHalf a month or the full moon period.",
     example:"A: 보름달이 정말 밝다.\nB: 정월 대보름이라서 더 특별해.",
     exampleSrc:"A: The full moon is really bright.\nB: It is extra special because it is the First Full Moon Festival.",
     funFact:"정월 대보름 (Great Full Moon Festival, Jan 15 lunar) is when Koreans eat 오곡밥 (five-grain rice) and crack nuts."},

    {type:"teach", trg:"보리", src:"barley", pos:"noun", gender:null,
     note:"Native Korean word.\nA cereal grain historically important in Korea.",
     example:"A: 보리차를 끓여 놨어요.\nB: 시원하게 마실게요.",
     exampleSrc:"A: I brewed barley tea.\nB: I will drink it cold.",
     funFact:"보리차 (barley tea) is Korea's everyday drink, served free at restaurants. 보리고개 (barley hump) refers to the spring famine before barley harvest."},

    {type:"teach", trg:"보살피다", src:"to take care of, to look after", pos:"verb", gender:null,
     note:"보살 (care) + 피다 (to do).\nTo nurture and attend to someone's needs.",
     example:"A: 아픈 어머니를 보살피고 있어요.\nB: 효도하는 거네요.",
     exampleSrc:"A: I am taking care of my sick mother.\nB: That is showing filial piety.",
     funFact:"보살피다 is more tender than 돌보다 (to look after). It implies emotional care, not just practical help."},

    {type:"mc",
     q:"'정월 대보름'에 한국인이 전통적으로 먹는 음식은?",
     opts:["오곡밥과 부럼","떡국","송편","냉면"],
     ans:"오곡밥과 부럼",
     hint:"On this full moon festival, Koreans eat five-grain rice and crack nuts to ward off bad luck."},

    {type:"teach", trg:"보상", src:"compensation, reward", pos:"noun", gender:null,
     note:"Sino-Korean. 報 (repay) + 償 (compensate).\nPayment for loss or effort.",
     example:"A: 피해에 대한 보상을 요구했어요.\nB: 정당한 요구예요.",
     exampleSrc:"A: I demanded compensation for the damages.\nB: That is a fair demand.",
     funFact:"From Hanja 報償. 보상금 (compensation money), 보상 심리 (compensatory psychology), 보상받다 (to be compensated)."},

    {type:"fb",
     s:"아픈 할머니를 정성껏 {1}고 있어요.",
     a:["보살피"],
     opts:["보살피","보고하","보관하","보상하"],
     hint:"This verb means to tenderly take care of or look after someone who needs help.",
     sSrc:"I am lovingly {1} my sick grandmother."},

    {type:"match", pairs:[
      {trg:"변경", src:"change, modification"},
      {trg:"별명", src:"nickname"},
      {trg:"보고하다", src:"to report"},
      {trg:"보상", src:"compensation"}
    ]}
  ]
};
export default LESSON_19;
