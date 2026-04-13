// B2 Lesson 15: National Identity
// Words: 국가적, 국기, 국내선, 국내외, 국립, 국민적, 국사, 국어, 국적, 국제선,
//        국제적, 국제화, 강요하다, 강조, 각기, 각자, 개개인, 개국, 건넌방, 결승

const LESSON_15 = {
  id:"kov2_b2_l15", title:"국가와 정체성", icon:"\uD83C\uDDF0\uD83C\uDDF7", xp:15, board:true,
  steps:[
    {type:"intro", title:"National Identity",
     desc:"Learn vocabulary related to nationality, international relations, and collective identity. These words are essential for TOPIK II passages about society, politics, and globalization.",
     goals:["Learn 20 national identity and international vocabulary words","Master the 국 (國, country) compound family","Discuss national and international topics formally"]},

    {type:"teach", trg:"\uAD6D\uAC00\uC801", src:"national; state-level", pos:"noun", gender:null,
     note:"Sino-Korean: country (國) + house (家) + target (的).\nPertaining to the entire nation.",
     example:"A: \uC774\uAC83\uC740 \uAD6D\uAC00\uC801 \uBB38\uC81C\uC608\uC694.\nB: \uAD6D\uAC00\uC801 \uB300\uC751\uC774 \uD544\uC694\uD574\uC694.\nA: \uAD6D\uAC00\uC801 \uD589\uC0AC\uAC00 \uC5F4\uB824\uC694.\nB: \uBAA8\uB4E0 \uAD6D\uBBFC\uC774 \uCC38\uC5EC\uD574\uC694.",
     exampleSrc:"A: This is a national issue.\nB: A state-level response is needed.\nA: A national event is being held.\nB: All citizens participate.",
     funFact:"국가적 signals something affecting the entire country. 국가적 위기 (national crisis) and 국가적 행사 (national event) are common collocations."},

    {type:"teach", trg:"\uAD6D\uAE30", src:"national flag", pos:"noun", gender:null,
     note:"Sino-Korean: country (國) + flag (旗).\nThe flag representing a nation.",
     example:"A: \uD55C\uAD6D\uC758 \uAD6D\uAE30\uB294 \uD0DC\uADF9\uAE30\uC608\uC694.\nB: \uD0DC\uADF9\uAE30\uC758 \uC758\uBBF8\uB97C \uC54C\uC544\uC694?\nA: \uC74C\uC591\uACFC \uC870\uD654\uB97C \uC0C1\uC9D5\uD574\uC694.\nB: \uC544\uB984\uB2E4\uC6B4 \uAD6D\uAE30\uC608\uC694.",
     exampleSrc:"A: Korea's national flag is the Taegeukgi.\nB: Do you know the meaning of the Taegeukgi?\nA: It symbolizes yin-yang and harmony.\nB: It is a beautiful flag.",
     funFact:"태극기 (Taegeukgi) combines the yin-yang symbol with four trigrams from the I Ching. It represents cosmic balance and national ideals."},

    {type:"teach", trg:"\uAD6D\uB0B4\uC120", src:"domestic flight/route", pos:"noun", gender:null,
     note:"Sino-Korean: country (國) + inside (內) + line (線).\nRoutes within the country.",
     example:"A: \uAD6D\uB0B4\uC120 \uBE44\uD589\uAE30 \uD45C\uB97C \uC0C0\uC5B4\uC694.\nB: \uC5B4\uB514\uB85C \uAC00\uC138\uC694?\nA: \uC11C\uC6B8\uC5D0\uC11C \uC81C\uC8FC\uB85C\uC694.\nB: \uAD6D\uB0B4\uC120\uC740 1\uC2DC\uAC04\uC774\uBA74 \uB3FC\uC694.",
     exampleSrc:"A: I bought a domestic flight ticket.\nB: Where are you going?\nA: From Seoul to Jeju.\nB: Domestic flights only take one hour.",
     funFact:"국내선 vs 국제선: 선 (線, line) is used for transportation routes. Airports have separate 국내선 and 국제선 terminals."},

    {type:"teach", trg:"\uAD6D\uB0B4\uC678", src:"domestic and international; at home and abroad", pos:"noun", gender:null,
     note:"Sino-Korean: country (國) + inside (內) + outside (外).\nBoth within and outside the country.",
     example:"A: \uAD6D\uB0B4\uC678\uC5D0\uC11C \uC778\uAE30\uAC00 \uC788\uC5B4\uC694.\nB: \uAD6D\uB0B4\uC678 \uD314\uB9E4\uB7C9\uC774 \uB9CE\uC544\uC694?\nA: \uAD6D\uB0B4\uC678 \uC5F0\uAD6C\uC790\uB4E4\uC774 \uCC38\uC5EC\uD574\uC694.\nB: \uAD6D\uC81C\uC801\uC778 \uD611\uB825\uC774\uB124\uC694.",
     exampleSrc:"A: It is popular both domestically and internationally.\nB: Are sales high at home and abroad?\nA: Researchers from home and abroad participate.\nB: It is international cooperation.",
     funFact:"국내외 is a concise way to say 'both inside and outside the country.' Korean excels at these compressed compound forms."},

    {type:"teach", trg:"\uAD6D\uB9BD", src:"national; state-run; government-established", pos:"noun", gender:null,
     note:"Sino-Korean: country (國) + establish (立).\nEstablished by the national government.",
     example:"A: \uAD6D\uB9BD \uBC15\uBB3C\uAD00\uC5D0 \uAC00 \uBD24\uC5B4\uC694.\nB: \uC5B4\uB5A4 \uC804\uC2DC\uAC00 \uC788\uC5C8\uC5B4\uC694?\nA: \uAD6D\uB9BD \uB300\uD559\uAD50\uC5D0 \uC9C0\uC6D0\uD588\uC5B4\uC694.\nB: \uAD6D\uB9BD\uC740 \uB4F1\uB85D\uAE08\uC774 \uC800\uB834\uD558\uC8E0.",
     exampleSrc:"A: I visited the National Museum.\nB: What exhibitions were there?\nA: I applied to a national university.\nB: National universities have lower tuition.",
     funFact:"국립 vs 사립: 국립 (national/public) and 사립 (private) universities have different tuition structures. 국립 is generally much cheaper."},

    {type:"mc",
     q:"\uD55C\uAD6D\uC758 \uAD6D\uAE30 \uC774\uB984\uC740 \uBB50\uC608\uC694?",
     opts:["\uD0DC\uADF9\uAE30","\uC77C\uC7A5\uAE30","\uC131\uC870\uAE30","\uD611\uB825\uAE30"],
     ans:"\uD0DC\uADF9\uAE30",
     hint:"This flag features the yin-yang symbol in the center, representing cosmic balance."},

    {type:"teach", trg:"\uAD6D\uBBFC\uC801", src:"popular (nationwide); of the people", pos:"noun", gender:null,
     note:"Sino-Korean: country (國) + people (民) + target (的).\nEnjoyed or supported by the whole nation.",
     example:"A: \uAD6D\uBBFC\uC801 \uAD00\uC2EC\uC774 \uB192\uC544\uC694.\nB: \uBAA8\uB4E0 \uAD6D\uBBFC\uC774 \uAD00\uC2EC\uC744 \uAC00\uC838\uC694.\nA: \uAD6D\uBBFC\uC801 \uC601\uC6C5\uC774 \uB418\uC5C8\uC5B4\uC694.\nB: \uC628 \uAD6D\uBBFC\uC774 \uC751\uC6D0\uD588\uC8E0.",
     exampleSrc:"A: There is high national interest.\nB: The whole nation is paying attention.\nA: They became a national hero.\nB: The entire nation cheered.",
     funFact:"국민적 영웅 (national hero) is used for sports figures and cultural icons who unite the country: 손흥민, BTS, etc."},

    {type:"teach", trg:"\uAD6D\uC0AC", src:"national history", pos:"noun", gender:null,
     note:"Sino-Korean: country (國) + history (史).\nThe study of one's own nation's history.",
     example:"A: \uAD6D\uC0AC \uC2DC\uD5D8\uC744 \uBD10\uC57C \uD574\uC694.\nB: \uC5B4\uB5A4 \uC2DC\uB300\uB97C \uACF5\uBD80\uD574\uC694?\nA: \uC870\uC120 \uC2DC\uB300\uBD80\uD130 \uACF5\uBD80\uD558\uACE0 \uC788\uC5B4\uC694.\nB: \uAD6D\uC0AC\uB97C \uC544\uB294 \uAC83\uC774 \uC911\uC694\uD574\uC694.",
     exampleSrc:"A: I need to take a national history exam.\nB: Which era are you studying?\nA: I am studying from the Joseon era.\nB: Knowing national history is important.",
     funFact:"한국사 (Korean history) is a required subject on the Korean civil service exam. 국사편찬위원회 oversees official historical records."},

    {type:"teach", trg:"\uAD6D\uC5B4", src:"national language; Korean language", pos:"noun", gender:null,
     note:"Sino-Korean: country (國) + language (語).\nThe official language of the country.",
     example:"A: \uAD6D\uC5B4 \uC2DC\uD5D8\uC774 \uC5B4\uB824\uC6E0\uC5B4\uC694.\nB: \uBB38\uBC95\uC774 \uC5B4\uB824\uC6E0\uC5B4\uC694?\nA: \uAD6D\uC5B4\uB97C \uC815\uD655\uD558\uAC8C \uC0AC\uC6A9\uD574\uC57C \uD574\uC694.\nB: \uAD6D\uC5B4 \uC0AC\uB791\uC774 \uC911\uC694\uD558\uC8E0.",
     exampleSrc:"A: The Korean language exam was difficult.\nB: Was the grammar hard?\nA: We should use the national language correctly.\nB: Loving our language is important.",
     funFact:"국어 in Korea means Korean specifically. In school, the subject 국어 covers Korean grammar, literature, and composition."},

    {type:"teach", trg:"\uAD6D\uC801", src:"nationality; citizenship", pos:"noun", gender:null,
     note:"Sino-Korean: country (國) + registration (籍).\nLegal membership of a nation.",
     example:"A: \uAD6D\uC801\uC774 \uC5B4\uB514\uC608\uC694?\nB: \uD55C\uAD6D \uAD6D\uC801\uC774\uC5D0\uC694.\nA: \uC774\uC911 \uAD6D\uC801\uC774 \uAC00\uB2A5\uD574\uC694?\nB: \uB098\uB77C\uB9C8\uB2E4 \uADDC\uC815\uC774 \uB2EC\uB77C\uC694.",
     exampleSrc:"A: What is your nationality?\nB: I have Korean nationality.\nA: Is dual citizenship possible?\nB: Regulations differ by country.",
     funFact:"Korea traditionally did not allow dual nationality, but recent laws permit it in limited cases: 이중국적 (dual citizenship) is increasingly debated."},

    {type:"teach", trg:"\uAD6D\uC81C\uC120", src:"international flight/route", pos:"noun", gender:null,
     note:"Sino-Korean: international (國際) + line (線).",
     example:"A: \uAD6D\uC81C\uC120 \uD56D\uACF5\uAD8C\uC744 \uC608\uC57D\uD588\uC5B4\uC694.\nB: \uC5B4\uB514\uB85C \uAC00\uC138\uC694?\nA: \uC77C\uBCF8\uC73C\uB85C\uC694.\nB: \uAD6D\uC81C\uC120\uC740 \uBA87 \uC2DC\uAC04 \uC804\uC5D0 \uAC00\uC57C \uD574\uC694.",
     exampleSrc:"A: I booked an international flight ticket.\nB: Where are you going?\nA: To Japan.\nB: You need to arrive at the airport hours before for international flights.",
     funFact:"Incheon International Airport (인천국제공항) is consistently ranked among the world's best airports. Its 국제선 terminal is massive."},

    {type:"fb",
     s:"\uC774 \uC81C\uD488\uC740 {1}\uC5D0\uC11C \uC778\uAE30\uAC00 \uC788\uC5B4\uC694.",
     a:["\uAD6D\uB0B4\uC678"],
     opts:["\uAD6D\uB0B4\uC678","\uAD6D\uB0B4\uC120","\uAD6D\uC81C\uC120","\uAD6D\uC0AC"],
     hint:"This compound word means both inside the country and outside it, covering everywhere.",
     sSrc:"This product is popular {1}."},

    {type:"teach", trg:"\uAD6D\uC81C\uC801", src:"international; global", pos:"noun", gender:null,
     note:"Sino-Korean: international (國際) + target (的).",
     example:"A: \uAD6D\uC81C\uC801\uC778 \uD611\uB825\uC774 \uD544\uC694\uD574\uC694.\nB: \uAD6D\uC81C\uC801 \uBB38\uC81C\uB294 \uD568\uAED8 \uD574\uACB0\uD574\uC57C \uC8E0.\nA: \uAD6D\uC81C\uC801\uC778 \uAC10\uAC01\uC744 \uD0A4\uC6CC\uC57C \uD574\uC694.\nB: \uC138\uACC4\uD654 \uC2DC\uB300\uB2C8\uAE4C\uC694.",
     exampleSrc:"A: International cooperation is needed.\nB: Global problems must be solved together.\nA: We need to develop a global perspective.\nB: Because it is the era of globalization.",
     funFact:"국제적 is frequently used with sense/perspective: 국제적 감각 (international sensibility), 국제적 명성 (international reputation)."},

    {type:"teach", trg:"\uAD6D\uC81C\uD654", src:"internationalization; globalization", pos:"noun", gender:null,
     note:"Sino-Korean: international (國際) + become (化).\nThe process of becoming global.",
     example:"A: \uAD6D\uC81C\uD654 \uC2DC\uB300\uC5D0 \uC0B4\uACE0 \uC788\uC5B4\uC694.\nB: \uC678\uAD6D\uC5B4 \uB2A5\uB825\uC774 \uC911\uC694\uD574\uC84C\uC8E0.\nA: \uAD6D\uC81C\uD654\uC758 \uC7A5\uC810\uC740 \uBB50\uC608\uC694?\nB: \uBB38\uD654 \uAD50\uB958\uAC00 \uD65C\uBC1C\uD574\uC84C\uC5B4\uC694.",
     exampleSrc:"A: We live in an era of internationalization.\nB: Foreign language ability has become important.\nA: What are the advantages of internationalization?\nB: Cultural exchange has become active.",
     funFact:"세계화 (globalization) and 국제화 (internationalization) are subtly different. 세계화 emphasizes the global trend, 국제화 emphasizes a nation opening up."},

    {type:"teach", trg:"\uAC15\uC694\uD558\uB2E4", src:"to force; to coerce; to compel", pos:"verb", gender:null,
     note:"Sino-Korean: strong (強) + demand (要) + do (하다).",
     example:"A: \uC758\uACAC\uC744 \uAC15\uC694\uD558\uBA74 \uC548 \uB3FC\uC694.\nB: \uC790\uC720\uB86D\uAC8C \uC120\uD0DD\uD574\uC57C \uD574\uC694.\nA: \uCC38\uC5EC\uB97C \uAC15\uC694\uD558\uC9C0 \uB9C8\uC138\uC694.\nB: \uC790\uBC1C\uC801 \uCC38\uC5EC\uAC00 \uC911\uC694\uD574\uC694.",
     exampleSrc:"A: You should not force opinions on others.\nB: People should choose freely.\nA: Do not compel participation.\nB: Voluntary participation is important.",
     funFact:"강요 is a strong negative word in Korean discourse. 인권 (human rights) discussions often center on what constitutes 강요 vs 권유 (recommendation)."},

    {type:"teach", trg:"\uAC15\uC870", src:"emphasis; stress; highlighting", pos:"noun", gender:null,
     note:"Sino-Korean: strong (強) + adjust (調).\nPlacing special importance on something.",
     example:"A: \uAD50\uC721\uC758 \uC911\uC694\uC131\uC744 \uAC15\uC870\uD588\uC5B4\uC694.\nB: \uC5B4\uB5A4 \uC810\uC744 \uAC15\uC870\uD588\uC5B4\uC694?\nA: \uCC3D\uC758\uC131\uC744 \uAC15\uC870\uD588\uC5B4\uC694.\nB: \uC911\uC694\uD55C \uAC15\uC870\uC810\uC774\uB124\uC694.",
     exampleSrc:"A: They emphasized the importance of education.\nB: What did they emphasize?\nA: They emphasized creativity.\nB: That is an important emphasis.",
     funFact:"강조하다 (to emphasize) is one of the most common verbs in formal Korean. TOPIK essays often ask you to 강조 a key point."},

    {type:"teach", trg:"\uAC01\uAE30", src:"each; individually; respectively", pos:"adv", gender:null,
     note:"Sino-Korean: each (各) + self (己).\nEach person or thing separately.",
     example:"A: \uD559\uC0DD\uB4E4\uC774 \uAC01\uAE30 \uB2E4\uB978 \uC758\uACAC\uC744 \uBC1C\uD45C\uD588\uC5B4\uC694.\nB: \uB2E4\uC591\uD55C \uC758\uACAC\uC774\uB124\uC694.\nA: \uAC01\uAE30 \uB2E4\uB978 \uAE38\uC744 \uAC14\uC5B4\uC694.\nB: \uAC01\uC790\uC758 \uC120\uD0DD\uC744 \uC874\uC911\uD574\uC694.",
     exampleSrc:"A: Students each presented different opinions.\nB: Such diverse opinions.\nA: Each went their own way.\nB: Respect each person's choice.",
     funFact:"각기 is more formal than 각각 (each). In everyday speech, 각각 is more common, while 각기 appears in writing."},

    {type:"teach", trg:"\uAC01\uC790", src:"each person; everyone individually", pos:"noun", gender:null,
     note:"Sino-Korean: each (各) + self (自).\nEach individual person.",
     example:"A: \uAC01\uC790 \uC5ED\uD560\uC744 \uB098\uB220\uC694.\nB: \uC81C \uC5ED\uD560\uC740 \uBB50\uC608\uC694?\nA: \uAC01\uC790 \uB9E1\uC740 \uBC14\uB97C \uD569\uC2DC\uB2E4.\nB: \uAC01\uC790\uC758 \uCC45\uC784\uC744 \uB2E4\uD569\uC2DC\uB2E4.",
     exampleSrc:"A: Let us divide the roles among ourselves.\nB: What is my role?\nA: Everyone does their assigned part.\nB: Let us fulfill our individual responsibilities.",
     funFact:"각자 is used with 도생 in the famous phrase 각자도생 (each person surviving on their own), describing competitive Korean society."},

    {type:"teach", trg:"\uAC1C\uAC1C\uC778", src:"each individual person", pos:"noun", gender:null,
     note:"Sino-Korean: each (個) + each (個) + person (人).\nTriple emphasis on individuality.",
     example:"A: \uAC1C\uAC1C\uC778\uC758 \uB2A5\uB825\uC774 \uB2E4\uB97C\uC694.\nB: \uAC1C\uAC1C\uC778\uC758 \uD2B9\uC131\uC744 \uC874\uC911\uD574\uC57C \uD574\uC694.\nA: \uAC1C\uAC1C\uC778\uC758 \uB178\uB825\uC774 \uC911\uC694\uD574\uC694.\nB: \uB9DE\uC544\uC694, \uBAA8\uB450\uAC00 \uD2B9\uBCC4\uD574\uC694.",
     exampleSrc:"A: Each individual's abilities are different.\nB: We should respect each individual's characteristics.\nA: Each individual's effort is important.\nB: That is right, everyone is special.",
     funFact:"개개인 emphasizes individuality even more than 각자 or 개인. It is used when stressing that every single person matters."},

    {type:"teach", trg:"\uACB0\uC2B9", src:"finals; championship match", pos:"noun", gender:null,
     note:"Sino-Korean: decide (決) + win (勝).\nThe final match determining the winner.",
     example:"A: \uACB0\uC2B9\uC5D0 \uC9C4\uCD9C\uD588\uC5B4\uC694!\nB: \uCD95\uD558\uD574\uC694! \uACB0\uC2B9\uC774 \uC5B8\uC81C\uC608\uC694?\nA: \uB2E4\uC74C \uC8FC \uD1A0\uC694\uC77C\uC774\uC5D0\uC694.\nB: \uACB0\uC2B9\uC5D0\uC11C \uC6B0\uC2B9\uD558\uAE38 \uBC14\uB77C\uC694!",
     exampleSrc:"A: We made it to the finals!\nB: Congratulations! When is the final?\nA: Next Saturday.\nB: I hope you win the championship!",
     funFact:"결승전 (finals match) is a national event in Korea. The entire country watches 결승 games for soccer, baseball, and esports."},

    {type:"mc",
     q:"\uC758\uACAC\uC744 \uC5B5\uC9C0\uB85C \uB530\uB974\uAC8C \uD558\uB294 \uAC83\uC744 \uBB50\uB77C\uACE0 \uD574\uC694?",
     opts:["\uAC15\uC694","\uAC15\uC870","\uAC01\uC790","\uACB0\uC2B9"],
     ans:"\uAC15\uC694",
     hint:"This word means making someone do something against their will, using pressure or coercion."},

    {type:"match", pairs:[
      {trg:"\uAD6D\uAE30", src:"national flag"},
      {trg:"\uAD6D\uC801", src:"nationality"},
      {trg:"\uAD6D\uC81C\uD654", src:"globalization"},
      {trg:"\uAC15\uC694", src:"coercion"},
      {trg:"\uAC15\uC870", src:"emphasis"},
      {trg:"\uACB0\uC2B9", src:"finals"}
    ]}
  ]
};
export default LESSON_15;
