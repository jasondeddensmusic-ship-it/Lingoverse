// Italian V2 Unit 05 — A casa (At Home) (A1.2)
// CILS/CELI A1 aligned. Rooms, furniture, location expressions.
import EXP_05_L1 from './_temp_u05_expand_L01.js';import EXP_05_L2 from './_temp_u05_expand_L02.js';import EXP_05_L3 from './_temp_u05_expand_L03.js';

const UNIT_05 = {
  n:5, lang:"it", srcLang:"en", track:"v2",
  title:"A casa", sub:"At Home",
  icon:"\ud83c\udfe0", level:"A1.2", color:"#7B5EE8",
  lessons:[
    {id:"itv2_u5l1", title:"Le stanze", icon:"\ud83d\udeaa", xp:15, board:true, steps:[
      {type:"intro", title:"Le stanze",
       desc:"Learn the Italian names for rooms in a house and how to describe where things are.",
       goals:["Name the main rooms in a house","Use c'e and ci sono","Ask and answer where things are"]},

      {type:"teach", trg:"la casa", src:"the house / home", pos:"noun", gender:"f",
       note:"Feminine. 'A casa' = at home (no article needed).\nFrom Latin 'casa' (hut, cottage).",
       example:"A: Dove vai?\nB: Vado a casa.",
       exampleSrc:"A: Where are you going?\nB: I'm going home.",
       funFact:"In Latin, 'casa' meant a simple hut, while 'domus' meant a proper house. Over time, 'casa' took over and now means any home. 'Domus' survives in English words like 'domestic' and 'dome.'"},

      {type:"teach", trg:"la cucina", src:"the kitchen", pos:"noun", gender:"f",
       note:"Feminine. Also means 'cooking' or 'cuisine.'\nFrom Latin 'coquina' (place for cooking).",
       example:"A: Dov'e la mamma?\nB: E in cucina.",
       exampleSrc:"A: Where is mom?\nB: She is in the kitchen.",
       funFact:"'La cucina' means both the room and the style of cooking. 'La cucina italiana' is Italian cuisine. The English word 'cuisine' was borrowed from French, which got it from the same Latin root."},

      {type:"teach", trg:"la camera", src:"the bedroom", pos:"noun", gender:"f",
       note:"Feminine. Short for 'camera da letto' (room for sleeping).\nAlso means 'room' in general (hotel: camera singola).",
       example:"A: Quante camere ha la casa?\nB: Ha tre camere.",
       exampleSrc:"A: How many bedrooms does the house have?\nB: It has three bedrooms.",
       funFact:"From Latin 'camera' meaning 'vaulted room.' The same root gave us 'camera' (the device) because early cameras were dark rooms ('camera obscura'). Room and camera share the same origin."},

      {type:"teach", trg:"il bagno", src:"the bathroom", pos:"noun", gender:"m",
       note:"Masculine. Literally means 'bath.' Also used for toilet.\n'Dov'e il bagno?' is essential in Italy.",
       example:"A: Scusi, dov'e il bagno?\nB: In fondo a destra.",
       exampleSrc:"A: Excuse me, where is the bathroom?\nB: At the end on the right.",
       funFact:"From Latin 'balneum' (bath). In Italy, the bathroom often has the toilet in a separate tiny room ('il gabinetto'), with the actual bath and sink in the main 'bagno.'"},

      {type:"teach", trg:"il salotto", src:"the living room", pos:"noun", gender:"m",
       note:"Masculine. From 'sala' (hall) + diminutive -otto.\nAlso called 'il soggiorno' in some regions.",
       example:"A: Dove guardiamo la TV?\nB: In salotto.",
       exampleSrc:"A: Where do we watch TV?\nB: In the living room.",
       funFact:"Italians also use 'il soggiorno' (from 'soggiornare,' to stay/dwell) for living room. The two words are interchangeable, but 'salotto' feels slightly more cozy and intimate."},

      {type:"teach", trg:"il giardino", src:"the garden", pos:"noun", gender:"m",
       note:"Masculine. From Frankish 'gard' (enclosure).\nPlural: i giardini. A shared root with English 'garden.'",
       example:"A: Avete un giardino?\nB: Si, un piccolo giardino con fiori.",
       exampleSrc:"A: Do you have a garden?\nB: Yes, a small garden with flowers.",
       funFact:"Italian, English, French ('jardin'), and German ('Garten') all get 'garden' from the same Germanic root meaning 'enclosed space.' The word traveled across Europe during the Middle Ages."},

      {type:"tip", title:"C'e and ci sono",
       text:"Use these expressions to say something exists or is present.\n\n- c'e = there is (singular)\n  C'e un gatto in giardino. (There is a cat in the garden.)\n\n- ci sono = there are (plural)\n  Ci sono tre camere. (There are three bedrooms.)\n\n'C'e' is a contraction of 'ci e' (there is).\nTo ask a question, just use rising intonation:\n  C'e un bagno? (Is there a bathroom?)",
       deepDive:"'Ci' originally means 'here/there' and 'e/sono' are forms of 'essere' (to be). So 'c'e' literally means 'there is here.' The negative forms are 'non c'e' (there is not) and 'non ci sono' (there are not). These are among the most useful expressions in daily Italian."},

      // Quiz steps
      {type:"mc", q:"Come si dice 'kitchen' in italiano?",
       opts:["La cucina","La camera","Il bagno","Il salotto"],
       ans:"La cucina",
       hint:"This word also means 'cooking' or 'cuisine.' Think of the English word 'cuisine' from the same root."},

      {type:"fb", s:"Dov'e la mamma? E in {1}.",
       a:["cucina"],
       opts:["cucina","camera","bagno","giardino"],
       hint:"Mom is in the room where food is prepared. This room shares its name with a cooking style.",
       sSrc:"Where is mom? She is in the {1}."},

      {type:"match", pairs:[
        {trg:"la cucina", src:"the kitchen"},
        {trg:"la camera", src:"the bedroom"},
        {trg:"il bagno", src:"the bathroom"},
        {trg:"il salotto", src:"the living room"},
        {trg:"il giardino", src:"the garden"}
      ]},

      {type:"mc", q:"How do you say 'there are three bedrooms'?",
       opts:["Ci sono tre camere","C'e tre camere","Ci sono tre bagni","C'e una camera"],
       ans:"Ci sono tre camere",
       hint:"For plural items, use the plural form. 'C'e' is only for singular things."},

      {type:"fb", s:"{1} un gatto in giardino.",
       a:["C'e"],
       opts:["C'e","Ci sono","E","Ha"],
       hint:"You are stating that one thing exists in a location. This is the singular 'there is' expression.",
       sSrc:"{1} a cat in the garden."},

      {type:"mc", q:"Which room word is masculine?",
       opts:["Il bagno","La cucina","La camera","La casa"],
       ans:"Il bagno",
       hint:"Check the articles. Three of these use 'la' (feminine). One uses 'il' (masculine)."},

      {type:"fb", s:"{1} tre gatti in casa.",
       a:["Ci sono"],
       opts:["Ci sono","C'e","E","Sono"],
       hint:"You are saying multiple things exist. Use the plural form of 'there is/there are.'",
       sSrc:"{1} three cats in the house."}
    ]},

    {id:"itv2_u5l2", title:"I mobili", icon:"\ud83d\udecb\ufe0f", xp:15, board:true, steps:[
      {type:"intro", title:"I mobili",
       desc:"Learn Italian words for common furniture and household items, plus location words.",
       goals:["Name common furniture items","Use dove (where) to ask about locations","Describe where things are with qui and la"]},

      {type:"teach", trg:"il tavolo", src:"the table", pos:"noun", gender:"m",
       note:"Masculine. From Latin 'tabula' (board, plank).\nPlural: i tavoli. For dining: 'il tavolo da pranzo.'",
       example:"A: Dov'e il libro?\nB: E sul tavolo.",
       exampleSrc:"A: Where is the book?\nB: It's on the table.",
       funFact:"Latin 'tabula' gave Italian 'tavolo' (table) and 'tavola' (board, tablet). English 'table' came through French from the same root. Even 'tablet' is a diminutive of the same word."},

      {type:"teach", trg:"la sedia", src:"the chair", pos:"noun", gender:"f",
       note:"Feminine. Plural: le sedie.\nFrom Latin 'sedia' (seat), related to 'sedere' (to sit).",
       example:"A: Ci sono sedie in cucina?\nB: Si, ci sono quattro sedie.",
       exampleSrc:"A: Are there chairs in the kitchen?\nB: Yes, there are four chairs.",
       funFact:"From Latin 'sedere' (to sit). English words like 'sedentary' (sitting too much) and 'sedan' (a carried chair) share this Latin root. The connection is sitting."},

      {type:"teach", trg:"il letto", src:"the bed", pos:"noun", gender:"m",
       note:"Masculine. 'Camera da letto' = bedroom (room for bed).\nFrom Latin 'lectus.'",
       example:"A: Il letto e grande?\nB: Si, e un letto matrimoniale.",
       exampleSrc:"A: Is the bed big?\nB: Yes, it's a double bed.",
       funFact:"A 'letto matrimoniale' is a double bed (literally 'marriage bed'). A single bed is 'letto singolo.' Italian hotels always ask which you prefer. The Latin root 'lectus' also gave English 'lecture' (originally a reading in bed)."},

      {type:"teach", trg:"il divano", src:"the sofa / couch", pos:"noun", gender:"m",
       note:"Masculine. From Arabic 'diwan' (council room with cushions).\nPlural: i divani.",
       example:"A: Dove sei?\nB: Sono sul divano in salotto.",
       exampleSrc:"A: Where are you?\nB: I'm on the sofa in the living room.",
       funFact:"The word traveled from Persian to Arabic ('diwan,' a long seat along a wall) to Turkish to Italian. The original 'divan' was a government council that met on cushioned benches. The furniture kept the name."},

      {type:"teach", trg:"la finestra", src:"the window", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'fenestra.'\nPlural: le finestre. Related to English 'defenestration.'",
       example:"A: Puoi aprire la finestra?\nB: Si, fa caldo!",
       exampleSrc:"A: Can you open the window?\nB: Yes, it's hot!",
       funFact:"'Defenestration' (throwing someone out a window) comes from Latin 'fenestra.' The most famous defenestration happened in Prague in 1618 and started the Thirty Years' War. Italians just say 'buttare dalla finestra.'"},

      {type:"teach", trg:"la porta", src:"the door", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'porta' (gate, entrance).\nPlural: le porte. Related to English 'portal' and 'port.'",
       example:"A: Chi e alla porta?\nB: E il postino!",
       exampleSrc:"A: Who is at the door?\nB: It's the mailman!",
       funFact:"Latin 'porta' gave us 'portal,' 'port,' 'portico,' and 'porch.' All describe entrances or passageways. The Italian word has not changed in over 2,000 years."},

      {type:"teach", trg:"dove", src:"where", pos:"adv", gender:null,
       note:"Question word for location. Often contracted: dov'e (where is).\nFrom Latin 'de ubi' (from where).",
       example:"A: Dove abiti?\nB: Abito a Roma.",
       exampleSrc:"A: Where do you live?\nB: I live in Rome.",
       funFact:"'Dove' contracts to 'dov'e' before 'e' (is) for smoother pronunciation. This contraction is mandatory in speech and standard in writing. You will hear 'dov'e' far more often than 'dove e.'"},

      {type:"teach", trg:"qui", src:"here", pos:"adv", gender:null,
       note:"Means 'here' (near the speaker). Synonym: 'qua.'\n'Qui' is slightly more precise than 'qua.'",
       example:"A: Dove metto il libro?\nB: Mettilo qui, sul tavolo.",
       exampleSrc:"A: Where do I put the book?\nB: Put it here, on the table.",
       funFact:"Italian has two words for 'here': 'qui' (this exact spot) and 'qua' (this general area). The difference is subtle and many Italians use them interchangeably in daily speech."},

      {type:"teach", trg:"la", src:"there", pos:"adv", gender:null,
       note:"Means 'there' (away from speaker). Written with accent: la (accented).\nSynonym: 'la' is slightly more precise than 'la.'",
       example:"A: Dov'e il gatto?\nB: E la, in giardino.",
       exampleSrc:"A: Where is the cat?\nB: It's there, in the garden.",
       funFact:"The accent on 'la' (there) distinguishes it from 'la' (the, feminine article) in writing. In speech, context makes the meaning clear. This accent distinction is important in formal Italian."},

      // Quiz steps
      {type:"mc", q:"Come si dice 'table' in italiano?",
       opts:["Il tavolo","La sedia","Il letto","Il divano"],
       ans:"Il tavolo",
       hint:"From Latin 'tabula' (board). English 'table' comes from the same root through French."},

      {type:"fb", s:"Il libro e sul {1}.",
       a:["tavolo"],
       opts:["tavolo","letto","divano","sedia"],
       hint:"This is the flat surface where you eat meals or place items. It comes from Latin 'tabula.'",
       sSrc:"The book is on the {1}."},

      {type:"match", pairs:[
        {trg:"il tavolo", src:"the table"},
        {trg:"la sedia", src:"the chair"},
        {trg:"il letto", src:"the bed"},
        {trg:"la finestra", src:"the window"},
        {trg:"la porta", src:"the door"}
      ]},

      {type:"mc", q:"What does 'dove' mean?",
       opts:["Where","When","Who","Why"],
       ans:"Where",
       hint:"This question word asks about location. It often contracts to 'dov'e' before the verb 'is.'"},

      {type:"fb", s:"{1} il bagno?",
       a:["Dov'e"],
       opts:["Dov'e","Chi e","Come e","Quando e"],
       hint:"You are asking about the location of something. Use the contracted form of 'dove' + 'e.'",
       sSrc:"{1} the bathroom?"},

      {type:"mc", q:"Which furniture word is feminine?",
       opts:["La sedia","Il tavolo","Il letto","Il divano"],
       ans:"La sedia",
       hint:"Check the articles. Three use 'il' (masculine). One uses 'la' (feminine), related to 'sedere' (to sit)."},

      {type:"fb", s:"Sono {1}, in salotto.",
       a:["qui"],
       opts:["qui","dove","la","quando"],
       hint:"You are telling someone you are at this location, near you. A short word meaning 'here.'",
       sSrc:"I'm {1}, in the living room."},

      {type:"mc", q:"What word means 'there' (away from the speaker)?",
       opts:["La (accented)","Qui","Dove","Casa"],
       ans:"La (accented)",
       hint:"Written with an accent to distinguish it from the feminine article. It indicates a distant location."}
    ]},

    {id:"itv2_u5l3", title:"La mia casa", icon:"\ud83c\udfe1", xp:15, board:true, steps:[
      {type:"intro", title:"La mia casa",
       desc:"Practice describing your home by combining room vocabulary, furniture, and location expressions.",
       goals:["Describe what is in each room","Use c'e/ci sono with furniture","Combine room and furniture vocabulary"]},

      {type:"teach", trg:"lo specchio", src:"the mirror", pos:"noun", gender:"m",
       note:"Masculine. Uses 'lo' because of s+consonant (sp).\nFrom Latin 'speculum' (mirror).",
       example:"A: C'e uno specchio in bagno?\nB: Si, c'e uno specchio grande.",
       exampleSrc:"A: Is there a mirror in the bathroom?\nB: Yes, there is a big mirror.",
       funFact:"Latin 'speculum' also gave English 'spectacle,' 'spectrum,' and 'inspect.' All relate to seeing or looking. The root 'spec-' means 'to look at.'"},

      {type:"teach", trg:"l'armadio", src:"the wardrobe / closet", pos:"noun", gender:"m",
       note:"Masculine. Uses l' before vowel. From Latin 'armarium' (storage).\nPlural: gli armadi.",
       example:"A: Dove sono i vestiti?\nB: Nell'armadio in camera.",
       exampleSrc:"A: Where are the clothes?\nB: In the wardrobe in the bedroom.",
       funFact:"Latin 'armarium' originally meant a place to store weapons ('arma'). Over time it shifted to mean any storage cabinet. English borrowed it as 'armoire' through French."},

      {type:"teach", trg:"la lampada", src:"the lamp", pos:"noun", gender:"f",
       note:"Feminine. From Greek 'lampas' (torch).\nPlural: le lampade.",
       example:"A: C'e una lampada in salotto?\nB: Si, accanto al divano.",
       exampleSrc:"A: Is there a lamp in the living room?\nB: Yes, next to the sofa.",
       funFact:"From Greek 'lampas' (torch, light), which also gives us 'lamp' in English. The Greek root 'lamp-' means 'to shine.' Italian preserved the full Latin form 'lampada' while English shortened it."},

      {type:"teach", trg:"il tappeto", src:"the rug / carpet", pos:"noun", gender:"m",
       note:"Masculine. From Arabic 'taffeta' via trade routes.\nPlural: i tappeti.",
       example:"A: C'e un tappeto in salotto?\nB: Si, un tappeto rosso.",
       exampleSrc:"A: Is there a rug in the living room?\nB: Yes, a red rug.",
       funFact:"The word entered Italian through the Arabic textile trade during the Middle Ages. The English word 'carpet' and French 'tapis' share the same origin. Oriental rugs were luxury imports for centuries."},

      {type:"teach", trg:"il frigorifero", src:"the refrigerator", pos:"noun", gender:"m",
       note:"Masculine. Often shortened to 'il frigo' in speech.\nFrom Latin 'frigus' (cold).",
       example:"A: Dov'e il latte?\nB: Nel frigo, in cucina.",
       exampleSrc:"A: Where is the milk?\nB: In the fridge, in the kitchen.",
       funFact:"Italians almost always say 'il frigo' instead of the full 'frigorifero.' The Latin root 'frigus' (cold) also appears in English 'frigid' and 'refrigerator.' Same root, same meaning."},

      {type:"teach", trg:"il quadro", src:"the painting / picture", pos:"noun", gender:"m",
       note:"Masculine. From Latin 'quadrum' (square, frame).\nPlural: i quadri.",
       example:"A: Che bel quadro!\nB: Grazie, e di mia nonna.",
       exampleSrc:"A: What a beautiful painting!\nB: Thanks, it's from my grandmother.",
       funFact:"'Quadro' literally means 'square' or 'frame,' then extended to mean a framed painting. In English, 'quadrant' and 'square' share the same Latin root. Art and geometry connected through frames."},

      // Quiz steps
      {type:"mc", q:"How do Italians usually say 'refrigerator'?",
       opts:["Il frigo","Il frigorifero","La frigo","Lo frigo"],
       ans:"Il frigo",
       hint:"Italians love to shorten long words. This appliance keeps food cold, from the Latin root for 'cold.'"},

      {type:"fb", s:"C'e uno {1} in bagno.",
       a:["specchio"],
       opts:["specchio","armadio","quadro","tappeto"],
       hint:"This is the reflective object you look into every morning. Found in most bathrooms.",
       sSrc:"There is a {1} in the bathroom."},

      {type:"match", pairs:[
        {trg:"lo specchio", src:"the mirror"},
        {trg:"l'armadio", src:"the wardrobe"},
        {trg:"la lampada", src:"the lamp"},
        {trg:"il tappeto", src:"the rug"},
        {trg:"il frigo", src:"the fridge"}
      ]},

      {type:"mc", q:"Which article goes with 'armadio'?",
       opts:["L' (masculine)","Il","La","Lo"],
       ans:"L' (masculine)",
       hint:"This masculine noun starts with a vowel. The masculine article 'il/lo' contracts before vowels."},

      {type:"fb", s:"I vestiti sono nell'{1}.",
       a:["armadio"],
       opts:["armadio","bagno","cucina","giardino"],
       hint:"This is the tall piece of furniture where you store clothes. From Latin 'armarium.'",
       sSrc:"The clothes are in the {1}."},

      {type:"mc", q:"What does 'il quadro' mean?",
       opts:["The painting","The table","The chair","The garden"],
       ans:"The painting",
       hint:"From Latin 'quadrum' (square, frame). It refers to something framed and hung on the wall."},

      {type:"fb", s:"C'e una {1} accanto al divano.",
       a:["lampada"],
       opts:["lampada","sedia","porta","finestra"],
       hint:"This object provides light. From the Greek word for 'torch' or 'to shine.'",
       sSrc:"There is a {1} next to the sofa."},

      {type:"mc", q:"Why does 'specchio' use the article 'lo'?",
       opts:["It starts with s + consonant (sp)","It starts with a vowel","It is feminine","It is plural"],
       ans:"It starts with s + consonant (sp)",
       hint:"The special masculine article 'lo' is used before z, s+consonant, gn, ps, and x."}
    ]},
    EXP_05_L1, EXP_05_L2, EXP_05_L3,
  ]
};
export default UNIT_05;
