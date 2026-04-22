// Batch 3. Unit 23, Lesson 2: I media digitali (Digital Media)
const BATCH3_U23_L2 = {
  id:"itv2_u23l_b3_2", title:"I media digitali", icon:"\uD83D\uDCF1", xp:15, board:true,
  steps:[
    {type:"intro", title:"I media digitali",
     desc:"Learn vocabulary about digital media, social networks, and online discourse in Italian. Technology vocabulary is increasingly essential for modern Italian conversation.",
     goals:["Discuss social media in Italian","Talk about digital information sources","Express opinions about online culture"]},

    {type:"teach", trg:"i social", src:"social media", pos:"noun", gender:"m",
     note:"Masculine PLURAL. Short for 'social media' or 'social network.'\n'Essere sui social' = to be on social media.",
     example:"A: Sei sui social?\nB: Si, ma solo su Instagram.",
     exampleSrc:"A: Are you on social media?\nB: Yes, but only on Instagram.",
     funFact:"Italians have adopted 'i social' as the standard short form for social media platforms. Italy has among the highest social media usage rates in Europe. 'Scrollare' (to scroll), 'postare' (to post), and 'condividere' (to share) are everyday Italian verbs now."},

    {type:"teach", trg:"il telegiornale", src:"the TV news / newscast", pos:"noun", gender:"m",
     note:"Masculine. Compound: 'tele-' (TV) + 'giornale' (newspaper/news).\nShortened: il TG.",
     example:"A: Hai visto il telegiornale stasera?\nB: No, leggo le notizie online.",
     exampleSrc:"A: Did you watch the news tonight?\nB: No, I read the news online.",
     funFact:"Italy has three main public TV newscasts (TG1, TG2, TG3) on RAI (the state broadcaster) and several private ones on Mediaset. The 'TG delle otto' (8 PM news) is still a family ritual in many Italian homes, though younger generations increasingly get news from social media."},

    {type:"teach", trg:"la fake news", src:"the fake news / misinformation", pos:"noun", gender:"f",
     note:"Feminine (treated as singular in Italian). English loanword.\n'Diffondere fake news' = to spread misinformation.",
     example:"A: Attenzione alle fake news sui social.\nB: Bisogna verificare sempre le fonti.",
     exampleSrc:"A: Be careful of fake news on social media.\nB: You must always verify the sources.",
     funFact:"Italy uses the English term 'fake news' alongside 'notizia falsa' and 'disinformazione.' Media literacy ('alfabetizzazione mediatica') is increasingly taught in Italian schools. The Italian government has created online resources to help citizens identify misinformation."},

    {type:"teach", trg:"il dibattito", src:"the debate / discussion", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'debattere' (to fight down).\n'Dibattito politico' = political debate.",
     example:"A: Il dibattito in televisione e stato acceso.\nB: I candidati non erano d'accordo su nulla.",
     exampleSrc:"A: The TV debate was heated.\nB: The candidates did not agree on anything.",
     funFact:"Italian political debate culture is famously passionate. TV talk shows feature politicians shouting over each other, which Italian audiences find entertaining rather than rude. 'Dibattito' comes from Latin 'de-battuere' (to beat down), capturing the combative spirit."},

    {type:"teach", trg:"la propaganda", src:"the propaganda", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'propaganda' (things to be spread).\n'Propaganda politica' = political propaganda.",
     example:"A: Bisogna distinguere informazione e propaganda.\nB: Non e sempre facile.",
     exampleSrc:"A: One must distinguish information from propaganda.\nB: It is not always easy.",
     funFact:"'Propaganda' entered wide use from the Catholic Church's 'Congregazione de Propaganda Fide' (1622), which aimed to spread the faith. The word acquired negative connotations during the Fascist era when Mussolini's regime used extensive propaganda. Today it refers to any biased, manipulative communication."},

    {type:"teach", trg:"il comunicato stampa", src:"the press release", pos:"noun", gender:"m",
     note:"Masculine. 'Comunicato' = announcement. 'Stampa' = press.\n'Emettere un comunicato stampa' = to issue a press release.",
     example:"A: Il governo ha emesso un comunicato stampa.\nB: Cosa dice?",
     exampleSrc:"A: The government issued a press release.\nB: What does it say?",
     funFact:"Italian institutions communicate through 'comunicati stampa,' which journalists then report. The tradition of formal institutional communication in Italy is strong. 'L'ufficio stampa' (press office) exists in every major Italian organization, from municipalities to football clubs."},

    {type:"teach", trg:"condividere", src:"to share", pos:"verb", gender:null,
     note:"Regular -ere verb. Past participle: condiviso.\n'Condividere un post' = to share a post.",
     example:"A: Hai condiviso l'articolo?\nB: Si, l'ho condiviso su Facebook.",
     exampleSrc:"A: Did you share the article?\nB: Yes, I shared it on Facebook.",
     funFact:"'Condividere' means both digital sharing (posts, links) and physical sharing (a meal, an experience). 'Condividere' comes from 'con-' (together) + 'dividere' (to divide). Sharing is literally 'dividing together.' The past participle 'condiviso' is irregular."},

    {type:"teach", trg:"influenzare", src:"to influence", pos:"verb", gender:null,
     note:"Regular -are verb. 'Influenzare l'opinione' = to influence opinion.\nAlso: 'influencer' (English loanword) used in Italian.",
     example:"A: I social media influenzano l'opinione pubblica.\nB: Per questo è importante pensare criticamente.",
     exampleSrc:"A: Social media influence public opinion.\nB: That is why it is important to think critically.",
     funFact:"'Influenzare' shares its root with 'influenza' (the flu). Both come from Latin 'influere' (to flow in). The idea is that an external force 'flows into' you, whether a disease or an idea. Italian uses 'influencer' directly from English for social media personalities."},

    {type:"teach", trg:"la fonte", src:"the source", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'fons' (spring, fountain).\n'Citare le fonti' = to cite sources.",
     example:"A: Qual e la fonte di questa notizia?\nB: L'ha pubblicata l'ANSA.",
     exampleSrc:"A: What is the source of this news?\nB: ANSA published it.",
     funFact:"ANSA (Agenzia Nazionale Stampa Associata) is Italy's leading news agency, founded in 1945. 'Fonte' means both a water spring and an information source. 'Citare le fonti' (citing sources) is emphasized in Italian journalism and academic writing. 'Fonte attendibile' means a reliable source."},

    {type:"teach", trg:"la privacy", src:"the privacy", pos:"noun", gender:"f",
     note:"Feminine. English loanword, pronounced 'PRI-va-see' in Italian.\n'Diritto alla privacy' = right to privacy.",
     example:"A: La privacy online e un tema importante.\nB: Bisogna proteggere i dati personali.",
     exampleSrc:"A: Online privacy is an important topic.\nB: Personal data must be protected.",
     funFact:"Italy has strict privacy laws under the GDPR (Regolamento Generale sulla Protezione dei Dati). The Italian Data Protection Authority ('Garante per la Privacy') actively enforces these rules. Italy was one of the first countries to take action against ChatGPT over privacy concerns in 2023."},

    {type:"teach", trg:"il quotidiano", src:"the daily newspaper", pos:"noun", gender:"m",
     note:"Masculine. From 'quotidiano' (daily). Both adjective and noun.\nMajor ones: Corriere della Sera, la Repubblica, La Stampa.",
     example:"A: Quale quotidiano leggi?\nB: Leggo il Corriere della Sera.",
     exampleSrc:"A: Which daily newspaper do you read?\nB: I read the Corriere della Sera.",
     funFact:"Italy's main national newspapers include Corriere della Sera (Milan, center-right), la Repubblica (Rome, center-left), and La Stampa (Turin). Italy also has a sports daily, La Gazzetta dello Sport, printed on distinctive pink paper. Italian newspaper readership is declining, but digital subscriptions are growing."},

    // Quiz steps
    {type:"mc", q:"What does 'i social' mean in everyday Italian?",
     opts:["Social media platforms","Social studies","Social workers","Social events"],
     ans:"Social media platforms",
     hint:"The abbreviated form of 's... m...' or 's... network.' Italians have adopted this English-origin term as standard."},

    {type:"fb", s:"Bisogna verificare sempre le {1}.",
     a:["fonti"],
     opts:["fonti","notizie","social","propaganda"],
     hint:"Always check where information comes from. This word means both water springs and information origins. Same Latin root.",
     sSrc:"You must always verify the {1}."},

    {type:"match", pairs:[
      {trg:"il telegiornale", src:"the TV newscast"},
      {trg:"il dibattito", src:"the debate"},
      {trg:"condividere", src:"to share"},
      {trg:"la fonte", src:"the source"},
      {trg:"il quotidiano", src:"daily newspaper"}
    ]},

    {type:"mc", q:"What is ANSA in Italian media?",
     opts:["A TV channel","The leading national news agency","A social media platform","A radio station"],
     ans:"The leading national news agency",
     hint:"Founded in 1945. ANSA is Italy's primary n... wire service, supplying stories to newspapers, TV, and online media across the country."},

    {type:"fb", s:"Hai {1} l'articolo su Facebook?",
     a:["condiviso"],
     opts:["condiviso","influenzato","votato","informato"],
     hint:"Did you share it? The irregular past participle of 'condividere.' Means both digital sharing and sharing an experience.",
     sSrc:"Did you {1} the article on Facebook?"},

    {type:"mc", q:"What is distinctive about La Gazzetta dello Sport?",
     opts:["It is published weekly","It is Italy's oldest newspaper","It is printed on pink paper","It only covers politics"],
     ans:"It is printed on pink paper",
     hint:"Italy's sports daily is immediately recognizable by its distinctive p... newsprint. It is one of the most-read newspapers in Italy."},

    {type:"fb", s:"I social media {1} l'opinione pubblica.",
     a:["influenzano"],
     opts:["influenzano","condividono","pubblicano","verificano"],
     hint:"Social media affect how people think. This verb shares its root with 'influenza' (the flu). An external force 'flows into' people.",
     sSrc:"Social media {1} public opinion."},

    {type:"mc", q:"Why did Italy take early action regarding ChatGPT?",
     opts:["Italian law prohibits all AI technology","It was too popular with students","To promote a rival Italian AI","The Italian Data Protection Authority raised privacy concerns"],
     ans:"The Italian Data Protection Authority raised privacy concerns",
     hint:"The 'Garante per la P...' actively enforces GDPR rules. Italy was among the first countries to investigate AI services over personal d... p...."}
  ,{type:"match",pairs:[{trg:"i social",src:"social media"},{trg:"la fake news",src:"the fake news / misinformation"},{trg:"la propaganda",src:"the propaganda"},{trg:"il comunicato stampa",src:"the press release"},{trg:"influenzare",src:"to influence"}]}]
};
export default BATCH3_U23_L2;
