// B2 Gap Batch A — Lesson 03: Jeugd & Opvoeding
// Theme: Youth, education, upbringing

const LESSON_3 = {id:"nlv2_b2gA_l3", title:"Jeugd & Opvoeding", icon:"\u{1F9D2}", xp:40, board:true, steps:[
  {type:"intro", title:"Jeugd & Opvoeding",
   desc:"Learn vocabulary about youth culture, education systems, and upbringing in the Netherlands. These terms appear in NT2 reading passages about Dutch family life and social services.",
   goals:["Learn youth-related vocabulary","Discuss education and upbringing","Understand Dutch youth services terminology"]},

  {type:"teach", trg:"de jeugdbeweging", src:"youth movement", pos:"noun", gender:"c",
   note:"Compound: jeugd (youth) + beweging (movement).\nOrganized activities for young people.",
   example:"A: Was je als kind lid van een jeugdbeweging?\nB: Ja, ik zat bij de padvinderij.\nA: Dat is een bekende jeugdbeweging in Nederland.\nB: We gingen vaak kamperen en leerden samenwerken.",
   exampleSrc:"A: Were you a member of a youth movement as a child?\nB: Yes, I was in the scouts.\nA: That's a well-known youth movement in the Netherlands.\nB: We often went camping and learned to work together.",
   funFact:"In the Netherlands and Belgium, jeugdbewegingen like Scouting Nederland and the Chiro (Belgium) have hundreds of thousands of members. They are a major part of Dutch-speaking youth culture."},

  {type:"teach", trg:"de jeugdcriminaliteit", src:"juvenile crime", pos:"noun", gender:"c",
   note:"Compound: jeugd + criminaliteit (crime).\nA major topic in Dutch social policy debates.",
   example:"A: De jeugdcriminaliteit in de grote steden is een probleem.\nB: Wat zijn de oorzaken volgens jou?\nA: Armoede, gebrek aan kansen en een slechte thuissituatie.\nB: Preventie is waarschijnlijk effectiever dan straf.",
   exampleSrc:"A: Juvenile crime in the big cities is a problem.\nB: What are the causes in your opinion?\nA: Poverty, lack of opportunities, and a bad home situation.\nB: Prevention is probably more effective than punishment.",
   funFact:"The Netherlands has a separate youth justice system (jeugdstrafrecht) for offenders under 18. It focuses more on rehabilitation than punishment, reflecting the Dutch emphasis on resocialisatie."},

  {type:"teach", trg:"de jeugdrechter", src:"juvenile court judge", pos:"noun", gender:"c",
   note:"Compound: jeugd + rechter (judge).\nSpecializes in cases involving minors.",
   example:"A: De jeugdrechter heeft een bijzondere rol.\nB: Hoezo bijzonder?\nA: Hij of zij kijkt niet alleen naar de straf, maar ook naar de achtergrond.\nB: Dat is belangrijk bij jonge daders.",
   exampleSrc:"A: The juvenile court judge has a special role.\nB: How so special?\nA: He or she doesn't just look at the punishment, but also at the background.\nB: That's important with young offenders.",
   funFact:"Dutch jeugdrechters often order alternative sentences like community service or training programmes instead of detention. The goal is to prevent reoffending."},

  {type:"teach", trg:"de jeugdpsychiatrie", src:"child and adolescent psychiatry", pos:"noun", gender:"c",
   note:"Compound: jeugd + psychiatrie.\nMental health care for young people.",
   example:"A: Mijn neefje is doorverwezen naar de jeugdpsychiatrie.\nB: Wat is er aan de hand?\nA: Hij heeft gedragsproblemen op school.\nB: Goed dat hij professionele hulp krijgt.",
   exampleSrc:"A: My nephew has been referred to child psychiatry.\nB: What's going on?\nA: He has behavioural problems at school.\nB: Good that he's getting professional help.",
   funFact:"The Dutch jeugd-GGZ (youth mental health) sector faces long waiting lists. In 2023, some children waited over a year for treatment. This is a major political issue."},

  {type:"teach", trg:"de huiswerkbegeleiding", src:"homework tutoring, homework support", pos:"noun", gender:"c",
   note:"Compound: huiswerk (homework) + begeleiding (guidance).\nPaid or volunteer after-school help.",
   example:"A: Mijn dochter gaat twee keer per week naar huiswerkbegeleiding.\nB: Helpt dat?\nA: Ja, haar cijfers zijn flink verbeterd.\nB: Waar kan ik dat vinden voor mijn zoon?",
   exampleSrc:"A: My daughter goes to homework tutoring twice a week.\nB: Does that help?\nA: Yes, her grades have improved significantly.\nB: Where can I find that for my son?",
   funFact:"Huiswerkbegeleiding is a booming business in the Netherlands. Some parents pay hundreds of euros per month for private tutoring. Critics say it increases inequality in education."},

  {type:"teach", trg:"het internaat", src:"boarding school", pos:"noun", gender:"n",
   note:"From Latin 'internus' (internal).\nRare in the Netherlands, more common in Belgium.",
   example:"A: Ben jij naar een internaat gegaan?\nB: Nee, dat is vrij ongebruikelijk in Nederland.\nA: In Belgie zijn internaten veel normaler.\nB: Zou jij je kind naar een internaat sturen?",
   exampleSrc:"A: Did you go to a boarding school?\nB: No, that's quite uncommon in the Netherlands.\nA: In Belgium, boarding schools are much more normal.\nB: Would you send your child to a boarding school?",
   funFact:"While internaten are rare in the Netherlands, Belgium has many. The cultural difference reflects different views on child-rearing between the two Dutch-speaking countries."},

  {type:"tip", title:"Jeugd- Compounds",
   text:"The prefix jeugd- creates a family of youth-related terms:\n\n- jeugdbeweging (youth movement)\n- jeugdcriminaliteit (juvenile crime)\n- jeugdrechter (juvenile judge)\n- jeugdpsychiatrie (youth psychiatry)\n- jeugdzorg (youth care)\n- jeugdkamp (youth camp)\n\nAll are de-words (common gender) and use jeugd- without a linking element.",
   deepDive:{title:"The Dutch Youth Care System",
    text:"Since 2015, Dutch municipalities (gemeenten) are responsible for jeugdzorg (youth care). This includes:\n\n- Jeugdhulp: counselling and therapy\n- Jeugdbescherming: child protection\n- Jeugdreclassering: youth probation\n\nThe decentralization was controversial. Many municipalities struggled with budgets and waiting lists. The debate about how best to organize jeugdzorg continues."}},

  {type:"mc", q:"Welk woord betekent 'juvenile crime'?",
   opts:["de jeugdcriminaliteit","de jeugdbeweging","de jeugdrechter","de jeugdpsychiatrie"],
   ans:"de jeugdcriminaliteit",
   hint:"Jeugd (youth) + criminaliteit (crime). A societal problem, not an institution."},

  {type:"fb", s:"Mijn dochter gaat twee keer per week naar {1}.",
   a:["huiswerkbegeleiding"], opts:["huiswerkbegeleiding","jeugdbeweging","internaat","jeugdrechter"],
   hint:"After-school support where students get help with their homework.",
   sSrc:"My daughter goes to homework tutoring twice a week."},

  {type:"mc", q:"De jeugdrechter kijkt naar de achtergrond van de dader. Wat is een 'jeugdrechter'?",
   opts:["a juvenile court judge","a youth worker","a school principal","a social worker"],
   ans:"a juvenile court judge",
   hint:"A rechter (j...) who specializes in cases involving young people (jeugd)."},

  {type:"fb", s:"Hij is doorverwezen naar de {1} voor gedragsproblemen.",
   a:["jeugdpsychiatrie"], opts:["jeugdpsychiatrie","jeugdcriminaliteit","huiswerkbegeleiding","jeugdbeweging"],
   hint:"Mental health care specifically for children and teenagers.",
   sSrc:"He has been referred to child psychiatry for behavioural problems."},

  {type:"match", pairs:[
    {trg:"jeugdbeweging", src:"youth movement"},
    {trg:"jeugdcriminaliteit", src:"juvenile crime"},
    {trg:"jeugdrechter", src:"juvenile judge"},
    {trg:"jeugdpsychiatrie", src:"youth psychiatry"},
    {trg:"huiswerkbegeleiding", src:"homework tutoring"},
    {trg:"internaat", src:"boarding school"}
  ]},

  {type:"mc", q:"In welk land zijn internaten veel gewoner dan in Nederland?",
   opts:["Belgie","Duitsland","Frankrijk","Engeland"],
   ans:"Belgie",
   hint:"The other Dutch-speaking country, just south of the Netherlands."},

  {type:"fb", s:"Als kind was ik lid van een {1}.",
   a:["jeugdbeweging"], opts:["jeugdbeweging","jeugdcriminaliteit","internaat","jeugdrechter"],
   hint:"An organized group activity for young people, like scouts.",
   sSrc:"As a child I was a member of a youth movement."},

  {type:"drag_fill", s:"De {1} oordeelde dat de jongen naar {2} moest in plaats van naar de gevangenis.",
   blanks:{"1":"jeugdrechter","2":"jeugdpsychiatrie"},
   pool:["jeugdrechter","jeugdpsychiatrie","internaat","huiswerkbegeleiding","jeugdbeweging"],
   hint:"The judge for minors decided the boy needed mental health treatment, not prison."}
]};
export default LESSON_3;
