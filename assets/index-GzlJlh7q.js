import{c as j,j as e,a as l,u as b,e as S,S as x,b as k,s as I,R as v,T as w}from"./index-D9BQda8C.js";import{t as T,a as V}from"./TaskColumn-CLSRsrzi.js";import{u as W,F as o}from"./index.esm-lfsrom8z.js";import{T as u,I as c}from"./TextField-Df-62znA.js";import{S as m}from"./Select-CJ3_jBZx.js";import{M as r}from"./MenuItem-DVspLN0o.js";import"./utils-CGqzzuYx.js";const C=()=>{const{id:n}=j();if(!n)return e.jsx("p",{children:"Error"});const f=W({defaultValues:{name:"",description:"",assigneeId:l.Unspecified,status:"to do"}}),p=b(),{register:a,handleSubmit:h,getValues:t}=f,i=S.get(),g=()=>{const s={projectId:n,name:t("name"),description:t("description"),assigneeId:t("assigneeId"),status:t("status")},d=V.create(s);d&&p(I("",v.Projects,d.projectId))};return e.jsx("form",{onSubmit:h(g),noValidate:!0,children:e.jsxs(x,{spacing:2,children:[e.jsx(u,{id:"task-name",label:"Name",variant:"filled",sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},size:"small",...a("name",{required:!0})}),e.jsx(u,{id:"task-description",label:"Description",variant:"filled",sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},size:"small",multiline:!0,minRows:3,maxRows:3,...a("description")}),e.jsxs(o,{fullWidth:!0,children:[e.jsx(c,{id:"task-assignee-label",children:"Assignee"}),e.jsxs(m,{id:"task-assignee",labelId:"task-assignee-label",label:"Assignee",defaultValue:l.Unspecified,sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},...a("assigneeId"),children:[e.jsx(r,{value:l.Unspecified,selected:!0,children:"Unspecified"}),!!(i!=null&&i.data.length)&&i.data.map(s=>e.jsx(r,{value:s.id,children:s.name},s.id))]})]}),e.jsxs(o,{fullWidth:!0,children:[e.jsx(c,{id:"task-status-label",children:"Status"}),e.jsx(m,{id:"task-status",labelId:"task-status-label",label:"Status",defaultValue:"to do",sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},...a("status"),children:T.map(s=>e.jsx(r,{value:s.id,selected:s.id==="to do",children:s.label},s.id))})]}),e.jsx(k,{variant:"contained",type:"submit",sx:{alignSelf:"flex-start"},children:"Create"})]})})},A=({})=>e.jsxs(x,{spacing:2,children:[e.jsx(w,{variant:"h1",children:"New task"}),e.jsx(C,{})]});export{A as default};
