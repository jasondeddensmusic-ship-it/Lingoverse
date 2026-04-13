// B2 Lesson 10: Urban Landscape
// Words: 강남, 강북, 강변, 강당, 광장, 골목길, 골짜기, 구역, 구청, 구석,
//        구석구석, 가로, 가로수, 가로막다, 건너, 건너편, 건너가다, 건너오다, 길가, 길거리

const LESSON_10 = {
  id:"kov2_b2_l10", title:"도시 풍경", icon:"\uD83C\uDFD9\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Urban Landscape",
     desc:"Learn vocabulary for city geography, streets, and urban features. These words are essential for understanding TOPIK II reading passages about urban life, directions, and city planning.",
     goals:["Learn 20 urban landscape vocabulary words","Understand directional and spatial Korean compounds","Navigate and describe city environments"]},

    {type:"teach", trg:"\uAC15\uB0A8", src:"Gangnam (south of the river)", pos:"noun", gender:null,
     note:"Sino-Korean: river (江) + south (南).\nThe wealthy southern district of Seoul.",
     example:"A: \uAC15\uB0A8\uC5D0\uC11C \uC77C\uD574\uC694.\nB: \uAC15\uB0A8\uC740 \uBB3C\uAC00\uAC00 \uBE44\uC2F8\uC8E0?\nA: \uB124, \uD2B9\uD788 \uC9D1\uAC12\uC774 \uBE44\uC2F8\uC694.\nB: \uAD50\uD1B5\uC740 \uD3B8\uB9AC\uD574\uC694?",
     exampleSrc:"A: I work in Gangnam.\nB: Gangnam is expensive, right?\nA: Yes, especially housing prices.\nB: Is transportation convenient?",
     funFact:"PSY's 'Gangnam Style' made this district famous worldwide. 강남 represents Seoul's modern wealth and cosmopolitan culture."},

    {type:"teach", trg:"\uAC15\uBD81", src:"Gangbuk (north of the river)", pos:"noun", gender:null,
     note:"Sino-Korean: river (江) + north (北).\nThe historical northern part of Seoul.",
     example:"A: \uAC15\uBD81\uC5D0\uB294 \uACBD\uBCF5\uAD81\uC774 \uC788\uC5B4\uC694.\nB: \uC5ED\uC0AC\uC801\uC778 \uC7A5\uC18C\uAC00 \uB9CE\uC8E0.\nA: \uAC15\uBD81\uACFC \uAC15\uB0A8\uC758 \uBD84\uC704\uAE30\uAC00 \uB2EC\uB77C\uC694.\nB: \uAC15\uBD81\uC740 \uC804\uD1B5\uC801\uC778 \uB290\uB08C\uC774\uC5D0\uC694.",
     exampleSrc:"A: Gyeongbokgung Palace is in Gangbuk.\nB: There are many historical places.\nA: Gangbuk and Gangnam have different atmospheres.\nB: Gangbuk has a traditional feel.",
     funFact:"The Han River (한강) divides Seoul into 강남 and 강북. This divide has significant economic, cultural, and social implications in Korean society."},

    {type:"teach", trg:"\uAC15\uBCC0", src:"riverside; riverbank", pos:"noun", gender:null,
     note:"Sino-Korean: river (江) + side (邊).\nThe area along a river.",
     example:"A: \uAC15\uBCC0\uC5D0\uC11C \uC0B0\uCC45\uD574\uC694.\nB: \uD55C\uAC15 \uAC15\uBCC0\uC774\uC694?\nA: \uB124, \uAC15\uBCC0 \uACF5\uC6D0\uC774 \uC88B\uC544\uC694.\nA: \uC800\uB141\uC5D0 \uAC15\uBCC0\uC774 \uC544\uB984\uB2E4\uC6CC\uC694.",
     exampleSrc:"A: I take walks by the riverside.\nB: The Han River riverside?\nA: Yes, the riverside park is nice.\nA: The riverside is beautiful in the evening.",
     funFact:"Seoul's 한강 강변 parks are among the most popular public spaces. Delivery food to the riverside (한강 배달) is a uniquely Korean experience."},

    {type:"teach", trg:"\uAC15\uB2F9", src:"auditorium; lecture hall", pos:"noun", gender:null,
     note:"Sino-Korean: lecture (講) + hall (堂).\nA large hall for speeches or events.",
     example:"A: \uAC15\uB2F9\uC5D0\uC11C \uC790\uC120 \uCF58\uC11C\uD2B8\uAC00 \uC788\uC5B4\uC694.\nB: \uBA87 \uC2DC\uC5D0 \uC2DC\uC791\uD574\uC694?\nA: \uC624\uD6C4 2\uC2DC\uC5D0 \uAC15\uB2F9\uC5D0\uC11C\uC694.\nB: \uAC15\uB2F9\uC774 \uD06C\uB098\uC694?",
     exampleSrc:"A: There is a charity concert in the auditorium.\nB: What time does it start?\nA: At 2 PM in the auditorium.\nB: Is the auditorium large?",
     funFact:"강당 uses different hanja from 강남's 강 (江, river). Here 강 is 講 (lecture). Korean has many homophones with different meanings."},

    {type:"teach", trg:"\uAD11\uC7A5", src:"plaza; public square", pos:"noun", gender:null,
     note:"Sino-Korean: wide (廣) + place (場).\nAn open public gathering space.",
     example:"A: \uAD11\uC7A5\uC5D0\uC11C \uCD95\uC81C\uAC00 \uC5F4\uB824\uC694.\nB: \uC5B4\uB5A4 \uCD95\uC81C\uC608\uC694?\nA: \uBD04\uAF43 \uCD95\uC81C\uC608\uC694.\nB: \uAD11\uC7A5\uC774 \uC0AC\uB78C\uC73C\uB85C \uAC00\uB4DD\uD558\uACA0\uB124\uC694.",
     exampleSrc:"A: A festival is held in the plaza.\nB: What kind of festival?\nA: A spring flower festival.\nB: The plaza will be full of people.",
     funFact:"광화문 광장 (Gwanghwamun Plaza) is Korea's most iconic public square, home to statues of King Sejong and Admiral Yi Sun-sin."},

    {type:"mc",
     q:"\uD55C\uAC15\uC744 \uAE30\uC900\uC73C\uB85C \uC11C\uC6B8\uC758 \uB0A8\uCABD\uC744 \uBB50\uB77C\uACE0 \uD574\uC694?",
     opts:["\uAC15\uB0A8","\uAC15\uBD81","\uAC15\uBCC0","\uAC15\uB2F9"],
     ans:"\uAC15\uB0A8",
     hint:"This compound uses river (江) and south (南) to name the area below the Han River."},

    {type:"teach", trg:"\uACE8\uBAA9\uAE38", src:"alley; narrow lane", pos:"noun", gender:null,
     note:"Pure Korean compound: alley (골목) + road (길).\nCharming narrow streets.",
     example:"A: \uC774 \uACE8\uBAA9\uAE38\uC5D0 \uB9DB\uC9D1\uC774 \uB9CE\uC544\uC694.\nB: \uACE8\uBAA9\uAE38 \uD0D0\uD5D8\uC774 \uC7AC\uBBF8\uC788\uC8E0.\nA: \uACE8\uBAA9\uAE38\uB9C8\uB2E4 \uBD84\uC704\uAE30\uAC00 \uB2EC\uB77C\uC694.\nB: \uD55C\uAD6D\uC758 \uACE8\uBAA9\uAE38 \uBB38\uD654\uAC00 \uB9E4\uB825\uC801\uC774\uC5D0\uC694.",
     exampleSrc:"A: There are many good restaurants in this alley.\nB: Exploring alleys is fun.\nA: Each alley has a different atmosphere.\nB: Korean alley culture is charming.",
     funFact:"Korea's 골목길 culture has become a tourist attraction. Neighborhoods like Ikseon-dong and Bukchon are famous for their 골목길 charm."},

    {type:"teach", trg:"\uACE8\uC9DC\uAE30", src:"valley; gorge", pos:"noun", gender:null,
     note:"Pure Korean word. A narrow valley between mountains.",
     example:"A: \uAE4A\uC740 \uACE8\uC9DC\uAE30\uC5D0 \uD3ED\uD3EC\uAC00 \uC788\uC5B4\uC694.\nB: \uACE8\uC9DC\uAE30 \uD2B8\uB808\uD0B9\uC744 \uD574 \uBD10\uC694?\nA: \uACE8\uC9DC\uAE30\uC758 \uACBD\uCE58\uAC00 \uC544\uB984\uB2E4\uC6CC\uC694.\nB: \uAC00\uC744\uC5D0 \uB2E8\uD48D\uC774 \uBA4B\uC838\uC694.",
     exampleSrc:"A: There is a waterfall in the deep valley.\nB: Have you tried valley trekking?\nA: The valley scenery is beautiful.\nB: Autumn leaves are wonderful there.",
     funFact:"골짜기 is more literary/elevated than 계곡 (valley). Poetry and literature prefer 골짜기 for its native Korean feel."},

    {type:"teach", trg:"\uAD6C\uC5ED", src:"district; zone; area", pos:"noun", gender:null,
     note:"Sino-Korean: section (區) + area (域).\nAn officially designated area.",
     example:"A: \uC774 \uAD6C\uC5ED\uC740 \uC8FC\uCC28 \uAE08\uC9C0 \uAD6C\uC5ED\uC774\uC5D0\uC694.\nB: \uC5B4\uB514\uC5D0 \uC8FC\uCC28\uD574\uC57C \uD574\uC694?\nA: \uC800\uCABD \uAD6C\uC5ED\uC5D0 \uC8FC\uCC28\uC7A5\uC774 \uC788\uC5B4\uC694.\nB: \uAD6C\uC5ED \uD45C\uC2DC\uB97C \uC798 \uD655\uC778\uD558\uC138\uC694.",
     exampleSrc:"A: This area is a no-parking zone.\nB: Where should I park?\nA: There is a parking lot in that zone.\nB: Check the zone markers carefully.",
     funFact:"구역 is used in city planning: 상업 구역 (commercial zone), 주거 구역 (residential zone). Seoul subway also uses 구역 for zones."},

    {type:"teach", trg:"\uAD6C\uCCAD", src:"district office; gu office", pos:"noun", gender:null,
     note:"Sino-Korean: district (區) + government office (廳).\nLocal government for Seoul's districts.",
     example:"A: \uAD6C\uCCAD\uC5D0\uC11C \uC8FC\uBBFC\uB4F1\uB85D\uC744 \uD588\uC5B4\uC694.\nB: \uC624\uB798 \uAC78\uB838\uC5B4\uC694?\nA: 30\uBD84 \uC815\uB3C4 \uAC78\uB838\uC5B4\uC694.\nB: \uAD6C\uCCAD \uC628\uB77C\uC778 \uC11C\uBE44\uC2A4\uB3C4 \uC788\uC5B4\uC694.",
     exampleSrc:"A: I registered my residence at the district office.\nB: Did it take long?\nA: It took about 30 minutes.\nB: There are also online district office services.",
     funFact:"Seoul has 25 구 (districts), each with its own 구청. They handle local administration: IDs, permits, welfare, and community services."},

    {type:"teach", trg:"\uAD6C\uC11D", src:"corner; nook", pos:"noun", gender:null,
     note:"Pure Korean word. A corner or hidden spot.",
     example:"A: \uBC29 \uAD6C\uC11D\uC5D0 \uC7A5\uB09C\uAC10\uC774 \uC788\uC5B4\uC694.\nB: \uAD6C\uC11D\uAD6C\uC11D \uCCAD\uC18C\uD574\uC57C \uD574\uC694.\nA: \uAD6C\uC11D\uC5D0 \uC55E\uC544\uC11C \uCC45\uC744 \uC77D\uC5C8\uC5B4\uC694.\nB: \uC870\uC6A9\uD55C \uAD6C\uC11D\uC774 \uC88B\uC544\uC694.",
     exampleSrc:"A: There are toys in the corner of the room.\nB: You need to clean every nook.\nA: I sat in a corner and read a book.\nB: I like quiet corners.",
     funFact:"구석 is used figuratively: 마음의 구석 (a corner of one's heart), 세상 구석구석 (every corner of the world)."},

    {type:"teach", trg:"\uAD6C\uC11D\uAD6C\uC11D", src:"every nook and cranny", pos:"noun", gender:null,
     note:"Pure Korean reduplication: corner + corner. Emphasizes thoroughness.",
     example:"A: \uC9D1\uC744 \uAD6C\uC11D\uAD6C\uC11D \uCCAD\uC18C\uD588\uC5B4\uC694.\nB: \uAE68\uB057\uD574\uC84C\uACA0\uB124\uC694.\nA: \uB3C4\uC2DC \uAD6C\uC11D\uAD6C\uC11D\uC744 \uD0D0\uD5D8\uD588\uC5B4\uC694.\nB: \uC228\uACA8\uC9C4 \uBA85\uC18C\uB97C \uBC1C\uACAC\uD588\uC5B4\uC694?",
     exampleSrc:"A: I cleaned the house from every nook and cranny.\nB: It must be sparkling clean.\nA: I explored every corner of the city.\nB: Did you discover any hidden gems?",
     funFact:"Korean loves reduplication for emphasis: 곳곳 (everywhere), 하나하나 (one by one), 때때로 (from time to time), 날마다 (every day)."},

    {type:"fb",
     s:"\uC774 {1}\uC5D0 \uB9DB\uC9D1\uC774 \uB9CE\uC544\uC694.",
     a:["\uACE8\uBAA9\uAE38"],
     opts:["\uACE8\uBAA9\uAE38","\uAD11\uC7A5","\uAD6C\uC5ED","\uAC15\uBCC0"],
     hint:"This pure Korean word describes a narrow lane between buildings in a neighborhood.",
     sSrc:"There are many good restaurants in this {1}."},

    {type:"teach", trg:"\uAC00\uB85C", src:"width; horizontal direction", pos:"noun", gender:null,
     note:"Sino-Korean hybrid. The horizontal dimension.\nOpposite of 세로 (vertical).",
     example:"A: \uC774 \uC0C1\uC790\uC758 \uAC00\uB85C \uAE38\uC774\uAC00 \uC5BC\uB9C8\uC608\uC694?\nB: \uAC00\uB85C 30\uC13C\uD2F0\uBBF8\uD130\uC608\uC694.\nA: \uAC00\uB85C\uC640 \uC138\uB85C \uBE44\uC728\uC774 \uC911\uC694\uD574\uC694.\nB: \uB124, \uADE0\uD615\uC774 \uC911\uC694\uD558\uC8E0.",
     exampleSrc:"A: What is the width of this box?\nB: The width is 30 centimeters.\nA: The ratio of width to height is important.\nB: Yes, balance matters.",
     funFact:"가로 vs 세로: 가로 (horizontal/width) and 세로 (vertical/height) are the standard pair for dimensions in Korean."},

    {type:"teach", trg:"\uAC00\uB85C\uC218", src:"street tree; roadside tree", pos:"noun", gender:null,
     note:"Korean compound: street (가로) + tree (수, 樹).",
     example:"A: \uAC00\uB85C\uC218\uAC00 \uC608\uC058\uC694.\nB: \uAC00\uC744\uC5D0 \uB2E8\uD48D\uC774 \uBA4B\uC838\uC694.\nA: \uAC00\uB85C\uC218\uAC00 \uB3C4\uC2DC \uD658\uACBD\uC744 \uC88B\uAC8C \uD574\uC694.\nB: \uADF8\uB298\uB3C4 \uC81C\uACF5\uD558\uC8E0.",
     exampleSrc:"A: The street trees are beautiful.\nB: The autumn leaves are gorgeous.\nA: Street trees improve the urban environment.\nB: They provide shade too.",
     funFact:"Seoul's iconic street trees include ginkgo (은행나무) and cherry blossom (벚나무). Ginkgo fruits in fall are famously smelly."},

    {type:"teach", trg:"\uAC00\uB85C\uB9C9\uB2E4", src:"to block; to obstruct", pos:"verb", gender:null,
     note:"Korean compound: way (가로) + block (막다).\nTo physically or figuratively block a path.",
     example:"A: \uAE38\uC744 \uAC00\uB85C\uB9C9\uB294 \uCC28\uAC00 \uC788\uC5B4\uC694.\nB: \uAC15\uC77C\uC774 \uAC08 \uC218 \uC5C6\uB124\uC694.\nA: \uD559\uC0DD\uB4E4\uC758 \uAFC8\uC744 \uAC00\uB85C\uB9C9\uC9C0 \uB9C8\uC138\uC694.\nB: \uC751\uC6D0\uD574 \uC918\uC57C \uD574\uC694.",
     exampleSrc:"A: There is a car blocking the road.\nB: We cannot cross.\nA: Do not block the students' dreams.\nB: We need to support them.",
     funFact:"가로막다 is often used metaphorically: 앞길을 가로막다 (block someone's future path), 발전을 가로막다 (obstruct progress)."},

    {type:"teach", trg:"\uAC74\uB108", src:"the other side; across", pos:"noun", gender:null,
     note:"Pure Korean word. The space across from where you are.",
     example:"A: \uAC15 \uAC74\uB108\uC5D0 \uB9C8\uC744\uC774 \uBCF4\uC5EC\uC694.\nB: \uAC74\uB108\uD3B8\uC5D0 \uAC00 \uBCF4\uACE0 \uC2F6\uC5B4\uC694.\nA: \uB2E4\uB9AC \uAC74\uB108\uC5D0 \uAC00\uAC8C\uAC00 \uC788\uC5B4\uC694.\nB: \uAC74\uB108\uB85C \uAC00\uBD05\uC2DC\uB2E4.",
     exampleSrc:"A: I can see a village across the river.\nB: I want to visit the other side.\nA: There is a shop across the bridge.\nB: Let us go to the other side.",
     funFact:"건너 functions as both a noun (the other side) and part of compound verbs: 건너가다 (go across), 건너오다 (come across)."},

    {type:"teach", trg:"\uAC74\uB108\uD3B8", src:"the opposite side; across the way", pos:"noun", gender:null,
     note:"Pure Korean compound: across (건너) + side (편).",
     example:"A: \uAC74\uB108\uD3B8\uC5D0 \uC57D\uAD6D\uC774 \uC788\uC5B4\uC694.\nB: \uD6A1\uB2E8\uBCF4\uB3C4\uB85C \uAC74\uB108\uAC00\uC138\uC694.\nA: \uAC74\uB108\uD3B8 \uAC74\uBB3C\uC774 \uBA4B\uC788\uB124\uC694.\nB: \uC0C8\uB85C \uC9C0\uC740 \uAC74\uBB3C\uC774\uC5D0\uC694.",
     exampleSrc:"A: There is a pharmacy on the other side.\nB: Cross at the crosswalk.\nA: The building on the opposite side looks nice.\nB: It is a newly built building.",
     funFact:"When giving directions, Koreans frequently say 건너편 to indicate the other side of the street. It is one of the most useful navigation words."},

    {type:"teach", trg:"\uAC74\uB108\uAC00\uB2E4", src:"to go across; to cross over", pos:"verb", gender:null,
     note:"Pure Korean compound: across (건너) + go (가다).",
     example:"A: \uAE38\uC744 \uAC74\uB108\uAC00\uC138\uC694.\nB: \uC2E0\uD638\uB4F1\uC774 \uBE68\uAC04\uBD88\uC774\uC5D0\uC694.\nA: \uCD08\uB85D\uBD88\uB85C \uBC14\uB00C\uBA74 \uAC74\uB108\uAC00\uC138\uC694.\nB: \uC870\uC2EC\uD788 \uAC74\uB108\uAC14\uC5B4\uC694.",
     exampleSrc:"A: Please cross the street.\nB: The traffic light is red.\nA: Cross when it turns green.\nB: I crossed carefully.",
     funFact:"건너가다 (go across, away from speaker) vs 건너오다 (come across, toward speaker) shows Korean's fundamental directional verb system."},

    {type:"teach", trg:"\uAC74\uB108\uC624\uB2E4", src:"to come across; to cross over (toward)", pos:"verb", gender:null,
     note:"Pure Korean compound: across (건너) + come (오다).\nMovement toward the speaker.",
     example:"A: \uC774\uCABD\uC73C\uB85C \uAC74\uB108\uC624\uC138\uC694.\nB: \uAD50\uCC28\uB85C\uC5D0\uC11C \uAC74\uB108\uC62C\uAC8C\uC694.\nA: \uC870\uC2EC\uD788 \uAC74\uB108\uC624\uC138\uC694.\nB: \uB124, \uC9C0\uAE08 \uAC74\uB108\uAC11\uB2C8\uB2E4.",
     exampleSrc:"A: Come across to this side.\nB: I will cross at the intersection.\nA: Come across carefully.\nB: Yes, I am crossing now.",
     funFact:"The -가다/-오다 directional pair is fundamental in Korean. 올라가다/올라오다, 내려가다/내려오다, 건너가다/건너오다 all follow this pattern."},

    {type:"teach", trg:"\uAE38\uAC00", src:"roadside; edge of the road", pos:"noun", gender:null,
     note:"Pure Korean compound: road (길) + edge (가).",
     example:"A: \uAE38\uAC00\uC5D0 \uAF43\uC774 \uD53C\uC5C8\uC5B4\uC694.\nB: \uBD04\uC774 \uC654\uB098 \uBD10\uC694.\nA: \uAE38\uAC00\uC5D0 \uC8FC\uCC28\uD558\uBA74 \uC548 \uB3FC\uC694.\nB: \uBC8C\uAE08\uC744 \uBC1B\uC744 \uC218 \uC788\uC5B4\uC694.",
     exampleSrc:"A: Flowers bloomed on the roadside.\nB: Spring must be here.\nA: You should not park at the roadside.\nB: You might get a fine.",
     funFact:"길가 uses the native Korean suffix -가 meaning 'edge/side,' same as in 강가 (riverside), 바닷가 (seaside), 호숫가 (lakeside)."},

    {type:"teach", trg:"\uAE38\uAC70\uB9AC", src:"street; road (colloquial)", pos:"noun", gender:null,
     note:"Pure Korean compound: road (길) + open area (거리).\nStreet life and street culture.",
     example:"A: \uAE38\uAC70\uB9AC\uC5D0 \uC0AC\uB78C\uC774 \uB9CE\uC544\uC694.\nB: \uAE38\uAC70\uB9AC \uC74C\uC2DD\uC744 \uBA39\uC5B4 \uBCFC\uAE4C\uC694?\nA: \uAE38\uAC70\uB9AC \uACF5\uC5F0\uB3C4 \uC788\uC5B4\uC694.\nB: \uD65C\uBC1C\uD55C \uAE38\uAC70\uB9AC \uBB38\uD654\uB124\uC694.",
     exampleSrc:"A: There are many people on the street.\nB: Shall we try some street food?\nA: There are street performances too.\nB: What a lively street culture.",
     funFact:"길거리 음식 (street food) is a cornerstone of Korean food culture. Tteokbokki, fish cake, and hotteok vendors line busy streets."},

    {type:"mc",
     q:"\uC57D\uAD6D\uC774 \uAE38 \uBC18\uB300\uD3B8\uC5D0 \uC788\uC5B4\uC694. \uBC18\uB300\uD3B8\uC744 \uBB50\uB77C\uACE0 \uD574\uC694?",
     opts:["\uAC74\uB108\uD3B8","\uAD6C\uC5ED","\uAD11\uC7A5","\uAD6C\uC11D"],
     ans:"\uAC74\uB108\uD3B8",
     hint:"This word combines 'across' with 'side' to describe the opposite side of a street."},

    {type:"match", pairs:[
      {trg:"\uAC15\uB0A8", src:"south of the river"},
      {trg:"\uAC15\uBD81", src:"north of the river"},
      {trg:"\uAD11\uC7A5", src:"plaza"},
      {trg:"\uACE8\uBAA9\uAE38", src:"alley"},
      {trg:"\uAD6C\uCCAD", src:"district office"},
      {trg:"\uAE38\uAC70\uB9AC", src:"street"}
    ]}
  ]
};
export default LESSON_10;
