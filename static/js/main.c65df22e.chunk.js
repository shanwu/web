(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{185:function(e,t,a){"use strict";a.r(t);var n=a(65),l=a.n(n);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=a(5),c=a(6),i=a(8),o=a(7),u=a(12),s=a(9),m=a(0),h=a.n(m),p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={rent:null,totalCost:null,priceRentalRatio:"\u8bf7\u8f93\u5165\u6570\u503c"},a.handleCostChange=a.handleCostChange.bind(Object(u.a)(a)),a.handleRentChange=a.handleRentChange.bind(Object(u.a)(a)),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"updatePriceRentalRatioStr",value:function(e,t){return isNaN(e)||e<=0?"\u8bf7\u8f93\u5165\u79df\u91d1\u91d1\u989d":isNaN(t)||t<=0?"\u8bf7\u8f93\u5165\u623f\u5c4b\u6210\u672c":(12*e/t*100).toFixed(1)+"%"}},{key:"handleCostChange",value:function(e){var t=this.updatePriceRentalRatioStr(this.state.rent,e.target.value);console.log("=====handleCostChange======"),this.setState({totalCost:e.target.value,priceRentalRatio:t})}},{key:"handleRentChange",value:function(e){var t=this.updatePriceRentalRatioStr(e.target.value,this.state.totalCost);console.log("=====handleRentChange======"),this.setState({rent:e.target.value,priceRentalRatio:t})}},{key:"render",value:function(){return h.a.createElement("div",null,h.a.createElement("h1",{style:{color:"#66b2ff",fontSize:20,marginLeft:20,marginBottom:10}},"\u623f\u5c4b\u79df\u552e\u6bd4")," ",h.a.createElement("hr",{style:{borderColor:"#66b2ff"}}),h.a.createElement("h4",{style:{color:"#333",fontSize:"14px",marginLeft:20,marginRight:20,marginTop:"5px",marginBottom:0}},"\u79df\u552e\u6bd4\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u6307\u666e\u901a\u6d88\u8d39\u8005\u90fd\u628a\u5b83\u5f52\u7eb3\u4e3a\u623f\u5c4b\u79df\u91d1\u4e0e\u552e\u4ef7\u7684\u6bd4\u4f8b, \u79df\u552e\u6bd4 = \u79df\u91d1\u6536\u76ca/\u623f\u4ef7\u3002"),h.a.createElement("h4",{style:{color:"#333",fontSize:"14px",marginLeft:20,marginRight:20,marginTop:"5px",marginBottom:0}},"\u6bd4\u5982\u8bf4\u603b\u6210\u672c 200\u4e07\u7684\u623f\uff0c\u6bcf\u6708\u79df\u91d1\u4e3a 3000\u5143\uff0c\u6bcf\u5e74\u79df\u2fa6\u56de\u62a5\u6709 3000 * 12 = 36000\u5143\uff0c"),h.a.createElement("h4",{style:{color:"#333",fontSize:"14px",marginLeft:20,marginRight:20,marginTop:"5px",marginBottom:"15px"}},"\u5219\u79df\u552e\u6bd4\u4e3a 36,000 \xf7 2,000,000 = 1.8%"),h.a.createElement("form",{style:{color:"#333",fontSize:"14px",marginLeft:20,marginRight:20,marginTop:"5px",marginBottom:"5px"}},h.a.createElement("h1",{style:{color:"#333",fontSize:"14px",marginTop:"5px",marginBottom:"8px"}},"\u79df\u552e\u6bd4\u8ba1\u7b97\u5668"),h.a.createElement("input",{style:{width:"100px",textAlign:"center"},type:"number",value:this.state.rent,onChange:this.handleRentChange,placeholder:"\u6bcf\u6708\u623f\u79df"}),h.a.createElement("label",null," x 12 \xf7 "),h.a.createElement("input",{style:{width:"100px",textAlign:"center"},type:"number",value:this.state.totalCost,onChange:this.handleCostChange,placeholder:"\u623f\u5c4b\u603b\u6210\u672c"}),h.a.createElement("label",null," = "),h.a.createElement("label",{name:"priceRentalRatio"}," ",this.state.priceRentalRatio," ")))}}]),t}(h.a.Component),d=a(39),E=a(18),g=function(e){function t(e){return Object(r.a)(this,t),Object(i.a)(this,Object(o.a)(t).call(this,e))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return h.a.createElement("p",null,"testing")}}]),t}(h.a.Component),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={idValue:"",passwrdValue:"",rePasswrdValue:""},a.handleIdChange=a.handleIdChange.bind(Object(u.a)(a)),a.handlePasswrdChange=a.handlePasswrdChange.bind(Object(u.a)(a)),a.handleRePasswrdChange=a.handleRePasswrdChange.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"handleIdChange",value:function(e){this.setState({idValue:e.target.value})}},{key:"handleSubmit",value:function(e){!function(e,t,a){if(""===e||""===t||""===a)return!1;return t===a}(this.state.idValue,this.state.passwrdValue,this.state.rePasswrdValue)?alert("Please check your input!"):(alert("id: "+this.state.idValue+"\npasswrd: "+this.state.passwrdValue+"\nre-passwrd: "+this.state.rePasswrdValue),e.preventDefault())}},{key:"handlePasswrdChange",value:function(e){this.setState({passwrdValue:e.target.value})}},{key:"handleRePasswrdChange",value:function(e){this.setState({rePasswrdValue:e.target.value})}},{key:"render",value:function(){return h.a.createElement("form",{onSubmit:this.handleSubmit},h.a.createElement("label",null,"Id:",h.a.createElement("input",{type:"text",value:this.state.idValue,onChange:this.handleIdChange})),h.a.createElement("br",null),h.a.createElement("label",null,"Password:",h.a.createElement("input",{type:"password",value:this.state.passwrdValue,onChange:this.handlePasswrdChange})),h.a.createElement("br",null),h.a.createElement("label",null,"Re-Enter Password:",h.a.createElement("input",{type:"password",value:this.state.rePasswrdValue,onChange:this.handleRePasswrdChange})),h.a.createElement("br",null),h.a.createElement("input",{type:"submit",value:"\u53d1\u51fa"}))}}]),t}(h.a.Component);var x=function(e){function t(e){return Object(r.a)(this,t),Object(i.a)(this,Object(o.a)(t).call(this,e))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return h.a.createElement(b,null)}}]),t}(h.a.Component),f=a(23),y=a.n(f),$=a(40),v=a(66),C=a.n(v),w=a(67),k=a.n(w),O=a(41);function j(){var e=Object($.a)(["\n                              position: absolute;\n                              top:0;\n                              left:0;\n                              display: inline-block;\n                              animation: "," 25s linear;\n                              font-size: 0rem;\n                              padding:2rem 2rem;"]);return j=function(){return e},e}function R(){var e=Object($.a)(["\n                               from {\n                                   transform: rotate(0deg);\n                               } to {\n                                   transform: rotate(360deg);\n                               }"]);return R=function(){return e},e}var S=function(e){function t(e){return Object(r.a)(this,t),Object(i.a)(this,Object(o.a)(t).call(this,e))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=Object(O.b)(R()),t=O.a.image(j(),e);return h.a.createElement("div",{style:{background:"transparant",padding:"10px",borderRadius:"10px"}},h.a.createElement("div",{style:{width:"100%",height:220,background:"linear-gradient(to bottom right, white, white, white, #E5F7FF,#B2E7FF, #99DFFF)",position:"absolute",left:0,top:0}}),h.a.createElement("img",{style:{position:"absolute",top:32,left:32,width:96,height:96,background:"transparent",margin:0},src:C.a,alt:"sun"}),h.a.createElement(t,null,h.a.createElement("img",{width:"96px",height:"96px",position:"absolute",src:k.a,alt:"my image"})),h.a.createElement("p",{style:{color:"#3a3a3a",position:"absolute",marginLeft:"30%",zIndex:999,fontWeight:900,marginTop:"7rem"}},"\u73b0\u5728\u6240\u62e5\u6709\u7684\u5c31\u662f\u6700\u597d\u7684\uff0c\u800c\u52aa\u529b\u53ef\u4ee5\u8ba9\u660e\u5929\u66f4\u597d"),h.a.createElement("br",null))}}]),t}(h.a.Component),L=a(70),P=a.n(L),q=a(27),B=a.n(q),T=a(1),V=(a(183),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={md:""},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch(P.a).then((function(e){return e.text()})).then((function(t){e.setState({md:t})}))}},{key:"render",value:function(){return h.a.createElement("div",null,h.a.createElement(S,null),h.a.createElement("div",{style:{position:"absolute",top:"200px",left:"25%"}},h.a.createElement(y.a,{style:{},plugins:[B.a]},"# Latex cheetsheet(Based on KaTeX library)"),h.a.createElement(y.a,{style:{},plugins:[B.a]},"## Basic math symbols"),h.a.createElement("table",{style:{border:"1px #ccc solid",padding:"5px",borderCollapse:"collapse"}},h.a.createElement("tr",{style:{backgroundColor:"#ccc",border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null," Index "),h.a.createElement("th",null," Symbol "),h.a.createElement("th",null," Symbol Name "),h.a.createElement("th",null," Latex Syntax "),h.a.createElement("th",null," Example ")),h.a.createElement("tr",{style:{border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null,"1."),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\neq$")),h.a.createElement("th",null,"not equal sign"),h.a.createElement("th",null,"\\neq"),h.a.createElement("th",null,h.a.createElement(T.a,null,"$ a \\neq b $"))),h.a.createElement("tr",{style:{border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null,"2."),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\geq$")),h.a.createElement("th",null,"greater than or equal to"),h.a.createElement("th",null,"\\geq"),h.a.createElement("th",null)),h.a.createElement("tr",{style:{border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null,"3."),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\leq$")),h.a.createElement("th",null,"less than or equal to"),h.a.createElement("th",null,"\\leq"),h.a.createElement("th",null)),h.a.createElement("tr",{style:{border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null,"4."),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\plusmn$")),h.a.createElement("th",null,"plus - minus"),h.a.createElement("th",null,"\\plusmn"),h.a.createElement("th",null)),h.a.createElement("tr",{style:{border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null,"5."),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\mp$")),h.a.createElement("th",null,"minus - plus"),h.a.createElement("th",null,"\\mp"),h.a.createElement("th",null,h.a.createElement(T.a,null,"$3 \\mp 5 = -2 or 8$"))),h.a.createElement("tr",{style:{border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null,"6."),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\div$")),h.a.createElement("th",null,"division sign / obelus"),h.a.createElement("th",null,"\\div"),h.a.createElement("th",null,h.a.createElement(T.a,null,"$6 \\div 2 = 3$"))),h.a.createElement("tr",{style:{border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null,"7."),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\frac$")),h.a.createElement("th",null,"fraction / division"),h.a.createElement("th",null,"\\frac"),h.a.createElement("th",null)),h.a.createElement("tr",{style:{border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null,"8."),h.a.createElement("th",null,h.a.createElement(T.a,null,"$a^b$")),h.a.createElement("th",null,"power"),h.a.createElement("th",null,"a^b"),h.a.createElement("th",null,h.a.createElement(T.a,null,"$2^2 = 4$"))),h.a.createElement("tr",{style:{border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null,"9."),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\sqrt[3]2$")),h.a.createElement("th",null,"square root"),h.a.createElement("th",null,"\\sqrt['n-th root']","{expression}"),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\sqrt[3]8 = 2$")))),h.a.createElement(y.a,{style:{},plugins:[B.a]},"## Algebra symbols"),h.a.createElement("table",{style:{border:"1px #ccc solid",padding:"5px",borderCollapse:"collapse"}},h.a.createElement("tr",{style:{backgroundColor:"#ccc",border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null," Index "),h.a.createElement("th",null," Symbol "),h.a.createElement("th",null," Symbol Name "),h.a.createElement("th",null," Latex Syntax "),h.a.createElement("th",null," Example ")),h.a.createElement("tr",{style:{border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null,"1."),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\sum$")),h.a.createElement("th",null,"Sum"),h.a.createElement("th",null,"\\sum_","{i = 1}^{max}"),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\sum$"),h.a.createElement(T.a,null,"$^m$"),h.a.createElement(T.a,null,"$_i$"),h.a.createElement(T.a,null,"$_=$"),h.a.createElement(T.a,null,"$_1$"))),h.a.createElement("tr",{style:{border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null,"2."),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\equiv$")),h.a.createElement("th",null,"equivalence"),h.a.createElement("th",null,"\\equiv"),h.a.createElement("th",null)),h.a.createElement("tr",{style:{border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null,"3."),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\triangleq$")),h.a.createElement("th",null,"equal by definition"),h.a.createElement("th",null,"\\triangleq"),h.a.createElement("th",null)),h.a.createElement("tr",{style:{border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null,"4."),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\coloneqq$")),h.a.createElement("th",null,"equal by definition"),h.a.createElement("th",null,"\\coloneqq"),h.a.createElement("th",null)),h.a.createElement("tr",{style:{border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null,"5."),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\approx$")),h.a.createElement("th",null,"approximately equal"),h.a.createElement("th",null,"\\approx"),h.a.createElement("th",null,h.a.createElement(T.a,null,"$sin(0.01)\\approx0.01$"))),h.a.createElement("tr",{style:{border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null,"6."),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\propto$")),h.a.createElement("th",null,"proportional to"),h.a.createElement("th",null,"\\propto"),h.a.createElement("th",null,h.a.createElement(T.a,null,"y $\\propto$ x when y = kx, k constant"))),h.a.createElement("tr",{style:{border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null,"7."),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\infty$")),h.a.createElement("th",null,"infinity symbol"),h.a.createElement("th",null,"\\infty"),h.a.createElement("th",null)),h.a.createElement("tr",{style:{border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null,"8."),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\vert$")),h.a.createElement("th",null,"vertical bar"),h.a.createElement("th",null,"\\vert"),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\vert a \\vert$"))),h.a.createElement("tr",{style:{border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null,"9."),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\Delta$")),h.a.createElement("th",null,"delta"),h.a.createElement("th",null,"\\Delta"),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\Delta = t_1 - t_0$"))),h.a.createElement("tr",{style:{border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null,"10."),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\Pi$")),h.a.createElement("th",null,"capital pi "),h.a.createElement("th",null,"\\Pi"),h.a.createElement("th",null)),h.a.createElement("tr",{style:{border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null,"11."),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\pi$")),h.a.createElement("th",null,"pi constant"),h.a.createElement("th",null,"\\pi"),h.a.createElement("th",null))),h.a.createElement(y.a,{style:{},plugins:[B.a]},"## Linear Algebra symbols"),h.a.createElement("table",{style:{border:"1px #ccc solid",padding:"5px",borderCollapse:"collapse"}},h.a.createElement("tr",{style:{backgroundColor:"#ccc",border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null," Index "),h.a.createElement("th",null," Symbol "),h.a.createElement("th",null," Symbol Name "),h.a.createElement("th",null," Latex Syntax "),h.a.createElement("th",null," Example ")),h.a.createElement("tr",{style:{border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null,"1."),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\cdot$")),h.a.createElement("th",null,"dot"),h.a.createElement("th",null,"\\dot"),h.a.createElement("th",null,h.a.createElement(T.a,null,"$ a \\cdot b$"))),h.a.createElement("tr",{style:{border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null,"2."),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\times$")),h.a.createElement("th",null,"cross"),h.a.createElement("th",null,"\\times"),h.a.createElement("th",null,h.a.createElement(T.a,null,"$a \\times b$"))),h.a.createElement("tr",{style:{border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null,"3."),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\otimes$")),h.a.createElement("th",null,"tensor product"),h.a.createElement("th",null,"\\otimes"),h.a.createElement("th",null,h.a.createElement(T.a,null,"$A \\otimes B$"))),h.a.createElement("tr",{style:{border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null,"4."),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\Vert$")),h.a.createElement("th",null,"double vertical bars"),h.a.createElement("th",null,"\\Vert"),h.a.createElement("th",null)),h.a.createElement("tr",{style:{border:"1px #ccc solid",padding:"5px"}},h.a.createElement("th",null,"5."),h.a.createElement("th",null,h.a.createElement(T.a,null,"$\\dag$")),h.a.createElement("th",null,"Hermitian conjugate(dagger)"),h.a.createElement("th",null,"\\dag"),h.a.createElement("th",null,h.a.createElement(T.a,null,"$A^\\dag$")))),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("br",null),h.a.createElement("p",null,h.a.createElement("b",null,"TO BE CONTINUED..."))))}}]),t}(h.a.Component)),_=function(e){function t(e){return Object(r.a)(this,t),Object(i.a)(this,Object(o.a)(t).call(this,e))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return h.a.createElement("button",{style:{marginTop:this.props.marginTop,marginLeft:this.props.marginLeft,marginBottom:this.props.marginBottom,marginRight:this.props.marginRight,background:this.props.background,position:"relative",width:this.props.width,height:this.props.height,borderRadius:this.props.roundRadius,paddingTop:2,paddingBottom:2,paddingLeft:4,paddingRight:4},onClick:function(){e.props.onClickListener()}},h.a.createElement("img",{style:{position:"absolute",top:5,left:5,width:35,height:35,background:"transparent",margin:0},src:this.props.icon,alt:"my image"}),h.a.createElement("label",{style:{color:this.props.textColor,fontSize:"20px",position:"absolute",left:this.props.height,top:"10px",userSelect:"none",background:"transparent"}},this.props.text))}}]),t}(h.a.Component),z=a(71),I=a.n(z),F=a(72),N=a.n(F),A=a(44),D=a.n(A),W=a(73),J=a.n(W),M=function(e){function t(e){return Object(r.a)(this,t),Object(i.a)(this,Object(o.a)(t).call(this,e))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return h.a.createElement("button",{style:{marginTop:this.props.marginTop,marginLeft:this.props.marginLeft,marginBottom:this.props.marginBottom,marginRight:this.props.marginRight,background:this.props.background,position:"relative",width:this.props.width,height:this.props.height,borderRadius:this.props.roundRadius,paddingTop:2,paddingBottom:2,paddingLeft:4,paddingRight:4},onClick:function(){e.props.onClickListener()}},h.a.createElement("label",{style:{color:this.props.textColor,fontSize:"20px",position:"absolute",left:10,top:"10px",width:"63%",height:"75%",marginBottom:10,marginRight:200,userSelect:"none",display:"block",textOverflow:"ellipsis",overflow:"hidden"}},this.props.text),h.a.createElement("img",{style:{position:"absolute",top:"10px",left:325,width:"30%",height:"75%",margin:0},src:this.props.icon,alt:"my image"}),h.a.createElement("div",{style:{background:"transparant",position:"absolute",width:"100%",height:"15%",left:"10px",top:"83%"}},h.a.createElement("label",{style:{color:"gray",fontSize:"20px",position:"absolute",userSelect:"none",left:"0px",background:"transparent"}},this.props.date),h.a.createElement("label",{style:{color:"gray",fontSize:"20px",position:"absolute",userSelect:"none",right:"30px"}},this.props.tag)))}}]),t}(h.a.Component),H=function(e){function t(e){return Object(r.a)(this,t),Object(i.a)(this,Object(o.a)(t).call(this,e))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"nextPath",value:function(e){this.props.history.push(e)}},{key:"render",value:function(){var e=this;return h.a.createElement("div",null,h.a.createElement(S,null),h.a.createElement(_,{icon:I.a,background:"white",text:"\u623f\u4ea7\u6295\u8d44",marginTop:"160px",marginBottom:"25px",height:"48px",width:"150px",roundRadius:"10px",textColor:"#3a3a3a",onClickListener:function(){e.nextPath("house")}}),h.a.createElement(_,{icon:N.a,marginLeft:"10px",marginTop:"20px",marginBottom:"20px",background:"white",text:"\u9ec4\u91d1\u4e70\u5356",height:"48px",width:"150px",roundRadius:"10px",textColor:"#3a3a3a",onClickListener:function(){e.nextPath("gold")}}),h.a.createElement(_,{icon:D.a,marginLeft:"10px",marginTop:"20px",marginBottom:"20px",background:"white",text:"\u6ce8\u518c\u767b\u5165",height:"48px",width:"150px",roundRadius:"10px",textColor:"#3a3a3a",onClickListener:function(){e.nextPath("register")}}),h.a.createElement(_,{icon:D.a,marginLeft:"10px",marginTop:"20px",marginBottom:"20px",background:"white",text:"\u5e10\u53f7\u7ba1\u7406",height:"48px",width:"150px",roundRadius:"10px",textColor:"#3a3a3a",onClickListener:function(){e.nextPath("register")}}),h.a.createElement("div",{style:{background:"transparant",position:"absolute",width:"100%",height:"15%",left:"15%",top:"255px"}},h.a.createElement(M,{icon:J.a,marginLeft:"10%",marginRight:"10%",marginTop:"20px",marginBottom:"20px",background:"white",position:"absolute",text:"\u7b2c\u4e00\u7bc7\u5185\u5bb9\uff0c\u5c31\u6765\u8bb0\u5f55\u4e0b\u5b66\u4e60\u673a\u5668\u5b66\u4e60\u65f6\uff0c\u5728 Markdown \u6863\u6848\u4e2d\u5e38\u7528\u7684 Latex\u6570\u5b66\u7b26\u53f7\u5427\uff01",tag:"#Latex",date:"2020\u5e7412\u670811\u65e5",height:"200px",width:"500px",roundRadius:"15px",textColor:"#3a3a3a",onClickListener:function(){e.nextPath("article")}})))}}]),t}(h.a.Component),K=h.a.createElement(d.a,{basename:"/"},h.a.createElement(E.a,{exact:!0,path:"/",component:H}),h.a.createElement(E.a,{path:"/house",component:p}),h.a.createElement(E.a,{path:"/gold",component:g}),h.a.createElement(E.a,{path:"/register",component:x}),h.a.createElement(E.a,{path:"/article",component:V}));l.a.render(K,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},44:function(e,t,a){e.exports=a.p+"static/media/icon_account.ca121d2d.svg"},66:function(e,t,a){e.exports=a.p+"static/media/icon_sun_ball.376e505f.svg"},67:function(e,t,a){e.exports=a.p+"static/media/icon_sun_flare.963337bb.svg"},70:function(e,t,a){e.exports=a.p+"static/media/test.e4cbc308.md"},71:function(e,t,a){e.exports=a.p+"static/media/icon_house.02c2a2ec.svg"},72:function(e,t,a){e.exports=a.p+"static/media/icon_gold.f4196d39.svg"},73:function(e,t,a){e.exports=a.p+"static/media/icon_latex.c1bdb951.svg"},78:function(e,t,a){e.exports=a(185)}},[[78,1,2]]]);
//# sourceMappingURL=main.c65df22e.chunk.js.map