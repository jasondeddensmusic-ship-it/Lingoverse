// B2 Gap Batch 8 Lesson 17 - Sports & Competition
const LESSON_17 = {id:"esv2_b2g8_l17",title:"Deporte y competición",icon:"⚽",xp:15,board:true,steps:[
{type:"intro",title:"Deporte y competición",desc:"Learn vocabulary for sports, competition, and athletic life in Spain.",goals:["Learn 14 sports and competition terms","Discuss athletic events and fitness","Use sports vocabulary naturally"]},

{type:"teach",trg:"el contragolpe",src:"the counterattack",pos:"noun",gender:"m",
 note:"Masculine noun. A rapid attack after defending.\nContra (against) + golpe (blow). Key football term.",
 example:"A: El contragolpe del Real Madrid fue letal.\nB: Marcaron tres goles en los últimos diez minutos.",
 exampleSrc:"A: Real Madrid's counterattack was lethal.\nB: They scored three goals in the last ten minutes.",
 funFact:"Spanish football invented the modern counter-attacking style. Real Madrid's 'contragolpe' is legendary."},

{type:"teach",trg:"el marcador",src:"the scoreboard / marker",pos:"noun",gender:"m",
 note:"Masculine noun. The display showing the score, or a marker/pen.\nAbrir el marcador = to open the scoring.",
 example:"A: ¿Cómo va el marcador?\nB: Dos a uno a favor del Barça, con quince minutos por jugar.",
 exampleSrc:"A: What is the score?\nB: Two to one in favor of Barca, with fifteen minutes left to play.",
 funFact:"'Abrir el marcador' (to open the scoreboard) and 'empatar el marcador' (to level) are essential football phrases."},

{type:"teach",trg:"deportiva",src:"sporty / athletic (f adj)",pos:"adj",gender:null,
 note:"Adjective. Related to sports.\nMasculine: deportivo. Ropa deportiva = sportswear.",
 example:"A: Lleva una vida muy deportiva desde que era joven.\nB: Se nota. Está en una forma física increíble.",
 exampleSrc:"A: He has led a very sporty life since he was young.\nB: You can tell. He is in incredible physical shape.",
 funFact:"Real Club Deportivo Espanyol and Deportivo de La Coruña are major clubs with 'deportivo' in their names."},

{type:"teach",trg:"el mediocampo",src:"the midfield",pos:"noun",gender:"m",
 note:"Masculine noun. The central area of a football pitch.\nMedio (middle) + campo (field).",
 example:"A: El mediocampo del equipo es muy creativo.\nB: Son los que controlan el ritmo del partido.",
 exampleSrc:"A: The team's midfield is very creative.\nB: They are the ones who control the pace of the match.",
 funFact:"Spain's famous 'tiki-taka' style relies on total midfield dominance. Xavi and Iniesta were its masters."},

{type:"mc",q:"¿Qué es un contragolpe en fútbol?",
 opts:["Un ataque rápido tras defender","Una falta grave","Un tiro libre","Un cambio de jugador"],
 ans:"Un ataque rápido tras defender",
 hint:"When a team defends, wins the ball, and attacks very quickly. A counter-..."},

{type:"teach",trg:"el jaque",src:"the check (in chess)",pos:"noun",gender:"m",
 note:"Masculine noun. A threat to the king in chess.\nJaque mate = checkmate. From Arabic shah (king).",
 example:"A: ¡Jaque! Tu rey está amenazado.\nB: No me había dado cuenta. Déjame pensar.",
 exampleSrc:"A: Check! Your king is threatened.\nB: I had not noticed. Let me think.",
 funFact:"From Arabic 'shah' (king) via Persian. 'Jaque mate' comes from 'shah mat' (the king is dead)."},

{type:"teach",trg:"el bolillo",src:"the bobbin (for lace) / bread roll",pos:"noun",gender:"m",
 note:"Masculine noun. A wooden tool for making lace, or a type of bread roll.\nDiminutive of bolo.",
 example:"A: Mi abuela hacía encaje de bolillos con una destreza impresionante.\nB: Es un arte que se está perdiendo.",
 exampleSrc:"A: My grandmother made bobbin lace with impressive skill.\nB: It is an art that is being lost.",
 funFact:"'Encaje de bolillos' literally means bobbin lace, but figuratively it means something extremely complex."},

{type:"teach",trg:"la cobra",src:"the cobra",pos:"noun",gender:"f",
 note:"Feminine noun. A venomous hooded snake.\nAlso a technique in football: flicking the ball with the heel.",
 example:"A: La cobra del delantero dejó al portero inmóvil.\nB: Es el gol más bonito de la temporada.",
 exampleSrc:"A: The striker's cobra flick left the goalkeeper motionless.\nB: It is the most beautiful goal of the season.",
 funFact:"In football, a 'cobra' is a backheel flick. Ricardo Quaresma popularized the technique."},

{type:"fb",s:"El {1} mostraba un empate a cero cuando comenzó la segunda parte.",
 a:["marcador"],opts:["marcador","mediocampo","contragolpe","jaque"],
 hint:"The display that shows the current score of a match. Empate a cero = 0-0 draw.",
 sSrc:"The {1} showed a goalless draw when the second half began."},

{type:"teach",trg:"la madrastra",src:"the stepmother",pos:"noun",gender:"f",
 note:"Feminine noun. The wife of one's father who is not one's birth mother.\nMadre + -astra (pejorative suffix).",
 example:"A: Su madrastra fue quien la animó a practicar atletismo.\nB: A veces las familias mixtas son muy buenas.",
 exampleSrc:"A: It was her stepmother who encouraged her to practice athletics.\nB: Sometimes blended families are very good.",
 funFact:"The -astra/-astro suffix comes from Latin and implies a replacement: madrastra, padrastro, hijastro."},

{type:"teach",trg:"el concursante",src:"the contestant",pos:"noun",gender:"m",
 note:"Masculine noun. A person competing in a contest or competition.\nFeminine: la concursante.",
 example:"A: Los concursantes de la maratón llevan meses entrenando.\nB: Participan más de diez mil corredores este año.",
 exampleSrc:"A: The marathon contestants have been training for months.\nB: More than ten thousand runners are participating this year.",
 funFact:"Spain's most popular running event is the San Silvestre Vallecana in Madrid every New Year's Eve."},

{type:"teach",trg:"el accidentado",src:"the accident victim / uneven terrain",pos:"noun",gender:"m",
 note:"Masculine noun. A person injured in an accident. As adjective: rugged, eventful.\nFrom accidente.",
 example:"A: El terreno accidentado hizo la carrera muy difícil.\nB: Varios corredores se cayeron en la bajada.",
 exampleSrc:"A: The rugged terrain made the race very difficult.\nB: Several runners fell on the descent.",
 funFact:"As an adjective, 'accidentado' describes both rough terrain and eventful situations: 'un viaje accidentado'."},

{type:"mc",q:"¿De qué idioma viene la palabra 'jaque' del ajedrez?",
 opts:["Del italiano","Del árabe","Del inglés","Del francés"],
 ans:"Del árabe",
 hint:"Chess terminology in Spanish came through Arabic-speaking cultures in medieval Al-Andalus."},

{type:"teach",trg:"el liguero",src:"the league-related (adj) / garter",pos:"noun",gender:"m",
 note:"Adjective (also noun). Related to a sports league.\nPartido liguero = league match.",
 example:"A: El calendario liguero es muy apretado este año.\nB: Juegan dos partidos por semana durante dos meses.",
 exampleSrc:"A: The league calendar is very tight this year.\nB: They play two matches per week for two months.",
 funFact:"La Liga (Spain's top football league) is one of the world's most watched sporting competitions."},

{type:"teach",trg:"el día",src:"the day",pos:"noun",gender:"m",
 note:"Masculine noun (despite ending in -a). A 24-hour period.\nHoy en día = nowadays.",
 example:"A: Hoy en día, los deportistas profesionales ganan millones.\nB: Pero pocos llegan a ese nivel de éxito.",
 exampleSrc:"A: Nowadays, professional athletes earn millions.\nB: But few reach that level of success.",
 funFact:"'Día' is masculine despite ending in -a because it comes from Latin 'dies' (m). Like 'el mapa', 'el problema'."},

{type:"fb",s:"El terreno {1} de la montaña hizo imposible completar la etapa.",
 a:["accidentado"],opts:["accidentado","deportivo","liguero","marcador"],
 hint:"Rough, uneven terrain with many obstacles. From 'accidente' (accident/feature).",
 sSrc:"The {1} mountain terrain made it impossible to complete the stage."},

{type:"match",pairs:[
 {trg:"el contragolpe",src:"counterattack"},
 {trg:"el mediocampo",src:"midfield"},
 {trg:"el jaque",src:"check (chess)"},
 {trg:"el concursante",src:"contestant"},
 {trg:"liguero",src:"league-related"}
]}
]};
export default LESSON_17;
