// Korean B2. Batch 3, Lesson 1: Fullness and Possibility
// Words: 가구, 가까워지다, 가난, 가능, 가능해지다, 가득하다, 가득히, 가라앉다, 가려지다, 가령, 가로, 가로등, 가로막다, 가로수, 가르다, 가르침, 가만, 가만있다, 가뭄, 가사

const LESSON_1 = {
  id:"kov2_b2b3_l1", title:"가능과 가득", icon:"🌊", xp:15, board:true,
  steps:[
    {type:"intro", title:"가능과 가득",
     desc:"Explore words describing fullness, possibility, and states of change. Many of these are essential for expressing abstract concepts at the B2 level.",
     goals:["Master 20 words related to fullness, possibility, and street vocabulary","Understand compound verb patterns with 가-","Use descriptive adverbs and adjectives in natural contexts"]},

    {type:"teach", trg:"가구", src:"furniture", pos:"noun", gender:null,
     note:"Sino-Korean. 家 (house) + 具 (tool).\nTools for the house.",
     example:"A: 새 가구를 샀어?\nB: 응, 책상하고 의자를 새로 샀어.",
     exampleSrc:"A: Did you buy new furniture?\nB: Yes, I bought a new desk and chair.",
     funFact:"From Hanja 家具. Traditional Korean homes used minimal furniture, as people sat and slept on the floor."},

    {type:"teach", trg:"가까워지다", src:"to become close, to draw near", pos:"verb", gender:null,
     note:"가깝다 (close) + 워지다 (become).\nA gradual process of closing distance.",
     example:"A: 요즘 민수랑 많이 가까워졌네.\nB: 같이 일하면서 가까워졌어.",
     exampleSrc:"A: You have gotten really close with Minsu lately.\nB: We got close while working together.",
     funFact:"Korean has many -워지다 verbs showing gradual change: 더워지다 (get hot), 추워지다 (get cold)."},

    {type:"teach", trg:"가난", src:"poverty", pos:"noun", gender:null,
     note:"Native Korean word.\nRefers to the state of being poor.",
     example:"A: 이 소설은 가난에 대한 이야기야.\nB: 주인공이 가난을 극복하는 거야?",
     exampleSrc:"A: This novel is about poverty.\nB: Does the protagonist overcome poverty?",
     funFact:"Korea went from one of the poorest nations in the 1950s to the world's 10th largest economy, called the Miracle on the Han River."},

    {type:"teach", trg:"가능", src:"possibility, being possible", pos:"noun", gender:null,
     note:"Sino-Korean. 可 (able) + 能 (capability).\nOften used in compound forms.",
     example:"A: 내일 회의 참석이 가능해요?\nB: 네, 가능합니다.",
     exampleSrc:"A: Is it possible for you to attend the meeting tomorrow?\nB: Yes, it is possible.",
     funFact:"From Hanja 可能. Combined with 성 to form 가능성 (possibility/probability), one of the most common formal nouns."},

    {type:"mc",
     q:"다음 중 '가난'의 뜻으로 맞는 것은?",
     opts:["돈이 없는 상태","건강하지 않은 상태","일을 많이 하는 것","물건을 잃어버리는 것"],
     ans:"돈이 없는 상태",
     hint:"Think about the opposite of wealth. This word describes a lack of financial resources."},

    {type:"teach", trg:"가능해지다", src:"to become possible", pos:"verb", gender:null,
     note:"가능 (possible) + 해지다 (become).\nSomething that was impossible becomes achievable.",
     example:"A: 인터넷 덕분에 재택근무가 가능해졌어요.\nB: 맞아요, 정말 편리해졌죠.",
     exampleSrc:"A: Thanks to the internet, working from home has become possible.\nB: That is right, it has become really convenient.",
     funFact:"The -해지다 pattern (become + state) is one of the most productive verb-forming patterns in Korean."},

    {type:"teach", trg:"가득하다", src:"to be full of, to be packed with", pos:"adj", gender:null,
     note:"Native Korean word.\nDescribes being completely filled up.",
     example:"A: 냉장고가 음식으로 가득해.\nB: 명절이라 선물을 많이 받았거든.",
     exampleSrc:"A: The refrigerator is full of food.\nB: We received many gifts because it is a holiday.",
     funFact:"Korean uses 가득하다 for both physical fullness (a full cup) and emotional fullness (a heart full of joy)."},

    {type:"teach", trg:"가득히", src:"fully, to the brim", pos:"adv", gender:null,
     note:"가득 + 히 (adverb suffix).\nDescribes the manner of being completely full.",
     example:"A: 물을 가득히 따라 주세요.\nB: 네, 여기 있습니다.",
     exampleSrc:"A: Please pour the water to the brim.\nB: Here you are.",
     funFact:"The suffix -히 converts many adjective stems into adverbs: 조용히 (quietly), 깨끗히 (cleanly)."},

    {type:"fb",
     s:"방 안이 꽃향기로 {1} 찼다.",
     a:["가득"],
     opts:["가득","가만","가령","각기"],
     hint:"This word describes a space being completely filled with something.",
     sSrc:"The room was {1} filled with the scent of flowers."},

    {type:"teach", trg:"가라앉다", src:"to sink, to subside", pos:"verb", gender:null,
     note:"가라 (down) + 앉다 (sit).\nTo sit down below the surface.",
     example:"A: 배가 천천히 가라앉고 있어!\nB: 빨리 구명조끼를 입어!",
     exampleSrc:"A: The boat is slowly sinking!\nB: Quickly put on a life jacket!",
     funFact:"Also used figuratively: 감정이 가라앉다 means emotions subside or settle down."},

    {type:"teach", trg:"가려지다", src:"to be hidden, to be covered", pos:"verb", gender:null,
     note:"가리다 (to cover) + 지다 (passive).\nSomething becomes obscured from view.",
     example:"A: 산이 구름에 가려졌어.\nB: 비가 올 것 같네.",
     exampleSrc:"A: The mountain is hidden by clouds.\nB: It looks like it might rain.",
     funFact:"The -지다 suffix creates passive verbs from active ones, similar to English 'be + past participle.'"},

    {type:"teach", trg:"가령", src:"for instance, suppose", pos:"adv", gender:null,
     note:"Sino-Korean. 假 (suppose) + 令 (order).\nUsed to introduce hypothetical examples.",
     example:"A: 가령 네가 사장이라면 어떻게 하겠어?\nB: 먼저 직원 복지를 개선하겠어.",
     exampleSrc:"A: Suppose you were the boss, what would you do?\nB: I would first improve employee welfare.",
     funFact:"From Hanja 假令. A formal alternative to 예를 들면, preferred in written and academic Korean."},

    {type:"mc",
     q:"'가라앉다'의 반대말에 가장 가까운 것은?",
     opts:["가득하다","떠오르다","가려지다","가만있다"],
     ans:"떠오르다",
     hint:"If sinking means going down, the opposite means coming up to the surface."},

    {type:"teach", trg:"가로", src:"width, horizontal direction", pos:"noun", gender:null,
     note:"Native Korean word.\nThe horizontal dimension, as opposed to 세로 (vertical).",
     example:"A: 이 상자의 가로 길이가 얼마예요?\nB: 가로 50센티, 세로 30센티예요.",
     exampleSrc:"A: What is the width of this box?\nB: 50 centimeters wide, 30 centimeters tall.",
     funFact:"The pair 가로/세로 appears everywhere in Korean, from crossword puzzles to construction measurements."},

    {type:"teach", trg:"가로등", src:"street light", pos:"noun", gender:null,
     note:"가로 (street) + 등 (燈, lamp).\nA lamp that lights the road.",
     example:"A: 밤에 이 길은 가로등이 없어서 무서워.\nB: 손전등을 가져가자.",
     exampleSrc:"A: This road is scary at night because there are no street lights.\nB: Let us take a flashlight.",
     funFact:"Seoul began installing gas street lights in 1900, among the first cities in East Asia to do so."},

    {type:"teach", trg:"가로막다", src:"to block, to obstruct", pos:"verb", gender:null,
     note:"가로 (across) + 막다 (to block).\nTo place a barrier horizontally across a path.",
     example:"A: 경찰이 길을 가로막고 있어.\nB: 사고가 났나 봐.",
     exampleSrc:"A: The police are blocking the road.\nB: It looks like there was an accident.",
     funFact:"Combines directional 가로 with 막다. Compare: 가로지르다 (to cross), 가로채다 (to intercept)."},

    {type:"teach", trg:"가로수", src:"roadside trees, street trees", pos:"noun", gender:null,
     note:"가로 (street) + 수 (樹, tree).\nTrees planted along the road.",
     example:"A: 이 길의 가로수가 정말 예쁘다.\nB: 가을이 되면 단풍이 더 멋져.",
     exampleSrc:"A: The roadside trees on this street are really beautiful.\nB: The autumn leaves are even more stunning in fall.",
     funFact:"Korea's most famous street tree is the ginkgo (은행나무), lining countless urban avenues."},

    {type:"match", pairs:[
      {trg:"가로등", src:"street light"},
      {trg:"가로수", src:"street trees"},
      {trg:"가로막다", src:"to block"},
      {trg:"가로", src:"width"}
    ]},

    {type:"teach", trg:"가르다", src:"to split, to divide", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo separate something into parts.",
     example:"A: 수박을 반으로 가르자.\nB: 좋아, 칼 가져올게.",
     exampleSrc:"A: Let us split the watermelon in half.\nB: OK, I will bring a knife.",
     funFact:"Not to be confused with 가르치다 (to teach). 가르다 is purely about physical division."},

    {type:"teach", trg:"가르침", src:"teaching, lesson, guidance", pos:"noun", gender:null,
     note:"가르치다 (to teach) + -ㅁ (nominalizer).\nThe wisdom passed from teacher to student.",
     example:"A: 선생님의 가르침을 잊지 않겠습니다.\nB: 항상 열심히 하렴.",
     exampleSrc:"A: I will never forget your teachings.\nB: Always do your best.",
     funFact:"The -ㅁ suffix turns verbs into abstract nouns: 슬프다 > 슬픔 (sadness), 기쁘다 > 기쁨 (joy)."},

    {type:"teach", trg:"가만", src:"still, quietly, without moving", pos:"adv", gender:null,
     note:"Native Korean word.\nDescribes staying motionless or silent.",
     example:"A: 가만 생각해 보니 네 말이 맞아.\nB: 그렇지? 내가 말했잖아.",
     exampleSrc:"A: Now that I think about it quietly, you were right.\nB: See? I told you.",
     funFact:"가만히 있다 (to stay still) is what Korean parents say to restless children, like English 'sit still.'"},

    {type:"teach", trg:"가만있다", src:"to stay still, to remain quiet", pos:"verb", gender:null,
     note:"가만 (still) + 있다 (to be).\nTo remain without moving or speaking.",
     example:"A: 왜 가만있어? 할 말 없어?\nB: 아니, 생각 중이야.",
     exampleSrc:"A: Why are you just sitting still? Nothing to say?\nB: No, I am thinking.",
     funFact:"Often used as a command: 가만있어! (Stay put! / Hold on!). Also means 'wait, let me think.'"},

    {type:"fb",
     s:"선생님의 {1}을 항상 기억하겠습니다.",
     a:["가르침"],
     opts:["가르침","가르다","가만","가사"],
     hint:"This noun comes from the verb 'to teach' and means guidance or lessons.",
     sSrc:"I will always remember the teacher's {1}."},

    {type:"teach", trg:"가뭄", src:"drought", pos:"noun", gender:null,
     note:"Native Korean word.\nA prolonged period without rain.",
     example:"A: 올해 가뭄이 심해서 농작물 피해가 커요.\nB: 물 절약을 더 해야겠네요.",
     exampleSrc:"A: The drought is severe this year, so crop damage is significant.\nB: We need to conserve more water.",
     funFact:"Korean has the proverb 가뭄에 콩 나듯 (like beans sprouting in a drought), meaning something extremely rare."},

    {type:"teach", trg:"가사", src:"lyrics; housework", pos:"noun", gender:null,
     note:"Two meanings from different Hanja.\n歌詞 (song words) or 家事 (house matters).",
     example:"A: 이 노래 가사가 정말 감동적이야.\nB: 맞아, 작사가가 유명한 시인이래.",
     exampleSrc:"A: The lyrics of this song are really touching.\nB: Right, apparently the lyricist is a famous poet.",
     funFact:"Same pronunciation, different Hanja: 가사 can mean song lyrics (歌詞), housework (家事), or even Buddhist robes (袈裟)."},

    {type:"mc",
     q:"'가뭄에 콩 나듯'이라는 표현의 의미는?",
     opts:["비가 많이 오는 것을 뜻한다","콩을 많이 심는 것을 뜻한다","아주 드문 일을 뜻한다","농사가 잘되는 것을 뜻한다"],
     ans:"아주 드문 일을 뜻한다",
     hint:"Think about how rare it would be for beans to grow when there is no water at all."},

    {type:"match", pairs:[
      {trg:"가뭄", src:"drought"},
      {trg:"가사", src:"lyrics; housework"},
      {trg:"가르침", src:"teaching"},
      {trg:"가만있다", src:"to stay still"}
    ]}
  ]
};
export default LESSON_1;
