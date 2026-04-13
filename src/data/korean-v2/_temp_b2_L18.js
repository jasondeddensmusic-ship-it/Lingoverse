// B2 Lesson 18: Overcoming & Perseverance
// Words: 극복, 극복하다, 고생하다, 고민하다, 곧이어, 곧장, 고작, 골고루, 골프, 골프장,
//        고함, 같이하다, 거두다, 거들다, 거짓, 거치다, 공중, 공주, 공항버스, 금년

const LESSON_18 = {
  id:"kov2_b2_l18", title:"극복과 인내", icon:"\uD83D\uDCAA", xp:15, board:true,
  steps:[
    {type:"intro", title:"Overcoming & Perseverance",
     desc:"Learn vocabulary for struggle, overcoming obstacles, and related action words. These words appear in TOPIK II essays and reading passages about personal growth and challenges.",
     goals:["Learn 20 words for perseverance and daily actions","Understand Sino-Korean compounds for struggle and achievement","Use motivational vocabulary in formal contexts"]},

    {type:"teach", trg:"\uADF9\uBCF5", src:"overcoming; conquering", pos:"noun", gender:null,
     note:"Sino-Korean: extreme (克) + overcome (服).\nSuccessfully dealing with a difficulty.",
     example:"A: \uC5B4\uB824\uC6C0\uC744 \uADF9\uBCF5\uD588\uC5B4\uC694.\nB: \uC5B4\uB5BB\uAC8C \uADF9\uBCF5\uD588\uC5B4\uC694?\nA: \uD3EC\uAE30\uD558\uC9C0 \uC54A\uACE0 \uB178\uB825\uD588\uC5B4\uC694.\nB: \uADF9\uBCF5\uC758 \uACBD\uD5D8\uC774 \uC131\uC7A5\uC744 \uB9CC\uB4E4\uC8E0.",
     exampleSrc:"A: I overcame the difficulty.\nB: How did you overcome it?\nA: I did not give up and kept trying.\nB: The experience of overcoming creates growth.",
     funFact:"극복 is a staple of Korean motivational discourse. 역경 극복 (overcoming adversity) is a core narrative in Korean success stories."},

    {type:"teach", trg:"\uADF9\uBCF5\uD558\uB2E4", src:"to overcome; to conquer", pos:"verb", gender:null,
     note:"Verb form of 극복. Actively conquering a challenge.",
     example:"A: \uB450\uB824\uC6C0\uC744 \uADF9\uBCF5\uD574\uC57C \uD574\uC694.\nB: \uD55C \uAC78\uC74C\uC529 \uADF9\uBCF5\uD558\uC138\uC694.\nA: \uD3B8\uACAC\uC744 \uADF9\uBCF5\uD574\uC57C \uD574\uC694.\nB: \uD568\uAED8 \uADF9\uBCF5\uD569\uC2DC\uB2E4.",
     exampleSrc:"A: You need to overcome your fear.\nB: Overcome it one step at a time.\nA: We need to overcome prejudice.\nB: Let us overcome it together.",
     funFact:"극복하다 is one of the most-tested words on TOPIK. Essay prompts frequently ask about 극복 experiences or strategies."},

    {type:"teach", trg:"\uACE0\uC0DD\uD558\uB2E4", src:"to suffer; to go through hardship", pos:"verb", gender:null,
     note:"Sino-Korean: bitter (苦) + life (生) + do (하다).\nEnduring difficulty or hardship.",
     example:"A: \uC5B4\uB9B4 \uB54C \uB9CE\uC774 \uACE0\uC0DD\uD558\uC168\uC5B4\uC694?\nB: \uB124, \uD558\uC9C0\uB9CC \uADF8 \uACBD\uD5D8\uC774 \uB3C4\uC6C0\uC774 \uB418\uC5C8\uC5B4\uC694.\nA: \uACE0\uC0DD\uD55C \uB9CC\uD07C \uBCF4\uB78C\uC774 \uC788\uC5B4\uC694.\nB: \uACE0\uC0DD \uB05D\uC5D0 \uB099\uC774 \uC628\uB2E4\uACE0 \uD558\uC8E0.",
     exampleSrc:"A: Did you suffer a lot as a child?\nB: Yes, but the experience helped.\nA: Suffering brings reward.\nB: They say joy comes at the end of hardship.",
     funFact:"수고하셨습니다 (You worked hard) uses the same 고 (苦) character. Acknowledging someone's 고생 is deeply important in Korean culture."},

    {type:"teach", trg:"\uACE0\uBBFC\uD558\uB2E4", src:"to worry; to agonize; to deliberate", pos:"verb", gender:null,
     note:"Sino-Korean: bitter (苦) + troubled (悶) + do (하다).\nDeep thinking about a problem.",
     example:"A: \uC9C4\uB85C \uBB38\uC81C\uB85C \uACE0\uBBFC\uD558\uACE0 \uC788\uC5B4\uC694.\nB: \uC5B4\uB5A4 \uACE0\uBBFC\uC774\uC5D0\uC694?\nA: \uC9C1\uC5C5\uC744 \uBC14\uAFC0\uC9C0 \uACE0\uBBFC \uC911\uC774\uC5D0\uC694.\nB: \uCC9C\uCC9C\uD788 \uACE0\uBBFC\uD558\uC138\uC694.",
     exampleSrc:"A: I am agonizing over a career issue.\nB: What concern?\nA: I am deliberating whether to change jobs.\nB: Take your time deliberating.",
     funFact:"고민 상담 (worry counseling) is a genre in Korean media. TV shows and online forums dedicated to 고민 are extremely popular."},

    {type:"teach", trg:"\uACE7\uC774\uC5B4", src:"soon after; shortly afterward", pos:"adv", gender:null,
     note:"Pure Korean compound: soon (곧) + following (이어).\nImmediately following in sequence.",
     example:"A: \uBC1C\uD45C\uAC00 \uB05D\uB0AC\uC5B4\uC694. \uACE7\uC774\uC5B4 \uC9C8\uBB38 \uC2DC\uAC04\uC774\uC5D0\uC694.\nB: \uC9C8\uBB38\uC774 \uC788\uC73C\uC138\uC694?\nA: \uACE7\uC774\uC5B4 \uB450 \uBC88\uC9F8 \uBC1C\uD45C\uAC00 \uC2DC\uC791\uB3FC\uC694.\nB: \uD504\uB85C\uADF8\uB7A8\uC774 \uBE61\uBE61\uD558\uB124\uC694.",
     exampleSrc:"A: The presentation ended. Shortly after, it was Q and A time.\nB: Do you have questions?\nA: Soon after, the second presentation began.\nB: The program is packed.",
     funFact:"곧이어 is a precise time connector. It indicates something happening right after, with minimal gap. Common in news narration."},

    {type:"mc",
     q:"\uC5B4\uB824\uC6C0\uC744 \uC774\uACA8\uB0B4\uB294 \uAC83\uC744 \uBB50\uB77C\uACE0 \uD574\uC694?",
     opts:["\uADF9\uBCF5","\uACE0\uBBFC","\uACE0\uC0DD","\uAC70\uC9D3"],
     ans:"\uADF9\uBCF5",
     hint:"This Sino-Korean word means conquering or successfully dealing with difficulties and obstacles."},

    {type:"teach", trg:"\uACE7\uC7A5", src:"straight ahead; directly; immediately", pos:"adv", gender:null,
     note:"Pure Korean compound: soon (곧) + place (장).\nGoing directly without detour.",
     example:"A: \uACE7\uC7A5 \uC9D1\uC73C\uB85C \uAC00\uC138\uC694.\nB: \uB124, \uACE7\uC7A5 \uAC08\uAC8C\uC694.\nA: \uC5EC\uAE30\uC11C \uACE7\uC7A5 \uAC00\uBA74 10\uBD84\uC774\uC5D0\uC694.\nB: \uAC00\uAE4C\uC6B4 \uAC70\uB9AC\uB124\uC694.",
     exampleSrc:"A: Go straight home.\nB: Yes, I will go directly.\nA: Going straight from here takes 10 minutes.\nB: It is a short distance.",
     funFact:"곧장 emphasizes no detours or stops. Compare with 곧바로 (immediately, time-focused) and 바로 (right away, general)."},

    {type:"teach", trg:"\uACE0\uC791", src:"only; merely; at most", pos:"adv", gender:null,
     note:"Pure Korean adverb. Expressing disappointment at a small amount.",
     example:"A: \uACE0\uC791 10\uBD84 \uB2A6\uC5C8\uC744 \uBFD0\uC774\uC5D0\uC694.\nB: \uADF8\uB798\uB3C4 \uB2A6\uC740 \uAC74 \uB2A6\uC740 \uAC70\uC8E0.\nA: \uACE0\uC791 \uC774\uAC83\uBFD0\uC778\uAC00\uC694?\nB: \uAE30\uB300\uC5D0 \uBBF8\uCE58\uC9C0 \uBABB\uD588\uC8E0.",
     exampleSrc:"A: I was only 10 minutes late.\nB: Still, late is late.\nA: Is this all there is?\nB: It did not meet expectations.",
     funFact:"고작 always carries a dismissive nuance. It implies the speaker expected more: 고작 이 정도? (Is that all?)."},

    {type:"teach", trg:"\uACE8\uACE8\uB8E8", src:"evenly; equally; across the board", pos:"adv", gender:null,
     note:"Pure Korean adverb. Distributing evenly without bias.",
     example:"A: \uC601\uC591\uC18C\uB97C \uACE8\uACE8\uB8E8 \uC12D\uCDE8\uD558\uC138\uC694.\nB: \uD3B8\uC2DD\uD558\uC9C0 \uC54A\uACE0\uC694?\nA: \uBAA8\uB4E0 \uACFC\uBAA9\uC744 \uACE8\uACE8\uB8E8 \uACF5\uBD80\uD558\uC138\uC694.\nB: \uADE0\uD615 \uC7A1\uD78C \uD559\uC2B5\uC774 \uC911\uC694\uD574\uC694.",
     exampleSrc:"A: Take in nutrients evenly.\nB: Without being picky?\nA: Study all subjects equally.\nB: Balanced learning is important.",
     funFact:"골고루 is a uniquely Korean adverb with no direct Sino-Korean equivalent. It conveys balance and fairness in distribution."},

    {type:"teach", trg:"\uACE8\uD504", src:"golf", pos:"noun", gender:null,
     note:"English loanword. The sport of golf.",
     example:"A: \uACE8\uD504\uB97C \uBC30\uC6B0\uACE0 \uC2F6\uC5B4\uC694.\nB: \uACE8\uD504\uC7A5\uC5D0 \uAC19\uC774 \uAC08\uAE4C\uC694?\nA: \uACE8\uD504\uAC00 \uC5B4\uB824\uC6CC\uC694?\nB: \uCC98\uC74C\uC5D0\uB294 \uC5B4\uB835\uC9C0\uB9CC \uC7AC\uBBF8\uC788\uC5B4\uC694.",
     exampleSrc:"A: I want to learn golf.\nB: Shall we go to the golf course together?\nA: Is golf difficult?\nB: It is hard at first but fun.",
     funFact:"Golf is hugely popular in Korea, especially among professionals. Korea has produced many top LPGA players including 박세리 and 고진영."},

    {type:"teach", trg:"\uACE8\uD504\uC7A5", src:"golf course", pos:"noun", gender:null,
     note:"English loanword + Sino-Korean: golf + place (場).",
     example:"A: \uADFC\uCC98\uC5D0 \uACE8\uD504\uC7A5\uC774 \uC788\uC5B4\uC694?\nB: \uAD50\uC678\uC5D0 \uD070 \uACE8\uD504\uC7A5\uC774 \uC788\uC5B4\uC694.\nA: \uACE8\uD504\uC7A5 \uC774\uC6A9\uB8CC\uAC00 \uBE44\uC2F8\uC8E0?\nB: \uB124, \uD558\uC9C0\uB9CC \uC2A4\uD06C\uB9B0 \uACE8\uD504\uB3C4 \uC788\uC5B4\uC694.",
     exampleSrc:"A: Is there a golf course nearby?\nB: There is a big course in the suburbs.\nA: Golf course fees are expensive, right?\nB: Yes, but there are also screen golf options.",
     funFact:"스크린 골프 (screen golf, indoor simulation) is a Korean innovation. Screen golf rooms are everywhere, making the sport more accessible."},

    {type:"teach", trg:"\uACE0\uD568", src:"shout; yell; scream", pos:"noun", gender:null,
     note:"Sino-Korean: high (高) + shout (喊).\nA loud shout or cry.",
     example:"A: \uACE0\uD568\uC744 \uC9C0\uB974\uC9C0 \uB9C8\uC138\uC694.\nB: \uC8C4\uC1A1\uD569\uB2C8\uB2E4, \uD654\uAC00 \uB0AC\uC5B4\uC694.\nA: \uACE0\uD568 \uC18C\uB9AC\uAC00 \uB4E4\uB838\uC5B4\uC694.\nB: \uBB34\uC2A8 \uC77C\uC774 \uC788\uB294 \uAC83 \uAC19\uC544\uC694.",
     exampleSrc:"A: Do not shout.\nB: Sorry, I was angry.\nA: I heard a shout.\nB: Something must have happened.",
     funFact:"고함을 지르다 (to let out a shout) is the standard collocation. 고함 is louder and more forceful than 외침 (call/exclamation)."},

    {type:"fb",
     s:"\uC601\uC591\uC18C\uB97C {1} \uC12D\uCDE8\uD574\uC57C \uAC74\uAC15\uD574\uC694.",
     a:["\uACE8\uACE8\uB8E8"],
     opts:["\uACE8\uACE8\uB8E8","\uACE7\uC7A5","\uACE0\uC791","\uACE7\uC774\uC5B4"],
     hint:"This adverb means evenly and without bias, covering all areas equally.",
     sSrc:"You must take in nutrients {1} to be healthy."},

    {type:"teach", trg:"\uAC70\uB450\uB2E4", src:"to achieve; to harvest; to collect", pos:"verb", gender:null,
     note:"Pure Korean verb. Gathering results or achievements.",
     example:"A: \uC88B\uC740 \uC131\uACFC\uB97C \uAC70\uB450\uC5C8\uC5B4\uC694.\nB: \uC5B4\uB5A4 \uC131\uACFC\uC608\uC694?\nA: \uB300\uD68C\uC5D0\uC11C \uC0C1\uC744 \uAC70\uB450\uC5C8\uC5B4\uC694.\nB: \uCD95\uD558\uD569\uB2C8\uB2E4!",
     exampleSrc:"A: I achieved good results.\nB: What results?\nA: I won an award at the competition.\nB: Congratulations!",
     funFact:"거두다 works for harvests (곡식을 거두다), achievements (성과를 거두다), and collections (세금을 거두다). Very versatile."},

    {type:"teach", trg:"\uAC70\uB4E4\uB2E4", src:"to help; to assist; to pitch in", pos:"verb", gender:null,
     note:"Pure Korean verb. Helping someone with their work.",
     example:"A: \uC77C\uC744 \uAC70\uB4E4\uC5B4 \uC8FC\uC138\uC694.\nB: \uBB50\uB97C \uB3C4\uC640\uB4DC\uB9B4\uAE4C\uC694?\nA: \uC9D0 \uB098\uB974\uB294 \uAC83 \uC880 \uAC70\uB4E4\uC5B4 \uC8FC\uC138\uC694.\nB: \uAE30\uAEBC\uC774 \uB3C4\uC640\uB4DC\uB9B4\uAC8C\uC694.",
     exampleSrc:"A: Please help me with the work.\nB: What can I help with?\nA: Please help me carry the luggage.\nB: I will gladly help.",
     funFact:"거들다 is slightly more casual than 돕다 (to help). It implies pitching in, getting involved. 말을 거들다 means 'to chime in.'"},

    {type:"teach", trg:"\uAC70\uC9D3", src:"falsehood; lie; deception", pos:"noun", gender:null,
     note:"Pure Korean word. Something untrue.",
     example:"A: \uAC70\uC9D3\uB9D0\uC744 \uD558\uBA74 \uC548 \uB3FC\uC694.\nB: \uC815\uC9C1\uC774 \uCD5C\uC120\uC774\uC5D0\uC694.\nA: \uAC70\uC9D3 \uC815\uBCF4\uC5D0 \uC8FC\uC758\uD558\uC138\uC694.\nB: \uC0AC\uC2E4 \uD655\uC778\uC774 \uC911\uC694\uD574\uC694.",
     exampleSrc:"A: You must not tell lies.\nB: Honesty is the best policy.\nA: Be careful of false information.\nB: Fact-checking is important.",
     funFact:"거짓말 (lie) and 거짓 정보 (false information/fake news) are increasingly discussed terms in Korean media literacy."},

    {type:"teach", trg:"\uAC70\uCE58\uB2E4", src:"to pass through; to go via", pos:"verb", gender:null,
     note:"Pure Korean verb. Passing through a process or place.",
     example:"A: \uC11C\uC6B8\uC744 \uAC70\uCCD0\uC11C \uBD80\uC0B0\uC5D0 \uAC14\uC5B4\uC694.\nB: \uC11C\uC6B8\uC5D0\uC11C \uC624\uB798 \uC788\uC5C8\uC5B4\uC694?\nA: \uB9CE\uC740 \uACFC\uC815\uC744 \uAC70\uCCD0 \uC131\uACF5\uD588\uC5B4\uC694.\nB: \uC27D\uC9C0 \uC54A\uC740 \uACFC\uC815\uC774\uC5C8\uACA0\uB124\uC694.",
     exampleSrc:"A: I went to Busan via Seoul.\nB: Did you stay long in Seoul?\nA: I succeeded through many processes.\nB: It must not have been an easy journey.",
     funFact:"거치다 is used both physically (서울을 거치다: pass through Seoul) and abstractly (과정을 거치다: go through a process)."},

    {type:"teach", trg:"\uACF5\uC911", src:"midair; public; the general public", pos:"noun", gender:null,
     note:"Sino-Korean: air/public (空/公) + middle (中).\nTwo meanings: 'in the air' or 'the public.'",
     example:"A: \uC0C8\uAC00 \uACF5\uC911\uC744 \uB0A0\uACE0 \uC788\uC5B4\uC694.\nB: \uC790\uC720\uB86D\uAC8C \uB0A0\uACE0 \uC788\uB124\uC694.\nA: \uACF5\uC911\uC804\uD654\uB294 \uC5B4\uB514\uC5D0 \uC788\uC5B4\uC694?\nB: \uC800\uCABD \uAC70\uB9AC\uC5D0 \uC788\uC5B4\uC694.",
     exampleSrc:"A: A bird is flying in midair.\nB: It is flying freely.\nA: Where is a public phone?\nB: It is on that street over there.",
     funFact:"공중 as 'air' uses 空 (empty/sky), while 공중 as 'public' uses 公 (public). 공중화장실 (public restroom), 공중전화 (public phone)."},

    {type:"teach", trg:"\uAE08\uB144", src:"this year", pos:"noun", gender:null,
     note:"Sino-Korean: now/this (今) + year (年).\nThe current year.",
     example:"A: \uAE08\uB144 \uBAA9\uD45C\uAC00 \uBB50\uC608\uC694?\nB: \uAE08\uB144\uC5D0\uB294 \uAC74\uAC15\uC744 \uC9C0\uD0A4\uB824\uACE0 \uD574\uC694.\nA: \uAE08\uB144 \uACC4\uD68D\uC744 \uC798 \uC138\uC6B0\uC138\uC694.\nB: \uAE08\uB144\uC740 \uD2B9\uBCC4\uD55C \uD574\uAC00 \uB420 \uAC70\uC608\uC694.",
     exampleSrc:"A: What are your goals for this year?\nB: This year I want to maintain my health.\nA: Make a good plan for this year.\nB: This year will be a special year.",
     funFact:"금년 is more formal than 올해 (this year). News and official documents use 금년; conversation uses 올해."},

    {type:"mc",
     q:"\uB9E4\uC77C \uACF5\uBD80\uD558\uB294\uB370 \uACE0\uC791 60\uC810\uBC16\uC5D0 \uBABB \uBC1B\uC558\uC5B4\uC694. \uACE0\uC791\uC758 \uB73B\uC740?",
     opts:["\uACA8\uC6B0","\uD56D\uC0C1","\uC26C\uC6B4","\uB9CE\uC740"],
     ans:"\uACA8\uC6B0",
     hint:"This adverb expresses disappointment, meaning 'only' or 'at most' a small amount."},

    {type:"match", pairs:[
      {trg:"\uADF9\uBCF5", src:"overcoming"},
      {trg:"\uACE0\uC0DD", src:"hardship"},
      {trg:"\uACE0\uBBFC", src:"worry/deliberation"},
      {trg:"\uAC70\uC9D3", src:"falsehood"},
      {trg:"\uAC70\uCE58\uB2E4", src:"pass through"},
      {trg:"\uAE08\uB144", src:"this year"}
    ]}
  ]
};
export default LESSON_18;
