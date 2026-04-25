// Batch 4. Unit 02 Lesson 1: Countries & Nationalities
const BATCH4_L_1 = {
  id:"jav2_u02l_b4_1", title:"国(くに)と国籍(こくせき) (II)", icon:"🌏", xp:15, board:true,
  steps:[
    {type:"intro", title:"国(くに)と国籍(こくせき)",
     desc:"Learn more country names and how to talk about nationalities and languages in Japanese.",
     goals:["Name major countries in Japanese","Say nationalities with -じん","Say languages with -ご"]},

    {type:"teach", trg:"中国(ちゅうごく)", src:"China", pos:"noun", gender:null,
     note:"Kanji: 中国. Middle + country. The 'Middle Kingdom.'",
     example:"中国(ちゅうごく)はとても広(ひろ)い国(くに)です。",
     exampleSrc:"China is a very large country.",
     funFact:"China calls itself 中国 (Zhongguo, Middle Kingdom) because ancient Chinese believed their empire was at the center of the world. Japan borrowed this name directly."},

    {type:"teach", trg:"韓国(かんこく)", src:"South Korea", pos:"noun", gender:null,
     note:"Kanji: 韓国. Also called 大韓民国(だいかんみんこく) (Republic of Korea) officially.",
     example:"韓国(かんこく)の料理(りょうり)が好(す)きです。",
     exampleSrc:"I like Korean food.",
     funFact:"The kanji 韓 is an ancient name for the Korean peninsula. In recent years, Korean culture (K-pop, dramas, food) has become massively popular in Japan, called 韓流(かんりゅう) (Korean wave)."},

    {type:"teach", trg:"フランス", src:"France", pos:"noun", gender:null,
     note:"Katakana loanword from French/Portuguese. Country names from Europe use katakana.",
     example:"フランスに行(い)ったことがありますか？",
     exampleSrc:"Have you ever been to France?",
     funFact:"Japan has had a love affair with France since the Meiji era. French cuisine, fashion, and art deeply influenced Japan. Paris syndrome is a real condition where Japanese tourists feel disappointed that Paris doesn't match their idealized image."},

    {type:"teach", trg:"ドイツ", src:"Germany", pos:"noun", gender:null,
     note:"From the German word 'Deutsch.' Most Western country names are katakana.",
     example:"ドイツのビールは有名(ゆうめい)です。",
     exampleSrc:"German beer is famous.",
     funFact:"Japan borrowed heavily from German science and medicine in the Meiji era. Many medical terms in Japanese come from German: カルテ (Karte, medical chart), アレルギー (Allergie, allergy)."},

    {type:"teach", trg:"イギリス", src:"England / the UK", pos:"noun", gender:null,
     note:"From Portuguese 'Ingles.' Used for the UK in general.",
     example:"イギリスは島国(しまぐに)です。",
     exampleSrc:"England is an island nation.",
     funFact:"The Japanese name comes from the Portuguese word for England, not from English itself. Portugal was the first European country to make contact with Japan in 1543, so many country names came through Portuguese."},

    {type:"teach", trg:"オーストラリア", src:"Australia", pos:"noun", gender:null,
     note:"Katakana transcription. Often shortened to オージー in slang.",
     example:"オーストラリアにはコアラがいます。",
     exampleSrc:"There are koalas in Australia.",
     funFact:"Australia is one of the top destinations for Japanese exchange students. Working holiday visas between Japan and Australia are very popular among young Japanese seeking adventure."},

    {type:"teach", trg:"ブラジル", src:"Brazil", pos:"noun", gender:null,
     note:"Katakana from Portuguese. Brazil has the largest Japanese community outside Japan.",
     example:"ブラジルはサッカーが強(つよ)いです。",
     exampleSrc:"Brazil is strong at soccer.",
     funFact:"Over 1.5 million people of Japanese descent live in Brazil, the largest Japanese diaspora in the world. Japanese immigration to Brazil began in 1908. Many returned to Japan in the 1990s as dekasegi workers."},

    {type:"teach", trg:"インド", src:"India", pos:"noun", gender:null,
     note:"Short katakana form. Full name: インド共和国(きょうわこく).",
     example:"インドのカレーは辛(から)いです。",
     exampleSrc:"Indian curry is spicy.",
     funFact:"Japanese curry (カレー) came from India via Britain in the Meiji era. It became so popular that curry rice is now considered a Japanese national dish, served in schools, military bases, and homes nationwide."},

    {type:"teach", trg:"日本人(にほんじん)", src:"Japanese person", pos:"noun", gender:null,
     note:"Country name + じん (person). This pattern works for all nationalities.",
     example:"日本人(にほんじん)は礼儀(れいぎ)正(ただ)しいです。",
     exampleSrc:"Japanese people are polite.",
     funFact:"The suffix じん (人, person) attaches to any country name to make a nationality. It is one of the most productive suffixes in Japanese."},

    {type:"teach", trg:"日本語(にほんご)", src:"Japanese language", pos:"noun", gender:null,
     note:"Country name + ご (language). Works for all language names.",
     example:"日本語(にほんご)を勉強(べんきょう)しています。",
     exampleSrc:"I am studying Japanese.",
     funFact:"The suffix ご (語, language) works like じん for people. 中国語(ちゅうごくご) (Chinese), フランス語(ご) (French), 韓国語(かんこくご) (Korean). Simple and predictable."},

    {type:"teach", trg:"外国人(がいこくじん)", src:"foreigner", pos:"noun", gender:null,
     note:"Kanji: 外国人. Outside + country + person.\nPolite alternative to the informal がいじん.",
     example:"この町(まち)には外国人(がいこくじん)が多(おお)いです。",
     exampleSrc:"There are many foreigners in this town.",
     funFact:"がいじん (outsider) is considered informal and sometimes rude. The full 外国人(がいこくじん) (foreign-country-person) is polite. In official documents, 外国人 is always used."},

    {type:"teach", trg:"留学生(りゅうがくせい)", src:"exchange student / foreign student", pos:"noun", gender:null,
     note:"Kanji: 留学生. Stay + study + student.",
     example:"私(わたし)は留学生(りゅうがくせい)です。",
     exampleSrc:"I am an exchange student.",
     funFact:"Japan has over 300,000 international students. The government's goal is to attract even more. Many come from China, Vietnam, and South Korea. Scholarships like MEXT are highly competitive globally."},

    {type:"teach", trg:"出身(しゅっしん)", src:"hometown / place of origin", pos:"noun", gender:null,
     note:"Kanji: 出身. Exit + body. Where you 'come from.'",
     example:"出身(しゅっしん)はどこですか？",
     exampleSrc:"Where are you from?",
     funFact:"Asking someone's shusshin is one of the first things Japanese people do when meeting. Your hometown defines part of your identity. People bond over shared hometowns like nowhere else."},

    {type:"teach", trg:"役(やく)に立(た)つ", src:"to be useful / helpful", pos:"verb", gender:null,
     note:"Compound: 役(やく) (role) + に (for) + 立(た)つ (stand). Literally 'stand in a role.'",
     example:"このアプリは役(やく)に立(た)ちます。",
     exampleSrc:"This app is useful.",
     funFact:"役(やく)に立(た)つ is one of many compound verb expressions in Japanese. The idea is that something 'stands up to do its role.' Its opposite is 役(やく)に立(た)たない (useless)."},

    {type:"mc", q:"How do you say 'French person'?",
     opts:["フランス人(じん)","フランス語(ご)","フランスの","フランスへ"], ans:"フランス人(じん)",
     hint:"Add the suffix for 'person' after the country name."},

    {type:"mc", q:"ドイツ means:",
     opts:["Spain","Germany","France","Italy"], ans:"Germany",
     hint:"This name comes from the German word 'Deutsch.'"},

    {type:"fb", s:"日本(にほん){1}を勉強(べんきょう)しています。", a:"語(ご)",
     sSrc:"I am studying Japanese (language).",
     opts:["語(ご)","人(じん)","の","に"],
     hint:"The suffix that turns a country name into a language."},

    {type:"match", pairs:[
      {trg:"中国(ちゅうごく)", src:"China"},
      {trg:"韓国(かんこく)", src:"South Korea"},
      {trg:"イギリス", src:"England/UK"},
      {trg:"ブラジル", src:"Brazil"}
    ,{trg:"役(やく)に立(た)つ",src:"to be useful / helpful"}]},

    {type:"mc", q:"What does 留学生(りゅうがくせい) mean?",
     opts:["tourist","businessman","exchange student","teacher"], ans:"exchange student",
     hint:"Someone who stays in a foreign country to study."},

    {type:"fb", s:"{1}はどこですか？", a:"出身(しゅっしん)",
     sSrc:"Where are you from?",
     opts:["出身(しゅっしん)","日本(にほん)","外国(がいこく)","学校(がっこう)"],
     hint:"The word for your hometown or place of origin."},

    {type:"mc", q:"Which country name comes from Portuguese?",
     opts:["ドイツ","中国(ちゅうごく)","韓国(かんこく)","イギリス"], ans:"イギリス",
     hint:"Portugal was the first European nation to reach Japan."}
  ,{type:"match",pairs:[{trg:"オーストラリア",src:"Australia"},{trg:"インド",src:"India"},{trg:"日本人(にほんじん)",src:"Japanese person"},{trg:"日本語(にほんご)",src:"Japanese language"},{trg:"外国人(がいこくじん)",src:"foreigner"},{trg:"留学生(りゅうがくせい)",src:"exchange student / foreign student"}]},
  {type:"fb", s:"{1}はソウルが首都(しゅと)です。", a:["韓国(かんこく)"], opts:["韓国(かんこく)","中国(ちゅうごく)","フランス","ドイツ"], hint:"The East Asian nation whose capital is Seoul, south of the peninsula's border.", sSrc:"{1}'s capital is Seoul."}
]
};
export default BATCH4_L_1;
