// B2 Lesson 06: Law & Authority
// Words: 구속, 구속되다, 구속하다, 감옥, 권리, 권위, 금지되다, 금지하다, 금하다,
//        경고, 경고하다, 경계, 규정, 규칙적, 국회, 국왕, 군사, 공공, 관습, 권투

const LESSON_6 = {
  id:"kov2_b2_l6", title:"법과 권위", icon:"\u2696\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Law & Authority",
     desc:"Learn vocabulary related to law, governance, prohibition, and authority. These words appear frequently in TOPIK II reading passages about society, politics, and regulations.",
     goals:["Learn 20 words for law, authority, and governance","Understand legal Sino-Korean vocabulary","Use formal vocabulary for rules and institutions"]},

    {type:"teach", trg:"\uAD6C\uC18D", src:"arrest; detention; restraint", pos:"noun", gender:null,
     note:"Sino-Korean: seize (拘) + bind (束).\nLegal term for detaining a suspect.",
     example:"A: \uC6A9\uC758\uC790\uAC00 \uAD6C\uC18D\uB418\uC5C8\uC5B4\uC694.\nB: \uBB34\uC2A8 \uD610\uC758\uC608\uC694?\nA: \uC0AC\uAE30 \uD610\uC758\uB85C \uAD6C\uC18D\uB418\uC5C8\uC5B4\uC694.\nB: \uC7AC\uD310\uC740 \uC5B8\uC81C\uC608\uC694?",
     exampleSrc:"A: The suspect was arrested.\nB: What are the charges?\nA: Arrested on fraud charges.\nB: When is the trial?",
     funFact:"구속 also means 'restriction' in general: 시간에 구속되다 (be restricted by time). The legal meaning is the most common usage."},

    {type:"teach", trg:"\uAD6C\uC18D\uB418\uB2E4", src:"to be arrested; to be detained (passive)", pos:"verb", gender:null,
     note:"Passive form. The person is subjected to arrest.",
     example:"A: \uC804 \uC7A5\uAD00\uC774 \uAD6C\uC18D\uB418\uC5C8\uC5B4\uC694.\nB: \uBD80\uD328 \uD610\uC758\uC608\uC694?\nA: \uB124, \uBE44\uB9AC \uD610\uC758\uB85C \uAD6C\uC18D\uB418\uC5C8\uC5B4\uC694.\nB: \uBC95 \uC55E\uC5D0 \uC608\uC678\uB294 \uC5C6\uC8E0.",
     exampleSrc:"A: The former minister has been detained.\nB: On corruption charges?\nA: Yes, detained on bribery charges.\nB: No one is above the law.",
     funFact:"구속되다 appears daily in Korean news. Korean legal proceedings are widely covered, and arrest warrants (구속영장) make front-page news."},

    {type:"teach", trg:"\uAD6C\uC18D\uD558\uB2E4", src:"to arrest; to detain; to restrain", pos:"verb", gender:null,
     note:"Active form. An authority actively detains someone.",
     example:"A: \uACBD\uCC30\uC774 \uBC94\uC778\uC744 \uAD6C\uC18D\uD588\uC5B4\uC694.\nB: \uBE60\uB978 \uCCB4\uD3EC\uC600\uB124\uC694.\nA: \uC99D\uAC70\uAC00 \uCDA9\uBD84\uD588\uC5B4\uC694.\nB: \uAD6C\uC18D \uAE30\uAC04\uC740 \uC5BC\uB9C8\uC608\uC694?",
     exampleSrc:"A: The police arrested the criminal.\nB: That was a quick capture.\nA: There was sufficient evidence.\nB: How long is the detention period?",
     funFact:"In Korea, prosecutors (검찰) request arrest warrants from judges. The system of judicial review of arrests is a cornerstone of Korean due process."},

    {type:"teach", trg:"\uAC10\uC625", src:"prison; jail", pos:"noun", gender:null,
     note:"Sino-Korean: supervise (監) + prison (獄).\nThe place where prisoners are held.",
     example:"A: \uAC10\uC625\uC5D0\uC11C 5\uB144\uC744 \uBCF4\uB0C8\uC5B4\uC694.\nB: \uD798\uB4E0 \uC2DC\uAC04\uC774\uC5C8\uACA0\uC5B4\uC694.\nA: \uAC10\uC625 \uC0DD\uD65C\uC774 \uC27D\uC9C0 \uC54A\uC558\uC5B4\uC694.\nB: \uC0C8\uB85C\uC6B4 \uC2DC\uC791\uC744 \uC751\uC6D0\uD569\uB2C8\uB2E4.",
     exampleSrc:"A: I spent five years in prison.\nB: That must have been a hard time.\nA: Prison life was not easy.\nB: I support your new beginning.",
     funFact:"Modern Korean uses 교도소 (correctional facility) officially, but 감옥 remains the common everyday word, much like 'jail' vs 'correctional facility' in English."},

    {type:"teach", trg:"\uAD8C\uB9AC", src:"right; entitlement", pos:"noun", gender:null,
     note:"Sino-Korean: authority (權) + benefit (利).\nLegal or moral right.",
     example:"A: \uBAA8\uB4E0 \uC0AC\uB78C\uC740 \uD3C9\uB4F1\uD55C \uAD8C\uB9AC\uAC00 \uC788\uC5B4\uC694.\nB: \uD5CC\uBC95\uC5D0 \uBCF4\uC7A5\uB41C \uAD8C\uB9AC\uC8E0.\nA: \uAD8C\uB9AC\uB97C \uC9C0\uD0A4\uB294 \uAC83\uC774 \uC911\uC694\uD574\uC694.\nB: \uC758\uBB34\uB3C4 \uD568\uAED8 \uB530\uB974\uC8E0.",
     exampleSrc:"A: All people have equal rights.\nB: Rights guaranteed by the constitution.\nA: It is important to protect our rights.\nB: Duties also come along with them.",
     funFact:"인권 (human rights) combines 인 (person) + 권 (rights). Korea's democratization movement centered on fighting for 권리."},

    {type:"mc",
     q:"\uACBD\uCC30\uC774 \uBC94\uC778\uC744 \uC7A1\uC558\uC5B4\uC694. \uC774\uAC83\uC740?",
     opts:["\uAD6C\uC18D","\uAD00\uC2B5","\uAD8C\uD22C","\uACBD\uACC4"],
     ans:"\uAD6C\uC18D",
     hint:"This Sino-Korean legal term means to seize and bind, referring to taking someone into custody."},

    {type:"teach", trg:"\uAD8C\uC704", src:"authority; prestige", pos:"noun", gender:null,
     note:"Sino-Korean: authority (權) + dignity (威).\nThe weight or prestige of an authority figure.",
     example:"A: \uAD50\uC218\uB2D8\uC758 \uAD8C\uC704\uAC00 \uB300\uB2E8\uD574\uC694.\nB: \uADF8 \uBD84\uC57C\uC5D0\uC11C \uCD5C\uACE0\uC758 \uC804\uBB38\uAC00\uC8E0.\nA: \uAD8C\uC704 \uC788\uB294 \uC5F0\uAD6C\uB97C \uD558\uC154\uC694.\nB: \uD559\uC0DD\uB4E4\uC774 \uC874\uACBD\uD574\uC694.",
     exampleSrc:"A: The professor has great authority.\nB: They are the top expert in the field.\nA: They conduct authoritative research.\nB: Students respect them.",
     funFact:"권위주의 (authoritarianism) is a critical term in Korean political discourse, referring to the military dictatorships that preceded democratization."},

    {type:"teach", trg:"\uAE08\uC9C0\uB418\uB2E4", src:"to be prohibited (passive)", pos:"verb", gender:null,
     note:"Sino-Korean: gold/prohibit (禁) + stop (止) + become (되다).",
     example:"A: \uC2E4\uB0B4 \uD761\uC5F0\uC774 \uAE08\uC9C0\uB418\uC5C8\uC5B4\uC694.\nB: \uC5B8\uC81C\uBD80\uD130\uC694?\nA: \uC791\uB144\uBD80\uD130 \uAE08\uC9C0\uB418\uC5C8\uC5B4\uC694.\nA: \uAC74\uAC15\uC744 \uC704\uD574 \uC88B\uC740 \uC815\uCC45\uC774\uC5D0\uC694.",
     exampleSrc:"A: Indoor smoking has been prohibited.\nB: Since when?\nA: It has been prohibited since last year.\nA: It is a good policy for health.",
     funFact:"금지 signs are everywhere in Korea: 주차 금지 (no parking), 출입 금지 (no entry), 촬영 금지 (no photography)."},

    {type:"teach", trg:"\uAE08\uC9C0\uD558\uB2E4", src:"to prohibit; to ban", pos:"verb", gender:null,
     note:"Active form. An authority bans something.",
     example:"A: \uC815\uBD80\uAC00 \uC77C\uD68C\uC6A9 \uD50C\uB77C\uC2A4\uD2F1\uC744 \uAE08\uC9C0\uD588\uC5B4\uC694.\nB: \uD658\uACBD\uC744 \uC704\uD55C \uACB0\uC815\uC774\uB124\uC694.\nA: \uAE08\uC9C0 \uC815\uCC45\uC5D0 \uCC2C\uC131\uD574\uC694.\nB: \uD658\uACBD \uBCF4\uD638\uAC00 \uC911\uC694\uD558\uC8E0.",
     exampleSrc:"A: The government prohibited single-use plastics.\nB: It is an environmental decision.\nA: I support the ban policy.\nB: Environmental protection is important.",
     funFact:"금지하다 is the active counterpart to 금지되다. News uses the passive more often to focus on what is banned rather than who banned it."},

    {type:"teach", trg:"\uAE08\uD558\uB2E4", src:"to forbid; to prohibit (formal)", pos:"verb", gender:null,
     note:"Sino-Korean: prohibit (禁) + do (하다).\nMore formal and literary than 금지하다.",
     example:"A: \uBC95\uC73C\uB85C \uADF8 \uD589\uC704\uB97C \uAE08\uD558\uACE0 \uC788\uC5B4\uC694.\nB: \uC704\uBC18\uD558\uBA74 \uBC8C\uAE08\uC774 \uC788\uC5B4\uC694?\nA: \uB124, \uC5C4\uACA9\uD788 \uAE08\uD558\uACE0 \uC788\uC5B4\uC694.\nB: \uBC95\uC744 \uC900\uC218\uD574\uC57C\uC8E0.",
     exampleSrc:"A: The law forbids that behavior.\nB: Is there a fine for violations?\nA: Yes, it is strictly forbidden.\nB: We must comply with the law.",
     funFact:"금하다 is more literary and appears in legal texts and formal documents. In everyday speech, 금지하다 is preferred."},

    {type:"teach", trg:"\uACBD\uACE0", src:"warning; caution", pos:"noun", gender:null,
     note:"Sino-Korean: warn (警) + tell (告).\nA formal alert or admonition.",
     example:"A: \uD0DC\uD48D \uACBD\uACE0\uAC00 \uBC1C\uB839\uB418\uC5C8\uC5B4\uC694.\nB: \uC678\uCD9C\uC744 \uC790\uC81C\uD574\uC57C \uD574\uC694.\nA: \uD68C\uC0AC\uC5D0\uC11C \uACBD\uACE0\uB97C \uBC1B\uC558\uC5B4\uC694.\nB: \uC870\uC2EC\uD574\uC57C \uD574\uC694.",
     exampleSrc:"A: A typhoon warning has been issued.\nB: We should avoid going out.\nA: I received a warning at work.\nB: You need to be careful.",
     funFact:"경고 has a legal weight in Korean workplaces. Receiving a formal 경고장 (warning letter) goes on your employment record."},

    {type:"fb",
     s:"\uBAA8\uB4E0 \uC0AC\uB78C\uC740 \uD3C9\uB4F1\uD55C {1}\uAC00 \uC788\uC5B4\uC694.",
     a:["\uAD8C\uB9AC"],
     opts:["\uAD8C\uB9AC","\uAD8C\uC704","\uAD6C\uC18D","\uACBD\uACC4"],
     hint:"This Sino-Korean word means something everyone is entitled to by law or morality.",
     sSrc:"All people have equal {1}."},

    {type:"teach", trg:"\uACBD\uACE0\uD558\uB2E4", src:"to warn; to caution", pos:"verb", gender:null,
     note:"Verb form of 경고. To formally alert someone.",
     example:"A: \uC758\uC0AC\uAC00 \uAC74\uAC15\uC5D0 \uB300\uD574 \uACBD\uACE0\uD588\uC5B4\uC694.\nB: \uBB34\uC5C7\uC744 \uACBD\uACE0\uD588\uC5B4\uC694?\nA: \uC220\uC744 \uC904\uC774\uB77C\uACE0 \uACBD\uACE0\uD588\uC5B4\uC694.\nB: \uAC74\uAC15\uC744 \uC704\uD574 \uB4E4\uC5B4\uC57C \uD574\uC694.",
     exampleSrc:"A: The doctor warned me about my health.\nB: What did they warn about?\nA: They warned me to reduce alcohol.\nB: You should listen for your health.",
     funFact:"경고하다 can be friendly (a doctor's advice) or threatening (a government warning). Tone and context determine the weight."},

    {type:"teach", trg:"\uACBD\uACC4", src:"boundary; border; vigilance", pos:"noun", gender:null,
     note:"Sino-Korean: warn (警) + boundary (界).\nBoth physical borders and mental alertness.",
     example:"A: \uAD6D\uACBD \uACBD\uACC4\uAC00 \uC5C4\uACA9\uD574\uC694.\nB: \uBCF4\uC548\uC774 \uCCA0\uCC9C\uD558\uB124\uC694.\nA: \uACBD\uACC4\uB97C \uB2A6\uCD94\uBA74 \uC548 \uB3FC\uC694.\nB: \uD56D\uC0C1 \uACBD\uACC4\uD574\uC57C \uD574\uC694.",
     exampleSrc:"A: The national border is strictly guarded.\nB: Security is thorough.\nA: We must not let our guard down.\nB: We must always stay vigilant.",
     funFact:"경계 at the Korean DMZ is among the world's most intense. The word carries extra weight in the Korean context of divided peninsula."},

    {type:"teach", trg:"\uADDC\uC815", src:"regulation; rule; provision", pos:"noun", gender:null,
     note:"Sino-Korean: standard (規) + decide (定).\nOfficial rules or provisions.",
     example:"A: \uD68C\uC0AC \uADDC\uC815\uC744 \uC9C0\uCF1C\uC57C \uD574\uC694.\nB: \uC5B4\uB5A4 \uADDC\uC815\uC774 \uC788\uC5B4\uC694?\nA: \uBCF5\uC7A5 \uADDC\uC815\uACFC \uADFC\uBB34 \uC2DC\uAC04 \uADDC\uC815\uC774\uC694.\nB: \uADDC\uC815\uC744 \uC798 \uC77D\uC5B4 \uBCFC\uAC8C\uC694.",
     exampleSrc:"A: You must follow company regulations.\nB: What regulations are there?\nA: Dress code rules and working hour rules.\nB: I will read the regulations carefully.",
     funFact:"규정 is a very common word in Korean bureaucracy. Every institution has a 규정집 (regulation handbook) that governs operations."},

    {type:"teach", trg:"\uADDC\uCE59\uC801", src:"regular; systematic", pos:"noun", gender:null,
     note:"Sino-Korean: standard (規) + rule (則) + target (的).\nDescribes consistent, regular patterns.",
     example:"A: \uADDC\uCE59\uC801\uC778 \uC0DD\uD65C\uC774 \uC911\uC694\uD574\uC694.\nB: \uC218\uBA74 \uC2DC\uAC04\uC744 \uADDC\uCE59\uC801\uC73C\uB85C \uC9C0\uCF1C\uC694.\nA: \uC6B4\uB3D9\uB3C4 \uADDC\uCE59\uC801\uC73C\uB85C \uD574\uC694?\nB: \uB124, \uB9E4\uC77C \uC544\uCE68\uC5D0 \uD574\uC694.",
     exampleSrc:"A: A regular lifestyle is important.\nB: I keep sleep times regular.\nA: Do you exercise regularly too?\nB: Yes, every morning.",
     funFact:"규칙적 vs 불규칙적 (irregular): language learners encounter 불규칙 constantly in Korean grammar for irregular verb conjugations."},

    {type:"teach", trg:"\uAD6D\uD68C", src:"National Assembly; parliament", pos:"noun", gender:null,
     note:"Sino-Korean: country (國) + assembly (會).\nKorea's legislative body.",
     example:"A: \uAD6D\uD68C\uC5D0\uC11C \uC0C8 \uBC95\uC548\uC744 \uD1B5\uACFC\uC2DC\uCEF0\uC5B4\uC694.\nB: \uC5B4\uB5A4 \uBC95\uC548\uC774\uC5D0\uC694?\nA: \uD658\uACBD \uBCF4\uD638\uBC95\uC774\uC5D0\uC694.\nB: \uAD6D\uD68C\uC758 \uC5ED\uD560\uC774 \uC911\uC694\uD558\uC8E0.",
     exampleSrc:"A: The National Assembly passed a new bill.\nB: What bill is it?\nA: It is an environmental protection law.\nB: The role of the Assembly is important.",
     funFact:"Korea's National Assembly Building (국회의사당) is on Yeouido Island in Seoul. It is a major landmark and symbol of democracy."},

    {type:"teach", trg:"\uAD6D\uC655", src:"king; monarch", pos:"noun", gender:null,
     note:"Sino-Korean: country (國) + king (王).\nHistorical title for Korean kings.",
     example:"A: \uC870\uC120 \uC2DC\uB300\uC5D0\uB294 \uAD6D\uC655\uC774 \uD1B5\uCE58\uD588\uC5B4\uC694.\nB: \uAC00\uC7A5 \uC720\uBA85\uD55C \uAD6D\uC655\uC740 \uB204\uAD6C\uC608\uC694?\nA: \uC138\uC885\uB300\uC655\uC774\uC5D0\uC694.\nB: \uD55C\uAE00\uC744 \uB9CC\uB4E0 \uAD6D\uC655\uC774\uC8E0.",
     exampleSrc:"A: In the Joseon era, kings ruled the country.\nB: Who is the most famous king?\nA: King Sejong the Great.\nB: The king who created Hangeul.",
     funFact:"세종대왕 (King Sejong) is on the Korean 10,000 won bill and has a statue in Gwanghwamun Square. He is Korea's most revered historical figure."},

    {type:"teach", trg:"\uAD70\uC0AC", src:"military; military affairs", pos:"noun", gender:null,
     note:"Sino-Korean: army (軍) + affairs (事).",
     example:"A: \uAD70\uC0AC \\uD6C8\uB828\uC744 \uBC1B\uC558\uC5B4\uC694.\nB: \uD55C\uAD6D\uC740 \uBCD1\uC5ED \uC758\uBB34\uAC00 \uC788\uC8E0.\nA: \uAD70\uC0AC \uBB38\uC81C\uB294 \uBBFC\uAC10\uD574\uC694.\nB: \uD3C9\uD654\uAC00 \uC911\uC694\uD574\uC694.",
     exampleSrc:"A: I received military training.\nB: Korea has mandatory military service.\nA: Military issues are sensitive.\nB: Peace is important.",
     funFact:"All Korean men must complete roughly 18 months of 군사 service. This shared experience deeply shapes Korean male culture and bonds."},

    {type:"teach", trg:"\uACF5\uACF5", src:"public; communal", pos:"noun", gender:null,
     note:"Sino-Korean: public (公) + public (共).\nDouble 'public' for emphasis on communal nature.",
     example:"A: \uACF5\uACF5 \uAE30\uAD00\uC5D0\uC11C \uC77C\uD574\uC694.\nB: \uC5B4\uB5A4 \uACF5\uACF5 \uAE30\uAD00\uC774\uC5D0\uC694?\nA: \uACF5\uACF5 \uB3C4\uC11C\uAD00\uC774\uC5D0\uC694.\nB: \uACF5\uACF5 \uC11C\uBE44\uC2A4\uAC00 \uC911\uC694\uD558\uC8E0.",
     exampleSrc:"A: I work at a public institution.\nB: Which public institution?\nA: A public library.\nB: Public services are important.",
     funFact:"공공 appears in many Korean compounds: 공공장소 (public place), 공공재 (public good), 공공기관 (public institution)."},

    {type:"teach", trg:"\uAD00\uC2B5", src:"custom; convention; tradition", pos:"noun", gender:null,
     note:"Sino-Korean: observe/accustom (慣) + practice (習).\nEstablished social practices.",
     example:"A: \uD55C\uAD6D\uC758 \uC124\uB0A0 \uAD00\uC2B5\uC744 \uC54C\uC544\uC694?\nB: \uC138\uBC43\uB3C8\uC744 \uC8FC\uB294 \uAD00\uC2B5\uC774 \uC788\uC8E0.\nA: \uAD00\uC2B5\uC740 \uB098\uB77C\uB9C8\uB2E4 \uB2E4\uB974\uC8E0.\nB: \uBB38\uD654\uC758 \uB2E4\uC591\uC131\uC774\uC5D0\uC694.",
     exampleSrc:"A: Do you know Korean New Year customs?\nB: There is a custom of giving money.\nA: Customs differ by country.\nB: That is cultural diversity.",
     funFact:"관습 differs from 전통 (tradition): 관습 emphasizes repeated social practice, while 전통 emphasizes historical legacy and cultural pride."},

    {type:"teach", trg:"\uAD8C\uD22C", src:"boxing", pos:"noun", gender:null,
     note:"Sino-Korean: fist (拳) + fight (鬪).\nThe sport of boxing.",
     example:"A: \uAD8C\uD22C \uC2DC\uD569\uC744 \uBD10\uC694?\nB: \uB124, \uAD8C\uD22C\uB97C \uC88B\uC544\uD574\uC694.\nA: \uC720\uBA85\uD55C \uAD8C\uD22C \uC120\uC218\uAC00 \uC788\uC5B4\uC694?\nB: \uD55C\uAD6D\uC5D0\uB3C4 \uC138\uACC4 \uCC54\uD53C\uC5B8\uC774 \uC788\uC5C8\uC5B4\uC694.",
     exampleSrc:"A: Do you watch boxing matches?\nB: Yes, I like boxing.\nA: Are there famous boxers?\nB: Korea has had world champions too.",
     funFact:"Korea has a strong boxing tradition. The word 권투 literally means 'fist fight.' Korean boxers have won multiple Olympic medals."},

    {type:"mc",
     q:"\uC2E4\uB0B4\uC5D0\uC11C \uB2F4\uBC30\uB97C \uD53C\uC6B8 \uC218 \uC5C6\uC5B4\uC694. \uC774\uAC83\uC740?",
     opts:["\uAE08\uC9C0\uB418\uC5C8\uB2E4","\uAD6C\uC18D\uB418\uC5C8\uB2E4","\uACBD\uACE0\uD588\uB2E4","\uAC1C\uBC29\uB418\uC5C8\uB2E4"],
     ans:"\uAE08\uC9C0\uB418\uC5C8\uB2E4",
     hint:"This passive verb means something has been officially banned or not allowed."},

    {type:"match", pairs:[
      {trg:"\uAD6C\uC18D", src:"arrest"},
      {trg:"\uAC10\uC625", src:"prison"},
      {trg:"\uAD8C\uB9AC", src:"right"},
      {trg:"\uADDC\uC815", src:"regulation"},
      {trg:"\uAD6D\uD68C", src:"parliament"},
      {trg:"\uAD00\uC2B5", src:"custom"}
    ]}
  ]
};
export default LESSON_6;
