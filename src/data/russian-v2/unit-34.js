// Russian V2 Unit 34 — Russian Geography (B2.2)
const UNIT_34 = {n:34, lang:"ru", srcLang:"en", track:"v2", title:"География России", sub:"Russian Geography",
 icon:"🗺️", level:"B2.2", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u34l1", title:"Regions and Features", icon:"🗺️", xp:15, board:true, steps:[

{type:"intro", title:"Russia Is Vast",
 desc:"Russia covers 11 time zones, has 85 federal subjects, and spans two continents. Essential geographical vocabulary for any conversation about Russia.",
 goals:["Name Russian regions","Know major cities","Describe geography features"]},

{type:"teach", trg:"Россия", src:"Russia", pos:"noun", gender:"f",
 note:"Feminine. Official: Российская Федерация.\n17.1 million km².",
 example:"A: Россия большая.\nB: Самая большая страна в мире.",
 exampleSrc:"A: Russia is big.\nB: The largest country in the world.",
 funFact:"Russia = 17.1M km² = 11% of Earth's land. Larger than Pluto. Stretches from Europe to Asia across 11 time zones, touching 14 countries."},

{type:"teach", trg:"Москва", src:"Moscow", pos:"noun", gender:"f",
 note:"Feminine. Capital since 1918.\nПопуляция ~13 million.",
 example:"A: Ты живёшь в Москве?\nB: Родился здесь.",
 exampleSrc:"A: Do you live in Moscow?\nB: Born here.",
 funFact:"Moscow is Europe's largest city. Founded 1147. Red Square, Kremlin, Bolshoi are cultural landmarks. Largest Russian concentration of power, culture, business."},

{type:"teach", trg:"Петербург", src:"Petersburg", pos:"noun", gender:"m",
 note:"Masculine. Full: Санкт-Петербург.\nFormer capital (1712-1918).",
 example:"A: Петербург красивый.\nB: Северная Венеция.",
 exampleSrc:"A: Petersburg is beautiful.\nB: The Northern Venice.",
 funFact:"Saint Petersburg (1703) was Peter the Great's creation. European-style city, imperial capital. 'Северная столица' (Northern capital). Cultural heart of Russia."},

{type:"teach", trg:"Сибирь", src:"Siberia", pos:"noun", gender:"f",
 note:"Feminine. Ends in ь.\n13 million km² — most of Russia's land.",
 example:"A: Жил в Сибири?\nB: Нет, только ездил.",
 exampleSrc:"A: Have you lived in Siberia?\nB: No, just visited.",
 funFact:"Siberia is 77% of Russia's land but only 20% of population. Resource-rich: oil, gas, timber. Extreme climate: -40°C winter common. Full of legend."},

{type:"teach", trg:"Урал", src:"Urals (mountains)", pos:"noun", gender:"m",
 note:"Masculine. Mountain range.\nDivides Europe and Asia.",
 example:"A: Переехали через Урал.\nB: Теперь в Азии.",
 exampleSrc:"A: We crossed the Urals.\nB: Now in Asia.",
 funFact:"Ural Mountains stretch 2,500 km north-south. Traditional border between Europe and Asia. Richly mineralized. Сibirь starts east of Ural."},

{type:"teach", trg:"Кавказ", src:"Caucasus", pos:"noun", gender:"m",
 note:"Masculine. Mountain region south.\nRich ethnic diversity.",
 example:"A: Был на Кавказе?\nB: Да, пошли в горы.",
 exampleSrc:"A: Were you in the Caucasus?\nB: Yes, we went to the mountains.",
 funFact:"Caucasus region contains 50+ ethnic groups. Highest European mountain Эльбрус (5,642 m). Culturally distinct from Slavic Russia. Rich folk traditions."},

{type:"teach", trg:"столица", src:"capital city", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nМосква — столица России.",
 example:"A: Какая столица России?\nB: Москва.",
 exampleSrc:"A: What's Russia's capital?\nB: Moscow.",
 funFact:"Russian capitals: Москва (modern), Санкт-Петербург (imperial, 1712-1918), Великий Новгород and Киев (medieval). Capital moved 3 times in history."},

{type:"teach", trg:"граница", src:"border", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nГраница с Китаем = border with China.",
 example:"A: Граница с Украиной.\nB: На западе.",
 exampleSrc:"A: The border with Ukraine.\nB: To the west.",
 funFact:"Russia has 20,241 km of land borders with 14 countries. Longest land border: Kazakhstan (7,644 km). Maritime: Pacific, Arctic, Atlantic (through Baltic/Black Seas)."},

{type:"tip", title:"Russian Federal Subjects",
 text:"85 FEDERAL SUBJECTS (регионы):\n\n• ОБЛАСТИ (46 oblasts): Московская область, Ленинградская область.\n• РЕСПУБЛИКИ (22 republics): Татарстан, Чечня, Якутия.\n• КРАЯ (9 krais): Краснодарский край.\n• АВТОНОМНЫЕ ОКРУГА (4 autonomous areas).\n• ГОРОДА ФЕДЕРАЛЬНОГО ЗНАЧЕНИЯ (3 federal cities): Москва, Санкт-Петербург, Севастополь.\n\nGEOGRAPHIC DIVISIONS:\n• Центральная Россия (Central Russia)\n• Северо-Запад (Northwest) — Petersburg region.\n• Юг России (South) — Caucasus, Krasnodar.\n• Урал (Urals)\n• Сибирь (Siberia)\n• Дальний Восток (Far East) — Vladivostok, Kamchatka.\n\nTIME ZONES:\n11 time zones, from Kaliningrad (UTC+2) to Kamchatka (UTC+12).\n\nRussia's federal system reflects its incredible geographic diversity.",
 icon:"🗺️"},

{type:"mc", q:"Which region contains most of Russia's territory?",
 opts:["Центральная Россия","Сибирь","Кавказ","Дальний Восток"],
 ans:"Сибирь",
 hint:"Siberia is 77% of Russia's land."},

{type:"fb", s:"Москва — это {1} России.",
 a:["столица"],
 opts:["столица","граница","область","город"],
 hint:"Moscow's relationship to Russia — what type of city?",
 sSrc:"Moscow is Russia's capital."},

{type:"match", pairs:[
  {trg:"Россия", src:"Russia"},
  {trg:"Москва", src:"Moscow"},
  {trg:"Петербург", src:"Petersburg"},
  {trg:"Сибирь", src:"Siberia"},
  {trg:"Урал", src:"Urals"}
]}
,

{type:"match", pairs:[
  {trg:"граница", src:"border"}
]}]}

]};
export default UNIT_34;
