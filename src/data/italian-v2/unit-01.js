// Italian V2 Unit 01. Greetings & Basics (A1.1)
import BATCH8_L1 from './_batch8_u01_L01.js';
import BATCH7_L1 from './_batch7_u01_L01.js';
import BATCH6_L1 from './_batch6_u01_L01.js';
import BATCH4_L02 from './_batch4_u01_L02.js';
import BATCH4_L01 from './_batch4_u01_L01.js';
import BATCH2_L02 from './_batch2_u01_L02.js';
import BATCH2_L01 from './_batch2_u01_L01.js';
// First Italian content unit. CILS/CELI A1 aligned.
import EXP_L1 from './_temp_u01_expand_L01.js';
import EXP_L2 from './_temp_u01_expand_L02.js';
import EXP_L3 from './_temp_u01_expand_L03.js';

import COVERAGE_U01 from './_coverage_u01.js';
const UNIT_01 = {
  n:1, lang:"it", srcLang:"en", track:"v2",
  title:"Ciao!", sub:"Greetings & Introductions",
  icon:"👋", level:"A1.1", color:"#7B5EE8",
  lessons:[
    {id:"itv2_u1l1", title:"Saluti", icon:"👋", xp:15, board:true, steps:[
      {type:"intro", title:"Saluti",
       desc:"Learn the most common Italian greetings and how to say hello and goodbye in different situations.",
       goals:["Greet people formally and informally","Say goodbye","Introduce yourself"]},

      {type:"teach", trg:"ciao", src:"hi / bye", pos:"intj", gender:null,
       note:"The most universal Italian greeting. Works for hello AND goodbye.",
       example:"A: Ciao, come stai?\nB: Ciao! Bene, grazie!",
       exampleSrc:"A: Hi, how are you?\nB: Hi! Good, thanks!",
       funFact:"From the Venetian dialect 's-ciao vostro' meaning 'I am your slave.' A humble greeting that became casual over centuries."},

      {type:"teach", trg:"buongiorno", src:"good morning / good day", pos:"intj", gender:null,
       note:"Formal greeting used until early afternoon.\nLiterally: buon (good) + giorno (day).",
       example:"A: Buongiorno, signora!\nB: Buongiorno! Come sta?",
       exampleSrc:"A: Good morning, ma'am!\nB: Good morning! How are you?",
       funFact:"Italians switch from buongiorno to buonasera around 3-5 PM, but the exact time varies by region. In the south, it happens earlier."},

      {type:"teach", trg:"buonasera", src:"good evening", pos:"intj", gender:null,
       note:"Formal greeting for afternoon and evening.\nLiterally: buona (good) + sera (evening).",
       example:"A: Buonasera, dottore.\nB: Buonasera! Prego, si accomodi.",
       exampleSrc:"A: Good evening, doctor.\nB: Good evening! Please, have a seat.",
       funFact:"In southern Italy, buonasera can start as early as 1 PM. In Milan, you might hear buongiorno until 5 PM. There is no national rule."},

      {type:"teach", trg:"arrivederci", src:"goodbye (formal)", pos:"intj", gender:null,
       note:"Formal goodbye. Use with strangers, elders, in shops.\nLiterally: a (to) + rivederci (see each other again).",
       example:"A: Grazie, arrivederci!\nB: Arrivederci, buona giornata!",
       exampleSrc:"A: Thank you, goodbye!\nB: Goodbye, have a nice day!",
       funFact:"The even more formal version is 'arrivederLa' (uppercase L), using the Lei form. You hear it in very formal contexts like business meetings."},

      {type:"teach", trg:"buonanotte", src:"good night", pos:"intj", gender:null,
       note:"Said when going to bed or leaving late at night.\nLiterally: buona (good) + notte (night).",
       example:"A: Vado a dormire. Buonanotte!\nB: Buonanotte! Sogni d'oro!",
       exampleSrc:"A: I'm going to sleep. Good night!\nB: Good night! Sweet dreams!",
       funFact:"'Sogni d'oro' (dreams of gold) is the Italian way to say 'sweet dreams.' Far more poetic than most languages."},
{type:"match",pairs:[{trg:"buongiorno",src:"good morning / good day"},{trg:"buonasera",src:"good evening"},{trg:"arrivederci",src:"goodbye (formal)"},{trg:"buonanotte",src:"good night"}]},

      {type:"teach", trg:"come stai?", src:"how are you? (informal)", pos:"verb", gender:null,
       note:"Informal. Use with friends, family, peers.\nStai = you are (tu form of stare).",
       example:"A: Ciao Marco! Come stai?\nB: Bene, e tu?",
       exampleSrc:"A: Hi Marco! How are you?\nB: Good, and you?",
       funFact:"Italian has TWO verbs for 'to be': essere (permanent traits) and stare (conditions/feelings). Come stai uses stare because it asks about a temporary state."},

      {type:"teach", trg:"come sta?", src:"how are you? (formal)", pos:"verb", gender:null,
       note:"Formal. Use with strangers, elders, professionals.\nSta = you are (Lei form of stare).",
       example:"A: Buongiorno, professore. Come sta?\nB: Bene, grazie. E Lei?",
       exampleSrc:"A: Good morning, professor. How are you?\nB: Good, thank you. And you?",
       funFact:"The formal 'Lei' (you) is always capitalized in writing. It literally means 'She' but is used for formal address regardless of gender. A remnant of Renaissance court language."},

      {type:"teach", trg:"bene", src:"well / good", pos:"adv", gender:null,
       note:"The standard positive response. Can be intensified: molto bene, benissimo.",
       example:"A: Come stai?\nB: Bene, grazie! E tu?\nA: Molto bene!",
       exampleSrc:"A: How are you?\nB: Good, thanks! And you?\nA: Very good!",
       funFact:"Italians love superlatives. 'Bene' becomes 'benissimo' (very well), following the -issimo pattern that works with almost any adjective."},

      {type:"teach", trg:"grazie", src:"thank you", pos:"intj", gender:null,
       note:"The most common way to say thanks. Add 'mille' for emphasis.",
       example:"A: Ecco il suo caffe.\nB: Grazie mille!\nA: Prego!",
       exampleSrc:"A: Here is your coffee.\nB: Thank you very much!\nA: You're welcome!",
       funFact:"'Grazie mille' literally means 'a thousand thanks.' For even more emphasis, Italians say 'grazie infinite' (infinite thanks)."},

      {type:"teach", trg:"prego", src:"you're welcome / please", pos:"intj", gender:null,
       note:"Response to grazie. Also means 'please' when offering something.\nAlso used to invite someone in or to sit down.",
       example:"A: Grazie per l'aiuto!\nB: Prego, di niente!",
       exampleSrc:"A: Thanks for the help!\nB: You're welcome, it's nothing!",
       funFact:"Prego has at least 5 uses: you're welcome, please (offering), go ahead, after you, and come in. Context tells you which meaning applies."},
{type:"match",pairs:[{trg:"come sta?",src:"how are you? (formal)"},{trg:"bene",src:"well / good"},{trg:"grazie",src:"thank you"},{trg:"prego",src:"you're welcome / please"}]},

      {type:"teach", trg:"per favore", src:"please", pos:"adv", gender:null,
       note:"Polite request word. Literally: per (for) + favore (favor).\nUsed when asking for something.",
       example:"A: Un caffe, per favore.\nB: Subito!",
       exampleSrc:"A: A coffee, please.\nB: Right away!",
       funFact:"In formal situations, Italians use 'per cortesia' (by courtesy) or 'per piacere' (for pleasure) instead. All three are correct but 'per favore' is most common."},

      {type:"teach", trg:"scusa", src:"excuse me / sorry (informal)", pos:"intj", gender:null,
       note:"Informal apology or attention-getter.\nFormal version: scusi (Lei form).",
       example:"A: Scusa, dov'e la stazione?\nB: Dritto e poi a destra.",
       exampleSrc:"A: Excuse me, where is the station?\nB: Straight and then right.",
       funFact:"Scusa comes from the Latin 'excusare' (to free from blame). The formal 'scusi' and the plural 'scusate' follow the same root."},

      {type:"teach", trg:"mi chiamo", src:"my name is", pos:"verb", gender:null,
       note:"Literally: mi (myself) + chiamo (I call).\nReflexive construction: 'I call myself...'",
       example:"A: Come ti chiami?\nB: Mi chiamo Lucia. E tu?\nA: Mi chiamo Marco.",
       exampleSrc:"A: What is your name?\nB: My name is Lucia. And you?\nA: My name is Marco.",
       funFact:"Italian uses a reflexive verb for names: chiamarsi (to call oneself). This is common in Romance languages. French says 'je m'appelle' with the same logic."},

      {type:"teach", trg:"piacere", src:"nice to meet you / pleasure", pos:"noun", gender:"m",
       note:"Said when meeting someone for the first time.\nLiterally: pleasure.",
       example:"A: Mi chiamo Anna. Piacere!\nB: Piacere mio! Sono Marco.",
       exampleSrc:"A: My name is Anna. Nice to meet you!\nB: The pleasure is mine! I'm Marco.",
       funFact:"The full formal phrase is 'piacere di conoscerLa' (pleasure to know you). In casual settings, just 'piacere' with a handshake is enough."},

      {type:"tip", title:"🎁 Italian cognates you already know", text:"Italian and English share thousands of Latinate words:\n\naction → azione\nuniversity → università\npossibility → possibilità\ninformation → informazione\nexactly → esattamente\nhistory → storia\n\nPattern 1: English -tion → Italian -zione\nPattern 2: English -ty → Italian -tà\nPattern 3: English -ly → Italian -mente\n\nYou already recognize thousands of Italian words. Don't memorize them. Notice the suffix swaps.", icon:"🎁", deepDive:{title:"Latin is the shared grandparent", text:"Italian descends directly from Latin. English absorbed Latinate vocabulary through the Norman conquest (1066) and later scholarly borrowing. The result: English has a Latinate half that IS Italian with suffix swaps.\n\n'Action' is azione. 'Possibility' is possibilità. 'Probably' is probabilmente. Once you know the three main patterns (-tion↔-zione, -ty↔-tà, -ly↔-mente), you unlock thousands of words with zero memorization.\n\nFalse-friend warning: 'fattoria' means 'farm', not 'factory'. 'educato' means 'polite', not 'educated'. Maybe 4% of cognates drift; the other 96% are reliable free vocabulary."}},

      {type:"tip", title:"Negation in Italian",
       text:"Italian negation is simple: place non before the verb.\n\nnon + verb:\nNon parlo tedesco. (I don't speak German.)\nNon ho fame. (I'm not hungry.)\n\nDouble negatives are CORRECT in Italian (unlike English):\nnon ... mai (never): Non vado mai al cinema.\nnon ... niente (nothing): Non ho niente.\nnon ... nessuno (nobody): Non conosco nessuno.\nnon ... ancora (not yet): Non e ancora arrivato.\n\nWithout non (at sentence start):\nNessuno lo sa. (Nobody knows.)\nNiente e impossibile. (Nothing is impossible.)",
       icon:"💡",
       deepDive:{title:"Why Italian double negatives are correct",
        text:"Italian grammar requires negative words (mai, niente, nessuno) to co-exist with non. This is called concord negation and is the original Latin pattern. English removed double negation in the 1700s for 'logical' reasons, but most of the world's languages use it. Italian non ... mai is exactly how Latin worked: non ... numquam. Think of it as non setting the negative frame, with the extra word reinforcing it."}},

      // Quiz steps
      {type:"mc", q:"Come si dice 'good morning' in italiano?",
       opts:["Buongiorno","Buonanotte","Arrivederci","Prego"],
       ans:"Buongiorno",
       hint:"This greeting is used from morning until early afternoon. It combines 'good' and 'day.'"},

      {type:"mc", q:"Quale saluto usi con gli amici?",
       opts:["Arrivederci","Ciao","Buonasera","Come sta?"],
       ans:"Ciao",
       hint:"The most casual, universal Italian greeting. Works for both hello and goodbye with friends."},

      {type:"fb", s:"Buongiorno! Come {1}?",
       a:["sta"],
       opts:["sta","stai","sono","sei"],
       hint:"This is the formal version. You are addressing someone with respect, using the Lei form.",
       sSrc:"Good morning! How {1} you? (formal)"},

      {type:"mc", q:"Cosa rispondi quando qualcuno dice 'grazie'?",
       opts:["Scusa","Bene","Prego","Ciao"],
       ans:"Prego",
       hint:"The standard Italian response to thanks. Also used when offering something or inviting someone in."},

      {type:"fb", s:"{1} chiamo Lucia.",
       a:["Mi"],
       opts:["Mi","Ti","Si","Ci"],
       hint:"The reflexive pronoun for 'I.' Literally: 'I call myself Lucia.'",
       sSrc:"{1} name is Lucia."},

      {type:"match", pairs:[
        {trg:"Ciao", src:"Hi / Bye"},
        {trg:"Grazie", src:"Thank you"},
        {trg:"Prego", src:"You're welcome"},
        {trg:"Piacere", src:"Nice to meet you"}
      ]},

      {type:"mc", q:"'Buonanotte' si dice quando...",
       opts:["ordini un caffe","arrivi al lavoro","incontri un amico","vai a dormire"],
       ans:"vai a dormire",
       hint:"This greeting involves nighttime. Think about when you would wish someone a good night."},

      {type:"fb", s:"Scusa, {1} la stazione?",
       a:["dov'e"],
       opts:["dov'e","come","quando","chi e"],
       hint:"You are asking about location. Which question word asks 'where is'?",
       sSrc:"Excuse me, {1} the station?"},
    ]},

    {id:"itv2_u1l2", title:"Io sono...", icon:"🪪", xp:15, board:true, steps:[
      {type:"intro", title:"Io sono...",
       desc:"Learn to talk about yourself: where you are from, what you do, and basic personal information.",
       goals:["Say where you are from","State your nationality","Talk about your job"]},

      {type:"teach", trg:"io", src:"I", pos:"pron", gender:null,
       note:"First person singular pronoun. Often dropped because verb endings already show the person.",
       example:"A: Chi sei?\nB: Io sono Marco. Sono italiano.",
       exampleSrc:"A: Who are you?\nB: I am Marco. I am Italian.",
       funFact:"In Italian, saying 'io' is optional and often emphatic. 'Sono italiano' (I'm Italian) is more natural than 'Io sono italiano' unless you want to stress 'I specifically.'"},

      {type:"teach", trg:"sono", src:"I am", pos:"verb", gender:null,
       note:"First person singular of essere (to be).\nThe most important verb form to learn first.",
       example:"A: Sei italiano?\nB: Si, sono italiano. Sono di Roma.",
       exampleSrc:"A: Are you Italian?\nB: Yes, I am Italian. I am from Rome.",
       funFact:"Essere and stare both translate to 'to be.' Use essere for identity, nationality, profession, origin. Use stare for health, feelings, location (temporary)."},

      {type:"teach", trg:"italiano", src:"Italian (m.)", pos:"adj", gender:"m",
       note:"Nationality adjective. Masculine: italiano. Feminine: italiana.\nAlso used as a noun for the language.",
       example:"A: Sei italiano?\nB: Si, sono italiano. Parlo italiano e inglese.",
       exampleSrc:"A: Are you Italian?\nB: Yes, I am Italian. I speak Italian and English.",
       funFact:"Italian nationality adjectives are NOT capitalized: 'sono italiano' not 'sono Italiano.' Only the language and country names get capitals: 'l'Italia', 'l'italiano' (the language)."},

      {type:"teach", trg:"di dove sei?", src:"where are you from? (informal)", pos:"verb", gender:null,
       note:"Informal question about origin. di (from) + dove (where) + sei (you are).",
       example:"A: Di dove sei?\nB: Sono di Milano. E tu?\nA: Sono di Londra.",
       exampleSrc:"A: Where are you from?\nB: I'm from Milan. And you?\nA: I'm from London.",
       funFact:"'Di dove sei?' is casual. The formal version is 'Di dov'e?' (where is he/she from?) using the Lei form indirectly. In very formal contexts: 'Da dove viene?'"},

      {type:"teach", trg:"si", src:"yes", pos:"part", gender:null,
       note:"Italian for yes. Always written with an accent: si (yes) vs si (oneself).",
       example:"A: Parli italiano?\nB: Si, un po'!\nA: Bravissimo!",
       exampleSrc:"A: Do you speak Italian?\nB: Yes, a little!\nA: Very good!",
       funFact:"The accent on 'si' distinguishes it from the reflexive 'si' (oneself). Without the accent, 'si' means 'one/oneself': 'si dice' (one says / it is said)."},
{type:"match",pairs:[{trg:"sono",src:"I am"},{trg:"italiano",src:"Italian (m.)"},{trg:"di dove sei?",src:"where are you from? (informal)"},{trg:"si",src:"yes"}]},

      {type:"teach", trg:"no", src:"no", pos:"part", gender:null,
       note:"Same as English. Can be softened: 'no, grazie' (no, thank you).",
       example:"A: Sei tedesco?\nB: No, sono inglese.\nA: Ah, parli bene italiano!",
       exampleSrc:"A: Are you German?\nB: No, I am English.\nA: Ah, you speak Italian well!",
       funFact:"Italians often soften 'no' with gestures and tone. A common polite refusal is 'no, grazie, va bene cosi' (no thanks, it's fine like this)."},

      {type:"teach", trg:"parlo", src:"I speak", pos:"verb", gender:null,
       note:"First person singular of parlare (to speak). An -are verb.",
       example:"A: Che lingue parli?\nB: Parlo italiano e un po' di inglese.",
       exampleSrc:"A: What languages do you speak?\nB: I speak Italian and a little English.",
       funFact:"Parlare comes from Latin 'parabolare' (to tell stories), from the Greek 'parabole' (parable). Speaking was literally telling parables."},

      {type:"teach", trg:"un po'", src:"a little / a bit", pos:"adv", gender:null,
       note:"Very common expression. po' is short for poco (little). The apostrophe marks the dropped letters.",
       example:"A: Parli francese?\nB: Si, un po'. Studio da tre mesi.",
       exampleSrc:"A: Do you speak French?\nB: Yes, a little. I've been studying for three months.",
       funFact:"The apostrophe in po' is crucial. It is an apocope (word shortening), not an accent. Writing 'po' without the apostrophe is a common error even among Italians."},

      {type:"teach", trg:"lavoro", src:"I work / job", pos:"noun", gender:"m",
       note:"As a noun: il lavoro (the job/work). As a verb: io lavoro (I work).\nContext tells which meaning.",
       example:"A: Che lavoro fai?\nB: Sono insegnante. Lavoro in una scuola.",
       exampleSrc:"A: What work do you do?\nB: I am a teacher. I work in a school.",
       funFact:"In Italian, you state your profession without an article: 'Sono insegnante' NOT 'Sono un insegnante.' The article is only added with an adjective: 'Sono un bravo insegnante.'"},

      {type:"teach", trg:"studio", src:"I study", pos:"verb", gender:null,
       note:"First person singular of studiare (to study). Also means 'study/office' as a noun.",
       example:"A: Cosa studi?\nB: Studio medicina all'universita.",
       exampleSrc:"A: What do you study?\nB: I study medicine at the university.",
       funFact:"Lo studio as a noun has multiple meanings: a study room, a professional office (studio medico = doctor's office), or an artist's studio. All from Latin 'studium' (eagerness)."},
{type:"match",pairs:[{trg:"parlo",src:"I speak"},{trg:"un po'",src:"a little / a bit"},{trg:"lavoro",src:"I work / job"},{trg:"studio",src:"I study"}]},

      {type:"tip", title:"Subject Pronouns",
       text:"Italian subject pronouns are usually optional because verb endings already show who is doing the action.\n\nSingular:\nio - I (often dropped)\ntu - you (informal)\nlui - he\nlei - she\nLei - you (formal, always capitalized)\n\nPlural:\nnoi - we\nvoi - you all\nloro - they\n\nWhen to use the pronoun:\n- For emphasis: Io non lo so, ma TU si! (I don't know, but YOU do!)\n- After conjunctions: anche lui (he too), solo lei (only she)\n- Formal Lei is always capitalized in writing.",
       icon:"💡",
       deepDive:{title:"Why Italian drops subject pronouns",
        text:"Italian is a pro-drop language: the subject pronoun is encoded in the verb ending itself. Parlo (I speak) is complete without io. Adding io creates emphasis: 'Io parlo italiano' stresses that I specifically speak it. The formal Lei (capitalized) is historically fascinating: it descends from Renaissance courtesy forms meaning 'Your Grace.' Italians addressed the powerful in third person, and over time Lei became the standard formal 'you.' This is why formal verbs use third-person endings: Lei parla (you speak, formal) uses the same form as lei parla (she speaks)."}},

      // Quiz steps
      {type:"mc", q:"Come si dice 'I am Italian'?",
       opts:["Sono italiano","Ho italiano","Faccio italiano","Sto italiano"],
       ans:"Sono italiano",
       hint:"Use the verb essere (to be) for nationality. The first person form starts with 's.'"},

      {type:"fb", s:"Di {1} sei?",
       a:["dove"],
       opts:["dove","come","quando","chi"],
       hint:"You are asking about origin/location. Which question word means 'where'?",
       sSrc:"Where are you {1}?"},

      {type:"mc", q:"Quale frase e corretta per dire la tua professione?",
       opts:["Sono un insegnante","Sono insegnante","Ho insegnante","Faccio l'insegnante"],
       ans:"Sono insegnante",
       hint:"In Italian, professions with essere do not use an article. Just verb + profession."},

      {type:"match", pairs:[
        {trg:"Io", src:"I"},
        {trg:"Si", src:"Yes"},
        {trg:"No", src:"No"},
        {trg:"Parlo", src:"I speak"}
      ]},

      {type:"fb", s:"{1} italiano e un po' di francese.",
       a:["Parlo"],
       opts:["Parlo","Sono","Ho","Studio"],
       hint:"The verb for speaking languages. First person of parlare.",
       sSrc:"I {1} Italian and a little French."},

      {type:"mc", q:"Cosa significa 'un po''?",
       opts:["very much","a lot","a little","nothing"],
       ans:"a little",
       hint:"This is a shortened form of 'poco.' The apostrophe marks the dropped letters."},
    {type:"mc",q:"Which expression means 'a little' in Italian?",opts:["un po'","un molto","un tutto","un niente"],ans:"un po'",hint:"This shortened form of 'poco' is used constantly. The apostrophe marks the dropped letters."},
    {type:"match",pairs:[{trg:"per favore",src:"please"}]}]},
    EXP_L1, EXP_L2, EXP_L3,
  
  BATCH8_L1,
  BATCH7_L1,
  BATCH6_L1,
  BATCH4_L02,
  BATCH4_L01,
  BATCH2_L02,
  BATCH2_L01
, COVERAGE_U01]
};

export default UNIT_01;
