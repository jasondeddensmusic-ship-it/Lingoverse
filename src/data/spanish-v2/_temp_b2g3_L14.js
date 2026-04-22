// Spanish B2 Gap Batch 3 - Lesson 14: Verbs of Removal & Undoing
// 15 teach cards + quizzes, max 30 steps

const LESSON_14 = {id:"esv2_b2g3_l14", title:"Verbos: deshacer y quitar", icon:"🔄", xp:15, board:true, steps:[
  {type:"intro", title:"Verbos: deshacer y quitar", desc:"Master des- prefix verbs that express removal, reversal, and undoing. This productive pattern lets you build vocabulary systematically.", goals:["Learn 15 des- prefix verbs","Understand the reversal pattern","Use these verbs in context"]},

  {type:"tip", title:"The des- prefix: undoing actions", text:"The prefix des- reverses the meaning of the base verb:\n\nabrochar (to button) > desabrochar (to unbutton)\ncalzar (to put on shoes) > descalzar (to take off shoes)\ncoser (to sew) > descoser (to unstitch)\ntapar (to cover) > destapar (to uncover)\n\nThis pattern is extremely productive in Spanish. Once you know the base verb, you can often predict the des- form.", deepDive:{title:"Des- vs other negative prefixes", text:"Spanish has several negative prefixes but des- is the most common for verb reversal. In- works for adjectives (incapaz, imposible). A- sometimes negates (amoral, asimétrico). But for undoing actions, des- is the go-to prefix."}},

  {type:"teach", trg:"desabrochar", src:"to unbutton / to unfasten", pos:"verb", gender:null, note:"Des- + abrochar (to button up).\nWorks for buttons, clasps, and buckles.", example:"A: Hace mucho calor. Me voy a desabrochar la chaqueta.\nB: Yo también. Hace mucho calor.", exampleSrc:"A: It's very hot. I'm going to unbutton my jacket.\nB: Me too. It's very hot.", funFact:"Abrochar comes from broche (brooch/clasp). Historically, clothing was fastened with brooches, not buttons."},

  {type:"teach", trg:"descalzar", src:"to take off shoes", pos:"verb", gender:null, note:"Des- + calzar (to put on shoes).\nDescalzo = barefoot (adjective).", example:"A: En Japón hay que descalzarse antes de entrar en casa.\nB: En España no es tan común, pero a mí me gusta.", exampleSrc:"A: In Japan you have to take off your shoes before entering a house.\nB: In Spain it's not as common, but I like to.", funFact:"Descalzo means barefoot. The Carmelitas Descalzas (Discalced Carmelites) are an order of barefoot nuns founded by Saint Teresa."},

  {type:"teach", trg:"descoser", src:"to unstitch / to rip a seam", pos:"verb", gender:null, note:"Des- + coser (to sew). To undo stitching.\nAlso figurative: reírse a descoserse = to laugh uncontrollably.", example:"A: Se me ha descosido el bolsillo del pantalón.\nB: Trae, que yo lo coso en un momento.", exampleSrc:"A: The pocket of my trousers has come unstitched.\nB: Bring it here, I'll sew it in a moment.", funFact:"The expression 'como boca descosida' means someone who talks too much. An unstitched mouth that won't stay closed."},

  {type:"teach", trg:"destapar", src:"to uncover / to take the lid off", pos:"verb", gender:null, note:"Des- + tapar (to cover). To remove a cover or lid.\nAlso: to reveal a secret.", example:"A: Destapa la olla con cuidado, está muy caliente.\nB: Huele fenomenal, ¿qué has cocinado?", exampleSrc:"A: Uncover the pot carefully, it's very hot.\nB: It smells amazing, what did you cook?", funFact:"Destapar un escándalo means to uncover a scandal. The metaphor of removing a lid to reveal what's hidden underneath."},

  {type:"teach", trg:"desvelar", src:"to reveal / to keep awake", pos:"verb", gender:null, note:"Two distinct meanings: to unveil/reveal, or to cause sleeplessness.\nDesvelarse = to stay awake all night.", example:"A: El periodista desveló la corrupción del alcalde.\nB: Fue un reportaje muy valiente.", exampleSrc:"A: The journalist revealed the mayor's corruption.\nB: It was a very brave report.", funFact:"From des- + velo (veil). To remove the veil. The sleeplessness meaning comes from des- + velar (to keep vigil)."},

  {type:"mc", q:"¿Qué significa 'descalzarse'?", opts:["Quitarse los zapatos","Ponerse los zapatos","Lavarse los pies","Atarse los cordones"], ans:"Quitarse los zapatos", hint:"Des- reverses the action. Calzar means to put on shoes. What's the opposite?"},

  {type:"teach", trg:"descartar", src:"to discard / to rule out", pos:"verb", gender:null, note:"Des- + carta (card). Originally: to discard cards in a game.\nNow: to eliminate an option.", example:"A: Hemos descartado la primera opción por ser muy cara.\nB: Entonces nos quedan dos alternativas.", exampleSrc:"A: We've ruled out the first option because it's too expensive.\nB: Then we have two alternatives left.", funFact:"From card games: descartar meant to discard cards from your hand. The metaphor extended to discarding ideas and options."},

  {type:"teach", trg:"despejar", src:"to clear / to solve", pos:"verb", gender:null, note:"To clear a space, clear up weather, or solve an equation.\nDespejar una incógnita = to solve for an unknown.", example:"A: El cielo se ha despejado después de la tormenta.\nB: Por fin podemos salir a pasear.", exampleSrc:"A: The sky has cleared after the storm.\nB: We can finally go for a walk.", funFact:"In football, despejar means to clear the ball from danger. In maths, despejar x means to isolate x. Versatile verb."},

  {type:"teach", trg:"desembocar", src:"to flow into / to lead to", pos:"verb", gender:null, note:"Des- + em- + boca (mouth). A river flowing into the sea.\nAlso figurative: to result in.", example:"A: El río Guadalquivir desemboca en el Atlántico.\nB: Pasa por Córdoba y Sevilla antes de llegar al mar.", exampleSrc:"A: The Guadalquivir river flows into the Atlantic.\nB: It passes through Córdoba and Seville before reaching the sea.", funFact:"Literally 'to un-mouth'. The river's boca (mouth) is where it opens into the sea. Desembocar = to exit through the mouth."},

  {type:"fb", s:"Hay que {1} la olla para que salga el vapor.", a:["destapar"], opts:["destapar","descoser","desvelar","descartar"], hint:"To remove the lid or cover from a cooking pot.", sSrc:"You need to {1} the pot so the steam can escape."},

  {type:"teach", trg:"desplegar", src:"to unfold / to deploy", pos:"verb", gender:null, note:"Des- + plegar (to fold). To open something folded.\nAlso: to deploy troops, resources, or efforts.", example:"A: Desplegaron un operativo de búsqueda en la montaña.\nB: Participaron más de cien voluntarios.", exampleSrc:"A: They deployed a search operation in the mountain.\nB: More than a hundred volunteers participated.", funFact:"Military despliegue (deployment) and opening a map (desplegar un mapa) use the same word. Both involve unfolding."},

  {type:"teach", trg:"dispersar", src:"to disperse / to scatter", pos:"verb", gender:null, note:"To spread in different directions.\nLa policía dispersó a la multitud.", example:"A: El viento dispersó las semillas por todo el campo.\nB: Por eso hay flores en lugares inesperados.", exampleSrc:"A: The wind scattered the seeds across the entire field.\nB: That's why there are flowers in unexpected places.", funFact:"From Latin dispersare (to scatter). In Spanish, dispersarse also means to lose focus: no te disperses = don't lose concentration."},

  {type:"teach", trg:"desenvolver", src:"to unwrap / to develop", pos:"verb", gender:null, note:"Des- + envolver (to wrap). To unwrap a package.\nDesenvolvimiento = development.", example:"A: El niño desenvolvió el regalo con mucha ilusión.\nB: Se puso muy contento al ver el juguete.", exampleSrc:"A: The child unwrapped the gift with great excitement.\nB: He was very happy when he saw the toy.", funFact:"Desenvolverse also means to manage or cope: se desenvuelve bien en inglés = she manages well in English. To 'unwrap' your abilities."},

  {type:"mc", q:"El río Guadalquivir desemboca en...", opts:["El río Ebro","El océano Atlántico","El mar Mediterráneo","El mar Cantábrico"], ans:"El océano Atlántico", hint:"This major Andalusian river flows through Córdoba and Seville before reaching the Atlantic."},

  {type:"match", pairs:[{trg:"desabrochar", src:"to unbutton"},{trg:"destapar", src:"to uncover"},{trg:"desvelar", src:"to reveal"},{trg:"descartar", src:"to rule out"},{trg:"desplegar", src:"to unfold / deploy"}]},

  {type:"fb", s:"La policía {1} a los manifestantes con gases lacrimógenos.", a:["dispersó"], opts:["dispersó","desplegó","descartó","despejó"], hint:"To cause a crowd to break apart and scatter in different directions.", sSrc:"The police {1} the protesters with tear gas."},

  {type:"mc", q:"'Desvelar un secreto' significa...", opts:["Guardar un secreto","Inventar un secreto","Revelar algo oculto","Olvidar un secreto"], ans:"Revelar algo oculto", hint:"Des- removes the veil (velo). To take the veil off something hidden means to make it known."},

  {type:"fb", s:"Hemos {1} esa posibilidad porque no es viable económicamente.", a:["descartado"], opts:["descartado","despejado","desplegado","desembocado"], hint:"To eliminate an option from consideration, like discarding a card in a game.", sSrc:"We have {1} that possibility because it's not economically viable."}
]};

export default LESSON_14;
