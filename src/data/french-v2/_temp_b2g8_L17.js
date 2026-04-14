const LESSON_17 = {
  id:"frv2_b2g8_l17", title:"Société et modernité", icon:"\u{1F3D9}\uFE0F", xp:15, board:true,
  steps:[
    {type:"intro", title:"Société et modernité",
     desc:"Modern society vocabulary covering migration, communities, norms, and social dynamics at B2 level.",
     goals:["Learn 15 words about society and modernity","Discuss social change in French","Express nuanced social commentary"]},

    {type:"teach", trg:"un migrant", src:"a migrant", pos:"noun", gender:"m",
     note:"Masculine noun. A person who moves to live in another place.\nFeminine: une migrante.",
     example:"A: Les migrants cherchent une vie meilleure.\nB: L'accueil est un devoir humanitaire.",
     exampleSrc:"A: Migrants seek a better life.\nB: Welcoming them is a humanitarian duty.",
     funFact:"French distinguishes 'migrant' (in transit) from 'immigré' (settled). Media debates this nuance often."},

    {type:"teach", trg:"le modernisme", src:"modernism", pos:"noun", gender:"m",
     note:"Masculine noun. An artistic and cultural movement embracing the new.\nOpposite: 'traditionalisme'.",
     example:"A: Le modernisme a transformé l'architecture urbaine.\nB: Les lignes épurées remplacent les ornements.",
     exampleSrc:"A: Modernism transformed urban architecture.\nB: Clean lines replaced ornaments.",
     funFact:"Le Corbusier, Swiss-French architect, became modernism's icon. His buildings divided French opinion sharply."},

    {type:"teach", trg:"la norme", src:"the norm, the standard", pos:"noun", gender:"f",
     note:"Feminine noun. An accepted standard or rule.\n'Hors norme' means out of the ordinary.",
     example:"A: Cette construction respecte les normes de sécurité.\nB: Elle a été inspectée trois fois.",
     exampleSrc:"A: This building meets safety standards.\nB: It was inspected three times.",
     funFact:"French bureaucracy loves 'normes'. There are norms for everything from bread weight to balcony height."},

    {type:"teach", trg:"le mixage", src:"the mixing (audio)", pos:"noun", gender:"m",
     note:"Masculine noun. The blending of audio tracks.\nFrom English 'mix'. Also 'mixer' (verb).",
     example:"A: Le mixage du film a pris deux semaines.\nB: Le son est vraiment impeccable.",
     exampleSrc:"A: The film's audio mixing took two weeks.\nB: The sound is truly impeccable.",
     funFact:"French cinema is famous for meticulous sound design. 'Mixeur son' is a respected film profession."},

    {type:"mc",
     q:"Quel mot désigne un standard ou une règle acceptée par la société ?",
     opts:["un migrant","une norme","un mixage","un modernisme"],
     ans:"une norme",
     hint:"From Latin 'norma' (carpenter's square). Think of what buildings, products, and behavior must meet."},

    {type:"teach", trg:"le modéré", src:"the moderate (person)", pos:"noun", gender:"m",
     note:"Masculine noun. A person with moderate political views.\nAlso an adjective.",
     example:"A: Les modérés cherchent le compromis.\nB: C'est difficile en période de crise.",
     exampleSrc:"A: Moderates seek compromise.\nB: It's difficult in times of crisis.",
     funFact:"In French politics, 'modéré' is not always a compliment. It can imply indecisiveness."},

    {type:"teach", trg:"mortifère", src:"deadly, death-dealing", pos:"adj", gender:null,
     note:"Adjective. Bringing or causing death.\nVery literary. Invariable in gender.",
     example:"A: Ce virus est particulièrement mortifère.\nB: La vaccination reste la meilleure protection.",
     exampleSrc:"A: This virus is particularly deadly.\nB: Vaccination remains the best protection.",
     funFact:"From Latin 'mortifer' (death-bearer). Used in formal writing. 'Mortel' is the everyday equivalent."},

    {type:"teach", trg:"la mutilation", src:"the mutilation", pos:"noun", gender:"f",
     note:"Feminine noun. Deliberate damage to a body or object.\nA strong, serious word.",
     example:"A: La mutilation des arbres est interdite.\nB: Il faut respecter l'environnement.",
     exampleSrc:"A: Mutilating trees is forbidden.\nB: We must respect the environment.",
     funFact:"French law punishes 'mutilation volontaire' severely. Also used metaphorically for text or art."},

    {type:"fb",
     s:"Le {1} a transformé l'architecture avec ses lignes épurées.",
     a:["modernisme"],
     opts:["modernisme","mixage","modéré","migrant"],
     hint:"An artistic movement from the early 20th century that embraced clean, simple design.",
     sSrc:"{1} transformed architecture with its clean lines."},

    {type:"teach", trg:"la médiation", src:"mediation", pos:"noun", gender:"f",
     note:"Feminine noun. The act of resolving a conflict through a neutral third party.",
     example:"A: La médiation a permis d'éviter un procès.\nB: Les deux parties sont satisfaites.",
     exampleSrc:"A: Mediation made it possible to avoid a trial.\nB: Both parties are satisfied.",
     funFact:"France has a national 'Médiateur de la République' to resolve citizen-government disputes."},

    {type:"teach", trg:"la médiocrité", src:"mediocrity", pos:"noun", gender:"f",
     note:"Feminine noun. Average quality, lack of excellence.\nA harsh judgment in French culture.",
     example:"A: La médiocrité ne devrait jamais être acceptée.\nB: Visons toujours l'excellence.",
     exampleSrc:"A: Mediocrity should never be accepted.\nB: Let's always aim for excellence.",
     funFact:"In French schools, 'médiocre' on a report card is devastating. It means below average, not just average."},

    {type:"teach", trg:"la météorologie", src:"meteorology", pos:"noun", gender:"f",
     note:"Feminine noun. The science of weather.\nShortened to 'la météo' in everyday speech.",
     example:"A: La météorologie prévoit de la pluie demain.\nB: Je prends mon parapluie.",
     exampleSrc:"A: The weather forecast predicts rain tomorrow.\nB: I'll take my umbrella.",
     funFact:"Météo France, the national service, is among the world's best. 'La météo' is the most-watched TV segment."},

    {type:"mc",
     q:"Quel mot décrit la résolution d'un conflit par un tiers neutre ?",
     opts:["la mutilation","la médiocrité","la médiation","la météorologie"],
     ans:"la médiation",
     hint:"A formal process where a neutral person helps two sides reach agreement. Avoids going to court."},

    {type:"teach", trg:"méridional", src:"southern", pos:"adj", gender:null,
     note:"Adjective. Relating to the south, especially southern France.\nFeminine: méridionale.",
     example:"A: L'accent méridional chante comme le soleil.\nB: C'est le charme du Midi.",
     exampleSrc:"A: The southern accent sings like the sun.\nB: That's the charm of the Midi.",
     funFact:"'Le Midi' is southern France. 'Méridional' implies warmth, sun, and slower pace. It carries cultural pride."},

    {type:"teach", trg:"la mâchoire", src:"the jaw", pos:"noun", gender:"f",
     note:"Feminine noun. The upper or lower jaw bone.\nFrom Old French 'mascheure'.",
     example:"A: Il s'est cassé la mâchoire en tombant.\nB: Il faudra opérer.",
     exampleSrc:"A: He broke his jaw falling down.\nB: Surgery will be needed.",
     funFact:"'Bâiller à s'en décrocher la mâchoire' means to yawn so wide your jaw might fall off."},

    {type:"teach", trg:"ménager", src:"to handle carefully, to spare", pos:"verb", gender:null,
     note:"Verb. To treat with care or economy.\nAlso: 'ménager ses forces' = to pace oneself.",
     example:"A: Il faut ménager ses efforts en montagne.\nB: Sinon tu seras épuisé au sommet.",
     exampleSrc:"A: You must pace your efforts in the mountains.\nB: Otherwise you'll be exhausted at the top.",
     funFact:"'Ménager la chèvre et le chou' means to try to please everyone. A classic French expression."},

    {type:"fb",
     s:"L'accent {1} chante comme le soleil du Midi.",
     a:["méridional"],
     opts:["méridional","mortifère","modéré","momentané"],
     hint:"An adjective meaning southern, specifically relating to the south of France.",
     sSrc:"The {1} accent sings like the sun of the Midi."},

    {type:"match", pairs:[
      {trg:"migrant", src:"migrant"},
      {trg:"norme", src:"norm, standard"},
      {trg:"médiation", src:"mediation"},
      {trg:"météorologie", src:"meteorology"},
      {trg:"ménager", src:"to handle carefully"}
    ]},

    {type:"mc",
     q:"Quel verbe signifie 'traiter avec précaution' ou 'économiser ses forces' ?",
     opts:["modérer","mélanger","ménager","médier"],
     ans:"ménager",
     hint:"Think of handling something delicately. Also used for pacing yourself during physical effort."},

    {type:"fb",
     s:"La {1} ne devrait jamais être acceptée, visons l'excellence.",
     a:["médiocrité"],
     opts:["médiocrité","médiation","météorologie","mutilation"],
     hint:"Below-average quality. In French schools, this word on a report card is devastating.",
     sSrc:"{1} should never be accepted, let's aim for excellence."}
  ]
};
export default LESSON_17;
