// Japanese V2 Unit 02. わたしは... (I am...)
import BATCH11_L1 from './_batch11_u02_L01.js';
import BATCH10_L1 from './_batch10_u02_L01.js';
import BATCH9_L1 from './_batch9_u02_L01.js';
import BATCH7_L1 from './_batch7_u02_L01.js';
import BATCH8_L1 from './_batch8_u02_L01.js';
import BATCH6_L1 from './_batch6_u02_L01.js';
import BATCH4_L02 from './_batch4_u02_L02.js';
import BATCH4_L01 from './_batch4_u02_L01.js';
import BATCH3_L1 from './_batch3_u02_L01.js';
// Level: A1.1. JLPT N5 aligned.
import JEXP_02_L1 from './_temp_u02_expand_L01.js';import JEXP_02_L2 from './_temp_u02_expand_L02.js';import JEXP_02_L3 from './_temp_u02_expand_L03.js';import JEXP_02_L4 from './_temp_u02_expand_L04.js';
// Self-introduction, countries, occupations, desu/ja arimasen, wa particle.

const UNIT_02 = {
  n:2, lang:"ja", srcLang:"en", track:"v2",
  title:"わたしは...", sub:"I am... (Self-Introduction)",
  icon:"\u{1F64B}", level:"A1.1", color:"#7B5EE8",
  lessons:[

// ═══ L1: 自己紹介(じこしょうかい) (Self-Introduction) ═══
{id:"jav2_u2l1", title:"自己紹介(じこしょうかい)", icon:"\u{1FAAA}", xp:15, board:true, steps:[
  {type:"intro", title:"自己紹介(じこしょうかい)",
   desc:"Learn to introduce yourself in Japanese. You will master the copula desu, the topic particle wa, and essential identity words.",
   goals:["Introduce yourself with name and occupation","Use desu (am/is) and ja arimasen (am not)","Understand the topic particle wa"]},

  {type:"teach", trg:"わたし", src:"I / me", pos:"pron", gender:null,
   note:"The standard polite first-person pronoun. Women also use あたし casually.",
   example:"A: わたしはスミスです。\nB: わたしは田中(たなか)です。",
   exampleSrc:"A: I am Smith.\nB: I am Tanaka.",
   funFact:"Japanese has over 10 words for 'I' depending on gender, formality, and personality. Boku (male casual), ore (male rough), atashi (female casual). Watashi is the safe universal choice."},

  {type:"teach", trg:"です", src:"am / is / are (polite)", pos:"aux", gender:null,
   note:"The polite copula. Attaches to nouns to state identity or description. No conjugation for person.",
   example:"A: 学生(がくせい)ですか?\nB: はい、学生(がくせい)です。",
   exampleSrc:"A: Are you a student?\nB: Yes, I am a student.",
   funFact:"Desu evolved from 'de arimasu' in the Edo period. Unlike English 'to be,' it never changes for I/you/he/she. One form fits all."},

  {type:"teach", trg:"は", src:"(topic particle)", pos:"part", gender:null,
   note:"Written は (ha) but pronounced 'wa' when used as a particle. Marks the topic of the sentence.",
   example:"A: わたしはエンジニアです。\nB: わたしは医者(いしゃ)です。",
   exampleSrc:"A: I am an engineer.\nB: I am a doctor.",
   funFact:"The topic particle wa sets up 'as for X...' framing. 'Watashi wa' literally means 'as for me.' Japanese loves this framing style. It is the most important particle in the language."},

  {type:"teach", trg:"名前(なまえ)", src:"name", pos:"noun", gender:null,
   note:"Your name. In Japanese, family name comes first.\nKanji: 名前.",
   example:"A: お名前(なまえ)は?\nB: わたしの名前(なまえ)はリサです。",
   exampleSrc:"A: What is your name?\nB: My name is Lisa.",
   funFact:"In Japan, family name always comes first. Tanaka Yuki means Yuki from the Tanaka family. Adding 'o' (お) before namae makes it polite: onamae."},

  {type:"teach", trg:"学生(がくせい)", src:"student", pos:"noun", gender:null,
   note:"Covers all students: school, university, language school.\nKanji: 学生.",
   example:"A: 学生(がくせい)ですか?\nB: はい、大学生(だいがくせい)です。",
   exampleSrc:"A: Are you a student?\nB: Yes, I am a university student.",
   funFact:"From kanji 学 (study) + 生 (person/life). Same 生 appears in sensei (先生, 'born before' = teacher). Daigakusei adds 大学 (university) in front."},
{type:"match",pairs:[{trg:"です",src:"am / is / are (polite)"},{trg:"は",src:"(topic particle)"},{trg:"名前(なまえ)",src:"name"},{trg:"学生(がくせい)",src:"student"}]},

  {type:"mc", q:"わたしは学生(がくせい)です means:", opts:["I am a student","You are a student","I have a student","I like students"], ans:"I am a student",
   hint:"Break it down: watashi (I) + wa (topic) + gakusei (s...) + desu (am)."},

  {type:"teach", trg:"先生(せんせい)", src:"teacher / professor", pos:"noun", gender:null,
   note:"Used for teachers, professors, doctors, lawyers. A title of respect.\nKanji: 先生.",
   example:"A: 山田(やまだ)さんは先生(せんせい)ですか?\nB: はい、日本語(にほんご)の先生(せんせい)です。",
   exampleSrc:"A: Is Mr. Yamada a teacher?\nB: Yes, he is a Japanese language teacher.",
   funFact:"Literally 'born before' (先 = before, 生 = born). Someone who came before you in life experience. Used for any respected expert, not just classroom teachers."},

  {type:"teach", trg:"会社員(かいしゃいん)", src:"office worker / company employee", pos:"noun", gender:null,
   note:"Someone who works at a company. Very common occupation in Japan.\nKanji: 会社員.",
   example:"A: お仕事(しごと)は?\nB: 会社員(かいしゃいん)です。",
   exampleSrc:"A: What is your job?\nB: I am an office worker.",
   funFact:"会社 (kaisha, company) + 員 (in, member). Japan's salaryman culture made this one of the most common self-descriptions. About 90% of Japanese workers are kaishain."},

  {type:"fb", s:"わたし{1}学生(がくせい)です。", a:"は", opts:["は","が","を","に"], sSrc:"I am a student.",
   hint:"The topic particle that marks 'as for me' comes after watashi."},

  {type:"teach", trg:"じゃありません", src:"am not / is not (polite)", pos:"aux", gender:null,
   note:"Negative of desu. Slightly more formal: ではありません.\nUsed to deny identity or description.",
   example:"A: 先生(せんせい)ですか?\nB: いいえ、先生(せんせい)じゃありません。学生(がくせい)です。",
   exampleSrc:"A: Are you a teacher?\nB: No, I am not a teacher. I am a student.",
   funFact:"Ja arimasen breaks down as ja (contraction of de wa) + arimasen (does not exist). You are literally saying 'it does not exist as such.' Dewa arimasen is the full formal version."},

  {type:"mc", q:"先生(せんせい)じゃありません means:", opts:["I am a teacher","I am not a teacher","I like teachers","I want a teacher"], ans:"I am not a teacher",
   hint:"Ja arimasen is the negative form. It denies the noun before it."},

  {type:"teach", trg:"仕事(しごと)", src:"job / work", pos:"noun", gender:null,
   note:"General word for work or occupation.\nKanji: 仕事.",
   example:"A: お仕事(しごと)は何(なん)ですか?\nB: エンジニアです。",
   exampleSrc:"A: What is your job?\nB: I am an engineer.",
   funFact:"仕 (serve) + 事 (thing/matter). Work is literally 'a thing you serve.' Adding お (o-shigoto) makes it polite, used when asking about someone else's job."},

  {type:"mc", q:"お仕事(しごと)は何(なん)ですか means:", opts:["Do you like work?","Where do you work?","What is your job?","Are you working?"], ans:"What is your job?",
   hint:"O-shigoto (polite j...) + wa (topic) + nan desu ka (what is it?)."},

  {type:"teach", trg:"医者(いしゃ)", src:"doctor / physician", pos:"noun", gender:null,
   note:"Medical doctor. Also addressed as sensei in Japanese.\nKanji: 医者.",
   example:"A: お父(とう)さんは医者(いしゃ)ですか?\nB: はい、医者(いしゃ)です。",
   exampleSrc:"A: Is your father a doctor?\nB: Yes, he is a doctor.",
   funFact:"医 (medicine) + 者 (person). Doctors in Japan are always called sensei as a title of respect. You would say 'Tanaka-sensei' to your doctor, never 'Tanaka-isha.'"},

  {type:"match", pairs:[{trg:"わたし",src:"I / me"},{trg:"です",src:"am / is"},{trg:"じゃありません",src:"am not / is not"},{trg:"は",src:"topic particle"}]},

  {type:"fb", s:"いいえ、医者(いしゃ){1}。学生(がくせい)です。", a:"じゃありません", opts:["じゃありません","です","ですか","ません"], sSrc:"No, I am not a doctor. I am a student.",
   hint:"The negative copula that denies an identity."},

  {type:"mc", q:"Which sentence means 'I am not a company employee'?", opts:["わたしは会社員(かいしゃいん)です","わたしの会社員(かいしゃいん)","会社員(かいしゃいん)ですか","わたしは会社員(かいしゃいん)じゃありません"], ans:"わたしは会社員(かいしゃいん)じゃありません",
   hint:"Look for the negative copula attached to the occupation word."},

  {type:"match", pairs:[{trg:"学生(がくせい)",src:"student"},{trg:"先生(せんせい)",src:"teacher"},{trg:"会社員(かいしゃいん)",src:"office worker"},{trg:"医者(いしゃ)",src:"doctor"}]},

  {type:"tip", title:"Sentence Pattern: X は Y です",
   text:"The most basic Japanese sentence:\nX は Y です = X is Y.\n\nわたしは 学生(がくせい) です。\n= I am a student.\n\nNegative: X は Y じゃありません。\nわたしは 先生(せんせい) じゃありません。\n= I am not a teacher.",
   deepDive:{title:"Dropping the subject",
    text:"Once the topic is clear, you can drop watashi wa entirely.\n\nQ: 学生(がくせい)ですか?\nA: はい、学生(がくせい)です。\n\nJapanese is a 'pro-drop' language. Context carries the subject. Saying watashi wa too often sounds unnatural and overly self-focused."}},

  {type:"mc", q:"How do you say 'I am a doctor' in Japanese?", opts:["わたしは医者(いしゃ)です","わたしは医者(いしゃ)じゃありません","医者(いしゃ)ですか","わたしの医者(いしゃ)"], ans:"わたしは医者(いしゃ)です",
   hint:"Watashi wa + occupation + desu."},
]},

// ═══ L2: 国(くに)と国籍(こくせき) (Countries & Nationalities) ═══
{id:"jav2_u2l2", title:"国(くに)と国籍(こくせき)", icon:"\u{1F30D}", xp:15, board:true, steps:[
  {type:"intro", title:"国(くに)と国籍(こくせき)",
   desc:"Learn country names and how to say where you are from. Japanese borrows many country names from other languages.",
   goals:["Name major countries in Japanese","Say where you are from","Use the pattern X-jin (person from X)"]},

  {type:"teach", trg:"日本(にほん)", src:"Japan", pos:"noun", gender:null,
   note:"Can also be read にっぽん (nippon), which sounds more formal or patriotic.\nKanji: 日本.",
   example:"A: どこからですか?\nB: 日本(にほん)からです。",
   exampleSrc:"A: Where are you from?\nB: I am from Japan.",
   funFact:"日本 means 'origin of the sun' (日 = sun, 本 = origin). This is why Japan is called 'Land of the Rising Sun.' The name reflects Japan's position east of China, where the sun rises."},

  {type:"teach", trg:"日本人(にほんじん)", src:"Japanese person", pos:"noun", gender:null,
   note:"Add じん (jin, person) to any country name to make a nationality.\nKanji: 日本人.",
   example:"A: 日本人(にほんじん)ですか?\nB: はい、日本人(にほんじん)です。",
   exampleSrc:"A: Are you Japanese?\nB: Yes, I am Japanese.",
   funFact:"人 (jin/nin) means person. This suffix works for every nationality: amerikajin, chuugokujin, furansujin. One pattern, unlimited nationalities."},

  {type:"teach", trg:"アメリカ", src:"America / USA", pos:"noun", gender:null,
   note:"Written in katakana because it is a foreign word.\nアメリカ人(じん) = American person.",
   example:"A: アメリカ人(じん)ですか?\nB: はい、アメリカからです。",
   exampleSrc:"A: Are you American?\nB: Yes, I am from America.",
   funFact:"Foreign country names use katakana, the script for loanwords. The name comes from Amerigo Vespucci via Portuguese traders who first contacted Japan in the 1500s."},

  {type:"teach", trg:"イギリス", src:"England / UK", pos:"noun", gender:null,
   note:"From Portuguese 'Ingles.' イギリス人(じん) = British person.\nWritten in katakana.",
   example:"A: イギリスからですか?\nB: いいえ、アメリカからです。",
   exampleSrc:"A: Are you from England?\nB: No, I am from America.",
   funFact:"Japan first learned about England through Portuguese missionaries who called it 'Ingles.' That is why the Japanese name sounds nothing like 'England' or 'Britain.'"},

  {type:"mc", q:"日本人(にほんじん) means:", opts:["Japanese person","Japan","Japanese language","Japanese food"], ans:"Japanese person",
   hint:"日本 (Japan) + じん (p...). The suffix that creates nationalities."},

  {type:"teach", trg:"フランス", src:"France", pos:"noun", gender:null,
   note:"French person: フランス人(じん). French language: フランス語(ご).\nWritten in katakana.",
   example:"A: フランス語(ご)を話(はな)しますか?\nB: いいえ、日本語(にほんご)だけです。",
   exampleSrc:"A: Do you speak French?\nB: No, only Japanese.",
   funFact:"France has a special place in Japanese culture. Paris syndrome is a real condition where Japanese tourists experience shock because Paris does not match their idealized image of it."},

  {type:"teach", trg:"中国(ちゅうごく)", src:"China", pos:"noun", gender:null,
   note:"Literally 'middle country.' 中国人(ちゅうごくじん) = Chinese person.\nKanji: 中国.",
   example:"A: 中国人(ちゅうごくじん)ですか?\nB: いいえ、日本人(にほんじん)です。",
   exampleSrc:"A: Are you Chinese?\nB: No, I am Japanese.",
   funFact:"中国 means 'middle kingdom' (中 = middle, 国 = country). China historically saw itself as the center of the civilized world. Many kanji used in Japanese originally came from Chinese characters."},

  {type:"teach", trg:"から", src:"from", pos:"part", gender:null,
   note:"Indicates origin or starting point. Used after a place name.\nPattern: PLACE + から + です.",
   example:"A: どこからですか?\nB: イギリスからです。",
   exampleSrc:"A: Where are you from?\nB: I am from England.",
   funFact:"Kara covers both physical and abstract 'from.' You can say Tokyo kara (from Tokyo) or getsu-youbi kara (from Monday). One particle, many uses."},

  {type:"fb", s:"わたしはフランス{1}です。", a:"じん", opts:["じん","ご","から","の"], sSrc:"I am a French person.",
   hint:"The suffix meaning 'person' that creates nationalities."},

  {type:"teach", trg:"日本語(にほんご)", src:"Japanese language", pos:"noun", gender:null,
   note:"Add ご (go, language) to a country name for the language.\nKanji: 日本語.",
   example:"A: 日本語(にほんご)を勉強(べんきょう)しています。\nB: すごいですね!",
   exampleSrc:"A: I am studying Japanese.\nB: That is amazing!",
   funFact:"語 (go) means language. Works like jin: eigo (English), furansugo (French), chuugokugo (Chinese). But be careful: doitsugo (German) uses doitsu, from the Dutch word for Germany."},

  {type:"teach", trg:"エンジニア", src:"engineer", pos:"noun", gender:null,
   note:"Loanword from English. Common job title in Japan's tech industry.\nWritten in katakana.",
   example:"A: お仕事(しごと)は?\nB: エンジニアです。",
   exampleSrc:"A: What is your job?\nB: I am an engineer.",
   funFact:"Japan borrows many job titles from English via katakana: dezainaa (designer), puroguramaa (programmer), manejaa (manager). The tech industry especially loves English loanwords."},

  {type:"teach", trg:"弁護士(べんごし)", src:"lawyer", pos:"noun", gender:null,
   note:"A prestigious profession in Japan. Very competitive bar exam.\nKanji: 弁護士.",
   example:"A: 弁護士(べんごし)ですか?\nB: はい、東京(とうきょう)で働(はたら)いています。",
   exampleSrc:"A: Are you a lawyer?\nB: Yes, I work in Tokyo.",
   funFact:"弁 (speak) + 護 (protect) + 士 (professional). A lawyer is literally a 'speaking-protecting professional.' Japan's bar exam pass rate is only about 25%, making it one of the hardest in the world."},

  {type:"mc", q:"日本語(にほんご) means:", opts:["Japanese person","Japanese language","Japanese food","Japan"], ans:"Japanese language",
   hint:"日本 (Japan) + ご (l...). The suffix for languages."},

  {type:"mc", q:"イギリスからです means:", opts:["I am British","I speak English","I am from England","I like England"], ans:"I am from England",
   hint:"Place + kara + desu = 'I am from (place).'"},

  {type:"match", pairs:[{trg:"日本(にほん)",src:"Japan"},{trg:"アメリカ",src:"America"},{trg:"イギリス",src:"England"},{trg:"フランス",src:"France"}]},

  {type:"fb", s:"アメリカ{1}です。", a:"から", opts:["から","じん","ご","は"], sSrc:"I am from America.",
   hint:"The particle meaning 'from' that indicates origin."},

  {type:"match", pairs:[{trg:"日本人(にほんじん)",src:"Japanese person"},{trg:"日本語(にほんご)",src:"Japanese language"},{trg:"弁護士(べんごし)",src:"lawyer"},{trg:"エンジニア",src:"engineer"}]},

  {type:"mc", q:"How do you say 'I am Chinese'?", opts:["わたしは中国語(ちゅうごくご)です","わたしは中国(ちゅうごく)からです","中国(ちゅうごく)じゃありません","わたしは中国人(ちゅうごくじん)です"], ans:"わたしは中国人(ちゅうごくじん)です",
   hint:"Country + jin + desu for stating nationality."},

  {type:"tip", title:"Three Suffixes, Endless Words",
   text:"Attach these to any country name:\n\nじん (jin) = person from that country\nご (go) = language of that country\nから (kara) = from that country\n\n日本(にほん) + じん = 日本人(にほんじん) (Japanese person)\n日本(にほん) + ご = 日本語(にほんご) (Japanese language)\n日本(にほん) + から = 日本(にほん)から (from Japan)",
   deepDive:{title:"Katakana vs Hiragana countries",
    text:"Japanese-origin country names use kanji/hiragana:\n日本(にほん), 中国(ちゅうごく)\n\nForeign country names use katakana:\nアメリカ, イギリス, フランス\n\nBut the suffixes (じん, ご, から) are always hiragana."}},

  {type:"mc", q:"Which is NOT a real suffix pattern?", opts:["日本(にほん)を","日本語(にほんご)","日本(にほん)から","日本人(にほんじん)"], ans:"日本(にほん)を",
   hint:"を is an object particle, not used for country identity patterns."},
]},

,BATCH3_L1
,BATCH4_L01
,BATCH4_L02
,BATCH6_L1
,BATCH8_L1
,BATCH7_L1
,BATCH9_L1
,BATCH10_L1
,BATCH11_L1
]};
export default UNIT_02;
