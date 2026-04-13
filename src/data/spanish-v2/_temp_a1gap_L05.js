// L05: City & Transport — Getting around town
const LESSON_5 = {
  id:"esv2_a1gap_l5", title:"Por la ciudad", icon:"\u{1F68C}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Por la ciudad",
     desc:"Navigate the city with confidence. Learn words for transportation, streets, and urban life.",
     goals:["Learn 20 city and transport words","Ask for directions","Describe urban locations"]},

    {type:"teach", trg:"el aeropuerto", src:"the airport", pos:"noun", gender:"m",
     note:"Masculine noun. Ir al aeropuerto = to go to the airport.\nFrom aero + puerto.",
     example:"A: \u00bfCómo llego al aeropuerto?\nB: En taxi o en metro.",
     exampleSrc:"A: How do I get to the airport?\nB: By taxi or by metro.",
     funFact:"Compound of 'aero' (air) + 'puerto' (port). An airport is literally an 'air port'."},

    {type:"teach", trg:"el autobús", src:"the bus", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: los autobuses.\nParada de autobús = bus stop.",
     example:"A: \u00bfViene el autobús?\nB: Sí, llega en cinco minutos.",
     exampleSrc:"A: Is the bus coming?\nB: Yes, it arrives in five minutes.",
     funFact:"From French 'autobus', itself from Latin 'omnibus' (for all). Buses were originally called 'voiture omnibus' (vehicle for all)."},

    {type:"teach", trg:"la autopista", src:"the highway, motorway", pos:"noun", gender:"f",
     note:"Feminine noun. Auto + pista (track).\nMany autopistas are toll roads in Spain.",
     example:"A: Tomamos la autopista.\nB: \u00bfEs de peaje?\nA: Sí.",
     exampleSrc:"A: We take the highway.\nB: Is it a toll road?\nA: Yes.",
     funFact:"Some Spanish highways are free (autovías) and some are toll (autopistas). The distinction matters for your wallet."},

    {type:"teach", trg:"la avenida", src:"the avenue", pos:"noun", gender:"f",
     note:"Feminine noun. Wide main road in a city.\nAv. = abbreviation.",
     example:"A: Vivo en la Avenida de la Constitución.\nB: Es una calle muy bonita.",
     exampleSrc:"A: I live on Constitution Avenue.\nB: It is a very beautiful street.",
     funFact:"From French 'avenue' (arrival), from Latin 'advenire' (to arrive at). Avenues were originally approach roads."},

    {type:"teach", trg:"el avión", src:"the airplane", pos:"noun", gender:"m",
     note:"Masculine noun. En avión = by plane.\nViajar en avión = to travel by plane.",
     example:"A: \u00bfVas en avión o en tren?\nB: En avión, es más rápido.",
     exampleSrc:"A: Are you going by plane or by train?\nB: By plane, it is faster.",
     funFact:"From French 'avion', coined by aviator Clément Ader from Latin 'avis' (bird). A plane is named after birds."},

    {type:"teach", trg:"el barco", src:"the boat, ship", pos:"noun", gender:"m",
     note:"Masculine noun. En barco = by boat.\nFerry, cruise ship, or any vessel.",
     example:"A: Vamos en barco a las islas.\nB: \u00bfCuánto tarda?",
     exampleSrc:"A: We go by boat to the islands.\nB: How long does it take?",
     funFact:"Possibly from Egyptian 'baris' (small boat). Spain's maritime history shaped the entire Age of Exploration."},

    {type:"mc",
     q:"\u00bfCómo llego al aeropuerto?",
     opts:["En taxi o en metro","En barco","A pie","En bicicleta"],
     ans:"En taxi o en metro",
     hint:"Think about the most practical ways to reach an airport in a big city."},

    {type:"teach", trg:"el barrio", src:"the neighborhood", pos:"noun", gender:"m",
     note:"Masculine noun. Mi barrio = my neighborhood.\nEach barrio has its own character.",
     example:"A: \u00bfDe qué barrio eres?\nB: Soy del barrio de Lavapiés.",
     exampleSrc:"A: What neighborhood are you from?\nB: I am from the Lavapiés neighborhood.",
     funFact:"From Arabic 'barri' (outer, suburban). Madrid's barrios each have distinct personalities, like Malasaña or Chueca."},

    {type:"teach", trg:"la bicicleta", src:"the bicycle", pos:"noun", gender:"f",
     note:"Feminine noun. Montar en bicicleta = to ride a bicycle.\nShort form: bici.",
     example:"A: Voy al trabajo en bicicleta.\nB: \u00bfNo está lejos?",
     exampleSrc:"A: I go to work by bicycle.\nB: Is it not far?",
     funFact:"From French 'bicyclette'. In everyday speech, nearly everyone says 'bici' instead of the full word."},

    {type:"teach", trg:"el billete", src:"the ticket", pos:"noun", gender:"m",
     note:"Masculine noun. Billete de avión = plane ticket.\nAlso means banknote.",
     example:"A: \u00bfDónde compro el billete?\nB: En la taquilla o por internet.",
     exampleSrc:"A: Where do I buy the ticket?\nB: At the ticket office or online.",
     funFact:"From French 'billet' (note). In Spain, 'billete' means both ticket and paper money. Context makes it clear."},

    {type:"teach", trg:"la barca", src:"the small boat", pos:"noun", gender:"f",
     note:"Feminine noun. Smaller than a barco.\nBarca de remos = rowing boat.",
     example:"A: Vamos en barca por el lago.\nB: Qué romántico.",
     exampleSrc:"A: Let's go by boat on the lake.\nB: How romantic.",
     funFact:"Same origin as barco but refers to smaller vessels. FC Barcelona's nickname 'Barça' is unrelated (it is short for Barcelona)."},

    {type:"fb",
     s:"Necesito comprar un {1} de avión a Barcelona.",
     a:["billete"],
     opts:["billete","barco","autobús","barrio"],
     hint:"This word means ticket (for transport) and also means banknote in Spanish.",
     sSrc:"I need to buy a plane {1} to Barcelona."},

    {type:"teach", trg:"la base", src:"the base, basis", pos:"noun", gender:"f",
     note:"Feminine noun. La base de = the basis of.\nA base de = based on.",
     example:"A: \u00bfCuál es la base de este plato?\nB: Arroz y verduras.",
     exampleSrc:"A: What is the base of this dish?\nB: Rice and vegetables.",
     funFact:"From Latin 'basis', from Greek 'basis' (step, pedestal). Used in cooking, science, and everyday language."},

    {type:"teach", trg:"el atasco", src:"the traffic jam", pos:"noun", gender:"m",
     note:"Masculine noun. Hay un atasco = there is a traffic jam.\nFrom atascar (to block).",
     example:"A: Hay mucho atasco hoy.\nB: Mejor vamos en metro.",
     exampleSrc:"A: There is a lot of traffic today.\nB: Better to take the metro.",
     funFact:"From 'atascar' (to clog). Madrid's traffic jams are legendary, which is why the metro system is so popular."},

    {type:"teach", trg:"la agencia", src:"the agency", pos:"noun", gender:"f",
     note:"Feminine noun. Agencia de viajes = travel agency.\nFrom agente (agent).",
     example:"A: Fui a la agencia de viajes.\nB: \u00bfReservaste algo?",
     exampleSrc:"A: I went to the travel agency.\nB: Did you book anything?",
     funFact:"From Latin 'agentia', from 'agere' (to do). Despite online booking, travel agencies remain popular in Spain."},

    {type:"teach", trg:"el automóvil", src:"the automobile, car", pos:"noun", gender:"m",
     note:"Masculine noun. Formal word for car.\nEveryday word: coche (Spain) or carro (Latin America).",
     example:"A: \u00bfTienes automóvil?\nB: Sí, pero uso más el metro.",
     exampleSrc:"A: Do you have a car?\nB: Yes, but I use the metro more.",
     funFact:"From Greek 'autos' (self) + Latin 'mobilis' (movable). A self-moving vehicle. In daily Spanish, say 'coche'."},

    {type:"mc",
     q:"\u00bfCuál es la palabra informal para 'bicicleta'?",
     opts:["bici","bicla","bica","bice"],
     ans:"bici",
     hint:"Spanish often shortens long words. This is a simple two-syllable abbreviation."},

    {type:"teach", trg:"el banco", src:"the bank; bench", pos:"noun", gender:"m",
     note:"Masculine noun. Two meanings: financial bank, and park bench.\nContext makes it clear.",
     example:"A: Voy al banco a sacar dinero.\nB: Yo espero en el banco del parque.",
     exampleSrc:"A: I am going to the bank to get money.\nB: I will wait on the park bench.",
     funFact:"From Germanic 'bank' (bench). The financial meaning came because money changers sat on benches at markets."},

    {type:"teach", trg:"el bar", src:"the bar", pos:"noun", gender:"m",
     note:"Masculine noun. In Spain, bars serve coffee, tapas, and drinks.\nNot just alcohol.",
     example:"A: \u00bfVamos al bar?\nB: Sí, quiero un café.",
     exampleSrc:"A: Shall we go to the bar?\nB: Yes, I want a coffee.",
     funFact:"Spain has more bars per capita than any other EU country. Bars are the social heart of every neighborhood."},

    {type:"teach", trg:"la bandera", src:"the flag", pos:"noun", gender:"f",
     note:"Feminine noun. La bandera de España = the Spanish flag.\nRed and yellow stripes.",
     example:"A: \u00bfDe qué color es la bandera de España?\nB: Roja y amarilla.",
     exampleSrc:"A: What color is the Spanish flag?\nB: Red and yellow.",
     funFact:"From Germanic 'bandwa' (sign, banner). Spain's flag is nicknamed 'la Rojigualda' (the red and yellow)."},

    {type:"match", pairs:[
      {trg:"aeropuerto", src:"airport"},
      {trg:"autobús", src:"bus"},
      {trg:"avión", src:"airplane"},
      {trg:"barco", src:"ship"},
      {trg:"billete", src:"ticket"}
    ]},

    {type:"fb",
     s:"Hay mucho {1} en la autopista. Mejor vamos en tren.",
     a:["atasco"],
     opts:["atasco","banco","barrio","billete"],
     hint:"This word describes the situation when cars cannot move because there are too many on the road.",
     sSrc:"There is a big {1} on the highway. Better to take the train."},
  ]
};
export default LESSON_5;
