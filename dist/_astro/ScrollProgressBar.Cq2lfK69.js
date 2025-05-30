import{r as o}from"./index.DK-fsZOb.js";import{j as i}from"./jsx-runtime.ClP7wGfN.js";/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var x={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),a=(e,l)=>{const t=o.forwardRef(({color:n="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:d,className:m="",children:c,...u},g)=>o.createElement("svg",{ref:g,...x,width:r,height:r,stroke:n,strokeWidth:d?Number(s)*24/Number(r):s,className:["lucide",`lucide-${w(e)}`,m].join(" "),...u},[...l.map(([h,p])=>o.createElement(h,p)),...Array.isArray(c)?c:[c]]));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=a("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.330.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=a("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),C=()=>{const[e,l]=o.useState(0);return o.useEffect(()=>{const t=()=>{const n=document.documentElement.scrollTop,r=document.documentElement.scrollHeight-document.documentElement.clientHeight,s=`${n/r*100}`;l(s)};return window.addEventListener("scroll",t),()=>{window.removeEventListener("scroll",t)}},[]),i.jsx("div",{className:"fixed top-0 left-0 w-full z-50",children:i.jsx("div",{className:"h-1 bg-violet-100",children:i.jsx("div",{className:"h-full bg-gradient-to-r from-violet-400 to-pink-400 transition-all duration-300 ease-out",style:{width:`${e}%`}})})})};export{k as A,v as C,C as S,a as c};
