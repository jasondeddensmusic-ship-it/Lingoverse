// Korean B2 — Batch 2, Lesson 17: Creativity and Uniqueness
// Words: 독창적, 독특하다, 독하다, 돌려주다, 돌멩이, 돌아다니다, 동, 동그라미, 동그랗다, 동부, 동서, 동서남북, 동아리, 동양, 동양인, 동의, 동의하다, 동일하다, 동작, 동전

const LESSON_17 = {
  id:"kov2_b2b2_l17", title:"동양과 동의", icon:"🌏", xp:15, board:true,
  steps:[
    {type:"intro", title:"동양과 동의",
     desc:"Learn words about the East, agreement, and uniqueness. These words cover cultural identity, social consensus, and creative expression.",
     goals:["Master 20 words about direction, agreement, and identity","Understand 동 (east/same/move) in various compounds","Build vocabulary for cultural and social discussion"]},

    {type:"teach", trg:"독창적", src:"original, creative", pos:"noun", gender:null,
     note:"Sino-Korean. 獨 (alone) + 創 (create) + 的.\nCreating something uniquely one's own.",
     example:"A: 이 디자인이 정말 독창적이에요.\nB: 다른 곳에서는 볼 수 없죠.",
     exampleSrc:"A: This design is really original.\nB: You cannot see it anywhere else.",
     funFact:"독창적 implies positive originality. It is stronger than 창의적 (creative) because it emphasizes uniqueness."},

    {type:"teach", trg:"독특하다", src:"to be unique, distinctive", pos:"adj", gender:null,
     note:"Sino-Korean. 獨 (alone) + 特 (special) + 하다.\nHaving qualities found nowhere else.",
     example:"A: 이 식당의 분위기가 독특해요.\nB: 인테리어가 예술적이에요.",
     exampleSrc:"A: This restaurant's atmosphere is unique.\nB: The interior is artistic.",
     funFact:"독특하다 is neutral to positive. It simply means one-of-a-kind. Not as evaluative as 이상하다 (strange)."},

    {type:"teach", trg:"독하다", src:"to be harsh, fierce, determined; toxic", pos:"adj", gender:null,
     note:"Sino-Korean. 毒 (poison) + 하다.\nPhysically toxic, or figuratively fierce/ruthless.",
     example:"A: 마음을 독하게 먹었어요.\nB: 이번에는 꼭 성공할 거예요.",
     exampleSrc:"A: I steeled my heart fiercely.\nB: This time you will surely succeed.",
     funFact:"마음을 독하게 먹다 (eat one's heart fiercely) means to steel oneself with ruthless determination."},

    {type:"teach", trg:"돌려주다", src:"to return, to give back", pos:"verb", gender:null,
     note:"돌리다 (turn/return) + 어 + 주다 (give).\nTo return something to its owner.",
     example:"A: 빌린 책을 돌려줘야 해요.\nB: 내일까지 돌려줄게요.",
     exampleSrc:"A: I need to return the borrowed book.\nB: I will return it by tomorrow.",
     funFact:"돌려주다 is for returning borrowed items. 환불하다 (refund) is for returning purchased goods with money back."},

    {type:"teach", trg:"돌멩이", src:"small stone, pebble", pos:"noun", gender:null,
     note:"돌 (stone) + 멩이 (small piece).\nA small rock you might find on the ground.",
     example:"A: 아이들이 돌멩이를 던지고 놀아요.\nB: 위험하니까 조심하라고 해요.",
     exampleSrc:"A: The children are playing by throwing pebbles.\nB: Tell them to be careful since it is dangerous.",
     funFact:"돌멩이 is endearingly small. 돌 (stone) < 돌멩이 (pebble) < 바위 (boulder). Size scale for rocks."},

    {type:"teach", trg:"돌아다니다", src:"to walk around, to roam", pos:"verb", gender:null,
     note:"돌다 (turn) + 아 + 다니다 (go around).\nTo move from place to place without fixed direction.",
     example:"A: 시내를 돌아다녔어요.\nB: 뭐 재미있는 거 발견했어요?",
     exampleSrc:"A: I walked around downtown.\nB: Did you find anything interesting?",
     funFact:"돌아다니다 implies casual, undirected movement. 여기저기 돌아다니다 (wander here and there) is very common."},

    {type:"mc",
     q:"'독특하다'와 '독창적'의 차이는?",
     opts:["독특하다는 남다르고, 독창적은 새로 만든 것이다","둘 다 같은 뜻이다","독창적이 더 부정적이다","독특하다가 더 공식적이다"],
     ans:"독특하다는 남다르고, 독창적은 새로 만든 것이다",
     hint:"One means being different/unique, the other specifically emphasizes creating something new and original."},

    {type:"teach", trg:"동", src:"neighborhood district; east; same", pos:"noun", gender:null,
     note:"Multiple Hanja: 洞 (neighborhood), 東 (east), 同 (same).\nContext determines which meaning.",
     example:"A: 몇 동에 사세요?\nB: 103동이에요.",
     exampleSrc:"A: Which building number do you live in?\nB: Building 103.",
     funFact:"In Korean apartments, 동 means building number. In addresses, 동 means neighborhood. 강남구 역삼동."},

    {type:"teach", trg:"동그라미", src:"circle (shape)", pos:"noun", gender:null,
     note:"동그랗다 (round) + 이 (thing).\nA circular shape or mark.",
     example:"A: 정답에 동그라미를 그리세요.\nB: 이 문제 답은 3번이에요.",
     exampleSrc:"A: Draw a circle around the correct answer.\nB: The answer to this problem is number 3.",
     funFact:"In Korean schools, O (동그라미) means correct and X means wrong. Opposite of some Western marking systems."},

    {type:"teach", trg:"동그랗다", src:"to be round, circular", pos:"adj", gender:null,
     note:"Native Korean descriptive.\nPerfectly round in shape.",
     example:"A: 달이 동그랗게 떠 있어요.\nB: 보름달이 참 예뻐요.",
     exampleSrc:"A: The moon is hanging round in the sky.\nB: The full moon is really pretty.",
     funFact:"동그랗다 is specifically about circular shapes. 둥글다 is the more common, general word for 'round.'"},

    {type:"teach", trg:"동부", src:"eastern part, the East", pos:"noun", gender:null,
     note:"Sino-Korean. 東 (east) + 部 (part).\nThe eastern region of a country or area.",
     example:"A: 미국 동부에 가 본 적 있어요?\nB: 뉴욕에 한 번 갔어요.",
     exampleSrc:"A: Have you been to the eastern United States?\nB: I went to New York once.",
     funFact:"동부 pairs with 서부 (west), 남부 (south), 북부 (north). The four directional regions."},

    {type:"teach", trg:"동서", src:"east and west; in-law (brother/sister)", pos:"noun", gender:null,
     note:"Sino-Korean. 東 (east) + 西 (west).\nCardinal direction pair, or a specific family relationship.",
     example:"A: 동서 문화의 차이가 크죠?\nB: 네, 하지만 요즘은 많이 가까워졌어요.",
     exampleSrc:"A: The cultural differences between East and West are big, right?\nB: Yes, but they have gotten much closer these days.",
     funFact:"동서 as a family term means the spouse of your spouse's sibling. Korean kinship terms are highly specific."},

    {type:"fb",
     s:"이 디자인은 정말 {1}이에요.",
     a:["독창적"],
     opts:["독창적","독특","독하다","동일"],
     hint:"Describing something that was created in a uniquely original way, not seen elsewhere.",
     sSrc:"This design is really {1}."},

    {type:"teach", trg:"동서남북", src:"all four directions, everywhere", pos:"noun", gender:null,
     note:"東 (east) + 西 (west) + 南 (south) + 北 (north).\nAll cardinal directions combined.",
     example:"A: 동서남북 어디든 갈 수 있어요.\nB: 자유롭게 여행하고 싶어요.",
     exampleSrc:"A: You can go in any direction.\nB: I want to travel freely.",
     funFact:"Korean orders directions differently from English: East-West-South-North instead of North-South-East-West."},

    {type:"teach", trg:"동아리", src:"club, group (school/hobby)", pos:"noun", gender:null,
     note:"Native Korean. A group of people\nwith shared interests.",
     example:"A: 대학교에서 어떤 동아리에 가입했어요?\nB: 사진 동아리에 들어갔어요.",
     exampleSrc:"A: What club did you join at university?\nB: I joined the photography club.",
     funFact:"동아리 culture is huge in Korean universities. It is the primary way students make friends and build networks."},

    {type:"teach", trg:"동양", src:"the East, the Orient, Asia", pos:"noun", gender:null,
     note:"Sino-Korean. 東 (east) + 洋 (ocean).\nThe Eastern world, primarily East Asia.",
     example:"A: 동양 철학에 관심이 있어요.\nB: 유교와 불교를 공부하고 있어요?",
     exampleSrc:"A: I am interested in Eastern philosophy.\nB: Are you studying Confucianism and Buddhism?",
     funFact:"동양 vs 서양 (the West). This East-West dichotomy is central to Korean cultural discourse and identity."},

    {type:"teach", trg:"동양인", src:"East Asian person, Asian person", pos:"noun", gender:null,
     note:"동양 (the East) + 인 (person).\nA person from East Asian countries.",
     example:"A: 동양인에 대한 편견이 줄고 있어요.\nB: 더 나아져야 할 부분도 있죠.",
     exampleSrc:"A: Prejudice against Asians is decreasing.\nB: There are still areas that need improvement.",
     funFact:"동양인 specifically refers to East Asians. 아시아인 (Asian) is broader and more commonly used today."},

    {type:"teach", trg:"동의", src:"agreement, consent", pos:"noun", gender:null,
     note:"Sino-Korean. 同 (same) + 意 (meaning/will).\nSharing the same intention or opinion.",
     example:"A: 이 제안에 동의하세요?\nB: 네, 전적으로 동의합니다.",
     exampleSrc:"A: Do you agree with this proposal?\nB: Yes, I fully agree.",
     funFact:"동의서 (consent form) is required for medical procedures in Korea. 동의 is both casual agreement and legal consent."},

    {type:"mc",
     q:"'동아리'는 어디에서 주로 활동하나요?",
     opts:["학교나 대학교","병원","법원","군대"],
     ans:"학교나 대학교",
     hint:"A group of people with shared interests, primarily active in educational institutions."},

    {type:"teach", trg:"동의하다", src:"to agree, to consent", pos:"verb", gender:null,
     note:"동의 (agreement) + 하다.\nTo express agreement with something.",
     example:"A: 모두 동의하셨나요?\nB: 네, 만장일치로 동의했습니다.",
     exampleSrc:"A: Does everyone agree?\nB: Yes, we agreed unanimously.",
     funFact:"만장일치 (unanimous agreement) combines four Hanja characters. Korean loves these four-character expressions."},

    {type:"teach", trg:"동일하다", src:"to be identical, the same", pos:"adj", gender:null,
     note:"Sino-Korean. 同 (same) + 一 (one) + 하다.\nExactly the same, no difference.",
     example:"A: 두 제품이 동일한 거예요?\nB: 네, 포장만 다를 뿐이에요.",
     exampleSrc:"A: Are the two products identical?\nB: Yes, only the packaging is different.",
     funFact:"동일하다 is formal. 같다 (same) is the everyday word. 동일하다 appears in legal and technical documents."},

    {type:"teach", trg:"동작", src:"movement, motion, action", pos:"noun", gender:null,
     note:"Sino-Korean. 動 (move) + 作 (make/act).\nA physical movement or gesture.",
     example:"A: 이 동작을 따라 해 보세요.\nB: 이렇게요?",
     exampleSrc:"A: Try to follow this movement.\nB: Like this?",
     funFact:"동작 is used in dance (안무 동작), martial arts (격투 동작), and tech (동작 감지, motion detection)."},

    {type:"teach", trg:"동전", src:"coin", pos:"noun", gender:null,
     note:"Sino-Korean. 銅 (copper) + 錢 (money).\nA small metal disc used as currency.",
     example:"A: 동전이 있어요?\nB: 100원짜리 몇 개 있어요.",
     exampleSrc:"A: Do you have coins?\nB: I have a few 100-won coins.",
     funFact:"Korean coins come in 10, 50, 100, and 500 won. Cash use is declining as Korea becomes increasingly cashless."},

    {type:"match", pairs:[
      {trg:"동양", src:"the East"},
      {trg:"동의", src:"agreement"},
      {trg:"동아리", src:"club"},
      {trg:"동전", src:"coin"},
      {trg:"동작", src:"movement"}
    ]},

    {type:"fb",
     s:"이 제안에 전적으로 {1}.",
     a:["동의합니다"],
     opts:["동의합니다","동일합니다","동작합니다","도달합니다"],
     hint:"To express full agreement or consent with a proposal or idea.",
     sSrc:"I fully {1} with this proposal."}
  ]
};
export default LESSON_17;
