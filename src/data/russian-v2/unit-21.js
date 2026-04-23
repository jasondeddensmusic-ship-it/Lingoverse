// Russian V2 Unit 21. Instrumental Case (B1.2)
const UNIT_21 = {n:21, lang:"ru", srcLang:"en", track:"v2", title:"Творительный падеж", sub:"Instrumental Case",
 icon:"🎯", level:"B1.2", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u21l1", title:"With and By", icon:"🎯", xp:15, board:true, steps:[

{type:"intro", title:"Instrumental: Tools and Company",
 desc:"Instrumental marks the tool (by which), the means, and accompaniment (with whom). Also used for professions ('she works as teacher').",
 goals:["Use instrumental for tools","Use с + instrumental for company","Apply to professions"]},

{type:"teach", trg:"ручкой", src:"with a pen (INS)", pos:"phrase", gender:null,
 note:"Ручка → ручкой.\nInstrumental for tools, no preposition needed.",
 example:"A: Чем пишешь?\nB: Ручкой.",
 exampleSrc:"A: What are you writing with?\nB: With a pen.",
 funFact:"Russian instrumental for tools NO preposition needed. Different from English 'with a pen.' Just 'ручкой', single word = 'with pen.'"},

{type:"teach", trg:"карандашом", src:"with a pencil (INS)", pos:"phrase", gender:null,
 note:"Карандаш → карандашом.\nMasculine instrumental -ом.",
 example:"A: Чем рисуешь?\nB: Карандашом.",
 exampleSrc:"A: What are you drawing with?\nB: With a pencil.",
 funFact:"'Чем?' (with what?) is the instrumental question word. Always answers with an instrumental-case noun. No preposition = tool/means."},

{type:"teach", trg:"с мамой", src:"with mom (INS)", pos:"phrase", gender:null,
 note:"С + instrumental = accompaniment.\nДифферент from tool meaning.",
 example:"A: С кем ты идёшь?\nB: С мамой.",
 exampleSrc:"A: Who are you going with?\nB: With mom, to the doctor.",
 funFact:"С + instrumental = 'together with.' Russian distinguishes: 'пишу ручкой' (with pen, tool) vs 'с ручкой в руке' (with pen in hand, accompaniment)."},

{type:"teach", trg:"с сахаром", src:"with sugar (INS)", pos:"phrase", gender:null,
 note:"С + inst for additions.\nЧай с сахаром vs кофе без сахара.",
 example:"A: Чай с сахаром?\nB: Да, пожалуйста.",
 exampleSrc:"A: Tea with sugar?\nB: Yes, please.",
 funFact:"'С' for additives: с молоком (with milk), с лимоном (with lemon), с хлебом (with bread). Opposite 'без' + genitive."},

{type:"teach", trg:"работаю учителем", src:"I work as a teacher", pos:"phrase", gender:null,
 note:"Instrumental for profession.\nUчитель → учителем.",
 example:"A: Кем ты работаешь?\nB: Учителем.",
 exampleSrc:"A: What do you work as?\nB: As a teacher.",
 funFact:"Russian 'работать + instrumental' for profession. Я работаю врачом (I work as a doctor), инженером (engineer), программистом. No preposition."},

{type:"teach", trg:"стать врачом", src:"to become a doctor", pos:"phrase", gender:null,
 note:"Стать + instrumental = to become.\nGrammatical conversion.",
 example:"A: Кем ты хочешь стать?\nB: Врачом.",
 exampleSrc:"A: What do you want to become?\nB: A doctor.",
 funFact:"'Стать + inst' is classic Russian career talk. 'Кем станешь?' is asked to children routinely. The question anticipates a profession answer."},

{type:"tip", title:"Instrumental Uses",
 text:"INSTRUMENTAL CASE USES:\n\n1. TOOL/MEANS (no preposition):\nЯ пишу ручкой. (I write with a pen.)\nЯ еду машиной. (I go by car.)\nМы летели самолётом. (We flew by plane.)\n\n2. COMPANY (с + inst):\nЯ иду с мамой. (I go with mom.)\nГоворил с другом. (Talked with a friend.)\n\n3. INGREDIENTS/ADDITIONS (с + inst):\nЧай с лимоном. (Tea with lemon.)\nПицца с грибами. (Pizza with mushrooms.)\n\n4. PROFESSION (no preposition):\nРаботаю учителем. (I work as a teacher.)\nОн стал врачом. (He became a doctor.)\n\n5. TIME OF DAY (no preposition):\nУтром, днём, вечером, ночью.\n\n6. SEASONS (no preposition):\nЗимой, весной, летом, осенью.\n\n7. OTHER PREPOSITIONS: над (above), под (under), за (behind), перед (in front).\n\nENDINGS:\nm: -ом (другом), -ём (гением).\nf: -ой (книгой), -ёй (землёй).\nn: -ом (окном).",
 icon:"🎯"},

{type:"mc", q:"'I work as a doctor', case for 'врач'?",
 opts:["Instrumental","Nominative","Accusative","Dative"],
 ans:"Instrumental",
 hint:"Profession-as-role uses ___ case: 'работаю + inst.'"},

{type:"mc", q:"'Пишу ___ ручкой', needs preposition?",
 opts:["к","no preposition","с","без"],
 ans:"no preposition",
 hint:"Tool = instrumental alone. С is for accompaniment."},

{type:"fb", s:"Я рисую {1}.",
 a:["карандашом"],
 opts:["карандашом","карандаш","карандаша","карандашу"],
 hint:"Tool of drawing = instrumental.",
 sSrc:"I draw with a pencil."},

{type:"fb", s:"Я пью чай с {1}.",
 a:["молоком"],
 opts:["молоком","молоко","молока","молоке"],
 hint:"'С' + instrumental. Neuter молоко → молоком.",
 sSrc:"I drink tea with milk."},

{type:"match", pairs:[
  {trg:"ручкой", src:"with a pen (tool)"},
  {trg:"с мамой", src:"with mom (company)"},
  {trg:"с сахаром", src:"with sugar (additive)"},
  {trg:"учителем", src:"as a teacher (profession)"},
  {trg:"утром", src:"in the morning"}
,{trg:"учителями",src:"with teachers (pl INS)"}]}
]},

{id:"ruv2_u21l2", title:"Instrumental Endings", icon:"📝", xp:15, board:true, steps:[

{type:"intro", title:"Forming the Instrumental",
 desc:"Instrumental endings differ by gender. Masculine -ом/-ем, feminine -ой/-ей, neuter -ом/-ем.",
 goals:["Form instrumental for each gender","Apply spelling rules","Form personal pronouns"]},

{type:"teach", trg:"стол → столом", src:"table → with table (m)", pos:"phrase", gender:null,
 note:"Masculine: -ом.\nStandard hard consonant ending.",
 example:"A: Ты за столом?\nB: Да, за столом.",
 exampleSrc:"A: Are you at the table?\nB: Yes, at the table.",
 funFact:"'За столом' = at the table. 'За' + instrumental for locations at/behind. Similar: перед столом (in front of), над столом (above)."},

{type:"teach", trg:"книга → книгой", src:"book → with book (f)", pos:"phrase", gender:null,
 note:"Feminine: -а → -ой.\nSpelling rule: after ж/ш/ч/щ/ц unstressed is -ей.",
 example:"A: Он пришёл с книгой.\nB: Хорошо.",
 exampleSrc:"A: He came with a book.\nB: Good.",
 funFact:"Feminine instrumental -ой is highly productive. Also shares with adjective endings (красивой, beautiful). Pattern consistency!"},

{type:"teach", trg:"окно → окном", src:"window → with window (n)", pos:"phrase", gender:null,
 note:"Neuter: -о → -ом.\nSame pattern as masculine.",
 example:"A: Ты перед окном или за окном?\nB: Перед окном.",
 exampleSrc:"A: Are you in front of or behind the window?\nB: In front of.",
 funFact:"Neuter and masculine share instrumental endings -ом. Another simplification in non-nominative cases."},

{type:"teach", trg:"мать → матерью", src:"mother → with mother (f -ь)", pos:"phrase", gender:null,
 note:"Feminine -ь: -ью ending.\nSpecial soft-sign pattern.",
 example:"A: С кем ты говоришь?\nB: С матерью.",
 exampleSrc:"A: Who are you talking with?\nB: With my mother.",
 funFact:"Feminine -ь has unique instrumental -ью: матерью (with mother), дочерью (with daughter), ночью (at night), солью (with salt)."},

{type:"teach", trg:"учителями", src:"with teachers (pl INS)", pos:"phrase", gender:null,
 note:"Plural instrumental: -ами/-ями.\nУчителя → учителями.",
 example:"A: С кем ты встречаешься?\nB: С учителями.",
 exampleSrc:"A: Who are you meeting with?\nB: With teachers.",
 funFact:"Plural instrumental collapses gender distinctions: -ами for hard consonants, -ями for soft. Friends = с друзьями, with kids = с детьми (irreg)."},

{type:"teach", trg:"мной/тобой/ним", src:"with me/you/him", pos:"phrase", gender:null,
 note:"Personal pronouns in instrumental.\nAdds 'н' after prepositions: со мной, с ним.",
 example:"A: Ты пойдёшь со мной?\nB: Конечно!",
 exampleSrc:"A: Will you go with me?\nB: Of course!",
 funFact:"Russian pronouns add 'н' after prepositions: он → ним (after с), её → неё (after у), ему → нему. This 'н' appears only with prepositions, not alone."},

{type:"tip", title:"Instrumental Summary + Pronouns",
 text:"INSTRUMENTAL ENDINGS:\n\nMASCULINE:\nстол → столом.\nдруг → другом.\nгений → гением.\n\nFEMININE:\nкнига → книгой.\nшкола → школой.\nкухня → кухней (after soft -я).\nночь → ночью (soft sign).\n\nNEUTER:\nокно → окном.\nморе → морем.\n\nPLURAL:\nстолы → столами.\nшколы → школами.\nдрузья → друзьями.\n\nPRONOUN FORMS (inst):\nя → мной (or мною).\nты → тобой.\nон → им (or ним after preposition).\nона → ей (or ней).\nмы → нами.\nвы → вами.\nони → ими (or ними).\n\n'СО МНОЙ' for emphasis: 'Со мной', 'with me.'\nThe 'н' insertion after prepositions is crucial: 'с ним' not 'с им.'",
 icon:"📝"},

{type:"mc", q:"'With him' in Russian:",
 opts:["с ним","с ему","с он","с его"],
 ans:"с ним",
 hint:"After preposition, 'он' becomes 'ним' (adds н-). With = с + inst."},

{type:"mc", q:"Instrumental of 'школа':",
 opts:["школе","школой","школа","школу"],
 ans:"школой",
 hint:"Feminine -а → -ой in instrumental."},

{type:"fb", s:"Я стала {1}.",
 a:["врачом"],
 opts:["врачом","врач","врача","врачу"],
 hint:"Becoming profession = instrumental. Masculine врач → врачом.",
 sSrc:"I became a doctor."},

{type:"fb", s:"Ты {1} или без?",
 a:["с сахаром"],
 opts:["с сахаром","без сахара","сахар","сахара"],
 hint:"Asking about coffee/tea: with or without?",
 sSrc:"With sugar or without?"},

{type:"match", pairs:[
  {trg:"столом", src:"with table"},
  {trg:"книгой", src:"with book"},
  {trg:"окном", src:"with window"},
  {trg:"матерью", src:"with mother"},
  {trg:"мной", src:"with me"}
]}
]}

]};
export default UNIT_21;
