// L19 - Character & Morality
const LESSON_19 = {id:"frv2_b2gC_l19", title:"Caractère et moralité", icon:"\u{2696}", xp:15, board:true, steps:[

{type:"intro", title:"Caractère et moralité",
 desc:"Explore vocabulary for describing character traits, moral qualities, and ethical behavior.",
 goals:["Learn 8 words for character and morality","Describe personality with precision","Discuss ethical behavior and values"]},

{type:"teach", trg:"l'obstination", src:"stubbornness, determination", pos:"noun", gender:"f",
 note:"Feminine noun. Persistent refusal to change.\nCan be positive (determination) or negative (stubbornness).",
 example:"A: Son obstination lui a permis de réussir.\nB: Il a refusé d'abandonner malgré les échecs.",
 exampleSrc:"A: His determination allowed him to succeed.\nB: He refused to give up despite failures.",
 funFact:"French sees obstination as neutral. Context decides: positive (persévérance) or negative (entêtement)."},

{type:"teach", trg:"le dévolu", src:"preference, choice (in 'jeter son dévolu')", pos:"noun", gender:"m",
 note:"Masculine noun. Almost always in: jeter son dévolu sur.\nTo set one's heart on something.",
 example:"A: Elle a jeté son dévolu sur cet appartement.\nB: Il est parfait: lumineux, spacieux et bien situé.",
 exampleSrc:"A: She has set her heart on this apartment.\nB: It is perfect: bright, spacious, and well located.",
 funFact:"From Latin devolvere (to roll down). Jeter son dévolu originally meant a church appointing a bishop."},

{type:"teach", trg:"le profiteur", src:"opportunist, freeloader", pos:"noun", gender:"m",
 note:"Masculine noun. Someone who takes advantage of others.\nFeminine: la profiteuse. Very negative.",
 example:"A: Ne sois pas un profiteur, aide les autres aussi.\nB: Tu as raison, il faut donner autant qu'on reçoit.",
 exampleSrc:"A: Don't be a freeloader, help others too.\nB: You are right, you should give as much as you receive.",
 funFact:"Profiter can be neutral (to enjoy) but profiteur is always negative. A person who exploits others."},

{type:"teach", trg:"le mécréant", src:"infidel, nonbeliever", pos:"noun", gender:"m",
 note:"Masculine noun. A person who does not believe.\nHistorical and literary. Now sometimes humorous.",
 example:"A: Au Moyen Âge, les mécréants étaient persécutés.\nB: La tolérance religieuse est venue bien plus tard.",
 exampleSrc:"A: In the Middle Ages, nonbelievers were persecuted.\nB: Religious tolerance came much later.",
 funFact:"From mé- (bad) + créant (believing). Literally: bad-believing. Now used jokingly for any skeptic."},

{type:"teach", trg:"presbyte", src:"farsighted", pos:"adj", gender:null,
 note:"Adjective. Same form for masculine and feminine.\nUnable to see close objects clearly.",
 example:"A: Je deviens presbyte avec l'âge.\nB: C'est normal après quarante ans, il te faut des lunettes.",
 exampleSrc:"A: I am becoming farsighted with age.\nB: That is normal after forty, you need glasses.",
 funFact:"From Greek presbys (old person). Presbyopia typically begins around age 40. Nearly universal."},

{type:"teach", trg:"la polémique", src:"controversy, polemic", pos:"noun", gender:"f",
 note:"Feminine noun. A heated public debate.\nAlso adjective: un article polémique.",
 example:"A: La polémique autour de cette loi ne s'arrête pas.\nB: Les deux camps refusent tout compromis.",
 exampleSrc:"A: The controversy around this law does not stop.\nB: Both sides refuse any compromise.",
 funFact:"French public life thrives on la polémique. Talk shows are built around heated debates on every topic."},

{type:"teach", trg:"la perspicacité", src:"perceptiveness, shrewdness", pos:"noun", gender:"f",
 note:"Feminine noun. Sharp judgment and deep understanding.\nA high compliment for intelligence.",
 example:"A: Sa perspicacité dans l'analyse des situations est remarquable.\nB: Elle voit ce que les autres manquent.",
 exampleSrc:"A: Her perceptiveness in analyzing situations is remarkable.\nB: She sees what others miss.",
 funFact:"From Latin perspicax, sharp-sighted. A perspicace person cuts through complexity to see the truth."},

{type:"teach", trg:"la prénomination", src:"naming, the giving of a first name", pos:"noun", gender:"f",
 note:"Feminine noun. The act of giving someone a first name.\nFrom prénommer (to name).",
 example:"A: La prénomination des enfants suit souvent les modes.\nB: Certains prénoms anciens reviennent à la mode.",
 exampleSrc:"A: The naming of children often follows trends.\nB: Some old first names are coming back into fashion.",
 funFact:"In France, name choice was restricted by law until 1993. Only saints' names were allowed."},

{type:"mc",
 q:"Que signifie 'jeter son dévolu sur quelque chose' ?",
 opts:["Choisir quelque chose avec détermination","Abandonner un projet","Critiquer quelqu'un","Hésiter longuement"],
 ans:"Choisir quelque chose avec détermination",
 hint:"To set your heart on something. Originally a church term for appointing bishops."},

{type:"fb",
 s:"La {1} autour de cette réforme divise l'opinion publique.",
 a:["polémique"], opts:["polémique","perspicacité","obstination","prénomination"],
 hint:"A heated public debate. French talk shows are built around these.",
 sSrc:"The {1} around this reform divides public opinion."},

{type:"mc",
 q:"Que signifie le mot 'presbyte' ?",
 opts:["Qui est très fort","Qui a du mal à voir de près","Qui a du mal à voir de loin","Qui est très intelligent"],
 ans:"Qui a du mal à voir de près",
 hint:"From Greek presbys (old person). This vision condition typically starts around age 40."},

{type:"match", pairs:[
  {trg:"l'obstination", src:"stubbornness"},
  {trg:"le mécréant", src:"nonbeliever"},
  {trg:"presbyte", src:"farsighted"},
  {trg:"la polémique", src:"controversy"},
  {trg:"la perspicacité", src:"perceptiveness"}
]},

{type:"fb",
 s:"Sa {1} lui permet de voir ce que les autres manquent.",
 a:["perspicacité"], opts:["perspicacité","obstination","polémique","prénomination"],
 hint:"Sharp judgment and deep understanding. The ability to see clearly into situations.",
 sSrc:"Her {1} allows her to see what others miss."},

{type:"mc",
 q:"Jusqu'en 1993, quelle restriction existait sur les prénoms en France ?",
 opts:["Les prénoms étrangers étaient obligatoires","Les parents ne choisissaient pas","Seuls les noms de saints étaient autorisés","Aucune restriction n'existait"],
 ans:"Seuls les noms de saints étaient autorisés",
 hint:"French law was very strict about naming. Only names from the calendar of s... were allowed."},

{type:"fb",
 s:"Au Moyen Âge, les {1} étaient souvent persécutés pour leurs croyances.",
 a:["mécréants"], opts:["mécréants","profiteurs","presbytes","polémiques"],
 hint:"Nonbelievers or infidels. From mé- (bad) + créant (believing).",
 sSrc:"In the Middle Ages, {1} were often persecuted for their beliefs."},

{type:"drag_fill",
 s:"Son {1} l'a mené au succès, mais les {2} ont tenté de profiter de sa réussite.",
 blanks:{"1":"obstination","2":"profiteurs"},
 pool:["obstination","profiteurs","polémique","mécréants"],
 hint:"His stubborn determination led to success, but freeloaders tried to exploit his achievement"},

{type:"mc",
 q:"Quel mot est toujours négatif en français, contrairement à 'profiter' qui peut être neutre ?",
 opts:["mécréant","presbyte","polémique","profiteur"],
 ans:"profiteur",
 hint:"Profiter can mean simply 'to enjoy.' But this noun always means someone who exploits others."}

]};
export default LESSON_19;
