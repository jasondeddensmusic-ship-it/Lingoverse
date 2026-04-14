// Korean B2 — Batch 3, Lesson 18: Jumping, Tearing, and Leisure
// Words: 뛰어넘다, 뛰어놀다, 뛰어다니다, 뛰어오다, 뛰어오르다, 뜯다, 뜰, 뜻대로, 뜻밖, 뜻하다, 띄다, 띄우다, 라운드, 라이벌, 라이터, 라인, 라켓, 레몬, 레스토랑, 레이저

const LESSON_18 = {
  id:"kov2_b2b3_l18", title:"뛰어넘기와 레저", icon:"🏃", xp:15, board:true,
  steps:[
    {type:"intro", title:"뛰어넘기와 레저",
     desc:"Master directional compound verbs, intention-related words, and modern loanwords. These complete your understanding of Korean movement verbs and contemporary vocabulary.",
     goals:["Master 20 words about movement, intention, and modern leisure","Complete the 뛰다 compound verb family","Use loanwords naturally in Korean contexts"]},

    {type:"teach", trg:"뛰어넘다", src:"to jump over, to leap across", pos:"verb", gender:null,
     note:"뛰다 (jump) + 어 + 넘다 (to cross over).\nTo clear an obstacle by jumping.",
     example:"A: 담을 뛰어넘어서 도망갔어.\nB: 운동을 많이 했나 봐.",
     exampleSrc:"A: He jumped over the wall and ran away.\nB: He must exercise a lot.",
     funFact:"Also figurative: 한계를 뛰어넘다 (to transcend limits), 경계를 뛰어넘다 (to cross boundaries)."},

    {type:"teach", trg:"뛰어놀다", src:"to run around and play", pos:"verb", gender:null,
     note:"뛰다 (run) + 어 + 놀다 (to play).\nIdentical meaning to 뛰놀다, slightly more formal spelling.",
     example:"A: 아이들이 공원에서 뛰어놀고 있어.\nB: 좋은 날씨라 그런지 신나 보여.",
     exampleSrc:"A: The children are running around playing in the park.\nB: They seem excited because of the nice weather.",
     funFact:"뛰어놀다 and 뛰놀다 are interchangeable. Both capture the essence of active, joyful childhood play."},

    {type:"teach", trg:"뛰어다니다", src:"to run around (repeatedly), to dash about", pos:"verb", gender:null,
     note:"뛰다 (run) + 어 + 다니다 (to go around).\nTo run from place to place continuously.",
     example:"A: 하루 종일 뛰어다녀서 다리가 아파.\nB: 좀 쉬어야겠다.",
     exampleSrc:"A: My legs hurt from running around all day.\nB: You should rest a bit.",
     funFact:"다니다 adds the sense of habitual or repeated movement. 뛰어다니다 implies running around multiple places."},

    {type:"teach", trg:"뛰어오다", src:"to come running", pos:"verb", gender:null,
     note:"뛰다 (run) + 어 + 오다 (to come).\nRunning toward the speaker.",
     example:"A: 강아지가 나를 보고 뛰어왔어.\nB: 반가웠나 보다.",
     exampleSrc:"A: The puppy came running when it saw me.\nB: It must have been happy to see you.",
     funFact:"뛰어오다 (come running, toward speaker) completes the pair with 뛰어가다 (go running, away from speaker)."},

    {type:"teach", trg:"뛰어오르다", src:"to jump up, to leap upward", pos:"verb", gender:null,
     note:"뛰다 (jump) + 어 + 오르다 (to ascend).\nTo spring upward from the ground.",
     example:"A: 고양이가 테이블 위로 뛰어올랐어.\nB: 뭔가 맛있는 걸 봤나 봐.",
     exampleSrc:"A: The cat jumped up onto the table.\nB: It must have seen something tasty.",
     funFact:"The full directional compound verb set: 뛰어오르다 (up), 뛰어내리다 (down), 뛰어넘다 (over), 뛰어들다 (into)."},

    {type:"mc",
     q:"'한계를 뛰어넘다'의 의미는?",
     opts:["제한을 극복하다","높이 점프하다","빨리 달리다","멀리 여행하다"],
     ans:"제한을 극복하다",
     hint:"When used figuratively, jumping over something means surpassing a restriction or limitation."},

    {type:"teach", trg:"뜯다", src:"to tear off, to pluck, to rip", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo pull something off by force.",
     example:"A: 풀을 뜯어서 토끼에게 줬어.\nB: 토끼가 좋아했겠다.",
     exampleSrc:"A: I plucked some grass and gave it to the rabbit.\nB: The rabbit must have liked it.",
     funFact:"Also used colloquially: 돈을 뜯다 (to rip someone off/extort money). A vivid, physical metaphor."},

    {type:"teach", trg:"뜰", src:"yard, garden, courtyard", pos:"noun", gender:null,
     note:"Native Korean word.\nAn open area around or within a building.",
     example:"A: 뜰에 꽃이 예쁘게 피었어.\nB: 봄이 되니까 정원이 화려하다.",
     exampleSrc:"A: Flowers are blooming beautifully in the yard.\nB: The garden is gorgeous now that spring is here.",
     funFact:"뜰 is slightly literary. 마당 (yard) is the everyday equivalent. Traditional hanok houses center around the 뜰/마당."},

    {type:"teach", trg:"뜻대로", src:"as intended, as one wishes", pos:"adv", gender:null,
     note:"뜻 (meaning/will) + 대로 (according to).\nAccording to one's wishes or intentions.",
     example:"A: 일이 뜻대로 안 돼서 속상해.\nB: 괜찮아, 다시 해 보자.",
     exampleSrc:"A: I am upset because things are not going as I planned.\nB: It is OK, let us try again.",
     funFact:"뜻대로 되다 (to go as planned) and 뜻대로 안 되다 (to not go as planned) are extremely common life expressions."},

    {type:"teach", trg:"뜻밖", src:"unexpected, surprising", pos:"noun", gender:null,
     note:"뜻 (intention) + 밖 (outside).\nOutside of what was expected.",
     example:"A: 뜻밖의 선물을 받았어.\nB: 누가 보낸 거야?",
     exampleSrc:"A: I received an unexpected gift.\nB: Who sent it?",
     funFact:"뜻밖의 (unexpected) + noun is a common pattern: 뜻밖의 결과 (unexpected result), 뜻밖의 소식 (unexpected news)."},

    {type:"teach", trg:"뜻하다", src:"to mean, to intend", pos:"verb", gender:null,
     note:"뜻 (meaning) + 하다 (to do).\nTo signify or intend something.",
     example:"A: 이 단어가 무엇을 뜻해?\nB: 평화를 뜻하는 단어야.",
     exampleSrc:"A: What does this word mean?\nB: It is a word that means peace.",
     funFact:"뜻하다 is more formal than 의미하다 (to mean). Both are used in explanations and definitions."},

    {type:"fb",
     s:"일이 {1} 안 돼서 걱정이야.",
     a:["뜻대로"],
     opts:["뜻대로","뜻밖","뜻하다","뛰어"],
     hint:"This expression means things are not going according to your wishes or plan.",
     sSrc:"I am worried because things are not going as {1}."},

    {type:"teach", trg:"띄다", src:"to be spaced, to be noticeable; to float", pos:"verb", gender:null,
     note:"Native Korean verb with multiple meanings.\nTo stand out, or to create space between.",
     example:"A: 그 건물이 눈에 띄더라.\nB: 색깔이 독특해서 그렇지.",
     exampleSrc:"A: That building caught my eye.\nB: It is because the color is unique.",
     funFact:"눈에 띄다 (to catch one's eye) is one of the most common expressions using 띄다. Very useful in daily conversation."},

    {type:"teach", trg:"띄우다", src:"to float, to send, to space out", pos:"verb", gender:null,
     note:"띄다 (float) + 우다 (causative).\nTo make something float or to dispatch something.",
     example:"A: 아이가 종이배를 물에 띄웠어.\nB: 잘 떠가는구나.",
     exampleSrc:"A: The child floated a paper boat on the water.\nB: It is floating along nicely.",
     funFact:"Multiple uses: 배를 띄우다 (launch a boat), 편지를 띄우다 (send a letter), 간격을 띄우다 (add spacing)."},

    {type:"teach", trg:"라운드", src:"round (in sports/games)", pos:"noun", gender:null,
     note:"Loanword from English 'round.'\nA division of play in sports or competition.",
     example:"A: 골프 한 라운드 치자.\nB: 좋아, 18홀 다 돌자.",
     exampleSrc:"A: Let us play a round of golf.\nB: Sure, let us play all 18 holes.",
     funFact:"In Korean golf culture, 한 라운드 (one round) typically means playing all 18 holes, a significant time commitment."},

    {type:"teach", trg:"라이벌", src:"rival, competitor", pos:"noun", gender:null,
     note:"Loanword from English 'rival.'\nA competing person or team.",
     example:"A: 그 선수는 나의 라이벌이야.\nB: 좋은 경쟁이 실력을 키워 주지.",
     exampleSrc:"A: That athlete is my rival.\nB: Good competition develops your skills.",
     funFact:"Korea-Japan sporting rivalries are intense. 라이벌 관계 (rivalry relationship) is a major topic in Korean sports media."},

    {type:"mc",
     q:"'눈에 띄다'는 무슨 뜻인가?",
     opts:["쉽게 눈에 들어오다","눈이 아프다","눈을 감다","눈물이 나다"],
     ans:"쉽게 눈에 들어오다",
     hint:"This expression describes something that easily catches your attention or stands out visually."},

    {type:"teach", trg:"라이터", src:"lighter", pos:"noun", gender:null,
     note:"Loanword from English 'lighter.'\nA device for creating a flame.",
     example:"A: 라이터 있어?\nB: 아니, 나는 담배를 안 피워.",
     exampleSrc:"A: Do you have a lighter?\nB: No, I do not smoke.",
     funFact:"라이터 is used universally in Korean. The Sino-Korean alternative 점화기 exists but is almost never used in daily life."},

    {type:"teach", trg:"라인", src:"line", pos:"noun", gender:null,
     note:"Loanword from English 'line.'\nUsed for lines, routes, and boundaries.",
     example:"A: 이 라인을 넘으면 안 돼.\nB: 알겠어, 조심할게.",
     exampleSrc:"A: You must not cross this line.\nB: Got it, I will be careful.",
     funFact:"Also used for LINE, the messaging app popular in Japan and Taiwan. Koreans primarily use 카카오톡 instead."},

    {type:"teach", trg:"라켓", src:"racket", pos:"noun", gender:null,
     note:"Loanword from English 'racket.'\nA sports implement for hitting a ball.",
     example:"A: 배드민턴 라켓을 새로 샀어.\nB: 좋다! 이번 주말에 같이 치자.",
     exampleSrc:"A: I bought a new badminton racket.\nB: Nice! Let us play together this weekend.",
     funFact:"Badminton is hugely popular in Korea. Many apartment complexes have courts, and Korea has won multiple Olympic golds."},

    {type:"teach", trg:"레몬", src:"lemon", pos:"noun", gender:null,
     note:"Loanword from English 'lemon.'\nA sour yellow citrus fruit.",
     example:"A: 레몬즙을 좀 넣어 봐.\nB: 맛이 상큼해질 거야.",
     exampleSrc:"A: Try adding some lemon juice.\nB: It will taste refreshing.",
     funFact:"레몬 is widely used in Korean cafes: 레몬에이드 (lemonade) and 레몬차 (lemon tea) are popular drinks year-round."},

    {type:"teach", trg:"레스토랑", src:"restaurant (Western-style)", pos:"noun", gender:null,
     note:"Loanword from English 'restaurant.'\nSpecifically a Western-style dining establishment.",
     example:"A: 오늘 저녁에 레스토랑에 갈까?\nB: 좋아, 이탈리안 레스토랑 어때?",
     exampleSrc:"A: Shall we go to a restaurant for dinner tonight?\nB: Sure, how about an Italian restaurant?",
     funFact:"레스토랑 implies Western fine dining. Korean restaurants are called 식당 or 음식점. The distinction matters culturally."},

    {type:"teach", trg:"레이저", src:"laser", pos:"noun", gender:null,
     note:"Loanword from English 'laser.'\nConcentrated beam of light for various uses.",
     example:"A: 레이저 시술을 받았어.\nB: 효과가 있었어?",
     exampleSrc:"A: I had a laser procedure.\nB: Was it effective?",
     funFact:"Korea's cosmetic and medical laser industry is world-leading. 레이저 시술 (laser treatment) is extremely common."},

    {type:"match", pairs:[
      {trg:"뜻밖", src:"unexpected"},
      {trg:"라이벌", src:"rival"},
      {trg:"레스토랑", src:"restaurant"},
      {trg:"뛰어넘다", src:"to jump over"}
    ]}
  ]
};
export default LESSON_18;
