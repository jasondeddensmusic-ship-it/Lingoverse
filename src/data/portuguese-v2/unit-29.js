const UNIT_29 = {n:29, lang:"pt", srcLang:"en", track:"v2", title:"Nas notícias", sub:"News and Media", icon:"📰", level:"B2.1", color:"#7B5EE8", lessons:[

{id:"ptv2_u29l1", title:"Reading the News", icon:"📃", xp:15, board:true, steps:[
{type:"intro", title:"The Media Landscape",
 desc:"News shapes how we see the world. B2 Portuguese needs the vocabulary to read a newspaper, watch the news, and discuss what you learned.",
 goals:["Talk about newspapers and media","Identify news sources","Build media literacy vocabulary"]},

{type:"teach", trg:"notícia", src:"news item", pos:"noun", gender:"f",
 note:"A single news story. Plural 'notícias' refers to news in general.",
 example:"A: Você leu a notícia de hoje?\nB: Ainda não, o que houve?",
 exampleSrc:"A: Did you read today's news?\nB: Not yet, what happened?",
 funFact:"Brazilian TV news anchors start with 'Boa noite' (good evening) as their trademark, regardless of broadcast time."},

{type:"teach", trg:"jornal", src:"newspaper", pos:"noun", gender:"m",
 note:"Printed newspaper or a TV news program. 'Jornal Nacional' is Brazil's most-watched evening news show.",
 example:"A: Meu avô ainda lê jornal de papel.\nB: Uma tradição linda.",
 exampleSrc:"A: My grandfather still reads the print newspaper.\nB: A beautiful tradition.",
 funFact:"Folha de São Paulo and O Estado de São Paulo are Brazil's oldest continuously published daily newspapers."},

{type:"teach", trg:"mídia", src:"media", pos:"noun", gender:"f",
 note:"The collective term for news outlets. 'Mídia tradicional' = traditional media. 'Nova mídia' = new media.",
 example:"A: A mídia está cobrindo tudo.\nB: Cada canal com uma visão diferente.",
 exampleSrc:"A: The media is covering everything.\nB: Each channel with a different view.",
 funFact:"Brazilians pronounce 'mídia' with stress on the first syllable, not 'media' like in Spanish or English."},

{type:"teach", trg:"imprensa", src:"press (journalism)", pos:"noun", gender:"f",
 note:"Journalism as an institution. 'Liberdade de imprensa' = freedom of the press.",
 example:"A: A imprensa tem um papel importante.\nB: É o quarto poder.",
 exampleSrc:"A: The press plays an important role.\nB: It's the fourth power.",
 funFact:"Brazil's National Day of the Press, April 22, commemorates the first Brazilian newspaper from 1808."},

{type:"teach", trg:"televisão", src:"television", pos:"noun", gender:"f",
 note:"Often abbreviated 'TV' (pronounced 'tê-vê'). 'Ver televisão' = to watch TV.",
 example:"A: A televisão ainda é muito forte no Brasil.\nB: Principalmente entre os mais velhos.",
 exampleSrc:"A: Television is still very strong in Brazil.\nB: Especially among older people.",
 funFact:"Brazil's Rede Globo was once the world's second-largest broadcaster after the US networks."},

{type:"teach", trg:"jornalista", src:"journalist", pos:"noun", gender:"m",
 note:"Same form masculine and feminine. 'O jornalista' or 'a jornalista'.",
 example:"A: A jornalista fez uma ótima reportagem.\nB: Trabalho de investigação sério.",
 exampleSrc:"A: The journalist did a great report.\nB: Serious investigative work.",
 funFact:"Brazilian journalist Vladimir Herzog, killed during the dictatorship in 1975, is honored yearly on October 25."},

{type:"teach", trg:"reportagem", src:"news report", pos:"noun", gender:"f",
 note:"A single journalistic piece. Different from 'notícia' (shorter news item). A 'reportagem' is a longer feature.",
 example:"A: Assisti a uma reportagem sobre a Amazônia.\nB: Muito bem feita?",
 exampleSrc:"A: I watched a report about the Amazon.\nB: Well done?",
 funFact:"The 'grande reportagem' is a revered format in Brazilian journalism, often running many pages or full hours."},

{type:"teach", trg:"informação", src:"information", pos:"noun", gender:"f",
 note:"Data or facts. Plural 'informações' is common. 'Ter informação' = to be informed.",
 example:"A: Precisamos de mais informação.\nB: Vou pesquisar melhor.",
 exampleSrc:"A: We need more information.\nB: I'll research better.",
 funFact:"The Brazilian 'Lei de Acesso à Informação' (2011) lets citizens request data from government bodies."},

{type:"tip", title:"Media Word Families",
 text:"Several Portuguese media words share roots:\n\nnotícia (news item) > noticiário (news program) > noticiarista (rare)\njornal (newspaper) > jornalista (journalist) > jornalismo (journalism)\nreportagem (news report) > repórter (reporter) > reportar (to report)\ncomunicar (to communicate) > comunicação (communication) > comunicador (communicator)\n\nLearn the family and you triple your vocabulary without extra effort. 'Jornal' > 'jornalista' > 'jornalismo' is one of the tightest word families in the language.",
 deepDive:{title:"Brazilian Media Power",
  text:"Brazil has the largest media conglomerate in Latin America: Globo. Its evening news, Jornal Nacional, has aired every weekday since 1969. Owning the biggest TV station, major radio, streaming services, and newspapers, Globo shapes Brazilian discourse more than any outlet in neighboring countries. Understanding Brazilian politics requires understanding Brazilian media concentration. The word 'Globo' in a headline often means the company, not the globe."}},

{type:"mc",
 q:"Which word means 'press' as in journalism?",
 opts:["mídia","imprensa","televisão","notícia"],
 ans:"imprensa",
 hint:"The word appears in 'freedom of the press'."},

{type:"mc",
 q:"What is a 'jornalista'?",
 opts:["a newspaper","a journalist","a news program","a report"],
 ans:"a journalist",
 hint:"A person who works in news media."},

{type:"fb",
 s:"Assisti a uma {1} muito bem produzida ontem.",
 a:["reportagem"],
 opts:["reportagem","jornal","mídia","imprensa"],
 hint:"A longer news feature. More detailed than a short item.",
 sSrc:"I watched a very well-produced {1} yesterday."},

{type:"fb",
 s:"Preciso de mais {1} antes de decidir.",
 a:["informação"],
 opts:["informação","televisão","imprensa","reportagem"],
 hint:"Facts and data needed for a decision.",
 sSrc:"I need more {1} before deciding."},

{type:"match", pairs:[
 {trg:"notícia", src:"news item"},
 {trg:"jornal", src:"newspaper"},
 {trg:"mídia", src:"media"},
 {trg:"imprensa", src:"press"},
 {trg:"televisão", src:"television"},
 {trg:"jornalista", src:"journalist"},
 {trg:"informação", src:"information"}
]},

{type:"mc",
 q:"What is the difference between 'notícia' and 'reportagem'?",
 opts:["No difference","Notícia is shorter, reportagem is deeper","Reportagem is for TV only","Notícia is bad news"],
 ans:"Notícia is shorter, reportagem is deeper",
 hint:"One is a quick item, the other a developed feature."},

{type:"fb",
 s:"A {1} de São Paulo tem mais leitores do que a maioria dos jornais do Brasil.",
 a:["Folha"],
 opts:["Folha","Globo","Mídia","Televisão"],
 hint:"Name of one of Brazil's oldest newspapers. Starts with F.",
 sSrc:"The Folha de São Paulo has more readers than most newspapers in Brazil."},

{type:"mc",
 q:"'Liberdade de imprensa' means:",
 opts:["freedom of movement","freedom of the press","freedom of speech","freedom of trade"],
 ans:"freedom of the press",
 hint:"Imprensa = press / journalism as an institution."},

{type:"fb",
 s:"O {1} assinou a reportagem sobre corrupção.",
 a:["jornalista"],
 opts:["jornalista","jornal","televisão","informação"],
 hint:"The person who writes and reports news.",
 sSrc:"The {1} signed the report on corruption."}
]},

{id:"ptv2_u29l2", title:"Social Media and Fake News", icon:"📱", xp:15, board:true, steps:[
{type:"intro", title:"The Digital News Era",
 desc:"Social media has upended how Brazilians consume news. Fake news, algorithms, and opinion bubbles are daily topics. B2 learners need this modern vocabulary.",
 goals:["Talk about social media","Discuss fake news","Describe online debates"]},

{type:"teach", trg:"rede social", src:"social network", pos:"noun", gender:"f",
 note:"Platforms like Instagram, Twitter, Facebook. Plural 'redes sociais'.",
 example:"A: As redes sociais mudaram o jornalismo.\nB: Para melhor e para pior.",
 exampleSrc:"A: Social networks changed journalism.\nB: For better and for worse.",
 funFact:"Brazil has one of the world's most active social media populations. Instagram and WhatsApp dominate daily life."},

{type:"teach", trg:"internet", src:"internet", pos:"noun", gender:"f",
 note:"Feminine in Portuguese: 'a internet'. Kept as English but with Portuguese article.",
 example:"A: A internet caiu de novo?\nB: Sim, a internet não está boa hoje.",
 exampleSrc:"A: The internet is down again?\nB: Yes, the internet is not good today.",
 funFact:"Brazilians sometimes say 'entrei na net' (I went online), using the English shortening."},

{type:"teach", trg:"fake news", src:"fake news", pos:"noun", gender:"f",
 note:"Kept as English. Feminine in Portuguese. Entered the language through 2018 elections.",
 example:"A: Isso é só fake news.\nB: Verifique antes de compartilhar.",
 exampleSrc:"A: That's just fake news.\nB: Verify before sharing.",
 funFact:"Brazil created a special 'Lei das Fake News' (Fake News Law) debated since 2020 to address online misinformation."},

{type:"teach", trg:"opinião", src:"opinion", pos:"noun", gender:"f",
 note:"A viewpoint. 'Coluna de opinião' = opinion column. 'Opinião pública' = public opinion.",
 example:"A: Todo mundo tem opinião sobre isso.\nB: Mas quantos têm fatos?",
 exampleSrc:"A: Everyone has an opinion about that.\nB: But how many have facts?",
 funFact:"The newspaper section 'Opinião' in Brazilian dailies is where editorials and commentary appear."},

{type:"teach", trg:"debate", src:"debate", pos:"noun", gender:"m",
 note:"A formal discussion. 'Debate presidencial' = presidential debate. Often aired on TV during elections.",
 example:"A: O debate foi intenso ontem.\nB: Muita gritaria, pouco argumento.",
 exampleSrc:"A: The debate was intense yesterday.\nB: Lots of shouting, few arguments.",
 funFact:"Brazilian presidential debates are legally required. Networks must host them during campaign periods."},

{type:"teach", trg:"entrevista", src:"interview", pos:"noun", gender:"f",
 note:"Media or job interview. 'Dar uma entrevista' = to give an interview. 'Fazer entrevista' = to conduct one.",
 example:"A: A entrevista sai na próxima semana.\nB: Mal posso esperar para ler.",
 exampleSrc:"A: The interview comes out next week.\nB: I can't wait to read it.",
 funFact:"'Roda Viva' is Brazil's longest-running interview show, airing weekly since 1986 on TV Cultura."},

{type:"teach", trg:"compartilhar", src:"to share", pos:"verb", gender:null,
 note:"Regular -ar verb. Used for sharing posts, food, or anything. Key verb in social media age.",
 example:"A: Vou compartilhar essa matéria.\nB: Me marca, quero ler também.",
 exampleSrc:"A: I'll share this article.\nB: Tag me, I want to read it too.",
 funFact:"Before social media, 'compartilhar' mostly meant 'to share food or space'. Now it's the dominant online verb."},

{type:"tip", title:"Fake News and Media Literacy",
 text:"The Portuguese vocabulary of media literacy:\n\nfake news (fake news, fem)\ndesinformação (disinformation, fem)\nverificação de fatos (fact-checking)\ncheckagem (fact-check, informal)\nboato (rumor, masc)\nmentira (lie, fem)\nfonte (source, fem)\nconfiável (reliable, adj)\n\nCritical thinking phrases:\nverificar a fonte (check the source)\ncruzar informações (cross-reference)\ndar uma googlada (to google it, slang)",
 deepDive:{title:"WhatsApp and Political Influence",
  text:"WhatsApp is central to Brazilian life, used by over 90% of internet users. During the 2018 elections, WhatsApp became a main channel for political content, including widespread fake news. This led to research, laws, and media literacy campaigns. 'Grupo de família no WhatsApp' (family WhatsApp group) is now a cliché for misinformation spread. Understanding WhatsApp culture is essential to understanding Brazil."}},

{type:"fb",
 s:"Não {1} isso sem verificar a fonte primeiro.",
 a:["compartilhe"],
 opts:["compartilhe","debata","entreviste","poste"],
 hint:"Imperative of compartilhar (você form). To send content to others.",
 sSrc:"Don't {1} that without checking the source first."},

{type:"fb",
 s:"Isso é {1}! A informação é totalmente falsa.",
 a:["fake news"],
 opts:["fake news","debate","internet","entrevista"],
 hint:"Misinformation spread online. Feminine term kept in English.",
 sSrc:"That is {1}! The information is completely false."},

{type:"mc",
 q:"What gender is 'internet' in Portuguese?",
 opts:["masculine","feminine","neuter","varies"],
 ans:"feminine",
 hint:"Say 'a internet', not 'o internet'."},

{type:"mc",
 q:"Which verb means 'to share' online?",
 opts:["postar","compartilhar","curtir","comentar"],
 ans:"compartilhar",
 hint:"Common social media action. Sending content to others."},

{type:"fb",
 s:"As {1} mudaram a forma como nos informamos.",
 a:["redes sociais"],
 opts:["redes sociais","opiniões","entrevistas","fake news"],
 hint:"Platforms like Instagram and Twitter.",
 sSrc:"{1} changed how we get information."},

{type:"fb",
 s:"Não acredite em tudo, muita coisa é {1}.",
 a:["fake news"],
 opts:["fake news","opinião","entrevista","debate"],
 hint:"False stories spreading as real ___. Kept in English.",
 sSrc:"Don't believe everything, a lot is {1}."},

{type:"match", pairs:[
 {trg:"rede social", src:"social network"},
 {trg:"internet", src:"internet"},
 {trg:"fake news", src:"fake news"},
 {trg:"opinião", src:"opinion"},
 {trg:"debate", src:"debate"},
 {trg:"entrevista", src:"interview"},
 {trg:"compartilhar", src:"to share"}
]},

{type:"mc",
 q:"Which word is kept as English?",
 opts:["internet","rede social","entrevista","opinião"],
 ans:"internet",
 hint:"The only one of these borrowed directly without translation."},

{type:"drag_fill",
 s:"Antes de {1}, verifique se não é {2}.",
 blanks:{"1":"compartilhar","2":"fake news"},
 pool:["compartilhar","fake news","opinar","reportar"],
 hint:"First blank: to send content to others. Second blank: false news stories."}
]},

{id:"ptv2_u29l3", title:"The Public Sphere", icon:"🌐", xp:15, board:true, steps:[
{type:"intro", title:"Communication and the Public",
 desc:"Media exists to serve the public. Understand the vocabulary Brazilians use when discussing how information flows through society.",
 goals:["Talk about public communication","Describe audiences","Discuss media effects"]},

{type:"teach", trg:"público", src:"public (audience)", pos:"noun", gender:"m",
 note:"The audience. 'Falar em público' = to speak in public. Also an adjective 'público' (public, as in public school).",
 example:"A: O público estava empolgado.\nB: Sim, o público estava muito bem.",
 exampleSrc:"A: The audience was excited.\nB: Yes, the audience was doing great.",
 funFact:"The phrase 'o grande público' means mainstream audiences, in contrast to niche or specialized crowds."},

{type:"teach", trg:"comunicação", src:"communication", pos:"noun", gender:"f",
 note:"The act of communicating. Also the academic field. 'Curso de comunicação' = communications degree.",
 example:"A: A comunicação é essencial em qualquer relação.\nB: Pessoal ou profissional.",
 exampleSrc:"A: Communication is essential in any relationship.\nB: Personal or professional.",
 funFact:"Brazilian 'cursos de comunicação' in universities produce journalists, publicists, and PR professionals."},

{type:"teach", trg:"anúncio", src:"advertisement", pos:"noun", gender:"m",
 note:"An ad or announcement. 'Anúncio publicitário' = commercial ad. 'Fazer um anúncio' = to make an announcement.",
 example:"A: Esse anúncio está em todo lugar.\nB: A campanha é agressiva mesmo.",
 exampleSrc:"A: This ad is everywhere.\nB: The campaign is aggressive indeed.",
 funFact:"Brazilian advertising won more Cannes Lions (industry awards) than any other country in several recent years."},

{type:"teach", trg:"censura", src:"censorship", pos:"noun", gender:"f",
 note:"The suppression of content. Loaded term in Brazil due to dictatorship history.",
 example:"A: A censura na ditadura foi severa.\nB: Hoje debatemos se existe nova forma.",
 exampleSrc:"A: Censorship during the dictatorship was severe.\nB: Today we debate whether a new form exists.",
 funFact:"During Brazil's military dictatorship (1964-1985), songs, films, and newspapers faced 'censura prévia' (prior censorship)."},

{type:"teach", trg:"cobertura", src:"coverage", pos:"noun", gender:"f",
 note:"Media coverage of events. 'Cobertura jornalística' = news coverage. Different from insurance coverage.",
 example:"A: A cobertura das eleições foi intensa.\nB: Todo canal com sua versão.",
 exampleSrc:"A: Election coverage was intense.\nB: Every channel with its version.",
 funFact:"'Cobertura ao vivo' (live coverage) is a Brazilian TV news staple, used for elections, disasters, and sports."},

{type:"teach", trg:"manchete", src:"headline", pos:"noun", gender:"f",
 note:"Newspaper headline. 'Manchete do dia' = headline of the day. Often shouts the most important story.",
 example:"A: Viu a manchete de hoje?\nB: Impossível não ver, está em todo canto.",
 exampleSrc:"A: Did you see today's headline?\nB: Impossible not to see, it's everywhere.",
 funFact:"Brazilian tabloids prefer dramatic 'manchetes' with exclamation marks, while broadsheets favor concise, sober ones."},

{type:"teach", trg:"editor", src:"editor", pos:"noun", gender:"m",
 note:"Person in charge of editing. Feminine 'editora'. 'Editora' also means publishing house.",
 example:"A: O editor cortou meu texto pela metade.\nB: É sempre assim.",
 exampleSrc:"A: The editor cut my text in half.\nB: It's always like that.",
 funFact:"'Editor-chefe' (editor-in-chief) is the top position in any Brazilian newspaper or magazine."},

{type:"tip", title:"Active vs Passive Media",
 text:"Portuguese distinguishes active media involvement:\n\nActive verbs:\nescrever (to write)\npublicar (to publish)\nreportar (to report)\ncobrir (to cover)\nentrevistar (to interview)\n\nPassive verbs (receiving):\nler (to read)\nassistir (to watch)\nouvir (to listen)\ninformar-se (to inform oneself)\n\nVerb + preposition patterns matter:\nassistir A um programa (watch a program)\nler sobre algo (read about something)\nfalar sobre algo (talk about something)\ninformar-se sobre algo (inform oneself about something)",
 deepDive:{title:"The 'Assistir' Preposition",
  text:"Formal Portuguese requires 'assistir A' (watch TO) for watching shows. 'Assistir AO filme' = 'watch THE film' (with preposition contraction). Spoken Brazilian Portuguese has largely dropped this: 'assistir o filme' is common and accepted in speech, flagged in writing. European Portuguese keeps the preposition strictly. For B2 writing and formal speech, use 'assistir a'. For casual conversation, follow native speakers."}},

{type:"fb",
 s:"Viu a {1} de hoje? Está em todo canal!",
 a:["manchete"],
 opts:["manchete","cobertura","anúncio","censura"],
 hint:"The big title at the top of a news story.",
 sSrc:"Did you see today's {1}? It's on every channel!"},

{type:"fb",
 s:"O {1} cortou metade do texto antes da publicação.",
 a:["editor"],
 opts:["editor","público","anúncio","debate"],
 hint:"The person in charge of editing content. Masculine.",
 sSrc:"The {1} cut half the text before publication."},

{type:"mc",
 q:"Which word means 'headline'?",
 opts:["manchete","cobertura","editor","anúncio"],
 ans:"manchete",
 hint:"The big title at the top of a news story."},

{type:"mc",
 q:"What does 'cobertura jornalística' mean?",
 opts:["insurance policy","news coverage","newspaper editor","weather report"],
 ans:"news coverage",
 hint:"In this context, 'cobertura' refers to journalism, not insurance."},

{type:"fb",
 s:"O {1} lotou o estádio ontem.",
 a:["público"],
 opts:["público","editor","anúncio","debate"],
 hint:"The audience or people gathered at an event.",
 sSrc:"The {1} filled the stadium yesterday."},

{type:"fb",
 s:"A {1} do evento foi excelente.",
 a:["cobertura"],
 opts:["cobertura","manchete","censura","entrevista"],
 hint:"Media reporting on the event.",
 sSrc:"The {1} of the event was excellent."},

{type:"match", pairs:[
 {trg:"público", src:"audience"},
 {trg:"comunicação", src:"communication"},
 {trg:"anúncio", src:"advertisement"},
 {trg:"censura", src:"censorship"},
 {trg:"cobertura", src:"coverage"},
 {trg:"manchete", src:"headline"},
 {trg:"editor", src:"editor"}
]},

{type:"mc",
 q:"Which preposition follows 'to view' in the strict written register?",
 opts:["a","em","com","por"],
 ans:"a",
 hint:"Formal written: assistir + this preposition + object. In spoken Brazilian, it is often dropped."},

{type:"drag_fill",
 s:"A {1} de hoje sobre a {2} chocou a todos.",
 blanks:{"1":"manchete","2":"censura"},
 pool:["manchete","censura","cobertura","entrevista"],
 hint:"First blank: the big title. Second blank: content suppression."}
]}

]}; export default UNIT_29;
