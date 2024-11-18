import{u as j,j as e,b as l,c as b,e as S,S as x,d as k,s as I,R as v,T as w}from"./index-M8xitAOu.js";import{a as T,t as F}from"./TaskColumn-D4zwICES.js";import{u as V,F as o}from"./index.esm-ClhOTKCj.js";import{T as u,I as c}from"./TextField-CAPKmTA8.js";import{S as m}from"./Select-4Pf-cQft.js";import{M as r}from"./MenuItem-DlgW24CP.js";import"./utils-DfPLg48c.js";const W=()=>{const{projectId:n}=j();if(!n)return e.jsx("p",{children:"Error"});const f=V({defaultValues:{name:"",description:"",assigneeId:l.Unspecified,status:"to do"}}),p=b(),{register:t,handleSubmit:h,getValues:a}=f,i=S.get(),g=()=>{const s={projectId:n,name:a("name"),description:a("description"),assigneeId:a("assigneeId"),status:a("status")},d=F.create(s);d&&p(I("",v.Projects,d.projectId))};return e.jsx("form",{onSubmit:h(g),noValidate:!0,children:e.jsxs(x,{spacing:2,children:[e.jsx(u,{id:"task-name",label:"Name",variant:"filled",autoFocus:!0,sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},size:"small",...t("name",{required:!0})}),e.jsx(u,{id:"task-description",label:"Description",variant:"filled",sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},size:"small",multiline:!0,minRows:3,maxRows:3,...t("description")}),e.jsxs(o,{fullWidth:!0,children:[e.jsx(c,{id:"task-assignee-label",children:"Assignee"}),e.jsxs(m,{id:"task-assignee",labelId:"task-assignee-label",label:"Assignee",defaultValue:l.Unspecified,sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},...t("assigneeId"),children:[e.jsx(r,{value:l.Unspecified,selected:!0,children:"Unspecified"}),!!(i!=null&&i.data.length)&&i.data.map(s=>e.jsx(r,{value:s.id,children:s.name},s.id))]})]}),e.jsxs(o,{fullWidth:!0,children:[e.jsx(c,{id:"task-status-label",children:"Status"}),e.jsx(m,{id:"task-status",labelId:"task-status-label",label:"Status",defaultValue:"to do",sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},...t("status"),children:T.map(s=>e.jsx(r,{value:s.id,selected:s.id==="to do",children:s.label},s.id))})]}),e.jsx(k,{variant:"contained",type:"submit",sx:{alignSelf:"flex-start"},children:"Create"})]})})},A=({})=>e.jsxs(x,{spacing:2,children:[e.jsx(w,{variant:"h1",children:"New task"}),e.jsx(W,{})]});export{A as default};
