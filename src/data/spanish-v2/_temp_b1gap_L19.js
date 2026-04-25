// L19: Abstract Nouns & Concepts - Ideas, conditions, and states of being
const LESSON_19 = {
  id:"esv2_b1gap_l19", title:"Conceptos abstractos", icon:"\u{1F4AD}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Conceptos abstractos",
     desc:"Think in bigger ideas. Learn vocabulary for abstract concepts, conditions, and intellectual topics.",
     goals:["Learn 20 abstract nouns and concepts","Express complex ideas clearly","Discuss social and intellectual topics"]},

    {type:"teach", trg:"el autismo", src:"the autism", pos:"noun", gender:"m",
     note:"Masculine noun. A neurodevelopmental condition.\nTrastorno del espectro autista = autism spectrum.",
     example:"A: Su hijo tiene autismo.\nB: Hay muy buenos programas de apoyo.",
     exampleSrc:"A: Her son has autism.\nB: There are very good support programs.",
     funFact:"From Greek 'autos' (self). Coined in 1911 by psychiatrist Eugen Bleuler. Awareness in Spain has grown enormously, with April 2 as World Autism Day."},

    {type:"teach", trg:"el automatismo", src:"the automatism", pos:"noun", gender:"m",
     note:"Masculine noun. An automatic, unconscious action.\nActuar por automatismo = to act on autopilot.",
     example:"A: Conduce por automatismo, sin pensar.\nB: Eso pasa cuando llevas muchos a\u00f1os.",
     exampleSrc:"A: He drives on autopilot, without thinking.\nB: That happens when you have many years of experience.",
     funFact:"From Greek 'automatos' (acting by itself). In art, the Surrealists practiced 'automatismo' as a creative technique: drawing without conscious control."},

    {type:"teach", trg:"la autovaloraci\u00f3n", src:"the self-assessment", pos:"noun", gender:"f",
     note:"Feminine noun. Auto (self) + valoraci\u00f3n (assessment).\nEvaluating yourself.",
     example:"A: La autovaloraci\u00f3n es importante para crecer.\nB: S\u00ed, hay que conocer tus fortalezas.",
     exampleSrc:"A: Self-assessment is important for growth.\nB: Yes, you need to know your strengths.",
     funFact:"A transparent compound: 'auto-' (self) + 'valoraci\u00f3n' (valuation). Spanish freely creates 'auto-' compounds: autocr\u00edtica, autoestima, autoevaluaci\u00f3n."},

    {type:"teach", trg:"el b\u00edblico", src:"biblical", pos:"noun", gender:null,
     note:"Adjective. B\u00edblico/b\u00edblica. Related to the Bible.\nDe proporciones b\u00edblicas = of biblical proportions.",
     example:"A: La inundaci\u00f3n fue de proporciones b\u00edblicas.\nB: Nunca hab\u00edamos visto tanta agua.",
     exampleSrc:"A: The flood was of biblical proportions.\nB: We had never seen so much water.",
     funFact:"From Latin 'biblicus', from Greek 'biblion' (book). 'De proporciones b\u00edblicas' is used hyperbolically for anything enormously large or dramatic."},

    {type:"teach", trg:"la bulimia", src:"the bulimia", pos:"noun", gender:"f",
     note:"Feminine noun. An eating disorder.\nBulimia nerviosa = bulimia nervosa.",
     example:"A: La bulimia necesita tratamiento profesional.\nB: Es fundamental buscar ayuda.",
     exampleSrc:"A: Bulimia needs professional treatment.\nB: It is fundamental to seek help.",
     funFact:"From Greek 'boulimia' (ravenous hunger): 'bous' (ox) + 'limos' (hunger). Literally 'ox-hunger', an extreme appetite. Recognized as a disorder since the 1970s."},

    {type:"mc",
     q:"\u00bfQu\u00e9 es la autovaloraci\u00f3n?",
     opts:["Evaluarse a uno mismo","Valorar objetos antiguos","Un tipo de seguro","Una forma de cocinar"],
     ans:"Evaluarse a uno mismo",
     hint:"A compound noun with 'auto' (self) and 'valoraci\u00f3n' (assessment). Looking inward at your own qualities."},

    {type:"teach", trg:"el barullo", src:"the commotion, mess", pos:"noun", gender:"m",
     note:"Masculine noun. Noise, disorder, or confusion.\nArmar un barullo = to cause a commotion.",
     example:"A: \u00a1Menudo barullo hay en la calle!\nB: Es que hay una manifestaci\u00f3n.",
     exampleSrc:"A: What a commotion there is in the street!\nB: It is because there is a demonstration.",
     funFact:"Origin uncertain, possibly from Portuguese 'barulho'. Very common in everyday Spanish. '\u00a1Qu\u00e9 barullo!' expresses overwhelming noise or confusion."},

    {type:"teach", trg:"el brebaje", src:"the concoction, potion", pos:"noun", gender:"m",
     note:"Masculine noun. A strange or unpleasant drink.\nSometimes humorous or negative.",
     example:"A: \u00bfQu\u00e9 es ese brebaje que est\u00e1s bebiendo?\nB: Un batido verde. Es muy sano.",
     exampleSrc:"A: What is that concoction you are drinking?\nB: A green smoothie. It is very healthy.",
     funFact:"From Old French 'bevrage' (beverage). In Spanish, 'brebaje' always implies something strange or unappetizing, unlike the neutral French/English 'beverage'."},

    {type:"teach", trg:"el atado", src:"the bundle, packet", pos:"noun", gender:"m",
     note:"Masculine noun. A tied-up package.\nAlso: a pack of cigarettes in Argentina.",
     example:"A: Lleva un atado de le\u00f1a.\nB: Es para la chimenea.",
     exampleSrc:"A: He is carrying a bundle of firewood.\nB: It is for the fireplace.",
     funFact:"From 'atar' (to tie). The past participle became a noun: something that has been 'tied up'. In Argentina, 'atado' specifically means a pack of cigarettes."},

    {type:"teach", trg:"la anorexia", src:"the anorexia", pos:"noun", gender:"f",
     note:"Feminine noun. A serious eating disorder.\nAnorexia nerviosa = anorexia nervosa.",
     example:"A: La anorexia afecta a muchos j\u00f3venes.\nB: La prevenci\u00f3n es fundamental.",
     exampleSrc:"A: Anorexia affects many young people.\nB: Prevention is fundamental.",
     funFact:"From Greek 'anorexia' (lack of appetite): 'an-' (without) + 'orexis' (appetite). Spain passed laws requiring minimum BMI for fashion models to combat this."},

    {type:"fb",
     s:"\u00a1Menudo {1} hay en la plaza! No se puede ni caminar.",
     a:["barullo"],
     opts:["barullo","brebaje","atado","automatismo"],
     hint:"A noun meaning commotion, noise, and confusion in a crowded place.",
     sSrc:"What a {1} there is in the square! You cannot even walk."},

    {type:"teach", trg:"el adelantado", src:"the pioneer, governor (historical)", pos:"noun", gender:"m",
     note:"Masculine noun. Historical title for colonial governors.\nAlso adjective: advanced, ahead of time.",
     example:"A: Era un artista adelantado a su tiempo.\nB: Nadie le entendi\u00f3 entonces.",
     exampleSrc:"A: He was an artist ahead of his time.\nB: Nobody understood him then.",
     funFact:"From 'adelantar' (to advance). In colonial times, an 'adelantado' was a governor who advanced into new territory. Today used figuratively: 'adelantado a su \u00e9poca'."},

    {type:"teach", trg:"el asombro", src:"the astonishment, amazement", pos:"noun", gender:"m",
     note:"Masculine noun. From 'asombrar' (to astonish).\nCon asombro = with amazement.",
     example:"A: Mir\u00f3 el paisaje con asombro.\nB: Era la primera vez que ve\u00eda el mar.",
     exampleSrc:"A: She looked at the landscape with amazement.\nB: It was the first time she saw the sea.",
     funFact:"From 'sombra' (shadow). Being astonished was like being thrown into shadow, overwhelmed by something greater. Related to 'asombroso' (amazing)."},

    {type:"teach", trg:"a media luz", src:"in dim light, in half-light", pos:"adv", gender:null,
     note:"Adverbial phrase. Romantic or atmospheric context.\nUna cena a media luz = a candlelit dinner.",
     example:"A: El restaurante estaba a media luz.\nB: Qu\u00e9 rom\u00e1ntico.",
     exampleSrc:"A: The restaurant was dimly lit.\nB: How romantic.",
     funFact:"Literally 'at half light'. Also a famous tango song by Carlos Gardel: 'A Media Luz' (1925), which made the phrase iconic in the Spanish-speaking world."},

    {type:"teach", trg:"agridulce", src:"bittersweet", pos:"adj", gender:null,
     note:"Adjective. Same form for both genders.\nCombines agrio (sour) + dulce (sweet).",
     example:"A: La pel\u00edcula tiene un final agridulce.\nB: S\u00ed, te hace re\u00edr y llorar.",
     exampleSrc:"A: The movie has a bittersweet ending.\nB: Yes, it makes you laugh and cry.",
     funFact:"Compound of 'agrio' (sour/bitter) + 'dulce' (sweet). In cooking, 'salsa agridulce' is sweet and sour sauce. In life, it describes mixed emotions."},

    {type:"mc",
     q:"\u00bfC\u00f3mo describes algo que te hace sentir feliz y triste a la vez?",
     opts:["atmosf\u00e9rico","agridulce","absorbente","at\u00edpico"],
     ans:"agridulce",
     hint:"A compound adjective combining a sour/bitter element with a sweet one."},

    {type:"teach", trg:"el aumentativo", src:"the augmentative", pos:"noun", gender:"m",
     note:"Masculine noun. A word form that makes things bigger.\nCasa > casona, perro > perrazo.",
     example:"A: 'Cochazo' es un aumentativo de 'coche'.\nB: S\u00ed, significa un coche grande o impresionante.",
     exampleSrc:"A: 'Cochazo' is an augmentative of 'coche'.\nB: Yes, it means a big or impressive car.",
     funFact:"From 'aumentar' (to increase). Spanish augmentatives add size or emphasis: -azo (golazo = great goal), -\u00f3n (cabez\u00f3n = big-headed), -ote (grandote = really big)."},

    {type:"teach", trg:"el acer(c)amiento", src:"the rapprochement", pos:"noun", gender:"m",
     note:"Masculine noun. From 'acercar' (to bring closer).\nUn acercamiento cultural = cultural exchange.",
     example:"A: Hubo un acercamiento entre las dos comunidades.\nB: Es bueno para la convivencia.",
     exampleSrc:"A: There was a rapprochement between the two communities.\nB: It is good for coexistence.",
     funFact:"The word captures physical and emotional 'getting closer'. Diplomatic 'acercamientos' between nations can change history."},

    {type:"fb",
     s:"El final de la novela fue {1}: bonito pero triste.",
     a:["agridulce"],
     opts:["agridulce","absorbente","b\u00edblico","ancestral"],
     hint:"A compound adjective that combines a bitter/sour taste with a sweet one, used for mixed emotions.",
     sSrc:"The ending of the novel was {1}: beautiful but sad."},

    {type:"match", pairs:[
      {trg:"barullo", src:"commotion"},
      {trg:"brebaje", src:"concoction"},
      {trg:"asombro", src:"amazement"},
      {trg:"agridulce", src:"bittersweet"},
      {trg:"aumentativo", src:"augmentative"}
    ]}
  ]
};
export default LESSON_19;
