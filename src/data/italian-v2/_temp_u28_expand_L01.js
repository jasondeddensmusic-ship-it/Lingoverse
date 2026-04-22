// Unit 28 Expansion. Lesson 4: I movimenti letterari
const LESSON_4 = {
  id:"itv2_u28l4", title:"I movimenti letterari", icon:"🎨", xp:15, board:true,
  steps:[
    {type:"intro", title:"I movimenti letterari",
     desc:"Learn about major Italian literary movements, their key ideas, and their lasting impact. Develop vocabulary to discuss literary history with depth and nuance.",
     goals:["Name and describe major Italian literary movements","Discuss the relationship between literature and history","Express opinions about literary styles and aesthetics"]},

    {type:"teach", trg:"il realismo", src:"the realism", pos:"noun", gender:"m",
     note:"Masculine noun. A literary movement depicting life as it truly is.\n'Realista' (noun/adj) = realist/realistic.",
     example:"A: Il realismo italiano si chiama 'verismo.'\nB: Giovanni Verga ne e il massimo rappresentante.",
     exampleSrc:"A: Italian realism is called 'verismo.'\nB: Giovanni Verga is its greatest representative.",
     funFact:"Italian 'verismo' (from 'vero,' true) focused on the lives of poor Sicilians and southern Italians. Verga's 'I Malavoglia' portrayed a fishing family's struggles with such honesty that it scandalized polite society."},

    {type:"teach", trg:"il romanticismo", src:"the Romanticism", pos:"noun", gender:"m",
     note:"Masculine noun. The early 19th-century movement emphasizing emotion and individualism.\n'Romantico/a' (adj) = romantic.",
     example:"A: Il romanticismo italiano e legato al Risorgimento.\nB: Manzoni e Leopardi ne sono i pilastri.",
     exampleSrc:"A: Italian Romanticism is linked to the Risorgimento.\nB: Manzoni and Leopardi are its pillars.",
     funFact:"Italian Romanticism was deeply political. Unlike the German and English varieties focused on nature and emotion, Italian Romanticism was intertwined with the fight for national unity and independence from Austria."},

    {type:"teach", trg:"il neorealismo", src:"the Neorealism", pos:"noun", gender:"m",
     note:"Masculine noun. Post-WWII movement in literature and cinema.\n'Neorealista' (adj) = neorealist.",
     example:"A: Il neorealismo italiano ha influenzato il cinema mondiale.\nB: Registi come De Sica e Rossellini hanno cambiato tutto.",
     exampleSrc:"A: Italian Neorealism influenced world cinema.\nB: Directors like De Sica and Rossellini changed everything.",
     funFact:"Neorealism was born from the rubble of WWII. Writers like Italo Calvino, Cesare Pavese, and Primo Levi depicted the war, resistance, and post-war poverty with raw honesty. In cinema, 'Ladri di biciclette' became its masterpiece."},

    {type:"teach", trg:"l'umanesimo", src:"the Humanism", pos:"noun", gender:"m",
     note:"Masculine noun. The Renaissance intellectual movement centering on human potential.\n'Umanista' = humanist.",
     example:"A: L'umanesimo italiano del Quattrocento riscopri i classici greci e latini.\nB: Firenze fu la culla del movimento.",
     exampleSrc:"A: Italian Humanism of the fifteenth century rediscovered Greek and Latin classics.\nB: Florence was the cradle of the movement.",
     funFact:"Italian Humanism, centered in Florence under the Medici, laid the foundations for the entire European Renaissance. Petrarch is often called the 'father of Humanism' for his devotion to classical texts and his belief in human cultural achievement."},

    {type:"teach", trg:"il futurismo", src:"the Futurism", pos:"noun", gender:"m",
     note:"Masculine noun. Early 20th-century avant-garde movement celebrating speed and modernity.\n'Futurista' (noun/adj) = Futurist.",
     example:"A: Il futurismo fu fondato da Filippo Tommaso Marinetti nel 1909.\nB: Esaltava la velocita, le macchine e la modernita.",
     exampleSrc:"A: Futurism was founded by Filippo Tommaso Marinetti in 1909.\nB: It exalted speed, machines, and modernity.",
     funFact:"Marinetti published his Futurist Manifesto on the front page of Le Figaro in Paris. Futurism glorified speed, technology, and even war. Its controversial embrace of fascism later tarnished the movement's legacy, despite its revolutionary artistic innovations."},

    {type:"mc",
     q:"Come si chiama la corrente letteraria italiana che descrive la vita reale dei poveri del Sud?",
     opts:["Il verismo","Il romanticismo","L'umanesimo","Il futurismo"],
     ans:"Il verismo",
     hint:"From the Italian word for 'true.' This movement depicted the harsh realities of life in Sicily and southern Italy, with Giovanni Verga as its master."},

    {type:"teach", trg:"l'ermetismo", src:"the Hermeticism (literary)", pos:"noun", gender:"m",
     note:"Masculine noun. A 20th-century Italian poetic movement known for dense, obscure style.\n'Ermetico/a' (adj) = hermetic, obscure.",
     example:"A: L'ermetismo cercava la purezza della parola poetica.\nB: Giuseppe Ungaretti ne e il fondatore.",
     exampleSrc:"A: Hermeticism sought the purity of the poetic word.\nB: Giuseppe Ungaretti is its founder.",
     funFact:"Ungaretti's poem 'Mattina' consists of just two words: 'M'illumino d'immenso' (I fill myself with the light of immensity). This extreme condensation captures Hermeticism's quest to reduce poetry to its absolute essence."},

    {type:"teach", trg:"l'avanguardia", src:"the avant-garde", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le avanguardie.\nArtistic movements that push boundaries and experiment.\n'Di avanguardia' = avant-garde, cutting-edge.",
     example:"A: Le avanguardie del Novecento hanno rotto tutte le regole.\nB: Dalla poesia alla pittura, nulla fu piu lo stesso.",
     exampleSrc:"A: The avant-garde movements of the twentieth century broke all the rules.\nB: From poetry to painting, nothing was the same again.",
     funFact:"Italy's 'Neoavanguardia' of the 1960s, the 'Gruppo 63,' included Umberto Eco among its founders. They challenged literary conventions just as Italian society was transforming through industrialization and the economic miracle."},

    {type:"fb",
     s:"Il {1} italiano e strettamente legato alla lotta per l'unita nazionale.",
     a:["romanticismo"],
     opts:["romanticismo","futurismo","ermetismo","neorealismo"],
     hint:"The early 19th-century literary movement that emphasized emotion and individual feeling. In Italy, it was deeply connected to the political struggle for independence.",
     sSrc:"Italian {1} is closely linked to the fight for national unity."},

    {type:"teach", trg:"il decadentismo", src:"the Decadentism", pos:"noun", gender:"m",
     note:"Masculine noun. Late 19th-century movement exploring beauty, sensuality, and moral ambiguity.\n'Decadente' (adj) = decadent.",
     example:"A: Gabriele D'Annunzio e il maggiore scrittore decadente italiano.\nB: La sua prosa e ricca e sontuosa.",
     exampleSrc:"A: Gabriele D'Annunzio is the greatest Italian Decadent writer.\nB: His prose is rich and sumptuous.",
     funFact:"D'Annunzio lived his decadent aesthetics: luxury, scandal, and spectacle. He occupied the city of Fiume with a private army in 1919 and created a short-lived state. Life imitating art in the most Italian way possible."},

    {type:"teach", trg:"il manifesto", src:"the manifesto", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i manifesti.\nA public declaration of principles. 'Manifesto letterario' = literary manifesto.",
     example:"A: Ogni movimento letterario aveva il suo manifesto.\nB: Quello futurista e il piu famoso.",
     exampleSrc:"A: Every literary movement had its manifesto.\nB: The Futurist one is the most famous.",
     funFact:"The word 'manifesto' is one of Italian's gifts to world languages. From Latin 'manifestus' (clear, evident), it became the standard term for public declarations of intent. Marx and Engels' Communist Manifesto borrowed the Italian word."},

    {type:"mc",
     q:"Chi fondo il Futurismo e quando?",
     opts:["Gabriele D'Annunzio nel 1890","Filippo Tommaso Marinetti nel 1909","Giuseppe Ungaretti nel 1915","Italo Calvino nel 1950"],
     ans:"Filippo Tommaso Marinetti nel 1909",
     hint:"The founder published his manifesto in a French newspaper. The year was just before WWI, and the movement celebrated speed and modern technology."},

    {type:"match", pairs:[
      {trg:"verismo", src:"Italian realism"},
      {trg:"romanticismo", src:"Romanticism"},
      {trg:"neorealismo", src:"Neorealism"},
      {trg:"futurismo", src:"Futurism"},
      {trg:"ermetismo", src:"Hermeticism"}
    ]},

    {type:"fb",
     s:"Le {1} del Novecento hanno rotto le regole tradizionali dell'arte e della letteratura.",
     a:["avanguardie"],
     opts:["avanguardie","formule","clausole","manifestazioni"],
     hint:"Experimental artistic movements that deliberately push beyond established conventions. Always ahead of their time.",
     sSrc:"The twentieth-century {1} broke the traditional rules of art and literature."},

    {type:"mc",
     q:"Quale movimento letterario italiano nacque dalle macerie della Seconda Guerra Mondiale?",
     opts:["Il verismo","L'ermetismo","Il neorealismo","Il futurismo"],
     ans:"Il neorealismo",
     hint:"Born from the ruins of WWII, this movement depicted war, resistance, and postwar poverty with unflinching honesty. It transformed both Italian literature and cinema."}
  ]
};
export default LESSON_4;
