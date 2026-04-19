import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { LANGUAGES, CEFR_LEVELS, getCefrInfo, getCefrBandColor } from '../data/metadata.js';
import { FOUNDATIONS_BY_LANG, FK_PLAYTHROUGH, FK_GATE_QUIZ } from '../data/foundations.js';
import { t, MEANINGS, LANG_FRAMEWORK, explainUnitLevel } from '../data/vocabulary.js';
import { UNITS, compareCefrLevel } from '../utils.js';
import { SpeakerButton, UISounds, FOUNDATIONS_LOCK_ENABLED } from '../audio.jsx';
import { NavArrow, AppIcon, BrandIcon, FlagButton, LessonErrorBoundary } from '../components/shared.jsx';
import LessonEngine from '../components/LessonEngine.jsx';

// ── Helper: check if Foundations is unlocked for a language ──
// This checks COMPLETION status only. FOUNDATIONS_LOCK_ENABLED controls click-blocking separately.
// Pick the FK_PLAYTHROUGH key: use lang_baseLang variant if it exists (e.g. de_ar for Arabic-source German)
const getFkPlayKey=(lang,baseLang)=>{
  if(baseLang&&baseLang!=="en"){
    const composite=lang+"_"+baseLang;
    if(FK_PLAYTHROUGH[composite]) return composite;
  }
  return lang;
};
const isFoundationsUnlocked=(user,lang,baseLang)=>{
  const p=user.progress||{};
  if(p.foundationsUnlocked?.[lang]) return true; // Manual bypass ("Unlock anyway")
  if(p.gateQuiz?.[lang]?.passed) return true; // Gate quiz passed
  // Check if all playthrough lessons complete
  const fkKey=getFkPlayKey(lang,baseLang);
  const pt=FK_PLAYTHROUGH[fkKey];
  if(pt&&pt.stages&&pt.stages.length>0){
    const allDone=pt.stages.every(stage=>
      stage.lessons.every(lesson=>p.fkPlay?.[lang]?.[lesson.id])
    );
    if(allDone) return true;
  }
  return false;
};

function LearnPage({lang,baseLang="en",user,setUser,addXp,learnWord,showToast,addFlag,jumpTo,clearJumpTo}){
  const dk=document.documentElement.classList.contains("dark");
  const [view,setView]=useState("map"); // map | lesson | exercise
  const [selUnit,setSelUnit]=useState(null);
  const [selLesson,setSelLesson]=useState(null);
  // Handle jump-to-lesson from curriculum search
  useEffect(()=>{
    if(!jumpTo)return;
    setSelUnit(jumpTo.unit);
    setSelLesson(jumpTo.lesson);
    setView("exercise");
    if(clearJumpTo)clearJumpTo();
  },[jumpTo]);
  const [chapterNav,setChapterNav]=useState("select"); // lifted from UnitMap
  const [fkSection,setFkSection]=useState(null); // lifted from UnitMap — FK section drill-down
  const [fkMode,setFkMode]=useState("select"); // "select" | "reference" | "playthrough" | "gatequiz" — FK multi-track system
  const L=LANGUAGES.find(l=>l.code===lang);

  const completeLesson=(unit,lesson)=>{
    const lk=`${lang}:${unit.n}:${lesson.id}`;
    const uk=`${lang}:${unit.n}`;
    // Extract all mk keys used in this lesson's steps (tr, match, fb types)
    const lessonMks=[];
    if(lesson.steps){
      for(const st of lesson.steps){
        if(st.mk) lessonMks.push(st.mk);
        if(st.mks) lessonMks.push(...st.mks);
      }
    }
    // Resolve mk keys to actual words in the target language
    const mkWords=[];
    for(const mk of lessonMks){
      const m=MEANINGS[mk];
      if(m&&m[lang]&&m[lang][0]) mkWords.push(m[lang][0]);
    }
    setUser(u=>{
      const p={...(u.progress||{}),lessons:{...(u.progress?.lessons||{})},units:{...(u.progress?.units||{})},learnedMk:[...(u.progress?.learnedMk||[])]};
      p.lessons[lk]=true;
      // Add any new mk keys from this lesson
      const mkSet=new Set(p.learnedMk);
      for(const mk of lessonMks) mkSet.add(mk);
      p.learnedMk=[...mkSet];
      const total=unit.lessons.length;
      const doneCount=unit.lessons.filter(ls=>p.lessons[`${lang}:${unit.n}:${ls.id}`]).length;
      p.units[uk]={completed:doneCount>=total,pct:total>0?Math.round((doneCount/total)*100):0,doneCount,total};
      // Also add mk-resolved words to user.lw so vocabulary learned tab picks them up
      const newLw=new Set(u.lw);
      for(const w of mkWords) newLw.add(w);
      return{...u,progress:p,lw:newLw,wl:newLw.size};
    });
  };

  if(view==="exercise"&&selLesson){
    const unitLessons=selUnit?.lessons||[];
    const curIdx=unitLessons.findIndex(l=>l.id===selLesson.id);
    const nextUnitLesson=curIdx>=0&&curIdx+1<unitLessons.length?unitLessons[curIdx+1]:null;
    return <LessonErrorBoundary onBack={()=>setView("lesson")} baseLang={baseLang}><LessonEngine lesson={selLesson} baseLang={baseLang} lang={lang} addFlag={addFlag} unit={selUnit} user={user} addXp={addXp} learnWord={learnWord} showToast={showToast}
      onBack={()=>setView("lesson")}
      onComplete={()=>{completeLesson(selUnit,selLesson);}}
      onContinue={nextUnitLesson?()=>{completeLesson(selUnit,selLesson);setSelLesson(nextUnitLesson);}:null}
    /></LessonErrorBoundary>;
  }
  if(view==="lesson"&&selUnit) return <LessonList unit={selUnit} user={user} lang={lang} baseLang={baseLang} onBack={()=>{setView("map");setSelUnit(null);}} onStart={ls=>{setSelLesson(ls);setView("exercise");}}/>;

  return(
    <>
      <UnitMap lang={lang} user={user} setUser={setUser} chapterNav={chapterNav} setChapterNav={setChapterNav} fkSection={fkSection} setFkSection={setFkSection} fkMode={fkMode} setFkMode={setFkMode} addXp={addXp} learnWord={learnWord} showToast={showToast} addFlag={addFlag} baseLang={baseLang} onSelect={u=>{setSelUnit(u);setView("lesson");}}/>
    </>
  );
}

// ── UNIT MAP ──
// ── FLAG SYSTEM — 100% Inline SVG, Zero External Dependencies ──
// Every supported language has an inline SVG flag. No emoji (breaks on Windows).
// No CDN images (network may be disabled). Every flag renders identically everywhere.
// Simple flags: tricolors (rects only). Complex flags: verified SVG paths.
// Aliases resolve variant codes to canonical language codes.
const FLAG_ALIASES={kr:"ko",gb:"en",us:"en",sy:"ar",cn:"zh",jp:"ja"};

function CountryFlag({code:rawCode,size=56,variant}){
  const code=(rawCode||"").trim().toLowerCase();
  const resolved=FLAG_ALIASES[code]||code;
  const mkSvg=(vb,w,h,children)=>(<svg viewBox={vb} width={w} height={h} style={{borderRadius:size*0.08,display:"block",border:"1px solid rgba(0,0,0,0.12)"}}>{children}</svg>);
  const W=size,H=size*0.667;
  const flags={
    // ── Simple tricolors (rects only — impossible to get wrong) ──
    nl: mkSvg("0 0 9 6",W,H,<><rect width="9" height="2" fill="#AE1C28"/><rect y="2" width="9" height="2" fill="#FFF"/><rect y="4" width="9" height="2" fill="#21468B"/></>),
    fr: mkSvg("0 0 9 6",W,H,<><rect width="3" height="6" fill="#002395"/><rect x="3" width="3" height="6" fill="#FFF"/><rect x="6" width="3" height="6" fill="#ED2939"/></>),
    de: mkSvg("0 0 9 6",W,H,<><rect width="9" height="2" fill="#000"/><rect y="2" width="9" height="2" fill="#DD0000"/><rect y="4" width="9" height="2" fill="#FFCC00"/></>),
    es: mkSvg("0 0 9 6",W,H,<><rect width="9" height="1.5" fill="#AA151B"/><rect y="1.5" width="9" height="3" fill="#F1BF00"/><rect y="4.5" width="9" height="1.5" fill="#AA151B"/></>),
    ro: mkSvg("0 0 9 6",W,H,<><rect width="3" height="6" fill="#002B7F"/><rect x="3" width="3" height="6" fill="#FCD116"/><rect x="6" width="3" height="6" fill="#CE1126"/></>),
    ru: mkSvg("0 0 9 6",W,H,<><rect width="9" height="2" fill="#FFF"/><rect y="2" width="9" height="2" fill="#0039A6"/><rect y="4" width="9" height="2" fill="#D52B1E"/></>),
    // ── Simple emblems on solid backgrounds ──
    ja: mkSvg("0 0 900 600",W,H,<><rect width="900" height="600" fill="#FFF"/><circle cx="450" cy="300" r="180" fill="#BC002D"/></>),
    zh: mkSvg("0 0 900 600",W,H,<><rect width="900" height="600" fill="#DE2910"/><g fill="#FFDE00" transform="translate(150,100)"><polygon points="0,-90 21,-28 84,-28 33,10 54,72 0,35 -54,72 -33,10 -84,-28 -21,-28"/></g><g fill="#FFDE00">{[{x:300,y:60,r:26},{x:360,y:120,r:26},{x:360,y:210,r:26},{x:300,y:270,r:26}].map((s,i)=><circle key={i} cx={s.x} cy={s.y} r={s.r}/>)}</g></>),
    tr: mkSvg("0 0 900 600",W,H,<><rect width="900" height="600" fill="#E30A17"/><circle cx="350" cy="300" r="160" fill="#FFF"/><circle cx="385" cy="300" r="130" fill="#E30A17"/><polygon points="495,300 537,255 510,310 560,285 515,315 560,315 515,285 510,290 537,345 495,300" fill="#FFF"/></>),
    en: mkSvg("0 0 60 30",W,H,<><rect width="60" height="30" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFF" strokeWidth="6"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2"/><path d="M30,0 V30 M0,15 H60" stroke="#FFF" strokeWidth="10"/><path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6"/></>),
    // ── Syria (Arabic course) — green/white/black + 3 red stars ──
    ar: mkSvg("0 0 900 600",W,H,<><rect width="900" height="600" fill="#007A3D"/><rect y="200" width="900" height="200" fill="#FFF"/><rect y="400" width="900" height="200" fill="#000"/>{[225,450,675].map((cx,i)=><polygon key={i} points={`${cx},230 ${cx+15.5},277 ${cx+65},277 ${cx+25},308 ${cx+40},355 ${cx},330 ${cx-40},355 ${cx-25},308 ${cx-65},277 ${cx-15.5},277`} fill="#CE1126"/>)}</>),
    // ── South Korea (Taegukgi) — verified orientation via rotate(90) ──
    ko: mkSvg("0 0 900 600",W,H,<><rect width="900" height="600" fill="#FFF"/><g transform="rotate(90,450,300)"><g transform="translate(450,300)"><circle r="150" fill="#CD2E3A"/><path d="M0,-150 A75,75 0 0,1 0,0 A75,75 0 0,0 0,150 A150,150 0 0,1 0,-150Z" fill="#0047A0"/></g><g stroke="#000" strokeWidth="24" strokeLinecap="butt"><g transform="translate(450,300) rotate(-56.31)"><line x1="195" y1="-33" x2="315" y2="-33"/><line x1="195" y1="0" x2="315" y2="0"/><line x1="195" y1="33" x2="315" y2="33"/></g><g transform="translate(450,300) rotate(123.69)"><line x1="195" y1="-33" x2="243" y2="-33"/><line x1="267" y1="-33" x2="315" y2="-33"/><line x1="195" y1="0" x2="243" y2="0"/><line x1="267" y1="0" x2="315" y2="0"/><line x1="195" y1="33" x2="243" y2="33"/><line x1="267" y1="33" x2="315" y2="33"/></g><g transform="translate(450,300) rotate(56.31)"><line x1="195" y1="-33" x2="243" y2="-33"/><line x1="267" y1="-33" x2="315" y2="-33"/><line x1="195" y1="0" x2="315" y2="0"/><line x1="195" y1="33" x2="243" y2="33"/><line x1="267" y1="33" x2="315" y2="33"/></g><g transform="translate(450,300) rotate(-123.69)"><line x1="195" y1="-33" x2="315" y2="-33"/><line x1="195" y1="0" x2="243" y2="0"/><line x1="267" y1="0" x2="315" y2="0"/><line x1="195" y1="33" x2="315" y2="33"/></g></g></g></>),
  };
  const svg=flags[resolved];
  if(svg){
    if(variant==="plain") return <div style={{display:"inline-flex",overflow:"hidden",borderRadius:size*0.08}}>{svg}</div>;
    return <div style={{display:"inline-flex",overflow:"hidden",borderRadius:size*0.12,boxShadow:"0 2px 8px rgba(0,0,0,0.1)"}}>{svg}</div>;
  }
  // Last-resort fallback: grey text badge (never emoji — emoji breaks on Windows)
  const label=(resolved||"??").toUpperCase().slice(0,2);
  return <div style={{display:"inline-flex",alignItems:"center",justifyContent:"center",width:size,height:size*0.667,borderRadius:size*0.08,background:"var(--gray-200)",border:"1px solid rgba(0,0,0,0.12)",fontSize:size*0.28,fontWeight:700,color:"#666",letterSpacing:1}}>{label}</div>;
}

// ── GLOSSY POPUP — reusable modal with candy-gloss energy ──
function GlossyPopup({title,children,onClose}){
  const dk=document.documentElement.classList.contains("dark");
  const ref=useRef(null);
  useEffect(()=>{
    const h=e=>{if(e.code==="Escape"||e.code==="Backspace"){e.preventDefault();onClose();}};
    window.addEventListener("keydown",h);
    return ()=>window.removeEventListener("keydown",h);
  },[onClose]);
  useEffect(()=>{if(ref.current)ref.current.focus();},[]);
  return(
    <div ref={ref} tabIndex={-1} style={{position:"fixed",inset:0,zIndex:9990,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.55)",backdropFilter:"blur(6px)",WebkitBackdropFilter:"blur(6px)",animation:"fadeIn 0.2s ease"}} onClick={onClose} onKeyDown={e=>{if(e.code==="Escape"||e.code==="Backspace"){e.preventDefault();onClose();}}}>
      <div onClick={e=>e.stopPropagation()} style={{
        width:"90%",maxWidth:380,maxHeight:"80vh",overflowY:"auto",
        borderRadius:28,padding:"28px 24px 22px",
        background:dk?"linear-gradient(180deg, rgba(60,52,110,0.95) 0%, rgba(42,38,82,0.95) 50%, rgba(30,28,60,0.95) 100%)":"linear-gradient(180deg, #FFFFFF 0%, #FAF8FF 30%, #F4F0FF 60%, #EDE8FF 100%)",
        border:dk?"2px solid rgba(123,94,232,0.25)":"2px solid rgba(123,94,232,0.1)",
        boxShadow:dk?"0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.1), inset 0 -3px 0 rgba(0,0,0,0.2)":"0 20px 60px rgba(123,94,232,0.2), 0 8px 24px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.9), inset 0 -3px 0 rgba(123,94,232,0.05)",
        position:"relative",overflow:"hidden",
        animation:"popIn 0.25s cubic-bezier(0.34,1.56,0.64,1)",
      }}>
        {/* Glass highlight */}
        <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"35%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
        {/* Close button — glossy candy X */}
        <button onClick={onClose} style={{position:"absolute",top:14,right:14,width:36,height:36,borderRadius:12,border:"none",cursor:"pointer",zIndex:3,
          background:dk?"linear-gradient(180deg, rgba(80,70,120,0.9) 0%, rgba(55,48,90,0.9) 50%, rgba(40,35,70,0.9) 100%)":"linear-gradient(180deg, #F0ECF8 0%, #E4DEF2 50%, #D8D0EC 100%)",
          boxShadow:dk?"0 3px 10px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.15)":"0 3px 10px rgba(0,0,0,0.08), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -2px 0 rgba(0,0,0,0.04)",
          display:"flex",alignItems:"center",justifyContent:"center",transition:"all .15s",overflow:"hidden",position:"relative",
        }}>
          <div style={{position:"absolute",top:0,left:"8%",right:"8%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%)",pointerEvents:"none"}}/>
          <svg width={14} height={14} viewBox="0 0 24 24" fill="none" style={{position:"relative",zIndex:1}}><path d="M18 6L6 18M6 6l12 12" stroke={dk?"rgba(220,215,240,0.7)":"#888"} strokeWidth={3} strokeLinecap="round"/></svg>
        </button>
        {title&&<h3 style={{fontSize:20,fontWeight:800,color:"var(--gray-800)",marginBottom:16,paddingRight:40,position:"relative",zIndex:2}}>{title}</h3>}
        <div style={{position:"relative",zIndex:2}}>{children}</div>
      </div>
    </div>
  );
}


function UnitMap({lang,user,setUser,chapterNav,setChapterNav,fkSection,setFkSection,fkMode,setFkMode,addXp,learnWord,showToast,addFlag,baseLang,onSelect}){
  const [headerStyle,setHeaderStyle]=useState("A");
  const [showStatsPopup,setShowStatsPopup]=useState(false);
  const [showBandPopup,setShowBandPopup]=useState(null); // band string or null
  const [showFkPopup,setShowFkPopup]=useState(false);
  const dk=document.documentElement.classList.contains("dark");
  const L=LANGUAGES.find(l=>l.code===lang);
  const isRtl=!!L?.rtl; // Arabic, Hebrew etc. — used for FK content direction
  const _srcFiltered=UNITS.filter(u=>u.lang===lang&&(u.srcLang||"en")===baseLang);
  const allLangUnits=_srcFiltered.length>0?_srcFiltered:UNITS.filter(u=>u.lang===lang&&(u.srcLang||"en")==="en");
  // Track system: if units have a "track" field, allow toggling
  const tracks=[...new Set(allLangUnits.map(u=>u.track).filter(Boolean))];
  const hasTracks=tracks.length>1;
  const [selTrack,setSelTrack]=useState(tracks.includes("v2")?"v2":tracks[0]||null);
  const langUnits=hasTracks?allLangUnits.filter(u=>u.track===selTrack):allLangUnits;
  const [viewMode,setViewMode]=useState("chapters");
  // chapterNav + fkSection are controlled by LearnPage (lifted state)
  const [selectedChar,setSelectedChar]=useState(null); // {ch, rom} for detail card
  const prog=user.progress||{};
  // Placement quiz result: units at or below this CEFR sub-level are auto-unlocked.
  const startingLevel=(prog[lang]||{}).startingLevel||null;
  const isPlacementUnlocked=(u)=>!!startingLevel&&compareCefrLevel(startingLevel,u.level)>=0;

  // ── Backspace/Escape: navigate back through UnitMap hierarchy ──
  useEffect(()=>{
    const atTop=chapterNav==="select"&&!fkSection&&(!fkMode||fkMode==="select");
    if(atTop)return; // At top level — let global handler go to home
    // Playthrough and GateQuiz components manage their own Backspace internally
    if(fkMode==="playthrough"||fkMode==="gatequiz")return;
    const handler=(e)=>{
      if(e.code!=="Backspace"&&e.code!=="Escape")return;
      const tag=document.activeElement?.tagName;
      if(tag==="INPUT"||tag==="TEXTAREA")return;
      e.preventDefault();e.stopPropagation();UISounds.click();
      if(fkSection){setFkSection(null);}
      else if(fkMode&&fkMode!=="select"){setFkMode("select");}
      else if(chapterNav==="foundations"&&fkMode==="select"){setChapterNav("select");}
      else if(chapterNav.startsWith("band:")){setChapterNav("select");}
    };
    window.addEventListener("keydown",handler,true);
    return ()=>window.removeEventListener("keydown",handler,true);
  },[chapterNav,fkSection,fkMode]);

  // Group units by CEFR band
  const bandMap={};
  langUnits.forEach(u=>{
    const info=getCefrInfo(u.level);
    const band=info.band||"A1";
    if(!bandMap[band])bandMap[band]=[];
    bandMap[band].push(u);
  });

  const allBands=["A1","A2","B1","B2","C1","C2"];
  const bandLabels={A1:t("level_beginner",baseLang),A2:t("level_elementary",baseLang),B1:t("level_intermediate",baseLang),B2:t("level_upper_int",baseLang),C1:t("level_advanced",baseLang),C2:t("level_mastery",baseLang)};
  const bandIcons={A1:<BrandIcon name="band-a1" size={32}/>,A2:<BrandIcon name="band-a2" size={32}/>,B1:<BrandIcon name="band-b1" size={32}/>,B2:<BrandIcon name="band-b2" size={32}/>,C1:<BrandIcon name="band-c1" size={32}/>,C2:<BrandIcon name="band-c2" size={32}/>};

  const getUnitProg=(u)=>prog.units?.[`${lang}:${u.n}`];
  const bandProgress=(band)=>{
    const units=bandMap[band]||[];
    const done=units.filter(u=>{const p=getUnitProg(u);return p&&p.completed;}).length;
    return{done,total:units.length};
  };

  // ═══ BAND VIEW ═══
  if(chapterNav.startsWith("band:")){
    const band=chapterNav.slice(5);
    const units=bandMap[band]||[];
    const color=getCefrBandColor(band);
    return(
      <div className="anim">
        <div style={{marginBottom:20}}><NavArrow onClick={()=>setChapterNav("select")} isBack size={44}/></div>
        {/* Band header — clickable → info popup */}
        <div role="button" onClick={()=>{UISounds.click();setShowBandPopup(band);}} style={{cursor:"pointer",background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 12%, #8B6AE4 30%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",borderRadius:22,padding:"22px 24px",marginBottom:22,border:"2px solid rgba(255,255,255,0.18)",position:"relative",overflow:"hidden",boxShadow:dk?"0 0 20px rgba(123,94,232,0.4), 0 8px 28px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 16px rgba(123,94,232,0.2), 0 8px 28px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s"}}>
          <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
          <div style={{display:"flex",alignItems:"center",gap:14,position:"relative",zIndex:2}}>
            <div style={{width:52,height:52,borderRadius:16,background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,color:"white",fontWeight:900,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.15)",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none"}}/>
              <span style={{position:"relative",zIndex:1,textShadow:"0 2px 4px rgba(0,0,0,0.25)"}}>{band}</span>
            </div>
            <div style={{flex:1}}>
              <h2 style={{fontSize:22,fontWeight:800,color:"white",textShadow:"0 2px 4px rgba(0,0,0,0.2)",margin:0,fontFamily:"'DM Sans','Inter',system-ui,sans-serif"}}>{bandLabels[band]}</h2>
              <p style={{color:"rgba(255,255,255,0.75)",fontSize:13,margin:0}}>{units.length} {t("map_units",baseLang)} · CEFR {band}{(()=>{const bp=bandProgress(band);return bp.done>0?` · ${Math.round((bp.done/bp.total)*100)}%`:"";})()}</p>
            </div>
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" style={{position:"relative",zIndex:2,opacity:0.5}}><path d="M9 5l7 7-7 7" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          {(()=>{const bp=bandProgress(band);return bp.done>0?<div style={{marginTop:10,height:5,borderRadius:4,background:"rgba(255,255,255,0.15)",overflow:"hidden",position:"relative",zIndex:2}}>
            <div style={{height:"100%",width:`${Math.round((bp.done/bp.total)*100)}%`,background:"linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",borderRadius:4,transition:"width 0.3s",boxShadow:"0 0 8px rgba(255,255,255,0.4)",position:"relative",overflow:"hidden"}}><div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"50%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%)",pointerEvents:"none"}}/></div>
          </div>:null;})()}
        </div>

        {/* Band info popup */}
        {showBandPopup===band&&<GlossyPopup title={`${bandLabels[band]} · CEFR ${band}`} onClose={()=>setShowBandPopup(null)}>
          <div style={{fontSize:13,color:"var(--gray-600)",lineHeight:1.6,marginBottom:16}}>
            {band==="A1"&&t("cefr_a1_desc",baseLang)}
            {band==="A2"&&t("cefr_a2_desc",baseLang)}
            {band==="B1"&&t("cefr_b1_desc",baseLang)}
            {band==="B2"&&t("cefr_b2_desc",baseLang)}
            {band==="C1"&&t("cefr_c1_desc",baseLang)}
            {band==="C2"&&t("cefr_c2_desc",baseLang)}
          </div>
          <div style={{fontSize:12,fontWeight:700,color:"var(--gray-500)",marginBottom:10}}>{t("cefr_units_in",baseLang)}</div>
          <div style={{display:"flex",flexDirection:"column",gap:6}}>
            {units.map(u=><div key={u.n} style={{padding:"10px 14px",borderRadius:12,background:dk?"rgba(123,94,232,0.1)":"rgba(123,94,232,0.05)",border:dk?"1px solid rgba(123,94,232,0.12)":"1px solid rgba(123,94,232,0.06)",display:"flex",alignItems:"center",gap:10}}>
              <span style={{fontSize:12,fontWeight:800,color:"var(--purple-accent-text)"}}>{u.level}</span>
              <span style={{fontSize:13,color:"var(--gray-700)",fontWeight:600}}>{t("map_unit_prefix",baseLang)} {u.n}: <span className="trg-inline">{u.title}</span></span>
              <span style={{fontSize:11,color:"var(--gray-400)",marginLeft:"auto"}}>{u.lessons.length} {t("map_lessons",baseLang)}</span>
            </div>)}
            {units.length===0&&<div style={{fontSize:13,color:"var(--gray-400)",fontStyle:"italic",textAlign:"center",padding:16}}>{t("map_content_dev",baseLang)}</div>}
          </div>
        </GlossyPopup>}

        {units.length===0?
          <div style={{borderRadius:22,padding:"40px 20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:dk?"rgba(40,42,72,0.4)":"linear-gradient(180deg, #F8F6FF 0%, #F0ECFF 100%)",border:"2px solid rgba(123,94,232,0.08)",textAlign:"center"}}>
            <div style={{marginBottom:12}}><AppIcon name="construction" size={56}/></div>
            <h3 className="hd" style={{fontSize:18,fontWeight:700,marginBottom:4}}>{t("map_coming_soon",baseLang)}</h3>
            <p style={{color:"var(--gray-400)",fontSize:13}}>CEFR {band} {t("map_content_dev",baseLang)}</p>
          </div>
        :
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
            {units.map(u=>{
              const hasContent=u.lessons.length>0;
              const placedHere=isPlacementUnlocked(u)&&hasContent;
              const available=hasContent;
              const up=getUnitProg(u);
              const pctVal=up?up.pct:0;
              const done=up&&up.completed;
              return <div key={u.n} role="button" className="ghost-tile" onClick={()=>{if(available){UISounds.tick();onSelect(u);}}}
                style={{
                cursor:available?"pointer":"default",
                borderRadius:22,padding:"18px 14px 14px",
                display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6,
                opacity:available?1:0.45,
                background:done?(dk?"linear-gradient(180deg, rgba(40,80,65,0.85) 0%, rgba(30,65,50,0.9) 50%, rgba(22,50,40,0.95) 100%)":"linear-gradient(180deg, #E0FAE8 0%, #D2F5DC 50%, #C4F0D4 100%)"):(dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)"),
                border:done?`2.5px solid var(--teal)`:placedHere?(dk?`2px solid rgba(74,143,231,0.5)`:`2px solid rgba(74,143,231,0.35)`):(dk?`2px solid rgba(123,94,232,0.25)`:`2px solid rgba(123,94,232,0.1)`),
                boxShadow:dk?"0 6px 20px rgba(0,0,0,0.35), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 6px 20px rgba(123,94,232,0.1), 0 0 10px rgba(123,94,232,0.06), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(123,94,232,0.05)",
                transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s",
                position:"relative",overflow:"hidden",
              }}>
                <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
                {/* Placed badge — top-right corner */}
                {placedHere&&!done&&<div style={{position:"absolute",top:8,right:8,zIndex:3,padding:"2px 7px",borderRadius:8,background:"linear-gradient(180deg,#6EB5F5 0%,#4A8FE7 55%,#3070C8 100%)",color:"white",fontSize:8,fontWeight:800,letterSpacing:0.4,boxShadow:"0 2px 6px rgba(74,143,231,0.4), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1)"}}>Placed</div>}
                <div style={{
                  width:56,height:56,borderRadius:16,
                  background:done?"linear-gradient(180deg, #70E8C8 0%, #40D8A8 15%, #2ECD9E 40%, #1DB88A 65%, #18A07A 85%, #148068 100%)":"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #8B6AE4 35%, #7B5EE8 55%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",
                  display:"flex",alignItems:"center",justifyContent:"center",
                  color:"white",fontSize:18,fontWeight:900,
                  boxShadow:done?(dk?"0 0 16px rgba(46,205,158,0.4), 0 6px 18px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 12px rgba(46,205,158,0.25), 0 6px 18px rgba(46,205,158,0.3), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)"):(dk?`0 0 16px rgba(123,94,232,0.4), 0 6px 18px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)`:`0 0 12px rgba(123,94,232,0.2), 0 6px 18px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -3px 0 rgba(0,0,0,0.12)`),
                  position:"relative",overflow:"hidden",zIndex:2,flexShrink:0,
                }}>
                  <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none"}}/>
                  <span style={{position:"relative",zIndex:1,textShadow:"0 1px 3px rgba(0,0,0,0.25)",filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.15))"}}>{done?"✓":`U${u.n}`}</span>
                </div>
                <div style={{textAlign:"center",position:"relative",zIndex:2}}>
                  <div className="hd trg-text-center" style={{fontSize:12,fontWeight:700,color:available?(dk?"rgba(220,215,240,0.9)":"var(--gray-700)"):"var(--gray-400)",lineHeight:1.3}}>{u.title}</div>
                  <span style={{display:"inline-block",padding:"2px 8px",borderRadius:6,marginTop:3,background:dk?"rgba(123,94,232,0.15)":"rgba(123,94,232,0.08)",color:"var(--purple-accent-text)",fontSize:9,fontWeight:800,letterSpacing:0.3}}>{u.level}</span>
                </div>
                {available&&pctVal>0&&<div style={{width:"80%",position:"relative",zIndex:2}}>
                  <div style={{height:4,borderRadius:3,background:dk?"rgba(255,255,255,0.08)":"rgba(123,94,232,0.08)",overflow:"hidden"}}>
                    <div style={{height:"100%",width:`${pctVal}%`,background:"linear-gradient(180deg, #C0AEFA 0%, #7B5EE8 55%, #5840B8 100%)",borderRadius:3,boxShadow:"0 0 6px rgba(123,94,232,0.3), inset 0 1px 0 rgba(255,255,255,0.4)",position:"relative",overflow:"hidden"}}>
                      <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"50%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)",pointerEvents:"none"}}/>
                    </div>
                  </div>
                </div>}
              </div>;
            })}
          </div>
        }
      </div>
    );
  }

  // ═══ FOUNDATIONS VIEW ═══
  if(chapterNav==="foundations"){
    const fData=FOUNDATIONS_BY_LANG[lang];
    const sections=fData?.sections||[];
    const openSec=fkSection?sections.find(s=>s.id===fkSection):null;
    const fProg=(user.progress||{}).foundation||{};
    const isFkDone=(secId,itemIdx)=>!!fProg[`${lang}:foundation:${secId}:${itemIdx}`];
    const markFk=(secId,itemIdx)=>{
      if(!setUser)return;
      const key=`${lang}:foundation:${secId}:${itemIdx}`;
      setUser(u=>{
        const p={...(u.progress||{}),foundation:{...((u.progress||{}).foundation||{})}};
        p.foundation[key]=true;
        return{...u,progress:p};
      });
    };
    const secProgress=(sec)=>{
      const total=(sec.items||[]).length;
      const done=(sec.items||[]).filter((_,i)=>isFkDone(sec.id,i)).length;
      return{done,total,pct:total>0?Math.round((done/total)*100):0};
    };
    const overallProgress=()=>{
      let total=0,done=0;
      sections.forEach(sec=>{const sp=secProgress(sec);total+=sp.total;done+=sp.done;});
      return{done,total,pct:total>0?Math.round((done/total)*100):0};
    };

    // Section detail view
    if(openSec){
      const sp=secProgress(openSec);
      const secIdx=sections.indexOf(openSec);
      const prevSec=secIdx>0?sections[secIdx-1]:null;
      const nextSec=secIdx<sections.length-1?sections[secIdx+1]:null;
      const goNext=()=>{if(nextSec){setFkSection(nextSec.id);window.scrollTo(0,0);}else{setFkSection(null);window.scrollTo(0,0);}};
      const goPrev=()=>{if(prevSec){setFkSection(prevSec.id);window.scrollTo(0,0);}};
      return(
        <div className="anim" onKeyDown={e=>{if(e.code==="Space"&&!e.target.closest("button,input,textarea")){e.preventDefault();goNext();}if(e.code==="ArrowLeft"){e.preventDefault();goPrev();}if(e.code==="ArrowRight"){e.preventDefault();goNext();}}} tabIndex={0} ref={el=>{if(el)el.focus();}} style={{outline:"none"}}>
          <div style={{marginBottom:20}}><NavArrow onClick={()=>setFkSection(null)} isBack size={44}/></div>
          <div style={{background:dk?"linear-gradient(180deg, rgba(55,45,105,0.96) 0%, rgba(42,36,90,0.98) 50%, rgba(30,26,68,1) 100%)":"linear-gradient(180deg, #FDFBFF 0%, #F6F2FF 35%, #F0ECFF 65%, #EAE4FF 100%)",borderRadius:22,padding:"24px 28px",marginBottom:24,border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.15)",boxShadow:dk?"0 8px 28px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.1), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 8px 28px rgba(123,94,232,0.12), inset 0 2px 0 rgba(255,255,255,0.85), inset 0 -3px 0 rgba(123,94,232,0.06)",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)",pointerEvents:"none",zIndex:0}}/>
            <div style={{position:"relative",zIndex:1}}>
              <div style={{fontSize:10,fontWeight:800,letterSpacing:1.5,textTransform:"uppercase",color:dk?"rgba(192,174,250,0.6)":"rgba(123,94,232,0.5)",marginBottom:8,fontFamily:"'Quicksand',sans-serif"}}>Chapter {secIdx+1}</div>
              <div style={{display:"flex",alignItems:"center",gap:14}}>
                <div style={{width:52,height:52,borderRadius:16,background:"linear-gradient(180deg, #C0AEFA 0%, #7B5EE8 55%, #5840B8 100%)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 16px rgba(123,94,232,0.4), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)",flexShrink:0}}><BrandIcon name={openSec.icon} size={24}/></div>
                <div style={{flex:1}}>
                  <h2 className="hd" style={{fontSize:22,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:"var(--purple-accent-text)",margin:0}}>{openSec.title}</h2>
                  <p style={{color:"var(--gray-500)",fontSize:13,fontFamily:"'Nunito',sans-serif",margin:"4px 0 0"}}>{openSec.desc}</p>
                </div>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:10,marginTop:14}}>
                {sp.total>0&&<div style={{flex:1,height:5,borderRadius:3,background:dk?"rgba(255,255,255,0.07)":"rgba(180,165,240,0.2)",overflow:"hidden"}}>
                  <div style={{height:"100%",width:`${sp.pct}%`,background:"linear-gradient(90deg, #C0AEFA 0%, #7B5EE8 50%, #5840B8 100%)",borderRadius:3,transition:"width 0.3s",boxShadow:"0 0 8px rgba(123,94,232,0.4)"}}/>
                </div>}
                <span style={{fontSize:11,fontWeight:700,color:"var(--purple-accent-text)",flexShrink:0}}>{sp.done}/{sp.total}</span>
              </div>
            </div>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            {(openSec.items||[]).map((item,i)=>{
              const done=isFkDone(openSec.id,i);
              const hasGrid=!!item.grid;
              const hasInv=!!item.inventory;
              const allChars=hasGrid?item.grid.rows.flatMap(r=>r.cells.filter(c=>c.ch).map(c=>c.ch)):hasInv?item.inventory.split("|").map(p=>p.trim().split(" ")[0]):[];
              return(
              <div key={i} className="anim" style={{padding:"16px 18px",animationDelay:`${i*0.04}s`,borderRadius:20,background:dk?(done?"linear-gradient(180deg, rgba(46,205,167,0.1) 0%, rgba(46,205,167,0.04) 50%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 50%, rgba(30,26,68,0.98) 100%)"):(done?"linear-gradient(180deg, rgba(46,205,167,0.1) 0%, rgba(46,205,167,0.04) 50%, #FDFBFF 100%)":"linear-gradient(180deg, #FDFBFF 0%, #F6F2FF 40%, #F0ECFF 70%, #EDE8FF 100%)"),border:done?(dk?"1.5px solid rgba(46,205,167,0.3)":"1.5px solid rgba(46,205,167,0.3)"):(dk?"1.5px solid rgba(123,94,232,0.2)":"1.5px solid rgba(180,165,240,0.3)"),boxShadow:dk?"0 4px 16px rgba(0,0,0,0.25), inset 0 2px 0 rgba(255,255,255,0.05), inset 0 -2px 0 rgba(0,0,0,0.1)":"0 4px 16px rgba(123,94,232,0.07), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -2px 0 rgba(123,94,232,0.04)",position:"relative",overflow:"hidden",transition:"all .25s cubic-bezier(.4,0,.2,1)"}}>
                {/* Gloss highlight */}
                <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"40%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:0}}/>
                {/* Page number */}
                <div style={{position:"absolute",top:8,right:14,fontSize:10,color:dk?"rgba(180,170,220,0.4)":"rgba(123,94,232,0.3)",fontWeight:600,fontFamily:"'Quicksand',sans-serif",zIndex:1}}>{i+1}/{openSec.items.length}</div>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:4,position:"relative",zIndex:1}}>
                  {done&&<span style={{fontSize:14}}>✓</span>}
                  <div className="hd" style={{fontSize:15,fontWeight:700,color:done?"var(--teal)":"var(--gray-800)"}}>{item.title}</div>
                </div>
                {item.desc&&<p style={{fontSize:13,color:"var(--gray-500)",marginBottom:8,lineHeight:1.6}}>{item.desc}</p>}
                {hasGrid&&<div style={{background:dk?"linear-gradient(180deg, rgba(123,94,232,0.18) 0%, rgba(100,80,200,0.1) 100%)":"linear-gradient(180deg, rgba(200,190,255,0.35) 0%, rgba(235,230,255,0.15) 100%)",borderRadius:22,padding:"12px 10px",marginBottom:8,overflowX:"auto",border:dk?"1px solid rgba(123,94,232,0.2)":"1px solid rgba(180,165,240,0.3)"}}>
                  {item.grid.headers&&item.grid.headers.some(h=>h)&&<div style={{display:"grid",gridTemplateColumns:`36px repeat(${item.grid.cols}, 1fr)`,gap:4,marginBottom:4}}>
                    <div/>
                    {item.grid.headers.map((h,hi)=><div key={hi} style={{textAlign:"center",fontSize:10,fontWeight:700,color:"var(--gray-400)",...(isRtl&&/[\u0600-\u06FF]/.test(h)?{direction:"rtl"}:{})}}>{h}</div>)}
                  </div>}
                  {item.grid.rows.map((row,ri)=>(
                    <div key={ri} style={{display:"grid",gridTemplateColumns:`36px repeat(${item.grid.cols}, 1fr)`,gap:4,marginBottom:4}}>
                      <div style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,fontWeight:800,color:row.color||"#7B5EE8",textTransform:"uppercase",letterSpacing:0.5}}>{row.label}</div>
                      {row.cells.map((cell,ci)=>cell.ch?(
                        <div key={ci} onClick={()=>setSelectedChar({ch:cell.ch,rom:cell.rom,title:item.title,color:row.color})} style={{textAlign:"center",padding:"7px 2px",borderRadius:12,background:dk?"linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)":"linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(245,244,250,0.8) 100%)",border:`1.5px solid ${row.color||"#7B5EE8"}${dk?"30":"20"}`,cursor:"pointer",transition:"all .25s cubic-bezier(.4,0,.2,1)",boxShadow:dk?"0 2px 6px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06)":"0 2px 6px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)"}}>
                          <div style={{fontSize:22,fontWeight:700,color:row.color||"#7B5EE8",lineHeight:1.2,...(isRtl&&/[\u0600-\u06FF]/.test(cell.ch)?{direction:"rtl"}:{})}}>{cell.ch}</div>
                          {cell.rom&&<div style={{fontSize:9,color:"var(--gray-400)",marginTop:1}}>{cell.rom}</div>}
                        </div>
                      ):<div key={ci} style={{padding:"7px 2px",borderRadius:12,background:dk?"rgba(255,255,255,0.03)":"rgba(200,190,255,0.15)"}}/>)}
                    </div>
                  ))}
                </div>}
                {!hasGrid&&hasInv&&<div style={{background:dk?"linear-gradient(180deg, rgba(123,94,232,0.18) 0%, rgba(100,80,200,0.1) 100%)":"linear-gradient(180deg, rgba(200,190,255,0.35) 0%, rgba(235,230,255,0.15) 100%)",borderRadius:22,padding:"12px 14px",marginBottom:8,border:dk?"1px solid rgba(123,94,232,0.2)":"1px solid rgba(180,165,240,0.3)"}}>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:6}}>
                  {item.inventory.split("|").map((pair,k)=>{
                    const parts=pair.trim().split(" ");
                    const ch=parts[0];
                    const rom=parts.slice(1).join(" ");
                    return <div key={k} onClick={()=>setSelectedChar({ch,rom,title:item.title})} style={{textAlign:"center",padding:"8px 2px",borderRadius:12,background:dk?"linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)":"linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(245,244,250,0.8) 100%)",border:dk?"1.5px solid rgba(123,94,232,0.2)":"1.5px solid rgba(180,165,240,0.3)",cursor:"pointer",transition:"all .25s cubic-bezier(.4,0,.2,1)",boxShadow:dk?"0 2px 6px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06)":"0 2px 6px rgba(123,94,232,0.06), inset 0 1px 0 rgba(255,255,255,0.9)"}}>
                      <div style={{fontSize:24,fontWeight:700,color:"var(--purple-accent-text)",lineHeight:1.2}}>{ch}</div>
                      {rom&&<div style={{fontSize:10,color:"var(--gray-400)",marginTop:2}}>{rom}</div>}
                    </div>;
                  })}
                  </div>
                </div>}
                {selectedChar&&allChars.includes(selectedChar.ch)&&<div style={{position:"fixed",top:0,left:0,right:0,bottom:0,background:dk?"rgba(0,0,0,0.55)":"rgba(15,10,40,0.3)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",zIndex:999,display:"flex",alignItems:"center",justifyContent:"center",padding:20}} onClick={()=>setSelectedChar(null)}>
                  <div className="anim" style={{maxWidth:320,width:"100%",padding:"32px 24px",textAlign:"center",borderRadius:22,background:dk?"linear-gradient(180deg, rgba(123,94,232,0.55) 0%, rgba(100,78,205,0.42) 45%, rgba(80,60,180,0.32) 100%)":"linear-gradient(180deg, rgba(196,182,255,0.96) 0%, rgba(210,200,255,0.93) 45%, rgba(220,213,255,0.9) 100%)",border:dk?"1.5px solid rgba(160,140,255,0.5)":"1.5px solid rgba(165,148,238,0.7)",boxShadow:dk?"0 8px 32px rgba(0,0,0,0.4), 0 0 18px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.13), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 8px 32px rgba(123,94,232,0.18), 0 0 16px rgba(165,148,238,0.25), inset 0 2px 0 rgba(255,255,255,0.82), inset 0 -3px 0 rgba(110,85,200,0.1)",position:"relative",overflow:"hidden"}} onClick={e=>e.stopPropagation()}>
                    <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.68) 0%, rgba(255,255,255,0.14) 60%, transparent 100%)",pointerEvents:"none"}}/>
                    <div style={{fontSize:72,fontWeight:800,color:selectedChar.color||"#7B5EE8",marginBottom:8,lineHeight:1,position:"relative",zIndex:1,fontFamily:"'Quicksand',sans-serif"}}>{selectedChar.ch}</div>
                    {selectedChar.rom&&<div style={{fontSize:22,color:"var(--gray-600)",fontWeight:600,marginBottom:16,fontFamily:"'Nunito',sans-serif",position:"relative",zIndex:1}}>{selectedChar.rom}</div>}
                    <div style={{display:"flex",gap:10,justifyContent:"center",marginBottom:16,position:"relative",zIndex:1}}>
                      <button onClick={()=>{if(typeof speechSynthesis!=="undefined"){const u=new SpeechSynthesisUtterance(selectedChar.rom||selectedChar.ch);u.rate=0.7;speechSynthesis.speak(u);}}} style={{padding:"10px 20px",borderRadius:16,border:"none",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)":"linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(240,234,255,0.85) 100%)",color:dk?"rgba(200,184,255,0.9)":"#7050D8",fontSize:14,fontWeight:900,fontFamily:"'Quicksand',sans-serif",cursor:"pointer",display:"flex",alignItems:"center",gap:6,boxShadow:dk?"inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 6px rgba(0,0,0,0.2)":"inset 0 2px 0 rgba(255,255,255,0.9), 0 2px 6px rgba(112,80,216,0.1), 0 0 0 1px rgba(168,144,255,0.2)",transition:"all .25s cubic-bezier(.4,0,.2,1)"}}>🔊 Listen</button>
                    </div>
                    <button onClick={()=>setSelectedChar(null)} style={{marginTop:16,padding:"8px 24px",borderRadius:16,border:"none",background:dk?"linear-gradient(180deg,#C0AEF8 0%,#A488F0 15%,#8B6AE4 35%,#7B5EE8 50%,#6545C8 75%,#5840B8 90%,#4A2BA6 100%)":"linear-gradient(180deg,#B8A8FA 0%,#9B7AE8 20%,#7B5EE8 55%,#6545C8 85%,#5840B8 100%)",color:"white",fontWeight:900,fontFamily:"'Quicksand',sans-serif",fontSize:13,cursor:"pointer",boxShadow:dk?"0 0 18px rgba(123,94,232,0.4), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 4px 16px rgba(123,94,232,0.4), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)",textShadow:"0 1px 2px rgba(0,0,0,0.2)",position:"relative",zIndex:1,transition:"all .25s cubic-bezier(.4,0,.2,1)"}}>Close</button>
                  </div>
                </div>}
                {item.examples&&item.examples.length>0&&<div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:8}}>
                  {item.examples.map((ex,j)=>(
                    <span key={j} style={{display:"inline-block",padding:"4px 10px",borderRadius:14,background:dk?"linear-gradient(180deg, rgba(123,94,232,0.18) 0%, rgba(100,80,200,0.1) 100%)":"linear-gradient(180deg, rgba(200,190,255,0.4) 0%, rgba(220,210,255,0.25) 100%)",color:"var(--purple-accent-text)",fontSize:12,fontWeight:600,fontFamily:"'Nunito',sans-serif",border:dk?"1px solid rgba(123,94,232,0.25)":"1px solid rgba(180,165,240,0.35)",...(isRtl&&/[\u0600-\u06FF]/.test(ex)?{direction:"rtl"}:{})}}>{ex}</span>
                  ))}
                </div>}
                {!done&&<button onClick={()=>markFk(openSec.id,i)} style={{padding:"8px 16px",borderRadius:16,border:"none",background:dk?"linear-gradient(180deg,#C0AEF8 0%,#A488F0 15%,#8B6AE4 35%,#7B5EE8 50%,#6545C8 75%,#5840B8 90%,#4A2BA6 100%)":"linear-gradient(180deg,#B8A8FA 0%,#9B7AE8 20%,#7B5EE8 55%,#6545C8 85%,#5840B8 100%)",color:"white",fontSize:12,fontWeight:900,fontFamily:"'Quicksand',sans-serif",letterSpacing:0.3,cursor:"pointer",boxShadow:dk?"0 0 18px rgba(123,94,232,0.4), 0 5px 16px rgba(85,53,181,0.5), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 4px 16px rgba(123,94,232,0.4), 0 2px 4px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)",textShadow:"0 1px 2px rgba(0,0,0,0.2)",transition:"all .25s cubic-bezier(.4,0,.2,1)",position:"relative",overflow:"hidden"}}>✓ I got it</button>}
                {done&&<div style={{fontSize:11,color:"var(--teal)",fontWeight:600}}>✓ Completed</div>}
              </div>);
            })}
          </div>
          {/* ── Section navigation ── */}
          <div style={{display:"flex",gap:10,marginTop:20,justifyContent:"space-between"}}>
            {prevSec?<NavArrow onClick={goPrev} isBack size={44}/>:<div/>}
            {nextSec?<button onClick={goNext} style={{fontSize:13,padding:"10px 18px",background:dk?"linear-gradient(180deg,#C0AEF8 0%,#A488F0 15%,#8B6AE4 35%,#7B5EE8 50%,#6545C8 75%,#5840B8 90%,#4A2BA6 100%)":"linear-gradient(180deg,#B8A8FA 0%,#9B7AE8 20%,#7B5EE8 55%,#6545C8 85%,#5840B8 100%)",color:"white",border:"none",borderRadius:16,fontWeight:900,fontFamily:"'Quicksand',sans-serif",letterSpacing:0.3,cursor:"pointer",boxShadow:dk?"0 0 18px rgba(123,94,232,0.4), 0 5px 16px rgba(85,53,181,0.5), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 4px 16px rgba(123,94,232,0.4), 0 2px 4px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)",textShadow:"0 1px 2px rgba(0,0,0,0.2)",transition:"all .25s cubic-bezier(.4,0,.2,1)"}}>Next: {nextSec.title} →</button>
            :<button onClick={()=>{setFkSection(null);window.scrollTo(0,0);}} style={{fontSize:13,padding:"10px 18px",background:"linear-gradient(135deg,var(--teal),#2ECDA7)",color:"white",border:"none",borderRadius:16,fontWeight:900,fontFamily:"'Quicksand',sans-serif",cursor:"pointer",boxShadow:"0 4px 16px rgba(46,205,167,0.3), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)",textShadow:"0 1px 2px rgba(0,0,0,0.2)",transition:"all .25s cubic-bezier(.4,0,.2,1)"}}>✓ All Sections Done</button>}
          </div>
          <div style={{textAlign:"center",marginTop:8}}><span style={{fontSize:10,color:"var(--gray-300)"}}>press ⎵ spacebar to continue</span></div>
        </div>
      );
    }

    // Section list view (Foundations home)
    const op=overallProgress();
    return(
      <div className="anim" data-kb-owner="foundations">
        {fkMode!=="playthrough"&&fkMode!=="gatequiz"&&<>
        <div style={{marginBottom:20}}><NavArrow onClick={()=>{if(fkMode!=="select"){setFkMode("select");}else{setChapterNav("select");}}} isBack size={44}/></div>
        {/* Foundations header — clickable → info popup — matches Nederlands purple */}
        <div role="button" onClick={()=>{UISounds.click();setShowFkPopup(true);}} style={{cursor:"pointer",background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 12%, #8B6AE4 30%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",borderRadius:22,padding:"22px 24px",marginBottom:24,border:"2px solid rgba(255,255,255,0.18)",position:"relative",overflow:"hidden",boxShadow:dk?"0 0 20px rgba(123,94,232,0.4), 0 8px 28px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 16px rgba(123,94,232,0.2), 0 8px 28px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s"}}>
          <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
          <div style={{display:"flex",alignItems:"center",gap:14,position:"relative",zIndex:2}}>
            <div style={{width:56,height:56,borderRadius:16,background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.15)",flexShrink:0}}><AppIcon name="building_blocks" size={36}/></div>
            <div style={{flex:1}}>
              <h2 style={{fontSize:22,fontWeight:800,color:"white",textShadow:"0 2px 4px rgba(0,0,0,0.2)",margin:0,fontFamily:"'Quicksand',sans-serif"}}>{fData?.name||t("found_title",baseLang)}</h2>
              <p style={{color:"rgba(255,255,255,0.75)",fontSize:13,margin:0}}>{L?.native||"Language"}: Before You Start</p>
              <div style={{display:"flex",gap:8,marginTop:6,alignItems:"center"}}>
                <span style={{padding:"3px 10px",borderRadius:6,background:"rgba(255,255,255,0.18)",color:"white",fontSize:10,fontWeight:700}}>{t("found_pre_a1",baseLang)}</span>
                {op.total>0&&<span style={{fontSize:11,color:"rgba(255,255,255,0.85)",fontWeight:600}}>{op.pct}% {t("found_completed",baseLang)}</span>}
              </div>
            </div>
            <svg width={16} height={16} viewBox="0 0 24 24" fill="none" style={{position:"relative",zIndex:2,opacity:0.5}}><path d="M9 5l7 7-7 7" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          {op.total>0&&<div style={{marginTop:10,height:5,borderRadius:4,background:"rgba(255,255,255,0.15)",overflow:"hidden",position:"relative",zIndex:2}}>
            <div style={{height:"100%",width:`${op.pct}%`,background:"linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",borderRadius:4,transition:"width 0.3s",boxShadow:"0 0 8px rgba(255,255,255,0.4)"}}/>
          </div>}
        </div>
        {/* Foundations info popup */}
        {showFkPopup&&<GlossyPopup title="Why Foundations?" onClose={()=>setShowFkPopup(false)}>
          <div style={{fontSize:13,color:"var(--gray-600)",lineHeight:1.7,marginBottom:16}}>
            Foundations give you the building blocks before your first lesson. You'll learn the alphabet, pronunciation rules, and writing system — the skills that make everything else click faster.
          </div>
          <div style={{fontSize:13,color:"var(--gray-600)",lineHeight:1.7,marginBottom:16}}>
            Skipping foundations is like building on sand. Even 15 minutes here saves hours of confusion later. Native speakers will understand you better from day one.
          </div>
          <div style={{display:"flex",gap:12,marginBottom:8}}>
            <div style={{flex:1,padding:"12px",borderRadius:12,background:dk?"rgba(123,94,232,0.1)":"rgba(123,94,232,0.05)",textAlign:"center",border:dk?"1px solid rgba(123,94,232,0.12)":"1px solid rgba(123,94,232,0.06)"}}>
              <div style={{fontSize:18,fontWeight:800,color:"var(--purple-accent-text)"}}>{sections.length}</div>
              <div style={{fontSize:10,color:"var(--gray-400)",fontWeight:600}}>{t("found_sections",baseLang)}</div>
            </div>
            <div style={{flex:1,padding:"12px",borderRadius:12,background:dk?"rgba(123,94,232,0.1)":"rgba(123,94,232,0.05)",textAlign:"center",border:dk?"1px solid rgba(123,94,232,0.12)":"1px solid rgba(123,94,232,0.06)"}}>
              <div style={{fontSize:18,fontWeight:800,color:"var(--purple-accent-text)"}}>{op.pct}%</div>
              <div style={{fontSize:10,color:"var(--gray-400)",fontWeight:600}}>{t("found_complete",baseLang)}</div>
            </div>
          </div>
          <div style={{padding:"14px 16px",borderRadius:14,background:dk?"rgba(245,166,35,0.08)":"rgba(245,166,35,0.06)",border:dk?"1px solid rgba(245,166,35,0.15)":"1px solid rgba(245,166,35,0.1)"}}>
            <div style={{fontSize:12,fontWeight:800,color:"var(--gold)",marginBottom:4,display:"flex",alignItems:"center",gap:4}}><AppIcon name="lightbulb" size={14}/>Pro tip</div>
            <div style={{fontSize:12,color:"var(--gray-600)",lineHeight:1.5}}>Complete foundations before starting A1. Your pronunciation and reading speed will be noticeably better.</div>
          </div>
        </GlossyPopup>}
        </>}

        {/* ── FK Three-Track Selector (Batch 2 + Batch 4) ── */}
        {fkMode==="select"&&<>
        {/* Gate Quiz passed indicator */}
        {user.progress?.gateQuiz?.[lang]?.passed&&<div style={{background:dk?"linear-gradient(135deg,#1A2E28,#1A2B24)":"linear-gradient(135deg,#ECFDF5,#D1FAE5)",border:"1.5px solid #86EFAC",borderRadius:12,padding:"10px 16px",marginBottom:14,display:"flex",alignItems:"center",gap:8}}>
          <span style={{fontSize:18}}>✅</span>
          <span style={{fontSize:13,fontWeight:600,color:"#065F46"}}>Gate Quiz Passed — Foundations optional for you!</span>
        </div>}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:14}}>
          <div role="button" className="anim ghost-tile" onClick={()=>{UISounds.tick();setFkMode("reference");}} style={{cursor:"pointer",padding:"24px 16px",textAlign:"center",borderRadius:22,border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",position:"relative",overflow:"hidden",background:dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)",boxShadow:dk?"0 6px 20px rgba(0,0,0,0.35), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 6px 20px rgba(123,94,232,0.1), 0 0 10px rgba(123,94,232,0.06), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(123,94,232,0.05)",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s"}}>
            <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
            <div style={{fontSize:36,marginBottom:10,position:"relative",zIndex:2}}>📖</div>
            <div style={{fontSize:16,fontWeight:800,color:dk?"rgba(220,215,240,0.9)":"var(--purple-accent-text)",marginBottom:6,position:"relative",zIndex:2}}>Reference</div>
            <div style={{fontSize:12,color:dk?"rgba(180,170,220,0.6)":"var(--gray-400)",lineHeight:1.5,position:"relative",zIndex:2}}>Browse grids, charts & rules at your own pace</div>
          </div>
          <div role="button" className="anim ghost-tile" onClick={()=>{UISounds.tick();setFkMode("playthrough");}} style={{cursor:"pointer",padding:"24px 16px",textAlign:"center",borderRadius:22,border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",position:"relative",overflow:"hidden",background:dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)",boxShadow:dk?"0 6px 20px rgba(0,0,0,0.35), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 6px 20px rgba(123,94,232,0.1), 0 0 10px rgba(123,94,232,0.06), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(123,94,232,0.05)",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s",animationDelay:"0.05s"}}>
            <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
            <div style={{fontSize:36,marginBottom:10,position:"relative",zIndex:2}}>🎮</div>
            <div style={{fontSize:16,fontWeight:800,color:dk?"rgba(220,215,240,0.9)":"var(--purple-accent-text)",marginBottom:6,position:"relative",zIndex:2}}>Play Through</div>
            <div style={{fontSize:12,color:dk?"rgba(180,170,220,0.6)":"var(--gray-400)",lineHeight:1.5,position:"relative",zIndex:2}}>Learn step-by-step with exercises & XP</div>
          </div>
        </div>
        {/* Gate Quiz tile — full width below the two-column grid */}
        {FK_GATE_QUIZ[lang]&&<div role="button" className="anim ghost-tile" onClick={()=>{UISounds.tick();setFkMode("gatequiz");}} style={{cursor:"pointer",padding:"18px 20px",textAlign:"center",borderRadius:22,border:user.progress?.gateQuiz?.[lang]?.passed?"2px solid #86EFAC":dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",position:"relative",overflow:"hidden",background:user.progress?.gateQuiz?.[lang]?.passed?(dk?"linear-gradient(145deg,#1A2E28,#1A2B24)":"linear-gradient(145deg,#F0FFF4,#E8FFEE)"):(dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)"),boxShadow:dk?"0 4px 16px rgba(0,0,0,0.3), 0 0 10px rgba(123,94,232,0.15), inset 0 2px 0 rgba(255,255,255,0.06), inset 0 -2px 0 rgba(0,0,0,0.12)":"0 4px 16px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -2px 0 rgba(123,94,232,0.03)",marginBottom:24,animationDelay:"0.1s",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:10}}>
            <AppIcon name="trophy" size={36}/>
            <div style={{textAlign:"left"}}>
              <div style={{fontSize:15,fontWeight:800,color:user.progress?.gateQuiz?.[lang]?.passed?"var(--teal)":"var(--purple-accent-text)"}}>
                {user.progress?.gateQuiz?.[lang]?.passed?t("map_gate_passed",baseLang):t("map_gate_skip",baseLang)}
              </div>
              <div style={{fontSize:12,color:"var(--gray-400)",lineHeight:1.4}}>
                {user.progress?.gateQuiz?.[lang]?.passed?t("map_gate_passed_desc",baseLang):t("map_gate_skip_desc",baseLang)}
              </div>
            </div>
          </div>
        </div>}
        </>}

        {/* ── Reference Mode: Glossy Book Chapter List ── */}
        {fkMode==="reference"&&<>
        {sections.length>0?<div>
          {/* Overall progress bar */}
          {op.total>0&&<div style={{marginBottom:16,padding:"14px 18px",borderRadius:16,background:dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 50%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F0ECFF 50%, #EDE8FF 100%)",border:dk?"1.5px solid rgba(123,94,232,0.25)":"1.5px solid rgba(180,165,240,0.3)",boxShadow:dk?"0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)":"0 4px 16px rgba(123,94,232,0.06), inset 0 1px 0 rgba(255,255,255,0.8)"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
              <span style={{fontSize:12,fontWeight:700,color:"var(--purple-accent-text)",fontFamily:"'Quicksand',sans-serif",letterSpacing:0.5,textTransform:"uppercase"}}>Reference Library</span>
              <span style={{fontSize:12,fontWeight:600,color:"var(--gray-400)"}}>{op.done}/{op.total} {t("found_items",baseLang)}</span>
            </div>
            <div style={{height:5,borderRadius:3,background:dk?"rgba(255,255,255,0.07)":"rgba(180,165,240,0.2)",overflow:"hidden"}}>
              <div style={{height:"100%",width:`${op.pct}%`,background:"linear-gradient(90deg, #C0AEFA 0%, #7B5EE8 50%, #5840B8 100%)",borderRadius:3,transition:"width 0.3s",boxShadow:"0 0 8px rgba(123,94,232,0.4)"}}/>
            </div>
          </div>}
          {/* Chapter cards */}
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {sections.map((sec,i)=>{
              const sp=secProgress(sec);
              const done=sp.pct===100;
              return(
              <div key={sec.id} className="anim" onClick={()=>setFkSection(sec.id)} style={{
                cursor:"pointer",padding:"16px 18px",borderRadius:18,position:"relative",overflow:"hidden",
                display:"flex",alignItems:"center",gap:14,
                background:done?(dk?"linear-gradient(180deg, rgba(46,205,167,0.12) 0%, rgba(46,205,167,0.06) 50%, rgba(46,205,167,0.02) 100%)":"linear-gradient(180deg, rgba(46,205,167,0.12) 0%, rgba(46,205,167,0.06) 50%, rgba(255,255,255,0.9) 100%)"):(dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 50%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #FDFBFF 0%, #F6F2FF 40%, #F0ECFF 70%, #EDE8FF 100%)"),
                border:done?(dk?"1.5px solid rgba(46,205,167,0.3)":"1.5px solid rgba(46,205,167,0.35)"):(dk?"1.5px solid rgba(123,94,232,0.25)":"1.5px solid rgba(180,165,240,0.35)"),
                boxShadow:dk?"0 4px 16px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.06), inset 0 -2px 0 rgba(0,0,0,0.1)":"0 4px 16px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.85), inset 0 -2px 0 rgba(123,94,232,0.04)",
                animationDelay:`${i*0.04}s`,transition:"all .2s cubic-bezier(.4,0,.2,1)",
              }}>
                {/* Gloss highlight */}
                <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"45%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:0}}/>
                {/* Chapter number pill */}
                <div style={{width:38,height:38,borderRadius:"50%",background:done?"linear-gradient(180deg, #5AEDC1 0%, #2ECDA7 55%, #1DAF8E 100%)":"linear-gradient(180deg, #C0AEFA 0%, #7B5EE8 55%, #5840B8 100%)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:done?"0 3px 10px rgba(46,205,167,0.4), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.12)":"0 3px 10px rgba(123,94,232,0.35), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.12)",position:"relative",zIndex:1}}>
                  {done?<span style={{color:"white",fontSize:16,fontWeight:800}}>✓</span>:<span style={{color:"white",fontSize:15,fontWeight:800,fontFamily:"'Quicksand',sans-serif",textShadow:"0 1px 2px rgba(0,0,0,0.2)"}}>{i+1}</span>}
                </div>
                {/* Content */}
                <div style={{flex:1,minWidth:0,position:"relative",zIndex:1}}>
                  <div style={{fontSize:14,fontWeight:800,fontFamily:"'Quicksand',sans-serif",color:done?"var(--teal)":"var(--purple-accent-text)",marginBottom:2,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{sec.title}</div>
                  <div style={{fontSize:11,color:"var(--gray-400)",lineHeight:1.4,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{sec.desc}</div>
                  {sp.total>0&&sp.pct>0&&sp.pct<100&&<div style={{marginTop:6,height:3,borderRadius:2,background:dk?"rgba(255,255,255,0.07)":"rgba(180,165,240,0.2)",overflow:"hidden",maxWidth:160}}>
                    <div style={{height:"100%",width:`${sp.pct}%`,background:"linear-gradient(90deg, #C0AEFA, #7B5EE8)",borderRadius:2}}/>
                  </div>}
                </div>
                {/* Progress text */}
                <div style={{flexShrink:0,textAlign:"right",position:"relative",zIndex:1}}>
                  <div style={{fontSize:11,fontWeight:700,color:done?"var(--teal)":"var(--gray-400)"}}>{done?t("found_done",baseLang):`${sp.done}/${sp.total}`}</div>
                </div>
                {/* Chevron */}
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" style={{flexShrink:0,position:"relative",zIndex:1,opacity:0.3}}><path d="M9 5l7 7-7 7" stroke="var(--gray-400)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>);
            })}
          </div>
        </div>
        :
          <div className="card" style={{textAlign:"center",padding:"40px 20px"}}>
            <div style={{marginBottom:12}}><AppIcon name="construction" size={56}/></div>
            <h3 className="hd" style={{fontSize:18,fontWeight:700,marginBottom:4}}>{t("map_coming_soon",baseLang)}</h3>
            <p style={{color:"var(--gray-400)",fontSize:13}}>{t("map_foundations_dev",baseLang)}</p>
            <p style={{color:"var(--gray-300)",fontSize:12,marginTop:8}}>{t("map_start_a1",baseLang)}</p>
          </div>
        }
        </>}

        {/* ── Playthrough Mode: real FoundationsPlaythrough (Batch 3) ── */}
        {fkMode==="playthrough"&&<FoundationsPlaythrough lang={lang} user={user} setUser={setUser} addXp={addXp} learnWord={learnWord} showToast={showToast} addFlag={addFlag} baseLang={baseLang} onBack={()=>setFkMode("select")}/>}

        {/* ── Gate Quiz Mode (Batch 4) ── */}
        {fkMode==="gatequiz"&&<FoundationsGateQuiz lang={lang} baseLang={baseLang} user={user} setUser={setUser} showToast={showToast} addFlag={addFlag} onBack={()=>setFkMode("select")} onPass={()=>{setChapterNav("select");showToast&&showToast("🏆 Foundations passed! You can start lessons.");}}/>}
      </div>
    );
  }

  return(
    <div className="anim">
      {/* Flag banner — clickable → stats popup */}
      {(()=>{const tl=langUnits.reduce((a,u)=>a+u.lessons.length,0);const dl=langUnits.reduce((a,u)=>a+u.lessons.filter(l=>!!((user.progress||{}).lessons||{})[`${lang}:${u.n}:${l.id}`]).length,0);const op=tl>0?Math.round((dl/tl)*100):0;
      return headerStyle==="A"?<div role="button" onClick={()=>{UISounds.click();setShowStatsPopup(true);}} style={{cursor:"pointer",background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 12%, #8B6AE4 30%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",borderRadius:24,padding:"24px 28px",marginBottom:20,display:"flex",alignItems:"center",gap:18,border:"2px solid rgba(255,255,255,0.18)",position:"relative",overflow:"hidden",boxShadow:dk?"0 0 20px rgba(123,94,232,0.4), 0 8px 28px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 16px rgba(123,94,232,0.2), 0 8px 28px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s"}}>
        <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
        <div style={{width:56,height:56,borderRadius:16,background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,position:"relative",zIndex:2,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.15)"}}><CountryFlag code={lang} size={34}/></div>
        <div style={{flex:1,position:"relative",zIndex:2}}>
          <h1 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:2,color:"white",textShadow:"0 2px 4px rgba(0,0,0,0.2)"}}><span className="trg-inline">{L?.native||"Course"}</span></h1>
          <p style={{color:"rgba(255,255,255,0.75)",fontSize:13}}>{langUnits.length} {t("map_units",baseLang)} · {tl} {t("map_lessons",baseLang)}{op>0?` · ${op}%`:""}</p>
          {op>0&&<div style={{marginTop:8,height:5,borderRadius:3,background:"rgba(255,255,255,0.15)",overflow:"hidden",boxShadow:"inset 0 1px 2px rgba(0,0,0,0.15)"}}>
            <div style={{height:"100%",width:`${op}%`,background:"linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",borderRadius:3,transition:"width 0.3s",boxShadow:"0 0 8px rgba(255,255,255,0.4)",position:"relative",overflow:"hidden"}}><div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"50%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%)",pointerEvents:"none"}}/></div>
          </div>}
        </div>
        {/* Tap indicator */}
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" style={{position:"relative",zIndex:2,opacity:0.5}}><path d="M9 5l7 7-7 7" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      :<div role="button" onClick={()=>{UISounds.click();setShowStatsPopup(true);}} style={{cursor:"pointer",background:dk?"rgba(40,38,70,0.5)":"rgba(255,255,255,0.55)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",borderRadius:24,padding:"24px 28px",marginBottom:20,display:"flex",alignItems:"center",gap:18,border:dk?"2px solid rgba(123,94,232,0.2)":"2px solid rgba(123,94,232,0.12)",position:"relative",overflow:"hidden",boxShadow:dk?"0 8px 28px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)":"0 8px 28px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -2px 0 rgba(123,94,232,0.04)",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s"}}>
        <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
        <div style={{width:56,height:56,borderRadius:16,background:dk?"rgba(123,94,232,0.2)":"rgba(123,94,232,0.08)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,position:"relative",zIndex:2}}><CountryFlag code={lang} size={34}/></div>
        <div style={{flex:1,position:"relative",zIndex:2}}>
          <h1 className="hd" style={{fontSize:26,fontWeight:800,marginBottom:2}}><span className="trg-inline">{L?.native||"Course"}</span></h1>
          <p style={{color:"var(--gray-500)",fontSize:13}}>{langUnits.length} {t("map_units",baseLang)} · {tl} {t("map_lessons",baseLang)}{op>0?` · ${op}%`:""}</p>
          {op>0&&<div style={{marginTop:8,height:5,borderRadius:3,background:"rgba(123,94,232,0.08)",overflow:"hidden"}}>
            <div style={{height:"100%",width:`${op}%`,background:"linear-gradient(180deg, #C0AEFA 0%, #7B5EE8 55%, #5840B8 100%)",borderRadius:3,transition:"width 0.3s",boxShadow:"0 0 8px rgba(123,94,232,0.3)",position:"relative",overflow:"hidden"}}><div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"45%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)",pointerEvents:"none"}}/></div>
          </div>}
        </div>
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" style={{position:"relative",zIndex:2,opacity:0.35}}><path d="M9 5l7 7-7 7" stroke="var(--gray-500)" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>;})()}

      {/* Stats Popup */}
      {showStatsPopup&&(()=>{const tl=langUnits.reduce((a,u)=>a+u.lessons.length,0);const dl=langUnits.reduce((a,u)=>a+u.lessons.filter(l=>!!((user.progress||{}).lessons||{})[`${lang}:${u.n}:${l.id}`]).length,0);const op=tl>0?Math.round((dl/tl)*100):0;const vocabCount=user.wl||0;const tips=["Consistency beats intensity — 15 min daily > 2 hours weekly.","Read children's books in your target language. They use high-frequency words.","Shadow native speakers: listen and repeat simultaneously to train your ear.","Label objects in your house with sticky notes in the target language.","Watch TV shows you already know dubbed in your target language."];const tipIdx=Math.floor(Date.now()/86400000)%tips.length;
      return <GlossyPopup title={`${L?.native||"Course"} Stats`} onClose={()=>setShowStatsPopup(false)}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginBottom:20}}>
          {[{label:t("map_xp_earned",baseLang),value:user.xp||0,icon:"⚡"},{label:t("map_lessons_done",baseLang),value:`${dl}/${tl}`,icon:"📚"},{label:t("map_vocabulary",baseLang),value:vocabCount,icon:"🧠"},{label:t("map_progress",baseLang),value:`${op}%`,icon:"📊"}].map(s=><div key={s.label} style={{padding:"14px 12px",borderRadius:16,background:dk?"rgba(123,94,232,0.12)":"rgba(123,94,232,0.06)",textAlign:"center",border:dk?"1px solid rgba(123,94,232,0.15)":"1px solid rgba(123,94,232,0.08)"}}>
            <div style={{fontSize:22,marginBottom:4}}>{s.icon}</div>
            <div style={{fontSize:18,fontWeight:800,color:"var(--purple-accent-text)"}}>{s.value}</div>
            <div style={{fontSize:10,color:"var(--gray-400)",fontWeight:600,marginTop:2}}>{s.label}</div>
          </div>)}
        </div>
        <div style={{padding:"16px 18px",borderRadius:16,background:dk?"rgba(245,166,35,0.08)":"rgba(245,166,35,0.06)",border:dk?"1px solid rgba(245,166,35,0.15)":"1px solid rgba(245,166,35,0.1)"}}>
          <div style={{fontSize:12,fontWeight:800,color:"var(--gold)",marginBottom:6,display:"flex",alignItems:"center",gap:4}}><AppIcon name="lightbulb" size={14}/>{t("map_polyglot_tip",baseLang)}</div>
          <div style={{fontSize:13,color:"var(--gray-600)",lineHeight:1.5}}>{tips[tipIdx]}</div>
        </div>
      </GlossyPopup>;})()}

      {/* Header style toggle */}
      <div style={{display:"flex",justifyContent:"flex-end",marginBottom:4,marginTop:-12}}>
        <button onClick={()=>setHeaderStyle(s=>s==="A"?"B":"A")} title="Toggle header style" style={{width:28,height:28,borderRadius:8,border:dk?"1px solid rgba(255,255,255,0.08)":"1px solid rgba(123,94,232,0.1)",background:dk?"rgba(40,38,65,0.4)":"rgba(123,94,232,0.04)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",transition:"all .2s",fontSize:10,fontWeight:800,color:"var(--gray-300)",fontFamily:"'DM Sans',sans-serif"}}>{headerStyle}</button>
      </div>

      {/* Track toggle — only when multiple tracks exist (e.g. Dutch v2 + legacy) */}
      {hasTracks&&<div style={{display:"flex",gap:8,marginBottom:16,justifyContent:"center"}}>
        {tracks.map(t=>{
          const label=t==="v2"?"New Course":t==="legacy"?"Legacy Course":t;
          const active=selTrack===t;
          return <button key={t} onClick={()=>setSelTrack(t)} style={{padding:"10px 24px",borderRadius:16,border:"none",background:active?"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)":"linear-gradient(180deg, #FFFFFF, #f5f6fa)",color:active?"white":"var(--gray-500)",fontWeight:800,fontSize:13,cursor:"pointer",transition:"all 0.15s",letterSpacing:0.3,boxShadow:active?"0 4px 14px rgba(100,69,200,0.35), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.12)":"0 3px 10px rgba(0,0,0,0.08), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -2px 0 rgba(0,0,0,0.04)",position:"relative",overflow:"hidden"}}>{active&&<span style={{position:"absolute",top:0,left:"8%",right:"8%",height:"38%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 100%)",pointerEvents:"none"}}/>}<span style={{position:"relative",zIndex:1}}>{label}</span></button>;
        })}
      </div>}

      {/* View toggle */}
      <div style={{display:"flex",alignItems:"center",marginBottom:16}}>
        <div style={{display:"inline-flex",background:dk?"rgba(40,38,65,0.6)":"rgba(0,0,0,0.04)",borderRadius:16,padding:4,gap:4}}>
          {[["chapters",t("map_chapters",baseLang)],["all",t("map_all_units",baseLang)]].map(([k,label])=>{
            const active=viewMode===k;
            return <button key={k} onClick={()=>setViewMode(k)} style={{padding:"9px 20px",borderRadius:13,fontSize:12,fontWeight:800,border:"none",cursor:"pointer",transition:"all 0.15s",letterSpacing:0.3,background:active?"linear-gradient(180deg, #B8A8FA 0%, #9B7AE8 20%, #7B5EE8 55%, #6545C8 85%, #5840B8 100%)":"transparent",color:active?"white":"var(--gray-400)",boxShadow:active?"0 3px 12px rgba(100,69,200,0.3), inset 0 2px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.12)":"none",position:"relative",overflow:"hidden"}}>
              {active&&<span style={{position:"absolute",top:0,left:"8%",right:"8%",height:"40%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 100%)",pointerEvents:"none"}}/>}
              <span style={{position:"relative",zIndex:1}}>{label}</span>
            </button>;
          })}
        </div>
      </div>

      {/* ═══ CHAPTER SELECT ═══ */}
      {viewMode==="chapters"&&<div>
        {/* Foundations tile — full width */}
        {(()=>{
          const fData=FOUNDATIONS_BY_LANG[lang];
          const secCount=fData?.sections?.length||0;
          return <div role="button" className="ghost-tile" style={{cursor:"pointer",padding:"24px 22px",marginBottom:14,display:"flex",alignItems:"center",gap:14,borderRadius:22,border:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",position:"relative",overflow:"hidden",background:dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)",boxShadow:dk?"0 6px 20px rgba(0,0,0,0.35), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 6px 20px rgba(123,94,232,0.1), 0 0 10px rgba(123,94,232,0.06), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(123,94,232,0.05)",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s",minHeight:80}} onClick={()=>{UISounds.tick();setFkSection(null);setChapterNav("foundations");}}>
            <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
            <div style={{width:48,height:48,borderRadius:14,background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #7B5EE8 50%, #5840B8 85%, #4A2BA6 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0,position:"relative",overflow:"hidden",zIndex:2,boxShadow:dk?"0 0 12px rgba(123,94,232,0.35), 0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -2px 0 rgba(0,0,0,0.12)":"0 0 10px rgba(123,94,232,0.15), 0 4px 12px rgba(123,94,232,0.25), inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -2px 0 rgba(0,0,0,0.1)"}}>
              <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none"}}/>
              <span style={{position:"relative",zIndex:1,filter:"drop-shadow(0 1px 1px rgba(0,0,0,0.2))"}}>🧱</span>
            </div>
            <div style={{flex:1,position:"relative",zIndex:2}}>
              <div className="hd" style={{fontSize:17,fontWeight:800,color:"var(--purple-accent-text)"}}>{t("found_title",baseLang)}</div>
              <div style={{fontSize:12,color:"var(--gray-400)"}}>{secCount>0?`${secCount} ${t("found_sections",baseLang)} · ${t("found_pre_a1",baseLang)}`:t("found_desc",baseLang)}</div>
            </div>
            <span style={{padding:"5px 14px",borderRadius:12,background:"linear-gradient(180deg, #C0AEFA 0%, #B8A8FA 15%, #7B5EE8 55%, #5840B8 100%)",color:"white",fontSize:10,fontWeight:800,letterSpacing:0.3,boxShadow:"0 3px 10px rgba(123,94,232,0.3), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.1)",position:"relative",overflow:"hidden",zIndex:2}}><span style={{position:"absolute",top:0,left:"10%",right:"10%",height:"45%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)",pointerEvents:"none"}}/><span style={{position:"relative",zIndex:1}}>{secCount>0?`${secCount} ${t("found_topics",baseLang)}`:t("found_preview",baseLang)}</span></span>
          </div>;
        })()}

        {/* CEFR band grid — with Foundations Lock (Manifesto P13) */}
        {(()=>{
          const fUnlocked=isFoundationsUnlocked(user,lang,baseLang);
          const hasFk=FOUNDATIONS_BY_LANG[lang]?.sections?.length>0;
          const showLock=!fUnlocked&&hasFk;
          return <>
            {showLock&&<div style={{background:"linear-gradient(145deg,#FFF8F0,#FFF3E6)",border:"2px solid #FBBF2420",borderRadius:16,padding:"16px 20px",marginBottom:14,textAlign:"center"}}>
              <div style={{fontSize:24,marginBottom:6}}>🔒</div>
              <div style={{fontSize:13,fontWeight:700,color:"#92400E",marginBottom:4}}>{t("map_unlock_foundations",baseLang)}</div>
              <div style={{fontSize:11,color:"#B45309",lineHeight:1.5}}>{t("map_unlock_desc",baseLang)}</div>
              <div onClick={()=>{
                setUser(u=>{
                  const p={...(u.progress||{}),foundationsUnlocked:{...((u.progress||{}).foundationsUnlocked||{})}};
                  p.foundationsUnlocked[lang]=true;
                  return{...u,progress:p};
                });
              }} style={{marginTop:10,fontSize:11,color:"#B45309",cursor:"pointer",textDecoration:"underline",opacity:0.7}}>
                {t("map_unlock_anyway",baseLang)} →
              </div>
            </div>}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,position:"relative"}}>
              {showLock&&<div style={{position:"absolute",inset:0,zIndex:2,borderRadius:16,background:dk?"rgba(18,18,24,0.5)":"rgba(255,255,255,0.4)",backdropFilter:"blur(1px)",pointerEvents:"none"}}/>}
              {allBands.map(band=>{
                const bp=bandProgress(band);
                const hasUnits=bp.total>0;
                const pctDone=bp.total>0?Math.round((bp.done/bp.total)*100):0;
                const isComplete=bp.done===bp.total&&bp.total>0;
                return <div key={band} role="button" className="ghost-tile" onClick={()=>{if(!showLock||!FOUNDATIONS_LOCK_ENABLED){UISounds.tick();setChapterNav(`band:${band}`);}}}
                  style={{
                    cursor:showLock&&FOUNDATIONS_LOCK_ENABLED?"default":"pointer",
                    borderRadius:22,
                    padding:"14px 10px 12px",
                    display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:5,
                    background:showLock?(dk?"rgba(40,42,72,0.5)":"rgba(220,215,235,0.6)"):(dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)"),
                    border:showLock?"2px solid rgba(156,163,175,0.15)":(isComplete?`2.5px solid var(--teal)`:`2px solid ${dk?"rgba(123,94,232,0.35)":"rgba(123,94,232,0.15)"}`),
                    boxShadow:showLock?"none":(dk?"0 6px 20px rgba(0,0,0,0.4), 0 0 16px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.1), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 6px 20px rgba(123,94,232,0.12), 0 0 14px rgba(123,94,232,0.08), inset 0 2px 0 rgba(255,255,255,0.85), inset 0 -3px 0 rgba(123,94,232,0.06)"),
                    transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s",
                    position:"relative",overflow:"hidden",
                    ...(showLock?{filter:"grayscale(0.5)",opacity:0.55}:{}),
                  }}>
                    {!showLock&&<div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.07) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>}
                    {showLock&&<div style={{position:"absolute",top:8,right:8,zIndex:3,opacity:0.6}}><AppIcon name="padlock" size={28}/></div>}
                    <div style={{
                      width:80,height:80,borderRadius:22,
                      background:showLock?"linear-gradient(180deg, #A0A0A8 0%, #888890 30%, #707078 60%, #606068 100%)":"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #8B6AE4 35%, #7B5EE8 55%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",
                      display:"flex",alignItems:"center",justifyContent:"center",
                      color:"white",fontSize:30,fontWeight:900,letterSpacing:-0.5,
                      boxShadow:showLock?"0 4px 12px rgba(0,0,0,0.2), inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -2px 0 rgba(0,0,0,0.15)":(dk?`0 0 22px rgba(123,94,232,0.5), 0 8px 24px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.2)`:`0 0 18px rgba(123,94,232,0.3), 0 6px 20px rgba(123,94,232,0.35), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -3px 0 rgba(0,0,0,0.15)`),
                      position:"relative",overflow:"hidden",zIndex:2,flexShrink:0,
                    }}>
                      <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.1) 55%, transparent 100%)",pointerEvents:"none"}}/>
                      <span style={{position:"relative",zIndex:1,textShadow:"0 2px 4px rgba(0,0,0,0.3)",filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.2))"}}>{band}</span>
                    </div>
                    <div style={{textAlign:"center",position:"relative",zIndex:2}}>
                      <div style={{fontSize:13,fontWeight:800,color:showLock?"var(--gray-400)":(dk?"rgba(220,215,240,0.9)":"var(--gray-700)"),lineHeight:1.2}}>{bandLabels[band]}</div>
                      {hasUnits?
                        <div style={{fontSize:10,color:showLock?"var(--gray-400)":(dk?"rgba(180,170,220,0.8)":"var(--purple-accent-text)"),fontWeight:700,marginTop:2}}>{bp.done}/{bp.total} {t("map_units",baseLang)}{isComplete?" ✓":""}</div>
                      :
                        <div style={{fontSize:10,color:dk?"rgba(160,155,200,0.5)":"var(--gray-300)",fontWeight:600,fontStyle:"italic",marginTop:2}}>{t("coming_soon",baseLang)}</div>
                      }
                    </div>
                    {hasUnits&&bp.done>0&&<div style={{width:"80%",position:"relative",zIndex:2}}>
                      <div style={{height:5,borderRadius:4,background:dk?"rgba(255,255,255,0.1)":"rgba(123,94,232,0.1)",overflow:"hidden",boxShadow:"inset 0 1px 2px rgba(0,0,0,0.1)"}}>
                        <div style={{height:"100%",width:`${pctDone}%`,borderRadius:4,background:"linear-gradient(180deg, #C0AEFA 0%, #7B5EE8 55%, #5840B8 100%)",boxShadow:`0 0 8px rgba(123,94,232,0.4), inset 0 1px 0 rgba(255,255,255,0.4)`,transition:"width 0.3s",position:"relative",overflow:"hidden"}}>
                          <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"50%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, transparent 100%)",pointerEvents:"none"}}/>
                        </div>
                      </div>
                    </div>}
                  </div>;
              })}
            </div>
          </>;
        })()}
      </div>}

      {/* ═══ ALL UNITS VIEW (original) ═══ */}
      {viewMode==="all"&&<div style={{display:"flex",flexDirection:"column",gap:12}}>
        {langUnits.map((u,i)=>{
          const hasContent=u.lessons.length>0;
          const placedHere=isPlacementUnlocked(u)&&hasContent;
          const available=hasContent;
          const locked=!available&&i>0;
          const up=getUnitProg(u);
          return(
            <div key={u.n} role="button" className="card anim" style={{
              cursor:available?"pointer":"default",
              opacity:locked?0.45:1,
              borderLeftWidth:4,borderLeftColor:u.color,
              display:"flex",alignItems:"center",gap:16,padding:"18px 22px",
              animationDelay:`${i*0.03}s`,
              ...(available?{}:{filter:"grayscale(0.3)"}),
            }} onClick={()=>available&&onSelect(u)}>
              <div style={{width:48,height:48,borderRadius:14,background:available?u.color:"var(--gray-200)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0,boxShadow:available?`0 4px 12px ${u.color}33`:"none"}}>
                {available?<BrandIcon name={u.icon} size={22}/>:<span style={{fontSize:18}}>🔒</span>}
              </div>
              <div style={{flex:1}}>
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:2}}>
                  <span className="hd" style={{fontWeight:800,fontSize:16,color:available?"var(--gray-800)":"var(--gray-400)"}}>{t("map_unit_prefix",baseLang)} {u.n}: <span className="trg-inline">{u.title}</span></span>
                  <span className="badge" style={{background:getCefrBandColor(getCefrInfo(u.level).band)+"18",color:getCefrBandColor(getCefrInfo(u.level).band),fontSize:10}}>{u.level}</span>
                  {placedHere&&!up?.completed&&<span style={{padding:"2px 8px",borderRadius:8,background:"linear-gradient(180deg,#6EB5F5 0%,#4A8FE7 55%,#3070C8 100%)",color:"white",fontSize:10,fontWeight:800,letterSpacing:0.3,boxShadow:"0 2px 6px rgba(74,143,231,0.35), inset 0 1px 0 rgba(255,255,255,0.3)"}}>Placed</span>}
                </div>
                <p style={{color:"var(--gray-400)",fontSize:13}}>{u.sub}{up&&up.pct>0?` · ${up.pct}%`:""}</p>
                {available&&<div style={{marginTop:6}}>
                  <div style={{display:"flex",gap:4}}>
                    {u.lessons.map((ls,j)=>{
                      const ld=prog.lessons?.[`${lang}:${u.n}:${ls.id}`];
                      return <div key={j} style={{width:32,height:4,borderRadius:2,background:ld?"var(--teal)":"var(--gray-200)"}}/>;
                    })}
                  </div>
                </div>}
              </div>
              {up&&up.completed?<div style={{fontSize:22}}>✅</div>:available&&<div style={{color:u.color,fontWeight:700,fontSize:22}}>→</div>}
              {!available&&<span style={{color:"var(--gray-300)",fontSize:12,fontWeight:600}}>{t("coming_soon",baseLang)}</span>}
            </div>
          );
        })}
      </div>}
    </div>
  );
}

// ── FOUNDATIONS PLAYTHROUGH — Interactive guided FK lessons ──
// Loads FK_PLAYTHROUGH[lang], renders stages, feeds lessons into LessonEngine.
// Progress: user.progress.fkPlay[lang][lessonId] = { completed:true, ts:Date.now() }
// This NEVER touches user.progress.lessons or user.progress.foundation.

// ══════════════════════════════════════════════════════════════════
// FOUNDATIONS GATE QUIZ — Skip Foundations if you already know the system
// Per-language quiz data in FK_GATE_QUIZ. Score labels pulled from quiz data.
// Accessible at all times from Foundations landing.
// ══════════════════════════════════════════════════════════════════
function FoundationsGateQuiz({lang,user,setUser,showToast,addFlag,onBack,onPass,baseLang="en"}){
  const dk=document.documentElement.classList.contains("dark");
  const quizData = FK_GATE_QUIZ[lang];
  const [phase,setPhase]=useState("intro"); // intro | running | results
  const [taskIdx,setTaskIdx]=useState(0);
  const [itemIdx,setItemIdx]=useState(0);
  const [answers,setAnswers]=useState({}); // {gate_a:[true,false,...], gate_b:[...], ...}
  const [selected,setSelected]=useState(null);
  const [showFeedback,setShowFeedback]=useState(false);

  if(!quizData) return(
    <div className="card" style={{textAlign:"center",padding:"40px 20px"}}>
      <div style={{marginBottom:12}}><AppIcon name="construction" size={56}/></div>
      <h3 className="hd" style={{fontSize:18,fontWeight:700,marginBottom:4}}>Gate Quiz Not Available</h3>
      <p style={{color:"var(--gray-400)",fontSize:13}}>{t("gate_quiz_soon",baseLang)}</p>
      <div style={{marginTop:16}}><NavArrow onClick={onBack} isBack size={44}/></div>
    </div>
  );

  const tasks = quizData.tasks;
  const currentTask = tasks[taskIdx];
  const currentItem = currentTask?.items[itemIdx];
  const totalItems = tasks.reduce((s,t)=>s+t.items.length,0);
  const doneItems = Object.values(answers).reduce((s,a)=>s+a.length,0);

  const handleAnswer=(opt)=>{
    if(showFeedback) return;
    setSelected(opt);
    setShowFeedback(true);
    const isCorrect = opt===currentItem.ans;
    const tid = currentTask.id;
    setAnswers(prev=>({...prev,[tid]:[...(prev[tid]||[]),isCorrect]}));
    setTimeout(()=>{
      setShowFeedback(false);
      setSelected(null);
      if(itemIdx < currentTask.items.length-1){
        setItemIdx(itemIdx+1);
      } else if(taskIdx < tasks.length-1){
        setTaskIdx(taskIdx+1);
        setItemIdx(0);
      } else {
        setPhase("results");
      }
    },1200);
  };

  // Calculate results
  const calcResults=()=>{
    const scores={};
    tasks.forEach(t=>{
      const a = answers[t.id]||[];
      const correct = a.filter(Boolean).length;
      const total = t.items.length;
      scores[t.id]={correct,total,pct:total>0?Math.round(correct/total*100):0,category:t.category};
    });
    // Category scores
    const abItems = tasks.filter(t=>t.category==="AB");
    const abCorrect = abItems.reduce((s,t)=>(scores[t.id]?.correct||0)+s,0);
    const abTotal = abItems.reduce((s,t)=>(scores[t.id]?.total||0)+s,0);
    const abPct = abTotal>0?Math.round(abCorrect/abTotal*100):0;

    const cItems = tasks.filter(t=>t.category==="C");
    const cCorrect = cItems.reduce((s,t)=>(scores[t.id]?.correct||0)+s,0);
    const cTotal = cItems.reduce((s,t)=>(scores[t.id]?.total||0)+s,0);
    const cPct = cTotal>0?Math.round(cCorrect/cTotal*100):0;

    const deItems = tasks.filter(t=>t.category==="DE");
    const deCorrect = deItems.reduce((s,t)=>(scores[t.id]?.correct||0)+s,0);
    const deTotal = deItems.reduce((s,t)=>(scores[t.id]?.total||0)+s,0);
    const dePct = deTotal>0?Math.round(deCorrect/deTotal*100):0;

    const passed = abPct>=quizData.passCriteria.AB && cPct>=quizData.passCriteria.C && dePct>=quizData.passCriteria.DE;
    return {scores,abPct,cPct,dePct,passed};
  };

  // ── Intro Screen ──
  if(phase==="intro") return(
    <div style={{maxWidth:480,margin:"0 auto"}}>
      <div style={{marginBottom:20}}><NavArrow onClick={onBack} isBack size={44}/></div>
      <div className="card anim" style={{textAlign:"center",padding:"32px 24px",background:dk?"linear-gradient(145deg,#2A2418,#282015)":"linear-gradient(145deg,#FFF8F0,#FFEFDF)",border:"2px solid rgba(212,137,11,0.15)"}}>
        <div style={{marginBottom:12}}><AppIcon name="trophy" size={48}/></div>
        <h2 className="hd" style={{fontSize:22,fontWeight:800,color:"#D4890B",marginBottom:8}}>{quizData.title}</h2>
        <p style={{color:"var(--gray-500)",fontSize:14,lineHeight:1.6,marginBottom:20}}>{quizData.desc}</p>
        <div style={{background:"var(--card-bg)",borderRadius:16,padding:"16px 20px",marginBottom:20,textAlign:"left"}}>
          <div style={{fontSize:13,fontWeight:700,color:"var(--gray-600)",marginBottom:10}}>What's tested:</div>
          {tasks.map(t=><div key={t.id} style={{fontSize:12,color:"var(--gray-500)",marginBottom:6,paddingLeft:8}}>• {t.title}: {t.items.length} items</div>)}
          <div style={{fontSize:12,color:"var(--gray-400)",marginTop:12,paddingTop:10,borderTop:"1px solid var(--gray-100)"}}>
            Pass: A+B ≥ {quizData.passCriteria.AB}% · C ≥ {quizData.passCriteria.C}% · D+E ≥ {quizData.passCriteria.DE}%
          </div>
        </div>
        <div style={{fontSize:12,color:"var(--gray-400)",marginBottom:16,lineHeight:1.5}}>Uses pseudo-words and unfamiliar syllables to test real decoding skill, not memorized words.</div>
        <button className="btn" onClick={()=>setPhase("running")} style={{background:"linear-gradient(135deg,#D4890B,#E8960A)",color:"white",padding:"14px 32px",fontSize:15,fontWeight:700,borderRadius:14,border:"none",cursor:"pointer",boxShadow:"0 4px 16px rgba(212,137,11,0.3)"}}>{t("gate_start_quiz",baseLang)}</button>
      </div>
    </div>
  );

  // ── Running Screen ──
  if(phase==="running"&&currentItem) return(
    <div style={{maxWidth:480,margin:"0 auto"}}>
      {/* Progress bar */}
      <div style={{marginBottom:16}}>
        <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:"var(--gray-400)",marginBottom:4}}>
          <span>{currentTask.title}</span>
          <span>{doneItems+1}/{totalItems}</span>
        </div>
        <div style={{height:4,borderRadius:2,background:"var(--gray-100)",overflow:"hidden"}}>
          <div style={{height:"100%",width:`${(doneItems/totalItems)*100}%`,background:"linear-gradient(90deg,#D4890B,#E8960A)",borderRadius:2,transition:"width 0.3s"}}/>
        </div>
      </div>
      {/* Task description */}
      <div style={{fontSize:11,color:"var(--gray-400)",marginBottom:6,textAlign:"center"}}>{currentTask.desc}</div>
      {/* Question */}
      <div className="card anim" style={{padding:"28px 24px",textAlign:"center",marginBottom:16,position:"relative"}}>
        {addFlag&&<div style={{position:"absolute",top:8,right:8}}><FlagButton lessonId={`gate_${lang}_${currentTask.id}`} stepIndex={itemIdx} stepData={currentItem} addFlag={addFlag}/></div>}
        <div style={{fontSize:16,fontWeight:700,color:"var(--gray-700)",lineHeight:1.5,marginBottom:24}}>{currentItem.q.split(/([\u3130-\u318F\uAC00-\uD7AF\u0600-\u06FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\u0400-\u04FF]+)/g).map((part,pi)=>/[\u0600-\u06FF\u3130-\u318F\uAC00-\uD7AF\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF\u0400-\u04FF]/.test(part)?<span key={pi} style={{fontSize:36,fontWeight:800,color:"var(--purple-accent-text)",display:"inline-block",margin:"8px 4px",lineHeight:1.2}}>{part}</span>:<span key={pi}>{part}</span>)}</div>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {(()=>{
            const isShort=currentItem.opts.every(o=>o.length<=20);
            const hasKoOpts=currentItem.opts.some(o=>/[\uAC00-\uD7AF]/.test(o));
            const useGrid=isShort&&!hasKoOpts&&currentItem.opts.length===4;
            return <div style={useGrid?{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}:{display:"flex",flexDirection:"column",gap:10}}>
          {currentItem.opts.map((opt,i)=>{
            const isAns = opt===currentItem.ans;
            const isSel = opt===selected;
            let bg = "var(--white)";
            let border = "1.5px solid var(--gray-200)";
            let color = "var(--gray-700)";
            if(showFeedback && isSel && isAns){bg="var(--teal-light)";border="1.5px solid #10B981";color=dk?"#6EE7B7":"#065F46";}
            if(showFeedback && isSel && !isAns){bg="var(--coral-light)";border="1.5px solid #EF4444";color=dk?"#FCA5A5":"#991B1B";}
            if(showFeedback && !isSel && isAns){bg="var(--teal-light)";border="1.5px solid #10B981";color=dk?"#6EE7B7":"#065F46";}
            const hasArabic=/[\u0600-\u06FF]/.test(opt);const hasKo=/[\uAC00-\uD7AF]/.test(opt);
            const isVeryShort=opt.length<=6;
            return(
              <button key={i} onClick={()=>handleAnswer(opt)} style={{padding:useGrid?"16px 12px":"14px 20px",borderRadius:12,background:bg,border,color,fontSize:useGrid&&isVeryShort?22:useGrid?16:hasKo?(opt.length<=4?18:opt.length<=8?16:14):14,fontWeight:useGrid?700:600,cursor:showFeedback?"default":"pointer",textAlign:useGrid?"center":"left",transition:"all 0.15s",wordBreak:"keep-all",...(hasArabic?{direction:"rtl",fontFamily:"'Noto Sans Arabic',sans-serif"}:{})}}>
                {showFeedback&&isSel?(isAns?"✅ ":"❌ "):""}{showFeedback&&!isSel&&isAns?"✅ ":""}{opt}
              </button>
            );
          })}
            </div>;
          })()}
        </div>
      </div>
    </div>
  );

  // ── Results Screen ──
  if(phase==="results"){
    const r = calcResults();
    // Save pass to user progress
    if(r.passed){
      const prev = user.progress?.gateQuiz||{};
      if(!prev[lang]){
        setUser(u=>({...u,progress:{...u.progress,gateQuiz:{...(u.progress?.gateQuiz||{}),[lang]:{passed:true,ts:Date.now(),scores:{AB:r.abPct,C:r.cPct,DE:r.dePct}}}}}));
      }
    }
    // Find failing categories for diagnostic routing
    const failedTasks = [];
    if(r.abPct<quizData.passCriteria.AB){failedTasks.push("A");failedTasks.push("B");}
    if(r.cPct<quizData.passCriteria.C) failedTasks.push("C");
    if(r.dePct<quizData.passCriteria.DE){failedTasks.push("D");failedTasks.push("E");}

    return(
      <div style={{maxWidth:480,margin:"0 auto"}}>
        <div className="card anim" style={{textAlign:"center",padding:"32px 24px",background:r.passed?dk?"linear-gradient(145deg,#1A2E28,#1A2B24)":"linear-gradient(145deg,#F0FFF4,#E8FFEE)":dk?"linear-gradient(145deg,#2A2418,#282015)":"linear-gradient(145deg,#FFF8F0,#FFEFDF)",border:r.passed?"2px solid #86EFAC":"2px solid rgba(212,137,11,0.15)"}}>
          <div style={{fontSize:56,marginBottom:12}}>{r.passed?"🎉":"💪"}</div>
          <h2 className="hd" style={{fontSize:22,fontWeight:800,color:r.passed?"var(--teal)":"#D4890B",marginBottom:8}}>
            {r.passed?"Foundations Passed!":"Keep Practicing!"}
          </h2>
          <p style={{color:"var(--gray-500)",fontSize:14,lineHeight:1.6,marginBottom:20}}>
            {r.passed?"You passed! You may skip Foundations and go straight to lessons.":"You're making progress! Focus on the areas below to strengthen your skills."}
          </p>

          {/* Score breakdown — labels pulled from quiz data (Manifesto P14) */}
          <div style={{background:"var(--card-bg)",borderRadius:16,padding:"16px 20px",marginBottom:20,textAlign:"left"}}>
            {(()=>{
              const abTasks=quizData.tasks.filter(t=>t.category==="AB").map(t=>t.title.replace(/^Task [A-E]: /,"")).join(" & ");
              const cTasks=quizData.tasks.filter(t=>t.category==="C").map(t=>t.title.replace(/^Task [A-E]: /,"")).join(" & ");
              const deTasks=quizData.tasks.filter(t=>t.category==="DE").map(t=>t.title.replace(/^Task [A-E]: /,"")).join(" & ");
              return [{label:`A+B: ${abTasks}`,pct:r.abPct,req:quizData.passCriteria.AB},
                {label:`C: ${cTasks}`,pct:r.cPct,req:quizData.passCriteria.C},
                {label:`D+E: ${deTasks}`,pct:r.dePct,req:quizData.passCriteria.DE},
              ].map((cat,i)=>{
              const pass = cat.pct>=cat.req;
              return(
                <div key={i} style={{marginBottom:i<2?14:0}}>
                  <div style={{display:"flex",justifyContent:"space-between",fontSize:13,fontWeight:600,color:pass?"#065F46":"#991B1B",marginBottom:4}}>
                    <span>{pass?"✅":"❌"} {cat.label}</span>
                    <span>{cat.pct}% (need {cat.req}%)</span>
                  </div>
                  <div style={{height:6,borderRadius:3,background:"var(--gray-100)",overflow:"hidden"}}>
                    <div style={{height:"100%",width:`${cat.pct}%`,background:pass?"#10B981":"#EF4444",borderRadius:3,transition:"width 0.5s"}}/>
                  </div>
                </div>
              );
            });
            })()}
          </div>

          {/* Diagnostic routing for failures */}
          {!r.passed&&failedTasks.length>0&&<div style={{background:"var(--gold-light)",borderRadius:12,padding:"14px 16px",marginBottom:20,textAlign:"left"}}>
            <div style={{fontSize:13,fontWeight:700,color:"#92400E",marginBottom:8}}>📍 Where to focus:</div>
            {[...new Set(failedTasks)].map(t=>(
              <div key={t} style={{fontSize:12,color:"#78350F",marginBottom:4,paddingLeft:8}}>• {quizData.diagnosticRouting[t]}</div>
            ))}
            <div style={{fontSize:11,color:"#92400E",marginTop:10,fontStyle:"italic"}}>This is about a specific subskill — not your overall ability. Targeted practice will fix it.</div>
          </div>}

          {/* Per-task breakdown */}
          <div style={{background:"var(--card-bg)",borderRadius:12,padding:"14px 16px",marginBottom:20,textAlign:"left"}}>
            <div style={{fontSize:12,fontWeight:700,color:"var(--gray-500)",marginBottom:8}}>Detailed scores:</div>
            {tasks.map(t=>{
              const s = r.scores[t.id];
              return <div key={t.id} style={{fontSize:12,color:"var(--gray-500)",marginBottom:4,paddingLeft:8}}>• {t.title}: {s?.correct||0}/{s?.total||0} ({s?.pct||0}%)</div>;
            })}
          </div>

          <div style={{display:"flex",gap:10,justifyContent:"center",flexWrap:"wrap"}}>
            {r.passed&&onPass&&<button className="btn" onClick={onPass} style={{background:"linear-gradient(135deg,var(--teal),#2ECDA7)",color:"white",padding:"12px 24px",fontSize:14,fontWeight:700,borderRadius:12,border:"none",cursor:"pointer"}}>{t("gate_continue_lessons",baseLang)} →</button>}
            <button className="btn btn-outline" onClick={()=>{setPhase("intro");setTaskIdx(0);setItemIdx(0);setAnswers({});setSelected(null);}} style={{padding:"12px 24px",fontSize:14}}>Retry Quiz</button>
            <NavArrow onClick={onBack} isBack size={44}/>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

// renderNavTitle moved to components/shared.jsx

function FoundationsPlaythrough({lang,user,setUser,addXp,learnWord,showToast,addFlag,baseLang="en",onBack}){
  const dk=document.documentElement.classList.contains("dark");
  // Restore navigation from saved state
  const fkNav=(user.progress||{}).fkNav||{};
  const savedNav=fkNav[lang]||null;
  const [selStage,setSelStage]=useState(savedNav?.stageId||null);
  const [selLesson,setSelLesson]=useState(null);
  const [running,setRunning]=useState(false);
  const fkKey=getFkPlayKey(lang,baseLang);
  const fpData=FK_PLAYTHROUGH[fkKey];
  const stages=fpData?.stages||[];
  const fkPlay=(user.progress||{}).fkPlay||{};
  const langPlay=fkPlay[lang]||{};
  const isLessonDone=(lid)=>!!langPlay[lid]?.completed;

  // Save FK navigation state when stage changes
  const saveFkNav=(stageId)=>{
    setUser(u=>{
      const p={...(u.progress||{}),fkNav:{...((u.progress||{}).fkNav||{})}};
      if(stageId) p.fkNav[lang]={stageId};
      else delete p.fkNav[lang];
      return{...u,progress:p};
    });
  };

  // Wrap setSelStage to also persist
  const selectStage=(id)=>{setSelStage(id);saveFkNav(id);};
  const clearStage=()=>{setSelStage(null);saveFkNav(null);};

  // ← Backspace: go back in navigation hierarchy
  useEffect(()=>{
    const handler=(e)=>{
      if(running) return;
      if(e.code!=="Backspace")return;
      const tag=document.activeElement?.tagName;
      if(tag==="INPUT"||tag==="TEXTAREA")return;
      e.preventDefault();UISounds.click();
      if(selStage){clearStage();}
      else if(onBack){onBack();}
    };
    window.addEventListener("keydown",handler);
    return ()=>window.removeEventListener("keydown",handler);
  },[selStage,running]);

  const completeFpLesson=(lesson)=>{
    setUser(u=>{
      const p={...(u.progress||{}),fkPlay:{...((u.progress||{}).fkPlay||{})}};
      p.fkPlay[lang]={...(p.fkPlay[lang]||{}),[lesson.id]:{completed:true,ts:Date.now()}};
      return{...u,progress:p};
    });
  };

  // Running a lesson — feed to LessonEngine
  if(running&&selLesson){
    // Find next lesson: next in same stage, or first of next stage
    const getNextLesson=()=>{
      for(let si=0;si<stages.length;si++){
        const sLessons=stages[si].lessons||[];
        const li=sLessons.findIndex(l=>l.id===selLesson.id);
        if(li>=0){
          if(li+1<sLessons.length) return sLessons[li+1];
          if(si+1<stages.length){
            const nextStageLessons=stages[si+1].lessons||[];
            if(nextStageLessons.length>0) return nextStageLessons[0];
          }
          return null;
        }
      }
      return null;
    };
    const nextLesson=getNextLesson();
    return <LessonErrorBoundary onBack={()=>{setRunning(false);setSelLesson(null);}} baseLang={baseLang}><LessonEngine
      lesson={selLesson}
      baseLang={baseLang}
      lang={lang}
      addFlag={addFlag}
      unit={{color:"var(--purple-accent-text)",n:0,title:fpData?.name||"Foundations"}}
      user={user}
      addXp={addXp}
      learnWord={learnWord}
      showToast={showToast}
      hideQuizRom={true}
      onBack={()=>{setRunning(false);setSelLesson(null);}}
      onComplete={()=>{completeFpLesson(selLesson);}}
      onContinue={nextLesson?()=>{completeFpLesson(selLesson);setSelLesson(nextLesson);}:null}
    /></LessonErrorBoundary>;
  }

  // Lesson list for a stage
  if(selStage){
    const stage=stages.find(s=>s.id===selStage);
    if(!stage) return null;
    const lessons=stage.lessons||[];
    const doneCt=lessons.filter(l=>isLessonDone(l.id)).length;
    const sPct=lessons.length>0?Math.round((doneCt/lessons.length)*100):0;
    return(
      <div className="anim" data-kb-owner="foundations">
        <div style={{marginBottom:20}}><NavArrow onClick={()=>clearStage()} isBack size={44}/></div>
        {/* Stage header — purple like all headers */}
        <div style={{background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 12%, #8B6AE4 30%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",borderRadius:22,padding:"22px 24px",marginBottom:24,border:"2px solid rgba(255,255,255,0.18)",position:"relative",overflow:"hidden",boxShadow:dk?"0 0 20px rgba(123,94,232,0.4), 0 8px 28px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 16px rgba(123,94,232,0.2), 0 8px 28px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)"}}>
          <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
          <div style={{display:"flex",alignItems:"center",gap:14,position:"relative",zIndex:2}}>
            <div style={{width:52,height:52,borderRadius:16,background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,color:"white",fontWeight:900,boxShadow:"inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.15)",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none"}}/>
              <span style={{position:"relative",zIndex:1,textShadow:"0 1px 3px rgba(0,0,0,0.25)"}}>{stages.indexOf(stage)+1}</span>
            </div>
            <div style={{flex:1}}>
              <h2 style={{fontSize:20,fontWeight:800,color:"white",textShadow:"0 2px 4px rgba(0,0,0,0.2)",margin:0,fontFamily:"'DM Sans','Inter',system-ui,sans-serif"}}>{stage.title}</h2>
              <p style={{color:"rgba(255,255,255,0.75)",fontSize:13,margin:0}}>{stage.desc} · {lessons.length} {t("map_lessons",baseLang)}{sPct>0?` · ${sPct}%`:""}</p>
            </div>
            {sPct===100&&<div style={{fontSize:24,flexShrink:0}}>✅</div>}
          </div>
          {sPct>0&&<div style={{marginTop:10,height:5,borderRadius:4,background:"rgba(255,255,255,0.15)",overflow:"hidden",position:"relative",zIndex:2}}>
            <div style={{height:"100%",width:`${sPct}%`,background:"linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",borderRadius:4,transition:"width 0.3s",boxShadow:"0 0 8px rgba(255,255,255,0.4)"}}/>
          </div>}
        </div>
        {/* Lesson cards — 2×2 glossy grid */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
          {lessons.map((ls,i)=>{
            const done=isLessonDone(ls.id);
            return(
              <div key={ls.id} role="button" className="ghost-tile anim" onClick={()=>{UISounds.tick();setSelLesson(ls);setRunning(true);}} style={{
                cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6,padding:"18px 12px 14px",animationDelay:`${i*0.05}s`,
                border:done?`2.5px solid var(--teal)`:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",borderRadius:22,position:"relative",overflow:"hidden",
                background:dk?(done?"linear-gradient(180deg, rgba(40,80,65,0.85) 0%, rgba(30,65,50,0.9) 50%, rgba(22,50,40,0.95) 100%)":"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)"):(done?"linear-gradient(180deg, #E0FAE8 0%, #D2F5DC 50%, #C4F0D4 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)"),
                boxShadow:dk?"0 6px 20px rgba(0,0,0,0.35), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 6px 20px rgba(123,94,232,0.1), 0 0 10px rgba(123,94,232,0.06), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(123,94,232,0.05)",
                transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s, background 0.15s"}}>
                <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
                <div style={{width:56,height:56,borderRadius:16,background:done?"linear-gradient(180deg, #70E8C8 0%, #40D8A8 15%, #2ECD9E 40%, #1DB88A 65%, #18A07A 85%, #148068 100%)":"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #8B6AE4 35%, #7B5EE8 55%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:done?20:18,fontWeight:900,color:"white",flexShrink:0,boxShadow:done?(dk?"0 0 16px rgba(46,205,158,0.4), 0 6px 18px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 12px rgba(46,205,158,0.25), 0 6px 18px rgba(46,205,158,0.3), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)"):(dk?"0 0 16px rgba(123,94,232,0.4), 0 6px 18px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 12px rgba(123,94,232,0.2), 0 6px 18px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -3px 0 rgba(0,0,0,0.12)"),position:"relative",overflow:"hidden",zIndex:2}}>
                  <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none"}}/>
                  <span style={{position:"relative",zIndex:1,textShadow:"0 1px 3px rgba(0,0,0,0.25)"}}>{done?"✓":i+1}</span>
                </div>
                <div style={{textAlign:"center",position:"relative",zIndex:2}}>
                  <div className="hd trg-text-center" style={{fontWeight:700,fontSize:12,lineHeight:1.3,color:dk?"rgba(220,215,240,0.9)":"var(--gray-700)"}}>{ls.title}</div>
                  <div style={{color:dk?"rgba(180,170,220,0.6)":"var(--gray-400)",fontSize:10,marginTop:2}}>{(ls.steps||[]).length} steps · +{ls.xp} XP{done?" ✓":""}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Stage list (main view)
  const totalLessons=stages.reduce((a,s)=>a+(s.lessons||[]).length,0);
  const doneLessons=stages.reduce((a,s)=>a+(s.lessons||[]).filter(l=>isLessonDone(l.id)).length,0);
  const pct=totalLessons>0?Math.round((doneLessons/totalLessons)*100):0;
  return(
    <div className="anim" data-kb-owner="foundations">
      <div style={{marginBottom:20}}><NavArrow onClick={onBack} isBack size={44}/></div>
      {/* Header — purple like all headers */}
      <div style={{background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 12%, #8B6AE4 30%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",borderRadius:22,padding:"22px 24px",marginBottom:24,border:"2px solid rgba(255,255,255,0.18)",position:"relative",overflow:"hidden",boxShadow:dk?"0 0 20px rgba(123,94,232,0.4), 0 8px 28px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 16px rgba(123,94,232,0.2), 0 8px 28px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)"}}>
        <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
        <div style={{display:"flex",alignItems:"center",gap:14,position:"relative",zIndex:2}}>
          <div style={{width:56,height:56,borderRadius:16,background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.15)",color:"white",flexShrink:0}}><AppIcon name="building_blocks" size={36}/></div>
          <div style={{flex:1}}>
            <h2 style={{fontSize:22,fontWeight:800,color:"white",textShadow:"0 2px 4px rgba(0,0,0,0.2)",margin:0,fontFamily:"'DM Sans','Inter',system-ui,sans-serif"}}>{fpData?.name||"Foundations"}</h2>
            <p style={{color:"rgba(255,255,255,0.75)",fontSize:13,margin:0}}>{stages.length} stages · {totalLessons} lessons{pct>0?` · ${pct}%`:""}</p>
          </div>
          {pct===100&&<div style={{fontSize:28,flexShrink:0}}>✅</div>}
        </div>
        {pct>0&&<div style={{marginTop:10,height:5,borderRadius:4,background:"rgba(255,255,255,0.15)",overflow:"hidden",position:"relative",zIndex:2}}>
          <div style={{height:"100%",width:`${pct}%`,background:"linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",borderRadius:4,transition:"width 0.3s",boxShadow:"0 0 8px rgba(255,255,255,0.4)"}}/>
        </div>}
      </div>
      {stages.length>0?
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
          {stages.map((stage,i)=>{
            const sLessons=stage.lessons||[];
            const sDone=sLessons.filter(l=>isLessonDone(l.id)).length;
            const sPct=sLessons.length>0?Math.round((sDone/sLessons.length)*100):0;
            return(
              <div key={stage.id} role="button" className="ghost-tile anim" onClick={()=>{UISounds.tick();selectStage(stage.id);}} style={{
                cursor:"pointer",padding:"18px 14px 14px",textAlign:"center",borderRadius:22,
                display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6,
                background:sPct===100?(dk?"linear-gradient(180deg, rgba(40,80,65,0.85) 0%, rgba(30,65,50,0.9) 50%, rgba(22,50,40,0.95) 100%)":"linear-gradient(180deg, #E0FAE8 0%, #D2F5DC 50%, #C4F0D4 100%)"):(dk?"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)"),
                border:sPct===100?`2.5px solid var(--teal)`:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",
                boxShadow:dk?"0 6px 20px rgba(0,0,0,0.35), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 6px 20px rgba(123,94,232,0.1), 0 0 10px rgba(123,94,232,0.06), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(123,94,232,0.05)",
                animationDelay:`${i*0.05}s`,position:"relative",overflow:"hidden",
                transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s, background 0.15s",
              }}>
                <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
                <div style={{width:56,height:56,borderRadius:16,background:sPct===100?"linear-gradient(180deg, #70E8C8 0%, #40D8A8 15%, #2ECD9E 40%, #1DB88A 65%, #18A07A 85%, #148068 100%)":"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #8B6AE4 35%, #7B5EE8 55%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:18,fontWeight:900,boxShadow:sPct===100?(dk?"0 0 16px rgba(46,205,158,0.4), 0 6px 18px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 12px rgba(46,205,158,0.25), 0 6px 18px rgba(46,205,158,0.3), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)"):(dk?"0 0 16px rgba(123,94,232,0.4), 0 6px 18px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 12px rgba(123,94,232,0.2), 0 6px 18px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -3px 0 rgba(0,0,0,0.12)"),position:"relative",overflow:"hidden",zIndex:2}}>
                  <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none"}}/>
                  <span style={{position:"relative",zIndex:1,textShadow:"0 1px 3px rgba(0,0,0,0.25)"}}>{sPct===100?"✓":i+1}</span>
                </div>
                <div style={{textAlign:"center",position:"relative",zIndex:2}}>
                  <div className="hd" style={{fontSize:12,fontWeight:700,color:sPct===100?"var(--teal)":(dk?"rgba(220,215,240,0.9)":"var(--gray-700)"),lineHeight:1.3}}>{stage.title}</div>
                  <div style={{fontSize:10,color:sPct===100?"var(--teal)":(dk?"rgba(180,170,220,0.6)":"var(--purple-accent-text)"),fontWeight:600,marginTop:2}}>{sPct===100?"✓ Complete":`${sDone}/${sLessons.length} lessons`}</div>
                </div>
                {sPct>0&&sPct<100&&<div style={{width:"80%",position:"relative",zIndex:2}}>
                  <div style={{height:4,borderRadius:3,background:dk?"rgba(255,255,255,0.1)":"rgba(123,94,232,0.1)",overflow:"hidden"}}>
                    <div style={{height:"100%",width:`${sPct}%`,background:"linear-gradient(180deg, #C0AEFA 0%, #7B5EE8 55%, #5840B8 100%)",borderRadius:3,boxShadow:"0 0 6px rgba(123,94,232,0.3)"}}/>
                  </div>
                </div>}
              </div>
            );
          })}
        </div>
      :
        <div className="card" style={{textAlign:"center",padding:"40px 20px"}}>
          <div style={{marginBottom:12}}><AppIcon name="construction" size={56}/></div>
          <h3 className="hd" style={{fontSize:18,fontWeight:700,marginBottom:4}}>{t("coming_soon",baseLang)}</h3>
          <p style={{color:"var(--gray-400)",fontSize:13}}>Playthrough lessons for this language are being developed.</p>
        </div>
      }
    </div>
  );
}

// ── LESSON LIST (inside a unit) ──
function LessonList({unit,user,lang,baseLang,onBack,onStart}){
  const dk=document.documentElement.classList.contains("dark");
  const [whyOpen,setWhyOpen]=useState(false);
  const [showUnitPopup,setShowUnitPopup]=useState(false);
  const prog=user.progress||{};
  const unitProg=prog.units?.[`${lang||unit.lang}:${unit.n}`];
  // Backspace = go back to unit map
  useEffect(()=>{
    const handler=(e)=>{
      if(showUnitPopup)return; // popup handles its own keys
      if(e.code!=="Backspace")return;
      const tag=document.activeElement?.tagName;
      if(tag==="INPUT"||tag==="TEXTAREA")return;
      e.preventDefault();UISounds.click();onBack();
    };
    window.addEventListener("keydown",handler);
    return ()=>window.removeEventListener("keydown",handler);
  },[onBack,showUnitPopup]);
  return(
    <div className="anim" data-kb-owner="learn">
      <div style={{marginBottom:20}}><NavArrow onClick={onBack} isBack size={44}/></div>
      
      {/* Unit header — clickable → info popup — matches Nederlands purple */}
      <div role="button" onClick={()=>{UISounds.click();setShowUnitPopup(true);}} style={{cursor:"pointer",background:"linear-gradient(180deg, #C0AEF8 0%, #A488F0 12%, #8B6AE4 30%, #7B5EE8 50%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",borderRadius:22,padding:"22px 24px",marginBottom:22,border:"2px solid rgba(255,255,255,0.18)",position:"relative",overflow:"hidden",boxShadow:dk?"0 0 20px rgba(123,94,232,0.4), 0 8px 28px rgba(0,0,0,0.4), inset 0 2px 0 rgba(255,255,255,0.25), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 16px rgba(123,94,232,0.2), 0 8px 28px rgba(123,94,232,0.25), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.12)",transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s"}}>
        <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.08) 55%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
        <div style={{display:"flex",alignItems:"center",gap:14,position:"relative",zIndex:2}}>
          <div style={{width:52,height:52,borderRadius:16,background:"rgba(255,255,255,0.15)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:18,fontWeight:900,color:"white",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.15)",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none"}}/>
            <span style={{position:"relative",zIndex:1,textShadow:"0 1px 3px rgba(0,0,0,0.25)"}}>U{unit.n}</span>
          </div>
          <div style={{flex:1}}>
            <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
              <h2 style={{fontSize:20,fontWeight:800,color:"white",textShadow:"0 2px 4px rgba(0,0,0,0.2)",margin:0,fontFamily:"'DM Sans','Inter',system-ui,sans-serif"}}>{t("map_unit_prefix",baseLang)} {unit.n}: <span className="trg-inline">{unit.title}</span></h2>
              {(()=>{const fw=LANG_FRAMEWORK[unit.lang]||"CEFR";const info=getCefrInfo(unit.level);return <span style={{padding:"2px 8px",borderRadius:6,background:"rgba(255,255,255,0.18)",color:"white",fontSize:9,fontWeight:700}}>{unit.level} • {info.label}</span>;})()}
            </div>
            <p style={{color:"rgba(255,255,255,0.75)",fontSize:13,marginTop:2,margin:0}}>{unit.sub} · {unit.lessons.length} {t("map_lessons",baseLang)}{unitProg?` · ${unitProg.pct}%`:""}</p>
          </div>
          {unitProg&&unitProg.completed&&<div style={{fontSize:24,flexShrink:0}}>✅</div>}
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" style={{position:"relative",zIndex:2,opacity:0.5,flexShrink:0}}><path d="M9 5l7 7-7 7" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        {unitProg&&unitProg.pct>0&&<div style={{marginTop:10,height:5,borderRadius:4,background:"rgba(255,255,255,0.15)",overflow:"hidden",position:"relative",zIndex:2}}>
          <div style={{height:"100%",width:`${unitProg.pct}%`,background:"linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",borderRadius:4,transition:"width 0.3s",boxShadow:"0 0 8px rgba(255,255,255,0.4)",position:"relative",overflow:"hidden"}}><div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"50%",borderRadius:"0 0 50% 50%",background:"linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%)",pointerEvents:"none"}}/></div>
        </div>}
      </div>

      {/* Unit info popup */}
      {showUnitPopup&&<GlossyPopup title={<span>{t("map_unit_prefix",baseLang)} {unit.n}: <span className="trg-inline">{unit.title}</span></span>} onClose={()=>setShowUnitPopup(false)}>
        <div style={{fontSize:13,color:"var(--gray-600)",lineHeight:1.6,marginBottom:14}}>{unit.sub}</div>
        {unit.goals&&unit.goals.length>0&&<div style={{marginBottom:14}}>
          <div style={{fontSize:12,fontWeight:700,color:"var(--gray-500)",marginBottom:8}}>What you'll learn:</div>
          {unit.goals.map((g,i)=><div key={i} style={{padding:"8px 12px",borderRadius:10,background:dk?"rgba(123,94,232,0.1)":"rgba(123,94,232,0.04)",border:dk?"1px solid rgba(123,94,232,0.1)":"1px solid rgba(123,94,232,0.06)",marginBottom:4,fontSize:13,color:"var(--gray-700)"}}>
            <span style={{color:"var(--purple-accent-text)",fontWeight:700,marginRight:6}}>→</span>{g}
          </div>)}
        </div>}
        <div style={{display:"flex",gap:12}}>
          <div style={{flex:1,padding:"12px",borderRadius:12,background:dk?"rgba(123,94,232,0.1)":"rgba(123,94,232,0.05)",textAlign:"center",border:dk?"1px solid rgba(123,94,232,0.12)":"1px solid rgba(123,94,232,0.06)"}}>
            <div style={{fontSize:18,fontWeight:800,color:"var(--purple-accent-text)"}}>{unit.lessons.length}</div>
            <div style={{fontSize:10,color:"var(--gray-400)",fontWeight:600}}>Lessons</div>
          </div>
          <div style={{flex:1,padding:"12px",borderRadius:12,background:dk?"rgba(123,94,232,0.1)":"rgba(123,94,232,0.05)",textAlign:"center",border:dk?"1px solid rgba(123,94,232,0.12)":"1px solid rgba(123,94,232,0.06)"}}>
            <div style={{fontSize:18,fontWeight:800,color:"var(--purple-accent-text)"}}>{unit.level}</div>
            <div style={{fontSize:10,color:"var(--gray-400)",fontWeight:600}}>CEFR Level</div>
          </div>
          <div style={{flex:1,padding:"12px",borderRadius:12,background:dk?"rgba(123,94,232,0.1)":"rgba(123,94,232,0.05)",textAlign:"center",border:dk?"1px solid rgba(123,94,232,0.12)":"1px solid rgba(123,94,232,0.06)"}}>
            <div style={{fontSize:18,fontWeight:800,color:"var(--purple-accent-text)"}}>{unitProg?`${unitProg.pct}%`:"0%"}</div>
            <div style={{fontSize:10,color:"var(--gray-400)",fontWeight:600}}>Complete</div>
          </div>
        </div>
      </GlossyPopup>}

      {/* Why this level? — evidence panel (only for units with objectives) */}
      {unit.objectives&&unit.objectives.length>0&&(()=>{
        const fw=LANG_FRAMEWORK[unit.lang]||"CEFR";
        const exp=explainUnitLevel(unit,fw);
        const bandColor=getCefrBandColor(getCefrInfo(exp.level||unit.level).band);
        return <div style={{margin:"0 0 16px",borderRadius:14,border:dk?"1.5px solid rgba(123,94,232,0.15)":"1.5px solid rgba(123,94,232,0.08)",overflow:"hidden"}}>
          <button onClick={()=>setWhyOpen(!whyOpen)} style={{width:"100%",background:"none",border:"none",padding:"12px 16px",cursor:"pointer",display:"flex",alignItems:"center",gap:8,fontSize:13,color:"var(--gray-500)",fontWeight:600}}>
            <span style={{fontSize:14}}>{whyOpen?"▾":"▸"}</span>
            Why {fw} {exp.level||unit.level}?
            {exp.derived&&<span style={{marginLeft:"auto",fontSize:10,padding:"2px 8px",borderRadius:6,background:bandColor+"15",color:bandColor,fontWeight:700}}>derived from objectives</span>}
          </button>
          {whyOpen&&<div style={{padding:"0 16px 14px",fontSize:12,color:"var(--gray-600)",lineHeight:1.6}}>
            {exp.objectives.map((o,i)=><div key={o.id} style={{marginBottom:i<exp.objectives.length-1?10:0}}>
              <div style={{fontWeight:700,color:"var(--gray-700)",marginBottom:2}}>
                <span style={{display:"inline-block",padding:"1px 6px",borderRadius:4,background:bandColor+"15",color:bandColor,fontSize:10,fontWeight:700,marginRight:6}}>{o.level}</span>
                {o.name}
              </div>
              {o.evidence.map((e,j)=><div key={j} style={{paddingLeft:12,color:"var(--gray-400)",fontSize:11}}>• {e}</div>)}
            </div>)}
            {!exp.derived&&<div style={{color:"var(--gray-300)",fontStyle:"italic",fontSize:11}}>Level set manually — no objectives mapped yet.</div>}
          </div>}
        </div>;
      })()}

      {/* Lesson cards — 2x2 glossy grid */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
        {unit.lessons.map((ls,i)=>{
          const lessonDone=prog.lessons?.[`${lang||unit.lang}:${unit.n}:${ls.id}`];
          return(
          <div key={ls.id} role="button" className="anim ghost-tile" onClick={()=>{UISounds.tick();onStart(ls);}}
            style={{cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:6,padding:"18px 12px 14px",animationDelay:`${i*0.05}s`,
            border:lessonDone?`2.5px solid var(--teal)`:dk?"2px solid rgba(123,94,232,0.3)":"2px solid rgba(123,94,232,0.12)",borderRadius:22,position:"relative",overflow:"hidden",
            background:dk?(lessonDone?"linear-gradient(180deg, rgba(40,80,65,0.85) 0%, rgba(30,65,50,0.9) 50%, rgba(22,50,40,0.95) 100%)":"linear-gradient(180deg, rgba(55,45,105,0.94) 0%, rgba(42,36,90,0.96) 40%, rgba(30,26,68,0.98) 100%)"):(lessonDone?"linear-gradient(180deg, #E0FAE8 0%, #D2F5DC 50%, #C4F0D4 100%)":"linear-gradient(180deg, #F8F5FF 0%, #F4F0FF 35%, #F0ECFF 65%, #EDE8FF 100%)"),
            boxShadow:dk?"0 6px 20px rgba(0,0,0,0.35), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.08), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 6px 20px rgba(123,94,232,0.1), 0 0 10px rgba(123,94,232,0.06), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -3px 0 rgba(123,94,232,0.05)",
            transition:"transform 0.15s, box-shadow 0.15s, filter 0.15s"}}>
            <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"38%",borderRadius:"0 0 50% 50%",background:dk?"linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)",pointerEvents:"none",zIndex:1}}/>
            {/* Lesson number badge */}
            <div style={{width:56,height:56,borderRadius:16,background:lessonDone?"linear-gradient(180deg, #70E8C8 0%, #40D8A8 15%, #2ECD9E 40%, #1DB88A 65%, #18A07A 85%, #148068 100%)":"linear-gradient(180deg, #C0AEF8 0%, #A488F0 15%, #8B6AE4 35%, #7B5EE8 55%, #6545C8 75%, #5840B8 90%, #4A2BA6 100%)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:lessonDone?20:18,fontWeight:900,color:"white",fontFamily:"'DM Sans',sans-serif",flexShrink:0,boxShadow:lessonDone?(dk?"0 0 16px rgba(46,205,158,0.4), 0 6px 18px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 12px rgba(46,205,158,0.25), 0 6px 18px rgba(46,205,158,0.3), inset 0 2px 0 rgba(255,255,255,0.45), inset 0 -3px 0 rgba(0,0,0,0.12)"):(dk?"0 0 16px rgba(123,94,232,0.4), 0 6px 18px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)":"0 0 12px rgba(123,94,232,0.2), 0 6px 18px rgba(123,94,232,0.3), inset 0 2px 0 rgba(255,255,255,0.5), inset 0 -3px 0 rgba(0,0,0,0.12)"),position:"relative",overflow:"hidden",zIndex:2}}>
              <div style={{position:"absolute",top:0,left:"6%",right:"6%",height:"44%",borderRadius:"0 0 48% 48%",background:"linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",pointerEvents:"none"}}/>
              <span style={{position:"relative",zIndex:1,textShadow:"0 1px 3px rgba(0,0,0,0.25)",filter:"drop-shadow(0 1px 2px rgba(0,0,0,0.15))"}}>{lessonDone?"✓":`L${i+1}`}</span>
            </div>
            <div style={{textAlign:"center",position:"relative",zIndex:2}}>
              <div className="hd trg-text-center" style={{fontWeight:700,fontSize:12,lineHeight:1.3,color:dk?"rgba(220,215,240,0.9)":"var(--gray-700)"}}>{ls.title}</div>
              <div style={{color:dk?"rgba(180,170,220,0.6)":"var(--gray-400)",fontSize:10,marginTop:2}}>{(ls.steps||[]).length} steps · +{ls.xp} XP{lessonDone?" ✓":""}</div>
            </div>
          </div>);
        })}
      </div>
    </div>
  );
}

export default LearnPage;
export { UnitMap, FoundationsGateQuiz, FoundationsPlaythrough, LessonList, CountryFlag, GlossyPopup };
