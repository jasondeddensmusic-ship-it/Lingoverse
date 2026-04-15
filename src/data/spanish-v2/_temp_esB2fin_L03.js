// Spanish B2 Final Batch - Lesson 3: Environment & Climate
const LESSON_3 = {
  id:"esv2_b2fin_l3", title:"Medio Ambiente y Clima", icon:"🌍", xp:15, board:true,
  steps:[
    {type:"intro", title:"Medio Ambiente y Clima",
     desc:"Build vocabulary for discussing environmental issues, climate change, and sustainability. Essential for DELE B2 opinion essays and debates.",
     goals:["Describe environmental problems using precise terminology","Discuss sustainability and ecological solutions","Express opinions about climate change and human impact"]},

    {type:"teach", trg:"el calentamiento global", src:"global warming", pos:"noun", gender:"m",
     note:"The gradual increase in Earth's average temperature.",
     example:"A: El calentamiento global es el mayor desafío de nuestra era.\nB: Las temperaturas han subido más de un grado.",
     exampleSrc:"A: Global warming is the greatest challenge of our era.\nB: Temperatures have risen more than one degree.",
     funFact:"'Calentamiento' from 'calentar' (to heat), from Latin 'calere'. Same root as English 'calorie'."},

    {type:"teach", trg:"los residuos", src:"waste / residues", pos:"noun", gender:"m",
     note:"Waste materials, especially industrial or hazardous. More formal than 'basura'.",
     example:"A: ¿Dónde se depositan los residuos tóxicos?\nB: En vertederos especiales para residuos peligrosos.",
     exampleSrc:"A: Where are toxic waste materials deposited?\nB: In special landfills for hazardous waste.",
     funFact:"From Latin 'residuum' (what remains behind). English 'residue' is a direct cognate."},

    {type:"teach", trg:"sostenible", src:"sustainable", pos:"adj", gender:null,
     note:"Meeting present needs without compromising future generations.",
     example:"A: Necesitamos un modelo de desarrollo sostenible.\nB: El turismo sostenible respeta el medio ambiente.",
     exampleSrc:"A: We need a sustainable development model.\nB: Sustainable tourism respects the environment.",
     funFact:"From 'sostener' (to sustain), Latin 'sustinere'. The concept was popularized by the 1987 Brundtland Report."},

    {type:"teach", trg:"la huella ecológica", src:"the ecological footprint", pos:"noun", gender:"f",
     note:"The measure of human demand on Earth's ecosystems.",
     example:"A: ¿Cuál es tu huella ecológica?\nB: Intento reducir mi huella ecológica usando transporte público.",
     exampleSrc:"A: What is your ecological footprint?\nB: I try to reduce my ecological footprint by using public transport.",
     funFact:"'Huella' means footprint or trace. The concept was developed by Mathis Wackernagel in 1992."},

    {type:"teach", trg:"las emisiones", src:"emissions", pos:"noun", gender:"f",
     note:"Gases released into the atmosphere, especially CO2 from burning fossil fuels.",
     example:"A: Las emisiones de CO2 siguen aumentando.\nB: Debemos reducir las emisiones un 50% para 2030.",
     exampleSrc:"A: CO2 emissions keep increasing.\nB: We must reduce emissions by 50% by 2030.",
     funFact:"From Latin 'emissio' (sending out). Related to 'emisora' (broadcasting station) via the same root."},

    {type:"teach", trg:"renovable", src:"renewable", pos:"adj", gender:null,
     note:"Energy sources that replenish naturally: solar, wind, hydro.",
     example:"A: La energía renovable es el futuro.\nB: España es líder en energía solar y eólica.",
     exampleSrc:"A: Renewable energy is the future.\nB: Spain is a leader in solar and wind energy.",
     funFact:"From 'renovar' (to renew), Latin 'renovare'. Spain generates over 50% of its electricity from renewables."},

    {type:"teach", trg:"el reciclaje", src:"recycling", pos:"noun", gender:"m",
     note:"The process of converting waste into reusable materials.",
     example:"A: ¿Separas los residuos para el reciclaje?\nB: Sí, tengo contenedores para plástico, papel y vidrio.",
     exampleSrc:"A: Do you separate waste for recycling?\nB: Yes, I have bins for plastic, paper, and glass.",
     funFact:"From 're-' (again) + 'ciclo' (cycle). Literally means to put materials through the cycle again."},

    {type:"mc", q:"¿Qué mide la 'huella ecológica'?",
     opts:["El tamaño de un bosque","La demanda humana sobre los ecosistemas","La temperatura del planeta","El número de especies"],
     ans:"La demanda humana sobre los ecosistemas",
     hint:"This metric measures how much of Earth's resources an individual or population consumes."},

    {type:"teach", trg:"la sequía", src:"drought", pos:"noun", gender:"f",
     note:"An extended period without rain, causing water shortage.",
     example:"A: La sequía ha destruido las cosechas este año.\nB: Es la peor sequía en cincuenta años.",
     exampleSrc:"A: The drought has destroyed the crops this year.\nB: It's the worst drought in fifty years.",
     funFact:"From Latin 'siccitas' (dryness). Spain faces increasing droughts due to Mediterranean climate shifts."},

    {type:"teach", trg:"el vertedero", src:"the landfill / dump", pos:"noun", gender:"m",
     note:"A site for disposing of waste by burial. Environmental problem worldwide.",
     example:"A: El vertedero está casi lleno.\nB: Necesitamos reducir lo que enviamos al vertedero.",
     exampleSrc:"A: The landfill is almost full.\nB: We need to reduce what we send to the landfill.",
     funFact:"From 'verter' (to pour/dump), Latin 'vertere' (to turn). Waste is 'poured' into these sites."},

    {type:"teach", trg:"la deforestación", src:"deforestation", pos:"noun", gender:"f",
     note:"The clearing or destruction of forests, often for agriculture.",
     example:"A: La deforestación en el Amazonas es alarmante.\nB: Se pierden miles de hectáreas cada año.",
     exampleSrc:"A: Deforestation in the Amazon is alarming.\nB: Thousands of hectares are lost every year.",
     funFact:"'De-' (removal) + 'forestación' (forestation). Latin 'forestis' originally meant 'outside' (the village)."},

    {type:"fb", s:"España invierte cada vez más en energía {1}.", a:["renovable"],
     opts:["renovable","sostenible","ecológica","global"],
     hint:"This adjective describes energy sources that naturally replenish, like solar and wind.",
     sSrc:"Spain invests increasingly more in {1} energy."},

    {type:"teach", trg:"el efecto invernadero", src:"the greenhouse effect", pos:"noun", gender:"m",
     note:"The trapping of heat in the atmosphere by certain gases.",
     example:"A: El efecto invernadero es un proceso natural.\nB: Pero las emisiones humanas lo han intensificado.",
     exampleSrc:"A: The greenhouse effect is a natural process.\nB: But human emissions have intensified it.",
     funFact:"'Invernadero' from 'invierno' (winter). A greenhouse keeps warmth in winter, like gases trap heat."},

    {type:"teach", trg:"la biodiversidad", src:"biodiversity", pos:"noun", gender:"f",
     note:"The variety of plant and animal life in a habitat or the world.",
     example:"A: La biodiversidad del bosque tropical es increíble.\nB: Proteger la biodiversidad es proteger nuestro futuro.",
     exampleSrc:"A: The biodiversity of the tropical forest is incredible.\nB: Protecting biodiversity is protecting our future.",
     funFact:"From Greek 'bios' (life) + Latin 'diversitas' (variety). A term coined in 1985 by Walter Rosen."},

    {type:"teach", trg:"contaminar", src:"to pollute / to contaminate", pos:"verb", gender:null,
     note:"To make something impure or harmful, especially the environment.",
     example:"A: Las fábricas contaminan los ríos con residuos químicos.\nB: Debemos prohibir que las empresas contaminen el agua.",
     exampleSrc:"A: Factories pollute rivers with chemical waste.\nB: We must prohibit companies from polluting the water.",
     funFact:"From Latin 'contaminare' (to make impure by mixing). Same root as English 'contaminate'."},

    {type:"teach", trg:"la capa de ozono", src:"the ozone layer", pos:"noun", gender:"f",
     note:"The atmospheric layer that absorbs most UV radiation from the sun.",
     example:"A: ¿Se ha recuperado la capa de ozono?\nB: Parcialmente, gracias a la prohibición de los CFC.",
     exampleSrc:"A: Has the ozone layer recovered?\nB: Partially, thanks to the ban on CFCs.",
     funFact:"'Capa' means layer/cloak. 'Ozono' from Greek 'ozein' (to smell), because ozone has a distinct odor."},

    {type:"mc", q:"¿Qué causa el efecto invernadero intensificado?",
     opts:["Las energías renovables","Las emisiones de gases como el CO2","El reciclaje","La biodiversidad"],
     ans:"Las emisiones de gases como el CO2",
     hint:"Certain atmospheric compounds trap heat when released in excess by human activity."},

    {type:"teach", trg:"el cambio climático", src:"climate change", pos:"noun", gender:"m",
     note:"Long-term shifts in global temperatures and weather patterns.",
     example:"A: El cambio climático afecta a todos los continentes.\nB: Es urgente tomar medidas contra el cambio climático.",
     exampleSrc:"A: Climate change affects all continents.\nB: It's urgent to take measures against climate change.",
     funFact:"'Cambio' from Latin 'cambium' (exchange). Climate change involves shifts in long-term weather patterns."},

    {type:"teach", trg:"agotar", src:"to exhaust / to deplete", pos:"verb", gender:null,
     note:"To use up a resource completely. Often used for natural resources.",
     example:"A: Si seguimos así, vamos a agotar los recursos naturales.\nB: El agua potable se está agotando en muchas regiones.",
     exampleSrc:"A: If we continue like this, we'll deplete natural resources.\nB: Drinking water is running out in many regions.",
     funFact:"From Latin 'ex-guttare' (to drain drop by drop). Literally, to empty something to the last drop."},

    {type:"fb", s:"La {1} del Amazonas amenaza a miles de especies.", a:["deforestación"],
     opts:["deforestación","biodiversidad","sequía","capa"],
     hint:"This process involves the large-scale clearing or destruction of forest areas.",
     sSrc:"The {1} of the Amazon threatens thousands of species."},

    {type:"match", pairs:[
      {trg:"el calentamiento global", src:"global warming"},
      {trg:"los residuos", src:"waste"},
      {trg:"la sequía", src:"drought"},
      {trg:"contaminar", src:"to pollute"}
    ]},

    {type:"mc", q:"¿Qué significa 'agotar los recursos naturales'?",
     opts:["Descubrir nuevos recursos","Usar los recursos completamente hasta acabarlos","Reciclar los recursos","Proteger los recursos"],
     ans:"Usar los recursos completamente hasta acabarlos",
     hint:"This verb means to drain or use up something until nothing remains."},

    {type:"fb", s:"El {1} es un proceso natural que las emisiones humanas han intensificado.", a:["efecto invernadero"],
     opts:["efecto invernadero","cambio climático","calentamiento global","reciclaje"],
     hint:"This atmospheric phenomenon involves gases trapping heat like a glass structure for plants.",
     sSrc:"The {1} is a natural process that human emissions have intensified."},

    {type:"match", pairs:[
      {trg:"sostenible", src:"sustainable"},
      {trg:"la biodiversidad", src:"biodiversity"},
      {trg:"el reciclaje", src:"recycling"},
      {trg:"la capa de ozono", src:"the ozone layer"}
    ]},

    {type:"mc", q:"¿Cuál es la principal causa de la deforestación?",
     opts:["El reciclaje","La agricultura y la ganadería","La energía renovable","La biodiversidad"],
     ans:"La agricultura y la ganadería",
     hint:"Forests are cleared primarily to make room for growing crops and raising livestock."}
  ]
};
export default LESSON_3;
