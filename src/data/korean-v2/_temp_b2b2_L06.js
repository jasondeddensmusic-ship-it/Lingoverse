// Korean B2. Batch 2, Lesson 6: Journeys and Divisions
// Words: 나누어지다, 나뉘다, 나들이, 나란히, 나르다, 나름, 나물, 나뭇가지, 나뭇잎, 나비, 나빠지다, 나아가다, 나아지다, 나침반, 나흘, 낙엽, 낚시꾼, 낚싯대, 난리, 난방

const LESSON_6 = {
  id:"kov2_b2b2_l6", title:"나들이와 자연", icon:"🍂", xp:15, board:true,
  steps:[
    {type:"intro", title:"나들이와 자연",
     desc:"Learn vocabulary for outings, nature, and processes of change. These words describe movement through the natural world and life's transitions.",
     goals:["Master 20 words about nature and movement","Understand passive and change-of-state verbs","Learn compound nouns from nature vocabulary"]},

    {type:"teach", trg:"나누어지다", src:"to be divided, to be split", pos:"verb", gender:null,
     note:"나누다 (divide) + 어지다 (become).\nSomething gets divided into parts.",
     example:"A: 이 지역은 세 구역으로 나누어져요.\nB: 각 구역마다 특징이 달라요.",
     exampleSrc:"A: This area is divided into three zones.\nB: Each zone has different characteristics.",
     funFact:"나누어지다 and 나뉘다 are near-synonyms. 나뉘다 is shorter and more common in casual speech."},

    {type:"teach", trg:"나뉘다", src:"to be divided, to be split", pos:"verb", gender:null,
     note:"Contracted passive of 나누다.\nShorter, more common form of 나누어지다.",
     example:"A: 의견이 찬반으로 나뉘었어요.\nB: 결론을 내기 어렵겠네요.",
     exampleSrc:"A: Opinions were divided into for and against.\nB: It must be hard to reach a conclusion.",
     funFact:"나뉘다 is preferred in news writing for its brevity. 의견이 나뉘다 (opinions are divided) is a set phrase."},

    {type:"teach", trg:"나들이", src:"outing, excursion", pos:"noun", gender:null,
     note:"나다 (go out) + 들이 (act of).\nA casual trip outside, usually for leisure.",
     example:"A: 주말에 나들이 갈까?\nB: 좋아, 공원에 가자.",
     exampleSrc:"A: Shall we go on an outing this weekend?\nB: Sure, let us go to the park.",
     funFact:"봄나들이 (spring outing) is a beloved Korean tradition. Families picnic under cherry blossoms."},

    {type:"teach", trg:"나란히", src:"side by side, in a row", pos:"adv", gender:null,
     note:"나란하다 (aligned) + 이 (adverb suffix).\nPlaced evenly next to each other.",
     example:"A: 신발을 나란히 놓으세요.\nB: 네, 가지런히 정리할게요.",
     exampleSrc:"A: Please place the shoes side by side.\nB: Sure, I will arrange them neatly.",
     funFact:"나란히 앉다 (sit side by side) is a romantic image in Korean dramas. It suggests intimacy and comfort."},

    {type:"teach", trg:"나르다", src:"to carry, to transport", pos:"verb", gender:null,
     note:"Native Korean. To move something\nfrom one place to another.",
     example:"A: 이 상자를 위층으로 날라 줄래?\nB: 무거운데, 같이 나르자.",
     exampleSrc:"A: Can you carry this box upstairs?\nB: It is heavy. Let us carry it together.",
     funFact:"나르다 is an irregular verb: 나르다 > 날라 (not 나라). This ㄹ-irregular pattern catches learners off guard."},

    {type:"teach", trg:"나름", src:"in one's own way, depending on", pos:"noun", gender:null,
     note:"Bound noun. Used after nouns/verbs\nto mean 'in its/their own way.'",
     example:"A: 이 식당도 나름 맛있어요.\nB: 그래요? 한번 가 볼게요.",
     exampleSrc:"A: This restaurant is good in its own way.\nB: Really? I will give it a try.",
     funFact:"나름 is a bound noun (의존 명사). It cannot stand alone and always modifies something. Very colloquial."},

    {type:"mc",
     q:"'나란히'의 뜻으로 맞는 것은?",
     opts:["옆으로 가지런하게","위아래로 겹쳐서","뒤쪽으로 멀리","앞으로 빠르게"],
     ans:"옆으로 가지런하게",
     hint:"Objects placed evenly next to each other in alignment, like shoes at a doorway."},

    {type:"teach", trg:"나물", src:"seasoned vegetables, herb dish", pos:"noun", gender:null,
     note:"Native Korean. Vegetables or herbs\nboiled and seasoned with sesame and garlic.",
     example:"A: 오늘 반찬에 나물이 있어요.\nB: 시금치 나물 좋아해요!",
     exampleSrc:"A: There is namul in today's side dishes.\nB: I love spinach namul!",
     funFact:"비빔밥 (bibimbap) is essentially rice with five different 나물. Each vegetable represents a color and direction."},

    {type:"teach", trg:"나뭇가지", src:"tree branch", pos:"noun", gender:null,
     note:"나무 (tree) + ㅅ (linking) + 가지 (branch).\nA limb extending from a tree trunk.",
     example:"A: 나뭇가지가 바람에 흔들려요.\nB: 바람이 정말 세네요.",
     exampleSrc:"A: The tree branches are swaying in the wind.\nB: The wind is really strong.",
     funFact:"The ㅅ in 나뭇가지 is a 사이시옷 (linking consonant). It appears in compounds: 뒷문 (back door), 잇몸 (gum)."},

    {type:"teach", trg:"나뭇잎", src:"tree leaf", pos:"noun", gender:null,
     note:"나무 (tree) + ㅅ (linking) + 잎 (leaf).\nThe flat green parts of a tree.",
     example:"A: 나뭇잎이 노랗게 변했어요.\nB: 가을이 깊어지고 있네요.",
     exampleSrc:"A: The tree leaves have turned yellow.\nB: Autumn is deepening.",
     funFact:"나뭇잎 is pronounced [나문닙] due to sound change rules. The ㅅ becomes [ㄴ] before ㅇ."},

    {type:"teach", trg:"나비", src:"butterfly", pos:"noun", gender:null,
     note:"Native Korean. A flying insect\nwith colorful wings.",
     example:"A: 정원에 나비가 많이 날아다녀요.\nB: 꽃이 많아서 그런가 봐요.",
     exampleSrc:"A: Many butterflies are flying around the garden.\nB: It must be because there are many flowers.",
     funFact:"나비 넥타이 (butterfly necktie) is the Korean word for a bow tie. Named for its wing-like shape."},

    {type:"teach", trg:"나빠지다", src:"to get worse, to deteriorate", pos:"verb", gender:null,
     note:"나쁘다 (bad) + 아지다 (become).\nA situation or condition worsens over time.",
     example:"A: 건강이 나빠지고 있어요.\nB: 병원에 가 보세요.",
     exampleSrc:"A: My health is getting worse.\nB: You should go to the hospital.",
     funFact:"Opposite: 나아지다 (get better). This pair (나빠지다/나아지다) is essential for describing health and situations."},

    {type:"fb",
     s:"봄이 되면 {1}를 하러 가요.",
     a:["나들이"],
     opts:["나들이","나물","나비","나침반"],
     hint:"A casual leisure outing, especially popular in spring when the weather is nice.",
     sSrc:"When spring comes, we go on a {1}."},

    {type:"teach", trg:"나아가다", src:"to advance, to move forward", pos:"verb", gender:null,
     note:"나다 (go out) + 아가다 (go further).\nTo progress or move ahead.",
     example:"A: 우리가 올바른 방향으로 나아가고 있어요.\nB: 계속 이렇게 합시다.",
     exampleSrc:"A: We are moving in the right direction.\nB: Let us keep going like this.",
     funFact:"나아가다 is often used figuratively for progress: 더 나은 미래로 나아가다 (advance toward a better future)."},

    {type:"teach", trg:"나아지다", src:"to get better, to improve", pos:"verb", gender:null,
     note:"낫다 (better) + 아지다 (become).\nA condition improves over time.",
     example:"A: 감기가 나아졌어요?\nB: 네, 많이 나아졌어요.",
     exampleSrc:"A: Has your cold gotten better?\nB: Yes, it has improved a lot.",
     funFact:"나아지다 is the optimistic counterpart to 나빠지다. They form a natural pair in health discussions."},

    {type:"teach", trg:"나침반", src:"compass", pos:"noun", gender:null,
     note:"Sino-Korean. 羅 (net) + 針 (needle) + 盤 (plate).\nA needle on a plate that finds north.",
     example:"A: 등산할 때 나침반을 가져왔어?\nB: 요즘은 핸드폰으로 방향을 봐요.",
     exampleSrc:"A: Did you bring a compass for hiking?\nB: These days I check direction on my phone.",
     funFact:"Korea invented metal movable type AND advanced compass designs during the Goryeo Dynasty (918-1392)."},

    {type:"teach", trg:"나흘", src:"four days", pos:"noun", gender:null,
     note:"Native Korean number for days.\nPart of the traditional day-counting system.",
     example:"A: 나흘이면 충분해요?\nB: 네, 나흘이면 다 끝날 거예요.",
     exampleSrc:"A: Is four days enough?\nB: Yes, it will all be done in four days.",
     funFact:"Native Korean day counting: 하루 (1), 이틀 (2), 사흘 (3), 나흘 (4), 닷새 (5). Beyond 10, Sino-Korean is used."},

    {type:"teach", trg:"낙엽", src:"fallen leaves", pos:"noun", gender:null,
     note:"Sino-Korean. 落 (fall) + 葉 (leaf).\nLeaves that have fallen from trees.",
     example:"A: 공원이 낙엽으로 덮여 있어요.\nB: 가을 풍경이 정말 아름답네요.",
     exampleSrc:"A: The park is covered with fallen leaves.\nB: The autumn scenery is truly beautiful.",
     funFact:"낙엽 is deeply poetic in Korean literature. 낙엽을 밟다 (stepping on fallen leaves) evokes autumn melancholy."},

    {type:"mc",
     q:"'나흘'은 며칠을 뜻하나요?",
     opts:["7일","4일","3일","5일"],
     ans:"4일",
     hint:"Part of the native Korean day-counting series. It comes after 사흘 (three days)."},

    {type:"teach", trg:"낚시꾼", src:"angler, fisherman", pos:"noun", gender:null,
     note:"낚시 (fishing) + 꾼 (person/expert).\nA person who fishes, especially as a hobby.",
     example:"A: 강가에 낚시꾼이 많네요.\nB: 오늘 날씨가 낚시하기 좋거든요.",
     exampleSrc:"A: There are many anglers by the river.\nB: Today's weather is good for fishing.",
     funFact:"The suffix -꾼 marks someone skilled at something: 사기꾼 (con artist), 일꾼 (worker), 장사꾼 (merchant)."},

    {type:"teach", trg:"낚싯대", src:"fishing rod", pos:"noun", gender:null,
     note:"낚시 (fishing) + ㅅ + 대 (rod/pole).\nThe pole used for fishing.",
     example:"A: 낚싯대를 새로 샀어요.\nB: 주말에 낚시 가자!",
     exampleSrc:"A: I bought a new fishing rod.\nB: Let us go fishing this weekend!",
     funFact:"Another 사이시옷 compound. 낚싯대 is pronounced [낚시때] with the ㅅ changing the following consonant."},

    {type:"teach", trg:"난리", src:"commotion, uproar, chaos", pos:"noun", gender:null,
     note:"Sino-Korean origin. 亂 (disorder) + 離 (separation).\nA state of wild disorder.",
     example:"A: 아이들이 난리를 피우고 있어요.\nB: 조용히 하라고 해야겠어요.",
     exampleSrc:"A: The children are making a commotion.\nB: I need to tell them to be quiet.",
     funFact:"난리가 나다 (chaos breaks out) and 난리를 치다 (cause chaos) are everyday expressions for disorder."},

    {type:"teach", trg:"난방", src:"heating (a room)", pos:"noun", gender:null,
     note:"Sino-Korean. 暖 (warm) + 房 (room).\nThe system that warms a living space.",
     example:"A: 난방을 켤까요?\nB: 네, 좀 추워요.",
     exampleSrc:"A: Should I turn on the heating?\nB: Yes, it is a bit cold.",
     funFact:"Korean 온돌 (ondol) floor heating is the traditional 난방 system. Hot water pipes run under the floor."},

    {type:"match", pairs:[
      {trg:"나물", src:"seasoned vegetables"},
      {trg:"나비", src:"butterfly"},
      {trg:"낙엽", src:"fallen leaves"},
      {trg:"난방", src:"heating"},
      {trg:"나침반", src:"compass"}
    ]},

    {type:"fb",
     s:"건강이 많이 {1}.",
     a:["나아졌다"],
     opts:["나아졌다","나빠졌다","나누어졌다","나왔다"],
     hint:"A condition improving and getting better over time. The positive change verb.",
     sSrc:"My health has {1} a lot."}
  ]
};
export default LESSON_6;
