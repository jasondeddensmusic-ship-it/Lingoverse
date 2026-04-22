// Korean A2 Gap - Lesson 4: Daily Life, Time & Frequency
// Temp file - to be merged into unit by main session

const LESSON_4 = {
  id:"kov2_a2gap_l4", title:"시간과 일상", icon:"📅", xp:15, board:true,
  steps:[
    {type:"intro", title:"시간과 일상",
     desc:"Learn time expressions, frequency words, and daily life vocabulary for describing routines, schedules, and sequences of events.",
     goals:["Use time and frequency adverbs naturally","Describe daily routines and schedules","Talk about dates, durations, and sequences"]},

    // --- Teach block 1: Sequence & frequency ---
    {type:"teach", trg:"처음", src:"first time; beginning", pos:"noun", gender:null,
     note:"The very first time or the beginning of something.\nAlso used as an adverb: 'for the first time.'",
     example:"A: 한국은 처음이에요?\nB: 네, 처음 왔어요.",
     exampleSrc:"A: Is this your first time in Korea?\nB: Yes, I came for the first time.",
     funFact:"처음 is pure Korean. The phrase '처음 뵙겠습니다' (I am seeing you for the first time) is the formal way to say 'Nice to meet you' in business Korean."},

    {type:"teach", trg:"마지막", src:"last; final", pos:"noun", gender:null,
     note:"The very last or final one. Also used as a modifier: 마지막 날 (last day).",
     example:"A: 이것이 마지막 기회예요.\nB: 알겠어요, 열심히 할게요.",
     exampleSrc:"A: This is the last chance.\nB: I understand, I will work hard.",
     funFact:"Pure Korean word. 처음과 마지막 (the beginning and the end) is a common pair. '처음처럼' (like the first time) is actually a famous soju brand name."},

    {type:"teach", trg:"매일", src:"every day", pos:"adv", gender:null,
     note:"Daily, each day. 매 (every) + 일 (day). Very high frequency word.",
     example:"A: 매일 운동해요?\nB: 네, 아침마다 해요.",
     exampleSrc:"A: Do you exercise every day?\nB: Yes, I do it every morning.",
     funFact:"The prefix 매 (每, every) creates a series: 매일 (every day), 매주 (every week), 매달 (every month), 매년 (every year). Learn one, unlock four."},

    {type:"teach", trg:"계속", src:"continuously; to continue", pos:"adv", gender:null,
     note:"Keeps going without stopping. Used as adverb or with 하다.",
     example:"A: 비가 계속 와요.\nB: 우산 가져가세요.",
     exampleSrc:"A: It keeps raining.\nB: Please take an umbrella.",
     funFact:"From Hanja 繼續: 繼 (succeed/continue) + 續 (continue). The double meaning of 'continue' in both characters emphasizes unbroken persistence."},

    {type:"teach", trg:"바로", src:"right away; exactly", pos:"adv", gender:null,
     note:"Immediately, or 'exactly/precisely.' Context determines meaning.",
     example:"A: 언제 갈 거예요?\nB: 바로 갈 거예요.",
     exampleSrc:"A: When will you go?\nB: I will go right away.",
     funFact:"바로 has two core meanings: time ('immediately') and precision ('exactly'). '바로 그거예요!' (That is exactly it!) is a common exclamation of agreement."},

    // --- Quiz block 1 ---
    {type:"mc",
     q:"아침부터 저녁까지 비가 멈추지 않으면?",
     opts:["계속 와요","바로 와요","처음 와요","마지막 와요"],
     ans:"계속 와요",
     hint:"When rain does not stop and persists all day long, it keeps going on and on."},

    {type:"fb",
     s:"한국에 {1} 왔어요. 모든 것이 새로워요.",
     a:["처음"],
     opts:["처음","마지막","매일","바로"],
     hint:"When everything is new because you have never been somewhere before.",
     sSrc:"I came to Korea for the {1} time. Everything is new."},

    // --- Teach block 2: Time references ---
    {type:"teach", trg:"이제", src:"now; from now on", pos:"adv", gender:null,
     note:"Marks a transition to a new state. 'Now' with a sense of change.",
     example:"A: 이제 출발할까요?\nB: 네, 가요!",
     exampleSrc:"A: Shall we leave now?\nB: Yes, let's go!",
     funFact:"이제 implies change, while 지금 is neutral 'now.' '이제 괜찮아요' (I am okay now) suggests you were NOT okay before. Subtle but important difference."},

    {type:"teach", trg:"갑자기", src:"suddenly", pos:"adv", gender:null,
     note:"Without warning or expectation. Used for surprising events.",
     example:"A: 갑자기 비가 왔어요.\nB: 우산이 없어서 다 젖었어요.",
     exampleSrc:"A: It suddenly rained.\nB: I got all wet because I had no umbrella.",
     funFact:"Pure Korean adverb. Korean storytelling loves 갑자기 for dramatic moments. In K-dramas, 갑자기 signals plot twists, surprise encounters, and dramatic weather."},

    {type:"teach", trg:"이때", src:"at this time; at that moment", pos:"adv", gender:null,
     note:"Refers to a specific point in time. 이 (this) + 때 (time).",
     example:"A: 이때 전화가 왔어요.\nB: 누구한테요?",
     exampleSrc:"A: At that moment, a call came.\nB: From whom?",
     funFact:"때 (time/moment) is one of the most useful Korean nouns: 그때 (at that time), 이때 (at this time), 아무 때나 (any time), 점심때 (lunchtime). It builds many expressions."},

    {type:"teach", trg:"그동안", src:"meanwhile; during that time", pos:"adv", gender:null,
     note:"The period between then and now. 그 (that) + 동안 (during).",
     example:"A: 그동안 잘 지냈어요?\nB: 네, 잘 지냈어요.",
     exampleSrc:"A: Have you been well during this time?\nB: Yes, I have been well.",
     funFact:"그동안 잘 지냈어요? is the standard greeting when reuniting after a long time. It literally asks 'Did you spend that time well?' A warm, caring question."},

    {type:"teach", trg:"그날", src:"that day", pos:"noun", gender:null,
     note:"A specific day being referenced. 그 (that) + 날 (day).",
     example:"A: 그날 뭐 했어요?\nB: 친구를 만났어요.",
     exampleSrc:"A: What did you do that day?\nB: I met a friend.",
     funFact:"날 is the pure Korean word for 'day,' while 일 is Sino-Korean. 그날 is used in storytelling and memories. 'Someday' is 언젠가, but 'that specific day' is always 그날."},

    // --- Quiz block 2 ---
    {type:"mc",
     q:"오랫동안 못 본 친구에게 뭐라고 해요?",
     opts:["갑자기 왜 왔어요?","그동안 잘 지냈어요?","그날 뭐 했어요?","이때 어디 갔어요?"],
     ans:"그동안 잘 지냈어요?",
     hint:"A warm reunion greeting asking if the other person has been doing well in the time apart."},

    {type:"fb",
     s:"날씨가 좋았는데 {1} 비가 왔어요.",
     a:["갑자기"],
     opts:["갑자기","계속","바로","이제"],
     hint:"When something happens without any warning, catching you by surprise.",
     sSrc:"The weather was nice but it {1} rained."},

    // --- Teach block 3: Calendar & duration ---
    {type:"teach", trg:"며칠", src:"how many days; a few days", pos:"noun", gender:null,
     note:"Question word for number of days, or 'several days.'",
     example:"A: 며칠 동안 여행했어요?\nB: 오 일 동안이요.",
     exampleSrc:"A: How many days did you travel?\nB: For five days.",
     funFact:"며칠 can be a question ('how many days?') or a vague amount ('a few days'). In questions: 며칠이에요? (What date is it?). As duration: 며칠 걸려요 (It takes a few days)."},

    {type:"teach", trg:"잠깐", src:"a moment; briefly", pos:"adv", gender:null,
     note:"A short period of time. Used to ask someone to wait.",
     example:"A: 잠깐만요!\nB: 네, 기다릴게요.",
     exampleSrc:"A: Just a moment!\nB: Yes, I will wait.",
     funFact:"잠깐만요 (Just a moment, please) is one of the most useful survival phrases in Korea. You will hear it in shops, restaurants, and phone calls constantly."},

    {type:"teach", trg:"요즈음", src:"these days; recently", pos:"adv", gender:null,
     note:"The current period. Often shortened to 요즘 in casual speech.",
     example:"A: 요즈음 뭐 해요?\nB: 한국어를 공부해요.",
     exampleSrc:"A: What are you doing these days?\nB: I am studying Korean.",
     funFact:"요즈음 is the full form; 요즘 is the everyday contraction. Both are correct. '요즘 어때요?' (How are things lately?) is a very natural conversation starter."},

    {type:"teach", trg:"일주일", src:"one week", pos:"noun", gender:null,
     note:"Seven days. 일 (one) + 주일 (week).",
     example:"A: 일주일에 몇 번 운동해요?\nB: 세 번이요.",
     exampleSrc:"A: How many times a week do you exercise?\nB: Three times.",
     funFact:"주일 uses Hanja 週日. For counting weeks: 이 주일 (two weeks), 삼 주일 (three weeks). But '주' alone also works casually: 한 주 (one week)."},

    {type:"teach", trg:"지난달", src:"last month", pos:"noun", gender:null,
     note:"The previous month. 지난 (past) + 달 (month).",
     example:"A: 지난달에 뭐 했어요?\nB: 제주도에 갔어요.",
     exampleSrc:"A: What did you do last month?\nB: I went to Jeju Island.",
     funFact:"지나다 (to pass) creates a useful series: 지난주 (last week), 지난달 (last month), 지난해 (last year). The pure Korean 달 (month/moon) contrasts with Sino-Korean 월 (月)."},

    {type:"teach", trg:"날짜", src:"date", pos:"noun", gender:null,
     note:"A specific calendar date. Used when asking 'what date?'",
     example:"A: 날짜가 언제예요?\nB: 오월 오 일이에요.",
     exampleSrc:"A: What is the date?\nB: It is May 5th.",
     funFact:"날 (day) + 짜 (order/arrangement). The 짜 suffix appears in other ordering words. Koreans use both 며칠이에요? and 날짜가 어떻게 돼요? to ask for dates."},

    {type:"teach", trg:"달력", src:"calendar", pos:"noun", gender:null,
     note:"A physical or digital calendar. 달 (month) + 력 (calendar).",
     example:"A: 달력 좀 봐 주세요.\nB: 네, 여기 있어요.",
     exampleSrc:"A: Please look at the calendar.\nB: Yes, here it is.",
     funFact:"달력 combines pure Korean 달 (moon/month) with Sino-Korean 曆 (calendar). Korea traditionally used a lunar calendar (음력), and many holidays still follow it."},

    // --- Quiz block 3 ---
    {type:"mc",
     q:"7일은 얼마예요?",
     opts:["며칠","날짜","일주일","지난달"],
     ans:"일주일",
     hint:"This compound word uses the number 'one' plus the word for a seven-day period."},

    {type:"match", pairs:[
      {trg:"잠깐", src:"a moment"},
      {trg:"요즈음", src:"these days"},
      {trg:"지난달", src:"last month"},
      {trg:"달력", src:"calendar"}
    ]},

    // --- Teach block 4: Relationships & life ---
    {type:"teach", trg:"서로", src:"each other; mutually", pos:"adv", gender:null,
     note:"Indicates a reciprocal action between two or more people.",
     example:"A: 서로 도와요.\nB: 네, 같이 해요.",
     exampleSrc:"A: Let's help each other.\nB: Yes, let's do it together.",
     funFact:"서로 is pure Korean and appears in many proverbs: 서로 돕다 (help each other). Korean collectivist culture values mutual support, making 서로 one of its most culturally loaded adverbs."},

    {type:"teach", trg:"생활", src:"life; living; daily life", pos:"noun", gender:null,
     note:"One's way of living or daily routine. Sino-Korean word.",
     example:"A: 한국 생활이 어때요?\nB: 재미있어요!",
     exampleSrc:"A: How is life in Korea?\nB: It is fun!",
     funFact:"From Hanja 生活: 生 (life) + 活 (active). 생활 focuses on daily routines, while 인생 (人生) means 'life' in the grand philosophical sense."},

    // --- Final quiz block ---
    {type:"fb",
     s:"친구와 {1} 도우면 더 좋아요.",
     a:["서로"],
     opts:["서로","바로","계속","갑자기"],
     hint:"When two people help one another in a mutual, reciprocal way.",
     sSrc:"It is better when you help {1} with your friend."},

    {type:"mc",
     q:"한국에서의 일상을 말할 때 쓰는 단어는?",
     opts:["날짜","처음","이때","생활"],
     ans:"생활",
     hint:"This Sino-Korean noun describes your daily routines and way of living."}
  ]
};
export default LESSON_4;
