"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{736:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r,a=e(439),u=e(791),c=e(689),i=e(479),o=e(355),s=e(168),p=e(444).ZP.ul(r||(r=(0,s.Z)(["\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-auto-rows: minmax(100px, auto);\n"]))),f=e(184),d=function(){var n=(0,c.UO)().id,t=(0,u.useState)([]),e=(0,a.Z)(t,2),r=e[0],s=e[1];return(0,u.useEffect)((function(){(0,i.LC)(n).then(s)}),[n]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Cast:"}),r&&r.length?(0,f.jsx)(p,{children:r.map((function(n){return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:o.Y+n.profile_path,alt:n.name,width:"150"}),(0,f.jsx)("p",{children:n.name})]},n.id)}))}):(0,f.jsx)("div",{children:"We don't have any cast for this movie"})]})}},479:function(n,t,e){e.d(t,{FP:function(){return p},LC:function(){return f},WE:function(){return o},Xn:function(){return d},mv:function(){return s}});var r=e(861),a=e(757),u=e.n(a),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="76cbb606f190fc237086ec33f1fd98a3",o=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(i),t);case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t,e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"),e);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r,a,o=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>1&&void 0!==o[1]?o[1]:"",r=o.length>2?o[2]:void 0,n.next=4,c.Z.get("movie/".concat(t).concat(e,"?api_key=").concat(i,"&language=en-US"),r);case 4:return a=n.sent,n.abrupt("return",a.data);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},355:function(n,t,e){e.d(t,{Y:function(){return r}});var r="https://image.tmdb.org/t/p/w400"}}]);
//# sourceMappingURL=736.2fbc0ced.chunk.js.map