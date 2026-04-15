// Unit 25 Expansion. Lesson 6: Indicatori economici
const LESSON_6 = {
  id:"itv2_u25l6", title:"Indicatori economici", icon:"📉", xp:15, board:true,
  steps:[
    {type:"intro", title:"Indicatori economici",
     desc:"Learn to discuss key economic indicators, fiscal policy tools, and macroeconomic trends. Essential vocabulary for understanding economic news and policy debates in Italy.",
     goals:["Name and explain major economic indicators","Discuss economic cycles and trends","Understand fiscal and monetary policy vocabulary"]},

    {type:"teach", trg:"la recessione", src:"the recession", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le recessioni.\nTwo consecutive quarters of negative GDP growth.\n'Entrare in recessione' = to enter a recession.",
     example:"A: L'economia e entrata in recessione.\nB: La disoccupazione sta salendo rapidamente.",
     exampleSrc:"A: The economy has entered a recession.\nB: Unemployment is rising rapidly.",
     funFact:"Italy has experienced several recessions since 2000, earning the nickname 'il malato d'Europa' (the sick man of Europe) from international economists. Each crisis deepens the debate about structural reforms."},

    {type:"teach", trg:"la ripresa", src:"the recovery", pos:"noun", gender:"f",
     note:"Feminine noun. The phase after a recession when the economy starts growing again.\n'Ripresa economica' = economic recovery.",
     example:"A: La ripresa economica e ancora fragile.\nB: I consumatori restano prudenti nelle spese.",
     exampleSrc:"A: The economic recovery is still fragile.\nB: Consumers remain cautious in their spending.",
     funFact:"Italy's post-COVID recovery plan is called 'PNRR' (Piano Nazionale di Ripresa e Resilienza). Worth over 190 billion euros in EU funds, it is the largest investment plan in Italian postwar history."},

    {type:"teach", trg:"il potere d'acquisto", src:"the purchasing power", pos:"noun", gender:"m",
     note:"Masculine compound noun. How much goods and services your money can buy.\n'Erosione del potere d'acquisto' = erosion of purchasing power.",
     example:"A: L'inflazione ha ridotto il potere d'acquisto delle famiglie.\nB: I salari non sono cresciuti allo stesso ritmo.",
     exampleSrc:"A: Inflation has reduced households' purchasing power.\nB: Wages have not grown at the same pace.",
     funFact:"Italian wages have essentially stagnated for two decades while prices have risen, creating a sustained decline in purchasing power. This explains the common Italian complaint 'non si arriva a fine mese' (you cannot make it to the end of the month)."},

    {type:"teach", trg:"il prodotto interno lordo", src:"the gross domestic product", pos:"noun", gender:"m",
     note:"Masculine compound noun. Abbreviated as PIL.\nThe total value of goods and services produced in a country.",
     example:"A: Il prodotto interno lordo italiano e il terzo in Europa.\nB: Ma la crescita e tra le piu basse.",
     exampleSrc:"A: Italian GDP is the third largest in Europe.\nB: But growth is among the lowest.",
     funFact:"The full phrase 'prodotto interno lordo' breaks down beautifully: 'prodotto' (product), 'interno' (domestic), 'lordo' (gross, before deductions). Italians almost exclusively use the abbreviation PIL in conversation and media."},

    {type:"teach", trg:"la politica monetaria", src:"the monetary policy", pos:"noun", gender:"f",
     note:"Feminine compound noun. Controlled by the ECB for eurozone countries.\n'Politica fiscale' = fiscal policy (controlled by national government).",
     example:"A: La politica monetaria della BCE influenza tutta l'eurozona.\nB: Le decisioni sui tassi toccano milioni di famiglie.",
     exampleSrc:"A: The ECB's monetary policy affects the entire eurozone.\nB: Interest rate decisions affect millions of families.",
     funFact:"Since joining the euro, Italy no longer controls its own monetary policy. This trade-off, gaining price stability but losing the ability to devalue the lira, remains the most debated aspect of European integration in Italy."},

    {type:"mc",
     q:"Che cos'e una recessione economica?",
     opts:["Un aumento dei prezzi superiore al 10%","Due trimestri consecutivi di crescita negativa del PIL","Una crisi bancaria nazionale","Un calo della borsa superiore al 20%"],
     ans:"Due trimestri consecutivi di crescita negativa del PIL",
     hint:"Technically defined as two consecutive quarters of economic shrinkage. When the total value of goods produced goes down for six months or more."},

    {type:"teach", trg:"l'imposta", src:"the tax (levy)", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le imposte.\nA mandatory government levy. 'Imposta sul reddito' = income tax.\n'Imposta sul valore aggiunto (IVA)' = VAT.",
     example:"A: L'imposta sul reddito in Italia e progressiva.\nB: Le aliquote vanno dal 23% al 43%.",
     exampleSrc:"A: Income tax in Italy is progressive.\nB: Rates range from 23% to 43%.",
     funFact:"Italy has a complex tax system with dozens of different imposte. The distinction between 'tassa' (fee for a service) and 'imposta' (compulsory levy) matters legally but is lost on most citizens, who use 'tasse' for everything."},

    {type:"teach", trg:"l'aliquota", src:"the tax rate / bracket", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le aliquote.\nThe percentage rate at which a tax is applied.\n'Aliquota IVA' = VAT rate. 'Aliquota marginale' = marginal rate.",
     example:"A: L'aliquota IVA ordinaria in Italia e del 22%.\nB: Ci sono aliquote ridotte per alimentari e libri.",
     exampleSrc:"A: The standard VAT rate in Italy is 22%.\nB: There are reduced rates for food and books.",
     funFact:"Italy has four VAT rates: 4% (essential goods), 5% (certain foods), 10% (tourism, some foods), and 22% (standard). This complexity reflects decades of political compromises and industry lobbying for favorable rates."},

    {type:"fb",
     s:"L'inflazione ha eroso il {1} d'acquisto delle famiglie italiane.",
     a:["potere"],
     opts:["potere","prodotto","tasso","rendimento"],
     hint:"Combined with 'd'acquisto,' this term describes how much your money can actually buy. When prices rise faster than wages, this shrinks.",
     sSrc:"Inflation has eroded the purchasing {1} of Italian families."},

    {type:"teach", trg:"la stagnazione", src:"the stagnation", pos:"noun", gender:"f",
     note:"Feminine noun. A prolonged period of little or no economic growth.\n'Stagnazione economica' = economic stagnation.",
     example:"A: L'Italia soffre di stagnazione da vent'anni.\nB: La crescita media e stata quasi zero.",
     exampleSrc:"A: Italy has suffered from stagnation for twenty years.\nB: Average growth has been nearly zero.",
     funFact:"When stagnation combines with inflation, economists call it 'stagflazione' (stagflation). Italy's prolonged economic stagnation has led to the coinage 'il ventennio perduto' (the lost two decades), echoing Japan's similar experience."},

    {type:"teach", trg:"l'evasione fiscale", src:"the tax evasion", pos:"noun", gender:"f",
     note:"Feminine compound noun. Illegally avoiding taxes.\n'Evasore fiscale' = tax evader. 'Lotta all'evasione' = fight against evasion.",
     example:"A: L'evasione fiscale costa allo stato oltre cento miliardi.\nB: Combatterla e una priorita di ogni governo.",
     exampleSrc:"A: Tax evasion costs the state over one hundred billion.\nB: Fighting it is a priority of every government.",
     funFact:"Italy's 'economia sommersa' (shadow economy) is estimated at 12% of GDP. Tax evasion is both widely condemned and widely practiced, creating what economists call a 'doppia morale' (double standard) in Italian fiscal culture."},

    {type:"mc",
     q:"Qual e l'aliquota IVA ordinaria in Italia?",
     opts:["Il 10%","Il 15%","Il 22%","Il 30%"],
     ans:"Il 22%",
     hint:"The standard rate for most goods and services. Lower rates apply to essentials like food and books. Italy's rate is among the higher ones in Europe."},

    {type:"teach", trg:"la deflazione", src:"the deflation", pos:"noun", gender:"f",
     note:"Feminine noun. A sustained decrease in the general price level.\nOpposite of inflation. 'Rischio di deflazione' = deflation risk.",
     example:"A: La deflazione puo essere pericolosa quanto l'inflazione.\nB: I consumatori rimandano gli acquisti aspettando prezzi piu bassi.",
     exampleSrc:"A: Deflation can be as dangerous as inflation.\nB: Consumers postpone purchases waiting for lower prices.",
     funFact:"Deflation traps occur when falling prices lead consumers to delay spending, which further reduces demand and prices. Japan's decades-long deflation is the cautionary tale that European economists cite when Italy's prices stagnate."},

    {type:"match", pairs:[
      {trg:"recessione", src:"recession"},
      {trg:"ripresa", src:"recovery"},
      {trg:"stagnazione", src:"stagnation"},
      {trg:"evasione fiscale", src:"tax evasion"},
      {trg:"aliquota", src:"tax rate"}
    ]},

    {type:"fb",
     s:"La {1} economica dopo la pandemia e stata piu rapida del previsto.",
     a:["ripresa"],
     opts:["ripresa","recessione","stagnazione","deflazione"],
     hint:"The phase when growth returns after an economic downturn. The economy bounces back and starts expanding again.",
     sSrc:"The economic {1} after the pandemic was faster than expected."},

    {type:"mc",
     q:"Perche l'Italia non puo piu svalutare la propria moneta per stimolare l'economia?",
     opts:["Perche la lira e troppo forte","Perche ha adottato l'euro e la politica monetaria e gestita dalla BCE","Perche la Costituzione lo vieta","Perche la globalizzazione lo impedisce"],
     ans:"Perche ha adottato l'euro e la politica monetaria e gestita dalla BCE",
     hint:"After joining the single European currency, individual countries gave up control of their own monetary tools. A central institution now makes those decisions for all member states."}
  ]
};
export default LESSON_6;
