(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(3),o=a(4),r=a(8),i=a(5),l=a(1),c=a(9),s=a(0),h=a.n(s),m=a(6),g=a.n(m);a(15),a(7),a(16);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={rent:null,totalCost:null,priceRentalRatio:"\u8bf7\u8f93\u5165\u6570\u503c"},a.handleCostChange=a.handleCostChange.bind(Object(l.a)(a)),a.handleRentChange=a.handleRentChange.bind(Object(l.a)(a)),a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"updatePriceRentalRatioStr",value:function(e,t){return isNaN(e)||e<=0?"\u8bf7\u8f93\u5165\u79df\u91d1\u91d1\u989d":isNaN(t)||t<=0?"\u8bf7\u8f93\u5165\u623f\u5c4b\u6210\u672c":(12*e/t*100).toFixed(1)+"%"}},{key:"handleCostChange",value:function(e){var t=this.updatePriceRentalRatioStr(this.state.rent,e.target.value);console.log("=====handleCostChange======"),this.setState({totalCost:e.target.value,priceRentalRatio:t})}},{key:"handleRentChange",value:function(e){var t=this.updatePriceRentalRatioStr(e.target.value,this.state.totalCost);console.log("=====handleRentChange======"),this.setState({rent:e.target.value,priceRentalRatio:t})}},{key:"render",value:function(){return h.a.createElement("div",null,h.a.createElement("h1",{style:{color:"#66b2ff",fontSize:40,marginLeft:20,marginBottom:10}},"\u623f\u5c4b\u79df\u552e\u6bd4")," ",h.a.createElement("hr",{style:{borderColor:"#66b2ff"}}),h.a.createElement("h4",{style:{color:"#333",fontSize:"14px",marginLeft:20,marginRight:20,marginTop:"5px",marginBottom:0}},"\u79df\u552e\u6bd4\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u6307\u666e\u901a\u6d88\u8d39\u8005\u90fd\u628a\u5b83\u5f52\u7eb3\u4e3a\u623f\u5c4b\u79df\u91d1\u4e0e\u552e\u4ef7\u7684\u6bd4\u4f8b, \u79df\u552e\u6bd4 = \u79df\u91d1\u6536\u76ca/\u623f\u4ef7\u3002"),h.a.createElement("h4",{style:{color:"#333",fontSize:"14px",marginLeft:20,marginRight:20,marginTop:"5px",marginBottom:0}},"\u6bd4\u5982\u8bf4\u603b\u6210\u672c 200\u4e07\u7684\u623f\uff0c\u6bcf\u6708\u79df\u91d1\u4e3a 3000\u5143\uff0c\u6bcf\u5e74\u79df\u2fa6\u56de\u62a5\u6709 3000 * 12 = 36000\u5143\uff0c"),h.a.createElement("h4",{style:{color:"#333",fontSize:"14px",marginLeft:20,marginRight:20,marginTop:"5px",marginBottom:"15px"}},"\u5219\u79df\u552e\u6bd4\u4e3a 36,000 / 2,000,000 = 1.8%"),h.a.createElement("form",{style:{color:"#333",fontSize:"14px",marginLeft:20,marginRight:20,marginTop:"5px",marginBottom:"5px"}},h.a.createElement("h1",{style:{color:"#333",fontSize:"14px",marginTop:"5px",marginBottom:"8px"}},"\u79df\u552e\u6bd4\u8ba1\u7b97\u5668"),h.a.createElement("input",{style:{width:"100px",textAlign:"center"},type:"number",value:this.state.rent,onChange:this.handleRentChange,placeholder:"\u6bcf\u6708\u623f\u79df"}),h.a.createElement("label",null," x 12 / "),h.a.createElement("input",{style:{width:"100px",textAlign:"center"},type:"number",value:this.state.totalCost,onChange:this.handleCostChange,placeholder:"\u623f\u5c4b\u603b\u6210\u672c"}),h.a.createElement("label",null," = "),h.a.createElement("label",{name:"priceRentalRatio"}," ",this.state.priceRentalRatio," ")))}}]),t}(h.a.Component);g.a.render(h.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.a7ac90b1.chunk.js.map