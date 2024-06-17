import{j as e}from"./jsx-runtime.6JYdPw_6.js";import{r as n}from"./index.CWrl8SxZ.js";import{u as L,f as b,M as K,a as $,P as B,L as O,m as z}from"./motion.B8dUV1SH.js";function P(){const t=n.useRef(!1);return L(()=>(t.current=!0,()=>{t.current=!1}),[]),t}function U(){const t=P(),[i,r]=n.useState(0),s=n.useCallback(()=>{t.current&&r(i+1)},[i]);return[n.useCallback(()=>b.postRender(s),[s]),i]}class W extends n.Component{getSnapshotBeforeUpdate(i){const r=this.props.childRef.current;if(r&&i.isPresent&&!this.props.isPresent){const s=this.props.sizeRef.current;s.height=r.offsetHeight||0,s.width=r.offsetWidth||0,s.top=r.offsetTop,s.left=r.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function N({children:t,isPresent:i}){const r=n.useId(),s=n.useRef(null),u=n.useRef({width:0,height:0,top:0,left:0}),{nonce:h}=n.useContext(K);return n.useInsertionEffect(()=>{const{width:f,height:l,top:m,left:p}=u.current;if(i||!s.current||!f||!l)return;s.current.dataset.motionPopId=r;const o=document.createElement("style");return h&&(o.nonce=h),document.head.appendChild(o),o.sheet&&o.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${l}px !important;
            top: ${m}px !important;
            left: ${p}px !important;
          }
        `),()=>{document.head.removeChild(o)}},[i]),e.jsx(W,{isPresent:i,childRef:s,sizeRef:u,children:n.cloneElement(t,{ref:s})})}const w=({children:t,initial:i,isPresent:r,onExitComplete:s,custom:u,presenceAffectsLayout:h,mode:f})=>{const l=$(A),m=n.useId(),p=n.useMemo(()=>({id:m,initial:i,isPresent:r,custom:u,onExitComplete:o=>{l.set(o,!0);for(const a of l.values())if(!a)return;s&&s()},register:o=>(l.set(o,!1),()=>l.delete(o))}),h?[Math.random()]:[r]);return n.useMemo(()=>{l.forEach((o,a)=>l.set(a,!1))},[r]),n.useEffect(()=>{!r&&!l.size&&s&&s()},[r]),f==="popLayout"&&(t=e.jsx(N,{isPresent:r,children:t})),e.jsx(B.Provider,{value:p,children:t})};function A(){return new Map}function D(t){return n.useEffect(()=>()=>t(),[])}const x=t=>t.key||"";function G(t,i){t.forEach(r=>{const s=x(r);i.set(s,r)})}function H(t){const i=[];return n.Children.forEach(t,r=>{n.isValidElement(r)&&i.push(r)}),i}const V=({children:t,custom:i,initial:r=!0,onExitComplete:s,exitBeforeEnter:u,presenceAffectsLayout:h=!0,mode:f="sync"})=>{const l=n.useContext(O).forceRender||U()[0],m=P(),p=H(t);let o=p;const a=n.useRef(new Map).current,C=n.useRef(o),g=n.useRef(new Map).current,R=n.useRef(!0);if(L(()=>{R.current=!1,G(p,g),C.current=o}),D(()=>{R.current=!0,g.clear(),a.clear()}),R.current)return e.jsx(e.Fragment,{children:o.map(c=>e.jsx(w,{isPresent:!0,initial:r?void 0:!1,presenceAffectsLayout:h,mode:f,children:c},x(c)))});o=[...o];const k=C.current.map(x),E=p.map(x),S=k.length;for(let c=0;c<S;c++){const d=k[c];E.indexOf(d)===-1&&!a.has(d)&&a.set(d,void 0)}return f==="wait"&&a.size&&(o=[]),a.forEach((c,d)=>{if(E.indexOf(d)!==-1)return;const M=g.get(d);if(!M)return;const F=k.indexOf(d);let j=c;if(!j){const T=()=>{a.delete(d);const v=Array.from(g.keys()).filter(y=>!E.includes(y));if(v.forEach(y=>g.delete(y)),C.current=p.filter(y=>{const I=x(y);return I===d||v.includes(I)}),!a.size){if(m.current===!1)return;l(),s&&s()}};j=e.jsx(w,{isPresent:!1,onExitComplete:T,custom:i,presenceAffectsLayout:h,mode:f,children:M},x(M)),a.set(d,j)}o.splice(F,0,j)}),o=o.map(c=>{const d=c.key;return a.has(d)?c:e.jsx(w,{isPresent:!0,presenceAffectsLayout:h,mode:f,children:c},x(c))}),e.jsx(e.Fragment,{children:a.size?o:o.map(c=>n.cloneElement(c))})};function _(){const[t,i]=n.useState(!1);return n.useEffect(()=>{i(!0)},[]),t}const q=()=>e.jsx(e.Fragment,{children:e.jsxs(z.svg,{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",initial:{scale:.5,opacity:0,rotate:90},animate:{scale:1,opacity:1,rotate:0,transition:{duration:.2,type:"spring",stiffness:100}},exit:{scale:.5,opacity:0,rotate:90,transition:{duration:.2}},children:[e.jsx("circle",{cx:"12",cy:"12",r:"5"}),e.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),e.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),e.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),e.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),e.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),e.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),e.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),e.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]})}),J=()=>e.jsx(e.Fragment,{children:e.jsx(z.svg,{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",initial:{scale:.5,opacity:0,rotate:90},animate:{scale:1,opacity:1,rotate:0,transition:{duration:.2,type:"spring",stiffness:100}},exit:{scale:.5,opacity:0,rotate:90,transition:{duration:.2}},children:e.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})});function Z(){const[t,i]=n.useState(()=>typeof localStorage<"u"&&localStorage.getItem("theme")?localStorage.getItem("theme"):window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),r=()=>{const u=t==="light"?"dark":"light";localStorage.setItem("theme",u),i(u)},s=_();return n.useEffect(()=>{const u=document.documentElement;t==="light"?u.classList.remove("dark"):u.classList.add("dark")},[t]),s?e.jsxs("button",{role:"button",onClick:r,className:"min-h-[40px] block focus:outline-none",children:[e.jsx("span",{className:"sr-only",children:"Toggle mode"}),e.jsx(V,{initial:!1,children:t!=="dark"?e.jsx(q,{}):e.jsx(J,{})})]}):e.jsx("div",{})}export{Z as ThemeToggle};
