// Italian V2 Unit 05. A casa (At Home) (A1.2)
import BATCH8_L1 from './_batch8_u05_L01.js';
import BATCH7_L1 from './_batch7_u05_L01.js';
import BATCH6_L1 from './_batch6_u05_L01.js';
import BATCH4_L02 from './_batch4_u05_L02.js';
import BATCH4_L01 from './_batch4_u05_L01.js';
import BATCH2_L02 from './_batch2_u05_L02.js';
import BATCH2_L01 from './_batch2_u05_L01.js';
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
{type:"match",pairs:[{trg:"la cucina",src:"the kitchen"},{trg:"la camera",src:"the bedroom"},{trg:"il bagno",src:"the bathroom"},{trg:"il salotto",src:"the living room"}]},

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
       opts:["C'e tre camere","Ci sono tre camere","Ci sono tre bagni","C'e una camera"],
       ans:"Ci sono tre camere",
       hint:"For plural items, use the plural form. 'C'e' is only for singular things."},

      {type:"fb", s:"{1} un gatto in giardino.",
       a:["C'e"],
       opts:["C'e","Ci sono","E","Ha"],
       hint:"You are stating that one thing exists in a location. This is the singular 'there is' expression.",
       sSrc:"{1} a cat in the garden."},

      {type:"mc", q:"Which room word is masculine?",
       opts:["La camera","La cucina","Il bagno","La casa"],
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
{type:"match",pairs:[{trg:"la sedia",src:"the chair"},{trg:"il letto",src:"the bed"},{trg:"il divano",src:"the sofa / couch"},{trg:"la finestra",src:"the window"}]},

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
       opts:["Il tavolo","La sedia (chair)","Il letto (bed)","Il divano (sofa)"],
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
       opts:["When (time)","Where","Who (person)","Why (reason)"],
       ans:"Where",
       hint:"This question word asks about location. It often contracts to 'dov'e' before the verb 'is.'"},

      {type:"fb", s:"{1} il bagno?",
       a:["Dov'e"],
       opts:["Dov'e","Chi e","Come e","Quando e"],
       hint:"To ask about a place, combine the location question word with the verb 'is.' The result contracts.",
       sSrc:"{1} the bathroom?"},

      {type:"mc", q:"Which furniture word is feminine?",
       opts:["Il letto","Il tavolo","La sedia","Il divano"],
       ans:"La sedia",
       hint:"Check the articles. Three use 'il' (masculine). One uses 'la' (feminine), related to 'sedere' (to sit)."},

      {type:"fb", s:"Sono {1}, in salotto.",
       a:["qui"],
       opts:["qui","dove","la","quando"],
       hint:"You are telling someone you are at this location, near you. A short word meaning 'here.'",
       sSrc:"I'm {1}, in the living room."},

      {type:"mc", q:"What word means 'there' (away from the speaker)?",
       opts:["Casa (home/house)","Qui (short: here)","Dove (question word)","La (accented)"],
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
{type:"match",pairs:[{trg:"l'armadio",src:"the wardrobe / closet"},{trg:"la lampada",src:"the lamp"},{trg:"il tappeto",src:"the rug / carpet"},{trg:"il frigorifero",src:"the refrigerator"}]},

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
       opts:["Il (before consonant)","L' (masculine)","La (feminine form)","Lo (before z/gn/sp)"],
       ans:"L' (masculine)",
       hint:"This noun begins with a vowel. Italian definite articles contract before vowel-starting nouns of one gender."},

      {type:"fb", s:"I vestiti sono nell'{1}.",
       a:["armadio"],
       opts:["armadio","bagno","cucina","giardino"],
       hint:"This is the tall piece of furniture where you store clothes. From Latin 'armarium.'",
       sSrc:"The clothes are in the {1}."},

      {type:"mc", q:"What does 'il quadro' mean?",
       opts:["The chair (sedia)","The table (tavolo)","The painting","The garden (giardino)"],
       ans:"The painting",
       hint:"From Latin 'quadrum' (square, frame). It refers to something framed and hung on the wall."},

      {type:"fb", s:"C'e una {1} accanto al divano.",
       a:["lampada"],
       opts:["lampada","sedia","porta","finestra"],
       hint:"This object provides light. From the Greek word for 'torch' or 'to shine.'",
       sSrc:"There is a {1} next to the sofa."},

      {type:"mc", q:"Why does 'specchio' use the article 'lo'?",
       opts:["It is plural","It starts with a vowel","It is feminine","It starts with s + consonant (sp)"],
       ans:"It starts with s + consonant (sp)",
       hint:"The word begins with a cluster that makes 'il' awkward to pronounce. Italian uses a different article to keep speech flowing smoothly."}
    ]},
    {id:"itv2_u5l_pot", title:"Posso, sai, puo", icon:"\ud83d\udcaa", xp:15, board:true, steps:[
      {type:"intro", title:"Expressing Ability",
       desc:"Learn to say what you can and cannot do in Italian using 'potere' (can/be able to) and 'sapere' (know how to). These two verbs cover everything from permission and possibility to learned skills.",
       goals:["Use potere for possibility or permission","Use sapere for learned skills","Say what you cannot do"]},

      {type:"teach", trg:"potere", src:"to be able to / can", pos:"verb", gender:null,
       note:"Modal verb for possibility, permission, or physical ability.\nKey forms: posso (I), puoi (you), puo (he/she).",
       example:"A: Puoi aprire la finestra?\nB: Si, posso aprirla.",
       exampleSrc:"A: Can you open the window?\nB: Yes, I can open it.",
       funFact:"'Potere' comes from Latin 'potere' (to be powerful), the same root as 'potent,' 'power,' and 'potential.' Saying 'posso' literally means 'I have the power to.'"},

      {type:"teach", trg:"posso", src:"I can / I am able to", pos:"verb", gender:null,
       note:"First person of potere. Already met as 'can I?' in polite requests.\nHere the meaning shifts to ability: I am able to.",
       example:"A: Posso cucinare la pasta?\nB: Certo, posso aprire anche il vino!",
       exampleSrc:"A: Can I cook the pasta?\nB: Of course, I can also open the wine!",
       funFact:"You already know 'Posso?' as a request (May I?). With an infinitive after it, the meaning shifts to ability: 'Posso farlo' means 'I am able to do it.' The same verb does double duty."},

      {type:"teach", trg:"non posso", src:"I cannot / I am not able to", pos:"verb", gender:null,
       note:"'Non' goes before the verb to negate it. 'Non posso + infinitive' = I cannot do something.\nAlso used for apologies: 'Mi dispiace, non posso.'",
       example:"A: Puoi aprire la porta?\nB: Mi dispiace, non posso. Sono in cucina.",
       exampleSrc:"A: Can you open the door?\nB: I'm sorry, I cannot. I am in the kitchen.",
       funFact:"'Non posso' is one of the most useful phrases in Italian. It handles both 'I'm not able to' (ability) and 'I can't' (permission denied). Add 'purtroppo' (unfortunately) for extra politeness."},

      {type:"teach", trg:"sapere", src:"to know how to (learned skill)", pos:"verb", gender:null,
       note:"Use sapere for skills you learned, not for permission.\nKey forms: so (I), sai (you), sa (he/she).",
       example:"A: Sai cucinare la pasta?\nB: Certo, so cucinare molto bene!",
       exampleSrc:"A: Do you know how to cook pasta?\nB: Of course, I know how to cook very well!",
       funFact:"'Sapere' comes from Latin 'sapere' (to taste, to be wise). 'Homo sapiens' means 'wise human' from the same root. In Italian, 'sai qualcosa' means you have truly mastered it."},

      {type:"teach", trg:"sai?", src:"do you know how? / can you?", pos:"verb", gender:null,
       note:"Second person of sapere. Used to ask about skills.\n'Sai + infinitive?' = Do you know how to ___?",
       example:"A: Sai ballare il tango?\nB: Un po', ma non sono bravo.",
       exampleSrc:"A: Do you know how to dance the tango?\nB: A little, but I'm not good.",
       funFact:"Asking 'sai + infinitive?' is the standard Italian way to ask 'can you do X (as a skill)?' Compare: 'puoi venire domani?' (can you come tomorrow? = possibility) vs 'sai guidare?' (can you drive? = skill)."},

      {type:"teach", trg:"ballare", src:"to dance", pos:"verb", gender:null,
       note:"Regular -are verb. 'Ballo' = I dance.\nUsed for all kinds of dancing.",
       example:"A: Ti piace ballare?\nB: Si, ballo ogni weekend!",
       exampleSrc:"A: Do you like to dance?\nB: Yes, I dance every weekend!",
       funFact:"From Latin 'ballare,' which came from Greek 'ballizein' (to dance, to jump). English 'ball' (a formal dance event) and 'ballet' share this root. Italy has a rich dance tradition: from folk tarantella to opera ballet."},

      {type:"tip", title:"Potere vs Sapere",
       text:"Both potere and sapere can be translated 'can' in English, but they mean different things:\n\nPOTERE = possibility, permission, or physical ability\n- 'Posso uscire?' (May I go out? = permission)\n- 'Non posso dormire.' (I cannot sleep. = physical state)\n\nSAPERE = a learned or acquired skill\n- 'Sai guidare?' (Do you know how to drive? = skill)\n- 'So cucinare.' (I know how to cook. = mastered skill)\n\nA quick test: if you could not do it as a baby and had to learn it, use sapere.",
       icon:"\ud83d\udca1",
       deepDive:{title:"Why Italian has two 'can' verbs",
        text:"Many European languages make this distinction. In French: pouvoir (potere) vs savoir (sapere). In German: koennen has both senses, but kennen covers a related distinction. Italian keeps the split clear. The rule of thumb: if a baby could not do it and you had to practise, use sapere. If it is about circumstance or permission, use potere. Edge case: physical feats can go either way. 'So nuotare' (I know how to swim, i.e. I learned) and 'posso nuotare' (I am able to swim, i.e. conditions allow) are both correct depending on what you want to emphasize."}},

      {type:"mc", q:"Which verb means 'to know how to (a learned skill)'?",
       opts:["potere","sapere","dovere","avere"],
       ans:"sapere",
       hint:"This verb covers skills you had to practise and learn. Think of the Latin root meaning 'to be wise.'"},

      {type:"fb", s:"{1} aprire la finestra?",
       a:["Puoi"],
       opts:["Puoi","Sai","Devi","Sei"],
       hint:"You are asking if the other person is able to (physically capable or willing). Use the second person of potere.",
       sSrc:"Can you open the window?"},

      {type:"mc", q:"How do you say 'I cannot come tonight'?",
       opts:["Non sai venire stasera","Non posso venire stasera","Non puoi venire stasera","Posso venire stasera"],
       ans:"Non posso venire stasera",
       hint:"Negate the first-person modal that expresses possibility or permission, then add the infinitive."},

      {type:"fb", s:"{1} ballare il tango?",
       a:["Sai"],
       opts:["Sai","Puoi","Devi","Sei"],
       hint:"You are asking about a learned dance skill. Use the second person of the 'know how to' verb.",
       sSrc:"Do you know how to dance the tango?"},

      {type:"match", pairs:[
        {trg:"potere", src:"to be able to / can (possibility)"},
        {trg:"sapere", src:"to know how to (learned skill)"},
        {trg:"non posso", src:"I cannot"},
        {trg:"ballare", src:"to dance"},
        {trg:"sai?", src:"do you know how?"}
      ]},

      {type:"fb", s:"So {1}, ma non sono bravo.",
       a:["ballare"],
       opts:["ballare","potere","sapere","cucinare"],
       hint:"You know this skill to some degree. It is an -are verb for a physical activity you do to music.",
       sSrc:"I know how to {1}, but I'm not good."},

      {type:"mc", q:"'Sai cucinare?' asks about what?",
       opts:["Permission to cook","Whether cooking is possible","A learned cooking skill","The cooking schedule"],
       ans:"A learned cooking skill",
       hint:"The verb sapere always refers to something you had to study or practise over time. Potere covers permissions and circumstances."}
    ]},
    EXP_05_L1, EXP_05_L2, EXP_05_L3,
  ]
};
export default UNIT_05;
