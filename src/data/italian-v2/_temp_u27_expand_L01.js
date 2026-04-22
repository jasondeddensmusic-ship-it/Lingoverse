// Unit 27 Expansion. Lesson 4: La ricerca avanzata
const LESSON_4 = {
  id:"itv2_u27l4", title:"La ricerca avanzata", icon:"🔎", xp:15, board:true,
  steps:[
    {type:"intro", title:"La ricerca avanzata",
     desc:"Dive deeper into research methodology, peer review, and the academic publishing process. Learn how Italian scientists discuss their work and the structures that support it.",
     goals:["Describe the peer review and publication process","Discuss research funding and grants","Understand academic career vocabulary"]},

    {type:"teach", trg:"la revisione paritaria", src:"the peer review", pos:"noun", gender:"f",
     note:"Feminine compound noun. Also called 'referaggio' (informal).\nThe process where experts evaluate scientific papers before publication.",
     example:"A: L'articolo e in fase di revisione paritaria.\nB: Due revisori anonimi lo stanno valutando.",
     exampleSrc:"A: The article is under peer review.\nB: Two anonymous reviewers are evaluating it.",
     funFact:"Italian academics use both the formal 'revisione paritaria' and the informal Anglicism 'peer review.' The verb 'referare' (to review) is also borrowed from English. Italy's research evaluation system ANVUR relies heavily on this process."},

    {type:"teach", trg:"il campione", src:"the sample", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i campioni.\nIn research: a subset of a population studied.\nAlso means 'champion' in sports.",
     example:"A: Il campione dello studio comprendeva mille pazienti.\nB: E stato selezionato in modo casuale.",
     exampleSrc:"A: The study sample included one thousand patients.\nB: It was selected randomly.",
     funFact:"'Campione' has a remarkable range of meanings: a sample in science, a champion in sports, a swatch in fashion, and a specimen in biology. All derive from Latin 'campus' (field), through the idea of something chosen from a larger field."},

    {type:"teach", trg:"la variabile", src:"the variable", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le variabili.\n'Variabile indipendente/dipendente' = independent/dependent variable.",
     example:"A: Abbiamo controllato tutte le variabili.\nB: Solo cosi i risultati sono affidabili.",
     exampleSrc:"A: We controlled all the variables.\nB: Only then are the results reliable.",
     funFact:"Italian uses the same word for both mathematical and experimental variables. The adjective 'variabile' (changeable) also describes unpredictable weather: 'tempo variabile' means changeable weather conditions."},

    {type:"teach", trg:"il finanziamento", src:"the funding / grant", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i finanziamenti.\n'Finanziamento pubblico/privato' = public/private funding.\n'Bando di finanziamento' = funding call.",
     example:"A: Abbiamo ottenuto un finanziamento europeo.\nB: Possiamo finalmente iniziare la ricerca.",
     exampleSrc:"A: We obtained European funding.\nB: We can finally begin the research.",
     funFact:"Italian researchers compete fiercely for EU funding (Horizon Europe) because national research funding is limited. 'Scrivere un progetto' (writing a grant proposal) has become a crucial skill, consuming significant amounts of researchers' time."},

    {type:"teach", trg:"la correlazione", src:"the correlation", pos:"noun", gender:"f",
     note:"Feminine noun. A statistical relationship between two variables.\n'Correlazione positiva/negativa' = positive/negative correlation.",
     example:"A: C'e una forte correlazione tra inquinamento e malattie respiratorie.\nB: Ma correlazione non significa causalita.",
     exampleSrc:"A: There is a strong correlation between pollution and respiratory diseases.\nB: But correlation does not mean causation.",
     funFact:"The mantra 'correlazione non implica causalita' (correlation does not imply causation) is drilled into Italian statistics students. The phrase has entered popular discourse as people become more scientifically literate about interpreting data."},

    {type:"mc",
     q:"Che cos'e la revisione paritaria nella ricerca scientifica?",
     opts:["La valutazione di un articolo da parte di esperti prima della pubblicazione","Una revisione del bilancio di un laboratorio","Un metodo per selezionare i campioni","Un tipo di esperimento condotto tra pari"],
     ans:"La valutazione di un articolo da parte di esperti prima della pubblicazione",
     hint:"Before a scientific paper is published, anonymous experts in the same field evaluate its quality, methodology, and conclusions."},

    {type:"teach", trg:"la citazione", src:"the citation", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le citazioni.\nA reference to another work in a paper.\n'Indice di citazione' = citation index.",
     example:"A: Questo articolo ha ricevuto duecento citazioni.\nB: E diventato un punto di riferimento nel campo.",
     exampleSrc:"A: This paper received two hundred citations.\nB: It has become a reference point in the field.",
     funFact:"Italian research evaluation uses 'bibliometria' (bibliometrics), counting citations to measure impact. The 'h-index' of a researcher measures both quantity and impact. Italian academics are ranked nationally using these metrics for career advancement."},

    {type:"teach", trg:"il protocollo", src:"the protocol", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i protocolli.\nA standardized procedure for conducting research.\n'Protocollo sperimentale' = experimental protocol.",
     example:"A: Il protocollo prevede tre fasi di sperimentazione.\nB: Ogni fase deve essere approvata dal comitato etico.",
     exampleSrc:"A: The protocol includes three phases of testing.\nB: Each phase must be approved by the ethics committee.",
     funFact:"'Protocollo' entered Italian from Greek through medieval Latin, originally meaning the first sheet glued to a papyrus scroll. Today it means both a scientific procedure and the formal rules of diplomatic etiquette ('protocollo diplomatico')."},

    {type:"fb",
     s:"Il {1} dello studio comprendeva cinquecento volontari sani.",
     a:["campione"],
     opts:["campione","protocollo","finanziamento","risultato"],
     hint:"The group of subjects selected for a study. A subset of a larger population chosen for analysis.",
     sSrc:"The study {1} included five hundred healthy volunteers."},

    {type:"teach", trg:"la tesi", src:"the thesis / dissertation", pos:"noun", gender:"f",
     note:"Feminine noun. Invariable (same singular and plural).\n'Tesi di laurea' = degree thesis. 'Discutere la tesi' = to defend the thesis.",
     example:"A: Ho finalmente consegnato la tesi.\nB: Quando la discuti?\nA: Il mese prossimo.",
     exampleSrc:"A: I finally submitted my thesis.\nB: When do you defend it?\nA: Next month.",
     funFact:"Every Italian university degree requires a thesis ('tesi di laurea'). The defense is public and involves a committee of professors. The thesis grade contributes to the final 'voto di laurea' (degree mark), out of 110."},

    {type:"teach", trg:"il dottorato", src:"the doctorate / PhD", pos:"noun", gender:"m",
     note:"Masculine noun. 'Dottorato di ricerca' = research doctorate (PhD).\n'Dottorando/a' = PhD student. 'Dottore di ricerca' = PhD holder.",
     example:"A: Sto facendo il dottorato in biologia molecolare.\nB: Quanto dura il programma?\nA: Tre anni.",
     exampleSrc:"A: I am doing a PhD in molecular biology.\nB: How long is the program?\nA: Three years.",
     funFact:"In Italy, everyone with a university degree is called 'Dottore/Dottoressa,' not just PhD holders. A PhD holder is specifically 'Dottore di ricerca.' This generous use of 'Dottore' as a title confuses foreigners who expect it to mean 'Doctor' as in medicine."},

    {type:"mc",
     q:"Perche 'correlazione non significa causalita'?",
     opts:["Perche le correlazioni non esistono","Perche due fenomeni correlati possono essere entrambi causati da un terzo fattore","Perche la causalita e piu facile da dimostrare","Perche le statistiche non sono affidabili"],
     ans:"Perche due fenomeni correlati possono essere entrambi causati da un terzo fattore",
     hint:"Just because two things happen together does not mean one causes the other. A hidden third factor might be responsible for both."},

    {type:"match", pairs:[
      {trg:"revisione paritaria", src:"peer review"},
      {trg:"campione", src:"sample"},
      {trg:"variabile", src:"variable"},
      {trg:"correlazione", src:"correlation"},
      {trg:"citazione", src:"citation"}
    ]},

    {type:"fb",
     s:"Abbiamo ottenuto un {1} europeo per tre anni di ricerca.",
     a:["finanziamento"],
     opts:["finanziamento","protocollo","dottorato","campione"],
     hint:"Money provided by an institution to support research. Scientists apply through competitive calls to receive these grants.",
     sSrc:"We obtained European {1} for three years of research."},

    {type:"mc",
     q:"In Italia, chi viene chiamato 'Dottore'?",
     opts:["Solo i medici","Solo chi ha un dottorato di ricerca","Chiunque abbia una laurea universitaria","Solo i professori universitari"],
     ans:"Chiunque abbia una laurea universitaria",
     hint:"Unlike in English-speaking countries, this title is used very broadly in Italy. It applies to anyone who completed a university degree, not just those with advanced research qualifications."}
  ]
};
export default LESSON_4;
