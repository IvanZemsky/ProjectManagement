import{r as d,i as E,k as U,l as A,m as ae,D as O,o as I,p as b,F as oe,J as se,q as F,j as t,y as Y,z as K,K as H,S as C,P as q,T as f,M as J,t as G,N as ne,L as Q,f as re,g as le,B as ie,R as X,A as Z,C as de,s as ce,h as pe,O as ue,Q as ge,U as xe}from"./index-B7jr68fc.js";import{M as he,e as fe}from"./Select-Dyh0LWU8.js";import{p as _}from"./storage-0y5OxR0q.js";import{d as m,u as ve,T as be,a as je,b as Ce,c as W,e as ye,f as Be}from"./useTablePagination-Chb68X2j.js";import"./MenuItem-qfVLfZry.js";function me(e){return d.Children.toArray(e).filter(a=>d.isValidElement(a))}function $e(e){return U("MuiToggleButton",e)}const j=E("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge","fullWidth"]),ee=d.createContext({}),te=d.createContext(void 0);function Te(e,a){return a===void 0||e===void 0?!1:Array.isArray(a)?a.includes(e):e===a}const we=e=>{const{classes:a,fullWidth:o,selected:n,disabled:l,size:c,color:r}=e,u={root:["root",n&&"selected",l&&"disabled",o&&"fullWidth",`size${O(c)}`,r]};return K(u,$e,a)},Re=A(ae,{name:"MuiToggleButton",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[`size${O(o.size)}`]]}})(I(({theme:e})=>({...e.typography.button,borderRadius:(e.vars||e).shape.borderRadius,padding:11,border:`1px solid ${(e.vars||e).palette.divider}`,color:(e.vars||e).palette.action.active,[`&.${j.disabled}`]:{color:(e.vars||e).palette.action.disabled,border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:b(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[{props:{color:"standard"},style:{[`&.${j.selected}`]:{color:(e.vars||e).palette.text.primary,backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.selectedOpacity})`:b(e.palette.text.primary,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:b(e.palette.text.primary,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.selectedOpacity})`:b(e.palette.text.primary,e.palette.action.selectedOpacity)}}}}},...Object.entries(e.palette).filter(oe()).map(([a])=>({props:{color:a},style:{[`&.${j.selected}`]:{color:(e.vars||e).palette[a].main,backgroundColor:e.vars?`rgba(${e.vars.palette[a].mainChannel} / ${e.vars.palette.action.selectedOpacity})`:b(e.palette[a].main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[a].mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:b(e.palette[a].main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette[a].mainChannel} / ${e.vars.palette.action.selectedOpacity})`:b(e.palette[a].main,e.palette.action.selectedOpacity)}}}}})),{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{padding:7,fontSize:e.typography.pxToRem(13)}},{props:{size:"large"},style:{padding:15,fontSize:e.typography.pxToRem(15)}}]}))),N=d.forwardRef(function(a,o){const{value:n,...l}=d.useContext(ee),c=d.useContext(te),r=se({...l,selected:Te(a.value,n)},a),u=F({props:r,name:"MuiToggleButton"}),{children:v,className:$,color:x="standard",disabled:z=!1,disableFocusRipple:y=!1,fullWidth:p=!1,onChange:T,onClick:w,selected:h,size:M="medium",value:B,...L}=u,R={...u,color:x,disabled:z,disableFocusRipple:y,fullWidth:p,size:M},V=we(R),S=i=>{w&&(w(i,B),i.defaultPrevented)||T&&T(i,B)},g=c||"";return t.jsx(Re,{className:Y(l.className,V.root,$,g),disabled:z,focusRipple:!y,ref:o,onClick:S,onChange:T,value:B,ownerState:R,"aria-pressed":h,...L,children:v})});function Pe(e){return U("MuiToggleButtonGroup",e)}const s=E("MuiToggleButtonGroup",["root","selected","horizontal","vertical","disabled","grouped","groupedHorizontal","groupedVertical","fullWidth","firstButton","lastButton","middleButton"]),ze=e=>{const{classes:a,orientation:o,fullWidth:n,disabled:l}=e,c={root:["root",o,n&&"fullWidth"],grouped:["grouped",`grouped${O(o)}`,l&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return K(c,Pe,a)},Me=A("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[{[`& .${s.grouped}`]:a.grouped},{[`& .${s.grouped}`]:a[`grouped${O(o.orientation)}`]},{[`& .${s.firstButton}`]:a.firstButton},{[`& .${s.lastButton}`]:a.lastButton},{[`& .${s.middleButton}`]:a.middleButton},a.root,o.orientation==="vertical"&&a.vertical,o.fullWidth&&a.fullWidth]}})(I(({theme:e})=>({display:"inline-flex",borderRadius:(e.vars||e).shape.borderRadius,variants:[{props:{orientation:"vertical"},style:{flexDirection:"column",[`& .${s.grouped}`]:{[`&.${s.selected} + .${s.grouped}.${s.selected}`]:{borderTop:0,marginTop:0}},[`& .${s.firstButton},& .${s.middleButton}`]:{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`& .${s.lastButton},& .${s.middleButton}`]:{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},[`& .${s.lastButton}.${j.disabled},& .${s.middleButton}.${j.disabled}`]:{borderTop:"1px solid transparent"}}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{orientation:"horizontal"},style:{[`& .${s.grouped}`]:{[`&.${s.selected} + .${s.grouped}.${s.selected}`]:{borderLeft:0,marginLeft:0}},[`& .${s.firstButton},& .${s.middleButton}`]:{borderTopRightRadius:0,borderBottomRightRadius:0},[`& .${s.lastButton},& .${s.middleButton}`]:{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},[`& .${s.lastButton}.${j.disabled},& .${s.middleButton}.${j.disabled}`]:{borderLeft:"1px solid transparent"}}}]}))),ke=d.forwardRef(function(a,o){const n=F({props:a,name:"MuiToggleButtonGroup"}),{children:l,className:c,color:r="standard",disabled:u=!1,exclusive:v=!1,fullWidth:$=!1,onChange:x,orientation:z="horizontal",size:y="medium",value:p,...T}=n,w={...n,disabled:u,fullWidth:$,orientation:z,size:y},h=ze(w),M=d.useCallback((g,i)=>{if(!x)return;const P=p&&p.indexOf(i);let k;p&&P>=0?(k=p.slice(),k.splice(P,1)):k=p?p.concat(i):[i],x(g,k)},[x,p]),B=d.useCallback((g,i)=>{x&&x(g,p===i?null:i)},[x,p]),L=d.useMemo(()=>({className:h.grouped,onChange:v?B:M,value:p,size:y,fullWidth:$,color:r,disabled:u}),[h.grouped,v,B,M,p,y,$,r,u]),R=me(l),V=R.length,S=g=>{const i=g===0,P=g===V-1;return i&&P?"":i?h.firstButton:P?h.lastButton:h.middleButton};return t.jsx(Me,{role:"group",className:Y(h.root,c),ref:o,ownerState:w,...T,children:t.jsx(ee.Provider,{value:L,children:R.map((g,i)=>t.jsx(te.Provider,{value:S(i),children:g},i))})})}),Oe=H(t.jsx("path",{d:"M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7a.996.996 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41s1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"}),"CloseRounded"),Le={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",maxWidth:700,p:2},Ve=({title:e,open:a,onClose:o,children:n})=>{const l=c=>{c.key==="Escape"&&o()};return d.useEffect(()=>(document.addEventListener("keydown",l),()=>{document.removeEventListener("keydown",l)}),[]),t.jsx(he,{open:a,onClose:o,children:t.jsx(fe,{in:a,children:t.jsxs(C,{component:q,elevation:3,spacing:1,sx:{...Le},children:[t.jsxs(C,{direction:"row",spacing:2,sx:{justifyContent:"space-between"},children:[t.jsx(f,{variant:"h3",children:e}),t.jsx(J,{color:"primary",size:"small",onClick:o,children:t.jsx(Oe,{})})]}),n]})})})},Se=({to:e,sx:a,children:o})=>t.jsx(m,{sx:{":hover":{bgcolor:G.palette.white.dark},cursor:"pointer",p:0},children:t.jsx(ne,{component:Q,to:e,sx:{display:"block",p:2,width:"100%",...a},children:o})}),He=e=>{const[a,o]=d.useState(!1);return{openModal:a,handleModalOpen:()=>{o(!0)},handleModalClose:()=>{o(!1)}}},Ge=H(t.jsx("path",{d:"M3 14h4v-4H3zm0 5h4v-4H3zM3 9h4V5H3zm5 5h13v-4H8zm0 5h13v-4H8zM8 5v4h13V5z"}),"ViewList"),We=H(t.jsx("path",{d:"M14.67 5v6.5H9.33V5zm1 6.5H21V5h-5.33zm-1 7.5v-6.5H9.33V19zm1-6.5V19H21v-6.5zm-7.34 0H3V19h5.33zm0-1V5H3v6.5z"}),"ViewModule"),Ne=({open:e,onClose:a})=>t.jsx(Ve,{title:"Tutorial",open:e,onClose:a,children:t.jsxs(C,{spacing:1,sx:{pl:.5},children:[t.jsx(f,{children:"You can see all your projects on this page."}),t.jsx(f,{children:"You can also create new project. The main parts of project are its team and tasks."}),t.jsx(f,{children:"Team of a project is formed from executors. Team also includes lead of project if they are specified"})]})}),{Create:De,Projects:Ze,Docs:_e}=X,Ee=({externalState:e})=>{const a=(c,r)=>{e.setView(r),Z.set("projectsView",r)},{openModal:o,handleModalOpen:n,handleModalClose:l}=He();return t.jsxs(re,{title:"Projects",children:[t.jsx(J,{sx:{p:.5},onClick:n,children:t.jsx(le,{})}),t.jsx(Ne,{open:o,onClose:l}),t.jsx(ie,{variant:"contained",to:De,children:"New"}),t.jsxs(ke,{color:"primary",value:e.view,exclusive:!0,onChange:a,sx:{height:"38px"},children:[t.jsx(N,{value:"cards","aria-label":"cards",children:t.jsx(We,{})}),t.jsx(N,{value:"table","aria-label":"table",children:t.jsx(Ge,{})})]})]})},Ue=({id:e,name:a,description:o,lead:n,startDate:l,endDate:c})=>t.jsx(de,{variant:"outlined",component:Q,to:ce("",X.Projects,e),sx:{textDecoration:"none",":hover":{boxShadow:5}},children:t.jsxs(pe,{sx:{display:"flex",flexDirection:"column",gap:1,height:"100%"},children:[t.jsx(f,{sx:{fontWeight:500,fontSize:20},children:a}),t.jsxs(C,{spacing:1,sx:{mt:"auto"},children:[t.jsx(f,{children:o}),t.jsx(f,{sx:{backgroundColor:G.palette.secondary.light,paddingY:.5,paddingX:1,borderRadius:1},children:(n==null?void 0:n.name)||"Unspecified lead"}),t.jsxs(f,{children:[l," - ",c]})]})]})}),D=12,Ae=({})=>{const[e,a]=d.useState(1),o=_.get(D,e);return!o||!o.data.length?t.jsx("p",{children:"You haven't added any projects yet"}):t.jsxs(C,{spacing:2,sx:{flexGrow:1,justifyContent:"space-between"},children:[t.jsx(ue,{minItemWidth:"300px",spacing:2,children:o==null?void 0:o.data.map(n=>t.jsx(Ue,{...n},n.id))}),t.jsx(ge,{itemsCount:o.totalCount,limit:D,currentPage:e,setPage:a})]})},Ie=[{label:"Name",align:"left"},{label:"Lead",align:"right"},{label:"Team size",align:"right"},{label:"Start date",align:"right"},{label:"End date",align:"right"}],Fe=({})=>{const e=_.get();if(!e||!e.data.length)return t.jsx("p",{children:"You haven't added any projects yet"});const{page:a,rowsPerPage:o,visibleRows:n,handleChangePage:l,handleChangeRowsPerPage:c}=ve(e.data,12);return t.jsxs(C,{component:q,elevation:3,sx:{flexGrow:1,justifyContent:"space-between",overflow:"hidden"},children:[t.jsx(be,{children:t.jsxs(je,{children:[t.jsx(Ce,{sx:{bgcolor:G.palette.white.dark},children:t.jsx(W,{children:Ie.map(r=>t.jsx(m,{sx:{py:1},align:r.align,children:r.label},r.label))})}),t.jsx(ye,{children:n.map((r,u)=>{var v;return t.jsxs(W,{hover:!0,children:[t.jsx(Se,{to:r.id,children:r.name}),t.jsx(m,{align:"right",children:((v=r.lead)==null?void 0:v.name)||"Unspecified"}),t.jsx(m,{align:"right",children:r.team.length}),t.jsx(m,{align:"right",children:r.startDate}),t.jsx(m,{align:"right",children:r.endDate})]},r.name+u)})})]})}),t.jsx(Be,{rowsPerPageOptions:[12,25],component:"div",count:e.data.length,rowsPerPage:o,page:a,onPageChange:l,onRowsPerPageChange:c})]})},Ye=Z.get("projectsView")||"cards",et=()=>{const[e,a]=d.useState(Ye);return e?t.jsxs(C,{sx:{height:"100%"},children:[t.jsx(Ee,{externalState:{view:e,setView:a}}),e==="cards"&&t.jsx(Ae,{}),e==="table"&&t.jsx(Fe,{})]}):t.jsx(xe,{})};export{et as default};