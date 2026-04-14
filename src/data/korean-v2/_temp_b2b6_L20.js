// Korean B2 — Batch 6, Lesson 20: Predictions and Old Tales
// Words: 예고하다, 예매하다, 예방, 예방하다, 예보, 예비, 예산, 예상되다, 예상하다, 예선, 예술적, 예습, 예습하다, 예식장, 예외, 예정되다, 예측하다, 예컨대, 옛날이야기, 오락

const LESSON_20 = {
  id:"kov2_b2b6_l20", title:"예측과 예방", icon:"🔮", xp:15, board:true,
  steps:[
    {type:"intro", title:"예측과 예방",
     desc:"Learn words about prediction, prevention, preparation, and entertainment. Many use the 豫/預 (beforehand) hanja root for forward-thinking actions.",
     goals:["Master 20 words about forecasting, prevention, and ceremony","Understand 豫/預 compounds for planning ahead","Use budget, ceremony, and entertainment vocabulary"]},

    {type:"teach", trg:"예고하다", src:"to announce in advance, to preview", pos:"verb", gender:null,
     note:"Sino-Korean. 豫 (beforehand) + 告 (announce) + 하다.\nGiving advance notice of something.",
     example:"A: 다음 주에 시험이 있다고 예고했어.\nB: 미리 알려 줘서 다행이다.",
     exampleSrc:"A: They announced in advance that there is an exam next week.\nB: It is good they let us know ahead of time.",
     funFact:"Korean drama 예고편 (preview/trailer) at the end of each episode keeps viewers hooked for next week."},

    {type:"teach", trg:"예매하다", src:"to purchase in advance, to book ahead", pos:"verb", gender:null,
     note:"Sino-Korean. 豫 (beforehand) + 買 (buy) + 하다.\nBuying tickets before the event.",
     example:"A: 기차표 예매했어?\nB: 응, 어제 인터넷으로 했어.",
     exampleSrc:"A: Did you book the train ticket?\nB: Yes, I did it online yesterday.",
     funFact:"Korean concert tickets sell out in seconds. Fans practice 예매 speed on ticketing sites like Interpark and Melon."},

    {type:"teach", trg:"예방", src:"prevention", pos:"noun", gender:null,
     note:"Sino-Korean. 豫 (beforehand) + 防 (defend).\nStopping something bad before it happens.",
     example:"A: 감기 예방에 손 씻기가 중요해.\nB: 맞아, 항상 손을 깨끗이.",
     exampleSrc:"A: Handwashing is important for cold prevention.\nB: Right, always keep your hands clean.",
     funFact:"예방 접종 (vaccination) is a key Korean public health term. Korea has high vaccination rates for most diseases."},

    {type:"teach", trg:"예방하다", src:"to prevent, to ward off", pos:"verb", gender:null,
     note:"예방 + 하다 (to do).\nActively taking steps to prevent something.",
     example:"A: 사고를 예방하려면 안전 수칙을 지켜야 해.\nB: 동의해요.",
     exampleSrc:"A: To prevent accidents, we need to follow safety rules.\nB: I agree.",
     funFact:"예방하다 is proactive. Korean public health campaigns say 치료보다 예방 (prevention over treatment)."},

    {type:"teach", trg:"예보", src:"forecast, prediction (weather)", pos:"noun", gender:null,
     note:"Sino-Korean. 豫 (beforehand) + 報 (report).\nA prediction about future conditions.",
     example:"A: 날씨 예보 확인했어?\nB: 응, 내일 비 온대.",
     exampleSrc:"A: Did you check the weather forecast?\nB: Yes, they say it will rain tomorrow.",
     funFact:"일기 예보 (weather forecast) is a daily ritual for Koreans. The Korea Meteorological Administration issues 예보 hourly."},

    {type:"mc",
     q:"'예매'와 '구매'의 차이는?",
     opts:["예매는 미리 사는 것","예매가 더 싸다","구매는 온라인만 가능하다","차이가 없다"],
     ans:"예매는 미리 사는 것",
     hint:"The key difference is timing. One involves buying ahead of time, the other is buying in general."},

    {type:"teach", trg:"예비", src:"reserve, preliminary, spare", pos:"noun", gender:null,
     note:"Sino-Korean. 豫 (beforehand) + 備 (prepare).\nPrepared in advance as backup.",
     example:"A: 예비 배터리를 챙겼어?\nB: 응, 가방에 넣었어.",
     exampleSrc:"A: Did you bring a spare battery?\nB: Yes, I put it in the bag.",
     funFact:"예비 신랑/신부 (prospective groom/bride) is how Koreans refer to people who are engaged and planning a wedding."},

    {type:"teach", trg:"예산", src:"budget", pos:"noun", gender:null,
     note:"Sino-Korean. 豫 (beforehand) + 算 (calculate).\nMoney allocated in advance for expenses.",
     example:"A: 이번 프로젝트 예산이 얼마예요?\nB: 5천만 원이에요.",
     exampleSrc:"A: What is the budget for this project?\nB: 50 million won.",
     funFact:"Korean government 예산 debates make national news. The National Assembly approves the annual 예산안 (budget bill)."},

    {type:"teach", trg:"예상되다", src:"to be expected, to be anticipated", pos:"verb", gender:null,
     note:"Sino-Korean. 豫想 (anticipation) + 되다 (passive).\nSomething being foreseen.",
     example:"A: 내일 교통 체증이 예상됩니다.\nB: 일찍 출발해야겠네요.",
     exampleSrc:"A: Traffic jams are expected tomorrow.\nB: We should leave early.",
     funFact:"Korean news anchors use 예상됩니다 (is expected) as a standard ending for forecast-type reporting."},

    {type:"teach", trg:"예상하다", src:"to expect, to anticipate", pos:"verb", gender:null,
     note:"Sino-Korean. 豫想 (anticipation) + 하다.\nActively foreseeing a future outcome.",
     example:"A: 이런 결과를 예상했어?\nB: 아니, 전혀 예상 못 했어.",
     exampleSrc:"A: Did you anticipate this result?\nB: No, I did not expect it at all.",
     funFact:"예상 밖 (outside expectations) and 예상대로 (as expected) are polar opposite reaction phrases in Korean."},

    {type:"teach", trg:"예선", src:"preliminary round, qualifiers", pos:"noun", gender:null,
     note:"Sino-Korean. 豫 (beforehand) + 選 (select).\nEarly rounds that determine who advances.",
     example:"A: 예선을 통과했어!\nB: 축하해! 본선에서도 잘해!",
     exampleSrc:"A: I passed the preliminary round!\nB: Congratulations! Do well in the finals too!",
     funFact:"Korean sports fans follow 예선 closely. World Cup 예선 matches get enormous TV ratings in Korea."},

    {type:"teach", trg:"예술적", src:"artistic", pos:"noun", gender:null,
     note:"Sino-Korean. 藝術 (art) + 的 (quality).\nHaving artistic quality or characteristics.",
     example:"A: 이 작품은 매우 예술적이야.\nB: 그래, 정말 아름다워.",
     exampleSrc:"A: This work is very artistic.\nB: Yes, it is really beautiful.",
     funFact:"예술적 감각 (artistic sense) is highly valued in Korean design culture, from food plating to interior design."},

    {type:"fb",
     s:"정부는 내년 {1}을 국회에 제출했다.",
     a:["예산"],
     opts:["예산","예보","예방","예선"],
     hint:"The financial plan showing how much money will be spent, submitted to parliament for approval.",
     sSrc:"The government submitted next year's {1} to the National Assembly."},

    {type:"teach", trg:"예습", src:"preview study, studying ahead", pos:"noun", gender:null,
     note:"Sino-Korean. 豫 (beforehand) + 習 (study).\nStudying material before it is taught.",
     example:"A: 내일 수업 예습했어?\nB: 아직, 지금 할 거야.",
     exampleSrc:"A: Did you preview study for tomorrow's class?\nB: Not yet, I will do it now.",
     funFact:"Korean study culture values 예습 (preview) and 복습 (review) equally. Together they form the ideal study cycle."},

    {type:"teach", trg:"예식장", src:"wedding hall, ceremony venue", pos:"noun", gender:null,
     note:"Sino-Korean. 禮式 (ceremony) + 場 (place).\nA venue specifically for wedding ceremonies.",
     example:"A: 예식장을 예약했어요?\nB: 네, 강남에 있는 곳으로요.",
     exampleSrc:"A: Did you book the wedding hall?\nB: Yes, one in Gangnam.",
     funFact:"Korean weddings are typically held in commercial 예식장, not churches. Ceremonies are fast, about 30 minutes."},

    {type:"teach", trg:"예외", src:"exception", pos:"noun", gender:null,
     note:"Sino-Korean. 例 (example) + 外 (outside).\nSomething that falls outside the normal rule.",
     example:"A: 이번에는 예외로 허락해 줄게.\nB: 감사합니다, 다음에는 규칙을 지킬게요.",
     exampleSrc:"A: I will allow it as an exception this time.\nB: Thank you, I will follow the rules next time.",
     funFact:"예외 없이 (without exception) is a strong Korean phrase used to emphasize absolute rules."},

    {type:"teach", trg:"예정되다", src:"to be scheduled, to be planned", pos:"verb", gender:null,
     note:"Sino-Korean. 豫定 (predetermined) + 되다 (passive).\nSomething set to happen at a future time.",
     example:"A: 공사는 내년에 완료될 예정입니다.\nB: 그때까지 기다려야 하는군요.",
     exampleSrc:"A: Construction is scheduled to be completed next year.\nB: So we have to wait until then.",
     funFact:"예정되다 is standard Korean formal announcement language. Flight departures, events, and policies use it."},

    {type:"teach", trg:"예측하다", src:"to predict, to forecast", pos:"verb", gender:null,
     note:"Sino-Korean. 豫 (beforehand) + 測 (measure) + 하다.\nMaking calculated predictions.",
     example:"A: 결과를 정확하게 예측하기 어려워.\nB: 변수가 너무 많지.",
     exampleSrc:"A: It is hard to predict the result accurately.\nB: There are too many variables.",
     funFact:"AI 예측 (AI prediction) is a hot topic in Korean tech. Weather, stocks, and elections all use 예측 models."},

    {type:"teach", trg:"예컨대", src:"for example, for instance", pos:"adv", gender:null,
     note:"Sino-Korean. 例 (example) + 建대 (raising case).\nIntroducing a specific example.",
     example:"A: 건강에 좋은 음식이 많아. 예컨대 채소나 과일.\nB: 매일 먹으려고 노력하고 있어.",
     exampleSrc:"A: There are many healthy foods. For example, vegetables or fruits.\nB: I am trying to eat them every day.",
     funFact:"예컨대 is more formal than 예를 들면 (for example). Academic writing and speeches prefer 예컨대."},

    {type:"teach", trg:"옛날이야기", src:"old tale, fairy tale, legend", pos:"noun", gender:null,
     note:"옛날 (old days) + 이야기 (story).\nTraditional stories passed down through generations.",
     example:"A: 할머니가 옛날이야기를 해 주셨어.\nB: 어떤 이야기였어?",
     exampleSrc:"A: Grandmother told us an old tale.\nB: What story was it?",
     funFact:"Korean 옛날이야기 often start with 옛날 옛적에 (once upon a time). Famous ones include 흥부전 and 심청전."},

    {type:"teach", trg:"오락", src:"entertainment, amusement", pos:"noun", gender:null,
     note:"Sino-Korean. 娛 (enjoy) + 樂 (pleasure).\nActivities done for fun and amusement.",
     example:"A: 오락 프로그램 뭐 좋아해?\nB: 예능 쇼를 주로 봐.",
     exampleSrc:"A: What entertainment programs do you like?\nB: I mostly watch variety shows.",
     funFact:"오락실 (arcade) was a major part of Korean youth culture in the 1990s. Now 오락 mostly means TV entertainment."},

    {type:"mc",
     q:"'예외 없이 모든 학생이 참석해야 한다'의 뜻은?",
     opts:["한 명도 빠지면 안 된다","몇 명은 안 와도 된다","원하는 사람만 온다","선생님만 참석한다"],
     ans:"한 명도 빠지면 안 된다",
     hint:"예외 없이 means 'without exception.' Every single student must be there, no excuses."},

    {type:"match", pairs:[
      {trg:"예방", src:"prevention"},
      {trg:"예산", src:"budget"},
      {trg:"예외", src:"exception"},
      {trg:"예측하다", src:"to predict"}
    ]}
  ]
};

export default LESSON_20;
