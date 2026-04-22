// Korean B2. Batch 3, Lesson 4: Emotions and Intensity
// Words: 감상하다, 감소, 감소되다, 감수성, 감싸다, 감옥, 감자, 감정적, 감추다, 감히, 갑, 갑작스럽다, 값싸다, 강남, 강당, 강도, 강력하다, 강력히, 강렬하다, 강변

const LESSON_4 = {
  id:"kov2_b2b3_l4", title:"감정과 강렬", icon:"🔥", xp:15, board:true,
  steps:[
    {type:"intro", title:"감정과 강렬",
     desc:"Dive into words about emotional depth, decrease, and intensity. This lesson pairs the 감- emotion family with the 강- strength family.",
     goals:["Master 20 words for emotions, decrease, and intensity","Understand passive patterns with -되다","Use adverbs of intensity naturally"]},

    {type:"teach", trg:"감상하다", src:"to appreciate, to enjoy (art/music)", pos:"verb", gender:null,
     note:"감상 (appreciation) + 하다.\nTo take time to carefully enjoy something artistic.",
     example:"A: 주말에 음악을 감상하며 쉬었어.\nB: 어떤 음악 들었어?",
     exampleSrc:"A: I relaxed over the weekend while appreciating music.\nB: What kind of music did you listen to?",
     funFact:"감상하다 implies deeper engagement than just 듣다 (hear) or 보다 (see). It suggests mindful appreciation."},

    {type:"teach", trg:"감소", src:"decrease, reduction", pos:"noun", gender:null,
     note:"Sino-Korean. 減 (reduce) + 少 (few).\nA drop in quantity or number.",
     example:"A: 올해 출생률이 크게 감소했어요.\nB: 심각한 사회 문제예요.",
     exampleSrc:"A: The birth rate decreased significantly this year.\nB: It is a serious social problem.",
     funFact:"From Hanja 減少. Korea's population decrease has become a major policy issue, frequently appearing in news headlines."},

    {type:"teach", trg:"감소되다", src:"to be decreased, to be reduced", pos:"verb", gender:null,
     note:"감소 + 되다 (passive).\nSomething is reduced without specifying the agent.",
     example:"A: 교통사고가 많이 감소되었어요.\nB: 안전 캠페인의 효과인 것 같아요.",
     exampleSrc:"A: Traffic accidents have been greatly reduced.\nB: It seems to be the effect of the safety campaign.",
     funFact:"The active 감소하다 means 'to decrease.' The passive 감소되다 emphasizes that the decrease happened naturally or externally."},

    {type:"teach", trg:"감수성", src:"sensitivity, emotional receptiveness", pos:"noun", gender:null,
     note:"Sino-Korean. 感 (feel) + 受 (receive) + 性 (nature).\nThe capacity to feel deeply.",
     example:"A: 아이들은 감수성이 풍부해.\nB: 그래서 예술 교육이 중요하지.",
     exampleSrc:"A: Children have rich sensitivity.\nB: That is why arts education is important.",
     funFact:"감수성이 예민하다 (to have keen sensitivity) is often said of artists and poets in Korean culture."},

    {type:"mc",
     q:"'감소'의 반대말은?",
     opts:["증가","감각","감상","감독"],
     ans:"증가",
     hint:"If decrease means going down in number, the opposite means going up."},

    {type:"teach", trg:"감싸다", src:"to wrap, to embrace, to shelter", pos:"verb", gender:null,
     note:"Native Korean compound verb.\nTo physically or emotionally wrap protectively.",
     example:"A: 엄마가 아이를 따뜻하게 감싸 안았어.\nB: 정말 감동적인 장면이었어.",
     exampleSrc:"A: The mother warmly embraced the child.\nB: It was a really touching scene.",
     funFact:"감싸다 can mean physical wrapping (gift) or emotional protection (shielding someone from blame)."},

    {type:"teach", trg:"감옥", src:"prison, jail", pos:"noun", gender:null,
     note:"Sino-Korean. 監 (oversee) + 獄 (prison).\nA place of confinement under watch.",
     example:"A: 그 범인은 감옥에 갔어?\nB: 응, 5년형을 받았어.",
     exampleSrc:"A: Did that criminal go to prison?\nB: Yes, they received a 5-year sentence.",
     funFact:"From Hanja 監獄. The more formal legal term is 교도소 (correctional facility), but 감옥 is used in everyday speech."},

    {type:"teach", trg:"감자", src:"potato", pos:"noun", gender:null,
     note:"Native Korean word.\nA starchy root vegetable.",
     example:"A: 감자 좋아해?\nB: 응, 감자전이 제일 맛있어.",
     exampleSrc:"A: Do you like potatoes?\nB: Yes, potato pancakes are the most delicious.",
     funFact:"Gangwon Province is Korea's potato heartland. 감자전 (potato pancake) and 감자옹심이 (potato dumpling soup) are regional specialties."},

    {type:"teach", trg:"감정적", src:"emotional", pos:"noun", gender:null,
     note:"감정 (emotion) + 적 (-like suffix).\nOf an emotional nature, driven by feelings.",
     example:"A: 너무 감정적으로 반응하지 마.\nB: 알겠어, 침착하게 생각해 볼게.",
     exampleSrc:"A: Do not react too emotionally.\nB: OK, I will try to think calmly.",
     funFact:"Korean uses -적 to create descriptive nouns that function like adjectives: 감정적인 사람 (an emotional person)."},

    {type:"fb",
     s:"그 영화는 너무 {1}이어서 많은 사람이 울었다.",
     a:["감동적"],
     opts:["감동적","감정적","감수성","감각"],
     hint:"This word describes something that moves people emotionally, like a touching scene.",
     sSrc:"The movie was so {1} that many people cried."},

    {type:"teach", trg:"감추다", src:"to hide, to conceal", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo keep something out of sight deliberately.",
     example:"A: 왜 감정을 감추려고 해?\nB: 다른 사람들 앞에서 울고 싶지 않아.",
     exampleSrc:"A: Why are you trying to hide your feelings?\nB: I do not want to cry in front of others.",
     funFact:"감추다 (hide actively) vs. 숨기다 (conceal): subtle difference. 감추다 emphasizes keeping from discovery."},

    {type:"teach", trg:"감히", src:"dare to, have the nerve to", pos:"adv", gender:null,
     note:"Native Korean adverb.\nUsed to express boldness or audacity, often negative.",
     example:"A: 감히 선생님한테 그런 말을 해?\nB: 미안해요, 실수였어요.",
     exampleSrc:"A: How dare you say such a thing to the teacher?\nB: I am sorry, it was a mistake.",
     funFact:"감히 is almost always used in negative or rhetorical contexts: 감히 못 하다 (dare not do), 감히 어떻게 (how dare)."},

    {type:"teach", trg:"갑", src:"case, box; the dominant party", pos:"noun", gender:null,
     note:"Sino-Korean 甲 (first, armor).\nAlso slang for the powerful side in a relationship.",
     example:"A: 이 관계에서 누가 갑이야?\nB: 돈을 주는 쪽이 갑이지.",
     exampleSrc:"A: Who holds the power in this relationship?\nB: The one who pays is the dominant party.",
     funFact:"갑을 관계 (dominant-subordinate relationship) became a major social term describing power imbalances in Korean society."},

    {type:"teach", trg:"갑작스럽다", src:"to be sudden, to be abrupt", pos:"adj", gender:null,
     note:"갑자기 (suddenly) + 스럽다 (has quality of).\nDescribes an unexpected, jarring event.",
     example:"A: 갑작스러운 소식에 깜짝 놀랐어.\nB: 나도 전혀 예상 못 했어.",
     exampleSrc:"A: I was startled by the sudden news.\nB: I did not expect it at all either.",
     funFact:"The -스럽다 suffix adds 'having the quality of': 사랑스럽다 (lovely), 자연스럽다 (natural)."},

    {type:"teach", trg:"값싸다", src:"to be cheap, to be inexpensive", pos:"adj", gender:null,
     note:"값 (price) + 싸다 (cheap).\nA compound describing low cost.",
     example:"A: 이 시장은 물건이 값싸요.\nB: 그래서 사람들이 많이 오나 봐요.",
     exampleSrc:"A: Things are cheap at this market.\nB: That must be why so many people come.",
     funFact:"The opposite is 값비싸다 (expensive). These compound adjectives combine 값 (price) with the quality descriptor."},

    {type:"mc",
     q:"'감히'는 주로 어떤 맥락에서 쓰이나요?",
     opts:["친구와 즐겁게 놀 때","대담하거나 무례한 행동을 비판할 때","음식을 맛있게 먹을 때","조용히 쉴 때"],
     ans:"대담하거나 무례한 행동을 비판할 때",
     hint:"This adverb expresses shock at someone's audacity or boldness."},

    {type:"teach", trg:"강남", src:"Gangnam (south of the river)", pos:"noun", gender:null,
     note:"Sino-Korean. 江 (river) + 南 (south).\nSouth of the Han River in Seoul.",
     example:"A: 강남에서 만날까?\nB: 좋아, 강남역 앞에서 보자.",
     exampleSrc:"A: Shall we meet in Gangnam?\nB: OK, let us meet in front of Gangnam Station.",
     funFact:"Gangnam became world-famous through PSY's 2012 hit. It represents Seoul's wealthy, trendy southern districts."},

    {type:"teach", trg:"강당", src:"auditorium, assembly hall", pos:"noun", gender:null,
     note:"Sino-Korean. 講 (lecture) + 堂 (hall).\nA large room for lectures or gatherings.",
     example:"A: 졸업식이 강당에서 열려요.\nB: 몇 시에 시작해요?",
     exampleSrc:"A: The graduation ceremony is held in the auditorium.\nB: What time does it start?",
     funFact:"From Hanja 講堂. Every Korean school has a 강당 used for assemblies, performances, and sometimes indoor sports."},

    {type:"teach", trg:"강도", src:"intensity; robbery", pos:"noun", gender:null,
     note:"Two meanings: 強度 (strength level)\nor 強盜 (robber). Context determines.",
     example:"A: 운동 강도를 좀 높여 볼까?\nB: 좋아, 오늘은 좀 더 열심히 하자.",
     exampleSrc:"A: Shall we raise the exercise intensity?\nB: OK, let us push harder today.",
     funFact:"Same pronunciation, different Hanja: 강도 as intensity (強度) vs. 강도 as robber (強盜). Very common ambiguity."},

    {type:"teach", trg:"강력하다", src:"to be powerful, to be strong", pos:"adj", gender:null,
     note:"Sino-Korean. 強 (strong) + 力 (power).\nPossessing great force or influence.",
     example:"A: 정부가 강력한 대책을 발표했어요.\nB: 이번에는 효과가 있을까요?",
     exampleSrc:"A: The government announced powerful measures.\nB: Will they be effective this time?",
     funFact:"강력 범죄 (violent crime) uses this word. 강력반 is the violent crimes unit of the police."},

    {type:"teach", trg:"강력히", src:"strongly, powerfully", pos:"adv", gender:null,
     note:"강력 + 히 (adverb suffix).\nWith great force or conviction.",
     example:"A: 우리는 이 정책에 강력히 반대합니다.\nB: 많은 시민들도 같은 생각이에요.",
     exampleSrc:"A: We strongly oppose this policy.\nB: Many citizens share the same opinion.",
     funFact:"Often used in formal protests and official statements: 강력히 요구하다 (demand strongly), 강력히 촉구하다 (urge strongly)."},

    {type:"teach", trg:"강렬하다", src:"to be intense, to be fierce", pos:"adj", gender:null,
     note:"Sino-Korean. 強 (strong) + 烈 (fierce).\nOverpoweringly vivid or powerful.",
     example:"A: 첫인상이 정말 강렬했어.\nB: 어떤 점이 그렇게 인상적이었어?",
     exampleSrc:"A: The first impression was really intense.\nB: What was so impressive?",
     funFact:"강렬한 인상 (intense impression) and 강렬한 색 (intense color) are common collocations. Implies something you cannot ignore."},

    {type:"teach", trg:"강변", src:"riverside, riverbank", pos:"noun", gender:null,
     note:"Sino-Korean. 江 (river) + 邊 (side).\nThe area alongside a river.",
     example:"A: 강변을 따라 자전거 타자.\nB: 좋아, 날씨도 좋고 딱이다.",
     exampleSrc:"A: Let us ride bicycles along the riverside.\nB: Great, the weather is perfect for it.",
     funFact:"Seoul's 한강 강변 (Han River riverside) parks are among the city's most popular leisure areas, with cycling paths stretching over 40km."},

    {type:"match", pairs:[
      {trg:"강력하다", src:"to be powerful"},
      {trg:"강렬하다", src:"to be intense"},
      {trg:"감추다", src:"to hide"},
      {trg:"강변", src:"riverside"}
    ]}
  ]
};
export default LESSON_4;
