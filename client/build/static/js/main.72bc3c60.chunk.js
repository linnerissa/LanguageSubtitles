(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{45:function(t,e,n){},46:function(t,e,n){},53:function(t,e,n){"use strict";n.r(e);var a=n(10),r=n.n(a),s=n(18),c=n(0),i=n.n(c),o=n(4),u=n.n(o),l=(n(45),n(28)),p=n(30),f=n(31),h=n(36),d=n(35),j=(n(46),n(73)),b=n(74),x=n(27),m=n.n(x),w=n(11);function g(){return(g=Object(s.a)(r.a.mark((function t(e){var n,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m()("/translate?text="+e,{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:if(a=t.sent,200===n.status){t.next=8;break}throw Error(a.message);case 8:return t.abrupt("return",a);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){var e=t.word,n=t.pronunciation,a=i.a.useState(!1),r=Object(l.a)(a,2),s=r[0],c=r[1],o=i.a.useState(""),u=Object(l.a)(o,2),p=u[0],f=u[1];return n===e||""===n?e:Object(w.jsx)(j.a,{title:n,children:Object(w.jsx)(b.a,{size:"small",selected:s,translation:p,value:e,onChange:function(){""===p&&function(t){return g.apply(this,arguments)}(e).then((function(t){t&&t.translatedText&&t.translatedText.basic&&t.translatedText.basic.explains&&t.translatedText.basic.explains.length>0&&f(t.translatedText.basic.explains[0].replace(/\W/g,""))})),c(!s)},children:s?p:e})})}var O=function(t){Object(h.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(p.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={data:null,words:[]},t.callBackendAPI=Object(s.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m()("/news",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=t.sent,t.next=5,e.json();case 5:if(n=t.sent,200===e.status){t.next=8;break}throw Error(n.message);case 8:return t.abrupt("return",n);case 9:case"end":return t.stop()}}),t)}))),t}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.callBackendAPI().then((function(e){t.setState({data:e.original,words:e.detailedSegments})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){return Object(w.jsx)("div",{className:"article",children:this.state.words.map((function(t){return Object(w.jsx)(v,{className:"wordbutton",word:t[0],pronunciation:t[1]},t[2])}))})}}]),n}(c.Component),y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),a(t),r(t),s(t),c(t)}))};function k(){return(k=Object(s.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/news",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return e=t.sent,t.next=5,e.json();case 5:if(n=t.sent,200===e.status){t.next=8;break}throw Error(n.message);case 8:return t.abrupt("return",n);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(function(){return k.apply(this,arguments)})().then((function(t){return document.getElementsByTagName("html")[0].innerHTML=t.original})).then((function(t){u.a.render(Object(w.jsx)(i.a.StrictMode,{children:Object(w.jsx)(O,{})}),document.getElementsByClassName("main-left left")[0])})),y()}},[[53,1,2]]]);
//# sourceMappingURL=main.72bc3c60.chunk.js.map