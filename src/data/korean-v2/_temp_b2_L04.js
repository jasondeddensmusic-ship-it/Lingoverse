// B2 Lesson 04: Judgment & Resolve
// Words: 각오, 결심, 결심하다, 결코, 고집, 고집하다, 거부하다, 거절하다, 갖추다, 감히,
//        과연, 그럴듯하다, 그만하다, 곤란하다, 견해, 관점, 관념, 객관적, 궁극적, 갑작스럽다

const LESSON_4 = {
  id:"kov2_b2_l4", title:"판단과 결심", icon:"\u2696\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Judgment & Resolve",
     desc:"Learn vocabulary for expressing opinions, making decisions, and standing firm. These words are critical for TOPIK II essay writing and expressing nuanced viewpoints.",
     goals:["Learn 20 words for judgment, resolve, and perspective","Express opinions using Sino-Korean abstract nouns","Construct formal argument vocabulary"]},

    {type:"teach", trg:"\uAC01\uC624", src:"resolve; determination; preparedness", pos:"noun", gender:null,
     note:"Sino-Korean: each/individual (覺) + realize (悟).\nThe mental readiness for a challenge.",
     example:"A: \uC0C8\uB85C\uC6B4 \uC0AC\uC5C5\uC744 \uC2DC\uC791\uD560 \uAC01\uC624\uAC00 \uB418\uC5C8\uC5B4\uC694?\nB: \uB124, \uAC01\uC624\uB97C \uB2E8\uB2E8\uD788 \uD588\uC5B4\uC694.\nA: \uC5B4\uB824\uC6C0\uC774 \uC788\uC744 \uAC70\uC608\uC694.\nB: \uAC01\uC624\uD558\uACE0 \uC788\uC5B4\uC694.",
     exampleSrc:"A: Are you prepared to start a new business?\nB: Yes, I have steeled my resolve.\nA: There will be difficulties.\nB: I am prepared for them.",
     funFact:"각오 implies not just deciding, but mentally bracing for hardship. It is often used before major life changes."},

    {type:"teach", trg:"\uACB0\uC2EC", src:"determination; resolution", pos:"noun", gender:null,
     note:"Sino-Korean: decide (決) + heart/mind (心).\nA firm decision from the heart.",
     example:"A: \uB2F4\uBC30\uB97C \uB054\uACA0\uB2E4\uB294 \uACB0\uC2EC\uC744 \uD588\uC5B4\uC694.\nB: \uC815\uB9D0\uC694? \uB300\uB2E8\uD574\uC694!\nA: \uACB0\uC2EC\uC774 \uD655\uACE0\uD574\uC694.\nB: \uC751\uC6D0\uD560\uAC8C\uC694!",
     exampleSrc:"A: I have made the resolution to quit smoking.\nB: Really? That is great!\nA: My determination is firm.\nB: I will cheer you on!",
     funFact:"결심 focuses on the emotional/heart component of deciding. Compare with 결정 (decision), which is more rational and procedural."},

    {type:"teach", trg:"\uACB0\uC2EC\uD558\uB2E4", src:"to make a resolution; to determine", pos:"verb", gender:null,
     note:"Verb form of 결심. To firmly decide with emotional commitment.",
     example:"A: \uC720\uD559\uC744 \uACB0\uC2EC\uD588\uC5B4\uC694.\nB: \uC5B4\uB290 \uB098\uB77C\uB85C \uACB0\uC2EC\uD588\uC5B4\uC694?\nA: \uD638\uC8FC\uB85C \uACB0\uC2EC\uD588\uC5B4\uC694.\nB: \uC88B\uC740 \uACB0\uC2EC\uC774\uC5D0\uC694.",
     exampleSrc:"A: I have decided to study abroad.\nB: Which country did you decide on?\nA: I decided on Australia.\nB: That is a good decision.",
     funFact:"New Year's resolutions are called 새해 결심 in Korean. Making and breaking them is a universal experience."},

    {type:"teach", trg:"\uACB0\uCF54", src:"never; by no means", pos:"adv", gender:null,
     note:"Sino-Korean: decide (決) + (코). Always used with negatives.",
     example:"A: \uC774 \uC77C\uC740 \uACB0\uCF54 \uC26C\uC6B4 \uC77C\uC774 \uC544\uB2C8\uC5D0\uC694.\nB: \uB9DE\uC544\uC694, \uB9CE\uC740 \uB178\uB825\uC774 \uD544\uC694\uD574\uC694.\nA: \uACB0\uCF54 \uD3EC\uAE30\uD558\uC9C0 \uC54A\uC744 \uAC70\uC608\uC694.\nB: \uADF8 \uC758\uC9C0\uAC00 \uC911\uC694\uD574\uC694.",
     exampleSrc:"A: This work is by no means easy.\nB: That is right, it requires a lot of effort.\nA: I will never give up.\nB: That willpower is important.",
     funFact:"결코 MUST be paired with a negative ending. Saying 결코 without a negative is grammatically wrong and sounds very unnatural."},

    {type:"teach", trg:"\uACE0\uC9D1", src:"stubbornness; insistence", pos:"noun", gender:null,
     note:"Sino-Korean: hard/solid (固) + hold/grasp (執).\nHolding firmly to one's position.",
     example:"A: \uADF8 \uC0AC\uB78C\uC740 \uACE0\uC9D1\uC774 \uC138\uC694.\nB: \uD55C\uBC88 \uACB0\uC815\uD558\uBA74 \uC548 \uBC14\uAFD4\uC694.\nA: \uACE0\uC9D1\uB3C4 \uB54C\uB85C\uB294 \uD544\uC694\uD574\uC694.\nB: \uD558\uC9C0\uB9CC \uC720\uC5F0\uC131\uB3C4 \uC911\uC694\uD558\uC8E0.",
     exampleSrc:"A: That person is very stubborn.\nB: Once they decide, they do not change.\nA: Stubbornness is sometimes necessary.\nB: But flexibility is also important.",
     funFact:"고집 can be positive (determination) or negative (obstinacy) depending on context. 고집불통 means impossibly stubborn."},

    {type:"mc",
     q:"\uACB0\uCF54 \uD3EC\uAE30\uD558\uC9C0 \uC54A\uC744 \uAC70\uC608\uC694. \uACB0\uCF54\uC758 \uB73B\uC740?",
     opts:["\uC808\uB300\uB85C","\uC544\uB9C8","\uBCF4\uD1B5","\uD56D\uC0C1"],
     ans:"\uC808\uB300\uB85C",
     hint:"This adverb means 'absolutely not' and always appears with negative verb endings."},

    {type:"teach", trg:"\uACE0\uC9D1\uD558\uB2E4", src:"to insist; to be stubborn about", pos:"verb", gender:null,
     note:"Verb form of 고집. To persist in one's stance.",
     example:"A: \uC790\uAE30 \uC758\uACAC\uB9CC \uACE0\uC9D1\uD558\uBA74 \uC548 \uB3FC\uC694.\nB: \uB2E4\uB978 \uC0AC\uB78C \uC758\uACAC\uB3C4 \uB4E4\uC5B4\uC57C \uD574\uC694.\nA: \uD611\uC0C1\uC5D0\uC11C\uB294 \uD2B9\uD788 \uADF8\uB798\uC694.\nB: \uC591\uBCF4\uAC00 \uD544\uC694\uD574\uC694.",
     exampleSrc:"A: You should not insist only on your own opinion.\nB: You need to listen to others' opinions too.\nA: Especially in negotiations.\nB: Compromise is necessary.",
     funFact:"고집하다 in formal debate is neutral, but in daily life it often carries a negative tone of being unreasonably stubborn."},

    {type:"teach", trg:"\uAC70\uBD80\uD558\uB2E4", src:"to refuse; to reject", pos:"verb", gender:null,
     note:"Sino-Korean: distance (拒) + deny (否) + do (하다).\nStronger than 거절하다.",
     example:"A: \uADF8 \uC81C\uC548\uC744 \uAC70\uBD80\uD588\uC5B4\uC694.\nB: \uC65C \uAC70\uBD80\uD588\uC5B4\uC694?\nA: \uC870\uAC74\uC774 \uBD88\uACF5\uD3C9\uD588\uC5B4\uC694.\nB: \uAC70\uBD80\uD560 \uAD8C\uB9AC\uAC00 \uC788\uC8E0.",
     exampleSrc:"A: I refused that proposal.\nB: Why did you refuse?\nA: The conditions were unfair.\nB: You have the right to refuse.",
     funFact:"거부 is stronger and more formal than 거절. 거부권 (veto power) uses this word. It implies principled opposition."},

    {type:"teach", trg:"\uAC70\uC808\uD558\uB2E4", src:"to decline; to turn down", pos:"verb", gender:null,
     note:"Sino-Korean: distance (拒) + cut (絶) + do (하다).\nPoliter than 거부하다.",
     example:"A: \uCD08\uB300\uB97C \uAC70\uC808\uD574\uC57C \uD560 \uAC83 \uAC19\uC544\uC694.\nB: \uC65C\uC694?\nA: \uADF8\uB0A0 \uC120\uC57D\uC774 \uC788\uC5B4\uC694.\nB: \uC815\uC911\uD558\uAC8C \uAC70\uC808\uD558\uC138\uC694.",
     exampleSrc:"A: I think I need to decline the invitation.\nB: Why?\nA: I have a prior engagement that day.\nB: Decline politely.",
     funFact:"Korean distinguishes 거절 (polite decline of offers/invitations) from 거부 (principled refusal). Using the wrong one changes the tone dramatically."},

    {type:"teach", trg:"\uAC16\uCD94\uB2E4", src:"to equip; to be furnished with", pos:"verb", gender:null,
     note:"Pure Korean verb. To prepare or possess necessary qualities.",
     example:"A: \uC774 \uD638\uD154\uC740 \uC2DC\uC124\uC744 \uC798 \uAC16\uCD94\uACE0 \uC788\uC5B4\uC694.\nB: \uC218\uC601\uC7A5\uB3C4 \uC788\uC5B4\uC694?\nA: \uB124, \uBAA8\uB4E0 \uC2DC\uC124\uC744 \uAC16\uCD94\uACE0 \uC788\uC5B4\uC694.\nB: \uC644\uBCBD\uD55C \uD638\uD154\uC774\uB124\uC694.",
     exampleSrc:"A: This hotel is well-equipped with facilities.\nB: Does it have a swimming pool?\nA: Yes, it has all the facilities.\nB: It is a perfect hotel.",
     funFact:"갖추다 implies thoroughness and preparedness. It is often used for qualifications: 자격을 갖추다 (to be qualified)."},

    {type:"teach", trg:"\uAC10\uD788", src:"daringly; how dare", pos:"adv", gender:null,
     note:"Pure Korean adverb. Used with negatives for 'dare not' or alone for audacity.",
     example:"A: \uAC10\uD788 \uADF8\uB7F0 \uB9D0\uC744 \uD558\uB2E4\uB2C8!\nB: \uC8C4\uC1A1\uD569\uB2C8\uB2E4.\nA: \uAC10\uD788 \uB204\uAD6C\uC5D0\uAC8C \uADF8\uB7EC\uB294 \uAC70\uC608\uC694?\nB: \uC815\uB9D0 \uC8C4\uC1A1\uD569\uB2C8\uB2E4.",
     exampleSrc:"A: How dare you say such a thing!\nB: I am sorry.\nA: Who do you dare say that to?\nB: I am truly sorry.",
     funFact:"감히 with a negative (감히 못 하다) means 'dare not.' Without a negative (감히 하다), it expresses audacity or boldness."},

    {type:"fb",
     s:"\uADF8 \uC81C\uC548\uC744 \uC815\uC911\uD558\uAC8C {1} \uD588\uC5B4\uC694.",
     a:["\uAC70\uC808"],
     opts:["\uAC70\uC808","\uACB0\uC2EC","\uACE0\uC9D1","\uAC01\uC624"],
     hint:"This word means to politely turn something down, like an invitation.",
     sSrc:"I politely {1} that proposal."},

    {type:"teach", trg:"\uACFC\uC5F0", src:"indeed; as expected; truly", pos:"adv", gender:null,
     note:"Sino-Korean: fruit/result (果) + so/like (然).\nExpresses confirmation or wondering.",
     example:"A: \uACFC\uC5F0 \uADF8 \uC2DD\uB2F9\uC774 \uB9DB\uC788\uC744\uAE4C\uC694?\nB: \uAC00 \uBD10\uC57C \uC54C\uC8E0.\nA: \uACFC\uC5F0 \uC18C\uBB38\uB300\uB85C \uB9DB\uC788\uC5C8\uC5B4\uC694!\nB: \uC5ED\uC2DC \uC720\uBA85\uD55C \uC774\uC720\uAC00 \uC788\uB124\uC694.",
     exampleSrc:"A: Will that restaurant indeed be delicious?\nB: We have to try it to know.\nA: It was indeed delicious as rumored!\nB: There is a reason it is famous.",
     funFact:"과연 can express genuine wonder ('I wonder if truly...') or satisfied confirmation ('indeed, as expected'). Context determines which."},

    {type:"teach", trg:"\uADF8\uB7F4\uB4EF\uD558\uB2E4", src:"to seem plausible; to look convincing", pos:"adj", gender:null,
     note:"Pure Korean: like that (그럴) + seeming (듯하다).\nDescribes surface plausibility.",
     example:"A: \uADF8 \uC774\uC57C\uAE30\uAC00 \uADF8\uB7F4\uB4EF\uD574 \uBCF4\uC5EC\uC694.\nB: \uD558\uC9C0\uB9CC \uC0AC\uC2E4\uC774 \uC544\uB2D0 \uC218 \uC788\uC5B4\uC694.\nA: \uADF8\uB7F4\uB4EF\uD55C \uAC70\uC9D3\uB9D0\uC774 \uC81C\uC77C \uC704\uD5D8\uD574\uC694.\nB: \uD655\uC778\uC774 \uD544\uC694\uD574\uC694.",
     exampleSrc:"A: That story seems plausible.\nB: But it might not be true.\nA: Plausible-looking lies are the most dangerous.\nB: Verification is necessary.",
     funFact:"그럴듯하다 carries a subtle hint of suspicion. It means something looks convincing but may not actually be true."},

    {type:"teach", trg:"\uADF8\uB9CC\uD558\uB2E4", src:"to be about that much; to be so-so", pos:"adj", gender:null,
     note:"Pure Korean: that extent (그만) + to be (하다).\nIndicates something is moderate or adequate.",
     example:"A: \uC2DC\uD5D8\uC774 \uC5B4\uB824\uC6E0\uC5B4\uC694?\nB: \uADF8\uB9CC\uD588\uC5B4\uC694, \uBAB4 \uD560 \uB9CC\uD588\uC5B4\uC694.\nA: \uD53C\uD574\uB294 \uADF8\uB9CC\uD574\uC694?\nB: \uB124, \uAC00\uBCBC\uC6B4 \uC0C1\uCC98\uC608\uC694.",
     exampleSrc:"A: Was the exam difficult?\nB: It was so-so, manageable.\nA: Is the damage minor?\nB: Yes, it is a light wound.",
     funFact:"그만하다 when used as a command (그만해!) means 'Stop it!' completely different from its adjective use meaning 'about that level.'"},

    {type:"teach", trg:"\uACE4\uB780\uD558\uB2E4", src:"to be difficult; to be in a bind", pos:"adj", gender:null,
     note:"Sino-Korean: distress (困) + difficulty (難) + be (하다).\nDescribes an awkward or tough situation.",
     example:"A: \uBD80\uD0C1\uC744 \uAC70\uC808\uD558\uAE30 \uACE4\uB780\uD574\uC694.\nB: \uC774\uD574\uD574\uC694, \uC5B4\uB824\uC6B4 \uC0C1\uD669\uC774\uB124\uC694.\nA: \uACE4\uB780\uD55C \uC9C8\uBB38\uC744 \uBC1B\uC558\uC5B4\uC694.\nB: \uC194\uC9C1\uD558\uAC8C \uB300\uB2F5\uD558\uC138\uC694.",
     exampleSrc:"A: It is difficult to refuse the request.\nB: I understand, it is a tough situation.\nA: I was asked a difficult question.\nB: Answer honestly.",
     funFact:"곤란하다 implies social awkwardness more than pure difficulty. Being in a 곤란한 상황 means being put in an uncomfortable spot."},

    {type:"teach", trg:"\uACAC\uD574", src:"opinion; view; perspective", pos:"noun", gender:null,
     note:"Sino-Korean: see (見) + explanation (解).\nA formally held opinion or interpretation.",
     example:"A: \uC774 \uBB38\uC81C\uC5D0 \uB300\uD55C \uACAC\uD574\uAC00 \uB2E4\uC591\uD574\uC694.\nB: \uC804\uBB38\uAC00\uB4E4\uC758 \uACAC\uD574\uB97C \uB4E4\uC5B4 \uBCF4\uC138\uC694.\nA: \uAC01\uC790\uC758 \uACAC\uD574\uB97C \uC874\uC911\uD574\uC57C \uD574\uC694.\nB: \uB2E4\uC591\uD55C \uACAC\uD574\uAC00 \uD1A0\uB860\uC744 \uD48D\uBD80\uD558\uAC8C \uD574\uC694.",
     exampleSrc:"A: Opinions on this issue are diverse.\nB: Let us hear the experts' views.\nA: We should respect each person's perspective.\nB: Diverse opinions enrich the discussion.",
     funFact:"견해 is more formal than 의견 (opinion). It is preferred in academic writing and formal debates. TOPIK essays use it frequently."},

    {type:"teach", trg:"\uAD00\uC810", src:"viewpoint; standpoint", pos:"noun", gender:null,
     note:"Sino-Korean: observe (觀) + point (點).\nThe angle from which you see things.",
     example:"A: \uB2E4\uB978 \uAD00\uC810\uC5D0\uC11C \uC0DD\uAC01\uD574 \uBCF4\uC138\uC694.\nB: \uC0C1\uB300\uBC29\uC758 \uAD00\uC810\uC5D0\uC11C\uC694?\nA: \uB124, \uB2E4\uC591\uD55C \uAD00\uC810\uC774 \uC911\uC694\uD574\uC694.\nB: \uC54C\uACA0\uC5B4\uC694, \uB178\uB825\uD574 \uBCFC\uAC8C\uC694.",
     exampleSrc:"A: Try thinking from a different viewpoint.\nB: From the other person's standpoint?\nA: Yes, diverse viewpoints are important.\nB: I understand, I will try.",
     funFact:"관점 is a key word in Korean academic writing. The phrase 다양한 관점에서 (from diverse viewpoints) appears in nearly every TOPIK essay prompt."},

    {type:"teach", trg:"\uAD00\uB150", src:"notion; concept; idea", pos:"noun", gender:null,
     note:"Sino-Korean: observe (觀) + think (念).\nAbstract mental concept or preconception.",
     example:"A: \uC131\uACF5\uC5D0 \uB300\uD55C \uAD00\uB150\uC774 \uBCC0\uD588\uC5B4\uC694.\nB: \uC5B4\uB5BB\uAC8C \uBCC0\uD588\uC5B4\uC694?\nA: \uB3C8\uBCF4\uB2E4 \uD589\uBCF5\uC774 \uC131\uACF5\uC774\uB77C\uACE0 \uC0DD\uAC01\uD574\uC694.\nB: \uC88B\uC740 \uAD00\uB150\uC774\uB124\uC694.",
     exampleSrc:"A: My notion of success has changed.\nB: How has it changed?\nA: I think happiness, not money, is success.\nB: That is a good concept.",
     funFact:"관념 often carries a slightly negative nuance of 'fixed idea' or 'preconception': 고정관념 (fixed notion/stereotype) is a very common compound."},

    {type:"teach", trg:"\uAC1D\uAD00\uC801", src:"objective", pos:"noun", gender:null,
     note:"Sino-Korean: guest/outside (客) + observe (觀) + target (的).\nLiterally 'from an outsider's view.'",
     example:"A: \uAC1D\uAD00\uC801\uC73C\uB85C \uD310\uB2E8\uD574\uC57C \uD574\uC694.\nB: \uAC10\uC815\uC5D0 \uD718\uB450\uB974\uBA74 \uC548 \uB3FC\uC694.\nA: \uAC1D\uAD00\uC801\uC778 \uC790\uB8CC\uAC00 \uD544\uC694\uD574\uC694.\nB: \uD1B5\uACC4\uB97C \uD655\uC778\uD569\uC2DC\uB2E4.",
     exampleSrc:"A: You must judge objectively.\nB: You should not be swayed by emotions.\nA: Objective data is needed.\nB: Let us check the statistics.",
     funFact:"객관적 is the opposite of 주관적 (subjective). Korean academic writing strongly emphasizes 객관적 analysis."},

    {type:"teach", trg:"\uAD81\uADF9\uC801", src:"ultimate; fundamental", pos:"noun", gender:null,
     note:"Sino-Korean: ultimate (窮) + extreme (極) + target (的).\nThe final, most fundamental level.",
     example:"A: \uAD81\uADF9\uC801\uC778 \uBAA9\uD45C\uAC00 \uBB50\uC608\uC694?\nB: \uBAA8\uB4E0 \uC0AC\uB78C\uC758 \uD589\uBCF5\uC774\uC5D0\uC694.\nA: \uAD81\uADF9\uC801\uC73C\uB85C \uBB34\uC5C7\uC744 \uC774\uB8E8\uACE0 \uC2F6\uC5B4\uC694?\nB: \uC0AC\uD68C\uC5D0 \uAE30\uC5EC\uD558\uACE0 \uC2F6\uC5B4\uC694.",
     exampleSrc:"A: What is the ultimate goal?\nB: The happiness of all people.\nA: What do you ultimately want to achieve?\nB: I want to contribute to society.",
     funFact:"궁극적 shares its first hanja 窮 with 궁핍 (poverty/destitution). The idea is reaching the very extreme or end of something."},

    {type:"teach", trg:"\uAC11\uC791\uC2A4\uB7FD\uB2E4", src:"to be sudden; unexpected", pos:"adj", gender:null,
     note:"Pure Korean + suffix: sudden (갑작) + -스럽다 (quality of).",
     example:"A: \uAC11\uC791\uC2A4\uB7EC\uC6B4 \uC18C\uC2DD\uC744 \uB4E4\uC5C8\uC5B4\uC694.\nB: \uBB34\uC2A8 \uC18C\uC2DD\uC774\uC5D0\uC694?\nA: \uD68C\uC0AC\uAC00 \uAC11\uC791\uC2A4\uB7FD\uAC8C \uBB38\uC744 \uB2EB\uC558\uC5B4\uC694.\nB: \uC815\uB9D0 \uAC11\uC791\uC2A4\uB7EC\uC6B4 \uC77C\uC774\uB124\uC694.",
     exampleSrc:"A: I heard sudden news.\nB: What news?\nA: The company suddenly closed.\nB: That is truly unexpected.",
     funFact:"갑작스럽다 is the -스럽다 form of 갑작. The shorter 갑자기 (suddenly, adverb) is one of the most common Korean adverbs."},

    {type:"mc",
     q:"\uB2E4\uC591\uD55C \uAD00\uC810\uC5D0\uC11C \uBB38\uC81C\uB97C \uBD10\uC57C \uD569\uB2C8\uB2E4. \uAD00\uC810\uC758 \uB73B\uC740?",
     opts:["\uBCF4\uB294 \uAC01\uB3C4","\uC2B5\uAD00","\uC5F0\uC2B5","\uBB38\uC81C"],
     ans:"\uBCF4\uB294 \uAC01\uB3C4",
     hint:"This Sino-Korean word combines 'observe' and 'point,' referring to the angle from which you examine something."},

    {type:"match", pairs:[
      {trg:"\uAC01\uC624", src:"resolve"},
      {trg:"\uACB0\uC2EC", src:"determination"},
      {trg:"\uACE0\uC9D1", src:"stubbornness"},
      {trg:"\uACAC\uD574", src:"opinion/view"},
      {trg:"\uAD00\uC810", src:"viewpoint"},
      {trg:"\uAD00\uB150", src:"notion/concept"}
    ]}
  ]
};
export default LESSON_4;
