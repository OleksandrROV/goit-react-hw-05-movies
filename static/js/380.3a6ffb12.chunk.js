"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[380],{380:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,a,i,o,c,s,u,p,d=t(439),l=t(168),f=t(444),h=f.ZP.div(r||(r=(0,l.Z)(["\n  position: absolute;\n  left: 350px;\n  right: 25px;\n  top: 150px;\n"]))),v=f.ZP.h2(a||(a=(0,l.Z)(["\n  margin-bottom: 10px;\n"]))),x=f.ZP.p(i||(i=(0,l.Z)(["\n  margin-bottom: 25px;\n"]))),g=f.ZP.p(o||(o=(0,l.Z)(["\n  margin-bottom: 25px;\n"]))),m=f.ZP.h3(c||(c=(0,l.Z)(["\n  margin-bottom: 10px;\n"]))),Z=t(184),b=function(n){var e=n.movieData,t=e.title,r=e.overview,a=e.release_date,i=e.genres;return(0,Z.jsxs)(h,{children:[(0,Z.jsx)(v,{children:t}),(0,Z.jsxs)(x,{children:["Release date: ",a]}),(0,Z.jsx)(m,{children:"Overview:"}),(0,Z.jsxs)(g,{children:[" ",r]}),(0,Z.jsx)(m,{children:"Genres:"}),i&&i.length?i.map((function(n){return(0,Z.jsx)("p",{children:n.name},n.id)})):(0,Z.jsx)("p",{children:"We don't have any ganre for this movie"})]})},w=t(791),j=t(689),k=t(479),y=t(87),_=f.ZP.button(s||(s=(0,l.Z)(["\n  width: 100px;\n  height: 50px;\n  border-radius: 15px;\n  position: absolute;\n  top: 85px;\n  right: 15px;\n"]))),P=f.ZP.div(u||(u=(0,l.Z)(["\n  display: flex;\n  gap: 50px;\n  justify-content: center;\n  margin-left: 40px;\n"]))),U=(0,f.ZP)(y.OL)(p||(p=(0,l.Z)(["\n  display: flex;\n  border: 1px solid darkslategray;\n  padding: 5px;\n  border-radius: 5px;\n  color: orangered;\n  width: 80px;\n  justify-content: center;\n"]))),S=function(){var n,e,t,r,a=(0,w.useState)(null),i=(0,d.Z)(a,2),o=i[0],c=i[1],s=(0,j.s0)(),u=(0,j.TH)(),p=(0,j.UO)().id;(0,w.useEffect)((function(){(0,k.FP)(p).then((function(n){c(n)}))}),[p]);return o?(0,Z.jsxs)("div",{children:[(0,Z.jsx)("h1",{children:"MovieDetails"}),(0,Z.jsx)(_,{onClick:function(){s(u.state.from)},children:"Go back"}),(0,Z.jsx)("img",{src:"https://image.tmdb.org/t/p/w400"+o.poster_path,alt:"Poster",width:"300",height:"400"}),(0,Z.jsx)(b,{movieData:o}),(0,Z.jsxs)(P,{children:[(0,Z.jsx)(U,{to:"cast",state:{from:null!==(n=null===(e=u.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"},children:"cast"}),(0,Z.jsx)(U,{to:"reviews",state:{from:null!==(t=null===(r=u.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/"},children:"reviews"})]}),(0,Z.jsx)(j.j3,{})]}):(0,Z.jsx)("div",{children:(0,Z.jsx)("h1",{children:"Loading ..."})})}},479:function(n,e,t){t.d(e,{FP:function(){return p},LC:function(){return d},WE:function(){return s},Xn:function(){return l},mv:function(){return u}});var r=t(861),a=t(757),i=t.n(a),o=t(243);o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c="76cbb606f190fc237086ec33f1fd98a3",s=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(c),e);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"),t);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a,s=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:"",r=s.length>2?s[2]:void 0,n.next=4,o.Z.get("movie/".concat(e).concat(t,"?api_key=").concat(c,"&language=en-US"),r);case 4:return a=n.sent,n.abrupt("return",a.data);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=380.3a6ffb12.chunk.js.map