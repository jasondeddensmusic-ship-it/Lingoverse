// Italian V2 Unit 31. I media avanzati (B2.3)
import BATCH8_L1 from './_batch8_u31_L01.js';
import BATCH7_L1 from './_batch7_u31_L01.js';
import BATCH6_L1 from './_batch6_u31_L01.js';
import BATCH5_L02 from './_batch5_u31_L02.js';
import BATCH5_L01 from './_batch5_u31_L01.js';
import BATCH3_L02 from './_batch3_u31_L02.js';
import BATCH3_L01 from './_batch3_u31_L01.js';
import EXP_L4 from './_temp_u31_expand_L01.js';import EXP_L5 from './_temp_u31_expand_L02.js';import EXP_L6 from './_temp_u31_expand_L03.js';
// CILS B2 aligned. Advanced media, journalism, digital communication vocabulary.

const UNIT_31 = {
  n:31, lang:"it", srcLang:"en", track:"v2",
  title:"I media avanzati", sub:"Advanced Media & Digital",
  icon:"📡", level:"B2.3", color:"#7B5EE8",
  lessons:[
    // ─── Lesson 1: Il giornalismo ───
    {id:"itv2_u31l1", title:"Il giornalismo", icon:"📰", xp:15, board:true, steps:[
      {type:"intro", title:"Il giornalismo",
       desc:"Learn vocabulary for journalism, investigative reporting, and media ethics. These terms are essential for understanding Italian news and public discourse.",
       goals:["Name key concepts in journalism and reporting","Discuss media ethics and editorial decisions","Understand Italian press vocabulary"]},

      {type:"teach", trg:"l'editoriale", src:"the editorial", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: gli editoriali.\nAn opinion piece by the editor or a senior journalist.\n'Scrivere un editoriale' = to write an editorial.",
       example:"A: L'editoriale di oggi critica la politica economica.\nB: Il direttore e sempre molto diretto.\nA: In che senso?\nB: Nel senso che bisogna pensarci bene prima di decidere.\nA: Che ruolo gioca la tecnologia in tutto questo?\nB: Fondamentale, sta trasformando completamente il settore.",
       exampleSrc:"A: Today's editorial criticizes economic policy.\nB: The editor is always very direct.\nA: In what sense?\nB: In the sense that you need to think carefully before deciding.\nA: What role does technology play in all this?\nB: A fundamental one, it is completely transforming the sector.",
       funFact:"Major Italian newspapers like Corriere della Sera and La Repubblica run influential front-page editorials ('fondo'). The editorialist ('editorialista') is often a public intellectual whose opinion shapes national debate."},

      {type:"teach", trg:"l'inchiesta", src:"the investigation / investigative report", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le inchieste.\n'Inchiesta giornalistica' = investigative report.\n'Giornalismo d'inchiesta' = investigative journalism.",
       example:"A: L'inchiesta ha rivelato casi di corruzione.\nB: Il giornalista ha ricevuto minacce.\nA: Interessante, non lo sapevo.\nB: Si, e una cosa che pochi sanno.\nA: Non avevo mai pensato a questo aspetto.\nB: E un punto di vista che molti trascurano, in effetti.",
       exampleSrc:"A: The investigation revealed cases of corruption.\nB: The journalist received threats.\nA: Interesting, I did not know that.\nB: Yes, it is something few people know.\nA: I had never thought about this aspect.\nB: It is a point of view that many overlook, in fact.",
       funFact:"Italian investigative journalism has a heroic tradition. Reporters covering the Mafia, like Roberto Saviano (author of 'Gomorra'), often live under police protection. The phrase 'giornalismo d'inchiesta' carries weight and respect."},

      {type:"teach", trg:"la censura", src:"the censorship", pos:"noun", gender:"f",
       note:"Feminine noun. 'Censurare' (verb) = to censor.\n'Autocensura' = self-censorship.",
       example:"A: La censura minaccia la liberta di stampa.\nB: In molti paesi i giornalisti sono a rischio.\nA: Hai chiesto consiglio a qualcuno?\nB: Si, al mio amico Luca. Lui ha esperienza.\nA: E un argomento che mi sta a cuore.\nB: Si vede, e bello avere questa passione.",
       exampleSrc:"A: Censorship threatens press freedom.\nB: In many countries journalists are at risk.\nA: Did you ask anyone for advice?\nB: Yes, my friend Luca. He has experience.\nA: It is a topic I care about deeply.\nB: One can tell, it is nice to have that passion.",
       funFact:"Italy ranks lower than expected on press freedom indexes, partly due to media concentration. The Berlusconi era raised global concerns about media independence when a prime minister controlled major TV channels while governing."},

      {type:"teach", trg:"la disinformazione", src:"the disinformation", pos:"noun", gender:"f",
       note:"Feminine noun. Deliberate spreading of false information.\nDistinct from 'misinformazione' (unintentional false info).",
       example:"A: La disinformazione online e un problema gravissimo.\nB: Bisogna verificare le fonti prima di condividere.\nA: Ne parleremo domani?\nB: Certo, con calma e senza fretta.\nA: Mi piacerebbe saperne di piu.\nB: Con piacere, possiamo continuare la prossima volta.",
       exampleSrc:"A: Online disinformation is a very serious problem.\nB: One must verify sources before sharing.\nA: Shall we talk about it tomorrow?\nB: Of course, calmly and without rush.\nA: I would like to know more.\nB: With pleasure, we can continue next time.",
       funFact:"Italy created a parliamentary committee on disinformation in 2020. The Italian word distinguishes 'disinformazione' (intentional lies) from 'misinformazione' (honest errors), mirroring the English distinction but with Latin prefixes."},

      {type:"teach", trg:"la fonte", src:"the source", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le fonti.\n'Fonte anonima' = anonymous source. 'Verificare le fonti' = to verify sources.",
       example:"A: La fonte ha chiesto di restare anonima.\nB: Il giornalista deve proteggere le sue fonti.\nA: Come va adesso?\nB: Molto meglio di prima, grazie.\nA: C'e una soluzione realistica?\nB: Non semplice, ma con la collaborazione di tutti e possibile.",
       exampleSrc:"A: The source asked to remain anonymous.\nB: The journalist must protect his sources.\nA: How is it going now?\nB: Much better than before, thanks.\nA: Is there a realistic solution?\nB: Not simple, but with everyone's collaboration it is possible.",
       funFact:"'Fonte' also means 'spring' or 'fountain.' The metaphor is perfect: a source of information flows like water from a spring. Italian journalism ethics require at least two independent sources before publishing sensitive claims."},
{type:"match",pairs:[{trg:"l'inchiesta",src:"the investigation / investigative report"},{trg:"la censura",src:"the censorship"},{trg:"la disinformazione",src:"the disinformation"},{trg:"la fonte",src:"the source"}]},

      {type:"mc",
       q:"Come si chiama un articolo in cui il direttore esprime la sua opinione?",
       opts:["Un editoriale","Un'inchiesta","Una fonte","Una censura"],
       ans:"Un editoriale",
       hint:"An opinion piece written by the editor or a senior journalist, typically on the front page. It represents the newspaper's position."},

      {type:"teach", trg:"la redazione", src:"the editorial office / newsroom", pos:"noun", gender:"f",
       note:"Feminine noun. The team and the physical space where a newspaper is produced.\n'Riunione di redazione' = editorial meeting.",
       example:"A: La redazione si riunisce ogni mattina alle otto.\nB: Decidono quali notizie coprire.\nA: Lo fai spesso?\nB: Almeno una volta alla settimana.\nA: Ne hai discusso con altri colleghi?\nB: Si, e il consenso generale e che serve un intervento strutturale.",
       exampleSrc:"A: The newsroom meets every morning at eight.\nB: They decide which news to cover.\nA: Do you do it often?\nB: At least once a week.\nA: Have you discussed it with other colleagues?\nB: Yes, and the general consensus is that structural intervention is needed.",
       funFact:"Italian newsrooms ('redazioni') have a distinct hierarchy: 'direttore' (editor-in-chief), 'vicedirettore,' 'caporedattore' (managing editor), 'redattore' (staff journalist). The 'riunione di redazione' (editorial meeting) sets the day's agenda."},

      {type:"fb",
       s:"L'{1} giornalistica ha rivelato uno scandalo di corruzione.",
       a:["inchiesta"],
       opts:["inchiesta","editoriale","censura","redazione"],
       hint:"An in-depth journalistic investigation that uncovers hidden facts. Investigative reporting at its finest.",
       sSrc:"The journalistic {1} revealed a corruption scandal."},

      {type:"teach", trg:"la cronaca", src:"the news report / chronicle", pos:"noun", gender:"f",
       note:"Feminine noun. 'Cronaca nera' = crime news. 'Cronaca locale' = local news.\n'Cronista' = news reporter.",
       example:"A: La cronaca di oggi riporta un grave incidente.\nB: Per fortuna non ci sono vittime.\nA: Ci sono alternative?\nB: Alcune, ma questa mi sembra la migliore.\nA: Cosa si potrebbe fare di diverso?\nB: Investire di piu nella formazione e nella prevenzione.",
       exampleSrc:"A: Today's news reports a serious accident.\nB: Fortunately there are no victims.\nA: Are there alternatives?\nB: Some, but this one seems the best to me.\nA: What could be done differently?\nB: Invest more in education and prevention.",
       funFact:"Italian newspapers divide news into sections: 'cronaca' (general/local news), 'politica' (politics), 'esteri' (international), 'economia' (business), 'cultura' (culture), 'sport.' 'Cronaca nera' (black chronicle) specifically covers crime."},

      {type:"teach", trg:"l'obiettivita", src:"the objectivity", pos:"noun", gender:"f",
       note:"Feminine noun. Invariable (accented ending).\n'Obiettivita giornalistica' = journalistic objectivity.",
       example:"A: L'obiettivita totale nel giornalismo e un'illusione?\nB: Forse, ma resta un ideale da perseguire.\nA: Quanto ci vuole?\nB: Di solito circa un'ora, non di piu.\nA: E un problema anche in altri settori?\nB: Si, purtroppo e trasversale e riguarda molti ambiti.",
       exampleSrc:"A: Is total objectivity in journalism an illusion?\nB: Perhaps, but it remains an ideal to pursue.\nA: How long does it take?\nB: Usually about an hour, no more.\nA: Is it a problem in other sectors too?\nB: Yes, unfortunately it cuts across many areas.",
       funFact:"Italian journalism historically has a partisan tradition, with newspapers openly aligned with political parties or movements. The idea of strict Anglo-Saxon objectivity sits alongside a European tradition where journalists take clear positions."},

      {type:"mc",
       q:"Che cos'e la 'cronaca nera'?",
       opts:["Un tipo di censura governativa","La sezione del giornale dedicata ai crimini","Un editoriale pessimista","Un reportage fotografico in bianco e nero"],
       ans:"La sezione del giornale dedicata ai crimini",
       hint:"'Nera' means black. This newspaper section covers dark events: crime, accidents, and violence. A staple of Italian press."},

      {type:"match", pairs:[
        {trg:"editoriale", src:"editorial"},
        {trg:"inchiesta", src:"investigation"},
        {trg:"censura", src:"censorship"},
        {trg:"disinformazione", src:"disinformation"},
        {trg:"fonte", src:"source"}
      ]},

      {type:"fb",
       s:"La {1} online rende difficile distinguere il vero dal falso.",
       a:["disinformazione"],
       opts:["disinformazione","redazione","cronaca","obiettivita"],
       hint:"The deliberate spreading of false information, especially on the internet and social media. A major modern threat to informed citizenship.",
       sSrc:"Online {1} makes it difficult to tell truth from falsehood."},

      {type:"mc",
       q:"Perche l'Italia si colloca piu in basso del previsto nelle classifiche sulla liberta di stampa?",
       opts:["Perche i giornalisti italiani non sono qualificati","Perche non ci sono giornali in Italia","Per la concentrazione dei media e le pressioni politiche","Perche gli italiani non leggono i giornali"],
       ans:"Per la concentrazione dei media e le pressioni politiche",
       hint:"M... ownership concentrated in few hands and political pressure on newsrooms affect independence. Not about quality or readership."}
    ]},

    // ─── Lesson 2: Il mondo digitale ───
    {id:"itv2_u31l2", title:"Il mondo digitale", icon:"📱", xp:15, board:true, steps:[
      {type:"intro", title:"Il mondo digitale",
       desc:"Learn vocabulary for digital media, social networks, and online culture. Understand how Italians talk about the digital transformation of communication and entertainment.",
       goals:["Discuss digital platforms and content creation","Talk about algorithms and online virality","Understand Italian digital media terminology"]},

      {type:"teach", trg:"l'algoritmo", src:"the algorithm", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: gli algoritmi.\nThe automated system that selects content on platforms.",
       example:"A: L'algoritmo decide quali notizie vediamo.\nB: Questo crea una bolla informativa.\nA: E successo all'improvviso?\nB: Si, non me lo aspettavo per niente.\nA: Qual e l'opinione degli esperti?\nB: Ci sono posizioni diverse, ma la maggioranza concorda su un punto.",
       exampleSrc:"A: The algorithm decides which news we see.\nB: This creates an information bubble.\nA: Did it happen suddenly?\nB: Yes, I did not expect it at all.\nA: What is the experts' opinion?\nB: There are different positions, but the majority agrees on one point.",
       funFact:"The word comes from al-Khwarizmi, the 9th-century Persian mathematician. Italian borrowed it through medieval Latin. Today 'algoritmo' appears daily in Italian media discussions about social networks and artificial intelligence."},

      {type:"teach", trg:"virale", src:"viral", pos:"adj", gender:null,
       note:"Adjective. Same form masculine and feminine.\n'Diventare virale' = to go viral. 'Un video virale' = a viral video.",
       example:"A: Il video e diventato virale in poche ore.\nB: Ha gia dieci milioni di visualizzazioni.\nA: E una bella opportunita.\nB: Sono d'accordo, non voglio perdermela.\nA: E un fenomeno recente?\nB: Non proprio, ha radici che risalgono a decenni fa.",
       exampleSrc:"A: The video went viral in a few hours.\nB: It already has ten million views.\nA: It is a great opportunity.\nB: I agree, I do not want to miss it.\nA: Is it a recent phenomenon?\nB: Not exactly, it has roots that go back decades.",
       funFact:"Italian adopted 'virale' from English digital culture, but the word already existed as a medical term ('infezione virale' = viral infection). The metaphor of content spreading like a virus is vivid in both languages."},

      {type:"teach", trg:"l'influencer", src:"the influencer", pos:"noun", gender:"m",
       note:"Masculine/feminine noun. Invariable. Borrowed from English.\nAlso: 'influenzatore/influenzatrice' (rare Italian form).",
       example:"A: Quell'influencer ha tre milioni di follower.\nB: Guadagna piu di un manager d'azienda.\nA: Mi fa piacere sentirlo.\nB: Si, le cose stanno andando bene.\nA: Possiamo approfondire questo aspetto?\nB: Certo, e un tema che merita una discussione piu ampia.",
       exampleSrc:"A: That influencer has three million followers.\nB: He earns more than a corporate manager.\nA: I am glad to hear it.\nB: Yes, things are going well.\nA: Can we explore this aspect further?\nB: Of course, it is a topic that deserves a broader discussion.",
       funFact:"Italy's most famous influencer, Chiara Ferragni, turned a fashion blog into a business empire. Italian regulators require influencers to mark sponsored content with hashtags like '#adv' or '#pubblicita,' though enforcement remains uneven."},

      {type:"teach", trg:"lo streaming", src:"the streaming", pos:"noun", gender:"m",
       note:"Masculine noun. Invariable. Borrowed from English.\n'Piattaforma di streaming' = streaming platform. 'In streaming' = via streaming.",
       example:"A: Guardo quasi tutto in streaming ormai.\nB: La televisione tradizionale sta morendo.\nA: Hai altri programmi?\nB: No, per adesso mi concentro su questo.\nA: C'e qualcosa che mi sfugge?\nB: Forse il fatto che il contesto storico e molto complesso.",
       exampleSrc:"A: I watch almost everything via streaming now.\nB: Traditional television is dying.\nA: Do you have other plans?\nB: No, for now I am focusing on this.\nA: Am I missing something?\nB: Perhaps the fact that the historical context is very complex.",
       funFact:"Italy was slower than northern Europe to adopt streaming but caught up rapidly during COVID-19 lockdowns. Netflix, Disney+, and local platform RaiPlay now compete for Italian viewers alongside traditional RAI and Mediaset channels."},

      {type:"mc",
       q:"Che cos'e un algoritmo nel contesto dei social media?",
       opts:["Un sistema automatico che seleziona i contenuti mostrati all'utente","Un tipo di virus informatico","Un profilo falso online","Un metodo per bloccare la pubblicita"],
       ans:"Un sistema automatico che seleziona i contenuti mostrati all'utente",
       hint:"An automated system that determines what content appears in your feed. It decides what you see based on your past behavior and preferences."},

      {type:"teach", trg:"il podcast", src:"the podcast", pos:"noun", gender:"m",
       note:"Masculine noun. Invariable. Borrowed from English.\n'Ascoltare un podcast' = to listen to a podcast. 'Podcaster' = podcast creator.",
       example:"A: Ascolto un podcast di storia ogni mattina.\nB: Quale mi consigli?\nA: 'Barbero' e fantastico.\nA: Come posso aiutare?\nB: Potresti darmi una mano domani pomeriggio.\nA: Qual e la tua posizione in merito?\nB: Personalmente credo che serva un approccio piu equilibrato.",
       exampleSrc:"A: I listen to a history podcast every morning.\nB: Which one do you recommend?\nA: 'Barbero' is fantastic.\nA: How can I help?\nB: You could give me a hand tomorrow afternoon.\nA: What is your position on the matter?\nB: Personally I believe a more balanced approach is needed.",
       funFact:"Podcasting exploded in Italy after 2020. History professor Alessandro Barbero became a podcast phenomenon, with millions of downloads. Italian true crime podcasts ('Indagini' and similar) are also hugely popular."},

      {type:"teach", trg:"il contenuto", src:"the content", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i contenuti.\n'Creatore di contenuti' = content creator. 'Contenuto digitale' = digital content.",
       example:"A: I contenuti di qualita attirano piu pubblico.\nB: Ma servono tempo e risorse per crearli.\nA: Ne vale la pena?\nB: Decisamente si, te lo consiglio.\nA: Credi che la situazione migliorera?\nB: Dipende dalle scelte che faremo nei prossimi mesi.",
       exampleSrc:"A: Quality content attracts a larger audience.\nB: But it takes time and resources to create it.\nA: Is it worth it?\nB: Definitely yes, I recommend it.\nA: Do you think the situation will improve?\nB: It depends on the choices we make in the coming months.",
       funFact:"The Italian phrase 'creatore di contenuti' (content creator) has largely replaced the older 'blogger.' The profession is now recognized by Italian tax authorities, who created specific tax codes for digital content creation."},

      {type:"fb",
       s:"Il video e diventato {1} e ha raggiunto milioni di persone.",
       a:["virale"],
       opts:["virale","digitale","editoriale","sociale"],
       hint:"When content spreads rapidly across the internet like an infection. Reaching millions of people in a very short time.",
       sSrc:"The video went {1} and reached millions of people."},

      {type:"teach", trg:"la piattaforma", src:"the platform", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le piattaforme.\n'Piattaforma digitale' = digital platform. 'Piattaforma social' = social platform.",
       example:"A: Quale piattaforma usi di piu?\nB: Instagram per le foto, YouTube per i video.\nA: E anche la mia opinione.\nB: Bene, allora siamo d'accordo su questo punto.\nA: Come si confronta con altri paesi?\nB: L'Italia ha le sue specificita, ma il trend e simile in Europa.",
       exampleSrc:"A: Which platform do you use the most?\nB: Instagram for photos, YouTube for videos.\nA: That is my opinion too.\nB: Good, then we agree on this point.\nA: How does it compare with other countries?\nB: Italy has its own specificities, but the trend is similar in Europe.",
       funFact:"Italy has particularly high Instagram and TikTok usage in Europe. The visual nature of these platforms aligns well with Italian culture's emphasis on aesthetics, food photography, and fashion content."},

      {type:"teach", trg:"la privacy", src:"the privacy", pos:"noun", gender:"f",
       note:"Feminine noun. Invariable. Borrowed from English but widely used.\n'Diritto alla privacy' = right to privacy. 'Violazione della privacy' = privacy violation.",
       example:"A: La privacy online e sempre piu minacciata.\nB: Dovremmo proteggere meglio i nostri dati.\nA: Dove lo hai scoperto?\nB: Su internet, in un articolo molto interessante.\nA: Quali sono le conseguenze a lungo termine?\nB: Difficile dirlo, ma il cambiamento sara significativo.",
       exampleSrc:"A: Online privacy is increasingly threatened.\nB: We should better protect our data.\nA: Where did you discover it?\nB: On the internet, in a very interesting article.\nA: What are the long-term consequences?\nB: Hard to say, but the change will be significant.",
       funFact:"Italy's privacy authority ('Garante per la Privacy') is one of Europe's most active. It has fined major tech companies and was the first EU country to temporarily ban ChatGPT in 2023 over data privacy concerns."},

      {type:"mc",
       q:"Quale paese europeo ha temporaneamente bloccato ChatGPT nel 2023?",
       opts:["La Francia","L'Italia","La Germania","La Spagna"],
       ans:"L'Italia",
       hint:"The national privacy authority took action over data protection concerns, making this country the first in the EU to restrict the AI chatbot."},

      {type:"match", pairs:[
        {trg:"algoritmo", src:"algorithm"},
        {trg:"virale", src:"viral"},
        {trg:"influencer", src:"influencer"},
        {trg:"streaming", src:"streaming"},
        {trg:"podcast", src:"podcast"}
      ]},

      {type:"fb",
       s:"La {1} digitale ha cambiato il modo in cui consumiamo le notizie.",
       a:["piattaforma"],
       opts:["piattaforma","privacy","censura","cronaca"],
       hint:"A digital space or service where users access content and interact. Social networks and streaming services are examples.",
       sSrc:"The digital {1} has changed the way we consume news."},

      {type:"mc",
       q:"Perche in Italia i 'creatori di contenuti' devono usare hashtag come '#adv'?",
       opts:["Per evitare la censura","Per aumentare le visualizzazioni","Per indicare i contenuti sponsorizzati ai consumatori","Per rispettare l'algoritmo"],
       ans:"Per indicare i contenuti sponsorizzati ai consumatori",
       hint:"When content is paid for by a brand, transparency regulations require creators to label it. '#adv' stands for advertising."}
    ]},

    // ─── Lesson 3: Opinione pubblica e dibattito ───
    {id:"itv2_u31l3", title:"Opinione pubblica e dibattito", icon:"🗣️", xp:15, board:true, steps:[
      {type:"intro", title:"Opinione pubblica e dibattito",
       desc:"Learn to discuss public opinion, media debates, and how information shapes society. Vocabulary for participating in informed discussions about media's role.",
       goals:["Discuss public opinion formation","Talk about media bias and propaganda","Express nuanced views on media's societal role"]},

      {type:"teach", trg:"l'opinione pubblica", src:"the public opinion", pos:"noun", gender:"f",
       note:"Feminine compound noun. 'Sondaggio d'opinione' = opinion poll.\n'Orientare l'opinione pubblica' = to shape public opinion.",
       example:"A: L'opinione pubblica e contraria alla nuova legge.\nB: I sondaggi mostrano un 60% di opposizione.\nA: E un buon segno.\nB: Si, sono ottimista per il futuro.\nA: Dobbiamo restare aggiornati su questo tema.\nB: Assolutamente, e in continua evoluzione.",
       exampleSrc:"A: Public opinion is against the new law.\nB: Polls show 60% opposition.\nA: It is a good sign.\nB: Yes, I am optimistic about the future.\nA: We need to stay updated on this topic.\nB: Absolutely, it is constantly evolving.",
       funFact:"Italian talk shows ('talk show' is used in Italian too) play an enormous role in shaping public opinion. Programs like those on RAI and La7 feature heated debates among politicians, journalists, and intellectuals."},

      {type:"teach", trg:"il dibattito", src:"the debate", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i dibattiti.\n'Dibattito pubblico' = public debate. 'Dibattito parlamentare' = parliamentary debate.",
       example:"A: Il dibattito sull'immigrazione e molto acceso.\nB: Servono fatti, non solo opinioni.\nA: Che bello! Congratulazioni!\nB: Grazie mille, sono davvero contento.\nA: Come vedi il futuro di questo ambito?\nB: Con cautela ottimistica, se si fanno le scelte giuste.",
       exampleSrc:"A: The debate on immigration is very heated.\nB: Facts are needed, not just opinions.\nA: How wonderful! Congratulations!\nB: Thank you so much, I am really happy.\nA: How do you see the future of this field?\nB: With cautious optimism, if the right choices are made.",
       funFact:"Italians are passionate debaters. The verb 'dibattere' means both to debate and to struggle. Public debates on television regularly feature guests talking over each other, reflecting a culture where verbal expression is highly valued."},

      {type:"teach", trg:"la propaganda", src:"the propaganda", pos:"noun", gender:"f",
       note:"Feminine noun. Biased information used to promote a political cause.\nOriginally a neutral term (from the Catholic Church's 'Propaganda Fide').",
       example:"A: La propaganda politica usa spesso le emozioni.\nB: Per questo e importante il pensiero critico.\nA: C'e qualcosa che posso fare?\nB: Grazie, per adesso va tutto bene.\nA: E una questione di cui si parla poco.\nB: Hai ragione, meriterebbe molta piu attenzione da parte dei media.",
       exampleSrc:"A: Political propaganda often uses emotions.\nB: That is why critical thinking is important.\nA: Is there anything I can do?\nB: Thanks, for now everything is fine.\nA: It is an issue that is rarely discussed.\nB: You are right, it would deserve much more attention from the media.",
       funFact:"The word 'propaganda' originated in Rome. Pope Gregory XV created the 'Sacra Congregatio de Propaganda Fide' (1622) to spread Catholicism. The term only acquired negative connotations in the 20th century through association with authoritarian regimes."},

      {type:"teach", trg:"il sondaggio", src:"the poll / survey", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i sondaggi.\n'Sondaggio d'opinione' = opinion poll. 'Sondaggio elettorale' = election poll.",
       example:"A: I sondaggi danno il partito al 30%.\nB: Ma i sondaggi possono sbagliare.\nA: Quando e successo?\nB: La settimana scorsa, di giovedi.\nA: Vorrei capire meglio i dettagli.\nB: Posso mandarti un articolo che spiega tutto molto bene.",
       exampleSrc:"A: The polls give the party 30%.\nB: But polls can be wrong.\nA: When did it happen?\nB: Last week, on Thursday.\nA: I would like to understand the details better.\nB: I can send you an article that explains everything very well.",
       funFact:"Italian law prohibits publishing election polls in the two weeks before a vote ('silenzio elettorale'). This 'cooling off' period is meant to let voters decide without last-minute polling influence."},

      {type:"mc",
       q:"Che cos'e il 'silenzio elettorale' in Italia?",
       opts:["Il divieto di pubblicare sondaggi nelle due settimane prima del voto","Il divieto di parlare di politica in pubblico","Un momento di silenzio nei seggi elettorali","La pausa tra un dibattito e l'altro"],
       ans:"Il divieto di pubblicare sondaggi nelle due settimane prima del voto",
       hint:"Italian law forbids publishing election polls for a specific period before voting. It aims to protect voters from last-minute influence."},

      {type:"teach", trg:"la manipolazione", src:"the manipulation", pos:"noun", gender:"f",
       note:"Feminine noun. 'Manipolazione mediatica' = media manipulation.\n'Manipolare' (verb) = to manipulate.",
       example:"A: La manipolazione delle immagini e sempre piu sofisticata.\nB: Con l'intelligenza artificiale, e quasi impossibile riconoscerla.\nA: Chi altro lo sa?\nB: Per adesso solo noi due e la famiglia.\nA: Che ruolo gioca la tecnologia in tutto questo?\nB: Fondamentale, sta trasformando completamente il settore.",
       exampleSrc:"A: Image manipulation is increasingly sophisticated.\nB: With artificial intelligence, it is almost impossible to detect it.\nA: Who else knows?\nB: For now just the two of us and the family.\nA: What role does technology play in all this?\nB: A fundamental one, it is completely transforming the sector.",
       funFact:"The rise of deepfakes ('deepfake' is used in Italian) has made media manipulation a top concern for Italian regulators. The Garante per la Privacy issued specific guidelines on synthetic media and identity protection."},

      {type:"teach", trg:"il pregiudizio mediatico", src:"the media bias", pos:"noun", gender:"m",
       note:"Masculine compound noun. The tendency of media to present news in a slanted way.\nAlso called 'parzialita dei media.'",
       example:"A: Ogni giornale ha un certo pregiudizio mediatico.\nB: Per questo conviene leggere fonti diverse.\nA: Lo faresti di nuovo?\nB: Assolutamente si, senza esitazione.\nA: Non avevo mai pensato a questo aspetto.\nB: E un punto di vista che molti trascurano, in effetti.",
       exampleSrc:"A: Every newspaper has some media bias.\nB: That is why it is worth reading different sources.\nA: Would you do it again?\nB: Absolutely yes, without hesitation.\nA: I had never thought about this aspect.\nB: It is a point of view that many overlook, in fact.",
       funFact:"Italian newspapers are traditionally aligned with political positions. Corriere della Sera leans center-moderate, La Repubblica leans center-left, Il Giornale leans right. Readers often choose papers matching their views, reinforcing their pregiudizio."},

      {type:"fb",
       s:"I {1} elettorali prevedono una vittoria del centrodestra.",
       a:["sondaggi"],
       opts:["sondaggi","dibattiti","editoriali","algoritmi"],
       hint:"Systematic surveys of public opinion before an election. They measure how people intend to vote.",
       sSrc:"The election {1} predict a center-right victory."},

      {type:"teach", trg:"il pensiero critico", src:"the critical thinking", pos:"noun", gender:"m",
       note:"Masculine compound noun. The ability to analyze information objectively.\n'Sviluppare il pensiero critico' = to develop critical thinking.",
       example:"A: Il pensiero critico e essenziale nell'era digitale.\nB: Bisogna insegnarlo fin dalla scuola primaria.\nA: E costato molto?\nB: Meno di quanto pensassi, per fortuna.\nA: E un argomento che mi sta a cuore.\nB: Si vede, e bello avere questa passione.",
       exampleSrc:"A: Critical thinking is essential in the digital era.\nB: It should be taught from primary school.\nA: Did it cost a lot?\nB: Less than I thought, fortunately.\nA: It is a topic I care about deeply.\nB: One can tell, it is nice to have that passion.",
       funFact:"Italy's 'Educazione Civica' (civic education) curriculum now includes media literacy and critical thinking. The goal is to help students navigate the flood of information and disinformation in the digital age."},

      {type:"mc",
       q:"Da dove viene originariamente la parola 'propaganda'?",
       opts:["Dalla prima guerra mondiale","Dalla Chiesa Cattolica, che creo un organo per diffondere la fede","Dal mondo della pubblicita commerciale","Dalla rivoluzione francese"],
       ans:"Dalla Chiesa Cattolica, che creo un organo per diffondere la fede",
       hint:"The Vatican created an organization in 1622 to spread Catholicism worldwide. Its name gave us the modern term for organized information campaigns."},

      {type:"match", pairs:[
        {trg:"opinione pubblica", src:"public opinion"},
        {trg:"dibattito", src:"debate"},
        {trg:"propaganda", src:"propaganda"},
        {trg:"sondaggio", src:"poll"},
        {trg:"manipolazione", src:"manipulation"}
      ]},

      {type:"fb",
       s:"Il {1} critico ci aiuta a distinguere i fatti dalle opinioni.",
       a:["pensiero"],
       opts:["pensiero","pregiudizio","sondaggio","dibattito"],
       hint:"The mental skill of analyzing and evaluating information objectively. Essential for navigating modern media.",
       sSrc:"Critical {1} helps us distinguish facts from opinions."},

      {type:"mc",
       q:"Perche conviene leggere giornali con posizioni politiche diverse?",
       opts:["Per trovare le notizie piu divertenti","Perche tutti i giornali mentono","Per avere una visione piu completa e ridurre il pregiudizio mediatico","Perche la legge lo richiede"],
       ans:"Per avere una visione piu completa e ridurre il pregiudizio mediatico",
       hint:"Every newspaper has some bias. Reading multiple perspectives gives you a fuller picture and helps counteract one-sided information."}
    ,{type:"match",pairs:[{trg:"la redazione",src:"the editorial office / newsroom"},{trg:"la cronaca",src:"the news report / chronicle"},{trg:"la privacy",src:"the privacy"}]}]}
  ]
};

export default UNIT_31;
