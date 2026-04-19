// Russian V2 Unit 29 — Media and News (B2.1)
const UNIT_29 = {n:29, lang:"ru", srcLang:"en", track:"v2", title:"СМИ и новости", sub:"Media and News",
 icon:"📰", level:"B2.1", color:"#7B5EE8",
 lessons:[

{id:"ruv2_u29l1", title:"News and Media", icon:"📰", xp:15, board:true, steps:[

{type:"intro", title:"Modern Media",
 desc:"Media vocabulary: newspapers, television, internet, social networks. Russia has both traditional press and active social media culture.",
 goals:["Name media types","Discuss news topics","Express opinions on media"]},

{type:"teach", trg:"новости", src:"news", pos:"noun", gender:null,
 note:"Plural only (noun).\nSingular 'новость' = a piece of news.",
 example:"A: Смотришь новости?\nB: Каждый вечер.",
 exampleSrc:"A: Do you watch the news?\nB: Every evening.",
 funFact:"Новости is plural. But 'плохая новость' (one bad piece of news) is singular. Similar to English news: usually plural, sometimes singular piece."},

{type:"teach", trg:"газета", src:"newspaper", pos:"noun", gender:"f",
 note:"Feminine. Traditional print media.\nMany Russian papers: Известия, Коммерсантъ.",
 example:"A: Читаешь газеты?\nB: Только онлайн.",
 exampleSrc:"A: Do you read newspapers?\nB: Only online.",
 funFact:"Russian newspaper culture declined drastically post-2000 with internet. Older generations still read print. Major papers now digital-first but keep printed editions."},

{type:"teach", trg:"телевизор", src:"TV (device)", pos:"noun", gender:"m",
 note:"Masculine. The device.\nТелевидение = broadcasting (abstract).",
 example:"A: Купил новый телевизор.\nB: Большой?",
 exampleSrc:"A: I bought a new TV.\nB: Big?",
 funFact:"Russian distinguishes телевизор (TV set, device) from телевидение (TV as institution/medium). 'Смотрю телевизор' — watch the device. 'Российское телевидение' — Russian TV."},

{type:"teach", trg:"интернет", src:"internet", pos:"noun", gender:"m",
 note:"Masculine. Usually capitalized: Интернет.\nEnglish loanword.",
 example:"A: Ищешь в интернете?\nB: Да, в Яндексе.",
 exampleSrc:"A: Are you searching the internet?\nB: Yes, on Yandex.",
 funFact:"В интернете (on the internet, prep case) — standard phrase. Russian treats internet as location. 'В интернете' vs English 'on the internet.'"},

{type:"teach", trg:"социальные сети", src:"social networks", pos:"noun", gender:null,
 note:"Feminine plural.\nOften abbreviated: соцсети.",
 example:"A: Ты в соцсетях?\nB: Только во ВКонтакте.",
 exampleSrc:"A: Are you on social networks?\nB: Only on VKontakte.",
 funFact:"Russia has its own major social network: ВКонтакте (VK). Second-largest social media in Russia (after WhatsApp). Russian alternative to Facebook."},

{type:"teach", trg:"сообщение", src:"message / report", pos:"noun", gender:"n",
 note:"Neuter. Ends in -ие.\nBroadly 'news message' OR 'text message.'",
 example:"A: Получил моё сообщение?\nB: Да, читаю.",
 exampleSrc:"A: Did you get my message?\nB: Yes, reading.",
 funFact:"Сообщение covers 'news report' (в сообщениях = in the news) AND 'text message' (SMS, chat message). Context clarifies."},

{type:"teach", trg:"журналист", src:"journalist", pos:"noun", gender:"m",
 note:"Masculine. Feminine: журналистка.\nFrom журнал (magazine) + -ist.",
 example:"A: Ты знаешь этого журналиста?\nB: Да, читаю его статьи.",
 exampleSrc:"A: Do you know this journalist?\nB: Yes, I read his articles.",
 funFact:"Russian has strong journalism tradition. Famous journalists: Анна Политковская, Дмитрий Муратов (Nobel 2021). Also challenging political environment for journalism."},

{type:"teach", trg:"мнение", src:"opinion", pos:"noun", gender:"n",
 note:"Neuter. Ends in -ие.\n'По моему мнению' = in my opinion.",
 example:"A: Какое твоё мнение?\nB: Сложный вопрос.",
 exampleSrc:"A: What's your opinion?\nB: Complex question.",
 funFact:"'По моему мнению' is the formal 'in my opinion' in Russian. Casually: 'по-моему' (one word). Essential for expressing views."},

{type:"tip", title:"Russian Media Landscape",
 text:"TRADITIONAL MEDIA:\n• газета (newspaper)\n• журнал (magazine)\n• радио (radio)\n• телевидение (TV broadcasting)\n• телевизор (TV set)\n\nDIGITAL MEDIA:\n• интернет (internet)\n• сайт (website)\n• блог (blog)\n• видео (video)\n\nSOCIAL NETWORKS:\n• ВКонтакте (VK) — Russian Facebook.\n• Одноклассники (Classmates) — for older demographic.\n• Telegram — messaging + news channels.\n• Instagram, TikTok — international apps.\n\nNEWS DISCUSSION:\n• мнение (opinion)\n• точка зрения (point of view)\n• аргумент (argument)\n• факт (fact)\n• источник (source)\n\n'СМИ' (средства массовой информации) = mass media. Common umbrella term.",
 icon:"📰"},

{type:"mc", q:"Which is 'social networks' in Russian?",
 opts:["социальное сообщество","социальные сети","социальные медиа","социальная пресса"],
 ans:"социальные сети",
 hint:"Plural feminine: сети (networks)."},

{type:"mc", q:"What does 'СМИ' stand for?",
 opts:["система массовых изданий","средства массовой информации","союз медиа изданий","социальные медиа информационные"],
 ans:"средства массовой информации",
 hint:"Standard acronym for mass media in Russian."},

{type:"fb", s:"По моему {1}, это важно.",
 a:["мнению"],
 opts:["мнению","мнение","мнения","мнений"],
 hint:"'По моему + DAT' = in my opinion. Dative neuter.",
 sSrc:"In my opinion, this is important."},

{type:"fb", s:"Я читаю {1} каждое утро за кофе.",
 a:["газета"],
 opts:["газета","телевизор","интернет","новости"],
 hint:"A printed publication you read, not a screen.",
 sSrc:"I read the newspaper every morning with coffee."},

{type:"match", pairs:[
  {trg:"новости", src:"news"},
  {trg:"газета", src:"newspaper"},
  {trg:"социальные сети", src:"social networks"},
  {trg:"журналист", src:"journalist"},
  {trg:"мнение", src:"opinion"}
]}
,{type:"match",pairs:[{trg:"телевизор",src:"TV (device)"},{trg:"интернет",src:"internet"},{trg:"сообщение",src:"message / report"}]}]}

]};
export default UNIT_29;
