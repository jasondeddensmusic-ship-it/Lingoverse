// Italian V2 Unit 06. In citta (In the City) (A1.2)
import BATCH8_L1 from './_batch8_u06_L01.js';
import BATCH7_L1 from './_batch7_u06_L01.js';
import BATCH6_L1 from './_batch6_u06_L01.js';
import BATCH4_L02 from './_batch4_u06_L02.js';
import BATCH4_L01 from './_batch4_u06_L01.js';
import BATCH2_L02 from './_batch2_u06_L02.js';
import BATCH2_L01 from './_batch2_u06_L01.js';
// CILS/CELI A1 aligned. Places, directions, transport.
import EXP_06_L1 from './_temp_u06_expand_L01.js';import EXP_06_L2 from './_temp_u06_expand_L02.js';import EXP_06_L3 from './_temp_u06_expand_L03.js';

const UNIT_06 = {
  n:6, lang:"it", srcLang:"en", track:"v2",
  title:"In citta", sub:"In the City",
  icon:"\ud83c\udfd9\ufe0f", level:"A1.2", color:"#7B5EE8",
  lessons:[
    {id:"itv2_u6l1", title:"I luoghi", icon:"\ud83d\udccd", xp:15, board:true, steps:[
      {type:"intro", title:"I luoghi",
       desc:"Learn the Italian names for important places in a city that you will need in daily life.",
       goals:["Name common city locations","Use the correct article with each place","Ask where places are"]},

      {type:"teach", trg:"la stazione", src:"the station", pos:"noun", gender:"f",
       note:"Feminine. Usually means train station ('stazione ferroviaria').\nFrom Latin 'statio' (standing place).",
       example:"A: Scusi, dov'e la stazione?\nB: E in fondo alla strada.",
       exampleSrc:"A: Excuse me, where is the station?\nB: It's at the end of the road.",
       funFact:"From Latin 'statio' (a place for standing/stopping), from 'stare' (to stand). English 'station' is the same word. Roman 'stationes' were military posts along roads where soldiers would stop."},

      {type:"teach", trg:"l'ospedale", src:"the hospital", pos:"noun", gender:"m",
       note:"Masculine despite ending in -e. Uses l' before vowel.\nFrom Latin 'hospitale' (guest house).",
       example:"A: Dov'e l'ospedale?\nB: E vicino alla stazione.",
       exampleSrc:"A: Where is the hospital?\nB: It is near the station.",
       funFact:"Latin 'hospitale' originally meant 'a place for guests.' The same root gave English 'hospital,' 'hotel,' 'hostel,' and 'hospitality.' All these words are about welcoming strangers."},

      {type:"teach", trg:"la farmacia", src:"the pharmacy", pos:"noun", gender:"f",
       note:"Feminine. From Greek 'pharmakon' (drug, remedy).\nLook for the green cross sign in Italy.",
       example:"A: Ho bisogno di una farmacia.\nB: Ce n'e una in piazza.",
       exampleSrc:"A: I need a pharmacy.\nB: There is one in the square.",
       funFact:"Italian pharmacies are marked by a green cross and are highly trusted. Pharmacists in Italy can give medical advice and sell many medications without a prescription. They serve as first-line healthcare."},

      {type:"teach", trg:"il supermercato", src:"the supermarket", pos:"noun", gender:"m",
       note:"Masculine. Compound word: super + mercato (market).\nFrom Latin 'mercatus' (trade).",
       example:"A: Devo andare al supermercato.\nB: Cosa devi comprare?",
       exampleSrc:"A: I need to go to the supermarket.\nB: What do you need to buy?",
       funFact:"'Mercato' comes from Latin 'mercatus' (trade), which also gave English 'market,' 'merchant,' and 'commerce.' The god Mercury was the Roman patron of trade and merchants."},

      {type:"teach", trg:"il ristorante", src:"the restaurant", pos:"noun", gender:"m",
       note:"Masculine. From French 'restaurant,' originally meaning 'restoring.'\nIn Italy, more formal than a 'trattoria.'",
       example:"A: Andiamo al ristorante stasera?\nB: Si, ottima idea!",
       exampleSrc:"A: Shall we go to the restaurant tonight?\nB: Yes, great idea!",
       funFact:"The hierarchy of Italian eating places: ristorante (formal), trattoria (casual, family-run), osteria (originally a wine bar with food), bar (coffee and light snacks). Each has its own character and price range."},

      {type:"teach", trg:"il museo", src:"the museum", pos:"noun", gender:"m",
       note:"Masculine. From Greek 'mouseion' (temple of the Muses).\nPlural: i musei.",
       example:"A: Vuoi visitare il museo?\nB: Si, voglio vedere la mostra.",
       exampleSrc:"A: Do you want to visit the museum?\nB: Yes, I want to see the exhibition.",
       funFact:"From Greek 'mouseion,' dedicated to the nine Muses who inspired arts and sciences. Italy has more UNESCO World Heritage sites than any other country. The Vatican Museums alone hold 70,000 works."},

      {type:"teach", trg:"il parco", src:"the park", pos:"noun", gender:"m",
       note:"Masculine. From medieval Latin 'parricus' (enclosure).\nPlural: i parchi.",
       example:"A: Andiamo al parco?\nB: Si, fa bel tempo oggi!",
       exampleSrc:"A: Shall we go to the park?\nB: Yes, the weather is nice today!",
       funFact:"Italian cities are famous for their public gardens. Villa Borghese in Rome, Parco Sempione in Milan, and Boboli Gardens in Florence are among Europe's most beautiful urban parks."},

      {type:"teach", trg:"la chiesa", src:"the church", pos:"noun", gender:"f",
       note:"Feminine. From Greek 'ekklesia' (assembly).\nItaly has over 100,000 churches.",
       example:"A: La chiesa e bella?\nB: Si, e molto antica.",
       exampleSrc:"A: Is the church beautiful?\nB: Yes, it is very old.",
       funFact:"From Greek 'ekklesia' (assembly of citizens). Italian churches are often architectural masterpieces open to visitors for free. Even small villages typically have a church that is centuries old."},

      // Quiz steps
      {type:"mc", q:"Come si dice 'hospital' in italiano?",
       opts:["L'ospedale","La farmacia","La stazione","Il museo"],
       ans:"L'ospedale",
       hint:"From Latin 'hospitale' (guest house). The same root gave English 'hotel' and 'hospitality.'"},

      {type:"fb", s:"Scusi, dov'e la {1}?",
       a:["stazione"],
       opts:["stazione","museo","parco","ristorante"],
       hint:"You need to catch a train. This is the place where trains stop and depart.",
       sSrc:"Excuse me, where is the {1}?"},

      {type:"match", pairs:[
        {trg:"la stazione", src:"the station"},
        {trg:"la farmacia", src:"the pharmacy"},
        {trg:"il ristorante", src:"the restaurant"},
        {trg:"il museo", src:"the museum"},
        {trg:"la chiesa", src:"the church"}
      ]},

      {type:"mc", q:"Which of these is masculine?",
       opts:["La farmacia","Il parco","La stazione","La chiesa"],
       ans:"Il parco",
       hint:"Check the articles. Three use 'la' (feminine). One uses 'il' (masculine), ending in -o."},

      {type:"fb", s:"Devo andare al {1}.",
       a:["supermercato"],
       opts:["supermercato","farmacia","stazione","chiesa"],
       hint:"You need to buy groceries. This is a large store where you can find food and household items.",
       sSrc:"I need to go to the {1}."},

      {type:"mc", q:"What does 'la farmacia' mean?",
       opts:["The factory","The farm","The pharmacy","The restaurant"],
       ans:"The pharmacy",
       hint:"From Greek 'pharmakon' (remedy). Look for the green cross sign in Italian streets."},

      {type:"fb", s:"Andiamo al {1} stasera?",
       a:["ristorante"],
       opts:["ristorante","supermercato","ospedale","parco"],
       hint:"You want to eat dinner out. This is a formal place where meals are served.",
       sSrc:"Shall we go to the {1} tonight?"},

      {type:"mc", q:"What grammatical gender does 'ospedale' belong to?",
       opts:["It changes by context","Feminine (like farmacia)","It has no gender","Masculine (like parco)"],
       ans:"Masculine (like parco)",
       hint:"Despite ending in -e (which could be either gender), this noun uses 'il' or 'l''. You must memorize gender for -e words."}
    ]},

    {id:"itv2_u6l2", title:"Le direzioni", icon:"\ud83e\udded", xp:15, board:true, steps:[
      {type:"intro", title:"Le direzioni",
       desc:"Learn how to ask for and give directions in Italian, plus essential location words.",
       goals:["Ask for directions politely","Understand basic direction words","Use vicino and lontano"]},

      {type:"teach", trg:"dritto", src:"straight ahead", pos:"adv", gender:null,
       note:"Also spelled 'diritto.' Both forms are correct.\nOften combined with 'sempre' (always) for emphasis: sempre dritto.",
       example:"A: Come arrivo alla stazione?\nB: Vada sempre dritto.",
       exampleSrc:"A: How do I get to the station?\nB: Go straight ahead.",
       funFact:"From Latin 'directus' (straight). The double form 'dritto/diritto' exists because different regions simplified the Latin word differently. Both are standard Italian today."},

      {type:"teach", trg:"a destra", src:"to the right", pos:"adv", gender:null,
       note:"'Destra' = right (side). 'A' = to/at.\nOpposite: a sinistra (to the left).",
       example:"A: Dov'e la farmacia?\nB: Giri a destra, poi dritto.",
       exampleSrc:"A: Where is the pharmacy?\nB: Turn right, then straight.",
       funFact:"From Latin 'dextra' (right hand). The Romans considered the right side lucky and skillful. English 'dexterity' (skill with hands) and 'ambidextrous' come from this same root."},

      {type:"teach", trg:"a sinistra", src:"to the left", pos:"adv", gender:null,
       note:"'Sinistra' = left (side). 'A' = to/at.\nOpposite: a destra (to the right).",
       example:"A: Dove giro?\nB: A sinistra, dopo il semaforo.",
       exampleSrc:"A: Where do I turn?\nB: To the left, after the traffic light.",
       funFact:"From Latin 'sinistra' (left). Romans considered the left side unlucky, which is why English 'sinister' (from the same root) means threatening or evil. Left-handedness was once seen as a bad omen."},

      {type:"teach", trg:"vicino", src:"near / close", pos:"adv", gender:null,
       note:"Can be adverb or adjective. 'Vicino a' = near to (needs 'a').\nFrom Latin 'vicinus' (neighbor).",
       example:"A: La farmacia e vicino?\nB: Si, e molto vicino. Cinque minuti.",
       exampleSrc:"A: Is the pharmacy near?\nB: Yes, it is very near. Five minutes.",
       funFact:"From Latin 'vicinus' (neighboring), from 'vicus' (village). English 'vicinity' comes from the same root. In ancient Rome, a 'vicus' was a neighborhood within the city."},

      {type:"teach", trg:"lontano", src:"far", pos:"adv", gender:null,
       note:"Can be adverb or adjective. 'Lontano da' = far from.\nOpposite of vicino.",
       example:"A: L'ospedale e lontano?\nB: Si, e abbastanza lontano. Prendi il bus.",
       exampleSrc:"A: Is the hospital far?\nB: Yes, it is quite far. Take the bus.",
       funFact:"From Latin 'longitanus' (distant), related to 'longus' (long). The connection between distance and length exists in many languages. Something far away is a 'long' way."},

      {type:"teach", trg:"la strada", src:"the street / road", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'strata' (paved road).\nAlso means 'way' in figurative sense.",
       example:"A: E in questa strada?\nB: Si, in fondo alla strada.",
       exampleSrc:"A: Is it on this street?\nB: Yes, at the end of the street.",
       funFact:"Latin 'strata' (paved) referred to Roman paved roads ('via strata'). English 'street' comes from the same Latin root. Roman roads were engineering marvels, and many still exist today."},

      {type:"teach", trg:"la piazza", src:"the square / plaza", pos:"noun", gender:"f",
       note:"Feminine. The heart of Italian city life.\nFrom Latin 'platea' (broad street).",
       example:"A: Ci vediamo in piazza.\nB: In Piazza Navona?",
       exampleSrc:"A: Let's meet in the square.\nB: In Piazza Navona?",
       funFact:"Every Italian town has its 'piazza,' the social center where people gather, children play, and markets set up. The English word 'plaza' is borrowed from Spanish, which got it from the same Latin 'platea.'"},

      // Quiz steps
      {type:"mc", q:"How do you say 'turn right' in Italian?",
       opts:["Giri a destra","Giri a sinistra","Vada dritto","E vicino"],
       ans:"Giri a destra",
       hint:"The right side in Italian comes from Latin 'dextra.' English 'dexterity' shares this root."},

      {type:"fb", s:"Vada sempre {1}.",
       a:["dritto"],
       opts:["dritto","destra","sinistra","vicino"],
       hint:"Go in one direction without turning. This word means 'straight ahead.'",
       sSrc:"Go straight {1}."},

      {type:"match", pairs:[
        {trg:"dritto", src:"straight ahead"},
        {trg:"a destra", src:"to the right"},
        {trg:"a sinistra", src:"to the left"},
        {trg:"vicino", src:"near"},
        {trg:"lontano", src:"far"}
      ]},

      {type:"mc", q:"What does 'vicino' mean?",
       opts:["Far","Near","Straight","Right"],
       ans:"Near",
       hint:"From Latin 'vicinus' (neighbor). English 'vicinity' shares this root, meaning the surrounding area."},

      {type:"fb", s:"La farmacia e {1}, dopo la piazza.",
       a:["vicino"],
       opts:["vicino","lontano","dritto","sinistra"],
       hint:"The pharmacy is not far. Just a short walk, past the square.",
       sSrc:"The pharmacy is {1}, past the square."},

      {type:"mc", q:"What is 'la piazza'?",
       opts:["The piece","The pizza","The square / plaza","The street"],
       ans:"The square / plaza",
       hint:"This is the social heart of every Italian town. People gather there. Not to be confused with a food word."},

      {type:"fb", s:"L'ospedale e {1}. Prendi il bus.",
       a:["lontano"],
       opts:["lontano","vicino","dritto","qui"],
       hint:"The hospital is not close by. You need transportation to get there.",
       sSrc:"The hospital is {1}. Take the bus."},

      {type:"mc", q:"What does 'la strada' mean?",
       opts:["The store","The station","The square","The street / road"],
       ans:"The street / road",
       hint:"From Latin 'strata' (paved r...). English 's...' shares the same ancient root."}
    ]},

    {id:"itv2_u6l3", title:"I mezzi di trasporto", icon:"\ud83d\ude8c", xp:15, board:true, steps:[
      {type:"intro", title:"I mezzi di trasporto",
       desc:"Learn Italian words for common forms of transportation and how to talk about getting around the city.",
       goals:["Name common vehicles and transport","Say how you get around","Use prendere (to take) with transport"]},

      {type:"teach", trg:"l'autobus", src:"the bus", pos:"noun", gender:"m",
       note:"Masculine. Invariable: singular and plural are both 'autobus.'\nOften shortened to 'il bus' in speech.",
       example:"A: Come vai al lavoro?\nB: Prendo l'autobus.",
       exampleSrc:"A: How do you get to work?\nB: I take the bus.",
       funFact:"Words borrowed from other languages (autobus from French, bar from English) often do not change in the plural. 'Un autobus, due autobus.' The plural stays the same because Italian plural rules do not apply to foreign words."},

      {type:"teach", trg:"il treno", src:"the train", pos:"noun", gender:"m",
       note:"Masculine. From English 'train' via French.\nItaly has high-speed trains (Frecciarossa, up to 300 km/h).",
       example:"A: A che ora parte il treno?\nB: Alle dieci e venti.",
       exampleSrc:"A: What time does the train leave?\nB: At ten twenty.",
       funFact:"Italy's 'Frecciarossa' (Red Arrow) trains connect major cities at up to 300 km/h. Rome to Milan takes just 2 hours 59 minutes. The train network follows the ancient Roman road system."},

      {type:"teach", trg:"il taxi", src:"the taxi", pos:"noun", gender:"m",
       note:"Masculine. Invariable: same form in singular and plural.\nAlso spelled 'tassi' in older Italian.",
       example:"A: Prendiamo un taxi?\nB: Si, e tardi.",
       exampleSrc:"A: Shall we take a taxi?\nB: Yes, it's late.",
       funFact:"In Italy, taxis cannot be hailed from the street in most cities. You must go to a taxi stand ('posteggio taxi') or call one by phone. Uber exists in only a few Italian cities due to strict regulations."},

      {type:"teach", trg:"la macchina", src:"the car", pos:"noun", gender:"f",
       note:"Feminine. Also means 'machine' in general.\n'L'automobile' is more formal. 'Macchina' is everyday speech.",
       example:"A: Hai la macchina?\nB: Si, ma oggi prendo il treno.",
       exampleSrc:"A: Do you have a car?\nB: Yes, but today I'm taking the train.",
       funFact:"'Macchina' literally means 'machine' but is universally used for 'car' in everyday Italian. Saying 'automobile' sounds overly formal. It is like saying 'automobile' instead of 'car' in English."},

      {type:"teach", trg:"la bicicletta", src:"the bicycle", pos:"noun", gender:"f",
       note:"Feminine. Often shortened to 'la bici' in speech.\nFrom French 'bicyclette.'",
       example:"A: Vai in bici al lavoro?\nB: Si, ogni giorno!",
       exampleSrc:"A: Do you cycle to work?\nB: Yes, every day!",
       funFact:"Italian cities are increasingly bike-friendly. Bologna, Ferrara, and Bolzano are among the most bicycle-friendly cities. 'Bici' is the standard shortened form, used far more than the full 'bicicletta.'"},

      {type:"teach", trg:"la metropolitana", src:"the metro / subway", pos:"noun", gender:"f",
       note:"Feminine. Usually shortened to 'la metro.'\nFrom Greek 'metropolis' (mother city).",
       example:"A: Prendiamo la metro?\nB: Si, e piu veloce.",
       exampleSrc:"A: Shall we take the metro?\nB: Yes, it's faster.",
       funFact:"Only four Italian cities have metro systems: Rome (3 lines), Milan (5 lines), Naples (1 line), and Turin (1 line). Building metros in Italy is slow because construction keeps uncovering ancient Roman ruins."},

      {type:"teach", trg:"prendere", src:"to take (transport)", pos:"verb", gender:null,
       note:"Used with transport: prendere il treno, l'autobus, un taxi.\nIrregular past: ho preso.",
       example:"A: Che mezzo prendi?\nB: Prendo il treno delle otto.",
       exampleSrc:"A: What transport do you take?\nB: I take the eight o'clock train.",
       funFact:"'Prendere' is one of Italy's most versatile verbs. Besides transport, it means: to take (prendere un libro), to have food/drink (prendere un caffe), to catch (prendere un raffreddore = catch a cold)."},

      {type:"teach", trg:"andare", src:"to go", pos:"verb", gender:null,
       note:"Irregular verb. Present: vado, vai, va, andiamo, andate, vanno.\n'Andare in' + transport (but 'andare a piedi' = go on foot).",
       example:"A: Dove vai?\nB: Vado a scuola.",
       exampleSrc:"A: Where are you going?\nB: I'm going to school.",
       funFact:"'Andare' is completely irregular in the present tense: vado, vai, va, andiamo, andate, vanno. No pattern at all. It is one of the first irregular verbs every Italian learner must memorize."},

      // Quiz steps
      {type:"mc", q:"Come si dice 'train' in italiano?",
       opts:["Il treno","Il taxi","L'autobus","La macchina"],
       ans:"Il treno",
       hint:"Italy's high-speed version is called the 'Frecciarossa' (Red Arrow), reaching 300 km/h."},

      {type:"fb", s:"Prendo {1} per andare al lavoro.",
       a:["l'autobus"],
       opts:["l'autobus","il taxi","la bici","la metro"],
       hint:"This is the large public vehicle that follows a fixed route with regular stops.",
       sSrc:"I take {1} to go to work."},

      {type:"match", pairs:[
        {trg:"il treno", src:"the train"},
        {trg:"la macchina", src:"the car"},
        {trg:"la bicicletta", src:"the bicycle"},
        {trg:"l'autobus", src:"the bus"},
        {trg:"la metropolitana", src:"the metro"}
      ]},

      {type:"mc", q:"What is the everyday Italian word for 'car'?",
       opts:["L'automobile","La macchina","La vettura","Il veicolo"],
       ans:"La macchina",
       hint:"This word literally means 'machine' but Italians use it universally for the four-wheeled vehicle."},

      {type:"fb", s:"Prendiamo un {1}? E tardi.",
       a:["taxi"],
       opts:["taxi","treno","autobus","bici"],
       hint:"A private hired vehicle with a driver. In Italy, you find them at special stands.",
       sSrc:"Shall we take a {1}? It's late."},

      {type:"mc", q:"Which of these is feminine?",
       opts:["Il taxi","Il treno","La bicicletta","L'autobus"],
       ans:"La bicicletta",
       hint:"Check the articles. This two-wheeled vehicle uses the feminine article 'la.'"},

      {type:"fb", s:"Dove {1}?",
       a:["vai"],
       opts:["vai","prendi","hai","sei"],
       hint:"This is the 'tu' form of 'andare' (to go). An irregular verb meaning movement to a place.",
       sSrc:"Where are you {1}?"},

      {type:"mc", q:"Why does 'autobus' not change in the plural?",
       opts:["It is irregular","It is feminine","It ends in -s","It is a foreign loan word"],
       ans:"It is a foreign loan word",
       hint:"Italian plural rules apply only to native vocabulary. Imports from French or English stay fixed in form."}
    ]},
    EXP_06_L1, EXP_06_L2, EXP_06_L3,
  ]
};
export default UNIT_06;
