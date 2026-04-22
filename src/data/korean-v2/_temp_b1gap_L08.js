const LESSON_8 = {
  id:"kov2_b1gap_l8", title:"\uC6C0\uC9C1\uC784\uACFC \uBC29\uD5A5", icon:"\u{1F3C3}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Movement and Directional Verbs",
     desc:"Master Korean verbs of motion. These compound verbs combine base actions with directional endings to express precise movement. Understanding this system unlocks hundreds of natural Korean expressions.",
     goals:["Learn 20 movement and directional verbs","Understand compound verb formation with \uAC00\uB2E4/\uC624\uB2E4","Express direction and manner of movement"]},

    {type:"teach", trg:"\uAC74\uB108\uB2E4", src:"to cross", pos:"verb", gender:null,
     note:"Native Korean. To go across something (a road, river, bridge).",
     example:"A: \uAE38\uC744 \uAC74\uB108\uB824\uBA74 \uC2E0\uD638\uB4F1\uC744 \uAE30\uB2E4\uB824\uC57C \uD574\uC694.\nB: \uB124, \uC548\uC804\uC774 \uC81C\uC77C \uC911\uC694\uD574\uC694.",
     exampleSrc:"A: To cross the street, you need to wait for the traffic light.\nB: Yes, safety is the most important.",
     funFact:"The famous Korean nursery rhyme includes '\uAE38\uC744 \uAC74\uB110 \uB54C' (when crossing the street), teaching children road safety."},

    {type:"teach", trg:"\uAC78\uC74C", src:"step, pace", pos:"noun", gender:null,
     note:"From \uAC77\uB2E4 (to walk) + \uC74C (noun suffix). A single step or one's gait.",
     example:"A: \uAC78\uC74C\uC774 \uBE60\uB974\uB124\uC694.\nB: \uC57D\uC18D\uC5D0 \uB2A6\uC5B4\uC11C \uC11C\uB450\uB974\uACE0 \uC788\uC5B4\uC694.",
     exampleSrc:"A: Your pace is fast.\nB: I'm in a hurry because I'm late for my appointment.",
     funFact:"'\uCCAB\uAC78\uC74C' (first step) is commonly used in motivational contexts, like '\uCCAB\uAC78\uC74C\uC744 \uB5BC\uB2E4' (to take the first step)."},

    {type:"teach", trg:"\uB0A0\uC544\uAC00\uB2E4", src:"to fly away", pos:"verb", gender:null,
     note:"Compound: \uB0A0\uB2E4 (to fly) + \uAC00\uB2E4 (to go). Movement away from speaker.",
     example:"A: \uC0C8\uAC00 \uB0A0\uC544\uAC14\uC5B4\uC694.\nB: \uB0A8\uCABD\uC73C\uB85C \uAC00\uB294 \uAC83 \uAC19\uC544\uC694.",
     exampleSrc:"A: The bird flew away.\nB: It seems to be heading south.",
     funFact:"The -\uC544/\uC5B4 \uAC00\uB2E4 pattern always means movement AWAY from the speaker. Compare with -\uC544/\uC5B4 \uC624\uB2E4 (toward the speaker)."},

    {type:"teach", trg:"\uB0A0\uC544\uC624\uB2E4", src:"to fly toward, to fly here", pos:"verb", gender:null,
     note:"Compound: \uB0A0\uB2E4 (to fly) + \uC624\uB2E4 (to come). Movement toward speaker.",
     example:"A: \uB098\uBE44\uAC00 \uB0A0\uC544\uC654\uC5B4\uC694.\nB: \uC815\uB9D0 \uC608\uC058\uB124\uC694!",
     exampleSrc:"A: A butterfly flew over here.\nB: It's really pretty!",
     funFact:"Korean directional verbs always pair: \uB0A0\uC544\uAC00\uB2E4 (fly away) vs \uB0A0\uC544\uC624\uB2E4 (fly here). This away/toward system runs through all motion verbs."},

    {type:"tip", title:"Directional Verb Pairs: \uAC00\uB2E4 vs \uC624\uB2E4",
     text:"Korean motion verbs form pairs using \uAC00\uB2E4 (go, away) and \uC624\uB2E4 (come, toward):\n\n\uB0A0\uC544\uAC00\uB2E4 (fly away) / \uB0A0\uC544\uC624\uB2E4 (fly here)\n\uB2EC\uB824\uAC00\uB2E4 (run away) / \uB2EC\uB824\uC624\uB2E4 (run here)\n\uB118\uC5B4\uAC00\uB2E4 (go over) / \uB118\uC5B4\uC624\uB2E4 (come over)\n\uB2E4\uAC00\uAC00\uB2E4 (approach away) / \uB2E4\uAC00\uC624\uB2E4 (approach here)\n\nThe speaker's position determines which one to use."},

    {type:"mc",
     q:"\uC0C8\uAC00 \uB0A0\uC544___. (The bird flew toward the speaker.)",
     opts:["\uAC14\uC5B4\uC694","\uB0AC\uC5B4\uC694","\uC654\uC5B4\uC694","\uBD24\uC5B4\uC694"],
     ans:"\uC654\uC5B4\uC694",
     hint:"The bird came TOWARD the speaker. Which directional ending means 'come/arrive here'?"},

    {type:"teach", trg:"\uB118\uB2E4", src:"to cross over, to exceed", pos:"verb", gender:null,
     note:"Native Korean. To go over a boundary (hill, fence, limit, number).",
     example:"A: \uC0B0\uC744 \uB118\uC73C\uBA74 \uBC14\uB2E4\uAC00 \uBCF4\uC5EC\uC694.\nB: \uC870\uAE08\uB9CC \uB354 \uAC00\uBA74 \uB3FC\uC694?",
     exampleSrc:"A: If you go over the mountain, you can see the sea.\nB: Just a little further to go?",
     funFact:"'\uC0B0 \uB118\uC5B4 \uC0B0' (mountain beyond mountain) is a proverb meaning one challenge follows another."},

    {type:"teach", trg:"\uB118\uC5B4\uAC00\uB2E4", src:"to go over, to pass", pos:"verb", gender:null,
     note:"Compound: \uB118\uB2E4 (to cross) + \uAC00\uB2E4 (to go). Moving over and away.",
     example:"A: \uC2DC\uAC04\uC774 \uBE68\uB9AC \uB118\uC5B4\uAC14\uC5B4\uC694.\nB: \uBC8C\uC368 \uBC24 10\uC2DC\uB124\uC694.",
     exampleSrc:"A: Time passed quickly.\nB: It's already 10 PM.",
     funFact:"This verb is used abstractly for time ('\uC2DC\uAC04\uC774 \uB118\uC5B4\uAC00\uB2E4'), seasons, and deadlines passing by."},

    {type:"teach", trg:"\uB118\uC5B4\uC11C\uB2E4", src:"to surpass, to exceed", pos:"verb", gender:null,
     note:"Compound: \uB118\uB2E4 (to cross) + \uC11C\uB2E4 (to stand). To go beyond a limit.",
     example:"A: \uC778\uAD6C\uAC00 \uCC9C\uB9CC \uBA85\uC744 \uB118\uC5B4\uC130\uC5B4\uC694.\nB: \uC815\uB9D0 \uD070 \uB3C4\uC2DC\uB124\uC694.",
     exampleSrc:"A: The population surpassed 10 million.\nB: That's a really big city.",
     funFact:"This verb is commonly used with numbers and statistics in news: prices surpassing records, temperatures exceeding averages."},

    {type:"fb",
     s:"\uC2DC\uAC04\uC774 \uBE68\uB9AC {1}.",
     a:["\uB118\uC5B4\uAC14\uC5B4\uC694"],
     opts:["\uB118\uC5B4\uC130\uC5B4\uC694","\uB118\uC5B4\uAC14\uC5B4\uC694","\uAC74\uB130\uC5B4\uC694","\uB0A0\uC544\uAC14\uC5B4\uC694"],
     hint:"Time moved past us and away. Which compound uses 'cross' plus 'go'?",
     sSrc:"Time {1} quickly."},

    {type:"teach", trg:"\uB2EC\uB824\uAC00\uB2E4", src:"to run toward (away)", pos:"verb", gender:null,
     note:"Compound: \uB2EC\uB9AC\uB2E4 (to run) + \uAC00\uB2E4 (to go). Running away from speaker.",
     example:"A: \uC544\uC774\uAC00 \uACF5\uC6D0\uC73C\uB85C \uB2EC\uB824\uAC14\uC5B4\uC694.\nB: \uC870\uC2EC\uD558\uB77C\uACE0 \uD574\uC57C\uACA0\uC5B4\uC694.",
     exampleSrc:"A: The child ran toward the park.\nB: I should tell them to be careful.",
     funFact:"Korean children's games often use \uB2EC\uB824\uAC00\uB2E4 and \uB2EC\uB824\uC624\uB2E4 as commands during tag (\uC220\uB798\uC7A1\uAE30)."},

    {type:"teach", trg:"\uB2EC\uB824\uC624\uB2E4", src:"to run toward (here)", pos:"verb", gender:null,
     note:"Compound: \uB2EC\uB9AC\uB2E4 (to run) + \uC624\uB2E4 (to come). Running toward the speaker.",
     example:"A: \uAC15\uC544\uC9C0\uAC00 \uB2EC\uB824\uC654\uC5B4\uC694.\nB: \uBC18\uAC00\uC6CC\uC11C \uADF8\uB7EC\uB294 \uAC70\uC608\uC694.",
     exampleSrc:"A: The puppy came running over.\nB: It's doing that because it's happy to see you.",
     funFact:"Reuniting scenes in Korean dramas almost always feature someone \uB2EC\uB824\uC624\uB294 (running toward) the other person."},

    {type:"teach", trg:"\uB2EC\uB9AC\uB2E4", src:"to run", pos:"verb", gender:null,
     note:"Native Korean base verb. The foundation for all 'running' compound verbs.",
     example:"A: \uB9E4\uC77C \uC544\uCE68\uC5D0 \uB2EC\uB9AC\uC138\uC694?\nB: \uB124, \uAC74\uAC15\uC744 \uC704\uD574 \uB2EC\uB9AC\uACE0 \uC788\uC5B4\uC694.",
     exampleSrc:"A: Do you run every morning?\nB: Yes, I run for my health.",
     funFact:"The Han River running paths in Seoul attract thousands of joggers daily. Running culture has boomed since the 2010s."},

    {type:"teach", trg:"\uB2EC\uC544\uB098\uB2E4", src:"to flee, to run away", pos:"verb", gender:null,
     note:"Compound: \uB2EC\uB9AC\uB2E4 (to run) + \uB098\uB2E4 (to go out). Escaping from a place.",
     example:"A: \uB3C4\uB451\uC774 \uB2EC\uC544\uB0AC\uC5B4\uC694.\nB: \uACBD\uCC30\uC5D0 \uC2E0\uACE0\uD588\uC5B4\uC694?",
     exampleSrc:"A: The thief ran away.\nB: Did you report it to the police?",
     funFact:"In historical dramas, this verb appears constantly: \uB3C4\uB9DD\uCE58\uB2E4 (to flee/escape) is the Hanja synonym used in formal or literary contexts."},

    {type:"mc",
     q:"\uAC15\uC544\uC9C0\uAC00 \uB098\uD55C\uD14C \uB2EC\uB824___. (\uB098\uD55C\uD14C = toward me)",
     opts:["\uAC14\uC5B4\uC694","\uBD24\uC5B4\uC694","\uB0AC\uC5B4\uC694","\uC654\uC5B4\uC694"],
     ans:"\uC654\uC5B4\uC694",
     hint:"The puppy ran TOWARD the speaker. Which ending means movement in your direction?"},

    {type:"teach", trg:"\uBB10\uC5B4\uB4E4\uB2E4", src:"to jump in, to dive into", pos:"verb", gender:null,
     note:"Compound: \uBB10\uB2E4 (to jump) + \uB4E4\uB2E4 (to enter). Leaping into something.",
     example:"A: \uC544\uC774\uB4E4\uC774 \uBB3C\uC5D0 \uBB10\uC5B4\uB4E4\uC5C8\uC5B4\uC694.\nB: \uC704\uD5D8\uD558\uB2C8\uAE4C \uC870\uC2EC\uD574\uC57C \uD574\uC694.",
     exampleSrc:"A: The children jumped into the water.\nB: It's dangerous, so they need to be careful.",
     funFact:"This verb is also used figuratively: '\uC77C\uC5D0 \uBB10\uC5B4\uB4E4\uB2E4' (to dive into work) means to throw yourself completely into a task."},

    {type:"teach", trg:"\uB2E4\uAC00\uAC00\uB2E4", src:"to approach (away from speaker)", pos:"verb", gender:null,
     note:"Compound: \uB2E4\uAC00 (to approach) + \uAC00\uB2E4 (to go). Moving closer to something.",
     example:"A: \uC870\uC2EC\uD788 \uB2E4\uAC00\uAC00\uC138\uC694.\nB: \uB124, \uC870\uC6A9\uD788 \uAC08\uAC8C\uC694.",
     exampleSrc:"A: Approach carefully.\nB: Okay, I'll go quietly.",
     funFact:"Wildlife photographers in Korea use this verb constantly when describing how they approach animals without startling them."},

    {type:"teach", trg:"\uB2E4\uAC00\uC624\uB2E4", src:"to come closer, to approach (here)", pos:"verb", gender:null,
     note:"Compound: \uB2E4\uAC00 (to approach) + \uC624\uB2E4 (to come). Something drawing near to speaker.",
     example:"A: \uACA8\uC6B8\uC774 \uB2E4\uAC00\uC624\uACE0 \uC788\uC5B4\uC694.\nB: \uB530\uB73B\uD55C \uC637\uC744 \uC900\uBE44\uD574\uC57C\uACA0\uC5B4\uC694.",
     exampleSrc:"A: Winter is approaching.\nB: We need to prepare warm clothes.",
     funFact:"Seasons 'approach' in Korean: \uBD04\uC774 \uB2E4\uAC00\uC624\uB2E4, \uACA8\uC6B8\uC774 \uB2E4\uAC00\uC624\uB2E4. This personification is standard, not poetic."},

    {type:"teach", trg:"\uB3CC\uB2E4", src:"to turn, to spin", pos:"verb", gender:null,
     note:"Native Korean. Physical turning, rotation, or taking a detour.",
     example:"A: \uC774 \uBAA8\uD1B5\uC774\uC5D0\uC11C \uC624\uB978\uCABD\uC73C\uB85C \uB3C4\uC138\uC694.\nB: \uC624\uB978\uCABD\uC694? \uC54C\uACA0\uC5B4\uC694.",
     exampleSrc:"A: Turn right at this corner.\nB: Right? Got it.",
     funFact:"'\uB3CC\uB2E4' also means to go crazy: '\uBBF8\uCE58\uB2E4' is standard, but '\uB3CC\uB2E4' is the colloquial version heard constantly in Korean dramas."},

    {type:"teach", trg:"\uB3CC\uC544\uBCF4\uB2E4", src:"to look back", pos:"verb", gender:null,
     note:"Compound: \uB3CC\uB2E4 (to turn) + \uBCF4\uB2E4 (to see). Turning to look behind.",
     example:"A: \uC790\uAFB8 \uB3CC\uC544\uBCF4\uC9C0 \uB9C8\uC138\uC694.\nB: \uBB54\uAC00 \uC18C\uB9AC\uAC00 \uB4E4\uB824\uC11C\uC694.",
     exampleSrc:"A: Don't keep looking back.\nB: I heard something.",
     funFact:"'\uC9C0\uB09C\uB0A0\uC744 \uB3CC\uC544\uBCF4\uB2E4' (to look back on the past) is used for reflection and nostalgia."},

    {type:"fb",
     s:"\uACA8\uC6B8\uC774 \uC810\uC810 {1} \uC788\uC5B4\uC694.",
     a:["\uB2E4\uAC00\uC624\uACE0"],
     opts:["\uB2E4\uAC00\uAC00\uACE0","\uB3CC\uC544\uBCF4\uACE0","\uB2EC\uB824\uC624\uACE0","\uB2E4\uAC00\uC624\uACE0"],
     hint:"Winter is gradually moving TOWARD us. Which compound means 'approach here'?",
     sSrc:"Winter is gradually {1}."},

    {type:"teach", trg:"\uB3CC\uC544\uC11C\uB2E4", src:"to turn around", pos:"verb", gender:null,
     note:"Compound: \uB3CC\uB2E4 (to turn) + \uC11C\uB2E4 (to stand). To spin in place and face another direction.",
     example:"A: \uADF8\uB294 \uB3CC\uC544\uC11C\uC11C \uAC78\uC5B4\uAC14\uC5B4\uC694.\nB: \uD654\uAC00 \uB09C \uAC83 \uAC19\uC558\uC5B4\uC694.",
     exampleSrc:"A: He turned around and walked away.\nB: It seemed like he was angry.",
     funFact:"In Korean dramas, the classic dramatic exit is someone '\uB3CC\uC544\uC11C\uC11C \uAC00\uB2E4' (turning around and leaving) after an argument."},

    {type:"teach", trg:"\uB4E4\uC5B4\uC11C\uB2E4", src:"to step into, to enter", pos:"verb", gender:null,
     note:"Compound: \uB4E4\uB2E4 (to enter) + \uC11C\uB2E4 (to stand). Stepping into a new place or phase.",
     example:"A: \uC0C8 \uD559\uAE30\uC5D0 \uB4E4\uC5B4\uC130\uC5B4\uC694.\nB: \uC0C8\uB85C\uC6B4 \uB9C8\uC74C\uC73C\uB85C \uC2DC\uC791\uD574\uC694.",
     exampleSrc:"A: We've entered the new semester.\nB: Let's start with a fresh mindset.",
     funFact:"This verb is used for both physical and abstract entries: entering a building, entering a new decade, entering a new phase of life."},

    {type:"teach", trg:"\uB098\uC11C\uB2E4", src:"to step forward, to come forward", pos:"verb", gender:null,
     note:"Compound: \uB098\uB2E4 (to go out) + \uC11C\uB2E4 (to stand). To volunteer or take action.",
     example:"A: \uB204\uAC00 \uB098\uC11C\uC11C \uB3C4\uC640\uC92C\uC5B4\uC694.\nB: \uC815\uB9D0 \uACE0\uB9C8\uC6B4 \uBD84\uC774\uB124\uC694.",
     exampleSrc:"A: Someone stepped forward and helped.\nB: What a kind person.",
     funFact:"'\uB098\uC11C\uB2E4' carries a nuance of volunteering or taking initiative. Politicians who '\uB098\uC11C\uB2E4' are the ones who step up to lead."},

    {type:"teach", trg:"\uB4E4\uB974\uB2E4", src:"to drop by, to stop by", pos:"verb", gender:null,
     note:"Native Korean. Irregular verb (\uB974 irregular). A brief, casual visit.",
     example:"A: \uC9D1\uC5D0 \uAC00\uB294 \uAE38\uC5D0 \uCE74\uD398\uC5D0 \uB4E4\uB800\uC5B4\uC694.\nB: \uBB50 \uB9C8\uC168\uC5B4\uC694?",
     exampleSrc:"A: I dropped by a cafe on the way home.\nB: What did you have?",
     funFact:"'\uB4E4\uB974\uB2E4' implies the visit is brief and unplanned. For a deliberate visit, Koreans use \uBC29\uBB38\uD558\uB2E4 (Hanja: to visit)."},

    {type:"mc",
     q:"\uC9D1\uC5D0 \uAC00\uB294 \uAE38\uC5D0 \uCE74\uD398\uC5D0 ___. (\uC7A0\uAE50 \uB4E4\uC5B4\uAC14\uC5B4\uC694)",
     opts:["\uB3CC\uC558\uC5B4\uC694","\uB4E4\uB800\uC5B4\uC694","\uAC74\uB130\uC5B4\uC694","\uB0A0\uC558\uC5B4\uC694"],
     ans:"\uB4E4\uB800\uC5B4\uC694",
     hint:"This irregular verb means a brief, casual stop at a place on the way somewhere."},

    {type:"match", pairs:[
      {trg:"\uAC74\uB108\uB2E4", src:"to cross"},
      {trg:"\uB2EC\uC544\uB098\uB2E4", src:"to flee"},
      {trg:"\uB3CC\uC544\uBCF4\uB2E4", src:"to look back"},
      {trg:"\uB098\uC11C\uB2E4", src:"to step forward"},
      {trg:"\uB4E4\uB974\uB2E4", src:"to drop by"}
    ]}
  ]
};
export default LESSON_8;
