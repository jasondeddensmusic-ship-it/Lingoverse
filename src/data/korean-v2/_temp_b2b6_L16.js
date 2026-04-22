// Korean B2. Batch 6, Lesson 16: Women and History
// Words: 여가, 여간, 여건, 여겨지다, 여고생, 여관, 여군, 여기다, 여대생, 여럿, 여름철, 여왕, 여우, 여인, 여전하다, 여전히, 여직원, 여쭈다, 여행사, 역사상

const LESSON_16 = {
  id:"kov2_b2b6_l16", title:"여가와 역사", icon:"👑", xp:15, board:true,
  steps:[
    {type:"intro", title:"여가와 역사",
     desc:"Learn vocabulary about leisure, women, lodging, and history. Many words use the 여 (woman/surplus/travel) root in different Sino-Korean compounds.",
     goals:["Master 20 words about leisure, gender, and historical context","Understand 여 compounds and their different hanja origins","Use formal vocabulary for conditions and perceptions"]},

    {type:"teach", trg:"여가", src:"leisure, free time", pos:"noun", gender:null,
     note:"Sino-Korean. 餘 (surplus) + 暇 (spare time).\nTime available for relaxation.",
     example:"A: 여가 시간에 뭐 해요?\nB: 주로 책을 읽어요.",
     exampleSrc:"A: What do you do in your free time?\nB: I mostly read books.",
     funFact:"Korean work culture is shifting toward 여가 생활 (leisure life). The 52-hour workweek law aims to increase free time."},

    {type:"teach", trg:"여간", src:"not ordinary (used with negatives)", pos:"adv", gender:null,
     note:"Sino-Korean. 如干 (such degree).\nAlways used with negatives to mean 'very/extremely.'",
     example:"A: 이 문제가 여간 어려운 게 아니야.\nB: 그래, 나도 못 풀겠어.",
     exampleSrc:"A: This problem is no ordinary difficulty.\nB: Right, I cannot solve it either.",
     funFact:"여간...이/가 아니다 is a set pattern. It always means 'it is no ordinary...' expressing that something is extreme."},

    {type:"teach", trg:"여건", src:"conditions, circumstances", pos:"noun", gender:null,
     note:"Sino-Korean. 與 (give) + 件 (matter).\nThe surrounding conditions for something.",
     example:"A: 여건이 되면 유학 가고 싶어.\nB: 충분히 가능할 거야.",
     exampleSrc:"A: If conditions allow, I want to study abroad.\nB: It will definitely be possible.",
     funFact:"여건이 안 된다 (conditions do not allow) is a polite Korean way to decline without saying no directly."},

    {type:"teach", trg:"여겨지다", src:"to be considered, to be regarded as", pos:"verb", gender:null,
     note:"여기다 (to consider) + -어지다 (passive).\nBeing perceived or thought of in a certain way.",
     example:"A: 그는 전문가로 여겨지고 있어.\nB: 실력이 좋으니까.",
     exampleSrc:"A: He is regarded as an expert.\nB: Because his skills are good.",
     funFact:"여겨지다 is the passive of 여기다. Korean academic writing uses it for objective statements."},

    {type:"mc",
     q:"'여간 추운 게 아니다'의 뜻은?",
     opts:["매우 춥다","조금 춥다","안 춥다","보통 춥다"],
     ans:"매우 춥다",
     hint:"The pattern 여간...이 아니다 always means 'it is extremely...' with emphasis through double negation."},

    {type:"teach", trg:"여관", src:"inn, budget hotel", pos:"noun", gender:null,
     note:"Sino-Korean. 旅 (travel) + 館 (building).\nA simple, affordable lodging.",
     example:"A: 이 근처에 여관이 있을까?\nB: 길 건너편에 하나 있어.",
     exampleSrc:"A: Is there an inn nearby?\nB: There is one across the street.",
     funFact:"여관 are being replaced by 모텔 and 게스트하우스, but they remain an affordable option in rural Korea."},

    {type:"teach", trg:"여기다", src:"to consider, to regard as", pos:"verb", gender:null,
     note:"Native Korean verb.\nForming an opinion or judgment about something.",
     example:"A: 그것을 중요하게 여기고 있어요.\nB: 맞아요, 정말 중요해요.",
     exampleSrc:"A: I consider it important.\nB: Right, it really is important.",
     funFact:"소중히 여기다 (to cherish) and 대수롭지 않게 여기다 (to think nothing of) are common collocations."},

    {type:"teach", trg:"여럿", src:"several, a number of (people)", pos:"noun", gender:null,
     note:"여러 (several) + 것/이 (thing/person).\nMultiple people or things.",
     example:"A: 여럿이 함께 가면 더 재미있어.\nB: 맞아, 많을수록 좋지.",
     exampleSrc:"A: It is more fun if several of us go together.\nB: Right, the more the merrier.",
     funFact:"여럿이 can function as both a noun (several people) and an adverb (in a group). Context determines the usage."},

    {type:"teach", trg:"여름철", src:"summertime, summer season", pos:"noun", gender:null,
     note:"여름 (summer) + 철 (season).\nThe summer period as a distinct season.",
     example:"A: 여름철에는 식중독 조심해야 해.\nB: 맞아, 음식 보관에 신경 써야지.",
     exampleSrc:"A: You need to be careful about food poisoning in summertime.\nB: Right, we need to pay attention to food storage.",
     funFact:"Korean 여름철 runs June through August. The monsoon season (장마철) overlaps, bringing heavy rain."},

    {type:"teach", trg:"여왕", src:"queen", pos:"noun", gender:null,
     note:"Sino-Korean. 女 (woman) + 王 (king).\nA female monarch.",
     example:"A: 선덕여왕에 대해 알아?\nB: 신라 최초의 여왕이지.",
     exampleSrc:"A: Do you know about Queen Seondeok?\nB: She was the first queen of Silla.",
     funFact:"Queen Seondeok of Silla (632-647) was one of history's few East Asian female rulers, featured in Korean dramas."},

    {type:"teach", trg:"여우", src:"fox", pos:"noun", gender:null,
     note:"Native Korean noun.\nThe fox animal, also used figuratively.",
     example:"A: 여우가 정말 영리하대.\nB: 동화에서도 항상 똑똑하잖아.",
     exampleSrc:"A: They say foxes are really clever.\nB: In fairy tales they are always smart too.",
     funFact:"In Korean culture, 여우 같다 (like a fox) describes a sly, cunning woman. The nine-tailed fox (구미호) is a famous myth."},

    {type:"teach", trg:"여전하다", src:"to be the same as before, to remain unchanged", pos:"adj", gender:null,
     note:"Sino-Korean. 如前 (like before) + 하다.\nRemaining in the same state without change.",
     example:"A: 10년이 지났는데 여전하네.\nB: 너도 하나도 안 변했어.",
     exampleSrc:"A: Ten years have passed but you are the same.\nB: You have not changed at all either.",
     funFact:"여전하다 and its adverb form 여전히 are among the most-used words in Korean love songs and dramas."},

    {type:"teach", trg:"여전히", src:"still, as before", pos:"adv", gender:null,
     note:"여전하다 + -히 (adverb suffix).\nContinuing to be the same, without change.",
     example:"A: 여전히 그 일을 하고 있어?\nB: 응, 아직 같은 회사야.",
     exampleSrc:"A: Are you still doing that work?\nB: Yes, still at the same company.",
     funFact:"여전히 appears in countless K-pop lyrics: 여전히 널 사랑해 (I still love you) is a classic ballad phrase."},

    {type:"fb",
     s:"5년이 지났지만 그 카페는 {1} 그 자리에 있다.",
     a:["여전히"],
     opts:["여전히","여간","여가","여럿"],
     hint:"An adverb meaning 'still, as before.' The cafe has not changed or moved.",
     sSrc:"Five years have passed, but the cafe is {1} in the same place."},

    {type:"teach", trg:"여쭈다", src:"to ask (humble/honorific)", pos:"verb", gender:null,
     note:"Humble form of 묻다/물어보다 (to ask).\nUsed when asking a superior or elder.",
     example:"A: 한 가지 여쭤 봐도 될까요?\nB: 네, 말씀하세요.",
     exampleSrc:"A: May I ask you something?\nB: Yes, please go ahead.",
     funFact:"여쭈다/여쭤보다 is essential Korean business language. Using 묻다 instead to a superior sounds too casual."},

    {type:"teach", trg:"여행사", src:"travel agency", pos:"noun", gender:null,
     note:"Sino-Korean. 旅行 (travel) + 社 (company).\nA company that arranges travel services.",
     example:"A: 여행사를 통해서 예약했어?\nB: 아니, 직접 인터넷으로 했어.",
     exampleSrc:"A: Did you book through a travel agency?\nB: No, I did it directly online.",
     funFact:"Korean 여행사 face competition from online booking, but group tours (단체 여행) still rely on agencies."},

    {type:"teach", trg:"역사상", src:"in history, historically", pos:"noun", gender:null,
     note:"Sino-Korean. 歷史 (history) + 上 (upon).\nThroughout the course of history.",
     example:"A: 역사상 가장 위대한 발명은 뭘까?\nB: 인쇄술 아닐까?",
     exampleSrc:"A: What is the greatest invention in history?\nB: Could it be the printing press?",
     funFact:"Korea takes pride in 역사상 achievements like metal movable type (1377), predating Gutenberg by decades."},

    {type:"teach", trg:"역사학", src:"history (academic discipline)", pos:"noun", gender:null,
     note:"Sino-Korean. 歷史 (history) + 學 (study).\nThe scholarly study of past events.",
     example:"A: 대학에서 역사학을 전공했어.\nB: 어느 시대를 주로 공부했어?",
     exampleSrc:"A: I majored in history at university.\nB: Which era did you mainly study?",
     funFact:"Korean 역사학 departments emphasize 한국사 (Korean history). The national history exam (한국사능력검정) is widely taken."},

    {type:"mc",
     q:"윗사람에게 정중하게 질문할 때 쓰는 말은?",
     opts:["궁금하다","여쭤보다","물어보다","질문하다"],
     ans:"여쭤보다",
     hint:"The humble form of asking, used to show respect when speaking to a superior or elder."},

    {type:"match", pairs:[
      {trg:"여가", src:"leisure"},
      {trg:"여전히", src:"still, as before"},
      {trg:"여기다", src:"to consider"},
      {trg:"역사상", src:"in history"}
    ]}
  ]
};

export default LESSON_16;
