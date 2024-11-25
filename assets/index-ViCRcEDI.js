import{K as S,j as e,T as x,F as l,N as b,S as f,H as k,M as I,R as v}from"./index-DW7niEK_.js";import{e as w,t as F}from"./store-DDDbk47J.js";import{t as T}from"./constants-DWoOd6FE.js";import"./TaskColumn-Cf5tcA9W.js";import{u as V,F as o}from"./index.esm-BZsw8hz4.js";import{T as u,I as m}from"./TextField-D9CnMREb.js";import{S as c}from"./Select-DnoR1PEi.js";import{M as r}from"./MenuItem-3KFYzs4i.js";import"./CardContent-DhbWX8Eh.js";import"./utils-C_uqNxTM.js";const W=()=>{const{projectId:n}=S();if(!n)return e.jsx(x,{children:"Error"});const p=V({defaultValues:{name:"",description:"",assigneeId:l.Unspecified,status:"to do"}}),h=b(),{register:t,handleSubmit:g,getValues:a}=p,i=w.get(),j=()=>{const s={projectId:n,name:a("name"),description:a("description"),assigneeId:a("assigneeId"),status:a("status")},d=F.create(s);d&&h(I("",v.Projects,d.projectId))};return e.jsx("form",{onSubmit:g(j),noValidate:!0,children:e.jsxs(f,{spacing:2,children:[e.jsx(u,{id:"task-name",label:"Name",variant:"filled",autoFocus:!0,sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},size:"small",...t("name",{required:!0})}),e.jsx(u,{id:"task-description",label:"Description",variant:"filled",sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},size:"small",multiline:!0,minRows:3,maxRows:3,...t("description")}),e.jsxs(o,{fullWidth:!0,children:[e.jsx(m,{id:"task-assignee-label",children:"Assignee"}),e.jsxs(c,{id:"task-assignee",labelId:"task-assignee-label",label:"Assignee",defaultValue:l.Unspecified,sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},...t("assigneeId"),children:[e.jsx(r,{value:l.Unspecified,selected:!0,children:"Unspecified"}),!!(i!=null&&i.data.length)&&i.data.map(s=>e.jsx(r,{value:s.id,children:s.name},s.id))]})]}),e.jsxs(o,{fullWidth:!0,children:[e.jsx(m,{id:"task-status-label",children:"Status"}),e.jsx(c,{id:"task-status",labelId:"task-status-label",label:"Status",defaultValue:"to do",sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},...t("status"),children:T.map(s=>e.jsx(r,{value:s.id,selected:s.id==="to do",children:s.label},s.id))})]}),e.jsx(k,{variant:"contained",type:"submit",sx:{alignSelf:"flex-start"},children:"Create"})]})})},q=({})=>e.jsxs(f,{spacing:2,children:[e.jsx(x,{variant:"h1",children:"New task"}),e.jsx(W,{})]});export{q as default};