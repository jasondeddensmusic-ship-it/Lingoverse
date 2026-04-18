// Russian V2 Unit 27 — Business and Economics (B2.1)
const UNIT_27 = {n:27, lang:"ru", srcLang:"en", track:"v2", title:"Бизнес", sub:"Business and Economics",
 icon:"📈", level:"B2.1", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u27l1", title:"Business World", icon:"📈", xp:15, board:true, steps:[

{type:"intro", title:"Business and Economics",
 desc:"Business vocabulary is a mix of native Russian and recent English loanwords (бизнес, менеджер, стартап). Russian commerce vocabulary evolved quickly post-1990.",
 goals:["Use business vocabulary","Discuss work and markets","Form opinions on economy"]},

{type:"teach", trg:"бизнес", src:"business", pos:"noun", gender:"m",
 note:"Masculine. English loanword.\nPost-Soviet addition to Russian.",
 example:"A: Как бизнес идёт?\nB: Развивается.",
 exampleSrc:"A: How's business going?\nB: Developing.",
 funFact:"Бизнес entered Russian in the 1990s with market reforms. Older word 'дело' meant both 'affair' and 'business.' Now бизнес specifically means commercial enterprise."},

{type:"teach", trg:"компания", src:"company", pos:"noun", gender:"f",
 note:"Feminine. International.\nMeans both 'business company' AND 'group of friends.'",
 example:"A: В какой компании работаешь?\nB: В IT-компании.",
 exampleSrc:"A: What company do you work for?\nB: An IT company.",
 funFact:"Two meanings: 'company' (business) and 'company' (group of people, friends). Russian 'хорошая компания' can be a good business OR good friends — context clarifies."},

{type:"teach", trg:"рынок", src:"market", pos:"noun", gender:"m",
 note:"Masculine. Both economic market and physical market.\nPlural: рынки.",
 example:"A: Какой у нас рынок?\nB: Быстрорастущий.",
 exampleSrc:"A: What kind of market do we have?\nB: Fast-growing.",
 funFact:"Рынок covers farmer's markets, bazaars, AND abstract economic markets. 'Рыночная экономика' = market economy. Both concepts in one word."},

{type:"teach", trg:"прибыль", src:"profit", pos:"noun", gender:"f",
 note:"Feminine. Ends in ь.\nOpposite: убыток (loss).",
 example:"A: Была прибыль?\nB: Небольшая.",
 exampleSrc:"A: Was there profit?\nB: Small.",
 funFact:"Прибыль is business profit. Distinct from личная прибыль (personal benefit) — though related. Russian commerce has specific financial vocabulary."},

{type:"teach", trg:"инвестировать", src:"to invest", pos:"verb", gender:null,
 note:"Imperfective. -овать verb.\n'Инвестировать в X' = invest in X.",
 example:"A: Ты инвестируешь?\nB: Немного, в акции.",
 exampleSrc:"A: Do you invest?\nB: A little, in stocks.",
 funFact:"Инвестировать takes 'в' + accusative: инвестировать в бизнес, в образование, в будущее. Common economic construction."},

{type:"teach", trg:"менеджер", src:"manager", pos:"noun", gender:"m",
 note:"Masculine. English loanword.\nShorter: менеджер (used loosely for many roles).",
 example:"A: Ты менеджер?\nB: Да, в отделе продаж.",
 exampleSrc:"A: Are you a manager?\nB: Yes, in the sales department.",
 funFact:"Менеджер entered post-Soviet. Previously 'управляющий' or 'начальник' was used. Now in daily speech: офис-менеджер, менеджер по продажам (sales manager). Anglicization."},

{type:"teach", trg:"клиент", src:"client / customer", pos:"noun", gender:"m",
 note:"Masculine. Latin root.\nCovers both business clients and retail customers.",
 example:"A: Сколько клиентов у компании?\nB: Около тысячи.",
 exampleSrc:"A: How many clients does the company have?\nB: About a thousand.",
 funFact:"Клиент combines 'client' (professional services) and 'customer' (retail). Russian doesn't separate these concepts. Покупатель exists for 'shopper' specifically."},

{type:"teach", trg:"договор", src:"contract", pos:"noun", gender:"m",
 note:"Masculine. Ends in consonant.\n'Подписать договор' = sign a contract.",
 example:"A: Вы подписали договор?\nB: Завтра.",
 exampleSrc:"A: Did you sign the contract?\nB: Tomorrow.",
 funFact:"Договор is a formal agreement. Alternative: контракт (more formal), соглашение (informal agreement). All three exist; договор is middle-formal."},

{type:"tip", title:"Russian Business Language",
 text:"MODERN BUSINESS TERMS:\n• рынок (market)\n• экономика (economy)\n• финансы (finance)\n• бюджет (budget)\n• налог (tax)\n• банк (bank)\n• валюта (currency)\n• акция (share/stock)\n• инвестиция (investment)\n• кредит (credit/loan)\n• услуга (service)\n• продукт (product)\n• качество (quality)\n• цена (price)\n\nJOB TITLES:\n• директор (director)\n• менеджер (manager)\n• сотрудник (employee)\n• бухгалтер (accountant)\n• маркетолог (marketing specialist)\n• программист (programmer)\n• дизайнер (designer)\n\nRUSSIA'S TECH INDUSTRY:\nЯндекс (search engine) — Russia's Google alternative. Competitive, fast-growing ecosystem in IT and startups.",
 icon:"📈"},

{type:"mc", q:"Which term is an English loanword in Russian business?",
 opts:["компания","бизнес","рынок","прибыль"],
 ans:"бизнес",
 hint:"From English 'business.' Entered Russian in 1990s."},

{type:"fb", s:"Наша {1} растёт быстро.",
 a:["компания"],
 opts:["компания","рынок","прибыль","бизнес"],
 hint:"Growing business entity — company-sized.",
 sSrc:"Our company is growing fast."},

{type:"match", pairs:[
  {trg:"бизнес", src:"business"},
  {trg:"рынок", src:"market"},
  {trg:"прибыль", src:"profit"},
  {trg:"клиент", src:"customer"},
  {trg:"договор", src:"contract"}
]}
,{type:"match",pairs:[{trg:"инвестировать",src:"to invest"},{trg:"менеджер",src:"manager"}]}]}

]};
export default UNIT_27;
