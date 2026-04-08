import React, { useState, useEffect, useMemo, useCallback } from "react";
import { LANG_META } from '../data/metadata.js';
import { VOCAB, t, ARTICLE_COLORS, getArticle } from '../data/vocabulary.js';
import { POS_COLORS, GENDER_COLORS } from '../data/dictionary.js';
import { shuffle, cap, UNITS } from '../utils.js';
import { SpeakerButton } from '../audio.jsx';
import {
  Rating, loadSrsData, saveSrsData, initCard, reviewCard,
  previewIntervals, getDueCards, getStats, initSrsForLearnedWords, formatNextReview
} from '../srs.js';

const POS_LABELS = {verb:"Verb",noun:"Noun",adj:"Adjective",adv:"Adverb",prep:"Preposition",conj:"Conjunction",pron:"Pronoun",num:"Number",intj:"Interjection",part:"Particle",aux:"Auxiliary",art:"Article"};
const POS_KEY_MAP = {verb:"verb",noun:"noun",adj:"adjective",adv:"adverb",prep:"preposition",conj:"conjunction",pron:"pronoun",num:"number",intj:"interjection",part:"particle",aux:"auxiliary",art:"article"};
const GENDER_LABELS = {m:"masculine",f:"feminine",n:"neuter",c:"common",pl:"plural"};

const SESSION_CAP = 20;

function buildUnitsVocab(lang, baseLang) {
  const seen = new Set();
  const cards = [];
  const cardMap = new Map();
  // Filter: prefer units matching baseLang. Fall back to "en" units if no match.
  const allLangUnits = UNITS.filter(u => u.lang === lang);
  const matchingUnits = allLangUnits.filter(u => (u.srcLang || "en") === baseLang);
  const fallbackUnits = allLangUnits.filter(u => (u.srcLang || "en") === "en");
  const primary = matchingUnits.length > 0 ? matchingUnits : fallbackUnits;
  // Process primary units first, then fill gaps from other srcLang units
  for (const u of primary) {
    const level = (u.level || "A1").substring(0, 2);
    for (const lesson of (u.lessons || [])) {
      for (const st of (lesson.steps || [])) {
        if (st.type !== "teach") continue;
        const word = st.nl || st.trg || "";
        if (!word) continue;
        const key = word.toLowerCase();
        if (seen.has(key)) continue;
        seen.add(key);
        // Translation: src field contains the source-language text for the matched srcLang units
        const translation = st.src || st.en || "";
        const card = {
          word, translation, category: st.pos || "",
          level, phonetic: st.phonetic || "", pos: st.pos || null,
          gender: st.gender || null, funFact: st.funFact || null, note: st.note || null,
        };
        cards.push(card);
        cardMap.set(key, card);
      }
    }
  }
  return cards;
}

// ─── POS / Gender badge renderer ────────────────────────────────
function TagBadges({ pos, gender, category }) {
  return (
    <div style={{display:"flex",justifyContent:"center",gap:6,flexWrap:"wrap",marginBottom:4}}>
      {pos && (() => {
        const key = POS_KEY_MAP[pos]; const c = POS_COLORS[key];
        return c ? <span style={{display:"inline-block",fontSize:10,fontWeight:700,padding:"2px 10px",borderRadius:8,background:`${c.light}18`,color:c.light,textTransform:"uppercase",letterSpacing:1}}>{POS_LABELS[pos]||pos}</span>
          : <span className="fc-cat">{POS_LABELS[pos]||pos}</span>;
      })()}
      {gender && (() => {
        const c = GENDER_COLORS[gender];
        return c ? <span style={{display:"inline-block",fontSize:10,fontWeight:700,padding:"2px 10px",borderRadius:8,background:`${c.light}18`,color:c.light,textTransform:"uppercase",letterSpacing:1}}>{GENDER_LABELS[gender]||gender}</span> : null;
      })()}
      {!pos && category && <div className="fc-cat">{category}</div>}
    </div>
  );
}

// ─── Card Face Components ───────────────────────────────────────
// Latin-script languages: hide phonetics per PP38
const LATIN_LANGS = new Set(["de","nl","fr","es","it","pt","ro","tr"]);

function CardFront({ card, lang, baseLang, showToast }) {
  const showPhonetic = card.phonetic && !LATIN_LANGS.has(lang);
  return (
    <div className="fc-face fc-front">
      <TagBadges pos={card.pos} gender={card.gender} category={card.category} />
      <div className="fc-word" style={{position:"relative",zIndex:2}}>{cap(card.word)}</div>
      {showPhonetic && <div className="fc-phonetic">{card.phonetic}</div>}
      <div style={{display:"flex",justifyContent:"center",marginTop:8,position:"relative",zIndex:2}}>
        <SpeakerButton text={card.word} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={20} showToast={showToast} />
      </div>
      <div style={{marginTop:10,fontSize:12,color:"var(--gray-400)",fontWeight:600,letterSpacing:0.5,position:"relative",zIndex:2}}>
        Do you remember?
      </div>
    </div>
  );
}

function CardBack({ card, baseLang }) {
  return (
    <div className="fc-face fc-back">
      <div style={{position:"relative",zIndex:2,textAlign:"center"}}>
        <div style={{fontSize:28,fontWeight:800,color:"var(--gray-800)",fontFamily:"'Quicksand',sans-serif",marginBottom:4}}>{cap(card.word)}</div>
        <div style={{fontSize:22,fontWeight:800,color:"var(--purple-accent)",fontFamily:"'Quicksand',sans-serif"}}>{cap(card.translation)}</div>
        {card.note && <div style={{marginTop:10,fontSize:12,color:"var(--gray-500)",lineHeight:1.4,maxWidth:300,margin:"10px auto 0",overflow:"hidden",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical"}}>{card.note}</div>}
      </div>
    </div>
  );
}

// ─── Rating Buttons ─────────────────────────────────────────────
const RATING_CONFIG = [
  { rating: Rating.Again, label: "Again", cls: "srs-rate-again" },
  { rating: Rating.Hard,  label: "Hard",  cls: "srs-rate-hard" },
  { rating: Rating.Good,  label: "Good",  cls: "srs-rate-good" },
  { rating: Rating.Easy,  label: "Easy",  cls: "srs-rate-easy" },
];

function RatingButtons({ srsCard, onRate, disabled }) {
  const previews = useMemo(() => srsCard ? previewIntervals(srsCard) : null, [srsCard]);
  if (!previews) return null;
  return (
    <div className="srs-ratings">
      {RATING_CONFIG.map(({ rating, label, cls }) => (
        <button key={rating} className={`srs-rate-btn ${cls}`} disabled={disabled}
          onClick={() => onRate(rating)}>
          {label}
          <span className="interval">{formatNextReview(previews[rating], rating)}</span>
        </button>
      ))}
    </div>
  );
}

// ─── Session Complete Screen ────────────────────────────────────
function SessionComplete({ stats, onContinue, onBrowse, baseLang }) {
  return (
    <div className="srs-complete anim">
      <div className="emoji">🎉</div>
      <h2 className="hd">All caught up!</h2>
      <p style={{color:"var(--gray-400)",fontSize:14,marginBottom:20}}>
        You reviewed {stats.reviewed} card{stats.reviewed !== 1 ? "s" : ""} this session.
      </p>
      <div className="srs-session-stats">
        <div className="srs-session-stat">
          <div className="val" style={{color:"var(--teal)"}}>{stats.good + stats.easy}</div>
          <div className="lbl">Remembered</div>
        </div>
        <div className="srs-session-stat">
          <div className="val" style={{color:"var(--coral)"}}>{stats.again}</div>
          <div className="lbl">Forgot</div>
        </div>
        <div className="srs-session-stat">
          <div className="val" style={{color:"var(--gold)"}}>{stats.hard}</div>
          <div className="lbl">Struggled</div>
        </div>
      </div>
      {stats.remaining > 0 && (
        <button className="btn btn-blue" style={{marginTop:24,fontSize:14,padding:"10px 24px"}}
          onClick={onContinue}>Continue ({stats.remaining} more)</button>
      )}
      <button className="btn btn-outline" style={{marginTop:12,fontSize:14,padding:"10px 24px"}}
        onClick={onBrowse}>Browse All Words</button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════
function Flashcards({ lang, baseLang = "en", user, addXp, showToast }) {
  const allVocab = useMemo(() => {
    const unitsVocab = buildUnitsVocab(lang, baseLang);
    if (unitsVocab.length > 50) return unitsVocab;
    return VOCAB[lang] || [];
  }, [lang, baseLang]);

  const learnedWords = allVocab.filter(w => user.lw.has(w.word));
  const vocabMap = useMemo(() => {
    const m = new Map();
    for (const v of allVocab) m.set(v.word.toLowerCase(), v);
    return m;
  }, [allVocab]);

  // ── SRS State ──
  const [srsCards, setSrsCards] = useState({});
  const [tab, setTab] = useState("due"); // due | browse | all
  const [sessionStats, setSessionStats] = useState({ reviewed: 0, again: 0, hard: 0, good: 0, easy: 0, remaining: 0 });
  const [sessionDone, setSessionDone] = useState(false);

  // ── Browse State (existing) ──
  const [browseMode, setBrowseMode] = useState("shuffle");
  const [deck, setDeck] = useState([]);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);

  // ── Review State ──
  const [dueQueue, setDueQueue] = useState([]);
  const [dueIdx, setDueIdx] = useState(0);
  const [reviewFlipped, setReviewFlipped] = useState(false);
  const [rated, setRated] = useState(false);

  // ── Init SRS on mount / lang change ──
  useEffect(() => {
    const existing = loadSrsData(lang);
    const updated = initSrsForLearnedWords(lang, user.lw, existing);
    setSrsCards(updated);
    // Build due queue
    const due = getDueCards(updated);
    setDueQueue(due.slice(0, SESSION_CAP));
    setDueIdx(0);
    setReviewFlipped(false);
    setRated(false);
    setSessionDone(false);
    setSessionStats({ reviewed: 0, again: 0, hard: 0, good: 0, easy: 0, remaining: Math.max(0, due.length - SESSION_CAP) });
    // Auto-select tab
    setTab(due.length > 0 ? "due" : "browse");
  }, [lang, user.lw.size]);

  // ── Browse deck builder ──
  useEffect(() => {
    let sorted = [...learnedWords];
    if (browseMode === "shuffle") sorted = shuffle(sorted);
    else if (browseMode === "alpha") sorted.sort((a, b) => a.word.localeCompare(b.word));
    else if (browseMode === "level") sorted.sort((a, b) => (a.level||"A1").localeCompare(b.level||"A1"));
    setDeck(sorted); setIdx(0); setFlipped(false);
  }, [browseMode, user.lw.size]);

  // ── Stats ──
  const stats = useMemo(() => getStats(srsCards), [srsCards]);
  const dueCount = useMemo(() => getDueCards(srsCards).length, [srsCards]);

  // ── Rate handler ──
  const handleRate = useCallback((rating) => {
    if (rated) return;
    setRated(true);
    const item = dueQueue[dueIdx];
    if (!item) return;
    const result = reviewCard(item.card, rating);
    // Update SRS state
    const updated = { ...srsCards, [item.word]: result.card };
    setSrsCards(updated);
    saveSrsData(lang, updated);
    // XP
    const xpMap = { [Rating.Again]: 0, [Rating.Hard]: 2, [Rating.Good]: 5, [Rating.Easy]: 8 };
    if (addXp && xpMap[rating]) addXp(xpMap[rating]);
    // Session stats
    const key = rating === Rating.Again ? "again" : rating === Rating.Hard ? "hard" : rating === Rating.Good ? "good" : "easy";
    setSessionStats(prev => ({ ...prev, reviewed: prev.reviewed + 1, [key]: prev[key] + 1 }));
    // Advance after brief delay
    setTimeout(() => {
      if (dueIdx + 1 < dueQueue.length) {
        setDueIdx(dueIdx + 1);
        setReviewFlipped(false);
        setRated(false);
      } else {
        setSessionDone(true);
      }
    }, 350);
  }, [rated, dueQueue, dueIdx, srsCards, lang, addXp]);

  // ── Continue session (load more due) ──
  const handleContinue = useCallback(() => {
    const due = getDueCards(srsCards);
    setDueQueue(due.slice(0, SESSION_CAP));
    setDueIdx(0);
    setReviewFlipped(false);
    setRated(false);
    setSessionDone(false);
    setSessionStats(prev => ({ ...prev, remaining: Math.max(0, due.length - SESSION_CAP) }));
  }, [srsCards]);

  // ═══ EMPTY STATE — candy gloss panel ═══
  if (learnedWords.length === 0) return (
    <div className="anim" style={{maxWidth:440,margin:"0 auto",paddingTop:32}}>
      <div style={{textAlign:"center",marginBottom:24}}>
        <div style={{fontSize:20,marginBottom:4}}>🧠</div>
        <h2 className="hd" style={{fontSize:22,fontWeight:800}}>Spaced Review</h2>
      </div>
      {/* Hero card */}
      <div style={{position:"relative",overflow:"hidden",borderRadius:24,padding:"36px 28px",textAlign:"center",
        background:"linear-gradient(180deg, rgba(245,240,255,0.95) 0%, rgba(237,232,255,0.9) 50%, rgba(230,224,250,0.85) 100%)",
        border:"2px solid rgba(123,94,232,0.15)",
        boxShadow:"0 12px 40px rgba(123,94,232,0.12), 0 4px 12px rgba(0,0,0,0.04), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(0,0,0,0.03)"}}>
        {/* Candy gloss */}
        <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"44%",borderRadius:"0 0 50% 50%",
          background:"linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",
          pointerEvents:"none",zIndex:0}}/>
        <div style={{position:"relative",zIndex:1}}>
          <div style={{fontSize:48,marginBottom:16}}>📖</div>
          <h3 style={{fontSize:20,fontWeight:800,color:"var(--gray-800)",fontFamily:"'Quicksand',sans-serif",marginBottom:8}}>
            Your review deck is empty
          </h3>
          <p style={{fontSize:14,color:"var(--gray-500)",lineHeight:1.6,maxWidth:300,margin:"0 auto 20px"}}>
            Complete lessons to unlock words. Each word you learn enters your personal spaced review system.
          </p>
          <div style={{display:"inline-flex",alignItems:"center",gap:8,
            background:"rgba(123,94,232,0.08)",borderRadius:14,padding:"10px 20px",
            border:"1.5px solid rgba(123,94,232,0.12)"}}>
            <span style={{fontSize:18}}>✨</span>
            <span style={{fontSize:13,fontWeight:700,color:"var(--purple-accent)"}}>{allVocab.length} words waiting</span>
          </div>
        </div>
      </div>
    </div>
  );

  // ═══ TAB BAR ═══
  const tabBar = (
    <div className="srs-tabs">
      <button className={`srs-tab ${tab==="due"?"active":""}`} onClick={()=>{setTab("due");setSessionDone(false);}}>
        Review {dueCount > 0 && <span className="srs-badge">{dueCount}</span>}
      </button>
      <button className={`srs-tab ${tab==="browse"?"active":""}`} onClick={()=>setTab("browse")}>
        Browse
      </button>
      <button className={`srs-tab ${tab==="all"?"active":""}`} onClick={()=>setTab("all")}>
        All ({learnedWords.length})
      </button>
    </div>
  );

  // ═══ STATS BAR ═══
  const statsBar = (
    <div className="srs-stats">
      <div className="srs-stat"><span className="num coral">{dueCount}</span> due</div>
      <div className="srs-stat"><span className="num teal">{stats.mastered}</span> mastered</div>
      <div className="srs-stat"><span className="num">{stats.total}</span> total</div>
    </div>
  );

  // ═══ DUE NOW TAB ═══
  if (tab === "due") {
    // No due cards
    if (dueCount === 0 || dueQueue.length === 0 || sessionDone) {
      return (
        <div className="anim" style={{maxWidth:480,margin:"0 auto"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12,padding:"0 4px"}}>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <span style={{fontSize:24}}>🧠</span>
              <span className="hd" style={{fontSize:18,fontWeight:800}}>Review</span>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <span style={{fontSize:12,fontWeight:700,color:"var(--teal)"}}>{stats.mastered} mastered</span>
              <span style={{fontSize:12,fontWeight:700,color:"var(--purple-accent)"}}>{stats.total} total</span>
            </div>
          </div>
          {tabBar}
          {sessionDone ? (
            <SessionComplete stats={sessionStats} onContinue={handleContinue}
              onBrowse={() => setTab("browse")} baseLang={baseLang} />
          ) : (
            <div className="srs-complete anim">
              <div className="emoji">✅</div>
              <h2 className="hd">All caught up!</h2>
              <p style={{color:"var(--gray-400)",fontSize:14}}>No cards due right now. Come back later!</p>
              <button className="btn btn-outline" style={{marginTop:20,fontSize:14,padding:"10px 24px"}}
                onClick={() => setTab("browse")}>Browse Words</button>
            </div>
          )}
        </div>
      );
    }

    // Review mode
    const dueItem = dueQueue[dueIdx];
    const vocabCard = vocabMap.get(dueItem.word) || { word: dueItem.word, translation: "?", pos: null, gender: null, category: "", phonetic: "", note: null, funFact: null };

    return (
      <div className="anim" style={{maxWidth:440,margin:"0 auto"}}>
        {/* Header */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12,padding:"0 4px"}}>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <span style={{fontSize:22}}>🧠</span>
            <span className="hd" style={{fontSize:18,fontWeight:800}}>Review</span>
          </div>
          <span style={{fontSize:12,fontWeight:700,color:"var(--purple-accent)"}}>{dueIdx + 1} / {dueQueue.length}</span>
        </div>

        {tabBar}

        {/* Progress bar */}
        <div style={{margin:"8px 0 20px",height:5,borderRadius:3,background:"var(--gray-100)",overflow:"hidden"}}>
          <div style={{height:"100%",borderRadius:3,width:`${Math.round(((dueIdx)/(dueQueue.length||1))*100)}%`,background:"var(--purple-accent)",transition:"width 0.4s ease"}}/>
        </div>

        {/* ═══ SINGLE CARD — no flip, just reveal ═══ */}
        <div className="srs-card" onClick={() => !rated && !reviewFlipped && setReviewFlipped(true)} style={{
          position:"relative",overflow:"hidden",borderRadius:24,padding:"32px 24px",textAlign:"center",cursor:reviewFlipped?"default":"pointer",
          background:"linear-gradient(180deg, rgba(245,240,255,0.95) 0%, rgba(237,232,255,0.9) 50%, rgba(230,224,250,0.85) 100%)",
          border:"2px solid rgba(123,94,232,0.15)",
          boxShadow:"0 10px 36px rgba(123,94,232,0.12), 0 4px 12px rgba(0,0,0,0.04), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(0,0,0,0.03)"
        }}>
          {/* Candy gloss */}
          <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"44%",borderRadius:"0 0 50% 50%",
            background:"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",
            pointerEvents:"none",zIndex:0}}/>

          {/* POS + Gender badges */}
          <div style={{position:"relative",zIndex:1}}>
            <TagBadges pos={vocabCard.pos} gender={vocabCard.gender} category={vocabCard.category} />
          </div>

          {/* Word */}
          <div style={{position:"relative",zIndex:1,fontSize:32,fontWeight:800,color:"var(--gray-800)",fontFamily:"'Quicksand',sans-serif",marginBottom:reviewFlipped?4:12}}>
            {cap(vocabCard.word)}
          </div>

          {/* Reveal zone — hidden until tapped */}
          {!reviewFlipped && (
            <div style={{position:"relative",zIndex:1,color:"var(--gray-400)",fontSize:13,fontWeight:600}}>
              Tap to reveal
            </div>
          )}

          {reviewFlipped && (
            <div style={{position:"relative",zIndex:1}}>
              {/* Divider */}
              <div style={{width:60,height:2,background:"rgba(123,94,232,0.2)",borderRadius:1,margin:"0 auto 10px"}}/>
              {/* Translation */}
              <div style={{fontSize:24,fontWeight:800,color:"var(--purple-accent)",fontFamily:"'Quicksand',sans-serif",marginBottom:8}}>
                {cap(vocabCard.translation)}
              </div>
              {/* Note */}
              {vocabCard.note && (
                <div style={{fontSize:12,color:"var(--gray-500)",lineHeight:1.5,maxWidth:320,margin:"0 auto"}}>
                  {vocabCard.note}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Rating buttons — ALWAYS below the card, never overlapping */}
        {reviewFlipped ? (
          <div style={{marginTop:20}}>
            <RatingButtons srsCard={dueItem.card} onRate={handleRate} disabled={rated} />
          </div>
        ) : null}
      </div>
    );
  }

  // ═══ BROWSE TAB ═══
  if (tab === "browse") {
    const card = deck[idx];
    if (!card) return null;
    return (
      <div className="anim">
        <div style={{textAlign:"center",marginBottom:16}}>
          <div style={{fontSize:36,marginBottom:6}}>🗂️</div>
          <h2 className="hd" style={{fontSize:24,fontWeight:800,marginBottom:4}}>{t("fc_title",baseLang)}</h2>
          <p style={{color:"var(--gray-400)",fontSize:13}}>{learnedWords.length} {t("fc_words_learned",baseLang)} · {t("fc_tap_flip",baseLang)}</p>
        </div>
        {tabBar}
        <div style={{display:"flex",justifyContent:"center",gap:6,marginBottom:16}}>
          {[{id:"shuffle",icon:"🔀",label:t("fc_shuffle",baseLang)},{id:"level",icon:"📊",label:t("fc_by_level",baseLang)},{id:"alpha",icon:"🔤",label:t("fc_a_z",baseLang)}].map(m=>(
            <button key={m.id} onClick={()=>setBrowseMode(m.id)} style={{padding:"7px 16px",borderRadius:16,border:`2px solid ${browseMode===m.id?"var(--blue)":"var(--gray-200)"}`,background:browseMode===m.id?"var(--blue)":"white",color:browseMode===m.id?"white":"var(--gray-500)",fontWeight:700,fontSize:12,cursor:"pointer",transition:"all .15s"}}>{m.icon} {m.label}</button>
          ))}
        </div>
        <div style={{textAlign:"center",marginBottom:12,color:"var(--gray-400)",fontSize:13,fontWeight:600}}>
          {idx+1} / {deck.length}
          {card.level && <span style={{marginLeft:8,padding:"2px 10px",borderRadius:8,background:"var(--blue-light)",fontSize:10,fontWeight:700,color:"var(--blue)"}}>{card.level}</span>}
        </div>
        <div className="fc-wrap" onClick={()=>setFlipped(!flipped)}>
          <div className={`fc-inner ${flipped?"flipped":""}`}>
            <CardFront card={card} lang={lang} baseLang={baseLang} showToast={showToast} />
            <CardBack card={card} baseLang={baseLang} />
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"center",gap:12,marginTop:24}}>
          <button className="btn btn-outline" style={{fontSize:14,padding:"10px 24px"}} onClick={()=>{setFlipped(false);setIdx(i=>i>0?i-1:deck.length-1);}}>{t("fc_previous",baseLang)}</button>
          <button className="btn btn-blue" style={{fontSize:14,padding:"10px 24px"}} onClick={()=>{setFlipped(false);setIdx(i=>(i+1)%deck.length);}}>{t("fc_next",baseLang)}</button>
        </div>
        {browseMode === "shuffle" && <div style={{textAlign:"center",marginTop:14}}>
          <button onClick={()=>{setDeck(shuffle([...learnedWords]));setIdx(0);setFlipped(false);}} style={{background:"none",border:"none",color:"var(--blue)",fontSize:13,fontWeight:700,cursor:"pointer"}}>🔀 {t("fc_reshuffle",baseLang)}</button>
        </div>}
      </div>
    );
  }

  // ═══ ALL TAB ═══
  const allSorted = useMemo(() => [...learnedWords].sort((a,b) => a.word.localeCompare(b.word)), [learnedWords]);
  const allCard = allSorted[idx] || allSorted[0];
  if (!allCard) return null;
  return (
    <div className="anim">
      <div style={{textAlign:"center",marginBottom:16}}>
        <div style={{fontSize:36,marginBottom:6}}>📖</div>
        <h2 className="hd" style={{fontSize:24,fontWeight:800,marginBottom:4}}>All Words</h2>
        <p style={{color:"var(--gray-400)",fontSize:13}}>{allSorted.length} words learned</p>
      </div>
      {tabBar}
      <div style={{textAlign:"center",marginBottom:12,color:"var(--gray-400)",fontSize:13,fontWeight:600}}>
        {idx+1} / {allSorted.length}
      </div>
      <div className="fc-wrap" onClick={()=>setFlipped(!flipped)}>
        <div className={`fc-inner ${flipped?"flipped":""}`}>
          <CardFront card={allCard} lang={lang} baseLang={baseLang} showToast={showToast} />
          <CardBack card={allCard} baseLang={baseLang} />
        </div>
      </div>
      <div style={{display:"flex",justifyContent:"center",gap:12,marginTop:24}}>
        <button className="btn btn-outline" style={{fontSize:14,padding:"10px 24px"}} onClick={()=>{setFlipped(false);setIdx(i=>i>0?i-1:allSorted.length-1);}}>Previous</button>
        <button className="btn btn-blue" style={{fontSize:14,padding:"10px 24px"}} onClick={()=>{setFlipped(false);setIdx(i=>(i+1)%allSorted.length);}}>Next</button>
      </div>
    </div>
  );
}

export default Flashcards;
