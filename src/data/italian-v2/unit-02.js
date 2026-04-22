// Italian V2 Unit 02. Numbers, Days & Time (A1.1)
import BATCH8_L1 from './_batch8_u02_L01.js';
import BATCH7_L1 from './_batch7_u02_L01.js';
import BATCH6_L1 from './_batch6_u02_L01.js';
import BATCH4_L02 from './_batch4_u02_L02.js';
import BATCH4_L01 from './_batch4_u02_L01.js';
import BATCH2_L02 from './_batch2_u02_L02.js';
import BATCH2_L01 from './_batch2_u02_L01.js';
// CILS/CELI A1 aligned.
import EXP_02_L1 from './_temp_u02_expand_L01.js';import EXP_02_L2 from './_temp_u02_expand_L02.js';import EXP_02_L3 from './_temp_u02_expand_L03.js';

import COVERAGE_U02 from './_coverage_u02.js';
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
{type:"match",pairs:[{trg:"due",src:"two"},{trg:"tre",src:"three"},{trg:"quattro",src:"four"},{trg:"cinque",src:"five"}]},

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

      {type:"tip", title:"Asking Questions in Italian",
       text:"Italian questions are simpler than English: just raise your intonation. No do/does needed.\n\nParli italiano? (Do you speak Italian?) — same word order, different intonation.\n\nQuestion words:\nChi? — Who? Chi e? (Who is it?)\nChe cosa? / Cosa? — What? Cosa fai? (What are you doing?)\nDove? — Where? Dove abiti? (Where do you live?)\nQuando? — When? Quando parti? (When do you leave?)\nPerche? — Why? Also means 'because' in answers.\nCome? — How? Come stai? (How are you?)\nQuanto/a? — How much? Quanto costa? (How much does it cost?)\nQuali/Quale? — Which? Quale preferisci?\n\nNote: perche means both 'why' and 'because' depending on position.",
       icon:"💡",
       deepDive:{title:"Question formation and word order",
        text:"Italian does not invert subject and verb for questions the way English does. 'Parli italiano?' and 'Tu parli italiano?' are both correct questions. The question mark at the end (or rising intonation in speech) is what signals a question. More formal or precise questions use a question word at the start: 'Dove abiti?' (Where do you live?). With 'perche,' the same word serves as both the question (perche studi?) and the connector in the answer (perche voglio imparare). French works the same way: pourquoi/parce que. Italian keeps it simpler with one word."}},

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
{type:"match",pairs:[{trg:"martedi",src:"Tuesday"},{trg:"mercoledi",src:"Wednesday"},{trg:"giovedi",src:"Thursday"},{trg:"venerdi",src:"Friday"}]},

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
{type:"match",pairs:[{trg:"domenica",src:"Sunday"},{trg:"oggi",src:"today"},{trg:"domani",src:"tomorrow"},{trg:"ieri",src:"yesterday"}]},

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
    {id:"itv2_u2l_form", title:"Compilare un modulo", icon:"📝", xp:15, board:true, steps:[
      {type:"intro", title:"Filling Out Forms",
       desc:"Learn to read and fill out basic forms in Italian: name, address, phone, email. Essential for hotel check-in, CILS exams, and official documents.",
       goals:["Read basic form fields","Fill in personal details","Write a simple formal message greeting"]},

      {type:"teach", trg:"il nome", src:"the first name", pos:"noun", gender:"m",
       note:"Masculine. Plural: i nomi.\n'Qual e il tuo nome?' = What is your first name?",
       example:"A: Come si chiama?\nB: Il mio nome e Marco.",
       exampleSrc:"A: What is your name?\nB: My first name is Marco.",
       funFact:"In Italy, a person's legal name on official documents is written as COGNOME (surname) first, then nome. Forms always ask for them separately, which surprises many visitors."},

      {type:"teach", trg:"il cognome", src:"the surname / last name", pos:"noun", gender:"m",
       note:"Masculine. Plural: i cognomi.\nAlways listed before nome on Italian official forms.",
       example:"A: Qual e il suo cognome?\nB: Il mio cognome e Rossi.",
       exampleSrc:"A: What is your surname?\nB: My surname is Rossi.",
       funFact:"Rossi (from rosso, red) is the most common Italian surname, like Smith in English. It originally described people with red hair. About 350,000 Italians share this name."},

      {type:"teach", trg:"l'indirizzo", src:"the address", pos:"noun", gender:"m",
       note:"Masculine. Uses l' before vowel. Plural: gli indirizzi.\n'Qual e il suo indirizzo?' = What is your address?",
       example:"A: Mi puo dare il suo indirizzo?\nB: Si, il mio indirizzo e Via Roma, tre.",
       exampleSrc:"A: Can you give me your address?\nB: Yes, my address is 3 Via Roma.",
       funFact:"Italian addresses follow this order: Via (street) + name + number: 'Via Garibaldi, 7.' The house number comes AFTER the street name, opposite to English. Many Italian streets are named after historical figures."},

      {type:"teach", trg:"il numero di telefono", src:"the phone number", pos:"noun", gender:"m",
       note:"Compound noun. Masculine. Often shortened to 'il numero' in speech.\n'Qual e il tuo numero di telefono?' = What is your phone number?",
       example:"A: Qual e il suo numero di telefono?\nB: Il mio numero e tre tre tre, cinque sei sette.",
       exampleSrc:"A: What is your phone number?\nB: My number is 333, 567.",
       funFact:"Italian mobile numbers always start with 3. Landlines start with 0 followed by the city code: 06 for Rome, 02 for Milan. You read phone numbers as individual digits or in pairs."},

      {type:"teach", trg:"l'e-mail", src:"the email address", pos:"noun", gender:"f",
       note:"Feminine. Uses l' before vowel. From English.\nAlso: 'l'indirizzo e-mail' (full form on forms).",
       example:"A: Qual e la sua e-mail?\nB: La mia e-mail e marco.rossi@esempio.it.",
       exampleSrc:"A: What is your email address?\nB: My email is marco.rossi@esempio.it.",
       funFact:"The @ symbol is called 'la chiocciola' (the snail) in Italian, because of its spiral shape. French calls it the same. The word is far more poetic than the English 'at sign.'"},

      {type:"teach", trg:"la data di nascita", src:"the date of birth", pos:"noun", gender:"f",
       note:"Compound noun. Feminine. di nascita = of birth.\nOn forms: written day/month/year: 15/07/1990.",
       example:"A: Qual e la sua data di nascita?\nB: La mia data di nascita e il cinque marzo.",
       exampleSrc:"A: What is your date of birth?\nB: My date of birth is the fifth of March.",
       funFact:"Italians write dates as DD/MM/YYYY, not MM/DD/YYYY like Americans. The fifth of March is 05/03, not 03/05. This confusion has caused many missed appointments for American visitors."},

      {type:"teach", trg:"Egregio / Gentile", src:"Dear (formal letter greeting)", pos:"intj", gender:null,
       note:"Egregio (m) / Egregi (pl) = most formal (rarely used now).\nGentile (m/f) / Gentili (pl) = standard formal in modern Italian.\nAlways followed by title + name: Gentile Signora Rossi.",
       example:"A: Gentile Signora Rossi, buongiorno.\nB: Buongiorno. Prego, si accomodi.",
       exampleSrc:"A: Dear Ms. Rossi, good morning.\nB: Good morning. Please, have a seat.",
       funFact:"Egregio literally means 'distinguished from the flock' (e + grege = out of the herd). It sounds archaic today. Gentile, meaning 'kind/gentle,' is the standard for modern business emails and official letters."},

      {type:"tip", title:"Form fields in Italian",
       text:"When filling out an Italian form (un modulo), you will see these standard fields:\n\nNome: first name\nCognome: surname\nIndirizzo: address\nNumero di telefono: phone number\nE-mail: email address\nData di nascita: date of birth\nFirma: signature\n\nForms always ask for COGNOME first, then NOME. Italian dates use DD/MM/YYYY format.\n\nUseful phrases:\nCan you fill out the form? Puo compilare il modulo?\nWhere do I sign? Dove devo firmare?\nIn block letters, please. In stampatello, per favore.",
       icon:"📝",
       deepDive:{title:"Formal and informal registers in Italian writing",
        text:"Italian has a clear split between formal and informal writing. In formal letters and emails, use Gentile + title + surname to open, and Cordiali saluti (kind regards) or Distinti saluti (distinguished regards) to close. In informal messages between friends, start with Ciao and sign off with A presto (see you soon) or Un abbraccio (a hug). Business Italian uses Lei (capitalized) for the formal 'you,' even in emails. Using tu in a formal email is considered rude. The shift from formal to informal is usually proposed by the older or senior person in a relationship."}},

      {type:"fb", s:"Il mio {1} e Marco.",
       a:["nome"],
       opts:["nome","cognome","indirizzo","numero"],
       hint:"This is your given name, not your family name. The field for it always comes second on Italian forms.",
       sSrc:"My {1} is Marco."},

      {type:"fb", s:"Il mio {1} e Via Roma, tre.",
       a:["indirizzo"],
       opts:["indirizzo","cognome","nome","numero"],
       hint:"This is where you live. Italian addresses start with Via (street) followed by the name and house number.",
       sSrc:"My {1} is 3 Via Roma."},

      {type:"mc", q:"How does a standard formal Italian email begin?",
       opts:["Gentile Signora Rossi,","Ciao Signora Rossi,","Ehi Signora Rossi,","Buongiorno Rossi,"],
       ans:"Gentile Signora Rossi,",
       hint:"The modern formal greeting means 'kind/gentle.' It is used for business emails and official letters in current Italian."},

      {type:"match", pairs:[
        {trg:"il nome", src:"first name"},
        {trg:"il cognome", src:"surname"},
        {trg:"l'indirizzo", src:"address"},
        {trg:"la data di nascita", src:"date of birth"}
      ]},

      {type:"fb", s:"Qual e la sua {1} di nascita?",
       a:["data"],
       opts:["data","nome","numero","firma"],
       hint:"You are asking when someone was born. Italian dates go day/month/year.",
       sSrc:"What is your {1} of birth?"},

      {type:"mc", q:"What is the Italian term for the @ symbol?",
       opts:["la chiocciola","il punto","la virgola","il trattino"],
       ans:"la chiocciola",
       hint:"This symbol is named after a small garden creature with a spiral shell. Much more poetic than the English name."},

      {type:"fb", s:"La mia {1} e marco.rossi@esempio.it.",
       a:["e-mail"],
       opts:["e-mail","firma","data","indirizzo"],
       hint:"This is the electronic contact field on a form. It always contains the snail symbol.",
       sSrc:"My {1} is marco.rossi@esempio.it."},

      {type:"mc", q:"On Italian official forms, which name field comes FIRST?",
       opts:["Il cognome (surname)","Il nome (first name)","La firma (signature)","La data (date)"],
       ans:"Il cognome (surname)",
       hint:"Italian forms reverse the English order. The family name appears before the given name on all official documents."},
    ]},
    EXP_02_L1, EXP_02_L2, EXP_02_L3,

    {id:"itv2_u2l_essential_a1", title:"Pronomi, verbi e aggettivi", icon:"🗣️", xp:20, board:true, steps:[
      {type:"intro", title:"Pronouns, Verbs & Adjectives",
       desc:"Learn the remaining subject pronouns, two essential -are verbs, three key adjectives, and one very common word for university.",
       goals:["Use all Italian subject pronouns","Conjugate lavorare and parlare","Describe things as easy, difficult, or interesting","Talk about university life","Use forse to express maybe"]},

      {type:"teach", trg:"lui", src:"he", pos:"pron", gender:null,
       note:"Third-person singular masculine subject pronoun.\nItalian often drops subject pronouns, but 'lui' is used for contrast or emphasis.",
       example:"A: Chi parla italiano?\nB: Lui parla italiano. Io parlo inglese.",
       exampleSrc:"A: Who speaks Italian?\nB: He speaks Italian. I speak English.",
       funFact:"In older Italian, 'egli' was the formal word for 'he,' but modern spoken Italian almost universally uses 'lui' instead. You will only see 'egli' in classical literature today."},

      {type:"teach", trg:"voi", src:"you (plural)", pos:"pron", gender:null,
       note:"Second-person plural pronoun. Used when addressing two or more people informally.\nVoi form for -are verbs ends in -ate: voi lavorate, voi parlate.",
       example:"A: Voi parlate italiano?\nB: Si, studiamo italiano da tre mesi.",
       exampleSrc:"A: Do you (all) speak Italian?\nB: Yes, we have been studying Italian for three months.",
       funFact:"In southern Italy, 'voi' was historically used as a formal singular address (like vous in French), but this usage has faded. Today standard Italian uses 'Lei' for formal singular."},

      {type:"teach", trg:"loro", src:"they / them", pos:"pron", gender:null,
       note:"Third-person plural pronoun for any gender mix.\nAs a subject: loro lavorano. As an object: parlo con loro (I speak with them).",
       example:"A: Dove lavorano Marco e Anna?\nB: Loro lavorano a Roma. E molto interessante.",
       exampleSrc:"A: Where do Marco and Anna work?\nB: They work in Rome. It is very interesting.",
       funFact:"'Loro' is both subject (they) and object (them/their) in Italian. It is also the word for 'gold' in some contexts, from Latin 'aurum' via a different path. Context always clarifies which meaning is intended."},

      {type:"teach", trg:"lavorare", src:"to work", pos:"verb", gender:null,
       note:"Regular -are verb. Io lavoro, tu lavori, lui/lei lavora, noi lavoriamo, voi lavorate, loro lavorano.\nUse: lavorare in/per/con (work at/for/with).",
       example:"A: Dove lavori?\nB: Lavoro in un ufficio. E tu?\nA: Io studio. Non lavoro ancora.",
       exampleSrc:"A: Where do you work?\nB: I work in an office. And you?\nA: I study. I don't work yet.",
       funFact:"From Latin 'laborare.' The same root gives English 'labor,' 'laboratory,' and 'elaborate.' In Italian, 'lavoro' (the noun) is one of the 100 most frequently used words in the language."},

      {type:"teach", trg:"parlare", src:"to speak / to talk", pos:"verb", gender:null,
       note:"Regular -are verb. Io parlo, tu parli, lui/lei parla, noi parliamo, voi parlate, loro parlano.\nUse: parlare italiano / parlare con qualcuno (talk to someone).",
       example:"A: Parli italiano bene!\nB: Grazie! Studio italiano da tre mesi.",
       exampleSrc:"A: You speak Italian well!\nB: Thank you! I have been studying Italian for three months.",
       funFact:"'Parlare' comes from Late Latin 'parabolare,' meaning to speak in parables. The same root gives French 'parler' and Spanish 'hablar' (via a different path). Italian and French kept the Latin form almost intact."},

      {type:"tip", title:"Italian Subject Pronouns: Optional but Useful",
       text:"Italian is a pro-drop language: the verb ending already shows who is acting.\nio parlo — I speak (the -o tells you it's io)\nlui parla — he speaks (the -a tells you it's lei/lui)\n\nSo Italians often drop the pronoun:\nParli italiano? (Do you speak Italian?) — the -i ending = tu.\n\nUse the pronoun when you want to:\n- Contrast: Io lavoro, lui studia. (I work, HE studies.)\n- Clarify: Lei parla inglese? (Does SHE speak English?)\n- Emphasize: Voi lavorare molto! (YOU all work a lot!)\n\nKey pronoun summary:\nio — I | tu — you (sing.) | lui — he | lei — she\nnoi — we | voi — you (pl.) | loro — they",
       icon:"💡",
       deepDive:{title:"When to use subject pronouns in Italian",
        text:"In languages like Spanish, French, and Italian (called pro-drop languages), subject pronouns are optional because the verb conjugation encodes the subject. Italian verbs have six distinct endings for the six persons, making the pronoun redundant. However, pronouns appear in three situations: (1) Contrastive focus: 'Io lavoro, tu studi' — the contrast is the whole point. (2) Disambiguation: 'lui parla' vs. 'lei parla' both share the -a ending, so the pronoun clarifies gender. (3) Formal contexts: written Italian and careful speech retain pronouns more often. The pronoun 'loro' for third-person plural is increasingly replaced by 'loro lavorano' being shortened to just the conjugated verb in casual speech."}},

      {type:"teach", trg:"facile", src:"easy", pos:"adj", gender:null,
       note:"Adjective ending in -e: same form for masculine and feminine singular.\nFacile/facile (m./f. sing.) — facili/facili (m./f. pl.).",
       example:"A: E difficile parlare italiano?\nB: No, e facile! Le parole sono interessanti.",
       exampleSrc:"A: Is it difficult to speak Italian?\nB: No, it is easy! The words are interesting.",
       funFact:"Italian adjectives ending in -e (not -o/-a) are invariable for gender: un libro facile, una lezione facile. Only the plural changes: libri facili, lezioni facili. This is one of the few places Italian grammar is simpler than Spanish."},

      {type:"teach", trg:"difficile", src:"difficult", pos:"adj", gender:null,
       note:"Opposite of facile. Same -e ending rule: invariable for gender in singular.\nNote: in Italian, 'difficile' sounds more neutral than in English; use it freely.",
       example:"A: Il cinese e difficile?\nB: Si, e molto difficile. Ma e anche molto interessante.",
       exampleSrc:"A: Is Chinese difficult?\nB: Yes, it is very difficult. But it is also very interesting.",
       funFact:"'Difficile' comes from Latin 'difficilis' (not easy). The prefix 'dis-' + 'facilis' (easy). The same logic as English 'difficult' from 'dis-' + 'facilis.' Both English and Italian built the opposite of 'easy' the same way."},

      {type:"teach", trg:"interessante", src:"interesting", pos:"adj", gender:null,
       note:"Adjective ending in -e: same for m./f. singular. Plural: interessanti.\nVery common in conversation: e interessante! (how interesting!)",
       example:"A: Come e il corso di italiano?\nB: E molto interessante e non troppo difficile.",
       exampleSrc:"A: How is the Italian course?\nB: It is very interesting and not too difficult.",
       funFact:"This word is a transparent cognate with English 'interesting,' French 'intéressant,' and Spanish 'interesante.' It comes from Latin 'interesse' (to be between, to matter). Italian learners get this one for free from day one."},

      {type:"teach", trg:"l'università", src:"university", pos:"noun", gender:"f",
       note:"Feminine noun. The article contracts before vowels: l'università (not la università).\nAt university = all'università. I study at university = Studio all'università.",
       example:"A: Dove studi?\nB: Studio all'università. E facile?\nA: No, e molto difficile ma interessante.",
       exampleSrc:"A: Where do you study?\nB: I study at university. Is it easy?\nA: No, it is very difficult but interesting.",
       funFact:"The word comes from Latin 'universitas,' meaning a whole community or guild. Medieval European universities (Bologna in 1088, Oxford in 1096) used this term for their communities of scholars. Italian 'università' still carries that ancient communal meaning."},

      {type:"teach", trg:"forse", src:"maybe / perhaps", pos:"adv", gender:null,
       note:"Invariable adverb. Placed at start or mid-sentence.\nForse + present tense = maybe it is so. Forse + future = maybe it will happen.",
       example:"A: Lui lavora all'università?\nB: Forse. Non sono sicuro.",
       exampleSrc:"A: Does he work at the university?\nB: Maybe. I am not sure.",
       funFact:"'Forse' comes from Latin 'forsitan' (perhaps, it may be). In formal or literary Italian, you might see 'forse' doubled for emphasis — 'forse forse' — meaning 'quite possibly' or 'I really think so, but I'm not sure.' Very expressive!"},

      {type:"mc", q:"Come si dice 'he' in italiano?",
       opts:["lui","voi","loro","io"],
       ans:"lui",
       hint:"This pronoun refers to a single male person. It shares its first letter with the English word 'him.'"},

      {type:"mc", q:"Which pronoun means 'you (plural)' when addressing a group?",
       opts:["voi","loro","lui","si"],
       ans:"voi",
       hint:"This is the pronoun used to address multiple people informally. In Italian restaurants, the server uses this when talking to a table of guests."},

      {type:"fb", s:"Marco e Anna lavorano a Milano. {1} sono ingegneri.",
       a:["Loro"],
       opts:["Loro","Voi","Lui","Io"],
       hint:"Marco and Anna are two people being described. You need the third-person plural subject pronoun.",
       sSrc:"Marco and Anna work in Milan. {1} are engineers."},

      {type:"match", pairs:[
        {trg:"lui", src:"he"},
        {trg:"voi", src:"you (plural)"},
        {trg:"loro", src:"they"},
        {trg:"forse", src:"maybe / perhaps"}
      ]},

      {type:"fb", s:"Io {1} italiano. E tu?",
       a:["parlo"],
       opts:["parlo","parli","parla","parlate"],
       hint:"Fill in the correct form of parlare for the first-person singular (io). Regular -are verbs drop -are and add -o for io.",
       sSrc:"I {1} Italian. And you?"},

      {type:"fb", s:"Loro {1} all'università.",
       a:["lavorano"],
       opts:["lavorano","lavoro","lavori","lavorate"],
       hint:"Use the correct form of lavorare for loro (they). Regular -are verbs add -ano for the third-person plural.",
       sSrc:"They {1} at the university."},

      {type:"mc", q:"Which Italian adjective means 'easy'?",
       opts:["facile","difficile","interessante","bene"],
       ans:"facile",
       hint:"Think of 'facility' in English, meaning ease or the ability to do something without effort. Same Latin root."},

      {type:"mc", q:"How does the adjective 'interessante' change for a feminine noun?",
       opts:["It stays the same (interessante)","It becomes interessanta","It becomes interessanti","It becomes interessa"],
       ans:"It stays the same (interessante)",
       hint:"Italian adjectives ending in -e are invariable for gender in the singular. Only the plural form changes. Think of the -e class: one form covers both masculine and feminine."},

      {type:"drag_fill",
       s:"L'italiano e {interessante} ma non e {difficile}.",
       blanks:{"interessante":"interesting","difficile":"difficult"},
       pool:["interessante","difficile","facile","bello"],
       hint:"Drag the two adjectives into the correct blanks. One means engaging; the other means hard.",
       sSrc:"Italian is [interesting] but it is not [difficult]."},

      {type:"match", pairs:[
        {trg:"lavorare", src:"to work"},
        {trg:"parlare", src:"to speak / to talk"},
        {trg:"l'università", src:"university"},
        {trg:"interessante", src:"interesting"}
      ]},

      {type:"mc", q:"What is the Italian word for 'university'?",
       opts:["l'università","la scuola","il lavoro","l'ufficio"],
       ans:"l'università",
       hint:"This Italian word is a near-perfect cognate with English. It begins with a vowel, so the article contracts to l'."},

      {type:"fb", s:"Voi {1} italiano bene!",
       a:["parlate"],
       opts:["parlate","parla","parliamo","parlo"],
       hint:"You are addressing a group (voi). For regular -are verbs, the second-person plural ending is -ate. Count the other options: -o is first person, -a is third singular, -iamo is first plural.",
       sSrc:"You (all) {1} Italian well!"},

      {type:"mc", q:"How do you say 'maybe' in Italian?",
       opts:["forse","bene","anche","molto"],
       ans:"forse",
       hint:"This adverb expresses uncertainty. It is placed at the beginning or middle of a sentence. Think of 'perhaps' and its role in conversation."},
    ]},
  
  BATCH8_L1,
  BATCH7_L1,
  BATCH6_L1,
  BATCH4_L02,
  BATCH4_L01,
  BATCH2_L02,
  BATCH2_L01
, COVERAGE_U02]
};

export default UNIT_02;
