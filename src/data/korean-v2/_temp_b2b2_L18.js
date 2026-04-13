// Korean B2 — Batch 2, Lesson 18: Return and Reflection
// Words: 동창, 동포, 동행, 동화책, 되돌리다, 되돌아가다, 되돌아보다, 되돌아오다, 되살리다, 되찾다, 되풀이되다, 되풀이하다, 된장, 된장찌개, 두께, 두뇌, 두드러지다, 두려움, 두려워하다, 두렵다

const LESSON_18 = {
  id:"kov2_b2b2_l18", title:"되돌아보기", icon:"🔄", xp:15, board:true,
  steps:[
    {type:"intro", title:"되돌아보기",
     desc:"Learn words about returning, reflecting, and recovery. The 되- prefix creates powerful verbs about going back and doing again.",
     goals:["Master 20 words with 되- (return/again) prefix verbs","Understand Korean food vocabulary","Learn words for emotions and prominent features"]},

    {type:"teach", trg:"동창", src:"classmate, alumnus", pos:"noun", gender:null,
     note:"Sino-Korean. 同 (same) + 窓 (window).\nPeople who shared the same classroom window.",
     example:"A: 고등학교 동창을 만났어요.\nB: 반가웠겠네요!",
     exampleSrc:"A: I met a high school classmate.\nB: That must have been nice!",
     funFact:"동창회 (alumni reunion) is a major social event in Korea. Connections from school years last a lifetime."},

    {type:"teach", trg:"동포", src:"compatriot, fellow Korean abroad", pos:"noun", gender:null,
     note:"Sino-Korean. 同 (same) + 胞 (womb/kin).\nPeople from the same national origin.",
     example:"A: 해외 동포가 약 700만 명이에요.\nB: 정말 많네요.",
     exampleSrc:"A: There are about 7 million overseas Koreans.\nB: That is a lot.",
     funFact:"재외 동포 (overseas Koreans) is an official term. 교포 is also used. The Korean diaspora is worldwide."},

    {type:"teach", trg:"동행", src:"accompaniment, traveling together", pos:"noun", gender:null,
     note:"Sino-Korean. 同 (same) + 行 (go).\nGoing somewhere together with someone.",
     example:"A: 동행해 주실 수 있어요?\nB: 네, 같이 가겠습니다.",
     exampleSrc:"A: Could you accompany me?\nB: Yes, I will go with you.",
     funFact:"동행하다 is more formal than 같이 가다 (go together). Used for official or professional accompaniment."},

    {type:"teach", trg:"동화책", src:"fairy tale book, storybook", pos:"noun", gender:null,
     note:"동화 (fairy tale) + 책 (book).\nA book of stories for children.",
     example:"A: 아이에게 동화책을 읽어 줬어요.\nB: 어떤 이야기였어요?",
     exampleSrc:"A: I read a fairy tale book to the child.\nB: What story was it?",
     funFact:"Korean 동화 blends native folk tales (전래동화) with translated Western classics (번역동화)."},

    {type:"teach", trg:"되돌리다", src:"to turn back, to reverse, to restore", pos:"verb", gender:null,
     note:"되 (back/again) + 돌리다 (turn).\nTo cause something to return to a previous state.",
     example:"A: 시간을 되돌릴 수 있다면 좋겠어요.\nB: 누구나 그런 바람이 있죠.",
     exampleSrc:"A: I wish I could turn back time.\nB: Everyone has that wish.",
     funFact:"되돌리다 is transitive (you reverse it). 되돌아가다 is intransitive (you go back). Key distinction."},

    {type:"teach", trg:"되돌아가다", src:"to go back, to return", pos:"verb", gender:null,
     note:"되 (back) + 돌아가다 (go back).\nTo return to a previous place or state.",
     example:"A: 고향에 되돌아갈 거예요?\nB: 네, 은퇴하면 돌아갈 계획이에요.",
     exampleSrc:"A: Will you go back to your hometown?\nB: Yes, I plan to return when I retire.",
     funFact:"되돌아가다 emphasizes the 'back again' aspect more than simple 돌아가다. It implies returning after being away."},

    {type:"mc",
     q:"'동창'의 뜻으로 맞는 것은?",
     opts:["같은 학교를 다닌 사람","같은 회사에 다니는 사람","같은 동네에 사는 사람","같은 나라 사람"],
     ans:"같은 학교를 다닌 사람",
     hint:"People who shared the same classroom. The Hanja literally means 'same window.'"},

    {type:"teach", trg:"되돌아보다", src:"to look back, to reflect on", pos:"verb", gender:null,
     note:"되 (back) + 돌아보다 (turn and look).\nTo reflect on the past.",
     example:"A: 지난 1년을 되돌아봤어요.\nB: 많은 성장이 있었죠?",
     exampleSrc:"A: I looked back on the past year.\nB: There was a lot of growth, right?",
     funFact:"되돌아보다 is introspective and reflective. It is common in year-end reviews and personal essays."},

    {type:"teach", trg:"되돌아오다", src:"to come back, to return (here)", pos:"verb", gender:null,
     note:"되 (back) + 돌아오다 (come back).\nTo return to where you started.",
     example:"A: 결국 출발점으로 되돌아왔어요.\nB: 다시 시작할 수 있어요.",
     exampleSrc:"A: In the end, I came back to the starting point.\nB: You can start again.",
     funFact:"되돌아오다 (come back here) vs 되돌아가다 (go back there). Direction relative to the speaker."},

    {type:"teach", trg:"되살리다", src:"to revive, to bring back to life", pos:"verb", gender:null,
     note:"되 (again) + 살리다 (to save/bring alive).\nTo restore something to a living or active state.",
     example:"A: 옛 전통을 되살리려는 노력이 있어요.\nB: 중요한 일이에요.",
     exampleSrc:"A: There are efforts to revive old traditions.\nB: That is important work.",
     funFact:"되살리다 works for traditions (문화를 되살리다), memories (기억을 되살리다), and even people (환자를 되살리다)."},

    {type:"teach", trg:"되찾다", src:"to recover, to get back", pos:"verb", gender:null,
     note:"되 (back) + 찾다 (find).\nTo find again what was lost.",
     example:"A: 잃어버린 지갑을 되찾았어요.\nB: 정말 다행이에요!",
     exampleSrc:"A: I recovered my lost wallet.\nB: What a relief!",
     funFact:"건강을 되찾다 (recover health), 자유를 되찾다 (regain freedom), 자신감을 되찾다 (regain confidence)."},

    {type:"fb",
     s:"지난 1년을 {1}.",
     a:["되돌아봤다"],
     opts:["되돌아봤다","되돌렸다","되찾았다","되살렸다"],
     hint:"To look back and reflect on a past period, reviewing what happened.",
     sSrc:"I {1} on the past year."},

    {type:"teach", trg:"되풀이되다", src:"to be repeated, to recur", pos:"verb", gender:null,
     note:"되풀이 (repetition) + 되다 (passive).\nSomething repeats involuntarily.",
     example:"A: 같은 실수가 되풀이되고 있어요.\nB: 근본적인 해결책이 필요해요.",
     exampleSrc:"A: The same mistakes keep recurring.\nB: A fundamental solution is needed.",
     funFact:"되풀이되다 (passive, it recurs) vs 되풀이하다 (active, you repeat it). Another important active/passive pair."},

    {type:"teach", trg:"되풀이하다", src:"to repeat, to do again", pos:"verb", gender:null,
     note:"되풀이 (repetition) + 하다.\nTo deliberately do something again.",
     example:"A: 역사를 되풀이하지 맙시다.\nB: 과거에서 배워야 해요.",
     exampleSrc:"A: Let us not repeat history.\nB: We must learn from the past.",
     funFact:"역사는 되풀이된다 (history repeats itself) is a commonly quoted phrase in Korean public discourse."},

    {type:"teach", trg:"된장", src:"fermented soybean paste", pos:"noun", gender:null,
     note:"되다 (to become thick/fermented) + 장 (sauce).\nA fundamental Korean fermented condiment.",
     example:"A: 된장으로 찌개를 끓일 거예요.\nB: 된장찌개 좋아해요!",
     exampleSrc:"A: I am going to make stew with soybean paste.\nB: I love doenjang-jjigae!",
     funFact:"된장 is one of Korea's 'three essential sauces' along with 고추장 (chili paste) and 간장 (soy sauce)."},

    {type:"teach", trg:"된장찌개", src:"soybean paste stew", pos:"noun", gender:null,
     note:"된장 (soybean paste) + 찌개 (stew).\nKorea's most beloved everyday stew.",
     example:"A: 오늘 점심은 된장찌개예요.\nB: 집 된장으로 끓인 거예요?",
     exampleSrc:"A: Today's lunch is soybean paste stew.\nB: Did you make it with homemade paste?",
     funFact:"된장찌개 is considered the soul of Korean home cooking. Every family has their own recipe."},

    {type:"teach", trg:"두께", src:"thickness", pos:"noun", gender:null,
     note:"두껍다 (thick) nominalized form.\nThe measurement of how thick something is.",
     example:"A: 이 책의 두께가 상당하네요.\nB: 500페이지가 넘어요.",
     exampleSrc:"A: The thickness of this book is considerable.\nB: It is over 500 pages.",
     funFact:"두께 is the noun. 두껍다 is the adjective (thick). 얇다 (thin) is the opposite. 두께 is used for precise measurement."},

    {type:"mc",
     q:"'되찾다'의 뜻으로 맞는 것은?",
     opts:["잃었던 것을 다시 찾다","처음으로 찾다","남에게 주다","버리고 가다"],
     ans:"잃었던 것을 다시 찾다",
     hint:"To find again what was previously lost. The 되- prefix means 'back/again.'"},

    {type:"teach", trg:"두뇌", src:"brain, intellect", pos:"noun", gender:null,
     note:"Sino-Korean. 頭 (head) + 腦 (brain).\nThe brain, or intellectual capacity.",
     example:"A: 두뇌 회전이 빠르시네요.\nB: 감사합니다.",
     exampleSrc:"A: Your mind works quickly.\nB: Thank you.",
     funFact:"두뇌 회전 (brain rotation) means quick thinking. 뇌 is anatomical brain; 두뇌 emphasizes intellectual capacity."},

    {type:"teach", trg:"두드러지다", src:"to be noticeable, prominent, outstanding", pos:"adj", gender:null,
     note:"Native Korean. Standing out visibly\nfrom the surroundings.",
     example:"A: 이 학생의 실력이 두드러져요.\nB: 상을 줄 만하네요.",
     exampleSrc:"A: This student's ability is outstanding.\nB: They deserve an award.",
     funFact:"두드러지다 can be positive (talent) or neutral (feature). 두드러진 특징 (prominent characteristic) is common."},

    {type:"teach", trg:"두려움", src:"fear, dread", pos:"noun", gender:null,
     note:"두렵다 (fearful) + 음 (nominalization).\nThe emotion of being afraid.",
     example:"A: 두려움을 극복해야 해요.\nB: 용기를 내세요.",
     exampleSrc:"A: You must overcome your fear.\nB: Be brave.",
     funFact:"두려움 is deeper than 무서움 (scaredness). 두려움 implies existential or deep-seated fear."},

    {type:"teach", trg:"두려워하다", src:"to fear, to be afraid of", pos:"verb", gender:null,
     note:"두렵다 (fearful) + 어하다 (show emotion).\nTo demonstrate or feel fear.",
     example:"A: 실패를 두려워하지 마세요.\nB: 노력하겠습니다.",
     exampleSrc:"A: Do not be afraid of failure.\nB: I will try.",
     funFact:"두려워하다 externalizes the emotion (showing fear). 두렵다 is the internal state (feeling fearful)."},

    {type:"teach", trg:"두렵다", src:"to be fearful, to feel dread", pos:"adj", gender:null,
     note:"Native Korean adjective.\nThe internal experience of fear.",
     example:"A: 미래가 두렵지 않아요?\nB: 조금은 두렵지만 기대도 돼요.",
     exampleSrc:"A: Are you not fearful of the future?\nB: I am a little fearful but also excited.",
     funFact:"두렵다 is a ㅂ-irregular adjective: 두렵다 > 두려운 > 두려워. This pattern is common in Korean adjectives."},

    {type:"match", pairs:[
      {trg:"동창", src:"classmate"},
      {trg:"되찾다", src:"to recover"},
      {trg:"된장", src:"soybean paste"},
      {trg:"두뇌", src:"brain"},
      {trg:"두려움", src:"fear"}
    ]},

    {type:"fb",
     s:"실패를 {1} 마세요.",
     a:["두려워하지"],
     opts:["두려워하지","되돌아보지","되풀이하지","두드러지지"],
     hint:"The verb form of fearing or being afraid of something. Do not show this emotion.",
     sSrc:"Do not {1} failure."}
  ]
};
export default LESSON_18;
