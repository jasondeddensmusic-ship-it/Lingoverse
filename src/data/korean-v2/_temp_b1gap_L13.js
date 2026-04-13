// Korean V2 B1 Gap Lesson 13 — Effort, Growth, and Change
// 20 teach cards + interleaved quizzes. Max 30 steps.

const LESSON_13 = {
  id:"kov2_b1gap_l13", title:"노력과 변화", icon:"🌱", xp:15, board:true,
  steps:[
    {type:"intro", title:"Effort, Growth, and Change",
     desc:"Words for pushing through hardship, growing stronger, and watching things change. Korean has rich vocabulary for the journey from struggle to success.",
     goals:["Master 20 effort and change words","Distinguish causative/passive verb pairs","Use adverbs of persistence naturally"]},

    // ── Teach 1-4: Effort core ──
    {type:"teach", trg:"노력", src:"effort", pos:"noun", gender:null,
     note:"Hanja: 努力 (exert + strength).\nOne of the most valued virtues in Korean culture.",
     example:"A: 한국어 잘하시네요.\nB: 감사해요. 노력을 많이 했어요.\nA: 얼마나 공부했어요?\nB: 3년 동안 매일 공부했어요.",
     exampleSrc:"A: You speak Korean well.\nB: Thank you. I put in a lot of effort.\nA: How long did you study?\nB: I studied every day for 3 years.",
     funFact:"노력 is deeply tied to Korean values. The phrase 노력은 배신하지 않는다 means 'effort never betrays you.'"},

    {type:"teach", trg:"노력하다", src:"to make effort, to try hard", pos:"verb", gender:null,
     note:"노력 + 하다.\nUsed constantly in encouragement and motivation.",
     example:"A: 시험이 어려웠어요?\nB: 네, 하지만 열심히 노력했어요.\nA: 결과가 어땠어요?\nB: 노력한 만큼 좋은 결과가 나왔어요.",
     exampleSrc:"A: Was the exam hard?\nB: Yes, but I tried really hard.\nA: How were the results?\nB: The results were as good as my effort.",
     funFact:"화이팅! (fighting!) is the classic encouragement in Korean, often paired with 노력하다."},

    {type:"teach", trg:"고생", src:"hardship, suffering", pos:"noun", gender:null,
     note:"Hanja: 苦生 (bitter + life).\n고생하다 = to go through hardship.",
     example:"A: 고생 많으셨어요.\nB: 감사합니다. 힘들었지만 보람 있었어요.\nA: 정말 대단해요.\nB: 모든 게 고생 끝에 낙이 온다고 하잖아요.",
     exampleSrc:"A: You've been through a lot.\nB: Thank you. It was hard but rewarding.\nA: You're really amazing.\nB: They say joy comes after hardship.",
     funFact:"고생 끝에 낙이 온다 (after hardship comes happiness) is one of the most beloved Korean proverbs."},

    {type:"teach", trg:"견디다", src:"to endure, to bear", pos:"verb", gender:null,
     note:"Withstanding pain, difficulty, or pressure.\nStronger than 참다 (to hold back).",
     example:"A: 더위를 어떻게 견뎌요?\nB: 에어컨 없이는 못 견뎌요.\nA: 겨울은요?\nB: 겨울 추위는 견딜 수 있어요.",
     exampleSrc:"A: How do you endure the heat?\nB: I can't endure it without air conditioning.\nA: What about winter?\nB: I can endure the winter cold.",
     funFact:"견디다 implies long-term endurance. 참다 is for short-term restraint (holding back tears, anger)."},

    // ── Quiz batch 1 ──
    {type:"mc",
     q:"열심히 ___면 좋은 결과가 올 거예요.",
     opts:["고생하","견디","강조하","노력하"],
     ans:"노력하",
     hint:"If you try hard, good results will come. Which verb means to make effort?"},

    {type:"fb",
     s:"힘든 시간을 잘 {1}어요.",
     a:["견뎠"],
     opts:["견뎠","노력했","고생했","계속했"],
     hint:"They endured the hard times well. Which verb specifically means to bear through difficulty?",
     sSrc:"They endured the hard times well."},

    // ── Teach 5-8: Continuation and steadiness ──
    {type:"teach", trg:"꾸준히", src:"steadily, consistently", pos:"adv", gender:null,
     note:"From 꾸준하다 (to be steady).\nKey adverb for describing persistent effort.",
     example:"A: 건강 비결이 뭐예요?\nB: 꾸준히 운동하는 거예요.\nA: 매일 해요?\nB: 네, 꾸준히 30분씩 걸어요.",
     exampleSrc:"A: What's the secret to your health?\nB: Exercising steadily.\nA: Do you do it every day?\nB: Yes, I walk steadily for 30 minutes.",
     funFact:"Korean success stories almost always use 꾸준히. Talent is respected, but consistency is worshipped."},

    {type:"teach", trg:"계속되다", src:"to continue (intransitive)", pos:"verb", gender:null,
     note:"Hanja: 繼續 (continue + continue).\nThe situation continues on its own.",
     example:"A: 비가 계속돼요.\nB: 네, 3일째 계속되고 있어요.\nA: 언제 그칠까요?\nB: 내일까지 계속된다고 해요.",
     exampleSrc:"A: The rain continues.\nB: Yes, it's been continuing for 3 days.\nA: When will it stop?\nB: They say it'll continue until tomorrow.",
     funFact:"계속 is also used as a standalone adverb meaning 'continuously': 계속 공부해요 (I keep studying)."},

    {type:"teach", trg:"계속하다", src:"to continue (transitive)", pos:"verb", gender:null,
     note:"YOU continue doing something.\nTransitive counterpart of 계속되다.",
     example:"A: 포기하고 싶지 않아요?\nB: 아니요, 계속할 거예요.\nA: 대단해요.\nB: 시작한 일은 끝까지 계속해야 해요.",
     exampleSrc:"A: Don't you want to give up?\nB: No, I'll continue.\nA: That's impressive.\nB: You have to continue what you started to the end.",
     funFact:"The pair 계속되다/계속하다 follows the Korean pattern: -되다 (it happens) vs -하다 (you make it happen)."},

    {type:"teach", trg:"높아지다", src:"to get higher, to rise", pos:"verb", gender:null,
     note:"높다 (high) + -아지다 (become).\nIntransitive change of state.",
     example:"A: 요즘 물가가 높아졌어요.\nB: 맞아요, 많이 높아졌어요.\nA: 월급도 높아졌으면 좋겠어요.\nB: 저도요. 물가만 높아지면 힘들어요.",
     exampleSrc:"A: Prices have risen lately.\nB: Right, they've risen a lot.\nA: I wish salaries would rise too.\nB: Me too. It's tough when only prices rise.",
     funFact:"The -아/어지다 pattern creates 'become' verbs: 높아지다, 많아지다, 달라지다. Extremely productive in Korean."},

    // ── Quiz batch 2 ──
    {type:"match", pairs:[
      {trg:"꾸준히", src:"steadily"},
      {trg:"계속되다", src:"to continue (itself)"},
      {trg:"계속하다", src:"to continue (something)"},
      {trg:"높아지다", src:"to get higher"}
    ]},

    {type:"mc",
     q:"비가 3일째 ___고 있어요.",
     opts:["계속하","높아지","계속되","꾸준히"],
     ans:"계속되",
     hint:"The rain has been going on for 3 days. Is the rain continuing on its own, or is someone making it continue?"},

    // ── Teach 9-12: Increase verbs ──
    {type:"teach", trg:"늘다", src:"to increase, to grow", pos:"verb", gender:null,
     note:"Intransitive. The number or amount grows.\n실력이 늘다 = skills improve.",
     example:"A: 한국어 실력이 많이 늘었네요.\nB: 감사해요. 매일 연습했어요.\nA: 어휘가 특히 많이 늘었어요.\nB: 단어장을 꾸준히 봤거든요.",
     exampleSrc:"A: Your Korean skills have improved a lot.\nB: Thank you. I practiced every day.\nA: Your vocabulary especially grew.\nB: I reviewed my word list steadily.",
     funFact:"늘다 is the go-to word for skill improvement in Korean: 실력이 늘다 (skills grow)."},

    {type:"teach", trg:"늘리다", src:"to increase (something)", pos:"verb", gender:null,
     note:"Transitive form of 늘다.\nYOU increase something deliberately.",
     example:"A: 어휘를 어떻게 늘려요?\nB: 매일 새 단어를 10개씩 외워요.\nA: 그렇게 하면 빨리 늘릴 수 있어요?\nB: 네, 꾸준히 하면 확실히 늘려요.",
     exampleSrc:"A: How do you increase your vocabulary?\nB: I memorize 10 new words every day.\nA: Can you increase it quickly that way?\nB: Yes, if you do it steadily you definitely increase it.",
     funFact:"The 늘다/늘리다 pair: 늘다 (it grows by itself) vs 늘리다 (you make it grow). Classic Korean causative pattern."},

    {type:"teach", trg:"늘어나다", src:"to stretch, to increase", pos:"verb", gender:null,
     note:"늘다 + 어나다 (come out).\nLonger form emphasizing gradual expansion.",
     example:"A: 인구가 계속 늘어나고 있어요.\nB: 어떤 지역이요?\nA: 도시 인구가 늘어나요.\nB: 반대로 시골 인구는 줄어들고 있어요.",
     exampleSrc:"A: The population keeps increasing.\nB: In which region?\nA: The city population is increasing.\nB: On the other hand, the rural population is decreasing.",
     funFact:"늘어나다 often pairs with 줄어들다 (to decrease) when discussing trends: 늘어나는 vs 줄어드는."},

    {type:"teach", trg:"많아지다", src:"to become many, to increase in number", pos:"verb", gender:null,
     note:"많다 (many) + -아지다 (become).\nSpecifically about quantity increasing.",
     example:"A: 요즘 외국인 관광객이 많아졌어요.\nB: 맞아요, 예전보다 훨씬 많아졌어요.\nA: 한국 음식 때문인 것 같아요.\nB: K-드라마 영향도 있을 거예요.",
     exampleSrc:"A: Foreign tourists have increased lately.\nB: Right, much more than before.\nA: I think it's because of Korean food.\nB: K-drama influence probably plays a role too.",
     funFact:"The -아/어지다 'become' pattern is one of the most useful in Korean. Any adjective can become a verb of change."},

    // ── Quiz batch 3 ──
    {type:"fb",
     s:"매일 연습하면 실력이 {1}.",
     a:["늘어요"],
     opts:["늘어요","늘려요","늘어나요","많아져요"],
     hint:"If you practice daily, your skills grow on their own. Which intransitive verb fits best?",
     sSrc:"If you practice every day, your skills increase."},

    // ── Teach 13-16: Change and expansion ──
    {type:"teach", trg:"달라지다", src:"to become different, to change", pos:"verb", gender:null,
     note:"다르다 (different) + -아지다 (become).\nSomething changes from what it was.",
     example:"A: 이 동네가 많이 달라졌어요.\nB: 네, 5년 전이랑 완전히 달라졌어요.\nA: 건물도 새로 생기고요.\nB: 사람들도 많이 달라졌어요.",
     exampleSrc:"A: This neighborhood has changed a lot.\nB: Yes, it's completely different from 5 years ago.\nA: New buildings appeared too.\nB: The people have changed a lot too.",
     funFact:"달라지다 focuses on the result (it became different). 변하다 focuses on the process (it is changing)."},

    {type:"teach", trg:"넓히다", src:"to widen, to broaden", pos:"verb", gender:null,
     note:"넓다 (wide) + -히다 (causative).\nYOU make something wider.",
     example:"A: 시야를 넓히고 싶어요.\nB: 여행을 많이 하면 시야가 넓어져요.\nA: 경험을 넓히는 게 중요하죠?\nB: 맞아요, 다양한 경험이 필요해요.",
     exampleSrc:"A: I want to broaden my perspective.\nB: If you travel a lot, your perspective widens.\nA: Broadening experience is important, right?\nB: Right, diverse experiences are needed.",
     funFact:"시야를 넓히다 (broaden one's perspective) is a popular expression in Korean self-improvement culture."},

    {type:"teach", trg:"넘치다", src:"to overflow, to be full of", pos:"verb", gender:null,
     note:"Literally: water overflowing a container.\nFiguratively: overflowing with energy, talent.",
     example:"A: 오늘 기운이 넘치네요!\nB: 네, 잘 잤거든요.\nA: 자신감도 넘쳐 보여요.\nB: 오늘은 뭐든 할 수 있을 것 같아요!",
     exampleSrc:"A: You're overflowing with energy today!\nB: Yes, I slept well.\nA: You look full of confidence too.\nB: I feel like I can do anything today!",
     funFact:"에너지가 넘치다 (overflowing with energy) and 자신감이 넘치다 (overflowing with confidence) are common compliments."},

    {type:"teach", trg:"다하다", src:"to exhaust, to use up completely", pos:"verb", gender:null,
     note:"다 (all) + 하다 (do).\nDoing something to the very end.",
     example:"A: 최선을 다했어요?\nB: 네, 정말 최선을 다했어요.\nA: 그러면 후회 없겠네요.\nB: 네, 힘을 다해서 뿌듯해요.",
     exampleSrc:"A: Did you do your best?\nB: Yes, I really did my best.\nA: Then you have no regrets.\nB: Right, I'm proud that I gave it my all.",
     funFact:"최선을 다하다 (to do one's best) is perhaps the most motivational phrase in Korean. Used constantly."},

    // ── Quiz batch 4 ──
    {type:"match", pairs:[
      {trg:"달라지다", src:"to become different"},
      {trg:"넓히다", src:"to widen"},
      {trg:"넘치다", src:"to overflow"},
      {trg:"다하다", src:"to exhaust, use up"}
    ]},

    // ── Teach 17-20: Final group ──
    {type:"teach", trg:"더하다", src:"to add, to make worse", pos:"verb", gender:null,
     note:"더 (more) + 하다 (do).\nAlso used in math: 2 더하기 3 = 2 plus 3.",
     example:"A: 날씨가 점점 더해요.\nB: 맞아요, 어제보다 더 더워요.\nA: 내일은 더 더하다고 해요.\nB: 에어컨 없으면 못 살겠어요.",
     exampleSrc:"A: The weather keeps getting worse.\nB: Right, it's hotter than yesterday.\nA: They say tomorrow will be even worse.\nB: I can't live without air conditioning.",
     funFact:"더하다 in math class: 2 더하기 3은 5 (2 plus 3 is 5). 빼기 = minus, 곱하기 = times, 나누기 = divided by."},

    {type:"teach", trg:"기운", src:"energy, spirit, vitality", pos:"noun", gender:null,
     note:"Hanja: 氣運 (qi + movement).\nPhysical and mental energy combined.",
     example:"A: 기운이 없어 보여요.\nB: 아침을 안 먹었거든요.\nA: 밥 먹으면 기운이 날 거예요.\nB: 맞아요, 뭐라도 먹어야겠어요.",
     exampleSrc:"A: You look low on energy.\nB: I didn't eat breakfast.\nA: If you eat, you'll get energy.\nB: Right, I should eat something.",
     funFact:"기운 shares the Chinese character 氣 (qi) used in martial arts and traditional medicine."},

    {type:"teach", trg:"땀", src:"sweat", pos:"noun", gender:null,
     note:"Native Korean word.\n땀을 흘리다 = to shed sweat (to work hard).",
     example:"A: 운동하니까 땀이 많이 나요.\nB: 땀을 흘리면 기분이 좋아요.\nA: 맞아요, 상쾌해져요.\nB: 수건 가져왔어요?",
     exampleSrc:"A: I'm sweating a lot from exercising.\nB: Sweating makes you feel good.\nA: Right, it's refreshing.\nB: Did you bring a towel?",
     funFact:"땀의 결실 (fruit of sweat) means the reward of hard work. Similar to English 'blood, sweat, and tears.'"},

    {type:"teach", trg:"강하다", src:"to be strong", pos:"adj", gender:null,
     note:"Hanja: 强 (strong).\nPhysical or mental strength.",
     example:"A: 정신력이 강하네요.\nB: 감사해요. 많이 훈련했어요.\nA: 체력도 강해요?\nB: 체력은 보통이에요. 정신력이 더 강해요.",
     exampleSrc:"A: Your mental strength is strong.\nB: Thank you. I trained a lot.\nA: Is your physical strength strong too?\nB: Physical strength is average. My mental strength is stronger.",
     funFact:"강한 사람 can mean physically strong or mentally strong depending on context. Koreans admire both."},

    // ── Final quiz batch ──
    {type:"fb",
     s:"최선을 {1}면 후회 없어요.",
     a:["다하"],
     opts:["다하","더하","강하","넘치"],
     hint:"If you do your absolute best, you have no regrets. Which verb means to exhaust all effort?",
     sSrc:"If you do your best, you have no regrets."},

    {type:"mc",
     q:"운동하니까 ___이 많이 나요.",
     opts:["기운","땀","노력","고생"],
     ans:"땀",
     hint:"A liquid that comes out of your skin when you exercise. What is it called?"},

    {type:"fb",
     s:"그 선수는 정신력이 아주 {1}.",
     a:["강해요"],
     opts:["강해요","넓어요","높아요","많아요"],
     hint:"That athlete has very powerful mental fortitude. Which adjective means strong?",
     sSrc:"That athlete has very strong mental strength."}
  ]
};

export default LESSON_13;
