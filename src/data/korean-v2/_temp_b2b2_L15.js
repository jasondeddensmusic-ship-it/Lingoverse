// Korean B2. Batch 2, Lesson 15: Scale and Conversation
// Words: 대형, 대화하다, 댐, 더더욱, 더러워지다, 더럽다, 더불다, 더욱, 더욱더, 더욱이, 더위, 덕, 덜다, 덧붙이다, 덩어리, 덮이다, 데려가다, 데려오다, 데우다, 데이트

const LESSON_15 = {
  id:"kov2_b2b2_l15", title:"더위와 덕분", icon:"☀️", xp:15, board:true,
  steps:[
    {type:"intro", title:"더위와 덕분",
     desc:"Learn words about heat, gratitude, and emphasis. These words add intensity and emotional color to your Korean expression.",
     goals:["Master 20 words about heat, gratitude, and emphasis","Understand Korean intensifier adverbs","Learn causative verb pairs for temperature and movement"]},

    {type:"teach", trg:"대형", src:"large-size, large-scale", pos:"noun", gender:null,
     note:"Sino-Korean. 大 (big) + 形 (shape/type).\nSomething of large dimensions or impact.",
     example:"A: 대형 마트에서 장을 봤어요.\nB: 뭘 많이 샀어요?",
     exampleSrc:"A: I did grocery shopping at a large mart.\nB: Did you buy a lot?",
     funFact:"대형 마트 (supermarket), 대형 사고 (major accident), 대형 병원 (large hospital). 대형 is everywhere."},

    {type:"teach", trg:"대화하다", src:"to converse, to have a dialogue", pos:"verb", gender:null,
     note:"대화 (conversation) + 하다.\nTo engage in spoken exchange with someone.",
     example:"A: 서로 대화하면 해결할 수 있어요.\nB: 맞아요, 소통이 중요하죠.",
     exampleSrc:"A: If we talk to each other, we can solve it.\nB: Right, communication is important.",
     funFact:"대화 is Sino-Korean (對話). 이야기하다 is more casual. 대화 implies more structured, meaningful exchange."},

    {type:"teach", trg:"댐", src:"dam", pos:"noun", gender:null,
     note:"Borrowed from English 'dam.'\nA barrier built across a river.",
     example:"A: 이 댐은 언제 건설되었어요?\nB: 1970년대에 지어졌어요.",
     exampleSrc:"A: When was this dam built?\nB: It was built in the 1970s.",
     funFact:"Korea's largest dam is 소양강댐 (Soyang River Dam). English loanwords for infrastructure are common in Korean."},

    {type:"teach", trg:"더더욱", src:"all the more, even more so", pos:"adv", gender:null,
     note:"더 (more) + 더욱 (even more).\nTriple emphasis on increasing degree.",
     example:"A: 경험이 많으면 더더욱 좋아요.\nB: 신입보다 경력직을 선호하는 이유죠.",
     exampleSrc:"A: If you have a lot of experience, all the more better.\nB: That is why they prefer experienced hires over new graduates.",
     funFact:"Korean stacks emphasis: 더 (more) < 더욱 (even more) < 더더욱 (all the more). Three levels of intensity."},

    {type:"teach", trg:"더러워지다", src:"to become dirty", pos:"verb", gender:null,
     note:"더럽다 (dirty) + 어지다 (become).\nThe process of getting dirty over time.",
     example:"A: 옷이 금방 더러워졌어요.\nB: 아이들이 밖에서 놀아서 그래요.",
     exampleSrc:"A: The clothes got dirty quickly.\nB: That is because the kids played outside.",
     funFact:"더러워지다 describes a change of state. Korean loves these -어지다 'become' verbs for gradual change."},

    {type:"teach", trg:"더럽다", src:"to be dirty, filthy", pos:"adj", gender:null,
     note:"Native Korean. Physically unclean\nor morally corrupt.",
     example:"A: 이 방이 너무 더러워요.\nB: 청소 좀 합시다.",
     exampleSrc:"A: This room is too dirty.\nB: Let us do some cleaning.",
     funFact:"더럽다 also means 'foul' in personality: 성격이 더럽다 (has a terrible personality). Strong negative slang."},

    {type:"mc",
     q:"'더더욱'은 어떤 뜻인가요?",
     opts:["훨씬 더, 한층 더","조금만 더","거의 같게","전혀 다르게"],
     ans:"훨씬 더, 한층 더",
     hint:"A triple-stacked emphasis meaning 'all the more' or 'even more so than more.'"},

    {type:"teach", trg:"더불다", src:"to be together with, to accompany", pos:"verb", gender:null,
     note:"Native Korean (archaic form).\n더불어 (together with) is the common adverb form.",
     example:"A: 가족과 더불어 행복하게 살고 싶어요.\nB: 가장 중요한 소망이죠.",
     exampleSrc:"A: I want to live happily together with my family.\nB: That is the most important wish.",
     funFact:"더불어 살다 (live together in harmony) is a major Korean social value. 더불어민주당 is a political party name."},

    {type:"teach", trg:"더욱", src:"even more, all the more", pos:"adv", gender:null,
     note:"Native Korean intensifier.\nStronger than 더 (more).",
     example:"A: 연습하면 더욱 나아질 거예요.\nB: 열심히 할게요.",
     exampleSrc:"A: If you practice, it will improve even more.\nB: I will work hard.",
     funFact:"더욱 is slightly literary. 더 is casual. 더욱이 adds 'moreover.' Three related but distinct adverbs."},

    {type:"teach", trg:"더욱더", src:"still more, increasingly", pos:"adv", gender:null,
     note:"더욱 (even more) + 더 (more).\nDoubled for extra emphasis.",
     example:"A: 노력할수록 더욱더 잘할 수 있어요.\nB: 포기하지 않을게요.",
     exampleSrc:"A: The more you try, the better you can do.\nB: I will not give up.",
     funFact:"더욱더 is the middle of the intensity scale between 더욱 and 더더욱. Korean loves gradual intensification."},

    {type:"teach", trg:"더욱이", src:"moreover, furthermore", pos:"adv", gender:null,
     note:"더욱 (even more) + 이 (addition).\nAdds an additional point to the argument.",
     example:"A: 비가 오고, 더욱이 바람도 세요.\nB: 오늘은 집에 있는 게 좋겠어요.",
     exampleSrc:"A: It is raining, and moreover the wind is strong.\nB: We should stay home today.",
     funFact:"더욱이 functions like 게다가 (besides) but is more formal. Used in essays and formal speeches."},

    {type:"teach", trg:"더위", src:"heat, hot weather", pos:"noun", gender:null,
     note:"덥다 (hot) + 이 (nominalization).\nThe condition of hot weather.",
     example:"A: 올해 더위가 심하네요.\nB: 역대 최고 기온이래요.",
     exampleSrc:"A: The heat is severe this year.\nB: They say it is a record-high temperature.",
     funFact:"한여름 더위 (midsummer heat) and 무더위 (sweltering heat) are common compounds. 추위 (cold) is the opposite."},

    {type:"fb",
     s:"올해 {1}가 정말 심해요.",
     a:["더위"],
     opts:["더위","더럽다","더불다","덕"],
     hint:"The noun form of 'hot weather.' The condition of extreme summer heat.",
     sSrc:"The {1} is really severe this year."},

    {type:"teach", trg:"덕", src:"virtue; thanks to, owing to", pos:"noun", gender:null,
     note:"Sino-Korean. 德 (virtue/favor).\nA positive quality, or 'thanks to' someone's help.",
     example:"A: 선생님 덕분에 합격했어요.\nB: 아니에요, 네가 열심히 한 덕이야.",
     exampleSrc:"A: I passed thanks to the teacher.\nB: No, it is thanks to your hard work.",
     funFact:"덕분에 (thanks to) is always positive. 탓에 (because of) is negative. Both mean 'because of' but different tones."},

    {type:"teach", trg:"덜다", src:"to reduce, to lessen, to relieve", pos:"verb", gender:null,
     note:"Native Korean. To make something less\nor to take a portion away.",
     example:"A: 짐을 좀 덜어 줄까?\nB: 고마워, 좀 무거웠어.",
     exampleSrc:"A: Should I lighten your load?\nB: Thanks, it was a bit heavy.",
     funFact:"걱정을 덜다 (reduce worries), 부담을 덜다 (lighten the burden). 덜다 is both physical and emotional."},

    {type:"teach", trg:"덧붙이다", src:"to add, to append, to supplement", pos:"verb", gender:null,
     note:"덧 (additionally) + 붙이다 (attach).\nTo attach something extra to what exists.",
     example:"A: 한 가지 덧붙이겠습니다.\nB: 네, 말씀하세요.",
     exampleSrc:"A: I would like to add one thing.\nB: Yes, please go ahead.",
     funFact:"덧붙이다 is very formal. It appears in presentations, academic papers, and official statements."},

    {type:"teach", trg:"덩어리", src:"lump, chunk, mass", pos:"noun", gender:null,
     note:"Native Korean. A big, irregular piece\nof something solid.",
     example:"A: 고기를 큰 덩어리로 잘라 주세요.\nB: 얼마나 크게요?",
     exampleSrc:"A: Please cut the meat into large chunks.\nB: How big?",
     funFact:"덩어리 is figurative too: 감정 덩어리 (ball of emotion), 에너지 덩어리 (bundle of energy). Very expressive."},

    {type:"teach", trg:"덮이다", src:"to be covered", pos:"verb", gender:null,
     note:"Passive of 덮다 (to cover).\nSomething becomes covered by something else.",
     example:"A: 산이 눈으로 덮여 있어요.\nB: 겨울 경치가 아름답네요.",
     exampleSrc:"A: The mountain is covered in snow.\nB: The winter scenery is beautiful.",
     funFact:"덮이다 vs 덮다: the passive is used far more often in descriptions of nature and weather."},

    {type:"mc",
     q:"'덕분에'와 '탓에'의 차이는?",
     opts:["차이가 없다","덕분에는 긍정적, 탓에는 부정적","둘 다 긍정적","둘 다 부정적"],
     ans:"덕분에는 긍정적, 탓에는 부정적",
     hint:"One is used when the cause is positive (thanks to), the other when it is negative (because of)."},

    {type:"teach", trg:"데려가다", src:"to take (a person) somewhere", pos:"verb", gender:null,
     note:"데리다 (to have with) + 어 + 가다 (go).\nTo bring a person along when going.",
     example:"A: 아이를 병원에 데려가야 해요.\nB: 제가 차로 데려다줄게요.",
     exampleSrc:"A: I need to take the child to the hospital.\nB: I will drive you there.",
     funFact:"데려가다 (take away from speaker) vs 데려오다 (bring toward speaker). Direction matters."},

    {type:"teach", trg:"데려오다", src:"to bring (a person) here", pos:"verb", gender:null,
     note:"데리다 (to have with) + 어 + 오다 (come).\nTo bring a person along when coming.",
     example:"A: 친구를 데려와도 돼요?\nB: 물론이요, 환영합니다.",
     exampleSrc:"A: Can I bring a friend?\nB: Of course, they are welcome.",
     funFact:"데려오다/데려가다 are for people. 가져오다/가져가다 are for objects. Using the wrong pair sounds unnatural."},

    {type:"teach", trg:"데우다", src:"to warm up, to heat", pos:"verb", gender:null,
     note:"Native Korean. To raise the temperature\nof food or a space.",
     example:"A: 음식을 데워 줄까요?\nB: 네, 전자레인지에 데워 주세요.",
     exampleSrc:"A: Should I warm up the food?\nB: Yes, please heat it in the microwave.",
     funFact:"데우다 is for gentle warming. 끓이다 (boil) is for strong heating. Koreans microwave most leftover 반찬."},

    {type:"teach", trg:"데이트", src:"date (romantic outing)", pos:"noun", gender:null,
     note:"Borrowed from English 'date.'\nA romantic meeting between partners.",
     example:"A: 오늘 데이트 어디서 해요?\nB: 남산타워에 갈 거예요.",
     exampleSrc:"A: Where are you going on your date today?\nB: We are going to Namsan Tower.",
     funFact:"Korean date culture includes matching outfits (커플룩), anniversary counting from day 1, and photo booths."},

    {type:"match", pairs:[
      {trg:"더위", src:"heat"},
      {trg:"덕", src:"virtue/thanks to"},
      {trg:"덮이다", src:"to be covered"},
      {trg:"데우다", src:"to warm up"},
      {trg:"데이트", src:"date"}
    ]},

    {type:"fb",
     s:"선생님 {1}에 합격했어요.",
     a:["덕분"],
     opts:["덕분","탓","더위","덩어리"],
     hint:"Thanks to the positive influence of someone. A word expressing gratitude for help received.",
     sSrc:"I passed {1} the teacher."}
  ]
};
export default LESSON_15;
