const UNIT_31 = {n:31, lang:"pt", srcLang:"en", track:"v2", title:"História e patrimônio", sub:"History and Heritage", icon:"🏛️", level:"B2.2", color:"#7B5EE8", lessons:[

{id:"ptv2_u31l1", title:"Time and Eras", icon:"⏳", xp:15, board:true, steps:[
{type:"intro", title:"Talking About History",
 desc:"Brazilian history spans five centuries of colonization, empire, and republic. This lesson gives you the vocabulary to talk about eras, from distant past to future.",
 goals:["Learn core history terms","Discuss centuries and eras","Position events in time"]},

{type:"teach", trg:"história", src:"history / story", pos:"noun", gender:"f",
 note:"Means both 'history' (the discipline) and 'story' (a narrative). Context decides.",
 example:"A: Você gosta de história?\nB: Adoro. A história do Brasil é fascinante.",
 exampleSrc:"A: Do you like history?\nB: I love it. Brazilian history is fascinating.",
 funFact:"Comes from Greek 'historía', meaning 'inquiry' or 'knowledge obtained through investigation'."},

{type:"teach", trg:"século", src:"century", pos:"noun", gender:"m",
 note:"Used with Roman numerals in Portuguese: século XIX, século XX, século XXI.",
 example:"A: Quando o Brasil foi descoberto?\nB: No século XVI, em 1500.",
 exampleSrc:"A: When was Brazil discovered?\nB: In the 16th century, in 1500.",
 funFact:"Portuguese reads 'século XIX' as 'século dezenove'. Ordinals are rare for centuries above ten."},

{type:"teach", trg:"passado", src:"past", pos:"noun", gender:"m",
 note:"Also works as an adjective meaning 'previous', as in 'o ano passado' (last year).",
 example:"A: No passado, viajar era mais lento.\nB: Verdade. Hoje tudo é rápido.",
 exampleSrc:"A: In the past, traveling was slower.\nB: True. Today everything is fast.",
 funFact:"Same word is used for the grammatical past tense: 'tempo passado'."},

{type:"teach", trg:"presente", src:"present / gift", pos:"noun", gender:"m",
 note:"Means both 'the present (time)' and 'a gift'. Also an adjective: 'estar presente' (to be present).",
 example:"A: Vivemos um presente cheio de mudanças.\nB: Sim, o mundo muda todos os dias.",
 exampleSrc:"A: We live in a present full of changes.\nB: Yes, the world changes every day.",
 funFact:"The overlap between 'gift' and 'present time' exists in English too. Both come from Latin 'praesens'."},

{type:"teach", trg:"futuro", src:"future", pos:"noun", gender:"m",
 note:"Also an adjective: 'meu futuro marido' (my future husband).",
 example:"A: Como você imagina o futuro?\nB: Cheio de tecnologia e oportunidades.",
 exampleSrc:"A: How do you imagine the future?\nB: Full of technology and opportunities.",
 funFact:"Also names the future verb tense in grammar: 'tempo futuro'."},

{type:"mc",
 q:"Which word means 'century' in Portuguese?",
 opts:["século","passado","futuro","história"],
 ans:"século",
 hint:"A century is a period of one hundred years. Pick the matching term."},

{type:"fb",
 s:"O Brasil foi descoberto no {1} XVI.",
 a:["século"],
 opts:["século","passado","presente","futuro"],
 hint:"XVI is a Roman numeral for a 100-year period.",
 sSrc:"Brazil was discovered in the 16th {1}."},

{type:"mc",
 q:"Complete: 'No ___, as pessoas escreviam cartas à mão.'",
 opts:["presente","passado","século","futuro"],
 ans:"passado",
 hint:"The sentence describes something people did long ago, not now."},

{type:"fb",
 s:"O {1} estuda os eventos do passado.",
 a:["historiador"],
 opts:["historiador","escritor","médico","advogado"],
 hint:"Someone who studies and writes about the past.",
 sSrc:"The {1} studies events of the past."},

{type:"mc",
 q:"'O futuro' refers to:",
 opts:["what happened yesterday","what is happening now","what will happen later","the distant past"],
 ans:"what will happen later",
 hint:"The time dimension that comes after the present."},

{type:"fb",
 s:"Vivemos no {1}, entre o passado e o futuro.",
 a:["presente"],
 opts:["presente","passado","futuro","século"],
 hint:"The time that is happening right now.",
 sSrc:"We live in the {1}, between the past and the future."},

{type:"mc",
 q:"História can mean both 'history' and:",
 opts:["lesson","century","poem","story"],
 ans:"story",
 hint:"A narrative, whether fictional or factual."},

{type:"fb",
 s:"A {1} estuda os eventos do passado e do presente.",
 a:["história"],
 opts:["história","século","futuro","presente"],
 hint:"The discipline and the subject, means both 'history' and 'story'.",
 sSrc:"The {1} studies the events of the past and present."},

{type:"fb",
 s:"O {1} ainda está por vir. Ninguém sabe o que vai acontecer.",
 a:["futuro"],
 opts:["futuro","passado","século","presente"],
 hint:"The time dimension that comes after the present.",
 sSrc:"The {1} is yet to come. No one knows what will happen."},

{type:"match", pairs:[
 {trg:"história", src:"history"},
 {trg:"século", src:"century"},
 {trg:"passado", src:"past"},
 {trg:"presente", src:"present"},
 {trg:"futuro", src:"future"}
]}
]},

{id:"ptv2_u31l2", title:"Colonial Era", icon:"⛵", xp:15, board:true, steps:[
{type:"intro", title:"Colony and Discovery",
 desc:"Brazil's story begins with Portuguese arrival in 1500. For over three centuries, the country was a colony before becoming independent.",
 goals:["Learn colonial-era vocabulary","Discuss discovery and independence","Talk about historical transitions"]},

{type:"teach", trg:"colônia", src:"colony", pos:"noun", gender:"f",
 note:"A territory controlled by a foreign power. Brazil was a Portuguese colony from 1500 to 1822.",
 example:"A: O Brasil foi uma colônia portuguesa?\nB: Sim, por mais de trezentos anos.",
 exampleSrc:"A: Was Brazil a Portuguese colony?\nB: Yes, for more than three hundred years.",
 funFact:"Also means 'a community of immigrants': 'a colônia italiana de São Paulo'."},

{type:"teach", trg:"descobrimento", src:"discovery", pos:"noun", gender:"m",
 note:"Refers specifically to the European 'discovery' of new lands. Historians now prefer 'chegada' (arrival) out of respect for indigenous peoples.",
 example:"A: Quando foi o descobrimento do Brasil?\nB: Em 22 de abril de 1500.",
 exampleSrc:"A: When was the discovery of Brazil?\nB: On April 22, 1500.",
 funFact:"Pedro Álvares Cabral 'discovered' Brazil by accident on his way to India. Or so the story goes."},

{type:"teach", trg:"independência", src:"independence", pos:"noun", gender:"f",
 note:"Brazil declared independence from Portugal on September 7, 1822. A national holiday.",
 example:"A: Quando o Brasil conquistou sua independência?\nB: Em 1822, com Dom Pedro I.",
 exampleSrc:"A: When did Brazil win its independence?\nB: In 1822, with Dom Pedro I.",
 funFact:"The famous cry was 'Independência ou morte!' ('Independence or death!') on the banks of the Ipiranga river."},

{type:"teach", trg:"império", src:"empire", pos:"noun", gender:"m",
 note:"After independence, Brazil was an empire from 1822 to 1889, ruled by Dom Pedro I and Dom Pedro II.",
 example:"A: Brasil já teve um império?\nB: Sim, por quase setenta anos no século XIX.",
 exampleSrc:"A: Did Brazil ever have an empire?\nB: Yes, for nearly seventy years in the 19th century.",
 funFact:"Brazil is the only country in the Americas that was an independent empire, not a republic, in the 1800s."},

{type:"teach", trg:"escravidão", src:"slavery", pos:"noun", gender:"f",
 note:"A dark chapter: Brazil received more enslaved Africans than any other country in the Americas.",
 example:"A: A escravidão durou muito no Brasil?\nB: Quase quatro séculos, infelizmente.",
 exampleSrc:"A: Did slavery last long in Brazil?\nB: Almost four centuries, unfortunately.",
 funFact:"Brazil was the last country in the Americas to abolish slavery, in 1888."},

{type:"teach", trg:"abolição", src:"abolition", pos:"noun", gender:"f",
 note:"The ending of slavery. The 'Lei Áurea' (Golden Law) of May 13, 1888 abolished it in Brazil.",
 example:"A: Quem assinou a abolição?\nB: A Princesa Isabel, em 1888.",
 exampleSrc:"A: Who signed the abolition?\nB: Princess Isabel, in 1888.",
 funFact:"The law was only two sentences long, but it freed over 700,000 enslaved people overnight."},

{type:"mc",
 q:"Which term means 'the ending of slavery'?",
 opts:["abolição","império","colônia","descobrimento"],
 ans:"abolição",
 hint:"Think of abolishing a practice. The noun form is very close to the English word."},

{type:"fb",
 s:"O Brasil foi uma {1} portuguesa até 1822.",
 a:["colônia"],
 opts:["colônia","república","império","abolição"],
 hint:"A territory governed by a distant European power.",
 sSrc:"Brazil was a Portuguese {1} until 1822."},

{type:"mc",
 q:"After 1822, Brazil became what kind of state?",
 opts:["uma colônia","um império","uma república","uma revolução"],
 ans:"um império",
 hint:"Dom Pedro I led the new state. Think of the form of government ruled by an emperor."},

{type:"fb",
 s:"O {1} do Brasil ocorreu em 1500.",
 a:["descobrimento"],
 opts:["descobrimento","império","passado","presente"],
 hint:"The event when Portuguese explorers first arrived.",
 sSrc:"The {1} of Brazil occurred in 1500."},

{type:"mc",
 q:"Who signed the Lei Áurea, abolishing slavery in Brazil?",
 opts:["Dom Pedro I","Dom Pedro II","Princesa Isabel","Getúlio Vargas"],
 ans:"Princesa Isabel",
 hint:"A princess who signed the landmark document in 1888."},

{type:"fb",
 s:"O Brasil proclamou sua {1} em 7 de setembro de 1822.",
 a:["independência"],
 opts:["independência","abolição","república","colônia"],
 hint:"Freedom from foreign rule. Long feminine noun.",
 sSrc:"Brazil proclaimed its {1} on September 7, 1822."},

{type:"mc",
 q:"Brazil was a Portuguese colony for approximately how long?",
 opts:["500 years","100 years","200 years","300 years"],
 ans:"300 years",
 hint:"From 1500 to 1822 is roughly three centuries."},

{type:"fb",
 s:"A {1} foi a lei que libertou os escravizados no Brasil em 1888.",
 a:["abolição"],
 opts:["abolição","independência","colônia","império"],
 hint:"The act of legally ending slavery. The noun matches the English root.",
 sSrc:"The {1} was the law that freed enslaved people in Brazil in 1888."},

{type:"fb",
 s:"O Brasil foi o último país das Américas a decretar a {1} da escravatura.",
 a:["abolição"],
 opts:["abolição","independência","revolução","república"],
 hint:"The formal end of slavery. Long feminine noun ending in -ção.",
 sSrc:"Brazil was the last country in the Americas to decree the {1} of slavery."},

{type:"match", pairs:[
 {trg:"colônia", src:"colony"},
 {trg:"descobrimento", src:"discovery"},
 {trg:"independência", src:"independence"},
 {trg:"abolição", src:"abolition"},
 {trg:"escravidão", src:"slavery"}
]}
]},

{id:"ptv2_u31l3", title:"Conflict and Peace", icon:"⚔️", xp:15, board:true, steps:[
{type:"intro", title:"War, Peace, and Revolution",
 desc:"Every country has moments of conflict and transformation. Learn the vocabulary of upheaval and resolution.",
 goals:["Learn conflict and peace vocabulary","Discuss revolutions and wars","Understand political transitions"]},

{type:"teach", trg:"revolução", src:"revolution", pos:"noun", gender:"f",
 note:"A sudden, radical change, usually political. Brazil had several: 1930, 1964.",
 example:"A: A Revolução de 1930 mudou o Brasil?\nB: Muito. Ela derrubou a velha ordem.",
 exampleSrc:"A: Did the 1930 Revolution change Brazil?\nB: A lot. It toppled the old order.",
 funFact:"Also used metaphorically: 'uma revolução tecnológica' (a tech revolution)."},

{type:"teach", trg:"guerra", src:"war", pos:"noun", gender:"f",
 note:"Armed conflict between states or groups. Brazil fought in the Paraguayan War (1864-1870) and WWII.",
 example:"A: O Brasil participou da Segunda Guerra Mundial?\nB: Sim, enviou tropas à Itália em 1944.",
 exampleSrc:"A: Did Brazil take part in World War II?\nB: Yes, it sent troops to Italy in 1944.",
 funFact:"The Brazilian Expeditionary Force wore a smoking-snake patch, based on the saying 'a cobra vai fumar'."},

{type:"teach", trg:"paz", src:"peace", pos:"noun", gender:"f",
 note:"The opposite of war. Also used in greetings and everyday expressions: 'fique em paz' (be at peace).",
 example:"A: Depois da guerra, veio a paz.\nB: Graças a Deus. A paz é sempre melhor.",
 exampleSrc:"A: After the war came peace.\nB: Thank God. Peace is always better.",
 funFact:"Brazil has not fought an interstate war since 1945. Seventy-plus years of diplomatic peace."},

{type:"teach", trg:"república", src:"republic", pos:"noun", gender:"f",
 note:"A state without a monarch. Brazil became a republic in 1889 and has been one since.",
 example:"A: Quando o Brasil virou república?\nB: Em 15 de novembro de 1889.",
 exampleSrc:"A: When did Brazil become a republic?\nB: On November 15, 1889.",
 funFact:"The Proclamation of the Republic was almost a coincidence. Many Brazilians did not even know it happened that day."},

{type:"tip", title:"Timeline of Brazilian History",
 text:"Key eras:\n\n1500 to 1822: Colônia (colony under Portugal)\n1822 to 1889: Império (empire under Dom Pedro I and II)\n1889 to today: República (republic)\n\n1888: Abolição da escravidão (end of slavery)\n1930: Revolução de Vargas\n1964 to 1985: Ditadura militar (military dictatorship)\n1985 to today: Nova República (democratic period)",
 deepDive:{title:"Why 1822 and 1889 Matter",
  text:"1822 gave Brazil political autonomy but kept a Portuguese-descended monarch. 1889 removed the monarch entirely. Together these two dates mark the transition from European dependency to a fully self-defined Brazilian state. Historians call the span between them 'o longo século XIX brasileiro'."}},

{type:"mc",
 q:"Which word means 'peace'?",
 opts:["paz","revolução","império","guerra"],
 ans:"paz",
 hint:"Three letters, the opposite of armed conflict."},

{type:"fb",
 s:"A {1} de 1930 transformou a política brasileira.",
 a:["Revolução"],
 opts:["Revolução","Guerra","Colônia","Abolição"],
 hint:"A sudden radical political change, led by Getúlio Vargas.",
 sSrc:"The 1930 {1} transformed Brazilian politics."},

{type:"mc",
 q:"Since 1889, Brazil has been a:",
 opts:["império","república","ditadura","colônia"],
 ans:"república",
 hint:"A state with elected leaders, not a monarch."},

{type:"fb",
 s:"Depois da {1}, veio a paz.",
 a:["guerra"],
 opts:["guerra","paz","abolição","revolução"],
 hint:"The armed conflict that ends when peace is signed.",
 sSrc:"After the {1}, peace came."},

{type:"fb",
 s:"O Brasil virou uma {1} em 1889, quando a monarquia caiu.",
 a:["república"],
 opts:["república","colônia","império","guerra"],
 hint:"The form of government that replaced the empire.",
 sSrc:"Brazil became a {1} in 1889, when the monarchy fell."},

{type:"mc",
 q:"Which word is the OPPOSITE of 'guerra' (war)?",
 opts:["revolução","império","paz","república"],
 ans:"paz",
 hint:"Three letters. The absence of armed conflict."},

{type:"fb",
 s:"A {1} de 1930 pôs fim à Primeira República.",
 a:["Revolução"],
 opts:["Revolução","Guerra","Paz","Abolição"],
 hint:"A sudden political change that overturns the existing order.",
 sSrc:"The 1930 {1} ended the First Republic."},

{type:"match", pairs:[
 {trg:"revolução", src:"revolution"},
 {trg:"guerra", src:"war"},
 {trg:"paz", src:"peace"},
 {trg:"república", src:"republic"},
 {trg:"abolição", src:"abolition"}
]},

{type:"match", pairs:[
  {trg:"independência", src:"independence"},
  {trg:"escravidão", src:"slavery"}
]}]}

]}; export default UNIT_31;
