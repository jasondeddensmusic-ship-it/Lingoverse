// Unit 05 Batch 2. Lesson 2: More Household Objects & Actions at Home
const BATCH2_U05_L2 = {
  id:"itv2_u05l_b2_2", title:"Oggetti di casa", icon:"\ud83d\udecf\ufe0f", xp:15, board:true,
  steps:[
    {type:"intro", title:"Oggetti di casa",
     desc:"Learn more everyday household objects and the verbs for common actions at home.",
     goals:["Name more household objects","Use verbs for home actions (open, close, put)","Describe daily tasks around the house"]},

    {type:"teach", trg:"la chiave", src:"the key", pos:"noun", gender:"f",
     note:"Feminine. Plural: le chiavi. From Latin 'clavis.'\n'Chiudere a chiave' = to lock.",
     example:"A: Dove sono le chiavi?\nB: Sul tavolo in ingresso.",
     exampleSrc:"A: Where are the keys?\nB: On the table in the hallway.",
     funFact:"Latin 'clavis' (key) also gave English 'clef' (music), 'clavicle' (collarbone shaped like a key), and 'enclave.' All involve opening, locking, or enclosing. Keys are among the most-searched-for objects in any Italian home."},

    {type:"teach", trg:"la borsa", src:"the bag / purse", pos:"noun", gender:"f",
     note:"Feminine. From Byzantine Greek 'byrsa' (hide, leather).\n'Borsa della spesa' = shopping bag.",
     example:"A: Dov'e la mia borsa?\nB: E sul divano.",
     exampleSrc:"A: Where is my bag?\nB: It is on the sofa.",
     funFact:"'La Borsa' (capitalized) means the stock exchange, from the Flemish 'Van der Beurse' family whose house in Bruges was used for trading. Italian leather bags ('borse in pelle') are world-famous fashion items."},

    {type:"teach", trg:"il cuscino", src:"the pillow / cushion", pos:"noun", gender:"m",
     note:"Masculine. From Latin 'coxinum' (hip support).\nPlural: i cuscini.",
     example:"A: Questo cuscino e molto comodo.\nB: Ne vuoi un altro?",
     exampleSrc:"A: This pillow is very comfortable.\nB: Do you want another one?",
     funFact:"From Latin 'coxa' (hip). Originally a support for sitting, it evolved to mean any soft cushion. English 'cushion' traveled through French from the same root. Italian pillows tend to be firmer than American ones."},

    {type:"teach", trg:"la coperta", src:"the blanket", pos:"noun", gender:"f",
     note:"Feminine. From 'coprire' (to cover).\nPlural: le coperte. 'Coperta' literally means 'covered thing.'",
     example:"A: Hai freddo?\nB: Si, posso avere una coperta?",
     exampleSrc:"A: Are you cold?\nB: Yes, can I have a blanket?",
     funFact:"'Coprire' (to cover) gives: coperta (blanket), coperchio (lid), copertura (coverage). Italian homes traditionally use sheets plus a heavy blanket rather than a duvet, though this is changing with younger generations."},

    {type:"teach", trg:"l'orologio", src:"the clock / watch", pos:"noun", gender:"m",
     note:"Masculine. Uses l' before vowel. From Latin 'horologium.'\nPlural: gli orologi.",
     example:"A: Che ore dice l'orologio?\nB: Le tre e un quarto.",
     exampleSrc:"A: What time does the clock say?\nB: Quarter past three.",
     funFact:"From Greek 'horologion' (time-teller). Italian uses the same word for wall clocks, wristwatches, and alarm clocks. Swiss-Italian watchmaking in the Ticino region has a long tradition alongside Swiss-German and Swiss-French."},

    {type:"teach", trg:"il rubinetto", src:"the faucet / tap", pos:"noun", gender:"m",
     note:"Masculine. Diminutive of 'rubino' (ruby, because early taps had red handles).\n'Aprire il rubinetto' = to turn on the tap.",
     example:"A: Il rubinetto perde acqua.\nB: Devo chiamare l'idraulico.",
     exampleSrc:"A: The faucet is leaking water.\nB: I need to call the plumber.",
     funFact:"'Rubinetto' is a diminutive of 'rubino' (ruby). Early valve handles were red, resembling rubies. Italian tap water is safe to drink everywhere, though many Italians still prefer bottled. The quality varies by region."},

    {type:"teach", trg:"aprire", src:"to open", pos:"verb", gender:null,
     note:"Regular -ire verb. 'Apri la porta' = open the door.\nFrom Latin 'aperire.'",
     example:"A: Puoi aprire la finestra?\nB: Certo, fa caldo!",
     exampleSrc:"A: Can you open the window?\nB: Of course, it is hot!",
     funFact:"From Latin 'aperire.' English 'aperture' (opening in a camera) comes from the same root. Italian April ('aprile') may also derive from 'aperire' because flowers open in spring."},

    {type:"teach", trg:"chiudere", src:"to close / to lock", pos:"verb", gender:null,
     note:"Irregular past: 'ho chiuso.' From Latin 'claudere.'\n'Chiudere a chiave' = to lock (close with key).",
     example:"A: Chiudi la porta, per favore.\nB: Va bene!",
     exampleSrc:"A: Close the door, please.\nB: All right!",
     funFact:"From Latin 'claudere.' English 'close,' 'clause,' and 'closet' all share this root. 'Chiuso' (closed) is the sign you see on Italian shops during lunch break or on Mondays when many are shut."},

    {type:"teach", trg:"mettere", src:"to put / to place", pos:"verb", gender:null,
     note:"Irregular past: 'ho messo.' From Latin 'mittere' (to send).\n'Dove metto questo?' = Where do I put this?",
     example:"A: Dove metto le chiavi?\nB: Mettile sul tavolo.",
     exampleSrc:"A: Where do I put the keys?\nB: Put them on the table.",
     funFact:"Latin 'mittere' originally meant 'to send,' but Italian shifted it to 'to put/place.' English kept the original meaning in 'transmit,' 'emit,' and 'submit.' Same root, different evolution in each language."},

    {type:"teach", trg:"prendere", src:"to take / to get", pos:"verb", gender:null,
     note:"Irregular past: 'ho preso.' Extremely versatile.\n'Prendi il libro' = take the book. Already taught for transport.",
     example:"A: Prendi l'ombrello! Piove!\nB: Grazie, quasi dimenticavo!",
     exampleSrc:"A: Take the umbrella! It is raining!\nB: Thanks, I almost forgot!",
     funFact:"'Prendere' is one of Italian's most versatile verbs: prendere un caffè (have coffee), prendere il treno (catch the train), prendere una decisione (make a decision), prendere il sole (sunbathe). One verb, many uses."},

    {type:"teach", trg:"portare", src:"to bring / to carry", pos:"verb", gender:null,
     note:"Regular -are verb. 'Porto io!' = I will bring it!\nFrom Latin 'portare' (to carry).",
     example:"A: Porta il vino a tavola.\nB: Rosso o bianco?",
     exampleSrc:"A: Bring the wine to the table.\nB: Red or white?",
     funFact:"'Portare' also means 'to wear': 'porto gli occhiali' (I wear glasses). It comes from Latin 'portare' (to carry). You carry clothes on your body. English 'transport' and 'portable' share this root."},

    {type:"teach", trg:"cercare", src:"to look for / to search", pos:"verb", gender:null,
     note:"Regular -are verb. 'Cerco le chiavi' = I am looking for the keys.\nFrom Latin 'circare' (to go around).",
     example:"A: Cosa cerchi?\nB: Cerco il mio telefono. Non lo trovo!",
     exampleSrc:"A: What are you looking for?\nB: I am looking for my phone. I cannot find it!",
     funFact:"From Latin 'circare' (to go around), because searching involves going around looking. English 'search' and 'research' come from the same root. 'Cercare' is one of the most useful everyday Italian verbs."},

    {type:"teach", trg:"trovare", src:"to find", pos:"verb", gender:null,
     note:"Regular -are verb. 'Ho trovato!' = I found it!\nFrom Latin 'tropare' (to compose a song, to find/invent).",
     example:"A: Hai trovato le chiavi?\nB: Si, erano sotto il cuscino!",
     exampleSrc:"A: Did you find the keys?\nB: Yes, they were under the pillow!",
     funFact:"'Trovare' shares a root with 'troubadour' (a medieval poet who 'found' or invented songs). Finding and inventing were the same concept. 'Trovarsi' (reflexive) means 'to find oneself' or 'to be located.'"},

    {type:"teach", trg:"rotto", src:"broken", pos:"adj", gender:"m",
     note:"Masculine: rotto. Feminine: rotta.\nPast participle of 'rompere' (to break).",
     example:"A: La sedia e rotta.\nB: Devo comprarme una nuova.",
     exampleSrc:"A: The chair is broken.\nB: I need to buy a new one.",
     funFact:"'Rompere le scatole' (to break the boxes) means 'to annoy.' 'Rotto' can also mean 'broke' (no money) in colloquial Italian. 'Sono al verde' (I am at the green) is another way to say broke."},

    // Quiz steps
    {type:"mc", q:"Come si dice 'keys' in italiano?",
     opts:["Le chiavi","Le porte","Le scale","Le finestre"],
     ans:"Le chiavi",
     hint:"From Latin 'clavis.' The same root gave English 'clef' in music. Used with 'chiudere a chiave' (to lock)."},

    {type:"fb", s:"Puoi {1} la finestra? Fa caldo!",
     a:["aprire"],
     opts:["aprire","chiudere","mettere","cercare"],
     hint:"You want to let fresh air in because it is hot. This verb means 'to open.'",
     sSrc:"Can you {1} the window? It is hot!"},

    {type:"mc", q:"What does 'chiuso' mean on an Italian shop door?",
     opts:["Welcome","Closed","Open","Sale"],
     ans:"Closed",
     hint:"Past participle of 'chiudere.' You see this sign during lunch breaks and on rest days."},

    {type:"fb", s:"Dove {1} le chiavi? Sul tavolo.",
     a:["metto"],
     opts:["metto","cerco","trovo","prendo"],
     hint:"You are asking where to place something. This verb means 'to put.'",
     sSrc:"Where do I {1} the keys? On the table."},

    {type:"match", pairs:[
      {trg:"aprire", src:"to open"},
      {trg:"chiudere", src:"to close"},
      {trg:"mettere", src:"to put"},
      {trg:"cercare", src:"to look for"},
      {trg:"trovare", src:"to find"}
    ]},

    {type:"mc", q:"What does 'portare' also mean besides 'to bring'?",
     opts:["To sleep","To read","To wear","To eat"],
     ans:"To wear",
     hint:"You 'carry' clothes on your body. 'Porto gli occhiali' means 'I w... glasses.' Same verb, different context."},

    {type:"fb", s:"Cosa {1}? Non trovo il telefono!",
     a:["cerchi"],
     opts:["cerchi","trovi","metti","porti"],
     hint:"You are asking what someone is searching for. This verb means 'to look for.'",
     sSrc:"What are you {1} for? I cannot find the phone!"},

    {type:"mc", q:"What is an 'orologio' in Italian?",
     opts:["A mirror","A painting","A lamp","A clock or watch"],
     ans:"A clock or watch",
     hint:"From Greek 'horologion' (time-teller). Italian uses one word for wall clocks and wristwatches alike."}
  ,{type:"match",pairs:[{trg:"la chiave",src:"the key"},{trg:"la borsa",src:"the bag / purse"},{trg:"il cuscino",src:"the pillow / cushion"},{trg:"la coperta",src:"the blanket"},{trg:"il rubinetto",src:"the faucet / tap"},{trg:"prendere",src:"to take / to get"}]},{type:"match",pairs:[{trg:"portare",src:"to bring / to carry"},{trg:"rotto",src:"broken"}]},{type:"mc",q:"How do you say \"clock / watch\" in Italian?",opts:["l'orologio","il tavolo","la bicicletta","la finestra"],ans:"l'orologio",hint:"Recall the Italian vocabulary word taught in this lesson."}]
};
export default BATCH2_U05_L2;
