// Korean B2. Batch 3, Lesson 7: Free Things and Common Ground
// Words: 공연히, 공주, 공중, 공짜, 공통, 공통되다, 공통적, 공통점, 공포, 공항버스, 공해, 과, 과연, 과외, 과정, 관계되다, 관계없이, 관계자, 관광객, 관광버스

const LESSON_7 = {
  id:"kov2_b2b3_l7", title:"공통과 과정", icon:"🔗", xp:15, board:true,
  steps:[
    {type:"intro", title:"공통과 과정",
     desc:"Explore words about commonality, processes, and relationships. These are essential for expressing abstract connections and describing procedures.",
     goals:["Master 20 words related to commonality, processes, and tourism","Understand the 공통 word family","Use relational vocabulary in natural contexts"]},

    {type:"teach", trg:"공연히", src:"for no reason, uselessly", pos:"adv", gender:null,
     note:"공연 (vain/idle) + 히 (adverb suffix).\nDoing something without purpose or cause.",
     example:"A: 공연히 걱정하지 마.\nB: 알아, 그런데 불안해.",
     exampleSrc:"A: Do not worry for no reason.\nB: I know, but I feel anxious.",
     funFact:"This 공연 is different from 공연 (performance). Here it uses Hanja 空然 meaning 'vainly' or 'without cause.'"},

    {type:"teach", trg:"공주", src:"princess", pos:"noun", gender:null,
     note:"Sino-Korean. 公 (public/noble) + 主 (master).\nA daughter of a king.",
     example:"A: 이 동화에 공주가 나와?\nB: 응, 용감한 공주가 주인공이야.",
     exampleSrc:"A: Does a princess appear in this fairy tale?\nB: Yes, a brave princess is the main character.",
     funFact:"From Hanja 公主. Also a city name: 공주시 in Chungnam was the capital of the Baekje kingdom (475-538 CE)."},

    {type:"teach", trg:"공중", src:"the air, midair; the public", pos:"noun", gender:null,
     note:"Sino-Korean. 空 (empty/sky) + 中 (middle).\nCan mean midair or the general public.",
     example:"A: 공을 공중으로 높이 던졌어.\nB: 와, 정말 높이 올라갔다!",
     exampleSrc:"A: I threw the ball high into the air.\nB: Wow, it went really high!",
     funFact:"From Hanja 空中. 공중전화 (public telephone) and 공중화장실 (public restroom) use the 'public' meaning."},

    {type:"teach", trg:"공짜", src:"free of charge, freebie", pos:"noun", gender:null,
     note:"Native Korean word.\nSomething given without payment.",
     example:"A: 이거 공짜야?\nB: 응, 오늘 행사 기간이라 무료야.",
     exampleSrc:"A: Is this free?\nB: Yes, it is free because of today's event.",
     funFact:"Koreans joke: 공짜라면 양잿물도 마신다 (If it is free, they would even drink lye). Nothing beats free stuff."},

    {type:"mc",
     q:"'공짜'의 뜻으로 맞는 것은?",
     opts:["돈을 내지 않는 것","매우 비싼 것","품질이 좋은 것","양이 많은 것"],
     ans:"돈을 내지 않는 것",
     hint:"This describes something you receive without any payment required."},

    {type:"teach", trg:"공통", src:"commonality, being in common", pos:"noun", gender:null,
     note:"Sino-Korean. 共 (together) + 通 (pass through).\nWhat things share or have alike.",
     example:"A: 우리의 공통 관심사가 뭐야?\nB: 둘 다 음악을 좋아하잖아.",
     exampleSrc:"A: What is our common interest?\nB: We both like music.",
     funFact:"From Hanja 共通. A highly productive root: 공통점, 공통적, 공통되다 all derive from it."},

    {type:"teach", trg:"공통되다", src:"to be in common, to be shared", pos:"verb", gender:null,
     note:"공통 (common) + 되다 (to become).\nSomething is shared between multiple things.",
     example:"A: 이 두 문화에 공통되는 점이 있어?\nB: 가족을 중시한다는 점이 공통돼.",
     exampleSrc:"A: Is there anything in common between these two cultures?\nB: Valuing family is something they share.",
     funFact:"The -되다 form emphasizes the state of being common, while 공통적 is the adjectival modifier form."},

    {type:"teach", trg:"공통적", src:"common, shared (adjectival)", pos:"noun", gender:null,
     note:"공통 (common) + 적 (的, adjectival suffix).\nUsed to modify nouns: 공통적인 특징.",
     example:"A: 성공한 사람들의 공통적인 특징은 뭘까?\nB: 끈기가 있다는 거 아닐까.",
     exampleSrc:"A: What are the common traits of successful people?\nB: Maybe that they have perseverance.",
     funFact:"The -적 suffix is one of Korean's most common modifiers. It can attach to almost any Sino-Korean noun."},

    {type:"teach", trg:"공통점", src:"common point, thing in common", pos:"noun", gender:null,
     note:"공통 (common) + 점 (點, point).\nA specific shared characteristic.",
     example:"A: 너랑 나의 공통점을 찾았어.\nB: 뭔데? 말해 봐.",
     exampleSrc:"A: I found something we have in common.\nB: What is it? Tell me.",
     funFact:"From Hanja 共通點. TOPIK writing tasks often ask you to compare 공통점 (similarities) and 차이점 (differences)."},

    {type:"fb",
     s:"두 나라의 {1}은 쌀을 주식으로 먹는다는 것이다.",
     a:["공통점"],
     opts:["공통점","공포","과정","관계"],
     hint:"This compound noun means a specific characteristic that two things share.",
     sSrc:"The {1} between the two countries is that they eat rice as a staple food."},

    {type:"teach", trg:"공포", src:"fear, terror", pos:"noun", gender:null,
     note:"Sino-Korean. 恐 (fear) + 怖 (dread).\nAn intense feeling of fright.",
     example:"A: 공포 영화 좋아해?\nB: 아니, 무서운 거 못 봐.",
     exampleSrc:"A: Do you like horror movies?\nB: No, I cannot watch scary things.",
     funFact:"From Hanja 恐怖. 공포증 (phobia) adds the medical suffix: 고소공포증 (acrophobia), 폐소공포증 (claustrophobia)."},

    {type:"teach", trg:"공항버스", src:"airport bus", pos:"noun", gender:null,
     note:"공항 (airport) + 버스 (bus).\nA bus service connecting the airport to the city.",
     example:"A: 공항버스가 몇 시에 출발해?\nB: 30분마다 있으니까 걱정 마.",
     exampleSrc:"A: What time does the airport bus depart?\nB: It comes every 30 minutes, so do not worry.",
     funFact:"Incheon Airport limousine buses are famous for their comfort and punctuality, running routes across all of Seoul."},

    {type:"teach", trg:"공해", src:"pollution", pos:"noun", gender:null,
     note:"Sino-Korean. 公 (public) + 害 (harm).\nHarm caused to the public environment.",
     example:"A: 공해가 심한 도시에서 살기 힘들어.\nB: 맞아, 공기가 안 좋으면 건강에 나빠.",
     exampleSrc:"A: It is hard to live in a city with severe pollution.\nB: Right, bad air quality is unhealthy.",
     funFact:"From Hanja 公害. Fine dust (미세먼지) has made 공해 one of the most discussed topics in Korean media."},

    {type:"teach", trg:"과", src:"department, section; lesson", pos:"noun", gender:null,
     note:"Sino-Korean. 科 (department/subject).\nUsed for academic departments or course units.",
     example:"A: 무슨 과에 다녀?\nB: 경영학과에 다녀.",
     exampleSrc:"A: What department are you in?\nB: I am in the business administration department.",
     funFact:"From Hanja 科. University departments: 국문과 (Korean lit.), 영문과 (English lit.), 의과 (medical dept.)."},

    {type:"teach", trg:"과연", src:"indeed, as expected; really", pos:"adv", gender:null,
     note:"Sino-Korean. 果 (fruit/result) + 然 (so).\nExpresses that something turned out as anticipated.",
     example:"A: 과연 네 말이 맞았어.\nB: 내가 뭐랬어, 그렇다고 했잖아.",
     exampleSrc:"A: Indeed, you were right.\nB: What did I tell you? I said so.",
     funFact:"From Hanja 果然. Can express both confirmation (as expected) and skepticism (really?) depending on tone."},

    {type:"mc",
     q:"'과연 그럴까?'라는 문장에서 '과연'의 뜻은?",
     opts:["조용히","정말로","빨리","항상"],
     ans:"정말로",
     hint:"In a question, this word expresses doubt or wonder about whether something is truly so."},

    {type:"teach", trg:"과외", src:"private tutoring", pos:"noun", gender:null,
     note:"Sino-Korean. 課 (lesson) + 外 (outside).\nEducation outside the regular curriculum.",
     example:"A: 수학 과외를 받고 있어?\nB: 응, 일주일에 두 번씩.",
     exampleSrc:"A: Are you getting math tutoring?\nB: Yes, twice a week.",
     funFact:"From Hanja 課外. Private tutoring is a massive industry in Korea, with Gangnam's 학원 (cram school) district being world-famous."},

    {type:"teach", trg:"과정", src:"process, course, procedure", pos:"noun", gender:null,
     note:"Sino-Korean. 過 (pass) + 程 (journey/extent).\nThe steps involved in achieving something.",
     example:"A: 입학 과정이 복잡해?\nB: 서류 준비가 좀 힘들어.",
     exampleSrc:"A: Is the admission process complicated?\nB: Preparing documents is a bit tough.",
     funFact:"From Hanja 過程. Also means 'course' in education: 석사 과정 (master's program), 박사 과정 (doctoral program)."},

    {type:"teach", trg:"관계되다", src:"to be related to, to be involved in", pos:"verb", gender:null,
     note:"관계 (relation) + 되다 (passive).\nSomething is connected or linked to another thing.",
     example:"A: 이 사건은 환경 문제에 관계돼 있어.\nB: 그래서 환경 단체가 관심을 갖는 거야.",
     exampleSrc:"A: This case is related to environmental issues.\nB: That is why environmental groups are interested.",
     funFact:"관계되다 (passive: be related) vs. 관계하다 (active, rare in daily use). The passive form is far more common."},

    {type:"teach", trg:"관계없이", src:"regardless of, irrespective of", pos:"adv", gender:null,
     note:"관계 (relation) + 없이 (without).\nWithout any connection or regard to something.",
     example:"A: 나이에 관계없이 누구나 참여할 수 있어.\nB: 좋다! 우리 할머니도 올 수 있겠네.",
     exampleSrc:"A: Anyone can participate regardless of age.\nB: Great! My grandmother can come too.",
     funFact:"A very useful formal connector. TOPIK essays love this expression for making universal statements."},

    {type:"teach", trg:"관계자", src:"person concerned, stakeholder", pos:"noun", gender:null,
     note:"관계 (relation) + 자 (者, person).\nSomeone involved in or responsible for a matter.",
     example:"A: 관계자 외 출입 금지입니다.\nB: 그럼 우리는 못 들어가네.",
     exampleSrc:"A: Entry is restricted to authorized personnel only.\nB: Then we cannot go in.",
     funFact:"From Hanja 關係者. News reports constantly use 관계자 when quoting unnamed officials or insiders."},

    {type:"teach", trg:"관광객", src:"tourist, sightseer", pos:"noun", gender:null,
     note:"관광 (tourism) + 객 (客, guest).\nA person traveling to see sights.",
     example:"A: 명동에 관광객이 정말 많아.\nB: 외국인 관광객이 많이 오는 곳이니까.",
     exampleSrc:"A: There are so many tourists in Myeongdong.\nB: Because it is a place many foreign tourists visit.",
     funFact:"From Hanja 觀光客. Korea welcomed over 17 million tourists in 2019, with Myeongdong and Gyeongbokgung as top draws."},

    {type:"teach", trg:"관광버스", src:"tour bus, sightseeing bus", pos:"noun", gender:null,
     note:"관광 (tourism) + 버스 (bus).\nA bus used for sightseeing tours.",
     example:"A: 관광버스를 타고 도시를 구경하자.\nB: 좋아, 편하게 볼 수 있겠다.",
     exampleSrc:"A: Let us ride a tour bus and see the city.\nB: Sounds good, we can see things comfortably.",
     funFact:"Seoul's City Tour Bus runs three routes covering all major historical and modern landmarks in a loop."},

    {type:"match", pairs:[
      {trg:"공포", src:"fear, terror"},
      {trg:"과외", src:"private tutoring"},
      {trg:"관광객", src:"tourist"},
      {trg:"공짜", src:"free of charge"}
    ]},

    {type:"fb",
     s:"나이에 {1} 누구나 지원할 수 있습니다.",
     a:["관계없이"],
     opts:["관계없이","공통적","과연","공연히"],
     hint:"This expression means 'without regard to' or 'irrespective of' a condition.",
     sSrc:"Anyone can apply {1} of age."}
  ]
};
export default LESSON_7;
