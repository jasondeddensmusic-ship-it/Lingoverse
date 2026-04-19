const UNIT_26 = {n:26, lang:"pt", srcLang:"en", track:"v2", title:"Ciência e tecnologia", sub:"Science/Technology", icon:"🔬", level:"B2.1", color:"#7B5EE8", lessons:[

{id:"ptv2_u26l1", title:"The Scientific Mindset", icon:"🧪", xp:15, board:true, steps:[
{type:"intro", title:"Talking About Discovery",
 desc:"Science shapes modern life. B2 Portuguese requires the vocabulary to discuss research, experiments, and discoveries in newspapers and daily conversation.",
 goals:["Talk about science and research","Describe experiments and discoveries","Identify cognates and false friends"]},

{type:"teach", trg:"ciência", src:"science", pos:"noun", gender:"f",
 note:"The field of systematic knowledge. Plural 'ciências' covers all sciences together.",
 example:"A: A ciência avança todos os dias.\nB: E a tecnologia segue junto.",
 exampleSrc:"A: Science advances every day.\nB: And technology follows alongside.",
 funFact:"The Brazilian agency CNPq, founded in 1951, funds most scientific research in the country."},

{type:"teach", trg:"pesquisa", src:"research", pos:"noun", gender:"f",
 note:"Formal investigation. 'Fazer pesquisa' means to do research. Also means 'survey' in polling contexts.",
 example:"A: Essa pesquisa levou cinco anos.\nB: Vale cada minuto investido.",
 exampleSrc:"A: This research took five years.\nB: Worth every minute invested.",
 funFact:"'Pesquisa eleitoral' (electoral poll) appears constantly in Brazilian media during election years."},

{type:"teach", trg:"experiência", src:"experiment / experience", pos:"noun", gender:"f",
 note:"Means both 'experiment' (scientific) and 'experience' (personal). Context clarifies.",
 example:"A: A experiência confirmou a teoria.\nB: Resultados muito claros.",
 exampleSrc:"A: The experiment confirmed the theory.\nB: Very clear results.",
 funFact:"Portuguese uses one word for two ideas that English splits. 'Ter experiência' = to have experience; 'fazer uma experiência' = to run an experiment."},

{type:"teach", trg:"descoberta", src:"discovery", pos:"noun", gender:"f",
 note:"From the verb 'descobrir' (to discover). Common in science, history, and personal contexts.",
 example:"A: Foi uma descoberta revolucionária.\nB: Mudou nosso entendimento.",
 exampleSrc:"A: It was a revolutionary discovery.\nB: It changed our understanding.",
 funFact:"The 'Descobrimento do Brasil' in 1500 is celebrated on April 22, though the term is now debated."},

{type:"teach", trg:"invenção", src:"invention", pos:"noun", gender:"f",
 note:"Something created, not just found. Distinguish from 'descoberta' (already existed, now discovered).",
 example:"A: A invenção do telefone mudou o mundo.\nB: E o celular mudou de novo.",
 exampleSrc:"A: The invention of the telephone changed the world.\nB: And the cell phone changed it again.",
 funFact:"Santos Dumont, a Brazilian, is credited by Brazilians with inventing the airplane in 1906."},

{type:"teach", trg:"cientista", src:"scientist", pos:"noun", gender:"m",
 note:"Same form for masculine and feminine. 'O cientista' (male) or 'a cientista' (female). Article changes, word stays.",
 example:"A: A cientista ganhou um prêmio importante.\nB: Merecido, o trabalho dela é excelente.",
 exampleSrc:"A: The scientist won an important award.\nB: Deserved, her work is excellent.",
 funFact:"Nise da Silveira, a Brazilian psychiatrist and scientist, revolutionized mental health treatment in the 1940s."},

{type:"teach", trg:"teoria", src:"theory", pos:"noun", gender:"f",
 note:"A proposed explanation. In Portuguese, 'teoria' does not imply doubt. A scientific theory is solid.",
 example:"A: A teoria da evolução é bem estabelecida.\nB: Tem evidências enormes.",
 exampleSrc:"A: The theory of evolution is well established.\nB: It has enormous evidence.",
 funFact:"'Na teoria' (in theory) vs 'na prática' (in practice) is a favorite Brazilian phrase for ironic comparisons."},

{type:"tip", title:"Descoberta vs Invenção",
 text:"Two related but different nouns:\n\ndescoberta = discovery (finding what already existed)\ninvenção = invention (creating what did not exist)\n\nExamples:\n\nA descoberta da penicilina por Fleming.\n(The discovery of penicillin by Fleming.)\n\nA invenção do avião pelos irmãos Wright.\n(The invention of the airplane by the Wright brothers.)\n\nBrazilian debates: foi descoberta ou invenção do Brasil em 1500? The word choice carries political weight.",
 deepDive:{title:"Verbs Behind the Nouns",
  text:"The verbs are 'descobrir' (to uncover, un-cover) and 'inventar' (to create). Both are irregular in some tenses. Descobrir shares roots with cover/cobrir, and inventar with vindo from Latin 'invenire' (to come upon). When Brazilians argue about whether Pedro Alvares Cabral 'descobriu' Brazil, they debate whether indigenous peoples counted as having 'found' the land first."}},

{type:"mc",
 q:"Which word means 'experiment' in scientific context?",
 opts:["ciência","experiência","teoria","descoberta"],
 ans:"experiência",
 hint:"Same Portuguese word also means 'experience' in everyday life."},

{type:"mc",
 q:"What is the difference between descoberta and invenção?",
 opts:["No difference","Descoberta finds existing, invenção creates new","Invenção is older","Descoberta is modern"],
 ans:"Descoberta finds existing, invenção creates new",
 hint:"Think about what was there before versus what was made."},

{type:"fb",
 s:"A {1} provou que a teoria estava correta.",
 a:["experiência"],
 opts:["experiência","opinião","reforma","justiça"],
 hint:"A scientific procedure to test a hypothesis.",
 sSrc:"The {1} proved the theory was correct."},

{type:"fb",
 s:"A {1} dessa vacina salvou milhões de vidas.",
 a:["invenção"],
 opts:["invenção","opinião","reforma","pesquisa"],
 hint:"Creation of something new. Not the same as finding it.",
 sSrc:"The {1} of this vaccine saved millions of lives."},

{type:"match", pairs:[
 {trg:"ciência", src:"science"},
 {trg:"pesquisa", src:"research"},
 {trg:"experiência", src:"experiment"},
 {trg:"descoberta", src:"discovery"},
 {trg:"invenção", src:"invention"},
 {trg:"cientista", src:"scientist"},
 {trg:"teoria", src:"theory"}
]},

{type:"mc",
 q:"Which noun has the same form for masculine and feminine?",
 opts:["descoberta","cientista","teoria","ciência"],
 ans:"cientista",
 hint:"Only the article changes. The noun stays identical."}
]},

{id:"ptv2_u26l2", title:"Digital Technology", icon:"💻", xp:15, board:true, steps:[
{type:"intro", title:"The Digital World",
 desc:"Technology vocabulary in Portuguese mixes Latin roots and English borrowings. Learn which words are translated and which stay in English.",
 goals:["Talk about computers and software","Identify English loanwords","Describe digital life"]},

{type:"teach", trg:"tecnologia", src:"technology", pos:"noun", gender:"f",
 note:"Applied science. Often shortened to 'tec' in informal speech: 'tec de ponta' (cutting-edge tech).",
 example:"A: A tecnologia mudou tudo nas últimas décadas.\nB: Para melhor e para pior.",
 exampleSrc:"A: Technology changed everything in the last decades.\nB: For better and for worse.",
 funFact:"The Brazilian tech scene is centered in São Paulo and Florianópolis, earning the nickname 'Vale do Silício Tupiniquim'."},

{type:"teach", trg:"computador", src:"computer", pos:"noun", gender:"m",
 note:"From Latin, not English. Brazilians usually say 'computador' (desktop) or 'notebook' (laptop, borrowed from English).",
 example:"A: Meu computador está lento.\nB: Pode ser problema de memória.",
 exampleSrc:"A: My computer is slow.\nB: Could be a memory problem.",
 funFact:"Portuguese has a native word for computer, unlike many languages that use English. 'Computar' means 'to calculate'."},

{type:"teach", trg:"software", src:"software", pos:"noun", gender:"m",
 note:"Kept as English. Pronounced 'soft-wéri' in Brazilian speech. Plural 'softwares' with Portuguese -s.",
 example:"A: Preciso atualizar o software.\nB: Faz tempo que não faço isso.",
 exampleSrc:"A: I need to update the software.\nB: It's been a while since I did that.",
 funFact:"Portuguese purists tried 'programário' and 'logiciário' in the 1980s. None caught on. English won."},

{type:"teach", trg:"rede", src:"network", pos:"noun", gender:"f",
 note:"Literal meaning is 'net' or 'hammock'. In tech context, it means network or 'the internet' informally.",
 example:"A: A rede caiu de novo.\nB: Esse wi-fi é péssimo.",
 exampleSrc:"A: The network is down again.\nB: This wifi is terrible.",
 funFact:"The hammock meaning survives. 'Rede social' plays on the 'net' metaphor, not the sleeping hammock."},

{type:"teach", trg:"dados", src:"data", pos:"noun", gender:"m",
 note:"Always plural in Portuguese. 'Dados' is masculine plural. Singular 'dado' means 'die' (as in dice).",
 example:"A: Os dados mostram uma tendência clara.\nB: Números não mentem.",
 exampleSrc:"A: The data shows a clear trend.\nB: Numbers don't lie.",
 funFact:"The double meaning is useful: 'os dados foram lançados' can mean 'the data was released' OR 'the die was cast'."},

{type:"teach", trg:"algoritmo", src:"algorithm", pos:"noun", gender:"m",
 note:"A procedure or set of rules. From the Arabic mathematician al-Khwarizmi via Latin.",
 example:"A: O algoritmo do YouTube é estranho.\nB: Ele aprende o que você gosta.",
 exampleSrc:"A: The YouTube algorithm is strange.\nB: It learns what you like.",
 funFact:"The word 'algarismo' (digit, as in numbers 0-9) shares the same root. Both honor the Arab mathematician."},

{type:"teach", trg:"inteligência artificial", src:"artificial intelligence", pos:"noun", gender:"f",
 note:"Often abbreviated IA in Portuguese (not AI). Feminine because 'inteligência' is feminine.",
 example:"A: A inteligência artificial está em todo lugar.\nB: No trabalho, no celular, em tudo.",
 exampleSrc:"A: Artificial intelligence is everywhere.\nB: At work, on the phone, in everything.",
 funFact:"'IA generativa' (generative AI) entered Brazilian mainstream media in 2023 with the ChatGPT boom."},

{type:"teach", trg:"digital", src:"digital", pos:"adj", gender:null,
 note:"Adjective. Same form for masculine and feminine. 'Era digital' = digital era.",
 example:"A: Somos uma geração digital.\nB: Cresci com celular na mão.",
 exampleSrc:"A: We are a digital generation.\nB: I grew up with a phone in my hand.",
 funFact:"'Divisão digital' (digital divide) is a key phrase in Brazilian debates about inequality and access."},

{type:"tip", title:"English Loanwords in Portuguese",
 text:"Portuguese translates some tech terms and keeps others:\n\nTranslated:\ncomputador (computer)\nrede (network)\ndados (data)\n\nKept in English:\nsoftware\nhardware\nsite (site)\ne-mail\nwifi\nstreaming\nbackup\n\nHybrid:\nnotebook (laptop)\nmouse (still 'mouse' but pronounced 'máus')\n\nRule of thumb: older tech concepts got translated. Newer ones stay English.",
 deepDive:{title:"Pronunciation of Loanwords",
  text:"English loanwords keep English spelling but get Portuguese pronunciation. 'Site' becomes 'sáiti' (two syllables). 'Download' becomes 'daunlóudi'. 'Email' becomes 'imêu'. The final vowel sound in Portuguese syllables is strong, so English words always gain an extra vowel at the end. This is why 'hot dog' becomes 'hóti dógui' on Brazilian street food carts."}},

{type:"mc",
 q:"Which word is always plural in Portuguese?",
 opts:["software","rede","dados","algoritmo"],
 ans:"dados",
 hint:"The singular means 'die' (dice), not data."},

{type:"mc",
 q:"What does the abbreviation 'IA' mean in Portuguese?",
 opts:["internet activity","inteligência artificial","interação automática","informação atualizada"],
 ans:"inteligência artificial",
 hint:"Portuguese word order flips the initials from English AI."},

{type:"fb",
 s:"O {1} do aplicativo precisa de atualização.",
 a:["software"],
 opts:["software","rede","dados","computador"],
 hint:"Programs and applications. Kept as an English word.",
 sSrc:"The app's {1} needs an update."},

{type:"fb",
 s:"A {1} wifi está muito lenta hoje.",
 a:["rede"],
 opts:["rede","dados","ciência","invenção"],
 hint:"A connection infrastructure. Also means 'hammock'.",
 sSrc:"The wifi {1} is very slow today."},

{type:"match", pairs:[
 {trg:"tecnologia", src:"technology"},
 {trg:"computador", src:"computer"},
 {trg:"software", src:"software"},
 {trg:"rede", src:"network"},
 {trg:"dados", src:"data"},
 {trg:"algoritmo", src:"algorithm"},
 {trg:"digital", src:"digital"}
]},

{type:"mc",
 q:"Which is NOT an English loanword in Portuguese tech speech?",
 opts:["software","backup","rede","site"],
 ans:"rede",
 hint:"Three are kept in English, one has a native Portuguese word."},

{type:"drag_fill",
 s:"O {1} analisa os {2} para oferecer recomendações.",
 blanks:{"1":"algoritmo","2":"dados"},
 pool:["algoritmo","dados","software","rede"],
 hint:"First blank: the procedure. Second blank: the information analyzed."}
]},

{id:"ptv2_u26l3", title:"Robots and the Future", icon:"🤖", xp:15, board:true, steps:[
{type:"intro", title:"The Brave New World",
 desc:"Automation and robotics are reshaping work. Build B2 vocabulary to debate whether machines will help or hurt humanity.",
 goals:["Describe robots and automation","Discuss the future of work","Talk about innovation"]},

{type:"teach", trg:"robô", src:"robot", pos:"noun", gender:"m",
 note:"From Czech via French. Plural 'robôs' with circumflex. The accent matters in writing.",
 example:"A: Esse robô limpa a casa sozinho.\nB: Quero um desses!",
 exampleSrc:"A: This robot cleans the house by itself.\nB: I want one of those!",
 funFact:"The word 'robot' was coined in 1920 by Czech writer Karel Capek, from 'robota' meaning forced labor."},

{type:"teach", trg:"automação", src:"automation", pos:"noun", gender:"f",
 note:"The replacement of human work with machines. Often paired with 'trabalho' (work).",
 example:"A: A automação preocupa muitos trabalhadores.\nB: É um medo real.",
 exampleSrc:"A: Automation worries many workers.\nB: It's a real fear.",
 funFact:"Brazilian factories in the ABC region around São Paulo went through major automation waves in the 1990s."},

{type:"teach", trg:"inovação", src:"innovation", pos:"noun", gender:"f",
 note:"Creating something new or improving what exists. A business and tech buzzword.",
 example:"A: A inovação é o motor do progresso.\nB: Sem ela, ficamos parados.",
 exampleSrc:"A: Innovation is the engine of progress.\nB: Without it, we stand still.",
 funFact:"'Hub de inovação' (innovation hub) became a common phrase in Brazilian business speak in the 2010s."},

{type:"teach", trg:"desenvolver", src:"to develop", pos:"verb", gender:null,
 note:"Regular -er verb. Used for developing software, products, ideas, or countries.",
 example:"A: Nossa empresa vai desenvolver um novo aplicativo.\nB: Parabéns pelo projeto!",
 exampleSrc:"A: Our company is going to develop a new app.\nB: Congratulations on the project!",
 funFact:"'Desenvolvedor' (developer) is the Portuguese job title, though 'dev' is common in tech slang."},

{type:"teach", trg:"programa", src:"program", pos:"noun", gender:"m",
 note:"Masculine despite ending in -a. Also means TV program or scheduled plan.",
 example:"A: Esse programa funciona em qualquer sistema.\nB: Ótimo, posso testar.",
 exampleSrc:"A: This program works on any system.\nB: Great, I can test it.",
 funFact:"'Programa' is one of a small group of masculine nouns ending in -a (like 'problema' and 'sistema'). All come from Greek."},

{type:"teach", trg:"máquina", src:"machine", pos:"noun", gender:"f",
 note:"Any mechanical device. 'Máquina de lavar' = washing machine. Feminine noun.",
 example:"A: Essa máquina substitui dez trabalhadores.\nB: É bom para a empresa, difícil para eles.",
 exampleSrc:"A: This machine replaces ten workers.\nB: Good for the company, hard for them.",
 funFact:"'À máquina' means 'by machine' (manufactured), while 'à mão' means 'by hand'. Both describe how something was made."},

{type:"teach", trg:"futuro", src:"future", pos:"noun", gender:"m",
 note:"Masculine noun. Also an adjective: 'o futuro presidente' = the future president.",
 example:"A: O futuro do trabalho está mudando rápido.\nB: Temos que nos adaptar.",
 exampleSrc:"A: The future of work is changing fast.\nB: We have to adapt.",
 funFact:"'No futuro' means 'in the future', but 'tem futuro' (has future) means 'has prospects' or 'looks promising'."},

{type:"tip", title:"Masculine Nouns Ending in -a",
 text:"Most Portuguese nouns ending in -a are feminine, but a few from Greek are masculine:\n\no programa (the program)\no problema (the problem)\no sistema (the system)\no tema (the theme)\no mapa (the map)\no dia (the day)\no poema (the poem)\no clima (the climate)\n\nThese all come from Greek and kept their masculine gender through Latin. Memorize them as exceptions. Articles matter: 'o programa', never 'a programa'.",
 deepDive:{title:"Why the Exceptions Exist",
  text:"Greek had a class of masculine nouns ending in -ma. When Portuguese borrowed them via Latin, the gender came along. 'Problema' looks feminine to Spanish and Italian speakers too, and they make the same mistake. The trick: if the noun ends in -ma and sounds technical (program, system, theme, climate), it's probably masculine. Everyday -a nouns like 'casa', 'mesa', 'porta' follow the standard feminine rule."}},

{type:"mc",
 q:"Which of these is masculine?",
 opts:["casa","máquina","programa","ciência"],
 ans:"programa",
 hint:"Greek-origin noun ending in -ma. Exception to the rule."},

{type:"mc",
 q:"What does 'desenvolver' mean?",
 opts:["to destroy","to develop","to download","to delete"],
 ans:"to develop",
 hint:"Used for building software, products, or ideas."},

{type:"fb",
 s:"A {1} pode eliminar muitos empregos repetitivos.",
 a:["automação"],
 opts:["automação","inovação","descoberta","teoria"],
 hint:"Replacing human work with machines.",
 sSrc:"{1} can eliminate many repetitive jobs."},

{type:"fb",
 s:"Esse {1} de computador é bem avançado.",
 a:["programa"],
 opts:["programa","máquina","futuro","dado"],
 hint:"Software. A masculine Greek-origin noun.",
 sSrc:"This computer {1} is quite advanced."},

{type:"match", pairs:[
 {trg:"robô", src:"robot"},
 {trg:"automação", src:"automation"},
 {trg:"inovação", src:"innovation"},
 {trg:"desenvolver", src:"to develop"},
 {trg:"programa", src:"program"},
 {trg:"máquina", src:"machine"},
 {trg:"futuro", src:"future"}
]},

{type:"mc",
 q:"Which preposition pattern is correct?",
 opts:["o futuro do trabalho","o futuro de o trabalho","o futuro para trabalho","o futuro em trabalho"],
 ans:"o futuro do trabalho",
 hint:"Remember 'de + o' contracts to 'do' in Portuguese."},

{type:"drag_fill",
 s:"A {1} de novas {2} transforma o mercado de trabalho.",
 blanks:{"1":"inovação","2":"tecnologia"},
 pool:["inovação","tecnologia","automação","ciência"],
 hint:"First blank: creating something new. Second blank: applied science tools."}
]}

]}; export default UNIT_26;
