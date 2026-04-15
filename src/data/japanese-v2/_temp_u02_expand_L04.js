// Unit 02 Expansion L06 — Describing Yourself & Others
const LESSON_6 = {
  id:"jav2_u2l6", title:"じぶんのこと", icon:"🪞", xp:15, board:true,
  steps:[
    {type:"intro", title:"じぶんのこと",
     desc:"Learn to describe yourself and others beyond just name and job. Talk about where you live, what you study, and basic personal characteristics.",
     goals:["Say where you live with sunde imasu","Say what you study with benkyou shite imasu","Use basic descriptive phrases about yourself"]},

    {type:"teach", trg:"すんでいます", src:"I live (in a place)", pos:"verb", gender:null,
     note:"From sumu (to live/reside). Te-imasu form means ongoing state.\nPattern: PLACE + に + すんでいます.",
     example:"A: どこにすんでいますか？\nB: とうきょうにすんでいます。",
     exampleSrc:"A: Where do you live?\nB: I live in Tokyo.",
     funFact:"Sumu (住む) uses te-imasu because living somewhere is an ongoing state, not a one-time action. This is different from English where 'I live' uses simple present. Japanese distinguishes between ongoing states and habitual actions."},

    {type:"teach", trg:"べんきょうしています", src:"I am studying", pos:"verb", gender:null,
     note:"From benkyou suru (to study). Te-imasu form for ongoing action.\nPattern: Xを べんきょうしています.",
     example:"A: なにをべんきょうしていますか？\nB: にほんごをべんきょうしています。",
     exampleSrc:"A: What are you studying?\nB: I am studying Japanese.",
     funFact:"勉強 (benkyou) means 'strong effort.' 勉 (effort) + 強 (strong). In Chinese, the same characters mean 'to force reluctantly.' The Japanese meaning shifted to emphasize diligent study. Suru makes any noun into a verb."},

    {type:"teach", trg:"だいがく", src:"university / college", pos:"noun", gender:null,
     note:"The most common place of study for young adults.\nKanji: 大学. Lit: big + study.",
     example:"A: だいがくでなにをべんきょうしていますか？\nB: けいざいがくです。",
     exampleSrc:"A: What are you studying at university?\nB: Economics.",
     funFact:"大 (big) + 学 (learning) = university. Japanese universities are notoriously hard to enter but relatively easy to graduate from, the opposite of many Western systems. The entrance exam (juken) period is called 'exam hell' (juken jigoku)."},

    {type:"teach", trg:"とうきょう", src:"Tokyo", pos:"noun", gender:null,
     note:"Japan's capital and largest city. Population: about 14 million.\nKanji: 東京.",
     example:"A: とうきょうにすんでいますか？\nB: いいえ、おおさかにすんでいます。",
     exampleSrc:"A: Do you live in Tokyo?\nB: No, I live in Osaka.",
     funFact:"東 (east) + 京 (capital). Tokyo literally means 'eastern capital,' named when the emperor moved from Kyoto (京都, capital city) in 1868. Tokyo has 23 special wards, each the size of a small city. Shibuya, Shinjuku, and Akihabara are world-famous districts."},

    {type:"mc", q:"すんでいます uses the te-imasu form because:", opts:["It happened in the past","Living is an ongoing state","It will happen tomorrow","It is a question"], ans:"Living is an ongoing state",
     hint:"Te-imasu describes states that continue over time, not one-time actions."},

    {type:"teach", trg:"おおさか", src:"Osaka", pos:"noun", gender:null,
     note:"Japan's second city. Known for food, comedy, and a direct, friendly dialect.\nKanji: 大阪.",
     example:"A: おおさかのたべものはおいしいですか？\nB: はい、たこやきがゆうめいです。",
     exampleSrc:"A: Is Osaka's food good?\nB: Yes, takoyaki is famous.",
     funFact:"大阪 means 'big slope.' Osaka is Japan's kitchen (tenka no daidokoro). The city is famous for street food: takoyaki (octopus balls), okonomiyaki (savory pancakes), and kushikatsu (deep-fried skewers). Osakans are known for being funnier and more outgoing than Tokyoites."},

    {type:"teach", trg:"まち", src:"town / city (area)", pos:"noun", gender:null,
     note:"A versatile word meaning town, city, or neighborhood.\nKanji: 町 or 街.",
     example:"A: いいまちですね。\nB: はい、しずかできれいです。",
     exampleSrc:"A: It's a nice town.\nB: Yes, it's quiet and beautiful.",
     funFact:"Machi can mean a small town or a neighborhood within a city. Many Tokyo neighborhoods have -machi or -cho in their names. The kanji 町 originally showed rice paddies and fields, reflecting Japan's agricultural roots."},

    {type:"teach", trg:"すき", src:"like / fond of (review)", pos:"adj", gender:null,
     note:"Review from Unit 5. Na-adjective with が particle.\nUsed to describe interests and preferences.",
     example:"A: すきなスポーツはなんですか？\nB: サッカーがすきです。",
     exampleSrc:"A: What sports do you like?\nB: I like soccer.",
     funFact:"In self-introductions, saying what you like (suki na mono) is common. Japanese culture values knowing people's preferences. Conversation starter: 'suki na tabemono wa nan desu ka?' (What food do you like?) works in any social setting."},

    {type:"fb", s:"とうきょう___すんでいます。",
     a:["に"],
     opts:["に","で","を","が"],
     hint:"The particle used with sunde imasu to indicate the place where you reside.",
     sSrc:"I live in Tokyo."},

    {type:"teach", trg:"けっこんしています", src:"I am married", pos:"verb", gender:null,
     note:"From kekkon suru (to marry). Te-imasu = ongoing married state.\nKanji: 結婚しています.",
     example:"A: けっこんしていますか？\nB: はい、けっこんしています。",
     exampleSrc:"A: Are you married?\nB: Yes, I am married.",
     funFact:"結 (tie) + 婚 (marriage). Marriage ties people together. Japanese wedding culture blends Shinto shrines, Western chapel ceremonies, and elaborate receptions. Many couples have both a traditional and Western-style ceremony on the same day."},

    {type:"teach", trg:"どくしん", src:"single / unmarried", pos:"noun", gender:null,
     note:"Literally 'alone body.' Na-adjective form: どくしんの.\nKanji: 独身.",
     example:"A: けっこんしていますか？\nB: いいえ、まだどくしんです。",
     exampleSrc:"A: Are you married?\nB: No, I am still single.",
     funFact:"独 (alone) + 身 (body). Japan's singles population is growing rapidly. About 30% of men and 20% of women in their 30s are unmarried, contributing to the declining birth rate that is one of Japan's biggest social challenges."},

    {type:"teach", trg:"しゅっしん", src:"hometown / place of origin", pos:"noun", gender:null,
     note:"Where you are originally from. Pattern: Xしゅっしんです.\nKanji: 出身.",
     example:"A: ごしゅっしんはどちらですか？\nB: きょうとしゅっしんです。",
     exampleSrc:"A: Where are you originally from?\nB: I am from Kyoto.",
     funFact:"出 (exit/come from) + 身 (body/self). Shusshin is distinct from where you currently live. A person can live in Tokyo but be shusshin from Hokkaido. Japanese people care deeply about hometown identity. Regional pride is strong."},

    {type:"teach", trg:"きょうと", src:"Kyoto", pos:"noun", gender:null,
     note:"Japan's old capital for over 1,000 years. Center of traditional culture.\nKanji: 京都.",
     example:"A: きょうとしゅっしんですか？\nB: はい、きょうとでそだちました。",
     exampleSrc:"A: Are you from Kyoto?\nB: Yes, I grew up in Kyoto.",
     funFact:"京 (capital) + 都 (metropolis). Kyoto was Japan's capital from 794 to 1868. It was deliberately spared from WWII bombing to preserve its 2,000+ temples and shrines. The Kyoto dialect (Kyoto-ben) is considered the most elegant in Japan."},

    {type:"mc", q:"しゅっしん means:", opts:["Where you live now","Your hometown/origin","Your birthday","Your school"], ans:"Your hometown/origin",
     hint:"The word combines 'come from' and 'self' in its kanji."},

    {type:"match", pairs:[
      {trg:"すんでいます", src:"I live (in a place)"},
      {trg:"べんきょうしています", src:"I am studying"},
      {trg:"けっこんしています", src:"I am married"},
      {trg:"どくしん", src:"single/unmarried"}
    ]},

    {type:"match", pairs:[
      {trg:"とうきょう", src:"Tokyo"},
      {trg:"おおさか", src:"Osaka"},
      {trg:"きょうと", src:"Kyoto"},
      {trg:"しゅっしん", src:"hometown"}
    ]},

    {type:"fb", s:"にほんごを___しています。",
     a:["べんきょう"],
     opts:["べんきょう","けっこん","しゅっしん","はたらき"],
     hint:"The noun meaning 'study' that combines with shite imasu to express ongoing learning.",
     sSrc:"I am studying Japanese."},

    {type:"mc", q:"How do you say 'I am from Kyoto'?", opts:["きょうとにすんでいます","きょうとしゅっしんです","きょうとにいきます","きょうとがすきです"], ans:"きょうとしゅっしんです",
     hint:"The pattern uses shusshin (origin) + desu, not sunde imasu (currently living)."},

    {type:"mc", q:"だいがく literally means:", opts:["big building","big study","school house","exam place"], ans:"big study",
     hint:"The two kanji are 大 (big) and 学 (learning/study)."},
  ]
};
export default LESSON_6;
