(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header1.70e6670e.jpg"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/header2.33eca35f.jpg"},function(e,t,a){e.exports=a.p+"static/media/header3.d9d36b65.jpg"},,function(e,t,a){e.exports=a(41)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),m=(a(29),a(9)),o=a(10),i=a(12),u=a(11),s=a(13),p=(a(30),a(5)),E=(a(31),a(1)),d=a(14),h=a.n(d),f=a(21),g=a.n(f),v=a(22),y=a.n(v),b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.e,null,r.a.createElement(E.c,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:h.a,alt:"city"})}}),r.a.createElement(E.c,{path:"/products",render:function(){return r.a.createElement("img",{src:g.a,alt:"city"})}}),r.a.createElement(E.c,{path:"/contact",render:function(){return r.a.createElement("img",{src:y.a,alt:"city"})}}),r.a.createElement(E.c,{path:"/admin_panel",render:function(){return r.a.createElement("img",{src:h.a,alt:"city"})}}),r.a.createElement(E.c,{render:function(){return r.a.createElement("img",{src:h.a,alt:"city"})}})))},x=(a(37),[{name:"start",path:"/",exact:!0},{name:"products",path:"/products"},{name:"contact",path:"/contact"},{name:"admin",path:"/admin_panel"}]),j=function(){var e=x.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(p.c,{to:e.path,exact:!!e.exact&&e.exact},e.name))});return r.a.createElement("nav",{className:"main"},r.a.createElement("ul",null,e))},k=function(e){var t=e.title,a=e.author,n=e.text;return r.a.createElement("article",{style:{marginBottom:40}},r.a.createElement("h3",{style:{marinBottm:3,textTransform:"uppercase"}},t),r.a.createElement("span",{style:{display:"block",marginBottom:10,fontSize:12}},a),r.a.createElement("p",{style:{fontSize:15}},n))},w=[{id:1,title:"What is the best car of year 2021",author:"Steven King",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis omnis tempore, at nemo vel voluptatem adipisci, id ullam maxime minus, sequi voluptatum commodi non inventore molestiae harum error exercitationem?"},{id:2,title:"Psychology of beauty",author:"Marcel Palicki",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis omnis tempore, at nemo vel voluptatem adipisci, id ullam maxime minus, sequi voluptatum commodi non inventore molestiae harum error exercitationem?"},{id:3,title:"When will we get back to the moon",author:"Elon Musk",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quis omnis tempore, at nemo vel voluptatem adipisci, id ullam maxime minus, sequi voluptatum commodi non inventore molestiae harum error exercitationem?"}],O=function(){var e=w.map(function(e){return r.a.createElement(k,Object.assign({key:e.id},e))});return r.a.createElement("div",{className:"home"},e)},S=(a(38),["car","bike","motorcycle"]),F=function(){var e=S.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(p.b,{to:"/product/".concat(e)},e.charAt().toUpperCase()+e.slice(1)))});return r.a.createElement("div",{className:"products"},r.a.createElement("h3",null,"Products List"),r.a.createElement("ul",null,e))},P=(a(39),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",isEmpty:!0},a.handleSubmit=function(e){e.preventDefault(),a.setState({value:"",isEmpty:!0})},a.handleChange=function(e){e.target.value.length>0?a.setState({value:e.target.value,isEmpty:!1}):a.setState({value:e.target.value,isEmpty:!0})},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Write to us"),r.a.createElement("textarea",{placeholder:"Fill up form",value:this.state.value,onChange:this.handleChange}),r.a.createElement("button",null,"Send")),r.a.createElement(E.a,{when:!this.state.isEmpty,message:"Form is not filled up. Do U really want to escape this site?"}))}}]),t}(r.a.Component)),C=function(){return r.a.createElement(E.c,{render:function(){return r.a.createElement("h3",null,"Admin Panel - Hello!")}})},N=function(){return r.a.createElement("div",null,"ErrorPage")},q=function(){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"Login:",r.a.createElement("input",{type:"text"})),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:""},"Password:",r.a.createElement("input",{type:"text"})),r.a.createElement("br",null),r.a.createElement("button",null,"Log in"))},J=function(e){return r.a.createElement("article",{className:"products"},r.a.createElement("h1",null,e.id.charAt().toUpperCase()+e.id.slice(1)))},L=function(e){return console.log(e.match),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"ProductsPage"),r.a.createElement(J,{id:e.match.params.id}),r.a.createElement(p.b,{to:"/products"},"Back to products list"))},B=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.e,null,r.a.createElement(E.c,{path:"/",exact:!0,component:O}),r.a.createElement(E.c,{path:"/products",exact:!0,component:F}),r.a.createElement(E.c,{path:"/product/:id",exact:!0,component:L}),r.a.createElement(E.c,{path:"/contact",exact:!0,component:P}),r.a.createElement(E.c,{path:"/admin_panel",exact:!0,component:C}),r.a.createElement(E.c,{path:"/login",exact:!0,component:q}),r.a.createElement(E.c,{component:N})))},A=(a(40),function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Footer"),r.a.createElement(E.c,{path:"/",exact:!0,render:function(e){return console.log(e),r.a.createElement("p",null,"Jestes na ",r.a.createElement("span",null,"stronie glownej"))}}),r.a.createElement(E.c,{path:"/:page",exact:!0,render:function(e){return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Jestes na ",r.a.createElement("span",null,e.match.params.page)),r.a.createElement("p",null,"Jestes na ",r.a.createElement("span",null,e.match.url)),r.a.createElement("p",null,"Jestes na ",r.a.createElement("span",null,e.match.path)))}}))}),R=function(e){function t(){return Object(m.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,{basename:"/router-spa-app-second"},r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(b,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(j,null)),r.a.createElement("section",{className:"page"},r.a.createElement(B,null))),r.a.createElement("footer",null,r.a.createElement(A,null))))}}]),t}(n.Component);c.a.render(r.a.createElement(R,null),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.264be2d9.chunk.js.map