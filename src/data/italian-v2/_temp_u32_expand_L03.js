// Unit 32 Expansion — Lesson 6: Lo scambio culturale e il futuro
const LESSON_6 = {
  id:"itv2_u32l6", title:"Lo scambio culturale e il futuro", icon:"🌐", xp:15, board:true,
  steps:[
    {type:"intro", title:"Lo scambio culturale e il futuro",
     desc:"Learn vocabulary for discussing cultural exchange, global challenges, and visions for a connected future. Conclude the globalization unit with forward-looking perspectives.",
     goals:["Discuss forms of cultural exchange and their impact","Express opinions about global challenges and solutions","Formulate visions for a more connected and just world"]},

    {type:"teach", trg:"l'interculturalita", src:"the interculturality", pos:"noun", gender:"f",
     note:"Feminine noun. Invariable (accented ending).\nActive dialogue and exchange between cultures. Different from 'multiculturalismo' (coexistence).",
     example:"A: L'interculturalita va oltre la semplice convivenza.\nB: Richiede dialogo attivo e rispetto reciproco.",
     exampleSrc:"A: Interculturality goes beyond simple coexistence.\nB: It requires active dialogue and mutual respect.",
     funFact:"Italian education policy distinguishes 'multiculturalismo' (cultures living side by side) from 'interculturalita' (cultures actively engaging with each other). The Italian school system officially promotes interculturality as its integration model, emphasizing exchange over mere tolerance."},

    {type:"teach", trg:"il meticciato culturale", src:"the cultural blending / hybridity", pos:"noun", gender:"m",
     note:"Masculine compound noun. The mixing and merging of different cultures.\n'Cultura meticcia' = hybrid culture.",
     example:"A: Il meticciato culturale produce nuove forme d'arte e di pensiero.\nB: La cucina fusion e un esempio quotidiano.",
     exampleSrc:"A: Cultural blending produces new forms of art and thought.\nB: Fusion cuisine is an everyday example.",
     funFact:"Italy's own culture is a product of centuries of 'meticciato': Greek, Roman, Arab, Norman, Spanish, and Austrian influences all blended into what we call 'Italian.' Recognizing this history helps Italians see contemporary cultural mixing as continuation, not disruption."},

    {type:"teach", trg:"il cosmopolitismo", src:"the cosmopolitanism", pos:"noun", gender:"m",
     note:"Masculine noun. The idea that all humans belong to a single community.\n'Cosmopolita' (noun/adj) = cosmopolitan.",
     example:"A: Il cosmopolitismo non cancella le identita locali.\nB: Le arricchisce aprendole al mondo.",
     exampleSrc:"A: Cosmopolitanism does not erase local identities.\nB: It enriches them by opening them to the world.",
     funFact:"Italy has a rich cosmopolitan tradition. Medieval Venice was one of the most cosmopolitan cities on earth. Renaissance Florence welcomed scholars from across Europe and beyond. Today, Milan and Rome attract international talent, reviving this ancient openness."},

    {type:"teach", trg:"la tutela ambientale", src:"the environmental protection", pos:"noun", gender:"f",
     note:"Feminine compound noun. 'Tutela del patrimonio ambientale' = protection of environmental heritage.\nArticle 9 of the Constitution now includes this.",
     example:"A: La tutela ambientale e stata inserita nella Costituzione nel 2022.\nB: Un passo storico per l'Italia.",
     exampleSrc:"A: Environmental protection was added to the Constitution in 2022.\nB: A historic step for Italy.",
     funFact:"Italy amended Articles 9 and 41 of the Constitution in 2022 to include environmental protection and biodiversity. This makes Italy one of few countries with explicit constitutional environmental guarantees, joining Ecuador, Bolivia, and a handful of others."},

    {type:"teach", trg:"la transizione ecologica", src:"the ecological transition", pos:"noun", gender:"f",
     note:"Feminine compound noun. The shift from fossil fuels to renewable energy and sustainable practices.\n'Ministero della Transizione Ecologica' (2021-2022).",
     example:"A: La transizione ecologica richiede investimenti enormi.\nB: Ma e l'unica strada per un futuro sostenibile.",
     exampleSrc:"A: The ecological transition requires enormous investments.\nB: But it is the only path to a sustainable future.",
     funFact:"Italy briefly created a 'Ministero della Transizione Ecologica' (Ministry of Ecological Transition) in 2021, signaling the priority of green policy. Italy aims for 72% renewable electricity by 2030. Solar energy in the south and wind in Sardinia are key components."},

    {type:"mc",
     q:"Qual e la differenza tra multiculturalismo e interculturalita?",
     opts:["Sono la stessa cosa","Il multiculturalismo e coesistenza passiva, l'interculturalita e dialogo attivo tra culture","L'interculturalita esclude le culture minoritarie","Il multiculturalismo e piu avanzato dell'interculturalita"],
     ans:"Il multiculturalismo e coesistenza passiva, l'interculturalita e dialogo attivo tra culture",
     hint:"One describes cultures living alongside each other without necessarily interacting. The other involves genuine exchange, dialogue, and mutual enrichment between different cultures."},

    {type:"teach", trg:"la governance globale", src:"the global governance", pos:"noun", gender:"f",
     note:"Feminine noun. Invariable. Partly borrowed from English.\nThe system of rules and institutions managing global affairs.",
     example:"A: La governance globale deve adattarsi alle sfide del ventunesimo secolo.\nB: Le istituzioni create dopo la guerra sono datate.",
     exampleSrc:"A: Global governance must adapt to twenty-first century challenges.\nB: The institutions created after the war are dated.",
     funFact:"Italian uses 'governance' (borrowed from English) alongside the native 'governanza.' The Anglicism is preferred in international policy contexts. Italy advocates reforming global governance institutions, particularly seeking a permanent UN Security Council seat."},

    {type:"teach", trg:"la giustizia sociale", src:"the social justice", pos:"noun", gender:"f",
     note:"Feminine compound noun. Fair distribution of resources and opportunities.\n'Giustizia climatica' = climate justice.",
     example:"A: La giustizia sociale e un obiettivo fondamentale dell'ONU.\nB: Le disuguaglianze globali richiedono azioni concrete.",
     exampleSrc:"A: Social justice is a fundamental UN goal.\nB: Global inequalities require concrete actions.",
     funFact:"The Italian Constitution's commitment to social justice (Article 3) goes beyond formal equality. The Republic must 'remove economic and social obstacles' that prevent full participation. This transformative mandate makes Italy's constitution one of the most progressive in Europe."},

    {type:"fb",
     s:"La {1} ecologica richiede il passaggio dalle fonti fossili alle energie rinnovabili.",
     a:["transizione"],
     opts:["transizione","tutela","governance","giustizia"],
     hint:"The shift or changeover from one system to another. Moving from the old economy based on oil and gas to a new one based on clean energy.",
     sSrc:"The ecological {1} requires shifting from fossil fuels to renewable energy."},

    {type:"teach", trg:"il bene comune", src:"the common good", pos:"noun", gender:"m",
     note:"Masculine compound noun. Resources and conditions shared by all members of a community.\n'Nell'interesse del bene comune' = in the interest of the common good.",
     example:"A: L'acqua e un bene comune, non una merce.\nB: Il referendum del 2011 lo ha confermato chiaramente.",
     exampleSrc:"A: Water is a common good, not a commodity.\nB: The 2011 referendum confirmed this clearly.",
     funFact:"In 2011, Italians voted overwhelmingly in a referendum to keep water services public, affirming water as a 'bene comune.' This concept, rooted in Italian legal and philosophical tradition, distinguishes goods that belong to everyone from those that can be privately owned."},

    {type:"teach", trg:"la coesione sociale", src:"the social cohesion", pos:"noun", gender:"f",
     note:"Feminine compound noun. The bonds that hold a society together.\n'Fondi di coesione' = cohesion funds (EU).",
     example:"A: La coesione sociale e minacciata dalle disuguaglianze crescenti.\nB: Senza un senso di comunita, la democrazia si indebolisce.",
     exampleSrc:"A: Social cohesion is threatened by growing inequalities.\nB: Without a sense of community, democracy weakens.",
     funFact:"The EU allocates 'fondi di coesione' (cohesion funds) to reduce disparities between regions. Southern Italy has received billions through these programs. 'Coesione' captures the Italian ideal that a society must hold together, that no region or group should be left behind."},

    {type:"mc",
     q:"Che cosa hanno votato gli italiani nel referendum sull'acqua del 2011?",
     opts:["Per la privatizzazione dell'acqua","Per mantenere i servizi idrici pubblici, confermando l'acqua come bene comune","Per aumentare il prezzo dell'acqua","Per ridurre il consumo idrico nazionale"],
     ans:"Per mantenere i servizi idrici pubblici, confermando l'acqua come bene comune",
     hint:"An overwhelming majority affirmed that this essential resource belongs to everyone and should not be turned into a private commodity for profit."},

    {type:"teach", trg:"il dialogo interreligioso", src:"the interreligious dialogue", pos:"noun", gender:"m",
     note:"Masculine compound noun. Communication between different faiths.\n'Ecumenismo' = ecumenism (within Christianity).",
     example:"A: Il dialogo interreligioso e fondamentale per la pace.\nB: L'Italia, con il Vaticano, ha un ruolo unico.",
     exampleSrc:"A: Interreligious dialogue is fundamental for peace.\nB: Italy, with the Vatican, has a unique role.",
     funFact:"Italy's unique position hosting the Vatican gives it a special role in interreligious dialogue. The 'Spirito di Assisi' (Spirit of Assisi), inspired by St. Francis's meeting with the Sultan in 1219, continues as an annual interreligious peace gathering."},

    {type:"match", pairs:[
      {trg:"interculturalita", src:"interculturality"},
      {trg:"transizione ecologica", src:"ecological transition"},
      {trg:"giustizia sociale", src:"social justice"},
      {trg:"bene comune", src:"common good"},
      {trg:"coesione sociale", src:"social cohesion"}
    ]},

    {type:"fb",
     s:"La {1} sociale e fondamentale per mantenere una democrazia forte e inclusiva.",
     a:["coesione"],
     opts:["coesione","governance","transizione","tutela"],
     hint:"The bonds and sense of belonging that hold a community together. When this weakens, society fragments and trust erodes.",
     sSrc:"Social {1} is fundamental for maintaining a strong and inclusive democracy."},

    {type:"mc",
     q:"Perche la cultura italiana stessa e un esempio di meticciato culturale?",
     opts:["Perche l'Italia non ha una cultura propria","Perche nei secoli ha assorbito influenze greche, romane, arabe, normanne, spagnole e austriache","Perche l'Italia ha sempre rifiutato le influenze esterne","Perche il meticciato e un concetto moderno"],
     ans:"Perche nei secoli ha assorbito influenze greche, romane, arabe, normanne, spagnole e austriache",
     hint:"Italian culture was shaped by centuries of contact with many civilizations. What we call 'Italian' is itself a rich blend of diverse influences from across the Mediterranean and beyond."}
  ]
};
export default LESSON_6;
