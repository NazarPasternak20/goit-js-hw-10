import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as o}from"./assets/vendor-bfb47a51.js";document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".form");e.addEventListener("submit",async n=>{n.preventDefault();const i=e.elements.delay,t=parseInt(i.value),r=e.elements.state.value;try{const s=await new Promise((a,c)=>{setTimeout(r==="fulfilled"?()=>{a(t)}:()=>{c(t)},t),e.reset()});o.success({title:"Success",message:`✅ Fulfilled promise in ${s}ms`,position:"topRight"})}catch(s){o.error({title:"Error",message:`❌ Rejected promise in ${s}ms`,position:"topRight"})}})});
//# sourceMappingURL=commonHelpers2.js.map
