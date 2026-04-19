import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import { LANGUAGES, BASE_LANGUAGES, LANG_META, LANG_BLUEPRINT, LANG_TOKENIZER } from '../data/metadata.js';
import { TEXT_KEYS, tk, t, VOCAB, LEXEMES, LEXEME_BY_WORD, getLexeme, GRAMMAR, ARTICLE_COLORS, getArticle, LEVEL_XP, ACHS, MEANINGS } from '../data/vocabulary.js';
import { WORD_DB, LANG_DICT, POS_COLORS, GENDER_COLORS, GRAMMAR_PACKS, mergeKoreanDict, lookupWord, isNewWord, getPosColor, getGenderColor, resolvePackColor, pillGradient, KOREAN_FORM_INDEX, GERMAN_FORM_INDEX, conjugateVerb, detectIrregType, getIrregInfo } from '../data/dictionary.js';
import { shuffle, pick, clamp, getLevel, cap, xpNext, xpCurr, UNITS, _romanize, _normS, validateLessonForLeaks } from '../utils.js';
import { getPreferredVoice, playAudio, SpeakerButton, AUDIO_ENABLED, UISounds } from '../audio.jsx';
import { useFocusNav, KB_FOCUS_SEL, useSwipe } from '../hooks.js';
import { Confetti, ContinueButton, NavArrow, ScoreCircle, FlagButton, AppIcon, BrandIcon, _memStore, renderNavTitle } from './shared.jsx';
import { recordQuizOutcome } from '../srs.js';

function LessonEngine({lesson,baseLang="en",unit,user,addXp,learnWord,showToast,onBack,onComplete,addFlag,lang="nl",hideQuizRom=false,onContinue=null}){
  const dk=document.documentElement.classList.contains("dark");
  // RTL flag for source language (Arabic etc.) — applies to translations, hints, notes
  const srcRtl=baseLang==="ar";
  const srcDir=srcRtl?{direction:"rtl",textAlign:"right"}:{};
  // Helper: pick translation based on baseLang (Arabic users get Arabic translations from WORD_DB)
  const getTrans=(entry)=>baseLang==="ar"&&entry.ar?entry.ar:entry.en;
  const getNote=(entry)=>baseLang==="ar"&&entry.noteAr?entry.noteAr:entry.note;
  const getExampleSrc=(entry)=>baseLang==="ar"&&entry.exampleAr?entry.exampleAr:entry.exampleEn;
  const getFunFact=(entry)=>baseLang==="ar"&&entry.funFactAr?entry.funFactAr:entry.funFact;
  // Snapshot of learned words at lesson start — words learned DURING this lesson
  // should show "NEW WORD" not "REVIEW", even if learnWord() has fired on a previous card.
  const lwAtStart = React.useRef(null);
  if (lwAtStart.current === null) lwAtStart.current = new Set(user.lw);
  const isNewInLesson = (word) => !lwAtStart.current.has(word);
  // Glass panel style for dark mode cards
  const glass={background:"var(--card-bg)",backdropFilter:"var(--glass-blur)",WebkitBackdropFilter:"var(--glass-blur)",boxShadow:"var(--card-shadow)",border:"2px solid var(--card-border)"};
  // NavArrow is now a global component (defined before ScoreCircle)
  // Story mode toggle: OFF by default. When OFF, story cards are skipped entirely.
  const [storyMode,setStoryMode]=React.useState(()=>{
    try { const v=localStorage.getItem("vl_story_mode"); if(v!==null) return v==="true"; } catch(e){}
    return false;
  });
  React.useEffect(()=>{try{localStorage.setItem("vl_story_mode",storyMode?"true":"false");}catch(e){}},[storyMode]);
  const _allSteps=lesson.steps||[];
  const hasStoryCards=_allSteps.some(s=>s.type==="story");
  const steps=React.useMemo(()=>{
    const STORY_NAMES=/\b(?:Verumius|Sophie|Lisa|Markus|Klara|Max|Tobias|Frau\s+Weber|Herr\s+Schmidt)\b/i;
    const isStoryQuiz=(s)=>!storyMode&&(s.type==="mc"||s.type==="fb")&&((s.q&&STORY_NAMES.test(s.q))||(s.s&&STORY_NAMES.test(s.s)));
    const filtered=storyMode?_allSteps:_allSteps.filter(s=>s.type!=="story"&&!isStoryQuiz(s));
    // Inject breather checkpoints after every 5 consecutive teach cards
    const MAX_TEACH=5;
    const result=[];
    let run=0,recent=[];
    for(const step of filtered){
      if(step.type==="teach"){
        run++;
        recent.push({trg:step.trg||step.nl||"",src:step.src||step.en||""});
        result.push(step);
        if(run>=MAX_TEACH){
          result.push({type:"_breather",_generated:true,wordsReviewed:recent.slice(-MAX_TEACH),totalLearned:recent.length});
          run=0;
        }
      }else{
        run=0;
        result.push(step);
      }
    }
    return result;
  },[_allSteps,storyMode]);
  const [si,setSi]=useState(0);
  const [score,setScore]=useState(0);
  const lessonId=lesson?.id;
  const [answered,setAnswered]=useState(false);
  const [showHint,setShowHint]=useState(false);
  const [showTrans,setShowTrans]=useState(false);
  const [selOpt,setSelOpt]=useState(null);
  const [inputVal,setInputVal]=useState("");
  const [matchSel,setMatchSel]=useState({nl:null,en:null});
  const [matchDone,setMatchDone]=useState([]);
  const [done,setDone]=useState(false);
  const [showDeepDive,setShowDeepDive]=useState(false);
  const [showPhonetic,setShowPhonetic]=useState(false);
  const [showCognate,setShowCognate]=useState(false);
  const [showHanja,setShowHanja]=useState(false);
  const [conjAnswers,setConjAnswers]=useState({});
  const [conjChecked,setConjChecked]=useState(false);
  const [doneFocus,setDoneFocus]=useState(0);
  const [showResume,setShowResume]=useState(false);
  const [wordBubble,setWordBubble]=React.useState(null);
  const [miniWordPopup,setMiniWordPopup]=React.useState(null);
  // Grammar colorizer toggle: OFF by default (black text). User taps "Aa" to enable POS colors.
  const lessonLevel=(lesson?.steps?.[0]?.level)||"A1";
  const [grammarHl,setGrammarHl]=React.useState(()=>{
    try { const v=localStorage.getItem("vl_grammar_hl"); if(v!==null) return v==="true"; } catch(e){}
    return false;
  });
  React.useEffect(()=>{try{localStorage.setItem("vl_grammar_hl",grammarHl?"true":"false");}catch(e){}},[grammarHl]);

  // Grammar color pack system (per-language tabs)
  const [showGrammarSettings,setShowGrammarSettings]=React.useState(false);
  const effectiveLang = lang;
  const langPacks = GRAMMAR_PACKS[effectiveLang] || null;
  // Per-language pack selection: { de: "gender", ko: "particles", ... }
  const [allPackSelections,setAllPackSelections]=React.useState(()=>{
    try{const v=localStorage.getItem("vl_grammar_pack_v3");if(v)return JSON.parse(v);}catch(e){}
    return {};
  });
  const activePackId = allPackSelections[effectiveLang] || (langPacks?.defaultPack) || null;
  const activePack = React.useMemo(()=>{
    if(!langPacks) return null;
    return langPacks.packs.find(pk=>pk.id===activePackId) || langPacks.packs[0] || null;
  },[langPacks,activePackId]);
  React.useEffect(()=>{try{localStorage.setItem("vl_grammar_pack_v3",JSON.stringify(allPackSelections));}catch(e){}},[allPackSelections]);
  const selectPack=(packId)=>setAllPackSelections(prev=>({...prev,[effectiveLang]:packId}));
  // Per-language disabled categories within a pack: { de: ["noun","adverb"], ... }
  const [disabledCats,setDisabledCats]=React.useState(()=>{
    try{const v=localStorage.getItem("vl_grammar_disabled_v1");if(v)return JSON.parse(v);}catch(e){}
    return {};
  });
  React.useEffect(()=>{try{localStorage.setItem("vl_grammar_disabled_v1",JSON.stringify(disabledCats));}catch(e){}},[disabledCats]);
  const langDisabled = disabledCats[effectiveLang] || [];
  const toggleCatDisabled=(key)=>setDisabledCats(prev=>{
    const cur=prev[effectiveLang]||[];
    const next=cur.includes(key)?cur.filter(k=>k!==key):[...cur,key];
    return {...prev,[effectiveLang]:next};
  });
  const [expandedLegend,setExpandedLegend]=React.useState(null);
  const [grammarEditMode,setGrammarEditMode]=React.useState(false);

  // ── Lesson Resume — save progress, offer continue on re-enter ──
  const progressKey=`lv_progress_${lessonId}`;
  useEffect(()=>{
    try{
      const saved=_memStore[progressKey];
      if(saved){
        const p=JSON.parse(saved);
        if(p.si>0&&p.si<steps.length){setShowResume(true);}
        else{delete _memStore[progressKey];}
      }
    }catch(e){}
  },[lessonId]);
  // Save progress on step change (skip step 0 to avoid false positives)
  useEffect(()=>{
    if(si>0&&!done){try{_memStore[progressKey]=JSON.stringify({si,score});}catch(e){}}
  },[si,done]);
  // Expose current step to Verumius AI context
  useEffect(()=>{
    const st=steps[si];
    if(st){
      // Strip answer fields so Verumius can't cheat for the learner
      const safe={...st};
      delete safe.a; delete safe.ans; delete safe.blanks;
      window.vr_step={step:safe,si,total:steps.length,lessonId,lessonTitle:lesson?.title,lang};
    }
    return()=>{window.vr_step=null;};
  },[si,lessonId]);
  // Clear progress on completion
  const doneFiredRef=useRef(false);
  useEffect(()=>{
    if(done&&!doneFiredRef.current){
      doneFiredRef.current=true;
      try{delete _memStore[progressKey];}catch(e){}
      try{UISounds.celebrate();}catch(e){}
      addXp(lesson.xp);
      showToast(`Lesson complete! +${lesson.xp} XP`,"🎉");
      try{if(onComplete)onComplete();}catch(e){console.error("onComplete error:",e);}
    }
    if(!done)doneFiredRef.current=false;
  },[done]);

  // ── Full Keyboard Navigation (Decision 7) ──
  // continueRef: fires goNext on spacebar for non-input screens
  // focusIdx: tracks arrow-key focused option in MC/match
  const continueRef=useRef(null);
  const [focusIdx,setFocusIdx]=useState(-1);
  const [dfSlots,setDfSlots]=useState({}); // drag_fill: {slotId: placedWord|null}
  const [dfPoolIdx,setDfPoolIdx]=useState(0); // drag_fill: focused pool tile index
  const [dfFocusSlot,setDfFocusSlot]=useState(null); // drag_fill: which slot is selected for placement
  const [dfDrag,setDfDrag]=useState(null); // drag_fill: {word:string}|null — triggers re-render on start/end
  const dfDragOccurred=useRef(false); // drag_fill: true after pointer moves (distinguishes click from drag)

  // Reset all state when lesson changes (Continue → next lesson)
  useEffect(()=>{
    setSi(0);setScore(0);setDone(false);setAnswered(false);setSelOpt(null);
    setInputVal("");setMatchSel({nl:null,en:null});setMatchDone([]);setLinePositions([]);
    setShowDeepDive(false);setShowPhonetic(false);setShowCognate(false);setShowHanja(false);setFocusIdx(-1);
    setConjAnswers({});setConjChecked(false);setShowHint(false);
    setDfSlots({});setDfPoolIdx(0);setDfFocusSlot(null);setDfDrag(null);
    setDoneFocus(0);continueRef.current=null;
  },[lessonId]);
  // Reset focus when step changes
  useEffect(()=>{setFocusIdx(-1);setLinePositions([]);setMatchPendingLine(null);setDfSlots({});setDfPoolIdx(0);setDfFocusSlot(null);setDfDrag(null);},[si]);
  // Match: keyboard select event → delegate to ref-stored handler
  useEffect(()=>{
    const fn=(e)=>{
      const idx=e.detail?.idx;if(idx==null)return;
      const{nlItems,enItems,nlCount,matchDone:md,handleMatch:hm}=matchSelectRef.current;
      if(!nlItems||!hm)return;
      if(idx<nlCount){const w=nlItems[idx];if(!md.includes(w))hm("nl",w);}
      else{const w=enItems[idx-nlCount];if(!md.includes(w))hm("en",w);}
    };
    window.addEventListener("le-match-select",fn);
    return()=>window.removeEventListener("le-match-select",fn);
  },[]);
  // Match: compute pending "dragging" line from selected item to focused item
  useEffect(()=>{
    const container=matchContainerRef.current;
    if(!container||(!matchSel.nl&&!matchSel.en)){setMatchPendingLine(null);return;}
    const nlItems=matchNlRef.current;
    const enItems=matchEnRef.current;
    const nlCount=nlItems.length;
    const rect=container.getBoundingClientRect();
    let fromEl=null,toEl=null;
    if(matchSel.nl&&!matchSel.en){
      // NL selected — draw line to focused EN item (if focus is on EN side)
      const nlIdx=nlItems.indexOf(matchSel.nl);
      fromEl=container.querySelector(`[data-match-nl="${nlIdx}"]`);
      if(focusIdx>=nlCount){
        const enIdx=focusIdx-nlCount;
        toEl=container.querySelector(`[data-match-en="${enIdx}"]`);
      }
    } else if(matchSel.en&&!matchSel.nl){
      // EN selected — draw line to focused NL item
      const enIdx=enItems.indexOf(matchSel.en);
      toEl=container.querySelector(`[data-match-en="${enIdx}"]`);
      if(focusIdx>=0&&focusIdx<nlCount){
        fromEl=container.querySelector(`[data-match-nl="${focusIdx}"]`);
      }
    }
    if(fromEl&&toEl){
      const fR=fromEl.getBoundingClientRect();
      const tR=toEl.getBoundingClientRect();
      setMatchPendingLine({x1:fR.right-rect.left,y1:fR.top+fR.height/2-rect.top,x2:tR.left-rect.left,y2:tR.top+tR.height/2-rect.top});
    } else if(fromEl||toEl){
      // Only one side — draw line to edge of gap (midpoint hint)
      const el=fromEl||toEl;
      const eR=el.getBoundingClientRect();
      const isLeft=!!fromEl;
      setMatchPendingLine({
        x1:isLeft?eR.right-rect.left:rect.width/2,
        y1:isLeft?eR.top+eR.height/2-rect.top:eR.top+eR.height/2-rect.top,
        x2:isLeft?rect.width/2:eR.left-rect.left,
        y2:eR.top+eR.height/2-rect.top
      });
    } else {
      setMatchPendingLine(null);
    }
  },[matchSel.nl,matchSel.en,focusIdx]);
  useEffect(()=>{
    const handler=(e)=>{
      // Block all keys when typing in Verumius or search overlay (Escape still works)
      if(document.activeElement?.closest('.vr-wrap,.sf-panel')&&document.activeElement?.tagName==='INPUT'){
        return;
      }
      if(done)return;
      if(showResume)return; // Resume dialog handles its own input
      const st=steps[si];
      if(!st)return;
      const isTextInput=st.type==="tr";

      // ── CTRL+S — Dev skip (auto-answer + show correct) ──
      if((e.ctrlKey||e.metaKey)&&e.code==="KeyS"){
        e.preventDefault();
        if(answered){if(continueRef.current){continueRef.current();continueRef.current=null;}return;}
        if(st.type==="mc"||st.type==="fb"){
          const ans=st.ans||(Array.isArray(st.a)?st.a[0]:st.a);
          setSelOpt(ans);checkAndNext(true);
        } else if(st.type==="match"){
          // Auto-complete all pairs + draw all lines
          const pairs=st.mks?st.mks.map(k=>{const m=MEANINGS[k];if(!m)return{nl:k,en:k};const bl=m[baseLang]||m.en;return{nl:m[lang]?.[0]||k,en:bl?.[0]||k};}):st.pairs;
          const allDone=pairs.flatMap(p=>[p.nl,p.en]);
          setMatchDone(allDone);setAnswered(true);addXp(2);setScore(s=>s+1);
          // Draw lines after DOM settles
          setTimeout(()=>{
            const container=matchContainerRef.current;if(!container)return;
            const rect=container.getBoundingClientRect();
            const nlItems=matchNlRef.current;const enItems=matchEnRef.current;
            const lines=pairs.map(p=>{
              const nlEl=container.querySelector(`[data-match-nl="${nlItems.indexOf(p.nl)}"]`);
              const enEl=container.querySelector(`[data-match-en="${enItems.indexOf(p.en)}"]`);
              if(!nlEl||!enEl)return null;
              const nlR=nlEl.getBoundingClientRect();const enR=enEl.getBoundingClientRect();
              return{x1:nlR.right-rect.left,y1:nlR.top+nlR.height/2-rect.top,x2:enR.left-rect.left,y2:enR.top+enR.height/2-rect.top};
            }).filter(Boolean);
            setLinePositions(lines);
          },80);
        } else if(st.type==="drag_fill"){
          // Auto-fill all slots correctly
          const filled={};Object.entries(st.blanks).forEach(([k,v])=>{filled[k]=v;});
          setDfSlots(filled);setDfDrag(null);setDfFocusSlot(null);setAnswered(true);addXp(2);setScore(s=>s+1);
        } else {
          // teach/intro/tip/verb_table — just advance
          goNext();
        }
        return;
      }

      // ── A/B/C/D KEYS ── direct option selection for MC/FB
      if(["KeyA","KeyB","KeyC","KeyD"].includes(e.code)){
        if((st.type==="mc"||st.type==="fb")&&!answered){
          const optIdx={KeyA:0,KeyB:1,KeyC:2,KeyD:3}[e.code];
          const count=st.opts?.length||0;
          if(optIdx<count){
            e.preventDefault();
            setFocusIdx(optIdx);
            window.dispatchEvent(new CustomEvent("le-select",{detail:{idx:optIdx}}));
          }
          return;
        }
      }

      // ── SPACEBAR / ENTER — continue or select ──
      if(e.code==="Space"||(e.code==="Enter"&&st.type!=="drag_fill"&&!isTextInput)){
        if(isTextInput&&e.code==="Space")return;
        // drag_fill space: place tile
        if(st.type==="drag_fill"&&!answered&&e.code==="Space"){
          e.preventDefault();
          const blankKeys=Object.keys(st.blanks).sort();
          const poolWords=shuffleOpts(st.pool||[],si);
          const availPool=poolWords.filter(w=>!Object.values(dfSlots).includes(w));
          const targetSlot=dfFocusSlot&&!dfSlots[dfFocusSlot]?dfFocusSlot:blankKeys.find(k=>!dfSlots[k]);
          if(availPool.length>0&&targetSlot){
            const word=availPool[dfPoolIdx%Math.max(availPool.length,1)];
            if(word){setDfSlots(prev=>({...prev,[targetSlot]:word}));UISounds.tick();}
          }
          return;
        }
        e.preventDefault();
        // Continue action pending (after answer, on teach/intro/tip)
        if(continueRef.current){
          continueRef.current();
          continueRef.current=null;
          return;
        }
        // MC/FB: select focused option
        if((st.type==="mc"||st.type==="fb")&&focusIdx>=0){
          window.dispatchEvent(new CustomEvent("le-select",{detail:{idx:focusIdx}}));
          return;
        }
        // Match: select focused item
        if(st.type==="match"&&focusIdx>=0){
          window.dispatchEvent(new CustomEvent("le-match-select",{detail:{idx:focusIdx}}));
          return;
        }
      }

      // ── ENTER ── (text-input questions handle Enter via their own onKeyDown)
      // drag_fill: Enter places tile (like Space) or triggers Check if all filled
      if(e.code==="Enter"&&st.type==="drag_fill"&&!answered){
        e.preventDefault();
        const blankKeys=Object.keys(st.blanks).sort();
        const poolWords=shuffleOpts(st.pool||[],si);
        const availPool=poolWords.filter(w=>!Object.values(dfSlots).includes(w));
        const targetSlot=dfFocusSlot&&!dfSlots[dfFocusSlot]?dfFocusSlot:blankKeys.find(k=>!dfSlots[k]);
        if(targetSlot&&availPool.length>0){
          const word=availPool[dfPoolIdx%Math.max(availPool.length,1)];
          if(word){setDfSlots(prev=>({...prev,[targetSlot]:word}));UISounds.tick();}
        } else if(!blankKeys.find(k=>!dfSlots[k])){
          // All filled — check answer directly
          const allCorrect=blankKeys.every(k=>dfSlots[k]?.toLowerCase()===st.blanks[k]?.toLowerCase());
          checkAndNext(allCorrect);
        }
        return;
      }

      // ── ARROW KEYS ── navigate options in grid
      if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)){
        // drag_fill: Shift+Arrow cycles focused slot, Arrow alone cycles pool
        if(st.type==="drag_fill"&&!answered){
          e.preventDefault();UISounds.tick();
          if(e.shiftKey){
            // Cycle through empty slots
            const blankKeys=Object.keys(st.blanks).sort();
            const emptyKeys=blankKeys.filter(k=>!dfSlots[k]);
            if(emptyKeys.length===0)return;
            const curIdx=emptyKeys.indexOf(dfFocusSlot);
            if(e.code==="ArrowRight"||e.code==="ArrowDown"){
              setDfFocusSlot(emptyKeys[(curIdx+1)%emptyKeys.length]);
            } else {
              setDfFocusSlot(emptyKeys[(curIdx-1+emptyKeys.length)%emptyKeys.length]);
            }
          } else {
            const poolLen=st.pool?.length||0;
            if(poolLen<=0)return;
            if(e.code==="ArrowRight"||e.code==="ArrowDown"){
              setDfPoolIdx(prev=>(prev+1)%poolLen);
            } else {
              setDfPoolIdx(prev=>(prev-1+poolLen)%poolLen);
            }
          }
          return;
        }
        if(["mc","fb","match"].includes(st.type)&&!answered){
          e.preventDefault();UISounds.tick();
          if(st.type==="match"){
            // Match: two columns (NL left, EN right), navigate as flat list
            // Items 0..n-1 = NL column, n..2n-1 = EN column
            const nlCount=matchNlRef.current.length;
            const totalCount=nlCount*2;
            if(totalCount<=0)return;
            setFocusIdx(prev=>{
              const cur=prev<0?0:prev;
              const inRight=cur>=nlCount;
              const rowIdx=inRight?cur-nlCount:cur;
              if(e.code==="ArrowDown")return inRight?nlCount+((rowIdx+1)%nlCount):(rowIdx+1)%nlCount;
              if(e.code==="ArrowUp")return inRight?nlCount+((rowIdx-1+nlCount)%nlCount):(rowIdx-1+nlCount)%nlCount;
              if(e.code==="ArrowRight")return inRight?cur:cur+nlCount; // jump to EN column
              if(e.code==="ArrowLeft")return inRight?cur-nlCount:cur; // jump to NL column
              return cur;
            });
          } else {
            const count=st.opts?.length||0;
            if(count<=0)return;
            const cols=2; // 2x2 grid layout
            setFocusIdx(prev=>{
              const cur=prev<0?0:prev;
              if(e.code==="ArrowDown")return (cur+cols)%count;
              if(e.code==="ArrowUp")return (cur-cols+count)%count;
              if(e.code==="ArrowRight")return (cur+1)%count;
              if(e.code==="ArrowLeft")return (cur-1+count)%count;
              return cur;
            });
          }
          return;
        }
      }

      // ── ARROW DOWN/UP on tip/verb_table ── open/close deep dive
      // First ↓ opens deepDive; subsequent ↓ scrolls normally
      if(e.code==="ArrowDown"&&["tip","verb_table"].includes(st.type)&&!showDeepDive&&st.deepDive){
        e.preventDefault();setShowDeepDive(true);return;
      }
      if(e.code==="ArrowUp"&&["tip","verb_table"].includes(st.type)&&showDeepDive){
        e.preventDefault();setShowDeepDive(false);return;
      }

      // ── ARROW RIGHT/LEFT ── navigate between teach/tip/review steps
      if((e.code==="ArrowRight")&&["teach","review","intro","tip","verb_table","board"].includes(st.type)&&!answered){
        e.preventDefault();UISounds.pageTurn();goNext();return;
      }
      if((e.code==="ArrowLeft")&&["teach","review","intro","tip","verb_table","board"].includes(st.type)&&si>0){
        e.preventDefault();UISounds.tick();goBack();return;
      }

      // ── BACKSPACE ── go to previous step within lesson
      if(e.code==="Backspace"){
        if(document.activeElement?.tagName==="INPUT"||document.activeElement?.tagName==="TEXTAREA")return;
        // drag_fill: backspace removes last placed tile (if any)
        if(st.type==="drag_fill"&&!answered){
          const blankKeys=Object.keys(st.blanks).sort();
          const filledKeys=blankKeys.filter(k=>dfSlots[k]);
          if(filledKeys.length>0){
            e.preventDefault();
            const last=filledKeys[filledKeys.length-1];
            setDfSlots(prev=>{const n={...prev};delete n[last];return n;});
            UISounds.tick();
            return;
          }
        }
        if(si>0){ e.preventDefault(); goBack(); }
        return;
      }

      // ── ESCAPE ── quit lesson
      if(e.code==="Escape"&&onBack){
        e.preventDefault();
        onBack();
      }

    };
    window.addEventListener("keydown",handler);
    return ()=>window.removeEventListener("keydown",handler);
  },[si,focusIdx,done,answered,showDeepDive,showResume,dfSlots,dfPoolIdx,dfFocusSlot]);
  // Pre-shuffle match pairs (refs must be at top level, not inside conditionals)
  const matchNlRef=useRef([]);
  const matchEnRef=useRef([]);
  const matchKeyRef=useRef(null);
  const matchContainerRef=useRef(null);
  const matchSelectRef=useRef({});
  const [linePositions,setLinePositions]=useState([]);
  const [matchPendingLine,setMatchPendingLine]=useState(null);
  const matchDragRef=useRef({active:false,side:null,val:null,startEl:null});
  useEffect(()=>{
    const handleDragEnd=(e)=>{
      if(!matchDragRef.current.active)return;
      const drag=matchDragRef.current;
      matchDragRef.current={active:false,side:null,val:null,startEl:null};
      setMatchPendingLine(null);
      const targetSide=drag.side==="nl"?"en":"nl";
      // Find element under pointer
      const hit=document.elementFromPoint(e.clientX,e.clientY);
      if(!hit)return;
      const matchEl=hit.closest?hit.closest(`[data-match-side="${targetSide}"]`):null;
      if(matchEl){
        const hitVal=matchEl.getAttribute("data-match-val");
        if(hitVal){UISounds.click();matchSelectRef.current.handleMatch(targetSide,hitVal);}
      }
    };
    document.addEventListener("pointerup",handleDragEnd);
    document.addEventListener("touchend",handleDragEnd);
    return ()=>{document.removeEventListener("pointerup",handleDragEnd);document.removeEventListener("touchend",handleDragEnd);};
  },[]);
  const total=steps.length;
  let st=steps[si]||null;
  // Auto-convert multi-blank fb to drag_fill (P48: fb only supports single blank {1})
  if(st&&st.type==="fb"&&/\{2\}/.test(st.s)){
    const fbA=Array.isArray(st.a)?st.a:[st.a];
    const autoBlanks={};
    fbA.forEach((ans,i)=>{autoBlanks[String(i+1)]=ans;});
    st={...st,type:"drag_fill",blanks:autoBlanks,pool:st.opts||fbA};
  }
  const pct=((si)/total)*100;
  const totalEx=steps.filter(s=>["mc","tr","fb","match","conj","drag_fill"].includes(s.type)).length;

  // ── Content Integrity Validator wiring (Manifesto P8+P11) ──
  // Runs once on lesson mount. Dedupes by lessonId+stepIndex+shortTitle.
  const validatorRanRef=useRef(null);
  useEffect(()=>{
    if(!addFlag||!lesson||!lesson.steps)return;
    const lid=lesson.id||"unknown";
    if(validatorRanRef.current===lid)return; // Already validated this lesson
    validatorRanRef.current=lid;
    try{
      const findings=validateLessonForLeaks(lesson,{mode:hideQuizRom?"foundations":"units",lang,lessonId:lid});
      if(findings.length>0){
        findings.forEach(f=>{
          addFlag(
            f.lessonId,
            f.stepIndex,
            {type:"auto_validator",severity:f.severity,shortTitle:f.shortTitle,stepId:f.stepId},
            "auto_leak_"+f.shortTitle.replace(/\s+/g,"_").toLowerCase(),
            `[${f.severity.toUpperCase()}] ${f.explanation} — Fix: ${f.suggestedFix}`
          );
        });
        if(typeof console!=="undefined")console.warn(`[ContentValidator] ${lid}: ${findings.length} finding(s) auto-flagged`);
      }
    }catch(e){if(typeof console!=="undefined")console.error("[ContentValidator] Error:",e);}
  },[lesson?.id]);

  const goNext=()=>{
    continueRef.current=null; // Clear spacebar binding on advance
    if(si+1>=total){setDone(true);setAnswered(false);setSelOpt(null);setWordBubble(null);setShowDeepDive(false);setShowHint(false);setShowTrans(false);}
    else{setSi(i=>i+1);setAnswered(false);setSelOpt(null);setInputVal("");setMatchSel({nl:null,en:null});setMatchDone([]);setLinePositions([]);setShowDeepDive(false);setShowPhonetic(false);setShowCognate(false);setShowHanja(false);setConjAnswers({});setConjChecked(false);setShowHint(false);setShowTrans(false);setWordBubble(null);UISounds.pageTurn();}
  };
  const goBack=()=>{
    if(si<=0)return;
    continueRef.current=null;
    setSi(i=>i-1);setAnswered(false);setSelOpt(null);setInputVal("");
    setMatchSel({nl:null,en:null});setMatchDone([]);setLinePositions([]);setMatchPendingLine(null);
    setShowDeepDive(false);setShowPhonetic(false);setShowCognate(false);setShowHanja(false);setConjAnswers({});setConjChecked(false);
    setShowHint(false);setFocusIdx(-1);setDfSlots({});setDfPoolIdx(0);setDfFocusSlot(null);setDfDrag(null);UISounds.pageTurn();
  };
  // ── Swipe navigation (mobile) ──
  const isSwipeable=["teach","intro","tip","gramref","vocab_ref","verb_table","story","_breather"].includes(steps[si]?.type);
  const swipeHandlers=useSwipe(
    ()=>{if(isSwipeable||answered)goNext();}, // swipe left = next
    ()=>{goBack();},                            // swipe right = back
    {enabled:true,threshold:50}
  );

  // Register spacebar for non-quiz steps (teach, intro, tip, gramref, verb_table)
  const st_type=steps[si]?.type;
  const curSt=steps[si];
  // Spacebar action should match button onClick exactly:
  // teach: learnWord + goNext, others: just goNext
  const spaceAction=st_type==="teach"?()=>{if(curSt?.nl&&learnWord)learnWord(curSt.nl);setShowPhonetic(false);setShowCognate(false);setShowHanja(false);goNext();}:goNext;
  // Set immediately for first render (fixes spacebar not working on first slide)
  if(["teach","intro","tip","gramref","vocab_ref","verb_table","_breather"].includes(st_type)&&!continueRef.current){
    continueRef.current=spaceAction;
  }
  useEffect(()=>{
    if(["teach","intro","tip","gramref","vocab_ref","verb_table","_breather"].includes(st_type)){
      continueRef.current=spaceAction;
    } else {
      // For quiz steps, ContinueButton handles registration when answered
      if(!answered) continueRef.current=null;
    }
  },[si,st_type,answered]);
  const checkAndNext=(correct)=>{
    setAnswered(true);
    // ── SRS integration (2026-04-19): record every quiz outcome into FSRS ──
    // Extract the primary target-language form from the current step.
    // checkAndNext is called for mc, fb, drag_fill, and tr steps.
    // match steps are handled separately in handleMatch below.
    try {
      const _st = steps[si];
      if (_st) {
        const _word = _st.trg || _st.ans || (Array.isArray(_st.a) ? _st.a[0] : _st.a) || null;
        if (_word) recordQuizOutcome(lang, _word, correct);
      }
    } catch (_e) { /* never block lesson flow */ }
    setTimeout(()=>{if(correct){setScore(s=>s+1);addXp(2);UISounds.correct();}else{UISounds.wrong();}},150);
  };

  // ── Unified keyboard selection handler for MC/FB (Decision 7) ──
  // Must be here (before any conditional returns) to satisfy Rules of Hooks
  useEffect(()=>{
    const handler=(e)=>{
      if(answered)return;
      const curSt=steps[si];
      if(!curSt)return;
      const idx=e.detail?.idx;
      if(idx<0)return;
      if(curSt.type==="mc"&&idx<(curSt.opts?.length||0)){
        const o=curSt.opts[idx];
        setSelOpt(o);
        checkAndNext(o===curSt.ans);
      }
      if(curSt.type==="fb"&&idx<(curSt.opts?.length||0)){
        const o=curSt.opts[idx];
        const fbAns=Array.isArray(curSt.a)?curSt.a:[curSt.a];
        const ok=fbAns.some(a=>a.toLowerCase()===o.toLowerCase());
        setSelOpt(o);
        checkAndNext(ok);
      }
    };
    window.addEventListener("le-select",handler);
    return ()=>window.removeEventListener("le-select",handler);
  },[si,answered]);

  // Done-screen focus: 0 = Continue (default), 1 = Overview, 2 = Try Again
  // -1 = no selection (mouse cleared it)
  const doneKb=useRef(false); // true when arrows are driving selection
  const doneFocusRef=useRef(0);
  // Keep ref in sync
  useEffect(()=>{doneFocusRef.current=doneFocus;},[doneFocus]);
  // Reset done focus when done changes
  useEffect(()=>{if(done){const v=onContinue?0:-1;setDoneFocus(v);doneFocusRef.current=v;doneKb.current=true;}},[done]);

  // Keyboard handler for done screen — capture phase to intercept before anything else
  useEffect(()=>{
    if(!done)return;
    const handler=(e)=>{
      const df=doneFocusRef.current;
      if(e.code==="Space"||e.code==="Enter"){
        if(df<0)return; // nothing selected
        e.preventDefault();e.stopPropagation();UISounds.click();
        if(df===0&&onContinue){onContinue();}
        else if(df===1){onBack();}
        else if(df===2){retryLesson();}
        return;
      }
      if(e.code==="Backspace"||e.code==="Escape"){e.preventDefault();e.stopPropagation();UISounds.click();onBack();return;}
      if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)){
        e.preventDefault();e.stopPropagation();UISounds.tick();
        doneKb.current=true;
        // Visual order: Overview(1), Try Again(2), Continue(0)
        const validIdxs=onContinue?[1,2,0]:[1,2];
        setDoneFocus(f=>{
          if(f<0) return validIdxs[e.code==="ArrowRight"||e.code==="ArrowDown"?0:validIdxs.length-1];
          const ci=validIdxs.indexOf(f);
          const cur=ci>=0?ci:0;
          const dir=e.code==="ArrowRight"||e.code==="ArrowDown"?1:-1;
          return validIdxs[(cur+dir+validIdxs.length)%validIdxs.length];
        });
      }
    };
    // Mouse move → clear arrow selection
    const mouseHandler=()=>{
      if(doneKb.current){
        doneKb.current=false;
        setDoneFocus(-1);
      }
    };
    window.addEventListener("keydown",handler,true);
    window.addEventListener("mousemove",mouseHandler,{passive:true});
    return ()=>{window.removeEventListener("keydown",handler,true);window.removeEventListener("mousemove",mouseHandler);};
  },[done,doneFocus,onContinue,onBack]);

  const retryLesson=()=>{setSi(0);setScore(0);setDone(false);setAnswered(false);setSelOpt(null);setInputVal("");setMatchSel({nl:null,en:null});setMatchDone([]);setLinePositions([]);setShowDeepDive(false);setShowPhonetic(false);setShowCognate(false);setShowHanja(false);setConjAnswers({});setConjChecked(false);setShowHint(false);setShowTrans(false);};

  // Done screen + null guard moved after useMemo (line ~10911) to satisfy Rules of Hooks

  // Swipe navigation — attach at document level for lesson cards
  useEffect(()=>{
    const el=document.querySelector('[data-kb-owner="lesson"]')?.closest('.anim')||document.body;
    const {onTouchStart,onTouchEnd}=swipeHandlers;
    el.addEventListener('touchstart',onTouchStart,{passive:true});
    el.addEventListener('touchend',onTouchEnd,{passive:true});
    return()=>{el.removeEventListener('touchstart',onTouchStart);el.removeEventListener('touchend',onTouchEnd);};
  },[si,answered,swipeHandlers.onTouchStart,swipeHandlers.onTouchEnd]);

  const ProgressBar=()=>(
    <div data-kb-owner="lesson" style={{marginBottom:20}}>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:10}}>
        <button onClick={onBack} style={{display:"flex",alignItems:"center",justifyContent:"center",width:40,height:40,borderRadius:12,border:dk?"1px solid rgba(255,255,255,0.12)":"none",cursor:"pointer",background:dk?"linear-gradient(180deg, rgba(70,68,100,0.85) 0%, rgba(50,48,78,0.9) 50%, rgba(35,33,60,0.95) 100%)":"linear-gradient(180deg, #FFFFFF 0%, #f0f0f5 50%, #e2e2ea 100%)",boxShadow:dk?"0 0 14px rgba(140,130,200,0.25), 0 4px 14px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -2px 0 rgba(0,0,0,0.2)":"0 4px 12px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(0,0,0,0.06)",transition:"all .15s",position:"relative",overflow:"hidden"}} onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08)";}} onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";}}>
          <div style={{position:"absolute",top:0,left:"8%",right:"8%",height:dk?"35%":"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, transparent 100%)",pointerEvents:"none"}}/>
          <svg width={18} height={18} viewBox="0 0 24 24" fill="none" style={{position:"relative",zIndex:1}}><path d="M18 6L6 18M6 6l12 12" stroke={dk?"rgba(220,215,240,0.85)":"#777"} strokeWidth={3} strokeLinecap="round"/></svg>
        </button>
        <span className="hd" style={{fontSize:13,fontWeight:700,color:"var(--gray-400)"}}>{renderNavTitle(lesson.icon,lesson.title,13)}</span>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          {/* Story mode toggle — HIDDEN (post-launch feature) */}
          {/* Grammar colorizer toggle */}
          <button onClick={()=>setGrammarHl(!grammarHl)} title={grammarHl?t("le_grammar_on",baseLang):t("le_grammar_off",baseLang)} style={{
            width:32,height:32,borderRadius:10,border:"none",cursor:"pointer",
            display:"flex",alignItems:"center",justifyContent:"center",
            fontSize:14,transition:"all .15s",
            background:grammarHl
              ?(dk?"linear-gradient(180deg,rgba(123,94,232,0.3),rgba(80,60,180,0.2))":"linear-gradient(180deg,rgba(240,234,255,0.95),rgba(220,210,255,0.9))")
              :(dk?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"),
            boxShadow:grammarHl
              ?(dk?"0 0 8px rgba(123,94,232,0.3),inset 0 1px 0 rgba(255,255,255,0.1)":"0 2px 8px rgba(123,94,232,0.15),inset 0 1px 0 rgba(255,255,255,0.9)")
              :"none",
            color:grammarHl?(dk?"#B8A8FA":"#7B5EE8"):(dk?"rgba(255,255,255,0.3)":"var(--gray-300)"),
          }} onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.1)";}} onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";}}>Aa</button>
          {grammarHl&&<button onClick={()=>setShowGrammarSettings(!showGrammarSettings)} title="Color settings" style={{
            width:32,height:32,borderRadius:10,border:"none",cursor:"pointer",
            display:"flex",alignItems:"center",justifyContent:"center",
            fontSize:15,transition:"all .2s",
            background:showGrammarSettings
              ?(dk?"linear-gradient(180deg,rgba(123,94,232,0.35),rgba(80,60,180,0.25))":"linear-gradient(180deg,rgba(240,234,255,0.95),rgba(220,210,255,0.9))")
              :(dk?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)"),
            color:showGrammarSettings?(dk?"#B8A8FA":"#7B5EE8"):(dk?"rgba(255,255,255,0.35)":"var(--gray-400)"),
            transform:showGrammarSettings?"rotate(60deg)":"rotate(0deg)",
          }} onMouseEnter={e=>{e.currentTarget.style.opacity="0.8";}} onMouseLeave={e=>{e.currentTarget.style.opacity="1";}}>
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth={2}/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth={2}/></svg>
          </button>}
          <span style={{fontSize:12,color:"var(--gray-400)",fontWeight:600}}>{si+1}/{total}</span>
        </div>
      </div>
      {/* Grammar settings panel — tabbed color pack system, VerumLingua candy gloss */}
      {showGrammarSettings&&grammarHl&&typeof window!=="undefined"&&window.innerWidth<600&&<div onClick={()=>setShowGrammarSettings(false)} style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:dk?"rgba(0,0,0,0.55)":"rgba(15,10,40,0.3)",zIndex:9998,backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)"}}/>}
      {showGrammarSettings&&grammarHl&&(()=>{
        if(!langPacks) return <div style={{marginTop:8,padding:"12px 14px",borderRadius:14,background:dk?"rgba(30,30,46,0.95)":"rgba(255,255,255,0.97)",border:dk?"1px solid rgba(255,255,255,0.08)":"1px solid rgba(0,0,0,0.06)",boxShadow:dk?"0 4px 20px rgba(0,0,0,0.4)":"0 4px 16px rgba(0,0,0,0.08)",fontSize:12,color:dk?"rgba(255,255,255,0.5)":"var(--gray-500)"}}>{t("le_no_grammar",baseLang)}</div>;
        const isMobile = typeof window !== "undefined" && window.innerWidth < 600;
        const tabStyle=(isActive,isPlaceholder)=>({
          display:"inline-flex",alignItems:"center",gap:7,padding:"9px 18px",borderRadius:22,
          fontSize:12,fontWeight:800,cursor:isPlaceholder?"default":"pointer",
          transition:"all .25s cubic-bezier(.4,0,.2,1)",border:"none",fontFamily:"inherit",
          minHeight:40,opacity:isPlaceholder?0.35:1,letterSpacing:0.2,
          background:isActive
            ?(dk
              ?"linear-gradient(180deg,rgba(140,110,255,0.45) 0%,rgba(123,94,232,0.32) 30%,rgba(100,75,200,0.2) 60%,rgba(80,60,170,0.1) 100%)"
              :"linear-gradient(180deg,rgba(255,255,255,0.98) 0%,rgba(248,244,255,0.96) 30%,rgba(240,234,252,0.92) 60%,rgba(232,224,250,0.88) 100%)")
            :(dk
              ?"linear-gradient(180deg,rgba(255,255,255,0.07) 0%,rgba(255,255,255,0.03) 100%)"
              :"linear-gradient(180deg,rgba(248,245,255,0.85) 0%,rgba(240,236,250,0.6) 100%)"),
          color:isActive?(dk?"#D4C8FF":"#6B4ED8"):(dk?"rgba(255,255,255,0.35)":"rgba(140,130,170,0.55)"),
          boxShadow:isActive
            ?(dk
              ?"0 0 0 1.5px rgba(123,94,232,0.55),0 6px 20px rgba(123,94,232,0.3),0 2px 6px rgba(0,0,0,0.3),inset 0 1px 0 rgba(255,255,255,0.12),inset 0 -1px 0 rgba(0,0,0,0.15)"
              :"0 0 0 1.5px rgba(123,94,232,0.3),0 6px 24px rgba(123,94,232,0.15),0 2px 8px rgba(0,0,0,0.04),inset 0 2px 0 rgba(255,255,255,0.95),inset 0 -2px 0 rgba(123,94,232,0.06)")
            :(dk
              ?"0 0 0 1px rgba(255,255,255,0.08),0 2px 6px rgba(0,0,0,0.2),inset 0 1px 0 rgba(255,255,255,0.05),inset 0 -1px 0 rgba(0,0,0,0.1)"
              :"0 0 0 1px rgba(123,94,232,0.08),0 2px 6px rgba(0,0,0,0.03),inset 0 2px 0 rgba(255,255,255,0.9),inset 0 -2px 0 rgba(0,0,0,0.02)"),
        });
        return <div style={{
          marginTop:8,marginBottom:4,
          padding:isMobile?"22px 18px 30px":"12px 14px",
          borderRadius:isMobile?"24px 24px 0 0":16,
          background:"transparent",
          position:isMobile?"fixed":"relative",
          bottom:isMobile?0:undefined,left:isMobile?0:undefined,right:isMobile?0:undefined,
          zIndex:isMobile?9999:undefined,
          maxHeight:isMobile?"75vh":"auto",overflowY:"auto",overflowX:"hidden",
          WebkitOverflowScrolling:"touch",
          ...(isMobile?{background:dk?"rgba(30,25,50,0.97)":"rgba(245,242,255,0.97)",border:dk?"1px solid rgba(123,94,232,0.3)":"1px solid rgba(180,165,240,0.4)",boxShadow:"0 -4px 24px rgba(0,0,0,0.15)"}:{}),
        }}>
          {isMobile&&<div style={{width:40,height:5,borderRadius:3,background:dk?"rgba(255,255,255,0.2)":"rgba(255,255,255,0.5)",margin:"0 auto 16px"}}/>}
          {/* Tab strip — compound bubble tabs */}
          <div style={{display:"flex",gap:6,overflowX:"auto",paddingBottom:10,WebkitOverflowScrolling:"touch"}}>
            {langPacks.packs.map(pack=>{
              const isActive=pack.id===activePackId;
              const isP=!!pack.placeholder;
              return <button key={pack.id} onClick={()=>{if(!isP){selectPack(pack.id);setExpandedLegend(null);setGrammarEditMode(false);}}} disabled={isP} style={{
                display:"inline-flex",alignItems:"center",gap:6,padding:"8px 14px",borderRadius:18,
                fontSize:12,fontWeight:800,cursor:isP?"default":"pointer",
                transition:"all .25s cubic-bezier(.4,0,.2,1)",fontFamily:"inherit",
                opacity:isP?0.3:1,letterSpacing:0.3,position:"relative",overflow:"hidden",
                background:isActive
                  ?(dk
                    ?"linear-gradient(180deg, rgba(123,94,232,0.35) 0%, rgba(100,80,200,0.22) 50%, rgba(80,60,180,0.12) 100%)"
                    :"linear-gradient(180deg, rgba(200,190,255,0.65) 0%, rgba(220,210,255,0.5) 50%, rgba(235,230,255,0.35) 100%)")
                  :(dk
                    ?"linear-gradient(180deg, rgba(123,94,232,0.15) 0%, rgba(100,80,200,0.08) 40%, rgba(80,60,180,0.04) 100%)"
                    :"linear-gradient(180deg, rgba(200,190,255,0.3) 0%, rgba(220,210,255,0.18) 50%, rgba(235,230,255,0.1) 100%)"),
                color:isActive?(dk?"#D4C8FF":"#6B4ED8"):(dk?"rgba(200,184,255,0.5)":"rgba(140,130,170,0.6)"),
                border:isActive
                  ?(dk?"1.5px solid rgba(123,94,232,0.4)":"1.5px solid rgba(180,165,240,0.5)")
                  :(dk?"1px solid rgba(123,94,232,0.15)":"1px solid rgba(180,165,240,0.25)"),
                boxShadow:isActive
                  ?(dk
                    ?"0 4px 16px rgba(123,94,232,0.25), 0 0 10px rgba(123,94,232,0.15), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -2px 0 rgba(0,0,0,0.1)"
                    :"0 4px 16px rgba(123,94,232,0.12), 0 0 8px rgba(180,165,240,0.15), inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -2px 0 rgba(123,94,232,0.05)")
                  :(dk
                    ?"0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)"
                    :"0 2px 8px rgba(123,94,232,0.06), inset 0 1px 0 rgba(255,255,255,0.6)"),
              }}>
                {/* Gloss arc */}
                <span style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",
                  background:dk
                    ?"linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)"
                    :"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",
                  borderRadius:"0 0 50% 50%",pointerEvents:"none",
                }}/>
                <span style={{fontSize:14,fontWeight:900,lineHeight:1,position:"relative",zIndex:1}}>{pack.icon}</span>
                <span style={{position:"relative",zIndex:1}}>{pack.label}</span>
                {isP&&<span style={{fontSize:9,opacity:0.6,marginLeft:2,position:"relative",zIndex:1}}>soon</span>}
              </button>;
            })}
          </div>
          {/* Active pack legend — compact toggle pills in flex-wrap */}
          {activePack&&<div>
            <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
              {activePack.legend.map(item=>{
                const isOff = item.key && langDisabled.includes(item.key);
                const isExpanded = expandedLegend===item.label && !grammarEditMode;
                const labelColor = isOff ? (dk?"rgba(255,255,255,0.35)":"var(--gray-400)") : item.color;
                return <button key={item.label} onClick={()=>{
                    if(grammarEditMode && item.key){toggleCatDisabled(item.key);}
                    else{setExpandedLegend(expandedLegend===item.label?null:item.label);}
                  }}
                  style={{
                    display:"inline-flex",alignItems:"center",gap:6,padding:"9px 16px",borderRadius:22,
                    fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit",
                    position:"relative",overflow:"hidden",transition:"all .25s cubic-bezier(.4,0,.2,1)",
                    background:isExpanded
                      ?(dk
                        ?"linear-gradient(180deg, rgba(123,94,232,0.32) 0%, rgba(100,80,200,0.2) 40%, rgba(80,60,180,0.12) 100%)"
                        :"linear-gradient(180deg, rgba(200,190,255,0.6) 0%, rgba(220,210,255,0.45) 50%, rgba(235,230,255,0.3) 100%)")
                      :(dk
                        ?"linear-gradient(180deg, rgba(123,94,232,0.18) 0%, rgba(100,80,200,0.1) 40%, rgba(80,60,180,0.05) 100%)"
                        :"linear-gradient(180deg, rgba(200,190,255,0.4) 0%, rgba(220,210,255,0.25) 50%, rgba(235,230,255,0.15) 100%)"),
                    border:isExpanded
                      ?(dk?"1.5px solid rgba(123,94,232,0.45)":"1.5px solid rgba(180,165,240,0.55)")
                      :(dk?"1.5px solid rgba(123,94,232,0.22)":"1.5px solid rgba(180,165,240,0.35)"),
                    boxShadow:dk
                      ?"0 3px 10px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -2px 0 rgba(0,0,0,0.08)"
                      :"0 3px 12px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -2px 0 rgba(123,94,232,0.04)",
                    opacity:isOff?0.4:1,
                  }}>
                    {/* Gloss arc */}
                    <span style={{position:"absolute",top:0,left:"5%",right:"5%",height:"45%",
                      background:dk
                        ?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 60%)"
                        :"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 60%)",
                      borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0,
                    }}/>
                    <span style={{color:labelColor,fontWeight:800,fontSize:12,position:"relative",zIndex:1}}>{item.label}</span>
                    {grammarEditMode&&item.key&&<span style={{width:14,height:14,borderRadius:7,
                      border:`2px solid ${isOff?(dk?"rgba(255,255,255,0.3)":"var(--gray-300)"):item.color}`,
                      display:"flex",alignItems:"center",justifyContent:"center",position:"relative",zIndex:1,
                      background:isOff?"transparent":`${item.color}22`,fontSize:9,lineHeight:1,color:item.color,
                    }}>{isOff?"":"✓"}</span>}
                  </button>;
              })}
            </div>
            {/* Expanded description — full width compound bubble below the pills */}
            {(()=>{const expItem=activePack.legend.find(i=>i.label===expandedLegend);
              return expItem&&expItem.desc&&!grammarEditMode?<div style={{
                marginTop:8,padding:"12px 16px",borderRadius:22,position:"relative",overflow:"hidden",
                background:dk
                  ?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
                  :"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
                border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
                boxShadow:dk
                  ?"0 4px 16px rgba(0,0,0,0.25), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.1)"
                  :"0 4px 16px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -3px 0 rgba(123,94,232,0.04)",
                fontSize:12,fontWeight:600,lineHeight:1.5,
                color:dk?"rgba(255,255,255,0.7)":"rgba(60,40,120,0.65)",
              }}>
                <span style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",
                  background:dk
                    ?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 60%)"
                    :"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 60%)",
                  borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0,
                }}/>
                <span style={{fontWeight:800,color:expItem.color,position:"relative",zIndex:1}}>{expItem.label}:</span>{" "}
                <span style={{position:"relative",zIndex:1}}>{expItem.desc}</span>
              </div>:null;
            })()}
            {/* Edit toggle */}
            <div style={{display:"flex",justifyContent:"flex-end",marginTop:10}}>
              <button onClick={()=>{setGrammarEditMode(!grammarEditMode);setExpandedLegend(null);}} style={{
                border:"none",cursor:"pointer",fontFamily:"inherit",
                fontSize:11,fontWeight:700,letterSpacing:0.3,
                color:grammarEditMode?(dk?"#B8A8FA":"#7B5EE8"):(dk?"rgba(255,255,255,0.35)":"rgba(80,60,140,0.4)"),
                display:"flex",alignItems:"center",gap:4,padding:"4px 8px",borderRadius:8,
                transition:"all .15s",
                background:grammarEditMode?(dk?"rgba(123,94,232,0.15)":"rgba(123,94,232,0.08)"):"transparent",
              }}>
                <span style={{fontSize:13}}>{grammarEditMode?"✓":"✏️"}</span>
                {grammarEditMode?"Done":"Edit"}
              </button>
            </div>
          </div>}
        </div>;
      })()}
      <div className="xpbar" style={{height:22,borderRadius:12,position:"relative",boxShadow:"inset 0 3px 6px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,0.7)"}}><div className="xpbar-fill" style={{width:`${clamp(pct,3,100)}%`,borderRadius:12,boxShadow:`0 0 14px rgba(123,94,232,0.5), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -2px 0 rgba(0,0,0,0.12)`}}/><div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:800,color:pct>50?"white":"var(--purple-accent-text)",textShadow:pct>50?"0 1px 3px rgba(0,0,0,0.4)":"none",letterSpacing:0.5}}>{clamp(Math.round(pct),0,100)}%</div></div>

      {addFlag&&<div style={{textAlign:"center",marginTop:6,marginBottom:-8}}><FlagButton lessonId={lesson.id} stepIndex={si} stepData={steps[si]} addFlag={addFlag} baseLang={baseLang}/></div>}
    </div>
  );

  // ═══ INTRO ═══
  // ═══ RESUME DIALOG — shown when re-entering a lesson with saved progress ═══
  // showResume return moved after useMemo to satisfy Rules of Hooks

  // ── Shared note/text highlighter for board-style cards ──
  // ── Deterministic shuffle for MC/FB options (D24: P8 engine-level fix) ──
  // Seeded by step index so order is stable within a session but varies per step.
  // Prevents answer from always appearing at position A regardless of content order.
  const shuffleOpts=(opts,seed)=>{
    if(!opts||opts.length<=1) return opts||[];
    const a=[...opts];
    let s=((seed+1)*2654435761)>>>0;
    for(let i=a.length-1;i>0;i--){
      s=((s*1664525+1013904223)>>>0);
      const j=s%(i+1);
      [a[i],a[j]]=[a[j],a[i]];
    }
    return a;
  };

  // Non-ASCII → purple | ALL-CAPS keywords → teal | 'quoted sounds' → teal | phonetic values → teal
  const TEAL_WORDS=/\b(RIGHT|LEFT|TOP|BOTTOM|BELOW|ABOVE|UP|DOWN|HORIZONTAL|VERTICAL|ONLY|NEVER|ALWAYS|NOT|SILENT|INITIAL|INSIDE|ZERO|MUST)\b/;
  const SOUND_VALS=/\b(ah|oh|oo|uh|ee|ng)\b/gi;
  // ════════════════════════════════════════════════════════════
  // KOREAN WORD DICTIONARY — clickable bubble system
  // Every core word from U1–U6. Schema:
  //   base: primary English meaning
  //   morph: morpheme breakdown (Sino-Korean or compound)
  //   particle: particles this word commonly takes
  //   uses: [{k, e}] — 3 real example uses
  //   note: optional extra pedagogical note
  //   level: A1 / A2 / B1
  // ════════════════════════════════════════════════════════════
  const KOREAN_DICT = {
    // ── PRONOUNS & BASIC WORDS ──
    "저": {base:"I / me (polite)",morph:"Native Korean",particle:"는 (topic) / 가 (subject) / 를 (object)",uses:[{k:"저는 학생이에요.",e:"I am a student."},{k:"저를 도와주세요.",e:"Please help me."},{k:"저도 몰라요.",e:"I don't know either."}],note:"Formal/polite 'I'. Use with elders and strangers. Casual form: 나 .",level:"A1"},
    "나": {base:"I / me (casual)",morph:"Native Korean",particle:"는 / 가 / 를",uses:[{k:"나는 학생이야.",e:"I'm a student. (casual)"},{k:"나도 갈게.",e:"I'll go too. (casual)"},{k:"나한테 줘.",e:"Give it to me. (casual)"}],note:"Casual 'I'. Only use with close friends, younger people, or kids. Never with elders.",level:"A1"},
    "우리": {base:"our / my (collective)",morph:"Native Korean  -  collectivist pronoun",particle:"의 (possessive, often dropped)",uses:[{k:"우리 엄마가 요리해요.",e:"My mom cooks."},{k:"우리 학교는 커요.",e:"My/our school is big."},{k:"우리 나라가 좋아요.",e:"I love my country."}],note:"Koreans say 우리 엄마 (our mom) where English says 'my mom'. Reflects group-first culture.",level:"A1"},
    "제": {base:"my (polite)",morph:"저 + 의 contracted",particle:" -  (possessive prefix)",uses:[{k:"제 이름은 사라예요.",e:"My name is Sara."},{k:"제 가방이 없어요.",e:"My bag is gone."},{k:"제 생각에는요...",e:"In my opinion..."}],note:"Polite possessive. 제 = 저의 contracted. Use with elders and strangers.",level:"A1"},
    "이것": {base:"this (thing)",morph:"이 (this/near speaker) + 것 (thing)",particle:"은/는 이 / 이/가 / 을/를",uses:[{k:"이것은 뭐예요?",e:"What is this?"},{k:"이것을 주세요.",e:"Please give me this."},{k:"이것이 제 책이에요.",e:"This is my book."}],note:"것 is one of the most frequent Korean words. 이것/그것/저것 = 3-level distance system.",level:"A1"},
    "그것": {base:"that (thing near you)",morph:"그 (that/near listener) + 것 (thing)",particle:"은/는 / 이/가 / 을/를",uses:[{k:"그것이 뭐예요?",e:"What is that (near you)?"},{k:"그것 주세요.",e:"Please give me that."},{k:"그것도 있어요.",e:"That is also available."}],note:"그 = near the listener (2nd person). English collapses 이/그/저 into just 'this/that'.",level:"A1"},
    "저것": {base:"that (thing over there)",morph:"저 (that/far) + 것 (thing)",particle:"은/는 / 이/가 / 을/를",uses:[{k:"저것은 뭐예요?",e:"What is that over there?"},{k:"저것이 더 싸요.",e:"That over there is cheaper."},{k:"저것 좀 보여주세요.",e:"Please show me that."}],note:"저 = far from both speaker and listener. The 3rd level English lacks.",level:"A1"},
    // ── EXISTENCE / POSSESSION ──
    "있어요": {base:"there is / I have / is (at location)",morph:"있다 (to exist) + 어요 (polite ending)",particle:"이/가 있어요 (subject), 에 있어요 (location)",uses:[{k:"커피가 있어요.",e:"There is coffee."},{k:"저는 차가 있어요.",e:"I have a car."},{k:"선생님이 교실에 있어요.",e:"The teacher is in the classroom."}],note:"있다 does the job of 3 English verbs: 'there is', 'I have', 'someone is somewhere'.",level:"A1"},
    "없어요": {base:"there is not / I don't have / is not (at location)",morph:"없다 (to not exist) + 어요 (polite ending)",particle:"이/가 없어요 / 에 없어요",uses:[{k:"시간이 없어요.",e:"There is no time."},{k:"차가 없어요.",e:"I don't have a car."},{k:"화장실이 없어요?",e:"There's no bathroom?"}],note:"Exact inverse of 있어요. Pair them in memory: 있다 ↔ 없다.",level:"A1"},
    "있다": {base:"to exist / to have",morph:"있 (stem) + 다 (dictionary suffix)",particle:"이/가 있다 / 에 있다",uses:[{k:"돈이 있다.",e:"There is money."},{k:"집에 있다.",e:"(I'm) at home."},{k:"시간이 있어요?",e:"Do you have time?"}],note:"Dictionary form. Drop -다, add -어요 for polite speech → 있어요.",level:"A1"},
    "없다": {base:"to not exist / to not have",morph:"없 (stem) + 다 (dictionary suffix)",particle:"이/가 없다",uses:[{k:"돈이 없다.",e:"There is no money."},{k:"이유가 없다.",e:"There is no reason."},{k:"시간이 없어요.",e:"I don't have time."}],note:"Irregular  -  the stem 없 is indivisible. Used to build: 재미없다, 맛없다, 멋없다.",level:"A1"},
    // ── VERBS — CORE ──
    "이에요": {base:"am / is / are (after consonant)",morph:"이 (copula) + 에요 (polite suffix)",particle:"[noun]이에요",uses:[{k:"학생이에요.",e:"I'm a student."},{k:"책이에요.",e:"It's a book."},{k:"서울이에요.",e:"It's Seoul."}],note:"Use after a noun ending in a CONSONANT. 'Copula' = the verb to-be. The verb ALWAYS goes last.",level:"A1"},
    "예요": {base:"am / is / are (after vowel)",morph:"이에요 contracted when stem ends in vowel",particle:"[noun]예요",uses:[{k:"엠마예요.",e:"I'm Emma."},{k:"커피예요.",e:"It's coffee."},{k:"카페예요.",e:"It's a café."}],note:"Same meaning as 이에요  -  use after nouns ending in a VOWEL. The -요 is always the polite marker.",level:"A1"},
    "아니에요": {base:"am not / is not",morph:"아니다 (to not be) + 에요 (polite)",particle:"[noun]이/가 아니에요",uses:[{k:"학생이 아니에요.",e:"I'm not a student."},{k:"이게 아니에요.",e:"It's not this."},{k:"거짓말이 아니에요.",e:"It's not a lie."}],note:"The subject before 아니에요 takes 이/가 (not 은/는). 아니요 (standalone 'no') is different.",level:"A1"},
    "해요": {base:"do / does",morph:"하다 (to do) + 아요 → 해요 (contraction)",particle:"[noun]을/를 해요",uses:[{k:"공부해요.",e:"I study."},{k:"뭐 해요?",e:"What are you doing?"},{k:"운동해요.",e:"I exercise."}],note:"하다 + 어요 contracts to 해요. Most -하다 verbs conjugate this way.",level:"A1"},
    "가요": {base:"go / goes",morph:"가다 (to go) + 아요 → 가요",particle:"에 가요 (destination)",uses:[{k:"학교에 가요.",e:"I go to school."},{k:"어디 가요?",e:"Where are you going?"},{k:"같이 가요.",e:"Let's go together."}],note:"가다 stem is 가 (pure vowel). Add 요 directly → 가요. One of the most used Korean verbs.",level:"A1"},
    "와요": {base:"come / comes",morph:"오다 (to come) + 아요 → 와요 (contraction)",particle:"에 와요 / 에서 와요",uses:[{k:"학교에 와요.",e:"(I/you) come to school."},{k:"어디서 와요?",e:"Where do you come from?"},{k:"빨리 와요!",e:"Come quickly!"}],note:"오 + 아요 contracts to 와요. Irregular-looking but follows the vowel harmony rule.",level:"A1"},
    "먹어요": {base:"eat / eats",morph:"먹다 (to eat) + 어요",particle:"을/를 먹어요",uses:[{k:"밥을 먹어요.",e:"I eat rice/a meal."},{k:"뭐 먹어요?",e:"What are you eating?"},{k:"잘 먹겠습니다.",e:"I will eat well. (before meal)"}],note:"먹 stem ends in dark vowel ㅓ → takes -어요. One of the highest-frequency Korean verbs.",level:"A1"},
    "마셔요": {base:"drink / drinks",morph:"마시다 (to drink) + 어요 → 마셔요",particle:"을/를 마셔요",uses:[{k:"커피를 마셔요.",e:"I drink coffee."},{k:"물을 마셔요.",e:"I drink water."},{k:"뭐 마셔요?",e:"What are you drinking?"}],note:"마시 + 어 contracts to 마셔. 이+어 → 여 is a standard Korean contraction.",level:"A1"},
    "알아요": {base:"know",morph:"알다 (to know) + 아요 → 알아요",particle:"을/를 알아요 / [clause] 알아요",uses:[{k:"알아요.",e:"I know. / I understand."},{k:"그 사람 알아요?",e:"Do you know that person?"},{k:"뭐 알아요?",e:"What do you know?"}],note:"알다 is ㄹ-irregular in some forms but 알아요 is regular. Pair with 몰라요 (don't know).",level:"A1"},
    "몰라요": {base:"don't know",morph:"모르다 (to not know) → 몰라요 (ㄹ contraction)",particle:"을/를 몰라요 / [clause] 몰라요",uses:[{k:"몰라요.",e:"I don't know."},{k:"그 사람을 몰라요.",e:"I don't know that person."},{k:"진짜 몰라요.",e:"I really don't know."}],note:"⚡ Preview: 모르다 → 몰라요, NOT 모르어요. The stem transforms. Full pattern in a later lesson.",level:"A1"},
    "주세요": {base:"please give (me)",morph:"주다 (give) + 세요 (polite request suffix)",particle:"[thing]을/를 주세요",uses:[{k:"물 주세요.",e:"Water, please."},{k:"메뉴 주세요.",e:"Menu, please."},{k:"영수증 주세요.",e:"Receipt, please."}],note:"주다 → 주세요 = 'please give'. The most useful single request phrase in Korean.",level:"A1"},
    "좋아요": {base:"good / I like",morph:"좋다 (to be good) + 아요",particle:"이/가 좋아요",uses:[{k:"이게 좋아요.",e:"This is good. / I like this."},{k:"뭐가 좋아요?",e:"What do you like?"},{k:"날씨가 좋아요.",e:"The weather is good."}],note:"좋다 means BOTH 'to be good' and 'to like'. 좋아요 = 'is good' and '(I) like (it)'.",level:"A1"},
    "싫어요": {base:"dislike / don't want",morph:"싫다 (to dislike) + 어요",particle:"이/가 싫어요",uses:[{k:"이거 싫어요.",e:"I don't like this."},{k:"밥 싫어요.",e:"I don't want rice."},{k:"공부가 싫어요.",e:"I dislike studying."}],note:"Stronger than 안 좋아요 (not good). More emotional/direct expression of dislike.",level:"A1"},
    "해요체": {base:"polite speech level",morph:"해요 (do-politely) + 체 (style/body)",particle:" - ",uses:[{k:"해요체를 써요.",e:"I use polite speech."},{k:"해요체가 제일 안전해요.",e:"Polite speech is the safest."},{k:"해요체로 말하세요.",e:"Please speak in the polite style."}],note:"The 7 Korean speech levels. 해요체 is the safe default for ALL adult interactions.",level:"A1"},
    // ── NEGATION ──
    "안": {base:"not (pre-verbal negation  -  choice/preference)",morph:"Native Korean  -  adverb",particle:"안 + [verb]",uses:[{k:"안 가요.",e:"I'm not going. (choice)"},{k:"안 먹어요.",e:"I don't eat it. (preference)"},{k:"안 해요.",e:"I'm not doing it."}],note:"안 goes BEFORE the verb. Expresses choice or preference. Use 못 for inability.",level:"A1"},
    "못": {base:"cannot (inability)",morph:"Native Korean  -  adverb",particle:"못 + [verb]",uses:[{k:"못 가요.",e:"I can't go. (unable)"},{k:"못 먹어요.",e:"I can't eat it. (allergy/physical)"},{k:"못 해요.",e:"I can't do it."}],note:"못 = physical/circumstantial inability. 안 = won't. The distinction matters in Korean.",level:"A1"},
    "지않아요": {base:"do not (formal negation)",morph:"지 않다 (verb suffix + not-do) + 아요",particle:"[verb stem] + 지 않아요",uses:[{k:"가지 않아요.",e:"I do not go. (formal)"},{k:"먹지 않아요.",e:"I do not eat."},{k:"이해하지 않아요.",e:"I do not understand."}],note:"More formal/emphatic than 안. Used in writing, formal speech. Same meaning as 안 + verb.",level:"A1"},
    "지못해요": {base:"cannot (formal inability)",morph:"지 못하다 (verb suffix + unable-to-do) + 아요",particle:"[verb stem] + 지 못해요",uses:[{k:"가지 못해요.",e:"I cannot go."},{k:"먹지 못해요.",e:"I cannot eat."},{k:"이해하지 못해요.",e:"I cannot understand."}],note:"Formal version of 못 + verb. 수영을 못해요 = 수영하지 못해요. Same meaning, different register.",level:"A1"},
    // ── PARTICLES ──
    "은": {base:"topic marker (after consonant)",morph:"은  -  topic particle",particle:"[consonant-ending noun] + 은",uses:[{k:"밥은 맛있어요.",e:"As for rice, it's delicious."},{k:"저는 학생이에요.",e:"As for me, I'm a student."},{k:"오늘은 바빠요.",e:"As for today, I'm busy."}],note:"Sets the topic. Implies contrast: '저는 (not you)'. After vowels → 는.",level:"A1"},
    "는": {base:"topic marker (after vowel)",morph:"는  -  topic particle",particle:"[vowel-ending noun] + 는",uses:[{k:"저는 학생이에요.",e:"I am a student."},{k:"커피는 비싸요.",e:"As for coffee, it's expensive."},{k:"한국어는 재미있어요.",e:"As for Korean, it's interesting."}],note:"Same as 은 but after vowel-ending words. Sets topic, shows contrast, marks known info.",level:"A1"},
    "이": {base:"subject marker (after consonant)",morph:"이  -  subject particle",particle:"[consonant-ending noun] + 이",uses:[{k:"학생이 왔어요.",e:"A student came. (new info)"},{k:"시간이 없어요.",e:"There is no time."},{k:"누가 왔어요? 제가 왔어요.",e:"Who came? I came. (emphasis)"}],note:"Marks the doer or new info. Contrast with 은/는 (topic). After vowels → 가.",level:"A1"},
    "가": {base:"① subject particle  ② verb stem (가다 = to go)",morph:"가 is genuinely two things  -  context determines which",particle:"[vowel noun]+가 (particle) · 가+요=가요 (verb)",uses:[{k:"커피가 있어요.",e:"① There is coffee.  -  가 = subject particle"},{k:"학교에 가요.",e:"② I go to school.  -  가 = stem of 가다 (to go)"},{k:"뭐가 좋아요?",e:"① What do you like?  -  가 = subject particle"}],note:"This ambiguity is REAL Korean. When 가 follows a noun → particle. When 가 precedes 요/서/면/고 → verb stem of 가다 (to go). Korean speakers feel the difference instantly  -  you will too.",level:"A1"},
    "을": {base:"object marker (after consonant)",morph:"을  -  object particle",particle:"[consonant-ending noun] + 을",uses:[{k:"밥을 먹어요.",e:"I eat rice. (object)"},{k:"책을 읽어요.",e:"I read a book."},{k:"한국어를... wait: 수영을 해요.",e:"I swim. (수영 ends in a consonant = consonant)"}],note:"Marks what the verb acts on. Often dropped in casual speech. After vowels → 를.",level:"A1"},
    "를": {base:"object marker (after vowel)",morph:"를  -  object particle",particle:"[vowel-ending noun] + 를",uses:[{k:"커피를 마셔요.",e:"I drink coffee."},{k:"영화를 봐요.",e:"I watch a movie."},{k:"한국어를 배워요.",e:"I learn Korean."}],note:"Same as 을 but after vowel-ending words. Check the LAST syllable's final consonant.",level:"A1"},
    "에": {base:"to / at / in (location or destination or time)",morph:"에  -  locative/directional particle",particle:"[place]에 있어요 / [place]에 가요 / [time]에",uses:[{k:"학교에 가요.",e:"I go to school."},{k:"집에 있어요.",e:"I'm at home."},{k:"세 시에 만나요.",e:"Let's meet at 3 o'clock."}],note:"에 marks WHERE something IS, WHERE you're GOING, and WHEN. Does NOT mark where you DO things → 에서.",level:"A1"},
    "에서": {base:"at / from (action location or origin)",morph:"에서  -  action locative particle",particle:"[place]에서 [action verb]",uses:[{k:"학교에서 공부해요.",e:"I study at school."},{k:"카페에서 일해요.",e:"I work at the café."},{k:"서울에서 왔어요.",e:"I came from Seoul."}],note:"에서 = where you DO things. Test: is there an action verb? Yes → 에서. Also means 'from'.",level:"A1"},
    "도": {base:"also / too / either",morph:"도  -  additive particle",particle:"[noun] + 도 (REPLACES 은/는, 이/가)",uses:[{k:"저도 학생이에요.",e:"I'm also a student."},{k:"커피도 있어요.",e:"Coffee is also available."},{k:"저도 몰라요.",e:"I don't know either."}],note:"도 REPLACES 은/는 or 이/가  -  it never stacks. 저는도 ✗ / 저도 ✓",level:"A1"},
    "의": {base:"possessive particle (of / 's)",morph:"의  -  genitive particle",particle:"[noun] + 의 + [noun]",uses:[{k:"제 친구의 이름이에요.",e:"It's my friend's name."},{k:"한국의 음식이 맛있어요.",e:"Korea's food is delicious."},{k:"엄마의 핸드폰이에요.",e:"It's mom's phone."}],note:"의 is often DROPPED in casual speech: 엄마의 이름 → 엄마 이름 (same meaning, more natural).",level:"A1"},
    "로": {base:"by / toward / via (direction or means)",morph:"(으)로  -  directional/instrumental particle",particle:"[consonant]으로 / [vowel or ㄹ]로",uses:[{k:"버스로 가요.",e:"I go by bus."},{k:"왼쪽으로 가세요.",e:"Go to the left."},{k:"한국어로 말해요.",e:"Speak in Korean."}],note:"(으)로 = by means of / in the direction of. 으로 after consonant (except ㄹ), 로 after vowel or ㄹ.",level:"A1"},
    // ── CORE NOUNS ──
    "밥": {base:"rice / meal / food in general",morph:"Native Korean",particle:"을/를 먹어요",uses:[{k:"밥 먹었어요?",e:"Did you eat? (=How are you?)"},{k:"밥을 먹어요.",e:"I eat a meal."},{k:"밥이 맛있어요.",e:"The food is delicious."}],note:"밥 = literally cooked rice, but culturally = any meal. 밥 먹었어요? is how Koreans say 'How are you?'",level:"A1"},
    "물": {base:"water",morph:"Native Korean",particle:"을 마셔요",uses:[{k:"물 주세요.",e:"Water, please."},{k:"물을 마셔요.",e:"I drink water."},{k:"물이 차가워요.",e:"The water is cold."}],note:"물 ends in consonant ㄹ → 물을 (object marker). Don't let the ㄹ fool you.",level:"A1"},
    "커피": {base:"coffee",morph:"Konglish  -  from English 'coffee'",particle:"를 마셔요",uses:[{k:"커피를 마셔요.",e:"I drink coffee."},{k:"커피 한 잔 주세요.",e:"One coffee, please."},{k:"아이스 커피요.",e:"Iced coffee, please."}],note:"커피 = Konglish pronunciation of 'coffee'. Korea has one of the world's highest café densities.",level:"A1"},
    "학교": {base:"school",morph:"학(學/study) + 교(校/school)  -  Sino-Korean",particle:"에 가요 / 에서 공부해요",uses:[{k:"학교에 가요.",e:"I go to school."},{k:"학교에서 공부해요.",e:"I study at school."},{k:"우리 학교가 좋아요.",e:"I like my/our school."}],note:"학 reappears in: 대학교 (university), 학원 (academy), 학생 (student).",level:"A1"},
    "집": {base:"house / home",morph:"Native Korean",particle:"에 있어요 / 에 가요",uses:[{k:"집에 있어요.",e:"I'm at home."},{k:"집에 가요.",e:"I go home."},{k:"우리 집이 커요.",e:"My house is big."}],note:"우리 집 (my house) not 나의 집. 집 = home as a concept, not just a building.",level:"A1"},
    "학생": {base:"student",morph:"학(學/study) + 생(生/person)  -  Sino-Korean",particle:"이에요 / 이/가",uses:[{k:"저는 학생이에요.",e:"I am a student."},{k:"학생이 왔어요.",e:"A student came."},{k:"학생들이 많아요.",e:"There are many students."}],note:"학 = study, 생 = life/person. 학생들 = students (들 = plural marker, optional in Korean).",level:"A1"},
    "선생님": {base:"teacher",morph:"선생(先生/teacher) + 님(honorific suffix)",particle:"이/가 / 께서 (super-honorific)",uses:[{k:"선생님이 오셨어요.",e:"The teacher came."},{k:"선생님, 질문 있어요.",e:"Teacher, I have a question."},{k:"우리 선생님이 좋아요.",e:"I like our teacher."}],note:"님 = honorific suffix showing respect. 선생 alone is informal. 선생님 is the safe form.",level:"A1"},
    "이름": {base:"name",morph:"Native Korean",particle:"이/가 뭐예요?",uses:[{k:"이름이 뭐예요?",e:"What is your name?"},{k:"제 이름은 사라예요.",e:"My name is Sara."},{k:"이름을 써 주세요.",e:"Please write your name."}],note:"이름이 뭐예요? = Survival question #1. Koreans often introduce by family name first.",level:"A1"},
    "뭐": {base:"what",morph:"Short for 무엇 (mu-eot)  -  spoken form",particle:"이/가 / 을/를",uses:[{k:"이게 뭐예요?",e:"What is this?"},{k:"뭐 먹어요?",e:"What are you eating?"},{k:"뭐가 좋아요?",e:"What do you like?"}],note:"뭐 is the casual spoken form of 무엇. Used in ~90% of daily questions. One of the top-10 Korean words.",level:"A1"},
    "어디": {base:"where",morph:"Native Korean question word",particle:"어디에 / 어디에서",uses:[{k:"어디 가요?",e:"Where are you going?"},{k:"어디에 있어요?",e:"Where is it?"},{k:"어디서 왔어요?",e:"Where did you come from?"}],note:"어디에 = at where (static) / 어디에서 = from where or doing where. Critical for directions.",level:"A1"},
    "왜": {base:"why",morph:"Native Korean question word",particle:"왜 [verb]?",uses:[{k:"왜요?",e:"Why?"},{k:"왜 안 가요?",e:"Why aren't you going?"},{k:"왜 그래요?",e:"Why are you like that?"}],note:"왜요 alone is a complete, natural question. Can sound confrontational  -  tone matters.",level:"A1"},
    "언제": {base:"when",morph:"Native Korean question word",particle:"언제 [verb]?",uses:[{k:"언제 가요?",e:"When are you going?"},{k:"언제 왔어요?",e:"When did you come?"},{k:"언제가 좋아요?",e:"When is good for you?"}],note:"Time question. Pairs with 에: 언제에 → 언제 (에 is usually dropped with question words).",level:"A1"},
    "얼마나": {base:"how much / how many / how long",morph:"얼마 (how much) + 나 (emphatic)",particle:"얼마나 [adjective]?",uses:[{k:"얼마나 멀어요?",e:"How far is it?"},{k:"얼마나 걸려요?",e:"How long does it take?"},{k:"얼마나 자주 와요?",e:"How often do you come?"}],note:"얼마 alone = how much money? 얼마나 = to what degree/extent (for adjectives and verbs).",level:"A1"},
    "얼마예요": {base:"how much is it? (price)",morph:"얼마 (how much) + 예요 (is)",particle:"이거 얼마예요?",uses:[{k:"얼마예요?",e:"How much is it?"},{k:"이거 얼마예요?",e:"How much is this?"},{k:"다해서 얼마예요?",e:"How much is it in total?"}],note:"Survival shopping phrase. 얼마 = how much money. 얼마나 = how much (degree).",level:"A1"},
    // ── FOOD & RESTAURANT ──
    "맛있어요": {base:"delicious / tastes good",morph:"맛(taste) + 있다(exists) + 어요",particle:"이/가 맛있어요",uses:[{k:"정말 맛있어요!",e:"Really delicious!"},{k:"뭐가 맛있어요?",e:"What's good here?"},{k:"여기 음식이 맛있어요.",e:"The food here is delicious."}],note:"맛있다 = 'taste exists'. 맛없다 = 'taste doesn't exist' = tasteless. LEGO compound.",level:"A1"},
    "맛없어요": {base:"not tasty / tasteless",morph:"맛(taste) + 없다(doesn't exist) + 어요",particle:"이/가 맛없어요",uses:[{k:"이게 맛없어요.",e:"This doesn't taste good."},{k:"라면이 맛없어요.",e:"The ramen is bad."},{k:"왜 맛없어요?",e:"Why doesn't it taste good?"}],note:"Don't say this about food someone cooked for you! Try: 맛이 좀 특이해요 (the taste is unique).",level:"A1"},
    "잘": {base:"well / properly / skillfully",morph:"Native Korean adverb",particle:"잘 + [verb]",uses:[{k:"잘 먹겠습니다.",e:"I will eat well. (said before eating)"},{k:"잘 먹었습니다.",e:"I ate well. (said after eating)"},{k:"잘 해요.",e:"Does it well."}],note:"잘 먹겠습니다 / 잘 먹었습니다 = the two most important meal phrases in Korean.",level:"A1"},
    "좀": {base:"a bit / please (softener)",morph:"Native Korean  -  softening adverb",particle:"좀 + [verb or adjective]",uses:[{k:"좀 주세요.",e:"Please give me (a bit more polite)."},{k:"좀 기다려요.",e:"Wait a moment."},{k:"좀 빨리 가요.",e:"Go a bit faster."}],note:"좀 softens ANY request and makes you sound more Korean and natural. Use it constantly.",level:"A1"},
    "더": {base:"more",morph:"Native Korean adverb",particle:"더 + [verb/adjective]",uses:[{k:"물 좀 더 주세요.",e:"More water, please."},{k:"더 싸요.",e:"It's cheaper. (more cheap)"},{k:"조금만 더요.",e:"Just a little bit more."}],note:"더 = more (comparison). 더 이상 = no more (used with negative: 더 이상 없어요).",level:"A1"},
    "저기요": {base:"excuse me (to get attention)",morph:"저기 (over there) + 요 (polite)  -  attention call",particle:"standalone exclamation",uses:[{k:"저기요! 메뉴 주세요.",e:"Excuse me! Menu please."},{k:"저기요, 화장실이 어디예요?",e:"Excuse me, where is the bathroom?"},{k:"저기요! 여기요!",e:"Excuse me! Over here!"}],note:"저기요 = 'hey over there!' Used to call restaurant staff, strangers, shopkeepers. Universal.",level:"A1"},
    "주문하다": {base:"to order (food/goods)",morph:"주문(注文/order) + 하다 (to do)",particle:"을/를 주문해요",uses:[{k:"주문할게요.",e:"I'll order now."},{k:"뭐 주문했어요?",e:"What did you order?"},{k:"주문이요!",e:"Order! (calling staff)"}],note:"주문 = Sino-Korean: 주(注/pour) + 문(文/writing). The act of writing/noting an order.",level:"A1"},
    "계산": {base:"bill / payment / calculation",morph:"계산(計算)  -  Sino-Korean: 계(計/count) + 산(算/calculate)",particle:"계산해 주세요",uses:[{k:"계산해 주세요.",e:"Check, please."},{k:"계산서 주세요.",e:"The bill, please."},{k:"카드로 계산해도 돼요?",e:"Can I pay by card?"}],note:"In Korea, you often pay at the counter, not tableside. Say 계산해 주세요 and walk to the register.",level:"A1"},
    "포장": {base:"to-go / takeout / packaging",morph:"포장(包裝)  -  Sino-Korean: 포(包/wrap) + 장(裝/pack)",particle:"포장이요 / 포장해 주세요",uses:[{k:"포장이요.",e:"To go, please."},{k:"포장해 주세요.",e:"Can you pack it to go?"},{k:"포장 가능해요?",e:"Is takeout available?"}],note:"포장 = packaging. Say 포장이요 = to go. 먹고 갈게요 = eating here.",level:"A1"},
    // ── TRANSPORT ──
    "버스": {base:"bus",morph:"Konglish  -  from English 'bus'",particle:"를 타요 / 로 가요",uses:[{k:"버스로 가요.",e:"I go by bus."},{k:"버스를 타요.",e:"I take the bus."},{k:"버스 정류장이 어디예요?",e:"Where is the bus stop?"}],note:"타다 = to ride/board (타요). Use with all transport: 버스를 타다, 택시를 타다, 지하철을 타다.",level:"A1"},
    "지하철": {base:"subway / metro",morph:"지하(地下/underground) + 철(鐵/iron/rail)  -  Sino-Korean",particle:"를 타요",uses:[{k:"지하철로 가요.",e:"I go by subway."},{k:"지하철역이 어디예요?",e:"Where is the subway station?"},{k:"지하철 몇 호선이에요?",e:"Which subway line is it?"}],note:"지하 = underground, 철 = iron/rail. Seoul subway is one of the world's best  -  cheap, fast, clean.",level:"A1"},
    "택시": {base:"taxi",morph:"Konglish  -  from English 'taxi'",particle:"를 타요",uses:[{k:"택시로 가요.",e:"I go by taxi."},{k:"택시를 불러요.",e:"I call a taxi."},{k:"택시 타도 돼요?",e:"Is it okay to take a taxi?"}],note:"KakaoTaxi app is the main taxi hailing app in Korea. Cheaper than many countries.",level:"A1"},
    "역": {base:"(train/subway) station",morph:"역(驛)  -  Sino-Korean: station",particle:"에서 / 앞에서",uses:[{k:"홍대역에서 만나요.",e:"Let's meet at Hongdae Station."},{k:"역이 어디예요?",e:"Where is the station?"},{k:"역 앞에서 봐요.",e:"Let's meet in front of the station."}],note:"역 + 에서 = at the station. Korean subway system: 1호선 (Line 1) through 9호선 (Line 9) in Seoul.",level:"A1"},
    "출구": {base:"exit",morph:"출(出/out) + 구(口/mouth/opening)  -  Sino-Korean",particle:"로 나오세요",uses:[{k:"1번 출구로 나오세요.",e:"Come out exit 1."},{k:"출구가 어디예요?",e:"Where is the exit?"},{k:"홍대역 9번 출구 앞에서 만나요.",e:"Let's meet at Hongdae Station exit 9."}],note:"Korean subway: every station has numbered exits. Meetings are ALWAYS given by exit number, not 'near the station'.",level:"A1"},
    "타다": {base:"to ride / to board (transport)",morph:"Native Korean verb",particle:"[transport]를 타요",uses:[{k:"버스를 타요.",e:"I take the bus."},{k:"자전거를 타요.",e:"I ride a bicycle."},{k:"어디서 타요?",e:"Where do I board?"}],note:"타다 = to ride/board. Works for all transport and vehicles. Opposite: 내리다 (to get off).",level:"A1"},
    // ── FAMILY ──
    "엄마": {base:"mom (casual)",morph:"Native Korean",particle:"이/가",uses:[{k:"우리 엄마가 요리해요.",e:"My mom cooks."},{k:"엄마!",e:"Mom!"},{k:"엄마한테 물어봐.",e:"Ask mom."}],note:"엄마 = casual. 어머니 = formal/respectful. 우리 엄마 (not 나의 엄마) is natural Korean.",level:"A1"},
    "아빠": {base:"dad (casual)",morph:"Native Korean  -  tense consonant ㅃ",particle:"이/가",uses:[{k:"아빠가 어디 있어요?",e:"Where is dad?"},{k:"아빠!",e:"Dad!"},{k:"우리 아빠가 의사예요.",e:"My dad is a doctor."}],note:"아빠 = casual. 아버지 = formal. The ㅃ (tense b) sounds clipped/forceful  -  it's not just ㅂ.",level:"A1"},
    "어머니": {base:"mother (formal)",morph:"Native Korean",particle:"이/가 / 께서 (super-honorific)",uses:[{k:"어머니, 안녕하세요.",e:"Hello, mother/ma'am."},{k:"어머니가 오셨어요.",e:"Mother has come."},{k:"친구 어머니예요.",e:"It's my friend's mother."}],note:"Use 어머니 when talking ABOUT others' mothers or in formal settings. Use 엄마 for your own mom casually.",level:"A1"},
    "아버지": {base:"father (formal)",morph:"Native Korean",particle:"이/가 / 께서 (super-honorific)",uses:[{k:"아버지가 집에 계세요.",e:"Father is at home."},{k:"친구 아버지예요.",e:"It's my friend's father."},{k:"아버지, 여기요.",e:"Father, over here."}],note:"More formal than 아빠. Use when talking about someone else's father or in respectful contexts.",level:"A1"},
    "형": {base:"older brother (said by males)",morph:"Native Korean",particle:"이/가 / 형!",uses:[{k:"형, 배고파.",e:"Bro, I'm hungry. (male to older brother)"},{k:"우리 형이 대학생이에요.",e:"My older brother is a university student."},{k:"형 어디 있어?",e:"Where are you, bro?"}],note:"ONLY males use 형. Females call older brothers 오빠. Also used for close older male friends.",level:"A1"},
    "오빠": {base:"older brother (said by females)",morph:"Native Korean",particle:"이/가 / 오빠!",uses:[{k:"오빠, 도와줘!",e:"Oppa, help me!"},{k:"우리 오빠가 멋있어요.",e:"My older brother is cool."},{k:"오빠라고 불러도 돼요?",e:"Can I call you oppa?"}],note:"ONLY females use 오빠. Famous in K-pop: female fans call male idols 오빠. Carries warmth/closeness.",level:"A1"},
    "누나": {base:"older sister (said by males)",morph:"Native Korean",particle:"이/가 / 누나!",uses:[{k:"우리 누나가 요리사예요.",e:"My older sister is a chef."},{k:"누나, 이거 먹어.",e:"Sis, eat this."},{k:"누나가 예뻐요.",e:"My older sister is pretty."}],note:"ONLY males use 누나. Same grid: Male speaker: 형 (older bro) / 누나 (older sis).",level:"A1"},
    "언니": {base:"older sister (said by females)",morph:"Native Korean",particle:"이/가 / 언니!",uses:[{k:"언니, 어디 가?",e:"Sis, where are you going?"},{k:"우리 언니가 의사예요.",e:"My older sister is a doctor."},{k:"언니라고 불러요.",e:"(People) call her unni."}],note:"ONLY females use 언니. Also used for older female friends, colleagues. Builds 정 (deep bond).",level:"A1"},
    "남동생": {base:"younger brother",morph:"남(男/male) + 동생(same-root younger sibling)",particle:"이/가",uses:[{k:"남동생이 있어요.",e:"I have a younger brother."},{k:"남동생이 중학생이에요.",e:"My younger brother is in middle school."},{k:"남동생한테 줘.",e:"Give it to your younger brother."}],note:"동생 = younger sibling (gender-neutral). 남동생 = male younger sibling. 여동생 = female.",level:"A1"},
    "여동생": {base:"younger sister",morph:"여(女/female) + 동생(younger sibling)",particle:"이/가",uses:[{k:"여동생이 귀여워요.",e:"My younger sister is cute."},{k:"여동생이 초등학생이에요.",e:"My younger sister is in elementary school."},{k:"여동생이 없어요.",e:"I don't have a younger sister."}],note:"동생 alone = younger sibling (any gender). 여동생 specifically = younger female sibling.",level:"A1"},
    // ── ADJECTIVES / DESCRIPTIVES ──
    "크다": {base:"to be big",morph:"크다 → 커요 (polite present)  -  ㅡ-irregular",particle:"이/가 크다",uses:[{k:"집이 커요.",e:"The house is big."},{k:"눈이 커요.",e:"The eyes are big."},{k:"얼마나 커요?",e:"How big is it?"}],note:"크다 → 커요: ㅡ drops before 아/어. This is the 으-pattern, taught in a later lesson.",level:"A1"},
    "작다": {base:"to be small",morph:"작다 → 작아요 (polite present)  -  regular",particle:"이/가 작다",uses:[{k:"방이 작아요.",e:"The room is small."},{k:"이게 너무 작아요.",e:"This is too small."},{k:"작은 가방이에요.",e:"It's a small bag."}],note:"작다 is regular. 작 + 아요 = 작아요. Opposite of 크다. 큰 ↔ 작은 (modifier forms).",level:"A1"},
    "많다": {base:"to be many / a lot",morph:"많다 → 많아요  -  regular",particle:"이/가 많다",uses:[{k:"사람이 많아요.",e:"There are many people."},{k:"시간이 많아요.",e:"There's a lot of time."},{k:"돈이 많아요.",e:"There's a lot of money."}],note:"많이 (adverb) = a lot, very much: 많이 먹어요 (eat a lot). 많다 ≠ 많이.",level:"A1"},
    "비싸다": {base:"to be expensive",morph:"비싸다 → 비싸요  -  regular",particle:"이/가 비싸다",uses:[{k:"이게 비싸요.",e:"This is expensive."},{k:"너무 비싸요.",e:"Too expensive."},{k:"왜 이렇게 비싸요?",e:"Why is it so expensive?"}],note:"Opposite: 싸다 (cheap). 비싸다 / 싸다 are the two core price adjectives.",level:"A1"},
    "싸다": {base:"to be cheap / inexpensive",morph:"싸다 → 싸요  -  regular",particle:"이/가 싸다",uses:[{k:"이게 싸요.",e:"This is cheap."},{k:"더 싼 거 있어요?",e:"Is there a cheaper one?"},{k:"너무 싸요!",e:"So cheap!"}],note:"Also means 'to wrap/pack' (different word, same spelling). Context distinguishes them.",level:"A1"},
    "재미있어요": {base:"interesting / fun",morph:"재미(fun/interest) + 있다(exists) + 어요",particle:"이/가 재미있어요",uses:[{k:"한국어가 재미있어요.",e:"Korean is interesting."},{k:"이 영화가 재미있어요.",e:"This movie is fun."},{k:"뭐가 재미있어요?",e:"What's fun / interesting?"}],note:"재미있다 ↔ 재미없다 (boring). Same LEGO logic as 맛있다 ↔ 맛없다.",level:"A1"},
    "어렵다": {base:"to be difficult",morph:"어렵다 → 어려워요 (ㅂ-irregular)",particle:"이/가 어렵다",uses:[{k:"한국어가 어려워요.",e:"Korean is difficult."},{k:"시험이 어려워요.",e:"The exam is hard."},{k:"이게 왜 이렇게 어려워요?",e:"Why is this so hard?"}],note:"⚡ ㅂ-irregular: 어렵 + 아/어요 → 어려워요 (ㅂ→우). Taught fully in a later lesson.",level:"A1"},
    "쉽다": {base:"to be easy",morph:"쉽다 → 쉬워요 (ㅂ-irregular)",particle:"이/가 쉽다",uses:[{k:"이게 쉬워요.",e:"This is easy."},{k:"생각보다 쉬워요.",e:"Easier than I thought."},{k:"제일 쉬운 게 뭐예요?",e:"What's the easiest thing?"}],note:"⚡ ㅂ-irregular like 어렵다. 쉽 + 어요 → 쉬워요. Opposite of 어렵다.",level:"A1"},
    "덥다": {base:"to be hot (weather/temperature)",morph:"덥다 → 더워요 (ㅂ-irregular)",particle:"날씨가 덥다",uses:[{k:"오늘 날씨가 더워요.",e:"Today's weather is hot."},{k:"너무 더워요!",e:"It's too hot!"},{k:"방이 더워요.",e:"The room is hot."}],note:"⚡ Preview: 덥다 → 더워요 (NOT 덥어요). ㅂ-irregular. Full pattern in a later lesson.",level:"A1"},
    "춥다": {base:"to be cold (weather)",morph:"춥다 → 추워요 (ㅂ-irregular)",particle:"날씨가 춥다",uses:[{k:"오늘 너무 추워요.",e:"It's so cold today."},{k:"밖이 추워요.",e:"It's cold outside."},{k:"겨울이 추워요.",e:"Winter is cold."}],note:"⚡ Preview: 춥다 → 추워요 (NOT 춥어요). Same pattern as 덥다.",level:"A1"},
    "예쁘다": {base:"to be pretty / beautiful",morph:"예쁘다 → 예뻐요 (으-irregular)",particle:"이/가 예쁘다",uses:[{k:"꽃이 예뻐요.",e:"The flower is pretty."},{k:"정말 예뻐요!",e:"Really pretty!"},{k:"예쁜 드레스예요.",e:"It's a pretty dress."}],note:"⚡ 으-irregular: 예쁘 + 어요 → 예뻐요 (ㅡ drops). 예쁜 = modifier form (before noun).",level:"A1"},
    "맵다": {base:"to be spicy",morph:"맵다 → 매워요 (ㅂ-irregular)",particle:"이/가 맵다",uses:[{k:"이게 매워요.",e:"This is spicy."},{k:"너무 매워요!",e:"Too spicy!"},{k:"안 매운 거 있어요?",e:"Is there something not spicy?"}],note:"⚡ ㅂ-irregular: 맵 + 어요 → 매워요. One of the most useful food adjectives in Korean.",level:"A1"},
    "달다": {base:"to be sweet",morph:"달다 → 달아요  -  regular",particle:"이/가 달다",uses:[{k:"이게 달아요.",e:"This is sweet."},{k:"좀 달아요.",e:"It's a bit sweet."},{k:"너무 달아요.",e:"Too sweet."}],note:"달다 is a ㄹ-irregular verb in some forms but 달아요 is the standard polite form.",level:"A1"},
    "짜다": {base:"to be salty",morph:"짜다 → 짜요  -  regular",particle:"이/가 짜다",uses:[{k:"이 국이 짜요.",e:"This soup is salty."},{k:"너무 짜요.",e:"Too salty."},{k:"짜지 않아요.",e:"It's not salty."}],note:"짜다 also means 'to squeeze/wring'. Context distinguishes. In food context always = salty.",level:"A1"},
    // ── NUMBERS & TIME ──
    "시": {base:"o'clock (counter for hours)",morph:"시(時)  -  Sino-Korean time counter",particle:"Native numbers + 시",uses:[{k:"몇 시예요?",e:"What time is it?"},{k:"세 시예요.",e:"It's 3 o'clock."},{k:"열두 시에 만나요.",e:"Let's meet at 12 o'clock."}],note:"Hours use NATIVE Korean numbers: 한 시, 두 시, 세 시... (not 일 시, 이 시). Mix with Sino for minutes.",level:"A1"},
    "분": {base:"minute (counter)",morph:"분(分)  -  Sino-Korean minute counter",particle:"Sino numbers + 분",uses:[{k:"10분 후에 와요.",e:"Come in 10 minutes."},{k:"삼십 분이에요.",e:"It's 30 minutes."},{k:"잠깐만요, 5분만요.",e:"Just a moment, just 5 minutes."}],note:"Minutes use SINO-KOREAN numbers: 십 분, 이십 분, 삼십 분. 반 = half: 세 시 반 = 3:30.",level:"A1"},
    "개": {base:"counter for general objects",morph:"개(個)  -  Sino-Korean general counter",particle:"Native numbers + 개",uses:[{k:"사과 세 개 주세요.",e:"Three apples, please."},{k:"두 개 있어요.",e:"There are two."},{k:"몇 개예요?",e:"How many (things) are there?"}],note:"개 = the most versatile counter. When unsure which counter to use, 개 is usually safe.",level:"A1"},
    "명": {base:"counter for people",morph:"명(名)  -  Sino-Korean person counter",particle:"Native numbers + 명",uses:[{k:"두 명이에요.",e:"There are two people."},{k:"몇 명이에요?",e:"How many people?"},{k:"한 명만요.",e:"Just one person."}],note:"명 = plain counter for people. 분 = polite/honorific version (두 분이세요? in restaurants).",level:"A1"},
    "잔": {base:"counter for cups/glasses",morph:"잔(盞)  -  Sino-Korean drink counter",particle:"Native numbers + 잔",uses:[{k:"커피 한 잔 주세요.",e:"One coffee, please."},{k:"두 잔이요.",e:"Two cups."},{k:"맥주 세 잔이요.",e:"Three beers."}],note:"커피 한 잔 주세요 = THE coffee order phrase in Korea. 잔 = cups, glasses, drinks.",level:"A1"},
    "원": {base:"Korean currency unit (won)",morph:"원(圓)  -  Sino-Korean",particle:"[number] + 원",uses:[{k:"얼마예요? 오천 원이에요.",e:"How much? It's 5,000 won."},{k:"만 원 있어요?",e:"Do you have 10,000 won?"},{k:"이십 퍼센트 할인이에요.",e:"It's a 20% discount."}],note:"만 (10,000) is the basic mental unit for Korean money. Think in 만, not in 천.",level:"A1"},
    // ── DIRECTIONS ──
    "왼쪽": {base:"left (side)",morph:"왼 (left) + 쪽 (side/direction)",particle:"으로 / 에",uses:[{k:"왼쪽으로 가세요.",e:"Go to the left."},{k:"왼쪽에 있어요.",e:"It's on the left."},{k:"왼쪽 첫 번째 문이에요.",e:"It's the first door on the left."}],note:"쪽 = side/direction. Reusable suffix: 앞쪽 (front), 뒤쪽 (back), 이쪽 (this way).",level:"A1"},
    "오른쪽": {base:"right (side)",morph:"오른 (right) + 쪽 (side/direction)",particle:"으로 / 에",uses:[{k:"오른쪽으로 가세요.",e:"Go to the right."},{k:"오른쪽에 있어요.",e:"It's on the right."},{k:"오른쪽 끝이에요.",e:"It's at the far right end."}],note:"왼쪽 ↔ 오른쪽. The 쪽 suffix appears in: 앞쪽, 뒤쪽, 이쪽, 저쪽, 그쪽.",level:"A1"},
    "앞": {base:"front / in front",morph:"Native Korean",particle:"에 / 앞에 있어요",uses:[{k:"앞에 있어요.",e:"It's in front."},{k:"학교 앞에서 만나요.",e:"Let's meet in front of the school."},{k:"앞으로 가세요.",e:"Go forward."}],note:"앞 ↔ 뒤 (back). 앞쪽 = front side. 앞으로 = forward (direction).",level:"A1"},
    "뒤": {base:"back / behind",morph:"Native Korean",particle:"에 / 뒤에 있어요",uses:[{k:"뒤에 있어요.",e:"It's behind."},{k:"차 뒤에 있어요.",e:"It's behind the car."},{k:"뒤로 가세요.",e:"Go back."}],note:"앞 ↔ 뒤. 뒤쪽 = back side. Can mean 'behind', 'in back of', 'after' in some contexts.",level:"A1"},
    "위": {base:"above / on top",morph:"Native Korean",particle:"에 있어요",uses:[{k:"책상 위에 있어요.",e:"It's on top of the desk."},{k:"위에 올려놓아요.",e:"Put it on top."},{k:"위층이에요.",e:"It's on the upper floor."}],note:"위 ↔ 아래 (below). 위에 있어요 = is on top of / above.",level:"A1"},
    "아래": {base:"below / under / beneath",morph:"Native Korean (also: 밑)",particle:"에 있어요",uses:[{k:"책상 아래에 있어요.",e:"It's under the desk."},{k:"아래로 내려가요.",e:"Go down."},{k:"아래 층이에요.",e:"It's on the lower floor."}],note:"위 ↔ 아래. 밑 is a synonym. 아래 is slightly more formal, 밑 more casual.",level:"A1"},
    "안": {base:"inside / within",morph:"Native Korean",particle:"에 있어요",uses:[{k:"가방 안에 있어요.",e:"It's inside the bag."},{k:"집 안에 있어요.",e:"It's inside the house."},{k:"안으로 들어오세요.",e:"Please come inside."}],note:"안 ↔ 밖 (outside). DIFFERENT from 안 (negation). Context tells you which 안 it is.",level:"A1"},
    "밖": {base:"outside",morph:"Native Korean",particle:"에 있어요",uses:[{k:"밖에 있어요.",e:"It's outside."},{k:"밖으로 나가세요.",e:"Please go outside."},{k:"밖이 추워요.",e:"It's cold outside."}],note:"안 ↔ 밖. 밖에 = only (in certain phrases): 방법이 없는 것밖에 = there's nothing but...",level:"A1"},
    "옆": {base:"beside / next to",morph:"Native Korean",particle:"에 있어요",uses:[{k:"옆에 앉아요.",e:"Sit next to (me/it)."},{k:"은행 옆에 있어요.",e:"It's next to the bank."},{k:"옆 사람이에요.",e:"It's the person next to (me)."}],note:"옆 is one of the most useful position words for giving and getting directions.",level:"A1"},
    "사이": {base:"between / gap / relationship",morph:"Native Korean",particle:"에 있어요",uses:[{k:"은행과 카페 사이에 있어요.",e:"It's between the bank and the café."},{k:"우리 사이가 좋아요.",e:"Our relationship is good."},{k:"그 사이에 뭐 했어요?",e:"What did you do in between?"}],note:"사이 has TWO meanings: physical 'between' and social 'relationship'. Context distinguishes.",level:"A1"},
    // ── CONNECTORS & ADVERBS ──
    "그래서": {base:"so / therefore / and so",morph:"그래 (like that) + 서 (because/so)",particle:"Sentence + 그래서 + Result",uses:[{k:"배가 고파요. 그래서 밥을 먹어요.",e:"I'm hungry. So I eat."},{k:"비가 와요. 그래서 집에 있어요.",e:"It's raining. So I stay home."},{k:"늦었어요. 그래서 택시를 탔어요.",e:"I was late. So I took a taxi."}],note:"그래서 starts the RESULT sentence. Cause → 그래서 → Effect.",level:"A1"},
    "그런데": {base:"but / however / by the way",morph:"그런 (like that) + 데 (situation/place)",particle:"Sentence + 그런데 + Contrast",uses:[{k:"맛있어요. 그런데 매워요.",e:"It's delicious. But it's spicy."},{k:"갈게요. 그런데 늦을 것 같아요.",e:"I'll go. But I might be late."},{k:"그런데, 이름이 뭐예요?",e:"By the way, what's your name?"}],note:"그런데 = but/however (contrast) OR topic shift ('by the way'). Very common in conversation.",level:"A1"},
    "그러면": {base:"then / in that case / if so",morph:"그러 (do like that) + 면 (if/when)",particle:"Condition + 그러면 + Result",uses:[{k:"배고파요. 그러면 먹어요.",e:"I'm hungry. Then let's eat."},{k:"비가 오면 그러면 택시요.",e:"If it rains, then taxi it is."},{k:"그러면 내일 만나요.",e:"Then let's meet tomorrow."}],note:"그러면 → 그럼 (casual short form). 그럼 is extremely common in conversation.",level:"A1"},
    "아니면": {base:"or / if not",morph:"아니 (not) + 면 (if)  -  Compound",particle:"A + 아니면 + B?",uses:[{k:"버스 아니면 지하철이에요?",e:"Bus or subway?"},{k:"커피 아니면 차요?",e:"Coffee or tea?"},{k:"오늘 아니면 내일요.",e:"Today or tomorrow."}],note:"아니면 = the main 'or' connector in Korean questions. More natural than 또는 in speech.",level:"A1"},
    "하지만": {base:"but / however (formal)",morph:"하지만  -  connector adverb",particle:"Sentence + 하지만 + Contrast",uses:[{k:"비싸요. 하지만 맛있어요.",e:"It's expensive. But it's delicious."},{k:"어려워요. 하지만 재미있어요.",e:"It's hard. But interesting."},{k:"늦었어요. 하지만 왔어요.",e:"I was late. But I came."}],note:"하지만 = more formal than 그런데. Both mean 'but'. 그런데 is more common in speech.",level:"A1"},
    "자주": {base:"often / frequently",morph:"Native Korean adverb",particle:"자주 + [verb]",uses:[{k:"자주 와요.",e:"I come often."},{k:"얼마나 자주요?",e:"How often?"},{k:"자주 먹어요.",e:"I eat it often."}],note:"Frequency scale: 항상 (always) > 자주 (often) > 가끔 (sometimes) > 별로 (not really) > 전혀 (never).",level:"A1"},
    "가끔": {base:"sometimes / occasionally",morph:"Native Korean adverb",particle:"가끔 + [verb]",uses:[{k:"가끔 가요.",e:"I go sometimes."},{k:"가끔 그래요.",e:"It's like that sometimes."},{k:"가끔 생각나요.",e:"I think of it sometimes."}],note:"Frequency: 자주 (often) > 가끔 (sometimes) > 별로 안 (not really).",level:"A1"},
    "보통": {base:"usually / normally / average",morph:"보통(普通)  -  Sino-Korean: 普(general)+通(pass)",particle:"보통 + [verb]",uses:[{k:"보통 7시에 일어나요.",e:"I usually get up at 7."},{k:"보통 어때요?",e:"How is it usually?"},{k:"보통이에요.",e:"It's average / just okay."}],note:"보통 = usually (frequency) AND ordinary/average (adjective). Context tells which.",level:"A1"},
    "별로": {base:"not really / not particularly",morph:"별로  -  always with negative",particle:"별로 + [negative verb]",uses:[{k:"별로 안 좋아요.",e:"Not really good."},{k:"별로예요.",e:"It's not great."},{k:"별로 안 먹어요.",e:"I don't really eat it."}],note:"별로 ALWAYS pairs with a negative. 별로 좋아요 ✗. 별로 안 좋아요 ✓.",level:"A1"},
    "전혀": {base:"not at all / absolutely not",morph:"전혀(全혀)  -  from 전(全/complete) + 혀",particle:"전혀 + [negative verb]",uses:[{k:"전혀 몰라요.",e:"I have absolutely no idea."},{k:"전혀 없어요.",e:"There's absolutely none."},{k:"전혀 안 매워요.",e:"It's not spicy at all."}],note:"전혀 = absolute zero. Always with negative. Stronger than 별로. 전혀 없어요 = absolutely none.",level:"A1"},
    // ── GREETINGS & PHRASES ──
    "안녕하세요": {base:"Hello / Good day (polite)",morph:"안녕(安寧/peace) + 하세요 (please do/are)",particle:"standalone greeting",uses:[{k:"안녕하세요!",e:"Hello!"},{k:"안녕하세요, 저는 사라예요.",e:"Hello, I'm Sara."},{k:"선생님, 안녕하세요.",e:"Hello, teacher."}],note:"The universal Korean greeting for all adults and strangers. 안녕 alone = casual (friends only).",level:"A1"},
    "감사합니다": {base:"Thank you (formal)",morph:"감사(感謝/gratitude) + 합니다 (do-formally)",particle:"standalone phrase",uses:[{k:"감사합니다!",e:"Thank you!"},{k:"정말 감사합니다.",e:"Thank you very much."},{k:"도와주셔서 감사합니다.",e:"Thank you for helping."}],note:"Most formal 'thank you'. 고맙습니다 is warmer/less stiff. Both take 정말 (really) as intensifier.",level:"A1"},
    "고맙습니다": {base:"Thank you (warm, slightly less formal)",morph:"고맙다 (to be grateful) + 습니다",particle:"standalone phrase",uses:[{k:"고맙습니다!",e:"Thank you!"},{k:"정말 고마워요.",e:"I'm really grateful. (casual)"},{k:"고마워!",e:"Thanks! (casual)"}],note:"고맙습니다 is slightly warmer and less stiff than 감사합니다. Both are polite.",level:"A1"},
    "괜찮아요": {base:"it's okay / are you okay / no thanks",morph:"괜찮다 → 괜찮아요",particle:"이/가 괜찮아요",uses:[{k:"괜찮아요.",e:"It's okay. / I'm fine."},{k:"괜찮아요? (to someone)",e:"Are you okay?"},{k:"괜찮아요. (declining offer)",e:"No thank you. (politely declining)"}],note:"괜찮아요 has 3 uses: 1) I'm fine 2) Are you okay? 3) Politely declining. Context is everything.",level:"A1"},
    "죄송합니다": {base:"I'm sorry / excuse me (formal)",morph:"죄송(罪悚/sin-fear) + 합니다 (do-formally)",particle:"standalone apology",uses:[{k:"죄송합니다.",e:"I'm sorry. (formal)"},{k:"늦어서 죄송합니다.",e:"I'm sorry for being late."},{k:"죄송한데요...",e:"I'm sorry but... (softener)"}],note:"죄송합니다 = formal deep apology. 미안해요 = casual sorry. 실례합니다 = 'excuse me' (passing by).",level:"A1"},
    "만나서반갑습니다": {base:"Nice to meet you (formal)",morph:"만나서(having met) + 반갑습니다(glad-formally)",particle:"first meeting phrase",uses:[{k:"만나서 반갑습니다!",e:"Nice to meet you!"},{k:"처음 뵙겠습니다.",e:"Meeting you for the first time. (super formal)"},{k:"반가워요!",e:"Nice to meet you! (casual)"}],note:"만나서 = 'having met'. 반갑다 = glad/pleased. Bow slightly when you say this. Essential first meeting phrase.",level:"A1"},
    "잘부탁드립니다": {base:"I look forward to working with you",morph:"잘(well) + 부탁(favor) + 드립니다(humbly give-formally)",particle:"formal introductory phrase",uses:[{k:"잘 부탁드립니다.",e:"Please take care of me. / Looking forward to working with you."},{k:"앞으로 잘 부탁드립니다.",e:"I look forward to our future relationship."},{k:"잘 부탁해요.",e:"(Casual version) Please take good care of me."}],note:"Untranslatable but critical phrase. Said when joining a team, meeting business partners, or starting any new relationship.",level:"A1"},
    // ── VERB DICTIONARY FORMS (가다 etc  -  prevents particle misread on dict form display) ──
    "가다": {base:"to go (dictionary form)",morph:"가 (stem) + 다 (infinitive suffix)",particle:"에 가다 (destination)",uses:[{k:"학교에 가요.",e:"I go to school."},{k:"어디에 가요?",e:"Where are you going?"},{k:"같이 가요.",e:"Let's go together."}],note:"Dictionary form. Drop 다 → stem 가. Add 요 → 가요. Train metaphor: 가 is the engine.",level:"A1"},
    "오다": {base:"to come (dictionary form)",morph:"오 (stem) + 다 (infinitive suffix)",particle:"에 오다 / 에서 오다",uses:[{k:"학교에 와요.",e:"(I) come to school."},{k:"어디서 와요?",e:"Where do you come from?"},{k:"빨리 와요!",e:"Come quickly!"}],note:"Dictionary form of 와요. 오 + 아요 → 와요 (vowel contraction). Stem: 오.",level:"A1"},
    "먹다": {base:"to eat (dictionary form)",morph:"먹 (stem) + 다 (infinitive suffix)",particle:"을/를 먹다",uses:[{k:"밥을 먹어요.",e:"I eat a meal."},{k:"뭐 먹어요?",e:"What are you eating?"},{k:"잘 먹겠습니다.",e:"I will eat well."}],note:"Dictionary form. 먹 + 어요 → 먹어요. Stem ends in dark vowel ㅓ → takes -어요.",level:"A1"},
    "마시다": {base:"to drink (dictionary form)",morph:"마시 (stem) + 다 (infinitive suffix)",particle:"을/를 마시다",uses:[{k:"커피를 마셔요.",e:"I drink coffee."},{k:"물을 마셔요.",e:"I drink water."},{k:"뭐 마셔요?",e:"What are you drinking?"}],note:"마시 + 어요 → 마셔요. 이+어 → 여 contraction. Dictionary form shown here.",level:"A1"},
    "하다": {base:"to do (dictionary form)",morph:"하 (stem) + 다 (infinitive suffix)",particle:"을/를 하다",uses:[{k:"공부해요.",e:"I study."},{k:"뭐 해요?",e:"What are you doing?"},{k:"운동해요.",e:"I exercise."}],note:"Most frequent Korean verb. 하다 + 어요 contracts to 해요. Powers all [noun]+하다 verbs.",level:"A1"},
    "보다": {base:"to see / to watch (dictionary form)",morph:"보 (stem) + 다 (infinitive suffix)",particle:"을/를 보다",uses:[{k:"영화를 봐요.",e:"I watch a movie."},{k:"뭐 봐요?",e:"What are you watching?"},{k:"한번 봐요.",e:"Take a look."}],note:"보 + 아요 → 봐요. Pure vowel stem. Also means 'to try' in -아/어 보다 form.",level:"A1"},
    "읽다": {base:"to read (dictionary form)",morph:"읽 (stem) + 다 (infinitive suffix)",particle:"을/를 읽다",uses:[{k:"책을 읽어요.",e:"I read a book."},{k:"한국어를 읽어요.",e:"I read Korean."},{k:"신문을 읽어요.",e:"I read the newspaper."}],note:"읽 + 어요 → 읽어요. The ㄱ in 읽 is pronounced only before a vowel.",level:"A1"},
    "쓰다": {base:"to write / to use (dictionary form)",morph:"쓰 (stem) + 다 (infinitive suffix)",particle:"을/를 쓰다",uses:[{k:"한국어를 써요.",e:"I write/use Korean."},{k:"이름을 써 주세요.",e:"Please write your name."},{k:"펜을 써요.",e:"I use a pen."}],note:"쓰 + 어요 → 써요. ㅡ-irregular: ㅡ drops before 아/어. Also means 'to wear (hat/glasses)'.",level:"A1"},
    "알다": {base:"to know (dictionary form)",morph:"알 (stem) + 다 (infinitive suffix)",particle:"을/를 알다",uses:[{k:"알아요.",e:"I know."},{k:"그 사람 알아요?",e:"Do you know that person?"},{k:"뭐 알아요?",e:"What do you know?"}],note:"ㄹ-irregular in some forms. 알아요 is regular. Pair with 모르다 (don't know).",level:"A1"},
    "모르다": {base:"to not know (dictionary form)",morph:"모르 (stem) + 다 (infinitive suffix)",particle:"을/를 모르다",uses:[{k:"몰라요.",e:"I don't know."},{k:"그 사람을 몰라요.",e:"I don't know that person."},{k:"진짜 몰라요.",e:"I really don't know."}],note:"⚡ Preview: 모르다 → 몰라요 (ㄹ-irregular). Drop ㄹ before ㅏ/ㅗ and double: 몰+라요.",level:"A1"},
    "주다": {base:"to give (dictionary form)",morph:"주 (stem) + 다 (infinitive suffix)",particle:"에게 / 한테 주다",uses:[{k:"물 주세요.",e:"Water, please."},{k:"친구한테 줘요.",e:"I give (it) to a friend."},{k:"선물을 줬어요.",e:"I gave a gift."}],note:"주다 → 주세요 = 'please give'. 주 + 어요 → 줘요. Pairs with 받다 (to receive).",level:"A1"},
    "좋다": {base:"to be good / to like (dictionary form)",morph:"좋 (stem) + 다 (infinitive suffix)",particle:"이/가 좋다",uses:[{k:"이게 좋아요.",e:"This is good / I like this."},{k:"뭐가 좋아요?",e:"What do you like?"},{k:"날씨가 좋아요.",e:"The weather is good."}],note:"좋다 = BOTH 'to be good' AND 'to like'. 좋 + 아요 → 좋아요.",level:"A1"},
    "싫다": {base:"to dislike (dictionary form)",morph:"싫 (stem) + 다 (infinitive suffix)",particle:"이/가 싫다",uses:[{k:"이거 싫어요.",e:"I don't like this."},{k:"공부가 싫어요.",e:"I dislike studying."},{k:"밥 싫어요.",e:"I don't want rice."}],note:"싫 + 어요 → 싫어요. More direct/emotional than 안 좋아요.",level:"A1"},
    "있다": {base:"to exist / to have (dictionary form)",morph:"있 (stem) + 다 (infinitive suffix)",particle:"이/가 있다 / 에 있다",uses:[{k:"커피가 있어요.",e:"There is coffee."},{k:"저는 차가 있어요.",e:"I have a car."},{k:"집에 있어요.",e:"I'm at home."}],note:"Dictionary form. Powers 3 English meanings: 'there is', 'I have', 'is somewhere'.",level:"A1"},
    "없다": {base:"to not exist / to not have (dictionary form)",morph:"없 (stem) + 다 (infinitive suffix)",particle:"이/가 없다",uses:[{k:"시간이 없어요.",e:"There is no time."},{k:"돈이 없어요.",e:"I have no money."},{k:"화장실이 없어요?",e:"There's no bathroom?"}],note:"Exact inverse of 있다. Irregular stem 없 is indivisible. Builds: 재미없다, 맛없다.",level:"A1"},
    "크다": {base:"to be big (dictionary form)",morph:"크 (stem) + 다 (infinitive suffix)",particle:"이/가 크다",uses:[{k:"집이 커요.",e:"The house is big."},{k:"눈이 커요.",e:"The eyes are big."},{k:"얼마나 커요?",e:"How big is it?"}],note:"으-irregular: 크다 → 커요. ㅡ drops before 아/어. Contrast with 작다 (small).",level:"A1"},
    "작다": {base:"to be small (dictionary form)",morph:"작 (stem) + 다 (infinitive suffix)",particle:"이/가 작다",uses:[{k:"방이 작아요.",e:"The room is small."},{k:"이게 너무 작아요.",e:"This is too small."},{k:"작은 가방이에요.",e:"It's a small bag."}],note:"Regular. 작 + 아요 → 작아요. 큰 ↔ 작은 (modifier forms).",level:"A1"},
    "많다": {base:"to be many / a lot (dictionary form)",morph:"많 (stem) + 다 (infinitive suffix)",particle:"이/가 많다",uses:[{k:"사람이 많아요.",e:"There are many people."},{k:"시간이 많아요.",e:"There's a lot of time."},{k:"많이 먹어요.",e:"Eat a lot."}],note:"많이 (adverb) = a lot. 많다 ≠ 많이. 많 + 아요 → 많아요.",level:"A1"},
    "비싸다": {base:"to be expensive (dictionary form)",morph:"비싸 (stem) + 다 (infinitive suffix)",particle:"이/가 비싸다",uses:[{k:"이게 비싸요.",e:"This is expensive."},{k:"너무 비싸요.",e:"Too expensive."},{k:"왜 이렇게 비싸요?",e:"Why is it so expensive?"}],note:"비싸 + 아요 → 비싸요. Regular. Opposite: 싸다 (cheap).",level:"A1"},
    "어렵다": {base:"to be difficult (dictionary form)",morph:"어렵 (stem) + 다  -  ㅂ-irregular",particle:"이/가 어렵다",uses:[{k:"한국어가 어려워요.",e:"Korean is difficult."},{k:"시험이 어려워요.",e:"The exam is hard."},{k:"생각보다 어려워요.",e:"Harder than I thought."}],note:"⚡ ㅂ-irregular: 어렵 + 어요 → 어려워요. ㅂ→우 before vowel. Taught fully later.",level:"A1"},
    "쉽다": {base:"to be easy (dictionary form)",morph:"쉽 (stem) + 다  -  ㅂ-irregular",particle:"이/가 쉽다",uses:[{k:"이게 쉬워요.",e:"This is easy."},{k:"생각보다 쉬워요.",e:"Easier than I thought."},{k:"제일 쉬운 게 뭐예요?",e:"What's the easiest?"}],note:"⚡ ㅂ-irregular like 어렵다. 쉽 + 어요 → 쉬워요. Opposite of 어렵다.",level:"A1"},
    "덥다": {base:"to be hot (weather)  -  dictionary form",morph:"덥 (stem) + 다  -  ㅂ-irregular",particle:"날씨가 덥다",uses:[{k:"오늘 날씨가 더워요.",e:"Today's weather is hot."},{k:"너무 더워요!",e:"It's too hot!"},{k:"방이 더워요.",e:"The room is hot."}],note:"⚡ ㅂ-irregular: 덥 + 어요 → 더워요. NOT 덥어요. Full pattern in a later lesson.",level:"A1"},
    "춥다": {base:"to be cold (weather)  -  dictionary form",morph:"춥 (stem) + 다  -  ㅂ-irregular",particle:"날씨가 춥다",uses:[{k:"오늘 너무 추워요.",e:"It's so cold today."},{k:"밖이 추워요.",e:"It's cold outside."},{k:"겨울이 추워요.",e:"Winter is cold."}],note:"⚡ ㅂ-irregular like 덥다. 춥 + 어요 → 추워요. Stem 춥 → 추워.",level:"A1"},
    "맵다": {base:"to be spicy  -  dictionary form",morph:"맵 (stem) + 다  -  ㅂ-irregular",particle:"이/가 맵다",uses:[{k:"이게 매워요.",e:"This is spicy."},{k:"너무 매워요!",e:"Too spicy!"},{k:"안 매운 거 있어요?",e:"Is there something not spicy?"}],note:"⚡ ㅂ-irregular: 맵 + 어요 → 매워요. One of the most useful food adjectives.",level:"A1"},
    "예쁘다": {base:"to be pretty  -  dictionary form",morph:"예쁘 (stem) + 다  -  으-irregular",particle:"이/가 예쁘다",uses:[{k:"꽃이 예뻐요.",e:"The flower is pretty."},{k:"정말 예뻐요!",e:"Really pretty!"},{k:"예쁜 드레스예요.",e:"It's a pretty dress."}],note:"으-irregular: 예쁘 + 어요 → 예뻐요. ㅡ drops. 예쁜 = modifier form.",level:"A1"},
    // ── JOBS & PLACES ──
    "의사": {base:"doctor",morph:"의(醫/medicine) + 사(師/expert)  -  Sino-Korean",particle:"이에요/예요 / 이/가",uses:[{k:"의사예요.",e:"I'm a doctor."},{k:"의사 선생님이에요.",e:"He/she is a doctor. (respectful)"},{k:"의사한테 가요.",e:"I'm going to the doctor."}],note:"사(師) = expert in a field. 의사, 요리사, 간호사 all share this 사 morpheme.",level:"A1"},
    "선생": {base:"teacher (informal base word)",morph:"선(先/before/first) + 생(生/birth/person)  -  Sino-Korean",particle:"선생님 (with honorific)",uses:[{k:"선생님이에요.",e:"I'm a teacher."},{k:"영어 선생님이에요.",e:"I'm an English teacher."},{k:"선생님한테 물어봐요.",e:"Ask the teacher."}],note:"선생 alone is informal. Always add 님 in actual use: 선생님. 님 = respect honorific suffix.",level:"A1"},
    "회사원": {base:"office worker / company employee",morph:"회사(會社/company) + 원(員/member)  -  Sino-Korean",particle:"이에요/예요",uses:[{k:"회사원이에요.",e:"I'm an office worker."},{k:"회사원이 되고 싶어요.",e:"I want to become an office worker."},{k:"회사원 생활이 어때요?",e:"How is office worker life?"}],note:"원(員) = member/person. 회사원, 공무원, 병원 all use 원 (though 병원의 원 = place, not person).",level:"A1"},
    "카페": {base:"café",morph:"Konglish  -  from French 'café'",particle:"에 가요 / 에서 마셔요",uses:[{k:"카페에 가요.",e:"I go to the café."},{k:"카페에서 공부해요.",e:"I study at the café."},{k:"카페 어디 있어요?",e:"Where's a café?"}],note:"Korea has one of the world's highest café densities. 카페 culture = 공부, 미팅, 데이트.",level:"A1"},
    "병원": {base:"hospital / clinic",morph:"병(病/illness) + 원(院/institution)  -  Sino-Korean",particle:"에 가요",uses:[{k:"병원에 가요.",e:"I go to the hospital."},{k:"병원이 어디예요?",e:"Where is the hospital?"},{k:"병원에 예약했어요.",e:"I made a hospital appointment."}],note:"병원 = any medical facility. 종합병원 = general hospital. 의원 = small clinic.",level:"A1"},
    "도서관": {base:"library",morph:"도서(圖書/books) + 관(館/building)  -  Sino-Korean",particle:"에 가요 / 에서 공부해요",uses:[{k:"도서관에서 공부해요.",e:"I study at the library."},{k:"도서관이 어디예요?",e:"Where is the library?"},{k:"도서관에 책이 많아요.",e:"There are many books in the library."}],note:"관(館) = public building. 관 reappears in: 미술관 (art museum), 박물관 (museum), 체육관 (gym).",level:"A1"},
  };

  // Merge hand-crafted Korean entries into universal LANG_DICT
  React.useMemo(() => mergeKoreanDict(KOREAN_DICT), []);

  // ═══ RESUME DIALOG (must be AFTER all hooks to satisfy Rules of Hooks) ═══
  if(showResume){
    let savedSi=0;let savedScore=0;
    try{const p=JSON.parse(_memStore[progressKey]);savedSi=p?.si||0;savedScore=p?.score||0;}catch(e){}
    const pct=Math.round((savedSi/steps.length)*100);
    const doResume=()=>{setSi(savedSi);setScore(savedScore);setShowResume(false);};
    const doRestart=()=>{delete _memStore[progressKey];setShowResume(false);};
    return(
      <div className="anim" data-kb-owner="lesson" tabIndex={0} ref={el=>{if(el)el.focus();}} onKeyDown={e=>{
        if(e.code==="Space"||e.code==="Enter"){e.preventDefault();UISounds.click();doResume();}
        if(e.code==="Backspace"){e.preventDefault();UISounds.click();doRestart();}
        if(e.code==="Escape"&&onBack){e.preventDefault();onBack();}
      }} style={{outline:"none",maxWidth:440,margin:"40px auto",textAlign:"center"}}>
        <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.45)",borderLeft:"4px solid var(--purple-accent)",overflow:"hidden",padding:"32px 28px",...glass}}>
          <div style={{fontSize:36,marginBottom:12}}><BrandIcon name={lesson.icon} size={36}/></div>
          <h3 style={{fontSize:20,fontWeight:800,color:"var(--gray-800)",fontFamily:"'Quicksand','system-ui',sans-serif",margin:"0 0 8px"}}>{lesson.title||steps[0]?.title||t("le_lesson",baseLang)}</h3>
          <div style={{fontSize:14,color:"var(--teal-text)",fontWeight:600,marginBottom:20}}>{t("le_resume_msg",baseLang).replace("{pct}",pct)}</div>
          <div style={{display:"flex",gap:12,justifyContent:"center"}}>
            <button onClick={doRestart} style={{padding:"12px 24px",borderRadius:14,border:"2px solid rgba(255,255,255,0.45)",background:"var(--card-bg)",color:"var(--gray-600)",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit",transition:"all .2s",...(dk?{backdropFilter:"blur(12px)",boxShadow:"0 4px 14px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -2px 0 rgba(0,0,0,0.12)"}:{})}}>{t("le_start_over",baseLang)}</button>
            <button onClick={doResume} style={{padding:"12px 24px",borderRadius:14,border:"1.5px solid rgba(255,255,255,0.25)",background:"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)",color:"white",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit",boxShadow:dk?"0 0 20px rgba(150,120,255,0.45), 0 0 44px rgba(123,94,232,0.2), 0 4px 16px rgba(123,94,232,0.4), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -2px 0 rgba(0,0,0,0.2)":"0 6px 20px rgba(123,94,232,0.45), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)",transition:"all .2s",...(dk?{textShadow:"0 1px 3px rgba(0,0,0,0.3)"}:{})}}>{t("le_continue",baseLang)}</button>
          </div>
          <div style={{marginTop:12,fontSize:11,color:"var(--gray-300)"}}> Space continue · ⌫ start over · Esc quit</div>
        </div>
      </div>
    );
  }

  // ═══ DONE SCREEN (must be AFTER all hooks to satisfy Rules of Hooks) ═══
  if(done){
    const cappedScore=Math.min(score,totalEx);
    const p=totalEx>0?Math.round((cappedScore/totalEx)*100):100;
    // Count teach cards introduced fresh in this lesson
    const newWordsCount=steps.filter(s=>{
      if(s._generated)return false;
      const word=s.trg||s.nl||"";
      return(s.type==="teach"&&word&&lwAtStart.current&&!lwAtStart.current.has(word));
    }).length;
    const streak=user?.streak||1;
    const candyBtn=(label,onClick,idx,{grad,shadow}={})=>{
      const g=grad||"linear-gradient(180deg, #606078 0%, #4A4A60 30%, #38384E 60%, #2C2C40 100%)";
      const sh=shadow||"rgba(60,60,80,0.4)";
      const focused=doneFocus===idx;
      const glowShadow=`0 0 28px ${sh}, 0 0 48px ${sh.replace(/[\d.]+\)$/,'0.15)')}, 0 8px 24px ${sh}, inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -3px 0 rgba(0,0,0,0.15)`;
      const restShadow=`0 6px 20px ${sh}, inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)`;
      return <button onClick={onClick} style={{fontSize:15,padding:"14px 28px",borderRadius:18,fontWeight:800,cursor:"pointer",fontFamily:"inherit",color:"white",border:"none",background:g,boxShadow:focused?glowShadow:restShadow,transition:"all .2s",position:"relative",overflow:"hidden",letterSpacing:0.3,transform:focused?"scale(1.08) translateY(-2px)":"scale(1)",filter:focused?"brightness(1.15)":"none",outline:focused?"3px solid rgba(200,180,255,0.5)":"none",outlineOffset:3}}
        onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.08) translateY(-2px)";e.currentTarget.style.filter="brightness(1.15)";e.currentTarget.style.boxShadow=glowShadow;e.currentTarget.style.outline="3px solid rgba(200,180,255,0.5)";e.currentTarget.style.outlineOffset="3px";}}
        onMouseLeave={e=>{if(!focused){e.currentTarget.style.transform="scale(1)";e.currentTarget.style.filter="none";e.currentTarget.style.boxShadow=restShadow;e.currentTarget.style.outline="none";}else{e.currentTarget.style.transform="scale(1.08) translateY(-2px)";e.currentTarget.style.filter="brightness(1.15)";e.currentTarget.style.boxShadow=glowShadow;e.currentTarget.style.outline="3px solid rgba(200,180,255,0.5)";}}}>
        <span style={{position:"absolute",top:0,left:"8%",right:"8%",height:"38%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.06) 100%)",pointerEvents:"none"}}/>
        <span style={{position:"relative",zIndex:1}}>{label}</span>
      </button>;
    };
    const statCard=(icon,value,label,accent)=>(
      <div style={{flex:"1 1 auto",minWidth:80,background:dk?"rgba(255,255,255,0.07)":"rgba(255,255,255,0.72)",backdropFilter:"blur(14px)",WebkitBackdropFilter:"blur(14px)",borderRadius:18,border:`1.5px solid ${dk?"rgba(255,255,255,0.13)":"rgba(255,255,255,0.6)"}`,padding:"14px 8px",boxShadow:dk?"0 4px 18px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.08)":"0 4px 18px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.95)",textAlign:"center"}}>
        <div style={{fontSize:24,lineHeight:1,marginBottom:5}}>{icon}</div>
        <div style={{fontSize:22,fontWeight:800,fontFamily:"'Quicksand','system-ui',sans-serif",color:accent,lineHeight:1,marginBottom:4}}>{value}</div>
        <div style={{fontSize:10,fontWeight:700,color:"var(--gray-400)",textTransform:"uppercase",letterSpacing:0.8,lineHeight:1.3}}>{label}</div>
      </div>
    );
    return(
      <div className="anim" data-kb-owner="lesson-done" style={{textAlign:"center",paddingTop:32,paddingBottom:24,maxWidth:420,margin:"0 auto",padding:"32px 16px 24px"}}>
        <Confetti active={true} burst="big"/>
        {/* Trophy / star icon + score circle */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:16,marginBottom:14}}>
          <div style={{filter:"drop-shadow(0 4px 14px rgba(123,94,232,0.4))"}}>{p>=80?<AppIcon name="trophy" size={72}/>:p>=60?<AppIcon name="star" size={72}/>:<AppIcon name="hand_wave" size={72}/>}</div>
          {totalEx>0&&<ScoreCircle percentage={p} size={84}/>}
        </div>
        {/* Gradient title */}
        <h2 className="hd" style={{fontSize:28,fontWeight:800,marginBottom:4,background:"linear-gradient(135deg,#7B5EE8 0%,#2ECDA7 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>{t("le_lesson_complete",baseLang)}</h2>
        <p style={{fontSize:15,color:"var(--gray-500)",marginBottom:20,fontWeight:600}}>{renderNavTitle(lesson.icon,lesson.title,15)}</p>
        {/* Stats row: frosted glass pills */}
        <div style={{display:"flex",gap:8,justifyContent:"center",marginBottom:22,flexWrap:"wrap"}}>
          {statCard("⚡",`+${lesson.xp}`,"XP","var(--purple-accent)")}
          {newWordsCount>0&&statCard("📖",newWordsCount,t("le_words_learned",baseLang),"var(--teal)")}
          {totalEx>0&&statCard("🎯",`${cappedScore}/${totalEx}`,t("le_quiz_score",baseLang).replace(":",""),"var(--gold)")}
          {statCard("🔥",streak,t("le_day_streak",baseLang),"#F56565")}
        </div>
        {/* Action buttons */}
        <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap",marginBottom:14}}>
          {candyBtn(t("le_overview",baseLang),()=>{UISounds.click();onBack();},1,{
            grad:"linear-gradient(180deg, #606078 0%, #4A4A60 30%, #38384E 60%, #2C2C40 100%)",
            shadow:"rgba(40,40,60,0.4)"
          })}
          {candyBtn(t("le_try_again",baseLang),()=>{UISounds.click();retryLesson();},2,{
            grad:"linear-gradient(180deg, #F7D06B 0%, #F5A623 25%, #E8960A 55%, #D08E10 85%, #B87A08 100%)",
            shadow:"rgba(245,166,35,0.45)"
          })}
          {onContinue&&candyBtn(t("le_continue",baseLang),()=>{UISounds.click();onContinue();},0,{
            grad:"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)",
            shadow:"rgba(123,94,232,0.5)"
          })}
        </div>
        <div style={{fontSize:11,color:"var(--gray-300)"}}>{t("le_arrow_keys",baseLang)}</div>
      </div>
    );
  }
  if(!st) return null;

  // ════════════════════════════════════════════════════════════
  // KOREAN WORD TOKENIZER — splits Korean text into dictionary-lookupable tokens
  // Strategy: split on spaces, then try stripping known particles from each token
  // ════════════════════════════════════════════════════════════
  const KOR_PARTICLES = [
    "에서","으로","이에요","예요","이에","에게","한테","부터","까지","에도",
    "에서도","이라","이라고","이지만","이고","와","과","랑","이랑",
    "을","를","은","는","이","가","도","의","로","에","만","씩","마다","보다","처럼","만큼"
  ];
  // Sort longest first so "에서" is tried before "에"
  const KOR_PART_SORTED = [...KOR_PARTICLES].sort((a,b)=>b.length-a.length);

  const tokenizeKorean = (text) => {
    if(!text||typeof text!=="string") return [{word:text,key:text,isKorean:false}];
    const tokens = [];
    const spaceTokens = text.split(/( )/);
    // Extended conjugation map — all known conjugated forms → dictionary form
    const conjMap={
      "있어요":"있다","없어요":"없다","해요":"하다","가요":"가다","와요":"오다",
      "먹어요":"먹다","마셔요":"마시다","알아요":"알다","몰라요":"모르다",
      "좋아요":"좋다","싫어요":"싫다","커요":"크다","작아요":"작다",
      "많아요":"많다","비싸요":"비싸다","싸요":"싸다","맛있어요":"맛있다",
      "맛없어요":"맛없다","재미있어요":"재미있다","어려워요":"어렵다",
      "쉬워요":"쉽다","더워요":"덥다","추워요":"춥다","예뻐요":"예쁘다",
      "매워요":"맵다","달아요":"달다","짜요":"짜다",
      "봐요":"보다","읽어요":"읽다","써요":"쓰다","들어요":"듣다",
      "걸어요":"걷다","팔아요":"팔다","살아요":"살다","열어요":"열다",
      "알려요":"알리다","불러요":"부르다","달라요":"다르다","빨라요":"빠르다",
      "나아요":"낫다","지어요":"짓다","이어요":"잇다",
      "주세요":"주다","하세요":"하다","오세요":"오다","가세요":"가다",
      "봐요":"보다","봐요":"보다"
    };
    for(let idx=0;idx<spaceTokens.length;idx++){
      const raw=spaceTokens[idx];
      if(raw===" "||raw===""){tokens.push({word:" ",key:" ",isKorean:false});continue;}
      const hasKor=/[\uAC00-\uD7AF]/.test(raw);
      if(!hasKor){tokens.push({word:raw,key:raw,isKorean:false});continue;}
      // Look ahead: find next meaningful (non-space) token
      let nextMeaningful=null;
      for(let j=idx+1;j<spaceTokens.length;j++){
        const t=spaceTokens[j];
        if(t&&t.trim()){nextMeaningful=t.trim();break;}
      }
      const arrowContext=nextMeaningful==="→"||nextMeaningful==="→";
      // CONTEXT-AWARE: if next token is →, this is a verb stem/dict form display
      // Try raw+"다" before anything else to avoid particle misread
      if(arrowContext&&KOREAN_DICT[raw+"다"]){
        tokens.push({word:raw,key:raw+"다",isKorean:true});
        continue;
      }
      // Try direct lookup (dict forms like 가다, 먹다, etc.)
      if(KOREAN_DICT[raw]){
        // Prevent particle misread when in arrow context: e.g. "가" before → should be 가다
        if(arrowContext&&KOREAN_DICT[raw+"다"]){
          tokens.push({word:raw,key:raw+"다",isKorean:true});
        } else {
          tokens.push({word:raw,key:raw,isKorean:true});
        }
        continue;
      }
      // Try stripping particles (longest-first)
      let found=false;
      for(const p of KOR_PART_SORTED){
        if(raw.endsWith(p)&&raw.length>p.length){
          const stem=raw.slice(0,raw.length-p.length);
          if(KOREAN_DICT[stem]){
            tokens.push({word:raw,key:stem,isKorean:true,particle:p,stem});
            found=true;break;
          }
          if(KOREAN_DICT[stem+"다"]){
            tokens.push({word:raw,key:stem+"다",isKorean:true,particle:p,stem});
            found=true;break;
          }
        }
      }
      if(!found){
        // Try conjugation map
        if(conjMap[raw]&&KOREAN_DICT[conjMap[raw]]){
          tokens.push({word:raw,key:conjMap[raw],isKorean:true});
        } else {
          tokens.push({word:raw,key:raw,isKorean:true,noEntry:true});
        }
      }
    }
    return tokens;
  };

  // ════════════════════════════════════════════════════════════
  // UNIVERSAL TOKENIZER — dispatches to language-specific tokenizers
  // Returns array of token objects with unified shape for all languages
  // ════════════════════════════════════════════════════════════
  const tokenize = (text, tLang) => {
    if (!text || typeof text !== "string") return [{ word: text, key: text, isTarget: false, inDict: false }];
    const cfg = LANG_TOKENIZER[tLang];
    if (!cfg) return [{ word: text, key: text, isTarget: false, inDict: false }];

    // Korean: delegate to existing tokenizeKorean
    if (tLang === "ko") {
      return tokenizeKorean(text).map(t => ({
        word: t.word,
        key: t.key,
        isTarget: t.isKorean,
        article: null,
        particle: t.particle || null,
        inDict: t.isKorean && !t.noEntry,
        kind: (LANG_DICT.ko && LANG_DICT.ko[t.key]) ? LANG_DICT.ko[t.key].kind : null,
        isTaught: (LANG_DICT.ko && LANG_DICT.ko[t.key]) ? !!LANG_DICT.ko[t.key].lessonId : false,
      }));
    }

    // European languages (nl, de, fr, es)
    const dict = LANG_DICT[tLang] || {};
    const articles = cfg.articles || [];
    const contractions = cfg.contractions || {};
    const tokens = [];

    // Split on whitespace, preserving spaces and punctuation
    const parts = text.split(/(\s+)/);

    for (let i = 0; i < parts.length; i++) {
      const raw = parts[i];
      if (!raw || /^\s+$/.test(raw)) {
        tokens.push({ word: raw, key: raw, isTarget: false, inDict: false });
        continue;
      }

      // Strip trailing punctuation for lookup
      const punctMatch = raw.match(/^(.+?)([.,!?;:'"»«\u00BB\u00AB\u201C\u201D\u2018\u2019\u00BF\u00A1]+)$/);
      const cleanWord = punctMatch ? punctMatch[1] : raw;
      const trailingPunct = punctMatch ? punctMatch[2] : "";

      // Check if it's a target-language word (contains Latin letters with possible diacritics)
      const isTarget = cfg.scriptRange.test(cleanWord);
      if (!isTarget) {
        tokens.push({ word: raw, key: raw, isTarget: false, inDict: false });
        continue;
      }

      const lower = cleanWord.toLowerCase();

      // Check contractions (French: l'homme → l' + homme, Spanish: al/del are full-word contractions)
      let contractionKey = null;
      for (const [cForm] of Object.entries(contractions)) {
        if (cForm.endsWith("'") && lower.startsWith(cForm) && cleanWord.length > cForm.length) {
          // Prefix contraction (French l', d', j', etc.)
          contractionKey = cForm;
          break;
        }
        // Full-word contractions (Spanish al, del) — skip, handled as grammar words
      }

      if (contractionKey) {
        const rest = cleanWord.slice(contractionKey.length);
        const restLower = rest.toLowerCase();
        // Push the contraction part — look up its grammar color
        let cColor = null, cColorDk = null, cLabel = null, cType = "contraction";
        if (cfg.grammarColors) {
          // Map contractions to their grammar category (j'→pronoun, d'→preposition, l'→article, etc.)
          const cExpansions = cfg.contractions[contractionKey];
          const cBase = Array.isArray(cExpansions) ? cExpansions[0] : cExpansions;
          for (const [cat, catDef] of Object.entries(cfg.grammarColors)) {
            if (catDef.match.includes(cBase) || catDef.match.includes(contractionKey)) {
              cColor = catDef.color; cColorDk = catDef.dk; cLabel = catDef.label;
              if (cat.startsWith("article_")) cType = "article";
              else if (cat === "pronoun") cType = "pronoun";
              else if (cat === "preposition") cType = "preposition";
              else cType = cat;
              break;
            }
          }
        }
        tokens.push({
          word: contractionKey, key: contractionKey, isTarget: true,
          article: contractionKey, particle: null, inDict: false,
          kind: "grammar", isTaught: false, isGrammar: true,
          grammarType: cType,
          grammarColor: cColor, grammarColorDk: cColorDk, grammarLabel: cLabel,
        });
        // Push the word part
        const entry = dict[restLower];
        tokens.push({
          word: rest + trailingPunct, key: restLower, isTarget: true,
          article: null, particle: null,
          inDict: !!entry, kind: entry ? entry.kind : null,
          isTaught: entry ? !!entry.lessonId : false,
        });
        continue;
      }

      // Check if it's an article
      const isArticle = articles.includes(lower);
      if (isArticle) {
        // Look up specific article color from grammarColors (gender-aware)
        let artColor = null, artColorDk = null, artLabel = null;
        if (cfg.grammarColors) {
          for (const [cat, catDef] of Object.entries(cfg.grammarColors)) {
            if (catDef.match.includes(lower)) {
              artColor = catDef.color;
              artColorDk = catDef.dk;
              artLabel = catDef.label;
              break;
            }
          }
        }
        tokens.push({
          word: raw, key: lower, isTarget: true,
          article: lower, particle: null, inDict: false,
          kind: "grammar", isTaught: false, isGrammar: true,
          grammarType: "article",
          grammarColor: artColor, grammarColorDk: artColorDk, grammarLabel: artLabel,
        });
        continue;
      }

      // Check grammar markers (prepositions, conjunctions, pronouns)
      let isGrammarWord = false;
      if (cfg.grammarColors) {
        for (const [cat, catDef] of Object.entries(cfg.grammarColors)) {
          if (catDef.match.includes(lower)) {
            isGrammarWord = true;
            tokens.push({
              word: raw, key: lower, isTarget: true,
              article: null, particle: null, inDict: false,
              kind: "grammar", isTaught: false, isGrammar: true,
              grammarType: cat, grammarLabel: catDef.label,
              grammarColor: catDef.color, grammarColorDk: catDef.dk,
            });
            break;
          }
        }
      }
      if (isGrammarWord) continue;

      // Regular word lookup
      const entry = dict[lower];
      tokens.push({
        word: raw, key: lower, isTarget: true,
        article: null, particle: null,
        inDict: !!entry, kind: entry ? entry.kind : null,
        isTaught: entry ? !!entry.lessonId : false,
      });
    }

    return tokens;
  };

  // ════════════════════════════════════════════════════════════
  // WORD BUBBLE COMPONENT — glossy candy style, portal-style positioning
  // ════════════════════════════════════════════════════════════
  // ═══ WORD BUBBLE ═══
  // iOS candy-gloss, brand purple+teal palette, internal browser-tab history.
  const WordBubble=({entry:initEntry,word:initWord,stem:initStem,particle:initParticle,onClose})=>{
    const [history,setHistory]=React.useState([]);
    const [cur,setCur]=React.useState({entry:initEntry,word:initWord,stem:initStem,particle:initParticle});
    const {entry,word,particle}=cur;
    if(!entry)return null;

    const navTo=(e2,w2,s2,p2)=>{setHistory(h=>[...h,cur]);setCur({entry:e2,word:w2,stem:s2,particle:p2});};
    const goBack=()=>{if(!history.length)return;setCur(history[history.length-1]);setHistory(h=>h.slice(0,-1));};

    // ── bubbleHl: tokenize, make EVERY Korean token tappable ──
    const bubbleHl=(text,fz=16)=>{
      if(!text||typeof text!=="string") return <span style={{color:dk?"rgba(210,200,255,0.75)":"var(--gray-500)",fontSize:fz}}>{text}</span>;
      // For Korean: use existing tokenizeKorean + KOREAN_DICT
      if(/[\uAC00-\uD7AF]/.test(text)){
        const toks=tokenizeKorean(text);
        return <>{toks.map((tok,ti)=>{
          if(!tok.isKorean) return <span key={ti} style={{color:dk?"rgba(200,188,255,0.7)":"var(--gray-500)",fontSize:fz}}>{tok.word}</span>;
          const dictEntry=KOREAN_DICT[tok.key];
          const isKnown=!!dictEntry;
          const useEntry=dictEntry||{
            base:t("le_entry_coming",baseLang),morph:tok.word+" — "+t("le_not_catalogued",baseLang),particle:null,
            uses:[{k:tok.word,e:"(full entry coming in a future update)"}],
            note:"Every Korean word will eventually be in LingoVerse.",level:"?"
          };
          return(
            <span key={ti}
              onClick={e=>{e.stopPropagation();navTo(useEntry,tok.word,tok.stem||tok.word,tok.particle);}}
              style={{
                fontSize:fz,fontWeight:900,display:"inline-block",cursor:"pointer",lineHeight:1.35,
                color:isKnown?(dk?"#C8B8FF":"#7050D8"):(dk?"#5EEAC8":"#0D7D5C"),
                borderBottom:isKnown
                  ?(dk?"2px solid rgba(168,144,255,0.6)":"2px solid rgba(112,80,216,0.35)")
                  :(dk?"2px solid rgba(94,234,200,0.55)":"2px solid rgba(13,125,92,0.3)"),
                paddingBottom:1,borderRadius:2,transition:"all .1s",
              }}
              onMouseEnter={e=>{e.currentTarget.style.background=isKnown?(dk?"rgba(168,144,255,0.15)":"rgba(112,80,216,0.08)"):(dk?"rgba(94,234,200,0.15)":"rgba(13,125,92,0.08)");}}
              onMouseLeave={e=>{e.currentTarget.style.background="transparent";}}
            >{tok.word}</span>
          );
        })}</>;
      }
      // For all other languages: use universal tokenizer
      const toks=tokenize(text, lang);
      if(!toks||toks.length===0) return <span style={{color:dk?"rgba(210,200,255,0.8)":"var(--gray-600)",fontSize:fz,fontWeight:500}}>{text}</span>;
      const dict=LANG_DICT[lang]||{};
      return <>{toks.map((tok,ti)=>{
        if(!tok.isTarget) return <span key={ti} style={{color:dk?"rgba(200,188,255,0.7)":"var(--gray-500)",fontSize:fz}}>{tok.word}</span>;
        const entry=dict[tok.key];
        const isKnown=!!entry;
        return(
          <span key={ti}
            onClick={isKnown?e=>{e.stopPropagation();navTo({
              base:getTrans(entry),morph:getNote(entry)||null,
              particle:entry.article?entry.article+" "+entry.word:null,
              uses:entry.example?[{k:entry.example,e:getExampleSrc(entry)||""}]:[],
              note:(typeof entry.cognate==="string"?entry.cognate:getNote(entry))||null,level:entry.level,
            },tok.word,tok.word,null);}:undefined}
            style={{
              fontSize:fz,fontWeight:isKnown?900:500,display:"inline-block",
              cursor:isKnown?"pointer":"default",lineHeight:1.35,
              color:isKnown?(dk?"#C8B8FF":"#7050D8"):(dk?"rgba(210,200,255,0.8)":"var(--gray-600)"),
              borderBottom:isKnown?(dk?"2px solid rgba(168,144,255,0.6)":"2px solid rgba(112,80,216,0.35)"):"none",
              paddingBottom:isKnown?1:0,borderRadius:2,transition:"all .1s",
            }}
            onMouseEnter={e=>{if(isKnown)e.currentTarget.style.background=dk?"rgba(168,144,255,0.15)":"rgba(112,80,216,0.08)";}}
            onMouseLeave={e=>{e.currentTarget.style.background="transparent";}}
          >{tok.word}</span>
        );
      })}</>;
    };

    // ── Outer wrapper: full-screen backdrop, flex-centered ──
    return(
      <div onClick={onClose} style={{
        position:"fixed",inset:0,zIndex:99998,
        display:"flex",alignItems:"center",justifyContent:"center",
        background:"rgba(8,6,24,0.62)",
        backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)"
      }}>
        {/* Main bubble panel */}
        <div onClick={e=>e.stopPropagation()} style={{
          width:"min(560px,calc(100vw - 16px))",maxHeight:"88vh",overflowY:"auto",
          position:"relative",overflow:"hidden",
          borderRadius:26,
          background:dk
            ?"linear-gradient(160deg, rgba(58,36,130,0.98) 0%, rgba(44,26,105,0.98) 45%, rgba(32,18,82,0.99) 100%)"
            :"linear-gradient(160deg, rgba(246,242,255,0.99) 0%, rgba(235,226,255,0.99) 55%, rgba(225,214,255,0.99) 100%)",
          border:dk
            ?"1.5px solid rgba(168,144,255,0.35)"
            :"1.5px solid rgba(168,144,255,0.45)",
          boxShadow:dk
            ?"0 0 0 1px rgba(168,144,255,0.08), 0 32px 80px rgba(0,0,0,0.75), inset 0 1.5px 0 rgba(255,255,255,0.14), inset 0 -2px 0 rgba(0,0,0,0.22)"
            :"0 0 0 1px rgba(255,255,255,0.85), 0 32px 80px rgba(60,24,160,0.2), inset 0 2px 0 rgba(255,255,255,0.98), inset 0 -3px 0 rgba(112,80,216,0.08)",
          fontFamily:"'Nunito','system-ui',sans-serif",
          animation:"bubblePop 0.22s cubic-bezier(0.34,1.56,0.64,1) both"
        }}>

          {/* ── Candy gloss arc ── */}
          <div style={{
            position:"absolute",top:0,left:"4%",right:"4%",height:"40%",
            borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:1,
            background:dk
              ?"linear-gradient(180deg, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.03) 55%, transparent 100%)"
              :"linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.22) 50%, transparent 100%)"
          }}/>

          <div style={{position:"relative",zIndex:2,padding:"18px 20px 20px"}}>

            {/* ── BROWSER-TAB HISTORY BAR ── */}
            {history.length>0&&(
              <div style={{
                display:"flex",alignItems:"center",gap:6,marginBottom:14,
                overflowX:"auto",paddingBottom:2,
              }}>
                {history.map((h,hi)=>(
                  <button key={hi} onClick={e=>{
                    e.stopPropagation();
                    // Navigate back to this exact history point
                    setCur(h);
                    setHistory(prev=>prev.slice(0,hi));
                  }} style={{
                    flexShrink:0,
                    background:dk
                      ?"linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))"
                      :"linear-gradient(180deg, rgba(255,255,255,0.95), rgba(240,234,255,0.85))",
                    border:dk?"1px solid rgba(168,144,255,0.25)":"1px solid rgba(168,144,255,0.3)",
                    borderRadius:10,padding:"4px 12px",cursor:"pointer",
                    fontSize:13,fontWeight:800,
                    color:dk?"rgba(200,184,255,0.9)":"#7050D8",
                    boxShadow:dk
                      ?"inset 0 1px 0 rgba(255,255,255,0.1)"
                      :"inset 0 2px 0 rgba(255,255,255,0.9), 0 2px 6px rgba(112,80,216,0.1)",
                    fontFamily:"inherit",
                    transition:"all .1s",
                  }}
                  onMouseEnter={e=>{e.currentTarget.style.background=dk?"linear-gradient(180deg,rgba(168,144,255,0.2),rgba(168,144,255,0.1))":"linear-gradient(180deg,#fff,rgba(230,220,255,0.9))";}}
                  onMouseLeave={e=>{e.currentTarget.style.background=dk?"linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05))":"linear-gradient(180deg,rgba(255,255,255,0.95),rgba(240,234,255,0.85))";}}
                  >{h.word}</button>
                ))}
                {/* Chevron separator + current */}
                <span style={{color:dk?"rgba(168,144,255,0.4)":"rgba(112,80,216,0.3)",fontSize:12,fontWeight:700,flexShrink:0}}>›</span>
                <span style={{
                  flexShrink:0,fontSize:13,fontWeight:900,
                  color:dk?"rgba(255,255,255,0.9)":"#3A1A90",
                  background:dk?"rgba(168,144,255,0.18)":"rgba(112,80,216,0.1)",
                  borderRadius:10,padding:"4px 12px",
                  border:dk?"1px solid rgba(168,144,255,0.35)":"1px solid rgba(112,80,216,0.2)",
                }}>{word}</span>
              </div>
            )}

            {/* ── TOP ROW: badges + close ── */}
            <div style={{display:"flex",alignItems:"flex-start",justifyContent:"space-between",marginBottom:12}}>
              <div style={{display:"flex",flexWrap:"wrap",gap:5,alignItems:"center"}}>
                {entry.level&&<span style={{
                  fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:2,
                  color:dk?"rgba(255,255,255,0.88)":"#7050D8",
                  background:dk
                    ?"linear-gradient(135deg, rgba(168,144,255,0.25), rgba(140,112,255,0.15))"
                    :"linear-gradient(135deg, rgba(112,80,216,0.12), rgba(140,112,255,0.08))",
                  border:dk?"1px solid rgba(168,144,255,0.3)":"1px solid rgba(112,80,216,0.18)",
                  borderRadius:8,padding:"3px 10px",
                  boxShadow:dk?"inset 0 1px 0 rgba(255,255,255,0.1)":"inset 0 1px 0 rgba(255,255,255,0.9)",
                }}>{(entry.level||"").substring(0,2)}</span>}
                {entry.pos&&<span style={{
                  fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:1,
                  color:dk?"rgba(255,255,255,0.85)":"#fff",
                  background:POS_COLORS[entry.pos]||(dk?"rgba(168,144,255,0.3)":"#7B5EE8"),
                  borderRadius:8,padding:"3px 9px",
                }}>{entry.pos}</span>}
                {entry.gender&&<span style={{
                  fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:1,
                  color:"#fff",
                  background:GENDER_COLORS[entry.gender]||(dk?"rgba(168,144,255,0.3)":"#7B5EE8"),
                  borderRadius:8,padding:"3px 9px",
                }}>{({m:"der",f:"die",n:"das",pl:"die (pl)"})[entry.gender]||entry.gender}</span>}
              </div>
              <button onClick={onClose} style={{
                background:"none",border:"none",cursor:"pointer",fontSize:20,lineHeight:1,padding:"2px 4px",
                color:dk?"rgba(200,184,255,0.45)":"rgba(112,80,216,0.3)",
              }}>✕</button>
            </div>

            {/* ── HEADWORD ── */}
            <div style={{marginBottom:10}}>
              <div style={{
                fontSize:48,fontWeight:900,lineHeight:1.0,letterSpacing:-1,
                color:dk?"rgba(255,255,255,0.97)":"#2A0E80",
                textShadow:dk?"0 2px 20px rgba(168,144,255,0.3)":"0 2px 12px rgba(112,80,216,0.12)",
              }}>{word}</div>
              {particle&&<div style={{fontSize:12,color:dk?"rgba(94,234,200,0.8)":"#0D7D5C",fontWeight:700,marginTop:3}}>
                particle: {particle}
              </div>}
            </div>

            {/* ── BASE MEANING ── */}
            <div style={{fontSize:18,fontWeight:800,color:dk?"rgba(240,234,255,0.94)":"#1A0B50",marginBottom:3,lineHeight:1.3}}>{entry.base}</div>

            {/* ── MORPHEME — teal label, clickable Korean ── */}
            {entry.morph&&<div style={{
              fontSize:12,fontWeight:600,lineHeight:1.65,marginBottom:10,
              display:"flex",flexWrap:"wrap",alignItems:"center",gap:4,
              color:dk?"rgba(94,234,200,0.75)":"#0D7D5C",
            }}>
              {bubbleHl(entry.morph,13)}
            </div>}

            {/* ── PARTICLE BADGE — teal on brand ── */}
            {entry.particle&&<div style={{
              display:"flex",flexWrap:"wrap",alignItems:"center",gap:4,
              background:dk?"rgba(46,205,167,0.13)":"rgba(46,205,167,0.1)",
              border:dk?"1px solid rgba(80,224,192,0.3)":"1px solid rgba(46,205,167,0.28)",
              borderRadius:10,padding:"6px 14px",marginBottom:14,
              boxShadow:dk?"inset 0 1px 0 rgba(255,255,255,0.05)":"inset 0 1px 0 rgba(255,255,255,0.8)",
            }}>
              <span style={{fontSize:11,fontWeight:700,color:dk?"rgba(94,234,200,0.65)":"#0D7D5C",opacity:0.8}}>{t("le_particle",baseLang)}</span>
              {bubbleHl(entry.particle,13)}
            </div>}

            {/* ── DIVIDER ── */}
            <div style={{height:1,background:dk?"rgba(168,144,255,0.15)":"rgba(112,80,216,0.12)",marginBottom:14}}/>

            {/* ── USAGE EXAMPLES — each sentence its own compound-style bubble ── */}
            <div style={{display:"flex",flexDirection:"column",gap:10}}>
              {(entry.uses||[]).map((u,i)=>(
                <div key={i} style={{
                  background:dk
                    ?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
                    :"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
                  borderRadius:18,padding:"12px 16px",position:"relative",overflow:"hidden",
                  border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
                  boxShadow:dk
                    ?"0 6px 20px rgba(0,0,0,0.3), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)"
                    :"0 6px 24px rgba(123,94,232,0.1), 0 0 12px rgba(180,165,240,0.15), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)",
                }}>
                  {/* Gloss arc per bubble */}
                  <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",
                    borderRadius:"0 0 50% 50%",pointerEvents:"none",
                    background:dk
                      ?"linear-gradient(180deg,rgba(255,255,255,0.07)0%,rgba(255,255,255,0.01)60%,transparent 100%)"
                      :"linear-gradient(180deg,rgba(255,255,255,0.55)0%,rgba(255,255,255,0.1)60%,transparent 100%)"
                  }}/>
                  <div style={{position:"relative",display:"flex",flexWrap:"wrap",alignItems:"center",gap:3,marginBottom:4}}>
                    {bubbleHl(u.k,17)}
                  </div>
                  <div style={{fontSize:13,fontWeight:500,lineHeight:1.4,
                    color:dk?"rgba(200,190,255,0.65)":"var(--gray-500)"
                  }}>{u.e}</div>
                </div>
              ))}
            </div>

            {/* ── PEDAGOGICAL NOTE — purple-tinted, no gold ── */}
            {entry.note&&typeof entry.note==="string"&&<>
              <div style={{height:1,background:dk?"rgba(168,144,255,0.12)":"rgba(112,80,216,0.1)",margin:"14px 0 10px"}}/>
              <div style={{
                fontSize:12.5,lineHeight:1.7,
                color:dk?"rgba(190,175,255,0.7)":"rgba(80,55,160,0.65)",
                background:dk?"rgba(168,144,255,0.07)":"rgba(112,80,216,0.04)",
                borderRadius:10,padding:"10px 14px",
                display:"flex",flexWrap:"wrap",alignItems:"center",gap:4,
                fontStyle:"italic",
              }}>{bubbleHl(entry.note,13)}</div>
            </>}

            {/* ── FUN FACT — gold-tinted, v2 signature ── */}
            {entry.funFact&&typeof entry.funFact==="string"&&<>
              <div style={{height:1,background:dk?"rgba(245,166,35,0.12)":"rgba(200,130,10,0.1)",margin:"10px 0 8px"}}/>
              <div style={{
                fontSize:12,lineHeight:1.65,
                color:dk?"rgba(255,230,180,0.85)":"rgba(140,100,20,0.75)",
                background:dk?"rgba(245,166,35,0.08)":"rgba(245,180,50,0.06)",
                borderRadius:10,padding:"10px 14px",
              }}>
                <span style={{fontSize:10,fontWeight:900,letterSpacing:0.5,textTransform:"uppercase",color:dk?"rgba(245,166,35,0.7)":"rgba(200,130,10,0.65)",marginRight:6}}>Fun Fact</span>
                {entry.funFact}
              </div>
            </>}

          </div>
        </div>
      </div>
    );
  };

  // ════════════════════════════════════════════════════════════
  // koreanHl — Korean-aware version of smartHl: makes every word clickable
  // ════════════════════════════════════════════════════════════
  const koreanHl=(text)=>{
    if(!text||typeof text!=="string") return text;
    // Check if text has Korean
    if(!/[\uAC00-\uD7AF]/.test(text)) return smartHl(text);
    const tokens=tokenizeKorean(text);
    return tokens.map((tok,ti)=>{
      if(!tok.isKorean||tok.word===" ") return <span key={ti}>{tok.word}</span>;
      const entry=KOREAN_DICT[tok.key];
      const isKnown=!!entry;
      const useEntry2=entry||{
          base:t("le_entry_coming",baseLang),morph:tok.word+" — "+t("le_not_catalogued",baseLang),particle:null,
          uses:[{k:tok.word,e:"(full entry coming in a future update)"}],
          note:"Every Korean word will be in LingoVerse soon.",level:"?"
        };
      const isJamo=tok.word.length===1&&/[\u3130-\u318F]/.test(tok.word);
      return(
        <span key={ti}
          onClick={(e)=>{
            e.stopPropagation();
            setWordBubble({key:tok.key,word:tok.word,stem:tok.stem,particle:tok.particle,entry:useEntry2});
          }}
          style={{
            fontSize:isJamo?13:18,fontWeight:isJamo?600:700,lineHeight:1.2,
            cursor:isKnown?"pointer":"default",
            color:"var(--purple-accent-text)",
            borderBottom:isKnown?(dk?"1.5px dashed rgba(200,190,255,0.5)":"1.5px dashed rgba(112,80,216,0.4)"):"none",
            paddingBottom:isKnown?1:0,transition:"all .1s",borderRadius:2,
          }}
          onMouseEnter={(e)=>{if(isKnown)e.currentTarget.style.background=dk?"rgba(168,144,255,0.12)":"rgba(112,80,216,0.07)";}}
          onMouseLeave={(e)=>{e.currentTarget.style.background="transparent";}}
        >{tok.word}</span>
      );
    });
  };

  // ════════════════════════════════════════════════════════════
  // UNIVERSAL HIGHLIGHTER V2 — POS-based coloring from WORD_DB
  // No more context-free tokenizer guessing. Every word is looked up
  // in WORD_DB for its POS, then colored accordingly.
  // Grammar toggle ON: POS colors per color map + gender understripes
  // Grammar toggle OFF: all words clickable, no color highlighting
  // ════════════════════════════════════════════════════════════
  const universalHl = (text, tLang, opts = {}) => {
    if (!text || typeof text !== "string") return text;
    try {
    const effectiveLang = tLang || lang;

    // Korean: delegate to existing koreanHl (preserves all existing behavior)
    if (effectiveLang === "ko") return koreanHl(text);

    // No tokenizer config for this language: fall back to smartHl
    if (!LANG_TOKENIZER[effectiveLang]) return smartHl(text);

    // Check if text has any target-language characters
    const hasTargetScript = LANG_TOKENIZER[effectiveLang].scriptRange.test(text);
    if (!hasTargetScript) return smartHl(text);

    const dict = WORD_DB[effectiveLang] || {};
    const cfg = LANG_TOKENIZER[effectiveLang];

    // Simple tokenizer: split on whitespace, handle punctuation, look up in WORD_DB
    const parts = text.split(/(\s+)/);
    const spans = [];

    for (let i = 0; i < parts.length; i++) {
      const raw = parts[i];
      if (!raw) continue;

      // Whitespace
      if (/^\s+$/.test(raw)) { spans.push(<span key={i}>{raw}</span>); continue; }

      // Strip trailing punctuation for lookup
      const punctMatch = raw.match(/^(.+?)([.,!?;:'"»«\u00BB\u00AB\u201C\u201D\u2018\u2019\u00BF\u00A1)(\]]+)$/);
      const cleanWord = punctMatch ? punctMatch[1] : raw;
      const trailingPunct = punctMatch ? punctMatch[2] : "";

      // Check if it's a target-language word
      const isTarget = cfg.scriptRange.test(cleanWord);
      if (!isTarget) {
        // Non-target (English, punctuation)
        // When grammar toggle ON: English translations turn PURPLE
        if (grammarHl && !opts.noColor && cleanWord && !/^[\s.,!?;:'"()\-]+$/.test(cleanWord)) {
          spans.push(<span key={i} style={{color:dk?"#A890FF":"#7B5EE8",fontWeight:600}}>{raw}</span>);
        } else {
          spans.push(<span key={i}>{raw}</span>);
        }
        continue;
      }

      // Handle French-style prefix contractions (l', d', j', etc.)
      const contractions = cfg.contractions || {};
      const lower = cleanWord.toLowerCase();
      let contractionPart = null;
      let mainWord = cleanWord;
      for (const cForm of Object.keys(contractions)) {
        if (cForm.endsWith("'") && lower.startsWith(cForm) && cleanWord.length > cForm.length) {
          contractionPart = cleanWord.slice(0, cForm.length);
          mainWord = cleanWord.slice(cForm.length);
          break;
        }
      }

      // Render contraction prefix if present
      if (contractionPart) {
        const cEntry = dict[contractionPart.toLowerCase()];
        const cResolved = (cEntry && grammarHl && activePack) ? resolvePackColor(cEntry, activePack, dk) : null;
        if (cResolved) {
          spans.push(<span key={i+"c"} style={{color:cResolved.color,fontWeight:700,cursor:"pointer",transition:"all .1s"}}
            onClick={(e) => { e.stopPropagation(); setMiniWordPopup({ word:contractionPart, en:cEntry?(getTrans(cEntry)||""):"", pos:cEntry?.pos, lang:effectiveLang }); }}
          >{contractionPart}</span>);
        } else {
          spans.push(<span key={i+"c"} style={{cursor:"pointer",transition:"all .1s"}}
            onClick={(e) => { e.stopPropagation(); setMiniWordPopup({ word:contractionPart, en:cEntry?(getTrans(cEntry)||""):"", pos:cEntry?.pos, lang:effectiveLang }); }}
          >{contractionPart}</span>);
        }
      }

      // Look up main word in WORD_DB (with form-index fallback for conjugated forms)
      const wordKey = mainWord.toLowerCase();
      let entry = dict[wordKey] || null;
      // Form-index reverse lookup: conjugated forms → lemma entry
      if (!entry && effectiveLang === "de" && GERMAN_FORM_INDEX[wordKey]) {
        entry = dict[GERMAN_FORM_INDEX[wordKey]] || null;
      }
      // Only treat as "known target word" if it has a REAL POS (not "unknown" from example extraction)
      const isKnownTarget = entry && entry.pos !== "unknown";
      const wordIsNew = isKnownTarget && isNewWord(wordKey, effectiveLang, lessonId);

      // Unknown words (not in WORD_DB or pos="unknown") → tappable with subtle styling
      if (!isKnownTarget) {
        // Layer 2: Proper noun detection — capitalized + not first word + not in WORD_DB
        const isFirstWord = spans.filter(s => s.props && s.props.children && !/^\s+$/.test(String(s.props.children))).length === 0 && !contractionPart;
        const startsUpper = mainWord[0] === mainWord[0].toUpperCase() && mainWord[0] !== mainWord[0].toLowerCase();
        const isProperNoun = !isFirstWord && startsUpper;

        const unknownColor = opts.noColor
          ? (dk ? "rgba(230,225,245,0.9)" : "var(--gray-800)")  // noColor: same as normal text
          : isProperNoun
          ? (dk ? "#B0BEC5" : "#546E7A")  // warm grey for proper nouns
          : (dk ? "rgba(200,190,255,0.45)" : "rgba(100,80,160,0.35)");  // subtle muted for unknown

        spans.push(<span key={contractionPart ? i+"w" : i} style={{
          color: unknownColor,
          fontWeight: isProperNoun ? 600 : (opts.noColor ? 700 : 400),
          cursor: "pointer",
          borderBottom: (grammarHl && !opts.noColor) ? ("1px dashed " + (dk ? "rgba(200,190,255,0.25)" : "rgba(100,80,160,0.2)")) : "none",
          transition: "all .1s",
        }} onClick={(e) => {
          e.stopPropagation();
          setMiniWordPopup({
            word: mainWord,
            en: isProperNoun ? (mainWord + " (proper noun)") : null,
            pos: isProperNoun ? "proper_noun" : null,
            lang: effectiveLang,
            isUnknown: !isProperNoun,
            isProperNoun,
          });
        }}>{mainWord}{trailingPunct||""}</span>);
        continue;
      }

      // Build style based on state
      let wordStyle = {};
      let clickHandler = null;

      // Click handler: opens popup/WordBubble
      if (entry.taught) {
        clickHandler = (e) => {
          e.stopPropagation();
          setWordBubble({
            key: wordKey, word: mainWord, stem: null, particle: null,
            entry: {
              base: getTrans(entry),
              morph: getNote(entry) || null,
              particle: entry.article ? entry.article + " " + entry.word : null,
              uses: entry.example ? [{ k: entry.example, e: getExampleSrc(entry) || "" }] : [],
              note: (typeof entry.cognate === "string" ? entry.cognate : getNote(entry)) || null,
              level: entry.level,
              pos: entry.pos || null,
              gender: entry.gender || null,
              funFact: getFunFact(entry) || null,
              exampleSrc: getExampleSrc(entry) || null,
            }
          });
        };
      } else {
        clickHandler = (e) => {
          e.stopPropagation();
          setMiniWordPopup({
            word: mainWord,
            en: getTrans(entry) || null,
            pos: entry.pos || null,
            article: entry.article || null,
            level: entry.level || null,
            example: entry.example || null,
            exampleEn: getExampleSrc(entry) || null,
            lang: effectiveLang,
            isNewWord: wordIsNew,
          });
        };
      }

      // ── GRAMMAR TOGGLE ON (or forceGrammar for tip cards): use active pack's color map ──
      // noColor: words stay clickable but render in default text color (for story/teach contexts)
      if ((grammarHl || opts.forceGrammar) && activePack && !opts.noColor) {
        let resolved = resolvePackColor(entry, activePack, dk);
        // Check if this POS category is disabled by user
        if (resolved && langDisabled.length > 0 && entry.pos) {
          const p = entry.pos;
          const catDisabled = langDisabled.some(k=>
            (k==="verb"&&(p==="verb"||p==="aux_verb"||p==="modal_verb"||p==="aux"||p==="auxiliary"))||(k==="adjective"&&p==="adjective")||
            (k==="adverb"&&(p==="adverb"||p==="pronoun"||p.startsWith("pronoun_")||p==="demonstrative"))||
            (k==="noun"&&p==="noun")||
            (k==="structure"&&(p==="preposition"||p==="conjunction"||p==="conjunction_coord"||p==="conjunction_sub"||p.startsWith("article")||p==="interjection"||p==="number"||p==="counter"||p==="negation"||p==="question"||p.startsWith("particle_")))||
            (k==="m"&&(p.endsWith("_m")))||(k==="f"&&(p.endsWith("_f")))||
            (k==="n"&&(p.endsWith("_n")||p.endsWith("_het")))||(k==="c"&&(p.endsWith("_c")))||
            (k==="indef"&&(p.endsWith("_indef")))||(k==="pl"&&(p.endsWith("_pl")))||
            (k==="topic"&&p==="particle_topic")||(k==="subj"&&p==="particle_subj")||
            (k==="obj"&&p==="particle_obj")||(k==="loc"&&(p==="particle_loc"||p==="particle_dir"))||
            (k==="conn"&&(p==="particle_conn"||p==="particle_comp"||p==="particle_poss"||p==="particle_other"))
          );
          if (catDisabled) resolved = null;
        }
        if (resolved) {
          wordStyle = {
            color: resolved.color, fontWeight: 700, cursor: "pointer",
            display: "inline", transition: "all .15s",
          };
        } else {
          wordStyle = { cursor: "pointer", display: "inline", transition: "all .15s" };
        }
      }
      // ── GRAMMAR TOGGLE OFF or no pack or noColor: just clickable, default text color ──
      else {
        const defaultTextColor = opts.noColor ? (dk ? "rgba(230,225,245,0.9)" : "var(--gray-800)") : undefined;
        wordStyle = { color: defaultTextColor, fontWeight: 700, cursor: "pointer", display: "inline", transition: "all .15s" };
      }

      spans.push(
        <span key={contractionPart ? i+"w" : i}
          onClick={clickHandler}
          style={wordStyle}
          onMouseEnter={(e) => { if(grammarHl) e.currentTarget.style.background = dk?"rgba(168,144,255,0.12)":"rgba(112,80,216,0.07)"; }}
          onMouseLeave={(e) => { if(grammarHl) e.currentTarget.style.background = "transparent"; }}
        >{mainWord}{trailingPunct||""}</span>
      );
    }

    return <>{spans}</>;
    } catch(e) { console.error("universalHl error:",e); return text; }
  };

  // ── MiniWordPopup — compact popup for gold-highlighted untaught nouns ──
  const MiniWordPopup = miniWordPopup ? (
    <div style={{
      position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:10000,
      display:"flex",alignItems:"center",justifyContent:"center",
      background:"rgba(0,0,0,0.4)",backdropFilter:"blur(4px)",
    }} onClick={()=>setMiniWordPopup(null)}>
      <div onClick={e=>e.stopPropagation()} style={{
        background:dk
          ?"linear-gradient(180deg,rgba(38,28,72,0.98),rgba(30,22,58,0.98))"
          :"linear-gradient(180deg,rgba(255,255,255,0.99),rgba(250,245,255,0.99))",
        borderRadius:24,padding:"24px 28px",maxWidth:320,width:"90%",
        boxShadow:dk
          ?"0 24px 80px rgba(0,0,0,0.7),0 0 0 1px rgba(232,150,10,0.3),inset 0 1px 0 rgba(255,255,255,0.08)"
          :"0 24px 80px rgba(0,0,0,0.15),0 0 0 1px rgba(232,150,10,0.2),inset 0 2px 0 rgba(255,255,255,0.9)",
        position:"relative",
      }}>
        {/* Close button */}
        <button onClick={()=>setMiniWordPopup(null)} style={{
          position:"absolute",top:12,right:12,background:"none",border:"none",cursor:"pointer",
          fontSize:18,color:dk?"rgba(200,184,255,0.45)":"rgba(112,80,216,0.3)",
        }}>✕</button>

        {/* Type badge — POS from WORD_DB */}
        {(() => {
          const pos = miniWordPopup.pos || miniWordPopup.grammarType || (miniWordPopup.isUnknown ? "unknown" : null);
          if (!pos) return null;
          const posColors = POS_COLORS[pos] || POS_COLORS["unknown"];
          const badgeColor = (dk ? posColors?.dark : posColors?.light) || "#7B5EE8";
          const label = pos.replace(/_/g," ").replace(/^article [mfnc]$/, (m) => {
            const g = m.split(" ")[1];
            return g==="m"?t("le_article_masc",baseLang):g==="f"?t("le_article_fem",baseLang):g==="n"?t("le_article_neut",baseLang):g==="c"?t("le_article_common",baseLang):t("le_article",baseLang);
          });
          return <span style={{
            display:"inline-block",fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:1.5,
            background:dk?badgeColor+"22":badgeColor+"18",
            color:badgeColor,borderRadius:8,padding:"2px 10px",marginBottom:8,
            border:"1px solid "+badgeColor+"44",
          }}>{label}</span>;
        })()}

        {/* Word */}
        <div style={{
          fontSize:36,fontWeight:900,lineHeight:1.1,
          color: (() => {
            const pos = miniWordPopup.pos || miniWordPopup.grammarType;
            if (pos) {
              const pc = POS_COLORS[pos];
              const c = pc ? (dk ? pc.dark : pc.light) : null;
              if (c) return c;
            }
            return dk ? "#A890FF" : "#7B5EE8";
          })(),
          marginBottom:4,
        }}>{miniWordPopup.word}</div>

        {/* Translation / description */}
        {miniWordPopup.en && <div style={{
          fontSize:18,fontWeight:700,color:dk?"rgba(240,234,255,0.94)":"#1A0B50",
          marginBottom:8,
        }}>{miniWordPopup.en}</div>}

        {/* "Not yet catalogued" for unknown words */}
        {miniWordPopup.isUnknown && !miniWordPopup.en && <div style={{
          fontSize:14,fontWeight:600,color:dk?"rgba(200,190,255,0.5)":"rgba(112,80,216,0.4)",
          marginBottom:8,fontStyle:"italic",
        }}>{t("le_translation_soon",baseLang)}</div>}

        {/* Level badge */}
        {miniWordPopup.level && <span style={{
          display:"inline-block",fontSize:10,fontWeight:700,letterSpacing:1.5,
          color:dk?"rgba(245,192,64,0.8)":"#D4880C",
          background:dk?"rgba(232,150,10,0.15)":"rgba(232,150,10,0.1)",
          border:dk?"1px solid rgba(232,150,10,0.25)":"1px solid rgba(232,150,10,0.2)",
          borderRadius:6,padding:"2px 8px",marginBottom:12,
        }}>{miniWordPopup.level}</span>}

        {/* Example if available */}
        {miniWordPopup.example && <div style={{
          marginTop:12,padding:"12px 14px",
          background:dk?"rgba(232,150,10,0.08)":"rgba(232,150,10,0.05)",
          border:dk?"1px solid rgba(232,150,10,0.2)":"1px solid rgba(232,150,10,0.12)",
          borderRadius:14,
        }}>
          <div style={{fontSize:14,fontWeight:700,color:dk?"rgba(255,255,255,0.9)":"var(--gray-700)",lineHeight:1.5}}>{miniWordPopup.example}</div>
          {miniWordPopup.exampleEn && <div style={{fontSize:12,color:dk?"rgba(200,190,255,0.6)":"var(--gray-500)",marginTop:4}}>{miniWordPopup.exampleEn}</div>}
        </div>}

        {/* Footer label */}
        <div style={{
          marginTop:14,textAlign:"center",fontSize:11,fontWeight:700,
          color:dk?"rgba(200,190,255,0.4)":"rgba(112,80,216,0.35)",
          letterSpacing:1,textTransform:"uppercase",
        }}>{miniWordPopup.isUnknown ? t("le_not_in_dict",baseLang) : miniWordPopup.en ? t("le_tap_full",baseLang) : t("le_dict_entry",baseLang)}</div>
      </div>
    </div>
  ) : null;

  // ── Score Circle — animated percentage ring for lesson done screen ──


  // ── Translation Reveal — collapsible per-line translation in story tips ──
  const TranslationReveal=({text,hl})=>{
    const [show,setShow]=useState(false);
    return <div style={{margin:"2px 0"}}>
      {show?<div className="anim" style={{background:"rgba(46,205,167,0.06)",borderRadius:8,padding:"6px 10px",display:"flex",alignItems:"center",gap:8}}>
        <span style={{fontSize:13,color:"var(--teal-dark)",fontWeight:600,lineHeight:1.5}}>{hl(text)}</span>
        <button onClick={()=>setShow(false)} style={{background:"none",border:"none",cursor:"pointer",fontSize:10,color:"var(--gray-300)",flexShrink:0,padding:2}}>✕</button>
      </div>
      :<button onClick={()=>setShow(true)} style={{background:"rgba(123,94,232,0.04)",border:"1.5px dashed rgba(123,94,232,0.15)",borderRadius:8,padding:"6px 12px",cursor:"pointer",display:"flex",alignItems:"center",gap:6,width:"100%",transition:"all .15s"}}>
        <span style={{fontSize:12,color:"var(--purple-accent-text)",fontWeight:600}}>👁 Tap to reveal translation</span>
      </button>}
    </div>;
  };

  const smartHl=(text)=>{
    if(!text||typeof text!=="string") return text;
    const hasArabic=/[\u0600-\u06FF]/.test(text);
    // For Arabic-containing text: isolate Latin runs with dir="ltr" for proper bidi
    if(hasArabic&&srcRtl){
      // Split into Arabic vs Latin segments
      return text.split(/([\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF\u200F\u060C\u061B\u061F\u0640]+(?:\s+[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]+)*)/g).map((seg,si)=>{
        if(/[\u0600-\u06FF]/.test(seg)) return <span key={si}>{seg}</span>;
        if(!seg.trim()) return <span key={si}>{seg}</span>;
        // Latin text inside Arabic context: isolate with dir="ltr"
        return <span key={si} dir="ltr" style={{unicodeBidi:"isolate"}}>{seg}</span>;
      });
    }
    const parts=text.split(/([\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF]+)/g);
    return parts.map((seg,si)=>{
      if(/[\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF]/.test(seg))
        return <span key={si} style={{fontSize:22,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1.2}}>{seg}</span>;
      const tokens=seg.split(/((?:'[a-zA-Z]{2,12}')|\b(?:RIGHT|LEFT|TOP|BOTTOM|BELOW|ABOVE|UP|DOWN|HORIZONTAL|VERTICAL|ONLY|NEVER|ALWAYS|NOT|SILENT|INITIAL|INSIDE|ZERO|MUST)\b)/g);
      return tokens.map((tok,ti)=>{
        if(!tok) return null;
        if(/^'[a-zA-Z]{2,12}'$/.test(tok))
          return <span key={`${si}-${ti}`} style={{color:"var(--teal-text)",fontWeight:700}}>{tok}</span>;
        if(TEAL_WORDS.test(tok))
          return <span key={`${si}-${ti}`} style={{color:"var(--teal-text)",fontWeight:700}}>{tok}</span>;
        if(SOUND_VALS.test(tok)){
          SOUND_VALS.lastIndex=0;
          const sub=tok.split(/((?:ah|oh|oo|uh|ee|ng))/gi);
          return sub.map((s,ski)=>/^(ah|oh|oo|uh|ee|ng)$/i.test(s)?<span key={`${si}-${ti}-${ski}`} style={{color:"var(--teal-text)",fontWeight:700}}>{s}</span>:<span key={`${si}-${ti}-${ski}`}>{s}</span>);
        }
        return <span key={`${si}-${ti}`}>{tok}</span>;
      });
    });
  };

  // ── Split Korean sentence from English translation (on \n) ──
  // Returns { korean: "Korean line", english: "English line(s)" or null }
  const splitKoEn=(text)=>{
    if(!text||typeof text!=="string") return {korean:text,english:null};
    const lines=text.split("\n");
    const korean=lines[0];
    const rest=lines.slice(1).filter(l=>l.trim()).join("\n");
    return {korean,english:rest||null};
  };

  // Render English translation below Korean — toggleable
  // startVisible: true for drag_fill (need translation), false for fb/mc (try without)
  const renderEnglishBelow=(english,startVisible)=>{
    if(!english) return null;
    const visible=startVisible||showTrans;
    if(!visible) return <div style={{marginTop:6}}><button onClick={()=>setShowTrans(true)} style={{background:"none",border:"none",color:"var(--gray-300)",fontSize:12,cursor:"pointer",fontFamily:"'Nunito','system-ui',sans-serif",padding:"2px 8px",borderRadius:6,transition:"all .15s"}} onMouseEnter={e=>{e.target.style.color="var(--purple-accent-text)";}} onMouseLeave={e=>{e.target.style.color="var(--gray-300)";}}>👁 {t("le_show_translation",baseLang)}</button></div>;
    return <div style={{marginTop:6,cursor:startVisible?"default":"pointer"}} onClick={()=>{if(!startVisible)setShowTrans(false);}}><div style={{fontSize:14,color:"var(--gray-700)",fontWeight:500,lineHeight:1.45,fontFamily:"'Nunito','system-ui',sans-serif",...srcDir}}>{english}</div></div>;
  };

  // ── Shared example renderer: operators gray, non-ASCII purple ──
  const renderLetterExample=(text)=>{
    const parts=text.split(/(\s*[+=→]\s*)/g);
    return parts.map((part,i)=>{
      const trimmed=part.trim();
      if(trimmed==="+"||trimmed==="="||trimmed==="→")
        return <span key={i} style={{fontSize:16,fontWeight:500,color:"var(--gray-400)",margin:"0 4px"}}>{trimmed}</span>;
      if(/[\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF]/.test(trimmed))
        return <span key={i} style={{fontSize:22,fontWeight:800,color:"var(--purple-accent-text)"}}>{trimmed}</span>;
      if(trimmed)
        return <span key={i} style={{fontSize:14,fontWeight:600,color:"var(--gray-500)"}}>{trimmed}</span>;
      return null;
    });
  };

  // ── Shared syllable block diagram renderer ──
  const renderDiagram=(D)=>{
    if(!D) return null;
    const cBg="#FECACA",cTx="#991B1B",vBg="#BBF7D0",vTx="#166534",bBg="#BFDBFE",bTx="#1E40AF";
    const bCell=(label,bg,tx,extra)=>(<div style={{background:bg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"10px 6px",borderRight:"2px solid #1F2937",borderBottom:"2px solid #1F2937",...(extra||{})}}><span style={{fontSize:20,fontWeight:900,color:tx}}>{label}</span></div>);
    const bEx=(hangul,rom)=>(<div style={{textAlign:"center",marginTop:10}}><span style={{fontSize:44,fontWeight:800,color:"var(--gray-800)"}}>{hangul}</span><div style={{fontSize:13,color:"var(--gray-400)",fontWeight:600,marginTop:2}}>{rom}</div></div>);
    const bWrap=(children,w)=>(<div style={{border:"3px solid #1F2937",borderRadius:6,overflow:"hidden",width:w||160,margin:"0 auto"}}>{children}</div>);
    const blocks={
      cv_v:(<div><div style={{fontSize:11,fontWeight:700,textAlign:"center",marginBottom:8,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:1}}>CV (vertical vowel)</div>{bWrap(<div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>{bCell("C",cBg,cTx)}{bCell("V",vBg,vTx,{borderRight:"none"})}</div>)}{bEx("가","ga")}</div>),
      cv_h:(<div><div style={{fontSize:11,fontWeight:700,textAlign:"center",marginBottom:8,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:1}}>CV (horizontal vowel)</div>{bWrap(<div style={{display:"grid",gridTemplateColumns:"1fr"}}>{bCell("C",cBg,cTx,{borderRight:"none"})}{bCell("V",vBg,vTx,{borderRight:"none",borderBottom:"none"})}</div>,120)}{bEx("고","go")}</div>),
      cvc:(<div><div style={{fontSize:11,fontWeight:700,textAlign:"center",marginBottom:8,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:1}}>CVC (with 받침)</div>{bWrap(<div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>{bCell("C",cBg,cTx)}{bCell("V",vBg,vTx,{borderRight:"none"})}<div style={{gridColumn:"1 / -1",background:bBg,display:"flex",alignItems:"center",justifyContent:"center",padding:"10px 6px",borderTop:"2px solid #1F2937"}}><span style={{fontSize:20,fontWeight:900,color:bTx}}>C₂</span></div></div>)}{bEx("간","gan")}</div>),
      cvcc:(<div><div style={{fontSize:11,fontWeight:700,textAlign:"center",marginBottom:8,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:1}}>CVCC (double 받침)</div>{bWrap(<div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>{bCell("C",cBg,cTx)}{bCell("V",vBg,vTx,{borderRight:"none"})}<div style={{background:bBg,display:"flex",alignItems:"center",justifyContent:"center",padding:"10px 6px",borderRight:"2px solid #1F2937",borderTop:"2px solid #1F2937"}}><span style={{fontSize:20,fontWeight:900,color:bTx}}>C₃</span></div><div style={{background:bBg,display:"flex",alignItems:"center",justifyContent:"center",padding:"10px 6px",borderTop:"2px solid #1F2937"}}><span style={{fontSize:20,fontWeight:900,color:bTx}}>C₄</span></div></div>)}{bEx("값","gap")}</div>),
      cv_combo:(<div><div style={{fontSize:11,fontWeight:700,textAlign:"center",marginBottom:8,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:1}}>CV (combo vowel)</div>{bWrap(<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr"}}>{bCell("C",cBg,cTx)}<div style={{background:vBg,display:"flex",alignItems:"center",justifyContent:"center",padding:"10px 6px",gridRow:"1 / 3",borderBottom:"none"}}><span style={{fontSize:20,fontWeight:900,color:vTx}}>V₂</span></div>{bCell("V₁",vBg,vTx)}</div>)}{bEx("귀","gwi")}</div>),
    };
    return(<div style={{background:"var(--card-bg)",border:"2px solid rgba(255,255,255,0.55)",borderLeft:"3px solid var(--purple-accent)",borderRadius:20,padding:"20px 22px",marginBottom:16}}>
      <div style={{fontSize:10,fontWeight:700,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:2,marginBottom:14,textAlign:"center"}}>{t("le_block_structure",baseLang)}</div>
      {D==="all"?(<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:18}}>{blocks.cv_v}{blocks.cv_h}{blocks.cv_combo}</div>):blocks[D]||null}
    </div>);
  };

  // ═══ BREATHER — auto-injected review checkpoint after consecutive teaches ═══
  if(st.type==="_breather") return(
    <div className="anim" key={si}>
      <ProgressBar/>
      <div style={{maxWidth:460,margin:"0 auto"}}>
        {/* Card — matches teach card style: white bg, left accent, clean layout */}
        <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.55)",borderLeft:"4px solid #7B5EE8",boxShadow:dk?"0 4px 20px rgba(0,0,0,0.3)":"0 4px 20px rgba(0,0,0,0.05)",overflow:"hidden",marginBottom:16}}>
          {/* Header strip */}
          <div style={{background:"linear-gradient(135deg, rgba(123,94,232,0.06), rgba(123,94,232,0.03))",padding:"14px 20px 12px",display:"flex",alignItems:"center",gap:10}}>
            <div style={{width:32,height:32,borderRadius:10,background:"linear-gradient(135deg, #C0AEF8, #7B5EE8)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(123,94,232,0.3), inset 0 1px 0 rgba(255,255,255,0.3)"}}><span style={{fontSize:15,color:"white",fontWeight:900}}>✦</span></div>
            <div>
              <div style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"#7B5EE8"}}>{t("breather_title",baseLang)}</div>
              <div style={{fontSize:12,color:"var(--gray-400)",fontWeight:600}}>{st.totalLearned} {t("prof_words_learned",baseLang).toLowerCase()} {t("le_so_far",baseLang)||"so far"}</div>
            </div>
          </div>
          {/* Word tiles — compound bubbles matching teach card example style */}
          <div style={{padding:"14px 18px 8px"}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
              {(st.wordsReviewed||[]).map((w,i)=>(
                <div key={i} style={{padding:"10px 14px",borderRadius:16,background:dk?"linear-gradient(180deg, rgba(123,94,232,0.15) 0%, rgba(100,80,200,0.08) 100%)":"linear-gradient(180deg, rgba(200,190,255,0.35) 0%, rgba(220,210,255,0.2) 50%, rgba(235,230,255,0.1) 100%)",border:dk?"1.5px solid rgba(123,94,232,0.25)":"1.5px solid rgba(180,165,240,0.35)",boxShadow:dk?"inset 0 1px 0 rgba(255,255,255,0.05)":"inset 0 1px 0 rgba(255,255,255,0.6), 0 2px 8px rgba(123,94,232,0.06)",textAlign:"left",position:"relative",overflow:"hidden"}}>
                  {/* Gloss arc */}
                  <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"50%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)",pointerEvents:"none"}}/>
                  <div className="trg-text" style={{fontSize:15,fontWeight:800,color:"var(--gray-800)",position:"relative",zIndex:1}}>{w.trg}</div>
                  <div style={{fontSize:11,color:"rgba(123,94,232,0.6)",fontWeight:600,position:"relative",zIndex:1,...srcDir}}>{w.src}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation */}
          <div style={{padding:"8px 18px 18px",display:"flex",alignItems:"center",justifyContent:"center",gap:12}}>
            {si>0&&<NavArrow onClick={goBack} isBack/>}
            <ContinueButton onClick={goNext} baseLang={baseLang} spaceRef={continueRef}/>
          </div>
        </div>
      </div>
    </div>
  );

  // ═══ INTRO — Board-style (v2 lessons with board:true) ═══
  if(st.type==="intro" && lesson.board) return(
    <div className="anim" key={si}>
      <ProgressBar/>
      {wordBubble&&<WordBubble entry={wordBubble.entry} word={wordBubble.word} stem={wordBubble.stem} particle={wordBubble.particle} onClose={()=>setWordBubble(null)}/>}
      {MiniWordPopup}
      <div style={{maxWidth:460,margin:"0 auto"}}>
        {/* Board-style intro card — matches teach card visual language */}
        <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.45)",borderLeft:"4px solid var(--purple-accent)",overflow:"hidden",marginBottom:16,...glass}}>

          {/* Top strip — emoji + lesson label */}
          <div style={{background:"linear-gradient(135deg, rgba(123,94,232,0.06), rgba(46,205,167,0.04))",padding:"14px 22px 12px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <span style={{fontSize:32}}><BrandIcon name={lesson.icon} size={32}/></span>
            <span style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"var(--purple-accent-text)"}}>Lesson</span>
          </div>

          {/* Title — serif, like board teach cards */}
          <div style={{textAlign:"center",padding:"16px 28px 8px"}}>
            <h2 style={{fontSize:26,fontWeight:800,color:"var(--gray-800)",lineHeight:1.2,fontFamily:"'Quicksand','system-ui',sans-serif",margin:0}}>{st.title}</h2>
          </div>

          {/* Description — line-aware with candy bubbles */}
          <div className="meta-text" style={{textAlign:"center",padding:"4px 22px 16px"}}>
            {(()=>{
              const dL=(st.desc||"").split(/\\n|\n/);
              const o=[];let i=0;
              while(i<dL.length){
                const ln=dL[i],nx=dL[i+1]||"";
                const hk=/[\uAC00-\uD7AF\u3130-\u318F]/.test(ln.trim());
                if(hk&&nx.trim().startsWith("→")&&ln.trim()){
                  const tr=nx.trim().slice(1).trim();
                  o.push(<div key={i} style={{background:dk?"linear-gradient(180deg,rgba(123,94,232,0.22),rgba(80,60,180,0.08))":"linear-gradient(180deg,rgba(200,190,255,0.45),rgba(235,230,255,0.18))",borderRadius:16,padding:"14px 18px",margin:"10px auto",maxWidth:320,border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",boxShadow:dk?"0 4px 16px rgba(0,0,0,0.2)":"0 4px 18px rgba(123,94,232,0.08)"}}><div style={{fontSize:22,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1.3,marginBottom:6}}>{smartHl(ln.trim())}</div><div style={{fontSize:13,fontWeight:500,color:dk?"rgba(200,190,255,0.6)":"var(--gray-500)"}}>{smartHl(tr)}</div></div>);
                  i+=2;continue;
                }
                if(!ln.trim()){o.push(<div key={i} style={{height:14}}/>);i++;continue;}
                o.push(<p key={i} style={{fontSize:14,color:"var(--purple-accent-text)",fontWeight:600,lineHeight:1.6,margin:"4px 0"}}>{ln.split(/([\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF]+)/g).map((p,pi)=>/[\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF]/.test(p)?<span key={pi} style={{fontSize:18,fontWeight:800}}>{p}</span>:<span key={pi}>{p}</span>)}</p>);
                i++;
              }
              return o;
            })()}
          </div>

          {/* Goals — clean rows with green bullets */}
          {st.goals&&st.goals.length>0&&<div style={{borderTop:"1.5px solid var(--gray-100)",padding:"14px 22px"}}>
            <div style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"var(--purple-accent-text)",marginBottom:10}}>{t("le_in_this_lesson",baseLang)}</div>
            {st.goals.map((g,i)=><div key={i} style={{fontSize:14,color:"var(--gray-800)",fontWeight:600,padding:"5px 0",display:"flex",alignItems:"center",gap:8,...(/[\u0600-\u06FF]/.test(g)?{direction:"rtl"}:{direction:"ltr",textAlign:"left"})}}><span style={{color:"var(--purple-accent-text)",fontWeight:800,fontSize:12}}>▸</span><span>{g}</span></div>)}
          </div>}
        </div>

        {/* Begin button — glossy candy style */}
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:12,marginTop:18}}>
          {si>0&&<NavArrow onClick={goBack} isBack/>}
          <button className="btn" style={{fontSize:16,padding:"16px 36px",borderRadius:20,background:"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)",color:"white",fontWeight:800,border:"none",cursor:"pointer",boxShadow:"0 8px 24px rgba(123,94,232,0.5), inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -4px 0 rgba(0,0,0,0.15)",transition:"all .15s",position:"relative",overflow:"hidden",letterSpacing:0.5}} onClick={goNext} onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.05)";}} onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";}}>
            <span style={{position:"absolute",top:0,left:"8%",right:"8%",height:"40%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.08) 100%)",pointerEvents:"none"}}/>
            <span style={{position:"relative",zIndex:1}}>Begin</span>
          </button>
        </div>
      </div>
    </div>
  );

  // ═══ INTRO — Legacy style (non-board lessons) ═══
  if(st.type==="intro") return(
    <div className="anim" key={si}>
      {wordBubble&&<WordBubble entry={wordBubble.entry} word={wordBubble.word} stem={wordBubble.stem} particle={wordBubble.particle} onClose={()=>setWordBubble(null)}/>}
      {MiniWordPopup}
      <ProgressBar/>
      <div style={{textAlign:"center",padding:"20px 0"}}>
        <div style={{width:80,height:80,borderRadius:20,background:`linear-gradient(135deg,${unit.color},${unit.color}bb)`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 20px",boxShadow:`0 8px 24px ${unit.color}40`}}><BrandIcon name={lesson.icon} size={38}/></div>
        <h2 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:8}}>{st.title}</h2>
        {(()=>{
          const dL=(st.desc||"").split(/\\n|\n/);
          const o=[];let i=0;
          while(i<dL.length){
            const ln=dL[i],nx=dL[i+1]||"";
            const hk=/[\uAC00-\uD7AF\u3130-\u318F]/.test(ln.trim());
            if(hk&&nx.trim().startsWith("→")&&ln.trim()){
              const tr=nx.trim().slice(1).trim();
              o.push(<div key={i} style={{background:dk?"linear-gradient(180deg,rgba(123,94,232,0.22),rgba(80,60,180,0.08))":"linear-gradient(180deg,rgba(200,190,255,0.45),rgba(235,230,255,0.18))",borderRadius:16,padding:"14px 18px",margin:"10px auto",maxWidth:320,border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",boxShadow:dk?"0 4px 16px rgba(0,0,0,0.2)":"0 4px 18px rgba(123,94,232,0.08)"}}><div style={{fontSize:22,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1.3,marginBottom:6}}>{smartHl(ln.trim())}</div><div style={{fontSize:13,fontWeight:500,color:dk?"rgba(200,190,255,0.6)":"var(--gray-500)"}}>{smartHl(tr)}</div></div>);
              i+=2;continue;
            }
            if(!ln.trim()){o.push(<div key={i} style={{height:14}}/>);i++;continue;}
            o.push(<p key={i} style={{color:"var(--gray-500)",fontSize:15,lineHeight:1.7,maxWidth:440,margin:"4px auto"}}>{smartHl(ln)}</p>);
            i++;
          }
          return <div style={{textAlign:"center",marginBottom:24}}>{o}</div>;
        })()}
        <div style={{background:"var(--blue-pale)",borderRadius:"var(--radius)",padding:"18px 24px",display:"inline-block",textAlign:"left",border:"2px solid var(--blue-light)"}}>
          <div style={{fontSize:12,fontWeight:700,color:"var(--blue)",textTransform:"uppercase",letterSpacing:1.5,marginBottom:8}}>{t("le_in_this_lesson",baseLang)}</div>
          {st.goals.map((g,i)=><div key={i} style={{fontSize:14,color:"var(--teal-text)",fontWeight:600,padding:"4px 0",display:"flex",alignItems:"center",gap:8,...(/[\u0600-\u06FF]/.test(g)?{direction:"rtl"}:{})}}><span style={{color:"var(--teal-text)",fontWeight:800}}>✓</span>{g.split(/([\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF]+)/g).map((part,pi)=>/[\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF]/.test(part)?<span key={pi} style={{fontSize:20,fontWeight:800,color:"var(--purple-accent-text)"}}>{part}</span>:<span key={pi}>{part}</span>)}</div>)}
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:12,marginTop:28}}>
          {si>0&&<NavArrow onClick={goBack} isBack/>}
          <button className="btn" style={{fontSize:16,padding:"16px 36px",background:"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)",color:"white",fontWeight:800,border:"none",cursor:"pointer",borderRadius:20,boxShadow:"0 8px 24px rgba(123,94,232,0.5), inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -4px 0 rgba(0,0,0,0.15)",transition:"all .15s",letterSpacing:0.5}} onClick={goNext} onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.05)";}} onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";}}>Let's go!</button>
        </div>
      </div>
    </div>
  );

  // ═══ VOCAB_REF — Database lookup (NEW) ═══
  if(st.type==="vocab_ref"){
    const v=getVocab(st.id);
    if(!v)return(<div className="anim"key={si}><ProgressBar/><div style={{maxWidth:460,margin:"0 auto",padding:32,background:"#fee",borderRadius:16,textAlign:"center"}}><div style={{fontSize:48}}>⚠️</div><div style={{fontSize:20,fontWeight:"bold",color:"#dc2626",marginTop:12}}>{t("le_vocab_not_found",baseLang)}</div><div style={{fontSize:14,color:"#64748b",marginTop:8}}>ID: <code>{st.id}</code></div><button onClick={next}className="btn-primary"style={{marginTop:20,width:"100%"}}>{t("le_continue",baseLang)}</button></div></div>);
    const w=toTeach(v);
    const isNew=isNewInLesson(w.nl);
    return(<div className="anim"key={si}><ProgressBar/><div style={{maxWidth:460,margin:"0 auto"}}>{isNew&&<div style={{background:"linear-gradient(135deg, var(--gold), #E8960A)",borderRadius:24,padding:"3px",marginBottom:20,boxShadow:"0 6px 24px rgba(245,166,35,0.25)"}}><div style={{background:"var(--gold)",borderRadius:"22px 22px 0 0",padding:"8px 0",textAlign:"center"}}><span style={{color:"white",fontSize:12,fontWeight:800,textTransform:"uppercase",letterSpacing:3}}>✨ {t("le_new_word",baseLang)} ✨</span></div><div style={{background:"var(--card-bg)",borderRadius:"0 0 21px 21px",overflow:"hidden",position:"relative"}}><div style={{position:"absolute",top:-15,right:-15,width:60,height:60,borderRadius:"50%",background:"rgba(74,143,231,0.06)"}}/><div style={{position:"absolute",bottom:20,left:-10,width:40,height:40,borderRadius:"50%",background:"rgba(46,205,167,0.06)"}}/><div style={{position:"absolute",top:12,right:14,display:"flex",gap:6,zIndex:2}}><button onClick={()=>setShowPhonetic(!showPhonetic)}style={{width:34,height:34,borderRadius:10,background:showPhonetic?"var(--blue-light)":"var(--panel-bg)",border:`1.5px solid ${showPhonetic?"var(--blue)":"var(--gray-200)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,cursor:"pointer",transition:"all .15s",backdropFilter:"blur(4px)"}}>🔤</button><SpeakerButton text={w.nl}lang={LANG_META[lang]?.ttsLocale||"en-US"}size={16}showToast={showToast}/></div>{w.img&&<div style={{textAlign:"center",paddingTop:24}}><div style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:80,height:80,borderRadius:22,background:"var(--card-bg)",boxShadow:"var(--card-shadow)",fontSize:36,lineHeight:1}}>{w.img}</div></div>}<div style={{textAlign:"center",padding:"18px 28px 10px"}}>{(()=>{const art=getArticle(w.nl,lang);const c=ARTICLE_COLORS[art];return(<>{art!=="none"&&<div style={{marginBottom:6}}><span style={{display:"inline-block",background:c.pill,color:c.pillText,fontSize:12,fontWeight:800,borderRadius:10,padding:"3px 14px",textTransform:"uppercase",letterSpacing:1.5}}>{art}</span></div>}<div style={{display:"inline-block",background:c.bg,borderRadius:18,padding:"12px 32px",boxShadow:`0 4px 16px ${c.shadow}`,marginBottom:10}}><span className="hd"style={{fontSize:36,fontWeight:800,color:"white",lineHeight:1.1}}>{cap(w.nl)}</span></div></>);})()}</div>{showPhonetic&&<div className="anim"style={{textAlign:"center",marginBottom:8}}><span style={{display:"inline-block",background:"rgba(74,143,231,0.08)",borderRadius:14,padding:"4px 16px",fontSize:14,color:"var(--blue)",fontWeight:600}}>/{w.phonetic}/</span></div>}<div style={{textAlign:"center",paddingBottom:20}}><div style={{display:"inline-block",background:"linear-gradient(135deg, var(--teal), var(--teal-dark))",borderRadius:14,padding:"8px 24px",boxShadow:"0 3px 12px rgba(46,205,167,0.25)"}}><span style={{fontSize:18,color:"white",fontWeight:700}}>{cap(w.en)}</span></div></div><div style={{background:"var(--panel-bg)",padding:"16px 22px",borderTop:"1.5px solid rgba(74,143,231,0.08)"}}><div style={{background:"var(--card-bg)",borderRadius:14,padding:"12px 16px",boxShadow:"var(--card-shadow)"}}><div style={{fontSize:11,fontWeight:700,color:"var(--gold-dark)",textTransform:"uppercase",letterSpacing:1.5,marginBottom:6}}>💬 {t("le_in_context",baseLang)}</div><div style={{fontSize:15,color:"var(--gray-800)",fontWeight:600,marginBottom:3,lineHeight:1.5,display:"flex",flexWrap:"wrap",alignItems:"center",gap:6}}>{universalHl(w.example, lang, { noColor: true })}<SpeakerButton text={w.example}lang={LANG_META[lang]?.ttsLocale||"en-US"}size={14}showToast={showToast}/></div><div style={{fontSize:13,color:"var(--gray-400)",fontStyle:"italic"}}>"{w.exampleEn}"</div></div></div></div></div>}{!isNew&&<div style={{background:"var(--card-bg)",borderRadius:24,border:"2px solid rgba(255,255,255,0.55)",boxShadow:"0 4px 16px rgba(0,0,0,0.04)",marginBottom:20,overflow:"hidden",position:"relative"}}><div style={{position:"absolute",top:12,right:14,display:"flex",gap:6,zIndex:2}}><button onClick={()=>setShowPhonetic(!showPhonetic)}style={{width:30,height:30,borderRadius:8,background:showPhonetic?"var(--blue-light)":"var(--panel-bg)",border:`1.5px solid ${showPhonetic?"var(--blue)":"var(--gray-200)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,cursor:"pointer",transition:"all .15s"}}>🔤</button><SpeakerButton text={w.nl}lang={LANG_META[lang]?.ttsLocale||"en-US"}size={14}showToast={showToast}/></div>{w.img&&<div style={{textAlign:"center",paddingTop:24}}><div style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:72,height:72,borderRadius:20,background:"var(--card-bg)",boxShadow:"var(--card-shadow)",fontSize:32,lineHeight:1}}>{w.img}</div></div>}<div style={{textAlign:"center",paddingTop:w.img?12:24}}><span style={{display:"inline-block",background:"var(--gray-200)",color:"var(--gray-500)",fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:2,padding:"4px 14px",borderRadius:16}}>{t("le_review",baseLang)}</span></div><div style={{textAlign:"center",padding:"14px 28px 10px"}}>{(()=>{const art=getArticle(w.nl,lang);const c=ARTICLE_COLORS[art];return(<>{art!=="none"&&<div style={{marginBottom:6}}><span style={{display:"inline-block",background:c.pill,color:c.pillText,fontSize:11,fontWeight:700,borderRadius:8,padding:"2px 10px",textTransform:"uppercase",letterSpacing:1}}>{art}</span></div>}<div style={{display:"inline-block",background:c.bg,borderRadius:16,padding:"10px 28px",boxShadow:`0 3px 12px ${c.shadow}`,marginBottom:8}}><span className="hd"style={{fontSize:30,fontWeight:800,color:"white",lineHeight:1.1}}>{cap(w.nl)}</span></div></>);})()}</div>{showPhonetic&&<div className="anim"style={{textAlign:"center",marginBottom:8}}><span style={{display:"inline-block",background:"rgba(74,143,231,0.08)",borderRadius:12,padding:"3px 14px",fontSize:13,color:"var(--blue)",fontWeight:600}}>/{w.phonetic}/</span></div>}<div style={{textAlign:"center",paddingBottom:16}}><div style={{display:"inline-block",background:"linear-gradient(135deg, var(--teal), var(--teal-dark))",borderRadius:12,padding:"6px 20px",boxShadow:"0 2px 10px rgba(46,205,167,0.2)"}}><span style={{fontSize:16,color:"white",fontWeight:700}}>{cap(w.en)}</span></div></div><div style={{background:"var(--panel-bg)",padding:"14px 20px",borderTop:"1.5px solid rgba(74,143,231,0.08)"}}><div style={{background:"var(--card-bg)",borderRadius:12,padding:"10px 14px",boxShadow:"var(--card-shadow)"}}><div style={{fontSize:10,fontWeight:700,color:"var(--gold-dark)",textTransform:"uppercase",letterSpacing:1.2,marginBottom:5}}>💬 {t("le_in_context",baseLang)}</div><div style={{fontSize:14,color:"var(--gray-800)",fontWeight:600,marginBottom:2,lineHeight:1.5,display:"flex",flexWrap:"wrap",alignItems:"center",gap:6}}>{universalHl(w.example, lang, { noColor: true })}<SpeakerButton text={w.example}lang={LANG_META[lang]?.ttsLocale||"en-US"}size={13}showToast={showToast}/></div><div style={{fontSize:12,color:"var(--gray-400)",fontStyle:"italic"}}>"{w.exampleEn}"</div></div></div></div>}{w.note&&<div style={{background:dk?"var(--gold-bg)":"linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)",borderRadius:16,padding:"14px 20px",marginBottom:20,boxShadow:"0 2px 12px rgba(245,166,35,0.15)"}}><div style={{fontSize:11,fontWeight:800,color:"var(--gold-dark)",textTransform:"uppercase",letterSpacing:1.5,marginBottom:6}}><AppIcon name="lightbulb" size={20} style={{marginRight:5}}/>{t("le_note",baseLang)}</div><div style={{fontSize:14,color:"var(--gray-700)",lineHeight:1.6}}>{w.note}</div></div>}<button onClick={()=>{if(!user.lw.has(w.nl)){setUser(u=>({...u,lw:new Set([...u.lw,w.nl])}));}next();}}className="btn-primary"style={{width:"100%"}}>{t("le_continue",baseLang)}</button></div></div>);
  }

  // ═══ POS tag → POS_COLORS key mapper (shared by story + teach renderers) ═══
  const posToColorKey = (pos) => ({pron:"pronoun",art:"article",aux:"auxiliary",conj:"conjunction",prep:"preposition",adv:"adverb",adj:"adjective",intj:"interjection",num:"number",part:"particle"}[pos] || pos);

  // ═══ STORY STEP (new format) — dialogue line from character ═══
  if(st.type==="story") {
    const ttsLocStory = LANG_META[lang]?.ttsLocale||"en-US";
    const isNarrator = st.speaker === "narrator";
    const speakerName = st.speaker || "Verumius";
    const moodEmoji = {confused:"😕",happy:"😄",excited:"🤩",sad:"😢",angry:"😠",thinking:"🤔",surprised:"😲",neutral:"😐",proud:"😎"}[st.mood] || "💬";
    // Compound bubble
    const storyBubble = {
      background: dk
        ? "linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
        : "linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
      border: dk ? "1.5px solid rgba(123,94,232,0.3)" : "1.5px solid rgba(180,165,240,0.4)",
      boxShadow: dk
        ? "0 6px 20px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)"
        : "0 6px 24px rgba(123,94,232,0.1), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)",
      borderRadius: isNarrator ? 14 : "14px 14px 14px 4px",
      position: "relative", overflow: "hidden", padding: "14px 18px",
    };
    const storyGloss = {
      position: "absolute", top: 0, left: "5%", right: "5%", height: "42%",
      borderRadius: "0 0 50% 50%", pointerEvents: "none", zIndex: 0,
      background: dk
        ? "linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)"
        : "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",
    };
    // Tagged word renderer — story cards always render clean (no POS rainbow)
    const renderTaggedStory = (tagged) => {
      if (!tagged || !Array.isArray(tagged)) return null;
      const defaultColor = dk ? "rgba(230,225,245,0.9)" : "var(--gray-800)";
      return tagged.map((t, ti) => (
        <span key={ti} style={{ color: defaultColor, fontWeight: 700, marginRight: ti < tagged.length - 1 ? 4 : 0 }}>{t.w}</span>
      ));
    };
    return (
      <div className="anim" key={si}>
        {wordBubble&&<WordBubble entry={wordBubble.entry} word={wordBubble.word} stem={wordBubble.stem} particle={wordBubble.particle} onClose={()=>setWordBubble(null)}/>}
        {MiniWordPopup}
        <ProgressBar/>
        <div style={{maxWidth:460,margin:"0 auto"}}>
          {/* Speaker label */}
          {!isNarrator && <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
            <span style={{fontSize:20}}>{moodEmoji}</span>
            <span style={{fontSize:13,fontWeight:800,color:dk?"rgba(200,184,255,0.9)":"#7050D8",textTransform:"uppercase",letterSpacing:1.5}}>{speakerName}</span>
          </div>}
          {/* Story bubble */}
          <div style={storyBubble}>
            <div style={storyGloss}/>
            <div style={{position:"relative",zIndex:2}}>
              <div className="trg-text" style={{fontSize:16,fontWeight:700,color:dk?"rgba(230,225,245,0.9)":"var(--gray-800)",lineHeight:1.5,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
                {st.tagged ? renderTaggedStory(st.tagged) : universalHl(st.trg || "", lang, { noColor: true })}
                <SpeakerButton text={st.trg || ""} lang={ttsLocStory} size={13} showToast={showToast}/>
              </div>
              {st.src && <div style={{fontSize:13,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:500,marginTop:6,...srcDir}}>{st.src}</div>}
            </div>
          </div>

          <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:10,marginTop:16}}>
            {si>0&&<NavArrow onClick={goBack} isBack/>}
            <NavArrow onClick={goNext}/>
          </div>
        </div>
      </div>
    );
  }

  // ═══ NEW FORMAT TEACH CARD (trg/src) — dual renderer ═══
  // Only fires for cards ORIGINALLY written in trg/src format (not normalized from nl/en)
  if(st.type==="teach" && st._origTrg) {
    const isNewTrg = isNewInLesson(st.trg);
    const ttsLocNew = LANG_META[lang]?.ttsLocale||"en-US";
    const artNew = getArticle(st.trg, lang);
    const cNew = ARTICLE_COLORS[artNew];
    const labelNew = st.kind==="grammar"?t("le_grammar_pattern",baseLang):st.kind==="phrase"?t("le_key_phrase",baseLang):t("le_new_word",baseLang);
    // Compound bubble styles from design spine
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
    // Tagged word renderer — teach card examples always render clean (no POS rainbow)
    const renderTagged = (tagged) => {
      if (!tagged || !Array.isArray(tagged)) return null;
      const defaultColor = dk ? "rgba(230,225,245,0.9)" : "var(--gray-800)";
      return tagged.map((t, ti) => (
        <span key={ti} style={{
          color: defaultColor,
          fontWeight: 700,
          marginRight: ti < tagged.length - 1 ? 4 : 0,
        }}>{t.w}</span>
      ));
    };
    return (
      <div className="anim" key={si}>
        {wordBubble&&<WordBubble entry={wordBubble.entry} word={wordBubble.word} stem={wordBubble.stem} particle={wordBubble.particle} onClose={()=>setWordBubble(null)}/>}
        {MiniWordPopup}
        <ProgressBar/>
        <div style={{maxWidth:460,margin:"0 auto"}}>
          {/* ═══ NEW-FORMAT TEACH CARD — Same v1 board style, uses trg/src ═══ */}
          {(()=>{
            const accentColorNew = isNewTrg ? "#7B5EE8" : "var(--gray-300)";
            const artWordNew = artNew!=="none" ? st.trg.split(/\s(.+)/) : null;
            return <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.55)",borderLeft:`4px solid ${accentColorNew}`,boxShadow:"0 4px 20px rgba(0,0,0,0.05)",overflow:"hidden",marginBottom:16}}>
              {/* Top strip */}
              <div style={{background:isNewTrg?"linear-gradient(135deg, rgba(123,94,232,0.06), rgba(46,205,167,0.04))":"rgba(0,0,0,0.01)",padding:"12px 20px 10px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                <span style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:isNewTrg?"#7B5EE8":"var(--gray-400)"}}>{isNewTrg?labelNew:t("le_review",baseLang)}</span>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <SpeakerButton text={st.trg} lang={ttsLocNew} size={15} showToast={showToast}/>
                  {st.phonetic&&<button onClick={()=>setShowPhonetic(!showPhonetic)} style={{background:"none",border:"none",cursor:"pointer",padding:"2px 0",display:"flex",alignItems:"center",transition:"all .15s"}}><span style={{fontSize:12,fontWeight:700,color:showPhonetic?"#7B5EE8":"var(--gray-300)",letterSpacing:0.5,transition:"color .15s"}}>Abc</span></button>}
                </div>
              </div>
              {/* Word display — article color-coded (no separate article chip), same as v1 */}
              <div className="trg-text-center" style={{textAlign:"center",padding:"16px 28px 8px"}}>
                <div style={{marginBottom:6}}>
                  {artWordNew&&artWordNew[1] ? (
                    <span className="hd" style={{fontSize:36,fontWeight:800,lineHeight:1.1,fontFamily:"'Quicksand','system-ui',sans-serif"}}>
                      <span style={{color:cNew.pillText}}>{cap(artWordNew[0])}</span>{" "}
                      <span style={{color:cNew.pillText}}>{artWordNew[1]}</span>
                    </span>
                  ) : (
                    <span className="hd" style={{fontSize:36,fontWeight:800,color:"var(--gray-800)",lineHeight:1.1,fontFamily:"'Quicksand','system-ui',sans-serif"}}>{cap(st.trg)}</span>
                  )}
                </div>
              </div>
              {/* Translation */}
              <div style={{textAlign:"center",paddingBottom:st.phonetic&&showPhonetic?6:14}}>
                <span style={{fontSize:18,color:"var(--gray-800)",fontWeight:700,...srcDir}}>{cap(st.src)}</span>
              </div>
              {/* Phonetic */}
              {showPhonetic&&st.phonetic&&<div className="anim" style={{textAlign:"center",paddingBottom:12,paddingRight:8}}>
                <span style={{fontSize:13,fontWeight:600,color:"rgba(123,94,232,0.55)",fontStyle:"italic",marginLeft:40}}>{st.phonetic}</span>
              </div>}
            </div>;
          })()}

          {/* Example with tagged words — dialogue-aware bubbles (matches board-mode) */}
          {st.example && (()=>{
            const ex = st.example||"";
            const exTrans = st.exampleSrc||st.exampleEn||"";
            const isDialogue = /[ABأب]:\s/.test(ex);
            if(isDialogue){
              const turns = ex.split(/(?=[ABأب]:\s)/).filter(Boolean);
              const turnsEn = exTrans.split(/(?=[ABأب]:\s)/).filter(Boolean);
              return <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:16}}>
                {turns.map((turn,ti)=>{
                  const isA = turn.trim().startsWith("A:")||turn.trim().startsWith("أ:");
                  const content = turn.replace(/^[ABأب]:\s*/,"").trim();
                  const enC = (turnsEn[ti]||"").replace(/^[ABأب]:\s*/,"").trim();
                  return <div key={ti} style={{display:"flex",justifyContent:isA?"flex-start":"flex-end",paddingLeft:isA?0:30,paddingRight:isA?30:0}}>
                    <div style={{...compBubble,maxWidth:"82%",borderRadius:isA?"20px 20px 20px 6px":"20px 20px 6px 20px",padding:"14px 18px"}}>
                      <div style={glossArc}/>
                      <div style={{position:"relative",zIndex:2}}>
                        <div className="trg-text" style={{fontSize:15,fontWeight:700,color:dk?"rgba(230,225,245,0.9)":"var(--gray-800)",lineHeight:1.4,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
                          {st.tagged ? renderTagged(st.tagged) : universalHl(content, lang, { noColor: true })}
                          <SpeakerButton text={content} lang={ttsLocNew} size={13} showToast={showToast}/>
                        </div>
                        {enC&&<div style={{fontSize:12,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:500,marginTop:4,...srcDir}}>{enC}</div>}
                      </div>
                    </div>
                  </div>;
                })}
              </div>;
            }
            return <div style={{...compBubble, padding:"14px 18px", marginBottom:16}}>
              <div style={glossArc}/>
              <div style={{position:"relative",zIndex:2}}>
                <div className="trg-text" style={{fontSize:15,fontWeight:700,color:dk?"rgba(230,225,245,0.9)":"var(--gray-800)",lineHeight:1.5,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
                  {st.tagged ? renderTagged(st.tagged) : universalHl(ex, lang, { noColor: true })}
                  <SpeakerButton text={ex} lang={ttsLocNew} size={13} showToast={showToast}/>
                </div>
                {exTrans && <div style={{fontSize:13,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:500,marginTop:4,...srcDir}}>{exTrans}</div>}
              </div>
            </div>;
          })()}

          {/* Fun Info / Fun Fact — COMPOUND chip style (same as Korean morpheme bubbles) */}
          {(st.funInfo || st.funFact) && (()=>{
            const funText = st.funInfo || st.funFact;
            // Parse compound parts: "Flug (flight) + Zeug (stuff/thing)" => [{morph:"Flug",gloss:"flight"},{morph:"Zeug",gloss:"stuff/thing"}]
            // Strip any prefix like "A compound noun:", "Another compound:", "Compound:" etc.
            const compMatch = funText.match(/^(?:.*?compound[^:]*:\s*)?([A-Za-zÀ-ÿ]+\s*\([^)]+\)(?:\s*\+\s*[A-Za-zÀ-ÿ]+\s*\([^)]+\))+)/);
            const parts = compMatch ? compMatch[1].split(/\s*\+\s*/).map(p => {
              const m = p.trim().match(/^([^\s(]+)\s*\(([^)]+)\)/);
              return m ? {morph:m[1],gloss:m[2]} : {morph:p.trim(),gloss:""};
            }) : null;
            // Rest of the text after the compound decomposition
            const restText = parts ? funText.replace(compMatch[0],"").replace(/^\.\s*/,"").trim() : null;
            return <div style={{...compBubble, padding:"18px 20px 16px", marginBottom:16}}>
              <div style={glossArc}/>
              <div style={{position:"relative",zIndex:2}}>
                <div style={{fontSize:10,fontWeight:800,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:2.5,marginBottom:10,display:"flex",alignItems:"center",gap:6,fontFamily:"'Nunito','system-ui',sans-serif"}}>
                  <AppIcon name="lightbulb" size={16}/>{parts?t("le_compound",baseLang):t("le_fun_fact",baseLang)}
                </div>
                {/* Morpheme chips — same style as Korean COMPOUND */}
                {parts && <div style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:8,justifyContent:"center",padding:"6px 0",marginBottom:restText?10:0}}>
                  {parts.map((p,pi)=><React.Fragment key={pi}>
                    {pi>0&&<span style={{color:dk?"rgba(123,94,232,0.35)":"rgba(160,140,230,0.4)",fontSize:13,fontWeight:800}}>+</span>}
                    <span style={{display:"inline-flex",flexDirection:"column",alignItems:"center",
                      background:dk
                        ?"linear-gradient(160deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))"
                        :"linear-gradient(160deg, rgba(255,255,255,0.92), rgba(255,255,255,0.65))",
                      borderRadius:14,padding:"8px 16px",
                      border:dk?"1px solid rgba(255,255,255,0.1)":"1px solid rgba(180,165,240,0.25)",
                      boxShadow:dk
                        ?"0 3px 10px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)"
                        :"0 3px 12px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.9)"}}>
                      <span style={{display:"flex",alignItems:"baseline",gap:4}}>
                        <span style={{fontSize:24,fontWeight:800,color:"var(--purple-accent-text)"}}>{p.morph}</span>
                        {p.gloss&&<span style={{fontSize:12,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:600,fontFamily:"'Nunito','system-ui',sans-serif",marginLeft:2}}>({p.gloss})</span>}
                      </span>
                    </span>
                  </React.Fragment>)}
                </div>}
                {/* Extra context text below the chips */}
                {restText && <div style={{fontSize:13,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:500,lineHeight:1.6,fontFamily:"'Nunito','system-ui',sans-serif"}}>{restText}</div>}
                {/* Non-compound fun info: plain text */}
                {!parts && <div style={{fontSize:14,lineHeight:1.7,fontWeight:500,color:dk?"rgba(220,210,255,0.85)":"#3A1F8A"}}>{funText}</div>}
              </div>
            </div>;
          })()}

          {/* Note section — compound bubble + purple-bar note card */}
          {st.note && (()=>{
            const noteLines2 = (st.note||"").split(/\\n|\n/);
            const compLines2 = [];
            const plainLines2 = [];
            noteLines2.forEach(line => {
              if(line.trim().startsWith("COMPOUND:")||line.trim().startsWith("SINO-KOREAN COMPOUND:")||line.trim().startsWith("SINO-KOREAN:")) compLines2.push(line);
              else plainLines2.push(line);
            });
            return <div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:14}}>
              {compLines2.length>0 && <div style={{...compBubble, padding:"18px 20px 16px"}}>
                <div style={glossArc}/>
                <div style={{position:"relative",zIndex:2}}>
                  <div style={{fontSize:10,fontWeight:800,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:2.5,marginBottom:10,display:"flex",alignItems:"center",gap:6,fontFamily:"'Nunito','system-ui',sans-serif"}}>
                    <AppIcon name="lightbulb" size={16}/>{t("le_compound",baseLang)||"Compound"}
                  </div>
                  {compLines2.map((line,li)=>{
                    const cleaned=line.replace(/^(COMPOUND|SINO-KOREAN COMPOUND|SINO-KOREAN):\s*/,"").replace(/\.\s*$/,"").trim();
                    if(!cleaned) return null;
                    const parts2=cleaned.split(/\s*\+\s*/);
                    return <div key={li} style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:8,justifyContent:"center",padding:"6px 0"}}>
                      {parts2.map((part,pi)=>{
                        const m2=part.match(/^([^\s(]+)\s*\(([^)]+)\)/);
                        return <React.Fragment key={pi}>
                          {pi>0&&<span style={{color:dk?"rgba(123,94,232,0.35)":"rgba(160,140,230,0.4)",fontSize:13,fontWeight:800}}>+</span>}
                          <div style={{background:dk?"rgba(30,28,50,0.5)":"rgba(255,255,255,0.7)",borderRadius:14,padding:"10px 16px",border:dk?"1px solid rgba(123,94,232,0.2)":"1px solid rgba(200,190,240,0.5)",textAlign:"center",minWidth:60}}>
                            <div className="trg-text" style={{fontSize:18,fontWeight:800,color:dk?"rgba(230,225,245,0.95)":"#2D2B55",lineHeight:1.2}}>{m2?m2[1]:part}</div>
                            {m2&&<div style={{fontSize:11,fontWeight:600,color:dk?"rgba(200,190,255,0.6)":"var(--gray-400)",marginTop:3}}>{m2[2]}</div>}
                          </div>
                        </React.Fragment>;
                      })}
                    </div>;
                  })}
                </div>
              </div>}
              {plainLines2.filter(l=>l.trim()).length>0 && <div className="meta-text" style={{background:"var(--card-bg)",border:"2px solid rgba(255,255,255,0.55)",borderLeft:"3px solid var(--purple-accent)",borderRadius:16,padding:"14px 18px"}}>
                {plainLines2.map((line,li)=>{
                  if(!line.trim()) return <div key={li} style={{height:6}}/>;
                  if(line.startsWith("•")) return <div key={li} style={{fontSize:15,color:"var(--gray-600)",padding:"3px 0 3px 4px",display:"flex",gap:8,lineHeight:1.7,fontFamily:"'Nunito','system-ui',sans-serif",fontWeight:500}}><span style={{color:"var(--purple-accent-text)",fontWeight:700,flexShrink:0}}>&#8226;</span><span>{line.slice(1).trim()}</span></div>;
                  return <div key={li} style={{fontSize:15,color:"var(--gray-600)",lineHeight:1.75,fontWeight:500,fontFamily:"'Nunito','system-ui',sans-serif"}}>{line}</div>;
                })}
              </div>}
            </div>;
          })()}

          <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:10,marginTop:4}}>
            {si>0&&<NavArrow onClick={goBack} isBack/>}
            <NavArrow onClick={()=>{learnWord(st.trg);setShowPhonetic(false);setShowCognate(false);setShowHanja(false);goNext();}}/>
          </div>
        </div>
      </div>
    );
  }

  // ═══ TEACH — Multi-kind card (word / letter / info / idiom) ═══
  const isNew = st.type==="teach" && isNewInLesson(st.nl);
  const teachKind = st.kind || "word"; // "word" | "letter" | "info" | "idiom" | "grammar" | "phrase"
  const ttsLoc = LANG_META[lang]?.ttsLocale||"en-US";
  const teachLabel = teachKind==="letter"?t("le_new_letter",baseLang):teachKind==="info"?t("le_concept",baseLang):teachKind==="idiom"?t("le_new_expression",baseLang):teachKind==="grammar"?t("le_grammar_pattern",baseLang):teachKind==="phrase"?t("le_key_phrase",baseLang):t("le_new_word",baseLang);

  // ── INFO card — board-style structural/concept card ──
  if(st.type==="teach" && teachKind==="info") {
    return(
    <div className="anim" key={si}>
      <ProgressBar/>
      <div style={{maxWidth:460,margin:"0 auto"}}>
        {/* Main card — board style */}
        <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.45)",borderLeft:"4px solid var(--purple-accent)",overflow:"hidden",marginBottom:16,...glass}}>
          {/* Top strip */}
          <div style={{background:"linear-gradient(135deg, rgba(123,94,232,0.06), rgba(46,205,167,0.04))",padding:"12px 20px 10px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <span style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"var(--purple-accent-text)"}}>{teachLabel}</span>
            {st.nl&&/[^\u0000-\u007F]/.test(st.nl)&&<SpeakerButton text={st.nl} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={15} showToast={showToast} />}
          </div>
          {/* nl — big centered */}
          <div style={{textAlign:"center",padding:"16px 28px 8px"}}>
            <h3 style={{fontSize:42,fontWeight:800,color:"var(--gray-800)",fontFamily:"'Quicksand','system-ui',sans-serif",margin:0,lineHeight:1.2}}>
              {st.nl}
            </h3>
          </div>
          {/* Translation */}
          <div style={{textAlign:"center",paddingBottom:14}}>
            <span style={{fontSize:18,color:"var(--gray-700)",fontWeight:700}}>{cap(st.en)}</span>
          </div>
          {/* Example row — split on \n for multi-line, renderLetterExample per line */}
          {st.example&&<div style={{borderTop:"1.5px solid var(--gray-100)",padding:"14px 22px",background:"var(--example-bg)"}}>
            <div style={{display:"flex",flexDirection:"column",gap:6}}>
              {st.example.split(/\\n|\n/).map((line,li)=><div key={li} style={{lineHeight:1.8,textAlign:"center"}}>{renderLetterExample(line)}</div>)}
            </div>
            {st.exampleEn&&<div style={{fontSize:13,color:"var(--gray-400)",marginTop:6,fontStyle:"italic",textAlign:"center"}}>{smartHl(st.exampleEn)}</div>}
            {st.phonetic&&<div style={{marginTop:6,textAlign:"center"}}><span style={{fontSize:13,color:"var(--gray-400)",fontWeight:500}}>{smartHl(st.phonetic)}</span></div>}
          </div>}
          {/* Phonetic fallback when no example */}
          {st.phonetic&&!st.example&&<div style={{textAlign:"center",paddingBottom:10}}>
            <span style={{fontSize:13,color:"var(--gray-400)",fontWeight:500}}>{smartHl(st.phonetic)}</span>
          </div>}
        </div>

        {/* ── SYLLABLE BLOCK DIAGRAM ── */}
        {renderDiagram(st.diagram)}

        {/* Rules grid — teacher's board layout */}
        {st.rules&&<div style={{background:"var(--card-bg)",border:"2px solid rgba(255,255,255,0.55)",borderLeft:"3px solid var(--purple-accent)",borderRadius:20,padding:"20px 22px",marginBottom:16}}>
          {st.trigger&&<div style={{textAlign:"center",marginBottom:14}}>
            <span style={{display:"inline-block",background:"rgba(123,94,232,0.08)",borderRadius:10,padding:"4px 14px",fontSize:12,fontWeight:700,color:"var(--purple-accent-text)",letterSpacing:0.5}}>{st.trigger}</span>
          </div>}
          <div style={{display:"flex",flexDirection:"column",gap:4}}>
            {st.rules.map((r,ri)=>(<div key={ri} style={{padding:"6px 0",borderBottom:ri<st.rules.length-1?"1px solid var(--gray-100)":"none"}}>
              <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10,flexWrap:"wrap"}}>
                <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap",justifyContent:"center"}}>
                  {r.from.split(/\s*\+\s/).length>1?
                    r.from.split(/\s*\+\s*/).map((part,pi,arr)=>(<span key={pi} style={{display:"inline-flex",alignItems:"center",gap:6}}>
                      <span style={{fontSize:28,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1}}>{part.trim()}</span>
                      {pi<arr.length-1&&<span style={{fontSize:14,fontWeight:700,color:"var(--gray-300)"}}>+</span>}
                    </span>))
                    :r.from.split(/\s+/).map((part,pi,arr)=>(<span key={pi} style={{display:"inline-flex",alignItems:"center",gap:4}}>
                      <span style={{fontSize:24,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1}}>{part.trim()}</span>
                      {pi<arr.length-1&&<span style={{fontSize:11,color:"var(--gray-300)"}}>/</span>}
                    </span>))
                  }
                </div>
                <span style={{fontSize:20,color:"var(--gray-300)",fontWeight:800}}>→</span>
                <span style={{fontSize:28,fontWeight:800,color:"var(--teal)",lineHeight:1}}>{r.to}</span>
                {r.label&&<span style={{fontSize:13,fontWeight:600,color:"var(--teal-dark)"}}>{r.label}</span>}
              </div>
              {r.ex&&<div style={{textAlign:"center",marginTop:2}}>
                <span style={{fontSize:13,color:"var(--gray-400)",fontWeight:500}}>{r.ex}</span>
              </div>}
            </div>))}
          </div>
          {st.note&&<div style={{textAlign:"center",marginTop:14,paddingTop:12,borderTop:"1.5px solid var(--gray-100)"}}>
            <span style={{fontSize:13,color:"var(--gray-500)",fontWeight:600,fontStyle:"italic"}}>{smartHl(st.note)}</span>
          </div>}
        </div>}

        {/* Plain note — structured with hl + bullets + Korean/→ pair cards */}
        {st.note&&!st.rules&&<div style={{background:"var(--card-bg)",border:"2px solid rgba(255,255,255,0.55)",borderLeft:"3px solid var(--purple-accent)",borderRadius:16,padding:"14px 18px",marginBottom:14}}>
          {(()=>{
            const noteLines=st.note.split(/\\n|\n/);
            const out=[];let ni=0;
            while(ni<noteLines.length){
              const line=noteLines[ni];
              const nextLine=noteLines[ni+1]||"";
              const hasKorean=/[\uAC00-\uD7AF\u3130-\u318F]/.test(line.trim());
              const nextIsArrow=nextLine.trim().startsWith("→");
              if(hasKorean&&nextIsArrow&&line.trim()){
                const translation=nextLine.trim().slice(1).trim();
                out.push(
                  <div key={ni} style={{
                    background:dk?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)":"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
                    borderRadius:16,padding:"14px 18px",margin:"8px 0",position:"relative",overflow:"hidden",
                    border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
                    boxShadow:dk?"0 4px 16px rgba(0,0,0,0.25), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -2px 0 rgba(0,0,0,0.1)":"0 4px 18px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -2px 0 rgba(123,94,232,0.04)"}}>
                    <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"44%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.58) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
                    <div style={{position:"relative",zIndex:2}}>
                      <div style={{fontSize:22,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1.3,marginBottom:8}}>{smartHl(line.trim())}</div>
                      <div style={{fontSize:13,fontWeight:500,color:dk?"rgba(200,190,255,0.6)":"var(--gray-500)",lineHeight:1.5}}>{smartHl(translation)}</div>
                    </div>
                  </div>
                );
                ni+=2;continue;
              }
              if(!line.trim()){out.push(<div key={ni} style={{height:20}}/>);ni++;continue;}
              if(line.startsWith("•")){out.push(<div key={ni} style={{fontSize:14,color:"var(--gray-600)",padding:"2px 0 2px 4px",display:"flex",gap:6,lineHeight:1.6}}><span style={{color:"var(--purple-accent-text)",fontWeight:700}}>•</span><span>{smartHl(line.slice(1).trim())}</span></div>);ni++;continue;}
              const isHeader=line.trim().endsWith(":");
              out.push(<div key={ni} style={{fontSize:14,color:isHeader?"var(--gray-800)":"var(--gray-600)",fontWeight:isHeader?700:500,lineHeight:1.7,marginTop:isHeader?6:0}}>{smartHl(line)}</div>);
              ni++;
            }
            return out;
          })()}
        </div>}

        {/* Continue */}
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:10,marginTop:4}}>
          {si>0&&<NavArrow onClick={goBack} isBack/>}
          <NavArrow onClick={()=>{learnWord(st.nl);goNext();}}/>
        </div>
      </div>
    </div>
  );}

  // ── LETTER / WORD / IDIOM cards ──
  // Helper: render letter examples with Hangul purple, operators gray
  const showInContext = teachKind==="word"||teachKind==="idiom"||teachKind==="grammar"||teachKind==="phrase"; // letters and info don't get "In Context"
  const isDialogueEx = /[ABأب]:\s/.test(st.example||""); // dialogue examples render as standalone iOS bubbles
  const showEmoji = teachKind==="word"||teachKind==="idiom"; // letters don't show emoji icon
  const isScript = /[\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/.test(st.nl); // Korean/Arabic/CJK = script mode (NOT Latin diacritics like ë, ü, é)
  const letterSize = teachKind==="letter" ? 52 : 36; // letters get extra big display
  const boardMode = !!lesson.board; // Teacher's board style — clean, minimal, practical

  // ═══ BOARD-STYLE TEACH CARD (v2 lessons) ═══
  // Neuroscience: elaborative encoding (cognates), Von Restorff (also-means stands out),
  // dual coding (color-coded word type), curiosity gap (polysemy reveal)
  if(st.type==="teach" && boardMode) {
    // Ensure nl/en aliases exist (field rename: trg/src is the new canonical format)
    if(st.trg!==undefined&&st.nl===undefined){st.nl=st.trg;st.en=st.src;st.exampleEn=st.exampleSrc;}
    const _word=st.trg||st.nl||"";const _trans=st.src||st.en||"";
    const art=getArticle(_word,lang);const c=ARTICLE_COLORS[art]||ARTICLE_COLORS.none;
    const accentColor=isNew?"#7B5EE8":"var(--gray-300)";
    const noteHl=(text)=>universalHl(text, lang, {noColor:true});
    const exHl=(t)=>universalHl(t, lang, {noColor:true});
    // Letter size: single Hangul jamo/syllable gets extra large
    const nlSize = teachKind==="letter" ? 64 : isScript ? 48 : 36;
    // Force purple for non-ASCII letters, otherwise noun stays dark, article gets color
    const nlColor = isScript ? "#7B5EE8" : "var(--gray-800)";
    // Split word into article + noun for color-coded display
    const artWord = art!=="none" && !isScript ? _word.split(/\s(.+)/) : null;
    return(
    <div className="anim" key={si}>
      {wordBubble&&<WordBubble entry={wordBubble.entry} word={wordBubble.word} stem={wordBubble.stem} particle={wordBubble.particle} onClose={()=>setWordBubble(null)}/>}
      {MiniWordPopup}
      <ProgressBar/>
      <div style={{maxWidth:460,margin:"0 auto"}}>

        {/* Main card with subtle left accent */}
        <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.55)",borderLeft:`4px solid ${accentColor}`,boxShadow:"0 4px 20px rgba(0,0,0,0.05)",overflow:"hidden",marginBottom:16}}>

          {/* Top strip — thin gradient accent + label */}
          <div style={{background:isNew?"linear-gradient(135deg, rgba(123,94,232,0.06), rgba(46,205,167,0.04))":"rgba(0,0,0,0.01)",padding:"12px 20px 10px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{display:"flex",flexDirection:"column",gap:4}}>
              <span style={{fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:isNew?"#7B5EE8":"var(--gray-400)"}}>
                {isNew?teachLabel:t("le_review",baseLang)}
              </span>
              {st.fRef&&<span style={{display:"inline-flex",alignItems:"center",gap:4,background:"var(--purple-bg)",border:"1px solid var(--purple-border)",borderRadius:8,padding:"3px 10px",fontSize:10,color:"var(--purple-accent-text)",fontWeight:700,cursor:"pointer"}}>📖 {st.fRef.replace(/^nl_/,"").replace(/_/g," ").replace(/\b\w/g,c=>c.toUpperCase())}</span>}
            </div>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <SpeakerButton text={st.nl} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={15} showToast={showToast} />
              {st.phonetic&&<button onClick={()=>setShowPhonetic(!showPhonetic)} style={{background:"none",border:"none",cursor:"pointer",padding:"2px 0",display:"flex",alignItems:"center",transition:"all .15s"}}><span style={{fontSize:12,fontWeight:700,color:showPhonetic?"#7B5EE8":"var(--gray-300)",fontFamily:"'Georgia','Times New Roman',serif",letterSpacing:0.5,transition:"color .15s"}}>{isScript?"로마":"Abc"}</span></button>}
            </div>
          </div>

          {/* The word/letter — big, centered, article ALWAYS color-coded on teach cards */}
          <div className="trg-text-center" style={{textAlign:"center",padding:"16px 28px 8px"}}>
            <div style={{marginBottom:6}}>
              {artWord&&artWord[1] ? (
                <span className="hd" style={{fontSize:nlSize,fontWeight:800,lineHeight:1.1,fontFamily:"'Quicksand','system-ui',sans-serif"}}>
                  <span style={{color:c.pillText}}>{cap(artWord[0])}</span>{" "}
                  <span style={{color:c.pillText}}>{artWord[1]}</span>
                </span>
              ) : (
                <span className="hd" style={{fontSize:nlSize,fontWeight:800,color:nlColor,lineHeight:1.1,fontFamily:"'Quicksand','system-ui',sans-serif"}}>{_word}</span>
              )}
            </div>
          </div>

          {/* Translation — teal */}
          <div style={{textAlign:"center",paddingBottom:st.phonetic&&showPhonetic?6:14}}>
            <span style={{fontSize:18,color:"var(--gray-700)",fontWeight:700}}>{cap(_trans)}</span>
          </div>

          {/* Phonetic — P38: right-shifted whisper below translation */}
          {st.phonetic&&!isScript&&showPhonetic&&<div className="anim" style={{textAlign:"center",paddingBottom:12,paddingRight:8}}>
            <span style={{fontSize:13,fontWeight:600,color:"rgba(123,94,232,0.55)",fontStyle:"italic",marginLeft:40}}>{st.phonetic}</span>
          </div>}
          {/* Phonetic — non-Latin scripts: behind toggle too */}
          {st.phonetic&&isScript&&showPhonetic&&<div className="anim" style={{textAlign:"center",paddingBottom:12}}>
            <span style={{fontSize:13,fontWeight:500,color:"var(--gray-400)"}}>{smartHl(st.phonetic)}</span>
          </div>}

          {/* Also means — polysemy badge */}
          {st.also&&<div style={{textAlign:"center",paddingBottom:12}}>
            <div style={{display:"inline-flex",alignItems:"center",gap:6,background:"rgba(123,94,232,0.06)",border:"1.5px solid rgba(123,94,232,0.15)",borderRadius:10,padding:"5px 14px"}}>
              <span style={{fontSize:12,fontWeight:700,color:"var(--purple-accent-text)"}}>⚡ Also:</span>
              <span style={{fontSize:13,fontWeight:600,color:"var(--gray-700)"}}>{st.also}</span>
            </div>
          </div>}

          {/* Examples now render as standalone compound bubbles below the card */}
          {/* Phonetic fallback removed — P38 places it below translation */}

          {/* Cognate — collapsible word family popup */}
          {st.cognate&&<div style={{borderTop:"1px solid var(--gray-100)"}}>
            <button onClick={()=>setShowCognate(!showCognate)} style={{width:"100%",background:"none",border:"none",cursor:"pointer",padding:"8px 22px",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"all .15s"}}>
              <span style={{fontSize:12,fontWeight:600,color:showCognate?"#7B5EE8":"var(--gray-350)",transition:"color .15s",letterSpacing:0.3}}>Word family</span>
              <span style={{fontSize:10,color:showCognate?"#7B5EE8":"var(--gray-300)",transition:"all .2s",transform:showCognate?"rotate(180deg)":"rotate(0)"}}>⌄</span>
            </button>
            {showCognate&&<div className="anim" style={{padding:"0 22px 14px"}}>
              <div style={{background:"rgba(123,94,232,0.04)",borderRadius:12,padding:"14px 16px"}}>
                {typeof st.cognate==="object"&&st.cognate.words?<>
                  <div style={{display:"flex",flexDirection:"column",gap:6,marginBottom:st.cognate.family?12:0}}>
                    {st.cognate.words.map((w,wi)=><div key={wi} style={{display:"flex",alignItems:"baseline",gap:10}}>
                      <span style={{fontSize:11,fontWeight:600,color:"var(--gray-400)",minWidth:56,textAlign:"right"}}>{w.lang}</span>
                      <span style={{fontSize:14,fontWeight:700,color:"var(--purple-accent-text)",fontFamily:"'Quicksand','system-ui',sans-serif"}}>{w.word}</span>
                    </div>)}
                  </div>
                  {st.cognate.family&&LANG_FAMILIES[st.cognate.family]&&<div style={{borderTop:"1px solid rgba(123,94,232,0.1)",paddingTop:10}}>
                    <div style={{fontSize:12,fontWeight:700,color:"var(--gray-700)",marginBottom:4}}>{LANG_FAMILIES[st.cognate.family].headline}</div>
                    <div style={{fontSize:11,color:"var(--gray-400)",lineHeight:1.55}}>{LANG_FAMILIES[st.cognate.family].detail}</div>
                  </div>}
                </>:<>
                  <div style={{fontSize:13,color:"var(--purple-accent-text)",fontWeight:600,lineHeight:1.6}}>{st.cognate}</div>
                </>}
              </div>
            </div>}
          </div>}
        </div>

        {/* Standalone compound-style example bubble — ALL examples render here */}
        {showInContext&&st.example&&(()=>{
          const ex=st.example||"";const exEn=st.exampleEn||"";
          const bubbleStyle={
            background:dk
              ?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
              :"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
            borderRadius:20,padding:"14px 18px",position:"relative",overflow:"hidden",
            border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
            boxShadow:dk
              ?"0 6px 20px rgba(0,0,0,0.3), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)"
              :"0 6px 24px rgba(123,94,232,0.1), 0 0 12px rgba(180,165,240,0.15), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)"};
          const glossArc={position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",
            background:dk
              ?"linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)"
              :"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",
            pointerEvents:"none",zIndex:1};
          if(isDialogueEx){
            const turns=ex.split(/(?=[ABأب]:\s)/).filter(Boolean);
            const turnsEn=exEn.split(/(?=[ABأب]:\s)/).filter(Boolean);
            return <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:14}}>
              {turns.map((turn,ti)=>{
                const isA=turn.trim().startsWith("A:")||turn.trim().startsWith("أ:");
                const content=turn.replace(/^[ABأب]:\s*/,"").trim();
                const enC=(turnsEn[ti]||"").replace(/^[ABأب]:\s*/,"").trim();
                return <div key={ti} style={{display:"flex",justifyContent:isA?"flex-start":"flex-end",paddingLeft:isA?0:30,paddingRight:isA?30:0}}>
                  <div style={{...bubbleStyle,maxWidth:"82%",borderRadius:isA?"20px 20px 20px 6px":"20px 20px 6px 20px"}}>
                    <div style={glossArc}/>
                    <div style={{position:"relative",zIndex:2}}>
                      <div className="trg-text" style={{fontSize:15,fontWeight:700,color:dk?"rgba(230,225,245,0.9)":"var(--gray-800)",lineHeight:1.4,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
                        {universalHl(content, lang, { noColor: true })}
                        <SpeakerButton text={content} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={13} showToast={showToast}/>
                      </div>
                      {enC&&<div style={{fontSize:12,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:500,marginTop:4,...srcDir}}>{enC}</div>}
                    </div>
                  </div>
                </div>;
              })}
            </div>;
          }
          return <div style={{...bubbleStyle,marginBottom:14}}>
            <div style={glossArc}/>
            <div style={{position:"relative",zIndex:2}}>
              <div className="trg-text" style={{fontSize:15,fontWeight:700,color:dk?"rgba(230,225,245,0.9)":"var(--gray-800)",lineHeight:1.5,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
                {universalHl(ex, lang, { noColor: true })}
                <SpeakerButton text={ex} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={13} showToast={showToast}/>
              </div>
              {exEn&&<div style={{fontSize:13,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:500,marginTop:4,...srcDir}}>{exEn}</div>}
            </div>
          </div>;
        })()}

        {/* Note — compound bubble + note card as separate elements */}
        {st.note&&(()=>{
          const lines=st.note.split(/\\n|\n/);
          const compoundLines=[];
          const noteLines=[];
          let inCompound=false;
          lines.forEach(line=>{
            if(line.trim().startsWith("COMPOUND:")||line.trim().startsWith("SINO-KOREAN COMPOUND:")||line.trim().startsWith("SINO-KOREAN:")){inCompound=true;compoundLines.push(line);}
            else if(inCompound&&(line.trim().startsWith("Literally:")||line.trim().startsWith("'")||line.trim().startsWith("'"))){compoundLines.push(line);inCompound=false;}
            else if(inCompound&&line.trim().match(/\+/)&&line.trim().match(/\(/)){compoundLines.push(line);}
            else{inCompound=false;noteLines.push(line);}
          });
          return(<div style={{display:"flex",flexDirection:"column",gap:12,marginBottom:14}}>
            {/* COMPOUND — glossy candy bubble, tinted to unit color */}
            {compoundLines.length>0&&(()=>{
              return <div style={{
                background:dk
                  ?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
                  :"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
                borderRadius:22,padding:"18px 20px 16px",position:"relative",overflow:"hidden",
                border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
                boxShadow:dk
                  ?"0 6px 20px rgba(0,0,0,0.3), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)"
                  :"0 6px 24px rgba(123,94,232,0.1), 0 0 12px rgba(180,165,240,0.15), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)"}}>
                {/* Gloss arc — candy shine */}
                <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",
                  borderRadius:"0 0 50% 50%",
                  background:dk
                    ?"linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)"
                    :"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",
                  pointerEvents:"none",zIndex:1}}/>
                <div style={{position:"relative",zIndex:2}}>
                  <div style={{fontSize:10,fontWeight:800,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:2.5,marginBottom:10,display:"flex",alignItems:"center",justifyContent:"space-between",fontFamily:"'Nunito','system-ui',sans-serif"}}>
                    <span style={{display:"flex",alignItems:"center",gap:6}}><AppIcon name="lightbulb" size={16}/>Compound</span>
                    {st.hanja&&<button onClick={()=>setShowHanja(!showHanja)} style={{background:showHanja?(dk?"rgba(123,94,232,0.2)":"rgba(123,94,232,0.1)"):"none",border:showHanja?`1px solid ${dk?"rgba(123,94,232,0.4)":"rgba(123,94,232,0.2)"}`:"1px solid transparent",borderRadius:8,padding:"3px 8px",cursor:"pointer",fontSize:11,fontWeight:700,color:showHanja?"var(--purple-accent-text)":(dk?"rgba(200,190,255,0.4)":"var(--gray-400)"),transition:"all .15s",fontFamily:"'Nunito','system-ui',sans-serif",letterSpacing:0}}>漢字</button>}
                  </div>
                  {(()=>{
                    const hanjaArr=st.hanja?st.hanja.split("+"):[];
                    let hanjaIdx=0;
                    return compoundLines.map((line,li)=>{
                    const cleaned=line.replace(/^(COMPOUND|SINO-KOREAN COMPOUND|SINO-KOREAN):\s*/,"").trim();
                    if(!cleaned) return null;
                    if(cleaned.startsWith("Literally:")||cleaned.startsWith("'")||cleaned.startsWith("'")){
                      return <div key={li} style={{fontSize:13,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontStyle:"italic",marginTop:6,fontWeight:500,fontFamily:"'Nunito','system-ui',sans-serif"}}>{cleaned}</div>;
                    }
                    const parts=cleaned.split(/\s*\+\s*/);
                    return <div key={li} style={{display:"flex",flexWrap:"wrap",alignItems:"center",gap:8,justifyContent:"center",padding:"6px 0"}}>
                      {parts.map((part,pi)=>{
                        const m=part.match(/^([^\s(]+)\s*\(([^)]+)\)/);
                        const hj=hanjaArr[hanjaIdx]||"";
                        hanjaIdx++;
                        return <React.Fragment key={pi}>
                          {pi>0&&<span style={{color:dk?"rgba(123,94,232,0.35)":"rgba(160,140,230,0.4)",fontSize:13,fontWeight:800}}>+</span>}
                          <span style={{display:"inline-flex",flexDirection:"column",alignItems:"center",gap:showHanja&&hj?2:0,
                            background:dk
                              ?"linear-gradient(160deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))"
                              :"linear-gradient(160deg, rgba(255,255,255,0.92), rgba(255,255,255,0.65))",
                            borderRadius:14,padding:showHanja&&hj?"6px 16px 8px":"8px 16px",
                            border:dk?"1px solid rgba(255,255,255,0.1)":"1px solid rgba(180,165,240,0.25)",
                            boxShadow:dk
                              ?"0 3px 10px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.1)"
                              :"0 3px 12px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.9)"}}>
                            <span style={{display:"flex",alignItems:"baseline",gap:4}}>
                              <span style={{fontSize:24,fontWeight:800,color:"var(--purple-accent-text)"}}>{m?m[1]:part}</span>
                              {m&&<span style={{fontSize:12,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:600,fontFamily:"'Nunito','system-ui',sans-serif",marginLeft:2}}>({m[2]})</span>}
                            </span>
                            {showHanja&&hj&&<span className="anim" style={{fontSize:15,color:dk?"rgba(200,190,255,0.75)":"rgba(80,60,160,0.6)",fontWeight:700,letterSpacing:2}}>{hj}</span>}
                          </span>
                        </React.Fragment>;
                      })}
                    </div>;
                  });})()}
                </div>
              </div>;
            })()}
            {/* Note lines — standard purple-bar card */}
            {noteLines.filter(l=>l.trim()).length>0&&(()=>{
              const hasWarning=noteLines.some(l=>l.trim().startsWith("⚠️")||l.trim().startsWith("NOT ")||l.trim().startsWith("FALSE"));
              const isWarningBlock=noteLines[0]&&(noteLines[0].trim().startsWith("⚠️")||noteLines[0].trim().startsWith("FALSE"));
              if(isWarningBlock){
                // Glossy lavender candy bubble for false friends / warnings
                return <div style={{
                  background:dk
                    ?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
                    :"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
                  borderRadius:20,padding:"18px 22px 16px",position:"relative",overflow:"hidden",
                  border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
                  boxShadow:dk
                    ?"0 4px 16px rgba(0,0,0,0.25), 0 0 10px rgba(123,94,232,0.15), inset 0 2px 0 rgba(255,255,255,0.06), inset 0 -2px 0 rgba(0,0,0,0.1)"
                    :"0 4px 18px rgba(123,94,232,0.08), 0 0 10px rgba(180,165,240,0.1), inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -2px 0 rgba(123,94,232,0.04)"}}>
                  <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
                  <div style={{position:"relative",zIndex:2}}>
                    <div style={{fontSize:10,fontWeight:800,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:2.5,marginBottom:12,display:"flex",alignItems:"center",gap:6,fontFamily:"'Nunito','system-ui',sans-serif"}}>
                      <AppIcon name="lightbulb" size={16}/>{noteLines[0].trim().includes("FALSE FRIEND")?"False Friend":"Heads Up"}
                    </div>
                    {noteLines.map((line,li)=>{
                      if(!line.trim()) return <div key={li} style={{height:12}}/>;
                      const clean=line.replace(/^⚠️\s*(FALSE FRIEND:|NOT REAL ENGLISH:|HEADS UP:)?\s*/,"").trim();
                      if(!clean) return null;
                      // Korean-only lines: large, centered, standalone block
                      const isKoreanOnly=/^[\uAC00-\uD7AF\u3130-\u318F\s]+$/.test(clean);
                      if(isKoreanOnly) return <div key={li} style={{textAlign:"center",padding:"10px 0 2px"}}><span style={{fontSize:22,fontWeight:800,color:"var(--purple-accent-text)",letterSpacing:1}}>{clean}</span></div>;
                      // Translation line right after Korean (starts with quote or lowercase)
                      if(li>0 && clean.startsWith("'") && /[\uAC00-\uD7AF]/.test(noteLines[li-1]||"")) return <div key={li} style={{textAlign:"center",fontSize:13,color:"var(--gray-400)",fontStyle:"italic",fontFamily:"'Nunito','system-ui',sans-serif",padding:"0 0 4px"}}>{clean}</div>;
                      if(li>0 && /^(Use these|To work)/.test(clean) && /[\uAC00-\uD7AF]/.test(noteLines[li-1]||"")) return <div key={li} style={{textAlign:"center",fontSize:13,color:"var(--gray-500)",fontFamily:"'Nunito','system-ui',sans-serif",fontWeight:500,padding:"0 0 4px"}}>{clean}</div>;
                      // NOT / warning lines: teal accent
                      if(/^NOT\b/.test(clean)) return <div key={li} style={{fontSize:14,color:"var(--teal-text)",fontWeight:700,fontFamily:"'Nunito','system-ui',sans-serif",padding:"4px 0"}}>{clean}</div>;
                      // "Actual meaning:" lines
                      if(clean.startsWith("Actual meaning:")) return <div key={li} style={{fontSize:15,color:"var(--gray-700)",fontWeight:600,fontFamily:"'Nunito','system-ui',sans-serif",lineHeight:1.6}}>{noteHl(clean)}</div>;
                      // Mixed Korean+English lines: auto-separate
                      if(/[\uAC00-\uD7AF]/.test(clean)&&/[a-zA-Z]{3,}/.test(clean)){
                        if(clean.includes(" | ")){
                          const pairs=clean.split(" | ");
                          return <div key={li} style={{display:"flex",flexDirection:"column",gap:4,margin:"4px 0"}}>{pairs.map((p,pi)=><div key={pi} style={{display:"flex",gap:8,alignItems:"baseline",padding:"2px 0"}}>{noteHl(p)}</div>)}</div>;
                        }
                        if(/^[\uAC00-\uD7AF\u3130-\u318F]/.test(clean.trim())&&!/\(.*[\uAC00-\uD7AF]/.test(clean)){
                          const koMatch=clean.trim().match(/^([\uAC00-\uD7AF\u3130-\u318F][\uAC00-\uD7AF\u3130-\u318F\s/→+]*?)\s*[=:.]\s*(.+)$/);
                          if(koMatch){
                            return <div key={li} style={{margin:"6px 0"}}>
                              <div style={{fontSize:17,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.4,padding:"2px 0"}}>{noteHl(koMatch[1].trim())}</div>
                              <div style={{fontSize:13,color:"var(--gray-500)",fontWeight:500,lineHeight:1.5,paddingLeft:2}}>{koMatch[2].trim()}</div>
                            </div>;
                          }
                        }
                        return <div key={li} style={{fontSize:15,color:"var(--gray-600)",fontWeight:500,fontFamily:"'Nunito','system-ui',sans-serif",lineHeight:1.7}}>{noteHl(clean)}</div>;
                      }
                      if(/[\uAC00-\uD7AF]/.test(clean)) return <div key={li} style={{fontSize:15,color:"var(--gray-600)",fontWeight:500,fontFamily:"'Nunito','system-ui',sans-serif",lineHeight:1.7}}>{noteHl(clean)}</div>;
                      // Regular English lines
                      return <div key={li} style={{fontSize:15,color:"var(--gray-600)",fontWeight:500,fontFamily:"'Nunito','system-ui',sans-serif",lineHeight:1.7}}>{noteHl(clean)}</div>;
                    })}
                  </div>
                </div>;
              }
              // Standard purple-bar note card
              return <div className="meta-text" style={{background:"var(--card-bg)",border:"2px solid rgba(255,255,255,0.55)",borderLeft:"3px solid var(--purple-accent)",borderRadius:16,padding:"14px 18px"}}>
              {noteLines.map((line,li)=>{
                if(!line.trim()) return <div key={li} style={{height:6}}/>;
                if(line.startsWith("⚠️")) return <div key={li} style={{background:dk?"rgba(245,166,35,0.1)":"rgba(245,166,35,0.06)",borderRadius:10,padding:"8px 12px",margin:"4px 0",display:"flex",gap:8,alignItems:"flex-start"}}><AppIcon name="lightbulb" size={16}/><span style={{fontSize:14,color:"var(--gray-700)",fontWeight:600,lineHeight:1.6,fontFamily:"'Nunito','system-ui',sans-serif"}}>{noteHl(line.slice(2).trim())}</span></div>;
                if(line.startsWith("⚡")) return <div key={li} style={{background:dk?"rgba(123,94,232,0.08)":"rgba(123,94,232,0.04)",borderRadius:10,padding:"8px 12px",margin:"4px 0",display:"flex",gap:8,alignItems:"flex-start"}}><AppIcon name="lightbulb" size={16}/><span style={{fontSize:14,color:"var(--gray-700)",fontWeight:600,lineHeight:1.6,fontFamily:"'Nunito','system-ui',sans-serif"}}>{noteHl(line.slice(1).trim())}</span></div>;
                if(line.startsWith("•")) return <div key={li} style={{fontSize:15,color:"var(--gray-600)",padding:"3px 0 3px 4px",display:"flex",gap:8,lineHeight:1.7,fontFamily:"'Nunito','system-ui',sans-serif",fontWeight:500}}><span style={{color:"var(--purple-accent-text)",fontWeight:700,flexShrink:0}}>•</span><span>{noteHl(line.slice(1).trim())}</span></div>;
                if(/^\d+\.\s/.test(line)) return <div key={li} style={{fontSize:15,color:"var(--gray-600)",padding:"3px 0",display:"flex",gap:8,lineHeight:1.7,fontFamily:"'Nunito','system-ui',sans-serif",fontWeight:500}}><span style={{color:"var(--purple-accent-text)",fontWeight:800,fontSize:13,minWidth:18,flexShrink:0}}>{line.match(/^\d+/)[0]}.</span><span>{noteHl(line.replace(/^\d+\.\s*/,""))}</span></div>;
                // Pipe separator → individual rows
                if(line.includes(" | ")&&/[\uAC00-\uD7AF]/.test(line)){
                  const pairs=line.split(" | ");
                  return <div key={li} style={{display:"flex",flexDirection:"column",gap:3,margin:"3px 0"}}>{pairs.map((p,pi)=><div key={pi} style={{display:"flex",gap:8,alignItems:"baseline"}}>{noteHl(p)}</div>)}</div>;
                }
                // Korean-first lines: split Korean above, English below
                if(/^[\uAC00-\uD7AF\u3130-\u318F]/.test(line.trim())&&/[a-zA-Z]{3,}/.test(line)&&!/\(.*[\uAC00-\uD7AF]/.test(line)){
                  const koMatch=line.trim().match(/^([\uAC00-\uD7AF\u3130-\u318F][\uAC00-\uD7AF\u3130-\u318F\s/→+]*?)\s*[=:.]\s*(.+)$/);
                  if(koMatch) return <div key={li} style={{margin:"6px 0"}}><div style={{fontSize:17,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.4,padding:"2px 0"}}>{noteHl(koMatch[1].trim())}</div><div style={{fontSize:13,color:"var(--gray-500)",fontWeight:500,paddingLeft:2}}>{koMatch[2].trim()}</div></div>;
                }
                return <div key={li} style={{fontSize:15,color:"var(--gray-600)",lineHeight:1.75,fontWeight:500,fontFamily:"'Nunito','system-ui',sans-serif"}}>{noteHl(line)}</div>;
              })}
            </div>;
            })()}
          </div>);
        })()}

        {/* Diagram — syllable block visual */}
        {renderDiagram(st.diagram)}

        {/* Continue */}
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:10,marginTop:18}}>
          {si>0&&<NavArrow onClick={goBack} isBack/>}
          <NavArrow onClick={goNext}/>
        </div>
      </div>
    </div>
  );}

  // ═══ STANDARD TEACH CARD (legacy/default) ═══
  if(st.type==="teach") return(
    <div className="anim" key={si}>
      {wordBubble&&<WordBubble entry={wordBubble.entry} word={wordBubble.word} stem={wordBubble.stem} particle={wordBubble.particle} onClose={()=>setWordBubble(null)}/>}
      {MiniWordPopup}
      <ProgressBar/>
      <div style={{maxWidth:460,margin:"0 auto"}}>

        {/* Gold "NEW WORD" frame — only shows for unlearned words */}
        {isNew&&<div style={{background:"linear-gradient(135deg, var(--gold), #E8960A)",borderRadius:24,padding:"3px",marginBottom:20,boxShadow:"0 6px 24px rgba(245,166,35,0.25)"}}>
          <div style={{background:"var(--gold)",borderRadius:"22px 22px 0 0",padding:"8px 0",textAlign:"center"}}>
            <span style={{color:"white",fontSize:12,fontWeight:800,textTransform:"uppercase",letterSpacing:3}}>{teachLabel}</span>
          </div>

          <div style={{background:"var(--card-bg)",borderRadius:"0 0 21px 21px",overflow:"hidden",position:"relative"}}>
            {/* Decorative bubbles */}
            <div style={{position:"absolute",top:-15,right:-15,width:60,height:60,borderRadius:"50%",background:"rgba(74,143,231,0.06)"}}/>
            <div style={{position:"absolute",bottom:20,left:-10,width:40,height:40,borderRadius:"50%",background:"rgba(46,205,167,0.06)"}}/>

            {/* Phonetic + Audio icon buttons — top right */}
            <div style={{position:"absolute",top:12,right:14,display:"flex",gap:6,zIndex:2}}>
              <button onClick={()=>setShowPhonetic(!showPhonetic)} style={{width:34,height:34,borderRadius:10,background:showPhonetic?"var(--blue-light)":"var(--panel-bg)",border:`1.5px solid ${showPhonetic?"var(--blue)":"var(--gray-200)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,cursor:"pointer",transition:"all .15s",backdropFilter:"blur(4px)"}}>🔤</button>
              <SpeakerButton text={st.nl} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={16} showToast={showToast} />
            </div>

            {/* Illustration — only for word/idiom, not letters */}
            {showEmoji&&st.img&&<div style={{textAlign:"center",paddingTop:24}}>
              <div style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:80,height:80,borderRadius:22,background:"var(--card-bg)",boxShadow:"var(--card-shadow)",fontSize:36,lineHeight:1}}>{st.img}</div>
            </div>}

            {/* The word/letter display */}
            <div style={{textAlign:"center",padding:"18px 28px 10px"}}>
              {teachKind==="letter"?(<>
                <div style={{marginBottom:10}}>
                  <span className="hd" style={{fontSize:56,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1.1}}>{st.nl}</span>
                </div>
              </>):(()=>{const art=getArticle(st.nl,lang);const c=ARTICLE_COLORS[art];const aw=art!=="none"?st.nl.split(/\s(.+)/):null;return(<>
                <div style={{display:"inline-block",background:c.bg,borderRadius:18,padding:"12px 32px",boxShadow:`0 4px 16px ${c.shadow}`,marginBottom:10}}>
                  <span className="hd" style={{fontSize:letterSize,fontWeight:800,color:"white",lineHeight:1.1}}>{cap(st.nl)}</span>
                </div>
              </>);})()}
            </div>

            {/* Phonetic display — shows below word when toggled */}
            {showPhonetic&&<div className="anim" style={{textAlign:"center",marginBottom:8}}>
              <span style={{display:"inline-block",background:"rgba(74,143,231,0.08)",borderRadius:14,padding:"4px 16px",fontSize:14,color:"var(--blue)",fontWeight:600}}>/{st.phonetic}/</span>
            </div>}

            {/* Translation */}
            <div style={{textAlign:"center",paddingBottom:20}}>
              {teachKind==="letter"?
                <span style={{fontSize:20,color:"var(--gray-700)",fontWeight:700}}>{cap(st.en)}</span>
              :<div style={{display:"inline-block",background:"var(--gray-100)",borderRadius:14,padding:"8px 24px",boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
                <span style={{fontSize:18,color:"var(--gray-700)",fontWeight:700}}>{cap(st.en)}</span>
              </div>}
            </div>

            {/* Examples render as standalone compound bubbles below the card */}
            {/* Letter syllable examples — formulas or syllable lists */}
            {teachKind==="letter"&&st.example&&<div style={{background:"var(--panel-bg)",padding:"14px 22px",borderTop:"1.5px solid rgba(74,143,231,0.08)"}}>
              <div style={{textAlign:"center"}}>
                {/[+=→]/.test(st.example)
                  ?<div style={{lineHeight:1.8}}>{renderLetterExample(st.example)}</div>
                  :<div style={{fontSize:22,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.6,letterSpacing:4}}>{st.example}</div>
                }
                {st.exampleEn&&<div style={{fontSize:12,color:"var(--gray-400)",marginTop:4,letterSpacing:2}}>{st.exampleEn}</div>}
              </div>
            </div>}
          </div>
        </div>}

        {/* Repeat/review card — no gold frame, simpler */}
        {!isNew&&<div style={{background:"var(--card-bg)",borderRadius:24,border:"2px solid rgba(255,255,255,0.55)",boxShadow:"0 4px 16px rgba(0,0,0,0.04)",marginBottom:20,overflow:"hidden",position:"relative"}}>
          <div style={{position:"absolute",top:12,right:14,display:"flex",gap:6,zIndex:2}}>
            <button onClick={()=>setShowPhonetic(!showPhonetic)} style={{width:30,height:30,borderRadius:8,background:showPhonetic?"var(--blue-light)":"var(--panel-bg)",border:`1.5px solid ${showPhonetic?"var(--blue)":"var(--gray-200)"}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,cursor:"pointer",transition:"all .15s"}}>🔤</button>
            <SpeakerButton text={st.nl} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={14} showToast={showToast} />
          </div>
          {showEmoji&&st.img&&<div style={{textAlign:"center",paddingTop:24}}>
            <div style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:72,height:72,borderRadius:20,background:"var(--card-bg)",boxShadow:"var(--card-shadow)",fontSize:32,lineHeight:1}}>{st.img}</div>
          </div>}
          <div style={{textAlign:"center",paddingTop:(showEmoji&&st.img)?12:24}}>
            <span style={{display:"inline-block",background:"var(--gray-200)",color:"var(--gray-500)",fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:2,padding:"4px 14px",borderRadius:16}}>{t("le_review",baseLang)}</span>
          </div>
          <div style={{textAlign:"center",padding:"14px 28px 10px"}}>
            {teachKind==="letter"?(<>
              <div style={{marginBottom:6}}>
                <span className="hd" style={{fontSize:48,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1.1}}>{st.nl}</span>
              </div>
            </>):(()=>{const art=getArticle(st.nl,lang);const c=ARTICLE_COLORS[art];return(<>
              <div style={{display:"inline-block",background:c.bg,borderRadius:16,padding:"10px 28px",boxShadow:`0 4px 14px ${c.shadow}`}}>
                <span className="hd" style={{fontSize:32,fontWeight:800,color:"white"}}>{cap(st.nl)}</span>
              </div>
            </>);})()}
          </div>
          {showPhonetic&&<div className="anim" style={{textAlign:"center",marginBottom:8}}><span style={{fontSize:13,color:"var(--blue)",fontWeight:600}}>/{st.phonetic}/</span></div>}
          <div style={{textAlign:"center",paddingBottom:18}}>
            <span style={{fontSize:17,color:"var(--gray-700)",fontWeight:700}}>{cap(st.en)}</span>
          </div>
          {/* Examples render as standalone compound bubbles */}
          {/* Letter syllable examples in review card */}
          {teachKind==="letter"&&st.example&&<div style={{background:"var(--panel-bg)",padding:"12px 20px",borderTop:"1px solid var(--gray-100)"}}>
            <div style={{textAlign:"center"}}>
              {/[+=→]/.test(st.example)
                ?<div style={{lineHeight:1.8}}>{renderLetterExample(st.example)}</div>
                :<div style={{fontSize:20,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.6,letterSpacing:3}}>{st.example}</div>
              }
              {st.exampleEn&&<div style={{fontSize:11,color:"var(--gray-400)",marginTop:2,letterSpacing:2}}>{st.exampleEn}</div>}
            </div>
          </div>}
        </div>}

        {/* Explanation note — clean for letters, yellow for words */}
        {/* Standalone compound-style example bubble — ALL examples */}
        {showInContext&&st.example&&(()=>{
          const ex=st.example||"";const exEn=st.exampleEn||"";
          const bS={background:dk?"linear-gradient(180deg, rgba(123,94,232,0.22), rgba(100,80,200,0.14), rgba(80,60,180,0.08))":"linear-gradient(180deg, rgba(200,190,255,0.45), rgba(220,210,255,0.3), rgba(235,230,255,0.18))",borderRadius:20,padding:"14px 18px",position:"relative",overflow:"hidden",border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",boxShadow:dk?"0 6px 20px rgba(0,0,0,0.3),inset 0 2px 0 rgba(255,255,255,0.07),inset 0 -3px 0 rgba(0,0,0,0.12)":"0 6px 24px rgba(123,94,232,0.1),inset 0 2px 0 rgba(255,255,255,0.75),inset 0 -3px 0 rgba(123,94,232,0.05)"};
          const gA={position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.01),transparent)":"linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0.1),transparent)",pointerEvents:"none",zIndex:1};
          if(isDialogueEx){
            const turns=ex.split(/(?=[ABأب]:\s)/).filter(Boolean);
            const turnsEn=exEn.split(/(?=[ABأب]:\s)/).filter(Boolean);
            return <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:16}}>
              {turns.map((turn,ti)=>{const isA=turn.trim().startsWith("A:")||turn.trim().startsWith("أ:");const content=turn.replace(/^[ABأب]:\s*/,"").trim();const enC=(turnsEn[ti]||"").replace(/^[ABأب]:\s*/,"").trim();
                return <div key={ti} style={{display:"flex",justifyContent:isA?"flex-start":"flex-end",paddingLeft:isA?0:30,paddingRight:isA?30:0}}>
                  <div style={{...bS,maxWidth:"82%",borderRadius:isA?"20px 20px 20px 6px":"20px 20px 6px 20px"}}><div style={gA}/><div style={{position:"relative",zIndex:2}}>
                    <div style={{fontSize:15,fontWeight:700,color:dk?"rgba(230,225,245,0.9)":"var(--gray-800)",lineHeight:1.4,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>{universalHl(content, lang, { noColor: true })}<SpeakerButton text={content} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={13} showToast={showToast}/></div>
                    {enC&&<div style={{fontSize:12,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:500,marginTop:4,...srcDir}}>{enC}</div>}
                  </div></div></div>;})}
            </div>;
          }
          return <div style={{...bS,marginBottom:16}}><div style={gA}/><div style={{position:"relative",zIndex:2}}>
            <div style={{fontSize:15,fontWeight:700,color:dk?"rgba(230,225,245,0.9)":"var(--gray-800)",lineHeight:1.5,display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>{universalHl(ex, lang, { noColor: true })}<SpeakerButton text={ex} lang={LANG_META[lang]?.ttsLocale||"en-US"} size={13} showToast={showToast}/></div>
            {exEn&&<div style={{fontSize:13,color:dk?"rgba(200,190,255,0.7)":"var(--gray-500)",fontWeight:500,marginTop:4,...srcDir}}>{exEn}</div>}
          </div></div>;
        })()}
        {st.note&&(teachKind==="letter"?
          <div style={{background:"var(--card-bg)",border:"2px solid rgba(255,255,255,0.55)",borderRadius:20,padding:"18px 22px",marginBottom:20}}>
            <div style={{fontSize:15,color:"var(--gray-600)",lineHeight:1.7}}>{st.note}</div>
          </div>
        :<div style={{background:"var(--card-bg)",border:"2px solid rgba(255,255,255,0.55)",borderLeft:"3px solid var(--purple-accent)",borderRadius:16,padding:"14px 18px",marginBottom:20}}>
          {st.note.split(/\\n|\n/).map((line,li)=>{
            if(!line.trim()) return <div key={li} style={{height:6}}/>;
            if(line.startsWith("•")) return <div key={li} style={{fontSize:15,color:"var(--gray-600)",padding:"3px 0 3px 4px",display:"flex",gap:8,lineHeight:1.7,fontWeight:500}}><span style={{color:"var(--purple-accent-text)",fontWeight:700,flexShrink:0}}>•</span><span>{line.slice(1).trim()}</span></div>;
            if(line.startsWith("⚠️")) return <div key={li} style={{fontSize:14,color:"var(--gray-700)",fontWeight:600,padding:"3px 0",lineHeight:1.6}}>{line}</div>;
            return <div key={li} style={{fontSize:15,color:"var(--gray-600)",lineHeight:1.75,fontWeight:500,fontFamily:"'Nunito','system-ui',sans-serif"}}>{line}</div>;
          })}
        </div>)}

        {/* Korean block structure diagram */}
        {renderDiagram(st.diagram)}

        {/* Arabic letter forms diagram — 2×2 positional grid */}
        {st.forms&&<div style={{background:"var(--purple-bg)",border:"2px solid rgba(123,94,232,0.15)",borderRadius:20,padding:"18px 22px",marginBottom:20}}>
          <div style={{fontSize:12,fontWeight:700,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:1.5,marginBottom:12,textAlign:"center"}}>{t("le_letter_forms",baseLang)}</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            {st.forms.map((f,fi)=>(
              <div key={fi} style={{textAlign:"center",padding:"12px 8px",borderRadius:14,background:"linear-gradient(180deg, #fff, #f8f8fc)",border:"1.5px solid rgba(123,94,232,0.12)",boxShadow:"0 2px 6px rgba(0,0,0,0.03)"}}>
                <div style={{fontSize:32,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1.2,direction:"rtl"}}>{f.glyph}</div>
                <div style={{fontSize:10,color:"var(--gray-400)",marginTop:4,fontWeight:600}}>{f.pos}</div>
              </div>
            ))}
          </div>
          {st.formNote&&<div style={{fontSize:12,color:"var(--gray-500)",textAlign:"center",marginTop:10,lineHeight:1.5}}>{st.formNote}</div>}
        </div>}

        {/* Conjugation mini-table — for verbs */}
        {st.conjugation&&<div style={{background:"linear-gradient(135deg, #F0F4FF, #EBF0FF)",border:"2px solid rgba(74,143,231,0.15)",borderRadius:20,padding:"18px 22px",marginBottom:20}}>
          <div style={{display:"flex",gap:10,alignItems:"center",marginBottom:12}}>
            <div style={{width:32,height:32,borderRadius:10,background:"linear-gradient(135deg, var(--blue), #3A7BD5)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,flexShrink:0,color:"white",fontWeight:800}}>⚙️</div>
            <div style={{fontSize:12,fontWeight:700,color:"var(--blue)",textTransform:"uppercase",letterSpacing:1.5}}>Conjugation</div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:4}}>
            {Object.entries(st.conjugation).map(([pron,form])=>(
              <div key={pron} style={{display:"flex",gap:8,alignItems:"baseline",padding:"4px 8px",borderRadius:8,background:"rgba(255,255,255,0.6)"}}>
                <span style={{fontSize:13,color:"var(--gray-400)",fontWeight:600,minWidth:50}}>{pron}</span>
                <span style={{fontSize:14,color:"var(--gray-800)",fontWeight:700}}>{form}</span>
              </div>
            ))}
          </div>
        </div>}

        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:10,marginTop:4}}>
          {si>0&&<NavArrow onClick={goBack} isBack/>}
          <NavArrow onClick={()=>{learnWord(st.nl);setShowPhonetic(false);setShowCognate(false);setShowHanja(false);goNext();}}/>
        </div>
      </div>
    </div>
  );

  // ═══ TIP — Grammar / pattern / culture ═══
  // ═══ VERB TABLE — visual conjugation grid (purple/green scheme) ═══
  if(st.type==="verb_table") return(
    <div className="anim" key={si}>
      {wordBubble&&<WordBubble entry={wordBubble.entry} word={wordBubble.word} stem={wordBubble.stem} particle={wordBubble.particle} onClose={()=>setWordBubble(null)}/>}
      {MiniWordPopup}
      <ProgressBar/>
      <div className="trg-text" style={{maxWidth:480,margin:"0 auto"}}>

        {/* Header */}
        <div style={{background:"linear-gradient(135deg, #7B5EE8, #6B4FCC)",borderRadius:"20px 20px 0 0",padding:"18px 24px",textAlign:"center"}}>
          <div style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:2,color:"rgba(255,255,255,0.6)",marginBottom:4}}>{st.label||t("le_conjugation",baseLang)}</div>
          <h3 className="hd" style={{fontSize:22,fontWeight:800,color:"white",margin:0}}>{st.title}</h3>
        </div>

        {/* Grid */}
        <div style={{background:"var(--card-bg)",border:"2px solid rgba(123,94,232,0.15)",borderTop:"none",borderRadius:"0 0 20px 20px",overflow:"hidden"}}>
          {(st.groups||[{label:null,rows:st.rows}]).map((grp,gi)=>{
            // Normalize rows: handle forms[] (simple list), rows as arrays, rows as objects
            let normalizedRows = grp.rows || [];
            if (grp.forms && !grp.rows) {
              // forms: ["ich werde", "du wirst", ...] → render as simple list
              normalizedRows = grp.forms.map(f => ({pronoun: "", form: f, en: ""}));
            } else if (normalizedRows.length > 0 && Array.isArray(normalizedRows[0])) {
              // rows: [["pronoun","form","en?"], ...] → convert to objects
              normalizedRows = normalizedRows.map(arr => ({pronoun: arr[0]||"", form: arr[1]||"", en: arr[2]||""}));
            }
            return <div key={gi}>
              {(grp.label||grp.header)&&<div style={{background:"rgba(123,94,232,0.04)",padding:"8px 20px",borderTop:gi>0?"1.5px solid rgba(123,94,232,0.1)":"none"}}>
                <span style={{fontSize:11,fontWeight:700,textTransform:"uppercase",letterSpacing:1.5,color:"var(--purple-accent-text)"}}>{grp.label||grp.header}</span>
              </div>}
              {normalizedRows.map((r,ri)=>(
                <div key={ri} style={{display:"grid",gridTemplateColumns:r.en?"1fr 1fr 1fr":"1fr 1fr",borderTop:(gi>0||ri>0||grp.label||grp.header)?"1px solid var(--gray-100)":"none",minHeight:32}}>
                  {/* Pronoun */}
                  {r.pronoun&&<div style={{padding:"10px 16px",background:"rgba(123,94,232,0.03)",display:"flex",alignItems:"center"}}>
                    <span style={{fontSize:15,fontWeight:700,color:"var(--purple-accent-text)",display:"flex",flexWrap:"wrap",gap:2}}>{universalHl(r.pronoun, lang)}</span>
                  </div>}
                  {/* Verb form — forceGrammar so POS colors always show; no hardcoded color override */}
                  <div style={{padding:"10px 16px",textAlign:r.pronoun?"center":"left",background:"rgba(123,94,232,0.06)",gridColumn:!r.pronoun&&!r.en?"1 / -1":undefined,display:"flex",alignItems:"center",justifyContent:r.pronoun?"center":"flex-start"}}>
                    <span style={{fontSize:17,fontWeight:800,fontFamily:"'Quicksand','system-ui',sans-serif",display:"flex",flexWrap:"wrap",gap:2,justifyContent:r.pronoun?"center":"flex-start"}}>{universalHl(r.form, lang, {forceGrammar:true})}</span>
                  </div>
                  {/* English */}
                  {r.en&&<div style={{padding:"10px 16px",textAlign:"right",display:"flex",alignItems:"center",justifyContent:"flex-end"}}>
                    <span style={{fontSize:14,fontWeight:600,color:"var(--teal-text)"}}>{r.en}</span>
                  </div>}
                </div>
              ))}
            </div>;
          })}

          {/* Summary note */}
          {st.note&&<div className="meta-text" style={{borderTop:"1.5px solid rgba(123,94,232,0.1)",padding:"14px 20px",background:"rgba(46,205,167,0.04)"}}>
            <div style={{fontSize:14,color:"var(--gray-600)",lineHeight:1.6,textAlign:"center"}}>{st.note.split(/\\n|\n/).map((line,i)=>{
              const isBold=/^\d|^Only|^Same|^Just|^That|^Compare/.test(line.trim());
              return <div key={i} style={{fontWeight:isBold?700:400,color:isBold?"var(--gray-700)":"var(--gray-500)",marginTop:i>0&&!line.trim()?6:0}}>{line||"\u00A0"}</div>;
            })}</div>
          </div>}
        </div>

        {/* DeepDive */}
        {st.deepDive&&(()=>{const dd=typeof st.deepDive==="string"?{title:"Deep Dive",text:st.deepDive}:st.deepDive;return <div className="meta-text" style={{marginTop:16}}>
          <button onClick={()=>setShowDeepDive(!showDeepDive)} style={{background:"none",border:"none",cursor:"pointer",padding:"12px 0",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:14,fontWeight:700,color:"var(--purple-accent-text)",fontFamily:"'Nunito','system-ui',sans-serif"}}>
            <span><AppIcon name="lightbulb" size={16} style={{marginRight:6}}/> {dd.title}</span>
            <span style={{fontSize:18,transition:"transform .2s",transform:showDeepDive?"rotate(180deg)":"rotate(0)"}}>⌄</span>
          </button>
          {showDeepDive&&<div className="anim">
            <div style={{
              background:dk
                ?"linear-gradient(180deg, rgba(123,94,232,0.16) 0%, rgba(100,80,200,0.1) 40%, rgba(80,60,180,0.06) 100%)"
                :"linear-gradient(180deg, rgba(200,190,255,0.35) 0%, rgba(220,210,255,0.22) 50%, rgba(235,230,255,0.12) 100%)",
              borderRadius:20,padding:"18px 20px",position:"relative",overflow:"hidden",
              border:dk?"1.5px solid rgba(123,94,232,0.25)":"1.5px solid rgba(180,165,240,0.3)",
              boxShadow:dk
                ?"0 4px 16px rgba(0,0,0,0.25), 0 0 10px rgba(123,94,232,0.15), inset 0 2px 0 rgba(255,255,255,0.06), inset 0 -2px 0 rgba(0,0,0,0.1)"
                :"0 4px 18px rgba(123,94,232,0.08), 0 0 10px rgba(180,165,240,0.1), inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -2px 0 rgba(123,94,232,0.04)"}}>
              <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"35%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
              <div style={{position:"relative",zIndex:2}}>
              {(dd.text||"").split(/\\n|\n/).map((line,i)=>{
                if(!line.trim()) return <div key={i} style={{height:8}}/>;
                if(line.startsWith("⚠️")) return <div key={i} style={{background:dk?"rgba(245,166,35,0.12)":"rgba(245,166,35,0.08)",borderRadius:10,padding:"8px 12px",margin:"6px 0",display:"flex",gap:6,alignItems:"flex-start"}}><span style={{fontSize:14,lineHeight:1.2,flexShrink:0}}>⚠️</span><span style={{fontSize:13,color:"var(--gray-700)",fontWeight:600,lineHeight:1.55,fontFamily:"'Nunito','system-ui',sans-serif"}}>{smartHl(line.slice(2).trim())}</span></div>;
                if(/^[A-Z][A-Z ]{2,}:/.test(line.trim())) return <div key={i} style={{background:dk?"rgba(123,94,232,0.12)":"rgba(123,94,232,0.06)",borderRadius:8,padding:"6px 12px",margin:"8px 0 2px",borderLeft:"2px solid var(--purple-accent)"}}><span style={{fontSize:12,fontWeight:800,color:"var(--purple-accent-text)",letterSpacing:0.8,fontFamily:"'Nunito','system-ui',sans-serif"}}>{smartHl(line.trim())}</span></div>;
                if(line.startsWith("•")){
                  const bullet=line.slice(1).trim();
                  const bArrow=bullet.match(/^(.+?)\s*[=→]\s*(.+)$/);
                  if(bArrow) return <div key={i} style={{padding:"3px 0 3px 6px",display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}><span style={{color:"var(--purple-accent-text)",fontWeight:700}}>•</span><span style={{fontSize:15,fontWeight:700,color:"var(--gray-700)",fontFamily:"'Quicksand','system-ui',sans-serif"}}>{smartHl(bArrow[1].trim())}</span><span style={{color:dk?"rgba(180,165,240,0.4)":"var(--gray-300)",fontSize:10}}>→</span><span style={{fontSize:13,fontWeight:500,color:"var(--gray-500)",fontFamily:"'Nunito','system-ui',sans-serif"}}>{smartHl(bArrow[2].trim())}</span></div>;
                  return <div key={i} style={{fontSize:14,color:"var(--gray-600)",padding:"2px 0 2px 6px",display:"flex",gap:6,fontFamily:"'Nunito','system-ui',sans-serif",fontWeight:500}}><span style={{color:"var(--purple-accent-text)",fontWeight:700}}>•</span><span>{smartHl(bullet)}</span></div>;
                }
                const arrow=line.match(/^([A-Za-zÀ-ÿ'][^=→]{0,50}?)\s*[→=]\s*(.+)$/);
                if(arrow&&!line.startsWith("✅")&&!line.startsWith("❌")) return <div key={i} style={{display:"flex",gap:6,alignItems:"center",padding:"3px 0",flexWrap:"wrap"}}><span style={{fontSize:15,fontWeight:700,color:"var(--gray-700)",fontFamily:"'Quicksand','system-ui',sans-serif"}}>{smartHl(arrow[1].trim())}</span><span style={{color:dk?"rgba(180,165,240,0.4)":"var(--gray-300)",fontSize:10}}>→</span><span style={{fontSize:13,fontWeight:500,color:"var(--gray-500)",fontFamily:"'Nunito','system-ui',sans-serif"}}>{smartHl(arrow[2].trim())}</span></div>;
                const isHeader=line.trim().endsWith(":");
                return <div key={i} style={{fontSize:isHeader?13:14,color:isHeader?"var(--gray-800)":"var(--gray-600)",fontWeight:isHeader?700:500,lineHeight:1.7,marginTop:isHeader?6:0,padding:"1px 0",fontFamily:"'Nunito','system-ui',sans-serif"}}>{smartHl(line)}</div>;
              })}
              </div>
            </div>
          </div>}
        </div>})()}

        {/* Continue */}
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:10,marginTop:20}}>
          {si>0&&<NavArrow onClick={goBack} isBack/>}
          <NavArrow onClick={()=>{setShowDeepDive(false);goNext();}}/>
        </div>
      </div>
    </div>
  );

  if(st.type==="tip") return(
    <div className="anim" key={si}>
      <ProgressBar/>
      {wordBubble&&<WordBubble entry={wordBubble.entry} word={wordBubble.word} stem={wordBubble.stem} particle={wordBubble.particle} onClose={()=>setWordBubble(null)}/>}
      {MiniWordPopup}
      <div style={{maxWidth:500,margin:"0 auto"}}>
        <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.45)",borderLeft:"4px solid var(--purple-accent)",overflow:"hidden",...glass}}>
          <div style={{padding:"18px 24px 12px"}}>
            {/* Foundations reference — top of card */}
            {st.fRef&&<div style={{marginBottom:10}}>
              <span style={{display:"inline-flex",alignItems:"center",gap:6,background:"var(--purple-bg)",border:"1.5px solid var(--purple-border)",borderRadius:10,padding:"5px 12px",fontSize:11,color:"var(--purple-accent-text)",fontWeight:700,cursor:"pointer",transition:"all .15s"}}>📖 Foundations: {st.fRef.replace(/^nl_/,"").replace(/_/g," ").replace(/\b\w/g,c=>c.toUpperCase())}</span>
            </div>}
            <div style={{color:"var(--purple-accent-text)",fontSize:10,textTransform:"uppercase",letterSpacing:2.5,marginBottom:8,fontWeight:700,fontFamily:"'Nunito','system-ui',sans-serif",display:"flex",alignItems:"center",gap:6}}><AppIcon name="lightbulb" size={18}/>{t("le_good_to_know",baseLang)}</div>
            {st.title&&<h3 style={{fontSize:19,fontWeight:800,color:"var(--gray-800)",fontFamily:"'Quicksand','system-ui',sans-serif",margin:0,lineHeight:1.35,letterSpacing:"-0.3px"}}>{st.title.replace(/^[\u{1F300}-\u{1F9FF}\u{2600}-\u{27BF}\u{1FA00}-\u{1FA9F}]\s*/u,"")}</h3>}
          </div>
          <div className="meta-text" style={{padding:"0 24px 22px"}}>
            {/* Conjugation grid — when rows[] is present */}
            {st.rows&&<div style={{marginBottom:st.text?14:0}}>
              {st.rows.map((r,ri)=>{
                const isGroup=r.group;
                return <div key={ri} style={{display:"flex",alignItems:"center",padding:"8px 0",borderBottom:ri<st.rows.length-1?"1px solid rgba(123,94,232,0.08)":"none",gap:8,...(isGroup?{paddingLeft:6,borderLeft:"3px solid rgba(123,94,232,0.2)"}:{})}}>
                  <div style={{flex:"1 1 50%",display:"flex",alignItems:"baseline",gap:6}}>
                    <span style={{fontSize:19,fontWeight:800,color:"var(--gray-800)"}}>{r.nl}</span>
                    {r.note&&<span style={{fontSize:10,fontWeight:700,color:"var(--purple-accent-text)",background:"rgba(123,94,232,0.08)",borderRadius:6,padding:"1px 6px",letterSpacing:0.5}}>{r.note}</span>}
                  </div>
                  <div style={{flex:"1 1 50%",textAlign:"right"}}>
                    <span style={{fontSize:14,color:"var(--gray-600)",fontWeight:500}}>{r.en}</span>
                  </div>
                </div>;
              })}
            </div>}
            {st.text&&(()=>{
              const hl=(text)=>universalHl(text, lang, {noColor:true});
              const isTranslationCard=st.title&&/vertal/i.test(st.title);
              // ── Pair-card pre-pass: group Korean line + → English line into pairs ──
              const rawLines=st.text.split(/\\n|\n/);
              const rendered=[];
              let ri=0;
              while(ri<rawLines.length){
                const line=rawLines[ri];
                const nextLine=rawLines[ri+1]||"";
                const hasKorean=/[\uAC00-\uD7AF\u3130-\u318F]/.test(line.trim());
                const nextIsArrow=nextLine.trim().startsWith("→");
                // Pair: Korean line followed by → English line
                if(hasKorean&&nextIsArrow&&line.trim()){
                  const translation=nextLine.trim().slice(1).trim();
                  rendered.push(
                    <div key={ri} style={{
                      background:dk?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)":"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
                      borderRadius:16,padding:"14px 18px",margin:"8px 0",position:"relative",overflow:"hidden",
                      border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
                      boxShadow:dk?"0 4px 16px rgba(0,0,0,0.25), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -2px 0 rgba(0,0,0,0.1)":"0 4px 18px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -2px 0 rgba(123,94,232,0.04)"}}>
                      <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"44%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.58) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
                      <div style={{position:"relative",zIndex:2}}>
                        <div style={{fontSize:22,fontWeight:800,color:"var(--purple-accent-text)",lineHeight:1.3,marginBottom:8}}>{hl(line.trim())}</div>
                        <div style={{fontSize:13,fontWeight:500,color:dk?"rgba(200,190,255,0.6)":"var(--gray-500)",lineHeight:1.5}}>{hl(translation)}</div>
                      </div>
                    </div>
                  );
                  ri+=2;
                  continue;
                }
                // → line not preceded by Korean (standalone translation) — teal text
                if(line.trim().startsWith("→")&&!hasKorean){
                  rendered.push(<div key={ri} style={{fontSize:13,fontWeight:500,color:"var(--gray-700)",paddingLeft:16,paddingBottom:4,lineHeight:1.5}}>{hl(line.trim().slice(1).trim())}</div>);
                  ri++;continue;
                }
                rendered.push(ri);// placeholder — fall through to normal renderer
                ri++;
              }
              return rendered.map((item,i)=>{
              if(typeof item!=="number") return item;
              const line=rawLines[item];const i2=item;
              if(!line.trim()) return <div key={i2} style={{height:20,borderBottom:"1px solid var(--gray-100)",marginBottom:4}}/>;
              // ⚠️ Warning line — amber background block
              if(line.startsWith("⚠️")){
                return <div key={i} style={{background:"rgba(245,166,35,0.08)",border:"1.5px solid rgba(245,166,35,0.18)",borderRadius:12,padding:"10px 14px",margin:"8px 0",display:"flex",gap:8,alignItems:"flex-start"}}>
                  <span style={{fontSize:16,lineHeight:1.2,flexShrink:0}}>⚠️</span>
                  <span style={{fontSize:14,color:"var(--gray-700)",fontWeight:600,lineHeight:1.6}}>{hl(line.slice(2).trim())}</span>
                </div>;
              }
              // Section header — ALL CAPS word(s) followed by colon OR standalone
              if(/^[A-Z][A-Z ]{2,}:/.test(line.trim())||/^[A-Z][A-Z ]+\([^)]*\):/.test(line.trim())||/^[A-Z][A-Z ]{2,}$/.test(line.trim())){
                return <div key={i} style={{background:"linear-gradient(135deg, rgba(123,94,232,0.08), rgba(123,94,232,0.03))",borderRadius:10,padding:"8px 14px",margin:"10px 0 4px",borderLeft:"3px solid var(--purple-accent)"}}>
                  <span style={{fontSize:13,fontWeight:800,color:"var(--purple-accent-text)",letterSpacing:1}}>{hl(line.trim())}</span>
                </div>;
              }
              // Translation reveal line (→ at start in Vertalingen cards)
              if(isTranslationCard&&line.startsWith("→")){
                return <TranslationReveal key={i} text={line.slice(1).trim()} hl={hl}/>;
              }
              if(line.startsWith("•")){
                const bullet=line.slice(1).trim();
                const bArrow=bullet.match(/^(.+?)\s*[=→]\s*(.+)$/);
                if(bArrow) return <div key={i} style={{padding:"4px 0 4px 8px",display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}><span style={{color:"var(--purple-accent-text)",fontWeight:700}}>•</span><span style={{fontSize:16,fontWeight:700,color:"var(--gray-800)",fontFamily:"'Quicksand','system-ui',sans-serif"}}>{hl(bArrow[1].trim())}</span><span style={{color:"var(--gray-400)",fontSize:11}}>→</span><span style={{fontSize:14,fontWeight:500,color:"var(--gray-700)",fontFamily:"'Nunito','system-ui',sans-serif"}}>{hl(bArrow[2].trim())}</span></div>;
                return <div key={i} style={{fontSize:15,color:"var(--gray-800)",padding:"3px 0 3px 8px",display:"flex",gap:6,lineHeight:1.6,fontFamily:"'Nunito','system-ui',sans-serif",fontWeight:500}}><span style={{color:"var(--purple-accent-text)",fontWeight:700}}>•</span><span>{hl(bullet)}</span></div>;
              }
              // ✅ / ❌ lines
              if(line.startsWith("✅")) return <div key={i} style={{background:"rgba(46,205,167,0.06)",borderRadius:8,padding:"6px 10px",margin:"2px 0",fontSize:14,fontWeight:500,color:"var(--gray-700)",lineHeight:1.6,fontFamily:"'Nunito','system-ui',sans-serif"}}>{hl(line)}</div>;
              if(line.startsWith("❌")) return <div key={i} style={{background:"rgba(239,68,68,0.06)",borderRadius:8,padding:"6px 10px",margin:"2px 0",fontSize:14,fontWeight:500,color:"var(--gray-700)",lineHeight:1.6,fontFamily:"'Nunito','system-ui',sans-serif"}}>{hl(line)}</div>;
              // Full line: nl = en  or  nl → en (short pairs only)
              const arrow=line.match(/^([A-Za-zÀ-ÿ'][^=→]{0,48}?)\s*[=→]\s*(.+)$/);
              if(arrow&&!line.startsWith("✅")&&!line.startsWith("❌")){const isAllCaps=/^[A-Z][A-Z ]+$/.test(arrow[1].trim());return <div key={i} style={{display:"flex",gap:8,alignItems:"center",padding:"4px 0",flexWrap:"wrap"}}><span style={{fontSize:isAllCaps?13:16,fontWeight:isAllCaps?800:700,color:isAllCaps?"var(--purple-accent-text)":"var(--gray-800)",fontFamily:"'Quicksand','system-ui',sans-serif",letterSpacing:isAllCaps?1:0}}>{hl(arrow[1].trim())}</span><span style={{color:"var(--gray-400)",fontSize:11}}>→</span><span style={{fontSize:14,fontWeight:500,color:"var(--gray-700)",fontFamily:"'Nunito','system-ui',sans-serif"}}>{hl(arrow[2].trim())}</span></div>;}
              // Pure Korean word line → glossy pill grid (e.g. 커피  택시  버스)
              const koWords=line.trim().split(/\s+/).filter(Boolean);
              const isPureKoLine=koWords.length>=3&&koWords.every(w=>/^[\uAC00-\uD7AF\u3130-\u318F]+$/.test(w));
              if(isPureKoLine){return <div key={i2} style={{display:"flex",flexWrap:"wrap",gap:8,justifyContent:"center",padding:"6px 0"}}>{koWords.map((w,wi)=><span key={wi} style={{display:"inline-flex",alignItems:"center",background:dk?"linear-gradient(160deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))":"linear-gradient(160deg,rgba(255,255,255,0.92),rgba(255,255,255,0.65))",borderRadius:14,padding:"8px 16px",border:dk?"1px solid rgba(255,255,255,0.1)":"1px solid rgba(180,165,240,0.25)",boxShadow:dk?"0 3px 10px rgba(0,0,0,0.25),inset 0 1px 0 rgba(255,255,255,0.1)":"0 3px 12px rgba(123,94,232,0.08),inset 0 2px 0 rgba(255,255,255,0.9)",fontSize:18,fontWeight:800,color:"var(--purple-accent-text)"}}>{w}</span>)}</div>;}
              // Korean-first lines: split Korean above, English below
              if(/^[\uAC00-\uD7AF\u3130-\u318F]/.test(line.trim())&&/[a-zA-Z]{3,}/.test(line)&&!/\(.*[\uAC00-\uD7AF]/.test(line)){
                const koMatch=line.trim().match(/^([\uAC00-\uD7AF\u3130-\u318F][\uAC00-\uD7AF\u3130-\u318F\s/→+]*?)\s*[=:.]\s*(.+)$/);
                if(koMatch){
                  return <div key={i2} style={{margin:"6px 0"}}>
                    <div style={{fontSize:17,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.4,padding:"2px 0"}}>{hl(koMatch[1].trim())}</div>
                    <div style={{fontSize:13,color:"var(--gray-500)",fontWeight:500,lineHeight:1.5,paddingLeft:2}}>{koMatch[2].trim()}</div>
                  </div>;
                }
              }
              // Regular text: only bold if it's a section-like header ending with ":"
              const isHeader=line.trim().endsWith(":");
              return <div key={i2} style={{fontSize:14,color:"var(--gray-800)",fontWeight:isHeader?700:500,lineHeight:1.65,marginTop:isHeader?10:0,padding:"2px 0",fontFamily:"'Nunito','system-ui',sans-serif"}}>{hl(line)}</div>;
            });})()}
          </div>
          {st.deepDive&&(()=>{const dd=typeof st.deepDive==="string"?{title:"Deep Dive",text:st.deepDive}:st.deepDive;return <div className="meta-text" style={{borderTop:"1.5px solid rgba(123,94,232,0.12)",padding:"0 24px 4px"}}>
            <button onClick={()=>setShowDeepDive(!showDeepDive)} style={{background:"none",border:"none",cursor:"pointer",padding:"14px 0",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:14,fontWeight:700,color:"var(--purple-accent-text)",fontFamily:"'Nunito','system-ui',sans-serif"}}>
              <span><AppIcon name="lightbulb" size={16} style={{marginRight:6}}/>  {dd.title}</span>
              <span style={{display:"flex",alignItems:"center",gap:6}}><span style={{fontSize:18,transition:"transform .2s",transform:showDeepDive?"rotate(180deg)":"rotate(0)"}}>⌄</span></span>
            </button>
            {showDeepDive&&<div className="anim" style={{paddingBottom:16}}>
              <div style={{
                background:dk
                  ?"linear-gradient(180deg, rgba(123,94,232,0.16) 0%, rgba(100,80,200,0.1) 40%, rgba(80,60,180,0.06) 100%)"
                  :"linear-gradient(180deg, rgba(200,190,255,0.35) 0%, rgba(220,210,255,0.22) 50%, rgba(235,230,255,0.12) 100%)",
                borderRadius:20,padding:"18px 20px",position:"relative",overflow:"hidden",
                border:dk?"1.5px solid rgba(123,94,232,0.25)":"1.5px solid rgba(180,165,240,0.3)",
                boxShadow:dk
                  ?"0 4px 16px rgba(0,0,0,0.25), 0 0 10px rgba(123,94,232,0.15), inset 0 2px 0 rgba(255,255,255,0.06), inset 0 -2px 0 rgba(0,0,0,0.1)"
                  :"0 4px 18px rgba(123,94,232,0.08), 0 0 10px rgba(180,165,240,0.1), inset 0 2px 0 rgba(255,255,255,0.7), inset 0 -2px 0 rgba(123,94,232,0.04)"}}>
                {/* Gloss arc */}
                <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"35%",
                  borderRadius:"0 0 50% 50%",
                  background:dk
                    ?"linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)"
                    :"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",
                  pointerEvents:"none",zIndex:1}}/>
                <div style={{position:"relative",zIndex:2}}>
                {(()=>{const ddHl=(text)=>universalHl(text, lang, {noColor:true});return (dd.text||"").split(/\\n|\n/).map((line,i)=>{
                  if(!line.trim()) return <div key={i} style={{height:8}}/>;
                  if(line.startsWith("⚠️")) return <div key={i} style={{background:dk?"rgba(245,166,35,0.12)":"rgba(245,166,35,0.08)",borderRadius:10,padding:"8px 12px",margin:"6px 0",display:"flex",gap:6,alignItems:"flex-start"}}><span style={{fontSize:14,lineHeight:1.2,flexShrink:0}}>⚠️</span><span style={{fontSize:13,color:"var(--gray-700)",fontWeight:600,lineHeight:1.55,fontFamily:"'Nunito','system-ui',sans-serif"}}>{ddHl(line.slice(2).trim())}</span></div>;
                  if(/^[A-Z][A-Z ]{2,}:/.test(line.trim())) return <div key={i} style={{background:dk?"rgba(123,94,232,0.12)":"rgba(123,94,232,0.06)",borderRadius:8,padding:"6px 12px",margin:"8px 0 2px",borderLeft:"2px solid var(--purple-accent)"}}><span style={{fontSize:12,fontWeight:800,color:"var(--purple-accent-text)",letterSpacing:0.8,fontFamily:"'Nunito','system-ui',sans-serif"}}>{ddHl(line.trim())}</span></div>;
                  if(line.startsWith("•")){
                    const bullet=line.slice(1).trim();
                    const bArrow=bullet.match(/^(.+?)\s*[=→]\s*(.+)$/);
                    if(bArrow) return <div key={i} style={{padding:"3px 0 3px 6px",display:"flex",gap:6,alignItems:"center",flexWrap:"wrap"}}><span style={{color:"var(--purple-accent-text)",fontWeight:700}}>•</span><span style={{fontSize:15,fontWeight:700,color:"var(--gray-700)",fontFamily:"'Quicksand','system-ui',sans-serif"}}>{ddHl(bArrow[1].trim())}</span><span style={{color:dk?"rgba(180,165,240,0.4)":"var(--gray-300)",fontSize:10}}>→</span><span style={{fontSize:13,fontWeight:500,color:"var(--gray-500)",fontFamily:"'Nunito','system-ui',sans-serif"}}>{ddHl(bArrow[2].trim())}</span></div>;
                    return <div key={i} style={{fontSize:14,color:"var(--gray-600)",padding:"2px 0 2px 6px",display:"flex",gap:6,fontFamily:"'Nunito','system-ui',sans-serif",fontWeight:500}}><span style={{color:"var(--purple-accent-text)",fontWeight:700}}>•</span><span>{ddHl(bullet)}</span></div>;
                  }
                  const arrow=line.match(/^([A-Za-zÀ-ÿ'][^=→]{0,48}?)\s*[=→]\s*(.+)$/);
                  if(arrow&&!line.startsWith("✅")&&!line.startsWith("❌")) return <div key={i} style={{display:"flex",gap:6,alignItems:"center",padding:"3px 0",flexWrap:"wrap"}}><span style={{fontSize:15,fontWeight:700,color:"var(--gray-700)",fontFamily:"'Quicksand','system-ui',sans-serif"}}>{ddHl(arrow[1].trim())}</span><span style={{color:dk?"rgba(180,165,240,0.4)":"var(--gray-300)",fontSize:10}}>→</span><span style={{fontSize:13,fontWeight:500,color:"var(--gray-500)",fontFamily:"'Nunito','system-ui',sans-serif"}}>{ddHl(arrow[2].trim())}</span></div>;
                  const isHeader=line.trim().endsWith(":");
                  return <div key={i} style={{fontSize:isHeader?13:14,color:isHeader?"var(--gray-800)":"var(--gray-600)",fontWeight:isHeader?700:500,lineHeight:1.7,marginTop:isHeader?6:0,padding:"1px 0",fontFamily:"'Nunito','system-ui',sans-serif"}}>{ddHl(line)}</div>;
                });})()}
                </div>
              </div>
            </div>}
          </div>})()}
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:10,marginTop:24}}>
          {si>0&&<NavArrow onClick={goBack} isBack/>}
          <NavArrow onClick={()=>{setShowDeepDive(false);goNext();}}/>
        </div>
      </div>
    </div>
  );

  // ═══ MULTIPLE CHOICE ═══
  if(st.type==="mc") return(
    <div className="anim" key={si}>
      {wordBubble&&<WordBubble entry={wordBubble.entry} word={wordBubble.word} stem={wordBubble.stem} particle={wordBubble.particle} onClose={()=>setWordBubble(null)}/>}
      {MiniWordPopup}
      <ProgressBar/>
      <div style={{maxWidth:500,margin:"0 auto"}}>
        {/* Question card — compound glossy bubble */}
        <div style={{
          background:dk
            ?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
            :"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
          borderRadius:22,padding:"22px 26px",marginBottom:18,textAlign:"center",position:"relative",overflow:"hidden",
          border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
          boxShadow:dk
            ?"0 6px 20px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)"
            :"0 6px 24px rgba(123,94,232,0.1), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)"}}>
          <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.01),transparent)":"linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0.1),transparent)",pointerEvents:"none",zIndex:1}}/>
          <div style={{position:"relative",zIndex:2}}>
          <div style={{color:"var(--purple-accent-text)",fontSize:10,textTransform:"uppercase",letterSpacing:2.5,marginBottom:10,fontWeight:700,fontFamily:"'Nunito','system-ui',sans-serif"}}>{t("le_choose_correct",baseLang)}</div>
          {(()=>{const{korean:mcKo,english:mcEnRaw}=splitKoEn(st.q||"");const mcEn=mcEnRaw||st.qSrc||st.qEn||null;const qHasArabic=/[\u0600-\u06FF]/.test(mcKo);return<><div className={qHasArabic?"":"trg-text-center"} style={{fontSize:17,fontWeight:600,lineHeight:1.55,fontFamily:"'Nunito','system-ui',sans-serif",color:"var(--gray-800)",textAlign:"center",...(qHasArabic?{direction:"rtl"}:{})}}>
            {qHasArabic?mcKo.split(/('[^']+'|"[^"]+")/).map((seg,si)=>/^['"]/.test(seg)?<span key={si} dir="ltr" style={{unicodeBidi:"embed",direction:"ltr"}}>{seg}</span>:<span key={si}>{seg}</span>):universalHl(mcKo, lang, {noColor:true})}
          </div>{renderEnglishBelow(mcEn,true)}</>;})()}
          {st.hint&&!showHint&&!answered&&!hideQuizRom&&<div style={{marginTop:8}}><button onClick={()=>setShowHint&&setShowHint(true)} style={{background:"none",border:"none",color:"var(--gray-300)",fontSize:12,cursor:"pointer",fontFamily:"inherit",padding:"4px 12px",borderRadius:8,transition:"all .15s"}} onMouseEnter={e=>{e.target.style.color="#7B5EE8";e.target.style.background="rgba(123,94,232,0.06)";}} onMouseLeave={e=>{e.target.style.color="var(--gray-300)";e.target.style.background="none";}}><AppIcon name="lightbulb" size={20} style={{marginRight:5}}/>{tk("tk_hint_button",baseLang)}</button></div>}
          {showHint&&st.hint&&!answered&&!hideQuizRom&&<div style={{color:"var(--gray-400)",fontSize:13,marginTop:4}}><AppIcon name="lightbulb" size={20} style={{marginRight:5,display:"inline-block"}}/>{smartHl(st.hint)}</div>}
          </div>
        </div>
        {/* Options grid — single column for Korean, 2-col for short text */}
        {(()=>{
          const allOpts=shuffleOpts(st.opts,si);
          const hasKoOpts=allOpts.some(o=>/[\uAC00-\uD7AF]/.test(o));
          const anyLong=allOpts.some(o=>o.length>18);
          const useSingleCol=hasKoOpts||anyLong;
          return <div style={{display:"grid",gridTemplateColumns:useSingleCol?"1fr":"1fr 1fr",gap:10}}>
          {allOpts.map((o,i)=>{
            let cls="quiz-opt";
            const isFocused=i===focusIdx&&!answered;
            if(answered){if(o===st.ans)cls+=" correct";else if(o===selOpt)cls+=" wrong";else cls+=" dis";}
            const hasKo=/[\uAC00-\uD7AF]/.test(o);const hasArabic=/[\u0600-\u06FF]/.test(o);
            return <div key={i} className={cls} style={{wordBreak:"keep-all",whiteSpace:hasKo&&o.length<=12?"nowrap":"normal",...(isFocused?{outline:"3px solid var(--purple-accent)",outlineOffset:2,boxShadow:"0 0 0 6px rgba(123,94,232,0.12)"}:{}), ...(hasKo?{fontSize:o.length<=4?18:o.length<=8?16:14,fontWeight:700,lineHeight:1.35}:{}), ...(hasArabic?{direction:"rtl",fontFamily:"'Noto Sans Arabic',sans-serif"}:{})}} onMouseEnter={()=>{if(!answered)UISounds.tick();}} onClick={()=>{if(answered)return;UISounds.click();setSelOpt(o);checkAndNext(o===st.ans);}}><div className="quiz-letter">{"ABCD"[i]}</div>{/[\uAC00-\uD7AF]/.test(o)?o.split(/([\uAC00-\uD7AF\u3130-\u318F]+)/).map((seg,si)=>/[\uAC00-\uD7AF\u3130-\u318F]/.test(seg)?<span key={si} style={{color:"var(--purple-accent-text)",fontWeight:800}}>{seg}</span>:<span key={si}>{seg}</span>):o}</div>;
          })}
          </div>;
        })()}
        {!answered&&<div style={{textAlign:"center",marginTop:10,fontSize:11,color:"var(--gray-300)"}}>{t("le_arrow_space",baseLang)}</div>}
        {answered&&<div style={{textAlign:"center",marginTop:14,fontSize:14,fontWeight:700,color:selOpt===st.ans?"var(--teal-dark)":"var(--coral)"}}>{selOpt===st.ans?t("le_correct",baseLang):<span>{t("le_not_quite",baseLang)} — {t("le_answer_is",baseLang)}: {/[\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF]/.test(st.ans)?<span style={{fontSize:17,fontWeight:800,color:"var(--purple-accent-text)"}}>{st.ans}</span>:st.ans}</span>}</div>}
        {answered&&<ContinueButton onClick={goNext} correct={selOpt===st.ans} baseLang={baseLang} spaceRef={continueRef} onBack={goBack} canGoBack={si>0}/>}
      </div>
    </div>
  );

  // ═══ TRANSLATE ═══
  if(st.type==="tr"){
    // mk format: resolve from MEANINGS dict; legacy: use s/a directly
    let trS=st.s, trA=st.a, isNlEn;
    if(st.mk&&MEANINGS[st.mk]){
      const m=MEANINGS[st.mk];
      const bl=m[baseLang]||m.en; // base language with English fallback
      if(st.dir==="comprehend"){isNlEn=true;trS=m[lang]?.[0]||st.s;trA=bl||[st.s];}
      else{isNlEn=false;trS=bl?.[0]||st.s;trA=m[lang]||[st.s];}
    } else {
      isNlEn=st.dir?.includes("-en")&&!st.dir?.startsWith("en");
    }
    const numMap={"0":"nul","1":"een","2":"twee","3":"drie","4":"vier","5":"vijf","6":"zes","7":"zeven","8":"acht","9":"negen","10":"tien","11":"elf","12":"twaalf","13":"dertien","14":"veertien","15":"vijftien","16":"zestien","17":"zeventien","18":"achttien","19":"negentien","20":"twintig","30":"dertig","40":"veertig","50":"vijftig","60":"zestig","70":"zeventig","80":"tachtig","90":"negentig","100":"honderd","1000":"duizend"};
    const numMapEn={"0":"zero","1":"one","2":"two","3":"three","4":"four","5":"five","6":"six","7":"seven","8":"eight","9":"nine","10":"ten","11":"eleven","12":"twelve","13":"thirteen","14":"fourteen","15":"fifteen","16":"sixteen","17":"seventeen","18":"eighteen","19":"nineteen","20":"twenty","30":"thirty","40":"forty","50":"fifty","60":"sixty","70":"seventy","80":"eighty","90":"ninety","100":"hundred","1000":"thousand"};
    // ── Translation grading: 3-layer system (D26) ──
    // Layer 1: normalize (contractions, punctuation, do-strip, numbers)
    const CONTRACTIONS={"i'm":"i am","i've":"i have","i'll":"i will","i'd":"i would","you're":"you are","you've":"you have","you'll":"you will","you'd":"you would","he's":"he is","she's":"she is","it's":"it is","we're":"we are","we've":"we have","we'll":"we will","they're":"they are","they've":"they have","they'll":"they will","don't":"do not","doesn't":"does not","didn't":"did not","isn't":"is not","aren't":"are not","wasn't":"was not","weren't":"were not","can't":"cannot","won't":"will not","couldn't":"could not","shouldn't":"should not","wouldn't":"would not","haven't":"have not","hasn't":"has not","hadn't":"had not","that's":"that is","there's":"there is","here's":"here is","what's":"what is","who's":"who is","where's":"where is","how's":"how is","let's":"let us","ma'am":"madam"};
    const norm=s=>{
      let r=s.trim().toLowerCase().replace(/[!?.,'"""]/g,"");
      // Expand contractions
      Object.entries(CONTRACTIONS).forEach(([c,e])=>{r=r.replace(new RegExp("\\b"+c.replace("'","'?")+"\\b","g"),e);});
      // Strip "do/does" from questions: "do you speak" → "you speak"
      r=r.replace(/\bdo not\b/g,"DONOT_HOLD");
      r=r.replace(/\bdoes not\b/g,"DOESNOT_HOLD");
      r=r.replace(/\b(do|does)\s+/g,"");
      r=r.replace(/DONOT_HOLD/g,"do not");
      r=r.replace(/DOESNOT_HOLD/g,"does not");
      // Number words
      Object.entries(numMap).forEach(([d,w])=>{r=r.replace(new RegExp("\\b"+d+"\\b","g"),w);});
      Object.entries(numMapEn).forEach(([d,w])=>{r=r.replace(new RegExp("\\b"+d+"\\b","g"),w);});
      // Collapse whitespace
      r=r.replace(/\s+/g," ").trim();
      return r;
    };
    // Layer 2: equivalence groups — try swapping phrases in input
    const TR_EQUIV=[
      ["come from","am from","originate from"],
      ["is called","is named"],
      ["a little","a bit of"],
      ["nice to meet you","pleased to meet you","glad to meet you"],
      ["see you tomorrow","until tomorrow","till tomorrow"],
      ["very much","a lot","so much"],
      ["good night","goodnight"],
      ["my name is","i am called"],
      ["beautiful","pretty","lovely"],
    ];
    const equivMatch=(input,target)=>{
      const ni=norm(input),nt=norm(target);
      if(ni===nt) return true;
      // Try each equivalence group: if input contains one member, swap to others
      for(const group of TR_EQUIV){
        for(const phrase of group){
          if(ni.includes(phrase)){
            for(const alt of group){
              if(alt!==phrase && ni.replace(phrase,alt)===nt) return true;
            }
          }
        }
      }
      return false;
    };
    const answers=Array.isArray(trA)?trA:[trA];
    // Find best match (exact → equiv → none), track which accepted answer matched
    const findMatch=(input)=>{
      // Exact (after norm)
      const exact=answers.find(a=>norm(input)===norm(a));
      if(exact) return {ok:true,match:exact,method:"exact"};
      // Equivalence
      const equiv=answers.find(a=>equivMatch(input,a));
      if(equiv) return {ok:true,match:equiv,method:"equiv"};
      return {ok:false,match:answers[0],method:"none"};
    };
    const checkAns=()=>{const result=findMatch(inputVal);checkAndNext(result.ok);};
    return(
      <div className="anim" key={si}>
        {wordBubble&&<WordBubble entry={wordBubble.entry} word={wordBubble.word} stem={wordBubble.stem} particle={wordBubble.particle} onClose={()=>setWordBubble(null)}/>}
        {MiniWordPopup}
        <ProgressBar/>
      <div style={{maxWidth:500,margin:"0 auto"}}>
        {/* Source sentence card */}
        <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.55)",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",padding:"24px 28px",marginBottom:20,textAlign:"center",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:0,left:"10%",right:"10%",height:"40%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 100%)",pointerEvents:"none"}}/>
          <div style={{color:isNlEn?"#7B5EE8":"var(--teal-text)",fontSize:10,textTransform:"uppercase",letterSpacing:2.5,marginBottom:12,fontWeight:800}}>{t("le_translate_to",baseLang)} {isNlEn?(BASE_LANGUAGES.find(l=>l.code===baseLang)?.native||"English"):(LANGUAGES.find(l=>l.code===lang)?.native||lang)}</div>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
            <span style={{fontSize:11,fontWeight:700,color:"var(--gray-400)",textTransform:"uppercase",letterSpacing:1}}>{isNlEn?(LANGUAGES.find(l=>l.code===lang)?.native||lang):(BASE_LANGUAGES.find(l=>l.code===baseLang)?.native||"English")}</span>
            <span className={isNlEn?"trg-inline":""} style={{fontSize:22,fontWeight:700,fontFamily:"'Quicksand','system-ui',sans-serif",color:"var(--gray-800)"}}>{trS}</span>
          </div>
        </div>
        {/* Input area — premium card */}
        <div style={{background:"var(--card-bg)",borderRadius:22,border:"2px solid rgba(255,255,255,0.55)",boxShadow:"0 4px 20px rgba(0,0,0,0.05)",padding:"20px 20px 16px",marginBottom:8}}>
          <div style={{fontSize:10,fontWeight:800,textTransform:"uppercase",letterSpacing:2.5,color:"var(--gray-400)",marginBottom:10,paddingLeft:4}}>
            {isNlEn?(BASE_LANGUAGES.find(l=>l.code===baseLang)?.native||"English"):(LANGUAGES.find(l=>l.code===lang)?.native||lang)}
          </div>
          <div style={{display:"flex",gap:10,alignItems:"stretch"}}>
            <input className={`chat-input${!isNlEn?" trg-input":""}`} value={inputVal} onChange={e=>setInputVal(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!answered&&inputVal.trim())checkAns();}} placeholder={`${t("le_type_in",baseLang)} ${isNlEn?(BASE_LANGUAGES.find(l=>l.code===baseLang)?.native||"English"):(LANGUAGES.find(l=>l.code===lang)?.native||lang)}...`} disabled={answered} autoFocus/>
            <button className="btn" style={{fontSize:15,padding:"14px 24px",borderRadius:16,background:"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)",color:"white",fontWeight:800,border:"none",cursor:answered||!inputVal.trim()?"default":"pointer",opacity:answered||!inputVal.trim()?0.5:1,boxShadow:"0 6px 20px rgba(123,94,232,0.45), inset 0 2px 0 rgba(255,255,255,0.4), inset 0 -3px 0 rgba(0,0,0,0.15)",transition:"all .15s",position:"relative",overflow:"hidden",letterSpacing:0.3}} disabled={answered||!inputVal.trim()} onClick={checkAns} onMouseEnter={e=>{if(!answered&&inputVal.trim())e.currentTarget.style.transform="scale(1.05)";}} onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";}}>
              <span style={{position:"absolute",top:0,left:"8%",right:"8%",height:"38%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.06) 100%)",pointerEvents:"none"}}/>
              <span style={{position:"relative",zIndex:1}}>Check</span>
            </button>
          </div>
        </div>
        {/* Result feedback */}
          {answered&&(()=>{const result=findMatch(inputVal);return(
            <div style={{marginTop:10,padding:"14px 18px",borderRadius:16,background:result.ok?"var(--teal-light)":"var(--coral-light)",border:`2px solid ${result.ok?"var(--teal)":"var(--coral)"}`,boxShadow:`0 4px 16px ${result.ok?"rgba(46,205,167,0.15)":"rgba(239,68,68,0.1)"}`}}>
              <div style={{fontWeight:800,fontSize:14,color:result.ok?"var(--teal-dark)":"var(--coral)"}}>{result.ok?t("le_correct",baseLang):t("le_not_quite",baseLang)}</div>
              {result.ok&&result.method==="equiv"&&<div style={{fontSize:12,marginTop:2,color:"var(--gray-400)"}}>Closest: {result.match}</div>}
              {!result.ok&&<div style={{fontSize:14,marginTop:4}}>{t("le_accepted",baseLang)}: <strong>{answers[0]}</strong></div>}
            </div>);})()}
          {answered&&<ContinueButton onClick={goNext} correct={findMatch(inputVal).ok} baseLang={baseLang} spaceRef={continueRef} onBack={goBack} canGoBack={si>0}/>}
      </div>
      </div>
    );
  }

  // ═══ FILL BLANK ═══
  if(st.type==="fb"){
    const fbAnswers=Array.isArray(st.a)?st.a:[st.a];
    const isCorrect=o=>fbAnswers.some(a=>a.toLowerCase()===o.toLowerCase());
    const showAnswer=fbAnswers[0];
    return(
    <div className="anim" key={si}>
      {wordBubble&&<WordBubble entry={wordBubble.entry} word={wordBubble.word} stem={wordBubble.stem} particle={wordBubble.particle} onClose={()=>setWordBubble(null)}/>}
      {MiniWordPopup}
      <ProgressBar/>
      <div style={{maxWidth:480,margin:"0 auto"}}>
        {/* Question card — compound glossy bubble */}
        <div style={{
          background:dk
            ?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
            :"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
          borderRadius:22,padding:"22px 26px",marginBottom:18,textAlign:"center",position:"relative",overflow:"hidden",
          border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
          boxShadow:dk
            ?"0 6px 20px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)"
            :"0 6px 24px rgba(123,94,232,0.1), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)"}}>
          <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.01),transparent)":"linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0.1),transparent)",pointerEvents:"none",zIndex:1}}/>
          <div style={{position:"relative",zIndex:2}}>
          <div style={{color:"var(--purple-accent-text)",fontSize:10,textTransform:"uppercase",letterSpacing:2.5,marginBottom:10,fontWeight:700,fontFamily:"'Nunito','system-ui',sans-serif"}}>{t("le_fill_blank",baseLang)}</div>
          {(()=>{const{korean:fbKo,english:fbEn}=splitKoEn(st.s.replace(/\{1\}/g,"___"));const fbTrans=fbEn||st.sSrc||st.sEn||null;return<><div className="trg-text-center" style={{fontSize:17,fontWeight:600,lineHeight:1.55,fontFamily:"'Nunito','system-ui',sans-serif",color:"var(--gray-800)"}}>

            {fbKo.split(/_{3,}/).map((part,i,arr)=><span key={i}>{universalHl(part, lang, {noColor:true})}{i<arr.length-1&&<span style={{display:"inline-block",minWidth:70,borderBottom:"3px solid var(--purple-accent)",margin:"0 4px",color:"var(--teal-dark)",fontWeight:800,fontFamily:"'Nunito','system-ui',sans-serif"}}>{answered?showAnswer:"___"}</span>}</span>)}
          </div>{renderEnglishBelow(fbTrans,true)}</>;})()}
          {st.hint&&!showHint&&!answered&&!hideQuizRom&&<div style={{marginTop:8}}><button onClick={()=>setShowHint&&setShowHint(true)} style={{background:"none",border:"none",color:"var(--gray-300)",fontSize:12,cursor:"pointer",fontFamily:"inherit",padding:"4px 12px",borderRadius:8,transition:"all .15s"}} onMouseEnter={e=>{e.target.style.color="#7B5EE8";e.target.style.background="rgba(123,94,232,0.06)";}} onMouseLeave={e=>{e.target.style.color="var(--gray-300)";e.target.style.background="none";}}><AppIcon name="lightbulb" size={20} style={{marginRight:5}}/>{tk("tk_hint_button",baseLang)}</button></div>}
          {showHint&&st.hint&&!answered&&!hideQuizRom&&<div style={{color:"var(--gray-400)",fontSize:13,marginTop:4}}><AppIcon name="lightbulb" size={20} style={{marginRight:5,display:"inline-block"}}/>{smartHl(st.hint)}</div>}
        </div>
        </div>
        {/* Options — clean flat buttons */}
        {(()=>{
          const fbOpts=shuffleOpts(st.opts,si);
          const hasKoFb=fbOpts.some(o=>/[\uAC00-\uD7AF]/.test(o));
          return <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:10}}>
          {fbOpts.map((o,i)=>{
            let bg="var(--white)",bc="var(--gray-200)",col="var(--gray-700)";
            const isFocused=i===focusIdx&&!answered;
            if(answered){if(isCorrect(o)){bg="var(--teal-light)";bc="var(--teal)";col="var(--teal-dark)";}else if(o===selOpt){bg="var(--coral-light)";bc="var(--coral)";col="var(--coral)";}}
            const hasKo=/[\uAC00-\uD7AF]/.test(o);const hasArabic=/[\u0600-\u06FF]/.test(o);
            return <div key={i} className="quiz-opt" style={{background:bg,border:`2px solid ${bc}`,color:col,textAlign:"center",wordBreak:"keep-all",whiteSpace:hasKo&&o.length<=8?"nowrap":"normal",transition:"all .2s, transform .15s",...(isFocused?{outline:"3px solid var(--purple-accent)",outlineOffset:2,boxShadow:"0 0 0 6px rgba(123,94,232,0.12)"}:{}), ...(hasKo?{fontSize:o.length<=4?20:o.length<=8?17:14,fontWeight:700}:{}), ...(hasArabic?{direction:"rtl",fontFamily:"'Noto Sans Arabic',sans-serif"}:{})}}
              onMouseEnter={e=>{if(!answered){UISounds.tick();e.currentTarget.style.borderColor="rgba(123,94,232,0.4)";e.currentTarget.style.background="linear-gradient(180deg, #f5f0ff, #ede4ff)";e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 8px 24px rgba(123,94,232,0.15), 0 0 20px rgba(123,94,232,0.08)";}}}
              onMouseLeave={e=>{if(!answered){e.currentTarget.style.borderColor=bc;e.currentTarget.style.background=bg;e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="";}}}
              onMouseDown={e=>{if(!answered)e.currentTarget.style.transform="translateY(1px) scale(0.98)";}}
              onMouseUp={e=>{if(!answered)e.currentTarget.style.transform="translateY(-2px)";}}
              onClick={()=>{if(answered)return;UISounds.click();setSelOpt(o);checkAndNext(isCorrect(o));}}>{/[\uAC00-\uD7AF]/.test(o)?o.split(/([\uAC00-\uD7AF\u3130-\u318F]+)/).map((seg,si)=>/[\uAC00-\uD7AF\u3130-\u318F]/.test(seg)?<span key={si} style={{color:"var(--purple-accent-text)",fontWeight:800}}>{seg}</span>:<span key={si}>{seg}</span>):o}</div>;
          })}
          </div>;
        })()}
        {!answered&&<div style={{textAlign:"center",marginTop:8,fontSize:11,color:"var(--gray-300)"}}>{t("le_arrow_space",baseLang)}</div>}
        {answered&&<div style={{textAlign:"center",marginTop:12,fontSize:14,fontWeight:700,color:isCorrect(selOpt)?"var(--teal-dark)":"var(--coral)"}}>{isCorrect(selOpt)?t("le_correct",baseLang):fbAnswers.length>1?`${t("le_not_quite",baseLang)} — ${t("le_accepted",baseLang)}: ${fbAnswers.join(" / ")}`:`${t("le_not_quite",baseLang)} — ${t("le_answer_is",baseLang)}: ${showAnswer}`}</div>}
        {answered&&<ContinueButton onClick={goNext} correct={isCorrect(selOpt)} baseLang={baseLang} spaceRef={continueRef} onBack={goBack} canGoBack={si>0}/>}
      </div>
    </div>
    );
  }

  // ═══ DRAG FILL (D27, D29) ═══
  // Multi-blank sentence completion: click-slot-then-tile, drag-and-drop, or keyboard
  if(st.type==="drag_fill"){
    const blankKeys=Object.keys(st.blanks).sort();
    const allFilled=blankKeys.every(k=>dfSlots[k]);
    const poolWords=shuffleOpts(st.pool||[],si);
    const availablePool=poolWords.filter(w=>!Object.values(dfSlots).includes(w));
    const emptySlots=blankKeys.filter(k=>!dfSlots[k]);
    // Target slot: focused slot if empty, otherwise first empty
    const targetSlot=dfFocusSlot&&!dfSlots[dfFocusSlot]?dfFocusSlot:emptySlots[0]||null;
    // Place a word into a specific slot
    const placeInSlot=(word,slotKey)=>{
      if(answered||!slotKey||dfSlots[slotKey]) return;
      setDfSlots(prev=>({...prev,[slotKey]:word}));
      setDfFocusSlot(null);setDfDrag(null);
      UISounds.tick();
    };
    // Place tile via click: into focused slot or first empty
    const placeTile=(word)=>{
      if(answered||!targetSlot) return;
      placeInSlot(word,targetSlot);
    };
    // Remove a tile from a slot
    const removeTile=(slotKey)=>{
      if(answered) return;
      setDfSlots(prev=>{const n={...prev};delete n[slotKey];return n;});
      UISounds.tick();
    };
    // Click on empty slot: focus it
    const focusSlot=(slotKey)=>{
      if(answered||dfSlots[slotKey]) return;
      setDfFocusSlot(prev=>prev===slotKey?null:slotKey);
      UISounds.tick();
    };
    // Check all slots
    const checkDf=()=>{
      if(!allFilled) return;
      const allCorrect=blankKeys.every(k=>dfSlots[k]?.toLowerCase()===st.blanks[k]?.toLowerCase());
      checkAndNext(allCorrect);
    };
    // Split Korean from English translation, then parse blanks in Korean only
    const{korean:dfKo,english:dfEnRaw}=splitKoEn(st.s);const dfEnVal=dfEnRaw||st.sSrc||st.sEn||null;const dfEn=dfEnVal?dfEnVal.replace(/\{\d+\}/g,"___"):null;
    const sentParts=dfKo.split(/\{(\d+)\}/g);
    // Drag handlers: ghost created on document.body (bypasses .anim transform containing block)
    const onTilePointerDown=(e,word)=>{
      if(answered) return;
      e.preventDefault();
      dfDragOccurred.current=false;
      const startX=e.clientX,startY=e.clientY;
      // Cache slot rects for hit-testing
      const rects={};
      blankKeys.forEach(k=>{
        const el=document.querySelector(`[data-df-slot="${k}"]`);
        if(el) rects[k]=el.getBoundingClientRect();
      });
      const filledSnapshot={...dfSlots};
      // Create ghost on document.body — position via measured deltas (coordinate-system proof)
      const ghost=document.createElement("div");
      ghost.textContent=word;
      Object.assign(ghost.style,{
        position:"fixed",left:"0px",top:"0px",margin:"0",
        transform:"translate(0px,0px)",
        pointerEvents:"none",zIndex:"99999",
        background:"var(--card-bg)",border:"2px solid var(--purple-accent)",borderRadius:"14px",
        padding:"10px 20px",fontWeight:"700",fontSize:"16px",
        fontFamily:"'Quicksand','system-ui',sans-serif",color:"var(--purple-accent-text)",
        boxShadow:"0 8px 32px rgba(123,94,232,0.3)",
        whiteSpace:"nowrap",
      });
      document.body.appendChild(ghost);
      // Measure where (0,0) actually renders — this accounts for any transforms/zoom/offsets
      const ghostRect=ghost.getBoundingClientRect();
      const baseX=ghostRect.left,baseY=ghostRect.top;
      const gw=ghost.offsetWidth,gh=ghost.offsetHeight;
      // Position ghost centered on cursor, compensating for coordinate system offset
      const initTX=startX-gw/2-baseX;
      const initTY=startY-gh/2-baseY;
      ghost.style.transform=`translate(${initTX}px,${initTY}px)`;
      // Store start cursor pos for delta tracking
      const cursorStartX=startX,cursorStartY=startY;
      setDfDrag({word});
      // Window-level move handler — delta-based, immune to coordinate system quirks
      const onMove=(ev)=>{
        const dx=ev.clientX-cursorStartX,dy=ev.clientY-cursorStartY;
        // Mark as real drag after 4px movement
        if(Math.abs(dx)>4||Math.abs(dy)>4) dfDragOccurred.current=true;
        ghost.style.transform=`translate(${initTX+dx}px,${initTY+dy}px)`;
        // Highlight slot under pointer via DOM
        let hoveredSlot=null;
        Object.entries(rects).forEach(([k,r])=>{
          if(ev.clientX>=r.left&&ev.clientX<=r.right&&ev.clientY>=r.top&&ev.clientY<=r.bottom){
            if(!filledSnapshot[k]) hoveredSlot=k;
          }
        });
        blankKeys.forEach(k=>{
          const el=document.querySelector(`[data-df-slot="${k}"]`);
          if(!el) return;
          if(k===hoveredSlot){
            el.style.borderBottom="3px solid #2ECDA7";
            el.style.background="rgba(46,205,167,0.08)";
            el.style.transform="scale(1.05)";
          } else {
            el.style.borderBottom="";el.style.background="";el.style.transform="";
          }
        });
      };
      // Window-level up handler
      const onUp=(ev)=>{
        window.removeEventListener("pointermove",onMove);
        window.removeEventListener("pointerup",onUp);
        ghost.remove();
        // Reset slot hover styles
        blankKeys.forEach(k=>{
          const el=document.querySelector(`[data-df-slot="${k}"]`);
          if(el){el.style.borderBottom="";el.style.background="";el.style.transform="";}
        });
        // Find drop target
        let dropSlot=null;
        Object.entries(rects).forEach(([k,r])=>{
          if(ev.clientX>=r.left&&ev.clientX<=r.right&&ev.clientY>=r.top&&ev.clientY<=r.bottom){
            if(!filledSnapshot[k]) dropSlot=k;
          }
        });
        if(dropSlot){
          placeInSlot(word,dropSlot);
        } else {
          setDfDrag(null);
        }
      };
      window.addEventListener("pointermove",onMove);
      window.addEventListener("pointerup",onUp);
    };
    // NOTE: keyboard nav handled by main handler (D7) — no hooks here
    return(
    <div className="anim" key={si} style={{touchAction:"none"}}>
      {wordBubble&&<WordBubble entry={wordBubble.entry} word={wordBubble.word} stem={wordBubble.stem} particle={wordBubble.particle} onClose={()=>setWordBubble(null)}/>}
      {MiniWordPopup}
      <ProgressBar/>
      <div style={{maxWidth:500,margin:"0 auto"}}>
        {/* Sentence card with slots */}
        <div style={{background:"var(--card-bg)",borderRadius:20,border:"2px solid rgba(255,255,255,0.45)",borderLeft:"4px solid var(--purple-accent)",padding:"22px 26px",marginBottom:18,textAlign:"center",...glass}}>
          <div style={{color:"var(--purple-accent-text)",fontSize:10,textTransform:"uppercase",letterSpacing:2,marginBottom:12,fontWeight:700}}>{t("le_fill_blanks",baseLang)}</div>
          <div className="trg-text-center" style={{fontSize:19,fontWeight:700,lineHeight:2.2,fontFamily:"'Quicksand','system-ui',sans-serif",color:"var(--gray-800)"}}>
            {sentParts.map((part,i)=>{
              if(i%2===1){
                const slotKey=part;
                const placed=dfSlots[slotKey];
                const isCorrectSlot=answered&&placed?.toLowerCase()===st.blanks[slotKey]?.toLowerCase();
                const isWrongSlot=answered&&placed&&!isCorrectSlot;
                const isFocused=dfFocusSlot===slotKey&&!answered&&!placed;
                const slotBase={
                  display:"inline-block",minWidth:74,padding:"4px 12px",margin:"0 4px",
                  borderRadius:8,fontWeight:800,fontFamily:"'Quicksand','system-ui',sans-serif",
                  transition:"all .2s",verticalAlign:"baseline",userSelect:"none",
                };
                const slotVisual=answered
                  ? {borderBottom:isCorrectSlot?"3px solid var(--teal)":"3px solid var(--coral)",
                     background:isCorrectSlot?"var(--teal-light)":"var(--coral-light)",
                     color:isCorrectSlot?"var(--teal-dark)":"var(--coral)",cursor:"default"}
                  : placed
                    ? {borderBottom:"3px solid var(--purple-accent)",background:"rgba(123,94,232,0.06)",
                       color:"var(--purple-accent-text)",cursor:"pointer"}
                    : isFocused
                      ? {borderBottom:"3px solid var(--purple-accent)",background:"rgba(123,94,232,0.08)",
                         color:"var(--gray-400)",cursor:"pointer",
                         boxShadow:"0 0 0 3px rgba(123,94,232,0.2)",
                         animation:"dfPulse 1.5s ease-in-out infinite"}
                      : {borderBottom:"3px dashed var(--gray-300)",background:"transparent",
                         color:"var(--gray-300)",cursor:"pointer"};
                return <span key={i} data-df-slot={slotKey} style={{...slotBase,...slotVisual}}
                  onClick={()=>{
                    if(answered)return;
                    if(placed){removeTile(slotKey);}
                    else{focusSlot(slotKey);}
                  }}
                  title={!answered?(placed?t("le_click_remove",baseLang):t("le_click_select_slot",baseLang)):""}>
                  {placed||<span style={{opacity:0.4,fontSize:14}}>{isFocused?"drop here":"_"}</span>}
                  {isWrongSlot&&<span style={{display:"block",fontSize:11,color:"var(--teal-dark)",fontWeight:600}}>{st.blanks[slotKey]}</span>}
                </span>;
              }
              return <span key={i}>{universalHl(part, lang, {noColor:true})}</span>;
            })}
          </div>
          {renderEnglishBelow(dfEn,true)}
          {st.hint&&!showHint&&!answered&&<div style={{marginTop:8}}><button onClick={()=>setShowHint&&setShowHint(true)} style={{background:"none",border:"none",color:"var(--gray-300)",fontSize:12,cursor:"pointer",fontFamily:"inherit",padding:"4px 12px",borderRadius:8,transition:"all .15s"}} onMouseEnter={e=>{e.target.style.color="#7B5EE8";e.target.style.background="rgba(123,94,232,0.06)";}} onMouseLeave={e=>{e.target.style.color="var(--gray-300)";e.target.style.background="none";}}><AppIcon name="lightbulb" size={20} style={{marginRight:5}}/>{tk("tk_hint_button",baseLang)}</button></div>}
          {showHint&&st.hint&&!answered&&<div style={{color:"var(--gray-400)",fontSize:13,marginTop:4}}><AppIcon name="lightbulb" size={20} style={{marginRight:5,display:"inline-block"}}/>{smartHl(st.hint)}</div>}
        </div>
        {/* Word tile pool */}
        {!answered&&<div style={{display:"flex",flexWrap:"wrap",gap:10,justifyContent:"center",marginBottom:16}}>
          {availablePool.map((word,i)=>{
            const isFocused=i===(dfPoolIdx%Math.max(availablePool.length,1));
            const isDragging=dfDrag?.word===word;
            return <div key={word}
              onPointerDown={e=>onTilePointerDown(e,word)}
              onClick={()=>{if(!dfDragOccurred.current&&!dfDrag)placeTile(word);}}
              style={{
                background:"var(--card-bg)",border:"2px solid rgba(255,255,255,0.55)",borderRadius:14,
                padding:"10px 20px",cursor:dfDrag?"grabbing":"grab",fontWeight:700,fontSize:16,
                fontFamily:"'Quicksand','system-ui',sans-serif",color:isDragging?"var(--gray-300)":"var(--gray-700)",
                transition:"all .15s",boxShadow:"0 2px 8px rgba(0,0,0,0.06)",
                opacity:isDragging?0.3:1,userSelect:"none",touchAction:"none",
                ...(isFocused&&!isDragging?{outline:"3px solid var(--purple-accent)",outlineOffset:2,boxShadow:"0 0 0 6px rgba(123,94,232,0.12)"}:{}),
              }}>{word}</div>;
          })}
        </div>}
        {/* Check button */}
        {!answered&&allFilled&&<div style={{textAlign:"center",marginBottom:12}}>
          <button className="btn" onClick={checkDf} style={{background:"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)",color:"white",fontWeight:700,fontSize:15,padding:"12px 32px",borderRadius:16,border:"1.5px solid rgba(255,255,255,0.25)",cursor:"pointer",boxShadow:dk?"0 0 20px rgba(150,120,255,0.45), 0 0 44px rgba(123,94,232,0.2), 0 4px 16px rgba(123,94,232,0.4), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -2px 0 rgba(0,0,0,0.2)":"0 6px 20px rgba(123,94,232,0.45), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)"}}>Check</button>
        </div>}
        {!answered&&<div style={{textAlign:"center",fontSize:11,color:"var(--gray-300)"}}>{dfFocusSlot?t("le_slot_selected",baseLang):t("le_drag_hint",baseLang)}</div>}
        {/* Result */}
        {answered&&<div style={{textAlign:"center",marginTop:8,fontSize:14,fontWeight:700,color:blankKeys.every(k=>dfSlots[k]?.toLowerCase()===st.blanks[k]?.toLowerCase())?"var(--teal-dark)":"var(--coral)"}}>
          {blankKeys.every(k=>dfSlots[k]?.toLowerCase()===st.blanks[k]?.toLowerCase())?t("le_correct",baseLang):`${t("le_not_quite",baseLang)}`}
        </div>}
        {answered&&<ContinueButton onClick={goNext} correct={blankKeys.every(k=>dfSlots[k]?.toLowerCase()===st.blanks[k]?.toLowerCase())} baseLang={baseLang} spaceRef={continueRef} onBack={goBack} canGoBack={si>0}/>}
      </div>
    </div>
    );
  }

  // ═══ MATCH PAIRS ═══
  if(st.type==="match"){
    const pairs=st.mks?st.mks.map(k=>{const m=MEANINGS[k];if(!m)return{nl:k,en:k};const bl=m[baseLang]||m.en;return{nl:m[lang]?.[0]||k,en:bl?.[0]||k};}):st.pairs;
    const key=si+"-"+pairs.map(p=>p.nl).join(",");
    if(matchKeyRef.current!==key){matchKeyRef.current=key;matchNlRef.current=shuffle(pairs.map(p=>p.nl));matchEnRef.current=shuffle(pairs.map(p=>p.en));}
    const nlItems=matchNlRef.current;
    const enItems=matchEnRef.current;
    const nlCount=nlItems.length;
    const allMatched=matchDone.length>=pairs.length*2;
    const handleMatch=(side,val)=>{
      if(matchDone.includes(val))return;
      const newSel={...matchSel,[side]:val};setMatchSel(newSel);
      if(newSel.nl&&newSel.en){
        const pair=pairs.find(p=>p.nl===newSel.nl);
        if(pair&&pair.en===newSel.en){
          // ── SRS: record correct match for this pair's target-language word ──
          try { recordQuizOutcome(lang, newSel.nl, true); } catch (_e) {}
          setMatchDone(d=>{const next=[...d,newSel.nl,newSel.en];
            // Compute line for this newly matched pair immediately
            setTimeout(()=>{
              const container=matchContainerRef.current;if(!container)return;
              const rect=container.getBoundingClientRect();
              const nlIdx=nlItems.indexOf(newSel.nl);const enIdx=enItems.indexOf(newSel.en);
              const nlEl=container.querySelector(`[data-match-nl="${nlIdx}"]`);
              const enEl=container.querySelector(`[data-match-en="${enIdx}"]`);
              if(nlEl&&enEl){
                const nlR=nlEl.getBoundingClientRect();const enR=enEl.getBoundingClientRect();
                setLinePositions(lp=>[...lp,{x1:nlR.right-rect.left,y1:nlR.top+nlR.height/2-rect.top,x2:enR.left-rect.left,y2:enR.top+enR.height/2-rect.top}]);
              }
            },50);
            return next;
          });
          addXp(1);
        }
        setTimeout(()=>setMatchSel({nl:null,en:null}),400);
        if(matchDone.length+2>=pairs.length*2){setAnswered(true);addXp(2);setScore(s=>s+1);}
      }
    };
    matchSelectRef.current={nlItems,enItems,nlCount,matchDone,handleMatch};
    return(
      <div className="anim" key={si}>
        {wordBubble&&<WordBubble entry={wordBubble.entry} word={wordBubble.word} stem={wordBubble.stem} particle={wordBubble.particle} onClose={()=>setWordBubble(null)}/>}
        {MiniWordPopup}
        <ProgressBar/>
        <div style={{textAlign:"center",marginBottom:18}}>
          <div style={{color:"var(--gray-400)",fontSize:12,textTransform:"uppercase",letterSpacing:2,fontWeight:700,marginBottom:4}}>{t("le_match_pairs",baseLang)}</div>
          <div style={{fontSize:13,color:"var(--gray-300)"}}>{allMatched?t("le_all_matched",baseLang):t("le_select_match",baseLang)}</div>
        </div>
        <div ref={matchContainerRef} style={{position:"relative",display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,maxWidth:440,margin:"0 auto"}}
          onPointerMove={(e)=>{if(!matchDragRef.current.active)return;const container=matchContainerRef.current;if(!container)return;const rect=container.getBoundingClientRect();const drag=matchDragRef.current;const startEl=drag.startEl;if(!startEl)return;const elR=startEl.getBoundingClientRect();const fromRight=drag.side==="nl";setMatchPendingLine({x1:fromRight?elR.right-rect.left:elR.left-rect.left,y1:elR.top+elR.height/2-rect.top,x2:e.clientX-rect.left,y2:e.clientY-rect.top});}}
          onPointerLeave={()=>{if(matchDragRef.current.active){matchDragRef.current={active:false,side:null,val:null,startEl:null};setMatchPendingLine(null);}}}>
          {/* SVG: confirmed lines + live pending line */}
          {(linePositions.length>0||matchPendingLine)&&<svg style={{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:1}}>
            {linePositions.map((l,i)=><line key={"c"+i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="url(#neonGrad)" strokeWidth={2} opacity={0.7} filter="url(#glow)">
              <animate attributeName="opacity" from="0" to="0.7" dur="0.3s" fill="freeze"/>
            </line>)}
            {matchPendingLine&&<line x1={matchPendingLine.x1} y1={matchPendingLine.y1} x2={matchPendingLine.x2} y2={matchPendingLine.y2} stroke="#A78BFA" strokeWidth={2} opacity={0.4} strokeDasharray="8 4"/>}
            <defs>
              <linearGradient id="neonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9B7AE8"/>
                <stop offset="50%" stopColor="#B8A8FA"/>
                <stop offset="100%" stopColor="#9B7AE8"/>
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
          </svg>}
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            <div style={{fontSize:11,fontWeight:700,color:"var(--gray-400)",textTransform:"uppercase",letterSpacing:1}}>{LANGUAGES.find(l=>l.code===lang)?.native||lang}</div>
            {nlItems.map((w,i)=>{const d=matchDone.includes(w),s=matchSel.nl===w,f=focusIdx===i&&!d;
              return <div key={i} data-match-nl={i} data-match-side="nl" data-match-val={w} style={{padding:"10px 14px",borderRadius:"var(--radius-sm)",border:`2px solid ${d?"#7B5EE8":s?"var(--blue)":f?"#7B5EE8":"var(--gray-200)"}`,background:d?"rgba(123,94,232,0.08)":s?"var(--blue-light)":f?"rgba(123,94,232,0.04)":"var(--white)",cursor:d?"default":"pointer",fontWeight:600,fontSize:14,opacity:d?.6:1,transition:"all .2s",position:"relative",zIndex:2,outline:f?"3px solid var(--purple-accent)":"none",outlineOffset:f?2:0,boxShadow:f?"0 0 0 6px rgba(123,94,232,0.12)":"none",touchAction:"none",userSelect:"none",WebkitUserSelect:"none"}}
                onClick={()=>{if(!d){UISounds.click();handleMatch("nl",w);}}}
                onPointerDown={(e)=>{if(d)return;e.preventDefault();matchDragRef.current={active:true,side:"nl",val:w,startEl:e.currentTarget};e.currentTarget.setPointerCapture&&e.currentTarget.releasePointerCapture(e.pointerId);handleMatch("nl",w);const container=matchContainerRef.current;if(!container)return;const rect=container.getBoundingClientRect();const elR=e.currentTarget.getBoundingClientRect();setMatchPendingLine({x1:elR.right-rect.left,y1:elR.top+elR.height/2-rect.top,x2:e.clientX-rect.left,y2:e.clientY-rect.top});}}
                onMouseEnter={()=>{if(!d){UISounds.tick();setFocusIdx(i);}}}>{universalHl(w, lang, {noColor:true})}{d&&" ✓"}</div>;})}
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            <div style={{fontSize:11,fontWeight:700,color:"var(--gray-400)",textTransform:"uppercase",letterSpacing:1}}>{BASE_LANGUAGES.find(l=>l.code===baseLang)?.native||"English"}</div>
            {enItems.map((w,i)=>{const d=matchDone.includes(w),s=matchSel.en===w,f=focusIdx===i+nlCount&&!d;
              return <div key={i} data-match-en={i} data-match-side="en" data-match-val={w} style={{padding:"10px 14px",borderRadius:"var(--radius-sm)",border:`2px solid ${d?"#7B5EE8":s?"var(--blue)":f?"#7B5EE8":"var(--gray-200)"}`,background:d?"rgba(123,94,232,0.08)":s?"var(--blue-light)":f?"rgba(123,94,232,0.04)":"var(--white)",cursor:d?"default":"pointer",fontWeight:600,fontSize:14,opacity:d?.6:1,transition:"all .2s",position:"relative",zIndex:2,outline:f?"3px solid var(--purple-accent)":"none",outlineOffset:f?2:0,boxShadow:f?"0 0 0 6px rgba(123,94,232,0.12)":"none",touchAction:"none",userSelect:"none",WebkitUserSelect:"none"}}
                onClick={()=>{if(!d){UISounds.click();handleMatch("en",w);}}}
                onPointerDown={(e)=>{if(d)return;e.preventDefault();matchDragRef.current={active:true,side:"en",val:w,startEl:e.currentTarget};e.currentTarget.setPointerCapture&&e.currentTarget.releasePointerCapture(e.pointerId);handleMatch("en",w);const container=matchContainerRef.current;if(!container)return;const rect=container.getBoundingClientRect();const elR=e.currentTarget.getBoundingClientRect();setMatchPendingLine({x1:elR.left-rect.left,y1:elR.top+elR.height/2-rect.top,x2:e.clientX-rect.left,y2:e.clientY-rect.top});}}
                onMouseEnter={()=>{if(!d){UISounds.tick();setFocusIdx(i+nlCount);}}}>{cap(w)}{d&&" ✓"}</div>;})}
          </div>
        </div>
        {!allMatched&&<div style={{textAlign:"center",marginTop:10,fontSize:11,color:"var(--gray-300)"}}>←→ switch column · ↑↓ navigate · Space select</div>}
        {allMatched&&<ContinueButton onClick={goNext} correct={true} baseLang={baseLang} spaceRef={continueRef} onBack={goBack} canGoBack={si>0}/>}
      </div>
    );
  }

  // ── CONJUGATION EXERCISE ──
  // st = {type:"conj", verb:"werken", en:"to work", forms:{ik:"werk",jij:"werkt",hij:"werkt",wij:"werken"}, test:["ik","jij","wij"]}
  if(st.type==="conj"){
    const pronLabels={ik:"ik",jij:"jij/je",hij:"hij/zij/het",wij:"wij/we",jullie:"jullie",zij:"zij (they)"};
    const allProns=Object.keys(st.forms);
    const testProns=st.test||allProns.slice(0,3);
    const checkConj=()=>{
      setConjChecked(true);
      const correct=testProns.every(p=>conjAnswers[p]&&conjAnswers[p].trim().toLowerCase()===st.forms[p].toLowerCase());
      if(correct){setScore(s=>s+1);addXp(2);}
      setAnswered(true);
    };
    return(
      <div className="anim" key={si}>
        <ProgressBar/>
        <div className="card" style={{padding:24}}>
          <div style={{textAlign:"center",marginBottom:18}}>
            <div style={{color:"var(--gray-400)",fontSize:12,textTransform:"uppercase",letterSpacing:2,fontWeight:700,marginBottom:6}}>{t("le_conjugate_verb",baseLang)}</div>
            <div style={{display:"inline-block",background:"linear-gradient(135deg, var(--blue), var(--teal))",borderRadius:14,padding:"10px 28px",marginBottom:6}}>
              <span className="hd" style={{fontSize:24,fontWeight:800,color:"white"}}>{st.verb}</span>
            </div>
            <div style={{fontSize:14,color:"var(--gray-400)",marginTop:4}}>{st.en}</div>
          </div>
          <div style={{display:"grid",gap:10,maxWidth:380,margin:"0 auto"}}>
            {testProns.map(p=>{
              const val=conjAnswers[p]||"";
              const correct=conjChecked&&val.trim().toLowerCase()===st.forms[p].toLowerCase();
              const wrong=conjChecked&&!correct;
              return(
                <div key={p} style={{display:"flex",alignItems:"center",gap:12}}>
                  <span style={{width:100,fontSize:14,fontWeight:700,color:"var(--gray-600)",textAlign:"right"}}>{pronLabels[p]||p}</span>
                  <input value={val} onChange={e=>!conjChecked&&setConjAnswers(a=>({...a,[p]:e.target.value}))} placeholder="..." style={{flex:1,padding:"10px 14px",borderRadius:12,border:`2px solid ${conjChecked?(correct?"var(--teal)":"var(--coral)"):"var(--gray-200)"}`,fontSize:15,fontWeight:600,background:conjChecked?(correct?"var(--teal-light)":"var(--coral-light)"):"var(--white)",outline:"none"}}/>
                  {conjChecked&&wrong&&<span style={{fontSize:12,color:"var(--coral)",fontWeight:700,whiteSpace:"nowrap"}}>{st.forms[p]}</span>}
                  {conjChecked&&correct&&<span style={{color:"var(--teal)",fontWeight:800}}>✓</span>}
                </div>
              );
            })}
          </div>
          {!conjChecked&&<div style={{textAlign:"center",marginTop:18}}><button className="btn" onClick={checkConj} style={{padding:"12px 32px",background:"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)",color:"white",fontWeight:700,border:"1.5px solid rgba(255,255,255,0.25)",cursor:"pointer",borderRadius:16,boxShadow:dk?"0 0 20px rgba(150,120,255,0.45), 0 0 44px rgba(123,94,232,0.2), 0 4px 16px rgba(123,94,232,0.4), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -2px 0 rgba(0,0,0,0.2)":"0 6px 20px rgba(123,94,232,0.45), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)"}}>{t("le_check",baseLang)} ���</button></div>}
          {conjChecked&&<div style={{textAlign:"center",marginTop:12}}>
            <div style={{fontSize:12,color:"var(--gray-400)",marginBottom:4}}>{t("le_full_conjugation",baseLang)}</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:6,justifyContent:"center"}}>{allProns.map(p=><span key={p} style={{background:"var(--gray-50)",borderRadius:8,padding:"4px 10px",fontSize:12,fontWeight:600}}><span style={{color:"var(--gray-400)"}}>{p}</span> <span style={{color:"var(--gray-700)"}}>{st.forms[p]}</span></span>)}</div>
          </div>}
          {conjChecked&&<ContinueButton onClick={()=>{goNext();setConjAnswers({});setConjChecked(false);}} correct={testProns.every(p=>conjAnswers[p]&&conjAnswers[p].trim().toLowerCase()===st.forms[p].toLowerCase())} baseLang={baseLang} spaceRef={continueRef} onBack={goBack} canGoBack={si>0}/>}
        </div>
      </div>
    );
  }

  // ── GRAMMAR REFERENCE ──
  // st = {type:"gramref", title:"📖 Grammar: Possessive Pronouns", text:"...", level:"A1", topic:"Possessives"}
  if(st.type==="gramref"){
    return(
      <div className="anim" key={si}>
        <ProgressBar/>
        <div style={{background:"var(--purple-bg)",borderRadius:22,padding:"24px 22px",border:"2px solid rgba(123,94,232,0.15)",marginBottom:16}}>
          <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
            <div style={{width:40,height:40,borderRadius:12,background:"linear-gradient(135deg, #7B5EE8, #6341C7)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,flexShrink:0,boxShadow:"0 3px 10px rgba(123,94,232,0.3)",color:"white",fontWeight:800}}>📖</div>
            <div style={{flex:1}}>
              <div style={{fontSize:12,fontWeight:700,color:"var(--purple-accent-text)",textTransform:"uppercase",letterSpacing:1.5,marginBottom:6}}>{t("le_grammar_ref",baseLang)} • {st.level||"A1"}</div>
              <div className="hd" style={{fontSize:18,fontWeight:800,color:"var(--gray-800)",marginBottom:10}}>{st.title}</div>
              <div style={{fontSize:14,color:"var(--gray-600)",lineHeight:1.8,whiteSpace:"pre-line"}}>{st.text}</div>
            </div>
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}><NavArrow onClick={goNext}/></div>
      </div>
    );
  }

  return <div className="anim"><ProgressBar/>{wordBubble&&<WordBubble entry={wordBubble.entry} word={wordBubble.word} stem={wordBubble.stem} particle={wordBubble.particle} onClose={()=>setWordBubble(null)}/>}
      {MiniWordPopup}<div className="card" style={{textAlign:"center",padding:24}}><p>Unknown step</p><button className="btn" onClick={goNext} style={{background:"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)",color:"white",fontWeight:700,border:"1.5px solid rgba(255,255,255,0.25)",cursor:"pointer",borderRadius:16,boxShadow:dk?"0 0 20px rgba(150,120,255,0.45), 0 0 44px rgba(123,94,232,0.2), 0 4px 16px rgba(123,94,232,0.4), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -2px 0 rgba(0,0,0,0.2)":"0 6px 20px rgba(123,94,232,0.45), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)"}}>{t("le_skip",baseLang)}</button></div></div>;
}

export default LessonEngine;
