const UNIT_27 = {n:27, lang:"pt", srcLang:"en", track:"v2", title:"O mundo dos negócios", sub:"Business and Economics", icon:"📈", level:"B2.1", color:"#7B5EE8", lessons:[

{id:"ptv2_u27l1", title:"Running a Business", icon:"🏢", xp:15, board:true, steps:[
{type:"intro", title:"Business Brazilian",
 desc:"Brazil has the largest economy in Latin America. Business vocabulary appears in newspapers, job interviews, and everyday conversation. Time to sound like a professional.",
 goals:["Talk about companies and products","Describe business operations","Sound professional in Portuguese"]},

{type:"teach", trg:"negócio", src:"business", pos:"noun", gender:"m",
 note:"A commercial activity or deal. Plural 'negócios' refers to business in general.",
 example:"A: Como vão os negócios?\nB: Indo bem, obrigado.",
 exampleSrc:"A: How is business going?\nB: Going well, thanks.",
 funFact:"'Negócio' also means 'thing' informally: 'passa esse negócio aí' (pass that thing over there)."},

{type:"teach", trg:"empresa", src:"company", pos:"noun", gender:"f",
 note:"A commercial organization. 'Empresário' means businessperson. 'Empresa familiar' = family company.",
 example:"A: A empresa tem mil funcionários.\nB: Está crescendo rápido.",
 exampleSrc:"A: The company has a thousand employees.\nB: It's growing fast.",
 funFact:"Embraer, Vale, and Petrobras are Brazil's three largest empresas, each a global giant in their sector."},

{type:"teach", trg:"produto", src:"product", pos:"noun", gender:"m",
 note:"What a company sells. 'Produtos de beleza' = beauty products. Also appears in 'PIB' (Gross Domestic Product).",
 example:"A: Esse produto é o mais vendido.\nB: Não me surpreende.",
 exampleSrc:"A: This product is the best seller.\nB: It doesn't surprise me.",
 funFact:"Havaianas flip-flops are Brazil's most iconic export product, sold in over 80 countries."},

{type:"teach", trg:"serviço", src:"service", pos:"noun", gender:"m",
 note:"Non-physical offering. 'Setor de serviços' is the service sector, the biggest part of most economies.",
 example:"A: O serviço desse banco é excelente.\nB: Tenho a mesma experiência.",
 exampleSrc:"A: The service at this bank is excellent.\nB: I have the same experience.",
 funFact:"In Brazilian restaurants, 'serviço' on the bill usually means a 10% suggested tip, technically optional."},

{type:"teach", trg:"cliente", src:"client / customer", pos:"noun", gender:"m",
 note:"Same form for masculine and feminine. 'O cliente sempre tem razão' = the customer is always right.",
 example:"A: Esse cliente vem aqui toda semana.\nB: Um dos nossos melhores.",
 exampleSrc:"A: This customer comes here every week.\nB: One of our best.",
 funFact:"'Cliente oculto' (hidden client) is Brazilian business jargon for mystery shoppers evaluating service."},

{type:"teach", trg:"mercado", src:"market", pos:"noun", gender:"m",
 note:"Both a physical marketplace and an economic concept. 'Mercado de trabalho' = job market.",
 example:"A: O mercado brasileiro é imenso.\nB: São mais de 200 milhões de consumidores.",
 exampleSrc:"A: The Brazilian market is huge.\nB: Over 200 million consumers.",
 funFact:"The São Paulo Mercado Municipal is a century-old covered market famous for its mortadella sandwich."},

{type:"teach", trg:"vendas", src:"sales", pos:"noun", gender:"f",
 note:"Always plural in this business sense. 'Equipe de vendas' = sales team. Singular 'venda' means a single sale.",
 example:"A: As vendas aumentaram neste trimestre.\nB: Parabéns, é um ótimo resultado.",
 exampleSrc:"A: Sales increased this quarter.\nB: Congrats, it's a great result.",
 funFact:"'Black Friday' arrived in Brazil in 2010 and became one of the biggest 'vendas' events of the year."},

{type:"teach", trg:"contrato", src:"contract", pos:"noun", gender:"m",
 note:"A legal agreement. 'Assinar um contrato' = to sign a contract. Essential business word.",
 example:"A: O contrato foi assinado ontem.\nB: Agora é trabalhar.",
 exampleSrc:"A: The contract was signed yesterday.\nB: Now it's time to work.",
 funFact:"Brazilian labor contracts (CLT) are heavily regulated. A 'contrato de trabalho' carries many legal obligations."},

{type:"tip", title:"Common Business Combinations",
 text:"Portuguese builds business phrases in predictable ways:\n\nplano de negócios (business plan)\nmodelo de negócio (business model)\nrede de empresas (network of companies)\nlinha de produtos (product line)\ncarteira de clientes (client portfolio)\nmeta de vendas (sales target)\nequipe de vendas (sales team)\nestratégia de mercado (market strategy)\n\nNotice the pattern: noun + de + noun. No 'de o' or 'de a' separately, but 'do' and 'da' contractions appear often.",
 deepDive:{title:"Business Jargon Across Portuguese",
  text:"Brazilian business vocabulary absorbs English fast. 'Networking' stays in English. 'Target' is sometimes used instead of 'alvo'. 'Budget' competes with 'orçamento'. Portuguese-speaking countries diverge: Portugal keeps more Portuguese terms, while Brazil mixes freely. Angola and Mozambique follow Brazilian patterns. For B2, recognize both the Portuguese translation and the English loanword."}},

{type:"mc",
 q:"Which word means 'company'?",
 opts:["empresa","produto","cliente","contrato"],
 ans:"empresa",
 hint:"A commercial organization. Feminine noun."},

{type:"mc",
 q:"What is the gender of 'mercado'?",
 opts:["masculine","feminine","neuter","varies"],
 ans:"masculine",
 hint:"Most nouns ending in -o are this gender."},

{type:"fb",
 s:"As {1} deste mês bateram o recorde.",
 a:["vendas"],
 opts:["vendas","clientes","produtos","contratos"],
 hint:"What a company does to generate revenue. Always plural in this sense.",
 sSrc:"This month's {1} broke the record."},

{type:"fb",
 s:"Assinamos o {1} ontem à tarde.",
 a:["contrato"],
 opts:["contrato","mercado","serviço","negócio"],
 hint:"Legal agreement. Something you sign.",
 sSrc:"We signed the {1} yesterday afternoon."},

{type:"match", pairs:[
 {trg:"negócio", src:"business"},
 {trg:"empresa", src:"company"},
 {trg:"produto", src:"product"},
 {trg:"serviço", src:"service"},
 {trg:"cliente", src:"customer"},
 {trg:"mercado", src:"market"},
 {trg:"vendas", src:"sales"}
]},

{type:"mc",
 q:"Which phrase means 'business plan'?",
 opts:["plano de vendas","plano de negócios","plano de mercado","plano de contrato"],
 ans:"plano de negócios",
 hint:"The plural noun form is used for 'business' here."}
]},

{id:"ptv2_u27l2", title:"The Economy", icon:"💰", xp:15, board:true, steps:[
{type:"intro", title:"Reading Economic News",
 desc:"Brazilian newspapers discuss inflation, interest rates, and investment daily. B2 learners need this vocabulary to read past the headline.",
 goals:["Talk about the economy","Discuss inflation and interest","Understand financial news"]},

{type:"teach", trg:"economia", src:"economy", pos:"noun", gender:"f",
 note:"The economic system. Also the academic field. 'Estudar economia' = to study economics.",
 example:"A: A economia brasileira está melhorando.\nB: Os números confirmam.",
 exampleSrc:"A: The Brazilian economy is improving.\nB: The numbers confirm it.",
 funFact:"Brazil's economy ranks in the world's top 10 by GDP, yet inequality keeps much of the population from benefiting fully."},

{type:"teach", trg:"inflação", src:"inflation", pos:"noun", gender:"f",
 note:"The rate at which prices rise. Brazilians know this word intimately from history.",
 example:"A: A inflação subiu de novo este mês.\nB: Os preços estão absurdos.",
 exampleSrc:"A: Inflation went up again this month.\nB: Prices are absurd.",
 funFact:"In 1994, Brazilian inflation hit 2,477% per year. The Plano Real stabilized the currency and is still in place today."},

{type:"teach", trg:"juros", src:"interest (on money)", pos:"noun", gender:"m",
 note:"Always plural. Masculine. 'Taxa de juros' = interest rate. 'Pagar juros' = to pay interest.",
 example:"A: Os juros do banco são muito altos.\nB: É o Brasil, infelizmente.",
 exampleSrc:"A: The bank's interest rates are very high.\nB: It's Brazil, unfortunately.",
 funFact:"Brazil historically has some of the world's highest interest rates. The 'Selic' is the benchmark rate set by the Central Bank."},

{type:"teach", trg:"investir", src:"to invest", pos:"verb", gender:null,
 note:"Regular -ir verb. Pairs with 'em': 'investir em ações' = to invest in stocks.",
 example:"A: Onde você pretende investir?\nB: Em fundos imobiliários, acho.",
 exampleSrc:"A: Where do you plan to invest?\nB: In real estate funds, I think.",
 funFact:"Until the 1990s, most Brazilians 'invested' in savings accounts (poupança). Today, stock market investing is mainstream."},

{type:"teach", trg:"lucro", src:"profit", pos:"noun", gender:"m",
 note:"Money earned after expenses. 'Dar lucro' = to be profitable. Opposite: 'prejuízo' (loss).",
 example:"A: A empresa teve um lucro recorde.\nB: Os acionistas vão gostar.",
 exampleSrc:"A: The company had a record profit.\nB: The shareholders will like it.",
 funFact:"In 2023, Petrobras reported one of the highest profit figures in Brazilian corporate history."},

{type:"teach", trg:"custo", src:"cost", pos:"noun", gender:"m",
 note:"The expense to produce something. 'Custo-benefício' (cost-benefit) is a fixed business phrase.",
 example:"A: O custo dos insumos aumentou demais.\nB: Isso reduz as margens.",
 exampleSrc:"A: The cost of raw materials increased a lot.\nB: That cuts into margins.",
 funFact:"'Custo Brasil' is a famous phrase describing the high costs of doing business in Brazil due to taxes and bureaucracy."},

{type:"teach", trg:"concorrência", src:"competition", pos:"noun", gender:"f",
 note:"Rivalry in business. Also the other companies: 'a concorrência está fortalecendo' = the competition is getting stronger.",
 example:"A: A concorrência no setor está feroz.\nB: Só os melhores sobrevivem.",
 exampleSrc:"A: Competition in the sector is fierce.\nB: Only the best survive.",
 funFact:"Brazil's antitrust agency, CADE, monitors market 'concorrência' and can block anti-competitive mergers."},

{type:"tip", title:"Economic Vocabulary Patterns",
 text:"Many economic terms follow predictable Portuguese patterns:\n\n-ção endings = feminine (all abstract):\ninflação, deflação, recessão, expansão\n\n-o endings = mostly masculine:\ncusto, lucro, mercado, produto\n\n-os masculine plural only:\njuros (interest)\ndados (data)\nrendimentos (earnings)\n\n-a endings = usually feminine:\neconomia, empresa, moeda (currency)\n\nKnow the pattern and you know the gender for 80% of economic terms.",
 deepDive:{title:"The Selic Rate",
  text:"The Selic is Brazil's benchmark interest rate, set by the Central Bank (Banco Central). It controls the entire economy: savings, loans, mortgages, inflation. When the Selic rises, borrowing gets expensive and inflation cools. When it falls, credit flows and growth can speed up. Brazilian news talks about the Selic as Americans talk about Fed rates. Know the word 'Selic' for any real economic conversation in Brazil."}},

{type:"mc",
 q:"What is the opposite of 'lucro'?",
 opts:["custo","prejuízo","investimento","juros"],
 ans:"prejuízo",
 hint:"If lucro means profit, what means loss?"},

{type:"mc",
 q:"Which preposition goes with 'investir'?",
 opts:["em","para","por","de"],
 ans:"em",
 hint:"Portuguese uses the same preposition as 'to invest IN'."},

{type:"fb",
 s:"A {1} atingiu 5% no ano passado.",
 a:["inflação"],
 opts:["inflação","concorrência","economia","vendas"],
 hint:"The rate at which prices rise over time.",
 sSrc:"{1} reached 5% last year."},

{type:"fb",
 s:"Os {1} do cartão de crédito são altos.",
 a:["juros"],
 opts:["juros","custos","lucros","produtos"],
 hint:"What you pay on borrowed money. Always plural.",
 sSrc:"Credit card {1} are high."},

{type:"match", pairs:[
 {trg:"economia", src:"economy"},
 {trg:"inflação", src:"inflation"},
 {trg:"juros", src:"interest"},
 {trg:"investir", src:"to invest"},
 {trg:"lucro", src:"profit"},
 {trg:"custo", src:"cost"},
 {trg:"concorrência", src:"competition"}
]},

{type:"mc",
 q:"What is 'custo-benefício'?",
 opts:["cost-benefit","profit margin","interest rate","sales target"],
 ans:"cost-benefit",
 hint:"A fixed expression pairing cost against value gained."},

{type:"drag_fill",
 s:"O {1} alto e a {2} feroz reduzem a margem de lucro.",
 blanks:{"1":"custo","2":"concorrência"},
 pool:["custo","concorrência","lucro","juros"],
 hint:"First blank: expense to produce. Second blank: rivalry from other companies."}
]},

{id:"ptv2_u27l3", title:"Business Conversations", icon:"🤝", xp:15, board:true, steps:[
{type:"intro", title:"Professional Communication",
 desc:"Business Portuguese has its own rhythm. Learn the polite formulas used in meetings, emails, and negotiations.",
 goals:["Speak professionally","Describe business actions","Navigate meetings"]},

{type:"teach", trg:"reunião", src:"meeting", pos:"noun", gender:"f",
 note:"Formal gathering. 'Fazer uma reunião' = to hold a meeting. 'Marcar reunião' = to schedule one.",
 example:"A: A reunião é às três da tarde.\nB: Vou chegar cedo.",
 exampleSrc:"A: The meeting is at three in the afternoon.\nB: I'll arrive early.",
 funFact:"Brazilian business meetings often run long and include small talk. Getting to the point too fast can feel cold."},

{type:"teach", trg:"proposta", src:"proposal", pos:"noun", gender:"f",
 note:"A business offer or suggestion. 'Enviar uma proposta' = to send a proposal.",
 example:"A: Analisamos sua proposta.\nB: E qual foi a decisão?",
 exampleSrc:"A: We analyzed your proposal.\nB: And what was the decision?",
 funFact:"'Proposta indecente' means 'indecent proposal', a movie title that entered daily Portuguese vocabulary in 1993."},

{type:"teach", trg:"preço", src:"price", pos:"noun", gender:"m",
 note:"Cost charged to the customer. 'Preço fixo' = fixed price. 'Preço baixo' = low price.",
 example:"A: O preço está acima do mercado.\nB: Podemos negociar.",
 exampleSrc:"A: The price is above market.\nB: We can negotiate.",
 funFact:"In Brazilian stores, 'preço promocional' is the sale price. Regular price is just 'preço' or 'preço normal'."},

{type:"teach", trg:"negociar", src:"to negotiate", pos:"verb", gender:null,
 note:"Regular -ar verb. Used for business deals, salaries, and daily market bargaining.",
 example:"A: Precisamos negociar esses valores.\nB: Estou aberto a conversar.",
 exampleSrc:"A: We need to negotiate these values.\nB: I'm open to talking.",
 funFact:"In Brazilian street markets (feiras), 'negociar o preço' is expected. Paying the asked price without discussion is rare."},

{type:"teach", trg:"pagar", src:"to pay", pos:"verb", gender:null,
 note:"Regular -ar verb. 'Pagar a conta' = to pay the bill. 'Pagar em dinheiro' = to pay in cash.",
 example:"A: Quem vai pagar a conta?\nB: Pode dividir.",
 exampleSrc:"A: Who's going to pay the bill?\nB: Let's split it.",
 funFact:"'Pagar mico' (to pay monkey) is Brazilian slang for embarrassing yourself publicly."},

{type:"teach", trg:"fornecedor", src:"supplier", pos:"noun", gender:"m",
 note:"Someone who provides goods or services to a business. Feminine: 'fornecedora'.",
 example:"A: Vamos trocar de fornecedor.\nB: O atual está cobrando demais.",
 exampleSrc:"A: Let's change suppliers.\nB: The current one is charging too much.",
 funFact:"In the Brazilian public sector, 'fornecedor' is also the formal term for government contractors."},

{type:"teach", trg:"acordo", src:"agreement", pos:"noun", gender:"m",
 note:"A mutual understanding. 'Chegar a um acordo' = to reach an agreement. 'Estou de acordo' = I agree.",
 example:"A: Chegamos a um acordo finalmente.\nB: Depois de muitas horas.",
 exampleSrc:"A: We reached an agreement finally.\nB: After many hours.",
 funFact:"'De acordo com' (according to) is a common transition phrase in formal Portuguese writing."},

{type:"tip", title:"Professional Email Formulas",
 text:"Business emails in Portuguese follow predictable openings and closings:\n\nOpenings:\nPrezado(a) Sr(a). X (Dear Mr/Mrs X, formal)\nCaro(a) X (Dear X, slightly warmer)\nOlá, X (Hi X, informal)\n\nClosings:\nAtenciosamente (Sincerely, formal)\nCordialmente (Cordially)\nAbraços (Hugs, warm but professional)\nAbs (Hugs, abbreviated, informal)\n\nThe formality level must match throughout. Do not open 'Prezado' and close 'Abs'.",
 deepDive:{title:"Brazilian Business Style",
  text:"Brazilian business culture values personal relationships. Cold, transactional emails feel rude. Even formal messages often include 'espero que esteja bem' (hope you're doing well). Meetings may open with personal chat before the agenda. In negotiations, Brazilians prefer indirect 'no'. 'Vou pensar' (I'll think about it) often means 'no'. 'Vamos conversar' (let's talk) often means 'not now'. Read between the lines."}},

{type:"mc",
 q:"Which word means 'proposal' in business?",
 opts:["preço","proposta","acordo","reunião"],
 ans:"proposta",
 hint:"What you send before the deal is signed."},

{type:"mc",
 q:"What does 'chegar a um acordo' mean?",
 opts:["to arrive at the meeting","to reach an agreement","to sign a contract","to send a proposal"],
 ans:"to reach an agreement",
 hint:"Think literally: 'chegar' (arrive) + 'acordo' (agreement)."},

{type:"fb",
 s:"A {1} com o cliente é amanhã pela manhã.",
 a:["reunião"],
 opts:["reunião","proposta","concorrência","economia"],
 hint:"A formal gathering to discuss business.",
 sSrc:"The {1} with the client is tomorrow morning."},

{type:"fb",
 s:"Precisamos {1} o valor desse contrato.",
 a:["negociar"],
 opts:["negociar","pagar","investir","desenvolver"],
 hint:"To bargain or discuss terms to reach agreement.",
 sSrc:"We need to {1} the value of this contract."},

{type:"match", pairs:[
 {trg:"reunião", src:"meeting"},
 {trg:"proposta", src:"proposal"},
 {trg:"preço", src:"price"},
 {trg:"negociar", src:"to negotiate"},
 {trg:"pagar", src:"to pay"},
 {trg:"fornecedor", src:"supplier"},
 {trg:"acordo", src:"agreement"}
]},

{type:"mc",
 q:"Which is a formal email closing?",
 opts:["Oi","Abs","Atenciosamente","Tchau"],
 ans:"Atenciosamente",
 hint:"The most formal option. Used with 'Prezado(a)' openings."},

{type:"drag_fill",
 s:"O {1} da {2} é superior ao do concorrente.",
 blanks:{"1":"preço","2":"proposta"},
 pool:["preço","proposta","reunião","acordo"],
 hint:"First blank: cost amount. Second blank: the business offer being evaluated."}
]}

]}; export default UNIT_27;
