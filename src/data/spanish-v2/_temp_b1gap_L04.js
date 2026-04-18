// L04: Emotions & Psychology - Feelings, mental states, and personality
const LESSON_4 = {
  id:"esv2_b1gap_l4", title:"Emociones y mente", icon:"\u{1F9E0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Emociones y mente",
     desc:"Explore the inner world. Learn vocabulary for emotions, personality traits, and psychological states.",
     goals:["Learn 20 emotion and personality words","Describe how people feel and behave","Express nuanced emotional states"]},

    {type:"teach", trg:"la angustia", src:"the anguish, distress", pos:"noun", gender:"f",
     note:"Feminine noun. Deep emotional suffering.\nStronger than 'preocupaci\u00f3n'.",
     example:"A: Siento mucha angustia por la situaci\u00f3n.\nB: Lo entiendo. \u00bfQuieres hablar?",
     exampleSrc:"A: I feel a lot of anguish about the situation.\nB: I understand. Do you want to talk?",
     funFact:"From Latin 'angustia' (narrowness), from 'angustus' (narrow). Anxiety feels like the world closing in. English 'anguish' is a cousin."},

    {type:"teach", trg:"angustioso", src:"distressing, agonizing", pos:"adj", gender:null,
     note:"Adjective. Angustioso/angustiosa.\nDescribes situations that cause anguish.",
     example:"A: La espera fue angustiosa.\nB: S\u00ed, no sab\u00edamos qu\u00e9 iba a pasar.",
     exampleSrc:"A: The wait was agonizing.\nB: Yes, we did not know what was going to happen.",
     funFact:"Built from 'angustia' + '-oso' suffix (full of). This productive suffix appears in many emotion adjectives: nervioso, ansioso, furioso."},

    {type:"teach", trg:"adicto", src:"addicted", pos:"adj", gender:null,
     note:"Adjective. Also used as noun: un adicto.\nSer adicto a = to be addicted to.",
     example:"A: Es adicto al caf\u00e9.\nB: Bebe cinco tazas al d\u00eda.",
     exampleSrc:"A: He is addicted to coffee.\nB: He drinks five cups a day.",
     funFact:"From Latin 'addictus' (enslaved, bound). In Roman law, an 'addictus' was a debtor given as a slave to his creditor."},

    {type:"teach", trg:"apacible", src:"gentle, calm", pos:"adj", gender:null,
     note:"Adjective. Same form for masculine and feminine.\nDescribes peaceful temperaments.",
     example:"A: Tu gato es muy apacible.\nB: S\u00ed, nunca se enfada.",
     exampleSrc:"A: Your cat is very gentle.\nB: Yes, he never gets angry.",
     funFact:"From Latin 'placibilis' (pleasing) with prefix 'a-'. Related to 'paz' (peace) and 'apaciguar' (to calm down)."},

    {type:"teach", trg:"la amabilidad", src:"the kindness", pos:"noun", gender:"f",
     note:"Feminine noun. From 'amable' (kind, friendly).\nA valued social quality in Spain.",
     example:"A: Gracias por tu amabilidad.\nB: De nada, es un placer ayudar.",
     exampleSrc:"A: Thank you for your kindness.\nB: You are welcome, it is a pleasure to help.",
     funFact:"From Latin 'amabilis' (lovable), from 'amare' (to love). 'Muy amable' is the standard polite response when someone helps you."},

    {type:"teach", trg:"agresivo", src:"aggressive", pos:"adj", gender:null,
     note:"Adjective. Agresivo/agresiva.\nCan describe people, animals, or behavior.",
     example:"A: Ese perro parece agresivo.\nB: No, solo est\u00e1 asustado.",
     exampleSrc:"A: That dog seems aggressive.\nB: No, he is just scared.",
     funFact:"From Latin 'aggressivus', from 'aggredi' (to approach, attack). In marketing, 'una estrategia agresiva' means bold, not violent."},

    {type:"mc",
     q:"\u00bfC\u00f3mo describes a una persona tranquila y pac\u00edfica?",
     opts:["apacible","agresivo","angustioso","adicto"],
     ans:"apacible",
     hint:"This adjective comes from the Latin word for 'pleasing' and is related to 'paz' (peace)."},

    {type:"teach", trg:"la bondad", src:"the goodness, kindness", pos:"noun", gender:"f",
     note:"Feminine noun. A moral quality.\nTener la bondad de = to be so kind as to.",
     example:"A: La bondad de esa mujer es admirable.\nB: S\u00ed, siempre ayuda a los dem\u00e1s.",
     exampleSrc:"A: That woman's kindness is admirable.\nB: Yes, she always helps others.",
     funFact:"From Latin 'bonitas' (goodness). The formal phrase 'Tenga la bondad de...' (Be so kind as to...) is used in very polite requests."},

    {type:"teach", trg:"la burla", src:"the mockery, ridicule", pos:"noun", gender:"f",
     note:"Feminine noun. Burlarse de = to make fun of.\nCan be playful or cruel.",
     example:"A: No me gustan las burlas.\nB: Lo siento, solo era una broma.",
     exampleSrc:"A: I do not like the mockery.\nB: I am sorry, it was just a joke.",
     funFact:"Possibly from Italian 'burla' (joke). Burlesque theater shares this root. In Spanish, 'burlarse' ranges from gentle teasing to cruel mocking."},

    {type:"teach", trg:"la avaricia", src:"the greed, avarice", pos:"noun", gender:"f",
     note:"Feminine noun. One of the seven deadly sins.\nLa avaricia rompe el saco = greed breaks the bag.",
     example:"A: Su avaricia le hizo perder amigos.\nB: El dinero no es todo en la vida.",
     exampleSrc:"A: His greed made him lose friends.\nB: Money is not everything in life.",
     funFact:"From Latin 'avaritia'. The Spanish proverb 'la avaricia rompe el saco' means greed backfires, like a bag overstuffed until it tears."},

    {type:"teach", trg:"altivo", src:"haughty, arrogant", pos:"adj", gender:null,
     note:"Adjective. Altivo/altiva. From 'alto' (high).\nA literary, slightly formal word.",
     example:"A: Es un poco altivo con los dem\u00e1s.\nB: S\u00ed, se cree superior.",
     exampleSrc:"A: He is a bit haughty with others.\nB: Yes, he thinks he is superior.",
     funFact:"From Latin 'altivus', from 'altus' (high). Someone who is 'altivo' puts themselves 'above' others. Related to 'altitud' (altitude)."},

    {type:"fb",
     s:"Gracias por tu {1}, eres muy generosa.",
     a:["amabilidad"],
     opts:["amabilidad","avaricia","angustia","burla"],
     hint:"The noun for kindness or friendliness, derived from the adjective 'amable'.",
     sSrc:"Thank you for your {1}, you are very generous."},

    {type:"teach", trg:"ameno", src:"pleasant, enjoyable", pos:"adj", gender:null,
     note:"Adjective. Ameno/amena. Describes experiences.\nUna lectura amena = an enjoyable read.",
     example:"A: La charla fue muy amena.\nB: S\u00ed, el ponente era divertido.",
     exampleSrc:"A: The talk was very enjoyable.\nB: Yes, the speaker was funny.",
     funFact:"From Latin 'amoenus' (pleasant, charming). Romans used it to describe beautiful gardens. Horace praised 'amoenitas' in his poetry."},

    {type:"teach", trg:"amistoso", src:"friendly, amicable", pos:"adj", gender:null,
     note:"Adjective. Amistoso/amistosa.\nUn partido amistoso = a friendly match.",
     example:"A: Es un barrio muy amistoso.\nB: S\u00ed, los vecinos son encantadores.",
     exampleSrc:"A: It is a very friendly neighborhood.\nB: Yes, the neighbors are lovely.",
     funFact:"From 'amistad' (friendship) + '-oso'. In sports, 'un amistoso' alone means a friendly match, played without stakes."},

    {type:"teach", trg:"afortunado", src:"fortunate, lucky", pos:"adj", gender:null,
     note:"Adjective. Afortunado/afortunada.\nSer afortunado = to be lucky in life.",
     example:"A: Soy muy afortunado de tener esta familia.\nB: S\u00ed, tienes mucha suerte.",
     exampleSrc:"A: I am very fortunate to have this family.\nB: Yes, you are very lucky.",
     funFact:"From 'a-' + 'fortuna' (fortune). 'Desafortunado' is the opposite. Fortuna comes from the Roman goddess of luck."},

    {type:"teach", trg:"asombroso", src:"astonishing, amazing", pos:"adj", gender:null,
     note:"Adjective. Asombroso/asombrosa.\nFrom 'asombrar' (to astonish).",
     example:"A: La vista desde aqu\u00ed es asombrosa.\nB: Es incre\u00edble, \u00bfverdad?",
     exampleSrc:"A: The view from here is astonishing.\nB: It is incredible, right?",
     funFact:"From 'asombrar', originally meaning 'to cast a shadow over' (from 'sombra', shadow). Being amazed was like being overshadowed."},

    {type:"mc",
     q:"\u00bfQu\u00e9 palabra describe algo incre\u00edble y sorprendente?",
     opts:["asombroso","amistoso","angustioso","altivo"],
     ans:"asombroso",
     hint:"This adjective originally meant 'to be cast into shadow', now means amazing."},

    {type:"teach", trg:"brusco", src:"abrupt, brusque", pos:"adj", gender:null,
     note:"Adjective. Brusco/brusca. Sudden or rude.\nUn cambio brusco = a sudden change.",
     example:"A: Su respuesta fue un poco brusca.\nB: Seguro que no quer\u00eda ser grosero.",
     exampleSrc:"A: His answer was a bit brusque.\nB: Surely he did not mean to be rude.",
     funFact:"Possibly from Latin 'bruscum' (a type of plant with rough bark). The English word 'brusque' was borrowed from French, which got it from Italian."},

    {type:"teach", trg:"borracho", src:"drunk", pos:"adj", gender:null,
     note:"Adjective/noun. Borracho/borracha.\nAlso: estar borracho = to be drunk.",
     example:"A: Creo que est\u00e1 un poco borracho.\nB: S\u00ed, ha bebido demasiado vino.",
     exampleSrc:"A: I think he is a bit drunk.\nB: Yes, he has drunk too much wine.",
     funFact:"Origin uncertain. Possibly from Latin 'burricus' (small horse), because drunk people stagger like a loaded donkey. Also a sponge cake soaked in syrup."},

    {type:"fb",
     s:"La pel\u00edcula fue {1}, no par\u00e9 de re\u00edr.",
     a:["amena"],
     opts:["amena","brusca","altiva","angustiosa"],
     hint:"An adjective meaning pleasant and enjoyable, from Latin 'amoenus'.",
     sSrc:"The movie was {1}, I did not stop laughing."},

    {type:"match", pairs:[
      {trg:"angustia", src:"anguish"},
      {trg:"bondad", src:"goodness"},
      {trg:"avaricia", src:"greed"},
      {trg:"burla", src:"mockery"},
      {trg:"amabilidad", src:"kindness"}
    ]},

    // ── Salvage from v1 (B1 feelings and states) ──
    {type:"teach", trg:"frustrado", src:"frustrated", pos:"adj", gender:null,
     note:"Adjective. Frustrado/frustrada.\nEstar frustrado = to feel frustrated.",
     example:"A: Estoy frustrado con el tráfico.\nB: Sí, llevamos una hora aquí.",
     exampleSrc:"A: I am frustrated with the traffic.\nB: Yes, we have been here for an hour.",
     funFact:"From Latin 'frustratus' (deceived, thwarted). The noun is 'la frustración.' Pair with 'estar,' not 'ser,' since it describes a temporary state."},

    {type:"teach", trg:"decepcionado", src:"disappointed", pos:"adj", gender:null,
     note:"Adjective. Decepcionado/decepcionada.\nFalse friend warning: not 'deceived' in English.",
     example:"A: Estoy decepcionado con los resultados.\nB: Lo siento, esperabas más.",
     exampleSrc:"A: I am disappointed with the results.\nB: I am sorry, you were hoping for more.",
     funFact:"Classic false friend. 'Decepción' means disappointment, not deception. The Spanish word for deception is 'engaño.' English speakers frequently mix these up."},

    {type:"teach", trg:"impresionado", src:"impressed", pos:"adj", gender:null,
     note:"Adjective. Impresionado/impresionada.\nEstar impresionado por = to be impressed by.",
     example:"A: Estoy muy impresionado por tu trabajo.\nB: Muchas gracias, significa mucho.",
     exampleSrc:"A: I am very impressed by your work.\nB: Thank you very much, it means a lot.",
     funFact:"From 'impresión' (impression). Spanish also uses 'impresionado' for shock or emotional intensity, not only admiration. Context clarifies which meaning applies."},

    {type:"teach", trg:"confundido", src:"confused", pos:"adj", gender:null,
     note:"Adjective. Confundido/confundida.\nFrom 'confundir' (to confuse).",
     example:"A: Estoy un poco confundida con las instrucciones.\nB: No te preocupes, te las explico.",
     exampleSrc:"A: I am a bit confused by the instructions.\nB: Do not worry, I will explain them.",
     funFact:"From Latin 'confundere' (to mix together, literally 'pour together'). Related to 'fundir' (to melt) and 'fundición' (foundry). Confusion is a mental melting-together."},

    {type:"teach", trg:"satisfecho", src:"satisfied", pos:"adj", gender:null,
     note:"Adjective. Satisfecho/satisfecha.\nIrregular past participle of 'satisfacer'.",
     example:"A: ¿Estás satisfecho con la comida?\nB: Sí, estaba deliciosa, gracias.",
     exampleSrc:"A: Are you satisfied with the food?\nB: Yes, it was delicious, thank you.",
     funFact:"From Latin 'satisfactus' (done enough). 'Satisfacer' is irregular like 'hacer': yo satisfago, tú satisfaces. The opposite 'insatisfecho' follows the same pattern."},

    {type:"teach", trg:"celoso", src:"jealous", pos:"adj", gender:null,
     note:"Adjective. Celoso/celosa.\nEstar celoso de = to be jealous of.",
     example:"A: Mi perro está celoso del gato nuevo.\nB: Dale tiempo, se van a acostumbrar.",
     exampleSrc:"A: My dog is jealous of the new cat.\nB: Give him time, they will get used to each other.",
     funFact:"From 'celos' (jealousy), which is always plural in Spanish: 'tener celos' (to have jealousy). Related to Greek 'zelos' (zeal). English 'zealous' and Spanish 'celoso' are cousins."},

    {type:"teach", trg:"tener ganas de", src:"to feel like, to want to", pos:"verb", gender:null,
     note:"Idiomatic phrase with 'tener' + infinitive or noun.\nExpresses desire or inclination.",
     example:"A: Tengo ganas de ir al cine.\nB: Yo también, ¿vamos esta noche?",
     exampleSrc:"A: I feel like going to the movies.\nB: Me too, shall we go tonight?",
     funFact:"'Ganas' (from 'ganar,' to win) literally means something like 'earnings' or 'winnings' of desire. The phrase has no clean English equivalent. Spanish speakers use it constantly."},

    {type:"teach", trg:"seguro de sí mismo", src:"self-confident", pos:"adj", gender:null,
     note:"Adjectival phrase. Segura de sí misma for feminine.\nSí mismo/misma agrees with subject.",
     example:"A: Habla con mucha seguridad en las reuniones.\nB: Sí, es una persona muy segura de sí misma.",
     exampleSrc:"A: She speaks with confidence in meetings.\nB: Yes, she is a very self-confident person.",
     funFact:"Literally 'sure of oneself.' The reflexive 'sí mismo' must agree with the subject: él es seguro de sí mismo, ella es segura de sí misma, ellos son seguros de sí mismos."},

    {type:"teach", trg:"tenso", src:"tense", pos:"adj", gender:null,
     note:"Adjective. Tenso/tensa.\nEstar tenso = to feel tense.",
     example:"A: Estás muy tensa. ¿Qué pasa?\nB: Tengo una entrevista importante mañana.",
     exampleSrc:"A: You are very tense. What is going on?\nB: I have an important interview tomorrow.",
     funFact:"From Latin 'tensus,' past participle of 'tendere' (to stretch). The noun 'tensión' covers muscular tension, social tension, and even voltage (tensión eléctrica)."},

    {type:"match", pairs:[
      {trg:"frustrado", src:"frustrated"},
      {trg:"decepcionado", src:"disappointed"},
      {trg:"impresionado", src:"impressed"},
      {trg:"confundido", src:"confused"},
      {trg:"satisfecho", src:"satisfied"},
      {trg:"celoso", src:"jealous"},
      {trg:"tener ganas de", src:"to feel like"},
      {trg:"seguro de sí mismo", src:"self-confident"},
      {trg:"tenso", src:"tense"}
    ]}
  ]
};
export default LESSON_4;
