"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[508],{5508:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(885),a=n(6871),c=n(2791),i=n(8370);var s=n(501),u="MovieDetailsPage_movieImg__fNMS1",o="MovieDetailsPage_movie__Xv94v",l="MovieDetailsPage_movieInfo__fyDpK",p="MovieDetailsPage_movieItem__efvXb",v="MovieDetailsPage_movieAditional__DJmDN",d="MovieDetailsPage_movieDesc__r5naA",f="MovieDetailsPage_movieTitle__Cmbel",h="MovieDetailsPage_movieLink__wlitA",m="MovieDetailsPage_activeLink__mQE8R",_=n(184);function g(){var e=function(){var e=(0,c.useState)(""),t=(0,r.Z)(e,2),n=t[0],s=t[1],u=(0,a.UO)().movieId;return(0,c.useEffect)((function(){i.BG(Number(u)).then(s)}),[u]),n}(),t=(0,a.s0)();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("button",{type:"button",onClick:function(){t(-1)},children:"Go back"}),(0,_.jsxs)("div",{className:o,children:[e?(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{className:l,children:[(0,_.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title,className:u}),(0,_.jsxs)("div",{className:d,children:[(0,_.jsx)("h2",{className:f,children:e.title}),(0,_.jsxs)("p",{className:p,children:["VOTE: ",e.vote_average]}),(0,_.jsxs)("p",{className:p,children:["GENRES: ",e.genres.map((function(e){return e.name})).join(", ")]}),(0,_.jsxs)("p",{className:p,children:["OVERVIEW: ",e.overview]})]})]}),(0,_.jsx)("hr",{}),(0,_.jsx)("p",{className:v,children:"Aditional information"}),(0,_.jsxs)("ul",{children:[(0,_.jsx)("li",{children:(0,_.jsx)(s.OL,{to:"cast",className:function(e){return e.isActive?m:h},children:"Cast"})}),(0,_.jsx)("li",{children:(0,_.jsx)(s.OL,{to:"reviews",className:function(e){return e.isActive?m:h},children:"Reviews"})})]})]}):(0,_.jsx)("p",{className:l,children:"Movie not found"}),(0,_.jsx)(a.j3,{})]})]})}},8370:function(e,t,n){n.d(t,{BG:function(){return o},I2:function(){return p},vw:function(){return d},kK:function(){return h},cd:function(){return _}});var r=n(5861),a=n(7757),c=n.n(a),i=n(4569),s=n.n(i);s().defaults.baseURL="https://api.themoviedb.org/3",s().defaults.keyAPI="ddda8272dece2632275115613738c84b";var u="ddda8272dece2632275115613738c84b";function o(e){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/movie/".concat(t,"?api_key=").concat(u,"&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:return e.abrupt("return");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function p(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/search/movie?api_key=".concat(u,"&page=1&query=").concat(t,"&page=1"));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:return e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(c().mark((function e(){var t,n,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,e.prev=1,e.next=4,s().get("/trending/all/day?api_key=".concat(u,"&page=").concat(t));case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1);case 10:return e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),f.apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/movie/".concat(t,"/credits?api_key=").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:return e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function _(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/movie/".concat(t,"/reviews?api_key=").concat(u));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:e.prev=7,e.t0=e.catch(0);case 9:return e.abrupt("return",null);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=508.c5517bd2.chunk.js.map