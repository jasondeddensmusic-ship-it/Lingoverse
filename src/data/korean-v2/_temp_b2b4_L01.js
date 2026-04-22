// Korean B2. Batch 4, Lesson 1: Opening and Improving
// Words: 개방되다, 개방하다, 개별, 개선되다, 개선하다, 개성, 객관적, 거꾸로, 거대하다, 거두다, 거들다, 거듭, 거부하다, 거액, 거절하다, 거짓, 거치다, 거칠다, 거품, 걱정되다

const LESSON_1 = {
  id:"kov2_b2b4_l1", title:"개방과 개선", icon:"🔓", xp:15, board:true,
  steps:[
    {type:"intro", title:"개방과 개선",
     desc:"Learn vocabulary for opening up, improving, and evaluating. These Sino-Korean words are essential for discussing social change and reform.",
     goals:["Master 20 words about openness, improvement, and judgment","Understand passive -되다 and active -하다 verb pairs","Use formal vocabulary for opinions and evaluations"]},

    {type:"teach", trg:"개방되다", src:"to be opened, to be liberalized", pos:"verb", gender:null,
     note:"개방 (opening) + 되다 (passive).\nSomething becomes open or accessible.",
     example:"A: 이 공원이 시민들에게 개방됐대요.\nB: 정말요? 언제부터요?",
     exampleSrc:"A: I heard this park was opened to citizens.\nB: Really? Since when?",
     funFact:"From Hanja 開放. Korea's markets were gradually 개방 to foreign goods after joining the WTO in 1995."},

    {type:"teach", trg:"개방하다", src:"to open up, to liberalize", pos:"verb", gender:null,
     note:"개방 (opening) + 하다 (to do).\nActive form: someone opens something up.",
     example:"A: 정부가 시장을 개방할 계획이래요.\nB: 경쟁이 더 심해지겠네요.",
     exampleSrc:"A: The government plans to open up the market.\nB: Competition will get fiercer.",
     funFact:"From Hanja 開 (open) + 放 (release). The -되다/-하다 pair is a core pattern: passive vs. active."},

    {type:"teach", trg:"개별", src:"individual, separate", pos:"noun", gender:null,
     note:"Sino-Korean. 個 (individual) + 別 (separate).\nUsed as a modifier before nouns.",
     example:"A: 개별 면담이 필요해요.\nB: 네, 한 명씩 만나 봅시다.",
     exampleSrc:"A: Individual interviews are needed.\nB: Yes, let us meet one person at a time.",
     funFact:"From Hanja 個別. Often paired with 적 to form 개별적 (individual, as an adjective modifier)."},

    {type:"teach", trg:"개선되다", src:"to be improved, to get better", pos:"verb", gender:null,
     note:"개선 (improvement) + 되다 (passive).\nConditions get better on their own or through effort.",
     example:"A: 교통 상황이 많이 개선됐어요.\nB: 새 도로가 생겨서 그런 거예요.",
     exampleSrc:"A: The traffic situation has improved a lot.\nB: It is because new roads were built.",
     funFact:"From Hanja 改善. 改 means 'change' and 善 means 'good,' so literally 'change to good.'"},

    {type:"mc",
     q:"'개방하다'의 반대 의미를 가진 단어는?",
     opts:["폐쇄하다","개선하다","거부하다","거치다"],
     ans:"폐쇄하다",
     hint:"If opening up is one direction, closing down is the opposite. Think about shutting something off."},

    {type:"teach", trg:"개선하다", src:"to improve, to make better", pos:"verb", gender:null,
     note:"개선 (improvement) + 하다 (to do).\nActive form: someone takes action to improve.",
     example:"A: 서비스 품질을 개선해야 해요.\nB: 고객 설문 결과를 분석해 봅시다.",
     exampleSrc:"A: We need to improve the service quality.\nB: Let us analyze the customer survey results.",
     funFact:"From Hanja 改善. Very common in business Korean, paired with nouns like 품질, 환경, 생활."},

    {type:"teach", trg:"개성", src:"individuality, personality", pos:"noun", gender:null,
     note:"Sino-Korean. 個 (individual) + 性 (nature).\nWhat makes a person unique.",
     example:"A: 그 가수는 개성이 강해.\nB: 맞아, 목소리가 정말 독특하지.",
     exampleSrc:"A: That singer has a strong personality.\nB: Right, their voice is really unique.",
     funFact:"From Hanja 個性. Also the name of the city Kaesong (개성), the ancient Goryeo dynasty capital."},

    {type:"teach", trg:"객관적", src:"objective (as modifier)", pos:"noun", gender:null,
     note:"Sino-Korean. 客 (guest) + 觀 (view) + 的.\nViewing from an outsider's perspective.",
     example:"A: 좀 더 객관적으로 봐야 하지 않을까?\nB: 맞아, 감정을 빼고 생각하자.",
     exampleSrc:"A: Should we not look at this more objectively?\nB: Right, let us think without emotions.",
     funFact:"From Hanja 客觀的. The opposite is 주관적 (subjective): 主 (self) + 觀 (view)."},

    {type:"fb",
     s:"이 문제는 {1}인 시각에서 판단해야 합니다.",
     a:["객관적"],
     opts:["객관적","개별","개성","거대하다"],
     hint:"This Sino-Korean word means viewing something from a neutral, outside perspective.",
     sSrc:"This issue must be judged from an {1} perspective."},

    {type:"teach", trg:"거꾸로", src:"upside down, backwards, in reverse", pos:"adv", gender:null,
     note:"Native Korean adverb.\nThe opposite direction or order.",
     example:"A: 옷을 거꾸로 입었네!\nB: 아, 정말? 창피해!",
     exampleSrc:"A: You put your clothes on inside out!\nB: Oh, really? How embarrassing!",
     funFact:"Korean children play a game called 거꾸로 말하기 (speaking backwards) to practice language skills."},

    {type:"teach", trg:"거대하다", src:"to be enormous, to be colossal", pos:"adj", gender:null,
     note:"Sino-Korean. 巨 (giant) + 大 (big) + 하다.\nSomething impressively large in scale.",
     example:"A: 저 건물이 정말 거대하네요.\nB: 네, 100층이 넘는다고 해요.",
     exampleSrc:"A: That building is really enormous.\nB: Yes, they say it is over 100 floors.",
     funFact:"From Hanja 巨大. 巨 alone appears in 거인 (giant person) and 거석 (megalith)."},

    {type:"teach", trg:"거두다", src:"to harvest, to collect, to achieve", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo gather in results or crops.",
     example:"A: 이번 시험에서 좋은 성과를 거뒀어.\nB: 축하해! 열심히 한 보람이 있네.",
     exampleSrc:"A: I achieved good results on this exam.\nB: Congratulations! Your hard work paid off.",
     funFact:"Used in many expressions: 성과를 거두다 (achieve results), 승리를 거두다 (win a victory)."},

    {type:"teach", trg:"거들다", src:"to help, to assist, to lend a hand", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo pitch in and help someone with work.",
     example:"A: 이사하는데 좀 거들어 줄 수 있어?\nB: 물론이지, 언제 가면 돼?",
     exampleSrc:"A: Can you help me with my move?\nB: Of course, when should I come?",
     funFact:"Often appears in the expression 거들먹거리다 (to act arrogant), which has a completely different nuance."},

    {type:"teach", trg:"거듭", src:"repeatedly, again and again", pos:"adv", gender:null,
     note:"Native Korean adverb.\nDoing something over and over.",
     example:"A: 같은 실수를 거듭하면 안 돼요.\nB: 알겠습니다, 주의하겠습니다.",
     exampleSrc:"A: You should not repeat the same mistake.\nB: I understand, I will be careful.",
     funFact:"Also forms the verb 거듭나다 (to be reborn/renewed), used both literally and metaphorically."},

    {type:"mc",
     q:"'거대하다'는 어떤 의미인가요?",
     opts:["매우 오래된","매우 큰","매우 작은","매우 빠른"],
     ans:"매우 큰",
     hint:"The Hanja 巨 means giant and 大 means big. Both characters point to impressive size."},

    {type:"teach", trg:"거부하다", src:"to refuse, to reject", pos:"verb", gender:null,
     note:"Sino-Korean. 拒 (resist) + 否 (deny) + 하다.\nTo firmly say no.",
     example:"A: 그 제안을 거부했다면서요?\nB: 네, 조건이 너무 불리했어요.",
     exampleSrc:"A: I heard you refused that offer?\nB: Yes, the conditions were too unfavorable.",
     funFact:"From Hanja 拒否. Compare with 거절하다 (decline), which is slightly softer in nuance."},

    {type:"teach", trg:"거액", src:"a large sum of money", pos:"noun", gender:null,
     note:"Sino-Korean. 巨 (giant) + 額 (amount).\nAn impressively large amount of money.",
     example:"A: 그 그림이 거액에 팔렸대요.\nB: 얼마에 팔렸는데요?",
     exampleSrc:"A: I heard that painting sold for a huge sum.\nB: How much did it sell for?",
     funFact:"From Hanja 巨額. Korean news often uses this word for large financial transactions or lottery winnings."},

    {type:"teach", trg:"거절하다", src:"to decline, to turn down", pos:"verb", gender:null,
     note:"Sino-Korean. 拒 (resist) + 絶 (cut off) + 하다.\nTo politely say no to a request.",
     example:"A: 파티 초대를 거절해야 할 것 같아.\nB: 왜? 무슨 일 있어?",
     exampleSrc:"A: I think I have to decline the party invitation.\nB: Why? Is something wrong?",
     funFact:"From Hanja 拒絶. Softer than 거부하다. Koreans often soften refusals further with 죄송하지만."},

    {type:"teach", trg:"거짓", src:"a lie, falsehood", pos:"noun", gender:null,
     note:"Native Korean word.\nThe opposite of truth (진실).",
     example:"A: 그 사람 말은 거짓이었어.\nB: 정말? 믿었는데 실망이다.",
     exampleSrc:"A: What that person said was a lie.\nB: Really? I believed it, how disappointing.",
     funFact:"거짓말 (lie, literally 'false words') is one of the first compound words Korean children learn."},

    {type:"fb",
     s:"그의 약속은 모두 {1}이었다.",
     a:["거짓"],
     opts:["거짓","거액","거듭","거품"],
     hint:"This native Korean word is the opposite of truth. It describes something untrue or false.",
     sSrc:"All of his promises were {1}."},

    {type:"teach", trg:"거치다", src:"to go through, to pass through", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo stop at or pass through a place or process.",
     example:"A: 이 서류는 몇 단계를 거쳐야 해요?\nB: 세 부서를 거쳐야 합니다.",
     exampleSrc:"A: How many stages does this document have to go through?\nB: It has to go through three departments.",
     funFact:"Very common in formal Korean: 심사를 거치다 (go through review), 과정을 거치다 (go through a process)."},

    {type:"teach", trg:"거칠다", src:"to be rough, to be coarse", pos:"adj", gender:null,
     note:"Native Korean adjective.\nDescribes rough texture or harsh manner.",
     example:"A: 이 수건이 너무 거칠어.\nB: 빨래할 때 섬유유연제를 넣어 봐.",
     exampleSrc:"A: This towel is too rough.\nB: Try adding fabric softener when you wash it.",
     funFact:"Used for both physical texture (거친 피부, rough skin) and personality (거친 성격, rough character)."},

    {type:"teach", trg:"거품", src:"foam, bubbles, froth", pos:"noun", gender:null,
     note:"Native Korean word.\nBubbles formed on liquid surfaces.",
     example:"A: 맥주에 거품이 너무 많아.\nB: 천천히 따르면 덜 생겨.",
     exampleSrc:"A: There is too much foam on the beer.\nB: Pour it slowly and there will be less.",
     funFact:"Also used metaphorically: 거품 경제 (bubble economy) describes an inflated market about to burst."},

    {type:"teach", trg:"걱정되다", src:"to be worried, to feel anxious", pos:"verb", gender:null,
     note:"걱정 (worry) + 되다 (become).\nThe feeling of worry arises involuntarily.",
     example:"A: 시험 결과가 걱정돼요.\nB: 잘 했을 거예요, 너무 걱정하지 마세요.",
     exampleSrc:"A: I am worried about the exam results.\nB: You probably did well, do not worry too much.",
     funFact:"In Korean, 걱정되다 (worry happens to me) and 걱정하다 (I worry) express different levels of control."},

    {type:"mc",
     q:"'거치다'는 어떤 의미인가요?",
     opts:["거절하다","거꾸로 가다","과정을 통과하다","거짓말하다"],
     ans:"과정을 통과하다",
     hint:"This verb describes moving through stages or stopping at a place along the way."},

    {type:"match", pairs:[
      {trg:"거부하다", src:"to refuse"},
      {trg:"거절하다", src:"to decline"},
      {trg:"거짓", src:"a lie"},
      {trg:"거액", src:"a large sum"}
    ]}
  ]
};
export default LESSON_1;
