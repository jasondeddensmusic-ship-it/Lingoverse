// Spanish B2 Final Batch - Lesson 9: Politics & Society
const LESSON_9 = {
  id:"esv2_b2fin_l9", title:"Política y Sociedad", icon:"🏛️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Política y Sociedad",
     desc:"Build vocabulary for discussing politics, governance, and social issues. Essential for understanding news and expressing opinions on civic matters.",
     goals:["Describe political systems and democratic processes","Discuss social issues and civic participation","Express opinions about governance and public policy"]},

    {type:"teach", trg:"la ciudadanía", src:"citizenship", pos:"noun", gender:"f",
     note:"The status of being a citizen, with its rights and responsibilities.",
     example:"A: Solicitó la ciudadanía española tras vivir diez años aquí.\nB: La ciudadanía implica derechos y deberes.",
     exampleSrc:"A: He applied for Spanish citizenship after living here for ten years.\nB: Citizenship implies rights and duties.",
     funFact:"From 'ciudadano' (citizen), from 'ciudad' (city), Latin 'civitas'. Citizenship was originally tied to city membership."},

    {type:"teach", trg:"la legislatura", src:"the legislature / legislative term", pos:"noun", gender:"f",
     note:"The period during which a parliament holds office, typically four years in Spain.",
     example:"A: Esta legislatura termina en diciembre.\nB: Durante esta legislatura se aprobaron leyes importantes.",
     exampleSrc:"A: This legislative term ends in December.\nB: During this legislative term, important laws were passed.",
     funFact:"From Latin 'legislatura'. 'Lex' (law) + 'latura' (carrying): the period of 'carrying' laws into effect."},

    {type:"teach", trg:"el referéndum", src:"the referendum", pos:"noun", gender:"m",
     note:"A direct popular vote on a specific political question.",
     example:"A: ¿Hubo un referéndum sobre esta cuestión?\nB: El referéndum se celebrará en noviembre.",
     exampleSrc:"A: Was there a referendum on this issue?\nB: The referendum will be held in November.",
     funFact:"From Latin 'referendum' (thing to be referred). The people are 'referred to' for their direct opinion."},

    {type:"teach", trg:"el manifiesto", src:"the manifesto", pos:"noun", gender:"m",
     note:"A public declaration of political aims and principles.",
     example:"A: El partido publicó su manifiesto electoral.\nB: El manifiesto promete reformas en educación y sanidad.",
     exampleSrc:"A: The party published its electoral manifesto.\nB: The manifesto promises reforms in education and healthcare.",
     funFact:"From Latin 'manifestus' (caught in the act/obvious). A manifesto makes a party's intentions 'manifest'."},

    {type:"teach", trg:"el escaño", src:"the parliamentary seat", pos:"noun", gender:"m",
     note:"A seat in parliament. Winning seats determines who governs.",
     example:"A: El partido ganó 120 escaños en las elecciones.\nB: No tienen suficientes escaños para gobernar solos.",
     exampleSrc:"A: The party won 120 seats in the elections.\nB: They don't have enough seats to govern alone.",
     funFact:"From Latin 'scamnum' (bench). Medieval parliaments used benches, and each seat represented a district."},

    {type:"teach", trg:"la coalición", src:"the coalition", pos:"noun", gender:"f",
     note:"An alliance between political parties to form a government.",
     example:"A: Los dos partidos formaron una coalición de gobierno.\nB: Las coaliciones son comunes cuando nadie tiene mayoría.",
     exampleSrc:"A: The two parties formed a governing coalition.\nB: Coalitions are common when no one has a majority.",
     funFact:"From Latin 'coalitio' (growing together). 'Co-' (together) + 'alere' (to grow/nourish). Parties 'grow together'."},

    {type:"teach", trg:"el sufragio", src:"suffrage / the right to vote", pos:"noun", gender:"m",
     note:"The right to vote in political elections.",
     example:"A: El sufragio universal se logró en España en 1931.\nB: Ejercer el sufragio es un deber cívico.",
     exampleSrc:"A: Universal suffrage was achieved in Spain in 1931.\nB: Exercising suffrage is a civic duty.",
     funFact:"From Latin 'suffragium' (voting tablet). The suffragette movement fought for women's right to vote."},

    {type:"mc", q:"¿Qué es una 'coalición' en política?",
     opts:["Un tipo de elección","Una alianza entre partidos para gobernar","Un referéndum popular","Una protesta ciudadana"],
     ans:"Una alianza entre partidos para gobernar",
     hint:"This is formed when no single party has enough seats to govern, so multiple parties join forces."},

    {type:"teach", trg:"la democracia", src:"democracy", pos:"noun", gender:"f",
     note:"A system of government by the whole population, through elected representatives.",
     example:"A: La democracia española se restableció en 1978.\nB: La democracia requiere participación ciudadana.",
     exampleSrc:"A: Spanish democracy was re-established in 1978.\nB: Democracy requires citizen participation.",
     funFact:"From Greek 'demokratia'. 'Demos' (people) + 'kratos' (power/rule). Literally 'rule by the people'."},

    {type:"teach", trg:"el diputado", src:"the member of parliament", pos:"noun", gender:"m",
     note:"An elected representative in the congress or parliament.",
     example:"A: La diputada presentó una propuesta de ley.\nB: Los diputados debatieron durante seis horas.",
     exampleSrc:"A: The MP presented a bill.\nB: The members of parliament debated for six hours.",
     funFact:"From Latin 'deputatus' (appointed). Each diputado is 'appointed' by the voters to represent them."},

    {type:"teach", trg:"la reforma", src:"the reform", pos:"noun", gender:"f",
     note:"A change made to improve a system, law, or institution.",
     example:"A: El gobierno propone una reforma del sistema educativo.\nB: Las reformas laborales afectan a millones de trabajadores.",
     exampleSrc:"A: The government proposes a reform of the education system.\nB: Labor reforms affect millions of workers.",
     funFact:"From Latin 'reformare' (to form again). 'Re-' (again) + 'formare' (to shape). Reforming reshapes systems."},

    {type:"fb", s:"El partido necesita 176 {1} para tener mayoría absoluta.", a:["escaños"],
     opts:["escaños","referéndums","manifiestos","coaliciones"],
     hint:"These are the seats in parliament that parties win through elections.",
     sSrc:"The party needs 176 {1} to have an absolute majority."},

    {type:"teach", trg:"la campaña electoral", src:"the election campaign", pos:"noun", gender:"f",
     note:"The organized effort by a candidate or party to win an election.",
     example:"A: La campaña electoral dura dos semanas en España.\nB: Los candidatos recorren el país durante la campaña electoral.",
     exampleSrc:"A: The election campaign lasts two weeks in Spain.\nB: Candidates travel the country during the campaign.",
     funFact:"'Campaña' from Latin 'campania' (open field). Military campaigns were fought in the field, political ones for votes."},

    {type:"teach", trg:"el Congreso", src:"the Congress / Parliament", pos:"noun", gender:"m",
     note:"The lower house of the Spanish parliament. Also means congress/conference.",
     example:"A: El Congreso aprobó la nueva ley de vivienda.\nB: Los debates en el Congreso pueden ser muy intensos.",
     exampleSrc:"A: Congress approved the new housing law.\nB: Debates in Congress can be very intense.",
     funFact:"From Latin 'congressus' (meeting/coming together). 'Con-' (together) + 'gradi' (to walk/step)."},

    {type:"teach", trg:"la igualdad", src:"equality", pos:"noun", gender:"f",
     note:"The state of being equal in rights, status, and opportunities.",
     example:"A: La igualdad de género es un objetivo fundamental.\nB: Luchamos por la igualdad de oportunidades para todos.",
     exampleSrc:"A: Gender equality is a fundamental goal.\nB: We fight for equal opportunities for everyone.",
     funFact:"From Latin 'aequalitas'. 'Aequalis' (equal) gave us both 'igual' in Spanish and 'equal' in English."},

    {type:"teach", trg:"la corrupción", src:"corruption", pos:"noun", gender:"f",
     note:"Dishonest conduct by those in power, especially for personal gain.",
     example:"A: Los escándalos de corrupción erosionan la confianza ciudadana.\nB: La lucha contra la corrupción es una prioridad.",
     exampleSrc:"A: Corruption scandals erode citizen trust.\nB: The fight against corruption is a priority.",
     funFact:"From Latin 'corruptio' (decay). 'Cor-' (together) + 'rumpere' (to break). Corruption 'breaks' public trust."},

    {type:"mc", q:"¿Cuántos escaños necesita un partido para tener mayoría absoluta en el Congreso español?",
     opts:["100","176","200","350"],
     ans:"176",
     hint:"The Spanish Congress has 350 seats, so a majority requires more than half."},

    {type:"teach", trg:"la manifestación", src:"the demonstration / protest", pos:"noun", gender:"f",
     note:"A public gathering to express political or social demands.",
     example:"A: Miles de personas participaron en la manifestación.\nB: La manifestación fue pacífica y transcurrió sin incidentes.",
     exampleSrc:"A: Thousands of people participated in the demonstration.\nB: The demonstration was peaceful and went without incident.",
     funFact:"From 'manifestar' (to manifest/show). Protesters 'make manifest' their demands publicly."},

    {type:"teach", trg:"la abstención", src:"abstention", pos:"noun", gender:"f",
     note:"The act of choosing not to vote in an election or parliamentary vote.",
     example:"A: La abstención fue del 30% en las últimas elecciones.\nB: Una alta abstención debilita la legitimidad del resultado.",
     exampleSrc:"A: Abstention was 30% in the last elections.\nB: High abstention weakens the legitimacy of the result.",
     funFact:"From Latin 'abstentio' (holding back). 'Abs-' (away) + 'tenere' (to hold). Holding yourself away from voting."},

    {type:"fb", s:"La {1} contra el cambio climático reunió a miles de jóvenes.", a:["manifestación"],
     opts:["manifestación","coalición","legislatura","abstención"],
     hint:"This is a public gathering where people march and voice their demands or protest.",
     sSrc:"The {1} against climate change brought together thousands of young people."},

    {type:"match", pairs:[
      {trg:"la ciudadanía", src:"citizenship"},
      {trg:"el referéndum", src:"the referendum"},
      {trg:"el sufragio", src:"suffrage"},
      {trg:"la democracia", src:"democracy"}
    ]},

    {type:"mc", q:"¿Qué significa una tasa de abstención alta?",
     opts:["Que muchos votaron","Que muchos eligieron no votar","Que hubo fraude electoral","Que ganó la coalición"],
     ans:"Que muchos eligieron no votar",
     hint:"This rate measures the percentage of eligible voters who chose to stay away from the polls."},

    {type:"fb", s:"El gobierno propone una {1} del sistema de pensiones.", a:["reforma"],
     opts:["reforma","campaña","manifestación","corrupción"],
     hint:"This word means a change or improvement made to an existing system or institution.",
     sSrc:"The government proposes a {1} of the pension system."},

    {type:"match", pairs:[
      {trg:"el diputado", src:"the member of parliament"},
      {trg:"la igualdad", src:"equality"},
      {trg:"la corrupción", src:"corruption"},
      {trg:"la campaña electoral", src:"the election campaign"}
    ]},

    {type:"mc", q:"¿Qué documento publica un partido político con sus objetivos antes de las elecciones?",
     opts:["Un referéndum","Un manifiesto","Una reforma","Una sentencia"],
     ans:"Un manifiesto",
     hint:"This public declaration outlines the party's goals, values, and policy proposals."}
  ]
};
export default LESSON_9;
