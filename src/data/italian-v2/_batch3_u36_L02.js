// Batch 3 — Unit 36 Lesson 2 (Comprehensive Review: Oral Production & Cultural Competence)
const BATCH3_L_2 = {
  id:"itv2_u36l_b3_2", title:"Produzione orale e competenza culturale", icon:"🗣️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Produzione orale e competenza culturale",
     desc:"Master vocabulary for oral presentations, cultural competence, and the spoken register of formal Italian. Practice expressions that demonstrate B2 proficiency in speaking tasks.",
     goals:["Use formal spoken Italian expressions and hedging language","Demonstrate cultural competence in Italian contexts","Apply discourse markers for fluent oral production"]},

    {type:"teach", trg:"il discorso", src:"the speech / address", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i discorsi.\n'Tenere un discorso' = to give a speech.\n'Discorso pubblico' = public speech.",
     example:"A: Ha tenuto un discorso molto convincente alla conferenza.\nB: Il pubblico lo ha applaudito a lungo.",
     exampleSrc:"A: He gave a very convincing speech at the conference.\nB: The audience applauded him at length.",
     funFact:"Italian public speaking tradition values eloquence ('eloquenza') and rhetorical skill. Politicians are judged on their ability to speak without notes, use literary references, and modulate their register between formal and conversational."},

    {type:"teach", trg:"il gesto", src:"the gesture", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i gesti.\n'Gesticolare' (verb) = to gesticulate.\n'Linguaggio dei gesti' = gesture language.",
     example:"A: Gli italiani usano molti gesti quando parlano.\nB: Alcuni gesti hanno significati molto precisi.",
     exampleSrc:"A: Italians use many gestures when speaking.\nB: Some gestures have very precise meanings.",
     funFact:"Italian gesture language is a genuine paralinguistic system with at least 250 recognized gestures. The 'mano a carciofo' (artichoke hand), where fingertips touch and move up and down, is perhaps the most iconic Italian gesture worldwide."},

    {type:"teach", trg:"il dibattito", src:"the debate", pos:"noun", gender:"m",
     note:"Masculine noun. 'Dibattito pubblico' = public debate.\n'Aprire/chiudere il dibattito' = to open/close the debate.",
     example:"A: Il dibattito sulla riforma ha coinvolto tutta l'opinione pubblica.\nB: I talk show hanno dedicato ore al tema.",
     exampleSrc:"A: The debate on the reform engaged all public opinion.\nB: Talk shows dedicated hours to the topic.",
     funFact:"Italian TV debates ('dibattiti') are famously passionate. Participants often speak simultaneously, interrupt each other, and use dramatic gestures. This style reflects a culture where verbal expression and emotional engagement are valued over orderly turn-taking."},

    {type:"teach", trg:"a mio parere", src:"in my opinion (formal)", pos:"adv", gender:null,
     note:"Formal opinion expression. More elevated than 'secondo me.'\nAlternatives: 'a mio avviso,' 'ritengo che,' 'sono del parere che.'",
     example:"A: A mio parere, la riforma e indispensabile.\nB: I dati parlano chiaro: non possiamo rimandare.",
     exampleSrc:"A: In my opinion, the reform is indispensable.\nB: The data speak clearly: we cannot postpone.",
     funFact:"Italian has an exceptionally nuanced hierarchy of opinion markers: 'per me' (casual), 'secondo me' (neutral), 'a mio parere/avviso' (formal), 'ritengo che' + subjunctive (very formal). Using the right one for the context is a B2 skill."},

    {type:"teach", trg:"mi permetta di", src:"allow me to (formal)", pos:"verb", gender:null,
     note:"Formal request for permission to speak or act.\nUsed in presentations, debates, and formal conversation.\n'Mi permetta di dissentire' = allow me to disagree.",
     example:"A: Mi permetta di aggiungere un punto importante.\nB: Certo, prego.",
     exampleSrc:"A: Allow me to add an important point.\nB: Of course, please.",
     funFact:"'Mi permetta' uses the formal subjunctive of 'permettere.' It is a quintessentially Italian politeness formula: rather than simply speaking, you request permission, showing respect for the listener and the conversation's formality."},

    {type:"mc",
     q:"Quale espressione e piu formale per introdurre un'opinione personale?",
     opts:["Per me","Secondo me","Io penso che","A mio avviso"],
     ans:"A mio avviso",
     hint:"The most formal option from this list. Used in academic essays, official speeches, and formal presentations. The hierarchy goes from casual to very formal."},

    {type:"teach", trg:"d'accordo, pero", src:"I agree, but / granted, however", pos:"conj", gender:null,
     note:"A concessive move in spoken argumentation.\nAcknowledges the opponent's point before presenting your counter-argument.",
     example:"A: D'accordo, la tecnologia ha vantaggi. Pero non possiamo ignorare i rischi.\nB: E un equilibrio difficile da trovare.",
     exampleSrc:"A: Granted, technology has advantages. However, we cannot ignore the risks.\nB: It is a difficult balance to find.",
     funFact:"Italian argumentation values the 'concessione' (concession): acknowledging your opponent's valid points before countering. This rhetorical move shows intellectual fairness and is rewarded in CILS B2 oral exams."},

    {type:"teach", trg:"il registro formale", src:"the formal register", pos:"noun", gender:"m",
     note:"Masculine compound noun. The level of language appropriate for official contexts.\n'Passare dal registro informale al formale' = to switch from informal to formal.",
     example:"A: In un colloquio di lavoro, usa sempre il registro formale.\nB: 'Lei' invece di 'tu,' e connettivi formali.",
     exampleSrc:"A: In a job interview, always use the formal register.\nB: 'Lei' instead of 'tu,' and formal connectives.",
     funFact:"Register-switching ('code-switching') is a daily Italian skill. The same person might use dialect with family, informal Italian with friends, and formal Italian at work. B2 proficiency means controlling at least the informal-formal spectrum."},

    {type:"teach", trg:"vorrei sottolineare che", src:"I would like to emphasize that", pos:"verb", gender:null,
     note:"Formal emphasis expression for presentations and speeches.\n'Sottolineare' = to underline/emphasize.",
     example:"A: Vorrei sottolineare che i risultati superano le aspettative.\nB: I numeri parlano da soli.",
     exampleSrc:"A: I would like to emphasize that the results exceed expectations.\nB: The numbers speak for themselves.",
     funFact:"Italian formal speech uses many 'segnali discorsivi' (discourse markers) like 'vorrei sottolineare,' 'tengo a precisare,' 'mi preme evidenziare.' These phrasings are polite, measured, and appropriate for professional settings."},

    {type:"teach", trg:"la competenza interculturale", src:"intercultural competence", pos:"noun", gender:"f",
     note:"Feminine compound noun. The ability to communicate effectively across cultures.\n'Sensibilita culturale' = cultural sensitivity.",
     example:"A: La competenza interculturale e fondamentale nel mondo globalizzato.\nB: Non basta parlare la lingua: bisogna capire la cultura.",
     exampleSrc:"A: Intercultural competence is fundamental in the globalized world.\nB: Speaking the language is not enough: you must understand the culture.",
     funFact:"Italian CEFR descriptors explicitly include 'competenza interculturale.' B2 speakers should understand cultural references, humor, and social norms. Knowing that Italians value 'la bella figura' (maintaining a good impression) is as important as grammar."},

    {type:"fb",
     s:"{1} di dissentire rispettosamente dalla posizione del collega.",
     a:["Mi permetta"],
     opts:["Mi permetta","Voglio","Devo","Posso"],
     hint:"A very formal way to ask permission before making your point. Uses the subjunctive of 'permettere' with the formal 'Lei.'",
     sSrc:"{1} me to respectfully disagree with my colleague's position."},

    {type:"teach", trg:"ciononostante", src:"nevertheless / notwithstanding", pos:"conj", gender:null,
     note:"Formal conjunction. Very elevated register.\nSynonyms: 'tuttavia,' 'nonostante cio,' 'nondimeno.'",
     example:"A: I rischi sono reali. Ciononostante, i benefici giustificano l'investimento.\nB: Dobbiamo procedere con cautela ma con determinazione.",
     exampleSrc:"A: The risks are real. Nevertheless, the benefits justify the investment.\nB: We must proceed with caution but with determination.",
     funFact:"'Ciononostante' is among the most formal concessive connectives in Italian. Using it correctly signals mastery of elevated register. In everyday speech, Italians would simply say 'pero' (but) or 'comunque' (anyway)."},

    {type:"teach", trg:"la padronanza", src:"mastery / command (of a language)", pos:"noun", gender:"f",
     note:"Feminine noun. Full control and fluency.\n'Padronanza linguistica' = linguistic mastery. C2 = 'piena padronanza.'",
     example:"A: La padronanza della lingua si raggiunge solo con la pratica costante.\nB: Non esistono scorciatoie.",
     exampleSrc:"A: Language mastery is only achieved with constant practice.\nB: There are no shortcuts.",
     funFact:"CEFR C2 is called 'padronanza' in Italian (mastery). B2 is 'progresso' (progress) or 'vantaggio' (advantage). The Italian CEFR terminology uses evocative words rather than dry labels, making the levels feel like a journey."},

    {type:"teach", trg:"la bella figura", src:"making a good impression", pos:"noun", gender:"f",
     note:"Feminine compound noun. A core Italian cultural concept.\n'Fare bella figura' = to make a good impression.\n'Fare brutta figura' = to make a bad impression.",
     example:"A: In Italia, fare bella figura e importantissimo.\nB: Come ti presenti conta quanto quello che dici.",
     exampleSrc:"A: In Italy, making a good impression is extremely important.\nB: How you present yourself matters as much as what you say.",
     funFact:"'La bella figura' is perhaps the most important Italian cultural concept for foreigners to understand. It governs everything from dress to conversation to gift-giving. At B2 level, understanding this unwritten code is as valuable as any grammar rule."},

    {type:"teach", trg:"il proverbio", src:"the proverb / saying", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i proverbi.\n'Come dice il proverbio...' = as the proverb says...",
     example:"A: Come dice il proverbio: chi va piano, va sano e va lontano.\nB: La pazienza e una virtu fondamentale.",
     exampleSrc:"A: As the proverb says: who goes slowly, goes safely and far.\nB: Patience is a fundamental virtue.",
     funFact:"Italian proverbs ('proverbi') are deeply embedded in daily speech. Using one appropriately demonstrates cultural fluency beyond mere linguistic competence. Famous ones include 'L'abito non fa il monaco' (The habit does not make the monk)."},

    {type:"mc",
     q:"Che cos'e la 'bella figura' nella cultura italiana?",
     opts:["Un concetto estetico legato alla moda e al design italiano","L'importanza di fare sempre una buona impressione in ogni contesto sociale","Una regola grammaticale sulla struttura delle frasi formali","Un tipo di complimento usato nelle conversazioni formali"],
     ans:"L'importanza di fare sempre una buona impressione in ogni contesto sociale",
     hint:"A core cultural value: how you present yourself to others matters enormously. It governs behavior from conversation to dress to hospitality."},

    {type:"teach", trg:"in definitiva", src:"ultimately / when all is said and done", pos:"conj", gender:null,
     note:"Formal concluding expression. Stronger than 'in conclusione.'\nSignals the final, decisive assessment.",
     example:"A: In definitiva, l'italiano non e solo una lingua: e una porta su una cultura millenaria.\nB: Ogni parola porta con se secoli di storia.",
     exampleSrc:"A: Ultimately, Italian is not just a language: it is a gateway to a millennial culture.\nB: Every word carries centuries of history with it.",
     funFact:"'In definitiva' signals the speaker's final, most considered judgment. It carries more weight than 'in conclusione' because it implies that all alternatives have been weighed and rejected. A powerful closing move."},

    {type:"match", pairs:[
      {trg:"registro formale", src:"formal register"},
      {trg:"competenza interculturale", src:"intercultural competence"},
      {trg:"ciononostante", src:"nevertheless"},
      {trg:"padronanza", src:"mastery"},
      {trg:"bella figura", src:"good impression"}
    ]},

    {type:"fb",
     s:"{1} sottolineare che questi risultati sono eccezionali.",
     a:["Vorrei"],
     opts:["Vorrei","Voglio","Devo","Posso"],
     hint:"The conditional of 'volere,' used for polite emphasis in formal presentations. More diplomatic than the direct 'voglio.'",
     sSrc:"I {1} like to emphasize that these results are exceptional."},

    {type:"mc",
     q:"In definitiva, quale competenza e piu importante al livello B2?",
     opts:["Conoscere perfettamente tutte le regole grammaticali senza eccezione","Saper comunicare efficacemente adattando il registro al contesto","Avere un accento identico a quello di un madrelingua italiano","Memorizzare il maggior numero possibile di vocaboli specialistici"],
     ans:"Saper comunicare efficacemente adattando il registro al contesto",
     hint:"At B2, effective communication with appropriate register is the gold standard. Perfect grammar or native accent are not required. Adaptability is key."}
  ,{type:"match",pairs:[{trg:"il discorso",src:"the speech / address"},{trg:"il gesto",src:"the gesture"},{trg:"il dibattito",src:"the debate"},{trg:"a mio parere",src:"in my opinion (formal)"},{trg:"il proverbio",src:"the proverb / saying"},{trg:"in definitiva",src:"ultimately / when all is said and done"}]},{type:"mc",q:"How do you say \"I agree, but / granted, however\" in Italian?",opts:["d'accordo, pero","la finestra","il tavolo","la bicicletta"],ans:"d'accordo, pero",hint:"Recall the Italian vocabulary word taught in this lesson."}]
};
export default BATCH3_L_2;
