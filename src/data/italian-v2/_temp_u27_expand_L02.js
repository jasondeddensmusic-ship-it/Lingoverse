// Unit 27 Expansion. Lesson 5: Le grandi scoperte
const LESSON_5 = {
  id:"itv2_u27l5", title:"Le grandi scoperte", icon:"🌟", xp:15, board:true,
  steps:[
    {type:"intro", title:"Le grandi scoperte",
     desc:"Learn to discuss major scientific discoveries, inventions, and their impact on society. Celebrate Italy's rich tradition of scientific achievement while building advanced vocabulary.",
     goals:["Describe landmark scientific discoveries","Discuss the impact of inventions on society","Express opinions about science and progress"]},

    {type:"teach", trg:"l'invenzione", src:"the invention", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le invenzioni.\n'Inventare' (verb) = to invent. 'Inventore/inventrice' = inventor.",
     example:"A: L'invenzione della radio ha rivoluzionato le comunicazioni.\nB: E merito dell'italiano Guglielmo Marconi.",
     exampleSrc:"A: The invention of the radio revolutionized communications.\nB: It is thanks to the Italian Guglielmo Marconi.",
     funFact:"Italy claims numerous landmark inventions: the battery (Volta), the telephone (Meucci, debated), the radio (Marconi), eyeglasses (Venetian craftsmen), and the piano (Cristofori). Each 'invenzione' reflects Italy's centuries-long culture of innovation."},

    {type:"teach", trg:"la formula", src:"the formula", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le formule.\n'Formula chimica' = chemical formula. 'Formula matematica' = mathematical formula.",
     example:"A: La formula di Einstein, E uguale mc quadrato, e celebre.\nB: Ha cambiato la nostra comprensione dell'universo.",
     exampleSrc:"A: Einstein's formula, E equals mc squared, is famous.\nB: It changed our understanding of the universe.",
     funFact:"Italian mathematics has given the world fundamental formulas. Fibonacci's sequence, Cardano's formula for cubic equations, and Galileo's equations of motion all originated from Italian mathematicians working centuries ahead of their time."},

    {type:"teach", trg:"la particella", src:"the particle", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le particelle.\n'Particella subatomica' = subatomic particle.\n'Fisica delle particelle' = particle physics.",
     example:"A: I fisici italiani studiano le particelle al CERN.\nB: L'Italia e uno dei principali contribuenti al laboratorio.",
     exampleSrc:"A: Italian physicists study particles at CERN.\nB: Italy is one of the main contributors to the laboratory.",
     funFact:"The 'fermione' (fermion) is named after Enrico Fermi, the Italian physicist who built the first nuclear reactor in Chicago in 1942. His colleagues called him 'il papa della fisica' (the pope of physics) for his authoritative grasp of all branches of the discipline."},

    {type:"teach", trg:"il vaccino", src:"the vaccine", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i vaccini.\n'Vaccinazione' = vaccination. 'Vaccinare' (verb) = to vaccinate.",
     example:"A: Il vaccino ha salvato milioni di vite.\nB: E una delle piu grandi conquiste della medicina.",
     exampleSrc:"A: The vaccine saved millions of lives.\nB: It is one of the greatest achievements of medicine.",
     funFact:"The word 'vaccino' comes from 'vacca' (cow). Edward Jenner used cowpox to create immunity against smallpox in 1796. Italian scientist Lazzaro Spallanzani's work on microorganisms laid important groundwork for understanding infectious diseases."},

    {type:"teach", trg:"il microscopio", src:"the microscope", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i microscopi.\n'Microscopio elettronico' = electron microscope.\n'Osservare al microscopio' = to observe under a microscope.",
     example:"A: Il microscopio elettronico mostra dettagli incredibili.\nB: Possiamo vedere strutture a livello atomico.",
     exampleSrc:"A: The electron microscope shows incredible details.\nB: We can see structures at the atomic level.",
     funFact:"Galileo improved an early compound microscope in 1625. His colleague Federico Cesi coined the name 'microscopio' from Greek 'mikros' (small) + 'skopein' (to look at). The Accademia dei Lincei, which Cesi founded, was the first scientific academy."},

    {type:"mc",
     q:"Da dove viene la parola 'vaccino'?",
     opts:["Dalla parola 'vacca' (cow), perche si uso il vaiolo bovino","Da un termine latino per 'protezione'","Dal nome della citta dove fu inventato","Dal nome di un medico italiano"],
     ans:"Dalla parola 'vacca' (cow), perche si uso il vaiolo bovino",
     hint:"The first immunization used a disease from a farm animal to create protection against a deadlier human disease. The animal's name gave us the word."},

    {type:"teach", trg:"il satellite", src:"the satellite", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i satelliti.\n'Satellite artificiale' = artificial satellite.\n'Immagini satellitari' = satellite images.",
     example:"A: L'Italia ha un'importante industria aerospaziale.\nB: L'ASI gestisce diversi satelliti in orbita.",
     exampleSrc:"A: Italy has an important aerospace industry.\nB: The Italian Space Agency manages several satellites in orbit.",
     funFact:"Italy's ASI (Agenzia Spaziale Italiana) is the third-largest national space agency in Europe. Italian astronauts have served on the International Space Station, and Italian companies build key components for European space missions."},

    {type:"teach", trg:"la cellula staminale", src:"the stem cell", pos:"noun", gender:"f",
     note:"Feminine compound noun. Plural: le cellule staminali.\n'Staminale' from 'stame' (thread/fiber), because they can develop into many types.",
     example:"A: Le cellule staminali potrebbero curare molte malattie.\nB: La ricerca e promettente ma ancora in fase iniziale.",
     exampleSrc:"A: Stem cells could cure many diseases.\nB: The research is promising but still in early stages.",
     funFact:"Stem cell research is politically sensitive in Italy. Catholic Church influence has led to strict regulations on embryonic stem cell research. Italian scientists working in this field have sometimes relocated abroad to continue their work."},

    {type:"fb",
     s:"Guglielmo Marconi e noto per l'{1} della radio.",
     a:["invenzione"],
     opts:["invenzione","formula","scoperta","teoria"],
     hint:"The act of creating something entirely new that did not exist before. Not just finding something, but making something original.",
     sSrc:"Guglielmo Marconi is known for the {1} of the radio."},

    {type:"teach", trg:"l'intelligenza artificiale", src:"the artificial intelligence", pos:"noun", gender:"f",
     note:"Feminine compound noun. Abbreviated: IA (Italian) or AI (English).\n'Apprendimento automatico' = machine learning.",
     example:"A: L'intelligenza artificiale sta trasformando ogni settore.\nB: Dall'industria alla medicina, le applicazioni sono infinite.",
     exampleSrc:"A: Artificial intelligence is transforming every sector.\nB: From industry to medicine, the applications are endless.",
     funFact:"Italian universities are increasingly investing in AI research. The 'Strategia Italiana per l'Intelligenza Artificiale' was launched in 2021 to position Italy in the global AI race. Turin and Milan are emerging as Italian AI hubs."},

    {type:"teach", trg:"la clonazione", src:"the cloning", pos:"noun", gender:"f",
     note:"Feminine noun. 'Clonazione terapeutica' = therapeutic cloning.\n'Clonare' (verb) = to clone. 'Clone' (noun) = clone.",
     example:"A: La clonazione animale e possibile dagli anni Novanta.\nB: Ma la clonazione umana resta vietata.",
     exampleSrc:"A: Animal cloning has been possible since the 1990s.\nB: But human cloning remains banned.",
     funFact:"Italy banned human cloning and severely restricted animal cloning research. The ethical debate in Italy is deeply influenced by Catholic moral teaching, creating a more cautious approach to biotechnology than in many other Western countries."},

    {type:"mc",
     q:"Che cos'e l'ASI?",
     opts:["L'Accademia Scientifica Italiana","L'Agenzia Spaziale Italiana","L'Associazione Scienziati Indipendenti","L'Archivio Storico delle Invenzioni"],
     ans:"L'Agenzia Spaziale Italiana",
     hint:"Italy's national organization for space exploration and satellite technology. The third largest such body in Europe."},

    {type:"match", pairs:[
      {trg:"invenzione", src:"invention"},
      {trg:"particella", src:"particle"},
      {trg:"vaccino", src:"vaccine"},
      {trg:"satellite", src:"satellite"},
      {trg:"intelligenza artificiale", src:"artificial intelligence"}
    ]},

    {type:"fb",
     s:"Le {1} staminali potrebbero rivoluzionare la medicina rigenerativa.",
     a:["cellule"],
     opts:["cellule","particelle","formule","invenzioni"],
     hint:"Basic biological units that can develop into many different types. Their unique ability to transform makes them promising for future treatments.",
     sSrc:"Stem {1} could revolutionize regenerative medicine."},

    {type:"mc",
     q:"Perche la ricerca sulle cellule staminali embrionali e limitata in Italia?",
     opts:["Perche i pazienti non vogliono queste terapie","Perche non ci sono scienziati qualificati","Per l'influenza della Chiesa Cattolica sulle politiche di bioetica","Perche la tecnologia non e disponibile"],
     ans:"Per l'influenza della Chiesa Cattolica sulle politiche di bioetica",
     hint:"Religious moral teaching has a strong influence on Italian bioethics policy. Restrictions on certain types of research reflect the Church's position on the sanctity of human embryos."}
  ]
};
export default LESSON_5;
