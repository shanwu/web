(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{25:function(t,e,n){t.exports=n.p+"static/media/icon_house.02c2a2ec.svg"},26:function(t,e,n){t.exports=n.p+"static/media/icon_gold.f4196d39.svg"},27:function(t,e,n){t.exports=n.p+"static/media/icon_sun_ball.376e505f.svg"},28:function(t,e,n){t.exports=n.p+"static/media/icon_sun_flare.963337bb.svg"},35:function(t,e,n){t.exports=n(46)},46:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(24),r=n.n(i),l=n(17),s=n(5),c=n(6),p=n(8),h=n(7),m=n(9),u=n(18),g=function(t){function e(t){return Object(s.a)(this,e),Object(p.a)(this,Object(h.a)(e).call(this,t))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("button",{style:{marginTop:this.props.marginTop,marginLeft:this.props.marginLeft,marginBottom:this.props.marginBottom,marginRight:this.props.marginRight,background:this.props.background,position:"relative",width:this.props.width,height:this.props.height,borderRadius:this.props.roundRadius,paddingTop:2,paddingBottom:2,paddingLeft:4,paddingRight:4},onClick:function(){t.props.onClickListener()}},o.a.createElement("img",{style:{position:"absolute",top:5,left:5,width:35,height:35,background:"transparent",margin:0},src:this.props.icon,alt:"my image"}),o.a.createElement("label",{style:{color:this.props.textColor,fontSize:"20px",position:"absolute",left:this.props.height,top:"10px",userSelect:"none",background:"transparent"}},this.props.text))}}]),e}(o.a.Component),d=n(25),b=n.n(d),f=n(26),x=n.n(f),v=n(27),C=n.n(v),R=n(28),y=n.n(R);function E(){var t=Object(l.a)(["\n  position: absolute;\n  top:0;\n  left:0;\n  display: inline-block;\n  animation: "," 25s linear;\n  font-size: 0rem;\n  padding:2rem 2rem;\n  "]);return E=function(){return t},t}function j(){var t=Object(l.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]);return j=function(){return t},t}var k=function(t){function e(t){return Object(s.a)(this,e),Object(p.a)(this,Object(h.a)(e).call(this,t))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"nextPath",value:function(t){this.props.history.push(t)}},{key:"render",value:function(){var t=this,e=Object(u.b)(j()),n=u.a.image(E(),e);return o.a.createElement("div",{style:{background:"white",padding:"10px",borderRadius:"10px"}},o.a.createElement("img",{style:{position:"absolute",top:32,left:32,width:96,height:96,background:"transparent",margin:0},src:C.a,alt:"sun"}),o.a.createElement(n,null,o.a.createElement("img",{width:"96px",height:"96px",position:"absolute",src:y.a,alt:"my image"})),o.a.createElement("text",{style:{position:"absolute",top:150}},"\u73b0\u5728\u6240\u62e5\u6709\u7684\u5c31\u662f\u6700\u597d\u7684\uff0c\u4f46\u900f\u8fc7\u52aa\u529b\u53ef\u4ee5\u8ba9\u660e\u5929\u66f4\u597d"),o.a.createElement("br",null),o.a.createElement(g,{icon:b.a,background:"white",text:"\u623f\u4ea7\u6295\u8d44",marginTop:"160px",marginBottom:"25px",height:"48px",width:"150px",roundRadius:"10px",textColor:"#3a3a3a",onClickListener:function(){t.nextPath("house")}}),o.a.createElement(g,{icon:x.a,marginLeft:"10px",marginTop:"20px",marginBottom:"20px",background:"white",text:"\u9ec4\u91d1\u4e70\u5356",height:"48px",width:"150px",roundRadius:"10px",textColor:"#3a3a3a",onClickListener:function(){t.nextPath("gold")}}))}}]),e}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=function(t){function e(t){return Object(s.a)(this,e),Object(p.a)(this,Object(h.a)(e).call(this,t))}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("h1",null,"Gold Price -- Under Construction")}}]),e}(o.a.Component),w=n(14),B=function(t){function e(t){var n;return Object(s.a)(this,e),(n=Object(p.a)(this,Object(h.a)(e).call(this,t))).state={rent:null,totalCost:null,priceRentalRatio:"\u8bf7\u8f93\u5165\u6570\u503c"},n.handleCostChange=n.handleCostChange.bind(Object(w.a)(n)),n.handleRentChange=n.handleRentChange.bind(Object(w.a)(n)),n}return Object(m.a)(e,t),Object(c.a)(e,[{key:"updatePriceRentalRatioStr",value:function(t,e){return isNaN(t)||t<=0?"\u8bf7\u8f93\u5165\u79df\u91d1\u91d1\u989d":isNaN(e)||e<=0?"\u8bf7\u8f93\u5165\u623f\u5c4b\u6210\u672c":(12*t/e*100).toFixed(1)+"%"}},{key:"handleCostChange",value:function(t){var e=this.updatePriceRentalRatioStr(this.state.rent,t.target.value);console.log("=====handleCostChange======"),this.setState({totalCost:t.target.value,priceRentalRatio:e})}},{key:"handleRentChange",value:function(t){var e=this.updatePriceRentalRatioStr(t.target.value,this.state.totalCost);console.log("=====handleRentChange======"),this.setState({rent:t.target.value,priceRentalRatio:e})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",{style:{color:"#66b2ff",fontSize:20,marginLeft:20,marginBottom:10}},"\u623f\u5c4b\u79df\u552e\u6bd4")," ",o.a.createElement("hr",{style:{borderColor:"#66b2ff"}}),o.a.createElement("h4",{style:{color:"#333",fontSize:"14px",marginLeft:20,marginRight:20,marginTop:"5px",marginBottom:0}},"\u79df\u552e\u6bd4\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u6307\u666e\u901a\u6d88\u8d39\u8005\u90fd\u628a\u5b83\u5f52\u7eb3\u4e3a\u623f\u5c4b\u79df\u91d1\u4e0e\u552e\u4ef7\u7684\u6bd4\u4f8b, \u79df\u552e\u6bd4 = \u79df\u91d1\u6536\u76ca/\u623f\u4ef7\u3002"),o.a.createElement("h4",{style:{color:"#333",fontSize:"14px",marginLeft:20,marginRight:20,marginTop:"5px",marginBottom:0}},"\u6bd4\u5982\u8bf4\u603b\u6210\u672c 200\u4e07\u7684\u623f\uff0c\u6bcf\u6708\u79df\u91d1\u4e3a 3000\u5143\uff0c\u6bcf\u5e74\u79df\u2fa6\u56de\u62a5\u6709 3000 * 12 = 36000\u5143\uff0c"),o.a.createElement("h4",{style:{color:"#333",fontSize:"14px",marginLeft:20,marginRight:20,marginTop:"5px",marginBottom:"15px"}},"\u5219\u79df\u552e\u6bd4\u4e3a 36,000 \xf7 2,000,000 = 1.8%"),o.a.createElement("form",{style:{color:"#333",fontSize:"14px",marginLeft:20,marginRight:20,marginTop:"5px",marginBottom:"5px"}},o.a.createElement("h1",{style:{color:"#333",fontSize:"14px",marginTop:"5px",marginBottom:"8px"}},"\u79df\u552e\u6bd4\u8ba1\u7b97\u5668"),o.a.createElement("input",{style:{width:"100px",textAlign:"center"},type:"number",value:this.state.rent,onChange:this.handleRentChange,placeholder:"\u6bcf\u6708\u623f\u79df"}),o.a.createElement("label",null," x 12 \xf7 "),o.a.createElement("input",{style:{width:"100px",textAlign:"center"},type:"number",value:this.state.totalCost,onChange:this.handleCostChange,placeholder:"\u623f\u5c4b\u603b\u6210\u672c"}),o.a.createElement("label",null," = "),o.a.createElement("label",{name:"priceRentalRatio"}," ",this.state.priceRentalRatio," ")))}}]),e}(o.a.Component),S=n(16),L=n(10),T=o.a.createElement(S.a,{basename:"/"},o.a.createElement(L.a,{exact:!0,path:"/",component:k}),o.a.createElement(L.a,{path:"/house",component:B}),o.a.createElement(L.a,{path:"/gold",component:O}));r.a.render(T,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.3cce330a.chunk.js.map