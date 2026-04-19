// B2 Gap Batch D Lesson 6 - Objects & Materials
const LESSON_6 = {id:"esv2_b2gD_l6",title:"Objetos y materiales",icon:"\uD83D\uDD27",xp:15,board:true,steps:[
{type:"intro",title:"Objetos y materiales",desc:"Learn vocabulary for everyday objects, tools, and materials. Practical words you need for describing the physical world.",goals:["Learn 10 object and material vocabulary items","Describe tools and their functions","Use precise nouns for everyday items"]},

{type:"teach",trg:"el pegamento",src:"the glue / adhesive",pos:"noun",gender:"m",
 note:"Masculine noun. A substance that sticks things together.\nFrom pegar (to stick/glue).",
 example:"A: Necesito pegamento para arreglar este jarrón roto.\nB: Usa uno muy bueno, es más resistente.",
 exampleSrc:"A: I need glue to fix this broken vase.\nB: Use a very good one, it is more resistant.",
 funFact:"The verb 'pegar' also means 'to hit'. Context is key: 'pegar un sello' (stick a stamp) vs. 'pegar a alguien' (hit someone)."},

{type:"teach",trg:"el pedal",src:"the pedal",pos:"noun",gender:"m",
 note:"Masculine noun. A lever operated by foot.\nUsed for bicycles, pianos, and cars.",
 example:"A: Pisa el pedal del freno suavemente en las curvas.\nB: Vale, todavía estoy aprendiendo a conducir.",
 exampleSrc:"A: Press the brake pedal gently on curves.\nB: Okay, I'm still learning to drive.",
 funFact:"From Latin 'pedalis' (of the foot). Spanish keeps many Latin foot words: pedal, peatón (pedestrian), pedalear (to pedal)."},

{type:"teach",trg:"el pedernal",src:"the flint",pos:"noun",gender:"m",
 note:"Masculine noun. A hard stone that produces sparks.\nHistorically used to start fires.",
 example:"A: Los antiguos usaban pedernal para encender fuego.\nB: Es increíble lo que lograban con herramientas tan simples.",
 exampleSrc:"A: Ancient people used flint to start fire.\nB: It's incredible what they achieved with such simple tools.",
 funFact:"Pedernal comes from Latin 'petra' (stone) + 'ignalis' (fire). Flint tools found at Atapuerca in Spain date back 800,000 years."},

{type:"teach",trg:"el pestillo",src:"the bolt / latch",pos:"noun",gender:"m",
 note:"Masculine noun. A sliding bar that locks a door.\nFrom peste (plague) via old security mechanisms.",
 example:"A: Echa el pestillo antes de acostarte.\nB: Ya lo he puesto, la puerta está bien cerrada.",
 exampleSrc:"A: Slide the bolt before going to bed.\nB: I've already done it, the door is well locked.",
 funFact:"During plague outbreaks, homes used pestillos to seal doors and prevent entry. The word preserves this security connection."},

{type:"mc",q:"El pedernal se usaba para...",opts:["Encender fuego","Cortar madera","Pegar objetos","Cerrar puertas"],ans:"Encender fuego",hint:"A type of stone that creates sparks when struck. Think prehistoric fire-starting."},

{type:"teach",trg:"la percha",src:"the coat hanger / rack",pos:"noun",gender:"f",
 note:"Feminine noun. A frame for hanging clothes.\nAlso: a coat rack on the wall.",
 example:"A: Cuelga tu abrigo en la percha del recibidor.\nB: Gracias, no sabía dónde dejarlo.",
 exampleSrc:"A: Hang your coat on the rack in the hallway.\nB: Thanks, I didn't know where to put it.",
 funFact:"In some Latin American countries, 'gancho' (hook) is used instead of 'percha'. Spain strongly prefers 'percha'."},

{type:"teach",trg:"el patinete",src:"the scooter / kick scooter",pos:"noun",gender:"m",
 note:"Masculine noun. A small vehicle propelled by pushing with one foot.\nDiminutive of patín (skate).",
 example:"A: Los patinetes eléctricos se han convertido en un problema en las ciudades.\nB: Muchos usuarios no respetan las normas de circulación.",
 exampleSrc:"A: Electric scooters have become a problem in cities.\nB: Many users don't follow traffic rules.",
 funFact:"Madrid, Barcelona, and Valencia all introduced patinete regulations after 2019 due to accidents and sidewalk conflicts."},

{type:"teach",trg:"el papiro",src:"the papyrus",pos:"noun",gender:"m",
 note:"Masculine noun. Ancient writing material from plant fibers.\nAlso: an ancient document written on papyrus.",
 example:"A: En el museo hay papiros egipcios de hace tres mil años.\nB: Es asombroso que la tinta se conserve tan bien.",
 exampleSrc:"A: In the museum there are Egyptian papyri from three thousand years ago.\nB: It's amazing that the ink is so well preserved.",
 funFact:"The word 'papel' (paper) descends from 'papiro' through Latin 'papyrus'. Egypt exported papyrus throughout the ancient Mediterranean."},

{type:"fb",s:"Echa el {1} de la puerta antes de irte a dormir.",a:["pestillo"],opts:["pestillo","pedal","pegamento","papiro"],hint:"A sliding metal bar on a door that provides security when locked.",sSrc:"Slide the door {1} before going to sleep."},

{type:"teach",trg:"la paleta",src:"the palette / trowel / popsicle",pos:"noun",gender:"f",
 note:"Feminine noun. Multiple meanings depending on context.\nArt: painter's palette. Construction: trowel. Food: ice lolly.",
 example:"A: El pintor mezcla los colores en su paleta.\nB: Prefiere los tonos cálidos, rojos y naranjas.",
 exampleSrc:"A: The painter mixes colors on his palette.\nB: He prefers warm tones, reds and oranges.",
 funFact:"In Mexico, 'paleta' means a popsicle or ice lolly. The famous paleteros sell them from carts on the street."},

{type:"teach",trg:"el listón",src:"the ribbon / bar (standard)",pos:"noun",gender:"m",
 note:"Masculine noun. A narrow strip, or the bar in high jump.\nFigurative: 'poner el listón alto' (set the bar high).",
 example:"A: Has puesto el listón muy alto con esta presentación.\nB: Gracias, me esforcé mucho en prepararla.",
 exampleSrc:"A: You've set the bar very high with this presentation.\nB: Thanks, I worked very hard preparing it.",
 funFact:"'Poner el listón alto/bajo' is one of the most common figurative expressions in Spanish sports and business commentary."},

{type:"match",pairs:[
 {trg:"pegamento",src:"glue"},
 {trg:"pestillo",src:"bolt / latch"},
 {trg:"percha",src:"coat hanger"},
 {trg:"patinete",src:"scooter"},
 {trg:"papiro",src:"papyrus"}
]},

{type:"mc",q:"'Poner el listón alto' significa...",opts:["Establecer un estándar elevado","Colgar algo en una percha","Pegar una cinta decorativa","Cerrar una puerta con llave"],ans:"Establecer un estándar elevado",hint:"A figurative expression about setting expectations. Think of the high jump bar in athletics."},

{type:"fb",s:"El pintor mezcla los colores en su {1} antes de empezar.",a:["paleta"],opts:["paleta","percha","papiro","listón"],hint:"The flat board where an artist arranges and blends paint colors.",sSrc:"The painter mixes colors on his {1} before starting."},

{type:"mc",q:"Los patinetes eléctricos han causado polémica porque...",opts:["Muchos usuarios no respetan las normas","Son demasiado caros para la mayoría","Solo funcionan en días soleados","Consumen mucha electricidad"],ans:"Muchos usuarios no respetan las normas",hint:"The controversy is about safety and rule-breaking on city sidewalks and roads."}
]};
export default LESSON_6;
