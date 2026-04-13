// Korean B1 Final Gap - Lesson 7: Self & Identity
const LESSON_7 = {
  id:"kov2_b1fin_l7", title:"나와 정체성", icon:"🪞", xp:15, board:true,
  steps:[
    {type:"intro", title:"Self & Identity",
     desc:"Explore words for discussing the self, human nature, personality, and identity. These abstract nouns and adjectives are essential for deeper Korean conversations.",
     goals:["Learn 20 words about the self, nature, and human qualities","Discuss personality traits and human nature","Express abstract concepts about freedom and desire"]},

    {type:"teach", trg:"자기", src:"oneself, self (informal)", pos:"pron", gender:null,
     note:"Native Korean pronoun. Reflexive: 'oneself.' Also casual 'you' between couples.",
     example:"A: 자기 생각을 말해 봐.\nB: 나는 자기 일을 열심히 해야 한다고 생각해.",
     exampleSrc:"A: Tell me your own thoughts.\nB: I think one should work hard at one's own tasks.",
     funFact:"Couples in Korea call each other 자기 or 자기야 as a term of endearment, similar to 'honey' or 'babe' in English."},

    {type:"teach", trg:"자신", src:"oneself, self (formal)", pos:"noun", gender:null,
     note:"Sino-Korean (自身). More formal than 자기. Used in writing and speeches.",
     example:"A: 자신감이 있어야 해요.\nB: 맞아요, 자신을 믿어야 해요.",
     exampleSrc:"A: You need to have self-confidence.\nB: Right, you need to believe in yourself.",
     funFact:"자신감 (self-confidence) is one of the most common compounds with 자신. Compound: 자신 (self) + 감 (feeling)."},

    {type:"teach", trg:"자체", src:"itself, the thing itself", pos:"noun", gender:null,
     note:"Sino-Korean (自體). Emphasizes the thing as it is, without additions.",
     example:"A: 문제 자체가 어렵지는 않아요.\nB: 그런데 시간이 부족해요.",
     exampleSrc:"A: The problem itself isn't difficult.\nB: But there isn't enough time.",
     funFact:"자체 is used to isolate the core from surrounding factors: 음식 자체 (the food itself), 경험 자체 (the experience itself)."},

    {type:"teach", trg:"자연", src:"nature, the natural world", pos:"noun", gender:null,
     note:"Sino-Korean (自然). 자 (自) = self, 연 (然) = so/thus.",
     example:"A: 자연이 아름다운 곳에 살고 싶어요.\nB: 시골이 자연이 좋죠.",
     exampleSrc:"A: I want to live somewhere with beautiful nature.\nB: The countryside has nice nature.",
     funFact:"자연 literally means 'being so of itself,' suggesting nature exists as it naturally is. The same characters in Chinese/Japanese carry the same meaning."},

    {type:"teach", trg:"자연스럽다", src:"natural, unforced", pos:"adj", gender:null,
     note:"Derived from 자연 + 스럽다 (having the quality of).",
     example:"A: 한국어가 자연스러워요!\nB: 고마워요, 많이 연습했어요.",
     exampleSrc:"A: Your Korean sounds natural!\nB: Thank you, I practiced a lot.",
     funFact:"Being told your language is 자연스럽다 is one of the highest compliments. It means you sound like a native speaker, not a textbook."},

    {type:"fb",
     s:"한국어 발음이 아주 {1}.",
     a:["자연스러워요"],
     opts:["자연스러워요","자유로워요","자기예요","자체예요"],
     hint:"This adjective means something sounds or looks natural and unforced.",
     sSrc:"Your Korean pronunciation is very {1}."},

    {type:"teach", trg:"자유", src:"freedom, liberty", pos:"noun", gender:null,
     note:"Sino-Korean (自由). 자 (自) = self, 유 (由) = from/reason.",
     example:"A: 자유가 소중해요.\nB: 네, 자유 없이는 행복할 수 없어요.",
     exampleSrc:"A: Freedom is precious.\nB: Yes, you can't be happy without freedom.",
     funFact:"자유 is deeply meaningful in Korean history. The Korean War was fought over it, and 자유의 여신상 (Statue of Liberty) is well known."},

    {type:"teach", trg:"자유롭다", src:"to be free, to be unrestrained", pos:"adj", gender:null,
     note:"Derived from 자유 + 롭다. Feeling or being free.",
     example:"A: 주말에는 자유로워요?\nB: 네, 주말에는 자유롭게 지내요.",
     exampleSrc:"A: Are you free on weekends?\nB: Yes, I spend weekends freely.",
     funFact:"자유롭다 is irregular: 자유로워요 (not 자유롭어요). The ㅂ changes to 우 before vowel endings, a common B1 grammar pattern."},

    {type:"teach", trg:"이성", src:"reason, rationality; the opposite sex", pos:"noun", gender:null,
     note:"Sino-Korean. Two meanings: 理性 (reason) or 異性 (opposite sex).",
     example:"A: 이성적으로 생각해 봐요.\nB: 알겠어요, 감정을 좀 정리할게요.",
     exampleSrc:"A: Try to think rationally.\nB: I understand, I'll sort out my feelings.",
     funFact:"이성 with 理性 means reason/rationality. With 異性 it means the opposite sex. Context always clarifies: 이성적 = rational, 이성 친구 = friend of opposite sex."},

    {type:"teach", trg:"성격", src:"personality, character, temperament", pos:"noun", gender:null,
     note:"Sino-Korean (性格). 성 (性) = nature, 격 (格) = standard/style.",
     example:"A: 성격이 어때요?\nB: 좀 내성적이에요. 조용한 편이에요.",
     exampleSrc:"A: What's your personality like?\nB: I'm a bit introverted. I'm on the quiet side.",
     funFact:"Koreans often discuss 성격 when describing people. The MBTI personality test is wildly popular in Korea and comes up in casual conversation."},

    {type:"mc",
     q:"'성격이 좋다'는 무슨 뜻이에요?",
     opts:["외모가 좋다","건강하다","인품이 좋다","똑똑하다"],
     ans:"인품이 좋다",
     hint:"This phrase describes someone with a good temperament or character, not looks."},

    {type:"teach", trg:"인간", src:"human being, human", pos:"noun", gender:null,
     note:"Sino-Korean (人間). 인 (人) = person, 간 (間) = between/among.",
     example:"A: 인간은 완벽하지 않아요.\nB: 맞아요, 누구나 실수해요.",
     exampleSrc:"A: Humans are not perfect.\nB: Right, everyone makes mistakes.",
     funFact:"Literally 'between people,' reflecting the Confucian idea that humanity is defined by relationships. In Japanese, 人間 (ningen) carries the same meaning."},

    {type:"teach", trg:"인생", src:"life (one's lifetime)", pos:"noun", gender:null,
     note:"Sino-Korean (人生). 인 (人) = person, 생 (生) = life/birth.",
     example:"A: 인생에서 가장 중요한 게 뭐예요?\nB: 건강이 제일 중요해요.",
     exampleSrc:"A: What's the most important thing in life?\nB: Health is the most important.",
     funFact:"인생 is used in many popular phrases: 인생샷 (life's best photo), 인생 영화 (life's best movie), 인생 맛집 (life's best restaurant)."},

    {type:"teach", trg:"인상", src:"impression", pos:"noun", gender:null,
     note:"Sino-Korean (印象). 인 (印) = stamp/print, 상 (象) = image.",
     example:"A: 첫인상이 어땠어요?\nB: 첫인상이 아주 좋았어요.",
     exampleSrc:"A: What was the first impression like?\nB: The first impression was very good.",
     funFact:"첫인상 (first impression) is crucial in Korean culture. Job interviews, blind dates, and business meetings all hinge on making a good 첫인상."},

    {type:"teach", trg:"인구", src:"population", pos:"noun", gender:null,
     note:"Sino-Korean (人口). 인 (人) = person, 구 (口) = mouth (counting people).",
     example:"A: 한국 인구가 얼마나 돼요?\nB: 약 5천만 명이에요.",
     exampleSrc:"A: What's Korea's population?\nB: About 50 million people.",
     funFact:"Korea's 인구 crisis is major news. With one of the world's lowest birth rates, the population is projected to decline rapidly."},

    {type:"teach", trg:"인기", src:"popularity", pos:"noun", gender:null,
     note:"Sino-Korean (人氣). 인 (人) = people, 기 (氣) = energy/spirit.",
     example:"A: 이 가수가 인기가 많아요?\nB: 네, 요즘 가장 인기 있는 가수예요.",
     exampleSrc:"A: Is this singer popular?\nB: Yes, they're the most popular singer these days.",
     funFact:"인기 literally means 'people energy.' K-pop groups track 인기 through charts, social media followers, and fan votes."},

    {type:"match", pairs:[
      {trg:"인간", src:"human being"},
      {trg:"인생", src:"one's lifetime"},
      {trg:"인상", src:"impression"},
      {trg:"인구", src:"population"},
      {trg:"인기", src:"popularity"}
    ]},

    {type:"teach", trg:"콤플렉스", src:"complex (insecurity)", pos:"noun", gender:null,
     note:"Loanword from English/French. Refers to a personal insecurity or hang-up.",
     example:"A: 콤플렉스가 있어요?\nB: 키가 작은 게 콤플렉스예요.",
     exampleSrc:"A: Do you have any insecurities?\nB: Being short is my complex.",
     funFact:"In Korean, 콤플렉스 almost always means an insecurity, not the psychological term. Everyone has their 콤플렉스, and it is a common conversation topic among friends."},

    {type:"teach", trg:"이상", src:"ideal; above/more than; abnormality", pos:"noun", gender:null,
     note:"Multiple meanings depending on hanja: 理想 (ideal), 以上 (above), 異常 (abnormal).",
     example:"A: 100점 이상 받아야 해요.\nB: 이상적인 점수가 뭐예요?",
     exampleSrc:"A: You need to get 100 points or above.\nB: What's the ideal score?",
     funFact:"이상 is one of Korean's most versatile words. '30도 이상' = above 30 degrees. '이상한' = strange. '이상적인' = ideal. All same pronunciation, different hanja."},

    {type:"teach", trg:"이상하다", src:"strange, weird, odd", pos:"adj", gender:null,
     note:"From 異常 (abnormal). Something deviates from the expected.",
     example:"A: 이 음식 맛이 이상해요.\nB: 정말요? 상한 건 아니죠?",
     exampleSrc:"A: This food tastes strange.\nB: Really? It hasn't gone bad, has it?",
     funFact:"이상하다 is one of the first 'feelings' adjectives Korean learners master. The famous Alice in Wonderland is called 이상한 나라의 앨리스 in Korean."},

    {type:"teach", trg:"평범하다", src:"ordinary, average, common", pos:"adj", gender:null,
     note:"Sino-Korean (平凡). 평 (平) = flat/level, 범 (凡) = ordinary.",
     example:"A: 특별한 사람이 되고 싶어요.\nB: 평범한 것도 나쁘지 않아요.",
     exampleSrc:"A: I want to be a special person.\nB: Being ordinary isn't bad either.",
     funFact:"In Korean dramas, the protagonist often starts as 평범한 사람 (an ordinary person) before extraordinary events change their life."},

    {type:"teach", trg:"욕심", src:"greed, desire, ambition", pos:"noun", gender:null,
     note:"Sino-Korean (慾心). Can be negative (greed) or positive (ambition).",
     example:"A: 욕심이 너무 많으면 안 돼요.\nB: 맞아요, 적당히 해야 해요.",
     exampleSrc:"A: You shouldn't be too greedy.\nB: Right, you should be moderate.",
     funFact:"욕심 has a neutral-to-negative nuance. Saying someone has 욕심 can mean ambition (positive) or greed (negative) depending on tone."},

    {type:"mc",
     q:"'이상한 나라의 앨리스'에서 '이상한'의 뜻은?",
     opts:["아름다운","평범한","이상적인","이상한"],
     ans:"이상한",
     hint:"In this famous title, the word describes a place that is strange and full of oddities."}
  ]
};
export default LESSON_7;
