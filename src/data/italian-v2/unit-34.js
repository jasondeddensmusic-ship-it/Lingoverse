// Italian V2 Unit 34. Le relazioni internazionali (International Relations)
import BATCH8_L1 from './_batch8_u34_L01.js';
import BATCH7_L1 from './_batch7_u34_L01.js';
import BATCH6_L1 from './_batch6_u34_L01.js';
import BATCH5_L02 from './_batch5_u34_L02.js';
import BATCH5_L01 from './_batch5_u34_L01.js';
import BATCH3_L02 from './_batch3_u34_L02.js';
import BATCH3_L01 from './_batch3_u34_L01.js';
// Level: B2.3. CILS/CELI B2 aligned.

const UNIT_34 = {
  n:34, lang:"it", srcLang:"en", track:"v2",
  title:"Le relazioni internazionali", sub:"International Relations",
  icon:"🌐", level:"B2.3", color:"#7B5EE8",
  lessons:[
    // ─── Lesson 1: La diplomazia ───
    {id:"itv2_u34l1", title:"La diplomazia", icon:"🤝", xp:15, board:true, steps:[
      {type:"intro", title:"La diplomazia",
       desc:"Master the vocabulary of diplomacy, treaties, and international negotiations. These terms appear constantly in Italian news and political discourse about global affairs.",
       goals:["Describe diplomatic processes and institutions","Discuss treaties, alliances, and negotiations","Understand Italian foreign policy vocabulary"]},

      {type:"teach", trg:"la diplomazia", src:"diplomacy", pos:"noun", gender:"f",
       note:"Feminine noun. The art of managing international relations.\n'Diplomazia culturale' = cultural diplomacy. 'Canali diplomatici' = diplomatic channels.",
       example:"A: La diplomazia richiede pazienza e strategia.\nB: E spesso piu efficace della forza militare.\nA: E successo all'improvviso?\nB: Si, non me lo aspettavo per niente.\nA: Possiamo approfondire questo aspetto?\nB: Certo, e un tema che merita una discussione piu ampia.",
       exampleSrc:"A: Diplomacy requires patience and strategy.\nB: And it is often more effective than military force.\nA: Did it happen suddenly?\nB: Yes, I did not expect it at all.\nA: Can we explore this aspect further?\nB: Of course, it is a topic that deserves a broader discussion.",
       funFact:"The word 'diplomazia' comes from Greek 'diploma' (a folded document). Diplomatic passports in Italian are called 'passaporti diplomatici' and grant special legal immunity abroad."},

      {type:"teach", trg:"il trattato", src:"the treaty", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i trattati.\n'Firmare un trattato' = to sign a treaty. 'Trattato di pace' = peace treaty.",
       example:"A: I sei paesi hanno firmato il trattato a Roma nel 1957.\nB: E stato l'inizio della comunita europea.\nA: E una bella opportunita.\nB: Sono d'accordo, non voglio perdermela.\nA: C'e qualcosa che mi sfugge?\nB: Forse il fatto che il contesto storico e molto complesso.",
       exampleSrc:"A: The six countries signed the treaty in Rome in 1957.\nB: It was the beginning of the European community.\nA: It is a great opportunity.\nB: I agree, I do not want to miss it.\nA: Am I missing something?\nB: Perhaps the fact that the historical context is very complex.",
       funFact:"The Treaty of Rome (1957), signed at the Campidoglio, created the European Economic Community. Italy was a founding member alongside France, Germany, Belgium, the Netherlands, and Luxembourg."},

      {type:"teach", trg:"l'ambasciata", src:"the embassy", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le ambasciate.\n'L'ambasciatore' / 'l'ambasciatrice' = the ambassador.",
       example:"A: L'ambasciata italiana a Washington e molto attiva.\nB: Organizza eventi culturali ogni mese.\nA: Mi fa piacere sentirlo.\nB: Si, le cose stanno andando bene.\nA: Qual e la tua posizione in merito?\nB: Personalmente credo che serva un approccio piu equilibrato.",
       exampleSrc:"A: The Italian embassy in Washington is very active.\nB: It organizes cultural events every month.\nA: I am glad to hear it.\nB: Yes, things are going well.\nA: What is your position on the matter?\nB: Personally I believe a more balanced approach is needed.",
       funFact:"Italy maintains over 120 embassies worldwide plus an extensive network of consulates. Italian consulates abroad also serve the large Italian diaspora, estimated at over 6 million registered citizens living outside Italy."},

      {type:"teach", trg:"il negoziato", src:"the negotiation", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i negoziati.\n'Tavolo dei negoziati' = negotiating table. 'Negoziati di pace' = peace negotiations.",
       example:"A: I negoziati sono durati sei mesi.\nB: Ma finalmente hanno raggiunto un accordo.\nA: Hai altri programmi?\nB: No, per adesso mi concentro su questo.\nA: Credi che la situazione migliorera?\nB: Dipende dalle scelte che faremo nei prossimi mesi.",
       exampleSrc:"A: The negotiations lasted six months.\nB: But they finally reached an agreement.\nA: Do you have other plans?\nB: No, for now I am focusing on this.\nA: Do you think the situation will improve?\nB: It depends on the choices we make in the coming months.",
       funFact:"From Latin 'negotium' (business), literally 'not leisure' (nec + otium). Ancient Romans distinguished 'otium' (leisure, philosophy) from 'negotium' (business, practical affairs). Diplomacy fell under negotium."},

      {type:"teach", trg:"l'alleanza", src:"the alliance", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le alleanze.\n'Alleanza militare' = military alliance. 'Alleanza strategica' = strategic alliance.",
       example:"A: L'Italia fa parte di diverse alleanze internazionali.\nB: La NATO e l'Unione Europea sono le principali.\nA: Come posso aiutare?\nB: Potresti darmi una mano domani pomeriggio.\nA: Come si confronta con altri paesi?\nB: L'Italia ha le sue specificita, ma il trend e simile in Europa.",
       exampleSrc:"A: Italy is part of several international alliances.\nB: NATO and the European Union are the main ones.\nA: How can I help?\nB: You could give me a hand tomorrow afternoon.\nA: How does it compare with other countries?\nB: Italy has its own specificities, but the trend is similar in Europe.",
       funFact:"Italy joined NATO in 1949, just four years after the end of World War II. The shift from defeated Axis power to Western alliance member was one of the most dramatic foreign policy pivots of the 20th century."},
{type:"match",pairs:[{trg:"il trattato",src:"the treaty"},{trg:"l'ambasciata",src:"the embassy"},{trg:"il negoziato",src:"the negotiation"},{trg:"l'alleanza",src:"the alliance"}]},

      {type:"mc",
       q:"Come si chiama l'accordo formale firmato tra due o piu nazioni?",
       opts:["Un trattato","Un negoziato","Un'ambasciata","Un'alleanza"],
       ans:"Un trattato",
       hint:"A formal written agreement between nations. The one signed in Rome in 1957 launched the European project."},

      {type:"teach", trg:"la sovranita", src:"sovereignty", pos:"noun", gender:"f",
       note:"Feminine noun. Invariable (accented ending).\n'Sovranita nazionale' = national sovereignty. 'Cedere sovranita' = to cede sovereignty.",
       example:"A: L'integrazione europea limita la sovranita nazionale?\nB: Alcuni la vedono cosi, altri parlano di sovranita condivisa.\nA: Ne vale la pena?\nB: Decisamente si, te lo consiglio.\nA: Quali sono le conseguenze a lungo termine?\nB: Difficile dirlo, ma il cambiamento sara significativo.",
       exampleSrc:"A: Does European integration limit national sovereignty?\nB: Some see it that way, others speak of shared sovereignty.\nA: Is it worth it?\nB: Definitely yes, I recommend it.\nA: What are the long-term consequences?\nB: Hard to say, but the change will be significant.",
       funFact:"The debate over 'sovranita' is at the heart of Italian Euroscepticism. Parties across the political spectrum argue whether pooling sovereignty in Brussels strengthens or weakens Italy's ability to govern itself."},

      {type:"teach", trg:"la sanzione", src:"the sanction", pos:"noun", gender:"f",
       note:"Feminine noun. Plural: le sanzioni.\n'Imporre sanzioni' = to impose sanctions. 'Sanzioni economiche' = economic sanctions.",
       example:"A: Le sanzioni economiche hanno colpito duramente quel paese.\nB: Ma il governo non ha cambiato posizione.\nA: E anche la mia opinione.\nB: Bene, allora siamo d'accordo su questo punto.\nA: Dobbiamo restare aggiornati su questo tema.\nB: Assolutamente, e in continua evoluzione.",
       exampleSrc:"A: The economic sanctions hit that country hard.\nB: But the government did not change its position.\nA: That is my opinion too.\nB: Good, then we agree on this point.\nA: We need to stay updated on this topic.\nB: Absolutely, it is constantly evolving.",
       funFact:"'Sanzione' in Italian has a dual meaning: a penalty/punishment (most common) but also formal ratification of a law (the monarch's 'sanzione regia' in historical usage). Context tells which is intended."},

      {type:"teach", trg:"il conflitto", src:"the conflict", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i conflitti.\n'Conflitto armato' = armed conflict. 'Risoluzione dei conflitti' = conflict resolution.",
       example:"A: Il conflitto nel Medio Oriente continua senza tregua.\nB: La comunita internazionale cerca una soluzione diplomatica.\nA: Dove lo hai scoperto?\nB: Su internet, in un articolo molto interessante.\nA: Come vedi il futuro di questo ambito?\nB: Con cautela ottimistica, se si fanno le scelte giuste.",
       exampleSrc:"A: The conflict in the Middle East continues without respite.\nB: The international community is seeking a diplomatic solution.\nA: Where did you discover it?\nB: On the internet, in a very interesting article.\nA: How do you see the future of this field?\nB: With cautious optimism, if the right choices are made.",
       funFact:"Article 11 of the Italian Constitution states that Italy 'rejects war as an instrument of aggression.' This clause has shaped decades of debate about Italian military participation in international operations."},

      {type:"fb",
       s:"L'Italia fa parte della NATO e di altre {1} internazionali.",
       a:["alleanze"],
       opts:["alleanze","sanzioni","ambasciate","sovranita"],
       hint:"Groups of countries that agree to cooperate and defend each other. Military or strategic partnerships between nations.",
       sSrc:"Italy is part of NATO and other international {1}."},

      {type:"teach", trg:"la mediazione", src:"mediation", pos:"noun", gender:"f",
       note:"Feminine noun. The process of resolving disputes through a neutral third party.\n'Il mediatore' / 'la mediatrice' = the mediator.",
       example:"A: L'ONU ha proposto una mediazione tra le due parti.\nB: E l'unica via per evitare il conflitto.\nA: E un buon segno.\nB: Si, sono ottimista per il futuro.\nA: E una questione di cui si parla poco.\nB: Hai ragione, meriterebbe molta piu attenzione da parte dei media.",
       exampleSrc:"A: The UN proposed mediation between the two sides.\nB: It is the only way to avoid conflict.\nA: It is a good sign.\nB: Yes, I am optimistic about the future.\nA: It is an issue that is rarely discussed.\nB: You are right, it would deserve much more attention from the media.",
       funFact:"Italy has historically played a mediation role in Mediterranean affairs, leveraging its geographic position and cultural ties. Italian is still one of the working languages of the Vatican's diplomatic service."},

      {type:"teach", trg:"ratificare", src:"to ratify", pos:"verb", gender:null,
       note:"Regular -are verb. Io ratifico, tu ratifichi.\n'Ratificare un trattato' = to ratify a treaty. 'La ratifica' (noun) = ratification.",
       example:"A: Il parlamento deve ancora ratificare l'accordo.\nB: Senza la ratifica, il trattato non entra in vigore.\nA: Che bello! Congratulazioni!\nB: Grazie mille, sono davvero contento.\nA: Vorrei capire meglio i dettagli.\nB: Posso mandarti un articolo che spiega tutto molto bene.",
       exampleSrc:"A: Parliament still has to ratify the agreement.\nB: Without ratification, the treaty does not enter into force.\nA: How wonderful! Congratulations!\nB: Thank you so much, I am really happy.\nA: I would like to understand the details better.\nB: I can send you an article that explains everything very well.",
       funFact:"In Italy, international treaties are ratified by Parliament with an ordinary law. The Constitution requires ratification for treaties involving territory, finances, or international organizations."},

      {type:"teach", trg:"la tregua", src:"the truce / ceasefire", pos:"noun", gender:"f",
       note:"Feminine noun. A temporary halt to fighting.\n'Dichiarare una tregua' = to declare a truce.",
       example:"A: Le due parti hanno accettato una tregua di trenta giorni.\nB: Speriamo che porti a negoziati di pace.\nA: C'e qualcosa che posso fare?\nB: Grazie, per adesso va tutto bene.\nA: Che ruolo gioca la tecnologia in tutto questo?\nB: Fondamentale, sta trasformando completamente il settore.",
       exampleSrc:"A: The two sides accepted a thirty-day truce.\nB: Let us hope it leads to peace negotiations.\nA: Is there anything I can do?\nB: Thanks, for now everything is fine.\nA: What role does technology play in all this?\nB: A fundamental one, it is completely transforming the sector.",
       funFact:"From Old French 'treve,' which itself came from Germanic roots. Medieval Italian city-states frequently negotiated tregue during their constant inter-city conflicts, often brokered by the Pope."},

      {type:"mc",
       q:"Che cos'e la 'sovranita nazionale'?",
       opts:["L'obbligo costituzionale di seguire le direttive e leggi europee","Il diritto di un paese di governare se stesso","La capacita giuridica di imporre sanzioni ad altri stati","Il numero complessivo di ambasciate di un paese nel mondo"],
       ans:"Il diritto di un paese di governare se stesso",
       hint:"The right of a nation to make its own decisions and govern its own territory without external interference."},

      {type:"teach", trg:"il multilateralismo", src:"multilateralism", pos:"noun", gender:"m",
       note:"Masculine noun. Cooperation among three or more countries.\nOpposite: 'l'unilateralismo' (going it alone).",
       example:"A: L'Italia sostiene il multilateralismo nelle relazioni internazionali.\nB: I problemi globali richiedono risposte collettive.\nA: Quando e successo?\nB: La settimana scorsa, di giovedi.\nA: Non avevo mai pensato a questo aspetto.\nB: E un punto di vista che molti trascurano, in effetti.",
       exampleSrc:"A: Italy supports multilateralism in international relations.\nB: Global problems require collective responses.\nA: When did it happen?\nB: Last week, on Thursday.\nA: I had never thought about this aspect.\nB: It is a point of view that many overlook, in fact.",
       funFact:"Italy is a strong supporter of multilateral institutions: UN, EU, NATO, G7, G20. Rome hosted the G20 summit in 2021, emphasizing the Italian commitment to multilateral cooperation."},

      {type:"match", pairs:[
        {trg:"diplomazia", src:"diplomacy"},
        {trg:"trattato", src:"treaty"},
        {trg:"sanzione", src:"sanction"},
        {trg:"tregua", src:"truce"},
        {trg:"negoziato", src:"negotiation"}
      ]},

      {type:"fb",
       s:"Il parlamento deve {1} il trattato prima che entri in vigore.",
       a:["ratificare"],
       opts:["ratificare","mediare","negoziare","sanzionare"],
       hint:"The formal parliamentary approval that makes a treaty legally binding. Without this step, the agreement has no force.",
       sSrc:"Parliament must {1} the treaty before it enters into force."},

      {type:"mc",
       q:"Quale articolo della Costituzione italiana ripudia la guerra come strumento di aggressione?",
       opts:["Articolo 1","Articolo 21","Articolo 11","Articolo 48"],
       ans:"Articolo 11",
       hint:"This constitutional article explicitly rejects war as an instrument of offense against other nations' freedom."},

      {type:"fb",
       s:"Un {1} armato tra due nazioni richiede una risposta diplomatica immediata.",
       a:["conflitto"],
       opts:["conflitto","trattato","negoziato","accordo"],
       hint:"Armed confrontation or dispute between two opposing sides. Can be resolved through diplomacy or escalate to war.",
       sSrc:"An armed {1} between two nations requires an immediate diplomatic response."},

      {type:"mc",
       q:"Che ruolo svolge un mediatore in una disputa internazionale?",
       opts:["Decide in modo vincolante chi ha ragione e chi ha torto","Impone sanzioni economiche alla parte ritenuta piu debole","Firma il trattato di pace in rappresentanza dei governi coinvolti","Facilita il dialogo tra le parti come terzo neutrale"],
       ans:"Facilita il dialogo tra le parti come terzo neutrale",
       hint:"An unbiased go-between who helps disputing sides communicate and find common ground, without imposing a solution."},

      {type:"fb",
       s:"L'Italia sostiene il {1} nelle organizzazioni internazionali come ONU e G20.",
       a:["multilateralismo"],
       opts:["multilateralismo","unilateralismo","bilateralismo","relativismo"],
       hint:"The principle that global problems are best solved through cooperation among many nations rather than by any single country acting alone.",
       sSrc:"Italy supports {1} in international organizations like the UN and G20."}
    ]},

    // ─── Lesson 2: L'Unione Europea e le istituzioni ───
    {id:"itv2_u34l2", title:"L'Europa unita", icon:"🇪🇺", xp:15, board:true, steps:[
      {type:"intro", title:"L'Unione Europea e le istituzioni",
       desc:"Learn the vocabulary of European institutions, EU governance, and Italy's role in the European project. Essential for understanding Italian political news and debate.",
       goals:["Name major EU institutions and their functions","Discuss European integration and Italian participation","Understand vocabulary of international governance"]},

      {type:"teach", trg:"l'Unione Europea", src:"the European Union", pos:"noun", gender:"f",
       note:"Feminine noun. Abbreviated UE (not EU in Italian).\n'Stato membro dell'UE' = EU member state.",
       example:"A: L'Unione Europea ha ventisette stati membri.\nB: L'Italia e stata tra i fondatori nel 1957.\nA: Chi altro lo sa?\nB: Per adesso solo noi due e la famiglia.\nA: E un argomento che mi sta a cuore.\nB: Si vede, e bello avere questa passione.",
       exampleSrc:"A: The European Union has twenty-seven member states.\nB: Italy was among the founders in 1957.\nA: Who else knows?\nB: For now just the two of us and the family.\nA: It is a topic I care about deeply.\nB: One can tell, it is nice to have that passion.",
       funFact:"Italy is a founding member of the EU and one of its largest economies. The Treaty of Rome, signed in the Campidoglio building in 1957, is considered the birth certificate of European integration."},

      {type:"teach", trg:"il parlamento europeo", src:"the European Parliament", pos:"noun", gender:"m",
       note:"Masculine noun. The directly elected legislative body of the EU.\nMembers are called 'eurodeputati' or 'europarlamentari.'",
       example:"A: Il parlamento europeo ha sede a Strasburgo e a Bruxelles.\nB: Gli eurodeputati italiani sono settantasei.\nA: Lo faresti di nuovo?\nB: Assolutamente si, senza esitazione.\nA: Mi piacerebbe saperne di piu.\nB: Con piacere, possiamo continuare la prossima volta.",
       exampleSrc:"A: The European Parliament is based in Strasbourg and Brussels.\nB: The Italian MEPs number seventy-six.\nA: Would you do it again?\nB: Absolutely yes, without hesitation.\nA: I would like to know more.\nB: With pleasure, we can continue next time.",
       funFact:"Italy elects 76 Members of European Parliament, the third largest national delegation after Germany (96) and France (81). European elections traditionally have low turnout in Italy, around 55%."},

      {type:"teach", trg:"la commissione", src:"the commission", pos:"noun", gender:"f",
       note:"Feminine noun. 'La Commissione europea' = the European Commission.\n'Il commissario' = the commissioner.",
       example:"A: La Commissione europea ha proposto nuove regole ambientali.\nB: Ogni stato membro dovra adattarsi.\nA: E costato molto?\nB: Meno di quanto pensassi, per fortuna.\nA: C'e una soluzione realistica?\nB: Non semplice, ma con la collaborazione di tutti e possibile.",
       exampleSrc:"A: The European Commission proposed new environmental rules.\nB: Every member state will have to adapt.\nA: Did it cost a lot?\nB: Less than I thought, fortunately.\nA: Is there a realistic solution?\nB: Not simple, but with everyone's collaboration it is possible.",
       funFact:"Each EU member state nominates one commissioner. Italian commissioners have held influential portfolios including economy, trade, and competition. The Commission proposes EU legislation; it does not pass it."},

      {type:"teach", trg:"la direttiva", src:"the directive", pos:"noun", gender:"f",
       note:"Feminine noun. An EU law that member states must implement.\n'Recepire una direttiva' = to transpose a directive into national law.",
       example:"A: L'Italia deve recepire la direttiva entro sei mesi.\nB: Il ritardo comportera sanzioni.\nA: Come hai saputo?\nB: Me l'ha detto un amico ieri sera.\nA: Ne hai discusso con altri colleghi?\nB: Si, e il consenso generale e che serve un intervento strutturale.",
       exampleSrc:"A: Italy must transpose the directive within six months.\nB: The delay will result in sanctions.\nA: How did you find out?\nB: A friend told me last night.\nA: Have you discussed it with other colleagues?\nB: Yes, and the general consensus is that structural intervention is needed.",
       funFact:"Italy has historically been one of the slowest EU countries in transposing directives into national law, earning frequent infringement proceedings from the European Commission."},

      {type:"teach", trg:"il regolamento", src:"the regulation", pos:"noun", gender:"m",
       note:"Masculine noun. An EU law directly applicable in all member states.\nNo national transposition needed, unlike a direttiva.",
       example:"A: Il nuovo regolamento sulla privacy e entrato subito in vigore.\nB: Senza bisogno di leggi nazionali di recepimento.\nA: Cosa ne pensi?\nB: Secondo me e un'ottima scelta.\nA: Cosa si potrebbe fare di diverso?\nB: Investire di piu nella formazione e nella prevenzione.",
       exampleSrc:"A: The new privacy regulation entered into force immediately.\nB: Without the need for national transposition laws.\nA: What do you think?\nB: In my opinion it is an excellent choice.\nA: What could be done differently?\nB: Invest more in education and prevention.",
       funFact:"The key difference: a 'regolamento' applies directly (like the GDPR), while a 'direttiva' must be converted into national law. Italy's dual legal system makes this distinction very practical."},
{type:"match",pairs:[{trg:"il parlamento europeo",src:"the European Parliament"},{trg:"la commissione",src:"the commission"},{trg:"la direttiva",src:"the directive"},{trg:"il regolamento",src:"the regulation"}]},

      {type:"mc",
       q:"Qual e la differenza principale tra una direttiva e un regolamento dell'UE?",
       opts:["Il regolamento si applica direttamente, la direttiva va recepita","La direttiva riguarda solo l'economia","La direttiva e piu importante del regolamento","Il regolamento e solo una raccomandazione"],
       ans:"Il regolamento si applica direttamente, la direttiva va recepita",
       hint:"One type of EU law applies automatically in all countries. The other must first be converted into each nation's own laws."},

      {type:"teach", trg:"l'integrazione", src:"integration", pos:"noun", gender:"f",
       note:"Feminine noun. 'Integrazione europea' = European integration.\n'Integrazione economica/politica' = economic/political integration.",
       example:"A: L'integrazione europea e un processo ancora in corso.\nB: Alcuni vogliono piu integrazione, altri meno.\nA: Pensi di continuare?\nB: Si, mi piace molto e voglio migliorare.\nA: E un problema anche in altri settori?\nB: Si, purtroppo e trasversale e riguarda molti ambiti.",
       exampleSrc:"A: European integration is a process still underway.\nB: Some want more integration, others less.\nA: Do you plan to continue?\nB: Yes, I like it a lot and I want to improve.\nA: Is it a problem in other sectors too?\nB: Yes, unfortunately it cuts across many areas.",
       funFact:"Italy's enthusiasm for European integration has fluctuated. In the 1990s, Italians were among the most pro-European citizens. Economic crises and migration debates have since created a more divided public opinion."},

      {type:"teach", trg:"il vertice", src:"the summit", pos:"noun", gender:"m",
       note:"Masculine noun. Plural: i vertici.\n'Vertice europeo' = European summit. Also means 'top/peak.'",
       example:"A: Il vertice europeo si terra a Bruxelles la prossima settimana.\nB: I leader discuteranno della politica energetica.\nA: E stato difficile?\nB: Un po', ma alla fine ne e valsa la pena.\nA: Qual e l'opinione degli esperti?\nB: Ci sono posizioni diverse, ma la maggioranza concorda su un punto.",
       exampleSrc:"A: The European summit will be held in Brussels next week.\nB: The leaders will discuss energy policy.\nA: Was it difficult?\nB: A little, but in the end it was worth it.\nA: What is the experts' opinion?\nB: There are different positions, but the majority agrees on one point.",
       funFact:"The word 'vertice' literally means 'peak' or 'top.' A political summit is metaphorically a meeting at the top. EU summits are formally called 'Consigli europei' but Italians commonly say 'il vertice.'"},

      {type:"teach", trg:"la sussidiarieta", src:"subsidiarity", pos:"noun", gender:"f",
       note:"Feminine noun. The principle that decisions should be made at the lowest effective level.\n'Principio di sussidiarieta' = subsidiarity principle.",
       example:"A: La sussidiarieta e un principio fondamentale dell'UE.\nB: Le decisioni vanno prese il piu vicino possibile ai cittadini.\nA: E la prima volta?\nB: No, l'ho fatto anche l'anno scorso.\nA: E un fenomeno recente?\nB: Non proprio, ha radici che risalgono a decenni fa.",
       exampleSrc:"A: Subsidiarity is a fundamental EU principle.\nB: Decisions should be made as close to citizens as possible.\nA: Is it the first time?\nB: No, I did it last year too.\nA: Is it a recent phenomenon?\nB: Not exactly, it has roots that go back decades.",
       funFact:"Subsidiarity has deep roots in Catholic social teaching, which influenced Italian politics heavily. The concept entered EU law with the Maastricht Treaty (1992) to balance centralization with local governance."},

      {type:"fb",
       s:"La Commissione europea ha proposto una nuova {1} sulla protezione dei dati.",
       a:["direttiva"],
       opts:["direttiva","sovranita","alleanza","sanzione"],
       hint:"This type of EU law sets goals that each member state must achieve through its own national legislation.",
       sSrc:"The European Commission proposed a new {1} on data protection."},

      {type:"teach", trg:"il bilancio europeo", src:"the EU budget", pos:"noun", gender:"m",
       note:"Masculine noun. The annual financial plan of the European Union.\n'Contributo al bilancio' = contribution to the budget.",
       example:"A: Le trattative sul bilancio europeo sono sempre difficili.\nB: Ogni paese vuole ricevere piu di quanto versa.\nA: Come ti sei trovato?\nB: Molto bene, lo consiglio a tutti.\nA: Possiamo approfondire questo aspetto?\nB: Certo, e un tema che merita una discussione piu ampia.",
       exampleSrc:"A: Negotiations on the EU budget are always difficult.\nB: Every country wants to receive more than it pays in.\nA: How did you find it?\nB: Very well, I recommend it to everyone.\nA: Can we explore this aspect further?\nB: Of course, it is a topic that deserves a broader discussion.",
       funFact:"Italy is the third-largest net contributor to the EU budget after Germany and France. Debates about 'quanto paghiamo a Bruxelles' (how much we pay Brussels) are a constant feature of Italian political discourse."},

      {type:"teach", trg:"il diritto di veto", src:"the right of veto", pos:"noun", gender:"m",
       note:"Masculine noun (compound). The power to block a decision.\n'Esercitare il diritto di veto' = to exercise the veto.",
       example:"A: Un solo paese puo bloccare la decisione con il diritto di veto.\nB: Per questo molti chiedono di eliminarlo.\nA: Da quanto tempo?\nB: Da qualche mese ormai.\nA: C'e qualcosa che mi sfugge?\nB: Forse il fatto che il contesto storico e molto complesso.",
       exampleSrc:"A: A single country can block the decision with the right of veto.\nB: That is why many call for its elimination.\nA: For how long?\nB: For a few months now.\nA: Am I missing something?\nB: Perhaps the fact that the historical context is very complex.",
       funFact:"In the EU Council, unanimity is required for foreign policy and taxation decisions, giving each member state an effective veto. Italy has historically opposed eliminating this right in sensitive areas."},

      {type:"teach", trg:"la coesione", src:"cohesion", pos:"noun", gender:"f",
       note:"Feminine noun. Unity and solidarity within a group.\n'Fondi di coesione' = cohesion funds (EU regional development money).",
       example:"A: I fondi di coesione aiutano le regioni piu povere.\nB: Il Mezzogiorno italiano ne beneficia molto.\nA: In che senso?\nB: Nel senso che bisogna pensarci bene prima di decidere.\nA: Qual e la tua posizione in merito?\nB: Personalmente credo che serva un approccio piu equilibrato.",
       exampleSrc:"A: Cohesion funds help the poorest regions.\nB: Southern Italy benefits greatly from them.\nA: In what sense?\nB: In the sense that you need to think carefully before deciding.\nA: What is your position on the matter?\nB: Personally I believe a more balanced approach is needed.",
       funFact:"Italy's southern regions (Mezzogiorno) are major recipients of EU cohesion funds, designed to reduce economic disparities. The north-south divide within Italy mirrors the broader EU divide between richer and poorer members."},

      {type:"mc",
       q:"Che cosa sono i 'fondi di coesione' dell'UE?",
       opts:["Sanzioni economiche contro paesi inadempienti","Denaro per ridurre le disparita regionali","Contributi obbligatori per il bilancio militare","Premi finanziari per i paesi piu virtuosi"],
       ans:"Denaro per ridurre le disparita regionali",
       hint:"These EU funds flow to poorer regions to help them develop. Southern Italy is one of the major beneficiaries."},

      {type:"match", pairs:[
        {trg:"parlamento europeo", src:"European Parliament"},
        {trg:"commissione", src:"commission"},
        {trg:"direttiva", src:"directive"},
        {trg:"vertice", src:"summit"},
        {trg:"coesione", src:"cohesion"}
      ]},

      {type:"teach", trg:"negoziare", src:"to negotiate", pos:"verb", gender:null,
       note:"Regular -are verb. Io negozio, tu negozi.\n'Negoziare un accordo' = to negotiate an agreement.",
       example:"A: I ministri stanno negoziando un nuovo accordo commerciale.\nB: Le trattative potrebbero durare mesi.\nA: Interessante, non lo sapevo.\nB: Si, e una cosa che pochi sanno.\nA: Credi che la situazione migliorera?\nB: Dipende dalle scelte che faremo nei prossimi mesi.",
       exampleSrc:"A: The ministers are negotiating a new trade agreement.\nB: The talks could last months.\nA: Interesting, I did not know that.\nB: Yes, it is something few people know.\nA: Do you think the situation will improve?\nB: It depends on the choices we make in the coming months.",
       funFact:"'Negoziare' and 'il negozio' (shop) share the same Latin root 'negotium' (business). Both involve transactions, though at very different scales: one between nations, the other between customer and shopkeeper."},

      {type:"fb",
       s:"Al {1} europeo di Bruxelles, i leader hanno discusso la politica energetica.",
       a:["vertice"],
       opts:["vertice","parlamento","bilancio","regolamento"],
       hint:"A high-level meeting of national leaders. Literally means 'peak' or 'top' in Italian.",
       sSrc:"At the European {1} in Brussels, the leaders discussed energy policy."},

      {type:"mc",
       q:"Quanti stati membri ha l'Unione Europea?",
       opts:["Ventiquattro","Venticinque","Ventisette","Trenta"],
       ans:"Ventisette",
       hint:"After the UK left in 2020, this number went down by one from twenty-eight. Count from the original six founders."},

      {type:"mc",
       q:"Cosa descrive il termine 'integrazione europea'?",
       opts:["La traduzione simultanea di leggi in tutte le lingue ufficiali dell'UE","Il sistema bancario comune che unifica la politica monetaria dell'eurozona","La politica di accoglienza dei migranti che regola i flussi tra Stati membri","Il processo attraverso cui i paesi europei si uniscono piu strettamente"],
       ans:"Il processo attraverso cui i paesi europei si uniscono piu strettamente",
       hint:"An ongoing process: countries deepening economic and political bonds over decades. Italy was among the first to embrace it in 1957."},

      {type:"fb",
       s:"La {1} garantisce che le decisioni vengano prese al livello di governo piu appropriato.",
       a:["sussidiarieta"],
       opts:["sussidiarieta","coesione","sovranita","mediazione"],
       hint:"An EU and Catholic social teaching principle: central authorities should act only when local or national levels cannot handle matters effectively.",
       sSrc:"{1} ensures that decisions are taken at the most appropriate level of government."},

      {type:"mc",
       q:"Qual e l'effetto pratico del diritto di veto nel Consiglio dell'UE?",
       opts:["Permette a un singolo paese di bloccare una decisione","Consente a un paese di accelerare il processo decisionale","Obbliga la Commissione europea a rifare la sua proposta","Aumenta il peso del voto nel parlamento europeo"],
       ans:"Permette a un singolo paese di bloccare una decisione",
       hint:"When unanimity is required, one dissenting nation can stop the whole council. Many want to remove this power for foreign policy votes."},

      {type:"fb",
       s:"I ministri stanno {1} un nuovo accordo commerciale con il Canada.",
       a:["negoziando"],
       opts:["negoziando","ratificando","mediando","sanzionando"],
       hint:"The gerund form of the verb meaning to hold talks and work toward an agreement between parties. From Latin 'negotium' (business).",
       sSrc:"The ministers are {1} a new trade agreement with Canada."}
    ,{type:"match",pairs:[{trg:"la sovranita",src:"sovereignty"},{trg:"la mediazione",src:"mediation"},{trg:"negoziare",src:"to negotiate"}]}]}
  ]
};
export default UNIT_34;
