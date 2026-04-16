// Unit 36 Batch 2 Lesson 2: しけんじゅんび (Exam Preparation & Mixed Register)
const BATCH2_L_2 = {
  id:"jav2_u36l_b2_2", title:"しけんじゅんび", icon:"📝", xp:15, board:true,
  steps:[
    {type:"intro", title:"しけんじゅんび",
     desc:"This final lesson consolidates B2-level vocabulary through mixed-domain review and exam-style practice. You will encounter cross-domain vocabulary, register-switching, and the kind of complex reasoning tested on JLPT N1. This lesson is your capstone for B2 Japanese.",
     goals:["Review vocabulary across all B2 domains","Practice mixed-register comprehension","Demonstrate cross-domain analytical thinking"]},

    {type:"teach", trg:"ごうかく", src:"passing (an exam) / acceptance", pos:"noun", gender:null,
     note:"Kanji: 合格. ごうかくする = to pass.\nしけんにごうかくする = to pass an exam.",
     example:"A: JLPTにごうかくするためにはけいかくてきなべんきょうがひつようです。\nB: まいにちのつみかさねがだいじですね。",
     exampleSrc:"A: Planned study is needed to pass the JLPT.\nB: Daily accumulation is important.",
     funFact:"合格 uses 合 (match/fit) and 格 (standard/status). Passing an exam means 'meeting the standard.' Japanese exam culture is intense: from じゅけん (entrance exams) to しかくしけん (qualification exams), studying for ごうかく is a national pastime. Families visit shrines to pray for ごうかく, and special ごうかくきがん (prayer for passing) charms are sold."},

    {type:"teach", trg:"よみとく", src:"to read and understand / to comprehend deeply", pos:"verb", gender:null,
     note:"Kanji: 読み解く. ぶんしょうをよみとく = to comprehend a text.\nCombines reading with analytical understanding.",
     example:"A: ちょうぶんをよみとくちからがJLPTではためされます。\nB: ようしをつかむれんしゅうがたいせつですね。",
     exampleSrc:"A: The ability to comprehend long texts is tested on the JLPT.\nB: Practice in grasping the main points is important.",
     funFact:"読み解く combines 読む (read) and 解く (solve/untie). It means more than just reading: it means analytically understanding the structure, argument, and nuances of a text. JLPT N1 reading requires よみとく ability across diverse topics: editorials, academic abstracts, literary passages, and practical documents."},

    {type:"teach", trg:"ようし", src:"gist / main points / summary", pos:"noun", gender:null,
     note:"Kanji: 要旨. ろんぶんのようし = abstract of a paper.\nようしをまとめる = to summarize the main points.",
     example:"A: まずようしをつかんでからさいどくしましょう。\nB: スキミングのぎじゅつがやくにたちますね。",
     exampleSrc:"A: First grasp the gist, then re-read.\nB: Skimming techniques are useful.",
     funFact:"要旨 uses 要 (essential/important) and 旨 (meaning/purport). In Japanese academic writing, the ようし (abstract) is the first thing readers see. JLPT reading comprehension tests the ability to identify the ようし of complex passages. The skill of separating ようし from supporting details is fundamental to advanced reading."},

    {type:"mc", q:"よみとく means:", opts:["To read quickly","To read and deeply comprehend","To read aloud","To read for pleasure"], ans:"To read and deeply comprehend",
     hint:"This compound verb combines reading with analytical understanding, going beyond surface comprehension."},

    {type:"teach", trg:"ぶんみゃく", src:"context / flow of text / discourse", pos:"noun", gender:null,
     note:"Kanji: 文脈. ぶんみゃくからはんだんする = to judge from context.\nぜんごのぶんみゃく = surrounding context.",
     example:"A: このことばのいみはぶんみゃくによってかわります。\nB: ぜんごのぶんをよくみるひつようがありますね。",
     exampleSrc:"A: The meaning of this word changes depending on context.\nB: You need to look carefully at the surrounding sentences.",
     funFact:"文脈 uses 文 (text/writing) and 脈 (pulse/vein). Context is the 'vein running through the text.' Advanced Japanese comprehension depends heavily on ぶんみゃく reading. JLPT N1 tests this through questions where the same word means different things in different passages, requiring readers to determine meaning from ぶんみゃく."},

    {type:"teach", trg:"かんがえかた", src:"way of thinking / mindset / perspective", pos:"noun", gender:null,
     note:"Kanji: 考え方. From かんがえる + かた (way).\nにほんてきなかんがえかた = Japanese way of thinking.",
     example:"A: ぶんかによってかんがえかたがちがいます。\nB: そのちがいをりかいすることがこくさいりかいのだいいっぽです。",
     exampleSrc:"A: Ways of thinking differ by culture.\nB: Understanding those differences is the first step to international understanding.",
     funFact:"考え方 is one of the most frequently used compound nouns in Japanese. It captures something deeper than 'opinion': it is the framework through which you process reality. にほんてきなかんがえかた (Japanese way of thinking) is a concept explored in countless books. Understanding different かんがえかた is seen as the key to cross-cultural communication."},

    {type:"teach", trg:"がいようをつかむ", src:"to grasp the outline / to get the overview", pos:"verb", gender:null,
     note:"がいよう (outline/summary) + つかむ (to grasp).\nAn essential reading comprehension strategy.",
     example:"A: まずぶんしょうのがいようをつかみましょう。\nB: だいいちだんらくとさいごのだんらくがヒントになります。",
     exampleSrc:"A: First, let us grasp the outline of the text.\nB: The first and last paragraphs give hints.",
     funFact:"概要 uses 概 (approximate) and 要 (essential). つかむ (to grasp) makes this a physical metaphor: literally 'grabbing hold of the outline.' This is a key JLPT reading strategy. Japanese test-taking advice emphasizes がいようをつかむ before diving into details, a top-down reading approach valued in Japanese education."},

    {type:"fb", s:"まずぶんしょうの{1}をつかみましょう。\n(First, let us grasp the outline of the text.)", a:"がいよう", opts:["がいよう","ようし","ぶんみゃく","しゅだい"], sSrc:"First, let us grasp the outline of the text.",
     hint:"The noun meaning 'outline' or 'overview,' the broad picture before details."},

    {type:"teach", trg:"しんちょう", src:"careful / cautious / prudent", pos:"adj", gender:null,
     note:"Kanji: 慎重. しんちょうに = carefully.\nしんちょうなはんだん = careful judgment.",
     example:"A: じゅうようなきめごとにはしんちょうなはんだんがひつようです。\nB: あわてずにじっくりかんがえましょう。",
     exampleSrc:"A: Important decisions require careful judgment.\nB: Let us think thoroughly without rushing.",
     funFact:"慎重 uses 慎 (prudent/careful) and 重 (heavy/serious). Being しんちょう is a valued trait in Japanese decision-making. The culture prefers thorough deliberation over quick action. The phrase しんちょうにけんとうする (to carefully consider) is ubiquitous in business and government, sometimes frustratingly so for those seeking quick decisions."},

    {type:"teach", trg:"つみかさね", src:"accumulation / building up over time", pos:"noun", gender:null,
     note:"From つみかさねる (to pile up/accumulate).\nどりょくのつみかさね = accumulated effort.",
     example:"A: にほんごのじょうたつはまいにちのつみかさねです。\nB: いちにちすこしずつでもかならずのびます。",
     exampleSrc:"A: Japanese language improvement is daily accumulation.\nB: Even a little each day will certainly lead to progress.",
     funFact:"積み重ね combines 積む (to pile up) and 重ねる (to layer/repeat). This word captures a deeply Japanese concept: great achievements come from small, consistent daily efforts layered over time. The manufacturing philosophy of カイゼン (continuous improvement) is essentially つみかさね applied to business processes."},

    {type:"teach", trg:"さいどく", src:"re-reading / reading again", pos:"noun", gender:null,
     note:"Kanji: 再読. さいどくする = to re-read.\nReading for deeper understanding the second time.",
     example:"A: さいどくすると、はじめてきづくことがおおいです。\nB: めいさくはなんどよんでもあたらしいはっけんがありますね。",
     exampleSrc:"A: When you re-read, there are many things you notice for the first time.\nB: Masterpieces have new discoveries no matter how many times you read them.",
     funFact:"再読 uses 再 (again) and 読 (read). Japanese literary culture values さいどく highly. The phrase にどよみ、さんどよみ (reading twice, three times) is recommended for complex texts. JLPT preparation guides emphasize さいどく of practice tests to understand not just the correct answers but why incorrect options are wrong."},

    {type:"teach", trg:"きょうつうてん", src:"common point / shared characteristic", pos:"noun", gender:null,
     note:"Kanji: 共通点. きょうつうてんをみつける = to find common points.\nきょうつうてんとそういてん = similarities and differences.",
     example:"A: ふたつのぶんかのきょうつうてんとそういてんをかんがえましょう。\nB: ひかくぶんかろんのきほんですね。",
     exampleSrc:"A: Let us think about the similarities and differences between two cultures.\nB: That is the foundation of comparative cultural studies.",
     funFact:"共通点 uses 共通 (shared/common) and 点 (point). Finding きょうつうてん between different domains is a key analytical skill. JLPT reading often asks what two passages have in common. In Japanese education, comparing きょうつうてん and そういてん (differences) is a standard analytical framework applied from elementary school through university."},

    {type:"mc", q:"つみかさね captures the Japanese concept that:", opts:["Speed is more important than consistency","Great results come from small daily efforts over time","Only natural talent matters","Practice is unnecessary"], ans:"Great results come from small daily efforts over time",
     hint:"This word embodies the belief that consistent s... e... layer into significant achievements."},

    {type:"fb", s:"JLPTにごうかくするためには{1}てきなべんきょうがひつようです。\n(Planned study is needed to pass the JLPT.)", a:"けいかく", opts:["けいかく","しんちょう","がいよう","ようし"], sSrc:"Planned study is needed to pass the JLPT.",
     hint:"The noun meaning 'plan' or 'planning,' a systematic approach to achieving a goal."},

    {type:"match", pairs:[{trg:"ごうかく",src:"passing (exam)"},{trg:"よみとく",src:"read and comprehend deeply"},{trg:"ようし",src:"gist/main points"},{trg:"ぶんみゃく",src:"context"}]},

    {type:"fb", s:"にほんごのじょうたつはまいにちの{1}です。\n(Japanese language improvement is daily accumulation.)", a:"つみかさね", opts:["つみかさね","べんきょう","しけん","けいかく"], sSrc:"Japanese language improvement is daily accumulation.",
     hint:"The noun for building something up layer by layer over time."},

    {type:"match", pairs:[{trg:"かんがえかた",src:"way of thinking"},{trg:"しんちょう",src:"careful/cautious"},{trg:"つみかさね",src:"accumulation"},{trg:"きょうつうてん",src:"common point"}]},

    {type:"tip", title:"B2 Complete: Your Next Steps",
     text:"You have completed B2 Japanese. Key accomplishments:\n\n1. 14 specialized domains from nominalization to cybersecurity\n2. 400+ B2-level vocabulary items across all domains\n3. Advanced grammar: にほかならない, をもって, つつある\n4. Formal connectors: すなわち, いっぽう, にもかかわらず\n5. Cross-domain analytical vocabulary\n\nFor JLPT N1:\n- Read Japanese newspapers daily (NHK News Web)\n- Listen to podcasts and lectures\n- Practice reading comprehension with time limits\n- Review all B2 vocabulary systematically",
     deepDive:{title:"The Road to N1",
      text:"JLPT N1 requires approximately 10,000 vocabulary items and 200+ grammar patterns.\n\nYour B2 vocabulary covers the core academic and social vocabulary tested on N1. To continue:\n\n1. Vocabulary: Add 10-20 new words daily from N1 word lists.\n2. Grammar: Study the remaining N1 patterns (approximately 80-100 beyond what you have learned).\n3. Reading: Practice with full-length N1 reading sections. Focus on speed and accuracy.\n4. Listening: Train with NHK Radio News (slower pace) then TV news (natural speed).\n\nRemember: つみかさね. Consistent daily effort is the path to N1 ごうかく."}},

    {type:"mc", q:"The most important strategy for JLPT reading comprehension is:", opts:["Reading every word carefully from start to finish","First grasping the outline, then re-reading for details","Guessing all answers without reading","Only reading the questions, not the passages"], ans:"First grasping the outline, then re-reading for details",
     hint:"がいようをつかむ (grasp the outline) first, then さいどく (re-read) for specific answers."},
  ]
};
export default BATCH2_L_2;
