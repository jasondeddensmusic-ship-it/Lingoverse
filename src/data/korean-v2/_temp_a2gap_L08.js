// Korean A2 Gap - Lesson 8: School & Education Levels (18 words)
const LESSON_8 = {
  id:"kov2_a2gap_l8", title:"학교와 교육", icon:"🏫", xp:15, board:true,
  steps:[
    {type:"intro", title:"School & Education Levels",
     desc:"Learn vocabulary for Korean school types, student labels, and academic life from elementary to university.",
     goals:["Name all school levels in Korean","Distinguish student types by gender and level","Talk about classes, textbooks, and school life"]},

    // --- Teach block 1: School levels ---
    {type:"teach", trg:"초등학교", src:"elementary school", pos:"noun", gender:null,
     note:"Compound: 초등 (elementary) + 학교 (school). Grades 1-6.",
     example:"A: 초등학교 몇 학년이에요?\nB: 3학년이에요.",
     exampleSrc:"A: What grade are you in elementary school?\nB: I'm in third grade.",
     funFact:"From hanja: 初 (first) + 等 (level) + 學 (study) + 校 (school). Korean children start at age 7 (Korean age 8)."},

    {type:"teach", trg:"중학교", src:"middle school", pos:"noun", gender:null,
     note:"Compound: 중 (middle) + 학교 (school). Grades 7-9.",
     example:"A: 중학교 어디 다녀요?\nB: 서울중학교 다녀요.",
     exampleSrc:"A: Which middle school do you attend?\nB: I attend Seoul Middle School.",
     funFact:"Middle school is 3 years in Korea. Students wear uniforms and start studying intensely for high school entrance."},

    {type:"teach", trg:"중학생", src:"middle school student", pos:"noun", gender:null,
     note:"Compound: 중학 (middle school) + 생 (student).",
     example:"A: 동생이 중학생이에요?\nB: 네, 중학교 2학년이에요.",
     exampleSrc:"A: Is your younger sibling a middle school student?\nB: Yes, they're in 8th grade.",
     funFact:"The suffix 생 (生, life/student) appears in many compounds: 학생, 대학생, 고등학생, 선생 (teacher)."},

    {type:"teach", trg:"고등학교", src:"high school", pos:"noun", gender:null,
     note:"Compound: 고등 (high level) + 학교 (school). Grades 10-12.",
     example:"A: 고등학교 졸업했어요?\nB: 네, 작년에 졸업했어요.",
     exampleSrc:"A: Did you graduate from high school?\nB: Yes, I graduated last year.",
     funFact:"Korean high school is notoriously intense. Students often study until 10 PM at school or in study halls (독서실)."},

    {type:"teach", trg:"고등학생", src:"high school student", pos:"noun", gender:null,
     note:"Compound: 고등학 (high school) + 생 (student). Often shortened to 고딩.",
     example:"A: 고등학생이에요?\nB: 네, 고등학교 1학년이에요.",
     exampleSrc:"A: Are you a high school student?\nB: Yes, I'm in 10th grade.",
     funFact:"The slang 고딩 (goding) is widely used informally. Similarly, 중딩 for middle schoolers."},

    // --- Quiz block 1 ---
    {type:"mc",
     q:"한국의 초등학교는 몇 학년까지 있어요?",
     opts:["6학년","5학년","4학년","3학년"],
     ans:"6학년",
     hint:"This is the first level of schooling. It runs from grade one through the last single-digit grade before seven."},

    {type:"fb",
     s:"제 동생은 {1}이에요. 중학교 3학년이에요.",
     a:["중학생"],
     opts:["중학생","고등학생","대학생","초등학생"],
     hint:"A student who attends the school level between elementary and high school.",
     sSrc:"My younger sibling is a {1}. They're in 9th grade."},

    {type:"match", pairs:[
      {trg:"초등학교", src:"elementary school"},
      {trg:"중학교", src:"middle school"},
      {trg:"고등학교", src:"high school"},
      {trg:"고등학생", src:"high school student"}
    ]},

    // --- Teach block 2: University & student types ---
    {type:"teach", trg:"대학생", src:"university student", pos:"noun", gender:null,
     note:"Compound: 대학 (university) + 생 (student).",
     example:"A: 대학생이에요?\nB: 네, 한국어를 전공해요.",
     exampleSrc:"A: Are you a university student?\nB: Yes, I major in Korean.",
     funFact:"University life in Korea is seen as the 'golden years' of freedom between intense high school and demanding work life."},

    {type:"teach", trg:"남학생", src:"male student", pos:"noun", gender:null,
     note:"Compound: 남 (male) + 학생 (student).",
     example:"A: 반에 남학생이 몇 명이에요?\nB: 15명이에요.",
     exampleSrc:"A: How many male students are in the class?\nB: There are 15.",
     funFact:"남 (男) means male. Combined with many words: 남자 (man), 남편 (husband), 남학생 (male student)."},

    {type:"teach", trg:"여학생", src:"female student", pos:"noun", gender:null,
     note:"Compound: 여 (female) + 학생 (student).",
     example:"A: 여학생이 더 많아요?\nB: 네, 20명이에요.",
     exampleSrc:"A: Are there more female students?\nB: Yes, there are 20.",
     funFact:"여 (女) means female. Combined with: 여자 (woman), 여동생 (younger sister), 여학생 (female student)."},

    {type:"teach", trg:"학년", src:"school year; grade", pos:"noun", gender:null,
     note:"Compound: 학 (study) + 년 (year). Also means academic grade level.",
     example:"A: 몇 학년이에요?\nB: 2학년이에요.",
     exampleSrc:"A: What grade are you in?\nB: I'm in second year.",
     funFact:"Korean academic years start in March, not September. The school year runs March through February."},

    {type:"teach", trg:"방학", src:"school vacation", pos:"noun", gender:null,
     note:"Compound: 방 (release) + 학 (study). Literally 'released from study.'",
     example:"A: 방학에 뭐 할 거예요?\nB: 여행 갈 거예요.",
     exampleSrc:"A: What will you do during vacation?\nB: I'm going to travel.",
     funFact:"Summer vacation (여름방학) is about 4-5 weeks, and winter vacation (겨울방학) is longer at 5-6 weeks."},

    // --- Quiz block 2 ---
    {type:"mc",
     q:"한국의 학교 학년은 몇 월에 시작해요?",
     opts:["1월","3월","4월","9월"],
     ans:"3월",
     hint:"The Korean academic calendar begins in spring, not fall like many Western countries."},

    {type:"fb",
     s:"{1}에 여행을 갈 거예요. 학교가 쉬어요!",
     a:["방학"],
     opts:["방학","학년","수업","교과서"],
     hint:"The period when students are released from studies and school is closed.",
     sSrc:"I'm going to travel during {1}. School is on break!"},

    // --- Teach block 3: Academic items ---
    {type:"teach", trg:"수업", src:"class; lesson", pos:"noun", gender:null,
     note:"From hanja 授 (give) + 業 (work). A class session.",
     example:"A: 오늘 수업 몇 시에 있어요?\nB: 10시에 시작해요.",
     exampleSrc:"A: What time is class today?\nB: It starts at 10.",
     funFact:"수업 is the formal word for class sessions. 반 refers to a class group (homeroom), while 과목 means subject."},

    {type:"teach", trg:"교과서", src:"textbook", pos:"noun", gender:null,
     note:"From hanja 教 (teach) + 科 (subject) + 書 (book).",
     example:"A: 교과서 가져왔어요?\nB: 아, 집에 놓고 왔어요!",
     exampleSrc:"A: Did you bring your textbook?\nB: Oh, I left it at home!",
     funFact:"Korean schools provide standardized textbooks. Until recently, all students nationwide used the same ones."},

    {type:"teach", trg:"기숙사", src:"dormitory", pos:"noun", gender:null,
     note:"From hanja 寄 (stay) + 宿 (lodge) + 舍 (building).",
     example:"A: 기숙사에 살아요?\nB: 네, 학교 안에 있어요.",
     exampleSrc:"A: Do you live in the dormitory?\nB: Yes, it's on campus.",
     funFact:"Korean university dorms often have strict curfews and roommate assignments. Getting a dorm room is competitive."},

    {type:"teach", trg:"사전", src:"dictionary", pos:"noun", gender:null,
     note:"From hanja 辭 (word) + 典 (classic/reference).",
     example:"A: 사전 있어요?\nB: 네, 전자 사전이에요.",
     exampleSrc:"A: Do you have a dictionary?\nB: Yes, it's an electronic dictionary.",
     funFact:"Paper dictionaries have largely been replaced by apps, but 사전 remains the standard word for any dictionary."},

    {type:"teach", trg:"단어", src:"word; vocabulary", pos:"noun", gender:null,
     note:"From hanja 單 (single) + 語 (word). An individual word.",
     example:"A: 오늘 단어 몇 개 외웠어요?\nB: 20개 외웠어요.",
     exampleSrc:"A: How many words did you memorize today?\nB: I memorized 20.",
     funFact:"외우다 (to memorize) is the verb Korean students use most with 단어. Vocabulary memorization is central to studying."},

    {type:"teach", trg:"발음", src:"pronunciation", pos:"noun", gender:null,
     note:"From hanja 發 (emit) + 音 (sound).",
     example:"A: 한국어 발음이 어려워요?\nB: 네, 특히 받침이요.",
     exampleSrc:"A: Is Korean pronunciation difficult?\nB: Yes, especially final consonants.",
     funFact:"받침 (batchim, final consonants) is what makes Korean pronunciation tricky. Seven sounds can appear in syllable-final position."},

    // --- Quiz block 3 ---
    {type:"fb",
     s:"모르는 {1}는 사전에서 찾아보세요.",
     a:["단어"],
     opts:["단어","발음","수업","교과서"],
     hint:"When you encounter an unknown item of vocabulary, you look it up in a dictionary.",
     sSrc:"Look up unknown {1} in the dictionary."},

    {type:"mc",
     q:"한국어에서 가장 어려운 발음은 뭐예요?",
     opts:["자음","성조","받침","모음"],
     ans:"받침",
     hint:"These are the consonants that appear at the bottom of a Korean syllable block."},

    // --- Teach block 4: Languages ---
    {type:"teach", trg:"외국어", src:"foreign language", pos:"noun", gender:null,
     note:"Compound: 외국 (foreign country) + 어 (language).",
     example:"A: 외국어 공부해요?\nB: 네, 영어와 일본어를 공부해요.",
     exampleSrc:"A: Do you study a foreign language?\nB: Yes, I study English and Japanese.",
     funFact:"English is the most studied 외국어 in Korea. Japanese and Chinese are also popular second foreign languages."},

    {type:"teach", trg:"한자", src:"Chinese characters; hanja", pos:"noun", gender:null,
     note:"Chinese characters used in Korean. Studied in school.",
     example:"A: 한자 알아요?\nB: 조금 알아요. 어려워요.",
     exampleSrc:"A: Do you know hanja?\nB: I know a little. It's difficult.",
     funFact:"About 60% of Korean vocabulary comes from Chinese characters, but daily life uses Hangul almost exclusively now."},

    // --- Quiz block 4 ---
    {type:"match", pairs:[
      {trg:"수업", src:"class/lesson"},
      {trg:"교과서", src:"textbook"},
      {trg:"사전", src:"dictionary"},
      {trg:"기숙사", src:"dormitory"},
      {trg:"외국어", src:"foreign language"}
    ]},

    {type:"fb",
     s:"한국어 단어의 60%는 {1}에서 왔어요.",
     a:["한자"],
     opts:["한자","한글","외국어","발음"],
     hint:"These are the Chinese characters that historically influenced Korean vocabulary.",
     sSrc:"60% of Korean words come from {1}."}
  ]
};
export default LESSON_8;
