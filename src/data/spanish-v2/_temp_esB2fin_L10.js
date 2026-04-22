// Spanish B2 Final Batch - Lesson 10: Psychology & Emotions
const LESSON_10 = {
  id:"esv2_b2fin_l10", title:"Psicología y Emociones", icon:"🧠", xp:15, board:true,
  steps:[
    {type:"intro", title:"Psicología y Emociones",
     desc:"Master the vocabulary of psychology, mental health, and emotions. Discuss feelings, self-awareness, and psychological well-being with nuance.",
     goals:["Describe psychological concepts and emotional states precisely","Discuss mental health and well-being","Express opinions about therapy, resilience, and personal growth"]},

    {type:"teach", trg:"la ansiedad", src:"anxiety", pos:"noun", gender:"f",
     note:"A feeling of worry, nervousness, or unease about something uncertain.",
     example:"A: La ansiedad antes de los exámenes es normal.\nB: Si la ansiedad persiste, deberías consultar a un profesional.",
     exampleSrc:"A: Anxiety before exams is normal.\nB: If the anxiety persists, you should consult a professional.",
     funFact:"From Latin 'anxietas' (distress). 'Angere' meant to choke or squeeze. Anxiety feels like a tightness."},

    {type:"teach", trg:"la autoestima", src:"self-esteem", pos:"noun", gender:"f",
     note:"A person's overall sense of self-worth or personal value.",
     example:"A: Una buena autoestima es clave para la salud mental.\nB: La autoestima se construye desde la infancia.",
     exampleSrc:"A: Good self-esteem is key to mental health.\nB: Self-esteem is built from childhood.",
     funFact:"'Auto-' (self) + 'estima' (esteem). Latin 'aestimare' meant to appraise or value. Valuing yourself."},

    {type:"teach", trg:"la resiliencia", src:"resilience", pos:"noun", gender:"f",
     note:"The ability to recover from difficulties and adapt to adversity.",
     example:"A: La resiliencia se puede aprender y desarrollar.\nB: Mostró una gran resiliencia tras la pérdida.",
     exampleSrc:"A: Resilience can be learned and developed.\nB: She showed great resilience after the loss.",
     funFact:"From Latin 'resilire' (to spring back). Originally a physics term for materials that bounce back after stress."},

    {type:"teach", trg:"la empatía", src:"empathy", pos:"noun", gender:"f",
     note:"The ability to understand and share another person's feelings.",
     example:"A: La empatía es fundamental en las relaciones humanas.\nB: Los buenos líderes tienen mucha empatía.",
     exampleSrc:"A: Empathy is fundamental in human relationships.\nB: Good leaders have a lot of empathy.",
     funFact:"From Greek 'empatheia' (passion). 'En-' (in) + 'pathos' (feeling). Feeling 'into' another person's experience."},

    {type:"teach", trg:"el bienestar", src:"well-being", pos:"noun", gender:"m",
     note:"A state of being comfortable, healthy, and happy.",
     example:"A: El bienestar emocional es tan importante como el físico.\nB: La empresa invierte en el bienestar de sus empleados.",
     exampleSrc:"A: Emotional well-being is as important as physical well-being.\nB: The company invests in the well-being of its employees.",
     funFact:"'Bien' (well) + 'estar' (to be). Literally 'being well'. A compound unique to Romance languages."},

    {type:"teach", trg:"el estrés", src:"stress", pos:"noun", gender:"m",
     note:"Mental or emotional tension from demanding circumstances.",
     example:"A: El estrés laboral afecta a la salud física.\nB: Necesitas técnicas para manejar el estrés.",
     exampleSrc:"A: Work stress affects physical health.\nB: You need techniques to manage stress.",
     funFact:"Borrowed from English 'stress', which came from Old French 'estresse' (narrowness), from Latin 'strictus'."},

    {type:"teach", trg:"la terapia", src:"therapy", pos:"noun", gender:"f",
     note:"Treatment of mental or emotional disorders through psychological methods.",
     example:"A: La terapia cognitiva le ayudó mucho.\nB: Lleva dos años en terapia y ha mejorado mucho.",
     exampleSrc:"A: Cognitive therapy helped him a lot.\nB: He's been in therapy for two years and has improved greatly.",
     funFact:"From Greek 'therapeia' (healing/service). 'Therapon' was an attendant or healer in ancient Greece."},

    {type:"mc", q:"¿Qué es la 'resiliencia'?",
     opts:["La capacidad de recuperarse de las dificultades","Un trastorno mental","Una emoción negativa","Un tipo de terapia"],
     ans:"La capacidad de recuperarse de las dificultades",
     hint:"This quality allows people to bounce back after facing adversity or hardship."},

    {type:"teach", trg:"el trauma", src:"the trauma", pos:"noun", gender:"m",
     note:"A deeply distressing or disturbing experience with lasting effects.",
     example:"A: El trauma infantil puede afectar toda la vida adulta.\nB: Superar un trauma requiere tiempo y apoyo profesional.",
     exampleSrc:"A: Childhood trauma can affect all of adult life.\nB: Overcoming trauma requires time and professional support.",
     funFact:"From Greek 'trauma' (wound). Originally a physical wound, now also used for psychological injury."},

    {type:"teach", trg:"el apego", src:"attachment", pos:"noun", gender:"m",
     note:"The emotional bond between people, especially between child and caregiver.",
     example:"A: La teoría del apego explica cómo creamos vínculos.\nB: Un apego seguro en la infancia favorece la autoestima.",
     exampleSrc:"A: Attachment theory explains how we create bonds.\nB: Secure attachment in childhood promotes self-esteem.",
     funFact:"From 'apegar' (to attach), Latin 'applicare'. John Bowlby developed attachment theory in the 1960s."},

    {type:"teach", trg:"el trastorno", src:"the disorder", pos:"noun", gender:"m",
     note:"A medical or psychological condition that disrupts normal functioning.",
     example:"A: El trastorno de ansiedad generalizada es muy común.\nB: Los trastornos alimentarios afectan a jóvenes.",
     exampleSrc:"A: Generalized anxiety disorder is very common.\nB: Eating disorders affect young people.",
     funFact:"From 'trastornar' (to disturb/upset). 'Tras-' (beyond) + 'tornar' (to turn): to turn something upside down."},

    {type:"fb", s:"La {1} le ayudó a superar sus miedos y mejorar su calidad de vida.", a:["terapia"],
     opts:["terapia","ansiedad","autoestima","resiliencia"],
     hint:"This professional treatment helps people work through mental and emotional challenges.",
     sSrc:"{1} helped her overcome her fears and improve her quality of life."},

    {type:"teach", trg:"consciente", src:"conscious / aware", pos:"adj", gender:null,
     note:"Being aware of something. Also means conscious (not unconscious).",
     example:"A: ¿Eres consciente de cómo te afecta el estrés?\nB: Es importante ser consciente de nuestras emociones.",
     exampleSrc:"A: Are you aware of how stress affects you?\nB: It's important to be aware of our emotions.",
     funFact:"From Latin 'consciens' (knowing). 'Con-' (with) + 'scire' (to know). Knowing with yourself."},

    {type:"teach", trg:"la autocompasión", src:"self-compassion", pos:"noun", gender:"f",
     note:"Being kind and understanding toward yourself during difficult times.",
     example:"A: La autocompasión no es debilidad, es fortaleza.\nB: Practicar la autocompasión reduce la ansiedad.",
     exampleSrc:"A: Self-compassion is not weakness, it's strength.\nB: Practicing self-compassion reduces anxiety.",
     funFact:"'Auto-' (self) + 'compasión' (compassion). Latin 'compati' (to suffer with). Being compassionate with yourself."},

    {type:"teach", trg:"la conducta", src:"behavior / conduct", pos:"noun", gender:"f",
     note:"The way a person acts or behaves. Key term in behavioral psychology.",
     example:"A: La conducta agresiva puede ser señal de un problema.\nB: La terapia busca cambiar patrones de conducta.",
     exampleSrc:"A: Aggressive behavior can be a sign of a problem.\nB: Therapy seeks to change behavior patterns.",
     funFact:"From Latin 'conducta' (led together). Behavior is how we 'lead' ourselves through life."},

    {type:"teach", trg:"el duelo", src:"grief / mourning", pos:"noun", gender:"m",
     note:"The process of grieving after a loss, especially the death of a loved one.",
     example:"A: El duelo tiene diferentes etapas.\nB: Cada persona vive el duelo de manera distinta.",
     exampleSrc:"A: Grief has different stages.\nB: Each person experiences grief differently.",
     funFact:"From Latin 'dolus' (pain). Also means 'duel' (combat), from a different root. Context distinguishes them."},

    {type:"mc", q:"¿Qué significa 'la autoestima'?",
     opts:["El miedo a uno mismo","La valoración que una persona tiene de sí misma","Un tipo de terapia","Una enfermedad mental"],
     ans:"La valoración que una persona tiene de sí misma",
     hint:"This concept refers to how much you value and respect yourself as a person."},

    {type:"teach", trg:"el vínculo", src:"the bond / link", pos:"noun", gender:"m",
     note:"An emotional connection or tie between people.",
     example:"A: El vínculo entre madre e hijo es muy fuerte.\nB: La confianza es la base de cualquier vínculo afectivo.",
     exampleSrc:"A: The bond between mother and child is very strong.\nB: Trust is the foundation of any emotional bond.",
     funFact:"From Latin 'vinculum' (chain/bond). 'Vincire' meant to bind. Emotional bonds 'bind' people together."},

    {type:"teach", trg:"superar", src:"to overcome / to surpass", pos:"verb", gender:null,
     note:"To overcome a difficulty, fear, or challenge. Also means to surpass.",
     example:"A: Logró superar su miedo a hablar en público.\nB: Superar un trauma lleva tiempo y esfuerzo.",
     exampleSrc:"A: She managed to overcome her fear of public speaking.\nB: Overcoming trauma takes time and effort.",
     funFact:"From Latin 'superare' (to go over). 'Super-' (above/over). You go 'above and beyond' the obstacle."},

    {type:"teach", trg:"la introspección", src:"introspection", pos:"noun", gender:"f",
     note:"The examination of one's own thoughts and feelings.",
     example:"A: La introspección es fundamental para el autoconocimiento.\nB: Un diario personal favorece la introspección.",
     exampleSrc:"A: Introspection is fundamental for self-knowledge.\nB: A personal journal promotes introspection.",
     funFact:"From Latin 'introspicere' (to look within). 'Intro-' (inward) + 'specere' (to look). Looking inside yourself."},

    {type:"fb", s:"El {1} afectivo entre amigos se fortalece con el tiempo.", a:["vínculo"],
     opts:["vínculo","trauma","trastorno","duelo"],
     hint:"This word describes the emotional connection or tie that bonds people together.",
     sSrc:"The emotional {1} between friends strengthens over time."},

    {type:"match", pairs:[
      {trg:"la ansiedad", src:"anxiety"},
      {trg:"la empatía", src:"empathy"},
      {trg:"el estrés", src:"stress"},
      {trg:"el bienestar", src:"well-being"}
    ]},

    {type:"mc", q:"¿Qué estudia la 'teoría del apego'?",
     opts:["Las fases del duelo","Las técnicas de relajación","Cómo creamos vínculos emocionales","Los tipos de estrés"],
     ans:"Cómo creamos vínculos emocionales",
     hint:"This theory, developed by Bowlby, examines the emotional bonds we form, especially in childhood."},

    {type:"fb", s:"Logró {1} su miedo a volar después de meses de terapia.", a:["superar"],
     opts:["superar","contaminar","absolver","programar"],
     hint:"This verb means to overcome or get past a difficulty, fear, or obstacle.",
     sSrc:"She managed to {1} her fear of flying after months of therapy."},

    {type:"match", pairs:[
      {trg:"el trauma", src:"the trauma"},
      {trg:"la conducta", src:"behavior"},
      {trg:"el duelo", src:"grief"},
      {trg:"la introspección", src:"introspection"}
    ]},

    {type:"mc", q:"¿Qué es 'la autocompasión'?",
     opts:["Un trastorno psicológico","La falta de empatía","Sentir lástima por los demás","Ser amable y comprensivo con uno mismo"],
     ans:"Ser amable y comprensivo con uno mismo",
     hint:"This practice involves treating yourself with the same kindness you would show a friend."}
  ]
};
export default LESSON_10;
