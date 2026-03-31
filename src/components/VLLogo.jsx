import React from "react";

function VLLogo({size=28,glow=false}){
  // VL constellation: star points connected by lines
  // V shape: top-left -> bottom-center -> top-right
  // L shape: top -> bottom -> right
  const s=size;
  const pts=[
    // V: 3 points
    {x:0,y:0},{x:s*0.22,y:s*0.55},{x:s*0.44,y:0},
    // L: 3 points
    {x:s*0.52,y:0},{x:s*0.52,y:s*0.55},{x:s*0.85,y:s*0.55}
  ];
  const lines=[[0,1],[1,2],[3,4],[4,5]]; // V lines + L lines
  return(
    <svg width={s} height={s*0.6} viewBox={`-2 -2 ${s+4} ${s*0.6+4}`} style={{display:"inline-block",verticalAlign:"middle"}}>
      {glow&&<defs>
        <filter id="vlglow"><feGaussianBlur stdDeviation="2" result="g"/><feMerge><feMergeNode in="g"/><feMergeNode in="g"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>}
      <g filter={glow?"url(#vlglow)":"none"} opacity="0.95">
        {lines.map(([a,b],i)=>(
          <line key={i} x1={pts[a].x} y1={pts[a].y} x2={pts[b].x} y2={pts[b].y}
            stroke="rgba(184,168,250,0.6)" strokeWidth="1.2" strokeLinecap="round"/>
        ))}
        {pts.map((p,i)=>(
          <circle key={i} cx={p.x} cy={p.y} r={1.8} fill="rgba(200,184,255,0.9)">
            <animate attributeName="opacity" values="0.6;1;0.6" dur={`${1.5+i*0.3}s`} repeatCount="indefinite"/>
          </circle>
        ))}
      </g>
    </svg>
  );
}

export default VLLogo;
