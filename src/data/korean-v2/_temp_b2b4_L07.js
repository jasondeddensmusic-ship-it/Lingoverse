// Korean B2 — Batch 4, Lesson 7: Media and Connection
// Words: 매체, 맺다, 머리말, 머리칼, 머물다, 먹고살다, 먹이, 먹히다, 멀어지다, 멋, 멋있다, 멋지다, 멍멍, 멎다, 메다, 메모, 메우다, 메일, 면, 면담

const LESSON_7 = {
  id:"kov2_b2b4_l7", title:"매체와 멋", icon:"📱", xp:15, board:true,
  steps:[
    {type:"intro", title:"매체와 멋",
     desc:"Learn words about media, appearance, eating, and distance. This lesson includes both formal vocabulary for writing and casual words for daily conversations.",
     goals:["Master 20 words about media, style, and basic actions","Understand passive/causative verb pairs: 먹다/먹이/먹히다","Use words for appearance and coolness in natural Korean"]},

    {type:"teach", trg:"매체", src:"medium, media channel", pos:"noun", gender:null,
     note:"Sino-Korean. 媒 (intermediary) + 體 (body).\nA channel for conveying information.",
     example:"A: 요즘 어떤 매체를 가장 많이 봐요?\nB: 유튜브를 제일 많이 봐요.",
     exampleSrc:"A: What media channel do you watch most these days?\nB: I watch YouTube the most.",
     funFact:"From Hanja 媒體. 대중 매체 (mass media), 사회적 매체 (social media) are common formal expressions."},

    {type:"teach", trg:"맺다", src:"to form, to bear (fruit), to conclude", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo create a connection or bring to conclusion.",
     example:"A: 좋은 관계를 맺는 게 중요해요.\nB: 맞아요, 신뢰가 기본이죠.",
     exampleSrc:"A: Forming good relationships is important.\nB: Right, trust is the foundation.",
     funFact:"Very versatile: 열매를 맺다 (bear fruit), 인연을 맺다 (form a bond), 계약을 맺다 (conclude a contract)."},

    {type:"teach", trg:"머리말", src:"preface, foreword", pos:"noun", gender:null,
     note:"머리 (head/beginning) + 말 (words).\nOpening words of a book or document.",
     example:"A: 이 책의 머리말을 읽어 봤어?\nB: 응, 작가의 집필 동기가 나와 있어.",
     exampleSrc:"A: Have you read the preface of this book?\nB: Yes, it describes the author's motivation for writing.",
     funFact:"머리말 (head-words) is the opposite of 맺음말 (concluding words) or 꼬리말 (tail-words, epilogue)."},

    {type:"teach", trg:"머리칼", src:"hair (on the head)", pos:"noun", gender:null,
     note:"머리 (head) + 칼 (strand).\nHair strands on one's head.",
     example:"A: 바람에 머리칼이 날려.\nB: 머리끈으로 묶어.",
     exampleSrc:"A: My hair is blowing in the wind.\nB: Tie it with a hair tie.",
     funFact:"머리칼 emphasizes individual strands, while 머리카락 is the more common everyday form. Both mean head hair."},

    {type:"teach", trg:"머물다", src:"to stay, to remain, to linger", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo stay in a place temporarily.",
     example:"A: 서울에 얼마나 머물 거예요?\nB: 일주일 정도 머물 계획이에요.",
     exampleSrc:"A: How long will you stay in Seoul?\nB: I plan to stay for about a week.",
     funFact:"ㄹ-irregular verb: 머물다 becomes 머물러 (connective), 머무는 (modifying). Note the ㄹ drop before ㄴ."},

    {type:"mc",
     q:"'맺다'는 어떤 맥락에서 쓸 수 없나요?",
     opts:["음식을 맺다","관계를 맺다","열매를 맺다","계약을 맺다"],
     ans:"음식을 맺다",
     hint:"This verb is for forming connections, bearing fruit, or concluding agreements, not for eating food."},

    {type:"teach", trg:"먹고살다", src:"to make a living, to get by", pos:"verb", gender:null,
     note:"먹다 (eat) + 고 + 살다 (live).\nTo eat and live, meaning to survive financially.",
     example:"A: 요즘 먹고살기 힘들어졌어.\nB: 물가가 너무 올랐지.",
     exampleSrc:"A: It has become harder to make a living lately.\nB: Prices have gone up too much.",
     funFact:"This compound reflects Korean culture where 'eating' equals 'surviving.' 밥 먹었어? (Have you eaten?) is a greeting."},

    {type:"teach", trg:"먹이", src:"feed, food (for animals)", pos:"noun", gender:null,
     note:"먹다 (eat) + 이 (thing for).\nFood given to animals.",
     example:"A: 고양이 먹이를 사 왔어?\nB: 응, 참치맛으로 샀어.",
     exampleSrc:"A: Did you buy cat food?\nB: Yes, I bought tuna flavored.",
     funFact:"먹이 (animal food) vs. 먹이다 (to feed someone). The -이 suffix creates the 'thing' noun from the verb."},

    {type:"teach", trg:"먹히다", src:"to be eaten; to work, to be effective", pos:"verb", gender:null,
     note:"먹다 (eat) + 히다 (passive).\nBeing consumed, or an idea being accepted.",
     example:"A: 그 변명은 안 먹혀.\nB: 그러면 솔직하게 말해야지.",
     exampleSrc:"A: That excuse will not work.\nB: Then you should be honest.",
     funFact:"먹히다 as 'to work/be effective' is colloquial: 이 방법이 먹힌다 (this method works). Very common in casual speech."},

    {type:"teach", trg:"멀어지다", src:"to become distant, to drift apart", pos:"verb", gender:null,
     note:"멀다 (far) + 어지다 (become).\nGrowing farther away physically or emotionally.",
     example:"A: 졸업 후에 친구들과 멀어졌어.\nB: 가끔 연락하면 다시 가까워질 거야.",
     exampleSrc:"A: I drifted apart from friends after graduation.\nB: If you contact them sometimes, you will become close again.",
     funFact:"The -어지다 pattern marks gradual change: 가까워지다 (get closer), 멀어지다 (get farther), 좋아지다 (get better)."},

    {type:"teach", trg:"멋", src:"style, charm, flair", pos:"noun", gender:null,
     note:"Native Korean word.\nAesthetic appeal or stylishness.",
     example:"A: 이 옷에 멋이 있네!\nB: 고마워, 새로 산 거야.",
     exampleSrc:"A: This outfit has style!\nB: Thanks, I just bought it.",
     funFact:"멋 is uniquely Korean, hard to translate perfectly. It combines cool, stylish, charming, and elegant."},

    {type:"fb",
     s:"졸업 후에 옛 친구들과 점점 {1}.",
     a:["멀어졌다"],
     opts:["멀어졌다","멋있다","머물렀다","먹혔다"],
     hint:"This verb means to gradually become distant or drift apart from someone over time.",
     sSrc:"After graduation, I gradually {1} from old friends."},

    {type:"teach", trg:"멋있다", src:"to be cool, to be handsome/stylish", pos:"adj", gender:null,
     note:"멋 (style) + 있다 (to have).\nHaving attractiveness or cool appeal.",
     example:"A: 오늘 정말 멋있다!\nB: 고마워, 면접이 있어서 차려입었어.",
     exampleSrc:"A: You look really cool today!\nB: Thanks, I dressed up because I have an interview.",
     funFact:"멋있다 works for people, places, and things. 멋진 경치 (stunning scenery), 멋진 사람 (cool person)."},

    {type:"teach", trg:"멋지다", src:"to be wonderful, to be splendid", pos:"adj", gender:null,
     note:"멋 (style) + 지다 (become/have quality).\nImpressively good or admirable.",
     example:"A: 공연이 정말 멋졌어!\nB: 맞아, 감동적이었어.",
     exampleSrc:"A: The performance was truly wonderful!\nB: Right, it was moving.",
     funFact:"멋지다 is slightly more emphatic than 멋있다. 멋지다 implies admiration, 멋있다 is more casual 'cool.'"},

    {type:"teach", trg:"멍멍", src:"woof woof, bow wow", pos:"adv", gender:null,
     note:"Korean onomatopoeia.\nThe sound a dog makes.",
     example:"A: 강아지가 멍멍 짖고 있어.\nB: 배가 고픈가 봐.",
     exampleSrc:"A: The puppy is barking woof woof.\nB: It must be hungry.",
     funFact:"Animal sounds differ across languages. Korean dogs say 멍멍, cats say 야옹, roosters say 꼬끼오."},

    {type:"teach", trg:"멎다", src:"to stop, to cease", pos:"verb", gender:null,
     note:"Native Korean verb.\nFor rain, pain, or crying to stop naturally.",
     example:"A: 드디어 비가 멎었어!\nB: 우산 없이 나갈 수 있겠다.",
     exampleSrc:"A: The rain has finally stopped!\nB: We can go out without an umbrella.",
     funFact:"멎다 is specifically for things that stop on their own (rain, tears, bleeding). Not used for machines or people."},

    {type:"teach", trg:"메다", src:"to carry on the shoulder", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo hoist something onto your shoulder.",
     example:"A: 배낭을 메고 산에 갈 거야.\nB: 무겁지 않아? 짐을 줄여.",
     exampleSrc:"A: I am going to carry a backpack and go to the mountain.\nB: Is it not heavy? Reduce the load.",
     funFact:"메다 is specifically for shoulders. 지다 (carry on back), 들다 (carry in hand), 이다 (carry on head) each have their spot."},

    {type:"teach", trg:"메모", src:"memo, note", pos:"noun", gender:null,
     note:"Loanword from English 'memo.'\nA brief written note.",
     example:"A: 중요한 건 메모해 둬.\nB: 핸드폰에 바로 적을게.",
     exampleSrc:"A: Write down important things as memos.\nB: I will note it on my phone right away.",
     funFact:"메모지 (memo pad) and 메모장 (notepad app) are essential items for Korean students and workers."},

    {type:"teach", trg:"메우다", src:"to fill in, to patch up", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo fill a gap or hole.",
     example:"A: 벽에 난 구멍을 메워야 해.\nB: 시멘트로 메우면 되겠다.",
     exampleSrc:"A: We need to fill the hole in the wall.\nB: We can fill it with cement.",
     funFact:"Used figuratively too: 부족한 부분을 메우다 (fill in the lacking parts), 공백을 메우다 (fill a gap)."},

    {type:"mc",
     q:"'멎다'는 무엇이 멈출 때 쓰나요?",
     opts:["비나 눈물처럼 자연히 그치는 것","기계가 작동을 멈추는 것","사람이 걸음을 멈추는 것","차가 정지하는 것"],
     ans:"비나 눈물처럼 자연히 그치는 것",
     hint:"This verb is reserved for things that stop naturally, like rain stopping or tears ceasing."},

    {type:"teach", trg:"메일", src:"email", pos:"noun", gender:null,
     note:"Loanword from English 'mail.'\nElectronic mail, usually short for 이메일.",
     example:"A: 메일 확인했어요?\nB: 아직이요, 지금 바로 확인할게요.",
     exampleSrc:"A: Did you check your email?\nB: Not yet, I will check right now.",
     funFact:"Koreans use both 메일 and 이메일. In business, 메일 주소 (email address) is essential contact info."},

    {type:"teach", trg:"면", src:"side, aspect; noodles; cotton", pos:"noun", gender:null,
     note:"Multiple Hanja: 面 (face/side), 麵 (noodles), 綿 (cotton).\nContext determines meaning.",
     example:"A: 이 문제의 긍정적인 면을 봐야 해.\nB: 맞아, 나쁜 것만 보면 안 되지.",
     exampleSrc:"A: We need to look at the positive side of this problem.\nB: Right, we should not only see the bad.",
     funFact:"Three different Hanja share this sound: 면 as 'side/face' (面), 'noodles' (麵), and 'cotton' (綿)."},

    {type:"teach", trg:"면담", src:"interview, meeting, consultation", pos:"noun", gender:null,
     note:"Sino-Korean. 面 (face) + 談 (talk).\nA face-to-face conversation.",
     example:"A: 담임 선생님과 면담이 있어요.\nB: 무슨 이야기를 하실 건데요?",
     exampleSrc:"A: I have a meeting with the homeroom teacher.\nB: What will you talk about?",
     funFact:"From Hanja 面談. More formal than 상담 (counseling). Used in schools (학부모 면담, parent-teacher meeting)."},

    {type:"fb",
     s:"배낭을 어깨에 {1}고 출발했다.",
     a:["메"],
     opts:["메","매","메모","면"],
     hint:"This native Korean verb means to carry something on one's shoulder.",
     sSrc:"I {1} the backpack on my shoulder and set off."},

    {type:"match", pairs:[
      {trg:"매체", src:"media channel"},
      {trg:"먹고살다", src:"to make a living"},
      {trg:"멋지다", src:"to be wonderful"},
      {trg:"면담", src:"interview, meeting"}
    ]}
  ]
};
export default LESSON_7;
