// Korean B1 Gap - Lesson 2: Government, Nation, and Politics
const LESSON_2 = {
  id:"kov2_b1gap_l2", title:"국가와 정치", icon:"🏛️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Government, Nation, and Politics",
     desc:"Learn essential vocabulary for discussing government, politics, and civic life in Korean. These Sino-Korean words appear frequently in news, formal speech, and TOPIK readings.",
     goals:["Master 20 words for government and civic life","Understand hanja roots shared across political vocabulary","Discuss national and international topics"]},

    // --- Teach 1-4 ---
    {type:"teach", trg:"국가", src:"nation, country", pos:"noun", gender:null,
     note:"Formal word for 'country.' More official than 나라 (native Korean).",
     example:"A: 어느 국가에서 왔어요?\nB: 저는 한국이라는 국가에서 왔어요.\nA: 한국은 멋진 국가예요.",
     exampleSrc:"A: Which nation are you from?\nB: I'm from a nation called Korea.\nA: Korea is a great nation.",
     funFact:"From hanja: 國 (country) + 家 (house/family). The same 國 appears in 국민, 국내, 국제. Learning this one character unlocks dozens of words."},

    {type:"teach", trg:"국내", src:"domestic, within the country", pos:"noun", gender:null,
     note:"Used as a modifier: 국내 뉴스 (domestic news), 국내 여행 (domestic travel).",
     example:"A: 국내 여행 좋아해요?\nB: 네, 국내에 아름다운 곳이 많아요.\nA: 맞아요, 제주도가 특히 좋죠.",
     exampleSrc:"A: Do you like domestic travel?\nB: Yes, there are many beautiful places domestically.\nA: Right, Jeju Island is especially nice.",
     funFact:"From hanja: 國 (country) + 內 (inside). The opposite is 국외 (overseas). 내 vs. 외 is a fundamental hanja pair: inside vs. outside."},

    {type:"teach", trg:"국민", src:"citizens, the people", pos:"noun", gender:null,
     note:"The people of a nation collectively. Used in official/political contexts.",
     example:"A: 국민의 의견이 중요해요.\nB: 맞아요, 국민이 주인이에요.\nA: 민주주의의 기본이죠.",
     exampleSrc:"A: The opinions of the citizens are important.\nB: Right, the citizens are the owners.\nA: That's the foundation of democracy.",
     funFact:"From hanja: 國 (country) + 民 (people). The same 民 appears in 민주 (democracy), 시민 (city citizen), and 국민연금 (national pension)."},

    {type:"teach", trg:"국제", src:"international", pos:"noun", gender:null,
     note:"Used as modifier: 국제 회의 (international conference), 국제 관계 (international relations).",
     example:"A: 국제 뉴스를 자주 봐요?\nB: 네, 국제 문제에 관심이 많아요.\nA: 국제 관계가 복잡하죠.",
     exampleSrc:"A: Do you watch international news often?\nB: Yes, I'm very interested in international issues.\nA: International relations are complicated.",
     funFact:"From hanja: 國 (country) + 際 (boundary/between). Literally 'between countries.' The same structure exists in Chinese (guoji) and Japanese (kokusai)."},

    // --- Quiz batch 1 ---
    {type:"mc",
     q:"국내 여행과 국제 여행의 차이는?",
     opts:["국내는 나라 안, 국제는 나라 밖","둘 다 같은 뜻이다","국내는 비싸고, 국제는 싸다","국내는 정치, 국제는 경제"],
     ans:"국내는 나라 안, 국제는 나라 밖",
     hint:"Think about the hanja: 內 means inside, 際 means between/boundary."},

    {type:"fb",
     s:"{1}의 의견을 존중해야 합니다.",
     a:["국민"],
     opts:["국민","국가","국제","국내"],
     hint:"You are talking about the people/citizens whose opinions should be respected.",
     sSrc:"We must respect the opinions of the {1}."},

    // --- Teach 5-8 ---
    {type:"teach", trg:"국회의원", src:"member of parliament", pos:"noun", gender:null,
     note:"Compound: 국회 (national assembly) + 의원 (member). Formal political term.",
     example:"A: 국회의원이 뭐 하는 사람이에요?\nB: 법을 만드는 사람이에요.\nA: 한국에 국회의원이 몇 명이에요?",
     exampleSrc:"A: What does a member of parliament do?\nB: They're someone who makes laws.\nA: How many members of parliament are there in Korea?",
     funFact:"From hanja: 國 (country) + 會 (assembly) + 議 (discuss) + 員 (member). Korea's National Assembly (국회) has 300 seats."},

    {type:"teach", trg:"대통령", src:"president", pos:"noun", gender:null,
     note:"The head of state. One of the most recognized political terms in Korean.",
     example:"A: 대통령 선거가 언제예요?\nB: 내년에 있어요.\nA: 누가 대통령이 될까요?",
     exampleSrc:"A: When is the presidential election?\nB: It's next year.\nA: Who will become president?",
     funFact:"From hanja: 大 (great) + 統 (govern/unify) + 領 (lead). Literally 'great unifying leader.' South Korea elects a president every 5 years for a single term."},

    {type:"teach", trg:"공무원", src:"government official, civil servant", pos:"noun", gender:null,
     note:"Highly respected career in Korea. Extremely competitive exams to enter.",
     example:"A: 공무원 시험 준비해요?\nB: 네, 2년째 준비하고 있어요.\nA: 공무원은 안정적이니까요.",
     exampleSrc:"A: Are you preparing for the civil service exam?\nB: Yes, I've been preparing for 2 years.\nA: Being a civil servant is stable, after all.",
     funFact:"From hanja: 公 (public) + 務 (duty) + 員 (member). The civil service exam (공무원 시험) is one of Korea's most competitive tests, with some positions having 100:1 ratios."},

    {type:"teach", trg:"각국", src:"each country, every nation", pos:"noun", gender:null,
     note:"Used in formal/written Korean. 각 (each) + 국 (country).",
     example:"A: 각국의 대표가 모였어요.\nB: 각국에서 다른 의견을 가지고 왔어요.\nA: 합의가 쉽지 않겠네요.",
     exampleSrc:"A: Representatives from each country gathered.\nB: Each country brought different opinions.\nA: Reaching an agreement won't be easy.",
     funFact:"From hanja: 各 (each) + 國 (country). The prefix 각 is very productive: 각종 (all kinds), 각자 (each person), 각각 (each one respectively)."},

    // --- Quiz batch 2 ---
    {type:"match", pairs:[
      {trg:"대통령", src:"president"},
      {trg:"공무원", src:"civil servant"},
      {trg:"국회의원", src:"member of parliament"},
      {trg:"각국", src:"each country"}
    ]},

    {type:"mc",
     q:"공무원 시험이 한국에서 인기 있는 이유는?",
     opts:["국제 문제에 관심이 있어서","안정적인 직업이기 때문에","대통령이 되고 싶어서","국내 여행을 좋아해서"],
     ans:"안정적인 직업이기 때문에",
     hint:"Civil servants in Korea are valued for job security and stability."},

    // --- Teach 9-12 ---
    {type:"teach", trg:"강제", src:"coercion, forcing", pos:"noun", gender:null,
     note:"Used with 하다 (to force) or 적 (compulsory). Negative connotation.",
     example:"A: 이건 강제인가요?\nB: 아니요, 자발적이에요.\nA: 강제로 하면 안 돼요.",
     exampleSrc:"A: Is this mandatory/forced?\nB: No, it's voluntary.\nA: You shouldn't do it by force.",
     funFact:"From hanja: 強 (strong) + 制 (control/system). The same 強 appears in 강하다 (to be strong). 강제 노동 means 'forced labor.'"},

    {type:"teach", trg:"대표", src:"representative", pos:"noun", gender:null,
     note:"Also means 'representative/typical.' Used for people and ideas.",
     example:"A: 우리 팀의 대표가 누구예요?\nB: 김 선생님이 대표예요.\nA: 대표로서 잘해 주실 거예요.",
     exampleSrc:"A: Who is the representative of our team?\nB: Mr. Kim is the representative.\nA: As a representative, he'll do well.",
     funFact:"From hanja: 代 (generation/substitute) + 表 (surface/express). Literally 'standing on the surface for others.' Also used in 대표팀 (national team)."},

    {type:"teach", trg:"대표적", src:"representative, typical", pos:"adj", gender:null,
     note:"Adjectival form of 대표. Means 'exemplary' or 'most well-known.'",
     example:"A: 한국의 대표적인 음식이 뭐예요?\nB: 김치가 가장 대표적이에요.\nA: 저도 김치를 좋아해요!",
     exampleSrc:"A: What's a representative Korean food?\nB: Kimchi is the most representative.\nA: I like kimchi too!",
     funFact:"The suffix -적 (from hanja 的) turns nouns into adjectives in Korean. It works like English '-ive' or '-ical.' Extremely productive suffix."},

    {type:"teach", trg:"대중", src:"the public, the masses", pos:"noun", gender:null,
     note:"Refers to the general public. Common in compounds like 대중교통.",
     example:"A: 대중교통을 자주 이용해요?\nB: 네, 대중교통이 편리해요.\nA: 한국은 대중교통이 잘 되어 있죠.",
     exampleSrc:"A: Do you use public transportation often?\nB: Yes, public transportation is convenient.\nA: Korea's public transport system is well-developed.",
     funFact:"From hanja: 大 (great) + 衆 (crowd). The same 衆 appears in 관중 (audience/spectators). 대중문화 (pop culture) literally means 'mass culture.'"},

    // --- Quiz batch 3 ---
    {type:"fb",
     s:"김치는 한국의 가장 {1}인 음식이에요.",
     a:["대표적"],
     opts:["대표적","강제적","국제적","대중적"],
     hint:"You need the adjective meaning 'representative' or 'most well-known.'",
     sSrc:"Kimchi is the most {1} Korean food."},

    {type:"mc",
     q:"'대중교통'에서 '대중'의 뜻은?",
     opts:["크고 무거운 것","대통령과 관련된 것","일반 사람들, 공공","대표하는 것"],
     ans:"일반 사람들, 공공",
     hint:"Think about who uses public transportation: everyone, the general public."},

    // --- Teach 13-16 ---
    {type:"teach", trg:"대중문화", src:"pop culture, popular culture", pos:"noun", gender:null,
     note:"Compound: 대중 (public) + 문화 (culture). K-pop, K-drama, etc.",
     example:"A: 한국 대중문화에 관심 있어요?\nB: 네, 특히 K-pop을 좋아해요.\nA: 한국 대중문화가 세계적으로 인기죠.",
     exampleSrc:"A: Are you interested in Korean pop culture?\nB: Yes, I especially like K-pop.\nA: Korean pop culture is popular worldwide.",
     funFact:"Korean Wave (한류, hallyu) made 대중문화 a globally recognized concept. From hanja: 文 (writing/culture) + 化 (change/transform)."},

    {type:"teach", trg:"군대", src:"military, armed forces", pos:"noun", gender:null,
     note:"South Korea has mandatory military service for men (18-21 months).",
     example:"A: 군대에 다녀왔어요?\nB: 네, 2년 전에 다녀왔어요.\nA: 군대 생활이 어땠어요?",
     exampleSrc:"A: Have you done your military service?\nB: Yes, I did it 2 years ago.\nA: How was military life?",
     funFact:"From hanja: 軍 (army) + 隊 (unit/squad). The phrase 군대에 가다 (to go to the military) is a life milestone for Korean men. Service is 18 months as of 2025."},

    {type:"teach", trg:"명령", src:"order, command", pos:"noun", gender:null,
     note:"Formal/authoritative. Used with 하다 (to command) or 을 내리다 (to issue).",
     example:"A: 누가 이 명령을 내렸어요?\nB: 대통령이 명령했어요.\nA: 모두 명령대로 해요.",
     exampleSrc:"A: Who issued this order?\nB: The president gave the order.\nA: Everyone does according to the order.",
     funFact:"From hanja: 命 (life/fate/order) + 令 (command/decree). The same 命 appears in 생명 (life) and 운명 (fate). Both hanja characters independently mean 'command.'"},

    {type:"teach", trg:"노동자", src:"worker, laborer", pos:"noun", gender:null,
     note:"Emphasizes physical/manual labor. Compare with 근로자 (more neutral).",
     example:"A: 노동자의 권리가 중요해요.\nB: 맞아요, 노동자를 보호해야 해요.\nA: 노동자의 날은 5월 1일이에요.",
     exampleSrc:"A: Workers' rights are important.\nB: Right, we need to protect workers.\nA: Workers' Day is May 1st.",
     funFact:"From hanja: 勞 (toil/labor) + 動 (move) + 者 (person). The suffix -자 (person) is extremely common: 과학자, 기자, 학자, 운동자."},

    // --- Quiz batch 4 ---
    {type:"match", pairs:[
      {trg:"대중문화", src:"pop culture"},
      {trg:"군대", src:"military"},
      {trg:"명령", src:"order, command"},
      {trg:"노동자", src:"worker, laborer"}
    ]},

    {type:"fb",
     s:"한국 남성은 {1}에 가야 합니다.",
     a:["군대"],
     opts:["군대","국회","대회","대기업"],
     hint:"Korean men must serve in the armed forces. Which word means military?",
     sSrc:"Korean men must go to the {1}."},

    // --- Teach 17-20 ---
    {type:"teach", trg:"근로자", src:"worker, employee", pos:"noun", gender:null,
     note:"More neutral/formal than 노동자. Used in legal and official documents.",
     example:"A: 근로자의 평균 급여가 얼마예요?\nB: 업종마다 다르지만 약 300만 원이에요.\nA: 근로자 복지도 중요하죠.",
     exampleSrc:"A: What's the average salary of workers?\nB: It varies by industry, but about 3 million won.\nA: Worker welfare is important too.",
     funFact:"From hanja: 勤 (diligent) + 勞 (labor) + 者 (person). 근로 emphasizes diligence, while 노동 emphasizes the labor itself. Legal texts prefer 근로자."},

    {type:"teach", trg:"대회", src:"competition, tournament", pos:"noun", gender:null,
     note:"Used for formal contests: sports, academic, talent competitions.",
     example:"A: 무슨 대회에 참가해요?\nB: 한국어 말하기 대회예요.\nA: 대회 준비는 잘 되고 있어요?",
     exampleSrc:"A: What competition are you participating in?\nB: It's a Korean speaking competition.\nA: Is the competition preparation going well?",
     funFact:"From hanja: 大 (great) + 會 (gathering). Literally 'great gathering.' Used for everything from 올림픽 대회 (Olympic Games) to 요리 대회 (cooking contest)."},

    {type:"teach", trg:"대기업", src:"large corporation, conglomerate", pos:"noun", gender:null,
     note:"The Korean chaebols: Samsung, Hyundai, LG, SK. Opposite: 중소기업.",
     example:"A: 대기업에서 일하고 싶어요?\nB: 네, 대기업은 급여가 좋아요.\nA: 하지만 경쟁이 치열해요.",
     exampleSrc:"A: Do you want to work at a large corporation?\nB: Yes, large corporations have good salaries.\nA: But the competition is fierce.",
     funFact:"From hanja: 大 (big) + 企 (plan/stand on tiptoe) + 業 (business). Korea's top chaebols account for over 60% of the country's GDP. Samsung alone is about 20%."},

    {type:"teach", trg:"각종", src:"all kinds, various", pos:"noun", gender:null,
     note:"Formal written modifier. 각 (each) + 종 (kind/type).",
     example:"A: 이 행사에 각종 음식이 있어요.\nB: 각종 공연도 있어요?\nA: 네, 각종 프로그램을 준비했어요.",
     exampleSrc:"A: This event has all kinds of food.\nB: Are there all kinds of performances too?\nA: Yes, we've prepared various programs.",
     funFact:"From hanja: 各 (each) + 種 (kind/seed). The same 種 appears in 종류 (type/category) and 인종 (race/ethnicity). Very common in news articles."},

    // --- Quiz batch 5 ---
    {type:"mc",
     q:"'노동자'와 '근로자'의 차이로 맞는 것은?",
     opts:["둘 다 대통령을 뜻한다","노동자는 학생, 근로자는 선생님","노동자는 공무원, 근로자는 군인","노동자는 육체적, 근로자는 공식적 표현"],
     ans:"노동자는 육체적, 근로자는 공식적 표현",
     hint:"One emphasizes physical labor, the other is more neutral and used in legal documents."},

    {type:"fb",
     s:"삼성은 한국의 {1}이에요.",
     a:["대기업"],
     opts:["대기업","대중","대회","대표"],
     hint:"Samsung is a very large company, a conglomerate. Which compound uses 大 + 企 + 業?",
     sSrc:"Samsung is a Korean {1}."},

    {type:"mc",
     q:"각종 행사에서 '각종'의 뜻은?",
     opts:["여러 가지, 다양한","강제적인","하나의, 유일한","국제적인"],
     ans:"여러 가지, 다양한",
     hint:"The prefix 각 means 'each' and 종 means 'kind.' Together they mean various types."}
  ]
};
export default LESSON_2;
