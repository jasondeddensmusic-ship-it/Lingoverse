// Batch 7. Unit 21 extra lesson. Il condizionale: Giving Advice & Suggestions
const BATCH7_L1 = {id:"itv2_u21l_b7_1", title:"Consigli e suggerimenti", icon:"\u{1F4A1}", xp:15, board:true, steps:[
{type:"intro", title:"Consigli e suggerimenti",
 desc:"Learn how to give advice, make suggestions, and express polite recommendations using the conditional mood.",
 goals:["Give advice using the conditional","Make polite suggestions","Express recommendations diplomatically"]},

{type:"teach", trg:"suggerire", src:"to suggest", pos:"verb", gender:null,
 note:"Irregular -ire verb with -isc-. suggerisco, suggerisci, suggerisce.\n'Il suggerimento' = the suggestion.",
 example:"A: Cosa suggerisci per cena?\nB: Suggerirei la trattoria in centro.",
 exampleSrc:"A: What do you suggest for dinner?\nB: I would suggest the trattoria downtown.",
 funFact:"'Suggerire' comes from Latin 'sub + gerere' (to carry from below). You are bringing up an idea from underneath, a subtle way of advising."},

{type:"teach", trg:"raccomandare", src:"to recommend", pos:"verb", gender:null,
 note:"Regular -are verb. raccomando, raccomandi, raccomanda.\n'La raccomandazione' = the recommendation.",
 example:"A: Quale ristorante mi raccomanderesti?\nB: Ti raccomanderei Da Luigi, ottimo pesce.",
 exampleSrc:"A: Which restaurant would you recommend?\nB: I would recommend Da Luigi, excellent fish.",
 funFact:"'Raccomandare' has a double meaning: to recommend AND to ask a favor through connections. 'Raccomandazione' can mean both recommendation letter and pulling strings."},

{type:"teach", trg:"al posto tuo", src:"in your place / if I were you", pos:"adv", gender:null,
 note:"Adverbial phrase. 'Al posto tuo, io...' = If I were you, I would...\nVery common in advice-giving.",
 example:"A: Al posto tuo, accetterei l'offerta.\nB: Pensi davvero che sia una buona idea?",
 exampleSrc:"A: In your place, I would accept the offer.\nB: Do you really think it is a good idea?",
 funFact:"'Al posto tuo' is the most natural Italian way to give advice. It literally means 'in your place,' putting yourself in someone else's shoes before advising."},

{type:"teach", trg:"evitare", src:"to avoid", pos:"verb", gender:null,
 note:"Regular -are verb. evito, eviti, evita.\n'Eviterei di...' = I would avoid...",
 example:"A: Eviterei di prendere l'autostrada.\nB: Perche, c'è traffico?",
 exampleSrc:"A: I would avoid taking the highway.\nB: Why, is there traffic?",
 funFact:"'Evitare' comes from Latin 'ex + via' (out of the way). Italians use it constantly for both physical and metaphorical avoidance: 'evita i problemi' = avoid trouble."},

{type:"teach", trg:"piuttosto", src:"rather / instead", pos:"adv", gender:null,
 note:"Adverb. 'Piuttosto che' = rather than.\n'Farei piuttosto...' = I would rather...",
 example:"A: Piuttosto che guidare, prenderei il treno.\nB: Buona idea, e più rilassante.",
 exampleSrc:"A: Rather than driving, I would take the train.\nB: Good idea, it is more relaxing.",
 funFact:"'Piuttosto che' is a classic connector at B1 level. Note: in standard Italian it means 'rather than,' but in northern dialects it can mean 'or' (which confuses southerners)."},

{type:"teach", trg:"fare attenzione", src:"to be careful / to pay attention", pos:"verb", gender:null,
 note:"Verb phrase. 'Fai attenzione!' = Be careful!\n'Farei attenzione a...' = I would be careful about...",
 example:"A: Farei attenzione con quell'investimento.\nB: Hai ragione, sembra rischioso.",
 exampleSrc:"A: I would be careful with that investment.\nB: You are right, it seems risky.",
 funFact:"'Fare attenzione' is used both for danger warnings and for academic focus. 'Fai attenzione in classe!' = Pay attention in class! Same phrase, very different context."},

{type:"teach", trg:"valutare", src:"to evaluate / to consider", pos:"verb", gender:null,
 note:"Regular -are verb. valuto, valuti, valuta.\n'Valuterei...' = I would consider...",
 example:"A: Valuterei altre opzioni prima di decidere.\nB: Si, non avere fretta.",
 exampleSrc:"A: I would consider other options before deciding.\nB: Yes, do not rush.",
 funFact:"'Valutare' comes from 'valore' (value). You are literally assessing the value of something. 'La valutazione' is also the word for student assessment in Italian schools."},

{type:"teach", trg:"il parere", src:"the opinion / view", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i pareri.\n'A mio parere' = in my opinion. More formal than 'secondo me.'",
 example:"A: Qual e il tuo parere sulla questione?\nB: A mio parere, dovremmo aspettare.",
 exampleSrc:"A: What is your view on the matter?\nB: In my opinion, we should wait.",
 funFact:"'A mio parere' is the formal way to express opinions. 'Secondo me' is informal, 'a mio avviso' is very formal. Italian has many registers for the same function."},

{type:"teach", trg:"prendere in considerazione", src:"to take into consideration", pos:"verb", gender:null,
 note:"Verb phrase. 'Prenderei in considerazione...' = I would consider...\nFormal and diplomatic.",
 example:"A: Dovresti prendere in considerazione questa proposta.\nB: La esamino con attenzione.",
 exampleSrc:"A: You should take this proposal into consideration.\nB: I will examine it carefully.",
 funFact:"This phrase is essential in Italian business and politics. It sounds diplomatic without committing to anything. A skilled 'prendero in considerazione' buys time while sounding respectful."},

{type:"teach", trg:"insistere", src:"to insist", pos:"verb", gender:null,
 note:"Regular -ere verb. insisto, insisti, insiste.\n'Insisterei su...' = I would insist on...",
 example:"A: Insisterei per avere un contratto scritto.\nB: Hai ragione, meglio avere tutto nero su bianco.",
 exampleSrc:"A: I would insist on having a written contract.\nB: You are right, better to have everything in black and white.",
 funFact:"'Nero su bianco' (black on white) means in writing, clearly documented. Italians know the value of written agreements in a culture where verbal promises can be flexible."},

{type:"teach", trg:"rimandare", src:"to postpone", pos:"verb", gender:null,
 note:"Regular -are verb. rimando, rimandi, rimanda.\n'Rimanderei...' = I would postpone...",
 example:"A: Rimanderei la decisione a domani.\nB: A volte dormirci sopra aiuta.",
 exampleSrc:"A: I would postpone the decision until tomorrow.\nB: Sometimes sleeping on it helps.",
 funFact:"'Dormirci sopra' (to sleep on it) is the Italian equivalent of 'sleep on it.' Italians value not making hasty decisions, though 'rimandare' too often is also frowned upon."},

{type:"teach", trg:"proporre", src:"to propose / to suggest", pos:"verb", gender:null,
 note:"Irregular verb like 'porre.' propongo, proponi, propone.\n'La proposta' = the proposal.",
 example:"A: Proporrei di fare una pausa.\nB: Ottima idea, sono stanco.",
 exampleSrc:"A: I would suggest taking a break.\nB: Great idea, I am tired.",
 funFact:"'Proporre' is more formal than 'suggerire.' 'Una proposta di matrimonio' is a marriage proposal. 'Proposta di legge' is a legislative proposal."},

{type:"teach", trg:"convincere", src:"to convince", pos:"verb", gender:null,
 note:"Irregular verb. convinco, convinci, convince. Past: convinto.\n'Essere convinto' = to be convinced.",
 example:"A: Non sono convinto di questa scelta.\nB: Lascia che ti spieghi le ragioni.",
 exampleSrc:"A: I am not convinced by this choice.\nB: Let me explain the reasons.",
 funFact:"'Convincente' (convincing) is a key adjective in debate and argument. Italian rhetoric values the art of 'convincere,' which literally means 'to conquer together' (con + vincere)."},

{type:"mc", q:"Come si inizia un consiglio educato in italiano?",
 opts:["Al posto tuo, io...","Devi fare...","Fai subito...","E obbligatorio..."],
 ans:"Al posto tuo, io...",
 hint:"Putting yourself in someone's shoes. Literally 'in your place, I...'"},

{type:"fb", s:"{1} altre opzioni prima di decidere.", a:["Valuterei"],
 opts:["Valuterei","Valuto","Ho valutato","Valutare"],
 hint:"The conditional form of 'valutare.' A polite way to suggest considering options.",
 sSrc:"I would {1} other options before deciding."},

{type:"match", pairs:[
 {trg:"suggerire", src:"to suggest"},
 {trg:"raccomandare", src:"to recommend"},
 {trg:"proporre", src:"to propose"},
 {trg:"convincere", src:"to convince"}
]},

{type:"mc", q:"Che cosa significa 'nero su bianco'?",
 opts:["Serious and funny","In writing / clearly documented","In black and white photos","Dark and light"],
 ans:"In writing / clearly documented",
 hint:"Having something written down officially, not just spoken."},

{type:"fb", s:"{1} che guidare, prenderei il treno.", a:["Piuttosto"],
 opts:["Piuttosto","Invece","Comunque","Eppure"],
 hint:"An adverb meaning 'rather.' Used to express preference between two options.",
 sSrc:"{1} than driving, I would take the train."},

{type:"mc", q:"Quale forma verbale si usa per dare consigli educati?",
 opts:["Il congiuntivo","L'indicativo","Il condizionale","L'imperativo"],
 ans:"Il condizionale",
 hint:"The mood that softens commands into polite suggestions. 'I would...'"},

{type:"fb", s:"A mio {1}, dovremmo aspettare.", a:["parere"],
 opts:["parere","posto","consiglio","modo"],
 hint:"A formal way to say 'in my opinion.' More elegant than 'secondo me.'",
 sSrc:"In my {1}, we should wait."},

{type:"match", pairs:[
 {trg:"evitare", src:"to avoid"},
 {trg:"rimandare", src:"to postpone"},
 {trg:"insistere", src:"to insist"},
 {trg:"valutare", src:"to evaluate"}
]}
,{type:"match",pairs:[{trg:"fare attenzione",src:"to be careful / to pay attention"},{trg:"prendere in considerazione",src:"to take into consideration"}]}]};
export default BATCH7_L1;
