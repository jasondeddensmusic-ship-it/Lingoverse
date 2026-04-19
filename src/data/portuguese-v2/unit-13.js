const UNIT_13 = {n:13, lang:"pt", srcLang:"en", track:"v2", title:"O que você fez ontem?", sub:"Preterite Past Tense", icon:"📅", level:"B1.1", color:"#7B5EE8", lessons:[

{id:"ptv2_u13l1", title:"Regular -ar Preterite", icon:"📝", xp:15, board:true, steps:[
{type:"intro", title:"Talking About Yesterday", desc:"The pretérito perfeito is the main past tense in Portuguese. Use it for completed actions in the past. In this lesson you master regular -ar verbs.", goals:["Conjugate regular -ar verbs in the preterite","Recognize completed past actions","Use time markers like ontem and a semana passada"]},

{type:"tip", title:"What is the Pretérito Perfeito?",
 text:"The pretérito perfeito is used for actions that are finished and happened at a specific moment in the past.\n\nEnglish often translates it two ways:\neu falei = I spoke OR I have spoken\neu comi = I ate OR I have eaten\n\nPortuguese uses ONE tense for both. Simple.",
 deepDive:{title:"Perfeito vs Imperfeito", text:"Portuguese has two past tenses. The pretérito perfeito (this unit) describes completed actions: Ontem eu falei com João (Yesterday I spoke with João). The pretérito imperfeito (next unit) describes ongoing or habitual past: Quando eu era criança, eu falava espanhol (When I was a child, I spoke Spanish). Think of the perfeito as a snapshot, the imperfeito as a movie."}},

{type:"verb_table", title:"Regular -ar Preterite: falar (to speak)",
 note:"Notice the accented í in the nós form. It distinguishes preterite from present (falamos looks the same in both, but context decides).",
 groups:[{label:"Preterite Endings", rows:[
   {pronoun:"eu", form:"falei", src:"I spoke"},
   {pronoun:"você / ele / ela", form:"falou", src:"you / he / she spoke"},
   {pronoun:"nós", form:"falamos", src:"we spoke"},
   {pronoun:"vocês / eles / elas", form:"falaram", src:"you all / they spoke"}
 ]}]},

{type:"teach", trg:"falei", src:"I spoke", pos:"verb", gender:null,
 note:"First person singular preterite of falar.\nAction complete, moment specific.",
 example:"A: Você falou com a Maria?\nB: Sim, eu falei com ela ontem.\nA: E como foi?\nB: Muito bem, falamos sobre o trabalho.",
 exampleSrc:"A: Did you speak with Maria?\nB: Yes, I spoke with her yesterday.\nA: And how was it?\nB: Very well, we spoke about work.",
 funFact:"The -ei ending is the fingerprint of the eu preterite for -ar verbs. One vowel shift and you are in the past."},

{type:"teach", trg:"falou", src:"you / he / she spoke", pos:"verb", gender:null,
 note:"Third person singular AND você form.\nOne ending covers three subjects.",
 example:"A: O que o professor falou hoje?\nB: Ele falou sobre a história do Brasil.\nA: E você? Falou alguma coisa?\nB: Falei sim, falei muito.",
 exampleSrc:"A: What did the teacher say today?\nB: He spoke about the history of Brazil.\nA: And you? Did you say anything?\nB: Yes I did, I spoke a lot.",
 funFact:"The -ou ending sounds like 'oh' in Brazilian Portuguese. A very recognizable past-tense signal."},

{type:"teach", trg:"falamos", src:"we spoke / we speak", pos:"verb", gender:null,
 note:"Identical in present and preterite.\nContext makes the meaning clear.",
 example:"A: Nós falamos com o professor ontem.\nB: E ele ajudou vocês?\nA: Sim, falou muito bem.\nB: Que bom!",
 exampleSrc:"A: We spoke with the teacher yesterday.\nB: And did he help you?\nA: Yes, he spoke very well.\nB: How nice!",
 funFact:"European Portuguese adds an accent (falámos) to separate past from present. Brazil drops the accent but the vowel is open."},

{type:"teach", trg:"falaram", src:"they / you all spoke", pos:"verb", gender:null,
 note:"Used for vocês, eles, and elas.\nPlural third person preterite ending.",
 example:"A: Os meus pais falaram com o professor.\nB: Sobre o que?\nA: Sobre as minhas notas.\nB: E como foi?",
 exampleSrc:"A: My parents spoke with the teacher.\nB: About what?\nA: About my grades.\nB: And how did it go?",
 funFact:"The -aram ending is stressed on the second A. Brazilians often reduce it to 'falarum' in fast speech."},

{type:"teach", trg:"ontem", src:"yesterday", pos:"adv", gender:null,
 note:"Classic time marker for the preterite.\nSignals a completed past moment.",
 example:"A: O que você fez ontem?\nB: Ontem eu estudei a tarde toda.\nA: Nossa, que dedicado!\nB: A prova é amanhã.",
 exampleSrc:"A: What did you do yesterday?\nB: Yesterday I studied all afternoon.\nA: Wow, so dedicated!\nB: The exam is tomorrow.",
 funFact:"Ontem comes from Latin 'ad noctem' (at night). In medieval Portuguese, the day started at sunset."},

{type:"fb", s:"Eu {1} com a Maria ontem à tarde.",
 a:["falei"],
 opts:["falei","falou","falamos","falaram"],
 hint:"Subject is eu. First person singular -ar preterite.",
 sSrc:"I {1} with Maria yesterday afternoon."},

{type:"fb", s:"Eles {1} durante três horas na reunião.",
 a:["falaram"],
 opts:["falaram","falei","falou","falamos"],
 hint:"Subject is eles. Third person plural preterite of falar.",
 sSrc:"They {1} for three hours in the meeting."},

{type:"mc", q:"Choose the correct preterite of falar for eu:", opts:["falou","falei","falamos","falaram"], ans:"falei", hint:"First person singular -ar preterite ends in a very distinctive diphthong."},

{type:"mc", q:"What does 'Ontem eu estudei' mean?", opts:["Yesterday I studied","Today I studied","Tomorrow I will study","I study every day"], ans:"Yesterday I studied", hint:"Ontem is the time marker. The verb is completed in the past."},

{type:"fb", s:"Nós {1} com o professor depois da aula.", a:["falamos"], opts:["falamos","falei","falaram","falou"], hint:"Subject is nós, so use the first person plural preterite of falar.", sSrc:"We {1} with the teacher after class."},

{type:"mc", q:"Which sentence uses the preterite correctly?", opts:["Ela falou comigo ontem","Ela fala comigo ontem","Ela falamos ontem","Ela falaram ontem"], ans:"Ela falou comigo ontem", hint:"___ is third person singular. Match the subject to the correct past-tense ending."},

{type:"fb", s:"Você {1} com a minha mãe na festa?", a:["falou"], opts:["falou","falei","falamos","falaram"], hint:"Você takes the same ending as ele or ela in the preterite.", sSrc:"Did you {1} with my mother at the party?"},

{type:"teach", trg:"estudei", src:"I studied", pos:"verb", gender:null,
 note:"Preterite of estudar for eu.\nAnother high-frequency -ar verb.",
 example:"A: Você estudou para a prova?\nB: Estudei muito ontem à noite.\nA: Então vai bem!\nB: Espero que sim.",
 exampleSrc:"A: Did you study for the exam?\nB: I studied a lot last night.\nA: Then you will do well!\nB: I hope so.",
 funFact:"Estudar is a cognate of study. Drop the -ar, add the preterite ending, and you have done it."},

{type:"match", pairs:[
  {trg:"eu falei", src:"I spoke"},
  {trg:"ele falou", src:"he spoke"},
  {trg:"nós falamos", src:"we spoke"},
  {trg:"eles falaram", src:"they spoke"}
]},

{type:"mc", q:"'Eles estudaram a noite toda' means:", opts:["They studied all night","They study all night","They will study all night","They were studying all night"], ans:"They studied all night", hint:"Estudaram is the plural preterite. The action is complete."},

{type:"fb", s:"Ontem eu {1} português por duas horas.", a:["estudei"], opts:["estudei","estudou","estudamos","estudaram"], hint:"Subject is eu, and the time marker ontem confirms the preterite.", sSrc:"Yesterday I {1} Portuguese for two hours."}
]},

{id:"ptv2_u13l2", title:"Regular -er and -ir Preterite", icon:"🍽️", xp:15, board:true, steps:[
{type:"intro", title:"Ate, Drank, Lived", desc:"Now you apply the preterite to the other two verb groups. Good news: -er and -ir verbs share the same endings in this tense.", goals:["Conjugate -er verbs in preterite","Conjugate -ir verbs in preterite","Recognize shared endings across -er and -ir"]},

{type:"tip", title:"Shared Endings",
 text:"The -er and -ir verbs use the SAME endings in the preterite:\n\ncomer: comi, comeu, comemos, comeram\nabrir: abri, abriu, abrimos, abriram\n\nOne pattern, two verb groups. Learn it once.",
 deepDive:{title:"Why They Merge", text:"In present tense, -er and -ir verbs differ (como vs abro). In preterite, Latin contracted both to the same set of endings. So once you know one -er preterite verb, you essentially know all -ir preterite verbs too. Portuguese rewards you for crossing the finish line."}},

{type:"verb_table", title:"Preterite: comer (to eat) and abrir (to open)",
 note:"Notice how comi and abri share the exact same pattern. Memorize once, apply everywhere.",
 groups:[{label:"comer", rows:[
   {pronoun:"eu", form:"comi", src:"I ate"},
   {pronoun:"você / ele / ela", form:"comeu", src:"you / he / she ate"},
   {pronoun:"nós", form:"comemos", src:"we ate"},
   {pronoun:"vocês / eles / elas", form:"comeram", src:"you all / they ate"}
 ]},{label:"abrir", rows:[
   {pronoun:"eu", form:"abri", src:"I opened"},
   {pronoun:"você / ele / ela", form:"abriu", src:"you / he / she opened"},
   {pronoun:"nós", form:"abrimos", src:"we opened"},
   {pronoun:"vocês / eles / elas", form:"abriram", src:"you all / they opened"}
 ]}]},

{type:"teach", trg:"comi", src:"I ate", pos:"verb", gender:null,
 note:"Preterite of comer for eu.\nShort, punchy, essential.",
 example:"A: Você já comeu?\nB: Já, eu comi no restaurante da esquina.\nA: E estava bom?\nB: Estava delicioso!",
 exampleSrc:"A: Have you eaten?\nB: Yes, I ate at the corner restaurant.\nA: And was it good?\nB: It was delicious!",
 funFact:"In Portuguese the preterite covers both 'I ate' and 'I have eaten'. One form, two English meanings."},

{type:"teach", trg:"comeu", src:"you / he / she ate", pos:"verb", gender:null,
 note:"Third person singular AND você form.\nVery common in daily conversation.",
 example:"A: O que a Ana comeu no almoço?\nB: Ela comeu arroz, feijão e frango.\nA: Clássico brasileiro!\nB: Não tem como errar.",
 exampleSrc:"A: What did Ana eat for lunch?\nB: She ate rice, beans, and chicken.\nA: Classic Brazilian!\nB: You cannot go wrong with that.",
 funFact:"The -eu ending rhymes with 'meu' (mine). A recognizable past-tense clue."},

{type:"teach", trg:"comeram", src:"they / you all ate", pos:"verb", gender:null,
 note:"Plural preterite for -er verbs.\nUsed with vocês, eles, elas.",
 example:"A: As crianças comeram tudo?\nB: Comeram sim, até pediram mais.\nA: Que bom que gostaram!\nB: Foi um sucesso.",
 exampleSrc:"A: Did the children eat everything?\nB: They did, they even asked for more.\nA: Glad they enjoyed it!\nB: It was a hit.",
 funFact:"In fast speech, Brazilians soften comeram to something like 'comerum'. The written form keeps the -aram."},

{type:"teach", trg:"abri", src:"I opened", pos:"verb", gender:null,
 note:"Preterite of abrir for eu.\nSame ending as -er verbs.",
 example:"A: Quem abriu a porta?\nB: Fui eu, eu abri quando ouvi a campainha.\nA: Era o carteiro?\nB: Sim, trouxe uma encomenda.",
 exampleSrc:"A: Who opened the door?\nB: It was me, I opened it when I heard the bell.\nA: Was it the mailman?\nB: Yes, he brought a package.",
 funFact:"Abrir shares its preterite pattern with partir, decidir, assistir, and dozens more -ir verbs."},

{type:"teach", trg:"abriu", src:"you / he / she opened", pos:"verb", gender:null,
 note:"Third person singular of abrir.\nEnds in -iu, like all -ir verbs.",
 example:"A: A loja abriu cedo hoje?\nB: Abriu às sete da manhã.\nA: Uau, mais cedo que o normal!\nB: É véspera de feriado.",
 exampleSrc:"A: Did the store open early today?\nB: It opened at seven in the morning.\nA: Wow, earlier than usual!\nB: It is the day before a holiday.",
 funFact:"The -iu ending sounds exactly like 'you' in English. Once you hear it, you cannot unhear it."},

{type:"teach", trg:"vivi", src:"I lived", pos:"verb", gender:null,
 note:"Preterite of viver for eu.\nUseful for talking about past residence.",
 example:"A: Onde você morou antes?\nB: Eu vivi em Portugal por cinco anos.\nA: E como foi?\nB: Muito bem, aprendi muito.",
 exampleSrc:"A: Where did you live before?\nB: I lived in Portugal for five years.\nA: And how was it?\nB: Very well, I learned a lot.",
 funFact:"Viver is often used for experiences, morar for residence. Vivi em Paris feels richer than morei em Paris."},

{type:"mc", q:"Choose the correct preterite of comer for eu:", opts:["comeu","comi","comemos","comeram"], ans:"comi", hint:"First person singular -er preterite drops everything except the -i."},

{type:"fb", s:"Nós {1} uma pizza enorme ontem à noite.", a:["comemos"], opts:["comemos","comi","comeram","comeu"], hint:"Subject is nós. Use the plural first person preterite of comer.", sSrc:"We {1} a huge pizza last night."},

{type:"mc", q:"'Ela abriu o presente' means:", opts:["She opens the gift","She opened the gift","She will open the gift","She has to open the gift"], ans:"She opened the gift", hint:"Abriu is the preterite. Single completed action in the past."},

{type:"fb", s:"Os vizinhos {1} a porta às seis da manhã.", a:["abriram"], opts:["abriram","abri","abriu","abrimos"], hint:"Os vizinhos is plural third person. Match the ending.", sSrc:"The neighbors {1} the door at six in the morning."},

{type:"match", pairs:[
  {trg:"eu comi", src:"I ate"},
  {trg:"ele abriu", src:"he opened"},
  {trg:"nós vivemos", src:"we lived"},
  {trg:"elas comeram", src:"they ate"}
]},

{type:"mc", q:"Which is the correct -ir preterite form for vocês?", opts:["abriu","abri","abriram","abrimos"], ans:"abriram", hint:"Vocês takes the plural third person ending in -aram, same shape as eles."},

{type:"fb", s:"Eu {1} em Lisboa por dois anos.", a:["vivi"], opts:["vivi","viveu","vivemos","viveram"], hint:"Subject is eu. Match with the -ir preterite eu ending.", sSrc:"I {1} in Lisbon for two years."},

{type:"teach", trg:"a semana passada", src:"last week", pos:"adv", gender:null,
 note:"Time expression paired with the preterite.\nSignals a finished stretch of time.",
 example:"A: Você viajou recentemente?\nB: Sim, viajei a semana passada.\nA: Para onde?\nB: Fui para o Rio.",
 exampleSrc:"A: Did you travel recently?\nB: Yes, I traveled last week.\nA: Where to?\nB: I went to Rio.",
 funFact:"Passada literally means 'passed'. Portuguese calls last week 'the passed week'. Poetic, no?"},

{type:"mc", q:"'A semana passada eu comi sushi' means:", opts:["Last week I ate sushi","Next week I will eat sushi","I eat sushi weekly","I ate sushi today"], ans:"Last week I ate sushi", hint:"A semana passada is the time marker. Comi is the completed action."}
]},

{id:"ptv2_u13l3", title:"Irregular Preterites", icon:"⚡", xp:15, board:true, steps:[
{type:"intro", title:"The Big Four Irregulars", desc:"Portuguese has several irregular preterites, but four are absolutely essential: ser, ir, fazer, and ter. Master these and you handle most past conversations.", goals:["Learn the shared ser/ir past forms","Use fazer in the past","Use ter in the past","Build full past-tense sentences"]},

{type:"tip", title:"Ser and Ir Share Past Forms",
 text:"Strange but true: ser (to be) and ir (to go) have identical preterite forms.\n\neu fui = I was / I went\nvocê foi = you were / you went\nnós fomos = we were / we went\neles foram = they were / they went\n\nContext decides the meaning. Portuguese loves efficiency.",
 deepDive:{title:"Why They Merge", text:"In Latin, 'fui' was the perfect of 'esse' (to be). When Vulgar Latin absorbed 'ire' (to go), it borrowed the same perfect forms. Portuguese inherited this historical merge. Eu fui ao mercado (I went to the market) and eu fui feliz (I was happy) use identical verb forms but different prepositions and complements to disambiguate."}},

{type:"verb_table", title:"Preterite: ser/ir (shared forms)",
 note:"One conjugation, two verbs. Context tells you whether it is 'was' or 'went'.",
 groups:[{label:"ser / ir", rows:[
   {pronoun:"eu", form:"fui", src:"I was / went"},
   {pronoun:"você / ele / ela", form:"foi", src:"you / he / she was / went"},
   {pronoun:"nós", form:"fomos", src:"we were / went"},
   {pronoun:"vocês / eles / elas", form:"foram", src:"you all / they were / went"}
 ]}]},

{type:"teach", trg:"fui", src:"I was / I went", pos:"verb", gender:null,
 note:"Preterite of BOTH ser and ir for eu.\nContext decides which meaning.",
 example:"A: Onde você foi ontem?\nB: Eu fui à praia com a família.\nA: E como foi?\nB: Foi muito bem, foi ótimo.",
 exampleSrc:"A: Where did you go yesterday?\nB: I went to the beach with the family.\nA: And how was it?\nB: It was very good, it was great.",
 funFact:"In one conversation you can say 'fui' three times meaning went, was, and went again. Portuguese trusts context."},

{type:"teach", trg:"foi", src:"you / he / she was / went", pos:"verb", gender:null,
 note:"Third person singular of ser AND ir.\nExtremely high frequency in conversation.",
 example:"A: A festa foi boa?\nB: Foi ótima, todo mundo foi.\nA: Quem foi o DJ?\nB: Foi o Pedro.",
 exampleSrc:"A: Was the party good?\nB: It was great, everyone went.\nA: Who was the DJ?\nB: It was Pedro.",
 funFact:"Brazilians say 'foi' constantly. 'Foi show', 'foi massa', 'foi top'. Always past, always enthusiastic."},

{type:"teach", trg:"fomos", src:"we were / we went", pos:"verb", gender:null,
 note:"First person plural of ser AND ir.\nSounds like 'foh-mohs'.",
 example:"A: Vocês foram ao Rio?\nB: Sim, fomos em janeiro.\nA: E fomos à praia todos os dias.\nB: Foi muito bem.",
 exampleSrc:"A: Did you go to Rio?\nB: Yes, we went in January.\nA: And we went to the beach every day.\nB: It was very good.",
 funFact:"Fomos appears in both halves of almost every vacation story. It is the engine of Brazilian travel talk."},

{type:"teach", trg:"foram", src:"they / you all were / went", pos:"verb", gender:null,
 note:"Plural third person of ser AND ir.\nOne of the most common past verbs in Portuguese.",
 example:"A: Seus amigos foram ao restaurante?\nB: Foram todos, até o Paulo.\nA: E como foram?\nB: Foram muito bem, comeram muito.",
 exampleSrc:"A: Did your friends go to the restaurant?\nB: They all went, even Paulo.\nA: And how were they?\nB: They were very good, they ate a lot.",
 funFact:"Notice how fui, foi, fomos, foram all start with F. A handy clue when you are listening and catching only the beginning of the word."},

{type:"verb_table", title:"Preterite: fazer (to do/make)",
 note:"Fazer drops the -z and builds fiz. The é in fez distinguishes the third person singular.",
 groups:[{label:"fazer", rows:[
   {pronoun:"eu", form:"fiz", src:"I did / made"},
   {pronoun:"você / ele / ela", form:"fez", src:"you / he / she did / made"},
   {pronoun:"nós", form:"fizemos", src:"we did / made"},
   {pronoun:"vocês / eles / elas", form:"fizeram", src:"you all / they did / made"}
 ]}]},

{type:"teach", trg:"fiz", src:"I did / I made", pos:"verb", gender:null,
 note:"Preterite of fazer for eu.\nShort, strong, essential.",
 example:"A: O que você fez ontem?\nB: Eu fiz um bolo de chocolate.\nA: E quem comeu?\nB: Meu irmão comeu tudo sozinho.",
 exampleSrc:"A: What did you do yesterday?\nB: I made a chocolate cake.\nA: And who ate it?\nB: My brother ate it all by himself.",
 funFact:"Fiz is only three letters but opens a thousand stories. 'Eu fiz...' is the classic conversation starter."},

{type:"teach", trg:"fez", src:"you / he / she did / made", pos:"verb", gender:null,
 note:"Third person singular of fazer.\nRhymes with 'vez' (time/occasion).",
 example:"A: A Maria fez o jantar hoje?\nB: Fez sim, fez feijoada.\nA: Que sorte!\nB: E fez com carinho, deu pra sentir.",
 exampleSrc:"A: Did Maria make dinner today?\nB: She did, she made feijoada.\nA: How lucky!\nB: And she made it with love, you could feel it.",
 funFact:"Fez is the hinge word of countless Brazilian questions: 'O que ele fez?' (What did he do?) is a daily refrain."},

{type:"verb_table", title:"Preterite: ter (to have)",
 note:"Ter becomes tive in the past. Notice the stress shift and the -ive root that marks all irregular -er preterites.",
 groups:[{label:"ter", rows:[
   {pronoun:"eu", form:"tive", src:"I had"},
   {pronoun:"você / ele / ela", form:"teve", src:"you / he / she had"},
   {pronoun:"nós", form:"tivemos", src:"we had"},
   {pronoun:"vocês / eles / elas", form:"tiveram", src:"you all / they had"}
 ]}]},

{type:"teach", trg:"tive", src:"I had", pos:"verb", gender:null,
 note:"Preterite of ter for eu.\nUsed for past possession or past experiences.",
 example:"A: Você teve férias este ano?\nB: Tive sim, tive duas semanas em julho.\nA: Que maravilha!\nB: Descansei muito.",
 exampleSrc:"A: Did you have vacation this year?\nB: I did, I had two weeks in July.\nA: How wonderful!\nB: I rested a lot.",
 funFact:"Ter in preterite often means 'to experience'. 'Tive uma ideia' = 'I had an idea'. The lightbulb moment."},

{type:"teach", trg:"teve", src:"you / he / she had", pos:"verb", gender:null,
 note:"Third person singular of ter.\nRhymes with leve (light).",
 example:"A: O Pedro teve sorte no jogo?\nB: Teve muita sorte, ganhou!\nA: E você?\nB: Eu não tive tanta sorte.",
 exampleSrc:"A: Did Pedro have luck in the game?\nB: He had a lot of luck, he won!\nA: And you?\nB: I did not have as much luck.",
 funFact:"'Teve' sounds identical to the name Tevez. Portuguese-speaking football fans have a lot of fun with this coincidence."},

{type:"teach", trg:"já", src:"already / ever", pos:"adv", gender:null,
 note:"Preterite marker for completion.\nCan also form past-experience questions.",
 example:"A: Você já foi ao Rio?\nB: Já fui!\nA: E já comeu lá?\nB: Já! É a melhor coisa do mundo.",
 exampleSrc:"A: Have you ever been to Rio?\nB: I have been there!\nA: And have you eaten there?\nB: I have! It is the best thing in the world.",
 funFact:"Já has about ten meanings in Portuguese. 'Já' alone as a reply means 'already done' or 'right away'. Context is king."},

{type:"teach", trg:"ainda não", src:"not yet", pos:"adv", gender:null,
 note:"Negates a completed action.\nOften answers questions with já.",
 example:"A: Você já almoçou?\nB: Ainda não, estou com fome.\nA: Vamos almoçar juntos?\nB: Ótima ideia!",
 exampleSrc:"A: Have you had lunch yet?\nB: Not yet, I am hungry.\nA: Shall we have lunch together?\nB: Great idea!",
 funFact:"Ainda não is the polite way to say 'no'. Softer than simply 'não', it implies the action is still on the way."},

{type:"mc", q:"'Eu fui ao cinema ontem' means:", opts:["I went to the cinema yesterday","I go to the cinema yesterday","I will go to the cinema yesterday","I was going to the cinema yesterday"], ans:"I went to the cinema yesterday", hint:"Fui is the preterite of ir. Ontem is the past time marker."},

{type:"fb", s:"O que você {1} no final de semana?", a:["fez"], opts:["fez","fiz","fizemos","fizeram"], hint:"Você takes the third person singular of fazer in the preterite.", sSrc:"What did you {1} on the weekend?"},

{type:"mc", q:"Which sentence is correct?", opts:["Nós fomos à praia ontem","Nós foi à praia ontem","Nós fui à praia ontem","Nós foram à praia ontem"], ans:"Nós fomos à praia ontem", hint:"___ is first person plural. Use the -mos form of ir/ser."},

{type:"fb", s:"Ontem eu {1} um problema com o carro.", a:["tive"], opts:["tive","teve","tivemos","tiveram"], hint:"Subject is eu, past tense of ter, irregular stem.", sSrc:"Yesterday I {1} a problem with the car."},

{type:"mc", q:"Which answer pairs correctly with 'Você já comeu?'", opts:["Já, comi em casa","Já, como em casa","Ainda não foi","Já vai"], ans:"Já, comi em casa", hint:"Já calls for a completed preterite. Match the tense."},

{type:"match", pairs:[
  {trg:"eu fui", src:"I went / was"},
  {trg:"ela fez", src:"she did / made"},
  {trg:"nós tivemos", src:"we had"},
  {trg:"eles foram", src:"they went / were"}
]},

{type:"mc", q:"'No ano passado' means:", opts:["Last year","Next year","This year","Every year"], ans:"Last year", hint:"Passado means 'passed' or 'gone by'. Another preterite time marker."},

{type:"fb", s:"No ano passado nós {1} para a Europa.", a:["fomos"], opts:["fomos","fui","foi","foram"], hint:"Subject is nós, and the time marker is past. Use first person plural of ir.", sSrc:"Last year we {1} to Europe."},

{type:"teach", trg:"no ano passado", src:"last year", pos:"adv", gender:null,
 note:"Time phrase for the preterite.\nSignals a completed year.",
 example:"A: Quando você se casou?\nB: Eu me casei no ano passado.\nA: Parabéns!\nB: Obrigado, foi lindo.",
 exampleSrc:"A: When did you get married?\nB: I got married last year.\nA: Congratulations!\nB: Thank you, it was beautiful.",
 funFact:"Portuguese says 'no ano passado' with the article no. Unlike English, the year is always 'the' in Portuguese time phrases."},

{type:"mc", q:"'Vocês já foram ao Brasil?' is asking:", opts:["Have you all ever been to Brazil?","Are you going to Brazil?","Will you go to Brazil?","Do you go to Brazil?"], ans:"Have you all ever been to Brazil?", hint:"Já + preterite often translates as 'have ___' in English."}
,

{type:"match", pairs:[
  {trg:"a semana passada", src:"last week"},
  {trg:"fiz", src:"I did / I made"},
  {trg:"teve", src:"you / he / she had"},
  {trg:"no ano passado", src:"last year"}
]}]}

]}; export default UNIT_13;
