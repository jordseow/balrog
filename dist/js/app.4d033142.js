(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d21e062":"6cd32de2","chunk-2d230bbe":"158ff2b6","chunk-34031b57":"0f7a09e0","chunk-7752c328":"74922206","chunk-7d7ac651":"7daeecd8","chunk-982b9b30":"8ba75964","chunk-9d4ccac2":"3f1b71d4","chunk-160d9aa0":"cf8a54b1","chunk-80796a22":"fc1884bd","chunk-dda6e3ba":"52e388e0"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-34031b57":1,"chunk-7752c328":1,"chunk-7d7ac651":1,"chunk-160d9aa0":1,"chunk-80796a22":1,"chunk-dda6e3ba":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d21e062":"31d6cfe0","chunk-2d230bbe":"31d6cfe0","chunk-34031b57":"ac8345f3","chunk-7752c328":"242d23f1","chunk-7d7ac651":"a4df21ee","chunk-982b9b30":"31d6cfe0","chunk-9d4ccac2":"31d6cfe0","chunk-160d9aa0":"90ad5199","chunk-80796a22":"c2f1f435","chunk-dda6e3ba":"8005d72c"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"032d":function(e,t,n){"use strict";var r=n("59ca"),a=n.n(r),o=(n("e71f"),{apiKey:"AIzaSyCgLVju_UBGx9ny3iZ1G5ZpkAn8rVLCFFY",authDomain:"bt3103-forum.firebaseapp.com",databaseURL:"https://bt3103-forum.firebaseio.com",projectId:"bt3103-forum",storageBucket:"bt3103-forum.appspot.com",messagingSenderId:"390281398455",appId:"1:390281398455:web:bfbc7b251808271ddc2532",measurementId:"G-1EXGWCK77H"}),i=a.a.initializeApp(o),c=a.a.firestore();window.db=c,t["a"]=i.firestore()},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),a=n("ce5b"),o=n.n(a);n("bf40");r["default"].use(o.a);var i=n("bc3a"),c=n.n(i),u={},s=c.a.create(u);s.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=s,window.axios=s,Object.defineProperties(e.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},r["default"].use(Plugin);Plugin;var l=n("123d"),d=n.n(l),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.component,{tag:"component"},[e._t("default")],2)},p=[],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.user.loggedIn?n("v-app",[n("v-navigation-drawer",{staticClass:"blue-grey darken-4",attrs:{width:"250",dark:"",persistent:"","mini-variant":e.miniVariant,fixed:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-toolbar",{staticClass:"transparent",attrs:{flat:"",dense:""}},[n("v-list",{staticClass:"pa-0",class:{"list-border-bottom":e.miniVariant}},[n("v-list-tile",[e.miniVariant?e._e():n("v-list-tile-action",[n("v-icon",{attrs:{large:"",color:"orange"}},[e._v("invert_colors")])],1),e.miniVariant?e._e():n("v-list-tile-content",[n("v-list-tile-title",[n("h4",[e._v("NUSTutors")])])],1),n("v-list-tile-action",[n("v-btn",{attrs:{icon:""},on:{click:function(t){t.stopPropagation(),e.miniVariant=!e.miniVariant}}},[n("v-icon",{domProps:{innerHTML:e._s(e.miniVariant?"chevron_right":"chevron_left")}})],1)],1)],1)],1)],1),n("v-divider"),n("v-tooltip",{attrs:{right:"",disabled:!e.miniVariant}},[n("v-toolbar",{staticClass:"transparent",attrs:{slot:"activator",flat:"",dense:""},slot:"activator"},[n("v-list",{staticClass:"pa-0",class:{"list-border-bottom":e.miniVariant}},[n("v-list-tile",{attrs:{to:"/home",exact:""}},[n("v-list-tile-action",[n("v-icon",[e._v("home")])],1),n("v-list-tile-content",[n("v-list-tile-title",[e._v("Home")])],1)],1)],1)],1)],1),n("v-divider"),n("v-list",{class:{"list-border-bottom":e.miniVariant},attrs:{subheader:""}},[e._l(e.analyticsItems,(function(t){return[n("v-tooltip",{attrs:{right:"",disabled:!e.miniVariant}},[n("v-list-tile",{key:t.icon,attrs:{slot:"activator",to:t.link,exact:""},on:{submit:function(t){return t.preventDefault(),e.enter(t)}},slot:"activator"},[n("v-list-tile-action",[n("v-icon",{domProps:{innerHTML:e._s(t.icon)}})],1),n("v-list-tile-content",[n("v-list-tile-title",{domProps:{textContent:e._s(t.title)}})],1)],1),n("span",{domProps:{textContent:e._s(t.title)}})],1)]}))],2),n("v-divider"),n("v-list",{class:{"list-border-bottom":e.miniVariant},attrs:{subheader:""}},[n("v-list-tile",{key:"lock_open",on:{click:function(t){return t.preventDefault(),e.signOut(t)}}},[n("v-list-tile-action",[n("v-icon",[e._v("lock_open")])],1),n("v-list-tile-content",[n("v-list-tile-title",[e._v("Logout")])],1)],1)],1),n("v-divider")],1),n("v-content",[n("router-view")],1)],1):n("v-app",[n("v-content",[n("router-view")],1)],1)},b=[],m=n("2f62"),v=n("8aa5"),g=n.n(v);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w={name:"VuebaseLayout",computed:y({},Object(m["b"])({user:"user"})),data:function(){return{appName:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APP_NAME,drawer:!0,fixed:!1,analyticsItems:[{icon:"dashboard",title:"Dashboard",link:"/dashboard"},{icon:"search",title:"Module Search",link:"/search"},{icon:"chat",title:"Chat",link:"/chat"},{icon:"person",title:"Profile",link:"/profile"}],miniVariant:!1,right:!0,rightDrawer:!1,searching:!1,search:""}},methods:{signOut:function(){var e=this;g.a.auth().signOut().then((function(){e.$router.replace({name:"login"})}))},enter:function(){this.$router.push({name:"Chat",params:{name:user.data.displayName}})}}},O=w,P=(n("f239"),n("2877")),j=Object(P["a"])(O,h,b,!1,null,"0e4efd74",null),E=j.exports,S={name:"App",components:{VuebaseLayout:E},computed:{component:function(){return E}}},x=S,C=Object(P["a"])(x,f,p,!1,null,null,null),V=C.exports,A=n("8c4f");r["default"].use(A["a"]);var L=[{path:"/home",name:"home",component:function(){return n.e("chunk-7752c328").then(n.bind(null,"bb51"))}},{path:"/dashboard",name:"dashboard",component:function(){return n.e("chunk-982b9b30").then(n.bind(null,"9e88"))}},{path:"/chat",name:"Chat",component:function(){return n.e("chunk-34031b57").then(n.bind(null,"94a0"))},props:!0},{path:"/login",name:"login",component:function(){return n.e("chunk-2d21e062").then(n.bind(null,"d495"))}},{path:"/register",name:"register",component:function(){return n.e("chunk-2d230bbe").then(n.bind(null,"ee19"))}},{path:"/",name:"landing",component:function(){return n.e("chunk-dda6e3ba").then(n.bind(null,"7ac9"))}},{path:"/search",name:"search",component:function(){return n.e("chunk-7d7ac651").then(n.bind(null,"2d3b"))}},{path:"/tutors/:tut",component:function(){return Promise.all([n.e("chunk-9d4ccac2"),n.e("chunk-80796a22")]).then(n.bind(null,"213e"))}},{path:"/profile",name:"profile",component:function(){return Promise.all([n.e("chunk-9d4ccac2"),n.e("chunk-160d9aa0")]).then(n.bind(null,"8f06"))}}],N=new A["a"]({mode:"history",base:"/",routes:L}),T=N;r["default"].use(m["a"]);var D=new m["a"].Store({state:{user:{loggedIn:!1,data:null}},getters:{user:function(e){return e.user}},mutations:{SET_LOGGED_IN:function(e,t){e.user.loggedIn=t},SET_USER:function(e,t){e.user.data=t}},actions:{fetchUser:function(e,t){var n=e.commit;n("SET_LOGGED_IN",null!==t),n("SET_USER",t?{displayName:t.displayName,email:t.email}:null)}}}),I=n("d7b1"),U=n("f9bc"),G=(n("032d"),n("59ca")),M=n.n(G),$=n("1157"),B=n.n($),H=(n("d1e7"),n("d48d"),n("4989"),n("ab8b"),n("c1da")),R=n.n(H);n("84b5");r["default"].config.productionTip=!1,r["default"].use(d.a),r["default"].use(I["a"]),r["default"].use(U["a"]),r["default"].use(o.a),r["default"].use(n("84b5")),window.$=window.jQuery=B.a,M.a.auth().onAuthStateChanged((function(e){D.dispatch("fetchUser",e)})),new r["default"]({render:function(e){return e(V)},router:T,store:D,components:{App:V,StarRating:R.a}}).$mount("#app")},acc7:function(e,t,n){},f239:function(e,t,n){"use strict";var r=n("acc7"),a=n.n(r);a.a}});
//# sourceMappingURL=app.4d033142.js.map