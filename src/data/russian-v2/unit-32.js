// Russian V2 Unit 32 — Environment and Nature (B2.2)
const UNIT_32 = {n:32, lang:"ru", srcLang:"en", track:"v2", title:"Природа и экология", sub:"Environment and Nature",
 icon:"🌲", level:"B2.2", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u32l1", title:"Nature", icon:"🌲", xp:15, board:true, steps:[

{type:"intro", title:"Russia's Nature",
 desc:"Russia's landmass is 17M km² — vast forests, tundra, lakes. Environmental vocabulary is essential for discussing Russia's natural heritage and modern challenges.",
 goals:["Describe natural features","Use ecology vocabulary","Discuss environmental issues"]},

{type:"teach", trg:"природа", src:"nature", pos:"noun", gender:"f",
 note:"Feminine. Central cultural concept.\nРусская природа — famous motif.",
 example:"A: Люблю русскую природу.\nB: Особенно весной.",
 exampleSrc:"A: I love Russian nature.\nB: Especially in spring.",
 funFact:"Русская природа (Russian nature) is a recurring theme in literature and painting. Vast forests, wide rivers, endless steppe define the Russian aesthetic."},

{type:"teach", trg:"лес", src:"forest", pos:"noun", gender:"m",
 note:"Masculine. Plural: леса.\nRussia has largest forests on Earth.",
 example:"A: Пойдём в лес?\nB: Да, за грибами.",
 exampleSrc:"A: Let's go to the forest?\nB: Yes, mushroom-picking.",
 funFact:"Russia has 815 million hectares of forest — 20% of world's forest area. Mushroom-picking (грибы) is a national pastime in late summer/fall."},

{type:"teach", trg:"река", src:"river", pos:"noun", gender:"f",
 note:"Feminine. Stress shifts: река (nom), реки (gen).\nВолга, Нева, Обь — Russian rivers.",
 example:"A: Какая самая длинная река в России?\nB: Обь или Волга?",
 exampleSrc:"A: Which is Russia's longest river?\nB: Ob or Volga?",
 funFact:"Volga = national river, flowing 3,530 km across European Russia. Beloved in literature. 'Волга-матушка' (Mother Volga) is emotional cultural icon."},

{type:"teach", trg:"озеро", src:"lake", pos:"noun", gender:"n",
 note:"Neuter. Ends in -о.\nБайкал — largest freshwater lake by volume.",
 example:"A: Был на Байкале?\nB: Да, невероятно.",
 exampleSrc:"A: Have you been to Baikal?\nB: Yes, incredible.",
 funFact:"Lake Baikal holds 20% of world's fresh water. Deepest lake (1,642 m). Siberian treasure. 'Байкал — жемчужина Сибири' (Baikal is the pearl of Siberia)."},

{type:"teach", trg:"океан", src:"ocean", pos:"noun", gender:"m",
 note:"Masculine. Russia has 4 oceans: Arctic, Pacific, Atlantic, Indian.\nMost northern.",
 example:"A: Далеко до океана?\nB: Тихий близко.",
 exampleSrc:"A: Far to the ocean?\nB: The Pacific is close.",
 funFact:"Russia is the only country bordering three oceans: Arctic (Северный Ледовитый), Pacific (Тихий), Atlantic (Атлантический через Baltic/Black Seas)."},

{type:"teach", trg:"экология", src:"ecology", pos:"noun", gender:"f",
 note:"Feminine. Greek loanword.\nAlso: окружающая среда (environment).",
 example:"A: Экология важна.\nB: Нужно беречь природу.",
 exampleSrc:"A: Ecology is important.\nB: We need to protect nature.",
 funFact:"'Экология' means both science (ecology) AND environmental condition. 'Плохая экология' = bad environment. Single word for both English concepts."},

{type:"teach", trg:"загрязнение", src:"pollution", pos:"noun", gender:"n",
 note:"Neuter. Ends in -ие.\nЗагрязнение воздуха = air pollution.",
 example:"A: Загрязнение воздуха — проблема.\nB: Да, в больших городах.",
 exampleSrc:"A: Air pollution is a problem.\nB: Yes, in big cities.",
 funFact:"Russian industrial legacy includes heavy pollution issues: Chernobyl, Norilsk (among world's most polluted cities). Modern Russia addressing these."},

{type:"teach", trg:"климат", src:"climate", pos:"noun", gender:"m",
 note:"Masculine. Greek loanword.\nResemblance to weather (погода) — but climate is pattern.",
 example:"A: Русский климат суровый.\nB: Зимой — очень.",
 exampleSrc:"A: Russian climate is harsh.\nB: Especially in winter.",
 funFact:"Russia's climate zones: arctic north, continental center, subtropical Crimea. Temperature extremes: -71°C in Oymyakon to +40°C in south. Massive climate variety."},

{type:"tip", title:"Russian Natural Vocabulary",
 text:"GEOGRAPHICAL FEATURES:\n• тундра (tundra)\n• тайга (taiga, coniferous forest)\n• степь (steppe)\n• горы (mountains)\n• пустыня (desert)\n• океан, море (ocean, sea)\n• река, озеро (river, lake)\n• лес (forest)\n• поле (field)\n\nFAMOUS NATURAL SITES:\n• Озеро Байкал (Lake Baikal)\n• Река Волга (Volga River)\n• Уральские горы (Ural Mountains)\n• Камчатка (Kamchatka Peninsula)\n• Сибирь (Siberia)\n\nFLORA AND FAUNA:\n• медведь (bear) — Russian symbol.\n• волк (wolf)\n• лиса (fox)\n• берёза (birch) — national tree.\n• дуб (oak)\n\nECOLOGY ISSUES:\n• загрязнение (pollution)\n• охрана (protection)\n• заповедник (nature reserve)\n• изменение климата (climate change)",
 icon:"🌲"},

{type:"mc", q:"Which is Russia's most famous lake?",
 opts:["Онежское","Ладожское","Байкал","Чудское"],
 ans:"Байкал",
 hint:"Deepest and largest freshwater lake, in Siberia."},

{type:"fb", s:"Большая {1} в городах — серьёзная экологическая проблема.",
 a:["загрязнение"],
 opts:["загрязнение","природа","экология","климат"],
 hint:"Serious ecological problem in cities — what pollutes?",
 sSrc:"Big pollution in cities — serious ecological problem."},

{type:"match", pairs:[
  {trg:"природа", src:"nature"},
  {trg:"лес", src:"forest"},
  {trg:"озеро", src:"lake"},
  {trg:"экология", src:"ecology"},
  {trg:"климат", src:"climate"}
]}
]}

]};
export default UNIT_32;
