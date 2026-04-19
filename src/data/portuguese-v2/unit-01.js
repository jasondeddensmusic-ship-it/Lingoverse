// Unit 1 — Olá! Como vai?
// First Greetings & Self-Introduction

const UNIT_01 = {n:1,lang:"pt",srcLang:"en",track:"v2",title:"Olá! Como vai?",sub:"First Greetings",icon:"👋",level:"A1.1",color:"#7B5EE8",lessons:[
  {id:"ptv2_u1l1",title:"Bom dia!",icon:"☀️",xp:15,board:true,steps:[
    {type:"intro",title:"Bom dia!",desc:"Your first Brazilian Portuguese greetings. Learn to greet people at any time of day.",goals:["Say hello in Portuguese","Use time-appropriate greetings","Know when to use each greeting"]},
    {type:"teach",trg:"olá",src:"hello",pos:"intj",gender:null,note:"Universal greeting. Works any time of day, in any situation.",example:"A: Olá!\nB: Olá! Tudo bem?",exampleSrc:"A: Hello!\nB: Hello! All good?",funFact:"Portuguese has about 260 million speakers worldwide. Brazil alone has over 210 million."},
    {type:"teach",trg:"oi",src:"hi",pos:"intj",gender:null,note:"Informal and warm. The go-to greeting in Brazil among friends.",example:"A: Oi! Tudo bem?\nB: Oi! Tudo!",exampleSrc:"A: Hi! All good?\nB: Hi! All good!",funFact:"Brazilians use oi much more than olá in daily life. It is the default friendly hello."},
    {type:"teach",trg:"bom dia",src:"good morning",pos:"intj",gender:null,note:"Used from sunrise until around noon. Bom is masculine because dia is masculine.",example:"A: Bom dia, Maria!\nB: Bom dia, João!",exampleSrc:"A: Good morning, Maria!\nB: Good morning, João!",funFact:"Dia means day. Bom dia literally translates to good day, but is used as good morning."},
    {type:"teach",trg:"boa tarde",src:"good afternoon",pos:"intj",gender:null,note:"Used from noon until sunset. Boa is feminine because tarde is feminine.",example:"A: Boa tarde, Ana!\nB: Boa tarde, João!",exampleSrc:"A: Good afternoon, Ana!\nB: Good afternoon, João!",funFact:"The switch from bom to boa is your first taste of Portuguese gender agreement."},
    {type:"teach",trg:"boa noite",src:"good evening / good night",pos:"intj",gender:null,note:"Used from sunset onward. Covers both hello at night and farewell before bed.",example:"A: Boa noite!\nB: Boa noite, Maria!",exampleSrc:"A: Good night!\nB: Good night, Maria!",funFact:"Noite is feminine, so it takes boa. In Portugal, the cutoff feels earlier than in Brazil."},
    {type:"tip",title:"Bom vs boa",text:"Bom dia uses bom (masculine) because dia is masculine.\nBoa tarde and boa noite use boa (feminine) because tarde and noite are feminine.\nThis gender agreement is core to Portuguese.",icon:"💡"},
    {type:"mc",q:"Which greeting works at ANY time of day?",opts:["Boa tarde","Olá","Bom dia","Boa noite"],ans:"Olá",hint:"This greeting has no time restriction at all."},
    {type:"mc",q:"At 3 PM in Rio, you would say:",opts:["Bom dia","Boa tarde","Boa noite","Bom noite"],ans:"Boa tarde",hint:"Afternoon falls between noon and sunset."},
    {type:"mc",q:"Why is it 'boa tarde' but 'bom dia'?",opts:["Tarde is plural","It is random","Tarde is feminine, dia is masculine","Dia is newer"],ans:"Tarde is feminine, dia is masculine",hint:"The adjective matches the gender of the noun it describes."},
    {type:"fb",opts:["Bom","Boa","Bem","Boi"],hint:"Morning greeting uses the masculine form.",s:"{1} dia, professor!",sSrc:"Good morning, teacher!",a:"Bom"},
    {type:"fb",opts:["tarde","dia","noite","manhã"],hint:"This word names the part of day from noon to sunset.",s:"Boa {1}!",sSrc:"Good afternoon!",a:"tarde"},
    {type:"match",pairs:[{trg:"olá",src:"hello (anytime)"},{trg:"oi",src:"hi (informal)"},{trg:"bom dia",src:"good morning"},{trg:"boa tarde",src:"good afternoon"},{trg:"boa noite",src:"good night"}]},
    {type:"mc",q:"At 9 PM, arriving at a restaurant, you say:",opts:["Boa noite","Boa tarde","Bom dia","Bom noite"],ans:"Boa noite",hint:"9 PM is well after sunset."},
    {type:"mc",q:"Which greeting is the most casual among Brazilian friends?",opts:["Bom dia","Boa tarde","Oi","Boa noite"],ans:"Oi",hint:"Short, warm, informal. The Brazilian default."},
    {type:"fb",opts:["olá","oi","boa","bom"],hint:"Two-letter casual greeting used among friends.",s:"{1}! Tudo bem?",sSrc:"Hi! All good?",a:"Oi"}
  ]},
  {id:"ptv2_u1l2",title:"Eu, você, ele, ela",icon:"👥",xp:15,board:true,steps:[
    {type:"intro",title:"Personal Pronouns",desc:"Learn the basic personal pronouns you will use in almost every sentence.",goals:["Use eu for I","Use você as Brazilian default for you","Tell he and she apart"]},
    {type:"teach",trg:"eu",src:"I",pos:"pron",gender:null,note:"Pronounced roughly like 'ey-oo'. Always lowercase unless starting a sentence.",example:"A: Quem é?\nB: Sou eu!",exampleSrc:"A: Who is it?\nB: It's me!",funFact:"Unlike English I, Portuguese eu is not capitalized in the middle of a sentence."},
    {type:"teach",trg:"você",src:"you",pos:"pron",gender:null,note:"Brazilian default for you. Works in most situations, formal and informal.",example:"A: Olá! Você é Ana?\nB: Sim, eu sou Ana.",exampleSrc:"A: Hello! Are you Ana?\nB: Yes, I am Ana.",funFact:"Você came from vossa mercê (your mercy), a respectful form that became the everyday you."},
    {type:"teach",trg:"ele",src:"he",pos:"pron",gender:null,note:"Used for males and male-gendered nouns. Pronounced like 'EH-lee'.",example:"A: Onde está João?\nB: Ele está em São Paulo.",exampleSrc:"A: Where is João?\nB: He is in São Paulo.",funFact:"Ele also replaces masculine objects, not just people. Portuguese is very gender-aware."},
    {type:"teach",trg:"ela",src:"she",pos:"pron",gender:null,note:"Used for females and female-gendered nouns. Pronounced like 'EH-lah'.",example:"A: Onde está Ana?\nB: Ela está em Brasília.",exampleSrc:"A: Where is Ana?\nB: She is in Brasília.",funFact:"The only difference between ele and ela is the final vowel. Masculine -e, feminine -a."},
    {type:"tip",title:"You in Portuguese",text:"Brazilians almost always use você for you.\nPortugal uses tu for informal you and você for semi-formal.\nIn Brazil, você fits nearly every situation.",icon:"💡"},
    {type:"mc",q:"To say 'I' in Portuguese, you use:",opts:["você","eu","ele","ela"],ans:"eu",hint:"The Portuguese first-person pronoun, pronounced 'ey-oo'."},
    {type:"mc",q:"In Brazil, the most common way to say 'you' is:",opts:["tu","ele","você","ela"],ans:"você",hint:"The Brazilian default, works in most settings."},
    {type:"mc",q:"Pointing at a man, you say:",opts:["ela","eu","você","ele"],ans:"ele",hint:"Masculine third-person pronoun."},
    {type:"fb",opts:["eu","ele","ela","você"],hint:"Pronoun for a woman or girl.",s:"{1} é professora.",sSrc:"She is a teacher.",a:"Ela"},
    {type:"fb",opts:["eu","você","ele","ela"],hint:"First-person singular pronoun.",s:"{1} falo português.",sSrc:"I speak Portuguese.",a:"Eu"},
    {type:"match",pairs:[{trg:"eu",src:"I"},{trg:"você",src:"you"},{trg:"ele",src:"he"},{trg:"ela",src:"she"}]},
    {type:"mc",q:"What tiny change turns 'he' into 'she' in Portuguese?",opts:["Add s","Change -e to -a","Add -s to the end","Nothing"],ans:"Change -e to -a",hint:"Compare ele and ela side by side. The first three letters are identical. Only the final letter differs."},
    {type:"fb",opts:["eu","ela","ele","você"],hint:"You are asking the person in front of you directly.",s:"{1} fala inglês?",sSrc:"Do you speak English?",a:"Você"},
    {type:"mc",q:"Which pronoun is capitalized in English but not in Portuguese?",opts:["ele","ela","eu","você"],ans:"eu",hint:"In English this word is always uppercase. In Portuguese, only at sentence start."}
  ]},
  {id:"ptv2_u1l3",title:"Ser e estar",icon:"⚖️",xp:15,board:true,steps:[
    {type:"intro",title:"Two Verbs for 'to be'",desc:"Portuguese has TWO verbs for 'to be'. Ser is for permanent things, estar is for temporary states.",goals:["Know when to use ser","Know when to use estar","Understand the permanent vs temporary split"]},
    {type:"teach",trg:"ser",src:"to be (permanent)",pos:"verb",gender:null,note:"Used for identity, profession, origin, permanent traits. Who or what something is.",example:"A: Quem é você?\nB: Eu sou Ana.",exampleSrc:"A: Who are you?\nB: I am Ana.",funFact:"Ser comes from Latin 'esse', the same root as English 'essence'. It is about what something essentially IS."},
    {type:"teach",trg:"estar",src:"to be (temporary)",pos:"verb",gender:null,note:"Used for location, moods, current states, temporary conditions. How something is right now.",example:"A: Você está em São Paulo?\nB: Sim, eu estou.",exampleSrc:"A: Are you in São Paulo?\nB: Yes, I am.",funFact:"Estar comes from Latin 'stare', meaning to stand. It points to a current position or state."},
    {type:"tip",title:"Ser vs Estar — the core A1 rule",text:"Ser = permanent: nationality, profession, identity.\nExample: Eu sou médico. (I am a doctor.)\n\nEstar = temporary: mood, location, feelings.\nExample: Eu estou cansado. (I am tired.)",icon:"💡"},
    {type:"teach",trg:"sou",src:"I am (permanent)",pos:"verb",gender:null,note:"First-person singular of ser. Used for things that do not change.",example:"A: Eu sou Pedro.\nB: Eu sou do Brasil.",exampleSrc:"A: I am Pedro.\nB: I am from Brazil.",funFact:"Sou is short but carries the full meaning. Portuguese often drops the pronoun: just 'Sou Pedro'."},
    {type:"teach",trg:"estou",src:"I am (temporary)",pos:"verb",gender:null,note:"First-person singular of estar. Used for states that can change.",example:"A: Você está bem?\nB: Sim, estou bem!",exampleSrc:"A: Are you well?\nB: Yes, I am well!",funFact:"Brazilians often shorten estou to 'tô' in casual speech: 'Tô bem!'"},
    {type:"mc",q:"Which verb do you use for 'I am a doctor' (profession)?",opts:["estar","ter","ser","ir"],ans:"ser",hint:"Profession is a lasting identity, not a mood."},
    {type:"mc",q:"Which verb do you use for 'I am tired' (current mood)?",opts:["ser","ter","ir","estar"],ans:"estar",hint:"A mood can change in an hour. That points to the temporary verb."},
    {type:"fb",opts:["sou","estou","é","está"],hint:"Nationality is permanent. Use the ser form for 'I am'.",s:"Eu {1} brasileiro.",sSrc:"I am Brazilian.",a:"sou"},
    {type:"fb",opts:["sou","estou","é","está"],hint:"Feeling happy is a temporary state. Use the estar form.",s:"Eu {1} feliz hoje.",sSrc:"I am happy today.",a:"estou"},
    {type:"mc",q:"'I am at home' uses which verb?",opts:["ser","estar","ter","ir"],ans:"estar",hint:"Your location right now can change. That is the temporary verb."},
    {type:"mc",q:"Which sentence uses ser correctly?",opts:["Eu sou cansado.","Eu sou em casa.","Eu sou médico.","Eu sou feliz agora."],ans:"Eu sou médico.",hint:"Look for the one about permanent identity."},
    {type:"match",pairs:[{trg:"ser",src:"to be (permanent)"},{trg:"estar",src:"to be (temporary)"},{trg:"sou",src:"I am (permanent)"},{trg:"estou",src:"I am (temporary)"}]},
    {type:"fb",opts:["sou","estou","ser","estar"],hint:"Being a professor is a lasting identity.",s:"Eu {1} professor.",sSrc:"I am a professor.",a:"sou"},
    {type:"mc",q:"Brazilians often shorten 'estou' to:",opts:["só","tô","eu","sou"],ans:"tô",hint:"A casual one-syllable contraction of estou."}
  ]},
  {id:"ptv2_u1l4",title:"Me chamo...",icon:"🤝",xp:15,board:true,steps:[
    {type:"intro",title:"Introducing Yourself",desc:"Say your name, ask someone else's name, and use basic polite words.",goals:["Say your name with 'me chamo'","Say yes and no","Use obrigado and obrigada correctly"]},
    {type:"teach",trg:"chamar",src:"to call",pos:"verb",gender:null,note:"Used reflexively (me chamo) to say your name. Literally: I call myself.",example:"A: Como você se chama?\nB: Eu me chamo Lucas.",exampleSrc:"A: What is your name?\nB: My name is Lucas.",funFact:"Chamar also means to call out, to summon, or to phone someone."},
    {type:"teach",trg:"me chamo",src:"my name is",pos:"verb",gender:null,note:"Literally 'I call myself'. Most natural way to give your name.",example:"A: Oi! Me chamo Ana.\nB: Muito prazer, Ana!",exampleSrc:"A: Hi! My name is Ana.\nB: Very nice to meet you, Ana!",funFact:"You can also say 'Meu nome é Ana' (My name is Ana), but me chamo is more natural in Brazil."},
    {type:"teach",trg:"sim",src:"yes",pos:"adv",gender:null,note:"Simple affirmative. Nasal sound at the end.",example:"A: Você é Ana?\nB: Sim, eu sou Ana.",exampleSrc:"A: Are you Ana?\nB: Yes, I am Ana.",funFact:"Brazilians often answer questions by repeating the verb instead of just sim: 'Sou!' for 'Yes (I am)'."},
    {type:"teach",trg:"não",src:"no",pos:"adv",gender:null,note:"Simple negative. Nasal ão sound. Also used before verbs to make them negative.",example:"A: Você é Ana?\nB: Não, eu não sou Ana.",exampleSrc:"A: Are you Ana?\nB: No, I am not Ana.",funFact:"Não doubles as both 'no' and 'not'. Put it before a verb to negate: 'Não sou' means 'I am not'."},
    {type:"teach",trg:"obrigado",src:"thank you (male speaker)",pos:"intj",gender:"m",note:"Used when a man says thanks. Agrees with the speaker's gender.",example:"A: Boa tarde!\nB: Obrigado! Boa tarde!",exampleSrc:"A: Good afternoon!\nB: Thank you! Good afternoon!",funFact:"Obrigado literally means 'obliged'. You are acknowledging an obligation for the favor."},
    {type:"teach",trg:"obrigada",src:"thank you (female speaker)",pos:"intj",gender:"f",note:"Used when a woman says thanks. The -a ending matches feminine.",example:"A: Boa noite!\nB: Obrigada! Boa noite!",exampleSrc:"A: Good evening!\nB: Thank you! Good evening!",funFact:"The speaker's gender decides the ending, not the person being thanked. A woman always says obrigada."},
    {type:"tip",title:"Obrigado vs obrigada",text:"A man says obrigado.\nA woman says obrigada.\nThis is based on YOUR gender as speaker, not the listener's.",icon:"💡"},
    {type:"mc",q:"To say your name in Portuguese, you say:",opts:["Me chamo...","Eu sou chamar...","Você chama...","Ele chama..."],ans:"Me chamo...",hint:"Literally means 'I call myself'."},
    {type:"mc",q:"A woman saying 'thank you' says:",opts:["obrigado","obrigada","obrigados","obrigadas"],ans:"obrigada",hint:"The ending must match the speaker's gender. Feminine ending is -a."},
    {type:"mc",q:"A man saying 'thank you' says:",opts:["obrigada","obrigado","obrigadas","obrigados"],ans:"obrigado",hint:"Masculine ending is -o."},
    {type:"fb",opts:["sim","não","oi","olá"],hint:"The simple affirmative answer.",s:"{1}, eu falo português.",sSrc:"Yes, I speak Portuguese.",a:"Sim"},
    {type:"fb",opts:["sim","não","oi","obrigado"],hint:"Negation word. Use this to give a negative reply.",s:"{1}, eu falo inglês, mas nunca estudei francês.",sSrc:"No, I speak English, but I never studied French.",a:"Não"},
    {type:"fb",opts:["chamo","chama","chamar","chamamos"],hint:"First-person form of chamar, used for your own name.",s:"Eu me {1} Maria.",sSrc:"My name is Maria.",a:"chamo"},
    {type:"match",pairs:[{trg:"me chamo",src:"my name is"},{trg:"sim",src:"yes"},{trg:"não",src:"no"},{trg:"obrigado",src:"thank you (m)"},{trg:"obrigada",src:"thank you (f)"}]},
    {type:"mc",q:"Tchau is Portuguese for:",opts:["hello","good morning","bye","thanks"],ans:"bye",hint:"A short, casual farewell borrowed from Italian ciao."},
    {type:"teach",trg:"tchau",src:"bye",pos:"intj",gender:null,note:"Casual goodbye. Borrowed from Italian ciao. Very common in Brazil.",example:"A: Tchau, Maria!\nB: Tchau!",exampleSrc:"A: Bye, Maria!\nB: Bye!",funFact:"Brazilians often double it: 'Tchau tchau!' adds warmth and friendliness."},
    {type:"teach",trg:"até logo",src:"see you later",pos:"intj",gender:null,note:"Literally 'until soon'. Used when you expect to see the person again.",example:"A: Até logo, João!\nB: Até logo! Tchau!",exampleSrc:"A: See you later, João!\nB: See you later! Bye!",funFact:"Até means 'until'. You can combine it with other words: até amanhã (see you tomorrow), até breve (see you soon)."},
    {type:"fb",opts:["tchau","olá","sim","obrigado"],hint:"Informal farewell, borrowed from Italian.",s:"{1}! Até amanhã!",sSrc:"Bye! See you tomorrow!",a:"Tchau"}
  ,

{type:"match", pairs:[
  {trg:"tchau", src:"bye"},
  {trg:"até logo", src:"see you later"}
]}]}
]}; export default UNIT_01;
