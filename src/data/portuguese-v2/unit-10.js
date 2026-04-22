const UNIT_10 = {n:10, lang:"pt", srcLang:"en", track:"v2", title:"Que trabalho você faz?", sub:"Professions and Office", icon:"💼", level:"A2.2", color:"#7B5EE8", lessons:[

{id:"ptv2_u10l1", title:"Profissões", icon:"👔", xp:15, board:true, steps:[
{type:"intro", title:"Talking about professions",
 desc:"Learning the words for jobs lets you introduce yourself and ask others about their work. Start with the most common professions and the nouns for work itself.",
 goals:["Learn work and profession nouns","Use masculine and feminine forms","Describe what someone does"]},

{type:"teach", trg:"o trabalho", src:"the work", pos:"noun", gender:"m",
 note:"Work, job. Masculine noun. Also the verb stem of trabalhar (to work).",
 example:"A: Como está o trabalho?\nB: Muito ocupado.\nA: Tem muito o que fazer?\nB: Sim, todos os dias.",
 exampleSrc:"A: How is work?\nB: Very busy.\nA: Do you have a lot to do?\nB: Yes, every day.",
 funFact:"From Latin 'tripalium', a three-pronged torture tool. Work was once seen as suffering."},

{type:"teach", trg:"a profissão", src:"the profession", pos:"noun", gender:"f",
 note:"Profession. Feminine noun ending in -ão. Plural: as profissões.",
 example:"A: Qual é a sua profissão?\nB: Sou professora.\nA: Gosta?\nB: Amo o que faço.",
 exampleSrc:"A: What is your profession?\nB: I am a teacher.\nA: Do you like it?\nB: I love what I do.",
 funFact:"'Profissão' ends in -ão but is feminine, unlike most -ão nouns which are masculine."},

{type:"teach", trg:"o médico", src:"the doctor (m)", pos:"noun", gender:"m",
 note:"Male doctor. Feminine form: a médica.",
 example:"A: Meu pai é médico.\nB: Em qual hospital?\nA: No hospital central.\nB: Que bom!",
 exampleSrc:"A: My father is a doctor.\nB: In which hospital?\nA: At the central hospital.\nB: How nice!",
 funFact:"In Brazil, 'doutor' is also used as a respectful form of address for doctors and lawyers alike."},

{type:"teach", trg:"a médica", src:"the doctor (f)", pos:"noun", gender:"f",
 note:"Female doctor. Note: professions change ending by gender.",
 example:"A: Minha mãe é médica.\nB: Há quanto tempo?\nA: Há dez anos.\nB: Que carreira longa!",
 exampleSrc:"A: My mother is a doctor.\nB: For how long?\nA: For twenty years.\nB: What a long career!",
 funFact:"Brazil has more female doctors than many countries. Over half of new medical graduates are women."},

{type:"teach", trg:"o professor", src:"the teacher (m)", pos:"noun", gender:"m",
 note:"Male teacher. Feminine form: a professora. Also means professor.",
 example:"A: Quem é o professor?\nB: O senhor Silva.\nA: É bom?\nB: Muito paciente.",
 exampleSrc:"A: Who is the teacher?\nB: Mr. Silva.\nA: Is he good?\nB: Very patient.",
 funFact:"From Latin 'professor', one who professes or declares publicly, originally in religious contexts."},

{type:"teach", trg:"a professora", src:"the teacher (f)", pos:"noun", gender:"f",
 note:"Female teacher. Very common profession word for all education levels.",
 example:"A: Sua professora é legal?\nB: Muito simpática.\nA: Ensina bem?\nB: Sim, aprendo muito.",
 exampleSrc:"A: Is your teacher nice?\nB: Very kind.\nA: Does she teach well?\nB: Yes, I learn a lot.",
 funFact:"'Tia' (aunt) is often used by small children to address their female teachers in Brazilian preschools."},

{type:"teach", trg:"o estudante", src:"the student", pos:"noun", gender:"m",
 note:"Student. Same form for male and female: o estudante, a estudante. Only the article changes.",
 example:"A: Você é estudante?\nB: Sim, de engenharia.\nA: Em qual universidade?\nB: Na USP.",
 exampleSrc:"A: Are you a student?\nB: Yes, of engineering.\nA: At which university?\nB: At USP.",
 funFact:"'Estudante' is common gender (m/f). 'Aluno/aluna' is another common word that does change form."},

{type:"teach", trg:"o engenheiro", src:"the engineer", pos:"noun", gender:"m",
 note:"Engineer (m). Feminine: a engenheira. Popular profession in Brazil.",
 example:"A: Meu irmão é engenheiro.\nB: De que tipo?\nA: Civil.\nB: Boa profissão!",
 exampleSrc:"A: My brother is an engineer.\nB: What type?\nA: Civil.\nB: Good profession!",
 funFact:"Engineering is one of Brazil's most prestigious careers, alongside medicine and law."},

{type:"teach", trg:"o advogado", src:"the lawyer", pos:"noun", gender:"m",
 note:"Lawyer (m). Feminine: a advogada. Note the silent 'd' in casual speech.",
 example:"A: Preciso de um advogado.\nB: Por que?\nA: Um contrato de trabalho.\nB: Conheço um bom.",
 exampleSrc:"A: I need a lawyer.\nB: What for?\nA: A work contract.\nB: I know a good one.",
 funFact:"Brazil has more law schools than any other country, producing around one hundred thousand new lawyers every year."},

{type:"tip", title:"Professions Without Article",
 text:"When stating your profession with the verb 'ser', Portuguese often drops the article:\n\nSou médico. (I am a doctor.)\nEla é professora. (She is a teacher.)\nSão estudantes. (They are students.)\n\nCompare with English, which keeps the 'a'. When describing a specific person, the article returns: 'O médico chegou' (The doctor arrived).",
 deepDive:{title:"Gendered Profession Endings",
  text:"Most profession nouns change ending by gender:\n\n-o / -a: médico / médica, advogado / advogada\n-or / -ora: professor / professora, doutor / doutora\n\nSome keep one form for both genders, only changing the article:\n\no/a estudante, o/a gerente, o/a jornalista\n\nWhen in doubt, the -o/-a pattern works for most Brazilian professions."}},

{type:"fb", s:"Ele é {1} e defende clientes no tribunal.",
 a:["advogado"],
 opts:["advogado","médico","estudante","professor"],
 hint:"The legal professional who argues cases in court.",
 sSrc:"He is a {1} and defends clients in court."},

{type:"fb", s:"Sou {1} de engenharia na USP.",
 a:["estudante"],
 opts:["estudante","médico","advogado","professor"],
 hint:"The noun for a person who studies. Same form for both genders.",
 sSrc:"I am a {1} of engineering at USP."},

{type:"mc", q:"How do you say 'I am a teacher' (female)?",
 opts:["Sou professora","Tenho professora","Estou professora","Sou professor"],
 ans:"Sou professora",
 hint:"Use the permanent 'to be' verb and the feminine ending -a."},

{type:"mc", q:"Which word means 'the engineer' (male)?",
 opts:["o advogado","o engenheiro","o médico","o professor"],
 ans:"o engenheiro",
 hint:"This profession designs bridges, buildings, or machines."},

{type:"fb", s:"Minha mãe é {1} e trabalha no hospital.",
 a:["médica"],
 opts:["médica","médico","engenheiro","advogado"],
 hint:"Use the feminine form of the profession for the mother.",
 sSrc:"My mother is a {1} and works at the hospital."},

{type:"match", pairs:[
 {trg:"médico", src:"doctor"},
 {trg:"professor", src:"teacher"},
 {trg:"advogado", src:"lawyer"},
 {trg:"engenheiro", src:"engineer"}
]},

{type:"mc", q:"Which profession noun is the same for male and female?",
 opts:["médico","advogado","estudante","professor"],
 ans:"estudante",
 hint:"This noun does not change its ending, only the article changes."},

{type:"fb", s:"Qual é a sua {1}?",
 a:["profissão"],
 opts:["profissão","trabalho","hospital","colega"],
 hint:"Asking what job someone has, the feminine noun for career.",
 sSrc:"What is your {1}?"}
]},

{id:"ptv2_u10l2", title:"No escritório", icon:"🏢", xp:15, board:true, steps:[
{type:"intro", title:"Office and company",
 desc:"Many Brazilians work in offices. Learn the words for office, company, meeting, and the colleagues and bosses you meet there.",
 goals:["Learn office and company vocabulary","Talk about meetings","Describe workplace relationships"]},

{type:"teach", trg:"o escritório", src:"the office", pos:"noun", gender:"m",
 note:"Office. Masculine noun. Refers to the workplace building or room.",
 example:"A: Vai ao escritório hoje?\nB: Sim, de manhã.\nA: E depois?\nB: Almoço no escritório.",
 exampleSrc:"A: Are you going to the office today?\nB: Yes, in the morning.\nA: And afterwards?\nB: Lunch with a client.",
 funFact:"From 'escrever' (to write). The office was historically the writing room of a business."},

{type:"teach", trg:"a empresa", src:"the company", pos:"noun", gender:"f",
 note:"Company, business, firm. Feminine noun.",
 example:"A: Onde você trabalha?\nB: Numa empresa grande.\nA: Gosta?\nB: Sim, o ambiente é bom.",
 exampleSrc:"A: Where do you work?\nB: At a big company.\nA: Do you like it?\nB: Yes, the atmosphere is good.",
 funFact:"From 'empreender' (to undertake). An 'empresa' is literally something you undertake."},

{type:"teach", trg:"a reunião", src:"the meeting", pos:"noun", gender:"f",
 note:"Meeting. Feminine noun ending in -ão. Plural: as reuniões.",
 example:"A: Tenho uma reunião às dez.\nB: Com quem?\nA: Com o chefe.\nB: Boa sorte!",
 exampleSrc:"A: I have a meeting at ten.\nB: With whom?\nA: With the boss.\nB: Good luck!",
 funFact:"From 'reunir' (to reunite, gather). A meeting is literally a gathering of people."},

{type:"teach", trg:"o colega", src:"the colleague", pos:"noun", gender:"m",
 note:"Colleague, coworker. Same form for male and female: o colega, a colega.",
 example:"A: Esse é meu colega.\nB: Prazer!\nA: Ele trabalha comigo.\nB: Em qual setor?",
 exampleSrc:"A: This is my colleague.\nB: Nice to meet you!\nA: He works with me.\nB: In which department?",
 funFact:"From Latin 'collega', 'one chosen together'. Now it means any work partner or classmate."},

{type:"teach", trg:"o chefe", src:"the boss", pos:"noun", gender:"m",
 note:"Boss, chief. Common gender: o chefe, a chefe. Feminine 'chefa' exists but is less used.",
 example:"A: Seu chefe é simpático?\nB: Sim, bem simpático.\nA: Mas justo?\nB: Sim, muito justo.",
 exampleSrc:"A: Is your boss nice?\nB: Quite demanding.\nA: But fair?\nB: Yes, very fair.",
 funFact:"From French 'chef' (head). Same root as 'chef de cuisine', the head of the kitchen."},

{type:"teach", trg:"o horário", src:"the schedule", pos:"noun", gender:"m",
 note:"Schedule, working hours. Masculine noun. Also means 'timetable'.",
 example:"A: Qual é o seu horário?\nB: Das nove às seis.\nA: É muito tempo.\nB: Mas gosto.",
 exampleSrc:"A: What is your schedule?\nB: From nine to six.\nA: That is a lot of time.\nB: But I like it.",
 funFact:"'Horário comercial' (business hours) in Brazil is typically 9am to 6pm, with one hour for lunch."},

{type:"teach", trg:"o salário", src:"the salary", pos:"noun", gender:"m",
 note:"Salary, wages. Masculine noun. Monthly pay for most Brazilian workers.",
 example:"A: O salário é bom?\nB: Razoável.\nA: Recebe quando?\nB: Todo dia cinco.",
 exampleSrc:"A: Is the salary good?\nB: Reasonable.\nA: When do you get paid?\nB: Every fifth of the month.",
 funFact:"From Latin 'salarium', salt money. Roman soldiers were partly paid in salt, which was valuable."},

{type:"tip", title:"Brazilian Work Culture Basics",
 text:"A few things to know about working in Brazil:\n\nHorário comercial is usually 9-18h with a lunch break.\nReuniões often start a few minutes late.\nColegas call each other by first name, even the chefe.\nThe thirteenth salary is a bonus paid in December.\n\nPersonal relationships matter as much as professional skills.",
 deepDive:{title:"Formal vs Informal at Work",
  text:"Brazilian workplaces are often less formal than European or North American ones. You will quickly be called by your first name, not your surname. However, titles like 'doutor' (for lawyers and doctors) or 'senhor' (for older or senior people) are used out of respect. Watch how your colleagues address the chefe and follow their lead."}},

{type:"fb", s:"Trabalho numa {1} internacional com cem funcionários.",
 a:["empresa"],
 opts:["empresa","reunião","salário","horário"],
 hint:"The word for a business or company. Feminine noun.",
 sSrc:"I work at an international {1} with one hundred employees."},

{type:"fb", s:"Recebi o {1} hoje, finalmente!",
 a:["salário"],
 opts:["salário","horário","escritório","colega"],
 hint:"The monthly pay from your job. Related to the Latin word for salt.",
 sSrc:"I received my {1} today, finally!"},

{type:"mc", q:"Where do people usually work in a city?",
 opts:["no escritório","no hospital","na escola","na farmácia"],
 ans:"no escritório",
 hint:"The word comes from 'escrever' (to write); it is the writing place."},

{type:"mc", q:"What does 'reunião' mean?",
 opts:["salary","meeting","company","vacation"],
 ans:"meeting",
 hint:"A gathering of people to discuss work topics."},

{type:"fb", s:"Meu {1} é muito exigente mas justo.",
 a:["chefe"],
 opts:["chefe","colega","médico","estudante"],
 hint:"The person who leads your team and gives you orders at work.",
 sSrc:"My {1} is very demanding but fair."},

{type:"match", pairs:[
 {trg:"escritório", src:"office"},
 {trg:"empresa", src:"company"},
 {trg:"reunião", src:"meeting"},
 {trg:"salário", src:"salary"}
]},

{type:"mc", q:"Which word means a coworker you see every day?",
 opts:["o cliente","o chefe","o colega","o médico"],
 ans:"o colega",
 hint:"A coworker of equal rank, from Latin 'collega'."},

{type:"fb", s:"Meu {1} de trabalho é das oito às cinco.",
 a:["horário"],
 opts:["horário","salário","escritório","colega"],
 hint:"The fixed times you start and end work each day.",
 sSrc:"My work {1} is from eight to five."},

{type:"mc", q:"'Trabalho numa empresa grande' means:",
 opts:["I own a big company","I see a big company","I visit a big company","I work at a big company"],
 ans:"I work at a big company",
 hint:"The verb is trabalho and the preposition 'numa' is in+a."}
]},

{id:"ptv2_u10l3", title:"Trabalhar e fazer", icon:"⚙️", xp:15, board:true, steps:[
{type:"intro", title:"Key work verbs",
 desc:"Two verbs are essential for talking about jobs: trabalhar (to work) and fazer (to do, make). Learn to conjugate and use them together.",
 goals:["Conjugate trabalhar in present","Use fazer for tasks","Ask and answer about daily work"]},

{type:"teach", trg:"trabalhar", src:"to work", pos:"verb", gender:null,
 note:"Regular -ar verb: trabalho, trabalha, trabalhamos, trabalham. Used with 'em' for location.",
 example:"A: Onde você trabalha?\nB: Trabalho num banco.\nA: Quantas horas?\nB: Oito por dia.",
 exampleSrc:"A: Where do you work?\nB: I work at a bank.\nA: How many hours?\nB: Eight a day.",
 funFact:"Shares the Latin 'tripalium' root with English 'travail'. Work and hardship share ancient roots."},

{type:"teach", trg:"fazer", src:"to do", pos:"verb", gender:null,
 note:"Irregular verb: faço, faz, fazemos, fazem. Means 'to do' or 'to make' depending on context.",
 example:"A: O que você faz?\nB: Sou professora.\nA: E seu marido?\nB: Ele é médico.",
 exampleSrc:"A: What do you do?\nB: I am a teacher.\nA: And your husband?\nB: He is a doctor.",
 funFact:"'O que você faz?' literally means 'What do you do?' but in context it often means 'What is your job?'"},

{type:"verb_table", title:"Trabalhar in the Present",
 groups:[
  {title:"Singular",
   rows:[
    {pronoun:"eu", form:"trabalho", src:"I work"},
    {pronoun:"você/ele/ela", form:"trabalha", src:"you/he/she work(s)"}
   ]},
  {title:"Plural",
   rows:[
    {pronoun:"nós", form:"trabalhamos", src:"we work"},
    {pronoun:"vocês/eles/elas", form:"trabalham", src:"you all/they work"}
   ]}
 ],
 note:"Trabalhar is a regular -ar verb. The same endings apply to almost all -ar verbs in Portuguese."},

{type:"verb_table", title:"Fazer in the Present",
 groups:[
  {title:"Singular",
   rows:[
    {pronoun:"eu", form:"faço", src:"I do/make"},
    {pronoun:"você/ele/ela", form:"faz", src:"you/he/she do(es)/make(s)"}
   ]},
  {title:"Plural",
   rows:[
    {pronoun:"nós", form:"fazemos", src:"we do/make"},
    {pronoun:"vocês/eles/elas", form:"fazem", src:"you all/they do/make"}
   ]}
 ],
 note:"Fazer is irregular only in 'eu faço'. The other forms follow an -er pattern."},

{type:"tip", title:"Asking About Jobs",
 text:"Two ways to ask about someone's job:\n\nQual é a sua profissão? (What is your profession?)\nO que você faz? (What do you do?)\n\nThe first is more formal. The second is casual and very common. You answer with 'Sou' plus the profession:\n\nSou médico. Sou professora. Sou engenheiro.\n\nNo article is needed when stating your profession with 'ser'.",
 deepDive:{title:"Trabalhar em vs Trabalhar como",
  text:"Two prepositions with 'trabalhar' mean different things:\n\nTrabalho num escritório. (I work in an office.) Location.\nTrabalho como advogado. (I work as a lawyer.) Role.\n\nSo 'trabalho como engenheiro numa empresa grande' combines both: the role and the place."}},

{type:"mc", q:"Which is the 'eu' form of 'fazer'?",
 opts:["faço","fazo","faze","faz"],
 ans:"faço",
 hint:"The 'eu' form is irregular and ends in -ço."},

{type:"mc", q:"How do you ask casually 'What do you do (for work)?'",
 opts:["Qual é o horário?","O que você faz?","Onde você trabalha?","Como você está?"],
 ans:"O que você faz?",
 hint:"This is the standard casual way to ask someone about their profession or daily activity."},

{type:"fb", s:"Eu {1} num hospital como enfermeira.",
 a:["trabalho"],
 opts:["trabalho","trabalha","faço","faz"],
 hint:"Use the 'eu' form of the verb meaning 'to work'.",
 sSrc:"I {1} at a hospital as a nurse."},

{type:"mc", q:"What does 'Nós trabalhamos juntos' mean?",
 opts:["They work here","I work alone","We work together","You work a lot"],
 ans:"We work together",
 hint:"Nós is 'we' and trabalhamos is the first person plural of trabalhar."},

{type:"fb", s:"O que a sua mãe {1}?",
 a:["faz"],
 opts:["faz","faço","fazem","trabalha"],
 hint:"The subject is 'a sua mãe'. Pick the third-person singular form of the irregular verb meaning 'to do'.",
 sSrc:"What does your mother {1}?"},

{type:"match", pairs:[
 {trg:"trabalho", src:"I work"},
 {trg:"faço", src:"I do"},
 {trg:"trabalham", src:"they work"},
 {trg:"fazemos", src:"we do"}
]},

{type:"mc", q:"Which answer correctly responds to 'O que você faz?'",
 opts:["Tenho professor","Estou professor","Faço professor","Sou professor"],
 ans:"Sou professor",
 hint:"Stating your profession uses the permanent 'to be' verb without an article."},

{type:"fb", s:"Eles {1} numa empresa de tecnologia.",
 a:["trabalham"],
 opts:["trabalham","trabalhamos","trabalho","faz"],
 hint:"Third-person plural of trabalhar with 'eles'.",
 sSrc:"They {1} at a technology company."}
,

{type:"match", pairs:[
  {trg:"trabalhar", src:"to work"}
]}]},

{id:"ptv2_u10l4_a2v", title:"Verbos A2 essenciais", icon:"📝", xp:15, board:true, steps:[
{type:"intro", title:"Essential A2 Verbs",
 desc:"Learn 7 essential A2 Brazilian Portuguese verbs: to need, to think, to believe, to hope, to decide, to prefer, to remember. Essential for CELPE-Bras A2 communication.",
 goals:["Master 7 core A2 mental verbs","Express opinions and preferences","Talk about decisions"]},

{type:"teach", trg:"precisar", src:"to need", pos:"verb", gender:null,
 note:"Regular -ar verb. Takes 'de' before a noun: preciso de ajuda. Without 'de' before an infinitive: preciso trabalhar.",
 example:"A: Você precisa de ajuda?\nB: Sim, preciso.\nA: O que você precisa?\nB: Preciso de mais tempo.",
 exampleSrc:"A: Do you need help?\nB: Yes, I do.\nA: What do you need?\nB: I need more time.",
 funFact:"In Brazil, 'precisar de' is the everyday choice. European Portuguese uses 'precisar de' and 'precisar' almost equally."},

{type:"teach", trg:"pensar", src:"to think", pos:"verb", gender:null,
 note:"Regular -ar verb: penso, pensa, pensamos, pensam. Used with 'em' (about) or 'que' (that) + clause.",
 example:"A: O que você pensa?\nB: Penso que é bom.\nA: Tem certeza?\nB: Sim, penso que sim.",
 exampleSrc:"A: What do you think?\nB: I think it is good.\nA: Are you sure?\nB: Yes, I think so.",
 funFact:"'Pensar' and 'achar' both mean 'to think' in Brazilian Portuguese. 'Acho que...' is extremely common in casual speech."},

{type:"teach", trg:"acreditar", src:"to believe", pos:"verb", gender:null,
 note:"Regular -ar verb. Use 'em' for people and things: acreditar em alguém. Use 'que' + clause: acredito que você está certo.",
 example:"A: Você acredita nisso?\nB: Sim, acredito.\nA: Por que?\nB: Porque os fatos mostram.",
 exampleSrc:"A: Do you believe that?\nB: Yes, I do.\nA: Why?\nB: Because the facts show it.",
 funFact:"'Acreditar' comes from Latin 'accreditare'. The prefix 'ac-' reinforces the idea of giving full credit to something."},

{type:"teach", trg:"esperar", src:"to hope / to wait", pos:"verb", gender:null,
 note:"Regular -ar verb. Means both 'to hope' and 'to wait for'. Context determines meaning: espero que sim (I hope so) vs espero o ônibus (I wait for the bus).",
 example:"A: Espero que você venha.\nB: Eu também espero.\nA: Vai ser divertido.\nB: Sim, espero que sim.",
 exampleSrc:"A: I hope you come.\nB: I hope so too.\nA: It will be fun.\nB: Yes, I hope so.",
 funFact:"The double meaning of hope and wait comes from Latin 'sperare'. In many Romance languages, hoping and waiting share the same verb."},

{type:"teach", trg:"decidir", src:"to decide", pos:"verb", gender:null,
 note:"Regular -ir verb: decido, decide, decidimos, decidem. Often used reflexively: se decidir (to make up your mind).",
 example:"A: Você decidiu?\nB: Ainda não.\nA: Precisa decidir logo.\nB: Eu sei, vou decidir hoje.",
 exampleSrc:"A: Did you decide?\nB: Not yet.\nA: You need to decide soon.\nB: I know, I will decide today.",
 funFact:"From Latin 'decidere', to cut off, meaning to cut away all other options. Deciding literally closes the door on alternatives."},

{type:"teach", trg:"preferir", src:"to prefer", pos:"verb", gender:null,
 note:"Stem-changing -ir verb: prefiro, prefere, preferimos, preferem. The stem vowel shifts e to i in 'eu' form only.",
 example:"A: Você prefere café ou chá?\nB: Prefiro café.\nA: Com leite?\nB: Sim, prefiro com leite.",
 exampleSrc:"A: Do you prefer coffee or tea?\nB: I prefer coffee.\nA: With milk?\nB: Yes, I prefer it with milk.",
 funFact:"'Preferir' has a stem change only in the 'eu' form: prefiro (not prefero). This is a common -ir pattern in Brazilian Portuguese."},

{type:"teach", trg:"lembrar", src:"to remember", pos:"verb", gender:null,
 note:"Regular -ar verb. Used alone (lembro disso) or reflexively (me lembro de tudo). Both forms are common in Brazilian Portuguese.",
 example:"A: Você lembra o nome?\nB: Não lembro.\nA: Era João ou José?\nB: Agora lembro, era João.",
 exampleSrc:"A: Do you remember the name?\nB: I do not remember.\nA: Was it João or José?\nB: Now I remember, it was João.",
 funFact:"'Me lembro' is more common in standard Brazilian Portuguese, while 'lembro' without 'me' is accepted in informal speech."},

{type:"tip", title:"Mental Verbs: Opinion and Decision",
 text:"These 7 verbs express mental states and decisions. They are core CELPE-Bras A2 vocabulary.\n\nAcredito que... (I believe that...)\nPenso que... (I think that...)\nEspero que... (I hope that...)\nPreciso de... (I need...)\nPrefiro... (I prefer...)\n\nAll but 'decidir' are regular -ar verbs. Only 'preferir' has a stem change in the 'eu' form: prefiro.",
 deepDive:{title:"Precisar: With or Without 'de'",
  text:"'Precisar' is one of the most useful A2 verbs but has a tricky choice:\n\nBefore a noun, use 'de':\nPreciso de dinheiro. (I need money.)\nPreciso de ajuda. (I need help.)\n\nBefore an infinitive, 'de' is often dropped:\nPreciso trabalhar. (I need to work.)\nPreciso decidir. (I need to decide.)\n\nIn informal Brazilian speech, 'de' is sometimes dropped before nouns too, but the form with 'de' is always safe and correct."}},

{type:"mc", q:"Which sentence correctly uses 'precisar'?",
 opts:["Preciso de ajuda","Preciso ajuda de","Preciso em ajuda","Ajuda precisar de"],
 ans:"Preciso de ajuda",
 hint:"This verb takes 'de' before a noun. First person singular form."},

{type:"fb", s:"Eu {1} que ela está certa.",
 a:["acredito"],
 opts:["acredito","espero","lembro","decido"],
 hint:"The verb meaning 'to believe'. Regular -ar verb in first person singular.",
 sSrc:"I {1} that she is right."},

{type:"mc", q:"'Prefiro chá a café' means:",
 opts:["I hate tea and coffee","I prefer tea to coffee","I drink tea and coffee","I need tea, not coffee"],
 ans:"I prefer tea to coffee",
 hint:"The verb is the 'eu' stem-change form of preferir, and 'a' here means 'over / to'."},

{type:"fb", s:"Você ainda não {1}? Precisa escolher logo.",
 a:["decidiu"],
 opts:["decidiu","lembrou","esperou","pensou"],
 hint:"The regular -ir verb for making a choice, in the third-person past (pretérito perfeito). Context: 'you haven't X yet'.",
 sSrc:"You still have not {1}? You need to choose soon."},

{type:"mc", q:"'Não me lembro do nome' means:",
 opts:["I do not know the name","I cannot say the name","I do not remember the name","I do not like the name"],
 ans:"I do not remember the name",
 hint:"'Lembrar' means to …. 'Me lembro de' is the reflexive form."},

{type:"fb", s:"Eu {1} trabalhar em casa hoje.",
 a:["prefiro"],
 opts:["prefiro","prefere","lembro","espero"],
 hint:"First-person singular of the stem-changing verb meaning 'to prefer'. Stem vowel changes from e to i.",
 sSrc:"I {1} to work from home today."},

{type:"match", pairs:[
 {trg:"precisar", src:"to need"},
 {trg:"pensar", src:"to think"},
 {trg:"decidir", src:"to decide"},
 {trg:"lembrar", src:"to remember"}
]},

{type:"match", pairs:[
 {trg:"acreditar", src:"to believe"},
 {trg:"esperar", src:"to hope / to wait"},
 {trg:"preferir", src:"to prefer"}
]},

{type:"mc", q:"Which sentence means 'I hope the meeting goes well'?",
 opts:["Lembro que a reunião vai bem","Preciso de reunião boa","Acredito que a reunião vai bem","Espero que a reunião vá bem"],
 ans:"Espero que a reunião vá bem",
 hint:"The verb 'esperar' covers both hoping and waiting. In this sentence the speaker is expressing a wish about the meeting."}
]},

{id:"ptv2_u10l_essential_a2_emotions", title:"Emoções e verbos do dia a dia", icon:"😊", xp:20, board:true, steps:[
{type:"intro", title:"Feelings and everyday actions",
 desc:"Expressing how you feel is essential at A2 level. Learn six core emotion adjectives and three high-frequency verbs for daily routines.",
 goals:["Describe six common emotions","Use estar with emotion adjectives","Learn acordar, esquecer, and ajudar"]},

{type:"teach", trg:"triste", src:"sad", pos:"adj", gender:null,
 phonetic:"TREES-chee",
 note:"Adjective ending in -e. Gender-neutral: o menino triste, a menina triste.\nUse with estar for temporary states: Estou triste hoje.\nPlural: tristes.",
 example:"A: Por que você está triste?\nB: Não estou bem.\nA: O que aconteceu?\nB: Estou cansado e triste.",
 exampleSrc:"A: Why are you sad?\nB: I am not well.\nA: What happened?\nB: I am tired and sad.",
 funFact:"All adjectives ending in -e are gender-neutral in Portuguese. This is a useful learner shortcut: triste, alegre, and others never need an -a ending for feminine nouns."},

{type:"teach", trg:"alegre", src:"happy / cheerful", pos:"adj", gender:null,
 phonetic:"ah-LEH-greh",
 note:"Gender-neutral adjective ending in -e. Plural: alegres.\nMore lively than 'feliz'. Implies visible, outward happiness.",
 example:"A: Você está alegre hoje!\nB: Sim, estou muito bem.\nA: O que aconteceu?\nB: Estou com a família e isso é bom.",
 exampleSrc:"A: You are cheerful today!\nB: Yes, I am very well.\nA: What happened?\nB: I am with my family and that is good.",
 funFact:"In music, 'alegre' gives us 'allegro', the Italian tempo marking. Both come from Latin 'alacer', meaning lively or quick."},

{type:"teach", trg:"cansado", src:"tired", pos:"adj", gender:"m",
 phonetic:"kan-ZAH-doo",
 note:"Emotion adjective. Gender changes: cansado (m), cansada (f). Plural: cansados/cansadas.\nAlways used with estar: Estou cansado. NOT sou cansado.",
 example:"A: Como você está?\nB: Estou muito cansado.\nA: Trabalhou muito?\nB: Sim, trabalho todos os dias.",
 exampleSrc:"A: How are you?\nB: I am very tired.\nA: Did you work a lot?\nB: Yes, I work every day.",
 funFact:"'Cansado' comes from 'cansar' (to tire). The prefix can- echoes Latin 'campsare', to drag oneself forward, which paints a vivid picture of fatigue."},

{type:"teach", trg:"nervoso", src:"nervous / anxious", pos:"adj", gender:"m",
 phonetic:"nehr-VOH-zoo",
 note:"Gender changes: nervoso (m), nervosa (f). Plural: nervosos/nervosas.\nUsed with estar: Estou nervoso antes da reunião.",
 example:"A: Você está nervoso?\nB: Estou um pouco nervoso.\nA: Por que?\nB: Tenho uma reunião importante.",
 exampleSrc:"A: Are you nervous?\nB: I am a little nervous.\nA: Why?\nB: I have an important meeting.",
 funFact:"'Nervoso' in Brazil also means 'irritated or agitated', not only nervous. 'Ela ficou nervosa' can mean 'she got irritated' in everyday Brazilian speech."},

{type:"teach", trg:"calmo", src:"calm", pos:"adj", gender:"m",
 phonetic:"KAHL-moo",
 note:"Gender changes: calmo (m), calma (f). Plural: calmos/calmas.\nCan be used with ser (permanent personality) or estar (current state).",
 example:"A: Fique calmo, vai ficar bem.\nB: Estou tentando.\nA: Respira fundo.\nB: Obrigado, você está certo.",
 exampleSrc:"A: Stay calm, it will be fine.\nB: I am trying.\nA: Take a deep breath.\nB: Thank you, you are right.",
 funFact:"'Calmo' and 'calma' are near-identical cognates with English 'calm', French 'calme', and Spanish 'calmo'. All trace back to Latin 'cauma', heat of the midday sun, when everything is still."},

{type:"teach", trg:"preocupado", src:"worried", pos:"adj", gender:"m",
 phonetic:"preh-oh-koo-PAH-doo",
 note:"Gender changes: preocupado (m), preocupada (f). Plural: preocupados/preocupadas.\nAlways paired with estar: Estou preocupada com você.",
 example:"A: Você está preocupado?\nB: Estou sim, com minha família.\nA: O que aconteceu?\nB: Minha mãe está doente.",
 exampleSrc:"A: Are you worried?\nB: Yes, I am, about my family.\nA: What happened?\nB: My mother is ill.",
 funFact:"'Preocupado' literally means pre-occupied, that is, your mind is already taken up by a worry before you even face it. The same logic works in English."},

{type:"teach", trg:"acordar", src:"to wake up", pos:"verb", gender:null,
 phonetic:"ah-kohr-DAR",
 note:"Regular -ar verb: acordo, acorda, acordamos, acordam.\nUse with time: acordo às sete. Can be used reflexively (me acordar) in some contexts.",
 example:"A: Que horas você acorda?\nB: Acordo às seis.\nA: Todo dia?\nB: Sim, trabalho cedo.",
 exampleSrc:"A: What time do you wake up?\nB: I wake up at six.\nA: Every day?\nB: Yes, I work early.",
 funFact:"'Acordar' comes from 'a + corda', referring to the heart strings. To wake up was poetically described as having your heart strings pulled back to consciousness."},

{type:"teach", trg:"esquecer", src:"to forget", pos:"verb", gender:null,
 phonetic:"esh-keh-SEHR",
 note:"Regular -er verb: esqueço, esquece, esquecemos, esquecem.\nCommon structure: esquecer de + noun or infinitive: Esqueci de estudar.",
 example:"A: Você esqueceu o livro?\nB: Esqueci sim, desculpe.\nA: Acontece.\nB: Não vou esquecer de novo.",
 exampleSrc:"A: Did you forget the book?\nB: I did forget, sorry.\nA: It happens.\nB: I will not forget again.",
 funFact:"In Brazil, the past tense 'esqueci' (I forgot) is extremely common in casual conversation. You will hear it daily as an apology or excuse."},

{type:"teach", trg:"ajudar", src:"to help", pos:"verb", gender:null,
 phonetic:"ah-zhoo-DAR",
 note:"Regular -ar verb: ajudo, ajuda, ajudamos, ajudam.\nStructure: ajudar + person + com + thing: Posso ajudar você com o trabalho.",
 example:"A: Posso ajudar?\nB: Sim, por favor!\nA: O que você precisa?\nB: Preciso de ajuda com este formulário.",
 exampleSrc:"A: Can I help?\nB: Yes, please!\nA: What do you need?\nB: I need help with this form.",
 funFact:"'Ajudar' is one of the first verbs a learner hears in Brazil. Shop assistants use 'Posso ajudar?' (Can I help you?) as their standard greeting."},

{type:"tip", title:"Estar with Emotion Adjectives",
 text:"In Portuguese, temporary states and feelings use 'estar', not 'ser':\n\nEstou triste. (I am sad, right now.)\nEstou nervoso. (I am nervous, at this moment.)\nEstou cansado. (I am tired, today.)\n\nUsing 'ser' would mean a permanent character trait:\nEle é calmo. (He is a calm person.), personality.\nEle está calmo. (He is calm right now.), current state.\n\nFor most emotions at A2, you will use 'estar'.",
 deepDive:{title:"Gender Agreement with Emotion Adjectives",
  text:"Adjectives ending in -o change to -a for feminine nouns. Adjectives ending in -e are neutral:\n\n-o/-a group: cansado/cansada, nervoso/nervosa, calmo/calma, preocupado/preocupada\n-e group (no change): triste, alegre\n\nPractical shortcut: if you are female or talking about a woman, swap the -o ending to -a. Nothing else changes."}},

{type:"fb", s:"Ela está {1} porque perdeu o livro.",
 a:["triste"],
 opts:["triste","calmo","nervoso","alegre"],
 hint:"The gender-neutral adjective for sad, ending in -e.",
 sSrc:"She is {1} because she lost the book."},

{type:"mc", q:"Which sentence correctly describes a temporary feeling?",
 opts:["Estou nervosa hoje","Tenho nervosa hoje","Vou nervosa hoje","Sou nervosa hoje"],
 ans:"Estou nervosa hoje",
 hint:"Temporary feelings use the verb to be that describes states, not permanent traits."},

{type:"fb", s:"Estou {1} porque trabalhei muito hoje.",
 a:["cansado"],
 opts:["cansado","alegre","triste","calmo"],
 hint:"The masculine adjective that describes fatigue after a long day. Ends in -o.",
 sSrc:"I am {1} because I worked a lot today."},

{type:"mc", q:"What does 'Que horas você acorda?' mean?",
 opts:["What time do you go to sleep?","What time do you wake up?","How long do you sleep?","Where do you wake up?"],
 ans:"What time do you wake up?",
 hint:"The verb 'acordar' refers to the action of waking up."},

{type:"fb", s:"Eu {1} às sete de manhã todos os dias.",
 a:["acordo"],
 opts:["acordo","acorda","acordam","acordamos"],
 hint:"First person singular of acordar. Use this form with 'eu'.",
 sSrc:"I {1} at seven in the morning every day."},

{type:"fb", s:"Não posso {1} de levar o livro para a escola.",
 a:["esquecer"],
 opts:["esquecer","ajudar","acordar","decidir"],
 hint:"The infinitive verb meaning to forget. Use 'de' before what is forgotten.",
 sSrc:"I cannot {1} to bring the book to school."},

{type:"fb", s:"Você pode me {1} com este trabalho?",
 a:["ajudar"],
 opts:["ajudar","esquecer","acordar","cansado"],
 hint:"The infinitive verb meaning to help. Follows 'poder' here.",
 sSrc:"Can you {1} me with this work?"},

{type:"mc", q:"Which adjective is gender-neutral (same for male and female)?",
 opts:["cansado","nervoso","alegre","preocupado"],
 ans:"alegre",
 hint:"Adjectives ending in -e do not change for gender."},

{type:"match", pairs:[
 {trg:"triste", src:"sad"},
 {trg:"alegre", src:"happy / cheerful"},
 {trg:"cansado", src:"tired"},
 {trg:"nervoso", src:"nervous / anxious"}
]},

{type:"match", pairs:[
 {trg:"calmo", src:"calm"},
 {trg:"preocupado", src:"worried"},
 {trg:"acordar", src:"to wake up"},
 {trg:"ajudar", src:"to help"}
]},

{type:"fb", s:"Estou {1} com minha família, não sei como ela está.",
 a:["preocupado"],
 opts:["preocupado","alegre","calmo","cansado"],
 hint:"The masculine adjective that means worried. Has four syllables.",
 sSrc:"I am {1} about my family, I do not know how she is."},

{type:"mc", q:"How do you say 'Stay calm' in Portuguese?",
 opts:["Fique cansado","Fique nervoso","Fique triste","Fique calmo"],
 ans:"Fique calmo",
 hint:"Use the imperative of 'ficar' followed by the adjective that means calm."}
]}

]}; export default UNIT_10;
