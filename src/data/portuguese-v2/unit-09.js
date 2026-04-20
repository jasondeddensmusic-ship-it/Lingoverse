const UNIT_09 = {n:9, lang:"pt", srcLang:"en", track:"v2", title:"Não me sinto bem", sub:"Health and the Body", icon:"🏥", level:"A2.1", color:"#7B5EE8", lessons:[

{id:"ptv2_u9l1", title:"O corpo", icon:"🧍", xp:15, board:true, steps:[
{type:"intro", title:"Parts of the body",
 desc:"Knowing the parts of the body is essential for describing pain, health issues, and daily life. Start with the six most useful body words.",
 goals:["Learn 6 core body parts","Use definite articles correctly","Talk about where something hurts"]},

{type:"teach", trg:"o corpo", src:"the body", pos:"noun", gender:"m",
 note:"Body. Masculine noun.",
 example:"A: Como está o seu corpo hoje?\nB: Bem, obrigado.\nA: E os exercícios?\nB: Faço todos os dias.",
 exampleSrc:"A: How is your body today?\nB: Well, thank you.\nA: And exercise?\nB: I do it every day.",
 funFact:"From Latin 'corpus'. Same root as English 'corporate' and 'corpse'."},

{type:"teach", trg:"a cabeça", src:"the head", pos:"noun", gender:"f",
 note:"Head. Feminine noun. Used in many idioms too.",
 example:"A: A cabeça é parte do corpo.\nB: E o olho?\nA: O olho também.\nB: E a boca?",
 exampleSrc:"A: The head is part of the body.\nB: And the eye?\nA: The eye too.\nB: And the mouth?",
 funFact:"'Perder a cabeça' (to lose your head) means to lose control, just like in English."},

{type:"teach", trg:"o olho", src:"the eye", pos:"noun", gender:"m",
 note:"Eye. Plural: os olhos.",
 example:"A: Seus olhos são lindos.\nB: Obrigada!\nA: Os olhos são parte do corpo?\nB: Sim, são parte da cabeça.",
 exampleSrc:"A: Your eyes are beautiful.\nB: Thank you!\nA: Are the eyes part of the body?\nB: Yes, they are part of the head.",
 funFact:"The expression 'custar os olhos da cara' (to cost the eyes of your face) means extremely expensive."},

{type:"teach", trg:"a boca", src:"the mouth", pos:"noun", gender:"f",
 note:"Mouth. Feminine noun.",
 example:"A: Abra a boca, por favor.\nB: Assim?\nA: Sim, bem aberta.\nB: Dói aqui.",
 exampleSrc:"A: Open your mouth, please.\nB: Like this?\nA: Yes, nice and wide.\nB: It hurts here.",
 funFact:"'Boca' in slang also means 'entrance' of a neighborhood or subway station. 'Na boca do metrô'."},

{type:"teach", trg:"a mão", src:"the hand", pos:"noun", gender:"f",
 note:"Hand. Irregular feminine, ends in -ão but is feminine. Plural: as mãos.",
 example:"A: Lave as mãos.\nB: Já lavei.\nA: Com sabonete?\nB: Sim, claro.",
 exampleSrc:"A: Wash your hands.\nB: I already washed them.\nA: With soap?\nB: Yes, of course.",
 funFact:"'Mão' is one of the rare nouns ending in -ão that is feminine. Most -ão nouns are masculine."},

{type:"teach", trg:"a perna", src:"the leg", pos:"noun", gender:"f",
 note:"Leg. Feminine noun. Plural: as pernas.",
 example:"A: Tenho uma perna.\nB: E dois pés?\nA: Sim, e dois pés também.\nB: E duas mãos!",
 exampleSrc:"A: I have one leg.\nB: And two feet?\nA: Yes, and two feet too.\nB: And two hands!",
 funFact:"The expression 'estar de pernas para o ar' (to be with legs up) means to rest or laze around."},

{type:"teach", trg:"o pé", src:"the foot", pos:"noun", gender:"m",
 note:"Foot. Masculine noun. Plural: os pés.",
 example:"A: O pé é parte do corpo.\nB: E a perna?\nA: A perna também.\nB: E a mão e o olho!",
 exampleSrc:"A: The foot is part of the body.\nB: And the leg?\nA: The leg too.\nB: And the hand and the eye!",
 funFact:"'A pé' (on foot) is a common way to say walking. 'Vou a pé' means 'I am going on foot'."},

{type:"tip", title:"Body Parts with Articles",
 text:"Portuguese uses the definite article before body parts more than English:\n\nLave as mãos. (Wash your hands.)\nA cabeça dói. (My head hurts.)\nAbra a boca. (Open your mouth.)\n\nNotice how Portuguese says 'the hands' and 'the head' where English uses 'your'. The possessive is implied by context. This is very common.",
 deepDive:{title:"Mão vs Não vs Mão",
  text:"Be careful with the tilde! 'Mão' (hand) sounds nasal. 'Não' (no) sounds similar but has a different meaning entirely. The nasal accent is crucial. Practice saying 'A mão não está' (The hand is not here) to train both sounds together."}},

{type:"fb", s:"A {1} é a parte mais importante do corpo.",
 a:["cabeça"],
 opts:["cabeça","perna","mão","boca"],
 hint:"The top part of your body, where your brain is.",
 sSrc:"The {1} is the most important part of the body."},

{type:"fb", s:"Tenho dois {1} e duas mãos.",
 a:["pés"],
 opts:["pés","olhos","pernas","bocas"],
 hint:"Plural of pé. The body part at the end of your legs.",
 sSrc:"I have two {1} and two hands."},

{type:"mc", q:"Which word means 'the head'?",
 opts:["o corpo","a cabeça","a mão","o pé"],
 ans:"a cabeça",
 hint:"The feminine noun for the top part of your body."},

{type:"mc", q:"What is the plural of 'mão'?",
 opts:["mãos","mães","manos","mãoes"],
 ans:"mãos",
 hint:"Add an s directly to the -ão ending."},

{type:"fb", s:"Lave as {1} antes de comer.",
 a:["mãos"],
 opts:["mãos","olhos","pernas","bocas"],
 hint:"You use these body parts to eat, so they need to be clean before a meal.",
 sSrc:"Wash your {1} before eating."},

{type:"match", pairs:[
 {trg:"cabeça", src:"head"},
 {trg:"olho", src:"eye"},
 {trg:"mão", src:"hand"},
 {trg:"pé", src:"foot"}
]},

{type:"mc", q:"'Abra a boca' means:",
 opts:["Close your mouth","Open your mouth","Wash your hands","Lift your leg"],
 ans:"Open your mouth",
 hint:"Abra is the imperative of abrir (to open); boca is the mouth."},

{type:"fb", s:"Caminhei muito e meus {1} doem.",
 a:["pés"],
 opts:["pés","olhos","mãos","bocas"],
 hint:"Walking a lot typically makes this body part at the end of your legs hurt.",
 sSrc:"I walked a lot and my {1} hurt."},

{type:"mc", q:"Which body part is feminine?",
 opts:["o corpo","o olho","a perna","o pé"],
 ans:"a perna",
 hint:"It uses the feminine article a."}
]},

{id:"ptv2_u9l2", title:"Estou doente", icon:"🤒", xp:15, board:true, steps:[
{type:"intro", title:"Feeling sick and in pain",
 desc:"Learn how to say you feel sick, where you hurt, and how to ask for help. The verb 'doer' works differently than English 'to hurt'.",
 goals:["Use doente, dor, sentir, doer","Master doer with indirect object","Describe ailments"]},

{type:"teach", trg:"doente", src:"sick", pos:"adj", gender:null,
 note:"Sick, ill. Same form for masculine and feminine. Used with 'estar': estar doente.",
 example:"A: Estou doente.\nB: O que você tem?\nA: Febre e dor de cabeça.\nB: Vá ao médico.",
 exampleSrc:"A: I am sick.\nB: What do you have?\nA: Fever and a headache.\nB: Go to the doctor.",
 funFact:"From Latin 'dolens' (suffering). Same root as the Spanish 'doliente' and the English 'dolor'."},

{type:"teach", trg:"a dor", src:"the pain", pos:"noun", gender:"f",
 note:"Pain, ache. Feminine noun. Combines with body parts: dor de cabeça (headache).",
 example:"A: Que dor!\nB: Tenho muita dor.\nA: Na cabeça?\nB: Sim, dor de cabeça.",
 exampleSrc:"A: What pain!\nB: I have a lot of pain.\nA: In the head?\nB: Yes, a headache.",
 funFact:"'Dor de cotovelo' (elbow pain) is slang for the ache of heartbreak or jealousy after lost love."},

{type:"teach", trg:"sentir", src:"to feel", pos:"verb", gender:null,
 note:"Irregular -ir verb: sinto, sente, sentimos, sentem. Reflexive for emotions: sentir-se.",
 example:"A: Como você se sente?\nB: Me sinto mal.\nA: O que você sente?\nB: Dor e cansaço.",
 exampleSrc:"A: How do you feel?\nB: I feel bad.\nA: What do you feel?\nB: Pain and tiredness.",
 funFact:"Same Latin root as English 'sentiment'. Used reflexively for 'feel oneself': sentir-se bem, sentir-se mal."},

{type:"teach", trg:"doer", src:"to hurt", pos:"verb", gender:null,
 note:"To hurt. Works backwards: body part is subject, person is object. Dói-me a cabeça = My head hurts (lit. the head hurts me).",
 example:"A: Dói-me a cabeça.\nB: Muito?\nA: Sim, muito.\nB: Toma um remédio.",
 exampleSrc:"A: My head hurts.\nB: A lot?\nA: Yes, a lot.\nB: Take a medicine.",
 funFact:"Brazilians also say 'minha cabeça dói' (my head hurts) using possessives. Both forms are natural."},

{type:"teach", trg:"bem", src:"well", pos:"adv", gender:null,
 note:"Well, good (adverb). Used with estar: estou bem.",
 example:"A: Como você está?\nB: Estou bem, obrigado.\nA: E a família?\nB: Todos bem.",
 exampleSrc:"A: How are you?\nB: I am well, thank you.\nA: And the family?\nB: Everyone is well.",
 funFact:"'Tudo bem?' (All well?) is the most common Brazilian greeting. The answer is also 'tudo bem'."},

{type:"teach", trg:"mal", src:"badly", pos:"adv", gender:null,
 note:"Badly, poorly (adverb). Used with estar: estou mal.",
 example:"A: Como se sente?\nB: Muito mal.\nA: Vamos ao médico.\nB: Sim, obrigada.",
 exampleSrc:"A: How do you feel?\nB: Very badly.\nA: Let's go to the doctor.\nB: Yes, thank you.",
 funFact:"'Mal' as adverb means 'badly'. The adjective 'mau' means 'bad'. Same pronunciation, different spelling!"},

{type:"tip", title:"Doer with Indirect Object",
 text:"The verb 'doer' (to hurt) flips English logic:\n\nDói-me a cabeça. (The head hurts me = My head hurts.)\nDoem-lhe os pés. (His feet hurt him.)\nDói-nos a perna. (Our leg hurts.)\n\nThe body part is the subject. The person is the indirect object (me, te, lhe, nos). In Brazil, people often say 'Minha cabeça dói' (My head hurts) which is simpler and equally correct.",
 deepDive:{title:"Formal vs Casual Pain",
  text:"The 'dói-me' construction is more formal and common in writing. In everyday Brazilian speech, you will hear 'Minha cabeça está doendo' (My head is hurting) far more often. Both are correct. Use 'dói-me' in careful speech, and the possessive form in daily conversation."}},

{type:"fb", s:"Estou {1}, tenho febre e dor de cabeça.",
 a:["doente"],
 opts:["doente","bem","mal","cansado"],
 hint:"The adjective for being sick, used with estar.",
 sSrc:"I am {1}, I have a fever and headache."},

{type:"fb", s:"Tenho {1} de barriga desde ontem.",
 a:["dor"],
 opts:["dor","febre","cansaço","remédio"],
 hint:"The feminine noun for physical pain or ache.",
 sSrc:"I've had a stomach {1} since yesterday."},

{type:"mc", q:"How do you say 'I am sick'?",
 opts:["Eu sou doente","Estou doente","Eu tenho doente","Eu doente"],
 ans:"Estou doente",
 hint:"Sickness is a temporary state, so use the temporary being verb."},

{type:"mc", q:"What does 'dor' mean?",
 opts:["sickness","pain","medicine","doctor"],
 ans:"pain",
 hint:"It is a feminine noun that combines with body parts as in 'dor de cabeça'."},

{type:"fb", s:"{1}-me a cabeça desde de manhã.",
 a:["Dói"],
 opts:["Dói","Doem","Sinto","Estou"],
 hint:"The subject is 'a cabeça' (singular), so the verb is in 3rd person singular.",
 sSrc:"My head has been hurting since morning."},

{type:"match", pairs:[
 {trg:"doente", src:"sick"},
 {trg:"dor", src:"pain"},
 {trg:"bem", src:"well"},
 {trg:"mal", src:"badly"}
]},

{type:"mc", q:"Which sentence describes feeling unwell?",
 opts:["Estou bem","Me sinto mal","Tudo bem","Estou aqui"],
 ans:"Me sinto mal",
 hint:"The adverb after the feeling verb means 'badly'."},

{type:"fb", s:"Como você se {1} hoje?",
 a:["sente"],
 opts:["sente","dói","está","tem"],
 hint:"Use the 3rd-person form of the verb meaning 'to feel'.",
 sSrc:"How do you {1} today?"},

{type:"mc", q:"'Dói-me a perna' means:",
 opts:["My leg is strong","My leg hurts","My leg is broken","My leg is long"],
 ans:"My leg hurts",
 hint:"The verb describes pain felt by the speaker in that body part."}
]},

{id:"ptv2_u9l3", title:"No médico", icon:"👨‍⚕️", xp:15, board:true, steps:[
{type:"intro", title:"At the doctor's office",
 desc:"When you feel sick, you need to know how to find help. Learn the words for doctor, medicine, and hospital.",
 goals:["Learn médico, remédio, hospital","Describe symptoms","Ask for help"]},

{type:"teach", trg:"o médico", src:"the doctor", pos:"noun", gender:"m",
 note:"Doctor (m). Feminine: a médica. Also used is 'o doutor' as a respectful title.",
 example:"A: Preciso de um médico.\nB: Qual é o problema?\nA: Tenho muita febre.\nB: Vou chamar agora.",
 exampleSrc:"A: I need a doctor.\nB: What is the problem?\nA: I have a high fever.\nB: I will call now.",
 funFact:"From Latin 'medicus'. Same Latin root as English 'medicine' and 'medical'."},

{type:"teach", trg:"o remédio", src:"the medicine", pos:"noun", gender:"m",
 note:"Medicine, medication. Masculine noun.",
 example:"A: Preciso de remédio.\nB: Tem remédio em casa?\nA: Não, não tem.\nB: Tem na farmácia.",
 exampleSrc:"A: I need medicine.\nB: Do you have medicine at home?\nA: No, there is none.\nB: There is some at the pharmacy.",
 funFact:"'Remédio' also means 'solution' or 'remedy' in a broader sense. 'Não tem remédio' = 'There is no solution'."},

{type:"teach", trg:"o hospital", src:"the hospital", pos:"noun", gender:"m",
 note:"Hospital. Masculine noun. Plural: os hospitais (drop -l, add -is).",
 example:"A: Onde fica o hospital?\nB: Perto daqui.\nA: Vamos de carro?\nB: Sim, é mais rápido.",
 exampleSrc:"A: Where is the hospital?\nB: Near here.\nA: Shall we go by car?\nB: Yes, it is faster.",
 funFact:"Brazil has a public health system called SUS (Sistema Único de Saúde) that guarantees free care to all residents."},

{type:"teach", trg:"a farmácia", src:"the pharmacy", pos:"noun", gender:"f",
 note:"Pharmacy, drugstore. Feminine noun.",
 example:"A: Tem farmácia aberta?\nB: Sim, perto da esquina.\nA: Ótimo, preciso de remédio.\nB: Vai a pé?",
 exampleSrc:"A: Is there a pharmacy open?\nB: Yes, near the corner.\nA: Great, I need medicine.\nB: Are you going on foot?",
 funFact:"Brazilian pharmacies sell many medicines without prescription. Pharmacists often give informal advice."},

{type:"teach", trg:"a febre", src:"the fever", pos:"noun", gender:"f",
 note:"Fever. Feminine noun. Used with 'ter': tenho febre.",
 example:"A: Está com febre?\nB: Sim, trinta e nove graus.\nA: É alta!\nB: Preciso de remédio.",
 exampleSrc:"A: Do you have a fever?\nB: Yes, thirty-nine degrees.\nA: That is high!\nB: I need medicine.",
 funFact:"In Brazil, fever is measured in Celsius. 37 is normal, 38 is a fever, 39 is high and worrying."},

{type:"teach", trg:"a receita", src:"the prescription", pos:"noun", gender:"f",
 note:"Prescription, also means 'recipe'. Feminine noun. Context decides which meaning.",
 example:"A: Tem a receita?\nB: Sim, do médico.\nA: Vou preparar o remédio.\nB: Obrigada.",
 exampleSrc:"A: Do you have the prescription?\nB: Yes, from the doctor.\nA: I will prepare the medicine.\nB: Thank you.",
 funFact:"One word for two things: 'receita' is used for doctor's prescriptions AND cooking recipes. Context makes it clear."},

{type:"tip", title:"Common Health Phrases",
 text:"Essential phrases for a doctor's visit:\n\nEstou com dor. (I am in pain.)\nTenho febre. (I have a fever.)\nEstou doente. (I am sick.)\nPreciso de ajuda. (I need help.)\n\nIn emergencies, call 192 (SAMU) for ambulance or 193 for fire and rescue. Pharmacies always have a basic first aid counter.",
 deepDive:{title:"Estar com vs Ter",
  text:"Brazilians use two structures for symptoms:\n\nEstou com febre. (I am with fever.)\nTenho febre. (I have a fever.)\n\nBoth mean the same thing. 'Estar com' is more conversational and common in spoken Brazilian. 'Ter' is shorter and works equally well. Pick whichever feels more natural to you."}},

{type:"mc", q:"Which word means 'the medicine'?",
 opts:["o médico","o remédio","a febre","o hospital"],
 ans:"o remédio",
 hint:"This is the noun for pills or syrups, not the person who prescribes them."},

{type:"mc", q:"Where do you buy medicine in Brazil?",
 opts:["no hospital","na farmácia","na loja","no mercado"],
 ans:"na farmácia",
 hint:"The name contains the Latin root for 'drug' or 'medicine'."},

{type:"fb", s:"Estou com febre. Preciso ir ao {1}.",
 a:["médico"],
 opts:["médico","sapato","clima","mercado"],
 hint:"When sick with a fever, you typically go see this professional.",
 sSrc:"I have a fever. I need to go to the {1}."},

{type:"match", pairs:[
 {trg:"médico", src:"doctor"},
 {trg:"remédio", src:"medicine"},
 {trg:"hospital", src:"hospital"},
 {trg:"febre", src:"fever"}
]},

{type:"mc", q:"What is the plural of 'hospital'?",
 opts:["hospitales","hospitals","hospitais","hospitáis"],
 ans:"hospitais",
 hint:"Portuguese words ending in -al lose the l and add -is in the plural."},

{type:"fb", s:"O médico me deu uma {1} para comprar remédio.",
 a:["receita"],
 opts:["receita","farmácia","dor","mão"],
 hint:"To buy prescription medicine, you need this official paper from the doctor.",
 sSrc:"The doctor gave me a {1} to buy medicine."},

{type:"mc", q:"Which sentence means 'I have a fever'?",
 opts:["Sou febre","Estou com febre","Dói febre","Compro febre"],
 ans:"Estou com febre",
 hint:"Brazilian speech describes symptoms by saying you are 'with' them, not that you 'have' them."}
,

{type:"match", pairs:[
  {trg:"a boca", src:"the mouth"},
  {trg:"sentir", src:"to feel"},
  {trg:"doer", src:"to hurt"}
]}]},

{id:"ptv2_u9l4", title:"Marcar uma consulta", icon:"📅", xp:15, board:true, steps:[
{type:"intro", title:"Marcar uma consulta",
 desc:"Learn to make, confirm, and reschedule appointments in Brazilian Portuguese. These skills are tested on CAPLE A2 and are essential for navigating clinics, dentists, and restaurants.",
 goals:["Make an appointment by phone","Confirm and cancel a consultation","Reschedule a visit","Use polite telephone Portuguese"]},

{type:"teach", trg:"a consulta", src:"the appointment / consultation", pos:"noun", gender:"f",
 note:"Feminine noun. 'Consulta' covers both medical appointments and broader consultations.\nMarcar uma consulta = to make an appointment.\nMore formal than 'compromisso'.",
 example:"A: Preciso marcar uma consulta com o médico.\nB: Para quando o senhor precisa?\nA: O quanto antes.\nB: Temos uma vaga na sexta-feira.",
 exampleSrc:"A: I need to make an appointment with the doctor.\nB: When do you need it, sir?\nA: As soon as possible.\nB: We have a slot on Friday.",
 funFact:"In Brazil, the word 'consulta' covers everything from a medical check-up to consulting a lawyer or accountant. The context makes it clear."},

{type:"teach", trg:"marcar uma consulta", src:"to make an appointment", pos:"verb", gender:null,
 note:"Marcar = to mark/schedule. Regular -ar verb.\nMarco, marca, marcamos...\nUsed for medical, dental, and beauty appointments.",
 example:"A: Preciso marcar uma consulta com o médico.\nB: Claro. Qual é o seu nome?\nA: Meu nome é João Silva.\nB: Marquei para quinta às 10h.",
 exampleSrc:"A: I need to make an appointment with the doctor.\nB: Of course. What is your name?\nA: My name is João Silva.\nB: I booked you for Thursday at 10am.",
 funFact:"'Marcar' originally meant 'to mark' (from Germanic 'mark'). Scheduling appointments is literally 'marking' a time in the calendar."},

{type:"teach", trg:"confirmar", src:"to confirm", pos:"verb", gender:null,
 note:"Regular -ar verb. Confirmo, confirma, confirmamos...\nConfirmar a consulta = to confirm the appointment.",
 example:"A: Ligo para confirmar minha consulta de amanhã.\nB: Sim, está confirmado para as 14h.\nA: Ótimo, muito obrigado.\nB: Até amanhã.",
 exampleSrc:"A: I'm calling to confirm my appointment tomorrow.\nB: Yes, it is confirmed for 2pm.\nA: Great, thank you very much.\nB: See you tomorrow.",
 funFact:"Portuguese and Spanish both use 'confirmar'. Both inherited it from the same Latin source: 'confirmare'."},

{type:"teach", trg:"cancelar", src:"to cancel", pos:"verb", gender:null,
 note:"Regular -ar verb. Cancelo, cancela, cancelamos...\nCancelar a consulta = to cancel the appointment.",
 example:"A: Preciso cancelar minha consulta de segunda.\nB: Tudo bem. Quer remarcar?\nA: Sim, tem algo na semana que vem?\nB: Quarta-feira às 15h, pode ser?",
 exampleSrc:"A: I need to cancel my Monday appointment.\nB: No problem. Would you like to reschedule?\nA: Yes, do you have something next week?\nB: Wednesday at 3pm, is that okay?",
 funFact:"'Cancelar' is a direct cognate with English 'cancel'. Both come from Latin 'cancellare' (to cross out in a lattice pattern)."},

{type:"teach", trg:"remarcar a consulta", src:"to reschedule the appointment", pos:"verb", gender:null,
 note:"Remarcar = to re-mark, to reschedule.\nRemarco, remarca, remarcamos...\nSpecifically used for medical appointments.",
 example:"A: Posso remarcar a minha consulta?\nB: Claro. Que dia é bom para você?\nA: Terça-feira de manhã, se possível.\nB: Terça às 9h está bom?",
 exampleSrc:"A: Can I reschedule my appointment?\nB: Of course. What day is good for you?\nA: Tuesday morning if possible.\nB: Tuesday at 9am, is that okay?",
 funFact:"Brazilian Portuguese uses the re- prefix (remarcar, reagendar) for rescheduling. European Portuguese tends to prefer 'adiar' or 'transferir'."},

{type:"teach", trg:"Gostaria de marcar uma consulta para...",
 src:"I would like to make an appointment for...", pos:"intj", gender:null,
 note:"Gostaria = conditional of gostar (polite form).\nUsed to make polite requests. More formal than 'quero'.\nComplete with: segunda-feira / o dentista / etc.",
 example:"A: Bom dia, gostaria de marcar uma consulta para o doutor Lima.\nB: Claro. Manhã ou tarde?\nA: Manhã, de preferência.\nB: Segunda-feira às 9h30, pode ser?",
 exampleSrc:"A: Good morning, I would like to make an appointment with Doctor Lima.\nB: Of course. Morning or afternoon?\nA: Morning, preferably.\nB: Monday at 9:30am, would that work?",
 funFact:"Using 'gostaria' (conditional) instead of 'quero' (present) is considered much more polite in Brazilian service interactions. The conditional softens any request."},

{type:"teach", trg:"Qual é o horário disponível?", src:"What time slots are available?", pos:"intj", gender:null,
 note:"Horário = schedule / time slot / opening hours.\nDisponível = available.\nUsed to ask what appointment times are open.",
 example:"A: Qual é o horário disponível para esta semana?\nB: Temos terça às 10h ou quinta às 16h.\nA: Prefiro terça às 10h.\nB: Perfeito, ficou agendado.",
 exampleSrc:"A: What time slots are available this week?\nB: We have Tuesday at 10am or Thursday at 4pm.\nA: I prefer Tuesday at 10am.\nB: Perfect, it is scheduled.",
 funFact:"'Horário' (schedule) and 'hora' (hour/time) come from Latin 'hora'. The -ário suffix creates nouns meaning a collection or schedule of something."},

{type:"tip", title:"Phone calls for appointments in Brazilian Portuguese",
 text:"Standard script for calling a clinic:\n\n1. Opening:\n'Bom dia, gostaria de marcar uma consulta.'\n\n2. Specify the doctor:\n'Com o doutor / a doutora [name].'\n\n3. Indicate urgency:\n'É urgente.' or 'Para quando for possível.'\n\n4. Confirm the details:\n'Então é segunda-feira às 10h, certo?'\n\nKey vocabulary:\na clínica = the clinic\no consultório = the doctor's private office\nagendado = scheduled\ndisponível = available\no mais cedo possível = as soon as possible"},

{type:"mc", q:"Which verb means 'to reschedule' an appointment in Brazilian Portuguese?",
 opts:["cancelar","confirmar","remarcar","marcar"],
 ans:"remarcar",
 hint:"The prefix 're-' means again. You are marking the appointment again for a new time."},

{type:"fb",
 opts:["marcar","fazer","ter","pedir"],
 hint:"'___ uma consulta' is the standard Brazilian Portuguese phrase. Which verb fills the gap?",
 s:"Preciso {1} uma consulta com o dentista.",
 a:"marcar",
 sSrc:"I need to {1} an appointment with the dentist."},

{type:"mc", q:"'Gostaria de marcar uma consulta' uses the conditional because:",
 opts:["It refers to the past","It makes the request more polite","It is a question","It means 'I used to book appointments'"],
 ans:"It makes the request more polite",
 hint:"The conditional ('would like') is softer and more courteous than the present tense ('I want')."},

{type:"match", pairs:[
 {trg:"marcar uma consulta", src:"to make an appointment"},
 {trg:"cancelar", src:"to cancel"},
 {trg:"remarcar a consulta", src:"to reschedule"},
 {trg:"confirmar", src:"to confirm"},
 {trg:"disponível", src:"available"}]},

{type:"fb",
 opts:["remarcar","cancelar","confirmar","marcar"],
 hint:"Moving the appointment to a new time, not cancelling it.",
 s:"Posso {1} minha consulta de segunda para quarta-feira?",
 a:"remarcar",
 sSrc:"Can I {1} my Monday appointment to Wednesday?"}
]}

,

{id:"ptv2_u9l_a2_rooms_objects", title:"Em casa", icon:"🏠", xp:15, board:true, steps:[
{type:"intro", title:"Rooms and furniture",
 desc:"Knowing the rooms and furniture in a home is essential for giving directions, describing where things are, and talking about daily life. Learn 10 essential words and two key adjectives.",
 goals:["Name 5 rooms of a home","Learn 5 pieces of furniture","Use limpo and sujo to describe condition"]},

{type:"teach", trg:"a cozinha", src:"the kitchen", pos:"noun", gender:"f",
 note:"Kitchen. Feminine noun.",
 example:"A: A cozinha é grande?\nB: Sim, é grande.\nA: Tem mesa na cozinha?\nB: Tem, tem mesa e cadeira.",
 exampleSrc:"A: Is the kitchen big?\nB: Yes, it is big.\nA: Is there a table in the kitchen?\nB: Yes, there is a table and chair.",
 funFact:"From 'coquere' (Latin for to cook). The word 'cook' and 'kitchen' share the same ancient root."},

{type:"teach", trg:"o quarto", src:"the bedroom", pos:"noun", gender:"m",
 note:"Bedroom. Masculine noun. Also the ordinal for 'fourth', but context makes it clear.",
 example:"A: O quarto é pequeno?\nB: Não, é grande.\nA: Tem cama no quarto?\nB: Tem, e tem armário.",
 exampleSrc:"A: Is the bedroom small?\nB: No, it is big.\nA: Is there a bed in the bedroom?\nB: Yes, and there is a wardrobe.",
 funFact:"'Quarto' means both 'bedroom' and 'quarter' (one fourth). Context tells you which meaning applies."},

{type:"teach", trg:"a sala", src:"the living room", pos:"noun", gender:"f",
 note:"Living room. Short for 'sala de estar'. Feminine noun.",
 example:"A: Onde está o sofá?\nB: Na sala.\nA: A sala é grande?\nB: Sim, é muito grande.",
 exampleSrc:"A: Where is the sofa?\nB: In the living room.\nA: Is the living room big?\nB: Yes, it is very big.",
 funFact:"'Sala' comes from a Germanic root meaning hall or large room. Many European languages share it: English 'saloon', French 'salle'."},

{type:"teach", trg:"a janela", src:"the window", pos:"noun", gender:"f",
 note:"Window. Feminine noun. From Latin 'janua' (gate, door opening).",
 example:"A: Abra a janela, por favor.\nB: Está frio!\nA: Não está.\nB: Está, a janela está aberta.",
 exampleSrc:"A: Open the window, please.\nB: It is cold!\nA: It is not.\nB: It is, the window is open.",
 funFact:"'Janela' shares its root with the Roman god Janus, who guarded gates and passages, and with the month January."},

{type:"teach", trg:"a porta", src:"the door", pos:"noun", gender:"f",
 note:"Door. Feminine noun. Also used figuratively, as in English.",
 example:"A: A porta está aberta?\nB: Não, está fechada.\nA: Pode abrir a porta?\nB: Claro, um momento.",
 exampleSrc:"A: Is the door open?\nB: No, it is closed.\nA: Can you open the door?\nB: Sure, one moment.",
 funFact:"From Latin 'porta' (gate, door). Same root as 'Portugal' itself: 'Portus Cale' (the port-gate of Cale)."},

{type:"teach", trg:"a cama", src:"the bed", pos:"noun", gender:"f",
 note:"Bed. Feminine noun.",
 example:"A: A cama é grande?\nB: Não, é pequena.\nA: O quarto tem cama?\nB: Tem, e tem janela.",
 exampleSrc:"A: Is the bed big?\nB: No, it is small.\nA: Does the bedroom have a bed?\nB: Yes, and it has a window.",
 funFact:"Same word in Spanish, same Latin origin. 'Fazer a cama' (to make the bed) is the Brazilian expression for tidying up."},

{type:"teach", trg:"a mesa", src:"the table", pos:"noun", gender:"f",
 note:"Table. Feminine noun. Also means 'plateau' or 'mesa' geographically.",
 example:"A: Coloca o livro na mesa.\nB: Qual mesa?\nA: A mesa da cozinha.\nB: Pronto, está na mesa.",
 exampleSrc:"A: Put the book on the table.\nB: Which table?\nA: The kitchen table.\nB: Done, it is on the table.",
 funFact:"'Mesa' also gave English 'mesa' (the flat-topped hill). Both come from Latin for flat surface."},

{type:"teach", trg:"a cadeira", src:"the chair", pos:"noun", gender:"f",
 note:"Chair. Feminine noun.",
 example:"A: Tem cadeira na cozinha?\nB: Tem, tem três cadeiras.\nA: E mesa?\nB: Tem mesa também.",
 exampleSrc:"A: Is there a chair in the kitchen?\nB: Yes, there are three chairs.\nA: And a table?\nB: There is a table too.",
 funFact:"From Latin 'cathedra' (a seat of authority). Same root as English 'cathedral', the bishop's seat. Your chair is royalty."},

{type:"teach", trg:"o sofá", src:"the sofa", pos:"noun", gender:"m",
 note:"Sofa, couch. Masculine noun.",
 example:"A: O sofá está na sala?\nB: Está, na sala.\nA: É grande?\nB: Sim, é grande e confortável.",
 exampleSrc:"A: Is the sofa in the living room?\nB: Yes, in the living room.\nA: Is it big?\nB: Yes, it is big and comfortable.",
 funFact:"Borrowed from Arabic 'suffah' (a raised platform with cushions). A great reminder that Arabic shaped much of world vocabulary."},

{type:"teach", trg:"limpo", src:"clean", pos:"adj", gender:"m",
 note:"Clean. Masculine form. Feminine: limpa. Describes the condition of objects and spaces.",
 example:"A: O quarto está limpo?\nB: Está, está muito limpo.\nA: E a cozinha?\nB: A cozinha não está limpa.",
 exampleSrc:"A: Is the bedroom clean?\nB: Yes, it is very clean.\nA: And the kitchen?\nB: The kitchen is not clean.",
 funFact:"From Latin 'limpidus' (clear, transparent). Same root as English 'limpid'. Cleanliness was originally about transparency, not hygiene."},

{type:"tip", title:"De onde vem o sofá?",
 text:"Portuguese borrows heavily from Arabic:\n\nalcool (alcohol), almofada (cushion), sofá (sofa)\n\nArabic traders brought goods to Portugal for centuries. Many household words came with the products.\n\nNote how gender works with these adjectives:\n\nO quarto está limpo. (m)\nA cozinha está limpa. (f)\nO sofá está sujo. (m)\nA janela está suja. (f)\n\nAdjectives agree with the noun they describe.",
 deepDive:{title:"Estar vs Ser with conditions",
  text:"Use 'estar' with limpo/sujo/aberto/fechado because these are temporary states, not permanent qualities:\n\nA porta está fechada. (The door is closed right now.)\nO quarto está sujo. (The bedroom is dirty at the moment.)\n\nNever use 'ser' for these temporary conditions. 'A porta é fechada' would mean the door is permanently/inherently a closed kind of door, which makes no sense."}},

{type:"fb", s:"O sofá está na {1}.",
 a:["sala"],
 opts:["sala","cozinha","janela","cama"],
 hint:"The room where you relax and watch TV, not where you sleep or cook.",
 sSrc:"The sofa is in the {1}."},

{type:"fb", s:"Durmo na {1} todos os dias.",
 a:["cama"],
 opts:["cama","mesa","cadeira","porta"],
 hint:"The furniture you sleep in every night.",
 sSrc:"I sleep in the {1} every day."},

{type:"mc", q:"Which room has the stove and refrigerator?",
 opts:["o quarto","a sala","a cozinha","o banheiro"],
 ans:"a cozinha",
 hint:"The room where you prepare and cook food."},

{type:"match", pairs:[
 {trg:"a cozinha", src:"the kitchen"},
 {trg:"o quarto", src:"the bedroom"},
 {trg:"a sala", src:"the living room"},
 {trg:"a cama", src:"the bed"},
 {trg:"o sofá", src:"the sofa"}
]},

{type:"fb", s:"A {1} está fechada. Pode abrir?",
 a:["porta"],
 opts:["porta","mesa","cadeira","cama"],
 hint:"The thing you open and close to enter or leave a room.",
 sSrc:"The {1} is closed. Can you open it?"},

{type:"mc", q:"What does 'limpo' mean?",
 opts:["big","old","clean","open"],
 ans:"clean",
 hint:"The adjective for a room or object that has been washed or tidied."},

{type:"fb", s:"O quarto está {1}, preciso limpar.",
 a:["sujo"],
 opts:["sujo","limpo","aberto","grande"],
 hint:"The opposite of limpo, describing something that needs cleaning.",
 sSrc:"The bedroom is {1}, I need to clean it."},

{type:"mc", q:"Which sentence uses the correct gender agreement?",
 opts:["A cama está limpo","O sofá está suja","A sala está limpa","O quarto está sujas"],
 ans:"A sala está limpa",
 hint:"The adjective must match the gender of the noun it describes."},

{type:"fb", s:"Ela está sentada na {1} da cozinha.",
 a:["cadeira"],
 opts:["cadeira","janela","porta","cama"],
 hint:"The piece of furniture you sit on at a table.",
 sSrc:"She is sitting on the {1} in the kitchen."},

{type:"drag_fill",
 s:"Em casa há {1} para dormir e {2} para cozinhar.",
 blanks:{"1":"o quarto","2":"a cozinha"},
 pool:["o quarto","a cozinha","a sala","a janela","a porta"],
 hint:"Match each room to its purpose: sleeping and cooking.",
 sSrc:"At home there is {1} for sleeping and {2} for cooking."},

{type:"match", pairs:[
 {trg:"a janela", src:"the window"},
 {trg:"a porta", src:"the door"},
 {trg:"a mesa", src:"the table"},
 {trg:"a cadeira", src:"the chair"},
 {trg:"limpo", src:"clean"}
]}
]}

]}; export default UNIT_09;
