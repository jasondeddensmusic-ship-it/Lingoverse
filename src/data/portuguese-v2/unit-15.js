const UNIT_15 = {n:15, lang:"pt", srcLang:"en", track:"v2", title:"Vou fazer...", sub:"Future Plans", icon:"🔮", level:"B1.1", color:"#7B5EE8", lessons:[

{id:"ptv2_u15l1", title:"Ir + Infinitive (Near Future)", icon:"🚀", xp:15, board:true, steps:[
{type:"intro", title:"The Everyday Future", desc:"Brazilians rarely use the formal future tense in conversation. They use ir + infinitive instead. Eu vou estudar. Ele vai sair. Simple, fast, native.", goals:["Conjugate ir for all persons","Form near future with ir + infinitive","Talk about weekend and tomorrow plans"]},

{type:"tip", title:"The Magic Formula",
 text:"ir (conjugated) + infinitive = I am going to + verb\n\neu vou sair (I am going to go out)\nvocê vai trabalhar (you are going to work)\nnós vamos comer (we are going to eat)\neles vão viajar (they are going to travel)\n\nThis covers 90% of future talk in Brazil.",
 deepDive:{title:"Why Not the Formal Future?", text:"Portuguese has two futures: the ir + infinitive construction (used constantly) and the inflected future (falarei, comerei). In Brazil, the inflected future sounds formal or literary. Everyday conversation, news, social media, even business meetings use vou falar, not falarei. You will still learn the formal future in Lesson 2 because you will read it, but you will speak with ir + infinitive nearly always."}},

{type:"verb_table", title:"ir (to go) — present tense, used for the near future",
 note:"Memorize these four forms cold. They unlock every future conversation in Brazil.",
 groups:[{label:"ir", rows:[
   {pronoun:"eu", form:"vou", src:"I am going"},
   {pronoun:"você / ele / ela", form:"vai", src:"you / he / she is going"},
   {pronoun:"nós", form:"vamos", src:"we are going"},
   {pronoun:"vocês / eles / elas", form:"vão", src:"you all / they are going"}
 ]}]},

{type:"teach", trg:"vou", src:"I am going", pos:"verb", gender:null,
 note:"Present of ir for eu.\nPaired with infinitive = near future.",
 example:"A: O que você vai fazer hoje?\nB: Eu vou estudar para a prova.\nA: Boa sorte!\nB: Obrigado, vou precisar.",
 exampleSrc:"A: What are you going to do today?\nB: I am going to study for the exam.\nA: Good luck!\nB: Thanks, I will need it.",
 funFact:"Vou is the most common way Brazilians announce any plan, from dinner to marriage. Three letters, infinite possibilities."},

{type:"teach", trg:"vai", src:"you / he / she is going", pos:"verb", gender:null,
 note:"Present of ir for você, ele, ela.\nExtremely high frequency.",
 example:"A: Ela vai vir para o jantar?\nB: Vai sim, já confirmou.\nA: Que bom!\nB: Vou fazer lasanha.",
 exampleSrc:"A: Is she going to come to dinner?\nB: She is, she already confirmed.\nA: Great!\nB: I am going to make lasagna.",
 funFact:"'Vai' also works as a standalone encouragement: 'Vai!' means 'Go for it!'. Tone changes everything."},

{type:"teach", trg:"vamos", src:"we are going / let's", pos:"verb", gender:null,
 note:"Present of ir for nós.\nAlso means 'let's' as suggestion.",
 example:"A: Vamos sair hoje à noite?\nB: Vamos! Onde?\nA: Vamos ao cinema?\nB: Perfeito.",
 exampleSrc:"A: Shall we go out tonight?\nB: Let's! Where?\nA: Shall we go to the cinema?\nB: Perfect.",
 funFact:"Vamos alone is the most enthusiastic word in Portuguese. It can mean 'we are going', 'let's go', 'come on', or just 'yes!'."},

{type:"teach", trg:"vão", src:"they / you all are going", pos:"verb", gender:null,
 note:"Present of ir for vocês, eles, elas.\nNasal ã sound.",
 example:"A: Seus amigos vão para a festa?\nB: Vão todos.\nA: E você?\nB: Eu também vou.",
 exampleSrc:"A: Are your friends going to the party?\nB: They are all going.\nA: And you?\nB: I am going too.",
 funFact:"The ã in vão is one of the most distinctive Portuguese sounds. It has no English equivalent."},

{type:"teach", trg:"vou sair", src:"I am going to go out", pos:"verb", gender:null,
 note:"ir + infinitive construction.\nNear future, plans, intentions.",
 example:"A: O que você vai fazer agora?\nB: Vou sair para jantar.\nA: Com quem?\nB: Com a Ana.",
 exampleSrc:"A: What are you going to do now?\nB: I am going to go out for dinner.\nA: With whom?\nB: With Ana.",
 funFact:"The full construction 'vou sair' is one breath in Brazilian speech, almost glued together: 'vousair'."},

{type:"teach", trg:"vai chover", src:"it is going to rain", pos:"verb", gender:null,
 note:"Weather prediction with ir + infinitive.\nExtremely common.",
 example:"A: Você vai levar guarda-chuva?\nB: Vou sim, vai chover a tarde toda.\nA: Que chato!\nB: Mas faz bem para as plantas.",
 exampleSrc:"A: Are you going to take an umbrella?\nB: Yes, it is going to rain all afternoon.\nA: What a bummer!\nB: But it is good for the plants.",
 funFact:"Brazilians check the weather and say 'vai chover' constantly. A national greeting during summer."},

{type:"teach", trg:"amanhã", src:"tomorrow", pos:"adv", gender:null,
 note:"Classic future time marker.\nPairs with ir + infinitive.",
 example:"A: O que você vai fazer amanhã?\nB: Amanhã vou trabalhar até tarde.\nA: E depois?\nB: Depois vou descansar.",
 exampleSrc:"A: What are you going to do tomorrow?\nB: Tomorrow I am going to work late.\nA: And after?\nB: After I am going to rest.",
 funFact:"Amanhã comes from Latin 'ad mane' (towards morning). Literally 'towards the next morning'. Poetic, as always."},

{type:"mc", q:"Choose the correct near future for eu:", opts:["vai estudar","vou estudar","vamos estudar","vão estudar"], ans:"vou estudar", hint:"First person singular of ir + the infinitive."},

{type:"mc", q:"'Nós vamos viajar amanhã' means:", opts:["We are going to travel tomorrow","We travel every day","We traveled yesterday","We can travel"], ans:"We are going to travel tomorrow", hint:"Vamos + infinitive + future time marker. Classic near future."},

{type:"fb", s:"Eles {1} chegar às oito da noite.", a:["vão"], opts:["vão","vai","vou","vamos"], hint:"Third person plural of ir. They + infinitive = they are going to.", sSrc:"They {1} arrive at eight at night."},

{type:"mc", q:"Which sentence describes a future plan?", opts:["Eu vou para o médico amanhã","Eu fui para o médico ontem","Eu vou para o médico agora","Eu ia para o médico"], ans:"Eu vou para o médico amanhã", hint:"___ + amanhã = future plan. Ontem and agora rule out the future."},

{type:"fb", s:"Ela {1} trabalhar no sábado.", a:["vai"], opts:["vai","vou","vamos","vão"], hint:"Ela is third person singular. Match with the ___ form.", sSrc:"She {1} work on Saturday."},

{type:"match", pairs:[
  {trg:"eu vou estudar", src:"I am going to study"},
  {trg:"nós vamos sair", src:"we are going to go out"},
  {trg:"ele vai viajar", src:"he is going to travel"},
  {trg:"eles vão comer", src:"they are going to eat"}
]},

{type:"mc", q:"'Vamos ao cinema?' is:", opts:["A suggestion (Shall we go to the cinema?)","A past action","A question about yesterday","An order"], ans:"A suggestion (Shall we go to the cinema?)", hint:"Vamos + noun question mark often invites: let's do X?"},

{type:"fb", s:"Amanhã eu {1} acordar cedo para correr.", a:["vou"], opts:["vou","vai","vamos","vão"], hint:"Eu + near future. Use the eu form of ir.", sSrc:"Tomorrow I {1} wake up early to run."},

{type:"mc", q:"Which is the most natural Brazilian way to say 'I will call you tomorrow'?", opts:["Vou te ligar amanhã","Ligarei para você amanhã","Eu ligo amanhã","Ligava amanhã"], ans:"Vou te ligar amanhã", hint:"Brazilians prefer ir + infinitive for spoken future. It feels alive."}
]},

{id:"ptv2_u15l2", title:"Formal Future and Intention Verbs", icon:"📖", xp:15, board:true, steps:[
{type:"intro", title:"The Literary Future", desc:"The inflected future (falarei, comerei) is still used in writing, news, and formal contexts. You also meet pretender, planejar, and penso em, which add nuance to plans.", goals:["Conjugate the regular future tense","Recognize irregular future forms","Use pretendo, planejo, penso em"]},

{type:"tip", title:"Regular Future Endings",
 text:"Add these endings to the full infinitive:\n\n-ei (eu), -á (você/ele), -emos (nós), -ão (vocês/eles)\n\nfalar > falarei, falará, falaremos, falarão\ncomer > comerei, comerá, comeremos, comerão\npartir > partirei, partirá, partiremos, partirão\n\nThe stem is the full verb. Never drop the -ar, -er, or -ir.",
 deepDive:{title:"Three Irregulars Only", text:"Only three verbs have irregular future stems: fazer (farei, fará, faremos, farão), dizer (direi, dirá, diremos, dirão), and trazer (trarei, trará, traremos, trarão). Everything else uses the infinitive + endings. Three irregulars, hundreds of regulars. Portuguese rewards memorization with simplicity."}},

{type:"verb_table", title:"Regular Future: falar, comer, partir",
 note:"All three verb classes use the SAME endings. Only the infinitive stem changes.",
 groups:[{label:"falar", rows:[
   {pronoun:"eu", form:"falarei", src:"I will speak"},
   {pronoun:"você / ele / ela", form:"falará", src:"you / he / she will speak"},
   {pronoun:"nós", form:"falaremos", src:"we will speak"},
   {pronoun:"vocês / eles / elas", form:"falarão", src:"you all / they will speak"}
 ]},{label:"comer", rows:[
   {pronoun:"eu", form:"comerei", src:"I will eat"},
   {pronoun:"você / ele / ela", form:"comerá", src:"you / he / she will eat"},
   {pronoun:"nós", form:"comeremos", src:"we will eat"},
   {pronoun:"vocês / eles / elas", form:"comerão", src:"you all / they will eat"}
 ]}]},

{type:"teach", trg:"falarei", src:"I will speak", pos:"verb", gender:null,
 note:"Formal future of falar for eu.\nAccent on the last syllable.",
 example:"A: Falarei com o diretor amanhã.\nB: Muito bem, depois me conte.\nA: Pode deixar.\nB: Boa sorte!",
 exampleSrc:"A: I will speak with the director tomorrow.\nB: Very well, tell me afterwards.\nA: You can count on it.\nB: Good luck!",
 funFact:"Falarei is the formal future. In a business email it feels professional. In bar conversation it feels like a theatrical actor showed up."},

{type:"teach", trg:"comerei", src:"I will eat", pos:"verb", gender:null,
 note:"Formal future of comer for eu.\nWritten accent on final syllable.",
 example:"A: Amanhã comerei só saladas.\nB: Sério? Por quê?\nA: Para emagrecer.\nB: Coragem!",
 exampleSrc:"A: Tomorrow I will eat only salads.\nB: Seriously? Why?\nA: To lose weight.\nB: Good luck with that!",
 funFact:"The formal future adds solemnity. 'Eu comerei essa salada' sounds like a dramatic vow. 'Vou comer essa salada' sounds like a normal day."},

{type:"verb_table", title:"Irregular Future: fazer, dizer, trazer",
 note:"Only these three verbs are irregular in the future. The pattern drops the -ze- from the infinitive.",
 groups:[{label:"fazer", rows:[
   {pronoun:"eu", form:"farei", src:"I will do/make"},
   {pronoun:"você / ele / ela", form:"fará", src:"you / he / she will do/make"},
   {pronoun:"nós", form:"faremos", src:"we will do/make"},
   {pronoun:"vocês / eles / elas", form:"farão", src:"you all / they will do/make"}
 ]},{label:"dizer", rows:[
   {pronoun:"eu", form:"direi", src:"I will say"},
   {pronoun:"você / ele / ela", form:"dirá", src:"you / he / she will say"},
   {pronoun:"nós", form:"diremos", src:"we will say"},
   {pronoun:"vocês / eles / elas", form:"dirão", src:"you all / they will say"}
 ]}]},

{type:"teach", trg:"farei", src:"I will do / I will make", pos:"verb", gender:null,
 note:"Irregular future of fazer.\nDrops the -ze- from the infinitive.",
 example:"A: O que você fará na festa?\nB: Farei o bolo de aniversário.\nA: Ótimo, você faz tão bem!\nB: Obrigado.",
 exampleSrc:"A: What will you do at the party?\nB: I will make the birthday cake.\nA: Great, you make it so well!\nB: Thank you.",
 funFact:"Farei is common in news headlines: 'Governo fará reforma'. Short and authoritative."},

{type:"teach", trg:"direi", src:"I will say", pos:"verb", gender:null,
 note:"Irregular future of dizer.\nDrops the -ze- from the infinitive.",
 example:"A: Você direi a verdade a ele?\nB: Direi, embora seja difícil.\nA: É o certo.\nB: Eu sei.",
 exampleSrc:"A: Will you tell him the truth?\nB: I will, even though it is hard.\nA: It is the right thing.\nB: I know.",
 funFact:"Direi carries weight. In courtrooms and novels you see it often. In casual chat, Brazilians say 'vou dizer' instead."},

{type:"teach", trg:"pretendo", src:"I intend / I plan to", pos:"verb", gender:null,
 note:"Pretender + infinitive = to intend to.\nExpresses serious intention.",
 example:"A: O que você pretende fazer depois da faculdade?\nB: Pretendo viajar pela Europa.\nA: Que sonho!\nB: Estou economizando.",
 exampleSrc:"A: What do you plan to do after college?\nB: I intend to travel around Europe.\nA: What a dream!\nB: I am saving up.",
 funFact:"Pretendo is the classic interview verb. 'O que você pretende?' is the Brazilian 'Where do you see yourself in five years?'."},

{type:"teach", trg:"planejo", src:"I plan", pos:"verb", gender:null,
 note:"Planejar + infinitive.\nMore concrete than pretendo, often paired with a timeline.",
 example:"A: Você planeja se mudar em breve?\nB: Planejo mudar em janeiro.\nA: Por que janeiro?\nB: Começo novo trabalho.",
 exampleSrc:"A: Are you planning to move soon?\nB: I plan to move in January.\nA: Why January?\nB: I start a new job.",
 funFact:"Planejar is a cognate of 'plan'. Cool detail: the Portuguese word already existed before English borrowed it. Both come from Latin 'planus'."},

{type:"teach", trg:"penso em", src:"I am thinking of", pos:"verb", gender:null,
 note:"Pensar em + infinitive = to consider/think of.\nMore tentative than pretendo or planejo.",
 example:"A: Penso em voltar aos estudos.\nB: Por quê agora?\nA: Sinto falta.\nB: Então vai fundo!",
 exampleSrc:"A: I am thinking of going back to school.\nB: Why now?\nA: I miss it.\nB: Then go for it!",
 funFact:"Penso em is the softest of the three. It opens the door without walking through. The verb of daydreams."},

{type:"mc", q:"Choose the correct future for eu of comer:", opts:["comeria","comerei","comerá","comeremos"], ans:"comerei", hint:"First person singular future ends in -ei with accent."},

{type:"mc", q:"'Faremos uma festa no sábado' means:", opts:["We will have a party on Saturday","We made a party on Saturday","We would have a party on Saturday","We are having a party on Saturday"], ans:"We will have a party on Saturday", hint:"Faremos is the future. No bus, no past, just will."},

{type:"fb", s:"Eu {1} comprar uma casa no próximo ano.", a:["pretendo"], opts:["pretendo","planejo","penso em","vou"], hint:"Strong personal intention, not necessarily with a fixed date.", sSrc:"I {1} to buy a house next year."},

{type:"mc", q:"Which sentence uses the irregular future correctly?", opts:["Ele farei amanhã","Ele fará amanhã","Ele fazerá amanhã","Ele fez amanhã"], ans:"Ele fará amanhã", hint:"Fazer is irregular: farei, fará, faremos, farão. Drop the -ze-."},

{type:"fb", s:"Nós {1} na conferência no mês que vem.", a:["falaremos"], opts:["falaremos","falarei","falarão","falava"], hint:"First person plural future of falar.", sSrc:"We {1} at the conference next month."},

{type:"match", pairs:[
  {trg:"eu pretendo", src:"I intend to"},
  {trg:"eu planejo", src:"I plan to"},
  {trg:"eu penso em", src:"I am thinking of"},
  {trg:"eu farei", src:"I will do"}
]},

{type:"mc", q:"'Ela dirá a verdade' means:", opts:["She will tell the truth","She told the truth","She tells the truth","She would tell the truth"], ans:"She will tell the truth", hint:"Dirá is the irregular future of dizer."},

{type:"fb", s:"Eu {1} em mudar de carreira.", a:["penso"], opts:["penso","pretendo","planejo","vou"], hint:"Tentative consideration, not a concrete plan yet.", sSrc:"I {1} of changing careers."},

{type:"mc", q:"Which expresses a strong, firm plan with date?", opts:["Planejo viajar em julho","Penso em viajar","Talvez eu viaje","Quero viajar"], ans:"Planejo viajar em julho", hint:"Planejar + concrete timeline = firm plan."}
]},

{id:"ptv2_u15l3", title:"Conditional: faria, gostaria", icon:"💭", xp:15, board:true, steps:[
{type:"intro", title:"The Polite Would", desc:"The condicional (would do, would like) is essential for politeness, hypotheticals, and soft requests. You also practice the full dance of future, intention, and conditional together.", goals:["Conjugate regular conditional","Use gostaria for polite wishes","Use faria for hypotheticals"]},

{type:"tip", title:"Conditional Endings",
 text:"Add to the FULL infinitive:\n\n-ia (eu), -ia (você/ele), -íamos (nós), -iam (vocês/eles)\n\nfalar > falaria, falaríamos, falariam\ncomer > comeria, comeríamos, comeriam\n\nJust like the imperfect endings, but attached to the infinitive instead of the stem.",
 deepDive:{title:"Conditional vs Imperfect", text:"They look similar but work differently. Imperfect: stem + ia (eu comia = I used to eat). Conditional: full infinitive + ia (eu comeria = I would eat). The trick: if -ria- is present, it is the conditional. If just -ia- on a shorter stem, it is the imperfect. Once you see the pattern, you never confuse them again."}},

{type:"verb_table", title:"Regular Conditional: falar and comer",
 note:"Same three irregulars as the future: fazer (faria), dizer (diria), trazer (traria). Everything else is regular.",
 groups:[{label:"falar", rows:[
   {pronoun:"eu", form:"falaria", src:"I would speak"},
   {pronoun:"você / ele / ela", form:"falaria", src:"you / he / she would speak"},
   {pronoun:"nós", form:"falaríamos", src:"we would speak"},
   {pronoun:"vocês / eles / elas", form:"falariam", src:"you all / they would speak"}
 ]},{label:"comer", rows:[
   {pronoun:"eu", form:"comeria", src:"I would eat"},
   {pronoun:"você / ele / ela", form:"comeria", src:"you / he / she would eat"},
   {pronoun:"nós", form:"comeríamos", src:"we would eat"},
   {pronoun:"vocês / eles / elas", form:"comeriam", src:"you all / they would eat"}
 ]}]},

{type:"teach", trg:"gostaria", src:"I / you / he / she would like", pos:"verb", gender:null,
 note:"Conditional of gostar.\nThe politeness engine of Portuguese.",
 example:"A: O que você gostaria de tomar?\nB: Eu gostaria de um café, por favor.\nA: Com leite?\nB: Sim, obrigado.",
 exampleSrc:"A: What would you like to drink?\nB: I would like a coffee, please.\nA: With milk?\nB: Yes, thank you.",
 funFact:"Gostaria is the golden ticket in any restaurant or shop. It instantly turns you from tourist to polite guest."},

{type:"teach", trg:"gostaríamos", src:"we would like", pos:"verb", gender:null,
 note:"First person plural conditional.\nAccent on í.",
 example:"A: O que vocês gostariam de comer?\nB: Nós gostaríamos de duas pizzas, por favor.\nA: Que sabores?\nB: Uma margherita e uma calabresa.",
 exampleSrc:"A: What would you like to eat?\nB: We would like two pizzas, please.\nA: What flavors?\nB: One margherita and one calabresa.",
 funFact:"Calabresa pizza, topped with sausage, is the unofficial pizza of Brazil. Polite tourists order it in the conditional."},

{type:"teach", trg:"faria", src:"I / you / he / she would do", pos:"verb", gender:null,
 note:"Irregular conditional of fazer.\nDrops -ze- like the future.",
 example:"A: O que você faria no meu lugar?\nB: Eu falaria com ela.\nA: Você acha?\nB: Com certeza.",
 exampleSrc:"A: What would you do in my place?\nB: I would talk to her.\nA: You think so?\nB: For sure.",
 funFact:"'No meu lugar' (in my place) is the classic setup for the conditional. Asking for advice demands the 'would' form."},

{type:"teach", trg:"diria", src:"I / you / he / she would say", pos:"verb", gender:null,
 note:"Irregular conditional of dizer.\nDrops -ze- from infinitive.",
 example:"A: O que ele diria se soubesse?\nB: Ele diria a verdade.\nA: Tem certeza?\nB: Conheço meu amigo.",
 exampleSrc:"A: What would he say if he knew?\nB: He would tell the truth.\nA: Are you sure?\nB: I know my friend.",
 funFact:"Eu diria... introduces gentle opinions. 'Eu diria que...' is the Brazilian 'I would say that...'."},

{type:"teach", trg:"poderia", src:"could / would be able to", pos:"verb", gender:null,
 note:"Conditional of poder.\nUsed for polite requests and hypotheticals.",
 example:"A: Você poderia me ajudar?\nB: Claro, com o quê?\nA: Com a mudança.\nB: Sem problemas.",
 exampleSrc:"A: Could you help me?\nB: Sure, with what?\nA: With the move.\nB: No problem.",
 funFact:"Poderia is the magic request word. 'Poderia me passar o sal?' is 10x more polite than 'me passa o sal'."},

{type:"teach", trg:"viajaria", src:"I / you / he / she would travel", pos:"verb", gender:null,
 note:"Conditional of viajar.\nFor hypothetical trips.",
 example:"A: Se você pudesse, para onde viajaria?\nB: Viajaria para o Japão.\nA: Por que o Japão?\nB: Sempre sonhei.",
 exampleSrc:"A: If you could, where would you travel?\nB: I would travel to Japan.\nA: Why Japan?\nB: I always dreamed of it.",
 funFact:"The daydream conditional. Every Brazilian has a 'para onde eu viajaria' list ready."},

{type:"teach", trg:"seria", src:"I / you / he / she would be", pos:"verb", gender:null,
 note:"Conditional of ser.\nPolite description of hypothetical states.",
 example:"A: Seria possível mudar a reserva?\nB: Um momento, vou verificar.\nA: Obrigado.\nB: Sim, seria possível.",
 exampleSrc:"A: Would it be possible to change the reservation?\nB: One moment, I will check.\nA: Thank you.\nB: Yes, it would be possible.",
 funFact:"'Seria possível...?' is the most elegant Portuguese request. Hotels, airlines, doctors all melt at these two words."},

{type:"mc", q:"Choose the correct conditional of gostar for eu:", opts:["gosto","gostava","gostaria","gostarei"], ans:"gostaria", hint:"Polite 'I would like' uses the conditional ending -ia."},

{type:"mc", q:"'Eu faria qualquer coisa por você' means:", opts:["I did everything for you","I do everything for you","I would do anything for you","I will do anything for you"], ans:"I would do anything for you", hint:"Faria is the conditional. 'Would' is the key English word."},

{type:"fb", s:"Você {1} me emprestar seu carro?", a:["poderia"], opts:["poderia","posso","pude","poderá"], hint:"Polite request with the conditional of poder.", sSrc:"{1} you lend me your car?"},

{type:"mc", q:"Which is the most polite way to order coffee?", opts:["Eu quero um café","Eu gostaria de um café","Me dá um café","Café, agora"], ans:"Eu gostaria de um café", hint:"Conditional of gostar is the polite form. The others sound blunt or demanding."},

{type:"fb", s:"Nós {1} de visitar o museu amanhã.", a:["gostaríamos"], opts:["gostaríamos","gostamos","gostaríamos","gostaram"], hint:"First person plural conditional of gostar. Accent on the í.", sSrc:"We {1} to visit the museum tomorrow."},

{type:"match", pairs:[
  {trg:"eu gostaria", src:"I would like"},
  {trg:"você poderia", src:"could you"},
  {trg:"ele faria", src:"he would do"},
  {trg:"nós viajaríamos", src:"we would travel"}
]},

{type:"mc", q:"'No seu lugar, eu diria a verdade' means:", opts:["In your place, I would tell the truth","In your place, I told the truth","In your place, I tell the truth","In your place, I will tell the truth"], ans:"In your place, I would tell the truth", hint:"Diria = conditional. Hypothetical advice in someone else's shoes."},

{type:"fb", s:"Se eu tivesse dinheiro, {1} para a Europa.", a:["viajaria"], opts:["viajaria","viajei","viajo","vou viajar"], hint:"Hypothetical condition + conditional result. Subject is eu.", sSrc:"If I had money, I {1} to Europe."},

{type:"mc", q:"Which answer is in the conditional?", opts:["Ele comeu","Ele come","Ele comerá","Ele comeria"], ans:"Ele comeria", hint:"Conditional adds -ia to the full infinitive. 'Would eat' is the meaning."},

{type:"fb", s:"{1} possível falar com o gerente?", a:["Seria"], opts:["Seria","Era","Foi","É"], hint:"Polite hypothetical question: 'Would it be possible?'", sSrc:"{1} it be possible to speak with the manager?"},

{type:"mc", q:"'Ela gostaria de dançar com você' means:", opts:["She liked to dance with you","She would like to dance with you","She likes dancing with you","She will dance with you"], ans:"She would like to dance with you", hint:"Gostaria is the polite 'would like'. Conditional mood."}
,

{type:"match", pairs:[
  {trg:"falarei", src:"I will speak"},
  {trg:"direi", src:"I will say"},
  {trg:"diria", src:"I / you / he / she would say"}
]}]}

]}; export default UNIT_15;
