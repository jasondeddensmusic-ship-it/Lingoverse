const UNIT_30 = {n:30, lang:"pt", srcLang:"en", track:"v2", title:"Arte e cultura", sub:"Arts/Culture", icon:"🎨", level:"B2.2", color:"#7B5EE8", lessons:[

{id:"ptv2_u30l1", title:"The Fine Arts", icon:"🖼️", xp:15, board:true, steps:[
{type:"intro", title:"Art and Expression",
 desc:"Brazil has a rich artistic heritage spanning music, literature, painting, and film. B2.2 Portuguese should be able to discuss art with depth and specificity.",
 goals:["Talk about different art forms","Describe art and artists","Appreciate Brazilian culture"]},

{type:"teach", trg:"arte", src:"art", pos:"noun", gender:"f",
 note:"General term for creative expression. 'Obra de arte' = work of art. Plural 'artes' covers all art forms.",
 example:"A: A arte é essencial para a vida humana.\nB: Sem ela, ficamos pobres por dentro.",
 exampleSrc:"A: Art is essential for human life.\nB: Without it, we get poor inside.",
 funFact:"'Bela Arte' (Fine Art) refers to the classical disciplines: painting, sculpture, architecture, music, poetry."},

{type:"teach", trg:"música", src:"music", pos:"noun", gender:"f",
 note:"Also means 'song' in Brazilian Portuguese. 'Música brasileira' = Brazilian music.",
 example:"A: Essa música me traz lembranças.\nB: É linda mesmo.",
 exampleSrc:"A: This song brings me memories.\nB: It's beautiful indeed.",
 funFact:"Brazilian Portuguese uses 'música' for both 'music' (general) and 'song' (specific), unlike European Portuguese which prefers 'canção' for song."},

{type:"teach", trg:"pintura", src:"painting", pos:"noun", gender:"f",
 note:"Both the activity and the artwork. 'Fazer pintura' = to paint. 'Uma pintura' = a painting.",
 example:"A: Essa pintura vale uma fortuna.\nB: É uma peça histórica.",
 exampleSrc:"A: This painting is worth a fortune.\nB: It's a historic piece.",
 funFact:"Tarsila do Amaral's 'Abaporu' (1928) is one of Brazil's most famous paintings, founding the Anthropophagic movement."},

{type:"teach", trg:"literatura", src:"literature", pos:"noun", gender:"f",
 note:"The body of written works. 'Literatura brasileira' = Brazilian literature, a high school subject.",
 example:"A: A literatura brasileira é riquíssima.\nB: Machado de Assis é um gênio.",
 exampleSrc:"A: Brazilian literature is extremely rich.\nB: Machado de Assis is a genius.",
 funFact:"Machado de Assis, founder of the Brazilian Academy of Letters, is considered the greatest Brazilian writer of all time."},

{type:"teach", trg:"escritor", src:"writer", pos:"noun", gender:"m",
 note:"Feminine 'escritora'. 'Ser escritor' = to be a writer. Related verb 'escrever' = to write.",
 example:"A: Esse escritor ganhou vários prêmios.\nB: Merecido, ele é fantástico.",
 exampleSrc:"A: This writer won several awards.\nB: Deserved, he is fantastic.",
 funFact:"Clarice Lispector is one of Brazil's most celebrated 'escritoras', known for her introspective prose and short stories."},

{type:"teach", trg:"pintor", src:"painter", pos:"noun", gender:"m",
 note:"Feminine 'pintora'. The person who paints. 'Ser pintor' = to be a painter.",
 example:"A: Esse pintor tem um estilo único.\nB: Reconheço as obras dele de longe.",
 exampleSrc:"A: This painter has a unique style.\nB: I recognize his works from far.",
 funFact:"Cândido Portinari painted 'Guerra e Paz', a pair of murals donated by Brazil to the United Nations in 1956."},

{type:"teach", trg:"obra", src:"work (creative)", pos:"noun", gender:"f",
 note:"A creative work. 'Obra de arte' = work of art. 'Obra-prima' = masterpiece. Feminine.",
 example:"A: Essa obra é uma obra-prima.\nB: Concordo, incomparável.",
 exampleSrc:"A: This work is a masterpiece.\nB: I agree, incomparable.",
 funFact:"'Obra' also means construction work in Portuguese: 'a obra da rua' = the street construction."},

{type:"tip", title:"Feminine and Masculine Artists",
 text:"Brazilian Portuguese often uses specific feminine forms for artistic professions:\n\nescritor / escritora (writer)\npintor / pintora (painter)\nmúsico / música (musician) - note that 'música' also means music!\ncompositor / compositora (composer)\ncantor / cantora (singer)\nator / atriz (actor / actress, irregular)\n\nArtistic titles became 'flexible' for gender in the 20th century. Before, 'escritor' was used for women too. Today, feminine forms are standard. Some words still get debated: 'a presidenta' vs 'a presidente' shows the same pattern.",
 deepDive:{title:"Machado de Assis",
  text:"Joaquim Maria Machado de Assis (1839-1908) is widely considered Brazil's greatest writer. Born poor, biracial, and epileptic, he rose to found the Brazilian Academy of Letters and produced 'Dom Casmurro' and 'Memórias Póstumas de Brás Cubas'. His skeptical, ironic style foreshadowed 20th-century modernism. High school students across Brazil read him for national entrance exams. Knowing Machado is essential cultural literacy for any Portuguese learner."}},

{type:"mc",
 q:"Which word means 'painting' (the artwork or activity)?",
 opts:["pintura","obra","arte","pintor"],
 ans:"pintura",
 hint:"The noun ending in -ura. Common pattern for activities."},

{type:"mc",
 q:"What is 'obra-prima'?",
 opts:["first work","masterpiece","construction work","art supply"],
 ans:"masterpiece",
 hint:"Literally 'first work', but means the finest."},

{type:"fb",
 s:"A {1} brasileira tem grandes nomes como Machado de Assis.",
 a:["literatura"],
 opts:["literatura","música","pintura","arte"],
 hint:"The body of written works. A school subject.",
 sSrc:"Brazilian {1} has great names like Machado de Assis."},

{type:"fb",
 s:"Esse {1} ganhou o Nobel de Literatura.",
 a:["escritor"],
 opts:["escritor","pintor","músico","jornalista"],
 hint:"A person who writes books or stories.",
 sSrc:"This {1} won the Nobel Prize in Literature."},

{type:"match", pairs:[
 {trg:"arte", src:"art"},
 {trg:"música", src:"music"},
 {trg:"pintura", src:"painting"},
 {trg:"literatura", src:"literature"},
 {trg:"escritor", src:"writer"},
 {trg:"pintor", src:"painter"},
 {trg:"obra", src:"work"}
]},

{type:"mc",
 q:"What does 'música' mean in Brazilian Portuguese?",
 opts:["only music in general","only a specific song","both music and song","only classical music"],
 ans:"both music and song",
 hint:"Brazilian usage is broader than European usage here."},

{type:"fb",
 s:"A {1} de Portinari fica exposta em todo o mundo.",
 a:["obra"],
 opts:["obra","pintura","arte","literatura"],
 hint:"A creative piece. The compound form with '-prima' means masterpiece.",
 sSrc:"Portinari's {1} is exhibited all over the world."},

{type:"mc",
 q:"What is the feminine form of 'escritor'?",
 opts:["escrição","escritorar","escritória","escritora"],
 ans:"escritora",
 hint:"Just add -a to the masculine form."},

{type:"fb",
 s:"O Cândido Portinari foi um grande {1} brasileiro.",
 a:["pintor"],
 opts:["pintor","escritor","músico","ator"],
 hint:"A person who creates paintings.",
 sSrc:"Cândido Portinari was a great Brazilian {1}."}
]},

{id:"ptv2_u30l2", title:"Culture and Heritage", icon:"🏛️", xp:15, board:true, steps:[
{type:"intro", title:"Where We Come From",
 desc:"Culture and tradition carry a people's identity. Brazilian culture blends indigenous, African, European, and Asian heritages. Learn how to discuss this rich mix.",
 goals:["Talk about culture and tradition","Describe heritage","Discuss cultural identity"]},

{type:"teach", trg:"cultura", src:"culture", pos:"noun", gender:"f",
 note:"A people's shared ways of living. 'Cultura popular' = popular culture. 'Choque cultural' = culture shock.",
 example:"A: A cultura brasileira é uma mistura linda.\nB: Várias influências em um só lugar.",
 exampleSrc:"A: Brazilian culture is a beautiful mix.\nB: Many influences in one place.",
 funFact:"Brazil's Ministry of Culture was founded in 1985 after the end of the military dictatorship."},

{type:"teach", trg:"tradição", src:"tradition", pos:"noun", gender:"f",
 note:"Practices passed down through generations. 'Tradições familiares' = family traditions.",
 example:"A: Cada região tem suas tradições.\nB: É isso que torna o Brasil único.",
 exampleSrc:"A: Each region has its traditions.\nB: That's what makes Brazil unique.",
 funFact:"Festa Junina, the June festivals celebrating rural life, is one of Brazil's most widespread traditions."},

{type:"teach", trg:"herança", src:"heritage / inheritance", pos:"noun", gender:"f",
 note:"What is passed down. 'Herança cultural' = cultural heritage. Also a financial inheritance.",
 example:"A: A herança africana é enorme no Brasil.\nB: Está em tudo: música, comida, idioma.",
 exampleSrc:"A: African heritage is huge in Brazil.\nB: It's in everything: music, food, language.",
 funFact:"Brazilian Portuguese has hundreds of words of African origin, including 'caçula' (youngest child) and 'cafuné' (hair caress)."},

{type:"teach", trg:"identidade", src:"identity", pos:"noun", gender:"f",
 note:"Who someone is. 'Identidade nacional' = national identity. Also ID card: 'carteira de identidade'.",
 example:"A: A identidade brasileira é complexa.\nB: Não se resume a uma coisa só.",
 exampleSrc:"A: Brazilian identity is complex.\nB: It doesn't boil down to one thing.",
 funFact:"'Brasilidade' is the abstract noun for 'Brazilianness', the essence of being Brazilian."},

{type:"teach", trg:"festival", src:"festival", pos:"noun", gender:"m",
 note:"Cultural celebration. 'Festival de cinema' = film festival. 'Festival de música' = music festival.",
 example:"A: O festival de Parintins é muito bom.\nB: É um dos maiores do Brasil.",
 exampleSrc:"A: The Parintins festival is very good.\nB: It's one of the biggest in Brazil.",
 funFact:"Brazilian Carnival is arguably the world's biggest 'festival', attracting millions to Rio, Salvador, and Recife."},

{type:"teach", trg:"exposição", src:"exhibition", pos:"noun", gender:"f",
 note:"An art or museum show. 'Exposição de arte' = art exhibition. 'Visitar uma exposição' = to visit an exhibition.",
 example:"A: A exposição de Tarsila foi linda.\nB: Fui ontem, não me cansei.",
 exampleSrc:"A: The Tarsila exhibition was beautiful.\nB: I went yesterday, didn't get tired.",
 funFact:"The São Paulo Biennial is one of the world's oldest contemporary art exhibitions, started in 1951."},

{type:"teach", trg:"museu", src:"museum", pos:"noun", gender:"m",
 note:"Cultural institution. 'Museu de arte' = art museum. MASP is the most famous in São Paulo.",
 example:"A: O museu tem obras muito boas.\nB: Vou voltar na próxima viagem.",
 exampleSrc:"A: The museum has very good works.\nB: I'll come back on my next trip.",
 funFact:"The Museu Nacional in Rio burned down in 2018, losing 20 million artifacts, a tragedy for Brazilian heritage."},

{type:"tip", title:"Cultural Identity Vocabulary",
 text:"Portuguese words for cultural identity:\n\nidentidade (identity)\nherança (heritage)\ntradição (tradition)\nraízes (roots, plural)\nancestralidade (ancestry)\nbrasilidade (Brazilianness)\nmestiçagem (racial mixing)\n\nCommon phrases:\n\nresgatar a cultura (to reclaim culture)\npreservar a tradição (to preserve tradition)\nperder as raízes (to lose one's roots)\ncelebrar a diversidade (to celebrate diversity)\n\nBrazilians often say 'nossas raízes' (our roots) when discussing heritage.",
 deepDive:{title:"The Three Root Cultures",
  text:"Brazilian cultural identity is built on three foundational roots: indigenous (indígena), European (europeia), and African (africana). Later Asian immigration added a fourth layer. This mixing, called 'mestiçagem', is often celebrated as the 'soul' of Brazilian culture. Words, foods, music, religion, and dance all reflect this blend. Samba combines African rhythm with European instruments. Feijoada traces to slave kitchens. Brazilian Portuguese absorbs words from all three roots. Recognizing this is essential to understanding the country."}},

{type:"mc",
 q:"What does 'herança cultural' mean?",
 opts:["cultural heritage","cultural event","family secret","financial inheritance"],
 ans:"cultural heritage",
 hint:"What one generation passes to the next, in the ___ sense."},

{type:"mc",
 q:"Which word means 'exhibition'?",
 opts:["museu","exposição","herança","festival"],
 ans:"exposição",
 hint:"What art museums put on. Feminine noun."},

{type:"fb",
 s:"A {1} brasileira mistura várias influências.",
 a:["cultura"],
 opts:["cultura","herança","identidade","exposição"],
 hint:"The broad term for a people's shared ways.",
 sSrc:"Brazilian {1} mixes several influences."},

{type:"fb",
 s:"Minha família mantém as {1} do interior.",
 a:["tradições"],
 opts:["tradições","exposições","culturas","identidades"],
 hint:"Customs passed down through generations. Plural here.",
 sSrc:"My family keeps the {1} of the countryside."},

{type:"match", pairs:[
 {trg:"cultura", src:"culture"},
 {trg:"tradição", src:"tradition"},
 {trg:"herança", src:"heritage"},
 {trg:"identidade", src:"identity"},
 {trg:"festival", src:"festival"},
 {trg:"exposição", src:"exhibition"},
 {trg:"museu", src:"museum"}
]},

{type:"mc",
 q:"Which three are Brazil's 'root' cultures?",
 opts:["Italian, Portuguese, Dutch","Spanish, French, German","Indigenous, European, African","Chinese, Japanese, Korean"],
 ans:"Indigenous, European, African",
 hint:"The three foundational streams of Brazilian identity."},

{type:"fb",
 s:"O Carnaval de Rio é o maior {1} do mundo.",
 a:["festival"],
 opts:["festival","museu","exposição","herança"],
 hint:"A large celebration or event. Carnaval is the biggest one.",
 sSrc:"Rio Carnival is the largest {1} in the world."},

{type:"mc",
 q:"Which word means 'heritage' or 'inheritance'?",
 opts:["tradição","identidade","cultura","herança"],
 ans:"herança",
 hint:"Something passed down from ancestors. Shares root with English 'heir'."},

{type:"fb",
 s:"A {1} brasileira mistura elementos indígenas, africanos e europeus.",
 a:["cultura"],
 opts:["cultura","tradição","herança","identidade"],
 hint:"The arts, customs, and shared identity of a group.",
 sSrc:"Brazilian {1} mixes indigenous, African, and European elements."},

{type:"tip", title:"Relative Pronouns: que, qual, cujo",
 text:"Relative pronouns connect a clause to the noun it describes.\n\nque = that / which / who (the most common in all registers)\nO livro que ela escreveu é famoso. (The book that she wrote is famous.)\n\no qual / a qual / os quais / as quais = which (formal, after prepositions)\nO museu sobre o qual estamos falando. (The museum about which we are talking.)\n\ncujo / cuja / cujos / cujas = whose (formal; rarely used in speech)\nA artista cujo trabalho é famoso. (The artist whose work is famous.)\n\nIn everyday Brazilian speech, que handles almost everything. O qual and cujo appear in formal writing, news, and academic contexts.",
 icon:"🔗",
 deepDive:{title:"Que vs O Qual. Register Difference",
  text:"In spoken Brazilian, 'que' replaces most relative pronouns, even after prepositions. 'O livro que eu falei' (The book I talked about) is more natural than 'O livro do qual eu falei'. This creates a style gap: informal speech uses bare que, while formal writing carefully chooses o qual with the right preposition and gender agreement. For B2 writing and comprehension of formal texts, learn o qual and cujo. For conversation, que alone is sufficient."}},
]},

{id:"ptv2_u30l3", title:"Performance and Entertainment", icon:"🎭", xp:15, board:true, steps:[
{type:"intro", title:"Stage and Screen",
 desc:"Theater, cinema, and concerts form the heart of entertainment. Build B2.2 vocabulary to discuss Brazilian performance culture.",
 goals:["Talk about theater and cinema","Describe performances","Discuss entertainment"]},

{type:"teach", trg:"teatro", src:"theater", pos:"noun", gender:"m",
 note:"Both the building and the art form. 'Ir ao teatro' = to go to the theater. 'Peça de teatro' = play.",
 example:"A: Amo ir ao teatro todo sábado.\nB: Eu também, a energia é única.",
 exampleSrc:"A: I love going to the theater every Saturday.\nB: Me too, the energy is unique.",
 funFact:"Teatro Municipal in Rio and São Paulo are two of Latin America's most elegant opera houses, both from the early 1900s."},

{type:"teach", trg:"cinema", src:"cinema", pos:"noun", gender:"m",
 note:"The art form, the building, and the activity. 'Ir ao cinema' = to go to the movies.",
 example:"A: O cinema brasileiro está crescendo.\nB: Cada vez com mais qualidade.",
 exampleSrc:"A: Brazilian cinema is growing.\nB: Each time with more quality.",
 funFact:"Brazil won its first Oscar in 2024 when 'I'm Still Here' (Ainda Estou Aqui) became the first Brazilian film to win Best International Feature."},

{type:"teach", trg:"concerto", src:"concert", pos:"noun", gender:"m",
 note:"Classical or formal music performance. For pop concerts, Brazilians often say 'show'.",
 example:"A: O concerto da orquestra foi muito bom.\nB: Os músicos são fantásticos.",
 exampleSrc:"A: The orchestra concert was very good.\nB: The musicians are fantastic.",
 funFact:"Sala São Paulo is one of the world's top concert halls for acoustics, built in a former train station."},

{type:"teach", trg:"show", src:"show / concert (pop)", pos:"noun", gender:"m",
 note:"Kept as English. Masculine. Used for pop, rock, and MPB performances. 'Show' rather than 'concerto'.",
 example:"A: O show do Caetano foi emocionante.\nB: Uma lenda viva do Brasil.",
 exampleSrc:"A: Caetano's show was moving.\nB: A living Brazilian legend.",
 funFact:"Brazilians use 'show' for pop concerts and 'concerto' for classical. Mixing the two sounds strange."},

{type:"teach", trg:"ator", src:"actor", pos:"noun", gender:"m",
 note:"Feminine form is 'atriz' (irregular). 'Atuar' = to act. 'Atuação' = acting performance.",
 example:"A: Esse ator é brilhante.\nB: Cada papel é uma surpresa.",
 exampleSrc:"A: This actor is brilliant.\nB: Each role is a surprise.",
 funFact:"Brazilian telenovelas (soap operas) launched many Brazilian 'atores' into Hollywood, like Wagner Moura and Rodrigo Santoro."},

{type:"teach", trg:"personagem", src:"character", pos:"noun", gender:"f",
 note:"Feminine, even though many characters are male. Greek origin. 'Uma personagem marcante' = a memorable character.",
 example:"A: Essa personagem me marcou.\nB: Tem uma história muito boa.",
 exampleSrc:"A: This character marked me.\nB: Has a very good story.",
 funFact:"'Personagem' is one of those tricky gender cases. Some speakers say 'o personagem' informally, but 'a personagem' is standard."},

{type:"teach", trg:"público", src:"audience", pos:"noun", gender:"m",
 note:"Reviewed from unit 29. Here specifically as theater or performance audience. Always 'o público'.",
 example:"A: O público aplaudiu de pé.\nB: Merecido, foi uma noite memorável.",
 exampleSrc:"A: The audience gave a standing ovation.\nB: Deserved, it was a memorable night.",
 funFact:"'Aplausos de pé' (standing ovation) is a rare Brazilian tribute, reserved for truly exceptional performances."},

{type:"tip", title:"Show vs Concerto",
 text:"Two words, different contexts:\n\nconcerto (masc)\n- Classical music\n- Orchestras\n- Formal venues\n- More elevated register\nO concerto de Beethoven foi incrível.\n\nshow (masc, from English)\n- Pop, rock, MPB\n- Stadium or theater venues\n- Informal register\n- Popular music\nVou ao show da Anitta sexta-feira.\n\nRule: classical = concerto, pop = show. Mixing them confuses listeners.",
 deepDive:{title:"Brazilian Cinema Today",
  text:"Brazilian cinema reached a new peak in 2024 when Walter Salles' 'Ainda Estou Aqui' (I'm Still Here) won the Academy Award for Best International Feature. The film, based on the memoir of Marcelo Rubens Paiva about his family during the dictatorship, became a cultural phenomenon. Before it, classics like 'Cidade de Deus' (2002) and 'Central do Brasil' (1998) had been nominated but not won. B2.2 learners should be able to discuss films like these with cultural fluency."}},

{type:"mc",
 q:"What is the feminine form of 'ator'?",
 opts:["atriz","atoresa","atora","atora"],
 ans:"atriz",
 hint:"Irregular feminine. Not formed with -a like most nouns."},

{type:"mc",
 q:"Which word is used for a classical music performance?",
 opts:["show","concerto","festival","teatro"],
 ans:"concerto",
 hint:"The formal option. Orchestra or chamber music."},

{type:"fb",
 s:"O {1} do Rock in Rio vende ingressos em horas.",
 a:["show"],
 opts:["show","concerto","teatro","cinema"],
 hint:"Pop or rock performance. Kept as an English word.",
 sSrc:"The Rock in Rio {1} sells tickets in hours."},

{type:"fb",
 s:"A {1} principal desse filme é fascinante.",
 a:["personagem"],
 opts:["personagem","ator","cultura","obra"],
 hint:"The fictional person in a story. Feminine gender.",
 sSrc:"The main {1} in this film is fascinating."},

{type:"match", pairs:[
 {trg:"teatro", src:"theater"},
 {trg:"cinema", src:"cinema"},
 {trg:"concerto", src:"concert"},
 {trg:"show", src:"pop concert"},
 {trg:"ator", src:"actor"},
 {trg:"personagem", src:"character"},
 {trg:"público", src:"audience"}
]},

{type:"mc",
 q:"What is special about the gender of 'personagem'?",
 opts:["Has no gender","Always masculine","Always feminine","Depends on character"],
 ans:"Always feminine",
 hint:"Greek origin. Even for male characters, use ___ article."},

{type:"drag_fill",
 s:"O {1} aplaudiu a {2} no final do espetáculo.",
 blanks:{"1":"público","2":"atriz"},
 pool:["público","atriz","personagem","concerto"],
 hint:"First blank: the audience watching. Second blank: feminine form of ator."}
]},

{id:"ptv2_u30l4", title:"Putting It Together", icon:"✨", xp:15, board:true, steps:[
{type:"intro", title:"Culture in Conversation",
 desc:"Tying it all together: use your new vocabulary to talk about Brazilian and global culture. Recycle B2 vocabulary in real discussions.",
 goals:["Recycle cultural vocabulary","Combine topics","Practice natural conversation"]},

{type:"teach", trg:"espetáculo", src:"show / spectacle", pos:"noun", gender:"m",
 note:"Any dramatic or artistic performance. 'Espetáculo de dança' = dance show. Broader than 'show'.",
 example:"A: Esse espetáculo ficou em cartaz um ano.\nB: Sucesso absoluto.",
 exampleSrc:"A: This show ran for a year.\nB: Absolute success.",
 funFact:"'Dar o espetáculo' literally means 'to give the show' and figuratively means 'to show off badly'."},

{type:"teach", trg:"crítica", src:"review / criticism", pos:"noun", gender:"f",
 note:"Professional review or general criticism. 'Crítica positiva' = positive review. 'Um crítico' = a critic.",
 example:"A: A crítica adorou o filme.\nB: Isso sempre ajuda as bilheterias.",
 exampleSrc:"A: Critics loved the film.\nB: That always helps box office.",
 funFact:"'A crítica' (the critics, collectively) can make or break Brazilian movies, especially art films."},

{type:"teach", trg:"autor", src:"author", pos:"noun", gender:"m",
 note:"Writer or creator. Feminine 'autora'. 'Direitos de autor' = copyright.",
 example:"A: Quem é o autor dessa música?\nB: Chico Buarque, acho.",
 exampleSrc:"A: Who is the author of this song?\nB: Chico Buarque, I think.",
 funFact:"Chico Buarque is both a major 'compositor' and a celebrated 'autor' of novels, winning Brazil's top literary prize in 2019."},

{type:"teach", trg:"influência", src:"influence", pos:"noun", gender:"f",
 note:"The effect one thing has on another. 'Ter influência' = to have influence.",
 example:"A: A influência africana é enorme na música brasileira.\nB: Está no ritmo, nos instrumentos, em tudo.",
 exampleSrc:"A: African influence is huge in Brazilian music.\nB: It's in the rhythm, the instruments, everything.",
 funFact:"'Influenciador digital' (digital influencer) became a formal career in Brazil in the late 2010s."},

{type:"teach", trg:"clássico", src:"classic", pos:"adj", gender:null,
 note:"Adjective. 'Clássico' or 'clássica' for gender agreement. Also a noun: 'um clássico' = a classic.",
 example:"A: Esse livro é um clássico da literatura.\nB: Toda pessoa deveria ler.",
 exampleSrc:"A: This book is a literary classic.\nB: Everyone should read it.",
 funFact:"'Os clássicos' often refers specifically to Machado de Assis, Jorge Amado, Graciliano Ramos, and Clarice Lispector."},

{type:"teach", trg:"moderno", src:"modern", pos:"adj", gender:null,
 note:"Modern. Feminine 'moderna'. 'Arte moderna' = modern art. 'Modernismo' is the art movement.",
 example:"A: Prefiro a arte moderna à clássica.\nB: Cada um com seu gosto.",
 exampleSrc:"A: I prefer modern art to classical.\nB: To each their own.",
 funFact:"The 1922 Semana de Arte Moderna in São Paulo launched Brazilian modernism, featuring Mário de Andrade and Tarsila do Amaral."},

{type:"teach", trg:"contemporâneo", src:"contemporary", pos:"adj", gender:null,
 note:"Of our current time. Feminine 'contemporânea'. 'Arte contemporânea' = contemporary art.",
 example:"A: A dança contemporânea é muito expressiva.\nB: E muito livre.",
 exampleSrc:"A: Contemporary dance is very expressive.\nB: And very free.",
 funFact:"'Arte contemporânea' in Brazil is often abbreviated as 'contemp' in art world jargon."},

{type:"tip", title:"Clássico, Moderno, Contemporâneo",
 text:"Three time periods in art:\n\nclássico (classical)\n- Ancient or revered traditions\n- Greek/Roman roots or established canon\n- Machado, Mozart, Caravaggio\n\nmoderno (modern)\n- Late 19th to mid 20th century\n- Modernist movements\n- Picasso, Tarsila, Stravinsky\n\ncontemporâneo (contemporary)\n- From 1960s or 1980s to today\n- Living artists\n- Vik Muniz, Adriana Varejão, Ernesto Neto\n\nThese terms are used precisely in Brazilian art criticism. Mixing them reveals a tourist, not a connoisseur.",
 deepDive:{title:"Semana de Arte Moderna 1922",
  text:"In February 1922, a group of artists, poets, and composers staged the Semana de Arte Moderna (Week of Modern Art) in São Paulo. The event shocked audiences with poetry readings, avant-garde paintings, and experimental music. It marked the birth of Brazilian modernism and the 'Movimento Antropofágico', which proposed that Brazilian art should 'eat' foreign influences and digest them into something uniquely Brazilian. The centenary in 2022 brought renewed attention to this foundational moment."}},

{type:"mc",
 q:"Which adjective describes 'of today'?",
 opts:["contemporâneo","antigo","clássico","moderno"],
 ans:"contemporâneo",
 hint:"Of our current time, not modernist or classical."},

{type:"mc",
 q:"What does 'a crítica' (collective) mean?",
 opts:["the criticism","the critics (as a group)","the complaint","the review"],
 ans:"the critics (as a group)",
 hint:"Same word, collective meaning. Reviewers as a body."},

{type:"fb",
 s:"Esse romance é considerado um {1} da literatura.",
 a:["clássico"],
 opts:["clássico","moderno","contemporâneo","popular"],
 hint:"Adjective meaning established, revered, timeless.",
 sSrc:"This novel is considered a {1} of literature."},

{type:"fb",
 s:"A {1} africana moldou a música brasileira.",
 a:["influência"],
 opts:["influência","crítica","obra","cultura"],
 hint:"The effect one culture has on another.",
 sSrc:"African {1} shaped Brazilian music."},

{type:"match", pairs:[
 {trg:"espetáculo", src:"spectacle"},
 {trg:"crítica", src:"criticism"},
 {trg:"autor", src:"author"},
 {trg:"influência", src:"influence"},
 {trg:"clássico", src:"classic"},
 {trg:"moderno", src:"modern"},
 {trg:"contemporâneo", src:"contemporary"}
]},

{type:"mc",
 q:"Which event launched Brazilian modernism?",
 opts:["Copa 1970","Carnaval 1900","Semana de Arte Moderna 1922","Exposição Mundial 1950"],
 ans:"Semana de Arte Moderna 1922",
 hint:"A week-long event in São Paulo that shocked the establishment."},

{type:"drag_fill",
 s:"A {1} elogiou o {2} do teatro municipal.",
 blanks:{"1":"crítica","2":"espetáculo"},
 pool:["crítica","espetáculo","influência","cultura"],
 hint:"First blank: reviewers as a group. Second blank: the performance itself."}
]}

]}; export default UNIT_30;
