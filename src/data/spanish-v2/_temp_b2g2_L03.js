// B2 Gap2 Lesson 03 - Environment & Nature
const LESSON_3 = {id:"esv2_b2g2_l3",title:"Naturaleza y medio ambiente",icon:"🌿",xp:15,board:true,steps:[
{type:"intro",title:"Naturaleza y medio ambiente",desc:"Learn vocabulary about landscapes, wildlife, and environmental challenges facing Spain and the world.",goals:["Learn 20 words about nature and environment","Discuss ecological issues in Spanish","Describe landscapes and natural features"]},

{type:"teach",trg:"la deforestación",src:"the deforestation",pos:"noun",gender:"f",
 note:"Feminine noun. The clearing of forests on a large scale.",
 example:"A: La deforestación amenaza la biodiversidad.\nB: Debemos proteger los bosques que quedan.",
 exampleSrc:"A: Deforestation threatens biodiversity.\nB: We must protect the remaining forests.",
 funFact:"Spain actually has more forest now than 100 years ago, thanks to reforestation programs."},

{type:"teach",trg:"biodegradable",src:"biodegradable",pos:"adj",gender:null,
 note:"Adjective. Able to decompose naturally. Same form for m/f.",
 example:"A: ¿Esta bolsa es biodegradable?\nB: Sí, se descompone en seis meses.",
 exampleSrc:"A: Is this bag biodegradable?\nB: Yes, it decomposes in six months.",
 funFact:"Spain banned single-use plastic bags in 2021, pushing biodegradable alternatives."},

{type:"teach",trg:"la brisa",src:"the breeze",pos:"noun",gender:"f",
 note:"Feminine noun. A gentle, pleasant wind.",
 example:"A: Qué agradable es la brisa del mar por la tarde.\nB: Es lo mejor del verano en la costa.",
 exampleSrc:"A: How pleasant is the sea breeze in the afternoon.\nB: It is the best thing about summer on the coast.",
 funFact:"The 'brisa marina' along the Mediterranean coast is what makes Spanish summers bearable."},

{type:"teach",trg:"brotar",src:"to sprout / to spring forth",pos:"verb",gender:null,
 note:"Regular -ar verb. Used for plants growing and water emerging.",
 example:"A: Las flores empiezan a brotar en primavera.\nB: El jardín se llena de color en pocas semanas.",
 exampleSrc:"A: The flowers start to sprout in spring.\nB: The garden fills with color in a few weeks.",
 funFact:"Also used figuratively: 'brotó una idea' (an idea sprang up). Very poetic in Spanish."},

{type:"teach",trg:"boscoso",src:"wooded / forested",pos:"adj",gender:null,
 note:"Adjective. Covered with dense forest.\nFeminine: boscosa.",
 example:"A: Esta zona boscosa alberga muchas especies protegidas.\nB: Por eso no se permite construir aquí.",
 exampleSrc:"A: This wooded area shelters many protected species.\nB: That is why building is not allowed here.",
 funFact:"The Basque Country and Galicia are Spain's most boscoso regions, with lush green forests."},

{type:"mc",q:"¿Qué significa brotar?",opts:["Empezar a crecer desde la tierra","Cortar un árbol","Contaminar el agua","Plantar semillas"],ans:"Empezar a crecer desde la tierra",hint:"Think about what plants do when spring arrives and they emerge from the soil."},

{type:"teach",trg:"la corteza",src:"the bark / crust",pos:"noun",gender:"f",
 note:"Feminine noun. Outer covering of a tree or of bread.",
 example:"A: La corteza de este árbol es muy rugosa.\nB: Es un alcornoque, de ahí se saca el corcho.",
 exampleSrc:"A: The bark of this tree is very rough.\nB: It is a cork oak, that is where cork comes from.",
 funFact:"Spain is the world's second-largest cork producer. The bark regrows after harvesting."},

{type:"teach",trg:"la cigarra",src:"the cicada",pos:"noun",gender:"f",
 note:"Feminine noun. Large insect known for its loud buzzing in summer.",
 example:"A: ¿Oyes el canto de las cigarras?\nB: Sí, es el sonido del verano mediterráneo.",
 exampleSrc:"A: Do you hear the song of the cicadas?\nB: Yes, it is the sound of the Mediterranean summer.",
 funFact:"The fable of the ant and the cicada ('la cigarra y la hormiga') is a classic in Spanish schools."},

{type:"teach",trg:"la alimaña",src:"the vermin / pest animal",pos:"noun",gender:"f",
 note:"Feminine noun. A harmful animal, or figuratively a despicable person.",
 example:"A: Las alimañas atacaron el gallinero anoche.\nB: Tendremos que reforzar la valla.",
 exampleSrc:"A: Vermin attacked the chicken coop last night.\nB: We will have to reinforce the fence.",
 funFact:"Historically used for foxes and weasels. Now also a strong insult when applied to people."},

{type:"teach",trg:"la cría",src:"the offspring / young animal",pos:"noun",gender:"f",
 note:"Feminine noun. A baby animal, or the act of breeding.",
 example:"A: La loba protege a sus crías con ferocidad.\nB: No te acerques al nido.",
 exampleSrc:"A: The she-wolf protects her young fiercely.\nB: Do not approach the den.",
 funFact:"'Cría cuervos y te sacarán los ojos' (Raise ravens and they will peck your eyes) is a famous proverb."},

{type:"fb",s:"La {1} del Amazonas preocupa a científicos de todo el mundo.",a:["deforestación"],opts:["deforestación","corteza","brisa","cigarra"],hint:"The large-scale destruction of forests and trees.",sSrc:"The {1} of the Amazon worries scientists around the world."},

{type:"teach",trg:"la arcilla",src:"the clay",pos:"noun",gender:"f",
 note:"Feminine noun. Fine-grained earth used for pottery and bricks.",
 example:"A: Esta cerámica está hecha de arcilla local.\nB: Tiene un color rojizo muy característico.",
 exampleSrc:"A: This pottery is made from local clay.\nB: It has a very characteristic reddish color.",
 funFact:"Talavera de la Reina is famous for its arcilla-based ceramics, dating back to the 16th century."},

{type:"teach",trg:"la cima",src:"the summit / peak",pos:"noun",gender:"f",
 note:"Feminine noun. The highest point of a mountain or achievement.",
 example:"A: Llegamos a la cima después de seis horas de marcha.\nB: Las vistas merecían el esfuerzo.",
 exampleSrc:"A: We reached the summit after six hours of hiking.\nB: The views were worth the effort.",
 funFact:"The Teide in Tenerife is the highest cima in Spain at 3,718 meters above sea level."},

{type:"teach",trg:"el cimiento",src:"the foundation",pos:"noun",gender:"m",
 note:"Masculine noun. Base of a building. Often plural: los cimientos.",
 example:"A: Los cimientos del edificio son muy sólidos.\nB: Fue construido sobre roca firme.",
 exampleSrc:"A: The foundations of the building are very solid.\nB: It was built on solid rock.",
 funFact:"Figuratively, 'poner los cimientos' means to lay the groundwork for any project or idea."},

{type:"teach",trg:"bovino",src:"bovine / cattle-related",pos:"adj",gender:null,
 note:"Adjective. Relating to cattle.\nFeminine: bovina.",
 example:"A: La industria bovina es importante en el norte de España.\nB: Asturias y Cantabria son las principales regiones ganaderas.",
 exampleSrc:"A: The cattle industry is important in northern Spain.\nB: Asturias and Cantabria are the main livestock regions.",
 funFact:"Spain's 'vaca rubia gallega' is a prized bovine breed from Galicia, famous for its meat."},

{type:"mc",q:"¿De dónde se saca el corcho?",opts:["De las crías de animales","De la corteza del alcornoque","De la cima de la montaña","De la arcilla del suelo"],ans:"De la corteza del alcornoque",hint:"Think about the outer covering of a specific type of tree."},

{type:"teach",trg:"el arado",src:"the plow",pos:"noun",gender:"m",
 note:"Masculine noun. A farming tool for turning soil.",
 example:"A: El agricultor pasó el arado por todo el campo.\nB: La tierra está lista para la siembra.",
 exampleSrc:"A: The farmer ran the plow across the entire field.\nB: The land is ready for sowing.",
 funFact:"The Roman arado (aratrum) shaped Spanish agriculture for centuries. Wooden plows lasted until the 1900s."},

{type:"teach",trg:"la aleta",src:"the fin / flipper",pos:"noun",gender:"f",
 note:"Feminine noun. A fin on a fish or a flipper for swimming.",
 example:"A: El tiburón mostró su aleta sobre el agua.\nB: Los bañistas salieron corriendo de la playa.",
 exampleSrc:"A: The shark showed its fin above the water.\nB: The swimmers ran off the beach.",
 funFact:"In diving, 'aletas' are flippers. Spain's coast is one of Europe's top diving destinations."},

{type:"teach",trg:"la barranca",src:"the ravine / gorge",pos:"noun",gender:"f",
 note:"Feminine noun. A deep, narrow valley with steep sides.",
 example:"A: Ten cuidado con la barranca, es muy profunda.\nB: No me acercaré al borde.",
 exampleSrc:"A: Be careful with the ravine, it is very deep.\nB: I will not go near the edge.",
 funFact:"The Barrancas de Burujón near Toledo are stunning clay ravines often called 'Spain's Grand Canyon'."},

{type:"teach",trg:"la agronomía",src:"the agronomy",pos:"noun",gender:"f",
 note:"Feminine noun. The science of farming and soil management.",
 example:"A: Estudia agronomía en la universidad.\nB: Quiere modernizar la explotación familiar.",
 exampleSrc:"A: She studies agronomy at university.\nB: She wants to modernize the family farm.",
 funFact:"Spain has some of Europe's oldest agricultural traditions, influenced by Roman and Moorish techniques."},

{type:"teach",trg:"la camada",src:"the litter (of animals)",pos:"noun",gender:"f",
 note:"Feminine noun. A group of baby animals born at the same time.",
 example:"A: La gata tuvo una camada de cinco gatitos.\nB: Son todos de colores diferentes.",
 exampleSrc:"A: The cat had a litter of five kittens.\nB: They are all different colors.",
 funFact:"Also used pejoratively: 'de la misma camada' means people of the same questionable group."},

{type:"fb",s:"Llegamos a la {1} de la montaña al amanecer.",a:["cima"],opts:["cima","corteza","barranca","arcilla"],hint:"The highest point of a mountain that hikers aim to reach.",sSrc:"We reached the {1} of the mountain at dawn."},

{type:"match",pairs:[{trg:"brisa",src:"breeze"},{trg:"arcilla",src:"clay"},{trg:"arado",src:"plow"},{trg:"aleta",src:"fin"},{trg:"camada",src:"litter (animals)"}]},

{type:"mc",q:"¿Qué es una alimaña?",opts:["Una roca volcánica","Un instrumento de labranza","Un animal dañino o plaga","Un tipo de planta tropical"],ans:"Un animal dañino o plaga",hint:"This noun describes a pest or vermin that causes damage in fields and farms."}
]};

export default LESSON_3;
