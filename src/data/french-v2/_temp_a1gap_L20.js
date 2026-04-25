const LESSON_20 = {
  id:"frv2_a1gap_l20", title:"Révision générale", icon:"\u{1F4DA}", xp:15, board:true,
  steps:[
    {type:"intro", title:"Révision générale",
     desc:"Put everything together. Review key words from all lessons and practice using them in new combinations and contexts.",
     goals:["Review vocabulary from all 19 previous lessons","Use words in new contexts","Build confidence with mixed exercises"]},

    {type:"teach", trg:"l'appareil", src:"the device, the appliance", pos:"noun", gender:"m",
     note:"Masculine noun. Covers phones, cameras, and household appliances.",
     example:"A: Quel appareil tu utilises pour les photos ?\nB: Mon téléphone, c'est suffisant.",
     exampleSrc:"A: What device do you use for photos?\nB: My phone, it's enough.",
     funFact:"'Appareil photo' = camera. 'Appareil auditif' = hearing aid. The word covers all devices."},

    {type:"teach", trg:"l'aspect", src:"the aspect, the appearance", pos:"noun", gender:"m",
     note:"Masculine noun. How something looks or a particular angle.",
     example:"A: L'aspect de la ville a changé.\nB: Oui, il y a beaucoup de nouveaux bâtiments.",
     exampleSrc:"A: The appearance of the city has changed.\nB: Yes, there are many new buildings.",
     funFact:"In conversation, 'sous cet aspect' (from this angle) introduces a new perspective on a topic."},

    {type:"teach", trg:"l'argent", src:"the money, the silver", pos:"noun", gender:"m",
     note:"Masculine noun. Means both money and the metal silver.",
     example:"A: Tu as assez d'argent ?\nB: Oui, j'ai vingt euros.",
     exampleSrc:"A: Do you have enough money?\nB: Yes, I have twenty euros.",
     funFact:"'Argent' means both money and silver. 'L'argent ne fait pas le bonheur' (money doesn't buy happiness) is a classic proverb."},

    {type:"teach", trg:"l'attention", src:"the attention, the care", pos:"noun", gender:"f",
     note:"Feminine noun. Focus or a warning to be careful.",
     example:"A: Fais attention en traversant !\nB: Oui, je regarde bien.",
     exampleSrc:"A: Be careful crossing the street!\nB: Yes, I'm looking carefully.",
     funFact:"Revisited from Lesson 10. 'Attention' works exactly like English: both for focus and as a warning."},

    {type:"teach", trg:"l'automne", src:"the autumn, the fall", pos:"noun", gender:"m",
     note:"Masculine noun. The season of changing leaves.",
     example:"A: L'automne arrive, les feuilles tombent.\nB: C'est ma saison préférée.",
     exampleSrc:"A: Autumn is coming, the leaves are falling.\nB: It's my favorite season.",
     funFact:"Revisited from Lesson 7. French 'automne' keeps the silent 'mn' from its Latin origin 'autumnus'."},

    {type:"mc",
     q:"Quel mot signifie à la fois 'money' et 'silver' ?",
     opts:["l'argent","l'appareil","l'aspect","l'attention"],
     ans:"l'argent",
     hint:"This masculine noun has a double meaning: the precious metal and the means of exchange."},

    {type:"teach", trg:"l'acte", src:"the act, the deed", pos:"noun", gender:"m",
     note:"Masculine noun. A formal deed or a part of a theatrical play.",
     example:"A: C'est un acte de courage.\nB: Oui, il est très brave.",
     exampleSrc:"A: It's an act of courage.\nB: Yes, he's very brave.",
     funFact:"Revisited from Lesson 16. In theater, law, and everyday life: 'acte' covers actions across all domains."},

    {type:"teach", trg:"l'atmosphère", src:"the atmosphere", pos:"noun", gender:"f",
     note:"Feminine noun. The air around Earth or the mood of a place.",
     example:"A: L'atmosphère est tendue ici.\nB: Oui, tout le monde est stressé.",
     exampleSrc:"A: The atmosphere is tense here.\nB: Yes, everyone is stressed.",
     funFact:"Revisited from Lesson 7. Marcel Carné's film 'Drôle de drame' has the famous line about atmosphere."},

    {type:"teach", trg:"l'avis", src:"the opinion", pos:"noun", gender:"m",
     note:"Masculine noun. Your view or judgment on something.",
     example:"A: À mon avis, c'est trop cher.\nB: Je suis d'accord.",
     exampleSrc:"A: In my opinion, it's too expensive.\nB: I agree.",
     funFact:"Revisited from Lesson 10. 'Changer d'avis' means to change one's mind. Very common expression."},

    {type:"teach", trg:"avoir du mal", src:"to have difficulty", pos:"verb", gender:null,
     note:"Expression with 'avoir'. Followed by 'à' + infinitive.",
     example:"A: Tu as du mal à dormir ?\nB: Oui, je suis trop stressé.",
     exampleSrc:"A: Do you have trouble sleeping?\nB: Yes, I'm too stressed.",
     funFact:"'Avoir du mal' is softer than 'ne pas pouvoir' (can't). It implies struggling rather than failing."},

    {type:"fb",
     s:"L'{1} ne fait pas le bonheur, dit le proverbe.",
     a:["argent"],
     opts:["argent","aspect","avis","attention"],
     hint:"This masculine noun means both money and silver. The proverb says it cannot buy happiness.",
     sSrc:"{1} doesn't buy happiness, says the proverb."},

    {type:"teach", trg:"avoir le temps", src:"to have time", pos:"verb", gender:null,
     note:"Expression with 'avoir'. Whether you have enough time for something.",
     example:"A: Tu as le temps de prendre un café ?\nB: Oui, j'ai dix minutes.",
     exampleSrc:"A: Do you have time for a coffee?\nB: Yes, I have ten minutes.",
     funFact:"'Prendre le temps' (to take the time) is a French philosophy: slow down and enjoy life."},

    {type:"teach", trg:"l'avoine", src:"the oat", pos:"noun", gender:"f",
     note:"Feminine noun. The grain used for porridge and cereal.",
     example:"A: Tu manges des flocons d'avoine ?\nB: Oui, chaque matin.",
     exampleSrc:"A: Do you eat oat flakes?\nB: Yes, every morning.",
     funFact:"Revisited from Lesson 6. 'Lait d'avoine' (oat milk) has become very popular in French cafes."},

    {type:"teach", trg:"achever", src:"to complete, to finish", pos:"verb", gender:null,
     note:"Stem-changing verb. To bring something to its end.",
     example:"A: Tu as achevé le projet ?\nB: Oui, c'est terminé !",
     exampleSrc:"A: Did you complete the project?\nB: Yes, it's finished!",
     funFact:"'Achever' can also mean to finish off (in a dramatic sense). Context determines the tone."},

    {type:"teach", trg:"l'astre", src:"the celestial body, the star", pos:"noun", gender:"m",
     note:"Masculine noun. Poetic word for stars and planets.",
     example:"A: Les astres brillent ce soir.\nB: Oui, le ciel est clair.",
     exampleSrc:"A: The stars are shining tonight.\nB: Yes, the sky is clear.",
     funFact:"Revisited from Lesson 7. 'L'astre du jour' (the star of the day) is a poetic name for the sun."},

    {type:"mc",
     q:"Que signifie 'avoir du mal à dormir' ?",
     opts:["to not want to sleep","to have trouble sleeping","to have a bad dream","to sleep badly"],
     ans:"to have trouble sleeping",
     hint:"This expression with 'avoir' describes struggling or having difficulty with an action."},

    {type:"teach", trg:"l'aiguille", src:"the needle, the clock hand", pos:"noun", gender:"f",
     note:"Feminine noun. Sewing needles and clock hands share this word.",
     example:"A: L'aiguille de l'horloge avance.\nB: Il est bientôt midi.",
     exampleSrc:"A: The clock hand is moving forward.\nB: It's almost noon.",
     funFact:"Revisited from Lesson 12. The 'Aiguille du Midi' is a famous peak near Mont Blanc at 3,842 meters."},

    {type:"teach", trg:"l'album", src:"the album", pos:"noun", gender:"m",
     note:"Masculine noun. Photo album, music album, or children's book.",
     example:"A: On regarde l'album de famille ?\nB: Oui, j'adore les vieilles photos !",
     exampleSrc:"A: Shall we look at the family album?\nB: Yes, I love old photos!",
     funFact:"Revisited from Lesson 10. 'Album jeunesse' (children's picture book) is a thriving French publishing genre."},

    {type:"teach", trg:"l'accueil", src:"the reception, the welcome", pos:"noun", gender:"m",
     note:"Masculine noun. Both the place and the act of welcoming.",
     example:"A: L'accueil de l'hôtel est chaleureux.\nB: Oui, le personnel est gentil.",
     exampleSrc:"A: The hotel's welcome is warm.\nB: Yes, the staff is kind.",
     funFact:"Revisited from Lesson 5. 'Page d'accueil' is a website's homepage. Welcome translated to the digital world."},

    {type:"teach", trg:"l'avantage", src:"the advantage", pos:"noun", gender:"m",
     note:"Masculine noun. A benefit or positive point.",
     example:"A: Quel est l'avantage de cette méthode ?\nB: C'est plus rapide.",
     exampleSrc:"A: What's the advantage of this method?\nB: It's faster.",
     funFact:"Revisited from Lesson 8. In tennis, 'avantage' is the point after deuce. A French sport term used worldwide."},

    {type:"fb",
     s:"Tu as {1} de prendre un café avec moi ?",
     a:["le temps"],
     opts:["le temps","du mal","le choix","l'air"],
     hint:"This expression asks whether someone's schedule allows them to do something.",
     sSrc:"Do you have {1} to have a coffee with me?"},

    {type:"match", pairs:[
      {trg:"argent", src:"money/silver"},
      {trg:"avoir du mal", src:"to have difficulty"},
      {trg:"achever", src:"to complete"},
      {trg:"accueil", src:"reception/welcome"},
      {trg:"avantage", src:"advantage"}
    ]},

    {type:"mc",
     q:"Comment dit-on 'homepage' en français ?",
     opts:["page d'argent","page d'avis","page d'accueil","page d'album"],
     ans:"page d'accueil",
     hint:"All four options share the same frame. The third uses the noun French speakers say when greeting visitors."},

    {type:"fb",
     s:"J'ai {1} à comprendre cet exercice, tu peux m'aider ?",
     a:["du mal"],
     opts:["du mal","le temps","l'air","du bien"],
     hint:"This 'avoir' expression means struggling or having difficulty with something.",
     sSrc:"I'm having {1} understanding this exercise, can you help me?"}
  ]
};
export default LESSON_20;
