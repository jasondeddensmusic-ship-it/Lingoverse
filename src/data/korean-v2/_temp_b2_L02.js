// B2 Lesson 02: Emotions & Sensitivity
// Words: 가슴속, 감수성, 감정적, 감동적, 감상, 감상하다, 괴로움, 괴로워하다, 괴롭다,
//        괴롭히다, 그리움, 그립다, 걱정되다, 걱정스럽다, 겁나다, 고통스럽다, 감추다, 감싸다, 긴장되다, 긴장감

const LESSON_2 = {
  id:"kov2_b2_l2", title:"감정의 깊이", icon:"\uD83D\uDC9C", xp:15, board:true,
  steps:[
    {type:"intro", title:"The Depth of Emotions",
     desc:"Explore Korean vocabulary for deep emotions and inner feelings. These words are essential for expressing complex emotional states in TOPIK II writing and reading.",
     goals:["Learn 20 emotion and sensitivity vocabulary words","Understand how Korean expresses internal emotional states","Use nuanced emotion vocabulary in dialogues"]},

    {type:"teach", trg:"\uAC00\uC2B4\uC18D", src:"inside one's heart; deep in one's chest", pos:"noun", gender:null,
     note:"Pure Korean compound: chest (가슴) + inside (속).\nExpresses inner emotional space.",
     example:"A: \uAC00\uC2B4\uC18D\uC5D0 \uD56D\uC0C1 \uAC04\uC9C1\uD558\uACE0 \uC788\uB294 \uAFC8\uC774 \uC788\uC5B4\uC694?\nB: \uB124, \uC791\uAC00\uAC00 \uB418\uACE0 \uC2F6\uC5B4\uC694.\nA: \uBA4B\uC9C4 \uAFC8\uC774\uB124\uC694.\nB: \uAC00\uC2B4\uC18D \uAE4A\uC774 \uAC04\uC9C1\uD55C \uAFC8\uC774\uC5D0\uC694.",
     exampleSrc:"A: Is there a dream you always keep in your heart?\nB: Yes, I want to become a writer.\nA: That is a wonderful dream.\nB: It is a dream I have kept deep in my heart.",
     funFact:"Koreans often say 가슴속에 품다 (to embrace in one's heart) to describe cherishing something precious and private."},

    {type:"teach", trg:"\uAC10\uC218\uC131", src:"sensitivity; sensibility", pos:"noun", gender:null,
     note:"Sino-Korean: feeling (感) + receive (受) + nature (性).\nEmotional receptiveness.",
     example:"A: \uADF8 \uC2DC\uB294 \uAC10\uC218\uC131\uC774 \uD48D\uBD80\uD574\uC694.\nB: \uC791\uAC00\uC758 \uAC10\uC218\uC131\uC774 \uB290\uAEF4\uC838\uC694.\nA: \uC608\uC220\uAC00\uB4E4\uC740 \uAC10\uC218\uC131\uC774 \uB0A8\uB2EC\uB77C\uC694.\nB: \uB9DE\uC544\uC694, \uC138\uC0C1\uC744 \uB2E4\uB974\uAC8C \uBCF4\uC8E0.",
     exampleSrc:"A: That poem is rich in sensitivity.\nB: You can feel the poet's sensibility.\nA: Artists have extraordinary sensitivity.\nB: That is right, they see the world differently.",
     funFact:"Korean literature prizes 감수성 highly. Critics often describe powerful works as having 'sharp sensitivity' (예리한 감수성)."},

    {type:"teach", trg:"\uAC10\uC815\uC801", src:"emotional", pos:"noun", gender:null,
     note:"Sino-Korean: feeling (感) + emotion (情) + target (的).\nUsed as an adjective with -이다/-인.",
     example:"A: \uADF8 \uC601\uD654\uB294 \uB108\uBB34 \uAC10\uC815\uC801\uC774\uC5C8\uC5B4\uC694.\nB: \uB9DE\uC544\uC694, \uB208\uBB3C\uC774 \uB0AC\uC5B4\uC694.\nA: \uAC10\uC815\uC801\uC778 \uC7A5\uBA74\uC774 \uB9CE\uC558\uC8E0.\nB: \uBC30\uC6B0\uB4E4 \uC5F0\uAE30\uAC00 \uB300\uB2E8\uD588\uC5B4\uC694.",
     exampleSrc:"A: That movie was very emotional.\nB: I agree, I cried.\nA: There were many emotional scenes.\nB: The actors' performances were amazing.",
     funFact:"The -적 (的) suffix turns Sino-Korean nouns into adjective-like words. It is one of the most productive suffixes in Korean."},

    {type:"teach", trg:"\uAC10\uB3D9\uC801", src:"touching; moving", pos:"noun", gender:null,
     note:"Sino-Korean: feeling (感) + move (動) + target (的).\nDescribes something that moves you emotionally.",
     example:"A: \uCF58\uC11C\uD2B8\uAC00 \uC815\uB9D0 \uAC10\uB3D9\uC801\uC774\uC5C8\uC5B4\uC694.\nB: \uC5B4\uB5A4 \uBD80\uBD84\uC774 \uAC00\uC7A5 \uAC10\uB3D9\uC801\uC774\uC5C8\uC5B4\uC694?\nA: \uB9C8\uC9C0\uB9C9 \uACE1\uC774 \uC815\uB9D0 \uAC10\uB3D9\uC801\uC774\uC5C8\uC5B4\uC694.\nB: \uAD00\uAC1D\uB4E4\uC774 \uBAA8\uB450 \uBC15\uC218\uB97C \uCCE4\uC8E0.",
     exampleSrc:"A: The concert was really moving.\nB: Which part was the most moving?\nA: The last song was truly moving.\nB: The entire audience applauded.",
     funFact:"Koreans often distinguish 감동적 (being moved by art/beauty) from 감정적 (being emotionally reactive). The first is admired, the second can be cautioned against."},

    {type:"teach", trg:"\uAC10\uC0C1", src:"appreciation; reflection; impression", pos:"noun", gender:null,
     note:"Sino-Korean: feeling (感) + think (想).\nAlso means 'thoughts/impressions after experiencing art.'",
     example:"A: \uC804\uC2DC\uD68C \uAC10\uC0C1\uC774 \uC5B4\uB5BB\uC5B4\uC694?\nB: \uC815\uB9D0 \uC778\uC0C1\uC801\uC774\uC5C8\uC5B4\uC694.\nA: \uAC10\uC0C1\uBB38\uC744 \uC4F8 \uAC70\uC608\uC694?\nB: \uB124, \uBE14\uB85C\uADF8\uC5D0 \uC62C\uB9AC\uB824\uACE0\uC694.",
     exampleSrc:"A: What were your impressions of the exhibition?\nB: It was really impressive.\nA: Are you going to write a review?\nB: Yes, I plan to post it on my blog.",
     funFact:"Writing 감상문 (reflection essays) is a standard school assignment in Korea, from book reports to movie reviews."},

    {type:"teach", trg:"\uAC10\uC0C1\uD558\uB2E4", src:"to appreciate; to enjoy (art)", pos:"verb", gender:null,
     note:"Sino-Korean: feeling (感) + think (想) + do (하다).\nThe verb form of 감상.",
     example:"A: \uC8FC\uB9D0\uC5D0 \uBBF8\uC220\uAD00\uC5D0\uC11C \uADF8\uB9BC\uC744 \uAC10\uC0C1\uD588\uC5B4\uC694.\nB: \uC5B4\uB5A4 \uC791\uD488\uC744 \uAC10\uC0C1\uD588\uC5B4\uC694?\nA: \uC778\uC0C1\uC8FC\uC758 \uC791\uD488\uC744 \uAC10\uC0C1\uD588\uC5B4\uC694.\nB: \uC608\uC220\uC744 \uAC10\uC0C1\uD558\uB294 \uC2DC\uAC04\uC774 \uC88B\uC544\uC694.",
     exampleSrc:"A: I appreciated paintings at the art gallery on the weekend.\nB: What kind of works did you enjoy?\nA: I enjoyed Impressionist works.\nB: Time spent appreciating art is wonderful.",
     funFact:"감상하다 implies thoughtful, deliberate enjoyment, not just casual watching. It carries a sense of artistic engagement."},

    {type:"mc",
     q:"\uAC10\uC0C1\uBB38\uC740 \uBB34\uC5C7\uC77C\uAE4C\uC694?",
     opts:["\uC608\uC220\uC744 \uBCF4\uACE0 \uC4F4 \uAE00","\uC74C\uC2DD \uB808\uC2DC\uD53C","\uC5EC\uD589 \uACC4\uD68D\uC11C","\uC218\uD559 \uBB38\uC81C"],
     ans:"\uC608\uC220\uC744 \uBCF4\uACE0 \uC4F4 \uAE00",
     hint:"Think about a written piece that captures someone's thoughts after viewing art."},

    {type:"teach", trg:"\uAD34\uB85C\uC6C0", src:"suffering; anguish", pos:"noun", gender:null,
     note:"Pure Korean: from the adjective 괴롭다 + noun suffix -음.",
     example:"A: \uC2E4\uC5C5\uC758 \uAD34\uB85C\uC6C0\uC744 \uC774\uACA8 \uB0C8\uC5B4\uC694.\nB: \uC815\uB9D0 \uD798\uB4E4\uC5C8\uACA0\uC5B4\uC694.\nA: \uAD34\uB85C\uC6C0\uC774 \uCEF4\uC5B4\uC694.\nB: \uC774\uC81C \uB354 \uAC15\uD574\uC84C\uC8E0.",
     exampleSrc:"A: I overcame the anguish of unemployment.\nB: That must have been really hard.\nA: The suffering was great.\nB: You have become stronger now.",
     funFact:"Korean literature often explores 괴로움 as a philosophical concept, particularly in modern poetry about societal pressures."},

    {type:"teach", trg:"\uAD34\uB85C\uC6CC\uD558\uB2E4", src:"to suffer; to agonize", pos:"verb", gender:null,
     note:"Pure Korean: painful/distressed (괴롭다) + do/act (하다).\nExpresses showing or experiencing distress.",
     example:"A: \uC694\uC998 \uBB34\uC5C7 \uB54C\uBB38\uC5D0 \uAD34\uB85C\uC6CC\uD558\uC138\uC694?\nB: \uC9C4\uB85C \uBB38\uC81C\uB85C \uAD34\uB85C\uC6CC\uD558\uACE0 \uC788\uC5B4\uC694.\nA: \uD63C\uC790 \uAD34\uB85C\uC6CC\uD558\uC9C0 \uB9C8\uC138\uC694.\nB: \uACE0\uB9C8\uC6CC\uC694, \uC774\uC57C\uAE30\uD574 \uC904\uAC8C\uC694.",
     exampleSrc:"A: What are you agonizing about these days?\nB: I am agonizing over career issues.\nA: Do not suffer alone.\nB: Thank you, I will talk about it.",
     funFact:"The pattern -워하다 converts emotional adjectives into verbs showing outward expression: 슬프다 (sad) becomes 슬퍼하다 (to show sadness)."},

    {type:"teach", trg:"\uAD34\uB86D\uB2E4", src:"to be painful; to be distressing", pos:"adj", gender:null,
     note:"Pure Korean adjective. Describes internal suffering.",
     example:"A: \uD63C\uC790 \uC0AC\uB294 \uAC8C \uAD34\uB86D\uC9C0 \uC54A\uC544\uC694?\nB: \uCC98\uC74C\uC5D0\uB294 \uAD34\uB85C\uC6E0\uC5B4\uC694.\nA: \uC9C0\uAE08\uC740 \uC5B4\uB54C\uC694?\nB: \uC774\uC81C\uB294 \uC775\uC219\uD574\uC84C\uC5B4\uC694.",
     exampleSrc:"A: Is it not painful living alone?\nB: At first it was painful.\nA: How is it now?\nB: I have gotten used to it now.",
     funFact:"괴롭다 shares its root with 괴물 (monster). The connection implies something monstrous gnawing from within."},

    {type:"teach", trg:"\uAD34\uB86D\uD788\uB2E4", src:"to torment; to bully", pos:"verb", gender:null,
     note:"Causative of 괴롭다. To cause someone pain or distress.",
     example:"A: \uD559\uAD50\uC5D0\uC11C \uAD34\uB86D\uD798\uC744 \uB2F9\uD558\uB294 \uD559\uC0DD\uC774 \uC788\uC5B4\uC694.\nB: \uC5BC\uB978 \uC120\uC0DD\uB2D8\uAED8 \uB9D0\uC529\uD574\uC57C \uD574\uC694.\nA: \uB204\uAD6C\uB3C4 \uB2E4\uB978 \uC0AC\uB78C\uC744 \uAD34\uB86D\uD788\uBA74 \uC548 \uB3FC\uC694.\nB: \uB9DE\uC544\uC694, \uD559\uAD50 \uD3ED\uB825\uC740 \uC2EC\uAC01\uD55C \uBB38\uC81C\uC608\uC694.",
     exampleSrc:"A: There is a student being bullied at school.\nB: You need to tell the teacher right away.\nA: No one should torment another person.\nB: That is right, school bullying is a serious problem.",
     funFact:"Korea has strong anti-bullying laws (학교폭력예방법). The term 괴롭힘 (bullying/harassment) is now widely used in legal contexts."},

    {type:"fb",
     s:"\uD63C\uC790 {1} \uB9C8\uC138\uC694. \uB3C4\uC640\uC904\uAC8C\uC694.",
     a:["\uAD34\uB85C\uC6CC\uD558\uC9C0"],
     opts:["\uAD34\uB85C\uC6CC\uD558\uC9C0","\uAC10\uC0C1\uD558\uC9C0","\uAC10\uCD94\uC9C0","\uAE34\uC7A5\uD558\uC9C0"],
     hint:"This means to suffer or agonize. The sentence tells someone not to do it alone.",
     sSrc:"Do not {1} alone. I will help you."},

    {type:"teach", trg:"\uADF8\uB9AC\uC6C0", src:"longing; yearning; nostalgia", pos:"noun", gender:null,
     note:"Pure Korean: from the adjective 그립다 + noun suffix -움.",
     example:"A: \uACE0\uD5A5\uC5D0 \uB300\uD55C \uADF8\uB9AC\uC6C0\uC774 \uCEE4\uC694.\nB: \uC624\uB798 \uBABB \uAC00\uC168\uC5B4\uC694?\nA: 3\uB144\uC774\uB098 \uBABB \uAC14\uC5B4\uC694.\nB: \uADF8\uB9AC\uC6C0\uC774 \uD06C\uC2DC\uACA0\uC5B4\uC694.",
     exampleSrc:"A: My longing for my hometown has grown.\nB: Have you not been back in a long time?\nA: I have not gone for three years.\nB: Your yearning must be great.",
     funFact:"그리움 is one of the most emotionally loaded words in Korean literature. Countless poems and songs center on this feeling."},

    {type:"teach", trg:"\uADF8\uB9BD\uB2E4", src:"to miss (someone/something)", pos:"adj", gender:null,
     note:"Pure Korean adjective. Conjugates irregularly: 그리워, 그리운.",
     example:"A: \uC5B4\uB9B0 \uC2DC\uC808\uC774 \uADF8\uB9AC\uC6CC\uC694.\nB: \uC800\uB3C4\uC694. \uADF8\uB54C\uAC00 \uADF8\uB9AC\uC6CC\uC694.\nA: \uACE0\uD5A5 \uCE5C\uAD6C\uB4E4\uC774 \uADF8\uB9AC\uC6CC\uC694.\nB: \uC5F0\uB77D\uD574 \uBCF4\uC138\uC694.",
     exampleSrc:"A: I miss my childhood.\nB: Me too. I miss those times.\nA: I miss my hometown friends.\nB: Try reaching out to them.",
     funFact:"그립다 is an irregular adjective (ㅂ-irregular). The ㅂ drops and becomes 우: 그립다 > 그리워, 그리운."},

    {type:"teach", trg:"\uAC71\uC815\uB418\uB2E4", src:"to be worried (passive)", pos:"verb", gender:null,
     note:"Sino-Korean: worry (憂) + decide (定) + become (되다).\nPassive form, the worry comes to you.",
     example:"A: \uC2DC\uD5D8 \uACB0\uACFC\uAC00 \uAC71\uC815\uB3FC\uC694.\nB: \uC5F4\uC2EC\uD788 \uACF5\uBD80\uD588\uC73C\uB2C8\uAE4C \uAD1C\uCC2E\uC744 \uAC70\uC608\uC694.\nA: \uBD80\uBAA8\uB2D8\uB3C4 \uAC71\uC815\uD558\uC2E4 \uAC83 \uAC19\uC544\uC694.\nB: \uB108\uBB34 \uAC71\uC815\uD558\uC9C0 \uB9C8\uC138\uC694.",
     exampleSrc:"A: I am worried about the exam results.\nB: You studied hard, so it will be fine.\nA: I think my parents will worry too.\nB: Do not worry too much.",
     funFact:"Korean distinguishes active 걱정하다 (I worry) from passive 걱정되다 (worry comes upon me). The passive feels more natural and less deliberate."},

    {type:"teach", trg:"\uAC71\uC815\uC2A4\uB7FD\uB2E4", src:"to seem worrisome; concerning", pos:"adj", gender:null,
     note:"Compound: worry (걱정) + suffix -스럽다 (seems like).\nDescribes a situation that looks worrying.",
     example:"A: \uAC74\uAC15\uC774 \uAC71\uC815\uC2A4\uB7EC\uC6CC\uC694.\nB: \uBCD1\uC6D0\uC5D0 \uAC00 \uBCF4\uC138\uC694.\nA: \uAC71\uC815\uC2A4\uB7EC\uC6B4 \uC99D\uC0C1\uC774 \uC788\uC5B4\uC694?\nB: \uC694\uC998 \uD53C\uACE4\uD558\uACE0 \uC2DD\uC695\uC774 \uC5C6\uC5B4\uC694.",
     exampleSrc:"A: Your health seems worrying.\nB: You should go to the hospital.\nA: Are there any concerning symptoms?\nB: I have been tired lately and have no appetite.",
     funFact:"The suffix -스럽다 creates adjectives meaning 'having the quality of': 사랑 (love) > 사랑스럽다 (lovely), 자연 (nature) > 자연스럽다 (natural)."},

    {type:"teach", trg:"\uAC81\uB098\uB2E4", src:"to be scared; to be frightened", pos:"verb", gender:null,
     note:"Pure Korean: fear (겁) + come out (나다).\nFear 'emerges' involuntarily.",
     example:"A: \uACE0\uC18C \uACF5\uD3EC\uC99D\uC774 \uC788\uC5B4\uC694?\nB: \uB124, \uB192\uC740 \uACF3\uC774 \uAC81\uB098\uC694.\nA: \uBE44\uD589\uAE30 \uD0C0\uB294 \uAC83\uB3C4 \uAC81\uB098\uC694?\nB: \uC774\uB959\uD560 \uB54C \uC870\uAE08 \uAC81\uB098\uC694.",
     exampleSrc:"A: Do you have a fear of heights?\nB: Yes, high places scare me.\nA: Are you scared of flying too?\nB: Takeoff scares me a little.",
     funFact:"In casual Korean, 겁나 is also used as slang for 'very/extremely': 겁나 맛있다 (insanely delicious). Very colloquial."},

    {type:"teach", trg:"\uACE0\uD1B5\uC2A4\uB7FD\uB2E4", src:"to be painful; agonizing", pos:"adj", gender:null,
     note:"Sino-Korean + native suffix: pain (苦痛) + -스럽다 (quality of).",
     example:"A: \uC774\uBCC4\uC774 \uACE0\uD1B5\uC2A4\uB7EC\uC6E0\uC5B4\uC694.\nB: \uC2DC\uAC04\uC774 \uC9C0\uB098\uBA74 \uB098\uC544\uC9C8 \uAC70\uC608\uC694.\nA: \uACE0\uD1B5\uC2A4\uB7EC\uC6B4 \uAE30\uC5B5\uC774\uC5D0\uC694.\nB: \uD798\uB4E4\uBA74 \uC5B8\uC81C\uB4E0 \uC5F0\uB77D\uD558\uC138\uC694.",
     exampleSrc:"A: The breakup was agonizing.\nB: It will get better with time.\nA: It is a painful memory.\nB: Whenever it gets hard, contact me anytime.",
     funFact:"고통 comes from the hanja 苦 (bitter) + 痛 (pain). The compound conveys both emotional and physical agony."},

    {type:"teach", trg:"\uAC10\uCD94\uB2E4", src:"to hide; to conceal", pos:"verb", gender:null,
     note:"Pure Korean verb. Used for hiding emotions, objects, or truths.",
     example:"A: \uC2AC\uD508 \uAC10\uC815\uC744 \uAC10\uCD94\uC9C0 \uB9C8\uC138\uC694.\nB: \uC6B0\uB294 \uBAA8\uC2B5\uC744 \uBCF4\uC774\uAE30 \uC2EB\uC5B4\uC694.\nA: \uAC10\uCD94\uBA74 \uB354 \uD798\uB4E4\uC5B4\uC694.\nB: \uC54C\uACA0\uC5B4\uC694, \uB178\uB825\uD574 \uBCFC\uAC8C\uC694.",
     exampleSrc:"A: Do not hide sad feelings.\nB: I do not want to show myself crying.\nA: Hiding makes it harder.\nB: I understand, I will try.",
     funFact:"감추다 is used in the proverb 감추면 병이 되고, 말하면 약이 된다: 'What you hide becomes illness; what you speak becomes medicine.'"},

    {type:"teach", trg:"\uAC10\uC2F8\uB2E4", src:"to wrap; to embrace protectively", pos:"verb", gender:null,
     note:"Pure Korean verb. To physically or emotionally wrap and protect.",
     example:"A: \uC5B4\uB9C8\uB2C8\uAC00 \uC544\uC774\uB97C \uAC10\uC2F8 \uC548\uC558\uC5B4\uC694.\nB: \uB530\uB73B\uD55C \uC7A5\uBA74\uC774\uB124\uC694.\nA: \uC5B4\uB9C8\uB2C8\uC758 \uC0AC\uB791\uC740 \uBAA8\uB4E0 \uAC83\uC744 \uAC10\uC2F8\uC8E0.\nB: \uADF8\uB807\uC8E0, \uC5B4\uB9C0\uB2C8\uAC00 \uADF8\uB9AC\uC6CC\uC694.",
     exampleSrc:"A: The mother embraced her child.\nB: What a warm scene.\nA: A mother's love wraps around everything.\nB: Indeed, I miss my mom.",
     funFact:"감싸다 carries a protective nuance that 안다 (to hug) does not. It implies shielding someone from harm."},

    {type:"mc",
     q:"\uADF8\uB9AC\uC6C0\uC758 \uB73B\uC740 \uBB34\uC5C7\uC77C\uAE4C\uC694?",
     opts:["\uBCF4\uACE0 \uC2F6\uC740 \uB9C8\uC74C","\uD654\uB09C \uAC10\uC815","\uAE30\uC05C \uAE30\uC5B5","\uBB34\uC11C\uC6B4 \uB290\uB08C"],
     ans:"\uBCF4\uACE0 \uC2F6\uC740 \uB9C8\uC74C",
     hint:"This word describes the feeling of wanting to see someone or return to a place from the past."},

    {type:"teach", trg:"\uAE34\uC7A5\uB418\uB2E4", src:"to be nervous; to feel tense", pos:"verb", gender:null,
     note:"Sino-Korean: tight (緊) + stretch (張) + become (되다).\nPassive: tension comes upon you.",
     example:"A: \uBC1C\uD45C \uC804\uC5D0 \uAE34\uC7A5\uB3FC\uC694.\nB: \uC790\uC5F0\uC2A4\uB7EC\uC6B4 \uAC70\uC608\uC694, \uAE34\uC7A5\uD558\uC9C0 \uB9C8\uC138\uC694.\nA: \uC0AC\uB78C\uB4E4 \uC55E\uC5D0\uC11C \uD56D\uC0C1 \uAE34\uC7A5\uB3FC\uC694.\nB: \uC5F0\uC2B5\uC744 \uB9CE\uC774 \uD558\uBA74 \uB098\uC544\uC838\uC694.",
     exampleSrc:"A: I feel nervous before the presentation.\nB: It is natural, do not be tense.\nA: I always get nervous in front of people.\nB: Practicing more will help.",
     funFact:"Korean separates 긴장하다 (active: I make myself tense) from 긴장되다 (passive: nervousness happens to me). Both are common."},

    {type:"teach", trg:"\uAE34\uC7A5\uAC10", src:"sense of tension; suspense", pos:"noun", gender:null,
     note:"Sino-Korean: tight (緊) + stretch (張) + feeling (感).\nUsed for both personal and narrative tension.",
     example:"A: \uC774 \uC601\uD654\uB294 \uAE34\uC7A5\uAC10\uC774 \uB300\uB2E8\uD574\uC694.\nB: \uB9DE\uC544\uC694, \uB05D\uAE4C\uC9C0 \uAE34\uC7A5\uAC10\uC774 \uC720\uC9C0\uB3FC\uC694.\nA: \uBC94\uC778\uC774 \uB204\uAD6C\uC778\uC9C0 \uBAB0\uB790\uC5B4\uC694.\nB: \uADF8 \uAE34\uC7A5\uAC10\uC774 \uC601\uD654\uC758 \uB9E4\uB825\uC774\uC5D0\uC694.",
     exampleSrc:"A: This movie has amazing tension.\nB: Yes, the suspense was maintained until the end.\nA: I did not know who the culprit was.\nB: That tension is the charm of the movie.",
     funFact:"긴장감 is a key term in Korean film criticism. Korean thrillers are globally praised for their mastery of sustained tension."},

    {type:"match", pairs:[
      {trg:"\uADF8\uB9AC\uC6C0", src:"longing"},
      {trg:"\uAD34\uB85C\uC6C0", src:"suffering"},
      {trg:"\uAE34\uC7A5\uAC10", src:"tension"},
      {trg:"\uAC10\uC218\uC131", src:"sensitivity"},
      {trg:"\uAC10\uB3D9\uC801", src:"touching"},
      {trg:"\uAC10\uC815\uC801", src:"emotional"}
    ]}
  ]
};
export default LESSON_2;
