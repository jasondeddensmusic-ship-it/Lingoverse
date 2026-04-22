// Korean B2. Batch 4, Lesson 6: Speech and Taste
// Words: 말투, 맘, 맘대로, 맛보다, 망설이다, 망원경, 망치다, 망하다, 맞은편, 맞이하다, 매, 매너, 매다, 매달, 매달다, 매달리다, 매번, 매스컴, 매장, 매주

const LESSON_6 = {
  id:"kov2_b2b4_l6", title:"말투와 매일", icon:"🗣️", xp:15, board:true,
  steps:[
    {type:"intro", title:"말투와 매일",
     desc:"Learn words about speech style, hesitation, ruin, and regular patterns. This lesson covers everyday expressions used in conversations about habits and media.",
     goals:["Master 20 words about speech, hesitation, and regular routines","Understand the 매- frequency adverbs (every month, every week, every time)","Use verbs for welcoming, tying, and ruining in natural contexts"]},

    {type:"teach", trg:"말투", src:"way of speaking, speech style", pos:"noun", gender:null,
     note:"말 (speech) + 투 (manner/style).\nHow someone speaks, their tone and style.",
     example:"A: 그 사람 말투가 좀 거칠어.\nB: 성격이 그런 거지, 나쁜 사람은 아니야.",
     exampleSrc:"A: That person's way of speaking is a bit rough.\nB: That is just their personality, they are not a bad person.",
     funFact:"Korean is very sensitive to 말투. Regional dialects (사투리) have distinctive 말투 that instantly reveal one's hometown."},

    {type:"teach", trg:"맘", src:"heart, mind (casual form)", pos:"noun", gender:null,
     note:"Contracted form of 마음 (heart/mind).\nUsed in casual, everyday speech.",
     example:"A: 맘에 드는 옷 찾았어?\nB: 아직 못 찾았어, 좀 더 볼게.",
     exampleSrc:"A: Did you find clothes you like?\nB: Not yet, I will look a bit more.",
     funFact:"맘 is spoken Korean for 마음. Used in expressions like 맘에 들다 (to like), 맘이 편하다 (to feel at ease)."},

    {type:"teach", trg:"맘대로", src:"as one pleases, at will", pos:"adv", gender:null,
     note:"맘 (heart) + 대로 (as, according to).\nDoing whatever one wants.",
     example:"A: 네 맘대로 해.\nB: 진짜? 그러면 피자 시킬게!",
     exampleSrc:"A: Do as you please.\nB: Really? Then I will order pizza!",
     funFact:"맘대로 can sound permissive or frustrated depending on tone: 네 맘대로 해! (Do whatever you want! / Fine, I give up!)."},

    {type:"teach", trg:"맛보다", src:"to taste, to sample", pos:"verb", gender:null,
     note:"맛 (taste) + 보다 (to see/try).\nTo try the flavor of food.",
     example:"A: 이 음식 좀 맛봐 봐.\nB: 음, 간이 딱 맞아!",
     exampleSrc:"A: Try tasting this food.\nB: Mm, the seasoning is just right!",
     funFact:"보다 (see) is used as 'to try' in many compounds: 맛보다 (taste), 입어 보다 (try on), 써 보다 (try using)."},

    {type:"teach", trg:"망설이다", src:"to hesitate, to waver", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo be unable to decide, going back and forth.",
     example:"A: 왜 망설이고 있어? 빨리 결정해.\nB: 둘 다 좋아서 고르기 힘들어.",
     exampleSrc:"A: Why are you hesitating? Decide quickly.\nB: Both are good, so it is hard to choose.",
     funFact:"Also appears as 머뭇거리다 (to hesitate, fidget). 망설이다 focuses more on mental indecision."},

    {type:"mc",
     q:"'맘대로'는 어떤 의미인가요?",
     opts:["원하는 대로, 마음대로","천천히, 조심해서","함께, 같이","정확하게, 틀림없이"],
     ans:"원하는 대로, 마음대로",
     hint:"This is a casual contraction of 마음대로, meaning doing things according to your heart's desire."},

    {type:"teach", trg:"망원경", src:"telescope", pos:"noun", gender:null,
     note:"Sino-Korean. 望 (look) + 遠 (far) + 鏡 (mirror/lens).\nA device for seeing distant things.",
     example:"A: 망원경으로 달을 봤어?\nB: 응, 크레이터가 보이더라!",
     exampleSrc:"A: Did you look at the moon through the telescope?\nB: Yes, I could see the craters!",
     funFact:"From Hanja 望遠鏡. Literally 'look-far-mirror.' 현미경 (microscope) is 'appear-tiny-mirror.'"},

    {type:"teach", trg:"망치다", src:"to ruin, to mess up", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo spoil or destroy something.",
     example:"A: 비가 와서 소풍을 망쳤어.\nB: 다음에 다시 가자.",
     exampleSrc:"A: The rain ruined our picnic.\nB: Let us go again next time.",
     funFact:"망치다 is the active form. There is also the noun 망치 (hammer), completely unrelated in meaning."},

    {type:"teach", trg:"망하다", src:"to go bankrupt, to fail completely", pos:"verb", gender:null,
     note:"Sino-Korean. 亡 (perish) + 하다.\nTotal failure or collapse.",
     example:"A: 그 가게가 결국 망했대.\nB: 위치가 안 좋아서 그랬나 봐.",
     exampleSrc:"A: I heard that store eventually went bankrupt.\nB: It was probably because of the bad location.",
     funFact:"From Hanja 亡. In student slang, 시험 망했어 (I bombed the exam) is one of the most common expressions."},

    {type:"teach", trg:"맞은편", src:"the opposite side, across from", pos:"noun", gender:null,
     note:"맞다 (to face) + 은 + 편 (side).\nDirectly facing across from something.",
     example:"A: 은행이 어디예요?\nB: 우체국 맞은편에 있어요.",
     exampleSrc:"A: Where is the bank?\nB: It is across from the post office.",
     funFact:"맞은편 implies directly facing, while 건너편 is more general 'other side.' Both are used for directions."},

    {type:"teach", trg:"맞이하다", src:"to greet, to welcome, to face", pos:"verb", gender:null,
     note:"맞이 (greeting) + 하다 (to do).\nTo welcome someone or a new period.",
     example:"A: 새해를 맞이하여 인사드립니다.\nB: 새해 복 많이 받으세요!",
     exampleSrc:"A: I greet you on the occasion of the new year.\nB: Happy New Year!",
     funFact:"맞이하다 is formal. Used for welcoming seasons (봄을 맞이하다) and milestones (100주년을 맞이하다)."},

    {type:"fb",
     s:"비 때문에 야외 행사를 {1} 버렸다.",
     a:["망쳐"],
     opts:["망쳐","망원경","맞이하여","맛보며"],
     hint:"This native Korean verb means to ruin or mess up something that was planned.",
     sSrc:"The outdoor event was {1} because of the rain."},

    {type:"teach", trg:"매", src:"a hawk; every (prefix); a whip/blow", pos:"noun", gender:null,
     note:"Multiple meanings depending on context.\n매 (鷹, hawk) or 매 (每, every) or 매 (beating).",
     example:"A: 매가 하늘을 날고 있어!\nB: 와, 정말 멋있다!",
     exampleSrc:"A: A hawk is flying in the sky!\nB: Wow, that is really cool!",
     funFact:"매 has three common meanings: the bird of prey (鷹), the prefix 'every' (每), and a beating/blow. Context is key."},

    {type:"teach", trg:"매너", src:"manners, etiquette", pos:"noun", gender:null,
     note:"Loanword from English 'manner.'\nSocial etiquette and politeness.",
     example:"A: 그 사람은 매너가 좋아.\nB: 맞아, 항상 예의 바르지.",
     exampleSrc:"A: That person has good manners.\nB: Right, they are always polite.",
     funFact:"In Korean dating culture, 매너 is highly valued. 매너남 (mannerly man) and 매너녀 (mannerly woman) are compliments."},

    {type:"teach", trg:"매다", src:"to tie, to fasten", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo bind or tie something securely.",
     example:"A: 신발 끈을 매야지.\nB: 아, 풀어졌네. 고마워!",
     exampleSrc:"A: You should tie your shoelaces.\nB: Oh, they came undone. Thanks!",
     funFact:"매다 vs. 묶다: 매다 is for tying knots or laces, 묶다 is for binding/bundling items together."},

    {type:"teach", trg:"매달", src:"every month", pos:"adv", gender:null,
     note:"매 (每, every) + 달 (month).\nOccurring once a month.",
     example:"A: 매달 저축을 하고 있어?\nB: 응, 월급의 20%를 저축해.",
     exampleSrc:"A: Are you saving money every month?\nB: Yes, I save 20% of my salary.",
     funFact:"Part of the 매- frequency set: 매일 (daily), 매주 (weekly), 매달 (monthly), 매년 (yearly)."},

    {type:"teach", trg:"매달다", src:"to hang, to suspend", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo attach something so it hangs from above.",
     example:"A: 크리스마스 장식을 천장에 매달자.\nB: 좋아, 별 장식부터 달자.",
     exampleSrc:"A: Let us hang Christmas decorations from the ceiling.\nB: OK, let us start with the star ornament.",
     funFact:"매달다 (active, to hang something) vs. 매달리다 (passive/reflexive, to cling to or hang from)."},

    {type:"teach", trg:"매달리다", src:"to cling to, to hang from", pos:"verb", gender:null,
     note:"매달다 (hang) + 리다 (passive/reflexive).\nTo hang from something or desperately cling.",
     example:"A: 아이가 엄마 다리에 매달려 있어.\nB: 엄마가 가지 말라고 하는 거야.",
     exampleSrc:"A: The child is clinging to their mother's leg.\nB: They are telling their mom not to go.",
     funFact:"Also used figuratively: 일에 매달리다 (to be devoted to work), 과거에 매달리다 (to cling to the past)."},

    {type:"teach", trg:"매번", src:"every time, each time", pos:"adv", gender:null,
     note:"매 (每, every) + 번 (time/turn).\nAt every single occasion.",
     example:"A: 매번 같은 실수를 반복하네.\nB: 다음부터는 조심할게.",
     exampleSrc:"A: You repeat the same mistake every time.\nB: I will be careful from next time.",
     funFact:"매번 expresses mild frustration when used with negative patterns. 매번 늦어 (late every time)."},

    {type:"mc",
     q:"'매달리다'의 비유적 의미는?",
     opts:["빠르게 달리다","간절히 집착하다","높이 올라가다","조용히 기다리다"],
     ans:"간절히 집착하다",
     hint:"Beyond the physical meaning of hanging, this verb figuratively means desperately holding on to something."},

    {type:"teach", trg:"매스컴", src:"mass media, mass communication", pos:"noun", gender:null,
     note:"Loanword from English 'mass communication.'\nShortened to 매스컴 in Korean.",
     example:"A: 매스컴에서 그 사건을 크게 다뤘어.\nB: 뉴스마다 나오더라.",
     exampleSrc:"A: The mass media covered that incident extensively.\nB: It was on every news channel.",
     funFact:"매스컴 is a uniquely Korean abbreviation. Native English speakers would not recognize it without context."},

    {type:"teach", trg:"매장", src:"store, shop; burial", pos:"noun", gender:null,
     note:"Two Hanja sources.\n賣場 (sell + place) = store. 埋葬 (bury + inter) = burial.",
     example:"A: 새로 생긴 매장에 가 봤어?\nB: 응, 물건이 다양하더라.",
     exampleSrc:"A: Have you been to the newly opened store?\nB: Yes, they had a good variety of products.",
     funFact:"Same pronunciation, different Hanja: 매장 as store (賣場) is far more common in daily life than burial (埋葬)."},

    {type:"teach", trg:"매주", src:"every week", pos:"adv", gender:null,
     note:"매 (每, every) + 주 (week).\nOccurring once a week.",
     example:"A: 매주 월요일에 회의가 있어요.\nB: 이번 주 안건은 뭐예요?",
     exampleSrc:"A: There is a meeting every Monday.\nB: What is on the agenda this week?",
     funFact:"매주 is interchangeable with 주마다 (every week), but 매주 sounds slightly more formal."},

    {type:"fb",
     s:"{1} 같은 식당에서 점심을 먹어요.",
     a:["매주"],
     opts:["매주","매번","매달","매장"],
     hint:"This adverb means 'every week' and describes a weekly routine or habit.",
     sSrc:"I eat lunch at the same restaurant {1}."},

    {type:"match", pairs:[
      {trg:"말투", src:"way of speaking"},
      {trg:"망설이다", src:"to hesitate"},
      {trg:"망하다", src:"to go bankrupt"},
      {trg:"맞이하다", src:"to welcome"}
    ]}
  ]
};
export default LESSON_6;
