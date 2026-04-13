// B2 Lesson 08: Education System
// Words: 교내, 교대, 교문, 교복, 교사, 교시, 교양, 교외, 교육비, 교육자,
//        교장, 교재, 교직, 교훈, 과외, 강사, 강의, 강의하다, 과정, 교포

const LESSON_8 = {
  id:"kov2_b2_l8", title:"교육 제도", icon:"\uD83C\uDFEB", xp:15, board:true,
  steps:[
    {type:"intro", title:"The Education System",
     desc:"Learn vocabulary for schools, teaching, and the Korean education system. These words are critical for understanding TOPIK II reading passages about education and society.",
     goals:["Learn 20 education system vocabulary words","Understand school-related Sino-Korean compounds","Discuss education topics in formal Korean"]},

    {type:"teach", trg:"\uAD50\uB0B4", src:"within the school; on campus", pos:"noun", gender:null,
     note:"Sino-Korean: school (校) + inside (內).\nOpposite of 교외 (outside school).",
     example:"A: \uAD50\uB0B4 \uC2DD\uB2F9\uC5D0\uC11C \uC810\uC2EC \uBA39\uC5B4\uC694?\nB: \uB124, \uAD50\uB0B4 \uC2DD\uB2F9\uC774 \uC800\uB834\uD574\uC694.\nA: \uAD50\uB0B4 \uD65C\uB3D9\uC740 \uBB50 \uD574\uC694?\nB: \uAD50\uB0B4 \uBC29\uC1A1\uBD80\uC5D0 \uC18D\uD574 \uC788\uC5B4\uC694.",
     exampleSrc:"A: Do you eat lunch at the school cafeteria?\nB: Yes, the campus cafeteria is cheap.\nA: What campus activities do you do?\nB: I belong to the campus broadcasting club.",
     funFact:"교내 vs 교외: 내 (inside) and 외 (outside) are opposites. This pattern works for many pairs: 국내/국외, 실내/실외."},

    {type:"teach", trg:"\uAD50\uB300", src:"teacher's college; shift rotation", pos:"noun", gender:null,
     note:"Sino-Korean: teaching (教) + generation (代).\nAlso means 'taking turns' or 'shift.'",
     example:"A: \uAD50\uB300\uC5D0\uC11C \uACF5\uBD80\uD558\uACE0 \uC788\uC5B4\uC694.\nB: \uCD08\uB4F1\uD559\uAD50 \uC120\uC0DD\uB2D8\uC774 \uB418\uACE0 \uC2F6\uC5B4\uC694?\nA: \uB124, \uAD50\uB300 \uC878\uC5C5 \uD6C4\uC5D0\uC694.\nB: \uBA4B\uC9C4 \uAFC8\uC774\uB124\uC694.",
     exampleSrc:"A: I am studying at a teacher's college.\nB: Do you want to become an elementary school teacher?\nA: Yes, after graduating from the college of education.\nB: That is a wonderful dream.",
     funFact:"Korea's education colleges (교대) are separate institutions that train elementary school teachers. They are highly competitive to enter."},

    {type:"teach", trg:"\uAD50\uBB38", src:"school gate", pos:"noun", gender:null,
     note:"Sino-Korean: school (校) + gate (門).",
     example:"A: \uAD50\uBB38 \uC55E\uC5D0\uC11C \uB9CC\uB098\uC694.\nB: \uBA87 \uC2DC\uC5D0 \uB9CC\uB0A0\uAE4C\uC694?\nA: 8\uC2DC\uC5D0 \uAD50\uBB38 \uC55E\uC5D0\uC11C\uC694.\nB: \uC54C\uACA0\uC5B4\uC694, \uAD50\uBB38\uC5D0\uC11C \uBD10\uC694.",
     exampleSrc:"A: Let us meet in front of the school gate.\nB: What time shall we meet?\nA: At 8 o'clock at the school gate.\nB: Okay, see you at the gate.",
     funFact:"교문 is a cultural landmark. In Korea, parents and vendors often gather at school gates, especially during exam periods (수능)."},

    {type:"teach", trg:"\uAD50\uBCF5", src:"school uniform", pos:"noun", gender:null,
     note:"Sino-Korean: school (校) + clothes (服).",
     example:"A: \uD55C\uAD6D \uD559\uC0DD\uB4E4\uC740 \uAD50\uBCF5\uC744 \uC785\uC5B4\uC694.\nB: \uAD50\uBCF5\uC774 \uC608\uC058\uC694?\nA: \uD559\uAD50\uB9C8\uB2E4 \uAD50\uBCF5\uC774 \uB2EC\uB77C\uC694.\nB: \uAD50\uBCF5 \uBB38\uD654\uAC00 \uC7AC\uBBF8\uC788\uB124\uC694.",
     exampleSrc:"A: Korean students wear school uniforms.\nB: Are the uniforms nice?\nA: Each school has different uniforms.\nB: Uniform culture is interesting.",
     funFact:"Korean students often customize their uniforms despite rules. Popular schools are sometimes chosen partly for having attractive 교복 designs."},

    {type:"teach", trg:"\uAD50\uC0AC", src:"teacher; educator", pos:"noun", gender:null,
     note:"Sino-Korean: teach (教) + master (師).\nFormal term for a schoolteacher.",
     example:"A: \uAD50\uC0AC\uAC00 \uB418\uB824\uBA74 \uBB50\uAC00 \uD544\uC694\uD574\uC694?\nB: \uAD50\uC0AC \uC790\uACA9\uC99D\uC774 \uD544\uC694\uD574\uC694.\nA: \uAD50\uC0AC\uB294 \uC874\uACBD\uBC1B\uB294 \uC9C1\uC5C5\uC774\uC5D0\uC694.\nB: \uB9DE\uC544\uC694, \uCC45\uC784\uC774 \uD070 \uC9C1\uC5C5\uC774\uC8E0.",
     exampleSrc:"A: What do you need to become a teacher?\nB: You need a teaching certificate.\nA: Teaching is a respected profession.\nB: That is right, it carries great responsibility.",
     funFact:"교사 is the formal/official term. 선생님 (teacher + honorific) is used when addressing teachers directly. Both are extremely respected roles in Korean society."},

    {type:"mc",
     q:"\uD55C\uAD6D \uD559\uC0DD\uB4E4\uC774 \uD559\uAD50\uC5D0\uC11C \uC785\uB294 \uC637\uC744 \uBB50\uB77C\uACE0 \uD574\uC694?",
     opts:["\uAD50\uBCF5","\uAD50\uC7AC","\uAD50\uC591","\uAD50\uC9C1"],
     ans:"\uAD50\uBCF5",
     hint:"This compound combines 'school' and 'clothing' in Sino-Korean."},

    {type:"teach", trg:"\uAD50\uC2DC", src:"class period (counter)", pos:"noun", gender:null,
     note:"Sino-Korean: school (校) + time (時).\nUsed to count school periods.",
     example:"A: \uC624\uB298 \uBA87 \uAD50\uC2DC\uAE4C\uC9C0 \uC218\uC5C5\uC774 \uC788\uC5B4\uC694?\nB: 6\uAD50\uC2DC\uAE4C\uC9C0\uC608\uC694.\nA: 1\uAD50\uC2DC\uB294 \uBB34\uC2A8 \uACFC\uBAA9\uC774\uC5D0\uC694?\nB: \uC218\uD559\uC774\uC5D0\uC694.",
     exampleSrc:"A: How many class periods do you have today?\nB: Until 6th period.\nA: What subject is 1st period?\nB: It is math.",
     funFact:"Korean school days are famously long. Students might have 7-8 교시 plus after-school study (자율학습). The education system is intense."},

    {type:"teach", trg:"\uAD50\uC591", src:"liberal arts; general education; refinement", pos:"noun", gender:null,
     note:"Sino-Korean: teach (教) + cultivate (養).\nBroadening one's knowledge and culture.",
     example:"A: \uAD50\uC591 \uACFC\uBAA9\uC774 \uBB50\uAC00 \uC788\uC5B4\uC694?\nB: \uCCA0\uD559, \uC608\uC220, \uC5ED\uC0AC \uB4F1\uC774\uC5D0\uC694.\nA: \uAD50\uC591\uC744 \uC313\uC73C\uBA74 \uC2DC\uC57C\uAC00 \uB113\uC5B4\uC838\uC694.\nB: \uB9DE\uC544\uC694, \uAD50\uC591\uC774 \uC911\uC694\uD574\uC694.",
     exampleSrc:"A: What liberal arts courses are there?\nB: Philosophy, art, history and others.\nA: Building culture broadens one's perspective.\nB: That is right, general education is important.",
     funFact:"In Korean universities, 교양 courses are required for all students regardless of major. They include everything from philosophy to music appreciation."},

    {type:"teach", trg:"\uAD50\uC678", src:"outskirts; suburbs; outside school", pos:"noun", gender:null,
     note:"Sino-Korean: school/suburb (郊) + outside (外).\nThe area outside a city or school.",
     example:"A: \uAD50\uC678\uC5D0\uC11C \uC0B4\uACE0 \uC788\uC5B4\uC694.\nB: \uCD9C\uD1F4\uADFC\uC774 \uBD88\uD3B8\uD558\uC9C0 \uC54A\uC544\uC694?\nA: \uACF5\uAE30\uAC00 \uB9D1\uACE0 \uC870\uC6A9\uD574\uC694.\nB: \uAD50\uC678 \uC0DD\uD65C\uB3C4 \uC7A5\uC810\uC774 \uC788\uC8E0.",
     exampleSrc:"A: I live in the suburbs.\nB: Is the commute inconvenient?\nA: The air is clean and quiet.\nB: Suburban life has advantages too.",
     funFact:"교외 uses different hanja (郊外) from 교내 (校內). The 교 in 교외 means 'outskirts,' while 교 in 교내 means 'school.'"},

    {type:"teach", trg:"\uAD50\uC721\uBE44", src:"education expenses; tuition", pos:"noun", gender:null,
     note:"Sino-Korean: education (教育) + expense (費).",
     example:"A: \uAD50\uC721\uBE44\uAC00 \uBD80\uB2F4\uC774 \uB3FC\uC694.\nB: \uC7A5\uD559\uAE08\uC744 \uC2E0\uCCAD\uD574 \uBCF4\uC138\uC694.\nA: \uAD50\uC721\uBE44 \uC9C0\uC6D0 \uC81C\uB3C4\uAC00 \uC788\uC5B4\uC694?\nB: \uC815\uBD80 \uC7A5\uD559\uAE08\uC774 \uC788\uC5B4\uC694.",
     exampleSrc:"A: Education expenses are a burden.\nB: Try applying for a scholarship.\nA: Are there education expense support programs?\nB: There are government scholarships.",
     funFact:"Korean families spend among the highest percentages of income on 교육비 worldwide. Private tutoring (사교육비) is a major household expense."},

    {type:"teach", trg:"\uAD50\uC721\uC790", src:"educator; education professional", pos:"noun", gender:null,
     note:"Sino-Korean: education (教育) + person (者).",
     example:"A: \uD6CC\uB96D\uD55C \uAD50\uC721\uC790\uAC00 \uB418\uACE0 \uC2F6\uC5B4\uC694.\nB: \uAD50\uC721\uC5D0 \uB300\uD55C \uC5F4\uC815\uC774 \uB290\uAEF4\uC838\uC694.\nA: \uAD50\uC721\uC790\uB294 \uC0AC\uD68C\uC5D0 \uD070 \uC601\uD5A5\uC744 \uBBCC\uCE58\uC8E0.\nB: \uB9DE\uC544\uC694, \uC874\uACBD\uBC1B\uB294 \uC9C1\uC5C5\uC774\uC5D0\uC694.",
     exampleSrc:"A: I want to become an excellent educator.\nB: I can feel your passion for education.\nA: Educators have a great impact on society.\nB: That is right, it is a respected profession.",
     funFact:"교육자 implies a broader role than 교사 (teacher). An 교육자 shapes educational philosophy and policy, not just classroom teaching."},

    {type:"fb",
     s:"\uD55C\uAD6D \uAC00\uC815\uC5D0\uC11C {1}\uAC00 \uD070 \uBD80\uB2F4\uC774\uC5D0\uC694.",
     a:["\uAD50\uC721\uBE44"],
     opts:["\uAD50\uC721\uBE44","\uAD50\uC591","\uAD50\uC7AC","\uACBD\uBE44"],
     hint:"This Sino-Korean compound means the cost of schooling and education.",
     sSrc:"In Korean families, {1} is a big burden."},

    {type:"teach", trg:"\uAD50\uC7A5", src:"school principal", pos:"noun", gender:null,
     note:"Sino-Korean: school (校) + leader (長).",
     example:"A: \uAD50\uC7A5 \uC120\uC0DD\uB2D8\uC774 \uBC14\uB00C\uC168\uC5B4\uC694.\nB: \uC0C8 \uAD50\uC7A5 \uC120\uC0DD\uB2D8\uC740 \uC5B4\uB5A4 \uBD84\uC774\uC5D0\uC694?\nA: \uACBD\uD5D8\uC774 \uD48D\uBD80\uD55C \uAD50\uC721\uC790\uC608\uC694.\nB: \uD559\uAD50\uAC00 \uB354 \uC88B\uC544\uC9C0\uACA0\uB124\uC694.",
     exampleSrc:"A: The school principal has changed.\nB: What kind of person is the new principal?\nA: An experienced educator.\nB: The school will improve.",
     funFact:"교장 선생님 (principal) commands enormous respect in Korean culture. The position carries both administrative and moral authority."},

    {type:"teach", trg:"\uAD50\uC7AC", src:"textbook; teaching materials", pos:"noun", gender:null,
     note:"Sino-Korean: teach (教) + materials (材).",
     example:"A: \uC0C8 \uAD50\uC7AC\uB97C \uC0AC\uC57C \uD574\uC694.\nB: \uC5B4\uB514\uC11C \uC0B4 \uC218 \uC788\uC5B4\uC694?\nA: \uD559\uAD50 \uC11C\uC810\uC5D0\uC11C \uC0B4 \uC218 \uC788\uC5B4\uC694.\nB: \uC911\uACE0 \uAD50\uC7AC\uB3C4 \uAD1C\uCC2E\uC544\uC694.",
     exampleSrc:"A: I need to buy new textbooks.\nB: Where can I buy them?\nA: You can buy them at the school bookstore.\nB: Used textbooks are fine too.",
     funFact:"교재 is broader than 교과서 (textbook). 교재 includes all teaching materials: workbooks, audio materials, supplementary readings."},

    {type:"teach", trg:"\uAD50\uC9C1", src:"teaching profession", pos:"noun", gender:null,
     note:"Sino-Korean: teach (教) + job/duty (職).",
     example:"A: \uAD50\uC9C1\uC5D0 \uAD00\uC2EC\uC774 \uC788\uC5B4\uC694.\nB: \uAD50\uC9C1\uC740 \uC548\uC815\uC801\uC778 \uC9C1\uC5C5\uC774\uC5D0\uC694.\nA: \uAD50\uC9C1 \uC774\uC218 \uACFC\uBAA9\uC744 \uB4E3\uACE0 \uC788\uC5B4\uC694.\nB: \uC900\uBE44\uB97C \uC798 \uD558\uACE0 \uC788\uB124\uC694.",
     exampleSrc:"A: I am interested in the teaching profession.\nB: Teaching is a stable career.\nA: I am taking teacher certification courses.\nB: You are preparing well.",
     funFact:"교직 carries prestige in Korea. The 교직 이수 (teacher certification) program adds teaching credentials to any university degree."},

    {type:"teach", trg:"\uAD50\uD6C8", src:"lesson; moral (of a story); teaching", pos:"noun", gender:null,
     note:"Sino-Korean: teach (教) + instruct (訓).\nA lesson learned, especially moral.",
     example:"A: \uC774 \uC774\uC57C\uAE30\uC758 \uAD50\uD6C8\uC740 \uBB50\uC608\uC694?\nB: \uC815\uC9C1\uC774 \uC911\uC694\uD558\uB2E4\uB294 \uAD50\uD6C8\uC774\uC5D0\uC694.\nA: \uC2E4\uD328\uC5D0\uC11C \uAD50\uD6C8\uC744 \uC5BB\uC5C8\uC5B4\uC694.\nB: \uAD50\uD6C8\uC740 \uC131\uC7A5\uC758 \uBC11\uAC70\uB984\uC774\uC5D0\uC694.",
     exampleSrc:"A: What is the lesson of this story?\nB: The lesson is that honesty is important.\nA: I learned a lesson from failure.\nB: Lessons are the foundation of growth.",
     funFact:"교훈 also appears on school walls as the school motto: 학교 교훈 (school motto). Most Korean schools display their 교훈 prominently."},

    {type:"teach", trg:"\uACFC\uC678", src:"private tutoring; extracurricular lessons", pos:"noun", gender:null,
     note:"Sino-Korean: exceed (課) + outside (外).\nLiterally 'outside the curriculum.'",
     example:"A: \uACFC\uC678\uB97C \uBC1B\uACE0 \uC788\uC5B4\uC694?\nB: \uC218\uD559 \uACFC\uC678\uB97C \uBC1B\uACE0 \uC788\uC5B4\uC694.\nA: \uACFC\uC678\uBE44\uAC00 \uBE44\uC2F8\uC8E0?\nB: \uB124, \uD558\uC9C0\uB9CC \uC131\uC801\uC774 \uC62C\uB790\uC5B4\uC694.",
     exampleSrc:"A: Are you receiving private tutoring?\nB: I am getting math tutoring.\nA: Tutoring is expensive, right?\nB: Yes, but my grades improved.",
     funFact:"과외 is a massive industry in Korea. Despite government attempts to regulate it, private tutoring spending exceeds many countries' total education budgets."},

    {type:"teach", trg:"\uAC15\uC0AC", src:"instructor; lecturer", pos:"noun", gender:null,
     note:"Sino-Korean: lecture (講) + master (師).\nA teacher or instructor, often non-tenured.",
     example:"A: \uB300\uD559\uC5D0\uC11C \uAC15\uC0AC\uB85C \uC77C\uD574\uC694.\nB: \uBB34\uC2A8 \uACFC\uBAA9\uC744 \uAC00\uB974\uCE58\uC138\uC694?\nA: \uD55C\uAD6D\uC5B4\uB97C \uAC00\uB974\uCE58\uACE0 \uC788\uC5B4\uC694.\nB: \uAC15\uC0AC \uC0DD\uD65C\uC774 \uC88B\uC73C\uC138\uC694?",
     exampleSrc:"A: I work as a university lecturer.\nB: What subject do you teach?\nA: I teach Korean language.\nB: Do you enjoy lecturing?",
     funFact:"강사 is below 교수 (professor) in the Korean academic hierarchy. 시간강사 (part-time lecturer) is a controversial position due to low pay."},

    {type:"teach", trg:"\uAC15\uC758", src:"lecture; class (university level)", pos:"noun", gender:null,
     note:"Sino-Korean: lecture (講) + meaning (義).\nA formal teaching session.",
     example:"A: \uC624\uB298 \uAC15\uC758\uAC00 \uBA87 \uAC1C \uC788\uC5B4\uC694?\nB: \uC138 \uAC1C \uAC15\uC758\uAC00 \uC788\uC5B4\uC694.\nA: \uC5B4\uB5A4 \uAC15\uC758\uAC00 \uC81C\uC77C \uC7AC\uBBF8\uC788\uC5B4\uC694?\nB: \uCCA0\uD559 \uAC15\uC758\uAC00 \uC81C\uC77C \uD765\uBBF8\uB85C\uC6CC\uC694.",
     exampleSrc:"A: How many lectures do you have today?\nB: I have three lectures.\nA: Which lecture is the most interesting?\nB: The philosophy lecture is most interesting.",
     funFact:"강의 is specifically for lectures (one person teaches, many listen). 세미나 (seminar) is for discussion-based classes."},

    {type:"teach", trg:"\uAC15\uC758\uD558\uB2E4", src:"to lecture; to give a class", pos:"verb", gender:null,
     note:"Verb form of 강의. To deliver a lecture.",
     example:"A: \uAD50\uC218\uB2D8\uC774 \uC5F4\uC815\uC801\uC73C\uB85C \uAC15\uC758\uD558\uC138\uC694.\nB: \uAC15\uC758 \uB0B4\uC6A9\uC774 \uC88B\uC544\uC694?\nA: \uB124, \uAE4A\uC774 \uC788\uAC8C \uAC15\uC758\uD558\uC138\uC694.\nB: \uC88B\uC740 \uAD50\uC218\uB2D8\uC774\uB124\uC694.",
     exampleSrc:"A: The professor lectures with passion.\nB: Is the lecture content good?\nA: Yes, the professor lectures with depth.\nB: That is a good professor.",
     funFact:"강의하다 is used for formal teaching. In contrast, 가르치다 (to teach) is the general, everyday word for teaching anything."},

    {type:"teach", trg:"\uACFC\uC815", src:"process; course; curriculum", pos:"noun", gender:null,
     note:"Sino-Korean: pass through (過) + journey (程).\nA progression or academic program.",
     example:"A: \uC11D\uC0AC \uACFC\uC815\uC5D0 \uC785\uD559\uD588\uC5B4\uC694.\nB: \uCD95\uD558\uD574\uC694! \uBB34\uC2A8 \uACFC\uC815\uC774\uC5D0\uC694?\nA: \uAD6D\uC81C\uAD00\uACC4\uD559 \uACFC\uC815\uC774\uC5D0\uC694.\nB: 2\uB144 \uACFC\uC815\uC778\uAC00\uC694?",
     exampleSrc:"A: I entered a master's program.\nB: Congratulations! What program?\nA: An international relations program.\nB: Is it a 2-year program?",
     funFact:"과정 is used for both academic programs (석사 과정, 박사 과정) and general processes (발전 과정: process of development)."},

    {type:"teach", trg:"\uAD50\uD3EC", src:"overseas Korean; Korean diaspora", pos:"noun", gender:null,
     note:"Sino-Korean: overseas (僑) + compatriot (胞).\nKoreans living abroad.",
     example:"A: \uBBF8\uAD6D\uC5D0 \uAD50\uD3EC\uAC00 \uB9CE\uC544\uC694.\nB: \uD55C\uC778\uD0C0\uC6B4\uB3C4 \uD06C\uC8E0.\nA: \uAD50\uD3EC \uC0AC\uD68C\uAC00 \uD65C\uBC1C\uD574\uC694.\nB: \uD55C\uAD6D \uBB38\uD654\uB97C \uC9C0\uD0A4\uACE0 \uC788\uC8E0.",
     exampleSrc:"A: There are many overseas Koreans in America.\nB: Koreatowns are large too.\nA: The diaspora community is active.\nB: They are preserving Korean culture.",
     funFact:"There are about 7 million 재외교포 worldwide. The largest communities are in China, the US, and Japan."},

    {type:"mc",
     q:"\uD559\uAD50 \uBC16\uC5D0\uC11C \uBC1B\uB294 \uAC1C\uC778 \uC218\uC5C5\uC744 \uBB50\uB77C\uACE0 \uD574\uC694?",
     opts:["\uACFC\uC678","\uAD50\uC591","\uAC15\uC758","\uAD50\uC9C1"],
     ans:"\uACFC\uC678",
     hint:"This word literally means 'outside the curriculum' and refers to private one-on-one lessons."},

    {type:"match", pairs:[
      {trg:"\uAD50\uBCF5", src:"school uniform"},
      {trg:"\uAD50\uC0AC", src:"teacher"},
      {trg:"\uAD50\uC7A5", src:"principal"},
      {trg:"\uAD50\uC7AC", src:"textbook"},
      {trg:"\uACFC\uC815", src:"course/process"},
      {trg:"\uAD50\uD3EC", src:"overseas Korean"}
    ]}
  ]
};
export default LESSON_8;
