// B2 Gap Batch C Lesson 19 - Sports & Physical Activity
const LESSON_19 = {id:"esv2_b2gC_l19",title:"Deporte y actividad física",icon:"⚽",xp:15,board:true,steps:[
{type:"intro",title:"Deporte y actividad física",desc:"Learn vocabulary for sports, physical activities, and Spain's passionate sporting culture.",goals:["Learn 12 words about sports and physical activity","Discuss athletic competitions and fitness","Use sports vocabulary accurately"]},

{type:"teach",trg:"el mediocampo",src:"the midfield",pos:"noun",gender:"m",
 note:"Masculine noun. The central area of a football pitch.\nAlso: the midfield players as a group.",
 example:"A: El mediocampo del equipo controló el partido.\nB: Sin buen centro del campo, no hay buen juego.",
 exampleSrc:"A: The team's midfield controlled the match.\nB: Without a good midfield, there's no good play.",
 funFact:"Spain's 2010 World Cup winning team was famous for its mediocampo: Xavi, Iniesta, and Busquets."},

{type:"teach",trg:"el motocross",src:"the motocross",pos:"noun",gender:"m",
 note:"Masculine noun. Off-road motorcycle racing.\nFrom English motor + cross-country.",
 example:"A: El circuito de motocross está a las afueras de la ciudad.\nB: Los domingos hay competiciones regionales.",
 exampleSrc:"A: The motocross track is on the outskirts of the city.\nB: On Sundays there are regional competitions.",
 funFact:"Spain has produced top motocross riders. The country's varied terrain makes it ideal for the sport."},

{type:"teach",trg:"el motero",src:"the biker / motorcyclist",pos:"noun",gender:"m",
 note:"Masculine noun. A motorcycle enthusiast.\nFeminine: la motera.",
 example:"A: Los moteros se reúnen cada fin de semana en la plaza.\nB: Organizan rutas por las montañas de la sierra.",
 exampleSrc:"A: The bikers meet every weekend in the square.\nB: They organize routes through the mountain ranges.",
 funFact:"Spain is one of Europe's largest motorcycle markets. The MotoGP Spanish Grand Prix is a major event."},

{type:"teach",trg:"la patrullera",src:"the patrol boat / patrol car",pos:"noun",gender:"f",
 note:"Feminine noun. A vehicle used for patrolling.\nNaval: patrol boat. Police: patrol car.",
 example:"A: La patrullera de la policía vigila la costa por la noche.\nB: Buscan embarcaciones de contrabando.",
 exampleSrc:"A: The police patrol boat watches the coast at night.\nB: They look for smuggling vessels.",
 funFact:"Spain's coastline is one of Europe's longest. Patrulleras of the Guardia Civil patrol Mediterranean waters daily."},

{type:"mc",q:"¿Qué parte del campo de fútbol controla el juego?",opts:["El mediocampo","La portería","La banda","El banquillo"],ans:"El mediocampo",hint:"The central zone of the football pitch where play is organized and distributed."},

{type:"teach",trg:"el palito",src:"the small stick / breadstick",pos:"noun",gender:"m",
 note:"Masculine noun. A little stick or thin snack stick.\nDiminutive of palo (stick).",
 example:"A: Los niños comen palitos de pan con queso de merienda.\nB: Son mucho más sanos que las galletas.",
 exampleSrc:"A: The children eat breadsticks with cheese for a snack.\nB: They're much healthier than cookies.",
 funFact:"'Palitos de cangrejo' (crab sticks) are a common Spanish snack. They contain little actual crab."},

{type:"teach",trg:"penetrar",src:"to penetrate / to enter deeply",pos:"verb",gender:null,
 note:"Regular -ar verb. To enter or pass through something.\nAlso used figuratively for understanding.",
 example:"A: La humedad ha penetrado en las paredes del edificio.\nB: Necesitamos un tratamiento impermeabilizante.",
 exampleSrc:"A: Moisture has penetrated the building's walls.\nB: We need a waterproofing treatment.",
 funFact:"Figuratively, 'penetrar en un misterio' means to deeply understand a mystery. Very literary usage."},

{type:"teach",trg:"la percha",src:"the coat hanger / clothes rack",pos:"noun",gender:"f",
 note:"Feminine noun. A hanger for coats or a rack.\nSlang: a good physique.",
 example:"A: Pon tu chaqueta en la percha del vestuario.\nB: Está todo lleno, no cabe ni una más.",
 exampleSrc:"A: Put your jacket on the hanger in the changing room.\nB: It's all full, not one more will fit.",
 funFact:"In fashion, 'tener buena percha' means clothes look good on you. Models are said to have great percha."},

{type:"fb",s:"Los {1} organizan rutas por las montañas cada fin de semana.",a:["moteros"],opts:["moteros","palitos","mediocampos","patrulleras"],hint:"Motorcycle enthusiasts who enjoy riding together in groups.",sSrc:"The {1} organize routes through the mountains every weekend."},

{type:"teach",trg:"el palmero",src:"the palm tree farmer / pilgrim",pos:"noun",gender:"m",
 note:"Masculine noun. A person who grows palm trees.\nHistorically: a Holy Land pilgrim.",
 example:"A: El palmero cuida las palmeras del parque municipal.\nB: Algunas tienen más de cien años.",
 exampleSrc:"A: The palm farmer tends the palm trees in the municipal park.\nB: Some are over a hundred years old.",
 funFact:"Elche has Europe's largest palm grove: over 200,000 palmeras. The palmeros maintain them by hand."},

{type:"teach",trg:"el color de pelo",src:"the hair color",pos:"noun",gender:"m",
 note:"Masculine compound noun. The natural or dyed color of hair.\nPelo from Latin pilus.",
 example:"A: ¿Cuál es tu color de pelo natural?\nB: Castaño oscuro, pero me lo tiño de rubio.",
 exampleSrc:"A: What is your natural hair color?\nB: Dark brown, but I dye it blonde.",
 funFact:"Spain uses 'moreno' (dark-haired/tanned), 'rubio' (blonde), 'pelirrojo' (redhead), and 'castaño' (brown)."},

{type:"teach",trg:"el color de piel",src:"the skin color / complexion",pos:"noun",gender:"m",
 note:"Masculine compound noun. The tone of a person's skin.\nPiel from Latin pellis.",
 example:"A: En España hay mucha variedad de color de piel.\nB: La mezcla cultural a lo largo de la historia lo explica.",
 exampleSrc:"A: In Spain there is a lot of variety in skin color.\nB: The cultural mixing throughout history explains it.",
 funFact:"Spanish avoids 'raza' (race) in daily speech. 'Tono de piel' or 'color de piel' are the neutral terms used."},

{type:"mc",q:"¿De dónde es la palmera más famosa de Europa?",opts:["De Elche","De Madrid","De Barcelona","De Sevilla"],ans:"De Elche",hint:"A city in southeastern Spain that has the continent's largest palm grove with over 200,000 trees."},

{type:"fb",s:"La humedad ha {1} en las paredes y hay que impermeabilizar.",a:["penetrado"],opts:["penetrado","patrullado","palmado","mediado"],hint:"A verb meaning to pass into or through something, used here about moisture entering walls.",sSrc:"Moisture has {1} the walls and we need to waterproof."},

{type:"match",pairs:[{trg:"mediocampo",src:"midfield"},{trg:"motero",src:"biker"},{trg:"patrullera",src:"patrol boat"},{trg:"palmero",src:"palm farmer"},{trg:"percha",src:"coat hanger"}]}
]};

export default LESSON_19;
