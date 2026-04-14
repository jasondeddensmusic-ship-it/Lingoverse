// Korean B2 — Batch 4, Lesson 3: Review and Decision
// Words: 검토, 겁나다, 게, 게으르다, 겨울철, 겨자, 겪다, 견해, 결과적, 결석, 결석하다, 결승, 결심, 결심하다, 결코, 경계, 경고, 경고하다, 경기장, 경비

const LESSON_3 = {
  id:"kov2_b2b4_l3", title:"결심과 경고", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"결심과 경고",
     desc:"Learn vocabulary for decisions, reviews, warnings, and competition. These words appear frequently in news, sports, and formal discussions.",
     goals:["Master 20 words about decisions, warnings, and competition","Understand Sino-Korean 結 compounds (tying, concluding)","Use formal vocabulary for reviews and boundaries"]},

    {type:"teach", trg:"검토", src:"review, examination", pos:"noun", gender:null,
     note:"Sino-Korean. 檢 (examine) + 討 (discuss).\nCareful study of a document or plan.",
     example:"A: 계약서 검토가 끝났어요?\nB: 아직요, 내일까지 드릴게요.",
     exampleSrc:"A: Has the contract review been completed?\nB: Not yet, I will give it to you by tomorrow.",
     funFact:"From Hanja 檢討. Very common in business: 검토하다 (to review), 재검토 (re-review)."},

    {type:"teach", trg:"겁나다", src:"to be scared, to feel afraid", pos:"verb", gender:null,
     note:"겁 (fear) + 나다 (arise).\nFear comes up involuntarily.",
     example:"A: 혼자 밤길 걸으면 겁나지 않아?\nB: 좀 무섭긴 하지만 괜찮아.",
     exampleSrc:"A: Are you not scared walking alone at night?\nB: It is a bit scary, but I am OK.",
     funFact:"In slang, 겁나 also works as an intensifier meaning 'extremely': 겁나 맛있어 (insanely delicious)."},

    {type:"teach", trg:"게", src:"crab", pos:"noun", gender:null,
     note:"Native Korean word.\nThe crustacean with claws and a hard shell.",
     example:"A: 오늘 저녁에 게를 먹을까?\nB: 좋아! 간장게장이 먹고 싶어.",
     exampleSrc:"A: Shall we eat crab for dinner tonight?\nB: Great! I want soy sauce marinated crab.",
     funFact:"간장게장 (soy sauce marinated crab) is nicknamed 밥도둑 (rice thief) because it makes you eat too much rice."},

    {type:"teach", trg:"게으르다", src:"to be lazy", pos:"adj", gender:null,
     note:"Native Korean adjective.\nDescribes a person who avoids effort.",
     example:"A: 요즘 너무 게을러진 것 같아.\nB: 운동이라도 시작해 봐.",
     exampleSrc:"A: I think I have become too lazy lately.\nB: Try starting with some exercise.",
     funFact:"The ㄹ-irregular form: 게으르다 becomes 게으른 (modifying form) and 게을러 (casual). Tricky conjugation!"},

    {type:"teach", trg:"겨울철", src:"wintertime, winter season", pos:"noun", gender:null,
     note:"겨울 (winter) + 철 (season).\nThe winter period specifically.",
     example:"A: 겨울철에는 난방비가 많이 나와요.\nB: 내복을 입으면 좀 절약돼요.",
     exampleSrc:"A: Heating costs are high during wintertime.\nB: Wearing thermal underwear saves a bit.",
     funFact:"철 means 'season' and attaches to all four: 봄철, 여름철, 가을철, 겨울철."},

    {type:"mc",
     q:"'겁나다'의 슬랭 용법은?",
     opts:["'매우, 엄청'이라는 강조 표현","'겁이 없다'라는 뜻","'무서운 사람'이라는 뜻","'겁쟁이'라는 뜻"],
     ans:"'매우, 엄청'이라는 강조 표현",
     hint:"In informal speech, this word evolved from meaning 'scary' to being an intensifier like 'extremely.'"},

    {type:"teach", trg:"겨자", src:"mustard", pos:"noun", gender:null,
     note:"Native Korean word.\nThe yellow condiment or plant.",
     example:"A: 냉면에 겨자를 넣어 먹어?\nB: 조금만 넣으면 맛있어.",
     exampleSrc:"A: Do you add mustard to cold noodles?\nB: Just a little bit makes it delicious.",
     funFact:"The expression 겨자 먹고 운다 (cry from eating mustard) is not a real idiom but a humorous image."},

    {type:"teach", trg:"겪다", src:"to experience, to go through", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo personally experience something, often difficulties.",
     example:"A: 어린 시절에 어려움을 많이 겪었어요.\nB: 그래서 더 강해진 거예요.",
     exampleSrc:"A: I went through many difficulties in childhood.\nB: That is why you have become stronger.",
     funFact:"겪다 implies personal, often difficult experience. For positive experiences, 경험하다 is more neutral."},

    {type:"teach", trg:"견해", src:"viewpoint, opinion", pos:"noun", gender:null,
     note:"Sino-Korean. 見 (see) + 解 (understand).\nA considered perspective on an issue.",
     example:"A: 이 문제에 대한 견해를 말씀해 주세요.\nB: 제 견해로는 신중한 접근이 필요합니다.",
     exampleSrc:"A: Please share your viewpoint on this issue.\nB: In my opinion, a careful approach is needed.",
     funFact:"From Hanja 見解. More formal than 의견 (opinion). Used in academic and political discussions."},

    {type:"teach", trg:"결과적", src:"resultant, consequential (as modifier)", pos:"noun", gender:null,
     note:"Sino-Korean. 結 (tie) + 果 (fruit) + 的.\nRelating to the end result.",
     example:"A: 결과적으로 그 선택이 옳았어요.\nB: 다행이네요.",
     exampleSrc:"A: Consequently, that choice was correct.\nB: That is fortunate.",
     funFact:"From Hanja 結果的. 결과적으로 (consequently) is a very common formal connector in Korean writing."},

    {type:"fb",
     s:"전쟁의 어려움을 직접 {1} 세대가 줄고 있다.",
     a:["겪은"],
     opts:["겪은","결석","결심","견해"],
     hint:"This native Korean verb means to personally experience hardships or events.",
     sSrc:"The generation that personally {1} the hardships of war is shrinking."},

    {type:"teach", trg:"결석", src:"absence (from school/meeting)", pos:"noun", gender:null,
     note:"Sino-Korean. 缺 (lack) + 席 (seat).\nBeing absent from where you should be.",
     example:"A: 오늘 수업에 결석한 학생이 많네요.\nB: 감기가 유행이라서 그래요.",
     exampleSrc:"A: Many students are absent from class today.\nB: It is because a cold is going around.",
     funFact:"From Hanja 缺席. Literally 'lacking seat.' The opposite is 출석 (attendance, literally 'presenting seat')."},

    {type:"teach", trg:"결석하다", src:"to be absent from", pos:"verb", gender:null,
     note:"결석 (absence) + 하다 (to do).\nTo miss a class, meeting, or event.",
     example:"A: 내일 회의에 결석해도 될까요?\nB: 사유서를 미리 내 주세요.",
     exampleSrc:"A: May I be absent from tomorrow's meeting?\nB: Please submit a reason letter in advance.",
     funFact:"Korean schools track 결석 carefully. Too many absences can affect graduation requirements."},

    {type:"teach", trg:"결승", src:"finals (of a competition)", pos:"noun", gender:null,
     note:"Sino-Korean. 決 (decide) + 勝 (win).\nThe final match that determines the winner.",
     example:"A: 우리 팀이 결승에 진출했어!\nB: 대단하다! 결승전은 언제야?",
     exampleSrc:"A: Our team made it to the finals!\nB: Amazing! When is the final match?",
     funFact:"From Hanja 決勝. 준결승 (semi-finals) adds 準 (quasi/semi). 결승골 means the winning goal."},

    {type:"teach", trg:"결심", src:"determination, resolution", pos:"noun", gender:null,
     note:"Sino-Korean. 決 (decide) + 心 (heart).\nA firm decision made in one's heart.",
     example:"A: 금연 결심이 이번엔 진짜야?\nB: 응, 이번에는 꼭 성공할 거야.",
     exampleSrc:"A: Is your resolution to quit smoking for real this time?\nB: Yes, I will definitely succeed this time.",
     funFact:"From Hanja 決心. A common New Year's phrase: 새해 결심 (New Year's resolution)."},

    {type:"teach", trg:"결심하다", src:"to make up one's mind, to resolve", pos:"verb", gender:null,
     note:"결심 (resolution) + 하다 (to do).\nTo firmly decide to do something.",
     example:"A: 유학을 가기로 결심했어요.\nB: 어느 나라로 갈 거예요?",
     exampleSrc:"A: I have decided to study abroad.\nB: Which country will you go to?",
     funFact:"결심하다 implies a weighty, significant decision. For casual choices, 정하다 (to decide) works better."},

    {type:"mc",
     q:"'결승'은 대회에서 무엇을 의미하나요?",
     opts:["최종 경기","연습 경기","예선 경기","친선 경기"],
     ans:"최종 경기",
     hint:"The Hanja 決 means 'decide' and 勝 means 'win.' This is the match where the winner is determined."},

    {type:"teach", trg:"결코", src:"never, by no means", pos:"adv", gender:null,
     note:"Sino-Korean. 決 (decide) + 코 (emphatic).\nStrong negation, always with a negative verb.",
     example:"A: 이 비밀을 결코 말하지 마.\nB: 걱정 마, 절대 안 할게.",
     exampleSrc:"A: Never tell this secret.\nB: Do not worry, I absolutely will not.",
     funFact:"결코 MUST be followed by a negative: 결코 안/못/없다. Using it without negation is grammatically wrong."},

    {type:"teach", trg:"경계", src:"boundary, border, vigilance", pos:"noun", gender:null,
     note:"Sino-Korean. 境 (border) + 界 (world).\nThe line between two areas, or the state of being alert.",
     example:"A: 두 나라의 경계를 넘었어요.\nB: 여권 검사를 받으셨어요?",
     exampleSrc:"A: We crossed the border between the two countries.\nB: Did you go through passport inspection?",
     funFact:"From Hanja 境界. Also means 'vigilance': 경계를 풀다 (let one's guard down), 경계하다 (to be on guard)."},

    {type:"teach", trg:"경고", src:"warning, caution", pos:"noun", gender:null,
     note:"Sino-Korean. 警 (alert) + 告 (inform).\nAn alert about danger or consequences.",
     example:"A: 속도위반으로 경고를 받았어요.\nB: 조심하세요, 다음에는 벌금이에요.",
     exampleSrc:"A: I received a warning for speeding.\nB: Be careful, next time it will be a fine.",
     funFact:"From Hanja 警告. Yellow cards in soccer are called 경고 in Korean sports broadcasting."},

    {type:"teach", trg:"경고하다", src:"to warn, to caution", pos:"verb", gender:null,
     note:"경고 (warning) + 하다 (to do).\nTo officially alert someone about danger.",
     example:"A: 기상청에서 폭우를 경고했어요.\nB: 우산을 꼭 가져가세요.",
     exampleSrc:"A: The weather service warned about heavy rain.\nB: Make sure to bring an umbrella.",
     funFact:"경고하다 is formal. In casual speech, Koreans more often say 조심하라고 했어 (told someone to be careful)."},

    {type:"teach", trg:"경기장", src:"stadium, sports venue", pos:"noun", gender:null,
     note:"Sino-Korean. 競技 (competition) + 場 (place).\nA venue for athletic events.",
     example:"A: 경기장이 관중으로 가득 찼어요.\nB: 오늘 결승전이라서 그래요.",
     exampleSrc:"A: The stadium is packed with spectators.\nB: It is because today is the final match.",
     funFact:"From Hanja 競技場. Korea's most famous is the Seoul Olympic Stadium, built for the 1988 Games."},

    {type:"teach", trg:"경비", src:"expenses; security guard", pos:"noun", gender:null,
     note:"Two Hanja sources.\n經費 (pass + spend) = expenses. 警備 (alert + prepare) = security.",
     example:"A: 이번 행사 경비가 얼마나 들까요?\nB: 대략 500만 원 정도 예상해요.",
     exampleSrc:"A: How much will the expenses for this event be?\nB: We estimate roughly 5 million won.",
     funFact:"Same pronunciation, different meanings: 경비원 means security guard (from 警備), 경비 절감 means cost reduction (from 經費)."},

    {type:"fb",
     s:"그는 {1} 포기하지 않겠다고 말했다.",
     a:["결코"],
     opts:["결코","결승","결석","경계"],
     hint:"This emphatic adverb means 'never' or 'by no means' and must be used with a negative verb.",
     sSrc:"He said he would {1} give up."},

    {type:"match", pairs:[
      {trg:"경고", src:"warning"},
      {trg:"경기장", src:"stadium"},
      {trg:"경계", src:"boundary"},
      {trg:"경비", src:"expenses; security"}
    ]}
  ]
};
export default LESSON_3;
