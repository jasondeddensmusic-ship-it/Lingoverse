// Batch 4 — Unit 12, Lesson 1: Movement Verbs & Essere in the Past
const BATCH4_U12_L1 = {
  id:"itv2_u12l_b4_1", title:"Verbi di movimento", icon:"\uD83C\uDFC3", xp:15, board:true,
  steps:[
    {type:"intro", title:"Verbi di movimento",
     desc:"Master the key movement verbs that take essere in the passato prossimo and require agreement.",
     goals:["Learn essential movement verbs with essere","Understand participle agreement with the subject","Use movement verbs in everyday conversation"]},

    {type:"teach", trg:"partire / partito", src:"to leave, to depart / left", pos:"verb", gender:null,
     note:"Takes essere. 'Sono partito/a' = I left.\nAgreement with subject: -o (m), -a (f), -i (m.pl), -e (f.pl).",
     example:"A: Quando sei partito?\nB: Sono partito ieri mattina.",
     exampleSrc:"A: When did you leave?\nB: I left yesterday morning.",
     funFact:"'Partire' takes essere because it describes a change of location. A woman says 'sono partita' (not 'partito'). This gender agreement in the past tense is a feature that English lost centuries ago but Italian preserves."},

    {type:"teach", trg:"tornare / tornato", src:"to return, to come back / returned", pos:"verb", gender:null,
     note:"Takes essere. 'Sono tornato/a' = I returned.\n'Tornare a casa' = to go home/return home.",
     example:"A: Sei gia tornata?\nB: Si, sono tornata un'ora fa.",
     exampleSrc:"A: Are you already back?\nB: Yes, I came back an hour ago.",
     funFact:"'Tornare' is one of the most common Italian essere verbs. 'Bentornato/a!' (welcome back!) is the standard greeting for returning travelers or colleagues. The noun 'il ritorno' (the return) comes from the same root."},

    {type:"teach", trg:"salire / salito", src:"to go up, to climb / gone up", pos:"verb", gender:null,
     note:"Takes essere (intransitive). 'Sono salito/a' = I went up.\nCan take avere with direct object: 'ho salito le scale.'",
     example:"A: Siamo saliti a piedi fino al quinto piano!\nB: Che fatica!",
     exampleSrc:"A: We walked up to the fifth floor!\nB: What effort!",
     funFact:"'Salire' can take either essere or avere depending on usage. 'Sono salito' (I went up, intransitive) vs 'ho salito le scale' (I climbed the stairs, transitive with direct object). This dual nature exists for several Italian motion verbs."},

    {type:"teach", trg:"scendere / sceso", src:"to go down, to descend / gone down", pos:"verb", gender:null,
     note:"Takes essere (intransitive). Irregular participle: sceso.\n'Sono sceso/a' = I went down / I got off.",
     example:"A: Scendo alla prossima fermata.\nB: Anch'io, scendiamo insieme.",
     exampleSrc:"A: I am getting off at the next stop.\nB: Me too, let's get off together.",
     funFact:"On Italian buses, 'scendere' means 'to get off.' You might hear 'scende?' (are you getting off?) from someone behind you as the bus approaches a stop. The opposite pair salire/scendere (go up/go down) is one of the essential verb pairs."},

    {type:"teach", trg:"cadere / caduto", src:"to fall / fallen", pos:"verb", gender:null,
     note:"Takes essere. Regular participle: caduto.\n'Sono caduto/a' = I fell. From Latin 'cadere.'",
     example:"A: Sono caduta per le scale!\nB: Ti sei fatta male?",
     exampleSrc:"A: I fell down the stairs!\nB: Did you hurt yourself?",
     funFact:"'Cadere' gives many Italian expressions: 'cadere dalle nuvole' (to fall from the clouds, meaning to be shocked), 'lasciar cadere' (to drop/let fall), 'cadere in piedi' (to land on your feet). The past participle 'caduto' is also used for the war fallen."},

    {type:"teach", trg:"nascere / nato", src:"to be born / born", pos:"verb", gender:null,
     note:"Takes essere. Irregular participle: nato. 'Sono nato/a a Roma' = I was born in Rome.\nEssential for personal information.",
     example:"A: Dove sei nato?\nB: Sono nato a Napoli nel 1990.",
     exampleSrc:"A: Where were you born?\nB: I was born in Naples in 1990.",
     funFact:"'Nascere' is always used with essere. The expression 'non sono nato ieri' (I was not born yesterday) means 'I'm not naive.' 'Nato e cresciuto' (born and raised) is how Italians describe their hometown connection."},

    {type:"teach", trg:"morire / morto", src:"to die / dead, died", pos:"verb", gender:null,
     note:"Takes essere. Irregular participle: morto. 'E morto/a' = he/she died.\nAlso adjective: 'stanco morto' = dead tired.",
     example:"A: Leonardo da Vinci e morto nel 1519.\nB: In Francia, non in Italia.",
     exampleSrc:"A: Leonardo da Vinci died in 1519.\nB: In France, not Italy.",
     funFact:"'Morto' works as both participle and adjective. 'Sono morto di fame' (I'm dying of hunger), 'morto di sonno' (dead tired), 'morto di freddo' (freezing to death). Italians love hyperbolic death expressions for everyday discomfort."},

    {type:"teach", trg:"diventare / diventato", src:"to become / became", pos:"verb", gender:null,
     note:"Takes essere. Regular participle: diventato.\n'E diventato famoso' = he became famous.",
     example:"A: La situazione e diventata difficile.\nB: Si, dobbiamo trovare una soluzione.",
     exampleSrc:"A: The situation has become difficult.\nB: Yes, we need to find a solution.",
     funFact:"'Diventare' takes essere because it describes a change of state. 'Diventare rosso' (to turn red/blush), 'diventare matto' (to go crazy), 'diventare grande' (to grow up). State changes always use essere in Italian."},

    {type:"teach", trg:"rimanere / rimasto", src:"to stay, to remain / stayed", pos:"verb", gender:null,
     note:"Takes essere. Irregular participle: rimasto.\n'Sono rimasto/a a casa' = I stayed home.",
     example:"A: Perche sei rimasto a casa?\nB: Perche non mi sentivo bene.",
     exampleSrc:"A: Why did you stay home?\nB: Because I didn't feel well.",
     funFact:"'Rimanere' takes essere because staying in a state counts as a 'state change' (from potentially leaving to definitely staying). 'Rimanere sorpreso' (to be left surprised), 'rimanere male' (to be hurt/upset) use this verb for emotional states."},

    {type:"teach", trg:"succedere / successo", src:"to happen / happened", pos:"verb", gender:null,
     note:"Takes essere. Irregular participle: successo.\n'E successo qualcosa' = something happened.",
     example:"A: Cos'e successo?\nB: E successo un incidente.",
     exampleSrc:"A: What happened?\nB: An accident happened.",
     funFact:"'Successo' as a participle means 'happened.' As a noun, 'il successo' means 'success.' 'Ha avuto successo' (it was successful) uses the noun. 'E successo ieri' (it happened yesterday) uses the participle. Context always clarifies."},

    {type:"teach", trg:"piacere / piaciuto", src:"to like / liked (lit: to please)", pos:"verb", gender:null,
     note:"Takes essere. 'Mi e piaciuto/a' = I liked it (it pleased me).\nSubject is the thing liked, not the person.",
     example:"A: Ti e piaciuto il film?\nB: Si, mi e piaciuto molto!",
     exampleSrc:"A: Did you like the movie?\nB: Yes, I liked it a lot!",
     funFact:"'Piacere' works backwards from English: 'mi e piaciuta la pizza' (the pizza pleased me = I liked the pizza). The participle agrees with the thing liked (feminine 'piaciuta' because 'pizza' is feminine). This backwards logic is hard but essential."},

    {type:"teach", trg:"restare / restato", src:"to stay, to remain / stayed", pos:"verb", gender:null,
     note:"Takes essere. Synonym of 'rimanere.' Regular participle: restato.\n'Sono restato/a a casa' = I stayed home.",
     example:"A: Siamo restati al ristorante fino a mezzanotte.\nB: Che bella serata!",
     exampleSrc:"A: We stayed at the restaurant until midnight.\nB: What a beautiful evening!",
     funFact:"'Restare' and 'rimanere' are interchangeable synonyms. 'Restare' is slightly more common in southern Italian speech, 'rimanere' in the north. Having synonyms is useful: 'sono restato sorpreso' = 'sono rimasto sorpreso' (I was surprised)."},

    {type:"teach", trg:"arrivare / arrivato", src:"to arrive / arrived", pos:"verb", gender:null,
     note:"Takes essere. Regular participle: arrivato.\n'Sono arrivato/a' = I arrived.",
     example:"A: A che ora sei arrivata?\nB: Sono arrivata alle tre.",
     exampleSrc:"A: What time did you arrive?\nB: I arrived at three.",
     funFact:"'Arrivare' gives us 'arrivederci' (goodbye, literally 'until we see each other again'). 'Arrivo!' (I'm coming!/I'll be right there!) is shouted when someone calls you. 'Non arrivo a capire' (I can't manage to understand) uses 'arrivare' figuratively."},

    {type:"teach", trg:"entrare / entrato", src:"to enter / entered", pos:"verb", gender:null,
     note:"Takes essere. Regular participle: entrato.\n'Sono entrato/a' = I entered. 'L'entrata' = the entrance.",
     example:"A: Siamo entrati nel museo alle dieci.\nB: C'era molta gente?",
     exampleSrc:"A: We entered the museum at ten.\nB: Were there many people?",
     funFact:"'Entrare' and 'uscire' (to exit) are a pair. 'L'entrata' (entrance) and 'l'uscita' (exit) are essential signs in Italian buildings. 'Non c'entra niente' (it has nothing to do with it, literally 'it doesn't enter at all') is a very common expression."},

    {type:"teach", trg:"uscire / uscito", src:"to go out, to exit / gone out", pos:"verb", gender:null,
     note:"Takes essere. Regular participle: uscito. Irregular present: esco, esci, esce.\n'Sono uscito/a' = I went out.",
     example:"A: Sei uscita ieri sera?\nB: Si, sono uscita con le amiche.",
     exampleSrc:"A: Did you go out last night?\nB: Yes, I went out with friends.",
     funFact:"'Uscire' has an irregular present (esco, esci, esce, usciamo, uscite, escono) but a regular past participle. 'Uscire con qualcuno' means 'to go out with someone' (dating). 'L'uscita di sicurezza' (emergency exit) is a required sign in Italian buildings."},

    // Quiz steps
    {type:"mc", q:"Perche si dice 'sono andato' e non 'ho andato'?",
     opts:["Movement verbs take essere, not avere, in the past tense","It is a regional variation","Both are correct","Andare is irregular"],
     ans:"Movement verbs take essere, not avere, in the past tense",
     hint:"V... of motion and state change use e... as their auxiliary."},

    {type:"fb", s:"Maria e {1} a Parigi la settimana scorsa.",
     a:["partita"], opts:["partita","partito","partite","partiti"],
     hint:"Maria is feminine singular, so the participle must agree with -a ending.",
     sSrc:"Maria {1} for Paris last week."},

    {type:"match", pairs:[
      {trg:"partire", src:"to leave"},
      {trg:"tornare", src:"to return"},
      {trg:"nascere", src:"to be born"},
      {trg:"cadere", src:"to fall"},
      {trg:"diventare", src:"to become"}
    ]},

    {type:"mc", q:"Come dice una donna 'I fell'?",
     opts:["Sono caduta","Sono caduto","Ho caduto","Ho caduta"],
     ans:"Sono caduta",
     hint:"Essere auxiliary + feminine agreement on the past participle."},

    {type:"fb", s:"Ti e {1} il film? Era bello?",
     a:["piaciuto"], opts:["piaciuto","piaciuta","piacere","piacuto"],
     hint:"'Film' is masculine, so the participle agrees with the masculine form.",
     sSrc:"Did you {1} the movie? Was it good?"},

    {type:"mc", q:"Qual e il participio passato di 'nascere'?",
     opts:["Nato","Nascuto","Nasciuto","Nascito"],
     ans:"Nato",
     hint:"This irregular past participle is very common in personal information."},

    {type:"fb", s:"Siamo {1} al ristorante fino a mezzanotte.",
     a:["restati"], opts:["restati","restato","restate","restata"],
     hint:"'Siamo' indicates a plural subject, so the participle needs -i (m. plural).",
     sSrc:"We {1} at the restaurant until midnight."},

    {type:"mc", q:"Cosa significa 'sono rimasto sorpreso'?",
     opts:["I was left surprised / I was surprised","I stayed at the surprise","I returned to be surprised","I surprised someone"],
     ans:"I was left surprised / I was surprised",
     hint:"'Rimanere' with emotions means 'to be l... in that emotional state.'"}
  ,{type:"match",pairs:[{trg:"salire / salito",src:"to go up, to climb / gone up"},{trg:"scendere / sceso",src:"to go down, to descend / gone down"},{trg:"morire / morto",src:"to die / dead, died"},{trg:"rimanere / rimasto",src:"to stay, to remain / stayed"},{trg:"succedere / successo",src:"to happen / happened"},{trg:"restare / restato",src:"to stay, to remain / stayed"}]},{type:"match",pairs:[{trg:"arrivare / arrivato",src:"to arrive / arrived"},{trg:"entrare / entrato",src:"to enter / entered"},{trg:"uscire / uscito",src:"to go out, to exit / gone out"}]}]
};
export default BATCH4_U12_L1;
