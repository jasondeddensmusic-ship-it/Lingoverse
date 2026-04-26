import React, { useEffect, useState } from "react";

// Captures the browser's beforeinstallprompt event and surfaces a friendly
// "Install VerumLingua" banner on supported devices (Chrome/Edge desktop +
// Android). On iOS Safari there's no event; we show a one-time hint with
// "Add to Home Screen" instructions instead.
//
// Suppression: dismissed prompt is remembered for 30 days via localStorage.
// Tracked in AUTONOMOUS_QUEUE under VISUAL-002 (PWA).
function InstallPrompt(){
  const [deferredPrompt,setDeferredPrompt]=useState(null);
  const [show,setShow]=useState(false);
  const [iosHint,setIosHint]=useState(false);

  useEffect(()=>{
    // Don't pester users who dismissed recently
    let dismissedAt=0;
    try{dismissedAt=parseInt(localStorage.getItem('vl_install_dismissed_at')||'0',10);}catch(e){}
    const THIRTY_DAYS=30*24*3600*1000;
    if(dismissedAt&&Date.now()-dismissedAt<THIRTY_DAYS)return;

    // Already installed? (display-mode standalone)
    if(window.matchMedia&&window.matchMedia('(display-mode: standalone)').matches)return;
    if(window.navigator&&window.navigator.standalone)return; // iOS

    // Chrome/Edge/Android — beforeinstallprompt
    const onBeforeInstall=(e)=>{
      e.preventDefault();
      setDeferredPrompt(e);
      setShow(true);
    };
    window.addEventListener('beforeinstallprompt',onBeforeInstall);

    // iOS Safari — no event; detect via UA + show hint after 30s of use
    const ua=navigator.userAgent||'';
    const isIos=/iPhone|iPad|iPod/i.test(ua);
    const isSafari=/Safari/i.test(ua)&&!/CriOS|FxiOS/i.test(ua);
    if(isIos&&isSafari){
      const t=setTimeout(()=>setIosHint(true),30_000);
      return()=>{clearTimeout(t);window.removeEventListener('beforeinstallprompt',onBeforeInstall);};
    }
    return()=>window.removeEventListener('beforeinstallprompt',onBeforeInstall);
  },[]);

  const dismiss=()=>{
    try{localStorage.setItem('vl_install_dismissed_at',String(Date.now()));}catch(e){}
    setShow(false);setIosHint(false);
  };

  const install=async()=>{
    if(!deferredPrompt)return;
    deferredPrompt.prompt();
    try{
      const choice=await deferredPrompt.userChoice;
      if(choice.outcome==='accepted'){setShow(false);}
      else{dismiss();}
    }catch(e){dismiss();}
  };

  if(!show&&!iosHint)return null;

  const banner=(
    <div role="region" aria-live="polite" style={{
      position:'fixed',left:'50%',transform:'translateX(-50%)',
      bottom:'calc(env(safe-area-inset-bottom, 0px) + 80px)',
      zIndex:9997,
      display:'flex',alignItems:'center',gap:10,
      padding:'12px 14px',borderRadius:16,
      background:'linear-gradient(135deg,#7B5EE8,#5840B8)',
      color:'white',fontSize:13,fontWeight:600,fontFamily:'inherit',
      boxShadow:'0 8px 28px rgba(40,30,90,0.35), inset 0 1px 0 rgba(255,255,255,0.18)',
      maxWidth:'calc(100vw - 32px)'
    }}>
      <span style={{fontSize:16}}>📱</span>
      {show?(
        <>
          <span>Install VerumLingua for offline access</span>
          <button onClick={install} style={{
            padding:'6px 12px',borderRadius:10,border:'none',
            background:'rgba(255,255,255,0.22)',color:'white',
            fontSize:12,fontWeight:700,cursor:'pointer',fontFamily:'inherit'
          }}>Install</button>
        </>
      ):(
        <span style={{maxWidth:240,lineHeight:1.4,fontSize:12}}>
          Add VerumLingua to your home screen: tap the share icon, then "Add to Home Screen".
        </span>
      )}
      <button onClick={dismiss} aria-label="Dismiss install prompt" style={{
        background:'transparent',border:'none',color:'white',
        fontSize:18,cursor:'pointer',padding:0,width:24,height:24,
        opacity:0.7,lineHeight:1
      }}>×</button>
    </div>
  );
  return banner;
}

export default InstallPrompt;
