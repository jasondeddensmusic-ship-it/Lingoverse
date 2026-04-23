// Italian V2 Unit 26. Il diritto (B2.1)
import BATCH8_L1 from './_batch8_u26_L01.js';
import BATCH7_L1 from './_batch7_u26_L01.js';
import BATCH6_L1 from './_batch6_u26_L01.js';
import BATCH5_L02 from './_batch5_u26_L02.js';
import BATCH5_L01 from './_batch5_u26_L01.js';
import BATCH3_L02 from './_batch3_u26_L02.js';
import BATCH3_L01 from './_batch3_u26_L01.js';
import EXP_L4 from './_temp_u26_expand_L01.js';import EXP_L5 from './_temp_u26_expand_L02.js';import EXP_L6 from './_temp_u26_expand_L03.js';
import COVERAGE_U26 from './_coverage_u26.js';
// CILS B2 aligned. Law, justice, and rights vocabulary.

const UNIT_26 = {
  n:26, lang:"it", srcLang:"en", track:"v2",
  title:"Il diritto", sub:"Law & Justice",
  icon:"⚖️", level:"B2.1", color:"#7B5EE8",
  lessons:[
    // ─── Lesson 1: In tribunale ───
    {id:"itv2_u26l1", title:"In tribunale", icon:"🏛️", xp:15, board:true, steps:[
      {type:"intro", title:"In tribunale",
       desc:"Learn essential legal vocabulary for courts, trials, and the Italian justice system. These terms appear frequently in news and public discourse.",
       goals:["Name key roles in the Italian legal system","Describe court proceedings and outcomes","Understand legal terminology in news reports"]},

      {type:"teach", trg:"il tribunale", src:"the court / courthouse", pos:"noun", gender:"m",
       note:"Masculine noun. The building and the institution.\nPlural: i tribunali. 'Tribunale civile/penale' = civil/criminal court.",
       example:"A: Devo andare al tribunale domani.\nB: Per quale motivo?\nA: Una causa civile.\nA: Pensi di continuare?\nB: Si, mi piace molto e voglio migliorare.\nA: Ne hai discusso con altri colleghi?\nB: Si, e il consenso generale e che serve un intervento strutturale.",
       exampleSrc:"A: I have to go to the courthouse tomorrow.\nB: For what reason?\nA: A civil case.\nA: Do you plan to continue?\nB: Yes, I like it a lot and I want to improve.\nA: Have you discussed it with other colleagues?\nB: Yes, and the general consensus is that structural intervention is needed.",
       funFact:"From Latin 'tribunal,' the raised platform where Roman magistrates sat to administer justice. Italian courthouses are often grand neoclassical buildings reflecting the solemnity of law."},

      {type:"teach", trg:"il processo", src:"the trial", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i processi.\nAlso means 'process' in general. 'Processo penale' = criminal trial.",
       example:"A: Il processo durera almeno sei mesi.\nB: La giustizia italiana e molto lenta.\nA: E stato difficile?\nB: Un po', ma alla fine ne e valsa la pena.\nA: Cosa si potrebbe fare di diverso?\nB: Investire di piu nella formazione e nella prevenzione.",
       exampleSrc:"A: The trial will last at least six months.\nB: Italian justice is very slow.\nA: Was it difficult?\nB: A little, but in the end it was worth it.\nA: What could be done differently?\nB: Invest more in education and prevention.",
       funFact:"Italy's court system is notoriously slow. The average civil trial takes over 500 days. The European Court of Human Rights has repeatedly condemned Italy for violating the right to a speedy trial."},

      {type:"teach", trg:"il giudice", src:"the judge", pos:"noun", gender:"m",
       note:"Masculine/feminine noun. 'La giudice' for a female judge is\nincreasingly common, though 'il giudice' is still used for both.",
       example:"A: Il giudice ha rinviato l'udienza.\nB: A quando?\nA: Al mese prossimo.\nA: E la prima volta?\nB: No, l'ho fatto anche l'anno scorso.\nA: E un problema anche in altri settori?\nB: Si, purtroppo e trasversale e riguarda molti ambiti.",
       exampleSrc:"A: The judge postponed the hearing.\nB: Until when?\nA: Next month.\nA: Is it the first time?\nB: No, I did it last year too.\nA: Is it a problem in other sectors too?\nB: Yes, unfortunately it cuts across many areas.",
       funFact:"Italian judges are career magistrates who enter the profession through a national competitive exam after law school. They do not need to practice as lawyers first, unlike in many other countries."},

      {type:"teach", trg:"l'avvocato", src:"the lawyer", pos:"noun", gender:"m",
       note:"Masculine noun. Feminine: l'avvocata/l'avvocatessa.\nPlural: gli avvocati. Title abbreviated as 'Avv.'",
       example:"A: Hai bisogno di un avvocato?\nB: Si, per una questione contrattuale.\nA: Come ti sei trovato?\nB: Molto bene, lo consiglio a tutti.\nA: Qual e l'opinione degli esperti?\nB: Ci sono posizioni diverse, ma la maggioranza concorda su un punto.",
       exampleSrc:"A: Do you need a lawyer?\nB: Yes, for a contractual matter.\nA: How did you find it?\nB: Very well, I recommend it to everyone.\nA: What is the experts' opinion?\nB: There are different positions, but the majority agrees on one point.",
       funFact:"Italy has one of the highest ratios of lawyers per capita in Europe, with over 240,000 registered avvocati. The title 'Avvocato' is used as an honorific, much like 'Dottore' for graduates."},

      {type:"teach", trg:"la sentenza", src:"the sentence / judgment", pos:"noun", gender:"f",
       note:"Feminine noun. The court's official decision.\n'Sentenza di condanna' = conviction. 'Sentenza di assoluzione' = acquittal.",
       example:"A: La sentenza sara pronunciata venerdi.\nB: Speriamo in un esito positivo.\nA: Da quanto tempo?\nB: Da qualche mese ormai.\nA: E un fenomeno recente?\nB: Non proprio, ha radici che risalgono a decenni fa.",
       exampleSrc:"A: The sentence will be pronounced on Friday.\nB: Let us hope for a positive outcome.\nA: For how long?\nB: For a few months now.\nA: Is it a recent phenomenon?\nB: Not exactly, it has roots that go back decades.",
       funFact:"In Italian law, sentences must include a detailed written explanation of the judge's reasoning ('motivazione'). This can take weeks or months to write, delaying the final outcome."},
{type:"match",pairs:[{trg:"il processo",src:"the trial"},{trg:"il giudice",src:"the judge"},{trg:"l'avvocato",src:"the lawyer"},{trg:"la sentenza",src:"the sentence / judgment"}]},

      {type:"mc",
       q:"Chi presiede un processo e pronuncia la sentenza?",
       opts:["Il giudice","L'avvocato","Il testimone","Il querelante"],
       ans:"Il giudice",
       hint:"This person sits at the front of the courtroom and makes the final decision. A career magistrate in the Italian system."},

      {type:"teach", trg:"l'appello", src:"the appeal", pos:"noun", gender:"m",
       note:"Masculine noun. 'Fare appello' or 'ricorrere in appello' = to appeal.\n'Corte d'appello' = court of appeal.",
       example:"A: L'imputato ha fatto appello.\nB: Il caso andra alla Corte d'appello.\nA: In che senso?\nB: Nel senso che bisogna pensarci bene prima di decidere.\nA: Possiamo approfondire questo aspetto?\nB: Certo, e un tema che merita una discussione piu ampia.",
       exampleSrc:"A: The defendant appealed.\nB: The case will go to the Court of Appeal.\nA: In what sense?\nB: In the sense that you need to think carefully before deciding.\nA: Can we explore this aspect further?\nB: Of course, it is a topic that deserves a broader discussion.",
       funFact:"Italy's justice system has three levels: Tribunale (first instance), Corte d'appello (appeal), and Corte di Cassazione (supreme court). Cases can bounce between levels for years."},

      {type:"teach", trg:"il reato", src:"the crime / criminal offense", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i reati.\n'Commettere un reato' = to commit a crime. 'Reato penale' = criminal offense.",
       example:"A: E stato accusato di un reato grave.\nB: Rischia fino a dieci anni di carcere.\nA: Interessante, non lo sapevo.\nB: Si, e una cosa che pochi sanno.\nA: C'e qualcosa che mi sfugge?\nB: Forse il fatto che il contesto storico e molto complesso.",
       exampleSrc:"A: He was accused of a serious crime.\nB: He faces up to ten years in prison.\nA: Interesting, I did not know that.\nB: Yes, it is something few people know.\nA: Am I missing something?\nB: Perhaps the fact that the historical context is very complex.",
       funFact:"Italian criminal law distinguishes between 'delitti' (serious crimes like murder or robbery) and 'contravvenzioni' (minor offenses like traffic violations). 'Reato' covers both categories."},

      {type:"teach", trg:"accusare", src:"to accuse / to charge", pos:"verb", gender:null,
       note:"Regular -are verb. Io accuso, tu accusi.\n'L'accusato' / 'l'imputato' = the accused/defendant.",
       example:"A: Lo hanno accusato di frode.\nB: Ma lui si dichiara innocente.\nA: Hai chiesto consiglio a qualcuno?\nB: Si, al mio amico Luca. Lui ha esperienza.\nA: Qual e la tua posizione in merito?\nB: Personalmente credo che serva un approccio piu equilibrato.",
       exampleSrc:"A: They accused him of fraud.\nB: But he declares himself innocent.\nA: Did you ask anyone for advice?\nB: Yes, my friend Luca. He has experience.\nA: What is your position on the matter?\nB: Personally I believe a more balanced approach is needed.",
       funFact:"In Italian, the public prosecutor ('pubblico ministero' or PM) brings charges. Unlike some systems, Italian PMs are part of the magistracy, not the government, ensuring their independence."},

      {type:"fb",
       s:"La {1} del tribunale sara pronunciata domani mattina.",
       a:["sentenza"],
       opts:["sentenza","processo","appello","avvocato"],
       hint:"The court's official decision or judgment. Pronounced by the judge at the end of a trial.",
       sSrc:"The court's {1} will be pronounced tomorrow morning."},

      {type:"teach", trg:"difendere", src:"to defend", pos:"verb", gender:null,
       note:"Irregular -ere verb. Io difendo, tu difendi.\nPassato prossimo: ho difeso. 'La difesa' (noun) = the defense.",
       example:"A: Chi difende l'imputato?\nB: L'avvocato Rossi, un penalista famoso.\nA: Ne parleremo domani?\nB: Certo, con calma e senza fretta.\nA: Credi che la situazione migliorera?\nB: Dipende dalle scelte che faremo nei prossimi mesi.",
       exampleSrc:"A: Who is defending the accused?\nB: Lawyer Rossi, a famous criminal attorney.\nA: Shall we talk about it tomorrow?\nB: Of course, calmly and without rush.\nA: Do you think the situation will improve?\nB: It depends on the choices we make in the coming months.",
       funFact:"The participle 'difeso' is irregular (not 'difenduto'). 'Legittima difesa' (legitimate defense/self-defense) is a frequent topic in Italian legal and political debates."},

      {type:"teach", trg:"condannare", src:"to convict / to sentence", pos:"verb", gender:null,
       note:"Regular -are verb. Io condanno, tu condanni.\n'Condannare a' + punishment: 'condannato a tre anni' = sentenced to three years.",
       example:"A: L'imputato e stato condannato a cinque anni.\nB: Fara appello sicuramente.\nA: Come va adesso?\nB: Molto meglio di prima, grazie.\nA: Come si confronta con altri paesi?\nB: L'Italia ha le sue specificita, ma il trend e simile in Europa.",
       exampleSrc:"A: The defendant was sentenced to five years.\nB: He will certainly appeal.\nA: How is it going now?\nB: Much better than before, thanks.\nA: How does it compare with other countries?\nB: Italy has its own specificities, but the trend is similar in Europe.",
       funFact:"Italy abolished the death penalty in 1889, one of the first European countries to do so. The constitution of 1948 formally prohibits it. Maximum prison sentences top out at 30 years, with 'ergastolo' (life) for the worst crimes."},

      {type:"teach", trg:"assolvere", src:"to acquit", pos:"verb", gender:null,
       note:"Irregular -ere verb. Io assolvo, tu assolvi.\nPassato prossimo: ho assolto. Opposite of condannare.",
       example:"A: L'imputato e stato assolto per mancanza di prove.\nB: Era chiaro fin dall'inizio.\nA: Lo fai spesso?\nB: Almeno una volta alla settimana.\nA: Quali sono le conseguenze a lungo termine?\nB: Difficile dirlo, ma il cambiamento sara significativo.",
       exampleSrc:"A: The defendant was acquitted for lack of evidence.\nB: It was clear from the beginning.\nA: Do you do it often?\nB: At least once a week.\nA: What are the long-term consequences?\nB: Hard to say, but the change will be significant.",
       funFact:"Italian acquittals come in two forms: 'assolto perche il fatto non sussiste' (acquitted because the fact does not exist) and 'assolto per non aver commesso il fatto' (acquitted for not having committed the act). The distinction matters for civil lawsuits."},

      {type:"mc",
       q:"Qual e il contrario di 'condannare'?",
       opts:["Accusare","Assolvere","Difendere","Ricorrere"],
       ans:"Assolvere",
       hint:"When a court finds the defendant not guilty, it does the opposite of convicting. It releases them from the charges."},

      {type:"match", pairs:[
        {trg:"tribunale", src:"court"},
        {trg:"processo", src:"trial"},
        {trg:"sentenza", src:"sentence/judgment"},
        {trg:"reato", src:"crime"},
        {trg:"appello", src:"appeal"}
      ]},

      {type:"fb",
       s:"L'imputato e stato {1} di frode fiscale.",
       a:["accusato"],
       opts:["accusato","assolto","condannato","difeso"],
       hint:"The defendant faces formal charges. The prosecution has officially said he committed this crime.",
       sSrc:"The defendant was {1} of tax fraud."},

      {type:"mc",
       q:"Dove si svolge un processo penale?",
       opts:["In questura","In parlamento","In tribunale","In prefettura"],
       ans:"In tribunale",
       hint:"The building where judges preside over cases and sentences are pronounced. The seat of judicial power."}
    ]},

    // ─── Lesson 2: Diritti e costituzione ───
    {id:"itv2_u26l2", title:"Diritti e costituzione", icon:"📜", xp:15, board:true, steps:[
      {type:"intro", title:"Diritti e costituzione",
       desc:"Learn about constitutional rights, legal principles, and the foundations of the Italian legal system. Vocabulary essential for understanding political and social debates.",
       goals:["Discuss fundamental rights and freedoms","Understand constitutional vocabulary","Describe legal principles and precedents"]},

      {type:"teach", trg:"il diritto", src:"the right / the law (as a discipline)", pos:"noun", gender:"m",
       note:"Masculine noun. Dual meaning: 'un diritto' = a right;\n'il diritto' = the law (academic field). 'Facolta di diritto' = law school.",
       example:"A: Studiare e un diritto di tutti.\nB: E anche un dovere, secondo me.\nA: Ci sono alternative?\nB: Alcune, ma questa mi sembra la migliore.\nA: Dobbiamo restare aggiornati su questo tema.\nB: Assolutamente, e in continua evoluzione.",
       exampleSrc:"A: Studying is everyone's right.\nB: And also a duty, in my opinion.\nA: Are there alternatives?\nB: Some, but this one seems the best to me.\nA: We need to stay updated on this topic.\nB: Absolutely, it is constantly evolving.",
       funFact:"Italian distinguishes 'diritto' (a right/the law as a discipline) from 'legge' (a specific law/statute). A lawyer studies 'il diritto' but must know individual 'leggi.'"},

      {type:"teach", trg:"la costituzione", src:"the constitution", pos:"noun", gender:"f",
       note:"Feminine noun. 'La Costituzione italiana' = the Italian Constitution.\nCapitalized when referring to the specific document.",
       example:"A: La Costituzione italiana e del 1948.\nB: E una delle piu belle del mondo.\nA: Quanto ci vuole?\nB: Di solito circa un'ora, non di piu.\nA: Come vedi il futuro di questo ambito?\nB: Con cautela ottimistica, se si fanno le scelte giuste.",
       exampleSrc:"A: The Italian Constitution dates from 1948.\nB: It is one of the most beautiful in the world.\nA: How long does it take?\nB: Usually about an hour, no more.\nA: How do you see the future of this field?\nB: With cautious optimism, if the right choices are made.",
       funFact:"The Italian Constitution was written in 1947 by an assembly that included communists, Christian democrats, and liberals working together. Article 1 famously declares: 'L'Italia e una Repubblica fondata sul lavoro' (Italy is a Republic founded on labor)."},

      {type:"teach", trg:"l'emendamento", src:"the amendment", pos:"noun", gender:"m",
       note:"Masculine noun. A proposed change to a law or the constitution.\nPlural: gli emendamenti.",
       example:"A: Hanno proposto un emendamento alla legge.\nB: Cambiera molto il testo originale.\nA: E successo all'improvviso?\nB: Si, non me lo aspettavo per niente.\nA: E una questione di cui si parla poco.\nB: Hai ragione, meriterebbe molta piu attenzione da parte dei media.",
       exampleSrc:"A: They proposed an amendment to the law.\nB: It will change the original text a lot.\nA: Did it happen suddenly?\nB: Yes, I did not expect it at all.\nA: It is an issue that is rarely discussed.\nB: You are right, it would deserve much more attention from the media.",
       funFact:"Unlike the US Constitution, Italy's does not use numbered amendments. Changes are incorporated directly into the text. Modifying the constitution requires two parliamentary votes and can trigger a referendum."},

      {type:"teach", trg:"la giurisprudenza", src:"the jurisprudence / case law", pos:"noun", gender:"f",
       note:"Feminine noun. The body of court decisions that guide future rulings.\nAlso the name of the law degree: 'laurea in giurisprudenza.'",
       example:"A: La giurisprudenza su questo tema e chiara.\nB: Le sentenze precedenti confermano la nostra posizione.\nA: E una bella opportunita.\nB: Sono d'accordo, non voglio perdermela.\nA: Vorrei capire meglio i dettagli.\nB: Posso mandarti un articolo che spiega tutto molto bene.",
       exampleSrc:"A: The case law on this topic is clear.\nB: Previous rulings confirm our position.\nA: It is a great opportunity.\nB: I agree, I do not want to miss it.\nA: I would like to understand the details better.\nB: I can send you an article that explains everything very well.",
       funFact:"Italy uses a civil law system based on written codes, not common law precedent. However, 'giurisprudenza' (accumulated court rulings) still carries significant persuasive weight in practice."},

      {type:"teach", trg:"il precedente", src:"the precedent", pos:"noun", gender:"m",
       note:"Masculine noun. A prior court decision used as a reference.\n'Creare un precedente' = to set a precedent.",
       example:"A: Questa sentenza crea un precedente importante.\nB: Influenzera tutti i casi futuri.\nA: Mi fa piacere sentirlo.\nB: Si, le cose stanno andando bene.\nA: Che ruolo gioca la tecnologia in tutto questo?\nB: Fondamentale, sta trasformando completamente il settore.",
       exampleSrc:"A: This ruling sets an important precedent.\nB: It will influence all future cases.\nA: I am glad to hear it.\nB: Yes, things are going well.\nA: What role does technology play in all this?\nB: A fundamental one, it is completely transforming the sector.",
       funFact:"In Italy's civil law system, precedents are technically not binding (unlike English common law). But in practice, the Corte di Cassazione's rulings are followed almost universally by lower courts."},
{type:"match",pairs:[{trg:"la costituzione",src:"the constitution"},{trg:"l'emendamento",src:"the amendment"},{trg:"la giurisprudenza",src:"the jurisprudence / case law"},{trg:"il precedente",src:"the precedent"}]},

      {type:"mc",
       q:"Come si chiama il documento fondamentale che definisce i diritti dei cittadini italiani?",
       opts:["La Costituzione","Il codice civile","La giurisprudenza","Il tribunale"],
       ans:"La Costituzione",
       hint:"Written in 1948, this fundamental document establishes the republic and all citizens' basic rights."},

      {type:"teach", trg:"la legge", src:"the law (a specific statute)", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le leggi.\n'Approvare una legge' = to pass a law. 'Violare la legge' = to break the law.",
       example:"A: Il parlamento ha approvato una nuova legge.\nB: Entrera in vigore il mese prossimo.\nA: Hai altri programmi?\nB: No, per adesso mi concentro su questo.\nA: Non avevo mai pensato a questo aspetto.\nB: E un punto di vista che molti trascurano, in effetti.",
       exampleSrc:"A: Parliament passed a new law.\nB: It will come into effect next month.\nA: Do you have other plans?\nB: No, for now I am focusing on this.\nA: I had never thought about this aspect.\nB: It is a point of view that many overlook, in fact.",
       funFact:"Italy produces an enormous number of laws. There are estimated to be over 150,000 active statutes, compared to about 3,000 in the UK. This legislative density contributes to the famous Italian bureaucracy."},

      {type:"teach", trg:"il dovere", src:"the duty / obligation", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i doveri.\nThe counterpart of 'diritto' (right). Also a modal verb: 'dovere' (must/to have to).",
       example:"A: Votare e un dovere civico.\nB: Purtroppo molti non lo fanno.\nA: Come posso aiutare?\nB: Potresti darmi una mano domani pomeriggio.\nA: E un argomento che mi sta a cuore.\nB: Si vede, e bello avere questa passione.",
       exampleSrc:"A: Voting is a civic duty.\nB: Unfortunately many do not do it.\nA: How can I help?\nB: You could give me a hand tomorrow afternoon.\nA: It is a topic I care about deeply.\nB: One can tell, it is nice to have that passion.",
       funFact:"The Italian Constitution pairs rights with duties. Article 2 speaks of 'doveri inderogabili di solidarieta politica, economica e sociale' (inescapable duties of political, economic, and social solidarity)."},

      {type:"teach", trg:"la liberta", src:"the freedom / liberty", pos:"noun", gender:"f",
       note:"Feminine noun. Invariable (accented ending, no plural change).\n'Liberta di stampa' = freedom of the press.",
       example:"A: La liberta di espressione e un diritto fondamentale.\nB: Sancito dalla Costituzione.\nA: Ne vale la pena?\nB: Decisamente si, te lo consiglio.\nA: Mi piacerebbe saperne di piu.\nB: Con piacere, possiamo continuare la prossima volta.",
       exampleSrc:"A: Freedom of expression is a fundamental right.\nB: Enshrined by the Constitution.\nA: Is it worth it?\nB: Definitely yes, I recommend it.\nA: I would like to know more.\nB: With pleasure, we can continue next time.",
       funFact:"The Italian Constitution guarantees numerous liberties in Articles 13-21: personal freedom, home privacy, correspondence secrecy, freedom of movement, assembly, religion, press, and thought."},

      {type:"fb",
       s:"La {1} su questo tema e chiara: le sentenze precedenti lo confermano.",
       a:["giurisprudenza"],
       opts:["giurisprudenza","costituzione","liberta","legge"],
       hint:"The accumulated body of court decisions that guides how similar cases should be decided in the future.",
       sSrc:"The {1} on this topic is clear: previous rulings confirm it."},

      {type:"teach", trg:"ricorrere", src:"to appeal / to resort to", pos:"verb", gender:null,
       note:"Irregular -ere verb. Io ricorro, tu ricorri.\nPassato prossimo: ho ricorso. 'Il ricorso' (noun) = appeal/recourse.",
       example:"A: Abbiamo deciso di ricorrere in Cassazione.\nB: E l'ultima possibilita.\nA: E anche la mia opinione.\nB: Bene, allora siamo d'accordo su questo punto.\nA: C'e una soluzione realistica?\nB: Non semplice, ma con la collaborazione di tutti e possibile.",
       exampleSrc:"A: We decided to appeal to the Supreme Court.\nB: It is the last possibility.\nA: That is my opinion too.\nB: Good, then we agree on this point.\nA: Is there a realistic solution?\nB: Not simple, but with everyone's collaboration it is possible.",
       funFact:"'Ricorrere in Cassazione' is the final appeal in the Italian system. The Corte di Cassazione does not re-examine facts; it only checks whether the law was applied correctly."},

      {type:"teach", trg:"la pena", src:"the penalty / punishment", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le pene.\n'Pena detentiva' = prison sentence. 'Pena di morte' = death penalty.",
       example:"A: La pena massima per questo reato e sei anni.\nB: Il giudice ha dato quattro anni.\nA: Dove lo hai scoperto?\nB: Su internet, in un articolo molto interessante.\nA: Ne hai discusso con altri colleghi?\nB: Si, e il consenso generale e che serve un intervento strutturale.",
       exampleSrc:"A: The maximum penalty for this crime is six years.\nB: The judge gave four years.\nA: Where did you discover it?\nB: On the internet, in a very interesting article.\nA: Have you discussed it with other colleagues?\nB: Yes, and the general consensus is that structural intervention is needed.",
       funFact:"'Pena' also means 'sorrow' or 'pity' in everyday Italian. 'Mi fa pena' means 'I feel sorry for him/her.' The legal and emotional meanings share the Latin root 'poena' (punishment, suffering)."},

      {type:"teach", trg:"la prova", src:"the evidence / proof", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le prove.\n'Prove insufficienti' = insufficient evidence. Also means 'test/exam.'",
       example:"A: Le prove sono schiaccianti.\nB: L'avvocato non potra negare i fatti.\nA: E un buon segno.\nB: Si, sono ottimista per il futuro.\nA: Cosa si potrebbe fare di diverso?\nB: Investire di piu nella formazione e nella prevenzione.",
       exampleSrc:"A: The evidence is overwhelming.\nB: The lawyer will not be able to deny the facts.\nA: It is a good sign.\nB: Yes, I am optimistic about the future.\nA: What could be done differently?\nB: Invest more in education and prevention.",
       funFact:"In Italian criminal law, the burden of proof lies with the prosecution ('l'onere della prova'). The principle 'in dubio pro reo' (when in doubt, favor the accused) is fundamental."},

      {type:"mc",
       q:"Qual e il contrario di 'diritto' nel senso civico?",
       opts:["Liberta","Dovere","Legge","Reato"],
       ans:"Dovere",
       hint:"If a 'diritto' is something you are entitled to, this word is something you are obligated to do. Rights come with these."},

      {type:"match", pairs:[
        {trg:"diritto", src:"right"},
        {trg:"legge", src:"law (statute)"},
        {trg:"liberta", src:"freedom"},
        {trg:"dovere", src:"duty"},
        {trg:"prova", src:"evidence"}
      ]},

      {type:"fb",
       s:"La {1} di morte e stata abolita in Italia nel 1889.",
       a:["pena"],
       opts:["pena","prova","legge","sentenza"],
       hint:"Combined with 'di morte' it names the ultimate sanction. This noun also means 'sorrow' in everyday Italian.",
       sSrc:"The death {1} was abolished in Italy in 1889."},

      {type:"mc",
       q:"Che significa 'ricorrere in Cassazione'?",
       opts:["Assumere un nuovo avvocato","Andare in tribunale per la prima volta","Fare l'ultimo appello alla Corte Suprema","Raccogliere nuove prove"],
       ans:"Fare l'ultimo appello alla Corte Suprema",
       hint:"The C... di Cassazione is the highest court. 'Ricorrere' means to appeal. This is the final step in the judicial process."}
    ]},

    // ─── Lesson 3: Crimini e indagini ───
    {id:"itv2_u26l3", title:"Crimini e indagini", icon:"🔍", xp:15, board:true, steps:[
      {type:"intro", title:"Crimini e indagini",
       desc:"Learn vocabulary for crimes, investigations, and law enforcement. Understand the terms used in crime reporting and detective fiction.",
       goals:["Describe different types of crimes","Discuss police investigations and procedures","Understand crime-related news vocabulary"]},

      {type:"teach", trg:"l'indagine", src:"the investigation", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le indagini.\n'Indagine penale' = criminal investigation. 'Indagine di mercato' = market research.",
       example:"A: Le indagini sono ancora in corso.\nB: La polizia sta cercando nuove prove.\nA: Che bello! Congratulazioni!\nB: Grazie mille, sono davvero contento.\nA: E un problema anche in altri settori?\nB: Si, purtroppo e trasversale e riguarda molti ambiti.",
       exampleSrc:"A: The investigation is still ongoing.\nB: The police are looking for new evidence.\nA: How wonderful! Congratulations!\nB: Thank you so much, I am really happy.\nA: Is it a problem in other sectors too?\nB: Yes, unfortunately it cuts across many areas.",
       funFact:"In Italy, criminal investigations are led by the 'pubblico ministero' (public prosecutor), not the police. The PM directs the investigation and decides whether to bring charges."},

      {type:"teach", trg:"il sospetto", src:"the suspect / suspicion", pos:"noun", gender:"m",
       note:"Masculine noun. Dual meaning: person and feeling.\n'Un sospetto' = a suspect. 'Ho un sospetto' = I have a suspicion.",
       example:"A: Il principale sospetto e stato arrestato.\nB: Aveva un movente chiaro.\nA: C'e qualcosa che posso fare?\nB: Grazie, per adesso va tutto bene.\nA: Qual e l'opinione degli esperti?\nB: Ci sono posizioni diverse, ma la maggioranza concorda su un punto.",
       exampleSrc:"A: The main suspect was arrested.\nB: He had a clear motive.\nA: Is there anything I can do?\nB: Thanks, for now everything is fine.\nA: What is the experts' opinion?\nB: There are different positions, but the majority agrees on one point.",
       funFact:"Italian legal terminology uses 'indagato' (person under investigation) before formal charges and 'imputato' (defendant) after. 'Sospetto' is the informal, non-legal term."},

      {type:"teach", trg:"la testimonianza", src:"the testimony / witness statement", pos:"noun", gender:"f",
       note:"Feminine noun. 'Rendere testimonianza' = to give testimony.\n'Il/la testimone' = the witness.",
       example:"A: La sua testimonianza e stata decisiva.\nB: Ha descritto tutto nei dettagli.\nA: Quando e successo?\nB: La settimana scorsa, di giovedi.\nA: E un fenomeno recente?\nB: Non proprio, ha radici che risalgono a decenni fa.",
       exampleSrc:"A: His testimony was decisive.\nB: He described everything in detail.\nA: When did it happen?\nB: Last week, on Thursday.\nA: Is it a recent phenomenon?\nB: Not exactly, it has roots that go back decades.",
       funFact:"In Italian courts, witnesses swear 'di dire la verita, tutta la verita, nient'altro che la verita' (to tell the truth, the whole truth, nothing but the truth), the same formula used in many legal systems worldwide."},

      {type:"teach", trg:"il furto", src:"the theft", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i furti.\n'Furto con scasso' = burglary (theft with break-in). 'Furto d'identita' = identity theft.",
       example:"A: C'e stato un furto nel negozio.\nB: Hanno rubato gioielli per migliaia di euro.\nA: Chi altro lo sa?\nB: Per adesso solo noi due e la famiglia.\nA: Possiamo approfondire questo aspetto?\nB: Certo, e un tema che merita una discussione piu ampia.",
       exampleSrc:"A: There was a theft at the shop.\nB: They stole jewelry worth thousands of euros.\nA: Who else knows?\nB: For now just the two of us and the family.\nA: Can we explore this aspect further?\nB: Of course, it is a topic that deserves a broader discussion.",
       funFact:"Italy distinguishes between 'furto' (theft, taking without violence), 'rapina' (robbery, with violence or threat), and 'truffa' (fraud, through deception). Each carries different penalties."},

      {type:"teach", trg:"la frode", src:"the fraud", pos:"noun", gender:"f",
       note:"Feminine noun. 'Frode fiscale' = tax fraud.\n'Frode informatica' = cyber fraud.",
       example:"A: E stato accusato di frode fiscale.\nB: Rischia una condanna pesante.\nA: Lo faresti di nuovo?\nB: Assolutamente si, senza esitazione.\nA: C'e qualcosa che mi sfugge?\nB: Forse il fatto che il contesto storico e molto complesso.",
       exampleSrc:"A: He was accused of tax fraud.\nB: He faces a heavy sentence.\nA: Would you do it again?\nB: Absolutely yes, without hesitation.\nA: Am I missing something?\nB: Perhaps the fact that the historical context is very complex.",
       funFact:"Tax evasion ('evasione fiscale') is a major issue in Italy, with estimates suggesting it costs the state over 100 billion euros annually. Fighting frode fiscale is a constant government priority."},
{type:"match",pairs:[{trg:"il sospetto",src:"the suspect / suspicion"},{trg:"la testimonianza",src:"the testimony / witness statement"},{trg:"il furto",src:"the theft"},{trg:"la frode",src:"the fraud"}]},

      {type:"mc",
       q:"Come si chiama l'atto di rubare senza violenza?",
       opts:["Furto","Rapina","Frode","Reato"],
       ans:"Furto",
       hint:"Taking someone's property without using force or threats. Different from robbery, which involves violence."},

      {type:"teach", trg:"l'arresto", src:"the arrest", pos:"noun", gender:"m",
       note:"Masculine noun. 'Essere in stato di arresto' = to be under arrest.\n'Mandato di arresto' = arrest warrant.",
       example:"A: L'arresto e avvenuto stamattina alle sei.\nB: Lo hanno preso a casa sua.\nA: E costato molto?\nB: Meno di quanto pensassi, per fortuna.\nA: Qual e la tua posizione in merito?\nB: Personalmente credo che serva un approccio piu equilibrato.",
       exampleSrc:"A: The arrest took place this morning at six.\nB: They caught him at his home.\nA: Did it cost a lot?\nB: Less than I thought, fortunately.\nA: What is your position on the matter?\nB: Personally I believe a more balanced approach is needed.",
       funFact:"In Italy, a person can be held for up to 48 hours before a judge must validate the arrest. The judge then has another 48 hours to decide on pre-trial detention or release."},

      {type:"teach", trg:"il carcere", src:"the prison / jail", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: le carceri (irregular, feminine plural).\n'Andare in carcere' = to go to prison.",
       example:"A: E stato condannato a tre anni di carcere.\nB: Scontera la pena a Rebibbia.\nA: Come hai saputo?\nB: Me l'ha detto un amico ieri sera.\nA: Credi che la situazione migliorera?\nB: Dipende dalle scelte che faremo nei prossimi mesi.",
       exampleSrc:"A: He was sentenced to three years in prison.\nB: He will serve the sentence at Rebibbia.\nA: How did you find out?\nB: A friend told me last night.\nA: Do you think the situation will improve?\nB: It depends on the choices we make in the coming months.",
       funFact:"Italian prisons are chronically overcrowded, often at 120% capacity. The Corte Europea dei Diritti dell'Uomo has fined Italy multiple times for inhumane conditions. 'Carcere' becomes feminine in the plural: 'le carceri.'"},

      {type:"teach", trg:"la vittima", src:"the victim", pos:"noun", gender:"f",
       note:"Feminine noun, used for all genders.\nPlural: le vittime. 'La vittima del reato' = the victim of the crime.",
       example:"A: La vittima ha sporto denuncia.\nB: Le indagini partiranno subito.\nA: Cosa ne pensi?\nB: Secondo me e un'ottima scelta.\nA: Come si confronta con altri paesi?\nB: L'Italia ha le sue specificita, ma il trend e simile in Europa.",
       exampleSrc:"A: The victim filed a complaint.\nB: The investigation will start immediately.\nA: What do you think?\nB: In my opinion it is an excellent choice.\nA: How does it compare with other countries?\nB: Italy has its own specificities, but the trend is similar in Europe.",
       funFact:"In Italian law, the victim ('persona offesa') has significant rights during the trial, including the ability to join the prosecution as a 'parte civile' (civil party) to claim damages directly."},

      {type:"fb",
       s:"Il principale {1} e stato identificato grazie alle telecamere.",
       a:["sospetto"],
       opts:["sospetto","giudice","avvocato","testimone"],
       hint:"The person believed to have committed the crime. Identified but not yet formally charged.",
       sSrc:"The main {1} was identified thanks to the security cameras."},

      {type:"teach", trg:"la denuncia", src:"the complaint / report (to police)", pos:"noun", gender:"f",
       note:"Feminine noun. 'Sporgere denuncia' = to file a complaint/report.\n'Denunciare' (verb) = to report to authorities.",
       example:"A: Hai sporto denuncia alla polizia?\nB: Si, subito dopo il furto.\nA: Pensi di continuare?\nB: Si, mi piace molto e voglio migliorare.\nA: Quali sono le conseguenze a lungo termine?\nB: Difficile dirlo, ma il cambiamento sara significativo.",
       exampleSrc:"A: Did you file a report with the police?\nB: Yes, right after the theft.\nA: Do you plan to continue?\nB: Yes, I like it a lot and I want to improve.\nA: What are the long-term consequences?\nB: Hard to say, but the change will be significant.",
       funFact:"In Italy, many crimes require the victim to file a 'denuncia' before the police can investigate. For some serious crimes ('reati procedibili d'ufficio'), police act automatically without waiting for a complaint."},

      {type:"teach", trg:"il movente", src:"the motive", pos:"noun", gender:"m",
       note:"Masculine noun. The reason behind a crime.\n'Movente economico' = financial motive.",
       example:"A: Qual era il movente dell'omicidio?\nB: Probabilmente la gelosia.\nA: E stato difficile?\nB: Un po', ma alla fine ne e valsa la pena.\nA: Dobbiamo restare aggiornati su questo tema.\nB: Assolutamente, e in continua evoluzione.",
       exampleSrc:"A: What was the motive for the murder?\nB: Probably jealousy.\nA: Was it difficult?\nB: A little, but in the end it was worth it.\nA: We need to stay updated on this topic.\nB: Absolutely, it is constantly evolving.",
       funFact:"Italian crime fiction ('il giallo,' named after the yellow covers of Mondadori mystery novels) is a beloved genre. Classic gialli always revolve around uncovering the movente."},

      {type:"teach", trg:"l'alibi", src:"the alibi", pos:"noun", gender:"m",
       note:"Masculine noun. Invariable (no plural change).\nFrom Latin 'alibi' = elsewhere.",
       example:"A: L'accusato ha un alibi solido.\nB: Tre testimoni confermano che era altrove.\nA: E la prima volta?\nB: No, l'ho fatto anche l'anno scorso.\nA: Come vedi il futuro di questo ambito?\nB: Con cautela ottimistica, se si fanno le scelte giuste.",
       exampleSrc:"A: The accused has a solid alibi.\nB: Three witnesses confirm he was elsewhere.\nA: Is it the first time?\nB: No, I did it last year too.\nA: How do you see the future of this field?\nB: With cautious optimism, if the right choices are made.",
       funFact:"'Alibi' is one of many Latin legal terms that entered all European languages unchanged. In Latin it simply means 'in another place.' Italian courts accept alibi evidence at any stage of proceedings."},

      {type:"mc",
       q:"Come si chiama il genere letterario italiano di storie poliziesche?",
       opts:["Il rosso","Il giallo","Il nero","Il bianco"],
       ans:"Il giallo",
       hint:"Named after the color of famous mystery novel covers published by Mondadori. A color that means 'yellow.'"},

      {type:"match", pairs:[
        {trg:"indagine", src:"investigation"},
        {trg:"testimonianza", src:"testimony"},
        {trg:"furto", src:"theft"},
        {trg:"arresto", src:"arrest"},
        {trg:"denuncia", src:"police report"}
      ,{trg:"condannare",src:"to convict / to sentence"}]},

      {type:"fb",
       s:"La {1} ha sporto denuncia alla polizia dopo la rapina.",
       a:["vittima"],
       opts:["vittima","frode","denuncia","indagine"],
       hint:"The person who suffered from the crime. The one who goes to the police to report what happened.",
       sSrc:"The {1} filed a complaint with the police after the robbery."},

      {type:"mc",
       q:"Qual e la differenza tra 'furto' e 'rapina'?",
       opts:["La rapina riguarda solo le banche","Il furto e piu grave della rapina","La rapina implica violenza o minaccia, il furto no","Non c'e differenza"],
       ans:"La rapina implica violenza o minaccia, il furto no",
       hint:"One involves taking property without confrontation. The other involves force or threats against the victim."}
    ]}
  ,
  BATCH8_L1,
  BATCH7_L1,
  BATCH6_L1,
  BATCH5_L02,
  BATCH5_L01,
  BATCH3_L02,
  BATCH3_L01,
  EXP_L4,
  EXP_L5,
  EXP_L6
, COVERAGE_U26]
};

export default UNIT_26;
