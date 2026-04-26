import React, { useState, useEffect, useMemo, useCallback } from "react";
import { LANG_META } from '../data/metadata.js';
import { VOCAB, t, ARTICLE_COLORS, getArticle } from '../data/vocabulary.js';
import { POS_COLORS, GENDER_COLORS } from '../data/dictionary.js';
import { shuffle, cap, UNITS } from '../utils.js';
import { SpeakerButton } from '../audio.jsx';
import { AppIcon } from '../components/shared.jsx';
import { clickableProps } from '../a11y.js';
import {
  Rating, loadSrsData, saveSrsData, initCard, reviewCard,
  previewIntervals, getDueCards, getStats, initSrsForLearnedWords, formatNextReview
} from '../srs.js';

const POS_LABELS = {verb:"Verb",noun:"Noun",adj:"Adjective",adv:"Adverb",prep:"Preposition",conj:"Conjunction",pron:"Pronoun",num:"Number",intj:"Interjection",part:"Particle",aux:"Auxiliary",art:"Article"};
const POS_KEY_MAP = {verb:"verb",noun:"noun",adj:"adjective",adv:"adverb",prep:"preposition",conj:"conjunction",pron:"pronoun",num:"number",intj:"interjection",part:"particle",aux:"auxiliary",art:"article"};
const GENDER_LABELS = {m:"masculine",f:"feminine",n:"neuter",c:"common",pl:"plural"};
const LATIN_LANGS = new Set(["de","nl","fr","es","it","pt","ro","tr"]);

const SESSION_CAP = 20;

function buildUnitsVocab(lang, baseLang) {
  const seen = new Set();
  const cards = [];
  const allLangUnits = UNITS.filter(u => u.lang === lang);
  const matchingUnits = allLangUnits.filter(u => (u.srcLang || "en") === baseLang);
  const fallbackUnits = allLangUnits.filter(u => (u.srcLang || "en") === "en");
  const primary = matchingUnits.length > 0 ? matchingUnits : fallbackUnits;
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
        const translation = st.src || st.en || "";
        cards.push({
          word, translation, category: st.pos || "",
          level, phonetic: st.phonetic || "", pos: st.pos || null,
          gender: st.gender || null, funFact: st.funFact || st.funInfo || null,
          note: st.note || null,
          example: st.example || null,
          exampleSrc: st.exampleSrc || st.exampleEn || null,
        });
      }
    }
  }
  return cards;
}

// ─── POS / Gender badge ────────────────────────────────────────
function TagBadge({ type, value, label }) {
  const colors = type === "pos" ? POS_COLORS[POS_KEY_MAP[value]] : GENDER_COLORS[value];
  if (!colors) return null;
  return (
    <span style={{
      display:"inline-block",fontSize:10,fontWeight:700,padding:"2px 10px",borderRadius:8,
      background:`${colors.light}18`,color:colors.light,
      textTransform:"uppercase",letterSpacing:1,fontFamily:"'Nunito','system-ui',sans-serif"
    }}>{label}</span>
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

// ─── Teach-Card Style Flashcard ─────────────────────────────────
// Matches the new-format teach card renderer from LessonEngine.jsx exactly
function TeachStyleCard({ card, lang, baseLang, revealed, onReveal, showToast }) {
  const dk = document.documentElement.classList.contains("dark");
  const art = getArticle(card.word, lang);
  const artColors = ARTICLE_COLORS[art];
  const showPhonetic = card.phonetic && !LATIN_LANGS.has(lang);
  const ttsLoc = LANG_META[lang]?.ttsLocale || "en-US";

  // Article + word split (e.g. "der Hund" → ["der", "Hund"])
  const artWord = art !== "none" ? card.word.split(/\s(.+)/) : null;

  // Compound bubble style (matches LessonEngine)
  const compBubble = {
    background: dk
      ? "linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
      : "linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
    border: dk ? "1.5px solid rgba(123,94,232,0.3)" : "1.5px solid rgba(180,165,240,0.4)",
    boxShadow: dk
      ? "0 6px 20px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)"
      : "0 6px 24px rgba(123,94,232,0.1), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)",
    borderRadius: 22, position: "relative", overflow: "hidden",
  };
  const glossArc = {
    position: "absolute", top: 0, left: "5%", right: "5%", height: "42%",
    borderRadius: "0 0 50% 50%", pointerEvents: "none", zIndex: 0,
    background: dk
      ? "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)"
      : "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",
  };

  // Parse example dialogues
  const renderExample = () => {
    if (!card.example) return null;
    const ex = card.example;
    const exTrans = card.exampleSrc || "";
    const isDialogue = /[ABأب]:\s/.test(ex);

    if (isDialogue) {
      const turns = ex.split(/(?=[ABأب]:\s)/).filter(Boolean);
      const turnsEn = exTrans.split(/(?=[ABأب]:\s)/).filter(Boolean);
      return (
        <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:16}}>
          {turns.map((turn, ti) => {
            const isA = turn.trim().startsWith("A:") || turn.trim().startsWith("\u0623:");
            const content = turn.replace(/^[ABأب]:\s*/,"").trim();
            const enC = (turnsEn[ti]||"").replace(/^[ABأب]:\s*/,"").trim();
            return (
              <div key={ti} style={{display:"flex",justifyContent:isA?"flex-start":"flex-end",paddingLeft:isA?0:30,paddingRight:isA?30:0}}>
                <div style={{...compBubble,maxWidth:"82%",borderRadius:isA?"20px 20px 20px 6px":"20px 20px 6px 20px",padding:"14px 18px"}}>
                  <div style={glossArc}/>
                  <div style={{position:"relative",zIndex:2}}>
                    <div className="trg-text" style={{fontSize:15,fontWeight:700,color:dk?"rgba(230,225,245,0.9)":"var(--gray-800)",lineHeight:1.4,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
                      <span>{content}</span>
                      <SpeakerButton text={content} lang={ttsLoc} size={13} showToast={showToast}/>
                    </div>
                    {enC && <div style={{fontSize:12,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:500,marginTop:4}}>{enC}</div>}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    // Single example
    return (
      <div style={{...compBubble, padding:"14px 18px", marginBottom:16}}>
        <div style={glossArc}/>
        <div style={{position:"relative",zIndex:2}}>
          <div className="trg-text" style={{fontSize:15,fontWeight:700,color:dk?"rgba(230,225,245,0.9)":"var(--gray-800)",lineHeight:1.5,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
            <span>{ex}</span>
            <SpeakerButton text={ex} lang={ttsLoc} size={13} showToast={showToast}/>
          </div>
          {exTrans && <div style={{fontSize:13,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:500,marginTop:4}}>{exTrans}</div>}
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* ═══ MAIN CARD — matches teach card from LessonEngine ═══ */}
      <div
        style={{
          background:"var(--card-bg)",borderRadius:22,
          border:"2px solid rgba(255,255,255,0.55)",
          borderLeft:"4px solid #7B5EE8",
          boxShadow:"0 4px 20px rgba(0,0,0,0.05)",
          overflow:"hidden",marginBottom:16,
          cursor: revealed ? "default" : "pointer",
          transition:"all 0.25s ease",
          position:"relative",
        }}
      >
        {/* Tap overlay — catches all taps when unrevealed, above SpeakerButton */}
        {!revealed && (
          <div {...clickableProps(onReveal,{label:"Reveal answer"})} style={{position:"absolute",top:0,left:0,right:0,bottom:0,zIndex:10,cursor:"pointer"}}/>
        )}
        {/* Top strip */}
        <div style={{
          background:"linear-gradient(135deg, rgba(123,94,232,0.06), rgba(46,205,167,0.04))",
          padding:"12px 20px 10px",display:"flex",justifyContent:"space-between",alignItems:"center"
        }}>
          <span style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"#7B5EE8"}}>
            {t("le_review",baseLang)}
          </span>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <SpeakerButton text={card.word} lang={ttsLoc} size={15} showToast={showToast}/>
            {/* POS + Gender badges */}
            {card.pos && <TagBadge type="pos" value={card.pos} label={POS_LABELS[card.pos]||card.pos}/>}
            {card.gender && <TagBadge type="gender" value={card.gender} label={GENDER_LABELS[card.gender]||card.gender}/>}
          </div>
        </div>

        {/* Word display — article color-coded per vision 2.2b */}
        <div className="trg-text-center" style={{textAlign:"center",padding:"20px 28px 8px"}}>
          <div style={{marginBottom:6}}>
            {artWord && artWord[1] ? (
              <span className="hd" style={{fontSize:36,fontWeight:800,lineHeight:1.1,fontFamily:"'Quicksand','system-ui',sans-serif"}}>
                <span style={{color:artColors.pillText}}>{cap(artWord[0])}</span>{" "}
                <span style={{color:artColors.pillText}}>{artWord[1]}</span>
              </span>
            ) : (
              <span className="hd" style={{fontSize:36,fontWeight:800,color:"var(--gray-800)",lineHeight:1.1,fontFamily:"'Quicksand','system-ui',sans-serif"}}>{cap(card.word)}</span>
            )}
          </div>
          {showPhonetic && <div style={{fontSize:13,fontWeight:600,color:"rgba(123,94,232,0.55)",fontStyle:"italic",marginTop:2}}>{card.phonetic}</div>}
        </div>

        {/* Pre-reveal prompt */}
        {!revealed && (
          <div style={{textAlign:"center",padding:"8px 28px 20px"}}>
            <span style={{fontSize:13,fontWeight:600,color:"var(--gray-400)",letterSpacing:0.3}}>
              Tap to reveal
            </span>
          </div>
        )}

        {/* Revealed content — translation */}
        {revealed && (
          <div className="anim" style={{textAlign:"center",padding:"0 28px 16px"}}>
            <div style={{width:60,height:2,background:"rgba(123,94,232,0.2)",borderRadius:1,margin:"0 auto 10px"}}/>
            <span style={{fontSize:20,color:"var(--purple-accent)",fontWeight:800,fontFamily:"'Quicksand','system-ui',sans-serif"}}>{cap(card.translation)}</span>
          </div>
        )}
      </div>

      {/* Revealed extras — example, funFact, note (outside card, matching teach card layout) */}
      {revealed && (
        <div className="anim">
          {/* Example dialogue bubbles */}
          {renderExample()}

          {/* Fun Fact — compound bubble */}
          {card.funFact && (
            <div style={{...compBubble, padding:"18px 20px 16px", marginBottom:16}}>
              <div style={glossArc}/>
              <div style={{position:"relative",zIndex:2}}>
                <div style={{fontSize:10,fontWeight:800,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:2.5,marginBottom:10,display:"flex",alignItems:"center",gap:6,fontFamily:"'Nunito','system-ui',sans-serif"}}>
                  <AppIcon name="lightbulb" size={16}/> Fun Fact
                </div>
                <div style={{fontSize:14,lineHeight:1.7,fontWeight:500,color:dk?"rgba(220,210,255,0.85)":"#3A1F8A"}}>{card.funFact}</div>
              </div>
            </div>
          )}

          {/* Note — purple-bar card */}
          {card.note && (
            <div className="meta-text" style={{
              background:"var(--card-bg)",border:"2px solid rgba(255,255,255,0.55)",
              borderLeft:"3px solid var(--purple-accent)",borderRadius:16,
              padding:"14px 18px",marginBottom:16
            }}>
              {(card.note||"").split(/\\n|\n/).map((line, li) => {
                if (!line.trim()) return <div key={li} style={{height:6}}/>;
                if (line.startsWith("\u2022") || line.startsWith("•")) {
                  return <div key={li} style={{fontSize:14,color:"var(--gray-600)",padding:"3px 0 3px 4px",display:"flex",gap:8,lineHeight:1.7,fontFamily:"'Nunito','system-ui',sans-serif",fontWeight:500}}>
                    <span style={{color:"var(--purple-accent-text)",fontWeight:700,flexShrink:0}}>&#8226;</span>
                    <span>{line.slice(1).trim()}</span>
                  </div>;
                }
                return <div key={li} style={{fontSize:14,color:"var(--gray-600)",lineHeight:1.75,fontWeight:500,fontFamily:"'Nunito','system-ui',sans-serif"}}>{line}</div>;
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Session Complete Screen ────────────────────────────────────
function SessionComplete({ stats, onContinue, onBrowse }) {
  return (
    <div className="srs-complete anim">
      <div className="emoji">&#127881;</div>
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
function Flashcards({ lang, baseLang = "en", user, addXp, showToast, initialTab = "due" }) {
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
  const [tab, setTab] = useState(initialTab);
  const [sessionStats, setSessionStats] = useState({ reviewed: 0, again: 0, hard: 0, good: 0, easy: 0, remaining: 0 });
  const [sessionDone, setSessionDone] = useState(false);

  // ── Browse State ──
  const [browseMode, setBrowseMode] = useState("shuffle");
  const [deck, setDeck] = useState([]);
  const [browseIdx, setBrowseIdx] = useState(0);
  const [browseRevealed, setBrowseRevealed] = useState(false);

  // ── Review State ──
  const [dueQueue, setDueQueue] = useState([]);
  const [dueIdx, setDueIdx] = useState(0);
  const [reviewRevealed, setReviewRevealed] = useState(false);
  const [rated, setRated] = useState(false);

  // ── Init SRS on mount / lang change ──
  useEffect(() => {
    const existing = loadSrsData(lang);
    const updated = initSrsForLearnedWords(lang, user.lw, existing);
    setSrsCards(updated);
    const due = getDueCards(updated);
    setDueQueue(due.slice(0, SESSION_CAP));
    setDueIdx(0);
    setReviewRevealed(false);
    setRated(false);
    setSessionDone(false);
    setSessionStats({ reviewed: 0, again: 0, hard: 0, good: 0, easy: 0, remaining: Math.max(0, due.length - SESSION_CAP) });
    // Respect initialTab when there are cards to review; fall back to "browse" if no due cards.
    setTab(due.length > 0 ? initialTab : "browse");
  }, [lang, user.lw.size]);

  // ── Browse deck builder ──
  useEffect(() => {
    let sorted = [...learnedWords];
    if (browseMode === "shuffle") sorted = shuffle(sorted);
    else if (browseMode === "alpha") sorted.sort((a, b) => a.word.localeCompare(b.word));
    else if (browseMode === "level") sorted.sort((a, b) => (a.level||"A1").localeCompare(b.level||"A1"));
    setDeck(sorted);
    setBrowseIdx(0);
    setBrowseRevealed(false);
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
    const updated = { ...srsCards, [item.word]: result.card };
    setSrsCards(updated);
    saveSrsData(lang, updated);
    const xpMap = { [Rating.Again]: 0, [Rating.Hard]: 2, [Rating.Good]: 5, [Rating.Easy]: 8 };
    if (addXp && xpMap[rating]) addXp(xpMap[rating]);
    const key = rating === Rating.Again ? "again" : rating === Rating.Hard ? "hard" : rating === Rating.Good ? "good" : "easy";
    setSessionStats(prev => ({ ...prev, reviewed: prev.reviewed + 1, [key]: prev[key] + 1 }));
    setTimeout(() => {
      if (dueIdx + 1 < dueQueue.length) {
        setDueIdx(dueIdx + 1);
        setReviewRevealed(false);
        setRated(false);
      } else {
        setSessionDone(true);
      }
    }, 350);
  }, [rated, dueQueue, dueIdx, srsCards, lang, addXp]);

  // ── Continue session ──
  const handleContinue = useCallback(() => {
    const due = getDueCards(srsCards);
    setDueQueue(due.slice(0, SESSION_CAP));
    setDueIdx(0);
    setReviewRevealed(false);
    setRated(false);
    setSessionDone(false);
    setSessionStats(prev => ({ ...prev, remaining: Math.max(0, due.length - SESSION_CAP) }));
  }, [srsCards]);

  // ═══ EMPTY STATE ═══
  if (learnedWords.length === 0) return (
    <div className="anim" style={{maxWidth:440,margin:"0 auto",paddingTop:32}}>
      <div style={{textAlign:"center",marginBottom:24}}>
        <h2 className="hd" style={{fontSize:22,fontWeight:800}}>Spaced Review</h2>
      </div>
      <div style={{
        position:"relative",overflow:"hidden",borderRadius:22,padding:"36px 28px",textAlign:"center",
        background:"var(--card-bg)",border:"2px solid rgba(255,255,255,0.55)",
        borderLeft:"4px solid #7B5EE8",
        boxShadow:"0 4px 20px rgba(0,0,0,0.05)"
      }}>
        <div style={{fontSize:48,marginBottom:16}}>&#128214;</div>
        <h3 style={{fontSize:20,fontWeight:800,color:"var(--gray-800)",fontFamily:"'Quicksand',sans-serif",marginBottom:8}}>
          Your review deck is empty
        </h3>
        <p style={{fontSize:14,color:"var(--gray-500)",lineHeight:1.6,maxWidth:300,margin:"0 auto 20px"}}>
          Complete lessons to unlock words. Each word you learn enters your personal spaced review system.
        </p>
        <div style={{
          display:"inline-flex",alignItems:"center",gap:8,
          background:"rgba(123,94,232,0.08)",borderRadius:14,padding:"10px 20px",
          border:"1.5px solid rgba(123,94,232,0.12)"
        }}>
          <span style={{fontSize:13,fontWeight:700,color:"var(--purple-accent)"}}>{allVocab.length} words waiting</span>
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
        Browse ({learnedWords.length})
      </button>
    </div>
  );

  // ═══ DUE / REVIEW TAB ═══
  if (tab === "due") {
    if (dueCount === 0 || dueQueue.length === 0 || sessionDone) {
      return (
        <div className="anim" style={{maxWidth:480,margin:"0 auto"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12,padding:"0 4px"}}>
            <span className="hd" style={{fontSize:18,fontWeight:800}}>Review</span>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <span style={{fontSize:12,fontWeight:700,color:"var(--teal)"}}>{stats.mastered} mastered</span>
              <span style={{fontSize:12,fontWeight:700,color:"var(--purple-accent)"}}>{stats.total} total</span>
            </div>
          </div>
          {tabBar}
          {sessionDone ? (
            <SessionComplete stats={sessionStats} onContinue={handleContinue} onBrowse={() => setTab("browse")} />
          ) : (
            <div className="srs-complete anim">
              <div className="emoji">&#9989;</div>
              <h2 className="hd">All caught up!</h2>
              <p style={{color:"var(--gray-400)",fontSize:14}}>No cards due right now. Come back later!</p>
              <button className="btn btn-outline" style={{marginTop:20,fontSize:14,padding:"10px 24px"}}
                onClick={() => setTab("browse")}>Browse Words</button>
            </div>
          )}
        </div>
      );
    }

    const dueItem = dueQueue[dueIdx];
    const vocabCard = vocabMap.get(dueItem.word) || {
      word: dueItem.word, translation: "?", pos: null, gender: null,
      category: "", phonetic: "", note: null, funFact: null, example: null, exampleSrc: null
    };

    return (
      <div className="anim" style={{maxWidth:460,margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12,padding:"0 4px"}}>
          <span className="hd" style={{fontSize:18,fontWeight:800}}>Review</span>
          <span style={{fontSize:12,fontWeight:700,color:"var(--purple-accent)"}}>{dueIdx + 1} / {dueQueue.length}</span>
        </div>

        {tabBar}

        {/* Progress bar */}
        <div style={{margin:"8px 0 20px",height:5,borderRadius:3,background:"var(--gray-100)",overflow:"hidden"}}>
          <div style={{height:"100%",borderRadius:3,width:`${Math.round(((dueIdx)/(dueQueue.length||1))*100)}%`,background:"var(--purple-accent)",transition:"width 0.4s ease"}}/>
        </div>

        <TeachStyleCard
          card={vocabCard} lang={lang} baseLang={baseLang}
          revealed={reviewRevealed}
          onReveal={() => !rated && setReviewRevealed(true)}
          showToast={showToast}
        />

        {reviewRevealed && (
          <div style={{marginTop:4}}>
            <RatingButtons srsCard={dueItem.card} onRate={handleRate} disabled={rated} />
          </div>
        )}
      </div>
    );
  }

  // ═══ BROWSE TAB ═══
  const card = deck[browseIdx];
  if (!card) return (
    <div className="anim" style={{maxWidth:460,margin:"0 auto"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12,padding:"0 4px"}}>
        <span className="hd" style={{fontSize:18,fontWeight:800}}>Browse</span>
      </div>
      {tabBar}
      <div style={{textAlign:"center",padding:"40px 20px",color:"var(--gray-400)"}}>No words to browse yet.</div>
    </div>
  );

  return (
    <div className="anim" style={{maxWidth:460,margin:"0 auto"}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12,padding:"0 4px"}}>
        <span className="hd" style={{fontSize:18,fontWeight:800}}>Browse</span>
        <span style={{fontSize:12,fontWeight:700,color:"var(--gray-400)"}}>{browseIdx + 1} / {deck.length}</span>
      </div>

      {tabBar}

      {/* Sort mode pills */}
      <div style={{display:"flex",justifyContent:"center",gap:6,marginBottom:16}}>
        {[
          {id:"shuffle",label:t("fc_shuffle",baseLang)},
          {id:"level",label:t("fc_by_level",baseLang)},
          {id:"alpha",label:t("fc_a_z",baseLang)}
        ].map(m => (
          <button key={m.id} onClick={() => setBrowseMode(m.id)} style={{
            padding:"7px 16px",borderRadius:16,fontWeight:700,fontSize:12,cursor:"pointer",
            transition:"all .15s",border:"none",
            background: browseMode === m.id ? "var(--purple-accent)" : "var(--card-bg)",
            color: browseMode === m.id ? "white" : "var(--gray-500)",
            boxShadow: browseMode === m.id ? "0 2px 8px rgba(123,94,232,0.3)" : "var(--card-shadow)",
          }}>{m.label}</button>
        ))}
      </div>

      {/* Level badge */}
      {card.level && (
        <div style={{textAlign:"center",marginBottom:12}}>
          <span style={{padding:"2px 10px",borderRadius:8,background:"rgba(123,94,232,0.08)",fontSize:10,fontWeight:700,color:"var(--purple-accent)"}}>{card.level}</span>
        </div>
      )}

      <TeachStyleCard
        card={card} lang={lang} baseLang={baseLang}
        revealed={browseRevealed}
        onReveal={() => setBrowseRevealed(true)}
        showToast={showToast}
      />

      {/* Nav buttons */}
      <div style={{display:"flex",justifyContent:"center",gap:12,marginTop:8}}>
        <button className="btn btn-outline" style={{fontSize:14,padding:"10px 24px"}} onClick={() => {
          setBrowseRevealed(false);
          setBrowseIdx(i => i > 0 ? i - 1 : deck.length - 1);
        }}>Previous</button>
        <button className="btn btn-blue" style={{fontSize:14,padding:"10px 24px"}} onClick={() => {
          setBrowseRevealed(false);
          setBrowseIdx(i => (i + 1) % deck.length);
        }}>Next</button>
      </div>

      {browseMode === "shuffle" && (
        <div style={{textAlign:"center",marginTop:14}}>
          <button onClick={() => { setDeck(shuffle([...learnedWords])); setBrowseIdx(0); setBrowseRevealed(false); }}
            style={{background:"none",border:"none",color:"var(--purple-accent)",fontSize:13,fontWeight:700,cursor:"pointer"}}>
            {t("fc_reshuffle",baseLang)}
          </button>
        </div>
      )}
    </div>
  );
}

export default Flashcards;
