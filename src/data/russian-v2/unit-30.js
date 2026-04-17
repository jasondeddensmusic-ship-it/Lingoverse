// Russian V2 Unit 30 — Arts and Culture (B2.2)
const UNIT_30 = {n:30, lang:"ru", srcLang:"en", track:"v2", title:"Искусство и культура", sub:"Arts and Culture",
 icon:"🎨", level:"B2.2", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u30l1", title:"Russian Arts", icon:"🎨", xp:15, board:true, steps:[

{type:"intro", title:"Russian Arts and Culture",
 desc:"Russia's contribution to world arts is immense: ballet, literature, music, visual arts. B2 vocabulary covers the full artistic domain.",
 goals:["Discuss arts vocabulary","Name famous Russian artists","Use culture terms"]},

{type:"teach", trg:"искусство", src:"art", pos:"noun", gender:"n",
 note:"Neuter. Ends in -во.\nAll fine arts.",
 example:"A: Ты интересуешься искусством?\nB: Да, люблю живопись.",
 exampleSrc:"A: Are you interested in art?\nB: Yes, I love painting.",
 funFact:"Искусство shares root with 'искушать' (to tempt). Art as something that tempts/draws attention. Russian philosophical view: art is seductive power."},

{type:"teach", trg:"культура", src:"culture", pos:"noun", gender:"f",
 note:"Feminine. Latin loanword.\nBroad: arts, traditions, lifestyle.",
 example:"A: Русская культура богата.\nB: Особенно литература.",
 exampleSrc:"A: Russian culture is rich.\nB: Especially literature.",
 funFact:"Министерство культуры (Ministry of Culture) is central in Russia. Russians cultivate 'high culture' as distinct from everyday life. Cultural capital is socially important."},

{type:"teach", trg:"литература", src:"literature", pos:"noun", gender:"f",
 note:"Feminine. International root.\nRussia's cultural pride.",
 example:"A: Любишь литературу?\nB: Особенно Толстого и Достоевского.",
 exampleSrc:"A: Do you love literature?\nB: Especially Tolstoy and Dostoevsky.",
 funFact:"Russian literature is arguably most acclaimed contribution to world literature. Pushkin, Tolstoy, Dostoevsky, Chekhov, Bulgakov. Every educated Russian reads them."},

{type:"teach", trg:"музыка", src:"music", pos:"noun", gender:"f",
 note:"Feminine. International root.\nВ России classical tradition strong.",
 example:"A: Какая музыка у тебя?\nB: Чайковский.",
 exampleSrc:"A: What music do you like?\nB: Tchaikovsky.",
 funFact:"Russian musical contribution: Tchaikovsky, Rachmaninov, Stravinsky, Shostakovich, Rimsky-Korsakov. Nutcracker, Swan Lake — world icons. Strong Russian composer tradition."},

{type:"teach", trg:"картина", src:"painting", pos:"noun", gender:"f",
 note:"Feminine. Ends in -а.\nAlso: film (colloquial).",
 example:"A: Эта картина в Эрмитаже?\nB: В Третьяковке.",
 exampleSrc:"A: Is this painting at the Hermitage?\nB: At the Tretyakovka.",
 funFact:"Русские картины: Третьяковская галерея (Tretyakov Gallery in Moscow) has iconic Russian paintings. Эрмитаж (Hermitage in Petersburg) has world art."},

{type:"teach", trg:"писатель", src:"writer", pos:"noun", gender:"m",
 note:"Masculine. Feminine: писательница.\nFrom писать (to write).",
 example:"A: Ты читал этого писателя?\nB: Да, великий писатель.",
 exampleSrc:"A: Have you read this writer?\nB: Yes, a great writer.",
 funFact:"Russian literary tradition canonizes writers as moral authorities. Писатель carries more weight than English 'writer' — almost prophetic role."},

{type:"teach", trg:"балет", src:"ballet", pos:"noun", gender:"m",
 note:"Masculine. French loanword.\nBolshoi = ballet theater in Moscow.",
 example:"A: Пойдём в Большой на балет?\nB: С удовольствием.",
 exampleSrc:"A: Let's go to the Bolshoi for ballet?\nB: With pleasure.",
 funFact:"Russian ballet is world-renowned. Bolshoi Theater (Moscow), Mariinsky (Petersburg) are top venues. Prima ballerinas like Plisetskaya are cultural icons."},

{type:"teach", trg:"театр", src:"theater", pos:"noun", gender:"m",
 note:"Masculine. Greek loanword.\nBroadly: theater building or medium.",
 example:"A: Идёшь в театр?\nB: Да, на новую пьесу.",
 exampleSrc:"A: Going to theater?\nB: Yes, to a new play.",
 funFact:"Russian theater culture strong. Moscow Art Theater (Станиславский), Meyerhold theater innovations shaped world theater. Drama schools highly competitive."},

{type:"tip", title:"Russian Cultural Pantheon",
 text:"WRITERS:\n• Пушкин — poet, 'founder of modern Russian literature.'\n• Толстой — Война и мир, Анна Каренина.\n• Достоевский — Преступление и наказание.\n• Чехов — short stories, plays.\n• Булгаков — Мастер и Маргарита.\n\nCOMPOSERS:\n• Чайковский — Nutcracker, Swan Lake.\n• Рахманинов — Piano concerti.\n• Стравинский — Rite of Spring.\n• Шостакович — 15 symphonies.\n\nPAINTERS:\n• Репин — Волга Burlaks.\n• Айвазовский — seascapes.\n• Кандинский — abstract art pioneer.\n• Малевич — Black Square.\n\nBALLET STARS:\n• Павлова — early 20th century icon.\n• Нуреев — defected to West.\n• Плисецкая — Bolshoi legend.\n\nRUSSIAN MUSEUMS:\n• Эрмитаж — Petersburg, world art.\n• Третьяковка — Moscow, Russian art.\n• Пушкинский музей — Moscow, diverse art.",
 icon:"🎨"},

{type:"mc", q:"Which Russian theater is world-famous for ballet?",
 opts:["Лицей","Эрмитаж","Большой","Третьяковка"],
 ans:"Большой",
 hint:"Literally 'Big' — the Bolshoi Theater in Moscow."},

{type:"fb", s:"Моя любимая русская {1} — 'Война и мир'.",
 a:["книга"],
 opts:["книга","картина","музыка","балет"],
 hint:"Tolstoy's Война и мир is a famous Russian novel — literature.",
 sSrc:"My favorite Russian book is 'War and Peace.'"},

{type:"match", pairs:[
  {trg:"искусство", src:"art"},
  {trg:"литература", src:"literature"},
  {trg:"картина", src:"painting"},
  {trg:"писатель", src:"writer"},
  {trg:"балет", src:"ballet"}
]}
]}

]};
export default UNIT_30;
