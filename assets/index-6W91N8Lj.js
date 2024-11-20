import{r as d,q as N,w as D,x as U,y as Q,K as O,D as A,E as v,O as X,Z as tt,F as E,j as a,I,J as F,t as Y,_ as et,L as at,W as _,l as ot,S as M,T as w,n as st,i as rt,o as nt,B as lt,R as it,A as q,h as dt,P as ct,k as ut}from"./index-C-jB6FNB.js";import{p as J}from"./store-4Z5bi62p.js";import{P as pt}from"./ProjectCard-C2Vwr1Hh.js";import{d as y,u as gt,T as xt,a as ft,b as ht,c as H,e as vt,f as bt}from"./useTablePagination-BrJwAOrk.js";import"./store-D9YZTOGP.js";import"./Select-B_KLR2p3.js";import"./utils-DTIyCc5Y.js";import"./MenuItem-BmaKOZhk.js";function Bt(t){return d.Children.toArray(t).filter(e=>d.isValidElement(e))}function Ct(t){return D("MuiToggleButton",t)}const b=N("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge","fullWidth"]),K=d.createContext({}),Z=d.createContext(void 0);function yt(t,e){return e===void 0||t===void 0?!1:Array.isArray(e)?e.includes(t):t===e}const jt=t=>{const{classes:e,fullWidth:o,selected:l,disabled:c,size:u,color:r}=t,p={root:["root",l&&"selected",c&&"disabled",o&&"fullWidth",`size${O(u)}`,r]};return F(p,Ct,e)},mt=U(Q,{name:"MuiToggleButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[e.root,e[`size${O(o.size)}`]]}})(A(({theme:t})=>({...t.typography.button,borderRadius:(t.vars||t).shape.borderRadius,padding:11,border:`1px solid ${(t.vars||t).palette.divider}`,color:(t.vars||t).palette.action.active,[`&.${b.disabled}`]:{color:(t.vars||t).palette.action.disabled,border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:v(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[{props:{color:"standard"},style:{[`&.${b.selected}`]:{color:(t.vars||t).palette.text.primary,backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.selectedOpacity})`:v(t.palette.text.primary,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:v(t.palette.text.primary,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.selectedOpacity})`:v(t.palette.text.primary,t.palette.action.selectedOpacity)}}}}},...Object.entries(t.palette).filter(X()).map(([e])=>({props:{color:e},style:{[`&.${b.selected}`]:{color:(t.vars||t).palette[e].main,backgroundColor:t.vars?`rgba(${t.vars.palette[e].mainChannel} / ${t.vars.palette.action.selectedOpacity})`:v(t.palette[e].main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[e].mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:v(t.palette[e].main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette[e].mainChannel} / ${t.vars.palette.action.selectedOpacity})`:v(t.palette[e].main,t.palette.action.selectedOpacity)}}}}})),{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{padding:7,fontSize:t.typography.pxToRem(13)}},{props:{size:"large"},style:{padding:15,fontSize:t.typography.pxToRem(15)}}]}))),G=d.forwardRef(function(e,o){const{value:l,...c}=d.useContext(K),u=d.useContext(Z),r=tt({...c,selected:yt(e.value,l)},e),p=E({props:r,name:"MuiToggleButton"}),{children:h,className:j,color:x="standard",disabled:P=!1,disableFocusRipple:B=!1,fullWidth:i=!1,onChange:m,onClick:$,selected:f,size:z="medium",value:C,...V}=p,T={...p,color:x,disabled:P,disableFocusRipple:B,fullWidth:i,size:z},L=jt(T),S=n=>{$&&($(n,C),n.defaultPrevented)||m&&m(n,C)},g=u||"";return a.jsx(mt,{className:I(c.className,L.root,j,g),disabled:P,focusRipple:!B,ref:o,onClick:S,onChange:m,value:C,ownerState:T,"aria-pressed":f,...V,children:h})});function $t(t){return D("MuiToggleButtonGroup",t)}const s=N("MuiToggleButtonGroup",["root","selected","horizontal","vertical","disabled","grouped","groupedHorizontal","groupedVertical","fullWidth","firstButton","lastButton","middleButton"]),Tt=t=>{const{classes:e,orientation:o,fullWidth:l,disabled:c}=t,u={root:["root",o,l&&"fullWidth"],grouped:["grouped",`grouped${O(o)}`,c&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return F(u,$t,e)},Rt=U("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:o}=t;return[{[`& .${s.grouped}`]:e.grouped},{[`& .${s.grouped}`]:e[`grouped${O(o.orientation)}`]},{[`& .${s.firstButton}`]:e.firstButton},{[`& .${s.lastButton}`]:e.lastButton},{[`& .${s.middleButton}`]:e.middleButton},e.root,o.orientation==="vertical"&&e.vertical,o.fullWidth&&e.fullWidth]}})(A(({theme:t})=>({display:"inline-flex",borderRadius:(t.vars||t).shape.borderRadius,variants:[{props:{orientation:"vertical"},style:{flexDirection:"column",[`& .${s.grouped}`]:{[`&.${s.selected} + .${s.grouped}.${s.selected}`]:{borderTop:0,marginTop:0}},[`& .${s.firstButton},& .${s.middleButton}`]:{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`& .${s.lastButton},& .${s.middleButton}`]:{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},[`& .${s.lastButton}.${b.disabled},& .${s.middleButton}.${b.disabled}`]:{borderTop:"1px solid transparent"}}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{orientation:"horizontal"},style:{[`& .${s.grouped}`]:{[`&.${s.selected} + .${s.grouped}.${s.selected}`]:{borderLeft:0,marginLeft:0}},[`& .${s.firstButton},& .${s.middleButton}`]:{borderTopRightRadius:0,borderBottomRightRadius:0},[`& .${s.lastButton},& .${s.middleButton}`]:{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},[`& .${s.lastButton}.${b.disabled},& .${s.middleButton}.${b.disabled}`]:{borderLeft:"1px solid transparent"}}}]}))),wt=d.forwardRef(function(e,o){const l=E({props:e,name:"MuiToggleButtonGroup"}),{children:c,className:u,color:r="standard",disabled:p=!1,exclusive:h=!1,fullWidth:j=!1,onChange:x,orientation:P="horizontal",size:B="medium",value:i,...m}=l,$={...l,disabled:p,fullWidth:j,orientation:P,size:B},f=Tt($),z=d.useCallback((g,n)=>{if(!x)return;const R=i&&i.indexOf(n);let k;i&&R>=0?(k=i.slice(),k.splice(R,1)):k=i?i.concat(n):[n],x(g,k)},[x,i]),C=d.useCallback((g,n)=>{x&&x(g,i===n?null:n)},[x,i]),V=d.useMemo(()=>({className:f.grouped,onChange:h?C:z,value:i,size:B,fullWidth:j,color:r,disabled:p}),[f.grouped,h,C,z,i,B,j,r,p]),T=Bt(c),L=T.length,S=g=>{const n=g===0,R=g===L-1;return n&&R?"":n?f.firstButton:R?f.lastButton:f.middleButton};return a.jsx(Rt,{role:"group",className:I(f.root,u),ref:o,ownerState:$,...m,children:a.jsx(K.Provider,{value:V,children:T.map((g,n)=>a.jsx(Z.Provider,{value:S(n),children:g},n))})})}),Pt=({to:t,sx:e,children:o})=>a.jsx(y,{sx:{":hover":{bgcolor:Y.palette.white.dark},cursor:"pointer",p:0},children:a.jsx(et,{component:at,to:t,sx:{display:"block",p:2,width:"100%",...e},children:o})}),zt=_(a.jsx("path",{d:"M3 14h4v-4H3zm0 5h4v-4H3zM3 9h4V5H3zm5 5h13v-4H8zm0 5h13v-4H8zM8 5v4h13V5z"}),"ViewList"),kt=_(a.jsx("path",{d:"M14.67 5v6.5H9.33V5zm1 6.5H21V5h-5.33zm-1 7.5v-6.5H9.33V19zm1-6.5V19H21v-6.5zm-7.34 0H3V19h5.33zm0-1V5H3v6.5z"}),"ViewModule"),Ot=({open:t,onClose:e})=>a.jsx(ot,{title:"Tutorial",open:t,onClose:e,children:a.jsxs(M,{spacing:1,sx:{pl:.5},children:[a.jsx(w,{children:"You can see all your projects on this page."}),a.jsx(w,{children:"You can also create new project. The main parts of project are its team and tasks."}),a.jsx(w,{children:"Team of a project is formed from executors. Team also includes lead of project if they are specified"})]})}),{Create:Mt}=it,Vt=({view:t})=>{const e=(u,r)=>{r===null||t.value===r||(t.set(r),q.set("projectsView",r))},{openModal:o,handleModalOpen:l,handleModalClose:c}=st(!1);return a.jsxs(rt,{title:"Projects",children:[a.jsx(nt,{onClick:l}),a.jsx(Ot,{open:o,onClose:c}),a.jsx(lt,{variant:"contained",to:Mt,children:"New"}),a.jsxs(wt,{color:"primary",value:t.value,exclusive:!0,onChange:e,sx:{height:"38px"},children:[a.jsx(G,{value:"cards","aria-label":"cards",children:a.jsx(kt,{})}),a.jsx(G,{value:"table","aria-label":"table",children:a.jsx(zt,{})})]})]})},W=12,Lt=({})=>{const[t,e]=d.useState(1),o=J.get(W,t);return!o||!o.data.length?a.jsx(w,{children:"You haven't added any projects yet"}):a.jsxs(M,{spacing:2,sx:{flexGrow:1,justifyContent:"space-between"},children:[a.jsx(dt,{minItemWidth:"300px",spacing:2,children:o==null?void 0:o.data.map(l=>a.jsx(pt,{data:l},l.id))}),a.jsx(ct,{itemsCount:o.totalCount,limit:W,currentPage:t,setPage:e})]})},St=[{label:"Name",align:"left"},{label:"Lead",align:"right"},{label:"Team size",align:"right"},{label:"Start date",align:"right"},{label:"End date",align:"right"}],Ht=({})=>{const t=J.get();if(!t||!t.data.length)return a.jsx(w,{children:"You haven't added any projects yet"});const{page:e,rowsPerPage:o,visibleRows:l,handleChangePage:c,handleChangeRowsPerPage:u}=gt(t.data,12);return a.jsxs(M,{component:ut,elevation:3,sx:{flexGrow:1,justifyContent:"space-between",overflow:"hidden"},children:[a.jsx(xt,{children:a.jsxs(ft,{children:[a.jsx(ht,{sx:{bgcolor:Y.palette.white.dark},children:a.jsx(H,{children:St.map(r=>a.jsx(y,{sx:{py:1},align:r.align,children:r.label},r.label))})}),a.jsx(vt,{children:l.map((r,p)=>{var h;return a.jsxs(H,{hover:!0,children:[a.jsx(Pt,{to:r.id,children:r.name}),a.jsx(y,{align:"right",children:((h=r.lead)==null?void 0:h.name)||"Unspecified"}),a.jsx(y,{align:"right",children:r.team.length}),a.jsx(y,{align:"right",children:r.startDate}),a.jsx(y,{align:"right",children:r.endDate})]},r.name+p)})})]})}),a.jsx(bt,{rowsPerPageOptions:[12,25],component:"div",count:t.data.length,rowsPerPage:o,page:e,onPageChange:c,onRowsPerPageChange:u})]})},Gt=()=>q.get("projectsView")||"cards",Yt=()=>{const[t,e]=d.useState(Gt);return a.jsxs(M,{sx:{height:"100%"},children:[a.jsx(Vt,{view:{value:t,set:e}}),t==="cards"&&a.jsx(Lt,{}),t==="table"&&a.jsx(Ht,{})]})};export{Yt as default};
