// Batch 7. Unit 03 extra lesson. La famiglia: Pets & Animals
const BATCH7_L1 = {id:"itv2_u03l_b7_1", title:"Gli animali domestici", icon:"\u{1F436}", xp:15, board:true, steps:[
{type:"intro", title:"Gli animali domestici",
 desc:"Learn vocabulary for common pets and animals, and talk about taking care of them.",
 goals:["Name common pets and farm animals","Describe what animals do","Talk about caring for a pet"]},

{type:"teach", trg:"il cane", src:"the dog", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i cani.\nFeminine: la cagna (but 'il cane' for both in general).",
 example:"A: Hai un cane?\nB: Si, un labrador. Si chiama Luna.",
 exampleSrc:"A: Do you have a dog?\nB: Yes, a labrador. Her name is Luna.",
 funFact:"Italy has about 7 million pet dogs. Famous Italian breeds include the Cane Corso, Lagotto Romagnolo (truffle hunter), and Spinone Italiano."},

{type:"teach", trg:"il gatto", src:"the cat", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i gatti.\nFeminine: la gatta.",
 example:"A: Il gatto dorme tutto il giorno.\nB: Tipico dei gatti!",
 exampleSrc:"A: The cat sleeps all day.\nB: Typical of cats!",
 funFact:"Rome's famous 'colonia felina' at Largo di Torre Argentina shelters hundreds of stray cats among ancient Roman ruins. Cats are protected by Italian law."},

{type:"teach", trg:"l'uccello", src:"the bird", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli uccelli.\n'Uccellino' = little bird (affectionate).",
 example:"A: Senti gli uccelli cantare?\nB: Si, e primavera!",
 exampleSrc:"A: Do you hear the birds singing?\nB: Yes, it is spring!",
 funFact:"Italy is a major stopover for migratory birds. Bird watching ('birdwatching' in Italian too) is popular in the Po Delta and Sardinian wetlands."},

{type:"teach", trg:"il pesce", src:"the fish", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i pesci.\nSame word for the animal and the food.",
 example:"A: Abbiamo due pesci rossi.\nB: Come si chiamano?",
 exampleSrc:"A: We have two goldfish.\nB: What are their names?",
 funFact:"The 'pesce rosso' (goldfish) is Italy's most popular pet fish. 'Pesce d'aprile!' is what Italians shout on April Fools' Day, like 'April fish!'"},

{type:"teach", trg:"il coniglio", src:"the rabbit", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i conigli.\nAlso a food: 'coniglio arrosto' = roasted rabbit.",
 example:"A: Il coniglio ha mangiato le carote.\nB: Adora le carote!",
 exampleSrc:"A: The rabbit ate the carrots.\nB: It loves carrots!",
 funFact:"Rabbit is a traditional Italian dish, especially in Liguria (coniglio alla ligure). Keeping rabbits as pets is also popular, creating an amusing cultural contrast."},

{type:"teach", trg:"il cavallo", src:"the horse", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i cavalli.\nFeminine: la cavalla (mare).",
 example:"A: Sai andare a cavallo?\nB: Si, faccio equitazione da bambino.",
 exampleSrc:"A: Can you ride a horse?\nB: Yes, I have been riding since I was a child.",
 funFact:"The famous Palio di Siena is a bareback horse race held twice a year in Siena's main square. It dates back to the 17th century and is a fierce local tradition."},

{type:"teach", trg:"la mucca", src:"the cow", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le mucche.\nThe masculine form 'il toro' means bull.",
 example:"A: Guarda le mucche nel prato!\nB: Producono il latte per il parmigiano.",
 exampleSrc:"A: Look at the cows in the meadow!\nB: They produce the milk for Parmesan cheese.",
 funFact:"Italian Parmigiano-Reggiano requires milk from specific cows in Emilia-Romagna. Each wheel takes 600 liters of milk and ages for at least 12 months."},

{type:"teach", trg:"la pecora", src:"the sheep", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le pecore.\n'La pecora nera' = the black sheep.",
 example:"A: Ci sono molte pecore in Sardegna.\nB: Si, più pecore che persone!",
 exampleSrc:"A: There are many sheep in Sardinia.\nB: Yes, more sheep than people!",
 funFact:"Sardinia has more sheep than people (about 3 million sheep for 1.6 million humans). Pecorino cheese is made from sheep's milk and is a staple of Italian cuisine."},

{type:"teach", trg:"la gallina", src:"the hen / chicken", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le galline.\nMasculine: il gallo (rooster).",
 example:"A: Le galline hanno fatto sei uova.\nB: Perfetto per la frittata!",
 exampleSrc:"A: The hens laid six eggs.\nB: Perfect for an omelette!",
 funFact:"'Gallina vecchia fa buon brodo' (an old hen makes good broth) is a beloved Italian proverb meaning that experience brings quality. Often used to compliment older people."},

{type:"teach", trg:"dare da mangiare", src:"to feed", pos:"verb", gender:null,
 note:"Verb phrase. Literally: to give to eat.\n'Dare da mangiare al cane' = to feed the dog.",
 example:"A: Hai dato da mangiare al gatto?\nB: Si, ha mangiato tutto!",
 exampleSrc:"A: Did you feed the cat?\nB: Yes, it ate everything!",
 funFact:"Italians express 'to feed' as 'dare da mangiare' (give something to eat). There is no single verb for it. This reflects the Italian focus on the act of eating itself."},

{type:"teach", trg:"il veterinario", src:"the veterinarian", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: la veterinaria.\nShortened to 'il vet' informally.",
 example:"A: Il cane sta male, porto dal veterinario.\nB: Spero che non sia niente di grave.",
 exampleSrc:"A: The dog is sick, I am taking it to the vet.\nB: I hope it is nothing serious.",
 funFact:"Italy has one of the highest densities of veterinarians in Europe. There are veterinary faculties in Milan, Turin, Bologna, Naples, and other major cities."},

{type:"teach", trg:"la passeggiata", src:"the walk / stroll", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le passeggiate.\n'Portare a fare una passeggiata' = to take for a walk.",
 example:"A: Porto il cane a fare una passeggiata.\nB: Vengo anch'io!",
 exampleSrc:"A: I am taking the dog for a walk.\nB: I am coming too!",
 funFact:"The 'passeggiata' is an Italian ritual: an evening stroll through town to see and be seen. Dogs are the perfect excuse for this daily tradition."},

{type:"teach", trg:"la zampa", src:"the paw", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le zampe.\nUsed for animal feet/paws/hooves.",
 example:"A: Il gatto mi ha dato la zampa!\nB: Che carino!",
 exampleSrc:"A: The cat gave me its paw!\nB: How cute!",
 funFact:"'Zampa di gallina' (chicken foot) means illegible handwriting. If someone says your writing is 'a zampe di gallina,' they cannot read it at all."},

{type:"teach", trg:"la coda", src:"the tail", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le code.\nAlso means 'queue/line.'",
 example:"A: Il cane muove la coda.\nB: E contento di vederti!",
 exampleSrc:"A: The dog is wagging its tail.\nB: It is happy to see you!",
 funFact:"'Coda' has many meanings: tail, queue, line, ponytail (coda di cavallo), and the ending section of a musical piece. All from Latin 'cauda.'"},

{type:"mc", q:"Come si dice 'cat' in italiano?",
 opts:["il gatto","il cane","il coniglio","il pesce"],
 ans:"il gatto",
 hint:"The most independent pet. Famous for sleeping all day and ruling the house."},

{type:"fb", s:"Hai dato da {1} al cane?", a:["mangiare"],
 opts:["mangiare","bere","dormire","giocare"],
 hint:"The verb in the phrase 'dare da...' meaning to feed. Literally 'to give to eat.'",
 sSrc:"Did you {1} the dog?"},

{type:"match", pairs:[
 {trg:"il cane", src:"dog"},
 {trg:"il cavallo", src:"horse"},
 {trg:"la mucca", src:"cow"},
 {trg:"la pecora", src:"sheep"}
,{trg:"la zampa",src:"the paw"}]},

{type:"mc", q:"Che cos'e il Palio di Siena?",
 opts:["A sheep market","A horse race","A dog show","A cat festival"],
 ans:"A horse race",
 hint:"A famous competition held in Siena's main square, using a specific animal."},

{type:"fb", s:"Il gatto muove la {1} quando e contento.", a:["coda"],
 opts:["coda","zampa","gallina","pecora"],
 hint:"The long flexible part at the back of an animal. Also means 'queue.'",
 sSrc:"The cat moves its {1} when it is happy."},

{type:"mc", q:"Dove porti un animale malato?",
 opts:["In farmacia","All'ospedale","Dal veterinario","Dal dottore"],
 ans:"Dal veterinario",
 hint:"The doctor specialized in treating animals, not humans."},

{type:"fb", s:"Porto il cane a fare una {1} al parco.", a:["passeggiata"],
 opts:["passeggiata","zampa","coda","gallina"],
 hint:"An Italian ritual: a stroll, often in the evening. Dogs love them too.",
 sSrc:"I am taking the dog for a {1} in the park."},

{type:"match", pairs:[
 {trg:"l'uccello", src:"bird"},
 {trg:"il pesce", src:"fish"},
 {trg:"la gallina", src:"hen"},
 {trg:"il coniglio", src:"rabbit"}
]}
]};
export default BATCH7_L1;
