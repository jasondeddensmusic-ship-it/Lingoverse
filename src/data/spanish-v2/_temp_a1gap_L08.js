// L08: Feelings & Personality — Emotions and character
const LESSON_8 = {
  id:"esv2_a1gap_l8", title:"Cómo me siento", icon:"\u{1F60A}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Cómo me siento",
     desc:"Express how you feel and describe personality. Essential emotional vocabulary for real conversations.",
     goals:["Learn 20 feeling and personality words","Describe emotions and moods","Talk about character traits"]},

    {type:"teach", trg:"alegre", src:"happy, cheerful", pos:"adj", gender:null,
     note:"Adjective. Same form for masculine and feminine.\nEstoy alegre = I am cheerful.",
     example:"A: Hoy estoy muy alegre.\nB: \u00bfPor qué?\nA: Porque es viernes.",
     exampleSrc:"A: Today I am very cheerful.\nB: Why?\nA: Because it is Friday.",
     funFact:"From Catalan/Provençal 'alegre'. Notice Spanish uses 'estar' (not 'ser') for temporary moods: 'estoy alegre'."},

    {type:"teach", trg:"antipático", src:"unfriendly, unpleasant", pos:"adj", gender:null,
     note:"Adjective. Antipático/antipática.\nOpposite of simpático (friendly).",
     example:"A: El camarero es un poco antipático.\nB: Sí, no sonríe nunca.",
     exampleSrc:"A: The waiter is a bit unfriendly.\nB: Yes, he never smiles.",
     funFact:"From Greek 'antipatheia' (aversion). Notice the prefix 'anti-' (against) + 'pathos' (feeling)."},

    {type:"teach", trg:"aburrir", src:"to bore", pos:"verb", gender:null,
     note:"Regular -ir verb. Me aburro = I am bored.\nAburrido = bored/boring (context matters).",
     example:"A: Esta película me aburre.\nB: Vamos a ver otra.",
     exampleSrc:"A: This movie bores me.\nB: Let's watch another one.",
     funFact:"'Aburrido' changes meaning with ser/estar: 'Es aburrido' (he is boring), 'Está aburrido' (he is bored). Very important distinction."},

    {type:"teach", trg:"asustar", src:"to scare, to frighten", pos:"verb", gender:null,
     note:"Regular -ar verb. Reflexive: asustarse = to get scared.\nMe asusto fácilmente.",
     example:"A: \u00a1No me asustes!\nB: Perdona, no era mi intención.",
     exampleSrc:"A: Don't scare me!\nB: Sorry, it was not my intention.",
     funFact:"Possibly from Vulgar Latin 'extonare' (to thunder at), or related to 'susto' (fright). 'Qué susto' means 'What a fright'."},

    {type:"teach", trg:"amoroso", src:"loving, affectionate", pos:"adj", gender:null,
     note:"Adjective. Amoroso/amorosa.\nUna persona amorosa = a loving person.",
     example:"A: Mi madre es muy amorosa.\nB: Se nota que te quiere mucho.",
     exampleSrc:"A: My mother is very loving.\nB: You can tell she loves you a lot.",
     funFact:"The -oso suffix means 'full of': amoroso (full of love), generoso (full of generosity), curioso (full of curiosity)."},

    {type:"teach", trg:"ambicioso", src:"ambitious", pos:"adj", gender:null,
     note:"Adjective. Ambicioso/ambiciosa.\nCan be positive or slightly negative in Spanish.",
     example:"A: Es una mujer muy ambiciosa.\nB: Sí, trabaja mucho.",
     exampleSrc:"A: She is a very ambitious woman.\nB: Yes, she works a lot.",
     funFact:"From Latin 'ambitiosus' (eager for favor). In Spanish, context determines whether it is praise or criticism."},

    {type:"mc",
     q:"\u00bfCuál es lo contrario de 'antipático'?",
     opts:["simpático","alegre","amoroso","ambicioso"],
     ans:"simpático",
     hint:"The opposite of unfriendly is the word that means friendly and likeable, starting with 's'."},

    {type:"teach", trg:"atractivo", src:"attractive", pos:"adj", gender:null,
     note:"Adjective. Atractivo/atractiva.\nPhysically or personally attractive.",
     example:"A: Es una persona muy atractiva.\nB: Sí, y además es simpática.",
     exampleSrc:"A: He/she is a very attractive person.\nB: Yes, and also friendly.",
     funFact:"From Latin 'attractivus' (drawing toward). In Spanish, can describe appearance, personality, or even a place."},

    {type:"teach", trg:"atrever", src:"to dare", pos:"verb", gender:null,
     note:"Regular -er verb. Always reflexive: atreverse.\nMe atrevo = I dare. No me atrevo = I don't dare.",
     example:"A: \u00bfTe atreves a saltar?\nB: No me atrevo, es muy alto.",
     exampleSrc:"A: Do you dare to jump?\nB: I don't dare, it is too high.",
     funFact:"From Latin 'attribuere' (to assign to oneself). The reflexive form is mandatory: you cannot say 'atrevo' alone."},

    {type:"teach", trg:"la ambición", src:"ambition", pos:"noun", gender:"f",
     note:"Feminine noun. Tener ambición = to have ambition.\nAbstract noun ending in -ción.",
     example:"A: Tiene mucha ambición.\nB: Eso es bueno, pero necesita paciencia.",
     exampleSrc:"A: He has a lot of ambition.\nB: That is good, but he needs patience.",
     funFact:"From Latin 'ambitio' (going around canvassing for votes). The original meaning was about political campaigning."},

    {type:"teach", trg:"el aspecto", src:"the appearance, aspect", pos:"noun", gender:"m",
     note:"Masculine noun. Buen aspecto = good appearance.\nTener buen aspecto = to look well.",
     example:"A: Tienes muy buen aspecto hoy.\nB: Gracias, he dormido bien.",
     exampleSrc:"A: You look very good today.\nB: Thanks, I slept well.",
     funFact:"From Latin 'aspectus' (a look, a view). In everyday Spanish, it is a polite way to comment on someone's appearance."},

    {type:"fb",
     s:"Esta película es muy aburrida. Me {1} mucho.",
     a:["aburre"],
     opts:["aburre","asusta","alegra","atrae"],
     hint:"When something is not interesting and makes you feel bored, it does this to you.",
     sSrc:"This movie is very boring. It {1} me a lot."},

    {type:"teach", trg:"altruista", src:"altruistic, selfless", pos:"adj", gender:null,
     note:"Adjective. Same form for both genders.\nUna persona altruista = a selfless person.",
     example:"A: Es una persona muy altruista.\nB: Sí, siempre ayuda a los demás.",
     exampleSrc:"A: He/she is a very altruistic person.\nB: Yes, he/she always helps others.",
     funFact:"From French 'altruiste', coined by philosopher Auguste Comte from Italian 'altrui' (of others). A relatively modern word."},

    {type:"teach", trg:"bobo", src:"silly, foolish", pos:"adj", gender:null,
     note:"Adjective. Bobo/boba. Informal, usually affectionate.\nNo seas bobo = Don't be silly.",
     example:"A: No seas bobo, ven aquí.\nB: Solo estaba bromeando.",
     exampleSrc:"A: Don't be silly, come here.\nB: I was only joking.",
     funFact:"From Latin 'balbus' (stuttering). The meaning shifted from speech impediment to general silliness. Usually affectionate, not cruel."},

    {type:"teach", trg:"atención", src:"attention", pos:"noun", gender:"f",
     note:"Feminine noun. Prestar atención = to pay attention.\nCon atención = carefully.",
     example:"A: Presta atención en clase.\nB: Sí, lo intento.",
     exampleSrc:"A: Pay attention in class.\nB: Yes, I am trying.",
     funFact:"From Latin 'attentio'. The expression 'llamar la atención' can mean to attract attention or to scold someone."},

    {type:"teach", trg:"el acontecimiento", src:"the event, happening", pos:"noun", gender:"m",
     note:"Masculine noun. A major or important event.\nFrom acontecer (to happen).",
     example:"A: La boda fue un gran acontecimiento.\nB: Sí, vinieron cien personas.",
     exampleSrc:"A: The wedding was a big event.\nB: Yes, a hundred people came.",
     funFact:"From 'acontecer' (to happen), itself from Latin 'contingere'. Used for significant events, not everyday occurrences."},

    {type:"teach", trg:"la anécdota", src:"the anecdote", pos:"noun", gender:"f",
     note:"Feminine noun. Contar una anécdota = to tell an anecdote.\nShort amusing story.",
     example:"A: Te cuento una anécdota.\nB: Dale, me gustan las historias.",
     exampleSrc:"A: Let me tell you an anecdote.\nB: Go ahead, I like stories.",
     funFact:"From Greek 'anekdota' (things unpublished). Originally meant secret stories about famous people."},

    {type:"mc",
     q:"\u00bfQué significa 'prestar atención'?",
     opts:["to pay attention","to lend money","to frighten","to be bored"],
     ans:"to pay attention",
     hint:"The verb 'prestar' here means 'to give' and the noun means 'focus'. Together: to give your focus."},

    {type:"teach", trg:"ahorrar", src:"to save (money)", pos:"verb", gender:null,
     note:"Regular -ar verb. Ahorro, ahorras...\nAhorrar dinero = to save money. Ahorrar tiempo = save time.",
     example:"A: Necesito ahorrar más dinero.\nB: \u00bfPara qué?\nA: Para viajar.",
     exampleSrc:"A: I need to save more money.\nB: For what?\nA: To travel.",
     funFact:"From Arabic 'hurr' (free), via 'horro' (freed slave who kept his earnings). Saving money = keeping what is freed."},

    {type:"teach", trg:"el ahorro", src:"savings", pos:"noun", gender:"m",
     note:"Masculine noun. Los ahorros = savings (money saved up).\nCuenta de ahorros = savings account.",
     example:"A: Mis ahorros están en el banco.\nB: Es importante ahorrar.",
     exampleSrc:"A: My savings are in the bank.\nB: It is important to save.",
     funFact:"The noun form of 'ahorrar'. Having a 'hucha' (piggy bank) is a tradition for teaching children about savings."},

    {type:"match", pairs:[
      {trg:"alegre", src:"cheerful"},
      {trg:"antipático", src:"unfriendly"},
      {trg:"ambicioso", src:"ambitious"},
      {trg:"atractivo", src:"attractive"},
      {trg:"bobo", src:"silly"}
    ]},

    {type:"fb",
     s:"No me {1} a saltar desde tan alto. Tengo miedo.",
     a:["atrevo"],
     opts:["atrevo","aburro","asusto","ahorro"],
     hint:"This reflexive verb means to have the courage or nerve to do something risky.",
     sSrc:"I don't {1} to jump from so high. I am afraid."},
  ]
};
export default LESSON_8;
