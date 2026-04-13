// Korean B2 — Batch 3, Lesson 14: Overcoming and Origins
// Words: 그전, 그제서야, 그제야, 그토록, 그해, 극, 극복, 극복하다, 극작가, 극히, 근거하다, 근교, 근래, 근로, 근본, 근본적, 근원, 근육, 글쎄요, 글씨

const LESSON_14 = {
  id:"kov2_b2b3_l14", title:"극복과 근본", icon:"💪", xp:15, board:true,
  steps:[
    {type:"intro", title:"극복과 근본",
     desc:"Learn vocabulary about overcoming challenges, fundamental origins, and dramatic arts. These words are key for essays, discussions, and expressing determination.",
     goals:["Master 20 words about overcoming, origins, and expression","Understand the 극 (extreme) and 근 (root) word families","Express determination and uncertainty naturally"]},

    {type:"teach", trg:"그전", src:"before that, previously", pos:"noun", gender:null,
     note:"그 (that) + 전 (前, before).\nThe time before a referenced point.",
     example:"A: 그전에는 어디서 살았어?\nB: 부산에서 살았어.",
     exampleSrc:"A: Where did you live before that?\nB: I lived in Busan.",
     funFact:"그전 is the past counterpart of 그후 (after that). Both are common temporal markers in storytelling."},

    {type:"teach", trg:"그제서야", src:"only then, not until that point", pos:"adv", gender:null,
     note:"그제 (at that point) + 서야 (only then).\nEmphasizes that something happened belatedly.",
     example:"A: 설명을 듣고 그제서야 이해했어.\nB: 좀 더 일찍 물어볼걸.",
     exampleSrc:"A: I only understood after hearing the explanation.\nB: I should have asked sooner.",
     funFact:"그제서야 conveys a sense of delayed realization. It implies something should have been understood earlier."},

    {type:"teach", trg:"그제야", src:"only then, not until then", pos:"adv", gender:null,
     note:"그제 (at that point) + 야 (only).\nShorter form of 그제서야 with the same meaning.",
     example:"A: 편지를 받고 그제야 사정을 알았어.\nB: 미리 알려 줬으면 좋았을 텐데.",
     exampleSrc:"A: I only learned the situation after receiving the letter.\nB: It would have been nice if they had told us in advance.",
     funFact:"그제야 and 그제서야 are interchangeable. 그제야 is slightly more concise and common in speech."},

    {type:"teach", trg:"그토록", src:"to that extent, so very much", pos:"adv", gender:null,
     note:"그 (that) + 토록 (to the extent of).\nExpresses a remarkable degree of something.",
     example:"A: 왜 그토록 열심히 하는 거야?\nB: 꿈을 이루고 싶으니까.",
     exampleSrc:"A: Why do you work so hard to that extent?\nB: Because I want to achieve my dream.",
     funFact:"그토록 is more emphatic than 그렇게. It adds emotional weight, often used in literary or dramatic contexts."},

    {type:"teach", trg:"그해", src:"that year", pos:"noun", gender:null,
     note:"그 (that) + 해 (year).\nReferring to a specific year in context.",
     example:"A: 그해 여름은 유난히 더웠어.\nB: 맞아, 기록적인 폭염이었지.",
     exampleSrc:"A: That summer was exceptionally hot.\nB: Right, it was a record heatwave.",
     funFact:"그해 is a storytelling staple. Korean narratives often anchor events with 그해, 그달, 그날 (that year/month/day)."},

    {type:"mc",
     q:"'그제서야 알았다'는 무슨 뜻인가?",
     opts:["그때가 되어서야 비로소 알았다","아주 오래전에 알았다","전혀 몰랐다","곧바로 알았다"],
     ans:"그때가 되어서야 비로소 알았다",
     hint:"This expression emphasizes that understanding came late, only at that specific moment."},

    {type:"teach", trg:"극", src:"drama, play; extreme, pole", pos:"noun", gender:null,
     note:"Sino-Korean. 劇 (drama) or 極 (extreme).\nTwo Hanja with the same pronunciation.",
     example:"A: 이번 극은 어떤 내용이야?\nB: 역사적인 사건을 다룬 극이야.",
     exampleSrc:"A: What is this play about?\nB: It is a drama dealing with a historical event.",
     funFact:"극 as drama: 연극 (theater), 극장 (theater venue). 극 as extreme: 극단 (extremity), 남극 (South Pole)."},

    {type:"teach", trg:"극복", src:"overcoming, conquest", pos:"noun", gender:null,
     note:"Sino-Korean. 克 (overcome) + 服 (subdue).\nThe act of defeating a difficulty.",
     example:"A: 어려움의 극복이 성장의 열쇠야.\nB: 맞아, 포기하면 안 돼.",
     exampleSrc:"A: Overcoming difficulties is the key to growth.\nB: Right, you must not give up.",
     funFact:"From Hanja 克服. A highly motivational word in Korean culture, often used in self-help and education contexts."},

    {type:"teach", trg:"극복하다", src:"to overcome, to conquer", pos:"verb", gender:null,
     note:"극복 (overcoming) + 하다 (to do).\nTo successfully defeat a challenge.",
     example:"A: 두려움을 극복해야 해.\nB: 쉽지 않지만 노력할게.",
     exampleSrc:"A: You need to overcome your fear.\nB: It is not easy but I will try.",
     funFact:"위기를 극복하다 (to overcome a crisis) is one of the most frequently used phrases in Korean news and speeches."},

    {type:"teach", trg:"극작가", src:"playwright, dramatist", pos:"noun", gender:null,
     note:"극 (drama) + 작가 (作家, writer).\nA person who writes plays.",
     example:"A: 이 극작가의 작품을 좋아해?\nB: 응, 대사가 정말 인상적이야.",
     exampleSrc:"A: Do you like this playwright's works?\nB: Yes, the dialogue is really impressive.",
     funFact:"From Hanja 劇作家. Korea has a vibrant theater scene, and 극작가 is a respected profession in the arts."},

    {type:"teach", trg:"극히", src:"extremely, exceedingly", pos:"adv", gender:null,
     note:"극 (extreme) + 히 (adverb suffix).\nTo an extreme degree.",
     example:"A: 이런 경우는 극히 드물어.\nB: 그래서 더 놀라운 거야.",
     exampleSrc:"A: Cases like this are extremely rare.\nB: That is why it is even more surprising.",
     funFact:"극히 is more formal and literary than 매우 or 아주. Often paired with 드물다 (rare) or 소수 (minority)."},

    {type:"fb",
     s:"그는 많은 어려움을 {1}하고 성공했다.",
     a:["극복"],
     opts:["극복","극히","근거","근본"],
     hint:"This word means defeating or conquering challenges that stood in your way.",
     sSrc:"He {1} many difficulties and succeeded."},

    {type:"teach", trg:"근거하다", src:"to be based on, to be grounded in", pos:"verb", gender:null,
     note:"근거 (basis) + 하다 (to do).\nTo have a foundation in evidence or facts.",
     example:"A: 이 주장은 무엇에 근거하고 있어?\nB: 최근 연구 결과에 근거하고 있어.",
     exampleSrc:"A: What is this claim based on?\nB: It is based on recent research findings.",
     funFact:"From Hanja 根據. 근거 없는 (baseless/unfounded) is a common phrase for dismissing unsubstantiated claims."},

    {type:"teach", trg:"근교", src:"outskirts, suburbs (near city)", pos:"noun", gender:null,
     note:"Sino-Korean. 近 (near) + 郊 (outskirts).\nAreas just outside a city center.",
     example:"A: 서울 근교에 좋은 캠핑장이 있어.\nB: 차로 얼마나 걸려?",
     exampleSrc:"A: There is a good campsite in the Seoul suburbs.\nB: How long does it take by car?",
     funFact:"From Hanja 近郊. 근교 여행 (suburban trip) is popular among Seoul residents for weekend getaways."},

    {type:"teach", trg:"근래", src:"recently, of late", pos:"noun", gender:null,
     note:"Sino-Korean. 近 (near) + 來 (come).\nThe recent past up to the present.",
     example:"A: 근래에 좋은 책을 읽었어?\nB: 응, 지난주에 재미있는 소설을 읽었어.",
     exampleSrc:"A: Have you read any good books recently?\nB: Yes, I read an interesting novel last week.",
     funFact:"From Hanja 近來. More formal than 요즘 (these days). Used in writing and formal speech."},

    {type:"teach", trg:"근로", src:"labor, work (formal)", pos:"noun", gender:null,
     note:"Sino-Korean. 勤 (diligent) + 勞 (labor).\nWork or employment in a formal sense.",
     example:"A: 근로 조건이 개선돼야 해.\nB: 맞아, 특히 임금 문제가 심각해.",
     exampleSrc:"A: Working conditions need to be improved.\nB: Right, especially the wage issue is serious.",
     funFact:"From Hanja 勤勞. 근로자 (worker), 근로 기준법 (Labor Standards Act). 근로자의 날 (Labor Day) is May 1."},

    {type:"teach", trg:"근본", src:"foundation, root, basis", pos:"noun", gender:null,
     note:"Sino-Korean. 根 (root) + 本 (origin).\nThe fundamental core of something.",
     example:"A: 문제의 근본 원인을 찾아야 해.\nB: 겉만 고치면 또 반복될 거야.",
     exampleSrc:"A: We need to find the root cause of the problem.\nB: If we only fix the surface, it will repeat.",
     funFact:"From Hanja 根本. 근본적으로 (fundamentally) is a key phrase in academic and political discourse."},

    {type:"teach", trg:"근본적", src:"fundamental, basic", pos:"noun", gender:null,
     note:"근본 (root) + 적 (的, suffix).\nRelating to the most basic or essential aspect.",
     example:"A: 근본적인 변화가 필요해.\nB: 동의해, 작은 수정으로는 부족해.",
     exampleSrc:"A: A fundamental change is needed.\nB: I agree, minor fixes are not enough.",
     funFact:"근본적 질문 (fundamental question) and 근본적 해결책 (fundamental solution) are TOPIK essay favorites."},

    {type:"mc",
     q:"'근본'과 의미가 가장 비슷한 것은?",
     opts:["뿌리","결과","표면","끝"],
     ans:"뿌리",
     hint:"This word describes the deepest foundation, like the roots of a tree that support everything above."},

    {type:"teach", trg:"근원", src:"origin, source, wellspring", pos:"noun", gender:null,
     note:"Sino-Korean. 根 (root) + 源 (spring/source).\nWhere something fundamentally comes from.",
     example:"A: 행복의 근원은 뭘까?\nB: 사람마다 다르겠지만, 관계가 중요하다고 생각해.",
     exampleSrc:"A: What is the source of happiness?\nB: It differs for everyone, but I think relationships are important.",
     funFact:"From Hanja 根源. 근원 is deeper and more philosophical than 원인 (cause). It implies the ultimate source."},

    {type:"teach", trg:"근육", src:"muscle", pos:"noun", gender:null,
     note:"Sino-Korean. 筋 (sinew) + 肉 (flesh).\nBody tissue responsible for movement.",
     example:"A: 운동하면 근육이 커져.\nB: 단백질도 충분히 섭취해야 해.",
     exampleSrc:"A: If you exercise, your muscles grow.\nB: You also need to consume enough protein.",
     funFact:"From Hanja 筋肉. 근육통 (muscle pain) after exercise is called DOMS in English. Koreans say 알이 배겼다 colloquially."},

    {type:"teach", trg:"글쎄요", src:"well, hmm, I am not sure", pos:"intj", gender:null,
     note:"Native Korean interjection.\nExpresses hesitation or uncertainty.",
     example:"A: 내일 날씨가 좋을까?\nB: 글쎄요, 예보를 확인해 봐야 알겠어요.",
     exampleSrc:"A: Will the weather be nice tomorrow?\nB: Hmm, we would need to check the forecast to know.",
     funFact:"글쎄 (informal) vs. 글쎄요 (polite). Both express the speaker's uncertainty, buying time to think."},

    {type:"teach", trg:"글씨", src:"handwriting, letters (written)", pos:"noun", gender:null,
     note:"글 (writing) + 씨 (seed/form).\nThe visual form of written characters.",
     example:"A: 글씨를 예쁘게 쓰네.\nB: 어릴 때 서예를 배웠거든.",
     exampleSrc:"A: You write beautifully.\nB: I learned calligraphy when I was young.",
     funFact:"Good 글씨 is highly valued in Korean culture. Parents often send children to 서예 (calligraphy) classes."},

    {type:"match", pairs:[
      {trg:"극복", src:"overcoming"},
      {trg:"근육", src:"muscle"},
      {trg:"글쎄요", src:"well, hmm"},
      {trg:"근원", src:"origin, source"}
    ]}
  ]
};
export default LESSON_14;
