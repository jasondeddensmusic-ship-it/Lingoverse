// Korean B2 — Batch 3, Lesson 6: Public Life and Performance
// Words: 골고루, 골목길, 골짜기, 골치, 골프, 골프장, 곰, 공개, 공개하다, 공격, 공격하다, 공공, 공군, 공급, 공식, 공식적, 공업, 공연되다, 공연장, 공연하다

const LESSON_6 = {
  id:"kov2_b2b3_l6", title:"공공의 무대", icon:"🎭", xp:15, board:true,
  steps:[
    {type:"intro", title:"공공의 무대",
     desc:"Learn vocabulary for public life, performance venues, and formal matters. These words appear frequently in news, official documents, and daily conversation.",
     goals:["Master 20 words related to public affairs, sports, and performance","Understand Sino-Korean compounds with 공 (public/official)","Use formal and informal registers naturally"]},

    {type:"teach", trg:"골고루", src:"evenly, equally", pos:"adv", gender:null,
     note:"Native Korean word.\nDescribes distributing something uniformly.",
     example:"A: 영양소를 골고루 섭취해야 해.\nB: 알겠어, 채소도 더 먹을게.",
     exampleSrc:"A: You need to consume nutrients evenly.\nB: Got it, I will eat more vegetables too.",
     funFact:"Often used by Korean parents at dinner: 골고루 먹어! (Eat everything evenly!) is a classic mealtime phrase."},

    {type:"teach", trg:"골목길", src:"alley, narrow lane", pos:"noun", gender:null,
     note:"골목 (alley) + 길 (road).\nA narrow path between buildings.",
     example:"A: 이 골목길에 맛집이 많아.\nB: 정말? 한번 가 보자.",
     exampleSrc:"A: There are many good restaurants in this alley.\nB: Really? Let us go check it out.",
     funFact:"Seoul's famous 골목길 neighborhoods like Ikseon-dong have become trendy spots blending old hanok houses with modern cafes."},

    {type:"teach", trg:"골짜기", src:"valley, gorge", pos:"noun", gender:null,
     note:"Native Korean word.\nA deep, narrow valley between mountains.",
     example:"A: 이 골짜기에 계곡물이 흐르고 있어.\nB: 여름에 수영하기 좋겠다.",
     exampleSrc:"A: Stream water flows through this valley.\nB: It would be great for swimming in summer.",
     funFact:"Korea's mountainous terrain (70% mountains) means valleys are everywhere, shaping settlement patterns for millennia."},

    {type:"teach", trg:"골치", src:"headache, trouble (figurative)", pos:"noun", gender:null,
     note:"Native Korean word.\nUsed figuratively for worry or trouble.",
     example:"A: 이 문제가 정말 골치 아파.\nB: 같이 생각해 보자.",
     exampleSrc:"A: This problem is a real headache.\nB: Let us think about it together.",
     funFact:"골치 아프다 (lit. head hurts) is the standard way to say something is troublesome. 골치거리 means a source of trouble."},

    {type:"mc",
     q:"'골고루'와 의미가 가장 비슷한 것은?",
     opts:["고르게","빠르게","조용히","갑자기"],
     ans:"고르게",
     hint:"Think about distributing something so each part gets the same amount."},

    {type:"teach", trg:"골프", src:"golf", pos:"noun", gender:null,
     note:"Loanword from English 'golf.'\nA popular sport among Korean business professionals.",
     example:"A: 주말에 골프 치러 갈래?\nB: 좋아, 어디서 칠까?",
     exampleSrc:"A: Do you want to go play golf this weekend?\nB: Sure, where shall we play?",
     funFact:"Korea is one of the world's largest golf markets. Korean golfers dominate women's professional golf globally."},

    {type:"teach", trg:"골프장", src:"golf course", pos:"noun", gender:null,
     note:"골프 (golf) + 장 (場, place).\nA venue for playing golf.",
     example:"A: 이 골프장은 경치가 정말 좋다.\nB: 맞아, 산으로 둘러싸여 있어서.",
     exampleSrc:"A: This golf course has a really nice view.\nB: Right, because it is surrounded by mountains.",
     funFact:"Many Korean golf courses are built on mountainsides due to limited flat land, giving them dramatic scenery."},

    {type:"teach", trg:"곰", src:"bear", pos:"noun", gender:null,
     note:"Native Korean word.\nThe bear animal. Also used figuratively for a slow person.",
     example:"A: 한국 신화에 곰이 나와?\nB: 응, 단군 신화에서 곰이 사람이 됐어.",
     exampleSrc:"A: Does a bear appear in Korean mythology?\nB: Yes, in the Dangun myth a bear became human.",
     funFact:"In the Dangun creation myth, a bear endured 100 days in a cave eating garlic and mugwort to become the first Korean woman."},

    {type:"teach", trg:"공개", src:"disclosure, making public", pos:"noun", gender:null,
     note:"Sino-Korean. 公 (public) + 開 (open).\nThe act of revealing information to the public.",
     example:"A: 신제품 공개가 내일이래.\nB: 기대되는데! 꼭 봐야겠다.",
     exampleSrc:"A: The new product reveal is tomorrow.\nB: I am excited! I must watch it.",
     funFact:"From Hanja 公開. K-pop agencies use 공개 for music video reveals, creating huge anticipation events."},

    {type:"fb",
     s:"회사는 새로운 정보를 {1}하기로 결정했다.",
     a:["공개"],
     opts:["공개","공격","공급","공식"],
     hint:"This word means making something known to the public, a disclosure.",
     sSrc:"The company decided to {1} new information."},

    {type:"teach", trg:"공개하다", src:"to disclose, to make public", pos:"verb", gender:null,
     note:"공개 (disclosure) + 하다 (to do).\nTo reveal something that was private.",
     example:"A: 정부가 자료를 공개했어.\nB: 드디어! 오래 기다렸는데.",
     exampleSrc:"A: The government disclosed the documents.\nB: Finally! We waited a long time.",
     funFact:"공개하다 vs. 발표하다: 공개 emphasizes making hidden things visible, while 발표 emphasizes formal announcement."},

    {type:"teach", trg:"공격", src:"attack, offense", pos:"noun", gender:null,
     note:"Sino-Korean. 攻 (attack) + 擊 (strike).\nUsed for military, sports, and verbal attacks.",
     example:"A: 상대 팀의 공격이 거세.\nB: 우리 수비를 강화해야 해.",
     exampleSrc:"A: The opposing team's offense is fierce.\nB: We need to strengthen our defense.",
     funFact:"From Hanja 攻擊. In gaming culture, 공격력 (attack power) is one of the most common stats discussed."},

    {type:"teach", trg:"공격하다", src:"to attack, to assault", pos:"verb", gender:null,
     note:"공격 (attack) + 하다 (to do).\nTo launch an offensive action.",
     example:"A: 언론이 정치인을 공격하고 있어.\nB: 비판과 공격은 달라.",
     exampleSrc:"A: The media is attacking the politician.\nB: Criticism and attack are different.",
     funFact:"In Korean esports commentary, 공격하다 is used constantly during StarCraft and League of Legends matches."},

    {type:"teach", trg:"공공", src:"public, communal", pos:"noun", gender:null,
     note:"Sino-Korean. 公 (public) + 公 (public).\nRelating to the general public.",
     example:"A: 공공장소에서는 조용히 해야 해.\nB: 맞아, 다른 사람을 배려해야지.",
     exampleSrc:"A: You should be quiet in public places.\nB: Right, you need to be considerate of others.",
     funFact:"From Hanja 公共. Korea invests heavily in 공공시설 (public facilities) like libraries, parks, and community centers."},

    {type:"teach", trg:"공군", src:"air force", pos:"noun", gender:null,
     note:"Sino-Korean. 空 (sky) + 軍 (military).\nThe aerial branch of the armed forces.",
     example:"A: 형이 공군에서 복무 중이야.\nB: 조종사야?",
     exampleSrc:"A: My older brother is serving in the air force.\nB: Is he a pilot?",
     funFact:"From Hanja 空軍. Korean mandatory military service allows choosing branches: 육군 (army), 해군 (navy), or 공군 (air force)."},

    {type:"mc",
     q:"'공공장소'에서 해야 하는 행동은?",
     opts:["조용히 하기","큰 소리로 노래하기","쓰레기 버리기","자리 차지하기"],
     ans:"조용히 하기",
     hint:"Public places require you to be considerate of others around you."},

    {type:"teach", trg:"공급", src:"supply, provision", pos:"noun", gender:null,
     note:"Sino-Korean. 供 (provide) + 給 (give).\nThe act of providing goods or services.",
     example:"A: 전기 공급이 끊겼어.\nB: 정전이야? 촛불 찾아봐.",
     exampleSrc:"A: The electricity supply was cut off.\nB: A blackout? Look for candles.",
     funFact:"From Hanja 供給. In economics, 수요와 공급 (supply and demand) is one of the first concepts taught."},

    {type:"teach", trg:"공식", src:"formula; official", pos:"noun", gender:null,
     note:"Sino-Korean. 公 (public) + 式 (form).\nCan mean a mathematical formula or official status.",
     example:"A: 이것이 공식 발표입니다.\nB: 드디어 공식적으로 확정됐군요.",
     exampleSrc:"A: This is the official announcement.\nB: So it has finally been officially confirmed.",
     funFact:"From Hanja 公式. Same word, two meanings: 수학 공식 (math formula) and 공식 입장 (official position)."},

    {type:"teach", trg:"공식적", src:"official, formal", pos:"noun", gender:null,
     note:"공식 (official) + 적 (的, -tic/al suffix).\nAdjectival form meaning having official status.",
     example:"A: 공식적인 자리에서는 존댓말을 써야 해.\nB: 물론이지, 예의를 지켜야지.",
     exampleSrc:"A: You should use formal speech at official events.\nB: Of course, you need to be polite.",
     funFact:"The suffix -적 (的) creates adjectives from nouns, similar to English '-al' or '-tic': 역사적 (historical), 과학적 (scientific)."},

    {type:"teach", trg:"공업", src:"industry, manufacturing", pos:"noun", gender:null,
     note:"Sino-Korean. 工 (work/craft) + 業 (business).\nThe sector that produces goods.",
     example:"A: 한국의 공업은 1960년대에 크게 발전했어.\nB: 경제 성장의 기반이 됐지.",
     exampleSrc:"A: Korean industry grew significantly in the 1960s.\nB: It became the foundation of economic growth.",
     funFact:"From Hanja 工業. Korea's rapid industrialization is textbook material worldwide, from agriculture to tech in one generation."},

    {type:"teach", trg:"공연되다", src:"to be performed, to be staged", pos:"verb", gender:null,
     note:"공연 (performance) + 되다 (passive).\nA show or play is presented to an audience.",
     example:"A: 이 뮤지컬은 서울에서만 공연돼?\nB: 아니, 부산에서도 공연될 예정이야.",
     exampleSrc:"A: Is this musical only performed in Seoul?\nB: No, it is scheduled to be performed in Busan too.",
     funFact:"The -되다 suffix creates passive verbs from Sino-Korean nouns, one of the most productive patterns in formal Korean."},

    {type:"teach", trg:"공연장", src:"performance venue, theater", pos:"noun", gender:null,
     note:"공연 (performance) + 장 (場, place).\nA building where shows take place.",
     example:"A: 이 공연장은 음향이 정말 좋아.\nB: 그래서 유명한 가수들이 여기서 공연해.",
     exampleSrc:"A: This venue has really good acoustics.\nB: That is why famous singers perform here.",
     funFact:"Seoul's 대학로 (Daehak-ro) district has over 200 small theaters and performance venues in a single neighborhood."},

    {type:"teach", trg:"공연하다", src:"to perform, to put on a show", pos:"verb", gender:null,
     note:"공연 (performance) + 하다 (to do).\nTo actively stage a performance.",
     example:"A: 이번 주말에 밴드가 공연해.\nB: 어디서? 표 있어?",
     exampleSrc:"A: The band is performing this weekend.\nB: Where? Do you have tickets?",
     funFact:"공연하다 (active: someone performs) vs. 공연되다 (passive: a show is performed). Korean clearly marks this distinction."},

    {type:"match", pairs:[
      {trg:"공연장", src:"performance venue"},
      {trg:"공급", src:"supply"},
      {trg:"공업", src:"industry"},
      {trg:"공군", src:"air force"}
    ]},

    {type:"fb",
     s:"유명한 가수가 서울에서 {1}할 예정이다.",
     a:["공연"],
     opts:["공연","공격","공개","공급"],
     hint:"This word means putting on a show or performance for an audience.",
     sSrc:"A famous singer is scheduled to {1} in Seoul."}
  ]
};
export default LESSON_6;
