"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[393],{393:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(501),a=r(6871),c=r(885),u=r(2791),s=r(8370);var i="HomePage_moviesList__0DF1e",o="HomePage_movieItem__2DNqM",p="HomePage_movie__i9NmD",l="HomePage_movieTitle__6iyOl",f="HomePage_movieLink__9H1GE",v=r(184);function h(){var e=function(){var e=(0,u.useState)([]),t=(0,c.Z)(e,2),r=t[0],n=t[1];return(0,u.useEffect)((function(){s.vw().then((function(e){return n(e.results)}))}),[]),r}(),t=(0,a.TH)();return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("ul",{className:i,children:e&&e.map((function(e){var r=e.title,a=e.id,c=e.name,u=e.poster_path;return(0,v.jsx)("li",{className:o,children:(0,v.jsxs)(n.rU,{to:"/movies/".concat(a),state:{from:t},className:f,children:[(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(u),alt:r||c,className:p}),(0,v.jsx)("p",{className:l,children:r||c})]})},a)}))})})}},8370:function(e,t,r){r.d(t,{BG:function(){return o},I2:function(){return l},vw:function(){return v},kK:function(){return m},cd:function(){return _}});var n=r(5861),a=r(7757),c=r.n(a),u=r(4569),s=r.n(u);s().defaults.baseURL="https://api.themoviedb.org/3",s().defaults.keyAPI="ddda8272dece2632275115613738c84b";var i="ddda8272dece2632275115613738c84b";function o(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/movie/".concat(t,"?api_key=").concat(i,"&page=1"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:return e.abrupt("return");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/search/movie?api_key=".concat(i,"&page=1&query=").concat(t,"&page=1"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:return e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(){return h.apply(this,arguments)}function h(){return h=(0,n.Z)(c().mark((function e(){var t,r,n=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,e.prev=1,e.next=4,s().get("/trending/all/day?api_key=".concat(i,"&page=").concat(t));case 4:return r=e.sent,e.abrupt("return",r.data);case 8:e.prev=8,e.t0=e.catch(1);case 10:return e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),h.apply(this,arguments)}function m(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/movie/".concat(t,"/credits?api_key=").concat(i));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:return e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function _(e){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:return e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=393.d3d58d3f.chunk.js.map