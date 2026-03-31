import React, { useRef, useEffect } from "react";

function NebulaBackground(){
  const canvasRef=useRef(null);
  const dataRef=useRef(null);
  const frameRef=useRef(null);

  useEffect(()=>{
    const canvas=canvasRef.current;
    if(!canvas)return;
    const ctx=canvas.getContext("2d");
    const dpr=window.devicePixelRatio||1;

    // === SIMPLEX NOISE (compact implementation) ===
    const F2=0.5*(Math.sqrt(3)-1),G2=(3-Math.sqrt(3))/6;
    const pp=new Uint8Array(512);const perm=new Uint8Array(512);
    const rng=()=>{let s=1;return()=>{s=(s*16807)%2147483647;return(s-1)/2147483646;}};
    const rr=rng();for(let i=0;i<256;i++)pp[i]=i;
    for(let i=255;i>0;i--){const j=Math.floor(rr()*(i+1));[pp[i],pp[j]]=[pp[j],pp[i]];}
    for(let i=0;i<512;i++)perm[i]=pp[i&255];
    const grad2=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]];
    const dot2=(g,x,y)=>g[0]*x+g[1]*y;
    const noise2=(x,y)=>{
      const s=(x+y)*F2;const i=Math.floor(x+s),j=Math.floor(y+s);
      const t=(i+j)*G2;const X0=i-t,Y0=j-t;const x0=x-X0,y0=y-Y0;
      const i1=x0>y0?1:0,j1=x0>y0?0:1;
      const x1=x0-i1+G2,y1=y0-j1+G2,x2=x0-1+2*G2,y2=y0-1+2*G2;
      const ii=i&255,jj=j&255;
      let n0=0,n1=0,n2=0;
      let t0=0.5-x0*x0-y0*y0;if(t0>0){t0*=t0;const gi=perm[ii+perm[jj]]%8;n0=t0*t0*dot2(grad2[gi],x0,y0);}
      let t1=0.5-x1*x1-y1*y1;if(t1>0){t1*=t1;const gi=perm[ii+i1+perm[jj+j1]]%8;n1=t1*t1*dot2(grad2[gi],x1,y1);}
      let t2=0.5-x2*x2-y2*y2;if(t2>0){t2*=t2;const gi=perm[ii+1+perm[jj+1]]%8;n2=t2*t2*dot2(grad2[gi],x2,y2);}
      return 70*(n0+n1+n2);
    };
    // fBM with domain warping for organic nebula shapes
    const fbm=(x,y,oct,lac,pers)=>{
      let v=0,a=1,f=1,mx=0;
      for(let i=0;i<oct;i++){v+=a*noise2(x*f,y*f);mx+=a;f*=lac;a*=pers;}
      return v/mx;
    };
    // Domain warping: distort coordinates using noise to create flowing organic shapes
    const warpedFbm=(x,y,scale)=>{
      const wx=fbm(x+0.0,y+0.0,3,2.0,0.5)*4.0;
      const wy=fbm(x+5.2,y+1.3,3,2.0,0.5)*4.0;
      return fbm((x+wx)*scale,(y+wy)*scale,5,2.2,0.45);
    };

    const resize=()=>{
      canvas.width=window.innerWidth*dpr;
      canvas.height=window.innerHeight*dpr;
      canvas.style.width=window.innerWidth+"px";
      canvas.style.height=window.innerHeight+"px";
      ctx.setTransform(dpr,0,0,dpr,0,0);
      dataRef.current=null;
    };
    resize();
    window.addEventListener("resize",resize);

    const init=()=>{
      const w=window.innerWidth,h=window.innerHeight;
      // Pre-render nebula cloud textures at 1/3 resolution
      const NW=Math.floor(w/3),NH=Math.floor(h/3);

      // === RIVER PATH MASK (3D perspective S-curve) ===
      // Path: top-left → curves right → curves left → bottom-center
      // Wider and brighter near bottom (close), narrow and faint at top (far)
      const riverMask=new Float32Array(NW*NH);
      const pixScale=0.007;
      // Golden-ratio S-curve path through control points
      // Phi-inspired segment lengths: 38.2% / 23.6% / 38.2%
      const pathX=(t)=>{
        // bottom-left(0.10) → right(0.85) → left(0.15) → top-right corner(0.95)
        const h=(a,b,s)=>a+(b-a)*s*s*(3-2*s); // smoothstep
        if(t<0.382){return h(0.10,0.85,t/0.382);}
        else if(t<0.618){return h(0.85,0.15,(t-0.382)/0.236);}
        else{return h(0.15,0.95,(t-0.618)/0.382);}
      };
      // Build THREE masks: core (electric highlights), main (river), outer (blown-out halo)
      const coreMask=new Float32Array(NW*NH);
      const outerMask=new Float32Array(NW*NH);
      for(let py=0;py<NH;py++){
        for(let px=0;px<NW;px++){
          const nx=px*pixScale,ny=py*pixScale;
          const normX=px/NW, normY=py/NH;
          const depth=normY;
          const wobble=0.04*fbm(nx*0.8,ny*1.2,3,2.0,0.5);
          const riverCenter=pathX(1.0-normY)+wobble;
          const dist=Math.abs(normX-riverCenter);
          // === MAIN RIVER (thick, nearly as wide at far end) ===
          const riverWidth=0.15+depth*0.35; // 15% at top → 50% at bottom (much thicker!)
          const depthBright=0.4+depth*0.6; // 40% at far → 100% at close (less aggressive fade)
          const inRiver=Math.max(0,1.0-Math.pow(dist/riverWidth,2.2));
          // Branch
          const branchCenter=pathX(1.0-Math.min(1,normY+0.15))+0.12*(normY>0.5?1:-1)+0.03*fbm(nx*0.9+5,ny*1.0+3,3,2.0,0.5);
          const dist2=Math.abs(normX-branchCenter);
          const branchWidth=0.05+depth*0.12;
          const inBranch=Math.max(0,1.0-Math.pow(dist2/branchWidth,2.0))*0.25;
          const combined=Math.min(1,(inRiver+inBranch)*depthBright);
          riverMask[py*NW+px]=combined*combined*(3-2*combined);
          // === ELECTRIC CORE (tight hot center) ===
          const coreWidth=riverWidth*0.35; // much narrower than river
          const inCore=Math.max(0,1.0-Math.pow(dist/coreWidth,3.0));
          coreMask[py*NW+px]=inCore*inCore*depthBright;
          // === OUTER HALO (blown-out soft glow extending far beyond river) ===
          const haloWidth=riverWidth*2.8; // much wider than river
          const inHalo=Math.max(0,1.0-Math.pow(dist/haloWidth,1.5));
          outerMask[py*NW+px]=inHalo*depthBright*0.35; // subtle
        }
      }

      // Cloud layers: main nebula body
      const cloudLayers=[
        {dkR:130,dkG:30,dkB:210, ltR:120,ltG:60,ltB:180,  scale:1.0, ox:0,  oy:0,   thresh:0.08,opDk:0.7, opLt:0.55,pw:1.4},
        {dkR:210,dkG:40,dkB:170, ltR:170,ltG:80,ltB:170,  scale:1.4, ox:100,oy:50,  thresh:0.12,opDk:0.5, opLt:0.4, pw:1.5},
        {dkR:50,dkG:25,dkB:170,  ltR:80,ltG:50,ltB:150,   scale:1.2, ox:200,oy:150, thresh:0.10,opDk:0.4, opLt:0.35,pw:1.3},
        {dkR:255,dkG:50,dkB:190, ltR:190,ltG:80,ltB:190,  scale:1.8, ox:300,oy:75,  thresh:0.18,opDk:0.3, opLt:0.3, pw:1.6},
        {dkR:160,dkG:70,dkB:255, ltR:130,ltG:60,ltB:190,  scale:2.2, ox:50, oy:200, thresh:0.20,opDk:0.2, opLt:0.22,pw:1.8},
      ];
      const mkTex=(NW,NH,r,g,b,layer,mask)=>{
        const oc=document.createElement("canvas");oc.width=NW;oc.height=NH;
        const octx=oc.getContext("2d");
        const img=octx.createImageData(NW,NH);
        const d=img.data;
        for(let py=0;py<NH;py++){
          for(let px=0;px<NW;px++){
            const nx=(px+layer.ox)*pixScale;
            const ny=(py+layer.oy)*pixScale;
            const v=warpedFbm(nx,ny,layer.scale);
            const raw=(v+1)/2;
            const intensity=Math.max(0,raw-layer.thresh)/(1-layer.thresh);
            const curved=Math.pow(intensity,layer.pw);
            const m=mask[py*NW+px];
            const idx=(py*NW+px)*4;
            d[idx]=r;d[idx+1]=g;d[idx+2]=b;
            d[idx+3]=Math.floor(curved*m*255);
          }
        }
        octx.putImageData(img,0,0);
        return oc;
      };
      // Main cloud canvases (river mask)
      const cloudCanvases=cloudLayers.map(layer=>({
        dk:mkTex(NW,NH,layer.dkR,layer.dkG,layer.dkB,layer,riverMask),
        lt:mkTex(NW,NH,layer.ltR,layer.ltG,layer.ltB,layer,riverMask),
        layer
      }));
      // Electric core highlights (bright white/pink in center)
      const coreLayer={scale:1.5,ox:50,oy:25,thresh:0.15,pw:2.0};
      const coreDk=mkTex(NW,NH,255,200,255,coreLayer,coreMask); // white-pink hot
      const coreLt=mkTex(NW,NH,180,120,220,coreLayer,coreMask); // vivid purple
      // Outer halo (soft blown-out glow)
      const haloLayer={scale:0.6,ox:0,oy:0,thresh:0.0,pw:0.8};
      const haloDk=mkTex(NW,NH,100,40,180,haloLayer,outerMask); // soft purple
      const haloLt=mkTex(NW,NH,140,90,190,haloLayer,outerMask); // lavender

      // Stars
      const starCount=Math.min(350,Math.floor((w*h)/3000));
      const stars=[];
      // Light mode glitter colors: gold, silver, pink, lavender, rose
      const glitterColors=[[220,180,50],[200,200,220],[220,120,180],[160,130,220],[200,100,140]];
      for(let i=0;i<starCount;i++){
        const isBright=Math.random()<0.12;
        const gc=glitterColors[Math.floor(Math.random()*glitterColors.length)];
        stars.push({
          x:Math.random()*w, y:Math.random()*h,
          size:isBright?(2+Math.random()*2):(0.8+Math.random()*1.8),
          baseOpacity:isBright?(0.7+Math.random()*0.3):(0.35+Math.random()*0.45),
          speed:0.5+Math.random()*2.0,
          speed2:0.8+Math.random()*2.5, // second frequency for sparkle
          offset:Math.random()*Math.PI*2,
          bright:isBright,
          gc, // glitter color for light mode
          dr:isBright?255:200+Math.floor(Math.random()*55),
          dg:isBright?240:200+Math.floor(Math.random()*55),
          db:isBright?255:220+Math.floor(Math.random()*35),
        });
      }
      return {cloudCanvases,coreDk,coreLt,haloDk,haloLt,stars,NW,NH};
    };

    let lastTime=0;
    const animate=(time)=>{
      if(!dataRef.current)dataRef.current=init();
      if(time-lastTime<50){frameRef.current=requestAnimationFrame(animate);return;}
      lastTime=time;

      const w=window.innerWidth,h=window.innerHeight;
      const dk=document.documentElement.classList.contains("dark");
      const t=time*0.001;
      ctx.clearRect(0,0,w,h);

      const {cloudCanvases,coreDk,coreLt,haloDk,haloLt,stars}=dataRef.current;
      const comp=dk?"lighter":"source-over";

      // === 1. OUTER HALO (blown-out soft glow around the perimeter) ===
      ctx.save();
      ctx.globalAlpha=dk?0.5:0.4;
      ctx.globalCompositeOperation=comp;
      const hdx=Math.sin(t*0.03)*w*0.02;
      const hdy=Math.cos(t*0.025)*h*0.015;
      ctx.drawImage(dk?haloDk:haloLt, hdx, hdy, w, h);
      ctx.restore();

      // === 2. MAIN NEBULA CLOUD LAYERS ===
      cloudCanvases.forEach((cc,i)=>{
        const op=dk?cc.layer.opDk:cc.layer.opLt;
        const tex=dk?cc.dk:cc.lt;
        const dx=Math.sin(t*0.06+i*1.2)*w*0.04;
        const dy=Math.cos(t*0.04+i*1.8)*h*0.03;
        ctx.save();
        ctx.globalAlpha=op;
        ctx.globalCompositeOperation=comp;
        ctx.drawImage(tex, dx, dy, w, h);
        ctx.restore();
      });

      // === 3. ELECTRIC CORE HIGHLIGHTS (bright hot center of the river) ===
      ctx.save();
      ctx.globalAlpha=dk?0.6:0.45;
      ctx.globalCompositeOperation=dk?"lighter":"source-over";
      const cdx=Math.sin(t*0.05+0.7)*w*0.02;
      const cdy=Math.cos(t*0.04+1.2)*h*0.015;
      ctx.drawImage(dk?coreDk:coreLt, cdx, cdy, w, h);
      ctx.restore();

      // === DRAW STARS ===
      ctx.globalCompositeOperation="source-over";
      stars.forEach(s=>{
        // Dual-frequency sparkle for glittery effect
        const tw1=Math.sin(t*s.speed+s.offset);
        const tw2=Math.sin(t*s.speed2+s.offset*2.3);
        const tw3=Math.sin(t*s.speed*2.3+s.offset*0.7); // third freq for extra sparkle
        const glitter=Math.max(tw1,tw2*0.7,tw3*0.4);
        const opacity=s.baseOpacity*(0.3+0.7*Math.max(0,glitter));
        if(opacity<0.03)return;
        if(dk){
          // Dark mode: glowing stars with halo
          ctx.fillStyle=`rgba(${s.dr},${s.dg},${s.db},${opacity.toFixed(3)})`;
          if(s.bright&&opacity>0.5){
            ctx.globalAlpha=opacity*0.2;
            ctx.fillRect(s.x-s.size*1.5,s.y-s.size*1.5,s.size*3,s.size*3);
            ctx.globalAlpha=1;
          }
          ctx.fillRect(s.x-s.size*0.5,s.y-s.size*0.5,s.size,s.size);
        }else{
          // Light mode: metallic glitter sparkle cross flashes
          const flash=Math.max(0,glitter); // 0 to 1 flash intensity
          if(flash<0.2)return; // only show when sparkling
          const gc=s.gc;
          const sz=s.size*(0.6+flash*0.8); // grows during flash
          const a=(flash*opacity).toFixed(3);
          // Cross/sparkle shape: horizontal + vertical thin bars
          ctx.fillStyle=`rgba(${gc[0]},${gc[1]},${gc[2]},${a})`;
          ctx.fillRect(s.x-sz*1.2,s.y-sz*0.2,sz*2.4,sz*0.4); // horizontal bar
          ctx.fillRect(s.x-sz*0.2,s.y-sz*1.2,sz*0.4,sz*2.4); // vertical bar
          // Bright center dot
          ctx.fillStyle=`rgba(255,255,255,${(flash*0.9).toFixed(3)})`;
          ctx.fillRect(s.x-sz*0.3,s.y-sz*0.3,sz*0.6,sz*0.6);
        }
      });
      frameRef.current=requestAnimationFrame(animate);
    };
    frameRef.current=requestAnimationFrame(animate);

    return()=>{
      window.removeEventListener("resize",resize);
      if(frameRef.current)cancelAnimationFrame(frameRef.current);
    };
  },[]);

  return(
    <div className="nebula-wrap" aria-hidden="true">
      <canvas ref={canvasRef} className="nebula-stars"/>
    </div>
  );
}

export default NebulaBackground;
