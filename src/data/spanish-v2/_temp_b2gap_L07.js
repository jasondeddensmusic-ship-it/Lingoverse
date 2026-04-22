// B2 Gap Lesson 07 - Culture & Intellect
const LESSON_7 = {id:"esv2_b2gap_l7",title:"Cultura e intelecto",icon:"🎨",xp:15,board:true,steps:[
{type:"intro",title:"Cultura e intelecto",desc:"Explore words about art, culture, and intellectual life in the Spanish-speaking world.",goals:["Learn 20 culture and intellect words","Discuss art and ideas","Use abstract cultural vocabulary"]},

{type:"teach",trg:"el certamen",src:"the contest / competition",pos:"noun",gender:"m",
 note:"Masculine noun. A formal contest, especially cultural or literary.",
 example:"A: Ganó el primer premio en el certamen literario.\nB: Su novela impresionó al jurado.",
 exampleSrc:"A: She won first prize in the literary contest.\nB: Her novel impressed the jury.",
 funFact:"From Latin certamen (struggle). Used mainly for artistic, literary, or beauty competitions."},

{type:"teach",trg:"el collage",src:"the collage",pos:"noun",gender:"m",
 note:"Masculine noun. Art made by gluing different materials together.",
 example:"A: Los niños hicieron un collage con revistas viejas.\nB: Quedó muy colorido y creativo.",
 exampleSrc:"A: The children made a collage with old magazines.\nB: It turned out very colorful and creative.",
 funFact:"From French coller (to glue). Picasso pioneered collage in fine art in 1912 while in Spain."},

{type:"teach",trg:"el casting",src:"the casting / audition",pos:"noun",gender:"m",
 note:"Masculine noun. An audition for actors or performers.",
 example:"A: Fui a un casting para una serie de televisión.\nB: ¿Qué tal te fue? ¿Te llamaron?",
 exampleSrc:"A: I went to a casting for a TV series.\nB: How did it go? Did they call you?",
 funFact:"English loanword fully adopted in Spanish. 'Hacer un casting' is the standard phrase."},

{type:"teach",trg:"el cancionero",src:"the songbook / collection of songs",pos:"noun",gender:"m",
 note:"Masculine noun. A collection of songs or poems.",
 example:"A: El cancionero popular español es riquísimo.\nB: Cada región tiene sus propias canciones.",
 exampleSrc:"A: The Spanish folk songbook is incredibly rich.\nB: Each region has its own songs.",
 funFact:"Medieval 'cancioneros' preserved troubadour poetry. The Cancionero de Palacio has 460 works."},

{type:"teach",trg:"el arquetipo",src:"the archetype",pos:"noun",gender:"m",
 note:"Masculine noun. An original model or typical example.",
 example:"A: Don Quijote es el arquetipo del idealista.\nB: Y Sancho Panza del realista práctico.",
 exampleSrc:"A: Don Quixote is the archetype of the idealist.\nB: And Sancho Panza of the practical realist.",
 funFact:"From Greek arkhetypon (first mold). Jung popularized archetypes in psychology."},

{type:"mc",q:"Un concurso literario o artístico formal se llama:",opts:["un certamen","un cancionero","un casting","un collage"],ans:"un certamen",hint:"This formal word comes from Latin and means a structured competition."},

{type:"teach",trg:"el ajedrez",src:"the chess",pos:"noun",gender:"m",
 note:"Masculine noun. The strategic board game.",
 example:"A: ¿Sabes jugar al ajedrez?\nB: Sí, aprendí de niño con mi abuelo.",
 exampleSrc:"A: Do you know how to play chess?\nB: Yes, I learned as a child with my grandfather.",
 funFact:"From Arabic ash-shatranj, itself from Sanskrit. Spain was a chess powerhouse in the 15th century."},

{type:"teach",trg:"el ajedrecista",src:"the chess player",pos:"noun",gender:"m",
 note:"Common gender noun. La ajedrecista for feminine.",
 example:"A: Es la mejor ajedrecista del país.\nB: Ha ganado tres campeonatos nacionales.",
 exampleSrc:"A: She is the best chess player in the country.\nB: She has won three national championships.",
 funFact:"The -ista suffix creates agent nouns from activities: ajedrez gives ajedrecista."},

{type:"teach",trg:"el artista",src:"the artist",pos:"noun",gender:"m",
 note:"Common gender noun. La artista for feminine.",
 example:"A: La artista expone sus obras en el museo Reina Sofía.\nB: Es una oportunidad increíble.",
 exampleSrc:"A: The artist is exhibiting her works at the Reina Sofía museum.\nB: It is an incredible opportunity.",
 funFact:"Spain has produced Picasso, Dalí, Goya, Velázquez, and Miró. Art is deeply national."},

{type:"teach",trg:"el anagrama",src:"the anagram",pos:"noun",gender:"m",
 note:"Masculine noun. A word formed by rearranging letters.",
 example:"A: 'Roma' es un anagrama de 'amor'.\nB: Qué curioso, nunca me había dado cuenta.",
 exampleSrc:"A: 'Roma' is an anagram of 'amor'.\nB: How curious, I had never noticed.",
 funFact:"From Greek ana- (back) + gramma (letter). Anagram puzzles are popular in Spanish newspapers."},

{type:"fb",s:"Don Quijote es el {1} del soñador idealista.",a:["arquetipo"],opts:["arquetipo","anagrama","ajedrecista","certamen"],hint:"An original model or perfect example of a type.",sSrc:"Don Quixote is the {1} of the idealistic dreamer."},

{type:"teach",trg:"el acrónimo",src:"the acronym",pos:"noun",gender:"m",
 note:"Masculine noun. A word formed from initial letters.",
 example:"A: ONU es el acrónimo de Organización de las Naciones Unidas.\nB: Y OTAN es la Organización del Tratado del Atlántico Norte.",
 exampleSrc:"A: ONU is the acronym for United Nations Organization.\nB: And OTAN is the North Atlantic Treaty Organization.",
 funFact:"Spanish often creates different acronyms than English: NATO becomes OTAN, AIDS becomes SIDA."},

{type:"teach",trg:"el asterisco",src:"the asterisk",pos:"noun",gender:"m",
 note:"Masculine noun. The * symbol used in writing.",
 example:"A: Pon un asterisco junto a las palabras importantes.\nB: Así será más fácil encontrarlas.",
 exampleSrc:"A: Put an asterisk next to the important words.\nB: That way it will be easier to find them.",
 funFact:"From Greek asteriskos (little star). In Spanish footnotes, asterisks are less common than numbers."},

{type:"teach",trg:"conceptual",src:"conceptual",pos:"adj",gender:null,
 note:"Adjective. Based on ideas rather than physical things. Invariable.",
 example:"A: El arte conceptual prioriza la idea sobre la forma.\nB: A veces cuesta entenderlo.",
 exampleSrc:"A: Conceptual art prioritizes the idea over the form.\nB: Sometimes it is hard to understand.",
 funFact:"Spain's MACBA in Barcelona is a major center for conceptual art in Europe."},

{type:"teach",trg:"clasicista",src:"classicist",pos:"adj",gender:null,
 note:"Adjective. Following classical styles or traditions. Invariable.",
 example:"A: La fachada del edificio es de estilo clasicista.\nB: Las columnas le dan mucha elegancia.",
 exampleSrc:"A: The building's facade is classicist in style.\nB: The columns give it great elegance.",
 funFact:"Spain's Museo del Prado building (1785) is a prime example of clasicista architecture."},

{type:"mc",q:"¿De qué idioma viene la palabra 'ajedrez'?",opts:["Del latín","Del árabe","Del francés","Del griego"],ans:"Del árabe",hint:"Many Spanish words starting with 'a-' or 'al-' come from this language."},

{type:"teach",trg:"cognitivo",src:"cognitive",pos:"adj",gender:null,
 note:"Adjective. Related to thinking and mental processes.\nFeminine: cognitiva.",
 example:"A: El desarrollo cognitivo del niño es excelente.\nB: Lee mucho para su edad.",
 exampleSrc:"A: The child's cognitive development is excellent.\nB: He reads a lot for his age.",
 funFact:"From Latin cognoscere (to know). 'Terapia cognitiva' is a major branch of psychology."},

{type:"teach",trg:"el academicismo",src:"the academicism",pos:"noun",gender:"m",
 note:"Masculine noun. Strict adherence to academic traditions.",
 example:"A: El academicismo limitaba la creatividad artística.\nB: Los impresionistas rompieron con esa tradición.",
 exampleSrc:"A: Academicism limited artistic creativity.\nB: The impressionists broke with that tradition.",
 funFact:"The Real Academia Española (RAE) has defined Spanish language standards since 1713."},

{type:"teach",trg:"el americanismo",src:"the Americanism",pos:"noun",gender:"m",
 note:"Masculine noun. A word or expression from Latin American Spanish.",
 example:"A: 'Computadora' es un americanismo muy extendido.\nB: En España decimos 'ordenador'.",
 exampleSrc:"A: 'Computadora' is a widespread Americanism.\nB: In Spain we say 'ordenador'.",
 funFact:"The RAE's dictionary now includes thousands of americanismos, reflecting the global language."},

{type:"teach",trg:"el arabismo",src:"the Arabism (Arabic loanword)",pos:"noun",gender:"m",
 note:"Masculine noun. A Spanish word borrowed from Arabic.",
 example:"A: 'Almohada' es un arabismo muy común.\nB: Hay miles de ellos en español.",
 exampleSrc:"A: 'Almohada' (pillow) is a very common Arabism.\nB: There are thousands of them in Spanish.",
 funFact:"Over 4,000 Spanish words come from Arabic, a legacy of 800 years of Moorish presence in Iberia."},

{type:"teach",trg:"el cometa",src:"the comet",pos:"noun",gender:"m",
 note:"Masculine when it means comet. Feminine 'la cometa' means kite.",
 example:"A: El cometa Halley pasa cada setenta y seis años.\nB: La próxima vez será en 2061.",
 exampleSrc:"A: Halley's Comet passes every seventy-six years.\nB: The next time will be in 2061.",
 funFact:"Gender changes meaning: el cometa (astronomical body) vs la cometa (toy kite). Context is key."},

{type:"fb",s:"ONU es el {1} de Organización de las Naciones Unidas.",a:["acrónimo"],opts:["acrónimo","anagrama","asterisco","arabismo"],hint:"A word formed from the first letters of a longer name.",sSrc:"ONU is the {1} for United Nations Organization."},

{type:"mc",q:"¿Cuál es un arabismo en español?",opts:["Brócoli","Collage","Almohada","Casting"],ans:"Almohada",hint:"This common word for pillow comes from Arabic, like many 'al-' words in Spanish."},

{type:"match",pairs:[{trg:"certamen",src:"contest"},{trg:"ajedrez",src:"chess"},{trg:"arquetipo",src:"archetype"},{trg:"acrónimo",src:"acronym"},{trg:"cometa",src:"comet"}]},

{type:"fb",s:"El arte {1} valora más la idea que la forma física.",a:["conceptual"],opts:["conceptual","clasicista","cognitivo","académico"],hint:"Art based on concepts and ideas rather than visual beauty.",sSrc:"The {1} art values the idea more than the physical form."},

{type:"mc",q:"'El cometa' y 'la cometa' significan cosas diferentes. 'La cometa' es:",opts:["Un tipo de estrella","Un instrumento musical","Un cuerpo celeste","Un juguete que vuela"],ans:"Un juguete que vuela",hint:"The feminine form refers to something children fly on a string."}
]};

export default LESSON_7;
