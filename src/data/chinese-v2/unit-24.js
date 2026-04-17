// Unit 24: Art and Literature
// Level: B1.2 (HSK 3-4)
// Chinese (Mandarin) V2 format with hanzi+pinyin notation
// Vocab: 艺术, 画, 诗, 小说, 作者, 故事, 表演, 电视剧, 歌曲, 创作, 欣赏, 美, 感动, 想象, 表达

const UNIT_24 = {
n:24, lang:"zh", srcLang:"en", track:"v2",
title:"中国艺术 Chinese Art", sub:"Creative Culture",
icon:"🎨", level:"B1.2", color:"#7B5EE8",
lessons:[

// ─── L1: Visual and Literary Arts ───
{id:"zhv2_u24l1", title:"书画诗词 Calligraphy, Painting, Poetry", icon:"🖌️", xp:15, board:true, steps:[
{type:"intro", title:"书画诗词 Calligraphy, Painting, Poetry",
 desc:"Learn vocabulary for Chinese visual and literary arts. Painting, poetry, and novels form the core of Chinese artistic tradition. These words open the door to discussing one of the world's oldest and richest creative cultures.",
 goals:["Talk about painting and poetry with 画, 诗, and 美","Discuss novels and authors with 小说 and 作者","Describe stories and creativity with 故事 and 创作"]},

{type:"tip", title:"The Four Arts of China",
 text:"Traditional Chinese culture values four essential arts called 琴棋书画(qín qí shū huà):\n\n琴(qín) = the guqin, a seven-stringed zither\n棋(qí) = strategy board games (Go and chess)\n书(shū) = calligraphy\n画(huà) = painting\n\nMastering these four arts was the mark of an educated person. Calligraphy and painting are closely related: both use the same brush, ink, and paper. Chinese painting emphasizes empty space and suggestion over realistic detail.",
 deepDive:{title:"Chinese Calligraphy: Writing as Art",
  text:"Chinese calligraphy (书法, shūfǎ) is considered the highest visual art form. The same brush used for writing characters becomes a tool for artistic expression.\n\nFive major scripts exist: seal script, clerical script, regular script, running script, and cursive script. Each has a different aesthetic.\n\nCalligraphy is still widely practiced today. Children learn it in school, and adults practice it for relaxation and meditation. In parks across China, you can see elderly people writing characters on the ground with large water brushes, creating beautiful temporary art that evaporates in the sun."}},

{type:"teach", trg:"艺术(yìshù)", src:"art", pos:"noun", gender:null,
 note:"Skill/craft + technique. Creative expression in all forms.\n艺术家 = artist. 艺术品 = artwork. 现代艺术 = modern art.",
 example:"A: 你(nǐ)对(duì)中国(Zhōngguó)艺术(yìshù)感兴趣(gǎnxìngqù)吗(ma)？\nB: 非常(fēicháng)感兴趣(gǎnxìngqù)，特别(tèbié)是(shì)书法(shūfǎ)。",
 exampleSrc:"A: Are you interested in Chinese art?\nB: Very interested, especially calligraphy.",
 funFact:"艺 originally meant planting and cultivating. Art, like a garden, requires patient cultivation. The shift from agriculture to aesthetics reflects how Chinese civilization connected creativity with natural growth. An artist (艺术家) is literally a 'specialist in cultivated technique.'"},

{type:"teach", trg:"画(huà)", src:"to paint / painting", pos:"verb", gender:null,
 note:"Both a verb (to paint/draw) and a noun (painting/picture).\n画家 = painter. 画展 = art exhibition. 油画 = oil painting.",
 example:"A: 这幅(zhèfú)画(huà)是(shì)谁(shéi)画(huà)的(de)？\nB: 是(shì)一个(yígè)很(hěn)有名(yǒumíng)的(de)画家(huàjiā)画(huà)的(de)。",
 exampleSrc:"A: Who painted this painting?\nB: A very famous painter painted it.",
 funFact:"画 is both verb and noun, so 画画 (huà huà) means 'to draw a drawing' or 'to paint a painting.' Chinese painting (国画, guóhuà) uses ink and watercolor on rice paper or silk. Unlike Western painting, which fills the entire canvas, Chinese painting deliberately leaves empty space (留白, liúbái) to let the viewer's imagination complete the picture."},

{type:"teach", trg:"诗(shī)", src:"poem / poetry", pos:"noun", gender:null,
 note:"Words + temple. Sacred words arranged with care.\n古诗 = classical poetry. 诗人 = poet. 诗歌 = poetry (general).",
 example:"A: 你(nǐ)最(zuì)喜欢(xǐhuan)哪(nǎ)首(shǒu)中国(Zhōngguó)古诗(gǔshī)？\nB: 我(wǒ)最(zuì)喜欢(xǐhuan)李白(Lǐ Bái)的(de)诗(shī)。",
 exampleSrc:"A: Which classical Chinese poem do you like most?\nB: I like Li Bai's poems the most.",
 funFact:"Poetry holds a special place in Chinese culture. The Tang Dynasty (618-907) is considered the golden age of Chinese poetry. Li Bai and Du Fu are the two most famous poets. Every Chinese student memorizes dozens of classical poems. The tradition of poetry at banquets and gatherings continues to this day."},

{type:"teach", trg:"小说(xiǎoshuō)", src:"novel / fiction", pos:"noun", gender:null,
 note:"Small + talk. Originally meant 'minor tales' versus serious history.\n长篇小说 = full-length novel. 科幻小说 = science fiction.",
 example:"A: 你(nǐ)最近(zuìjìn)在(zài)看(kàn)什么(shénme)小说(xiǎoshuō)？\nB: 我(wǒ)在(zài)看(kàn)一(yī)本(běn)中国(Zhōngguó)科幻(kēhuàn)小说(xiǎoshuō)。",
 exampleSrc:"A: What novel are you reading lately?\nB: I am reading a Chinese science fiction novel.",
 funFact:"小说 literally means 'small talk,' because novels were originally considered a lesser literary form compared to poetry and history. The Four Great Classical Novels of Chinese literature (四大名著) include Journey to the West and Romance of the Three Kingdoms. Today, Chinese web novels (网络小说) are a global phenomenon, translated into dozens of languages."},

{type:"teach", trg:"作者(zuòzhě)", src:"author / writer", pos:"noun", gender:null,
 note:"Make/create + person who. The one who creates a work.\n原作者 = original author. 作者简介 = author bio.",
 example:"A: 这本(zhèběn)小说(xiǎoshuō)的(de)作者(zuòzhě)是(shì)谁(shéi)？\nB: 作者(zuòzhě)是(shì)刘慈欣(Liú Cíxīn)。",
 exampleSrc:"A: Who is the author of this novel?\nB: The author is Liu Cixin.",
 funFact:"作 means to make or create, and 者 is a suffix meaning 'the person who does something.' So 作者 is 'the one who creates.' The suffix 者 appears in many professional titles: 记者 (journalist), 学者 (scholar), 读者 (reader). Liu Cixin's Three-Body Problem became the first Chinese novel to win the Hugo Award."},

{type:"teach", trg:"故事(gùshi)", src:"story / tale", pos:"noun", gender:null,
 note:"Old/past + matter. A narrative about events.\n讲故事 = to tell a story. 故事书 = storybook.",
 example:"A: 奶奶(nǎinai)给(gěi)我(wǒ)讲(jiǎng)了(le)一个(yígè)故事(gùshi)。\nB: 什么(shénme)故事(gùshi)？\nA: 一个(yígè)关于(guānyú)龙(lóng)的(de)故事(gùshi)。",
 exampleSrc:"A: Grandma told me a story.\nB: What story?\nA: A story about a dragon.",
 funFact:"故 means old or past, and 事 means matter or affair. A story is literally 'matters from the past.' Chinese storytelling tradition includes both written literature and oral performance. 说书(shuōshū), professional storytelling, was once a major form of entertainment in teahouses across China."},

{type:"mc", q:"画(huà) can function as:",
 opts:["Both a verb (to paint) and a noun (painting)","Only a verb","Only a noun","Only an adjective"],
 ans:"Both a verb (to paint) and a noun (painting)",
 hint:"This character does double duty. 画画 means 'to draw a drawing,' using the same character as both ___ and object."},

{type:"match", pairs:[
  {trg:"艺术(yìshù)", src:"art"},
  {trg:"画(huà)", src:"to paint / painting"},
  {trg:"诗(shī)", src:"poem / poetry"},
  {trg:"小说(xiǎoshuō)", src:"novel"},
  {trg:"作者(zuòzhě)", src:"author"},
  {trg:"故事(gùshi)", src:"story"}
]},

{type:"fb", s:"这本(zhèběn)小说(xiǎoshuō)的(de){1}是(shì)一个(yígè)很(hěn)有名(yǒumíng)的(de)中国(Zhōngguó)作家(zuòjiā)。",
 a:["作者(zuòzhě)"],
 opts:["作者(zuòzhě)","故事(gùshi)","诗(shī)","艺术(yìshù)"],
 hint:"This word means the person who created a written work. It combines 'create' with a suffix meaning 'the one who.'",
 sSrc:"The {1} of this novel is a very famous Chinese writer."},

{type:"mc", q:"小说(xiǎoshuō) literally means:",
 opts:["Small talk","Big story","written record","poetry collection"],
 ans:"Small talk",
 hint:"小 means small, and 说 means talk. Novels were originally considered 'minor tales' compared to serious poetry and history."},

{type:"fb", s:"奶奶(nǎinai)给(gěi)孩子们(háizimen)讲(jiǎng)了(le)一个(yígè){1}。",
 a:["故事(gùshi)"],
 opts:["故事(gùshi)","小说(xiǎoshuō)","诗(shī)","画(huà)"],
 hint:"This word means a narrative or tale. Grandma told the children something about events from the past.",
 sSrc:"Grandma told the children a {1}."},

{type:"fb", s:"我(wǒ)最(zuì)喜欢(xǐhuan)李白(Lǐ Bái)的(de){1}。",
 a:["诗(shī)"],
 opts:["诗(shī)","小说(xiǎoshuō)","画(huà)","故事(gùshi)"],
 hint:"Li Bai is China's most famous literary figure from the Tang Dynasty. He wrote beautiful verse.",
 sSrc:"I like Li Bai's {1} the most."}
]},

// ─── L2: Performance and Entertainment ───
{id:"zhv2_u24l2", title:"演出和娱乐 Shows and Entertainment", icon:"🎭", xp:15, board:true, steps:[
{type:"intro", title:"演出和娱乐 Shows and Entertainment",
 desc:"Learn vocabulary for performances, TV dramas, songs, and creative works. Chinese entertainment is a global force, and these words help you discuss everything from traditional opera to modern TV shows.",
 goals:["Discuss performances and TV with 表演 and 电视剧","Talk about songs and creation with 歌曲 and 创作","Express appreciation and beauty with 欣赏 and 美"]},

{type:"teach", trg:"表演(biǎoyǎn)", src:"performance / to perform", pos:"noun", gender:null,
 note:"Express + play. Both a noun and a verb.\n表演者 = performer. 表演艺术 = performing arts.",
 example:"A: 昨天(zuótiān)的(de)表演(biǎoyǎn)怎么样(zěnmeyàng)？\nB: 非常(fēicháng)精彩(jīngcǎi)，演员(yǎnyuán)都(dōu)很(hěn)专业(zhuānyè)。",
 exampleSrc:"A: How was yesterday's performance?\nB: Extremely wonderful, the actors were all very professional.",
 funFact:"表 means to express or show outward, and 演 means to play or act. A performance is 'expressing through play.' Chinese performing arts include Beijing Opera (京剧, Jīngjù), acrobatics, martial arts demonstrations, and modern theater. Beijing Opera combines singing, acting, martial arts, and dance into one art form."},

{type:"teach", trg:"电视剧(diànshìjù)", src:"TV drama / TV series", pos:"noun", gender:null,
 note:"Electric + vision + drama. Television dramas are hugely popular.\nShorter dramas are 电视剧, movies are 电影.",
 example:"A: 你(nǐ)最近(zuìjìn)在(zài)看(kàn)什么(shénme)电视剧(diànshìjù)？\nB: 我(wǒ)在(zài)看(kàn)一(yī)部(bù)古装(gǔzhuāng)电视剧(diànshìjù)。",
 exampleSrc:"A: What TV drama are you watching lately?\nB: I am watching a historical costume drama.",
 funFact:"Chinese TV dramas are a cultural phenomenon. Historical dramas (古装剧) set in imperial China are especially popular. They bring ancient literature, palace intrigue, and martial arts to life. Chinese dramas have gained massive international audiences, with platforms like iQIYI and Youku streaming to millions of viewers worldwide."},

{type:"teach", trg:"歌曲(gēqǔ)", src:"song", pos:"noun", gender:null,
 note:"Song/sing + tune. A musical composition with lyrics.\n流行歌曲 = pop song. 民歌 = folk song.",
 example:"A: 这首(zhèshǒu)歌曲(gēqǔ)很(hěn)好听(hǎotīng)。\nB: 是(shì)啊(a)，我(wǒ)已经(yǐjīng)听(tīng)了(le)很多(hěnduō)遍(biàn)了(le)。",
 exampleSrc:"A: This song sounds really nice.\nB: Yes, I have already listened to it many times.",
 funFact:"歌 means to sing or song, and 曲 means tune or melody. Chinese music ranges from ancient court music to Cantonese opera to modern C-pop. The guzheng (古筝), erhu (二胡), and pipa (琵琶) are iconic traditional instruments. Modern Chinese pop music (C-pop) has a massive following across East and Southeast Asia."},

{type:"teach", trg:"创作(chuàngzuò)", src:"to create / creative work", pos:"verb", gender:null,
 note:"Begin/initiate + make. The act of original artistic creation.\n文学创作 = literary creation. 音乐创作 = music composition.",
 example:"A: 他(tā)一直(yīzhí)在(zài)创作(chuàngzuò)新(xīn)的(de)歌曲(gēqǔ)。\nB: 他(tā)真(zhēn)是(shì)一个(yígè)很(hěn)有(yǒu)才华(cáihuá)的(de)人(rén)。",
 exampleSrc:"A: He has been constantly creating new songs.\nB: He really is a very talented person.",
 funFact:"创 means to begin or initiate (it originally meant to wound, as creation requires breaking through barriers). 作 means to make. Together, 创作 captures the idea that artistic creation involves both originality and craft. The distinction from 制作 (to produce/manufacture) is important: 创作 implies original inspiration."},

{type:"teach", trg:"欣赏(xīnshǎng)", src:"to appreciate / to enjoy", pos:"verb", gender:null,
 note:"Joy + reward. To take pleasure in something of quality.\n欣赏音乐 = appreciate music. 欣赏风景 = enjoy scenery.",
 example:"A: 周末(zhōumò)你(nǐ)喜欢(xǐhuan)做(zuò)什么(shénme)？\nB: 我(wǒ)喜欢(xǐhuan)去(qù)美术馆(měishùguǎn)欣赏(xīnshǎng)画(huà)。",
 exampleSrc:"A: What do you like to do on weekends?\nB: I like to go to art galleries to appreciate paintings.",
 funFact:"欣 means joy or delight, and 赏 means to reward or bestow. To appreciate art is to find joy as if receiving a gift. 赏 was also used for a superior giving a reward to an inferior, so 欣赏 elevates the artwork, implying it deserves to be rewarded with your attention and joy."},

{type:"teach", trg:"美(měi)", src:"beautiful / beauty", pos:"adj", gender:null,
 note:"One of the most common adjectives in Chinese.\n美丽 = beautiful (formal). 美好 = wonderful. 美术 = fine arts.",
 example:"A: 中国(Zhōngguó)的(de)山水(shānshuǐ)画(huà)真(zhēn)美(měi)。\nB: 是(shì)的(de)，每(měi)幅(fú)画(huà)都(dōu)像(xiàng)一首(yīshǒu)诗(shī)。",
 exampleSrc:"A: Chinese landscape paintings are truly beautiful.\nB: Yes, each painting is like a poem.",
 funFact:"美 combines 羊 (sheep) and 大 (big). In ancient China, a big, fat sheep was considered beautiful because it meant abundance and prosperity. The idea of beauty evolved from material abundance to aesthetic appreciation. 美 appears in 美食 (delicious food), 美国 (America, literally 'beautiful country'), and 美德 (virtue)."},

{type:"mc", q:"这首(zhèshǒu)歌曲(gēqǔ)很(hěn)好听(hǎotīng)。 What is being praised?",
 opts:["A song sounds nice","A painting looks nice","A story is interesting","A performance is exciting"],
 ans:"A song sounds nice",
 hint:"歌曲 means ___, and 好听 literally means 'good to listen to.' The sentence praises a piece of music."},

{type:"match", pairs:[
  {trg:"表演(biǎoyǎn)", src:"performance"},
  {trg:"电视剧(diànshìjù)", src:"TV drama"},
  {trg:"歌曲(gēqǔ)", src:"song"},
  {trg:"创作(chuàngzuò)", src:"to create"},
  {trg:"欣赏(xīnshǎng)", src:"to appreciate"},
  {trg:"美(měi)", src:"beautiful"}
]},

{type:"fb", s:"我(wǒ)喜欢(xǐhuan)去(qù)美术馆(měishùguǎn){1}中国(Zhōngguó)画(huà)。",
 a:["欣赏(xīnshǎng)"],
 opts:["欣赏(xīnshǎng)","创作(chuàngzuò)","表演(biǎoyǎn)","表达(biǎodá)"],
 hint:"This verb means to take pleasure in something of high quality. It combines 'joy' and 'reward.'",
 sSrc:"I like going to art galleries to {1} Chinese paintings."},

{type:"mc", q:"美(měi) originally combined the characters for:",
 opts:["Sheep and big","Sun and moon","Heart and eye","Mountain and water"],
 ans:"Sheep and big",
 hint:"In ancient China, a large, healthy ___ represented abundance and was considered an ideal of beauty."},

{type:"fb", s:"她(tā)一直(yīzhí)在(zài){1}新(xīn)的(de)歌曲(gēqǔ)。",
 a:["创作(chuàngzuò)"],
 opts:["创作(chuàngzuò)","欣赏(xīnshǎng)","表演(biǎoyǎn)","歌曲(gēqǔ)"],
 hint:"This verb means to produce original artistic work. It implies both inspiration and craft.",
 sSrc:"She has been constantly {1} new songs."},

{type:"fb", s:"我(wǒ)最近(zuìjìn)在(zài)看(kàn)一(yī)部(bù)很(hěn)好看(hǎokàn)的(de){1}。",
 a:["电视剧(diànshìjù)"],
 opts:["电视剧(diànshìjù)","歌曲(gēqǔ)","表演(biǎoyǎn)","诗(shī)"],
 hint:"This three-character word refers to a serialized drama you watch on a screen at home.",
 sSrc:"I have been watching a really good {1} lately."}
]},

// ─── L3: Emotions in Art ───
{id:"zhv2_u24l3", title:"艺术与情感 Art and Emotions", icon:"💫", xp:15, board:true, steps:[
{type:"intro", title:"艺术与情感 Art and Emotions",
 desc:"Learn to talk about how art moves people emotionally. Discuss being moved, using imagination, and expressing feelings through creative works.",
 goals:["Describe emotional responses with 感动 and 想象","Express how art communicates with 表达","Connect emotion vocabulary to art and performance"]},

{type:"teach", trg:"感动(gǎndòng)", src:"to be moved / touching", pos:"verb", gender:null,
 note:"Feel + move. To be emotionally stirred.\n很感动 = very moved. 感动人心 = touching/heartwarming.",
 example:"A: 这个(zhège)故事(gùshi)让(ràng)我(wǒ)很(hěn)感动(gǎndòng)。\nB: 我(wǒ)也(yě)是(shì)，看(kàn)的(de)时候(shíhou)差点(chàdiǎn)哭(kū)了(le)。",
 exampleSrc:"A: This story really moved me.\nB: Me too, I almost cried while reading it.",
 funFact:"感 means to feel or sense, and 动 means to move. Being moved is literally 'feelings being set in motion.' Chinese literature and film often aim for 感动 as a primary aesthetic goal. The concept connects to the ancient literary ideal of 以情动人 (moving people through emotion)."},

{type:"teach", trg:"想象(xiǎngxiàng)", src:"imagination / to imagine", pos:"noun", gender:null,
 note:"Think + image/elephant. To form mental pictures.\n想象力 = imaginative power. 无法想象 = unimaginable.",
 example:"A: 这个(zhège)作者(zuòzhě)的(de)想象力(xiǎngxiànglì)很(hěn)丰富(fēngfù)。\nB: 对(duì)，他(tā)创作(chuàngzuò)的(de)世界(shìjiè)非常(fēicháng)独特(dútè)。",
 exampleSrc:"A: This author's imagination is very rich.\nB: Yes, the world he creates is very unique.",
 funFact:"想 means to think, and 象 means image or elephant. Imagination is 'thinking in images.' The character 象 keeps appearing in abstract concepts (现象, 想象) because elephants, as the largest animal ancient Chinese could see, became a metaphor for anything that takes shape or form in the mind."},

{type:"teach", trg:"表达(biǎodá)", src:"to express / expression", pos:"verb", gender:null,
 note:"Express + reach/arrive. To convey meaning to others.\n表达能力 = ability to express. 表达感情 = express feelings.",
 example:"A: 艺术(yìshù)是(shì)表达(biǎodá)感情(gǎnqíng)的(de)一种(yīzhǒng)方式(fāngshì)。\nB: 没错(méicuò)，有时候(yǒushíhou)画(huà)比(bǐ)话(huà)更(gèng)有力(yǒulì)。",
 exampleSrc:"A: Art is one way of expressing emotions.\nB: Exactly, sometimes a painting is more powerful than words.",
 funFact:"表 means to show or display outward, and 达 means to reach or arrive at. Expression is 'showing something so it reaches the other person.' Chinese culture sometimes values indirect expression (含蓄, hánxù) over directness, especially in art and literature. A painting or poem that suggests rather than states is considered more elegant."},

{type:"mc", q:"这个(zhège)故事(gùshi)让(ràng)我(wǒ)很(hěn)感动(gǎndòng)。 The speaker was:",
 opts:["Emotionally moved by the story","Bored by the story","Confused by the story","Angry about the story"],
 ans:"Emotionally moved by the story",
 hint:"感动 means to be ___ stirred or touched. 让我很感动 means 'it made me very ___.'"},

{type:"match", pairs:[
  {trg:"感动(gǎndòng)", src:"to be moved"},
  {trg:"想象(xiǎngxiàng)", src:"imagination"},
  {trg:"表达(biǎodá)", src:"to express"},
  {trg:"美(měi)", src:"beautiful"},
  {trg:"创作(chuàngzuò)", src:"to create"}
]},

{type:"fb", s:"艺术(yìshù)是(shì){1}感情(gǎnqíng)的(de)一种(yīzhǒng)方式(fāngshì)。",
 a:["表达(biǎodá)"],
 opts:["表达(biǎodá)","感动(gǎndòng)","想象(xiǎngxiàng)","欣赏(xīnshǎng)"],
 hint:"This verb means to convey meaning or feelings to others. Art is a way of doing this.",
 sSrc:"Art is one way of {1} emotions."},

{type:"mc", q:"想象(xiǎngxiàng) contains 象(xiàng). Why does an 'elephant' appear in the word for 'imagination'?",
 opts:["Elephants became a metaphor for things that take form or shape","Elephants are very imaginative animals","The character was chosen at random","Elephants appear in many Chinese stories"],
 ans:"Elephants became a metaphor for things that take form or shape",
 hint:"As the largest visible animal in ancient China, the elephant ___ associated with ___, image, and appearance."},

{type:"fb", s:"这个(zhège)作者(zuòzhě)的(de){1}力(lì)很(hěn)丰富(fēngfù)。",
 a:["想象(xiǎngxiàng)"],
 opts:["想象(xiǎngxiàng)","表达(biǎodá)","感动(gǎndòng)","创作(chuàngzuò)"],
 hint:"This word means the ability to form mental pictures. Adding 力 makes it 'the power of mental imagery.'",
 sSrc:"This author's {1} is very rich."},

{type:"fb", s:"这部(zhèbù)电视剧(diànshìjù)让(ràng)很多(hěnduō)人(rén)都(dōu)很(hěn){1}。",
 a:["感动(gǎndòng)"],
 opts:["感动(gǎndòng)","表达(biǎodá)","想象(xiǎngxiàng)","欣赏(xīnshǎng)"],
 hint:"This word means to be emotionally stirred or touched. The TV drama moved many viewers.",
 sSrc:"This TV drama made many people very {1}."},

{type:"mc", q:"Chinese culture values 含蓄(hánxù) in artistic expression. This means:",
 opts:["Indirect and suggestive rather than direct","Loud and colorful","Simple and plain","Fast and energetic"],
 ans:"Indirect and suggestive rather than direct",
 hint:"This aesthetic principle prefers suggestion over statement. A painting that leaves space for the viewer is considered more elegant."}
]},

// ─── L4: Unit 24 Review ───
{id:"zhv2_u24l4", title:"艺术复习 Art Review", icon:"🔄", xp:15, board:true, steps:[
{type:"intro", title:"艺术复习 Art Review",
 desc:"Review all art and literature vocabulary from this unit. Test your knowledge of Chinese visual arts, literary traditions, performances, and emotional responses to creative works.",
 goals:["Review all 15 art and literature words","Connect art forms to emotional expression","Discuss Chinese creative culture with confidence"]},

{type:"match", pairs:[
  {trg:"艺术(yìshù)", src:"art"},
  {trg:"小说(xiǎoshuō)", src:"novel"},
  {trg:"表演(biǎoyǎn)", src:"performance"},
  {trg:"感动(gǎndòng)", src:"to be moved"},
  {trg:"表达(biǎodá)", src:"to express"}
]},

{type:"mc", q:"中国(Zhōngguó)的(de)山水(shānshuǐ)画(huà)真(zhēn)美(měi)。 What is being praised?",
 opts:["Chinese landscape paintings","Chinese poetry","Chinese music","Chinese calligraphy"],
 ans:"Chinese landscape paintings",
 hint:"山水 means 'mountain and water,' which is the term for ___. 画 means painting. The sentence praises their beauty."},

{type:"fb", s:"她(tā)是(shì)这本(zhèběn)书(shū)的(de){1}。",
 a:["作者(zuòzhě)"],
 opts:["作者(zuòzhě)","故事(gùshi)","诗(shī)","艺术(yìshù)"],
 hint:"This word means the person who wrote or created a work. It combines 'create' and 'person who.'",
 sSrc:"She is the {1} of this book."},

{type:"mc", q:"创作(chuàngzuò) differs from 制作(zhìzuò) because:",
 opts:["创作 implies original artistic inspiration","创作 means mechanical production","They are exactly the same","创作 is only for music"],
 ans:"创作 implies original artistic inspiration",
 hint:"创 means to initiate or begin something new. This word is about ___ creation, not manufacturing."},

{type:"fb", s:"这首(zhèshǒu){1}的(de)旋律(xuánlǜ)很(hěn)好听(hǎotīng)。",
 a:["歌曲(gēqǔ)"],
 opts:["歌曲(gēqǔ)","电视剧(diànshìjù)","诗(shī)","故事(gùshi)"],
 hint:"This word means a musical composition with lyrics and melody. 旋律 (melody) and 好听 (nice to hear) are clues.",
 sSrc:"The melody of this {1} sounds really nice."},

{type:"match", pairs:[
  {trg:"画(huà)", src:"to paint / painting"},
  {trg:"诗(shī)", src:"poem"},
  {trg:"歌曲(gēqǔ)", src:"song"},
  {trg:"欣赏(xīnshǎng)", src:"to appreciate"},
  {trg:"想象(xiǎngxiàng)", src:"imagination"}
]},

{type:"fb", s:"他(tā)用(yòng)音乐(yīnyuè)来(lái){1}自己(zìjǐ)的(de)感情(gǎnqíng)。",
 a:["表达(biǎodá)"],
 opts:["表达(biǎodá)","感动(gǎndòng)","欣赏(xīnshǎng)","创作(chuàngzuò)"],
 hint:"This verb means to convey meaning or feelings so they reach others. He uses music for this purpose.",
 sSrc:"He uses music to {1} his emotions."},

{type:"mc", q:"故事(gùshi) literally means:",
 opts:["Matters from the past","New events","Made-up tales","Famous people"],
 ans:"Matters from the past",
 hint:"故 means old or past, and 事 means matter or affair. A story is about things that happened before."},

{type:"drag_fill",
 s:"这个(zhège){1}很(hěn)有(yǒu){2}力(lì)，他(tā)的(de){3}总是(zǒngshì)让(ràng)人(rén)非常(fēicháng){4}。",
 blanks:{"1":"作者(zuòzhě)","2":"想象(xiǎngxiàng)","3":"故事(gùshi)","4":"感动(gǎndòng)"},
 pool:["作者(zuòzhě)","想象(xiǎngxiàng)","故事(gùshi)","感动(gǎndòng)"],
 hint:"This author has rich imagination. His stories always make people very moved."},

{type:"mc", q:"昨天(zuótiān)的(de)表演(biǎoyǎn)非常(fēicháng)精彩(jīngcǎi)。 What was wonderful?",
 opts:["Yesterday's performance","Yesterday's meal","Yesterday's weather","Yesterday's news"],
 ans:"Yesterday's performance",
 hint:"表演 means a live show or ___. 精彩 means wonderful or spectacular. The sentence praises a show."}
]}

]};

export default UNIT_24;
