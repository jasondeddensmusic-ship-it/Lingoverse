// Unit 29 Batch 5 Lesson 2: ろうどうけいざい (Labor Economics & Work Reform)
const BATCH5_L_2 = {
  id:"jav2_u29l_b5_2", title:"ろうどうけいざい", icon:"👷", xp:15, board:true,
  steps:[
    {type:"intro", title:"ろうどうけいざい",
     desc:"Japan's labor market faces unique challenges: lifetime employment erosion, non-regular workers, gender gaps, and foreign worker integration. Learn the vocabulary that defines these ongoing debates. These terms are essential for understanding modern Japanese society and appear frequently in JLPT N2 reading passages.",
     goals:["Discuss employment types and labor reform","Use vocabulary for wages, benefits, and working conditions","Understand Japan's evolving work culture"]},

    {type:"teach", trg:"こよう", src:"employment / hiring", pos:"noun", gender:null,
     note:"Kanji: 雇用. こようする = to employ/hire.\nしゅうしんこよう = lifetime employment. ひせいきこよう = non-regular employment.",
     example:"A: にほんのこようかんきょうはおおきくかわりつつあります。\nB: しゅうしんこようのじだいはおわりつつありますね。",
     exampleSrc:"A: Japan's employment environment is changing greatly.\nB: The era of lifetime employment is coming to an end.",
     funFact:"雇用 uses 雇 (employ) and 用 (use). Japan's famous しゅうしんこよう (lifetime employment) system, where companies hired new graduates and kept them until retirement, defined postwar corporate culture. This system is weakening as companies shift to ひせいきこよう (non-regular employment: part-time, contract, dispatch workers). About 37% of workers are now ひせいき, creating a social divide."},

    {type:"teach", trg:"ちんぎん", src:"wages / pay", pos:"noun", gender:null,
     note:"Kanji: 賃金. さいていちんぎん = minimum wage.\nちんぎんかくさ = wage gap.",
     example:"A: さいていちんぎんのひきあげがもとめられています。\nB: せいかつひのじょうしょうにみあったちんぎんがひつようですね。",
     exampleSrc:"A: An increase in the minimum wage is being demanded.\nB: Wages that match the rising cost of living are needed.",
     funFact:"賃金 uses 賃 (rent/wages) and 金 (money). Japan's real ちんぎん barely grew for 30 years, a phenomenon called 'wage stagnation.' さいていちんぎん (minimum wage) varies by prefecture: Tokyo's is highest. The ちんぎんかくさ (wage gap) between regular and non-regular workers, and between men and women, remains a major social issue driving labor reform discussions."},

    {type:"teach", trg:"てんしょく", src:"job change / career change", pos:"noun", gender:null,
     note:"Kanji: 転職. てんしょくする = to change jobs.\nてんしょくサイト = job-switching website.",
     example:"A: さいきんてんしょくするひとがふえています。\nB: ひとつのかいしゃにこだわらないせだいがふえましたね。",
     exampleSrc:"A: More people are changing jobs recently.\nB: The generation that does not stick to one company is growing.",
     funFact:"転職 was once considered disloyal in Japan, where lifetime employment was the norm. The stigma has largely disappeared. てんしょくサイト (job-switching websites) like リクナビNEXT and doda are booming. Young workers change jobs for better conditions, and companies increasingly value diverse experience. This cultural shift represents one of Japan's biggest workplace transformations."},

    {type:"teach", trg:"いくきゅう", src:"parental leave / childcare leave", pos:"noun", gender:null,
     note:"Kanji: 育休 (short for 育児休業). いくきゅうをとる = to take parental leave.\nMale いくきゅう is increasing but still low.",
     example:"A: だんせいのいくきゅうしゅとくりつをあげることがもくひょうです。\nB: しょくばのりかいがひつようですね。",
     exampleSrc:"A: The goal is to raise the male parental leave uptake rate.\nB: Workplace understanding is necessary.",
     funFact:"育休 abbreviates 育児休業 (ikuji kyuugyou, childcare leave). Japan's parental leave system is generous on paper but underutilized, especially by men. Male いくきゅう rates have risen from 2% (2010) to about 17% (2023), but remain far below the government's 50% target. Cultural pressure to not burden colleagues (迷惑をかけない) prevents many fathers from taking leave."},

    {type:"mc", q:"ひせいきこよう means:", opts:["Non-regular employment (part-time, contract, temp)","Full-time permanent employment","Self-employment","Government employment"], ans:"Non-regular employment (part-time, contract, temp)",
     hint:"ひ (n...-) + せいき (r...) + こよう (e...) = workers without permanent full-t... status."},

    {type:"teach", trg:"はたらきかたかいかく", src:"work style reform", pos:"noun", gender:null,
     note:"Kanji: 働き方改革. Government initiative to improve working conditions.\nOvertime caps, paid leave enforcement, flexible work.",
     example:"A: はたらきかたかいかくでざんぎょうじかんにじょうげんがもうけられました。\nB: しかし、じっさいのうんようはかいしゃによってちがいますね。",
     exampleSrc:"A: Work style reform established caps on overtime hours.\nB: However, actual implementation varies by company.",
     funFact:"働き方改革 became law in 2018. Key measures: overtime capped at 720 hours/year, mandatory 5 days paid leave, equal pay for equal work. The reform addresses karoshi (過労死, death from overwork) and the declining birth rate (overwork prevents family life). テレワーク (telework) expanded dramatically during the pandemic, accelerating work style changes."},

    {type:"teach", trg:"ふくりこうせい", src:"employee benefits / welfare benefits", pos:"noun", gender:null,
     note:"Kanji: 福利厚生. ふくり (welfare) + こうせい (promotion/enhancement).\nCompany-provided benefits beyond salary.",
     example:"A: このかいしゃはふくりこうせいがじゅうじつしています。\nB: しゃたくやほけんのほかにジムのりようもできるんですね。",
     exampleSrc:"A: This company has comprehensive employee benefits.\nB: Besides company housing and insurance, you can also use a gym.",
     funFact:"福利厚生 includes company housing (社宅 shataku), health insurance supplements, retirement bonuses, commuter passes, and recreational facilities. Japanese companies traditionally offered generous ふくりこうせい as part of the lifetime employment package. As employment becomes more fluid, companies use attractive ふくりこうせい to recruit talent. Some offer unique perks like pet leave or birthday bonuses."},

    {type:"teach", trg:"がいこくじんろうどうしゃ", src:"foreign worker", pos:"noun", gender:null,
     note:"Kanji: 外国人労働者. がいこくじん (foreigner) + ろうどうしゃ (worker).\nにほんのろうどうりょくぶそくをおぎなうために increasing.",
     example:"A: がいこくじんろうどうしゃのかずがねんねんふえています。\nB: たぶんかきょうせいしゃかいのじつげんがかだいですね。",
     exampleSrc:"A: The number of foreign workers is increasing year by year.\nB: Realizing a multicultural coexistence society is the challenge.",
     funFact:"Japan's がいこくじんろうどうしゃ exceeded 2 million in 2023. The ぎのうじっしゅう (Technical Intern Training) program has been criticized for labor exploitation. A new とくていぎのう (Specified Skilled Worker) visa was created in 2019 for sectors with severe labor shortages: nursing, construction, agriculture, and food service. Immigration policy remains one of Japan's most debated topics."},

    {type:"tip", title:"Japanese Employment Types",
     text:"せいしゃいん = regular full-time employee\nけいやくしゃいん = contract employee\nパート = part-time worker\nアルバイト = part-time job (student/temporary)\nはけんしゃいん = dispatched/temp worker\nフリーランス = freelancer\nきぎょうか = entrepreneur\n\nKey differences:\nせいしゃいん: Full benefits, job security, career path\nひせいき: Lower pay, fewer benefits, less security\n\nLabor reform goals:\nどういつろうどう どういつちんぎん = equal pay for equal work\nざんぎょうじかんじょうげん = overtime caps\nゆうきゅうきゅうか = paid leave enforcement"},

    {type:"teach", trg:"ろうどうりょくぶそく", src:"labor shortage", pos:"noun", gender:null,
     note:"Kanji: 労働力不足. ろうどうりょく (labor force) + ぶそく (shortage).\nJapan's critical demographic challenge.",
     example:"A: こうれいかにともなってろうどうりょくぶそくがしんこくになっています。\nB: ロボットやAIのかつようがきたいされていますね。",
     exampleSrc:"A: Labor shortages are becoming serious alongside aging.\nB: Utilization of robots and AI is being anticipated.",
     funFact:"労働力不足 is Japan's defining economic challenge. With the population declining and aging, sectors like nursing, construction, agriculture, and logistics face critical shortages. Solutions include: women's workforce participation (女性活躍), elderly employment extension (定年延長), foreign workers (外国人労働者), and automation (自動化). Each solution has its own political and cultural complexities."},

    {type:"fb", s:"さいきん{1}するひとがふえています。\n(More people are changing jobs recently.)", a:"てんしょく", opts:["てんしょく","しゅうしょく","たいしょく","きゅうしょく"], sSrc:"More people are changing jobs recently.",
     hint:"The word for switching from one job to another, not first employment or retirement."},

    {type:"mc", q:"はたらきかたかいかく aims to:", opts:["Improve working conditions (overtime caps, paid leave, flexibility)","Increase working hours","Reduce wages","Eliminate all regulations"], ans:"Improve working conditions (overtime caps, paid leave, flexibility)",
     hint:"This government initiative addresses overwork and promotes better work-life balance."},

    {type:"match", pairs:[{trg:"こよう",src:"employment"},{trg:"ちんぎん",src:"wages"},{trg:"てんしょく",src:"job change"},{trg:"いくきゅう",src:"parental leave"}]},

    {type:"fb", s:"こうれいかにともなって{1}がしんこくになっています。\n(Labor shortages are becoming serious alongside aging.)", a:"ろうどうりょくぶそく", opts:["ろうどうりょくぶそく","じんこうぞうか","けいざいせいちょう","ちんぎんじょうしょう"], sSrc:"Labor shortages are becoming serious alongside aging.",
     hint:"The compound for 'insufficient workforce,' combining labor force with shortage."},

    {type:"mc", q:"しゅうしんこよう describes:", opts:["Working at the same company from graduation to retirement","Freelance work","Government employment","Working multiple jobs"], ans:"Working at the same company from graduation to retirement",
     hint:"しゅうしん (whole life/lifetime) + こよう (employment) = the traditional Japanese career model."}
  ]
};
export default BATCH5_L_2;
