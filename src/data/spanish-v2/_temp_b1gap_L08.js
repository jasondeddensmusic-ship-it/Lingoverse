// L08: Law & Society - Rights, governance, and social structures
const LESSON_8 = {
  id:"esv2_b1gap_l8", title:"Sociedad y leyes", icon:"\u{2696}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Sociedad y leyes",
     desc:"Understand society and its structures. Learn vocabulary for law, governance, and social institutions.",
     goals:["Learn 20 society and law words","Discuss rights and institutions","Describe social structures"]},

    {type:"teach", trg:"abogar", src:"to advocate, to plead", pos:"verb", gender:null,
     note:"Regular -ar verb. Abogar por = to advocate for.\nRelated to 'abogado' (lawyer).",
     example:"A: Aboga por los derechos de los animales.\nB: Es una causa muy noble.",
     exampleSrc:"A: She advocates for animal rights.\nB: It is a very noble cause.",
     funFact:"From Latin 'advocare' (to call to one's aid). An 'abogado' is someone called to speak on your behalf. English 'advocate' shares the root."},

    {type:"teach", trg:"la adquisici\u00f3n", src:"the acquisition", pos:"noun", gender:"f",
     note:"Feminine noun. Buying or obtaining something.\nFrom 'adquirir' (to acquire).",
     example:"A: La adquisici\u00f3n de la empresa cost\u00f3 millones.\nB: Es una inversi\u00f3n enorme.",
     exampleSrc:"A: The acquisition of the company cost millions.\nB: It is an enormous investment.",
     funFact:"From Latin 'acquisitio'. 'Adquirir' is an irregular verb: adquiero, adquieres. The -ir stem changes to -ier in stressed positions."},

    {type:"teach", trg:"adquirir", src:"to acquire, to purchase", pos:"verb", gender:null,
     note:"Irregular -ir verb. i > ie in stressed forms.\nAdquiero, adquieres, adquiere.",
     example:"A: Quiero adquirir m\u00e1s experiencia.\nB: Podr\u00edas hacer unas pr\u00e1cticas.",
     exampleSrc:"A: I want to acquire more experience.\nB: You could do an internship.",
     funFact:"From Latin 'acquirere' (to seek in addition). Note the stem change: adquiero but adquirimos. Same pattern as 'inquirir' (to inquire)."},

    {type:"teach", trg:"la aduana", src:"the customs (border)", pos:"noun", gender:"f",
     note:"Feminine noun. Border control for goods.\nPasar la aduana = to go through customs.",
     example:"A: \u00bfTuviste problemas en la aduana?\nB: No, fue muy r\u00e1pido.",
     exampleSrc:"A: Did you have problems at customs?\nB: No, it was very quick.",
     funFact:"From Arabic 'ad-diwan' (the register). The diwan was a government office in the Islamic world. This word traveled from Arabic to Spanish to many European languages."},

    {type:"teach", trg:"la agresi\u00f3n", src:"the aggression, assault", pos:"noun", gender:"f",
     note:"Feminine noun. A physical or verbal attack.\nLegal term for assault.",
     example:"A: Denunci\u00f3 la agresi\u00f3n a la polic\u00eda.\nB: Hizo bien. Eso no se puede tolerar.",
     exampleSrc:"A: She reported the assault to the police.\nB: She did well. That cannot be tolerated.",
     funFact:"From Latin 'aggressio' (an attack). In Spanish law, 'agresi\u00f3n' covers both physical attacks and threats. 'Agresor/a' is the perpetrator."},

    {type:"mc",
     q:"\u00bfD\u00f3nde revisan tu equipaje cuando entras en otro pa\u00eds?",
     opts:["en la aduana","en la alcald\u00eda","en la asesor\u00eda","en la aptitud"],
     ans:"en la aduana",
     hint:"A border control checkpoint where officials inspect goods entering or leaving a country."},

    {type:"teach", trg:"advertir", src:"to warn, to notice", pos:"verb", gender:null,
     note:"Irregular -ir verb. e > ie in stressed forms.\nAdvierto, adviertes. Two meanings.",
     example:"A: Te advierto, el camino es peligroso.\nB: Gracias por avisarme.",
     exampleSrc:"A: I warn you, the road is dangerous.\nB: Thanks for letting me know.",
     funFact:"From Latin 'advertere' (to turn toward). Both meanings connect: you 'turn attention toward' something, either noticing it or making others notice."},

    {type:"teach", trg:"el asesor", src:"the advisor, consultant", pos:"noun", gender:"m",
     note:"Masculine noun. La asesora = female advisor.\nAsesor fiscal = tax advisor.",
     example:"A: Necesito un asesor financiero.\nB: Mi hermano trabaja como asesor, te lo presento.",
     exampleSrc:"A: I need a financial advisor.\nB: My brother works as an advisor, I will introduce you.",
     funFact:"From Latin 'assessor' (one who sits beside). Originally someone who sat beside a judge to give advice. Now used for any expert consultant."},

    {type:"teach", trg:"asesorar", src:"to advise, to consult", pos:"verb", gender:null,
     note:"Regular -ar verb. To provide expert advice.\nAsesorar en = to advise on.",
     example:"A: \u00bfQuien te asesora en temas legales?\nB: Un abogado amigo de la familia.",
     exampleSrc:"A: Who advises you on legal matters?\nB: A lawyer friend of the family.",
     funFact:"From the noun 'asesor'. The reflexive 'asesorarse' means to seek advice: 'Me asesor\u00e9 antes de firmar' (I got advice before signing)."},

    {type:"teach", trg:"la asesor\u00eda", src:"the consultancy, advisory firm", pos:"noun", gender:"f",
     note:"Feminine noun. A consulting office or service.\nAsesor\u00eda legal = legal consultancy.",
     example:"A: Trabajo en una asesor\u00eda fiscal.\nB: \u00bfAyud\u00e1is con la declaraci\u00f3n de la renta?",
     exampleSrc:"A: I work in a tax consultancy.\nB: Do you help with tax returns?",
     funFact:"The trio 'asesor/asesorar/asesor\u00eda' shows a common Spanish word-building pattern: person (-or), action (-ar), place/service (-\u00eda)."},

    {type:"fb",
     s:"Te {1} que no firmes ese contrato sin leerlo.",
     a:["advierto"],
     opts:["advierto","asesoro","adquiero","abogo"],
     hint:"A verb meaning 'to warn' with an irregular stem change: e becomes ie.",
     sSrc:"I {1} you not to sign that contract without reading it."},

    {type:"teach", trg:"apelar", src:"to appeal", pos:"verb", gender:null,
     note:"Regular -ar verb. Legal: to appeal a decision.\nApelar a = to appeal to (emotions, reason).",
     example:"A: Van a apelar la sentencia.\nB: Esperemos que el juez cambie de opini\u00f3n.",
     exampleSrc:"A: They are going to appeal the sentence.\nB: Let us hope the judge changes his mind.",
     funFact:"From Latin 'appellare' (to address, call upon). In everyday use, 'apelar a la raz\u00f3n' means to appeal to reason."},

    {type:"teach", trg:"la aportaci\u00f3n", src:"the contribution", pos:"noun", gender:"f",
     note:"Feminine noun. A contribution of ideas, money, or effort.\nFrom 'aportar' (to contribute).",
     example:"A: Tu aportaci\u00f3n al proyecto fue clave.\nB: Gracias, fue un trabajo en equipo.",
     exampleSrc:"A: Your contribution to the project was key.\nB: Thanks, it was teamwork.",
     funFact:"From Latin 'apportare' (to bring to). In economics, 'aportaci\u00f3n social' means capital contribution to a company by shareholders."},

    {type:"teach", trg:"asignar", src:"to assign, to allocate", pos:"verb", gender:null,
     note:"Regular -ar verb. To give someone a task or resource.\nAsignar recursos = to allocate resources.",
     example:"A: Me han asignado un nuevo proyecto.\nB: \u00bfEs interesante?",
     exampleSrc:"A: They have assigned me a new project.\nB: Is it interesting?",
     funFact:"From Latin 'assignare' (to mark out). The noun 'asignatura' (school subject) shares the root, as subjects are 'assigned' to students."},

    {type:"teach", trg:"la aptitud", src:"the aptitude, ability", pos:"noun", gender:"f",
     note:"Feminine noun. Natural talent or skill.\nTest de aptitud = aptitude test.",
     example:"A: Tiene mucha aptitud para la m\u00fasica.\nB: S\u00ed, toca tres instrumentos.",
     exampleSrc:"A: She has a lot of aptitude for music.\nB: Yes, she plays three instruments.",
     funFact:"From Latin 'aptitudo' (fitness). Not to be confused with 'actitud' (attitude). Aptitud = what you CAN do. Actitud = HOW you do it."},

    {type:"mc",
     q:"\u00bfQu\u00e9 haces si no est\u00e1s de acuerdo con una sentencia judicial?",
     opts:["apelar","abogar","asignar","asesorar"],
     ans:"apelar",
     hint:"A legal process where you formally request a higher court to review the decision."},

    {type:"teach", trg:"asociar", src:"to associate, to connect", pos:"verb", gender:null,
     note:"Regular -ar verb. To link or connect ideas.\nAsociarse con = to partner with.",
     example:"A: Siempre asocio el verano con la playa.\nB: Yo tambi\u00e9n, y con el helado.",
     exampleSrc:"A: I always associate summer with the beach.\nB: Me too, and with ice cream.",
     funFact:"From Latin 'associare' (to join). The reflexive 'asociarse' means to form a partnership. 'Asociaci\u00f3n' is the resulting organization."},

    {type:"teach", trg:"atribuir", src:"to attribute, to ascribe", pos:"verb", gender:null,
     note:"Irregular -ir verb. Like 'construir': atribuyo.\nAtribuir algo a = to attribute something to.",
     example:"A: Le atribuyen el invento a Edison.\nB: Pero Tesla tambi\u00e9n contribuy\u00f3.",
     exampleSrc:"A: They attribute the invention to Edison.\nB: But Tesla also contributed.",
     funFact:"From Latin 'attribuere' (to assign to). Like 'construir' and 'contribuir', adds a -y- in certain forms: atribuyo, atribuyes."},

    {type:"fb",
     s:"Me han {1} la tarea m\u00e1s dif\u00edcil del equipo.",
     a:["asignado"],
     opts:["asignado","asesorado","asociado","atribuido"],
     hint:"The past participle of a verb meaning to give someone a specific task or responsibility.",
     sSrc:"They have {1} me the hardest task on the team."},

    {type:"match", pairs:[
      {trg:"aduana", src:"customs"},
      {trg:"asesor", src:"advisor"},
      {trg:"agresi\u00f3n", src:"assault"},
      {trg:"aptitud", src:"aptitude"},
      {trg:"aportaci\u00f3n", src:"contribution"}
    ]}
  ]
};
export default LESSON_8;
