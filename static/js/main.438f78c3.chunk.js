(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{21:function(t,e,n){t.exports=n.p+"static/media/icon_house.02c2a2ec.svg"},24:function(t,e,n){t.exports=n(34)},34:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(20),i=n.n(r),l=n(5),c=n(6),s=n(8),h=n(7),p=n(9),u=function(t){function e(t){return Object(l.a)(this,e),Object(s.a)(this,Object(h.a)(e).call(this,t))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("button",{style:{marginTop:this.props.marginTop,marginLeft:this.props.marginLeft,marginBottom:this.props.marginBottom,marginRight:this.props.marginRight,background:this.props.background,position:"relative",width:this.props.width,height:this.props.height,borderRadius:this.props.roundRadius,paddingTop:2,paddingBottom:2,paddingLeft:4,paddingRight:4},onClick:function(){t.props.onClickListener()}},o.a.createElement("img",{style:{position:"absolute",top:5,left:5,width:35,height:35,background:"transparent",margin:0},src:this.props.icon,alt:"my image"}),o.a.createElement("label",{style:{color:this.props.textColor,fontSize:"20px",position:"absolute",left:this.props.height,top:"10px",userSelect:"none",background:"transparent"}},this.props.text))}}]),e}(o.a.Component),m=n(21),g=n.n(m),d=function(t){function e(t){return Object(l.a)(this,e),Object(s.a)(this,Object(h.a)(e).call(this,t))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"nextPath",value:function(t){this.props.history.push(t)}},{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement(u,{icon:g.a,marginTop:"20px",background:"#CCFFFF",text:"\u623f\u4ea7\u6295\u8d44",height:"48px",width:"150px",roundRadius:"10px",textColor:"#3a3a3a",onClickListener:function(){t.nextPath("house")}}))}}]),e}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=function(t){function e(t){return Object(l.a)(this,e),Object(s.a)(this,Object(h.a)(e).call(this,t))}return Object(p.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("h1",null,"Gold Price -- Under Construction")}}]),e}(o.a.Component),f=n(13),x=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(s.a)(this,Object(h.a)(e).call(this,t))).state={rent:null,totalCost:null,priceRentalRatio:"\u8bf7\u8f93\u5165\u6570\u503c"},n.handleCostChange=n.handleCostChange.bind(Object(f.a)(n)),n.handleRentChange=n.handleRentChange.bind(Object(f.a)(n)),n}return Object(p.a)(e,t),Object(c.a)(e,[{key:"updatePriceRentalRatioStr",value:function(t,e){return isNaN(t)||t<=0?"\u8bf7\u8f93\u5165\u79df\u91d1\u91d1\u989d":isNaN(e)||e<=0?"\u8bf7\u8f93\u5165\u623f\u5c4b\u6210\u672c":(12*t/e*100).toFixed(1)+"%"}},{key:"handleCostChange",value:function(t){var e=this.updatePriceRentalRatioStr(this.state.rent,t.target.value);console.log("=====handleCostChange======"),this.setState({totalCost:t.target.value,priceRentalRatio:e})}},{key:"handleRentChange",value:function(t){var e=this.updatePriceRentalRatioStr(t.target.value,this.state.totalCost);console.log("=====handleRentChange======"),this.setState({rent:t.target.value,priceRentalRatio:e})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",{style:{color:"#66b2ff",fontSize:20,marginLeft:20,marginBottom:10}},"\u623f\u5c4b\u79df\u552e\u6bd4")," ",o.a.createElement("hr",{style:{borderColor:"#66b2ff"}}),o.a.createElement("h4",{style:{color:"#333",fontSize:"14px",marginLeft:20,marginRight:20,marginTop:"5px",marginBottom:0}},"\u79df\u552e\u6bd4\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u6307\u666e\u901a\u6d88\u8d39\u8005\u90fd\u628a\u5b83\u5f52\u7eb3\u4e3a\u623f\u5c4b\u79df\u91d1\u4e0e\u552e\u4ef7\u7684\u6bd4\u4f8b, \u79df\u552e\u6bd4 = \u79df\u91d1\u6536\u76ca/\u623f\u4ef7\u3002"),o.a.createElement("h4",{style:{color:"#333",fontSize:"14px",marginLeft:20,marginRight:20,marginTop:"5px",marginBottom:0}},"\u6bd4\u5982\u8bf4\u603b\u6210\u672c 200\u4e07\u7684\u623f\uff0c\u6bcf\u6708\u79df\u91d1\u4e3a 3000\u5143\uff0c\u6bcf\u5e74\u79df\u2fa6\u56de\u62a5\u6709 3000 * 12 = 36000\u5143\uff0c"),o.a.createElement("h4",{style:{color:"#333",fontSize:"14px",marginLeft:20,marginRight:20,marginTop:"5px",marginBottom:"15px"}},"\u5219\u79df\u552e\u6bd4\u4e3a 36,000 \xf7 2,000,000 = 1.8%"),o.a.createElement("form",{style:{color:"#333",fontSize:"14px",marginLeft:20,marginRight:20,marginTop:"5px",marginBottom:"5px"}},o.a.createElement("h1",{style:{color:"#333",fontSize:"14px",marginTop:"5px",marginBottom:"8px"}},"\u79df\u552e\u6bd4\u8ba1\u7b97\u5668"),o.a.createElement("input",{style:{width:"100px",textAlign:"center"},type:"number",value:this.state.rent,onChange:this.handleRentChange,placeholder:"\u6bcf\u6708\u623f\u79df"}),o.a.createElement("label",null," x 12 \xf7 "),o.a.createElement("input",{style:{width:"100px",textAlign:"center"},type:"number",value:this.state.totalCost,onChange:this.handleCostChange,placeholder:"\u623f\u5c4b\u603b\u6210\u672c"}),o.a.createElement("label",null," = "),o.a.createElement("label",{name:"priceRentalRatio"}," ",this.state.priceRentalRatio," ")))}}]),e}(o.a.Component),C=n(15),R=n(10),v=o.a.createElement(C.a,{basename:"/"},o.a.createElement(R.a,{exact:!0,path:"/",component:d}),o.a.createElement(R.a,{path:"/house",component:x}),o.a.createElement(R.a,{path:"/gold",component:b}));i.a.render(v,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.438f78c3.chunk.js.map