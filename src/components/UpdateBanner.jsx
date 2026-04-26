import React, { useEffect, useState } from "react";

// Listens for service-worker activation messages and shows a "New version
// available" banner. User taps Reload → page hard-reloads against the
// freshly activated SW.
//
// Tracked in AUTONOMOUS_QUEUE under VISUAL-002 (PWA Phase 2).
function UpdateBanner(){
  const [show,setShow]=useState(false);

  useEffect(()=>{
    if(!('serviceWorker' in navigator))return;
    const onMsg=(e)=>{
      if(e.data&&e.data.type==='sw-updated'){
        // Suppress on first install (no prior cache version present).
        // We detect "first install" via a sessionStorage flag set in main.jsx
        // when registration happens for the first time.
        try{
          const isFirst=sessionStorage.getItem('vl_sw_first_install')==='true';
          if(isFirst){sessionStorage.removeItem('vl_sw_first_install');return;}
        }catch(err){}
        setShow(true);
      }
    };
    navigator.serviceWorker.addEventListener('message',onMsg);
    return()=>navigator.serviceWorker.removeEventListener('message',onMsg);
  },[]);

  if(!show)return null;

  const handleReload=()=>{
    // Tell the waiting SW to take over, then reload.
    if(navigator.serviceWorker.controller){
      navigator.serviceWorker.controller.postMessage({type:'SKIP_WAITING'});
    }
    window.location.reload();
  };

  return (
    <div role="status" aria-live="polite" style={{
      position:'fixed',left:'50%',transform:'translateX(-50%)',
      bottom:'calc(env(safe-area-inset-bottom, 0px) + 80px)',
      zIndex:9998,
      display:'flex',alignItems:'center',gap:10,
      padding:'10px 14px',borderRadius:14,
      background:'linear-gradient(135deg,#7B5EE8,#5840B8)',
      color:'white',fontSize:13,fontWeight:600,fontFamily:'inherit',
      boxShadow:'0 8px 28px rgba(40,30,90,0.35), inset 0 1px 0 rgba(255,255,255,0.18)',
      maxWidth:'calc(100vw - 32px)'
    }}>
      <span>✨ New version available</span>
      <button onClick={handleReload} style={{
        padding:'6px 12px',borderRadius:10,border:'none',
        background:'rgba(255,255,255,0.2)',color:'white',
        fontSize:12,fontWeight:700,cursor:'pointer',fontFamily:'inherit'
      }}>Reload</button>
      <button onClick={()=>setShow(false)} aria-label="Dismiss" style={{
        background:'transparent',border:'none',color:'white',
        fontSize:18,cursor:'pointer',padding:0,width:24,height:24,
        opacity:0.7,lineHeight:1
      }}>×</button>
    </div>
  );
}

export default UpdateBanner;
