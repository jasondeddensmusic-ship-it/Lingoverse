// Russian V2 Unit 18 — Accusative Case (B1.2)
const UNIT_18 = {n:18, lang:"ru", srcLang:"en", track:"v2", title:"Винительный падеж", sub:"Accusative Case",
 icon:"🎯", level:"B1.2", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u18l1", title:"Direct Objects", icon:"🎯", xp:15, board:true, steps:[

{type:"intro", title:"Accusative: What You Act On",
 desc:"The accusative marks direct objects of transitive verbs. Every 'I see X,' 'I buy Y,' 'I read Z' uses accusative. Different endings for different genders.",
 goals:["Form accusative for feminine","Know masculine animate/inanimate rule","Apply to common verbs"]},

{type:"teach", trg:"Я вижу книгу", src:"I see the book (ACC)", pos:"phrase", gender:null,
 note:"Книга → книгу (fem -а → -у).\nDirect object of 'видеть' (see).",
 example:"A: Ты видишь книгу?\nB: Да, на столе.",
 exampleSrc:"A: Do you see the book?\nB: Yes, on the table.",
 funFact:"Видеть takes accusative. Same for: читать (read), покупать (buy), любить (love), смотреть (watch). All transitive verbs."},

{type:"teach", trg:"Я люблю маму", src:"I love mom (ACC)", pos:"phrase", gender:null,
 note:"Мама → маму.\nAnimate feminine: same -у ending as inanimate.",
 example:"A: Ты любишь маму?\nB: Конечно, очень.",
 exampleSrc:"A: Do you love mom?\nB: Of course, very much.",
 funFact:"For feminines ending in -а, accusative is always -у. Animate/inanimate doesn't matter for feminines. Simpler than masculines."},

{type:"teach", trg:"Я купил журнал", src:"I bought a magazine (M inanimate)", pos:"phrase", gender:null,
 note:"Masculine INANIMATE: acc = nominative.\nЖурнал stays журнал.",
 example:"A: Что ты купил?\nB: Журнал и газету.",
 exampleSrc:"A: What did you buy?\nB: A magazine and a newspaper.",
 funFact:"Inanimate masculine nouns don't change between nominative and accusative. Журнал → журнал. Saves one form."},

{type:"teach", trg:"Я вижу Антона", src:"I see Anton (M animate)", pos:"phrase", gender:null,
 note:"Masculine ANIMATE: acc = genitive!\nАнтон → Антона.",
 example:"A: Ты видишь Антона?\nB: Да, он там.",
 exampleSrc:"A: Do you see Anton?\nB: Yes, he's there.",
 funFact:"Masculine animate accusative is IDENTICAL to genitive. Russian linguistic quirk. Applies to all animate masculines: брата, друга, учителя."},

{type:"teach", trg:"Я читаю газету", src:"I read the newspaper", pos:"phrase", gender:null,
 note:"Газета → газету.\nDaily activity verb + accusative.",
 example:"A: Что читаешь?\nB: Интересную газету.",
 exampleSrc:"A: What are you reading?\nB: An interesting newspaper.",
 funFact:"Note 'интересную газету' — adjective agrees with noun's accusative case: feminine adjective also goes -ую. Consistent pattern."},

{type:"teach", trg:"Я знаю сестру", src:"I know (my) sister", pos:"phrase", gender:null,
 note:"Сестра → сестру.\nFeminine animate, same -у ending.",
 example:"A: Ты знаешь Анну?\nB: Да, она моя сестра.",
 exampleSrc:"A: Do you know Anna?\nB: Yes, she's my sister.",
 funFact:"'Знать' takes accusative. Знать маму (know mom), знать город (know the city), знать всё (know everything)."},

{type:"tip", title:"Accusative: Animacy Matters for Masculines",
 text:"FEMININE (simplest):\nBoth animate and inanimate: -а → -у.\nкнигу (book) and маму (mom) have same pattern.\n\nMASCULINE ANIMATE (animate = people, animals):\nAcc = GEN.\nАнтон → Антона (same as 'Антона книга' = Anton's book).\nРуслан → Руслана. Кот → кота (cat, since animate).\n\nMASCULINE INANIMATE:\nAcc = NOM (no change).\nжурнал → журнал.\nмагазин → магазин.\nгород → город.\n\nNEUTER:\nAlmost always unchanged: окно → окно, письмо → письмо.\n\nPATTERN: 'Who/what' question guides form.\nВижу КОГО? (animate) → Антона.\nВижу ЧТО? (inanimate) → журнал.\n\nTHIS IS THE ACCUSATIVE'S QUIRK. Memorize: animate masculine = genitive form.",
 deepDive:{title:"Why Animacy Changes Accusative",
  text:"Russian's animacy distinction in accusative developed historically to distinguish subject from object for animates (where either could do an action). 'Мальчик видит собаку' vs 'Мальчика видит собака' — flexible word order requires case marking to show who's acting. Inanimate masculines (chairs, books) don't act, so no need to distinguish. Elegant linguistic efficiency."}},

{type:"mc", q:"'I see Anton' — form of 'Антон'?",
 opts:["Антон","Антона","Антону","Антоном"],
 ans:"Антона",
 hint:"Masculine animate accusative = genitive form."},

{type:"mc", q:"'I read a newspaper' — form of 'газета'?",
 opts:["газета","газету","газете","газеты"],
 ans:"газету",
 hint:"Feminine -а → -у in accusative."},

{type:"fb", s:"Я вижу {1} в магазине.",
 a:["маму"],
 opts:["маму","мама","мамы","маме"],
 hint:"Direct object of 'вижу.' Feminine -а → -у.",
 sSrc:"I see mom at the store."},

{type:"fb", s:"Я купил новый {1}.",
 a:["журнал"],
 opts:["журнал","журнала","журналу","журналом"],
 hint:"Masculine inanimate direct object — stays in nominative form.",
 sSrc:"I bought a new magazine."},

{type:"match", pairs:[
  {trg:"книгу (ACC)", src:"fem inanimate"},
  {trg:"маму (ACC)", src:"fem animate"},
  {trg:"журнал (ACC)", src:"masc inanimate"},
  {trg:"Антона (ACC)", src:"masc animate"},
  {trg:"окно (ACC)", src:"neuter"}
]}
]},

{id:"ruv2_u18l2", title:"Motion with В/На + Accusative", icon:"➡️", xp:15, board:true, steps:[

{type:"intro", title:"Accusative for Motion",
 desc:"В and на with ACCUSATIVE mean MOTION TO. This is the #1 practical use — 'going to school' = в школу.",
 goals:["Use в/на + accusative for direction","Contrast with в/на + prepositional","Apply to travel"]},

{type:"teach", trg:"в школу", src:"to school (motion)", pos:"phrase", gender:null,
 note:"Школа (nom) → школу (acc).\nMotion TO school.",
 example:"A: Куда ты идёшь?\nB: В школу.",
 exampleSrc:"A: Where are you going?\nB: To school.",
 funFact:"'Иду в школу' (going to school, motion) vs 'я в школе' (I'm at school, location). Same preposition, accusative shows direction."},

{type:"teach", trg:"на работу", src:"to work (motion)", pos:"phrase", gender:null,
 note:"Работа (nom) → работу (acc).\nОбычно утром.",
 example:"A: Во сколько ты идёшь на работу?\nB: В восемь утра.",
 exampleSrc:"A: When do you go to work?\nB: At 8 am.",
 funFact:"'На работу' (to work, motion) vs 'на работе' (at work, location). Preposition stays the same, accusative ending changes to indicate direction."},

{type:"teach", trg:"в Москву", src:"to Moscow (motion)", pos:"phrase", gender:null,
 note:"Москва (nom) → Москву (acc).\nCities use same pattern.",
 example:"A: Куда поедешь летом?\nB: В Москву.",
 exampleSrc:"A: Where will you go in summer?\nB: To Moscow.",
 funFact:"All Russian (and foreign) cities get accusative for motion: в Москву, в Париж (Paris — masc inanim, no change), в Берлин, в Петербург."},

{type:"teach", trg:"в парк", src:"to the park (motion)", pos:"phrase", gender:null,
 note:"Парк is masculine inanimate.\nAccusative = nominative (no change).",
 example:"A: Пойдём в парк?\nB: С удовольствием.",
 exampleSrc:"A: Shall we go to the park?\nB: With pleasure.",
 funFact:"Masculine inanimate accusative = nominative, so 'в парк' and 'в доме' look different because 'дом' is parallel form without ending change."},

{type:"teach", trg:"на концерт", src:"to a concert", pos:"phrase", gender:null,
 note:"Концерт (nom/acc, masculine inanimate).\nEvents use 'на.'",
 example:"A: Мы идём на концерт.\nB: Когда?",
 exampleSrc:"A: We're going to a concert.\nB: When?",
 funFact:"'На' with events: на концерт (to concert), на выставку (to exhibition), на свадьбу (to wedding), на собрание (to meeting). Event-type 'nа.'"},

{type:"teach", trg:"в гости", src:"to (someone's) house", pos:"phrase", gender:null,
 note:"Гости (pl of гость, animate masculine) → в гости.\nVisiting friends/family.",
 example:"A: Куда идёшь?\nB: В гости к Марине.",
 exampleSrc:"A: Where are you going?\nB: To visit Marina.",
 funFact:"'Ходить/идти в гости' = to visit someone. Russians distinguish formal visiting (в гости) from just going to their place (к другу). Social ritual."},

{type:"tip", title:"Direction vs Location",
 text:"В/НА WITH DIFFERENT CASES:\n\nMOTION (ACCUSATIVE):\n'Куда?' (Where to?)\n\nCORRECT:\nЯ иду в школу. (I'm going to school.)\nМы едем на работу. (We're going to work.)\nОн поехал в Москву. (He went to Moscow.)\n\nLOCATION (PREPOSITIONAL):\n'Где?' (Where?)\n\nCORRECT:\nЯ в школе. (I'm at school.)\nМы на работе. (We're at work.)\nОн в Москве. (He's in Moscow.)\n\nCOMPARE CAREFULLY:\nЯ еду в парк. (I'm going to the park, motion.)\nЯ в парке. (I'm in the park, location.)\n\n'КУДА?' PARTNER PREPOSITIONS:\n• в + accusative: Она идёт в ресторан.\n• на + accusative: Она идёт на концерт.\n• к + dative: Она идёт к маме.\n\nDRILL: Change 'he is at X' to 'he is going to X' to practice the switch.",
 icon:"➡️"},

{type:"mc", q:"'I'm going to school' — школа in:",
 opts:["Nominative (школа)","Accusative (школу)","Prepositional (школе)","Genitive (школы)"],
 ans:"Accusative (школу)",
 hint:"Direction/motion toward = ___."},

{type:"mc", q:"'I'm at school' — школа in:",
 opts:["Nominative","Accusative","Prepositional","Dative"],
 ans:"Prepositional",
 hint:"Location = ___."},

{type:"fb", s:"A: Куда ты едешь в отпуск?\nB: В {1}.",
 a:["Москву"],
 opts:["Москву","Москва","Москве","Москвы"],
 hint:"Direction/motion to Moscow = accusative.",
 sSrc:"A: Where are you going for vacation?\nB: To Moscow."},

{type:"fb", s:"A: Где ты сейчас?\nB: В {1}.",
 a:["Москве"],
 opts:["Москве","Москва","Москву","Москвы"],
 hint:"Current location = prepositional.",
 sSrc:"A: Where are you now?\nB: In Moscow."},

{type:"match", pairs:[
  {trg:"в школу", src:"to school (motion)"},
  {trg:"в школе", src:"at school (location)"},
  {trg:"на работу", src:"to work (motion)"},
  {trg:"на работе", src:"at work (location)"},
  {trg:"в гости", src:"to visit"}
]}
,{type:"fb", s:"Каждое утро я иду {1}.",
 a:["в школу"],
 opts:["в школу","в школе","на работу","в город"],
 hint:"Direction/motion to a learning institution.",
 sSrc:"Every morning I go to school."},

{type:"fb", s:"Сегодня вечером мы едем {1} слушать джаз.",
 a:["на концерт"],
 opts:["на концерт","в парк","в гости","в Москву"],
 hint:"Going to hear live music performance.",
 sSrc:"This evening we are going to a concert to listen to jazz."},

{type:"match",pairs:[{trg:"Я вижу книгу",src:"I see the book (ACC)"},{trg:"Я знаю сестру",src:"I know (my) sister"},{trg:"в парк",src:"to the park (motion)"},{trg:"на концерт",src:"to a concert"}]}]}

]};
export default UNIT_18;
