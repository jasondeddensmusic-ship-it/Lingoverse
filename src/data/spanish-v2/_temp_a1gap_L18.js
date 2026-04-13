// L18: Society & Identity — Who we are together
const LESSON_18 = {
  id:"esv2_a1gap_l18", title:"La sociedad", icon:"\u{1F30D}", xp:15, board:true,
  steps:[
    {type:"intro", title:"La sociedad",
     desc:"Talk about society, identity, and the world around us. People, groups, and how we live together.",
     goals:["Learn 20 society and identity words","Describe social groups and roles","Talk about community and culture"]},

    {type:"teach", trg:"el africano", src:"the African (person)", pos:"noun", gender:"m",
     note:"Masculine noun. Also adjective: música africana = African music.\nEl/la africano/a.",
     example:"A: Mi vecino es africano.\nB: \u00bfDe qué país?",
     exampleSrc:"A: My neighbor is African.\nB: From which country?",
     funFact:"Spain's proximity to Africa (only 14 km at the Strait of Gibraltar) gives it deep historical and cultural ties to the continent."},

    {type:"teach", trg:"asiático", src:"Asian", pos:"adj", gender:null,
     note:"Adjective. Asiático/asiática.\nComida asiática = Asian food.",
     example:"A: Me encanta la comida asiática.\nB: A mí también, sobre todo la tailandesa.",
     exampleSrc:"A: I love Asian food.\nB: Me too, especially Thai.",
     funFact:"Spain has growing Asian communities, especially Chinese. 'Barrio chino' (Chinatown) exists in several Spanish cities."},

    {type:"teach", trg:"el alemán", src:"the German (person/language)", pos:"noun", gender:"m",
     note:"Masculine noun. Also adjective: coche alemán = German car.\nHablar alemán = to speak German.",
     example:"A: Mi profesor es alemán.\nB: \u00bfDe Berlín?\nA: No, de Múnich.",
     exampleSrc:"A: My teacher is German.\nB: From Berlin?\nA: No, from Munich.",
     funFact:"From medieval Latin 'alemannus', after the Alemanni tribe. German is the most studied second foreign language in Spanish schools."},

    {type:"teach", trg:"el antepasado", src:"the ancestor", pos:"noun", gender:"m",
     note:"Masculine noun. Nuestros antepasados = our ancestors.\nFrom ante (before) + pasado (past).",
     example:"A: Mis antepasados son de Galicia.\nB: Una tierra muy bonita.",
     exampleSrc:"A: My ancestors are from Galicia.\nB: A very beautiful land.",
     funFact:"Literally 'before-past', those who came before in the past. Spain's diverse ancestry includes Celtic, Roman, Visigoth, and Moorish roots."},

    {type:"teach", trg:"la autoridad", src:"authority", pos:"noun", gender:"f",
     note:"Feminine noun. Las autoridades locales = the local authorities.\nPerson or concept of power.",
     example:"A: Hay que respetar a las autoridades.\nB: Sí, es importante.",
     exampleSrc:"A: We must respect the authorities.\nB: Yes, it is important.",
     funFact:"From Latin 'auctoritas'. In Spain, the Guardia Civil and Policía Nacional are the main law enforcement authorities."},

    {type:"teach", trg:"el alcalde", src:"the mayor", pos:"noun", gender:"m",
     note:"Masculine noun. La alcaldesa = female mayor.\nFrom Arabic 'al-qadi' (the judge).",
     example:"A: El alcalde inauguró el nuevo parque.\nB: Ya era hora.",
     exampleSrc:"A: The mayor inaugurated the new park.\nB: It was about time.",
     funFact:"From Arabic 'al-qadi' (the judge). In medieval Spain, the mayor was the local judge. Another Arabic-origin word."},

    {type:"mc",
     q:"\u00bfDe qué idioma viene la palabra 'alcalde'?",
     opts:["Del árabe","Del latín","Del francés","Del alemán"],
     ans:"Del árabe",
     hint:"Like 'alquiler' and 'almacén', this word starts with 'al-', a strong indicator of its linguistic origin."},

    {type:"teach", trg:"la azteca", src:"Aztec", pos:"noun", gender:"f",
     note:"Noun/adjective. El/la azteca.\nCivilización azteca = Aztec civilization.",
     example:"A: Los aztecas construyeron Tenochtitlán.\nB: Hoy es Ciudad de México.",
     exampleSrc:"A: The Aztecs built Tenochtitlan.\nB: Today it is Mexico City.",
     funFact:"The Aztec Empire fell to Hernán Cortés in 1521. Many Spanish words come from Nahuatl: chocolate, tomate, aguacate."},

    {type:"teach", trg:"la acción", src:"action, deed", pos:"noun", gender:"f",
     note:"Feminine noun. Acciones buenas = good deeds.\nAlso: stock shares (acciones de bolsa).",
     example:"A: Sus acciones hablan más que sus palabras.\nB: Tienes razón.",
     exampleSrc:"A: His actions speak louder than his words.\nB: You are right.",
     funFact:"In the financial world, 'acciones' means stocks/shares. 'Comprar acciones' = to buy stocks."},

    {type:"teach", trg:"la antropología", src:"anthropology", pos:"noun", gender:"f",
     note:"Feminine noun. Anthropos (human) + logos (study).\nEstudiar antropología.",
     example:"A: Estudio antropología en la universidad.\nB: Qué interesante.",
     exampleSrc:"A: I study anthropology at the university.\nB: How interesting.",
     funFact:"From Greek 'anthropos' (human) + 'logos' (study). Spain's colonial history makes it an important center for anthropological research."},

    {type:"teach", trg:"la aldea", src:"the small village", pos:"noun", gender:"f",
     note:"Feminine noun. Smaller than a pueblo.\nAldea global = global village.",
     example:"A: Vivimos en una aldea muy pequeña.\nB: \u00bfCuántas personas hay?",
     exampleSrc:"A: We live in a very small village.\nB: How many people are there?",
     funFact:"'La aldea global' (the global village) is used in Spanish just as in English, coined by Marshall McLuhan in the 1960s."},

    {type:"fb",
     s:"El {1} del pueblo inauguró la nueva plaza ayer.",
     a:["alcalde"],
     opts:["alcalde","antepasado","africano","alemán"],
     hint:"This person is the head of local government, elected to lead a town or city.",
     sSrc:"The {1} of the town inaugurated the new square yesterday."},

    {type:"teach", trg:"el asilo", src:"asylum, nursing home", pos:"noun", gender:"m",
     note:"Masculine noun. Asilo político = political asylum.\nAsilo de ancianos = nursing home.",
     example:"A: Mi abuela vive en un asilo.\nB: \u00bfLa visitas mucho?",
     exampleSrc:"A: My grandmother lives in a nursing home.\nB: Do you visit her often?",
     funFact:"From Latin 'asylum' (sanctuary), from Greek 'asylon' (refuge). Has both the political and elder care meanings."},

    {type:"teach", trg:"el asalto", src:"the assault, robbery", pos:"noun", gender:"m",
     note:"Masculine noun. Also: round in boxing.\nAsalto a mano armada = armed robbery.",
     example:"A: Hubo un asalto en la tienda.\nB: \u00bfEstán todos bien?",
     exampleSrc:"A: There was a robbery at the store.\nB: Is everyone okay?",
     funFact:"From Italian 'assalto'. In boxing, 'asalto' means a round: 'el combate fue de doce asaltos' (the fight was twelve rounds)."},

    {type:"teach", trg:"el alemán", src:"German (language)", pos:"noun", gender:"m",
     note:"Masculine noun. Hablar alemán = to speak German.\nAprender alemán = to learn German.",
     example:"A: \u00bfHablas alemán?\nB: Un poco. Es difícil pero interesante.",
     exampleSrc:"A: Do you speak German?\nB: A little. It is difficult but interesting.",
     funFact:"German is the second most studied foreign language in Spain after English. Many Spaniards work in Germany."},

    {type:"teach", trg:"austríaco", src:"Austrian", pos:"adj", gender:null,
     note:"Adjective. Austríaco/austríaca.\nLos Habsburgo austríacos gobernaron España.",
     example:"A: Mi compañera de clase es austríaca.\nB: \u00bfDe Viena?",
     exampleSrc:"A: My classmate is Austrian.\nB: From Vienna?",
     funFact:"The Austrian Habsburg dynasty ruled Spain for nearly 200 years (1516-1700), deeply influencing Spanish culture and politics."},

    {type:"teach", trg:"belga", src:"Belgian", pos:"adj", gender:null,
     note:"Adjective. Same form for both genders: belga.\nChocolate belga = Belgian chocolate.",
     example:"A: El chocolate belga es delicioso.\nB: Sí, el mejor del mundo.",
     exampleSrc:"A: Belgian chocolate is delicious.\nB: Yes, the best in the world.",
     funFact:"Belgium ruled parts of the Spanish Netherlands for centuries. The adjective 'belga' does not change for gender, unlike most nationalities."},

    {type:"mc",
     q:"\u00bfQué palabra azteca usamos en español para la fruta verde con hueso grande?",
     opts:["aguacate","chocolate","tomate","aceituna"],
     ans:"aguacate",
     hint:"This fruit, used to make guacamole, gets its Spanish name from the Nahuatl language of the Aztecs."},

    {type:"teach", trg:"boliviano", src:"Bolivian", pos:"adj", gender:null,
     note:"Adjective. Boliviano/boliviana.\nNamed after Simón Bolívar, the Liberator.",
     example:"A: La comida boliviana es muy sabrosa.\nB: \u00bfHas probado la salteña?",
     exampleSrc:"A: Bolivian food is very tasty.\nB: Have you tried the salteña?",
     funFact:"Bolivia is named after Simón Bolívar, who liberated several South American countries from Spanish colonial rule."},

    {type:"teach", trg:"la autorización", src:"authorization, permit", pos:"noun", gender:"f",
     note:"Feminine noun. Autorización de trabajo = work permit.\nDar autorización = to give permission.",
     example:"A: Necesito una autorización para trabajar aquí.\nB: Ve al ayuntamiento.",
     exampleSrc:"A: I need a work permit.\nB: Go to the city hall.",
     funFact:"Bureaucratic Spanish loves 'autorización'. Getting one often involves waiting in line at government offices, a universal experience."},

    {type:"match", pairs:[
      {trg:"alcalde", src:"mayor"},
      {trg:"antepasado", src:"ancestor"},
      {trg:"aldea", src:"village"},
      {trg:"alemán", src:"German"},
      {trg:"belga", src:"Belgian"}
    ]},

    {type:"fb",
     s:"Nuestros {1} vinieron de un pequeño pueblo en Galicia hace cien años.",
     a:["antepasados"],
     opts:["antepasados","alcaldes","africanos","austríacos"],
     hint:"These are the people who came before us in our family line, our forefathers.",
     sSrc:"Our {1} came from a small town in Galicia a hundred years ago."},
  ]
};
export default LESSON_18;
