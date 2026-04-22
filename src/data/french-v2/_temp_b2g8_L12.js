const LESSON_12 = {
  id:"frv2_b2g8_l12", title:"Science et découverte", icon:"\u{1F52C}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Science et découverte",
     desc:"Scientific vocabulary for discussing research, discoveries, and technological phenomena at B2 level.",
     goals:["Learn 15 science and research words","Discuss scientific topics precisely","Understand technical register in French"]},

    {type:"teach", trg:"le cinématographe", src:"the cinematograph", pos:"noun", gender:"m",
     note:"Masculine noun. The original device for recording and projecting motion pictures.",
     example:"A: Le cinématographe a été inventé par les frères Lumière.\nB: C'est une invention française !",
     exampleSrc:"A: The cinematograph was invented by the Lumière brothers.\nB: It's a French invention!",
     funFact:"The Lumière brothers held the first public screening in Paris in 1895. Cinema is literally French."},

    {type:"teach", trg:"l'adduction", src:"the conveyance (of water/gas)", pos:"noun", gender:"f",
     note:"Feminine noun. The system that brings water or gas to a location.\nInfrastructure term.",
     example:"A: L'adduction d'eau est coupée dans le quartier.\nB: Il faut appeler la mairie.",
     exampleSrc:"A: The water supply is cut off in the neighborhood.\nB: We need to call city hall.",
     funFact:"In anatomy, 'adduction' means moving a limb toward the body. Same Latin root: 'ad' (toward) + 'ducere' (to lead)."},

    {type:"teach", trg:"le décimètre", src:"the decimeter", pos:"noun", gender:"m",
     note:"Masculine noun. One tenth of a meter (10 cm).\nUsed mainly in schools.",
     example:"A: Mesurez avec votre double décimètre.\nB: C'est la règle de 20 centimètres ?",
     exampleSrc:"A: Measure with your double decimeter.\nB: Is that the 20-centimeter ruler?",
     funFact:"French schoolchildren call their 20cm ruler a 'double décimètre'. Nobody says 'règle de 20 cm'."},

    {type:"teach", trg:"l'optique", src:"the optics, the perspective", pos:"noun", gender:"f",
     note:"Feminine noun. The science of light, or figuratively a viewpoint.\nAlso adjective.",
     example:"A: Dans cette optique, votre argument tient.\nB: Merci, c'est ma position.",
     exampleSrc:"A: From this perspective, your argument holds.\nB: Thanks, that's my position.",
     funFact:"'Dans l'optique de' is a sophisticated connector meaning 'with a view to'. Very B2."},

    {type:"mc",
     q:"Qui a inventé le cinématographe ?",
     opts:["Les frères Lumière","Louis Pasteur","Pierre Curie","Jules Verne"],
     ans:"Les frères Lumière",
     hint:"Two French brothers held the first public cinema screening in Paris in 1895."},

    {type:"teach", trg:"occipital", src:"occipital (back of the skull)", pos:"adj", gender:null,
     note:"Adjective. Relating to the back of the skull.\nFeminine: occipitale. Anatomy term.",
     example:"A: La douleur est localisée dans la zone occipitale.\nB: C'est probablement une migraine.",
     exampleSrc:"A: The pain is localized in the occipital area.\nB: It's probably a migraine.",
     funFact:"The occipital lobe processes vision. Damage there can cause blindness despite healthy eyes."},

    {type:"teach", trg:"l'omnibus", src:"the omnibus, the local train", pos:"noun", gender:"m",
     note:"Masculine noun. A train that stops at every station.\nAlso adjective: omnibus.",
     example:"A: Le train omnibus met deux heures de plus.\nB: Mais il dessert tous les villages.",
     exampleSrc:"A: The local train takes two hours more.\nB: But it serves all the villages.",
     funFact:"From Latin 'omnibus' (for all). The word 'bus' is actually a shortening of 'omnibus'."},

    {type:"teach", trg:"la cleptomanie", src:"kleptomania", pos:"noun", gender:"f",
     note:"Feminine noun. A compulsion to steal.\nA recognized psychological disorder.",
     example:"A: La cleptomanie est un trouble psychologique.\nB: Ce n'est pas un simple choix.",
     exampleSrc:"A: Kleptomania is a psychological disorder.\nB: It's not a simple choice.",
     funFact:"From Greek 'kleptein' (to steal) + 'mania'. French psychiatry classifies it as an impulse control disorder."},

    {type:"fb",
     s:"L'{1} d'eau est coupée, il faut appeler la mairie.",
     a:["adduction"],
     opts:["adduction","optique","cleptomanie","omnibus"],
     hint:"The system that brings water to a location. From Latin 'leading toward'.",
     sSrc:"The water {1} is cut off, we need to call city hall."},

    {type:"teach", trg:"le narcotique", src:"the narcotic", pos:"noun", gender:"m",
     note:"Masculine noun. A substance that induces sleep or stupor.\nMedical and legal term.",
     example:"A: Ce médicament a des effets narcotiques.\nB: Ne conduisez pas après l'avoir pris.",
     exampleSrc:"A: This medication has narcotic effects.\nB: Do not drive after taking it.",
     funFact:"From Greek 'narkoun' (to make numb). France strictly regulates narcotics under health law."},

    {type:"teach", trg:"le neurone", src:"the neuron", pos:"noun", gender:"m",
     note:"Masculine noun. A nerve cell that transmits electrical signals.\nBiology vocabulary.",
     example:"A: Chaque neurone est connecté à des milliers d'autres.\nB: Le cerveau est incroyable.",
     exampleSrc:"A: Each neuron is connected to thousands of others.\nB: The brain is incredible.",
     funFact:"'Faire chauffer ses neurones' means to think really hard. A fun colloquial expression."},

    {type:"teach", trg:"la matrice", src:"the matrix, the template", pos:"noun", gender:"f",
     note:"Feminine noun. A mold or framework that shapes something.\nMath, biology, and printing.",
     example:"A: Cette matrice sert à calculer les résultats.\nB: C'est un outil mathématique essentiel.",
     exampleSrc:"A: This matrix is used to calculate results.\nB: It's an essential mathematical tool.",
     funFact:"From Latin 'matrix' (womb). In printing, a matrice is the mold that shapes metal type."},

    {type:"mc",
     q:"Quel mot désigne un train qui s'arrête à toutes les gares ?",
     opts:["un décimètre","un omnibus","un cinématographe","un narcotique"],
     ans:"un omnibus",
     hint:"From Latin meaning 'for all'. This train serves every village and small station."},

    {type:"teach", trg:"l'héliotrope", src:"the heliotrope", pos:"noun", gender:"m",
     note:"Masculine noun. A plant that follows the sun.\nAlso a purple gemstone.",
     example:"A: L'héliotrope est aussi une pierre précieuse.\nB: Vraiment ? Je ne connaissais que la plante.",
     exampleSrc:"A: The heliotrope is also a gemstone.\nB: Really? I only knew the plant.",
     funFact:"In geology, heliotrope is a variety of green chalcedony with red spots. Also called bloodstone."},

    {type:"teach", trg:"la météorologie", src:"meteorology", pos:"noun", gender:"f",
     note:"Feminine noun. The science of weather and climate.\nShortened to 'météo' in daily use.",
     example:"A: La météorologie est une science complexe.\nB: Prévoir le temps n'est pas facile.",
     exampleSrc:"A: Meteorology is a complex science.\nB: Predicting the weather is not easy.",
     funFact:"Météo-France employs over 3,000 people and runs one of Europe's most powerful supercomputers."},

    {type:"teach", trg:"magnétique", src:"magnetic", pos:"adj", gender:null,
     note:"Adjective. Having the properties of a magnet.\nUsed in science and figuratively.",
     example:"A: Le champ magnétique terrestre nous protège.\nB: C'est un bouclier invisible.",
     exampleSrc:"A: The Earth's magnetic field protects us.\nB: It's an invisible shield.",
     funFact:"French scientists played a key role in understanding magnetism. Ampère gave his name to the unit of current."},

    {type:"fb",
     s:"Dans cette {1}, votre argument est tout à fait valable.",
     a:["optique"],
     opts:["optique","matrice","météorologie","cleptomanie"],
     hint:"A figurative meaning of 'perspective' or 'viewpoint'. Also the science of light.",
     sSrc:"From this {1}, your argument is entirely valid."},

    {type:"match", pairs:[
      {trg:"cinématographe", src:"cinematograph"},
      {trg:"cleptomanie", src:"kleptomania"},
      {trg:"omnibus", src:"local train"},
      {trg:"matrice", src:"matrix, template"},
      {trg:"météorologie", src:"meteorology"}
    ]},

    {type:"mc",
     q:"Le mot 'bus' est un raccourci de quel mot latin ?",
     opts:["minibus","trolleybus","omnibus","autobus"],
     ans:"omnibus",
     hint:"This Latin word means 'for all'. The short form dropped the first syllables."},

    {type:"fb",
     s:"Le champ {1} terrestre nous protège des radiations solaires.",
     a:["magnétique"],
     opts:["magnétique","occipital","narcotique","optique"],
     hint:"Related to magnets. The Earth has an invisible shield created by this force.",
     sSrc:"The Earth's {1} field protects us from solar radiation."}
  ]
};
export default LESSON_12;
