// Korean B2 — Batch 4, Lesson 10: Description and Indifference
// Words: 묘사하다, 무, 무관심, 무관심하다, 무궁화, 무기, 무너지다, 무늬, 무대, 무더위, 무덤, 무덥다, 무려, 무료, 무리, 무리하다, 무사하다, 무용가, 무의미하다, 무책임하다

const LESSON_10 = {
  id:"kov2_b2b4_l10", title:"무관심과 무대", icon:"🎭", xp:15, board:true,
  steps:[
    {type:"intro", title:"무관심과 무대",
     desc:"Learn words beginning with 무, covering indifference, nature, stages, and responsibility. The 무- prefix often means 'without' or 'non-,' creating important negative vocabulary.",
     goals:["Master 20 words with the 무- prefix and related terms","Understand how 무 (without/non-) creates negative adjectives","Use descriptive vocabulary for weather, art, and social issues"]},

    {type:"teach", trg:"묘사하다", src:"to describe, to depict", pos:"verb", gender:null,
     note:"묘사 (description) + 하다 (to do).\nTo paint a picture with words or art.",
     example:"A: 작가가 자연을 아름답게 묘사했어요.\nB: 정말 눈앞에 그림이 그려져요.",
     exampleSrc:"A: The author described nature beautifully.\nB: It truly paints a picture before your eyes.",
     funFact:"From Hanja 描寫. Literature classes focus on 묘사법 (descriptive techniques): 시각적 (visual), 청각적 (auditory)."},

    {type:"teach", trg:"무", src:"radish (Korean white radish)", pos:"noun", gender:null,
     note:"Native Korean word.\nThe large white radish used in Korean cooking.",
     example:"A: 무를 넣어서 국을 끓여 볼까?\nB: 좋아, 무국은 시원해서 맛있지.",
     exampleSrc:"A: Shall we make soup with radish?\nB: Good, radish soup is refreshing and delicious.",
     funFact:"Korean 무 (daikon) is essential in making 깍두기 (cubed radish kimchi) and 동치미 (radish water kimchi)."},

    {type:"teach", trg:"무관심", src:"indifference, apathy", pos:"noun", gender:null,
     note:"Sino-Korean. 無 (without) + 關心 (concern).\nLack of interest or caring.",
     example:"A: 환경 문제에 대한 무관심이 심각해요.\nB: 더 많은 교육이 필요해요.",
     exampleSrc:"A: Indifference to environmental issues is serious.\nB: More education is needed.",
     funFact:"From Hanja 無關心. The 無- prefix negates: 무관심 (no interest), 무책임 (no responsibility), 무의미 (no meaning)."},

    {type:"teach", trg:"무관심하다", src:"to be indifferent, to be apathetic", pos:"adj", gender:null,
     note:"무관심 (indifference) + 하다.\nShowing no interest or concern.",
     example:"A: 그 사람은 정치에 무관심해.\nB: 요즘 젊은 세대가 그런 경향이 있대.",
     exampleSrc:"A: That person is indifferent to politics.\nB: They say the younger generation tends to be that way.",
     funFact:"무관심하다 is clinical and neutral, while 신경 안 쓰다 (does not care) is more casual and emotional."},

    {type:"teach", trg:"무궁화", src:"Rose of Sharon (Korean national flower)", pos:"noun", gender:null,
     note:"Sino-Korean. 無窮 (infinite) + 花 (flower).\nKorea's national flower.",
     example:"A: 무궁화가 정원에 피었어요.\nB: 한국의 국화라 더 특별하죠.",
     exampleSrc:"A: The Rose of Sharon bloomed in the garden.\nB: It is even more special because it is Korea's national flower.",
     funFact:"From Hanja 無窮花, meaning 'flower that never withers.' The national anthem says 무궁화 삼천리 화려강산."},

    {type:"mc",
     q:"'무궁화'의 한자 의미는?",
     opts:["영원히 지지 않는 꽃","무지개 색 꽃","무덤 옆의 꽃","무거운 꽃"],
     ans:"영원히 지지 않는 꽃",
     hint:"The Hanja 無窮 means 'without end' or 'infinite,' and 花 means 'flower.'"},

    {type:"teach", trg:"무기", src:"weapon, arms", pos:"noun", gender:null,
     note:"Sino-Korean. 武 (martial) + 器 (tool).\nA device used for fighting.",
     example:"A: 이 박물관에 옛날 무기가 전시돼 있어요.\nB: 칼과 활이 있네요.",
     exampleSrc:"A: Old weapons are displayed in this museum.\nB: There are swords and bows.",
     funFact:"From Hanja 武器. 핵무기 (nuclear weapon), 생화학 무기 (biochemical weapon) are serious news vocabulary."},

    {type:"teach", trg:"무너지다", src:"to collapse, to crumble", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo fall down and break apart.",
     example:"A: 오래된 건물이 무너졌대요.\nB: 다친 사람은 없어요?",
     exampleSrc:"A: An old building collapsed.\nB: Was anyone hurt?",
     funFact:"Used figuratively: 꿈이 무너지다 (dreams crumble), 체면이 무너지다 (losing face), 방어선이 무너지다 (defense collapses)."},

    {type:"teach", trg:"무늬", src:"pattern, design", pos:"noun", gender:null,
     note:"Native Korean word.\nA decorative pattern on fabric or surfaces.",
     example:"A: 이 천의 무늬가 예쁘다.\nB: 꽃무늬인데, 봄에 딱이야.",
     exampleSrc:"A: The pattern on this fabric is pretty.\nB: It is a floral pattern, perfect for spring.",
     funFact:"Common patterns: 꽃무늬 (floral), 줄무늬 (stripes), 물방울무늬 (polka dots), 체크무늬 (checkered)."},

    {type:"teach", trg:"무대", src:"stage (performance)", pos:"noun", gender:null,
     note:"Sino-Korean. 舞 (dance) + 臺 (platform).\nWhere performers present their art.",
     example:"A: 무대 위에서 노래하는 게 꿈이야.\nB: 꼭 이룰 수 있을 거야!",
     exampleSrc:"A: Singing on stage is my dream.\nB: You can definitely make it come true!",
     funFact:"From Hanja 舞臺. 무대 공포증 (stage fright) is a common expression for performance anxiety."},

    {type:"teach", trg:"무더위", src:"intense heat, sweltering heat", pos:"noun", gender:null,
     note:"무덥다 (sweltering) + 이 (noun form).\nExtreme summer heat.",
     example:"A: 올여름 무더위가 기승이에요.\nB: 에어컨 없이는 못 살겠어요.",
     exampleSrc:"A: The sweltering heat is intense this summer.\nB: I cannot live without air conditioning.",
     funFact:"Korean weather reports track 폭염 (heat wave) and 무더위 separately. 무더위 focuses on the oppressive feeling."},

    {type:"fb",
     s:"오래된 다리가 폭우로 {1}.",
     a:["무너졌다"],
     opts:["무너졌다","무관심하다","무덥다","무리하다"],
     hint:"This verb means to collapse or crumble, used for structures that fall apart.",
     sSrc:"The old bridge {1} due to heavy rain."},

    {type:"teach", trg:"무덤", src:"tomb, grave", pos:"noun", gender:null,
     note:"Native Korean word.\nA burial site for the dead.",
     example:"A: 조상의 무덤을 찾아갔어요.\nB: 추석에 성묘를 했구나.",
     exampleSrc:"A: I visited my ancestors' graves.\nB: You did a grave visit during Chuseok.",
     funFact:"Korean 성묘 (grave visiting) is an important Chuseok tradition. Families clean graves and offer food."},

    {type:"teach", trg:"무덥다", src:"to be sweltering, to be muggy", pos:"adj", gender:null,
     note:"Native Korean adjective.\nUncomfortably hot and humid.",
     example:"A: 오늘 정말 무덥다.\nB: 장마철이라 습도가 높아서 그래.",
     exampleSrc:"A: It is really sweltering today.\nB: It is because of the high humidity during the rainy season.",
     funFact:"무덥다 specifically implies heat PLUS humidity. For dry heat, 뜨겁다 (hot) is more appropriate."},

    {type:"teach", trg:"무려", src:"as many as, no less than", pos:"adv", gender:null,
     note:"Native Korean adverb.\nExpresses surprise at a large number.",
     example:"A: 그 영화를 무려 다섯 번이나 봤어.\nB: 그렇게 좋았어?",
     exampleSrc:"A: I watched that movie no less than five times.\nB: Was it that good?",
     funFact:"무려 always precedes a number to express 'wow, that many': 무려 100명 (a whopping 100 people)."},

    {type:"teach", trg:"무료", src:"free of charge", pos:"noun", gender:null,
     note:"Sino-Korean. 無 (without) + 料 (fee).\nCosting nothing.",
     example:"A: 이 앱은 무료로 다운로드할 수 있어요.\nB: 유료 버전도 있어요?",
     exampleSrc:"A: This app can be downloaded for free.\nB: Is there a paid version too?",
     funFact:"From Hanja 無料. The opposite is 유료 (有料, paid). 무료 체험 (free trial) is common in Korean apps."},

    {type:"teach", trg:"무리", src:"group, flock; overexertion", pos:"noun", gender:null,
     note:"Two meanings.\nA group of animals/people, or pushing beyond limits.",
     example:"A: 새 무리가 하늘을 날고 있어요.\nB: 정말 장관이네요.",
     exampleSrc:"A: A flock of birds is flying in the sky.\nB: What a magnificent sight.",
     funFact:"무리하지 마 (do not overdo it) is extremely common advice in Korean, showing concern for others' health."},

    {type:"teach", trg:"무리하다", src:"to be unreasonable, to be excessive", pos:"adj", gender:null,
     note:"무리 (overexertion) + 하다.\nGoing beyond what is reasonable or healthy.",
     example:"A: 무리한 요구는 하지 않을게요.\nB: 감사합니다, 최선을 다하겠습니다.",
     exampleSrc:"A: I will not make unreasonable demands.\nB: Thank you, I will do my best.",
     funFact:"무리하다 works as adjective (unreasonable) and verb phrase 무리를 하다 (to overexert oneself)."},

    {type:"mc",
     q:"'무려'는 어떤 의미로 쓰이나요?",
     opts:["놀라운 수량을 강조할 때","작은 양을 말할 때","정확한 수를 말할 때","대략적인 수를 말할 때"],
     ans:"놀라운 수량을 강조할 때",
     hint:"This adverb is placed before numbers to express amazement, like 'as many as' or 'no less than.'"},

    {type:"teach", trg:"무사하다", src:"to be safe, to be unharmed", pos:"adj", gender:null,
     note:"Sino-Korean. 無 (without) + 事 (incident) + 하다.\nBeing without any trouble.",
     example:"A: 태풍이 지나갔는데 무사하세요?\nB: 네, 다행히 무사해요.",
     exampleSrc:"A: The typhoon has passed. Are you safe?\nB: Yes, thankfully I am unharmed.",
     funFact:"From Hanja 無事. 무사 귀환 (safe return) and 무사히 도착하다 (arrive safely) are common reassuring phrases."},

    {type:"teach", trg:"무용가", src:"dancer (professional)", pos:"noun", gender:null,
     note:"Sino-Korean. 舞踊 (dance) + 家 (expert).\nA professional dance performer.",
     example:"A: 그녀는 유명한 무용가예요.\nB: 어떤 장르를 전문으로 하나요?",
     exampleSrc:"A: She is a famous dancer.\nB: What genre does she specialize in?",
     funFact:"From Hanja 舞踊家. The -가 suffix marks professionals: 음악가 (musician), 작가 (writer), 화가 (painter)."},

    {type:"teach", trg:"무의미하다", src:"to be meaningless, to be pointless", pos:"adj", gender:null,
     note:"Sino-Korean. 無 (without) + 意味 (meaning) + 하다.\nHaving no significance.",
     example:"A: 이런 논쟁은 무의미해요.\nB: 맞아요, 시간 낭비예요.",
     exampleSrc:"A: This kind of argument is meaningless.\nB: You are right, it is a waste of time.",
     funFact:"From Hanja 無意味. The 무- negation pattern: 무의미 (meaningless), 무책임 (irresponsible), 무관심 (indifferent)."},

    {type:"teach", trg:"무책임하다", src:"to be irresponsible", pos:"adj", gender:null,
     note:"Sino-Korean. 無 (without) + 責任 (responsibility) + 하다.\nLacking accountability.",
     example:"A: 일을 안 하고 놀기만 하면 무책임해.\nB: 알아, 이제 열심히 할게.",
     exampleSrc:"A: Playing around without working is irresponsible.\nB: I know, I will work hard now.",
     funFact:"From Hanja 無責任. The adjective form is harsh. Koreans might soften it: 좀 책임감이 부족해 (a bit lacking in responsibility)."},

    {type:"fb",
     s:"이 박물관은 {1}로 입장할 수 있습니다.",
     a:["무료"],
     opts:["무료","무리","무기","무덤"],
     hint:"This Sino-Korean noun means 'free of charge,' indicating no admission fee is required.",
     sSrc:"This museum can be entered for {1}."},

    {type:"match", pairs:[
      {trg:"무너지다", src:"to collapse"},
      {trg:"무대", src:"stage"},
      {trg:"무사하다", src:"to be safe"},
      {trg:"무책임하다", src:"to be irresponsible"}
    ]}
  ]
};
export default LESSON_10;
