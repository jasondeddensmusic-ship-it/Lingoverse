// Korean A2 Gap - Lesson 19: Writing Short Informal Letters (PP58 F8)
const LESSON_19 = {
  id:"kov2_a2gap_l19", title:"짧은 편지 쓰기", icon:"✉️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Writing Short Informal Letters",
     desc:"Learn to write short informal letters and casual KakaoTalk messages in Korean. Essential for texting friends and casual email.",
     goals:["Open a letter or message casually","Use common body phrases like 'I miss you' and 'long time no see'","Close with an appropriate farewell"]},

    // ── Teach 1: 또 봐요 (NEW – not taught before) ──
    {type:"teach", trg:"또 봐요", src:"see you again (casual-polite)", pos:"intj", gender:null,
     note:"Casual-polite goodbye. Literally: 'see again.'\n또 = again. 봐요 = polite present of 보다.\nCasual form: 또 봐.",
     example:"A: 벌써 가요?\nB: 네, 이제 가야 해요. 또 봐요!",
     exampleSrc:"A: You're leaving already?\nB: Yes, I have to go now. See you!",
     funFact:"Koreans often use 또 봐요 at the end of messages and letters. The full form is 또 만나요 (let's meet again), but 또 봐요 is more natural in casual speech and texting."},

    // ── Teach 2: 잘 있어요 (NEW – not taught before) ──
    {type:"teach", trg:"잘 있어요", src:"take care, stay well (casual-polite)", pos:"intj", gender:null,
     note:"Farewell phrase. Literally: 'be well.'\n잘 = well. 있어요 = polite form of 있다.\nCasual form: 잘 있어.",
     example:"A: 건강 잘 챙겨요!\nB: 고마워요. 언니도 잘 있어요!",
     exampleSrc:"A: Take good care of your health!\nB: Thank you. Stay well too, sis!",
     funFact:"잘 있어요 is one of the warmest letter closings in Korean. While 안녕히 계세요 is the formal goodbye, 잘 있어요 is more intimate, the kind you write to a close friend or family member."},

    // ── Tip: Letter structure ──
    {type:"tip", title:"✉️ Informal Korean Letter Structure",
     text:"Korean informal letters and KakaoTalk messages follow this pattern:\n\n1. Opening: 잘 지내? / 잘 지내요? (How are you?)\n2. Reconnect: 오랜만이에요! (Long time no see!)\n3. Body: share news, feelings\n4. Emotion: 보고 싶어요 (I miss you)\n5. Closing: 잘 있어요 / 또 봐요",
     deepDive:{title:"Formality Levels in Closings",
      text:"Polite-casual endings (해요체):\n또 봐요, see you (neutral-warm)\n잘 있어요, stay well\n\nCasual (반말, for very close friends):\n또 봐, see ya\n잘 있어, take care\n\n사랑해요 (I love you) goes at the very end, usually for family or romantic partners. In Korean letters, it signals deep affection, not casual friendship."}},

    // ── Quiz 1: mc, opening phrase ──
    {type:"mc", q:"Which phrase naturally opens an informal Korean letter after time apart?",
     opts:["오랜만이에요","또 봐요","잘 먹겠습니다","잘 있어요"],
     ans:"오랜만이에요",
     hint:"Use this when you haven't seen someone for a while, it means 'long time no see.'"},

    // ── Quiz 2: mc, closing phrase ──
    {type:"mc", q:"Your letter is ending. You want to say 'stay well.' You write:",
     opts:["보고 싶어요","잘 있어요","또 봐요","오랜만이에요"],
     ans:"잘 있어요",
     hint:"This closing literally means 'be well', the warmest informal sign-off."},

    // ── Quiz 3: fb (production), fill the goodbye ──
    {type:"fb",
     s:"편지 마지막에 뭐라고 써요?\n(What do you write at the end of a letter?)\n'See you again': ___.",
     a:"또 봐요",
     opts:["또 봐요","잘 지내요","오랜만이에요","보고 싶어요"],
     hint:"Two syllables + polite form of '보다.' Used as a casual goodbye."},

    // ── Quiz 4: fb (production), fill the closing ──
    {type:"fb",
     s:"편지 끝에 이렇게 써요: 건강 잘 챙겨요. ___ :)\n(At the end of a letter: Take care of your health. ___ :))",
     a:"잘 있어요",
     opts:["잘 있어요","잘 지내요","또 봐요","오랜만이에요"],
     hint:"Wish the reader to 'be well.' Three syllables, polite ending."},

    // ── Quiz 5: match, letter phrases ──
    {type:"match", pairs:[
      {trg:"오랜만이에요", src:"long time no see"},
      {trg:"보고 싶어요", src:"I miss you"},
      {trg:"또 봐요", src:"see you again"},
      {trg:"잘 있어요", src:"stay well / take care"}
    ]},

    // ── Quiz 6: mc, 잘 지내요? usage ──
    {type:"mc", q:"잘 지내요? is best used:",
     opts:["As the main body of a message","As a letter closing","As an opening greeting after some time apart","Only in formal letters"],
     ans:"As an opening greeting after some time apart",
     hint:"This phrase asks 'How have you been?', natural at the start of a message to reconnect."},

    // ── Quiz 7: mc, 또 봐요 meaning ──
    {type:"mc", q:"또 봐요 literally means:",
     opts:["Stay well","I miss you","Take care of yourself","See again"],
     ans:"See again",
     hint:"또 = …. 봐요 = polite present of 보다 (to see). Put them together."},

    // ── Quiz 8: drag_fill, compose a short message ──
    {type:"drag_fill",
     s:"카카오톡 메시지: {1}! {2}이에요. {3}. 빨리 만나요. {4}!",
     blanks:{"1":"오랜만","2":"보고 싶어요","3":"잘 지내요","4":"또 봐요"},
     pool:["오랜만","보고 싶어요","잘 지내요","또 봐요","잘 있어요","고마워요","사랑해요"],
     hint:"A short KakaoTalk message: Long time no see! I miss you. How are you? See you soon. Bye!"}
  ]
};

export default LESSON_19;
