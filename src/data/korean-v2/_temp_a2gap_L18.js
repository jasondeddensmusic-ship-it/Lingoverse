// Korean A2 Gap - Lesson 18: Determiners, Pronouns, Numbers & Units
const LESSON_18 = {
  id:"kov2_a2gap_l18", title:"관형사, 대명사, 숫자와 단위", icon:"🔢", xp:15, board:true,
  steps:[
    {type:"intro", title:"Determiners, Pronouns, Numbers & Units",
     desc:"Learn 20 essential determiners, descriptive verbs, large numbers, and measurement units. These building blocks appear in almost every Korean sentence.",
     goals:["Learn key Korean determiners and descriptive verbs","Master large Korean numbers (50-90)","Practice measurement units used in daily life"]},

    {type:"teach", trg:"다른", src:"other, different", pos:"adj", gender:null,
     note:"Modifying form. Before nouns: 다른 사람 = another person.\nFrom 다르다 (to be different).",
     example:"A: 다른 색 있어요?\nB: 네, 다른 색도 있어요.",
     exampleSrc:"A: Do you have a different color?\nB: Yes, we have other colors too.",
     funFact:"다른 is the adnominal (noun-modifying) form of 다르다. Korean adjectives change form before nouns: 다르다 > 다른, 크다 > 큰. This system has no English equivalent."},

    {type:"teach", trg:"이런", src:"this kind of, like this", pos:"adj", gender:null,
     note:"이 (this) + 런 (kind of).\nSeries: 이런/그런/저런 (this/that/that over there kind).",
     example:"A: 이런 음식 좋아해요?\nB: 네, 이런 거 좋아해요!",
     exampleSrc:"A: Do you like this kind of food?\nB: Yes, I like this kind of thing!",
     funFact:"이런! by itself is an exclamation meaning 'Oh my!' or 'Oh no!' It is a mild expression of surprise. 이런 세상에! (Oh this world!) is the stronger version."},

    {type:"teach", trg:"여러", src:"several, various", pos:"adj", gender:null,
     note:"Always before a noun: 여러 가지 = various kinds.\nMore formal than 많은 (many).",
     example:"A: 여러 나라에 가 봤어요?\nB: 네, 여러 나라를 여행했어요.",
     exampleSrc:"A: Have you been to various countries?\nB: Yes, I've traveled to several countries.",
     funFact:"여러분 (everyone, literally 'various persons') is the standard way to address an audience in Korean. Speeches, announcements, and YouTube videos all start with 여러분!"},

    {type:"teach", trg:"모든", src:"all, every", pos:"adj", gender:null,
     note:"Always before a noun: 모든 사람 = all people.\nFrom 모두 (all/everyone).",
     example:"A: 모든 학생이 왔어요?\nB: 네, 모든 학생이 다 왔어요.",
     exampleSrc:"A: Did all the students come?\nB: Yes, every student came.",
     funFact:"모든 is the determiner form, 모두 is the pronoun/adverb. 모든 사람 (every person) vs. 모두 왔어요 (everyone came). This determiner-pronoun pair pattern is systematic in Korean."},

    // Quiz block 1: first 4 words
    {type:"mc",
     q:"___ 사람이 다 왔어요.",
     opts:["모든","이런","여러","다른"],
     ans:"모든",
     hint:"Which word means 'all' or 'every' when placed before a noun?"},

    {type:"fb",
     s:"{1} 색 있어요? 이 색은 싫어요.",
     a:["다른"],
     opts:["다른","모든","여러","이런"],
     hint:"Which determiner means 'different' or 'another'?",
     sSrc:"Do you have a {1} color? I don't like this color."},

    {type:"teach", trg:"그렇다", src:"to be so, to be like that", pos:"adj", gender:null,
     note:"Base form of 그래요 (that's right/so).\n그렇지만 = but, however.",
     example:"A: 한국어가 어려워요?\nB: 네, 그래요. 하지만 재미있어요.",
     exampleSrc:"A: Is Korean difficult?\nB: Yes, it is. But it's fun.",
     funFact:"그래요 (That's so / Right) is one of the most common Korean responses. 그렇죠? (Isn't it so?) seeks agreement. The whole 그렇다 family (그래서, 그런데, 그러면) forms Korean's connective backbone."},

    {type:"teach", trg:"어떻다", src:"how, what kind of", pos:"adj", gender:null,
     note:"Question form: 어때요? = How is it?\n어떤 = what kind of (before nouns).",
     example:"A: 한국 음식이 어때요?\nB: 정말 맛있어요!",
     exampleSrc:"A: How is Korean food?\nB: It's really delicious!",
     funFact:"어때요? is the casual 'How is it?' while 어떠세요? is the formal version. Koreans use 어때요? for opinions on food, movies, dates, and life in general. It is incredibly versatile."},

    {type:"teach", trg:"이렇다", src:"to be like this", pos:"adj", gender:null,
     note:"이렇게 = like this (adverb form).\nUsed to demonstrate or explain how.",
     example:"A: 이렇게 하면 돼요?\nB: 네, 이렇게 하세요.",
     exampleSrc:"A: Should I do it like this?\nB: Yes, do it like this.",
     funFact:"이렇다/그렇다/저렇다 form a spatial trio: this way/that way/that way over there. Korean grammar loves these three-way distinctions, while English only has this/that (two-way)."},

    {type:"teach", trg:"어떠하다", src:"how about, what about", pos:"adj", gender:null,
     note:"Formal/full form of 어떻다.\n어떠세요? = How are you? (very polite).",
     example:"A: 이 식당은 어떠세요?\nB: 아주 좋아요.",
     exampleSrc:"A: How about this restaurant?\nB: It's very good.",
     funFact:"어떠하다 is the literary/formal base. In daily speech, it shortens to 어떻다 > 어때요. Korean has many such formal-casual pairs where the casual version drops syllables."},

    // Quiz block 2: words 5-8
    {type:"match", pairs:[
      {trg:"그렇다", src:"to be so/like that"},
      {trg:"어떻다", src:"how/what kind"},
      {trg:"이렇다", src:"to be like this"},
      {trg:"어떠하다", src:"how about (formal)"}
    ]},

    {type:"mc",
     q:"한국 음식이 ___?",
     opts:["그래요","어때요","이래요","어떠해요"],
     ans:"어때요",
     hint:"Which casual question asks for someone's opinion or impression?"},

    {type:"teach", trg:"모두", src:"all, everyone", pos:"pron", gender:null,
     note:"Pronoun and adverb: 모두 왔어요 = Everyone came.\nRelated: 모든 (determiner form).",
     example:"A: 모두 준비됐어요?\nB: 네, 모두 준비됐어요!",
     exampleSrc:"A: Is everyone ready?\nB: Yes, everyone is ready!",
     funFact:"모두 can mean 'all' (adverb) or 'everyone' (pronoun). 모두 다 (all completely) doubles up for emphasis. Korean loves these emphatic doublings: 아주 매우 (very very), 정말 진짜 (really truly)."},

    {type:"teach", trg:"똑바로", src:"straight, upright, properly", pos:"adv", gender:null,
     note:"Also means 'correctly' or 'honestly.'\n똑바로 서다 = stand up straight.",
     example:"A: 똑바로 앉으세요.\nB: 네, 알겠어요.",
     exampleSrc:"A: Please sit up straight.\nB: Okay, I understand.",
     funFact:"똑바로 해! (Do it properly!) is a classic Korean parent and teacher phrase. It combines physical straightness with moral correctness. Standing/sitting straight = being a proper person."},

    {type:"teach", trg:"다섯째", src:"fifth", pos:"num", gender:null,
     note:"Native Korean ordinal: 다섯 (five) + 째 (ordinal suffix).\n첫째, 둘째, 셋째, 넷째, 다섯째.",
     example:"A: 몇 째 아이예요?\nB: 다섯째예요.",
     exampleSrc:"A: Which child are you (birth order)?\nB: I'm the fifth.",
     funFact:"Korean birth order matters enormously. 첫째 (first child) carries responsibility, 막내 (youngest) gets spoiled. Asking 몇 째예요? (What number child are you?) is normal small talk in Korea."},

    // Quiz block 3: words 9-11
    {type:"fb",
     s:"{1} 준비됐어요? 출발해요!",
     a:["모두"],
     opts:["모두","모든","똑바로","다섯째"],
     hint:"Which pronoun means 'everyone' and can stand alone as a subject?",
     sSrc:"Is {1} ready? Let's go!"},

    {type:"mc",
     q:"허리를 ___ 펴세요.",
     opts:["모두","다섯째","똑바로","다른"],
     ans:"똑바로",
     hint:"Which adverb means 'straight' or 'upright' for posture?"},

    {type:"tip", title:"Korean Number Systems",
     text:"Korean has TWO number systems used in parallel:\n\nNative Korean: 하나, 둘, 셋, 넷, 다섯... (used for counting, age, hours)\nSino-Korean: 일, 이, 삼, 사, 오... (used for dates, money, minutes, large numbers)\n\nThe numbers in this lesson (50-90) use the Sino-Korean system because they are large numbers used in prices, measurements, and formal contexts."},

    {type:"teach", trg:"오십", src:"fifty", pos:"num", gender:null,
     note:"Sino-Korean: 오 (five) + 십 (ten).\nUsed for prices, scores, formal counting.",
     example:"A: 얼마예요?\nB: 오십만 원이에요.",
     exampleSrc:"A: How much is it?\nB: It's 500,000 won.",
     funFact:"오십 follows the simple Sino-Korean pattern: digit + 십. This system comes from Chinese numerals and is used whenever precision matters: money, dates, phone numbers, addresses."},

    {type:"teach", trg:"육십", src:"sixty", pos:"num", gender:null,
     note:"Sino-Korean: 육 (six) + 십 (ten).\nAlso written as 60 in mixed script.",
     example:"A: 할아버지가 몇 살이세요?\nB: 육십오 세예요.",
     exampleSrc:"A: How old is your grandfather?\nB: He's sixty-five.",
     funFact:"환갑 (60th birthday) was historically Korea's biggest birthday celebration because reaching 60 was rare. The tradition continues today with elaborate family parties, even though lifespans are much longer now."},

    {type:"teach", trg:"칠십", src:"seventy", pos:"num", gender:null,
     note:"Sino-Korean: 칠 (seven) + 십 (ten).\n칠십 퍼센트 = 70 percent.",
     example:"A: 시험 점수가 어때요?\nB: 칠십 점이에요.",
     exampleSrc:"A: How's your test score?\nB: It's 70 points.",
     funFact:"In Korean schools, 칠십 점 (70 points) is often the minimum passing grade. Students dread seeing 육십구 (69) because one point short of passing feels devastating."},

    {type:"teach", trg:"팔십", src:"eighty", pos:"num", gender:null,
     note:"Sino-Korean: 팔 (eight) + 십 (ten).\n팔십 is considered a high score.",
     example:"A: 오늘 기온이 몇 도예요?\nB: 팔십 도? 그건 화씨예요!",
     exampleSrc:"A: What's the temperature today?\nB: 80 degrees? That's Fahrenheit!",
     funFact:"Korea uses Celsius, so 팔십 도 (80 degrees) would be impossibly hot. This number confusion happens when Koreans meet Americans. 섭씨 (Celsius) vs. 화씨 (Fahrenheit) is a classic misunderstanding."},

    {type:"teach", trg:"구십", src:"ninety", pos:"num", gender:null,
     note:"Sino-Korean: 구 (nine) + 십 (ten).\n구십구 = 99.",
     example:"A: 할머니가 구십 세예요.\nB: 와, 정말 건강하세요!",
     exampleSrc:"A: Grandmother is 90 years old.\nB: Wow, she's really healthy!",
     funFact:"구십구 (99) appears in the Korean expression 백 번 찍어 안 넘어가는 나무 없다 (No tree doesn't fall after 100 chops). Persistence is valued. Getting to 구십구 means you are almost there."},

    // Quiz block 4: numbers
    {type:"match", pairs:[
      {trg:"오십", src:"fifty"},
      {trg:"육십", src:"sixty"},
      {trg:"칠십", src:"seventy"},
      {trg:"팔십", src:"eighty"}
    ]},

    {type:"fb",
     s:"할머니는 {1} 세예요.",
     a:["구십"],
     opts:["구십","오십","칠십","팔십"],
     hint:"Which Sino-Korean number means ninety?",
     sSrc:"Grandmother is {1} years old."},

    {type:"teach", trg:"퍼센트", src:"percent", pos:"noun", gender:null,
     note:"Loanword from English.\nPreceded by Sino-Korean numbers: 오십 퍼센트.",
     example:"A: 할인이 몇 퍼센트예요?\nB: 삼십 퍼센트예요!",
     exampleSrc:"A: How many percent is the discount?\nB: It's 30 percent!",
     funFact:"Korean sales use 퍼센트 constantly: 50% 할인 (50% off) is written on every store window during sale season. Koreans also say 프로 (from 'pro' in percentage) in casual speech: 50프로 할인."},

    {type:"teach", trg:"달러", src:"dollar", pos:"noun", gender:null,
     note:"Loanword from English.\nKorean currency is 원 (won), not 달러.",
     example:"A: 이거 몇 달러예요?\nB: 오십 달러예요.",
     exampleSrc:"A: How many dollars is this?\nB: It's fifty dollars.",
     funFact:"Koreans track the 환율 (exchange rate) closely because Korea is export-dependent. When the 달러 rises against the 원, imported goods get expensive. 달러가 올랐다 (The dollar rose) makes Korean news daily."},

    {type:"teach", trg:"미터", src:"meter", pos:"noun", gender:null,
     note:"Loanword from English.\nKorea uses the metric system exclusively.",
     example:"A: 키가 몇 미터예요?\nB: 백칠십오 센티미터예요.",
     exampleSrc:"A: How tall are you in meters?\nB: I'm 175 centimeters.",
     funFact:"Koreans express height in centimeters, not meters: 175 센티 (175 cm), never 1.75 미터. Apartment sizes use 평 (pyeong, traditional unit = 3.3 square meters) alongside 제곱미터 (square meters)."},

    {type:"teach", trg:"센티미터", src:"centimeter", pos:"noun", gender:null,
     note:"Loanword from English.\nOften shortened to 센티 in casual speech.",
     example:"A: 이 책상은 몇 센티미터예요?\nB: 팔십 센티미터예요.",
     exampleSrc:"A: How many centimeters is this desk?\nB: It's 80 centimeters.",
     funFact:"센티 (shortened form) is used in everyday Korean: 키 몇 센티? (How many cm tall?) is casual small talk. Height is a sensitive topic in Korean dating culture, and 센티 precision matters."},

    // Quiz block 5: units + cumulative
    {type:"mc",
     q:"할인이 삼십 ___예요.",
     opts:["센티미터","달러","미터","퍼센트"],
     ans:"퍼센트",
     hint:"Which unit expresses a proportion out of one hundred?"},

    {type:"fb",
     s:"키가 백칠십오 {1}예요.",
     a:["센티미터"],
     opts:["센티미터","미터","퍼센트","달러"],
     hint:"Which metric unit do Koreans use when stating their height precisely?",
     sSrc:"My height is 175 {1}."}
  ]
};
export default LESSON_18;
