// Batch 8. Unit 31 extra lesson. Advanced Media: Journalism & Press
const BATCH8_L1 = {id:"itv2_u31l_b8_1", title:"Il giornalismo", icon:"📰", xp:15, board:true, steps:[
{type:"intro", title:"Il giornalismo",
 desc:"Learn vocabulary for journalism, the press, and media production in Italian.",
 goals:["Discuss journalism and news production","Use press vocabulary","Understand Italian media landscape"]},

{type:"teach", trg:"la redazione", src:"the editorial office / newsroom", pos:"noun", gender:"f",
 note:"Feminine noun. 'Il redattore' = the editor.\n'Redazione centrale' = main newsroom.",
 example:"A: La notizia e appena arrivata in redazione.\nB: Dobbiamo pubblicarla subito!",
 exampleSrc:"A: The news just arrived in the newsroom.\nB: We need to publish it immediately!",
 funFact:"Italian newsrooms are famously chaotic and passionate. Journalists argue loudly about angles and leads. 'Riunione di redazione' (editorial meeting) is where the daily news agenda is set."},

{type:"teach", trg:"l'inviato", src:"the correspondent / reporter", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: l'inviata.\n'Inviato speciale' = special correspondent.",
 example:"A: L'inviata dal fronte ha inviato il reportage.\nB: Le sue immagini sono impressionanti.",
 exampleSrc:"A: The correspondent from the front sent the report.\nB: Her images are impressive.",
 funFact:"Italian war correspondents have a distinguished tradition. Oriana Fallaci and Tiziano Terzani became literary figures through their reporting from conflict zones."},

{type:"teach", trg:"il titolo", src:"the headline / title", pos:"noun", gender:"m",
 note:"Masculine noun. 'Titolo a tutta pagina' = full-page headline.\n'Fare titolo' = to make headlines.",
 example:"A: Il titolo del giornale e molto forte.\nB: I titoli devono catturare l'attenzione.",
 exampleSrc:"A: The newspaper headline is very strong.\nB: Headlines must capture attention.",
 funFact:"Italian newspaper headlines use the conditional ('condizionale') to report unconfirmed news. 'Il ministro sarebbe coinvolto' (the minister would be involved) means 'allegedly.'"},

{type:"teach", trg:"la fonte", src:"the source", pos:"noun", gender:"f",
 note:"Feminine noun. 'Fonti attendibili' = reliable sources.\n'Citare le fonti' = to cite sources.",
 example:"A: Chi e la tua fonte per questa notizia?\nB: Non posso rivelarlo, e anonima.",
 exampleSrc:"A: Who is your source for this news?\nB: I cannot reveal it, it is anonymous.",
 funFact:"Italian journalism protects 'il segreto delle fonti' (source confidentiality). Journalists can refuse to reveal sources even to courts, a right fiercely defended by the profession."},

{type:"teach", trg:"l'intervista", src:"the interview", pos:"noun", gender:"f",
 note:"Feminine noun. 'Intervistare' = to interview.\n'Rilasciare un'intervista' = to give an interview.",
 example:"A: L'intervista al premier e stata trasmessa ieri.\nB: Ha detto qualcosa di interessante?",
 exampleSrc:"A: The interview with the prime minister was broadcast yesterday.\nB: Did he say anything interesting?",
 funFact:"Italian political interviews are theatrical performances. Politicians and journalists spar verbally, often raising their voices. Calm, measured responses are seen as evasive."},

{type:"teach", trg:"il palinsesto", src:"the programming schedule", pos:"noun", gender:"m",
 note:"Masculine noun. Originally: a reused parchment.\n'Palinsesto televisivo' = TV schedule.",
 example:"A: Il nuovo palinsesto autunnale della RAI e uscito.\nB: Ci sono programmi interessanti?",
 exampleSrc:"A: RAI's new autumn programming schedule is out.\nB: Are there interesting shows?",
 funFact:"'Palinsesto' originally meant a parchment scraped and rewritten. TV borrowed it because programming schedules are constantly revised. A beautiful archaeological metaphor."},

{type:"teach", trg:"il comunicato stampa", src:"the press release", pos:"noun", gender:"m",
 note:"Masculine compound. 'Diramato un comunicato' = issued a press release.",
 example:"A: L'azienda ha emesso un comunicato stampa.\nB: Cosa dice esattamente?",
 exampleSrc:"A: The company issued a press release.\nB: What does it say exactly?",
 funFact:"Italian 'comunicati stampa' follow strict conventions. The headline, lead paragraph, and closing contact information must follow a precise format recognized by all newsrooms."},

{type:"teach", trg:"la rettifica", src:"the correction / rectification", pos:"noun", gender:"f",
 note:"Feminine noun. 'Rettificare' = to correct/rectify.\n'Diritto di rettifica' = right of reply.",
 example:"A: Il giornale ha pubblicato una rettifica.\nB: Almeno hanno ammesso l'errore.",
 exampleSrc:"A: The newspaper published a correction.\nB: At least they admitted the error.",
 funFact:"Italian press law guarantees 'il diritto di rettifica' (right of reply). If a newspaper publishes incorrect information about you, they must publish your correction with equal prominence."},

{type:"teach", trg:"la tiratura", src:"the print run / circulation", pos:"noun", gender:"f",
 note:"Feminine noun. 'Tiratura giornaliera' = daily circulation.\nFrom 'tirare' (to pull, referring to the press).",
 example:"A: La tiratura dei giornali sta diminuendo.\nB: La gente legge le notizie online.",
 exampleSrc:"A: Newspaper circulation is decreasing.\nB: People read news online.",
 funFact:"Italian newspaper circulation has dropped dramatically. 'Il Corriere della Sera' went from 700,000 daily copies in the 1990s to under 200,000. Digital subscriptions are growing."},

{type:"mc",
 q:"Why do Italian headlines use the conditional tense?",
 opts:["To report unconfirmed or alleged news","Because it sounds more elegant","To express future events","Grammar rules require it"],
 ans:"To report unconfirmed or alleged news",
 hint:"'Sarebbe coinvolto' means 'would be involved,' signaling that the information is not yet confirmed."},

{type:"match", pairs:[
  {trg:"la redazione", src:"the newsroom"},
  {trg:"la fonte", src:"the source"},
  {trg:"la rettifica", src:"the correction"},
  {trg:"la tiratura", src:"the circulation"}
]},

{type:"fb",
 s:"Non posso rivelare la mia {1}, e anonima.",
 a:["fonte"],
 opts:["fonte","redazione","tiratura","intervista"],
 hint:"A journalist protects the identity of this person who provided confidential information.",
 sSrc:"I cannot reveal my {1}, it is anonymous."},

{type:"mc",
 q:"What does 'palinsesto' originally mean?",
 opts:["A radio frequency","A parchment scraped and rewritten","A television set","A newspaper column"],
 ans:"A parchment scraped and rewritten",
 hint:"The archaeological term was borrowed by television because schedules are constantly revised, like rewriting old p...."},

{type:"fb",
 s:"Il giornale ha pubblicato una {1} per l'errore di ieri.",
 a:["rettifica"],
 opts:["rettifica","tiratura","intervista","fonte"],
 hint:"The newspaper is correcting a mistake. Italian law guarantees the right to this kind of correction.",
 sSrc:"The newspaper published a {1} for yesterday's error."},

{type:"mc",
 q:"What right does Italian press law guarantee to individuals?",
 opts:["Access to newsrooms","Immunity from criticism","The right of reply (diritto di rettifica)","Free newspaper subscriptions"],
 ans:"The right of reply (diritto di rettifica)",
 hint:"If incorrect information is published about you, you can demand a correction with equal prominence."}
,{type:"match",pairs:[{trg:"il titolo",src:"the headline / title"},{trg:"il palinsesto",src:"the programming schedule"},{trg:"il comunicato stampa",src:"the press release"}]},{type:"mc",q:"How do you say \"correspondent / reporter\" in Italian?",opts:["il tavolo","la bicicletta","la finestra","l'inviato"],ans:"l'inviato",hint:"Recall the Italian vocabulary word taught in this lesson."},{type:"mc",q:"How do you say \"interview\" in Italian?",opts:["l'intervista","la finestra","il tavolo","la bicicletta"],ans:"l'intervista",hint:"Recall the Italian vocabulary word taught in this lesson."}]};
export default BATCH8_L1;
