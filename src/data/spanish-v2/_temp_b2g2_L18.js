// B2 Gap2 Lesson 18 - Physical Properties & Materials
const LESSON_18 = {id:"esv2_b2g2_l18",title:"Propiedades y materiales",icon:"🔩",xp:15,board:true,steps:[
{type:"intro",title:"Propiedades y materiales",desc:"Describe physical properties, materials, and qualities with precise B2-level adjectives and nouns.",goals:["Learn 20 words about properties and materials","Describe objects and materials precisely","Use technical adjectives in everyday contexts"]},

{type:"teach",trg:"acústico",src:"acoustic",pos:"adj",gender:null,
 note:"Adjective. Relating to sound or hearing.\nFeminine: acústica.",
 example:"A: La guitarra acústica suena mejor en directo.\nB: Tiene un sonido más cálido que la eléctrica.",
 exampleSrc:"A: The acoustic guitar sounds better live.\nB: It has a warmer sound than the electric one.",
 funFact:"From Greek akoustikos (of hearing). 'Contaminación acústica' is noise pollution in Spanish law."},

{type:"teach",trg:"artesanal",src:"artisanal / handcrafted",pos:"adj",gender:null,
 note:"Adjective. Made by hand using traditional methods. Same form m/f.",
 example:"A: Esta cerveza artesanal está buenísima.\nB: La hacen en una fábrica pequeña del pueblo.",
 exampleSrc:"A: This craft beer is excellent.\nB: They make it in a small brewery in the village.",
 funFact:"Spain's artisanal food movement has boomed. 'Productos artesanales' command premium prices."},

{type:"teach",trg:"compacto",src:"compact / dense",pos:"adj",gender:null,
 note:"Adjective. Packed closely together, or small and efficient.\nFeminine: compacta.",
 example:"A: Este coche compacto es perfecto para la ciudad.\nB: Aparcas en cualquier sitio.",
 exampleSrc:"A: This compact car is perfect for the city.\nB: You can park anywhere.",
 funFact:"Also a noun: 'un compacto' was a CD. Now 'compacto' mostly describes cars and living spaces."},

{type:"teach",trg:"defectuoso",src:"defective / faulty",pos:"adj",gender:null,
 note:"Adjective. Having a defect or malfunction.\nFeminine: defectuosa.",
 example:"A: Devolvió el televisor porque estaba defectuoso.\nB: La pantalla tenía líneas horizontales.",
 exampleSrc:"A: He returned the TV because it was defective.\nB: The screen had horizontal lines.",
 funFact:"Spanish consumer protection gives 2 years to claim defective products. Very strong by EU standards."},

{type:"teach",trg:"cremoso",src:"creamy / smooth-textured",pos:"adj",gender:null,
 note:"Adjective. Having a smooth, rich texture like cream.\nFeminine: cremosa.",
 example:"A: Este helado es increíblemente cremoso.\nB: Usan nata fresca de verdad.",
 exampleSrc:"A: This ice cream is incredibly creamy.\nB: They use real fresh cream.",
 funFact:"'Textura cremosa' is a key selling point in Spanish food marketing, from yogurt to soups."},

{type:"mc",q:"¿Qué producto se describe como artesanal?",opts:["Uno hecho a mano con métodos tradicionales","Uno fabricado en serie en una fábrica","Uno comprado en un supermercado","Uno importado de otro país"],ans:"Uno hecho a mano con métodos tradicionales",hint:"Think about products made with care by hand, using traditional techniques, not mass-produced."},

{type:"teach",trg:"arbitrario",src:"arbitrary",pos:"adj",gender:null,
 note:"Adjective. Based on personal whim, not reason.\nFeminine: arbitraria.",
 example:"A: La multa parece completamente arbitraria.\nB: No hay ningún criterio objetivo detrás.",
 exampleSrc:"A: The fine seems completely arbitrary.\nB: There is no objective criterion behind it.",
 funFact:"From Latin arbitrarius. In law, 'decisión arbitraria' is grounds for appeal in Spanish courts."},

{type:"teach",trg:"armonioso",src:"harmonious / well-balanced",pos:"adj",gender:null,
 note:"Adjective. Pleasing in its balanced arrangement.\nFeminine: armoniosa.",
 example:"A: Los colores de la fachada son muy armoniosos.\nB: El arquitecto eligió una paleta perfecta.",
 exampleSrc:"A: The colors of the facade are very harmonious.\nB: The architect chose a perfect palette.",
 funFact:"From Greek harmonia (fitting together). Gaudí's Barcelona buildings are chaos made armonioso."},

{type:"teach",trg:"la articulación",src:"the joint / articulation",pos:"noun",gender:"f",
 note:"Feminine noun. A body joint, or the clear expression of sounds or ideas.",
 example:"A: La articulación de la muñeca es muy delicada.\nB: Cualquier lesión puede ser problemática.",
 exampleSrc:"A: The wrist joint is very delicate.\nB: Any injury can be problematic.",
 funFact:"Double meaning: anatomy (joints) and linguistics (how sounds are produced in the mouth)."},

{type:"teach",trg:"la consistencia",src:"the consistency / texture",pos:"noun",gender:"f",
 note:"Feminine noun. The firmness or density of a substance.",
 example:"A: La masa necesita una consistencia suave pero firme.\nB: Sigue trabajando unos minutos más.",
 exampleSrc:"A: The dough needs a soft but firm consistency.\nB: Keep working it for a few more minutes.",
 funFact:"Works for food textures, behavioral reliability, and logical coherence. Very versatile word."},

{type:"teach",trg:"el acorazado",src:"the battleship / armored",pos:"noun",gender:"m",
 note:"Masculine noun. A heavily armored warship. Also adjective: armored.",
 example:"A: El acorazado fue el buque de guerra dominante hasta la Segunda Guerra Mundial.\nB: Los portaaviones lo sustituyeron.",
 exampleSrc:"A: The battleship was the dominant warship until World War II.\nB: Aircraft carriers replaced it.",
 funFact:"From 'coraza' (armor). 'Coche acorazado' is an armored car, used by presidents and VIPs."},

{type:"fb",s:"La decisión fue completamente {1}, sin ningún criterio objetivo.",a:["arbitraria"],opts:["arbitraria","armoniosa","compacta","acústica"],hint:"An adjective meaning based on personal whim rather than logical reasoning.",sSrc:"The decision was completely {1}, without any objective criteria."},

{type:"teach",trg:"el arcabuz",src:"the arquebus (early firearm)",pos:"noun",gender:"m",
 note:"Masculine noun. A 15th-16th century firearm, predecessor of the musket.",
 example:"A: Los soldados españoles usaban arcabuces en el siglo XVI.\nB: Fueron armas decisivas en las conquistas.",
 exampleSrc:"A: Spanish soldiers used arquebuses in the 16th century.\nB: They were decisive weapons in the conquests.",
 funFact:"The Spanish tercios with their arcabuces dominated European warfare for over a century."},

{type:"teach",trg:"la cartulina",src:"the card stock / poster board",pos:"noun",gender:"f",
 note:"Feminine noun. Thick, colored paper for crafts and school projects.",
 example:"A: Necesito cartulina roja para hacer el cartel.\nB: En la papelería tienen de todos los colores.",
 exampleSrc:"A: I need red card stock to make the poster.\nB: The stationery shop has all colors.",
 funFact:"Spanish school projects run on cartulina. Every papelería stocks dozens of colors and sizes."},

{type:"teach",trg:"la absorción",src:"the absorption",pos:"noun",gender:"f",
 note:"Feminine noun. The process of soaking up or taking in.",
 example:"A: La absorción de agua por las raíces es esencial.\nB: Sin agua, la planta está muy mal en pocos días.",
 exampleSrc:"A: The absorption of water by the roots is essential.\nB: Without water, the plant is in very bad shape within days.",
 funFact:"Also business: 'absorción de una empresa' means a company takeover. Dual meaning."},

{type:"teach",trg:"la adecuación",src:"the suitability / adaptation",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being suitable or properly adapted.",
 example:"A: La adecuación del local a la normativa costó miles de euros.\nB: Pero era obligatorio para obtener la licencia.",
 exampleSrc:"A: Adapting the premises to regulations cost thousands of euros.\nB: But it was mandatory to obtain the license.",
 funFact:"From 'adecuar' (to adapt). 'Adecuado' (suitable/appropriate) is the everyday adjective form."},

{type:"mc",q:"¿Qué era un arcabuz?",opts:["Un arma de fuego antigua del siglo XVI","Un tipo de armadura medieval","Un barco de guerra","Un instrumento musical"],ans:"Un arma de fuego antigua del siglo XVI",hint:"Think about the early firearms that Spanish soldiers used during the age of exploration."},

{type:"teach",trg:"el autoconsumo",src:"the self-consumption / self-sufficiency",pos:"noun",gender:"m",
 note:"Masculine noun. Producing and consuming your own resources.",
 example:"A: El autoconsumo de energía solar crece cada año en España.\nB: Los paneles solares se amortizan rápidamente.",
 exampleSrc:"A: Solar energy self-consumption grows every year in Spain.\nB: Solar panels pay for themselves quickly.",
 funFact:"Spain passed a 'ley de autoconsumo' removing the controversial 'sun tax' in 2018."},

{type:"teach",trg:"la autenticidad",src:"the authenticity",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being genuine and real.",
 example:"A: La autenticidad de este cuadro está en duda.\nB: Los expertos lo analizarán con técnicas modernas.",
 exampleSrc:"A: The authenticity of this painting is in doubt.\nB: Experts will analyze it with modern techniques.",
 funFact:"Art authentication is serious business in Spain. Dalí forgeries have made international headlines."},

{type:"teach",trg:"la cuantía",src:"the amount / sum (formal)",pos:"noun",gender:"f",
 note:"Feminine noun. A monetary amount, used in formal and legal contexts.",
 example:"A: La cuantía de la multa depende de la gravedad.\nB: Puede ir desde cien hasta diez mil euros.",
 exampleSrc:"A: The amount of the fine depends on the severity.\nB: It can range from one hundred to ten thousand euros.",
 funFact:"More formal than 'cantidad'. Standard in legal documents, contracts, and official notifications."},

{type:"fb",s:"El {1} de energía solar es cada vez más popular en España.",a:["autoconsumo"],opts:["autoconsumo","acorazado","arcabuz","autoservicio"],hint:"The practice of producing and consuming your own energy, especially solar.",sSrc:"Solar energy {1} is increasingly popular in Spain."},

{type:"match",pairs:[{trg:"acústico",src:"acoustic"},{trg:"cremoso",src:"creamy"},{trg:"defectuoso",src:"defective"},{trg:"compacto",src:"compact"},{trg:"artesanal",src:"artisanal"}]}
]};

export default LESSON_18;
