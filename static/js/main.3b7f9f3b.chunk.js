(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/empty-poster.b9aba793.png"},,,function(e,t,a){e.exports=a.p+"static/media/emojii-facepalm.60420728.png"},,,,function(e,t,a){e.exports=a(39)},,,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),s=(a(26),a(1)),o=a(40),l=a(17),m=a(2),u=a.n(m),d=a(3),p=function(){var e=Object(d.a)(u.a.mark(function e(t){var a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:"GET"});case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",console.error("Ajax request error:",e.t0));case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(t){return e.apply(this,arguments)}}(),_=function(e,t,a,n){var r="https://api.themoviedb.org/3/movie/now_playing?region=UA&language=ru-RU&api_key=".concat(e);Promise.all([p(r),p("".concat(r,"&page=2"))]).then(function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1],r=a.results,c=n.results,i=r.concat(c);return i.length>39&&(i.length=39),i.forEach(function(e){null===e.poster_path?e.poster=null:e.poster="https://image.tmdb.org/t/p/original"+e.poster_path}),i}).then(function(e){t(e)}).then(function(){a(!0)}).catch(function(){a(!1),n(!0)})},b=function(){var e=Object(d.a)(u.a.mark(function e(t,a,n,r){var c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.map(function(){var e=Object(d.a)(u.a.mark(function e(a){var n,r,c,i,s,o;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.id,r="https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(t,"&append_to_response=external_ids,videos&language=ru-RU"),e.next=4,p(r);case 4:return c=e.sent,i=c.videos.results,s="",i.length>0&&"YouTube"===(o=i[i.length-1]).site&&(s="http://www.youtube.com/embed/".concat(o.key,"?autoplay=1&modestbranding=1&rel=0&showinfo=0")),a.imdb_id=c.imdb_id,a.trailer_url=s,a.genres=c.genres,e.abrupt("return",a);case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 2:return c=e.sent,e.next=5,Promise.all(c).then(function(e){n(e)}).then(function(){r(!0)});case 5:case"end":return e.stop()}},e)}));return function(t,a,n,r){return e.apply(this,arguments)}}(),f=function(){var e=Object(d.a)(u.a.mark(function e(t,a,n,r){var c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.map(function(){var e=Object(d.a)(u.a.mark(function e(a){var n,r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.imdb_id,r="https://www.omdbapi.com/?i=".concat(n,"&apikey=").concat(t),e.next=4,p(r);case 4:return c=e.sent,isNaN(c.imdbRating)&&(c.imdbRating="-"),a.imdbRating=c.imdbRating,a.director=c.Director,a.actors=c.Actors,a.metascore=c.Metascore,a.year=c.Year,e.abrupt("return",a);case 12:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());case 2:return c=e.sent,e.next=5,Promise.all(c).then(function(e){n(e)}).then(function(){r(!0)});case 5:case"end":return e.stop()}},e)}));return function(t,a,n,r){return e.apply(this,arguments)}}(),v=(a(28),a(29),a(30),a(13)),E=a.n(v);var h=function(e){var t=e.movie,a=e.setShowPopup,n=e.setCurrTrailerUrl,c=r.a.createElement(r.a.Fragment,null,t.genres.map(function(e){return r.a.createElement("div",{key:e.id,className:"item__genre-element"},r.a.createElement("div",{className:"item__genre-icon item__genre-icon--".concat(e.id)}),r.a.createElement("div",{className:"item__genre-name"},e.name))})),i=null!==t.poster?t.poster:E.a;return r.a.createElement("div",{className:"swiper-slide item"},r.a.createElement("div",{className:"item__description item__title"},r.a.createElement("span",null,"".concat(t.title," (").concat(t.year,")"))),r.a.createElement("div",{className:"item__img"},r.a.createElement("img",{src:i,alt:"Poster"}),r.a.createElement("div",{className:"item__shadow item__shadow--left"}),r.a.createElement("div",{className:"item__shadow item__shadow--right"}),r.a.createElement("div",{className:"item__description item__marks"},r.a.createElement("div",{className:" item__sidebar item__sidebar--imdb"},r.a.createElement("span",{className:"item__sidebar-title"},"IMDb"),r.a.createElement("span",{className:"item__sidebar-number"},t.imdbRating)),!isNaN(t.metascore)&&r.a.createElement("div",{className:"item__sidebar item__sidebar--metascore"},r.a.createElement("span",{className:"item__sidebar-title item__sidebar-title--sm"},"\u041a\u0440\u0438\u0442\u0438\u043a\u0438"),r.a.createElement("span",{className:"item__sidebar-number"},t.metascore+"%")),t.trailer_url.length>0&&r.a.createElement("div",{className:"item__sidebar item__sidebar--trailer"},r.a.createElement("span",{className:"item__sidebar-title item__sidebar-title--sm"},"\u0422\u0440\u0435\u0439\u043b\u0435\u0440"),r.a.createElement("span",{className:"item__sidebar-icon item__sidebar-icon--youtube"}),r.a.createElement("a",{className:"item__sidebar-link",href:t.trailer_url,onClick:function(e){e.preventDefault();var t=e.target.getAttribute("href");n(t),a(!0)}},"Youtube")),r.a.createElement("div",{className:"item__genre"},r.a.createElement("div",{className:"item__sidebar item__genre-box item__genre-box--sm"},c),r.a.createElement("div",{className:"item__sidebar item__genre-box item__genre-box--lg"},c)))),r.a.createElement("div",{className:"item__description item__bottom"},r.a.createElement("div",{className:"item__cast"},r.a.createElement("span",{className:"item__director"},"\u0420\u0435\u0436\u0438\u0441\u0441\u0435\u0440: ",r.a.createElement("span",null,t.director)),r.a.createElement("span",{className:"item__actors"},"\u0412 \u0440\u043e\u043b\u044f\u0445: ",r.a.createElement("span",null,t.actors))),r.a.createElement("div",{className:"item__overview"},r.a.createElement("span",null,t.overview))))};a(31);var g=function(e){var t=e.currTrailerUrl,a=e.setShowPopup,c=Object(n.useRef)();return r.a.createElement("div",{className:"video-popup",onClick:function(e){c.current.contains(e.target)||a(!1)}},r.a.createElement("span",{className:"video-popup__content",ref:c},r.a.createElement("div",{className:"video-popup__media"},r.a.createElement("iframe",{className:"video-popup__iframe",src:t,frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0}))))};var w=function(e){var t=e.movies,a=e.moviesAreSorted,c=Object(n.useState)(!1),i=Object(s.a)(c,2),l=i[0],m=i[1],u=Object(n.useState)(""),d=Object(s.a)(u,2),p=d[0],_=d[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"swiper-container"},r.a.createElement("div",{className:"swiper-scrollbar"}),r.a.createElement("div",{className:"swiper-wrapper"},a&&t.map(function(e){return r.a.createElement(h,{key:e.id,movie:e,setShowPopup:m,setCurrTrailerUrl:_})}))),r.a.createElement(o.a,{in:l&&p.length>0,timeout:500,classNames:"animation",mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(g,{currTrailerUrl:p,setShowPopup:m})))},N=a(4),O=a(6),j=a(5),k=a(9),y=a(10),x=(a(36),function(e){function t(){return Object(N.a)(this,t),Object(j.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"loader__spinner"},r.a.createElement("div",{className:"loader__spinner-square"})))}}]),t}(r.a.Component)),S=(a(37),a(16)),R=a.n(S);var P=function(){return r.a.createElement("div",{className:"error-fallback"},r.a.createElement("div",{className:"error-fallback__content"},r.a.createElement("span",{className:"error-fallback__content-text"},"\u0427\u0442\u043e-\u0442\u043e \u043d\u0435 \u0437\u0430\u0432\u0435\u043b\u043e\u0441\u044c ",r.a.createElement("img",{src:R.a,className:"error-fallback__content-icon",alt:"Error icon"})),r.a.createElement("span",{className:"error-fallback__content-text"},"\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443")))};a(38);var T=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!1),m=Object(s.a)(i,2),u=m[0],d=m[1],p=Object(n.useState)(!1),v=Object(s.a)(p,2),E=v[0],h=v[1],g=Object(n.useState)(!1),N=Object(s.a)(g,2),O=N[0],j=N[1],k=Object(n.useState)(!1),y=Object(s.a)(k,2),S=y[0],R=y[1],T=Object(n.useState)(!1),U=Object(s.a)(T,2),A=U[0],C=U[1],F=Object(n.useState)(!1),B=Object(s.a)(F,2),D=B[0],I=B[1],M=Object(n.useState)(!1),Y=Object(s.a)(M,2),q=Y[0],J=Y[1],V="3b07521ea25bf66106a9525b3054c8e9";return Object(n.useEffect)(function(){_(V,c,d,I)},[]),Object(n.useEffect)(function(){u&&a.length&&b(V,a,c,h)},[u]),Object(n.useEffect)(function(){E&&a.length&&f("55018c43",a,c,j)},[E]),Object(n.useEffect)(function(){O&&a.length&&function(){var e=[].concat(a).sort(function(e,t){return e.imdbRating>t.imdbRating?-1:1});c(e),R(!0)}()},[O]),Object(n.useEffect)(function(){S&&a.length&&new l.a(".swiper-container",{effect:"coverflow",centeredSlides:!0,slidesPerView:"auto",mousewheel:!0,keyboard:!0,slideToClickedSlide:!0,scrollbar:{el:".swiper-scrollbar",draggable:!0,hide:!0},coverflowEffect:{rotate:20,stretch:0,depth:100,modifier:1,slideShadows:!1},on:{init:function(){C(!0)}}})},[S]),Object(n.useEffect)(function(){A&&a.length&&(J(!0),I(!0))},[A]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"content ".concat(q&&D?"content--visible":"")},r.a.createElement("div",{className:"credentials"},r.a.createElement("p",null,"Made by Vladyslav Klymenko"),r.a.createElement("a",{href:"https://www.linkedin.com/in/vladklymenko/"},"LinkedIn"),"\xa0",r.a.createElement("a",{href:"mailto:drkleem@gmail.com"},"drkleem@gmail.com")),r.a.createElement(w,{movies:a,moviesAreSorted:S})),r.a.createElement(o.a,{in:!q&&!D,timeout:500,classNames:"animation",unmountOnExit:!0},r.a.createElement(x,null)),r.a.createElement(o.a,{in:!q&&D,timeout:500,classNames:"animation",mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(P,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[20,1,2]]]);
//# sourceMappingURL=main.3b7f9f3b.chunk.js.map