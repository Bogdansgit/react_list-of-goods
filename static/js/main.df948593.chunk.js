(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s=n(4),o=n.n(s),i=n(2),r=n(5),c=n(6),a=n(8),u=n(7),l=n(1),b=n.n(l),h=(n(13),n(0)),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(t){Object(a.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={isVisibleButton:!0,goodsList:d},t.reverse=function(){t.setState((function(t){return{goodsList:Object(i.a)(t.goodsList).reverse()}}))},t.sort=function(){t.setState((function(t){return{goodsList:Object(i.a)(t.goodsList).sort()}}))},t.sortByLength=function(){t.setState((function(t){return{goodsList:Object(i.a)(t.goodsList).sort((function(t,e){return t.length-e.length}))}}))},t.reset=function(){t.setState({goodsList:[].concat(d)})},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isVisibleButton,s=e.goodsList;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Goods:"}),Object(h.jsx)("button",{type:"button",className:n?"visible":"hide",onClick:function(){t.setState({isVisibleButton:!1})},children:"start"}),Object(h.jsx)("button",{type:"button",onClick:this.reverse,children:"Reverse"}),Object(h.jsx)("button",{type:"button",onClick:this.sort,children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",onClick:this.sortByLength,children:"Sort by lengthy"}),Object(h.jsx)("button",{type:"button",onClick:this.reset,children:"Reset"}),Object(h.jsx)("ul",{children:!n&&s.map((function(t){return Object(h.jsx)("li",{children:t},t)}))})]})}}]),n}(b.a.Component),g=j;o.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.df948593.chunk.js.map