// Korean B1 Final Gap - Lesson 20: Daily Life & Life Events
const LESSON_20 = {
  id:"kov2_b1fin_l20", title:"일상과 삶", icon:"🌅", xp:15, board:true,
  steps:[
    {type:"intro", title:"Daily Life & Life Events",
     desc:"Learn vocabulary for daily routines, life stages, and common verbs of daily activity. These words help discuss ordinary life, desires, and physical states.",
     goals:["Learn 20 words about daily life, desires, and bodily states","Discuss routines, vacation, and life events","Use common verbs for everyday physical actions"]},

    {type:"teach", trg:"하루", src:"one day, a day", pos:"noun", gender:null,
     note:"Native Korean noun. The span of a single day.",
     example:"A: 하루에 몇 시간 일해요?\nB: 하루에 8시간 정도 일해요.",
     exampleSrc:"A: How many hours do you work in a day?\nB: I work about 8 hours a day.",
     funFact:"하루 is the first in the native day-counting sequence: 하루 (1 day), 이틀 (2 days), 사흘 (3 days). 하루하루 (day by day) describes taking life one day at a time."},

    {type:"teach", trg:"일상", src:"daily life, everyday routine", pos:"noun", gender:null,
     note:"Sino-Korean (日常). 일 (日) = day, 상 (常) = always.",
     example:"A: 일상이 어때요?\nB: 평범하지만 행복한 일상이에요.",
     exampleSrc:"A: How's your daily life?\nB: It's ordinary but happy everyday life.",
     funFact:"일상 브이로그 (daily vlog) is hugely popular in Korea. People share their 일상 online, from morning routines to cooking. The mundane becomes content."},

    {type:"teach", trg:"장래", src:"future, prospects", pos:"noun", gender:null,
     note:"Sino-Korean (將來). 장 (將) = about to, 래 (來) = come.",
     example:"A: 장래 희망이 뭐예요?\nB: 의사가 되고 싶어요.",
     exampleSrc:"A: What's your future hope?\nB: I want to become a doctor.",
     funFact:"장래 희망 (future dream/aspiration) is asked of every Korean child in school. It is one of the first essay topics. Common answers: doctor, teacher, scientist."},

    {type:"teach", trg:"장사", src:"business, trade, commerce", pos:"noun", gender:null,
     note:"Sino-Korean (障事/商事). Small-scale business or trading.",
     example:"A: 장사가 잘 돼요?\nB: 요즘은 장사가 안 돼서 걱정이에요.",
     exampleSrc:"A: Is business going well?\nB: Business isn't doing well lately, so I'm worried.",
     funFact:"장사 refers to small-scale retail or food business. 장사꾼 (merchant/trader) has a slightly rough nuance. 사업 is the formal word for business."},

    {type:"teach", trg:"임시", src:"temporary, provisional", pos:"noun", gender:null,
     note:"Sino-Korean (臨時). 임 (臨) = face/approach, 시 (時) = time.",
     example:"A: 이건 임시 비밀번호예요.\nB: 알겠어요, 나중에 바꿀게요.",
     exampleSrc:"A: This is a temporary password.\nB: I see, I'll change it later.",
     funFact:"임시 appears in 임시 정부 (provisional government), referring to Korea's government-in-exile during Japanese occupation. A historically significant word."},

    {type:"mc",
     q:"아이들에게 '커서 뭐가 되고 싶어?'라고 물을 때 관련된 단어는?",
     opts:["장래","임시","일상","장사"],
     ans:"장래",
     hint:"This word refers to one's future or upcoming prospects in life."},

    {type:"teach", trg:"임신", src:"pregnancy", pos:"noun", gender:null,
     note:"Sino-Korean (妊娠). Medical/formal term for being pregnant.",
     example:"A: 임신 축하해요!\nB: 감사합니다, 많이 기대돼요.",
     exampleSrc:"A: Congratulations on the pregnancy!\nB: Thank you, I'm very excited.",
     funFact:"Korea's low birth rate makes 임신 a national policy topic. 출산 장려 (birth encouragement) policies offer financial support to expecting parents."},

    {type:"teach", trg:"이사", src:"moving (house), relocation", pos:"noun", gender:null,
     note:"Sino-Korean (移徙). The process of changing residences.",
     example:"A: 이사했어요?\nB: 네, 지난주에 새 집으로 이사했어요.",
     exampleSrc:"A: Did you move?\nB: Yes, I moved to a new house last week.",
     funFact:"이사 is a big deal in Korea. Moving companies are called 이사 업체. Some Koreans consult fortune tellers for an auspicious 이사 date."},

    {type:"teach", trg:"죽음", src:"death", pos:"noun", gender:null,
     note:"Native Korean noun. From 죽다 (to die) + 음 (nominalizer).",
     example:"A: 죽음에 대해 생각해 본 적 있어요?\nB: 가끔 생각해요. 삶이 소중하다고 느껴요.",
     exampleSrc:"A: Have you ever thought about death?\nB: Sometimes. It makes me feel life is precious.",
     funFact:"Korean culture has euphemisms for 죽음: 돌아가시다 (to return, honorific for dying), 세상을 떠나다 (to leave the world). Direct mention of death is often avoided."},

    {type:"teach", trg:"죽이다", src:"to kill", pos:"verb", gender:null,
     note:"Causative of 죽다 (to die). Making something die.",
     example:"A: 모기를 죽였어요?\nB: 네, 방금 잡아서 죽였어요.",
     exampleSrc:"A: Did you kill the mosquito?\nB: Yes, I just caught and killed it.",
     funFact:"죽이다 also works figuratively: 시간을 죽이다 (kill time), 노래를 죽이다 (nail a song, slang for singing amazingly well)."},

    {type:"teach", trg:"휴가", src:"vacation, leave, time off", pos:"noun", gender:null,
     note:"Sino-Korean (休暇). 휴 (休) = rest, 가 (暇) = leisure.",
     example:"A: 휴가 계획 있어요?\nB: 네, 제주도에 갈 거예요.",
     exampleSrc:"A: Do you have vacation plans?\nB: Yes, I'm going to Jeju Island.",
     funFact:"Korean workers get varying 휴가 by company. 연차 (annual leave) and 여름 휴가 (summer vacation) are the most anticipated times of year."},

    {type:"fb",
     s:"다음 주에 새 집으로 {1}해요.",
     a:["이사"],
     opts:["이사","임시","휴가","임신"],
     hint:"This word means relocating from one home to another.",
     sSrc:"I'm {1} to a new house next week."},

    {type:"teach", trg:"갈다", src:"to grind, to sharpen, to change/replace", pos:"verb", gender:null,
     note:"Native Korean verb. Multiple meanings: grinding, sharpening, or replacing.",
     example:"A: 칼을 갈아야 해요.\nB: 네, 무뎌져서 갈아야 할 것 같아요.",
     exampleSrc:"A: We need to sharpen the knife.\nB: Yes, it's gotten dull so it needs sharpening.",
     funFact:"갈다 has diverse meanings: 연필을 갈다 (sharpen a pencil), 타이어를 갈다 (change tires), 이를 갈다 (grind teeth from frustration)."},

    {type:"teach", trg:"익다", src:"to ripen, to be cooked, to become familiar", pos:"verb", gender:null,
     note:"Native Korean verb. Things reaching a ready/mature state.",
     example:"A: 과일이 다 익었어요?\nB: 네, 잘 익어서 맛있어요.",
     exampleSrc:"A: Has the fruit fully ripened?\nB: Yes, it's well-ripened and delicious.",
     funFact:"익다 works for food (고기가 익다 = meat is cooked), fruit (사과가 익다 = apple ripens), and skills (손에 익다 = become familiar to one's hands)."},

    {type:"teach", trg:"젖다", src:"to get wet, to be soaked", pos:"verb", gender:null,
     note:"Native Korean verb. Becoming wet from liquid.",
     example:"A: 비에 젖었어요?\nB: 네, 우산이 없어서 다 젖었어요.",
     exampleSrc:"A: Did you get wet in the rain?\nB: Yes, I got all wet because I had no umbrella.",
     funFact:"젖다 appears in emotional contexts too: 눈물에 젖다 (soaked in tears), 추억에 젖다 (immersed in memories). Beautifully evocative."},

    {type:"teach", trg:"털다", src:"to shake off, to brush off, to clean out", pos:"verb", gender:null,
     note:"Native Korean verb. Shaking something to remove dust, dirt, or contents.",
     example:"A: 옷에 먼지가 많네요.\nB: 밖에서 먼지 좀 털어야겠어요.",
     exampleSrc:"A: There's a lot of dust on the clothes.\nB: I should shake off the dust outside.",
     funFact:"털다 also means 'to rob/clean out' in slang: 가게를 털다 (rob a store). In police dramas, this meaning comes up frequently."},

    {type:"teach", trg:"지다", src:"to lose, to set (sun), to carry (on back)", pos:"verb", gender:null,
     note:"Native Korean verb with multiple meanings depending on context.",
     example:"A: 해가 지고 있어요.\nB: 네, 노을이 아름다워요.",
     exampleSrc:"A: The sun is setting.\nB: Yes, the sunset is beautiful.",
     funFact:"지다 has rich meanings: 경기에서 지다 (lose a game), 해가 지다 (sun sets), 짐을 지다 (carry a load), 꽃이 지다 (flowers fall). Context is key."},

    {type:"match", pairs:[
      {trg:"갈다", src:"to grind/sharpen"},
      {trg:"익다", src:"to ripen/cook"},
      {trg:"젖다", src:"to get wet"},
      {trg:"털다", src:"to shake off"},
      {trg:"지다", src:"to lose/set (sun)"}
    ]},

    {type:"teach", trg:"지르다", src:"to shout, to scream, to commit (recklessly)", pos:"verb", gender:null,
     note:"Native Korean verb. Letting out a loud cry or doing something impulsively.",
     example:"A: 왜 소리를 질렀어요?\nB: 깜짝 놀라서 소리를 질렀어요.",
     exampleSrc:"A: Why did you scream?\nB: I screamed because I was startled.",
     funFact:"소리를 지르다 (to scream/shout) is the standard phrase. In slang, 질렀다 means 'I bought it impulsively' (impulse purchase)."},

    {type:"teach", trg:"지치다", src:"to get tired, to be exhausted", pos:"verb", gender:null,
     note:"Native Korean verb. Physical or mental exhaustion.",
     example:"A: 많이 지쳤어요?\nB: 네, 하루 종일 일해서 지쳤어요.",
     exampleSrc:"A: Are you very tired?\nB: Yes, I'm exhausted from working all day.",
     funFact:"지치다 implies deeper exhaustion than 피곤하다 (tired). 지친 하루 (an exhausting day) suggests you've been pushed to your limits."},

    {type:"teach", trg:"위하다", src:"to be for the sake of", pos:"verb", gender:null,
     note:"Sino-Korean (爲). Used in N을/를 위해(서) (for the sake of N).",
     example:"A: 가족을 위해 열심히 일해요.\nB: 대단해요. 가족을 위하는 마음이 느껴져요.",
     exampleSrc:"A: I work hard for the sake of my family.\nB: That's impressive. I can feel your devotion to your family.",
     funFact:"을/를 위해서 (for the sake of) is one of the most important B1 grammar patterns. 건강을 위해 (for health), 미래를 위해 (for the future)."},

    {type:"teach", trg:"원하다", src:"to want, to desire, to wish for", pos:"verb", gender:null,
     note:"Sino-Korean (願). Expressing wants and desires.",
     example:"A: 뭘 원해요?\nB: 평화로운 삶을 원해요.",
     exampleSrc:"A: What do you want?\nB: I want a peaceful life.",
     funFact:"원하다 is more formal than 싶다 (want to). 원하시는 게 있으면 말씀하세요 (if there's something you want, please tell me) is polite service language."},

    {type:"teach", trg:"지나치다", src:"to be excessive, to go too far, to pass by", pos:"adj", gender:null,
     note:"Compound: 지나 (passing) + 치다. Beyond what is appropriate.",
     example:"A: 좀 지나친 것 같아요.\nB: 맞아요, 지나치게 걱정하지 마세요.",
     exampleSrc:"A: It seems a bit excessive.\nB: Right, don't worry too much.",
     funFact:"지나치다 works as both verb (to pass by) and adjective (excessive). 지나친 욕심 (excessive greed) and 지나가다 (pass by) share the root 지나."},

    {type:"mc",
     q:"하루 종일 일해서 기운이 없는 상태를 뭐라고 해요?",
     opts:["지르다","지치다","지나치다","지다"],
     ans:"지치다",
     hint:"This verb describes deep exhaustion from extended physical or mental effort."}
  ]
};
export default LESSON_20;
