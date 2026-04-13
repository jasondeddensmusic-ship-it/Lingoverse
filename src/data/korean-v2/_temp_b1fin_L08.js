// Korean B1 Final Gap - Lesson 8: Correctness & Quality
const LESSON_8 = {
  id:"kov2_b1fin_l8", title:"옳고 그름", icon:"✅", xp:15, board:true,
  steps:[
    {type:"intro", title:"Correctness & Quality",
     desc:"Learn adjectives and adverbs for expressing correctness, accuracy, quality, and adequacy. These words are essential for giving opinions and evaluations in Korean.",
     goals:["Learn 20 words about right/wrong, accuracy, and quality","Express degrees of certainty and sufficiency","Use evaluation vocabulary in conversations"]},

    {type:"teach", trg:"잘못", src:"mistake, fault, wrongly", pos:"noun", gender:null,
     note:"Compound: 잘 (well) + 못 (cannot). Something done not-well.",
     example:"A: 이건 제 잘못이에요.\nB: 괜찮아요, 누구나 실수해요.",
     exampleSrc:"A: This is my fault.\nB: It's okay, everyone makes mistakes.",
     funFact:"잘못 works as noun (mistake), adverb (wrongly), and appears in verbs: 잘못하다, 잘못되다. One of Korean's most productive compounds."},

    {type:"teach", trg:"잘못되다", src:"to go wrong, to be mistaken", pos:"verb", gender:null,
     note:"Intransitive: something goes wrong by itself. Not anyone's deliberate action.",
     example:"A: 계획이 잘못됐어요.\nB: 처음부터 다시 해 봐요.",
     exampleSrc:"A: The plan went wrong.\nB: Let's try again from the beginning.",
     funFact:"잘못되다 removes personal blame: the thing itself went wrong. It is softer than saying someone 잘못했다 (made a mistake)."},

    {type:"teach", trg:"잘못하다", src:"to do wrong, to make a mistake", pos:"verb", gender:null,
     note:"Active: someone does something wrong. Implies personal responsibility.",
     example:"A: 내가 잘못했어. 미안해.\nB: 다음부터 조심해.",
     exampleSrc:"A: I did wrong. I'm sorry.\nB: Be careful from now on.",
     funFact:"잘못했습니다 is the standard Korean apology for wrongdoing. It literally admits 'I did wrong,' which is culturally valued for its directness."},

    {type:"teach", trg:"옳다", src:"to be right, to be correct", pos:"adj", gender:null,
     note:"Native Korean adjective. Morally or logically right.",
     example:"A: 그 결정이 옳았어요?\nB: 네, 옳은 결정이었어요.",
     exampleSrc:"A: Was that decision right?\nB: Yes, it was the right decision.",
     funFact:"옳다 implies moral rightness, not just factual correctness. For factual accuracy, Koreans prefer 맞다 (to be correct/to match)."},

    {type:"teach", trg:"틀리다", src:"to be wrong, to be incorrect", pos:"verb", gender:null,
     note:"Native Korean verb. Something is factually wrong or different from expected.",
     example:"A: 이 답이 틀렸어요?\nB: 네, 3번이 틀렸어요.",
     exampleSrc:"A: Is this answer wrong?\nB: Yes, number 3 is wrong.",
     funFact:"Koreans debate 틀리다 vs 다르다 (different). Strictly, 틀리다 = wrong and 다르다 = different. But colloquially, 틀리다 is often used for 'different.'"},

    {type:"mc",
     q:"시험에서 답이 정답과 다르면?",
     opts:["옳다","잘못되다","틀리다","완벽하다"],
     ans:"틀리다",
     hint:"This word specifically means factually incorrect, especially on tests and quizzes."},

    {type:"teach", trg:"틀림없다", src:"certain, without doubt, unmistakable", pos:"adj", gender:null,
     note:"Compound: 틀림 (error) + 없다 (none). Literally 'no error.'",
     example:"A: 그 사람이 범인이에요?\nB: 틀림없어요, 증거가 확실해요.",
     exampleSrc:"A: Is that person the culprit?\nB: Without doubt, the evidence is clear.",
     funFact:"틀림없이 (adverb form) means 'certainly' or 'surely.' It is a strong expression of confidence, more emphatic than 아마."},

    {type:"teach", trg:"완벽하다", src:"perfect, flawless", pos:"adj", gender:null,
     note:"Sino-Korean (完璧). 완 (完) = complete, 벽 (璧) = jade disc.",
     example:"A: 발표가 완벽했어요!\nB: 고마워요, 열심히 준비했어요.",
     exampleSrc:"A: The presentation was perfect!\nB: Thanks, I prepared hard.",
     funFact:"완벽 literally means 'complete jade.' The hanja comes from an ancient Chinese story about returning a precious jade disc unharmed."},

    {type:"teach", trg:"완전히", src:"completely, entirely, totally", pos:"adv", gender:null,
     note:"Sino-Korean (完全). Adverb form with 히. Total completion.",
     example:"A: 숙제를 완전히 끝냈어요?\nB: 네, 완전히 다 했어요.",
     exampleSrc:"A: Did you completely finish the homework?\nB: Yes, I finished it completely.",
     funFact:"In casual Korean slang, 완전 (without 히) is used like 'totally' in English: 완전 맛있다 (totally delicious). Very common among young speakers."},

    {type:"teach", trg:"정확하다", src:"accurate, precise, exact", pos:"adj", gender:null,
     note:"Sino-Korean (正確). 정 (正) = correct, 확 (確) = certain.",
     example:"A: 시간이 정확해요?\nB: 네, 이 시계는 아주 정확해요.",
     exampleSrc:"A: Is the time accurate?\nB: Yes, this clock is very accurate.",
     funFact:"정확하다 implies precision with no margin for error. Korean trains and buses pride themselves on 정확한 시간 (precise timing)."},

    {type:"teach", trg:"정확히", src:"exactly, precisely", pos:"adv", gender:null,
     note:"Adverb form of 정확하다. Used to emphasize exactness.",
     example:"A: 정확히 몇 시에 만날까요?\nB: 정확히 3시에 만나요.",
     exampleSrc:"A: What time exactly shall we meet?\nB: Let's meet at exactly 3 o'clock.",
     funFact:"정확히 is the go-to word when Koreans need precise information. 정확히 뭐예요? (What exactly is it?) is a common clarification question."},

    {type:"fb",
     s:"이 시계는 시간이 아주 {1}.",
     a:["정확해요"],
     opts:["정확해요","완벽해요","틀려요","옳아요"],
     hint:"This adjective describes something that is precise and without deviation.",
     sSrc:"This clock keeps very {1} time."},

    {type:"teach", trg:"제대로", src:"properly, correctly, as it should be", pos:"adv", gender:null,
     note:"Native Korean adverb. Doing something the right way.",
     example:"A: 제대로 했어요?\nB: 이번에는 제대로 했어요.",
     exampleSrc:"A: Did you do it properly?\nB: This time I did it properly.",
     funFact:"제대로 implies meeting the expected standard. 제대로 된 식당 means a restaurant that does things right, a genuine recommendation."},

    {type:"teach", trg:"확실하다", src:"certain, sure, definite", pos:"adj", gender:null,
     note:"Sino-Korean (確實). 확 (確) = certain, 실 (實) = real/true.",
     example:"A: 이 정보가 확실해요?\nB: 네, 확실한 정보예요.",
     exampleSrc:"A: Is this information certain?\nB: Yes, it's reliable information.",
     funFact:"확실하다 and 틀림없다 both express certainty, but 확실하다 is more common in everyday speech while 틀림없다 is more literary."},

    {type:"teach", trg:"확실히", src:"certainly, definitely, clearly", pos:"adv", gender:null,
     note:"Adverb form of 확실하다. Emphasizes certainty.",
     example:"A: 확실히 올 거예요?\nB: 네, 확실히 갈게요.",
     exampleSrc:"A: Will you definitely come?\nB: Yes, I'll definitely go.",
     funFact:"확실히 is stronger than 아마 (maybe) but softer than 반드시 (absolutely must). It is the Goldilocks word for confident promises."},

    {type:"teach", trg:"충분하다", src:"sufficient, enough, adequate", pos:"adj", gender:null,
     note:"Sino-Korean (充分). 충 (充) = fill, 분 (分) = portion.",
     example:"A: 시간이 충분해요?\nB: 네, 충분해요. 걱정 마세요.",
     exampleSrc:"A: Is there enough time?\nB: Yes, it's sufficient. Don't worry.",
     funFact:"충분히 (adverb) often appears in encouragement: 충분히 잘하고 있어요 (you're doing well enough). It validates effort without demanding perfection."},

    {type:"teach", trg:"충분히", src:"sufficiently, enough, fully", pos:"adv", gender:null,
     note:"Adverb form of 충분하다. Modifies verbs and adjectives.",
     example:"A: 충분히 쉬었어요?\nB: 네, 충분히 쉬어서 기분이 좋아요.",
     exampleSrc:"A: Did you rest enough?\nB: Yes, I rested enough so I feel good.",
     funFact:"충분히 can soften advice: 충분히 가능해요 (it's fully possible). It reassures without being pushy."},

    {type:"match", pairs:[
      {trg:"완벽하다", src:"perfect"},
      {trg:"정확하다", src:"accurate"},
      {trg:"확실하다", src:"certain"},
      {trg:"충분하다", src:"sufficient"},
      {trg:"제대로", src:"properly"}
    ]},

    {type:"teach", trg:"적당하다", src:"appropriate, moderate, suitable", pos:"adj", gender:null,
     note:"Sino-Korean (適當). Not too much, not too little. Just right.",
     example:"A: 이 가격이 적당해요?\nB: 네, 적당한 가격이에요.",
     exampleSrc:"A: Is this price appropriate?\nB: Yes, it's a reasonable price.",
     funFact:"적당히 (moderately) is a core Korean life philosophy. 적당히 먹다 (eat moderately), 적당히 쉬다 (rest moderately). Balance in everything."},

    {type:"teach", trg:"적당히", src:"moderately, appropriately", pos:"adv", gender:null,
     note:"Adverb form of 적당하다. Doing something in moderation.",
     example:"A: 술을 적당히 마셔야 해요.\nB: 알겠어요, 조심할게요.",
     exampleSrc:"A: You should drink alcohol moderately.\nB: I understand, I'll be careful.",
     funFact:"적당히 can also mean 'half-heartedly': 적당히 하지 마 (don't do it half-heartedly). Tone determines whether it means moderation or laziness."},

    {type:"teach", trg:"위반", src:"violation, breach, infringement", pos:"noun", gender:null,
     note:"Sino-Korean (違反). Breaking rules or laws.",
     example:"A: 교통 위반으로 벌금을 냈어요?\nB: 네, 신호 위반이었어요.",
     exampleSrc:"A: Did you pay a fine for a traffic violation?\nB: Yes, it was a signal violation.",
     funFact:"교통 위반 (traffic violation) is the most common context. Korea uses cameras everywhere to catch 속도 위반 (speeding) and 신호 위반 (running lights)."},

    {type:"teach", trg:"질서", src:"order, discipline", pos:"noun", gender:null,
     note:"Sino-Korean (秩序). Social order and organized behavior.",
     example:"A: 질서를 지켜 주세요.\nB: 네, 줄을 서겠습니다.",
     exampleSrc:"A: Please maintain order.\nB: Okay, I'll stand in line.",
     funFact:"질서 is valued in Korean society. Signs saying 질서를 지킵시다 (let's maintain order) appear at bus stops, train stations, and public venues."},

    {type:"teach", trg:"질", src:"quality", pos:"noun", gender:null,
     note:"Sino-Korean (質). Used as a suffix: 품질 (product quality), 수질 (water quality).",
     example:"A: 이 제품의 질이 좋아요?\nB: 네, 질이 아주 좋아요.",
     exampleSrc:"A: Is this product's quality good?\nB: Yes, the quality is very good.",
     funFact:"질 appears in many compounds: 공기질 (air quality), 수면의 질 (sleep quality), 삶의 질 (quality of life). Always means 'quality of X.'"},

    {type:"mc",
     q:"'적당히'의 반대 개념은?",
     opts:["지나치게","제대로","확실히","완전히"],
     ans:"지나치게",
     hint:"The opposite of doing something in moderation is doing it excessively or too much."}
  ]
};
export default LESSON_8;
