import{j as e,T as t,S as i,P as p,t as g,g as j,h as u,i as P,k as m,B as b,a as T}from"./index-DxyMU2dh.js";import{p as w}from"./storage-Y0ULefLe.js";import{u as C,T as f,a as y,b as v,c as l,d as n,e as M,f as R}from"./useTablePagination-B5oxzoSd.js";import"./Select-B5bFYg-p.js";import"./useFormControl--TzOJ9qC.js";import"./MenuItem-CNKSMvrf.js";const k=({})=>{const s=w.get();if(!s||!s.length)return e.jsx(t,{children:"You haven't added any positions yet"});const{page:a,rowsPerPage:o,visibleRows:d,handleChangePage:c,handleChangeRowsPerPage:h}=C(s,12);return e.jsxs(i,{component:p,elevation:3,sx:{flexGrow:1,justifyContent:"space-between",overflow:"hidden"},children:[e.jsx(f,{children:e.jsxs(y,{children:[e.jsx(v,{sx:{bgcolor:g.palette.white.dark},children:e.jsxs(l,{children:[e.jsx(n,{sx:{py:1},children:"Position"}),e.jsx(n,{sx:{py:1},align:"right",children:"Executors"})]})}),e.jsx(M,{children:d.map((r,x)=>e.jsxs(l,{hover:!0,children:[e.jsx(n,{children:r.name}),e.jsx(n,{align:"right",children:"1"})]},r.name+x))})]})}),e.jsx(R,{rowsPerPageOptions:[12,25],component:"div",count:s.length,rowsPerPage:o,page:a,onPageChange:c,onRowsPerPageChange:h})]})},B=({open:s,onClose:a})=>e.jsx(j,{title:"Tutorial",open:s,onClose:a,children:e.jsxs(i,{spacing:1,sx:{pl:.5},children:[e.jsx(t,{children:"You can see all positions on this page."}),e.jsx(t,{children:"Position can be assigned to executor"})]})}),{Create:H}=T,S=({})=>{const{openModal:s,handleModalOpen:a,handleModalClose:o}=u();return e.jsxs(P,{title:"Positions",children:[e.jsx(m,{onClick:a}),e.jsx(B,{open:s,onClose:o}),e.jsx(b,{variant:"contained",to:H,children:"New"})]})},N=()=>e.jsxs(i,{sx:{height:"100%"},children:[e.jsx(S,{}),e.jsx(k,{})]});export{N as default};
