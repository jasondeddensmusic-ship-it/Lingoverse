// Italian V2 Unit 02. Numbers, Days & Time (A1.1)
import BATCH4_L02 from './_batch4_u02_L02.js';
import BATCH4_L01 from './_batch4_u02_L01.js';
import BATCH2_L02 from './_batch2_u02_L02.js';
import BATCH2_L01 from './_batch2_u02_L01.js';
// CILS/CELI A1 aligned.
import EXP_02_L1 from './_temp_u02_expand_L01.js';import EXP_02_L2 from './_temp_u02_expand_L02.js';import EXP_02_L3 from './_temp_u02_expand_L03.js';

const UNIT_02 = {
  n:2, lang:"it", srcLang:"en", track:"v2",
  title:"Che ore sono?", sub:"Numbers, Days & Time",
  icon:"🕐", level:"A1.1", color:"#7B5EE8",
  lessons:[
    {id:"itv2_u2l1", title:"I numeri", icon:"🔢", xp:15, board:true, steps:[
      {type:"intro", title:"I numeri",
       desc:"Learn to count in Italian from 0 to 20 and understand how Italian numbers work.",
       goals:["Count from 0 to 20","Recognize number patterns","Use numbers in basic situations"]},

      {type:"teach", trg:"uno", src:"one", pos:"num", gender:null,
       note:"Also works as the indefinite article: un/uno/una/un'.\nChanges form before certain consonants.",
       example:"A: Quanti caffe?\nB: Uno, per favore.",
       exampleSrc:"A: How many coffees?\nB: One, please.",
       funFact:"Uno becomes 'un' before most masculine nouns, 'uno' before s+consonant or z, 'una' before feminine nouns, and 'un'' before feminine vowels. Four forms for one word!"},

      {type:"teach", trg:"due", src:"two", pos:"num", gender:null,
       note:"Stays the same in all contexts. No changes.",
       example:"A: Quante persone?\nB: Due. Io e mia sorella.",
       exampleSrc:"A: How many people?\nB: Two. Me and my sister.",
       funFact:"Due comes from Latin 'duo.' English 'dual,' 'duet,' and 'duplicate' all share this root. The word has barely changed in 2,000 years."},

      {type:"teach", trg:"tre", src:"three", pos:"num", gender:null,
       note:"When added to compound numbers, the final e gets an accent: ventitRE, trentatRE.",
       example:"A: Quanti fratelli hai?\nB: Ho tre fratelli.",
       exampleSrc:"A: How many brothers do you have?\nB: I have three brothers.",
       funFact:"The accent on compound numbers with tre (ventitRE, trentatRE) is mandatory in writing. It shows that the stress falls on the final syllable."},

      {type:"teach", trg:"quattro", src:"four", pos:"num", gender:null,
       note:"From Latin 'quattuor.' The 'qu' pattern appears in many related words.",
       example:"A: Quante stagioni ci sono?\nB: Quattro: primavera, estate, autunno, inverno.",
       exampleSrc:"A: How many seasons are there?\nB: Four: spring, summer, autumn, winter.",
       funFact:"The Italian word for 'square' is 'quadrato' and for 'neighborhood' is 'quartiere.' Both come from the Latin root for four."},

      {type:"teach", trg:"cinque", src:"five", pos:"num", gender:null,
       note:"From Latin 'quinque.' Related to English 'quintet.'",
       example:"A: Quante dita hai su una mano?\nB: Cinque!",
       exampleSrc:"A: How many fingers do you have on one hand?\nB: Five!",
       funFact:"The Italian word for 500 is 'cinquecento,' which is also the name for the 1500s (the century of the Renaissance). The famous Fiat 500 car is also called 'Cinquecento.'"},

      {type:"teach", trg:"dieci", src:"ten", pos:"num", gender:null,
       note:"Base for teens: undici (11), dodici (12), tredici (13), etc.",
       example:"A: Quanto costa?\nB: Dieci euro.",
       exampleSrc:"A: How much does it cost?\nB: Ten euros.",
       funFact:"December used to be the tenth month in the Roman calendar (decem = ten). January and February were added later, pushing all the month numbers off by two."},

      {type:"teach", trg:"venti", src:"twenty", pos:"num", gender:null,
       note:"Base for 20s. Drops final vowel before uno/otto: ventuno, ventotto.",
       example:"A: Quanti studenti ci sono?\nB: Venti.",
       exampleSrc:"A: How many students are there?\nB: Twenty.",
       funFact:"Italian drops the final vowel of venti/trenta/etc. before uno and otto for smooth pronunciation: ventuno (not ventiuno), ventotto (not ventiotto). This is called 'elision.'"},

      {type:"teach", trg:"cento", src:"one hundred", pos:"num", gender:null,
       note:"Does not change in plural: duecento (200), trecento (300).",
       example:"A: Quanti chilometri da Roma a Firenze?\nB: Circa trecento.",
       exampleSrc:"A: How many kilometers from Rome to Florence?\nB: About three hundred.",
       funFact:"The Italian centuries are named after their hundreds: il Trecento (1300s), il Quattrocento (1400s), il Cinquecento (1500s). This is unique to Italian culture."},

      {type:"teach", trg:"mille", src:"one thousand", pos:"num", gender:null,
       note:"Irregular plural: mille (1,000) but duemila (2,000).\nNote: mille becomes mila in compounds.",
       example:"A: Quanto costa l'affitto?\nB: Mille euro al mese.",
       exampleSrc:"A: How much is the rent?\nB: A thousand euros per month.",
       funFact:"'Grazie mille' (a thousand thanks) uses the singular mille. For the year 2000, Italians say 'Duemila' with the irregular plural mila."},

      // Quiz steps
      {type:"mc", q:"Come si dice '5' in italiano?",
       opts:["Cinque","Quattro","Sei","Tre"],
       ans:"Cinque",
       hint:"This number comes from the Latin 'quinque.' Think of the English word 'quintet' (a group of five)."},

      {type:"fb", s:"Vorrei {1} caffe, per favore.",
       a:["due"],
       opts:["due","uno","tre","quattro"],
       hint:"You want a pair of coffees. This is the number that comes right after one.",
       sSrc:"I would like {1} coffees, please."},

      {type:"match", pairs:[
        {trg:"Uno", src:"One"},
        {trg:"Dieci", src:"Ten"},
        {trg:"Venti", src:"Twenty"},
        {trg:"Cento", src:"Hundred"}
      ]},

      {type:"mc", q:"Qual e il plurale di 'mille'?",
       opts:["duemille","duemila","duecento","millioni"],
       ans:"duemila",
       hint:"This is an irregular plural. The ending changes from -e to -a when combined with other numbers."},

      {type:"fb", s:"Ci sono {1} stagioni: primavera, estate, autunno e inverno.",
       a:["quattro"],
       opts:["quattro","tre","cinque","due"],
       hint:"Count the seasons listed in the sentence. Spring, summer, autumn, and winter.",
       sSrc:"There are {1} seasons: spring, summer, autumn, and winter."},
    ]},

    {id:"itv2_u2l2", title:"I giorni della settimana", icon:"📅", xp:15, board:true, steps:[
      {type:"intro", title:"I giorni della settimana",
       desc:"Learn the days of the week and how to talk about your weekly schedule in Italian.",
       goals:["Name all seven days of the week","Talk about daily activities","Use time expressions with days"]},

      {type:"teach", trg:"lunedi", src:"Monday", pos:"noun", gender:"m",
       note:"From Luna (Moon). Moon's day. All Italian days are masculine.\nNot capitalized in Italian.",
       example:"A: Che giorno e oggi?\nB: Oggi e lunedi.",
       exampleSrc:"A: What day is today?\nB: Today is Monday.",
       funFact:"Five Italian weekdays come from planets/gods: lunedi (Moon), martedi (Mars), mercoledi (Mercury), giovedi (Jupiter), venerdi (Venus). The same as French and Spanish."},

      {type:"teach", trg:"martedi", src:"Tuesday", pos:"noun", gender:"m",
       note:"From Marte (Mars). The god of war's day.",
       example:"A: Quando e la riunione?\nB: Martedi mattina, alle dieci.",
       exampleSrc:"A: When is the meeting?\nB: Tuesday morning, at ten.",
       funFact:"In Italian, days of the week are NOT capitalized (unlike English). You write 'lunedi' not 'Lunedi.' They are only capitalized at the start of a sentence."},

      {type:"teach", trg:"mercoledi", src:"Wednesday", pos:"noun", gender:"m",
       note:"From Mercurio (Mercury). The messenger god's day.",
       example:"A: Mercoledi sera sei libero?\nB: Si, possiamo uscire.",
       exampleSrc:"A: Are you free Wednesday evening?\nB: Yes, we can go out.",
       funFact:"Mercury was the patron of merchants and travelers. The word 'mercato' (market) shares the same root. Wednesday = market day in ancient Rome."},

      {type:"teach", trg:"giovedi", src:"Thursday", pos:"noun", gender:"m",
       note:"From Giove (Jupiter/Jove). The king of gods' day.",
       example:"A: Il corso e il giovedi?\nB: Si, ogni giovedi alle tre.",
       exampleSrc:"A: Is the course on Thursdays?\nB: Yes, every Thursday at three.",
       funFact:"Adding 'il' before a day means 'every': 'il giovedi' = every Thursday, 'giovedi' = this Thursday. A tiny article makes a big difference."},

      {type:"teach", trg:"venerdi", src:"Friday", pos:"noun", gender:"m",
       note:"From Venere (Venus). The goddess of love's day.",
       example:"A: Finalmente venerdi!\nB: Si! Che programmi hai per il weekend?",
       exampleSrc:"A: Finally Friday!\nB: Yes! What plans do you have for the weekend?",
       funFact:"Italians say 'TGIF' as 'finalmente venerdi!' or use the English phrase. The Italian work week traditionally runs Monday to Friday, but many shops close on Monday mornings instead."},

      {type:"teach", trg:"sabato", src:"Saturday", pos:"noun", gender:"m",
       note:"From Hebrew 'Shabbat' (rest day). Different origin from other days.",
       example:"A: Cosa fai sabato?\nB: Vado al mercato la mattina.",
       exampleSrc:"A: What are you doing Saturday?\nB: I'm going to the market in the morning.",
       funFact:"Unlike the other days which come from Roman gods, sabato comes from the Jewish Sabbath. This Hebrew influence came through Christianity to Italian."},

      {type:"teach", trg:"domenica", src:"Sunday", pos:"noun", gender:"f",
       note:"From Dominus (Lord). The Lord's day. The ONLY feminine day.",
       example:"A: La domenica i negozi sono aperti?\nB: Alcuni si, altri no.",
       exampleSrc:"A: On Sundays are the shops open?\nB: Some yes, others no.",
       funFact:"Domenica is the only feminine day of the week (la domenica, not il domenica). It comes from 'dies Dominica' (day of the Lord). This is why it uses 'la' instead of 'il.'"},

      {type:"teach", trg:"oggi", src:"today", pos:"adv", gender:null,
       note:"One of the most used time words. From Latin 'hodie' (this day).",
       example:"A: Che giorno e oggi?\nB: Oggi e mercoledi.",
       exampleSrc:"A: What day is today?\nB: Today is Wednesday.",
       funFact:"From Latin 'hoc die' (on this day), contracted to 'hodie,' then to Italian 'oggi.' French 'aujourd'hui' is even more redundant: it means 'on the day of this day.'"},

      {type:"teach", trg:"domani", src:"tomorrow", pos:"adv", gender:null,
       note:"From Latin 'de mane' (in the morning). The morning = the next day.",
       example:"A: Quando parti?\nB: Domani mattina presto.",
       exampleSrc:"A: When do you leave?\nB: Tomorrow morning early.",
       funFact:"'Dopodomani' means 'the day after tomorrow' (dopo + domani). Italian is more efficient than English here: one word instead of five."},

      {type:"teach", trg:"ieri", src:"yesterday", pos:"adv", gender:null,
       note:"From Latin 'heri.' Short and simple.",
       example:"A: Com'era il tempo ieri?\nB: Ieri pioveva tutto il giorno.",
       exampleSrc:"A: How was the weather yesterday?\nB: Yesterday it rained all day.",
       funFact:"'L'altro ieri' means 'the day before yesterday.' Like dopodomani, Italian compresses what English needs a full phrase for."},

      // Quiz steps
      {type:"mc", q:"Quale giorno viene da Venere (Venus)?",
       opts:["Venerdi","Giovedi","Martedi","Sabato"],
       ans:"Venerdi",
       hint:"The goddess of love gives her name to the fifth day of the work week. Think of the planet between Earth and Mercury."},

      {type:"fb", s:"Che giorno e {1}?",
       a:["oggi"],
       opts:["oggi","domani","ieri","sempre"],
       hint:"You are asking about the current day, right now. Not the past, not the future.",
       sSrc:"What day is it {1}?"},

      {type:"match", pairs:[
        {trg:"Lunedi", src:"Monday"},
        {trg:"Mercoledi", src:"Wednesday"},
        {trg:"Sabato", src:"Saturday"},
        {trg:"Domenica", src:"Sunday"}
      ]},

      {type:"mc", q:"Quale giorno della settimana e femminile?",
       opts:["Sabato","Domenica","Lunedi","Venerdi"],
       ans:"Domenica",
       hint:"Six days use 'il' (masculine). Only one day uses 'la.' It is the day of the Lord."},

      {type:"fb", s:"Parto {1} mattina presto.",
       a:["domani"],
       opts:["domani","ieri","oggi","sempre"],
       hint:"You are leaving in the morning of the next day. The day that comes after today.",
       sSrc:"I leave {1} morning early."},
    ]},
    EXP_02_L1, EXP_02_L2, EXP_02_L3,
  ]
};

export default UNIT_02;
