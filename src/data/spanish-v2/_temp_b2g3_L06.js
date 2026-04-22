// Spanish B2 Gap Batch 3 - Lesson 6: Emotions & Character
// 15 teach cards + quizzes, max 30 steps

const LESSON_6 = {id:"esv2_b2g3_l6", title:"Emociones y carácter", icon:"💫", xp:15, board:true, steps:[
  {type:"intro", title:"Emociones y carácter", desc:"Express complex emotions and describe character traits with precision. Move beyond basic 'happy' and 'sad' to nuanced B2-level vocabulary.", goals:["Learn 15 emotion and character words","Describe personality with precision","Express complex emotional states"]},

  {type:"teach", trg:"la audacia", src:"audacity / boldness", pos:"noun", gender:"f", note:"Positive: boldness, daring. Can also mean nerve (slightly negative).\nFrom Latin audacia.", example:"A: Admiro la audacia del explorador.\nB: Hay que ser muy valiente para hacer eso.", exampleSrc:"A: I admire the explorer's boldness.\nB: You have to be very brave to do that.", funFact:"From Latin audere (to dare). The English 'audacious' shares the same root. In Spanish it leans more positive."},

  {type:"teach", trg:"la devoción", src:"devotion / dedication", pos:"noun", gender:"f", note:"Deep commitment or religious devotion.\nCon devoción = devotedly.", example:"A: Cuida a su madre con una devoción admirable.\nB: Es una persona muy generosa y entregada.", exampleSrc:"A: She cares for her mother with admirable devotion.\nB: She's a very generous and dedicated person.", funFact:"In Spain, devoción often has religious overtones. But secular use (devotion to work, family) is equally common."},

  {type:"teach", trg:"el desasosiego", src:"restlessness / unease", pos:"noun", gender:"m", note:"Des- (negation) + sosiego (calm, peace).\nA state of inner agitation and anxiety.", example:"A: Siento un desasosiego que no puedo explicar.\nB: A veces la incertidumbre causa esa sensación.", exampleSrc:"A: I feel a restlessness I can't explain.\nB: Sometimes uncertainty causes that feeling.", funFact:"Fernando Pessoa wrote 'The Book of Disquiet' (El libro del desasosiego). The word captures existential unease perfectly."},

  {type:"teach", trg:"la dicha", src:"happiness / bliss", pos:"noun", gender:"f", note:"A literary, elevated word for happiness.\nMore poetic than felicidad or alegría.", example:"A: La dicha de ser abuelo no se puede describir.\nB: Se te nota en la cara cada vez que los ves.", exampleSrc:"A: The bliss of being a grandfather cannot be described.\nB: You can see it on your face every time you see them.", funFact:"Dicha comes from Latin dicta (things said, destined). What's 'said by fate' became what brings happiness."},

  {type:"teach", trg:"el egoísmo", src:"selfishness / egotism", pos:"noun", gender:"m", note:"From ego (self) + -ismo.\nEgoísta (adj/noun) = selfish person.", example:"A: Su egoísmo le ha costado muchas amistades.\nB: Es triste, pero solo piensa en sí mismo.", exampleSrc:"A: His selfishness has cost him many friendships.\nB: It's sad, but he only thinks about himself.", funFact:"Spanish distinguishes egoísmo (selfishness) from egocentrismo (self-centeredness). Subtle but different character flaws."},

  {type:"teach", trg:"la delicadeza", src:"delicacy / gentleness", pos:"noun", gender:"f", note:"Tact, sensitivity, or refinement in behaviour.\nCon delicadeza = with care and sensitivity.", example:"A: Trató el tema con mucha delicadeza.\nB: Es una persona muy empática.", exampleSrc:"A: He handled the topic with great delicacy.\nB: He's a very empathetic person.", funFact:"Delicadeza can also mean 'a delicacy' in food (un manjar). But the character trait meaning is more common at B2."},

  {type:"mc", q:"¿Qué es el desasosiego?", opts:["Una sensación de inquietud interior","Un tipo de alegría intensa","Un sentimiento de vergüenza","Una forma de egoísmo"], ans:"Una sensación de inquietud interior", hint:"The prefix des- negates sosiego (calm). What happens when calm is removed?"},

  {type:"teach", trg:"el agrado", src:"pleasure / liking", pos:"noun", gender:"m", note:"Formal word for pleasure or approval.\nSer del agrado de = to be to someone's liking.", example:"A: Espero que la cena sea de su agrado.\nB: Todo está delicioso, muchas gracias.", exampleSrc:"A: I hope the dinner is to your liking.\nB: Everything is delicious, thank you very much.", funFact:"Agrado is related to agradecer (to thank) and agradable (pleasant). All from Latin gratus (pleasing)."},

  {type:"teach", trg:"la debilidad", src:"weakness", pos:"noun", gender:"f", note:"Physical or character weakness.\nTener debilidad por = to have a soft spot for.", example:"A: Mi debilidad es el chocolate con churros.\nB: La mía también, no puedo resistirme.", exampleSrc:"A: My weakness is chocolate with churros.\nB: Mine too, I can't resist.", funFact:"Tener debilidad por algo is always positive: it means you have a fondness, not a deficiency. Context changes everything."},

  {type:"teach", trg:"la dureza", src:"hardness / toughness", pos:"noun", gender:"f", note:"Physical hardness or emotional toughness.\nFrom duro (hard).", example:"A: La dureza de su infancia le hizo más fuerte.\nB: Es una persona con mucha resiliencia.", exampleSrc:"A: The toughness of his childhood made him stronger.\nB: He's a person with a lot of resilience.", funFact:"The -eza suffix creates abstract nouns from adjectives: duro > dureza, bello > belleza, triste > tristeza."},

  {type:"fb", s:"Admiro la {1} de los bomberos que entran en edificios en llamas.", a:["audacia"], opts:["audacia","debilidad","delicadeza","devoción"], hint:"The boldness and daring to face danger without hesitation.", sSrc:"I admire the {1} of firefighters who enter burning buildings."},

  {type:"teach", trg:"la desnudez", src:"nakedness / bareness", pos:"noun", gender:"f", note:"Physical nudity or figurative bareness.\nLa desnudez del paisaje = the bareness of the landscape.", example:"A: El artista pintaba la desnudez del cuerpo humano.\nB: Sus cuadros están en el Museo del Prado.", exampleSrc:"A: The artist painted the nakedness of the human body.\nB: His paintings are in the Prado Museum.", funFact:"The -ez suffix creates abstract nouns: desnudo > desnudez, viejo > vejez, sencillo > sencillez. All are feminine."},

  {type:"teach", trg:"la confusión", src:"confusion", pos:"noun", gender:"f", note:"A state of being confused or mixed up.\nCrear confusión = to create confusion.", example:"A: Hubo mucha confusión con los horarios del tren.\nB: Sí, nadie sabía a qué hora salía.", exampleSrc:"A: There was a lot of confusion with the train schedules.\nB: Yes, nobody knew what time it left.", funFact:"Confusión and English 'confusion' are perfect cognates from Latin confusio. Same word, same meaning, same origin."},

  {type:"teach", trg:"desolador", src:"devastating / desolate", pos:"adj", gender:null, note:"Describes something that causes extreme sadness or emptiness.\nUn paisaje desolador = a desolate landscape.", example:"A: Las noticias del terremoto son desoladoras.\nB: Es terrible, hay miles de personas sin hogar.", exampleSrc:"A: The earthquake news is devastating.\nB: It's terrible, thousands of people are homeless.", funFact:"From Latin desolare (to leave alone). The word carries a sense of profound emptiness, not just sadness."},

  {type:"mc", q:"'Tener debilidad por el chocolate' significa...", opts:["Que no te gusta el chocolate","Que te encanta el chocolate","Que el chocolate te hace daño","Que eres alérgico al chocolate"], ans:"Que te encanta el chocolate", hint:"Having a 'weakness' for something means you love it and find it hard to resist."},

  {type:"match", pairs:[{trg:"audacia", src:"boldness"},{trg:"desasosiego", src:"restlessness"},{trg:"dicha", src:"bliss"},{trg:"egoísmo", src:"selfishness"},{trg:"delicadeza", src:"gentleness"}]},

  {type:"fb", s:"La {1} que siente por su familia es evidente en todo lo que hace.", a:["devoción"], opts:["devoción","confusión","dureza","desnudez"], hint:"A deep sense of commitment and loving dedication toward family.", sSrc:"The {1} she feels for her family is evident in everything she does."},

  {type:"mc", q:"¿Cuál es un sinónimo literario de 'felicidad'?", opts:["El agrado","El egoísmo","La dicha","La dureza"], ans:"La dicha", hint:"This poetic word for happiness has roots in Latin fate and destiny."},

  {type:"fb", s:"El panorama después del incendio era completamente {1}.", a:["desolador"], opts:["desolador","delicado","audaz","dichoso"], hint:"Describes a scene of profound emptiness and devastation after a disaster.", sSrc:"The panorama after the fire was completely {1}."}
]};

export default LESSON_6;
