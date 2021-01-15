(this["webpackJsonp12-stirpe-sub-menus"]=this["webpackJsonp12-stirpe-sub-menus"]||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var s=t(0),a=t(2),o=t.n(a),c=t(4),r=t.n(c),i=(t(14),t(15),t(5)),l=t(6),u=t(8),d=t(7),p=t(1),j=o.a.createContext(),O=function(e,n){switch(n.type){case"DEVELOPER_HOVER_ON":return console.log("hovering over dev"),Object(p.a)(Object(p.a)({},e),{},{showDevelopers:!0});case"DEVELOPER_HOVER_OFF":return Object(p.a)(Object(p.a)({},e),{},{showDevelopers:!1});case"COMPANY_HOVER_ON":return console.log("hovering over company"),Object(p.a)(Object(p.a)({},e),{},{showCompany:!0});case"COMPANY_HOVER_OFF":return Object(p.a)(Object(p.a)({},e),{},{showCompany:!1});case"PRODUCTS_HOVER_ON":return console.log("hovering over products"),Object(p.a)(Object(p.a)({},e),{},{showProducts:!0});case"PRODUCTS_HOVER_OFF":return Object(p.a)(Object(p.a)({},e),{},{showProducts:!1})}},h=function(e){Object(u.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(i.a)(this,t);for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];return(e=n.call.apply(n,[this].concat(a))).state={heading:" Payments infrastructure for the internet",about:"Millions of companies of all sizes\u2014from startups to Fortune 500s\u2014use Stripe\u2019s software and APIs to accept payments, send payouts, and manage their businesses online.",showProducts:!1,showDevelopers:!1,showCompany:!1,currungDeveloperPosition:"23rem",currungCompanyPosition:"46rem",currungProductPosition:"20rem",navBar:{products:["payment","terminal","connect"],developers:["plugins","libraries","help","billing"],company:["about","customer"]},dispatch:function(n){e.setState((function(e){return O(e,n)}))}},e}return Object(l.a)(t,[{key:"render",value:function(){return Object(s.jsx)(j.Provider,{value:this.state,children:this.props.children})}}]),t}(a.Component),b=j.Consumer,v=h,m=function(e,n,t){switch(n){case"products":e({type:"PRODUCTS_HOVER_ON"});break;case"developers":e({type:"DEVELOPER_HOVER_ON"});break;case"company":e({type:"COMPANY_HOVER_ON"});break;case"productsLeave":e({type:"PRODUCTS_HOVER_OFF"});break;case"developerLeave":e({type:"DEVELOPER_HOVER_OFF"});break;case"companyLeave":e({type:"COMPANY_HOVER_OFF"});break;default:e({type:"NO_CONDITION"})}},g=void 0,x=function(e){e.navBar;var n=e.dispatch;return Object(s.jsxs)("div",{className:"navBarContainer",children:[Object(s.jsx)("img",{src:"./image/logo.svg",className:"stripeLogo",alt:"logo"}),Object(s.jsxs)("ul",{className:"navBar",children:[Object(s.jsx)("li",{className:"navItem",onMouseLeave:m.bind(g,n,"productsLeave"),onMouseEnter:m.bind(g,n,"products"),children:" products"}),Object(s.jsx)("li",{className:"navItem",onMouseLeave:m.bind(g,n,"developerLeave"),onMouseEnter:m.bind(g,n,"developers"),children:" developers"}),Object(s.jsx)("li",{className:"navItem",onMouseLeave:m.bind(g,n,"companyLeave"),onMouseEnter:m.bind(g,n,"company"),children:" company"})]}),Object(s.jsx)("button",{className:"signIn",children:" sign in"})]})},N=function(e){var n=e.heading,t=e.about;return Object(s.jsx)(o.a.Fragment,{children:Object(s.jsxs)("div",{className:"headingContainer",children:[Object(s.jsx)("h1",{className:"heading",children:n}),Object(s.jsx)("p",{className:"about",children:t})]})})},L=void 0,y=function(e){var n=e.linkList,t=e.dispatch,a=e.curruntPosition;return Object(s.jsxs)("div",{style:{left:a},onMouseLeave:m.bind(L,t,"developerLeave"),onMouseEnter:m.bind(L,t,"developers"),className:"LinkContainer",children:[Object(s.jsx)("p",{style:{width:150*n.length+"px"},className:"hoverComponentHeading",children:"developers"}),Object(s.jsx)("ul",{className:"linkList",children:n.map((function(e,n){return Object(s.jsxs)("li",{className:"individualLink",children:[Object(s.jsx)("span",{className:"Linklogo",children:"logo"})," ",e]},n)}))})]})},f=function(e){var n=e.linkList,t=e.dispatch,a=e.curruntPosition;return Object(s.jsxs)("div",{style:{left:a},onMouseLeave:function(e){m.bind(L,t,"companyLeave",e)},onMouseEnter:m.bind(L,t,"company"),className:"LinkContainer",children:[Object(s.jsx)("p",{style:{width:150*n.length+"px"},className:"hoverComponentHeading",children:"Company"}),Object(s.jsx)("ul",{className:"linkList",children:n.map((function(e,n){return Object(s.jsxs)("li",{className:"individualLink",children:[Object(s.jsx)("span",{className:"Linklogo",children:"logo"})," ",e]},n)}))})]})},P=function(e){var n=e.linkList,t=e.dispatch,a=e.curruntPosition;return Object(s.jsxs)("div",{style:{left:a},onMouseLeave:m.bind(L,t,"productsLeave"),onMouseEnter:m.bind(L,t,"products"),className:"LinkContainer",children:[Object(s.jsx)("p",{style:{width:150*n.length+"px"},className:"hoverComponentHeading",children:"Products"}),Object(s.jsx)("ul",{className:"linkList",children:n.map((function(e,n){return Object(s.jsxs)("li",{className:"individualLink",children:[Object(s.jsx)("span",{className:"Linklogo",children:"logo"})," ",e]},n)}))})]})},C=function(e){return Object(s.jsx)("button",{className:"startBtn",children:"Start now"})},E=function(e){return Object(s.jsx)("img",{src:"./image/phone.svg",className:"phoneSvg",alt:"phonelogo"})};var k=function(){return Object(s.jsx)(v,{children:Object(s.jsx)(b,{children:function(e){var n=e.navBar,t=e.heading,a=e.about,o=e.dispatch,c=e.showProducts,r=e.showCompany,i=e.showDevelopers,l=e.currungDeveloperPosition,u=e.currungCompanyPosition,d=e.currungProductPosition;return Object(s.jsxs)("div",{className:"wholeContainer",children:[Object(s.jsx)(x,{navBar:n,dispatch:o}),Object(s.jsx)(N,{heading:t,about:a}),Object(s.jsx)(C,{}),Object(s.jsx)(E,{}),i&&Object(s.jsx)(y,{curruntPosition:l,dispatch:o,linkList:n.developers}),r&&Object(s.jsx)(f,{curruntPosition:u,dispatch:o,linkList:n.company}),c&&Object(s.jsx)(P,{curruntPosition:d,dispatch:o,linkList:n.products})]})}})})},_=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,s=n.getFID,a=n.getFCP,o=n.getLCP,c=n.getTTFB;t(e),s(e),a(e),o(e),c(e)}))};r.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root")),_()}},[[16,1,2]]]);
//# sourceMappingURL=main.a13639b8.chunk.js.map