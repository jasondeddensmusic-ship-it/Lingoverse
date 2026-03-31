import React, { useEffect } from "react";

export function Toast({message,icon,onDone}){
  useEffect(()=>{const t=setTimeout(onDone,3000);return()=>clearTimeout(t)},[]);
  return <div className="toast"><span style={{fontSize:22}}>{icon}</span><span className="hd" style={{fontWeight:700,fontSize:14}}>{message}</span></div>;
}

export function XpPop({amount,x,y}){
  return <div style={{position:"fixed",left:x,top:y,zIndex:9999,pointerEvents:"none",animation:"pop 1s ease forwards",fontFamily:"'DM Sans',sans-serif",fontWeight:800,fontSize:18,color:"var(--gold-dark)",textShadow:"0 0 8px rgba(245,166,35,0.4)"}}>+{amount} XP</div>;
}
