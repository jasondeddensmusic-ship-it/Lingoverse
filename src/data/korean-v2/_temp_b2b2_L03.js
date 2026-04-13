// Korean B2 — Batch 2, Lesson 3: Streets and Changes
// Words: 길가, 길거리, 길어지다, 깊숙이, 까다, 까만색, 까먹다, 까치, 깔끔하다, 깔다, 깔리다, 깜빡, 깡패, 네거리, 낱말, 남, 남매, 남부, 남북, 날카롭다

const LESSON_3 = {
  id:"kov2_b2b2_l3", title:"거리와 일상", icon:"🚶", xp:15, board:true,
  steps:[
    {type:"intro", title:"거리와 일상",
     desc:"Explore everyday words for streets, appearances, and daily life observations. A mix of native Korean and descriptive vocabulary.",
     goals:["Master 20 words about streets and daily life","Learn colloquial Korean verbs and adjectives","Understand native Korean compound words"]},

    {type:"teach", trg:"길가", src:"roadside, edge of the road", pos:"noun", gender:null,
     note:"길 (road) + 가 (edge).\nThe area right next to a road.",
     example:"A: 길가에 예쁜 꽃이 피었어요.\nB: 봄이 오고 있나 봐요.",
     exampleSrc:"A: Pretty flowers bloomed on the roadside.\nB: Spring must be coming.",
     funFact:"길가 is pure Korean. Compare with 도로변 (roadside), which uses Sino-Korean 道路 + 邊."},

    {type:"teach", trg:"길거리", src:"street, the streets", pos:"noun", gender:null,
     note:"길 (road) + 거리 (distance/street).\nThe public streets where people walk.",
     example:"A: 주말에 길거리가 정말 붐벼요.\nB: 명동은 특히 사람이 많죠.",
     exampleSrc:"A: The streets are really crowded on weekends.\nB: Myeongdong especially has lots of people.",
     funFact:"길거리 음식 (street food) is a huge part of Korean culture. Tteokbokki and hotteok are classics."},

    {type:"teach", trg:"길어지다", src:"to become longer, to be prolonged", pos:"verb", gender:null,
     note:"길다 (long) + 어지다 (become).\nSomething gradually becomes longer.",
     example:"A: 요즘 낮이 길어지고 있어요.\nB: 곧 여름이 오겠네요.",
     exampleSrc:"A: The days are getting longer these days.\nB: Summer must be coming soon.",
     funFact:"The -어지다 suffix turns adjectives into 'become' verbs: 짧아지다 (become short), 넓어지다 (become wide)."},

    {type:"teach", trg:"깊숙이", src:"deep inside, deeply", pos:"adv", gender:null,
     note:"깊다 (deep) + 숙이 (intensifier).\nFar into the interior of something.",
     example:"A: 열쇠가 주머니 깊숙이 들어갔어요.\nB: 꺼내기 어렵겠네요.",
     exampleSrc:"A: The key went deep inside my pocket.\nB: It must be hard to get out.",
     funFact:"깊숙이 intensifies 깊다. Korean has many adverbs formed by adding -이 to adjective stems."},

    {type:"teach", trg:"까다", src:"to peel, to hatch, to shell", pos:"verb", gender:null,
     note:"Native Korean. To remove the outer layer.\nUsed for eggs, fruit, nuts.",
     example:"A: 달걀을 몇 개 까 줄래?\nB: 응, 다섯 개 깔게.",
     exampleSrc:"A: Can you peel a few eggs for me?\nB: Sure, I will peel five.",
     funFact:"까다 also means 'to hatch' when a chick breaks out of its shell. The same motion of breaking open."},

    {type:"teach", trg:"까만색", src:"black color", pos:"noun", gender:null,
     note:"까맣다 (jet black) + 색 (color).\nA deep, true black.",
     example:"A: 어떤 색 원하세요?\nB: 까만색으로 주세요.",
     exampleSrc:"A: What color would you like?\nB: Black, please.",
     funFact:"Korean has multiple words for black: 검은색 (general black), 까만색 (jet black), 흑색 (Sino-Korean formal)."},

    {type:"mc",
     q:"'길거리 음식'의 뜻으로 맞는 것은?",
     opts:["노점에서 파는 음식","집에서 만든 음식","고급 식당 음식","배달 음식"],
     ans:"노점에서 파는 음식",
     hint:"Food sold by vendors outdoors on the public streets, like tteokbokki stands."},

    {type:"teach", trg:"까먹다", src:"to forget (colloquial)", pos:"verb", gender:null,
     note:"Colloquial/slang. A casual way to say 'to forget.'\nMore informal than 잊어버리다.",
     example:"A: 약속 시간을 까먹었어!\nB: 또? 달력에 적어 놔.",
     exampleSrc:"A: I totally forgot the appointment time!\nB: Again? Write it on the calendar.",
     funFact:"까먹다 is very informal. In formal speech, use 잊다 or 잊어버리다 instead."},

    {type:"teach", trg:"까치", src:"magpie", pos:"noun", gender:null,
     note:"Native Korean. A black and white bird\ncommon throughout Korea.",
     example:"A: 아침에 까치가 울었어요.\nB: 좋은 일이 생긴다는 뜻이에요.",
     exampleSrc:"A: A magpie cried this morning.\nB: It means something good will happen.",
     funFact:"In Korean folk belief, a magpie's morning call brings good news. It is the opposite of crows."},

    {type:"teach", trg:"깔끔하다", src:"to be neat, tidy, clean-cut", pos:"adj", gender:null,
     note:"Native Korean descriptive.\nDescribes clean, organized appearance or style.",
     example:"A: 새 사무실이 깔끔하네요.\nB: 정리를 열심히 했거든요.",
     exampleSrc:"A: The new office looks neat.\nB: We worked hard to organize it.",
     funFact:"깔끔하다 is used for both physical spaces and people's appearance. A very positive compliment."},

    {type:"teach", trg:"깔다", src:"to spread, to lay down", pos:"verb", gender:null,
     note:"Native Korean. To spread something flat\non a surface.",
     example:"A: 돗자리를 깔았어?\nB: 응, 잔디밭에 깔아 놨어.",
     exampleSrc:"A: Did you spread the picnic mat?\nB: Yes, I laid it on the grass.",
     funFact:"깔다 is also slang for 'to criticize/talk behind someone's back.' Context matters a lot."},

    {type:"fb",
     s:"방이 정말 {1}.",
     a:["깔끔하다"],
     opts:["깔끔하다","깊숙이","까만색","깜빡"],
     hint:"An adjective describing a space that is well-organized and tidy.",
     sSrc:"The room is really {1}."},

    {type:"teach", trg:"깔리다", src:"to be spread, to be crushed under", pos:"verb", gender:null,
     note:"Passive of 깔다. Something is laid down\nor pinned underneath.",
     example:"A: 책이 다른 물건 밑에 깔려 있었어요.\nB: 그래서 못 찾았구나.",
     exampleSrc:"A: The book was buried under other things.\nB: So that is why you could not find it.",
     funFact:"깔리다 as 'crushed under' appears in news about natural disasters. A powerful passive form."},

    {type:"teach", trg:"깜빡", src:"with a blink, forgetting momentarily", pos:"adv", gender:null,
     note:"Mimetic/onomatopoeia. The brief flash\nof blinking, or a brief mental lapse.",
     example:"A: 왜 안 왔어?\nB: 미안, 깜빡 잊었어.",
     exampleSrc:"A: Why did you not come?\nB: Sorry, I completely forgot.",
     funFact:"깜빡 is an ideophone (의태어). Korean has thousands of these sound/motion words that add vivid imagery."},

    {type:"teach", trg:"깡패", src:"gangster, thug", pos:"noun", gender:null,
     note:"Native Korean slang origin.\nA violent criminal or bully.",
     example:"A: 그 영화에 깡패가 나와요?\nB: 네, 조폭 영화예요.",
     exampleSrc:"A: Are there gangsters in that movie?\nB: Yes, it is a gangster film.",
     funFact:"Korean gangster films (조폭 영화) are a major genre. 깡패 is the colloquial term, 조폭 the formal one."},

    {type:"teach", trg:"네거리", src:"crossroads, four-way intersection", pos:"noun", gender:null,
     note:"네 (four) + 거리 (street).\nWhere four roads meet.",
     example:"A: 네거리에서 우회전하세요.\nB: 이 다음 네거리요?",
     exampleSrc:"A: Turn right at the intersection.\nB: The next intersection?",
     funFact:"Korean uses number + 거리: 네거리 (4-way), 오거리 (5-way), 육거리 (6-way). Seoul has famous 오거리s."},

    {type:"teach", trg:"낱말", src:"word, vocabulary item", pos:"noun", gender:null,
     note:"Native Korean. 낱 (individual) + 말 (speech).\nA single unit of language.",
     example:"A: 이 낱말의 뜻을 알아요?\nB: 사전에서 찾아볼게요.",
     exampleSrc:"A: Do you know the meaning of this word?\nB: I will look it up in the dictionary.",
     funFact:"낱말 is pure Korean for 'word.' The Sino-Korean equivalent is 단어 (單語). Both are commonly used."},

    {type:"mc",
     q:"'깜빡 잊었다'는 어떤 뜻인가요?",
     opts:["잠깐 까먹었다","일부러 안 했다","천천히 생각했다","오래 고민했다"],
     ans:"잠깐 까먹었다",
     hint:"A momentary lapse in memory, like blinking and the thought was gone."},

    {type:"teach", trg:"남", src:"others, other people, strangers", pos:"noun", gender:null,
     note:"Native Korean. People who are not yourself\nor your in-group.",
     example:"A: 남의 일에 신경 쓰지 마.\nB: 맞아, 내 일에 집중해야지.",
     exampleSrc:"A: Do not concern yourself with others' affairs.\nB: Right, I should focus on my own business.",
     funFact:"남 implies social distance. 남남 (strangers to each other) is a common expression for estranged people."},

    {type:"teach", trg:"남매", src:"brother and sister, siblings", pos:"noun", gender:null,
     note:"Sino-Korean. 男 (male) + 妹 (younger sister).\nA brother-sister pair.",
     example:"A: 형제가 있어요?\nB: 남매가 있어요. 오빠 한 명이요.",
     exampleSrc:"A: Do you have siblings?\nB: I have a brother and sister pair. One older brother.",
     funFact:"남매 specifically means a mixed-gender sibling pair. 형제 (brothers) and 자매 (sisters) are same-gender."},

    {type:"teach", trg:"남부", src:"southern part, the South", pos:"noun", gender:null,
     note:"Sino-Korean. 南 (south) + 部 (part).\nThe southern region of something.",
     example:"A: 한국의 남부 지방은 따뜻해요.\nB: 제주도가 특히 따뜻하죠.",
     exampleSrc:"A: The southern part of Korea is warm.\nB: Jeju Island is especially warm.",
     funFact:"남부 pairs with 북부 (north). Korea's climate varies greatly from 남부 (subtropical) to 북부 (continental)."},

    {type:"teach", trg:"남북", src:"South and North, north-south", pos:"noun", gender:null,
     note:"Sino-Korean. 南 (south) + 北 (north).\nOften refers to the two Koreas.",
     example:"A: 남북 관계가 어떻게 될까요?\nB: 대화가 계속되면 좋겠어요.",
     exampleSrc:"A: What will happen with North-South relations?\nB: I hope dialogue continues.",
     funFact:"남북 is loaded with political meaning in Korean. 남북통일 (reunification) remains a national aspiration."},

    {type:"teach", trg:"날카롭다", src:"to be sharp, keen, piercing", pos:"adj", gender:null,
     note:"Native Korean. Describes physical sharpness\nor intellectual acuity.",
     example:"A: 이 칼이 아주 날카로워요.\nB: 조심히 다루세요.",
     exampleSrc:"A: This knife is very sharp.\nB: Handle it carefully.",
     funFact:"날카롭다 extends to criticism (날카로운 비판), eyes (날카로운 눈), and analysis (날카로운 분석)."},

    {type:"match", pairs:[
      {trg:"깡패", src:"gangster"},
      {trg:"낱말", src:"word"},
      {trg:"남매", src:"siblings"},
      {trg:"까치", src:"magpie"},
      {trg:"네거리", src:"crossroads"}
    ]},

    {type:"fb",
     s:"이 칼은 정말 {1}.",
     a:["날카롭다"],
     opts:["날카롭다","깔끔하다","깊숙이","까만색"],
     hint:"An adjective for something that has a fine, cutting edge. Can describe knives or criticism.",
     sSrc:"This knife is really {1}."}
  ]
};
export default LESSON_3;
