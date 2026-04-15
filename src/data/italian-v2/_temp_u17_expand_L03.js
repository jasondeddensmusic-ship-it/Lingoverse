// Unit 17 Expansion. Lesson 6: Fake News and Critical Thinking
const LESSON_6 = {
  id:"itv2_u17l6", title:"Le fake news", icon:"🔍", xp:15, board:true,
  steps:[
    {type:"intro", title:"Le fake news",
     desc:"Learn to discuss misinformation, fact-checking, and critical thinking in Italian. These topics dominate Italian public debate and are essential for B1-level conversation.",
     goals:["Discuss misinformation in Italian","Use critical thinking vocabulary","Express opinions about media reliability"]},

    {type:"teach", trg:"le fake news", src:"fake news / misinformation", pos:"noun", gender:"f",
     note:"Feminine plural. Borrowed from English.\nItalian alternative: 'le notizie false' (false news).",
     example:"A: Questa notizia e vera o sono fake news?\nB: Controlla la fonte prima di condividerla.",
     exampleSrc:"A: Is this news true or is it fake news?\nB: Check the source before sharing it.",
     funFact:"'Fake news' entered Italian directly from English and is universally understood. The Italian alternatives 'notizie false' or 'disinformazione' are more formal. Italian media literacy campaigns warn: 'Prima di condividere, verifica!' (Before sharing, verify!)."},

    {type:"teach", trg:"la fonte", src:"the source", pos:"noun", gender:"f",
     note:"Feminine. Also means 'fountain' or 'spring.'\n'Fonte attendibile' = reliable source.",
     example:"A: Qual e la fonte di questa notizia?\nB: Un giornale locale, ma non e molto attendibile.",
     exampleSrc:"A: What is the source of this news?\nB: A local newspaper, but it is not very reliable.",
     funFact:"'Fonte' means both 'source' (of information) and 'fountain/spring' (of water). The metaphor is beautiful: information flows from a source like water from a spring. 'Fonte primaria' (primary source), 'fonte secondaria' (secondary source), and 'fonti ufficiali' (official sources) are key terms."},

    {type:"teach", trg:"verificare", src:"to verify / to fact-check", pos:"verb", gender:null,
     note:"Regular -are verb. 'Verificare le informazioni' = to verify information.\n'La verifica' = the verification.",
     example:"A: Hai verificato questa informazione?\nB: Si, l'ho trovata su tre fonti diverse.",
     exampleSrc:"A: Did you verify this information?\nB: Yes, I found it on three different sources.",
     funFact:"'Verificare' comes from Latin 'verus' (true) + 'facere' (to make). Literally 'to make true' by checking. Italian fact-checking organizations like 'Pagella Politica' and 'Open' (by Enrico Mentana) are growing in influence. 'Fact-checking' is used as-is alongside 'verifica dei fatti.'"},

    {type:"teach", trg:"la disinformazione", src:"disinformation", pos:"noun", gender:"f",
     note:"Feminine. 'Dis-' (negative) + 'informazione.'\nDeliberate spreading of false information.",
     example:"A: La disinformazione e un pericolo per la democrazia.\nB: Per questo e importante verificare le notizie.",
     exampleSrc:"A: Disinformation is a danger to democracy.\nB: That is why it is important to verify news.",
     funFact:"Italian distinguishes between 'disinformazione' (deliberate false information to deceive) and 'misinformazione' (unintentional spreading of false information). Both are growing concerns. Italian media watchdogs note that social media amplifies both types."},

    {type:"teach", trg:"attendibile", src:"reliable / credible", pos:"adj", gender:null,
     note:"Adjective. Same form for masculine and feminine (-e ending).\nOpposite: inattendibile (unreliable).",
     example:"A: Questa fonte e attendibile?\nB: Si, e un giornale serio con giornalisti professionisti.",
     exampleSrc:"A: Is this source reliable?\nB: Yes, it is a serious newspaper with professional journalists.",
     funFact:"'Attendibile' comes from 'attendere' in the old sense of 'to pay attention to,' hence 'worthy of attention.' In journalism, 'fonte attendibile' (reliable source) is the gold standard. Italians are becoming more aware of checking whether a source is 'attendibile' or 'inattendibile.'"},

    {type:"teach", trg:"la bufala", src:"the hoax / fake story", pos:"noun", gender:"f",
     note:"Feminine. Literally 'buffalo/water buffalo.'\n'E una bufala!' = It is a hoax!",
     example:"A: Hai sentito che la cioccolata cura il raffreddore?\nB: E una bufala! Non crederci.",
     exampleSrc:"A: Did you hear that chocolate cures the cold?\nB: It is a hoax! Don't believe it.",
     funFact:"'Bufala' is Italian slang for a hoax or fake story. The origin is debated: some link it to 'buffalo' (a clumsy, slow animal, hence 'something stupid'). 'Sbufalare' (to debunk) and 'antibufala' (anti-hoax) are derived terms. 'Bufale.net' is Italy's most popular debunking website."},

    {type:"teach", trg:"il clickbait", src:"clickbait", pos:"noun", gender:"m",
     note:"Masculine. Borrowed from English.\n'Titolo clickbait' = clickbait headline.",
     example:"A: Quel titolo e puro clickbait.\nB: Si, l'articolo non dice niente di nuovo.",
     exampleSrc:"A: That headline is pure clickbait.\nB: Yes, the article says nothing new.",
     funFact:"'Clickbait' is used as-is in Italian. Sensationalist headlines designed to generate clicks are a major source of misinformation. Italian journalism has a long tradition of dramatic headlines ('titolismo'), which made the transition to clickbait culturally seamless."},

    {type:"teach", trg:"il pensiero critico", src:"critical thinking", pos:"noun", gender:"m",
     note:"Masculine. 'Pensiero' = thought/thinking. 'Critico' = critical.\nEssential for media literacy.",
     example:"A: Il pensiero critico si impara a scuola.\nB: Si, e fondamentale nell'era digitale.",
     exampleSrc:"A: Critical thinking is learned at school.\nB: Yes, it is fundamental in the digital age.",
     funFact:"'Pensiero critico' is increasingly emphasized in Italian education. The OECD PISA tests show Italy lagging behind in critical thinking skills. Schools now integrate 'educazione ai media' (media education) and 'educazione civica digitale' (digital civic education) to address this gap."},

    {type:"teach", trg:"condividere responsabilmente", src:"to share responsibly", pos:"verb", gender:null,
     note:"'Condividere' + 'responsabilmente' (adverb).\n'Prima di condividere, pensa!' = Before sharing, think!",
     example:"A: Condividi responsabilmente sui social.\nB: Hai ragione, prima devo verificare.",
     exampleSrc:"A: Share responsibly on social media.\nB: You are right, first I need to verify.",
     funFact:"Italian media literacy campaigns focus on responsible sharing. 'Prima di condividere, verifica' (before sharing, verify) is a common slogan. Studies show that misinformation spreads six times faster than true news on social media. Italians over 60 are the most likely to share unverified content."},

    // Quiz steps
    {type:"mc", q:"What does 'la bufala' mean in informal Italian?",
     opts:["A type of Italian cheese","A hoax or fake story","A very large animal","A type of pasta dish"],
     ans:"A hoax or fake story",
     hint:"While literally meaning 'water buffalo,' in slang it describes false information. 'E una b...!' means 'It is f...!'"},

    {type:"fb", s:"Qual e la {1} di questa notizia?",
     a:["fonte"],
     opts:["fonte","bufala","serie","notifica"],
     hint:"Before believing any news, you should check where it comes from. This word also means 'fountain.'",
     sSrc:"What is the {1} of this news?"},

    {type:"match", pairs:[
      {trg:"le fake news", src:"fake news"},
      {trg:"la fonte", src:"the source"},
      {trg:"verificare", src:"to verify"},
      {trg:"la bufala", src:"the hoax"},
      {trg:"il pensiero critico", src:"critical thinking"}
    ]},

    {type:"mc", q:"What is the difference between 'disinformazione' and 'misinformazione'?",
     opts:["There is no difference at all","Disinformation is deliberate, misinformation is unintentional","Disinformation is online, misinformation is in print","Disinformation is political, misinformation is commercial"],
     ans:"Disinformation is deliberate, misinformation is unintentional",
     hint:"The 'dis-' prefix implies intent to deceive. 'Mis-' implies spreading false info without knowing it is false."},

    {type:"fb", s:"Hai {1} questa informazione prima di condividerla?",
     a:["verificato"],
     opts:["verificato","condiviso","postato","scaricato"],
     hint:"You should check if the information is true by consulting reliable sources. This verb means 'to fact-check.'",
     sSrc:"Did you {1} this information before sharing it?"},

    {type:"mc", q:"What is 'il clickbait'?",
     opts:["A computer virus that steals data","Sensationalist headlines designed to generate clicks","An app for organizing bookmarks","A type of online advertisement"],
     ans:"Sensationalist headlines designed to generate clicks",
     hint:"These eye-catching titles lure you into clicking, but the actual content often disappoints. Italian journalism has a long tradition of dramatic h...."},

    {type:"fb", s:"Questa fonte non e {1}. Non fidarti.",
     a:["attendibile"],
     opts:["attendibile","virale","digitale","pubblica"],
     hint:"This source is not reliable or credible. You should not trust it. The opposite is 'inattendibile.'",
     sSrc:"This source is not {1}. Don't trust it."},

    {type:"mc", q:"What does 'Prima di condividere, verifica!' mean?",
     opts:["Before writing, proofread carefully","Before sharing, fact-check first","Before posting, adjust privacy settings","Before buying, compare the prices"],
     ans:"Before sharing, fact-check first",
     hint:"This is a common Italian media literacy slogan. It urges people to c... information b... spreading it online."}
  ]
};
export default LESSON_6;
