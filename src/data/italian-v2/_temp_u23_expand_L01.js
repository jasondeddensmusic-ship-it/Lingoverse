// Unit 23 Expansion. Lesson 4: Le istituzioni
const LESSON_4 = {
  id:"itv2_u23l4", title:"Le istituzioni", icon:"🏛️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Le istituzioni",
     desc:"Learn the vocabulary of Italian institutions and government structure. Understanding how Italy is governed helps you follow news, discussions, and daily civic life.",
     goals:["Name key Italian government institutions","Describe the roles of president and prime minister","Discuss the Italian constitutional framework"]},

    {type:"teach", trg:"il presidente della Repubblica", src:"the President of the Republic", pos:"noun", gender:"m",
     note:"Masculine. Head of state, elected by Parliament for 7 years.\n'Il Presidente' = the President.",
     example:"A: Il Presidente della Repubblica e il garante della Costituzione.\nB: E un ruolo molto importante.",
     exampleSrc:"A: The President of the Republic is the guardian of the Constitution.\nB: It is a very important role.",
     funFact:"The Italian President is head of state but not head of government (that is the Prime Minister). The President is elected by Parliament plus regional delegates for a seven-year term. The role is largely ceremonial but includes crucial powers: dissolving Parliament, appointing the Prime Minister, and refusing to sign unconstitutional laws."},

    {type:"teach", trg:"il primo ministro", src:"the Prime Minister", pos:"noun", gender:"m",
     note:"Masculine. Also called 'il Presidente del Consiglio.'\nHead of government, leads the cabinet.",
     example:"A: Il primo ministro ha presentato il nuovo programma.\nB: Vediamo se il parlamento lo approva.",
     exampleSrc:"A: The Prime Minister presented the new program.\nB: Let us see if parliament approves it.",
     funFact:"The Italian Prime Minister is officially called 'Presidente del Consiglio dei Ministri' (President of the Council of Ministers). Unlike in the UK, the PM is not directly elected but appointed by the President based on parliamentary support. Italy has had prime ministers from many different backgrounds: economists, professors, lawyers, and career politicians."},

    {type:"teach", trg:"la Costituzione", src:"the Constitution", pos:"noun", gender:"f",
     note:"Feminine. From 'costituire' (to constitute/establish).\nThe 1948 Italian Constitution has 139 articles.",
     example:"A: La Costituzione italiana e del 1948.\nB: E considerata una delle piu progressive d'Europa.",
     exampleSrc:"A: The Italian Constitution is from 1948.\nB: It is considered one of the most progressive in Europe.",
     funFact:"The Italian Constitution was written after World War II by an elected assembly representing all political forces, from communists to Catholics. Its opening article states: 'L'Italia e una Repubblica democratica, fondata sul lavoro' (Italy is a democratic Republic, founded on work). It explicitly bans the re-establishment of fascism."},

    {type:"teach", trg:"il ministro", src:"the minister (government)", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la ministra. From Latin 'minister' (servant).\n'Ministro dell'Istruzione' = Minister of Education.",
     example:"A: Il ministro ha annunciato la riforma.\nB: Quali cambiamenti prevede?",
     exampleSrc:"A: The minister announced the reform.\nB: What changes does it include?",
     funFact:"'Ministro' comes from Latin 'minister' (servant, attendant), the opposite of 'magister' (master). A minister is technically a 'servant of the state.' Italy's cabinet has about 20 ministers. The feminine 'ministra' has become standard, though some women prefer the masculine form 'ministro.'"},

    {type:"teach", trg:"il sindaco", src:"the mayor", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la sindaca. From Greek 'syndikos' (advocate).\n'Il sindaco di Roma' = the mayor of Rome.",
     example:"A: Il sindaco ha inaugurato il nuovo parco.\nB: Era ora! Lo aspettavamo da anni.",
     exampleSrc:"A: The mayor inaugurated the new park.\nB: It was about time! We had been waiting for years.",
     funFact:"Italian mayors are directly elected by citizens (unlike the PM). The 'sindaco' has significant local power over urban planning, public services, and cultural events. In small towns, the sindaco is often a familiar figure who knows residents personally. The feminine 'sindaca' is used increasingly, though not universally accepted."},

    {type:"teach", trg:"la riforma", src:"the reform", pos:"noun", gender:"f",
     note:"Feminine. From 'riformare' (to reform).\n'Riforma scolastica' = school reform.",
     example:"A: La riforma del lavoro e molto discussa.\nB: Ci sono opinioni diverse.",
     exampleSrc:"A: The labor reform is much debated.\nB: There are different opinions.",
     funFact:"Italy undergoes frequent reforms ('riforme') across education, labor, pensions, and the judiciary. The word appears in newspapers daily. 'Riformare' shares its root with the Protestant Reformation ('Riforma'). Italian political discourse often revolves around whether a reform is 'necessaria' (necessary) or 'pericolosa' (dangerous)."},

    {type:"teach", trg:"il referendum", src:"the referendum", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'referendum' (that which must be referred).\n'Indire un referendum' = to call a referendum.",
     example:"A: Il referendum sull'energia nucleare ha avuto un grande impatto.\nB: I cittadini hanno votato contro.",
     exampleSrc:"A: The referendum on nuclear energy had a great impact.\nB: Citizens voted against it.",
     funFact:"Italy uses referendums frequently. The 1946 referendum abolished the monarchy. The 1974 referendum kept divorce legal. The 2011 referendum rejected nuclear energy. Italian referendums are 'abrogative' (they repeal laws) and require a 50% voter turnout to be valid. This quorum rule means many referendums fail due to low turnout."},

    {type:"teach", trg:"la coalizione", src:"the coalition", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'coalitio' (growing together).\n'Governo di coalizione' = coalition government.",
     example:"A: Il governo e una coalizione di tre partiti.\nB: Le coalizioni sono comuni in Italia.",
     exampleSrc:"A: The government is a coalition of three parties.\nB: Coalitions are common in Italy.",
     funFact:"Italian governments are almost always coalitions because no single party wins a parliamentary majority. Coalition negotiations can take weeks after elections. Partners often disagree publicly, leading to government crises ('crisi di governo'). Italy has averaged about one government every 14 months since 1946."},

    // Quiz steps
    {type:"mc", q:"Who appoints the Italian Prime Minister?",
     opts:["The President of the Republic appoints based on parliamentary support","The outgoing PM selects their successor","Citizens vote directly for the PM","The Senate chooses by internal vote"],
     ans:"The President of the Republic appoints based on parliamentary support",
     hint:"The PM is not directly elected. The P... consults parties and a... whoever can form a majority in Parliament."},

    {type:"fb", s:"La {1} italiana e del 1948.",
     a:["Costituzione"],
     opts:["Costituzione","coalizione","riforma","elezione"],
     hint:"Italy's foundational legal document, written after WWII. Its first article declares Italy a democratic Republic founded on work.",
     sSrc:"The Italian {1} is from 1948."},

    {type:"match", pairs:[
      {trg:"il presidente della Repubblica", src:"President (head of state)"},
      {trg:"il primo ministro", src:"Prime Minister (head of government)"},
      {trg:"il ministro", src:"government minister"},
      {trg:"il sindaco", src:"the mayor"},
      {trg:"la coalizione", src:"the coalition"}
    ]},

    {type:"mc", q:"What is special about Italian referendums?",
     opts:["They are advisory with no legal binding power","They require 50% voter turnout to be valid","Only Parliament can vote in them","They can only be held once per decade"],
     ans:"They require 50% voter turnout to be valid",
     hint:"This quorum rule means many Italian referendums fail because not enough citizens participate, regardless of how the actual voters choose."},

    {type:"fb", s:"Il {1} ha inaugurato il nuovo parco.",
     a:["sindaco"],
     opts:["sindaco","ministro","presidente","primo ministro"],
     hint:"The directly elected local leader. In small towns, this person often knows residents personally. From Greek 'syndikos.'",
     sSrc:"The {1} inaugurated the new park."},

    {type:"mc", q:"Where does the word 'ministro' come from?",
     opts:["Italian 'amministrare' (to manage)","Latin 'magister' (master and teacher)","Latin 'minister' (servant of the state)","Greek 'ministra' (government official)"],
     ans:"Latin 'minister' (servant of the state)",
     hint:"A m... is technically a 's...,' the opposite of 'magister' (master). The role is one of public service."},

    {type:"fb", s:"Il governo e una {1} di tre partiti.",
     a:["coalizione"],
     opts:["coalizione","riforma","elezione","costituzione"],
     hint:"Multiple parties joining forces to form a majority. Very common in Italian politics, where no single party usually wins enough seats alone.",
     sSrc:"The government is a {1} of three parties."},

    {type:"mc", q:"How often has Italy changed governments since 1946?",
     opts:["Only when elections are held every four years","The same government has served continuously","About once every five years on average","About once every fourteen months on average"],
     ans:"About once every fourteen months on average",
     hint:"Coalition disagreements frequently lead to 'crisi di governo.' Italy has had over 70 governments in roughly 80 years."}
  ]
};
export default LESSON_4;
