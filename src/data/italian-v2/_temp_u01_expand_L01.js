// Unit 01 Expansion — Lesson 3: Formal Introductions
// Theme: Presenting yourself formally, titles, professions, nationality

const LESSON_3 = {
  id:"itv2_u1l3", title:"Presentazioni formali", icon:"\ud83e\udd1d", xp:15, board:true,
  steps:[
    {type:"intro", title:"Presentazioni formali",
     desc:"Learn how to introduce yourself and others in formal situations, including titles and professions.",
     goals:["Introduce yourself formally","Use Italian titles correctly","State your profession and nationality"]},

    {type:"teach", trg:"Lei", src:"you (formal)", pos:"pron", gender:null,
     note:"Formal 'you.' Always capitalized in writing. Uses third person verb forms.\nUsed with strangers, elders, professionals.",
     example:"A: Lei come si chiama?\nB: Mi chiamo Marco Rossi.",
     exampleSrc:"A: What is your name? (formal)\nB: My name is Marco Rossi.",
     funFact:"Lei literally means 'she' but is used as formal 'you' for both men and women. This tradition comes from Renaissance courtly language, where addressing someone in the third person showed deference."},

    {type:"teach", trg:"signore", src:"sir / Mr.", pos:"noun", gender:"m",
     note:"Formal title for men. Drops the final -e before a name: Signor Rossi.\nPlural: signori.",
     example:"A: Buongiorno, signore.\nB: Buongiorno! Prego, si accomodi.",
     exampleSrc:"A: Good morning, sir.\nB: Good morning! Please, have a seat.",
     funFact:"From Latin 'senior' (older, elder). The same root gave French 'monsieur,' Spanish 'senor,' and English 'sir.' Respect for elders is literally built into the word."},

    {type:"teach", trg:"signora", src:"ma'am / Mrs.", pos:"noun", gender:"f",
     note:"Formal title for women. Does not change before a name: Signora Bianchi.\nPlural: signore.",
     example:"A: Scusi, signora, dov'e la stazione?\nB: Dritto e poi a sinistra.",
     exampleSrc:"A: Excuse me, ma'am, where is the station?\nB: Straight and then left.",
     funFact:"Unlike English, Italian has no equivalent of 'Ms.' The trend is to use 'signora' for all adult women regardless of marital status. 'Signorina' (Miss) is considered outdated by many."},

    {type:"teach", trg:"dottore", src:"doctor (m.)", pos:"noun", gender:"m",
     note:"Used for medical doctors AND anyone with a university degree.\nDrops -e before a name: Dottor Rossi.",
     example:"A: Buongiorno, dottore.\nB: Buongiorno! Come sta?",
     exampleSrc:"A: Good morning, doctor.\nB: Good morning! How are you?",
     funFact:"In Italy, 'dottore' is used for ANY university graduate, not just medical doctors. A lawyer, engineer, or literature graduate can all be called 'dottore.' This reflects the high value placed on education."},

    {type:"teach", trg:"professore", src:"professor / teacher", pos:"noun", gender:"m",
     note:"For teachers at any level. Feminine: professoressa.\nDrops -e before a name: Professor Bianchi.",
     example:"A: Buongiorno, professore!\nB: Buongiorno, ragazzi!",
     exampleSrc:"A: Good morning, professor!\nB: Good morning, everyone!",
     funFact:"Italian students address ALL their teachers as 'professore' or 'professoressa,' from middle school up. Elementary teachers are called 'maestro/maestra' instead. The respect for teachers is deeply cultural."},

    {type:"teach", trg:"presentare", src:"to introduce / to present", pos:"verb", gender:null,
     note:"Reflexive: presentarsi (to introduce oneself).\nLe presento... = Let me introduce... (formal).",
     example:"A: Le presento mia moglie, Anna.\nB: Piacere, Anna!",
     exampleSrc:"A: Let me introduce my wife, Anna.\nB: Nice to meet you, Anna!",
     funFact:"'Le presento' uses the formal indirect object 'Le' (to you, formal). The informal version would be 'Ti presento.' Italians carefully choose based on the relationship between the people being introduced."},

    {type:"teach", trg:"conoscere", src:"to know (a person) / to meet", pos:"verb", gender:null,
     note:"Used for knowing people and places, NOT facts.\nFor facts, use 'sapere.' Important distinction.",
     example:"A: Conosci Marco?\nB: Si, lo conosco da tre anni.",
     exampleSrc:"A: Do you know Marco?\nB: Yes, I have known him for three years.",
     funFact:"Italian splits 'to know' into two verbs: conoscere (people, places, experiences) and sapere (facts, skills, information). This distinction exists in many European languages but not in English."},

    {type:"teach", trg:"il titolo", src:"the title", pos:"noun", gender:"m",
     note:"Masculine. Used for professional and academic titles.\nFrom Latin 'titulus' (inscription, label).",
     example:"A: Qual e il Suo titolo?\nB: Sono ingegnere.",
     exampleSrc:"A: What is your title?\nB: I am an engineer.",
     funFact:"Italians use professional titles much more than English speakers. Calling someone 'ingegnere' (engineer), 'avvocato' (lawyer), or 'architetto' (architect) in conversation is common and expected."},

    {type:"teach", trg:"la professione", src:"the profession", pos:"noun", gender:"f",
     note:"Feminine. 'Che professione fa?' = What is your profession?\nFrom Latin 'professio' (public declaration).",
     example:"A: Che professione fa?\nB: Sono medico.",
     exampleSrc:"A: What is your profession?\nB: I am a doctor.",
     funFact:"In Italian, you state professions without an article after 'essere': 'Sono medico' (I am a doctor), NOT 'Sono un medico.' The article only appears with an adjective: 'Sono un bravo medico.'"},

    {type:"teach", trg:"l'ingegnere", src:"the engineer", pos:"noun", gender:"m",
     note:"Masculine. Uses l' before vowel. Feminine form: l'ingegnera (emerging).\nOften used as a title: Ingegner Rossi.",
     example:"A: Che lavoro fa?\nB: Sono ingegnere.",
     exampleSrc:"A: What do you do?\nB: I am an engineer.",
     funFact:"'Ingegnere' comes from Latin 'ingenium' (talent, cleverness). The same root gave English 'engine,' 'engineer,' and 'ingenious.' Originally it meant someone clever enough to build machines."},

    {type:"teach", trg:"l'avvocato", src:"the lawyer", pos:"noun", gender:"m",
     note:"Masculine. Uses l' before vowel. Often used as a title.\nFrom Latin 'advocatus' (one called to help).",
     example:"A: Mio padre e avvocato.\nB: Che tipo di legge pratica?",
     exampleSrc:"A: My father is a lawyer.\nB: What type of law does he practice?",
     funFact:"From Latin 'advocatus' (one called to assist), from 'ad vocare' (to call to). English 'advocate' shares this origin. In Italy, calling someone 'avvocato' is a sign of respect for their profession."},

    {type:"teach", trg:"lo studente", src:"the student (m.)", pos:"noun", gender:"m",
     note:"Masculine. Uses 'lo' before s+consonant (st).\nFeminine: la studentessa. Plural: gli studenti.",
     example:"A: Sei studente?\nB: Si, studio all'universita.",
     exampleSrc:"A: Are you a student?\nB: Yes, I study at the university.",
     funFact:"The masculine plural 'gli studenti' is used for mixed groups of male and female students. Italian traditionally uses the masculine plural for mixed groups, though this convention is increasingly debated."},

    {type:"teach", trg:"la nazionalita", src:"the nationality", pos:"noun", gender:"f",
     note:"Feminine. Always has an accent on the final a.\nPlural: le nazionalita (invariable).",
     example:"A: Qual e la Sua nazionalita?\nB: Sono inglese.",
     exampleSrc:"A: What is your nationality?\nB: I am English.",
     funFact:"Italian nouns ending in accented vowels do not change in the plural: 'la nazionalita, le nazionalita.' This rule applies to many abstract nouns: la citta/le citta, l'universita/le universita."},

    {type:"teach", trg:"inglese", src:"English", pos:"adj", gender:null,
     note:"Same form for masculine and feminine (-e ending).\nNot capitalized as an adjective: 'sono inglese.'",
     example:"A: Sei italiano?\nB: No, sono inglese. Sono di Londra.",
     exampleSrc:"A: Are you Italian?\nB: No, I am English. I am from London.",
     funFact:"Nationality adjectives in Italian are not capitalized: 'sono inglese,' 'sono tedesco,' 'sono francese.' Only country names get capitals: 'l'Inghilterra,' 'la Germania,' 'la Francia.'"},

    {type:"teach", trg:"americano", src:"American (m.)", pos:"adj", gender:"m",
     note:"Masculine: americano. Feminine: americana.\nRefers to US citizens. South Americans specify their country.",
     example:"A: Di dove sei?\nB: Sono americano, di New York.",
     exampleSrc:"A: Where are you from?\nB: I am American, from New York.",
     funFact:"In Italian, 'americano' almost always means from the United States. South Americans are called by their specific nationality: argentino, brasiliano, colombiano. A coffee americano is a diluted espresso."},

    {type:"teach", trg:"tedesco", src:"German (m.)", pos:"adj", gender:"m",
     note:"Masculine: tedesco. Feminine: tedesca.\nAlso a noun for the German language: il tedesco.",
     example:"A: Parli tedesco?\nB: Si, un po'. Studio tedesco da un anno.",
     exampleSrc:"A: Do you speak German?\nB: Yes, a little. I have been studying German for a year.",
     funFact:"'Tedesco' comes from the Germanic word 'deutsch' (of the people). Italy and Germany share a long border through the Alps, and South Tyrol (Alto Adige) is a bilingual Italian-German region."},

    {type:"teach", trg:"francese", src:"French", pos:"adj", gender:null,
     note:"Same form for masculine and feminine (-e ending).\nAlso a noun: il francese (the French language).",
     example:"A: Sei francese?\nB: Si, sono di Parigi.",
     exampleSrc:"A: Are you French?\nB: Yes, I am from Paris.",
     funFact:"French and Italian are sister languages from Latin. They share about 89% lexical similarity, the highest of any two major Romance languages. Many words are nearly identical."},

    // Quiz steps
    {type:"mc", q:"How do you formally ask someone's name?",
     opts:["Lei come si chiama?","Come ti chiami?","Chi sei?","Tu come ti chiami?"],
     ans:"Lei come si chiama?",
     hint:"The formal pronoun uses third-person verb forms. It is always capitalized in writing."},

    {type:"fb", s:"Buongiorno, {1} Rossi.",
     a:["Signor"],
     opts:["Signor","Signore","Signora","Dottore"],
     hint:"When a male title comes before a surname, the final -e is dropped.",
     sSrc:"Good morning, {1} Rossi."},

    {type:"mc", q:"In Italy, who can be called 'dottore'?",
     opts:["Any university graduate","Only medical doctors","Only PhDs","Only men"],
     ans:"Any university graduate",
     hint:"This title reflects the Italian value placed on education. It extends far beyond the medical profession."},

    {type:"fb", s:"Le {1} mia moglie, Anna.",
     a:["presento"],
     opts:["presento","chiamo","conosco","parlo"],
     hint:"This verb means 'to introduce.' In the formal register, 'Le' replaces 'ti.'",
     sSrc:"Let me {1} my wife, Anna."},

    {type:"match", pairs:[
      {trg:"signore", src:"sir / Mr."},
      {trg:"signora", src:"ma'am / Mrs."},
      {trg:"dottore", src:"doctor"},
      {trg:"professore", src:"professor"},
      {trg:"avvocato", src:"lawyer"}
    ]},

    {type:"mc", q:"What is the difference between conoscere and sapere?",
     opts:["Conoscere = people/places, sapere = facts","They are the same","Conoscere = facts, sapere = people","Conoscere is formal, sapere informal"],
     ans:"Conoscere = people/places, sapere = facts",
     hint:"Italian splits 'to know' into two verbs. One is for acquaintance, the other for information."},

    {type:"fb", s:"Sono {1}, di Londra.",
     a:["inglese"],
     opts:["inglese","italiano","americano","francese"],
     hint:"This nationality matches the city London. The adjective ends in -e for both genders.",
     sSrc:"I am {1}, from London."},

    {type:"mc", q:"How do you state your profession in Italian?",
     opts:["Sono + profession (no article)","Sono un + profession","Ho + profession","Faccio il + profession"],
     ans:"Sono + profession (no article)",
     hint:"With essere, job titles stand alone without any determiner. English 'I am a doctor' loses its 'a' in Italian."},

    {type:"fb", s:"Qual e la Sua {1}?",
     a:["nazionalita"],
     opts:["nazionalita","professione","famiglia","casa"],
     hint:"You are asking about someone's country of origin. This feminine noun ends with an accent.",
     sSrc:"What is your {1}?"},

    {type:"match", pairs:[
      {trg:"inglese", src:"English"},
      {trg:"americano", src:"American"},
      {trg:"tedesco", src:"German"},
      {trg:"francese", src:"French"},
      {trg:"italiano", src:"Italian"}
    ]}
  ]
};
export default LESSON_3;
