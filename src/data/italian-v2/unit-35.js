// Italian V2 Unit 35. L'innovazione (Innovation & Future)
import BATCH5_L02 from './_batch5_u35_L02.js';
import BATCH5_L01 from './_batch5_u35_L01.js';
import BATCH3_L02 from './_batch3_u35_L02.js';
import BATCH3_L01 from './_batch3_u35_L01.js';
// Level: B2.4. CILS/CELI B2 aligned.

const UNIT_35 = {
  n:35, lang:"it", srcLang:"en", track:"v2",
  title:"L'innovazione", sub:"Innovation & Future",
  icon:"🚀", level:"B2.4", color:"#7B5EE8",
  lessons:[
    // ─── Lesson 1: Tecnologia e intelligenza artificiale ───
    {id:"itv2_u35l1", title:"Tecnologia e IA", icon:"🤖", xp:15, board:true, steps:[
      {type:"intro", title:"Tecnologia e intelligenza artificiale",
       desc:"Dive into the vocabulary of artificial intelligence, digital transformation, and the technology reshaping modern life. Learn terms used in Italian tech discourse and news.",
       goals:["Discuss AI and machine learning concepts","Describe digital transformation in business and society","Express opinions about technology's role in the future"]},

      {type:"teach", trg:"l'intelligenza artificiale", src:"artificial intelligence", pos:"noun", gender:"f",
       note:"Feminine noun. Abbreviated IA in Italian (not AI).\n'Sistemi di IA' = AI systems. 'IA generativa' = generative AI.",
       example:"A: L'intelligenza artificiale sta trasformando ogni settore.\nB: Dalla medicina alla finanza, niente restera uguale.",
       exampleSrc:"A: Artificial intelligence is transforming every sector.\nB: From medicine to finance, nothing will remain the same.",
       funFact:"Italian abbreviates it as IA, not AI. Italy's national AI strategy was published in 2021, focusing on research, public administration, and industrial applications. Italian universities have rapidly expanded their IA programs."},

      {type:"teach", trg:"l'algoritmo", src:"the algorithm", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: gli algoritmi.\nA set of instructions for solving a problem or processing data.",
       example:"A: Gli algoritmi dei social media influenzano le nostre opinioni.\nB: Mostrano solo quello che vogliamo vedere.",
       exampleSrc:"A: Social media algorithms influence our opinions.\nB: They show only what we want to see.",
       funFact:"The word 'algoritmo' comes from al-Khwarizmi, the 9th-century Persian mathematician whose name was Latinized. Italian mathematicians of the Renaissance were among the first Europeans to adopt and develop algorithmic thinking."},

      {type:"teach", trg:"l'automazione", src:"automation", pos:"noun", gender:"f",
       note:"Feminine noun. The use of machines to replace human labor.\n'Automazione industriale' = industrial automation.",
       example:"A: L'automazione ha eliminato molti posti di lavoro in fabbrica.\nB: Ma ha anche creato nuove professioni.",
       exampleSrc:"A: Automation has eliminated many factory jobs.\nB: But it has also created new professions.",
       funFact:"Italy has the second-highest density of industrial robots in Europe, after Germany. The regions of Lombardia, Piemonte, and Emilia-Romagna are hubs of advanced manufacturing automation."},

      {type:"teach", trg:"i dati", src:"the data", pos:"noun", gender:"m",
       note:"Masculine plural noun. Singular: il dato.\n'Analisi dei dati' = data analysis. 'Protezione dei dati' = data protection.",
       example:"A: I dati sono il petrolio del ventunesimo secolo.\nB: Chi controlla i dati, controlla il futuro.",
       exampleSrc:"A: Data is the oil of the twenty-first century.\nB: Whoever controls the data, controls the future.",
       funFact:"Italians call it 'GDPR' using the English acronym, even though the Italian name is 'Regolamento Generale sulla Protezione dei Dati.' Italy's privacy authority, the Garante, is one of Europe's most active data protection regulators."},

      {type:"teach", trg:"la rete", src:"the network / the internet", pos:"noun", gender:"f",
       note:"Feminine noun. 'La rete' = the internet (colloquial).\n'Rete neurale' = neural network. 'In rete' = online.",
       example:"A: Sei sempre connesso alla rete?\nB: Ormai e impossibile vivere senza internet.",
       exampleSrc:"A: Are you always connected to the internet?\nB: By now it is impossible to live without the internet.",
       funFact:"Italian speakers use both 'la rete' (the net) and 'Internet' for the web. 'Navigare in rete' (to surf the net) uses the Italian naval metaphor, while 'andare online' borrows directly from English."},

      {type:"mc",
       q:"Quale sigla usano gli esperti per questo campo tecnologico?",
       opts:["IA","AI","INT","INA"],
       ans:"IA",
       hint:"Italian uses its own word order: the noun comes first, then the adjective. The abbreviation follows the Italian order."},

      {type:"teach", trg:"il cloud", src:"the cloud (computing)", pos:"noun", gender:"m",
       note:"Masculine noun. English loanword widely used in Italian.\n'Salvare nel cloud' = to save to the cloud. 'Servizi cloud' = cloud services.",
       example:"A: Tutti i nostri dati sono nel cloud.\nB: E piu sicuro che tenerli su un disco fisico.",
       exampleSrc:"A: All our data is in the cloud.\nB: It is safer than keeping it on a physical disk.",
       funFact:"Italian freely adopts English tech terms: cloud, software, hardware, startup, smart. The Accademia della Crusca (Italy's language authority) sometimes proposes Italian alternatives, but English terms usually win in everyday usage."},

      {type:"teach", trg:"la piattaforma", src:"the platform", pos:"noun", gender:"f",
       note:"Feminine noun. Both physical and digital platforms.\n'Piattaforma digitale' = digital platform. 'Piattaforma social' = social media platform.",
       example:"A: Questa piattaforma ha milioni di utenti in Italia.\nB: Le piattaforme digitali stanno cambiando il commercio.",
       exampleSrc:"A: This platform has millions of users in Italy.\nB: Digital platforms are changing commerce.",
       funFact:"Unlike many English tech terms that Italian borrows unchanged, 'piattaforma' is a genuine Italian word. From French 'plate-forme' (flat form), it adapted naturally to the digital meaning."},

      {type:"teach", trg:"la cybersicurezza", src:"cybersecurity", pos:"noun", gender:"f",
       note:"Feminine noun. Also written 'sicurezza informatica.'\n'Attacco informatico' = cyberattack.",
       example:"A: La cybersicurezza e una priorita per le aziende italiane.\nB: Gli attacchi informatici sono in aumento ogni anno.",
       exampleSrc:"A: Cybersecurity is a priority for Italian companies.\nB: Cyberattacks are increasing every year.",
       funFact:"Italy established its national cybersecurity agency (ACN) in 2021. The country ranks among the top targets for cyberattacks in Europe, partly due to the large number of small businesses with limited IT security resources."},

      {type:"fb",
       s:"Gli {1} dei social media decidono quali contenuti vediamo.",
       a:["algoritmi"],
       opts:["algoritmi","dati","piattaforme","reti"],
       hint:"Sets of instructions that process information and make decisions automatically. Named after a Persian mathematician.",
       sSrc:"Social media {1} decide which content we see."},

      {type:"teach", trg:"digitalizzare", src:"to digitize / to digitalize", pos:"verb", gender:null,
       note:"Regular -are verb. Io digitalizzo, tu digitalizzi.\n'La digitalizzazione' (noun) = digitalization.",
       example:"A: Il governo vuole digitalizzare tutta la pubblica amministrazione.\nB: Finalmente meno carta e piu efficienza.",
       exampleSrc:"A: The government wants to digitalize all public administration.\nB: Finally less paper and more efficiency.",
       funFact:"Italy's PNRR (Piano Nazionale di Ripresa e Resilienza), funded by EU recovery money, allocates over 40 billion euros to digital transformation. 'Digitalizzare la PA' (digitalize public administration) became a national slogan."},

      {type:"teach", trg:"programmare", src:"to program / to code", pos:"verb", gender:null,
       note:"Regular -are verb. Io programmo, tu programmi.\n'Il programmatore' / 'la programmatrice' = the programmer.",
       example:"A: Sai programmare in Python?\nB: Si, ho imparato durante il lockdown.",
       exampleSrc:"A: Do you know how to code in Python?\nB: Yes, I learned during the lockdown.",
       funFact:"'Programmare' also means 'to plan/schedule' in everyday Italian. 'Programmare una vacanza' = to plan a vacation, 'programmare un computer' = to program a computer. Context determines the meaning."},

      {type:"teach", trg:"aggiornare", src:"to update", pos:"verb", gender:null,
       note:"Regular -are verb. Io aggiorno, tu aggiorni.\n'L'aggiornamento' (noun) = the update.",
       example:"A: Devi aggiornare il software del computer.\nB: L'ultimo aggiornamento corregge molti errori.",
       exampleSrc:"A: You need to update the computer software.\nB: The latest update fixes many errors.",
       funFact:"From 'giorno' (day), literally 'to bring to the current day.' The word predates computing by centuries. Medieval Italian scholars used 'aggiornare' for updating legal records and chronicles."},

      {type:"mc",
       q:"Come si chiama il piano italiano finanziato dall'UE per la trasformazione digitale?",
       opts:["Piano Europa Digitale","PNRR","Agenda 2030","Programma IA"],
       ans:"PNRR",
       hint:"Piano Nazionale di Ripresa e Resilienza. Italy's national recovery plan, funded with billions from European recovery funds."},

      {type:"teach", trg:"l'innovazione", src:"innovation", pos:"noun", gender:"f",
       note:"Feminine noun. 'Innovazione tecnologica' = technological innovation.\n'Cultura dell'innovazione' = culture of innovation.",
       example:"A: L'innovazione e essenziale per la competitivita.\nB: Senza ricerca non c'e progresso.",
       exampleSrc:"A: Innovation is essential for competitiveness.\nB: Without research there is no progress.",
       funFact:"Italy ranks as a 'moderate innovator' in the European Innovation Scoreboard, behind northern European countries. Paradoxically, Italian creativity and design excellence are world-renowned, but R&D spending lags behind."},

      {type:"match", pairs:[
        {trg:"algoritmo", src:"algorithm"},
        {trg:"automazione", src:"automation"},
        {trg:"piattaforma", src:"platform"},
        {trg:"cybersicurezza", src:"cybersecurity"},
        {trg:"innovazione", src:"innovation"}
      ]},

      {type:"fb",
       s:"Il governo vuole {1} tutta la pubblica amministrazione entro il 2026.",
       a:["digitalizzare"],
       opts:["digitalizzare","programmare","aggiornare","automatizzare"],
       hint:"Converting paper-based systems to electronic ones. Making public services available online instead of only in person.",
       sSrc:"The government wants to {1} all public administration by 2026."},

      {type:"mc",
       q:"Che cosa significa 'navigare in rete'?",
       opts:["Usare un programma di grafica","Guardare la televisione via satellite","Usare Internet per cercare informazioni","Aggiornare il software del telefono"],
       ans:"Usare Internet per cercare informazioni",
       hint:"'La rete' means the i.... 'Navigare' uses a sailing metaphor for moving through web pages and content."},

      {type:"fb",
       s:"Tutti i nostri documenti aziendali sono salvati nel {1} per accedervi ovunque.",
       a:["cloud"],
       opts:["cloud","prototipo","brevetto","algoritmo"],
       hint:"Remote storage accessed via the internet. An English loanword that the Accademia della Crusca has tried to replace with Italian equivalents.",
       sSrc:"All our company documents are saved in the {1} for access from anywhere."}
    ]},

    // ─── Lesson 2: Startup e futuro del lavoro ───
    {id:"itv2_u35l2", title:"Startup e lavoro", icon:"💡", xp:15, board:true, steps:[
      {type:"intro", title:"Startup e futuro del lavoro",
       desc:"Learn the vocabulary of entrepreneurship, startups, and the changing world of work. Discuss remote work, the gig economy, and Italy's evolving business landscape.",
       goals:["Describe the startup ecosystem and entrepreneurship","Discuss remote work and new employment models","Express opinions about the future of work"]},

      {type:"teach", trg:"la startup", src:"the startup", pos:"noun", gender:"f",
       note:"Feminine noun. English loanword, widely used in Italian.\n'Startup innovativa' = innovative startup (legal category in Italy).",
       example:"A: Ha fondato una startup nel settore della salute digitale.\nB: Ha gia raccolto due milioni di finanziamenti.",
       exampleSrc:"A: She founded a startup in the digital health sector.\nB: She has already raised two million in funding.",
       funFact:"Italian law created a special legal category called 'startup innovativa' in 2012, offering tax breaks and simplified bureaucracy. Over 14,000 companies have registered under this status."},

      {type:"teach", trg:"l'imprenditore", src:"the entrepreneur", pos:"noun", gender:"m",
       note:"Masculine noun. Feminine: l'imprenditrice.\n'Spirito imprenditoriale' = entrepreneurial spirit.",
       example:"A: L'imprenditrice ha trasformato una piccola idea in un'azienda globale.\nB: E un esempio di determinazione e visione.",
       exampleSrc:"A: The entrepreneur transformed a small idea into a global company.\nB: She is an example of determination and vision.",
       funFact:"Italy's economy is built on small and medium enterprises (PMI), making 'l'imprenditore' a respected social figure. The word comes from 'imprendere' (to undertake), from Latin 'in + prehendere' (to seize), sharing the same root as French 'entrepreneur.'"},

      {type:"teach", trg:"il finanziamento", src:"the funding / financing", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i finanziamenti.\n'Finanziamento a fondo perduto' = non-repayable grant.",
       example:"A: Senza finanziamenti, il progetto non potra partire.\nB: Stiamo cercando investitori privati.",
       exampleSrc:"A: Without funding, the project cannot start.\nB: We are looking for private investors.",
       funFact:"Access to venture capital is a well-known weakness of the Italian startup ecosystem. Italian startups raise significantly less funding per capita than their German, French, or British counterparts."},

      {type:"teach", trg:"lo smart working", src:"remote work / working from home", pos:"noun", gender:"m",
       note:"Masculine noun. Italian uses this English-sounding phrase (which is not used\nin English). 'Lavoro da remoto' = remote work (more formal).",
       example:"A: Lo smart working e diventato normale dopo la pandemia.\nB: Molte aziende permettono due giorni a settimana da casa.",
       exampleSrc:"A: Remote work became normal after the pandemic.\nB: Many companies allow two days a week from home.",
       funFact:"'Smart working' is a pseudo-anglicism: English speakers say 'remote work' or 'working from home,' not 'smart working.' Italy adopted it as a legal term in 2017, before the pandemic made it mainstream."},

      {type:"teach", trg:"la sostenibilita", src:"sustainability", pos:"noun", gender:"f",
       note:"Feminine noun. Invariable (accented ending).\n'Sostenibilita ambientale' = environmental sustainability.",
       example:"A: La sostenibilita deve guidare ogni decisione aziendale.\nB: Non si puo piu ignorare l'impatto ambientale.",
       exampleSrc:"A: Sustainability must guide every business decision.\nB: Environmental impact can no longer be ignored.",
       funFact:"Italy is a leader in the circular economy within the EU, recycling more industrial waste than any other European country. 'Economia circolare' and 'sostenibilita' are buzzwords in Italian corporate communication."},

      {type:"mc",
       q:"Che cos'e lo 'smart working' in italiano?",
       opts:["Il lavoro da remoto o da casa","Un lavoro molto intelligente","Un tipo di formazione aziendale","Una startup tecnologica"],
       ans:"Il lavoro da remoto o da casa",
       hint:"This pseudo-English term used in Italy describes working outside the traditional office, typically from home."},

      {type:"teach", trg:"la scalabilita", src:"scalability", pos:"noun", gender:"f",
       note:"Feminine noun. The ability of a business to grow without proportional cost increases.\n'Modello di business scalabile' = scalable business model.",
       example:"A: La scalabilita del prodotto e il nostro punto di forza.\nB: Possiamo servire un milione di utenti senza costi aggiuntivi.",
       exampleSrc:"A: The scalability of the product is our strength.\nB: We can serve a million users without additional costs.",
       funFact:"Italian startup vocabulary borrows heavily from English: pitch, business model, funding round, exit strategy. However, Italians naturalize them with Italian pronunciation, creating a distinctive tech-business dialect."},

      {type:"teach", trg:"il brevetto", src:"the patent", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i brevetti.\n'Brevettare' (verb) = to patent. 'Ufficio brevetti' = patent office.",
       example:"A: L'azienda ha depositato un brevetto per la nuova tecnologia.\nB: Il brevetto garantisce l'esclusiva per venti anni.",
       exampleSrc:"A: The company filed a patent for the new technology.\nB: The patent guarantees exclusivity for twenty years.",
       funFact:"Italy files fewer patents per capita than Germany, France, or the UK, despite strong innovation in design and manufacturing. The gap is partly explained by the prevalence of small firms that lack patent office resources."},

      {type:"teach", trg:"il prototipo", src:"the prototype", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i prototipi.\n'Sviluppare un prototipo' = to develop a prototype.",
       example:"A: Il prototipo e pronto per i test.\nB: Se funziona, passeremo alla produzione.",
       exampleSrc:"A: The prototype is ready for testing.\nB: If it works, we will move to production.",
       funFact:"From Greek 'protos' (first) + 'typos' (impression). Italy's strength in industrial design means Italian prototypi often combine technical function with aesthetic beauty, from sports cars to espresso machines."},

      {type:"fb",
       s:"L'azienda ha depositato un {1} per proteggere la sua invenzione.",
       a:["brevetto"],
       opts:["brevetto","prototipo","finanziamento","algoritmo"],
       hint:"Legal protection for an invention that gives the owner exclusive rights for a limited period. Filed at a government office.",
       sSrc:"The company filed a {1} to protect its invention."},

      {type:"teach", trg:"la precarizzazione", src:"job precarity / casualization of work", pos:"noun", gender:"f",
       note:"Feminine noun. The trend toward unstable employment.\n'Lavoro precario' = precarious work. 'Il precariato' = the precariat.",
       example:"A: La precarizzazione del lavoro colpisce soprattutto i giovani.\nB: Contratti brevi, poche tutele e stipendi bassi.",
       exampleSrc:"A: The casualization of work especially affects young people.\nB: Short contracts, few protections, and low salaries.",
       funFact:"'Il precariato' (the class of workers with unstable jobs) became a defining term in Italian social debate after 2000. Economist Guy Standing popularized the global term 'precariat,' but Italy's version predates it."},

      {type:"teach", trg:"la formazione", src:"training / education (professional)", pos:"noun", gender:"f",
       note:"Feminine noun. 'Formazione professionale' = professional training.\n'Corso di formazione' = training course.",
       example:"A: La formazione continua e fondamentale nel mondo digitale.\nB: Le competenze di oggi saranno obsolete domani.",
       exampleSrc:"A: Continuous training is fundamental in the digital world.\nB: Today's skills will be obsolete tomorrow.",
       funFact:"Italy invests less in corporate training than the EU average, contributing to a persistent skills gap. The phrase 'formazione permanente' (lifelong learning) appears in every government employment plan but remains a challenge."},

      {type:"teach", trg:"il telelavoro", src:"telework / telecommuting", pos:"noun", gender:"m",
       note:"Masculine noun. The more formal term for working remotely.\n'Telelavoratore' = teleworker. Predates 'smart working.'",
       example:"A: Il telelavoro esisteva gia prima della pandemia.\nB: Ma riguardava pochi settori specializzati.",
       exampleSrc:"A: Telework existed before the pandemic.\nB: But it concerned few specialized sectors.",
       funFact:"Italian law distinguishes between 'telelavoro' (fixed remote workplace, regulated since 2004) and 'lavoro agile/smart working' (flexible location, regulated since 2017). The legal distinction matters for insurance and tax purposes."},

      {type:"mc",
       q:"Che cos'e 'il precariato'?",
       opts:["Un tipo di contratto a tempo indeterminato","La classe di lavoratori con impiego instabile","Un programma di formazione professionale","Un fondo per le startup"],
       ans:"La classe di lavoratori con impiego instabile",
       hint:"A social class defined by unstable employment: short contracts, few protections, low wages. Especially affects young Italians."},

      {type:"teach", trg:"la competenza", src:"the competence / skill", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le competenze.\n'Competenze digitali' = digital skills. 'Competenze trasversali' = soft skills.",
       example:"A: Le competenze digitali sono ormai indispensabili.\nB: Anche i lavori tradizionali richiedono conoscenze informatiche.",
       exampleSrc:"A: Digital skills are now indispensable.\nB: Even traditional jobs require IT knowledge.",
       funFact:"Italy ranks among the lowest in the EU for digital skills. The annual DESI (Digital Economy and Society Index) consistently places Italy in the bottom quarter, despite the country's strengths in design and engineering."},

      {type:"match", pairs:[
        {trg:"startup", src:"startup"},
        {trg:"brevetto", src:"patent"},
        {trg:"sostenibilita", src:"sustainability"},
        {trg:"formazione", src:"training"},
        {trg:"competenza", src:"competence/skill"}
      ]},

      {type:"fb",
       s:"La {1} continua e fondamentale per restare competitivi nel mercato del lavoro.",
       a:["formazione"],
       opts:["formazione","sostenibilita","scalabilita","precarizzazione"],
       hint:"Professional training and education that continues throughout your career. 'Lifelong learning' in English.",
       sSrc:"Continuous {1} is fundamental to remain competitive in the job market."},

      {type:"mc",
       q:"Perche 'smart working' e un pseudo-anglicismo?",
       opts:["Perche non esiste in nessuna lingua ufficialmente riconosciuta","Perche in origine era un termine commerciale di derivazione tedesca","Perche in inglese si dice 'remote work', non 'smart working'","Perche in italiano significa letteralmente lavoro intelligente e produttivo"],
       ans:"Perche in inglese si dice 'remote work', non 'smart working'",
       hint:"Though it sounds English, native English speakers do not use this term. It was coined in Italy and looks like English but is not used abroad."},

      {type:"mc",
       q:"Come si chiama una persona che fonda e gestisce un'impresa, assumendosi rischi e responsabilita?",
       opts:["Il dipendente","Il mediatore","Il commissario","L'imprenditore"],
       ans:"L'imprenditore",
       hint:"This figure is central to the Italian economy dominated by small and medium businesses. The feminine form is 'l'imprenditrice.'"},

      {type:"fb",
       s:"Il {1} esisteva gia dal 2004 in Italia, ma la pandemia lo ha reso popolare.",
       a:["telelavoro"],
       opts:["telelavoro","prototipo","brevetto","finanziamento"],
       hint:"The formal legal term for remote work, regulated in Italy since 2004. Distinct from the newer 'smart working' in Italian law.",
       sSrc:"{1} already existed in Italy since 2004, but the pandemic made it popular."}
    ]}
  ]
};
export default UNIT_35;
