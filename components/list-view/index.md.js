webpackJsonp([85],{706:function(e,i,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var l=t(1),s=(o(l),t(2));o(s);e.exports={content:["section",["p","\u5355\u4e2a\u8fde\u7eed\u6a21\u5757\u5782\u76f4\u6392\u5217\uff0c\u663e\u793a\u591a\u884c\u6587\u672c\u5185\u5bb9\u3002eg\uff1a\u57ce\u5e02\u9009\u62e9\u3002"],["h3","\u89c4\u5219"],["ul",["li",["p","\u6700\u9002\u7528\u4e8e\u663e\u793a\u540c\u7c7b\u7684\u6570\u636e\u7c7b\u578b\u6216\u8005\u6570\u636e\u7c7b\u578b\u7ec4\u3002"]],["li",["p","\u53ea\u652f\u6301\u5782\u76f4\u6eda\u52a8\u3002"]],["li",["p","\u53ef\u4ee5\u901a\u8fc7\u65e5\u671f\u3001\u5b57\u6bcd\u987a\u5e8f\u6216\u8005\u5176\u5b83\u53c2\u6570\u6765\u8fc7\u6ee4\u6570\u636e\u6216\u6539\u53d8\u6bcf\u884c\u5217\u8868\u7684\u987a\u5e8f\u3002"]]]],meta:{category:"UI Views",type:"UI Views",chinese:"\u957f\u5217\u8868",english:"ListView",filename:"components/list-view/index.md"},toc:["ul",["li",["a",{href:"#API-(-\u9002\u7528\u5e73\u53f0\uff1aWEB\u3001React-Native-)"},"API ( \u9002\u7528\u5e73\u53f0\uff1aWEB\u3001React-Native )"]],["li",["a",{href:"#\u5e38\u89c1\u95ee\u9898\u4e0e\u5b9e\u73b0\u539f\u7406"},"\u5e38\u89c1\u95ee\u9898\u4e0e\u5b9e\u73b0\u539f\u7406"]]],api:["section",["h2","API ( \u9002\u7528\u5e73\u53f0\uff1aWEB\u3001React-Native )"],["p","same as ",["a",{title:null,href:"https://facebook.github.io/react-native/docs/listview.html#content"},"React Native ListView"],"\n(v0.26)."],["h4","\u4e0d\u652f\u6301\u7684\u7279\u6027"],["blockquote",["p","\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u4e0d\u652f\u6301\u201c\u5e73\u53f0\u7279\u6709\u201d\u7684API\uff0c\u4f8b\u5982",["code","android"],"endFillColor\u3001",["code","ios"],"alwaysBounceHorizontal\u3002\n\u53e6\u5916\uff0c\u4f7f\u7528 css \u4ee3\u66ff react-native \u7684 style \u8bbe\u7f6e\u65b9\u5f0f\u3002"]],["ul",["li",["p","onChangeVisibleRows"]],["li",["p","stickyHeaderIndices"]],["li",["p",["a",{title:null,href:"https://facebook.github.io/react-native/docs/scrollview.html#props"},"ScrollView"]," props:"],["ul",["li",["p","keyboardDismissMode"]],["li",["p","keyboardShouldPersistTaps"]],["li",["p","onContentSizeChange (\u4f7f\u7528",["code","onLayout"],"\u66ff\u4ee3)"]],["li",["p","removeClippedSubviews"]],["li",["p","scrollEnabled"]],["li",["p","showsHorizontalScrollIndicator (\u4f7f\u7528 css style \u66ff\u4ee3)"]],["li",["p","showsVerticalScrollIndicator (\u4f7f\u7528 css style \u66ff\u4ee3)"]]]],["li",["p",["a",{title:null,href:"https://facebook.github.io/react-native/docs/view.html#props"},"View"]," props: ",["strong","\u53ea\u652f\u6301",["code","onLayout"]]]]],["h4","\u65b0\u589eAPI (web)"],["ul",["li",["p","useBodyScroll (boolean, false) - \u4f7f\u7528 html \u7684 ",["code","body"]," \u4f5c\u4e3a\u6eda\u52a8\u5bb9\u5668"]],["li",["p","stickyHeader \u56fa\u5b9a\u533a\u5757\u6807\u9898\u5230\u9875\u9762\u9876\u90e8 (\u6ce8\u610f: \u8bbe\u7f6e\u540e\uff0cScrollComponent \u5c06\u88ab\u6e32\u67d3\u5230 body \u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u91cc\uff0c\u4f7f\u7528 html \u7684 ",["code","body"]," \u4f5c\u4e3a\u6eda\u52a8\u5bb9\u5668)"],["ul",["li",["p","stickyProps / stickyContainerProps (see ",["a",{title:null,href:"https://github.com/captivationsoftware/react-sticky"},"react-sticky"],")"]]]],["li",["p","renderBodyComponent \u6e32\u67d3\u81ea\u5b9a\u4e49\u7684 body \u7ec4\u4ef6"]],["li",["p","renderSectionBodyWrapper - \u6e32\u67d3\u81ea\u5b9a\u4e49\u7684\u533a\u5757\u5305\u88f9\u7ec4\u4ef6"]],["li",["p","useZscroller (boolean, false) - \u4f7f\u7528 zscroller \u6765\u652f\u6301 RefreshControl (",["code","useBodyScroll"]," and sticky \u5931\u6548)"]],["li",["p","scrollerOptions - ",["a",{title:null,href:"https://github.com/yiminghe/zscroller#options"},"zscroller options"]]]],["h3","ListView.IndexedList"],["blockquote",["p","\u6ce8\u610f\uff1a\u7531\u4e8e\u9700\u8981\u76f4\u63a5scroll\u5230\u4efb\u610f\u4f4d\u7f6e\u3001\u53ea\u652f\u6301\u5206\u4e24\u6b65\u6e32\u67d3\uff0c\u6240\u4ee5\u5217\u8868\u6570\u636e\u91cf\u8fc7\u5927\u65f6\u3001\u6027\u80fd\u4f1a\u6709\u5f71\u54cd"]],["p","\u652f\u6301\u53f3\u4fa7\u5bfc\u822a\u529f\u80fd"],["ul",["li",["p","quickSearchBarTop (object{value:string, label:string}, \u9ed8\u8ba4\u4e3a'#') - \u5feb\u6377\u5bfc\u822a\u680f\u7f6e\u9876\u6309\u94ae"]],["li",["p","quickSearchBarStyle (object) - quickSearchBar \u7684 style"]],["li",["p","onQuickSearch (function()) \u5feb\u6377\u5bfc\u822a\u5207\u6362\u65f6\u89e6\u53d1"]],["li",["p","delayTime (number) - \u9ed8\u8ba4 100ms, \u5ef6\u8fdf\u6e32\u67d3\u65f6\u95f4\u8bbe\u7f6e\uff08\u7528\u4e8e\u9996\u5c4f\u4f18\u5316\uff0c\u4e00\u5f00\u59cb\u6e32\u67d3",["code","initialListSize"],"\u6570\u91cf\u7684\u6570\u636e\uff0c\u5728\u6b64\u65f6\u95f4\u540e\u3001\u5ef6\u8fdf\u6e32\u67d3\u5269\u4f59\u7684\u6570\u636e\u9879\u3001\u5373",["code","totalRowCount - initialListSize"],"\uff09"]],["li",["p","delayActivityIndicator (react node) - \u5ef6\u8fdf\u6e32\u67d3\u7684 loading \u6307\u793a\u5668"]]],["h2","\u5e38\u89c1\u95ee\u9898\u4e0e\u5b9e\u73b0\u539f\u7406"],["ul",["li",["p","onEndReached\u4e0d\u505c\u8c03\u7528 ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/issues/520#issuecomment-263510596"},"https://github.com/ant-design/ant-design-mobile/issues/520#issuecomment-263510596"]]],["li",["p","\u5982\u4f55\u8bbe\u7f6e\u6eda\u52a8\u5230\u56fa\u5b9a\u7684\u4f4d\u7f6e\uff1f(\u4f8b\u5982\uff0c\u70b9\u51fb\u5217\u8868\u67d0\u4e00\u9879\u8fdb\u5165\u53e6\u4e00\u4e2a\u9875\u9762\uff0c\u518d\u8fd4\u56de) #541"]],["li",["p","\u5176\u4ed6\u95ee\u9898\uff1a#633 #573"]]],["p","ListView \u6709\u4e09\u79cd\u7c7b\u578b\u7684\u6eda\u52a8\u5bb9\u5668\uff1a"],["ol",["li",["p","html \u7684 body \u5bb9\u5668"]],["li",["p","\u5c40\u90e8 div \u5bb9\u5668 (\u901a\u8fc7 ref \u83b7\u53d6\u5230)"]],["li",["p","\u4f7f\u7528 zscroller \u7684\u6a21\u62df\u6eda\u52a8\u5bb9\u5668"]]],["p","\u524d\u4e24\u79cd\u83b7\u53d6\u5230\u76f8\u5e94\u5143\u7d20\u540e\uff0c\u8c03\u7528 scrollTo \u65b9\u6cd5\u3001\u6eda\u52a8\u5230\u6307\u5b9a\u4f4d\u7f6e\uff1b\n\u7b2c\u4e09\u79cd\u901a\u8fc7 ref \u83b7\u53d6\u5230\u7ec4\u4ef6\u5bf9\u8c61\u3001\u518d\u83b7\u53d6\u5230 domScroller \u3001\u8c03\u7528 scrollTo \u65b9\u6cd5\u3002\n\u4f46\u6eda\u52a8\u5230\u5177\u4f53\u4ec0\u4e48\u4f4d\u7f6e\uff0c\u4e1a\u52a1\u4e0a\u5176\u5b9e\u4e5f\u6bd4\u8f83\u96be\u786e\u5b9a\u3002"],["p","\u5bf9 dataSource \u5bf9\u8c61\u53d8\u5316\u65f6\u7684\u5904\u7406\u65b9\u5f0f\uff1a\nListView \u5728 componentWillReceiveProps \u91cc\u4f1a\u76d1\u542c dataSource \u5bf9\u8c61\u7684\u53d8\u5316\uff0c\u5e76\u505a\u4e00\u6b21\n",["a",{title:null,href:"https://github.com/react-component/m-list-view/blob/90badfdb6e94093136c86e5874ce6054eae88a0d/src/ListView.js#L156"},["code","this._renderMoreRowsIfNeeded()"]]," \uff0c\n\u7531\u4e8e\u6b64\u65f6",["a",{title:null,href:"https://github.com/react-component/m-list-view/blob/90badfdb6e94093136c86e5874ce6054eae88a0d/src/ListView.js#L348"},["code","this.state.curRenderedRowsCount === this.props.dataSource.getRowCount()"]],"\n\u5373\u5df2\u7ecf\u6e32\u67d3\u7684\u6570\u636e\u4e0e dataSource \u91cc\u5df2\u6709\u7684\u6570\u636e\u9879\u4e2a\u6570\u76f8\u540c\uff0c\u6240\u4ee5 ListView \u8ba4\u4e3a\u5e94\u8be5\u518d\u8c03\u7528 onEndReached \u65b9\u6cd5\u3002"]]}}});