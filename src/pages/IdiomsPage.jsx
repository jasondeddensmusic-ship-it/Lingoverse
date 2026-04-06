import React, { useState, useMemo } from "react";
import { LANGUAGES } from '../data/metadata.js';
import { t } from '../data/vocabulary.js';
import { AppIcon } from '../components/shared.jsx';
import { DUTCH_IDIOMS } from '../data/grammar/idioms-dutch.js';
import { GERMAN_IDIOMS } from '../data/grammar/idioms-german.js';

function IdiomsPage({lang,baseLang="en"}){
  const dk=document.documentElement.classList.contains("dark");
  const IDIOM_REFS = { nl: DUTCH_IDIOMS, de: GERMAN_IDIOMS };
  const allIdioms = IDIOM_REFS[lang] || [];

  const [search, setSearch] = useState("");
  const [filterLevel, setFilterLevel] = useState(null);
  const [expanded, setExpanded] = useState(null); // index of expanded card

  const levels = useMemo(() => {
    const lvSet = new Set();
    allIdioms.forEach(id => { if (id.level) lvSet.add(id.level.substring(0, 2)); });
    return [...lvSet].sort();
  }, [allIdioms]);

  const idioms = useMemo(() => {
    let pool = allIdioms;
    if (filterLevel) pool = pool.filter(id => (id.level || "").startsWith(filterLevel));
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      pool = pool.filter(id =>
        (id.trg || "").toLowerCase().includes(q) ||
        (id.src || "").toLowerCase().includes(q) ||
        (id.lit || "").toLowerCase().includes(q)
      );
    }
    return pool;
  }, [allIdioms, filterLevel, search]);

  // ── Design spine: candy chip ──
  const candyChip = (active) => ({
    padding:"8px 18px",borderRadius:16,border:"none",cursor:"pointer",
    fontFamily:"'Quicksand','system-ui',sans-serif",fontSize:12,fontWeight:900,
    letterSpacing:0.3,
    transition:"all .25s cubic-bezier(.4,0,.2,1)",
    position:"relative",overflow:"hidden",
    background:active
      ?(dk?"linear-gradient(180deg,#C0AEF8 0%,#A488F0 15%,#8B6AE4 35%,#7B5EE8 50%,#6545C8 75%,#5840B8 90%,#4A2BA6 100%)":"linear-gradient(180deg,#B8A8FA 0%,#9B7AE8 20%,#7B5EE8 55%,#6545C8 85%,#5840B8 100%)")
      :(dk?"linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)":"linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(240,234,255,0.85) 100%)"),
    color:active?"white":(dk?"rgba(200,184,255,0.9)":"#7050D8"),
    textShadow:active?"0 1px 2px rgba(0,0,0,0.2)":"none",
    boxShadow:active
      ?(dk?"0 0 18px rgba(123,94,232,0.4), 0 5px 16px rgba(85,53,181,0.5), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.18)":"0 4px 16px rgba(123,94,232,0.4), 0 2px 4px rgba(0,0,0,0.1), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -3px 0 rgba(0,0,0,0.15)")
      :(dk?"inset 0 1px 0 rgba(255,255,255,0.1), 0 2px 6px rgba(0,0,0,0.2)":"inset 0 2px 0 rgba(255,255,255,0.9), 0 2px 6px rgba(112,80,216,0.1), 0 0 0 1px rgba(168,144,255,0.2)"),
  });

  // ── Compound bubble ──
  const bubble = {
    borderRadius:22,position:"relative",overflow:"hidden",
    background:dk
      ?"linear-gradient(180deg, rgba(123,94,232,0.22) 0%, rgba(100,80,200,0.14) 40%, rgba(80,60,180,0.08) 100%)"
      :"linear-gradient(180deg, rgba(200,190,255,0.45) 0%, rgba(220,210,255,0.3) 50%, rgba(235,230,255,0.18) 100%)",
    border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(180,165,240,0.4)",
    boxShadow:dk
      ?"0 6px 20px rgba(0,0,0,0.3), 0 0 14px rgba(123,94,232,0.2), inset 0 2px 0 rgba(255,255,255,0.07), inset 0 -3px 0 rgba(0,0,0,0.12)"
      :"0 6px 24px rgba(123,94,232,0.1), 0 0 12px rgba(180,165,240,0.15), inset 0 2px 0 rgba(255,255,255,0.75), inset 0 -3px 0 rgba(123,94,232,0.05)",
    transition:"all .25s cubic-bezier(.4,0,.2,1)",
  };

  const gloss = <div style={{position:"absolute",top:0,left:"5%",right:"5%",height:"42%",borderRadius:"0 0 50% 50%",pointerEvents:"none",zIndex:0,
    background:dk?"linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.01) 60%, transparent 100%)":"linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)"}}/>;

  // A1 items are common phrases, not idioms
  const isPhrase = (level) => level === "A1";

  return(
    <div className="anim">
      {/* Header */}
      <div style={{textAlign:"center",marginBottom:32,padding:"0 20px"}}>
        <h2 className="hd" style={{fontSize:28,fontWeight:800,marginBottom:8,fontFamily:"'Quicksand','system-ui',sans-serif",color:dk?"rgba(255,255,255,0.92)":"var(--gray-800)",lineHeight:1.2}}>
          {(LANGUAGES.find(l=>l.code===lang)?.native||"")} {t("idioms_header",baseLang)}
        </h2>
        <p style={{color:dk?"rgba(200,184,255,0.4)":"var(--gray-400)",fontSize:14,fontFamily:"'Nunito','system-ui',sans-serif",fontWeight:600,lineHeight:1.5,maxWidth:360,margin:"0 auto"}}>
          {t("idioms_subtitle",baseLang)}
        </p>
      </div>

      {/* Empty state */}
      {allIdioms.length===0 && <div style={{...bubble,textAlign:"center",padding:"48px 24px",marginBottom:24}}>
        {gloss}
        <div style={{fontSize:48,marginBottom:16,position:"relative",zIndex:1}}>🚧</div>
        <div style={{fontSize:18,fontWeight:800,color:dk?"rgba(255,255,255,0.7)":"var(--gray-600)",position:"relative",zIndex:1,fontFamily:"'Quicksand','system-ui',sans-serif"}}>Idioms coming soon</div>
      </div>}

      {allIdioms.length > 0 && <>
        {/* Search — compound bubble */}
        <div style={{maxWidth:480,margin:"0 auto 18px",...bubble,padding:0}}>
          {gloss}
          <input
            type="text" value={search} onChange={e => setSearch(e.target.value)}
            placeholder={t("idioms_search_ph",baseLang)}
            style={{
              width:"100%",padding:"14px 18px 14px 44px",borderRadius:22,
              border:"none",background:"transparent",
              color:dk?"#E8E0FF":"var(--gray-800)",fontSize:15,fontWeight:700,
              fontFamily:"'Nunito','system-ui',sans-serif",outline:"none",
              boxSizing:"border-box",position:"relative",zIndex:1,
            }}
          />
          <AppIcon name="magnifying_glass" size={18} style={{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",opacity:0.35,zIndex:2}}/>
          {search && <button onClick={()=>setSearch("")} style={{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",fontSize:18,color:dk?"rgba(200,184,255,0.5)":"var(--gray-400)",padding:4,fontWeight:700,zIndex:2}}>×</button>}
        </div>

        {/* Level filter */}
        {levels.length > 1 && <div style={{display:"flex",justifyContent:"center",gap:6,marginBottom:24,flexWrap:"wrap"}}>
          <button onClick={()=>setFilterLevel(null)} style={candyChip(filterLevel===null)}>{t("pos_all",baseLang)}</button>
          {levels.map(lv=>(
            <button key={lv} onClick={()=>setFilterLevel(filterLevel===lv?null:lv)} style={candyChip(filterLevel===lv)}>{lv}</button>
          ))}
        </div>}

        {(search||filterLevel) && <div style={{textAlign:"center",marginBottom:16,fontSize:12,color:dk?"rgba(200,184,255,0.35)":"var(--gray-300)",fontWeight:700,fontFamily:"'Nunito','system-ui',sans-serif"}}>{idioms.length} {t("idioms_found",baseLang)}</div>}
      </>}

      {/* Idiom list — teacher board style */}
      <div style={{display:"grid",gap:12,maxWidth:520,margin:"0 auto"}}>
        {idioms.map((id,i)=>{
          const isOpen = expanded === i;
          const phrase = isPhrase(id.level);
          return(
            <div key={i} style={{...bubble,padding:0,cursor:"pointer"}}
              onClick={()=>setExpanded(isOpen?null:i)}
              onMouseEnter={e=>{if(!isOpen){e.currentTarget.style.transform="translateY(-1px)";e.currentTarget.style.filter="brightness(1.05)";}}}
              onMouseLeave={e=>{e.currentTarget.style.transform="";e.currentTarget.style.filter="";}}>
              {gloss}

              {/* Main row — always visible */}
              <div style={{padding:"20px 22px",position:"relative",zIndex:1}}>
                {/* German idiom — big, bold, scannable */}
                <div style={{
                  fontSize:20,fontWeight:800,lineHeight:1.3,letterSpacing:-0.2,
                  color:dk?"rgba(255,255,255,0.92)":"var(--gray-800)",
                  fontFamily:"'Quicksand','system-ui',sans-serif",
                  marginBottom:6,
                }}>
                  {id.trg}
                </div>

                {/* English meaning */}
                <div style={{
                  fontSize:15,fontWeight:700,lineHeight:1.4,
                  color:dk?"rgba(220,210,255,0.85)":"#2D2455",
                  fontFamily:"'Nunito','system-ui',sans-serif",
                }}>
                  {baseLang==="ar"&&id.srcAr?id.srcAr:id.src}
                </div>

                {/* Expand indicator */}
                <div style={{
                  position:"absolute",right:20,top:"50%",transform:`translateY(-50%) rotate(${isOpen?180:0}deg)`,
                  fontSize:14,color:dk?"rgba(200,184,255,0.3)":"rgba(123,94,232,0.3)",
                  transition:"transform .2s",fontWeight:900,
                }}>⌄</div>
              </div>

              {/* Expanded — the story */}
              {isOpen && <div className="anim" style={{
                padding:"0 22px 22px",position:"relative",zIndex:1,
                borderTop:dk?"1px solid rgba(123,94,232,0.15)":"1px solid rgba(180,165,240,0.25)",
              }}>
                {/* Literal translation */}
                <div style={{paddingTop:16,marginBottom:16}}>
                  <div style={{fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:1,color:dk?"rgba(180,160,255,0.7)":"#6040B0",marginBottom:5,fontFamily:"'Nunito','system-ui',sans-serif"}}>
                    {t("idioms_word_for_word",baseLang)}
                  </div>
                  <div style={{fontSize:16,fontWeight:700,fontStyle:"italic",color:dk?"rgba(255,255,255,0.9)":"#1E1840",fontFamily:"'Nunito','system-ui',sans-serif",lineHeight:1.5}}>
                    {baseLang==="ar"&&id.litAr?id.litAr:id.lit}
                  </div>
                </div>

                {/* The story / note — teacher board style */}
                {id.note && <div style={{marginBottom:14}}>
                  <div style={{fontSize:11,fontWeight:800,textTransform:"uppercase",letterSpacing:1,color:dk?"rgba(180,160,255,0.7)":"#6040B0",marginBottom:5,fontFamily:"'Nunito','system-ui',sans-serif"}}>
                    {phrase ? t("idioms_how_used",baseLang) : t("idioms_the_story",baseLang)}
                  </div>
                  <div style={{
                    fontSize:15,fontWeight:600,lineHeight:1.8,
                    color:dk?"rgba(255,255,255,0.9)":"#1E1840",
                    fontFamily:"'Nunito','system-ui',sans-serif",
                  }}>
                    {(baseLang==="ar"&&id.noteAr?id.noteAr:id.note).split(/\.\s+/).map((sentence,si,arr)=>(
                      <span key={si}>{sentence}{si<arr.length-1?". ":""}</span>
                    ))}
                  </div>
                </div>}

                {/* Type badge */}
                <div style={{display:"flex",gap:8,alignItems:"center",marginTop:6}}>
                  <span style={{
                    fontSize:10,fontWeight:800,letterSpacing:0.8,textTransform:"uppercase",
                    color:dk?"rgba(200,184,255,0.7)":"#3A2870",
                    fontFamily:"'Quicksand','system-ui',sans-serif",
                    padding:"4px 12px",borderRadius:12,
                    background:dk?"rgba(123,94,232,0.15)":"rgba(200,190,255,0.4)",
                  }}>
                    {id.level} {phrase ? "common phrase" : "idiom"}
                  </span>
                </div>
              </div>}
            </div>
          );
        })}
      </div>

      {/* No results */}
      {idioms.length===0 && allIdioms.length>0 && <div style={{textAlign:"center",padding:"48px 20px"}}>
        <div style={{fontSize:16,fontWeight:800,color:dk?"rgba(200,184,255,0.4)":"var(--gray-400)",marginBottom:8,fontFamily:"'Quicksand','system-ui',sans-serif"}}>{t("idioms_no_matches",baseLang)}</div>
        <button onClick={()=>{setSearch("");setFilterLevel(null);}} style={{background:"none",border:"none",color:"var(--purple-accent-text)",fontWeight:800,fontSize:14,cursor:"pointer",fontFamily:"'Quicksand','system-ui',sans-serif"}}>{t("idioms_clear",baseLang)}</button>
      </div>}
    </div>
  );
}

export default IdiomsPage;
