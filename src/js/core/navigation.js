import {dom} from './utils.js';

export const initNavigation=()=>{
  const nav=dom.q('.nav');
  const toggle=dom.q('.nav-toggle');
  const links=[...dom.qa('.nav__link')];

  const cur=location.pathname.replace(/\/$/,'')||'/';
  links.forEach(l=>{
    const p=new URL(l.href).pathname.replace(/\/$/,'')||'/';
    if(p===cur){l.setAttribute('aria-current','page')}
  });

  if(toggle){
    dom.on(toggle,'click',()=>{
      const open=nav.dataset.open==='true';
      nav.dataset.open=(!open).toString();
      toggle.setAttribute('aria-expanded',(!open).toString());
      toggle.classList.toggle('is-open',!open);
    });
    dom.on(document,'keydown',e=>{
      if(e.key==='Escape')nav.dataset.open='false';
    });
  }

  dom.on(document,'keydown',e=>{
    if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(e.key))return;
    const a=document.activeElement;if(!a.classList.contains('nav__link'))return;
    const i=links.indexOf(a);let n=i;
    if(['ArrowLeft','ArrowUp'].includes(e.key))n=i?i-1:links.length-1;
    if(['ArrowRight','ArrowDown'].includes(e.key))n=i<links.length-1?i+1:0;
    if(e.key==='Home')n=0;if(e.key==='End')n=links.length-1;
    links[n].focus();
  });
};