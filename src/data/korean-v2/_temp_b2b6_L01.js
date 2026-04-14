// Korean B2 — Batch 6, Lesson 1: Trade and Collections
// Words: 수입되다, 수입품, 수입하다, 수출하다, 수표, 수행하다, 수험생, 수화기, 수저, 수집, 수집하다, 수천, 수컷, 수필, 숙녀, 순간적, 순수, 순식간, 순진하다, 순하다

const LESSON_1 = {
  id:"kov2_b2b6_l1", title:"무역과 수집", icon:"📦", xp:15, board:true,
  steps:[
    {type:"intro", title:"무역과 수집",
     desc:"Learn vocabulary for international trade, collections, and related activities. These words appear frequently in news and business contexts.",
     goals:["Master 20 words about trade, collections, and examinations","Understand Sino-Korean compounds with 수 (water/number/hand)","Use import/export vocabulary in context"]},

    {type:"teach", trg:"수입되다", src:"to be imported", pos:"verb", gender:null,
     note:"Passive of 수입하다.\n輸入 (transport + enter) + 되다.",
     example:"A: 이 커피는 어디서 수입된 거야?\nB: 콜롬비아에서 수입된 거래.",
     exampleSrc:"A: Where was this coffee imported from?\nB: They say it was imported from Colombia.",
     funFact:"Korea imports over 99% of its coffee beans. The word 수입 uses the same hanja as Chinese 'shuru'."},

    {type:"teach", trg:"수입품", src:"imported goods", pos:"noun", gender:null,
     note:"Sino-Korean. 輸入 (import) + 品 (goods).\nItems brought in from other countries.",
     example:"A: 이 가게는 수입품만 파나 봐.\nB: 맞아, 그래서 좀 비싸.",
     exampleSrc:"A: This store seems to sell only imported goods.\nB: Right, that is why it is a bit expensive.",
     funFact:"Korean consumers often associate 수입품 with premium quality, especially European luxury goods."},

    {type:"teach", trg:"수입하다", src:"to import", pos:"verb", gender:null,
     note:"Sino-Korean. 輸入 (transport in) + 하다.\nBringing goods into the country.",
     example:"A: 우리 회사는 원재료를 수입해요.\nB: 어느 나라에서 수입하세요?",
     exampleSrc:"A: Our company imports raw materials.\nB: From which country do you import?",
     funFact:"South Korea is the world's 8th largest importer. The verb pair is 수입하다/수출하다."},

    {type:"mc",
     q:"수입품의 반대 개념은?",
     opts:["수출품","생산품","완제품","가공품"],
     ans:"수출품",
     hint:"If imported goods come IN to the country, what are goods that go OUT called?"},

    {type:"teach", trg:"수출하다", src:"to export", pos:"verb", gender:null,
     note:"Sino-Korean. 輸出 (transport out) + 하다.\nSending goods to other countries.",
     example:"A: 한국은 반도체를 많이 수출해요.\nB: 네, 세계 1위 수출국이에요.",
     exampleSrc:"A: Korea exports a lot of semiconductors.\nB: Yes, it is the world's number one exporter.",
     funFact:"Samsung and SK Hynix together account for over 60% of global memory chip exports."},

    {type:"teach", trg:"수표", src:"check (bank)", pos:"noun", gender:null,
     note:"Sino-Korean. 手 (hand) + 票 (slip/ticket).\nA written order to pay money.",
     example:"A: 수표로 결제할 수 있나요?\nB: 죄송하지만 카드만 가능합니다.",
     exampleSrc:"A: Can I pay by check?\nB: Sorry, but only cards are accepted.",
     funFact:"Korea's cashier's checks (자기앞수표) were once so common that 100,000 won checks functioned like large bills."},

    {type:"teach", trg:"수행하다", src:"to carry out, to perform", pos:"verb", gender:null,
     note:"Sino-Korean. 遂行 (accomplish) + 하다.\nExecuting a task or duty.",
     example:"A: 이번 프로젝트를 잘 수행해 주세요.\nB: 네, 최선을 다하겠습니다.",
     exampleSrc:"A: Please carry out this project well.\nB: Yes, I will do my best.",
     funFact:"In Buddhist contexts, 수행 means spiritual practice or meditation, a completely different meaning."},

    {type:"fb",
     s:"우리 팀은 이번 임무를 성공적으로 {1} 것입니다.",
     a:["수행할"],
     opts:["수행할","수입할","수출할","수집할"],
     hint:"Which verb means to carry out or accomplish a task or mission?",
     sSrc:"Our team will successfully {1} this mission."},

    {type:"teach", trg:"수험생", src:"exam candidate, test-taker", pos:"noun", gender:null,
     note:"Sino-Korean. 受驗 (take exam) + 生 (student).\nA student preparing for exams.",
     example:"A: 수험생이라 요즘 많이 바쁘지?\nB: 응, 하루에 열 시간씩 공부해.",
     exampleSrc:"A: You must be very busy since you are an exam candidate?\nB: Yes, I study ten hours a day.",
     funFact:"In Korea, the entire nation supports 수험생 during the college entrance exam. Flights are even delayed to reduce noise."},

    {type:"teach", trg:"수화기", src:"telephone receiver", pos:"noun", gender:null,
     note:"Sino-Korean. 受話 (receive speech) + 器 (device).\nThe handset of a phone.",
     example:"A: 수화기를 들었는데 아무 소리도 안 나.\nB: 전화선이 빠졌나 봐.",
     exampleSrc:"A: I picked up the receiver but there is no sound.\nB: The phone line must have come unplugged.",
     funFact:"Despite being a landline term, Koreans still say 수화기를 들다/놓다 figuratively for answering/hanging up."},

    {type:"teach", trg:"수저", src:"spoon and chopsticks", pos:"noun", gender:null,
     note:"숟가락 (spoon) + 젓가락 (chopsticks).\nThe essential Korean table setting pair.",
     example:"A: 수저 좀 가져다줄래?\nB: 응, 몇 벌 필요해?",
     exampleSrc:"A: Can you bring some spoon-and-chopstick sets?\nB: Sure, how many sets do you need?",
     funFact:"The phrase 금수저/흙수저 (gold spoon/dirt spoon) describes someone born rich or poor, like 'silver spoon' in English."},

    {type:"teach", trg:"수집", src:"collection, collecting", pos:"noun", gender:null,
     note:"Sino-Korean. 收 (gather) + 集 (assemble).\nGathering items or information.",
     example:"A: 취미가 뭐예요?\nB: 우표 수집이요.",
     exampleSrc:"A: What is your hobby?\nB: Stamp collecting.",
     funFact:"Data collection (데이터 수집) has become a hot topic in Korea due to privacy concerns."},

    {type:"teach", trg:"수집하다", src:"to collect, to gather", pos:"verb", gender:null,
     note:"수집 + 하다 (to do).\nThe verb form of collecting.",
     example:"A: 자료를 다 수집했어요?\nB: 네, 이제 분석만 하면 돼요.",
     exampleSrc:"A: Have you collected all the data?\nB: Yes, now we just need to analyze it.",
     funFact:"Korean law requires consent before 개인정보 수집 (personal information collection)."},

    {type:"match", pairs:[
      {trg:"수입하다", src:"to import"},
      {trg:"수출하다", src:"to export"},
      {trg:"수행하다", src:"to carry out"},
      {trg:"수집하다", src:"to collect"}
    ]},

    {type:"teach", trg:"수천", src:"thousands, several thousand", pos:"noun", gender:null,
     note:"Sino-Korean. 數 (several) + 千 (thousand).\nAn approximate large quantity.",
     example:"A: 행사에 사람이 많이 왔어?\nB: 응, 수천 명이 왔대.",
     exampleSrc:"A: Did many people come to the event?\nB: Yes, they say thousands came.",
     funFact:"Korean uses 수 + number word for approximations: 수백 (hundreds), 수천 (thousands), 수만 (tens of thousands)."},

    {type:"teach", trg:"수컷", src:"male animal", pos:"noun", gender:null,
     note:"수 (male) + 컷 (creature suffix).\nRefers to male animals only, not humans.",
     example:"A: 이 강아지는 수컷이에요?\nB: 네, 수컷이에요.",
     exampleSrc:"A: Is this puppy a male?\nB: Yes, it is a male.",
     funFact:"The pair 수컷/암컷 (male/female) is used only for animals. Using it for humans is rude."},

    {type:"teach", trg:"수필", src:"essay, personal essay", pos:"noun", gender:null,
     note:"Sino-Korean. 隨 (follow) + 筆 (brush/pen).\nLiterally 'following the brush' freely.",
     example:"A: 이 수필 읽어 봤어?\nB: 응, 정말 감동적이었어.",
     exampleSrc:"A: Have you read this essay?\nB: Yes, it was really moving.",
     funFact:"수필 is a beloved literary genre in Korea. Famous essayist 피천득's 'In Praise of Idleness' is a classic."},

    {type:"fb",
     s:"그녀는 여행에서 느낀 점을 {1}로 썼다.",
     a:["수필"],
     opts:["수필","신문","일기","수표"],
     hint:"A literary genre where the writer follows the brush freely, sharing personal reflections.",
     sSrc:"She wrote about her feelings from the trip as a {1}."},

    {type:"teach", trg:"숙녀", src:"lady, gentlewoman", pos:"noun", gender:null,
     note:"Sino-Korean. 淑 (virtuous) + 女 (woman).\nA refined, well-mannered woman.",
     example:"A: 저분은 정말 숙녀 같아.\nB: 맞아, 매너가 아주 좋아.",
     exampleSrc:"A: That person really seems like a lady.\nB: Right, her manners are very good.",
     funFact:"The pair 신사/숙녀 (gentleman/lady) is used in formal announcements: 신사 숙녀 여러분 (ladies and gentlemen)."},

    {type:"teach", trg:"순간적", src:"momentary, instantaneous", pos:"noun", gender:null,
     note:"Sino-Korean. 瞬間 (moment) + 的 (quality).\nUsed as an adnominal modifier.",
     example:"A: 그건 순간적인 판단이었어요.\nB: 그래도 결과가 좋았잖아요.",
     exampleSrc:"A: That was a momentary judgment.\nB: Still, the result was good.",
     funFact:"Korean -적 words function like English '-al' or '-ous' suffixes, turning nouns into modifiers."},

    {type:"teach", trg:"순수", src:"purity, pure", pos:"noun", gender:null,
     note:"Sino-Korean. 純 (pure) + 粹 (essence).\nPureness in quality or character.",
     example:"A: 그 사람은 마음이 순수해.\nB: 그래서 다들 좋아하지.",
     exampleSrc:"A: That person has a pure heart.\nB: That is why everyone likes them.",
     funFact:"순수 예술 (pure art) in Korean refers to fine art created for its own sake, not commercial art."},

    {type:"teach", trg:"순식간", src:"in an instant, in a flash", pos:"noun", gender:null,
     note:"Sino-Korean. 瞬 (blink) + 息 (breath) + 間 (between).\nThe time of a blink and a breath.",
     example:"A: 사고가 순식간에 일어났어요.\nB: 정말 무서웠겠다.",
     exampleSrc:"A: The accident happened in an instant.\nB: That must have been really scary.",
     funFact:"The literal meaning is beautiful: the gap between a blink and a breath. That is how fast it is."},

    {type:"mc",
     q:"'순식간에'는 무슨 뜻인가요?",
     opts:["아주 빠르게","천천히","조심스럽게","갑자기"],
     ans:"아주 빠르게",
     hint:"Think of something that happens in the time between a blink and a breath."},

    {type:"teach", trg:"순진하다", src:"to be naive, to be innocent", pos:"adj", gender:null,
     note:"Sino-Korean. 純 (pure) + 眞 (true) + 하다.\nGenuinely innocent or unsophisticated.",
     example:"A: 그 애는 너무 순진해서 걱정이야.\nB: 좀 더 크면 괜찮아질 거야.",
     exampleSrc:"A: That kid is so naive that I am worried.\nB: It will be fine when they grow up a bit.",
     funFact:"Unlike English 'naive' which can be negative, 순진하다 in Korean often carries a warm, endearing tone."},

    {type:"teach", trg:"순하다", src:"to be gentle, to be mild", pos:"adj", gender:null,
     note:"Native Korean adjective.\nDescribes a gentle temperament or mild taste.",
     example:"A: 이 강아지는 성격이 순해요.\nB: 그래서 아이들하고 잘 놀아요.",
     exampleSrc:"A: This puppy has a gentle personality.\nB: That is why it plays well with children.",
     funFact:"순한 맛 (mild flavor) is the opposite of 매운 맛 (spicy flavor) on Korean food labels."},

    {type:"fb",
     s:"이 고양이는 성격이 아주 {1}.",
     a:["순해요"],
     opts:["순해요","순진해요","순수해요","순간적이에요"],
     hint:"Which adjective describes a gentle, mild temperament in animals?",
     sSrc:"This cat has a very {1} personality."},

    {type:"match", pairs:[
      {trg:"순수", src:"purity"},
      {trg:"순진하다", src:"to be naive"},
      {trg:"순하다", src:"to be gentle"},
      {trg:"순식간", src:"in an instant"}
    ]}
  ]
};

export default LESSON_1;
