// Unit 14 Expansion. Lesson 4: The Job Interview
const LESSON_4 = {
  id:"itv2_u14l4", title:"Il colloquio di lavoro (II)", icon:"🎯", xp:15, board:true,
  steps:[
    {type:"intro", title:"Il colloquio di lavoro",
     desc:"Prepare for an Italian job interview. Learn the phrases hiring managers use, how to describe your skills, and what to expect in the Italian interview process.",
     goals:["Use key interview phrases in Italian","Describe skills and experience","Understand Italian interview customs"]},

    {type:"teach", trg:"il candidato", src:"the candidate / applicant", pos:"noun", gender:"m",
     note:"Masculine. Feminine: la candidata.\nFrom Latin 'candidatus' (dressed in white).",
     example:"A: Quanti candidati ci sono per la posizione?\nB: Circa venti. La selezione e dura.",
     exampleSrc:"A: How many candidates are there for the position?\nB: About twenty. The selection is tough.",
     funFact:"In ancient Rome, candidates for public office wore white togas ('toga candida') to show purity. The Latin word 'candidus' means 'shining white.' English 'candidate' and 'candid' both descend from this. In Italian, 'candidarsi' means to apply or run for a position."},

    {type:"teach", trg:"il requisito", src:"the requirement", pos:"noun", gender:"m",
     note:"Masculine. Plural: i requisiti.\nFrom Latin 'requisitum' (something sought).",
     example:"A: Quali sono i requisiti per questa posizione?\nB: Laurea in economia e tre anni di esperienza.",
     exampleSrc:"A: What are the requirements for this position?\nB: A degree in economics and three years of experience.",
     funFact:"Italian job listings ('annunci di lavoro') divide requirements into 'requisiti essenziali' (essential) and 'requisiti preferenziali' (preferred). In Italy, a 'laurea' (university degree) is often required even for positions that would not need one in other countries."},

    {type:"teach", trg:"l'esperienza", src:"the experience", pos:"noun", gender:"f",
     note:"Feminine. 'Esperienza lavorativa' = work experience.\nFrom Latin 'experientia' (trial, proof).",
     example:"A: Ha esperienza nel settore?\nB: Si, ho lavorato tre anni in marketing.",
     exampleSrc:"A: Do you have experience in the field?\nB: Yes, I worked three years in marketing.",
     funFact:"In Italian job interviews, 'esperienza' is the most valued quality after education. Italians often say 'fare esperienza' (to gain experience), reflecting the idea that experience is something you actively build. 'Senza esperienza' (without experience) is the young professional's biggest obstacle."},

    {type:"teach", trg:"la competenza", src:"the skill / competency", pos:"noun", gender:"f",
     note:"Feminine. Plural: le competenze.\n'Competenze trasversali' = soft skills.",
     example:"A: Quali competenze ha?\nB: Parlo tre lingue e so usare Excel.",
     exampleSrc:"A: What skills do you have?\nB: I speak three languages and I can use Excel.",
     funFact:"Italian CVs distinguish between 'competenze tecniche' (hard skills) and 'competenze trasversali' (soft skills, literally 'transversal competencies'). The Europass CV format, widely used in Italy, has a dedicated section for each type. Language skills follow the CEFR scale."},

    {type:"teach", trg:"il punto di forza", src:"the strength / strong point", pos:"noun", gender:"m",
     note:"Masculine. Plural: i punti di forza.\nOpposite: il punto debole (weakness).",
     example:"A: Qual e il suo punto di forza?\nB: La capacita di lavorare in gruppo.",
     exampleSrc:"A: What is your strength?\nB: The ability to work in a team.",
     funFact:"'Qual e il suo punto di forza?' is a classic Italian interview question. Common answers include 'la flessibilita' (flexibility), 'la precisione' (precision), and 'il problem solving' (borrowed from English). Italians value 'la creativita' (creativity) highly in their work culture."},

    {type:"teach", trg:"la lettera di presentazione", src:"the cover letter", pos:"noun", gender:"f",
     note:"Feminine. Literally 'letter of presentation.'\nAccompanies the CV in job applications.",
     example:"A: Devo scrivere una lettera di presentazione?\nB: Si, e molto importante per fare una buona impressione.",
     exampleSrc:"A: Do I need to write a cover letter?\nB: Yes, it is very important to make a good impression.",
     funFact:"Italian cover letters tend to be more formal than Anglo-Saxon ones. They begin with 'Gentile' or 'Egregio' (Dear, formal) and end with 'Cordiali saluti' (Kind regards). Showing knowledge of the company ('la vostra azienda') is considered essential."},

    {type:"teach", trg:"la posizione", src:"the position / role", pos:"noun", gender:"f",
     note:"Feminine. 'Posizione aperta' = open position.\nAlso means physical position or stance.",
     example:"A: Per quale posizione si candida?\nB: Mi candido per la posizione di responsabile marketing.",
     exampleSrc:"A: Which position are you applying for?\nB: I am applying for the marketing manager position.",
     funFact:"'Posizione' in a work context means job role. 'Candidarsi per una posizione' (to apply for a position) is the standard phrase. Italian companies use various titles: 'responsabile' (manager), 'coordinatore' (coordinator), 'direttore' (director), 'addetto' (clerk/officer)."},

    {type:"teach", trg:"assumere", src:"to hire / to take on", pos:"verb", gender:null,
     note:"Irregular -ere verb. Past participle: assunto.\n'Essere assunto' = to be hired.",
     example:"A: L'azienda vuole assumermi!\nB: Fantastico! Quando cominci?",
     exampleSrc:"A: The company wants to hire me!\nB: Fantastic! When do you start?",
     funFact:"'Assumere' literally means 'to take upon oneself.' The hiring process in Italy often involves multiple rounds: CV screening, a first colloquio (interview), sometimes a second interview, and references. Large companies may add assessment centers or group dynamics exercises."},

    {type:"teach", trg:"il colloquio conoscitivo", src:"the introductory interview", pos:"noun", gender:"m",
     note:"Masculine. 'Conoscitivo' = for getting to know.\nThe first, informal interview round.",
     example:"A: E solo un colloquio conoscitivo.\nB: Quindi non devo preparare una presentazione?",
     exampleSrc:"A: It is just an introductory interview.\nB: So I don't need to prepare a presentation?",
     funFact:"Italian companies often start with a 'colloquio conoscitivo' (getting-to-know interview) before the formal selection process. It is more relaxed and focuses on personality and cultural fit. The interviewer might ask about hobbies, family, and life goals alongside professional questions."},

    // Quiz steps
    {type:"mc", q:"What is 'il candidato' in a job context?",
     opts:["The applicant","The interviewer","The recruiter","The employer"],
     ans:"The applicant",
     hint:"From Latin 'candidatus' (dressed in white). This person is seeking the open position."},

    {type:"fb", s:"Quali sono i {1} per questa posizione?",
     a:["requisiti"],
     opts:["requisiti","candidati","colloqui","contratti"],
     hint:"The job listing specifies what qualifications and experience are needed. These are the conditions you must meet.",
     sSrc:"What are the {1} for this position?"},

    {type:"match", pairs:[
      {trg:"il candidato", src:"the applicant"},
      {trg:"il requisito", src:"the requirement"},
      {trg:"la competenza", src:"the skill"},
      {trg:"il punto di forza", src:"the strength"},
      {trg:"la posizione", src:"the position / role"}
    ]},

    {type:"mc", q:"What is 'il colloquio conoscitivo'?",
     opts:["A salary negotiation meeting","A casual introductory interview","A written exam for candidates","The final interview round"],
     ans:"A casual introductory interview",
     hint:"'Conoscitivo' means 'for getting to know.' This first-round meeting focuses on personality and cultural fit."},

    {type:"fb", s:"Devo scrivere una {1} di presentazione per la candidatura.",
     a:["lettera"],
     opts:["lettera","lista","pagina","scheda"],
     hint:"This formal document accompanies your CV and introduces you to the employer. It starts with 'Gentile...'",
     sSrc:"I need to write a cover {1} for the application."},

    {type:"mc", q:"What does 'competenze trasversali' mean?",
     opts:["Technical certifications","Language skills only","Soft skills","Academic degrees"],
     ans:"Soft skills",
     hint:"'Trasversali' means 'transversal' or 'cross-cutting.' These are interpersonal abilities like teamwork and communication."},

    {type:"fb", s:"L'azienda vuole {1}! Comincio lunedi.",
     a:["assumermi"],
     opts:["assumermi","licenziarmi","trasferirmi","dimettermi"],
     hint:"The company wants to give you the job. This verb means 'to hire' and here it takes the reflexive pronoun 'mi.'",
     sSrc:"The company wants to {1}! I start Monday."},

    {type:"mc", q:"What is the past participle of 'assumere'?",
     opts:["Assumito","Assunato","Assumuto","Assunto"],
     ans:"Assunto",
     hint:"This is irregular, like 'prendere > preso.' The stem changes in the past participle form."}
  ]
};
export default LESSON_4;
