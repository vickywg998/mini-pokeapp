(this["webpackJsonppokedex-app"]=this["webpackJsonppokedex-app"]||[]).push([[0],{124:function(e,t,c){},185:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(40),r=c.n(s),i=(c(123),c(109)),o=c(106),j=c(10),l=(c(124),c(83)),h=c.n(l),d=c(103),b=c(26),p=c(62),O=c.n(p),x=c(203),m=c(108),u=c(2);var f=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1];Object(n.useEffect)((function(){var e;e=5,O.a.get("https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0").then((function(t){for(var c=JSON.parse(JSON.stringify(t.data)),n=s(151,e),r=[],i=0;i<e;i++){var o=n[i];r.push({name:c.results[o].name,id:o})}a(r)}))}),[]);var s=function(e,t){for(var c=[];c.length<t;){var n=Math.floor(Math.random()*Math.floor(e));c.includes(n)||c.push(n)}return c};return Object(u.jsx)("div",{children:Object(u.jsx)(x.a.Group,{itemsPerRow:2,children:c.map((function(e){return Object(u.jsx)(x.a,{children:Object(u.jsxs)(x.a.Content,{className:"random-pokemon-card",children:[Object(u.jsx)(m.a,{floated:"left",size:"tiny",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+e.id+".png",className:"random-pokemon-img"}),Object(u.jsx)(x.a.Header,{className:"random-header",children:e.name}),Object(u.jsx)(x.a.Meta,{children:e.id})]})},e.id)}))})})},k=c(186),g=c(206),v=c(201),y=c.p+"static/media/pokeball.62d6b79b.png";var w=function(e){var t=Object(n.useState)(""),c=Object(b.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)(""),i=Object(b.a)(r,2),o=i[0],j=i[1],l=Object(n.useState)({}),p=Object(b.a)(l,2),O=p[0],w=p[1],N=Object(n.useState)(!1),C=Object(b.a)(N,2),S=C[0],R=C[1],P=Object(n.useState)(!1),H=Object(b.a)(P,2),D=H[0],A=H[1],I=e.history;return Object(n.useEffect)((function(){function e(){return t.apply(this,arguments)}function t(){return(t=Object(d.a)(h.a.mark((function e(){var t,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://pokeapi.co/api/v2/pokemon/".concat(a));case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,w(c),A(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),A(!0);case 14:R(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}"mini-pokeapp"!==a&&e(),e()}),[a]),Object(u.jsxs)(g.a,{centered:!0,columns:4,children:[Object(u.jsx)(g.a.Row,{children:Object(u.jsx)("h1",{className:"pokedex-header",children:"Pokedex App"})}),Object(u.jsx)("img",{src:y,className:"pokedex-pokeball-sizing"}),Object(u.jsx)(g.a.Row,{children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(o.trim().toLowerCase())},children:[Object(u.jsx)(v.a,{type:"text",placeholder:"search...",value:o,onChange:function(e){return j(e.target.value)}}),Object(u.jsx)(k.a,{type:"submit",children:"Search"})]})}),Object(u.jsxs)(g.a.Row,{children:[D&&Object(u.jsx)("div",{children:"Oops! Can't find this Pokemon, try searching another one?"}),S?Object(u.jsx)("h1",{children:"Loading..."}):function(e){var t=e.name,c=e.id,n=e.height,a=e.weight,s=e.types,r=e.abilities,i=e.stats;return Object(u.jsx)(u.Fragment,{children:void 0!==t&&Object(u.jsxs)(x.a,{className:"pokedex-card",children:[Object(u.jsxs)(x.a.Content,{className:"pokedex-card-content",children:[Object(u.jsx)(x.a.Header,{children:t}),Object(u.jsx)(m.a,{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(c,".png"),className:"pokedex-card-image",wrapped:!0}),Object(u.jsxs)(x.a.Meta,{children:["Height: ",n,"' Weight: ",a," lbs"]}),Object(u.jsxs)(x.a.Description,{children:[Object(u.jsx)("h5",{children:"Types:"}),s.map((function(e){return Object(u.jsxs)("p",{children:[" ","".concat(e.type.name)]},e.type.name)})),Object(u.jsxs)(x.a.Description,{children:[Object(u.jsx)("h5",{children:"Abilities: "}),r.map((function(e){return Object(u.jsxs)("p",{children:[" ","".concat(e.ability.name)]},e.ability.name)}))]}),Object(u.jsxs)(x.a.Description,{children:[Object(u.jsx)("h5",{children:" Base Stats:"}),i.map((function(e){return Object(u.jsxs)("p",{children:[" ","".concat(e.stat.name)]},e.stat.name)}))]})]})]}),Object(u.jsx)(k.a,{onClick:function(){return I.push("/mini-pokeapp/".concat(c))},children:"View more details"})]})})}(O)]}),Object(u.jsx)(g.a.Row,{children:Object(u.jsx)("h2",{children:" Random Pokemons of the Day!"})}),Object(u.jsx)(g.a.Row,{children:Object(u.jsx)(f,{})})]})},N=c(43),C=c(202),S=c(58),R=c(204),P=c(105),H=c.n(P);c(183);var D=function(e){var t=e.match,c=e.history,a=t.params.pokeID,s=Object(n.useState)(void 0),r=Object(b.a)(s,2),i=r[0],o=r[1];return Object(n.useEffect)((function(){O.a.get("https://pokeapi.co/api/v2/pokemon/".concat(a,"/")).then((function(e){var t=e.data;o(t)})).catch((function(e){o(!1)}))}),[a]),Object(u.jsxs)(u.Fragment,{children:[void 0===i&&Object(u.jsx)("p",{children:"loading"}),void 0!==i&&i&&function(e){var t=e.name,n=e.id,a=e.height,s=e.weight,r=e.abilities,i=e.sprites,o=e.stats,j=e.types,l=i.front_default,h=i.back_default,d=i.back_shiny,b=i.front_shiny;return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(g.a,{children:[Object(u.jsx)(g.a.Row,{centered:!0,children:Object(u.jsxs)("div",{className:"pokemon-header",children:[Object(u.jsx)("img",{src:l})," ",Object(u.jsx)("h2",{children:"".concat(t," #").concat(n)})]})}),Object(u.jsx)("div",{className:"pokemon-arrow",children:Object(u.jsx)(N.a,{name:"arrow left",size:"big",onClick:function(){return c.push("/mini-pokeapp/")}})}),Object(u.jsxs)(g.a.Row,{centered:!0,children:[Object(u.jsx)(g.a.Column,{width:7,children:Object(u.jsxs)(H.a,{autoPlay:!0,autoPlayInterval:"3000",children:[Object(u.jsx)("img",{style:{height:"300px"},src:l,className:"pokemon-img-container"}),Object(u.jsx)("img",{style:{height:"300px"},src:b,className:"pokemon-img-container"}),Object(u.jsx)("img",{style:{height:"300px"},src:h,className:"pokemon-img-container"}),Object(u.jsx)("img",{style:{height:"300px"},src:d,className:"pokemon-img-container"})]})}),Object(u.jsxs)(g.a.Column,{width:6,children:[Object(u.jsxs)(C.a,{color:"yellow",inverted:!0,children:[Object(u.jsx)(C.a.Header,{children:Object(u.jsxs)(C.a.Row,{children:[Object(u.jsx)(C.a.HeaderCell,{children:"Height"}),Object(u.jsx)(C.a.HeaderCell,{children:"Weight"})]})}),Object(u.jsx)(C.a.Body,{children:Object(u.jsxs)(C.a.Row,{children:[Object(u.jsxs)(C.a.Cell,{children:[a,"'"]}),Object(u.jsxs)(C.a.Cell,{children:[s," lbs"]})]})}),Object(u.jsx)(C.a.Header,{children:Object(u.jsx)(C.a.Row,{children:Object(u.jsx)(C.a.HeaderCell,{children:" Abilites:"})})}),Object(u.jsx)(C.a.Body,{children:Object(u.jsx)(C.a.Row,{children:Object(u.jsx)(C.a.Cell,{verticalAlign:"top",children:r.map((function(e){return Object(u.jsx)("div",{children:"".concat(e.ability.name)},e.ability.name)}))})})})]},"yellow"),Object(u.jsx)("h3",{className:"pokemon-types-header",children:"Types"}),j.map((function(e){return Object(u.jsx)(S.a,{color:"brown",size:"big",children:e.type.name},e.type.name)}))]})]}),Object(u.jsxs)(g.a.Row,{centered:!0,className:"pokemon-stats-container",children:[Object(u.jsx)("h3",{children:"Stats"}),Object(u.jsx)(R.a.Group,{inverted:!0,widths:14,children:o.map((function(e){return Object(u.jsxs)(R.a,{children:[Object(u.jsx)(R.a.Value,{children:e.base_stat}),Object(u.jsx)(R.a.Label,{children:e.stat.name})]},e.stat.name)}))})]})]})})}(i),!1===i&&Object(u.jsx)("p",{children:"Sorry, there's no such Pokemon!"})]})};var A=function(){return Object(u.jsx)(o.a,{children:Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{exact:!0,path:"/mini-pokeapp",component:w}),Object(u.jsx)(j.a,{exact:!0,path:"/mini-pokeapp/:pokeID",render:function(e){return Object(u.jsx)(D,Object(i.a)({},e))}})]})})};r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(A,{})}),document.getElementById("root"))}},[[185,1,2]]]);
//# sourceMappingURL=main.2602fb26.chunk.js.map