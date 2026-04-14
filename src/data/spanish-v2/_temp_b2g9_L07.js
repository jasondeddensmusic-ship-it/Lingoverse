// Lesson 7 — Obstaculos y limites (Obstacles and Limits)
const LESSON_7 = {id:"esv2_b2g9_l7", title:"Obst\u00e1culos y l\u00edmites", icon:"\u{1F6A7}", xp:25, board:true, steps:[
  {type:"intro", title:"Obst\u00e1culos y l\u00edmites",
   desc:"Express impossibility, instability, and limitation. These abstract nouns are crucial for nuanced discussion of problems and challenges.",
   goals:["Learn 10 abstract nouns for limitations and difficulties","Use prefix patterns (in-, im-, ir-) productively","Discuss challenges and obstacles in formal contexts"]},

  {type:"teach", trg:"la imposibilidad", src:"the impossibility", pos:"noun", gender:"f",
   note:"Im- (not) + posibilidad (possibility).\nThe state of something being impossible.",
   example:"A: Reconocemos la imposibilidad de cumplir el plazo.\nB: \u00bfQu\u00e9 propon\u00e9is?\nA: Pedir una pr\u00f3rroga de dos semanas.\nB: Parece razonable dadas las circunstancias.",
   exampleSrc:"A: We recognise the impossibility of meeting the deadline.\nB: What do you propose?\nA: Asking for a two-week extension.\nB: That seems reasonable given the circumstances.",
   funFact:"Spanish uses the prefix im- before words starting with p or b: imposible, imparcial, imborrable."},

  {type:"teach", trg:"la inestabilidad", src:"instability", pos:"noun", gender:"f",
   note:"In- (not) + estabilidad (stability).\nLack of stability in politics, economy, or emotions.",
   example:"A: La inestabilidad pol\u00edtica preocupa a los inversores.\nB: Es normal. Nadie invierte en un pa\u00eds inestable.\nA: Necesitamos un gobierno fuerte y estable.\nB: Eso es m\u00e1s f\u00e1cil decirlo que hacerlo.",
   exampleSrc:"A: Political instability worries investors.\nB: That is normal. Nobody invests in an unstable country.\nA: We need a strong and stable government.\nB: That is easier said than done.",
   funFact:"Economists distinguish between 'inestabilidad ciclica' (cyclical) and 'inestabilidad estructural' (structural)."},

  {type:"teach", trg:"la invalidez", src:"disability; invalidity", pos:"noun", gender:"f",
   note:"From inv\u00e1lido (invalid/disabled).\nUsed for both legal invalidity and physical disability.",
   example:"A: Mi padre cobra una pensi\u00f3n de invalidez.\nB: \u00bfDesde cu\u00e1ndo?\nA: Desde que tuvo el accidente laboral.\nB: La Seguridad Social cubre esos casos.",
   exampleSrc:"A: My father receives a disability pension.\nB: Since when?\nA: Since he had the workplace accident.\nB: Social Security covers those cases.",
   funFact:"Modern Spanish prefers 'discapacidad' for disability. 'Invalidez' remains standard in legal and insurance contexts."},

  {type:"teach", trg:"la irrealidad", src:"unreality", pos:"noun", gender:"f",
   note:"Ir- (not) + realidad (reality).\nThe quality of seeming unreal or dreamlike.",
   example:"A: Todo ten\u00eda una sensaci\u00f3n de irrealidad.\nB: \u00bfComo un sue\u00f1o?\nA: Exacto. No pod\u00eda creer lo que estaba pasando.\nB: A veces la vida supera la ficci\u00f3n.",
   exampleSrc:"A: Everything had a feeling of unreality.\nB: Like a dream?\nA: Exactly. I could not believe what was happening.\nB: Sometimes life surpasses fiction.",
   funFact:"The prefix ir- is used before words starting with r: irreal, irreversible, irresponsable, irreductible."},

  {type:"teach", trg:"la irritaci\u00f3n", src:"irritation", pos:"noun", gender:"f",
   note:"From irritar (to irritate).\nBoth emotional annoyance and physical skin irritation.",
   example:"A: Siento una irritaci\u00f3n en los ojos.\nB: \u00bfEs por la alergia?\nA: Creo que s\u00ed. La primavera es terrible para m\u00ed.\nB: Deber\u00edas ir al oculista.",
   exampleSrc:"A: I feel irritation in my eyes.\nB: Is it from the allergy?\nA: I think so. Spring is terrible for me.\nB: You should go to the eye doctor.",
   funFact:"'Irritaci\u00f3n' in medical Spanish almost always refers to physical inflammation, while 'irritabilidad' is the emotional trait."},

  {type:"mc", q:"\u00bfQu\u00e9 prefijo se usa antes de palabras que empiezan con 'r'?",
   opts:["in-","im-","ir-","il-"],
   ans:"ir-",
   hint:"Irreal, irreversible, irresponsable. The prefix adapts to the first consonant."},

  {type:"teach", trg:"la inconveniencia", src:"the inconvenience; unsuitability", pos:"noun", gender:"f",
   note:"In- (not) + conveniencia (convenience/suitability).\nSomething unsuitable or bothersome.",
   example:"A: Lamento la inconveniencia que esto pueda causar.\nB: No se preocupe. Lo entendemos.\nA: Intentaremos resolver el problema lo antes posible.\nB: Se lo agradecemos.",
   exampleSrc:"A: I apologise for the inconvenience this may cause.\nB: Do not worry. We understand.\nA: We will try to resolve the problem as soon as possible.\nB: We appreciate that.",
   funFact:"In formal Spanish, 'lamentar la inconveniencia' is the standard phrase in customer service apologies."},

  {type:"teach", trg:"la inflexion", src:"inflection; turning point", pos:"noun", gender:"f",
   note:"From Latin inflexio (bending).\nUsed in linguistics (grammar) and economics (trend reversal).",
   example:"A: Este momento marca un punto de inflexi\u00f3n en su carrera.\nB: \u00bfPor qu\u00e9 lo dices?\nA: Porque a partir de ahora todo cambi\u00f3.\nB: Es verdad. Fue antes y despu\u00e9s de ese momento.",
   exampleSrc:"A: This moment marks a turning point in their career.\nB: Why do you say that?\nA: Because from that point on, everything changed.\nB: It is true. It was before and after that moment.",
   funFact:"In Spanish grammar, 'inflexi\u00f3n' refers to verb conjugation and noun declension, the way word forms change."},

  {type:"teach", trg:"la extrañeza", src:"strangeness; surprise", pos:"noun", gender:"f",
   note:"From extra\u00f1o (strange) + -eza (quality suffix).\nA feeling of finding something odd or surprising.",
   example:"A: Me caus\u00f3 extra\u00f1eza que no viniera a la reuni\u00f3n.\nB: A m\u00ed tambi\u00e9n. Nunca falta.\nA: \u00bfLe habr\u00e1 pasado algo?\nB: Le llamar\u00e9 para asegurarme.",
   exampleSrc:"A: It surprised me that they did not come to the meeting.\nB: Me too. They never miss one.\nA: Could something have happened to them?\nB: I will call to make sure.",
   funFact:"The expression 'causar extra\u00f1eza' is more formal than 'sorprender', often used in news and official statements."},

  {type:"fb", s:"La {1} pol\u00edtica preocupa a los mercados financieros.", a:["inestabilidad"],
   opts:["inestabilidad","imposibilidad","irritaci\u00f3n","invalidez"],
   hint:"Lack of political stability makes investors nervous.",
   sSrc:"Political {1} worries the financial markets."},

  {type:"teach", trg:"la incursi\u00f3n", src:"the incursion; foray", pos:"noun", gender:"f",
   note:"From Latin incursio (attack/raid).\nA brief or initial entry into new territory, literal or figurative.",
   example:"A: Esta es su primera incursi\u00f3n en el mundo de la m\u00fasica.\nB: \u00bfAntes qu\u00e9 hac\u00eda?\nA: Era actriz de teatro.\nB: Muchos artistas hacen incursiones en otros campos.",
   exampleSrc:"A: This is their first foray into the world of music.\nB: What did they do before?\nA: They were a theatre actress.\nB: Many artists make forays into other fields.",
   funFact:"'Incursi\u00f3n' originally meant a military raid but now commonly describes venturing into new professional areas."},

  {type:"mc", q:"\u00bfQu\u00e9 significa 'un punto de inflexi\u00f3n'?",
   opts:["Un error grave","Un momento que cambia la direcci\u00f3n de algo","Una reuni\u00f3n importante","Un tipo de castigo"],
   ans:"Un momento que cambia la direcci\u00f3n de algo",
   hint:"Inflexi\u00f3n comes from 'bending'. A point where the direction bends or changes."},

  {type:"fb", s:"Me caus\u00f3 {1} que no contestara al tel\u00e9fono.", a:["extra\u00f1eza"],
   opts:["extra\u00f1eza","irrealidad","inconveniencia","invalidez"],
   hint:"A feeling of surprise at something odd or unexpected.",
   sSrc:"It caused me {1} that they did not answer the phone."},

  {type:"match", pairs:[
    {trg:"imposibilidad", src:"impossibility"},
    {trg:"inestabilidad", src:"instability"},
    {trg:"irrealidad", src:"unreality"},
    {trg:"extra\u00f1eza", src:"strangeness; surprise"},
    {trg:"incursi\u00f3n", src:"incursion; foray"}
  ]},

  {type:"mc", q:"\u00bfEn qu\u00e9 contexto se usa 'invalidez'?",
   opts:["Solo en deportes","En contextos legales y de discapacidad","Solo en cocina","En contextos art\u00edsticos"],
   ans:"En contextos legales y de discapacidad",
   hint:"This word appears in insurance policies and pension systems for people unable to work."},

  {type:"drag_fill", s:"Lamento la {1} que esto pueda causar. Reconocemos la {2} de cumplir el plazo.",
   blanks:{"1":"inconveniencia","2":"imposibilidad"},
   pool:["inconveniencia","imposibilidad","inestabilidad","irritaci\u00f3n","extra\u00f1eza"],
   hint:"First: an apology for the bother. Second: admitting the deadline cannot be met."},

  {type:"fb", s:"Esta es su primera {1} en el cine como directora.", a:["incursi\u00f3n"],
   opts:["incursi\u00f3n","inflexi\u00f3n","irritaci\u00f3n","invalidez"],
   hint:"A first venture or foray into a new field.",
   sSrc:"This is her first {1} into cinema as a director."}
]};
export default LESSON_7;
