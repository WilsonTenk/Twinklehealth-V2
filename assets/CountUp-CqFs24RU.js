import{c as g,r as s,j as I}from"./index-CC0L2fUY.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=g("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),j=({end:n,duration:o=2e3,prefix:m="",suffix:p="",className:h=""})=>{const[b,c]=s.useState(0),t=s.useRef(null),[a,x]=s.useState(!1);return s.useEffect(()=>{const e=new IntersectionObserver(([r])=>{r.isIntersecting&&(x(!0),e.disconnect())},{threshold:.1});return t.current&&e.observe(t.current),()=>{t.current&&e.unobserve(t.current)}},[]),s.useEffect(()=>{if(!a)return;let e=null,r;const i=u=>{e||(e=u);const f=u-e,C=Math.min(f/o,1),E=Math.floor((l=>l===1?1:1-Math.pow(2,-10*l))(C)*n);c(E),f<o?r=requestAnimationFrame(i):c(n)};return r=requestAnimationFrame(i),()=>cancelAnimationFrame(r)},[a,n,o]),I.jsxs("span",{ref:t,className:h,children:[m,b.toLocaleString(),p]})};export{j as C,M as a};
