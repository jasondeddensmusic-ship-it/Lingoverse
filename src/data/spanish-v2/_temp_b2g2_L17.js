// B2 Gap2 Lesson 17 - Emotions & Inner Life
const LESSON_17 = {id:"esv2_b2g2_l17",title:"Emociones y vida interior",icon:"💫",xp:15,board:true,steps:[
{type:"intro",title:"Emociones y vida interior",desc:"Express complex emotions, inner states, and psychological experiences with advanced Spanish vocabulary.",goals:["Learn 20 words about emotions and inner life","Describe complex feelings precisely","Discuss psychological experiences fluently"]},

{type:"teach",trg:"el agobio",src:"the overwhelm / stress",pos:"noun",gender:"m",
 note:"Masculine noun. A suffocating feeling of being overwhelmed.",
 example:"A: El agobio de los exámenes no me deja dormir.\nB: Intenta organizarte mejor con un calendario.",
 exampleSrc:"A: The stress of exams does not let me sleep.\nB: Try to organize yourself better with a calendar.",
 funFact:"Uniquely Spanish. No exact English equivalent. Combines stress, oppression, and claustrophobia."},

{type:"teach",trg:"el alivio",src:"the relief",pos:"noun",gender:"m",
 note:"Masculine noun. The feeling when pain or worry disappears.",
 example:"A: Sentí un enorme alivio al recibir los resultados.\nB: La espera había sido insoportable.",
 exampleSrc:"A: I felt enormous relief when I received the results.\nB: The wait had been unbearable.",
 funFact:"'Aliviar' (to relieve) is the verb. 'Qué alivio' is an extremely common exclamation."},

{type:"teach",trg:"la audacia",src:"the boldness / audacity",pos:"noun",gender:"f",
 note:"Feminine noun. Fearless willingness to take risks.",
 example:"A: Admiro la audacia de los emprendedores jóvenes.\nB: Se lanzan a crear empresas sin miedo.",
 exampleSrc:"A: I admire the boldness of young entrepreneurs.\nB: They launch businesses fearlessly.",
 funFact:"Can be positive (bravery) or negative (nerve). 'Tuvo la audacia de mentir' is reproachful."},

{type:"teach",trg:"la delicadeza",src:"the delicacy / sensitivity",pos:"noun",gender:"f",
 note:"Feminine noun. Graceful tact and sensitivity in dealing with others.",
 example:"A: Le dio la noticia con mucha delicadeza.\nB: No quería causarle más dolor del necesario.",
 exampleSrc:"A: He gave her the news with great delicacy.\nB: He did not want to cause her more pain than necessary.",
 funFact:"'Falta de delicadeza' (lack of tact) is a common complaint when someone is insensitive."},

{type:"teach",trg:"el convencimiento",src:"the conviction / firm belief",pos:"noun",gender:"m",
 note:"Masculine noun. A deeply held certainty about something.",
 example:"A: Tiene el convencimiento de que todo saldrá bien.\nB: Su optimismo es contagioso.",
 exampleSrc:"A: He has the conviction that everything will turn out well.\nB: His optimism is contagious.",
 funFact:"From 'convencer'. More personal than 'convicción', which sounds more ideological or political."},

{type:"mc",q:"¿Qué es el agobio?",opts:["Una sensación asfixiante de estrés","Un sentimiento de alegría","Un estado de calma total","Una emoción de sorpresa"],ans:"Una sensación asfixiante de estrés",hint:"Think about that suffocating feeling when everything feels like too much to handle."},

{type:"teach",trg:"decepcionante",src:"disappointing",pos:"adj",gender:null,
 note:"Adjective. Failing to meet hopes or expectations. Same form m/f.",
 example:"A: La película fue bastante decepcionante.\nB: Esperaba mucho más del director.",
 exampleSrc:"A: The film was quite disappointing.\nB: I expected much more from the director.",
 funFact:"False friend alert: 'decepcionar' = to disappoint, NOT to deceive. 'Engañar' = to deceive."},

{type:"teach",trg:"la certeza",src:"the certainty",pos:"noun",gender:"f",
 note:"Feminine noun. Complete sureness about something.",
 example:"A: No tengo la certeza de que llueva mañana.\nB: El pronóstico dice que hay un cincuenta por ciento.",
 exampleSrc:"A: I do not have the certainty that it will rain tomorrow.\nB: The forecast says there is a fifty percent chance.",
 funFact:"'Con certeza' is more formal than 'seguro'. Used in academic and legal writing."},

{type:"teach",trg:"la confusión",src:"the confusion",pos:"noun",gender:"f",
 note:"Feminine noun. A state of not understanding or mixing things up.",
 example:"A: Reinaba la confusión tras el anuncio inesperado.\nB: Nadie sabía qué iba a pasar.",
 exampleSrc:"A: Confusion reigned after the unexpected announcement.\nB: Nobody knew what was going to happen.",
 funFact:"'Crear confusión' and 'sembrar confusión' (sow confusion) are both common collocations."},

{type:"teach",trg:"la coincidencia",src:"the coincidence",pos:"noun",gender:"f",
 note:"Feminine noun. Two things happening together by chance.",
 example:"A: ¡Qué coincidencia verte aquí en París!\nB: ¡No me lo puedo creer! ¿Cuándo llegaste?",
 exampleSrc:"A: What a coincidence to see you here in Paris!\nB: I cannot believe it! When did you arrive?",
 funFact:"'No es coincidencia que...' (it is no coincidence that...) is a classic rhetorical device."},

{type:"teach",trg:"la contemplación",src:"the contemplation",pos:"noun",gender:"f",
 note:"Feminine noun. Deep, reflective thought or gazing.",
 example:"A: Se sentó en contemplación frente al mar.\nB: El sonido de las olas le ayudaba a pensar.",
 exampleSrc:"A: He sat in contemplation in front of the sea.\nB: The sound of the waves helped him think.",
 funFact:"'Sin contemplaciones' (without mercy) is the opposite. Very common in everyday Spanish."},

{type:"fb",s:"La película fue muy {1}, no cumplió con las expectativas.",a:["decepcionante"],opts:["decepcionante","agobiante","audaz","delicada"],hint:"An adjective meaning it failed to meet what people hoped for.",sSrc:"The film was very {1}, it did not meet expectations."},

{type:"teach",trg:"la brevedad",src:"the brevity / shortness",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being brief or concise.",
 example:"A: Responda con la mayor brevedad posible.\nB: Intentaré tener todo listo para mañana.",
 exampleSrc:"A: Please respond as soon as possible.\nB: I will try to have everything ready for tomorrow.",
 funFact:"'A la mayor brevedad' is THE standard formal Spanish phrase for 'as soon as possible'."},

{type:"teach",trg:"creíble",src:"credible / believable",pos:"adj",gender:null,
 note:"Adjective. Able to be believed or trusted. Same form m/f.",
 example:"A: Su historia no era nada creíble.\nB: Tenía demasiados detalles contradictorios.",
 exampleSrc:"A: His story was not at all credible.\nB: It had too many contradictory details.",
 funFact:"'Increíble' (incredible/unbelievable) is used 100 times more often in daily conversation."},

{type:"teach",trg:"admirable",src:"admirable / praiseworthy",pos:"adj",gender:null,
 note:"Adjective. Deserving respect and approval. Same form m/f.",
 example:"A: Su paciencia con los niños es admirable.\nB: No todo el mundo tiene ese don.",
 exampleSrc:"A: His patience with children is admirable.\nB: Not everyone has that gift.",
 funFact:"From Latin admirabilis. Stressed on the third syllable: ad-mi-RA-ble. Same in English and Spanish."},

{type:"teach",trg:"angelical",src:"angelic",pos:"adj",gender:null,
 note:"Adjective. Having the innocent beauty of an angel. Same form m/f.",
 example:"A: Tiene una voz angelical que emociona a todos.\nB: Parece que un ángel estuviera cantando.",
 exampleSrc:"A: She has an angelic voice that moves everyone.\nB: It seems like an angel were singing.",
 funFact:"Often used with irony: 'con su cara angelical' (with his angelic face) before describing mischief."},

{type:"mc",q:"¿Cuál es el falso amigo de 'decepcionar'?",opts:["No significa engañar, sino desilusionar","No significa alegrar, sino entristecer","No significa confundir, sino aclarar","No significa amar, sino odiar"],ans:"No significa engañar, sino desilusionar",hint:"English speakers often think this word means to trick someone, but in Spanish it means to let down."},

{type:"teach",trg:"cínico",src:"cynical",pos:"adj",gender:null,
 note:"Adjective. Believing people are motivated only by self-interest.\nFeminine: cínica.",
 example:"A: Es muy cínico sobre la política.\nB: Dice que todos los políticos mienten.",
 exampleSrc:"A: He is very cynical about politics.\nB: He says all politicians lie.",
 funFact:"From the Greek Cynics, who rejected social conventions. Diogenes lived in a barrel."},

{type:"teach",trg:"bondadoso",src:"kind-hearted",pos:"adj",gender:null,
 note:"Adjective. Deeply and naturally kind.\nFeminine: bondadosa.",
 example:"A: Era una persona bondadosa que ayudaba a todos.\nB: El barrio entero fue a su funeral.",
 exampleSrc:"A: He was a kind-hearted person who helped everyone.\nB: The whole neighborhood went to his funeral.",
 funFact:"Stronger than 'amable'. Implies genuine inner goodness, not just polite behavior."},

{type:"teach",trg:"apuesto",src:"handsome / good-looking",pos:"adj",gender:null,
 note:"Adjective. Attractively elegant (usually for men).\nFeminine: apuesta.",
 example:"A: De joven era muy apuesto.\nB: Todavía conserva un porte muy elegante.",
 exampleSrc:"A: As a young man he was very handsome.\nB: He still maintains a very elegant bearing.",
 funFact:"More refined than 'guapo'. 'Apuesto' implies distinguished elegance, not just physical beauty."},

{type:"fb",s:"Respondió con la mayor {1} posible al correo urgente.",a:["brevedad"],opts:["brevedad","confusión","contemplación","coincidencia"],hint:"The noun used in the formal phrase meaning 'as soon as possible'.",sSrc:"He responded with the greatest {1} possible to the urgent email."},

{type:"match",pairs:[{trg:"agobio",src:"overwhelm"},{trg:"alivio",src:"relief"},{trg:"certeza",src:"certainty"},{trg:"cínico",src:"cynical"},{trg:"bondadoso",src:"kind-hearted"}]}
]};

export default LESSON_17;
