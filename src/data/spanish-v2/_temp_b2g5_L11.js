// B2 Gap Batch 5 Lesson 11 - Family & Relationships
const LESSON_11 = {id:"esv2_b2g5_l11",title:"Familia y relaciones",icon:"👨‍👩‍👧",xp:15,board:true,steps:[
{type:"intro",title:"Familia y relaciones",desc:"Learn vocabulary about family structures, childhood, and interpersonal relationships.",goals:["Learn 15 words about family and relationships","Discuss family dynamics and upbringing","Use nuanced vocabulary for personal bonds"]},

{type:"teach",trg:"el hermanastro",src:"the stepbrother",pos:"noun",gender:"m",
 note:"Masculine noun. A brother by marriage, not by blood.\nFeminine: la hermanastra.",
 example:"A: Mi hermanastro vive en Barcelona desde hace cinco años.\nB: ¿Os lleváis bien?",
 exampleSrc:"A: My stepbrother has been living in Barcelona for five years.\nB: Do you get along?",
 funFact:"The suffix -astro/-astra indicates a step-relation: padrastro (stepfather), madrastra (stepmother)."},

{type:"teach",trg:"el huérfano",src:"the orphan",pos:"noun",gender:"m",
 note:"Masculine noun. A child whose parents have died.\nFeminine: la huérfana. Also adjective.",
 example:"A: Muchos huérfanos de la guerra fueron acogidos por familias.\nB: Fue un acto de gran solidaridad.",
 exampleSrc:"A: Many war orphans were taken in by families.\nB: It was an act of great solidarity.",
 funFact:"From Latin orphanus, from Greek orphanos. Spain had thousands of orphans after the Civil War (1936-39)."},

{type:"teach",trg:"el adulto",src:"the adult",pos:"noun",gender:"m",
 note:"Masculine noun. A person who is fully grown.\nFeminine: la adulta. Also adjective.",
 example:"A: Los adultos deberían dar mejor ejemplo a los niños.\nB: Estoy completamente de acuerdo.",
 exampleSrc:"A: Adults should set a better example for children.\nB: I completely agree.",
 funFact:"In Spain, legal adulthood begins at 18, but you can get a driver's license at 18 and drink at 18."},

{type:"teach",trg:"la compenetración",src:"the rapport / mutual understanding",pos:"noun",gender:"f",
 note:"Feminine noun. Deep mutual understanding between people.\nFrom compenetrarse (to understand each other deeply).",
 example:"A: La compenetración entre ellos es asombrosa.\nB: Se entienden sin necesidad de hablar.",
 exampleSrc:"A: The rapport between them is amazing.\nB: They understand each other without needing to talk.",
 funFact:"Literally 'co-penetration' of minds. Often used for sports teams, musical duos, and married couples."},

{type:"teach",trg:"la desnudez",src:"the nakedness / nudity",pos:"noun",gender:"f",
 note:"Feminine noun. The state of being unclothed.\nAlso figurative: emotional vulnerability.",
 example:"A: La desnudez emocional de su poesía conmueve al lector.\nB: Escribe desde lo más profundo del alma.",
 exampleSrc:"A: The emotional nakedness of his poetry moves the reader.\nB: He writes from the depths of the soul.",
 funFact:"From desnudo (naked). Spain is notably relaxed about nudity on beaches compared to many countries."},

{type:"mc",q:"¿Qué indica el sufijo '-astro' en 'hermanastro'?",opts:["Que es un familiar por matrimonio, no de sangre","Que es un familiar lejano","Que es mayor que tú","Que es un familiar adoptado"],ans:"Que es un familiar por matrimonio, no de sangre",hint:"This suffix signals a family relationship through a parent's new marriage, not biology."},

{type:"teach",trg:"la extrañeza",src:"the strangeness / surprise",pos:"noun",gender:"f",
 note:"Feminine noun. The quality of being strange, or a feeling of surprise.\nFrom extraño (strange).",
 example:"A: Me causó extrañeza que no viniera a la fiesta.\nB: A mí también. Siempre viene.",
 exampleSrc:"A: It surprised me that he didn't come to the party.\nB: Me too. He always comes.",
 funFact:"'Causar extrañeza' (to cause surprise) is more formal than 'sorprender' and implies puzzlement."},

{type:"teach",trg:"la envergadura",src:"the scale / magnitude / wingspan",pos:"noun",gender:"f",
 note:"Feminine noun. The scope or importance of something.\nOriginal meaning: wingspan of a bird.",
 example:"A: Es un proyecto de gran envergadura.\nB: Necesitaremos más personal y recursos.",
 exampleSrc:"A: It is a project of great magnitude.\nB: We will need more staff and resources.",
 funFact:"From verga (yard/spar of a ship). The nautical origin refers to the spread of a sail."},

{type:"teach",trg:"el enriquecimiento",src:"the enrichment",pos:"noun",gender:"m",
 note:"Masculine noun. The process of becoming richer or more valuable.\nAlso: cultural enrichment.",
 example:"A: El enriquecimiento cultural de vivir en otro país es enorme.\nB: Aprendes mucho más que el idioma.",
 exampleSrc:"A: The cultural enrichment of living in another country is enormous.\nB: You learn much more than the language.",
 funFact:"'Enriquecimiento ilícito' (illicit enrichment) is a criminal charge in Spanish law for unexplained wealth."},

{type:"teach",trg:"la fineza",src:"the refinement / delicate gesture",pos:"noun",gender:"f",
 note:"Feminine noun. A refined or delicate quality.\nAlso: a thoughtful gesture or kindness.",
 example:"A: Siempre tiene finezas con los invitados.\nB: Es una persona muy atenta y educada.",
 exampleSrc:"A: She always has thoughtful gestures for guests.\nB: She is a very attentive and polite person.",
 funFact:"In Golden Age Spanish literature, 'finezas de amor' were the proof of love demanded by a lady."},

{type:"fb",s:"La {1} entre los jugadores del equipo es la clave de su éxito.",a:["compenetración"],opts:["compenetración","desnudez","extrañeza","fineza"],hint:"Deep mutual understanding between people who work closely together.",sSrc:"The {1} between the team players is the key to their success."},

{type:"teach",trg:"la fisionomía",src:"the physiognomy / facial features",pos:"noun",gender:"f",
 note:"Feminine noun. The features of a person's face.\nAlso: fisonomía (variant spelling).",
 example:"A: Tiene la fisionomía de su abuelo.\nB: Sí, los mismos ojos y la misma nariz.",
 exampleSrc:"A: She has her grandfather's facial features.\nB: Yes, the same eyes and the same nose.",
 funFact:"From Greek physis (nature) + gnomon (judge). The pseudoscience of reading character from faces."},

{type:"teach",trg:"el hada madrina",src:"the fairy godmother",pos:"noun",gender:"f",
 note:"Feminine noun with masculine article (el hada, like el agua).\nFrom hada (fairy) + madrina (godmother).",
 example:"A: En los cuentos siempre aparece un hada madrina.\nB: Es la que concede los deseos mágicos.",
 exampleSrc:"A: In fairy tales, a fairy godmother always appears.\nB: She is the one who grants magical wishes.",
 funFact:"'El hada' uses the masculine article because 'hada' starts with stressed 'a', but it remains feminine."},

{type:"teach",trg:"la hilera",src:"the row / line / file",pos:"noun",gender:"f",
 note:"Feminine noun. A straight line of objects or people.\nSynonym: fila.",
 example:"A: Los cipreses forman una hilera perfecta a lo largo del camino.\nB: Es un paisaje muy mediterráneo.",
 exampleSrc:"A: The cypresses form a perfect row along the path.\nB: It is a very Mediterranean landscape.",
 funFact:"From hilo (thread). A hilera is things arranged as if threaded together in a line."},

{type:"teach",trg:"fidedigno",src:"reliable / trustworthy",pos:"adj",gender:null,
 note:"Adjective. Worthy of trust or belief.\nFeminine: fidedigna. Formal register.",
 example:"A: ¿Es fidedigna esa fuente de información?\nB: Sí, es un periódico de referencia.",
 exampleSrc:"A: Is that information source trustworthy?\nB: Yes, it is a reference newspaper.",
 funFact:"Compound of fide (faith) + digno (worthy). Used almost exclusively in formal writing and journalism."},

{type:"mc",q:"¿Qué es un huérfano?",opts:["Un niño cuyos padres han muerto","Un niño con muchos hermanos","Un adulto sin hijos","Un familiar lejano"],ans:"Un niño cuyos padres han muerto",hint:"A child who has lost both parents and has no one to care for them."},

{type:"fb",s:"Es un proyecto de gran {1} que requiere muchos recursos.",a:["envergadura"],opts:["envergadura","extrañeza","fineza","desnudez"],hint:"A word meaning scale or magnitude, originally referring to wingspan.",sSrc:"It is a project of great {1} that requires many resources."},

{type:"match",pairs:[{trg:"hermanastro",src:"stepbrother"},{trg:"huérfano",src:"orphan"},{trg:"compenetración",src:"rapport"},{trg:"fisionomía",src:"facial features"},{trg:"fidedigno",src:"trustworthy"}]},

{type:"fb",s:"La información de esa fuente no es {1}.",a:["fidedigna"],opts:["fidedigna","hacendosa","flamante","grata"],hint:"An adjective meaning worthy of trust or belief, used in formal contexts.",sSrc:"The information from that source is not {1}."},

{type:"mc",q:"¿Por qué se dice 'el hada' y no 'la hada'?",opts:["Porque empieza por 'a' tónica, pero sigue siendo femenina","Porque es una palabra masculina","Porque es un error gramatical","Porque viene del latín masculino"],ans:"Porque empieza por 'a' tónica, pero sigue siendo femenina",hint:"Think about why we say 'el agua' instead of 'la agua' even though water is feminine."}
]};

export default LESSON_11;
