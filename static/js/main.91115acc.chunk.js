(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(5),s=a.n(n),i=a(35),c=a.n(i),r=(a(44),a(12)),o=(a(45),a(46),a(60)),j=a(8),h={hidden:{opacity:0},show:{opacity:1,transition:{delayChildren:.2,staggerChildren:.2}}},d={hidden:{opacity:0,x:100},show:{opacity:1,x:0}};function l(e){function t(t){return t===e.navState?"selected":""}return Object(j.jsxs)(o.a.nav,{className:e.showNav?"show-nav":"",initial:!1,animate:e.showNav?{right:0,top:0,height:"100vh",width:"50vw",borderRadius:0}:{right:"2.5vh",top:"2.5vh",height:"10vh",width:"10vh",borderRadius:"100vh"},children:[Object(j.jsx)("div",{className:"burger-wrapper",children:Object(j.jsxs)("div",{className:e.showNav?"burger-container  show-nav":"burger-container",onClick:e.toggleShowNav,children:[Object(j.jsx)("div",{className:"burger-1"}),Object(j.jsx)("div",{className:"burger-2"}),Object(j.jsx)("div",{className:"burger-3"})]})}),Object(j.jsxs)(o.a.ul,{variants:h,initial:"hidden",animate:e.showNav?"show":"hidden",children:[Object(j.jsx)(o.a.li,{variants:d,onClick:function(){return e.setCurrPage(1)},className:t(1),children:"Home"}),Object(j.jsx)(o.a.li,{variants:d,onClick:function(){return e.setCurrPage(2)},className:t(2),children:"About Me"}),Object(j.jsx)(o.a.li,{variants:d,onClick:function(){return e.setCurrPage(3)},className:t(3),children:"Contact"})]})]})}a(48);function u(e){return Object(j.jsxs)(o.a.div,{className:"home",id:"home",children:[Object(j.jsx)(o.a.h1,{animate:{opacity:[0,1],y:[-200,0]},transition:{type:"spring"},children:"Hi!"}),Object(j.jsxs)(o.a.h2,{animate:{opacity:[0,1],y:[-200,0]},children:["I'm Sean, a software engineer currently based in ",Object(j.jsx)("span",{children:"Sydney, Australia"})]}),Object(j.jsx)(o.a.span,{animate:{opacity:[0,1]},className:"material-icons down-arrow",onClick:function(){return e.setCurrPage(2)},children:"expand_more"})]})}a(49);function b(){return Object(j.jsxs)("div",{className:"about",id:"about",children:[Object(j.jsx)(o.a.h1,{animate:{opacity:[0,1]},children:"About me"}),Object(j.jsx)(o.a.p,{animate:{opacity:[0,1]},children:"I have been coding as a hobby since high school and decided to take it a little  more seriously at the start of 2021. I love diving into new projects and extending my knowledge of languages/frameworks and coding concepts. In my free time I rock climb and enjoy trying new sports and food."})]})}a(50);function m(){return Object(j.jsx)("div",{className:"contact",id:"about-me",children:Object(j.jsx)(o.a.h1,{children:"Contact"})})}a(51);var f=a(13),O=a(63),g=a(62),x=a(10),p=a(61);function v(e){var t=Object(n.useRef)(),a=Object(p.a)("/portfolioTest2/island.glb"),s=a.nodes,i=a.materials;return Object(j.jsxs)("group",Object(x.a)(Object(x.a)({ref:t},e),{},{dispose:null,children:[Object(j.jsx)("mesh",{geometry:s.Island.geometry,material:i["Material.002"]}),Object(j.jsx)("mesh",{geometry:s.Water.geometry,material:i["Material.001"],position:[0,.56,-.01],scale:[2.22,2.22,2.22]})]}))}function w(e){var t=Object(n.useRef)({object:{position:{x:1,y:1,z:1}}});Object(n.useRef)();return Object(j.jsx)(o.a.div,{className:"scene",animate:e.showProjects?{y:"-100vh"}:{y:0},transition:{duration:.05,type:"tween"},children:Object(j.jsxs)(f.a,{style:{height:"100vh"},id:"projects",shadows:!0,children:[Object(j.jsxs)(O.a,{makeDefault:!0,fov:75,near:.1,far:1e3,position:[4,2,0],children:[Object(j.jsx)("pointLight",{castShadow:!0,intensity:1,"shadow-mapSize-width":1024,"shadow-mapSize-height":1024,"shadow-camera-far":50,"shadow-camera-left":-10,"shadow-camera-right":10,"shadow-camera-top":10,"shadow-camera-bottom":-10}),Object(j.jsx)("mesh",{})]}),Object(j.jsx)(g.a,{minDistance:1,maxDistance:10,ref:t}),Object(j.jsx)(n.Suspense,{fallback:"Loading 3d Models...",children:Object(j.jsx)(v,{})})]})})}p.a.preload("/portfolioTest2/island.glb");a(55);function y(e){return Object(j.jsxs)("footer",{onClick:e.toggleShowProjects,children:[Object(j.jsx)(o.a.div,{className:"footer-wrapper",animate:e.showProjects?{y:[0,300]}:{y:[300,0]},transition:{duration:.5},children:Object(j.jsx)("h2",{children:"See Projects"})}),Object(j.jsx)(o.a.div,{className:"footer-wrapper",animate:e.showProjects?{y:[300,0]}:{y:[0,300]},transition:{duration:.5},children:Object(j.jsx)("h2",{children:"Hide Projects"})})]})}function N(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],s=t[1],i=Object(n.useState)(!1),c=Object(r.a)(i,2),o=c[0],h=c[1],d=Object(n.useState)(1),f=Object(r.a)(d,2),O=f[0],g=f[1];var x=function(e){g(e),s(!1),h(!1)};return Object(j.jsxs)("div",{children:[Object(j.jsx)("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}),Object(j.jsx)(l,{showNav:a,toggleShowNav:function(){s((function(e){return!e}))},navState:O,setCurrPage:x}),function(){switch(O){case 1:return Object(j.jsx)(u,{setCurrPage:x});case 2:return Object(j.jsx)(b,{});case 3:return Object(j.jsx)(m,{});default:return Object(j.jsx)(u,{})}}(),Object(j.jsx)(w,{showProjects:o}),Object(j.jsx)(y,{showProjects:o,toggleShowProjects:function(){h((function(e){return!e}))}})]})}var C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,64)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),i(e),c(e)}))};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(N,{})}),document.getElementById("root")),C()}},[[56,1,2]]]);
//# sourceMappingURL=main.91115acc.chunk.js.map