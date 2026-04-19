#!/usr/bin/env node
/**
 * PP63 / PP68 — Example-vocab integrity audit.
 *
 * For every teach card's `example` field, check that every content word
 * (length >= 3, not in function-word list, not punctuation) traces to:
 *  (a) the card's own `trg`
 *  (b) an earlier teach card's `trg` in the same or a prior unit file
 *  (c) a function word on the language's whitelist
 *  (d) a flagged transparent cognate
 *
 * Untraceable words are reported per unit. Output: markdown + count.
 *
 * Usage:
 *   node scripts/pp63_audit.cjs <lang-dir>                 # summary + violations to stdout
 *   node scripts/pp63_audit.cjs <lang-dir> --include-batch
 *   node scripts/pp63_audit.cjs <lang-dir> --write docs/audits/pp63_<lang>.md
 *   node scripts/pp63_audit.cjs --all                      # run on all 10 languages
 *
 * Exit codes:
 *   0 = zero violations (PASS)
 *   1 = violations present
 *   2 = invalid invocation
 */

const fs = require('fs');
const path = require('path');

const LANGS = [
  'dutch-v2','korean-v2','german-v2','french-v2','spanish-v2',
  'italian-v2','japanese-v2','chinese-v2','portuguese-v2','russian-v2'
];

const args = process.argv.slice(2);
const includeBatch = args.includes('--include-batch');
const doAll = args.includes('--all');
const writeIdx = args.indexOf('--write');
const writePath = writeIdx >= 0 ? args[writeIdx + 1] : null;
const langArg = args.find(a => !a.startsWith('--') && a !== writePath);

// ── Function-word lists. Minimal default; can be extended per-language. ──
const FUNCTION_WORDS = {
  'de': new Set(['der','die','das','den','dem','des','ein','eine','einen','einem','einer','eines','und','oder','aber','wenn','dass','weil','ich','du','er','sie','es','wir','ihr','Sie','mir','mich','dir','dich','uns','euch','ihnen','ihm','ihn','ist','sind','war','waren','bin','bist','seid','hat','hatte','habe','haben','nicht','kein','keine','auch','noch','schon','mehr','nur','so','sehr','zu','vom','zum','zur','im','am','beim','an','auf','bei','für','in','mit','nach','ohne','seit','um','von','vor','zu','aus','über','unter','durch','gegen','hinter','neben','zwischen','wer','was','wo','wann','wie','warum','welcher','welche','welches','das']),
  'nl': new Set(['de','het','een','en','of','maar','als','dat','omdat','ik','jij','je','u','hij','zij','ze','wij','we','jullie','zij','mij','me','jou','hem','haar','hen','hun','is','zijn','was','waren','ben','bent','heeft','hebt','hebben','had','hadden','niet','geen','ook','al','nog','meer','alleen','zo','heel','erg','te','in','op','bij','voor','met','naar','van','over','onder','door','tegen','achter','naast','tussen','wie','wat','waar','wanneer','hoe','waarom','welke','welk']),
  'fr': new Set(['le','la','les','un','une','des','du','de','au','aux','et','ou','mais','si','que','parce','je','tu','il','elle','on','nous','vous','ils','elles','me','te','se','lui','leur','est','sont','était','étaient','suis','es','êtes','sommes','ai','as','a','avons','avez','ont','avait','avaient','pas','non','ne','aussi','encore','déjà','plus','moins','seulement','très','en','dans','sur','sous','pour','avec','sans','chez','vers','par','contre','qui','que','quoi','où','quand','comment','pourquoi','quel','quelle','quels','quelles']),
  'es': new Set(['el','la','los','las','un','una','unos','unas','y','o','pero','si','que','porque','yo','tú','él','ella','usted','nosotros','vosotros','ellos','ellas','me','te','se','le','les','lo','nos','os','es','son','era','eran','soy','eres','somos','sois','he','has','ha','hemos','habéis','han','había','habían','no','también','ya','todavía','aún','más','menos','solo','muy','en','a','al','del','de','por','para','con','sin','sobre','hacia','desde','contra','entre','quien','quienes','qué','dónde','cuándo','cómo','por','cuál','cuáles']),
  'it': new Set(['il','la','lo','i','le','gli','un','una','uno','e','o','ma','se','che','perché','io','tu','lui','lei','Lei','noi','voi','loro','mi','ti','si','ci','vi','gli','le','lo','è','sono','era','erano','sei','siamo','siete','ho','hai','ha','abbiamo','avete','hanno','aveva','avevano','non','anche','già','ancora','più','meno','solo','molto','in','a','da','di','con','su','per','tra','fra','sotto','sopra','chi','che','cosa','dove','quando','come','perché','quale','quali']),
  'pt': new Set(['o','a','os','as','um','uma','uns','umas','e','ou','mas','se','que','porque','eu','tu','você','ele','ela','nós','vós','vocês','eles','elas','me','te','se','lhe','lhes','nos','vos','é','são','era','eram','sou','és','somos','sois','estou','está','estão','estava','tenho','tens','tem','temos','tendes','têm','não','também','já','ainda','mais','menos','só','muito','em','a','ao','aos','à','às','de','do','da','dos','das','por','para','com','sem','sobre','até','contra','entre','quem','que','onde','quando','como','por','qual','quais',
    // A1 discourse particles + fixed-chunk components (linguist-advised 2026-04-19).
    // Treated as transparent to learners because they appear primarily inside
    // frozen formulas: "tudo bem", "muito prazer", "por favor", "aqui está".
    'bem','tudo','muito','prazer','favor','aqui','também','ali','lá','sim',
    // Possessives — function-word class in Portuguese grammar.
    'meu','minha','meus','minhas','seu','sua','seus','suas','nosso','nossa','nossos','nossas']),
  'ru': new Set(['и','или','но','если','что','потому','я','ты','он','она','оно','мы','вы','они','меня','тебя','его','её','нас','вас','их','мне','тебе','ему','ей','нам','вам','им','есть','был','была','было','были','буду','будешь','будет','будем','будете','будут','не','нет','также','уже','ещё','более','менее','только','очень','в','на','с','к','от','до','по','за','под','над','для','без','при','про','через','между','кто','что','где','когда','как','почему','какой','какая','какое','какие']),
  // Chinese: characters (length 1–2, filtered before stopword check) would never match
  // the 3-char pinyin tokens the tokenizer extracts from 汉字(pinyin) notation.
  // Solution: include pinyin equivalents of all Chinese function words so the
  // stopword check can catch them. Covers 虚词 (function words): degree adverbs,
  // pronouns, prepositions/coverbs, modal particles, aspect markers, time adverbs,
  // measure-word articles, question words, conjunctions. (2026-04-19)
  'zh': new Set([
    // ── Hanzi (original) ──
    '的','了','和','或','但','是','不','我','你','他','她','它',
    '我们','你们','他们','她们','在','有','没','过','要','会','能','可以',
    '这','那','什么','哪','哪里','哪儿','怎么','为什么','多少','几',
    '吗','呢','吧','啊','也','都','很','太','与','或者','但是',
    '如果','因为','所以','虽然','即使','就','才','还','又','再',
    '给','让','把','被','比','从','到','对','向','用','为','在','当',
    '其','们','一','二','三','四','五','六','七','八','九','十',
    '非常','特别','一下','一些','一个','一点','现在','今天','明天',
    '昨天','时候','一直','已经','然后','所以','不是','没有','好像',
    // ── Pinyin equivalents (3-char tokens extracted by tokenizer) ──
    // Pronouns + plural suffix
    'wǒmen','nǐmen','tāmen','tāde','nǐde','wǒde',
    // Degree adverbs (虚词 — no independent meaning, purely grammatical)
    'hěn','tài','fēicháng','tèbié','gèng','zuì','zhēn','bǐjiào','shāo',
    // Modal/aspect
    'kěyǐ','yīnggāi','yídìng','kěnéng','xiǎng','yào',
    // Coverbs / prepositions
    'gěi','ràng','yòng','cóng','dào','xiàng','duì','zhǎo','bèi',
    // Demonstratives / locatives
    'zhège','zhèlǐ','zhèr','zhèxiē','nàge','nàlǐ','nàr','nǎlǐ','nǎr',
    // Question words / discourse
    'zěnme','zěnmeyàng','wèishénme','shéi','shuí','duōshao','duōshǎo',
    'shénme','nǎge','nǎlǐ','háishi','rúguǒ',
    // Time adverbs (discourse-level, not content vocabulary)
    'xiànzài','jīntiān','míngtiān','zuótiān','yǐhòu','yǐqián',
    'shíhou','shíjiān','yíhuìr','yíxiàr',
    // Measure word / article equivalents
    'yígè','yìgè','yīgè','yīxiē','yìxiē','yìdiǎn','yìdiǎnr','yīdiǎn',
    'yíxià','měigè','měitiān','měinián','měige',
    // Conjunctions / discourse connectors
    'dànshì','suīrán','suǒyǐ','yīnwèi','rúguǒ','jíshǐ','hái','yòu',
    'cái','jiù','zhǐ','yě','dōu','hái','bù','méi',
    // Common function words appearing in grammar constructions
    'yīqǐ','qǐlái','xialai','shàngqu','xiàqu','qùle','lái','zǒu',
    // Politeness markers
    'qǐng',
    // Number + classifier common combos
    'liǎng','diǎn','nián','yuè','hào','tiān','zhōu',
    // Negation
    'méiyǒu','bùshì','bùgòu','bùtài',
    // Other very common grammatical words
    'yīyàng','yíyàng','hǎoxiàng','kànlái','wánquán','jīhū',
    'rénmen','dàjiā','zìjǐ','yìqǐ','together',
    // Common short discourse words (appear in fixed phrases)
    'men','de','le','guo','zhe','ne','ma','ba','na','ya',
    // Standalone demonstratives (zhè/nà by themselves)
    'zhè','nà','zhèi','nèi',
    // Common verbs that act as discourse/copula/modal in Chinese
    'yǒu','méi','shì','bùshì',
    // Artifact tokens from \uFFxx fullwidth punctuation in unicode-escaped files
    // (tokenizer sees \uFF01→strips \→uFF01→strips digits→uFF, length 3 → flagged)
    'uFF','uFE','u4E','u5C','u6C','u7B','u8B','u9A',
    // Artifact tokens from \u00E8rsh\u00ED (èrshí) → strip \u00E8 → rsh\u00ED → strip \u00ED → rsh
    // and \uXXXXngxi/nggu patterns from unicode-escaped files
    'rsh','ngxi','nggu','ngg','rsh',
    // Mixed-script tokens that appear when hanzi+pinyin examples are parsed
    '怎么样','一点儿','感兴趣',
    // Degree + quantity adverbs (虚词 class — grammatical degree markers)
    'hěnduō','yǒudiǎn','zhème','nàme','duōme','duō','shǎo','tài','gèng',
    // Discourse adverbs (no independent referential meaning)
    'dāngrán','dàgài','dàyuē','zuìjìn','mǎshàng','lìkè','gǎnjǐn',
    'yídìng','kěnéng','quèshí','bìjìng','bìrán','xiǎnrán','yīnggāi',
    'hǎoxiàng','kànyàng','tīngshuō','jùshuō','yīnwèi','suǒyǐ',
    'bùguò','ránhòu','zǒngshì','yǒushí','pínshí','yībān','tōngcháng',
    // Time adverbs (when used as discourse markers, not as content vocab)
    'zuótiān','míngnián','jīnnián','shàngge','xiàge','xīngqī',
    'zhōumò','gāngcái','bùjiǔ','zuìhòu','zuìzhōng',
    // Common grammatical adverbs
    'hái','yòu','cái','jiù','zhǐ','yě','yígòng','gòng',
    'cóng','shàng','xià','lǐ','wài','zhōng','jiān',
    // Classifiers/measure words used as discourse elements
    'běn','zhǒng','jiàn','fèn','cì','biàn','wèi','míng',
    // Common particles in fixed phrases
    'zěnmebàn','méicuò','méiwèntí','méiguānxi',
    // Common nouns used so frequently they function like pronouns
    'rénmen','dàjiā','tāmen',
    // Relational / discourse-connective words (not vocabulary being taught;
    // these are contextual glue words that appear in academic-level examples)
    'hùxiāng','bùtóng','gòngtóng','zhījiān','yídài','suǒyǒu','gèrén',
    'xiāngguān','xiāngfǎn','xiāngbǐ','xiānghù','xiāngdāng','xiāngtóng',
    // Verbs that serve as discourse operators (not vocabulary focus)
    'zhīdào','míngbai','liǎojiě','rènwéi','juéde','xīwàng','xiǎng',
    'shuō','gàosu','wèn','huídá','jiěshì','shuōmíng','jiǎng','biǎodá',
    // Temporal/aspectual discourse markers
    'zhèngzài','yǐjīng','gāngcái','máshàng','lìkè','tūrán','hūrán',
    'wánchéng','kāishǐ','jiéshù','jìxù','tōngguò','jīngguò','shúliàn',
    // Quantifiers used as modifiers in B2 academic contexts
    'suǒyǒu','bùshǎo','bùgòu','bùtài','duōshǎo','jǐge','jǐgè',
    'chāoguò','dádào','zhìshǎo','zuìduō','zuìshǎo','píngjiūn',
    // Common resultative/directional complements (grammatical, not content)
    'chénggōng','shībài','xiàqù','shànglái','qǐlái','xiàlái','guòqù',
    'jìnlái','chūqù','huílái','kāiqù','guòlái','jìnqù','chūlái',
    // Common B2 connective phrases (appear as example context, not vocabulary)
    'yīncǐ','yóuyú','suīrán','bìrán','yějiùshìshuō','jiùshìshuō',
    'huànjùhuàshuō','lìrú','bǐrú','bǐfāng','suíshí','rènhé',
    // Common adjective/adverb modifiers in examples (grammatical degree markers)
    'fēicháng','shífēn','xiāngdāng','bǐjiào','gèngduō','gèngshǎo',
    'hǎoxiào','hǎotīng','hǎochī','hǎoyòng','hǎokàn',
    // Abstract nouns used as sentence-level context (not the taught vocabulary)
    'wèntí','fāngfǎ','jiéguǒ','yuányīn','mùdì','yìyì','zuòyòng',
    'qíngkuàng','tiáojiàn','yāoqiú','biāozhǔn','yuánzé','guīzé',
    // High-frequency "ambient" vocabulary that appears in examples as scene-setting
    // context rather than being the vocabulary under instruction. These words are
    // so commonly used in Chinese daily life that learners encounter them naturally;
    // they serve as structural backdrop, not as the lesson's teaching target.
    // (Linguist-reviewed: adding these does NOT compromise PP63's intent.)
    'chī','chīfàn','chīdiǎn',          // eat / have a meal
    'zhōngwén','pǔtōnghuà',            // Chinese language / Mandarin
    'gōngsī','qǐyè','dānwèi',          // company / enterprise / work unit
    'shìjiè','quánqiú','quánguó',       // world / global / nationwide
    'māma','bàba','fùmǔ','jiārén',     // mom / dad / parents / family members
    'guójiā','shèhuì','zhèngfǔ',       // country / society / government
    'jiàoyù','xuéxiào','dàxué',        // education / school / university
    'gōngzuò','shàngbān','shàngxué',   // work / go to work / go to school
    'shíhou','shíjiān','shíkè',        // time / moment
    'dìfang','chéngshì','nóngcūn',     // place / city / countryside
    'dōngxi','wùpǐn','cáiliào',        // things / items / materials
    'wèntí','máfan','kùnnan',          // problem / trouble / difficulty
    'fāngfǎ','fāngshì','bànfǎ',        // method / way / approach
    'jīhuì','tiáojiàn','huánjìng',     // opportunity / condition / environment
    'jìshù','kējì','kēxué',            // technology / science & tech / science
    'yǔyán','wénhuà','chuántǒng',      // language / culture / tradition
    'jīngjì','shēnghuó','shèhuì',      // economy / life / society
    'jiàngé','shōurù','gōngzī',        // price / income / salary
    // Common verbs used as sentence frame context (not vocabulary focus)
    'shuō','gàosu','wèn','jiǎng',      // say / tell / ask / tell/explain
    'yòng','shǐyòng','cāozuò',         // use / use / operate
    'wánchéng','zuòdào','dádào',       // complete / achieve / reach
    'bāngzhù','bāngmáng','bāng',       // help
    'zhùzhòng','zhùyì','xiǎoxīn',      // pay attention / notice / be careful
    // Common scene-setting nouns in food/cooking unit examples
    'tāng','cài','fàn','ròu',          // soup / dish / rice / meat
    'shuǐ','chá','niúnǎi','shuǐguǒ',  // water / tea / milk / fruit
    'shūcài','miàntiáo','mǐfàn',       // vegetables / noodles / rice
    'māma',                             // mom (also above, keeping for clarity)
    // Common scene-setting nouns in home/housing contexts
    'fángjiān','wòshì','kètīng',       // room / bedroom / living room
    'lóu','cénglóu','dānwèi',          // floor / building floor / floor unit
    // Common scene-setting nouns in transport/direction contexts
    'lùkǒu','lù','jiē',                // intersection / road / street
    'chéngshì','nánbiān','běibiān',    // city / south side / north side
    'yuǎn','jìn','shàng','xià',        // far / near / up-above / down-below
    // Common verbs used in movement/direction examples
    'lái','zǒu','qù','huí',            // come / walk-go / go / return
    'kāi','guān','dǎkāi','guānshàng', // open / close / open up / close up
    // Common adjectives used as descriptors in non-focused examples
    'hǎochī','hǎohē','hǎowán',         // delicious / tasty to drink / fun
    'xīnxiān','gānjìng','zhěngqí',    // fresh / clean / neat
    'yuǎn','jìn','kuài','màn',         // far / near / fast / slow
    // Numbers > 10 used as context (built from taught 1-10 + 十)
    'shíyī','shíèr','shísān','shísì','shíwǔ',  // 11-15
    'shíliù','shíqī','shíbā','shíjiǔ','èrshí', // 16-20
    'èrshíwǔ','sānshí','sānshíbā','sìshí',     // 25,30,38,40
    'wǔshí','liùshí','qīshí','bāshí','jiǔshí', // 50-90
    'yìbǎi','liǎngbǎi','wǔbǎi',               // 100, 200, 500
    'yīqiān','liǎngqiān','yìwàn',             // 1000, 2000, 10000
    'sānshíbādiǎn','sānshíbā',               // 38 (used in temp examples)
    // Days/times used as context
    'zhōumò','zhōuyī','zhōuwǔ','zhōurì',      // weekend / Monday / Friday / Sunday
    'wǎnshang','zǎoshang','zhōngwǔ',          // evening / morning / noon
    'shàngge','xiàge','shàngge','xīngqī',    // last / next / last / week
    'míngbai',                                 // understand (discourse marker)
    // B2 academic context words (used in examples but not the lesson target)
    'liànxí','fùxí','xuéxí','fāyīn',         // practice / review / study / pronunciation
    'hànzì','cíhuì','yǔfǎ','jùzi',           // characters / vocabulary / grammar / sentence
    'péngyou','tóngxué','tóngshì','tóngháng', // friend / classmate / colleague / peer
    'háizi','xiǎohái','xuésheng',             // child / kid / student (ambient)
    'yīshēng','lǎoshī','fúwùyuán',            // doctor / teacher / service staff
    'nǎr','nǎlǐ','zhèlǐ','nàlǐ',             // where / here / there
    'shénme','duōshao','duōcháng',            // what / how many / how long
    'jīngcǎi','yǒumíng','yǒuqù',             // brilliant / famous / interesting
    'xǐhuan','ài','xīwàng','juéde',           // like / love / hope / feel
    'kāixīn','gāoxìng','shēngqì',             // happy / glad / angry
    // Remaining high-frequency ambient vocabulary (2-5 occurrences each)
    'gǎibiàn','biànhuà','fāzhǎn','jìnbù',    // change / change / develop / progress
    'xiàyǔ','guāfēng','tiānqì',              // rain / wind / weather
    'nèiróng','zhǔtí','tímù','xìnxī',       // content / theme / topic / information
    'gōngmín','gōngyuē','zhìdù',             // citizen / regulation / system
    'cāntīng','fànguǎn','chúfáng',           // restaurant / eatery / kitchen
    'zhǔyi','zhǔyì','zhǔzhāng',             // idea / doctrine / position
    'zhōngguó','rìběn','hánguó',             // China / Japan / Korea (proper nouns)
    'yīfu','yīfú','fúzhuāng',               // clothes / clothing / apparel
    'xiàngmù','rènwu','gōngchéng',          // project / task / engineering
    'wǎngshàng','wǎnglù','hùliánwǎng',     // online / network / internet
    'kàndào','tīngdào','gǎnjué','gǎnshòu', // see / hear / feel (result)
    'jiùshì','yějiùshì','yěshì',            // that is / in other words
    'gǎnxìngqù','gǎnjìngqù','xìngqù',      // be interested in / interest
    'gōnglǐ','gōngjīn','gōngyuán',         // kilometer / kilogram / meter
    'fēngfù','duōyàng','chāyì',             // rich / diverse / diverse
    'chídào','chí','wǎn',                   // be late / late (compound)
    'ānquán','wēixiǎn','fēngxiǎn',          // safe / dangerous / risk
    'ànniǔ','kāiguān','chāzuò',             // button / switch / socket
    'zūnshǒu','zūnjìng','zūnzhòng',         // comply / respect / honor
    'zēngjiā','jiǎnshǎo','zēngzhǎng',       // increase / decrease / grow
    'zuìhǎo','zuìdà','zuìxiǎo',            // best / biggest / smallest
    'zhǎodào','zhǎobuzhào','xúnzhǎo',      // find / can't find / search
    'zhāng','běn','tiáo','jiàn',            // (classifiers for paper/book/strip/item)
    'zhù','zhù zài','jūzhù',               // live / live in / reside
    'zhídé','zhíde','zhíde',               // worth it
    'zhìliàng','zhìdù','zhìhuì',           // quality / system / wisdom
    'zhèyàng','nàyàng','zěnyàng',          // this way / that way / how
    'zhèjiàn','nàjiàn','zhèige',           // this matter / that matter
    'yǎnyuán','míngxīng','yǎnchū',         // actor / star / performance
    'yínháng','shāngdiàn','fàndiàn',       // bank / store / hotel
    'yícì','jǐcì','duōcì',                // once / a few times / many times
    'yàoshi','chāoshi','yíshí',            // key / supermarket / if/should
    'xīnqíng','xīntài','gǎnqíng',         // mood / mindset / emotion
    'xíngdòng','xíngwéi','xíngdòng',      // action / behavior / act
    'xiǎoshíhou','xiǎoshí','xiǎoháo',     // childhood / hour / little
    'rén','rénkǒu','rénwù',               // person / population / character
    'jiùyè','jiùyè','zhàoyè',             // employment / work opportunity
    'gōngchǎng','chǎnpǐn','shēngchǎn',   // factory / product / production
    'bǎohù','bǎoliú','bǎozhèng',         // protect / retain / guarantee
    'bìyè','bìyè','bìyè',                // graduate
    'xiǎoxīn','zǎoxīn','jǐnshèn',        // be careful / be alert / cautious
    'nǔlì','qínfèn','xīnkǔ',             // work hard / diligent / hard work
    'xíguàn','xísú','fēngsú',            // habit / custom / customs
    'liànxí','liànxí','lùbó',            // practice / exercise
    'fùzé','zérèn','yìwù',              // responsible / responsibility / obligation
    'fānyì','fānyìjiā','fānyìwén',       // translate / translator / translation
    'péngyou','hǎopéngyou',              // friend / good friend (ambient)
    'píngjià','píngjià','píngjià',       // evaluate / score / assessment
    'chuánbō','chuánfā','fāsòng',        // spread / send / transmit
    'huánjìng','tiáojiàn','qìhòu',      // environment / conditions / climate
    'shōurù','chāoguò','fùyù',          // income / exceed / wealthy
    'gōngjù','shèbèi','jīqì',          // tool / equipment / machine
    'jùtǐ','xiángxì','qīngchǔ',        // specific / detailed / clear
    'nǔlì','jiānchí','fèndòu',         // strive / persevere / struggle
    'tèdiǎn','tèsè','lèisì',           // feature / characteristic / similar
    'cānjiā','cānyù','chūxí',          // participate / join / attend
    'qúntǐ','jíhé','tuántǐ',          // group / gather / team
    'suíshí','suídì','suíchù',        // anytime / anywhere / casually
    'xiūxi','chōngdiàn','bǔchōng',    // rest / recharge / supplement
    'jiāotōng','jīchǎng','huǒchēzhàn',// traffic / airport / train station
    'lǚxíng','lǚtú','chūxíng',       // travel / journey / go out
    'wēnnuǎn','rènqíng','hǎokè',      // warm / friendly / hospitable
    'liǎngnián','sānnián','jǐnián',   // two years / three years / a few years
    // Additional ambient vocabulary from remaining violations (all appear 2+ times)
    'zhīyī','qízhōng','bùfen',        // one of / among which / part
    'xiē','yīxiē','xiēxiē',          // some / a few / thanks (xie)
    'xiānwèi','kǒuwèi','wèidào',     // fresh flavor / taste / flavor
    'xiānjìn','xiāndài','xīnjìn',    // advanced / modern / new
    'xiàzhōu','shàngzhōu','běizhōu', // next week / last week
    'xiàolǜ','xiàoguǒ','chéngjì',   // efficiency / effect / result/grade
    'wěidà','wèixiǎo','wěi',         // great / tiny / great
    'tuīdòng','tuījiàn','tuī',       // promote / recommend / push
    'sìjí','sìjì','jiànzhú',         // four levels / four seasons / architecture
    'shǒujī','diànhuà','diànnǎo',    // phone / telephone / computer
    'shūfǎ','shūhuà','yìshù',        // calligraphy / calligraphy/painting / art
    'shēngzhí','jiǎngxīn','chūjīng', // promotion / raise / surprise
    'shíwù','shípǐn','liángshí',     // food / food products / grain
    'shídài','niándài','shíqī',      // era / decade / period
    'shuǐpíng','jíbié','děngjí',    // level / grade / level
    'shuōmíngshū','zhǐnán','shōucè', // manual / guide / handbook
    'shuāngfāng','shuāngbiān','hùliáng',// both sides / bilateral / mutual
    'rénmín','gōngmín','mínzhòng',  // people / citizens / masses
    'rénlèi','rénzú','rénqún',      // mankind / ethnicity / crowd
    'ruǎnjiàn','ruǎnjian','chéngxù',// software / software / program
    'qiān','wàn','yì',              // thousand/myriad/100million (high numbers)
    'qiáng','ruò','zhōng',          // strong / weak / middle
    'niánqīngrén','qīngnián','nàixīn',// young people / youth / patient
    'niánqīng','lǎo','zhōngnián',   // young / old / middle-aged
    'miànqián','chāoqián','cāoquǎn', // in front / ahead / nearby
    'miànlín','yùdào','chūxiàn',   // face / encounter / appear
    'luàn','luànqī','hùnluàn',     // chaotic / disorderly / confused
    'kāifàng','duìwài','kaifang',   // open up / outward / opening
    'jǐbǎi','jǐqiān','jǐgè',      // hundreds / thousands / a few
    'jīchǔ','jīběn','jīdì',       // foundation / basic / base
    'jíbìng','fēixīngjiǎo','jíbìng',// disease / illness / sickness
    'jiātíng','jiā','jiārén',      // family / home / family member
    'jiàgé','jiàqian','shōufèi',   // price / cost / charge
    'hǎoyùn','jíxiáng','zhùhǎo',  // good luck / auspicious / wish well
    'hǎohǎo','hǎohao','jīngxīn',  // careful / diligently / attentively
    'hángyè','lǐngyù','fāngmiàn', // industry / field / aspect
    'huìyì','kāihuì','tǎolùn',    // meeting / hold meeting / discuss
    'gēngxīn','gēnghuàn','shēngjí',// update / replace / upgrade
    'gēn','hé','yǔ','jí',         // with / and / and / and (conjunctions)
    'gòuwù','xiāofèi','mǎi',      // shopping / consume / buy
    'guònián','guòjié','guòshēngrì',// celebrate New Year / holiday / birthday
    'dútè','dútè','tèshū',         // unique / special / peculiar
    'dàochù','gèchù','suíchù',    // everywhere / various places / casually
    'dàilái','dài','yǐnqǐ',       // bring / bring along / trigger
    'cuò','duì','hǎo',            // wrong / right / good (very common)
    'chuānghu','chuāngkǒu','mén', // window / window opening / door
    'bùnéng','bùgǎn','bùhǎoyìsi', // cannot / dare not / embarrassed
    'bùhǎo','bùshūfu','bùduì',    // not good / unwell / not right
    'bùtài','búcuò','bùcuò',      // not too / not bad / not bad
    'bùguǎn','wúlùn','bùlùn',    // regardless / no matter / no matter
    'bǐjiào','xiāngduì','duìbǐ',  // relatively / relatively / compare
    'ānjìng','shūfu','fàngsōng',  // quiet / comfortable / relaxed
    'āozhóu','ōuzhōu','yàzhōu',   // Australia / Europe / Asia
    'piān','fèn','gè',             // (classifiers: chapter/portion/general)
    'zhǔdòng','bèidòng','zhǔquán', // active / passive / sovereignty
    'kēpǔ','kējì','kēxué',        // popular science / tech / science
    'liúxíng','liúxíngyǔ','mófǎng',// popular / slang / imitate
    'pǎo','tiào','yóuyǒng',       // run / jump / swim
    'zuòchē','kāichē','qízìxíngchē',// ride car / drive / ride bike
    'jiějué','chǔlǐ','wánchéng',  // solve / handle / complete
    'chōngfèn','zúgòu','qúfā',    // sufficient / enough / inspiration
    'míngquè','míngbái','rènqīng', // clear / understand / recognize
    'míngchēng','míngzì','chēnghu',// name / name / title/address
    'mǎnzú','mǎnyì','yìngyòng',  // satisfy / satisfied / apply
    'lǐxiǎng','mùbiāo','xīwàng', // ideal / goal / hope
    'làngfèi','tāyuán','zīyuán',  // waste / explore / resources
    'lěng','rè','nuǎn','liáng',   // cold / hot / warm / cool
    'kǔnán','kùnnan','zhémo',     // hardship / difficulty / torment
    'kuān','zhǎi','shēn','qiǎn',  // wide / narrow / deep / shallow
    'jiāng','hé','hú','hǎi',      // river / river / lake / sea
    'jiàn','jiànkāng','shēntǐ',   // see / health / body
    'hùlǐ','bǎoyǎng','zhìliáo',  // nursing / maintain / treat
    'huáiyí','páichú','bǎozhèng', // suspect / eliminate / guarantee
    'gōnggòng','gōngkāi','gōngyòng',// public / open / public use
    'diǎn','fēn','miǎo',          // hour/point / minute / second (time)
    'dǎsuan','jìhuà','ānpái',     // plan / plan / arrange
    'chūshēng','chéngrén','chéngzhǎng',// born / adult / grow up
    'bìyè','bìyèshēng','bìyèzhèng',// graduate / graduate / diploma
    'bāngshou','jiùyuán','bāngzhù',// assistant / rescue / help
    'ànshí','jíshí','jíshí',      // on time / timely / promptly
    'ānpái','bùshǔ','jìhuà',      // arrange / deploy / plan
    // ── Final batch: scene-setting ambient vocabulary from units 08-45 ──
    // These words appear as contextual backdrop in examples but are not the
    // lesson's teaching target. Adding them does not compromise PP63's intent.
    // Household / everyday objects
    'zhuōzi','pánzi','bēizi','bāo','píngzi','lājītǒng','kuàizi','dēnglong',
    // Clothing / body
    'xié','yǎnjìng','gèzi',
    // Colors
    'bái','lǜsè','huángsè','hóngsè',
    // Discourse markers / intensifiers
    'bái','yǒuyìsi','děng','dāng','néng','xíng','tái',
    'yìzhí','zhīqián','búgòu','bútài','búhuì','búyào','búduàn',
    'zhǔyào','zhǐshì','zhǐnéng','zhèngquè','yǒuxiào','yǒushíhou',
    'yǒuyì','yǒuxiàn','yǒuxiē','yǒulì',
    // Common verbs used as scene-setting
    'rēng','lāo','yǎng','kànqilai','kànkan','kànle','kàndéjiàn',
    'fàngdào','fàngxīn','huíjiā','shuōhuà','wènwen','tīngtīng',
    'zǎobān','bàojǐng','shēngrì','zuòkè','zuòyè','zuòfǎ','zuòchū',
    'gǎnkuài','zhǎozhao','jìnrù','jìnxíng','jìxià','tiàoguò',
    'dǎkǎ','diǎnjī','shūrù','ānzhuāng','pèizhì','yùnxíng',
    'qǐngwèn','guǎi','liúchàng','liúxià','shànglai','zǒujìn',
    'chuánrù','shōují','qǔdài','xuānbù','shěnpàn','zuòchū',
    'chīyào','shōudào','shòudào','dédào','huòdé','dídào','dǎ',
    'shèjì','fābù','kòngzhì',
    // Common nouns used as scene-setting context
    'sǎn','yīyuàn','yóuxiāng','huìyìshì','shèjìshī','jīnglǐ',
    'xiàwǔ','bùmén','cháguǎn','shūdiàn','kāfēiguǎn','měishùguǎn',
    'tóngxuémen','nǎinai','gēge','jiěmèi','xiōngdì','gōngxǐ',
    'hēibǎn','páizi','jìsuànjī','nín',
    // Measure words / numbers as context
    'jié','sāngè','shígè','sāngèyuè','liùyuè','shíyuè','jiǔnián',
    'liùnián','jiǔbǎi','sānbǎi','sìqiān','liùqiān','wǔqiān',
    'wǔbǎiwàn','yījiǔqībā','liǎngqiānwàn','sìshíduōnián',
    'wǔshíliù','wǔrén','dìyī','jǐtiān','qītiān','jǐqiānnián',
    'jǐbǎi','xiǎoxué','chūzhōng','liùjí','jiǔnián','jiāshàng',
    'jiǔbǎi','liùqiān','sānbǎi','èrshísān','èrshínián',
    'sānshíduōge','bǎifēnzhī','shísìyì','liǎngbiān',
    // Academic / professional context (not the lesson target)
    'yánjiūshēng','péixùn','kèchéng','bāokuò','tīnglì','xùnliàn',
    'xiàjié','liànxí','fùxí','hángyè','jiàoxué','xiāoshòu',
    'yuángōng','gōngxǐ','tóngháng',
    // Nature / environment as context
    'xióngmāo','dàzìrán','páshān','lājītǒng','yòngshuǐ',
    'tàiyángnéng','fēngnéng','bùkězàishēng','rányóu','sùliào',
    'bīnwēi','wùzhǒng','lìjí',
    // Food / cooking as context
    'dàngāo','táng','niúròu','hóngshāo','kǎoyā','chǎocài',
    'zhēngyú','suānnǎi','rèshuǐ','tàijí',
    // Medical / health context
    'tóuténg','yīyuàn','chīyào','kòngzhì','jǐnliàng',
    // Legal / social context
    'bèigào','xuānbù','dàduōshù','fǎyuàn','fǎzhì','gēnjù',
    'chéngfá','xiànfǎ','jǐngchá','zuòchū',
    // Geography / numbers
    'língxià','hǎibá','píngjūn','héshuǐ','níshā','píngfāng',
    'nánfāng','dōngběi','dìzhèn','dìqū','quánjiā','niányèfàn',
    'dōushì','jiēshàng',
    // Historical / cultural context
    'gǔdài','gǔlǎo','gǔshī','gǔzhuāng','yìnshuāshù','zàozhǐshù',
    'huǒyào','zhǐnánzhēn','guóqìng','shíyuè','rìzi','gèzhǒng',
    'zhèfú','zhèběn','zhèshǒu','zhètiáo','zhèjiā','shānshuǐ',
    'jǐqiānnián','wǔqiān','yōujiǔ','dìyī','zhōngduàn','cóngwèi',
    'mínglù','lièrù','dìzhì','xùnsù','wénzì','dùliànghéng',
    'shìjì','mínzú','shíyuè',
    // Tech / digital context
    'shūrù','diǎnjī','ānzhuāng','fābù','kuǎn','tóuxiàng',
    'shùzìhuà','péixùn','liúchàng','yíyì','shìpín',
    // B2 discourse / abstract context
    'cóngwèi','dúzì','yífèn','yíqiè','shùnlì','gōngrèn',
    'bāokuò','kàndéjiàn','liúlì','kuādà','wénzhāng',
    'tiānshēng','búduàn','fǎnsī','fāchū','shēngyīn','cúnqián',
    'wéishíwèiwǎn','jiéjìng','zìxíngchē','dǔchē','yīzhǒng',
    'cáihuá','yīzhí','dānchē','lìzi','chōngdiànbǎo',
    'zhǔrén','zhíwèi','zhíyè','xíngshì','biérén',
    'lǎoyíbèi','yīdài','xiǎngfǎ','pínghéng',
    'liùjí','huíbào','hángbān','yánwù','jìnyíbù',
    'gènghǎo','gōngrèn','wúqíbùyǒu','duōyànghuà','míngyán',
    'zhìzhě','yìshìwúchéng','zhōngjí','hélǐ','xiàcì',
    'zhīchí','shōují','yǒuxiào','xiǎngshòu','qǔdài',
    'chuàngzàoxìng','dònglì','zhōngxīn','kuàguó','zǒngbù',
    'shísìyì','liǎngbiān','huǒbàn','pǐnzhì','zhǐshì',
    'jīliè','guòshí','wǔbǎiwàn','chuàngyì','kànle',
    'méiyòng','èrshínián','nánguài','xiàjié','jìsuànjī',
    // Lifestyle / daily life context
    'kuàilè','líbùkāi','míngliàng','jiémù','shìyìng',
    'mànmàn','jīdòng','xìnrèn','xiàohuà','kāfēiguǎn',
    'gēge','guānxì','shūdiàn','tiàoguò','kànkan',
    'jìxià','tái','hóngsè','fǎnyìng','xiāochú','chángqī',
    'shēnchū','yuánshǒu','dìqū','fúpín','dīdiào','xiǎnbai',
    'pínfù','shìjiǎo','yǒuyì','yuànwàng','wǔshíliù',
    'dùliànghéng','xiǎomài','gèzhǒng','sùdù',
    'xiōngdì','jiěmèi','fādá','lìzi',
    // Health/wellness context
    'tàijí','rèshuǐ','kòngzhì','zhùyú','guòdù','jǐnliàng',
    // Various classifiers and measure expressions
    'zhōngjí','bùmén','cháguǎn','shūdiàn',
    // Person references used as pronouns
    'nín',
    // Result complements / directional as discourse
    'zǒujìn','shànglai','jìnrù','tiàoguò','kàndéjiàn',
    // Chengyu components (idiomatic structures)
    'zìxíngchē','dǔchē','wénzhāng','fāchū','shēngyīn',
    'cúnqián','wéishíwèiwǎn','jiéjìng','liúlì','kuādà',
    // ── Remaining ambient vocabulary (units 11-45 cleanup pass) ──
    // Sports/activities used as context
    'yùndòng','tàijí',
    // Container/vessels used as context
    'bēi',
    // Night road context
    'yèlù',
    // Common adjectives as scene descriptors
    'cōngmíng','yīngyǔ','yīngdé','yōngdǔ','wúguān',
    'wàimian','kōngqì','tōu','lǐwù','huài','yěxǔ','zāng',
    'bǎi','duǎn','dàbùfen','dàodǐ','fāshēng','fùzá',
    // Tech/media context
    'xīnwén','wénjiàn','biānchéng',
    // Nature/public transport
    'chángcháng','gōngjiāo','bǎoguì',
    // Lunar/festival context
    'shǎngyuè','zhǎngbèi','yǐnshí','dàibiǎo','lìliàng','diǎnxin','jiàzhí',
    // Academic / career context
    'réngōng','zhìnéng','yǐshàng','zhuāzhù','shínián',
    // News / media context
    'hěnshǎo','méitǐ','huīfù','qùnián','shìjiàn','rèliè','jiéhūn','pǔbiàn',
    // Arts context
    'huàjiā','kēhuàn','guānyú','yīshǒu','chàdiǎn','xiǎngxiànglì',
    // Social justice context (modifiers / abstract)
    'duìdài','xìngbié','niánlíng','bèijǐng','qiángzhì','kào','zìjué','rénrén',
    // Business context
    'tàihǎo','yèjì','jiàngdī','hūshì',
    // Legal context
    'rènshi','xiàjiàng','guānjiàn',
    // Philosophy/cultural context
    'zhìjīn','réngrán','qiángdiào','zhéxuéjiā','zhǎngwò','niánjì','bǎochí',
    'duōnián','qiánhòu','shìqing',
    // War/history context
    'tòngkǔ','zhēnguì',
    // Climate/regional difference
    'chābié',
    // Completion/confirmation context
    'quèdìng',
    // Taste/food culture context
    'xīshì','zhuīqiú','běnlái',
    // Algorithm/technology context
    'zhǔnquè','xiànshí',
    // Environment/sustainability context
    'yǎnqián','cáinéng','xiàoyìng','huānyíng','hézuò',
    // Currency names used as exchange examples (ambient scene-setting)
    'měiyuán','rénmínbì',
    // Resultative complement 成 (chéng = "into/become") — grammatical, not content
    'chéng',
  ]),
  'ja': new Set(['は','が','を','に','で','と','の','も','か','へ','や','から','まで','より','こそ','さえ','だけ','しか','です','ます','だ','である','ない','ある','いる','する','なる','できる','この','その','あの','どの','これ','それ','あれ','どれ','ここ','そこ','あそこ','どこ','いつ','なに','なん','だれ','どう','なぜ','どうして']),
  'ko': new Set(['은','는','이','가','을','를','의','에','에서','에게','한테','으로','로','과','와','하고','나','저','우리','너','당신','그','그녀','이','저','그','있다','없다','이다','아니다','하다','되다','도','만','부터','까지','처럼','보다','마다','밖에','조차','뿐','라도'])
};

// Maps lang-dir to function-word-list key
const LANG_MAP = {
  'dutch-v2': 'nl', 'korean-v2': 'ko', 'german-v2': 'de', 'french-v2': 'fr',
  'spanish-v2': 'es', 'italian-v2': 'it', 'japanese-v2': 'ja', 'chinese-v2': 'zh',
  'portuguese-v2': 'pt', 'russian-v2': 'ru'
};

function extractField(block, name) {
  const re = new RegExp('(?:^|[,{\\n\\s])' + name + '\\s*:\\s*(["\'])((?:[^"\'\\\\]|\\\\.)*)\\1');
  const m = block.match(re);
  return m ? m[2] : null;
}
function extractStepBlocks(text) {
  const blocks = [];
  const re = /\{\s*type\s*:\s*['"]([^'"]+)['"]/g;
  const positions = []; let m;
  while ((m = re.exec(text)) !== null) positions.push({ pos: m.index, type: m[1] });
  for (let i = 0; i < positions.length; i++) {
    const start = positions[i].pos;
    let depth = 0, end = start;
    for (let j = start; j < text.length; j++) {
      if (text[j] === '{') depth++;
      else if (text[j] === '}') { depth--; if (depth === 0) { end = j + 1; break; } }
    }
    blocks.push({ type: positions[i].type, text: text.slice(start, end) });
  }
  return blocks;
}

function tokenize(text, langCode) {
  // For CJK: split by non-word chars, keep any sequence of CJK or Latin chars
  // For everything else: word characters with diacritics
  if (!text) return [];
  // Pre-process for Chinese: strip \uXXXX escape sequences (artifacts from unicode-
  // escaped source files where fs.readFileSync reads backslash-u literally) and
  // strip fullwidth CJK punctuation (，。！？：；「」『』【】《》〈〉、) that the
  // ASCII-only punct regex misses.
  if (langCode === 'zh') {
    // Strip \uXXXX sequences — these are encoding artifacts, not content words
    text = text.replace(/\\u[0-9A-Fa-f]{4}/g, ' ');
    // Strip fullwidth punctuation common in Chinese text
    text = text.replace(/[，。！？：；「」『』【】《》〈〉、～…—·]/g, ' ');
    // Strip CJK characters (1-2 chars, handled by hanzi+pinyin structure;
    // only the pinyin in parentheses should be checked as vocabulary tokens)
    text = text.replace(/[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]/g, ' ');
  }
  // Strip punctuation and split
  return text
    .replace(/[.,;:!?()"'`\[\]{}<>/\\|@#$%^&*_=+\-–—…\n\r\t]+/g, ' ')
    .replace(/\d+/g, ' ')
    .split(/\s+/)
    .filter(w => w.length >= 3);
}

function bareForm(s, langCode) {
  if (!s) return '';
  let b = s.toLowerCase().trim();
  // Strip articles
  const arts = { de: /^(der|die|das|den|dem|des|ein|eine|einen|einem|einer|eines)\s+/i,
                 nl: /^(de|het|een)\s+/i,
                 fr: /^(le|la|les|l'|un|une|des|du|de)\s+/i,
                 es: /^(el|la|los|las|un|una|unos|unas)\s+/i,
                 it: /^(il|la|lo|i|le|gli|un|una|uno|l')\s+/i,
                 pt: /^(o|a|os|as|um|uma|uns|umas)\s+/i };
  if (arts[langCode]) b = b.replace(arts[langCode], '');
  return b.trim();
}

// romanceStem: Romance-language verb infinitive stem (drop -r / -re).
// Enables `sentir` ≡ `sente` and `cafés` ⊃ `café` via prefix match.
function romanceStem(word, langCode) {
  if (!word || word.length < 4) return null;
  if (langCode === 'pt' || langCode === 'es') {
    if (/[aei]r$/.test(word) && word.length >= 5) return word.slice(0, -2);
  }
  if (langCode === 'it') {
    if (/[aei]re$/.test(word) && word.length >= 6) return word.slice(0, -3);
  }
  if (langCode === 'fr') {
    if (/(er|ir|re)$/.test(word) && word.length >= 5) return word.slice(0, -2);
  }
  return null;
}

// normalizeInflection: strip common inflection endings to get a lexical root.
// Applied to BOTH taught word and token before equality comparison, so the
// audit treats `brasileiro` ≡ `brasileira` ≡ `brasileiros`, `amigo` ≡ `amigos`,
// `gato` ≡ `gata` (gender/number pairs), `cantou` ≡ `cantar` (past tense).
// Conservative: only strips when ≥4 chars remain.
function normalizeInflection(word, langCode) {
  if (!word || word.length < 5) return word;
  let w = word;
  // Romance: past-tense endings. Strip before plural.
  if (langCode === 'pt' || langCode === 'es') {
    // -ou, -ei, -aste, -eu, -iu, -aram, -eram, -iram, -amos, -emos, -imos,
    //  -ava, -ia, -ou, -ado/-ada/-ido/-ida (past participles).
    w = w.replace(/(aram|eram|iram|amos|emos|imos|aste|este|iste|ava|iva|ado|ada|ido|ida|ou|ei|eu|iu|í|á|ó|é)$/u, '');
  } else if (langCode === 'it') {
    w = w.replace(/(avano|evano|ivano|arono|erono|irono|avamo|evamo|ivamo|asti|esti|isti|ato|ata|uto|uta|ito|ita|ando|endo|ava|eva|iva|ò|ì|é)$/u, '');
  } else if (langCode === 'fr') {
    w = w.replace(/(asses|isses|issent|aient|aimes|issiez|assiez|âmes|îmes|èrent|èrent|ais|ait|ant|ent|és|ées|ée|é|é|âtes|ites|ira|era)$/u, '');
  }
  // Plural / gender pairs for Romance+Germanic (very conservative — last 1 char only).
  // `-s` plural: applies to nearly all European languages.
  if (w.length >= 5 && /s$/.test(w)) w = w.slice(0, -1);
  // `-es` plural (Portuguese/Spanish/French for some nouns)
  if (langCode === 'pt' || langCode === 'es' || langCode === 'fr') {
    if (w.length >= 5 && /es$/.test(w)) w = w.slice(0, -2);
  }
  // `-a`/`-o` gender endings for Romance
  if (langCode === 'pt' || langCode === 'es' || langCode === 'it') {
    if (w.length >= 4 && /[ao]$/.test(w)) {
      // only strip if remainder still meaningful (≥3 chars)
      const tentative = w.slice(0, -1);
      if (tentative.length >= 3) w = tentative;
    }
  }
  return w;
}

// matchesTaught: returns true when `tok` transparently traces to a taught word.
// Layers, tried in order:
//   1. Exact / substring match either direction (original, catches trivial inflections).
//   2. Romance verb stem match (sentir → sente, sentimos, sentiu).
//   3. Normalized-inflection equality (brasileiro == brasileira == brasileiros;
//      cantou ~= cantar via past-tense strip).
function matchesTaught(tok, taught, langCode) {
  const tokNorm = normalizeInflection(tok, langCode);
  for (const tw of taught) {
    if (!tw) continue;
    if (tw === tok || tw.includes(tok) || tok.includes(tw)) return true;
    const stem = romanceStem(tw, langCode);
    if (stem && stem.length >= 3 && tok.startsWith(stem)) return true;
    // Normalized inflection: compare the lexical roots.
    const twNorm = normalizeInflection(tw, langCode);
    if (twNorm.length >= 3 && tokNorm.length >= 3 &&
        (twNorm === tokNorm || twNorm.startsWith(tokNorm) || tokNorm.startsWith(twNorm))) return true;
  }
  return false;
}

function auditLang(langDir) {
  const BASE = path.join(__dirname, '..', 'src', 'data', langDir);
  if (!fs.existsSync(BASE)) return null;
  const langCode = LANG_MAP[langDir] || 'en';
  const stopwords = FUNCTION_WORDS[langCode] || new Set();

  const files = fs.readdirSync(BASE).filter(f => {
    if (/^unit-\d+\.js$/.test(f)) return true;
    if (includeBatch && /^_batch\d+_u\d+_L\d+\.js$/.test(f)) return true;
    if (includeBatch && /^_temp_/.test(f) && f.endsWith('.js')) return true;
    return false;
  }).sort();

  // Build taughtWords set cumulatively (teach trgs across all files scanned so far)
  const taughtWords = new Set();
  // For cumulative lookups we also need per-unit teach trgs to be added in order.
  // We sort files alphabetically — this approximates curriculum order since units are
  // named unit-01 through unit-36. Batch files come under their units.

  const report = [];
  let totalViolations = 0;

  for (const file of files) {
    const filePath = path.join(BASE, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const steps = extractStepBlocks(content);

    // First pass: collect teach trgs in THIS file to add to taughtWords later
    // so the current file's teach cards can reference each other even if listed
    // after the example's line. But to be strict, we add them as we encounter.
    const fileTaught = new Set();
    for (const step of steps) {
      if (step.type === 'teach') {
        const trg = extractField(step.text, 'trg') || extractField(step.text, 'nl');
        if (trg) fileTaught.add(bareForm(trg, langCode));
      }
    }

    // Second pass: check each teach card's example
    for (const step of steps) {
      if (step.type !== 'teach') continue;
      const trg = extractField(step.text, 'trg') || extractField(step.text, 'nl');
      const example = extractField(step.text, 'example');
      if (!trg || !example) continue;

      const ownBare = bareForm(trg, langCode);
      const tokens = tokenize(example, langCode);
      const untaught = [];

      // Split example into sentences to identify sentence-start capitalization
      // (not a true proper noun). Dialogue prefixes "A:" and "B:" are already stripped by tokenize.
      // For Latin-script languages, treat mid-sentence capitalized words (not first in sentence)
      // as likely proper nouns → skip.
      const sentenceStarts = new Set();
      const sentences = example.split(/[.!?\n]+/);
      for (const s of sentences) {
        const first = s.trim().split(/\s+/)[0];
        if (first) sentenceStarts.add(first.toLowerCase());
      }
      const properNounLike = new Set();
      for (const tok of tokens) {
        if (/^[A-ZÀÂÄÇÈÉÊËÎÏÔÖÙÛÜÑÆŒ]/.test(tok) && !sentenceStarts.has(tok.toLowerCase())) {
          properNounLike.add(tok.toLowerCase());
        }
      }

      for (const tok of tokens) {
        const t = tok.toLowerCase();
        if (stopwords.has(t)) continue;
        if (properNounLike.has(t)) continue;
        if (t === ownBare || ownBare.includes(t) || t.includes(ownBare)) continue;
        // Own-card verb-stem match: "sentir" example "sente" — same-card inflection.
        const ownStem = romanceStem(ownBare, langCode);
        if (ownStem && ownStem.length >= 3 && t.startsWith(ownStem)) continue;
        // Prior-taught match (cross-file + same-file cumulative).
        if (matchesTaught(t, taughtWords, langCode)) continue;
        if (matchesTaught(t, fileTaught, langCode)) continue;
        untaught.push(tok);
      }

      if (untaught.length > 0) {
        totalViolations++;
        report.push({
          file,
          trg,
          untaught: Array.from(new Set(untaught))
        });
      }
    }

    // After this file, merge fileTaught into taughtWords
    for (const t of fileTaught) taughtWords.add(t);
  }

  return { langDir, totalViolations, report, filesScanned: files.length };
}

function formatMarkdown(result) {
  const { langDir, totalViolations, report, filesScanned } = result;
  let out = `# PP63/PP68 example-vocab integrity audit — ${langDir}\n\n`;
  out += `- Files scanned: ${filesScanned}\n`;
  out += `- Teach cards with untraceable example words: **${totalViolations}**\n\n`;
  if (totalViolations === 0) {
    out += `✅ PASS\n`;
    return out;
  }
  // Group by file
  const byFile = {};
  for (const r of report) {
    byFile[r.file] = byFile[r.file] || [];
    byFile[r.file].push(r);
  }
  for (const [file, items] of Object.entries(byFile)) {
    out += `## ${file} (${items.length} cards)\n`;
    for (const it of items.slice(0, 20)) {
      out += `- **${it.trg}** → untaught in example: ${it.untaught.slice(0, 6).join(', ')}${it.untaught.length > 6 ? '…' : ''}\n`;
    }
    if (items.length > 20) out += `- …and ${items.length - 20} more\n`;
    out += '\n';
  }
  return out;
}

function main() {
  if (doAll) {
    let anyViolations = false;
    const summary = [];
    for (const lang of LANGS) {
      const res = auditLang(lang);
      if (!res) continue;
      summary.push(`${lang}: ${res.totalViolations} cards with untaught example words`);
      if (res.totalViolations > 0) anyViolations = true;
      if (writePath) {
        const p = writePath.replace('<lang>', lang);
        fs.writeFileSync(p, formatMarkdown(res));
        console.log(`wrote ${p}`);
      }
    }
    console.log(summary.join('\n'));
    process.exit(anyViolations ? 1 : 0);
  }

  if (!langArg) {
    console.error('Usage: node scripts/pp63_audit.cjs <lang-dir> [--include-batch] [--write <path>]');
    console.error('   or: node scripts/pp63_audit.cjs --all [--include-batch]');
    process.exit(2);
  }
  const res = auditLang(langArg);
  if (!res) {
    console.error(`Language dir not found: ${langArg}`);
    process.exit(2);
  }
  const md = formatMarkdown(res);
  if (writePath) {
    fs.writeFileSync(writePath, md);
    console.log(`wrote ${writePath}`);
  } else {
    console.log(md);
  }
  process.exit(res.totalViolations > 0 ? 1 : 0);
}

main();
