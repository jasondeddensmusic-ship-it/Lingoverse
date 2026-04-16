// Italian V2 Unit 23. La politica e la societa (Politics & Society) (B1.4)
import BATCH5_L02 from './_batch5_u23_L02.js';
import BATCH5_L01 from './_batch5_u23_L01.js';
import BATCH3_L02 from './_batch3_u23_L02.js';
import BATCH3_L01 from './_batch3_u23_L01.js';
import EXP_L4 from './_temp_u23_expand_L01.js';import EXP_L5 from './_temp_u23_expand_L02.js';import EXP_L6 from './_temp_u23_expand_L03.js';
// CILS/CELI B1 aligned. Government, civic life, media vocabulary.

const UNIT_23 = {
  n:23, lang:"it", srcLang:"en", track:"v2",
  title:"La politica e la societa", sub:"Politics & Society",
  icon:"🏛️", level:"B1.4", color:"#7B5EE8",
  lessons:[
    {id:"itv2_u23l1", title:"Il governo", icon:"⚖️", xp:15, board:true, steps:[
      {type:"intro", title:"Il governo",
       desc:"Learn the vocabulary of Italian politics and government. Italy has a complex parliamentary system with a fascinating political culture that shapes everyday conversation.",
       goals:["Name government institutions and roles","Discuss elections and political parties","Understand basic Italian political vocabulary"]},

      {type:"teach", trg:"il governo", src:"the government", pos:"noun", gender:"m",
       note:"Masculine. From 'governare' (to govern).\n'Il governo italiano' = the Italian government.",
       example:"A: Il governo ha approvato la nuova legge.\nB: Finalmente! L'aspettavamo da mesi.",
       exampleSrc:"A: The government approved the new law.\nB: Finally! We had been waiting for months.",
       funFact:"Italy has had over 70 governments since 1946, making it one of the most politically dynamic democracies in Europe. The frequent changes reflect the multi-party coalition system. Italians joke that their government changes more often than the seasons."},

      {type:"teach", trg:"il parlamento", src:"the parliament", pos:"noun", gender:"m",
       note:"Masculine. From 'parlare' (to speak).\nItaly has two chambers: Camera dei Deputati and Senato.",
       example:"A: Il parlamento vota oggi sulla riforma.\nB: Penso che passi con una maggioranza stretta.",
       exampleSrc:"A: Parliament votes today on the reform.\nB: I think it will pass with a narrow majority.",
       funFact:"'Parlamento' comes from 'parlare' (to speak), literally 'a place for speaking.' Italy has a bicameral parliament: the Camera dei Deputati (Chamber of Deputies, 400 members) and the Senato della Repubblica (Senate, 200 members). Both chambers must approve laws."},

      {type:"teach", trg:"l'elezione", src:"the election", pos:"noun", gender:"f",
       note:"Feminine. Plural: le elezioni. From Latin 'electio' (choice).\n'Le elezioni politiche' = general elections.",
       example:"A: Quando sono le prossime elezioni?\nB: Le elezioni sono a marzo.",
       exampleSrc:"A: When are the next elections?\nB: The elections are in March.",
       funFact:"Italian elections often produce coalition governments because no single party wins a majority. Voter turnout in Italy is historically high (above 70%). Election day is always a Sunday, and many Italians treat voting as both a civic duty and a social ritual."},

      {type:"teach", trg:"il partito", src:"the (political) party", pos:"noun", gender:"m",
       note:"Masculine. From Latin 'partitus' (divided).\n'Partito politico' = political party. Many in Italy.",
       example:"A: A quale partito appartieni?\nB: Preferisco non parlare di politica.",
       exampleSrc:"A: Which party do you belong to?\nB: I prefer not to talk about politics.",
       funFact:"Italy has a rich tradition of political parties, from the historic Democrazia Cristiana to modern movements. Parties change names and merge frequently. Discussing politics is common in Italy, but asking directly about someone's party can be considered invasive. 'Non parlo di politica' is a common deflection."},

      {type:"teach", trg:"il candidato", src:"the candidate", pos:"noun", gender:"m",
       note:"Masculine. Feminine: la candidata. From Latin 'candidatus' (white-robed).\n'Candidarsi' = to run for office.",
       example:"A: Chi e il candidato migliore?\nB: Dipende dalle tue priorita.",
       exampleSrc:"A: Who is the best candidate?\nB: It depends on your priorities.",
       funFact:"'Candidato' comes from Latin 'candidus' (white, bright). Roman candidates for office wore bright white togas to stand out in crowds. The word traveled through Italian into English and many other languages, preserving this ancient Roman political tradition."},

      {type:"teach", trg:"la legge", src:"the law", pos:"noun", gender:"f",
       note:"Feminine. From Latin 'lex, legis' (law).\n'Approvare una legge' = to pass a law.",
       example:"A: La nuova legge entra in vigore domani.\nB: Riguarda l'ambiente, giusto?",
       exampleSrc:"A: The new law comes into effect tomorrow.\nB: It concerns the environment, right?",
       funFact:"Italy's legal system is based on civil law (codified laws), unlike the common law system used in English-speaking countries. The Italian Constitution (1948) is considered one of the most progressive in Europe. 'La legge e uguale per tutti' (The law is equal for everyone) is inscribed in every Italian courtroom."},

      {type:"teach", trg:"votare", src:"to vote", pos:"verb", gender:null,
       note:"Regular -are verb. 'Votare per' = to vote for.\n'Andare a votare' = to go vote.",
       example:"A: Hai votato alle ultime elezioni?\nB: Si, voto sempre. E un dovere.",
       exampleSrc:"A: Did you vote in the last elections?\nB: Yes, I always vote. It is a duty.",
       funFact:"The Italian Constitution states that voting is a 'civic duty' (dovere civico), though it is not legally mandatory. Until 1993, not voting could be noted on your 'certificato di buona condotta' (good conduct certificate). Italians vote by marking a symbol on paper ballots with a special pencil."},

      // Quiz steps
      {type:"mc", q:"How many governments has Italy had since 1946?",
       opts:["Over 70","About 20","Exactly 50","Less than 10"],
       ans:"Over 70",
       hint:"Italy's multi-party coalition system leads to frequent changes. Italians are known for their dynamic political landscape."},

      {type:"fb", s:"Il {1} vota oggi sulla riforma.",
       a:["parlamento"],
       opts:["parlamento","governo","partito","candidato"],
       hint:"The place where elected representatives debate and vote on laws. From 'parlare' (to speak). Italy has two chambers.",
       sSrc:"{1} votes today on the reform."},

      {type:"match", pairs:[
        {trg:"il governo", src:"the government"},
        {trg:"il parlamento", src:"the parliament"},
        {trg:"l'elezione", src:"the election"},
        {trg:"il partito", src:"the political party"},
        {trg:"la legge", src:"the law"}
      ]},

      {type:"mc", q:"Where does the word 'candidato' come from?",
       opts:["Italian 'candela' (candle) for a bright personality","Latin 'candidus' (white): Roman candidates wore white togas","Greek 'kandidatos' (chosen one) in city assemblies","French 'candidat' (applicant) borrowed in medieval times"],
       ans:"Latin 'candidus' (white): Roman candidates wore white togas",
       hint:"In ancient Rome, people running for office w... bright w... to stand out. The word preserves this tradition."},

      {type:"fb", s:"La nuova {1} entra in vigore domani.",
       a:["legge"],
       opts:["legge","elezione","partito","governo"],
       hint:"A rule approved by parliament that everyone must follow. From Latin 'lex.' Italy's system is based on civil law.",
       sSrc:"The new {1} comes into effect tomorrow."},

      {type:"mc", q:"What does the Italian Constitution call voting?",
       opts:["A privilege earned by tax payers","A guaranteed right only, nothing more","A civic duty (dovere civico)","A legal obligation with financial fines"],
       ans:"A civic duty (dovere civico)",
       hint:"While not legally mandatory today, the Constitution frames voting as a d.... Historically, not voting could be noted on conduct certificates."},

      {type:"fb", s:"Hai {1} alle ultime elezioni?",
       a:["votato"],
       opts:["votato","parlato","governato","candidato"],
       hint:"Did you cast your ballot? This regular -are verb means to cast a vote. Italians use paper ballots and a special pencil.",
       sSrc:"Did you {1} in the last elections?"},

      {type:"mc", q:"What is inscribed in every Italian courtroom?",
       opts:["Verita e giustizia (Truth and justice)","Giustizia per tutti (Justice for all)","In nome del popolo (In the name of the people)","La legge e uguale per tutti (The law is equal for everyone)"],
       ans:"La legge e uguale per tutti (The law is equal for everyone)",
       hint:"This constitutional phrase is displayed in all Italian courts. It establishes that no one's status shields them from justice."}
    ]},

    {id:"itv2_u23l2", title:"La societa civile", icon:"🤝", xp:15, board:true, steps:[
      {type:"intro", title:"La societa civile",
       desc:"Learn vocabulary about society, rights, and civic life in Italy. These words let you discuss social issues, equality, and community in Italian.",
       goals:["Discuss citizens' rights and duties","Talk about social issues","Express opinions about society and equality"]},

      {type:"teach", trg:"il cittadino", src:"the citizen", pos:"noun", gender:"m",
       note:"Masculine. Feminine: la cittadina. From 'citta' (city).\n'Cittadinanza' = citizenship.",
       example:"A: Ogni cittadino ha diritto al voto.\nB: E anche il dovere di informarsi.",
       exampleSrc:"A: Every citizen has the right to vote.\nB: And also the duty to inform themselves.",
       funFact:"'Cittadino' comes from 'citta' (city), reflecting the ancient concept that citizenship belonged to city dwellers. Roman 'civis' (citizen) is the root of 'civilta' (civilization) and 'civile' (civil). In Italy, citizenship can be acquired by birth, marriage, or residency."},

      {type:"teach", trg:"il diritto", src:"the right / law (as a field)", pos:"noun", gender:"m",
       note:"Masculine. 'Diritto al lavoro' = right to work.\n'Studiare diritto' = to study law. From Latin 'directus' (straight).",
       example:"A: Tutti hanno il diritto all'istruzione.\nB: E un diritto fondamentale.",
       exampleSrc:"A: Everyone has the right to education.\nB: It is a fundamental right.",
       funFact:"'Diritto' means both 'right' (a legal entitlement) and 'law' (the academic field). 'Studiare diritto' = to study law. 'Avere diritto a' = to have the right to. The Italian Constitution lists rights in Articles 2-54, covering everything from freedom of speech to the right to health care."},

      {type:"teach", trg:"il dovere", src:"the duty / obligation", pos:"noun", gender:"m",
       note:"Masculine. Also a verb: 'dovere' = must/to have to.\n'Diritti e doveri' = rights and duties.",
       example:"A: Pagare le tasse e un dovere di ogni cittadino.\nB: Lo so, ma non mi piace!",
       exampleSrc:"A: Paying taxes is a duty of every citizen.\nB: I know, but I do not like it!",
       funFact:"The Italian Constitution pairs rights with duties ('doveri'). Article 53 states the duty to pay taxes based on ability. Article 52 states the duty to defend the nation. The pairing of 'diritti e doveri' (rights and duties) is a fundamental concept in Italian civic education."},

      {type:"teach", trg:"l'uguaglianza", src:"the equality", pos:"noun", gender:"f",
       note:"Feminine. From 'uguale' (equal). Article 3 of the Italian Constitution.\n'Uguaglianza di genere' = gender equality.",
       example:"A: L'uguaglianza e un valore fondamentale.\nB: Purtroppo non e ancora una realta per tutti.",
       exampleSrc:"A: Equality is a fundamental value.\nB: Unfortunately it is not yet a reality for everyone.",
       funFact:"Article 3 of the Italian Constitution is one of its most quoted passages: 'All citizens have equal social dignity and are equal before the law, without distinction of sex, race, language, religion, political opinions, personal and social conditions.' It also mandates the state to remove obstacles to real equality."},

      {type:"teach", trg:"l'immigrazione", src:"the immigration", pos:"noun", gender:"f",
       note:"Feminine. From 'immigrare' (to immigrate).\n'Politica sull'immigrazione' = immigration policy.",
       example:"A: L'immigrazione e un tema importante in Italia.\nB: Si, ne parlano ogni giorno al telegiornale.",
       exampleSrc:"A: Immigration is an important topic in Italy.\nB: Yes, they talk about it every day on the news.",
       funFact:"Italy went from being a country of emigration (millions left for America and Argentina in the 1800s-1900s) to a country of immigration. This shift happened mainly after 1990. Italian words like 'extracomunitario' (non-EU citizen) and 'permesso di soggiorno' (residence permit) appear frequently in public debate."},

      {type:"teach", trg:"la liberta", src:"the freedom / liberty", pos:"noun", gender:"f",
       note:"Feminine. Invariable: le liberta. From Latin 'libertas.'\n'Liberta di parola' = freedom of speech.",
       example:"A: La liberta di espressione e un diritto.\nB: Ma ha anche dei limiti.",
       exampleSrc:"A: Freedom of expression is a right.\nB: But it also has limits.",
       funFact:"'Liberta' is one of the defining words of Italian history. Italy's unification movement (Risorgimento) was driven by the idea of freedom from foreign rule. The national anthem, 'Fratelli d'Italia,' celebrates the newly won liberty. 'Liberta' appears prominently throughout the Italian Constitution."},

      {type:"teach", trg:"la manifestazione", src:"the demonstration / protest", pos:"noun", gender:"f",
       note:"Feminine. From 'manifestare' (to demonstrate).\nAlso means 'event' in a positive sense.",
       example:"A: C'e una manifestazione in piazza domani.\nB: Per quale causa?",
       exampleSrc:"A: There is a demonstration in the square tomorrow.\nB: For what cause?",
       funFact:"Italy has a strong tradition of public protest. 'Sciopero' (strike) and 'manifestazione' are part of civic life. Italian workers strike more frequently than most Europeans. Transport strikes, in particular, are so common that websites track them: 'scioperi previsti' (scheduled strikes) is a phrase every Italian knows."},

      // Quiz steps
      {type:"mc", q:"What does 'il cittadino' come from?",
       opts:["Citta (city), reflecting ancient city-state citizenship","Citare (to cite) in legal documents","Civile (civil) as an adjective form","Cittadella (citadel) the small fortified city"],
       ans:"Citta (city), reflecting ancient city-state citizenship",
       hint:"Roman c... was originally tied to the c.... 'Civis' (citizen) gave us 'civilization' and 'civil.'"},

      {type:"fb", s:"Tutti hanno il {1} all'istruzione.",
       a:["diritto"],
       opts:["diritto","dovere","voto","governo"],
       hint:"A legal entitlement guaranteed by the Constitution. This word also means 'law' as an academic field.",
       sSrc:"Everyone has the {1} to education."},

      {type:"match", pairs:[
        {trg:"il cittadino", src:"the citizen"},
        {trg:"il diritto", src:"the right"},
        {trg:"il dovere", src:"the duty"},
        {trg:"l'uguaglianza", src:"equality"},
        {trg:"la liberta", src:"freedom"}
      ]},

      {type:"mc", q:"What does Article 3 of the Italian Constitution guarantee?",
       opts:["Freedom of religion as the sole focus","Equality without distinction of sex, race, language, religion","The right to bear arms and self-defense","Free public education for all Italian children"],
       ans:"Equality without distinction of sex, race, language, religion",
       hint:"One of the most quoted constitutional articles. It also mandates the state to remove real obstacles to e...."},

      {type:"fb", s:"L'{1} e un tema importante in Italia.",
       a:["immigrazione"],
       opts:["immigrazione","uguaglianza","liberta","manifestazione"],
       hint:"Italy shifted from a country of emigration to one receiving newcomers. This topic dominates Italian news.",
       sSrc:"{1} is an important topic in Italy."},

      {type:"mc", q:"What is a 'manifestazione' in civic life?",
       opts:["A formal court hearing or trial","A closed session government meeting","A demonstration or public protest","A scheduled national election"],
       ans:"A demonstration or public protest",
       hint:"Italy has a strong tradition of p... p.... From 'manifestare' (to demonstrate). Often held in the main piazza."},

      {type:"fb", s:"C'e una {1} in piazza domani.",
       a:["manifestazione"],
       opts:["manifestazione","elezione","legge","cittadinanza"],
       hint:"A public gathering to protest or support a cause. Italy has a long tradition of these, along with strikes ('scioperi').",
       sSrc:"There is a {1} in the square tomorrow."},

      {type:"mc", q:"How did Italy's role change regarding migration?",
       opts:["Italy has only ever sent emigrants abroad","It has always been a country receiving new arrivals","Italians have never emigrated in large numbers","From a country of emigration to one of immigration"],
       ans:"From a country of emigration to one of immigration",
       hint:"Millions of Italians emigrated to the Americas in the 1800s-1900s. The shift to receiving immigrants happened mainly after 1990."}
    ]},

    {id:"itv2_u23l3", title:"I media e l'opinione", icon:"📰", xp:15, board:true, steps:[
      {type:"intro", title:"I media e l'opinione",
       desc:"Learn how Italians discuss media, news, and public opinion. The ability to talk about journalism and information is essential for engaging with Italian society.",
       goals:["Discuss news sources and journalism","Express and discuss public opinion","Talk about media influence on society"]},

      {type:"teach", trg:"la notizia", src:"the news item / piece of news", pos:"noun", gender:"f",
       note:"Feminine. Plural: le notizie. Countable in Italian.\n'Le ultime notizie' = the latest news.",
       example:"A: Hai sentito la notizia?\nB: Quale? Non ho guardato il telegiornale.",
       exampleSrc:"A: Did you hear the news?\nB: Which one? I did not watch the TV news.",
       funFact:"Unlike English 'news' (uncountable), Italian 'notizia' is countable: 'una notizia' (one piece of news), 'due notizie' (two pieces). 'Notizia bomba' (bomb news) means a sensational piece of news. 'Fare notizia' means 'to make the news' or be newsworthy."},

      {type:"teach", trg:"il giornalista", src:"the journalist", pos:"noun", gender:"m",
       note:"Masculine/feminine: il/la giornalista. Invariable form.\n-ista nouns work for both genders.",
       example:"A: La giornalista ha fatto un'inchiesta importante.\nB: Si, il suo articolo ha avuto un grande impatto.",
       exampleSrc:"A: The journalist did an important investigation.\nB: Yes, her article had a great impact.",
       funFact:"Italian journalists must pass a state exam and register with the Ordine dei Giornalisti. There are two tiers: 'professionista' (full-time) and 'pubblicista' (part-time). This regulation is unusual in Europe and reflects Italy's view of journalism as a professional discipline like law or medicine."},

      {type:"teach", trg:"l'intervista", src:"the interview", pos:"noun", gender:"f",
       note:"Feminine. 'Fare un'intervista' = to conduct an interview.\n'Intervistare' = to interview (someone).",
       example:"A: L'intervista al ministro e stata molto diretta.\nB: Il giornalista ha fatto domande difficili.",
       exampleSrc:"A: The interview with the minister was very direct.\nB: The journalist asked difficult questions.",
       funFact:"Italian political interviews tend to be longer and more confrontational than in many other countries. Politicians and journalists often engage in heated exchanges on live television. The tradition of the 'talk show politico' (political talk show) is a staple of Italian prime-time TV."},

      {type:"teach", trg:"l'opinione pubblica", src:"the public opinion", pos:"noun", gender:"f",
       note:"Feminine. 'Opinione' from Latin 'opinio' (belief).\n'Sondaggio d'opinione' = opinion poll.",
       example:"A: L'opinione pubblica e cambiata.\nB: Si, adesso la maggioranza e a favore.",
       exampleSrc:"A: Public opinion has changed.\nB: Yes, now the majority is in favor.",
       funFact:"'Opinione pubblica' plays a huge role in Italian politics because coalition governments are sensitive to shifts in public mood. Political talk shows shape opinion, and opinion polls ('sondaggi') are published constantly. Two weeks before elections, polls are banned to prevent last-minute influence."},

      {type:"teach", trg:"la stampa", src:"the press / printing", pos:"noun", gender:"f",
       note:"Feminine. From 'stampare' (to print).\n'La liberta di stampa' = freedom of the press.",
       example:"A: La stampa ha un ruolo importante nella democrazia.\nB: Senza dubbio. Informa i cittadini.",
       exampleSrc:"A: The press has an important role in democracy.\nB: Without a doubt. It informs the citizens.",
       funFact:"'La Stampa' is also the name of one of Italy's oldest and most respected newspapers, based in Turin since 1867. Italy's press freedom ranking has fluctuated over the years. The concentration of media ownership (particularly when a media mogul served as Prime Minister) sparked long debates about press independence."},

      {type:"teach", trg:"il sondaggio", src:"the poll / survey", pos:"noun", gender:"m",
       note:"Masculine. From French 'sondage.' 'Sondaggio d'opinione' = opinion poll.\n'Secondo i sondaggi' = according to the polls.",
       example:"A: Secondo i sondaggi, il partito e al 30%.\nB: I sondaggi non sono sempre precisi.",
       exampleSrc:"A: According to the polls, the party is at 30%.\nB: Polls are not always accurate.",
       funFact:"Italian law prohibits publishing opinion polls in the two weeks before an election ('periodo di silenzio elettorale'). This blackout period aims to let voters decide without last-minute poll pressure. However, unofficial 'exit polls' on election night are still eagerly awaited."},

      {type:"teach", trg:"informarsi", src:"to inform oneself / to stay informed", pos:"verb", gender:null,
       note:"Reflexive -are verb. 'Informarsi su' = to find out about.\n'E importante informarsi' = It is important to stay informed.",
       example:"A: Come ti informi sulle notizie?\nB: Leggo il giornale e seguo i social.",
       exampleSrc:"A: How do you stay informed about the news?\nB: I read the newspaper and follow social media.",
       funFact:"'Informarsi' is reflexive because you are informing yourself. 'Informare' (non-reflexive) means to inform someone else. Italian media literacy discussions often stress the difference between 'informarsi' (actively seeking reliable information) and passively consuming content on social media."},

      // Quiz steps
      {type:"mc", q:"What makes Italian 'notizia' different from English 'news'?",
       opts:["It is countable: una notizia, due notizie","It is always used only in the plural form of the noun","It is completely uncountable just like in English","It only refers to positive, upbeat good news"],
       ans:"It is countable: una notizia, due notizie",
       hint:"In English, 'news' cannot take a number. In Italian, you can count individual pieces of news."},

      {type:"fb", s:"L'{1} pubblica e cambiata.",
       a:["opinione"],
       opts:["opinione","intervista","notizia","stampa"],
       hint:"The collective view of the population on an issue. From Latin 'opinio' (belief). Polls track this constantly.",
       sSrc:"Public {1} has changed."},

      {type:"match", pairs:[
        {trg:"la notizia", src:"the news item"},
        {trg:"il giornalista", src:"the journalist"},
        {trg:"l'intervista", src:"the interview"},
        {trg:"la stampa", src:"the press"},
        {trg:"il sondaggio", src:"the poll"}
      ]},

      {type:"mc", q:"What happens to opinion polls before Italian elections?",
       opts:["They are published more frequently than usual","They are banned for two weeks before voting","They are only permitted to be shown on TV","Nothing changes at all in Italy"],
       ans:"They are banned for two weeks before voting",
       hint:"The 'periodo di silenzio elettorale' prevents last-minute poll pressure on voters."},

      {type:"fb", s:"Come ti {1} sulle notizie?",
       a:["informi"],
       opts:["informi","intervisti","stampi","voti"],
       hint:"How do you stay up to date? This reflexive verb means to inform oneself. The non-reflexive form means to inform others.",
       sSrc:"How do you {1} about the news?"},

      {type:"mc", q:"Why must Italian journalists register with the Ordine dei Giornalisti?",
       opts:["Registration is completely optional in Italy","It is only required for broadcast TV journalists","Italy treats journalism as a regulated profession like law","To pay a separate professional income tax"],
       ans:"Italy treats journalism as a regulated profession like law",
       hint:"There is a state exam and a two-tier register: full-time ('iscritto come titolare') and part-time ('collaboratore'). Similar to how doctors and notaries are certified."},

      {type:"fb", s:"Secondo i {1}, il partito e al 30%.",
       a:["sondaggi"],
       opts:["sondaggi","giornali","interviste","notizie"],
       hint:"These measure public opinion through structured questions. Banned two weeks before elections in Italy.",
       sSrc:"According to the {1}, the party is at 30%."},

      {type:"mc", q:"What is 'la stampa' also known as in Italy?",
       opts:["A government press office","A traditional type of pasta shape","An old manual printing technique","The name of a major Turin newspaper (since 1867)"],
       ans:"The name of a major Turin newspaper (since 1867)",
       hint:"One of Italy's oldest and most respected dailies, founded in Piedmont's capital, shares its masthead with the Italian word for 'the press.'"}
    ]}
  ]
};
export default UNIT_23;
