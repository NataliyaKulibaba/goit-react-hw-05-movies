"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[54],{9054:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var n=r(885),a=r(6871),c=r(2791),u=r(8370);var s="Cast_cast__2PZoJ",i="Cast_castImg__NXKod",p="Cast_castItem__5sVYS",o="Cast_castItemDesc__qKCsX",l="Cast_castName__0BYpG",f=r(184);function h(){var t=function(){var t=(0,a.UO)().movieId,e=(0,c.useState)([]),r=(0,n.Z)(e,2),s=r[0],i=r[1];return(0,c.useEffect)((function(){try{u.kK(Number(t)).then((function(t){i(t.cast)}))}catch(e){}}),[t]),s}();return(0,f.jsx)("div",{children:t&&(0,f.jsx)("ul",{className:s,children:t.map((function(t){var e=t.profile_path,r=t.character,n=t.name,a=t.id;return(0,f.jsxs)("li",{className:p,children:[(0,f.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):"https://st4.depositphotos.com/4967103/22006/v/1600/depositphotos_220068534-stock-illustration-404-error-found-tee-print.jpg",alt:n,className:i}),(0,f.jsxs)("ul",{className:o,children:[(0,f.jsxs)("li",{className:l,children:["Character: ",r]}),(0,f.jsxs)("li",{className:l,children:["Name: ",n]})]})]},a)}))})})}},8370:function(t,e,r){r.d(e,{BG:function(){return p},I2:function(){return l},vw:function(){return h},kK:function(){return v},cd:function(){return _}});var n=r(5861),a=r(7757),c=r.n(a),u=r(4569),s=r.n(u);s().defaults.baseURL="https://api.themoviedb.org/3",s().defaults.keyAPI="ddda8272dece2632275115613738c84b";var i="ddda8272dece2632275115613738c84b";function p(t){return o.apply(this,arguments)}function o(){return(o=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get("/movie/".concat(e,"?api_key=").concat(i,"&page=1"));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0);case 9:return t.abrupt("return");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function l(t){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get("/search/movie?api_key=".concat(i,"&page=1&query=").concat(e,"&page=1"));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0);case 9:return t.abrupt("return",null);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function h(){return d.apply(this,arguments)}function d(){return d=(0,n.Z)(c().mark((function t(){var e,r,n=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:1,t.prev=1,t.next=4,s().get("/trending/all/day?api_key=".concat(i,"&page=").concat(e));case 4:return r=t.sent,t.abrupt("return",r.data);case 8:t.prev=8,t.t0=t.catch(1);case 10:return t.abrupt("return",null);case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),d.apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get("/movie/".concat(e,"/credits?api_key=").concat(i));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0);case 9:return t.abrupt("return",null);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function _(t){return g.apply(this,arguments)}function g(){return(g=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s().get("/movie/".concat(e,"/reviews?api_key=").concat(i));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0);case 9:return t.abrupt("return",null);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=54.f743f8c7.chunk.js.map