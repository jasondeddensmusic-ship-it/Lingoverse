// Korean B2 — Batch 3, Lesson 17: Peanuts, Time, and Hitting
// Words: 땅콩, 때, 때때로, 때로, 때리다, 땜, 떠나가다, 떠나오다, 떠들썩하다, 떡국, 떼, 똑똑하다, 뚜껑, 뚫다, 뚱뚱하다, 뛰놀다, 뛰어가다, 뛰어나가다, 뛰어나오다, 뛰어내리다

const LESSON_17 = {
  id:"kov2_b2b3_l17", title:"때와 떠남", icon:"⏳", xp:15, board:true,
  steps:[
    {type:"intro", title:"때와 떠남",
     desc:"Learn words about time, departures, and physical descriptions. These include important compound verbs with directional suffixes and common everyday nouns.",
     goals:["Master 20 words about time, departure, and physical qualities","Understand compound verbs with directional suffixes","Use descriptive vocabulary for people and actions"]},

    {type:"teach", trg:"땅콩", src:"peanut", pos:"noun", gender:null,
     note:"땅 (ground) + 콩 (bean).\nA bean that grows underground.",
     example:"A: 땅콩 알레르기가 있어?\nB: 아니, 나는 괜찮아.",
     exampleSrc:"A: Do you have a peanut allergy?\nB: No, I am fine.",
     funFact:"The name literally means 'ground bean' because peanuts grow underground. 땅콩버터 is peanut butter."},

    {type:"teach", trg:"때", src:"time, moment; dirt, grime", pos:"noun", gender:null,
     note:"Native Korean word with two meanings.\n때 as timing and 때 as bodily grime.",
     example:"A: 때가 되면 자연스럽게 될 거야.\nB: 기다리는 게 쉽지 않아.",
     exampleSrc:"A: When the time comes, it will happen naturally.\nB: Waiting is not easy.",
     funFact:"때를 밀다 (to scrub grime) is what happens at Korean bathhouses (찜질방). 이탈리아 타월 is the famous scrubbing cloth."},

    {type:"teach", trg:"때때로", src:"sometimes, from time to time", pos:"adv", gender:null,
     note:"때 (time) + 때 + 로 (by/in).\nAt irregular intervals, occasionally.",
     example:"A: 때때로 옛날 생각이 나.\nB: 누구나 그런 때가 있지.",
     exampleSrc:"A: From time to time, I think of the old days.\nB: Everyone has moments like that.",
     funFact:"때때로 is more literary than 가끔 (sometimes). Also the name of a popular Korean chocolate snack by Lotte."},

    {type:"teach", trg:"때로", src:"sometimes, at times", pos:"adv", gender:null,
     note:"때 (time) + 로 (by/at).\nA shorter, slightly formal way to say 'sometimes.'",
     example:"A: 때로 혼자 있고 싶을 때가 있어.\nB: 이해해, 누구나 그래.",
     exampleSrc:"A: Sometimes there are times I want to be alone.\nB: I understand, everyone feels that way.",
     funFact:"때로는 (with topic marker) is even more common: 때로는 웃고, 때로는 울고 (sometimes laughing, sometimes crying)."},

    {type:"teach", trg:"때리다", src:"to hit, to strike, to slap", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo deliver a physical blow.",
     example:"A: 사람을 때리면 안 돼.\nB: 당연하지, 폭력은 나쁜 거야.",
     exampleSrc:"A: You must not hit people.\nB: Of course, violence is wrong.",
     funFact:"때리다 is direct and strong. 치다 is a softer alternative for hitting. Both can be figurative: 사기를 때리다 (to commit fraud, slang)."},

    {type:"mc",
     q:"다음 중 '때때로'와 의미가 가장 비슷한 것은?",
     opts:["가끔","항상","절대","매일"],
     ans:"가끔",
     hint:"This word describes something that happens occasionally, not regularly or constantly."},

    {type:"teach", trg:"땜", src:"(bound noun: because of, for the sake of)", pos:"noun", gender:null,
     note:"때문 contracted in casual speech.\nColloquial shortening of 때문에 (because of).",
     example:"A: 너 땜에 늦었잖아!\nB: 미안, 준비가 오래 걸렸어.",
     exampleSrc:"A: I was late because of you!\nB: Sorry, it took me long to get ready.",
     funFact:"땜 is casual spoken Korean. Written form: 때문에. Using 땜 in formal writing would be inappropriate."},

    {type:"teach", trg:"떠나가다", src:"to leave, to depart, to go away", pos:"verb", gender:null,
     note:"떠나다 (to leave) + 가다 (to go).\nTo depart moving away from the speaker.",
     example:"A: 친구가 외국으로 떠나갔어.\nB: 아쉽다, 보고 싶을 거야.",
     exampleSrc:"A: My friend left for abroad.\nB: That is sad, you will miss them.",
     funFact:"떠나가다 (go leaving) vs. 떠나오다 (come having left). Direction relative to the speaker matters."},

    {type:"teach", trg:"떠나오다", src:"to come away from, to leave and come", pos:"verb", gender:null,
     note:"떠나다 (to leave) + 오다 (to come).\nTo depart from somewhere and arrive here.",
     example:"A: 고향을 떠나온 지 10년이 됐어.\nB: 고향이 그립지 않아?",
     exampleSrc:"A: It has been 10 years since I left my hometown.\nB: Do you not miss it?",
     funFact:"The -오다 suffix emphasizes arriving at the current location. 떠나오다 implies the speaker is now here, away from home."},

    {type:"teach", trg:"떠들썩하다", src:"to be noisy, to be boisterous", pos:"adj", gender:null,
     note:"떠들다 (to chatter) + 썩하다 (intensifier).\nDescribes a chaotic, noisy atmosphere.",
     example:"A: 밖이 왜 이렇게 떠들썩해?\nB: 축제가 열리고 있나 봐.",
     exampleSrc:"A: Why is it so noisy outside?\nB: It seems like a festival is being held.",
     funFact:"떠들썩하다 is more vivid than 시끄럽다 (noisy). It implies excitement and commotion, not just volume."},

    {type:"teach", trg:"떡국", src:"rice cake soup", pos:"noun", gender:null,
     note:"떡 (rice cake) + 국 (soup).\nA traditional soup eaten on New Year's Day.",
     example:"A: 설날에 떡국을 먹었어?\nB: 응, 한 그릇 먹으면 한 살 더 먹는대.",
     exampleSrc:"A: Did you eat rice cake soup on New Year's?\nB: Yes, they say you age one year with each bowl.",
     funFact:"Eating 떡국 on Seollal (Lunar New Year) symbolizes gaining one year of age. It is Korea's most iconic holiday dish."},

    {type:"fb",
     s:"설날에 {1}을 먹으면 한 살을 더 먹는다고 한다.",
     a:["떡국"],
     opts:["떡국","땅콩","뚜껑","떼"],
     hint:"This is a traditional Korean soup eaten specifically on New Year's Day.",
     sSrc:"They say that eating {1} on New Year's Day means you age one more year."},

    {type:"teach", trg:"떼", src:"crowd, swarm, group (of animals/people)", pos:"noun", gender:null,
     note:"Native Korean word.\nA large group moving together.",
     example:"A: 새 떼가 하늘을 날고 있어.\nB: 가을이라 남쪽으로 이동하나 봐.",
     exampleSrc:"A: A flock of birds is flying in the sky.\nB: It must be fall, they are heading south.",
     funFact:"떼 is specifically for groups that move together: 새 떼 (flock), 벌 떼 (swarm), 떼를 짓다 (to form a crowd)."},

    {type:"teach", trg:"똑똑하다", src:"to be smart, to be clever", pos:"adj", gender:null,
     note:"Onomatopoeic origin (knock-knock sound).\nDescribes intelligence or sharpness.",
     example:"A: 네 아들이 정말 똑똑하구나.\nB: 공부를 좋아해서 그런 것 같아.",
     exampleSrc:"A: Your son is really smart.\nB: I think it is because he likes studying.",
     funFact:"똑똑하다 originally mimicked a clear knocking sound, then evolved to mean 'sharp/clear-headed.' Very common compliment."},

    {type:"teach", trg:"뚜껑", src:"lid, cap, cover", pos:"noun", gender:null,
     note:"Native Korean word.\nThe cover placed on top of a container.",
     example:"A: 냄비 뚜껑 좀 열어 줘.\nB: 국이 다 끓었나 보다.",
     exampleSrc:"A: Please open the pot lid.\nB: The soup must be done boiling.",
     funFact:"뚜껑이 열리다 (the lid opens) is slang for losing one's temper, like 'blowing your top' in English."},

    {type:"teach", trg:"뚫다", src:"to pierce, to penetrate, to bore through", pos:"verb", gender:null,
     note:"Native Korean verb.\nTo make a hole through something.",
     example:"A: 벽에 구멍을 뚫어야 해.\nB: 드릴이 필요하겠네.",
     exampleSrc:"A: I need to bore a hole in the wall.\nB: You will need a drill.",
     funFact:"Also figurative: 길을 뚫다 (to break through a path/obstacle), 돌파구를 뚫다 (to find a breakthrough)."},

    {type:"mc",
     q:"'뚜껑이 열리다'라는 표현의 실제 뜻은?",
     opts:["화가 나다","기쁘다","슬프다","졸리다"],
     ans:"화가 나다",
     hint:"This idiom uses the image of a pot lid blowing off to describe an emotional reaction."},

    {type:"teach", trg:"뚱뚱하다", src:"to be fat, to be chubby", pos:"adj", gender:null,
     note:"Onomatopoeic/descriptive origin.\nDescribes being overweight or plump.",
     example:"A: 고양이가 좀 뚱뚱한 것 같아.\nB: 간식을 너무 많이 줬나 봐.",
     exampleSrc:"A: The cat seems a bit fat.\nB: I must have given it too many snacks.",
     funFact:"뚱뚱하다 can be considered rude when describing people. 통통하다 (plump) or 살이 찌다 (gained weight) are gentler."},

    {type:"teach", trg:"뛰놀다", src:"to run around playing, to frolic", pos:"verb", gender:null,
     note:"뛰다 (to run) + 놀다 (to play).\nTo play energetically by running around.",
     example:"A: 아이들이 마당에서 뛰놀고 있어.\nB: 에너지가 넘치는구나.",
     exampleSrc:"A: The children are running around playing in the yard.\nB: They are full of energy.",
     funFact:"뛰놀다 captures the joyful energy of childhood play. It is one of many compound verbs combining 뛰다 with other verbs."},

    {type:"teach", trg:"뛰어가다", src:"to run (going away)", pos:"verb", gender:null,
     note:"뛰다 (to run) + 어 + 가다 (to go).\nRunning in a direction away from the speaker.",
     example:"A: 아이가 학교 쪽으로 뛰어갔어.\nB: 늦을까 봐 그런가 보다.",
     exampleSrc:"A: The child ran toward the school.\nB: Probably because they are afraid of being late.",
     funFact:"뛰어가다 (run going) vs. 뛰어오다 (run coming). Korean directional compounds always specify perspective."},

    {type:"teach", trg:"뛰어나가다", src:"to run out, to rush outside", pos:"verb", gender:null,
     note:"뛰다 (run) + 어 + 나가다 (to go out).\nTo rush from inside to outside.",
     example:"A: 소리를 듣고 밖으로 뛰어나갔어.\nB: 무슨 일이 있었어?",
     exampleSrc:"A: I heard a noise and rushed outside.\nB: What happened?",
     funFact:"Triple compound: 뛰(run) + 나(out) + 가(go). Korean stacks directional components for precise movement description."},

    {type:"teach", trg:"뛰어나오다", src:"to run out (toward speaker), to rush out", pos:"verb", gender:null,
     note:"뛰다 (run) + 어 + 나오다 (to come out).\nTo rush from inside to outside toward the speaker.",
     example:"A: 강아지가 문을 열자마자 뛰어나왔어.\nB: 반가워서 그런 거지.",
     exampleSrc:"A: The puppy rushed out as soon as the door opened.\nB: It was excited to see you.",
     funFact:"뛰어나가다 (rush out, going away) vs. 뛰어나오다 (rush out, coming toward). Direction is always marked."},

    {type:"teach", trg:"뛰어내리다", src:"to jump down, to leap off", pos:"verb", gender:null,
     note:"뛰다 (jump) + 어 + 내리다 (to descend).\nTo jump from a higher point to a lower one.",
     example:"A: 담장에서 뛰어내리면 위험해!\nB: 알겠어, 조심할게.",
     exampleSrc:"A: It is dangerous to jump down from the wall!\nB: OK, I will be careful.",
     funFact:"뛰어내리다 specifies downward jumping. Compare: 뛰어오르다 (jump up), 뛰어넘다 (jump over)."},

    {type:"match", pairs:[
      {trg:"떡국", src:"rice cake soup"},
      {trg:"똑똑하다", src:"to be smart"},
      {trg:"뚫다", src:"to pierce"},
      {trg:"뛰어내리다", src:"to jump down"}
    ]}
  ]
};
export default LESSON_17;
