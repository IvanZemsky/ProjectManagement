import{W as H,j as e,m as K,n as Q,o as w,w as $,r as h,y as G,K as J,D as X,E as Y,S as j,l as D,L as Z,s as U,R as L,u as _,T as y,f as T,b as R,e as E,d as C,i as V,Q as W,k as ee,c as se}from"./index-gob_kqk9.js";import{C as ae}from"./TaskColumn-lCN-O2-j.js";import{t as te}from"./constants-CaX98ONQ.js";import{u as re,C as F,F as P}from"./index.esm-DZIucuLh.js";import{T as z,I as B}from"./TextField-DrMixVGh.js";import{S as N}from"./Select-BNQyE4B2.js";import{M as I}from"./MenuItem-D49pR0s9.js";import{E as oe,o as ie,D as le,a as ne,b as de,c as ce}from"./Delete-ClF5tXp0.js";const ue=H(e.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function pe(s){return Q("MuiAvatar",s)}K("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const me=s=>{const{classes:a,variant:t,colorDefault:i}=s;return Y({root:["root",t,i&&"colorDefault"],img:["img"],fallback:["fallback"]},pe,a)},fe=w("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(s,a)=>{const{ownerState:t}=s;return[a.root,a[t.variant],t.colorDefault&&a.colorDefault]}})($(({theme:s})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:s.typography.fontFamily,fontSize:s.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(s.vars||s).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:{color:(s.vars||s).palette.background.default,...s.vars?{backgroundColor:s.vars.palette.Avatar.defaultBg}:{backgroundColor:s.palette.grey[400],...s.applyStyles("dark",{backgroundColor:s.palette.grey[600]})}}}]}))),ge=w("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(s,a)=>a.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),xe=w(ue,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(s,a)=>a.fallback})({width:"75%",height:"75%"});function he({crossOrigin:s,referrerPolicy:a,src:t,srcSet:i}){const[l,r]=h.useState(!1);return h.useEffect(()=>{if(!t&&!i)return;r(!1);let o=!0;const n=new Image;return n.onload=()=>{o&&r("loaded")},n.onerror=()=>{o&&r("error")},n.crossOrigin=s,n.referrerPolicy=a,n.src=t,i&&(n.srcset=i),()=>{o=!1}},[s,a,t,i]),l}const ve=h.forwardRef(function(a,t){const i=G({props:a,name:"MuiAvatar"}),{alt:l,children:r,className:o,component:n="div",slots:p={},slotProps:u={},imgProps:f,sizes:k,src:g,srcSet:m,variant:b="circular",...v}=i;let d=null;const c=he({...f,src:g,srcSet:m}),A=g||m,M=A&&c!=="error",x={...i,colorDefault:!M,component:n,variant:b};delete x.ownerState;const S=me(x),[q,O]=J("img",{className:S.img,elementType:ge,externalForwardedProps:{slots:p,slotProps:{img:{...f,...u.img}}},additionalProps:{alt:l,src:g,srcSet:m,sizes:k},ownerState:x});return M?d=e.jsx(q,{...O}):r||r===0?d=r:A&&l?d=l[0]:d=e.jsx(xe,{ownerState:x,className:S.fallback}),e.jsx(fe,{as:n,className:X(S.root,o),ref:t,...v,ownerState:x,children:d})}),Ae=({team:s,excludeId:a,onDelete:t,editBtn:i,links:l=!0})=>{const r=s.filter(o=>o.id!==a);return e.jsxs(j,{direction:"row",sx:{flexWrap:"wrap",alignItems:"flex-start",gap:1},children:[i,r.map(o=>{var n;return e.jsx(D,{title:((n=o.position)==null?void 0:n.name)||"Unspecified position",arrow:!0,children:e.jsx(ae,{component:l?Z:"div",to:l?U("",L.Executors,o.id):void 0,avatar:e.jsx(ve,{children:o.name[0]}),label:o.name,sx:{fontWeight:400,fontSize:18,cursor:"pointer"},onDelete:t?()=>t(o.id):void 0})},o.id)})]})},je=({taskId:s,setEditedTask:a})=>{var v;const[t,i]=h.useState(!1),{projectId:l}=_();if(!l)return e.jsx(y,{children:"Error"});const r=T.getById(s);if(!r)return e.jsx(y,{children:"Error"});const o=re({defaultValues:{name:r.name,description:r.description,assigneeId:((v=r.assignee)==null?void 0:v.id)||R.Unspecified,status:r.status}}),{register:n,handleSubmit:p,getValues:u,control:f,formState:k,reset:g}=o,m=E.get(),b=()=>{const d={name:u("name").trim(),description:u("description").trim(),assigneeId:u("assigneeId"),status:u("status")},c={...r,name:d.name,description:d.description,status:d.status,assignee:E.getById(d.assigneeId)};i(!0),a(c),g(d)};return e.jsx("form",{onSubmit:p(b),noValidate:!0,children:e.jsxs(j,{spacing:2,children:[e.jsx(z,{id:"task-name",label:"Name",variant:"filled",autoFocus:!0,sx:{alignSelf:"flex-start",width:"100%"},size:"small",...n("name",{required:!0})}),e.jsx(z,{id:"task-description",label:"Description",variant:"filled",sx:{alignSelf:"flex-start",width:"100%"},size:"small",multiline:!0,minRows:3,maxRows:3,...n("description")}),e.jsx(F,{control:f,name:"assigneeId",render:({field:d})=>e.jsxs(P,{fullWidth:!0,children:[e.jsx(B,{id:"task-assignee-label",children:"Assignee"}),e.jsxs(N,{id:"task-assignee",labelId:"task-assignee-label",label:"Assignee",...d,sx:{alignSelf:"flex-start",width:"100%"},children:[e.jsx(I,{value:R.Unspecified,children:"Unspecified"}),m==null?void 0:m.data.map(c=>e.jsx(I,{value:c.id,children:c.name},c.id))]})]})}),e.jsx(F,{control:f,name:"status",render:({field:d})=>e.jsxs(P,{fullWidth:!0,children:[e.jsx(B,{id:"task-status-label",children:"Status"}),e.jsx(N,{id:"task-status",labelId:"task-status-label",label:"Status",...d,sx:{alignSelf:"flex-start",width:"100%"},children:te.map(c=>e.jsx(I,{value:c.id,children:c.label},c.id))})]})}),e.jsxs(j,{direction:"row",spacing:2,sx:{alignItems:"center"},children:[e.jsx(C,{variant:"contained",disabled:!k.isDirty,type:"submit",children:"Save"}),t&&e.jsx(y,{color:"success",children:"Changes saved."})]})]})})},Me=({id:s,name:a,onEditorClose:t,onPointerDown:i})=>{const[l,r]=h.useState(null),o=()=>{l&&T.update(l),t&&t()},{openModal:n,handleModalOpen:p,handleModalClose:u}=V(!1,o);return e.jsxs(e.Fragment,{children:[e.jsx(D,{title:"Edit",children:e.jsx(W,{size:"small",onPointerDown:i,onClick:p,children:e.jsx(oe,{})})}),e.jsx(ee,{title:`Edit task '${a}'`,open:n,onClose:u,children:e.jsx(je,{taskId:s,setEditedTask:r})})]})},ke=ie(({taskId:s,taskName:a,open:t,onClose:i,onDelete:l})=>{const r=()=>{T.delete(s),l&&l()};return e.jsx(le,{open:t,children:e.jsxs(j,{spacing:2,sx:{p:2},children:[e.jsxs(ne,{sx:{p:0,fontSize:20},children:["Are you sure you want to delete task '",a,"'?"]}),e.jsxs(de,{sx:{p:0,mt:0},children:[e.jsx(C,{color:"primary",variant:"contained",onClick:i,children:"Cancel"}),e.jsx(C,{color:"sensitive",variant:"contained",onClick:r,children:"Delete"})]})]})})}),Re=({id:s,projectId:a,name:t,onPointerDown:i,redirectOnDelete:l=!1})=>{const r=se(),o=l&&a?()=>r(U("",L.Projects,a)):null,{openModal:n,handleModalOpen:p,handleModalClose:u}=V(!1);return e.jsxs(e.Fragment,{children:[e.jsx(D,{title:"Delete",children:e.jsx(W,{size:"small",onPointerDown:i,onClick:p,children:e.jsx(ce,{})})}),e.jsx(ke,{taskId:s,taskName:t,open:n,onClose:u,onDelete:o})]})};export{ve as A,Re as D,Me as E,Ae as T};