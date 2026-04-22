// Batch 7. Unit 02 extra lesson. Numbers, Days & Time: Ordinal Numbers & Measurements
const BATCH7_L1 = {id:"itv2_u02l_b7_1", title:"Misure e numeri ordinali", icon:"\u{1F4CF}", xp:15, board:true, steps:[
{type:"intro", title:"Misure e numeri ordinali",
 desc:"Learn ordinal numbers, basic measurements, and how to express dimensions and quantities in Italian.",
 goals:["Use ordinal numbers from first to tenth","Express height, weight, and distance","Handle basic measurements in daily life"]},

{type:"teach", trg:"quarto", src:"fourth", pos:"adj", gender:null,
 note:"Ordinal number. Quarto/a/i/e.\nAlso a noun: 'un quarto' = a quarter.",
 example:"A: Abiti al quarto piano?\nB: Si, senza ascensore!",
 exampleSrc:"A: Do you live on the fourth floor?\nB: Yes, without an elevator!",
 funFact:"In Italy, the ground floor is 'piano terra,' so the 'quarto piano' is actually the fifth level up. This confuses many tourists."},

{type:"teach", trg:"quinto", src:"fifth", pos:"adj", gender:null,
 note:"Ordinal number. Quinto/a/i/e.\nFrom Latin 'quintus.'",
 example:"A: E la quinta volta che chiamo.\nB: Mi scusi per l'attesa.",
 exampleSrc:"A: This is the fifth time I am calling.\nB: I apologize for the wait.",
 funFact:"'Quintessenza' (quintessence) literally means 'fifth essence.' Ancient philosophers believed there were four elements plus a fifth, purer one."},

{type:"teach", trg:"sesto", src:"sixth", pos:"adj", gender:null,
 note:"Ordinal number. Sesto/a/i/e.\nAlso a common Italian surname and place name.",
 example:"A: Siamo al sesto capitolo del libro.\nB: Mancano solo due capitoli.",
 exampleSrc:"A: We are at the sixth chapter of the book.\nB: Only two chapters left.",
 funFact:"'Sesto senso' (sixth sense) is used just like in English. There is a town called Sesto near Florence, and Sesto San Giovanni near Milan."},

{type:"teach", trg:"settimo", src:"seventh", pos:"adj", gender:null,
 note:"Ordinal number. Settimo/a/i/e.\nFrom 'sette' (seven).",
 example:"A: Il settimo giorno Dio si riposo.\nB: E noi facciamo lo stesso la domenica!",
 exampleSrc:"A: On the seventh day God rested.\nB: And we do the same on Sunday!",
 funFact:"Federico Fellini's famous film is called 'La settima arte' (the seventh art), referring to cinema. Italy considers film the seventh of the fine arts."},

{type:"teach", trg:"ottavo", src:"eighth", pos:"adj", gender:null,
 note:"Ordinal number. Ottavo/a/i/e.\nFrom 'otto' (eight).",
 example:"A: Siamo all'ottavo posto nella classifica.\nB: Non male, possiamo migliorare.",
 exampleSrc:"A: We are in eighth place in the ranking.\nB: Not bad, we can improve.",
 funFact:"'Ottava' in music refers to an octave (eight notes). Italian gave the world most musical terminology, including 'ottava.'"},

{type:"teach", trg:"nono", src:"ninth", pos:"adj", gender:null,
 note:"Ordinal number. Nono/a/i/e.\nFrom 'nove' (nine).",
 example:"A: Mia figlia e in nona classe.\nB: Quanti anni ha?",
 exampleSrc:"A: My daughter is in ninth grade.\nB: How old is she?",
 funFact:"Beethoven's famous 'Nona sinfonia' (Ninth Symphony) includes the 'Ode to Joy,' which became the anthem of the European Union."},

{type:"teach", trg:"decimo", src:"tenth", pos:"adj", gender:null,
 note:"Ordinal number. Decimo/a/i/e.\nFrom 'dieci' (ten).",
 example:"A: E il decimo anniversario del ristorante.\nB: Festeggiamo con una cena speciale!",
 exampleSrc:"A: It is the tenth anniversary of the restaurant.\nB: Let us celebrate with a special dinner!",
 funFact:"'Decima' was a medieval tax of one-tenth of income, similar to a tithe. The word survives in 'decimare' (to decimate), originally meaning to kill every tenth soldier."},

{type:"teach", trg:"il metro", src:"the meter", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i metri.\nItaly uses the metric system exclusively.",
 example:"A: La stanza e cinque metri per quattro.\nB: E abbastanza grande.",
 exampleSrc:"A: The room is five meters by four.\nB: It is quite large.",
 funFact:"Italy adopted the metric system during the Napoleonic era. 'Metro' is also short for 'metropolitana' (subway), so context matters."},

{type:"teach", trg:"il chilometro", src:"the kilometer", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i chilometri.\nAbbreviated: km. Stress on the 'lo' syllable.",
 example:"A: Quanti chilometri mancano?\nB: Circa cinquanta.",
 exampleSrc:"A: How many kilometers are left?\nB: About fifty.",
 funFact:"Italian highways (autostrade) show distances in kilometers. The famous Autostrada del Sole (A1) from Milan to Naples is 759 km long."},

{type:"teach", trg:"il centimetro", src:"the centimeter", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i centimetri.\nAbbreviated: cm. Used for small measurements.",
 example:"A: Quanto sei alto?\nB: Un metro e ottanta centimetri.",
 exampleSrc:"A: How tall are you?\nB: One meter and eighty centimeters.",
 funFact:"Italians express height in meters and centimeters, never feet and inches. 'Sono alto un metro e settantacinque' is how you state your height."},

{type:"teach", trg:"pesare", src:"to weigh", pos:"verb", gender:null,
 note:"Regular -are verb. peso, pesi, pesa.\n'Quanto pesi?' = How much do you weigh?",
 example:"A: Quanto pesa questa valigia?\nB: Pesa dodici chili.",
 exampleSrc:"A: How much does this suitcase weigh?\nB: It weighs twelve kilos.",
 funFact:"Italy uses kilograms. At Italian markets, you order by the 'etto' (100 grams): 'due etti di prosciutto' means 200 grams of ham."},

{type:"teach", trg:"il litro", src:"the liter", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i litri.\nUsed for all liquids. Abbreviated: l or L.",
 example:"A: Un litro di latte, per favore.\nB: Intero o scremato?",
 exampleSrc:"A: One liter of milk, please.\nB: Whole or skim?",
 funFact:"Italian water bottles come in sizes from 'mezzo litro' (half liter) to 'due litri' (two liters). Ordering 'un litro' of house wine is perfectly normal at restaurants."},

{type:"teach", trg:"il doppio", src:"the double / twice", pos:"noun", gender:"m",
 note:"Masculine noun. 'Il doppio' = twice as much.\nAlso adjective: 'doppio senso' = double meaning.",
 example:"A: Questa borsa costa il doppio.\nB: Troppo cara, cerchiamo un'altra.",
 exampleSrc:"A: This bag costs double.\nB: Too expensive, let us look for another.",
 funFact:"A 'caffè doppio' is a double espresso. In tennis, 'il doppio' means doubles. 'Fare il doppio gioco' means to play a double game (be two-faced)."},

{type:"teach", trg:"la metà", src:"the half", pos:"noun", gender:"f",
 note:"Feminine noun. 'A metà prezzo' = at half price.\n'La metà di' = half of.",
 example:"A: Voglio solo la metà della pizza.\nB: Va bene, dividiamo.",
 exampleSrc:"A: I only want half of the pizza.\nB: Alright, let us split it.",
 funFact:"'Fare le cose a metà' means to do things halfway (badly). 'La mia dolce metà' (my sweet half) is an old-fashioned way to say 'my partner.'"},

{type:"mc", q:"Come si dice 'fifth' in italiano?",
 opts:["quinto","quarto","sesto","settimo"],
 ans:"quinto",
 hint:"The ordinal form of 'cinque' (five). Ends in -to like most ordinals."},

{type:"fb", s:"La stanza e cinque {1} per quattro.", a:["metri"],
 opts:["metri","litri","chili","centimetri"],
 hint:"The base unit of length in the metric system.",
 sSrc:"The room is five {1} by four."},

{type:"match", pairs:[
 {trg:"quarto", src:"fourth"},
 {trg:"sesto", src:"sixth"},
 {trg:"ottavo", src:"eighth"},
 {trg:"decimo", src:"tenth"}
]},

{type:"mc", q:"In Italia, come si esprime l'altezza?",
 opts:["In litri","In metri e centimetri","In piedi e pollici","In chilometri"],
 ans:"In metri e centimetri",
 hint:"Italy uses the metric system. Height uses the base unit of length."},

{type:"fb", s:"Un {1} di latte, per favore.", a:["litro"],
 opts:["litro","metro","chilo","etto"],
 hint:"The metric unit used to measure liquids.",
 sSrc:"One {1} of milk, please."},

{type:"mc", q:"Che cosa significa 'la metà della pizza'?",
 opts:["the size of the pizza","double the pizza","half of the pizza","the price of the pizza"],
 ans:"half of the pizza",
 hint:"When you divide something into two equal parts, each part is this."},

{type:"fb", s:"Questa borsa costa il {1} dell'altra.", a:["doppio"],
 opts:["doppio","metro","litro","quarto"],
 hint:"Twice as much. Two times the amount.",
 sSrc:"This bag costs {1} the other one."},

{type:"match", pairs:[
 {trg:"il metro", src:"meter"},
 {trg:"il litro", src:"liter"},
 {trg:"il chilometro", src:"kilometer"},
 {trg:"il centimetro", src:"centimeter"}
]}
,{type:"match",pairs:[{trg:"nono",src:"ninth"},{trg:"pesare",src:"to weigh"},{trg:"la metà",src:"the half"}]}]};
export default BATCH7_L1;
