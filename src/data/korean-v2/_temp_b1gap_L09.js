const LESSON_9 = {
  id:"kov2_b1gap_l9", title:"\uC190\uB3D9\uC791\uACFC \uC870\uC791", icon:"\u270B", xp:15, board:true,
  steps:[
    {type:"intro", title:"Hand Actions and Physical Manipulation",
     desc:"Learn verbs for physical actions done with the hands. These everyday verbs describe how we interact with objects: pressing, throwing, pulling, covering, and more. Many have both literal and figurative uses.",
     goals:["Learn 20 hand action and manipulation verbs","Understand causative pairs like \uB2F4\uB2E4/\uB2F4\uAE30\uB2E4","Use physical verbs in natural Korean sentences"]},

    {type:"teach", trg:"\uB204\uB974\uB2E4", src:"to press, to push down", pos:"verb", gender:null,
     note:"Native Korean. Press a button, push down on something.",
     example:"A: \uBC84\uD2BC\uC744 \uB204\uB974\uC138\uC694.\nB: \uC5B4\uB5A4 \uBC84\uD2BC\uC774\uC694?",
     exampleSrc:"A: Press the button.\nB: Which button?",
     funFact:"'\uB204\uB974\uB2E4' is used for elevator buttons, keyboards, doorbells, and even acupressure points (\uD608\uC790\uB9AC\uB97C \uB204\uB974\uB2E4)."},

    {type:"teach", trg:"\uB358\uC9C0\uB2E4", src:"to throw", pos:"verb", gender:null,
     note:"Native Korean. To throw or toss an object.",
     example:"A: \uACF5\uC744 \uB358\uC838 \uC8FC\uC138\uC694.\nB: \uC5EC\uAE30\uC694! \uBC1B\uC544\uC694!",
     exampleSrc:"A: Throw the ball, please.\nB: Here! Catch!",
     funFact:"Baseball (\uC57C\uAD6C) is Korea's most popular sport. '\uACF5\uC744 \uB358\uC9C0\uB2E4' (to throw a ball) is heard at every game."},

    {type:"teach", trg:"\uB450\uB4DC\uB9AC\uB2E4", src:"to knock, to tap", pos:"verb", gender:null,
     note:"Native Korean. Repeated tapping or knocking motion.",
     example:"A: \uBB38\uC744 \uB450\uB4DC\uB838\uB294\uB370 \uC544\uBB34\uB3C4 \uC5C6\uC5C8\uC5B4\uC694.\nB: \uC678\uCD9C \uC911\uC778\uAC00 \uBD10\uC694.",
     exampleSrc:"A: I knocked on the door but nobody was there.\nB: They must be out.",
     funFact:"'\uB4F1\uC744 \uB450\uB4DC\uB9AC\uB2E4' (to pat someone's back) is a gesture of comfort and encouragement in Korean culture."},

    {type:"teach", trg:"\uB9CC\uC9C0\uB2E4", src:"to touch", pos:"verb", gender:null,
     note:"Native Korean. To feel or touch with the hands.",
     example:"A: \uC804\uC2DC\uBB3C\uC744 \uB9CC\uC9C0\uC9C0 \uB9C8\uC138\uC694.\nB: \uC8C4\uC1A1\uD569\uB2C8\uB2E4.",
     exampleSrc:"A: Please don't touch the exhibits.\nB: I'm sorry.",
     funFact:"In museums and shops, the polite sign '\uC190\uB300\uC9C0 \uB9C8\uC138\uC694' (please don't touch) uses the honorific form of this verb."},

    {type:"teach", trg:"\uB5BC\uB2E4", src:"to remove, to detach", pos:"verb", gender:null,
     note:"Native Korean. To peel off, take apart, or separate something attached.",
     example:"A: \uC2A4\uD2F0\uCEE4\uB97C \uB5BC \uC218 \uC788\uC5B4\uC694?\nB: \uC870\uC2EC\uD788 \uB5BC\uAC8C\uC694.",
     exampleSrc:"A: Can you remove the sticker?\nB: I'll peel it off carefully.",
     funFact:"'\uB208\uC744 \uB5BC \uC218 \uC5C6\uB2E4' (can't take one's eyes off) is a common expression for something captivating."},

    {type:"mc",
     q:"\uBB38\uC744 ___ \uB290\uB370 \uC544\uBB34\uB3C4 \uC5C6\uC5C8\uC5B4\uC694.",
     opts:["\uB358\uC84C","\uB20C\uB800","\uB450\uB4DC\uB838","\uB9CC\uC84C"],
     ans:"\uB450\uB4DC\uB838",
     hint:"This verb means repeated tapping on a surface, like a door or someone's back."},

    {type:"fb",
     s:"\uBC84\uD2BC\uC744 {1} \uC8FC\uC138\uC694.",
     a:["\uB20C\uB7EC"],
     opts:["\uB358\uC838","\uB9CC\uC838","\uB5FC","\uB20C\uB7EC"],
     hint:"This verb describes pushing something down, like a button on a keyboard or elevator.",
     sSrc:"Please {1} the button."},

    {type:"teach", trg:"\uB044\uB2E4", src:"to pull, to drag", pos:"verb", gender:null,
     note:"Native Korean. To pull something toward you or drag it along.",
     example:"A: \uC774 \uC0C1\uC790\uB97C \uC880 \uB044\uC5B4 \uC8FC\uC138\uC694.\nB: \uBB34\uAC81\uB124\uC694. \uAC19\uC774 \uB044\uC5B4\uC694.",
     exampleSrc:"A: Please pull this box over.\nB: It's heavy. Let's pull it together.",
     funFact:"'\uAD00\uC2EC\uC744 \uB044\uB2E4' (to pull attention) means to attract interest. '\uC2DC\uC120\uC744 \uB044\uB2E4' (to pull gazes) means to be eye-catching."},

    {type:"teach", trg:"\uB36E\uB2E4", src:"to cover", pos:"verb", gender:null,
     note:"Native Korean. To place something over something else to hide or protect it.",
     example:"A: \uC774\uBD88\uC744 \uB36E\uC5B4 \uC8FC\uC138\uC694.\nB: \uCD94\uC6E0\uC5B4\uC694? \uC5EC\uAE30\uC694.",
     exampleSrc:"A: Please cover me with a blanket.\nB: Were you cold? Here you go.",
     funFact:"'\uCC45\uC744 \uB36E\uB2E4' (to close a book, literally 'to cover a book') is the standard way to say you finished reading."},

    {type:"teach", trg:"\uB4A4\uC9D1\uB2E4", src:"to flip over, to turn upside down", pos:"verb", gender:null,
     note:"Compound: \uB4A4 (back/behind) + \uC9D1\uB2E4 (to grab). To turn something over.",
     example:"A: \uD32C\uCF00\uC774\uD06C\uB97C \uB4A4\uC9D1\uC73C\uC138\uC694.\nB: \uC870\uC2EC\uD574\uC57C \uC548 \uBD80\uC11C\uC838\uC694.",
     exampleSrc:"A: Flip the pancake over.\nB: I need to be careful so it doesn't break.",
     funFact:"'\uC138\uC0C1\uC744 \uB4A4\uC9D1\uB2E4' (to flip the world upside down) means to cause a huge commotion or revolution."},

    {type:"teach", trg:"\uB2F4\uADF8\uB2E4", src:"to soak, to dip", pos:"verb", gender:null,
     note:"Native Korean. To submerge something in liquid.",
     example:"A: \uBC1C\uC744 \uBB3C\uC5D0 \uB2F4\uADF8\uACE0 \uC26C\uC5B4\uC694.\nB: \uC2DC\uC6D0\uD558\uACE0 \uC88B\uC544\uC694.",
     exampleSrc:"A: Soak your feet in the water and rest.\nB: It's cool and nice.",
     funFact:"Kimchi-making involves '\uBC30\uCD94\uB97C \uC18C\uAE08\uBB3C\uC5D0 \uB2F4\uADF8\uB2E4' (soaking cabbage in salt water), the essential first step."},

    {type:"teach", trg:"\uB2F4\uAE30\uB2E4", src:"to be contained, to be held in", pos:"verb", gender:null,
     note:"Passive form of \uB2F4\uB2E4 (to put in). Something is held inside a container.",
     example:"A: \uC0C1\uC790\uC5D0 \uBB50\uAC00 \uB2F4\uACA8 \uC788\uC5B4\uC694?\nB: \uC120\uBB3C\uC774 \uB2F4\uACA8 \uC788\uC5B4\uC694.",
     exampleSrc:"A: What's contained in the box?\nB: A gift is in it.",
     funFact:"'\uB9C8\uC74C\uC774 \uB2F4\uAE30\uB2E4' (feelings are contained) describes something that carries emotional weight, like a heartfelt letter."},

    {type:"teach", trg:"\uB2F4\uB2E4", src:"to put in, to hold", pos:"verb", gender:null,
     note:"Native Korean. Active form: to put something into a container.",
     example:"A: \uC74C\uC2DD\uC744 \uADF8\uB9C7\uC5D0 \uB2F4\uC544 \uC8FC\uC138\uC694.\nB: \uB124, \uC5EC\uAE30\uC5D0 \uB2F4\uC544 \uB4DC\uB9B4\uAC8C\uC694.",
     exampleSrc:"A: Please put the food in a bowl.\nB: Yes, I'll put it in here for you.",
     funFact:"The active/passive pair \uB2F4\uB2E4/\uB2F4\uAE30\uB2E4 is a great example of Korean's systematic voice system: the doer puts in vs the thing is contained."},

    {type:"mc",
     q:"\uBC1C\uC744 \uBB3C\uC5D0 ___ \uC26C\uC5B4\uC694.",
     opts:["\uB2F4\uACE0","\uB2F4\uADF8\uACE0","\uB36E\uACE0","\uB044\uACE0"],
     ans:"\uB2F4\uADF8\uACE0",
     hint:"This verb means to submerge something in liquid, like feet in water or cabbage in brine."},

    {type:"teach", trg:"\uAEBC\uB0B4\uB2E4", src:"to take out, to pull out", pos:"verb", gender:null,
     note:"Compound: \uAEBC (from \uB044\uB2E4, to extinguish/pull) + \uB0B4\uB2E4 (to put out). Remove from inside.",
     example:"A: \uAC00\uBC29\uC5D0\uC11C \uC9C0\uAC11\uC744 \uAEBC\uB0C8\uC5B4\uC694.\nB: \uC5BC\uB9C8\uC608\uC694?",
     exampleSrc:"A: I took the wallet out of my bag.\nB: How much is it?",
     funFact:"'\uAEBC\uB0B4\uB2E4' is the natural opposite of '\uB123\uB2E4' (to put in). Korean uses many such complementary verb pairs."},

    {type:"teach", trg:"\uB04A\uB2E4", src:"to cut off, to sever", pos:"verb", gender:null,
     note:"Native Korean. To cut a connection: rope, phone call, relationship.",
     example:"A: \uC804\uD654\uB97C \uB04A\uC5B4\uC57C\uACA0\uC5B4\uC694.\nB: \uB124, \uB098\uC911\uC5D0 \uB2E4\uC2DC \uC804\uD654\uD560\uAC8C\uC694.",
     exampleSrc:"A: I need to hang up the phone.\nB: Okay, I'll call again later.",
     funFact:"'\uC804\uD654\uB97C \uB04A\uB2E4' (to cut the phone) is how Koreans say 'to hang up.' The metaphor comes from literally cutting the phone line."},

    {type:"teach", trg:"\uB2EC\uB2E4", src:"to attach, to hang", pos:"verb", gender:null,
     note:"Native Korean. To fasten something onto a surface or object.",
     example:"A: \uBCBD\uC5D0 \uC0AC\uC9C4\uC744 \uB2EC\uC558\uC5B4\uC694.\nB: \uC608\uC058\uB2E4! \uC5B4\uB514\uC11C \uCC0D\uC740 \uC0AC\uC9C4\uC774\uC5D0\uC694?",
     exampleSrc:"A: I hung a photo on the wall.\nB: It's pretty! Where was the photo taken?",
     funFact:"'\uBC8C\uC744 \uB2EC\uB2E4' means to attach stars, i.e., to achieve military rank. Also used for earning stars in games."},

    {type:"teach", trg:"\uAC08\uB2E4", src:"to sharpen, to change, to grind", pos:"verb", gender:null,
     note:"Native Korean. Multiple meanings depending on context: sharpen a knife, change bedsheets, grind grain.",
     example:"A: \uCE7C\uC744 \uAC08\uC544\uC57C \uD574\uC694.\nB: \uB9DE\uC544\uC694, \uC798 \uC548 \uB4E4\uC5B4\uC694.",
     exampleSrc:"A: I need to sharpen the knife.\nB: Right, it doesn't cut well.",
     funFact:"Context is everything with \uAC08\uB2E4: '\uCE7C\uC744 \uAC08\uB2E4' (sharpen a knife), '\uC2DC\uD2B8\uB97C \uAC08\uB2E4' (change sheets), '\uB4F1\uC744 \uAC08\uB2E4' (scratch one's back)."},

    {type:"fb",
     s:"\uAC00\uBC29\uC5D0\uC11C \uC9C0\uAC11\uC744 {1}.",
     a:["\uAEBC\uB0C8\uC5B4\uC694"],
     opts:["\uB04A\uC5C8\uC5B4\uC694","\uB2EC\uC558\uC5B4\uC694","\uAEBC\uB0C8\uC5B4\uC694","\uAC08\uC558\uC5B4\uC694"],
     hint:"This compound verb means to remove something from inside a container or bag.",
     sSrc:"I {1} the wallet from the bag."},

    {type:"teach", trg:"\uAC10\uB2E4", src:"to close eyes, to wash hair", pos:"verb", gender:null,
     note:"Native Korean. Two meanings: 1) close/shut eyes, 2) wash/wrap hair.",
     example:"A: \uB208\uC744 \uAC10\uC73C\uC138\uC694.\nB: \uC774\uC81C \uB728\uC138\uC694.",
     exampleSrc:"A: Close your eyes.\nB: Now open them.",
     funFact:"'\uB208\uAC10\uB2E4' (to close one's eyes) is a euphemism for death: '\uD560\uBA38\uB2C8\uAC00 \uB208\uC744 \uAC10\uC73C\uC168\uB2E4' (Grandmother closed her eyes)."},

    {type:"teach", trg:"\uAC00\uB9AC\uB2E4", src:"to cover, to hide, to be picky", pos:"verb", gender:null,
     note:"Native Korean. To screen, select, or conceal. Also means to be selective/picky.",
     example:"A: \uC5BC\uAD74\uC744 \uAC00\uB9AC\uC9C0 \uB9C8\uC138\uC694.\nB: \uBD80\uB044\uB7EC\uC6CC\uC11C \uADF8\uB798\uC694.",
     exampleSrc:"A: Don't hide your face.\nB: I'm doing it because I'm embarrassed.",
     funFact:"'\uC74C\uC2DD\uC744 \uAC00\uB9AC\uB2E4' (to be picky about food) is a common phrase parents use when children refuse certain foods."},

    {type:"teach", trg:"\uB0B4\uBC00\uB2E4", src:"to stick out, to extend", pos:"verb", gender:null,
     note:"Compound: \uB0B4 (out) + \uBC00\uB2E4 (to push). To push something outward.",
     example:"A: \uC190\uC744 \uB0B4\uBC00\uC5B4 \uC8FC\uC138\uC694.\nB: \uC5EC\uAE30\uC694.",
     exampleSrc:"A: Please extend your hand.\nB: Here it is.",
     funFact:"At hospitals, doctors say '\uD600\uB97C \uB0B4\uBC00\uC5B4 \uBCF4\uC138\uC694' (please stick out your tongue) during checkups."},

    {type:"teach", trg:"\uB9DE\uCD94\uB2E4", src:"to match, to adjust, to assemble", pos:"verb", gender:null,
     note:"From \uB9DE\uB2E4 (to be right) + \uCD94\uB2E4 (to chase/add). To make something fit correctly.",
     example:"A: \uC2DC\uAC04\uC744 \uB9DE\uCD94\uAE30 \uC5B4\uB824\uC6CC\uC694.\nB: \uC624\uD6C4\uC5D0 \uAD1C\uCC2E\uC544\uC694?",
     exampleSrc:"A: It's hard to match our schedules.\nB: Is the afternoon okay?",
     funFact:"'\uD37C\uC990\uC744 \uB9DE\uCD94\uB2E4' (to put a puzzle together) and '\uC2DC\uAC04\uC744 \uB9DE\uCD94\uB2E4' (to coordinate times) use the same verb."},

    {type:"teach", trg:"\uB044\uB2E4", src:"to insert, to put on, to wedge in", pos:"verb", gender:null,
     note:"Native Korean. To fit something into a tight space: ring on finger, gloves on hands.",
     example:"A: \uBC18\uC9C0\uB97C \uB07C\uACE0 \uC788\uB124\uC694.\nB: \uB124, \uC120\uBB3C\uBC1B\uC740 \uAC70\uC608\uC694.",
     exampleSrc:"A: You're wearing a ring.\nB: Yes, I received it as a gift.",
     funFact:"'\uBC18\uC9C0\uB97C \uB07C\uB2E4' (to put on a ring), '\uC7A5\uAC11\uC744 \uB07C\uB2E4' (to put on gloves). Korean uses different verbs for different clothing items."},

    {type:"mc",
     q:"\uC2DC\uAC04\uC744 ___ \uC5B4\uB824\uC6CC\uC694. (\uC77C\uC815\uC744 \uC870\uC815\uD558\uB2E4)",
     opts:["\uB04A\uAE30","\uAC08\uAE30","\uAEBC\uB0B4\uAE30","\uB9DE\uCD94\uAE30"],
     ans:"\uB9DE\uCD94\uAE30",
     hint:"This verb means to make things fit or align, like coordinating schedules or assembling pieces."},

    {type:"match", pairs:[
      {trg:"\uB042\uB2E4", src:"to pull"},
      {trg:"\uB36E\uB2E4", src:"to cover"},
      {trg:"\uB04A\uB2E4", src:"to cut off"},
      {trg:"\uB2EC\uB2E4", src:"to attach"},
      {trg:"\uB062\uB2E4", src:"to insert"}
    ]}
  ]
};
export default LESSON_9;
