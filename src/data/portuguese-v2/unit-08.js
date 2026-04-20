const UNIT_08 = {n:8, lang:"pt", srcLang:"en", track:"v2", title:"Quanto custa?", sub:"Shopping and Prices", icon:"🛒", level:"A2.1", color:"#7B5EE8", lessons:[

{id:"ptv2_u8l1", title:"Dinheiro e preços", icon:"💰", xp:15, board:true, steps:[
{type:"intro", title:"Money and prices",
 desc:"Shopping in Brazil means handling reais, asking prices, and judging value. Learn the core vocabulary for every transaction.",
 goals:["Learn dinheiro, real, preço","Ask 'Quanto custa?'","Distinguish caro from barato"]},

{type:"teach", trg:"o dinheiro", src:"the money", pos:"noun", gender:"m",
 note:"Money, cash. Masculine noun. Always singular when referring to money in general.",
 example:"A: Você tem dinheiro?\nB: Sim, um pouco.\nA: Quanto?\nB: Cinquenta reais.",
 exampleSrc:"A: Do you have money?\nB: Yes, a little.\nA: How much?\nB: Fifty reais.",
 funFact:"From Latin 'denarius', a Roman silver coin. The word traveled through Arabic into Iberian Portuguese."},

{type:"teach", trg:"o real", src:"the real", pos:"noun", gender:"m",
 note:"The Brazilian currency since 1994. Plural: reais. Symbol: R$.",
 example:"A: Quanto custa?\nB: Dez reais.\nA: Aqui está.\nB: Obrigado!",
 exampleSrc:"A: How much does it cost?\nB: Ten reais.\nA: Here you go.\nB: Thank you!",
 funFact:"The name 'real' (royal) dates back to colonial times. It was revived in 1994 to end hyperinflation."},

{type:"teach", trg:"o preço", src:"the price", pos:"noun", gender:"m",
 note:"Price. Masculine noun. Plural: os preços.",
 example:"A: Qual é o preço?\nB: Vinte reais.\nA: Bom preço!\nB: Sim, está em promoção.",
 exampleSrc:"A: What is the price?\nB: Twenty reais.\nA: Good price!\nB: Yes, it is on sale.",
 funFact:"From Latin 'pretium'. Related to English 'precious' and 'appreciate'."},

{type:"teach", trg:"custar", src:"to cost", pos:"verb", gender:null,
 note:"To cost. Mostly used in 3rd person: custa (it costs), custam (they cost), custou (it cost).",
 example:"A: Quanto custa o livro?\nB: Custa trinta reais.\nA: E os dois juntos?\nB: Custam cinquenta.",
 exampleSrc:"A: How much does the book cost?\nB: It costs thirty reais.\nA: And the two together?\nB: They cost fifty.",
 funFact:"The question 'Quanto custa?' is among the first five phrases every Brazilian Portuguese student masters."},

{type:"teach", trg:"caro", src:"expensive", pos:"adj", gender:null,
 note:"Expensive. Agrees with noun: caro (m), cara (f), caros/caras (pl).",
 example:"A: O carro é caro.\nB: Quanto custa?\nA: Cinquenta reais.\nB: Muito caro!",
 exampleSrc:"A: The car is expensive.\nB: How much does it cost?\nA: Fifty reais.\nB: Very expensive!",
 funFact:"'Caro' also means 'dear' as in 'Caro amigo' (Dear friend). Same word, different meaning from context."},

{type:"teach", trg:"barato", src:"cheap", pos:"adj", gender:null,
 note:"Cheap, inexpensive. Agrees: barato (m), barata (f). Has a positive sense in Brazilian Portuguese.",
 example:"A: Este é barato!\nB: Quanto?\nA: Cinco reais.\nB: Muito barato! Vou levar.",
 exampleSrc:"A: This one is cheap!\nB: How much?\nA: Five reais.\nB: Very cheap! I will take it.",
 funFact:"'Barato' also slang means 'cool' or 'trip' in Rio. 'Que barato!' = 'How cool!'"},

{type:"tip", title:"Asking Prices in Brazil",
 text:"The standard question is 'Quanto custa?' (How much does it cost?). Variants:\n\nQuanto é? (How much is it? Most common at markets)\nQual é o preço? (What is the price? More formal)\nQuanto sai? (How much does it come out to? Very casual)\n\nAll three work. 'Quanto é' is shortest and most natural in everyday shopping.",
 deepDive:{title:"Bargaining Culture",
  text:"In Brazil, bargaining is common at street markets (feiras) and fairs, but rare in stores. The phrase 'Tem desconto?' (Is there a discount?) often opens negotiations. Cash payments especially at markets often get 10 percent off. In shopping malls, asking for descontos can feel awkward."}},

{type:"fb", s:"Esse carro é muito {1}! Não tenho dinheiro.",
 a:["caro"],
 opts:["caro","barato","bom","velho"],
 hint:"The adjective for something too expensive.",
 sSrc:"This car is very {1}! I don't have money."},

{type:"fb", s:"Eu quero {1} um presente para minha mãe.",
 a:["comprar"],
 opts:["comprar","vender","pagar","custar"],
 hint:"The verb for acquiring something in exchange for money.",
 sSrc:"I want to {1} a gift for my mother."},

{type:"mc", q:"How do you ask 'How much does it cost?' in Portuguese?",
 opts:["Quanto é hoje?","Quanto custa?","Qual dinheiro?","Quem custa?"],
 ans:"Quanto custa?",
 hint:"Use '___' for 'how much' plus the verb meaning 'to cost'."},

{type:"mc", q:"What does 'barato' mean?",
 opts:["expensive","cheap","free","broken"],
 ans:"cheap",
 hint:"It is the opposite of expensive, a positive thing for the buyer."},

{type:"fb", s:"Este carro é muito {1}, cinquenta mil reais!",
 a:["caro"],
 opts:["caro","barato","bom","novo"],
 hint:"A price of fifty thousand is high, so the adjective should reflect that.",
 sSrc:"This car is very {1}, fifty thousand reais!"},

{type:"match", pairs:[
 {trg:"dinheiro", src:"money"},
 {trg:"preço", src:"price"},
 {trg:"caro", src:"expensive"},
 {trg:"barato", src:"cheap"}
]},

{type:"mc", q:"What is the plural of 'real'?",
 opts:["reales","reais","realis","reals"],
 ans:"reais",
 hint:"Portuguese words ending in -al typically pluralize by dropping the l and adding -is."},

{type:"fb", s:"Este livro {1} vinte reais.",
 a:["custa"],
 opts:["custa","custar","custam","preço"],
 hint:"Use the 3rd-person singular of the verb meaning 'to cost'.",
 sSrc:"This book {1} twenty reais."},

{type:"mc", q:"Which word means 'the price'?",
 opts:["o dinheiro","o preço","a loja","o real"],
 ans:"o preço",
 hint:"It is a masculine noun related to English 'precious'."}
]},

{id:"ptv2_u8l2", title:"Comprar e vender", icon:"🛍️", xp:15, board:true, steps:[
{type:"intro", title:"Buying, selling, and liking",
 desc:"Master the verbs every shopper needs: comprar (to buy), vender (to sell), pagar (to pay), and gostar de (to like).",
 goals:["Use comprar, vender, pagar","Master gostar de + noun","Talk about preferences"]},

{type:"teach", trg:"comprar", src:"to buy", pos:"verb", gender:null,
 note:"Regular -ar verb: compro, compra, compramos, compram.",
 example:"A: O que você vai comprar?\nB: Um carro.\nA: Para quem?\nB: Para minha mãe.",
 exampleSrc:"A: What are you going to buy?\nB: A car.\nA: For whom?\nB: For my mother.",
 funFact:"From Latin 'comparare' (to compare). You compare prices before you buy. Same root as 'compare'!"},

{type:"teach", trg:"vender", src:"to sell", pos:"verb", gender:null,
 note:"Regular -er verb: vendo, vende, vendemos, vendem.",
 example:"A: O que você vende aqui?\nB: Frutas e legumes.\nA: Tem manga?\nB: Sim, está doce!",
 exampleSrc:"A: What do you sell here?\nB: Fruits and vegetables.\nA: Do you have mango?\nB: Yes, it is sweet!",
 funFact:"The Portuguese word for 'vendor' comes from this same root: 'vendedor' (seller)."},

{type:"teach", trg:"pagar", src:"to pay", pos:"verb", gender:null,
 note:"Regular -ar verb: pago, paga, pagamos, pagam.",
 example:"A: Como você vai pagar?\nB: Em dinheiro.\nA: Ou no cartão?\nB: Não, prefiro dinheiro.",
 exampleSrc:"A: How will you pay?\nB: In cash.\nA: Or by card?\nB: No, I prefer cash.",
 funFact:"Pix, Brazil's instant payment system, launched in 2020 and now handles most daily transactions."},

{type:"teach", trg:"gostar", src:"to like", pos:"verb", gender:null,
 note:"Always used with 'de' before the object: gostar DE algo. Eu gosto de você.",
 example:"A: Você gosta de frutas?\nB: Gosto muito!\nA: E de doces?\nB: Também, mas menos.",
 exampleSrc:"A: Do you like fruits?\nB: I like them a lot!\nA: And sweets?\nB: Also, but less.",
 funFact:"Portuguese speakers say 'eu gosto de', literally 'I please of'. The logic is different from English 'I like'."},

{type:"teach", trg:"a loja", src:"the store", pos:"noun", gender:"f",
 note:"Store, shop. Feminine noun. Plural: as lojas.",
 example:"A: Aquela loja é boa?\nB: Sim, tem tudo.\nA: É cara?\nB: Os preços são justos.",
 exampleSrc:"A: Is that store good?\nB: Yes, it has everything.\nA: Is it expensive?\nB: The prices are fair.",
 funFact:"'Loja' originally meant 'upper room' in medieval times, where shopkeepers lived above their stalls."},

{type:"teach", trg:"o mercado", src:"the market", pos:"noun", gender:"m",
 note:"Market. Usually an open-air or larger traditional market.",
 example:"A: Vou ao mercado.\nB: O que vai comprar?\nA: Legumes e frutas.\nB: Compra pão também, por favor.",
 exampleSrc:"A: I am going to the market.\nB: What are you going to buy?\nA: Vegetables and fruits.\nB: Buy bread too, please.",
 funFact:"The Mercado Municipal in São Paulo is over 90 years old and sells mortadella sandwiches worth traveling for."},

{type:"tip", title:"Gostar de + Noun",
 text:"Gostar always needs 'de' before its object. This is non-negotiable:\n\nEu gosto de café. (I like coffee.)\nEla gosta de música. (She likes music.)\nNós gostamos de viajar. (We like to travel.)\n\nIf you forget the 'de', the sentence sounds broken to Brazilian ears. 'Eu gosto café' is wrong. Always: gosto DE.",
 deepDive:{title:"Gostar vs Amar vs Adorar",
  text:"Gostar (to like) is mild and standard. Adorar (to love, enjoy a lot) is stronger and upbeat: 'Adoro chocolate!' Amar (to love) is the strongest, usually reserved for people, pets, or deep passions. Saying 'Amo chocolate' is over the top but common and fine."}},

{type:"mc", q:"Which is correct?",
 opts:["Eu gosto café","Eu gosto de café","Eu gostar café","Eu gosto o café"],
 ans:"Eu gosto de café",
 hint:"This verb always requires a specific preposition between it and its object."},

{type:"mc", q:"What does 'vender' mean?",
 opts:["to buy","to sell","to pay","to cost"],
 ans:"to sell",
 hint:"It is the opposite action of buying, done by the shopkeeper."},

{type:"fb", s:"Eu vou {1} um presente para minha irmã.",
 a:["comprar"],
 opts:["comprar","vender","pagar","custar"],
 hint:"Buying a gift for someone is the action here, not selling or paying.",
 sSrc:"I am going to {1} a gift for my sister."},

{type:"match", pairs:[
 {trg:"comprar", src:"to buy"},
 {trg:"vender", src:"to sell"},
 {trg:"pagar", src:"to pay"},
 {trg:"loja", src:"store"}
]},

{type:"mc", q:"What is the difference between 'loja' and 'mercado'?",
 opts:["No difference","Loja is a shop, mercado is a market","Loja is free, mercado costs money","Mercado is online only"],
 ans:"Loja is a shop, mercado is a market",
 hint:"One is typically a storefront; the other a larger traditional ___ with stalls."},

{type:"fb", s:"Como você quer {1}: em dinheiro ou cartão?",
 a:["pagar"],
 opts:["pagar","comprar","gostar","vender"],
 hint:"The choice between cash and card refers to the method of a specific action.",
 sSrc:"How do you want to {1}: in cash or by card?"},

{type:"mc", q:"'Eu gosto de música' means:",
 opts:["I sell music","I like music","I buy music","I pay music"],
 ans:"I like music",
 hint:"This verb always comes with the preposition de, and means to like something."}
]},

{id:"ptv2_u8l3", title:"Roupas e tamanhos", icon:"👔", xp:15, board:true, steps:[
{type:"intro", title:"Clothes shopping",
 desc:"Clothes shopping is a daily ritual. Learn the vocabulary for shirts, pants, shoes, and general clothing.",
 goals:["Learn 4 key clothing words","Describe what you need","Combine with gostar de"]},

{type:"teach", trg:"a roupa", src:"the clothes", pos:"noun", gender:"f",
 note:"Clothes, clothing. Usually used in singular 'a roupa' for the whole set.",
 example:"A: Que roupa bonita!\nB: Obrigada, é nova.\nA: Onde comprou?\nB: Naquela loja.",
 exampleSrc:"A: What beautiful clothes!\nB: Thank you, they are new.\nA: Where did you buy them?\nB: At that store.",
 funFact:"'Roupa' meant 'spoil of war' in medieval Iberian. Clothes were often looted, so the word stuck."},

{type:"teach", trg:"a camisa", src:"the shirt", pos:"noun", gender:"f",
 note:"Shirt, usually with buttons. For t-shirts, Brazilians use 'camiseta'.",
 example:"A: Que camisa linda!\nB: Comprei ontem.\nA: Quanto custou?\nB: Cem reais.",
 exampleSrc:"A: What a beautiful shirt!\nB: I bought it yesterday.\nA: How much did it cost?\nB: One hundred reais.",
 funFact:"The Brazilian national football shirt, the 'camisa amarela', is one of the most iconic sports jerseys on earth."},

{type:"teach", trg:"a calça", src:"the pants", pos:"noun", gender:"f",
 note:"Pants, trousers. Always singular in Portuguese, even though English uses plural.",
 example:"A: Preciso de uma calça.\nB: Jeans?\nA: Sim, azul.\nB: Aquelas são boas.",
 exampleSrc:"A: I need a pair of pants.\nB: Jeans?\nA: Yes, blue.\nB: Those are good.",
 funFact:"Portuguese treats 'calça' as one item. 'Duas calças' means two pairs, not four legs of cloth."},

{type:"teach", trg:"o sapato", src:"the shoe", pos:"noun", gender:"m",
 note:"Shoe. Plural: os sapatos (shoes, a pair).",
 example:"A: Gosto do sapato.\nB: Qual tamanho?\nA: Quarenta.\nB: Vou buscar.",
 exampleSrc:"A: I like the shoe.\nB: What size?\nA: Forty.\nB: I will go get it.",
 funFact:"Brazilian shoe sizes match European sizes. Size 40 equals roughly US 8 for men."},

{type:"teach", trg:"o tamanho", src:"the size", pos:"noun", gender:"m",
 note:"Size. Used for clothes, shoes, and any dimension.",
 example:"A: Qual é o seu tamanho?\nB: M, médio.\nA: Temos aqui.\nB: Posso experimentar?",
 exampleSrc:"A: What is your size?\nB: M, medium.\nA: We have it here.\nB: Can I try it on?",
 funFact:"Brazilian clothing sizes are P (pequeno), M (médio), G (grande), and GG (extra large)."},

{type:"tip", title:"Clothes Shopping Phrases",
 text:"Essential shopping phrases:\n\nPosso experimentar? (Can I try it on?)\nQual é o tamanho? (What size?)\nTem em outra cor? (Do you have it in another color?)\nFica bem? (Does it look good?)\n\nFitting rooms in Brazilian stores are 'provadores'. Most department stores allow you to try on several items at once.",
 deepDive:{title:"Shopping Mall Culture",
  text:"Shopping malls (shoppings) are huge social hubs in Brazil. On weekends, whole families go to eat, watch movies, and hang out, often without buying anything. Every mid-size city has at least one major shopping center. The anglicism 'shopping' replaced 'centro comercial' decades ago."}},

{type:"tip", title:"Demonstratives: Este, Esse, Aquele",
 text:"Portuguese uses a three-way distance system:\n\neste / esta = this (near the speaker)\nEste sapato é meu. (This shoe is mine.)\n\nesse / essa = that (near the listener)\nEsse sapato é seu? (Is that shoe yours?)\n\naquele / aquela = that over there (far from both)\nAquela loja é ótima. (That store over there is great.)\n\nNeuter forms (for unspecified things or ideas): isto, isso, aquilo.\n\nBrazilians in casual speech often use esse for both near-me and near-you cases.",
 icon:"👉",
 deepDive:{title:"Contractions with de and em",
  text:"Demonstratives contract with de and em:\n\nde + este = deste (of this)\nde + esse = desse (of that)\nde + aquele = daquele (of that over there)\n\nem + este = neste (in this)\nem + esse = nesse (in that)\nem + aquele = naquele (in that over there)\n\nSo 'Naquela loja' = in that store, 'deste tamanho' = of this size. These contractions are mandatory, just like do and na."}},

{type:"fb", s:"Preciso de uma {1} nova para a reunião.",
 a:["camisa"],
 opts:["camisa","calça","sapato","roupa"],
 hint:"A shirt with buttons, formal or casual. Feminine noun.",
 sSrc:"I need a new {1} for the meeting."},

{type:"fb", s:"Que {1} você usa? Quarenta?",
 a:["tamanho"],
 opts:["tamanho","preço","dinheiro","número"],
 hint:"For clothes and shoes, you need to know this to pick the right fit.",
 sSrc:"What {1} do you wear? Forty?"},

{type:"mc", q:"What does 'sapato' mean?",
 opts:["shirt","pants","shoe","hat"],
 ans:"shoe",
 hint:"You wear this on your foot."},

{type:"mc", q:"Which clothing word is always singular in Portuguese?",
 opts:["camisa","calça","sapato","roupa"],
 ans:"calça",
 hint:"English says 'pants' or 'trousers'; Portuguese uses the singular form."},

{type:"fb", s:"Qual é o seu {1}? Vou buscar a camisa.",
 a:["tamanho"],
 opts:["tamanho","preço","dinheiro","sapato"],
 hint:"For clothing, you need to know this measurement before choosing.",
 sSrc:"What is your {1}? I will go get the shirt."},

{type:"match", pairs:[
 {trg:"roupa", src:"clothes"},
 {trg:"camisa", src:"shirt"},
 {trg:"calça", src:"pants"},
 {trg:"sapato", src:"shoe"}
]},

{type:"mc", q:"'Gosto desta camisa' means:",
 opts:["I buy this shirt","I like this shirt","I sell this shirt","I pay for this shirt"],
 ans:"I like this shirt",
 hint:"The verb here expresses preference, not buying or paying."},

{type:"fb", s:"Comprei uma {1} nova na loja ontem.",
 a:["camisa"],
 opts:["camisa","sapato","tamanho","dinheiro"],
 hint:"The noun after 'uma' must be feminine and singular. Pick a shirt, pants, or blouse form.",
 sSrc:"I bought a new {1} at the store yesterday."},

{type:"mc", q:"Which store would sell you 'sapatos'?",
 opts:["bakery","shoe store","butcher","bookstore"],
 ans:"shoe store",
 hint:"This noun refers to footwear."}
,

{type:"match", pairs:[
  {trg:"o mercado", src:"the market"}
]}]},

{id:"ptv2_u8l_money", title:"Fazendo compras", icon:"💰", xp:15, board:true, steps:[
{type:"intro", title:"Making Purchases and Handling Money",
 desc:"Learn essential Brazilian Portuguese for completing a transaction: payment cards, change, receipts, discounts, and talking with the cashier. Essential for CELPE-Bras A1 and daily life in Brazil.",
 goals:["Ask about discounts and totals","Pay by card or cash and get change","Request a receipt"]},

{type:"teach", trg:"o cartão", src:"the card", pos:"noun", gender:"m",
 note:"Payment card. 'Cartão de débito' = debit card. 'Cartão de crédito' = credit card.",
 example:"A: Aceita cartão?\nB: Sim, débito e crédito.\nA: Vou pagar no cartão.\nB: Pode inserir.",
 exampleSrc:"A: Do you accept card?\nB: Yes, debit and credit.\nA: I will pay by card.\nB: You can insert it.",
 funFact:"Brazil is a world leader in contactless payments. Pix, launched in 2020, lets anyone send money instantly using just a phone number."},

{type:"teach", trg:"o troco", src:"the change", pos:"noun", gender:"m",
 note:"Change, money returned after paying more than the price. 'Tem troco?' = Do you have change?",
 example:"A: São cinco reais.\nB: Aqui está dez reais.\nA: Aqui está o troco.\nB: Obrigado!",
 exampleSrc:"A: That is five reais.\nB: Here is ten reais.\nA: Here is the change.\nB: Thank you!",
 funFact:"Coins are called 'moedas' and are scarce in Brazil. Many shops round up or give candy instead of small change."},

{type:"teach", trg:"o desconto", src:"the discount", pos:"noun", gender:"m",
 note:"Discount, reduction in price. 'Tem desconto?' = Is there a discount?",
 example:"A: Tem desconto?\nB: Sim, dez por cento.\nA: Que bom!\nB: Aceitamos cartão também.",
 exampleSrc:"A: Is there a discount?\nB: Yes, ten percent.\nA: Great!\nB: We also accept card.",
 funFact:"At street markets (feiras) in Brazil, asking 'Tem desconto?' is expected. Sellers often say yes for cash."},

{type:"teach", trg:"o recibo", src:"the receipt", pos:"noun", gender:"m",
 note:"Receipt, proof of payment. Brazilians also say 'nota fiscal' (official tax receipt).",
 example:"A: Posso ter o recibo?\nB: Claro, aqui está.\nA: Obrigado.\nB: Volte sempre!",
 exampleSrc:"A: Can I have the receipt?\nB: Of course, here it is.\nA: Thank you.\nB: Come back anytime!",
 funFact:"The nota fiscal is Brazil's official receipt with tax info. Brazilians can even enter lotteries with their notas fiscais in some states."},

{type:"teach", trg:"o total", src:"the total", pos:"noun", gender:"m",
 note:"The total amount. 'Qual é o total?' = What is the total?",
 example:"A: Qual é o total?\nB: Trinta e cinco reais.\nA: Vou pagar em dinheiro.\nB: Ótimo!",
 exampleSrc:"A: What is the total?\nB: Thirty-five reais.\nA: I will pay in cash.\nB: Great!",
 funFact:"'Total' is the same word in Portuguese and English. Many financial and math terms are shared between the two languages."},

{type:"teach", trg:"cobrar", src:"to charge", pos:"verb", gender:null,
 note:"To charge a price. Used from the seller's perspective. 'Quanto você cobra?' = How much do you charge?",
 example:"A: Quanto você cobra?\nB: Cobro dez reais.\nA: Tudo bem.\nB: Vou cobrar no cartão.",
 exampleSrc:"A: How much do you charge?\nB: I charge ten reais.\nA: Alright.\nB: I will charge it to the card.",
 funFact:"Cobrar comes from Latin 'cobrare', to recover. The idea is the seller recovers the cost from the buyer."},

{type:"teach", trg:"o caixa", src:"the cashier", pos:"noun", gender:"m",
 note:"Cashier or checkout counter. 'Caixa' can be masculine (the cashier person) or feminine (a caixa = the checkout machine/area).",
 example:"A: Onde é o caixa?\nB: Ali no fundo.\nA: Obrigado!\nB: Pode pagar lá.",
 exampleSrc:"A: Where is the cashier?\nB: There in the back.\nA: Thank you!\nB: You can pay there.",
 funFact:"Self-checkout is called 'caixa de autoatendimento' in Brazil. Major supermarkets started introducing them in the 2010s."},

{type:"tip", title:"Completing a Purchase in Brazil",
 text:"A typical checkout conversation:\n\nBuyer: Aceita cartão? (Do you accept card?)\nSeller: Sim! Débito ou crédito? (Yes! Debit or credit?)\nBuyer: Débito. Qual é o total? (Debit. What is the total?)\nSeller: Vinte reais. (Twenty reais.)\nBuyer: Posso ter o recibo? (Can I have the receipt?)\nSeller: Claro, aqui está. (Of course, here it is.)\n\nFor cash:\nBuyer: Em dinheiro. (In cash.)\nSeller: Aqui está o troco. (Here is the change.)",
 deepDive:{title:"Pix, Cash, and Cards in Brazil",
  text:"Brazil has three main payment methods. Dinheiro (cash) is used at markets and small shops. Cartão (card) works everywhere in cities. Pix is a free instant bank transfer widely used since 2020. Sellers often prefer Pix because there are no card fees. If you see a QR code at checkout, that is Pix. Many small vendors now say 'Aceita Pix?' before accepting cash."}},

{type:"fb", s:"Você aceita {1} de débito?",
 a:["cartão"],
 opts:["cartão","troco","recibo","total"],
 hint:"The payment method you insert or tap at a machine.",
 sSrc:"Do you accept {1} payment?"},

{type:"mc", q:"What does 'o troco' mean?",
 opts:["the total","the discount","the change","the receipt"],
 ans:"the change",
 hint:"After paying with a large bill, you get this back from the seller."},

{type:"fb", s:"Qual é o {1}? Vinte ou trinta reais?",
 a:["total"],
 opts:["total","troco","desconto","recibo"],
 hint:"The final amount you owe before paying.",
 sSrc:"What is the {1}? Twenty or thirty reais?"},

{type:"mc", q:"Which question asks for a discount?",
 opts:["Onde é o caixa?","Aceita cartão?","Tem desconto?","Qual é o total?"],
 ans:"Tem desconto?",
 hint:"This is the key phrase shoppers use at markets to negotiate a lower price."},

{type:"fb", s:"Posso ter o {1}? Preciso para a empresa.",
 a:["recibo"],
 opts:["recibo","desconto","cartão","caixa"],
 hint:"A proof of payment, needed for expense reports or returns.",
 sSrc:"Can I have the {1}? I need it for the company."},

{type:"match", pairs:[
 {trg:"o cartão", src:"the card"},
 {trg:"o troco", src:"the change"},
 {trg:"o desconto", src:"the discount"},
 {trg:"o recibo", src:"the receipt"}
]},

{type:"fb", s:"Quanto você vai {1} por isso?",
 a:["cobrar"],
 opts:["cobrar","pagar","comprar","vender"],
 hint:"Ask the seller about the price they will set for the item.",
 sSrc:"How much are you going to {1} for that?"},

{type:"mc", q:"Where do you go to pay in a store?",
 opts:["a loja","o mercado","o caixa","o recibo"],
 ans:"o caixa",
 hint:"The counter or person that handles your payment at the end."}
]}

]}; export default UNIT_08;
