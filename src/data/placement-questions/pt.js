// Portuguese (Brazilian primary) placement-quiz question bank.
// Schema: { id, level, q, opts[], ans, category? }

export const PORTUGUESE_PLACEMENT = [
  // ═══ A1.1 — greetings, ser/estar basics, gender, numbers 1-10 ═══
  { id:"pt-a11-1", level:"A1.1", q:"Which greeting is used in the morning?", opts:["Boa tarde","Bom dia","Boa noite","Até logo"], ans:"Bom dia", category:"greetings" },
  { id:"pt-a11-2", level:"A1.1", q:"'Eu ___ estudante.' (I am a student.)", opts:["sou","estou","é","és"], ans:"sou", category:"ser-estar" },
  { id:"pt-a11-3", level:"A1.1", q:"The feminine form of 'amigo' is:", opts:["amiga","amigos","amigas","amigo"], ans:"amiga", category:"gender" },
  { id:"pt-a11-4", level:"A1.1", q:"Which number is 'sete'?", opts:["5","6","7","8"], ans:"7", category:"numbers" },
  { id:"pt-a11-5", level:"A1.1", q:"'Me ___ Maria.' (My name is Maria.)", opts:["chama","chamo","chamas","chamamos"], ans:"chamo", category:"intro" },

  // A1.1 reinforcement pool
  { id:"pt-a11-6", level:"A1.1", q:"The plural of 'o livro' is:", opts:["os livro","as livros","os livros","o livros"], ans:"os livros", category:"plural" },
  { id:"pt-a11-7", level:"A1.1", q:"'Como você ___?' (How are you?)", opts:["é","está","tem","faz"], ans:"está", category:"greetings" },

  // ═══ A1.2 — present tense regular verbs, articles, possessives ═══
  { id:"pt-a12-1", level:"A1.2", q:"'Nós ___ em São Paulo.' (We live in São Paulo.)", opts:["moro","mora","moramos","moram"], ans:"moramos", category:"present-tense" },
  { id:"pt-a12-2", level:"A1.2", q:"'___ irmã é alta.' (My sister is tall.)", opts:["Minha","Meu","Minhas","Sua"], ans:"Minha", category:"possessive" },
  { id:"pt-a12-3", level:"A1.2", q:"Which article fits 'problema' (masculine noun)?", opts:["a","o","as","os"], ans:"o", category:"article-gotcha" },
  { id:"pt-a12-4", level:"A1.2", q:"'Eles ___ muito café.' (They drink a lot of coffee.)", opts:["bebo","bebes","bebem","bebemos"], ans:"bebem", category:"present-tense" },
  { id:"pt-a12-5", level:"A1.2", q:"'Há ___ livros na mesa.' (There are some books on the table.)", opts:["um","uma","uns","umas"], ans:"uns", category:"indefinite-article" },

  { id:"pt-a12-6", level:"A1.2", q:"'Quantos anos você ___?' (How old are you?)", opts:["é","está","tem","faz"], ans:"tem", category:"ter-expressions" },
  { id:"pt-a12-7", level:"A1.2", q:"'Ela ___ 25 anos.' (She is 25.)", opts:["é","está","tem","faz"], ans:"tem", category:"ter-age" },

  // ═══ A2.1 — pretérito perfeito, frequency adverbs, direct objects ═══
  { id:"pt-a21-1", level:"A2.1", q:"'Ontem ___ ao cinema.' (Yesterday I went to the cinema.)", opts:["vou","fui","ia","irei"], ans:"fui", category:"preterito-perfeito" },
  { id:"pt-a21-2", level:"A2.1", q:"'Nunca ___ carne.' (I never eat meat.)", opts:["como","comi","comia","comerei"], ans:"como", category:"frequency" },
  { id:"pt-a21-3", level:"A2.1", q:"Direct object pronoun for 'as chaves' (fem. pl.):", opts:["a","o","as","os"], ans:"as", category:"direct-object" },
  { id:"pt-a21-4", level:"A2.1", q:"'Ele ___ a tarefa.' (He did the homework.)", opts:["faz","fez","fazia","fará"], ans:"fez", category:"preterito-perfeito" },
  { id:"pt-a21-5", level:"A2.1", q:"'Vocês ___ em Recife no ano passado?' (Did you all live in Recife last year?)", opts:["moram","moraram","moravam","morarão"], ans:"moraram", category:"preterito-perfeito" },

  { id:"pt-a21-6", level:"A2.1", q:"'Eles ___ em Brasília no ano passado.' (They lived in Brasília last year.)", opts:["vivem","viveram","viviam","viverão"], ans:"viveram", category:"preterito-perfeito" },
  { id:"pt-a21-7", level:"A2.1", q:"Which is a frequency adverb?", opts:["muito","sempre","bem","aqui"], ans:"sempre", category:"frequency" },

  // ═══ A2.2 — pretérito imperfeito, ser vs estar nuance, comparativos ═══
  { id:"pt-a22-1", level:"A2.2", q:"'Quando era criança, ___ muito.' (When I was a child, I played a lot.)", opts:["jogo","joguei","jogava","jogarei"], ans:"jogava", category:"imperfeito" },
  { id:"pt-a22-2", level:"A2.2", q:"'A sopa ___ fria.' (The soup is cold — right now.)", opts:["é","está","há","tem"], ans:"está", category:"ser-vs-estar" },
  { id:"pt-a22-3", level:"A2.2", q:"'Maria é ___ alta ___ João.' (Maria is taller than João.)", opts:["mais … do que","tão … quanto","mais … de","menor … que"], ans:"mais … do que", category:"comparative" },
  { id:"pt-a22-4", level:"A2.2", q:"'___ sempre à praia no verão.' (I always used to go to the beach in summer.)", opts:["Fui","Ia","Irei","Vou"], ans:"Ia", category:"imperfeito" },
  { id:"pt-a22-5", level:"A2.2", q:"'O livro ___ em cima da mesa.' (The book is on the table.)", opts:["é","está","há","tem"], ans:"está", category:"ser-vs-estar" },

  // ═══ B1.1 — subjuntivo presente, futuro simples, condicional ═══
  { id:"pt-b11-1", level:"B1.1", q:"'Quero que ele ___ logo.' (I want him to come soon.)", opts:["vem","venha","vinha","virá"], ans:"venha", category:"subjuntivo" },
  { id:"pt-b11-2", level:"B1.1", q:"'Amanhã ___ ao médico.' (Tomorrow I will go to the doctor.)", opts:["irei","ia","fui","vou"], ans:"irei", category:"futuro-simples" },
  { id:"pt-b11-3", level:"B1.1", q:"'Se eu tivesse tempo, ___.' (If I had time, I would call you.)", opts:["te ligaria","te liguei","te ligava","te ligarei"], ans:"te ligaria", category:"condicional" },
  { id:"pt-b11-4", level:"B1.1", q:"'É importante que ele ___ a verdade.' (It is important that he know the truth.)", opts:["sabe","saiba","saberia","soube"], ans:"saiba", category:"subjuntivo" },
  { id:"pt-b11-5", level:"B1.1", q:"'Não acho que ela ___.' (I don't think she's here.)", opts:["está","esteja","esteve","estará"], ans:"esteja", category:"subjuntivo-duvida" },

  // ═══ B1.2 — infinitivo pessoal, discurso indireto, pretérito mais-que-perfeito ═══
  { id:"pt-b12-1", level:"B1.2", q:"'Este ano ___ três países.' (This year I have visited three countries.)", opts:["visitei","tenho visitado","visitava","visitarei"], ans:"visitei", category:"preterito-perfeito" },
  { id:"pt-b12-2", level:"B1.2", q:"Past participle of 'escrever':", opts:["escrevido","escrevendo","escrito","escreveu"], ans:"escrito", category:"particpio" },
  { id:"pt-b12-3", level:"B1.2", q:"'Ele me disse que ___ cansado.' (He told me he was tired.)", opts:["é","estava","esteja","estará"], ans:"estava", category:"discurso-indireto" },
  { id:"pt-b12-4", level:"B1.2", q:"The infinitivo pessoal is unique to Portuguese. 'Para eles ___.' (For them to come.) — correct form:", opts:["vir","virem","venham","virão"], ans:"virem", category:"infinitivo-pessoal" },
  { id:"pt-b12-5", level:"B1.2", q:"Past participle of 'abrir':", opts:["abierto","abrido","abrindo","aberto"], ans:"aberto", category:"particpio" },

  // ═══ B2.1 — condicional composto, subjuntivo passado, voz passiva ═══
  { id:"pt-b21-1", level:"B2.1", q:"'Se eu tivesse tido dinheiro, ___ um carro.' (If I had had money, I would have bought a car.)", opts:["compraria","comprei","comprava","teria comprado"], ans:"teria comprado", category:"condicional-composto" },
  { id:"pt-b21-2", level:"B2.1", q:"'Procuro alguém que ___ francês.' (I'm looking for someone who speaks French.)", opts:["fala","fale","falava","falará"], ans:"fale", category:"subjuntivo-relativo" },
  { id:"pt-b21-3", level:"B2.1", q:"'O livro ___ escrito por Saramago.' (The book was written by Saramago.) — voz passiva composta", opts:["é","foi","será","tem sido"], ans:"foi", category:"voz-passiva" },
  { id:"pt-b21-4", level:"B2.1", q:"'Embora ele ___ cansado, continuou.' (Although he was tired, he continued.)", opts:["estava","estivesse","esteja","estiver"], ans:"estivesse", category:"subjuntivo-concessivo" },
  { id:"pt-b21-5", level:"B2.1", q:"Which expresses a hypothetical regret about the past?", opts:["Se eu tivesse tempo","Se eu tenho tempo","Se eu tivesse tido tempo","Se eu tinha tempo"], ans:"Se eu tivesse tido tempo", category:"condicional-composto" },

  // ═══ B2.2 — nominalização, registro, conectivos avançados ═══
  { id:"pt-b22-1", level:"B2.2", q:"'___ de seus esforços, ele fracassou.' (Despite his efforts, he failed.)", opts:["Graças","Apesar","Por causa","Durante"], ans:"Apesar", category:"conectivos" },
  { id:"pt-b22-2", level:"B2.2", q:"Nominalization of 'decidir' (to decide):", opts:["a decisão","o decidir","a decidida","decidindo"], ans:"a decisão", category:"nominalizacao" },
  { id:"pt-b22-3", level:"B2.2", q:"Most formal way to make a request:", opts:["Faça isso!","Poderia fazer isso, por favor?","Você deveria fazer isso.","Faz isso aí."], ans:"Poderia fazer isso, por favor?", category:"registro" },
  { id:"pt-b22-4", level:"B2.2", q:"'___ ele tente, não consegue.' (However much he tries, he doesn't manage.)", opts:["Por mais que","Porque","Embora","Se"], ans:"Por mais que", category:"conectivos" },
  { id:"pt-b22-5", level:"B2.2", q:"'Tomara que ele ___ logo.' (I hope he arrives soon.)", opts:["chega","chegue","chegou","chegará"], ans:"chegue", category:"subjuntivo-desejo" },
];

export const QUESTIONS_BY_LEVEL = {};
for (const q of PORTUGUESE_PLACEMENT) {
  QUESTIONS_BY_LEVEL[q.level] = QUESTIONS_BY_LEVEL[q.level] || [];
  QUESTIONS_BY_LEVEL[q.level].push(q);
}

export const LEVEL_ORDER = ['A1.1','A1.2','A2.1','A2.2','B1.1','B1.2','B2.1','B2.2'];

export default PORTUGUESE_PLACEMENT;
