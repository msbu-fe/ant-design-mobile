webpackJsonp([104],{0:function(e,t,n){"use strict";function a(e,t){return Object.keys(t).reduce(function(e,n){return e.replace(":"+n,t[n])},e)}function o(e){return e.split("/").some(function(e){return e.startsWith(":")})}function r(e,t){t(null,e)}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=n(1399)("./template"+e.replace(/^\.\/template/,""));return function(e,n){var l=a(t,e.params),u=g.get(b.markdown,l.replace(/^\//,"").split("/")),s=i.collect||r;s(Object.assign({},e,{data:b.markdown,picked:b.picked,pageData:u,utils:E}),function(e,a){var r=o(t)&&!u||404===e?v:i["default"]||i;r.dynamicProps=a,n(404===e?null:e,r)})}}function l(e){return Array.isArray(e)?e.map(l):Object.assign({},e,{onEnter:function(){return p.start()},component:void 0,getComponent:i(e.component,e.dataPath||e.path),indexRoute:e.indexRoute&&Object.assign({},e.indexRoute,{component:void 0,getComponent:i(e.indexRoute.component,e.indexRoute.dataPath||e.indexRoute.path)}),childRoutes:e.childRoutes&&e.childRoutes.map(l)})}function u(e,t){return p.done(),d.createElement(e,s({},t,e.dynamicProps))}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};n(526);var d=n(1),c=n(2),f=n(94),p=n(593);n(578);var h=n(588),m=n(528),y=n(415),g=n(575),v=n(338),b=n(527),T=b.plugins,S=m(function(e){return e.converters||[]},T),E={get:g.get,toReactComponent:function(e){return y(e,S)}};T.map(function(e){return e.utils||{}}).forEach(function(e){return Object.assign(E,e)});var w=n(335),C=Array.isArray(w.routes)?w.routes:[w.routes],k=l(C);k.push({path:"*",getComponents:i("./template/NotFound")});var x=d.createElement(f.Router,{history:f.useRouterHistory(h.createHistory)({basename:"/msbu-ui-react/kitchen-sink"}),routes:k,createElement:u});c.render(x,document.getElementById("react-content"))},9:function(e,t,n){"use strict";n(15),n(14)},14:function(e,t){},15:function(e,t){},17:function(e,t,n){"use strict";n(36)},18:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var o=n(25),r=a(o),i=n(24),l=a(i);t["default"]=function(){function e(e,t){var n=[],a=!0,o=!1,r=void 0;try{for(var i,u=(0,l["default"])(e);!(a=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(s){o=!0,r=s}finally{try{!a&&u["return"]&&u["return"]()}finally{if(o)throw r}}return n}return function(t,n){if(Array.isArray(t))return t;if((0,r["default"])(Object(t)))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},19:function(e,t){"use strict";function n(e,t){var n={},a={};return Object.keys(e).forEach(function(o){t.indexOf(o)!==-1?n[o]=e[o]:a[o]=e[o]}),[n,a]}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},21:function(e,t,n){"use strict";n(9),n(43)},22:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{myName:"TouchableFeedbackComponent"},n=u["default"].createClass({displayName:"TouchableFeedbackComponent",statics:t,getDefaultProps:function(){return{activeStyle:{}}},getInitialState:function(){return{touchFeedback:!1}},onTouchStart:function(e){this.props.onTouchStart&&this.props.onTouchStart(e),this.setTouchFeedbackState(!0)},onTouchEnd:function(e){this.props.onTouchEnd&&this.props.onTouchEnd(e),this.setTouchFeedbackState(!1)},onTouchCancel:function(e){this.props.onTouchCancel&&this.props.onTouchCancel(e),this.setTouchFeedbackState(!1)},onMouseDown:function(e){this.props.onTouchStart&&this.props.onTouchStart(e),this.setTouchFeedbackState(!0)},onMouseUp:function(e){this.props.onTouchEnd&&this.props.onTouchEnd(e),this.setTouchFeedbackState(!1)},setTouchFeedbackState:function(e){this.setState({touchFeedback:e})},render:function(){var t={};return this.props.activeStyle&&(t=s?{onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel}:{onMouseDown:this.onMouseDown,onMouseUp:this.state.touchFeedback?this.onMouseUp:void 0,onMouseLeave:this.state.touchFeedback?this.onMouseUp:void 0}),u["default"].createElement(e,(0,i["default"])({},this.props,{touchFeedback:this.state.touchFeedback},t))}});return n}Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),i=a(r);t["default"]=o;var l=n(1),u=a(l),s="undefined"!=typeof window&&"ontouchstart"in window;e.exports=t["default"]},24:function(e,t,n){e.exports={"default":n(26),__esModule:!0}},25:function(e,t,n){e.exports={"default":n(27),__esModule:!0}},26:function(e,t,n){n(23),n(20),e.exports=n(28)},27:function(e,t,n){n(23),n(20),e.exports=n(29)},28:function(e,t,n){var a=n(34),o=n(40);e.exports=n(16).getIterator=function(e){var t=o(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return a(t.call(e))}},29:function(e,t,n){var a=n(47),o=n(30)("iterator"),r=n(35);e.exports=n(16).isIterable=function(e){var t=Object(e);return void 0!==t[o]||"@@iterator"in t||r.hasOwnProperty(a(t))}},31:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),r=a(o),i=n(1),l=a(i);n(17),t["default"]=function(e){var t=e.type,n=e.className,a=void 0===n?"":n;return l["default"].createElement("i",(0,r["default"])({},e,{className:(a+" icon icon-"+t).trim()}))},e.exports=t["default"]},33:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o=n(8),r=a(o),i=n(4),l=a(i),u=n(6),s=a(u),d=n(5),c=a(d),f=n(1),p=a(f),h=n(41),m=a(h),y=n(3),g=a(y);n(21);var v=function(e){function t(){return(0,l["default"])(this,t),(0,s["default"])(this,e.apply(this,arguments))}return(0,c["default"])(t,e),t.prototype.render=function(){var e,t=this.props,n=t.prefixCls,a=t.children,o=t.className,i=t.style,l=t.renderHeader,u=t.renderFooter,s=(0,g["default"])((e={},(0,r["default"])(e,n,!0),(0,r["default"])(e,o,o),e));return p["default"].createElement("div",{className:s,style:i},l?p["default"].createElement("div",{className:n+"-header"},l()):null,a?p["default"].createElement("div",{className:n+"-body"},a):null,u?p["default"].createElement("div",{className:n+"-footer"},u()):null)},t}(p["default"].Component);t["default"]=v,v.Item=m["default"],v.defaultProps={prefixCls:"am-list"},e.exports=t["default"]},36:function(e,t){},41:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Brief=void 0;var o=n(7),r=a(o),i=n(8),l=a(i),u=n(18),s=a(u),d=n(4),c=a(d),f=n(6),p=a(f),h=n(5),m=a(h),y=n(1),g=a(y),v=n(3),b=a(v),T=n(12),S=a(T),E=n(19),w=a(E),C=n(22),k=a(C),x=t.Brief=function(e){function t(){return(0,c["default"])(this,t),(0,p["default"])(this,e.apply(this,arguments))}return(0,m["default"])(t,e),t.prototype.render=function(){return g["default"].createElement("div",{className:"am-list-brief",style:this.props.style},this.props.children)},t}(g["default"].Component),P=function(e){function t(){return(0,c["default"])(this,t),(0,p["default"])(this,e.apply(this,arguments))}return(0,m["default"])(t,e),t.prototype.render=function(){var e,t,n,a=(0,w["default"])(this.props,["prefixCls","className","touchFeedback","activeStyle","error","align","wrap","children","multipleLine","thumb","extra","arrow"]),o=(0,s["default"])(a,2),i=o[0],u=i.prefixCls,d=i.className,c=i.touchFeedback,f=i.activeStyle,p=i.error,h=i.align,m=i.wrap,y=i.children,v=i.multipleLine,T=i.thumb,E=i.extra,C=i.arrow,k=o[1],x=(e={},(0,l["default"])(e,d,d),(0,l["default"])(e,u+"-item",!0),(0,l["default"])(e,u+"-item-error",p),(0,l["default"])(e,u+"-item-top","top"===h),(0,l["default"])(e,u+"-item-middle","middle"===h),(0,l["default"])(e,u+"-item-bottom","bottom"===h),e),P=(0,S["default"])({},this.props.style);c&&(P=(0,S["default"])(P,f),x[u+"-item-active"]=!0);var O=(0,b["default"])((t={},(0,l["default"])(t,u+"-line",!0),(0,l["default"])(t,u+"-line-multiple",v),(0,l["default"])(t,u+"-line-wrap",m),t)),N=(0,b["default"])((n={},(0,l["default"])(n,u+"-arrow",!0),(0,l["default"])(n,u+"-arrow-horizontal","horizontal"===C),(0,l["default"])(n,u+"-arrow-vertical","down"===C||"up"===C),(0,l["default"])(n,u+"-arrow-vertical-up","up"===C),n));return g["default"].createElement("div",(0,r["default"])({},k,{className:(0,b["default"])(x),style:P}),T?g["default"].createElement("div",{className:u+"-thumb"},"string"==typeof T?g["default"].createElement("img",{src:T}):T):null,g["default"].createElement("div",{className:O},y?g["default"].createElement("div",{className:u+"-content"},y):null,E?g["default"].createElement("div",{className:u+"-extra"},E):null,C?g["default"].createElement("div",{className:N}):null))},t}(g["default"].Component);P.defaultProps={prefixCls:"am-list",align:"middle",error:!1,multipleLine:!1,wrap:!1};var O=(0,k["default"])(P,{Brief:x});t["default"]=O},43:function(e,t){},52:function(e,t,n){"use strict";n(9),n(67)},63:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o=n(8),r=a(o),i=n(4),l=a(i),u=n(6),s=a(u),d=n(5),c=a(d),f=n(1),p=a(f),h=n(3),m=a(h),y=function(e){function t(){return(0,l["default"])(this,t),(0,s["default"])(this,e.apply(this,arguments))}return(0,c["default"])(t,e),t.prototype.render=function(){var e,t=this.props,n=t.direction,a=t.wrap,o=t.justify,i=t.align,l=t.alignContent,u=t.className,s=t.children,d=t.prefixCls,c=t.style,f=t.onClick,h=(0,m["default"])((e={},(0,r["default"])(e,d,!0),(0,r["default"])(e,d+"-dir-row","row"===n),(0,r["default"])(e,d+"-dir-row-reverse","row-reverse"===n),(0,r["default"])(e,d+"-dir-column","column"===n),(0,r["default"])(e,d+"-dir-column-reverse","column-reverse"===n),(0,r["default"])(e,d+"-nowrap","nowrap"===a),(0,r["default"])(e,d+"-wrap","wrap"===a),(0,r["default"])(e,d+"-wrap-reverse","wrap-reverse"===a),(0,r["default"])(e,d+"-justify-start","start"===o),(0,r["default"])(e,d+"-justify-end","end"===o),(0,r["default"])(e,d+"-justify-center","center"===o),(0,r["default"])(e,d+"-justify-between","between"===o),(0,r["default"])(e,d+"-justify-around","around"===o),(0,r["default"])(e,d+"-align-top","top"===i||"start"===i),(0,r["default"])(e,d+"-align-middle","middle"===i||"center"===i),(0,r["default"])(e,d+"-align-bottom","bottom"===i||"end"===i),(0,r["default"])(e,d+"-align-baseline","baseline"===i),(0,r["default"])(e,d+"-align-stretch","stretch"===i),(0,r["default"])(e,d+"-align-content-start","start"===l),(0,r["default"])(e,d+"-align-content-end","end"===l),(0,r["default"])(e,d+"-align-content-center","center"===l),(0,r["default"])(e,d+"-align-content-between","between"===l),(0,r["default"])(e,d+"-align-content-around","around"===l),(0,r["default"])(e,d+"-align-content-stretch","stretch"===l),(0,r["default"])(e,u,u),e));return p["default"].createElement("div",{className:h,style:c,onClick:f},s)},t}(p["default"].Component);t["default"]=y,y.defaultProps={prefixCls:"am-flexbox",align:"center",onClick:function(){}},e.exports=t["default"]},64:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o=n(8),r=a(o),i=n(4),l=a(i),u=n(6),s=a(u),d=n(5),c=a(d),f=n(1),p=a(f),h=n(3),m=a(h),y=function(e){function t(){return(0,l["default"])(this,t),(0,s["default"])(this,e.apply(this,arguments))}return(0,c["default"])(t,e),t.prototype.render=function(){var e,t=this.props,n=t.children,a=t.className,o=t.prefixCls,i=t.style,l=t.onClick,u=(0,m["default"])((e={},(0,r["default"])(e,o+"-item",!0),(0,r["default"])(e,a,a),e));return p["default"].createElement("div",{className:u,style:i,onClick:l},n)},t}(p["default"].Component);t["default"]=y,y.defaultProps={prefixCls:"am-flexbox"},e.exports=t["default"]},65:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(63),r=a(o),i=n(64),l=a(i);n(52),r["default"].Item=l["default"],t["default"]=r["default"],e.exports=t["default"]},67:function(e,t){},171:function(e,t,n){"use strict";n(9),n(399)},244:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o=n(4),r=a(o),i=n(6),l=a(i),u=n(5),s=a(u),d=n(1),c=a(d),f=n(421),p=a(f);n(171);var h=function(e){function t(){return(0,r["default"])(this,t),(0,l["default"])(this,e.apply(this,arguments))}return(0,s["default"])(t,e),t.prototype.render=function(){return c["default"].createElement(p["default"],this.props)},t}(c["default"].Component);t["default"]=h,h.defaultProps={prefixCls:"am-drawer",enableDragHandle:!1},e.exports=t["default"]},335:function(e,t){"use strict";e.exports={categoryOrder:{"UI Bars":0,"UI Views":1,"UI Controls":2,Others:3},routes:[{path:"/",component:"./template/KitchenSink/index"},{path:"/:component/",dataPath:"/components/:component",component:"./template/KitchenSink/Demo"}]}},336:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=a(o),i=n(94);n(576);var l=r["default"].createClass({displayName:"Item",PropTypes:{logo:o.PropTypes.string,title:o.PropTypes.string,subtitle:o.PropTypes.string,onClick:o.PropTypes.func},getDefaultProps:function(){return{logo:"",title:"",subtitle:"",onClick:function(){}}},handleTouchStart:function(){this.refs.demoitem.style.backgroundColor="#f2f2f2"},handleTouchEnd:function(){this.refs.demoitem.style.backgroundColor="#fff"},render:function(){var e=this.props,t=e.logo,n=e.title,a=e.subtitle,o=e.linkTo,l=e.style;return r["default"].createElement("section",{className:"am-demo-item",onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,onTouchCancel:this.handleTouchEnd,ref:"demoitem",style:l},r["default"].createElement("div",{className:"am-demo-item-inner"},r["default"].createElement(i.Link,{to:o},r["default"].createElement("div",{className:"am-demo-item-logo",style:{backgroundImage:"url("+t+")"}}),r["default"].createElement("h1",{className:"am-demo-item-title"},n),r["default"].createElement("h2",{className:"am-demo-item-subtitle"},a))))}});t["default"]=l,e.exports=t["default"]},337:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=a(o);n(577);var i=r["default"].createClass({displayName:"Page",PropTypes:{title:o.PropTypes.string,subtitle:o.PropTypes.string,children:o.PropTypes.any,isIndex:o.PropTypes.bool,logo:o.PropTypes.string,style:o.PropTypes.object},getDefaultProps:function(){return{logo:"",title:"",subtitle:"",isApp:0,style:{}}},componentDidMount:function(){this.initScroller()},componentWillUnmount:function(){this.props.isIndex&&(window.scrolltopNumber=document.querySelector(".am-demo-page").scrollTop)},initScroller:function(){this.refs.demoPage.style.height=document.documentElement.clientHeight+"px",this.refs.demoPage.style.overflowY="scroll",this.props.isIndex?document.querySelector(".am-demo-page").scrollTop=window.scrolltopNumber:document.querySelector(".am-demo-page").scrollTop=0},render:function(){var e=this.props,t=e.children,n=e.style;return r["default"].createElement("section",{className:"am-demo-page",ref:"demoPage",style:n},r["default"].createElement("div",{className:"am-demo-bd"},t))}});t["default"]=i,e.exports=t["default"]},338:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(){return i["default"].createElement("div",{id:"page-404"},i["default"].createElement("section",null,i["default"].createElement("h1",null,"404"),i["default"].createElement("p",null,"\u4f60\u8981\u627e\u7684\u9875\u9762\u4e0d\u5b58\u5728 ",i["default"].createElement(l.Link,{to:"/"},"\u8fd4\u56de\u9996\u9875"))),i["default"].createElement("style",{dangerouslySetInnerHTML:{__html:"#react-content { height: 100%; background-color: #fff }"}}))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=o;var r=n(1),i=a(r),l=n(94);e.exports=t["default"]},399:function(e,t){},420:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e){for(var t=e,n=0,a=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)n+=t.offsetLeft-t.scrollLeft,a+=t.offsetTop-t.scrollTop,t=t.offsetParent;return{top:a,left:n}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),i=a(r),l=n(7),u=a(l),s=n(158),d=a(s),c=n(4),f=a(c),p=n(6),h=a(p),m=n(5),y=a(m),g=n(1),v=a(g),b=n(2),T=a(b),S=n(3),E=a(S),w=20,C=function(e){function t(n){(0,f["default"])(this,t);var a=(0,h["default"])(this,e.call(this,n));return a.onOverlayClicked=function(){a.props.open&&a.props.onOpenChange(!1,{overlayClicked:!0})},a.onTouchStart=function(e){if(!a.isTouching()){var t=e.targetTouches[0];a.setState({touchIdentifier:a.notTouch?null:t.identifier,touchStartX:t.clientX,touchStartY:t.clientY,touchCurrentX:t.clientX,touchCurrentY:t.clientY})}},a.onTouchMove=function(e){if(a.isTouching())for(var t=0;t<e.targetTouches.length;t++)if(e.targetTouches[t].identifier===a.state.touchIdentifier){a.setState({touchCurrentX:e.targetTouches[t].clientX,touchCurrentY:e.targetTouches[t].clientY});break}},a.onTouchEnd=function(){if(a.notTouch=!1,a.isTouching()){var e=a.touchSidebarWidth();(a.props.open&&e<a.state.sidebarWidth-a.props.dragToggleDistance||!a.props.open&&e>a.props.dragToggleDistance)&&a.props.onOpenChange(!a.props.open);var t=a.touchSidebarHeight();(a.props.open&&t<a.state.sidebarHeight-a.props.dragToggleDistance||!a.props.open&&t>a.props.dragToggleDistance)&&a.props.onOpenChange(!a.props.open),a.setState({touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null})}},a.onScroll=function(){a.isTouching()&&a.inCancelDistanceOnScroll()&&a.setState({touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null})},a.inCancelDistanceOnScroll=function(){var e=void 0;switch(a.props.position){case"right":e=Math.abs(a.state.touchCurrentX-a.state.touchStartX)<w;break;case"bottom":e=Math.abs(a.state.touchCurrentY-a.state.touchStartY)<w;break;case"top":e=Math.abs(a.state.touchStartY-a.state.touchCurrentY)<w;break;case"left":default:e=Math.abs(a.state.touchStartX-a.state.touchCurrentX)<w}return e},a.isTouching=function(){return null!==a.state.touchIdentifier},a.saveSidebarSize=function(){var e=T["default"].findDOMNode(a.refs.sidebar),t=e.offsetWidth,n=e.offsetHeight,r=o(T["default"].findDOMNode(a.refs.sidebar)).top,i=o(T["default"].findDOMNode(a.refs.dragHandle)).top;t!==a.state.sidebarWidth&&a.setState({sidebarWidth:t}),n!==a.state.sidebarHeight&&a.setState({sidebarHeight:n}),r!==a.state.sidebarTop&&a.setState({sidebarTop:r}),i!==a.state.dragHandleTop&&a.setState({dragHandleTop:i})},a.touchSidebarWidth=function(){return"right"===a.props.position?a.props.open&&window.innerWidth-a.state.touchStartX<a.state.sidebarWidth?a.state.touchCurrentX>a.state.touchStartX?a.state.sidebarWidth+a.state.touchStartX-a.state.touchCurrentX:a.state.sidebarWidth:Math.min(window.innerWidth-a.state.touchCurrentX,a.state.sidebarWidth):"left"===a.props.position?a.props.open&&a.state.touchStartX<a.state.sidebarWidth?a.state.touchCurrentX>a.state.touchStartX?a.state.sidebarWidth:a.state.sidebarWidth-a.state.touchStartX+a.state.touchCurrentX:Math.min(a.state.touchCurrentX,a.state.sidebarWidth):void 0},a.touchSidebarHeight=function(){if("bottom"===a.props.position)return a.props.open&&window.innerHeight-a.state.touchStartY<a.state.sidebarHeight?a.state.touchCurrentY>a.state.touchStartY?a.state.sidebarHeight+a.state.touchStartY-a.state.touchCurrentY:a.state.sidebarHeight:Math.min(window.innerHeight-a.state.touchCurrentY,a.state.sidebarHeight);if("top"===a.props.position){var e=a.state.touchStartY-a.state.sidebarTop;return a.props.open&&e<a.state.sidebarHeight?a.state.touchCurrentY>a.state.touchStartY?a.state.sidebarHeight:a.state.sidebarHeight-a.state.touchStartY+a.state.touchCurrentY:Math.min(a.state.touchCurrentY-a.state.dragHandleTop,a.state.sidebarHeight)}},a.renderStyle=function(e){var t=e.sidebarStyle,n=e.isTouching,o=e.overlayStyle,r=e.contentStyle;if("right"===a.props.position||"left"===a.props.position){if(t.transform="translateX(0%)",t.WebkitTransform="translateX(0%)",n){var i=a.touchSidebarWidth()/a.state.sidebarWidth;"right"===a.props.position&&(t.transform="translateX("+100*(1-i)+"%)",t.WebkitTransform="translateX("+100*(1-i)+"%)"),"left"===a.props.position&&(t.transform="translateX(-"+100*(1-i)+"%)",t.WebkitTransform="translateX(-"+100*(1-i)+"%)"),o.opacity=i,o.visibility="visible"}r&&(r[a.props.position]=a.state.sidebarWidth+"px")}if("top"===a.props.position||"bottom"===a.props.position){if(t.transform="translateY(0%)",t.WebkitTransform="translateY(0%)",n){var l=a.touchSidebarHeight()/a.state.sidebarHeight;"bottom"===a.props.position&&(t.transform="translateY("+100*(1-l)+"%)",t.WebkitTransform="translateY("+100*(1-l)+"%)"),"top"===a.props.position&&(t.transform="translateY(-"+100*(1-l)+"%)",t.WebkitTransform="translateY(-"+100*(1-l)+"%)"),o.opacity=l,o.visibility="visible"}r&&(r[a.props.position]=a.state.sidebarHeight+"px")}},a.state={sidebarWidth:0,sidebarHeight:0,sidebarTop:0,dragHandleTop:0,touchIdentifier:null,touchStartX:null,touchStartY:null,touchCurrentX:null,touchCurrentY:null,touchSupported:"object"===("undefined"==typeof window?"undefined":(0,d["default"])(window))&&"ontouchstart"in window},a}return(0,y["default"])(t,e),t.prototype.componentDidMount=function(){this.saveSidebarSize()},t.prototype.componentDidUpdate=function(){this.isTouching()||this.saveSidebarSize()},t.prototype.render=function(){var e,t=this,n=this.props,a=n.className,o=n.style,r=n.prefixCls,l=n.position,s=n.transitions,d=n.touch,c=n.enableDragHandle,f=n.sidebar,p=n.children,h=n.docked,m=n.open,y=(0,u["default"])({},this.props.sidebarStyle),g=(0,u["default"])({},this.props.contentStyle),b=(0,u["default"])({},this.props.overlayStyle),T=(e={},(0,i["default"])(e,a,!!a),(0,i["default"])(e,r,!0),(0,i["default"])(e,r+"-"+l,!0),e),S={style:o},w=this.isTouching();w?this.renderStyle({sidebarStyle:y,isTouching:!0,overlayStyle:b}):h?0!==this.state.sidebarWidth&&(T[r+"-docked"]=!0,this.renderStyle({sidebarStyle:y,contentStyle:g})):m&&(T[r+"-open"]=!0,this.renderStyle({sidebarStyle:y}),b.opacity=1,b.visibility="visible"),!w&&s||(y.transition="none",y.WebkitTransition="none",g.transition="none",b.transition="none");var C=null;return this.state.touchSupported&&d&&(m?(S.onTouchStart=function(e){t.notTouch=!0,t.onTouchStart(e)},S.onTouchMove=this.onTouchMove,S.onTouchEnd=this.onTouchEnd,S.onTouchCancel=this.onTouchEnd,S.onScroll=this.onScroll):c&&(C=v["default"].createElement("div",{className:r+"-draghandle",style:this.props.dragHandleStyle,onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd,ref:"dragHandle"}))),v["default"].createElement("div",(0,u["default"])({className:(0,E["default"])(T)},S),v["default"].createElement("div",{className:r+"-sidebar",style:y,ref:"sidebar"},f),v["default"].createElement("div",{className:r+"-overlay",style:b,role:"presentation",tabIndex:"0",ref:"overlay",onClick:this.onOverlayClicked}),v["default"].createElement("div",{className:r+"-content",style:g,ref:"content"},C,p))},t}(v["default"].Component);C.propTypes={prefixCls:v["default"].PropTypes.string,className:v["default"].PropTypes.string,children:v["default"].PropTypes.node.isRequired,style:v["default"].PropTypes.object,sidebarStyle:v["default"].PropTypes.object,contentStyle:v["default"].PropTypes.object,overlayStyle:v["default"].PropTypes.object,dragHandleStyle:v["default"].PropTypes.object,sidebar:v["default"].PropTypes.node.isRequired,docked:v["default"].PropTypes.bool,open:v["default"].PropTypes.bool,transitions:v["default"].PropTypes.bool,touch:v["default"].PropTypes.bool,enableDragHandle:v["default"].PropTypes.bool,position:v["default"].PropTypes.oneOf(["left","right","top","bottom"]),dragToggleDistance:v["default"].PropTypes.number,onOpenChange:v["default"].PropTypes.func},C.defaultProps={prefixCls:"rc-drawer",sidebarStyle:{},contentStyle:{},overlayStyle:{},dragHandleStyle:{},docked:!1,open:!1,transitions:!0,touch:!0,enableDragHandle:!0,position:"left",dragToggleDistance:30,onOpenChange:function(){}},t["default"]=C,e.exports=t["default"]},421:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(420),r=a(o);t["default"]=r["default"],e.exports=t["default"]},518:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n="changelog"===e.location.pathname?e.data.CHANGELOG:e.pageData,a="function"==typeof n?n():(n[O]||n.index[O]||n.index)(),o=[a],r=e.utils.get(e.data,["components",e.params.component,"demo"]);r&&o.push(r()),C["default"].all(o).then(function(n){t(null,(0,v["default"])({},e,{localizedPageData:n[0],demos:n[1]}))})}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=(n(171),n(244)),i=a(r),l=(n(17),n(31)),u=a(l),s=(n(21),n(33)),d=a(s),c=n(4),f=a(c),p=n(6),h=a(p),m=n(5),y=a(m),g=n(7),v=a(g);t.collect=o;var b=n(1),T=a(b),S=n(2),E=a(S),w=n(354),C=a(w),k=n(94),x=n(335),P=a(x),O=window.localStorage&&"en-US"!==localStorage.getItem("locale")?"zh-CN":"en-US",N=function(e){function t(n){(0,f["default"])(this,t);var a=(0,h["default"])(this,e.call(this,n));return a.componentWillReceiveProps=function(){a.setState({open:!1})},a.onOpenChange=function(){a.setState({open:!a.state.open})},a.onTouchStart=function(){a.setState({triggerActive:!0})},a.onTouchEnd=function(){a.setState({triggerActive:!1})},a.state={open:!1,triggerActive:!1,activeIdx:-1},a}return(0,y["default"])(t,e),t.prototype.render=function(){var e=!/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent),t=this.props.demos,n=[];Object.keys(t).forEach(function(e){n.push(t[e])});var a=this.props.params.component,o=n.sort(function(e,t){return parseInt(e.meta.order,10)-parseInt(t.meta.order,10)}),r=this.props,l=r.location,s=r.picked,c=s.components,f={};c.forEach(function(e){var t=e.meta;f[t.category]||(f[t.category]=[]),f[t.category].push(t)});var p=f["UI Views"].concat(f["UI Bars"]).concat(f["UI Controls"]).concat(f.Others),h=void 0;p.forEach(function(e){e.filename.split("/")[1]===a&&(h=e)});var m=["drawer","list-view"],y=[{order:0,title:"\u57fa\u672c"},{order:1,title:"\u5d4c\u5165\u6587\u6863\u6a21\u5f0f"}],g=[{order:0,title:"\u81ea\u5b9a\u4e49\u5bb9\u5668"},{order:1,title:"body \u5bb9\u5668"},{order:2,title:"\u6807\u9898\u5438\u9876\uff08body \u5bb9\u5668\uff09"},{order:3,title:"\u7d22\u5f15\u5217\u8868"},{order:4,title:"\u7d22\u5f15\u5217\u8868\uff08\u6807\u9898\u5438\u9876\uff09"}],b=T["default"].createElement("div",null,T["default"].createElement("div",{className:"demo-drawer-home"},T["default"].createElement(k.Link,{to:"/"},"Ant Design Mobile")),Object.keys(f).sort(function(e,t){return P["default"].categoryOrder[e]-P["default"].categoryOrder[t]}).map(function(e,t){return T["default"].createElement(d["default"],{key:t,title:e},f[e].map(function(e,t){var n=e.filename.split("/")[1],o=void 0;return o="drawer"===n?y:g,T["default"].createElement(d["default"].Item,{key:t},m.indexOf(n)>-1?T["default"].createElement(d["default"],{className:"mobile-site-sublist",renderHeader:function(){return T["default"].createElement("span",{className:a===n?"demo-current":""},e.english,T["default"].createElement("span",{className:"demo-chinese"},e.chinese))}},o.map(function(e,t){return T["default"].createElement(d["default"].Item,{key:t},T["default"].createElement(k.Link,{to:"/"+n+"/#"+n+"-demo-"+e.order},e.title))})):T["default"].createElement(k.Link,{to:"/"+n+"/"},T["default"].createElement("span",{className:a===n?"demo-current":""},e.english," ",T["default"].createElement("span",{className:"demo-chinese"},e.chinese))))}))})),S={open:this.state.open,position:"left",onOpenChange:this.onOpenChange},w=T["default"].createElement("div",{style:{height:"100%"},className:"demo"},T["default"].createElement("div",{className:"demoName"},h.chinese,T["default"].createElement("p",null,h.english)),o.length>1&&T["default"].createElement("div",{className:"demoLinks"},T["default"].createElement("ul",null,o.map(function(e,t){return T["default"].createElement("li",{key:t},T["default"].createElement("a",{href:window.location.protocol+"//"+window.location.host+"/kitchen-sink/"+a+"/#"+a+"-demo-"+t},e.meta.title))}))),o.map(function(e,t){return T["default"].createElement("div",{className:"demo-preview-item",id:a+"-demo-"+t,key:t},T["default"].createElement("div",{className:"demoTitle"},e.meta.title),e.preview(T["default"],E["default"]),e.style?T["default"].createElement("style",{dangerouslySetInnerHTML:{__html:e.style}}):null)}));if(m.indexOf(a)>-1){var C=l.hash.substr(1).split("-demo-"),x=o[C.length>1?C[1]:0];w=T["default"].createElement("div",{style:{height:"100%"}},x.preview(T["default"],E["default"]),x.style?T["default"].createElement("style",{dangerouslySetInnerHTML:{__html:x.style}}):null),"list-view"===a&&(S.className="spe-drawer")}var O=e?null:{minHeight:document.documentElement.clientHeight},N=this.state.triggerActive;return T["default"].createElement("div",{id:a},T["default"].createElement("div",{className:"demo-drawer-trigger"},T["default"].createElement("span",{onClick:this.onOpenChange,style:N?{color:"#108ee9"}:{}},T["default"].createElement(u["default"],{onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,type:"menu"}))),T["default"].createElement("div",{className:"demo-drawer-container"},T["default"].createElement(i["default"],(0,v["default"])({style:O,sidebar:b,dragHandleStyle:{display:"none"}},S),w)))},t}(T["default"].Component);t["default"]=N},519:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var o=(n(171),n(244)),r=a(o),i=n(7),l=a(i),u=(n(52),n(65)),s=a(u),d=(n(17),n(31)),c=a(d),f=(n(21),n(33)),p=a(f),h=n(4),m=a(h),y=n(6),g=a(y),v=n(5),b=a(v),T=n(1),S=a(T),E=n(94),w=n(337),C=a(w),k=n(336),x=a(k),P=n(335),O=a(P),N={"action-sheet":"cYmaBafYBnAxCqQ","activity-indicator":"yVtRfZGoDxXObTK",alert:"XdSYKalBelFOMqd",badge:"UwUpBYPYnlwVicM",button:"ZRDUYEzfOzKWdzE",carousel:"FbIGJuDaiQoKNvj",checkbox:"dWPGltvdjaanrRd",collapse:"yIQQHiTULgYehij","date-picker":"IQtMSWmYwLEuqln",drawer:"oSokuHUVgeoTLJl",popup:"gfWmRfZNzMyVUss",popover:"iIOLFHTKUCxBgUV",flex:"zFqYaBWIPpYYORq","float-menu":"dSOLngHNazulnFR",grid:"UBGcnLKfVQIXgUb",icon:"yhnfleZZoezOjtU","image-picker":"NDsSvklLUeodsHK","input-item":"SdSqpihcSBoBrFO",list:"tiapjpdKPQGHhnC","list-action":"nIYrkZcGvKXjQhX","list-view":"lMztpIPTRAIWGIP",menu:"QeVVHHEAhSiVtXt",modal:"HzRRcuwtqUCCOBg","nav-bar":"qzZlligUfwgFjwD",result:"jFrmGCOsQeEUrnR",picker:"STBLvEutBwPySbL",progress:"ihijukOXDlqXvPS",radio:"MJszdVSBKhtGmIP","refresh-control":"nUAtybajGulmcSM","search-bar":"QnAmpSwlfPzjpSL",slider:"mCyccAjoVLFVhSH",stepper:"eYnIAokGATNUxlD",steps:"nvQVDIUiTmXcJtO","switch":"ITFdMlELFchsTmz",tabs:"stWeDgdtEIKoiTU",tag:"gfstSzAhvXqKyEg","textarea-item":"PfzuWlDVfndrQUK",timeline:"aIomfcRsRHmPyNo",toast:"nREwETegxvDndJZ","notice-bar":"EFpWULKNsectBDK","white-space":"NfomhEsOdhFxEws","wing-blank":"DUkfOYZVcLctGot",card:"daARhPjKcxlSuuZ",tooltip:"RvpANXExTEUwQTV",pagination:"fOQwMYUYaRRKYtd",loading:"DyAmULrLMBrgoOy",table:"TbRxKTMOzgrCvMR",form:"hZDnBrVwPmrgrLq","swipe-action":"nlDYwTsLwJdnaKc",accordion:"jGVfAYlFPECtWvI","tab-bar":"OZInMeAaDCHtaJU","segmented-control":"qCqRFuSbewqIWyv"},M=function(e){function t(n){(0,m["default"])(this,t);var a=(0,g["default"])(this,e.call(this,n));return a.state={open:!1},a.onOpenChange=a.onOpenChange.bind(a),a}return(0,b["default"])(t,e),t.prototype.onOpenChange=function(){this.setState({open:!this.state.open})},t.prototype.render=function(){var e=this.props.picked,t=e.components,n=document.documentElement.clientWidth/3,a={width:n+"px",height:(n>=138*window.devicePixelRatio?138*window.devicePixelRatio:n)+"px",
display:"inline-block"},o={};t.forEach(function(e){var t=e.meta;o[t.category]||(o[t.category]=[]),o[t.category].push(t)});var i=S["default"].createElement("div",null,S["default"].createElement("div",{className:"demo-drawer-home"},S["default"].createElement(E.Link,{to:"/"},"Ant Design Mobile")),Object.keys(o).sort(function(e,t){return O["default"].categoryOrder[e]-O["default"].categoryOrder[t]}).map(function(e,t){return S["default"].createElement(p["default"],{key:t,renderHeader:function(){return e}},o[e].map(function(e,t){var n=e.filename.split("/")[1];return S["default"].createElement(p["default"].Item,{key:t},S["default"].createElement(E.Link,{to:"/"+n+"/"},e.english,S["default"].createElement("span",{style:{fontSize:24,color:"#888"}},e.chinese)))}))})),u={open:this.state.open,position:"left",onOpenChange:this.onOpenChange};return S["default"].createElement("div",null,S["default"].createElement("div",{className:"demo-drawer-trigger"},S["default"].createElement("span",{onClick:this.onOpenChange},S["default"].createElement(c["default"],{type:"menu"}))),S["default"].createElement("div",{className:"demo-drawer-container"},S["default"].createElement(r["default"],(0,l["default"])({sidebar:i,dragHandleStyle:{display:"none"}},u),S["default"].createElement(C["default"],{isIndex:!0},Object.keys(o).sort(function(e,t){return O["default"].categoryOrder[e]-O["default"].categoryOrder[t]}).map(function(e,t){return S["default"].createElement(p["default"],{key:t,renderHeader:function(){return e}},function(){for(var n=[],r=[],i=0;i<o[e].length;i++){var l=o[e][i],u=l.filename.split("/")[1],d=N[u]||"nREwETegxvDndJZ";r.push(S["default"].createElement(x["default"],{logo:"https://os.alipayobjects.com/rmsportal/"+d+".png",title:l.chinese,subtitle:l.english,style:a,key:"flexitem-"+i,linkTo:"/"+u+"/"}))}return n.push(S["default"].createElement(s["default"],{wrap:"wrap",className:"antm-demo-flex",key:"flex-"+t},r)),n}())})))))},t}(S["default"].Component);t["default"]=M,e.exports=t["default"]},576:function(e,t){},577:function(e,t){},1150:function(e,t){},1399:function(e,t,n){function a(e){return n(o(e))}function o(e){return r[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var r={"./template/KitchenSink/Base.less":1150,"./template/KitchenSink/Demo":518,"./template/KitchenSink/Demo.jsx":518,"./template/KitchenSink/Item":336,"./template/KitchenSink/Item.jsx":336,"./template/KitchenSink/Item.less":576,"./template/KitchenSink/Page":337,"./template/KitchenSink/Page.jsx":337,"./template/KitchenSink/Page.less":577,"./template/KitchenSink/index":519,"./template/KitchenSink/index.jsx":519,"./template/NotFound":338,"./template/NotFound.jsx":338};a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=1399}});