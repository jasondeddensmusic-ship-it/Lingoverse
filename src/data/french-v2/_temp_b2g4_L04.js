const LESSON_4 = {
  id:"frv2_b2g4_l4", title:"Le corps et la sante", icon:"\u{1F3E5}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Le corps et la sante",
     desc:"Learn advanced vocabulary related to health, biology, and the human body.",
     goals:["Learn 15 health and biology words","Discuss medical topics with precision","Understand scientific vocabulary in French"]},

    {type:"teach", trg:"un herbivore", src:"an herbivore", pos:"noun", gender:"m",
     note:"Masculine noun. An animal that eats only plants.",
     example:"A: La vache est un herbivore.\nB: Oui, elle ne mange que de l'herbe et du foin.",
     exampleSrc:"A: The cow is an herbivore.\nB: Yes, it only eats grass and hay.",
     funFact:"From Latin 'herba' (plant) + 'vorare' (to devour). French keeps the 'h' silent."},

    {type:"teach", trg:"l'heredite", src:"heredity, genetics", pos:"noun", gender:"f",
     note:"Feminine noun. The passing of traits from parents to offspring.",
     example:"A: L'heredite joue un role dans cette maladie.\nB: Oui, elle se transmet de generation en generation.",
     exampleSrc:"A: Heredity plays a role in this disease.\nB: Yes, it's passed from generation to generation.",
     funFact:"Gregor Mendel's pea experiments founded modern heredity science. His work was published in French too."},

    {type:"teach", trg:"l'hemorragie", src:"the hemorrhage, the bleeding", pos:"noun", gender:"f",
     note:"Feminine noun. Severe or uncontrolled bleeding.",
     example:"A: Le patient souffre d'une hemorragie interne.\nB: Il faut operer immediatement.",
     exampleSrc:"A: The patient is suffering from internal bleeding.\nB: We need to operate immediately.",
     funFact:"From Greek 'haima' (blood) + 'rhegnunai' (to burst). Also used figuratively for financial losses."},

    {type:"teach", trg:"l'hepatite", src:"hepatitis", pos:"noun", gender:"f",
     note:"Feminine noun. Inflammation of the liver.",
     example:"A: L'hepatite B se transmet par le sang.\nB: La vaccination est tres efficace.",
     exampleSrc:"A: Hepatitis B is transmitted through blood.\nB: Vaccination is very effective.",
     funFact:"From Greek 'hepar' meaning liver. The suffix -ite always indicates inflammation in medical French."},

    {type:"teach", trg:"un crustace", src:"a crustacean, a shellfish", pos:"noun", gender:"m",
     note:"Masculine noun. Marine animals with hard shells like crabs and lobsters.",
     example:"A: Les crustaces sont chers au restaurant.\nB: Oui, surtout le homard et les langoustines.",
     exampleSrc:"A: Shellfish are expensive at restaurants.\nB: Yes, especially lobster and langoustines.",
     funFact:"France consumes more shellfish per capita than almost any other country. A Christmas Eve tradition."},

    {type:"mc",
     q:"Quel mot designe la transmission des caracteres des parents aux enfants ?",
     opts:["l'heredite","l'hemorragie","l'hepatite","l'hereditage"],
     ans:"l'heredite",
     hint:"From Latin 'hereditas'. The biological process of passing traits across generations."},

    {type:"teach", trg:"un flacon", src:"a small bottle, a vial", pos:"noun", gender:"m",
     note:"Masculine noun. A decorative small bottle, often for perfume.",
     example:"A: Ce flacon de parfum est magnifique.\nB: Le design est une oeuvre d'art.",
     exampleSrc:"A: This perfume bottle is magnificent.\nB: The design is a work of art.",
     funFact:"Grasse, in southern France, is the world perfume capital. Flacon design is an art form there."},

    {type:"teach", trg:"un cendrier", src:"an ashtray", pos:"noun", gender:"m",
     note:"Masculine noun. A receptacle for cigarette ashes. From 'cendre' (ash).",
     example:"A: Il n'y a plus de cendrier dans les restaurants.\nB: Normal, c'est interdit de fumer.",
     exampleSrc:"A: There are no more ashtrays in restaurants.\nB: Of course, smoking is banned.",
     funFact:"France banned smoking in public places in 2007. Ashtrays vanished from cafe tables overnight."},

    {type:"teach", trg:"un embout", src:"a tip, a nozzle", pos:"noun", gender:"m",
     note:"Masculine noun. The tip or end piece of an instrument or tube.",
     example:"A: L'embout de ce stylo est casse.\nB: Je vais en acheter un autre.",
     exampleSrc:"A: The tip of this pen is broken.\nB: I'll buy another one.",
     funFact:"From 'en' + 'bout' (at the end). A very practical word for any small end piece or cap."},

    {type:"fb",
     s:"Le patient souffre d'une {1} interne grave.",
     a:["hemorragie"],
     opts:["hemorragie","hepatite","heredite","hypothese"],
     hint:"Severe uncontrolled bleeding, from the Greek words for blood and bursting.",
     sSrc:"The patient is suffering from a serious internal {1}."},

    {type:"teach", trg:"l'hypothese", src:"the hypothesis", pos:"noun", gender:"f",
     note:"Feminine noun. A proposed explanation to be tested.",
     example:"A: Cette hypothese doit etre verifiee.\nB: On va lancer une etude clinique.",
     exampleSrc:"A: This hypothesis needs to be verified.\nB: We'll launch a clinical study.",
     funFact:"From Greek 'hypothesis' meaning foundation. The scientific method in French follows the same logic."},

    {type:"teach", trg:"immobiliser", src:"to immobilize", pos:"verb", gender:null,
     note:"Verb. To prevent movement. Often used in medical and legal contexts.",
     example:"A: Il faut immobiliser la jambe fracturee.\nB: Je vais mettre une attelle.",
     exampleSrc:"A: We need to immobilize the fractured leg.\nB: I'll put on a splint.",
     funFact:"In finance, 'immobiliser des capitaux' means to tie up capital. Same concept: preventing movement."},

    {type:"teach", trg:"un gant", src:"a glove", pos:"noun", gender:"m",
     note:"Masculine noun. A hand covering. Many idiomatic uses.",
     example:"A: Le chirurgien met ses gants steriles.\nB: L'hygiene est primordiale au bloc.",
     exampleSrc:"A: The surgeon puts on sterile gloves.\nB: Hygiene is paramount in the operating room.",
     funFact:"'Jeter le gant' means to throw down the gauntlet. 'Ca me va comme un gant' means it fits perfectly."},

    {type:"mc",
     q:"Quel mot designe un petit flacon decoratif pour le parfum ?",
     opts:["un flacon","un cendrier","un embout","un gant"],
     ans:"un flacon",
     hint:"A small decorative bottle. Grasse, the perfume capital, is famous for designing these."},

    {type:"teach", trg:"la deduction", src:"the deduction", pos:"noun", gender:"f",
     note:"Feminine noun. Logical reasoning from general to specific. Also tax deduction.",
     example:"A: Par deduction, c'est la seule explication.\nB: Ton raisonnement est solide.",
     exampleSrc:"A: By deduction, it's the only explanation.\nB: Your reasoning is solid.",
     funFact:"Sherlock Holmes uses 'deduction' but actually practices 'induction'. Descartes formalized deduction."},

    {type:"fb",
     s:"Cette {1} doit etre testee en laboratoire.",
     a:["hypothese"],
     opts:["hypothese","deduction","hemorragie","heredite"],
     hint:"A proposed scientific explanation that has not yet been proven true or false.",
     sSrc:"This {1} must be tested in the laboratory."},

    {type:"match", pairs:[
      {trg:"herbivore", src:"herbivore"},
      {trg:"crustace", src:"shellfish"},
      {trg:"flacon", src:"small bottle"},
      {trg:"gant", src:"glove"},
      {trg:"cendrier", src:"ashtray"}
    ]},

    {type:"mc",
     q:"Que signifie 'immobiliser' dans un contexte medical ?",
     opts:["Empecher de bouger","Guerir rapidement","Diagnostiquer","Operer d'urgence"],
     ans:"Empecher de bouger",
     hint:"The prefix 'im-' means not, and 'mobiliser' means to move. To prevent all movement."}
  ]
};
export default LESSON_4;
