// Batch 6 — Unit 08 extra lesson. Lo shopping: At the Bank & Money
const BATCH6_L1 = {id:"itv2_u08l_b6_1", title:"In banca", icon:"\u{1F3E6}", xp:15, board:true, steps:[
{type:"intro", title:"In banca",
 desc:"Learn essential vocabulary for banking, money transactions, and financial services in Italy.",
 goals:["Handle basic bank transactions","Talk about accounts and cards","Understand ATM and banking terms"]},

{type:"teach", trg:"il conto", src:"the account / bill", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i conti.\n'Conto corrente' = checking account. 'Il conto' at a restaurant = the bill.",
 example:"A: Vorrei aprire un conto corrente.\nB: Ha un documento d'identita?",
 exampleSrc:"A: I would like to open a checking account.\nB: Do you have an ID?",
 funFact:"'Fare i conti' (to do the math) is also used figuratively: 'fare i conti con qualcuno' means to settle scores with someone."},

{type:"teach", trg:"il bancomat", src:"the ATM / debit card", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i bancomat (invariable).\nRefers to both the machine and the debit card.",
 example:"A: C'e un bancomat qui vicino?\nB: Si, all'angolo, davanti alla farmacia.",
 exampleSrc:"A: Is there an ATM nearby?\nB: Yes, on the corner, in front of the pharmacy.",
 funFact:"'Bancomat' is an Italian brand name that became generic, like 'Kleenex' in English. Both the ATM machine and the debit card are called 'bancomat.'"},

{type:"teach", trg:"prelevare", src:"to withdraw (money)", pos:"verb", gender:null,
 note:"Regular -are verb. prelevo, prelevi, preleva.\nUsed for withdrawing cash from an ATM or bank.",
 example:"A: Devo prelevare cento euro.\nB: Il bancomat e fuori dall'ingresso.",
 exampleSrc:"A: I need to withdraw one hundred euros.\nB: The ATM is outside the entrance.",
 funFact:"'Prelevare' literally means 'to take from before/in advance.' The noun 'prelievo' (withdrawal) also means a blood draw at the doctor."},

{type:"teach", trg:"versare", src:"to deposit / to pour", pos:"verb", gender:null,
 note:"Regular -are verb. verso, versi, versa.\nIn banking: to deposit money. In cooking: to pour.",
 example:"A: Vorrei versare questo assegno.\nB: Compili il modulo, per favore.",
 exampleSrc:"A: I would like to deposit this check.\nB: Fill out the form, please.",
 funFact:"'Versare' covers both 'to deposit money' and 'to pour liquid.' Context makes the meaning clear. 'Versare lacrime' means to shed tears."},

{type:"teach", trg:"il prestito", src:"the loan", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i prestiti.\nFrom 'prestare' (to lend). Bank loan or personal loan.",
 example:"A: Ho chiesto un prestito per la casa.\nB: A che tasso d'interesse?",
 exampleSrc:"A: I applied for a loan for the house.\nB: At what interest rate?",
 funFact:"'Dare in prestito' means to lend, 'prendere in prestito' means to borrow. Italian distinguishes clearly between lending and borrowing with prepositions."},

{type:"teach", trg:"il tasso", src:"the rate / percentage", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i tassi.\n'Tasso d'interesse' = interest rate. Also means 'badger.'",
 example:"A: Il tasso d'interesse e troppo alto.\nB: Proviamo un'altra banca.",
 exampleSrc:"A: The interest rate is too high.\nB: Let's try another bank.",
 funFact:"'Tasso' has three meanings: the interest rate (finance), the badger (animal), and the yew tree (botany). Context is everything in Italian."},

{type:"teach", trg:"lo sportello automatico", src:"the ATM machine", pos:"noun", gender:"m",
 note:"Masculine noun. Literally: automatic counter.\nThe formal name for what everyone calls 'bancomat.'",
 example:"A: Lo sportello automatico non funziona.\nB: Ce n'e un altro in via Roma.",
 exampleSrc:"A: The ATM is not working.\nB: There is another one on Roma street.",
 funFact:"Italians almost never say 'sportello automatico' in daily speech. 'Bancomat' is the universal term, even though it is technically a brand name."},

{type:"teach", trg:"il bonifico", src:"the bank transfer", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i bonifici.\nThe standard way to transfer money between accounts.",
 example:"A: Ti faccio un bonifico domani.\nB: Grazie, mi serve l'IBAN.",
 exampleSrc:"A: I will make a bank transfer tomorrow.\nB: Thanks, I need the IBAN.",
 funFact:"Italy uses IBAN numbers for all bank transfers. The Italian IBAN starts with 'IT' followed by 25 characters. Bonifici are the main payment method for rent and bills."},

{type:"teach", trg:"la bolletta", src:"the utility bill", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le bollette.\nUsed for electricity, gas, water, phone bills.",
 example:"A: La bolletta della luce e arrivata.\nB: Quanto dobbiamo pagare?",
 exampleSrc:"A: The electricity bill has arrived.\nB: How much do we have to pay?",
 funFact:"'Pagare le bollette' (to pay the bills) is a common expression for meeting basic expenses. 'Arrivare a fine mese' (to make it to month's end) is the struggle."},

{type:"teach", trg:"risparmiare", src:"to save (money)", pos:"verb", gender:null,
 note:"Regular -are verb. risparmio, risparmi, risparmia.\nFrom 'ri' + 'sparmiare' (to spare).",
 example:"A: Cerco di risparmiare ogni mese.\nB: Bravo! Quanto metti da parte?",
 exampleSrc:"A: I try to save every month.\nB: Good for you! How much do you put aside?",
 funFact:"Italians are historically big savers. The 'libretto di risparmio' (savings book) was for decades the symbol of Italian family prudence."},

{type:"teach", trg:"il risparmio", src:"the savings / saving", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i risparmi.\n'I risparmi' = savings. 'Un risparmio' = a saving.",
 example:"A: I miei risparmi sono in un conto deposito.\nB: E sicuro?",
 exampleSrc:"A: My savings are in a deposit account.\nB: Is it safe?",
 funFact:"The 'Cassa di Risparmio' (savings bank) was a type of Italian bank focused on savings for ordinary citizens. Many still carry the name today."},

{type:"teach", trg:"lo scontrino", src:"the receipt", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: gli scontrini.\nTax receipt required by law in Italy.",
 example:"A: Tieni lo scontrino.\nB: Perche? Serve per il reso?",
 exampleSrc:"A: Keep the receipt.\nB: Why? Is it needed for a return?",
 funFact:"The 'Guardia di Finanza' (financial police) can stop you outside a shop to check if you have a receipt. It fights tax evasion, a persistent Italian issue."},

{type:"teach", trg:"il debito", src:"the debt", pos:"noun", gender:"m",
 note:"Masculine noun. Plural: i debiti.\nOpposite: il credito. From Latin 'debitum.'",
 example:"A: Non voglio avere debiti.\nB: Neanch'io, preferisco risparmiare.",
 exampleSrc:"A: I do not want to have debts.\nB: Neither do I, I prefer to save.",
 funFact:"'Debito' and 'dovere' (to must/owe) share the Latin root 'debere.' A debt is literally something that is 'owed.'"},

{type:"teach", trg:"la rata", src:"the installment / monthly payment", pos:"noun", gender:"f",
 note:"Feminine noun. Plural: le rate.\n'Pagare a rate' = to pay in installments.",
 example:"A: Pago il computer a rate.\nB: In quante rate?",
 exampleSrc:"A: I am paying for the computer in installments.\nB: In how many installments?",
 funFact:"'Pagare a rate' is extremely common in Italy for large purchases. Electronics, furniture, and even dental work are frequently paid in monthly installments."},

{type:"mc", q:"Come si chiama il trasferimento di soldi tra conti bancari?",
 opts:["il bonifico","il bancomat","il prestito","la bolletta"],
 ans:"il bonifico",
 hint:"The standard way to send money from one bank account to another using an IBAN."},

{type:"fb", s:"Devo {1} duecento euro dal bancomat.", a:["prelevare"],
 opts:["prelevare","versare","risparmiare","prestare"],
 hint:"To take money out of an ATM. The opposite of depositing.",
 sSrc:"I need to {1} two hundred euros from the ATM."},

{type:"match", pairs:[
 {trg:"prelevare", src:"to withdraw"},
 {trg:"versare", src:"to deposit"},
 {trg:"risparmiare", src:"to save"},
 {trg:"il debito", src:"debt"}
]},

{type:"mc", q:"Cosa sono 'le bollette'?",
 opts:["Utility bills for electricity, gas, and water","Bank transfers","Monthly installments","Savings accounts"],
 ans:"Utility bills for electricity, gas, and water",
 hint:"The b... that arrive every month for household services."},

{type:"fb", s:"Pago il telefono a {1}: cinquanta euro al mese.", a:["rate"],
 opts:["rate","conti","debiti","bollette"],
 hint:"Monthly installments. A common way to pay for expensive items.",
 sSrc:"I pay for the phone in {1}: fifty euros per month."},

{type:"mc", q:"In Italia, cosa significa 'bancomat'?",
 opts:["Both the ATM machine and the debit card","Only the debit card","Only the ATM machine","The bank building"],
 ans:"Both the ATM machine and the debit card",
 hint:"A brand name that became generic. It refers to two things at once."},

{type:"fb", s:"Cerco di {1} cento euro ogni mese per le vacanze.", a:["risparmiare"],
 opts:["risparmiare","prelevare","versare","spendere"],
 hint:"To put money aside for the future, not to spend it.",
 sSrc:"I try to {1} one hundred euros every month for the holidays."},

{type:"match", pairs:[
 {trg:"il conto", src:"account"},
 {trg:"la rata", src:"installment"},
 {trg:"il tasso", src:"rate"},
 {trg:"il risparmio", src:"savings"}
]}
,{type:"match",pairs:[{trg:"lo sportello automatico",src:"the ATM machine"},{trg:"lo scontrino",src:"the receipt"}]}]};
export default BATCH6_L1;
