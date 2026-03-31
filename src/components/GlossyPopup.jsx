import React, { useRef, useEffect } from "react";

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

export default GlossyPopup;
