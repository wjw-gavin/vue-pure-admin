import{d as F,s as g,r as y,bo as c,b as u,c as d,e as A,w as a,f as t,D as i,h as _,g as h,i as m,G as b,k,F as w,l as S,M as V,bz as x}from"./index-1bc2670c.js";const z={class:"card-header"},P=F({name:"PermissionPage"}),H=F({...P,setup(N){var l;const o=g(()=>({width:"85vw",justifyContent:"start"})),s=y((l=c())==null?void 0:l.username),p=[{value:"admin",label:"\u7BA1\u7406\u5458\u89D2\u8272"},{value:"common",label:"\u666E\u901A\u89D2\u8272"}];function D(){c().loginByUsername({username:s.value,password:"admin123"}).then(n=>{n.success&&(sessionStorage.removeItem("async-routes"),V().clearAllCachePage(),x())})}return(n,r)=>{const f=u("el-tag"),E=u("el-option"),v=u("el-select"),B=u("el-card"),C=u("el-space");return d(),A(C,{direction:"vertical",size:"large"},{default:a(()=>[t(f,{style:i(_(o)),size:"large",effect:"dark"},{default:a(()=>[h(" \u6A21\u62DF\u540E\u53F0\u6839\u636E\u4E0D\u540C\u89D2\u8272\u8FD4\u56DE\u5BF9\u5E94\u8DEF\u7531\uFF0C\u89C2\u5BDF\u5DE6\u4FA7\u83DC\u5355\u53D8\u5316\uFF08\u7BA1\u7406\u5458\u89D2\u8272\u53EF\u67E5\u770B\u7CFB\u7EDF\u7BA1\u7406\u83DC\u5355\u3001\u666E\u901A\u89D2\u8272\u4E0D\u53EF\u67E5\u770B\u7CFB\u7EDF\u7BA1\u7406\u83DC\u5355\uFF09 ")]),_:1},8,["style"]),t(B,{shadow:"never",style:i(_(o))},{header:a(()=>[m("div",z,[m("span",null,"\u5F53\u524D\u89D2\u8272\uFF1A"+b(s.value),1)])]),default:a(()=>[t(v,{modelValue:s.value,"onUpdate:modelValue":r[0]||(r[0]=e=>s.value=e),onChange:D},{default:a(()=>[(d(),k(w,null,S(p,e=>t(E,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["style"])]),_:1})}}});export{H as default};
