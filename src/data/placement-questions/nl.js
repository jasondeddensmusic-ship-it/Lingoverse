// Dutch placement-quiz question bank.
// Schema: { id, level, q, opts[], ans, category? }

export const DUTCH_PLACEMENT = [
  // ═══ A1.1 — greetings, zijn basics, gender, numbers 1-10 ═══
  { id:"nl-a11-1", level:"A1.1", q:"Which greeting is used in the morning?", opts:["Goedenavond","Goedemorgen","Goedenacht","Tot ziens"], ans:"Goedemorgen", category:"greetings" },
  { id:"nl-a11-2", level:"A1.1", q:"'Ik ___ student.' (I am a student.)", opts:["ben","bent","is","zijn"], ans:"ben", category:"zijn" },
  { id:"nl-a11-3", level:"A1.1", q:"Which article fits 'huis' (house, neuter)?", opts:["de","het","een","'t"], ans:"het", category:"articles" },
  { id:"nl-a11-4", level:"A1.1", q:"Which number is 'zeven'?", opts:["5","6","7","8"], ans:"7", category:"numbers" },
  { id:"nl-a11-5", level:"A1.1", q:"'Ik ___ Jan.' (My name is Jan.)", opts:["noem","heet","is","ben"], ans:"heet", category:"intro" },

  // A1.1 reinforcement pool
  { id:"nl-a11-6", level:"A1.1", q:"The plural of 'het boek' (book) is:", opts:["het boeken","de boekens","de boeken","de boekes"], ans:"de boeken", category:"plural" },
  { id:"nl-a11-7", level:"A1.1", q:"'Hoe ___ het?' (How are you? / How is it going?)", opts:["bent","gaat","is","doe"], ans:"gaat", category:"greetings" },

  // ═══ A1.2 — present tense verbs, articles, possessives ═══
  { id:"nl-a12-1", level:"A1.2", q:"'Wij ___ in Amsterdam.' (We live in Amsterdam.)", opts:["woon","woont","wonen","woonde"], ans:"wonen", category:"present-tense" },
  { id:"nl-a12-2", level:"A1.2", q:"'___ zus is groot.' (My sister is tall.)", opts:["Mijn","Jouw","Zijn","Haar"], ans:"Mijn", category:"possessive" },
  { id:"nl-a12-3", level:"A1.2", q:"Which article fits a common-gender (de-word) noun?", opts:["het","de","een","'t"], ans:"de", category:"articles" },
  { id:"nl-a12-4", level:"A1.2", q:"'Hij ___ veel koffie.' (He drinks a lot of coffee.)", opts:["drink","drinkt","drinken","dronk"], ans:"drinkt", category:"present-tense" },
  { id:"nl-a12-5", level:"A1.2", q:"'Er zijn ___ boeken op tafel.' (There are some books on the table.)", opts:["een","de","wat","het"], ans:"wat", category:"quantifiers" },

  { id:"nl-a12-6", level:"A1.2", q:"'Hoe oud ___ je?' (How old are you?)", opts:["bent","ben","zijn","is"], ans:"ben", category:"zijn" },
  { id:"nl-a12-7", level:"A1.2", q:"'Ze ___ 25 jaar oud.' (She is 25 years old.)", opts:["ben","bent","is","zijn"], ans:"is", category:"zijn" },

  // ═══ A2.1 — perfect tense, modal verbs, word order ═══
  { id:"nl-a21-1", level:"A2.1", q:"'Ik ___ gisteren naar de bioscoop ___.' (I went to the cinema yesterday.)", opts:["heb … gegaan","ben … gegaan","heb … geweest","ben … geweest"], ans:"ben … gegaan", category:"perfect" },
  { id:"nl-a21-2", level:"A2.1", q:"'Ik ___ Nederlands leren.' (I want to learn Dutch.)", opts:["kan","moet","wil","mag"], ans:"wil", category:"modal-verbs" },
  { id:"nl-a21-3", level:"A2.1", q:"In a main clause with 'gisteren' at the front, where does the verb go?", opts:["third position","second position","at the end","after subject"], ans:"second position", category:"word-order" },
  { id:"nl-a21-4", level:"A2.1", q:"'Hij ___ zijn huiswerk gemaakt.' (He has done his homework.)", opts:["heeft","is","had","was"], ans:"heeft", category:"perfect" },
  { id:"nl-a21-5", level:"A2.1", q:"'Je ___ hier niet roken.' (You may not smoke here.)", opts:["wil","kan","mag","moet"], ans:"mag", category:"modal-verbs" },

  { id:"nl-a21-6", level:"A2.1", q:"'Ze ___ vorig jaar in Utrecht gewoond.' (She lived in Utrecht last year.)", opts:["heeft","is","had","was"], ans:"heeft", category:"perfect" },
  { id:"nl-a21-7", level:"A2.1", q:"Which verb takes 'zijn' (not 'hebben') in the perfect tense?", opts:["maken","eten","gaan","kopen"], ans:"gaan", category:"auxiliary" },

  // ═══ A2.2 — imperfect (onvoltooid verleden), comparatives, separable verbs ═══
  { id:"nl-a22-1", level:"A2.2", q:"'Als ik tijd had, ___ ik komen.' (If I had time, I would come.)", opts:["zal","zou","zal willen","zal kunnen"], ans:"zou", category:"conditional" },
  { id:"nl-a22-2", level:"A2.2", q:"Past tense of 'werken' (to work) for 'hij':", opts:["werkt","werkten","werkte","heeft gewerkt"], ans:"werkte", category:"imperfect" },
  { id:"nl-a22-3", level:"A2.2", q:"'Maria is ___ dan Johan.' (Maria is taller than Johan.)", opts:["groot","groter","het grootst","grootere"], ans:"groter", category:"comparative" },
  { id:"nl-a22-4", level:"A2.2", q:"Separable verb 'opbellen' — where does 'op' go in a simple sentence?", opts:["before bellen","at the end","after the object","before the subject"], ans:"at the end", category:"separable-verbs" },
  { id:"nl-a22-5", level:"A2.2", q:"'Het boek ligt ___ de tafel.' (The book is on the table.)", opts:["in","op","aan","bij"], ans:"op", category:"prepositions" },

  // ═══ B1.1 — passive voice, subordinate clauses, verb clusters ═══
  { id:"nl-b11-1", level:"B1.1", q:"'Het boek ___ gelezen.' (The book is being read.)", opts:["heeft","wordt","is","kan"], ans:"wordt", category:"passive" },
  { id:"nl-b11-2", level:"B1.1", q:"'Ik weet dat hij ___.' (I know that he is coming.) — verb position", opts:["komt","komt hij","hij komt","kome"], ans:"komt", category:"subordinate" },
  { id:"nl-b11-3", level:"B1.1", q:"'Hij was ziek, ___ hij toch came.' (Although he was ill, he still came.)", opts:["omdat","dat","hoewel","zodat"], ans:"hoewel", category:"conjunctions" },
  { id:"nl-b11-4", level:"B1.1", q:"In a verb cluster at the end of a subordinate clause, which order is preferred?", opts:["infinitive before past participle","past participle before infinitive","either is correct","verb always comes first"], ans:"past participle before infinitive", category:"verb-cluster" },
  { id:"nl-b11-5", level:"B1.1", q:"'Ik ___ gisteren al gebeld hebben.' (I should have called yesterday.)", opts:["zou","zal","moet","kan"], ans:"zou", category:"modal-perfect" },

  // ═══ B1.2 — pluperfect, reported speech, relative pronouns ═══
  { id:"nl-b12-1", level:"B1.2", q:"'Hij zei dat hij moe ___.' (He said he was tired.)", opts:["is","was","zijn","zijn geweest"], ans:"was", category:"reported-speech" },
  { id:"nl-b12-2", level:"B1.2", q:"'Het boek ___ ik gelezen heb, is geweldig.' (The book I read is great.) — relative pronoun", opts:["die","dat","wat","welk"], ans:"dat", category:"relative-pronoun" },
  { id:"nl-b12-3", level:"B1.2", q:"Pluperfect of 'gaan' for 'hij':", opts:["was gegaan","is gegaan","had gegaan","heeft gegaan"], ans:"was gegaan", category:"pluperfect" },
  { id:"nl-b12-4", level:"B1.2", q:"Relative pronoun for a de-word antecedent:", opts:["dat","die","wat","welke"], ans:"die", category:"relative-pronoun" },
  { id:"nl-b12-5", level:"B1.2", q:"'Ik ___ hem voor een vriend gehouden.' (I mistook him for a friend.)", opts:["heb","ben","had","was"], ans:"heb", category:"perfect-idiom" },

  // ═══ B2.1 — subjunctive forms, advanced passive, complex clauses ═══
  { id:"nl-b21-1", level:"B2.1", q:"'Mocht hij ___, bel me dan.' (Should he call, then phone me.)", opts:["bellen","bellen worden","gebeld worden","opbellen"], ans:"bellen", category:"conditional-inversion" },
  { id:"nl-b21-2", level:"B2.1", q:"'Ik wou dat ik erbij ___ geweest.' (I wish I had been there.)", opts:["heb","had","was","zou"], ans:"was", category:"wish-pluperfect" },
  { id:"nl-b21-3", level:"B2.1", q:"'Ondanks ___ regen gingen we wandelen.' (Despite the rain we went for a walk.)", opts:["de","het","een","zijn"], ans:"de", category:"prepositions" },
  { id:"nl-b21-4", level:"B2.1", q:"'Ze doet alsof ze alles ___.' (She acts as if she knows everything.)", opts:["weet","wist","zou weten","geweten heeft"], ans:"weet", category:"alsof" },
  { id:"nl-b21-5", level:"B2.1", q:"Passive with 'worden' vs 'zijn' — 'De deur ___ gesloten' means the door has already been closed (state).", opts:["wordt","is","heeft","was"], ans:"is", category:"state-passive" },

  // ═══ B2.2 — advanced register, nominalisations, complex connectors ═══
  { id:"nl-b22-1", level:"B2.2", q:"Nominalization of 'beslissen' (to decide):", opts:["de beslissing","het beslissen","de besliste","beslissende"], ans:"de beslissing", category:"nominalization" },
  { id:"nl-b22-2", level:"B2.2", q:"Most formal register for a request:", opts:["Doe dat!","Zou u dat willen doen?","Jij moet dat doen.","Doe het maar."], ans:"Zou u dat willen doen?", category:"register" },
  { id:"nl-b22-3", level:"B2.2", q:"'___ zijn inspanningen mislukte het.' (Despite his efforts it failed.)", opts:["Dankzij","Ondanks","Vanwege","Tijdens"], ans:"Ondanks", category:"connectors" },
  { id:"nl-b22-4", level:"B2.2", q:"'Hoe vaak hij het ook probeert, hij mislukt.' — what does 'ook' signal here?", opts:["addition","concession","contrast","reason"], ans:"concession", category:"discourse" },
  { id:"nl-b22-5", level:"B2.2", q:"'Het project ___ vrijdag voltooid zijn.' (The project should have been completed by Friday.)", opts:["moest","had","was","heeft"], ans:"had", category:"pluperfect-modal" },
];

export const QUESTIONS_BY_LEVEL = {};
for (const q of DUTCH_PLACEMENT) {
  QUESTIONS_BY_LEVEL[q.level] = QUESTIONS_BY_LEVEL[q.level] || [];
  QUESTIONS_BY_LEVEL[q.level].push(q);
}

export const LEVEL_ORDER = ['A1.1','A1.2','A2.1','A2.2','B1.1','B1.2','B2.1','B2.2'];

export default DUTCH_PLACEMENT;
