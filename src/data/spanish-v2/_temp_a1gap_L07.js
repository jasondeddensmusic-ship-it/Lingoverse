// L07: Body & Health — Physical self and wellbeing
const LESSON_7 = {
  id:"esv2_a1gap_l7", title:"El cuerpo", icon:"\u{1F4AA}", xp:15, board:true,
  steps:[
    {type:"intro", title:"El cuerpo",
     desc:"Learn to talk about the body and personal care. Essential vocabulary for health and daily routines.",
     goals:["Learn 20 body and health words","Describe physical appearance","Talk about personal care routines"]},

    {type:"teach", trg:"la boca", src:"the mouth", pos:"noun", gender:"f",
     note:"Feminine noun. Abrir la boca = to open your mouth.\nBoca abajo = face down.",
     example:"A: Abre la boca.\nB: \u00bfPor qué?\nA: Tienes algo en los dientes.",
     exampleSrc:"A: Open your mouth.\nB: Why?\nA: You have something on your teeth.",
     funFact:"From Latin 'bucca' (cheek), which shifted to mean mouth. 'Bocadillo' (sandwich) comes from 'boca'."},

    {type:"teach", trg:"la barba", src:"the beard", pos:"noun", gender:"f",
     note:"Feminine noun. Dejarse barba = to grow a beard.\nBarba is the facial hair.",
     example:"A: Me gusta tu barba.\nB: Gracias, me la dejé este verano.",
     exampleSrc:"A: I like your beard.\nB: Thanks, I grew it this summer.",
     funFact:"From Latin 'barba'. The word 'barbero' (barber) comes from the same root. Barbers originally only dealt with beards."},

    {type:"teach", trg:"el bigote", src:"the moustache", pos:"noun", gender:"m",
     note:"Masculine noun. Bigote = moustache only, not full beard.\nSalvador Dalí had a famous bigote.",
     example:"A: Mi abuelo tiene un bigote enorme.\nB: Como Dalí.",
     exampleSrc:"A: My grandfather has an enormous moustache.\nB: Like Dalí.",
     funFact:"Possibly from German 'bei Gott' (by God), an oath associated with German soldiers. The origin is debated."},

    {type:"teach", trg:"bañar", src:"to bathe", pos:"verb", gender:null,
     note:"Regular -ar verb. Reflexive: bañarse = to take a bath/swim.\nMe baño = I bathe.",
     example:"A: \u00bfTe bañas por la mañana?\nB: Sí, me baño todos los días.",
     exampleSrc:"A: Do you bathe in the morning?\nB: Yes, I bathe every day.",
     funFact:"From Latin 'balneare' (to bathe). In Spanish, 'bañarse' also means to swim at the beach: 'Vamos a bañarnos'."},

    {type:"teach", trg:"afeitar", src:"to shave", pos:"verb", gender:null,
     note:"Regular -ar verb. Reflexive: afeitarse = to shave (yourself).\nMe afeito = I shave.",
     example:"A: \u00bfTe afeitas todos los días?\nB: No, solo los lunes y jueves.",
     exampleSrc:"A: Do you shave every day?\nB: No, only on Mondays and Thursdays.",
     funFact:"From Old French 'afaitier' (to prepare, adorn). Originally meant to make oneself presentable, then narrowed to shaving."},

    {type:"teach", trg:"el bañador", src:"the swimsuit", pos:"noun", gender:"m",
     note:"Masculine noun. From bañar + -dor (agent suffix).\nIn Latin America: traje de baño.",
     example:"A: \u00bfTraes el bañador?\nB: Sí, vamos a la playa.",
     exampleSrc:"A: Are you bringing the swimsuit?\nB: Yes, we are going to the beach.",
     funFact:"The -dor suffix makes agent nouns: bañador (thing for bathing), ordenador (thing for ordering = computer)."},

    {type:"mc",
     q:"\u00bfQué necesitas para ir a la playa?",
     opts:["el bañador","la barba","el bigote","la boca"],
     ans:"el bañador",
     hint:"Think about what clothing you wear specifically for swimming at the beach."},

    {type:"teach", trg:"el anillo", src:"the ring", pos:"noun", gender:"m",
     note:"Masculine noun. Anillo de boda = wedding ring.\nAnillo de compromiso = engagement ring.",
     example:"A: \u00bfQué bonito anillo!\nB: Es mi anillo de boda.",
     exampleSrc:"A: What a beautiful ring!\nB: It is my wedding ring.",
     funFact:"From Latin 'anellus', diminutive of 'anus' (ring, circle). The word refers to the circular shape."},

    {type:"teach", trg:"el arete", src:"the earring", pos:"noun", gender:"m",
     note:"Masculine noun. Plural: los aretes.\nIn Spain also: pendiente (more common).",
     example:"A: Me gustan tus aretes.\nB: Gracias, son de plata.",
     exampleSrc:"A: I like your earrings.\nB: Thanks, they are silver.",
     funFact:"From 'aro' (hoop, ring). In Spain, 'pendiente' is more common. In Latin America, 'arete' is the standard word."},

    {type:"teach", trg:"activo", src:"active", pos:"adj", gender:null,
     note:"Adjective. Activo/activa.\nVida activa = active lifestyle.",
     example:"A: Mi abuela es muy activa.\nB: \u00bfQué hace?\nA: Camina todos los días.",
     exampleSrc:"A: My grandmother is very active.\nB: What does she do?\nA: She walks every day.",
     funFact:"From Latin 'activus' (doing). Nearly identical in all Romance languages and English."},

    {type:"teach", trg:"agudo", src:"sharp, acute", pos:"adj", gender:null,
     note:"Adjective. Agudo/aguda.\nDolor agudo = sharp pain. Also: high-pitched (sound).",
     example:"A: Tengo un dolor agudo en la espalda.\nB: Deberías ir al médico.",
     exampleSrc:"A: I have a sharp pain in my back.\nB: You should go to the doctor.",
     funFact:"From Latin 'acutus' (sharpened). In Spanish phonetics, 'aguda' describes words stressed on the last syllable."},

    {type:"fb",
     s:"Me {1} todos los días por la mañana antes de desayunar.",
     a:["baño"],
     opts:["baño","afeito","boca","bigote"],
     hint:"This reflexive verb describes the daily hygiene routine of washing your whole body.",
     sSrc:"I {1} every day in the morning before having breakfast."},

    {type:"teach", trg:"la belleza", src:"beauty", pos:"noun", gender:"f",
     note:"Feminine noun. Salón de belleza = beauty salon.\nFrom bello (beautiful).",
     example:"A: La belleza de esta ciudad es increíble.\nB: Sí, es preciosa.",
     exampleSrc:"A: The beauty of this city is incredible.\nB: Yes, it is gorgeous.",
     funFact:"From Latin 'bellus' (pretty). The phrase 'Bella durmiente' (Sleeping Beauty) shows the adjective form."},

    {type:"teach", trg:"bello", src:"beautiful", pos:"adj", gender:null,
     note:"Adjective. Bello/bella.\nMore literary/formal than 'bonito' or 'guapo'.",
     example:"A: Es un lugar muy bello.\nB: Sí, la naturaleza aquí es increíble.",
     exampleSrc:"A: It is a very beautiful place.\nB: Yes, the nature here is incredible.",
     funFact:"From Latin 'bellus'. In everyday Spanish, 'bonito', 'guapo', or 'hermoso' are more common. 'Bello' sounds poetic."},

    {type:"teach", trg:"blando", src:"soft", pos:"adj", gender:null,
     note:"Adjective. Blando/blanda.\nOpposite of duro (hard). Queso blando = soft cheese.",
     example:"A: Este colchón es muy blando.\nB: A mí me gusta blando.",
     exampleSrc:"A: This mattress is very soft.\nB: I like it soft.",
     funFact:"From Latin 'blandus' (flattering, smooth). The meaning shifted from 'charming' to 'soft' over the centuries."},

    {type:"teach", trg:"ancho", src:"wide, broad", pos:"adj", gender:null,
     note:"Adjective. Ancho/ancha.\nOpposite of estrecho (narrow). Calle ancha = wide street.",
     example:"A: Esta calle es muy ancha.\nB: Sí, caben muchos coches.",
     exampleSrc:"A: This street is very wide.\nB: Yes, many cars fit.",
     funFact:"From Latin 'amplus' (spacious), through an intermediate form. Castilla (Castile) was known for its wide open plains."},

    {type:"mc",
     q:"\u00bfCuál es lo contrario de 'duro'?",
     opts:["blando","ancho","agudo","bello"],
     ans:"blando",
     hint:"Think about the texture of a soft pillow or fresh bread. The opposite of hard."},

    {type:"teach", trg:"bajito", src:"short (height), small", pos:"adj", gender:null,
     note:"Adjective. Bajito/bajita. Diminutive of bajo (short).\nAffectionate version.",
     example:"A: Mi hermana es bajita.\nB: Pero es muy fuerte.",
     exampleSrc:"A: My sister is short.\nB: But she is very strong.",
     funFact:"The -ito/-ita suffix adds affection or smallness. Bajito feels warmer than 'bajo'. Spanish loves diminutives."},

    {type:"teach", trg:"amplio", src:"spacious, broad", pos:"adj", gender:null,
     note:"Adjective. Amplio/amplia.\nUn salón amplio = a spacious living room.",
     example:"A: El apartamento es muy amplio.\nB: Sí, tiene tres habitaciones.",
     exampleSrc:"A: The apartment is very spacious.\nB: Yes, it has three bedrooms.",
     funFact:"From Latin 'amplus' (large, spacious). English 'ample' comes from the same root."},

    {type:"teach", trg:"antiguo", src:"old, ancient", pos:"adj", gender:null,
     note:"Adjective. Antiguo/antigua.\nBefore the noun: former. After: ancient, old.",
     example:"A: Esta es una iglesia muy antigua.\nB: \u00bfDe qué siglo?\nA: Del siglo XII.",
     exampleSrc:"A: This is a very old church.\nB: From which century?\nA: From the 12th century.",
     funFact:"From Latin 'antiquus'. Before the noun it means 'former': mi antiguo profesor (my former teacher). After: ancient."},

    {type:"match", pairs:[
      {trg:"boca", src:"mouth"},
      {trg:"barba", src:"beard"},
      {trg:"anillo", src:"ring"},
      {trg:"belleza", src:"beauty"},
      {trg:"bañador", src:"swimsuit"}
    ]},

    {type:"fb",
     s:"Salvador Dalí tenía un {1} muy famoso y muy largo.",
     a:["bigote"],
     opts:["bigote","anillo","arete","bañador"],
     hint:"This is the facial hair that grows above the upper lip. A famous surrealist painter was known for his.",
     sSrc:"Salvador Dalí had a very famous and very long {1}."},
  ]
};
export default LESSON_7;
