// French placement-quiz question bank.
// Schema: { id, level, q, opts[], ans, category? }

export const FRENCH_PLACEMENT = [
  // ═══ A1.1 : greetings, être basics, gender, numbers 1-10 ═══
  { id:"fr-a11-1", level:"A1.1", q:"Which greeting is used in the morning?", opts:["Bonsoir","Bonjour","Bonne nuit","Au revoir"], ans:"Bonjour", category:"greetings" },
  { id:"fr-a11-2", level:"A1.1", q:"'Je ___ étudiant.' (I am a student.)", opts:["suis","es","est","sommes"], ans:"suis", category:"être" },
  { id:"fr-a11-3", level:"A1.1", q:"Which article fits 'table' (feminine noun)?", opts:["le","la","les","un"], ans:"la", category:"articles" },
  { id:"fr-a11-4", level:"A1.1", q:"Which number is 'sept'?", opts:["5","6","7","8"], ans:"7", category:"numbers" },
  { id:"fr-a11-5", level:"A1.1", q:"'Je ___ Marie.' (My name is Marie.)", opts:["suis","appelle","m'appelle","me nomme"], ans:"m'appelle", category:"intro" },

  // A1.1 reinforcement pool
  { id:"fr-a11-6", level:"A1.1", q:"The plural of 'le livre' is:", opts:["les livres","des livre","la livres","le livres"], ans:"les livres", category:"plural" },
  { id:"fr-a11-7", level:"A1.1", q:"'Comment ___ vous?' (How are you?)", opts:["est","êtes","allez","avez"], ans:"allez", category:"greetings" },

  // ═══ A1.2 : present tense -er verbs, articles, possessives ═══
  { id:"fr-a12-1", level:"A1.2", q:"'Nous ___ à Paris.' (We live in Paris.)", opts:["habitons","habites","habite","habitent"], ans:"habitons", category:"present-tense" },
  { id:"fr-a12-2", level:"A1.2", q:"'___ sœur est grande.' (My sister is tall.)", opts:["Ma","Mon","Mes","Ton"], ans:"Ma", category:"possessive" },
  { id:"fr-a12-3", level:"A1.2", q:"Contraction of 'de + le' is:", opts:["de le","du","des","de la"], ans:"du", category:"contractions" },
  { id:"fr-a12-4", level:"A1.2", q:"'Ils ___ beaucoup de café.' (They drink a lot of coffee.)", opts:["bois","boit","buvons","boivent"], ans:"boivent", category:"present-tense" },
  { id:"fr-a12-5", level:"A1.2", q:"'Il y a ___ livres sur la table.'", opts:["un","une","des","du"], ans:"des", category:"indefinite-article" },

  { id:"fr-a12-6", level:"A1.2", q:"'Quel âge ___ tu?' (How old are you?)", opts:["es","as","fais","veux"], ans:"as", category:"avoir" },
  { id:"fr-a12-7", level:"A1.2", q:"'Elle ___ 25 ans.' (She is 25.)", opts:["est","a","fait","être"], ans:"a", category:"avoir-age" },

  // ═══ A2.1 : passé composé, frequency adverbs, direct objects ═══
  { id:"fr-a21-1", level:"A2.1", q:"'Hier, je ___ au cinéma.' (Yesterday, I went to the cinema.)", opts:["vais","suis allé","allais","irai"], ans:"suis allé", category:"passé-composé" },
  { id:"fr-a21-2", level:"A2.1", q:"'Je ne mange ___ viande.' (I never eat meat.)", opts:["pas de","jamais de","plus de","rien de"], ans:"jamais de", category:"negation" },
  { id:"fr-a21-3", level:"A2.1", q:"Direct object pronoun for 'les clés' (fem.):", opts:["la","le","les","leur"], ans:"les", category:"direct-object" },
  { id:"fr-a21-4", level:"A2.1", q:"'Il ___ ses devoirs.' (He did his homework.)", opts:["fait","a fait","faisait","fera"], ans:"a fait", category:"passé-composé" },
  { id:"fr-a21-5", level:"A2.1", q:"Auxiliary for 'partir' in passé composé:", opts:["avoir","être","aller","venir"], ans:"être", category:"auxiliary" },

  { id:"fr-a21-6", level:"A2.1", q:"'Ils ___ à Lyon l'année dernière.' (They lived in Lyon last year.)", opts:["vivent","ont vécu","vivaient","vivront"], ans:"ont vécu", category:"passé-composé" },
  { id:"fr-a21-7", level:"A2.1", q:"Which is a frequency adverb?", opts:["beaucoup","toujours","très","ici"], ans:"toujours", category:"frequency" },

  // ═══ A2.2 : imparfait, être vs avoir nuance, comparatives ═══
  { id:"fr-a22-1", level:"A2.2", q:"'Quand j'étais enfant, je ___ beaucoup.' (When I was a child, I played a lot.)", opts:["joue","ai joué","jouais","jouerai"], ans:"jouais", category:"imparfait" },
  { id:"fr-a22-2", level:"A2.2", q:"'La soupe ___ froide.' (The soup is cold state right now.)", opts:["a","est","fait","sera"], ans:"est", category:"être-état" },
  { id:"fr-a22-3", level:"A2.2", q:"'Marie est ___ grande ___ Jean.' (Marie is taller than Jean.)", opts:["plus … que","aussi … que","plus … de","moins … que"], ans:"plus … que", category:"comparative" },
  { id:"fr-a22-4", level:"A2.2", q:"'Il ___ toujours à la plage en été.' (He always used to go to the beach in summer.)", opts:["allait","est allé","ira","va"], ans:"allait", category:"imparfait" },
  { id:"fr-a22-5", level:"A2.2", q:"'Le livre ___ sur la table.' (The book is on the table.)", opts:["a","est","fait","met"], ans:"est", category:"être-location" },

  // ═══ B1.1 : subjonctif intro, futur simple, conditionnel présent ═══
  { id:"fr-b11-1", level:"B1.1", q:"'Je veux qu'il ___ bientôt.' (I want him to come soon.)", opts:["vient","vienne","venait","viendra"], ans:"vienne", category:"subjonctif" },
  { id:"fr-b11-2", level:"B1.1", q:"'Demain, j'___ chez le médecin.' (Tomorrow I will go to the doctor.)", opts:["irai","suis allé","allais","vais aller"], ans:"irai", category:"futur-simple" },
  { id:"fr-b11-3", level:"B1.1", q:"'Si j'avais le temps, je ___.' (If I had time, I would call you.)", opts:["t'appellerai","t'appelais","t'appellerais","t'ai appelé"], ans:"t'appellerais", category:"conditionnel" },
  { id:"fr-b11-4", level:"B1.1", q:"'Il est important qu'il ___ la vérité.' (It is important that he know the truth.)", opts:["sait","sache","savait","saura"], ans:"sache", category:"subjonctif" },
  { id:"fr-b11-5", level:"B1.1", q:"'Je ne crois pas qu'elle ___.' (I don't think she's here.)", opts:["est","soit","était","sera"], ans:"soit", category:"subjonctif-doute" },

  // ═══ B1.2 : passé composé vs imparfait, discours indirect ═══
  { id:"fr-b12-1", level:"B1.2", q:"'Cette année, j'___ trois pays.' (This year I have visited three countries.)", opts:["visitais","ai visité","visitai","visiterai"], ans:"ai visité", category:"passé-composé" },
  { id:"fr-b12-2", level:"B1.2", q:"Past participle of 'écrire':", opts:["écrivé","écrivant","écrit","écriva"], ans:"écrit", category:"participe-passé" },
  { id:"fr-b12-3", level:"B1.2", q:"'Il m'a dit qu'il ___ fatigué.' (He told me he was tired.)", opts:["est","était","a été","sera"], ans:"était", category:"discours-indirect" },
  { id:"fr-b12-4", level:"B1.2", q:"'Je n'___ pas encore vu le film.' (I haven't seen the film yet.)", opts:["ai","avais","aurai","aurais"], ans:"ai", category:"passé-composé" },
  { id:"fr-b12-5", level:"B1.2", q:"'Elle ___ quand le téléphone ___ .' (She was sleeping when the phone rang.)", opts:["dormait … a sonné","a dormi … sonnait","dort … sonne","dormira … sonnera"], ans:"dormait … a sonné", category:"imparfait-vs-passé" },

  // ═══ B2.1 : conditionnel passé, subjonctif passé, voix passive ═══
  { id:"fr-b21-1", level:"B2.1", q:"'Si j'avais eu de l'argent, j'___ une voiture.' (If I had had money, I would have bought a car.)", opts:["achèterais","ai acheté","aurais acheté","avais acheté"], ans:"aurais acheté", category:"conditionnel-passé" },
  { id:"fr-b21-2", level:"B2.1", q:"'Je cherche quelqu'un qui ___ le français.' (I'm looking for someone who speaks French.)", opts:["parle","parla","parlera","parlât"], ans:"parle", category:"subjonctif-relatif" },
  { id:"fr-b21-3", level:"B2.1", stem:"Le livre ___ écrit par Hugo.", stemSrc:"The book was written by Hugo.", q:"Passé composé passif", opts:["a été","est","était","avait été"], ans:"a été", category:"voix-passive" },
  { id:"fr-b21-4", level:"B2.1", q:"'Bien qu'il ___ fatigué, il a continué.' (Although he was tired, he continued.)", opts:["était","ait été","soit","soit été"], ans:"soit", category:"subjonctif-concession" },
  { id:"fr-b21-5", level:"B2.1", q:"Which expresses a hypothetical regret about the past?", opts:["Si j'avais le temps","Si j'ai le temps","Si j'avais eu le temps","Si j'aurai le temps"], ans:"Si j'avais eu le temps", category:"conditionnel-passé" },

  // ═══ B2.2 : nominalisation, registre, connecteurs avancés ═══
  { id:"fr-b22-1", level:"B2.2", q:"'___ de ses efforts, il a échoué.' (Despite his efforts, he failed.)", opts:["Grâce","Malgré","En raison","À cause"], ans:"Malgré", category:"connecteurs" },
  { id:"fr-b22-2", level:"B2.2", q:"Nominalization of 'décider' (to decide):", opts:["la décision","le décider","la décide","décidant"], ans:"la décision", category:"nominalisation" },
  { id:"fr-b22-3", level:"B2.2", q:"Most formal way to make a request:", opts:["Fais ça!","Pourriez-vous faire cela?","Tu devrais faire ça.","Fais-le."], ans:"Pourriez-vous faire cela?", category:"registre" },
  { id:"fr-b22-4", level:"B2.2", q:"'___ qu'il essaie, il échoue.' (However often he tries, he fails.)", opts:["Chaque fois","Bien","Quoi que","Si"], ans:"Chaque fois", category:"connecteurs" },
  { id:"fr-b22-5", level:"B2.2", q:"'Ojalá qu'il ___ bientôt.' is a calque. In French the correct form is:", opts:["Pourvu qu'il vienne","Pourvu qu'il viendra","Il est possible qu'il vient","Il faut qu'il viendra"], ans:"Pourvu qu'il vienne", category:"subjonctif" },
];

export const QUESTIONS_BY_LEVEL = {};
for (const q of FRENCH_PLACEMENT) {
  QUESTIONS_BY_LEVEL[q.level] = QUESTIONS_BY_LEVEL[q.level] || [];
  QUESTIONS_BY_LEVEL[q.level].push(q);
}

export const LEVEL_ORDER = ['A1.1','A1.2','A2.1','A2.2','B1.1','B1.2','B2.1','B2.2'];

export default FRENCH_PLACEMENT;
