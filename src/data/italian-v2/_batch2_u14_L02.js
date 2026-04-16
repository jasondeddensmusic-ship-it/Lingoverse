// Unit 14 Batch2. Lesson 2: Career Growth & the Job Market
const BATCH2_U14_L2 = {
  id:"itv2_u14l_b2_2", title:"Crescere al lavoro", icon:"📈", xp:15, board:true,
  steps:[
    {type:"intro", title:"Crescere al lavoro",
     desc:"Learn vocabulary for navigating the Italian job market: unemployment, freelancing, networking, and career advancement. Essential for discussing economic realities in Italy.",
     goals:["Discuss unemployment and the job market","Understand freelance and self-employment terms","Talk about networking and career goals"]},

    {type:"teach", trg:"la disoccupazione", src:"unemployment", pos:"noun", gender:"f",
     note:"Feminine. From 'dis-' (without) + 'occupazione' (work).\n'Il tasso di disoccupazione' = the unemployment rate.",
     example:"A: La disoccupazione giovanile e alta in Italia.\nB: Si, molti giovani cercano lavoro all'estero.",
     exampleSrc:"A: Youth unemployment is high in Italy.\nB: Yes, many young people look for work abroad.",
     funFact:"Italy has one of Europe's highest youth unemployment rates, often above 25%. The phenomenon of 'fuga dei cervelli' (brain drain) sees thousands of educated young Italians emigrating annually. This generational challenge shapes political debate and family dynamics."},

    {type:"teach", trg:"il libero professionista", src:"the freelancer / self-employed professional", pos:"noun", gender:"m",
     note:"Masculine. 'Libero' = free. 'Professionista' = professional.\nFeminine: la libera professionista.",
     example:"A: Sei dipendente o libero professionista?\nB: Libero professionista. Lavoro con la partita IVA.",
     exampleSrc:"A: Are you an employee or self-employed?\nB: Self-employed. I work with a VAT number.",
     funFact:"Italy has over 5 million 'liberi professionisti' (freelancers). They must open a 'partita IVA' (VAT number) and handle their own taxes, pension contributions, and insurance. The bureaucratic burden is heavy, but the freedom appeals to many. 'Partita IVA' has become slang for freelancer."},

    {type:"teach", trg:"la partita IVA", src:"the VAT number / freelance status", pos:"noun", gender:"f",
     note:"Feminine. IVA = Imposta sul Valore Aggiunto (VAT).\n'Aprire la partita IVA' = to register as self-employed.",
     example:"A: Hai aperto la partita IVA?\nB: Si, il commercialista mi ha aiutato.",
     exampleSrc:"A: Did you open your VAT number?\nB: Yes, the accountant helped me.",
     funFact:"'Aprire partita IVA' is a rite of passage for Italian freelancers. The 'regime forfettario' (flat-rate scheme) offers simplified taxation for small earners. However, 'chiudere partita IVA' (closing it) due to unsustainable costs is equally common. The phrase has become a symbol of precarious work."},

    {type:"teach", trg:"il colloquio di gruppo", src:"the group interview", pos:"noun", gender:"m",
     note:"Masculine. 'Di gruppo' = group. Multiple candidates together.\nCommon in large Italian companies.",
     example:"A: Domani ho un colloquio di gruppo.\nB: Quanti candidati ci saranno?",
     exampleSrc:"A: Tomorrow I have a group interview.\nB: How many candidates will there be?",
     funFact:"Group interviews ('colloqui di gruppo') are common at large Italian companies and multinationals. Candidates work on group tasks while evaluators observe teamwork, leadership, and communication. It can feel competitive, but Italian recruiters value collaboration ('spirito di squadra') over individual dominance."},

    {type:"teach", trg:"fare networking", src:"to network (professionally)", pos:"verb", gender:null,
     note:"Mixed Italian-English expression. Very common in business.\n'Costruire una rete di contatti' = to build a contact network.",
     example:"A: E importante fare networking.\nB: Vado spesso a eventi del settore.",
     exampleSrc:"A: It is important to network.\nB: I often go to industry events.",
     funFact:"'Fare networking' is used as-is in Italian business, though purists prefer 'costruire relazioni professionali.' Italian networking is relationship-heavy: a contact introduced through a friend ('presentazione') carries far more weight than a cold approach. Personal connections ('conoscenze') remain crucial for career advancement."},

    {type:"teach", trg:"il dipendente", src:"the employee", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la dipendente.\nFrom 'dipendere' (to depend on). 'Lavoratore dipendente' = employed worker.",
     example:"A: L'azienda ha cinquanta dipendenti.\nB: E un'azienda di medie dimensioni.",
     exampleSrc:"A: The company has fifty employees.\nB: It is a medium-sized company.",
     funFact:"Italian law divides workers into 'lavoratori dipendenti' (employees, who work for a company) and 'lavoratori autonomi' (self-employed). Employees have stronger protections: mandatory contracts, paid vacation, sick leave, and severance pay ('TFR'). The distinction shapes Italian working life."},

    {type:"teach", trg:"la sede", src:"the headquarters / office location", pos:"noun", gender:"f",
     note:"Feminine. 'Sede centrale' = headquarters. 'Sede legale' = registered office.\nFrom Latin 'sedes' (seat).",
     example:"A: Dov'e la sede dell'azienda?\nB: La sede centrale e a Milano.",
     exampleSrc:"A: Where is the company headquarters?\nB: The headquarters is in Milan.",
     funFact:"Milan is Italy's business capital: most large companies have their 'sede' there. 'Sede legale' (registered office) and 'sede operativa' (operational office) can be in different cities. Many southern Italian companies have their 'sede legale' in the north for tax or logistical reasons."},

    {type:"teach", trg:"il settore", src:"the sector / industry", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'sector' (cutter, divider).\n'Settore pubblico/privato' = public/private sector.",
     example:"A: In quale settore lavori?\nB: Nel settore tecnologico.",
     exampleSrc:"A: What sector do you work in?\nB: In the technology sector.",
     funFact:"Italy's key economic sectors include fashion ('moda'), automotive ('automobilistico'), food ('agroalimentare'), and tourism ('turismo'). The 'Made in Italy' brand is one of the world's most valuable. Small and medium enterprises ('PMI') form the backbone of the Italian economy, often family-run."},

    {type:"teach", trg:"la competitivita", src:"competitiveness", pos:"noun", gender:"f",
     note:"Feminine. From 'competitivo' (competitive).\n'Aumentare la competitivita' = to increase competitiveness.",
     example:"A: La competitivita dell'azienda dipende dall'innovazione.\nB: Dobbiamo investire di piu nella ricerca.",
     exampleSrc:"A: The company's competitiveness depends on innovation.\nB: We must invest more in research.",
     funFact:"Italy ranks around 30th globally in competitiveness indices. Strengths include design, craftsmanship, and brand heritage. Weaknesses include bureaucracy, slow digital adoption, and high labor costs. The debate between tradition and innovation defines Italian business culture."},

    {type:"teach", trg:"il contratto a progetto", src:"the project-based contract", pos:"noun", gender:"m",
     note:"Masculine. Fixed-term contract for a specific project.\nReplaced by newer 'collaborazione coordinata e continuativa.'",
     example:"A: Ho un contratto a progetto di sei mesi.\nB: Speriamo che lo rinnovino.",
     exampleSrc:"A: I have a six-month project-based contract.\nB: Let's hope they renew it.",
     funFact:"Project contracts ('contratti a progetto') were reformed multiple times due to abuse. Companies used them to avoid permanent hiring. The 'Jobs Act' (2015) reformed precarious work contracts, but fixed-term employment remains common, especially for young workers entering the job market."},

    {type:"teach", trg:"il TFR", src:"severance pay (end-of-service payment)", pos:"noun", gender:"m",
     note:"Masculine. 'Trattamento di Fine Rapporto' = End of Employment Treatment.\nAccumulates monthly during employment.",
     example:"A: Quando ricevero il TFR?\nB: Alla fine del rapporto di lavoro.",
     exampleSrc:"A: When will I receive the severance pay?\nB: At the end of the employment relationship.",
     funFact:"The TFR is a uniquely Italian institution: employers set aside a portion of salary each month (about 7%), and the accumulated sum is paid when employment ends. Workers can choose to leave it with the employer or redirect it to a pension fund ('fondo pensione'). It functions as forced savings."},

    // Quiz steps
    {type:"mc", q:"What does 'la partita IVA' represent in Italy?",
     opts:["A type of sports competition scoring","The VAT registration number for self-employed work","A political party membership card","An immigration work permit"],
     ans:"The VAT registration number for self-employed work",
     hint:"Opening one means registering as a freelancer. It has become symbolic of s...-employment and independent professional life in Italy."},

    {type:"fb", s:"La {1} giovanile e alta in Italia.",
     a:["disoccupazione"],
     opts:["disoccupazione","retribuzione","formazione","competitivita"],
     hint:"Many young people cannot find work. This noun means 'unemployment' and is a major social issue in Italy.",
     sSrc:"Youth {1} is high in Italy."},

    {type:"match", pairs:[
      {trg:"il dipendente", src:"the employee"},
      {trg:"il libero professionista", src:"the freelancer"},
      {trg:"la sede", src:"the headquarters"},
      {trg:"il settore", src:"the sector"},
      {trg:"il TFR", src:"severance pay"}
    ]},

    {type:"mc", q:"What is 'fare networking' in Italian business?",
     opts:["Setting up computer networks at the office","Building professional relationships and contacts","Applying for jobs online only","Studying business courses at university"],
     ans:"Building professional relationships and contacts",
     hint:"Though the English word is borrowed, the concept of b... 'conoscenze' (c...) through personal introductions is deeply Italian."},

    {type:"fb", s:"In quale {1} lavori?",
     a:["settore"],
     opts:["settore","sede","contratto","turno"],
     hint:"This word means 'sector' or 'industry.' Fashion, automotive, food, and tourism are key ones in Italy.",
     sSrc:"What {1} do you work in?"},

    {type:"mc", q:"What does 'TFR' stand for?",
     opts:["Tasso Fisso di Rendimento","Trattamento di Fine Rapporto","Tempo di Ferie Residue","Tassa Forfettaria Regionale"],
     ans:"Trattamento di Fine Rapporto",
     hint:"This 'End of Employment Treatment' accumulates monthly and is paid out when you leave a job. A uniquely Italian institution."},

    {type:"fb", s:"L'azienda ha cinquanta {1}.",
     a:["dipendenti"],
     opts:["dipendenti","candidati","colleghi","settori"],
     hint:"These people are employed by and work for the company. From 'dipendere' (to depend on).",
     sSrc:"The company has fifty {1}."},

    {type:"mc", q:"What is a 'colloquio di gruppo'?",
     opts:["A private meeting with the CEO only","A group interview with multiple candidates assessed together","A team building exercise for employees","A union meeting for all workers"],
     ans:"A group interview with multiple candidates assessed together",
     hint:"'Di gruppo' means 'in a group.' Evaluators observe how candidates collaborate, lead, and communicate with each other."}
  ]
};
export default BATCH2_U14_L2;
