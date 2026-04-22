// Korean B1 Gap - Lesson 40: Kinship, Pronouns and Casual Expressions
const LESSON_40 = {
  id:"kov2_b1gap_l40", title:"친족, 대명사와 구어체", icon:"👪", xp:15, board:true,
  steps:[
    {type:"intro", title:"Kinship, Pronouns and Casual Expressions",
     desc:"Learn honorific family terms, casual interjections, and nuanced adverbs that Korean speakers use constantly in everyday life. These words bridge the gap between textbook and real Korean.",
     goals:["Learn honorific kinship terms and casual expressions","Master nuanced adverbs for real Korean speech","Use interjections and pronouns naturally"]},

    // --- Teach 1-5 ---
    {type:"teach", trg:"아버님", src:"father (honorific)", pos:"noun", gender:null,
     note:"아버지 (father) + 님 (honorific suffix). Used when speaking about someone else's father respectfully.",
     example:"A: 아버님은 건강하세요?\nB: 네, 덕분에 잘 계세요.",
     exampleSrc:"A: Is your father doing well?\nB: Yes, thanks to you, he's doing fine.",
     funFact:"The 님 suffix elevates any title: 선생님 (teacher), 사장님 (boss), 아버님 (father). Using 아버님 for your own father when speaking to others shows refined manners. Weddings always use 아버님/어머님."},

    {type:"teach", trg:"어머님", src:"mother (honorific)", pos:"noun", gender:null,
     note:"어머니 (mother) + 님 (honorific suffix). Standard respectful address for someone's mother.",
     example:"A: 어머님께서 만드신 음식이에요?\nB: 네, 어머님이 보내 주셨어요.",
     exampleSrc:"A: Is this food made by your mother?\nB: Yes, my mother sent it.",
     funFact:"In Korean weddings, the bride addresses her mother-in-law as 어머님. This word carries deep cultural weight. Korean dramas often center dramatic tension around the 어머님-며느리 (mother-in-law/daughter-in-law) relationship."},

    {type:"teach", trg:"애", src:"kid, child (casual)", pos:"noun", gender:null,
     note:"Shortened from 아이 (child). Casual. 그 애 = that kid. 애들 = kids (plural).",
     example:"A: 그 애가 몇 살이에요?\nB: 이제 일곱 살이에요.",
     exampleSrc:"A: How old is that kid?\nB: Seven years old now.",
     funFact:"애 is casual and affectionate. 우리 애 means 'my kid' (using the communal 우리). 애교 (acting cute) uses this same root. Among friends, 이 애/그 애/저 애 (this/that kid) refers to mutual acquaintances casually."},

    {type:"teach", trg:"바보", src:"fool, dummy, idiot", pos:"noun", gender:null,
     note:"Can be affectionate or insulting depending on tone. 바보 같다 = to be foolish.",
     example:"A: 또 열쇠를 잊어버렸어요.\nB: 바보 같은 짓은 그만하세요!",
     exampleSrc:"A: I forgot my keys again.\nB: Stop doing silly things!",
     funFact:"바보 is surprisingly versatile in tone. Between couples, 바보야 can be deeply affectionate (like 'silly'). In anger, it's a real insult. K-drama title 그 바보 (That Fool) plays on this duality perfectly."},

    {type:"teach", trg:"아무것", src:"anything, nothing (with negative)", pos:"pron", gender:null,
     note:"아무 (any) + 것 (thing). 아무것도 없다 = there is nothing. 아무것이나 = anything at all.",
     example:"A: 냉장고에 아무것도 없어요.\nB: 그럼 배달 시킬까요?",
     exampleSrc:"A: There's nothing in the fridge.\nB: Then shall we order delivery?",
     funFact:"The 아무 series is productive: 아무것 (anything), 아무도 (anyone), 아무 데 (anywhere), 아무 때 (anytime). With 도 + negative = nothing/nobody. With (이)나 = anything/anyone (doesn't matter which)."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"'아버님'은 '아버지'와 어떻게 다른가요?",
     opts:["더 높임말","더 어린이 표현","더 친근한 표현","같은 뜻"],
     ans:"더 높임말",
     hint:"The suffix 님 is added to elevate the level of respect. Think about how 선생 becomes 선생님."},

    {type:"fb",
     s:"냉장고에 {1}도 없어요.",
     a:["아무것"],
     opts:["아무것","아무도","아무","무엇"],
     hint:"A pronoun combining 아무 (any) with 것 (thing). When followed by 도 + negative, it means 'nothing.'",
     sSrc:"There is {1} in the fridge."},

    // --- Teach 6-10 ---
    {type:"teach", trg:"물론", src:"of course, naturally", pos:"adv", gender:null,
     note:"Sino-Korean (勿論). 물론이죠 = of course! Discourse marker for obvious agreement.",
     example:"A: 도와줄 수 있어요?\nB: 물론이죠! 뭘 도와줄까요?",
     exampleSrc:"A: Can you help me?\nB: Of course! What can I help with?",
     funFact:"From hanja 勿 (do not) + 論 (discuss) = 'it goes without saying.' 물론 is one of the most satisfying words to use: it signals enthusiastic, unhesitating agreement. Very warm in tone."},

    {type:"teach", trg:"껍질", src:"shell, peel, skin, husk", pos:"noun", gender:null,
     note:"Native Korean. 사과 껍질 = apple peel. 달걀 껍질 = eggshell. 껍질을 벗기다 = to peel.",
     example:"A: 사과 껍질 벗겨 줄까요?\nB: 아니에요, 껍질째 먹을게요.",
     exampleSrc:"A: Shall I peel the apple for you?\nB: No, I'll eat it with the peel on.",
     funFact:"껍질 works for almost anything with an outer layer: 바나나 껍질 (banana peel), 양파 껍질 (onion skin), 새우 껍질 (shrimp shell). 껍데기 is a rougher synonym often used for empty husks or facades."},

    {type:"teach", trg:"여보", src:"honey, dear (between spouses)", pos:"intj", gender:null,
     note:"Used ONLY between married couples. 여보세요 (hello on phone) comes from the same root.",
     example:"A: 여보, 저녁 뭐 먹을까?\nB: 여보가 정해요. 아무거나 좋아요.",
     exampleSrc:"A: Honey, what shall we eat for dinner?\nB: You decide, dear. Anything is fine.",
     funFact:"여보 literally means 'look here' (여기 보다). It became exclusive to married couples. Unmarried couples use 자기 (literally 'self') or names. Using 여보 before marriage would sound presumptuous."},

    {type:"teach", trg:"아니", src:"no; (interjection) wait, what?", pos:"intj", gender:null,
     note:"As interjection: surprise or mild protest. 아니, 진짜? = Wait, really? Very common filler.",
     example:"A: 아니, 벌써 12시예요?\nB: 네, 시간이 빨리 갔네요.",
     exampleSrc:"A: Wait, it's already 12 o'clock?\nB: Yes, time flew by.",
     funFact:"아니 as an interjection expresses surprise, not disagreement. 아니 그게 아니라 (no, that's not it) shows both uses in one phrase. Korean conversations are peppered with 아니 as a filler, like English 'well' or 'wait.'"},

    {type:"teach", trg:"야", src:"hey (casual address particle)", pos:"intj", gender:null,
     note:"Casual vocative. 친구야! = Hey, friend! Only to equals or younger. Rude to elders.",
     example:"A: 야, 어디 가?\nB: 편의점에 잠깐 가.",
     exampleSrc:"A: Hey, where are you going?\nB: I'm going to the convenience store for a sec.",
     funFact:"야 is the vocative particle for names ending in vowels (수지야!), while 아 is for consonant-ending names (민준아!). Using 야 to someone older is a serious breach of Korean social hierarchy."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"물론", src:"of course"},
      {trg:"여보", src:"honey, dear (spouses)"},
      {trg:"아니", src:"no; wait, what?"},
      {trg:"야", src:"hey (casual)"}
    ]},

    {type:"fb",
     s:"사과 {1}을 벗겨 주세요.",
     a:["껍질"],
     opts:["껍질","바보","애","양심"],
     hint:"A native Korean noun for the outer layer or peel of fruit, eggs, or nuts. You remove it before eating.",
     sSrc:"Please peel the apple {1} for me."},

    // --- Teach 11-15 ---
    {type:"teach", trg:"무어", src:"what (dialectal/literary form of 뭐)", pos:"pron", gender:null,
     note:"Older/literary form of 뭐 (what). 무어라 할까 = what shall I say? Poetic register.",
     example:"A: 이 느낌을 무어라 표현할까요?\nB: 말로는 표현하기 어렵네요.",
     exampleSrc:"A: How shall I express this feeling?\nB: It's hard to express in words.",
     funFact:"무어 is the literary/poetic form of 뭐. Modern Korean uses 뭐 almost exclusively in speech. 무어 appears in poetry, songs, and dramatic monologues for a more elegant, reflective tone."},

    {type:"teach", trg:"떼다", src:"to remove, to detach, to peel off", pos:"verb", gender:null,
     note:"Native Korean. 스티커를 떼다 = remove a sticker. 눈을 떼다 = take one's eyes off.",
     example:"A: 이 스티커 좀 떼 주세요.\nB: 잘 안 떨어지네요. 세게 당길게요.",
     exampleSrc:"A: Please remove this sticker.\nB: It won't come off easily. I'll pull harder.",
     funFact:"떼다 has vivid figurative uses: 눈을 떼지 못하다 (can't take one's eyes off), 떼를 쓰다 (to throw a tantrum, literally 'to write/use a 떼'), 뗄 수 없는 관계 (inseparable relationship)."},

    {type:"teach", trg:"아예", src:"at all, from the start, completely", pos:"adv", gender:null,
     note:"Native Korean adverb. Emphasizes totality, often with negatives. 아예 안 하다 = not do it at all.",
     example:"A: 담배를 줄이려고요.\nB: 줄이지 말고 아예 끊으세요.",
     exampleSrc:"A: I'm trying to cut down on cigarettes.\nB: Don't just cut down, quit entirely.",
     funFact:"아예 is more extreme than 전혀: 전혀 모르다 (don't know at all) vs. 아예 안 하다 (don't do it whatsoever). 아예 suggests a definitive, all-or-nothing stance."},

    {type:"teach", trg:"오히려", src:"rather, on the contrary, instead", pos:"adv", gender:null,
     note:"Native Korean. Introduces an unexpected reversal. 오히려 더 좋다 = it's actually better.",
     example:"A: 실패해서 속상하죠?\nB: 아니에요, 오히려 많이 배웠어요.",
     exampleSrc:"A: You must be upset about failing, right?\nB: No, I actually learned a lot instead.",
     funFact:"오히려 is the Korean 'plot twist' adverb. It signals that reality is the opposite of expectations. 오히려 감사하다 (I'm actually grateful instead) is a mature, gracious Korean expression."},

    {type:"teach", trg:"비로소", src:"for the first time, only then, at last", pos:"adv", gender:null,
     note:"Native Korean. Marks the moment something finally happens. 비로소 알게 되다 = come to know for the first time.",
     example:"A: 부모가 된 후에 비로소 부모님의 마음을 알았어요.\nB: 저도 그래요.",
     exampleSrc:"A: Only after becoming a parent did I finally understand my parents' hearts.\nB: Me too.",
     funFact:"비로소 is a deeply reflective word. It implies a long wait or process before realization: 비로소 이해했다 (only then did I understand). It pairs beautifully with life wisdom and hindsight."},

    // --- Quiz batch 3 ---
    {type:"mc",
     q:"'오히려 더 좋았어요'에서 '오히려'의 역할은?",
     opts:["비교","반대되는 결과를 나타냄","시간의 흐름을 나타냄","강조"],
     ans:"반대되는 결과를 나타냄",
     hint:"This adverb signals that the result was the opposite of what was expected. Think 'contrary to expectations.'"},

    {type:"fb",
     s:"줄이지 말고 {1} 끊으세요.",
     a:["아예"],
     opts:["아예","오히려","비로소","물론"],
     hint:"An adverb meaning 'completely/from the start' that suggests an all-or-nothing approach rather than half measures.",
     sSrc:"Don't just reduce it, {1} quit altogether."},

    // --- Teach 16-20 ---
    {type:"teach", trg:"뜻밖에", src:"unexpectedly, to one's surprise", pos:"adv", gender:null,
     note:"뜻 (intention/meaning) + 밖 (outside) + 에 (at). Literally 'outside of expectation.'",
     example:"A: 시험이 뜻밖에 쉬웠어요.\nB: 다행이네요! 잘 봤겠네요.",
     exampleSrc:"A: The exam was unexpectedly easy.\nB: That's fortunate! You must have done well.",
     funFact:"뜻밖에 is elegant and precise: it locates the event literally 'outside' (밖) one's 'meaning/expectation' (뜻). 뜻밖의 선물 (an unexpected gift) and 뜻밖의 만남 (an unexpected encounter) are common collocations."},

    {type:"teach", trg:"사뭇", src:"quite, considerably, completely", pos:"adv", gender:null,
     note:"Native Korean. Literary register. 사뭇 다르다 = quite different. Emphasizes degree of difference.",
     example:"A: 10년 전과 사뭇 달라졌네요.\nB: 네, 많이 변했어요.",
     exampleSrc:"A: Things have changed quite a bit from 10 years ago.\nB: Yes, a lot has changed.",
     funFact:"사뭇 is literary and slightly old-fashioned, giving speech a refined quality. It almost always pairs with difference or change: 사뭇 다른 분위기 (a quite different atmosphere). Not used in casual texting."},

    {type:"teach", trg:"슬그머니", src:"stealthily, quietly, secretly", pos:"adv", gender:null,
     note:"Native Korean. Describes sneaky or subtle action. 슬그머니 빠져나가다 = slip out quietly.",
     example:"A: 회의 중에 슬그머니 나갔어요?\nB: 네, 급한 전화가 와서요.",
     exampleSrc:"A: Did you slip out quietly during the meeting?\nB: Yes, I got an urgent call.",
     funFact:"슬그머니 paints a vivid picture of quiet, unnoticed movement. 살짝 is similar but lighter. 슬그머니 is more deliberate and secretive: 슬그머니 숨기다 (secretly hide something) implies intentional concealment."},

    {type:"teach", trg:"애초", src:"from the start, from the beginning, originally", pos:"noun", gender:null,
     note:"애초에 = from the very beginning. Often implies something should have been different from the start.",
     example:"A: 애초에 그렇게 하면 안 됐어요.\nB: 맞아요. 처음부터 잘못했네요.",
     exampleSrc:"A: You shouldn't have done that from the start.\nB: You're right. It was wrong from the beginning.",
     funFact:"애초에 carries a tone of regret or criticism: it implies something went wrong because the starting point was flawed. 애초에 불가능했다 (it was impossible from the start) is a common way to dismiss a failed plan."},

    {type:"teach", trg:"양심", src:"conscience, moral sense", pos:"noun", gender:null,
     note:"Sino-Korean (良心). 양심적이다 = to be conscientious. 양심에 찔리다 = conscience pricks.",
     example:"A: 양심에 안 찔려요?\nB: 솔직히 좀 찔려요.",
     exampleSrc:"A: Doesn't your conscience bother you?\nB: Honestly, it does a little.",
     funFact:"From hanja 良 (good) + 心 (heart). 양심적 병역 거부 (conscientious objection to military service) became legal in Korea in 2018 after decades of debate. 양심 is a word with real social weight."},

    // --- Quiz batch 4 ---
    {type:"match", pairs:[
      {trg:"뜻밖에", src:"unexpectedly"},
      {trg:"슬그머니", src:"stealthily, quietly"},
      {trg:"애초", src:"from the start"},
      {trg:"양심", src:"conscience"}
    ]},

    {type:"mc",
     q:"'사뭇 다르다'에서 '사뭇'은 어떤 느낌이에요?",
     opts:["슬픈","일상적이고 가벼운","문학적이고 격식 있는","화가 난"],
     ans:"문학적이고 격식 있는",
     hint:"This adverb has an elegant, slightly old-fashioned quality. It appears more in writing and refined speech than casual conversation."},

    {type:"fb",
     s:"{1}에 그렇게 하면 안 됐어요.",
     a:["애초"],
     opts:["애초","양심","비로소","뜻밖에"],
     hint:"A noun meaning 'the very beginning.' Often used with the particle 에 to express regret about a starting decision.",
     sSrc:"You shouldn't have done that from {1}."}
  ]
};
export default LESSON_40;
