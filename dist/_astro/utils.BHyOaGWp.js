import{r as l}from"./index.CWrl8SxZ.js";import{r as ne}from"./index.CIiGpplO.js";function R(){return R=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},R.apply(this,arguments)}function pe(e,r){typeof e=="function"?e(r):e!=null&&(e.current=r)}function se(...e){return r=>e.forEach(t=>pe(t,r))}function be(...e){return l.useCallback(se(...e),e)}const ie=l.forwardRef((e,r)=>{const{children:t,...o}=e,n=l.Children.toArray(t),s=n.find(ge);if(s){const i=s.props.children,a=n.map(c=>c===s?l.Children.count(i)>1?l.Children.only(null):l.isValidElement(i)?i.props.children:null:c);return l.createElement(B,R({},o,{ref:r}),l.isValidElement(i)?l.cloneElement(i,void 0,a):null)}return l.createElement(B,R({},o,{ref:r}),t)});ie.displayName="Slot";const B=l.forwardRef((e,r)=>{const{children:t,...o}=e;return l.isValidElement(t)?l.cloneElement(t,{...he(o,t.props),ref:r?se(r,t.ref):t.ref}):l.Children.count(t)>1?l.Children.only(null):null});B.displayName="SlotClone";const me=({children:e})=>l.createElement(l.Fragment,null,e);function ge(e){return l.isValidElement(e)&&e.type===me}function he(e,r){const t={...r};for(const o in r){const n=e[o],s=r[o];/^on[A-Z]/.test(o)?n&&s?t[o]=(...a)=>{s(...a),n(...a)}:n&&(t[o]=n):o==="style"?t[o]={...n,...s}:o==="className"&&(t[o]=[n,s].filter(Boolean).join(" "))}return{...e,...t}}const xe=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],sr=xe.reduce((e,r)=>{const t=l.forwardRef((o,n)=>{const{asChild:s,...i}=o,a=s?ie:r;return l.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),l.createElement(a,R({},i,{ref:n}))});return t.displayName=`Primitive.${r}`,{...e,[r]:t}},{});function ir(e,r){e&&ne.flushSync(()=>e.dispatchEvent(r))}const re=globalThis?.document?l.useLayoutEffect:()=>{};function ye(e,r){return l.useReducer((t,o)=>{const n=r[t][o];return n??t},e)}const ve=e=>{const{present:r,children:t}=e,o=we(r),n=typeof t=="function"?t({present:o.isPresent}):l.Children.only(t),s=be(o.ref,n.ref);return typeof t=="function"||o.isPresent?l.cloneElement(n,{ref:s}):null};ve.displayName="Presence";function we(e){const[r,t]=l.useState(),o=l.useRef({}),n=l.useRef(e),s=l.useRef("none"),i=e?"mounted":"unmounted",[a,c]=ye(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return l.useEffect(()=>{const u=j(o.current);s.current=a==="mounted"?u:"none"},[a]),re(()=>{const u=o.current,f=n.current;if(f!==e){const g=s.current,x=j(u);e?c("MOUNT"):x==="none"||u?.display==="none"?c("UNMOUNT"):c(f&&g!==x?"ANIMATION_OUT":"UNMOUNT"),n.current=e}},[e,c]),re(()=>{if(r){const u=p=>{const x=j(o.current).includes(p.animationName);p.target===r&&x&&ne.flushSync(()=>c("ANIMATION_END"))},f=p=>{p.target===r&&(s.current=j(o.current))};return r.addEventListener("animationstart",f),r.addEventListener("animationcancel",u),r.addEventListener("animationend",u),()=>{r.removeEventListener("animationstart",f),r.removeEventListener("animationcancel",u),r.removeEventListener("animationend",u)}}else c("ANIMATION_END")},[r,c]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:l.useCallback(u=>{u&&(o.current=getComputedStyle(u)),t(u)},[])}}function j(e){return e?.animationName||"none"}function ar(e,r=[]){let t=[];function o(s,i){const a=l.createContext(i),c=t.length;t=[...t,i];function u(p){const{scope:g,children:x,...v}=p,h=g?.[e][c]||a,y=l.useMemo(()=>v,Object.values(v));return l.createElement(h.Provider,{value:y},x)}function f(p,g){const x=g?.[e][c]||a,v=l.useContext(x);if(v)return v;if(i!==void 0)return i;throw new Error(`\`${p}\` must be used within \`${s}\``)}return u.displayName=s+"Provider",[u,f]}const n=()=>{const s=t.map(i=>l.createContext(i));return function(a){const c=a?.[e]||s;return l.useMemo(()=>({[`__scope${e}`]:{...a,[e]:c}}),[a,c])}};return n.scopeName=e,[o,$e(n,...r)]}function $e(...e){const r=e[0];if(e.length===1)return r;const t=()=>{const o=e.map(n=>({useScope:n(),scopeName:n.scopeName}));return function(s){const i=o.reduce((a,{useScope:c,scopeName:u})=>{const p=c(s)[`__scope${u}`];return{...a,...p}},{});return l.useMemo(()=>({[`__scope${r.scopeName}`]:i}),[i])}};return t.scopeName=r.scopeName,t}function lr(e){const r=l.useRef(e);return l.useEffect(()=>{r.current=e}),l.useMemo(()=>(...t)=>{var o;return(o=r.current)===null||o===void 0?void 0:o.call(r,...t)},[])}const Ce=l.createContext(void 0);function cr(e){const r=l.useContext(Ce);return e||r||"ltr"}function dr(e,r,{checkForDefaultPrevented:t=!0}={}){return function(n){if(e?.(n),t===!1||!n.defaultPrevented)return r?.(n)}}function ae(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(r=0;r<n;r++)e[r]&&(t=ae(e[r]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function Se(){for(var e,r,t=0,o="",n=arguments.length;t<n;t++)(e=arguments[t])&&(r=ae(e))&&(o&&(o+=" "),o+=r);return o}const q="-";function ke(e){const r=Me(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;function n(i){const a=i.split(q);return a[0]===""&&a.length!==1&&a.shift(),le(a,r)||Ae(i)}function s(i,a){const c=t[i]||[];return a&&o[i]?[...c,...o[i]]:c}return{getClassGroupId:n,getConflictingClassGroupIds:s}}function le(e,r){if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),n=o?le(e.slice(1),o):void 0;if(n)return n;if(r.validators.length===0)return;const s=e.join(q);return r.validators.find(({validator:i})=>i(s))?.classGroupId}const te=/^\[(.+)\]$/;function Ae(e){if(te.test(e)){const r=te.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function Me(e){const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return Ee(Object.entries(e.classGroups),t).forEach(([s,i])=>{F(i,o,s,r)}),o}function F(e,r,t,o){e.forEach(n=>{if(typeof n=="string"){const s=n===""?r:oe(r,n);s.classGroupId=t;return}if(typeof n=="function"){if(Ne(n)){F(n(o),r,t,o);return}r.validators.push({validator:n,classGroupId:t});return}Object.entries(n).forEach(([s,i])=>{F(i,oe(r,s),t,o)})})}function oe(e,r){let t=e;return r.split(q).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function Ne(e){return e.isThemeGetter}function Ee(e,r){return r?e.map(([t,o])=>{const n=o.map(s=>typeof s=="string"?r+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([i,a])=>[r+i,a])):s);return[t,n]}):e}function ze(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;function n(s,i){t.set(s,i),r++,r>e&&(r=0,o=t,t=new Map)}return{get(s){let i=t.get(s);if(i!==void 0)return i;if((i=o.get(s))!==void 0)return n(s,i),i},set(s,i){t.has(s)?t.set(s,i):n(s,i)}}}const ce="!";function Pe(e){const r=e.separator,t=r.length===1,o=r[0],n=r.length;return function(i){const a=[];let c=0,u=0,f;for(let h=0;h<i.length;h++){let y=i[h];if(c===0){if(y===o&&(t||i.slice(h,h+n)===r)){a.push(i.slice(u,h)),u=h+n;continue}if(y==="/"){f=h;continue}}y==="["?c++:y==="]"&&c--}const p=a.length===0?i:i.substring(u),g=p.startsWith(ce),x=g?p.substring(1):p,v=f&&f>u?f-u:void 0;return{modifiers:a,hasImportantModifier:g,baseClassName:x,maybePostfixModifierPosition:v}}}function Re(e){if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r}function Te(e){return{cache:ze(e.cacheSize),splitModifiers:Pe(e),...ke(e)}}const Ie=/\s+/;function Oe(e,r){const{splitModifiers:t,getClassGroupId:o,getConflictingClassGroupIds:n}=r,s=new Set;return e.trim().split(Ie).map(i=>{const{modifiers:a,hasImportantModifier:c,baseClassName:u,maybePostfixModifierPosition:f}=t(i);let p=o(f?u.substring(0,f):u),g=!!f;if(!p){if(!f)return{isTailwindClass:!1,originalClassName:i};if(p=o(u),!p)return{isTailwindClass:!1,originalClassName:i};g=!1}const x=Re(a).join(":");return{isTailwindClass:!0,modifierId:c?x+ce:x,classGroupId:p,originalClassName:i,hasPostfixModifier:g}}).reverse().filter(i=>{if(!i.isTailwindClass)return!0;const{modifierId:a,classGroupId:c,hasPostfixModifier:u}=i,f=a+c;return s.has(f)?!1:(s.add(f),n(c,u).forEach(p=>s.add(a+p)),!0)}).reverse().map(i=>i.originalClassName).join(" ")}function je(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=de(r))&&(o&&(o+=" "),o+=t);return o}function de(e){if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=de(e[o]))&&(t&&(t+=" "),t+=r);return t}function Ge(e,...r){let t,o,n,s=i;function i(c){const u=r.reduce((f,p)=>p(f),e());return t=Te(u),o=t.cache.get,n=t.cache.set,s=a,a(c)}function a(c){const u=o(c);if(u)return u;const f=Oe(c,t);return n(c,f),f}return function(){return s(je.apply(null,arguments))}}function b(e){const r=t=>t[e]||[];return r.isThemeGetter=!0,r}const ue=/^\[(?:([a-z-]+):)?(.+)\]$/i,_e=/^\d+\/\d+$/,Le=new Set(["px","full","screen"]),Ue=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Ve=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,We=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,Be=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Fe=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function $(e){return A(e)||Le.has(e)||_e.test(e)}function S(e){return M(e,"length",Ye)}function A(e){return!!e&&!Number.isNaN(Number(e))}function G(e){return M(e,"number",A)}function z(e){return!!e&&Number.isInteger(Number(e))}function qe(e){return e.endsWith("%")&&A(e.slice(0,-1))}function d(e){return ue.test(e)}function k(e){return Ue.test(e)}const Ze=new Set(["length","size","percentage"]);function Je(e){return M(e,Ze,fe)}function Xe(e){return M(e,"position",fe)}const De=new Set(["image","url"]);function Ke(e){return M(e,De,er)}function Qe(e){return M(e,"",He)}function P(){return!0}function M(e,r,t){const o=ue.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1}function Ye(e){return Ve.test(e)&&!We.test(e)}function fe(){return!1}function He(e){return Be.test(e)}function er(e){return Fe.test(e)}function rr(){const e=b("colors"),r=b("spacing"),t=b("blur"),o=b("brightness"),n=b("borderColor"),s=b("borderRadius"),i=b("borderSpacing"),a=b("borderWidth"),c=b("contrast"),u=b("grayscale"),f=b("hueRotate"),p=b("invert"),g=b("gap"),x=b("gradientColorStops"),v=b("gradientColorStopPositions"),h=b("inset"),y=b("margin"),C=b("opacity"),w=b("padding"),Z=b("saturate"),_=b("scale"),J=b("sepia"),X=b("skew"),D=b("space"),K=b("translate"),L=()=>["auto","contain","none"],U=()=>["auto","hidden","clip","visible","scroll"],V=()=>["auto",d,r],m=()=>[d,r],Q=()=>["",$,S],T=()=>["auto",A,d],Y=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],I=()=>["solid","dashed","dotted","double","none"],H=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],W=()=>["start","end","center","between","around","evenly","stretch"],N=()=>["","0",d],ee=()=>["auto","avoid","all","avoid-page","page","left","right","column"],E=()=>[A,G],O=()=>[A,d];return{cacheSize:500,separator:":",theme:{colors:[P],spacing:[$,S],blur:["none","",k,d],brightness:E(),borderColor:[e],borderRadius:["none","","full",k,d],borderSpacing:m(),borderWidth:Q(),contrast:E(),grayscale:N(),hueRotate:O(),invert:N(),gap:m(),gradientColorStops:[e],gradientColorStopPositions:[qe,S],inset:V(),margin:V(),opacity:E(),padding:m(),saturate:E(),scale:E(),sepia:N(),skew:O(),space:m(),translate:m()},classGroups:{aspect:[{aspect:["auto","square","video",d]}],container:["container"],columns:[{columns:[k]}],"break-after":[{"break-after":ee()}],"break-before":[{"break-before":ee()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Y(),d]}],overflow:[{overflow:U()}],"overflow-x":[{"overflow-x":U()}],"overflow-y":[{"overflow-y":U()}],overscroll:[{overscroll:L()}],"overscroll-x":[{"overscroll-x":L()}],"overscroll-y":[{"overscroll-y":L()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[h]}],"inset-x":[{"inset-x":[h]}],"inset-y":[{"inset-y":[h]}],start:[{start:[h]}],end:[{end:[h]}],top:[{top:[h]}],right:[{right:[h]}],bottom:[{bottom:[h]}],left:[{left:[h]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",z,d]}],basis:[{basis:V()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",d]}],grow:[{grow:N()}],shrink:[{shrink:N()}],order:[{order:["first","last","none",z,d]}],"grid-cols":[{"grid-cols":[P]}],"col-start-end":[{col:["auto",{span:["full",z,d]},d]}],"col-start":[{"col-start":T()}],"col-end":[{"col-end":T()}],"grid-rows":[{"grid-rows":[P]}],"row-start-end":[{row:["auto",{span:[z,d]},d]}],"row-start":[{"row-start":T()}],"row-end":[{"row-end":T()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",d]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",d]}],gap:[{gap:[g]}],"gap-x":[{"gap-x":[g]}],"gap-y":[{"gap-y":[g]}],"justify-content":[{justify:["normal",...W()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...W(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...W(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[y]}],mx:[{mx:[y]}],my:[{my:[y]}],ms:[{ms:[y]}],me:[{me:[y]}],mt:[{mt:[y]}],mr:[{mr:[y]}],mb:[{mb:[y]}],ml:[{ml:[y]}],"space-x":[{"space-x":[D]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[D]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",d,r]}],"min-w":[{"min-w":[d,r,"min","max","fit"]}],"max-w":[{"max-w":[d,r,"none","full","min","max","fit","prose",{screen:[k]},k]}],h:[{h:[d,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[d,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[d,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[d,r,"auto","min","max","fit"]}],"font-size":[{text:["base",k,S]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",G]}],"font-family":[{font:[P]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",d]}],"line-clamp":[{"line-clamp":["none",A,G]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",$,d]}],"list-image":[{"list-image":["none",d]}],"list-style-type":[{list:["none","disc","decimal",d]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[C]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[C]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...I(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",$,S]}],"underline-offset":[{"underline-offset":["auto",$,d]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:m()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",d]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",d]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[C]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Y(),Xe]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Je]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Ke]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[v]}],"gradient-via-pos":[{via:[v]}],"gradient-to-pos":[{to:[v]}],"gradient-from":[{from:[x]}],"gradient-via":[{via:[x]}],"gradient-to":[{to:[x]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[C]}],"border-style":[{border:[...I(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[C]}],"divide-style":[{divide:I()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...I()]}],"outline-offset":[{"outline-offset":[$,d]}],"outline-w":[{outline:[$,S]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:Q()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[C]}],"ring-offset-w":[{"ring-offset":[$,S]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",k,Qe]}],"shadow-color":[{shadow:[P]}],opacity:[{opacity:[C]}],"mix-blend":[{"mix-blend":[...H(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":H()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",k,d]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[p]}],saturate:[{saturate:[Z]}],sepia:[{sepia:[J]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[C]}],"backdrop-saturate":[{"backdrop-saturate":[Z]}],"backdrop-sepia":[{"backdrop-sepia":[J]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",d]}],duration:[{duration:O()}],ease:[{ease:["linear","in","out","in-out",d]}],delay:[{delay:O()}],animate:[{animate:["none","spin","ping","pulse","bounce",d]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[_]}],"scale-x":[{"scale-x":[_]}],"scale-y":[{"scale-y":[_]}],rotate:[{rotate:[z,d]}],"translate-x":[{"translate-x":[K]}],"translate-y":[{"translate-y":[K]}],"skew-x":[{"skew-x":[X]}],"skew-y":[{"skew-y":[X]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",d]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",d]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":m()}],"scroll-mx":[{"scroll-mx":m()}],"scroll-my":[{"scroll-my":m()}],"scroll-ms":[{"scroll-ms":m()}],"scroll-me":[{"scroll-me":m()}],"scroll-mt":[{"scroll-mt":m()}],"scroll-mr":[{"scroll-mr":m()}],"scroll-mb":[{"scroll-mb":m()}],"scroll-ml":[{"scroll-ml":m()}],"scroll-p":[{"scroll-p":m()}],"scroll-px":[{"scroll-px":m()}],"scroll-py":[{"scroll-py":m()}],"scroll-ps":[{"scroll-ps":m()}],"scroll-pe":[{"scroll-pe":m()}],"scroll-pt":[{"scroll-pt":m()}],"scroll-pr":[{"scroll-pr":m()}],"scroll-pb":[{"scroll-pb":m()}],"scroll-pl":[{"scroll-pl":m()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",d]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[$,S,G]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const tr=Ge(rr);function ur(...e){return tr(Se(e))}export{ar as $,R as _,be as a,ie as b,sr as c,dr as d,ve as e,re as f,cr as g,ur as h,lr as i,ir as j,se as k};