(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{45:function(e,t,s){},47:function(e,t,s){},48:function(e,t,s){"use strict";s.r(t);var n=s(2),a=s.n(n),i=s(15),r=s.n(i),c=s(6),o=s.n(c),l=s(16),m=s(17),d=s(18),u=s(21),j=s(20),v=s(19),h=s.n(v),p=(s(45),s(0));var b=function(e){var t=e.year,s=e.title,n=e.summary,a=e.poster,i=e.genres;return Object(p.jsxs)("div",{className:"movie",children:[Object(p.jsx)("img",{src:a,alt:"{title}",title:"{title}"}),Object(p.jsxs)("div",{className:"movie__column",children:[Object(p.jsx)("h3",{className:"movie__title",children:s}),Object(p.jsx)("h5",{className:"movie__year",children:t}),Object(p.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(p.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(p.jsxs)("p",{className:"movie__summary",children:[n.slice(0,140),"..."]})]})]})},O=(s(47),function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(m.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(o.a.mark((function t(){var s,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:s=t.sent,n=s.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"renderMovie",value:function(e){return console.log(e),Object(p.jsx)(b,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}},{key:"render",value:function(){var e=this,t=this.state,s=t.isLoading,n=t.movies;return Object(p.jsx)("section",{className:"container",children:s?Object(p.jsx)("div",{className:"loader",children:Object(p.jsx)("span",{className:"locader__text",children:"Loading..."})}):Object(p.jsx)("div",{className:"movies",children:n.map((function(t){return e.renderMovie(t)}))})})}}]),s}(a.a.Component)),_=O;r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(_,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.49fbfee2.chunk.js.map