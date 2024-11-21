import{u as b,j as e,T as x,b as l,d as S,e as k,S as f,f as I,s as v,R as w}from"./index-CALslcgW.js";import{t as T}from"./store-Dl7FaPhY.js";import{t as F}from"./constants-CaX98ONQ.js";import"./TaskColumn-BEvx6-Lq.js";import{u as V,F as o}from"./index.esm-D8IyPk3G.js";import{T as u,I as m}from"./TextField-1CeUxQMA.js";import{S as c}from"./Select-DlWwfj1p.js";import{M as r}from"./MenuItem-MNCwVu8Y.js";import"./utils-Bt3GB74b.js";const W=()=>{const{projectId:n}=b();if(!n)return e.jsx(x,{children:"Error"});const p=V({defaultValues:{name:"",description:"",assigneeId:l.Unspecified,status:"to do"}}),h=S(),{register:t,handleSubmit:g,getValues:a}=p,i=k.get(),j=()=>{const s={projectId:n,name:a("name"),description:a("description"),assigneeId:a("assigneeId"),status:a("status")},d=T.create(s);d&&h(v("",w.Projects,d.projectId))};return e.jsx("form",{onSubmit:g(j),noValidate:!0,children:e.jsxs(f,{spacing:2,children:[e.jsx(u,{id:"task-name",label:"Name",variant:"filled",autoFocus:!0,sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},size:"small",...t("name",{required:!0})}),e.jsx(u,{id:"task-description",label:"Description",variant:"filled",sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},size:"small",multiline:!0,minRows:3,maxRows:3,...t("description")}),e.jsxs(o,{fullWidth:!0,children:[e.jsx(m,{id:"task-assignee-label",children:"Assignee"}),e.jsxs(c,{id:"task-assignee",labelId:"task-assignee-label",label:"Assignee",defaultValue:l.Unspecified,sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},...t("assigneeId"),children:[e.jsx(r,{value:l.Unspecified,selected:!0,children:"Unspecified"}),!!(i!=null&&i.data.length)&&i.data.map(s=>e.jsx(r,{value:s.id,children:s.name},s.id))]})]}),e.jsxs(o,{fullWidth:!0,children:[e.jsx(m,{id:"task-status-label",children:"Status"}),e.jsx(c,{id:"task-status",labelId:"task-status-label",label:"Status",defaultValue:"to do",sx:{alignSelf:"flex-start",maxWidth:400,width:"100%"},...t("status"),children:F.map(s=>e.jsx(r,{value:s.id,selected:s.id==="to do",children:s.label},s.id))})]}),e.jsx(I,{variant:"contained",type:"submit",sx:{alignSelf:"flex-start"},children:"Create"})]})})},M=({})=>e.jsxs(f,{spacing:2,children:[e.jsx(x,{variant:"h1",children:"New task"}),e.jsx(W,{})]});export{M as default};
