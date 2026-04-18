// Unit 10 — Historias
// Past Tense: Irregular Verbs

export default {n:10,lang:"es",srcLang:"en",track:"v2",title:"Historias",sub:"Past Tense: Irregular Verbs",icon:"📖",level:"A2.1",color:"#7B5EE8",lessons:[
  {id:"esp10l1",title:"Fui al parque",icon:"🔀",xp:15,board:true,steps:[
        {type:"intro",title:"Fui al parque",desc:"Ser and ir share the same irregular past tense forms. Context tells you which verb is meant.",goals:["Learn fui/fuiste/fue/fuimos/fueron","Distinguish ser vs ir in past context","Narrate past movements and identities"]},
        {type:"teach",trg:"fui",src:"I was / I went",pos:"verb",gender:null,phonetic:"FWEE",note:"Ser and ir share the same past forms. Context decides the meaning.",example:"A: ¿Adónde fuiste ayer?\nB: Fui al parque con mi perro.\nA: ¡Qué bien! Yo fui al cine.",exampleSrc:"A: Where did you go yesterday?\nB: I went to the park with my dog.\nA: How nice! I went to the cinema.",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
        {type:"teach",trg:"fuiste",src:"you were / you went",pos:"verb",gender:null,phonetic:"FWEES-teh",note:"Informal singular 'you' form. Same for ser and ir.",example:"A: ¿Fuiste tú el ganador?\nB: Sí, fui yo.\nA: ¡Felicidades! ¿Fuiste a celebrar?",exampleSrc:"A: Were you the winner?\nB: Yes, it was me.\nA: Congratulations! Did you go celebrate?",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
        {type:"teach",trg:"fue",src:"he/she was, he/she went",pos:"verb",gender:null,phonetic:"FWEH",note:"Third person singular. Also used for usted.",example:"A: ¿Quién fue tu profesor?\nB: Fue el señor García.\nA: Él fue muy buen profesor.\nB: Sí, fue excelente.",exampleSrc:"A: Who was your teacher?\nB: It was Mr. García.\nA: He was a very good teacher.\nB: Yes, he was excellent.",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
        {type:"teach",trg:"fuimos",src:"we were / we went",pos:"verb",gender:null,phonetic:"FWEE-mos",note:"First person plural. Same for ser and ir.",example:"A: ¿Adónde fuimos el domingo?\nB: Fuimos a la playa.\nA: ¡Cierto! Fuimos con los niños.",exampleSrc:"A: Where did we go on Sunday?\nB: We went to the beach.\nA: Right! We went with the kids.",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
        {type:"teach",trg:"fueron",src:"they were / they went",pos:"verb",gender:null,phonetic:"FWEH-ron",note:"Third person plural. Also used for ustedes.",example:"A: ¿Fueron tus padres a la fiesta?\nB: Sí, fueron los primeros en llegar.\nA: ¡Fueron muy puntuales!",exampleSrc:"A: Did your parents go to the party?\nB: Yes, they were the first to arrive.\nA: They were very punctual!",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
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
        {type:"teach",trg:"tuve",src:"I had",pos:"verb",gender:null,phonetic:"TOO-veh",note:"Tener changes to 'tuv-' stem in all past forms.",example:"A: ¿Tuviste un buen fin de semana?\nB: Sí, tuve mucha suerte.\nA: ¿Qué pasó?\nB: Tuve un día perfecto.",exampleSrc:"A: Did you have a good weekend?\nB: Yes, I had a lot of luck.\nA: What happened?\nB: I had a perfect day.",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
        {type:"teach",trg:"tuviste",src:"you had",pos:"verb",gender:null,phonetic:"too-VEES-teh",note:"Informal 'you' form. Stem: tuv- + -iste.",example:"A: ¿Tuviste tiempo para estudiar?\nB: No, no tuve tiempo.\nA: ¿Tuviste mucho trabajo?\nB: Sí, tuve tres reuniones.",exampleSrc:"A: Did you have time to study?\nB: No, I didn't have time.\nA: Did you have a lot of work?\nB: Yes, I had three meetings.",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
        {type:"teach",trg:"tuvo",src:"he/she had",pos:"verb",gender:null,phonetic:"TOO-vo",note:"Third person singular. Stem: tuv- + -o (no accent).",example:"A: Mi hermana tuvo un bebé.\nB: ¡Felicidades! ¿Tuvo niño o niña?\nA: Tuvo una niña.\nB: ¡Qué bonito!",exampleSrc:"A: My sister had a baby.\nB: Congratulations! Did she have a boy or girl?\nA: She had a girl.\nB: How lovely!",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
        {type:"verb_table",title:"Tener: pretérito indefinido",note:"Notice: no accent marks on tuve/tuvo, unlike regular verbs.",groups:[
          {
            label:"",
            rows:[{"0":"yo","1":"tuve"},{"0":"tú","1":"tuviste"},{"0":"él/ella/usted","1":"tuvo"},{"0":"nosotros","1":"tuvimos"},{"0":"ellos/ustedes","1":"tuvieron"}]
          }
        ],label:"Irregular stem: tuv-"},
        {type:"teach",trg:"hice",src:"I did / I made",pos:"verb",gender:null,phonetic:"EE-seh",note:"Hacer changes to 'hic-' stem. Yo form: hice.",example:"A: ¿Qué hiciste ayer?\nB: Hice la cena para mi familia.\nA: ¡Qué bien! Yo hice un pastel.\nB: ¡Delicioso!",exampleSrc:"A: What did you do yesterday?\nB: I made dinner for my family.\nA: How nice! I made a cake.\nB: Delicious!",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
        {type:"teach",trg:"hizo",src:"he/she did / made",pos:"verb",gender:null,phonetic:"EE-so",note:"Note: hizo (not hico). The c changes to z before o.",example:"A: ¿Quién hizo esta paella?\nB: La hizo mi madre.\nA: ¡Hizo un trabajo increíble!\nB: Sí, siempre hace buena comida.",exampleSrc:"A: Who made this paella?\nB: My mother made it.\nA: She did an incredible job!\nB: Yes, she always makes good food.",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
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
        {type:"teach",trg:"estuve",src:"I was (location/state)",pos:"verb",gender:null,phonetic:"es-TOO-veh",note:"Estar changes to 'estuv-' stem. Same endings as tener (tuve/estuve).",example:"A: ¿Dónde estuviste ayer?\nB: Estuve en casa todo el día.\nA: ¿Estuviste enfermo?\nB: Sí, estuve con fiebre.",exampleSrc:"A: Where were you yesterday?\nB: I was at home all day.\nA: Were you sick?\nB: Yes, I had a fever.",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
        {type:"teach",trg:"estuvo",src:"he/she was (location/state)",pos:"verb",gender:null,phonetic:"es-TOO-vo",note:"Third person singular. No accent on estuvo.",example:"A: ¿Dónde estuvo María anoche?\nB: Estuvo en el hospital.\nA: ¿Estuvo mucho tiempo?\nB: Estuvo tres horas.",exampleSrc:"A: Where was María last night?\nB: She was at the hospital.\nA: Was she there a long time?\nB: She was there three hours.",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
        {type:"teach",trg:"estuvimos",src:"we were (location/state)",pos:"verb",gender:null,phonetic:"es-too-VEE-mos",note:"First person plural. Stem: estuv- + -imos.",example:"A: ¿Estuvimos en este restaurante antes?\nB: Sí, estuvimos aquí en enero.\nA: ¡Claro! Estuvimos con tus padres.",exampleSrc:"A: Were we at this restaurant before?\nB: Yes, we were here in January.\nA: Of course! We were with your parents.",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
        {type:"tip",title:"The u-stem family",text:"Three important verbs share the same 'u-stem' pattern:\n\ntener: tuv- (tuve, tuviste, tuvo, tuvimos, tuvieron)\nestar: estuv- (estuve, estuviste, estuvo, estuvimos, estuvieron)\npoder: pud- (pude, pudiste, pudo, pudimos, pudieron)\n\nAll use the SAME endings with NO accent marks:\n-e, -iste, -o, -imos, -ieron\n\nLearn one, know three!"},
        {type:"teach",trg:"pude",src:"I could / I managed to",pos:"verb",gender:null,phonetic:"POO-deh",note:"Poder changes to 'pud-' stem. In past tense means 'managed to' or 'failed to'.",example:"A: ¿Pudiste terminar el proyecto?\nB: Sí, pude terminarlo anoche.\nA: ¡Qué bien! Yo no pude dormir.\nB: ¿Por qué no pudiste?",exampleSrc:"A: Were you able to finish the project?\nB: Yes, I managed to finish it last night.\nA: Great! I couldn't sleep.\nB: Why couldn't you?",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
        {type:"teach",trg:"pudo",src:"he/she could / managed to",pos:"verb",gender:null,phonetic:"POO-do",note:"Third person singular. No accent on pudo.",example:"A: ¿Tu hijo pudo aprobar el examen?\nB: Sí, pudo aprobar con buena nota.\nA: ¡Fantástico!\nB: No pudo creerlo.",exampleSrc:"A: Was your son able to pass the exam?\nB: Yes, he managed to pass with a good grade.\nA: Fantastic!\nB: He couldn't believe it.",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
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
        {type:"teach",trg:"puse",src:"I put / I placed",pos:"verb",gender:null,phonetic:"POO-seh",note:"Poner changes to 'pus-' stem. Same u-stem pattern as tener, estar, poder.",example:"A: ¿Dónde pusiste mis llaves?\nB: Las puse en la mesa.\nA: No están ahí. ¿Las puse yo en el bolso?\nB: ¡Sí! Las pusiste en el bolso.",exampleSrc:"A: Where did you put my keys?\nB: I put them on the table.\nA: They're not there. Did I put them in the bag?\nB: Yes! You put them in the bag.",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
        {type:"teach",trg:"puso",src:"he/she put",pos:"verb",gender:null,phonetic:"POO-so",note:"Third person singular. No accent on puso.",example:"A: ¿Quién puso la música?\nB: La puso mi hermano.\nA: ¡Puso una canción muy buena!\nB: Sí, él puso toda la lista.",exampleSrc:"A: Who put the music on?\nB: My brother put it on.\nA: He put on a really good song!\nB: Yes, he put on the whole playlist.",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
        {type:"verb_table",title:"Poner: pretérito indefinido",note:"Same u-stem pattern. Compare: tuve, estuve, pude, puse.",groups:[
          {
            label:"",
            rows:[{"0":"yo","1":"puse"},{"0":"tú","1":"pusiste"},{"0":"él/ella/usted","1":"puso"},{"0":"nosotros","1":"pusimos"},{"0":"ellos/ustedes","1":"pusieron"}]
          }
        ],label:"Irregular stem: pus-"},
        {type:"teach",trg:"supe",src:"I found out / I learned",pos:"verb",gender:null,phonetic:"SOO-peh",note:"Saber in past tense means 'found out', not just 'knew'. Stem: sup-.",example:"A: ¿Cuándo supiste la noticia?\nB: Lo supe ayer por la noche.\nA: Yo lo supe esta mañana.\nB: ¡Fue una gran sorpresa!",exampleSrc:"A: When did you find out the news?\nB: I found out last night.\nA: I found out this morning.\nB: It was a big surprise!",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
        {type:"teach",trg:"supo",src:"he/she found out",pos:"verb",gender:null,phonetic:"SOO-po",note:"Third person singular. Saber in past = discovery of information.",example:"A: ¿Tu madre supo la verdad?\nB: Sí, lo supo todo.\nA: ¿Cómo lo supo?\nB: Mi hermana se lo dijo.",exampleSrc:"A: Did your mother find out the truth?\nB: Yes, she found out everything.\nA: How did she find out?\nB: My sister told her.",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
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
        {type:"teach",trg:"dije",src:"I said / I told",pos:"verb",gender:null,phonetic:"DEE-heh",note:"Decir changes to 'dij-' stem. The j replaces the c.",example:"A: ¿Qué le dijiste a tu jefe?\nB: Le dije que necesitaba vacaciones.\nA: ¿Y qué dijo él?\nB: Dijo que sí.",exampleSrc:"A: What did you tell your boss?\nB: I told him I needed a vacation.\nA: And what did he say?\nB: He said yes.",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
        {type:"teach",trg:"dijo",src:"he/she said",pos:"verb",gender:null,phonetic:"DEE-ho",note:"Third person singular. Very common in everyday Spanish.",example:"A: ¿Qué dijo el doctor?\nB: Dijo que todo está bien.\nA: ¡Menos mal! Mi madre dijo que estaba preocupada.\nB: Dile que no hay problema.",exampleSrc:"A: What did the doctor say?\nB: He said everything is fine.\nA: Thank goodness! My mother said she was worried.\nB: Tell her there's no problem.",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
        {type:"teach",trg:"dijeron",src:"they said",pos:"verb",gender:null,phonetic:"dee-HEH-ron",note:"Note: dijeron, NOT dijieron. The j-stem drops the i in third person plural.",example:"A: ¿Qué dijeron tus padres?\nB: Dijeron que sí.\nA: ¿De verdad? Mis amigos dijeron que no.\nB: Cada familia es diferente.",exampleSrc:"A: What did your parents say?\nB: They said yes.\nA: Really? My friends said no.\nB: Every family is different.",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
        {type:"tip",title:"The i-stem verbs",text:"Decir and querer share an 'i-stem' pattern:\n\ndecir: dij- (dije, dijiste, dijo, dijimos, dijeron)\nquerer: quis- (quise, quisiste, quiso, quisimos, quisieron)\n\nImportant: third person plural is -eron (not -ieron) after j:\ndijeron (not dijieron)\n\nQuerer in past tense can mean 'tried to' or 'refused to':\n- Quise llamar = I tried to call\n- No quise ir = I refused to go"},
        {type:"teach",trg:"quise",src:"I wanted / I tried to",pos:"verb",gender:null,phonetic:"KEE-seh",note:"Querer changes to 'quis-' stem. In past: 'tried to' or 'refused to'.",example:"A: ¿Por qué no fuiste a la fiesta?\nB: No quise ir.\nA: ¿No quisiste ir? ¿Por qué?\nB: Quise quedarme en casa.",exampleSrc:"A: Why didn't you go to the party?\nB: I didn't want to go.\nA: You didn't want to go? Why?\nB: I wanted to stay at home.",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
        {type:"teach",trg:"quiso",src:"he/she wanted / tried to",pos:"verb",gender:null,phonetic:"KEE-so",note:"Third person singular. No quiso = he/she refused.",example:"A: ¿Tu hermano quiso venir?\nB: No, no quiso.\nA: ¿Quiso quedarse solo?\nB: Sí, quiso estudiar.",exampleSrc:"A: Did your brother want to come?\nB: No, he didn't want to.\nA: Did he want to stay alone?\nB: Yes, he wanted to study.",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
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
        {type:"teach",trg:"vine",src:"I came",pos:"verb",gender:null,phonetic:"VEE-neh",note:"Venir changes to 'vin-' stem. An i-stem verb like decir and querer.",example:"A: ¿A qué hora viniste?\nB: Vine a las ocho.\nA: ¡Viniste muy temprano!\nB: Sí, vine en taxi.",exampleSrc:"A: What time did you come?\nB: I came at eight.\nA: You came very early!\nB: Yes, I came by taxi.",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
        {type:"teach",trg:"vino",src:"he/she came",pos:"verb",gender:null,phonetic:"VEE-no",note:"Third person singular. Same word as 'wine' (el vino) but different meaning!",example:"A: ¿Vino tu padre a la reunión?\nB: Sí, vino con mi madre.\nA: ¿También vino tu hermana?\nB: No, ella no vino.",exampleSrc:"A: Did your father come to the meeting?\nB: Yes, he came with my mother.\nA: Did your sister come too?\nB: No, she didn't come.",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
        {type:"teach",trg:"di",src:"I gave",pos:"verb",gender:null,phonetic:"DEE",note:"Dar is short and unique. No accent on di/dio. Uses -er/-ir endings despite being -ar verb.",example:"A: ¿Qué le diste a tu madre?\nB: Le di flores.\nA: ¡Qué bonito! Yo le di un libro.\nB: Ella dio las gracias.",exampleSrc:"A: What did you give your mother?\nB: I gave her flowers.\nA: How nice! I gave her a book.\nB: She gave thanks.",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
        {type:"teach",trg:"dio",src:"he/she gave",pos:"verb",gender:null,phonetic:"DEE-o",note:"Third person singular. No accent mark on dio.",example:"A: ¿Quién te dio este regalo?\nB: Me lo dio mi abuela.\nA: Tu abuela siempre dio los mejores regalos.\nB: ¡Es verdad!",exampleSrc:"A: Who gave you this gift?\nB: My grandmother gave it to me.\nA: Your grandmother always gave the best gifts.\nB: That's true!",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
        {type:"teach",trg:"traje",src:"I brought",pos:"verb",gender:null,phonetic:"TRAH-heh",note:"Traer changes to 'traj-' stem. Like decir (dij-), uses j-stem.",example:"A: ¿Trajiste el pastel?\nB: Sí, lo traje.\nA: ¡Perfecto! Yo traje las bebidas.\nB: ¿Quién trajo los platos?",exampleSrc:"A: Did you bring the cake?\nB: Yes, I brought it.\nA: Perfect! I brought the drinks.\nB: Who brought the plates?",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
        {type:"teach",trg:"trajo",src:"he/she brought",pos:"verb",gender:null,phonetic:"TRAH-ho",note:"Third person singular. Like dijeron, third plural is trajeron (not trajieron).",example:"A: ¿Qué trajo María a la fiesta?\nB: Trajo una ensalada.\nA: Pedro trajo postre.\nB: ¡Todos trajeron algo!",exampleSrc:"A: What did María bring to the party?\nB: She brought a salad.\nA: Pedro brought dessert.\nB: Everyone brought something!",funFact:"Spanish verbs encode the subject in their ending, so pronouns are often dropped."},
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
        {type:"teach",trg:"el fin de semana pasado",src:"last weekend",pos:"noun",gender:"m",phonetic:"el feen deh seh-MAH-nah pah-SAH-do",note:"Common time expression for past narratives.",example:"A: ¿Qué hiciste el fin de semana pasado?\nB: Fui a la montaña.\nA: ¿Y qué tal?\nB: Fue increíble.",exampleSrc:"A: What did you do last weekend?\nB: I went to the mountain.\nA: And how was it?\nB: It was incredible.",funFact:"Masculine noun. Spanish words ending in -o are usually masculine."},
        {type:"teach",trg:"primero... luego... después",src:"first... then... after that",pos:"intj",gender:null,phonetic:"pree-MEH-ro... LWEH-go... des-PWEHS",note:"Sequence words to structure past narratives.",example:"A: ¿Qué hiciste ayer?\nB: Primero fui al gimnasio.\nA: ¿Y luego?\nB: Luego comí y después estudié.",exampleSrc:"A: What did you do yesterday?\nB: First I went to the gym.\nA: And then?\nB: Then I ate and after that I studied.",funFact:"Spanish is the fourth most spoken language worldwide, with 500+ million native speakers."},
        {type:"teach",trg:"por eso",src:"that's why / because of that",pos:"conj",gender:null,phonetic:"por EH-so",note:"Useful connector for explaining reasons in a narrative.",example:"A: ¿Por qué no viniste ayer?\nB: Estuve enfermo, por eso no vine.\nA: ¡Qué pena! ¿Ya estás mejor?\nB: Sí, gracias.",exampleSrc:"A: Why didn't you come yesterday?\nB: I was sick, that's why I didn't come.\nA: What a shame! Are you better now?\nB: Yes, thank you.",funFact:"Spanish conjunctions are essential for building longer sentences and expressing complex ideas."},
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
  ,{type:"match",pairs:[{trg:"el fin de semana pasado",src:"last weekend"},{trg:"primero... luego... después",src:"first... then... after that"},{trg:"por eso",src:"that's why / because of that"}]}]}
]};
