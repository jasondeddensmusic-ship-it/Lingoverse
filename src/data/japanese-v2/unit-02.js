// Japanese V2 Unit 02. わたしは... (I am...)
import BATCH4_L02 from './_batch4_u02_L02.js';
import BATCH4_L01 from './_batch4_u02_L01.js';
import BATCH3_L1 from './_batch3_u02_L01.js';
// Level: A1.1. JLPT N5 aligned.
import JEXP_02_L1 from './_temp_u02_expand_L01.js';import JEXP_02_L2 from './_temp_u02_expand_L02.js';import JEXP_02_L3 from './_temp_u02_expand_L03.js';import JEXP_02_L4 from './_temp_u02_expand_L04.js';
// Self-introduction, countries, occupations, desu/ja arimasen, wa particle.

const UNIT_02 = {
  n:2, lang:"ja", srcLang:"en", track:"v2",
  title:"わたしは...", sub:"I am... (Self-Introduction)",
  icon:"🙋", level:"A1.1", color:"#7B5EE8",
  lessons:[

// ═══ L1: じこしょうかい (Self-Introduction) ═══
{id:"jav2_u2l1", title:"じこしょうかい", icon:"🪪", xp:15, board:true, steps:[
  {type:"intro", title:"じこしょうかい",
   desc:"Learn to introduce yourself in Japanese. You will master the copula desu, the topic particle wa, and essential identity words.",
   goals:["Introduce yourself with name and occupation","Use desu (am/is) and ja arimasen (am not)","Understand the topic particle wa"]},

  {type:"teach", trg:"わたし", src:"I / me", pos:"pron", gender:null,
   note:"The standard polite first-person pronoun. Women also use あたし casually.",
   example:"A: わたしはスミスです。\nB: わたしは田中です。",
   exampleSrc:"A: I am Smith.\nB: I am Tanaka.",
   funFact:"Japanese has over 10 words for 'I' depending on gender, formality, and personality. Boku (male casual), ore (male rough), atashi (female casual). Watashi is the safe universal choice."},

  {type:"teach", trg:"です", src:"am / is / are (polite)", pos:"aux", gender:null,
   note:"The polite copula. Attaches to nouns to state identity or description. No conjugation for person.",
   example:"A: がくせいですか？\nB: はい、がくせいです。",
   exampleSrc:"A: Are you a student?\nB: Yes, I am a student.",
   funFact:"Desu evolved from 'de arimasu' in the Edo period. Unlike English 'to be,' it never changes for I/you/he/she. One form fits all."},

  {type:"teach", trg:"は", src:"(topic particle)", pos:"part", gender:null,
   note:"Written は (ha) but pronounced 'wa' when used as a particle. Marks the topic of the sentence.",
   example:"A: わたしはエンジニアです。\nB: わたしはいしゃです。",
   exampleSrc:"A: I am an engineer.\nB: I am a doctor.",
   funFact:"The topic particle wa sets up 'as for X...' framing. 'Watashi wa' literally means 'as for me.' Japanese loves this framing style. It is the most important particle in the language."},

  {type:"teach", trg:"なまえ", src:"name", pos:"noun", gender:null,
   note:"Your name. In Japanese, family name comes first.\nKanji: 名前.",
   example:"A: おなまえは？\nB: わたしのなまえはリサです。",
   exampleSrc:"A: What is your name?\nB: My name is Lisa.",
   funFact:"In Japan, family name always comes first. Tanaka Yuki means Yuki from the Tanaka family. Adding 'o' (お) before namae makes it polite: onamae."},

  {type:"teach", trg:"がくせい", src:"student", pos:"noun", gender:null,
   note:"Covers all students: school, university, language school.\nKanji: 学生.",
   example:"A: がくせいですか？\nB: はい、だいがくせいです。",
   exampleSrc:"A: Are you a student?\nB: Yes, I am a university student.",
   funFact:"From kanji 学 (study) + 生 (person/life). Same 生 appears in sensei (先生, 'born before' = teacher). Daigakusei adds 大学 (university) in front."},

  {type:"mc", q:"わたしはがくせいです means:", opts:["I am a student","You are a student","I have a student","I like students"], ans:"I am a student",
   hint:"Break it down: watashi (I) + wa (topic) + gakusei (s...) + desu (am)."},

  {type:"teach", trg:"せんせい", src:"teacher / professor", pos:"noun", gender:null,
   note:"Used for teachers, professors, doctors, lawyers. A title of respect.\nKanji: 先生.",
   example:"A: やまださんはせんせいですか？\nB: はい、にほんごのせんせいです。",
   exampleSrc:"A: Is Mr. Yamada a teacher?\nB: Yes, he is a Japanese language teacher.",
   funFact:"Literally 'born before' (先 = before, 生 = born). Someone who came before you in life experience. Used for any respected expert, not just classroom teachers."},

  {type:"teach", trg:"かいしゃいん", src:"office worker / company employee", pos:"noun", gender:null,
   note:"Someone who works at a company. Very common occupation in Japan.\nKanji: 会社員.",
   example:"A: おしごとは？\nB: かいしゃいんです。",
   exampleSrc:"A: What is your job?\nB: I am an office worker.",
   funFact:"会社 (kaisha, company) + 員 (in, member). Japan's salaryman culture made this one of the most common self-descriptions. About 90% of Japanese workers are kaishain."},

  {type:"fb", s:"わたし{1}がくせいです。", a:"は", opts:["は","が","を","に"], sSrc:"I am a student.",
   hint:"The topic particle that marks 'as for me' comes after watashi."},

  {type:"teach", trg:"じゃありません", src:"am not / is not (polite)", pos:"aux", gender:null,
   note:"Negative of desu. Slightly more formal: ではありません.\nUsed to deny identity or description.",
   example:"A: せんせいですか？\nB: いいえ、せんせいじゃありません。がくせいです。",
   exampleSrc:"A: Are you a teacher?\nB: No, I am not a teacher. I am a student.",
   funFact:"Ja arimasen breaks down as ja (contraction of de wa) + arimasen (does not exist). You are literally saying 'it does not exist as such.' Dewa arimasen is the full formal version."},

  {type:"mc", q:"せんせいじゃありません means:", opts:["I am a teacher","I am not a teacher","I like teachers","I want a teacher"], ans:"I am not a teacher",
   hint:"Ja arimasen is the negative form. It denies the noun before it."},

  {type:"teach", trg:"しごと", src:"job / work", pos:"noun", gender:null,
   note:"General word for work or occupation.\nKanji: 仕事.",
   example:"A: おしごとはなんですか？\nB: エンジニアです。",
   exampleSrc:"A: What is your job?\nB: I am an engineer.",
   funFact:"仕 (serve) + 事 (thing/matter). Work is literally 'a thing you serve.' Adding お (o-shigoto) makes it polite, used when asking about someone else's job."},

  {type:"mc", q:"おしごとはなんですか means:", opts:["Do you like work?","Where do you work?","What is your job?","Are you working?"], ans:"What is your job?",
   hint:"O-shigoto (polite j...) + wa (topic) + nan desu ka (what is it?)."},

  {type:"teach", trg:"いしゃ", src:"doctor / physician", pos:"noun", gender:null,
   note:"Medical doctor. Also addressed as sensei in Japanese.\nKanji: 医者.",
   example:"A: おとうさんはいしゃですか？\nB: はい、いしゃです。",
   exampleSrc:"A: Is your father a doctor?\nB: Yes, he is a doctor.",
   funFact:"医 (medicine) + 者 (person). Doctors in Japan are always called sensei as a title of respect. You would say 'Tanaka-sensei' to your doctor, never 'Tanaka-isha.'"},

  {type:"match", pairs:[{trg:"わたし",src:"I / me"},{trg:"です",src:"am / is"},{trg:"じゃありません",src:"am not / is not"},{trg:"は",src:"topic particle"}]},

  {type:"fb", s:"いいえ、いしゃ{1}。がくせいです。", a:"じゃありません", opts:["じゃありません","です","ですか","ません"], sSrc:"No, I am not a doctor. I am a student.",
   hint:"The negative copula that denies an identity."},

  {type:"mc", q:"Which sentence means 'I am not a company employee'?", opts:["わたしはかいしゃいんです","わたしのかいしゃいん","かいしゃいんですか","わたしはかいしゃいんじゃありません"], ans:"わたしはかいしゃいんじゃありません",
   hint:"Look for the negative copula attached to the occupation word."},

  {type:"match", pairs:[{trg:"がくせい",src:"student"},{trg:"せんせい",src:"teacher"},{trg:"かいしゃいん",src:"office worker"},{trg:"いしゃ",src:"doctor"}]},

  {type:"tip", title:"Sentence Pattern: X は Y です",
   text:"The most basic Japanese sentence:\nX は Y です = X is Y.\n\nわたしは がくせい です。\n= I am a student.\n\nNegative: X は Y じゃありません。\nわたしは せんせい じゃありません。\n= I am not a teacher.",
   deepDive:{title:"Dropping the subject",
    text:"Once the topic is clear, you can drop watashi wa entirely.\n\nQ: がくせいですか？\nA: はい、がくせいです。\n\nJapanese is a 'pro-drop' language. Context carries the subject. Saying watashi wa too often sounds unnatural and overly self-focused."}},

  {type:"mc", q:"How do you say 'I am a doctor' in Japanese?", opts:["わたしはいしゃです","わたしはいしゃじゃありません","いしゃですか","わたしのいしゃ"], ans:"わたしはいしゃです",
   hint:"Watashi wa + occupation + desu."},
]},

// ═══ L2: くにとこくせき (Countries & Nationalities) ═══
{id:"jav2_u2l2", title:"くにとこくせき", icon:"🌍", xp:15, board:true, steps:[
  {type:"intro", title:"くにとこくせき",
   desc:"Learn country names and how to say where you are from. Japanese borrows many country names from other languages.",
   goals:["Name major countries in Japanese","Say where you are from","Use the pattern X-jin (person from X)"]},

  {type:"teach", trg:"にほん", src:"Japan", pos:"noun", gender:null,
   note:"Can also be read にっぽん (nippon), which sounds more formal or patriotic.\nKanji: 日本.",
   example:"A: どこからですか？\nB: にほんからです。",
   exampleSrc:"A: Where are you from?\nB: I am from Japan.",
   funFact:"日本 means 'origin of the sun' (日 = sun, 本 = origin). This is why Japan is called 'Land of the Rising Sun.' The name reflects Japan's position east of China, where the sun rises."},

  {type:"teach", trg:"にほんじん", src:"Japanese person", pos:"noun", gender:null,
   note:"Add じん (jin, person) to any country name to make a nationality.\nKanji: 日本人.",
   example:"A: にほんじんですか？\nB: はい、にほんじんです。",
   exampleSrc:"A: Are you Japanese?\nB: Yes, I am Japanese.",
   funFact:"人 (jin/nin) means person. This suffix works for every nationality: amerikajin, chuugokujin, furansujin. One pattern, unlimited nationalities."},

  {type:"teach", trg:"アメリカ", src:"America / USA", pos:"noun", gender:null,
   note:"Written in katakana because it is a foreign word.\nアメリカじん = American person.",
   example:"A: アメリカじんですか？\nB: はい、アメリカからです。",
   exampleSrc:"A: Are you American?\nB: Yes, I am from America.",
   funFact:"Foreign country names use katakana, the script for loanwords. The name comes from Amerigo Vespucci via Portuguese traders who first contacted Japan in the 1500s."},

  {type:"teach", trg:"イギリス", src:"England / UK", pos:"noun", gender:null,
   note:"From Portuguese 'Ingles.' イギリスじん = British person.\nWritten in katakana.",
   example:"A: イギリスからですか？\nB: いいえ、アメリカからです。",
   exampleSrc:"A: Are you from England?\nB: No, I am from America.",
   funFact:"Japan first learned about England through Portuguese missionaries who called it 'Ingles.' That is why the Japanese name sounds nothing like 'England' or 'Britain.'"},

  {type:"mc", q:"にほんじん means:", opts:["Japanese person","Japan","Japanese language","Japanese food"], ans:"Japanese person",
   hint:"にほん (Japan) + じん (p...). The suffix that creates nationalities."},

  {type:"teach", trg:"フランス", src:"France", pos:"noun", gender:null,
   note:"French person: フランスじん. French language: フランスご.\nWritten in katakana.",
   example:"A: フランスごをはなしますか？\nB: いいえ、にほんごだけです。",
   exampleSrc:"A: Do you speak French?\nB: No, only Japanese.",
   funFact:"France has a special place in Japanese culture. Paris syndrome is a real condition where Japanese tourists experience shock because Paris does not match their idealized image of it."},

  {type:"teach", trg:"ちゅうごく", src:"China", pos:"noun", gender:null,
   note:"Literally 'middle country.' ちゅうごくじん = Chinese person.\nKanji: 中国.",
   example:"A: ちゅうごくじんですか？\nB: いいえ、にほんじんです。",
   exampleSrc:"A: Are you Chinese?\nB: No, I am Japanese.",
   funFact:"中国 means 'middle kingdom' (中 = middle, 国 = country). China historically saw itself as the center of the civilized world. Many kanji used in Japanese originally came from Chinese characters."},

  {type:"teach", trg:"から", src:"from", pos:"part", gender:null,
   note:"Indicates origin or starting point. Used after a place name.\nPattern: PLACE + から + です.",
   example:"A: どこからですか？\nB: イギリスからです。",
   exampleSrc:"A: Where are you from?\nB: I am from England.",
   funFact:"Kara covers both physical and abstract 'from.' You can say Tokyo kara (from Tokyo) or getsu-youbi kara (from Monday). One particle, many uses."},

  {type:"fb", s:"わたしはフランス{1}です。", a:"じん", opts:["じん","ご","から","の"], sSrc:"I am a French person.",
   hint:"The suffix meaning 'person' that creates nationalities."},

  {type:"teach", trg:"にほんご", src:"Japanese language", pos:"noun", gender:null,
   note:"Add ご (go, language) to a country name for the language.\nKanji: 日本語.",
   example:"A: にほんごをべんきょうしています。\nB: すごいですね！",
   exampleSrc:"A: I am studying Japanese.\nB: That is amazing!",
   funFact:"語 (go) means language. Works like jin: eigo (English), furansugo (French), chuugokugo (Chinese). But be careful: doitsugo (German) uses doitsu, from the Dutch word for Germany."},

  {type:"teach", trg:"エンジニア", src:"engineer", pos:"noun", gender:null,
   note:"Loanword from English. Common job title in Japan's tech industry.\nWritten in katakana.",
   example:"A: おしごとは？\nB: エンジニアです。",
   exampleSrc:"A: What is your job?\nB: I am an engineer.",
   funFact:"Japan borrows many job titles from English via katakana: dezainaa (designer), puroguramaa (programmer), manejaa (manager). The tech industry especially loves English loanwords."},

  {type:"teach", trg:"べんごし", src:"lawyer", pos:"noun", gender:null,
   note:"A prestigious profession in Japan. Very competitive bar exam.\nKanji: 弁護士.",
   example:"A: べんごしですか？\nB: はい、とうきょうではたらいています。",
   exampleSrc:"A: Are you a lawyer?\nB: Yes, I work in Tokyo.",
   funFact:"弁 (speak) + 護 (protect) + 士 (professional). A lawyer is literally a 'speaking-protecting professional.' Japan's bar exam pass rate is only about 25%, making it one of the hardest in the world."},

  {type:"mc", q:"にほんご means:", opts:["Japanese person","Japanese language","Japanese food","Japan"], ans:"Japanese language",
   hint:"にほん (Japan) + ご (l...). The suffix for languages."},

  {type:"mc", q:"イギリスからです means:", opts:["I am British","I speak English","I am from England","I like England"], ans:"I am from England",
   hint:"Place + kara + desu = 'I am from (place).'"},

  {type:"match", pairs:[{trg:"にほん",src:"Japan"},{trg:"アメリカ",src:"America"},{trg:"イギリス",src:"England"},{trg:"フランス",src:"France"}]},

  {type:"fb", s:"アメリカ{1}です。", a:"から", opts:["から","じん","ご","は"], sSrc:"I am from America.",
   hint:"The particle meaning 'from' that indicates origin."},

  {type:"match", pairs:[{trg:"にほんじん",src:"Japanese person"},{trg:"にほんご",src:"Japanese language"},{trg:"べんごし",src:"lawyer"},{trg:"エンジニア",src:"engineer"}]},

  {type:"mc", q:"How do you say 'I am Chinese'?", opts:["わたしはちゅうごくごです","わたしはちゅうごくからです","ちゅうごくじゃありません","わたしはちゅうごくじんです"], ans:"わたしはちゅうごくじんです",
   hint:"Country + jin + desu for stating nationality."},

  {type:"tip", title:"Three Suffixes, Endless Words",
   text:"Attach these to any country name:\n\nじん (jin) = person from that country\nご (go) = language of that country\nから (kara) = from that country\n\nにほん + じん = にほんじん (Japanese person)\nにほん + ご = にほんご (Japanese language)\nにほん + から = にほんから (from Japan)",
   deepDive:{title:"Katakana vs Hiragana countries",
    text:"Japanese-origin country names use kanji/hiragana:\nにほん, ちゅうごく\n\nForeign country names use katakana:\nアメリカ, イギリス, フランス\n\nBut the suffixes (じん, ご, から) are always hiragana."}},

  {type:"mc", q:"Which is NOT a real suffix pattern?", opts:["にほんを","にほんご","にほんから","にほんじん"], ans:"にほんを",
   hint:"を is an object particle, not used for country identity patterns."},
]},

,BATCH3_L1
,BATCH4_L01
,BATCH4_L02
]};
export default UNIT_02;
