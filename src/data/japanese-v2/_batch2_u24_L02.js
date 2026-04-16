// Unit 24 Batch 2 Lesson 2: フォーマルなつなぎ (Formal Linking Expressions)
const BATCH2_L_2 = {
  id:"jav2_u24l_b2_2", title:"フォーマルなつなぎ", icon:"🎓", xp:15, board:true,
  steps:[
    {type:"intro", title:"フォーマルなつなぎ",
     desc:"Complete your connector toolkit with formal expressions for reasoning, exemplification, and emphasis. These advanced linking words separate intermediate writing from polished, professional Japanese.",
     goals:["Use formal reasoning connectors (のため, ことから)","Express examples and emphasis in formal style","Master transition phrases for smooth paragraph flow"]},

    {type:"teach", trg:"〜ことから", src:"from the fact that ~ / because ~", pos:"part", gender:null,
     note:"Verb/adjective + ことから = based on the fact that.\nExpresses reasoning from evidence. Formal and analytical.",
     example:"A: にほんはじしんがおおいことから、たてものはたいしんせっけいです。\nB: なるほど、あんぜんをかんがえていますね。",
     exampleSrc:"A: From the fact that Japan has many earthquakes, buildings are seismically designed.\nB: I see, they consider safety.",
     funFact:"ことから provides evidence-based reasoning. It literally means 'from the matter of,' presenting a fact and then its logical consequence. Academic papers use it extensively: 'from the fact that X, we can conclude Y.' It is more formal than だから and more specific than ので."},

    {type:"teach", trg:"〜にもとづいて", src:"based on ~ / on the basis of ~", pos:"part", gender:null,
     note:"Noun + にもとづいて = based on. Kanji: に基づいて.\nもとづく = to be based on.",
     example:"A: データにもとづいてはんだんしましょう。\nB: かんじょうではなく、じじつがだいじですね。",
     exampleSrc:"A: Let us make judgments based on data.\nB: Facts, not emotions, are important.",
     funFact:"に基づいて is the gold standard for evidence-based arguments. 基 means 'foundation' and 付く means 'attach to,' so literally 'attaching to a foundation.' It signals rigor and objectivity. データにもとづいて (based on data) is a phrase that earns credibility in any Japanese professional context."},

    {type:"teach", trg:"すなわち", src:"namely / that is / in other words", pos:"conj", gender:null,
     note:"Very formal rephrasing connector. More precise than つまり.\nUsed in academic and legal writing.",
     example:"A: にほんのしゅとすなわちとうきょうは、せかいさいだいのとしです。\nB: じんこうが1,400まんにんですね。",
     exampleSrc:"A: Japan's capital, namely Tokyo, is the world's largest city.\nB: The population is 14 million.",
     funFact:"すなわち is the most formal rephrasing word, found in legal documents, academic papers, and encyclopedias. It precisely identifies or defines: 'A, namely B.' In casual speech it sounds stiff, but in writing it adds precision and authority. It is the Japanese equivalent of Latin 'id est' (i.e.)."},

    {type:"teach", trg:"〜にかんして", src:"regarding ~ / concerning ~ / with regard to ~", pos:"part", gender:null,
     note:"Noun + にかんして = regarding. Kanji: に関して.\nMore formal than について.",
     example:"A: このけんにかんしてはもうすこしちょうさがひつようです。\nB: いつまでにちょうさしますか？",
     exampleSrc:"A: Regarding this matter, a bit more investigation is needed.\nB: By when will the investigation be done?",
     funFact:"に関して is the formal upgrade of について. While both mean 'regarding,' に関して is preferred in business correspondence, academic papers, and official documents. The kanji 関 means 'barrier/gate,' suggesting a topic you are entering into. にかんする (adjectival form) modifies nouns: このもんだいにかんするけんきゅう (research concerning this problem)."},

    {type:"mc", q:"にほんはじしんがおおいことから、たてものはたいしんせっけいです means:", opts:["Buildings cause earthquakes in Japan","Japan has few earthquakes because of building design","From the fact that Japan has many earthquakes, buildings are seismically designed","Earthquake design is unnecessary in Japan"], ans:"From the fact that Japan has many earthquakes, buildings are seismically designed",
     hint:"ことから presents a f... and its logical consequence: because of X, Y follows."},

    {type:"teach", trg:"たいしん", src:"earthquake resistance / seismic resistance", pos:"noun", gender:null,
     note:"たい (resist) + しん (earthquake). Kanji: 耐震.\nたいしんせっけい = seismically designed.",
     example:"A: このビルはたいしんきじゅんをみたしています。\nB: あんしんですね。",
     exampleSrc:"A: This building meets earthquake resistance standards.\nB: That is reassuring.",
     funFact:"耐震 is essential infrastructure vocabulary in Japan. All buildings must meet strict 耐震基準 (taishin kijun, seismic standards). After major earthquakes, building codes are regularly strengthened. Japanese construction technology for earthquake resistance is among the world's most advanced, a direct result of living on the Ring of Fire."},

    {type:"teach", trg:"〜をはじめ", src:"starting with ~ / including ~ and others", pos:"part", gender:null,
     note:"Noun + をはじめ = starting with X (and others).\nLists a representative example from a larger group.",
     example:"A: とうきょうをはじめ、おおさかやなごやでもじしんたいさくがすすんでいます。\nB: ぜんこくてきなとりくみですね。",
     exampleSrc:"A: Starting with Tokyo, earthquake measures are advancing in Osaka, Nagoya, and other cities.\nB: It is a nationwide effort.",
     funFact:"をはじめ elegantly lists a primary example before adding others. It literally means 'beginning with X.' This connector is common in news and presentations for listing: にほんをはじめ、ちゅうごくやかんこくでも (starting with Japan, also in China and Korea). It implies the list is representative, not exhaustive."},

    {type:"fb", s:"データ{1}はんだんしましょう。\n(Let us make judgments based on data.)", a:"にもとづいて", opts:["にもとづいて","について","にかんして","ことから"], sSrc:"Let us make judgments based on data.",
     hint:"The formal connector meaning 'based on,' emphasizing evidence as a foundation for judgment."},

    {type:"teach", trg:"〜いじょうのことから", src:"from the above / based on what has been discussed", pos:"part", gender:null,
     note:"いじょう (the above) + のことから (from the matters of).\nConclusion opener in essays and presentations.",
     example:"A: いじょうのことから、かいかくがひつようだとかんがえます。\nB: せっとくりょくのあるけつろんですね。",
     exampleSrc:"A: From the above, I believe reform is necessary.\nB: That is a persuasive conclusion.",
     funFact:"いじょうのことから bridges the body of an essay to its conclusion. いじょう (以上, the above) refers to everything previously discussed. This phrase says: 'taking all the above into account, I conclude...' It is a polished way to demonstrate that your conclusion follows logically from your arguments."},

    {type:"teach", trg:"〜をふまえて", src:"taking ~ into account / based on / considering ~", pos:"part", gender:null,
     note:"Noun + をふまえて = stepping on/building upon.\nKanji: を踏まえて. ふまえる = to stand on, to base on.",
     example:"A: これまでのけいけんをふまえて、ていあんします。\nB: きたいしています。",
     exampleSrc:"A: Taking previous experience into account, I will make a proposal.\nB: I look forward to it.",
     funFact:"をふまえて uses 踏まえる (to step on/stand upon). The metaphor is powerful: you are standing on a foundation of evidence before making your next move. It is more dynamic than にもとづいて (based on), implying active use of past knowledge. Business presentations love this phrase: 'standing on our experience, we propose...'"},

    {type:"teach", trg:"せっとくりょく", src:"persuasiveness / power to convince", pos:"noun", gender:null,
     note:"せっとく (persuasion) + りょく (power). Kanji: 説得力.\nせっとくりょくがある = to be persuasive.",
     example:"A: このプレゼンはせっとくりょくがあります。\nB: データにもとづいているからですね。",
     exampleSrc:"A: This presentation is persuasive.\nB: Because it is based on data.",
     funFact:"説得力 combines 説得 (persuasion) and 力 (power). Having 説得力 is considered a high compliment for any argument or presentation. The word implies that your reasoning moves people, not through emotion alone, but through solid logic and evidence. Building 説得力 is a key goal of Japanese education from high school onward."},

    {type:"mc", q:"をはじめ is used to:", opts:["End a list","Introduce a representative example from a larger group","Express disagreement","Signal a conclusion"], ans:"Introduce a representative example from a larger group",
     hint:"This connector names one prominent e... and implies there are more: 'starting with X, also Y and Z.'"},

    {type:"tip", title:"Formal Connectors Summary",
     text:"Evidence and reasoning:\nことから = from the fact that\nにもとづいて = based on\nをふまえて = taking into account\n\nSpecification and examples:\nすなわち = namely (precise)\nにかんして = regarding (formal)\nをはじめ = starting with (representative example)\n\nConclusion:\nいじょうのことから = from the above\nけっろんとして = in conclusion\nようするに = in short\n\nThese connectors transform basic arguments into structured, persuasive writing.",
     deepDive:{title:"Building Persuasive Arguments in Japanese",
      text:"A persuasive Japanese argument follows this pattern:\n\n1. State your topic: にかんして (regarding X)\n2. Present evidence: ことから (from the fact that)\n3. Add support: にくわえて (in addition)\n4. Cite basis: にもとづいて (based on data)\n5. Give examples: をはじめ (starting with)\n6. Draw conclusion: いじょうのことから (from the above)\n\nThe key principle: let evidence lead to the conclusion, not the other way around. Japanese argumentation values building toward a conclusion through accumulated evidence rather than stating a thesis and defending it, though both styles exist."}},

    {type:"match", pairs:[{trg:"ことから",src:"from the fact that"},{trg:"にもとづいて",src:"based on"},{trg:"すなわち",src:"namely"},{trg:"にかんして",src:"regarding (formal)"}]},

    {type:"fb", s:"{1}のことから、かいかくがひつようだとかんがえます。\n(From the above, I believe reform is necessary.)", a:"いじょう", opts:["いじょう","つまり","はじめ","すなわち"], sSrc:"From the above, I believe reform is necessary.",
     hint:"The word meaning 'the above' that opens the conclusion of a structured essay or presentation."},

    {type:"match", pairs:[{trg:"をはじめ",src:"starting with"},{trg:"をふまえて",src:"taking into account"},{trg:"いじょうのことから",src:"from the above"},{trg:"せっとくりょく",src:"persuasiveness"}]},

    {type:"mc", q:"をふまえて differs from にもとづいて because:", opts:["They are identical","をふまえて implies actively building upon past knowledge; にもとづいて simply states a foundation","をふまえて is casual; にもとづいて is formal","をふまえて is for negatives only"], ans:"をふまえて implies actively building upon past knowledge; にもとづいて simply states a foundation",
     hint:"踏まえて (step u...) is more dynamic than 基づいて (be based on). One a... builds; the other s... references."},
  ]
};
export default BATCH2_L_2;
