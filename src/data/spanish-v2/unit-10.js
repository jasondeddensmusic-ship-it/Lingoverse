// Unit 10. Historias
// Past Tense: Irregular Verbs

export default {n:10,lang:"es",srcLang:"en",track:"v2",title:"Historias",sub:"Past Tense: Irregular Verbs",icon:"📖",level:"A2.1",color:"#7B5EE8",lessons:[
  {id:"esp10l1",title:"Fui al parque",icon:"🔀",xp:15,board:true,steps:[
        {type:"intro",title:"Fui al parque",desc:"Ser and ir share the same irregular past tense forms. Context tells you which verb is meant.",goals:["Learn fui/fuiste/fue/fuimos/fueron","Distinguish ser vs ir in past context","Narrate past movements and identities"]},
        {type:"teach",trg:"fui",src:"I was / I went",pos:"verb",gender:null,phonetic:"FWEE",note:"Ser and ir share the same past forms. Context decides the meaning.",example:"A: ¿Adónde fuiste ayer?\nB: Fui al parque con mi perro.\nA: ¡Qué bien! Yo fui al cine.",exampleSrc:"A: Where did you go yesterday?\nB: I went to the park with my dog.\nA: How nice! I went to the cinema.",funFact:"Shared between ser AND ir in preterite. 'Fui profesor' (I was a teacher, ser) vs 'fui al parque' (I went to the park, ir). One of Spanish's most used ambiguous forms."},
        {type:"teach",trg:"fuiste",src:"you were / you went",pos:"verb",gender:null,phonetic:"FWEES-teh",note:"Informal singular 'you' form. Same for ser and ir.",example:"A: ¿Fuiste tú el ganador?\nB: Sí, fui yo.\nA: ¡Felicidades! ¿Fuiste a celebrar?",exampleSrc:"A: Were you the winner?\nB: Yes, it was me.\nA: Congratulations! Did you go celebrate?",funFact:"Same ser/ir ambiguity as 'fui.' '¿Fuiste tú?' can mean 'Was it you?' (ser) or 'Did you go?' (ir). Context or continuation disambiguates."},
        {type:"teach",trg:"fue",src:"he/she was, he/she went",pos:"verb",gender:null,phonetic:"FWEH",note:"Third person singular. Also used for usted.",example:"A: ¿Quién fue tu profesor?\nB: Fue el señor García.\nA: Él fue muy buen profesor.\nB: Sí, fue excelente.",exampleSrc:"A: Who was your teacher?\nB: It was Mr. García.\nA: He was a very good teacher.\nB: Yes, he was excellent.",funFact:"Third-person preterite of ser/ir. '¿Cómo fue?' (How was it? / How did it go?). No accent, unlike the Portuguese cognate 'fôi.' Spanish dropped the Latin accent mark."},
        {type:"teach",trg:"fuimos",src:"we were / we went",pos:"verb",gender:null,phonetic:"FWEE-mos",note:"First person plural. Same for ser and ir.",example:"A: ¿Adónde fuimos el domingo?\nB: Fuimos a la playa.\nA: ¡Cierto! Fuimos con los niños.",exampleSrc:"A: Where did we go on Sunday?\nB: We went to the beach.\nA: Right! We went with the kids.",funFact:"First-person plural of ser/ir. 'Fuimos al cine' (we went) / 'fuimos los mejores' (we were). Invariable structure; ambiguity resolved by context."},
        {type:"teach",trg:"fueron",src:"they were / they went",pos:"verb",gender:null,phonetic:"FWEH-ron",note:"Third person plural. Also used for ustedes.",example:"A: ¿Fueron tus padres a la fiesta?\nB: Sí, fueron los primeros en llegar.\nA: ¡Fueron muy puntuales!",exampleSrc:"A: Did your parents go to the party?\nB: Yes, they were the first to arrive.\nA: They were very punctual!",funFact:"Third-person plural of ser/ir. 'Fueron los ganadores' (they were the winners) / 'fueron a la fiesta' (they went to the party). Two of Spanish's highest-frequency verbs share this form."},
        {type:"tip",title:"Ser and ir: same past, different meaning",text:"Ser (to be) and ir (to go) share identical past tense forms:\n\nyo fui, tú fuiste, él/ella fue, nosotros fuimos, ellos fueron\n\nHow to tell them apart:\n- Ir uses 'a' + place: Fui al cine (I went to the cinema)\n- Ser describes identity: Fue un buen día (It was a good day)\n\nContext always makes the meaning clear."},
        {type:"mc",q:"Ayer yo ___ al supermercado. (ir)",opts:["fui","fue","fuiste","fueron"],ans:"fui",hint:"First person singular, the speaker went somewhere"},
        {type:"mc",q:"La fiesta ___ muy divertida. (ser)",opts:["fui","fue","fuimos","fueron"],ans:"fue",hint:"Third person singular describing the party"},
        {type:"fb",opts:["fuimos","fueron","fui","fue"],hint:"First person plural, we went to the beach",s:"Nosotros {1} a la playa el sábado.",a:"fuimos"},
        {type:"fb",opts:["fuiste","fue","fui","fueron"],hint:"Asking 'you' informally about going somewhere",s:"¿Tú {1} al concierto anoche?",a:"fuiste"},
        {type:"mc",q:"Mis abuelos ___ profesores. (ser, past)",opts:["fue","fuimos","fueron","fui"],ans:"fueron",hint:"Third person plural describing what they were"},
        {type:"fb",opts:["fue","fui","fueron","fuimos"],hint:"Third person singular describing an identity",s:"Ella {1} la mejor estudiante de la clase.",a:"fue"},
        {type:"match",pairs:[
          {trg:"Fui al cine",src:"I went to the cinema"},
          {trg:"Fue un buen día",src:"It was a good day"},
          {trg:"Fuimos a casa",src:"We went home"},
          {trg:"Fueron mis amigos",src:"They were my friends"},
          {trg:"¿Fuiste tú?",src:"Was it you?"}
        ]},
        {type:"mc",q:"Which sentence uses 'ir' (to go), not 'ser' (to be)?",opts:["Fue mi cumpleaños","Fue increíble","Fueron buenos estudiantes","Fui al mercado"],ans:"Fui al mercado",hint:"Look for movement toward a place with 'a'"},
        {type:"fb",opts:["fue","fui","fuiste","fueron"],hint:"Third person, describing what the trip was like",s:"El viaje {1} fantástico.",a:"fue"},
        {type:"drag_fill",hint:"First 'I went', then 'it was' describing the day",s:"Ayer {1} al parque y {2} un día perfecto.",blanks:{"1":"fui","2":"fue"},pool:["fui","fue","fuimos","fueron"]},
        {type:"mc",q:"Ellos ___ a México el año pasado.",opts:["fueron","fuimos","fue","fui"],ans:"fueron",hint:"Third person plural, they traveled somewhere"},
        {type:"fb",opts:["fue","fui","fueron","fuiste"],hint:"Asking about identity, third person singular",s:"¿Quién {1} tu primer amigo en la escuela?",a:"fue"}
  ]},
  {id:"esp10l2",title:"Tuve suerte",icon:"🍀",xp:15,board:true,steps:[
        {type:"intro",title:"Tuve suerte",desc:"Tener and hacer are two essential irregular verbs in the past. Both change their stems completely.",goals:["Conjugate tener in pretérito (tuve, tuviste, tuvo...)","Conjugate hacer in pretérito (hice, hiciste, hizo...)","Use both verbs to narrate past events"]},
        {type:"teach",trg:"tuve",src:"I had",pos:"verb",gender:null,phonetic:"TOO-veh",note:"Tener changes to 'tuv-' stem in all past forms.",example:"A: ¿Tuviste un buen fin de semana?\nB: Sí, tuve mucha suerte.\nA: ¿Qué pasó?\nB: Tuve un día perfecto.",exampleSrc:"A: Did you have a good weekend?\nB: Yes, I had a lot of luck.\nA: What happened?\nB: I had a perfect day.",funFact:"Preterite of tener, yo form. Irregular stem: 'tuv-'. Spanish irregular preterites lack accents on yo/él forms (contrast regular: hablé, habló WITH accents)."},
        {type:"teach",trg:"tuviste",src:"you had",pos:"verb",gender:null,phonetic:"too-VEES-teh",note:"Informal 'you' form. Stem: tuv- + -iste.",example:"A: ¿Tuviste tiempo para estudiar?\nB: No, no tuve tiempo.\nA: ¿Tuviste mucho trabajo?\nB: Sí, tuve tres reuniones.",exampleSrc:"A: Did you have time to study?\nB: No, I didn't have time.\nA: Did you have a lot of work?\nB: Yes, I had three meetings.",funFact:"Tú preterite of tener. '¿Tuviste tiempo?'; Did you have time? Common question opener when reviewing someone's day."},
        {type:"teach",trg:"tuvo",src:"he/she had",pos:"verb",gender:null,phonetic:"TOO-vo",note:"Third person singular. Stem: tuv- + -o (no accent).",example:"A: Mi hermana tuvo un bebé.\nB: ¡Felicidades! ¿Tuvo niño o niña?\nA: Tuvo una niña.\nB: ¡Qué bonito!",exampleSrc:"A: My sister had a baby.\nB: Congratulations! Did she have a boy or girl?\nA: She had a girl.\nB: How lovely!",funFact:"Él/ella/usted preterite. 'Tuvo suerte'; he/she had luck. Tener + nouns captures many English 'to be' expressions (tener suerte, tener hambre)."},
        {type:"verb_table",title:"Tener: pretérito indefinido",note:"Notice: no accent marks on tuve/tuvo, unlike regular verbs.",groups:[
          {
            label:"",
            rows:[{"0":"yo","1":"tuve"},{"0":"tú","1":"tuviste"},{"0":"él/ella/usted","1":"tuvo"},{"0":"nosotros","1":"tuvimos"},{"0":"ellos/ustedes","1":"tuvieron"}]
          }
        ],label:"Irregular stem: tuv-"},
        {type:"teach",trg:"hice",src:"I did / I made",pos:"verb",gender:null,phonetic:"EE-seh",note:"Hacer changes to 'hic-' stem. Yo form: hice.",example:"A: ¿Qué hiciste ayer?\nB: Hice la cena para mi familia.\nA: ¡Qué bien! Yo hice un pastel.\nB: ¡Delicioso!",exampleSrc:"A: What did you do yesterday?\nB: I made dinner for my family.\nA: How nice! I made a cake.\nB: Delicious!",funFact:"Preterite of hacer, yo form. Irregular 'hic-' stem, and '-e' ending (not the typical '-é'). '¿Qué hice yo?'; what did I do? Maps to English 'did' + verb."},
        {type:"teach",trg:"hizo",src:"he/she did / made",pos:"verb",gender:null,phonetic:"EE-so",note:"Note: hizo (not hico). The c changes to z before o.",example:"A: ¿Quién hizo esta paella?\nB: La hizo mi madre.\nA: ¡Hizo un trabajo increíble!\nB: Sí, siempre hace buena comida.",exampleSrc:"A: Who made this paella?\nB: My mother made it.\nA: She did an incredible job!\nB: Yes, she always makes good food.",funFact:"Third-person preterite of hacer. Note the z (not c); Spanish phonology: 'c' before 'o/u' sounds like k, so the spelling shifts to z for /θ/ sound."},
        {type:"verb_table",title:"Hacer: pretérito indefinido",note:"The z in 'hizo' keeps the /s/ sound (c before o would be /k/).",groups:[
          {
            label:"",
            rows:[{"0":"yo","1":"hice"},{"0":"tú","1":"hiciste"},{"0":"él/ella/usted","1":"hizo"},{"0":"nosotros","1":"hicimos"},{"0":"ellos/ustedes","1":"hicieron"}]
          }
        ],label:"Irregular stem: hic- (hiz- for él/ella)"},
        {type:"mc",q:"Ayer yo ___ mucho trabajo. (tener)",opts:["tuve","tuvo","tuviste","tuvieron"],ans:"tuve",hint:"First person singular past of tener"},
        {type:"fb",opts:["hizo","hice","hiciste","hicieron"],hint:"Third person singular past of hacer",s:"Ella {1} una fiesta el viernes.",a:"hizo"},
        {type:"mc",q:"¿Qué ___ tú el fin de semana? (hacer)",opts:["hicieron","hiciste","hice","hizo"],ans:"hiciste",hint:"Asking 'you' informally what you did"},
        {type:"fb",opts:["tuvimos","tuvieron","tuvo","tuve"],hint:"First person plural, we had to wait",s:"Nosotros {1} que esperar dos horas.",a:"tuvimos"},
        {type:"match",pairs:[
          {trg:"Tuve suerte",src:"I had luck"},
          {trg:"Hizo calor",src:"It was hot (lit: it made heat)"},
          {trg:"Tuvimos tiempo",src:"We had time"},
          {trg:"¿Qué hiciste?",src:"What did you do?"},
          {trg:"Tuvo un problema",src:"He/she had a problem"}
        ]},
        {type:"mc",q:"Los niños ___ un dibujo para su madre. (hacer)",opts:["hizo","hicimos","hicieron","hice"],ans:"hicieron",hint:"Third person plural, the children made something"},
        {type:"fb",opts:["tuvo","tuve","tuvimos","tuvieron"],hint:"Third person singular, describing grandfather's life",s:"Mi abuelo {1} una vida muy interesante.",a:"tuvo"},
        {type:"drag_fill",hint:"First blank: weather (hacer), second: what I did",s:"Ayer {1} mucho frío y no {2} nada especial.",blanks:{"1":"hizo","2":"hice"},pool:["hizo","hice","tuve","tuvo"]},
        {type:"mc",q:"Mis padres ___ tres hijos. (tener, past)",opts:["tuve","tuvimos","tuvo","tuvieron"],ans:"tuvieron",hint:"Third person plural, they had children"},
        {type:"fb",opts:["hiciste","hizo","hice","hicieron"],hint:"Second person singular, asking what you prepared",s:"¿Qué {1} tú para la cena anoche? (hacer)",a:"hiciste"}
  ]},
  {id:"esp10l3",title:"Estuve en casa",icon:"🏠",xp:15,board:true,steps:[
        {type:"intro",title:"Estuve en casa",desc:"Estar and poder follow the same 'u-stem' pattern as tener. Once you learn the pattern, these verbs become easier.",goals:["Conjugate estar in pretérito (estuve, estuviste, estuvo...)","Conjugate poder in pretérito (pude, pudiste, pudo...)","Recognize the u-stem irregular pattern"]},
        {type:"teach",trg:"estuve",src:"I was (location/state)",pos:"verb",gender:null,phonetic:"es-TOO-veh",note:"Estar changes to 'estuv-' stem. Same endings as tener (tuve/estuve).",example:"A: ¿Dónde estuviste ayer?\nB: Estuve en casa todo el día.\nA: ¿Estuviste enfermo?\nB: Sí, estuve con fiebre.",exampleSrc:"A: Where were you yesterday?\nB: I was at home all day.\nA: Were you sick?\nB: Yes, I had a fever.",funFact:"Irregular preterite of estar, yo form. Stem 'estuv-'. Used for completed past states or locations: 'estuve en Madrid.' Contrast imperfect 'estaba' (ongoing past)."},
        {type:"teach",trg:"estuvo",src:"he/she was (location/state)",pos:"verb",gender:null,phonetic:"es-TOO-vo",note:"Third person singular. No accent on estuvo.",example:"A: ¿Dónde estuvo María anoche?\nB: Estuvo en el hospital.\nA: ¿Estuvo mucho tiempo?\nB: Estuvo tres horas.",exampleSrc:"A: Where was María last night?\nB: She was at the hospital.\nA: Was she there a long time?\nB: She was there three hours.",funFact:"Third-person. 'Estuvo increíble'; it was incredible. Estuvo for a finished experience; era/fue for identity-based. ESTAR for state, SER for essence."},
        {type:"teach",trg:"estuvimos",src:"we were (location/state)",pos:"verb",gender:null,phonetic:"es-too-VEE-mos",note:"First person plural. Stem: estuv- + -imos.",example:"A: ¿Estuvimos en este restaurante antes?\nB: Sí, estuvimos aquí en enero.\nA: ¡Claro! Estuvimos con tus padres.",exampleSrc:"A: Were we at this restaurant before?\nB: Yes, we were here in January.\nA: Of course! We were with your parents.",funFact:"First-person plural. 'Estuvimos ahí dos horas'; we were there two hours. Estuvimos marks the entire finished duration."},
        {type:"tip",title:"The u-stem family",text:"Three important verbs share the same 'u-stem' pattern:\n\ntener: tuv- (tuve, tuviste, tuvo, tuvimos, tuvieron)\nestar: estuv- (estuve, estuviste, estuvo, estuvimos, estuvieron)\npoder: pud- (pude, pudiste, pudo, pudimos, pudieron)\n\nAll use the SAME endings with NO accent marks:\n-e, -iste, -o, -imos, -ieron\n\nLearn one, know three!"},
        {type:"teach",trg:"pude",src:"I could / I managed to",pos:"verb",gender:null,phonetic:"POO-deh",note:"Poder changes to 'pud-' stem. In past tense means 'managed to' or 'failed to'.",example:"A: ¿Pudiste terminar el proyecto?\nB: Sí, pude terminarlo anoche.\nA: ¡Qué bien! Yo no pude dormir.\nB: ¿Por qué no pudiste?",exampleSrc:"A: Were you able to finish the project?\nB: Yes, I managed to finish it last night.\nA: Great! I couldn't sleep.\nB: Why couldn't you?",funFact:"Preterite of poder, yo form. Stem 'pud-'. 'No pude llamar'; I couldn't call (at a specific moment). Contrast 'no podía llamar' (imperfect: couldn't as an ongoing state)."},
        {type:"teach",trg:"pudo",src:"he/she could / managed to",pos:"verb",gender:null,phonetic:"POO-do",note:"Third person singular. No accent on pudo.",example:"A: ¿Tu hijo pudo aprobar el examen?\nB: Sí, pudo aprobar con buena nota.\nA: ¡Fantástico!\nB: Sí, pudo. Está muy bien.",exampleSrc:"A: Was your son able to pass the exam?\nB: Yes, he managed to pass with a good grade.\nA: Fantastic!\nB: Yes, he could. He is doing very well.",funFact:"Third-person. 'Pudo ganar'; he managed to win / he could win. Spanish preterite of poder often implies 'managed to' success, distinct from the imperfect 'podía' (was able in general)."},
        {type:"verb_table",title:"Poder: pretérito indefinido",note:"Same endings as tener and estar. No accents.",groups:[
          {
            label:"",
            rows:[{"0":"yo","1":"pude"},{"0":"tú","1":"pudiste"},{"0":"él/ella/usted","1":"pudo"},{"0":"nosotros","1":"pudimos"},{"0":"ellos/ustedes","1":"pudieron"}]
          }
        ],label:"Irregular stem: pud-"},
        {type:"mc",q:"Ayer yo ___ en la oficina hasta las nueve. (estar)",opts:["estuve","estuvo","estuvimos","estuvieron"],ans:"estuve",hint:"First person singular, describing where you were"},
        {type:"fb",opts:["pudo","pude","pudimos","pudieron"],hint:"Third person singular, she was unable to come",s:"Ella no {1} venir a la fiesta. (poder)",a:"pudo"},
        {type:"mc",q:"Nosotros ___ en Madrid la semana pasada. (estar)",opts:["estuvieron","estuvimos","estuvo","estuve"],ans:"estuvimos",hint:"First person plural, where we were located"},
        {type:"fb",opts:["pudiste","pudo","pude","pudieron"],hint:"Asking 'you' informally if you managed to do something",s:"¿Tú {1} encontrar las llaves? (poder)",a:"pudiste"},
        {type:"match",pairs:[
          {trg:"Estuve enfermo",src:"I was sick"},
          {trg:"No pudo dormir",src:"He couldn't sleep"},
          {trg:"Estuvimos juntos",src:"We were together"},
          {trg:"¿Pudiste llamar?",src:"Were you able to call?"},
          {trg:"Estuvieron aquí",src:"They were here"}
        ]},
        {type:"mc",q:"Los estudiantes no ___ terminar el examen. (poder)",opts:["pudo","pudimos","pudieron","pude"],ans:"pudieron",hint:"Third person plural, the students couldn't finish"},
        {type:"drag_fill",hint:"First: where I was (estar), second: what I couldn't do (poder)",s:"Ayer {1} en casa porque no {2} salir.",blanks:{"1":"estuve","2":"pude"},pool:["estuve","estuvo","pude","pudo"]},
        {type:"fb",opts:["estuvo","estuve","estuvimos","estuvieron"],hint:"Third person singular, describing the boss's state",s:"Mi jefe {1} muy contento con el resultado.",a:"estuvo"},
        {type:"mc",q:"¿Tú ___ hablar con el director? (poder)",opts:["pudieron","pudo","pude","pudiste"],ans:"pudiste",hint:"Second person singular, asking if you managed something"},
        {type:"fb",opts:["estuvieron","estuvimos","estuvo","estuve"],hint:"Third person plural, the tourists were at a location",s:"Los turistas {1} en el hotel toda la tarde. (estar)",a:"estuvieron"}
  ]},
  {id:"esp10l4",title:"Puse la mesa",icon:"🍽️",xp:15,board:true,steps:[
        {type:"intro",title:"Puse la mesa",desc:"Two more u-stem irregulars: poner (to put) and saber (to know/find out). In the past, saber means 'found out'.",goals:["Conjugate poner in pretérito (puse, pusiste, puso...)","Conjugate saber in pretérito (supe, supiste, supo...)","Understand saber's meaning shift in the past tense"]},
        {type:"teach",trg:"puse",src:"I put / I placed",pos:"verb",gender:null,phonetic:"POO-seh",note:"Poner changes to 'pus-' stem. Same u-stem pattern as tener, estar, poder.",example:"A: ¿Dónde pusiste mis llaves?\nB: Las puse en la mesa.\nA: No están ahí. ¿Las puse yo en el bolso?\nB: ¡Sí! Las pusiste en el bolso.",exampleSrc:"A: Where did you put my keys?\nB: I put them on the table.\nA: They're not there. Did I put them in the bag?\nB: Yes! You put them in the bag.",funFact:"Preterite of poner, yo form. 'Lo puse en la mesa'; I put it on the table. Stem 'pus-' with -e ending. Small family of preterites with this pattern."},
        {type:"teach",trg:"puso",src:"he/she put",pos:"verb",gender:null,phonetic:"POO-so",note:"Third person singular. No accent on puso.",example:"A: ¿Quién puso la música?\nB: La puso mi hermano.\nA: ¡Puso una canción muy buena!\nB: Sí, él puso toda la lista.",exampleSrc:"A: Who put the music on?\nB: My brother put it on.\nA: He put on a really good song!\nB: Yes, he put on the whole playlist.",funFact:"Third-person. 'Puso la música'; he turned on / put on the music. Very broad semantic range: put, place, set, become, turn on."},
        {type:"verb_table",title:"Poner: pretérito indefinido",note:"Same u-stem pattern. Compare: tuve, estuve, pude, puse.",groups:[
          {
            label:"",
            rows:[{"0":"yo","1":"puse"},{"0":"tú","1":"pusiste"},{"0":"él/ella/usted","1":"puso"},{"0":"nosotros","1":"pusimos"},{"0":"ellos/ustedes","1":"pusieron"}]
          }
        ],label:"Irregular stem: pus-"},
        {type:"teach",trg:"supe",src:"I found out / I learned",pos:"verb",gender:null,phonetic:"SOO-peh",note:"Saber in past tense means 'found out', not just 'knew'. Stem: sup-.",example:"A: ¿Cuándo supiste la noticia?\nB: Lo supe ayer por la noche.\nA: Yo lo supe esta mañana.\nB: ¡Fue una gran sorpresa!",exampleSrc:"A: When did you find out the news?\nB: I found out last night.\nA: I found out this morning.\nB: It was a big surprise!",funFact:"Preterite of saber, yo form. Spanish has two senses: 'supe' often means 'I found out' (the starting moment of knowing). Contrast 'sabía' (imperfect) = I knew all along."},
        {type:"teach",trg:"supo",src:"he/she found out",pos:"verb",gender:null,phonetic:"SOO-po",note:"Third person singular. Saber in past = discovery of information.",example:"A: ¿Tu madre supo la verdad?\nB: Sí, lo supo todo.\nA: ¿Cómo lo supo?\nB: Mi hermana se lo dijo.",exampleSrc:"A: Did your mother find out the truth?\nB: Yes, she found out everything.\nA: How did she find out?\nB: My sister told her.",funFact:"Third-person. 'Supo la verdad'; he found out the truth. Preterite of saber marks the transition into knowing, not the continuous state."},
        {type:"tip",title:"Meaning shifts in the past",text:"Some verbs change meaning in the pretérito:\n\nsaber: normally 'to know' but in past = 'found out, discovered'\n- Supe la respuesta = I found out the answer\n\npoder: normally 'to be able' but in past = 'managed to' or 'failed to'\n- Pude hacerlo = I managed to do it\n- No pude hacerlo = I failed to do it\n\nThese shifts happen because the pretérito marks completed actions."},
        {type:"mc",q:"¿Dónde ___ tú el libro? (poner)",opts:["pusiste","pusieron","puse","puso"],ans:"pusiste",hint:"Second person singular, asking where you placed it"},
        {type:"fb",opts:["supe","supo","supimos","supieron"],hint:"First person singular, I discovered the news",s:"Yo {1} la noticia esta mañana. (saber)",a:"supe"},
        {type:"mc",q:"Ella ___ las flores en un vaso. (poner)",opts:["puse","puso","pusieron","pusimos"],ans:"puso",hint:"Third person singular, she placed something"},
        {type:"fb",opts:["supimos","supieron","supo","supe"],hint:"First person plural, we didn't find out until yesterday",s:"Nosotros no {1} nada hasta ayer. (saber)",a:"supimos"},
        {type:"match",pairs:[
          {trg:"Puse la mesa",src:"I set the table"},
          {trg:"Supo la verdad",src:"He found out the truth"},
          {trg:"Pusimos todo",src:"We put everything"},
          {trg:"¿Supiste?",src:"Did you find out?"},
          {trg:"Pusieron música",src:"They put on music"}
        ]},
        {type:"mc",q:"Los vecinos ___ la música muy alta. (poner)",opts:["puso","pusimos","pusieron","puse"],ans:"pusieron",hint:"Third person plural, the neighbors did something with music"},
        {type:"fb",opts:["supiste","supo","supe","supieron"],hint:"Asking someone when they discovered something personal",s:"¿Cuándo {1} tú que ibas a ser padre?",a:"supiste"},
        {type:"drag_fill",hint:"First: she placed (poner), second: he discovered (saber)",s:"Ella {1} los platos en la mesa y él {2} la noticia.",blanks:{"1":"puso","2":"supo"},pool:["puso","supo","puse","supe"]},
        {type:"mc",q:"Yo ___ mi abrigo en la silla. (poner)",opts:["pusieron","puso","pusiste","puse"],ans:"puse",hint:"First person singular, I placed my coat somewhere"},
        {type:"fb",opts:["supieron","supimos","supo","supe"],hint:"Third person plural, everyone eventually found out",s:"Todos {1} la verdad al final. (saber)",a:"supieron"},
        {type:"mc",q:"Ella ___ las fotos en el álbum. (poner)",opts:["puso","puse","pusimos","pusieron"],ans:"puso",hint:"Third person singular, she placed photos somewhere"}
  ]},
  {id:"esp10l5",title:"¿Qué dijiste?",icon:"💬",xp:15,board:true,steps:[
        {type:"intro",title:"¿Qué dijiste?",desc:"Decir and querer use 'i-stem' patterns. Decir also has a special third person: dijeron (not dijieron).",goals:["Conjugate decir in pretérito (dije, dijiste, dijo...)","Conjugate querer in pretérito (quise, quisiste, quiso...)","Recognize the i-stem pattern"]},
        {type:"teach",trg:"dije",src:"I said / I told",pos:"verb",gender:null,phonetic:"DEE-heh",note:"Decir changes to 'dij-' stem. The j replaces the c.",example:"A: ¿Qué le dijiste a tu jefe?\nB: Le dije que necesitaba vacaciones.\nA: ¿Y qué dijo él?\nB: Dijo que sí.",exampleSrc:"A: What did you tell your boss?\nB: I told him I needed a vacation.\nA: And what did he say?\nB: He said yes.",funFact:"Preterite of decir, yo form. Stem 'dij-'. 'Le dije la verdad'; I told him the truth. Spanish reports speech with preterite frequently, especially for specific moments."},
        {type:"teach",trg:"dijo",src:"he/she said",pos:"verb",gender:null,phonetic:"DEE-ho",note:"Third person singular. Very common in everyday Spanish.",example:"A: ¿Qué dijo el doctor?\nB: Dijo que todo está bien.\nA: ¡Menos mal! Mi madre dijo que estaba preocupada.\nB: Dile que no hay problema.",exampleSrc:"A: What did the doctor say?\nB: He said everything is fine.\nA: Thank goodness! My mother said she was worried.\nB: Tell her there's no problem.",funFact:"Third-person. 'Dijo que no'; he said no. Note: subsequent reported speech typically shifts to indirect: 'dijo que no venía' (he said he wasn't coming, with imperfect)."},
        {type:"teach",trg:"dijeron",src:"they said",pos:"verb",gender:null,phonetic:"dee-HEH-ron",note:"Note: dijeron, NOT dijieron. The j-stem drops the i in third person plural.",example:"A: ¿Qué dijeron tus padres?\nB: Dijeron que sí.\nA: ¿De verdad? Mis amigos dijeron que no.\nB: Cada familia es diferente.",exampleSrc:"A: What did your parents say?\nB: They said yes.\nA: Really? My friends said no.\nB: Every family is different.",funFact:"Third-person plural. 'Dijeron la verdad'; they told the truth. Pattern: decir in preterite takes -eron (not -ieron) because of the 'j' phonological rule."},
        {type:"tip",title:"The i-stem verbs",text:"Decir and querer share an 'i-stem' pattern:\n\ndecir: dij- (dije, dijiste, dijo, dijimos, dijeron)\nquerer: quis- (quise, quisiste, quiso, quisimos, quisieron)\n\nImportant: third person plural is -eron (not -ieron) after j:\ndijeron (not dijieron)\n\nQuerer in past tense can mean 'tried to' or 'refused to':\n- Quise llamar = I tried to call\n- No quise ir = I refused to go"},
        {type:"teach",trg:"quise",src:"I wanted / I tried to",pos:"verb",gender:null,phonetic:"KEE-seh",note:"Querer changes to 'quis-' stem. In past: 'tried to' or 'refused to'.",example:"A: ¿Por qué no fuiste a la fiesta?\nB: No quise ir.\nA: ¿No quisiste ir? ¿Por qué?\nB: Quise quedarme en casa.",exampleSrc:"A: Why didn't you go to the party?\nB: I didn't want to go.\nA: You didn't want to go? Why?\nB: I wanted to stay at home.",funFact:"Preterite of querer, yo form. Stem 'quis-'. Can also mean 'I tried to'; a special sense: 'quise abrir la puerta' (I tried to open the door / I wanted to but...)."},
        {type:"teach",trg:"quiso",src:"he/she wanted / tried to",pos:"verb",gender:null,phonetic:"KEE-so",note:"Third person singular. No quiso = he/she refused.",example:"A: ¿Tu hermano quiso venir?\nB: No, no quiso.\nA: ¿Por qué no quiso?\nB: Quiso estudiar solo.",exampleSrc:"A: Did your brother want to come?\nB: No, he didn't want to.\nA: Why didn't he want to?\nB: He wanted to study alone.",funFact:"Third-person. Often conveys attempt: 'quiso decir' (he tried to say / he meant). Preterite of querer is rich with interpretive nuance."},
        {type:"verb_table",title:"Decir vs Querer: pretérito",note:"After j: third person plural ends in -eron (dijeron). After s: normal -ieron (quisieron).",groups:[
          {
            label:"decir (dij-)",
            rows:[{"0":"yo","1":"dije"},{"0":"tú","1":"dijiste"},{"0":"él/ella","1":"dijo"},{"0":"nosotros","1":"dijimos"},{"0":"ellos","1":"dijeron"}]
          },
          {
            label:"querer (quis-)",
            rows:[{"0":"yo","1":"quise"},{"0":"tú","1":"quisiste"},{"0":"él/ella","1":"quiso"},{"0":"nosotros","1":"quisimos"},{"0":"ellos","1":"quisieron"}]
          }
        ],label:"Two i-stem verbs"},
        {type:"mc",q:"¿Qué ___ el profesor? (decir)",opts:["dijo","dije","dijiste","dijeron"],ans:"dijo",hint:"Third person singular, what the teacher said"},
        {type:"fb",opts:["quise","quiso","quisimos","quisieron"],hint:"First person singular, I refused to buy it",s:"Yo no {1} comprar ese coche tan caro. (querer)",a:"quise"},
        {type:"mc",q:"Mis amigos me ___ la verdad. (decir)",opts:["dijimos","dijeron","dijo","dije"],ans:"dijeron",hint:"Third person plural, what friends told you"},
        {type:"fb",opts:["quiso","quise","quisiste","quisieron"],hint:"Third person singular, she wanted/tried to change",s:"Ella {1} cambiar de trabajo. (querer)",a:"quiso"},
        {type:"match",pairs:[
          {trg:"Dije que sí",src:"I said yes"},
          {trg:"No quiso ir",src:"He refused to go"},
          {trg:"¿Qué dijeron?",src:"What did they say?"},
          {trg:"Quisimos ayudar",src:"We tried to help"},
          {trg:"Dijiste la verdad",src:"You told the truth"}
        ]},
        {type:"mc",q:"Nosotros ___ invitarlos pero no pudimos. (querer)",opts:["quiso","quisieron","quisimos","quise"],ans:"quisimos",hint:"First person plural, we tried but couldn't"},
        {type:"fb",opts:["dijiste","dijo","dije","dijeron"],hint:"Asking the listener what they said",s:"¿Qué {1} tú? No te escuché. (decir)",a:"dijiste"},
        {type:"drag_fill",hint:"She said (decir) that she refused (querer)",s:"Ella {1} que no {2} participar.",blanks:{"1":"dijo","2":"quiso"},pool:["dijo","quiso","dije","quise"]},
        {type:"fb",opts:["dijiste","dijo","dije","dijeron"],hint:"Second person singular, asking if you said goodbye",s:"¿Tú les {1} adiós a tus amigos? (decir)",a:"dijiste"},
        {type:"mc",q:"Nadie ___ ayudarme con la mudanza. (querer)",opts:["quisieron","quise","quisimos","quiso"],ans:"quiso",hint:"Third person singular, nobody wanted to help"}
  ]},
  {id:"esp10l6",title:"Vine temprano",icon:"🎁",xp:15,board:true,steps:[
        {type:"intro",title:"Vine temprano",desc:"Three more essential irregular verbs: venir (to come), dar (to give), and traer (to bring). Each has its own pattern.",goals:["Conjugate venir in pretérito (vine, viniste, vino...)","Conjugate dar in pretérito (di, diste, dio...)","Conjugate traer in pretérito (traje, trajiste, trajo...)"]},
        {type:"teach",trg:"vine",src:"I came",pos:"verb",gender:null,phonetic:"VEE-neh",note:"Venir changes to 'vin-' stem. An i-stem verb like decir and querer.",example:"A: ¿A qué hora viniste?\nB: Vine a las ocho.\nA: ¡Viniste muy temprano!\nB: Sí, vine en taxi.",exampleSrc:"A: What time did you come?\nB: I came at eight.\nA: You came very early!\nB: Yes, I came by taxi.",funFact:"Preterite of venir, yo form. Stem 'vin-'. 'Vine a verte'; I came to see you. Short, high-frequency, irregular."},
        {type:"teach",trg:"vino",src:"he/she came",pos:"verb",gender:null,phonetic:"VEE-no",note:"Third person singular. Same word as 'wine' (el vino) but different meaning!",example:"A: ¿Vino tu padre a la reunión?\nB: Sí, vino con mi madre.\nA: ¿También vino tu hermana?\nB: No, ella no vino.",exampleSrc:"A: Did your father come to the meeting?\nB: Yes, he came with my mother.\nA: Did your sister come too?\nB: No, she didn't come.",funFact:"Third-person. 'Vino ayer'; he came yesterday. Note: 'vino' also means 'wine' (different noun). Context disambiguates, though homographs like this are a fun learner trap."},
        {type:"teach",trg:"di",src:"I gave",pos:"verb",gender:null,phonetic:"DEE",note:"Dar is short and unique. No accent on di/dio. Uses -er/-ir endings despite being -ar verb.",example:"A: ¿Qué le diste a tu madre?\nB: Le di flores.\nA: ¡Qué bonito! Yo le di un libro.\nB: Ella dio las gracias.",exampleSrc:"A: What did you give your mother?\nB: I gave her flowers.\nA: How nice! I gave her a book.\nB: She gave thanks.",funFact:"Preterite of dar, yo form. Just 'di'; minimal, irregular. 'Le di un regalo'; I gave him a gift. Spanish has a handful of these tiny irregular preterites (vi, fui, di, hui)."},
        {type:"teach",trg:"dio",src:"he/she gave",pos:"verb",gender:null,phonetic:"DEE-o",note:"Third person singular. No accent mark on dio.",example:"A: ¿Quién te dio este regalo?\nB: Me lo dio mi abuela.\nA: Tu abuela siempre dio los mejores regalos.\nB: ¡Es verdad!",exampleSrc:"A: Who gave you this gift?\nB: My grandmother gave it to me.\nA: Your grandmother always gave the best gifts.\nB: That's true!",funFact:"Third-person. 'Dio un discurso'; he gave a speech. Also used idiomatically: 'le dio igual' (it was the same to him / he didn't care)."},
        {type:"teach",trg:"traje",src:"I brought",pos:"verb",gender:null,phonetic:"TRAH-heh",note:"Traer changes to 'traj-' stem. Like decir (dij-), uses j-stem.",example:"A: ¿Trajiste el pastel?\nB: Sí, lo traje.\nA: ¡Perfecto! Yo traje las bebidas.\nB: ¿Quién trajo los platos?",exampleSrc:"A: Did you bring the cake?\nB: Yes, I brought it.\nA: Perfect! I brought the drinks.\nB: Who brought the plates?",funFact:"Preterite of traer, yo form. Stem 'traj-'. Like decir, takes -eron not -ieron in third-plural (trajeron). The 'j' absorbs the 'i' in Spanish phonology."},
        {type:"teach",trg:"trajo",src:"he/she brought",pos:"verb",gender:null,phonetic:"TRAH-ho",note:"Third person singular. Like dijeron, third plural is trajeron (not trajieron).",example:"A: ¿Qué trajo María a la fiesta?\nB: Trajo una ensalada.\nA: Pedro trajo postre.\nB: ¡Todos trajeron algo!",exampleSrc:"A: What did María bring to the party?\nB: She brought a salad.\nA: Pedro brought dessert.\nB: Everyone brought something!",funFact:"Third-person. 'Trajo una tarta'; he brought a cake. The 'j' + 'o' combination is distinctive for this verb family."},
        {type:"tip",title:"Dar: a unique irregular",text:"Dar (to give) is special:\n\ndi, diste, dio, dimos, dieron\n\nIt's an -ar verb but uses -er/-ir endings in the past.\nNo accent marks on any form (di, dio).\nVery short forms, easy to memorize!"},
        {type:"mc",q:"¿A qué hora ___ tú a la oficina? (venir)",opts:["viniste","vino","vine","vinieron"],ans:"viniste",hint:"Second person singular, asking when you arrived"},
        {type:"fb",opts:["dio","di","dimos","dieron"],hint:"Third person singular, grandmother gave something",s:"Mi abuela me {1} un regalo increíble. (dar)",a:"dio"},
        {type:"mc",q:"Nosotros ___ la comida para la fiesta. (traer)",opts:["trajeron","trajimos","trajo","traje"],ans:"trajimos",hint:"First person plural, we brought the food"},
        {type:"fb",opts:["vino","vine","vinimos","vinieron"],hint:"Third person singular, asking who arrived",s:"¿Quién {1} a la reunión ayer? (venir)",a:"vino"},
        {type:"match",pairs:[
          {trg:"Vine temprano",src:"I came early"},
          {trg:"Dio las gracias",src:"He/she gave thanks"},
          {trg:"Trajeron regalos",src:"They brought gifts"},
          {trg:"¿Viniste solo?",src:"Did you come alone?"},
          {trg:"Di mi opinión",src:"I gave my opinion"}
        ]},
        {type:"mc",q:"Ellos ___ muchas cosas a la fiesta. (traer)",opts:["trajo","trajimos","trajeron","traje"],ans:"trajeron",hint:"Third person plural, they brought many things"},
        {type:"fb",opts:["di","dio","dimos","dieron"],hint:"First person singular, I gave a hug",s:"Le {1} un abrazo cuando la vi. (dar)",a:"di"},
        {type:"drag_fill",hint:"He came (venir) and brought (traer) something",s:"Él {1} temprano y {2} un pastel delicioso.",blanks:{"1":"vino","2":"trajo"},pool:["vino","trajo","vine","traje"]},
        {type:"mc",q:"Nosotros le ___ un consejo muy bueno. (dar)",opts:["di","dieron","dio","dimos"],ans:"dimos",hint:"First person plural, we gave advice"},
        {type:"fb",opts:["viniste","vino","vine","vinieron"],hint:"Second person singular, asking how you traveled here",s:"¿Tú {1} en coche o en autobús? (venir)",a:"viniste"}
  ]},
  {id:"esp10l7",title:"Un día especial",icon:"📝",xp:15,board:true,steps:[
        {type:"intro",title:"Un día especial",desc:"Now let's mix regular and irregular past tense verbs to tell complete stories. This is how real Spanish works.",goals:["Combine regular and irregular pretérito verbs","Narrate a sequence of past events","Choose the correct form in context"]},
        {type:"tip",title:"Telling stories in the past",text:"When narrating past events, you mix regular and irregular verbs freely:\n\nAyer me levanté temprano (regular -ar)\nFui al mercado (irregular: ir)\nCompré frutas (regular -ar)\nHice una ensalada (irregular: hacer)\nLa puse en la mesa (irregular: poner)\n\nThe key is using the correct form for each verb. Regular verbs keep their stem. Irregular verbs change their stem."},
        {type:"teach",trg:"el fin de semana pasado",src:"last weekend",pos:"noun",gender:"m",phonetic:"el feen deh seh-MAH-nah pah-SAH-do",note:"Common time expression for past narratives.",example:"A: ¿Qué hiciste el fin de semana pasado?\nB: Fui a la montaña.\nA: ¿Y qué tal?\nB: Fue increíble.",exampleSrc:"A: What did you do last weekend?\nB: I went to the mountain.\nA: And how was it?\nB: It was incredible.",funFact:"Last weekend. The adjective agrees with 'fin' (masculine), not with 'semana.' Spanish compound nouns take gender from the head noun."},
        {type:"teach",trg:"primero... luego... después",src:"first... then... after that",pos:"intj",gender:null,phonetic:"pree-MEH-ro... LWEH-go... des-PWEHS",note:"Sequence words to structure past narratives.",example:"A: ¿Qué hiciste ayer?\nB: Primero fui al gimnasio.\nA: ¿Y luego?\nB: Luego comí y después estudié.",exampleSrc:"A: What did you do yesterday?\nB: First I went to the gym.\nA: And then?\nB: Then I ate and after that I studied.",funFact:"Standard narrative sequencers. 'Primero' starts, 'luego' continues, 'después' wraps up. Very common in cooking instructions, directions, and storytelling."},
        {type:"teach",trg:"por eso",src:"that's why / because of that",pos:"conj",gender:null,phonetic:"por EH-so",note:"Useful connector for explaining reasons in a narrative.",example:"A: ¿Por qué no viniste ayer?\nB: Estuve enfermo, por eso no vine.\nA: ¡Qué pena! ¿Ya estás mejor?\nB: Sí, gracias.",exampleSrc:"A: Why didn't you come yesterday?\nB: I was sick, that's why I didn't come.\nA: What a shame! Are you better now?\nB: Yes, thank you.",funFact:"'Por eso' is the default everyday cause-effect connector, like English 'so' starting a sentence. It links cause and effect in spoken Spanish far more often than the formal 'por lo tanto'."},
        {type:"mc",q:"Ayer me levanté temprano y ___ al trabajo en bicicleta. (ir)",opts:["fui","fue","fuiste","fueron"],ans:"fui",hint:"First person singular, the speaker traveled somewhere"},
        {type:"fb",opts:["hizo","hice","hicieron","hicimos"],hint:"Third person singular, she prepared the meal",s:"María compró los ingredientes y {1} la cena. (hacer)",a:"hizo"},
        {type:"mc",q:"Primero ___ en el parque y luego comimos en un restaurante. (estar, nosotros)",opts:["estuvieron","estuvimos","estuvo","estuve"],ans:"estuvimos",hint:"First person plural, we were at a location first"},
        {type:"fb",opts:["vinieron","vinimos","vino","vine"],hint:"Third-person plural preterite of 'venir'. Who arrived at the party?",s:"Ellos {1} a la fiesta pero no pudieron quedarse mucho tiempo.",a:"vinieron"},
        {type:"drag_fill",hint:"First I made (hacer) the food, then I placed (poner) it",s:"Primero {1} la comida y luego la {2} en la mesa.",blanks:{"1":"hice","2":"puse"},pool:["hice","puse","hizo","puso"]},
        {type:"mc",q:"Mi amigo me ___ un secreto y yo no ___ nada a nadie.",opts:["dije / dijo","dijo / dijo","dijo / dije","dijeron / dijimos"],ans:"dijo / dije",hint:"He told me, then I told nobody. Third then first person."},
        {type:"fb",opts:["pude","pudo","pudimos","pudieron"],hint:"First person singular, I was unable to go",s:"No {1} ir al cine porque tuve mucho trabajo. (poder)",a:"pude"},
        {type:"match",pairs:[
          {trg:"Hice la tarea",src:"I did the homework"},
          {trg:"Fui al parque",src:"I went to the park"},
          {trg:"Dije la verdad",src:"I told the truth"},
          {trg:"Tuve suerte",src:"I was lucky"},
          {trg:"Vine temprano",src:"I came early"},
          {trg:"Puse la mesa",src:"I set the table"}
        ]},
        {type:"drag_fill",hint:"I came home, made dinner, then put on the TV",s:"Ayer {1} a casa, {2} la cena y luego {3} la tele.",blanks:{"1":"vine","2":"hice","3":"puse"},pool:["vine","hice","puse","fui","dije","tuve"]},
        {type:"mc",q:"¿Qué ___ tus padres cuando lo ___? (decir / saber)",opts:["dije / supe","dijimos / supimos","dijo / supo","dijeron / supieron"],ans:"dijeron / supieron",hint:"Both third person plural: what they said when they found out"},
        {type:"fb",opts:["dio","di","dimos","dieron"],hint:"Third person singular, the teacher gave us something",s:"El profesor nos {1} un ejercicio muy difícil. (dar)",a:"dio"},
        {type:"mc",q:"Mis amigos ___ a mi casa y ___ pizza. (venir / traer)",opts:["vinieron / trajeron","vinimos / trajimos","vino / trajo","vine / traje"],ans:"vinieron / trajeron",hint:"Both third person plural: friends came and brought food"},
        {type:"fb",opts:["estuve","estuvo","estuvimos","estuvieron"],hint:"First person singular, I was in a certain state",s:"Anoche {1} muy cansada, por eso no pude salir. (estar)",a:"estuve"}
  ]},
  {id:"esp10l8",title:"Repaso: los irregulares",icon:"🏆",xp:20,board:true,steps:[
        {type:"intro",title:"Repaso: los irregulares",desc:"Let's review all twelve irregular verbs from this unit. Can you remember them all?",goals:["Review all irregular pretérito forms","Distinguish u-stem, i-stem, and unique patterns","Use irregular verbs confidently in context"]},
        {type:"tip",title:"Three irregular families",text:"Group 1: u-stem verbs (same endings: -e, -iste, -o, -imos, -ieron)\ntener: tuv-\nestar: estuv-\npoder: pud-\nponer: pus-\nsaber: sup-\n\nGroup 2: i-stem / j-stem verbs\ndecir: dij- (dijeron, not dijieron)\nquerer: quis-\nvenir: vin-\ntraer: traj- (trajeron, not trajieron)\n\nGroup 3: unique verbs\nser/ir: fui, fuiste, fue, fuimos, fueron\ndar: di, diste, dio, dimos, dieron"},
        {type:"mc",q:"Ayer yo ___ una carta muy larga. (hacer)",opts:["hice","hizo","hiciste","hicieron"],ans:"hice",hint:"First person singular, the speaker created something"},
        {type:"fb",opts:["dijo","dije","dijeron","dijiste"],hint:"Third person singular, she communicated something",s:"Ella {1} que no pudo venir. (decir)",a:"dijo"},
        {type:"mc",q:"Nosotros no ___ dormir por el ruido. (poder)",opts:["pudieron","pudimos","pudo","pude"],ans:"pudimos",hint:"First person plural, we were unable to sleep"},
        {type:"fb",opts:["fuiste","fue","fui","fueron"],hint:"Second person singular, asking about going somewhere",s:"¿Tú {1} al concierto el sábado? (ir)",a:"fuiste"},
        {type:"match",pairs:[{trg:"tuve",src:"I had"},{trg:"hizo",src:"he/she did"},{trg:"dijeron",src:"they said"},{trg:"pude",src:"I could"},{trg:"vine",src:"I came"},{trg:"dio",src:"he/she gave"}]},
        {type:"mc",q:"Mis abuelos ___ a España en 1960. (venir)",opts:["vino","vinimos","vinieron","vine"],ans:"vinieron",hint:"Third person plural, grandparents came somewhere"},
        {type:"fb",opts:["trajo","traje","trajimos","trajeron"],hint:"Third person singular, asking who brought something",s:"¿Quién {1} este pastel? ¡Está delicioso! (traer)",a:"trajo"},
        {type:"drag_fill",hint:"She was (estar) at home and refused (querer) to go out",s:"Ella {1} en casa todo el día y no {2} salir.",blanks:{"1":"estuvo","2":"quiso"},pool:["estuvo","quiso","estuve","quise"]},
        {type:"mc",q:"¿Cuándo ___ tú la noticia? (saber)",opts:["supieron","supo","supe","supiste"],ans:"supiste",hint:"Second person singular, when did you find out"},
        {type:"fb",opts:["dieron","dimos","dio","di"],hint:"Third person plural, the children gave something",s:"Los niños le {1} muchos besos a la abuela. (dar)",a:"dieron"},
        {type:"drag_fill",hint:"First person: I went, I made, I set. Three different irregular verbs.",s:"Primero {1} al mercado, luego {2} la comida y después {3} la mesa.",blanks:{"1":"fui","2":"hice","3":"puse"},pool:["fui","hice","puse","fue","hizo","puso"]},
        {type:"mc",q:"La fiesta ___ increíble. Todos ___ muy contentos. (ser / estar)",opts:["fue / estuvieron","fue / estuvimos","fui / estuve","fueron / estuvimos"],ans:"fue / estuvieron",hint:"The party was (third singular) and everyone was (third plural)"},
        {type:"fb",opts:["dijo","dije","dijeron","dijiste"],hint:"Third person singular, the boss communicated news",s:"Mi jefe me {1} que tengo vacaciones la semana que viene.",a:"dijo"},
        {type:"match",pairs:[
          {trg:"Puse la radio",src:"I put on the radio"},
          {trg:"Supimos todo",src:"We found out everything"},
          {trg:"Quisieron ayudar",src:"They wanted to help"},
          {trg:"Trajiste flores",src:"You brought flowers"},
          {trg:"Estuve ocupado",src:"I was busy"}
        ]},
        {type:"drag_fill",hint:"I saw (ver, regular) a friend. He told me he got a new job.",s:"Ayer {1} a mi amigo Pedro. Me {2} que {3} un nuevo trabajo.",blanks:{"1":"vi","2":"dijo","3":"tuvo"},pool:["vi","dijo","tuvo","vine","dije","tuve"]},
        {type:"mc",q:"Nosotros les ___ un regalo y ellos nos ___ las gracias. (dar / dar)",opts:["dieron / dimos","dimos / dieron","dio / di","di / dio"],ans:"dimos / dieron",hint:"We gave (first plural) and they gave (third plural)"}
  ,{type:"match",pairs:[{trg:"el fin de semana pasado",src:"last weekend"},{trg:"primero... luego... después",src:"first... then... after that"},{trg:"por eso",src:"that's why / because of that"}]}]},
  {id:"esv2_u10l_essential_a2",title:"En el restaurante y en la salud",icon:"🍽️",xp:15,board:true,steps:[
    {type:"intro",title:"En el restaurante y en la salud",desc:"This lesson teaches nine essential A2 vocabulary words spanning restaurants, daily life, and health. All are on the DELE A2 word list.",goals:["Learn to talk about paying and forgetting","Name key restaurant items: el menú, el plato, la cena","Express feelings with emocionado/a","Discuss health with el dolor and la enfermedad","Use el descuento when shopping"]},
    {type:"teach",trg:"pagar",src:"to pay",pos:"verb",gender:null,phonetic:"pah-GAR",note:"Regular -ar verb. Yo: pago, tú: pagas, él: paga, nosotros: pagamos.\nSpelling change in preterite: yo pagué (g stays hard before e).",example:"A: ¿Quién paga la cena?\nB: Yo pago. Tú pagaste la última vez.",exampleSrc:"A: Who is paying for dinner?\nB: I'll pay. You paid last time.",funFact:"From Latin pacare (to pacify, to satisfy a debt). In medieval Spanish, paying a debt was seen as restoring peace, related to 'paz' (peace)."},
    {type:"teach",trg:"olvidar",src:"to forget",pos:"verb",gender:null,phonetic:"ol-bee-DAR",note:"Regular -ar verb. Yo: olvido, tú: olvidas, él: olvida, nosotros: olvidamos.",example:"A: ¿Tienes las llaves?\nB: ¡Ay, las olvidé en casa!\nA: Siempre olvidas algo.",exampleSrc:"A: Do you have the keys?\nB: Oh, I forgot them at home!\nA: You always forget something.",funFact:"From Latin oblitare, related to 'obliterate'. Forgetting was once compared to erasing words from a wax tablet."},
    {type:"teach",trg:"el dolor",src:"the pain",pos:"noun",gender:"m",phonetic:"el doh-LOR",note:"Masculine noun. Tengo dolor = I have pain. Tengo mucho dolor = I am in a lot of pain.\nThe body-part goes after dolor: dolor de cabeza, dolor de estómago.",example:"A: ¿Qué te pasa?\nB: Tengo mucho dolor. No puedo ir al trabajo.\nA: ¿Quieres ir al médico?\nB: Sí, quiero ir.",exampleSrc:"A: What's wrong?\nB: I am in a lot of pain. I can't go to work.\nA: Do you want to go to the doctor?\nB: Yes, I want to go.",funFact:"Same root as 'doleful' in English. From Latin dolor. The verb doler (to hurt) follows the same stem: me duele (it hurts me)."},
    {type:"teach",trg:"la cena",src:"the dinner / evening meal",pos:"noun",gender:"f",phonetic:"LAH SEH-nah",note:"Feminine noun. In Spain, la cena is typically eaten late: 9-10 pm. Cenar = to have dinner.",example:"A: ¿A qué hora es la cena?\nB: A las nueve. ¿Quieres comer en el restaurante?\nA: ¡Sí, una buena cena!",exampleSrc:"A: What time is dinner?\nB: At nine. Do you want to eat at the restaurant?\nA: Yes, a good dinner!",funFact:"From Latin cena (midday meal in ancient Rome). By the Middle Ages it shifted to the evening. Related to the English word 'supper' borrowed via Old French."},
    {type:"teach",trg:"el plato",src:"the plate / dish",pos:"noun",gender:"m",phonetic:"el PLAH-toh",note:"Masculine noun. El plato del día = dish of the day. Also means the food itself: el primer plato = first course.",example:"A: ¿Qué quieres de primer plato?\nB: Quiero la sopa. ¿Y tú?\nA: El plato del día para mí.",exampleSrc:"A: What do you want for the first course?\nB: I want the soup. And you?\nA: The dish of the day for me.",funFact:"From Latin plattus (flat, broad). Related to English 'plate' and 'platter'. A plato can be a plate, a course in a meal, or an entire dish/recipe."},
    {type:"teach",trg:"el menú",src:"the menu",pos:"noun",gender:"m",phonetic:"el meh-NOO",note:"Masculine noun. El menú del día = fixed-price lunch menu (very common in Spain). Also called la carta.",example:"A: ¿Me trae el menú, por favor?\nB: Aquí tiene. El menú del día cuesta doce euros.\nA: ¡Perfecto, lo quiero!",exampleSrc:"A: Could you bring me the menu, please?\nB: Here you go. The fixed menu costs twelve euros.\nA: Perfect, I'll have that!",funFact:"Borrowed from French menu (detailed list) in the 19th century. El menú del día is a Spanish institution: a full three-course lunch for a fixed price."},
    {type:"teach",trg:"emocionado / emocionada",src:"excited / moved (emotionally)",pos:"adj",gender:null,phonetic:"eh-mo-syo-NAH-doh / eh-mo-syo-NAH-dah",note:"Use emocionado (m) or emocionada (f). Use ESTAR, not ser: estoy emocionado.\nCan mean excited or emotionally moved (even to tears).",example:"A: ¿Estás emocionado por la cena?\nB: ¡Sí, estoy muy emocionado!\nA: Yo también estoy muy contento.\nB: ¡Va a ser una noche perfecta!",exampleSrc:"A: Are you excited about dinner?\nB: Yes, I am very excited!\nA: I am also very happy.\nB: It is going to be a perfect evening!",funFact:"In Spanish, emocionado can describe happy excitement OR being moved to tears. Context tells you which. English 'emotional' covers both too, but Spanish speakers use emocionado more freely."},
    {type:"teach",trg:"la enfermedad",src:"the illness / disease",pos:"noun",gender:"f",phonetic:"lah en-fer-meh-DAD",note:"Feminine noun. From enfermo (sick). La enfermedad grave = serious illness. Una enfermedad común = a common illness.",example:"A: ¿Por qué no fuiste al trabajo?\nB: Tuve una enfermedad esta semana.\nA: ¡Lo siento! ¿Estás mejor ahora?\nB: Sí, ya estoy bien.",exampleSrc:"A: Why didn't you go to work?\nB: I had an illness this week.\nA: I'm sorry! Are you better now?\nB: Yes, I'm fine now.",funFact:"From Latin infirmitas via enfermo. Spanish differentiates enfermedad (a specific illness or disease) from dolor (pain), you can have dolor without an enfermedad."},
    {type:"teach",trg:"el descuento",src:"the discount",pos:"noun",gender:"m",phonetic:"el des-KWEN-toh",note:"Masculine noun. ¿Tiene descuento? = Is there a discount? Con descuento = with a discount. Un 10% de descuento = a 10% discount.",example:"A: ¿Hay algún descuento para estudiantes?\nB: Sí, hay un descuento del 15%.\nA: ¡Qué bien! Voy a pagar con tarjeta.",exampleSrc:"A: Is there any discount for students?\nB: Yes, there is a 15% discount.\nA: Great! I'll pay by card.",funFact:"From descontar (to deduct). Related to English 'discount'. In Spain, sales are called 'rebajas' and discounts are anunciados (advertised) as a percentage off."},
    {type:"tip",title:"Restaurant and health vocabulary at A2",text:"Two vocabulary clusters from this lesson:\n\nRestaurant: el menú, el plato, la cena, pagar\n- el menú del día = the fixed-price lunch (a Spanish institution)\n- primer plato / segundo plato = first/second course\n- Pagar takes a spelling change in the preterite: pagué (not pagé)\n\nHealth: el dolor, la enfermedad\n- Dolor = pain. Location: dolor de cabeza, dolor de estómago\n- Enfermedad = a diagnosed illness or disease, more serious than just dolor\n- Both use TENER: tengo dolor, tuve una enfermedad"},
    {type:"mc",q:"Necesitamos ___ antes de salir del restaurante.",opts:["pagar","pagando","pagamos","pagué"],ans:"pagar",hint:"After a modal verb like necesitar, use the infinitive form"},
    {type:"fb",opts:["olvidé","olvido","olvidamos","olvidaste"],hint:"First person singular past tense of olvidar",s:"Lo siento, {1} tu número de teléfono.",a:"olvidé"},
    {type:"mc",q:"What is 'el dolor de cabeza' in English?",opts:["fever","headache","disease","stomach ache"],ans:"headache",hint:"Cabeza means head"},
    {type:"fb",opts:["la cena","el menú","el plato","el desayuno"],hint:"The evening meal in Spanish is called...",s:"En España, {1} normalmente es muy tarde, a las nueve o las diez.",a:"la cena"},
    {type:"mc",q:"¿Cuál es el primer ___ del día? ¿La sopa o la ensalada?",opts:["cena","descuento","plato","menú"],ans:"plato",hint:"A course in a meal is called this"},
    {type:"fb",opts:["el menú","la cena","el plato","la carta"],hint:"The printed list of dishes you ask the waiter for",s:"¿Me trae {1}, por favor? Quiero ver qué hay.",a:"el menú"},
    {type:"match",pairs:[
      {trg:"pagar",src:"to pay"},
      {trg:"olvidar",src:"to forget"},
      {trg:"el dolor",src:"the pain"},
      {trg:"la cena",src:"the dinner"},
      {trg:"el descuento",src:"the discount"},
      {trg:"emocionado / emocionada",src:"excited / moved (emotionally)"},
      {trg:"la enfermedad",src:"the illness / disease"}
    ]},
    {type:"fb",opts:["emocionada","emocionado","contento","triste"],hint:"Feminine form: she is excited / moved about the dinner",s:"Mi madre está muy {1} por la cena de esta noche.",a:"emocionada"},
    {type:"mc",q:"'La enfermedad' means:",opts:["the hospital","the pain","the medicine","the illness"],ans:"the illness",hint:"Think of the adjective 'enfermo' (sick), same root"},
    {type:"fb",opts:["un descuento","un dolor","un menú","una cena"],hint:"A reduction in price you ask for in a shop",s:"¿Hay {1} para estudiantes en esta tienda?",a:"un descuento"},
    {type:"fb",opts:["pagar","olvidar","comer","beber"],hint:"Regular -ar verb meaning to pay",s:"¿Quién va a {1} la cena esta noche?",a:"pagar"},
    {type:"mc",q:"Estoy muy ___ porque mañana viajamos al restaurante más famoso de la ciudad.",opts:["emocionado","olvidado","pagado","dolido"],ans:"emocionado",hint:"Which adjective means 'excited / emotionally moved'?"},
    {type:"fb",opts:["olvidaste","olvidé","olvidó","olvidamos"],hint:"Second person singular past: you forgot something",s:"¿{1} el menú en casa? ¡No importa, aquí hay otro!",a:"olvidaste"}
  ]}
]};
