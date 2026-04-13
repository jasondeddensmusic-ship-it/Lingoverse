// L13: Music & Performance - Instruments, genres, and shows
const LESSON_13 = {
  id:"esv2_b1gap_l13", title:"M\u00fasica y espect\u00e1culo", icon:"\u{1F3B5}", xp:15, board:true,
  steps:[
    {type:"intro", title:"M\u00fasica y espect\u00e1culo",
     desc:"Enjoy the world of music and performance. Learn vocabulary for instruments, genres, and entertainment.",
     goals:["Learn 20 music and performance words","Describe musical events and instruments","Talk about shows and entertainment"]},

    {type:"teach", trg:"el acorde\u00f3n", src:"the accordion", pos:"noun", gender:"m",
     note:"Masculine noun. A portable keyboard instrument.\nPopular in folk music across Spain and Latin America.",
     example:"A: Mi abuelo toca el acorde\u00f3n.\nB: \u00bfEn serio? Es un instrumento precioso.",
     exampleSrc:"A: My grandfather plays the accordion.\nB: Really? It is a beautiful instrument.",
     funFact:"From German 'Akkordeon', from 'Akkord' (chord). The accordion arrived in Spain in the 1800s and became essential in Basque and Galician folk music."},

    {type:"teach", trg:"el bandone\u00f3n", src:"the bandoneon", pos:"noun", gender:"m",
     note:"Masculine noun. A concertina-like instrument.\nEssential for Argentine tango.",
     example:"A: Sin bandone\u00f3n no hay tango.\nB: Es verdad, le da el alma a la m\u00fasica.",
     exampleSrc:"A: Without the bandoneon there is no tango.\nB: That is true, it gives the music its soul.",
     funFact:"Named after Heinrich Band, its German inventor. It traveled from Germany to Argentina with immigrants and became the voice of tango in Buenos Aires."},

    {type:"teach", trg:"el bong\u00f3", src:"the bongo drum", pos:"noun", gender:"m",
     note:"Masculine noun. A pair of small hand drums.\nUsed in Latin music and salsa.",
     example:"A: \u00bfSabes tocar el bong\u00f3?\nB: Un poco, me ense\u00f1\u00f3 un amigo cubano.",
     exampleSrc:"A: Do you know how to play the bongo?\nB: A little, a Cuban friend taught me.",
     funFact:"From Afro-Cuban Spanish, ultimately from a Bantu language. The bongo is central to Cuban son and salsa music worldwide."},

    {type:"teach", trg:"el bombo", src:"the bass drum", pos:"noun", gender:"m",
     note:"Masculine noun. The large drum in an orchestra.\nAlso slang: a darse bombo = to show off.",
     example:"A: El bombo marca el ritmo de la banda.\nB: S\u00ed, se siente en el pecho.",
     exampleSrc:"A: The bass drum sets the rhythm of the band.\nB: Yes, you feel it in your chest.",
     funFact:"From Latin 'bombus' (buzzing sound). 'Darse bombo' (to blow one's own trumpet) compares self-promotion to the loud, attention-grabbing bass drum."},

    {type:"teach", trg:"el cabaret", src:"the cabaret", pos:"noun", gender:"m",
     note:"Masculine noun. A nightclub with live entertainment.\nFrom French.",
     example:"A: Fuimos a un cabaret en Barcelona.\nB: \u00bfQu\u00e9 tipo de espect\u00e1culo ten\u00edan?",
     exampleSrc:"A: We went to a cabaret in Barcelona.\nB: What kind of show did they have?",
     funFact:"From French 'cabaret' (tavern). Barcelona's El Molino and Madrid's historical cabarets were cultural hotspots in the early 1900s."},

    {type:"mc",
     q:"\u00bfQu\u00e9 instrumento es esencial para el tango argentino?",
     opts:["el bandone\u00f3n","el bong\u00f3","el acorde\u00f3n","el bombo"],
     ans:"el bandone\u00f3n",
     hint:"A German-invented instrument that emigrated to Buenos Aires and became the soul of Argentine dance music."},

    {type:"teach", trg:"el bachillerato", src:"the high school diploma", pos:"noun", gender:"m",
     note:"Masculine noun. The final two years of secondary school.\nEquivalent to A-levels or Abitur.",
     example:"A: \u00bfHas terminado el bachillerato?\nB: S\u00ed, el a\u00f1o pasado.",
     exampleSrc:"A: Have you finished high school?\nB: Yes, last year.",
     funFact:"From medieval Latin 'baccalaureatus'. In Spain, bachillerato is the final pre-university stage (ages 16-18). You choose between Sciences and Humanities."},

    {type:"teach", trg:"el alfabeto", src:"the alphabet", pos:"noun", gender:"m",
     note:"Masculine noun. The set of letters in a language.\nThe Spanish alphabet has 27 letters.",
     example:"A: \u00bfCu\u00e1ntas letras tiene el alfabeto espa\u00f1ol?\nB: Veintisiete, con la \u00f1e.",
     exampleSrc:"A: How many letters does the Spanish alphabet have?\nB: Twenty-seven, including the \u00f1.",
     funFact:"From Greek 'alpha' + 'beta', the first two Greek letters. The \u00f1 was added to represent the Spanish nasal palatal sound, making 27 letters total."},

    {type:"teach", trg:"el bostezo", src:"the yawn", pos:"noun", gender:"m",
     note:"Masculine noun. From 'bostezar' (to yawn).\nContagious, even reading about it.",
     example:"A: No puedo parar de bostezar.\nB: \u00bfNo has dormido bien?",
     exampleSrc:"A: I cannot stop yawning.\nB: Did you not sleep well?",
     funFact:"Possibly onomatopoeic. Science still debates why yawns are contagious. In Spanish, yawning during Mass was once considered rude enough to warrant confession."},

    {type:"teach", trg:"el caballero", src:"the gentleman, knight", pos:"noun", gender:"m",
     note:"Masculine noun. A man of honor or a knight.\nBa\u00f1o de caballeros = men's room.",
     example:"A: Es todo un caballero.\nB: S\u00ed, siempre es muy educado.",
     exampleSrc:"A: He is quite the gentleman.\nB: Yes, he is always very polite.",
     funFact:"From 'caballo' (horse). Originally a horse-mounted warrior. Don Quijote, the 'Caballero de la Triste Figura', is Spain's most famous fictional knight."},

    {type:"fb",
     s:"El {1} espa\u00f1ol tiene veintisiete letras, incluida la \u00f1e.",
     a:["alfabeto"],
     opts:["alfabeto","bachillerato","cabaret","bandone\u00f3n"],
     hint:"The complete set of letters used to write a language, named after the first two Greek letters.",
     sSrc:"The Spanish {1} has twenty-seven letters, including the \u00f1."},

    {type:"teach", trg:"el banquete", src:"the banquet, feast", pos:"noun", gender:"m",
     note:"Masculine noun. A formal or celebratory meal.\nBanquete de boda = wedding reception dinner.",
     example:"A: El banquete de la boda fue espectacular.\nB: \u00bfCu\u00e1ntos invitados hab\u00eda?",
     exampleSrc:"A: The wedding banquet was spectacular.\nB: How many guests were there?",
     funFact:"From French 'banquet', from Italian 'banchetto' (small bench). Originally guests sat on benches. Spanish weddings are famous for their long, multi-course banquetes."},

    {type:"teach", trg:"el brit\u00e1nico", src:"the British person", pos:"noun", gender:"m",
     note:"Masculine noun/adjective. Brit\u00e1nico/brit\u00e1nica.\nFrom 'Gran Breta\u00f1a' (Great Britain).",
     example:"A: Hay muchos brit\u00e1nicos en la Costa del Sol.\nB: S\u00ed, les encanta el clima.",
     exampleSrc:"A: There are many British people on the Costa del Sol.\nB: Yes, they love the weather.",
     funFact:"From Latin 'Britannicus'. The Costa del Sol has been a favorite British destination since the 1960s. 'Los brit\u00e1nicos' is preferred over 'los ingleses' for accuracy."},

    {type:"teach", trg:"el bicentenario", src:"the bicentennial", pos:"noun", gender:"m",
     note:"Masculine noun. A 200th anniversary.\nBi- (two) + centenario (centennial).",
     example:"A: Este a\u00f1o se celebra el bicentenario.\nB: Doscientos a\u00f1os de historia.",
     exampleSrc:"A: This year the bicentennial is celebrated.\nB: Two hundred years of history.",
     funFact:"Latin 'bi-' (two) + 'centum' (hundred) + '-ario'. Many Latin American countries celebrated their bicentenarios of independence around 2010-2021."},

    {type:"teach", trg:"la burgues\u00eda", src:"the bourgeoisie, middle class", pos:"noun", gender:"f",
     note:"Feminine noun. The middle or upper-middle class.\nA social and economic concept.",
     example:"A: La burgues\u00eda creci\u00f3 durante el siglo XIX.\nB: Con la revoluci\u00f3n industrial.",
     exampleSrc:"A: The bourgeoisie grew during the 19th century.\nB: With the industrial revolution.",
     funFact:"From French 'bourgeoisie', from 'bourg' (town). Originally townspeople who were neither nobility nor peasants. A key concept in European history."},

    {type:"mc",
     q:"\u00bfC\u00f3mo se llama la comida formal de una boda?",
     opts:["el banquete","el bocata","el bistec","el buf\u00e9"],
     ans:"el banquete",
     hint:"A formal, multi-course meal served at celebrations, especially at wedding receptions."},

    {type:"teach", trg:"el acierto", src:"the good decision, correct answer", pos:"noun", gender:"m",
     note:"Masculine noun. From 'acertar' (to get right).\nOpposite: el error.",
     example:"A: Contratar a Mar\u00eda fue un gran acierto.\nB: S\u00ed, es incre\u00edble en su trabajo.",
     exampleSrc:"A: Hiring Mar\u00eda was a great decision.\nB: Yes, she is incredible at her job.",
     funFact:"From 'acertar', from Latin 'certare' (to decide). 'Acierto' always implies a positive outcome, unlike 'decisi\u00f3n' which is neutral."},

    {type:"teach", trg:"la aclaraci\u00f3n", src:"the clarification", pos:"noun", gender:"f",
     note:"Feminine noun. An explanation that makes something clear.\nPedir una aclaraci\u00f3n = to ask for clarification.",
     example:"A: Necesito una aclaraci\u00f3n sobre el horario.\nB: Claro, \u00bfqu\u00e9 no entiendes?",
     exampleSrc:"A: I need a clarification about the schedule.\nB: Sure, what do you not understand?",
     funFact:"From 'aclarar' (to clarify), from Latin 'clarus' (clear). The verb 'aclarar' also means to rinse (clothes) and to clear up (weather)."},

    {type:"fb",
     s:"Cambiar de trabajo fue un gran {1}, estoy mucho m\u00e1s contento.",
     a:["acierto"],
     opts:["acierto","acorde","adorno","apodo"],
     hint:"A noun meaning a wise or correct decision that turned out well.",
     sSrc:"Changing jobs was a great {1}, I am much happier."},

    {type:"match", pairs:[
      {trg:"acorde\u00f3n", src:"accordion"},
      {trg:"cabaret", src:"cabaret"},
      {trg:"caballero", src:"gentleman"},
      {trg:"banquete", src:"banquet"},
      {trg:"bicentenario", src:"bicentennial"}
    ]}
  ]
};
export default LESSON_13;
