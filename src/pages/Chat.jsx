import React, { useState, useEffect, useRef } from "react";
import { LANGUAGES, LANG_META } from '../data/metadata.js';
import { t } from '../data/vocabulary.js';
import { AppIcon } from '../components/shared.jsx';
import CountryFlag from '../components/CountryFlag.jsx';

const CHAT_ENDPOINT="https://verumlingua-ai.xqkv62nnqq.workers.dev";

function Chat({lang,baseLang="en",user,addXp,addChat,learnedWords}){
  const L=LANGUAGES.find(l=>l.code===lang);
  const dk=document.documentElement.classList.contains("dark");
  const [msgs,setMsgs]=useState([]);
  const [input,setInput]=useState("");
  const [loading,setLoading]=useState(false);
  const [available,setAvailable]=useState(true);
  const endRef=useRef(null);

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
      const primer=[
        {role:"user",content:`[Tutor setup: The user is actively learning ${tgtName}. Current page: chat. Help them practice ${tgtName} naturally. Mix ${tgtName} with their base language. Correct mistakes gently. Keep responses 2-4 sentences.]`},
        {role:"assistant",content:`Understood! I'll practice ${tgtName} with you naturally.`}
      ];
      const r=await fetch(CHAT_ENDPOINT,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({messages:[...primer,...next],context:{page:"chat",lang,langName:tgtName}})
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

  return(
    <div className="anim" style={{display:"flex",flexDirection:"column",height:"calc(100dvh - 140px - env(safe-area-inset-bottom, 0px))",maxHeight:"calc(100dvh - 140px)"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12,flexShrink:0}}>
        <div>
          <h2 className="hd" style={{fontSize:22,fontWeight:800,display:"flex",alignItems:"center",gap:8}}><AppIcon name="robot" size={26}/> Verumius</h2>
          <p style={{color:"var(--gray-400)",fontSize:12}}>{t("chat_ai_partner",baseLang)} · {L?.native} <CountryFlag code={lang} size={14}/></p>
        </div>
        <span className="badge badge-gold" style={{fontSize:11}}>+3 XP</span>
      </div>

      <div style={{flex:1,overflow:"auto",borderRadius:20,background:dk?"rgba(30,26,55,0.6)":"rgba(248,246,255,0.7)",border:dk?"1.5px solid rgba(123,94,232,0.2)":"1.5px solid rgba(200,190,240,0.4)",padding:16,display:"flex",flexDirection:"column",gap:10,WebkitOverflowScrolling:"touch",overscrollBehavior:"contain"}}>
        {msgs.length===0&&!loading&&(
          <div style={{textAlign:"center",padding:"28px 16px",flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <AppIcon name="robot" size={48}/>
            {available?<>
              <h3 style={{fontFamily:"'Quicksand',sans-serif",fontWeight:800,fontSize:18,color:"var(--gray-700)",margin:"12px 0 8px"}}>{t("chat_greeting",baseLang)}</h3>
              <p style={{color:"var(--gray-400)",fontSize:13,marginBottom:16,maxWidth:280}}>{t("chat_intro",baseLang).replace("{0}",L?.name||"languages")}</p>
              <div style={{display:"flex",flexDirection:"column",gap:8,width:"100%",maxWidth:280}}>
                <button className="btn btn-outline" style={{fontSize:13,padding:"10px 16px",borderRadius:14}} onClick={()=>sendMsg(`Help me practice basic ${L?.name||"language"} conversation.`)}>{t("chat_practice_btn",baseLang)}</button>
                <button className="btn btn-outline" style={{fontSize:13,padding:"10px 16px",borderRadius:14}} onClick={()=>sendMsg(`I have a question about ${L?.name||"grammar"}.`)}>{t("chat_ask_btn",baseLang)}</button>
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
        <input value={input} onChange={e=>setInput(e.target.value)}
          onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendMsg();}}}
          placeholder={`${t("le_type_in",baseLang)} ${L?.name||""}...`}
          disabled={loading}
          style={{flex:1,padding:"12px 16px",borderRadius:16,border:dk?"1.5px solid rgba(123,94,232,0.3)":"1.5px solid rgba(200,190,240,0.5)",background:dk?"rgba(30,26,55,0.8)":"white",fontSize:16,fontFamily:"inherit",outline:"none",color:"var(--gray-700)",WebkitAppearance:"none"}}/>
        <button onClick={()=>sendMsg()} disabled={!input.trim()||loading}
          style={{width:44,height:44,borderRadius:14,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",background:input.trim()?"linear-gradient(135deg,#7B5EE8,#6040C0)":"var(--gray-200)",color:"white",transition:"all .15s",opacity:loading?0.5:1}}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="white"><path d="M1 15L8 1L15 15L8 11L1 15Z"/></svg>
        </button>
      </div>
    </div>
  );
}

export default Chat;
