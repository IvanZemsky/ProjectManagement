import{g as c,a as d,s as C,P as R,r as u,u as p,j as m,h as f,i as v}from"./index-DW7niEK_.js";function M(s){return d("MuiCard",s)}c("MuiCard",["root"]);const g=s=>{const{classes:t}=s;return v({root:["root"]},M,t)},x=C(R,{name:"MuiCard",slot:"Root",overridesResolver:(s,t)=>t.root})({overflow:"hidden"}),j=u.forwardRef(function(t,o){const e=p({props:t,name:"MuiCard"}),{className:n,raised:r=!1,...i}=e,a={...e,raised:r},l=g(a);return m.jsx(x,{className:f(l.root,n),elevation:r?8:void 0,ref:o,ownerState:a,...i})});function y(s){return d("MuiCardContent",s)}c("MuiCardContent",["root"]);const U=s=>{const{classes:t}=s;return v({root:["root"]},y,t)},h=C("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(s,t)=>t.root})({padding:16,"&:last-child":{paddingBottom:24}}),N=u.forwardRef(function(t,o){const e=p({props:t,name:"MuiCardContent"}),{className:n,component:r="div",...i}=e,a={...e,component:r},l=U(a);return m.jsx(h,{as:r,className:f(l.root,n),ownerState:a,ref:o,...i})});export{j as C,N as a};