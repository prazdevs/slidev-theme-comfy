import{h as d,j as _,k as h,ak as p,c as m,al as u,m as n,am as t,an as o,z as s,F as f,ao as v,ap as g,aq as x,q as r,ar as y,as as b,n as k,at as N,au as w,_ as P}from"./nav-8eff8908.js";import{N as S}from"./NoteDisplay-abc3014a.js";import{u as V}from"./index-20a9eb36.js";const j={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},z={class:"opacity-50"},B={class:"text-lg"},C={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),q={key:0,class:"border-gray-400/50 mb-8"},F=d({__name:"PresenterPrint",setup(M){_(h),p(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),V({title:`Notes - ${m.title}`});const i=u(()=>x.slice(0,-1).map(a=>{var l;return(l=a.meta)==null?void 0:l.slide}).filter(a=>a!==void 0&&a.noteHTML!==""));return(a,l)=>(r(),n("div",{id:"page-root",style:g(s(w))},[t("div",j,[t("div",L,[t("h1",T,o(s(m).title),1),t("div",z,o(new Date().toLocaleString()),1)]),(r(!0),n(f,null,v(s(i),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",C,[t("div",D,o(e==null?void 0:e.no)+"/"+o(s(y)),1),b(" "+o(e==null?void 0:e.title)+" ",1),H])]),k(S,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(i).length-1?(r(),n("hr",q)):N("v-if",!0)]))),128))])],4))}}),W=P(F,[["__file","/home/runner/work/slidev-theme-comfy/slidev-theme-comfy/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{W as default};
