// Spanish B2 Final Batch - Lesson 11: Civic & Societal Vocabulary (PCIC B1/B2)
const LESSON_11 = {
  id:"esv2_b2fin_l11", title:"Sociedad y Ciudadan\u00eda", icon:"\u{1F3DB}\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Sociedad y Ciudadan\u00eda",
     desc:"Master the core civic and societal vocabulary required for DELE B1/B2. Discuss politics, rights, justice, and the environment with precision.",
     goals:["Discuss political and social structures","Express opinions about rights and justice","Use key civic vocabulary in debate contexts"]},

    {type:"teach", trg:"la sociedad", src:"society", pos:"noun", gender:"f",
     note:"The organized community of people sharing a culture and institutions.",
     example:"A: \u00bfC\u00f3mo influye la sociedad en el individuo?\nB: La sociedad define las normas y los valores.",
     exampleSrc:"A: How does society influence the individual?\nB: Society defines the norms and values.",
     funFact:"From Latin 'societas' (fellowship). The word shares its root with 'socio' (partner) and 'asociar' (to associate)."},

    {type:"teach", trg:"la pol\u00edtica", src:"politics / policy", pos:"noun", gender:"f",
     note:"Both the practice of politics and a specific policy or measure.",
     example:"A: \u00bfTe interesa la pol\u00edtica?\nB: S\u00ed, la pol\u00edtica afecta a todos.",
     exampleSrc:"A: Are you interested in politics?\nB: Yes, politics affects everyone.",
     funFact:"From Greek 'politike' (civic affairs). Aristotle called humans 'political animals' because we naturally form societies."},

    {type:"mc", q:"\u00bfQu\u00e9 significa 'la pol\u00edtica'?",
     opts:["Las normas c\u00edvicas y el gobierno","Un tipo de comida","Una forma de arte","Un sistema educativo"],
     ans:"Las normas c\u00edvicas y el gobierno",
     hint:"This word covers both the practice of governing and specific government measures."},

    {type:"teach", trg:"la econom\u00eda", src:"the economy", pos:"noun", gender:"f",
     note:"The system of production, trade, and consumption of goods and services.",
     example:"A: La econom\u00eda del pa\u00eds crece este a\u00f1o.\nB: S\u00ed, pero la desigualdad sigue siendo un problema.",
     exampleSrc:"A: The country's economy is growing this year.\nB: Yes, but inequality remains a problem.",
     funFact:"From Greek 'oikonomia' (household management). 'Oikos' = house + 'nomos' = law. The ancient Greeks saw the state as a large household."},

    {type:"teach", trg:"la educaci\u00f3n", src:"education", pos:"noun", gender:"f",
     note:"The process of teaching and learning. Also refers to good manners.",
     example:"A: La educaci\u00f3n es clave para el desarrollo.\nB: Invertir en educaci\u00f3n es invertir en el futuro.",
     exampleSrc:"A: Education is key to development.\nB: Investing in education is investing in the future.",
     funFact:"From Latin 'educatio' (bringing up). 'Educare' means to lead out, suggesting that education draws out potential already inside the student."},

    {type:"fb",
     s:"La {1} de un pa\u00eds mejora cuando todos tienen acceso a la ense\u00f1anza.",
     a:["educaci\u00f3n"],
     opts:["educaci\u00f3n","pol\u00edtica","econom\u00eda","sociedad"],
     hint:"This word refers to the system of teaching and learning that develops skills and knowledge.",
     sSrc:"A country's {1} improves when everyone has access to instruction."},

    {type:"teach", trg:"la libertad", src:"freedom / liberty", pos:"noun", gender:"f",
     note:"The power to act, speak, or think without restraint.",
     example:"A: La libertad de expresi\u00f3n es un derecho fundamental.\nB: Sin libertad, la democracia no funciona.",
     exampleSrc:"A: Freedom of expression is a fundamental right.\nB: Without freedom, democracy does not work.",
     funFact:"From Latin 'libertas'. The Statue of Liberty in New York is 'La Estatua de la Libertad' in Spanish. France gave it to the USA in 1886."},

    {type:"teach", trg:"los derechos", src:"rights", pos:"noun", gender:"m",
     note:"Legal and moral entitlements. Singular: el derecho (the right / law).",
     example:"A: Todos tenemos derechos y obligaciones.\nB: Los derechos humanos son universales.",
     exampleSrc:"A: We all have rights and obligations.\nB: Human rights are universal.",
     funFact:"From Latin 'directus' (straight/direct). Rights are what is 'straight' and fair. The word 'derecho' also means 'straight ahead' in directions."},

    {type:"mc", q:"\u00bfQu\u00e9 son 'los derechos humanos'?",
     opts:["Impuestos al comercio","Derechos b\u00e1sicos de todas las personas","Leyes de propiedad","Normas escolares"],
     ans:"Derechos b\u00e1sicos de todas las personas",
     hint:"These are entitlements that belong to every person regardless of nationality or status."},

    {type:"teach", trg:"el gobierno", src:"the government", pos:"noun", gender:"m",
     note:"The group of people who govern a country or region.",
     example:"A: El gobierno ha aprobado una nueva ley.\nB: \u00bfQu\u00e9 opinas sobre esa decisi\u00f3n?",
     exampleSrc:"A: The government has passed a new law.\nB: What do you think about that decision?",
     funFact:"From Latin 'gubernare' (to steer a ship). The Romans saw governance as navigating the state through turbulent waters."},

    {type:"teach", trg:"la ley", src:"the law", pos:"noun", gender:"f",
     note:"A rule made by a government. Also used figuratively for any binding rule.",
     example:"A: Todos somos iguales ante la ley.\nB: La ley protege a los ciudadanos.",
     exampleSrc:"A: We are all equal before the law.\nB: The law protects citizens.",
     funFact:"From Latin 'lex' (law). The phrase 'dura lex, sed lex' (the law is harsh, but it is the law) is still used in legal contexts today."},

    {type:"fb",
     s:"El {1} firm\u00f3 un decreto para proteger el medio ambiente.",
     a:["gobierno"],
     opts:["gobierno","derecho","ley","sociedad"],
     hint:"This noun refers to the group of people who lead and administer a country.",
     sSrc:"The {1} signed a decree to protect the environment."},

    {type:"teach", trg:"la justicia", src:"justice", pos:"noun", gender:"f",
     note:"Fairness and rightness. Also refers to the justice system and courts.",
     example:"A: La justicia debe ser igual para todos.\nB: Desgraciadamente, eso no siempre ocurre.",
     exampleSrc:"A: Justice must be equal for all.\nB: Unfortunately, that does not always happen.",
     funFact:"From Latin 'iustitia'. Lady Justice (La Justicia) holds scales and a sword in Western iconography, symbolizing impartiality and authority."},

    {type:"teach", trg:"la democracia", src:"democracy", pos:"noun", gender:"f",
     note:"A system of government where citizens vote for their representatives.",
     example:"A: La democracia necesita ciudadanos informados.\nB: S\u00ed, la educaci\u00f3n y la libertad son esenciales.",
     exampleSrc:"A: Democracy needs informed citizens.\nB: Yes, education and freedom are essential.",
     funFact:"From Greek 'demokratia': 'demos' (people) + 'kratos' (power). Ancient Athens had direct democracy where citizens voted on laws themselves."},

    {type:"mc", q:"\u00bfQu\u00e9 es la democracia?",
     opts:["Un tipo de econom\u00eda","Un conjunto de leyes escritas","Un sistema donde los ciudadanos eligen a sus representantes","Un sistema donde el rey gobierna solo"],
     ans:"Un sistema donde los ciudadanos eligen a sus representantes",
     hint:"In this political system, the power ultimately comes from the people through voting."},

    {type:"teach", trg:"el medio ambiente", src:"the environment", pos:"noun", gender:"m",
     note:"The natural world: air, water, land, and living things. Key B1/B2 topic.",
     example:"A: El medio ambiente est\u00e1 en peligro por la contaminaci\u00f3n.\nB: Todos debemos proteger el medio ambiente.",
     exampleSrc:"A: The environment is in danger because of pollution.\nB: We all must protect the environment.",
     funFact:"'Medio' = middle/environment + 'ambiente' = surrounding atmosphere. Spanish uses this compound where English simply says 'environment'."},

    {type:"fb",
     s:"Proteger el {1} es responsabilidad de toda la sociedad.",
     a:["medio ambiente"],
     opts:["medio ambiente","gobierno","econom\u00eda","pol\u00edtica"],
     hint:"This two-word term refers to the natural world of air, water, land, and living things.",
     sSrc:"Protecting the {1} is the responsibility of all of society."},

    {type:"teach", trg:"la igualdad", src:"equality", pos:"noun", gender:"f",
     note:"The state of being equal in rights, status, or opportunities.",
     example:"A: La igualdad de g\u00e9nero sigue siendo un reto.\nB: La igualdad es un valor fundamental de la democracia.",
     exampleSrc:"A: Gender equality is still a challenge.\nB: Equality is a fundamental value of democracy.",
     funFact:"From Latin 'aequalitas'. The French Revolution's motto 'Libert\u00e9, \u00e9galit\u00e9, fraternit\u00e9' gave us 'libertad, igualdad, fraternidad' in Spanish."},

    {type:"match", pairs:[
      {trg:"la sociedad", src:"society"},
      {trg:"la libertad", src:"freedom"},
      {trg:"los derechos", src:"rights"},
      {trg:"la justicia", src:"justice"},
      {trg:"el medio ambiente", src:"the environment"}
    ]},

    {type:"mc", q:"\u00bfCu\u00e1l es el opuesto de 'la igualdad'?",
     opts:["La justicia","La libertad","La democracia","La desigualdad"],
     ans:"La desigualdad",
     hint:"This word describes a state where people do not have the same rights or opportunities."},

    {type:"fb",
     s:"La {1} garantiza que todos los ciudadanos tengan los mismos derechos.",
     a:["igualdad"],
     opts:["igualdad","pol\u00edtica","libertad","econom\u00eda"],
     hint:"This abstract noun describes the condition of having the same rights and opportunities as others.",
     sSrc:"{1} guarantees that all citizens have the same rights."}
  ]
};
export default LESSON_11;
