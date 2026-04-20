// Batch 3 — Unit 30 Lesson (Advanced Subjunctive: Rare Triggers & Literary Uses)
const BATCH3_L_1 = {
  id:"itv2_u30l_b3_1", title:"Costruzioni rare del congiuntivo", icon:"📜", xp:15, board:true,
  steps:[
    {type:"intro", title:"Costruzioni rare del congiuntivo",
     desc:"Master rare subjunctive triggers and literary constructions. These advanced patterns appear in formal writing, journalism, and educated speech.",
     goals:["Use rare subjunctive triggers correctly","Recognize literary subjunctive constructions","Apply the subjunctive in formal and academic contexts"]},

    {type:"teach", trg:"chiunque", src:"whoever / anyone who", pos:"pron", gender:null,
     note:"Indefinite pronoun requiring the congiuntivo.\n'Chiunque venga' = whoever comes. Always triggers subjunctive.",
     example:"A: Chiunque abbia visto l'incidente contatti la polizia.\nB: Anche le informazioni più piccole sono utili.",
     exampleSrc:"A: Whoever witnessed the accident, contact the police.\nB: Even the smallest information is useful.",
     funFact:"'Chiunque' always triggers the subjunctive because it refers to an unknown, unidentified person. The certainty of identity is absent, which is exactly what the subjunctive mood expresses in Italian."},

    {type:"teach", trg:"ovunque", src:"wherever", pos:"adv", gender:null,
     note:"Adverb requiring the congiuntivo.\n'Ovunque tu vada' = wherever you go. Also: 'dovunque' (synonym).",
     example:"A: Ovunque tu vada, ricordati delle tue radici.\nB: L'identità non si perde con la distanza.",
     exampleSrc:"A: Wherever you go, remember your roots.\nB: Identity is not lost with distance.",
     funFact:"'Ovunque' and 'dovunque' are interchangeable in modern Italian. Both require the subjunctive because the place is indefinite and unknown. The construction echoes a poetic tradition stretching back to Petrarch's love sonnets."},

    {type:"teach", trg:"qualunque", src:"whatever / whichever", pos:"adj", gender:null,
     note:"Adjective requiring the congiuntivo when introducing a clause.\n'Qualunque cosa tu dica' = whatever you say.",
     example:"A: Qualunque decisione tu prenda, ti sostero.\nB: L'importante e che sia una scelta consapevole.",
     exampleSrc:"A: Whatever decision you make, I will support you.\nB: The important thing is that it be a conscious choice.",
     funFact:"'Qualunque' carries a nuance of indifference: it does not matter which one. This semantic neutrality makes it perfect for expressing unconditional acceptance. In politics, 'qualunquismo' means apathetic indifference to political issues."},

    {type:"teach", trg:"comunque", src:"however / in any case", pos:"conj", gender:null,
     note:"Conjunction. When meaning 'however it may be,' takes the congiuntivo.\n'Comunque vada' = however it goes. As 'in any case,' takes the indicative.",
     example:"A: Comunque vada l'esame, hai studiato molto.\nB: Dovresti essere fiero di te stesso.",
     exampleSrc:"A: However the exam goes, you have studied a lot.\nB: You should be proud of yourself.",
     funFact:"'Comunque' has dual behavior: with subjunctive, it means 'however' (indefinite manner); with indicative, it means 'anyway/in any case' (assertive). This subtle distinction marks the difference between uncertainty and resignation."},

    {type:"teach", trg:"per quanto", src:"however much / no matter how", pos:"conj", gender:null,
     note:"Concessive conjunction requiring the congiuntivo.\n'Per quanto mi sforzi' = no matter how hard I try.",
     example:"A: Per quanto studiassi, non riuscivo a capire la fisica.\nB: A volte serve un approccio diverso.",
     exampleSrc:"A: No matter how much I studied, I could not understand physics.\nB: Sometimes a different approach is needed.",
     funFact:"'Per quanto' introduces a concessive clause expressing an effort that proves insufficient. It is more emphatic than 'benché' because it highlights the intensity of the attempt. Common in academic and journalistic writing."},

    {type:"mc",
     q:"Quale parola richiede SEMPRE il congiuntivo?",
     opts:["Quando","Perche","Chiunque","Mentre"],
     ans:"Chiunque",
     hint:"This indefinite pronoun always triggers the subjunctive because it refers to an unknown, unidentified person."},

    {type:"teach", trg:"a patto che", src:"on condition that", pos:"conj", gender:null,
     note:"Conjunction requiring the congiuntivo. Synonym of 'purche.'\n'A patto che tu venga' = on condition that you come.",
     example:"A: Ti aiuto, a patto che tu faccia la tua parte.\nB: Accordo fatto. Iniziamo domani.",
     exampleSrc:"A: I will help you, on condition that you do your part.\nB: It is a deal. We start tomorrow.",
     funFact:"'A patto che' literally means 'at the pact that,' revealing its contractual origins. Like 'purche,' it sets a non-negotiable condition. In legal Italian, it appears frequently in clauses specifying requirements for agreements."},

    {type:"teach", trg:"ammesso che", src:"assuming that / granted that", pos:"conj", gender:null,
     note:"Conjunction requiring the congiuntivo. Introduces a hypothetical assumption.\n'Ammesso che sia vero' = assuming it is true.",
     example:"A: Ammesso che le cifre siano corrette, il progetto e sostenibile.\nB: Ma dobbiamo verificare i dati.",
     exampleSrc:"A: Assuming the figures are correct, the project is sustainable.\nB: But we must verify the data.",
     funFact:"'Ammesso che' (from 'ammettere' = to admit) introduces a conditional acceptance: we tentatively grant the premise but reserve judgment. It is a favorite construction in Italian academic argumentation and debate."},

    {type:"teach", trg:"senza che", src:"without (someone doing something)", pos:"conj", gender:null,
     note:"Conjunction requiring the congiuntivo.\n'Senza che nessuno se ne accorga' = without anyone noticing.",
     example:"A: E uscito senza che nessuno lo vedesse.\nB: Come ha fatto a passare inosservato?",
     exampleSrc:"A: He left without anyone seeing him.\nB: How did he manage to go unnoticed?",
     funFact:"'Senza che' takes the subjunctive because the action in the subordinate clause is negated (it did not happen). When the subjects are the same, Italian uses the infinitive instead: 'E uscito senza parlare' (He left without speaking)."},

    {type:"fb",
     s:"{1} tu vada, porterai sempre la tua cultura con te.",
     a:["Ovunque"],
     opts:["Ovunque","Quando","Perche","Mentre"],
     hint:"An adverb meaning 'wherever.' It always requires the subjunctive because the place is indefinite and unknown.",
     sSrc:"{1} you go, you will always carry your culture with you."},

    {type:"teach", trg:"supposto che", src:"supposing that", pos:"conj", gender:null,
     note:"Conjunction requiring the congiuntivo.\n'Supposto che piova' = supposing it rains. Similar to 'ammesso che.'",
     example:"A: Supposto che il treno sia in orario, arriveremo alle dieci.\nB: Ma i treni italiani non sono sempre puntuali.",
     exampleSrc:"A: Supposing the train is on time, we will arrive at ten.\nB: But Italian trains are not always punctual.",
     funFact:"'Supposto che' introduces a hypothesis whose truth is uncertain. Italian has a remarkably rich inventory of such conjunctions: ammesso che, supposto che, posto che, dato che (indicative!), nel caso che. Each carries subtle shades of certainty."},

    {type:"teach", trg:"nel caso che", src:"in case / in the event that", pos:"conj", gender:null,
     note:"Conjunction requiring the congiuntivo.\n'Nel caso che piova' = in case it rains.\nAlternative: 'caso mai' (informal).",
     example:"A: Porta l'ombrello, nel caso che piova.\nB: Le previsioni non sono affidabili oggi.",
     exampleSrc:"A: Bring the umbrella, in case it rains.\nB: The forecast is not reliable today.",
     funFact:"'Caso mai' is the informal version of 'nel caso che,' used constantly in spoken Italian without the subjunctive: 'Caso mai piove, prendo l'ombrello.' The register difference is significant: formal writing demands 'nel caso che' + subjunctive."},

    {type:"teach", trg:"malgrado", src:"despite / in spite of", pos:"conj", gender:null,
     note:"Conjunction requiring the congiuntivo. Synonym of 'nonostante.'\n'Malgrado sia tardi' = despite it being late.",
     example:"A: Malgrado fosse stanco, continuo a lavorare fino a mezzanotte.\nB: La scadenza era il giorno dopo.",
     exampleSrc:"A: Despite being tired, he continued working until midnight.\nB: The deadline was the next day.",
     funFact:"'Malgrado' (from French 'malgre') and 'nonostante' are fully interchangeable concessive conjunctions. Italian's abundance of concessive forms reflects the language's love of nuanced expression and elegant variation."},

    {type:"mc",
     q:"Che differenza c'è tra 'ammesso che' e 'dato che' in italiano?",
     opts:["Non c'è nessuna differenza: sono perfetti sinonimi intercambiabili","'Ammesso che' richiede il congiuntivo ed esprime dubbio, 'dato che' richiede l'indicativo ed esprime certezza","'Dato che' e più formale di 'ammesso che' nella scrittura accademica","'Ammesso che' si usa solo nella lingua parlata, 'dato che' solo nello scritto"],
     ans:"'Ammesso che' richiede il congiuntivo ed esprime dubbio, 'dato che' richiede l'indicativo ed esprime certezza",
     hint:"One tentatively accepts a premise (maybe true, maybe not). The other states a fact taken as given."},

    {type:"teach", trg:"per quanto ne sappia", src:"as far as I know", pos:"adv", gender:null,
     note:"Fixed expression using the present subjunctive of 'sapere.'\nFormal alternative to 'per quel che so' (indicative, less formal).",
     example:"A: Per quanto ne sappia, la riunione e stata annullata.\nB: Ma potrei sbagliarmi, verifica con il capo.",
     exampleSrc:"A: As far as I know, the meeting was cancelled.\nB: But I could be wrong, check with the boss.",
     funFact:"This expression perfectly illustrates the subjunctive's function: it hedges knowledge claims. By using 'sappia' (subjunctive) instead of 'so' (indicative), the speaker signals that their information might be incomplete or wrong."},

    {type:"match", pairs:[
      {trg:"chiunque", src:"whoever"},
      {trg:"ovunque", src:"wherever"},
      {trg:"qualunque", src:"whatever"},
      {trg:"a patto che", src:"on condition that"},
      {trg:"senza che", src:"without (doing)"}
    ]},

    {type:"fb",
     s:"{1} le cifre siano corrette, il progetto sara sostenibile.",
     a:["Ammesso che"],
     opts:["Ammesso che","Dato che","Poiche","Siccome"],
     hint:"A conjunction that tentatively accepts a premise. It introduces a hypothesis whose truth is uncertain and requires the subjunctive.",
     sSrc:"{1} the figures are correct, the project will be sustainable."},

    {type:"mc",
     q:"Perche 'senza che' richiede il congiuntivo?",
     opts:["Perche 'senza' e una parola negativa che richiede il congiuntivo","Perche l'azione nella subordinata non è avvenuta e resta ipotetica","Perche tutte le congiunzioni italiane richiedono il congiuntivo","Perche 'senza che' introduce una causa, non una conseguenza"],
     ans:"Perche l'azione nella subordinata non è avvenuta e resta ipotetica",
     hint:"The action described did not take place. This n...-occurrence creates the uncertainty that the subjunctive mood is designed to express."}
  ,{type:"match",pairs:[{trg:"comunque",src:"however / in any case"},{trg:"per quanto",src:"however much / no matter how"},{trg:"supposto che",src:"supposing that"},{trg:"nel caso che",src:"in case / in the event that"},{trg:"malgrado",src:"despite / in spite of"},{trg:"per quanto ne sappia",src:"as far as I know"}]}]
};
export default BATCH3_L_1;
