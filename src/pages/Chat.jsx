import React, { useState, useEffect, useRef, useMemo } from "react";
import { LANGUAGES, LANG_META } from '../data/metadata.js';
import { t } from '../data/vocabulary.js';
import { UNITS } from '../utils.js';
import { AppIcon } from '../components/shared.jsx';
import CountryFlag from '../components/CountryFlag.jsx';
import { scrimProps } from '../a11y.js';

const CHAT_ENDPOINT="https://verumlingua-ai.xqkv62nnqq.workers.dev";

// Strip articles/particles from a trg word so vocab lists stay compact.
// "der Hund" → "Hund", "il libro" → "libro", "the dog" → "dog"
const ARTICLE_PREFIX=/^(der|die|das|den|dem|des|el|la|los|las|le|les|un|une|des|il|lo|gli|de|het|een|to)\s+/i;
function cleanTrg(w){return String(w||"").replace(ARTICLE_PREFIX,"").trim();}

// Pull up to N unique target-language vocab words from a unit's teach cards.
function unitVocab(unit, limit=80){
  if(!unit?.lessons)return [];
  const set=new Set();
  for(const l of unit.lessons){
    if(!l.steps)continue;
    for(const s of l.steps){
      if(s.type!=="teach")continue;
      const w=cleanTrg(s.trg||s.nl);
      if(w&&w.length>0)set.add(w);
      if(set.size>=limit)break;
    }
    if(set.size>=limit)break;
  }
  return [...set];
}

function Chat({lang,baseLang="en",user,addXp,addChat,learnedWords}){
  const L=LANGUAGES.find(l=>l.code===lang);
  const dk=document.documentElement.classList.contains("dark");
  const [msgs,setMsgs]=useState([]);
  const [input,setInput]=useState("");
  const [loading,setLoading]=useState(false);
  const [available,setAvailable]=useState(true);
  const [activeUnitId,setActiveUnitId]=useState(null);
  const [showUnitPicker,setShowUnitPicker]=useState(false);
  const endRef=useRef(null);

  // All units for current language, sorted
  const langUnits=useMemo(()=>{
    return UNITS.filter(u=>u.lang===lang).sort((a,b)=>(a.n||0)-(b.n||0));
  },[lang]);

  // Active unit object + its scoped vocabulary
  const activeUnit=useMemo(()=>langUnits.find(u=>u.n===activeUnitId)||null,[langUnits,activeUnitId]);
  const activeVocab=useMemo(()=>activeUnit?unitVocab(activeUnit,80):[],[activeUnit]);

  // Reset active unit when lang changes
  useEffect(()=>{setActiveUnitId(null);setMsgs([]);},[lang]);

  useEffect(()=>{endRef.current?.scrollIntoView({behavior:"smooth"});},[msgs,loading]);

  // Health check on mount — lightweight HEAD/GET to see if Worker responds
  useEffect(()=>{
    const ctrl=new AbortController();
    fetch(CHAT_ENDPOINT,{method:"GET",signal:ctrl.signal}).then(r=>{
      // Any response (even 405) means the worker is alive
      setAvailable(true);
    }).catch(()=>setAvailable(false));
    return()=>ctrl.abort();
  },[]);

  const sendMsg=async(text)=>{
    const content=(text||input).trim();
    if(!content||loading)return;
    const userMsg={role:"user",content};
    const next=[...msgs,userMsg];
    setMsgs(next);
    if(!text)setInput("");
    setLoading(true);
    try{
      const tgtName=LANG_META[lang]?.name||lang;
      // Build primer. If a unit is active, scope the tutor to that unit's vocab.
      let primerText;
      if(activeUnit&&activeVocab.length>0){
        const vocabList=activeVocab.join(", ");
        primerText=`[Tutor setup: The user is actively learning ${tgtName} and is currently practicing Unit ${activeUnit.n}: "${activeUnit.title}" (${activeUnit.level||"A1"}). Focus your conversation on these specific words from this unit: ${vocabList}. Use ONLY these words plus basic connective particles/articles when speaking ${tgtName}. If the user needs a word not in this list, gently steer back to unit vocabulary or note the gap. Mix ${tgtName} with their base language. Correct mistakes gently. Keep responses 2-4 sentences.]`;
      }else{
        primerText=`[Tutor setup: The user is actively learning ${tgtName}. Current page: chat. Help them practice ${tgtName} naturally. Mix ${tgtName} with their base language. Correct mistakes gently. Keep responses 2-4 sentences.]`;
      }
      const primer=[
        {role:"user",content:primerText},
        {role:"assistant",content:`Understood! I'll practice ${tgtName} with you naturally.`}
      ];
      const r=await fetch(CHAT_ENDPOINT,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({messages:[...primer,...next],context:{page:"chat",lang,langName:tgtName,unitId:activeUnit?.n||null,unitTitle:activeUnit?.title||null}})
      });
      const d=await r.json();
      const reply=d.content?.[0]?.text||(d.error?.message?`Error: ${d.error.message}`:t("chat_error",baseLang));
      setMsgs(m=>[...m,{role:"assistant",content:reply}]);
      addXp(3);addChat();
    }catch(err){
      setMsgs(m=>[...m,{role:"assistant",content:t("chat_conn_error",baseLang)}]);
    }
    setLoading(false);
  };

  // Quick-start prompts. If a unit is active, generate unit-scoped role-play prompts.
  const quickPrompts=useMemo(()=>{
    if(activeUnit){
      const u=activeUnit;
      return [
        {label:`Role-play using Unit ${u.n} vocabulary`,
         prompt:`Let's role-play a short scene using only the vocabulary from Unit ${u.n}: "${u.title}". You start.`},
        {label:`Quiz me on this unit`,
         prompt:`Quiz me on the vocabulary from Unit ${u.n}: "${u.title}". Ask me to translate one word at a time, give me feedback, and move on.`},
        {label:`Use these words in a sentence`,
         prompt:`Show me 3 example sentences using vocabulary from Unit ${u.n}: "${u.title}". Translate each one for me.`}
      ];
    }
    return [
      {label:t("chat_practice_btn",baseLang),
       prompt:`Help me practice basic ${L?.name||"language"} conversation.`},
      {label:t("chat_ask_btn",baseLang),
       prompt:`I have a question about ${L?.name||"grammar"}.`}
    ];
  },[activeUnit,L,baseLang]);

  return(
    <div className="anim" style={{display:"flex",flexDirection:"column",height:"calc(100dvh - 140px - env(safe-area-inset-bottom, 0px))",maxHeight:"calc(100dvh - 140px)"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12,flexShrink:0}}>
        <div>
          <h2 className="hd" style={{fontSize:22,fontWeight:800,display:"flex",alignItems:"center",gap:8}}><AppIcon name="robot" size={26}/> Verumius</h2>
          <p style={{color:"var(--gray-400)",fontSize:12}}>{t("chat_ai_partner",baseLang)} · {L?.native} <CountryFlag code={lang} size={14}/></p>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          {msgs.length>0&&(
            <button onClick={()=>setMsgs([])} aria-label="Clear chat" title="Clear chat history" style={{background:dk?"rgba(255,255,255,0.06)":"rgba(0,0,0,0.04)",border:"1px solid "+(dk?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.08)"),borderRadius:10,padding:"4px 10px",fontSize:11,fontWeight:600,cursor:"pointer",color:dk?"rgba(200,184,255,0.7)":"var(--gray-500)",fontFamily:"inherit"}}>Clear</button>
          )}
          <span className="badge badge-gold" style={{fontSize:11}}>+3 XP</span>
        </div>
      </div>

      {/* Unit-scope chip — shows active unit or a "Pick a unit" button */}
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10,flexShrink:0,flexWrap:"wrap"}}>
        {activeUnit?(
          <div style={{display:"flex",alignItems:"center",gap:6,padding:"6px 10px",borderRadius:14,background:dk?"rgba(123,94,232,0.18)":"rgba(123,94,232,0.10)",border:"1px solid rgba(123,94,232,0.35)",fontSize:12,fontWeight:600,color:dk?"#C0AEF8":"#5840B8"}}>
            <span style={{fontSize:14}}>{activeUnit.icon||"📚"}</span>
            <span>U{activeUnit.n}: {activeUnit.title}</span>
            <span style={{opacity:.7,fontSize:11}}>({activeVocab.length} words)</span>
            <button onClick={()=>{setActiveUnitId(null);setMsgs([]);}} title="Clear unit" style={{marginLeft:4,background:"transparent",border:"none",color:"inherit",cursor:"pointer",fontSize:14,padding:0,opacity:.7}}>×</button>
          </div>
        ):(
          <button onClick={()=>setShowUnitPicker(true)} style={{padding:"6px 12px",borderRadius:14,background:dk?"rgba(123,94,232,0.12)":"rgba(123,94,232,0.08)",border:"1px dashed rgba(123,94,232,0.4)",fontSize:12,fontWeight:600,color:dk?"#C0AEF8":"#5840B8",cursor:"pointer",display:"flex",alignItems:"center",gap:6}}>
            <AppIcon name="brain" size={14}/> Practice a specific unit
          </button>
        )}
      </div>

      {/* Unit picker modal */}
      {showUnitPicker&&(
        <div {...scrimProps(()=>setShowUnitPicker(false))} style={{position:"fixed",inset:0,background:"rgba(0,0,0,0.55)",zIndex:9999,display:"flex",alignItems:"flex-end",justifyContent:"center"}}>
          <div role="dialog" aria-modal="true" aria-label="Pick a unit to practice" onClick={e=>e.stopPropagation()} style={{width:"100%",maxWidth:480,maxHeight:"75vh",background:dk?"#1E1A37":"white",borderRadius:"20px 20px 0 0",padding:"16px 16px 20px",overflowY:"auto",WebkitOverflowScrolling:"touch"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
              <h3 style={{fontSize:16,fontWeight:800,color:dk?"#E8E5F4":"#2A1A4E",fontFamily:"'Quicksand',sans-serif"}}>Pick a unit to practice</h3>
              <button onClick={()=>setShowUnitPicker(false)} style={{background:"transparent",border:"none",fontSize:22,cursor:"pointer",color:dk?"#C0AEF8":"#5840B8",lineHeight:1,padding:0,width:28,height:28}}>×</button>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr",gap:6}}>
              {langUnits.length===0&&<p style={{color:"var(--gray-400)",fontSize:13,padding:"24px 8px",textAlign:"center"}}>No units available for this language yet.</p>}
              {langUnits.map(u=>{
                const wc=unitVocab(u,200).length;
                return (
                  <button key={u.n} onClick={()=>{setActiveUnitId(u.n);setShowUnitPicker(false);setMsgs([]);}}
                    style={{display:"flex",alignItems:"center",gap:10,padding:"10px 12px",borderRadius:12,background:dk?"rgba(123,94,232,0.10)":"rgba(248,246,255,0.85)",border:"1px solid "+(dk?"rgba(123,94,232,0.25)":"rgba(200,190,240,0.5)"),cursor:"pointer",textAlign:"left",fontSize:13,color:dk?"#E8E5F4":"#2A1A4E",fontFamily:"inherit"}}>
                    <span style={{fontSize:18,flexShrink:0}}>{u.icon||"📚"}</span>
                    <span style={{flex:1,fontWeight:600}}>U{u.n}: {u.title}</span>
                    <span style={{fontSize:10,padding:"2px 6px",borderRadius:8,background:dk?"rgba(255,255,255,0.08)":"rgba(0,0,0,0.06)",fontWeight:700,opacity:.7}}>{u.level||"A1"}</span>
                    <span style={{fontSize:10,opacity:.6}}>{wc}w</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div style={{flex:1,overflow:"auto",borderRadius:20,background:dk?"rgba(30,26,55,0.6)":"rgba(248,246,255,0.7)",border:dk?"1.5px solid rgba(123,94,232,0.2)":"1.5px solid rgba(200,190,240,0.4)",padding:16,display:"flex",flexDirection:"column",gap:10,WebkitOverflowScrolling:"touch",overscrollBehavior:"contain"}}>
        {msgs.length===0&&!loading&&(
          <div style={{textAlign:"center",padding:"28px 16px",flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <AppIcon name="robot" size={48}/>
            {available?<>
              <h3 style={{fontFamily:"'Quicksand',sans-serif",fontWeight:800,fontSize:18,color:"var(--gray-700)",margin:"12px 0 8px"}}>{t("chat_greeting",baseLang)}</h3>
              <p style={{color:"var(--gray-400)",fontSize:13,marginBottom:16,maxWidth:300}}>{activeUnit?`Practicing ${activeVocab.length} words from "${activeUnit.title}". I'll only use these in ${L?.name||""}.`:t("chat_intro",baseLang).replace("{0}",L?.name||"languages")}</p>
              <div style={{display:"flex",flexDirection:"column",gap:8,width:"100%",maxWidth:320}}>
                {quickPrompts.map((qp,i)=>(
                  <button key={i} className="btn btn-outline" style={{fontSize:13,padding:"10px 16px",borderRadius:14,textAlign:"left"}} onClick={()=>sendMsg(qp.prompt)}>{qp.label}</button>
                ))}
              </div>
            </>:<>
              <h3 style={{fontFamily:"'Quicksand',sans-serif",fontWeight:800,fontSize:18,color:"var(--gray-500)",margin:"12px 0 8px"}}>Verumius</h3>
              <p style={{color:"var(--gray-400)",fontSize:13,maxWidth:280}}>{t("chat_unavailable",baseLang)}</p>
            </>}
          </div>
        )}
        {msgs.map((m,i)=>(
          <div key={i} className={m.role==="assistant"?"vr-ai":"vr-user"} style={{maxWidth:"85%"}}>
            {m.content}
          </div>
        ))}
        {loading&&<div className="vr-typing"><div className="vr-dot"/><div className="vr-dot"/><div className="vr-dot"/></div>}
        <div ref={endRef}/>
      </div>

      <div style={{display:"flex",gap:8,paddingTop:10,flexShrink:0}}>
        <input aria-label={`Message Verumius in ${L?.name||""}`} value={input} onChange={e=>setInput(e.target.value)}
          onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendMsg();}}}
          placeholder={`${t("le_type_in",baseLang)} ${L?.name||""}...`}
          disabled={loading}
          style={{flex:1,padding:"12px 16px",borderRadius:16,border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(200,190,240,0.5)",background:dk?"rgba(30,26,55,0.8)":"white",fontSize:16,fontFamily:"inherit",outline:"none",color:"var(--gray-700)",WebkitAppearance:"none"}}/>
        <button aria-label="Send message" onClick={()=>sendMsg()} disabled={!input.trim()||loading}
          style={{width:44,height:44,borderRadius:14,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",background:input.trim()?"linear-gradient(135deg,#7B5EE8,#6040C0)":"var(--gray-200)",color:"white",transition:"all .15s",opacity:loading?0.5:1}}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="white"><path d="M1 15L8 1L15 15L8 11L1 15Z"/></svg>
        </button>
      </div>
    </div>
  );
}

export default Chat;
