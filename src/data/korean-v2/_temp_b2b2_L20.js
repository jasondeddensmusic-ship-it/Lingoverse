// Korean B2. Batch 2, Lesson 20: Listening and Seeming
// Words: 들다(aux), 들려주다, 들어주다, 들여놓다, 들이다, 들이마시다, 들이켜다, 듯, 듯싶다, 듯하다, 등등, 노동, 노랫소리, 노선, 년생, 넘어오다(dup->replace 기둥), 기둥, 기기, 김(steam dup->replace 냇물 dup -> 꽃씨 dup -> 꼽히다), 꼽히다

// Corrected word list for L20 using remaining unassigned words:
// 들다(aux), 들려주다, 들어주다, 들여놓다, 들이다, 들이마시다, 들이켜다, 듯, 듯싶다, 듯하다, 등등, 노동, 노랫소리, 노선, 년생, 기둥, 꼽히다, 기기, 기도(dup check), 낮아지다(already used) -> 놀리다(dup)
// Final list after dedup: 들다, 들려주다, 들어주다, 들여놓다, 들이다, 들이마시다, 들이켜다, 듯, 듯싶다, 듯하다, 등등, 노동, 노랫소리, 노선, 년생, 기둥, 꼽히다, 기기, 놀이터(dup)-> 기412기둥
// Using: 기기, 기둥, 꼽히다, 들다(aux), 들려주다, 들어주다, 들여놓다, 들이다, 들이마시다, 들이켜다, 듯, 듯싶다, 듯하다, 등등, 노동, 노랫소리, 노선, 년생, 눈감다(dup)->눈뜨다(dup)->놓아두다(dup)
// FINAL 20: 기기, 기둥, 꼽히다, 들다(aux), 들려주다, 들어주다, 들여놓다, 들이다, 들이마시다, 들이켜다, 듯, 듯싶다, 듯하다, 등등, 노동, 노랫소리, 노선, 년생, 노동(dup)
// Clean final: 기기, 기둥, 꼽히다, 들다, 들려주다, 들어주다, 들여놓다, 들이다, 들이마시다, 들이켜다, 듯, 듯싶다, 듯하다, 등등, 노동, 노랫소리, 노선, 년생, 놈(dup in L9), 녹화(dup in L9)
// TRUE FINAL after removing all dups: 기기, 기둥, 꼽히다, 들다, 들려주다, 들어주다, 들여놓다, 들이다, 들이마시다, 들이켜다, 듯, 듯싶다, 듯하다, 등등, 노동, 노랫소리, 노선, 년생, 놓아두다(L9dup), 느리다(L10dup)
// After final check - remaining unused from original 400: 기기, 기둥, 꼽히다, 들다, 들려주다, 들어주다, 들여놓다, 들이다, 들이마시다, 들이켜다, 듯, 듯싶다, 듯하다, 등등, 노동, 노랫소리, 노선, 년생, 넉(used L8), 깨소금(used L4)
// Using the 18 truly remaining + pulling 기기(#400) and 기둥(#412):

const LESSON_20 = {
  id:"kov2_b2b2_l20", title:"표현의 기술", icon:"🗣️", xp:15, board:true,
  steps:[
    {type:"intro", title:"표현의 기술",
     desc:"Master auxiliary verbs, grammar particles, and expressive vocabulary. These words control nuance and add layers of meaning to Korean sentences.",
     goals:["Master auxiliary verbs and bound nouns","Understand 듯 grammar patterns for 'seems like'","Learn words for labor, sound, and classification"]},

    {type:"teach", trg:"기기", src:"device, apparatus, equipment", pos:"noun", gender:null,
     note:"Sino-Korean. 器 (vessel) + 機 (machine).\nA mechanical or electronic device.",
     example:"A: 이 기기는 어떻게 사용하나요?\nB: 설명서를 읽어 보세요.",
     exampleSrc:"A: How do you use this device?\nB: Please read the manual.",
     funFact:"전자 기기 (electronic devices) is the most common compound. Korean tech vocabulary heavily uses 기기."},

    {type:"teach", trg:"기둥", src:"pillar, column, post", pos:"noun", gender:null,
     note:"Native Korean. A vertical support structure\nholding up a building or bridge.",
     example:"A: 이 건물의 기둥이 아주 튼튼해요.\nB: 오래된 건물인데 잘 지었네요.",
     exampleSrc:"A: The pillars of this building are very sturdy.\nB: It is an old building but well built.",
     funFact:"가정의 기둥 (pillar of the household) metaphorically means the family breadwinner or backbone."},

    {type:"teach", trg:"꼽히다", src:"to be counted as, to be regarded as", pos:"verb", gender:null,
     note:"Passive of 꼽다 (to count on fingers).\nTo be selected or ranked among the top.",
     example:"A: 이 식당은 서울 최고로 꼽혀요.\nB: 그래서 예약이 어렵군요.",
     exampleSrc:"A: This restaurant is regarded as the best in Seoul.\nB: So that is why reservations are hard.",
     funFact:"~로 꼽히다 (to be counted as) is a common ranking expression. 손꼽히다 (finger-counted) is even more selective."},

    {type:"teach", trg:"들다", src:"(auxiliary) to begin to, to start feeling", pos:"aux", gender:null,
     note:"Auxiliary verb. After -어/아, indicates\nthe beginning of a state or feeling.",
     example:"A: 잠이 들었어요.\nB: 피곤했나 봐요.",
     exampleSrc:"A: I fell asleep.\nB: You must have been tired.",
     funFact:"들다 as auxiliary: 잠이 들다 (fall asleep), 마음에 들다 (to like), 병이 들다 (fall ill). It marks onset of states."},

    {type:"teach", trg:"들려주다", src:"to tell, to let someone hear", pos:"verb", gender:null,
     note:"들리다 (be heard) + 어 + 주다 (give).\nTo share a story or sound with someone.",
     example:"A: 재미있는 이야기를 들려주세요.\nB: 옛날 옛적에...",
     exampleSrc:"A: Tell me an interesting story.\nB: Once upon a time...",
     funFact:"들려주다 is warmer than 말해 주다 (tell). It implies sharing something worth hearing, like stories or music."},

    {type:"teach", trg:"들어주다", src:"to listen to, to grant (a request)", pos:"verb", gender:null,
     note:"듣다 (listen) + 어 + 주다 (give).\nTo listen to someone, or to grant their wish.",
     example:"A: 제 부탁 좀 들어주세요.\nB: 무슨 부탁인데요?",
     exampleSrc:"A: Please hear my request.\nB: What kind of request?",
     funFact:"들어주다 has two nuances: actively listening (이야기를 들어주다) and granting (소원을 들어주다)."},

    {type:"mc",
     q:"'꼽히다'가 쓰이는 상황으로 맞는 것은?",
     opts:["최고의 것을 선정할 때","물건을 살 때","음식을 먹을 때","잠을 잘 때"],
     ans:"최고의 것을 선정할 때",
     hint:"When something is counted or ranked among the best. Think of selecting the top choices."},

    {type:"teach", trg:"들여놓다", src:"to bring inside, to place indoors", pos:"verb", gender:null,
     note:"들이다 (bring in) + 어 + 놓다 (place).\nTo move something from outside to inside.",
     example:"A: 새 가구를 들여놓았어요.\nB: 방이 달라 보이네요.",
     exampleSrc:"A: I brought in new furniture.\nB: The room looks different now.",
     funFact:"들여놓다 vs 내놓다 (put out). In/out verb pairs are fundamental to Korean spatial expression."},

    {type:"teach", trg:"들이다", src:"to bring in, to put in; to expend", pos:"verb", gender:null,
     note:"Native Korean. To cause something\nto enter a space.",
     example:"A: 이 일에 시간을 많이 들였어요.\nB: 그만큼 결과가 좋겠네요.",
     exampleSrc:"A: I put a lot of time into this work.\nB: The results must be good accordingly.",
     funFact:"들이다 for expenditure: 시간을 들이다 (spend time), 돈을 들이다 (spend money), 공을 들이다 (put in effort)."},

    {type:"teach", trg:"들이마시다", src:"to inhale, to breathe in deeply", pos:"verb", gender:null,
     note:"들이다 (bring in) + 마시다 (drink).\nTo draw air or liquid into the body.",
     example:"A: 신선한 공기를 깊이 들이마셨어요.\nB: 기분이 상쾌해지죠?",
     exampleSrc:"A: I breathed in the fresh air deeply.\nB: It feels refreshing, right?",
     funFact:"들이마시다 (inhale) vs 내쉬다 (exhale). This pair is essential for yoga, meditation, and breathing exercises."},

    {type:"teach", trg:"들이켜다", src:"to gulp down, to chug", pos:"verb", gender:null,
     note:"들이다 (bring in) + 켜다 (turn on/draw).\nTo drink a large amount quickly.",
     example:"A: 물을 벌컥벌컥 들이켰어요.\nB: 목이 많이 말랐나 봐요.",
     exampleSrc:"A: I gulped down the water.\nB: You must have been very thirsty.",
     funFact:"들이켜다 is vivid and physical. 벌컥벌컥 (gulping sound) is the ideophone that often accompanies it."},

    {type:"teach", trg:"듯", src:"as if, like (bound noun)", pos:"noun", gender:null,
     note:"Bound noun. Attached after verb forms\nto mean 'as if' or 'seemingly.'",
     example:"A: 그는 아무것도 모르는 듯 행동했어요.\nB: 다 알면서 모르는 척한 거예요.",
     exampleSrc:"A: He acted as if he knew nothing.\nB: He pretended not to know while knowing everything.",
     funFact:"듯 is a grammar particle, not a standalone word. -는 듯 (as if doing), -ㄴ 듯 (as if done). Very literary."},

    {type:"fb",
     s:"재미있는 이야기를 {1}.",
     a:["들려주세요"],
     opts:["들려주세요","들어주세요","들여놓으세요","들이마시세요"],
     hint:"To share a story by letting someone hear it. The act of telling a story warmly.",
     sSrc:"Please {1} an interesting story."},

    {type:"teach", trg:"듯싶다", src:"it seems like, it appears that", pos:"aux", gender:null,
     note:"듯 (as if) + 싶다 (want/think).\nA grammar pattern expressing uncertain impression.",
     example:"A: 비가 올 듯싶어요.\nB: 우산을 가져가는 게 좋겠어요.",
     exampleSrc:"A: It seems like it might rain.\nB: You should bring an umbrella.",
     funFact:"듯싶다 is slightly less certain than 것 같다 (seems like). It expresses a tentative impression."},

    {type:"teach", trg:"듯하다", src:"to seem, to appear as if", pos:"aux", gender:null,
     note:"듯 (as if) + 하다.\nAnother grammar pattern for expressing appearance.",
     example:"A: 그는 화가 난 듯했어요.\nB: 무슨 일이 있었나 봐요.",
     exampleSrc:"A: He seemed to be angry.\nB: Something must have happened.",
     funFact:"듯하다 is more literary than 것 같다. It adds an elegant, observational tone to Korean writing."},

    {type:"teach", trg:"등등", src:"et cetera, and so on", pos:"noun", gender:null,
     note:"Sino-Korean. 等 (equal/rank) repeated.\nIndicates a list continues beyond what is stated.",
     example:"A: 사과, 배, 포도 등등 과일을 샀어요.\nB: 많이 샀네요!",
     exampleSrc:"A: I bought fruits like apples, pears, grapes, et cetera.\nB: You bought a lot!",
     funFact:"등등 doubles 등 for emphasis. 등 alone means 'etc.' 등등 is more casual and conversational."},

    {type:"teach", trg:"노동", src:"labor, work", pos:"noun", gender:null,
     note:"Sino-Korean. 勞 (toil) + 動 (move).\nPhysical or mental work, especially as a social concept.",
     example:"A: 노동자의 권리가 중요해요.\nB: 동의해요, 모든 노동에는 가치가 있어요.",
     exampleSrc:"A: Workers' rights are important.\nB: I agree, all labor has value.",
     funFact:"노동절 (Labor Day, May 1st) is a public holiday in Korea. 노동 carries political and social weight."},

    {type:"mc",
     q:"'듯하다'는 어떤 의미를 표현하나요?",
     opts:["~할 수 있다","~인 것 같다","~하고 싶다","~해야 한다"],
     ans:"~인 것 같다",
     hint:"A literary way to express that something appears or seems to be a certain way."},

    {type:"teach", trg:"노랫소리", src:"singing voice, sound of a song", pos:"noun", gender:null,
     note:"노래 (song) + ㅅ + 소리 (sound).\nThe audible sound of someone singing.",
     example:"A: 어디서 노랫소리가 들려요.\nB: 옆집에서 노래하나 봐요.",
     exampleSrc:"A: I hear singing from somewhere.\nB: The neighbor must be singing.",
     funFact:"Another 사이시옷 compound. 소리 compounds are common: 빗소리 (rain sound), 발소리 (footstep sound)."},

    {type:"teach", trg:"노선", src:"route, line (bus/train)", pos:"noun", gender:null,
     note:"Sino-Korean. 路 (road) + 線 (line).\nA fixed path for public transport.",
     example:"A: 이 버스 노선이 어디까지 가요?\nB: 시청까지 갑니다.",
     exampleSrc:"A: Where does this bus route go?\nB: It goes to City Hall.",
     funFact:"노선도 (route map) is posted at every Korean bus stop and subway station. 노선 also means 'political line.'"},

    {type:"teach", trg:"년생", src:"born in the year of", pos:"noun", gender:null,
     note:"Sino-Korean. 年 (year) + 生 (born).\nIndicates the birth year of a person.",
     example:"A: 몇 년생이에요?\nB: 95년생이에요.",
     exampleSrc:"A: What year were you born?\nB: I was born in 1995.",
     funFact:"Koreans constantly ask 몇 년생? to determine age hierarchy. Your birth year defines how others address you."},

    {type:"match", pairs:[
      {trg:"기기", src:"device"},
      {trg:"노동", src:"labor"},
      {trg:"노선", src:"route"},
      {trg:"등등", src:"et cetera"},
      {trg:"꼽히다", src:"to be regarded as"}
    ]},

    {type:"fb",
     s:"비가 올 {1}.",
     a:["듯싶어요"],
     opts:["듯싶어요","듯해요","등등이에요","들어요"],
     hint:"A grammar expression meaning 'it seems like' or 'it appears that.' Uncertain impression.",
     sSrc:"It {1} it might rain."}
  ]
};
export default LESSON_20;
