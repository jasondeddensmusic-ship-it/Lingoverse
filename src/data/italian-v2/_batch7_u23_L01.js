// Batch 7. Unit 23 extra lesson. La politica e la società: Civic Participation & Volunteering
const BATCH7_L1 = {id:"itv2_u23l_b7_1", title:"La partecipazione civica", icon:"\u{1F3DB}\uFE0F", xp:15, board:true, steps:[
{type:"intro", title:"La partecipazione civica",
 desc:"Learn vocabulary for civic participation, volunteering, and community engagement in Italy.",
 goals:["Discuss civic duties and rights","Talk about volunteering","Express opinions on social issues"]},

{type:"teach", trg:"il volontariato", src:"volunteering", pos:"noun", gender:"m",
 note:"Masculine noun. 'Fare volontariato' = to volunteer.\n'Il volontario' = the volunteer.",
 example:"A: Fai volontariato?\nB: Si, alla Croce Rossa ogni sabato.",
 exampleSrc:"A: Do you volunteer?\nB: Yes, at the Red Cross every Saturday.",
 funFact:"Italy has one of Europe's strongest volunteer cultures. Over 5 million Italians volunteer regularly. The 'terzo settore' (third sector / nonprofit) is a major force in Italian society."},

{type:"teach", trg:"l'associazione", src:"the association / organization", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le associazioni.\n'Associazione no-profit' = nonprofit organization.",
 example:"A: Fai parte di un'associazione?\nB: Si, un'associazione culturale.",
 exampleSrc:"A: Are you part of an association?\nB: Yes, a cultural association.",
 funFact:"Italian 'associazioni' cover everything from sports clubs to cultural groups to humanitarian aid. The 'Protezione Civile' (Civil Protection) relies heavily on volunteer associations."},

{type:"teach", trg:"il dovere", src:"the duty / obligation", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i doveri.\nAlso a verb: 'dovere' = to have to/must.",
 example:"A: Votare e un dovere civico.\nB: Sono d'accordo, e anche un diritto.",
 exampleSrc:"A: Voting is a civic duty.\nB: I agree, it is also a right.",
 funFact:"The Italian Constitution lists both 'diritti' (rights) and 'doveri' (duties). Article 4 states that every citizen has the 'dovere' to contribute to society through work."},

{type:"teach", trg:"il cittadino", src:"the citizen", pos:"noun", gender:"m",
 note:"Masculine noun. Feminine: la cittadina. Plural: i cittadini.\n'Cittadinanza' = citizenship.",
 example:"A: Ogni cittadino ha il diritto di voto.\nB: E un principio fondamentale della democrazia.",
 exampleSrc:"A: Every citizen has the right to vote.\nB: It is a fundamental principle of democracy.",
 funFact:"Italian citizenship can be obtained by descent ('ius sanguinis'), marriage, or naturalization. Millions of people worldwide hold Italian citizenship through their grandparents' heritage."},

{type:"teach", trg:"la solidarieta", src:"solidarity", pos:"noun", gender:"f",
 note:"Feminine noun. 'Mostrare solidarieta' = to show solidarity.\nA core Italian value.",
 example:"A: La solidarieta e importante nei momenti difficili.\nB: L'Italia l'ha dimostrato tante volte.",
 exampleSrc:"A: Solidarity is important in difficult times.\nB: Italy has shown it many times.",
 funFact:"Italian 'solidarieta' is deeply rooted. After earthquakes and disasters, Italians mobilize instantly. The concept of 'solidarieta' is enshrined in Article 2 of the Italian Constitution."},

{type:"teach", trg:"la manifestazione", src:"the demonstration / protest", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le manifestazioni.\n'Manifestare' = to demonstrate/protest.",
 example:"A: C'e una manifestazione in piazza domani.\nB: Per quale causa?",
 exampleSrc:"A: There is a demonstration in the square tomorrow.\nB: For what cause?",
 funFact:"Italy has a strong tradition of 'manifestazioni.' Student protests, worker strikes, and civic demonstrations are a regular part of Italian democratic life. They are usually peaceful."},

{type:"teach", trg:"la raccolta firme", src:"petition / signature collection", pos:"noun", gender:"f",
 note:"Feminine noun. 'Firmare una petizione' = to sign a petition.\n'Raccogliere firme' = to collect signatures.",
 example:"A: Vuoi firmare la raccolta firme?\nB: Per cosa? Fammi leggere.",
 exampleSrc:"A: Do you want to sign the petition?\nB: For what? Let me read it.",
 funFact:"Italian citizens can propose laws through 'iniziativa popolare' (people's initiative) by collecting 50,000 signatures. This democratic tool is used regularly for environmental and social causes."},

{type:"teach", trg:"il servizio civile", src:"civil service / community service", pos:"noun", gender:"m",
 note:"Masculine noun. 'Servizio Civile Universale' = Italy's voluntary civic service program for youth.",
 example:"A: Hai fatto il servizio civile?\nB: Si, un anno in una biblioteca pubblica.",
 exampleSrc:"A: Did you do civil service?\nB: Yes, one year in a public library.",
 funFact:"Italy replaced mandatory military service with voluntary 'Servizio Civile Universale' in 2001. Young people aged 18-28 can serve for a year in social, cultural, or environmental projects."},

{type:"teach", trg:"la donazione", src:"the donation", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le donazioni.\n'Donare' = to donate. 'Donare il sangue' = to donate blood.",
 example:"A: Vuoi fare una donazione?\nB: Si, quanto serve?",
 exampleSrc:"A: Would you like to make a donation?\nB: Yes, how much is needed?",
 funFact:"Blood donation ('donazione del sangue') is organized by AVIS, Italy's largest volunteer blood donors association. Founded in 1927, it has over 1.3 million members."},

{type:"teach", trg:"il bene comune", src:"the common good", pos:"noun", gender:"m",
 note:"Masculine noun. 'Per il bene comune' = for the common good.\nA philosophical and civic concept.",
 example:"A: Lavoriamo per il bene comune.\nB: Insieme possiamo fare la differenza.",
 exampleSrc:"A: We work for the common good.\nB: Together we can make a difference.",
 funFact:"'Bene comune' is a concept deeply rooted in Italian thought, from Roman law to Catholic social teaching. Public spaces, water, and cultural heritage are all considered 'beni comuni.'"},

{type:"teach", trg:"impegnarsi", src:"to commit / to get involved", pos:"verb", gender:null,
 note:"Reflexive -are verb. mi impegno, ti impegni, si impegna.\n'L'impegno' = commitment.",
 example:"A: Mi impegno per la mia comunita.\nB: Il tuo impegno fa la differenza.",
 exampleSrc:"A: I commit myself to my community.\nB: Your commitment makes a difference.",
 funFact:"'Impegno civile' (civic engagement) is a strong tradition. Many Italian intellectuals, from Gramsci to Pasolini, believed in 'impegnarsi' politically and socially."},

{type:"teach", trg:"la tutela", src:"protection / safeguarding", pos:"noun", gender:"f",
 note:"Feminine noun. 'Tutela dell'ambiente' = environmental protection.\n'Tutelare' = to protect.",
 example:"A: La tutela del patrimonio culturale e fondamentale.\nB: L'Italia ha il maggior numero di siti UNESCO.",
 exampleSrc:"A: Safeguarding cultural heritage is fundamental.\nB: Italy has the most UNESCO sites.",
 funFact:"Article 9 of the Italian Constitution mandates the 'tutela' of landscape and historical-artistic heritage. Italy was among the first countries to constitutionally protect culture and environment."},

{type:"teach", trg:"il senso civico", src:"civic sense / civic responsibility", pos:"noun", gender:"m",
 note:"Masculine noun. 'Avere senso civico' = to have civic responsibility.\nRespect for public spaces and rules.",
 example:"A: Il senso civico si insegna a scuola.\nB: E in famiglia, con l'esempio.",
 exampleSrc:"A: Civic sense is taught at school.\nB: And at home, by example.",
 funFact:"'Senso civico' is a hot topic in Italy. Debates about littering, tax evasion, and queue-jumping always come back to this concept. Regional differences in 'senso civico' are a national cliche."},

{type:"mc", q:"Quanti italiani fanno volontariato regolarmente?",
 opts:["Oltre 5 milioni","Circa 1 milione","Meno di 100.000","Circa 10 milioni"],
 ans:"Oltre 5 milioni",
 hint:"Italy has one of Europe's strongest volunteer cultures."},

{type:"fb", s:"Votare e un {1} civico.", a:["dovere"],
 opts:["dovere","diritto","bene","senso"],
 hint:"An obligation or duty. Something citizens should do for democracy.",
 sSrc:"Voting is a civic {1}."},

{type:"match", pairs:[
 {trg:"il volontariato", src:"volunteering"},
 {trg:"la solidarieta", src:"solidarity"},
 {trg:"la donazione", src:"donation"},
 {trg:"il cittadino", src:"citizen"}
]},

{type:"mc", q:"Quante firme servono per un'iniziativa popolare in Italia?",
 opts:["500.000","50.000","100.000","10.000"],
 ans:"50.000",
 hint:"The number of signatures needed to propose a law through people's initiative."},

{type:"fb", s:"Mi {1} per la mia comunita.", a:["impegno"],
 opts:["impegno","dono","tutelo","manifesto"],
 hint:"To commit yourself, to get involved. The reflexive verb 'impegnarsi.'",
 sSrc:"I commit myself to my community."},

{type:"mc", q:"Quale articolo della Costituzione italiana protegge il patrimonio culturale?",
 opts:["Articolo 18","Articolo 48","Articolo 9","Articolo 1"],
 ans:"Articolo 9",
 hint:"One of the most cited articles. It mandates protection of landscape and heritage."},

{type:"fb", s:"La {1} del patrimonio culturale e fondamentale.", a:["tutela"],
 opts:["tutela","manifestazione","raccolta","donazione"],
 hint:"Protection, safeguarding. The act of preserving something valuable.",
 sSrc:"The {1} of cultural heritage is fundamental."},

{type:"match", pairs:[
 {trg:"la manifestazione", src:"demonstration"},
 {trg:"il servizio civile", src:"civil service"},
 {trg:"il bene comune", src:"common good"},
 {trg:"il senso civico", src:"civic sense"}
]}
,{type:"match",pairs:[{trg:"la raccolta firme",src:"petition / signature collection"},{trg:"impegnarsi",src:"to commit / to get involved"}]},{type:"mc",q:"How do you say \"association / organization\" in Italian?",opts:["il volontariato","il dovere","il cittadino","l'associazione"],ans:"l'associazione",hint:"Recall the Italian vocabulary word taught in this lesson."}]};
export default BATCH7_L1;
