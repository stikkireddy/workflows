(this.webpackJsonpworkflows=this.webpackJsonpworkflows||[]).push([[0],{35:function(e,t,n){},37:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(21),a=n(22),o=n(28),r=n(27),u=n(0),i=n(2),s=n(26),b=n(10),l=n(11),j=n(23),d=(n(35),n(1)),h=[{id:"1",data:{label:"-"},position:{x:100,y:100}},{id:"2",data:{label:"Node 2"},position:{x:100,y:200}},{id:"e1-2",source:"1",target:"2"}],p=function(){var e=Object(u.useState)(h),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(u.useState)("Node 1"),o=Object(l.a)(a,2),r=o[0],i=o[1],s=Object(u.useState)("#eee"),p=Object(l.a)(s,2),f=p[0],O=p[1],x=Object(u.useState)(!1),m=Object(l.a)(x,2),v=m[0],g=m[1];return Object(u.useEffect)((function(){c((function(e){return e.map((function(e){return"1"===e.id&&(e.data=Object(b.a)(Object(b.a)({},e.data),{},{label:r})),e}))}))}),[r,c]),Object(u.useEffect)((function(){c((function(e){return e.map((function(e){return"1"===e.id&&(e.style=Object(b.a)(Object(b.a)({},e.style),{},{backgroundColor:f})),e}))}))}),[f,c]),Object(u.useEffect)((function(){c((function(e){return e.map((function(e){return"1"!==e.id&&"e1-2"!==e.id||(e.isHidden=v),e}))}))}),[v,c]),Object(d.jsx)(j.a,{elements:n,defaultZoom:1.5,minZoom:.2,maxZoom:4,children:Object(d.jsxs)("div",{className:"updatenode__controls",children:[Object(d.jsx)("label",{children:"label:"}),Object(d.jsx)("input",{value:r,onChange:function(e){return i(e.target.value)}}),Object(d.jsx)("label",{className:"updatenode__bglabel",children:"background:"}),Object(d.jsx)("input",{value:f,onChange:function(e){return O(e.target.value)}}),Object(d.jsxs)("div",{className:"updatenode__checkboxwrapper",children:[Object(d.jsx)("label",{children:"hidden:"}),Object(d.jsx)("input",{type:"checkbox",checked:v,onChange:function(e){return g(e.target.checked)}})]})]})})},f=(n(37),[{path:"/",component:p},{path:"/custom-node",component:p}]),O=Object(i.f)((function(e){var t=e.history,n=e.location;return Object(d.jsxs)("header",{children:[Object(d.jsx)("a",{className:"logo",href:"https://github.com/wbkd/react-flow",children:"React Flow Dev"}),Object(d.jsx)("select",{defaultValue:n.pathname,onChange:function(e){return t.push(e.target.value)},children:f.map((function(e){return Object(d.jsx)("option",{value:e.path,children:"/"===e.path?"overview":e.path.substr(1,e.path.length)},e.path)}))})]})})),x=function(e){Object(o.a)(n,e);var t=Object(r.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(s.a,{basename:"/",children:[Object(d.jsx)(O,{}),Object(d.jsx)(i.c,{children:f.map((function(e){return Object(d.jsx)(i.a,{exact:!0,path:e.path,render:function(){return Object(d.jsx)(e.component,{})}},e.path)}))})]})}}]),n}(u.Component);t.default=x}},[[42,1,2]]]);
//# sourceMappingURL=main.0d3cc34d.chunk.js.map