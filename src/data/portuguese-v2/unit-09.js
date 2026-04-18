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
 example:"A: A cabeça dói.\nB: Tem remédio?\nA: Não, acabou.\nB: Vou comprar.",
 exampleSrc:"A: My head hurts.\nB: Do you have medicine?\nA: No, it is all gone.\nB: I will go buy some.",
 funFact:"'Perder a cabeça' (to lose your head) means to lose control, just like in English."},

{type:"teach", trg:"o olho", src:"the eye", pos:"noun", gender:"m",
 note:"Eye. Plural: os olhos.",
 example:"A: Seus olhos são lindos.\nB: Obrigada!\nA: São verdes?\nB: Sim, verdes como o mar.",
 exampleSrc:"A: Your eyes are beautiful.\nB: Thank you!\nA: Are they green?\nB: Yes, green like the sea.",
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
 example:"A: Minha perna dói.\nB: Qual?\nA: A esquerda.\nB: Vou chamar o médico.",
 exampleSrc:"A: My leg hurts.\nB: Which one?\nA: The left one.\nB: I will call the doctor.",
 funFact:"The expression 'estar de pernas para o ar' (to be with legs up) means to rest or laze around."},

{type:"teach", trg:"o pé", src:"the foot", pos:"noun", gender:"m",
 note:"Foot. Masculine noun. Plural: os pés.",
 example:"A: O pé dói muito.\nB: Caminhou muito?\nA: Sim, o dia todo.\nB: Descanse um pouco.",
 exampleSrc:"A: My foot hurts a lot.\nB: Did you walk a lot?\nA: Yes, all day.\nB: Rest a little.",
 funFact:"'A pé' (on foot) is a common way to say walking. 'Vou a pé' means 'I am going on foot'."},

{type:"tip", title:"Body Parts with Articles",
 text:"Portuguese uses the definite article before body parts more than English:\n\nLave as mãos. (Wash your hands.)\nA cabeça dói. (My head hurts.)\nAbra a boca. (Open your mouth.)\n\nNotice how Portuguese says 'the hands' and 'the head' where English uses 'your'. The possessive is implied by context. This is very common.",
 deepDive:{title:"Mão vs Não vs Mão",
  text:"Be careful with the tilde! 'Mão' (hand) sounds nasal. 'Não' (no) sounds similar but has a different meaning entirely. The nasal accent is crucial. Practice saying 'A mão não está' (The hand is not here) to train both sounds together."}},

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
 example:"A: Que dor!\nB: Onde dói?\nA: Aqui, nas costas.\nB: Precisa de remédio?",
 exampleSrc:"A: What pain!\nB: Where does it hurt?\nA: Here, in my back.\nB: Do you need medicine?",
 funFact:"'Dor de cotovelo' (elbow pain) is slang for the ache of heartbreak or jealousy after lost love."},

{type:"teach", trg:"sentir", src:"to feel", pos:"verb", gender:null,
 note:"Irregular -ir verb: sinto, sente, sentimos, sentem. Reflexive for emotions: sentir-se.",
 example:"A: Como você se sente?\nB: Me sinto mal.\nA: O que você sente?\nB: Dor e cansaço.",
 exampleSrc:"A: How do you feel?\nB: I feel bad.\nA: What do you feel?\nB: Pain and tiredness.",
 funFact:"Same Latin root as English 'sentiment'. Used reflexively for 'feel oneself': sentir-se bem, sentir-se mal."},

{type:"teach", trg:"doer", src:"to hurt", pos:"verb", gender:null,
 note:"To hurt. Works backwards: body part is subject, person is object. Dói-me a cabeça = My head hurts (lit. the head hurts me).",
 example:"A: Dói-me a cabeça.\nB: Muito?\nA: Sim, desde de manhã.\nB: Toma um analgésico.",
 exampleSrc:"A: My head hurts.\nB: A lot?\nA: Yes, since this morning.\nB: Take a painkiller.",
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
 example:"A: Preciso de remédio.\nB: Para quê?\nA: Para dor de cabeça.\nB: Tem na farmácia.",
 exampleSrc:"A: I need medicine.\nB: For what?\nA: For a headache.\nB: You can find it at the pharmacy.",
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
]}]}

]}; export default UNIT_09;
