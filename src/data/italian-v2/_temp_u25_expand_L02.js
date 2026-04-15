// Unit 25 Expansion — Lesson 5: Il sistema bancario
const LESSON_5 = {
  id:"itv2_u25l5", title:"Il sistema bancario", icon:"🏦", xp:15, board:true,
  steps:[
    {type:"intro", title:"Il sistema bancario",
     desc:"Learn essential vocabulary for banking operations, financial services, and the Italian banking system. These terms are vital for everyday financial transactions and news comprehension.",
     goals:["Describe banking operations and services","Discuss loans, mortgages, and savings","Understand Italian banking terminology"]},

    {type:"teach", trg:"il mutuo", src:"the mortgage", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i mutui.\n'Mutuo ipotecario' = mortgage loan. 'Accendere un mutuo' = to take out a mortgage.",
     example:"A: Abbiamo acceso un mutuo per comprare casa.\nB: A tasso fisso o variabile?",
     exampleSrc:"A: We took out a mortgage to buy a house.\nB: At a fixed or variable rate?",
     funFact:"Italian mortgages can last up to 40 years. The verb 'accendere' (to light/ignite) is used metaphorically: you 'light' a mortgage as you would a fire. The average Italian takes out their first mortgage around age 35."},

    {type:"teach", trg:"il prestito", src:"the loan", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i prestiti.\n'Prestito personale' = personal loan. 'Chiedere un prestito' = to request a loan.",
     example:"A: Ho chiesto un prestito per ristrutturare casa.\nB: Quanto ti hanno concesso?",
     exampleSrc:"A: I requested a loan to renovate the house.\nB: How much did they grant you?",
     funFact:"From 'prestare' (to lend). Italian distinguishes 'prestito' (you borrow) from 'finanziamento' (the bank provides funding). In informal Italian, 'mi fai un prestito?' can simply mean 'can you lend me some money?'"},

    {type:"teach", trg:"il conto corrente", src:"the checking account", pos:"noun", gender:"m",
     note:"Masculine compound noun. 'Aprire un conto corrente' = to open a checking account.\n'Estratto conto' = bank statement.",
     example:"A: Vorrei aprire un conto corrente.\nB: Ha un documento di identita?",
     exampleSrc:"A: I would like to open a checking account.\nB: Do you have an ID document?",
     funFact:"Italian banking has undergone massive consolidation. Where there were once hundreds of small local banks ('casse di risparmio'), mega-groups like Intesa Sanpaolo and UniCredit now dominate. Opening a conto corrente still often requires visiting a branch in person."},

    {type:"teach", trg:"il bonifico", src:"the bank transfer", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i bonifici.\n'Bonifico bancario' = bank transfer. 'Fare un bonifico' = to make a transfer.",
     example:"A: Ti faccio un bonifico domani mattina.\nB: Grazie, mi serve il tuo IBAN.",
     exampleSrc:"A: I will make a bank transfer to you tomorrow morning.\nB: Thanks, I need your IBAN.",
     funFact:"Italy adopted the SEPA (Single Euro Payments Area) system, making European transfers as easy as domestic ones. The word 'bonifico' comes from Latin 'bonus facere' (to do good), reflecting the positive act of transferring money."},

    {type:"teach", trg:"il tasso di interesse", src:"the interest rate", pos:"noun", gender:"m",
     note:"Masculine compound noun. 'Tasso fisso' = fixed rate.\n'Tasso variabile' = variable rate. 'Tasso di riferimento' = reference rate.",
     example:"A: Il tasso di interesse e salito al quattro per cento.\nB: Le rate del mutuo saranno piu alte.",
     exampleSrc:"A: The interest rate rose to four percent.\nB: The mortgage payments will be higher.",
     funFact:"The European Central Bank, headquartered in Frankfurt, sets the base rate that affects all Italian loans. When Mario Draghi led the ECB from 2011 to 2019, Italians took particular pride in having a compatriot steering European monetary policy."},

    {type:"mc",
     q:"Come si chiama il trasferimento di denaro da un conto bancario a un altro?",
     opts:["Un mutuo","Un bonifico","Un prestito","Un dividendo"],
     ans:"Un bonifico",
     hint:"An electronic money transfer between bank accounts. You need the recipient's IBAN code to complete one."},

    {type:"teach", trg:"il deposito", src:"the deposit", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i depositi.\n'Conto deposito' = deposit account (savings). 'Depositare' (verb) = to deposit.",
     example:"A: Ho fatto un deposito di cinquemila euro.\nB: Il conto deposito offre un buon interesse.",
     exampleSrc:"A: I made a deposit of five thousand euros.\nB: The deposit account offers good interest.",
     funFact:"Italian 'conti deposito' (savings accounts) saw a revival when interest rates rose in 2023. For decades, near-zero rates made saving unattractive. The return of meaningful deposit rates was front-page financial news."},

    {type:"teach", trg:"il prelievo", src:"the withdrawal", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i prelievi.\n'Prelievo al bancomat' = ATM withdrawal. 'Prelevare' (verb) = to withdraw.",
     example:"A: Ho fatto un prelievo al bancomat.\nB: Quanto hai prelevato?\nA: Duecento euro.",
     exampleSrc:"A: I made a withdrawal at the ATM.\nB: How much did you withdraw?\nA: Two hundred euros.",
     funFact:"Italy uses the word 'bancomat' (from 'banco' + 'automatico') both for the ATM machine and the debit card itself. 'Pago con il bancomat' means 'I pay by debit card,' not 'I pay at the ATM.'"},

    {type:"fb",
     s:"Abbiamo acceso un {1} ipotecario per comprare la casa.",
     a:["mutuo"],
     opts:["mutuo","prestito","deposito","bonifico"],
     hint:"A long-term loan specifically for buying property, secured against the property itself. Can last decades.",
     sSrc:"We took out a {1} to buy the house."},

    {type:"teach", trg:"la rata", src:"the installment / payment", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le rate.\n'Pagare a rate' = to pay in installments. 'Rata del mutuo' = mortgage payment.",
     example:"A: La rata del mutuo e di ottocento euro al mese.\nB: E sostenibile con il tuo stipendio?",
     exampleSrc:"A: The mortgage payment is eight hundred euros per month.\nB: Is it manageable with your salary?",
     funFact:"'Pagare a rate' (paying in installments) is deeply embedded in Italian consumer culture. From electronics to furniture, 'tasso zero' (zero interest) installment plans are ubiquitous in Italian shops."},

    {type:"teach", trg:"lo scoperto", src:"the overdraft", pos:"noun", gender:"m",
     note:"Masculine noun. 'Andare in scoperto' = to go into overdraft.\nAlso: 'fido bancario' = authorized overdraft.",
     example:"A: Il conto e andato in scoperto.\nB: Devi coprirlo entro fine mese.",
     exampleSrc:"A: The account went into overdraft.\nB: You need to cover it by the end of the month.",
     funFact:"'Scoperto' literally means 'uncovered' or 'discovered.' An overdraft leaves your account 'uncovered,' exposed without funds. Italian banks charge steep fees for unauthorized overdrafts, making it a situation to avoid."},

    {type:"mc",
     q:"Che cos'e il 'bancomat' in Italia?",
     opts:["Solo la macchina per prelevare contanti","Sia la macchina per prelevare sia la carta di debito","Un tipo di conto corrente","Un metodo di pagamento online"],
     ans:"Sia la macchina per prelevare sia la carta di debito",
     hint:"In Italian, this word does double duty. It refers to both the cash machine on the wall and the plastic card you use for everyday purchases."},

    {type:"teach", trg:"la commissione", src:"the fee / commission", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le commissioni.\n'Commissione bancaria' = bank fee. Also means 'committee' or 'errand.'",
     example:"A: Le commissioni bancarie sono troppo alte.\nB: Alcune banche online non le applicano.",
     exampleSrc:"A: Bank fees are too high.\nB: Some online banks do not charge them.",
     funFact:"'Commissione' has three distinct meanings: a bank fee, a committee, and an errand. 'Fare le commissioni' means running errands, completely unrelated to banking. Context always clarifies which meaning applies."},

    {type:"match", pairs:[
      {trg:"mutuo", src:"mortgage"},
      {trg:"bonifico", src:"bank transfer"},
      {trg:"prelievo", src:"withdrawal"},
      {trg:"rata", src:"installment"},
      {trg:"scoperto", src:"overdraft"}
    ]},

    {type:"fb",
     s:"La {1} del mutuo e di settecento euro al mese.",
     a:["rata"],
     opts:["rata","commissione","liquidita","obbligazione"],
     hint:"The regular monthly payment you make toward a mortgage or loan. Breaking a large sum into smaller periodic amounts.",
     sSrc:"The mortgage {1} is seven hundred euros per month."},

    {type:"mc",
     q:"Che differenza c'e tra un mutuo e un prestito?",
     opts:["Non c'e differenza, sono la stessa cosa","Il mutuo e garantito da un immobile, il prestito di solito no","Il prestito dura piu a lungo del mutuo","Il mutuo non ha interessi"],
     ans:"Il mutuo e garantito da un immobile, il prestito di solito no",
     hint:"One is secured against property (a house or apartment), which the bank can claim if you default. The other is typically unsecured."}
  ]
};
export default LESSON_5;
