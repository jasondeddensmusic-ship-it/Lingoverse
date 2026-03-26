import { useState, useEffect, useRef, useCallback } from "react";

const KB_FOCUS_SEL="button:not(:disabled),.card[style*=cursor],.card[onclick],.lang-card,.topnav-item,.topnav-logo-wrap,.btn,.ach-card,a[href],select,[role=button]";

function useFocusNav(containerRef,onBack,{selector=KB_FOCUS_SEL,enabled=true}={}){
  const [kbIdx,setKbIdx]=useState(-1);
  const kbActive=useRef(false);
  const kbIdxRef=useRef(-1); // mirror for post-render apply

  // Apply .kb-focus AFTER React re-render (so React can't strip it)
  useEffect(()=>{
    document.querySelectorAll(".kb-focus").forEach(el=>el.classList.remove("kb-focus"));
    if(kbIdx<0)return;
    const root=containerRef?.current||document.body;
    const els=Array.from(root.querySelectorAll(selector)).filter(el=>{
      const r=el.getBoundingClientRect();
      return r.width>0&&r.height>0;
    });
    if(kbIdx>=0&&kbIdx<els.length){
      els[kbIdx].classList.add("kb-focus");
      const r=els[kbIdx].getBoundingClientRect();
      if(r.top<70||r.bottom>window.innerHeight)
        els[kbIdx].scrollIntoView?.({block:"nearest",behavior:"smooth"});
    }
  },[kbIdx]);

  useEffect(()=>{
    if(!enabled)return;
    const getEls=()=>{
      const root=containerRef?.current||document.body;
      return Array.from(root.querySelectorAll(selector)).filter(el=>{
        const r=el.getBoundingClientRect();
        return r.width>0&&r.height>0;
      });
    };

    // Group elements into visual rows by Y center (±20px = same row)
    const getRows=(els)=>{
      const items=els.map((el,i)=>{
        const r=el.getBoundingClientRect();
        return{i,cx:r.left+r.width/2,cy:r.top+r.height/2};
      });
      // Sort by Y then X
      items.sort((a,b)=>a.cy-b.cy||a.cx-b.cx);
      const rows=[];
      let curRow=[items[0]];
      for(let k=1;k<items.length;k++){
        if(Math.abs(items[k].cy-curRow[0].cy)<25){
          curRow.push(items[k]);
        }else{
          curRow.sort((a,b)=>a.cx-b.cx);
          rows.push(curRow);
          curRow=[items[k]];
        }
      }
      if(curRow.length)rows.push(curRow.sort((a,b)=>a.cx-b.cx));
      return rows;
    };

    const findInRows=(els,curIdx,dir)=>{
      if(!els.length)return null;
      const rows=getRows(els);
      // Find which row/col current element is in
      let curR=-1,curC=-1;
      for(let r=0;r<rows.length;r++){
        for(let c=0;c<rows[r].length;c++){
          if(rows[r][c].i===curIdx){curR=r;curC=c;break;}
        }
        if(curR>=0)break;
      }
      if(curR<0)return null;

      if(dir==="right"){
        if(curC<rows[curR].length-1)return rows[curR][curC+1].i;
        if(curR<rows.length-1)return rows[curR+1][0].i;
        return null; // at boundary — let browser scroll
      }
      if(dir==="left"){
        if(curC>0)return rows[curR][curC-1].i;
        if(curR>0)return rows[curR-1][rows[curR-1].length-1].i;
        return null;
      }
      if(dir==="down"){
        if(curR>=rows.length-1)return null; // at last row — scroll
        const nextR=curR+1;
        const cx=rows[curR][curC].cx;
        let best=0,bestDx=Infinity;
        for(let c=0;c<rows[nextR].length;c++){
          const dx=Math.abs(rows[nextR][c].cx-cx);
          if(dx<bestDx){bestDx=dx;best=c;}
        }
        return rows[nextR][best].i;
      }
      if(dir==="up"){
        if(curR<=0)return null; // at first row — scroll
        const prevR=curR-1;
        const cx=rows[curR][curC].cx;
        let best=0,bestDx=Infinity;
        for(let c=0;c<rows[prevR].length;c++){
          const dx=Math.abs(rows[prevR][c].cx-cx);
          if(dx<bestDx){bestDx=dx;best=c;}
        }
        return rows[prevR][best].i;
      }
      return null;
    };

    const keyHandler=(e)=>{
      if(e.defaultPrevented)return;
      // Only block on pages with their own arrow handling (lesson engine)
      if(document.querySelector("[data-kb-owner='lesson'],[data-kb-owner='lesson-done']"))return;
      const tag=document.activeElement?.tagName;
      if(tag==="INPUT"||tag==="TEXTAREA"||tag==="SELECT")return;
      const els=getEls();
      if(!els.length)return;

      const dirMap={ArrowDown:"down",ArrowUp:"up",ArrowLeft:"left",ArrowRight:"right"};
      const dir=dirMap[e.code];
      if(dir){
        kbActive.current=true;
        setKbIdx(prev=>{
          let next;
          if(prev<0||prev>=els.length){
            // First press: pick starting element
            if(dir==="up"||dir==="left"){
              next=els.length-1;
            }else{
              next=els.findIndex(el=>el.getBoundingClientRect().top>70);
              if(next<0)next=0;
            }
          }else{
            next=findInRows(els,prev,dir);
          }
          if(next===null){
            // At boundary — DON'T preventDefault, let browser scroll
            return prev;
          }
          e.preventDefault();
          UISounds.tick();
          return next;
        });
        return;
      }
      if(e.code==="Space"||e.code==="Enter"){
        if(!kbActive.current)return;
        const els2=getEls();
        setKbIdx(cur=>{
          if(cur>=0&&cur<els2.length){
            e.preventDefault();UISounds.click();
            els2[cur].click();
          }
          return cur;
        });
        return;
      }
    };

    // Mouse moves → immediately clear keyboard selection
    const mouseHandler=()=>{
      if(kbActive.current){
        kbActive.current=false;
        setKbIdx(-1);
        document.querySelectorAll(".kb-focus").forEach(el=>el.classList.remove("kb-focus"));
      }
    };

    window.addEventListener("keydown",keyHandler);
    window.addEventListener("mousemove",mouseHandler,{passive:true});
    return ()=>{
      window.removeEventListener("keydown",keyHandler);
      window.removeEventListener("mousemove",mouseHandler);
      document.querySelectorAll(".kb-focus").forEach(el=>el.classList.remove("kb-focus"));
    };
  },[enabled,onBack]);

  useEffect(()=>()=>{setKbIdx(-1);document.querySelectorAll(".kb-focus").forEach(el=>el.classList.remove("kb-focus"));},[]);

  return kbIdx;
}

export { KB_FOCUS_SEL, useFocusNav };
