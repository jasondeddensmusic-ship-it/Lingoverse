// Spanish placement-quiz question bank.
//
// Organized by CEFR sub-level. Each sub-level needs ≥ 5 questions. The
// ceiling+forgiveness algorithm (see src/pages/PlacementQuiz.jsx) feeds
// baseline questions; on every wrong answer, it injects 2 reinforcement
// questions from the same level's pool. Recovery resets the wrong streak.
//
// Schema: { id, level, q, opts[], ans, category? }

export const SPANISH_PLACEMENT = [
  // ═══ A1.1 : greetings, ser/estar basics, gender, numbers 1-10 ═══
  { id:"a11-1", level:"A1.1", q:"Which greeting is used in the morning?", opts:["Buenas tardes","Buenos días","Buenas noches","Hasta luego"], ans:"Buenos días", category:"greetings" },
  { id:"a11-2", level:"A1.1", q:"'Yo ___ estudiante.' (I am a student.)", opts:["soy","estoy","es","eres"], ans:"soy", category:"ser/estar" },
  { id:"a11-3", level:"A1.1", q:"The feminine form of 'amigo' is:", opts:["amiga","amigos","amigas","amigo"], ans:"amiga", category:"gender" },
  { id:"a11-4", level:"A1.1", q:"Which number is 'siete'?", opts:["5","6","7","8"], ans:"7", category:"numbers" },
  { id:"a11-5", level:"A1.1", q:"'Me ___ María.' (My name is María.)", opts:["llama","llamo","llamas","llamamos"], ans:"llamo", category:"intro" },

  // A1.1 reinforcement pool
  { id:"a11-6", level:"A1.1", q:"The plural of 'el libro' is:", opts:["los libro","las libros","los libros","el libros"], ans:"los libros", category:"plural" },
  { id:"a11-7", level:"A1.1", q:"'¿Cómo ___?' (How are you?)", opts:["estás","eres","tienes","haces"], ans:"estás", category:"ser/estar" },
  { id:"a11-8", level:"A1.1", q:"Which is NOT a greeting?", opts:["Hola","Adiós","Gracias","Buenos días"], ans:"Gracias", category:"greetings" },

  // ═══ A1.2 : present tense regular verbs, articles, possessives ═══
  { id:"a12-1", level:"A1.2", q:"'Nosotros ___ en Madrid.' (We live in Madrid.)", opts:["vivimos","vives","vive","viven"], ans:"vivimos", category:"present-tense" },
  { id:"a12-2", level:"A1.2", q:"'___ hermana es alta.' (My sister is tall.)", opts:["Mi","Tu","Su","Mis"], ans:"Mi", category:"possessive" },
  { id:"a12-3", level:"A1.2", q:"Which article fits 'problema'?", opts:["la","el","los","las"], ans:"el", category:"article-gotcha" },
  { id:"a12-4", level:"A1.2", q:"'Ellos ___ mucho café.' (They drink a lot of coffee.)", opts:["bebo","bebes","beben","bebemos"], ans:"beben", category:"present-tense" },
  { id:"a12-5", level:"A1.2", q:"'Hay ___ libros en la mesa.' (There are some books...)", opts:["un","una","unos","unas"], ans:"unos", category:"indefinite-article" },

  { id:"a12-6", level:"A1.2", q:"'¿Cuántos años ___?' (How old are you?)", opts:["eres","estás","tienes","haces"], ans:"tienes", category:"tener-expressions" },
  { id:"a12-7", level:"A1.2", q:"'Ella ___ 25 años.' (She is 25.)", opts:["es","está","tiene","hace"], ans:"tiene", category:"tener-age" },

  // ═══ A2.1 : preterite, frequency adverbs, direct objects ═══
  { id:"a21-1", level:"A2.1", q:"'Ayer ___ al cine.' (Yesterday I went to the movies.)", opts:["voy","fui","iba","iré"], ans:"fui", category:"preterite-irregular" },
  { id:"a21-2", level:"A2.1", q:"'Nunca ___ carne.' (I never eat meat.)", opts:["como","comí","comía","comeré"], ans:"como", category:"frequency" },
  { id:"a21-3", level:"A2.1", q:"Direct object pronoun for 'las llaves':", opts:["la","lo","las","los"], ans:"las", category:"direct-object" },
  { id:"a21-4", level:"A2.1", q:"'Él ___ la tarea.' (He did the homework.)", opts:["hizo","hacía","hace","haría"], ans:"hizo", category:"preterite-irregular" },
  { id:"a21-5", level:"A2.1", q:"'¿Cuándo ___ vosotros?' (When did you all arrive?)", opts:["llegáis","llegasteis","llegábais","llegaréis"], ans:"llegasteis", category:"preterite-vosotros" },

  { id:"a21-6", level:"A2.1", q:"'Ellos ___ en Madrid el año pasado.' (They lived in Madrid last year.)", opts:["viven","vivieron","vivían","vivirán"], ans:"vivieron", category:"preterite" },
  { id:"a21-7", level:"A2.1", q:"Which is a frequency adverb?", opts:["mucho","siempre","muy","aquí"], ans:"siempre", category:"frequency" },

  // ═══ A2.2 : imperfect, ser vs estar nuance, comparatives ═══
  { id:"a22-1", level:"A2.2", q:"'Cuando era niño, ___ mucho.' (When I was a child, I played a lot.)", opts:["juego","jugué","jugaba","jugaré"], ans:"jugaba", category:"imperfect" },
  { id:"a22-2", level:"A2.2", q:"'La sopa ___ fría.' (The soup is cold right now.)", opts:["es","está","ha","tiene"], ans:"está", category:"ser-vs-estar" },
  { id:"a22-3", level:"A2.2", q:"'María es ___ alta ___ Juan.' (María is taller than Juan.)", opts:["más … que","tan … como","más … de","menor … que"], ans:"más … que", category:"comparative" },
  { id:"a22-4", level:"A2.2", q:"Choose the imperfect: 'Siempre ___ a la playa en verano.'", opts:["fui","iba","iré","voy"], ans:"iba", category:"imperfect" },
  { id:"a22-5", level:"A2.2", q:"'El libro ___ encima de la mesa.' (The book is on the table.)", opts:["es","está","hay","tiene"], ans:"está", category:"ser-vs-estar" },

  // ═══ B1.1 : subjunctive intro, future, conditionals (simple) ═══
  { id:"b11-1", level:"B1.1", q:"'Quiero que ___ pronto.' (I want you to come soon.)", opts:["vienes","vengas","venías","viniste"], ans:"vengas", category:"subjunctive-volition" },
  { id:"b11-2", level:"B1.1", q:"'Mañana ___ al médico.' (Tomorrow I will go to the doctor.)", opts:["iré","iba","fui","voy a"], ans:"iré", category:"simple-future" },
  { id:"b11-3", level:"B1.1", q:"'Si tengo tiempo, ___.' (If I have time, I will call you.)", opts:["te llamaría","te llamé","te llamaba","te llamaré"], ans:"te llamaré", category:"conditional-type-1" },
  { id:"b11-4", level:"B1.1", q:"'Es importante que él ___ la verdad.' (It's important that he know the truth.)", opts:["sabe","sepa","sabría","supo"], ans:"sepa", category:"subjunctive-impersonal" },
  { id:"b11-5", level:"B1.1", q:"'No creo que ella ___.' (I don't think she's here.)", opts:["está","esté","estaba","estará"], ans:"esté", category:"subjunctive-doubt" },

  // ═══ B1.2 : present perfect, past participles, reported speech (basic) ═══
  { id:"b12-1", level:"B1.2", q:"'Este año ___ tres países.' (This year I have visited three countries.)", opts:["visité","he visitado","visitaba","visitaré"], ans:"he visitado", category:"present-perfect" },
  { id:"b12-2", level:"B1.2", q:"Past participle of 'escribir':", opts:["escribido","escribiendo","escrito","escribió"], ans:"escrito", category:"participle-irregular" },
  { id:"b12-3", level:"B1.2", q:"'Me dijo que ___ cansado.' (He told me he was tired.)", opts:["está","estaba","estuvo","estará"], ans:"estaba", category:"reported-speech" },
  { id:"b12-4", level:"B1.2", q:"'Todavía no ___ la película.' (I still haven't seen the movie.)", opts:["vi","veo","he visto","veré"], ans:"he visto", category:"present-perfect" },
  { id:"b12-5", level:"B1.2", q:"Past participle of 'abrir':", opts:["abierto","abrido","abriendo","abrió"], ans:"abierto", category:"participle-irregular" },

  // ═══ B2.1 : conditionals type 2/3, subjunctive in relative clauses ═══
  { id:"b21-1", level:"B2.1", q:"'Si tuviera dinero, ___ un coche.' (If I had money, I would buy a car.)", opts:["compré","compro","compraría","comprara"], ans:"compraría", category:"conditional-type-2" },
  { id:"b21-2", level:"B2.1", q:"'Busco un hombre que ___ francés.' (I'm looking for a man who speaks French.)", opts:["habla","hable","hablaba","hablaría"], ans:"hable", category:"subjunctive-relative" },
  { id:"b21-3", level:"B2.1", q:"'Si hubiera sabido, ___.' (If I had known, I would have come.)", opts:["vine","he venido","había venido","habría venido"], ans:"habría venido", category:"conditional-type-3" },
  { id:"b21-4", level:"B2.1", q:"'Cuando ___ a Madrid, te llamaré.' (When I arrive in Madrid, I'll call you.)", opts:["llego","llegue","llegaré","llegaba"], ans:"llegue", category:"subjunctive-time-clause" },
  { id:"b21-5", level:"B2.1", q:"Which expresses regret about the past?", opts:["Si tuviera tiempo","Si tengo tiempo","Si hubiera tenido tiempo","Si tenía tiempo"], ans:"Si hubiera tenido tiempo", category:"conditional-type-3" },

  // ═══ B2.2 : passive se, advanced connectors, register ═══
  { id:"b22-1", level:"B2.2", q:"'___ habla español en Cuba.' (Spanish is spoken in Cuba.)", opts:["Es","Se","Ha","Hay"], ans:"Se", category:"passive-se" },
  { id:"b22-2", level:"B2.2", q:"'No lo haré, ___ me paguen bien.' (I won't do it unless they pay me well.)", opts:["aunque","a menos que","porque","si"], ans:"a menos que", category:"subjunctive-connectors" },
  { id:"b22-3", level:"B2.2", q:"Which is the most formal?", opts:["Quiero que vengas","Me gustaría que vinieras","Ven aquí","Te quiero aquí"], ans:"Me gustaría que vinieras", category:"register" },
  { id:"b22-4", level:"B2.2", q:"'___ llueva, iremos al parque.' (Even if it rains, we'll go to the park.)", opts:["Aunque","Porque","Cuando","Como"], ans:"Aunque", category:"concessive" },
  { id:"b22-5", level:"B2.2", q:"'Ojalá que ___ pronto.' (I hope he arrives soon.)", opts:["llega","llegue","llegó","llegará"], ans:"llegue", category:"subjunctive-wishes" },
];

// Group by level for quick lookup
export const QUESTIONS_BY_LEVEL = {};
for (const q of SPANISH_PLACEMENT) {
  QUESTIONS_BY_LEVEL[q.level] = QUESTIONS_BY_LEVEL[q.level] || [];
  QUESTIONS_BY_LEVEL[q.level].push(q);
}

export const LEVEL_ORDER = ['A1.1','A1.2','A2.1','A2.2','B1.1','B1.2','B2.1','B2.2'];

export default SPANISH_PLACEMENT;
