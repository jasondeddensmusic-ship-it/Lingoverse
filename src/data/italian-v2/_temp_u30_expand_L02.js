// Unit 30 Expansion. Lesson 5: Doppi congiuntivi e registri
const LESSON_5 = {
  id:"itv2_u30l5", title:"Doppi congiuntivi e registri", icon:"🎯", xp:15, board:true,
  steps:[
    {type:"intro", title:"Doppi congiuntivi e registri",
     desc:"Master sentences with double subjunctive triggers, subjunctive in formal registers, and the stylistic nuances that distinguish elegant from everyday Italian.",
     goals:["Handle sentences with multiple subjunctive triggers","Use the subjunctive in formal and academic registers","Distinguish register levels in subjunctive usage"]},

    {type:"tip", title:"Doppio congiuntivo",
     text:"Some sentences contain TWO subjunctive triggers, producing nested subjunctive forms.\n\n'Benche pensi che sia sbagliato, accetto la decisione.'\n(Although I think it is wrong, I accept the decision.)\n\n'Benche' triggers 'pensi' (congiuntivo presente).\n'Pensi che' triggers 'sia' (congiuntivo presente).\n\nBoth subjunctives are required. Replacing either with the indicative would be grammatically incorrect in standard Italian.",
     deepDive:"Double subjunctives appear when a subjunctive-triggering conjunction introduces a clause that itself contains a subjunctive trigger.\n\nCommon patterns:\n- benche/sebbene + verbo di opinione + che + congiuntivo\n- prima che + verbo di dubbio + che + congiuntivo\n- purche + verbo di desiderio + che + congiuntivo\n\nIn very formal writing, you may even encounter TRIPLE subjunctives, though these are rare outside legal and academic texts."},

    {type:"teach", trg:"benche creda che", src:"although I believe that (double subjunctive)", pos:"verb", gender:null,
     note:"Double trigger: 'benche' forces subjunctive on 'creda,'\nand 'creda che' forces subjunctive on the next verb.\nBoth must be in the subjunctive.",
     example:"A: Benche creda che sia difficile, non rinuncio.\nB: La tua determinazione e ammirevole.",
     exampleSrc:"A: Although I believe it is difficult, I will not give up.\nB: Your determination is admirable.",
     funFact:"Double subjunctives are a hallmark of elevated Italian prose. Politicians and academics use them to demonstrate linguistic sophistication. In spoken Italian, many speakers would simplify: 'Anche se penso che e difficile,' avoiding both subjunctives."},

    {type:"teach", trg:"sembra che sia necessario che", src:"it seems necessary that (double trigger)", pos:"verb", gender:null,
     note:"'Sembra che' triggers subjunctive ('sia'), and\n'necessario che' triggers another subjunctive on the final verb.\nThree-layer subjunctive structure.",
     example:"A: Sembra che sia necessario che tutti partecipino.\nB: Lo comunichero al team domani.",
     exampleSrc:"A: It seems that it is necessary that everyone participates.\nB: I will communicate it to the team tomorrow.",
     funFact:"This kind of multi-layered subjunctive is more common in written than spoken Italian. A journalist might write it; a friend would likely say 'Sembra che tutti devono partecipare,' flattening the subjunctive. Both are understood, but only the first is formally correct."},

    {type:"teach", trg:"qualora", src:"in the event that / should", pos:"conj", gender:null,
     note:"Very formal conjunction requiring the congiuntivo.\nSynonym of 'nel caso in cui.' Used in legal and bureaucratic Italian.",
     example:"A: Qualora il candidato non si presentasse, sara escluso.\nB: E scritto nel regolamento.",
     exampleSrc:"A: Should the candidate not appear, he will be excluded.\nB: It is written in the regulations.",
     funFact:"'Qualora' is one of the most formal Italian conjunctions. Finding it in speech is rare; it belongs to legal documents, contracts, and academic papers. Using it in conversation would sound humorously pompous, like saying 'henceforth' in English."},

    {type:"teach", trg:"per quanto", src:"however much / no matter how", pos:"conj", gender:null,
     note:"Concessive conjunction requiring the congiuntivo.\n'Per quanto io cerchi' = however much I search.\nSynonym: 'per quanto... possa.'",
     example:"A: Per quanto mi sforzi, non riesco a capire.\nB: Non preoccuparti, ci vuole tempo.",
     exampleSrc:"A: However much I try, I cannot understand.\nB: Do not worry, it takes time.",
     funFact:"'Per quanto' elegantly combines concession with effort. It acknowledges the attempt while admitting the limitation. In Italian rhetoric, it is a polite way to introduce disagreement: 'Per quanto rispetti la sua opinione...' (However much I respect his opinion...)."},

    {type:"mc",
     q:"Nella frase 'Benche creda che sia giusto,' quanti congiuntivi ci sono?",
     opts:["Uno: 'creda'","Uno: 'sia'","Due: 'creda' e 'sia'","Nessuno"],
     ans:"Due: 'creda' e 'sia'",
     hint:"Count the subjunctive forms. 'Benche' forces the first verb into the subjunctive, and 'che' after a verb of belief forces the second."},

    {type:"teach", trg:"a condizione che", src:"on condition that", pos:"conj", gender:null,
     note:"Formal conjunction requiring the congiuntivo.\nSynonym of 'purche,' but more formal.\n'A condizione che tu accetti' = on condition that you accept.",
     example:"A: Firmeremo il contratto a condizione che le clausole vengano modificate.\nB: Siamo disposti a negoziare.",
     exampleSrc:"A: We will sign the contract on condition that the clauses are modified.\nB: We are willing to negotiate.",
     funFact:"'A condizione che' appears frequently in Italian legal and business language. It sets formal prerequisites with elegant precision. In everyday speech, Italians prefer 'basta che' (as long as) or simply 'se' (if)."},

    {type:"teach", trg:"nel caso in cui", src:"in case / in the event that", pos:"conj", gender:null,
     note:"Formal conjunction requiring the congiuntivo.\nLess formal than 'qualora,' more formal than 'se.'\n'Nel caso in cui piova' = in case it rains.",
     example:"A: Nel caso in cui il volo sia cancellato, ci rimborseranno.\nB: Hai letto le condizioni della polizza?",
     exampleSrc:"A: In the event that the flight is canceled, they will refund us.\nB: Have you read the policy conditions?",
     funFact:"Italian offers a gradient of formality for conditional expressions: 'se' (neutral), 'nel caso in cui' (formal), 'qualora' (very formal), 'ove' (archaic/legal). Each carries the same meaning but signals a different register."},

    {type:"fb",
     s:"{1} il candidato non si presentasse, sara escluso dal concorso.",
     a:["Qualora"],
     opts:["Qualora","Quando","Perche","Mentre"],
     hint:"A very formal conjunction meaning 'should' or 'in the event that.' Used in legal and bureaucratic documents, always with the subjunctive.",
     sSrc:"{1} the candidate should not appear, he will be excluded from the competition."},

    {type:"teach", trg:"malgrado", src:"despite / in spite of", pos:"conj", gender:null,
     note:"Conjunction requiring the congiuntivo. Synonym of 'nonostante.'\n'Malgrado sia stanco' = despite being tired.",
     example:"A: Malgrado piova, usciamo lo stesso.\nB: Prendiamo l'ombrello almeno!",
     exampleSrc:"A: Despite the rain, we are going out anyway.\nB: Let us at least take an umbrella!",
     funFact:"'Malgrado' comes from 'mal grado' (bad will, against one's wishes). It shares an origin with the English 'maugre' (an archaic word for 'in spite of'). Both 'malgrado' and 'nonostante' are fully interchangeable in modern Italian."},

    {type:"teach", trg:"come se", src:"as if", pos:"conj", gender:null,
     note:"Always requires the congiuntivo imperfetto or trapassato.\n'Come se fosse vero' = as if it were true.\n'Come se niente fosse' = as if nothing had happened.",
     example:"A: Si comporta come se fosse il capo.\nB: Ma non lo e, e solo un collega.",
     exampleSrc:"A: He behaves as if he were the boss.\nB: But he is not; he is just a colleague.",
     funFact:"'Come se niente fosse' (as if nothing had happened) is one of the most used Italian idiomatic expressions. It describes someone acting with studied nonchalance after something embarrassing or significant. The imperfect subjunctive 'fosse' is non-negotiable here."},

    {type:"mc",
     q:"Quale registro linguistico utilizza la congiunzione 'qualora'?",
     opts:["Informale, colloquiale","Formale, giuridico e burocratico","Giovanile, gergale","Poetico, letterario"],
     ans:"Formale, giuridico e burocratico",
     hint:"This conjunction belongs to the world of legal documents, contracts, and official regulations. Using it in casual conversation would sound overly formal."},

    {type:"match", pairs:[
      {trg:"qualora", src:"should / in the event that"},
      {trg:"per quanto", src:"however much"},
      {trg:"a condizione che", src:"on condition that"},
      {trg:"come se", src:"as if"},
      {trg:"malgrado", src:"despite"}
    ]},

    {type:"fb",
     s:"Si comporta {1} fosse un esperto, ma non sa nulla.",
     a:["come se"],
     opts:["come se","benche","purche","affinche"],
     hint:"Two words meaning 'as if.' They always take the imperfect subjunctive to express an unreal comparison.",
     sSrc:"He behaves {1} he were an expert, but he knows nothing."},

    {type:"mc",
     q:"Perche il doppio congiuntivo e piu comune nella lingua scritta che in quella parlata?",
     opts:["Perche e grammaticalmente sbagliato nell'orale","Perche nell'orale i parlanti tendono a semplificare le strutture complesse usando l'indicativo","Perche la lingua scritta ha regole diverse","Perche il congiuntivo non esiste nell'italiano parlato"],
     ans:"Perche nell'orale i parlanti tendono a semplificare le strutture complesse usando l'indicativo",
     hint:"In spontaneous speech, managing two subjunctive forms in one sentence is cognitively demanding. Speakers naturally simplify, replacing one or both with the indicative."}
  ]
};
export default LESSON_5;
