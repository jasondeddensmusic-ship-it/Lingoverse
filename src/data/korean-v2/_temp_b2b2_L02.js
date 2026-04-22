// Korean B2. Batch 2, Lesson 2: Enterprise and Function
// Words: 기능, 기다, 기대다, 기대되다, 기업, 기업인, 기여, 기울다, 기울이다, 기원전, 기원, 기적, 기후, 긴급, 긴장감, 긴장되다, 기뻐하다, 기도, 기도하다, 기독교

const LESSON_2 = {
  id:"kov2_b2b2_l2", title:"기업과 사회", icon:"🏢", xp:15, board:true,
  steps:[
    {type:"intro", title:"기업과 사회",
     desc:"Learn vocabulary for business, religion, climate, and social urgency. These words appear frequently in news and formal discussions.",
     goals:["Master 20 words about enterprise, faith, and society","Understand passive and causative verb pairs","Build formal discussion vocabulary"]},

    {type:"teach", trg:"기능", src:"function, feature", pos:"noun", gender:null,
     note:"Sino-Korean. 機 (machine) + 能 (ability).\nWhat something is able to do.",
     example:"A: 이 앱에 새 기능이 추가되었어요.\nB: 어떤 기능이요?",
     exampleSrc:"A: A new feature was added to this app.\nB: What feature?",
     funFact:"From Hanja 機能. In tech Korean, 기능 is the standard word for 'feature' in software and devices."},

    {type:"teach", trg:"기다", src:"to crawl, to creep", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo move on hands and knees or belly.",
     example:"A: 아기가 벌써 기어요?\nB: 네, 어제부터 기기 시작했어요.",
     exampleSrc:"A: Is the baby already crawling?\nB: Yes, they started crawling yesterday.",
     funFact:"기다 is irregular: it conjugates as 기어 (not 기아). A common developmental milestone word for babies."},

    {type:"teach", trg:"기대다", src:"to lean on, to rely on", pos:"verb", gender:null,
     note:"Native Korean. To physically lean against something,\nor to depend on someone emotionally.",
     example:"A: 좀 피곤한데 어깨에 기대도 돼?\nB: 그럼, 편하게 기대.",
     exampleSrc:"A: I am a bit tired. Can I lean on your shoulder?\nB: Sure, lean comfortably.",
     funFact:"기대다 has both physical (lean against a wall) and emotional (rely on someone) meanings."},

    {type:"teach", trg:"기대되다", src:"to be anticipated, to be expected", pos:"verb", gender:null,
     note:"기대 (expectation) + 되다 (passive).\nSomething is looked forward to.",
     example:"A: 이번 영화가 기대돼요?\nB: 네, 정말 기대됩니다!",
     exampleSrc:"A: Are you looking forward to this movie?\nB: Yes, I really am!",
     funFact:"기대되다 expresses anticipation passively. 기대하다 means to actively expect or hope for something."},

    {type:"teach", trg:"기업", src:"enterprise, corporation", pos:"noun", gender:null,
     note:"Sino-Korean. 企 (plan/stand on tiptoe) + 業 (business).\nAn organized business operation.",
     example:"A: 어떤 기업에서 일하세요?\nB: IT 분야의 중소기업에서 일해요.",
     exampleSrc:"A: What kind of enterprise do you work at?\nB: I work at a small IT company.",
     funFact:"Korea's economy is dominated by 재벌 (chaebol) mega-corporations like Samsung, Hyundai, and LG."},

    {type:"mc",
     q:"'기업'의 반대 개념에 가장 가까운 것은?",
     opts:["개인 사업","대학교","병원","정부 기관"],
     ans:"개인 사업",
     hint:"If 기업 means a large organized corporation, think of the opposite scale of business."},

    {type:"teach", trg:"기업인", src:"businessperson, entrepreneur", pos:"noun", gender:null,
     note:"기업 (enterprise) + 인 (person).\nA person who runs or leads a business.",
     example:"A: 유명한 기업인이 강연을 했어요.\nB: 어떤 내용이었어요?",
     exampleSrc:"A: A famous businessperson gave a lecture.\nB: What was it about?",
     funFact:"The suffix -인 (人) marks a person by identity. Compare 한국인 (Korean person), 외국인 (foreigner)."},

    {type:"teach", trg:"기여", src:"contribution", pos:"noun", gender:null,
     note:"Sino-Korean. 寄 (send/entrust) + 與 (give).\nGiving something to a larger cause.",
     example:"A: 이 과학자의 기여가 대단하네요.\nB: 네, 의학 발전에 큰 기여를 했어요.",
     exampleSrc:"A: This scientist's contribution is impressive.\nB: Yes, they made a great contribution to medical advancement.",
     funFact:"기여하다 (to contribute) is essential in academic writing when discussing someone's impact on a field."},

    {type:"teach", trg:"기울다", src:"to tilt, to lean, to decline", pos:"verb", gender:null,
     note:"Native Korean. Something tilts or shifts\nfrom its original position.",
     example:"A: 해가 서쪽으로 기울고 있어요.\nB: 벌써 저녁때가 됐네요.",
     exampleSrc:"A: The sun is tilting toward the west.\nB: It is already getting to be evening.",
     funFact:"기울다 also describes decline: 경제가 기울다 (the economy declines). A poetic and versatile verb."},

    {type:"teach", trg:"기울이다", src:"to devote, to concentrate (effort)", pos:"verb", gender:null,
     note:"Causative of 기울다. To deliberately tilt\nsomething, usually effort or attention.",
     example:"A: 이 프로젝트에 많은 노력을 기울였어요.\nB: 그래서 결과가 좋은 거예요.",
     exampleSrc:"A: I devoted a lot of effort to this project.\nB: That is why the results are good.",
     funFact:"노력을 기울이다 (to devote effort) is one of the most common collocations in Korean formal writing."},

    {type:"fb",
     s:"사회 발전에 큰 {1}를 한 인물입니다.",
     a:["기여"],
     opts:["기여","기업","기능","기법"],
     hint:"The act of giving something valuable to a cause or to society's development.",
     sSrc:"This is a person who made a great {1} to social development."},

    {type:"teach", trg:"기원", src:"origin, prayer/wish", pos:"noun", gender:null,
     note:"Two Hanja sources: 起源 (origin) or 祈願 (prayer).\nContext determines which meaning applies.",
     example:"A: 이 전통의 기원을 아세요?\nB: 조선 시대에 기원한다고 해요.",
     exampleSrc:"A: Do you know the origin of this tradition?\nB: They say it originates from the Joseon Dynasty.",
     funFact:"기원 meaning 'origin' uses 起源. 기원 meaning 'prayer' uses 祈願. Same pronunciation, different Hanja."},

    {type:"teach", trg:"기원전", src:"B.C., before the common era", pos:"noun", gender:null,
     note:"기원 (era origin) + 전 (before).\nBefore the start of the common era.",
     example:"A: 이 유물은 언제 만들어졌어요?\nB: 기원전 3세기쯤이에요.",
     exampleSrc:"A: When was this artifact made?\nB: Around the 3rd century B.C.",
     funFact:"Korean uses 기원전 (B.C.) and 기원후 or 서기 (A.D./C.E.). History textbooks use these constantly."},

    {type:"teach", trg:"기적", src:"miracle", pos:"noun", gender:null,
     note:"Sino-Korean. 奇 (strange/wondrous) + 蹟 (trace).\nA trace of something wondrous.",
     example:"A: 그 환자가 회복한 건 기적이에요.\nB: 의사들도 놀랐대요.",
     exampleSrc:"A: That patient's recovery was a miracle.\nB: Even the doctors were surprised.",
     funFact:"기적 can also mean 'whistle' (汽笛) when written with different Hanja. Context is everything."},

    {type:"teach", trg:"기도", src:"prayer", pos:"noun", gender:null,
     note:"Sino-Korean. 祈 (pray) + 禱 (invoke).\nA solemn request to a higher power.",
     example:"A: 매일 기도를 하세요?\nB: 네, 아침마다 기도합니다.",
     exampleSrc:"A: Do you pray every day?\nB: Yes, I pray every morning.",
     funFact:"기도 also means 'airway/trachea' (氣道) in medical contexts. Again, Hanja determines meaning."},

    {type:"teach", trg:"기도하다", src:"to pray", pos:"verb", gender:null,
     note:"기도 (prayer) + 하다.\nTo perform an act of prayer.",
     example:"A: 무엇을 위해 기도했어요?\nB: 가족의 건강을 위해 기도했어요.",
     exampleSrc:"A: What did you pray for?\nB: I prayed for my family's health.",
     funFact:"In Korea, Buddhist temples and Christian churches both use 기도하다 for the act of prayer."},

    {type:"teach", trg:"기독교", src:"Christianity", pos:"noun", gender:null,
     note:"Sino-Korean. 基 (foundation) + 督 (supervise) + 教 (teaching).\nLiterally 'the teaching of Christ.'",
     example:"A: 한국에서 기독교 신자가 많나요?\nB: 네, 전체 인구의 약 20%입니다.",
     exampleSrc:"A: Are there many Christians in Korea?\nB: Yes, about 20% of the total population.",
     funFact:"Korea has one of Asia's highest Christian populations. Seoul alone has over 3,000 churches."},

    {type:"mc",
     q:"'기원전'은 무엇을 뜻하나요?",
     opts:["중세 시대","서기 이전의 시대","미래의 시대","현재의 시대"],
     ans:"서기 이전의 시대",
     hint:"The time period before the common era began. Think B.C. in English."},

    {type:"teach", trg:"기후", src:"climate", pos:"noun", gender:null,
     note:"Sino-Korean. 氣 (air/energy) + 候 (season/wait).\nThe long-term weather patterns of a region.",
     example:"A: 한국의 기후는 어떤가요?\nB: 사계절이 뚜렷한 온대 기후예요.",
     exampleSrc:"A: What is Korea's climate like?\nB: It is a temperate climate with four distinct seasons.",
     funFact:"기후 변화 (climate change) has become one of the most used phrases in Korean news media."},

    {type:"teach", trg:"긴급", src:"emergency, urgency", pos:"noun", gender:null,
     note:"Sino-Korean. 緊 (tight) + 急 (urgent).\nA situation that is tight and urgent.",
     example:"A: 긴급 상황이 발생했습니다.\nB: 바로 대응 조치를 취하세요.",
     exampleSrc:"A: An emergency situation has occurred.\nB: Take response measures immediately.",
     funFact:"긴급 재난 문자 (emergency disaster texts) are sent to all Korean phones during emergencies."},

    {type:"teach", trg:"긴장감", src:"tension, sense of nervousness", pos:"noun", gender:null,
     note:"긴장 (tension) + 감 (feeling).\nThe feeling of being tense or on edge.",
     example:"A: 이 영화는 긴장감이 대단하네요.\nB: 맞아요, 손에 땀이 나요.",
     exampleSrc:"A: The tension in this movie is incredible.\nB: Right, my palms are sweating.",
     funFact:"The suffix -감 (感) adds 'sense of' to nouns: 책임감 (sense of responsibility), 성취감 (sense of achievement)."},

    {type:"teach", trg:"긴장되다", src:"to be nervous, to feel tense", pos:"verb", gender:null,
     note:"긴장 (tension) + 되다 (passive).\nTension happens to you involuntarily.",
     example:"A: 발표 전에 많이 긴장돼?\nB: 응, 항상 긴장돼.",
     exampleSrc:"A: Do you get nervous before a presentation?\nB: Yes, I always get nervous.",
     funFact:"긴장되다 is the involuntary form. 긴장하다 means to actively tense up or be alert."},

    {type:"teach", trg:"기뻐하다", src:"to rejoice, to be delighted", pos:"verb", gender:null,
     note:"기쁘다 (happy) + 어하다 (show emotion).\nTo outwardly show happiness.",
     example:"A: 합격 소식을 듣고 얼마나 기뻐했어요?\nB: 가족 모두 기뻐했어요.",
     exampleSrc:"A: How happy were you when you heard you passed?\nB: The whole family was delighted.",
     funFact:"Korean adds -어하다 to adjectives to describe showing emotion: 슬퍼하다 (show sadness), 기뻐하다 (show joy)."},

    {type:"match", pairs:[
      {trg:"기업", src:"enterprise"},
      {trg:"기후", src:"climate"},
      {trg:"긴급", src:"emergency"},
      {trg:"기적", src:"miracle"},
      {trg:"기독교", src:"Christianity"}
    ]},

    {type:"fb",
     s:"발표 전에 너무 {1}.",
     a:["긴장됐다"],
     opts:["긴장됐다","기뻐했다","기대됐다","기울었다"],
     hint:"The feeling of nervousness that happens to you involuntarily before a big event.",
     sSrc:"I was so {1} before the presentation."}
  ]
};
export default LESSON_2;
