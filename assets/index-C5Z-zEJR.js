import{r as m,j as t,G as n,t as j,d as g,i as h,B as f}from"./index-CTpnwpOp.js";import{p as k}from"./storage-deDeoHqE.js";import{t as l,D as T,T as b}from"./TaskColumn-CLFY6b-M.js";import"./index.esm-Db5wdex5.js";import"./TextField-0bVFUGdz.js";import"./Select-D-Ptzlsl.js";import"./useFormControl-aQ07-FyY.js";import"./MenuItem-DK8nUG1v.js";const v=[{id:"to do",label:"To do"},{id:"in progress",label:"In progress"},{id:"code review",label:"Code review"},{id:"done",label:"Done"}],w=(e,s)=>{if(s)return s.filter(a=>a.status===e)},D=e=>l.getByProjectId(e)||[],I=({projectId:e})=>{const[s,a]=m.useState(()=>D(e)),p=r=>{const{active:u,over:d}=r;if(!d)return;const i=u.id,x=d.id;a(()=>{const c=s.map(o=>i===o.id?{...o,status:x}:o);return l.update(i,c.find(o=>o.id===i)),c})};return t.jsx(n,{container:!0,spacing:2,size:"grow",sx:{[j.breakpoints.down("lg")]:{flexDirection:"column"}},children:t.jsx(T,{onDragEnd:p,children:v.map(r=>t.jsx(n,{size:"grow",sx:{height:"100%",flexGrow:1},children:t.jsx(b,{label:r.label,tasks:w(r.id,s),column:r})},r.id))})})},A=({})=>{const{id:e}=g(),s=k.getById(e);return s?t.jsxs(n,{container:!0,direction:"column",sx:{height:"100%"},children:[t.jsx(h,{title:s.name,children:t.jsx(f,{to:"create-task",variant:"contained",children:"Add task"})}),t.jsx(I,{projectId:e})]}):t.jsx("p",{children:"Error"})};export{A as default};