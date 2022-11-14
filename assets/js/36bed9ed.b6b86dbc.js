(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{170:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var o=r(3),n=r(7),a=(r(0),r(501)),c=["components"],i={custom_edit_url:null,id:"24-load_classifier",title:"load_classifier()"},l={unversionedId:"codrone-edu/python/Sensors/24-load_classifier",id:"codrone-edu/python/Sensors/24-load_classifier",isDocsHomePage:!1,title:"load_classifier()",description:"Description",source:"@site/docs/codrone-edu/python/07-Sensors/24-load_classifier.md",sourceDirName:"codrone-edu/python/07-Sensors",slug:"/codrone-edu/python/Sensors/24-load_classifier",permalink:"/docs/codrone-edu/python/Sensors/24-load_classifier",editUrl:null,version:"current",sidebarPosition:24,frontMatter:{custom_edit_url:null,id:"24-load_classifier",title:"load_classifier()"},sidebar:"codroneEduSideBar",previous:{title:"get_front_color()",permalink:"/docs/codrone-edu/python/Sensors/23-get_front_color"},next:{title:"predict_colors()",permalink:"/docs/codrone-edu/python/Sensors/25-predict_colors"}},s=[],d={toc:s};function p(e){var t=e.components,r=Object(n.a)(e,c);return Object(a.b)("wrapper",Object(o.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h5",{id:"description"},"Description"),Object(a.b)("p",null,"load_classifier is a function that can load a custom color set onto the CoDrone EDU. If no custom color set is given then the default color set is loaded.\nThere is also an option to show the color set as a graph."),Object(a.b)("h5",{id:"syntax"},"Syntax"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"load_classifier()"),Object(a.b)("br",null),"\n",Object(a.b)("inlineCode",{parentName:"p"},"load_classifier(dataset, show_graph)")),Object(a.b)("h5",{id:"parameters"},"Parameters"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"dataset"),": An optional parameter to load a custom color set. If no color set is given then the default color set will be used. ",Object(a.b)("br",null),"\n",Object(a.b)("strong",{parentName:"p"},"show_graph"),": An optional boolean parameter that will show a graph of the color set data. The default value is False. ",Object(a.b)("br",null)),Object(a.b)("h5",{id:"returns"},"Returns"),Object(a.b)("p",null,"None"),Object(a.b)("h5",{id:"example-code"},"Example Code"),Object(a.b)("h6",{id:"python"},"Python"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},'#Python code\nfrom codrone_edu.drone import *\n\ndrone = Drone()\ndrone.pair()\n# This example assumes the "custom_color_data" directory exists\ndrone.load_classifier("custom_color_data")\n\ncolor_data = drone.get_color_data()\ncolor = drone.predict_colors(color_data)\nprint(color)\ndrone.close()\n')))}p.isMDXComponent=!0},501:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),d=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(r),b=o,f=p["".concat(c,".").concat(b)]||p[b]||u[b]||a;return r?n.a.createElement(f,i(i({ref:t},s),{},{components:r})):n.a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);