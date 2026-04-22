// L12: Arts & Culture. Creative expression
const LESSON_12 = {
  id:"esv2_a1gap_l12", title:"Arte y cultura", icon:"\u{1F3A8}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Arte y cultura",
     desc:"Explore the world of arts, music, and cultural expression. Spain's rich heritage in one lesson.",
     goals:["Learn 20 arts and culture words","Talk about art, music, and performances","Describe cultural experiences"]},

    {type:"teach", trg:"el arte", src:"art", pos:"noun", gender:"m",
     note:"Masculine singular (el arte), but feminine plural (las artes).\nBellas artes = fine arts.",
     example:"A: Me encanta el arte moderno.\nB: \u00bfCuál es tu artista favorito?",
     exampleSrc:"A: I love modern art.\nB: Who is your favorite artist?",
     funFact:"'El arte' is masculine but 'las artes' is feminine. One of the few words that changes gender between singular and plural."},

    {type:"teach", trg:"artístico", src:"artistic", pos:"adj", gender:null,
     note:"Adjective. Artístico/artística.\nMovimiento artístico = artistic movement.",
     example:"A: Barcelona tiene mucho patrimonio artístico.\nB: Sí, Gaudí es increíble.",
     exampleSrc:"A: Barcelona has a lot of artistic heritage.\nB: Yes, Gaudí is incredible.",
     funFact:"From Latin 'artisticus'. Barcelona alone is home to works by Gaudí, Picasso, and Miró, making it an artistic treasure."},

    {type:"teach", trg:"la arquitectura", src:"architecture", pos:"noun", gender:"f",
     note:"Feminine noun. Arquitectura gótica = Gothic architecture.\nFrom arquitecto (architect).",
     example:"A: La arquitectura de esta ciudad es preciosa.\nB: Sí, las iglesias son antiguas.",
     exampleSrc:"A: The architecture of this city is gorgeous.\nB: Yes, the churches are ancient.",
     funFact:"From Greek 'arkhitekton' (master builder). Spain's architecture ranges from Roman aqueducts to Gaudí's modernist masterpieces."},

    {type:"teach", trg:"el arquitecto", src:"the architect", pos:"noun", gender:"m",
     note:"Masculine noun. La arquitecta = female architect.\nGaudí = Spain's most famous architect.",
     example:"A: Gaudí es el arquitecto más famoso de España.\nB: La Sagrada Familia es su obra maestra.",
     exampleSrc:"A: Gaudí is the most famous architect in Spain.\nB: The Sagrada Familia is his masterpiece.",
     funFact:"Antoni Gaudí died in 1926, hit by a tram. His Sagrada Familia is still being built nearly 100 years after his death."},

    {type:"teach", trg:"la animación", src:"animation", pos:"noun", gender:"f",
     note:"Feminine noun. Película de animación = animated film.\nAlso: entertainment, atmosphere.",
     example:"A: Esta película de animación es muy buena.\nB: \u00bfEs para niños?",
     exampleSrc:"A: This animated film is very good.\nB: Is it for children?",
     funFact:"From Latin 'animatio' (giving life). Spain has a growing animation industry, with studios in Barcelona and Madrid."},

    {type:"teach", trg:"animar", src:"to encourage, to cheer up", pos:"verb", gender:null,
     note:"Regular -ar verb. Animo, animas, anima...\nAnimate = cheer up. Animar a = to encourage.",
     example:"A: Anímate, todo va a salir bien.\nB: Gracias, necesitaba oír eso.",
     exampleSrc:"A: Cheer up, everything will be fine.\nB: Thanks, I needed to hear that.",
     funFact:"From Latin 'animare' (to give life/soul). 'Animarse' reflexive means to decide to do something: 'Me animo a ir'."},

    {type:"mc",
     q:"\u00bfCuál es el arquitecto más famoso de España?",
     opts:["Gaudí","Picasso","Dalí","Velázquez"],
     ans:"Gaudí",
     hint:"He designed the Sagrada Familia in Barcelona. He was an architect, not a painter."},

    {type:"teach", trg:"el aniversario", src:"the anniversary", pos:"noun", gender:"m",
     note:"Masculine noun. Aniversario de boda = wedding anniversary.\nFeliz aniversario = happy anniversary.",
     example:"A: Hoy es nuestro aniversario.\nB: Felicidades. \u00bfCuántos años?",
     exampleSrc:"A: Today is our anniversary.\nB: Congratulations. How many years?",
     funFact:"From Latin 'anniversarius' (returning yearly): 'annus' (year) + 'versus' (turned). A yearly turning point."},

    {type:"teach", trg:"la atracción", src:"the attraction", pos:"noun", gender:"f",
     note:"Feminine noun. Parque de atracciones = theme park.\nAtracción turística = tourist attraction.",
     example:"A: \u00bfCuál es la mayor atracción de Madrid?\nB: El Museo del Prado.",
     exampleSrc:"A: What is the main attraction in Madrid?\nB: The Prado Museum.",
     funFact:"From Latin 'attractio'. The Prado Museum holds works by Velázquez, Goya, and El Greco. Free entry on evenings."},

    {type:"teach", trg:"la banda", src:"the band", pos:"noun", gender:"f",
     note:"Feminine noun. Banda de música = music band.\nAlso: gang, strip (banda ancha = broadband).",
     example:"A: Toco en una banda de rock.\nB: \u00bfQué instrumento?",
     exampleSrc:"A: I play in a rock band.\nB: What instrument?",
     funFact:"From Germanic 'banda' (flag, strip). The music meaning came through Italian. Also: 'banda sonora' (soundtrack)."},

    {type:"teach", trg:"la batería", src:"the drums, battery", pos:"noun", gender:"f",
     note:"Feminine noun. Two meanings: drums (instrument) and battery.\nTocar la batería = to play drums.",
     example:"A: Toco la batería en una banda.\nB: \u00bfDesde cuándo?",
     exampleSrc:"A: I play the drums in a band.\nB: Since when?",
     funFact:"From French 'batterie' (beating). The drum kit and the electrical battery share the same word because both involve 'beating/striking'."},

    {type:"fb",
     s:"Toco la {1} en una banda de rock desde hace tres años.",
     a:["batería"],
     opts:["batería","banda","barra","bandera"],
     hint:"This word means both the percussion instrument and an electrical power cell.",
     sSrc:"I have been playing the {1} in a rock band for three years."},

    {type:"teach", trg:"la biblioteca", src:"the library", pos:"noun", gender:"f",
     note:"Feminine noun. FALSE FRIEND: NOT bookshop (librería = bookshop).\nIr a la biblioteca = to go to the library.",
     example:"A: Estudio en la biblioteca.\nB: \u00bfEstá abierta hoy?",
     exampleSrc:"A: I study at the library.\nB: Is it open today?",
     funFact:"From Greek 'bibliotheke' (book chest). 'Librería' means bookshop, NOT library. A very common false friend."},

    {type:"teach", trg:"bilingüe", src:"bilingual", pos:"adj", gender:null,
     note:"Adjective. Same form for both genders.\nNote the diaeresis on ü (gü = 'gw' sound).",
     example:"A: Mi hija es bilingüe.\nB: \u00bfQué idiomas habla?",
     exampleSrc:"A: My daughter is bilingual.\nB: What languages does she speak?",
     funFact:"From Latin 'bilinguis'. The ü with diaeresis is essential: without it, the u would be silent. Compare 'guerra' (silent u) vs 'bilingüe' (spoken u)."},

    {type:"teach", trg:"artificial", src:"artificial", pos:"adj", gender:null,
     note:"Adjective. Same form for both genders.\nInteligencia artificial = artificial intelligence.",
     example:"A: Estas flores son artificiales.\nB: Parecen reales.",
     exampleSrc:"A: These flowers are artificial.\nB: They look real.",
     funFact:"From Latin 'artificialis' (made by skill). Nearly identical in all European languages due to the shared Latin root."},

    {type:"teach", trg:"auténtico", src:"authentic, genuine", pos:"adj", gender:null,
     note:"Adjective. Auténtico/auténtica.\nComida auténtica = authentic food.",
     example:"A: Este restaurante tiene comida auténtica.\nB: Sí, cocina casera de verdad.",
     exampleSrc:"A: This restaurant has authentic food.\nB: Yes, real home cooking.",
     funFact:"From Greek 'authentikos' (original). In Spain, 'auténtico' is often used as an intensifier: 'Es un auténtico desastre' (a total disaster)."},

    {type:"mc",
     q:"\u00bfQué significa 'biblioteca'?",
     opts:["museum","library","bookshop","school"],
     ans:"library",
     hint:"This is a false friend. A bookshop is 'librería' in Spanish. This word means a place to borrow books."},

    {type:"teach", trg:"la aventura", src:"the adventure", pos:"noun", gender:"f",
     note:"Feminine noun. Una aventura = an adventure.\nDeporte de aventura = adventure sport.",
     example:"A: Viajar es una gran aventura.\nB: Sí, cada viaje es diferente.",
     exampleSrc:"A: Traveling is a great adventure.\nB: Yes, every trip is different.",
     funFact:"From Latin 'adventura' (things about to happen), from 'advenire' (to arrive). The unknown that arrives."},

    {type:"teach", trg:"la bola", src:"the ball", pos:"noun", gender:"f",
     note:"Feminine noun. Bola de nieve = snowball.\nDifferent from balón (sports ball) or pelota.",
     example:"A: Los niños hacen bolas de nieve.\nB: Qué divertido.",
     exampleSrc:"A: The children are making snowballs.\nB: How fun.",
     funFact:"From Provençal 'bola'. Spanish has multiple words for ball: bola (sphere), pelota (sports ball), balón (large sports ball)."},

    {type:"teach", trg:"el argot", src:"slang", pos:"noun", gender:"m",
     note:"Masculine noun. Argot juvenil = youth slang.\nFrom French 'argot'.",
     example:"A: No entiendo el argot de los jóvenes.\nB: Es normal, cambia muy rápido.",
     exampleSrc:"A: I don't understand young people's slang.\nB: That is normal, it changes very fast.",
     funFact:"Borrowed from French. Spanish slang varies enormously between countries: 'chévere' (cool) in Venezuela, 'mola' in Spain."},

    {type:"match", pairs:[
      {trg:"arte", src:"art"},
      {trg:"biblioteca", src:"library"},
      {trg:"arquitectura", src:"architecture"},
      {trg:"aventura", src:"adventure"},
      {trg:"batería", src:"drums"}
    ]},

    {type:"fb",
     s:"El Museo del Prado es la mayor {1} turística de Madrid.",
     a:["atracción"],
     opts:["atracción","aventura","animación","arquitectura"],
     hint:"This word describes something that draws visitors and tourists to a place.",
     sSrc:"The Prado Museum is the main tourist {1} of Madrid."},
  ]
};
export default LESSON_12;
