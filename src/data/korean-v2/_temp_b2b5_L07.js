// Korean B2 — Batch 5, Lesson 7: Light, Escape, and Love
// Words: 빛깔, 빛나다, 빠뜨리다, 빠져나가다, 빠져나오다, 빨다, 빼놓다, 빼앗기다, 빼앗다, 뺏다, 뺨, 뻔하다, 뽑히다, 뿌리치다, 사과하다, 사기, 사나이, 사냥, 사들이다, 사랑스럽다

const LESSON_7 = {
  id:"kov2_b2b5_l7", title:"빛과 사랑", icon:"✨", xp:15, board:true,
  steps:[
    {type:"intro", title:"빛과 사랑",
     desc:"Learn words about light and color, escape, taking away, and love. This lesson covers compound verbs of movement and expressive vocabulary for emotions.",
     goals:["Master 20 words about light, escape, and emotional expression","Understand compound movement verbs with 빠져-","Distinguish between 빼앗다, 뺏다, and related words"]},

    {type:"teach", trg:"빛깔", src:"color, hue, tint", pos:"noun", gender:null,
     note:"빛 (light) + 깔 (spread).\nThe color or shade of something.",
     example:"A: 이 꽃의 빛깔이 참 곱다.\nB: 보라색이 정말 예쁘네.",
     exampleSrc:"A: The color of this flower is truly lovely.\nB: The purple is really pretty.",
     funFact:"빛깔 is more literary than 색 (color). It implies warmth and beauty, often used in poetry and descriptions."},

    {type:"teach", trg:"빛나다", src:"to shine, to glow", pos:"verb", gender:null,
     note:"빛 (light) + 나다 (come out).\nLight emerging or something gleaming.",
     example:"A: 별이 빛나는 밤이야.\nB: 도시에서는 보기 힘든 풍경이지.",
     exampleSrc:"A: It is a night when the stars are shining.\nB: It is a view that is hard to see in the city.",
     funFact:"The famous Korean children's song 반짝반짝 작은 별 (Twinkle Twinkle Little Star) uses 빛나다 imagery."},

    {type:"teach", trg:"빠뜨리다", src:"to drop, to leave out, to omit", pos:"verb", gender:null,
     note:"빠지다 (to fall out) + 뜨리다 (causative).\nCausing something to fall or be omitted.",
     example:"A: 중요한 내용을 빠뜨리면 안 돼.\nB: 다시 한번 확인할게.",
     exampleSrc:"A: You must not leave out important content.\nB: I will double-check it.",
     funFact:"빠뜨리다 can mean physically dropping something OR omitting information. Both senses are equally common."},

    {type:"teach", trg:"빠져나가다", src:"to escape, to slip out", pos:"verb", gender:null,
     note:"빠지다 (fall into) + 나가다 (go out).\nMoving outward from a confined space.",
     example:"A: 교통 체증에서 빠져나가는 게 힘들었어.\nB: 얼마나 걸렸어?",
     exampleSrc:"A: It was hard to get out of the traffic jam.\nB: How long did it take?",
     funFact:"Korean compound verbs with direction are precise: 빠져나가다 (slip out away) vs 빠져나오다 (slip out toward me)."},

    {type:"teach", trg:"빠져나오다", src:"to come out of, to escape (toward speaker)", pos:"verb", gender:null,
     note:"빠지다 (fall into) + 나오다 (come out).\nEscaping toward the speaker's location.",
     example:"A: 건물에서 빠져나왔어?\nB: 응, 겨우 빠져나왔어.",
     exampleSrc:"A: Did you get out of the building?\nB: Yes, I barely got out.",
     funFact:"The -나가다 vs -나오다 distinction mirrors -가다 (away) vs -오다 (toward). It shows perspective."},

    {type:"fb",
     s:"화재가 발생해서 사람들이 건물 밖으로 {1}.",
     a:["빠져나왔다"],
     opts:["빠져나왔다","빠져나갔다","빠뜨렸다","뺏겼다"],
     hint:"People escaped the building and came out TOWARD safety. Which directional compound verb fits?",
     sSrc:"A fire broke out and people {1} of the building."},

    {type:"teach", trg:"빨다", src:"to wash (laundry), to suck", pos:"verb", gender:null,
     note:"Native Korean verb with two meanings.\nContext determines: laundry or sucking.",
     example:"A: 빨래를 빨아야 하는데 세탁기가 고장 났어.\nB: 손으로 빨아야겠네.",
     exampleSrc:"A: I need to do laundry but the washing machine is broken.\nB: You will have to wash by hand.",
     funFact:"빨래를 빨다 (to wash laundry) is the common meaning. 사탕을 빨다 (to suck candy) uses the other sense."},

    {type:"teach", trg:"빼놓다", src:"to leave out, to exclude", pos:"verb", gender:null,
     note:"빼다 (remove) + 놓다 (put).\nTo set aside by removing from a group.",
     example:"A: 이건 빼놓을 수 없는 중요한 문제야.\nB: 맞아, 반드시 논의해야 해.",
     exampleSrc:"A: This is an issue that cannot be left out.\nB: Right, we must discuss it.",
     funFact:"빼놓을 수 없다 (cannot be left out) is a set phrase meaning something is absolutely essential."},

    {type:"teach", trg:"빼앗기다", src:"to have something taken away", pos:"verb", gender:null,
     note:"빼앗다 + 기다 (passive).\nBeing the victim of having something seized.",
     example:"A: 소매치기한테 지갑을 빼앗겼어.\nB: 경찰에 신고했어?",
     exampleSrc:"A: I had my wallet taken by a pickpocket.\nB: Did you report it to the police?",
     funFact:"빼앗기다 emphasizes the victim's perspective. The subject is the one losing something against their will."},

    {type:"teach", trg:"빼앗다", src:"to snatch, to take away by force", pos:"verb", gender:null,
     note:"빼다 (pull out) + 앗다 (seize).\nForcefully taking something from someone.",
     example:"A: 형이 동생 장난감을 빼앗았어.\nB: 돌려주라고 해.",
     exampleSrc:"A: The older brother snatched the younger sibling's toy.\nB: Tell him to give it back.",
     funFact:"빼앗다 implies force or unfairness. It is stronger than just 가져가다 (to take away)."},

    {type:"teach", trg:"뺏다", src:"to rob, to take away", pos:"verb", gender:null,
     note:"Shortened form of 빼앗다.\nMore colloquial and common in daily speech.",
     example:"A: 내 자리를 뺏지 마.\nB: 미안, 다른 자리로 갈게.",
     exampleSrc:"A: Do not take my seat.\nB: Sorry, I will go to another seat.",
     funFact:"뺏다 is the informal version of 빼앗다. Kids say 뺏었어! (You took it!) in playground disputes."},

    {type:"teach", trg:"뺨", src:"cheek (of face)", pos:"noun", gender:null,
     note:"Native Korean word.\nThe side of the face, similar to 볼 but can imply slapping.",
     example:"A: 뺨을 맞을 뻔했어.\nB: 무슨 일이 있었어?",
     exampleSrc:"A: I almost got slapped on the cheek.\nB: What happened?",
     funFact:"뺨 is used in the expression 뺨치다 (to rival/outdo): 프로 뺨치는 실력 (skill that rivals a professional)."},

    {type:"teach", trg:"뻔하다", src:"to almost (do something), to be obvious", pos:"aux", gender:null,
     note:"Used after -ㄹ to mean 'almost happened.'\nAlso means 'obvious' as a standalone adjective.",
     example:"A: 넘어질 뻔했어.\nB: 조심해, 바닥이 미끄러워.",
     exampleSrc:"A: I almost fell.\nB: Be careful, the floor is slippery.",
     funFact:"ㄹ 뻔하다 is one of the most common grammar patterns in spoken Korean. It always implies a close call."},

    {type:"mc",
     q:"'길에서 넘어질 뻔했어'에서 '뻔했어'의 의미는?",
     opts:["거의 그렇게 될 뻔했다","확실히 그렇게 됐다","절대 그렇게 안 됐다","이미 그렇게 됐다"],
     ans:"거의 그렇게 될 뻔했다",
     hint:"The pattern -ㄹ 뻔하다 indicates something ALMOST happened but did not actually occur."},

    {type:"teach", trg:"뽑히다", src:"to be selected, to be chosen", pos:"verb", gender:null,
     note:"뽑다 (to pull out/select) + 히다 (passive).\nBeing chosen from a group.",
     example:"A: 대표로 뽑혔대. 축하해!\nB: 고마워, 열심히 할게.",
     exampleSrc:"A: I heard you were selected as the representative. Congratulations!\nB: Thanks, I will work hard.",
     funFact:"뽑다 originally means to pull out (like pulling a tooth). Being 'pulled out' from a group means being selected."},

    {type:"teach", trg:"뿌리치다", src:"to shake off, to reject firmly", pos:"verb", gender:null,
     note:"뿌리 (root) + 치다 (strike).\nForcefully breaking free from someone's hold.",
     example:"A: 그의 손을 뿌리치고 떠났어.\nB: 정말 단호하게 거절한 거네.",
     exampleSrc:"A: I shook off his hand and left.\nB: You really rejected him firmly.",
     funFact:"뿌리치다 implies dramatic, decisive rejection. Common in novels and dramas for emotional exit scenes."},

    {type:"teach", trg:"사과하다", src:"to apologize", pos:"verb", gender:null,
     note:"Sino-Korean. 謝過 (confess fault) + 하다.\nFormally admitting fault and expressing regret.",
     example:"A: 네가 먼저 사과해야 해.\nB: 알아, 내가 잘못한 거 맞아.",
     exampleSrc:"A: You should apologize first.\nB: I know, I was in the wrong.",
     funFact:"사과 also means 'apple' with different Hanja (沙果). Koreans sometimes joke: 사과할게 (I will apple you/I will apologize)."},

    {type:"teach", trg:"사기", src:"fraud, morale", pos:"noun", gender:null,
     note:"Two different Sino-Korean words.\n詐欺 = fraud. 士氣 = morale.",
     example:"A: 사기를 당하지 않도록 조심해.\nB: 너무 좋은 조건이면 의심해야 해.",
     exampleSrc:"A: Be careful not to fall for fraud.\nB: If the conditions are too good, you should be suspicious.",
     funFact:"사기꾼 (con artist) and 사기가 높다 (morale is high) use the same pronunciation with completely different meanings."},

    {type:"teach", trg:"사나이", src:"man, manly fellow", pos:"noun", gender:null,
     note:"Native Korean word.\nAn older, literary term for a real man.",
     example:"A: 사나이답게 행동해라.\nB: 무슨 뜻이야?",
     exampleSrc:"A: Act like a real man.\nB: What do you mean?",
     funFact:"사나이 is somewhat old-fashioned. Modern Korean uses 남자 (man) more commonly in casual speech."},

    {type:"teach", trg:"사냥", src:"hunting", pos:"noun", gender:null,
     note:"Native Korean word.\nThe activity of catching wild animals.",
     example:"A: 옛날에는 사냥으로 먹고살았어.\nB: 지금은 취미로 하는 사람도 있지.",
     exampleSrc:"A: In the old days, people lived by hunting.\nB: Now some people do it as a hobby.",
     funFact:"사냥감 (hunting prey) and 머리 사냥 (headhunting, recruitment) extend this word into modern business Korean."},

    {type:"teach", trg:"사들이다", src:"to buy up, to purchase in bulk", pos:"verb", gender:null,
     note:"사다 (to buy) + 들이다 (to bring in).\nBuying large quantities at once.",
     example:"A: 회사가 부동산을 사들이고 있어.\nB: 투자 목적인가 봐.",
     exampleSrc:"A: The company is buying up real estate.\nB: It seems to be for investment purposes.",
     funFact:"사들이다 implies aggressive or large-scale purchasing. News uses it for corporate acquisitions."},

    {type:"teach", trg:"사랑스럽다", src:"to be lovely, to be adorable", pos:"adj", gender:null,
     note:"사랑 (love) + 스럽다 (having the quality of).\nInspiring feelings of love and tenderness.",
     example:"A: 네 아이가 정말 사랑스럽다.\nB: 고마워, 이 나이 때가 제일 귀여워.",
     exampleSrc:"A: Your child is truly adorable.\nB: Thanks, this age is the cutest.",
     funFact:"The -스럽다 suffix turns nouns into adjectives of quality: 사랑스럽다, 자랑스럽다 (proud), 부끄럽다."},

    {type:"fb",
     s:"아기의 {1} 미소에 모두가 행복해졌다.",
     a:["사랑스러운"],
     opts:["사랑스러운","불쌍한","분주한","불확실한"],
     hint:"Which adjective means lovely or adorable, describing a smile that warms everyone's hearts?",
     sSrc:"Everyone became happy at the baby's {1} smile."},

    {type:"match", pairs:[
      {trg:"빛나다", src:"to shine"},
      {trg:"뻔하다", src:"to almost"},
      {trg:"사과하다", src:"to apologize"},
      {trg:"사랑스럽다", src:"adorable"}
    ]}
  ]
};
export default LESSON_7;
