// Korean B2 — Batch 6, Lesson 19: Heroes and Film
// Words: 엿보다, 영(adv), 영남, 영상, 영양, 영업, 영역, 영웅, 영원히, 영하, 영향, 영향력, 영혼, 영화관, 영화배우, 영화제, 옆구리, 옆방, 옆집, 예감

const LESSON_19 = {
  id:"kov2_b2b6_l19", title:"영웅과 영화", icon:"🎬", xp:15, board:true,
  steps:[
    {type:"intro", title:"영웅과 영화",
     desc:"Learn words about film, influence, heroism, and spatial relations. Many words use the 影/營/永/英 hanja roots for different meanings of 영.",
     goals:["Master 20 words about film, influence, and eternity","Understand the many 영 hanja compounds and their meanings","Use influence and film industry vocabulary"]},

    {type:"teach", trg:"엿보다", src:"to peek at, to spy on", pos:"verb", gender:null,
     note:"엿 (secretly) + 보다 (to look).\nLooking at something secretively or cautiously.",
     example:"A: 문틈으로 안을 엿봤어.\nB: 뭐가 보였어?",
     exampleSrc:"A: I peeked inside through the door crack.\nB: What did you see?",
     funFact:"엿보다 can mean innocent peeking or intrusive spying depending on context. Privacy is taken seriously in Korea."},

    {type:"teach", trg:"영", src:"not at all (with negatives)", pos:"adv", gender:null,
     note:"Native Korean adverb.\nEmphasizes negation, meaning 'not at all' or 'zero.'",
     example:"A: 공부가 영 안 되네.\nB: 나도 집중이 안 돼.",
     exampleSrc:"A: I cannot study at all.\nB: I cannot concentrate either.",
     funFact:"영 is always paired with negatives: 영 못하다, 영 안 되다. Alone it means 'zero' or 'spirit' depending on hanja."},

    {type:"teach", trg:"영상", src:"video, image; above zero (temperature)", pos:"noun", gender:null,
     note:"Sino-Korean. 映像 (reflected image) or 零上 (above zero).\nVisual media or positive temperatures.",
     example:"A: 이 영상 봤어? 재미있어.\nB: 아직, 링크 보내 줘.",
     exampleSrc:"A: Have you seen this video? It is fun.\nB: Not yet, send me the link.",
     funFact:"영상 originally meant 'projected image.' Now it is the standard Korean word for any video content online."},

    {type:"teach", trg:"영양", src:"nutrition, nourishment", pos:"noun", gender:null,
     note:"Sino-Korean. 營 (manage) + 養 (nourish).\nThe nutrients that sustain the body.",
     example:"A: 영양이 부족하면 건강에 안 좋아.\nB: 균형 잡힌 식단이 중요하지.",
     exampleSrc:"A: Lack of nutrition is bad for health.\nB: A balanced diet is important.",
     funFact:"Korean food culture emphasizes 영양: 영양제 (supplements), 영양가 (nutritional value), 영양사 (nutritionist)."},

    {type:"teach", trg:"영업", src:"sales, business operations", pos:"noun", gender:null,
     note:"Sino-Korean. 營 (manage) + 業 (business).\nThe commercial operations of a business.",
     example:"A: 오늘 영업 시간이 몇 시까지예요?\nB: 저녁 9시까지요.",
     exampleSrc:"A: What are the business hours today?\nB: Until 9 PM.",
     funFact:"영업 중 (open for business) and 영업 종료 (closed) signs are on every Korean shop door."},

    {type:"mc",
     q:"'영하 5도'는 어떤 온도인가요?",
     opts:["섭씨 마이너스 5도","섭씨 플러스 5도","화씨 5도","영점 5도"],
     ans:"섭씨 마이너스 5도",
     hint:"영하 means 'below zero.' So 영하 5도 is 5 degrees below the freezing point."},

    {type:"teach", trg:"영역", src:"territory, domain, field", pos:"noun", gender:null,
     note:"Sino-Korean. 領 (territory) + 域 (area).\nA defined area of control or expertise.",
     example:"A: 이건 내 영역이 아니야.\nB: 그러면 누구한테 물어봐야 해?",
     exampleSrc:"A: This is not my area of expertise.\nB: Then who should I ask?",
     funFact:"영역 is used for both physical territory (영토) and abstract fields (전문 영역, area of expertise)."},

    {type:"teach", trg:"영웅", src:"hero", pos:"noun", gender:null,
     note:"Sino-Korean. 英 (outstanding) + 雄 (male/brave).\nA person admired for courage or achievement.",
     example:"A: 이순신 장군은 한국의 영웅이야.\nB: 맞아, 존경받는 인물이지.",
     exampleSrc:"A: Admiral Yi Sun-sin is a Korean hero.\nB: Right, he is a respected figure.",
     funFact:"Admiral Yi Sun-sin (이순신) is Korea's greatest national 영웅. His statue stands in central Seoul's Gwanghwamun."},

    {type:"teach", trg:"영원히", src:"forever, eternally", pos:"adv", gender:null,
     note:"Sino-Korean. 永遠 (eternal) + 히 (adverb suffix).\nLasting for all time.",
     example:"A: 우리 우정은 영원히 변하지 않을 거야.\nB: 나도 그렇게 생각해.",
     exampleSrc:"A: Our friendship will never change forever.\nB: I think so too.",
     funFact:"영원히 appears in countless Korean love songs and wedding vows. 영원히 사랑해 (I love you forever) is iconic."},

    {type:"teach", trg:"영하", src:"below zero, sub-zero", pos:"noun", gender:null,
     note:"Sino-Korean. 零 (zero) + 下 (below).\nTemperatures below the freezing point.",
     example:"A: 내일 영하 10도래.\nB: 따뜻하게 입어야겠다.",
     exampleSrc:"A: They say it will be minus 10 degrees tomorrow.\nB: I need to dress warmly.",
     funFact:"Korean winters regularly reach 영하. The opposite is 영상 (above zero). Weather forecasts always specify which."},

    {type:"teach", trg:"영향", src:"influence, effect", pos:"noun", gender:null,
     note:"Sino-Korean. 影 (shadow) + 響 (echo).\nThe impact one thing has on another.",
     example:"A: 부모님의 영향을 많이 받았어.\nB: 어떤 면에서?",
     exampleSrc:"A: I was greatly influenced by my parents.\nB: In what way?",
     funFact:"영향을 미치다 (to exert influence) and 영향을 받다 (to be influenced) are essential academic Korean phrases."},

    {type:"teach", trg:"영향력", src:"influence, power to influence", pos:"noun", gender:null,
     note:"영향 (influence) + 력 (power).\nThe ability to affect outcomes or opinions.",
     example:"A: 그 사람은 영향력이 커.\nB: 그래서 의견을 존중하는 거야.",
     exampleSrc:"A: That person has great influence.\nB: That is why we respect their opinion.",
     funFact:"Korean media ranks people by 영향력. Forbes Korea publishes annual lists of most influential Koreans."},

    {type:"fb",
     s:"SNS 인플루언서들의 {1}이 점점 커지고 있다.",
     a:["영향력"],
     opts:["영향력","영양","영업","영역"],
     hint:"The growing power that social media influencers have over public opinion and consumer behavior.",
     sSrc:"The {1} of social media influencers is growing steadily."},

    {type:"teach", trg:"영혼", src:"soul, spirit", pos:"noun", gender:null,
     note:"Sino-Korean. 靈 (spirit) + 魂 (soul).\nThe spiritual essence of a person.",
     example:"A: 그 음악에 영혼을 담았어.\nB: 그래서 감동적인 거구나.",
     exampleSrc:"A: I poured my soul into that music.\nB: That is why it is so moving.",
     funFact:"영혼 없이 (without soul) is Korean slang for doing something robotically, without any real effort or feeling."},

    {type:"teach", trg:"영화관", src:"movie theater, cinema", pos:"noun", gender:null,
     note:"Sino-Korean. 映畫 (movie) + 館 (building).\nA building where films are screened.",
     example:"A: 영화관에서 볼까, 집에서 볼까?\nB: 큰 화면이 좋으니까 영화관 가자.",
     exampleSrc:"A: Should we watch at the theater or at home?\nB: A big screen is better, so let's go to the cinema.",
     funFact:"CGV, Lotte Cinema, and Megabox are Korea's big three 영화관 chains. Multiplex culture is huge in Korea."},

    {type:"teach", trg:"영화배우", src:"movie actor, film star", pos:"noun", gender:null,
     note:"영화 (movie) + 배우 (actor).\nAn actor who primarily works in films.",
     example:"A: 한국 영화배우 중에 누가 제일 유명해?\nB: 송강호 아닐까?",
     exampleSrc:"A: Who is the most famous Korean movie actor?\nB: Would it not be Song Kang-ho?",
     funFact:"Korean 영화배우 have won global recognition. Parasite (기생충) made Korean actors household names worldwide."},

    {type:"teach", trg:"영화제", src:"film festival", pos:"noun", gender:null,
     note:"영화 (movie) + 제 (festival).\nAn organized event showcasing films.",
     example:"A: 부산 영화제에 가 본 적 있어?\nB: 아니, 올해 가 보고 싶어.",
     exampleSrc:"A: Have you been to the Busan Film Festival?\nB: No, I want to go this year.",
     funFact:"부산국제영화제 (BIFF) is Asia's largest film festival, attracting international filmmakers every October."},

    {type:"teach", trg:"옆구리", src:"side (of the body), flank", pos:"noun", gender:null,
     note:"옆 (side) + 구리 (body area suffix).\nThe area between ribs and hip.",
     example:"A: 옆구리가 아파.\nB: 운동하다가 다쳤어?",
     exampleSrc:"A: My side hurts.\nB: Did you get hurt while exercising?",
     funFact:"옆구리를 찌르다 (to poke someone's side) is a common playful Korean gesture to get someone's attention."},

    {type:"teach", trg:"옆집", src:"next-door house, neighbor's home", pos:"noun", gender:null,
     note:"옆 (beside) + 집 (house).\nThe house or apartment right next to yours.",
     example:"A: 옆집에서 이사를 갔대.\nB: 새로운 이웃은 어떤 사람일까?",
     exampleSrc:"A: The people next door moved out.\nB: I wonder what the new neighbors will be like.",
     funFact:"옆집 relationships were traditionally close in Korea. 옆집 아줌마 (the lady next door) was like extended family."},

    {type:"teach", trg:"예감", src:"premonition, foreboding, feeling", pos:"noun", gender:null,
     note:"Sino-Korean. 豫 (beforehand) + 感 (feeling).\nAn intuitive feeling about the future.",
     example:"A: 좋은 예감이 들어.\nB: 정말? 좋은 일이 생길까?",
     exampleSrc:"A: I have a good feeling about this.\nB: Really? Will something good happen?",
     funFact:"불길한 예감 (ominous premonition) and 좋은 예감 (good feeling) are common Korean drama phrases before plot twists."},

    {type:"mc",
     q:"한국의 가장 유명한 영화제가 열리는 도시는?",
     opts:["부산","서울","인천","광주"],
     ans:"부산",
     hint:"The largest international film festival in Asia is held every October in a coastal Korean city."},

    {type:"match", pairs:[
      {trg:"영웅", src:"hero"},
      {trg:"영향", src:"influence"},
      {trg:"영원히", src:"forever"},
      {trg:"영혼", src:"soul"}
    ]}
  ]
};

export default LESSON_19;
