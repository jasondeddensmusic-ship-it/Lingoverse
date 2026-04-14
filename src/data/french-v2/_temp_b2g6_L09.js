const LESSON_9 = {
  id:"frv2_b2g6_l9", title:"Santé et science", icon:"\uD83E\uDDEC", xp:15, board:true,
  steps:[
    {type:"intro", title:"Santé et science",
     desc:"Build vocabulary for medical, scientific, and health-related discussions at B2 level.",
     goals:["Learn 20 medical and scientific B2 words","Discuss health topics with precision","Navigate formal scientific register"]},

    {type:"teach", trg:"l'hémorragie", src:"the hemorrhage", pos:"noun", gender:"f",
     note:"Feminine noun. Severe bleeding from damaged blood vessels.",
     example:"A: Le patient souffre d'une hémorragie interne.\nB: Il faut opérer d'urgence.",
     exampleSrc:"A: The patient is suffering from an internal hemorrhage.\nB: Emergency surgery is needed.",
     funFact:"From Greek 'haima' (blood) + 'rhegnunai' (to burst). Also used figuratively for money loss."},

    {type:"teach", trg:"l'hépatite", src:"hepatitis", pos:"noun", gender:"f",
     note:"Feminine noun. Inflammation of the liver. Types A, B, C are the most common.",
     example:"A: Le vaccin contre l'hépatite B est recommandé.\nB: Surtout pour les voyageurs.",
     exampleSrc:"A: The hepatitis B vaccine is recommended.\nB: Especially for travelers.",
     funFact:"From Greek 'hepar' meaning liver. France has strong public health campaigns against hepatitis C."},

    {type:"teach", trg:"l'inhalation", src:"the inhalation", pos:"noun", gender:"f",
     note:"Feminine noun. Breathing in, or a steam treatment for respiratory illness.",
     example:"A: Le médecin m'a prescrit des inhalations.\nB: Ça va dégager tes voies respiratoires.",
     exampleSrc:"A: The doctor prescribed inhalations for me.\nB: It will clear your airways.",
     funFact:"In French homes, 'faire des inhalations' with hot water and eucalyptus is a classic cold remedy."},

    {type:"teach", trg:"inhaler", src:"to inhale", pos:"verb", gender:null,
     note:"Verb. To breathe in. Medical and everyday use.",
     example:"A: Il ne faut pas inhaler ces produits chimiques.\nB: Mets un masque de protection.",
     exampleSrc:"A: You must not inhale these chemicals.\nB: Put on a protective mask.",
     funFact:"'Inhalateur' is the French word for an asthma inhaler. From Latin 'inhalare' meaning to breathe upon."},

    {type:"mc",
     q:"Que désigne 'une hémorragie' ?",
     opts:["Un saignement abondant","Une infection virale","Une inflammation articulaire","Une fracture osseuse"],
     ans:"Un saignement abondant",
     hint:"From Greek roots meaning blood bursting. A serious medical condition involving bleeding."},

    {type:"teach", trg:"un insecticide", src:"an insecticide", pos:"noun", gender:"m",
     note:"Masculine noun. A chemical product that kills insects.",
     example:"A: L'usage d'insecticides nuit aux abeilles.\nB: Il faut des alternatives naturelles.",
     exampleSrc:"A: The use of insecticides harms bees.\nB: We need natural alternatives.",
     funFact:"France banned neonicotinoid insecticides in 2018 to protect pollinators. A major environmental decision."},

    {type:"teach", trg:"l'indigestion", src:"indigestion", pos:"noun", gender:"f",
     note:"Feminine noun. Discomfort caused by difficulty digesting food.",
     example:"A: J'ai une indigestion terrible.\nB: Tu as trop mangé hier soir.",
     exampleSrc:"A: I have terrible indigestion.\nB: You ate too much last night.",
     funFact:"French cuisine is rich, so 'indigestion' is a well-known complaint after holiday feasts."},

    {type:"teach", trg:"un explosif", src:"an explosive", pos:"noun", gender:"m",
     note:"Masculine noun. A substance or device that can cause an explosion.",
     example:"A: Les démineurs ont trouvé un explosif.\nB: La zone a été évacuée immédiatement.",
     exampleSrc:"A: The bomb squad found an explosive.\nB: The area was evacuated immediately.",
     funFact:"Alfred Nobel invented dynamite. The word 'explosif' can also be an adjective meaning volatile."},

    {type:"fb",
     s:"Le vaccin contre l'{1} B est obligatoire pour les professionnels de santé.",
     a:["hépatite"],
     opts:["hépatite","hémorragie","inhalation","indigestion"],
     hint:"A liver disease caused by a virus, with several types named by letters.",
     sSrc:"The {1} B vaccine is mandatory for healthcare professionals."},

    {type:"teach", trg:"l'extrémité", src:"the extremity, the end", pos:"noun", gender:"f",
     note:"Feminine noun. The farthest point or tip of something.",
     example:"A: Marchez jusqu'à l'extrémité du quai.\nB: Le train s'arrête tout au bout.",
     exampleSrc:"A: Walk to the end of the platform.\nB: The train stops at the very end.",
     funFact:"In medicine, 'les extrémités' refers to hands and feet. 'À la dernière extrémité' means as a last resort."},

    {type:"teach", trg:"l'inefficacité", src:"the inefficiency", pos:"noun", gender:"f",
     note:"Feminine noun. Failure to produce the desired result efficiently.",
     example:"A: L'inefficacité de ce traitement est prouvée.\nB: Il faut en essayer un autre.",
     exampleSrc:"A: The inefficiency of this treatment is proven.\nB: We need to try another one.",
     funFact:"French bureaucracy ('l'administration') is often criticized for its 'inefficacité'. A cultural debate topic."},

    {type:"teach", trg:"la limpidité", src:"the clarity, the limpidity", pos:"noun", gender:"f",
     note:"Feminine noun. Crystal-clear transparency, both literal and figurative.",
     example:"A: La limpidité de l'eau est remarquable.\nB: On voit le fond à dix mètres.",
     exampleSrc:"A: The clarity of the water is remarkable.\nB: You can see the bottom at ten meters.",
     funFact:"A literary word. 'Limpide' is prized in French writing style: clarity of expression is the highest virtue."},

    {type:"mc",
     q:"Quel mot désigne un produit chimique qui tue les insectes ?",
     opts:["un insecticide","un explosif","une inhalation","une hémorragie"],
     ans:"un insecticide",
     hint:"A compound: 'insecte' + '-cide' (to kill). Think of agricultural chemicals."},

    {type:"teach", trg:"littoral", src:"coastal", pos:"adj", gender:null,
     note:"Adjective. Relating to the coast or shoreline. Also a noun: le littoral.",
     example:"A: La zone littorale est protégée.\nB: La construction y est interdite.",
     exampleSrc:"A: The coastal zone is protected.\nB: Construction is forbidden there.",
     funFact:"France's 'Conservatoire du littoral' protects coastal areas. France has 5,500 km of coastline."},

    {type:"teach", trg:"longiligne", src:"slender, long-limbed", pos:"adj", gender:null,
     note:"Adjective. Tall and slender in build. Same form both genders.",
     example:"A: Ce mannequin est très longiligne.\nB: C'est le physique recherché en haute couture.",
     exampleSrc:"A: This model is very slender.\nB: That's the look sought in high fashion.",
     funFact:"From Latin 'longus' + 'linea'. A fashion and medical term for a tall, thin body type."},

    {type:"teach", trg:"le décorateur", src:"the decorator, the set designer", pos:"noun", gender:"m",
     note:"Masculine noun. A person who designs interiors or theater sets. Feminine: décoratrice.",
     example:"A: Le décorateur a transformé cet appartement.\nB: On ne le reconnaît plus.",
     exampleSrc:"A: The decorator transformed this apartment.\nB: You wouldn't recognize it.",
     funFact:"In French cinema, 'le décorateur' is the set designer. Interior decorating is 'la décoration d'intérieur'."},

    {type:"fb",
     s:"La {1} de son explication a impressionné le jury.",
     a:["limpidité"],
     opts:["limpidité","extrémité","inefficacité","indigestion"],
     hint:"Crystal-clear transparency or clarity, especially of thought or expression.",
     sSrc:"The {1} of her explanation impressed the jury."},

    {type:"teach", trg:"le démographe", src:"the demographer", pos:"noun", gender:"m",
     note:"Masculine noun. A specialist who studies population statistics. Feminine: une démographe.",
     example:"A: Les démographes prévoient un vieillissement de la population.\nB: C'est un défi pour le système de retraites.",
     exampleSrc:"A: Demographers predict an aging population.\nB: It's a challenge for the pension system.",
     funFact:"France's INED (National Institute of Demographic Studies) is world-renowned in population research."},

    {type:"teach", trg:"le fumier", src:"the manure, the dung", pos:"noun", gender:"m",
     note:"Masculine noun. Animal waste used as fertilizer. Also a strong insult.",
     example:"A: Le fermier épand du fumier dans les champs.\nB: Ça ne sent pas très bon !",
     exampleSrc:"A: The farmer spreads manure in the fields.\nB: It doesn't smell very good!",
     funFact:"As an insult, 'fumier' is very strong, roughly equivalent to calling someone a 'scumbag'. Use with caution."},

    {type:"match", pairs:[
      {trg:"hémorragie", src:"hemorrhage"},
      {trg:"insecticide", src:"insecticide"},
      {trg:"littoral", src:"coastal"},
      {trg:"démographe", src:"demographer"},
      {trg:"limpidité", src:"clarity"}
    ]},

    {type:"mc",
     q:"Que signifie 'longiligne' ?",
     opts:["Grand et mince","Court et trapu","Musclé et fort","Petit et rond"],
     ans:"Grand et mince",
     hint:"From Latin for 'long line'. Describes a tall, slender body type, common in fashion."},

    {type:"fb",
     s:"Il ne faut pas {1} les vapeurs toxiques de ce produit.",
     a:["inhaler"],
     opts:["inhaler","exploser","décorer","insecticide"],
     hint:"To breathe in. A verb about taking something into your lungs.",
     sSrc:"You must not {1} the toxic fumes of this product."}
  ]
};
export default LESSON_9;
