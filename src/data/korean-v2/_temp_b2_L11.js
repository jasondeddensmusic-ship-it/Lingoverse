// B2 Lesson 11: Roots & Foundations
// Words: 가치, 개성, 근본, 근본적, 근원, 기원, 기원전, 기초적, 기초하다, 근거하다,
//        결과적, 공통, 공통되다, 공통적, 공통점, 관계되다, 관계없이, 관찰, 검토, 관심사

const LESSON_11 = {
  id:"kov2_b2_l11", title:"뿌리와 기초", icon:"\uD83C\uDF31", xp:15, board:true,
  steps:[
    {type:"intro", title:"Roots & Foundations",
     desc:"Learn vocabulary for abstract concepts of origin, foundation, commonality, and analysis. These words are essential for TOPIK II essay writing and academic reading comprehension.",
     goals:["Learn 20 abstract foundation vocabulary words","Master Sino-Korean compounds for academic discourse","Use analytical vocabulary in formal contexts"]},

    {type:"teach", trg:"\uAC00\uCE58", src:"value; worth", pos:"noun", gender:null,
     note:"Sino-Korean: price/value (價) + value (値).\nBoth material and philosophical worth.",
     example:"A: \uC774 \uADF8\uB9BC\uC758 \uAC00\uCE58\uAC00 \uC5BC\uB9C8\uC608\uC694?\nB: \uC608\uC220\uC801 \uAC00\uCE58\uB294 \uAE08\uC561\uC73C\uB85C \uCE21\uC815\uD560 \uC218 \uC5C6\uC5B4\uC694.\nA: \uC778\uC0DD\uC5D0\uC11C \uAC00\uC7A5 \uC911\uC694\uD55C \uAC00\uCE58\uB294 \uBB50\uC608\uC694?\nB: \uAC74\uAC15\uACFC \uAC00\uC871\uC774\uC5D0\uC694.",
     exampleSrc:"A: What is the value of this painting?\nB: Artistic value cannot be measured in money.\nA: What is the most important value in life?\nB: Health and family.",
     funFact:"가치관 (values/worldview) is a common compound. Korean TOPIK essays often ask about 가치 and how it shapes society."},

    {type:"teach", trg:"\uAC1C\uC131", src:"individuality; personality; uniqueness", pos:"noun", gender:null,
     note:"Sino-Korean: individual (個) + nature (性).\nWhat makes someone or something unique.",
     example:"A: \uAC1C\uC131\uC774 \uAC15\uD55C \uC0AC\uB78C\uC774\uB124\uC694.\nB: \uC790\uAE30\uB9CC\uC758 \uC2A4\uD0C0\uC77C\uC774 \uC788\uC5B4\uC694.\nA: \uAC1C\uC131\uC744 \uC874\uC911\uD558\uB294 \uC0AC\uD68C\uAC00 \uC88B\uC544\uC694.\nB: \uB2E4\uC591\uC131\uC774 \uC911\uC694\uD558\uC8E0.",
     exampleSrc:"A: That person has strong individuality.\nB: They have their own style.\nA: A society that respects individuality is good.\nB: Diversity is important.",
     funFact:"개성 is also the name of Kaesong (개성시), the ancient Korean capital. The city name means 'opening nature/character.'"},

    {type:"teach", trg:"\uADFC\uBCF8", src:"root; foundation; basis", pos:"noun", gender:null,
     note:"Sino-Korean: root (根) + origin (本).\nThe most fundamental basis of something.",
     example:"A: \uBB38\uC81C\uC758 \uADFC\uBCF8\uC744 \uCC3E\uC544\uC57C \uD574\uC694.\nB: \uADFC\uBCF8 \uC6D0\uC778\uC774 \uBB50\uC608\uC694?\nA: \uADFC\uBCF8\uBD80\uD130 \uBC14\uAFD4\uC57C \uD574\uC694.\nB: \uADFC\uBCF8\uC801\uC778 \uBCC0\uD654\uAC00 \uD544\uC694\uD574\uC694.",
     exampleSrc:"A: We need to find the root of the problem.\nB: What is the root cause?\nA: We need to change from the foundation.\nB: Fundamental change is necessary.",
     funFact:"근본 shares 根 (root) with 뿌리 (root, pure Korean). The Sino-Korean version is used for abstract/philosophical contexts."},

    {type:"teach", trg:"\uADFC\uBCF8\uC801", src:"fundamental; basic; radical", pos:"noun", gender:null,
     note:"근본 + -적 (的). Used as an adjective with -이다/-인.",
     example:"A: \uADFC\uBCF8\uC801\uC778 \uD574\uACB0\uCC45\uC774 \uD544\uC694\uD574\uC694.\nB: \uC784\uC2DC\uC801\uC778 \uD574\uACB0\uCC45\uC740 \uC548 \uB3FC\uC694?\nA: \uADFC\uBCF8\uC801\uC73C\uB85C \uC811\uADFC\uD574\uC57C \uD574\uC694.\nB: \uB9DE\uC544\uC694, \uADFC\uBCF8\uC801\uC778 \uBCC0\uD654\uB97C \uD569\uC2DC\uB2E4.",
     exampleSrc:"A: A fundamental solution is needed.\nB: Will a temporary solution not work?\nA: We need to approach it fundamentally.\nB: You are right, let us make fundamental changes.",
     funFact:"근본적 is one of the most frequent -적 words in TOPIK essays. It signals deep, structural thinking rather than surface-level fixes."},

    {type:"teach", trg:"\uADFC\uC6D0", src:"source; origin; wellspring", pos:"noun", gender:null,
     note:"Sino-Korean: root (根) + source (源).\nThe ultimate source of something.",
     example:"A: \uD589\uBCF5\uC758 \uADFC\uC6D0\uC740 \uBB50\uC77C\uAE4C\uC694?\nB: \uC0AC\uB78C\uB9C8\uB2E4 \uB2E4\uB974\uC8E0.\nA: \uBB38\uC81C\uC758 \uADFC\uC6D0\uC744 \uCC3E\uC544\uC57C \uD574\uC694.\nB: \uADFC\uC6D0\uBD80\uD130 \uD574\uACB0\uD569\uC2DC\uB2E4.",
     exampleSrc:"A: What is the source of happiness?\nB: It differs for everyone.\nA: We need to find the source of the problem.\nB: Let us solve it from the source.",
     funFact:"근원 vs 근본: 근원 emphasizes the origin/spring (where something flows from), while 근본 emphasizes the foundation (what something stands on)."},

    {type:"mc",
     q:"\uBB38\uC81C\uC758 \uAC00\uC7A5 \uAE4A\uC740 \uC6D0\uC778\uC744 \uBB50\uB77C\uACE0 \uD574\uC694?",
     opts:["\uADFC\uC6D0","\uACF5\uD1B5\uC810","\uAD00\uC2EC\uC0AC","\uAC00\uCE58"],
     ans:"\uADFC\uC6D0",
     hint:"This Sino-Korean word combines 'root' and 'source' to mean the ultimate wellspring of something."},

    {type:"teach", trg:"\uAE30\uC6D0", src:"origin; genesis; beginning", pos:"noun", gender:null,
     note:"Sino-Korean: arise (起) + source (源).\nThe historical starting point of something.",
     example:"A: \uD55C\uAE00\uC758 \uAE30\uC6D0\uC744 \uC544\uC138\uC694?\nB: \uC138\uC885\uB300\uC655\uC774 \uCC3D\uC81C\uD558\uC168\uC5B4\uC694.\nA: \uC624\uB9BC\uD53D\uC758 \uAE30\uC6D0\uC740 \uADF8\uB9AC\uC2A4\uC608\uC694.\nB: \uAE30\uC6D0\uC804 776\uB144\uC5D0 \uC2DC\uC791\uB410\uC5B4\uC694.",
     exampleSrc:"A: Do you know the origin of Hangeul?\nB: King Sejong created it.\nA: The origin of the Olympics is Greece.\nB: It started in 776 BC.",
     funFact:"기원 vs 근원: 기원 is specifically about historical/temporal origins, while 근원 is about the fundamental source or cause."},

    {type:"teach", trg:"\uAE30\uC6D0\uC804", src:"BC (Before Christ); BCE", pos:"noun", gender:null,
     note:"Sino-Korean: origin (起源) + before (前).\nThe era before the common era.",
     example:"A: \uACE0\uC870\uC120\uC740 \uAE30\uC6D0\uC804 2333\uB144\uC5D0 \uC138\uC6CC\uC84C\uC5B4\uC694.\nB: \uC544\uC8FC \uC624\uB798\uB41C \uC5ED\uC0AC\uB124\uC694.\nA: \uAE30\uC6D0\uC804 \uBB38\uBA85\uC744 \uACF5\uBD80\uD558\uACE0 \uC788\uC5B4\uC694.\nB: \uACE0\uB300\uC0AC\uAC00 \uD765\uBBF8\uB85C\uC6CC\uC694?",
     exampleSrc:"A: Ancient Joseon was founded in 2333 BC.\nB: That is very ancient history.\nA: I am studying civilizations from BC.\nB: Is ancient history interesting?",
     funFact:"기원전/기원후 (BC/AD) is the standard Korean dating system for historical texts. The Korean calendar also counts from Dangun's founding (단기)."},

    {type:"teach", trg:"\uAE30\uCD08\uC801", src:"basic; fundamental; elementary", pos:"noun", gender:null,
     note:"Sino-Korean: foundation (基) + beginning (礎) + target (的).",
     example:"A: \uAE30\uCD08\uC801\uC778 \uD55C\uAD6D\uC5B4\uBD80\uD130 \uBC30\uC6B0\uACE0 \uC2F6\uC5B4\uC694.\nB: \uAE30\uCD08\uC801\uC778 \uBB38\uBC95\uBD80\uD130 \uC2DC\uC791\uD558\uC138\uC694.\nA: \uAE30\uCD08\uC801\uC778 \uAC83\uC774 \uAC00\uC7A5 \uC911\uC694\uD574\uC694.\nB: \uB9DE\uC544\uC694, \uAE30\uCD08\uAC00 \uD2BC\uD2BC\uD574\uC57C \uD574\uC694.",
     exampleSrc:"A: I want to learn from basic Korean.\nB: Start with basic grammar.\nA: The basics are the most important.\nB: That is right, the foundation must be solid.",
     funFact:"기초적 vs 기본적: 기초적 (foundational/elementary) implies building blocks, while 기본적 (basic/standard) implies what is minimally expected."},

    {type:"teach", trg:"\uAE30\uCD08\uD558\uB2E4", src:"to be based on; to be founded on", pos:"verb", gender:null,
     note:"Sino-Korean: foundation (基礎) + do (하다).\nUsed with -에: X에 기초하다.",
     example:"A: \uC774 \uC5F0\uAD6C\uB294 \uC2E4\uD5D8\uC5D0 \uAE30\uCD08\uD558\uACE0 \uC788\uC5B4\uC694.\nB: \uC2E0\uB8B0\uD560 \uC218 \uC788\uB294 \uC5F0\uAD6C\uB124\uC694.\nA: \uC0AC\uC2E4\uC5D0 \uAE30\uCD08\uD55C \uD310\uB2E8\uC774 \uC911\uC694\uD574\uC694.\nB: \uAC10\uC815\uC774 \uC544\uB2CC \uC0AC\uC2E4\uC5D0 \uAE30\uCD08\uD574\uC57C \uC8E0.",
     exampleSrc:"A: This research is based on experiments.\nB: It is a reliable study.\nA: Judgments based on facts are important.\nB: We should base decisions on facts, not emotions.",
     funFact:"기초하다 and 근거하다 are near-synonyms. 기초하다 (based on foundations) is broader, while 근거하다 (based on evidence) is more specific."},

    {type:"teach", trg:"\uADFC\uAC70\uD558\uB2E4", src:"to be based on (evidence)", pos:"verb", gender:null,
     note:"Sino-Korean: root (根) + basis (據) + do (하다).\nBased on evidence or grounds.",
     example:"A: \uBB34\uC5C7\uC5D0 \uADFC\uAC70\uD574\uC11C \uADF8\uB807\uAC8C \uB9D0\uD558\uC138\uC694?\nB: \uD1B5\uACC4 \uC790\uB8CC\uC5D0 \uADFC\uAC70\uD558\uACE0 \uC788\uC5B4\uC694.\nA: \uADFC\uAC70\uAC00 \uC788\uC5B4\uC57C \uC124\uB4DD\uB825\uC774 \uC788\uC5B4\uC694.\nB: \uB9DE\uC544\uC694, \uB370\uC774\uD130\uAC00 \uC911\uC694\uD574\uC694.",
     exampleSrc:"A: What do you base that statement on?\nB: I am basing it on statistical data.\nA: Having evidence makes it persuasive.\nB: That is right, data is important.",
     funFact:"근거 (evidence/grounds) is a critical legal and academic term. 법적 근거 (legal basis) determines whether actions are lawful."},

    {type:"fb",
     s:"\uC774 \uC5F0\uAD6C\uB294 \uC2E4\uD5D8 \uB370\uC774\uD130\uC5D0 {1}\uD558\uACE0 \uC788\uC5B4\uC694.",
     a:["\uAE30\uCD08"],
     opts:["\uAE30\uCD08","\uACF5\uD1B5","\uAD00\uCC30","\uAC80\uD1A0"],
     hint:"This verb means to be founded on or built upon something as a base.",
     sSrc:"This research is {1} on experimental data."},

    {type:"teach", trg:"\uACB0\uACFC\uC801", src:"consequential; as a result", pos:"noun", gender:null,
     note:"Sino-Korean: result (結果) + target (的).\nDescribing outcomes or consequences.",
     example:"A: \uACB0\uACFC\uC801\uC73C\uB85C \uC131\uACF5\uD588\uC5B4\uC694.\nB: \uACFC\uC815\uC740 \uD798\uB4E4\uC5C8\uC9C0\uB9CC\uC694.\nA: \uACB0\uACFC\uC801\uC73C\uB85C \uC88B\uC740 \uACBD\uD5D8\uC774\uC5C8\uC5B4\uC694.\nB: \uACB0\uACFC\uAC00 \uC88B\uC73C\uBA74 \uB410\uC8E0.",
     exampleSrc:"A: As a result, it was successful.\nB: The process was difficult though.\nA: Consequently, it was a good experience.\nB: If the result is good, that is enough.",
     funFact:"결과적으로 (consequently) is a staple transition word in Korean essays. It signals a conclusion drawn from preceding arguments."},

    {type:"teach", trg:"\uACF5\uD1B5", src:"commonality; being shared", pos:"noun", gender:null,
     note:"Sino-Korean: together (共) + connect (通).\nWhat things share in common.",
     example:"A: \uB450 \uBB38\uD654\uC758 \uACF5\uD1B5\uC810\uC774 \uB9CE\uC544\uC694.\nB: \uC5B4\uB5A4 \uACF5\uD1B5\uC810\uC774 \uC788\uC5B4\uC694?\nA: \uACF5\uD1B5\uC801\uC73C\uB85C \uAC00\uC871\uC744 \uC911\uC2DC\uD574\uC694.\nB: \uACF5\uD1B5\uB41C \uAC00\uCE58\uAD00\uC774\uB124\uC694.",
     exampleSrc:"A: The two cultures have many commonalities.\nB: What commonalities are there?\nA: Both commonly value family.\nB: That is a shared set of values.",
     funFact:"공통 spawns many compounds: 공통점 (common point), 공통적 (common/shared), 공통되다 (to be common), 공통어 (common language)."},

    {type:"teach", trg:"\uACF5\uD1B5\uB418\uB2E4", src:"to be common; to be shared", pos:"verb", gender:null,
     note:"Passive form: commonality exists between things.",
     example:"A: \uC774 \uD2B9\uC9D5\uC740 \uBAA8\uB4E0 \uBB38\uD654\uC5D0 \uACF5\uD1B5\uB3FC\uC694.\nB: \uBCF4\uD3B8\uC801\uC778 \uD2B9\uC9D5\uC774\uB124\uC694.\nA: \uC778\uAC04\uC758 \uAC10\uC815\uC740 \uACF5\uD1B5\uB3FC\uC694.\nB: \uBB38\uD654\uB97C \uCD08\uC6D4\uD558\uC8E0.",
     exampleSrc:"A: This trait is common to all cultures.\nB: It is a universal trait.\nA: Human emotions are shared universally.\nB: They transcend culture.",
     funFact:"공통되다 is a formal way to say things share a quality. Academic papers use it when identifying universal patterns."},

    {type:"teach", trg:"\uACF5\uD1B5\uC801", src:"common; shared; mutual", pos:"noun", gender:null,
     note:"공통 + -적 (的). Used as an adjective.",
     example:"A: \uACF5\uD1B5\uC801\uC778 \uBAA9\uD45C\uAC00 \uC788\uC5B4\uC694.\nB: \uACF5\uD1B5\uC801\uC73C\uB85C \uD658\uACBD \uBCF4\uD638\uB97C \uC6D0\uD574\uC694.\nA: \uACF5\uD1B5\uC801\uC778 \uAD00\uC2EC\uC0AC\uB97C \uCC3E\uC558\uC5B4\uC694.\nB: \uD611\uB825\uC758 \uAE30\uBC18\uC774 \uB418\uC8E0.",
     exampleSrc:"A: We have a common goal.\nB: We commonly want to protect the environment.\nA: We found a shared interest.\nB: It becomes the basis for cooperation.",
     funFact:"공통적 in TOPIK essays helps structure compare-contrast paragraphs: 공통적인 특징 (common features) vs 다른 점 (differences)."},

    {type:"teach", trg:"\uACF5\uD1B5\uC810", src:"common point; similarity", pos:"noun", gender:null,
     note:"Sino-Korean: commonality (共通) + point (點).",
     example:"A: \uB450 \uC0AC\uB78C\uC758 \uACF5\uD1B5\uC810\uC774 \uBB50\uC608\uC694?\nB: \uB458 \uB2E4 \uC74C\uC545\uC744 \uC88B\uC544\uD574\uC694.\nA: \uACF5\uD1B5\uC810\uC774 \uB9CE\uC73C\uBA74 \uC88B\uC544\uC694.\nB: \uB9DE\uC544\uC694, \uACF5\uD1B5\uC810\uC774 \uC6B0\uC815\uC758 \uAE30\uCD08\uC8E0.",
     exampleSrc:"A: What are the common points between the two?\nB: They both like music.\nA: Having many common points is good.\nB: That is right, common points are the basis of friendship.",
     funFact:"공통점 and 차이점 (differences) are the standard essay pair for comparison. TOPIK writing prompts love asking about these."},

    {type:"teach", trg:"\uAD00\uACC4\uB418\uB2E4", src:"to be related; to be connected to", pos:"verb", gender:null,
     note:"Sino-Korean: relate (關) + tie (係) + become (되다).\nPassive: being connected.",
     example:"A: \uC774 \uBB38\uC81C\uB294 \uD658\uACBD\uACFC \uAD00\uACC4\uB3FC\uC694.\nB: \uACBD\uC81C\uC640\uB3C4 \uAD00\uACC4\uB3FC\uC694?\nA: \uBAA8\uB4E0 \uBB38\uC81C\uB294 \uC11C\uB85C \uAD00\uACC4\uB3FC\uC694.\nB: \uC885\uD569\uC801\uC73C\uB85C \uBD10\uC57C \uD574\uC694.",
     exampleSrc:"A: This issue is related to the environment.\nB: Is it related to the economy too?\nA: All problems are interconnected.\nB: We need to look at it comprehensively.",
     funFact:"관계되다 is the formal passive. In conversation, 관련되다 (to be relevant/related) is used more frequently."},

    {type:"teach", trg:"\uAD00\uACC4\uC5C6\uC774", src:"regardless of; irrespective of", pos:"adv", gender:null,
     note:"Korean compound: relationship (관계) + without (없이).\nIgnoring the connection to something.",
     example:"A: \uB098\uC774\uC5D0 \uAD00\uACC4\uC5C6\uC774 \uB204\uAD6C\uB098 \uCC38\uC5EC\uD560 \uC218 \uC788\uC5B4\uC694.\nB: \uACBD\uD5D8\uC5D0 \uAD00\uACC4\uC5C6\uC774\uC694?\nA: \uB124, \uAD00\uACC4\uC5C6\uC774 \uD658\uC601\uD569\uB2C8\uB2E4.\nB: \uC5F4\uB9B0 \uD504\uB85C\uADF8\uB7A8\uC774\uB124\uC694.",
     exampleSrc:"A: Anyone can participate regardless of age.\nB: Regardless of experience?\nA: Yes, everyone is welcome regardless.\nB: It is an open program.",
     funFact:"관계없이 is a versatile adverb: 날씨에 관계없이 (regardless of weather), 성별에 관계없이 (regardless of gender)."},

    {type:"teach", trg:"\uAD00\uCC30", src:"observation; watching closely", pos:"noun", gender:null,
     note:"Sino-Korean: observe (觀) + examine (察).\nDeliberate, careful watching.",
     example:"A: \uC790\uC5F0 \uAD00\uCC30\uC744 \uC88B\uC544\uD574\uC694.\nB: \uBB34\uC5C7\uC744 \uAD00\uCC30\uD574\uC694?\nA: \uC0C8\uB4E4\uC758 \uD589\uB3D9\uC744 \uAD00\uCC30\uD574\uC694.\nA: \uAD00\uCC30\uB825\uC774 \uB6F0\uC5B4\uB098\uB124\uC694.",
     exampleSrc:"A: I like nature observation.\nB: What do you observe?\nA: I observe the behavior of birds.\nA: You have excellent observation skills.",
     funFact:"관찰 is the foundation of the scientific method. 관찰력 (observational ability) is considered a key skill in Korean education."},

    {type:"teach", trg:"\uAC80\uD1A0", src:"review; examination; scrutiny", pos:"noun", gender:null,
     note:"Sino-Korean: examine (檢) + discuss (討).\nCareful review of documents or plans.",
     example:"A: \uACC4\uD68D\uC11C\uB97C \uAC80\uD1A0\uD574 \uC8FC\uC138\uC694.\nB: \uB0B4\uC77C\uAE4C\uC9C0 \uAC80\uD1A0\uD558\uACA0\uC2B5\uB2C8\uB2E4.\nA: \uCCA0\uC800\uD55C \uAC80\uD1A0\uAC00 \uD544\uC694\uD574\uC694.\nB: \uBAA8\uB4E0 \uC138\uBD80 \uC0AC\uD56D\uC744 \uAC80\uD1A0\uD558\uACA0\uC2B5\uB2C8\uB2E4.",
     exampleSrc:"A: Please review the plan.\nB: I will review it by tomorrow.\nA: A thorough review is necessary.\nB: I will review all the details.",
     funFact:"검토 is essential in Korean business: 서류 검토 (document review), 법률 검토 (legal review). No major decision proceeds without 검토."},

    {type:"teach", trg:"\uAD00\uC2EC\uC0AC", src:"matter of interest; concern", pos:"noun", gender:null,
     note:"Sino-Korean: concern (關心) + matter (事).\nWhat someone is interested in or concerned about.",
     example:"A: \uC694\uC998 \uAD00\uC2EC\uC0AC\uAC00 \uBB50\uC608\uC694?\nB: \uD658\uACBD \uBB38\uC81C\uC5D0 \uAD00\uC2EC\uC774 \uC788\uC5B4\uC694.\nA: \uACF5\uD1B5 \uAD00\uC2EC\uC0AC\uAC00 \uC788\uB124\uC694.\nB: \uD568\uAED8 \uD65C\uB3D9\uD574 \uBCFC\uAE4C\uC694?",
     exampleSrc:"A: What are your interests these days?\nB: I am interested in environmental issues.\nA: We have a common interest.\nB: Shall we work on it together?",
     funFact:"관심사 is broader than 취미 (hobby). It covers intellectual interests, social concerns, and topics of curiosity."},

    {type:"mc",
     q:"\uB450 \uBB38\uD654\uAC00 \uAC19\uC740 \uC810\uC744 \uBB50\uB77C\uACE0 \uD574\uC694?",
     opts:["\uACF5\uD1B5\uC810","\uADFC\uBCF8","\uAC00\uCE58","\uAE30\uC6D0"],
     ans:"\uACF5\uD1B5\uC810",
     hint:"This compound combines 'shared/common' with 'point' to describe what two things share."},

    {type:"match", pairs:[
      {trg:"\uAC00\uCE58", src:"value"},
      {trg:"\uADFC\uBCF8", src:"foundation"},
      {trg:"\uADFC\uC6D0", src:"source"},
      {trg:"\uAE30\uC6D0", src:"origin"},
      {trg:"\uACF5\uD1B5\uC810", src:"common point"},
      {trg:"\uAD00\uCC30", src:"observation"}
    ]}
  ]
};
export default LESSON_11;
