import{u as t,w as m}from"./xlsx-acc0a47d.js";import{a as u}from"./data-6dfee1b8.js";import{r as i,M as f}from"./index-1c6f7e93.js";import{m as b}from"./message-ad3f45cd.js";function _(){const r=i(f(u,!0)),o=[{label:"ID",prop:"id"},{label:"\u65E5\u671F",prop:"date"},{label:"\u59D3\u540D",prop:"name"}];return{columns:o,dataList:r,exportExcel:()=>{const s=r.value.map(e=>{const n=[];return o.forEach(c=>{n.push(e[c.prop])}),n}),a=[];o.forEach(e=>{a.push(e.label)}),s.unshift(a);const l=t.aoa_to_sheet(s),p=t.book_new();t.book_append_sheet(p,l,"\u6570\u636E\u62A5\u8868"),m(p,"pure-admin-table.xlsx"),b("\u5BFC\u51FA\u6210\u529F",{type:"success"})}}}export{_ as useColumns};
