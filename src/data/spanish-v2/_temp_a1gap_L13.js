// L13: Communication & Speaking. Expressing yourself
const LESSON_13 = {
  id:"esv2_a1gap_l13", title:"Comunicarse", icon:"\u{1F4AC}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Comunicarse",
     desc:"Learn to express yourself clearly. Words for speaking, asking, announcing, and communicating.",
     goals:["Learn 20 communication words","Express opinions and ideas","Ask and answer questions about communication"]},

    {type:"teach", trg:"el apellido", src:"the surname, last name", pos:"noun", gender:"m",
     note:"Masculine noun. In Spain, you have TWO surnames: father's + mother's.\nPrimer apellido = first surname.",
     example:"A: \u00bfCuál es tu apellido?\nB: García López.\nA: \u00bfGarcía es el primero?\nB: Sí.",
     exampleSrc:"A: What is your surname?\nB: García López.\nA: Is García the first one?\nB: Yes.",
     funFact:"Spaniards use two surnames. García is the most common surname in Spain, held by about 3.5% of the population."},

    {type:"teach", trg:"la abreviatura", src:"the abbreviation", pos:"noun", gender:"f",
     note:"Feminine noun. Abbreviations are common in Spanish.\nAv. (avenida), Dr. (doctor), etc.",
     example:"A: \u00bfQué significa esta abreviatura?\nB: Av. significa avenida.",
     exampleSrc:"A: What does this abbreviation mean?\nB: Av. means avenue.",
     funFact:"From Latin 'abbreviatura'. Spanish has unique abbreviations: Ud./Vd. (usted), D./Dña. (Don/Doña), Sra. (Señora)."},

    {type:"teach", trg:"el acento", src:"the accent", pos:"noun", gender:"m",
     note:"Masculine noun. Double meaning: written accent mark (á, é) and pronunciation accent.\nAcento grave, agudo.",
     example:"A: No olvides el acento en 'café'.\nB: Tienes razón, ca-fé.",
     exampleSrc:"A: Don't forget the accent on 'café'.\nB: You are right, ca-fé.",
     funFact:"Spanish accent marks are not decorative. They change meaning: 'si' (if) vs 'sí' (yes), 'el' (the) vs 'él' (he)."},

    {type:"teach", trg:"agradecer", src:"to thank, to be grateful", pos:"verb", gender:null,
     note:"Irregular verb (c > zc before a/o). Agradezco, agradeces...\nTe agradezco = I thank you.",
     example:"A: Te agradezco mucho tu ayuda.\nB: De nada, para eso estamos.",
     exampleSrc:"A: I really thank you for your help.\nB: You're welcome, that's what we're here for.",
     funFact:"From 'grado' (pleasure, liking). 'Agradecido/a' (grateful) is how you describe the feeling: 'Estoy muy agradecido'."},

    {type:"teach", trg:"la ayuda", src:"help, assistance", pos:"noun", gender:"f",
     note:"Feminine noun. Pedir ayuda = to ask for help.\nCon la ayuda de = with the help of.",
     example:"A: Necesito ayuda con esto.\nB: Claro, \u00bfqué necesitas?",
     exampleSrc:"A: I need help with this.\nB: Of course, what do you need?",
     funFact:"From a Gothic verb meaning 'to help'. Unlike 'asistencia' (attendance), 'ayuda' is the true word for help in Spanish."},

    {type:"teach", trg:"ayudar", src:"to help", pos:"verb", gender:null,
     note:"Regular -ar verb. Ayudo, ayudas, ayuda...\nAyudar a alguien = to help someone.",
     example:"A: \u00bfMe ayudas con la maleta?\nB: Sí, claro.",
     exampleSrc:"A: Can you help me with the suitcase?\nB: Yes, of course.",
     funFact:"One of the first verbs every Spanish learner needs. '\u00bfMe puede ayudar?' (Can you help me?) opens doors everywhere."},

    {type:"mc",
     q:"¿Cuántos nombres familiares hereda una persona en España?",
     opts:["Dos","Uno","Tres","Cuatro"],
     ans:"Dos",
     hint:"In Spain, children receive one surname from each parent, creating a pair."},

    {type:"teach", trg:"así", src:"like this, so, thus", pos:"adv", gender:null,
     note:"Adverb. Así = like this/that. Así es = that's right.\nVery common in conversation.",
     example:"A: Se hace así, mira.\nB: Ah, así. Ya entiendo.",
     exampleSrc:"A: You do it like this, look.\nB: Ah, like that. I understand now.",
     funFact:"From Latin 'ad sic' (to thus). 'Así es' (that's right) and 'así así' (so-so) are used constantly in daily speech."},

    {type:"teach", trg:"ahora", src:"now", pos:"adv", gender:null,
     note:"Adverb. Ahora mismo = right now.\nHasta ahora = until now.",
     example:"A: \u00bfCuándo vamos?\nB: Ahora mismo.",
     exampleSrc:"A: When are we going?\nB: Right now.",
     funFact:"From Latin 'hac hora' (at this hour). 'Ahora bien' is a discourse marker meaning 'however' or 'now then'."},

    {type:"teach", trg:"ahí", src:"there (near you)", pos:"adv", gender:null,
     note:"Adverb. Three levels: aquí (here), ahí (there/near you), allí (over there).\nAhí = medium distance.",
     example:"A: \u00bfDónde está el libro?\nB: Ahí, en la mesa.",
     exampleSrc:"A: Where is the book?\nB: There, on the table.",
     funFact:"Spanish has a three-way distance system: aquí/acá (here), ahí (there near you), allí/allá (over there, far away)."},

    {type:"teach", trg:"allí", src:"there (far away)", pos:"adv", gender:null,
     note:"Adverb. Far from both speaker and listener.\nAllá is a less precise variant.",
     example:"A: Mi familia vive allí, en el sur.\nB: \u00bfEn Andalucía?",
     exampleSrc:"A: My family lives there, in the south.\nB: In Andalusia?",
     funFact:"'Allí' is precise (that specific spot), 'allá' is vague (in that direction). 'Más allá' means 'beyond' or 'further'."},

    {type:"fb",
     s:"Necesito {1} con estas cajas. Son muy pesadas.",
     a:["ayuda"],
     opts:["ayuda","acento","apellido","abreviatura"],
     hint:"This feminine noun means the assistance or support you need when something is too difficult alone.",
     sSrc:"I need {1} with these boxes. They are very heavy."},

    {type:"teach", trg:"aquí", src:"here", pos:"adv", gender:null,
     note:"Adverb. Aquí = here (precise). Acá = here (less precise).\nVen aquí = come here.",
     example:"A: Ven aquí, por favor.\nB: Ya voy.",
     exampleSrc:"A: Come here, please.\nB: I'm coming.",
     funFact:"'Aquí' is used throughout Spain. 'Acá' is more common in Latin America and in expressions like 'de acá para allá' (back and forth)."},

    {type:"teach", trg:"algo", src:"something", pos:"pron", gender:null,
     note:"Indefinite pronoun. \u00bfAlgo más? = Anything else?\n\u00bfQuieres algo? = Do you want something?",
     example:"A: \u00bfQuieres algo de beber?\nB: Sí, algo frío, por favor.",
     exampleSrc:"A: Do you want something to drink?\nB: Yes, something cold, please.",
     funFact:"From Latin 'aliquod' (some). 'Algo' also works as an adverb meaning 'somewhat': 'Es algo difícil' (it is somewhat difficult)."},

    {type:"teach", trg:"alguien", src:"someone, somebody", pos:"pron", gender:null,
     note:"Indefinite pronoun. \u00bfHay alguien? = Is anyone there?\nAlguien vs nadie (nobody).",
     example:"A: \u00bfHay alguien en casa?\nB: Sí, estoy yo.",
     exampleSrc:"A: Is anyone home?\nB: Yes, I am.",
     funFact:"From Latin 'aliquem' (someone). Algo = something (things), alguien = someone (people). Clean distinction."},

    {type:"teach", trg:"alguno", src:"some, any", pos:"pron", gender:null,
     note:"Pronoun/determiner. Alguno/alguna/algunos/algunas.\nBefore masculine singular noun: algún.",
     example:"A: \u00bfTienes algún libro de español?\nB: Sí, tengo algunos.",
     exampleSrc:"A: Do you have any Spanish books?\nB: Yes, I have some.",
     funFact:"Shortens to 'algún' before masculine singular nouns: 'algún día' (some day). Compare 'ningún' (none) which works the same way."},

    {type:"mc",
     q:"\u00bfDónde está el libro? Está..., en la mesa cerca de ti.",
     opts:["acá","ahí","aquí","allí"],
     ans:"ahí",
     hint:"Spanish uses three distance levels. This adverb means 'there near you', the middle distance."},

    {type:"teach", trg:"la audiencia", src:"the audience", pos:"noun", gender:"f",
     note:"Feminine noun. La audiencia del programa = the show's audience.\nAlso: court hearing.",
     example:"A: El programa tiene mucha audiencia.\nB: Sí, millones de personas lo ven.",
     exampleSrc:"A: The show has a large audience.\nB: Yes, millions of people watch it.",
     funFact:"From Latin 'audientia' (hearing). Can mean TV audience or a legal court hearing. Context determines which."},

    {type:"teach", trg:"el adjetivo", src:"the adjective", pos:"noun", gender:"m",
     note:"Masculine noun. Grammar term. Spanish adjectives usually come after the noun.\nUn coche rojo (a red car).",
     example:"A: Necesito un adjetivo para describir esta playa.\nB: \u00bfBonita? \u00bfTranquila?",
     exampleSrc:"A: I need an adjective to describe this beach.\nB: Beautiful? Peaceful?",
     funFact:"From Latin 'adjectivum' (added to). In Spanish, most adjectives follow the noun: 'un libro interesante', not 'un interesante libro'."},

    {type:"teach", trg:"ante", src:"before, in front of", pos:"prep", gender:null,
     note:"Preposition. Formal/literary. Ante todo = above all.\nAnte la duda = when in doubt.",
     example:"A: Ante todo, gracias por venir.\nB: De nada, es un placer.",
     exampleSrc:"A: Above all, thank you for coming.\nB: You're welcome, it is a pleasure.",
     funFact:"From Latin 'ante' (before). More formal than 'delante de' (in front of). Common in fixed expressions: 'ante todo' (above all)."},

    {type:"match", pairs:[
      {trg:"aquí", src:"here"},
      {trg:"ahí", src:"there (near)"},
      {trg:"allí", src:"there (far)"},
      {trg:"algo", src:"something"},
      {trg:"alguien", src:"someone"}
    ]},

    {type:"fb",
     s:"No olvides poner el {1} en la palabra 'café'.",
     a:["acento"],
     opts:["acento","apellido","adjetivo","algo"],
     hint:"This written mark (like á, é, í) shows which syllable is stressed and can change meaning.",
     sSrc:"Don't forget to put the {1} on the word 'café'."},
  ]
};
export default LESSON_13;
