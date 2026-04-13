// B2 Lesson 20: Everyday Expressions & Remaining Words
// Words: 글쎄요, 귀찮다, 귀하다, 귀가, 귀가하다, 귀국, 귀국하다, 균형, 갑, 게,
//        게으르다, 건넌방, 고모부, 고무신, 골, 공주, 공항버스, 그나마, 그래야, 긋다

const LESSON_20 = {
  id:"kov2_b2_l20", title:"일상 표현", icon:"\uD83D\uDDE3\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Everyday Expressions",
     desc:"Learn miscellaneous everyday vocabulary covering social life, family, travel, and common expressions. These words round out your B2 foundation for natural Korean conversation and TOPIK preparation.",
     goals:["Learn 20 everyday and conversational vocabulary words","Master common expressions for daily situations","Use natural Korean in varied social contexts"]},

    {type:"teach", trg:"\uAE00\uC38E\uC694", src:"well...; hmm; I'm not sure", pos:"intj", gender:null,
     note:"Pure Korean interjection. Expressing hesitation or uncertainty.",
     example:"A: \uC774 \uBB38\uC81C\uC5D0 \uB300\uD574 \uC5B4\uB5BB\uAC8C \uC0DD\uAC01\uD558\uC138\uC694?\nB: \uAE00\uC38E\uC694, \uC880 \uB354 \uC0DD\uAC01\uD574 \uBD10\uC57C \uD560 \uAC83 \uAC19\uC544\uC694.\nA: \uB0B4\uC77C \uBE44\uAC00 \uC62C\uAE4C\uC694?\nB: \uAE00\uC38E\uC694, \uC798 \uBAA8\uB974\uACA0\uC5B4\uC694.",
     exampleSrc:"A: What do you think about this issue?\nB: Hmm, I think I need to think about it more.\nA: Will it rain tomorrow?\nB: Well, I am not sure.",
     funFact:"글쎄요 is one of Korea's most versatile expressions. It buys thinking time, softens disagreement, and expresses genuine uncertainty."},

    {type:"teach", trg:"\uADC0\uCC2E\uB2E4", src:"to be bothersome; to be a hassle", pos:"adj", gender:null,
     note:"Pure Korean adjective. Finding something annoying to do.",
     example:"A: \uC694\uB9AC\uD558\uAE30 \uADC0\uCC2E\uC544\uC694.\nB: \uBC30\uB2EC \uC2DC\uCF1C\uC694.\nA: \uCCAD\uC18C\uAC00 \uADC0\uCC2E\uC544\uC694.\nB: \uC870\uAE08\uC529 \uD558\uBA74 \uB36E \uD798\uB4E4\uC5B4\uC694.",
     exampleSrc:"A: Cooking is such a hassle.\nB: Order delivery.\nA: Cleaning is bothersome.\nB: If you do a little at a time, it is less tiring.",
     funFact:"귀찮다 is one of the most commonly used adjectives in casual Korean. It perfectly captures that feeling of 'I know I should but I don't want to.'"},

    {type:"teach", trg:"\uADC0\uD558\uB2E4", src:"to be precious; to be noble; to be esteemed", pos:"adj", gender:null,
     note:"Sino-Korean: noble/precious (貴) + be (하다).\nHigher register than 귀중하다.",
     example:"A: \uADC0\uD55C \uC190\uB2D8\uC744 \uD658\uC601\uD569\uB2C8\uB2E4.\nB: \uCD08\uB300\uD574 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4.\nA: \uADC0\uD55C \uACBD\uD5D8\uC744 \uD558\uC168\uACA0\uB124\uC694.\nB: \uC815\uB9D0 \uADC0\uD55C \uC2DC\uAC04\uC774\uC5C8\uC5B4\uC694.",
     exampleSrc:"A: We welcome our esteemed guest.\nB: Thank you for the invitation.\nA: You must have had a precious experience.\nB: It was truly a valued time.",
     funFact:"귀하 (you, formal/esteemed) appears on Korean formal letters and documents. 귀하의 건강을 기원합니다 (I wish for your health)."},

    {type:"teach", trg:"\uADC0\uAC00", src:"returning home; homecoming", pos:"noun", gender:null,
     note:"Sino-Korean: return (歸) + home (家).\nGoing back to one's house.",
     example:"A: \uADC0\uAC00 \uC2DC\uAC04\uC774 \uB2A6\uC5B4\uC84C\uC5B4\uC694.\nB: \uC65C \uB2A6\uC5C8\uC5B4\uC694?\nA: \uD68C\uC758\uAC00 \uAE38\uC5B4\uC84C\uC5B4\uC694.\nB: \uC548\uC804\uD558\uAC8C \uADC0\uAC00\uD558\uC138\uC694.",
     exampleSrc:"A: My return home was delayed.\nB: Why were you late?\nA: The meeting ran long.\nB: Get home safely.",
     funFact:"귀가 시간 (return-home time) is a concept Korean parents monitor closely. 귀가 시간을 지키다 (keep to your return time) is a common parental instruction."},

    {type:"teach", trg:"\uADC0\uAC00\uD558\uB2E4", src:"to return home; to go back home", pos:"verb", gender:null,
     note:"Verb form of 귀가. Formally going home.",
     example:"A: \uD68C\uC2DD \\uD6C4 \uADC0\uAC00\uD588\uC5B4\uC694.\nB: \uBA87 \uC2DC\uC5D0 \uADC0\uAC00\uD588\uC5B4\uC694?\nA: \uBC24 11\uC2DC\uC5D0 \uADC0\uAC00\uD588\uC5B4\uC694.\nB: \uB2A6\uAC8C \uADC0\uAC00\uD588\uB124\uC694.",
     exampleSrc:"A: I returned home after dinner.\nB: What time did you get home?\nA: I got home at 11 PM.\nB: You got home late.",
     funFact:"귀가하다 is more formal than 집에 가다 (go home). It is used in news, school notices, and official communications."},

    {type:"mc",
     q:"\uC694\uB9AC\uD558\uAE30 \uC2EB\uACE0 \uBD88\uD3B8\uD55C \uAC10\uC815\uC744 \uBB50\uB77C\uACE0 \uD574\uC694?",
     opts:["\uADC0\uCC2E\uB2E4","\uADC0\uD558\uB2E4","\uADC0\uC911\uD558\uB2E4","\uADC0\uAC00\uD558\uB2E4"],
     ans:"\uADC0\uCC2E\uB2E4",
     hint:"This adjective describes that feeling of finding something too troublesome or bothersome to do."},

    {type:"teach", trg:"\uADC0\uAD6D", src:"returning to one's country", pos:"noun", gender:null,
     note:"Sino-Korean: return (歸) + country (國).\nComing back to one's homeland.",
     example:"A: \uADC0\uAD6D \uB0A0\uC9DC\uAC00 \uC815\uD574\uC84C\uC5B4\uC694.\nB: \uC5B8\uC81C \uADC0\uAD6D\uD574\uC694?\nA: \uB2E4\uC74C \uC8FC\uC5D0 \uADC0\uAD6D\uD574\uC694.\nB: \uC624\uB798 \uD574\uC678\uC5D0 \uC788\uC5C8\uB098\uC694?",
     exampleSrc:"A: The return date has been set.\nB: When do you return?\nA: I return next week.\nB: Were you abroad for a long time?",
     funFact:"귀국 is paired with 출국 (departure from country). At airports: 출국 수속 (departure procedures), 귀국 환영 (welcome home)."},

    {type:"teach", trg:"\uADC0\uAD6D\uD558\uB2E4", src:"to return to one's country", pos:"verb", gender:null,
     note:"Verb form of 귀국. Going back to one's homeland.",
     example:"A: 5\uB144 \uB9CC\uC5D0 \uADC0\uAD6D\uD588\uC5B4\uC694.\nB: \uC624\uB798\uAC04\uB9CC\uC774\uB124\uC694.\nA: \uADC0\uAD6D\uD558\uB2C8\uAE4C \uBAA8\uB4E0 \uAC83\uC774 \uBCC0\uD574 \uC788\uC5C8\uC5B4\uC694.\nB: \uC801\uC751\uD558\uB294 \uB370 \uC2DC\uAC04\uC774 \uD544\uC694\uD558\uACA0\uB124\uC694.",
     exampleSrc:"A: I returned to Korea after 5 years.\nB: That is a long time.\nA: When I returned, everything had changed.\nB: You will need time to readjust.",
     funFact:"역귀국 (reverse immigration: Koreans abroad returning permanently) has become a social phenomenon as Korea's global profile rises."},

    {type:"teach", trg:"\uADE0\uD615", src:"balance; equilibrium", pos:"noun", gender:null,
     note:"Sino-Korean: even (均) + weigh (衡).\nBeing in a state of balance.",
     example:"A: \uC77C\uACFC \uC0DD\uD65C\uC758 \uADE0\uD615\uC774 \uC911\uC694\uD574\uC694.\nB: \uC6CC\uB77C\uBC38 \uB9DE\uC8E0.\nA: \uADE0\uD615 \uC7A1\uD78C \uC2DD\uC0AC\uB97C \uD558\uC138\uC694.\nB: \uAC74\uAC15\uC758 \uAE30\uBCF8\uC774\uC8E0.",
     exampleSrc:"A: Balance between work and life is important.\nB: Work-life balance, right.\nA: Eat a balanced diet.\nB: It is the foundation of health.",
     funFact:"워라밸 (work-life balance) is a hugely popular Korean compound. 균형 is the formal/academic version of this concept."},

    {type:"teach", trg:"\uAC8C\uC73C\uB974\uB2E4", src:"to be lazy; to be idle", pos:"adj", gender:null,
     note:"Pure Korean adjective. Irregular: ㅡ-irregular (게을러, 게으른).",
     example:"A: \uAC8C\uC73C\uB978 \uC0AC\uB78C\uC740 \uC131\uACF5\uD558\uAE30 \uC5B4\uB824\uC6CC\uC694.\nB: \uBD80\uC9C0\uB7F0\uD568\uC774 \uC911\uC694\uD558\uC8E0.\nA: \uC624\uB298\uC740 \uAC8C\uC744\uB7EC\uC84C\uC5B4\uC694.\nB: \uD558\uB8E8 \uC815\uB3C4\uB294 \uAD1C\uCC2E\uC544\uC694.",
     exampleSrc:"A: Lazy people have difficulty succeeding.\nB: Diligence is important.\nA: I got lazy today.\nB: One day is okay.",
     funFact:"게으르다 is a ㅡ-irregular adjective: 게으르다 > 게을러, 게으른. This irregular pattern also applies to 모으다, 쓰다, etc."},

    {type:"teach", trg:"\uACE8", src:"goal (sports)", pos:"noun", gender:null,
     note:"English loanword. A scored goal in sports.",
     example:"A: \uACE8\uC744 \uB123\uC5C8\uC5B4\uC694!\nB: \uBA87 \uB300 \uBA87\uC774\uC5D0\uC694?\nA: 2\uB300 1\uB85C \uC774\uAE30\uACE0 \uC788\uC5B4\uC694.\nB: \uB9C8\uC9C0\uB9C9 \uACE8\uC774 \uBA4B\uC84C\uC5B4\uC694!",
     exampleSrc:"A: They scored a goal!\nB: What is the score?\nA: We are winning 2 to 1.\nB: The last goal was amazing!",
     funFact:"골! (Goal!) is the universal sports exclamation. Korean soccer (축구) and the K League use 골 constantly. 골키퍼 means goalkeeper."},

    {type:"teach", trg:"\uACF5\uC8FC", src:"princess", pos:"noun", gender:null,
     note:"Sino-Korean: public/lord (公) + master (主).\nA king's daughter.",
     example:"A: \uC5B4\uB9B4 \uB54C \uACF5\uC8FC\uAC00 \uB418\uACE0 \uC2F6\uC5C8\uC5B4\uC694.\nB: \uB204\uAD6C\uB098 \uADF8\uB7F0 \uAFC8\uC744 \uAFD4\uC8E0.\nA: \uD55C\uAD6D \uC5ED\uC0AC\uC5D0 \uC720\uBA85\uD55C \uACF5\uC8FC\uAC00 \uC788\uC5B4\uC694?\nB: \uB355\uD61C\uACF5\uC8FC\uAC00 \uC720\uBA85\uD574\uC694.",
     exampleSrc:"A: As a child I wanted to be a princess.\nB: Everyone has that dream.\nA: Are there famous princesses in Korean history?\nB: Princess Deokhye is famous.",
     funFact:"덕혜옹주 (Princess Deokhye), the last princess of the Joseon Dynasty, has a tragic story that was made into a popular Korean film."},

    {type:"fb",
     s:"\uC77C\uACFC \uC0DD\uD65C\uC758 {1}\uC774 \uC911\uC694\uD574\uC694.",
     a:["\uADE0\uD615"],
     opts:["\uADE0\uD615","\uADC0\uAD6D","\uADC0\uAC00","\uADC0\uCC2E"],
     hint:"This Sino-Korean word means a state of balance between two or more things.",
     sSrc:"The {1} between work and life is important."},

    {type:"teach", trg:"\uACF5\uD56D\uBC84\uC2A4", src:"airport bus; airport limousine", pos:"noun", gender:null,
     note:"Sino-Korean + English: airport (空港) + bus.",
     example:"A: \uACF5\uD56D\uBC84\uC2A4\uB97C \uD0C0\uACE0 \uACF5\uD56D\uC5D0 \uAC14\uC5B4\uC694.\nB: \uD3B8\uB9AC\uD588\uC5B4\uC694?\nA: \uACF5\uD56D\uBC84\uC2A4\uAC00 \uD0DD\uC2DC\uBCF4\uB2E4 \uC2F8\uC694.\nB: \uC2DC\uAC04\uC740 \uC5BC\uB9C8\uB098 \uAC78\uB824\uC694?",
     exampleSrc:"A: I took the airport bus to the airport.\nB: Was it convenient?\nA: The airport bus is cheaper than a taxi.\nB: How long does it take?",
     funFact:"인천공항 리무진 (Incheon Airport limousine bus) connects the airport to major Seoul areas. It is the most popular airport transport option."},

    {type:"teach", trg:"\uADF8\uB098\uB9C8", src:"at least; fortunately; if nothing else", pos:"adv", gender:null,
     note:"Pure Korean adverb. Finding something positive in a bad situation.",
     example:"A: \uC2DC\uD5D8\uC744 \uBABB \uBD24\uC9C0\uB9CC \uADF8\uB098\uB9C8 \uD569\uACA9\uD588\uC5B4\uC694.\nB: \uADF8\uB098\uB9C8 \uB2E4\uD589\uC774\uB124\uC694.\nA: \uBE44\uAC00 \uC654\uC9C0\uB9CC \uADF8\uB098\uB9C8 \uC6B0\uC0B0\uC774 \uC788\uC5B4\uC694.\nB: \uADF8\uB098\uB9C8 \uC900\uBE44\uD55C \uAC8C \uB2E4\uD589\uC774\uC5D0\uC694.",
     exampleSrc:"A: I did poorly on the exam but at least I passed.\nB: At least that is fortunate.\nA: It rained, but at least I had an umbrella.\nB: At least being prepared helped.",
     funFact:"그나마 is distinctly Korean, with no direct equivalent in many languages. It expresses gratitude for small mercies in otherwise bad situations."},

    {type:"teach", trg:"\uADF8\uB798\uC57C", src:"only if so; that is the way", pos:"noun", gender:null,
     note:"Pure Korean contraction: 그래야 = 그렇게 해야.\nExpressing a necessary condition.",
     example:"A: \uB9E4\uC77C \uC5F0\uC2B5\uD574\uC57C \uD574\uC694. \uADF8\uB798\uC57C \uC2E4\uB825\uC774 \uB298\uC5B4\uC694.\nB: \uADF8\uB798\uC57C \uC131\uACF5\uD560 \uC218 \uC788\uC8E0.\nA: \uC815\uC9C1\uD574\uC57C \uD574\uC694. \uADF8\uB798\uC57C \uBBFF\uC74C\uC744 \uC5BB\uC5B4\uC694.\nB: \uB9DE\uC544\uC694, \uADF8\uB798\uC57C \uD569\uB2C8\uB2E4.",
     exampleSrc:"A: You must practice every day. Only then will skills improve.\nB: Only that way can you succeed.\nA: You must be honest. Only then will you earn trust.\nB: That is right, that is how it should be.",
     funFact:"그래야 links cause and necessity. It often follows advice: X해야 해요. 그래야 Y해요 (You must do X. Only then will Y happen)."},

    {type:"teach", trg:"\uAE0B\uB2E4", src:"to draw (a line); to rule", pos:"verb", gender:null,
     note:"Pure Korean verb. Drawing a line or marking.",
     example:"A: \uC120\uC744 \uAE0B\uACE0 \uC885\uC774\uB97C \uC790\uB974\uC138\uC694.\nB: \uC790\uB85C \uAE0B\uC744\uAE4C\uC694?\nA: \uBC11\uC904\uC744 \uAE0B\uACE0 \uC77D\uC73C\uC138\uC694.\nB: \uC911\uC694\uD55C \uBD80\uBD84\uC5D0 \uAE0B\uACA0\uC2B5\uB2C8\uB2E4.",
     exampleSrc:"A: Draw a line and cut the paper.\nB: Should I use a ruler?\nA: Underline and read.\nB: I will mark the important parts.",
     funFact:"긋다 is a ㅅ-irregular verb: 긋다 > 그어, 그은. The ㅅ drops before vowels. 밑줄을 긋다 (to underline) is the most common usage."},

    {type:"teach", trg:"\uAC8C", src:"crab", pos:"noun", gender:null,
     note:"Pure Korean word. The crustacean.",
     example:"A: \uAC8C \uC694\uB9AC\uB97C \uBA39\uACE0 \uC2F6\uC5B4\uC694.\nB: \uAC04\uC7A5\uAC8C\uC7A5 \uC88B\uC544\uD574\uC694?\nA: \uAC8C\uAC00 \uBE44\uC2F8\uC8E0?\nB: \uCCA0\uC5D0 \uB530\uB77C \uAC00\uACA9\uC774 \uB2EC\uB77C\uC694.",
     exampleSrc:"A: I want to eat crab dishes.\nB: Do you like soy-marinated crab?\nA: Is crab expensive?\nB: The price varies by season.",
     funFact:"간장게장 (soy-marinated raw crab) is called '밥도둑' (rice thief) because it is so delicious you eat too much rice with it."},

    {type:"teach", trg:"\uAC11", src:"case; shell; the number one position", pos:"noun", gender:null,
     note:"Pure Korean word with multiple meanings. Shell, case, or social hierarchy term.",
     example:"A: \uD578\uB4DC\uD3F0 \uAC11\uC744 \uC0C0\uC5B4\uC694.\nB: \uC608\uC05C \uAC11\uC774\uB124\uC694.\nA: \uAC11\uACFC \uC744\uC774\uB77C\uB294 \uB9D0\uC744 \uC54C\uC544\uC694?\nB: \uC6B0\uC704\uC640 \uC5F4\uC704\uB97C \uB9D0\uD558\uC8E0.",
     exampleSrc:"A: I bought a phone case.\nB: It is a pretty case.\nA: Do you know the expression 'gap and eul'?\nB: It refers to the superior and subordinate positions.",
     funFact:"갑을관계 (gap-eul relationship) describes power imbalances in Korean society. 갑 is the powerful party, 을 is the weaker one. A huge social issue."},

    {type:"mc",
     q:"\uC2DC\uD5D8\uC740 \uBABB \uBD24\uC9C0\uB9CC \uADF8\uB798\uB3C4 \uD569\uACA9\uD588\uC5B4\uC694. \uC774 \uC0C1\uD669\uC5D0 \uC4F8 \uC218 \uC788\uB294 \uD45C\uD604\uC740?",
     opts:["\uADF8\uB098\uB9C8","\uADF8\uB798\uC57C","\uAE00\uC38E\uC694","\uADC0\uCC2E\uB2E4"],
     ans:"\uADF8\uB098\uB9C8",
     hint:"This adverb expresses finding a silver lining, meaning 'at least' in a bad situation."},

    {type:"match", pairs:[
      {trg:"\uAE00\uC38E\uC694", src:"well.../hmm"},
      {trg:"\uADC0\uCC2E\uB2E4", src:"bothersome"},
      {trg:"\uADE0\uD615", src:"balance"},
      {trg:"\uADC0\uAD6D", src:"returning home (country)"},
      {trg:"\uADF8\uB098\uB9C8", src:"at least"},
      {trg:"\uACF5\uC8FC", src:"princess"}
    ]}
  ]
};
export default LESSON_20;
