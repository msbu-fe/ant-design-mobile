webpackJsonp([35],{9:function(n,a,s){"use strict";s(15),s(14)},14:function(n,a){},15:function(n,a){},17:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var e=s(25),p=t(e),o=s(24),c=t(o);a["default"]=function(){function n(n,a){var s=[],t=!0,e=!1,p=void 0;try{for(var o,u=(0,c["default"])(n);!(t=(o=u.next()).done)&&(s.push(o.value),!a||s.length!==a);t=!0);}catch(l){e=!0,p=l}finally{try{!t&&u["return"]&&u["return"]()}finally{if(e)throw p}}return s}return function(a,s){if(Array.isArray(a))return a;if((0,p["default"])(Object(a)))return n(a,s);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},18:function(n,a){"use strict";function s(n,a){var s={},t={};return Object.keys(n).forEach(function(e){a.indexOf(e)!==-1?s[e]=n[e]:t[e]=n[e]}),[s,t]}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=s,n.exports=a["default"]},21:function(n,a,s){"use strict";s(9),s(43)},22:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{myName:"TouchableFeedbackComponent"},s=u["default"].createClass({displayName:"TouchableFeedbackComponent",statics:a,getDefaultProps:function(){return{activeStyle:{}}},getInitialState:function(){return{touchFeedback:!1}},onTouchStart:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onTouchEnd:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},onTouchCancel:function(n){this.props.onTouchCancel&&this.props.onTouchCancel(n),this.setTouchFeedbackState(!1)},onMouseDown:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onMouseUp:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},setTouchFeedbackState:function(n){this.setState({touchFeedback:n})},render:function(){var a={};return this.props.activeStyle&&(a=l?{onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel}:{onMouseDown:this.onMouseDown,onMouseUp:this.state.touchFeedback?this.onMouseUp:void 0,onMouseLeave:this.state.touchFeedback?this.onMouseUp:void 0}),u["default"].createElement(n,(0,o["default"])({},this.props,{touchFeedback:this.state.touchFeedback},a))}});return s}Object.defineProperty(a,"__esModule",{value:!0});var p=s(7),o=t(p);a["default"]=e;var c=s(1),u=t(c),l="undefined"!=typeof window&&"ontouchstart"in window;n.exports=a["default"]},24:function(n,a,s){n.exports={"default":s(26),__esModule:!0}},25:function(n,a,s){n.exports={"default":s(27),__esModule:!0}},26:function(n,a,s){s(23),s(19),n.exports=s(28)},27:function(n,a,s){s(23),s(19),n.exports=s(29)},28:function(n,a,s){var t=s(34),e=s(40);n.exports=s(16).getIterator=function(n){var a=e(n);if("function"!=typeof a)throw TypeError(n+" is not iterable!");return t(a.call(n))}},29:function(n,a,s){var t=s(47),e=s(30)("iterator"),p=s(35);n.exports=s(16).isIterable=function(n){var a=Object(n);return void 0!==a[e]||"@@iterator"in a||p.hasOwnProperty(t(a))}},33:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(8),p=t(e),o=s(4),c=t(o),u=s(6),l=t(u),i=s(5),r=t(i),k=s(1),d=t(k),f=s(41),m=t(f),g=s(3),h=t(g);s(21);var v=function(n){function a(){return(0,c["default"])(this,a),(0,l["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.children,e=a.className,o=a.style,c=a.renderHeader,u=a.renderFooter,l=(0,h["default"])((n={},(0,p["default"])(n,s,!0),(0,p["default"])(n,e,e),n));return d["default"].createElement("div",{className:l,style:o},c?d["default"].createElement("div",{className:s+"-header"},c()):null,t?d["default"].createElement("div",{className:s+"-body"},t):null,u?d["default"].createElement("div",{className:s+"-footer"},u()):null)},a}(d["default"].Component);a["default"]=v,v.Item=m["default"],v.defaultProps={prefixCls:"am-list"},n.exports=a["default"]},41:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a.Brief=void 0;var e=s(7),p=t(e),o=s(8),c=t(o),u=s(17),l=t(u),i=s(4),r=t(i),k=s(6),d=t(k),f=s(5),m=t(f),g=s(1),h=t(g),v=s(3),b=t(v),y=s(12),x=t(y),w=s(18),E=t(w),L=s(22),C=t(L),T=a.Brief=function(n){function a(){return(0,r["default"])(this,a),(0,d["default"])(this,n.apply(this,arguments))}return(0,m["default"])(a,n),a.prototype.render=function(){return h["default"].createElement("div",{className:"am-list-brief",style:this.props.style},this.props.children)},a}(h["default"].Component),_=function(n){function a(){return(0,r["default"])(this,a),(0,d["default"])(this,n.apply(this,arguments))}return(0,m["default"])(a,n),a.prototype.render=function(){var n,a,s,t=(0,E["default"])(this.props,["prefixCls","className","touchFeedback","activeStyle","error","align","wrap","children","multipleLine","thumb","extra","arrow"]),e=(0,l["default"])(t,2),o=e[0],u=o.prefixCls,i=o.className,r=o.touchFeedback,k=o.activeStyle,d=o.error,f=o.align,m=o.wrap,g=o.children,v=o.multipleLine,y=o.thumb,w=o.extra,L=o.arrow,C=void 0===L?"":L,T=e[1],_=(n={},(0,c["default"])(n,i,i),(0,c["default"])(n,u+"-item",!0),(0,c["default"])(n,u+"-item-error",d),(0,c["default"])(n,u+"-item-top","top"===f),(0,c["default"])(n,u+"-item-middle","middle"===f),(0,c["default"])(n,u+"-item-bottom","bottom"===f),n),M=(0,x["default"])({},this.props.style);r&&(M=(0,x["default"])(M,k),_[u+"-item-active"]=!0);var j=(0,b["default"])((a={},(0,c["default"])(a,u+"-line",!0),(0,c["default"])(a,u+"-line-multiple",v),(0,c["default"])(a,u+"-line-wrap",m),a)),N=(0,b["default"])((s={},(0,c["default"])(s,u+"-arrow",!0),(0,c["default"])(s,u+"-arrow-horizontal","horizontal"===C),(0,c["default"])(s,u+"-arrow-vertical","down"===C||"up"===C),(0,c["default"])(s,u+"-arrow-vertical-up","up"===C),s));return h["default"].createElement("div",(0,p["default"])({},T,{className:(0,b["default"])(_),style:M}),y?h["default"].createElement("div",{className:u+"-thumb"},"string"==typeof y?h["default"].createElement("img",{src:y}):y):null,h["default"].createElement("div",{className:j},g?h["default"].createElement("div",{className:u+"-content"},g):null,w?h["default"].createElement("div",{className:u+"-extra"},w):null,C?h["default"].createElement("div",{className:N}):null))},a}(h["default"].Component);_.defaultProps={prefixCls:"am-list",align:"middle",error:!1,multipleLine:!1,wrap:!1};var M=(0,C["default"])(_,{myName:"ListItem",Brief:T});a["default"]=M},43:function(n,a){},244:function(n,a,s){"use strict";s(9),s(399)},323:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(8),p=t(e),o=s(4),c=t(o),u=s(6),l=t(u),i=s(5),r=t(i),k=s(1),d=t(k),f=s(3),m=t(f);s(244);var g=function(n){function a(){return(0,c["default"])(this,a),(0,l["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a,s=this.props,t=s.text,e=s.prefixCls,o=s.overflowCount,c=s.className,u=s.style,l=s.children,i=this.props.dot,r=this.props.size,k=this.props.corner;t=t>o?o+"+":t,i&&(t="");var f=!(t&&"0"!==t||i),g=(0,m["default"])((n={},(0,p["default"])(n,e+"-dot",i),(0,p["default"])(n,e+"-dot-large",i&&"large"===r),(0,p["default"])(n,e+"-text",!i&&!k),(0,p["default"])(n,e+"-corner",k),(0,p["default"])(n,e+"-corner-large",k&&"large"===r),n)),h=(0,m["default"])((a={},(0,p["default"])(a,c,!!c),(0,p["default"])(a,e,!0),(0,p["default"])(a,e+"-not-a-wrapper",!l),(0,p["default"])(a,e+"-corner-wrapper",k),(0,p["default"])(a,e+"-corner-wrapper-large",k&&"large"===r),a));return d["default"].createElement("span",{className:h,title:t},l,!f&&d["default"].createElement("sup",{className:g,style:u},t))},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-badge",text:null,dot:!1,corner:!1,overflowCount:99,size:null},n.exports=a["default"]},399:function(n,a){},677:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(21),s(33)),p=t(e),o=(s(244),s(323)),c=t(o),u=s(1),l=t(u),i=s(2);t(i);n.exports={content:[["p","\u7ed3\u5408\u5217\u8868\u7684\u6848\u4f8b\u53c2\u8003"]],meta:{order:4,title:"\u7efc\u5408\u793a\u4f8b",filename:"components/badge/demo/basic.md",id:"components-badge-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> List<span class="token punctuation">,</span> Badge <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">renderHeader</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">\'\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5185\u5bb9\u5185\u5bb9<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">dot</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token string">\'0.52rem\'</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token string">\'0.52rem\'</span><span class="token punctuation">,</span> background<span class="token punctuation">:</span> <span class="token string">\'#ddd\'</span><span class="token punctuation">,</span> display<span class="token punctuation">:</span> <span class="token string">\'inline-block\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Badge</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u5c0f\u5706\u70b9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span>\n      <span class="token attr-name">thumb</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png<span class="token punctuation">"</span></span>\n      <span class="token attr-name">extra</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Badge text<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">77</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n      arrow<span class="token operator">=</span><span class="token string">"horizontal"</span>\n    <span class="token operator">></span>\n      \u53f3\u4fa7\u5185\u5bb9\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5185\u5bb9\u5185\u5bb9<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      \u6587\u672c\u5185\u5bb9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token string">\'new\'</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span><span class="token punctuation">></span></span>\n      \u96c6\u5408\uff1a\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">4</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5238<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span> padding<span class="token punctuation">:</span> <span class="token string">\'0 6px\'</span><span class="token punctuation">,</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#f19736\'</span><span class="token punctuation">,</span> borderRadius<span class="token punctuation">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>NEW<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span> padding<span class="token punctuation">:</span> <span class="token string">\'0 6px\'</span><span class="token punctuation">,</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#21b68a\'</span><span class="token punctuation">,</span> borderRadius<span class="token punctuation">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u81ea\u52a8\u7f34\u8d39<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        marginLeft<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span>\n        padding<span class="token punctuation">:</span> <span class="token string">\'0 6px\'</span><span class="token punctuation">,</span>\n        backgroundColor<span class="token punctuation">:</span> <span class="token string">\'#fff\'</span><span class="token punctuation">,</span>\n        borderRadius<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span>\n        color<span class="token punctuation">:</span> <span class="token string">\'#f19736\'</span><span class="token punctuation">,</span>\n        border<span class="token punctuation">:</span> <span class="token string">\'1px solid #f19736\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">extra</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5185\u5bb9\u5185\u5bb9<span class="token punctuation">"</span></span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      \u8d85\u51fa<span class="token number">99</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){return l["default"].createElement(p["default"],{renderHeader:function(){return""}},l["default"].createElement(p["default"].Item,{extra:"\u5185\u5bb9\u5185\u5bb9",arrow:"horizontal"},l["default"].createElement(c["default"],{dot:!0},l["default"].createElement("span",{style:{width:"0.52rem",height:"0.52rem",background:"#ddd",display:"inline-block"}})),l["default"].createElement("span",{style:{marginLeft:12}},"\u5c0f\u5706\u70b9")),l["default"].createElement(p["default"].Item,{thumb:"https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png",extra:l["default"].createElement(c["default"],{text:77}),arrow:"horizontal"},"\u53f3\u4fa7\u5185\u5bb9"),l["default"].createElement(p["default"].Item,{extra:"\u5185\u5bb9\u5185\u5bb9",arrow:"horizontal"},"\u6587\u672c\u5185\u5bb9",l["default"].createElement(c["default"],{text:"new",style:{marginLeft:12}})),l["default"].createElement(p["default"].Item,null,"\u96c6\u5408\uff1a",l["default"].createElement(c["default"],{text:4,style:{marginLeft:12}}),l["default"].createElement(c["default"],{text:"\u5238",style:{marginLeft:12,padding:"0 6px",backgroundColor:"#f19736",borderRadius:2}}),l["default"].createElement(c["default"],{text:"NEW",style:{marginLeft:12,padding:"0 6px",backgroundColor:"#21b68a",borderRadius:2}}),l["default"].createElement(c["default"],{text:"\u81ea\u52a8\u7f34\u8d39",style:{marginLeft:12,padding:"0 6px",backgroundColor:"#fff",borderRadius:2,color:"#f19736",border:"1px solid #f19736"}})),l["default"].createElement(p["default"].Item,{extra:"\u5185\u5bb9\u5185\u5bb9",arrow:"horizontal"},"\u8d85\u51fa99",l["default"].createElement(c["default"],{text:100,style:{marginLeft:12}})))}}},866:function(n,a,s){n.exports={basic:s(677)}}});