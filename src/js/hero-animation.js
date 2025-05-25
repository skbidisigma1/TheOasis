export class HeroAnimation{
  constructor(canvas){
    this.c=canvas;this.ctx=canvas.getContext('2d');
    this.p=[];this.t=0;this.y=0;
    this.resize();this.spawn();this.loop();
    addEventListener('scroll',()=>{this.y=scrollY});
    addEventListener('resize',()=>this.resize());
  }
  resize(){
    const r=this.c.getBoundingClientRect(),d=devicePixelRatio||1;
    this.c.width=r.width*d;this.c.height=r.height*d;this.ctx.scale(d,d)
  }
  spawn(){
    const n=Math.max(25,Math.floor(this.c.width/40));
    for(let i=0;i<n;i++)this.p.push({
      x:Math.random()*this.c.width,y:Math.random()*this.c.height,
      vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.2,
      r:Math.random()*3+.5,o:Math.random()*.6+.2,h:Math.random()*40+35,φ:Math.random()*Math.PI*2
    })
  }
  drawDot(p){
    const {ctx}=this;const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*3);
    g.addColorStop(0,`hsla(${p.h},65%,75%,${p.o})`);
    g.addColorStop(1,`hsla(${p.h},65%,75%,0)`);
    ctx.fillStyle=g;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fill();
  }  loop=()=>{
    this.t+=.016;const {ctx,c}=this;ctx.clearRect(0,0,c.width,c.height);
    const g=ctx.createLinearGradient(0,-this.y*.3,0,c.height-this.y*.3);
    const style=getComputedStyle(document.documentElement);
    const bg=style.getPropertyValue('--color-bg').trim();
    const bgAlt=style.getPropertyValue('--color-bg-alt').trim();
    // Convert hex to rgba with alpha
    const hexToRgba=(hex,alpha)=>{
      const r=parseInt(hex.slice(1,3),16);
      const g=parseInt(hex.slice(3,5),16);
      const b=parseInt(hex.slice(5,7),16);
      return `rgba(${r},${g},${b},${alpha})`;
    };
    g.addColorStop(0,hexToRgba(bg,.95));g.addColorStop(.5,hexToRgba(bgAlt,.8));
    g.addColorStop(1,hexToRgba(bgAlt,.9));ctx.fillStyle=g;ctx.fillRect(0,0,c.width,c.height);

    this.p.forEach((p,i)=>{
      p.x+=p.vx*(1+Math.sin(this.t+p.φ)*.2);
      p.y+=p.vy*(1+Math.cos(this.t+p.φ)*.1);
      if(p.x<-10)p.x=c.width+10;if(p.x>c.width+10)p.x=-10;
      if(p.y<-10)p.y=c.height+10;if(p.y>c.height+10)p.y=-10;
      p.y+=Math.sin(this.t*.8+p.x*.01+p.φ)*.3;
      const o=p.o*(.8+Math.sin(this.t+p.φ)*.2);p.o=o;
      this.drawDot(p);
      this.p.slice(i+1).forEach(q=>{
        const dx=p.x-q.x,dy=p.y-q.y,d=Math.hypot(dx,dy);
        if(d<120){ctx.strokeStyle=`hsla(${(p.h+q.h)/2},60%,70%,${(1-d/120)*.1})`;
          ctx.lineWidth=.5;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.stroke()}
      })
    });
    requestAnimationFrame(this.loop);
  }
}
