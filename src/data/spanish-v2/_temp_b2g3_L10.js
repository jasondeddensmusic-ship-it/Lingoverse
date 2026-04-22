// Spanish B2 Gap Batch 3 - Lesson 10: Economy & Finance
// 15 teach cards + quizzes, max 30 steps

const LESSON_10 = {id:"esv2_b2g3_l10", title:"Economía y finanzas", icon:"💰", xp:15, board:true, steps:[
  {type:"intro", title:"Economía y finanzas", desc:"Essential economic and financial vocabulary for understanding news, discussing budgets, and talking about money in formal contexts.", goals:["Learn 15 economic and financial terms","Discuss financial topics fluently","Understand economic news vocabulary"]},

  {type:"teach", trg:"la devaluación", src:"devaluation", pos:"noun", gender:"f", note:"A deliberate reduction in the value of a currency.\nFrom devaluar (to devalue).", example:"A: La devaluación del peso afectó a toda la economía.\nB: Los precios de importación subieron un treinta por ciento.", exampleSrc:"A: The devaluation of the peso affected the entire economy.\nB: Import prices rose by thirty percent.", funFact:"Spain experienced major devaluaciones of the peseta before joining the euro in 1999. The euro ended that era."},

  {type:"teach", trg:"el desembolso", src:"the outlay / disbursement", pos:"noun", gender:"m", note:"Money paid out. Des- (out) + embolso (putting in a bag).\nDesembolso inicial = initial outlay.", example:"A: El desembolso inicial para la vivienda es muy alto.\nB: Sí, la entrada es el veinte por ciento.", exampleSrc:"A: The initial outlay for the home is very high.\nB: Yes, the down payment is twenty percent.", funFact:"Embolsar means to pocket money. Desembolsar means to take it out of your pocket. Spanish loves these des- reversals."},

  {type:"teach", trg:"el aumento de sueldo", src:"the pay raise", pos:"noun", gender:"m", note:"Aumento (increase) + de sueldo (of salary).\nPedir un aumento = to ask for a raise.", example:"A: He pedido un aumento de sueldo a mi jefe.\nB: ¿Y qué te ha dicho?\nA: Que lo va a pensar.", exampleSrc:"A: I've asked my boss for a pay raise.\nB: And what did he say?\nA: That he'll think about it.", funFact:"In Spain, sueldos are typically discussed as annual gross (bruto). Neto (net) is what arrives in your bank account."},

  {type:"teach", trg:"descontar", src:"to discount / to deduct", pos:"verb", gender:null, note:"Des- (removal) + contar (to count).\nDescuento = discount (noun).", example:"A: ¿Me pueden descontar el IVA en la factura?\nB: Solo si la compra es para una empresa.", exampleSrc:"A: Can you deduct the VAT on the invoice?\nB: Only if the purchase is for a company.", funFact:"IVA (Impuesto sobre el Valor Añadido) is Spain's VAT. The general rate is 21%, one of the highest in Europe."},

  {type:"teach", trg:"el egreso", src:"the expenditure / expense (formal)", pos:"noun", gender:"m", note:"Formal term for money going out.\nOpposite: ingreso (income).", example:"A: Los egresos del trimestre superaron los ingresos.\nB: Hay que revisar los gastos operativos.", exampleSrc:"A: The expenditures for the quarter exceeded the income.\nB: We need to review the operating costs.", funFact:"More common in Latin American Spanish. In Spain, gasto is the everyday word. Egreso is reserved for formal accounting."},

  {type:"teach", trg:"egresar", src:"to graduate / to leave (formal)", pos:"verb", gender:null, note:"In Latin America: to graduate from university.\nIn accounting: to spend or disburse.", example:"A: Mi hijo va a egresar de la universidad en junio.\nB: ¡Enhorabuena! Debe de estar muy contento.", exampleSrc:"A: My son is going to graduate from university in June.\nB: Congratulations! He must be very happy.", funFact:"Egresar for 'graduate' is standard in Mexico and much of Latin America. In Spain, graduarse or licenciarse are preferred."},

  {type:"mc", q:"¿Qué es un desembolso?", opts:["Dinero que se paga","Dinero que se recibe","Un tipo de inversión","Un préstamo bancario"], ans:"Dinero que se paga", hint:"Think of taking money out of your pocket (bolso). The prefix des- means 'out'."},

  {type:"teach", trg:"la domiciliación", src:"the direct debit setup", pos:"noun", gender:"f", note:"Setting up automatic payments from a bank account.\nDomiciliación bancaria = direct debit arrangement.", example:"A: ¿Quiere hacer la domiciliación del recibo?\nB: Sí, así no tengo que pagar manualmente cada mes.", exampleSrc:"A: Would you like to set up direct debit for the bill?\nB: Yes, that way I don't have to pay manually each month.", funFact:"In Spain, domiciliación bancaria is extremely common. Most utility bills, rent, and subscriptions use this system."},

  {type:"teach", trg:"la aspiración", src:"the aspiration / ambition", pos:"noun", gender:"f", note:"A strong desire to achieve something.\nAlso physical: inhaling air.", example:"A: Su mayor aspiración es abrir su propio negocio.\nB: Con su talento y esfuerzo, lo conseguirá.", exampleSrc:"A: His greatest aspiration is to open his own business.\nB: With his talent and effort, he'll achieve it.", funFact:"From Latin aspirare (to breathe toward). Both the figurative (ambition) and literal (breathing) meanings survive in Spanish."},

  {type:"teach", trg:"la dependencia", src:"the dependence / office (branch)", pos:"noun", gender:"f", note:"Double meaning: reliance on something, or a government office/branch.\nDependencias del ministerio = ministry offices.", example:"A: La dependencia del petróleo es un problema grave.\nB: Hay que invertir más en energías renovables.", exampleSrc:"A: Dependence on oil is a serious problem.\nB: We need to invest more in renewable energy.", funFact:"In Spanish bureaucracy, dependencias means offices or premises. Dependencias policiales = police premises. Context is everything."},

  {type:"fb", s:"La {1} de la moneda provocó una crisis económica.", a:["devaluación"], opts:["devaluación","domiciliación","dependencia","aspiración"], hint:"When a currency officially loses its value against other currencies.", sSrc:"The {1} of the currency caused an economic crisis."},

  {type:"teach", trg:"drástico", src:"drastic", pos:"adj", gender:null, note:"Extreme or severe. Medidas drásticas = drastic measures.\nFrom Greek drastikos (effective).", example:"A: El gobierno ha tomado medidas drásticas contra la inflación.\nB: Esperemos que funcionen.", exampleSrc:"A: The government has taken drastic measures against inflation.\nB: Let's hope they work.", funFact:"Perfect cognate with English 'drastic'. Both from Greek dran (to do, to act). Something drastic demands immediate action."},

  {type:"teach", trg:"el despegue", src:"the takeoff / launch", pos:"noun", gender:"m", note:"Literal: aircraft takeoff. Figurative: economic launch.\nEl despegue económico = the economic takeoff.", example:"A: El despegue de la economía española fue en los años sesenta.\nB: Sí, el turismo fue clave en ese crecimiento.", exampleSrc:"A: The takeoff of the Spanish economy was in the sixties.\nB: Yes, tourism was key in that growth.", funFact:"Spain's 'economic miracle' of the 1960s is called el despegue económico. Tourism transformed the country's economy."},

  {type:"mc", q:"¿Qué es la domiciliación bancaria?", opts:["Un seguro de hogar","Pago automático desde tu cuenta","Un préstamo del banco","Una tarjeta de crédito"], ans:"Pago automático desde tu cuenta", hint:"Setting up your bank account to automatically pay bills each month."},

  {type:"match", pairs:[{trg:"devaluación", src:"devaluation"},{trg:"desembolso", src:"outlay"},{trg:"egreso", src:"expenditure"},{trg:"domiciliación", src:"direct debit"},{trg:"despegue", src:"takeoff / launch"}]},

  {type:"fb", s:"Necesito pedir un {1} a mi jefe porque los precios han subido mucho.", a:["aumento de sueldo"], opts:["aumento de sueldo","desembolso","egreso","despegue"], hint:"A request for more money in your regular salary payment.", sSrc:"I need to ask my boss for a {1} because prices have risen a lot."},

  {type:"mc", q:"'Egresar' en Latinoamérica significa...", opts:["Emigrar a otro país","Jubilarse del trabajo","Graduarse de la universidad","Perder dinero en la bolsa"], ans:"Graduarse de la universidad", hint:"In Latin American Spanish, this verb means to finish your university studies."},

  {type:"fb", s:"El gobierno ha tomado medidas {1} para controlar el gasto público.", a:["drásticas"], opts:["drásticas","domiciliadas","dependientes","descontadas"], hint:"Extreme, severe measures that represent a significant change in policy.", sSrc:"The government has taken {1} measures to control public spending."}
]};

export default LESSON_10;
