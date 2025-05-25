import {initNavigation} from './core/navigation.js';
import {dom} from './core/utils.js';
import {HeroAnimation} from './hero-animation.js';

class Oasis{
  constructor(){this.init()}
  async init(){
    if(document.readyState==='loading')
      await new Promise(r=>dom.on(document,'DOMContentLoaded',r));
    initNavigation();this.home();this.games();this.scrollBtn()
  }

  home(){
    const c=dom.q('#hero-canvas');if(c)this.anim=new HeroAnimation(c);
    this.type();
    /* reveal cards */
    const els=[...dom.qa('[data-fade]')];
    const io=new IntersectionObserver(es=>{
      es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('fade-in');io.unobserve(e.target)}})
    },{threshold:.1,rootMargin:'50px'});els.forEach(el=>io.observe(el))
  }
  type(){
    const t=dom.q('#heroText');if(!t)return;
    const msgs=['No tracking, no ads, no nonsense. Pure local gameplay.',
      'Privacy‑first gaming that respects your data.',
      'Open‑source titles, zero compromise.',
      'Secure, fast, built for everyone.'];
    let m=0,i=0,del=false;
    const tick=()=>{
      const cur=msgs[m];
      t.textContent=del?cur.slice(0,--i):cur.slice(0,++i);
      let s=del?50:100;
      if(!del&&i===cur.length){s=2000;del=true}
      else if(del&&i===0){del=false;m=(m+1)%msgs.length}
      setTimeout(tick,s)
    };
    setTimeout(tick,800)
  }

  scrollBtn(){
    const b=dom.q('#scrollToTop');if(!b)return;
    const toggle=()=>{b.classList.toggle('visible',scrollY>300)};
    dom.on(window,'scroll',toggle);
    dom.on(b,'click',()=>scrollTo({top:0,behavior:'smooth'}))
  }

  games(){
    const grid=dom.q('#gamesGrid');if(!grid)return;
    const games=[{n:'Desert Runner',d:'Sprint the dunes',g:'action'},
                 {n:'Mirror Maze',d:'Reflective puzzles',g:'puzzle'},
                 {n:'Oasis Tactics',d:'Turn‑based battles',g:'strategy'}];
    const render=arr=>{
      grid.innerHTML='';
      arr.forEach(({n,d})=>{
        const c=dom.create('article',{class:'card'});
        c.append(dom.create('h3',{class:'card__title'},n),
                 dom.create('p',{class:'card__text'},d),
                 dom.create('button',{class:'btn btn--disabled',disabled:true},'Coming Soon'));
        grid.append(c)
      })
    };
    render(games);
    const bar=dom.q('#filterBar');
    if(bar)dom.on(bar,'click',e=>{
      if(!e.target.matches('.filter__chip'))return;
      bar.querySelectorAll('.filter__chip').forEach(c=>c.setAttribute('aria-pressed','false'));
      e.target.setAttribute('aria-pressed','true');
      const f=e.target.dataset.filter;render(f==='all'?games:games.filter(x=>x.g===f))
    })
  }
}

new Oasis();