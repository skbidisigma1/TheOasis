export const dom={
  q:(s,c=document)=>c.querySelector(s),
  qa:(s,c=document)=>c.querySelectorAll(s),
  on:(el,ev,fn)=>el.addEventListener(ev,fn),
  create:(t,a={},txt='')=>{
    const e=document.createElement(t);
    for(const[k,v]of Object.entries(a))e.setAttribute(k,v);
    if(txt)e.textContent=txt;return e}
};
export const state=new Map();