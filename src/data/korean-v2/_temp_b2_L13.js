// B2 Lesson 13: Professional World
// Words: 기관, 기구, 기기, 기능, 기법, 기본적, 기술자, 기술하다, 기획, 기업,
//        기업인, 기여, 기성, 기성세대, 기혼, 기호, 기록, 기록되다, 기적, 기막히다

const LESSON_13 = {
  id:"kov2_b2_l13", title:"직업 세계", icon:"\uD83D\uDCBC", xp:15, board:true,
  steps:[
    {type:"intro", title:"The Professional World",
     desc:"Learn vocabulary for institutions, technology, and professional life. These words appear frequently in TOPIK II passages about careers, organizations, and achievements.",
     goals:["Learn 20 professional and institutional vocabulary words","Master Sino-Korean compounds with 기 (機/技/企/記)","Discuss organizations and professional roles"]},

    {type:"teach", trg:"\uAE30\uAD00", src:"institution; organization; organ", pos:"noun", gender:null,
     note:"Sino-Korean: mechanism (機) + govern (關).\nOfficial body or organization.",
     example:"A: \uC5B4\uB5A4 \uAE30\uAD00\uC5D0\uC11C \uC77C\uD558\uC138\uC694?\nB: \uC815\uBD80 \uAE30\uAD00\uC5D0\uC11C \uC77C\uD574\uC694.\nA: \uAE08\uC735 \uAE30\uAD00\uC5D0 \uAD00\uC2EC\uC774 \uC788\uC5B4\uC694.\nB: \uAE30\uAD00\uB9C8\uB2E4 \uBB38\uD654\uAC00 \uB2E4\uB974\uC8E0.",
     exampleSrc:"A: Which institution do you work at?\nB: I work at a government institution.\nA: I am interested in financial institutions.\nB: Each institution has a different culture.",
     funFact:"기관 has double meanings: organizational body (機關) and physical organ (器官). Context makes it clear: 호흡 기관 (respiratory organ)."},

    {type:"teach", trg:"\uAE30\uAD6C", src:"apparatus; device; organization (intl)", pos:"noun", gender:null,
     note:"Sino-Korean: mechanism (機) + tool (具).\nEquipment or international body.",
     example:"A: UN\uC740 \uAD6D\uC81C \uAE30\uAD6C\uC608\uC694.\nB: \uC5B4\uB5A4 \uAE30\uAD6C\uC5D0\uC11C \uC77C\uD558\uACE0 \uC2F6\uC5B4\uC694?\nA: \uAD6D\uC81C \uAE30\uAD6C\uC5D0\uC11C \uC77C\uD558\uACE0 \uC2F6\uC5B4\uC694.\nB: \uC5B8\uC5B4 \uB2A5\uB825\uC774 \uC911\uC694\uD558\uC8E0.",
     exampleSrc:"A: The UN is an international organization.\nB: Which organization do you want to work at?\nA: I want to work at an international organization.\nB: Language ability is important.",
     funFact:"기관 vs 기구: 기관 is for domestic/general organizations, while 기구 is often used for international bodies (국제기구) and physical apparatus."},

    {type:"teach", trg:"\uAE30\uAE30", src:"device; equipment; apparatus", pos:"noun", gender:null,
     note:"Sino-Korean: mechanism (機) + tool (器).\nTechnical equipment and devices.",
     example:"A: \uC0C8\uB85C\uC6B4 \uC804\uC790 \uAE30\uAE30\uB97C \uC0C0\uC5B4\uC694.\nB: \uC5B4\uB5A4 \uAE30\uAE30\uC608\uC694?\nA: \uCD5C\uC2E0 \uD0DC\uBE14\uB9BF\uC774\uC5D0\uC694.\nB: \uAE30\uAE30\uAC00 \uC810\uC810 \uBC1C\uC804\uD558\uACE0 \uC788\uC8E0.",
     exampleSrc:"A: I bought a new electronic device.\nB: What kind of device?\nA: The latest tablet.\nB: Devices keep advancing.",
     funFact:"기기 is the modern word for tech devices. 모바일 기기 (mobile device), 의료 기기 (medical device), 가전 기기 (home appliance)."},

    {type:"teach", trg:"\uAE30\uB2A5", src:"function; feature; capability", pos:"noun", gender:null,
     note:"Sino-Korean: mechanism (機) + ability (能).",
     example:"A: \uC774 \uC571\uC758 \uAE30\uB2A5\uC774 \uB9CE\uC544\uC694.\nB: \uC5B4\uB5A4 \uAE30\uB2A5\uC774 \uC788\uC5B4\uC694?\nA: \uBC88\uC5ED \uAE30\uB2A5\uC774 \uD2B9\uD788 \uC720\uC6A9\uD574\uC694.\nB: \uAE30\uB2A5\uC774 \uB9CE\uC73C\uBA74 \uD3B8\uB9AC\uD558\uC8E0.",
     exampleSrc:"A: This app has many functions.\nB: What functions does it have?\nA: The translation function is especially useful.\nB: More functions means more convenience.",
     funFact:"기능 is used in both tech (기능 업데이트: feature update) and social science (사회적 기능: social function) contexts."},

    {type:"teach", trg:"\uAE30\uBC95", src:"technique; method; skill", pos:"noun", gender:null,
     note:"Sino-Korean: technique (技) + method (法).\nSpecialized artistic or technical method.",
     example:"A: \uC0C8\uB85C\uC6B4 \uD68C\uD654 \uAE30\uBC95\uC744 \uBC30\uC6CC\uC694.\nB: \uC5B4\uB5A4 \uAE30\uBC95\uC774\uC5D0\uC694?\nA: \uC218\uCC44\uD654 \uAE30\uBC95\uC774\uC5D0\uC694.\nB: \uAE30\uBC95\uC744 \uC775\uD788\uB824\uBA74 \uC5F0\uC2B5\uC774 \uD544\uC694\uD574\uC694.",
     exampleSrc:"A: I learned a new painting technique.\nB: What technique?\nA: A watercolor technique.\nB: Mastering techniques requires practice.",
     funFact:"기법 emphasizes artistry and craft. Compare with 기술 (technology/skill, more general) and 방법 (method, most general)."},

    {type:"mc",
     q:"UN\uC740 \uC5B4\uB5A4 \uC885\uB958\uC758 \uC870\uC9C1\uC77C\uAE4C\uC694?",
     opts:["\uAD6D\uC81C \uAE30\uAD6C","\uC815\uBD80 \uAE30\uAD00","\uC804\uC790 \uAE30\uAE30","\uBBFC\uAC04 \uAE30\uC5C5"],
     ans:"\uAD6D\uC81C \uAE30\uAD6C",
     hint:"This type of body operates across multiple countries to address global issues."},

    {type:"teach", trg:"\uAE30\uBCF8\uC801", src:"basic; fundamental; standard", pos:"noun", gender:null,
     note:"Sino-Korean: foundation (基) + origin (本) + target (的).\nWhat is minimally expected.",
     example:"A: \uAE30\uBCF8\uC801\uC778 \uC608\uC808\uC744 \uC9C0\uCF1C\uC57C \uD574\uC694.\nB: \uAE30\uBCF8\uC801\uC778 \uC608\uC808\uC774 \uBB50\uC608\uC694?\nA: \uC778\uC0AC\uC640 \uAC10\uC0AC \uD45C\uD604\uC774\uC5D0\uC694.\nB: \uAE30\uBCF8\uC801\uC778 \uAC83\uBD80\uD130 \uC2DC\uC791\uD569\uC2DC\uB2E4.",
     exampleSrc:"A: We must follow basic etiquette.\nB: What is basic etiquette?\nA: Greetings and expressions of thanks.\nB: Let us start from the basics.",
     funFact:"기본적 implies what is expected as a minimum standard. 기본적 인권 (basic human rights), 기본적 지식 (basic knowledge)."},

    {type:"teach", trg:"\uAE30\uC220\uC790", src:"technician; engineer; skilled worker", pos:"noun", gender:null,
     note:"Sino-Korean: technique (技) + art (術) + person (者).",
     example:"A: \uAE30\uC220\uC790\uAC00 \uBD80\uC871\uD574\uC694.\nB: \uC5B4\uB5A4 \uBD84\uC57C\uC758 \uAE30\uC220\uC790\uC694?\nA: IT \uAE30\uC220\uC790\uAC00 \uD544\uC694\uD574\uC694.\nB: \uAE30\uC220\uC790 \uC591\uC131\uC774 \uC911\uC694\uD558\uC8E0.",
     exampleSrc:"A: There is a shortage of technicians.\nB: In what field?\nA: IT technicians are needed.\nB: Training technicians is important.",
     funFact:"기술자 vs 기술인: 기술자 emphasizes the person's technical skill, while 기술인 emphasizes their professional identity."},

    {type:"teach", trg:"\uAE30\uC220\uD558\uB2E4", src:"to describe; to narrate; to document", pos:"verb", gender:null,
     note:"Sino-Korean: record (記) + speak (述) + do (하다).\nFormal written or spoken description.",
     example:"A: \uACBD\uD5D8\uC744 \uAE00\uB85C \uAE30\uC220\uD574 \uC8FC\uC138\uC694.\nB: \uC790\uC138\uD788 \uAE30\uC220\uD560\uAC8C\uC694.\nA: \uC0AC\uAC74\uC744 \uAC1D\uAD00\uC801\uC73C\uB85C \uAE30\uC220\uD558\uC138\uC694.\nB: \uC0AC\uC2E4\uB9CC \uAE30\uC220\uD558\uACA0\uC2B5\uB2C8\uB2E4.",
     exampleSrc:"A: Please describe your experience in writing.\nB: I will describe it in detail.\nA: Describe the incident objectively.\nB: I will describe only the facts.",
     funFact:"기술하다 (describe, 記述) uses different hanja from 기술 (technology, 技術). Another Korean homophone trap!"},

    {type:"teach", trg:"\uAE30\uD68D", src:"planning; project planning", pos:"noun", gender:null,
     note:"Sino-Korean: plan (企) + draw (劃).\nStrategic planning and project design.",
     example:"A: \uC0C8 \uD504\uB85C\uC81D\uD2B8 \uAE30\uD68D\uC744 \uD558\uACE0 \uC788\uC5B4\uC694.\nB: \uC5B4\uB5A4 \uAE30\uD68D\uC774\uC5D0\uC694?\nA: \uBB38\uD654 \uD589\uC0AC \uAE30\uD68D\uC774\uC5D0\uC694.\nB: \uAE30\uD68D\uB825\uC774 \uC911\uC694\uD558\uC8E0.",
     exampleSrc:"A: I am planning a new project.\nB: What kind of planning?\nA: Cultural event planning.\nB: Planning ability is important.",
     funFact:"기획 is a prestigious role in Korean companies. 기획팀 (planning team) often handles strategy. TV show 기획 means the creative concept."},

    {type:"teach", trg:"\uAE30\uC5C5", src:"enterprise; company; business", pos:"noun", gender:null,
     note:"Sino-Korean: plan (企) + business (業).\nA business organization.",
     example:"A: \uB300\uAE30\uC5C5\uC5D0\uC11C \uC77C\uD558\uACE0 \uC2F6\uC5B4\uC694.\nB: \uC5B4\uB5A4 \uAE30\uC5C5\uC774\uC694?\nA: IT \uAE30\uC5C5\uC774\uC5D0\uC694.\nB: \uD55C\uAD6D\uC5D0\uB294 \uC720\uBA85\uD55C IT \uAE30\uC5C5\uC774 \uB9CE\uC8E0.",
     exampleSrc:"A: I want to work at a large company.\nB: What kind of company?\nA: An IT enterprise.\nB: Korea has many famous IT companies.",
     funFact:"대기업 (conglomerate) vs 중소기업 (SME): Korea's economy is dominated by 재벌 대기업 like Samsung, Hyundai, and LG."},

    {type:"fb",
     s:"\uC0C8\uB85C\uC6B4 \uD504\uB85C\uC81D\uD2B8 {1}\uC744 \uD558\uACE0 \uC788\uC5B4\uC694.",
     a:["\uAE30\uD68D"],
     opts:["\uAE30\uD68D","\uAE30\uB85D","\uAE30\uC5EC","\uAE30\uC801"],
     hint:"This Sino-Korean word means designing and organizing a project before execution.",
     sSrc:"I am doing {1} for a new project."},

    {type:"teach", trg:"\uAE30\uC5C5\uC778", src:"entrepreneur; businessperson", pos:"noun", gender:null,
     note:"Sino-Korean: enterprise (企業) + person (人).",
     example:"A: \uC131\uACF5\uD55C \uAE30\uC5C5\uC778\uC774 \uB418\uACE0 \uC2F6\uC5B4\uC694.\nB: \uC874\uACBD\uD558\uB294 \uAE30\uC5C5\uC778\uC774 \uC788\uC5B4\uC694?\nA: \uC0AC\uD68C\uC5D0 \uACF5\uD5CC\uD558\uB294 \uAE30\uC5C5\uC778\uC744 \uC874\uACBD\uD574\uC694.\nB: \uB9DE\uC544\uC694, \uC0AC\uD68C\uC801 \uCC45\uC784\uC774 \uC911\uC694\uD558\uC8E0.",
     exampleSrc:"A: I want to become a successful entrepreneur.\nB: Is there a businessperson you admire?\nA: I admire entrepreneurs who contribute to society.\nB: That is right, social responsibility is important.",
     funFact:"기업인 emphasizes the person's identity as a business leader. 사업가 (businessperson) is a similar but slightly more general term."},

    {type:"teach", trg:"\uAE30\uC5EC", src:"contribution", pos:"noun", gender:null,
     note:"Sino-Korean: period (寄) + give (與).\nContributing to a cause or achievement.",
     example:"A: \uC0AC\uD68C\uC5D0 \uAE30\uC5EC\uD558\uACE0 \uC2F6\uC5B4\uC694.\nB: \uC5B4\uB5BB\uAC8C \uAE30\uC5EC\uD558\uACE0 \uC2F6\uC5B4\uC694?\nA: \uBD09\uC0AC \uD65C\uB3D9\uC73C\uB85C \uAE30\uC5EC\uD558\uACE0 \uC2F6\uC5B4\uC694.\nB: \uC791\uC740 \uAE30\uC5EC\uB3C4 \uD070 \uBCC0\uD654\uB97C \uB9CC\uB4E4\uC5B4\uC694.",
     exampleSrc:"A: I want to contribute to society.\nB: How do you want to contribute?\nA: I want to contribute through volunteer work.\nB: Small contributions create big changes.",
     funFact:"기여하다 is the standard verb for 'to contribute.' TOPIK essays often ask how individuals can 사회에 기여하다 (contribute to society)."},

    {type:"teach", trg:"\uAE30\uC131", src:"established; existing (generation/establishment)", pos:"noun", gender:null,
     note:"Sino-Korean: already (既) + become (成).\nWhat is already established.",
     example:"A: \uAE30\uC131 \uC81C\uD488\uBCF4\uB2E4 \uC0C8\uB85C\uC6B4 \uC81C\uD488\uC774 \uD544\uC694\uD574\uC694.\nB: \uD601\uC2E0\uC774 \uC911\uC694\uD558\uC8E0.\nA: \uAE30\uC131 \uC138\uB300\uC640 \uC0C8 \uC138\uB300\uC758 \uAC08\uB4F1\uC774 \uC788\uC5B4\uC694.\nB: \uC11C\uB85C \uC774\uD574\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD574\uC694.",
     exampleSrc:"A: We need new products, not existing ones.\nB: Innovation is important.\nA: There are conflicts between established and new generations.\nB: Mutual understanding is important.",
     funFact:"기성 literally means 'already formed.' 기성세대 (the established generation) refers to older adults in power positions."},

    {type:"teach", trg:"\uAE30\uC131\uC138\uB300", src:"the older/established generation", pos:"noun", gender:null,
     note:"Sino-Korean: established (既成) + generation (世代).",
     example:"A: \uAE30\uC131\uC138\uB300\uC640 \uC2E0\uC138\uB300\uC758 \uC0DD\uAC01\uC774 \uB2EC\uB77C\uC694.\nB: \uC138\uB300 \uCC28\uC774\uAC00 \uC788\uC8E0.\nA: \uAE30\uC131\uC138\uB300\uB3C4 \uBCC0\uD654\uD574\uC57C \uD574\uC694.\nB: \uC11C\uB85C \uC18C\uD1B5\uD558\uBA74 \uC88B\uACA0\uC5B4\uC694.",
     exampleSrc:"A: The older generation and new generation think differently.\nB: There is a generation gap.\nA: The established generation needs to change too.\nB: It would be good to communicate with each other.",
     funFact:"기성세대 vs 신세대/MZ세대: Korean media constantly discusses generational dynamics. The tension between 기성세대 and younger groups is a major social topic."},

    {type:"teach", trg:"\uAE30\uD63C", src:"married (status)", pos:"noun", gender:null,
     note:"Sino-Korean: already (既) + marriage (婚).\nOpposite of 미혼 (unmarried).",
     example:"A: \uAE30\uD63C\uC774\uC138\uC694, \uBBF8\uD63C\uC774\uC138\uC694?\nB: \uAE30\uD63C\uC774\uC5D0\uC694.\nA: \uAE30\uD63C\uC790 \uD61C\uD0DD\uC774 \uC788\uC5B4\uC694.\nB: \uC5B4\uB5A4 \uD61C\uD0DD\uC774\uC5D0\uC694?",
     exampleSrc:"A: Are you married or single?\nB: I am married.\nA: There are benefits for married people.\nB: What benefits?",
     funFact:"기혼/미혼 appear on Korean forms and surveys. The 기 (既, already) and 미 (未, not yet) prefixes are productive: 기존/미정, 기출/미발표."},

    {type:"teach", trg:"\uAE30\uD638", src:"preference; taste; symbol/mark", pos:"noun", gender:null,
     note:"Sino-Korean: delight (嗜) + good (好) OR sign (記) + number (號).\nTwo different words with same pronunciation.",
     example:"A: \uC74C\uC2DD \uAE30\uD638\uAC00 \uC5B4\uB5BB\uAC8C \uB3FC\uC694?\nB: \uB9E4\uC6B4 \uC74C\uC2DD\uC744 \uC88B\uC544\uD574\uC694.\nA: \uAE30\uD638\uC5D0 \uB9DE\uB294 \uBA54\uB274\uB97C \uACE0\uB974\uC138\uC694.\nB: \uACE0\uB9C8\uC6CC\uC694, \uBB50\uAC00 \uB9DB\uC788\uC744\uAE4C\uC694?",
     exampleSrc:"A: What are your food preferences?\nB: I like spicy food.\nA: Choose a menu that matches your taste.\nB: Thank you, what would be good?",
     funFact:"기호 as 'preference' (嗜好) differs from 기호 as 'symbol' (記號). 기호식품 (preference foods) means stimulants like coffee and tea."},

    {type:"teach", trg:"\uAE30\uB85D", src:"record; documentation", pos:"noun", gender:null,
     note:"Sino-Korean: record (記) + inscribe (錄).\nBoth written records and athletic records.",
     example:"A: \uC138\uACC4 \uAE30\uB85D\uC744 \uC138\uC6E0\uC5B4\uC694!\nB: \uB300\uB2E8\uD574\uC694! \uBB34\uC2A8 \uAE30\uB85D\uC774\uC5D0\uC694?\nA: 100\uBBF8\uD130 \uC138\uACC4 \uAE30\uB85D\uC774\uC5D0\uC694.\nB: \uC5ED\uC0AC\uC5D0 \uAE30\uB85D\uB420 \uC21C\uAC04\uC774\uB124\uC694.",
     exampleSrc:"A: They set a world record!\nB: Amazing! What record?\nA: The 100-meter world record.\nB: A moment that will be recorded in history.",
     funFact:"기록 covers sports records, historical records, and everyday documentation. 기록 문화 (documentation culture) is valued in Korean scholarship."},

    {type:"teach", trg:"\uAE30\uB85D\uB418\uB2E4", src:"to be recorded; to be documented", pos:"verb", gender:null,
     note:"Passive form: a record is created/preserved.",
     example:"A: \uC774 \uC0AC\uAC74\uC740 \uC5ED\uC0AC\uC5D0 \uAE30\uB85D\uB420 \uAC83\uC774\uC5D0\uC694.\nB: \uC911\uC694\uD55C \uC0AC\uAC74\uC774\uC8E0.\nA: \uBAA8\uB4E0 \uB370\uC774\uD130\uAC00 \uAE30\uB85D\uB3FC\uC694.\nB: \uC548\uC804\uD558\uAC8C \uBCF4\uAD00\uD574\uC57C \uD574\uC694.",
     exampleSrc:"A: This event will be recorded in history.\nB: It is an important event.\nA: All data is recorded.\nB: It needs to be stored safely.",
     funFact:"기록되다 is preferred in academic and news writing for its objective tone. Historical narratives use it extensively."},

    {type:"teach", trg:"\uAE30\uC801", src:"miracle; wonder", pos:"noun", gender:null,
     note:"Sino-Korean: strange (奇) + mark/trace (跡).\nSomething wonderfully unexpected.",
     example:"A: \uD55C\uAC15\uC758 \uAE30\uC801\uC744 \uC544\uC138\uC694?\nB: \uD55C\uAD6D\uC758 \uACBD\uC81C \uC131\uC7A5\uC744 \uB9D0\uD558\uB294 \uAC70\uC8E0?\nA: \uC758\uD559\uC758 \uAE30\uC801\uC774 \uC77C\uC5B4\uB0AC\uC5B4\uC694.\nB: \uD76C\uB9DD\uC744 \uC783\uC9C0 \uB9C8\uC138\uC694.",
     exampleSrc:"A: Do you know the Miracle on the Han River?\nB: You mean Korea's economic growth?\nA: A medical miracle happened.\nB: Never lose hope.",
     funFact:"한강의 기적 (Miracle on the Han River) is the famous term for Korea's rapid post-war economic development from one of the poorest to a major economy."},

    {type:"teach", trg:"\uAE30\uB9C9\uD788\uB2E4", src:"to be astounding; to be speechless", pos:"adj", gender:null,
     note:"Pure Korean compound: breath (기) + block (막히다).\nLiterally 'one's breath is blocked.'",
     example:"A: \uACBD\uCE58\uAC00 \uAE30\uB9C9\uD788\uAC8C \uC544\uB984\uB2E4\uC6CC\uC694.\nB: \uC0AC\uC9C4\uC744 \uB9CE\uC774 \uCC0D\uC5C8\uC5B4\uC694.\nA: \uAE30\uB9C9\uD78E \uC694\uB9AC \uC2E4\uB825\uC774\uC5D0\uC694.\nB: \uC694\uB9AC\uC0AC\uAC00 \uB418\uC5B4\uB3C4 \uB418\uACA0\uC5B4\uC694!",
     exampleSrc:"A: The scenery is breathtakingly beautiful.\nB: I took many photos.\nA: Your cooking skills are astounding.\nB: You could become a chef!",
     funFact:"기막히다 can be positive (amazingly good) or negative (shockingly bad). Tone and context determine which: 기막힌 맛 (amazing taste) vs 기막힌 일 (outrageous thing)."},

    {type:"mc",
     q:"\uD55C\uAD6D\uC758 \uBE60\uB978 \uACBD\uC81C \uC131\uC7A5\uC744 \uBB50\uB77C\uACE0 \uBD88\uB7EC\uC694?",
     opts:["\uD55C\uAC15\uC758 \uAE30\uC801","\uAE30\uC131\uC138\uB300","\uAE30\uC5C5\uC778","\uAE30\uC5EC"],
     ans:"\uD55C\uAC15\uC758 \uAE30\uC801",
     hint:"This phrase combines a famous Seoul river with a word meaning 'wonder' or 'miracle.'"},

    {type:"match", pairs:[
      {trg:"\uAE30\uAD00", src:"institution"},
      {trg:"\uAE30\uB2A5", src:"function"},
      {trg:"\uAE30\uC5C5", src:"enterprise"},
      {trg:"\uAE30\uC5EC", src:"contribution"},
      {trg:"\uAE30\uB85D", src:"record"},
      {trg:"\uAE30\uC801", src:"miracle"}
    ]}
  ]
};
export default LESSON_13;
