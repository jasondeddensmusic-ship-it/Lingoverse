// Batch 3 — Unit 25 Lesson 2 (Economy: Fiscal Policy & Banking)
const BATCH3_L_2 = {
  id:"itv2_u25l_b3_2", title:"Politica fiscale e banche", icon:"🏦", xp:15, board:true,
  steps:[
    {type:"intro", title:"Politica fiscale e banche",
     desc:"Explore the banking system, fiscal policy instruments, and monetary concepts. Essential vocabulary for understanding Italian financial news and policy debates.",
     goals:["Discuss banking operations and monetary policy","Describe fiscal instruments and government finance","Analyze Italy's relationship with the eurozone"]},

    {type:"teach", trg:"la banca centrale", src:"the central bank", pos:"noun", gender:"f",
     note:"Feminine compound noun. 'La Banca d'Italia' = the Bank of Italy.\n'La BCE' = European Central Bank (Banca Centrale Europea).",
     example:"A: La banca centrale ha alzato i tassi di interesse.\nB: I mutui diventeranno piu costosi.",
     exampleSrc:"A: The central bank raised interest rates.\nB: Mortgages will become more expensive.",
     funFact:"The Banca d'Italia, founded in 1893, was Italy's sole central bank until the euro era. It now shares monetary policy with the ECB but retains supervisory powers over Italian banks."},

    {type:"teach", trg:"il mutuo", src:"the mortgage", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i mutui.\n'Mutuo a tasso fisso/variabile' = fixed/variable rate mortgage.",
     example:"A: Abbiamo chiesto un mutuo per comprare casa.\nB: Il tasso fisso era al 3,5%.",
     exampleSrc:"A: We applied for a mortgage to buy a house.\nB: The fixed rate was at 3.5%.",
     funFact:"Italian home ownership is among the highest in Europe at about 73%. Many families took out variable-rate mortgages when rates were low, then suffered when the ECB raised rates sharply in 2022-2023."},

    {type:"teach", trg:"l'evasione fiscale", src:"the tax evasion", pos:"noun", gender:"f",
     note:"Feminine compound noun. Illegally avoiding taxes.\n'Evasore fiscale' = tax evader. Distinct from 'elusione' (legal tax avoidance).",
     example:"A: L'evasione fiscale costa all'Italia oltre 100 miliardi l'anno.\nB: E un problema che riguarda tutti.",
     exampleSrc:"A: Tax evasion costs Italy over 100 billion a year.\nB: It is a problem that concerns everyone.",
     funFact:"Italy's 'economia sommersa' (shadow economy) is estimated at 11-12% of GDP. Governments have tried scontrini fiscali (mandatory receipts), fatturazione elettronica, and the 'superbonus' to combat evasion, with mixed results."},

    {type:"teach", trg:"l'IVA", src:"the VAT (Value Added Tax)", pos:"noun", gender:"f",
     note:"Feminine noun. Stands for 'Imposta sul Valore Aggiunto.'\nStandard rate in Italy: 22%. Reduced rates: 4%, 5%, 10%.",
     example:"A: L'IVA standard in Italia e al 22%.\nB: Ma molti beni essenziali hanno un'aliquota ridotta.",
     exampleSrc:"A: The standard VAT in Italy is 22%.\nB: But many essential goods have a reduced rate.",
     funFact:"Italy has four VAT rates: 4% (food staples, books), 5% (some medical supplies), 10% (tourism, restaurants), and 22% (standard). The complexity creates opportunities for evasion and classification disputes."},

    {type:"teach", trg:"il patrimonio", src:"the wealth / assets / estate", pos:"noun", gender:"m",
     note:"Masculine noun. 'Patrimonio netto' = net worth.\n'Imposta patrimoniale' = wealth tax.",
     example:"A: Il patrimonio medio delle famiglie italiane e alto.\nB: Gran parte e investito nel mattone.",
     exampleSrc:"A: The average wealth of Italian families is high.\nB: Much of it is invested in real estate.",
     funFact:"Despite low incomes, Italian household wealth ranks among the highest in Europe, largely because of high home ownership and low household debt. Italians famously prefer 'il mattone' (bricks, meaning property) over financial investments."},

    {type:"mc",
     q:"Quanto costa all'Italia l'evasione fiscale ogni anno, secondo le stime?",
     opts:["Circa 10 miliardi","Circa 50 miliardi","Oltre 100 miliardi","Circa 500 miliardi"],
     ans:"Oltre 100 miliardi",
     hint:"The shadow economy is massive. This staggering amount could fund major public services if collected."},

    {type:"teach", trg:"il risparmio", src:"the savings", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i risparmi.\n'Conto di risparmio' = savings account.\nFrom 'risparmiare' (to save money).",
     example:"A: I risparmi degli italiani sono tradizionalmente alti.\nB: Ma l'inflazione li sta erodendo.",
     exampleSrc:"A: Italians' savings are traditionally high.\nB: But inflation is eroding them.",
     funFact:"Article 47 of the Italian Constitution protects savings: 'La Repubblica incoraggia e tutela il risparmio.' This unique constitutional guarantee reflects the postwar belief that personal savings are a pillar of social stability."},

    {type:"teach", trg:"il prestito", src:"the loan", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i prestiti.\n'Prestito bancario' = bank loan. 'Chiedere un prestito' = to apply for a loan.",
     example:"A: La banca ha rifiutato il prestito.\nB: I requisiti sono diventati piu severi.",
     exampleSrc:"A: The bank refused the loan.\nB: The requirements have become stricter.",
     funFact:"Italian small businesses often struggle to obtain bank loans, a problem called 'credit crunch.' This forces many to rely on self-financing or informal lending, limiting their growth potential."},

    {type:"teach", trg:"il titolo di Stato", src:"the government bond", pos:"noun", gender:"m",
     note:"Masculine compound noun. Plural: i titoli di Stato.\n'BTP' = Buono del Tesoro Poliennale (long-term Italian government bond).",
     example:"A: I titoli di Stato italiani offrono rendimenti alti.\nB: Ma il rischio e legato al debito pubblico.",
     exampleSrc:"A: Italian government bonds offer high yields.\nB: But the risk is linked to the public debt.",
     funFact:"The BTP is Italy's most important government bond. The 'spread' between Italian and German bond yields is closely watched as a barometer of market confidence in Italy. When spread rises, alarm bells ring in Rome."},

    {type:"fb",
     s:"L'{1} standard in Italia e del 22%.",
     a:["IVA"],
     opts:["IVA","IRPEF","IRAP","IMU"],
     hint:"This tax is added to the price of goods and services. It stands for 'Imposta sul Valore Aggiunto.'",
     sSrc:"The standard {1} in Italy is 22%."},

    {type:"teach", trg:"lo spread", src:"the spread (bond yield difference)", pos:"noun", gender:"m",
     note:"Masculine noun. English loanword. The difference between Italian and German bond yields.\nA key indicator of market confidence.",
     example:"A: Lo spread e salito a 200 punti base.\nB: I mercati sono nervosi per l'instabilita politica.",
     exampleSrc:"A: The spread rose to 200 basis points.\nB: Markets are nervous about political instability.",
     funFact:"During the 2011 sovereign debt crisis, Italy's spread soared above 500 points, forcing PM Berlusconi's resignation. Since then, 'spread' has become a household word in Italy, understood by almost everyone."},

    {type:"teach", trg:"la valuta", src:"the currency", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le valute.\n'Valuta estera' = foreign currency. 'Mercato valutario' = currency market.",
     example:"A: L'euro e la valuta comune di 20 paesi europei.\nB: Prima dell'euro, l'Italia usava la lira.",
     exampleSrc:"A: The euro is the common currency of 20 European countries.\nB: Before the euro, Italy used the lira.",
     funFact:"Italy abandoned the lira on January 1, 2002. Many Italians still mentally convert euro prices to lire. The lira was prone to devaluation, which helped exports but eroded savings. The euro ended that cycle."},

    {type:"teach", trg:"la svalutazione", src:"the devaluation", pos:"noun", gender:"f",
     note:"Feminine noun. The loss of value of a currency.\nOpposite: la rivalutazione (revaluation).",
     example:"A: La svalutazione della lira aiutava le esportazioni.\nB: Con l'euro, questo strumento non esiste piu.",
     exampleSrc:"A: The devaluation of the lira helped exports.\nB: With the euro, this tool no longer exists.",
     funFact:"Before the euro, Italy regularly devalued the lira to boost competitiveness. Critics of the euro argue that losing this tool has trapped Italy in slow growth. Supporters counter that devaluation was an inflationary shortcut."},

    {type:"mc",
     q:"Che cos'e lo 'spread' nel contesto finanziario italiano?",
     opts:["La differenza tra entrate e uscite dello Stato","Il tasso di inflazione annuale misurato dall'ISTAT","La differenza di rendimento tra titoli di Stato italiani e tedeschi","Il costo medio dei mutui nelle banche italiane"],
     ans:"La differenza di rendimento tra titoli di Stato italiani e tedeschi",
     hint:"The gap between Italian and German government bond yields. When it rises, markets are signaling less confidence in Italy."},

    {type:"teach", trg:"il fallimento bancario", src:"the bank failure", pos:"noun", gender:"m",
     note:"Masculine compound noun. When a bank becomes insolvent.\n'Salvataggio bancario' = bank bailout.",
     example:"A: Il fallimento bancario ha causato la perdita dei risparmi di migliaia di famiglie.\nB: Il governo e intervenuto con un piano di salvataggio.",
     exampleSrc:"A: The bank failure caused thousands of families to lose their savings.\nB: The government intervened with a rescue plan.",
     funFact:"Italy experienced several bank collapses in 2015-2017 (Banca Etruria, Monte dei Paschi di Siena). The losses hit ordinary savers who had been sold subordinated bonds by their own banks, sparking public outrage."},

    {type:"teach", trg:"l'aliquota", src:"the tax rate / rate", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le aliquote.\n'Aliquota fiscale' = tax rate. 'Aliquota progressiva' = progressive rate.",
     example:"A: L'aliquota massima dell'IRPEF e del 43%.\nB: Si applica ai redditi sopra i 50.000 euro.",
     exampleSrc:"A: The maximum income tax rate is 43%.\nB: It applies to income above 50,000 euros.",
     funFact:"Italy's income tax (IRPEF) has four brackets with rates from 23% to 43%. The high top rate, combined with regional and municipal surcharges, means the effective tax burden on higher earners can exceed 50%."},

    {type:"match", pairs:[
      {trg:"mutuo", src:"mortgage"},
      {trg:"spread", src:"bond yield difference"},
      {trg:"valuta", src:"currency"},
      {trg:"prestito", src:"loan"},
      {trg:"aliquota", src:"tax rate"}
    ]},

    {type:"fb",
     s:"La {1} della lira era uno strumento per favorire le esportazioni italiane.",
     a:["svalutazione"],
     opts:["svalutazione","inflazione","recessione","evasione"],
     hint:"Deliberately lowering the value of a country's currency to make its exports cheaper abroad.",
     sSrc:"The {1} of the lira was a tool to boost Italian exports."},

    {type:"mc",
     q:"Quale articolo della Costituzione italiana tutela il risparmio?",
     opts:["Articolo 1","Articolo 11","Articolo 47","Articolo 139"],
     ans:"Articolo 47",
     hint:"This article declares that the Republic encourages and protects savings. A unique constitutional guarantee reflecting postwar values."}
  ]
};
export default BATCH3_L_2;
