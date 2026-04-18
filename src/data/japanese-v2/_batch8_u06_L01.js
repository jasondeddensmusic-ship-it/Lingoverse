// Batch 8 – Unit 06 (A1.2 Family): Family Events & Milestones
const BATCH8_L1 = {
  id:"jav2_u06l_b8_1", title:"家族(かぞく)のイベント", icon:"🎊", xp:15, board:true,
  steps:[
    {type:"intro", title:"家族(かぞく)のイベント",
     desc:"Learn vocabulary for family events and life milestones celebrated in Japan. From birth celebrations to coming-of-age ceremonies, these words connect language to culture.",
     goals:["Name major family celebrations and milestones","Describe life events using basic vocabulary","Understand Japanese ceremonial culture"]},

    {type:"teach", trg:"誕生日(たんじょうび)", src:"birthday", pos:"noun", gender:null,
     note:"Kanji: 誕生日. 誕生日(たんじょうび)パーティー = birthday party.\nお誕生日(たんじょうび)おめでとう = happy birthday.",
     example:"A: 誕生日(たんじょうび)はいつですか？\nB: 三月(さんがつ)十五日(じゅうごにち)です。",
     exampleSrc:"A: When is your birthday?\nB: March 15th.",
     funFact:"Japanese birthday celebrations have become Westernized with cake and candles, but traditionally age was counted differently: everyone aged one year on New Year's Day (数(かぞ)え年(どし)). This old system meant individual birthdays were less important. Modern Japan celebrates both ways for some ceremonies."},

    {type:"teach", trg:"結婚式(けっこんしき)", src:"wedding ceremony", pos:"noun", gender:null,
     note:"結婚(けっこん) (marriage) + 式(しき) (ceremony).\n神前式(しんぜんしき) = Shinto wedding. 教会式(きょうかいしき) = church wedding.",
     example:"A: 来月(らいげつ)結婚式(けっこんしき)があります。\nB: おめでとうございます！どこでですか？",
     exampleSrc:"A: There is a wedding ceremony next month.\nB: Congratulations! Where?",
     funFact:"Japanese 結婚式(けっこんしき) often combine multiple styles: a Shinto ceremony at a shrine, followed by a Western-style reception with white dress and cake. The average Japanese wedding costs about 3.5 million yen. Guests give ご祝儀(しゅうぎ) (monetary gifts) in special envelopes."},

    {type:"teach", trg:"お宮参(みやまい)り", src:"first shrine visit (for newborns)", pos:"noun", gender:null,
     note:"A baby's first visit to a local shrine, typically at one month old.\n神様(かみさま)に報告(ほうこく)する = to report to the gods.",
     example:"A: 赤(あか)ちゃんのお宮参(みやまい)りはいつですか？\nB: 来週(らいしゅう)の日曜日(にちようび)です。",
     exampleSrc:"A: When is the baby's shrine visit?\nB: Next Sunday.",
     funFact:"お宮参(みやまい)り happens about 30 days after birth. The family visits a 神社(じんじゃ) (Shinto shrine) to introduce the baby to the local deity and pray for health. The baby wears a special 着物(きもの). 祖父母(そふぼ) often attend and the family takes formal photos."},

    {type:"teach", trg:"七五三(しちごさん)", src:"Seven-Five-Three festival", pos:"noun", gender:null,
     note:"Celebrated on November 15 for children aged 7, 5, and 3.\n千歳飴(ちとせあめ) = thousand-year candy (given at the festival).",
     example:"A: 七五三(しちごさん)の写真(しゃしん)を撮(と)りました。\nB: 着物(きもの)がかわいいですね。",
     exampleSrc:"A: We took Seven-Five-Three photos.\nB: The kimono is cute.",
     funFact:"七五三(しちごさん) celebrates children surviving to ages 3, 5, and 7, which historically was not guaranteed. Girls celebrate at 3 and 7, boys at 3 and 5. Children wear traditional 着物(きもの) and visit shrines. 千歳飴(ちとせあめ) (thousand-year candy) in long thin sticks symbolizes long life."},

    {type:"teach", trg:"成人式(せいじんしき)", src:"coming-of-age ceremony", pos:"noun", gender:null,
     note:"Held on the second Monday of January for those turning 20 (now 18).\nKanji: 成人式.",
     example:"A: 成人式(せいじんしき)に出(で)ましたか？\nB: はい、振(ふ)り袖(そで)を着(き)ました。",
     exampleSrc:"A: Did you attend the coming-of-age ceremony?\nB: Yes, I wore a furisode kimono.",
     funFact:"成人式(せいじんしき) marks the transition to adulthood. Women traditionally wear 振(ふ)り袖(そで) (long-sleeved kimono), which can cost hundreds of thousands of yen to rent. Men wear 袴(はかま) or suits. Since 2022, the age of adulthood changed to 18, but many cities still hold ceremonies at 20."},

    {type:"mc", q:"What is 七五三(しちごさん)?", opts:["A festival for children aged 7, 5, and 3","A wedding ceremony","A birthday celebration","A graduation party"], ans:"A festival for children aged 7, 5, and 3",
     hint:"The name literally contains the numbers seven, five, and three."},

    {type:"teach", trg:"卒業式(そつぎょうしき)", src:"graduation ceremony", pos:"noun", gender:null,
     note:"卒業(そつぎょう) (graduation) + 式(しき) (ceremony).\n卒業(そつぎょう)する = to graduate.",
     example:"A: 明日(あした)卒業式(そつぎょうしき)です。\nB: おめでとうございます。写真(しゃしん)撮(と)りましょう。",
     exampleSrc:"A: The graduation ceremony is tomorrow.\nB: Congratulations. Let us take photos.",
     funFact:"Japanese 卒業式(そつぎょうしき) are emotional events. Students often cry. The second button (第二(だいに)ボタン) tradition says boys give their second uniform button to the girl they like, because it is closest to the heart. University graduates wear 袴(はかま) (traditional hakama)."},

    {type:"teach", trg:"入学式(にゅうがくしき)", src:"entrance ceremony (school)", pos:"noun", gender:null,
     note:"入学(にゅうがく) (entering school) + 式(しき) (ceremony).\nHeld every April at the start of the school year.",
     example:"A: 娘(むすめ)の入学式(にゅうがくしき)に行(い)きます。\nB: 小学校(しょうがっこう)ですか？",
     exampleSrc:"A: I am going to my daughter's entrance ceremony.\nB: Elementary school?",
     funFact:"入学式(にゅうがくしき) is a big deal in Japan. Parents buy new ランドセル (school backpacks) costing 30,000 to 80,000 yen. Families take photos at the school gate with cherry blossoms. New employees also have 入社式(にゅうしゃしき) (company entrance ceremonies) every April 1st."},

    {type:"teach", trg:"お葬式(そうしき)", src:"funeral", pos:"noun", gender:null,
     note:"Kanji: お葬式. Buddhist funerals are most common in Japan.\nお香典(こうでん) = condolence money.",
     example:"A: お葬式(そうしき)に参加(さんか)します。\nB: 黒(くろ)い服(ふく)を着(き)てください。",
     exampleSrc:"A: I will attend a funeral.\nB: Please wear black clothes.",
     funFact:"Most Japanese お葬式(そうしき) follow Buddhist rites. Attendees wear all black and bring お香典(こうでん) (money in a special envelope). Cremation rate in Japan is 99.97%, the highest in the world. After cremation, family members use chopsticks to pick bones, which is why passing food chopstick-to-chopstick is taboo."},

    {type:"teach", trg:"お盆(ぼん)", src:"Obon festival (ancestor remembrance)", pos:"noun", gender:null,
     note:"Buddhist festival in August honoring ancestors.\nお盆(ぼん)休(やす)み = Obon holiday period.",
     example:"A: お盆(ぼん)に実家(じっか)に帰(かえ)ります。\nB: ご家族(かぞく)に会(あ)えますね。",
     exampleSrc:"A: I will return to my hometown for Obon.\nB: You can see your family.",
     funFact:"お盆(ぼん) (mid-August) is when ancestors' spirits are believed to return home. Families visit graves (お墓参(はかまい)り), light lanterns, and perform 盆踊(ぼんおど)り (Bon dance). お盆(ぼん)休(やす)み is one of Japan's three major holiday periods, alongside お正月(しょうがつ) and ゴールデンウィーク."},

    {type:"teach", trg:"お正月(しょうがつ)", src:"New Year", pos:"noun", gender:null,
     note:"January 1-3 holiday period. 正月(しょうがつ)休(やす)み = New Year's holiday.\nThe most important holiday in Japan.",
     example:"A: お正月(しょうがつ)は何(なに)をしますか？\nB: 神社(じんじゃ)に初詣(はつもうで)に行(い)きます。",
     exampleSrc:"A: What do you do for New Year?\nB: I go to the shrine for the first visit of the year.",
     funFact:"お正月(しょうがつ) is the most significant holiday in Japanese culture. Families eat お節(せち)料理(りょうり) (special New Year food), send 年賀状(ねんがじょう) (New Year postcards), and visit shrines (初詣(はつもうで)). Children receive お年玉(としだま) (New Year money) in special envelopes."},

    {type:"fb", s:"明日(あした)は{1}です。おめでとう。\n(Tomorrow is the graduation ceremony. Congratulations.)", a:"卒業式(そつぎょうしき)", opts:["卒業式(そつぎょうしき)","入学式(にゅうがくしき)","結婚式(けっこんしき)","成人式(せいじんしき)"], sSrc:"Tomorrow is the graduation ceremony. Congratulations.",
     hint:"This ceremony marks the completion of a school program."},

    {type:"teach", trg:"お年玉(としだま)", src:"New Year money gift (for children)", pos:"noun", gender:null,
     note:"Cash given in small envelopes to children during お正月(しょうがつ).\nAnnual tradition.",
     example:"A: お年玉(としだま)をもらいましたか？\nB: はい、おじいちゃんからもらいました。",
     exampleSrc:"A: Did you receive New Year money?\nB: Yes, I received it from my grandfather.",
     funFact:"お年玉(としだま) amounts depend on the child's age: elementary students get 1,000 to 3,000 yen, middle schoolers 3,000 to 5,000 yen, and high schoolers 5,000 to 10,000 yen. Parents often 'manage' young children's お年玉(としだま), which is a running joke in Japanese families."},

    {type:"teach", trg:"記念日(きねんび)", src:"anniversary / memorial day", pos:"noun", gender:null,
     note:"記念(きねん) (commemoration) + 日(び/ひ) (day).\n結婚(けっこん)記念日(きねんび) = wedding anniversary.",
     example:"A: 結婚(けっこん)記念日(きねんび)は何月何日(なんがつなんにち)ですか？\nB: 六月(ろくがつ)二十八日(にじゅうはちにち)です。",
     exampleSrc:"A: When is your wedding anniversary?\nB: June 28th.",
     funFact:"記念日(きねんび) culture in Japan includes personal milestones and national days. いい夫婦(ふうふ)の日(ひ) (Good Couple Day) on November 22 is popular for weddings. Japanese companies mark their 創立(そうりつ)記念日(きねんび) (founding anniversary). The country has numerous national 記念日(きねんび)."},

    {type:"match", pairs:[{trg:"誕生日(たんじょうび)",src:"birthday"},{trg:"結婚式(けっこんしき)",src:"wedding ceremony"},{trg:"卒業式(そつぎょうしき)",src:"graduation ceremony"},{trg:"お盆(ぼん)",src:"Obon festival"},{trg:"お正月(しょうがつ)",src:"New Year"}],
     hint:"Match each life event or holiday with its English meaning."},

    {type:"mc", q:"What is お年玉(としだま)?", opts:["New Year money given to children","A birthday gift","A wedding present","Condolence money"], ans:"New Year money given to children",
     hint:"This cash gift in a small envelope is a cherished annual tradition for Japanese c...."},

    {type:"fb", s:"お盆(ぼん)に{1}に帰(かえ)ります。\n(I will return to my hometown for Obon.)", a:"実家(じっか)", opts:["実家(じっか)","学校(がっこう)","会社(かいしゃ)","病院(びょういん)"], sSrc:"I will return to my hometown for Obon.",
     hint:"This word means your family home or the house where you grew up."},

    {type:"mc", q:"What happens at お宮参(みやまい)り?", opts:["A newborn baby visits a shrine for the first time","A student graduates from school","A couple gets married","Ancestors are honored"], ans:"A newborn baby visits a shrine for the first time",
     hint:"This ceremony introduces the newest family member to the local deity."}
  ,{type:"match",pairs:[{trg:"お宮参(みやまい)り",src:"first shrine visit (for newborns)"},{trg:"七五三(しちごさん)",src:"Seven-Five-Three festival"},{trg:"成人式(せいじんしき)",src:"coming-of-age ceremony"},{trg:"入学式(にゅうがくしき)",src:"entrance ceremony (school)"},{trg:"お葬式(そうしき)",src:"funeral"},{trg:"お年玉(としだま)",src:"New Year money gift (for children)"}]},{type:"match",pairs:[{trg:"記念日(きねんび)",src:"anniversary / memorial day"}]}]
};
export default BATCH8_L1;
