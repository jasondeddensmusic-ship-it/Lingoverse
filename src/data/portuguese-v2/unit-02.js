// Unit 2 — Quantos anos você tem?
// Numbers and Age

const UNIT_02 = {n:2,lang:"pt",srcLang:"en",track:"v2",title:"Quantos anos você tem?",sub:"Numbers and Age",icon:"🔢",level:"A1.1",color:"#7B5EE8",lessons:[
  {id:"ptv2_u2l1",title:"Numbers 0 to 5",icon:"5️⃣",xp:15,board:true,steps:[
    {type:"intro",title:"Your first numbers",desc:"Start counting in Portuguese. You will use these every day.",goals:["Count from zero to five","Pronounce numbers confidently","Use numbers in short answers"]},
    {type:"teach",trg:"zero",src:"zero",pos:"num",gender:null,note:"Identical spelling to English. Pronunciation stresses the first syllable: ZEH-roo.",example:"A: Quantos cafés?\nB: Zero. Obrigado.",exampleSrc:"A: How many coffees?\nB: Zero. Thank you.",funFact:"Both Portuguese and English borrowed zero from Arabic 'sifr', via Italian 'zero'."},
    {type:"teach",trg:"um",src:"one",pos:"num",gender:"m",note:"Masculine form. Also means 'a' or 'an' before masculine nouns.",example:"A: Quantos cafés?\nB: Um, por favor.",exampleSrc:"A: How many coffees?\nB: One, please.",funFact:"Um has a feminine form 'uma' used before feminine nouns: uma casa (one house)."},
    {type:"teach",trg:"dois",src:"two",pos:"num",gender:"m",note:"Masculine. Becomes 'duas' before feminine nouns. Pronounced 'doys'.",example:"A: Quantos cafés?\nB: Dois, por favor.",exampleSrc:"A: How many coffees?\nB: Two, please.",funFact:"Portuguese is one of the few languages that genders the number two: dois for masculine, duas for feminine."},
    {type:"teach",trg:"três",src:"three",pos:"num",gender:null,note:"One form for both genders. Pronounced 'trehs' with an open vowel.",example:"A: Quantos cafés?\nB: Três, por favor.",exampleSrc:"A: How many coffees?\nB: Three, please.",funFact:"Três and English three share the same Indo-European root, along with Spanish tres and French trois."},
    {type:"teach",trg:"quatro",src:"four",pos:"num",gender:null,note:"One form for both genders. Pronounced 'KWA-troo'.",example:"A: Quantos cafés?\nB: Quatro.",exampleSrc:"A: How many coffees?\nB: Four.",funFact:"The Q in Portuguese quatro is pronounced like KW, similar to Spanish and Italian."},
    {type:"teach",trg:"cinco",src:"five",pos:"num",gender:null,note:"One form for both genders. Pronounced 'SEEN-koo'.",example:"A: Quantos cafés?\nB: Cinco.",exampleSrc:"A: How many coffees?\nB: Five.",funFact:"Brazilian Portuguese pronounces final -o as 'oo', so cinco sounds like 'SEEN-koo'."},
    {type:"tip",title:"Numbers with gender",text:"Only um and dois change for gender:\num / uma (one)\ndois / duas (two)\n\nThree and up stay the same for both genders.",icon:"💡"},
    {type:"mc",q:"Which number in Portuguese is 'three'?",opts:["dois","três","quatro","cinco"],ans:"três",hint:"Think of the English cognate starting with th-."},
    {type:"mc",q:"Which number has BOTH a masculine and feminine form?",opts:["três","quatro","cinco","dois"],ans:"dois",hint:"Only one and two change ending by gender."},
    {type:"fb",opts:["zero","um","dois","três"],hint:"The first counting number after zero.",s:"Eu tenho {1} café.",sSrc:"I have one coffee.",a:"um"},
    {type:"fb",opts:["dois","três","quatro","cinco"],hint:"Comes right before cinco in the counting sequence.",s:"Eu tenho {1} cafés.",sSrc:"I have four coffees.",a:"quatro"},
    {type:"match",pairs:[{trg:"zero",src:"0"},{trg:"um",src:"1"},{trg:"dois",src:"2"},{trg:"três",src:"3"},{trg:"quatro",src:"4"},{trg:"cinco",src:"5"}]},
    {type:"mc",q:"How do you say 'zero' in Portuguese?",opts:["um","zero","dois","cinco"],ans:"zero",hint:"The word looks identical to English."},
    {type:"fb",opts:["cinco","três","dois","um"],hint:"The number right after quatro.",s:"Temos {1} cafés.",sSrc:"We have five coffees.",a:"cinco"},
    {type:"mc",q:"Dois mais um equals:",opts:["dois","três","quatro","cinco"],ans:"três",hint:"Add 2 plus 1."}
  ]},
  {id:"ptv2_u2l2",title:"Numbers 6 to 10",icon:"🔟",xp:15,board:true,steps:[
    {type:"intro",title:"Counting to ten",desc:"Finish your first counting set. By the end, you can count to ten and do basic math.",goals:["Count from six to ten","Recognize each number written","Answer simple how-many questions"]},
    {type:"teach",trg:"seis",src:"six",pos:"num",gender:null,note:"Pronounced 'says'. One form for both genders.",example:"A: Quantos cafés?\nB: Seis.",exampleSrc:"A: How many coffees?\nB: Six.",funFact:"In Brazil, to avoid confusion with três on the phone, people sometimes say 'meia' (half) for six, from meia dúzia (half dozen)."},
    {type:"teach",trg:"sete",src:"seven",pos:"num",gender:null,note:"Pronounced 'SEH-chee' in Brazil. The final -te sounds like 'chee'.",example:"A: Quantos cafés?\nB: Sete.",exampleSrc:"A: How many coffees?\nB: Seven.",funFact:"Brazilian Portuguese palatalizes 'te' and 'di'. Sete sounds like 'SEH-chee' in most of Brazil."},
    {type:"teach",trg:"oito",src:"eight",pos:"num",gender:null,note:"Pronounced 'OY-too'. One form for both genders.",example:"A: Quantos cafés?\nB: Oito.",exampleSrc:"A: How many coffees?\nB: Eight.",funFact:"Oito comes from Latin octo, the same root as October, which used to be the eighth month."},
    {type:"teach",trg:"nove",src:"nine",pos:"num",gender:null,note:"Pronounced 'NOH-vee'. One form for both genders.",example:"A: Quantos cafés?\nB: Nove.",exampleSrc:"A: How many coffees?\nB: Nine.",funFact:"Nove shares roots with novo (new). Nine was seen as a 'new' number beyond the usual count in some ancient languages."},
    {type:"teach",trg:"dez",src:"ten",pos:"num",gender:null,note:"Short and sharp. Pronounced 'dehs'. The final -z sounds like 's'.",example:"A: Quantos cafés?\nB: Dez.",exampleSrc:"A: How many coffees?\nB: Ten.",funFact:"Dez is the root for década (decade) and dezembro (December, once the tenth month)."},
    {type:"teach",trg:"número",src:"number",pos:"noun",gender:"m",note:"Masculine noun. The word for any number in general.",example:"A: Qual é o seu número?\nB: Meu número é cinco.",exampleSrc:"A: What is your number?\nB: My number is five.",funFact:"The accent on the é in número marks the stressed syllable: NOO-meh-roo."},
    {type:"teach",trg:"mais",src:"plus / more",pos:"adv",gender:null,note:"Used in math (plus) and in comparisons (more). Pronounced 'mice'.",example:"A: Dois mais três?\nB: Cinco.",exampleSrc:"A: Two plus three?\nB: Five.",funFact:"Mais also means 'more' in comparisons: Eu quero mais café means I want more coffee."},
    {type:"mc",q:"Which number means 'seven'?",opts:["seis","oito","sete","nove"],ans:"sete",hint:"Think seven: s_t_."},
    {type:"mc",q:"Which number means 'ten'?",opts:["nove","dez","doze","sete"],ans:"dez",hint:"The shortest of the higher numbers here."},
    {type:"fb",opts:["seis","sete","oito","nove"],hint:"One more than sete.",s:"Eu tenho {1} cafés.",sSrc:"I have eight coffees.",a:"oito"},
    {type:"fb",opts:["mais","menos","e","ou"],hint:"Used for addition in math.",s:"Dois {1} três é cinco.",sSrc:"Two plus three is five.",a:"mais"},
    {type:"match",pairs:[{trg:"seis",src:"6"},{trg:"sete",src:"7"},{trg:"oito",src:"8"},{trg:"nove",src:"9"},{trg:"dez",src:"10"}]},
    {type:"mc",q:"Quatro mais cinco equals:",opts:["oito","nove","dez","sete"],ans:"nove",hint:"Do the addition: 4 plus 5."},
    {type:"mc",q:"Which word means 'number' itself?",opts:["ano","idade","número","mais"],ans:"número",hint:"General word for any number. Noun with accent on first syllable."},
    {type:"fb",opts:["dez","nove","seis","sete"],hint:"The largest single-digit number.",s:"Eu conto até {1}.",sSrc:"I count to ten.",a:"dez"}
  ]},
  {id:"ptv2_u2l3",title:"Asking age",icon:"🎂",xp:15,board:true,steps:[
    {type:"intro",title:"How old are you?",desc:"Portuguese uses TER (to have) for age, not ser. You literally have years.",goals:["Use ter for age","Ask 'how many years?'","Answer with your own age"]},
    {type:"teach",trg:"ter",src:"to have",pos:"verb",gender:null,note:"Basic verb for possession. Also used for age: eu tenho 25 anos means I am 25 years old.",example:"A: Você tem um café?\nB: Sim, eu tenho.",exampleSrc:"A: Do you have a coffee?\nB: Yes, I have one.",funFact:"Portuguese, Spanish, and French all use 'have' for age, unlike English 'be'."},
    {type:"teach",trg:"tenho",src:"I have",pos:"verb",gender:null,note:"First-person singular of ter. Central for talking about age and possessions.",example:"A: Quantos anos você tem?\nB: Eu tenho dez anos.",exampleSrc:"A: How old are you?\nB: I am ten years old.",funFact:"Brazilians often drop 'eu': just 'Tenho dez anos.' is natural."},
    {type:"teach",trg:"ano",src:"year",pos:"noun",gender:"m",note:"Masculine noun. Plural is anos. Used for years and for ages.",example:"A: Quantos anos?\nB: Cinco anos.",exampleSrc:"A: How many years?\nB: Five years.",funFact:"Ano comes from Latin annus, the same root as English annual and anniversary."},
    {type:"teach",trg:"idade",src:"age",pos:"noun",gender:"f",note:"Feminine noun. The general word for age.",example:"A: Qual é a sua idade?\nB: Minha idade é dez.",exampleSrc:"A: What is your age?\nB: My age is ten.",funFact:"More formal way to ask age. Everyday speech uses 'Quantos anos você tem?' much more often."},
    {type:"teach",trg:"quantos",src:"how many (m)",pos:"pron",gender:"m",note:"Masculine plural form. Used before masculine nouns like anos.",example:"A: Quantos anos você tem?\nB: Eu tenho oito anos.",exampleSrc:"A: How many years do you have?\nB: I have eight years.",funFact:"Literally 'how many years', but Portuguese treats this as 'how old'. Never ask age with ser."},
    {type:"teach",trg:"quantas",src:"how many (f)",pos:"pron",gender:"f",note:"Feminine plural form. Used before feminine nouns.",example:"A: Quantas pessoas?\nB: Cinco pessoas.",exampleSrc:"A: How many people?\nB: Five people.",funFact:"The ending changes with the gender of the thing being counted: quantos for masculine, quantas for feminine."},
    {type:"tip",title:"Age uses TER, not SER",text:"Portuguese says 'I have 10 years', not 'I am 10'.\nEu tenho dez anos means I am ten years old.\nEle tem oito anos means He is eight years old.\n\nNEVER say 'Eu sou dez'. That is wrong.",icon:"💡"},
    {type:"mc",q:"Which verb does Portuguese use for age?",opts:["ser","estar","ter","ir"],ans:"ter",hint:"You have years, not are years."},
    {type:"mc",q:"'I am ten years old' in Portuguese is:",opts:["Eu sou dez.","Eu tenho dez anos.","Eu estou dez anos.","Eu dez anos."],ans:"Eu tenho dez anos.",hint:"Use the verb for 'have' plus the word for years."},
    {type:"fb",opts:["tenho","sou","estou","é"],hint:"First-person form of ter, used for age.",s:"Eu {1} oito anos.",sSrc:"I am eight years old.",a:"tenho"},
    {type:"fb",opts:["quantos","quantas","qual","quanto"],hint:"Masculine plural form before anos.",s:"{1} anos você tem?",sSrc:"How old are you?",a:"Quantos"},
    {type:"mc",q:"Quantas is used before a noun that is:",opts:["masculine","feminine","singular","plural"],ans:"feminine",hint:"The -a ending is a gender marker."},
    {type:"fb",opts:["ano","anos","idade","idades"],hint:"Plural of the word for year, used with numbers above one.",s:"Ele tem dez {1}.",sSrc:"He is ten years old.",a:"anos"},
    {type:"match",pairs:[{trg:"ter",src:"to have"},{trg:"tenho",src:"I have"},{trg:"ano",src:"year"},{trg:"idade",src:"age"},{trg:"quantos",src:"how many (m)"},{trg:"quantas",src:"how many (f)"}]},
    {type:"mc",q:"Which sentence asks 'How old is she?' correctly?",opts:["Ela é quantos anos?","Quantos anos ela tem?","Ela está anos?","Quantos ela anos?"],ans:"Quantos anos ela tem?",hint:"Use ___ plus ___ plus a form of ter."},
    {type:"mc",q:"'Minha idade' means:",opts:["my year","my age","my number","my name"],ans:"my age",hint:"Idade is the feminine noun for the concept of age itself."}
  ]}
]}; export default UNIT_02;
