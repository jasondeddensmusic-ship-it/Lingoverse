// Unit 25 Expansion — Lesson 4: I mercati finanziari
const LESSON_4 = {
  id:"itv2_u25l4", title:"I mercati finanziari", icon:"📊", xp:15, board:true,
  steps:[
    {type:"intro", title:"I mercati finanziari",
     desc:"Explore the world of financial markets, stock trading, and investment instruments. Learn how Italians discuss market movements and financial news.",
     goals:["Describe different types of financial instruments","Discuss market trends and fluctuations","Understand Italian financial news vocabulary"]},

    {type:"teach", trg:"l'obbligazione", src:"the bond", pos:"noun", gender:"f",
     note:"Feminine noun. Plural: le obbligazioni.\nA debt security. 'Obbligazioni statali' = government bonds.",
     example:"A: Le obbligazioni statali sono considerate sicure.\nB: Ma il rendimento e piuttosto basso.",
     exampleSrc:"A: Government bonds are considered safe.\nB: But the yield is rather low.",
     funFact:"Italy's government bonds are called 'BTP' (Buoni del Tesoro Poliennali). The spread between Italian and German bonds ('lo spread') became a household word during the 2011 debt crisis."},

    {type:"teach", trg:"il rendimento", src:"the yield / return", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i rendimenti.\n'Rendimento annuale' = annual return. From 'rendere' (to yield).",
     example:"A: Il rendimento del fondo e stato del cinque per cento.\nB: Meglio del conto in banca.",
     exampleSrc:"A: The fund's return was five percent.\nB: Better than a bank account.",
     funFact:"Italian savers historically favored 'BOT' (short-term treasury bills) and 'BTP' for their steady yields. The shift toward stock investing has been gradual, with many Italians still preferring fixed-income instruments."},

    {type:"teach", trg:"il portafoglio", src:"the portfolio / wallet", pos:"noun", gender:"m",
     note:"Masculine noun. In finance: an investment portfolio.\nIn daily life: a wallet. 'Diversificare il portafoglio' = to diversify the portfolio.",
     example:"A: Hai diversificato il tuo portafoglio?\nB: Si, ho azioni, obbligazioni e fondi.",
     exampleSrc:"A: Have you diversified your portfolio?\nB: Yes, I have shares, bonds, and funds.",
     funFact:"'Portafoglio' literally means 'carry-sheet' (porta + foglio). It evolved from carrying documents to carrying money, and finally to describing a collection of investments."},

    {type:"teach", trg:"il fondo comune", src:"the mutual fund", pos:"noun", gender:"m",
     note:"Masculine compound noun. Plural: i fondi comuni.\n'Fondo pensione' = pension fund. 'Gestore del fondo' = fund manager.",
     example:"A: Ho investito in un fondo comune bilanciato.\nB: E una scelta prudente per chi non vuole rischiare troppo.",
     exampleSrc:"A: I invested in a balanced mutual fund.\nB: It is a prudent choice for those who do not want too much risk.",
     funFact:"The Italian mutual fund industry grew rapidly after banking deregulation in the 1990s. Today, Italian households hold over 300 billion euros in fondi comuni, managed primarily by bank-affiliated asset management companies."},

    {type:"teach", trg:"il dividendo", src:"the dividend", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i dividendi.\nThe share of profits paid to shareholders. 'Staccare un dividendo' = to pay a dividend.",
     example:"A: La societa ha staccato un dividendo generoso.\nB: Gli azionisti sono soddisfatti.",
     exampleSrc:"A: The company paid a generous dividend.\nB: The shareholders are satisfied.",
     funFact:"From Latin 'dividendus' (that which is to be divided). Italian companies traditionally pay dividends once a year in spring, creating a 'stagione dei dividendi' (dividend season) that financial journalists eagerly cover."},

    {type:"mc",
     q:"Come si chiama la quota di profitto distribuita agli azionisti?",
     opts:["Il rendimento","Il dividendo","L'obbligazione","Il portafoglio"],
     ans:"Il dividendo",
     hint:"The portion of company profits paid out to those who own shares. Typically distributed once a year in Italy."},

    {type:"teach", trg:"la speculazione", src:"the speculation", pos:"noun", gender:"f",
     note:"Feminine noun. Buying/selling assets hoping to profit from price changes.\n'Speculazione finanziaria' = financial speculation. 'Speculatore' = speculator.",
     example:"A: La speculazione ha fatto crollare il valore delle azioni.\nB: Molti piccoli investitori hanno perso tutto.",
     exampleSrc:"A: Speculation caused the share value to collapse.\nB: Many small investors lost everything.",
     funFact:"The 1987 stock market crash hit Italy hard, wiping out savings of many first-time Italian investors. The experience made 'speculazione' a deeply negative word in Italian public discourse."},

    {type:"teach", trg:"il rischio", src:"the risk", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i rischi.\n'Propensione al rischio' = risk appetite. 'A proprio rischio' = at your own risk.",
     example:"A: Ogni investimento comporta un certo rischio.\nB: Bisogna valutare bene prima di decidere.",
     exampleSrc:"A: Every investment carries a certain risk.\nB: One must evaluate carefully before deciding.",
     funFact:"From Arabic 'rizq' (fortune, livelihood), which entered Italian through medieval Mediterranean trade. The original meaning was neutral or even positive, but it gradually shifted toward danger and uncertainty."},

    {type:"fb",
     s:"Ho diversificato il mio {1} con azioni, obbligazioni e fondi.",
     a:["portafoglio"],
     opts:["portafoglio","rendimento","dividendo","rischio"],
     hint:"Your collection of investments. The same word also means 'wallet' in everyday Italian.",
     sSrc:"I diversified my {1} with shares, bonds, and funds."},

    {type:"teach", trg:"il crollo", src:"the crash / collapse", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: i crolli.\n'Crollo della borsa' = stock market crash. From 'crollare' (to collapse).",
     example:"A: Il crollo della borsa ha spaventato gli investitori.\nB: In pochi giorni il mercato ha perso il venti per cento.",
     exampleSrc:"A: The stock market crash scared investors.\nB: In a few days the market lost twenty percent.",
     funFact:"The word 'crollare' originally described buildings falling down. Its application to financial markets captures the dramatic, sudden nature of market collapses. The 2008 crisis is still called 'il grande crollo' in Italian financial journalism."},

    {type:"teach", trg:"la liquidita", src:"the liquidity", pos:"noun", gender:"f",
     note:"Feminine noun. Invariable (accented ending).\nThe availability of cash or easily sellable assets. 'Crisi di liquidita' = liquidity crisis.",
     example:"A: L'azienda ha problemi di liquidita.\nB: Non riesce a pagare i fornitori in tempo.",
     exampleSrc:"A: The company has liquidity problems.\nB: It cannot pay suppliers on time.",
     funFact:"During the 2011 eurozone crisis, Italian banks faced severe liquidity shortages. The ECB's intervention under Mario Draghi, an Italian, with 'whatever it takes' saved the euro and became one of the most famous phrases in financial history."},

    {type:"mc",
     q:"Che cos'e la liquidita in ambito finanziario?",
     opts:["La quantita di acqua disponibile","La disponibilita di denaro contante o beni facilmente vendibili","Il livello di debito pubblico","Il tasso di inflazione annuale"],
     ans:"La disponibilita di denaro contante o beni facilmente vendibili",
     hint:"How easily assets can be converted to cash. A company with enough cash to pay its bills promptly has good levels of this."},

    {type:"teach", trg:"la volatilita", src:"the volatility", pos:"noun", gender:"f",
     note:"Feminine noun. Invariable (accented ending).\nRapid, unpredictable price changes. 'Mercato volatile' = volatile market.",
     example:"A: La volatilita dei mercati e aumentata.\nB: Gli investitori sono nervosi per la situazione geopolitica.",
     exampleSrc:"A: Market volatility has increased.\nB: Investors are nervous about the geopolitical situation.",
     funFact:"Italian financial journalists love the term 'montagne russe' (roller coaster, literally 'Russian mountains') to describe volatile markets. The metaphor captures the stomach-churning experience of watching prices swing wildly."},

    {type:"match", pairs:[
      {trg:"obbligazione", src:"bond"},
      {trg:"rendimento", src:"yield"},
      {trg:"dividendo", src:"dividend"},
      {trg:"speculazione", src:"speculation"},
      {trg:"crollo", src:"crash"}
    ]},

    {type:"fb",
     s:"Ogni investimento comporta un certo {1} di perdita.",
     a:["rischio"],
     opts:["rischio","crollo","rendimento","dividendo"],
     hint:"The possibility that something negative could happen. The chance of losing money on an investment.",
     sSrc:"Every investment carries a certain {1} of loss."},

    {type:"mc",
     q:"Perche lo 'spread' BTP-Bund e diventato una parola comune in Italia?",
     opts:["Perche e un tipo di formaggio italiano","Perche indica la differenza tra tassi italiani e tedeschi e misura la fiducia nell'economia","Perche e un programma televisivo popolare","Perche e il nome di un fondo pensione"],
     ans:"Perche indica la differenza tra tassi italiani e tedeschi e misura la fiducia nell'economia",
     hint:"The gap between Italian and German government bond yields became a key indicator during the 2011 debt crisis. A wider gap signals lower confidence in Italy's economy."}
  ]
};
export default LESSON_4;
