import{j as e,f as p,a as t,T as r,P as g,t as j,g as P,h as u,B as m,R as b}from"./index-CeIrnNpe.js";import{u as T,T as w,a as C,b as f,c as l,d as n,e as y,f as v,g as R}from"./useTablePagination-tiQAOARD.js";import{p as M}from"./storage-DpcmLUvR.js";import"./Select-h7NFIA8c.js";import"./useFormControl-Clfv13Eq.js";import"./MenuItem-BGXQHYWy.js";const B=({open:s,onClose:a})=>e.jsx(p,{title:"Tutorial",open:s,onClose:a,children:e.jsxs(t,{spacing:1,sx:{pl:.5},children:[e.jsx(r,{children:"You can see all positions on this page."}),e.jsx(r,{children:"Position can be assigned to executor"})]})}),k=({})=>{const s=M.get();if(!s||!s.length)return e.jsx("p",{children:"You haven't added any positions yet"});const{page:a,rowsPerPage:o,visibleRows:d,handleChangePage:c,handleChangeRowsPerPage:h}=T(s,12);return e.jsxs(t,{component:g,elevation:3,sx:{flexGrow:1,justifyContent:"space-between",overflow:"hidden"},children:[e.jsx(w,{children:e.jsxs(C,{children:[e.jsx(f,{sx:{bgcolor:j.palette.white.dark},children:e.jsxs(l,{children:[e.jsx(n,{sx:{py:1},children:"Position"}),e.jsx(n,{sx:{py:1},align:"right",children:"Executors"})]})}),e.jsx(y,{children:d.map((i,x)=>e.jsxs(l,{hover:!0,children:[e.jsx(n,{children:i.name}),e.jsx(n,{align:"right",children:"1"})]},i.name+x))})]})}),e.jsx(v,{rowsPerPageOptions:[12,25],component:"div",count:s.length,rowsPerPage:o,page:a,onPageChange:c,onRowsPerPageChange:h})]})},{Create:E}=b,L=()=>{const{openModal:s,handleModalOpen:a,handleModalClose:o}=P();return e.jsxs(t,{sx:{height:"100%"},children:[e.jsxs(u,{title:"Positions",children:[e.jsx(R,{onClick:a}),e.jsx(B,{open:s,onClose:o}),e.jsx(m,{variant:"contained",to:E,children:"New"})]}),e.jsx(k,{})]})};export{L as default};
