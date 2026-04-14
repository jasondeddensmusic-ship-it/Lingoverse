const LESSON_18 = {
  id:"frv2_b2g7_l18", title:"Dynamiques sociales", icon:"\u{1F465}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Dynamiques sociales",
     desc:"Learn vocabulary for discussing social structures, class dynamics, and interpersonal relationships.",
     goals:["Learn 15 words about social dynamics","Discuss social class and mobility","Analyze group behavior"]},

    {type:"teach", trg:"l'ascendance", src:"ancestry, lineage", pos:"noun", gender:"f",
     note:"Feminine noun. One's ancestors or family line.\nAlso: influence or authority over someone.",
     example:"A: Son ascendance italienne est visible dans sa cuisine.\nB: Elle prepare les meilleures pates du quartier.",
     exampleSrc:"A: Her Italian ancestry is visible in her cooking.\nB: She makes the best pasta in the neighborhood.",
     funFact:"'Avoir de l'ascendance sur quelqu'un' means to have influence over them. A double meaning: lineage and authority."},

    {type:"teach", trg:"la banderole", src:"a banner, a streamer", pos:"noun", gender:"f",
     note:"Feminine noun. A long strip of cloth or paper with a message.",
     example:"A: Les manifestants portaient des banderoles.\nB: Ils reclamaient justice et egalite.",
     exampleSrc:"A: The protesters were carrying banners.\nB: They were demanding justice and equality.",
     funFact:"French demonstrations are famous for their 'banderoles'. The tradition dates to the Revolution when citizens marched with demands."},

    {type:"teach", trg:"le dissident", src:"a dissident", pos:"noun", gender:"m",
     note:"Masculine noun. A person who opposes official policy.\nFeminine: la dissidente.",
     example:"A: Le dissident a ete emprisonne pour ses opinions.\nB: La liberte d'expression est menacee.",
     exampleSrc:"A: The dissident was imprisoned for his opinions.\nB: Freedom of expression is threatened.",
     funFact:"France has a tradition of granting asylum to dissidents. Victor Hugo himself was exiled for opposing Napoleon III."},

    {type:"teach", trg:"le diktat", src:"a diktat, an imposed decision", pos:"noun", gender:"m",
     note:"Masculine noun. A harsh order imposed without negotiation.\nFrom German 'Diktat'.",
     example:"A: Ce reglement est un veritable diktat.\nB: Personne n'a ete consulte.",
     exampleSrc:"A: This regulation is a real diktat.\nB: No one was consulted.",
     funFact:"Originally referred to the Treaty of Versailles terms imposed on Germany. Now means any unilateral imposition of rules."},

    {type:"mc",
     q:"Quel mot designe une longue bande de tissu avec un message lors d'une manifestation ?",
     opts:["une banderole","une banderille","une draperie","une fresque"],
     ans:"une banderole",
     hint:"Protesters carry these with slogans written on them during marches."},

    {type:"teach", trg:"le battant", src:"a fighter, a go-getter", pos:"noun", gender:"m",
     note:"Masculine noun. A person who fights hard to succeed.\nAlso: the clapper of a bell.",
     example:"A: C'est une battante, elle n'abandonne jamais.\nB: Son energie est admirable.",
     exampleSrc:"A: She's a fighter, she never gives up.\nB: Her energy is admirable.",
     funFact:"'Mener tambour battant' means to lead at a brisk pace. 'Le battant d'une cloche' is the metal tongue inside a bell."},

    {type:"teach", trg:"le culot", src:"nerve, audacity", pos:"noun", gender:"m",
     note:"Masculine noun. Informal. Bold impudence or cheek.\n'Avoir du culot' = to have nerve.",
     example:"A: Il a eu le culot de demander une augmentation.\nB: Et en plus, il l'a obtenue !",
     exampleSrc:"A: He had the nerve to ask for a raise.\nB: And on top of that, he got it!",
     funFact:"Originally the bottom of a cartridge. 'Avoir du culot' implies bold cheekiness. 'Culotte' (pants) is related. Being bold takes guts."},

    {type:"teach", trg:"le cordon", src:"a cord, a ribbon", pos:"noun", gender:"m",
     note:"Masculine noun. A string, rope, or decorative ribbon.\n'Cordon sanitaire' = quarantine line.",
     example:"A: Le cordon de securite a ete installe.\nB: Les passants ne peuvent plus traverser.",
     exampleSrc:"A: The security cordon has been set up.\nB: Pedestrians can no longer cross.",
     funFact:"'Cordon bleu' originally meant a knight of the highest order. It came to mean an excellent cook. Now it's breaded chicken!"},

    {type:"fb",
     s:"Il a eu le {1} de critiquer le directeur en pleine reunion.",
     a:["culot"],
     opts:["culot","cordon","diktat","dissident"],
     hint:"Bold nerve or cheek. Having the audacity to do something outrageous.",
     sSrc:"He had the {1} to criticize the director in the middle of a meeting."},

    {type:"teach", trg:"le corbeau", src:"a crow, an anonymous letter writer", pos:"noun", gender:"m",
     note:"Masculine noun. The bird, or someone who sends anonymous accusations.",
     example:"A: Le corbeau a envoye des lettres a toute la ville.\nB: La police enquete.",
     exampleSrc:"A: The anonymous letter writer sent letters to the whole town.\nB: The police are investigating.",
     funFact:"Clouzot's 1943 film 'Le Corbeau' about poison-pen letters scandalized France. The word still evokes anonymous denunciation."},

    {type:"teach", trg:"le copeau", src:"a shaving, a chip (wood)", pos:"noun", gender:"m",
     note:"Masculine noun. A thin strip of wood or metal shaved off.",
     example:"A: Les copeaux de bois jonchent l'atelier.\nB: Le menuisier travaille depuis ce matin.",
     exampleSrc:"A: Wood shavings cover the workshop floor.\nB: The carpenter has been working since morning.",
     funFact:"In cooking, 'copeaux de chocolat' are chocolate shavings. In woodworking, 'copeaux' are a sign of skilled craftsmanship."},

    {type:"teach", trg:"le coussin", src:"a cushion", pos:"noun", gender:"m",
     note:"Masculine noun. A soft pad for sitting or leaning on.",
     example:"A: Ce coussin est tres confortable.\nB: Je l'ai achete au marche aux puces.",
     exampleSrc:"A: This cushion is very comfortable.\nB: I bought it at the flea market.",
     funFact:"France's flea markets ('marches aux puces') are famous for decorative cushions. The biggest is at Saint-Ouen near Paris."},

    {type:"mc",
     q:"Comment appelle-t-on quelqu'un qui envoie des lettres anonymes accusatrices ?",
     opts:["un corbeau","un battant","un dissident","un consul"],
     ans:"un corbeau",
     hint:"Named after the black bird. Someone who sends poison-pen letters."},

    {type:"teach", trg:"la combine", src:"a scheme, a trick", pos:"noun", gender:"f",
     note:"Feminine noun. Informal. A clever trick or dodgy scheme.\n'Connaitre la combine' = to know the trick.",
     example:"A: Il a trouve une combine pour payer moins cher.\nB: Attention, ce n'est pas toujours legal.",
     exampleSrc:"A: He found a scheme to pay less.\nB: Be careful, it's not always legal.",
     funFact:"'Combine' implies street-smart cleverness. 'Un combine' (with accent) is a telephone handset, a completely different word."},

    {type:"teach", trg:"la bonhomie", src:"good-naturedness, warmth", pos:"noun", gender:"f",
     note:"Feminine noun. Simple, natural friendliness and warmth.",
     example:"A: Sa bonhomie met tout le monde a l'aise.\nB: C'est un homme vraiment sympathique.",
     exampleSrc:"A: His good-naturedness puts everyone at ease.\nB: He's a truly likeable man.",
     funFact:"From 'bonhomme' (good man). 'Avec bonhomie' means with warm simplicity. It's a quality the French admire."},

    {type:"fb",
     s:"Sa {1} naturelle cree une ambiance chaleureuse partout ou il va.",
     a:["bonhomie"],
     opts:["bonhomie","combine","banderole","ascendance"],
     hint:"Natural warmth and friendliness that makes everyone comfortable.",
     sSrc:"His natural {1} creates a warm atmosphere wherever he goes."},

    {type:"match", pairs:[
      {trg:"dissident", src:"political opponent"},
      {trg:"diktat", src:"imposed decision"},
      {trg:"battant", src:"fighter"},
      {trg:"corbeau", src:"anonymous accuser"},
      {trg:"combine", src:"scheme"}
    ]},

    {type:"mc",
     q:"Quel mot d'origine allemande designe une decision imposee sans consultation ?",
     opts:["un diktat","un dissident","un cordon","un copeau"],
     ans:"un diktat",
     hint:"From German. Originally associated with the Treaty of Versailles."},

    {type:"fb",
     s:"C'est une {1}, elle se bat pour reussir malgre les obstacles.",
     a:["battante"],
     opts:["battante","dissidente","combine","bonhomie"],
     hint:"A person who fights hard, never gives up. A go-getter.",
     sSrc:"She's a {1}, she fights to succeed despite the obstacles."}
  ]
};
export default LESSON_18;
