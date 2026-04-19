// Russian V2 Unit 28 — Health and Wellness (B2.1)
const UNIT_28 = {n:28, lang:"ru", srcLang:"en", track:"v2", title:"Здоровый образ жизни", sub:"Healthy Lifestyle",
 icon:"🏃", level:"B2.1", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u28l1", title:"Health and Lifestyle", icon:"🏃", xp:15, board:true, steps:[

{type:"intro", title:"Healthy Lifestyle",
 desc:"Advanced health vocabulary: wellness, prevention, exercise. Russia has ancient traditions of health (banya culture) alongside modern wellness.",
 goals:["Discuss health habits","Use prevention vocabulary","Describe exercise/nutrition"]},

{type:"teach", trg:"здоровый образ жизни", src:"healthy lifestyle", pos:"phrase", gender:null,
 note:"Fixed phrase.\nОбычно abbreviated ЗОЖ.",
 example:"A: Ты ведёшь здоровый образ жизни?\nB: Да, стараюсь.",
 exampleSrc:"A: Do you lead a healthy lifestyle?\nB: Yes, I try.",
 funFact:"ЗОЖ (zozh) is the trendy Russian acronym for healthy lifestyle. Popular hashtag, lifestyle movement. 'Вести ЗОЖ' = lead healthy lifestyle."},

{type:"teach", trg:"спорт", src:"sport / exercise", pos:"noun", gender:"m",
 note:"Masculine. Used broadly for exercise and sport.\n'Заниматься спортом' = do sports.",
 example:"A: Занимаешься спортом?\nB: Да, спортом.",
 exampleSrc:"A: Do you do sports?\nB: Yes, sports.",
 funFact:"Заниматься + instrumental for hobby/activity: заниматься спортом, йогой, плаванием, музыкой. Universal pattern for 'do X as regular activity.'"},

{type:"teach", trg:"питание", src:"nutrition / diet", pos:"noun", gender:"n",
 note:"Neuter. Ends in -ие.\nFormal for 'diet' is диета.",
 example:"A: Здоровое питание важно.\nB: Да, очень важно.",
 exampleSrc:"A: Healthy nutrition is important.\nB: Yes, very important.",
 funFact:"Питание (nutrition) vs диета (diet for weight loss). Different cultural framing. Russians talk more about питание as balance than restrictive dieting."},

{type:"teach", trg:"баня", src:"banya (Russian sauna)", pos:"noun", gender:"f",
 note:"Feminine. Cultural institution.\nИтрдан: weekly.",
 example:"A: Ходишь в баню?\nB: Каждую субботу.",
 exampleSrc:"A: Do you go to the banya?\nB: Every Saturday.",
 funFact:"Баня is central to Russian health culture. Hot steam, birch branches (веник), cold plunge. Weekly tradition, considered essential for health. Unique cultural practice."},

{type:"teach", trg:"закаливание", src:"hardening (cold therapy)", pos:"noun", gender:"n",
 note:"Neuter. Ends in -ие.\nCold water therapy for health.",
 example:"A: Ты занимаешься закаливанием?\nB: Да, каждый день.",
 exampleSrc:"A: Do you do cold therapy?\nB: Yes, every day.",
 funFact:"Закаливание is traditional Russian practice: cold showers, snow baths. Believed to boost immunity. Modern Western 'cold therapy' (Wim Hof) echoes this tradition."},

{type:"teach", trg:"профилактика", src:"prevention", pos:"noun", gender:"f",
 note:"Feminine. Medical term.\n'Профилактика + genitive' = prevention of X.",
 example:"A: Профилактика важна?\nB: Да, очень важна.",
 exampleSrc:"A: Is prevention important?\nB: Yes, very important.",
 funFact:"Russian saying: 'Профилактика лучше лечения' (prevention is better than treatment). Cultural preference for preemptive health measures over reactive medicine."},

{type:"teach", trg:"привычка", src:"habit", pos:"noun", gender:"f",
 note:"Feminine. Ends in -ка.\nХорошая/плохая привычка = good/bad habit.",
 example:"A: Привычка важна?\nB: Да, привычка.",
 exampleSrc:"A: Are habits important?\nB: Yes, habit.",
 funFact:"Russian proverb: 'Привычка — вторая натура' (habit is second nature). Culture acknowledges difficulty of breaking habits through this phrase."},

{type:"teach", trg:"стресс", src:"stress", pos:"noun", gender:"m",
 note:"Masculine. English loanword.\nCovers all types of stress.",
 example:"A: Чувствуешь стресс?\nB: Постоянно.",
 exampleSrc:"A: Do you feel stress?\nB: Constantly.",
 funFact:"Стресс entered Russian in Soviet era. Russian culturally acknowledged stress as health issue relatively late compared to Western medicine. Now widely discussed."},

{type:"tip", title:"Russian Wellness Culture",
 text:"RUSSIA'S UNIQUE HEALTH TRADITIONS:\n\nБАНЯ (Banya):\n• Hot steam bath ritual, weekly for many.\n• Health and social function.\n• Веник (birch branch), чай после (tea after).\n\nЗАКАЛИВАНИЕ (Cold Therapy):\n• Cold showers, ice-water plunges.\n• Children hardened from birth in Soviet tradition.\n• Believed to boost immunity.\n\nРЕЖИМ (Regimen):\n• Regular schedule of eating, sleeping, exercise.\n• Soviet medical culture emphasized этот.\n\nПРОФИЛАКТИКА (Prevention):\n• Annual check-ups.\n• Vaccinations, seasonal vitamins.\n• Emphasized in medical education.\n\nОТДЫХ (Rest):\n• Vacation considered essential, not optional.\n• 28 days minimum, often 6+ weeks with holidays.\n\nПрактика modern wellness (yoga, meditation) growing but traditional ЗОЖ remains core.",
 icon:"🏃"},

{type:"mc", q:"'ЗОЖ' stands for:",
 opts:["здоровая организация жизни","здоровый образ жизни","здравоохранение общества","забота об организме жизни"],
 ans:"здоровый образ жизни",
 hint:"Acronym for 'healthy lifestyle.'"},

{type:"mc", q:"Which is a uniquely Russian health practice?",
 opts:["диета","баня","стресс","спорт"],
 ans:"баня",
 hint:"Culturally Russian institution, traditional hot-steam bath ritual."},

{type:"fb", s:"Регулярная {1} физическая активность полезна для здоровья.",
 a:["привычка"],
 opts:["привычка","профилактика","закаливание","стресс"],
 hint:"Regular physical activity is a valuable — something you develop over time.",
 sSrc:"Regular physical activity is a beneficial habit for health."},

{type:"match", pairs:[
  {trg:"здоровый образ жизни", src:"healthy lifestyle"},
  {trg:"питание", src:"nutrition"},
  {trg:"баня", src:"banya (sauna)"},
  {trg:"закаливание", src:"cold therapy"},
  {trg:"профилактика", src:"prevention"}
]}
]}

]};
export default UNIT_28;
