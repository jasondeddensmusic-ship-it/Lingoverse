// Batch 6 — Unit 19 extra lesson. I sentimenti: Character Traits & Personality
const BATCH6_L1 = {id:"itv2_u19l_b6_1", title:"Il carattere e la personalita", icon:"\u{1F3AD}", xp:15, board:true, steps:[
{type:"intro", title:"Il carattere e la personalita",
 desc:"Learn adjectives to describe personality traits, character, and temperament in Italian.",
 goals:["Describe positive and negative character traits","Use personality adjectives correctly","Compare different temperaments"]},

{type:"teach", trg:"testardo", src:"stubborn", pos:"adj", gender:null,
 note:"Adjective. m: testardo, f: testarda.\nFrom 'testa' (head). Hard-headed.",
 example:"A: Marco e molto testardo.\nB: Si, non cambia mai idea.",
 exampleSrc:"A: Marco is very stubborn.\nB: Yes, he never changes his mind.",
 funFact:"'Testardo come un mulo' (stubborn as a mule) is the Italian saying. From 'testa' (head), suggesting a hard head that will not budge."},

{type:"teach", trg:"generoso", src:"generous", pos:"adj", gender:null,
 note:"Adjective. m: generoso, f: generosa.\nOpposite: avaro (stingy).",
 example:"A: La nonna e sempre generosa con i nipoti.\nB: Li vizia un po' troppo!",
 exampleSrc:"A: Grandma is always generous with her grandchildren.\nB: She spoils them a bit too much!",
 funFact:"Italian culture values generosity ('generosita'), especially at the dinner table. Not offering food to a guest is considered rude: 'offri qualcosa!' (offer something!)."},

{type:"teach", trg:"avaro", src:"stingy / miserly", pos:"adj", gender:null,
 note:"Adjective. m: avaro, f: avara.\nOpposite: generoso. Also used as a noun.",
 example:"A: Non essere avaro, offri un caffe!\nB: Va bene, pago io.",
 exampleSrc:"A: Do not be stingy, treat us to a coffee!\nB: Alright, I will pay.",
 funFact:"Moliere's famous play 'L'Avare' (The Miser) has its roots in Latin 'avarus.' In Italian, 'tirchio' is the more colloquial word for stingy."},

{type:"teach", trg:"coraggioso", src:"courageous / brave", pos:"adj", gender:null,
 note:"Adjective. m: coraggioso, f: coraggiosa.\nFrom 'coraggio' (courage).",
 example:"A: Sei stato molto coraggioso.\nB: Avevo paura, ma l'ho fatto lo stesso.",
 exampleSrc:"A: You were very brave.\nB: I was afraid, but I did it anyway.",
 funFact:"'Coraggio!' is used as encouragement: 'Come on! You can do it!' The word comes from Latin 'cor' (heart), meaning to act from the heart."},

{type:"teach", trg:"pigro", src:"lazy", pos:"adj", gender:null,
 note:"Adjective. m: pigro, f: pigra.\nFrom Latin 'piger.' Opposite: attivo/laborioso.",
 example:"A: Oggi sono troppo pigro per cucinare.\nB: Ordiniamo una pizza?",
 exampleSrc:"A: Today I am too lazy to cook.\nB: Shall we order a pizza?",
 funFact:"'Poltrona' (armchair) and 'poltrone' (lazy person) share a connection. A 'poltrone' is someone who never gets out of the armchair."},

{type:"teach", trg:"orgoglioso", src:"proud", pos:"adj", gender:null,
 note:"Adjective. m: orgoglioso, f: orgogliosa.\nCan be positive (proud of achievement) or negative (too proud).",
 example:"A: Sono orgoglioso di mio figlio.\nB: Ha fatto un ottimo lavoro!",
 exampleSrc:"A: I am proud of my son.\nB: He did an excellent job!",
 funFact:"'Orgoglio' (pride) comes from Germanic 'urgoli.' It can be positive ('orgoglio nazionale' = national pride) or negative ('l'orgoglio lo acceca' = pride blinds him)."},

{type:"teach", trg:"affidabile", src:"reliable / trustworthy", pos:"adj", gender:null,
 note:"Adjective, same form for m/f. From 'affidare' (to entrust).\nOpposite: inaffidabile.",
 example:"A: Laura e molto affidabile.\nB: Si, puoi sempre contare su di lei.",
 exampleSrc:"A: Laura is very reliable.\nB: Yes, you can always count on her.",
 funFact:"'Affidabile' literally means 'able to be entrusted.' In Italian job descriptions, 'persona affidabile' (reliable person) is one of the most sought-after qualities."},

{type:"teach", trg:"geloso", src:"jealous", pos:"adj", gender:null,
 note:"Adjective. m: geloso, f: gelosa.\nFrom 'gelosia' (jealousy). Can be possessive or envious.",
 example:"A: Non essere geloso, e solo un amico.\nB: Hai ragione, scusa.",
 exampleSrc:"A: Do not be jealous, he is just a friend.\nB: You are right, sorry.",
 funFact:"'Gelosia' also means 'window blind/shutter' in architecture, the slatted shutters that let you look out without being seen, like a jealous observer."},

{type:"teach", trg:"sensibile", src:"sensitive", pos:"adj", gender:null,
 note:"Adjective, same form for m/f. NOT 'sensible' (which is 'sensato').\nEmotionally responsive.",
 example:"A: E una persona molto sensibile.\nB: Si, si commuove facilmente.",
 exampleSrc:"A: She is a very sensitive person.\nB: Yes, she gets emotional easily.",
 funFact:"False friend: 'sensibile' means 'sensitive,' NOT 'sensible.' The English 'sensible' translates to 'sensato' or 'ragionevole' in Italian."},

{type:"teach", trg:"furbo", src:"cunning / sly / street-smart", pos:"adj", gender:null,
 note:"Adjective. m: furbo, f: furba.\nCan be admiring or disapproving depending on context.",
 example:"A: Quel venditore e molto furbo.\nB: Attento, non farti fregare.",
 exampleSrc:"A: That seller is very cunning.\nB: Be careful, do not get tricked.",
 funFact:"'Furbo' in Italian culture is ambivalent. Being 'furbo' can mean admirably clever or dishonestly crafty. 'Fare il furbo' (to play smart) usually has a negative connotation."},

{type:"teach", trg:"ingenuo", src:"naive / ingenuous", pos:"adj", gender:null,
 note:"Adjective. m: ingenuo, f: ingenua.\nOpposite of 'furbo.' Innocent, sometimes too trusting.",
 example:"A: Non essere cosi ingenuo, ti stanno prendendo in giro.\nB: Davvero? Non me ne ero accorto.",
 exampleSrc:"A: Do not be so naive, they are making fun of you.\nB: Really? I had not noticed.",
 funFact:"From Latin 'ingenuus' (freeborn, noble). The original positive meaning (honest, sincere) shifted toward negative (gullible) in modern Italian."},

{type:"teach", trg:"ostinato", src:"obstinate / persistent", pos:"adj", gender:null,
 note:"Adjective. m: ostinato, f: ostinata.\nSimilar to 'testardo' but implies more determination.",
 example:"A: E molto ostinata quando vuole qualcosa.\nB: Alla fine ottiene sempre cio che vuole.",
 exampleSrc:"A: She is very persistent when she wants something.\nB: In the end she always gets what she wants.",
 funFact:"In music, 'ostinato' is a repeated pattern that persists throughout a piece. The musical term was borrowed directly from Italian, reflecting the word's sense of stubborn repetition."},

{type:"teach", trg:"vanitoso", src:"vain / conceited", pos:"adj", gender:null,
 note:"Adjective. m: vanitoso, f: vanitosa.\nExcessively concerned with appearance.",
 example:"A: E un po' vanitoso, si guarda sempre allo specchio.\nB: Ma almeno e sempre elegante!",
 exampleSrc:"A: He is a bit vain, he always looks at himself in the mirror.\nB: But at least he is always elegant!",
 funFact:"From 'vanita' (vanity). The famous Italian saying 'vanitas vanitatum' (vanity of vanities) comes from the Latin Bible and is still used in Italian."},

{type:"teach", trg:"umile", src:"humble / modest", pos:"adj", gender:null,
 note:"Adjective, same form for m/f. From Latin 'humilis' (low/ground).\nOpposite: arrogante.",
 example:"A: Nonostante il successo, resta umile.\nB: E una qualita rara.",
 exampleSrc:"A: Despite his success, he remains humble.\nB: It is a rare quality.",
 funFact:"'Umile' shares its root with 'humus' (earth). To be humble is literally to be close to the ground. Italian culture traditionally values modesty over self-promotion."},

{type:"mc", q:"Quale aggettivo descrive una persona che non cambia mai idea?",
 opts:["testardo","pigro","generoso","umile"],
 ans:"testardo",
 hint:"Hard-headed. From 'testa' (head). Compared to a mule in Italian sayings."},

{type:"fb", s:"Non essere {1}, offri un caffe agli amici!", a:["avaro"],
 opts:["avaro","generoso","coraggioso","furbo"],
 hint:"The opposite of generous. Someone who does not like to spend money.",
 sSrc:"Do not be {1}, buy your friends a coffee!"},

{type:"match", pairs:[
 {trg:"generoso", src:"generous"},
 {trg:"pigro", src:"lazy"},
 {trg:"coraggioso", src:"brave"},
 {trg:"geloso", src:"jealous"}
]},

{type:"mc", q:"'Sensibile' in italiano NON significa...",
 opts:["sensible (English)","sensitive","emotionally responsive","easily moved"],
 ans:"sensible (English)",
 hint:"A famous false friend. The E... 's...' is 'sensato' in Italian."},

{type:"fb", s:"Laura e molto {1}, puoi sempre contare su di lei.", a:["affidabile"],
 opts:["affidabile","vanitosa","ingenua","pigra"],
 hint:"Trustworthy and reliable. Someone you can depend on.",
 sSrc:"Laura is very {1}, you can always count on her."},

{type:"mc", q:"Cosa significa 'fare il furbo'?",
 opts:["to try to be too clever or sneaky","to be brave","to be lazy","to be humble"],
 ans:"to try to be too clever or sneaky",
 hint:"Usually negative: attempting to outsmart others in a dishonest way."},

{type:"fb", s:"Nonostante il successo, resta {1} e gentile.", a:["umile"],
 opts:["umile","vanitoso","orgoglioso","ostinato"],
 hint:"Modest and grounded despite achievements. From Latin 'humilis.'",
 sSrc:"Despite his success, he remains {1} and kind."},

{type:"match", pairs:[
 {trg:"furbo", src:"cunning"},
 {trg:"ingenuo", src:"naive"},
 {trg:"vanitoso", src:"vain"},
 {trg:"ostinato", src:"obstinate"}
]}
,{type:"match",pairs:[{trg:"orgoglioso",src:"proud"},{trg:"sensibile",src:"sensitive"}]}]};
export default BATCH6_L1;
