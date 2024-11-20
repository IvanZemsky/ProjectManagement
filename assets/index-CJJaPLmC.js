import{u as j,j as e,c as l,d as S,e as b,S as x,f as k,s as I,R as v,T as w}from"./index-C-jB6FNB.js";import{t as T}from"./store-D9YZTOGP.js";import{t as F}from"./constants-CaX98ONQ.js";import"./TaskColumn-Dh9yuy7A.js";import{u as V,F as o}from"./index.esm-hwsnyq1X.js";import{T as u,I as c}from"./TextField-DlPsTCXm.js";import{S as m}from"./Select-B_KLR2p3.js";import{M as r}from"./MenuItem-BmaKOZhk.js";import"./utils-DTIyCc5Y.js";const W=()=>{const{projectId:n}=j();if(!n)return e.jsx("p",{children:"Error"});const f=V({defaultValues:{name:"",description:"",assigneeId:l.Unspecified,status:"to do"}}),p=S(),{register:t,handleSubmit:h,getValues:a}=f,i=b.get(),g=()=>{const s={projectId:n,name:a("name"),description:a("description"),assigneeId:a("assigneeId"),status:a("status")},d=T.create(s);d&&p(I("",v.Projects,d.projectId))};return e.jsx("form",{onSubmit:h(g),noValidate:!0,children:e.jsxs(x,{spacing:2,children:[e.jsx(u,{id:"task-name",label:"Name",variant:"filled",autoFocus:!0,sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},size:"small",...t("name",{required:!0})}),e.jsx(u,{id:"task-description",label:"Description",variant:"filled",sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},size:"small",multiline:!0,minRows:3,maxRows:3,...t("description")}),e.jsxs(o,{fullWidth:!0,children:[e.jsx(c,{id:"task-assignee-label",children:"Assignee"}),e.jsxs(m,{id:"task-assignee",labelId:"task-assignee-label",label:"Assignee",defaultValue:l.Unspecified,sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},...t("assigneeId"),children:[e.jsx(r,{value:l.Unspecified,selected:!0,children:"Unspecified"}),!!(i!=null&&i.data.length)&&i.data.map(s=>e.jsx(r,{value:s.id,children:s.name},s.id))]})]}),e.jsxs(o,{fullWidth:!0,children:[e.jsx(c,{id:"task-status-label",children:"Status"}),e.jsx(m,{id:"task-status",labelId:"task-status-label",label:"Status",defaultValue:"to do",sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},...t("status"),children:F.map(s=>e.jsx(r,{value:s.id,selected:s.id==="to do",children:s.label},s.id))})]}),e.jsx(k,{variant:"contained",type:"submit",sx:{alignSelf:"flex-start"},children:"Create"})]})})},M=({})=>e.jsxs(x,{spacing:2,children:[e.jsx(w,{variant:"h1",children:"New task"}),e.jsx(W,{})]});export{M as default};
