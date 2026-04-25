const LESSON_14 = {
  id:"frv2_b2gA_l14", title:"Environnement et nature", icon:"\u{1F33F}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Environnement et nature",
     desc:"Discuss environmental issues and natural phenomena with the precision expected at B2 level. Essential vocabulary for climate debates.",
     goals:["Learn 14 environment and nature words","Discuss climate change and ecology","Use scientific vocabulary in everyday contexts"]},

    {type:"teach", trg:"le paludisme", src:"malaria", pos:"noun", gender:"m",
     note:"Masculine noun. A tropical disease transmitted by mosquitoes.\nAlso called 'la malaria' informally.",
     example:"A: Le paludisme tue encore des milliers de personnes.\nB: La prevention par les moustiquaires est essentielle.",
     exampleSrc:"A: Malaria still kills thousands of people.\nB: Prevention through mosquito nets is essential.",
     funFact:"From Latin 'palus' meaning swamp. The disease was linked to swampy areas before mosquitoes were identified."},

    {type:"teach", trg:"le décimètre", src:"the decimeter", pos:"noun", gender:"m",
     note:"Masculine noun. One tenth of a meter (10 centimeters).\nRarely used in daily life.",
     example:"A: La neige est tombee sur un decimetre.\nB: C'est beaucoup pour cette region.",
     exampleSrc:"A: Snow fell to a depth of one decimeter.\nB: That's a lot for this region.",
     funFact:"The metric system was invented in France during the Revolution. France is fiercely proud of this contribution."},

    {type:"teach", trg:"la deflagration", src:"the deflagration, the blast", pos:"noun", gender:"f",
     note:"Feminine noun. A rapid combustion or explosion.\nMore technical than 'explosion'.",
     example:"A: La deflagration a ete entendue a des kilometres.\nB: C'etait un accident industriel.",
     exampleSrc:"A: The blast was heard kilometers away.\nB: It was an industrial accident.",
     funFact:"In chemistry, deflagration is slower than detonation. In everyday French, both mean a powerful blast."},

    {type:"teach", trg:"le reboisement", src:"reforestation", pos:"noun", gender:"m",
     note:"Masculine noun. Planting trees to restore a forest.\nRe- + boisement (from 'bois', wood).",
     example:"A: Le reboisement de cette colline a pris dix ans.\nB: Maintenant la foret reprend ses droits.",
     exampleSrc:"A: The reforestation of this hill took ten years.\nB: Now the forest is reclaiming its rights.",
     funFact:"France has actually increased its forest cover by 50% since 1850. Reboisement programs are a quiet success story."},

    {type:"teach", trg:"la biodiversite", src:"biodiversity", pos:"noun", gender:"f",
     note:"Feminine noun. The variety of life forms in an ecosystem.\nA key environmental concept.",
     example:"A: La biodiversite est menacee par la deforestation.\nB: Chaque espece compte.",
     exampleSrc:"A: Biodiversity is threatened by deforestation.\nB: Every species matters.",
     funFact:"France hosts over 180,000 species including overseas territories. The most biodiverse EU country."},

    {type:"mc",
     q:"Quel mot designe la maladie tropicale transmise par les moustiques ?",
     opts:["le paludisme","le reboisement","la deflagration","la biodiversite"],
     ans:"le paludisme",
     hint:"From Latin 'palus' (swamp). The disease was associated with marshy areas before the cause was known."},

    {type:"teach", trg:"l'erosion", src:"erosion", pos:"noun", gender:"f",
     note:"Feminine noun. The gradual wearing away of rock, soil, or coastline.\nAlso figurative.",
     example:"A: L'erosion des falaises est preoccupante.\nB: La mer avance de plusieurs metres par an.",
     exampleSrc:"A: The erosion of the cliffs is concerning.\nB: The sea advances several meters per year.",
     funFact:"Normandy's chalk cliffs erode dramatically. 'L'erosion du pouvoir d'achat' means erosion of purchasing power."},

    {type:"teach", trg:"le rechauffement", src:"warming (climate)", pos:"noun", gender:"m",
     note:"Masculine noun. The process of getting warmer.\n'Le rechauffement climatique' = global warming.",
     example:"A: Le rechauffement climatique s'accelere.\nB: Il faut reduire les emissions de CO2.",
     exampleSrc:"A: Climate warming is accelerating.\nB: We need to reduce CO2 emissions.",
     funFact:"France hosted COP21 in Paris (2015), producing the Paris Agreement. Climate vocabulary is everyday French now."},

    {type:"teach", trg:"le gaspillage", src:"waste, wastefulness", pos:"noun", gender:"m",
     note:"Masculine noun. Careless or excessive use of resources.\n'Gaspillage alimentaire' = food waste.",
     example:"A: Le gaspillage alimentaire est un scandale.\nB: Un tiers de la nourriture est jete.",
     exampleSrc:"A: Food waste is a scandal.\nB: A third of food is thrown away.",
     funFact:"France was the first country to ban supermarkets from throwing away unsold food (2016 law)."},

    {type:"fb",
     s:"Le {1} climatique menace les ecosystemes fragiles.",
     a:["rechauffement"],
     opts:["rechauffement","reboisement","gaspillage","paludisme"],
     hint:"The process of warming. Combined with 'climatique' for the global phenomenon.",
     sSrc:"Climate {1} threatens fragile ecosystems."},

    {type:"teach", trg:"la secheresse", src:"drought", pos:"noun", gender:"f",
     note:"Feminine noun. An extended period without rain.\nAlso: dryness of style or character.",
     example:"A: La secheresse a detruit les recoltes.\nB: Les agriculteurs demandent des aides d'urgence.",
     exampleSrc:"A: The drought destroyed the crops.\nB: Farmers are requesting emergency aid.",
     funFact:"Summer droughts in France are becoming more common. Water restrictions ('arrete secheresse') are now annual events."},

    {type:"teach", trg:"le tri", src:"sorting (waste)", pos:"noun", gender:"m",
     note:"Masculine noun. The act of sorting, especially waste for recycling.\n'Faire le tri' = to sort waste.",
     example:"A: Le tri selectif est obligatoire ici.\nB: Chaque poubelle a sa couleur.",
     exampleSrc:"A: Waste sorting is mandatory here.\nB: Each bin has its own color.",
     funFact:"France uses color-coded bins: yellow for recyclables, green for glass, grey for general waste. Systems vary by city."},

    {type:"teach", trg:"la nappe phreatique", src:"the water table, groundwater", pos:"noun", gender:"f",
     note:"Feminine noun. Underground water reserves.\n'Nappe' = layer or tablecloth.",
     example:"A: La nappe phreatique est a un niveau critique.\nB: Il faut limiter les prelevements.",
     exampleSrc:"A: The water table is at a critical level.\nB: We need to limit withdrawals.",
     funFact:"French weather reports now regularly mention 'les nappes phreatiques' when discussing drought levels."},

    {type:"mc",
     q:"Quel mot designe l'utilisation excessive et inutile de ressources ?",
     opts:["l'erosion","le gaspillage","le tri","le reboisement"],
     ans:"le gaspillage",
     hint:"Careless waste. France was the first to ban supermarkets from throwing away unsold food."},

    {type:"teach", trg:"le polluant", src:"the pollutant", pos:"noun", gender:"m",
     note:"Masculine noun. A substance that contaminates the environment.\nAlso adjective: polluant(e).",
     example:"A: Ce polluant a contamine la riviere.\nB: Les poissons meurent par milliers.",
     exampleSrc:"A: This pollutant contaminated the river.\nB: Fish are dying by the thousands.",
     funFact:"Paris has regular 'pics de pollution' (pollution peaks) when traffic restrictions are imposed."},

    {type:"fb",
     s:"La {1} a detruit les recoltes dans le sud de la France cet ete.",
     a:["secheresse"],
     opts:["secheresse","erosion","biodiversite","deflagration"],
     hint:"An extended period without rain. Increasingly common in southern France.",
     sSrc:"The {1} destroyed crops in southern France this summer."},

    {type:"match", pairs:[
      {trg:"reboisement", src:"reforestation"},
      {trg:"erosion", src:"erosion"},
      {trg:"secheresse", src:"drought"},
      {trg:"tri", src:"waste sorting"},
      {trg:"polluant", src:"pollutant"}
    ]},

    {type:"mc",
     q:"Quel terme designe les reserves d'eau souterraines ?",
     opts:["l'erosion","le reboisement","la nappe phreatique","la biodiversite"],
     ans:"la nappe phreatique",
     hint:"Underground water reserves. The compound term combines a noun meaning 'layer' with an adjective from Greek phreatos (well)."}
  ]
};
export default LESSON_14;
