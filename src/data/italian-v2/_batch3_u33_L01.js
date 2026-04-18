// Batch 3 — Unit 33 Lesson (Philosophy: Ethics & Political Philosophy)
const BATCH3_L_1 = {
  id:"itv2_u33l_b3_1", title:"Etica e filosofia politica", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"Etica e filosofia politica",
     desc:"Deepen your philosophical vocabulary with terms for ethical debate, political philosophy, and Italian intellectual traditions. Essential for academic discourse and opinion writing.",
     goals:["Discuss ethical dilemmas and moral philosophy","Describe political philosophy concepts","Use academic argumentation vocabulary"]},

    {type:"teach", trg:"la giustizia", src:"justice", pos:"noun", gender:"f",
     note:"Feminine noun. 'Giustizia sociale' = social justice.\n'Giustizia distributiva' = distributive justice.",
     example:"A: La giustizia sociale e un tema centrale nella filosofia politica.\nB: Come distribuire equamente le risorse?",
     exampleSrc:"A: Social justice is a central theme in political philosophy.\nB: How to distribute resources fairly?",
     funFact:"Italian political philosophy produced some of history's most influential thinkers on justice. Machiavelli questioned whether justice and political power can coexist. Beccaria argued that justice must be proportional and humane."},

    {type:"teach", trg:"l'utilitarismo", src:"utilitarianism", pos:"noun", gender:"m",
     note:"Masculine noun. The philosophy that actions are right if they produce the greatest happiness.\n'Principio di utilita' = utility principle.",
     example:"A: L'utilitarismo valuta le azioni in base alle loro conseguenze.\nB: Il fine giustifica i mezzi? Non tutti sono d'accordo.",
     exampleSrc:"A: Utilitarianism evaluates actions based on their consequences.\nB: Does the end justify the means? Not everyone agrees.",
     funFact:"Cesare Beccaria anticipated utilitarian thinking decades before Bentham. His 'Dei delitti e delle pene' (1764) argued that laws should aim at 'la massima felicita divisa nel maggior numero' (the greatest happiness distributed among the greatest number)."},

    {type:"teach", trg:"il determinismo", src:"determinism", pos:"noun", gender:"m",
     note:"Masculine noun. The doctrine that all events are predetermined.\nOpposite: 'l'indeterminismo.' 'Determinismo biologico' = biological determinism.",
     example:"A: Il determinismo nega l'esistenza del libero arbitrio.\nB: Se tutto e predeterminato, siamo responsabili delle nostre azioni?",
     exampleSrc:"A: Determinism denies the existence of free will.\nB: If everything is predetermined, are we responsible for our actions?",
     funFact:"The debate between determinismo and libero arbitrio has special resonance in Italy, where Catholic theology insists on free will while scientific materialism points to biological determination. Italian bioethics committees grapple with this tension."},

    {type:"teach", trg:"la democrazia", src:"democracy", pos:"noun", gender:"f",
     note:"Feminine noun. 'Democrazia diretta/rappresentativa' = direct/representative democracy.\n'Democrazia parlamentare' = parliamentary democracy.",
     example:"A: L'Italia e una democrazia parlamentare dal 1946.\nB: Prima era una monarchia costituzionale.",
     exampleSrc:"A: Italy has been a parliamentary democracy since 1946.\nB: Before that it was a constitutional monarchy.",
     funFact:"Italy became a republic through a referendum on June 2, 1946, now celebrated as 'Festa della Repubblica.' The vote was extremely close (54% republic vs. 46% monarchy), and the result is still debated by a small monarchist fringe."},

    {type:"teach", trg:"il contratto sociale", src:"the social contract", pos:"noun", gender:"m",
     note:"Masculine compound noun. The implicit agreement between citizens and state.\n'Teoria del contratto sociale' = social contract theory.",
     example:"A: Il contratto sociale implica diritti e doveri reciproci.\nB: I cittadini rinunciano a parte della liberta in cambio di protezione.",
     exampleSrc:"A: The social contract implies mutual rights and duties.\nB: Citizens give up part of their freedom in exchange for protection.",
     funFact:"Italian philosophy contributed to social contract theory through Beccaria and Filangieri. Gaetano Filangieri's 'Scienza della legislazione' (1780) influenced Benjamin Franklin and the American Constitution's framers."},

    {type:"mc",
     q:"Quale filosofo italiano anticipo il pensiero utilitarista decenni prima di Bentham?",
     opts:["Machiavelli","Gramsci","Beccaria","Croce"],
     ans:"Beccaria",
     hint:"His 1764 work on crimes and punishments argued for the greatest happiness for the greatest number, anticipating British utilitarianism."},

    {type:"teach", trg:"l'empirismo", src:"empiricism", pos:"noun", gender:"m",
     note:"Masculine noun. The philosophy that knowledge comes from sensory experience.\nOpposite: 'il razionalismo' (knowledge from reason alone).",
     example:"A: L'empirismo sostiene che la conoscenza nasce dall'esperienza.\nB: Galileo fu un empirista ante litteram.",
     exampleSrc:"A: Empiricism holds that knowledge comes from experience.\nB: Galileo was an empiricist before the term existed.",
     funFact:"Galileo's insistence on observation and experiment over authority made him an empiricist hero. His conflict with the Church dramatized the tension between empirismo (evidence-based knowledge) and dogmatismo (acceptance of authority)."},

    {type:"teach", trg:"l'alienazione", src:"alienation", pos:"noun", gender:"f",
     note:"Feminine noun. The feeling of being estranged from society, work, or oneself.\n'Alienazione del lavoro' = work alienation (Marxist concept).",
     example:"A: L'alienazione moderna nasce dalla societa dei consumi.\nB: Le persone si sentono disconnesse dalla propria vita.",
     exampleSrc:"A: Modern alienation stems from consumer society.\nB: People feel disconnected from their own lives.",
     funFact:"Gramsci developed Marx's concept of alienation in the Italian context, linking it to 'egemonia culturale.' Italian cinema explored alienation masterfully: Antonioni's 'L'avventura' (1960) depicts characters lost in affluent but empty lives."},

    {type:"teach", trg:"il pragmatismo", src:"pragmatism", pos:"noun", gender:"m",
     note:"Masculine noun. The philosophy that ideas should be judged by their practical results.\n'Approccio pragmatico' = pragmatic approach.",
     example:"A: Il pragmatismo valuta le idee in base ai risultati pratici.\nB: Non importa se una teoria e bella, deve funzionare.",
     exampleSrc:"A: Pragmatism evaluates ideas based on practical results.\nB: It does not matter if a theory is beautiful; it must work.",
     funFact:"Giovanni Vailati and Mario Calderoni introduced pragmatism to Italy in the early 1900s. Italian pragmatismo blended American practical philosophy with Italian mathematical logic, creating a unique intellectual tradition."},

    {type:"fb",
     s:"Il {1} sociale implica che i cittadini rinuncino a parte della liberta in cambio di protezione.",
     a:["contratto"],
     opts:["contratto","determinismo","pragmatismo","utilitarismo"],
     hint:"An implicit agreement between citizens and their government. Citizens accept rules in exchange for protection and services.",
     sSrc:"The social {1} implies that citizens give up part of their freedom in exchange for protection."},

    {type:"teach", trg:"l'egemonia", src:"hegemony", pos:"noun", gender:"f",
     note:"Feminine noun. Cultural and ideological dominance.\n'Egemonia culturale' = cultural hegemony (Gramsci's key concept).",
     example:"A: Gramsci analizzava come il potere si mantiene attraverso l'egemonia culturale.\nB: Non solo con la forza, ma con il consenso.",
     exampleSrc:"A: Gramsci analyzed how power is maintained through cultural hegemony.\nB: Not only with force, but with consent.",
     funFact:"Gramsci's concept of 'egemonia culturale' argues that ruling classes maintain power not just through force but by making their worldview seem natural and inevitable. This idea has influenced cultural studies, media theory, and political strategy worldwide."},

    {type:"teach", trg:"il nichilismo", src:"nihilism", pos:"noun", gender:"m",
     note:"Masculine noun. The rejection of all moral and religious principles.\n'Nichilista' = nihilist.",
     example:"A: Il nichilismo nega l'esistenza di valori universali.\nB: Se nulla ha significato, perche agire moralmente?",
     exampleSrc:"A: Nihilism denies the existence of universal values.\nB: If nothing has meaning, why act morally?",
     funFact:"Italian thinkers engaged deeply with Nietzschean nichilismo. Gianni Vattimo's 'pensiero debole' (weak thought) proposed a positive nihilism: accepting that there are no absolute truths can lead to tolerance and openness."},

    {type:"teach", trg:"il dilemma etico", src:"the ethical dilemma", pos:"noun", gender:"m",
     note:"Masculine compound noun. A situation requiring a choice between conflicting moral principles.\n'Affrontare un dilemma' = to face a dilemma.",
     example:"A: L'eutanasia e un dilemma etico che divide la societa.\nB: Il diritto alla vita si scontra con il diritto alla dignita.",
     exampleSrc:"A: Euthanasia is an ethical dilemma that divides society.\nB: The right to life clashes with the right to dignity.",
     funFact:"Italy's debate on ethical dilemmas is deeply influenced by Catholic teaching. Issues like euthanasia, abortion, and embryo research pit secular liberalism against religious tradition, with the Vatican exercising unique influence from within Rome itself."},

    {type:"mc",
     q:"Che cos'e l'egemonia culturale secondo Gramsci?",
     opts:["Il dominio militare di una nazione sulle altre attraverso alleanze strategiche","Il controllo ideologico e culturale esercitato dalla classe dominante attraverso il consenso","La superiorita artistica e letteraria dell'Italia rispetto ad altri paesi europei","Il predominio delle grandi aziende culturali nel mercato dell'intrattenimento"],
     ans:"Il controllo ideologico e culturale esercitato dalla classe dominante attraverso il consenso",
     hint:"Power maintained not by force but by making the dominant worldview seem natural and obvious. Consent, not coercion."},

    {type:"match", pairs:[
      {trg:"giustizia", src:"justice"},
      {trg:"contratto sociale", src:"social contract"},
      {trg:"egemonia", src:"hegemony"},
      {trg:"alienazione", src:"alienation"},
      {trg:"dilemma etico", src:"ethical dilemma"}
    ]},

    {type:"fb",
     s:"L'{1} sostiene che la conoscenza nasce dall'osservazione e dall'esperienza diretta.",
     a:["empirismo"],
     opts:["empirismo","nichilismo","determinismo","pragmatismo"],
     hint:"A philosophical approach that bases knowledge on sensory observation and experiment. Galileo embodied this principle.",
     sSrc:"{1} holds that knowledge arises from observation and direct experience."},

    {type:"mc",
     q:"Che cos'e il 'pensiero debole' proposto dal filosofo italiano Gianni Vattimo?",
     opts:["Una critica alla debolezza intellettuale della cultura contemporanea","Una forma di nichilismo positivo che accetta l'assenza di verita assolute","Un metodo di studio basato sulla lettura superficiale dei testi filosofici","Una teoria economica sulla fragilita dei mercati finanziari globali"],
     ans:"Una forma di nichilismo positivo che accetta l'assenza di verita assolute",
     hint:"This Italian philosopher proposed that accepting no absolute truths can lead to tolerance and openness. A positive interpretation of nihilism."}
  ,{type:"match",pairs:[{trg:"il determinismo",src:"determinism"},{trg:"la democrazia",src:"democracy"},{trg:"il pragmatismo",src:"pragmatism"},{trg:"il nichilismo",src:"nihilism"}]},{type:"mc",q:"How do you say \"utilitarianism\" in Italian?",opts:["la finestra","l'utilitarismo","il tavolo","la bicicletta"],ans:"l'utilitarismo",hint:"Recall the Italian vocabulary word taught in this lesson."}]
};
export default BATCH3_L_1;
