// Unit 18 Expansion. Lesson 6: Green Energy
const LESSON_6 = {
  id:"itv2_u18l6", title:"L'energia verde", icon:"⚡", xp:15, board:true,
  steps:[
    {type:"intro", title:"L'energia verde",
     desc:"Learn Italian vocabulary for green energy sources: solar, wind, geothermal, and hydroelectric. Italy's geography makes it uniquely suited for several renewable energy types.",
     goals:["Name green energy sources in Italian","Discuss Italy's renewable energy landscape","Express opinions about the energy future"]},

    {type:"teach", trg:"l'energia solare", src:"solar energy", pos:"noun", gender:"f",
     note:"Feminine. 'Solare' = solar, from 'sole' (sun).\n'Pannello solare' = solar panel. 'Impianto fotovoltaico' = solar installation.",
     example:"A: L'energia solare e la piu diffusa in Italia.\nB: Soprattutto nel Sud, con tutto quel sole!",
     exampleSrc:"A: Solar energy is the most widespread in Italy.\nB: Especially in the South, with all that sun!",
     funFact:"Italy receives about 1,500-2,000 hours of sunshine per year, making solar energy very efficient. Southern Italy and Sicily have Europe's highest solar potential. Italy was the world's second-largest solar market in 2011. Over 1 million Italian homes now have rooftop solar panels."},

    {type:"teach", trg:"l'energia eolica", src:"wind energy", pos:"noun", gender:"f",
     note:"Feminine. 'Eolico' from 'Eolo,' the Greek god of wind.\n'Parco eolico' = wind farm.",
     example:"A: Ci sono parchi eolici in Puglia.\nB: Si, il vento del Sud e perfetto.",
     exampleSrc:"A: There are wind farms in Puglia.\nB: Yes, the southern wind is perfect.",
     funFact:"'Eolico' comes from 'Eolo' (Aeolus), the Greek god of winds. Puglia, Sardinia, and Sicily have Italy's best wind resources. The 'Maestrale' wind in Sardinia is particularly strong. Italy is expanding 'eolico offshore' (offshore wind) in the Mediterranean, though projects face local opposition."},

    {type:"teach", trg:"l'energia geotermica", src:"geothermal energy", pos:"noun", gender:"f",
     note:"Feminine. 'Geo' (earth) + 'termica' (thermal/heat).\n'Larderello' in Tuscany: world's first geothermal plant.",
     example:"A: L'Italia ha una lunga storia con l'energia geotermica.\nB: Larderello produce elettricita dal 1904!",
     exampleSrc:"A: Italy has a long history with geothermal energy.\nB: Larderello has been producing electricity since 1904!",
     funFact:"Larderello in Tuscany is where the world's first geothermal power plant was built in 1904. Italy remains a European leader in geothermal energy. The volcanic nature of the Italian peninsula provides natural underground heat. Iceland and Italy are the only two European countries with significant geothermal production."},

    {type:"teach", trg:"l'energia idroelettrica", src:"hydroelectric energy", pos:"noun", gender:"f",
     note:"Feminine. 'Idro' (water) + 'elettrica' (electric).\n'Centrale idroelettrica' = hydroelectric power plant.",
     example:"A: Le Alpi hanno molte centrali idroelettriche.\nB: L'acqua delle montagne produce molta energia.",
     exampleSrc:"A: The Alps have many hydroelectric plants.\nB: Mountain water produces a lot of energy.",
     funFact:"Hydroelectric power was Italy's first major renewable energy source. Alpine rivers and lakes power numerous 'centrali idroelettriche' in the north. However, reduced rainfall and glacier melting due to climate change are threatening hydroelectric production, creating a paradox: climate change undermines a clean energy source."},

    {type:"teach", trg:"la turbina", src:"the turbine", pos:"noun", gender:"f",
     note:"Feminine. From Latin 'turbo' (spinning top).\n'Turbina eolica' = wind turbine.",
     example:"A: Quella turbina eolica e enorme!\nB: Si, puo alimentare mille case.",
     exampleSrc:"A: That wind turbine is enormous!\nB: Yes, it can power a thousand homes.",
     funFact:"Modern wind turbines can reach 250 meters in height. Italy's largest wind farm is in Puglia with hundreds of turbines. 'Turbina' comes from Latin 'turbo' (spinning object). In Italy, wind turbine installations face 'NIMBY' opposition (Not In My Back Yard), called 'sindrome NIMBY' in Italian."},

    {type:"teach", trg:"la rete elettrica", src:"the power grid", pos:"noun", gender:"f",
     note:"Feminine. 'Rete' = network. 'Elettrica' = electric.\n'Rete nazionale' = national grid.",
     example:"A: La rete elettrica deve essere modernizzata.\nB: Per gestire l'energia rinnovabile servono reti intelligenti.",
     exampleSrc:"A: The power grid needs to be modernized.\nB: Smart grids are needed to manage renewable energy.",
     funFact:"Italy's power grid is managed by 'Terna,' a publicly listed company. The grid must adapt to handle variable renewable energy (solar and wind fluctuate). 'Reti intelligenti' (smart grids) use digital technology to balance supply and demand. Italy is investing heavily in grid modernization."},

    {type:"teach", trg:"la mobilita elettrica", src:"electric mobility", pos:"noun", gender:"f",
     note:"Feminine. 'Mobilita' = mobility. 'Elettrica' = electric.\n'Auto elettrica' = electric car.",
     example:"A: La mobilita elettrica cresce in Italia.\nB: Ma servono piu colonnine di ricarica.",
     exampleSrc:"A: Electric mobility is growing in Italy.\nB: But more charging stations are needed.",
     funFact:"Electric car adoption in Italy is growing but lags behind Norway and Germany. 'Colonnine di ricarica' (charging stations) are still sparse outside major cities. The Italian government offers 'incentivi' (incentives) of up to 5,000 euros for buying electric vehicles. 'Motorini elettrici' (electric scooters) are popular in cities."},

    {type:"teach", trg:"la colonnina di ricarica", src:"the charging station", pos:"noun", gender:"f",
     note:"Feminine. 'Colonnina' = small column. 'Ricarica' = recharge.\n'Ricaricare l'auto elettrica' = to charge the electric car.",
     example:"A: C'e una colonnina di ricarica qui vicino?\nB: Si, nel parcheggio del supermercato.",
     exampleSrc:"A: Is there a charging station nearby?\nB: Yes, in the supermarket parking lot.",
     funFact:"Italy plans to install 30,000 charging points by 2030. Currently, most are concentrated in the north. Charging infrastructure ('infrastruttura di ricarica') is seen as the key bottleneck for electric vehicle adoption. Highways are adding fast-charging stations ('ricarica veloce') at rest areas."},

    {type:"teach", trg:"l'efficienza energetica", src:"energy efficiency", pos:"noun", gender:"f",
     note:"Feminine. 'Efficienza' = efficiency. 'Energetica' = energy-related.\n'Classe energetica' = energy rating (A, B, C...).",
     example:"A: Questa casa ha una buona efficienza energetica?\nB: Si, e in classe A. I consumi sono bassi.",
     exampleSrc:"A: Does this house have good energy efficiency?\nB: Yes, it is class A rated. Consumption is low.",
     funFact:"Italian buildings are rated on an energy efficiency scale from A4 (best) to G (worst). The 'Attestato di Prestazione Energetica' (APE, Energy Performance Certificate) is mandatory for all property sales and rentals. Italy's 'Superbonus 110%' incentive drove millions of home energy upgrades."},

    // Quiz steps
    {type:"mc", q:"Where is the world's first geothermal power plant located?",
     opts:["Larderello, Tuscany, Italy","Yellowstone, USA","Rotorua, New Zealand","Reykjavik, Iceland"],
     ans:"Larderello, Tuscany, Italy",
     hint:"This Tuscan town has been producing geothermal electricity since 1904. I...'s volcanic geology provides natural underground heat."},

    {type:"fb", s:"Ci sono parchi {1} in Puglia con centinaia di turbine.",
     a:["eolici"],
     opts:["eolici","solari","geotermici","idroelettrici"],
     hint:"These farms harness the power of wind. The name comes from 'Eolo,' the Greek god of winds.",
     sSrc:"There are wind {1} in Puglia with hundreds of turbines."},

    {type:"match", pairs:[
      {trg:"l'energia solare", src:"solar energy"},
      {trg:"l'energia eolica", src:"wind energy"},
      {trg:"l'energia geotermica", src:"geothermal energy"},
      {trg:"la turbina", src:"the turbine"},
      {trg:"la rete elettrica", src:"the power grid"}
    ]},

    {type:"mc", q:"What threatens Italy's hydroelectric production?",
     opts:["Excess rainfall flooding the turbines","Reduced rainfall and glacier melting from climate change","Government regulations limiting water use","Too many new dams being built"],
     ans:"Reduced rainfall and glacier melting from climate change",
     hint:"Less water in Alpine rivers means less power generation. C... c... undermines a clean energy source."},

    {type:"fb", s:"Servono piu {1} di ricarica per le auto elettriche.",
     a:["colonnine"],
     opts:["colonnine","turbine","centrali","reti"],
     hint:"These small structures in parking lots let you plug in your electric vehicle. Italy needs 30,000 by 2030.",
     sSrc:"More charging {1} are needed for electric cars."},

    {type:"mc", q:"What is the 'APE' in Italian real estate?",
     opts:["A tax document for property sales","An annual property evaluation","An energy performance certificate rating buildings A to G","An insurance policy for homeowners"],
     ans:"An energy performance certificate rating buildings A to G",
     hint:"'Attestato di Prestazione Energetica.' It rates how much e... a building consumes. Mandatory for sales and rentals."},

    {type:"fb", s:"L'Italia deve modernizzare la {1} elettrica per le rinnovabili.",
     a:["rete"],
     opts:["rete","turbina","colonnina","centrale"],
     hint:"The national power network must be upgraded to handle variable renewable energy. Smart grids are the solution.",
     sSrc:"Italy must modernize the electric {1} for renewables."},

    {type:"mc", q:"What incentive does Italy offer for buying electric vehicles?",
     opts:["Free electricity for one year","No road tax for ten years","Free parking in all cities","Up to 5,000 euros toward the purchase"],
     ans:"Up to 5,000 euros toward the purchase",
     hint:"The government provides financial 'incentivi' to encourage the switch from fossil fuel cars to electric vehicles."}
  ]
};
export default LESSON_6;
