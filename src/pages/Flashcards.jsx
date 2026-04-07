import React, { useState, useEffect, useMemo } from "react";
import { LANG_META } from '../data/metadata.js';
import { VOCAB, t, ARTICLE_COLORS, getArticle } from '../data/vocabulary.js';
import { POS_COLORS, GENDER_COLORS } from '../data/dictionary.js';
import { shuffle, cap, UNITS } from '../utils.js';
import { SpeakerButton } from '../audio.jsx';

// Map short POS tags to display-friendly labels
const POS_LABELS = {verb:"Verb",noun:"Noun",adj:"Adjective",adv:"Adverb",prep:"Preposition",conj:"Conjunction",pron:"Pronoun",num:"Number",intj:"Interjection",part:"Particle",aux:"Auxiliary",art:"Article"};
// Map short POS tags to POS_COLORS keys
const POS_KEY_MAP = {verb:"verb",noun:"noun",adj:"adjective",adv:"adverb",prep:"preposition",conj:"conjunction",pron:"pronoun",num:"number",intj:"interjection",part:"particle",aux:"auxiliary",art:"article"};
const GENDER_LABELS = {m:"masculine",f:"feminine",n:"neuter",c:"common",pl:"plural"};

// Build vocab from UNITS teach cards for v2 languages (German etc.)
// baseLang: prefer units with matching srcLang for translations
function buildUnitsVocab(lang, baseLang) {
  const seen = new Set();
  const cards = [];
  const cardMap = new Map(); // word -> card (for Arabic override)
  const langUnits = UNITS.filter(u => u.lang === lang);
  // Sort: preferred srcLang units LAST so they override
  const sorted = [...langUnits].sort((a, b) => {
    const aMatch = (a.srcLang || "en") === baseLang ? 1 : 0;
    const bMatch = (b.srcLang || "en") === baseLang ? 1 : 0;
    return aMatch - bMatch;
  });
  for (const u of sorted) {
    const level = (u.level || "A1").substring(0, 2);
    const unitSrcLang = u.srcLang || "en";
    for (const lesson of (u.lessons || [])) {
      for (const st of (lesson.steps || [])) {
        if (st.type !== "teach") continue;
        const word = st.nl || st.trg || "";
        if (!word) continue;
        const key = word.toLowerCase();
        // If baseLang matches this unit's srcLang, override translation
        if (seen.has(key)) {
          if (unitSrcLang === baseLang && baseLang !== "en") {
            const existing = cardMap.get(key);
            if (existing) {
              existing.translation = st.en || st.src || existing.translation;
              existing.note = st.note || existing.note;
              existing.funFact = st.funFact || existing.funFact;
            }
          }
          continue;
        }
        seen.add(key);
        const card = {
          word,
          translation: st.en || st.src || "",
          category: st.pos || "",
          level,
          phonetic: st.phonetic || "",
          pos: st.pos || null,
          gender: st.gender || null,
          funFact: st.funFact || null,
          note: st.note || null,
        };
        cards.push(card);
        cardMap.set(key, card);
      }
    }
  }
  return cards;
}

function Flashcards({lang,baseLang="en",user,showToast}){
  // Use UNITS-derived vocab for languages with v2 content, fall back to static VOCAB
  const allVocab = useMemo(() => {
    const unitsVocab = buildUnitsVocab(lang, baseLang);
    // If UNITS has substantial teach cards, prefer those over static VOCAB
    if (unitsVocab.length > 50) return unitsVocab;
    // Otherwise use static VOCAB (Korean, Dutch, French, Spanish etc.)
    return VOCAB[lang] || [];
  }, [lang, baseLang]);

  // Only show words the user has learned
  const learnedWords=allVocab.filter(w=>user.lw.has(w.word));
  const [mode,setMode]=useState("shuffle"); // shuffle, level, alpha
  const [deck,setDeck]=useState([]);
  const [idx,setIdx]=useState(0);
  const [flipped,setFlipped]=useState(false);

  useEffect(()=>{
    let sorted=[...learnedWords];
    if(mode==="shuffle") sorted=shuffle(sorted);
    else if(mode==="alpha") sorted.sort((a,b)=>a.word.localeCompare(b.word));
    else if(mode==="level") sorted.sort((a,b)=>(a.level||"A1").localeCompare(b.level||"A1"));
    setDeck(sorted);setIdx(0);setFlipped(false);
  },[mode,user.lw.size]);

  if(learnedWords.length===0) return(
    <div className="anim" style={{textAlign:"center",paddingTop:40}}>
      <div style={{fontSize:56,marginBottom:16}}>🗂️</div>
      <h2 className="hd" style={{fontSize:24,fontWeight:800,marginBottom:8}}>{t("fc_title",baseLang)}</h2>
      <p style={{color:"var(--gray-400)",fontSize:15,lineHeight:1.7,maxWidth:360,margin:"0 auto 24px"}}>{t("fc_empty_desc",baseLang)}</p>
      <div style={{display:"inline-block",background:"var(--blue-pale)",borderRadius:14,padding:"12px 20px",border:"1.5px solid var(--blue-light)"}}>
        <span style={{fontSize:13,color:"var(--blue)",fontWeight:600}}>📚 {allVocab.length} {t("fc_words_waiting",baseLang)}</span>
      </div>
    </div>
  );

  const card=deck[idx];
  if(!card) return null;

  return(
    <div className="anim">
      <div style={{textAlign:"center",marginBottom:20}}>
        <div style={{fontSize:36,marginBottom:6}}>🗂️</div>
        <h2 className="hd" style={{fontSize:24,fontWeight:800,marginBottom:4}}>{t("fc_title",baseLang)}</h2>
        <p style={{color:"var(--gray-400)",fontSize:13}}>{learnedWords.length} {t("fc_words_learned",baseLang)} · {t("fc_tap_flip",baseLang)}</p>
      </div>

      {/* Mode selector */}
      <div style={{display:"flex",justifyContent:"center",gap:6,marginBottom:20}}>
        {[{id:"shuffle",icon:"🔀",label:t("fc_shuffle",baseLang)},{id:"level",icon:"📊",label:t("fc_by_level",baseLang)},{id:"alpha",icon:"🔤",label:t("fc_a_z",baseLang)}].map(m=>(
          <button key={m.id} onClick={()=>setMode(m.id)} style={{padding:"7px 16px",borderRadius:16,border:`2px solid ${mode===m.id?"var(--blue)":"var(--gray-200)"}`,background:mode===m.id?"var(--blue)":"white",color:mode===m.id?"white":"var(--gray-500)",fontWeight:700,fontSize:12,cursor:"pointer",transition:"all .15s"}}>{m.icon} {m.label}</button>
        ))}
      </div>

      {/* Card counter */}
      <div style={{textAlign:"center",marginBottom:12,color:"var(--gray-400)",fontSize:13,fontWeight:600}}>
        {idx+1} / {deck.length}
        {card.level&&<span style={{marginLeft:8,padding:"2px 10px",borderRadius:8,background:"var(--blue-light)",fontSize:10,fontWeight:700,color:"var(--blue)"}}>{card.level}</span>}
      </div>

      {/* Flashcard */}
      <div className="fc-wrap" onClick={()=>setFlipped(!flipped)}>
        <div className={`fc-inner ${flipped?"flipped":""}`}>
          <div className="fc-face fc-front">
            <div style={{display:"flex",justifyContent:"center",gap:6,flexWrap:"wrap",marginBottom:4}}>
              {card.pos&&(()=>{const key=POS_KEY_MAP[card.pos];const c=POS_COLORS[key];return c?<span style={{display:"inline-block",fontSize:10,fontWeight:700,padding:"2px 10px",borderRadius:8,background:`${c.light}18`,color:c.light,textTransform:"uppercase",letterSpacing:1}}>{POS_LABELS[card.pos]||card.pos}</span>:card.pos?<span className="fc-cat">{POS_LABELS[card.pos]||card.pos}</span>:null;})()}
              {card.gender&&(()=>{const c=GENDER_COLORS[card.gender];return c?<span style={{display:"inline-block",fontSize:10,fontWeight:700,padding:"2px 10px",borderRadius:8,background:`${c.light}18`,color:c.light,textTransform:"uppercase",letterSpacing:1}}>{GENDER_LABELS[card.gender]||card.gender}</span>:null;})()}
              {!card.pos&&card.category&&<div className="fc-cat">{card.category}</div>}
            </div>
            <div className="fc-word">{cap(card.word)}</div>
            <div className="fc-phonetic">{card.phonetic}</div>
            <div style={{display:"flex",justifyContent:"center",marginTop:12}}>
              <SpeakerButton text={card.word} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={20} showToast={showToast} />
            </div>
            <div className="fc-label">{t("fc_tap_reveal",baseLang)}</div>
          </div>
          <div className="fc-face fc-back">
            <div className="fc-cat" style={{color:"var(--teal-dark)"}}>{t("fc_translation",baseLang)}</div>
            <div className="fc-trans">{cap(card.translation)}</div>
            {card.note&&<div style={{fontSize:12,color:"var(--gray-500)",marginTop:6,lineHeight:1.5,maxWidth:280,margin:"6px auto 0"}}>{card.note}</div>}
            {card.funFact&&<div style={{fontSize:12,color:"var(--gray-400)",marginTop:6,fontStyle:"italic",lineHeight:1.5,maxWidth:280,margin:"6px auto 0"}}>{card.funFact}</div>}
            <div className="fc-label">{cap(card.word)} = {cap(card.translation)}</div>
          </div>
        </div>
      </div>

      {/* Navigation — simple, not quizzy */}
      <div style={{display:"flex",justifyContent:"center",gap:12,marginTop:24}}>
        <button className="btn btn-outline" style={{fontSize:14,padding:"10px 24px"}} onClick={()=>{setFlipped(false);setIdx(i=>i>0?i-1:deck.length-1);}}>{t("fc_previous",baseLang)}</button>
        <button className="btn btn-blue" style={{fontSize:14,padding:"10px 24px"}} onClick={()=>{setFlipped(false);setIdx(i=>(i+1)%deck.length);}}>{t("fc_next",baseLang)}</button>
      </div>

      {/* Reshuffle */}
      {mode==="shuffle"&&<div style={{textAlign:"center",marginTop:14}}>
        <button onClick={()=>{setDeck(shuffle([...learnedWords]));setIdx(0);setFlipped(false);}} style={{background:"none",border:"none",color:"var(--blue)",fontSize:13,fontWeight:700,cursor:"pointer"}}>🔀 {t("fc_reshuffle",baseLang)}</button>
      </div>}
    </div>
  );
}

export default Flashcards;
