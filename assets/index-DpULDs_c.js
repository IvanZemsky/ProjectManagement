import{r as d,j as t,T as n,S as i,h as p,P as j,u as l,e as u,g as h,i as g}from"./index-CALslcgW.js";import{t as m}from"./store-Dl7FaPhY.js";import{T as f}from"./TaskColumn-BEvx6-Lq.js";import{p as P}from"./store-By_SzlHW.js";import{P as C}from"./ProjectCard-q31MzPpD.js";const c=5,y=({executorId:s})=>{const[e,r]=d.useState(1),a=m.getAllWithExecutor(s,e,c);return a.data.length?t.jsxs(i,{spacing:1,children:[t.jsx(n,{variant:"h3",children:"Assigned to tasks"}),t.jsxs(i,{spacing:2,sx:{flexGrow:1,justifyContent:"space-between"},children:[t.jsx(p,{minItemWidth:"270px",spacing:2,children:a.data.map(o=>t.jsx(f,{data:o},o.id))}),t.jsx(j,{currentPage:e,setPage:r,itemsCount:a.totalCount,limit:c})]})]}):t.jsx(n,{children:"This executor has not yet been assigned to tasks"})},x=5,E=({executorId:s})=>{const[e,r]=d.useState(1),a=P.getAllWithLead(s,e,x);return a.data.length?t.jsxs(i,{spacing:1,children:[t.jsx(n,{variant:"h3",children:"Appointed to projects"}),t.jsxs(i,{spacing:2,sx:{flexGrow:1,justifyContent:"space-between"},children:[t.jsx(p,{minItemWidth:"270px",spacing:2,children:a.data.map(o=>t.jsx(C,{data:o},o.id))}),t.jsx(j,{currentPage:e,setPage:r,itemsCount:a.totalCount,limit:x})]})]}):t.jsx(n,{children:"This executor has not yet been appointed project lead"})},w=({})=>{var r;const{executorId:s}=l(),e=u.getById(s);return!s||!e?t.jsx(n,{children:"Error"}):t.jsxs(i,{spacing:2,children:[t.jsxs(h,{children:[t.jsx(g,{title:e.name}),t.jsx(n,{children:((r=e.position)==null?void 0:r.name)||"Unspecified position"})]}),t.jsxs(i,{spacing:3,children:[t.jsx(y,{executorId:s}),t.jsx(E,{executorId:s})]})]})};export{w as default};