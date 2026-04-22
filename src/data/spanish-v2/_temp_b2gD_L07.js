// B2 Gap Batch D Lesson 7 - Body, Appearance & Clothing
const LESSON_7 = {id:"esv2_b2gD_l7",title:"Cuerpo y apariencia",icon:"\uD83D\uDC64",xp:15,board:true,steps:[
{type:"intro",title:"Cuerpo y apariencia",desc:"Learn vocabulary for body parts, physical appearance, and traditional clothing items used in everyday and cultural Spanish.",goals:["Learn 10 body and appearance vocabulary items","Describe physical features precisely","Discuss traditional clothing and grooming"]},

{type:"teach",trg:"la cabeza",src:"the head",pos:"noun",gender:"f",
 note:"Feminine noun. The top part of the body.\nAlso figurative: leader, mind, intelligence.",
 example:"A: Me duele mucho la cabeza desde esta mañana.\nB: Toma una aspirina y descansa un poco.",
 exampleSrc:"A: My head has been hurting a lot since this morning.\nB: Take an aspirin and rest a bit.",
 funFact:"'Cabeza de turco' (Turkish head) means scapegoat, dating from when effigy heads were used in jousting practice."},

{type:"teach",trg:"la panza",src:"the belly / paunch",pos:"noun",gender:"f",
 note:"Feminine noun. The stomach area, especially when large.\nMore colloquial than 'abdomen' or 'vientre'.",
 example:"A: Después de las navidades siempre tengo más panza.\nB: Normal, con todo lo que comemos en esas fiestas.",
 exampleSrc:"A: After Christmas I always have more of a belly.\nB: Of course, with everything we eat during those holidays.",
 funFact:"'Panza' also refers to the rounded part of a vessel. 'Panza de burro' (donkey belly) describes overcast coastal skies in Canary Islands Spanish."},

{type:"teach",trg:"el moño",src:"the bun (hairstyle) / bow",pos:"noun",gender:"m",
 note:"Masculine noun. Hair gathered in a knot on top or back.\nAlso a decorative bow or ribbon.",
 example:"A: Se recogió el pelo en un moño elegante para la boda.\nB: Le quedaba perfecto con ese vestido.",
 exampleSrc:"A: She put her hair up in an elegant bun for the wedding.\nB: It looked perfect with that dress.",
 funFact:"In bullfighting, the matador's 'moño' (small bun) is tradition. 'Estar hasta el moño' means to be fed up."},

{type:"teach",trg:"la patilla",src:"the sideburn / leg (of glasses)",pos:"noun",gender:"f",
 note:"Feminine noun. Hair grown on the side of the face.\nAlso the arm of eyeglasses.",
 example:"A: Las patillas largas estuvieron de moda en los años setenta.\nB: Ahora han vuelto con un estilo más corto.",
 exampleSrc:"A: Long sideburns were fashionable in the seventies.\nB: Now they've come back in a shorter style.",
 funFact:"In Caribbean Spanish, 'patilla' means watermelon. Same word, completely different meaning depending on the country."},

{type:"mc",q:"'Estar hasta el moño' significa...",opts:["Estar harto o cansado","Tener el pelo bonito","Estar muy contento","Sentirse enfermo"],ans:"Estar harto o cansado",hint:"An idiomatic expression using the word for hair bun. It means being at your limit with something."},

{type:"teach",trg:"la peineta",src:"the ornamental hair comb",pos:"noun",gender:"f",
 note:"Feminine noun. A large decorative comb worn in the hair.\nTraditional in Spanish mantilla outfits.",
 example:"A: Mi abuela llevaba peineta y mantilla en la Semana Santa.\nB: Es una tradición muy elegante.",
 exampleSrc:"A: My grandmother wore an ornamental comb and mantilla during Holy Week.\nB: It's a very elegant tradition.",
 funFact:"The peineta became a Spanish national symbol in the 19th century. Queen Isabel II popularized them at court."},

{type:"teach",trg:"el pellejo",src:"the skin / hide / wineskin",pos:"noun",gender:"m",
 note:"Masculine noun. Animal skin, or human skin colloquially.\n'Jugarse el pellejo': to risk one's life.",
 example:"A: Se jugó el pellejo para salvar al niño del incendio.\nB: Es un verdadero héroe, fue muy valiente.",
 exampleSrc:"A: He risked his life to save the child from the fire.\nB: He's a true hero, he was very brave.",
 funFact:"Historically, wine was transported in pellejos (animal skin bags). The expression 'estar en el pellejo de otro' means to be in someone else's shoes."},

{type:"teach",trg:"la calza",src:"the stocking / hose (historical)",pos:"noun",gender:"f",
 note:"Feminine noun. Historical tight-fitting leg garment.\nPlural 'calzas' common. Related to 'calzado' (footwear).",
 example:"A: En el siglo XVI, los nobles llevaban calzas de seda.\nB: La moda de la época era muy elaborada.",
 exampleSrc:"A: In the 16th century, nobles wore silk stockings.\nB: Fashion at that time was very elaborate.",
 funFact:"From 'calzar' (to put on footwear). 'Calzas' evolved into 'calzones' and eventually 'calzoncillos' (underpants)."},

{type:"fb",s:"Se recogió el pelo en un {1} para la ceremonia.",a:["moño"],opts:["moño","pellejo","patilla","pedernal"],hint:"A hairstyle where hair is gathered into a knot, often worn for formal occasions.",sSrc:"She put her hair up in a {1} for the ceremony."},

{type:"teach",trg:"la montera",src:"the bullfighter's hat / hunting cap",pos:"noun",gender:"f",
 note:"Feminine noun. The distinctive round hat worn by matadors.\nAlso a type of hunting or mountain cap.",
 example:"A: El torero se puso la montera antes de salir al ruedo.\nB: Es un gesto lleno de tradición y simbolismo.",
 exampleSrc:"A: The bullfighter put on his hat before entering the ring.\nB: It's a gesture full of tradition and symbolism.",
 funFact:"'Me importa un bledo / una montera' means 'I couldn't care less'. The montera is also used in some regional folk costumes."},

{type:"teach",trg:"el asta",src:"the horn (of animal) / flagpole / shaft",pos:"noun",gender:"f",
 note:"Feminine noun, but uses 'el' (el asta) due to initial stressed 'a'.\nHorn of a bull or pole for a flag.",
 example:"A: El toro levantó las astas y el público contuvo la respiración.\nB: El torero mantuvo la calma en todo momento.",
 exampleSrc:"A: The bull raised its horns and the audience held its breath.\nB: The bullfighter remained calm at all times.",
 funFact:"'A media asta' (at half mast) is used for flags during mourning. The word 'asta' is feminine but takes 'el' like 'el agua'."},

{type:"match",pairs:[
 {trg:"panza",src:"belly / paunch"},
 {trg:"patilla",src:"sideburn"},
 {trg:"peineta",src:"ornamental comb"},
 {trg:"pellejo",src:"skin / hide"},
 {trg:"montera",src:"bullfighter's hat"}
]},

{type:"mc",q:"'Jugarse el pellejo' significa...",opts:["Perder peso","Arriesgar la vida","Cambiar de ropa","Cuidar la piel"],ans:"Arriesgar la vida",hint:"An idiom using the word for skin/hide. It means putting your very existence at stake."},

{type:"fb",s:"La bandera ondeaba a media {1} en señal de duelo.",a:["asta"],opts:["asta","calza","peineta","montera"],hint:"The pole from which a flag flies. At half this, it signals mourning.",sSrc:"The flag flew at half {1} as a sign of mourning."},

{type:"mc",q:"Una peineta se lleva en...",opts:["La muñeca, como pulsera","Los pies, como calzado","El pelo, como adorno tradicional","El cuello, como collar"],ans:"El pelo, como adorno tradicional",hint:"A large decorative accessory associated with Spanish mantilla tradition, worn on the head."}
]};
export default LESSON_7;
