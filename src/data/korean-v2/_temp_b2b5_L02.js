// Korean B2 — Batch 5, Lesson 2: Burden and Diligence
// Words: 부담, 부담하다, 부대, 부딪히다, 부러워하다, 부러지다, 부문, 부분적, 부상, 부서, 부서지다, 부위, 부자, 부잣집, 부재, 부정, 부정적, 부정하다, 부지런하다, 부지런히

const LESSON_2 = {
  id:"kov2_b2b5_l2", title:"부담과 부지런함", icon:"💪", xp:15, board:true,
  steps:[
    {type:"intro", title:"부담과 부지런함",
     desc:"Learn vocabulary about burdens, injuries, wealth, and diligence. These words appear frequently in news, workplace conversations, and daily life discussions.",
     goals:["Master 20 words related to burden, injury, wealth, and diligence","Understand negative prefix patterns with 부정","Learn compound words using 부 (part/division)"]},

    {type:"teach", trg:"부담", src:"burden, financial responsibility", pos:"noun", gender:null,
     note:"Sino-Korean. 負 (carry) + 擔 (bear).\nA weight or cost one must carry.",
     example:"A: 집값이 너무 부담이 돼.\nB: 요즘 다들 그렇다더라.",
     exampleSrc:"A: Housing prices are too much of a burden.\nB: I hear everyone feels that way these days.",
     funFact:"In Korean culture, 부담 can also mean social pressure, like feeling burdened by an expensive gift."},

    {type:"teach", trg:"부담하다", src:"to bear (a cost), to shoulder", pos:"verb", gender:null,
     note:"부담 + 하다 (to do).\nTo take on a financial or personal burden.",
     example:"A: 식사비는 제가 부담할게요.\nB: 아니에요, 나누어서 내요.",
     exampleSrc:"A: I will cover the meal cost.\nB: No, let's split it.",
     funFact:"The phrase 비용을 부담하다 (to bear the cost) is essential in business Korean."},

    {type:"teach", trg:"부대", src:"military unit, troops", pos:"noun", gender:null,
     note:"Sino-Korean. 部 (division) + 隊 (squad).\nA military formation.",
     example:"A: 어느 부대에서 복무했어?\nB: 강원도에 있는 보병 부대였어.",
     exampleSrc:"A: Which unit did you serve in?\nB: It was an infantry unit in Gangwon Province.",
     funFact:"All Korean men serve mandatory military service. Asking which 부대 someone served in is common small talk."},

    {type:"teach", trg:"부딪히다", src:"to bump into, to collide with", pos:"verb", gender:null,
     note:"Native Korean. The passive form of 부딪다.\nCan be physical or metaphorical.",
     example:"A: 문제에 부딪혔을 때 어떻게 해?\nB: 일단 침착하게 생각해 봐.",
     exampleSrc:"A: What do you do when you run into a problem?\nB: First, I try to think calmly.",
     funFact:"Used both literally (hitting something) and figuratively (facing a challenge). 벽에 부딪히다 means 'to hit a wall.'"},

    {type:"fb",
     s:"어려운 현실에 {1} 포기하지 마세요.",
     a:["부딪혀도"],
     opts:["부딪혀도","부러져도","부서져도","부담해도"],
     hint:"Which verb means to collide with or face head-on, used here about confronting difficult reality?",
     sSrc:"Even if you {1} difficult reality, do not give up."},

    {type:"teach", trg:"부러워하다", src:"to envy, to be jealous of", pos:"verb", gender:null,
     note:"부럽다 (envious) + 워하다 (to feel).\nExpressing envy toward others.",
     example:"A: 다른 사람을 부러워하지 마.\nB: 알아, 나도 잘하고 있잖아.",
     exampleSrc:"A: Do not envy other people.\nB: I know, I am doing well too.",
     funFact:"Korean distinguishes 부럽다 (feeling envious, adjective) from 부러워하다 (showing/expressing envy, verb)."},

    {type:"teach", trg:"부러지다", src:"to break, to snap", pos:"verb", gender:null,
     note:"Native Korean. Intransitive form.\nSomething breaks on its own.",
     example:"A: 다리가 부러졌대?\nB: 응, 스키 타다가 부러졌어.",
     exampleSrc:"A: I heard your leg broke?\nB: Yes, it broke while skiing.",
     funFact:"Korean distinguishes 부러지다 (something breaks by itself) from 부수다 (someone breaks something)."},

    {type:"teach", trg:"부문", src:"sector, field, category", pos:"noun", gender:null,
     note:"Sino-Korean. 部 (part) + 門 (gate/field).\nA division or area of activity.",
     example:"A: 어떤 부문에서 일하세요?\nB: IT 부문에서 일하고 있어요.",
     exampleSrc:"A: Which sector do you work in?\nB: I work in the IT sector.",
     funFact:"Often seen in awards: 연기 부문 최우수상 (Best Acting Category Award)."},

    {type:"teach", trg:"부분적", src:"partial", pos:"noun", gender:null,
     note:"Sino-Korean. 部分 (part) + 的.\nDescribes something incomplete or only covering a portion.",
     example:"A: 문제가 해결됐어?\nB: 부분적으로만 해결됐어.",
     exampleSrc:"A: Was the problem solved?\nB: It was only partially solved.",
     funFact:"The adverb form 부분적으로 (partially) is extremely common in news and academic writing."},

    {type:"teach", trg:"부상", src:"injury, wound", pos:"noun", gender:null,
     note:"Sino-Korean. 負 (bear) + 傷 (wound).\nA physical injury.",
     example:"A: 부상이 심해?\nB: 아니, 가벼운 부상이야.",
     exampleSrc:"A: Is the injury serious?\nB: No, it is a minor injury.",
     funFact:"In sports news, 부상 선수 (injured player) is a headline staple. Note: 부상 can also mean 'rising' in a different context."},

    {type:"mc",
     q:"경기 중 선수가 다쳤을 때 뉴스에서 자주 쓰는 말은?",
     opts:["부상을 입었다","부담을 입었다","부정을 입었다","부재를 입었다"],
     ans:"부상을 입었다",
     hint:"Which noun means injury or wound? The verb 입다 here means 'to suffer' or 'to receive.'"},

    {type:"teach", trg:"부서", src:"department, division", pos:"noun", gender:null,
     note:"Sino-Korean. 部 (part) + 署 (office).\nA workplace department.",
     example:"A: 어느 부서에 소속이에요?\nB: 마케팅 부서에 있어요.",
     exampleSrc:"A: Which department do you belong to?\nB: I am in the marketing department.",
     funFact:"Korean companies often have a 기획부서 (planning department), which is one of the most prestigious."},

    {type:"teach", trg:"부서지다", src:"to shatter, to break apart", pos:"verb", gender:null,
     note:"부서 (breaking) + 지다 (become).\nSomething shattering into pieces.",
     example:"A: 컵이 바닥에 떨어져서 부서졌어.\nB: 다치진 않았어?",
     exampleSrc:"A: The cup fell on the floor and shattered.\nB: You did not get hurt, did you?",
     funFact:"부서지다 implies shattering into many pieces, while 부러지다 implies a clean break or snap."},

    {type:"teach", trg:"부위", src:"part, area (of body or meat)", pos:"noun", gender:null,
     note:"Sino-Korean. 部 (part) + 位 (position).\nA specific section of something.",
     example:"A: 어느 부위가 아프세요?\nB: 오른쪽 어깨 부위가 아파요.",
     exampleSrc:"A: Which area hurts?\nB: The right shoulder area hurts.",
     funFact:"At Korean BBQ restaurants, you order by 부위: 삼겹살 (pork belly), 갈비 (ribs), 목살 (pork neck)."},

    {type:"teach", trg:"부자", src:"rich person, wealthy person", pos:"noun", gender:null,
     note:"Sino-Korean. 富 (wealth) + 者 (person).\nSomeone who has wealth.",
     example:"A: 부자가 되고 싶어?\nB: 돈보다 행복이 더 중요해.",
     exampleSrc:"A: Do you want to become rich?\nB: Happiness is more important than money.",
     funFact:"부자 also means 'father and son' when written with different Hanja (父子). Context tells you which meaning."},

    {type:"teach", trg:"부잣집", src:"wealthy household", pos:"noun", gender:null,
     note:"부자 (rich person) + 집 (house).\nA home of wealthy people.",
     example:"A: 그 동네는 부잣집이 많아.\nB: 맞아, 큰 집들이 많더라.",
     exampleSrc:"A: That neighborhood has many wealthy households.\nB: Right, there were many big houses.",
     funFact:"In Korean dramas, the contrast between 부잣집 and ordinary families is a classic storytelling device."},

    {type:"teach", trg:"부재", src:"absence", pos:"noun", gender:null,
     note:"Sino-Korean. 不 (not) + 在 (exist).\nThe state of not being present.",
     example:"A: 부장님이 부재 중이십니다.\nB: 그러면 나중에 다시 올게요.",
     exampleSrc:"A: The department head is currently absent.\nB: Then I will come back later.",
     funFact:"Offices use 부재중 (absent) on phone screens when missing a call, short for 부재 중."},

    {type:"teach", trg:"부정", src:"injustice, corruption, denial", pos:"noun", gender:null,
     note:"Sino-Korean. 不 (not) + 正 (right).\nSomething that is not right or fair.",
     example:"A: 부정 행위가 발견됐어.\nB: 어떤 종류의 부정이야?",
     exampleSrc:"A: Corrupt behavior was discovered.\nB: What kind of corruption is it?",
     funFact:"부정 has two distinct meanings: corruption (不正) and denial (否定). Context determines which."},

    {type:"teach", trg:"부정적", src:"negative (in attitude or outlook)", pos:"noun", gender:null,
     note:"부정 (denial) + 적 (suffix for adjective-like nouns).\nHaving a negative viewpoint.",
     example:"A: 왜 그렇게 부정적이야?\nB: 부정적인 게 아니라 현실적인 거야.",
     exampleSrc:"A: Why are you so negative?\nB: I am not being negative, I am being realistic.",
     funFact:"The opposite is 긍정적 (positive). These two words are essential for describing attitudes in Korean."},

    {type:"teach", trg:"부정하다", src:"to deny, to negate", pos:"verb", gender:null,
     note:"부정 + 하다 (to do).\nTo reject or deny something.",
     example:"A: 자기 잘못을 부정하면 안 돼.\nB: 맞아, 인정하는 게 먼저야.",
     exampleSrc:"A: You should not deny your own mistakes.\nB: Right, admitting them comes first.",
     funFact:"In grammar, 부정문 means a negative sentence. Korean has two negation patterns: 안 and -지 않다."},

    {type:"fb",
     s:"그 사람은 항상 {1} 태도를 보여서 걱정이야.",
     a:["부정적인"],
     opts:["부정적인","본격적인","부분적인","부지런한"],
     hint:"Which word describes someone who always has a pessimistic or negative viewpoint?",
     sSrc:"I am worried because that person always shows a {1} attitude."},

    {type:"teach", trg:"부지런하다", src:"to be diligent, to be hardworking", pos:"adj", gender:null,
     note:"Native Korean adjective.\nDescribes someone who works steadily and actively.",
     example:"A: 그 학생은 정말 부지런하다.\nB: 맞아, 항상 일찍 와서 공부해.",
     exampleSrc:"A: That student is truly diligent.\nB: Right, they always come early and study.",
     funFact:"Korean culture highly values 부지런함 (diligence). The proverb 부지런한 새가 벌레를 잡는다 mirrors the English 'early bird catches the worm.'"},

    {type:"teach", trg:"부지런히", src:"diligently, industriously", pos:"adv", gender:null,
     note:"부지런하다 + 히 (adverb suffix).\nDoing something with steady effort.",
     example:"A: 부지런히 일하면 성공할 수 있어.\nB: 나도 더 열심히 해야겠다.",
     exampleSrc:"A: If you work diligently, you can succeed.\nB: I should work harder too.",
     funFact:"The -히 adverb suffix is one of the most productive in Korean: 조용히, 빠르게, 부지런히."},

    {type:"mc",
     q:"부지런한 사람의 특징으로 가장 적절한 것은?",
     opts:["일찍 일어나서 열심히 일한다","다른 사람을 부러워한다","부정적인 태도를 가진다","부담을 느끼지 않는다"],
     ans:"일찍 일어나서 열심히 일한다",
     hint:"Diligent people are known for getting up early and working hard. Which answer describes that?"},

    {type:"match", pairs:[
      {trg:"부담", src:"burden"},
      {trg:"부상", src:"injury"},
      {trg:"부재", src:"absence"},
      {trg:"부지런히", src:"diligently"}
    ]}
  ]
};
export default LESSON_2;
