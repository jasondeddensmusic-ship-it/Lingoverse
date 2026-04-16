// Batch 4 — Unit 14 Lesson 2: Comparison & Contrast
const BATCH4_L_2 = {
  id:"jav2_u14l_b4_2", title:"ひかく", icon:"⚖️", xp:15, board:true,
  steps:[
    {type:"intro", title:"ひかくするひょうげん",
     desc:"Learn to compare things and express preferences. Japanese comparison structures differ significantly from English.",
     goals:["Compare two items with yori and hou","Express superlatives with ichiban","State preferences with -tai and hoshii"]},

    {type:"teach", trg:"くらべる", src:"to compare", pos:"verb", gender:null,
     note:"Ichidan verb. Kanji: 比べる. Setting two things side by side.",
     example:"ふたつのレストランをくらべました。",
     exampleSrc:"I compared two restaurants.",
     funFact:"Kuraberu uses the kanji 比 which shows two people standing side by side. Japanese comparison does not use special adjective forms (like English '-er'). Instead, particles like より (yori) and ほう (hou) handle all comparison."},

    {type:"teach", trg:"より", src:"than / compared to", pos:"part", gender:null,
     note:"The comparison particle. A は B より X = A is more X than B.",
     example:"とうきょうはおおさかよりおおきいです。",
     exampleSrc:"Tokyo is bigger than Osaka.",
     funFact:"Yori is the only word needed for comparison in Japanese. No adjective changes needed. 'Tokyo wa Osaka yori ookii' directly translates to 'Tokyo, compared to Osaka, is big.' The simplicity of this system contrasts with English's -er/-est forms."},

    {type:"teach", trg:"ほう", src:"alternative / the one that is", pos:"noun", gender:null,
     note:"Kanji: 方. Used in comparison to mark the preferred option.",
     example:"にほんりょうりのほうがすきです。",
     exampleSrc:"I prefer Japanese food (it is the more liked one).",
     funFact:"Hou literally means 'direction/side.' In comparisons, it picks one side. 'Kono hou ga ii' (this side/option is better). The same kanji 方 also means 'person' (polite) and 'method,' making it one of the most versatile kanji."},

    {type:"teach", trg:"いちばん", src:"number one / the most", pos:"adv", gender:null,
     note:"Kanji: 一番. One + number. Creates superlatives.",
     example:"ふじさんはにほんでいちばんたかいやまです。",
     exampleSrc:"Mount Fuji is the tallest mountain in Japan.",
     funFact:"Ichiban literally means 'number one.' It works as a universal superlative: ichiban + any adjective. 'Ichiban takai' (tallest/most expensive), 'ichiban suki' (most liked). Ichiban is also a popular brand name and common exclamation."},

    {type:"teach", trg:"おなじ", src:"same / identical", pos:"adj", gender:null,
     note:"Na-adjective. Kanji: 同じ. Used when things are equal.",
     example:"わたしたちはおなじとしです。",
     exampleSrc:"We are the same age.",
     funFact:"Onaji uses the kanji 同 (same/together). The phrase おなじく (likewise) is used when agreeing with someone's order: 'Same for me, please.' Stating sameness is sometimes more important than stating difference in Japanese conversation."},

    {type:"teach", trg:"ちがう", src:"to differ / be wrong", pos:"verb", gender:null,
     note:"Godan verb. Kanji: 違う. Both 'different' and 'incorrect.'",
     example:"このこたえはちがいます。",
     exampleSrc:"This answer is wrong.",
     funFact:"Chigau has a double function: 'that is different' and 'that is wrong.' When someone says something incorrect, Japanese people say 'chigau' or 'chigaimasu' rather than a blunt 'no.' It sounds softer than direct denial."},

    {type:"teach", trg:"にている", src:"to resemble / be similar", pos:"verb", gender:null,
     note:"Te-form of にる. Kanji: 似ている. Ongoing state of resemblance.",
     example:"あなたはおかあさんににていますね。",
     exampleSrc:"You resemble your mother.",
     funFact:"Niteiru is always in te-iru form because resemblance is an ongoing state. Japanese people frequently comment on family resemblance. 'Okaa-san ni niteiru ne' is one of the most common things said when meeting someone's parent."},

    {type:"teach", trg:"とくに", src:"especially / particularly", pos:"adv", gender:null,
     note:"Kanji: 特に. Special + marker. Highlights something above others.",
     example:"にほんりょうりがすきです。とくにすしがすきです。",
     exampleSrc:"I like Japanese food. Especially sushi.",
     funFact:"Toku ni singles out one item from a group. It is essential for expressing specific preferences. The kanji 特 (special/unique) appears in 特別 (tokubetsu, special), 特徴 (tokuchou, characteristic), and 独特 (dokutoku, unique)."},

    {type:"teach", trg:"まあまあ", src:"so-so / not bad", pos:"adv", gender:null,
     note:"An evaluation between good and bad. Moderate satisfaction.",
     example:"しけんはまあまあでした。",
     exampleSrc:"The exam was so-so.",
     funFact:"Maa maa is the quintessential Japanese non-committal evaluation. It avoids both enthusiasm and criticism. Japanese culture tends toward moderate responses rather than extremes. Asking 'How was it?' often yields 'maa maa.'"},

    {type:"teach", trg:"ぜんぜん", src:"not at all / completely", pos:"adv", gender:null,
     note:"Kanji: 全然. Whole + so. Used with negatives for 'not at all.'",
     example:"ぜんぜんわかりません。",
     exampleSrc:"I don't understand at all.",
     funFact:"Traditionally, zenzen must be paired with a negative verb. However, young Japanese increasingly use it with positives (zenzen ii = totally fine, zenzen daijoubu = completely okay). This usage shift annoys language purists."},

    {type:"teach", trg:"けっこう", src:"quite / fairly / enough", pos:"adv", gender:null,
     note:"Kanji: 結構. Quite a lot, or 'no thank you' (when declining).",
     example:"このラーメンはけっこうおいしいです。",
     exampleSrc:"This ramen is quite delicious.",
     funFact:"Kekkou has two very different uses: (1) 'quite/fairly' (kekkou oishii = quite tasty), and (2) 'no thank you/I'm fine' (kekkou desu = that's enough). The polite refusal use is essential for declining offers in Japan."},

    {type:"teach", trg:"すこし", src:"a little / a bit", pos:"adv", gender:null,
     note:"Kanji: 少し. A small amount. More polite than ちょっと.",
     example:"にほんごがすこしわかります。",
     exampleSrc:"I understand a little Japanese.",
     funFact:"Sukoshi is formal while chotto is casual. 'Sukoshi dake' (just a little) is a useful qualifier. Japanese speakers often downplay their abilities with sukoshi: 'Nihongo ga sukoshi wakarimasu' even when they are quite fluent."},

    {type:"teach", trg:"かなり", src:"quite / considerably", pos:"adv", gender:null,
     note:"Kanji: 可成り. Stronger than けっこう. A significant degree.",
     example:"きょうはかなりさむいです。",
     exampleSrc:"It is quite cold today.",
     funFact:"Kanari sits between 'somewhat' and 'very' on the intensity scale. The degree adverbs in order: sukoshi (a little) < kekkou (fairly) < kanari (quite) < totemo (very) < sugoku (extremely). Knowing this scale is key to natural Japanese."},

    {type:"teach", trg:"むしろ", src:"rather / instead", pos:"adv", gender:null,
     note:"Introduces a contrasting preference or correction.",
     example:"さむくないです。むしろあついです。",
     exampleSrc:"It's not cold. Rather, it's hot.",
     funFact:"Mushiro corrects a previous statement or expectation. It is often translated as 'on the contrary.' In debates and essays, mushiro elegantly pivots to the speaker's real point after acknowledging the opposing view."},

    {type:"mc", q:"What particle marks 'than' in Japanese comparisons?",
     opts:["より","ほう","は","が"], ans:"より",
     hint:"The particle placed after the thing being compared against."},

    {type:"fb", s:"ふじさんはにほんで{1}たかいやまです。", a:"いちばん",
     sSrc:"Mount Fuji is the tallest mountain in Japan.",
     opts:["いちばん","すこし","かなり","けっこう"],
     hint:"The word meaning 'number one' that creates superlatives."},

    {type:"match", pairs:[
      {trg:"おなじ", src:"same"},
      {trg:"ちがう", src:"different/wrong"},
      {trg:"にている", src:"resembling"},
      {trg:"くらべる", src:"to compare"}
    ]},

    {type:"mc", q:"まあまあ expresses:",
     opts:["a moderate/so-so evaluation","excellence","disappointment","anger"], ans:"a moderate/so-so evaluation",
     hint:"Neither great nor terrible, the quintessential non-committal response."},

    {type:"fb", s:"{1}わかりません。", a:"ぜんぜん",
     sSrc:"I don't understand at all.",
     opts:["ぜんぜん","すこし","かなり","けっこう"],
     hint:"Complete negation, not even a tiny bit of understanding."},

    {type:"mc", q:"けっこう has two meanings. One is 'quite.' The other is:",
     opts:["no thank you","very much","excuse me","I agree"], ans:"no thank you",
     hint:"Used to politely decline an offer or say 'that's enough.'"},

    {type:"mc", q:"むしろ means:",
     opts:["rather / on the contrary","for example","in the end","of course"], ans:"rather / on the contrary",
     hint:"Corrects or contrasts with what was just said or expected."}
  ]
};
export default BATCH4_L_2;
