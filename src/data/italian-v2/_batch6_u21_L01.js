// Batch 6 — Unit 21 extra lesson. Il condizionale: Polite Requests & Hypothetical Wishes
const BATCH6_L1 = {id:"itv2_u21l_b6_1", title:"Cortesia e desideri", icon:"\u{2728}", xp:15, board:true, steps:[
{type:"intro", title:"Cortesia e desideri",
 desc:"Master the conditional mood for polite requests, hypothetical wishes, and giving advice in Italian.",
 goals:["Make polite requests using the conditional","Express hypothetical wishes","Give tactful advice and suggestions"]},

{type:"teach", trg:"gradire", src:"to appreciate / to like (formal)", pos:"verb", gender:null,
 note:"Regular -ire verb with -isc- infix: gradisco, gradisci, gradisce.\nVery polite 'to want/like.'",
 example:"A: Gradirebbe un caffè?\nB: Si, lo gradirei molto, grazie.",
 exampleSrc:"A: Would you appreciate a coffee?\nB: Yes, I would appreciate it very much, thank you.",
 funFact:"'Gradire' is the most polite way to offer something in Italian. Using the conditional 'gradirebbe' is the height of formal courtesy, found in high-end restaurants and hotels."},

{type:"teach", trg:"suggerire", src:"to suggest", pos:"verb", gender:null,
 note:"Regular -ire verb with -isc- infix: suggerisco, suggerisci, suggerisce.\nTo give advice or recommendations.",
 example:"A: Ti suggerirei di partire presto.\nB: Hai ragione, c'è sempre traffico.",
 exampleSrc:"A: I would suggest you leave early.\nB: You are right, there is always traffic.",
 funFact:"'Suggerire' comes from Latin 'suggerere' (to carry from below). In theater, the 'suggeritore' is the prompter who whispers forgotten lines to actors from below the stage."},

{type:"teach", trg:"consigliare", src:"to advise / to recommend", pos:"verb", gender:null,
 note:"Regular -are verb. consiglio, consigli, consiglia.\nFrom 'consiglio' (advice/council).",
 example:"A: Ti consiglierei di studiare di più.\nB: Lo so, hai ragione.",
 exampleSrc:"A: I would advise you to study more.\nB: I know, you are right.",
 funFact:"'Consiglio' means both 'advice' and 'council/board.' 'Consiglio dei Ministri' is the Council of Ministers (Italian cabinet). Advice and governance share the same word."},

{type:"teach", trg:"desiderare", src:"to desire / to wish for", pos:"verb", gender:null,
 note:"Regular -are verb. desidero, desideri, desidera.\nMore formal/intense than 'volere.'",
 example:"A: Desidererei vivere al mare.\nB: Anch'io, sarebbe meraviglioso.",
 exampleSrc:"A: I would wish to live by the sea.\nB: Me too, it would be wonderful.",
 funFact:"'Desiderare' comes from 'de' + 'sidera' (stars). To desire literally meant 'to miss the stars,' expressing a longing for something beautiful and distant."},

{type:"teach", trg:"preferire", src:"to prefer", pos:"verb", gender:null,
 note:"Regular -ire verb with -isc- infix: preferisco, preferisci, preferisce.\nTo choose one over another.",
 example:"A: Preferirei il te al caffè.\nB: Certo, lo preparo subito.",
 exampleSrc:"A: I would prefer tea over coffee.\nB: Of course, I will prepare it right away.",
 funFact:"'Preferire' in the conditional ('preferirei') is the standard polite way to state a preference. It is softer than 'voglio' (I want) and shows courtesy."},

{type:"teach", trg:"bastare", src:"to be enough / to suffice", pos:"verb", gender:null,
 note:"Regular -are verb. basta, bastano.\nOften impersonal: 'basterebbe...' (it would be enough...).",
 example:"A: Basterebbe un'ora per finire.\nB: Allora iniziamo subito.",
 exampleSrc:"A: One hour would be enough to finish.\nB: Then let us start right away.",
 funFact:"'Basta!' alone is one of the most powerful Italian words: 'Enough!' or 'That's it!' Used to end arguments, stop children, or express frustration."},

{type:"teach", trg:"esagerare", src:"to exaggerate", pos:"verb", gender:null,
 note:"Regular -are verb. esagero, esageri, esagera.\nTo overstate or go too far.",
 example:"A: Non esagererei con il sale.\nB: Hai ragione, ne ho messo troppo.",
 exampleSrc:"A: I would not overdo it with the salt.\nB: You are right, I put too much.",
 funFact:"'Non esagerare!' (do not exaggerate!) is a common Italian exclamation. Italians are known for expressive communication, but even they have limits."},

{type:"teach", trg:"accontentarsi", src:"to settle for / to be content with", pos:"verb", gender:null,
 note:"Reflexive -are verb. mi accontento, ti accontenti, si accontenta.\nTo accept less than ideal.",
 example:"A: Mi accontenterei di un piccolo appartamento.\nB: L'importante e avere un tetto.",
 exampleSrc:"A: I would settle for a small apartment.\nB: The important thing is to have a roof.",
 funFact:"'Chi si accontenta gode' (he who is content enjoys) is a famous Italian proverb meaning that happiness comes from appreciating what you have."},

{type:"teach", trg:"permettersi", src:"to afford / to allow oneself", pos:"verb", gender:null,
 note:"Reflexive -ere verb. mi permetto, ti permetti, si permette.\n'Non potrei permettermi...' = I could not afford...",
 example:"A: Non potrei permettermi quella macchina.\nB: E davvero troppo cara.",
 exampleSrc:"A: I could not afford that car.\nB: It is really too expensive.",
 funFact:"'Permettersi' with the conditional is the standard way to discuss affordability. 'Mi permetto di dire...' (I allow myself to say...) is a very polite conversational opener."},

{type:"teach", trg:"arrangiarsi", src:"to manage / to get by", pos:"verb", gender:null,
 note:"Reflexive -are verb. mi arrangio, ti arrangi, si arrangia.\nTo cope with limited resources.",
 example:"A: Come faresti senza macchina?\nB: Mi arrangerei con i mezzi pubblici.",
 exampleSrc:"A: How would you manage without a car?\nB: I would get by with public transport.",
 funFact:"'L'arte di arrangiarsi' (the art of getting by) is considered an essential Italian skill. It means improvising solutions with whatever is available, a cultural talent."},

{type:"teach", trg:"rinunciare", src:"to give up / to renounce", pos:"verb", gender:null,
 note:"Regular -are verb. rinuncio, rinunci, rinuncia.\nTo voluntarily give up something.",
 example:"A: Non rinuncerei mai al caffè.\nB: Neanch'io, e sacro!",
 exampleSrc:"A: I would never give up coffee.\nB: Neither would I, it is sacred!",
 funFact:"'Rinuncia' (renunciation) has a strong historical meaning in Italy. Pope Benedict XVI's 'rinuncia al pontificato' (renunciation of the papacy) in 2013 was the first in 600 years."},

{type:"teach", trg:"giurare", src:"to swear / to vow", pos:"verb", gender:null,
 note:"Regular -are verb. giuro, giuri, giura.\nTo make a solemn promise or oath.",
 example:"A: Giurerei che l'ho visto qui ieri.\nB: Sei sicuro? Io non lo ricordo.",
 exampleSrc:"A: I would swear I saw him here yesterday.\nB: Are you sure? I do not remember.",
 funFact:"'Giurare' in the conditional expresses strong belief without absolute certainty. 'Lo giuro!' (I swear it!) is a dramatic but common Italian exclamation."},

{type:"teach", trg:"scommettere", src:"to bet", pos:"verb", gender:null,
 note:"Irregular -ere verb. scommetto, scommetti, scommette.\nPast participle: scommesso.",
 example:"A: Scommetterei che piove domani.\nB: Accetto la scommessa!",
 exampleSrc:"A: I would bet it rains tomorrow.\nB: I accept the bet!",
 funFact:"'Scommettere' in the conditional ('scommetterei') is a softer way to express a prediction. Italians love to bet informally: 'scommettiamo?' (shall we bet?)."},

{type:"teach", trg:"rimandare", src:"to postpone / to put off", pos:"verb", gender:null,
 note:"Regular -are verb. rimando, rimandi, rimanda.\nTo delay something to a later time.",
 example:"A: Rimanderei la riunione a lunedì.\nB: D'accordo, avviso tutti.",
 exampleSrc:"A: I would postpone the meeting to Monday.\nB: Agreed, I will notify everyone.",
 funFact:"'Non rimandare a domani quello che puoi fare oggi' (do not put off until tomorrow what you can do today) is the Italian anti-procrastination proverb."},

{type:"mc", q:"Qual e il modo più cortese per offrire qualcosa in italiano?",
 opts:["Gradirebbe...? (conditional of gradire)","Vuoi...? (present of volere)","Prendi! (imperative)","Devi prendere (must take)"],
 ans:"Gradirebbe...? (conditional of gradire)",
 hint:"The most formal and polite verb for offering, used in the c... tense."},

{type:"fb", s:"Ti {1} di partire un'ora prima per evitare il traffico.", a:["suggerirei"],
 opts:["suggerirei","giurerei","scommetterei","esagererei"],
 hint:"Conditional of the verb meaning 'to suggest.' Giving friendly advice.",
 sSrc:"I would {1} you leave an hour early to avoid traffic."},

{type:"match", pairs:[
 {trg:"suggerire", src:"to suggest"},
 {trg:"consigliare", src:"to advise"},
 {trg:"desiderare", src:"to desire"},
 {trg:"preferire", src:"to prefer"}
]},

{type:"mc", q:"Cosa significa 'Chi si accontenta gode'?",
 opts:["Those who are content enjoy life","Those who try hard succeed","Those who wait are rewarded","Those who dare win"],
 ans:"Those who are content enjoy life",
 hint:"An Italian proverb about finding happiness in what you have."},

{type:"fb", s:"Non potrei {1} quella vacanza, e troppo cara.", a:["permettermi"],
 opts:["permettermi","arrangiarmi","accontentarmi","rinunciarci"],
 hint:"Reflexive verb meaning 'to afford.' You cannot allow yourself this expense.",
 sSrc:"I could not {1} that vacation, it is too expensive."},

{type:"mc", q:"Cosa significa 'l'arte di arrangiarsi'?",
 opts:["The art of managing with what you have","The art of cooking","The art of negotiation","The art of organization"],
 ans:"The art of managing with what you have",
 hint:"A cultural Italian skill: improvising and getting by with limited resources."},

{type:"fb", s:"Non {1} mai al caffè mattutino!", a:["rinuncerei"],
 opts:["rinuncerei","rimanderei","scommetterei","giurerei"],
 hint:"Conditional of the verb meaning 'to give up.' You would never abandon morning coffee.",
 sSrc:"I would never {1} my morning coffee!"},

{type:"match", pairs:[
 {trg:"arrangiarsi", src:"to get by"},
 {trg:"permettersi", src:"to afford"},
 {trg:"rinunciare", src:"to give up"},
 {trg:"rimandare", src:"to postpone"}
]}
,{type:"match",pairs:[{trg:"bastare",src:"to be enough / to suffice"},{trg:"esagerare",src:"to exaggerate"},{trg:"accontentarsi",src:"to settle for / to be content with"},{trg:"giurare",src:"to swear / to vow"},{trg:"scommettere",src:"to bet"}]},
{type:"fb",s:"Posso {1} il piano: vale la pena provarci.",a:["consigliare"],opts:["consigliare","rimandare","esagerare","rinunciare"],hint:"To recommend something to someone based on your experience.",sSrc:"I can {1} the plan: it is worth trying."}]};
export default BATCH6_L1;
