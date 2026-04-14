// Korean B2 — Batch 4, Lesson 17: Interference and Sports
// Words: 방해, 방해하다, 배구, 배꼽, 배다, 배드민턴, 배우자, 배추, 배추김치, 배치, 백색, 백성, 백인, 뱀, 뱃사람, 뱉다, 버려지다, 버섯, 버터, 버튼

const LESSON_17 = {
  id:"kov2_b2b4_l17", title:"방해와 배추", icon:"🏐", xp:15, board:true,
  steps:[
    {type:"intro", title:"방해와 배추",
     desc:"Learn words about interference, sports, food, and discarding. This lesson mixes action verbs with Korean food culture and everyday objects.",
     goals:["Master 20 words about interference, sports, and daily objects","Learn Korean food vocabulary: 배추, 배추김치","Understand passive verb forms with -지다 and -히다"]},

    {type:"teach", trg:"방해", src:"disturbance, interference, obstruction", pos:"noun", gender:null,
     note:"Sino-Korean. 妨 (obstruct) + 害 (harm).\nActions that hinder or disrupt.",
     example:"A: 공부할 때 방해하지 마.\nB: 미안, 조용히 할게.",
     exampleSrc:"A: Do not disturb me when I am studying.\nB: Sorry, I will be quiet.",
     funFact:"From Hanja 妨害. 방해물 (obstacle), 방해 공작 (sabotage), 업무 방해 (work obstruction, a legal term)."},

    {type:"teach", trg:"방해하다", src:"to disturb, to interfere with", pos:"verb", gender:null,
     note:"방해 (interference) + 하다 (to do).\nTo actively obstruct or bother someone.",
     example:"A: 회의를 방해하지 마세요.\nB: 죄송합니다, 나가겠습니다.",
     exampleSrc:"A: Please do not disturb the meeting.\nB: I am sorry, I will leave.",
     funFact:"In Korean law, 업무 방해죄 (crime of business obstruction) is a real legal charge used frequently."},

    {type:"teach", trg:"배구", src:"volleyball", pos:"noun", gender:null,
     note:"Sino-Korean. 排 (row) + 球 (ball).\nThe sport of volleyball.",
     example:"A: 배구 경기 보러 갈래?\nB: 좋아! 한국 여자 배구 잘하잖아.",
     exampleSrc:"A: Want to go watch a volleyball game?\nB: Sure! Korean women's volleyball is great.",
     funFact:"From Hanja 排球. Korean women's volleyball had a huge surge in popularity thanks to star player Kim Yeon-koung."},

    {type:"teach", trg:"배꼽", src:"belly button, navel", pos:"noun", gender:null,
     note:"Native Korean word.\nThe scar from the umbilical cord.",
     example:"A: 배꼽이 빠지게 웃었어.\nB: 그 개그가 그렇게 웃겼어?",
     exampleSrc:"A: I laughed so hard my belly button almost fell off.\nB: Was that joke that funny?",
     funFact:"배꼽이 빠지다 (belly button falls off) is a hyperbolic expression for laughing extremely hard."},

    {type:"teach", trg:"배다", src:"to soak in, to permeate; to be pregnant", pos:"verb", gender:null,
     note:"Native Korean verb.\nFor liquid or smell to seep into something.",
     example:"A: 옷에 고기 냄새가 배었어.\nB: 세탁하면 없어질 거야.",
     exampleSrc:"A: The meat smell soaked into my clothes.\nB: It will go away if you wash them.",
     funFact:"배다 has two meanings: 냄새가 배다 (smell soaks in), 아이를 배다 (to be pregnant). Completely different contexts."},

    {type:"mc",
     q:"'배꼽이 빠지다'는 어떤 상황을 표현하나요?",
     opts:["아주 많이 웃는 것","배가 아픈 것","놀라는 것","슬퍼하는 것"],
     ans:"아주 많이 웃는 것",
     hint:"This humorous expression involves the belly button and describes laughing extremely hard."},

    {type:"teach", trg:"배드민턴", src:"badminton", pos:"noun", gender:null,
     note:"Loanword from English 'badminton.'\nA racquet sport with a shuttlecock.",
     example:"A: 주말에 배드민턴 칠까?\nB: 좋아, 공원에서 하자.",
     exampleSrc:"A: Shall we play badminton on the weekend?\nB: Sure, let us play in the park.",
     funFact:"Korea is a badminton powerhouse, winning multiple Olympic gold medals. It is one of the most popular casual sports."},

    {type:"teach", trg:"배우자", src:"spouse", pos:"noun", gender:null,
     note:"Sino-Korean. 配偶 (match/couple) + 者 (person).\nOne's husband or wife.",
     example:"A: 배우자의 동의가 필요합니다.\nB: 내일 같이 오겠습니다.",
     exampleSrc:"A: The consent of your spouse is needed.\nB: I will come together with them tomorrow.",
     funFact:"From Hanja 配偶者. Gender-neutral formal term. Casual: 남편 (husband), 아내/와이프 (wife)."},

    {type:"teach", trg:"배추", src:"napa cabbage", pos:"noun", gender:null,
     note:"Native Korean word.\nThe main ingredient in Korean kimchi.",
     example:"A: 배추를 절여야 김치를 담글 수 있어요.\nB: 소금에 얼마나 절여요?",
     exampleSrc:"A: You need to salt the napa cabbage to make kimchi.\nB: How long do you salt it?",
     funFact:"Korea's annual 김장 (kimchi-making) season in November requires massive amounts of 배추. UNESCO-listed tradition."},

    {type:"teach", trg:"배추김치", src:"napa cabbage kimchi", pos:"noun", gender:null,
     note:"배추 (napa cabbage) + 김치 (kimchi).\nThe most common type of Korean kimchi.",
     example:"A: 배추김치가 역시 가장 맛있어.\nB: 엄마가 만든 게 최고야.",
     exampleSrc:"A: Napa cabbage kimchi is the most delicious after all.\nB: The one mom makes is the best.",
     funFact:"When Koreans say 김치, they usually mean 배추김치. There are over 200 types, but 배추김치 is THE kimchi."},

    {type:"teach", trg:"배치", src:"arrangement, placement, deployment", pos:"noun", gender:null,
     note:"Sino-Korean. 配 (distribute) + 置 (place).\nPutting things in their proper positions.",
     example:"A: 가구 배치를 바꿔 볼까?\nB: 좋아, 소파를 창가로 옮기자.",
     exampleSrc:"A: Shall we change the furniture arrangement?\nB: Sure, let us move the sofa by the window.",
     funFact:"From Hanja 配置. 인력 배치 (personnel deployment), 좌석 배치 (seating arrangement), 군대 배치 (military deployment)."},

    {type:"teach", trg:"백색", src:"white (color, formal)", pos:"noun", gender:null,
     note:"Sino-Korean. 白 (white) + 色 (color).\nThe formal term for white.",
     example:"A: 백색 페인트로 벽을 칠했어요.\nB: 방이 훨씬 밝아졌네요.",
     exampleSrc:"A: I painted the wall with white paint.\nB: The room looks much brighter.",
     funFact:"백색 is formal. Casual Korean uses 하얀색 or 흰색. 백의민족 (white-clothed people) is a historic name for Koreans."},

    {type:"fb",
     s:"김장철에는 {1}를 대량으로 구입합니다.",
     a:["배추"],
     opts:["배추","배구","배치","백색"],
     hint:"This vegetable is the main ingredient in Korea's most iconic dish, kimchi.",
     sSrc:"During kimchi-making season, people buy {1} in large quantities."},

    {type:"teach", trg:"백성", src:"the people, subjects (historical)", pos:"noun", gender:null,
     note:"Sino-Korean. 百 (hundred) + 姓 (family names).\nThe common people of a nation.",
     example:"A: 세종대왕은 백성을 위해 한글을 만들었어요.\nB: 정말 위대한 왕이에요.",
     exampleSrc:"A: King Sejong created Hangul for the common people.\nB: He was truly a great king.",
     funFact:"From Hanja 百姓. Literally 'hundred surnames,' meaning all families/people. Historical term, not modern usage."},

    {type:"teach", trg:"백인", src:"white person, Caucasian", pos:"noun", gender:null,
     note:"Sino-Korean. 白 (white) + 人 (person).\nA person of Caucasian descent.",
     example:"A: 이 지역에 백인 관광객이 많아요.\nB: 한류 덕분에 한국을 많이 찾아요.",
     exampleSrc:"A: There are many white tourists in this area.\nB: Thanks to Hallyu, many visit Korea.",
     funFact:"Korean racial terms: 백인 (white), 흑인 (Black), 동양인 (East Asian), 서양인 (Westerner). Usage is shifting toward more respectful terms."},

    {type:"teach", trg:"뱀", src:"snake, serpent", pos:"noun", gender:null,
     note:"Native Korean word.\nA legless reptile.",
     example:"A: 등산할 때 뱀을 조심해야 해.\nB: 맞아, 풀밭에 많을 수 있어.",
     exampleSrc:"A: You need to watch out for snakes when hiking.\nB: Right, there can be many in the grass.",
     funFact:"In Korean zodiac, 뱀띠 (Year of the Snake) is considered wise. 뱀 in dreams is traditionally a good omen."},

    {type:"teach", trg:"뱃사람", src:"boatman, sailor", pos:"noun", gender:null,
     note:"배 (boat) + ㅅ + 사람 (person).\nA person who works on boats.",
     example:"A: 할아버지가 뱃사람이셨어.\nB: 바다 이야기를 많이 해 주셨겠다.",
     exampleSrc:"A: My grandfather was a sailor.\nB: He must have told you many stories about the sea.",
     funFact:"The ㅅ in 뱃사람 is 사이시옷. Other 배 compounds: 뱃멀미 (seasickness), 뱃놀이 (boat excursion)."},

    {type:"teach", trg:"뱉다", src:"to spit, to spit out", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo expel something from the mouth.",
     example:"A: 씨를 뱉지 말고 휴지에 버려.\nB: 알겠어.",
     exampleSrc:"A: Do not spit out the seeds, put them in a tissue.\nB: OK.",
     funFact:"뱉다 is also used figuratively: 말을 뱉다 (to blurt out words), 독을 뱉다 (to spew poison/venom)."},

    {type:"teach", trg:"버려지다", src:"to be thrown away, to be abandoned", pos:"verb", gender:null,
     note:"버리다 (throw away) + 지다 (passive).\nSomething gets discarded.",
     example:"A: 이 강아지가 버려졌대요.\nB: 불쌍해, 우리가 키울까?",
     exampleSrc:"A: They say this puppy was abandoned.\nB: Poor thing, shall we raise it?",
     funFact:"유기견 (abandoned dog) is a big issue in Korea. Animal welfare organizations work to rehome 버려진 동물 (abandoned animals)."},

    {type:"teach", trg:"버섯", src:"mushroom", pos:"noun", gender:null,
     note:"Native Korean word.\nAn edible or inedible fungus.",
     example:"A: 표고버섯으로 찌개를 끓여 볼까?\nB: 좋아, 버섯이 국물을 맛있게 해.",
     exampleSrc:"A: Shall we make stew with shiitake mushrooms?\nB: Sure, mushrooms make the broth delicious.",
     funFact:"Korean cuisine uses many 버섯: 표고 (shiitake), 느타리 (oyster), 팽이 (enoki), 새송이 (king oyster)."},

    {type:"teach", trg:"버터", src:"butter", pos:"noun", gender:null,
     note:"Loanword from English 'butter.'\nDairy spread.",
     example:"A: 빵에 버터를 발라 줘.\nB: 잼도 같이 바를까?",
     exampleSrc:"A: Spread butter on the bread.\nB: Shall I put jam on too?",
     funFact:"버터 was once a luxury in Korea. 버터구이 오징어 (butter-grilled squid) is a popular Korean snack."},

    {type:"teach", trg:"버튼", src:"button", pos:"noun", gender:null,
     note:"Loanword from English 'button.'\nA push button on a device.",
     example:"A: 이 버튼을 누르면 돼요.\nB: 이거요? 알겠어요.",
     exampleSrc:"A: Just press this button.\nB: This one? Got it.",
     funFact:"Korean also has native 단추 (button on clothing) vs. 버튼 (button on machines/devices). Different usage."},

    {type:"mc",
     q:"'버려지다'의 반대 의미를 가진 표현은?",
     opts:["주워지다, 거두어지다","던져지다","깨뜨려지다","잃어버리다"],
     ans:"주워지다, 거두어지다",
     hint:"If being thrown away is one direction, being picked up or taken in is the opposite."},

    {type:"fb",
     s:"길에서 {1} 강아지를 구조했어요.",
     a:["버려진"],
     opts:["버려진","버섯","버터","버튼"],
     hint:"This passive verb describes a dog that was thrown away or abandoned by its owner.",
     sSrc:"We rescued an {1} puppy from the street."},

    {type:"match", pairs:[
      {trg:"방해하다", src:"to disturb"},
      {trg:"배우자", src:"spouse"},
      {trg:"배추김치", src:"napa cabbage kimchi"},
      {trg:"뱉다", src:"to spit out"}
    ]}
  ]
};
export default LESSON_17;
