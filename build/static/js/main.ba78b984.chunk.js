(this["webpackJsonpreaktor2020-frontend"]=this["webpackJsonpreaktor2020-frontend"]||[]).push([[0],{56:function(e,t,n){e.exports=n(82)},82:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),l=n.n(c),o=n(30),i=n(121),s=n(115),m=n(116),d=n(31),u=n(117),p=n(111),E=n(83),f=n(123),v=Object(p.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",padding:e.spacing(.5)},chip:{margin:e.spacing(.5)}}})),g=function(e){var t=e.pkgs,n=e.dependencies,a=e.setSelected,c=e.color,l=v();return r.a.createElement("div",{className:l.root},r.a.createElement(E.a,null,r.a.createElement("div",{style:{overflow:"auto",maxHeight:"200px"}},n.map((function(e){return r.a.createElement(f.a,{key:e,label:e,className:l.chip,onClick:void 0!==a?function(){return a(t.find((function(t){return t.name===e})))}:void 0,color:c})})))))},b=function(e){var t=e.pkgs,n=e.selected,a=e.setSelected;return void 0!==n.name?r.a.createElement(s.a,{style:{position:"fixed",maxWidth:"96em"}},r.a.createElement(m.a,null,r.a.createElement(d.a,{gutterBottom:!0,variant:"h5",component:"h2"},n.name),r.a.createElement(d.a,{color:"textSecondary"},"description"),r.a.createElement(d.a,{variant:"body2",color:"textSecondary",component:"p"},n.description),r.a.createElement("br",null),n.dependencies.length>0?r.a.createElement("div",null,r.a.createElement(d.a,{variant:"body1",color:"textPrimary",component:"h2"},"Dependencies"),r.a.createElement(g,{pkgs:t,dependencies:n.dependencies,setSelected:a,color:"primary"})):r.a.createElement(d.a,{variant:"body2",color:"textPrimary",component:"h2"},"No dependencies :)"),r.a.createElement("br",null),n.reverseDependencies.length>0?r.a.createElement("div",null,r.a.createElement(d.a,{variant:"body2",color:"textPrimary",component:"h2"},"Reverse dependencies"),r.a.createElement(g,{pkgs:t,dependencies:n.reverseDependencies,setSelected:a,color:"secondary"})):r.a.createElement(d.a,{variant:"body2",color:"textPrimary",component:"h2"},"No reverse dependencies :("),r.a.createElement("br",null),n.alternatives.length>0?r.a.createElement("div",null,r.a.createElement(d.a,{variant:"body2",color:"textPrimary",component:"h2"},"Alternative dependencies"),r.a.createElement(g,{pkgs:t,dependencies:n.alternatives,color:"default"})):""),r.a.createElement(u.a,null)):r.a.createElement(s.a,{style:{position:"fixed"}},r.a.createElement(m.a,null,r.a.createElement(d.a,{gutterBottom:!0,variant:"h5",component:"h2"},"No package selected")))},y=n(122),h=function(e){var t=e.filter,n=e.setFilter;return r.a.createElement(y.a,{id:"standard-basic",label:"Search packages",value:t,onChange:function(e){n(e.target.value)}})},k=n(32),x=n.n(k),S=n(48),j=n(49),O=n.n(j),w={getAll:function(){var e=Object(S.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/api/packages");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},N=n(118),P=n(119),C=n(120),A=function(e){var t=e.pkg,n=e.setSelected;return r.a.createElement(P.a,{button:!0,key:t.name,onClick:function(){return n(t)}},r.a.createElement(C.a,{primary:t.name}))},B=function(e){var t=e.pkgs,n=e.filter,a=e.setSelected;return r.a.createElement(N.a,{component:"nav","aria-label":"main mailbox folders"},t.filter((function(e){return e.name.includes(n)})).map((function(e){return r.a.createElement(A,{pkg:e,setSelected:a,key:e.name})})))},D=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),s=Object(o.a)(l,2),m=s[0],d=s[1],u=Object(a.useState)({}),p=Object(o.a)(u,2),E=p[0],f=p[1];return Object(a.useEffect)((function(){console.log("Set packages"),w.getAll().then((function(e){c(e.sort((function(e,t){return e.name.localeCompare(t.name)})))}))}),[]),r.a.createElement("div",null,r.a.createElement(i.a,{container:!0,spacing:3},r.a.createElement(i.a,{item:!0,xs:2},r.a.createElement(h,{filter:m,setFilter:d}),r.a.createElement(B,{pkgs:n,filter:m,setSelected:f})),r.a.createElement(i.a,{item:!0,xs:8},r.a.createElement(b,{pkgs:n,selected:E,setSelected:f}))))};l.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.ba78b984.chunk.js.map