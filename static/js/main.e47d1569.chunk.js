(this["webpackJsonpmy-burger-app"]=this["webpackJsonpmy-burger-app"]||[]).push([[0],[,,function(e,t,n){"use strict";n.d(t,"o",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"u",(function(){return c})),n.d(t,"w",(function(){return u})),n.d(t,"j",(function(){return o})),n.d(t,"t",(function(){return i})),n.d(t,"p",(function(){return l})),n.d(t,"r",(function(){return s})),n.d(t,"s",(function(){return d})),n.d(t,"q",(function(){return f})),n.d(t,"k",(function(){return m})),n.d(t,"m",(function(){return b})),n.d(t,"n",(function(){return p})),n.d(t,"l",(function(){return g})),n.d(t,"b",(function(){return _})),n.d(t,"g",(function(){return E})),n.d(t,"i",(function(){return h})),n.d(t,"h",(function(){return v})),n.d(t,"d",(function(){return O})),n.d(t,"f",(function(){return j})),n.d(t,"e",(function(){return k})),n.d(t,"c",(function(){return x})),n.d(t,"v",(function(){return C}));var r="INIT_INGREDIENTS",a="ADD_INGREDIENT",c="REMOVE_INGREDIENT",u="SET_INGREDIENTS",o="FETCH_INGREDIENTS_FAILED",i="PURCHASE_INIT",l="PURCHASE_BURGER",s="PURCHASE_BURGER_START",d="PURCHASE_BURGER_SUCCESS",f="PURCHASE_BURGER_FAIL",m="FETCH_ORDERS",b="FETCH_ORDERS_START",p="FETCH_ORDERS_SUCCESS",g="FETCH_ORDERS_FAIL",_="AUTH_CHECK_STATE",E="AUTH_START",h="AUTH_USER",v="AUTH_SUCCESS",O="AUTH_FAIL",j="AUTH_LOGOUT",k="AUTH_INITIATE_LOGOUT",x="AUTH_CHECK_TIMEOUT",C="SET_AUTH_REDIRECT_PATH"},,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"u",(function(){return c})),n.d(t,"n",(function(){return i})),n.d(t,"w",(function(){return u})),n.d(t,"i",(function(){return o})),n.d(t,"p",(function(){return f})),n.d(t,"t",(function(){return m})),n.d(t,"j",(function(){return _})),n.d(t,"l",(function(){return b})),n.d(t,"m",(function(){return p})),n.d(t,"k",(function(){return g})),n.d(t,"r",(function(){return d})),n.d(t,"s",(function(){return l})),n.d(t,"q",(function(){return s})),n.d(t,"b",(function(){return x})),n.d(t,"e",(function(){return O})),n.d(t,"v",(function(){return C})),n.d(t,"c",(function(){return w})),n.d(t,"o",(function(){return j})),n.d(t,"f",(function(){return E})),n.d(t,"g",(function(){return h})),n.d(t,"d",(function(){return v})),n.d(t,"h",(function(){return k}));var r=n(2),a=function(e){return{type:r.a,ingredientName:e}},c=function(e){return{type:r.u,ingredientName:e}},u=function(e){return{type:r.w,ingredients:e}},o=function(){return{type:r.j}},i=function(){return{type:r.o}},l=function(e,t){return{type:r.s,id:e,orderData:t}},s=function(e){return{type:r.q,error:e}},d=function(){return{type:r.r}},f=function(e,t){return{type:r.p,orderData:e,token:t}},m=function(){return{type:r.t}},b=function(){return{type:r.m}},p=function(e){return{type:r.n,orders:e}},g=function(e){return{type:r.l,error:e}},_=function(e,t){return{type:r.k,token:e,userId:t}},E=function(){return{type:r.g}},h=function(e,t){return{type:r.h,token:e,userId:t}},v=function(e){return{type:r.d,error:e}},O=function(){return{type:r.e}},j=function(){return{type:r.f}},k=function(e){return{type:r.c,expirationTime:e}},x=function(e,t,n){return{type:r.i,email:e,password:t,isSignup:n}},C=function(e){return{type:r.v,path:e}},w=function(){return{type:r.b}}},,,function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n(18),a=function(e,t){return Object(r.a)({},e,{},t)},c=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2c5xK",BreadTop:"BurgerIngredient_BreadTop__1z0dJ",Seed1:"BurgerIngredient_Seed1__dbwUZ",Seed2:"BurgerIngredient_Seed2__VpqyI",Meat:"BurgerIngredient_Meat__aZbWM",Cheese:"BurgerIngredient_Cheese__2WbJk",Salad:"BurgerIngredient_Salad__171yP",Bacon:"BurgerIngredient_Bacon__1fFMo"}},,,function(e,t,n){"use strict";var r=n(35),a=n.n(r).a.create({baseURL:"https://chatbot-2bd64.firebaseio.com/"});t.a=a},,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__2FJHZ",Logo:"SideDrawer_Logo__2wDFH",Open:"SideDrawer_Open__29A7r",Close:"SideDrawer_Close__1b78d"}},,,,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__3MQbU",Label:"BuildControl_Label__qSkBZ",Less:"BuildControl_Less__cZ-0W",More:"BuildControl_More__1AdVJ"}},function(e,t,n){e.exports={Modal:"Modal_Modal__2RxYm",Open:"Modal_Open__K6WVk",Close:"Modal_Close__PV-Tn"}},,,,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(66),u=n.n(c);t.a=function(e){return e.show?a.a.createElement("div",{className:u.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(28),u=n.n(c),o=n(12),i=n(33);t.a=a.a.memo((function(e){var t=[u.a.Modal,u.a.Close];return e.show&&(t=[u.a.Modal,u.a.Open]),a.a.createElement(o.a,null,a.a.createElement(i.a,{show:e.show,clicked:e.modalClose}),a.a.createElement("div",{className:t.join(" ")},e.children))}),(function(e,t){return t.show===e.show&&t.children===e.children}))},,function(e,t,n){e.exports={Button:"Button_Button__vkQ7d",Success:"Button_Success__Bfpol",Danger:"Button_Danger__7DLXV",BtnAuth:"Button_BtnAuth__JkayC"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(36),u=n.n(c);t.a=function(e){return a.a.createElement("button",{className:[u.a.Button,u.a[e.btnType],u.a[e.btnAuth]].join(" "),onClick:e.clicked,disabled:e.disabled},e.children)}},,,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__2Sif1",Logo:"Toolbar_Logo__2JxMx"}},function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__bgeU4",active:"NavigationItem_active__2GzlI"}},,,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__bmi8w",OrderButton:"BuildControls_OrderButton__ewqw3",enable:"BuildControls_enable__1eg0l"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(68),u=n.n(c);t.a=function(){return a.a.createElement("div",{className:u.a.Loader},"Loading...")}},function(e,t,n){"use strict";var r=n(17),a=n(0),c=n.n(a),u=n(12),o=n(34);t.a=function(e,t){return function(n){var i=function(e){var t=Object(a.useState)(null),n=Object(r.a)(t,2),c=n[0],u=n[1],o=e.interceptors.request.use((function(e){return u(null),e})),i=e.interceptors.response.use((function(e){return e}),(function(e){return u(e)}));Object(a.useEffect)((function(){return function(){e.interceptors.request.eject(o),e.interceptors.response.eject(i)}}),[i,o,e]);return[c,function(){u(null)}]}(t),l=Object(r.a)(i,2),s=l[0],d=l[1];return c.a.createElement(u.a,null,s?c.a.createElement(o.a,{show:s,modalClose:d},s?s.message:null):null,c.a.createElement(e,n))}}},,,,,,,,,,,function(e,t,n){"use strict";var r=n(70),a=n(0),c=n.n(a),u=n(67),o=n.n(u),i=n(16),l=n.n(i),s=function(e){var t=null;switch(e.type){case"bread-bottom":t=c.a.createElement("div",{className:l.a.BreadBottom});break;case"bread-top":t=c.a.createElement("div",{className:l.a.BreadTop},c.a.createElement("div",{className:l.a.Seed1}),c.a.createElement("div",{className:l.a.Seed2}));break;case"meat":t=c.a.createElement("div",{className:l.a.Meat});break;case"cheese":t=c.a.createElement("div",{className:l.a.Cheese});break;case"salad":t=c.a.createElement("div",{className:l.a.Salad});break;case"bacon":t=c.a.createElement("div",{className:l.a.Bacon});break;default:t=null}return t},d=c.a.memo((function(e){var t=Object.keys(e.ingrediented).map((function(t){return Object(r.a)(Array(e.ingrediented[t])).map((function(e,n){return c.a.createElement(s,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=c.a.createElement("p",null,"Please adding an ingredient")),c.a.createElement("div",{className:o.a.Burger},c.a.createElement(s,{type:"bread-top"}),t,c.a.createElement(s,{type:"bread-bottom"}))}));t.a=d},,,function(e,t,n){e.exports={Content:"Layout_Content__23yah"}},function(e,t,n){e.exports={Logo:"Logo_Logo__2iIjX"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__sQavj"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__335QO"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__tU-CV"}},function(e,t,n){e.exports={Burger:"Burger_Burger__1sVAM"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__6VPIM",load3:"Spinner_load3__3kzHu"}},,,function(e,t,n){e.exports=n(101)},,,,,,,,,function(e,t,n){},function(e,t,n){e.exports={App:"App_App__23eeO"}},,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(29),u=n.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(20),i=n(15),l=n(10),s=n(60),d=n(69),f=(n(80),n(8)),m=(n(81),n(17)),b=n(12),p=n(61),g=n.n(p),_=n(40),E=n.n(_),h=n(62),v=n.n(h),O=n(63),j=n.n(O),k=function(){return a.a.createElement("div",{className:v.a.Logo},a.a.createElement("img",{src:j.a,alt:"MyBurger"}))},x=n(64),C=n.n(x),w=n(41),B=n.n(w),I=function(e){return a.a.createElement("li",{className:B.a.NavigationItem},a.a.createElement(o.b,{to:e.link,exact:e.exact,activeClassName:B.a.active},e.children))},T=function(e){return a.a.createElement("ul",{className:C.a.NavigationItems},a.a.createElement(I,{link:"/",exact:!0},"Burger Builder"),e.isAuthenticated?a.a.createElement(I,{link:"/orders"},"Orders"):null,e.isAuthenticated?a.a.createElement(I,{link:"/logout"},"Log out"):a.a.createElement(I,{link:"/auth"},"Authenticate"))},S=n(65),y=n.n(S),N=function(e){return a.a.createElement("div",{className:y.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},A=function(e){return a.a.createElement("header",{className:E.a.Toolbar},a.a.createElement(N,{clicked:e.sideDrawerToggleClicked}),a.a.createElement("div",{className:E.a.Logo},a.a.createElement(k,null)),a.a.createElement("nav",null,a.a.createElement(T,{isAuthenticated:e.isAuth})))},D=n(23),R=n.n(D),L=n(33),U=function(e){var t=[R.a.SideDrawer,R.a.Close];return e.open&&(t=[R.a.SideDrawer,R.a.Open]),a.a.createElement(b.a,null,a.a.createElement(L.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" ")},a.a.createElement("div",{className:R.a.Logo},a.a.createElement(k,null)),a.a.createElement("nav",{onClick:e.closed},a.a.createElement(T,{isAuthenticated:e.isAuth}))))},H=function(e){var t=Object(r.useState)(!1),n=Object(m.a)(t,2),c=n[0],u=n[1],o=Object(l.c)((function(e){return null!=e.auth.token}));return a.a.createElement(b.a,null,a.a.createElement(U,{open:c,closed:function(){u(!1)},isAuth:o}),a.a.createElement(A,{sideDrawerToggleClicked:function(){u((function(e){return!e}))},isAuth:o}),a.a.createElement("main",{className:g.a.Content},e.children))},M=n(6),P=n(18),z=n(58),F=n(45),q=n.n(F),G=n(27),J=n.n(G),V=function(e){return a.a.createElement("div",{className:J.a.BuildControl},a.a.createElement("div",{className:J.a.Label},e.label),a.a.createElement("button",{className:J.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:J.a.More,onClick:e.added},"More"))},W=[{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"},{label:"Salad",type:"salad"}],Q=a.a.memo((function(e){return a.a.createElement("div",{className:q.a.BuildControls},a.a.createElement("p",null,"Current Price:",a.a.createElement("strong",null,e.price.toFixed(2))),W.map((function(t){return a.a.createElement(V,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),a.a.createElement("button",{className:q.a.OrderButton,disabled:!e.purchasabled,onClick:e.show},"ORDER NOW"))})),Z=n(34),K=n(37),$=function(e){var t=Object.keys(e.ingredients).map((function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.ingredients[t])}));return a.a.createElement(b.a,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with following ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: ",e.price.toFixed(2))),a.a.createElement("p",null,"Continue to Checkout ?"),a.a.createElement(K.a,{btnType:"Danger",clicked:e.purchaseCancelled},"Cancel"),a.a.createElement(K.a,{btnType:"Success",clicked:e.purchaseContinued},"Continue"))},X=n(19),Y=n(46),ee=n(47),te=a.a.memo((function(e){var t=Object(r.useState)(!1),n=Object(m.a)(t,2),c=n[0],u=n[1],o=Object(l.b)(),i=Object(r.useCallback)((function(e){return o(M.a(e))}),[o]),s=Object(r.useCallback)((function(e){return o(M.u(e))}),[o]),d=Object(r.useCallback)((function(){return o(M.n())}),[o]),f=Object(r.useCallback)((function(){return o(M.t())}),[o]),p=Object(r.useCallback)((function(e){return o(M.v(e))}),[o]),g=Object(l.c)((function(e){return e.burgerBuilder.ingredients})),_=Object(l.c)((function(e){return e.burgerBuilder.totalPrice})),E=Object(l.c)((function(e){return e.burgerBuilder.error})),h=Object(l.c)((function(e){return null!=e.auth.token}));Object(r.useEffect)((function(){d()}),[d]);var v=Object(r.useCallback)((function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}),[]),O=Object(r.useCallback)((function(){u(!1)}),[]),j=Object(P.a)({},g);for(var k in j)j[k]=j[k]<=0;var x=null,C=E?a.a.createElement("p",null,"Ingredients can't be loaded"):a.a.createElement(Y.a,null);return g&&(C=a.a.createElement(b.a,null,a.a.createElement(z.a,{ingrediented:g}),a.a.createElement(Q,{ingredientAdded:i,ingredientRemoved:s,isAuth:h,price:_,disabled:j,purchasabled:v(g),show:function(){h?u(!0):(p("/checkout"),e.history.push("/auth"))}})),x=a.a.createElement($,{ingredients:g,purchaseCancelled:O,purchaseContinued:function(){e.history.push("/checkout"),f()},price:_})),console.log("BurgerBuilder rendering"),a.a.createElement(b.a,null,c?a.a.createElement(Z.a,{show:c,modalClose:O},x):null,C)})),ne=Object(ee.a)(te,X.a),re=function(e){var t=Object(l.b)(),n=Object(r.useCallback)((function(){return t(M.e())}),[t]);return Object(r.useEffect)((function(){n()}),[n]),a.a.createElement(f.a,{to:"/"})},ae=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,108))})),ce=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,109))})),ue=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,110))})),oe=Object(f.g)((function(e){var t=Object(l.b)(),n=Object(r.useCallback)((function(){return t(M.c())}),[t]),c=Object(l.c)((function(e){return null!=e.auth.token}));Object(r.useEffect)((function(){n()}),[n]);var u=a.a.createElement(f.d,null,a.a.createElement(f.b,{path:"/auth",render:function(e){return a.a.createElement(ae,e)}}),a.a.createElement(f.b,{path:"/",exact:!0,component:ne}),a.a.createElement(f.a,{to:"/"}));return c&&(u=a.a.createElement(f.d,null,a.a.createElement(f.b,{path:"/checkout",render:function(e){return a.a.createElement(ce,e)}}),a.a.createElement(f.b,{path:"/orders",render:function(e){return a.a.createElement(ue,e)}}),a.a.createElement(f.b,{path:"/auth",render:function(e){return a.a.createElement(ae,e)}}),a.a.createElement(f.b,{path:"/logout",component:re}),a.a.createElement(f.b,{path:"/",exact:!0,component:ne}),a.a.createElement(f.a,{to:"/"}))),a.a.createElement("div",{className:"App"},a.a.createElement(H,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement("p",null,"loading...")},u)))})),ie=n(24),le=n(2),se=n(9),de={ingredients:null,totalPrice:4,error:!1,building:!1},fe={salad:.5,bacon:.7,cheese:.4,meat:1.3},me=function(e,t){var n=Object(ie.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(se.b)(e.ingredients,n),totalPrice:e.totalPrice+fe[t.ingredientName],building:!0};return Object(se.b)(e,r)},be=function(e,t){var n=Object(ie.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(se.b)(e.ingredients,n),totalPrice:e.totalPrice-fe[t.ingredientName],building:!0};return Object(se.b)(e,r)},pe=function(e,t){return Object(se.b)(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,building:!1})},ge=function(e,t){return Object(se.b)(e,{error:!0})},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le.a:return me(e,t);case le.u:return be(e,t);case le.w:return pe(e,t);case le.j:return ge(e);default:return e}},Ee={orders:[],loading:!1,purchased:!1},he=function(e,t){return Object(se.b)(e,{purchased:!1})},ve=function(e,t){return Object(se.b)(e,{loading:!0})},Oe=function(e,t){var n=Object(P.a)({},t.orderData,{id:t.id});return Object(se.b)(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)})},je=function(e,t){return Object(se.b)(e,{loading:!1})},ke=function(e,t){return Object(se.b)(e,{loading:!0})},xe=function(e,t){return Object(se.b)(e,{orders:t.orders,loading:!1})},Ce=function(e,t){return Object(se.b)(e,{loading:!1})},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le.t:return he(e);case le.r:return ve(e);case le.s:return Oe(e,t);case le.q:return je(e);case le.m:return ke(e);case le.n:return xe(e,t);case le.l:return Ce(e);default:return e}},Be={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},Ie=function(e,t){return Object(se.b)(e,{loading:!0})},Te=function(e,t){return Object(se.b)(e,{loading:!1,token:t.token,userId:t.userId})},Se=function(e,t){return Object(se.b)(e,{loading:!1,error:t.error})},ye=function(e,t){return Object(se.b)(e,{token:null,userId:null})},Ne=function(e,t){return Object(se.b)(e,{authRedirectPath:t.path})},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le.g:return Ie(e);case le.h:return Te(e,t);case le.d:return Se(e,t);case le.f:return ye(e);case le.v:return Ne(e,t);default:return e}},De=n(7),Re=n.n(De),Le=n(5),Ue=n(35),He=n.n(Ue),Me="AIzaSyD2wwCJ_qjeaL8Am1hbRD1QfB11fJHPHTc",Pe=Re.a.mark(Ge),ze=Re.a.mark(Je),Fe=Re.a.mark(Ve),qe=Re.a.mark(We);function Ge(){return Re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Le.b)([localStorage,"removeItem"],"idToken");case 2:return e.next=4,Object(Le.b)([localStorage,"removeItem"],"userId");case 4:return e.next=6,Object(Le.b)([localStorage,"removeItem"],"expirationDate");case 6:return e.next=8,Object(Le.d)(M.o());case 8:case"end":return e.stop()}}),Pe)}function Je(e){return Re.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Le.c)(1e3*e.expirationTime);case 2:return t.next=4,Object(Le.d)(M.e());case 4:case"end":return t.stop()}}),ze)}function Ve(e){var t,n,r,a;return Re.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(Le.d)(M.f());case 2:return t={email:e.email,password:e.password,returnSecureToken:!0},n="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+Me,e.isSignup||(n="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+Me),c.prev=5,c.next=8,He.a.post(n,t);case 8:return r=c.sent,a=new Date((new Date).getTime()+1e3*r.data.expiresIn),c.next=12,localStorage.setItem("idToken",r.data.idToken);case 12:return c.next=14,localStorage.setItem("expirationDate",a);case 14:return c.next=16,localStorage.setItem("userId",r.data.localId);case 16:return c.next=18,Object(Le.d)(M.g(r.data.idToken,r.data.localId));case 18:return c.next=20,Object(Le.d)(M.h(r.data.expiresIn));case 20:c.next=26;break;case 22:return c.prev=22,c.t0=c.catch(5),c.next=26,Object(Le.d)(M.d(c.t0.response.data.error));case 26:case"end":return c.stop()}}),Fe,null,[[5,22]])}function We(){var e,t,n;return Re.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,localStorage.getItem("idToken");case 2:if(e=r.sent){r.next=8;break}return r.next=6,Object(Le.d)(M.e());case 6:r.next=21;break;case 8:return r.next=10,new Date(localStorage.getItem("expirationDate"));case 10:if(!((t=r.sent)<=new Date)){r.next=16;break}return r.next=14,Object(Le.d)(M.e());case 14:r.next=21;break;case 16:return n=localStorage.getItem("userId"),r.next=19,Object(Le.d)(M.g(e,n));case 19:return r.next=21,Object(Le.d)(M.h((t.getTime()-(new Date).getTime())/1e3));case 21:case"end":return r.stop()}}),qe)}var Qe=Re.a.mark(Ze);function Ze(){var e;return Re.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,X.a.get("/ingredients.json");case 3:return e=t.sent,t.next=6,Object(Le.d)(M.w(e.data));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Le.d)(M.i());case 12:case"end":return t.stop()}}),Qe,null,[[0,8]])}var Ke=Re.a.mark(Xe),$e=Re.a.mark(Ye);function Xe(e){var t;return Re.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Le.d)(M.r());case 2:return n.prev=2,n.next=5,X.a.post("/orders.json?auth="+e.token,e.orderData);case 5:return t=n.sent,n.next=8,Object(Le.d)(M.s(t.data.name,e.orderData));case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(2),n.next=14,Object(Le.d)(M.q(n.t0));case 14:case"end":return n.stop()}}),Ke,null,[[2,10]])}function Ye(e){var t,n,r,a;return Re.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(Le.d)(M.l());case 2:return t="?auth="+e.token+'&orderBy="userId"&equalTo="'+e.userId+'"',c.prev=3,c.next=6,X.a.get("/orders.json"+t);case 6:for(a in n=c.sent,r=[],n.data)r.push(Object(P.a)({},n.data[a],{id:a}));return c.next=11,Object(Le.d)(M.m(r));case 11:c.next=17;break;case 13:return c.prev=13,c.t0=c.catch(3),c.next=17,Object(Le.d)(M.k(c.t0));case 17:case"end":return c.stop()}}),$e,null,[[3,13]])}var et=Re.a.mark(rt),tt=Re.a.mark(at),nt=Re.a.mark(ct);function rt(){return Re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Le.a)([Object(Le.e)(le.c,Je),Object(Le.e)(le.e,Ge),Object(Le.e)(le.i,Ve),Object(Le.e)(le.b,We)]);case 2:case"end":return e.stop()}}),et)}function at(){return Re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Le.e)(le.o,Ze);case 2:case"end":return e.stop()}}),tt)}function ct(){return Re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Le.f)(le.p,Xe);case 2:return e.next=4,Object(Le.e)(le.k,Ye);case 4:case"end":return e.stop()}}),nt)}var ut=Object(i.c)({burgerBuilder:_e,order:we,auth:Ae}),ot=i.d,it=Object(d.a)(),lt=Object(i.e)(ut,ot(Object(i.a)(s.a,it)));it.run(rt),it.run(at),it.run(ct);var st=a.a.createElement(l.a,{store:lt},a.a.createElement(o.a,null,a.a.createElement(oe,null)));u.a.render(st,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[71,1,2]]]);
//# sourceMappingURL=main.e47d1569.chunk.js.map