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

{type:"mc", q:"How do you say 'I am a teacher' (female)?",
 opts:["Sou professor","Sou professora","Tenho professora","Estou professora"],
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

{type:"mc", q:"Where do people usually work in a city?",
 opts:["no escritório","no hospital","na escola","na farmácia"],
 ans:"no escritório",
 hint:"The word comes from 'escrever' (to write); it is the writing place."},

{type:"mc", q:"What does 'reunião' mean?",
 opts:["vacation","salary","meeting","company"],
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
 opts:["o chefe","o colega","o médico","o cliente"],
 ans:"o colega",
 hint:"A coworker of equal rank, from Latin 'collega'."},

{type:"fb", s:"Meu {1} de trabalho é das oito às cinco.",
 a:["horário"],
 opts:["horário","salário","escritório","colega"],
 hint:"The fixed times you start and end work each day.",
 sSrc:"My work {1} is from eight to five."},

{type:"mc", q:"'Trabalho numa empresa grande' means:",
 opts:["I visit a big company","I work at a big company","I own a big company","I see a big company"],
 ans:"I work at a big company",
 hint:"The verb is trabalho (I work) and the preposition 'numa' is in+a."}
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
 opts:["faz","faço","fazo","faze"],
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
 opts:["I work alone","We work together","You work a lot","They work here"],
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
 opts:["Sou professor","Tenho professor","Estou professor","Faço professor"],
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
]}]}

]}; export default UNIT_10;
