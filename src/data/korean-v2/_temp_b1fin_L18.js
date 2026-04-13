// Korean B1 Final Gap - Lesson 18: Peace, Health & Well-being
const LESSON_18 = {
  id:"kov2_b1fin_l18", title:"평화와 건강", icon:"🕊️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Peace, Health & Well-being",
     desc:"Learn vocabulary for mental and physical well-being, peace, and daily organization. These words help discuss health, mindset, and how to maintain balance in life.",
     goals:["Learn 20 words about peace, health, and mental well-being","Discuss protection, treatment, and organization","Express mental states and life attitudes"]},

    {type:"teach", trg:"평화", src:"peace", pos:"noun", gender:null,
     note:"Sino-Korean (平和). 평 (平) = flat/calm, 화 (和) = harmony.",
     example:"A: 세계 평화를 바라요.\nB: 저도요. 평화가 가장 중요해요.",
     exampleSrc:"A: I wish for world peace.\nB: Me too. Peace is the most important thing.",
     funFact:"평화 is emotionally charged in Korea due to the divided peninsula. 평화 통일 (peaceful reunification) is a cherished hope."},

    {type:"teach", trg:"행복", src:"happiness", pos:"noun", gender:null,
     note:"Sino-Korean (幸福). 행 (幸) = fortune, 복 (福) = blessing.",
     example:"A: 행복이 뭐라고 생각해요?\nB: 가족과 함께 있는 게 행복이에요.",
     exampleSrc:"A: What do you think happiness is?\nB: Being with family is happiness.",
     funFact:"행복 combines fortune and blessing, implying happiness comes from both luck and gratitude. 행복하세요 (be happy) is a warm farewell."},

    {type:"teach", trg:"평생", src:"one's whole life, lifetime", pos:"noun", gender:null,
     note:"Sino-Korean (平生). 평 (平) = level/flat, 생 (生) = life.",
     example:"A: 평생 기억할 거예요.\nB: 저도 평생 잊지 못할 거예요.",
     exampleSrc:"A: I'll remember it my whole life.\nB: I won't forget it for my entire life either.",
     funFact:"평생 교육 (lifelong education) is a Korean government initiative. The idea that learning continues 평생 is culturally valued."},

    {type:"teach", trg:"평소", src:"usually, normally, in everyday life", pos:"noun", gender:null,
     note:"Sino-Korean (平素). One's regular daily state or habits.",
     example:"A: 평소에 운동을 해요?\nB: 네, 평소에 아침마다 조깅해요.",
     exampleSrc:"A: Do you usually exercise?\nB: Yes, I usually jog every morning.",
     funFact:"평소에 is a key phrase for describing habits: 평소에 뭐 해요? (What do you normally do?). It reveals someone's routine and character."},

    {type:"teach", trg:"희망", src:"hope, wish", pos:"noun", gender:null,
     note:"Sino-Korean (希望). 희 (希) = rare/wish, 망 (望) = gaze/hope.",
     example:"A: 희망을 잃지 마세요.\nB: 네, 아직 희망이 있어요.",
     exampleSrc:"A: Don't lose hope.\nB: Yes, there's still hope.",
     funFact:"희망 is a powerful word in Korean society. After the Korean War devastated the country, 희망 drove the rebuilding. It remains a favorite word in speeches and songs."},

    {type:"mc",
     q:"'항상 그렇게 하다'를 다른 말로 하면?",
     opts:["평소에 그렇게 하다","평생 그렇게 하다","평화롭게 하다","행복하게 하다"],
     ans:"평소에 그렇게 하다",
     hint:"This word refers to one's normal, everyday routine or habit."},

    {type:"teach", trg:"여유", src:"leisure, room, composure,余裕", pos:"noun", gender:null,
     note:"Sino-Korean (餘裕). Having enough time, money, or mental space.",
     example:"A: 시간 여유가 있어요?\nB: 네, 오늘은 여유가 좀 있어요.",
     exampleSrc:"A: Do you have some spare time?\nB: Yes, I have some leisure time today.",
     funFact:"여유 is a prized quality in Korean culture. 마음의 여유 (mental composure) is considered essential for a balanced life. Rush culture threatens 여유."},

    {type:"teach", trg:"정신", src:"mind, spirit, consciousness", pos:"noun", gender:null,
     note:"Sino-Korean (精神). 정 (精) = essence, 신 (神) = spirit.",
     example:"A: 정신이 없어요!\nB: 왜요? 많이 바빠요?",
     exampleSrc:"A: I'm losing my mind!\nB: Why? Are you very busy?",
     funFact:"정신 없다 (to be out of one's mind) means being overwhelmingly busy. 정신 차려 (pull yourself together) is a common wake-up call."},

    {type:"teach", trg:"정신적", src:"mental, spiritual, psychological", pos:"noun", gender:null,
     note:"정신 + 적 (的). Relating to the mind or spirit.",
     example:"A: 정신적으로 힘들었어요?\nB: 네, 정신적으로 많이 지쳤어요.",
     exampleSrc:"A: Was it mentally difficult?\nB: Yes, I was mentally very exhausted.",
     funFact:"정신적 건강 (mental health) awareness is growing in Korea. The contrast 정신적 vs 육체적 (physical) health is now discussed openly."},

    {type:"teach", trg:"정상", src:"normal; summit; top", pos:"noun", gender:null,
     note:"Sino-Korean. 正常 (normal) or 頂上 (summit). Context determines meaning.",
     example:"A: 검사 결과가 정상이에요?\nB: 네, 모두 정상이에요. 걱정 마세요.",
     exampleSrc:"A: Are the test results normal?\nB: Yes, everything is normal. Don't worry.",
     funFact:"정상 has dual meaning: 정상적이다 (to be normal) and 산 정상 (mountain summit). Both are common: health checks and hiking discussions."},

    {type:"teach", trg:"보호", src:"protection", pos:"noun", gender:null,
     note:"Sino-Korean (保護). 보 (保) = preserve, 호 (護) = protect.",
     example:"A: 환경 보호가 중요해요.\nB: 맞아요, 모두가 노력해야 해요.",
     exampleSrc:"A: Environmental protection is important.\nB: Right, everyone needs to make an effort.",
     funFact:"보호 appears everywhere: 소비자 보호 (consumer protection), 동물 보호 (animal protection), 보호자 (guardian). Korea has strong 보호 laws."},

    {type:"fb",
     s:"환경 {1}를 위해 쓰레기를 줄여야 해요.",
     a:["보호"],
     opts:["보호","평화","정상","행복"],
     hint:"This word means safeguarding or preserving something from harm.",
     sSrc:"We need to reduce trash for environmental {1}."},

    {type:"teach", trg:"치료", src:"treatment, therapy, cure", pos:"noun", gender:null,
     note:"Sino-Korean (治療). 치 (治) = govern/cure, 료 (療) = heal.",
     example:"A: 치료를 받고 있어요?\nB: 네, 매주 병원에서 치료 받아요.",
     exampleSrc:"A: Are you receiving treatment?\nB: Yes, I get treatment at the hospital every week.",
     funFact:"치료비 (treatment costs) are a major concern. Korea's national health insurance covers most 치료, keeping costs relatively low."},

    {type:"teach", trg:"화장품", src:"cosmetics, beauty products", pos:"noun", gender:null,
     note:"Sino-Korean (化粧品). 화장 (化粧) = makeup, 품 (品) = product.",
     example:"A: 한국 화장품이 유명하죠?\nB: 네, 전 세계에서 인기가 많아요.",
     exampleSrc:"A: Korean cosmetics are famous, right?\nB: Yes, they're popular worldwide.",
     funFact:"K-beauty (한국 화장품) is a global phenomenon. Korean skincare routines with 10+ steps have influenced beauty culture worldwide."},

    {type:"teach", trg:"효과", src:"effect, result, effectiveness", pos:"noun", gender:null,
     note:"Sino-Korean (效果). 효 (效) = imitate/effect, 과 (果) = fruit/result.",
     example:"A: 이 약의 효과가 있어요?\nB: 네, 효과가 아주 좋아요.",
     exampleSrc:"A: Is this medicine effective?\nB: Yes, the effect is very good.",
     funFact:"효과적 (effective) is used in business and education: 효과적인 방법 (effective method). Proving 효과 is essential for marketing in Korea."},

    {type:"teach", trg:"정리", src:"organizing, tidying, arrangement", pos:"noun", gender:null,
     note:"Sino-Korean (整理). 정 (整) = tidy, 리 (理) = reason/order.",
     example:"A: 방 정리 했어요?\nB: 아직 안 했어요. 이따가 할게요.",
     exampleSrc:"A: Did you tidy your room?\nB: Not yet. I'll do it later.",
     funFact:"정리정돈 (organized and orderly) is a mantra in Korean schools. Students clean their own classrooms, learning 정리 as a life skill."},

    {type:"teach", trg:"정리하다", src:"to organize, to tidy up, to sort out", pos:"verb", gender:null,
     note:"Verb form of 정리. Actively putting things in order.",
     example:"A: 생각을 정리해 볼게요.\nB: 천천히 정리하세요.",
     exampleSrc:"A: I'll try to organize my thoughts.\nB: Take your time organizing.",
     funFact:"정리하다 works for physical and mental organizing: 방을 정리하다 (tidy the room), 감정을 정리하다 (sort out emotions), 관계를 정리하다 (end a relationship)."},

    {type:"match", pairs:[
      {trg:"치료", src:"treatment/therapy"},
      {trg:"효과", src:"effect"},
      {trg:"화장품", src:"cosmetics"},
      {trg:"정리하다", src:"to organize"},
      {trg:"보호", src:"protection"}
    ]},

    {type:"teach", trg:"정식", src:"formal, official, regular (meal)", pos:"noun", gender:null,
     note:"Sino-Korean (正式/定食). Official or a set meal (different hanja).",
     example:"A: 정식으로 신청해야 해요?\nB: 네, 정식 절차를 밟아야 해요.",
     exampleSrc:"A: Do I need to apply formally?\nB: Yes, you need to follow the formal procedure.",
     funFact:"정식 has two meanings: 正式 (formal/official) and 定食 (set meal at a restaurant). 한정식 (Korean set meal) is a full-course dining experience."},

    {type:"teach", trg:"종합", src:"comprehensive, combined, overall", pos:"noun", gender:null,
     note:"Sino-Korean (綜合). 종 (綜) = synthesize, 합 (合) = combine.",
     example:"A: 종합 검진을 받았어요?\nB: 네, 1년에 한 번 종합 검진 받아요.",
     exampleSrc:"A: Did you get a comprehensive checkup?\nB: Yes, I get a comprehensive checkup once a year.",
     funFact:"종합 병원 (general hospital) handles all departments. 종합 선물 세트 (comprehensive gift set) is a holiday classic."},

    {type:"teach", trg:"판단", src:"judgment, decision, assessment", pos:"noun", gender:null,
     note:"Sino-Korean (判斷). 판 (判) = judge, 단 (斷) = cut/decide.",
     example:"A: 어떻게 판단해요?\nB: 상황을 보고 판단해야 해요.",
     exampleSrc:"A: How do you judge it?\nB: You need to assess the situation first.",
     funFact:"판단력 (judgment ability) is valued in Korean leadership. 올바른 판단 (correct judgment) is praised, while 판단 미스 (misjudgment) is criticized."},

    {type:"teach", trg:"태도", src:"attitude, manner, demeanor", pos:"noun", gender:null,
     note:"Sino-Korean (態度). 태 (態) = state/manner, 도 (度) = degree.",
     example:"A: 태도가 중요해요.\nB: 네, 좋은 태도가 성공의 기본이에요.",
     exampleSrc:"A: Attitude is important.\nB: Yes, a good attitude is the basis of success.",
     funFact:"In Korean job interviews, 태도 matters as much as skills. 성실한 태도 (sincere attitude) and 겸손한 태도 (humble attitude) are highly valued."},

    {type:"mc",
     q:"병원에서 몸 전체를 한번에 검사하는 것을 뭐라고 해요?",
     opts:["정식","종합 검진","정리","판단"],
     ans:"종합 검진",
     hint:"This combines a word meaning comprehensive with a word for medical examination."}
  ]
};
export default LESSON_18;
