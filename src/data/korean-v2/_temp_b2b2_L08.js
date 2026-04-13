// Korean B2 — Batch 2, Lesson 8: Kitchen and Temperature
// Words: 냄비, 냇물, 냉동, 냉방, 넉, 넉넉하다, 널리, 넓어지다, 넘겨주다, 넘기다, 넘어뜨리다, 넘어오다, 넘어지다, 김, 녹다, 녹색, 녹음, 녹음하다, 녹이다, 녹차

const LESSON_8 = {
  id:"kov2_b2b2_l8", title:"부엌과 온도", icon:"🍲", xp:15, board:true,
  steps:[
    {type:"intro", title:"부엌과 온도",
     desc:"Explore vocabulary for cooking, temperature, and movement. From kitchen tools to physical actions, these words enrich everyday descriptions.",
     goals:["Master 20 words about cooking, temperature, and movement","Understand causative verb pairs for melting and freezing","Learn words for abundance and spatial change"]},

    {type:"teach", trg:"냄비", src:"pot, saucepan", pos:"noun", gender:null,
     note:"Native Korean. A cooking vessel\nused on a stovetop.",
     example:"A: 큰 냄비에 물을 끓여 주세요.\nB: 라면 끓일 거예요?",
     exampleSrc:"A: Please boil water in a large pot.\nB: Are you going to make ramen?",
     funFact:"냄비 comes from the Japanese なべ (nabe). Many Korean kitchen words have Japanese colonial-era origins."},

    {type:"teach", trg:"냇물", src:"stream water, brook", pos:"noun", gender:null,
     note:"내 (stream) + ㅅ (linking) + 물 (water).\nWater flowing in a small stream.",
     example:"A: 냇물 소리가 들려요.\nB: 가까이에 계곡이 있나 봐요.",
     exampleSrc:"A: I can hear the sound of a stream.\nB: There must be a valley nearby.",
     funFact:"냇물 has another 사이시옷. The linking ㅅ is one of Korean's trickiest spelling rules."},

    {type:"teach", trg:"냉동", src:"freezing, frozen storage", pos:"noun", gender:null,
     note:"Sino-Korean. 冷 (cold) + 凍 (freeze).\nThe process of freezing food or items.",
     example:"A: 고기를 냉동실에 넣었어?\nB: 네, 냉동 보관했어요.",
     exampleSrc:"A: Did you put the meat in the freezer?\nB: Yes, I stored it frozen.",
     funFact:"냉동 만두 (frozen dumplings) is one of Korea's most popular convenience foods. Every freezer has some."},

    {type:"teach", trg:"냉방", src:"air conditioning, cooling", pos:"noun", gender:null,
     note:"Sino-Korean. 冷 (cold) + 房 (room).\nCooling a room. Opposite of 난방 (heating).",
     example:"A: 냉방이 너무 세요.\nB: 온도를 좀 올릴까요?",
     exampleSrc:"A: The air conditioning is too strong.\nB: Should I raise the temperature a bit?",
     funFact:"냉방병 (air conditioning sickness) is a recognized condition in Korea. Office workers bundle up in summer."},

    {type:"teach", trg:"넉", src:"four (native Korean counter)", pos:"noun", gender:null,
     note:"Native Korean number. Short form of '넷.'\nUsed before counters.",
     example:"A: 사과 넉 개 주세요.\nB: 네, 여기 있습니다.",
     exampleSrc:"A: Give me four apples, please.\nB: Here you go.",
     funFact:"넉 is the counter form of 넷 (four). It drops the final ㅅ before a counter: 넉 개, 넉 명, 넉 잔."},

    {type:"teach", trg:"넉넉하다", src:"to be ample, generous, sufficient", pos:"adj", gender:null,
     note:"Native Korean. Having more than enough.\nDescribes quantity, time, or personality.",
     example:"A: 시간이 넉넉해요?\nB: 네, 한 시간이나 남았어요.",
     exampleSrc:"A: Do you have ample time?\nB: Yes, there is a whole hour left.",
     funFact:"넉넉하다 describes both material abundance and a generous personality. 마음이 넉넉하다 (generous-hearted)."},

    {type:"mc",
     q:"'냉방'의 반대말은?",
     opts:["난방","냉동","냉장","냉수"],
     ans:"난방",
     hint:"If 냉방 means cooling a room, the opposite is the system that warms a room."},

    {type:"teach", trg:"널리", src:"widely, broadly", pos:"adv", gender:null,
     note:"넓다 (wide) + 이 (adverb suffix).\nAcross a wide area or among many people.",
     example:"A: 이 노래가 널리 알려져 있어요.\nB: 전 세계적으로 유명하죠.",
     exampleSrc:"A: This song is widely known.\nB: It is famous worldwide.",
     funFact:"널리 알려지다 (widely known) and 널리 퍼지다 (widely spread) are the two most common collocations."},

    {type:"teach", trg:"넓어지다", src:"to become wider, to broaden", pos:"verb", gender:null,
     note:"넓다 (wide) + 어지다 (become).\nSomething expands in width or scope.",
     example:"A: 시야가 넓어졌어요.\nB: 여행을 많이 다니면 그래요.",
     exampleSrc:"A: My perspective has broadened.\nB: That happens when you travel a lot.",
     funFact:"시야가 넓어지다 (perspective broadens) is figurative. 도로가 넓어지다 (road widens) is literal."},

    {type:"teach", trg:"넘겨주다", src:"to hand over, to pass along", pos:"verb", gender:null,
     note:"넘기다 (pass over) + 어 + 주다 (give).\nTo transfer something to another person.",
     example:"A: 서류를 다음 담당자에게 넘겨주세요.\nB: 알겠습니다.",
     exampleSrc:"A: Please hand the documents over to the next person in charge.\nB: Understood.",
     funFact:"넘겨주다 implies a deliberate transfer of responsibility. Common in office and administrative contexts."},

    {type:"teach", trg:"넘기다", src:"to turn over, to skip, to pass", pos:"verb", gender:null,
     note:"Causative of 넘다 (to cross over).\nTo cause something to go over to the other side.",
     example:"A: 다음 페이지로 넘겨 주세요.\nB: 네, 여기 보세요.",
     exampleSrc:"A: Please turn to the next page.\nB: Yes, look here.",
     funFact:"넘기다 has many uses: 페이지를 넘기다 (turn page), 고비를 넘기다 (get past a crisis), 위기를 넘기다 (survive a crisis)."},

    {type:"teach", trg:"넘어뜨리다", src:"to knock over, to topple", pos:"verb", gender:null,
     note:"넘다 (cross) + 어 + 뜨리다 (causative).\nTo cause something to fall over.",
     example:"A: 누가 화분을 넘어뜨렸어?\nB: 고양이가 넘어뜨렸어.",
     exampleSrc:"A: Who knocked over the flower pot?\nB: The cat knocked it over.",
     funFact:"The -뜨리다 suffix adds forceful causation. Compare 깨뜨리다 (smash), 무너뜨리다 (demolish)."},

    {type:"fb",
     s:"이 소식은 {1} 알려져 있어요.",
     a:["널리"],
     opts:["널리","넉넉히","깊숙이","나란히"],
     hint:"An adverb meaning across a wide area or among many people. Think 'broadly known.'",
     sSrc:"This news is {1} known."},

    {type:"teach", trg:"넘어오다", src:"to come over, to cross over (toward speaker)", pos:"verb", gender:null,
     note:"넘다 (cross) + 어 + 오다 (come).\nTo cross over toward the speaker's side.",
     example:"A: 이쪽으로 넘어오세요.\nB: 울타리를 넘어도 되나요?",
     exampleSrc:"A: Come over to this side.\nB: Is it okay to climb over the fence?",
     funFact:"넘어오다 (come over) vs 넘어가다 (go over). The -오다/-가다 suffix changes the direction of movement."},

    {type:"teach", trg:"넘어지다", src:"to fall over, to trip", pos:"verb", gender:null,
     note:"넘다 (cross/topple) + 어지다 (become).\nTo lose balance and fall.",
     example:"A: 길에서 넘어졌어요.\nB: 다치지 않았어요?",
     exampleSrc:"A: I fell on the street.\nB: Were you not hurt?",
     funFact:"넘어지다 is involuntary (you fall). 넘어뜨리다 is transitive (you knock something over). A key pair."},

    {type:"teach", trg:"김", src:"seaweed; steam", pos:"noun", gender:null,
     note:"Native Korean. Two meanings:\n1. Edible dried seaweed. 2. Rising steam.",
     example:"A: 김밥에 김이 꼭 필요해요.\nB: 맞아요, 김 없이는 안 되죠.",
     exampleSrc:"A: Seaweed is essential for gimbap.\nB: Right, you cannot make it without seaweed.",
     funFact:"김 (gim/seaweed) is so important that 김 자반 (seasoned seaweed) is a daily side dish in Korean meals."},

    {type:"teach", trg:"녹다", src:"to melt, to thaw", pos:"verb", gender:null,
     note:"Native Korean. A solid becomes liquid\nthrough heat or warmth.",
     example:"A: 눈이 녹기 시작했어요.\nB: 봄이 오고 있네요.",
     exampleSrc:"A: The snow has started to melt.\nB: Spring is coming.",
     funFact:"녹다 is intransitive (it melts by itself). 녹이다 is causative (you melt it). A fundamental verb pair."},

    {type:"teach", trg:"녹색", src:"green color", pos:"noun", gender:null,
     note:"Sino-Korean. 綠 (green) + 色 (color).\nThe color of plants and nature.",
     example:"A: 녹색 신호등이 켜졌어요.\nB: 이제 건널 수 있어요.",
     exampleSrc:"A: The green traffic light turned on.\nB: We can cross now.",
     funFact:"녹색 is Sino-Korean formal green. 초록색 is the native Korean word. 녹색당 (Green Party) uses the Hanja form."},

    {type:"mc",
     q:"'넘어지다'와 '넘어뜨리다'의 차이는?",
     opts:["스스로 넘어지다 vs 남을 넘어뜨리다","둘 다 같은 뜻이다","빨리 넘어지다 vs 천천히 넘어지다","앞으로 넘어지다 vs 뒤로 넘어지다"],
     ans:"스스로 넘어지다 vs 남을 넘어뜨리다",
     hint:"One is falling by yourself (intransitive), the other is causing someone else to fall (transitive)."},

    {type:"teach", trg:"녹음", src:"recording (audio); verdure", pos:"noun", gender:null,
     note:"Two Hanja: 錄音 (record sound) or 綠陰 (green shade).\nContext determines meaning.",
     example:"A: 이 녹음 파일을 들어 보세요.\nB: 음질이 좋네요.",
     exampleSrc:"A: Please listen to this recording file.\nB: The sound quality is good.",
     funFact:"녹음 meaning 'recording' (錄音) is far more common today. 녹음 meaning 'green shade' (綠陰) is literary."},

    {type:"teach", trg:"녹음하다", src:"to record (audio)", pos:"verb", gender:null,
     note:"녹음 (recording) + 하다.\nTo capture sound onto a medium.",
     example:"A: 회의 내용을 녹음했어요?\nB: 네, 전부 녹음해 놨어요.",
     exampleSrc:"A: Did you record the meeting?\nB: Yes, I recorded everything.",
     funFact:"녹음하다 is audio. 녹화하다 is video. 녹 (錄) means 'record' and combines with different media types."},

    {type:"teach", trg:"녹이다", src:"to melt (something), to thaw", pos:"verb", gender:null,
     note:"Causative of 녹다. To cause something\nto melt or dissolve.",
     example:"A: 버터를 프라이팬에 녹여 주세요.\nB: 약한 불로 녹일게요.",
     exampleSrc:"A: Please melt butter in the frying pan.\nB: I will melt it on low heat.",
     funFact:"마음을 녹이다 (melt someone's heart) is a beautiful figurative use. Common in romance contexts."},

    {type:"teach", trg:"녹차", src:"green tea", pos:"noun", gender:null,
     note:"Sino-Korean. 綠 (green) + 茶 (tea).\nTea made from unfermented leaves.",
     example:"A: 녹차 한 잔 드실래요?\nB: 네, 감사합니다.",
     exampleSrc:"A: Would you like a cup of green tea?\nB: Yes, thank you.",
     funFact:"Boseong in South Korea produces 40% of the nation's green tea. Its terraced fields are a famous tourist site."},

    {type:"match", pairs:[
      {trg:"냄비", src:"pot"},
      {trg:"냉동", src:"freezing"},
      {trg:"녹차", src:"green tea"},
      {trg:"김", src:"seaweed"},
      {trg:"녹음하다", src:"to record"}
    ]},

    {type:"fb",
     s:"눈이 {1} 시작했어요.",
     a:["녹기"],
     opts:["녹기","녹이기","녹음하기","넘기기"],
     hint:"The intransitive verb for a solid becoming liquid naturally, like snow in spring warmth.",
     sSrc:"The snow started to {1}."}
  ]
};
export default LESSON_8;
