(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{105:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),i=t(26),a=t.n(i),s=t(30),j=t(6),o=t(28),l=t.n(o),b=t(38),d=t(43),h=t(39),O=t.n(h),x=t(2);function u(){var e=Object(j.f)().id,n=Object(c.useState)([]),t=Object(d.a)(n,2),r=t[0],i=t[1];return Object(c.useEffect)((function(){(function(){var n=Object(b.a)(l.a.mark((function n(){var t,c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="http://127.0.0.1:8080/api"+"/products/category/".concat(e),n.next=3,O.a.get(t);case 3:return n.next=5,n.sent.data;case 5:c=n.sent,i(c);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[e]),Object(x.jsx)("div",{children:r.map((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("strong",{children:"Name:"})," ",e.name_p]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("strong",{children:"Description: "})," ",e.description_p]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("strong",{children:"Color: "}),e.color||"Not provided"]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("strong",{children:"Price: "}),e.price," EUR?"]}),Object(x.jsx)("hr",{})]},e.ID_Product)}))})}var f,p,v=t(11),g=t(8),m=t.p+"static/media/duck.1be39a62.jpg",y=g.b.div(f||(f=Object(v.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]))),k=g.b.img(p||(p=Object(v.a)(["\n  width: 70%;\n"])));function w(){return Object(x.jsxs)(y,{children:[Object(x.jsx)("h1",{children:"Welcome to our HOME PAGE!"}),Object(x.jsx)("h2",{children:"We sell ducks and other goodies, make sure you look around!"}),Object(x.jsx)(k,{src:m}),Object(x.jsx)("span",{children:"(this duck will mess you up if u don't)"})]})}var E,S,C=t(35),_=t(121),I=t(123),P=t(118),z=t(64),D=t.n(z),F=Object(g.b)(s.b)(E||(E=Object(v.a)(["\n  text-decoration: none;\n  color: #fff;\n  :hover {\n    opacity: 90%;\n  }\n"])));function H(e){var n=e.page,t=e.extra,c=void 0===t?"":t;return Object(x.jsx)(F,{to:"homepage"===n?"/":"/".concat(n,"/").concat(c),children:e.children})}var J,M=Object(g.b)(D.a)(S||(S=Object(v.a)(["\n  margin-top: 10px;\n  font-size: 3rem;\n"])));function N(){return Object(x.jsx)(H,{page:"homepage",children:Object(x.jsx)(M,{fontSize:"large"})})}var T=g.b.nav(J||(J=Object(v.a)(['\n  a {\n    position: relative;\n    text-decoration: none;\n    color: #fff;\n    :hover {\n      color: #fff;\n    }\n    ::before {\n      content: "";\n      position: absolute;\n      width: 100%;\n      height: 2px;\n      bottom: 0;\n      left: 0;\n      background-color: #fff;\n      visibility: hidden;\n      transform: scaleX(0);\n      transition: all 0.15s ease-in-out 0s;\n    }\n    :hover::before {\n      visibility: visible;\n      transform: scaleX(1);\n    }\n  }\n  ul {\n    list-style-type: none;\n  }\n  li {\n    display: inline-block;\n    margin: 0 15px;\n  }\n'])));function U(){var e,n=Object(c.useState)([]),t=Object(d.a)(n,2),r=t[0],i=t[1];return e=Object(b.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,O.a.get("http://127.0.0.1:8080/api/categories");case 3:return e.next=5,e.sent.data;case 5:n=e.sent,i(n);case 7:case"end":return e.stop()}}),e)}))),Object(c.useEffect)(e,[]),Object(x.jsx)(T,{children:Object(x.jsx)("ul",{children:r.map((function(e){var n=String(e.ID_Category),t=e.name_c;return Object(x.jsx)("li",{children:Object(x.jsx)(P.a,{variant:"h5",children:Object(x.jsx)(H,{page:"category",extra:n,children:t})})},n)}))})})}var W=t(119),X=t(128),A=t(120);function B(e){var n=Object(W.a)({disableHysteresis:!0,threshold:0});return r.a.cloneElement(e.children,{elevation:n?4:0})}function G(e){return Object(x.jsxs)("header",{children:[Object(x.jsx)(B,Object(C.a)(Object(C.a)({},e),{},{children:Object(x.jsx)(X.a,{children:Object(x.jsx)(A.a,{children:e.children})})})),Object(x.jsx)(A.a,{})]})}var K,R,Z,q,L,Q=t(125),V=t(68),Y=t.n(V),$=g.b.div(K||(K=Object(v.a)(["\n  color: #fff;\n  flex-grow: 1;\n  text-align: right;\n"]))),ee=Object(g.b)(Y.a)(R||(R=Object(v.a)(["\n  color: #fff;\n"])));function ne(){return Object(x.jsx)($,{children:Object(x.jsx)(Q.a,{"aria-label":"profile",onClick:function(){alert("I dont work yet :C")},children:Object(x.jsx)(ee,{fontSize:"large"})})})}var te=g.b.div(Z||(Z=Object(v.a)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n"]))),ce=g.b.footer(q||(q=Object(v.a)(["\n  min-height: 40px;\n  margin-top: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ",";\n  color: #fff;\n"])),(function(e){return e.theme.primary})),re=g.b.div(L||(L=Object(v.a)(["\n  width: 100%;\n  display: flex;\n"])));function ie(e){return Object(x.jsx)(_.a,{children:Object(x.jsx)(I.a,{my:2,children:e.children})})}function ae(e){return Object(x.jsxs)(te,{children:[Object(x.jsx)(G,{children:Object(x.jsxs)(re,{children:[Object(x.jsx)(N,{}),Object(x.jsx)(U,{}),Object(x.jsx)(ne,{})]})}),Object(x.jsx)(ie,Object(C.a)({},e)),Object(x.jsx)(ce,{children:Object(x.jsx)(P.a,{children:"Copyright @TT & \u0160Z - UHK Project 2021"})})]})}function se(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:"hi, this is login page!"}),Object(x.jsx)("div",{children:"this page is under heavy duty development"})]})}function je(){return Object(x.jsx)(s.a,{children:Object(x.jsx)(ae,{children:Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{exact:!0,path:"/category/:id",children:Object(x.jsx)(u,{})}),Object(x.jsx)(j.a,{exact:!0,path:"/login/",children:Object(x.jsx)(se,{})}),Object(x.jsx)(j.a,{path:"/",children:Object(x.jsx)(w,{})})]})})})}var oe=function(){return Object(x.jsx)(je,{})},le=t(124),be=t(122);t(104);a.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(g.a,{theme:{primary:"#3f51b5",secondary:"#F9F871"},children:Object(x.jsxs)(le.b,{injectFirst:!0,children:[Object(x.jsx)(be.a,{}),Object(x.jsx)(oe,{})]})})}),document.getElementById("root"))}},[[105,1,2]]]);
//# sourceMappingURL=main.e6bec554.chunk.js.map