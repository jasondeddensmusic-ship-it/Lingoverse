// Italian placement-quiz question bank.
// Schema: { id, level, q, opts[], ans, category? }

export const ITALIAN_PLACEMENT = [
  // ═══ A1.1 — greetings, essere basics, gender, numbers 1-10 ═══
  { id:"it-a11-1", level:"A1.1", q:"Which greeting is used in the morning?", opts:["Buonasera","Buongiorno","Buonanotte","Arrivederci"], ans:"Buongiorno", category:"greetings" },
  { id:"it-a11-2", level:"A1.1", q:"'Io ___ studentessa.' (I am a student — female.)", opts:["sono","sei","è","siamo"], ans:"sono", category:"essere" },
  { id:"it-a11-3", level:"A1.1", q:"Which article fits 'casa' (house, feminine)?", opts:["il","la","lo","un"], ans:"la", category:"articles" },
  { id:"it-a11-4", level:"A1.1", q:"Which number is 'sette'?", opts:["5","6","7","8"], ans:"7", category:"numbers" },
  { id:"it-a11-5", level:"A1.1", q:"'Mi ___ Maria.' (My name is Maria.)", opts:["chiamo","chiami","chiama","nomino"], ans:"chiamo", category:"intro" },

  // A1.1 reinforcement pool
  { id:"it-a11-6", level:"A1.1", q:"The plural of 'il libro' (the book) is:", opts:["i libro","le libri","i libri","il libri"], ans:"i libri", category:"plural" },
  { id:"it-a11-7", level:"A1.1", q:"'Come ___?' (How are you?)", opts:["stai","sei","hai","vai"], ans:"stai", category:"greetings" },

  // ═══ A1.2 — present tense -are/-ere/-ire verbs, articles, possessives ═══
  { id:"it-a12-1", level:"A1.2", q:"'Noi ___ a Roma.' (We live in Rome.)", opts:["abito","abiti","abita","abitiamo"], ans:"abitiamo", category:"present-tense" },
  { id:"it-a12-2", level:"A1.2", q:"'___ sorella è alta.' (My sister is tall.)", opts:["Mia","Mio","Miei","Mie"], ans:"Mia", category:"possessive" },
  { id:"it-a12-3", level:"A1.2", q:"Article before 'zaino' (masculine, starts with z):", opts:["il","lo","la","l'"], ans:"lo", category:"articles" },
  { id:"it-a12-4", level:"A1.2", q:"'Loro ___ molto caffè.' (They drink a lot of coffee.)", opts:["bevo","bevi","beve","bevono"], ans:"bevono", category:"present-tense" },
  { id:"it-a12-5", level:"A1.2", q:"'Ci sono ___ libri sul tavolo.' (There are some books on the table.)", opts:["un","una","dei","del"], ans:"dei", category:"partitive" },

  { id:"it-a12-6", level:"A1.2", q:"'Quanti anni ___?' (How old are you?)", opts:["sei","stai","hai","fai"], ans:"hai", category:"avere" },
  { id:"it-a12-7", level:"A1.2", q:"'Lei ___ 25 anni.' (She is 25.)", opts:["è","sta","ha","fa"], ans:"ha", category:"avere-age" },

  // ═══ A2.1 — passato prossimo, direct object pronouns, frequency ═══
  { id:"it-a21-1", level:"A2.1", q:"'Ieri ___ al cinema.' (Yesterday I went to the cinema.)", opts:["vado","sono andato","andavo","andrò"], ans:"sono andato", category:"passato-prossimo" },
  { id:"it-a21-2", level:"A2.1", q:"'Non mangio ___ carne.' (I never eat meat.)", opts:["mai","non","già","ancora"], ans:"mai", category:"negation" },
  { id:"it-a21-3", level:"A2.1", q:"Direct object pronoun for 'le chiavi' (fem. pl.):", opts:["la","li","le","lo"], ans:"le", category:"direct-object" },
  { id:"it-a21-4", level:"A2.1", q:"'Lui ___ i compiti.' (He did his homework.)", opts:["fa","ha fatto","faceva","farà"], ans:"ha fatto", category:"passato-prossimo" },
  { id:"it-a21-5", level:"A2.1", q:"Auxiliary for 'partire' in passato prossimo:", opts:["avere","essere","andare","venire"], ans:"essere", category:"auxiliary" },

  { id:"it-a21-6", level:"A2.1", q:"'Loro ___ a Milano l'anno scorso.' (They lived in Milan last year.)", opts:["vivono","hanno vissuto","vivevano","vivranno"], ans:"hanno vissuto", category:"passato-prossimo" },
  { id:"it-a21-7", level:"A2.1", q:"Which is a frequency adverb?", opts:["molto","sempre","troppo","qui"], ans:"sempre", category:"frequency" },

  // ═══ A2.2 — imperfetto, essere vs stare, comparativi ═══
  { id:"it-a22-1", level:"A2.2", q:"'Quando ero bambino, ___ molto.' (When I was a child, I played a lot.)", opts:["gioco","ho giocato","giocavo","giocherò"], ans:"giocavo", category:"imperfetto" },
  { id:"it-a22-2", level:"A2.2", q:"'La minestra ___ fredda.' (The soup is cold — current state.)", opts:["ha","è","sta","fa"], ans:"è", category:"essere-stato" },
  { id:"it-a22-3", level:"A2.2", q:"'Maria è ___ alta ___ Giovanni.' (Maria is taller than Giovanni.)", opts:["più … di","così … come","più … che","tanto … quanto"], ans:"più … di", category:"comparative" },
  { id:"it-a22-4", level:"A2.2", q:"'___ sempre in spiaggia d'estate.' (I always used to go to the beach in summer.)", opts:["Andavo","Sono andato","Andrò","Vado"], ans:"Andavo", category:"imperfetto" },
  { id:"it-a22-5", level:"A2.2", q:"'Il libro ___ sul tavolo.' (The book is on the table.)", opts:["ha","è","sta","fa"], ans:"è", category:"essere-posizione" },

  // ═══ B1.1 — congiuntivo presente, futuro, condizionale ═══
  { id:"it-b11-1", level:"B1.1", q:"'Voglio che lui ___ presto.' (I want him to come soon.)", opts:["viene","venga","veniva","verrà"], ans:"venga", category:"congiuntivo" },
  { id:"it-b11-2", level:"B1.1", q:"'Domani ___ dal medico.' (Tomorrow I will go to the doctor.)", opts:["andrò","andavo","sono andato","vado"], ans:"andrò", category:"futuro" },
  { id:"it-b11-3", level:"B1.1", q:"'Se avessi tempo, ___.' (If I had time, I would call you.)", opts:["ti chiamerò","ti chiamavo","ti chiamerei","ti ho chiamato"], ans:"ti chiamerei", category:"condizionale" },
  { id:"it-b11-4", level:"B1.1", q:"'È importante che lui ___ la verità.' (It is important that he know the truth.)", opts:["sa","sappia","sapeva","saprà"], ans:"sappia", category:"congiuntivo" },
  { id:"it-b11-5", level:"B1.1", q:"'Non credo che lei ___.' (I don't think she's here.)", opts:["è","sia","era","sarà"], ans:"sia", category:"congiuntivo-dubbio" },

  // ═══ B1.2 — passato prossimo vs imperfetto, discorso indiretto ═══
  { id:"it-b12-1", level:"B1.2", q:"'Quest'anno ___ tre paesi.' (This year I have visited three countries.)", opts:["visitavo","ho visitato","visiterò","visitai"], ans:"ho visitato", category:"passato-prossimo" },
  { id:"it-b12-2", level:"B1.2", q:"Past participle of 'scrivere':", opts:["scrivuto","scrivendo","scritto","scrisse"], ans:"scritto", category:"participio" },
  { id:"it-b12-3", level:"B1.2", q:"'Mi ha detto che ___ stanco.' (He told me he was tired.)", opts:["è","era","sia","fosse"], ans:"era", category:"discorso-indiretto" },
  { id:"it-b12-4", level:"B1.2", q:"'Dormiva quando il telefono ___.' (She was sleeping when the phone rang.)", opts:["suona","ha suonato","suonava","suonerà"], ans:"ha suonato", category:"imperfetto-vs-passato" },
  { id:"it-b12-5", level:"B1.2", q:"Past participle of 'aprire':", opts:["aperto","aprito","aprendo","aprì"], ans:"aperto", category:"participio" },

  // ═══ B2.1 — condizionale passato, congiuntivo passato, voce passiva ═══
  { id:"it-b21-1", level:"B2.1", q:"'Se avessi avuto soldi, ___ una macchina.' (If I had had money, I would have bought a car.)", opts:["avrei comprato","comprerei","ho comprato","compravo"], ans:"avrei comprato", category:"condizionale-passato" },
  { id:"it-b21-2", level:"B2.1", q:"'Cerco qualcuno che ___ francese.' (I'm looking for someone who speaks French.)", opts:["parla","parli","parlava","parlerà"], ans:"parli", category:"congiuntivo-relativo" },
  { id:"it-b21-3", level:"B2.1", q:"'Il libro ___ scritto da Eco.' (The book was written by Eco.) — passivo passato prossimo", opts:["è stato","viene","è","fu"], ans:"è stato", category:"passiva" },
  { id:"it-b21-4", level:"B2.1", q:"'Benché ___ stanco, ha continuato.' (Although he was tired, he continued.)", opts:["era","fosse","è","sia"], ans:"fosse", category:"congiuntivo-concessivo" },
  { id:"it-b21-5", level:"B2.1", q:"Which expresses a hypothetical regret about the past?", opts:["Se avessi tempo","Se ho tempo","Se avessi avuto tempo","Se avevo tempo"], ans:"Se avessi avuto tempo", category:"condizionale-passato" },

  // ═══ B2.2 — nominalizzazione, registro, connettivi avanzati ═══
  { id:"it-b22-1", level:"B2.2", q:"'___ dei suoi sforzi, ha fallito.' (Despite his efforts, he failed.)", opts:["Grazie","Nonostante","A causa","Durante"], ans:"Nonostante", category:"connettivi" },
  { id:"it-b22-2", level:"B2.2", q:"Nominalization of 'decidere' (to decide):", opts:["la decisione","il decidere","la decisa","decidendo"], ans:"la decisione", category:"nominalizzazione" },
  { id:"it-b22-3", level:"B2.2", q:"Most formal register for a request:", opts:["Fallo!","Potrebbe farlo, per favore?","Dovresti farlo.","Fallo pure."], ans:"Potrebbe farlo, per favore?", category:"registro" },
  { id:"it-b22-4", level:"B2.2", q:"'Per quanto ___ di farlo, non ci riesce.' (However hard she tries, she can't manage.)", opts:["cerca","cerchi","cercasse","abbia cercato"], ans:"cerchi", category:"congiuntivo-concessivo" },
  { id:"it-b22-5", level:"B2.2", q:"'Spero che ___ presto.' (I hope he arrives soon.)", opts:["arriva","arrivi","arrivò","arriverà"], ans:"arrivi", category:"congiuntivo-desiderio" },
];

export const QUESTIONS_BY_LEVEL = {};
for (const q of ITALIAN_PLACEMENT) {
  QUESTIONS_BY_LEVEL[q.level] = QUESTIONS_BY_LEVEL[q.level] || [];
  QUESTIONS_BY_LEVEL[q.level].push(q);
}

export const LEVEL_ORDER = ['A1.1','A1.2','A2.1','A2.2','B1.1','B1.2','B2.1','B2.2'];

export default ITALIAN_PLACEMENT;
