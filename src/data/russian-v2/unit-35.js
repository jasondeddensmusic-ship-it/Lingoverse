// Russian V2 Unit 35 — Idioms and Proverbs (B2.2)
const UNIT_35 = {n:35, lang:"ru", srcLang:"en", track:"v2", title:"Фразеологизмы", sub:"Idioms and Proverbs",
 icon:"💬", level:"B2.2", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u35l1", title:"Russian Idioms", icon:"💬", xp:15, board:true, steps:[

{type:"intro", title:"Idiomatic Russian",
 desc:"Russian idioms reveal cultural logic. B2 learners should recognize common phrases — literal translation often makes no sense.",
 goals:["Learn key idioms","Understand their cultural meaning","Use in appropriate contexts"]},

{type:"teach", trg:"водить за нос", src:"to lead by the nose (deceive)", pos:"phrase", gender:null,
 note:"Literal: lead by the nose. Figurative: deceive, fool.\n'Меня водили за нос' = they were deceiving me.",
 example:"A: Я думал, он честный.\nB: Он тебя за нос водил.",
 exampleSrc:"A: I thought he was honest.\nB: He was deceiving you.",
 funFact:"This idiom comes from fairs where bears were led by nose rings. 'Водить за нос' = making someone follow you like a helpless animal. Strong disapproval."},

{type:"teach", trg:"бить баклуши", src:"to beat buckets (to be idle)", pos:"phrase", gender:null,
 note:"Literal: beat buckets. Figurative: goof off.\n'Не бей баклуши!' = stop wasting time!",
 example:"A: Что делал?\nB: Весь день бил баклуши.",
 exampleSrc:"A: What were you doing?\nB: Was idle all day.",
 funFact:"'Баклуши' were chunks of wood for making spoons. The job was trivial, hence 'beating buckets' = doing nothing important. Old Russian industrial origin."},

{type:"teach", trg:"вешать лапшу на уши", src:"to hang noodles on ears (lie)", pos:"phrase", gender:null,
 note:"Literal: hang noodles on ears. Figurative: deceive with stories.\nPopular expression, often self-deprecating.",
 example:"A: Это правда?\nB: Не вешай мне лапшу на уши.",
 exampleSrc:"A: Is this true?\nB: Don't hang noodles on my ears (don't deceive me).",
 funFact:"One of Russian's most colorful idioms. Modern, post-Soviet addition. Visual image: sticky noodle absurdly draped on ears = obvious, ridiculous lies."},

{type:"teach", trg:"как две капли воды", src:"like two drops of water", pos:"phrase", gender:null,
 note:"Literal: like two drops of water. Figurative: identical twins/look-alikes.\nBoth literal and figurative.",
 example:"A: Брат с сестрой...\nB: Как две капли воды.",
 exampleSrc:"A: Brother and sister...\nB: Like two peas in a pod.",
 funFact:"English equivalent: 'like two peas in a pod.' Both languages use nature metaphors for identical appearance. Russian version emphasizes water's uniform nature."},

{type:"teach", trg:"убить двух зайцев", src:"kill two rabbits (with one stone)", pos:"phrase", gender:null,
 note:"Literal: kill two rabbits. Figurative: two birds with one stone.\nEfficient accomplishment.",
 example:"A: Идёшь на работу и встретишься с другом?\nB: Два зайца.",
 exampleSrc:"A: Going to work and meeting a friend?\nB: Two rabbits.",
 funFact:"English: 'two birds with one stone.' Russian уникальный: rabbits (hares), not birds. Old hunting metaphor. Same meaning, different animal choice."},

{type:"teach", trg:"кот в мешке", src:"cat in a bag (pig in a poke)", pos:"phrase", gender:null,
 note:"Literal: cat in bag. Figurative: unknown purchase, risky deal.\n'Купить кота в мешке' = buy a pig in a poke.",
 example:"A: Брать эту квартиру?\nB: Без осмотра — кот в мешке.",
 exampleSrc:"A: Buy this apartment?\nB: Without inspection — a pig in a poke.",
 funFact:"Medieval origin: scammers sold cat in bag claiming it was suckling pig. 'Не покупай кота в мешке' = don't buy a cat in a bag. Universal European idiom."},

{type:"tip", title:"Russian Proverbs",
 text:"FAMOUS RUSSIAN PROVERBS:\n\n'Без труда не выловишь и рыбку из пруда.'\n(Without work you won't catch a fish from the pond — no pain, no gain.)\n\n'Семь раз отмерь, один раз отрежь.'\n(Measure seven times, cut once — plan carefully.)\n\n'В гостях хорошо, а дома лучше.'\n(It's good as a guest, but better at home.)\n\n'Цыплят по осени считают.'\n(Count the chickens in autumn — don't count chickens before they hatch.)\n\n'Яблоко от яблони недалеко падает.'\n(The apple doesn't fall far from the tree.)\n\n'Любишь кататься — люби и саночки возить.'\n(Love to ride — love to pull the sled too.)\n\n'Волков бояться — в лес не ходить.'\n(If you fear wolves, don't go into the forest — no risk, no reward.)\n\nMASTER THESE:\nThey appear in literature, daily conversation, political speeches. Quote them to sound culturally fluent.",
 icon:"💬"},

{type:"mc", q:"What does 'бить баклуши' mean?",
 opts:["To work hard","To be idle / waste time","To fight","To travel"],
 ans:"To be idle / waste time",
 hint:"Colorful Russian idiom for laziness."},

{type:"mc", q:"'Два зайца' (two rabbits) is idiom for:",
 opts:["Being fast","Accomplishing two things at once","Having luck","Being scared"],
 ans:"Accomplishing two things at once",
 hint:"English equivalent: 'two birds with one stone.'"},

{type:"fb", s:"Не верь ему, он {1} на уши.",
 a:["лапшу вешает"],
 opts:["лапшу вешает","рыбу жарит","бежит","кричит"],
 hint:"Noodles on ears = lying.",
 sSrc:"Don't believe him, he's lying to you."},

{type:"match", pairs:[
  {trg:"водить за нос", src:"to deceive"},
  {trg:"бить баклуши", src:"to be idle"},
  {trg:"лапшу на уши", src:"to tell lies"},
  {trg:"две капли воды", src:"identical"},
  {trg:"два зайца", src:"two at once"}
]}
,

{type:"fb", s:"Не покупай машину без проверки — это настоящий {1}.",
 a:["кот в мешке"],
 opts:["кот в мешке","бить баклуши","водить за нос","как две капли воды"],
 hint:"Russian idiom for buying something unseen, a risky unknown purchase.",
 sSrc:"Don't buy the car without checking — it's a real pig in a poke."},

{type:"match", pairs:[
  {trg:"убить двух зайцев", src:"kill two rabbits (with one stone)"},
  {trg:"кот в мешке", src:"cat in a bag (pig in a poke)"}
]}]}

]};
export default UNIT_35;
