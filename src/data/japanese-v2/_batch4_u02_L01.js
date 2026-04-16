// Batch 4 — Unit 02 Lesson 1: Countries & Nationalities
const BATCH4_L_1 = {
  id:"jav2_u02l_b4_1", title:"くにとこくせき", icon:"🌏", xp:15, board:true,
  steps:[
    {type:"intro", title:"くにとこくせき",
     desc:"Learn more country names and how to talk about nationalities and languages in Japanese.",
     goals:["Name major countries in Japanese","Say nationalities with -じん","Say languages with -ご"]},

    {type:"teach", trg:"ちゅうごく", src:"China", pos:"noun", gender:null,
     note:"Kanji: 中国. Middle + country. The 'Middle Kingdom.'",
     example:"ちゅうごくはとてもひろいくにです。",
     exampleSrc:"China is a very large country.",
     funFact:"China calls itself 中国 (Zhongguo, Middle Kingdom) because ancient Chinese believed their empire was at the center of the world. Japan borrowed this name directly."},

    {type:"teach", trg:"かんこく", src:"South Korea", pos:"noun", gender:null,
     note:"Kanji: 韓国. Also called 大韓民国 (Republic of Korea) officially.",
     example:"かんこくのりょうりがすきです。",
     exampleSrc:"I like Korean food.",
     funFact:"The kanji 韓 is an ancient name for the Korean peninsula. In recent years, Korean culture (K-pop, dramas, food) has become massively popular in Japan, called 韓流 (Korean wave)."},

    {type:"teach", trg:"フランス", src:"France", pos:"noun", gender:null,
     note:"Katakana loanword from French/Portuguese. Country names from Europe use katakana.",
     example:"フランスにいったことがありますか？",
     exampleSrc:"Have you ever been to France?",
     funFact:"Japan has had a love affair with France since the Meiji era. French cuisine, fashion, and art deeply influenced Japan. Paris syndrome is a real condition where Japanese tourists feel disappointed that Paris doesn't match their idealized image."},

    {type:"teach", trg:"ドイツ", src:"Germany", pos:"noun", gender:null,
     note:"From the German word 'Deutsch.' Most Western country names are katakana.",
     example:"ドイツのビールはゆうめいです。",
     exampleSrc:"German beer is famous.",
     funFact:"Japan borrowed heavily from German science and medicine in the Meiji era. Many medical terms in Japanese come from German: カルテ (Karte, medical chart), アレルギー (Allergie, allergy)."},

    {type:"teach", trg:"イギリス", src:"England / the UK", pos:"noun", gender:null,
     note:"From Portuguese 'Ingles.' Used for the UK in general.",
     example:"イギリスはしまぐにです。",
     exampleSrc:"England is an island nation.",
     funFact:"The Japanese name comes from the Portuguese word for England, not from English itself. Portugal was the first European country to make contact with Japan in 1543, so many country names came through Portuguese."},

    {type:"teach", trg:"オーストラリア", src:"Australia", pos:"noun", gender:null,
     note:"Katakana transcription. Often shortened to オージー in slang.",
     example:"オーストラリアにはコアラがいます。",
     exampleSrc:"There are koalas in Australia.",
     funFact:"Australia is one of the top destinations for Japanese exchange students. Working holiday visas between Japan and Australia are very popular among young Japanese seeking adventure."},

    {type:"teach", trg:"ブラジル", src:"Brazil", pos:"noun", gender:null,
     note:"Katakana from Portuguese. Brazil has the largest Japanese community outside Japan.",
     example:"ブラジルはサッカーがつよいです。",
     exampleSrc:"Brazil is strong at soccer.",
     funFact:"Over 1.5 million people of Japanese descent live in Brazil, the largest Japanese diaspora in the world. Japanese immigration to Brazil began in 1908. Many returned to Japan in the 1990s as dekasegi workers."},

    {type:"teach", trg:"インド", src:"India", pos:"noun", gender:null,
     note:"Short katakana form. Full name: インド共和国.",
     example:"インドのカレーはからいです。",
     exampleSrc:"Indian curry is spicy.",
     funFact:"Japanese curry (カレー) came from India via Britain in the Meiji era. It became so popular that curry rice is now considered a Japanese national dish, served in schools, military bases, and homes nationwide."},

    {type:"teach", trg:"にほんじん", src:"Japanese person", pos:"noun", gender:null,
     note:"Country name + じん (person). This pattern works for all nationalities.",
     example:"にほんじんはれいぎただしいです。",
     exampleSrc:"Japanese people are polite.",
     funFact:"The suffix じん (人, person) attaches to any country name to make a nationality. It is one of the most productive suffixes in Japanese."},

    {type:"teach", trg:"にほんご", src:"Japanese language", pos:"noun", gender:null,
     note:"Country name + ご (language). Works for all language names.",
     example:"にほんごをべんきょうしています。",
     exampleSrc:"I am studying Japanese.",
     funFact:"The suffix ご (語, language) works like じん for people. ちゅうごくご (Chinese), フランスご (French), かんこくご (Korean). Simple and predictable."},

    {type:"teach", trg:"がいこくじん", src:"foreigner", pos:"noun", gender:null,
     note:"Kanji: 外国人. Outside + country + person.\nPolite alternative to the informal がいじん.",
     example:"このまちにはがいこくじんがおおいです。",
     exampleSrc:"There are many foreigners in this town.",
     funFact:"がいじん (outsider) is considered informal and sometimes rude. The full がいこくじん (foreign-country-person) is polite. In official documents, 外国人 is always used."},

    {type:"teach", trg:"りゅうがくせい", src:"exchange student / foreign student", pos:"noun", gender:null,
     note:"Kanji: 留学生. Stay + study + student.",
     example:"わたしはりゅうがくせいです。",
     exampleSrc:"I am an exchange student.",
     funFact:"Japan has over 300,000 international students. The government's goal is to attract even more. Many come from China, Vietnam, and South Korea. Scholarships like MEXT are highly competitive globally."},

    {type:"teach", trg:"しゅっしん", src:"hometown / place of origin", pos:"noun", gender:null,
     note:"Kanji: 出身. Exit + body. Where you 'come from.'",
     example:"しゅっしんはどこですか？",
     exampleSrc:"Where are you from?",
     funFact:"Asking someone's shusshin is one of the first things Japanese people do when meeting. Your hometown defines part of your identity. People bond over shared hometowns like nowhere else."},

    {type:"teach", trg:"やくにたつ", src:"to be useful / helpful", pos:"verb", gender:null,
     note:"Compound: やく (role) + に (for) + たつ (stand). Literally 'stand in a role.'",
     example:"このアプリはやくにたちます。",
     exampleSrc:"This app is useful.",
     funFact:"役に立つ is one of many compound verb expressions in Japanese. The idea is that something 'stands up to do its role.' Its opposite is 役に立たない (useless)."},

    {type:"mc", q:"How do you say 'French person'?",
     opts:["フランスじん","フランスご","フランスの","フランスへ"], ans:"フランスじん",
     hint:"Add the suffix for 'person' after the country name."},

    {type:"mc", q:"ドイツ means:",
     opts:["Germany","France","Italy","Spain"], ans:"Germany",
     hint:"This name comes from the German word 'Deutsch.'"},

    {type:"fb", s:"にほん{1}をべんきょうしています。", a:"ご",
     sSrc:"I am studying Japanese (language).",
     opts:["ご","じん","の","に"],
     hint:"The suffix that turns a country name into a language."},

    {type:"match", pairs:[
      {trg:"ちゅうごく", src:"China"},
      {trg:"かんこく", src:"South Korea"},
      {trg:"イギリス", src:"England/UK"},
      {trg:"ブラジル", src:"Brazil"}
    ]},

    {type:"mc", q:"What does りゅうがくせい mean?",
     opts:["exchange student","teacher","tourist","businessman"], ans:"exchange student",
     hint:"Someone who stays in a foreign country to study."},

    {type:"fb", s:"{1}はどこですか？", a:"しゅっしん",
     sSrc:"Where are you from?",
     opts:["しゅっしん","にほん","がいこく","がっこう"],
     hint:"The word for your hometown or place of origin."},

    {type:"mc", q:"Which country name comes from Portuguese?",
     opts:["イギリス","ドイツ","ちゅうごく","かんこく"], ans:"イギリス",
     hint:"Portugal was the first European nation to reach Japan."}
  ]
};
export default BATCH4_L_1;
