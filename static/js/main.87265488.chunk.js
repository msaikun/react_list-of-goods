(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,s){},14:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n=s(4),r=s.n(n),a=s(2),i=s(5),c=s(6),o=s(8),l=s(7),u=s(1),h=s.n(u),d=(s(13),s(14),s(0)),b=function(t){var e=t.initialGoods;return Object(d.jsxs)("div",{className:"GoodsList GoodsList__wrapper",children:[Object(d.jsx)("h2",{className:"GoodsList__heading",children:"Goods list:"}),Object(d.jsx)("ul",{className:"GoodsList__list",children:e.map((function(t){return Object(d.jsx)("li",{className:"GoodsList__element",children:t},t)}))})]})},p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(t){Object(o.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(i.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={initialGoods:[].concat(p),isRendered:!1,isReversed:!1,sortBy:"",selectedLength:1},t.showList=function(){return t.setState({isRendered:!0})},t.reverseList=function(){return t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortByAlphabet=function(){return t.setState({sortBy:"alphabet"})},t.sortByLength=function(){return t.setState({sortBy:"length"})},t.resetList=function(){return t.setState({sortBy:"",isReversed:!1,selectedLength:1})},t.changeLengthValue=function(e){return t.setState({selectedLength:Number(e.target.value)})},t}return Object(c.a)(s,[{key:"render",value:function(){var t=this.state,e=t.initialGoods,s=t.isRendered,n=t.isReversed,r=t.sortBy,i=t.selectedLength,c=Object(a.a)(e).filter((function(t){return t.replace(" ","").length>=i}));return r&&(c=Object(a.a)(c).sort((function(t,e){switch(r){case"alphabet":return t.localeCompare(e);case"length":return t.length-e.length;default:return 0}}))),n&&c.reverse(),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("div",{className:"App__buttons",children:[Object(d.jsx)("button",{type:"button",onClick:this.showList,disabled:s,className:"App__button",children:"Start"}),Object(d.jsx)("button",{type:"button",onClick:this.reverseList,className:"App__button",children:"Reverse"}),Object(d.jsx)("button",{type:"button",onClick:this.sortByAlphabet,className:"App__button",children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",onClick:this.sortByLength,className:"App__button",children:"Sort by length"}),Object(d.jsx)("button",{type:"button",onClick:this.resetList,className:"App__button",children:"Reset"}),Object(d.jsx)("input",{type:"number",value:i,min:"1",max:"10",onChange:this.changeLengthValue,className:"App__button"})]}),Object(d.jsx)("div",{className:"App__list",children:s&&Object(d.jsx)(b,{initialGoods:Object(a.a)(c)})})]})}}]),s}(h.a.Component),g=j;r.a.render(Object(d.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.87265488.chunk.js.map