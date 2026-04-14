// Korean B2 — Batch 6, Lesson 12: Love and Effort
// Words: 애쓰다, 애인, 애정, 액세서리, 액수, 앨범, 야간, 야구장, 야단, 야옹, 야외, 야채, 야하다, 약수, 약점, 약품, 약해지다, 약혼녀, 약혼자, 얄밉다

const LESSON_12 = {
  id:"kov2_b2b6_l12", title:"애정과 약속", icon:"💕", xp:15, board:true,
  steps:[
    {type:"intro", title:"애정과 약속",
     desc:"Learn vocabulary about love, outdoor activities, medicine, and engagement. This set mixes native Korean emotional words with Sino-Korean compounds.",
     goals:["Master 20 words about love, nature, sports, and weakness","Understand Korean words for affection and romantic relationships","Use outdoor and nighttime vocabulary in context"]},

    {type:"teach", trg:"애쓰다", src:"to make an effort, to struggle", pos:"verb", gender:null,
     note:"애 (effort/trouble) + 쓰다 (to use).\nPutting great effort into something difficult.",
     example:"A: 그렇게 애쓰지 않아도 돼.\nB: 하지만 잘하고 싶어.",
     exampleSrc:"A: You do not have to try so hard.\nB: But I want to do well.",
     funFact:"애쓰다 implies visible struggle. Unlike 노력하다 (effort), it suggests the task is particularly difficult."},

    {type:"teach", trg:"애인", src:"lover, significant other", pos:"noun", gender:null,
     note:"Sino-Korean. 愛 (love) + 人 (person).\nA romantic partner.",
     example:"A: 애인이 있어?\nB: 응, 작년부터 사귀고 있어.",
     exampleSrc:"A: Do you have a significant other?\nB: Yes, we have been dating since last year.",
     funFact:"애인 is gender-neutral. Korean also uses 남자친구/여자친구 (boyfriend/girlfriend) for younger couples."},

    {type:"teach", trg:"애정", src:"affection, love", pos:"noun", gender:null,
     note:"Sino-Korean. 愛 (love) + 情 (feeling).\nDeep caring affection for someone.",
     example:"A: 부모님의 애정을 느낄 수 있어.\nB: 가족이 최고지.",
     exampleSrc:"A: I can feel my parents' affection.\nB: Family is the best.",
     funFact:"애정 표현 (expression of affection) is something Korean culture has become more open about in recent generations."},

    {type:"teach", trg:"액세서리", src:"accessory", pos:"noun", gender:null,
     note:"Loanword from English 'accessory.'\nJewelry, bags, and fashion add-ons.",
     example:"A: 이 액세서리 어디서 샀어?\nB: 명동에서 샀어.",
     exampleSrc:"A: Where did you buy this accessory?\nB: I bought it in Myeongdong.",
     funFact:"Myeongdong and Hongdae are Seoul's top 액세서리 shopping districts, popular with tourists and locals alike."},

    {type:"mc",
     q:"'애인'은 어떤 관계를 가리키나요?",
     opts:["연인 관계","가족 관계","친구 관계","직장 관계"],
     ans:"연인 관계",
     hint:"The word combines love (愛) and person (人). What kind of relationship involves romantic love?"},

    {type:"teach", trg:"액수", src:"amount (of money), sum", pos:"noun", gender:null,
     note:"Sino-Korean. 額 (amount) + 數 (number).\nA specific monetary quantity.",
     example:"A: 피해 액수가 얼마나 돼요?\nB: 천만 원 정도요.",
     exampleSrc:"A: How much is the damage amount?\nB: About ten million won.",
     funFact:"Korean news always reports exact 액수 for fraud or disaster damages. Transparency in numbers is valued."},

    {type:"teach", trg:"앨범", src:"album (music or photo)", pos:"noun", gender:null,
     note:"Loanword from English 'album.'\nA collection of songs or photographs.",
     example:"A: 새 앨범 들어 봤어?\nB: 응, 타이틀곡이 좋더라.",
     exampleSrc:"A: Have you listened to the new album?\nB: Yes, the title track was good.",
     funFact:"K-pop 앨범 sales are a major chart metric. Physical albums often include photocards that fans collect and trade."},

    {type:"teach", trg:"야간", src:"nighttime, after dark", pos:"noun", gender:null,
     note:"Sino-Korean. 夜 (night) + 間 (period).\nThe period after sunset.",
     example:"A: 야간 근무는 힘들지?\nB: 응, 낮에 잠을 못 자서.",
     exampleSrc:"A: Night shifts are tough, right?\nB: Yes, because I cannot sleep during the day.",
     funFact:"야간 자율 학습 (nighttime self-study) was mandatory in Korean high schools until reforms reduced it."},

    {type:"teach", trg:"야구장", src:"baseball stadium", pos:"noun", gender:null,
     note:"야구 (baseball) + 장 (field/place).\nA venue for baseball games.",
     example:"A: 이번 주말에 야구장 갈래?\nB: 좋아! 치킨 사 가자.",
     exampleSrc:"A: Do you want to go to the baseball stadium this weekend?\nB: Sure! Let's buy chicken to bring.",
     funFact:"Korean 야구장 culture is famous for fried chicken and beer. Fans cheer with organized chants led by cheerleaders."},

    {type:"teach", trg:"야단", src:"scolding, reprimand", pos:"noun", gender:null,
     note:"Native Korean noun.\nA harsh verbal reprimand from a superior.",
     example:"A: 선생님한테 야단맞았어.\nB: 왜? 무슨 일이었어?",
     exampleSrc:"A: I got scolded by the teacher.\nB: Why? What happened?",
     funFact:"야단치다 (to scold) and 야단맞다 (to be scolded) are a common active-passive pair in Korean family life."},

    {type:"teach", trg:"야외", src:"outdoors, open air", pos:"noun", gender:null,
     note:"Sino-Korean. 野 (field) + 外 (outside).\nOpen-air spaces outside buildings.",
     example:"A: 날씨 좋은데 야외에서 먹을까?\nB: 그래, 테라스에 앉자.",
     exampleSrc:"A: The weather is nice, should we eat outdoors?\nB: Sure, let's sit on the terrace.",
     funFact:"야외 활동 (outdoor activities) boom in Korea every spring. Camping (캠핑) culture exploded after 2020."},

    {type:"teach", trg:"야채", src:"vegetables", pos:"noun", gender:null,
     note:"Sino-Korean. 野 (field) + 菜 (vegetable).\nEdible plants. Synonym of 채소.",
     example:"A: 야채 좀 더 먹어.\nB: 알겠어, 샐러드 먹을게.",
     exampleSrc:"A: Eat some more vegetables.\nB: Okay, I will eat a salad.",
     funFact:"야채 and 채소 both mean vegetables. 채소 is considered more standard, but 야채 is more commonly spoken."},

    {type:"fb",
     s:"봄이 오면 공원에서 {1} 활동을 많이 해요.",
     a:["야외"],
     opts:["야외","야간","야채","야구장"],
     hint:"Activities done in the open air, outside buildings, when the weather is nice.",
     sSrc:"When spring comes, we do a lot of {1} activities in the park."},

    {type:"teach", trg:"약수", src:"mineral spring water", pos:"noun", gender:null,
     note:"Sino-Korean. 藥 (medicine) + 水 (water).\nNatural spring water with healing properties.",
     example:"A: 산에서 약수를 떠 왔어.\nB: 시원하고 맛있겠다.",
     exampleSrc:"A: I scooped mineral water from the mountain.\nB: It must be cool and delicious.",
     funFact:"Korean mountains have 약수터 (mineral spring spots) where hikers drink free natural water. It is a hiking tradition."},

    {type:"teach", trg:"약점", src:"weakness, weak point", pos:"noun", gender:null,
     note:"Sino-Korean. 弱 (weak) + 點 (point).\nA vulnerable area or shortcoming.",
     example:"A: 모든 사람에게는 약점이 있어.\nB: 중요한 건 약점을 인정하는 거지.",
     exampleSrc:"A: Everyone has weaknesses.\nB: The important thing is acknowledging your weaknesses.",
     funFact:"약점을 잡다 (to grab someone's weakness) means to find leverage over someone in Korean."},

    {type:"teach", trg:"약품", src:"chemicals, pharmaceutical products", pos:"noun", gender:null,
     note:"Sino-Korean. 藥 (medicine) + 品 (goods).\nMedicinal or chemical substances.",
     example:"A: 이 약품은 취급에 주의해야 해요.\nB: 네, 장갑을 끼겠습니다.",
     exampleSrc:"A: You need to be careful handling these chemicals.\nB: Yes, I will wear gloves.",
     funFact:"화학 약품 (chemical products) and 의약품 (pharmaceuticals) are two main categories of 약품 in Korean."},

    {type:"teach", trg:"약해지다", src:"to become weak, to weaken", pos:"verb", gender:null,
     note:"약하다 (weak) + -해지다 (become).\nGradually losing strength or intensity.",
     example:"A: 면역력이 약해지면 감기에 걸려.\nB: 비타민을 먹어야겠다.",
     exampleSrc:"A: If your immunity weakens, you catch a cold.\nB: I should take vitamins.",
     funFact:"Korean health culture emphasizes preventing 약해지다. 보양식 (nourishing food) like samgyetang fights weakness."},

    {type:"teach", trg:"약혼녀", src:"fiancee (female)", pos:"noun", gender:null,
     note:"Sino-Korean. 約婚 (engagement) + 女 (woman).\nA woman engaged to be married.",
     example:"A: 약혼녀를 소개해 줄게.\nB: 와, 축하해! 만나고 싶어.",
     exampleSrc:"A: Let me introduce you to my fiancee.\nB: Wow, congratulations! I want to meet her.",
     funFact:"The pair 약혼녀 (fiancee) and 약혼자 (fiance, gender-neutral) reflect Korean engagement culture."},

    {type:"teach", trg:"약혼자", src:"fiance (gender-neutral)", pos:"noun", gender:null,
     note:"Sino-Korean. 約婚 (engagement) + 者 (person).\nAn engaged person, regardless of gender.",
     example:"A: 약혼자와 언제 결혼해요?\nB: 내년 봄에 할 예정이에요.",
     exampleSrc:"A: When are you getting married to your fiance?\nB: We plan to marry next spring.",
     funFact:"Korean engagements traditionally involve 상견례 (formal meeting of both families) before the wedding."},

    {type:"teach", trg:"얄밉다", src:"to be hateful, to be annoying", pos:"adj", gender:null,
     note:"Native Korean adjective.\nProvokingly annoying in a petty way.",
     example:"A: 걔가 자꾸 얄밉게 굴어.\nB: 무시하는 게 나아.",
     exampleSrc:"A: They keep acting annoyingly.\nB: It is better to ignore them.",
     funFact:"얄밉다 is milder than 미워하다 (to hate). It describes petty irritation, like someone who always brags subtly."},

    {type:"mc",
     q:"건강이 나빠지는 것을 뭐라고 하나요?",
     opts:["약해지다","약품","약점","약수"],
     ans:"약해지다",
     hint:"A verb that means your body or condition is becoming weaker over time."},

    {type:"match", pairs:[
      {trg:"애쓰다", src:"to make an effort"},
      {trg:"약점", src:"weakness"},
      {trg:"야외", src:"outdoors"},
      {trg:"얄밉다", src:"to be annoying"}
    ]}
  ]
};

export default LESSON_12;
