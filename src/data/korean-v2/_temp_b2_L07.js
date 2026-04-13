// B2 Lesson 07: Economy & Commerce
// Words: 경제력, 경제학, 경쟁력, 경비, 경영하다, 거액, 금액, 금고, 계좌,
//        가입, 가입자, 가입하다, 구입, 구입하다, 값싸다, 공짜, 계산기, 공급, 공업, 국산

const LESSON_7 = {
  id:"kov2_b2_l7", title:"경제와 상업", icon:"\uD83D\uDCB0", xp:15, board:true,
  steps:[
    {type:"intro", title:"Economy & Commerce",
     desc:"Learn vocabulary for economics, finance, and commercial transactions. These words are essential for TOPIK II reading passages about business, trade, and financial matters.",
     goals:["Learn 20 economy and commerce vocabulary words","Master Sino-Korean compound patterns for business terms","Use financial vocabulary in professional contexts"]},

    {type:"teach", trg:"\uACBD\uC81C\uB825", src:"economic power; economic strength", pos:"noun", gender:null,
     note:"Sino-Korean: economy (經濟) + power (力).\nA nation's or company's economic might.",
     example:"A: \uD55C\uAD6D\uC758 \uACBD\uC81C\uB825\uC774 \uC131\uC7A5\uD588\uC5B4\uC694.\nB: \uC138\uACC4 10\uC704 \uACBD\uC81C \uB300\uAD6D\uC774\uC8E0.\nA: \uACBD\uC81C\uB825\uC774 \uAD6D\uB825\uC744 \uACB0\uC815\uD574\uC694.\nB: \uAD6D\uBC29\uB825\uACFC\uB3C4 \uAD00\uB828\uC774 \uC788\uC8E0.",
     exampleSrc:"A: Korea's economic power has grown.\nB: It is the world's 10th largest economy.\nA: Economic power determines national strength.\nB: It is also related to defense capability.",
     funFact:"The suffix -력 (力, power) creates many compound nouns: 경쟁력 (competitiveness), 생산력 (productivity), 창의력 (creativity)."},

    {type:"teach", trg:"\uACBD\uC81C\uD559", src:"economics (academic discipline)", pos:"noun", gender:null,
     note:"Sino-Korean: economy (經濟) + study (學).",
     example:"A: \uB300\uD559\uC5D0\uC11C \uACBD\uC81C\uD559\uC744 \uACF5\uBD80\uD574\uC694.\nB: \uACBD\uC81C\uD559\uC774 \uC7AC\uBBF8\uC788\uC5B4\uC694?\nA: \uB124, \uC0AC\uD68C\uB97C \uC774\uD574\uD558\uB294 \uB370 \uB3C4\uC6C0\uC774 \uB3FC\uC694.\nB: \uC5B4\uB5A4 \uBD84\uC57C\uAC00 \uD765\uBBF8\uB85C\uC6CC\uC694?",
     exampleSrc:"A: I studied economics in university.\nB: Is economics interesting?\nA: Yes, it helps understand society.\nB: Which area interests you?",
     funFact:"The suffix -학 (學, study) creates academic disciplines: 심리학 (psychology), 사회학 (sociology), 철학 (philosophy)."},

    {type:"teach", trg:"\uACBD\uC7C1\uB825", src:"competitiveness", pos:"noun", gender:null,
     note:"Sino-Korean: compete (競) + fight (爭) + power (力).",
     example:"A: \uAE00\uB85C\uBC8C \uACBD\uC7C1\uB825\uC744 \uD0A4\uC6CC\uC57C \uD574\uC694.\nB: \uC5B4\uB5BB\uAC8C \uD0A4\uC6B8 \uC218 \uC788\uC744\uAE4C\uC694?\nA: \uAE30\uC220 \uD601\uC2E0\uC774 \uD575\uC2EC\uC774\uC5D0\uC694.\nB: \uC778\uC7AC \uC591\uC131\uB3C4 \uC911\uC694\uD558\uC8E0.",
     exampleSrc:"A: We need to build global competitiveness.\nB: How can we build it?\nA: Technology innovation is the key.\nB: Talent development is also important.",
     funFact:"경쟁력 is one of the most important words in Korean business discourse. Companies and nations are constantly measured by their 경쟁력."},

    {type:"teach", trg:"\uACBD\uBE44", src:"expenses; security guard costs", pos:"noun", gender:null,
     note:"Sino-Korean: manage (經) + expense (費).\nCan mean general expenses or security costs.",
     example:"A: \uC5EC\uD589 \uACBD\uBE44\uAC00 \uC5BC\uB9C8\uB098 \uB4E4\uC5B4\uC694?\nB: \uD56D\uACF5\uAD8C\uACFC \uC219\uBC15\uBE44 \uD3EC\uD568 200\uB9CC \uC6D0\uC774\uC5D0\uC694.\nA: \uACBD\uBE44\uB97C \uC904\uC77C \uBC29\uBC95\uC774 \uC788\uC744\uAE4C\uC694?\nB: \uC800\uAC00 \uD56D\uACF5\uC0AC\uB97C \uC774\uC6A9\uD558\uC138\uC694.",
     exampleSrc:"A: How much are the travel expenses?\nB: Including airfare and accommodation, 2 million won.\nA: Is there a way to reduce expenses?\nB: Use a budget airline.",
     funFact:"경비 also means 'security guard': 경비원 (security guard), 경비실 (security office). The hanja 經費 (expenses) and 警備 (security) are homophones."},

    {type:"teach", trg:"\uACBD\uC601\uD558\uB2E4", src:"to manage; to run (a business)", pos:"verb", gender:null,
     note:"Sino-Korean: manage (經) + operate (營) + do (하다).",
     example:"A: \uC2DD\uB2F9\uC744 \uACBD\uC601\uD558\uACE0 \uC788\uC5B4\uC694.\nB: \uACBD\uC601\uC774 \uC798 \uB418\uC138\uC694?\nA: \uCC98\uC74C\uC5D0\uB294 \uC5B4\uB824\uC6E0\uC9C0\uB9CC \uC9C0\uAE08\uC740 \uC548\uC815\uB3FC\uC694.\nB: \uACBD\uC601 \uBE44\uACB0\uC774 \uBB50\uC608\uC694?",
     exampleSrc:"A: I am running a restaurant.\nB: Is the business going well?\nA: It was tough at first but stable now.\nB: What is the secret of management?",
     funFact:"경영학 (business management/MBA) is one of the most popular university majors in Korea. 경영 implies strategic, professional management."},

    {type:"mc",
     q:"\uD68C\uC0AC\uC758 \uACBD\uC7C1\uB825\uC744 \uB192\uC774\uB824\uBA74 \uBB34\uC5C7\uC774 \uD544\uC694\uD560\uAE4C\uC694?",
     opts:["\uAE30\uC220 \uD601\uC2E0","\uACBD\uBE44 \uC808\uAC10","\uAE08\uC561 \uC778\uC0C1","\uACBD\uC81C\uD559 \uACF5\uBD80"],
     ans:"\uAE30\uC220 \uD601\uC2E0",
     hint:"Think about what drives a company to stay ahead of rivals in the global market."},

    {type:"teach", trg:"\uAC70\uC561", src:"a large sum of money", pos:"noun", gender:null,
     note:"Sino-Korean: huge (巨) + amount (額).\nA very large financial amount.",
     example:"A: \uAC70\uC561\uC758 \uD22C\uC790\uB97C \uBC1B\uC558\uC5B4\uC694.\nB: \uC5BC\uB9C8\uB098 \uBC1B\uC558\uC5B4\uC694?\nA: 100\uC5B5 \uC6D0\uC774\uC5D0\uC694.\nB: \uAC70\uC561\uC774\uB124\uC694! \uCD95\uD558\uD574\uC694.",
     exampleSrc:"A: I received a large investment.\nB: How much did you receive?\nA: 10 billion won.\nB: That is a huge sum! Congratulations.",
     funFact:"In Korean, 억 (hundred million) is a common large number unit. A 거액 typically starts at several 억 and goes up."},

    {type:"teach", trg:"\uAE08\uC561", src:"amount (of money); sum", pos:"noun", gender:null,
     note:"Sino-Korean: gold/money (金) + amount (額).",
     example:"A: \uCD1D \uAE08\uC561\uC774 \uC5BC\uB9C8\uC608\uC694?\nB: 50\uB9CC \uC6D0\uC774\uC5D0\uC694.\nA: \uAE08\uC561\uC774 \uC608\uC0C1\uBCF4\uB2E4 \uB192\uB124\uC694.\nB: \uD560\uC778\uC744 \uBC1B\uC744 \uC218 \uC788\uC5B4\uC694.",
     exampleSrc:"A: What is the total amount?\nB: It is 500,000 won.\nA: The amount is higher than expected.\nB: You can get a discount.",
     funFact:"금액 is the standard formal word for monetary amount. 가격 (price) is for per-item cost, while 금액 is for total sums."},

    {type:"teach", trg:"\uAE08\uACE0", src:"safe; vault; treasury", pos:"noun", gender:null,
     note:"Sino-Korean: gold/money (金) + warehouse (庫).\nA secure storage for valuables.",
     example:"A: \uC911\uC694\uD55C \uC11C\uB958\uB97C \uAE08\uACE0\uC5D0 \uBCF4\uAD00\uD574\uC694.\nB: \uAE08\uACE0 \uBE44\uBC00\uBC88\uD638\uB97C \uC544\uC138\uC694?\nA: \uB124, \uC800\uB9CC \uC54C\uACE0 \uC788\uC5B4\uC694.\nB: \uC548\uC804\uD558\uAC8C \uBCF4\uAD00\uD558\uC138\uC694.",
     exampleSrc:"A: I keep important documents in the safe.\nB: Do you know the safe's password?\nA: Yes, only I know it.\nB: Keep them safely stored.",
     funFact:"금고 also refers to a financial reserve: 국고 (national treasury). The concept of a 'gold warehouse' has ancient roots in Korean governance."},

    {type:"teach", trg:"\uACC4\uC88C", src:"bank account", pos:"noun", gender:null,
     note:"Sino-Korean: calculate (計) + seat/position (座).\nYour 'seat' in the banking system.",
     example:"A: \uACC4\uC88C\uB97C \uAC1C\uC124\uD558\uACE0 \uC2F6\uC5B4\uC694.\nB: \uC2E0\uBD84\uC99D\uC744 \uAC00\uC838\uC624\uC138\uC694.\nA: \uACC4\uC88C \uBC88\uD638\uB97C \uC54C\uB824 \uC8FC\uC138\uC694.\nB: \uBAA8\uBC14\uC77C \uC571\uC5D0\uC11C \uD655\uC778\uD558\uC138\uC694.",
     exampleSrc:"A: I want to open a bank account.\nB: Please bring your ID.\nA: Please tell me the account number.\nB: Check it on the mobile app.",
     funFact:"Korean banking is highly digital. 계좌이체 (bank transfer) is the most common payment method, often done via smartphone apps."},

    {type:"teach", trg:"\uAC00\uC785", src:"enrollment; subscription; joining", pos:"noun", gender:null,
     note:"Sino-Korean: add (加) + enter (入).\nJoining a group, service, or plan.",
     example:"A: \uBCF4\uD5D8 \uAC00\uC785\uC744 \uD558\uACE0 \uC2F6\uC5B4\uC694.\nB: \uC5B4\uB5A4 \uBCF4\uD5D8\uC744 \uC6D0\uD558\uC138\uC694?\nA: \uAC74\uAC15 \uBCF4\uD5D8\uC5D0 \uAC00\uC785\uD558\uACE0 \uC2F6\uC5B4\uC694.\nB: \uAC00\uC785 \uC870\uAC74\uC744 \uC124\uBA85\uD574 \uB4DC\uB9B4\uAC8C\uC694.",
     exampleSrc:"A: I want to sign up for insurance.\nB: What kind of insurance do you want?\nA: I want to enroll in health insurance.\nB: Let me explain the enrollment conditions.",
     funFact:"가입 is used everywhere in modern Korean: 회원 가입 (membership signup), 핸드폰 가입 (phone plan subscription)."},

    {type:"fb",
     s:"\uC740\uD589\uC5D0\uC11C {1}\uB97C \uAC1C\uC124\uD588\uC5B4\uC694.",
     a:["\uACC4\uC88C"],
     opts:["\uACC4\uC88C","\uAE08\uACE0","\uAE08\uC561","\uACBD\uBE44"],
     hint:"This is your personal financial 'seat' at a bank where your money is stored.",
     sSrc:"I opened a {1} at the bank."},

    {type:"teach", trg:"\uAC00\uC785\uC790", src:"subscriber; member; enrollee", pos:"noun", gender:null,
     note:"Sino-Korean: enrollment (加入) + person (者).",
     example:"A: \uAC00\uC785\uC790 \uC218\uAC00 100\uB9CC \uBA85\uC744 \uB118\uC5C8\uC5B4\uC694.\nB: \uB300\uB2E8\uD55C \uC131\uACF5\uC774\uB124\uC694.\nA: \uAC00\uC785\uC790\uC5D0\uAC8C \uD61C\uD0DD\uC744 \uB4DC\uB824\uC694.\nB: \uC5B4\uB5A4 \uD61C\uD0DD\uC774\uC5D0\uC694?",
     exampleSrc:"A: The number of subscribers exceeded 1 million.\nB: That is a great success.\nA: We want to offer benefits to subscribers.\nB: What benefits?",
     funFact:"The -자 (者) suffix means 'person who': 연구자 (researcher), 소비자 (consumer), 제작자 (producer). Very productive in Sino-Korean."},

    {type:"teach", trg:"\uAC00\uC785\uD558\uB2E4", src:"to join; to subscribe; to enroll", pos:"verb", gender:null,
     note:"Verb form of 가입. To actively sign up.",
     example:"A: \uD5EC\uC2A4\uC7A5\uC5D0 \uAC00\uC785\uD588\uC5B4\uC694.\nB: \uC5B4\uB5A4 \uD504\uB85C\uADF8\uB7A8\uC5D0 \uAC00\uC785\uD588\uC5B4\uC694?\nA: 6\uAC1C\uC6D4 \uD68C\uC6D0\uAD8C\uC5D0 \uAC00\uC785\uD588\uC5B4\uC694.\nB: \uC6B4\uB3D9 \uAF2D \uD558\uC138\uC694!",
     exampleSrc:"A: I joined a gym.\nB: Which program did you enroll in?\nA: I enrolled in a 6-month membership.\nB: Make sure to exercise!",
     funFact:"가입하다 is the standard verb for any signup process. Online forms always have a 가입하기 (Sign Up) button."},

    {type:"teach", trg:"\uAD6C\uC785", src:"purchase; procurement", pos:"noun", gender:null,
     note:"Sino-Korean: seek (求) + enter/obtain (入).\nFormal word for buying.",
     example:"A: \uC0C8 \uCEF4\uD4E8\uD130\uB97C \uAD6C\uC785\uD560 \uACC4\uD68D\uC774\uC5D0\uC694.\nB: \uC608\uC0B0\uC774 \uC5BC\uB9C8\uC608\uC694?\nA: 150\uB9CC \uC6D0 \uC815\uB3C4\uC608\uC694.\nB: \uC628\uB77C\uC778 \uAD6C\uC785\uC774 \uB354 \uC2F8\uC694.",
     exampleSrc:"A: I plan to purchase a new computer.\nB: What is the budget?\nA: About 1.5 million won.\nB: Online purchase is cheaper.",
     funFact:"구입 is more formal than 사다 (to buy). Business documents always use 구입: 물품 구입 (goods procurement), 구입 내역 (purchase history)."},

    {type:"teach", trg:"\uAD6C\uC785\uD558\uB2E4", src:"to purchase; to procure", pos:"verb", gender:null,
     note:"Verb form of 구입. Formal way to say 'buy.'",
     example:"A: \uC5B4\uB514\uC5D0\uC11C \uAD6C\uC785\uD558\uC168\uC5B4\uC694?\nB: \uBC31\uD654\uC810\uC5D0\uC11C \uAD6C\uC785\uD588\uC5B4\uC694.\nA: \uC601\uC218\uC99D\uC744 \uBCF4\uAD00\uD558\uC138\uC694.\nB: \uD658\uBD88\uC774 \uD544\uC694\uD560 \uC218 \uC788\uC73C\uB2C8\uAE4C\uC694.",
     exampleSrc:"A: Where did you purchase it?\nB: I purchased it at the department store.\nA: Keep the receipt.\nB: In case you need a refund.",
     funFact:"구입하다 vs 구매하다: both mean 'to purchase,' but 구매 is slightly more formal and used more in corporate contexts."},

    {type:"teach", trg:"\uAC12\uC2F8\uB2E4", src:"to be cheap; to be inexpensive", pos:"adj", gender:null,
     note:"Pure Korean compound: price (값) + cheap (싸다).",
     example:"A: \uC774 \uC637\uC740 \uAC12\uC2F8\uC694.\nB: \uD488\uC9C8\uC740 \uAD1C\uCC2E\uC544\uC694?\nA: \uAC12\uC2F8\uC9C0\uB9CC \uD488\uC9C8\uC774 \uC88B\uC544\uC694.\nB: \uC5B4\uB514\uC11C \uC0C0\uC5B4\uC694?",
     exampleSrc:"A: These clothes are cheap.\nB: Is the quality okay?\nA: They are cheap but good quality.\nB: Where did you buy them?",
     funFact:"값싸다 is a compound adjective combining 값 (price/value) and 싸다 (cheap). It is used both literally and figuratively: 값싼 변명 (cheap excuse)."},

    {type:"teach", trg:"\uACF5\uC9DC", src:"free of charge; freebie", pos:"noun", gender:null,
     note:"Pure Korean word. Something given without payment.",
     example:"A: \uC774\uAC70 \uACF5\uC9DC\uC608\uC694?\nB: \uB124, \uBB34\uB8CC \uC0D8\uD50C\uC774\uC5D0\uC694.\nA: \uACF5\uC9DC\uCE58\uACE0\uB294 \uD488\uC9C8\uC774 \uC88B\uB124\uC694.\nB: \uD64D\uBCF4\uC6A9 \uC81C\uD488\uC774\uC5D0\uC694.",
     exampleSrc:"A: Is this free?\nB: Yes, it is a free sample.\nA: The quality is good for a freebie.\nB: It is a promotional product.",
     funFact:"The expression 공짜 좋아하는 사람 (someone who loves freebies) is a common, slightly teasing description. 세상에 공짜는 없다 means 'nothing in this world is free.'"},

    {type:"teach", trg:"\uACC4\uC0B0\uAE30", src:"calculator", pos:"noun", gender:null,
     note:"Sino-Korean: calculate (計) + count (算) + device (機).",
     example:"A: \uACC4\uC0B0\uAE30 \uC788\uC5B4\uC694?\nB: \uD578\uB4DC\uD3F0\uC73C\uB85C \uACC4\uC0B0\uD558\uC138\uC694.\nA: \uBCF5\uC7A1\uD55C \uACC4\uC0B0\uC740 \uACC4\uC0B0\uAE30\uAC00 \uD544\uC694\uD574\uC694.\nB: \uACF5\uD559\uC6A9 \uACC4\uC0B0\uAE30\uAC00 \uC788\uC5B4\uC694.",
     exampleSrc:"A: Do you have a calculator?\nB: Calculate on your phone.\nA: Complex calculations need a calculator.\nB: I have an engineering calculator.",
     funFact:"The -기 (機) suffix means 'machine' or 'device': 세탁기 (washer), 냉장고 actually uses -고 (庫, storage), not -기."},

    {type:"teach", trg:"\uACF5\uAE09", src:"supply; provision", pos:"noun", gender:null,
     note:"Sino-Korean: public/provide (供) + give (給).\nThe economic concept of supply.",
     example:"A: \uC218\uC694\uC640 \uACF5\uAE09\uC758 \uADE0\uD615\uC774 \uC911\uC694\uD574\uC694.\nB: \uACF5\uAE09\uC774 \uBD80\uC871\uD558\uBA74 \uAC00\uACA9\uC774 \uC62C\uB77C\uC694.\nA: \uC804\uAE30 \uACF5\uAE09\uC774 \uBD88\uC548\uC815\uD574\uC694.\nB: \uB300\uCC45\uC774 \uD544\uC694\uD574\uC694.",
     exampleSrc:"A: Balance of demand and supply is important.\nB: When supply is insufficient, prices rise.\nA: The electricity supply is unstable.\nB: Countermeasures are needed.",
     funFact:"수요와 공급 (supply and demand) is the foundational concept of economics. Every Korean economics textbook starts with this pair."},

    {type:"teach", trg:"\uACF5\uC5C5", src:"manufacturing; industry", pos:"noun", gender:null,
     note:"Sino-Korean: work/craft (工) + business (業).\nThe industrial/manufacturing sector.",
     example:"A: \uC774 \uC9C0\uC5ED\uC740 \uACF5\uC5C5\uC774 \uBC1C\uB2EC\uD588\uC5B4\uC694.\nB: \uC5B4\uB5A4 \uACF5\uC5C5\uC774\uC694?\nA: \uC790\uB3D9\uCC28 \uACF5\uC5C5\uC774\uC5D0\uC694.\nB: \uD55C\uAD6D \uC790\uB3D9\uCC28\uAC00 \uC138\uACC4\uC801\uC774\uC8E0.",
     exampleSrc:"A: This region has developed industry.\nB: What kind of industry?\nA: Automobile manufacturing.\nB: Korean cars are world-class.",
     funFact:"공업 vs 산업: 공업 specifically means manufacturing/industrial production, while 산업 (industry) is broader, including services."},

    {type:"teach", trg:"\uAD6D\uC0B0", src:"domestically produced; made in Korea", pos:"noun", gender:null,
     note:"Sino-Korean: country (國) + produce (産).",
     example:"A: \uC774 \uC81C\uD488\uC740 \uAD6D\uC0B0\uC774\uC5D0\uC694?\nB: \uB124, \uAD6D\uC0B0 \uC81C\uD488\uC774\uC5D0\uC694.\nA: \uAD6D\uC0B0\uD488\uC744 \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774 \uC88B\uC8E0.\nB: \uD488\uC9C8\uB3C4 \uC88B\uACE0 \uACBD\uC81C\uC5D0\uB3C4 \uB3C4\uC6C0\uC774 \uB3FC\uC694.",
     exampleSrc:"A: Is this product domestically produced?\nB: Yes, it is a domestic product.\nA: It is good to use domestic products.\nB: The quality is good and it helps the economy.",
     funFact:"국산 pride (신토불이: 'body and soil are one') was a 1990s Korean movement encouraging domestic product consumption. The sentiment persists today."},

    {type:"mc",
     q:"\uAC00\uACA9\uC774 \uC5C6\uC774 \uBC1B\uC744 \uC218 \uC788\uB294 \uAC83\uC744 \uBB50\uB77C\uACE0 \uD574\uC694?",
     opts:["\uACF5\uC9DC","\uAC70\uC561","\uAE08\uC561","\uACF5\uAE09"],
     ans:"\uACF5\uC9DC",
     hint:"This pure Korean word describes something you receive without paying anything at all."},

    {type:"match", pairs:[
      {trg:"\uACBD\uC81C\uB825", src:"economic power"},
      {trg:"\uACBD\uC7C1\uB825", src:"competitiveness"},
      {trg:"\uACC4\uC88C", src:"bank account"},
      {trg:"\uAD6C\uC785", src:"purchase"},
      {trg:"\uACF5\uAE09", src:"supply"},
      {trg:"\uAD6D\uC0B0", src:"domestic product"}
    ]}
  ]
};
export default LESSON_7;
