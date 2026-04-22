// Spanish B2 Gap Batch 3 - Lesson 3: Health & the Body
// 15 teach cards + quizzes, max 30 steps

const LESSON_3 = {id:"esv2_b2g3_l3", title:"Salud y cuerpo", icon:"🏥", xp:15, board:true, steps:[
  {type:"intro", title:"Salud y cuerpo", desc:"Learn medical and health vocabulary for discussing conditions, treatments, and body-related topics at a B2 level.", goals:["Learn 15 health and body terms","Discuss medical conditions","Use scientific vocabulary naturally"]},

  {type:"teach", trg:"la diabetes", src:"diabetes", pos:"noun", gender:"f", note:"Feminine, invariable noun. No plural form change.\nA chronic condition affecting blood sugar.", example:"A: Mi abuelo tiene diabetes tipo dos.\nB: ¿Toma medicación o se controla con dieta?", exampleSrc:"A: My grandfather has type two diabetes.\nB: Does he take medication or control it with diet?", funFact:"From Greek diabainein (to pass through). The word has barely changed across languages in over 2,000 years."},

  {type:"teach", trg:"diabético", src:"diabetic", pos:"adj", gender:null, note:"Adjective and noun. Diabético/a depending on gender.\nUn paciente diabético = a diabetic patient.", example:"A: ¿Este postre es apto para diabéticos?\nB: Sí, está hecho con edulcorante natural.", exampleSrc:"A: Is this dessert suitable for diabetics?\nB: Yes, it's made with natural sweetener.", funFact:"The accent on the i is essential: diabético. Without it, the stress would fall on the wrong syllable."},

  {type:"teach", trg:"el diagnóstico", src:"the diagnosis", pos:"noun", gender:"m", note:"From diagnosticar (to diagnose).\nThe identification of a medical condition.", example:"A: ¿Cuándo tendrás el diagnóstico?\nB: El médico me dará los resultados mañana.", exampleSrc:"A: When will you have the diagnosis?\nB: The doctor will give me the results tomorrow.", funFact:"From Greek diagnōsis (to discern). The Spanish pronunciation puts stress on the o: dia-GNOS-ti-co."},

  {type:"teach", trg:"dietético", src:"dietary / dietetic", pos:"adj", gender:null, note:"Related to diet. Productos dietéticos = dietary products.\nAlso: un centro dietético = a nutrition clinic.", example:"A: Estos cereales son dietéticos.\nB: ¿Eso significa que tienen menos azúcar?", exampleSrc:"A: These cereals are dietetic.\nB: Does that mean they have less sugar?", funFact:"Spain has strict EU regulations on what can be labelled dietético. Not every 'light' product qualifies."},

  {type:"teach", trg:"deshidratar", src:"to dehydrate", pos:"verb", gender:null, note:"Des- (removal) + hidratar (to hydrate).\nAlso used for drying food: frutas deshidratadas.", example:"A: Con este calor es fácil deshidratarse.\nB: Tienes razón, hay que beber mucha agua.", exampleSrc:"A: In this heat it's easy to get dehydrated.\nB: You're right, you have to drink a lot of water.", funFact:"The prefix des- reverses actions in Spanish, just like de-/un- in English: hacer/deshacer, hidratar/deshidratar."},

  {type:"teach", trg:"el desmayo", src:"the fainting spell", pos:"noun", gender:"m", note:"From desmayarse (to faint).\nA brief loss of consciousness.", example:"A: Tuvo un desmayo en la oficina.\nB: ¿Lo llevaron al hospital?", exampleSrc:"A: He had a fainting spell at the office.\nB: Did they take him to the hospital?", funFact:"Desmayar may come from Old French esmaier (to dismay). The connection between fear and fainting is ancient."},

  {type:"mc", q:"¿Qué es un desmayo?", opts:["Una pérdida breve de consciencia","Un dolor de cabeza fuerte","Una alergia alimentaria","Un tipo de medicamento"], ans:"Una pérdida breve de consciencia", hint:"When someone briefly loses consciousness and falls, this is what happened."},

  {type:"teach", trg:"el cutis", src:"the complexion / facial skin", pos:"noun", gender:"m", note:"Invariable: singular and plural are the same (el cutis, los cutis).\nRefers specifically to facial skin quality.", example:"A: Tienes un cutis perfecto. ¿Cuál es tu secreto?\nB: Bebo mucha agua y uso protección solar.", exampleSrc:"A: You have perfect skin. What's your secret?\nB: I drink lots of water and use sun protection.", funFact:"From Latin cutis (skin). In Spanish it specifically means face skin quality, not skin in general (that's piel)."},

  {type:"teach", trg:"la dermis", src:"the dermis", pos:"noun", gender:"f", note:"The inner layer of skin, below the epidermis.\nScientific/medical term.", example:"A: La crema penetra hasta la dermis.\nB: Por eso es tan efectiva contra las arrugas.", exampleSrc:"A: The cream penetrates to the dermis.\nB: That's why it's so effective against wrinkles.", funFact:"Dermis gives us dermatólogo (dermatologist). Greek derma (skin) is the root of many medical terms."},

  {type:"teach", trg:"el edulcorante", src:"the sweetener", pos:"noun", gender:"m", note:"From dulce (sweet) with the prefix e- and suffix -ante.\nArtificial or natural sugar substitutes.", example:"A: ¿Quieres azúcar en el café?\nB: No, mejor un edulcorante, estoy a dieta.", exampleSrc:"A: Do you want sugar in your coffee?\nB: No, better a sweetener, I'm on a diet.", funFact:"The most common edulcorante in Spain is saccharin. Stevia has gained popularity since the 2010s."},

  {type:"fb", s:"Con este calor, es importante beber agua para no {1}.", a:["deshidratarse"], opts:["deshidratarse","desmayarse","diagnosticarse","desvelarse"], hint:"When your body loses too much water, this happens.", sSrc:"In this heat, it is important to drink water to avoid {1}."},

  {type:"teach", trg:"la absorción", src:"the absorption", pos:"noun", gender:"f", note:"From absorber (to absorb). Both physical and figurative.\nHow the body takes in nutrients or medicine.", example:"A: La absorción del hierro mejora con vitamina C.\nB: Por eso tomo el suplemento con zumo de naranja.", exampleSrc:"A: Iron absorption improves with vitamin C.\nB: That's why I take the supplement with orange juice.", funFact:"The -ción suffix is the Spanish equivalent of English -tion. Over 10,000 Spanish words end in -ción."},

  {type:"teach", trg:"la eficacia", src:"the effectiveness / efficacy", pos:"noun", gender:"f", note:"The ability to produce the desired result.\nNot the same as eficiencia (efficiency).", example:"A: ¿Cuál es la eficacia de esta vacuna?\nB: Tiene un noventa y cinco por ciento, es muy buena.", exampleSrc:"A: What is the efficacy of this vaccine?\nB: It has ninety-five percent, it is very good.", funFact:"Eficacia vs eficiencia: eficacia = achieving goals, eficiencia = achieving goals with minimal waste. Subtle but important."},

  {type:"teach", trg:"el acupuntor", src:"the acupuncturist", pos:"noun", gender:"m", note:"Male form. Female: la acupuntora.\nA practitioner of acupuncture (acupuntura).", example:"A: Mi acupuntor me ha ayudado mucho con el dolor de espalda.\nB: ¿De verdad? Yo siempre he tenido curiosidad.", exampleSrc:"A: My acupuncturist has helped me a lot with back pain.\nB: Really? I've always been curious.", funFact:"From Latin acus (needle) + punctura (pricking). Acupuncture arrived in Spain in the 1970s and is now widely practiced."},

  {type:"mc", q:"La absorción del hierro mejora con...", opts:["dermis","vitamina C","antibióticos","edulcorantes"], ans:"vitamina C", hint:"A vitamin found in citrus fruits enhances how the body takes in iron."},

  {type:"teach", trg:"la conjuntivitis", src:"conjunctivitis / pink eye", pos:"noun", gender:"f", note:"Inflammation of the conjunctiva (eye membrane).\nVery contagious, especially in children.", example:"A: El niño tiene conjuntivitis y no puede ir al colegio.\nB: Es muy contagiosa, mejor que se quede en casa.", exampleSrc:"A: The child has conjunctivitis and can't go to school.\nB: It's very contagious, better that he stays home.", funFact:"The suffix -itis means inflammation in medical Spanish: conjuntivitis, bronquitis, gastritis. Greek medical roots are universal."},

  {type:"match", pairs:[{trg:"diabetes", src:"diabetes"},{trg:"desmayo", src:"fainting spell"},{trg:"cutis", src:"complexion"},{trg:"edulcorante", src:"sweetener"},{trg:"eficacia", src:"effectiveness"}]},

  {type:"fb", s:"El médico aún no ha dado el {1} definitivo.", a:["diagnóstico"], opts:["diagnóstico","desmayo","edulcorante","cutis"], hint:"The medical identification of a condition or disease.", sSrc:"The doctor has not yet given the definitive {1}."},

  {type:"mc", q:"¿Qué palabra describe la piel del rostro?", opts:["El desmayo","La dermis","El cutis","La absorción"], ans:"El cutis", hint:"This word specifically refers to the quality and appearance of facial skin, not the scientific layer."},

  {type:"fb", s:"La {1} de este medicamento ha sido probada en estudios clínicos.", a:["eficacia"], opts:["eficacia","absorción","dermis","diabetes"], hint:"How well something works at achieving its intended result.", sSrc:"The {1} of this medication has been proven in clinical studies."}
]};

export default LESSON_3;
