// Russian V2 Unit 3 — Family (A1.2)
const UNIT_03 = {n:3, lang:"ru", srcLang:"en", track:"v2", title:"Моя семья", sub:"Family Members",
 icon:"👨‍👩‍👧‍👦", level:"A1.2", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u3l1", title:"Родители и дети", icon:"👨‍👩‍👧", xp:15, board:true, steps:[

{type:"intro", title:"Parents and Children",
 desc:"Learn the core family vocabulary. Russian family words follow predictable gender patterns: masculine nouns typically end in consonants, feminine in -а.",
 goals:["Name parents: папа, мама","Name children: сын, дочь","Understand gender of family nouns"]},

{type:"teach", trg:"семья", src:"family", pos:"noun", gender:"f",
 note:"Feminine. Ends in -я (soft feminine ending).\nThe core word for all family vocabulary.",
 example:"A: У вас большая семья?\nB: Да, у меня большая семья.",
 exampleSrc:"A: Do you have a big family?\nB: Yes, I have a big family.",
 funFact:"Семья comes from the Old Slavic word for 'household' or 'seven' (семь) — symbolically, a typical household of seven members."},

{type:"teach", trg:"папа", src:"dad", pos:"noun", gender:"m",
 note:"MASCULINE despite ending in -а.\nOne of several 'male nouns with female endings.'",
 example:"A: Где твой папа?\nB: Мой папа на работе.",
 exampleSrc:"A: Where is your dad?\nB: My dad is at work.",
 funFact:"Папа, дедушка, дядя, and мужчина are masculine despite the -а ending. This comes from their semantic category (male people) overriding the morphological rule."},

{type:"teach", trg:"мама", src:"mom", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а (standard feminine).\nUniversal word for mother across many languages.",
 example:"A: Твоя мама врач?\nB: Нет, моя мама учительница.",
 exampleSrc:"A: Is your mom a doctor?\nB: No, my mom is a teacher.",
 funFact:"Мама is among the first words children say in most languages — the bilabial M sound is the easiest for babies. Russian shares this with Spanish mamá, Chinese 妈妈, Arabic ماما."},

{type:"teach", trg:"отец", src:"father (formal)", pos:"noun", gender:"m",
 note:"Masculine. Formal/written alternative to папа.\nStress on second syllable: a-TETS.",
 example:"A: Как зовут вашего отца?\nB: Моего отца зовут Виктор.",
 exampleSrc:"A: What is your father's name?\nB: My father's name is Viktor.",
 funFact:"Отец appears in formal documents, religious texts, and fixed phrases like 'Отец Небесный' (Heavenly Father). In daily speech, папа is far more common."},

{type:"teach", trg:"мать", src:"mother (formal)", pos:"noun", gender:"f",
 note:"Feminine. Ends in soft sign ь.\nFormal/written alternative to мама.",
 example:"A: Ваша мать работает?\nB: Да, моя мать директор школы.",
 exampleSrc:"A: Does your mother work?\nB: Yes, my mother is a school director.",
 funFact:"Мать has an irregular declension: in genitive it becomes матери, with a hidden -er- stem. Words ending in ь are sometimes masculine, sometimes feminine — no easy rule."},

{type:"teach", trg:"сын", src:"son", pos:"noun", gender:"m",
 note:"Masculine. Ends in consonant (standard masculine).\nShort, common word.",
 example:"A: Сколько у вас сыновей?\nB: У меня один сын.",
 exampleSrc:"A: How many sons do you have?\nB: I have one son.",
 funFact:"Сын has an irregular plural: сыновья (not сыны). Similar irregular plurals include брат→братья, друг→друзья. Russian loves throwing in these exceptions."},

{type:"teach", trg:"дочь", src:"daughter", pos:"noun", gender:"f",
 note:"Feminine. Ends in ч + soft sign.\nIrregular: has -er- stem in oblique cases.",
 example:"A: Где ваша дочь?\nB: Моя дочь в университете.",
 exampleSrc:"A: Where is your daughter?\nB: My daughter is at university.",
 funFact:"Like мать, дочь gets a hidden -er- stem: genitive дочери, dative дочери, plural дочери. These two 'hidden stem' nouns are the most famous irregular feminines."},

{type:"teach", trg:"ребёнок", src:"child", pos:"noun", gender:"m",
 note:"Masculine. Plural is irregular: дети (children).\nЁ is stressed: re-BYO-nok.",
 example:"A: У вас есть ребёнок?\nB: Да, один ребёнок.",
 exampleSrc:"A: Do you have a child?\nB: Yes, one child.",
 funFact:"The plural дети is suppletive — completely different stem from ребёнок. Similar to English 'person/people' or 'go/went.' Russian has a few of these."},

{type:"tip", title:"Masculine Words Ending in -А",
 text:"Usually, Russian nouns ending in -а/-я are feminine. But some nouns that refer to MALE PEOPLE break this rule.\n\nMasculine nouns ending in -а:\nпапа (dad).\nдедушка (grandfather).\nдядя (uncle).\nмужчина (man).\nюноша (young man).\nсудья (judge).\n\nThese words DECLINE like feminine nouns (endings in cases follow the -а/-я pattern) but AGREE with masculine adjectives:\n мой папа (my dad, masculine agreement).\n моего папу (my dad, accusative, feminine ending but masculine adjective).\n\nIt's gender schizophrenia. Memorize the list.",
 icon:"⚡"},

{type:"mc", q:"What gender is 'папа' (dad) grammatically?",
 opts:["Masculine","Feminine","Neuter","It has no gender"],
 ans:"Masculine",
 hint:"Despite the -а ending, it refers to a male person. The semantic category overrides the ending."},

{type:"mc", q:"The word 'мать' (mother) ends in -ь. How can you know it's feminine?",
 opts:["It always ends in -а","It refers to a female person","The -ь ending is always feminine","You can't — you must memorize"],
 ans:"It refers to a female person",
 hint:"Nouns ending in -ь are unpredictable in gender. But if the noun ___ to a woman, it's clearly feminine."},

<<<<<<< HEAD
{type:"fb", s:"A: Где ваша {1}?\nB: Она на кухне.",
 a:["мама"],
 opts:["мама","папа","сын","дочь"],
 hint:"Feminine possessive 'ваша' — which female family member?",
 sSrc:"A: Where is your mom?\nB: She's in the kitchen."},
=======
{type:"fb", s:"A: Где ваша {1}?\nB: Моя мама на кухне.",
 a:["мама"],
 opts:["мама","папа","сын","дочь"],
 hint:"The answer in B tells you which family member A is asking about. Match gender: 'ваша' is feminine.",
 sSrc:"A: Where is your {1}?\nB: My mom is in the kitchen."},
>>>>>>> origin/main

{type:"match", pairs:[
  {trg:"папа", src:"dad"},
  {trg:"мама", src:"mom"},
  {trg:"сын", src:"son"},
  {trg:"дочь", src:"daughter"},
  {trg:"семья", src:"family"}
]}
]},

{id:"ruv2_u3l2", title:"Братья и сёстры", icon:"👫", xp:15, board:true, steps:[

{type:"intro", title:"Brothers and Sisters",
 desc:"Siblings and extended family vocabulary. Russian uses бабушка/дедушка affectionately for grandparents (no formal/informal split here).",
 goals:["Name siblings: брат, сестра","Name grandparents: дедушка, бабушка","Name aunts/uncles: дядя, тётя"]},

{type:"teach", trg:"брат", src:"brother", pos:"noun", gender:"m",
 note:"Masculine. Standard ending in consonant.\nIrregular plural: братья.",
 example:"A: У тебя есть брат?\nB: Да, у меня есть старший брат.",
 exampleSrc:"A: Do you have a brother?\nB: Yes, I have an older brother.",
 funFact:"Братья (brothers) uses the -ья plural ending — one of Russia's collective plural patterns. Also seen in друзья (friends), сыновья (sons), мужья (husbands)."},

{type:"teach", trg:"сестра", src:"sister", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nPlural: сёстры (with ё).",
 example:"A: Ваша сестра замужем?\nB: Нет, моя сестра не замужем.",
 exampleSrc:"A: Is your sister married?\nB: No, my sister is not married.",
 funFact:"Замужем (married, for a woman) literally means 'behind-husband.' Men use женат (married). Russian has separate marriage words for each spouse's state."},

{type:"teach", trg:"дедушка", src:"grandfather", pos:"noun", gender:"m",
 note:"MASCULINE despite -а ending (male person rule).\nDiminutive, affectionate form.",
 example:"A: Сколько лет вашему дедушке?\nB: Моему дедушке восемьдесят лет.",
 exampleSrc:"A: How old is your grandfather?\nB: My grandfather is eighty years old.",
 funFact:"Russian has no formal/neutral grandfather word — дедушка is both the affectionate form AND the default. The formal дед sounds blunt, almost cold in direct address."},

{type:"teach", trg:"бабушка", src:"grandmother", pos:"noun", gender:"f",
 note:"Feminine. Standard -а ending.\nUniversally used — no formal alternative needed.",
 example:"A: Ваша бабушка готовит борщ?\nB: Конечно! Её борщ самый лучший.",
 exampleSrc:"A: Does your grandmother make borscht?\nB: Of course! Her borscht is the best.",
 funFact:"Grandmothers in Russia traditionally hold huge cultural weight. Many children grow up with a бабушка as primary caregiver. The phrase 'бабушкины пироги' (grandma's pies) evokes warm nostalgia."},

{type:"teach", trg:"дядя", src:"uncle", pos:"noun", gender:"m",
 note:"MASCULINE despite -я ending.\nSame male-person override pattern.",
 example:"A: Кто это?\nB: Это мой дядя Витя.",
 exampleSrc:"A: Who is this?\nB: This is my Uncle Vitya.",
 funFact:"Russians informally address ANY adult man as дядя when they were children. An unknown man on the street might be 'дядя' to a 5-year-old. Similar to 'uncle' in many Asian cultures."},

{type:"teach", trg:"тётя", src:"aunt", pos:"noun", gender:"f",
 note:"Feminine. -я ending (soft feminine).\nAlso used informally for any older woman.",
 example:"A: У вас есть тётя в Москве?\nB: Да, моя тётя Маша живёт в Москве.",
 exampleSrc:"A: Do you have an aunt in Moscow?\nB: Yes, my Aunt Masha lives in Moscow.",
 funFact:"Like дядя, Russian children may address unknown women as тётя. In modern usage this is slightly old-fashioned — modern kids might say девушка (young lady) or женщина (woman)."},

{type:"teach", trg:"муж", src:"husband", pos:"noun", gender:"m",
 note:"Masculine. Ends in ж.\nPlural: мужья (with -ья pattern).",
 example:"A: Где ваш муж?\nB: Мой муж в командировке.",
 exampleSrc:"A: Where is your husband?\nB: My husband is on a business trip.",
 funFact:"Муж literally means both 'husband' and historically 'man/male' in old Russian. Today only means husband. The broader word for man is мужчина."},

{type:"teach", trg:"жена", src:"wife", pos:"noun", gender:"f",
 note:"Feminine. -а ending.\nPlural: жёны.",
 example:"A: Ваша жена работает?\nB: Да, моя жена — врач.",
 exampleSrc:"A: Does your wife work?\nB: Yes, my wife is a doctor.",
 funFact:"Жена shares a root with женщина (woman), жениться (to get married for a man), and женский (feminine). A rich word-family based on one stem."},

{type:"tip", title:"Russian Family Hierarchy",
 text:"Russian family words follow predictable gender patterns:\n\nMASCULINE:\n- папа, отец (dad, father).\n- сын (son).\n- брат (brother).\n- дедушка (grandfather) — male person rule.\n- дядя (uncle) — male person rule.\n- муж (husband).\n\nFEMININE:\n- мама, мать (mom, mother).\n- дочь (daughter).\n- сестра (sister).\n- бабушка (grandmother).\n- тётя (aunt).\n- жена (wife).\n\nAll family relationships use these. In-laws get prefixes (свекровь = mother-in-law from husband's side) but A1 doesn't cover that level."},

{type:"mc", q:"Which word means 'grandmother'?",
 opts:["дедушка","бабушка","тётя","мама"],
 ans:"бабушка",
 hint:"The -ба- beginning is distinctive. Grandfather starts with дед-."},

{type:"mc", q:"Why is 'дядя' grammatically masculine?",
 opts:["It ends in -а","It ends in a soft consonant","It refers to a male person","It's neuter"],
 ans:"It refers to a male person",
 hint:"Semantic gender (___/fe___ referent) overrides the normal -а/-я = feminine rule for kinship terms."},

{type:"fb", s:"A: Это твоя {1}?\nB: Нет, это моя тётя.",
 a:["сестра"],
 opts:["сестра","тётя","мать","бабушка"],
 hint:"B's answer clarifies: 'this is my aunt, not...' — so A must have guessed a different female relative. Pick one that's ALSO feminine but isn't 'aunt.'",
 sSrc:"A: Is this your {1}?\nB: No, this is my aunt."},

{type:"match", pairs:[
  {trg:"брат", src:"brother"},
  {trg:"сестра", src:"sister"},
  {trg:"дедушка", src:"grandfather"},
  {trg:"бабушка", src:"grandmother"},
  {trg:"дядя", src:"uncle"},
  {trg:"тётя", src:"aunt"}
]}
]},

{id:"ruv2_u3l3", title:"Мой, моя, моё", icon:"🎯", xp:15, board:true, steps:[

{type:"intro", title:"My, Your, His, Her",
 desc:"Russian possessive pronouns agree with the noun's gender. Мой, моя, моё, and мои change based on whom you're talking about.",
 goals:["Use мой/моя/моё for 'my'","Use твой/твоя/твоё for informal 'your'","Use его/её/их for 'his/her/their'"]},

{type:"teach", trg:"мой", src:"my (masculine)", pos:"pron", gender:null,
 note:"Used with masculine singular nouns.\nPlural: мои (for all genders).",
 example:"A: Это твой брат?\nB: Да, это мой брат Саша.",
 exampleSrc:"A: Is this your brother?\nB: Yes, this is my brother Sasha.",
 funFact:"Мой changes for 4 cases: мой/моего/моему/моим/о моём. Five forms for one possessive. This is why Russian is considered hard for English speakers."},

{type:"teach", trg:"моя", src:"my (feminine)", pos:"pron", gender:null,
 note:"Used with feminine singular nouns.\nEnds in -я (matches feminine gender).",
 example:"A: Где твоя сестра?\nB: Моя сестра в Америке.",
 exampleSrc:"A: Where is your sister?\nB: My sister is in America.",
 funFact:"The ending -я matches the feminine ending of most nouns. It's the only hint most of the time about grammatical gender. Learn the noun and its gender together."},

{type:"teach", trg:"моё", src:"my (neuter)", pos:"pron", gender:null,
 note:"Used with neuter singular nouns.\nNeuter nouns end in -о/-е/-ё.",
 example:"A: Это твоё письмо?\nB: Да, это моё письмо.",
 exampleSrc:"A: Is this your letter?\nB: Yes, this is my letter.",
 funFact:"Neuter is the third gender — neither masculine nor feminine. Common neuter nouns: письмо (letter), окно (window), море (sea), солнце (sun), небо (sky)."},

{type:"teach", trg:"мои", src:"my (plural)", pos:"pron", gender:null,
 note:"Used with ALL plural nouns regardless of gender.\nOne form covers all three genders in plural.",
 example:"A: Это твои родители?\nB: Да, это мои родители.",
 exampleSrc:"A: Are these your parents?\nB: Yes, these are my parents.",
 funFact:"Russian genders merge in plural. Мои brothers, мои sisters, мои letters — all the same. Plural is grammatically simpler than singular in some ways."},

{type:"teach", trg:"твой", src:"your (informal, m/f/n/pl)", pos:"pron", gender:null,
 note:"Forms match мой exactly: твой/твоя/твоё/твои.\nFor ты (informal you) only.",
 example:"A: Как зовут твоего папу?\nB: Моего папу зовут Алексей.",
 exampleSrc:"A: What is your dad's name?\nB: My dad's name is Alexei.",
 funFact:"Твой conjugates exactly like мой. Learn one pattern, you know both. Similarly, его (his), её (her), их (their) don't change at all — much easier."},

{type:"teach", trg:"ваш", src:"your (formal, m/f/n/pl)", pos:"pron", gender:null,
 note:"Forms: ваш/ваша/ваше/ваши.\nUsed with вы (formal or plural you).",
 example:"A: Ваш муж тоже врач?\nB: Нет, мой муж инженер.",
 exampleSrc:"A: Is your husband also a doctor?\nB: No, my husband is an engineer.",
 funFact:"Ваш is always capitalized in formal written correspondence as Ваш (showing respect). Similar to the German Sie capitalization convention."},

{type:"teach", trg:"его", src:"his / its", pos:"pron", gender:null,
 note:"NEVER CHANGES.\nNo gender/case agreement at all.",
 example:"A: Это его книга?\nB: Да, это его книга.",
 exampleSrc:"A: Is this his book?\nB: Yes, this is his book.",
 funFact:"Его, её, and их are 'frozen' forms — they never decline. This makes them the easiest possessives in Russian. Pronounced 'ye-VO' (not 'ye-GO')."},

{type:"teach", trg:"её", src:"her", pos:"pron", gender:null,
 note:"NEVER CHANGES.\nPronounced 'ye-YO' with the ё sound.",
 example:"A: Как зовут её сестру?\nB: Её сестру зовут Лена.",
 exampleSrc:"A: What is her sister's name?\nB: Her sister's name is Lena.",
 funFact:"Её is easy to confuse with the verb есть (to be/there is) in fast speech, but context makes the difference obvious. Unlike его/её/их, the possessive never changes."},

{type:"teach", trg:"их", src:"their", pos:"pron", gender:null,
 note:"NEVER CHANGES.\nFor all referents, all contexts.",
 example:"A: Вы знаете их родителей?\nB: Нет, я не знаком с их родителями.",
 exampleSrc:"A: Do you know their parents?\nB: No, I'm not acquainted with their parents.",
 funFact:"Их is homonymous with the accusative/genitive of они (they) — both sound identical. Russian has several word pairs like this (его is both 'his' and accusative of 'he')."},

{type:"tip", title:"Possessive Agreement Chart",
 text:"Russian possessives for 1st/2nd person AGREE with the noun:\n\n'MY' — мой (m) / моя (f) / моё (n) / мои (pl).\n'YOUR (informal)' — твой / твоя / твоё / твои.\n'OUR' — наш / наша / наше / наши.\n'YOUR (formal)' — ваш / ваша / ваше / ваши.\n\nBUT 3rd person possessives DO NOT CHANGE:\n'HIS' — его (always).\n'HER' — её (always).\n'THEIR' — их (always).\n\nWhy? His/her/their are technically genitive forms of он/она/они — they're already 'fixed' in a case and don't need to agree again.",
 icon:"🔑"},

{type:"mc", q:"Which possessive form goes with 'книга' (book, feminine)?",
 opts:["мой","моя","моё","мои"],
 ans:"моя",
 hint:"Книга ends in -а (feminine). Match the possessive to feminine."},

{type:"mc", q:"Which possessive is used for 'her mother' (мать, feminine)?",
 opts:["его мать","её мать","их мать","ваша мать"],
 ans:"её мать",
 hint:"'Her' is an unchanging possessive. Don't be tempted to decline it."},

{type:"mc", q:"What's the plural form of 'мой'?",
 opts:["моя","моё","мои","моим"],
 ans:"мои",
 hint:"Russian plural possessives are one form for all genders. The plural ending -и often applies."},

{type:"fb", s:"A: Это {1} машина.\nB: Красивая машина!",
 a:["моя"],
 opts:["моя","мой","моё","мои"],
 hint:"Машина is feminine (ends in -а). The possessive must also be feminine.",
 sSrc:"A: This is my car.\nB: Beautiful car!"},

{type:"fb", s:"A: Как зовут {1} сестру?\nB: Её сестру зовут Марина.",
 a:["её"],
 opts:["её","его","их","ваши"],
 hint:"The answer already reveals the possessive: 'Её сестру зовут...'. Use the same possessive in the question.",
 sSrc:"A: What is her sister's name?\nB: Her sister's name is Marina."},

{type:"match", pairs:[
  {trg:"мой брат", src:"my brother"},
  {trg:"моя сестра", src:"my sister"},
  {trg:"моё письмо", src:"my letter"},
  {trg:"мои родители", src:"my parents"}
]}
<<<<<<< HEAD
,

{type:"match", pairs:[
  {trg:"отец", src:"father (formal)"},
  {trg:"ребёнок", src:"child"},
  {trg:"муж", src:"husband"},
  {trg:"жена", src:"wife"},
  {trg:"твой", src:"your (informal, m/f/n/pl)"}
]}]}
=======
]}
>>>>>>> origin/main

]};
export default UNIT_03;
