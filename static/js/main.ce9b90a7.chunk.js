(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{44:function(e,n,t){e.exports=t(87)},49:function(e,n,t){},87:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(37),c=t.n(l),o=(t(49),t(43)),i=t(14),u=t(6),m=t(15),s=t(2),d=t(3);function p(){var e=Object(s.a)(["\n@media (max-width: 640px) {\n    display: none;\n  }"]);return p=function(){return e},e}var f=Object(d.a)(m.SideNav)(p()),E=[{name:"Me",path:"/"},{name:"Projects",path:"/projects"},{name:"Work",path:"/work"},{name:"Education",path:"/education"},{name:"TestLink",path:"/testlink"}],b=function(){var e=Object(u.f)();return r.a.createElement(f,{isFixedNav:!0,expanded:!0,isChildOfHeader:!1,"aria-label":"Side navigation"},r.a.createElement(m.SideNavItems,null,E.map((function(n){return r.a.createElement(m.SideNavLink,{isActive:"/"===e.pathname&&"/"===n.path||e.pathname===n.path,element:i.b,to:n.path,key:n.name},n.name)}))))},v=t(10);function h(){var e=Object(s.a)(["\n  display: flex;\n  text-decoration: none;\n  padding: 0.75rem 1.5rem;\n  font-weight: bold;\n  align-items: center;\n  margin-top: 1rem;\n  border: 2px solid #2ecc40;\n  background-color: rgba(46, 204, 64, 0.3);\n  transition: background-color 250ms ease;\n  &:hover {\n    background-color: #2ecc40;\n  }\n  svg {\n    fill: white;\n    margin-left: 8px;\n  }\n"]);return h=function(){return e},e}function g(){var e=Object(s.a)(["\n    width: 200px;\n    margin-right: 1rem;\n    border-radius: 2px;\n"]);return g=function(){return e},e}function j(){var e=Object(s.a)(["\n    display: flex;\n    @media(max-width: 640px){\n        flex-direction: column;\n    }\n"]);return j=function(){return e},e}function O(){var e=Object(s.a)(["\ndisplay: flex;\njustify-content: space-between;\n\n@media (max-width: 640px){\n    display: ",";\n    flex-direction: column; \n}\n"]);return O=function(){return e},e}var k=d.a.div(O(),(function(e){return e.isHome?"flex":"none"})),y=d.a.div(j()),w=d.a.img(g()),x=d.a.a(h()),I=function(e){var n=e.user,t=Object(u.f)();return r.a.createElement(k,{isHome:"/"===t.pathname},r.a.createElement(y,null,r.a.createElement(w,{src:n.basics.picture}),r.a.createElement("div",null,r.a.createElement("h2",null,n.basics.name),r.a.createElement("h4",null,r.a.createElement("a",{href:"https://gitconnected.com/".concat(n.basics.username),target:"_blank",rel:"noreferrer noopener"},"@",n.basics.username)),r.a.createElement("p",null,n.basics.label),r.a.createElement("p",null,"Coding in ",n.basics.region),r.a.createElement("p",null,n.basics.yearsOfExperience," years of experience as a developer"),r.a.createElement("p",null,n.basics.headline),r.a.createElement("p",null,"Blog:"," ",r.a.createElement("a",{href:n.basics.blog,target:"_blank",rel:"noreferrer noopener"},n.basics.blog)))),r.a.createElement("div",null,r.a.createElement(x,{href:"https://gitconnected.com/".concat(n.basics.username,"/resume"),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",null,"View R\xe9sum\xe9"),r.a.createElement(v.ArrowRight16,null))))},P=t(42),S=t.n(P);function W(){var e=Object(s.a)(["\nwidth: 100%;\njustify-content: center;\n"]);return W=function(){return e},e}function C(){var e=Object(s.a)(["\nwidth: 25%;\n"]);return C=function(){return e},e}function D(){var e=Object(s.a)(["\ndisplay: flex;\njustify-content: center;\nposition: fixed;\nwidth: 100vw;\ntop: 0;\nleft: 0;\nz-index: 1\n"]);return D=function(){return e},e}function H(){var e=Object(s.a)(["\nheight: 48px;\n"]);return H=function(){return e},e}function M(){var e=Object(s.a)(["\ndisplay: none;\n@media(max-width: 640px){\n    display: block;\n}"]);return M=function(){return e},e}var N=d.a.div(M()),_=d.a.div(H()),A=d.a.div(D()),B=Object(d.a)(i.b)(C()),L=Object(d.a)(S.a)(W()),T=function(){return r.a.createElement(N,null,r.a.createElement(_,null),r.a.createElement(A,null,r.a.createElement(B,{to:"/"},r.a.createElement(L,{hasIconOnly:!0,renderIcon:v.User32,iconDescription:"Me",tooltipPosition:"bottom"})),r.a.createElement(B,{to:"/projects"},r.a.createElement(L,{hasIconOnly:!0,renderIcon:v.Code32,iconDescription:"Projects",tooltipPosition:"bottom"})),r.a.createElement(B,{to:"/work"},r.a.createElement(L,{hasIconOnly:!0,renderIcon:v.Portfolio32,iconDescription:"Work",tooltipPosition:"bottom"})),r.a.createElement(B,{to:"/education"},r.a.createElement(L,{hasIconOnly:!0,renderIcon:v.Education32,iconDescription:"Education",tooltipPosition:"bottom"}))))};function z(){var e=Object(s.a)(["\n  min-height: 100vh;\n  @media (max-width: 640px) {\n    margin-left: 0 !important;\n  }\n"]);return z=function(){return e},e}var F=Object(d.a)(m.Content)(z()),J=function(e){var n=e.user,t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,null),r.a.createElement(b,null),r.a.createElement(F,null,r.a.createElement(I,{user:n}),r.a.createElement("div",null,t)))},R=t(11);function U(){var e=Object(s.a)(["\ndisplay: inline-block;\nmargin-right: 0.75rem;\n  margin-bottom: 0.75rem;\n  padding: 0.5rem 1rem;\n  background-color: ",";\n  color: ",";\n  border: 3px solid ",";\n  border-radius: 2px;\n  font-weight: bold;\n"]);return U=function(){return e},e}function V(){var e=Object(s.a)(["\nwhite-space: pre-wrap;\n"]);return V=function(){return e},e}function $(){var e=Object(s.a)(["\nmargin-top: 1.5rem;\nmargin-bottom:0.5rem;\n"]);return $=function(){return e},e}var q=d.a.h3($()),G=d.a.p(V()),K=d.a.span(U(),R.a[20],R.a[70],R.a[70]);function Q(){var e=Object(s.a)(["\n    margin-right: 0.5rem;\n    margin-bottom: 0.5rem;\n    display: inline-block;\n    font-size: 18px;\n"]);return Q=function(){return e},e}var X=d.a.li(Q()),Y=function(e){var n=e.user;return r.a.createElement(J,{user:n},r.a.createElement("div",null,r.a.createElement(q,null,"About Me"),r.a.createElement(G,null,n.basics.summary)),r.a.createElement("div",null,r.a.createElement(q,null,"Skills"),r.a.createElement("div",null,n.skills.map((function(e){return r.a.createElement(K,{key:e.name},e.name)})))),r.a.createElement("div",null,r.a.createElement(q,null,"Profiles"),r.a.createElement("ul",null,n.basics.profiles.map((function(e,n){return r.a.createElement(X,{key:e.network},0!==n&&"|",r.a.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer noopener"},e.network))})))))},Z=t(29);function ee(){var e=Object(s.a)(["\n    margin-top: 1.2rem;\n"]);return ee=function(){return e},e}function ne(){var e=Object(s.a)(["\n    font-weight: bold"]);return ne=function(){return e},e}function te(){var e=Object(s.a)(["\n    margin-top: 1rem;\n    padding-bottom: 1rem;\n    border-bottom: 1px solid ",""]);return te=function(){return e},e}var ae=d.a.li(te(),R.b),re=d.a.h4(ne()),le=d.a.div(ee()),ce=function(e){var n=e.user;return r.a.createElement(J,{user:n},r.a.createElement("div",null,r.a.createElement(q,null," Projects "),r.a.createElement("ul",null,n.projects.map((function(e,n){return r.a.createElement(ae,{key:n},r.a.createElement(re,null,e.name),r.a.createElement("p",null,e.summary),r.a.createElement(le,null,[].concat(Object(Z.a)(e.languages),Object(Z.a)(e.libraries)).map((function(e,n){return r.a.createElement(K,{key:n},e)}))))})))))};function oe(){var e=Object(s.a)(["\n  font-weight: bold;\n  display: inline-block;\n"]);return oe=function(){return e},e}function ie(){var e=Object(s.a)(["\n  font-weight: bold;\n"]);return ie=function(){return e},e}function ue(){var e=Object(s.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return ue=function(){return e},e}var me=d.a.li(ue(),R.b),se=d.a.h4(ie()),de=d.a.p(oe()),pe=function(e){var n=e.user;return r.a.createElement(J,{user:n},r.a.createElement("div",null,r.a.createElement(q,null,"Work"),r.a.createElement("ul",null,n.work.map((function(e,n){return r.a.createElement(me,{key:n},r.a.createElement(se,null,e.position),r.a.createElement("div",null,r.a.createElement(de,null,e.company)," ",r.a.createElement("span",null,e.location),r.a.createElement("span",null," \u22c5 "),r.a.createElement("span",null,e.start.year," to ",e.end.year)),r.a.createElement(G,null,e.summary))})))))};function fe(){var e=Object(s.a)(["\n  font-weight: bold;\n  display: inline-block;"]);return fe=function(){return e},e}function Ee(){var e=Object(s.a)(["\n  font-weight: bold;\n"]);return Ee=function(){return e},e}function be(){var e=Object(s.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return be=function(){return e},e}var ve=d.a.li(be(),R.b),he=d.a.h4(Ee()),ge=d.a.p(fe()),je=function(e){var n=e.user;return r.a.createElement(J,{user:n},r.a.createElement("div",null,r.a.createElement(q,null,"Education"),r.a.createElement("ul",null,n.education.map((function(e,n){return r.a.createElement(ve,{key:n},r.a.createElement(he,null,e.position),r.a.createElement("div",null,r.a.createElement(ge,null,e.studyType,", ",e.area)," ",r.a.createElement("span",null," \u22c5 "),r.a.createElement("span",null,e.start.year," to ",e.end.year)),r.a.createElement(G,null,e.description.replace("\n\n","\n")))})))))};function Oe(){var e=Object(s.a)(["\n    margin-top: 1.2rem;\n"]);return Oe=function(){return e},e}function ke(){var e=Object(s.a)(["\n    font-weight: bold"]);return ke=function(){return e},e}function ye(){var e=Object(s.a)(["\n    margin-top: 1rem;\n    padding-bottom: 1rem;\n    border-bottom: 1px solid ",""]);return ye=function(){return e},e}var we=d.a.li(ye(),R.b),xe=d.a.h4(ke()),Ie=d.a.div(Oe()),Pe=function(e){var n=e.user;return r.a.createElement(J,{user:n},r.a.createElement("div",null,r.a.createElement(xe,null," TestLink "),r.a.createElement("ul",null,r.a.createElement(we,null,r.a.createElement(Ie,null," ",r.a.createElement("p",null,"Hello World!!"))),"))}")))},Se=function(e){var n=e.user;return r.a.createElement(i.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(Y,{user:n})),r.a.createElement(u.a,{path:"/projects"},r.a.createElement(ce,{user:n})),r.a.createElement(u.a,{path:"/work"},r.a.createElement(pe,{user:n})),r.a.createElement(u.a,{path:"/education"},r.a.createElement(je,{user:n})),r.a.createElement(u.a,{path:"/testlink"},r.a.createElement(Pe,{user:n}))))};var We=function(){var e=Object(a.useState)(null),n=Object(o.a)(e,2),t=n[0],l=n[1];return Object(a.useEffect)((function(){fetch("https://gitconnected.com/v1/portfolio/vishalsundar1").then((function(e){return e.json()})).then((function(e){l(e)}))}),[]),t?r.a.createElement(Se,{user:t}):r.a.createElement("div",null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(We,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.ce9b90a7.chunk.js.map