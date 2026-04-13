// B2 Lesson 16: Classification & Organization
// Words: 구분, 구분되다, 구분하다, 구성, 구성되다, 구성하다, 결석, 결석하다, 경기장, 계층,
//        계획하다, 고교, 고궁, 고급스럽다, 고모부, 고무신, 고소하다, 고속, 고속도로, 고속버스

const LESSON_16 = {
  id:"kov2_b2_l16", title:"분류와 구성", icon:"\uD83D\uDDC2\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Classification & Organization",
     desc:"Learn vocabulary for categorizing, organizing, and structuring information, plus everyday nouns for places, people, and transportation. Common in TOPIK II analytical passages.",
     goals:["Learn 20 words for classification and daily life","Understand the 구 (區) compound family for categorizing","Use formal vocabulary for structure and composition"]},

    {type:"teach", trg:"\uAD6C\uBD84", src:"classification; division; categorization", pos:"noun", gender:null,
     note:"Sino-Korean: section (區) + divide (分).\nDividing things into categories.",
     example:"A: \uC4F0\uB808\uAE30 \uAD6C\uBD84\uC744 \uC798 \uD574\uC57C \uD574\uC694.\nB: \uC7AC\uD65C\uC6A9\uACFC \uC77C\uBC18 \uC4F0\uB808\uAE30\uB85C \uAD6C\uBD84\uD574\uC694.\nA: \uAD6C\uBD84\uC774 \uBCF5\uC7A1\uD574\uC694.\nB: \uC5F0\uC2B5\uD558\uBA74 \uC775\uC219\uD574\uC838\uC694.",
     exampleSrc:"A: You must sort trash properly.\nB: Divide into recyclable and general waste.\nA: The classification is complicated.\nB: You will get used to it with practice.",
     funFact:"Korea's trash sorting (쓰레기 분리수거) system is among the world's strictest. Wrong 구분 can result in fines."},

    {type:"teach", trg:"\uAD6C\uBD84\uB418\uB2E4", src:"to be classified; to be divided (passive)", pos:"verb", gender:null,
     note:"Passive form. Categories exist or emerge.",
     example:"A: \uC774 \uC81C\uD488\uC740 \uC138 \uB4F1\uAE09\uC73C\uB85C \uAD6C\uBD84\uB3FC\uC694.\nB: \uC5B4\uB5BB\uAC8C \uAD6C\uBD84\uB3FC\uC694?\nA: \uAC00\uACA9\uC5D0 \uB530\uB77C \uAD6C\uBD84\uB3FC\uC694.\nB: \uBA85\uD655\uD55C \uAD6C\uBD84\uC774\uB124\uC694.",
     exampleSrc:"A: This product is classified into three grades.\nB: How are they classified?\nA: They are divided by price.\nB: That is a clear classification.",
     funFact:"구분되다 vs 구별되다: 구분 (categorize into groups) vs 구별 (tell apart between similar items). Both use passive -되다."},

    {type:"teach", trg:"\uAD6C\uBD84\uD558\uB2E4", src:"to classify; to categorize; to divide", pos:"verb", gender:null,
     note:"Active form. You actively sort things.",
     example:"A: \uC790\uB8CC\uB97C \uC8FC\uC81C\uBCC4\uB85C \uAD6C\uBD84\uD588\uC5B4\uC694.\nB: \uCCB4\uACC4\uC801\uC73C\uB85C \uAD6C\uBD84\uD588\uB124\uC694.\nA: \uB2E8\uACC4\uBCC4\uB85C \uAD6C\uBD84\uD558\uC138\uC694.\nB: \uC54C\uACA0\uC5B4\uC694, \uC815\uB9AC\uD574 \uBCFC\uAC8C\uC694.",
     exampleSrc:"A: I classified the materials by topic.\nB: You organized them systematically.\nA: Classify them by stage.\nB: Okay, I will organize them.",
     funFact:"구분하다 is essential in Korean test-taking: 보기를 구분하다 (distinguish between options). TOPIK reading requires constant 구분."},

    {type:"teach", trg:"\uAD6C\uC131", src:"composition; formation; structure", pos:"noun", gender:null,
     note:"Sino-Korean: construct (構) + form (成).\nHow something is put together.",
     example:"A: \uD300 \uAD6C\uC131\uC774 \uC911\uC694\uD574\uC694.\nB: \uBA87 \uBA85\uC73C\uB85C \uAD6C\uC131\uD560\uAE4C\uC694?\nA: 5\uBA85\uC73C\uB85C \uAD6C\uC131\uD569\uC2DC\uB2E4.\nB: \uAD6C\uC131\uC6D0\uC740 \uB204\uAD6C\uC608\uC694?",
     exampleSrc:"A: Team composition is important.\nB: How many people should we form it with?\nA: Let us form a team of five.\nB: Who are the members?",
     funFact:"구성 is used widely: 가족 구성 (family composition), 팀 구성 (team formation), 프로그램 구성 (program structure)."},

    {type:"teach", trg:"\uAD6C\uC131\uB418\uB2E4", src:"to be composed of; to be formed (passive)", pos:"verb", gender:null,
     note:"Passive form. Structure exists.",
     example:"A: \uC774 \uCC45\uC740 10\uC7A5\uC73C\uB85C \uAD6C\uC131\uB3FC \uC788\uC5B4\uC694.\nB: \uB0B4\uC6A9\uC774 \uD48D\uBD80\uD558\uB124\uC694.\nA: \uC704\uC6D0\uD68C\uB294 7\uBA85\uC73C\uB85C \uAD6C\uC131\uB3FC \uC788\uC5B4\uC694.\nB: \uB2E4\uC591\uD55C \uC804\uBB38\uAC00\uB4E4\uC774\uC8E0.",
     exampleSrc:"A: This book is composed of 10 chapters.\nB: The content is rich.\nA: The committee is composed of 7 members.\nB: They are diverse experts.",
     funFact:"구성되다 with -으로: X으로 구성되다 (composed of X) is one of the most common patterns in Korean academic writing."},

    {type:"mc",
     q:"\uD300\uC744 5\uBA85\uC73C\uB85C \uB9CC\uB4E4\uC5C8\uC5B4\uC694. \uC774\uAC83\uC740?",
     opts:["\uAD6C\uC131\uD588\uB2E4","\uAD6C\uBD84\uD588\uB2E4","\uACB0\uC11D\uD588\uB2E4","\uACC4\uD68D\uD588\uB2E4"],
     ans:"\uAD6C\uC131\uD588\uB2E4",
     hint:"This verb means to form or put together a group or structure from individual parts."},

    {type:"teach", trg:"\uAD6C\uC131\uD558\uB2E4", src:"to compose; to form; to put together", pos:"verb", gender:null,
     note:"Active form. You actively create the structure.",
     example:"A: \uD504\uB85C\uADF8\uB7A8\uC744 \uAD6C\uC131\uD574\uC57C \uD574\uC694.\nB: \uC5B4\uB5BB\uAC8C \uAD6C\uC131\uD560\uAE4C\uC694?\nA: \uACBD\uD5D8 \uC704\uC8FC\uB85C \uAD6C\uC131\uD569\uC2DC\uB2E4.\nB: \uCC38\uC5EC\uC790\uC5D0\uAC8C \uB9DE\uCDB0 \uAD6C\uC131\uD558\uC138\uC694.",
     exampleSrc:"A: We need to compose the program.\nB: How should we structure it?\nA: Let us compose it around experiences.\nB: Tailor it to the participants.",
     funFact:"구성하다 is the creative counterpart to 구성되다. Writers 구성하다 stories; committees 구성하다 plans; directors 구성하다 scenes."},

    {type:"teach", trg:"\uACB0\uC11D", src:"absence (from school/work)", pos:"noun", gender:null,
     note:"Sino-Korean: lack (缺) + seat (席).\nLiterally 'empty seat.'",
     example:"A: \uACB0\uC11D\uC774 \uB9CE\uC73C\uBA74 \uC131\uC801\uC5D0 \uC601\uD5A5\uC774 \uC788\uC5B4\uC694.\nB: \uBAB8\uC774 \uC544\uD30C\uC11C \uACB0\uC11D\uD588\uC5B4\uC694.\nA: \uACB0\uC11D \uC0AC\uC720\uC11C\uB97C \uC81C\uCD9C\uD558\uC138\uC694.\nB: \uB0B4\uC77C \uC81C\uCD9C\uD560\uAC8C\uC694.",
     exampleSrc:"A: Too many absences affect grades.\nB: I was absent because I was sick.\nA: Submit an absence excuse note.\nB: I will submit it tomorrow.",
     funFact:"결석 vs 결근: 결석 is for school absences, 결근 is for work absences. Both use 缺 (lack/missing)."},

    {type:"teach", trg:"\uACB0\uC11D\uD558\uB2E4", src:"to be absent (from school)", pos:"verb", gender:null,
     note:"Verb form of 결석. Missing school/class.",
     example:"A: \uC5B4\uC81C \uC65C \uACB0\uC11D\uD588\uC5B4\uC694?\nB: \uBCD1\uC6D0\uC5D0 \uAC14\uC5B4\uC694.\nA: \uACB0\uC11D\uD558\uBA74 \uBCF4\uCDA9 \uC218\uC5C5\uC774 \uD544\uC694\uD574\uC694.\nB: \uCE5C\uAD6C\uC5D0\uAC8C \uB178\uD2B8\uB97C \uBE4C\uB824\uC57C\uACA0\uC5B4\uC694.",
     exampleSrc:"A: Why were you absent yesterday?\nB: I went to the hospital.\nA: If you are absent, supplementary classes are needed.\nB: I need to borrow notes from a friend.",
     funFact:"Korean schools track absences rigorously. 무단결석 (unexcused absence) can have serious consequences for students."},

    {type:"teach", trg:"\uACBD\uAE30\uC7A5", src:"stadium; sports arena", pos:"noun", gender:null,
     note:"Sino-Korean: compete (競) + skill (技) + place (場).",
     example:"A: \uACBD\uAE30\uC7A5\uC774 \uAD00\uAC1D\uC73C\uB85C \uAC00\uB4DD\uD574\uC694.\nB: \uC911\uC694\uD55C \uACBD\uAE30\uC778\uAC00 \uBD10\uC694.\nA: \uC0C8 \uACBD\uAE30\uC7A5\uC774 \uAC74\uC124\uB418\uC5C8\uC5B4\uC694.\nB: \uCD5C\uC2E0 \uC2DC\uC124\uC774 \uAC16\uCDB0\uC84C\uC5B4\uC694.",
     exampleSrc:"A: The stadium is full of spectators.\nB: It must be an important game.\nA: A new stadium has been built.\nB: It has the latest facilities.",
     funFact:"The 2002 World Cup Stadium and the 2018 Pyeongchang Olympics venues are Korea's most famous 경기장."},

    {type:"teach", trg:"\uACC4\uCE35", src:"social class; stratum; layer", pos:"noun", gender:null,
     note:"Sino-Korean: level (階) + layer (層).\nSocial hierarchy or economic level.",
     example:"A: \uC0AC\uD68C \uACC4\uCE35 \uAC04 \uACA9\uCC28\uAC00 \uCEE4\uC84C\uC5B4\uC694.\nB: \uACC4\uCE35 \uC774\uB3D9\uC774 \uC5B4\uB824\uC6CC\uC84C\uC8E0.\nA: \uBAA8\uB4E0 \uACC4\uCE35\uC744 \uC704\uD55C \uC815\uCC45\uC774 \uD544\uC694\uD574\uC694.\nB: \uD3EC\uC6A9\uC801 \uC0AC\uD68C\uAC00 \uC911\uC694\uD574\uC694.",
     exampleSrc:"A: The gap between social classes has widened.\nB: Social mobility has become harder.\nA: Policies for all classes are needed.\nB: An inclusive society is important.",
     funFact:"계층 is a key sociology term. Korean media frequently discusses 계층 이동 (class mobility) and 양극화 (polarization)."},

    {type:"fb",
     s:"\uC774 \uCC45\uC740 10\uC7A5\uC73C\uB85C {1} \uC788\uC5B4\uC694.",
     a:["\uAD6C\uC131\uB3FC"],
     opts:["\uAD6C\uC131\uB3FC","\uAD6C\uBD84\uB3FC","\uACB0\uC11D\uB3FC","\uACC4\uD68D\uB3FC"],
     hint:"This passive verb means to be composed of or made up of certain parts.",
     sSrc:"This book is {1} of 10 chapters."},

    {type:"teach", trg:"\uACC4\uD68D\uD558\uB2E4", src:"to plan; to schedule", pos:"verb", gender:null,
     note:"Sino-Korean: count (計) + draw (劃) + do (하다).",
     example:"A: \uC5EC\uD589\uC744 \uACC4\uD68D\uD558\uACE0 \uC788\uC5B4\uC694.\nB: \uC5B4\uB514\uB85C \uACC4\uD68D\uD558\uACE0 \uC788\uC5B4\uC694?\nA: \uC81C\uC8FC\uB3C4\uB85C \uACC4\uD68D\uD558\uACE0 \uC788\uC5B4\uC694.\nB: \uC88B\uC740 \uACC4\uD68D\uC774\uB124\uC694!",
     exampleSrc:"A: I am planning a trip.\nB: Where are you planning to go?\nA: I am planning to go to Jeju Island.\nB: What a great plan!",
     funFact:"계획하다 vs 계획을 세우다: both mean 'to make a plan,' but 세우다 (to establish) sounds more deliberate and formal."},

    {type:"teach", trg:"\uACE0\uAD50", src:"high school (abbreviation)", pos:"noun", gender:null,
     note:"Sino-Korean: high (高) + school (校).\nShort for 고등학교.",
     example:"A: \uACE0\uAD50 \uC2DC\uC808\uC774 \uADF8\uB9AC\uC6CC\uC694.\nB: \uC5B4\uB5A4 \uACE0\uAD50\uC5D0 \uB2E4\uB154\uC5B4\uC694?\nA: \uC11C\uC6B8\uC758 \uACE0\uAD50\uC5D0 \uB2E4\uB154\uC5B4\uC694.\nB: \uACE0\uAD50 \uCE5C\uAD6C\uB4E4\uACFC \uC5F0\uB77D\uD574\uC694?",
     exampleSrc:"A: I miss my high school days.\nB: Which high school did you attend?\nA: I attended a high school in Seoul.\nB: Do you keep in touch with high school friends?",
     funFact:"고교 is the common abbreviation for 고등학교. Korean media uses it regularly: 고교 야구 (high school baseball) is a popular spectator sport."},

    {type:"teach", trg:"\uACE0\uAD81", src:"ancient palace", pos:"noun", gender:null,
     note:"Sino-Korean: old (古) + palace (宮).\nHistorical royal palaces.",
     example:"A: \uC11C\uC6B8\uC5D0\uB294 \uACE0\uAD81\uC774 \uB9CE\uC544\uC694.\nB: \uACBD\uBCF5\uAD81\uC5D0 \uAC00 \uBD24\uC5B4\uC694?\nA: \uACE0\uAD81\uC5D0\uC11C \uD55C\uBCF5 \uCCB4\uD5D8\uC744 \uD560 \uC218 \uC788\uC5B4\uC694.\nB: \uACE0\uAD81 \uAD00\uAD11\uC774 \uC778\uAE30\uC8E0.",
     exampleSrc:"A: There are many ancient palaces in Seoul.\nB: Have you been to Gyeongbokgung?\nA: You can try wearing hanbok at the palace.\nB: Palace tourism is popular.",
     funFact:"Seoul has five major 고궁: Gyeongbokgung, Changdeokgung, Changgyeonggung, Deoksugung, and Gyeonghuigung. Free admission in hanbok!"},

    {type:"teach", trg:"\uACE0\uAE09\uC2A4\uB7FD\uB2E4", src:"to be luxurious; to look upscale", pos:"adj", gender:null,
     note:"Sino-Korean + suffix: high-grade (高級) + -스럽다 (quality of).",
     example:"A: \uC774 \uC2DD\uB2F9\uC774 \uACE0\uAE09\uC2A4\uB7EC\uC6CC\uC694.\nB: \uBD84\uC704\uAE30\uAC00 \uC88B\uB124\uC694.\nA: \uACE0\uAE09\uC2A4\uB7EC\uC6B4 \uD3EC\uC7A5\uC774\uC5D0\uC694.\nB: \uC120\uBB3C\uB85C \uC88B\uACA0\uB124\uC694.",
     exampleSrc:"A: This restaurant looks luxurious.\nB: The atmosphere is nice.\nA: It is luxurious packaging.\nB: It would make a nice gift.",
     funFact:"고급스럽다 emphasizes the appearance of luxury. 고급 (high-grade) alone is more factual; adding -스럽다 makes it about the feel."},

    {type:"teach", trg:"\uACE0\uC18D", src:"high speed", pos:"noun", gender:null,
     note:"Sino-Korean: high (高) + speed (速).",
     example:"A: \uACE0\uC18D \uC778\uD130\uB137\uC744 \uC0AC\uC6A9\uD574\uC694.\nB: \uC18D\uB3C4\uAC00 \uBE60\uB974\uB124\uC694.\nA: \uACE0\uC18D\uC73C\uB85C \uB2EC\uB9AC\uBA74 \uC704\uD5D8\uD574\uC694.\nB: \uC548\uC804 \uC6B4\uC804\uC774 \uC911\uC694\uD574\uC694.",
     exampleSrc:"A: I use high-speed internet.\nB: The speed is fast.\nA: Driving at high speed is dangerous.\nB: Safe driving is important.",
     funFact:"고속 is a prefix for many Korean infrastructure terms: 고속도로, 고속버스, 고속철도 (KTX high-speed rail)."},

    {type:"teach", trg:"\uACE0\uC18D\uB3C4\uB85C", src:"highway; expressway", pos:"noun", gender:null,
     note:"Sino-Korean: high (高) + speed (速) + road (道路).",
     example:"A: \uACE0\uC18D\uB3C4\uB85C\uAC00 \uB9C9\uD600\uC694.\nB: \uBA85\uC808\uC5D0\uB294 \uD56D\uC0C1 \uB9C9\uD600\uC694.\nA: \uACE0\uC18D\uB3C4\uB85C \uD734\uAC8C\uC18C\uC5D0 \uB4E4\uB800\uC5B4\uC694.\nB: \uC27C\uC5C8\uB2E4 \uAC00\uC138\uC694.",
     exampleSrc:"A: The highway is congested.\nB: It is always congested during holidays.\nA: I stopped at a highway rest area.\nB: Rest and then go.",
     funFact:"Korea's 고속도로 rest areas are famous for their food. 휴게소 음식 (rest stop food) is its own culinary category."},

    {type:"teach", trg:"\uACE0\uC18D\uBC84\uC2A4", src:"express bus; intercity bus", pos:"noun", gender:null,
     note:"Sino-Korean + English: high speed (高速) + bus.",
     example:"A: \uACE0\uC18D\uBC84\uC2A4\uB85C \uBD80\uC0B0\uC5D0 \uAC00\uC694.\nB: \uBA87 \uC2DC\uAC04 \uAC78\uB824\uC694?\nA: 4\uC2DC\uAC04 \uC815\uB3C4 \uAC78\uB824\uC694.\nB: KTX\uBCF4\uB2E4 \uC2F8\uC8E0.",
     exampleSrc:"A: I go to Busan by express bus.\nB: How long does it take?\nA: It takes about 4 hours.\nB: It is cheaper than the KTX.",
     funFact:"고속버스 terminals are in every major Korean city. 고속버스 is often chosen over trains for shorter intercity trips due to cost."},

    {type:"mc",
     q:"\uC11C\uC6B8\uC5D0\uC11C \uBCFC \uC218 \uC788\uB294 \uC624\uB798\uB41C \uC655\uAD81\uC744 \uBB50\uB77C\uACE0 \uD574\uC694?",
     opts:["\uACE0\uAD81","\uACE0\uAD50","\uACBD\uAE30\uC7A5","\uACE0\uC18D\uB3C4\uB85C"],
     ans:"\uACE0\uAD81",
     hint:"This Sino-Korean word combines 'old' and 'palace' to describe historic royal residences."},

    {type:"match", pairs:[
      {trg:"\uAD6C\uBD84", src:"classification"},
      {trg:"\uAD6C\uC131", src:"composition"},
      {trg:"\uACB0\uC11D", src:"absence"},
      {trg:"\uACC4\uCE35", src:"social class"},
      {trg:"\uACE0\uAD81", src:"ancient palace"},
      {trg:"\uACE0\uC18D\uB3C4\uB85C", src:"highway"}
    ]}
  ]
};
export default LESSON_16;
