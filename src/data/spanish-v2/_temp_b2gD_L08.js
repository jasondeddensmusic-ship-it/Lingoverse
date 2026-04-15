// B2 Gap Batch D Lesson 8 - Food, Markets & Gastronomy
const LESSON_8 = {id:"esv2_b2gD_l8",title:"Mercados y gastronomía",icon:"\uD83C\uDF4A",xp:15,board:true,steps:[
{type:"intro",title:"Mercados y gastronomía",desc:"Explore vocabulary for markets, food items, and culinary traditions. Essential for discussing Spanish gastronomy.",goals:["Learn 10 food and market vocabulary items","Discuss culinary traditions with precision","Navigate markets and food shops confidently"]},

{type:"teach",trg:"los abastos",src:"the provisions / supplies (market)",pos:"noun",gender:"m",
 note:"Masculine plural noun. Provisions for a city or town.\n'Mercado de abastos': central food market.",
 example:"A: El mercado de abastos abre a las seis de la mañana.\nB: A esa hora tienen el pescado más fresco.",
 exampleSrc:"A: The provisions market opens at six in the morning.\nB: At that time they have the freshest fish.",
 funFact:"Valencia's Mercado Central de Abastos is one of Europe's largest covered markets, operating since 1928."},

{type:"teach",trg:"el pepinillo",src:"the gherkin / pickle",pos:"noun",gender:"m",
 note:"Masculine noun. A small pickled cucumber.\nDiminutive of pepino (cucumber) + -illo.",
 example:"A: Me encantan los pepinillos en vinagre con las tapas.\nB: A mí también, sobre todo con queso manchego.",
 exampleSrc:"A: I love pickled gherkins with tapas.\nB: Me too, especially with Manchego cheese.",
 funFact:"The -illo diminutive is characteristic of Castilian Spanish: pepino > pepinillo, pan > panecillo, guerra > guerrilla."},

{type:"teach",trg:"el bolillo",src:"the bread roll (crusty)",pos:"noun",gender:"m",
 note:"Masculine noun. A type of crusty white bread roll.\nCommon in Mexico, also used in some Spanish regions.",
 example:"A: En la panadería hacen unos bolillos crujientes por la mañana.\nB: Me llevo media docena para el desayuno.",
 exampleSrc:"A: At the bakery they make crusty bread rolls in the morning.\nB: I'll take half a dozen for breakfast.",
 funFact:"In Mexico, 'bolillo' is the standard bread roll name. In Spain, the equivalent is 'pistola' or 'barra' depending on the region."},

{type:"teach",trg:"el pasto",src:"the pasture / grass / grazing land",pos:"noun",gender:"m",
 note:"Masculine noun. Land covered with grass for livestock.\nAlso the grass itself in Latin America.",
 example:"A: Las vacas pastan en los pastos de la montaña en verano.\nB: La carne de ganado criado en pasto es de mejor calidad.",
 exampleSrc:"A: The cows graze in the mountain pastures in summer.\nB: Meat from pasture-raised cattle is better quality.",
 funFact:"'Pasto' comes from Latin 'pastus' (feeding). The same root gives us 'pastor' (shepherd) and 'pastar' (to graze)."},

{type:"mc",q:"Un mercado de abastos vende...",opts:["Alimentos frescos y provisiones","Ropa y complementos","Libros y revistas","Electrodomésticos"],ans:"Alimentos frescos y provisiones",hint:"A traditional covered market where you find fresh produce, fish, meat, and staples."},

{type:"teach",trg:"la pescadilla",src:"the small hake / whiting",pos:"noun",gender:"f",
 note:"Feminine noun. A young hake fish, common in Spanish cuisine.\nDiminutive of pescada.",
 example:"A: La pescadilla frita es uno de mis platos favoritos.\nB: Con un poco de limón está riquísima.",
 exampleSrc:"A: Fried small hake is one of my favorite dishes.\nB: With a bit of lemon it's delicious.",
 funFact:"'La pescadilla que se muerde la cola' (the fish biting its own tail) means a vicious circle, a common Spanish idiom."},

{type:"teach",trg:"el mondongo",src:"the tripe stew / entrails",pos:"noun",gender:"m",
 note:"Masculine noun. Stomach lining prepared as food.\nA traditional dish in Spain and Latin America.",
 example:"A: Mi abuela preparaba mondongo los domingos.\nB: Es un plato que requiere muchas horas de cocción.",
 exampleSrc:"A: My grandmother used to make tripe stew on Sundays.\nB: It's a dish that requires many hours of cooking.",
 funFact:"Mondongo recipes vary hugely across the Spanish-speaking world. In Madrid, it's 'callos'. In Colombia, 'mondongo' is a separate soup."},

{type:"teach",trg:"la cola de caballo",src:"the horsetail (plant) / ponytail",pos:"noun",gender:"f",
 note:"Feminine compound noun. A medicinal plant.\nAlso the hairstyle (coleta is more common for hair).",
 example:"A: La infusión de cola de caballo es buena para los riñones.\nB: Mi médico me la recomendó como diurético natural.",
 exampleSrc:"A: Horsetail tea is good for the kidneys.\nB: My doctor recommended it as a natural diuretic.",
 funFact:"The horsetail plant (Equisetum) is a living fossil from the Carboniferous period. In herbal shops, it's one of Spain's best sellers."},

{type:"fb",s:"Compro el pescado fresco en el mercado de {1} del centro.",a:["abastos"],opts:["abastos","mondongo","bolillo","pasto"],hint:"The word for a traditional central food market that sells fresh provisions.",sSrc:"I buy fresh fish at the central {1} market downtown."},

{type:"teach",trg:"la nogada",src:"the walnut sauce",pos:"noun",gender:"f",
 note:"Feminine noun. A creamy sauce made from walnuts.\nFamous in chiles en nogada (Mexican dish).",
 example:"A: La nogada lleva nueces, queso y un toque de canela.\nB: Es la salsa perfecta para los chiles en nogada.",
 exampleSrc:"A: The walnut sauce has walnuts, cheese, and a touch of cinnamon.\nB: It's the perfect sauce for chiles en nogada.",
 funFact:"Chiles en nogada represent the Mexican flag's colors: green chile, white nogada, red pomegranate. Served around Independence Day."},

{type:"teach",trg:"el pastizal",src:"the pastureland / grassland",pos:"noun",gender:"m",
 note:"Masculine noun. A large area of natural grassland.\nAugmentative of pasto + -izal (abundance suffix).",
 example:"A: Los pastizales de la meseta alimentan a miles de ovejas.\nB: Es un paisaje muy bonito en primavera.",
 exampleSrc:"A: The pasturelands of the plateau feed thousands of sheep.\nB: It's a very beautiful landscape in spring.",
 funFact:"Spain's 'dehesa' system combines pastizales with scattered oaks, creating the unique landscape where Iberian pigs roam."},

{type:"match",pairs:[
 {trg:"abastos",src:"provisions market"},
 {trg:"pepinillo",src:"gherkin / pickle"},
 {trg:"mondongo",src:"tripe stew"},
 {trg:"pescadilla",src:"small hake"},
 {trg:"pastizal",src:"pastureland"}
]},

{type:"mc",q:"'La pescadilla que se muerde la cola' significa...",opts:["Un círculo vicioso","Un plato de pescado frito","Un tipo de danza popular","Una técnica de pesca"],ans:"Un círculo vicioso",hint:"An idiom about a fish biting its own tail, representing a situation with no escape."},

{type:"fb",s:"Los {1} de la meseta castellana son ideales para la ganadería.",a:["pastizales"],opts:["pastizales","pepinillos","bolillos","abastos"],hint:"Large areas of natural grassland used for grazing livestock.",sSrc:"The {1} of the Castilian plateau are ideal for livestock farming."},

{type:"mc",q:"La nogada es una salsa hecha principalmente de...",opts:["Nueces","Tomates","Aceitunas","Almendras"],ans:"Nueces",hint:"This creamy sauce takes its name from 'nuez' (walnut), the main ingredient."}
]};
export default LESSON_8;
