// Korean B2 — Batch 3, Lesson 15: Gold, Prohibition, and Speed
// Words: 긁다, 금, 금고, 금년, 금메달, 금세, 금액, 금지되다, 금지하다, 금하다, 급격히, 급속히, 급증하다, 급히, 긋다, 기, 기관, 기구, 기타, 내

const LESSON_15 = {
  id:"kov2_b2b3_l15", title:"금과 급", icon:"🥇", xp:15, board:true,
  steps:[
    {type:"intro", title:"금과 급",
     desc:"Master vocabulary about gold, prohibition, speed, and institutions. These words appear frequently in news, regulations, and everyday conversation.",
     goals:["Master 20 words about gold, prohibition, speed, and organizations","Understand the 금 (gold/prohibit) and 급 (rapid) word families","Use institutional and regulatory vocabulary naturally"]},

    {type:"teach", trg:"긁다", src:"to scratch, to scrape", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo drag nails or a tool across a surface.",
     example:"A: 모기에 물린 데를 긁으면 안 돼.\nB: 알아, 그런데 너무 가려워.",
     exampleSrc:"A: You should not scratch mosquito bites.\nB: I know, but it itches so much.",
     funFact:"긁어 부스럼 만들다 (to scratch and make a sore) means creating trouble by meddling unnecessarily."},

    {type:"teach", trg:"금", src:"gold; line, crack", pos:"noun", gender:null,
     note:"Two different origins.\n金 (gold, metal) or native Korean (line/crack).",
     example:"A: 이 반지는 순금이야?\nB: 응, 24K 금이야.",
     exampleSrc:"A: Is this ring pure gold?\nB: Yes, it is 24K gold.",
     funFact:"금 has two unrelated meanings: 금 (gold, Hanja 金) and 금 (crack/line, native Korean). Context distinguishes them."},

    {type:"teach", trg:"금고", src:"safe, vault, treasury", pos:"noun", gender:null,
     note:"Sino-Korean. 金 (gold/money) + 庫 (storehouse).\nA secure container for valuables.",
     example:"A: 중요한 서류는 금고에 넣어.\nB: 비밀번호는 나만 알고 있어.",
     exampleSrc:"A: Put important documents in the safe.\nB: Only I know the password.",
     funFact:"From Hanja 金庫. Also used for financial institutions: 새마을금고 (Saemaeul credit union) is a community bank system."},

    {type:"teach", trg:"금년", src:"this year", pos:"noun", gender:null,
     note:"Sino-Korean. 今 (now) + 年 (year).\nThe current year.",
     example:"A: 금년 목표가 뭐야?\nB: 한국어 시험에 합격하는 거야.",
     exampleSrc:"A: What is your goal for this year?\nB: To pass the Korean language exam.",
     funFact:"From Hanja 今年. More formal than 올해 (this year). Used in news and official documents."},

    {type:"teach", trg:"금메달", src:"gold medal", pos:"noun", gender:null,
     note:"금 (gold) + 메달 (medal, loanword).\nThe highest award in competition.",
     example:"A: 금메달을 땄어!\nB: 축하해! 정말 대단하다!",
     exampleSrc:"A: I won a gold medal!\nB: Congratulations! That is amazing!",
     funFact:"Korea is an Olympic powerhouse in archery, taekwondo, and short-track speed skating, consistently winning gold medals."},

    {type:"mc",
     q:"'금고'의 주요 용도는?",
     opts:["귀중품을 안전하게 보관하는 것","음식을 저장하는 것","책을 보관하는 것","옷을 정리하는 것"],
     ans:"귀중품을 안전하게 보관하는 것",
     hint:"This is a secure container specifically designed to protect valuable items from theft or damage."},

    {type:"teach", trg:"금세", src:"in no time, quickly, right away", pos:"adv", gender:null,
     note:"금시 (now, this moment) contracted.\nDescribes something happening very quickly.",
     example:"A: 아이들이 금세 커 버렸어.\nB: 맞아, 시간이 정말 빨라.",
     exampleSrc:"A: The children grew up in no time.\nB: Right, time really flies.",
     funFact:"금세 comes from 금시에 (in this very moment). It emphasizes surprising speed of change."},

    {type:"teach", trg:"금액", src:"amount of money, sum", pos:"noun", gender:null,
     note:"Sino-Korean. 金 (money) + 額 (amount).\nThe numerical value of money.",
     example:"A: 총 금액이 얼마예요?\nB: 50만 원입니다.",
     exampleSrc:"A: What is the total amount?\nB: It is 500,000 won.",
     funFact:"From Hanja 金額. Used on receipts, invoices, and financial documents. 소액 (small amount) vs. 거액 (large sum)."},

    {type:"teach", trg:"금지되다", src:"to be prohibited, to be banned", pos:"verb", gender:null,
     note:"금지 (prohibition) + 되다 (passive).\nSomething is officially not allowed.",
     example:"A: 이곳에서는 흡연이 금지돼 있어.\nB: 밖에 나가서 피워야겠다.",
     exampleSrc:"A: Smoking is prohibited here.\nB: I will have to go outside to smoke.",
     funFact:"금지되다 (passive: is banned) vs. 금지하다 (active: to ban). Signs use both: 흡연 금지 (no smoking)."},

    {type:"teach", trg:"금지하다", src:"to prohibit, to ban, to forbid", pos:"verb", gender:null,
     note:"금지 (prohibition) + 하다 (to do).\nTo officially declare something not allowed.",
     example:"A: 정부가 일회용 플라스틱을 금지했어.\nB: 환경을 위해서 좋은 결정이야.",
     exampleSrc:"A: The government banned single-use plastics.\nB: It is a good decision for the environment.",
     funFact:"From Hanja 禁止. Common prohibitions: 주차 금지 (no parking), 출입 금지 (no entry), 촬영 금지 (no photography)."},

    {type:"teach", trg:"금하다", src:"to prohibit, to restrain", pos:"verb", gender:null,
     note:"Sino-Korean. 禁 (prohibit).\nA more literary form of prohibition.",
     example:"A: 눈물을 금할 수가 없었어.\nB: 그만큼 감동적이었구나.",
     exampleSrc:"A: I could not hold back my tears.\nB: It must have been that moving.",
     funFact:"금하다 is more literary than 금지하다. 웃음을 금할 수 없다 (cannot suppress laughter) is a classic expression."},

    {type:"fb",
     s:"이 지역에서는 낚시가 {1}돼 있습니다.",
     a:["금지"],
     opts:["금지","금세","금액","금년"],
     hint:"This word means something is officially not allowed or banned in this area.",
     sSrc:"Fishing is {1} in this area."},

    {type:"teach", trg:"급격히", src:"drastically, sharply, abruptly", pos:"adv", gender:null,
     note:"급격 (sudden/drastic) + 히 (adverb suffix).\nA very sudden and dramatic change.",
     example:"A: 기온이 급격히 떨어졌어.\nB: 따뜻하게 입고 나가야겠다.",
     exampleSrc:"A: The temperature dropped drastically.\nB: I should dress warmly before going out.",
     funFact:"From Hanja 急激. News headlines love 급격히: 급격히 증가 (sharp increase), 급격히 하락 (sharp decline)."},

    {type:"teach", trg:"급속히", src:"rapidly, swiftly", pos:"adv", gender:null,
     note:"급속 (rapid) + 히 (adverb suffix).\nAt a very fast pace.",
     example:"A: 기술이 급속히 발전하고 있어.\nB: 10년 전과 완전히 달라.",
     exampleSrc:"A: Technology is advancing rapidly.\nB: It is completely different from 10 years ago.",
     funFact:"From Hanja 急速. 급속히 vs. 급격히: 급속히 emphasizes speed, 급격히 emphasizes the dramatic nature of change."},

    {type:"teach", trg:"급증하다", src:"to surge, to increase sharply", pos:"verb", gender:null,
     note:"급 (sudden) + 증 (increase) + 하다 (to do).\nA sudden, dramatic rise in quantity.",
     example:"A: 온라인 쇼핑이 급증했어.\nB: 코로나 이후로 더 늘었지.",
     exampleSrc:"A: Online shopping has surged.\nB: It increased even more after COVID.",
     funFact:"From Hanja 急增. The opposite is 급감하다 (to decrease sharply). Both are news vocabulary staples."},

    {type:"teach", trg:"급히", src:"urgently, hastily, in a hurry", pos:"adv", gender:null,
     note:"급 (urgent) + 히 (adverb suffix).\nDoing something in a rushed manner.",
     example:"A: 급히 나가야 해.\nB: 무슨 일이야? 괜찮아?",
     exampleSrc:"A: I need to leave urgently.\nB: What happened? Are you OK?",
     funFact:"급히 먹다 (to eat hastily) is common but frowned upon in Korean culture, where meals are meant to be enjoyed slowly."},

    {type:"mc",
     q:"'급증하다'와 반대 의미의 표현은?",
     opts:["급감하다","급히","급격히","급속히"],
     ans:"급감하다",
     hint:"If surging means a sharp increase, the opposite describes a sharp decrease."},

    {type:"teach", trg:"긋다", src:"to draw (a line), to underline", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo make a line or stroke.",
     example:"A: 중요한 부분에 밑줄을 그어.\nB: 형광펜으로 그을까?",
     exampleSrc:"A: Underline the important parts.\nB: Shall I use a highlighter?",
     funFact:"선을 긋다 (to draw a line) also means 'to set a boundary' in relationships or negotiations."},

    {type:"teach", trg:"기", src:"energy, spirit, aura; flag", pos:"noun", gender:null,
     note:"Sino-Korean. 氣 (energy) or 旗 (flag).\nVital energy or a banner/standard.",
     example:"A: 오늘 기가 없어 보여.\nB: 어젯밤에 잠을 못 잤거든.",
     exampleSrc:"A: You look like you have no energy today.\nB: I could not sleep last night.",
     funFact:"기 (氣) is a foundational concept in East Asian philosophy. Korean martial arts and medicine are built around 기 flow."},

    {type:"teach", trg:"기관", src:"institution, organization; engine", pos:"noun", gender:null,
     note:"Sino-Korean. 機 (machine) + 關 (connection).\nAn established body or mechanical device.",
     example:"A: 어떤 기관에서 일해?\nB: 정부 기관에서 일해.",
     exampleSrc:"A: What institution do you work at?\nB: I work at a government agency.",
     funFact:"From Hanja 機關. Dual meaning: 교육 기관 (educational institution) and 기관차 (locomotive/engine)."},

    {type:"teach", trg:"기구", src:"apparatus, device; organization", pos:"noun", gender:null,
     note:"Sino-Korean. 器 (vessel) + 具 (tool).\nA tool, device, or organizational body.",
     example:"A: 운동 기구를 새로 샀어.\nB: 어떤 기구를 샀는데?",
     exampleSrc:"A: I bought new exercise equipment.\nB: What equipment did you buy?",
     funFact:"From Hanja 器具. Also used for international bodies: 국제 기구 (international organization), like UN agencies."},

    {type:"teach", trg:"기타", src:"other, miscellaneous; guitar", pos:"noun", gender:null,
     note:"Sino-Korean 其他 (other) or loanword (guitar).\nTwo completely different words with the same sound.",
     example:"A: 기타 질문 있으세요?\nB: 아니요, 없습니다.",
     exampleSrc:"A: Are there any other questions?\nB: No, there are none.",
     funFact:"기타 (其他, other) appears on every Korean form. 기타 (guitar, loanword) is from English via Portuguese 'guitarra.'"},

    {type:"teach", trg:"내", src:"(bound noun: within, during)", pos:"noun", gender:null,
     note:"Sino-Korean. 內 (inside).\nA bound noun meaning 'within' a scope or period.",
     example:"A: 일주일 내에 답변 드리겠습니다.\nB: 감사합니다, 기다리겠습니다.",
     exampleSrc:"A: I will respond within one week.\nB: Thank you, I will wait.",
     funFact:"As a bound noun, 내 attaches to time/space: 시간 내 (within the time), 범위 내 (within scope)."},

    {type:"match", pairs:[
      {trg:"금메달", src:"gold medal"},
      {trg:"금지하다", src:"to prohibit"},
      {trg:"급증하다", src:"to surge"},
      {trg:"기관", src:"institution"}
    ]}
  ]
};
export default LESSON_15;
