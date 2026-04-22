// L14: Time & Daily Life. Routine and schedule
const LESSON_14 = {
  id:"esv2_a1gap_l14", title:"El día a día", icon:"\u{23F0}", xp:15, board:true,
  steps:[
    {type:"intro", title:"El día a día",
     desc:"Master daily routine vocabulary. From waking up to going to bed, talk about your everyday life.",
     goals:["Learn 20 words about daily routines","Describe what you do each day","Talk about habits and schedules"]},

    {type:"teach", trg:"acostar", src:"to put to bed", pos:"verb", gender:null,
     note:"Stem-changing verb: o > ue. Acuesto, acuestas...\nReflexive: acostarse = to go to bed.",
     example:"A: \u00bfA qué hora te acuestas?\nB: Me acuesto a las once.",
     exampleSrc:"A: What time do you go to bed?\nB: I go to bed at eleven.",
     funFact:"From Latin 'accubitare' (to lie down). Spanish daily schedules are famously late: dinner at 9-10 PM, bed at midnight."},

    {type:"teach", trg:"acostumbrar", src:"to be used to, to usually do", pos:"verb", gender:null,
     note:"Regular -ar verb. Acostumbro, acostumbras...\nAcostumbrar a = to be used to. Soler is more common.",
     example:"A: \u00bfA qué hora acostumbras desayunar?\nB: A las ocho.",
     exampleSrc:"A: What time do you usually have breakfast?\nB: At eight.",
     funFact:"From 'costumbre' (custom, habit). 'Acostumbrarse a' means to get used to: 'Me acostumbré al horario español'."},

    {type:"teach", trg:"el año", src:"the year", pos:"noun", gender:"m",
     note:"Masculine noun. El año pasado = last year.\nTener X años = to be X years old.",
     example:"A: \u00bfCuántos años tienes?\nB: Tengo veinticinco años.",
     exampleSrc:"A: How old are you?\nB: I am twenty-five years old.",
     funFact:"From Latin 'annus'. Spanish uses 'tener' (to have) for age, not 'ser' (to be): 'Tengo 25 años', NOT 'Soy 25 años'."},

    {type:"teach", trg:"anticipar", src:"to anticipate, to bring forward", pos:"verb", gender:null,
     note:"Regular -ar verb. Anticipo, anticipas...\nAnticipar una reunión = to bring a meeting forward.",
     example:"A: Hay que anticipar la reunión.\nB: \u00bfA qué hora entonces?",
     exampleSrc:"A: We need to bring the meeting forward.\nB: What time then?",
     funFact:"From Latin 'anticipare' (to take before). Can mean both to foresee and to reschedule earlier."},

    {type:"teach", trg:"anual", src:"annual, yearly", pos:"adj", gender:null,
     note:"Adjective. Same form for both genders.\nRevisión anual = annual review.",
     example:"A: Tenemos una fiesta anual en agosto.\nB: \u00bfTodos los años?",
     exampleSrc:"A: We have an annual party in August.\nB: Every year?",
     funFact:"From Latin 'annualis'. Despite looking similar, 'anual' has one 'n' in Spanish while English 'annual' has two."},

    {type:"teach", trg:"bastante", src:"quite, enough", pos:"adv", gender:null,
     note:"Adverb/determiner. Bastante bien = quite well.\nBastante gente = enough people.",
     example:"A: \u00bfCómo estás?\nB: Bastante bien, gracias.",
     exampleSrc:"A: How are you?\nB: Quite well, thanks.",
     funFact:"From 'bastar' (to suffice). Works as adverb ('bastante grande' = quite big) and determiner ('bastante dinero' = enough money)."},

    {type:"mc",
     q:"\u00bfCómo dices tu edad en español?",
     opts:["Tengo 25 años","Soy 25 años","Estoy 25 años","Hago 25 años"],
     ans:"Tengo 25 años",
     hint:"Spanish uses the verb 'tener' (to have) for age, not 'ser' (to be). You 'have' years."},

    {type:"teach", trg:"bastar", src:"to be enough, to suffice", pos:"verb", gender:null,
     note:"Regular -ar verb. Used impersonally: basta = enough!\nBasta con = it is enough to.",
     example:"A: \u00a1Basta! No quiero más.\nB: De acuerdo, perdona.",
     exampleSrc:"A: Enough! I don't want any more.\nB: Okay, sorry.",
     funFact:"Often used as an exclamation: 'Basta ya!' (That's enough!). Also in the gentler 'Basta con llamar' (It is enough to call)."},

    {type:"teach", trg:"acordar", src:"to agree, to remember", pos:"verb", gender:null,
     note:"Stem-changing verb: o > ue. Acuerdo, acuerdas...\nReflexive: acordarse de = to remember.",
     example:"A: \u00bfTe acuerdas de mi abuelo?\nB: Sí, me acuerdo muy bien.",
     exampleSrc:"A: Do you remember my grandfather?\nB: Yes, I remember very well.",
     funFact:"Two distinct meanings: 'acordar' (to agree on something) and 'acordarse de' (to remember). The reflexive changes everything."},

    {type:"teach", trg:"la agenda", src:"the planner, diary", pos:"noun", gender:"f",
     note:"Feminine noun. Agenda = planner/diary, not just 'agenda'.\nAlso: schedule of events.",
     example:"A: \u00bfTienes la agenda?\nB: Sí, déjame ver qué tengo mañana.",
     exampleSrc:"A: Do you have your planner?\nB: Yes, let me see what I have tomorrow.",
     funFact:"From Latin 'agenda' (things to be done). In Spain, 'agenda' often means a physical diary/planner where you write appointments."},

    {type:"teach", trg:"adentro", src:"inside, indoors", pos:"adv", gender:null,
     note:"Adverb. Opposite of afuera (outside).\nVamos adentro = let's go inside.",
     example:"A: Hace frío. Vamos adentro.\nB: Sí, mejor.",
     exampleSrc:"A: It is cold. Let's go inside.\nB: Yes, better.",
     funFact:"From 'a' + 'dentro' (inside). Together with 'afuera' (outside), these are essential direction pairs."},

    {type:"fb",
     s:"\u00bfA qué hora te {1} normalmente por la noche?",
     a:["acuestas"],
     opts:["acuestas","acostumbras","acuerdas","anticipas"],
     hint:"This reflexive verb means to go to bed. It has a stem change from o to ue.",
     sSrc:"What time do you normally go to {1} at night?"},

    {type:"teach", trg:"las afueras", src:"the outskirts", pos:"noun", gender:"f",
     note:"Feminine noun. Always plural: las afueras.\nVivir en las afueras = to live on the outskirts.",
     example:"A: Vivo en las afueras de Madrid.\nB: \u00bfEstá lejos del centro?",
     exampleSrc:"A: I live on the outskirts of Madrid.\nB: Is it far from the center?",
     funFact:"Plural of 'afuera' (outside). Many Spaniards live 'en las afueras' because city center apartments are expensive."},

    {type:"teach", trg:"la alimentación", src:"nutrition, food supply", pos:"noun", gender:"f",
     note:"Feminine noun. Alimentación sana = healthy eating.\nTienda de alimentación = grocery store.",
     example:"A: Una buena alimentación es importante.\nB: Sí, hay que comer bien.",
     exampleSrc:"A: Good nutrition is important.\nB: Yes, you have to eat well.",
     funFact:"From 'alimentar' (to feed), from Latin 'alimentum'. 'Tienda de alimentación' is how corner shops are often labeled in Spain."},

    {type:"teach", trg:"alimentar", src:"to feed, to nourish", pos:"verb", gender:null,
     note:"Regular -ar verb. Alimento, alimentas...\nAlimentar a = to feed someone/something.",
     example:"A: Hay que alimentar al gato.\nB: Ya lo hice esta mañana.",
     exampleSrc:"A: We need to feed the cat.\nB: I already did it this morning.",
     funFact:"From Latin 'alimentare'. The noun 'alimento' (food/nourishment) is the more formal word for food, used in nutrition contexts."},

    {type:"teach", trg:"el alimento", src:"food, nourishment", pos:"noun", gender:"m",
     note:"Masculine noun. Alimento sano = healthy food.\nMore formal than 'comida'.",
     example:"A: El arroz es un alimento básico.\nB: Sí, en muchas culturas.",
     exampleSrc:"A: Rice is a basic food.\nB: Yes, in many cultures.",
     funFact:"From Latin 'alimentum'. Used in formal, scientific, or nutrition contexts. Daily conversation uses 'comida' instead."},

    {type:"mc",
     q:"\u00bfDónde vive mucha gente que trabaja en la ciudad?",
     opts:["Adentro","En las afueras","En la agenda","En la alimentación"],
     ans:"En las afueras",
     hint:"This word describes the area around a city, outside the center but not fully rural."},

    {type:"teach", trg:"aquel", src:"that (over there)", pos:"pron", gender:null,
     note:"Demonstrative. Aquel/aquella/aquellos/aquellas.\nFar from both speaker and listener.",
     example:"A: \u00bfVes aquel edificio?\nB: \u00bfEl alto? Sí, lo veo.",
     exampleSrc:"A: Do you see that building over there?\nB: The tall one? Yes, I see it.",
     funFact:"Spanish has three demonstratives matching distance: este (this/here), ese (that/near you), aquel (that/over there)."},

    {type:"teach", trg:"allá", src:"over there (vague direction)", pos:"adv", gender:null,
     note:"Adverb. Less precise than allí.\nMás allá = beyond, further.",
     example:"A: \u00bfDónde está el parque?\nB: Allá, al final de la calle.",
     exampleSrc:"A: Where is the park?\nB: Over there, at the end of the street.",
     funFact:"'Más allá' (beyond) is used both physically and metaphorically: 'el más allá' = the afterlife/the beyond."},

    {type:"teach", trg:"acá", src:"here (vague direction)", pos:"adv", gender:null,
     note:"Adverb. Less precise than aquí.\nVen acá = come here. De acá para allá = back and forth.",
     example:"A: Ven acá, quiero enseñarte algo.\nB: Ya voy.",
     exampleSrc:"A: Come here, I want to show you something.\nB: I'm coming.",
     funFact:"More common in Latin America than Spain. 'De acá para allá' (here and there, back and forth) is used everywhere."},

    {type:"match", pairs:[
      {trg:"año", src:"year"},
      {trg:"ahora", src:"now"},
      {trg:"bastante", src:"quite"},
      {trg:"agenda", src:"planner"},
      {trg:"alimento", src:"food"}
    ]},

    {type:"fb",
     s:"\u00bfTe {1} de la fiesta del año pasado?",
     a:["acuerdas"],
     opts:["acuerdas","acuestas","acostumbras","alimentas"],
     hint:"This reflexive verb means to recall something from the past. It has a stem change o > ue.",
     sSrc:"Do you {1} the party from last year?"},
  ]
};
export default LESSON_14;
